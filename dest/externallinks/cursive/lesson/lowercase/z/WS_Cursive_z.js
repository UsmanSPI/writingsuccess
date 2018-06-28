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
	this.shape.graphics.f("#FFFFFF").s().p("AyPUGQg+hFAAh9QAAieBIiZQA+iGB4iLQCUinFdkRIh1AbQhsAAAAhrQAAg3C5jcQCNihCgj4QDJk6ACh8QgJAAgFAFQhnAAiDBMQhiA6iEBwQkiD2gjAAQhsAAAAh6QAAgoAkgrQCDijEIiqID2iDQCBg4BbAAQBwAABAA4QBGA5AABsQAABmg8CQIiSERQiADOjYEJIBeApQCUhiFCiQQDXiDFulnIDtjhQA6gnAoAAQBSAAAABeQAAAdjwEmQhwCDjhC2QjeC0icBbQkXB0h1BUIAAA+QAACXhIDNQhIDQh1C7QiBDLiSB4QilCEihAAQh6AAg+hNgAqFH/QivCehKBpQhsCjAAClQAAAaATAAQBlAABuhkQBghWBdiaQCzkcAsjmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.9,-136.2,246,272.6);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0,scaleX:1,scaleY:1,rotation:40.4,guide:{path:[48.4,-50.5,3.9,-33.4,-26.3,12.6]}},59).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AA1kPIBIhMICkCaIhIBMg");
	var mask_graphics_1 = new cjs.Graphics().p("Ah7ggIBThYICkCZIhUBYg");
	var mask_graphics_2 = new cjs.Graphics().p("AiAgaIBehkICjCZIheBkg");
	var mask_graphics_3 = new cjs.Graphics().p("AiGgVIBqhvICjCaIhqBvg");
	var mask_graphics_4 = new cjs.Graphics().p("AiMgPIB1h7ICkCaIh1B7g");
	var mask_graphics_5 = new cjs.Graphics().p("AiRgIICAiIICjCaIiACHg");
	var mask_graphics_6 = new cjs.Graphics().p("AiXgDICMiTICjCaIiMCTg");
	var mask_graphics_7 = new cjs.Graphics().p("AicACICWieICjCbIiWCeg");
	var mask_graphics_8 = new cjs.Graphics().p("AiiAJICiirICjCbIiiCqg");
	var mask_graphics_9 = new cjs.Graphics().p("AioAOICsi2IClCbIitC2g");
	var mask_graphics_10 = new cjs.Graphics().p("AitAVIC3jDICkCbIi3DCg");
	var mask_graphics_11 = new cjs.Graphics().p("AizAaIDDjOICkCbIjDDOg");
	var mask_graphics_12 = new cjs.Graphics().p("Ai5AgIDOjaIClCbIjODag");
	var mask_graphics_13 = new cjs.Graphics().p("Ai+AnIDZjnICkCbIjZDmg");
	var mask_graphics_14 = new cjs.Graphics().p("AjEAsIDljyICkCbIjlDyg");
	var mask_graphics_15 = new cjs.Graphics().p("AjJAyIDvj+ICkCbIjvD+g");
	var mask_graphics_16 = new cjs.Graphics().p("AjPA4ID7kKICkCbIj7EKg");
	var mask_graphics_17 = new cjs.Graphics().p("AjVA+IEGkWIClCbIkHEWg");
	var mask_graphics_18 = new cjs.Graphics().p("AjaBEIERkiICkCbIkREig");
	var mask_graphics_19 = new cjs.Graphics().p("AjgBKIEdkuICkCbIkdEug");
	var mask_graphics_20 = new cjs.Graphics().p("AjmBQIEok6IClCbIkoE6g");
	var mask_graphics_21 = new cjs.Graphics().p("AjrBWIEzlFICkCaIkzFFg");
	var mask_graphics_22 = new cjs.Graphics().p("AjxBcIE/lRICkCaIk+FRg");
	var mask_graphics_23 = new cjs.Graphics().p("Aj2BiIFJldICkCaIlJFeg");
	var mask_graphics_24 = new cjs.Graphics().p("Aj8BoIFVlpICkCaIlVFpg");
	var mask_graphics_25 = new cjs.Graphics().p("AkCBuIFgl1IClCaIlhF1g");
	var mask_graphics_26 = new cjs.Graphics().p("AkHB0IFrmBICkCaIlrGCg");
	var mask_graphics_27 = new cjs.Graphics().p("AkNB6IF3mNICkCaIl3GNg");
	var mask_graphics_28 = new cjs.Graphics().p("AkTCAIGCmZIClCaImCGZg");
	var mask_graphics_29 = new cjs.Graphics().p("AkYCGIGNmlICkCaImNGlg");
	var mask_graphics_30 = new cjs.Graphics().p("AkeCMIGYmyIClCbImZGxg");
	var mask_graphics_31 = new cjs.Graphics().p("AkkCSIGkm+ICkCbImkG+g");
	var mask_graphics_32 = new cjs.Graphics().p("AkpCYIGvnKICkCbImvHJg");
	var mask_graphics_33 = new cjs.Graphics().p("AkvCeIG6nVIClCbIm7HUg");
	var mask_graphics_34 = new cjs.Graphics().p("Ak1CkIHGnhICkCbInFHgg");
	var mask_graphics_35 = new cjs.Graphics().p("Ak6CqIHQntIClCbInRHsg");
	var mask_graphics_36 = new cjs.Graphics().p("AlACwIHcn5IClCbIncH4g");
	var mask_graphics_37 = new cjs.Graphics().p("AlFC2IHnoFICkCbInnIEg");
	var mask_graphics_38 = new cjs.Graphics().p("AlLC8IHyoRIClCbInzIQg");
	var mask_graphics_39 = new cjs.Graphics().p("AlRDCIH+odICkCbIn+Icg");
	var mask_graphics_40 = new cjs.Graphics().p("AlWDHIIJooICkCbIoJIog");
	var mask_graphics_41 = new cjs.Graphics().p("AlcDNIIUo0IClCbIoUI0g");
	var mask_graphics_42 = new cjs.Graphics().p("AliDUIIgpBICkCbIofJAg");
	var mask_graphics_43 = new cjs.Graphics().p("AlnDZIIqpMIClCbIoqJMg");
	var mask_graphics_44 = new cjs.Graphics().p("AltDfII2pYIClCbIo2JYg");
	var mask_graphics_45 = new cjs.Graphics().p("AlyDlIJBpkICkCbIpBJkg");
	var mask_graphics_46 = new cjs.Graphics().p("Al4DrIJMpwIClCbIpNJwg");
	var mask_graphics_47 = new cjs.Graphics().p("Al+DxIJYp8ICkCbIpXJ8g");
	var mask_graphics_48 = new cjs.Graphics().p("AmDD3IJjqIICkCbIpjKIg");
	var mask_graphics_49 = new cjs.Graphics().p("AmJD9IJuqUIClCbIpuKUg");
	var mask_graphics_50 = new cjs.Graphics().p("AmPEEIJ6qhICkCbIp5Kgg");
	var mask_graphics_51 = new cjs.Graphics().p("AmUEJIKEqsIClCbIqFKsg");
	var mask_graphics_52 = new cjs.Graphics().p("AmaEPIKQq4IClCbIqQK4g");
	var mask_graphics_53 = new cjs.Graphics().p("AmfEVIKbrEICkCbIqbLEg");
	var mask_graphics_54 = new cjs.Graphics().p("AmlEbIKmrQIClCbIqnLQg");
	var mask_graphics_55 = new cjs.Graphics().p("AmrEhIKyrcICkCbIqxLcg");
	var mask_graphics_56 = new cjs.Graphics().p("AmwEnIK9roICkCbIq9Log");
	var mask_graphics_57 = new cjs.Graphics().p("Am2EtILIr0IClCcIrILzg");
	var mask_graphics_58 = new cjs.Graphics().p("Am8EzILUsAICkCcIrTL/g");
	var mask_graphics_59 = new cjs.Graphics().p("AnBE5ILesMIClCcIrfMKg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:28.9,y:-34.8}).wait(1).to({graphics:mask_graphics_1,x:45.4,y:-57.5}).wait(1).to({graphics:mask_graphics_2,x:44.8,y:-56.9}).wait(1).to({graphics:mask_graphics_3,x:44.3,y:-56.3}).wait(1).to({graphics:mask_graphics_4,x:43.7,y:-55.7}).wait(1).to({graphics:mask_graphics_5,x:43.2,y:-55.1}).wait(1).to({graphics:mask_graphics_6,x:42.6,y:-54.5}).wait(1).to({graphics:mask_graphics_7,x:42,y:-53.9}).wait(1).to({graphics:mask_graphics_8,x:41.5,y:-53.3}).wait(1).to({graphics:mask_graphics_9,x:40.9,y:-52.8}).wait(1).to({graphics:mask_graphics_10,x:40.3,y:-52.2}).wait(1).to({graphics:mask_graphics_11,x:39.8,y:-51.6}).wait(1).to({graphics:mask_graphics_12,x:39.2,y:-51}).wait(1).to({graphics:mask_graphics_13,x:38.7,y:-50.4}).wait(1).to({graphics:mask_graphics_14,x:38.1,y:-49.8}).wait(1).to({graphics:mask_graphics_15,x:37.5,y:-49.2}).wait(1).to({graphics:mask_graphics_16,x:37,y:-48.6}).wait(1).to({graphics:mask_graphics_17,x:36.4,y:-48}).wait(1).to({graphics:mask_graphics_18,x:35.8,y:-47.4}).wait(1).to({graphics:mask_graphics_19,x:35.3,y:-46.8}).wait(1).to({graphics:mask_graphics_20,x:34.7,y:-46.2}).wait(1).to({graphics:mask_graphics_21,x:34.2,y:-45.6}).wait(1).to({graphics:mask_graphics_22,x:33.6,y:-45}).wait(1).to({graphics:mask_graphics_23,x:33,y:-44.4}).wait(1).to({graphics:mask_graphics_24,x:32.5,y:-43.8}).wait(1).to({graphics:mask_graphics_25,x:31.9,y:-43.2}).wait(1).to({graphics:mask_graphics_26,x:31.3,y:-42.6}).wait(1).to({graphics:mask_graphics_27,x:30.8,y:-42.1}).wait(1).to({graphics:mask_graphics_28,x:30.2,y:-41.5}).wait(1).to({graphics:mask_graphics_29,x:29.7,y:-40.9}).wait(1).to({graphics:mask_graphics_30,x:29.1,y:-40.3}).wait(1).to({graphics:mask_graphics_31,x:28.6,y:-39.7}).wait(1).to({graphics:mask_graphics_32,x:28,y:-39.1}).wait(1).to({graphics:mask_graphics_33,x:27.4,y:-38.5}).wait(1).to({graphics:mask_graphics_34,x:26.9,y:-37.9}).wait(1).to({graphics:mask_graphics_35,x:26.3,y:-37.3}).wait(1).to({graphics:mask_graphics_36,x:25.7,y:-36.7}).wait(1).to({graphics:mask_graphics_37,x:25.2,y:-36.1}).wait(1).to({graphics:mask_graphics_38,x:24.6,y:-35.5}).wait(1).to({graphics:mask_graphics_39,x:24.1,y:-34.9}).wait(1).to({graphics:mask_graphics_40,x:23.5,y:-34.3}).wait(1).to({graphics:mask_graphics_41,x:22.9,y:-33.7}).wait(1).to({graphics:mask_graphics_42,x:22.4,y:-33.1}).wait(1).to({graphics:mask_graphics_43,x:21.8,y:-32.5}).wait(1).to({graphics:mask_graphics_44,x:21.2,y:-31.9}).wait(1).to({graphics:mask_graphics_45,x:20.7,y:-31.4}).wait(1).to({graphics:mask_graphics_46,x:20.1,y:-30.8}).wait(1).to({graphics:mask_graphics_47,x:19.6,y:-30.2}).wait(1).to({graphics:mask_graphics_48,x:19,y:-29.6}).wait(1).to({graphics:mask_graphics_49,x:18.4,y:-29}).wait(1).to({graphics:mask_graphics_50,x:17.9,y:-28.4}).wait(1).to({graphics:mask_graphics_51,x:17.3,y:-27.8}).wait(1).to({graphics:mask_graphics_52,x:16.7,y:-27.2}).wait(1).to({graphics:mask_graphics_53,x:16.2,y:-26.6}).wait(1).to({graphics:mask_graphics_54,x:15.6,y:-26}).wait(1).to({graphics:mask_graphics_55,x:15.1,y:-25.4}).wait(1).to({graphics:mask_graphics_56,x:14.5,y:-24.8}).wait(1).to({graphics:mask_graphics_57,x:13.9,y:-24.2}).wait(1).to({graphics:mask_graphics_58,x:13.4,y:-23.6}).wait(1).to({graphics:mask_graphics_59,x:12.8,y:-23}).wait(1));

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
(lib.WS_Cursive_z = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_546 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(546).call(this.frame_546).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(193.6,197.8,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[193.7,197.9,198.4,192.8,207.8,185,215.9,178.2,224.4,171.9,233.2,165.4,242.4,159.6,253.1,153,265.2,150.2,279,147,282.9,159.2,283.8,162.1,283.7,165.2,283.3,176.7,279.3,184.7,275.4,192.6,270.2,202.8,265,212.9,256.4,223.5,247.8,234,240.6,243.6,233.4,253.2,226.7,260.4,220.4,267.3,218.8,269.3]}},112).wait(14).to({startPosition:0},0).to({guide:{path:[218.9,269.4,257.5,273.9,249.7,307,241.9,340.1,224.9,366.4,208,392.7,190,396.9,172.9,401,168,398.1]}},135).wait(15).to({startPosition:0},0).to({guide:{path:[167.7,398.5,159,391.3,168.6,363.8,178.2,336,214.7,306.7,251.3,277.4,280.5,263.3,309.8,249.1,338.2,223.8,366.3,198.9,384.3,178.1]}},180).wait(16).to({x:379.9,y:182.3},0).to({guide:{path:[379.9,182.3,414.2,211,439.3,196.3,468.4,179.2,494.7,201.3,517.4,220.3,542.6,235.5,569.5,251.5,598.5,238.7,615.1,231.3,630,223.9]}},65).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(219,270,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},112).wait(14).to({_off:false,x:167,y:398},0).to({_off:true},135).wait(15).to({_off:false,x:383.5,y:179},0).to({_off:true},180).wait(82));

	// Layer 13
	this.instance_1 = new lib.ar2("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(114.3,334.6,1,1,0,-105.6,74.4,0.8,-0.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(285).to({_off:false},0).wait(262));

	// Layer 10 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_285 = new cjs.Graphics().p("ADuWvICShvIIQK8IiSBvg");
	var mask_graphics_286 = new cjs.Graphics().p("AlVkiICdh2IIPK7IieB3g");
	var mask_graphics_287 = new cjs.Graphics().p("AlbkdICpiAIIOK7IipCAg");
	var mask_graphics_288 = new cjs.Graphics().p("AlhkZIC1iIIIOK7Ii1CIg");
	var mask_graphics_289 = new cjs.Graphics().p("AlnkUIDBiSIIOK7IjBCSg");
	var mask_graphics_290 = new cjs.Graphics().p("AltkQIDMiaIIPK7IjMCag");
	var mask_graphics_291 = new cjs.Graphics().p("AlzkMIDYiiIIPK7IjYCjg");
	var mask_graphics_292 = new cjs.Graphics().p("Al5kHIDkisIIPK7IjkCsg");
	var mask_graphics_293 = new cjs.Graphics().p("Al/kDIDwi0IIPK7IjwC1g");
	var mask_graphics_294 = new cjs.Graphics().p("AmEj+ID7i+IIOK7Ij7C+g");
	var mask_graphics_295 = new cjs.Graphics().p("AmKj6IEHjGIIPK7IkIDGg");
	var mask_graphics_296 = new cjs.Graphics().p("AmQj1IETjQIIOK7IkTDQg");
	var mask_graphics_297 = new cjs.Graphics().p("AmWjxIEfjYIIOK7IkfDYg");
	var mask_graphics_298 = new cjs.Graphics().p("AmcjtIEqjhIIPK8IkqDhg");
	var mask_graphics_299 = new cjs.Graphics().p("AmijoIE3jqIIOK7Ik2Dqg");
	var mask_graphics_300 = new cjs.Graphics().p("AmojkIFCjyIIPK7IlCDzg");
	var mask_graphics_301 = new cjs.Graphics().p("AmujfIFOj8IIPK7IlOD8g");
	var mask_graphics_302 = new cjs.Graphics().p("AmzjbIFZkEIIPK7IlaEEg");
	var mask_graphics_303 = new cjs.Graphics().p("Am5jWIFlkOIIOK7IllEOg");
	var mask_graphics_304 = new cjs.Graphics().p("Am/jSIFxkWIIOK7IlxEWg");
	var mask_graphics_305 = new cjs.Graphics().p("AnFjOIF9kfIIOK8Il9Efg");
	var mask_graphics_306 = new cjs.Graphics().p("AnLjJIGJkoIIOK7ImIEog");
	var mask_graphics_307 = new cjs.Graphics().p("AnRjFIGUkxIIPK8ImUExg");
	var mask_graphics_308 = new cjs.Graphics().p("AnXjAIGgk6IIPK7ImgE6g");
	var mask_graphics_309 = new cjs.Graphics().p("Andi8IGslCIIPK7ImsFCg");
	var mask_graphics_310 = new cjs.Graphics().p("Anii4IG3lKIIOK6Im3FLg");
	var mask_graphics_311 = new cjs.Graphics().p("AnoizIHDlUIIOK7InDFUg");
	var mask_graphics_312 = new cjs.Graphics().p("AnuivIHPlcIIOK7InPFcg");
	var mask_graphics_313 = new cjs.Graphics().p("An0iqIHalmIIPK7InaFmg");
	var mask_graphics_314 = new cjs.Graphics().p("An6imIHmluIIPK7InmFug");
	var mask_graphics_315 = new cjs.Graphics().p("AoAiiIHyl2IIPK7InyF2g");
	var mask_graphics_316 = new cjs.Graphics().p("AoGidIH+mAIIPK7In+GAg");
	var mask_graphics_317 = new cjs.Graphics().p("AoLiZIIJmIIIOK7IoJGIg");
	var mask_graphics_318 = new cjs.Graphics().p("AoRiUIIUmSIIQK7IoVGSg");
	var mask_graphics_319 = new cjs.Graphics().p("AoXiQIIgmaIIPK7IogGag");
	var mask_graphics_320 = new cjs.Graphics().p("AodiLIIsmkIIPK7IosGkg");
	var mask_graphics_321 = new cjs.Graphics().p("AojiHII3msIIQK7Io3Gsg");
	var mask_graphics_322 = new cjs.Graphics().p("AopiDIJEm0IIPK7IpDG0g");
	var mask_graphics_323 = new cjs.Graphics().p("Aovh+IJPm+IIQK7IpPG+g");
	var mask_graphics_324 = new cjs.Graphics().p("Ao1h6IJbnGIIQK7IpbHGg");
	var mask_graphics_325 = new cjs.Graphics().p("Ao6h1IJmnQIIQK7IpnHQg");
	var mask_graphics_326 = new cjs.Graphics().p("ApAhxIJynYIIPK7IpyHYg");
	var mask_graphics_327 = new cjs.Graphics().p("ApGhsIJ+niIIPK7Ip+Hig");
	var mask_graphics_328 = new cjs.Graphics().p("ApMhoIKKnqIIPK7IqKHqg");
	var mask_graphics_329 = new cjs.Graphics().p("ApShkIKWnzIIPK8IqVHyg");
	var mask_graphics_330 = new cjs.Graphics().p("ApYhfIKhn8IIQK7IqhH8g");
	var mask_graphics_331 = new cjs.Graphics().p("ApehbIKtoFIIQK8IqtIEg");
	var mask_graphics_332 = new cjs.Graphics().p("ApkhWIK5oOIIQK7Iq5IOg");
	var mask_graphics_333 = new cjs.Graphics().p("ApphSILEoWIIPK7IrEIWg");
	var mask_graphics_334 = new cjs.Graphics().p("ApwhNILSogIIPK7IrSIgg");
	var mask_graphics_335 = new cjs.Graphics().p("Ap3hIILgoqIIPK7IrgIqg");
	var mask_graphics_336 = new cjs.Graphics().p("Ap+hCILuo2IIPK7IrtI2g");
	var mask_graphics_337 = new cjs.Graphics().p("AqFg9IL7pAIIQK7Ir7JAg");
	var mask_graphics_338 = new cjs.Graphics().p("AqMg4IMJpKIIQK7IsJJKg");
	var mask_graphics_339 = new cjs.Graphics().p("AqTgzIMXpUIIQK7IsXJUg");
	var mask_graphics_340 = new cjs.Graphics().p("AqZguIMkpfIIQK8IslJeg");
	var mask_graphics_341 = new cjs.Graphics().p("AqggoIMypqIIPK7IsyJqg");
	var mask_graphics_342 = new cjs.Graphics().p("AqngjINAp0IIPK7ItAJ0g");
	var mask_graphics_343 = new cjs.Graphics().p("AqugeINNp+IIQK7ItNJ+g");
	var mask_graphics_344 = new cjs.Graphics().p("Aq1gZINcqIIIPK7ItbKIg");
	var mask_graphics_345 = new cjs.Graphics().p("Aq8gUINpqSIIQK7ItpKSg");
	var mask_graphics_346 = new cjs.Graphics().p("ArDgPIN3qdIIQK8It3Kcg");
	var mask_graphics_347 = new cjs.Graphics().p("ArJgJIOEqoIIQK7IuFKog");
	var mask_graphics_348 = new cjs.Graphics().p("ArQgEIOSqyIIPK7IuSKyg");
	var mask_graphics_349 = new cjs.Graphics().p("ArXAAIOgq7IIPK7IugK8g");
	var mask_graphics_350 = new cjs.Graphics().p("AreAFIOurFIIPK8IutLFg");
	var mask_graphics_351 = new cjs.Graphics().p("ArlAKIO8rQIIPK8Iu7LQg");
	var mask_graphics_352 = new cjs.Graphics().p("ArsAPIPJraIIQK8IvJLag");
	var mask_graphics_353 = new cjs.Graphics().p("ArzAVIPXrlIIQK8IvXLlg");
	var mask_graphics_354 = new cjs.Graphics().p("Ar5AaIPkrvIIPK8IvkLvg");
	var mask_graphics_355 = new cjs.Graphics().p("AsAAfIPyr5IIPK8IvyL5g");
	var mask_graphics_356 = new cjs.Graphics().p("AsHAkIQAsDIIPK8IwAMDg");
	var mask_graphics_357 = new cjs.Graphics().p("AsOApIQOsOIIPK8IwNMOg");
	var mask_graphics_358 = new cjs.Graphics().p("AsVAuIQbsYIIQK8IwbMYg");
	var mask_graphics_359 = new cjs.Graphics().p("AscA0IQpsjIIQK8IwpMjg");
	var mask_graphics_360 = new cjs.Graphics().p("AsjA5IQ3stIIQK8Iw3Mtg");
	var mask_graphics_361 = new cjs.Graphics().p("AspA+IREs3IIPK8IxEM3g");
	var mask_graphics_362 = new cjs.Graphics().p("AswBDIRStBIIPK8IxSNBg");
	var mask_graphics_363 = new cjs.Graphics().p("As3BIIRftLIIQK8IxgNLg");
	var mask_graphics_364 = new cjs.Graphics().p("As+BOIRttWIIQK8IxtNWg");
	var mask_graphics_365 = new cjs.Graphics().p("AtFBTIR7tgIIQK8Ix7Ngg");
	var mask_graphics_366 = new cjs.Graphics().p("AtMBYISJtrIIPK8IyINrg");
	var mask_graphics_367 = new cjs.Graphics().p("AtTBdISXt1IIQK8IyXN1g");
	var mask_graphics_368 = new cjs.Graphics().p("AtZBiISkt/IIPK8IykN/g");
	var mask_graphics_369 = new cjs.Graphics().p("AtgBnISxuJIIQK8IyyOJg");
	var mask_graphics_370 = new cjs.Graphics().p("AtnBtIS/uUIIQK8IzAOUg");
	var mask_graphics_371 = new cjs.Graphics().p("AtuByITNueIIQK8IzNOeg");
	var mask_graphics_372 = new cjs.Graphics().p("At1B3ITbupIIQK8IzbOpg");
	var mask_graphics_373 = new cjs.Graphics().p("At8B8ITpuzIIQK8IzpOzg");
	var mask_graphics_374 = new cjs.Graphics().p("AuDCBIT3u9IIPK8Iz2O9g");
	var mask_graphics_375 = new cjs.Graphics().p("AuJCGIUEvHIIPK8I0EPHg");
	var mask_graphics_376 = new cjs.Graphics().p("AuQCMIURvTIIQK9I0SPSg");
	var mask_graphics_377 = new cjs.Graphics().p("AuXCRIUgvdIIPK8I0gPdg");
	var mask_graphics_378 = new cjs.Graphics().p("AueCWIUtvnIIQK8I0tPng");
	var mask_graphics_379 = new cjs.Graphics().p("AulCbIU7vxIIQK8I07Pxg");
	var mask_graphics_380 = new cjs.Graphics().p("AusCgIVJv7IIPK8I1IP7g");
	var mask_graphics_381 = new cjs.Graphics().p("AuzClIVXwFIIQK8I1XQFg");
	var mask_graphics_382 = new cjs.Graphics().p("Au5CrIVkwRIIPK8I1kQRg");
	var mask_graphics_383 = new cjs.Graphics().p("AvACwIVywbIIPK8I1yQbg");
	var mask_graphics_384 = new cjs.Graphics().p("AvHC1IV/wlIIQK8I2AQlg");
	var mask_graphics_385 = new cjs.Graphics().p("AvOC6IWNwvIIQK8I2NQvg");
	var mask_graphics_386 = new cjs.Graphics().p("AvVC/IWbw5IIQK8I2bQ5g");
	var mask_graphics_387 = new cjs.Graphics().p("AvcDFIWpxFIIQK8I2pRFg");
	var mask_graphics_388 = new cjs.Graphics().p("AvjDKIW3xPIIQK8I23RPg");
	var mask_graphics_389 = new cjs.Graphics().p("AmqWuIXExaIIQK8I3FRag");
	var mask_graphics_390 = new cjs.Graphics().p("AvwDUIXSxjIIPK8I3SRjg");
	var mask_graphics_391 = new cjs.Graphics().p("Av3DaIXgxuIIPK8I3gRug");
	var mask_graphics_392 = new cjs.Graphics().p("Av/DfIXvx5IIQK8I3vR5g");
	var mask_graphics_393 = new cjs.Graphics().p("AwGDkIX9yDIIPK8I38SDg");
	var mask_graphics_394 = new cjs.Graphics().p("AwNDpIYLyNIIQK8I4LSNg");
	var mask_graphics_395 = new cjs.Graphics().p("AwUDvIYZyZIIPK8I4YSZg");
	var mask_graphics_396 = new cjs.Graphics().p("AwbD0IYnyjIIQK8I4nSjg");
	var mask_graphics_397 = new cjs.Graphics().p("AwiD5IY1ytIIQK8I41Stg");
	var mask_graphics_398 = new cjs.Graphics().p("AwpD/IZDy5IIQK8I5DS5g");
	var mask_graphics_399 = new cjs.Graphics().p("AwwEEIZRzDIIQK8I5RTDg");
	var mask_graphics_400 = new cjs.Graphics().p("Aw3EJIZfzNIIQK8I5gTNg");
	var mask_graphics_401 = new cjs.Graphics().p("Aw+EPIZuzZIIPK9I5uTYg");
	var mask_graphics_402 = new cjs.Graphics().p("AxFEUIZ7zjIIQK8I58Tjg");
	var mask_graphics_403 = new cjs.Graphics().p("AxMEZIaKztIIPK8I6KTtg");
	var mask_graphics_404 = new cjs.Graphics().p("AxTEfIaXz5IIQK8I6YT5g");
	var mask_graphics_405 = new cjs.Graphics().p("AxaEkIam0DIIPK8I6mUDg");
	var mask_graphics_406 = new cjs.Graphics().p("AxhEpIa00NIIPK8I60UNg");
	var mask_graphics_407 = new cjs.Graphics().p("AxoEuIbC0XIIPK8I7CUXg");
	var mask_graphics_408 = new cjs.Graphics().p("AxvEzIbP0iIIQK8I7QUig");
	var mask_graphics_409 = new cjs.Graphics().p("Ax2E5Ibe0tIIPK8I7eUtg");
	var mask_graphics_410 = new cjs.Graphics().p("Ax9E+Ibs03IIPK8I7sU3g");
	var mask_graphics_411 = new cjs.Graphics().p("AyEFDIb61BIIPK7I76VCg");
	var mask_graphics_412 = new cjs.Graphics().p("AyLFJIcI1NIIPK8I8IVNg");
	var mask_graphics_413 = new cjs.Graphics().p("AySFOIcW1XIIPK8I8WVXg");
	var mask_graphics_414 = new cjs.Graphics().p("AyZFTIck1iIIQK9I8lVhg");
	var mask_graphics_415 = new cjs.Graphics().p("AygFZIcy1tIIPK8I8yVtg");
	var mask_graphics_416 = new cjs.Graphics().p("AynFeIdA13IIQK8I9BV3g");
	var mask_graphics_417 = new cjs.Graphics().p("AyuFjIdO2BIIPK7I9OWCg");
	var mask_graphics_418 = new cjs.Graphics().p("Ay2FpIdd2NIIQK8I9dWNg");
	var mask_graphics_419 = new cjs.Graphics().p("Ay9FuIdr2XIIQK8I9rWXg");
	var mask_graphics_420 = new cjs.Graphics().p("AzEFzId52iIIQK9I95Whg");
	var mask_graphics_421 = new cjs.Graphics().p("AzLF5IeH2tIIQK8I+HWtg");
	var mask_graphics_422 = new cjs.Graphics().p("AzSF+IeV23IIQK8I+WW3g");
	var mask_graphics_423 = new cjs.Graphics().p("AzZGDIek3CIIPK8I+kXCg");
	var mask_graphics_424 = new cjs.Graphics().p("AzgGJIex3NIIQK8I+yXNg");
	var mask_graphics_425 = new cjs.Graphics().p("AznGOIfA3XIIPK8I/AXXg");
	var mask_graphics_426 = new cjs.Graphics().p("AzuGTIfN3hIIQK8I/OXhg");
	var mask_graphics_427 = new cjs.Graphics().p("Az1GZIfc3tIIPK8I/cXtg");
	var mask_graphics_428 = new cjs.Graphics().p("Az8GeIfq33IIPK8I/qX3g");
	var mask_graphics_429 = new cjs.Graphics().p("A0DGjIf44CIIPK8I/4YCg");
	var mask_graphics_430 = new cjs.Graphics().p("A0KGpMAgGgYNIIPK8MggGAYNg");
	var mask_graphics_431 = new cjs.Graphics().p("A0RGuMAgUgYXIIPK8MggUAYXg");
	var mask_graphics_432 = new cjs.Graphics().p("A0YGzMAgigYhIIPK8MggiAYhg");
	var mask_graphics_433 = new cjs.Graphics().p("A0fG5MAgwgYtIIQK8MggxAYtg");
	var mask_graphics_434 = new cjs.Graphics().p("A0mG+MAg+gY3IIPK8Mgg+AY3g");
	var mask_graphics_435 = new cjs.Graphics().p("A0uHDMAhNgZBIIQK8MghNAZBg");
	var mask_graphics_436 = new cjs.Graphics().p("A01HJMAhbgZNIIQK8MghbAZNg");
	var mask_graphics_437 = new cjs.Graphics().p("A08HOMAhpgZXIIQK8MghpAZXg");
	var mask_graphics_438 = new cjs.Graphics().p("A1DHTMAh3gZhIIQK8Mgh3AZhg");
	var mask_graphics_439 = new cjs.Graphics().p("A1KHZMAiFgZtIIQK8MgiFAZtg");
	var mask_graphics_440 = new cjs.Graphics().p("A1RHeMAiTgZ3IIQK8MgiUAZ3g");
	var mask_graphics_441 = new cjs.Graphics().p("A1YHjMAihgaBIIQK8MgiiAaBg");
	var mask_graphics_442 = new cjs.Graphics().p("A1fHpMAiwgaNIIPK8MgiwAaNg");
	var mask_graphics_443 = new cjs.Graphics().p("A1mHuMAi9gaXIIQK8Mgi+AaXg");
	var mask_graphics_444 = new cjs.Graphics().p("A1tHzMAjLgahIIQK8MgjLAahg");
	var mask_graphics_445 = new cjs.Graphics().p("A10H4MAjagarIIPK8MgjZAarg");
	var mask_graphics_446 = new cjs.Graphics().p("A17H+MAjnga3IIQK8MgjnAa3g");
	var mask_graphics_447 = new cjs.Graphics().p("A2CIDMAj2gbBIIPK8Mgj1AbBg");
	var mask_graphics_448 = new cjs.Graphics().p("A2JIIMAkEgbLIIPK8MgkEAbLg");
	var mask_graphics_449 = new cjs.Graphics().p("A2QIOMAkSgbXIIPK8MgkSAbXg");
	var mask_graphics_450 = new cjs.Graphics().p("A2XITMAkggbhIIPK8MgkgAbhg");
	var mask_graphics_451 = new cjs.Graphics().p("A2eIYMAkugbrIIPK8MgkuAbrg");
	var mask_graphics_452 = new cjs.Graphics().p("A2lIeMAk8gb3IIPK8Mgk8Ab3g");
	var mask_graphics_453 = new cjs.Graphics().p("A2tIjMAlLgcBIIPK8MglKAcBg");
	var mask_graphics_454 = new cjs.Graphics().p("A20IoMAlZgcLIIQK8MglZAcLg");
	var mask_graphics_455 = new cjs.Graphics().p("A27IuMAlngcXIIQK8MglnAcXg");
	var mask_graphics_456 = new cjs.Graphics().p("A3CIzMAl1gchIIPK8Mgl0Achg");
	var mask_graphics_457 = new cjs.Graphics().p("A3JI4MAmDgcrIIQK8MgmDAcrg");
	var mask_graphics_458 = new cjs.Graphics().p("A3QI+MAmRgc2IIQK7MgmRAc3g");
	var mask_graphics_459 = new cjs.Graphics().p("A3XJDMAmfgdBIIQK8MgmfAdBg");
	var mask_graphics_460 = new cjs.Graphics().p("A3eJIMAmtgdLIIQK8MgmtAdLg");
	var mask_graphics_461 = new cjs.Graphics().p("A3lJOMAm8gdWIIPK8Mgm7AdWg");
	var mask_graphics_462 = new cjs.Graphics().p("A3sJTMAnJgdhIIQK8MgnJAdhg");
	var mask_graphics_463 = new cjs.Graphics().p("AuzWuMAnXgdsIIQK7MgnYAdtg");
	var mask_graphics_464 = new cjs.Graphics().p("A4aJ2MAomgenIIPK9MgolAemg");
	var mask_graphics_465 = new cjs.Graphics().p("AwBWuMApzgfhIIQK6MgpzAfjg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(285).to({graphics:mask_graphics_285,x:91.2,y:215.5}).wait(1).to({graphics:mask_graphics_286,x:149.3,y:390}).wait(1).to({graphics:mask_graphics_287,x:149.9,y:389.5}).wait(1).to({graphics:mask_graphics_288,x:150.4,y:389.1}).wait(1).to({graphics:mask_graphics_289,x:151,y:388.6}).wait(1).to({graphics:mask_graphics_290,x:151.6,y:388.2}).wait(1).to({graphics:mask_graphics_291,x:152.2,y:387.8}).wait(1).to({graphics:mask_graphics_292,x:152.8,y:387.3}).wait(1).to({graphics:mask_graphics_293,x:153.4,y:386.9}).wait(1).to({graphics:mask_graphics_294,x:154,y:386.4}).wait(1).to({graphics:mask_graphics_295,x:154.6,y:386}).wait(1).to({graphics:mask_graphics_296,x:155.1,y:385.5}).wait(1).to({graphics:mask_graphics_297,x:155.7,y:385.1}).wait(1).to({graphics:mask_graphics_298,x:156.3,y:384.7}).wait(1).to({graphics:mask_graphics_299,x:156.9,y:384.2}).wait(1).to({graphics:mask_graphics_300,x:157.5,y:383.8}).wait(1).to({graphics:mask_graphics_301,x:158.1,y:383.3}).wait(1).to({graphics:mask_graphics_302,x:158.7,y:382.9}).wait(1).to({graphics:mask_graphics_303,x:159.3,y:382.4}).wait(1).to({graphics:mask_graphics_304,x:159.8,y:382}).wait(1).to({graphics:mask_graphics_305,x:160.4,y:381.6}).wait(1).to({graphics:mask_graphics_306,x:161,y:381.1}).wait(1).to({graphics:mask_graphics_307,x:161.6,y:380.7}).wait(1).to({graphics:mask_graphics_308,x:162.2,y:380.2}).wait(1).to({graphics:mask_graphics_309,x:162.8,y:379.8}).wait(1).to({graphics:mask_graphics_310,x:163.4,y:379.3}).wait(1).to({graphics:mask_graphics_311,x:163.9,y:378.9}).wait(1).to({graphics:mask_graphics_312,x:164.5,y:378.4}).wait(1).to({graphics:mask_graphics_313,x:165.1,y:378}).wait(1).to({graphics:mask_graphics_314,x:165.7,y:377.5}).wait(1).to({graphics:mask_graphics_315,x:166.3,y:377.1}).wait(1).to({graphics:mask_graphics_316,x:166.9,y:376.7}).wait(1).to({graphics:mask_graphics_317,x:167.5,y:376.2}).wait(1).to({graphics:mask_graphics_318,x:168.1,y:375.8}).wait(1).to({graphics:mask_graphics_319,x:168.6,y:375.3}).wait(1).to({graphics:mask_graphics_320,x:169.2,y:374.9}).wait(1).to({graphics:mask_graphics_321,x:169.8,y:374.5}).wait(1).to({graphics:mask_graphics_322,x:170.4,y:374}).wait(1).to({graphics:mask_graphics_323,x:171,y:373.6}).wait(1).to({graphics:mask_graphics_324,x:171.6,y:373.1}).wait(1).to({graphics:mask_graphics_325,x:172.2,y:372.7}).wait(1).to({graphics:mask_graphics_326,x:172.8,y:372.2}).wait(1).to({graphics:mask_graphics_327,x:173.3,y:371.8}).wait(1).to({graphics:mask_graphics_328,x:173.9,y:371.4}).wait(1).to({graphics:mask_graphics_329,x:174.5,y:370.9}).wait(1).to({graphics:mask_graphics_330,x:175.1,y:370.5}).wait(1).to({graphics:mask_graphics_331,x:175.7,y:370}).wait(1).to({graphics:mask_graphics_332,x:176.3,y:369.6}).wait(1).to({graphics:mask_graphics_333,x:176.9,y:369.1}).wait(1).to({graphics:mask_graphics_334,x:177.5,y:368.6}).wait(1).to({graphics:mask_graphics_335,x:178.2,y:368.1}).wait(1).to({graphics:mask_graphics_336,x:178.9,y:367.6}).wait(1).to({graphics:mask_graphics_337,x:179.6,y:367.1}).wait(1).to({graphics:mask_graphics_338,x:180.3,y:366.6}).wait(1).to({graphics:mask_graphics_339,x:181,y:366}).wait(1).to({graphics:mask_graphics_340,x:181.7,y:365.5}).wait(1).to({graphics:mask_graphics_341,x:182.3,y:365}).wait(1).to({graphics:mask_graphics_342,x:183,y:364.5}).wait(1).to({graphics:mask_graphics_343,x:183.7,y:364}).wait(1).to({graphics:mask_graphics_344,x:184.4,y:363.4}).wait(1).to({graphics:mask_graphics_345,x:185.1,y:362.9}).wait(1).to({graphics:mask_graphics_346,x:185.8,y:362.4}).wait(1).to({graphics:mask_graphics_347,x:186.5,y:361.9}).wait(1).to({graphics:mask_graphics_348,x:187.1,y:361.4}).wait(1).to({graphics:mask_graphics_349,x:187.8,y:360.9}).wait(1).to({graphics:mask_graphics_350,x:188.5,y:360.3}).wait(1).to({graphics:mask_graphics_351,x:189.2,y:359.8}).wait(1).to({graphics:mask_graphics_352,x:189.9,y:359.3}).wait(1).to({graphics:mask_graphics_353,x:190.6,y:358.8}).wait(1).to({graphics:mask_graphics_354,x:191.3,y:358.3}).wait(1).to({graphics:mask_graphics_355,x:191.9,y:357.8}).wait(1).to({graphics:mask_graphics_356,x:192.6,y:357.2}).wait(1).to({graphics:mask_graphics_357,x:193.3,y:356.7}).wait(1).to({graphics:mask_graphics_358,x:194,y:356.2}).wait(1).to({graphics:mask_graphics_359,x:194.7,y:355.7}).wait(1).to({graphics:mask_graphics_360,x:195.4,y:355.2}).wait(1).to({graphics:mask_graphics_361,x:196.1,y:354.7}).wait(1).to({graphics:mask_graphics_362,x:196.8,y:354.1}).wait(1).to({graphics:mask_graphics_363,x:197.5,y:353.6}).wait(1).to({graphics:mask_graphics_364,x:198.1,y:353.1}).wait(1).to({graphics:mask_graphics_365,x:198.8,y:352.6}).wait(1).to({graphics:mask_graphics_366,x:199.5,y:352}).wait(1).to({graphics:mask_graphics_367,x:200.2,y:351.5}).wait(1).to({graphics:mask_graphics_368,x:200.9,y:351}).wait(1).to({graphics:mask_graphics_369,x:201.6,y:350.5}).wait(1).to({graphics:mask_graphics_370,x:202.3,y:350}).wait(1).to({graphics:mask_graphics_371,x:202.9,y:349.5}).wait(1).to({graphics:mask_graphics_372,x:203.6,y:348.9}).wait(1).to({graphics:mask_graphics_373,x:204.3,y:348.4}).wait(1).to({graphics:mask_graphics_374,x:205,y:347.9}).wait(1).to({graphics:mask_graphics_375,x:205.7,y:347.4}).wait(1).to({graphics:mask_graphics_376,x:206.4,y:346.9}).wait(1).to({graphics:mask_graphics_377,x:207.1,y:346.3}).wait(1).to({graphics:mask_graphics_378,x:207.7,y:345.8}).wait(1).to({graphics:mask_graphics_379,x:208.4,y:345.3}).wait(1).to({graphics:mask_graphics_380,x:209.1,y:344.8}).wait(1).to({graphics:mask_graphics_381,x:209.8,y:344.3}).wait(1).to({graphics:mask_graphics_382,x:210.5,y:343.8}).wait(1).to({graphics:mask_graphics_383,x:211.2,y:343.2}).wait(1).to({graphics:mask_graphics_384,x:211.9,y:342.7}).wait(1).to({graphics:mask_graphics_385,x:212.5,y:342.2}).wait(1).to({graphics:mask_graphics_386,x:213.2,y:341.7}).wait(1).to({graphics:mask_graphics_387,x:213.9,y:341.2}).wait(1).to({graphics:mask_graphics_388,x:214.6,y:340.7}).wait(1).to({graphics:mask_graphics_389,x:157.8,y:215.4}).wait(1).to({graphics:mask_graphics_390,x:216,y:339.6}).wait(1).to({graphics:mask_graphics_391,x:216.7,y:339.1}).wait(1).to({graphics:mask_graphics_392,x:217.4,y:338.5}).wait(1).to({graphics:mask_graphics_393,x:218.1,y:338}).wait(1).to({graphics:mask_graphics_394,x:218.8,y:337.5}).wait(1).to({graphics:mask_graphics_395,x:219.5,y:336.9}).wait(1).to({graphics:mask_graphics_396,x:220.2,y:336.4}).wait(1).to({graphics:mask_graphics_397,x:220.9,y:335.9}).wait(1).to({graphics:mask_graphics_398,x:221.6,y:335.3}).wait(1).to({graphics:mask_graphics_399,x:222.3,y:334.8}).wait(1).to({graphics:mask_graphics_400,x:223.1,y:334.3}).wait(1).to({graphics:mask_graphics_401,x:223.8,y:333.8}).wait(1).to({graphics:mask_graphics_402,x:224.5,y:333.2}).wait(1).to({graphics:mask_graphics_403,x:225.2,y:332.7}).wait(1).to({graphics:mask_graphics_404,x:225.9,y:332.2}).wait(1).to({graphics:mask_graphics_405,x:226.6,y:331.6}).wait(1).to({graphics:mask_graphics_406,x:227.3,y:331.1}).wait(1).to({graphics:mask_graphics_407,x:228,y:330.5}).wait(1).to({graphics:mask_graphics_408,x:228.7,y:330}).wait(1).to({graphics:mask_graphics_409,x:229.4,y:329.5}).wait(1).to({graphics:mask_graphics_410,x:230.1,y:328.9}).wait(1).to({graphics:mask_graphics_411,x:230.8,y:328.4}).wait(1).to({graphics:mask_graphics_412,x:231.5,y:327.9}).wait(1).to({graphics:mask_graphics_413,x:232.2,y:327.3}).wait(1).to({graphics:mask_graphics_414,x:233,y:326.8}).wait(1).to({graphics:mask_graphics_415,x:233.7,y:326.3}).wait(1).to({graphics:mask_graphics_416,x:234.4,y:325.7}).wait(1).to({graphics:mask_graphics_417,x:235.1,y:325.2}).wait(1).to({graphics:mask_graphics_418,x:235.8,y:324.7}).wait(1).to({graphics:mask_graphics_419,x:236.5,y:324.1}).wait(1).to({graphics:mask_graphics_420,x:237.2,y:323.6}).wait(1).to({graphics:mask_graphics_421,x:237.9,y:323.1}).wait(1).to({graphics:mask_graphics_422,x:238.6,y:322.6}).wait(1).to({graphics:mask_graphics_423,x:239.3,y:322}).wait(1).to({graphics:mask_graphics_424,x:240,y:321.5}).wait(1).to({graphics:mask_graphics_425,x:240.7,y:321}).wait(1).to({graphics:mask_graphics_426,x:241.4,y:320.4}).wait(1).to({graphics:mask_graphics_427,x:242.1,y:319.9}).wait(1).to({graphics:mask_graphics_428,x:242.8,y:319.4}).wait(1).to({graphics:mask_graphics_429,x:243.5,y:318.8}).wait(1).to({graphics:mask_graphics_430,x:244.2,y:318.3}).wait(1).to({graphics:mask_graphics_431,x:245,y:317.8}).wait(1).to({graphics:mask_graphics_432,x:245.7,y:317.2}).wait(1).to({graphics:mask_graphics_433,x:246.4,y:316.7}).wait(1).to({graphics:mask_graphics_434,x:247.1,y:316.2}).wait(1).to({graphics:mask_graphics_435,x:247.8,y:315.6}).wait(1).to({graphics:mask_graphics_436,x:248.5,y:315.1}).wait(1).to({graphics:mask_graphics_437,x:249.2,y:314.6}).wait(1).to({graphics:mask_graphics_438,x:249.9,y:314}).wait(1).to({graphics:mask_graphics_439,x:250.6,y:313.5}).wait(1).to({graphics:mask_graphics_440,x:251.3,y:313}).wait(1).to({graphics:mask_graphics_441,x:252,y:312.4}).wait(1).to({graphics:mask_graphics_442,x:252.7,y:311.9}).wait(1).to({graphics:mask_graphics_443,x:253.4,y:311.4}).wait(1).to({graphics:mask_graphics_444,x:254.2,y:310.8}).wait(1).to({graphics:mask_graphics_445,x:254.9,y:310.3}).wait(1).to({graphics:mask_graphics_446,x:255.6,y:309.7}).wait(1).to({graphics:mask_graphics_447,x:256.3,y:309.2}).wait(1).to({graphics:mask_graphics_448,x:257,y:308.7}).wait(1).to({graphics:mask_graphics_449,x:257.7,y:308.1}).wait(1).to({graphics:mask_graphics_450,x:258.4,y:307.6}).wait(1).to({graphics:mask_graphics_451,x:259.1,y:307.1}).wait(1).to({graphics:mask_graphics_452,x:259.8,y:306.5}).wait(1).to({graphics:mask_graphics_453,x:260.5,y:306}).wait(1).to({graphics:mask_graphics_454,x:261.2,y:305.5}).wait(1).to({graphics:mask_graphics_455,x:261.9,y:304.9}).wait(1).to({graphics:mask_graphics_456,x:262.6,y:304.4}).wait(1).to({graphics:mask_graphics_457,x:263.3,y:303.9}).wait(1).to({graphics:mask_graphics_458,x:264,y:303.4}).wait(1).to({graphics:mask_graphics_459,x:264.7,y:302.8}).wait(1).to({graphics:mask_graphics_460,x:265.4,y:302.3}).wait(1).to({graphics:mask_graphics_461,x:266.2,y:301.8}).wait(1).to({graphics:mask_graphics_462,x:266.9,y:301.2}).wait(1).to({graphics:mask_graphics_463,x:210,y:215.4}).wait(1).to({graphics:mask_graphics_464,x:271.5,y:297.8}).wait(1).to({graphics:mask_graphics_465,x:217.8,y:215.4}).wait(82));

	// Layer 9
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(20,1,1).p("AwjRPQhbhpBykeQBzkdGpk/QGpk+D+h7QEAh8EAjnQDEivDRjv");
	this.shape_1.setTransform(274,288.5);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(285).to({_off:false},0).wait(262));

	// Layer 12
	this.instance_2 = new lib.ar2("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(263.5,386.5,1,1,0,77.6,-102.4,0.7,-0.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(135).to({_off:false},0).wait(412));

	// Layer 7 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_135 = new cjs.Graphics().p("A4WPQQgssIIGpDQIGpDMGgqQMIgsJDIFMgnDArrQpDoGgrsGg");
	var mask_1_graphics_136 = new cjs.Graphics().p("A4mO3QgcsJIRo4QISo4MHgbQMHgdI5IRMgn5Aq4Qo5oRgcsHg");
	var mask_1_graphics_137 = new cjs.Graphics().p("A40OfQgNsJIcouQIdouMHgMQMIgNIvIcMgovAqGQovodgMsHg");
	var mask_1_graphics_138 = new cjs.Graphics().p("A5COHQADsJInojQInokMIAEQMIACIkInMgpkApSQojooACsHg");
	var mask_1_graphics_139 = new cjs.Graphics().p("A5ONvQASsJIyoYQIyoYMHATQMIARIZIyMgqXAocQoZoyASsHg");
	var mask_1_graphics_140 = new cjs.Graphics().p("A5ZNYQAhsJI8oMQI9oOMGAjQMIAgINI8MgrJAnnQoOo9AisGg");
	var mask_1_graphics_141 = new cjs.Graphics().p("A5kNBQAxsIJHoBQJGoCMGAxQMHAwICJGMgr7AmwQoCpHAwsFg");
	var mask_1_graphics_142 = new cjs.Graphics().p("A5tMqQBAsHJRn2QJQn2MFBBQMGA/H2JQMgsrAl4Qn3pRBAsEg");
	var mask_1_graphics_143 = new cjs.Graphics().p("A51MTQBPsFJanqQJbnrMDBQQMFBOHqJbMgtbAk/QnqpbBPsDg");
	var mask_1_graphics_144 = new cjs.Graphics().p("A58L9QBesDJknfQJkneMCBfQMCBdHfJkMguJAkFQnfpkBfsBg");
	var mask_1_graphics_145 = new cjs.Graphics().p("A6DLnQBusBJtnTQJunSL/BuQMBBtHSJtMgu1AjKQnTptBtr/g");
	var mask_1_graphics_146 = new cjs.Graphics().p("A6ILRQB9r/J2nGQJ3nGL9B+QL+B7HHJ3MgviAiPQnGp3B8r9g");
	var mask_1_graphics_147 = new cjs.Graphics().p("A6MK7QCMr7J/m6QJ/m6L7CNQL8CLG5J/MgwMAhSQm5p/CLr7g");
	var mask_1_graphics_148 = new cjs.Graphics().p("A6PKmQCbr4KImtQKImtL3CbQL5CaGtKHMgw2AgWQmtqICbr4g");
	var mask_1_graphics_149 = new cjs.Graphics().p("A6RKSQCqr2KQmgQKQmgL0CrQL2CoGgKQMgxeAfXQmgqQCqr0g");
	var mask_1_graphics_150 = new cjs.Graphics().p("A6SJ9QC4ryKZmTQKYmTLxC6QLyC3GTKYMgyFAeZQmTqZC5rxg");
	var mask_1_graphics_151 = new cjs.Graphics().p("A6TJpQDIruKgmGQKgmGLtDJQLvDGGGKfMgyrAdaQmGqgDHrug");
	var mask_1_graphics_152 = new cjs.Graphics().p("A6SJWQDXrrKnl4QKol5LpDYQLrDVF4KmMgzPAcaQl5qoDWrpg");
	var mask_1_graphics_153 = new cjs.Graphics().p("A6QJCQDlrlKvlrQKvlsLlDmQLmDkFrKuMgzyAbYQlrqvDkrlg");
	var mask_1_graphics_154 = new cjs.Graphics().p("A6NIwQD0riK2ldQK2ldLgD0QLhDyFeK1Mg0VAaXQldq2Dzrgg");
	var mask_1_graphics_155 = new cjs.Graphics().p("A6JIdQECrcK9lQQK9lQLbEDQLcEBFQK8Mg01AZUQlQq9ECrbg");
	var mask_1_graphics_156 = new cjs.Graphics().p("A6EILQEQrXLElCQLClCLXESQLXEPFCLCMg1UAYRQlCrDEQrWg");
	var mask_1_graphics_157 = new cjs.Graphics().p("A5+H5QEfrRLJk0QLIk0LSEgQLSEeEzLIMg1yAXNQk0rJEfrRg");
	var mask_1_graphics_158 = new cjs.Graphics().p("A54HoQEurMLPklQLOkmLMEuQLMEsElLOMg2OAWJQkmrPEsrLg");
	var mask_1_graphics_159 = new cjs.Graphics().p("A5wHXQE8rFLVkYQLUkXLFE8QLGE6EXLUMg2qAVEQkXrVE6rFg");
	var mask_1_graphics_160 = new cjs.Graphics().p("A5nHHQFJq/LbkKQLZkJK/FKQLAFIEJLZMg3EAUAQkJrbFIq+g");
	var mask_1_graphics_161 = new cjs.Graphics().p("A5dG3QFXq5Lfj6QLfj7K4FYQK5FVD7LfMg3dAS5Qj6rfFWq4g");
	var mask_1_graphics_162 = new cjs.Graphics().p("A5TGnQFlqxLkjtQLkjsKxFmQKyFjDsLjMg3zARzQjsrkFjqxg");
	var mask_1_graphics_163 = new cjs.Graphics().p("A5HGYQFyqqLpjeQLojdKqFzQKrFvDeLpMg4KAQtQjdrpFxqqg");
	var mask_1_graphics_164 = new cjs.Graphics().p("A46GKQGAqkLtjOQLsjPKiGAQKkF9DPLtMg4eAPmQjPrtF/qig");
	var mask_1_graphics_165 = new cjs.Graphics().p("A4tF7QGNqbLxjAQLwjAKbGOQKcGKDALxMg4xAOeQi/rxGLqbg");
	var mask_1_graphics_166 = new cjs.Graphics().p("A4eFuQGaqUL1ixQLzixKTGbQKUGXCxL1Mg5CANWQixr1GZqSg");
	var mask_1_graphics_167 = new cjs.Graphics().p("A4OFgQGnqLL4iiQL2iiKLGnQKMGlCiL4Mg5SAMOQiir4GmqLg");
	var mask_1_graphics_168 = new cjs.Graphics().p("A3+FTQG0qCL7iTQL6iTKCG0QKEGxCTL7Mg5iALFQiTr6GzqDg");
	var mask_1_graphics_169 = new cjs.Graphics().p("A3sFHQHAp6L+iEQL8iEJ6HBQJ7G+CEL+Mg5vAJ8QiEr+HAp5g");
	var mask_1_graphics_170 = new cjs.Graphics().p("A3aE7QHNpxMAh1QL/h0JxHNQJyHKB0MAMg56AI0Qh1sAHMpxg");
	var mask_1_graphics_171 = new cjs.Graphics().p("A3HEwQHapoMChmQMBhlJoHZQJoHXBmMCMg6FAHqQhlsCHXpng");
	var mask_1_graphics_172 = new cjs.Graphics().p("A2yElQHlpeMEhXQMDhWJeHlQJfHjBXMEMg6OAGhQhWsEHkpeg");
	var mask_1_graphics_173 = new cjs.Graphics().p("A2dEbQHxpVMGhHQMEhHJVHwQJVHvBIMGMg6WAFYQhHsGHwpUg");
	var mask_1_graphics_174 = new cjs.Graphics().p("A2HERQH9pLMHg4QMGg4JKH8QJMH7A4MHMg6bAEOQg4sHH7pKg");
	var mask_1_graphics_175 = new cjs.Graphics().p("A1wEHQIJpAMIgpQMGgoJBIHQJBIHApMIMg6gADDQgpsHIHpBg");
	var mask_1_graphics_176 = new cjs.Graphics().p("A1YD/QIUo3MJgZQMHgZI2ISQI3ISAaMJMg6jAB6QgasJISo1g");
	var mask_1_graphics_177 = new cjs.Graphics().p("A0+D2QIeosMJgKQMIgJIrIdQItIdAKMJMg6lAAwQgKsJIeorg");
	var mask_1_graphics_178 = new cjs.Graphics().p("A9SYLQAFsJIoohQIqohMIAGQMJAFIgIpQIiIogFMJg");
	var mask_1_graphics_179 = new cjs.Graphics().p("A9SXTQAVsJIzoVQI0oWMIAVQMIAUIWI0QIXIygVMJg");
	var mask_1_graphics_180 = new cjs.Graphics().p("A9RWcQAksJI9oKQI/oKMHAkQMIAkIKI9QIMI9gkMIg");
	var mask_1_graphics_181 = new cjs.Graphics().p("A9QVkQAzsHJHn/QJJn/MGAzQMIAzH/JIQIAJHgzMIg");
	var mask_1_graphics_182 = new cjs.Graphics().p("A9PUtQBDsGJRn0QJTnzMFBCQMGBDHzJSQH1JRhDMGg");
	var mask_1_graphics_183 = new cjs.Graphics().p("A9NT1QBRsEJbnoQJdnnMEBRQMEBSHoJcQHpJbhSMEg");
	var mask_1_graphics_184 = new cjs.Graphics().p("A9LS+QBhsDJknaQJmndMCBhQMDBhHbJlQHdJlhhMDg");
	var mask_1_graphics_185 = new cjs.Graphics().p("A9JSHQBwsBJunOQJvnRMABxQMBBwHPJuQHRJuhxMBg");
	var mask_1_graphics_186 = new cjs.Graphics().p("A9GRKQCBr/J4nAQJ5nDL9CBQL/CCHBJ4QHDJ4iCL+g");
	var mask_1_graphics_187 = new cjs.Graphics().p("A9CQMQCSr7KCmyQKDm1L6CSQL7CSGzKCQG1KCiSL7g");
	var mask_1_graphics_188 = new cjs.Graphics().p("A86PPQCjr3KLmkQKNmnL2CjQL4CjGlKLQGnKMijL3g");
	var mask_1_graphics_189 = new cjs.Graphics().p("A8xOTQC0r0KUmWQKWmYLyC0QL0C0GXKUQGYKVi0Lzg");
	var mask_1_graphics_190 = new cjs.Graphics().p("A8nNWQDErvKdmHQKfmJLuDEQLwDEGIKdQGJKejELvg");
	var mask_1_graphics_191 = new cjs.Graphics().p("A8dMaQDVrrKml4QKnl6LqDVQLrDUF5KmQF7KmjVLrg");
	var mask_1_graphics_192 = new cjs.Graphics().p("A8RLfQDlrmKulqQKvlrLmDlQLmDlFqKuQFrKujlLng");
	var mask_1_graphics_193 = new cjs.Graphics().p("A8FKkQD2rhK1laQK4lcLgD1QLhD2FaK1QFdK2j2Lhg");
	var mask_1_graphics_194 = new cjs.Graphics().p("A73JpQEGrbK8lLQK/lNLbEGQLbEGFLK9QFNK9kFLcg");
	var mask_1_graphics_195 = new cjs.Graphics().p("A7pIuQEWrULEk8QLGk9LUEWQLWEWE8LEQE9LEkWLWg");
	var mask_1_graphics_196 = new cjs.Graphics().p("A7aH1QEmrPLLksQLNktLOEmQLPElEsLLQEuLMkmLPg");
	var mask_1_graphics_197 = new cjs.Graphics().p("A7KG7QE2rHLRkdQLSkdLJE1QLJE2EcLSQEdLRk1LJg");
	var mask_1_graphics_198 = new cjs.Graphics().p("A65GDQFGrBLXkNQLYkNLCFFQLBFFEMLYQEOLYlFLCg");
	var mask_1_graphics_199 = new cjs.Graphics().p("A6nFKQFVq5Ldj8QLej9K6FUQK7FVD7LdQD+LelVK6g");
	var mask_1_graphics_200 = new cjs.Graphics().p("A6UETQFkqyLijsQLkjtKyFkQKzFkDrLjQDuLjlkKzg");
	var mask_1_graphics_201 = new cjs.Graphics().p("A6BDcQFzqqLojcQLojcKrFzQKrFzDbLoQDdLolzKrg");
	var mask_1_graphics_202 = new cjs.Graphics().p("A5sClQGCqhLsjLQLtjMKiGCQKjGCDKLtQDNLsmCKjg");
	var mask_1_graphics_203 = new cjs.Graphics().p("A5XBwQGRqZLwi7QLyi7KZGRQKaGRC6LxQC8LxmRKZg");
	var mask_1_graphics_204 = new cjs.Graphics().p("A5BA7QGfqQL1iqQL1iqKRGfQKQGfCqL1QCrL1mfKRg");
	var mask_1_graphics_205 = new cjs.Graphics().p("A4qAHQGtqHL4iZQL5iaKIGuQKHGuCZL4QCaL5muKHg");
	var mask_1_graphics_206 = new cjs.Graphics().p("A4TgsQG8p9L7iJQL9iJJ9G8QJ+G8CIL7QCJL8m8J+g");
	var mask_1_graphics_207 = new cjs.Graphics().p("A36heQHJp0L+h4QMAh4JzHKQJ0HKB3L+QB5L/nKJ0g");
	var mask_1_graphics_208 = new cjs.Graphics().p("A3hiQQHXpqMBhnQMBhnJqHYQJpHYBmMAQBoMCnYJpg");
	var mask_1_graphics_209 = new cjs.Graphics().p("A3IjBQHmpfMChWQMEhWJfHlQJeHlBVMDQBXMDnlJfg");
	var mask_1_graphics_210 = new cjs.Graphics().p("A2tjyQHypUMEhEQMGhFJUHyQJUHyBEMFQBGMFnzJUg");
	var mask_1_graphics_211 = new cjs.Graphics().p("A2SkhQH/pJMGgzQMHg0JIH/QJJH/AzMGQA1MHn/JJg");
	var mask_1_graphics_212 = new cjs.Graphics().p("A12lPQIMo+MGgiQMIgjI+IMQI9ILAiMIQAjMIoMI9g");
	var mask_1_graphics_213 = new cjs.Graphics().p("A1al9QIZoxMHgSQMIgSIyIZQIyIYAQMIQATMIoZIyg");
	var mask_1_graphics_214 = new cjs.Graphics().p("A09mpQIlomMHAAQMJgBImIlQIlIkAAMIQABMJolImg");
	var mask_1_graphics_215 = new cjs.Graphics().p("A0fnVQIxoZMGAQQMJARIaIxQIZIwgSMIQgPMIoxIag");
	var mask_1_graphics_216 = new cjs.Graphics().p("A0Bn/QI9oNMFAhQMJAiINI9QINI8gjMHQghMIo8INg");
	var mask_1_graphics_217 = new cjs.Graphics().p("AzjopQJJoAMEAzQMIAzIAJIQIAJHgzMHQgyMGpIIBg");
	var mask_1_graphics_218 = new cjs.Graphics().p("AzDpRQJTn0MDBEQMHBEHzJUQHzJShFMFQhDMGpTHzg");
	var mask_1_graphics_219 = new cjs.Graphics().p("Aykp5QJfnmMBBVQMFBVHmJeQHmJdhWMEQhUMEpeHmg");
	var mask_1_graphics_220 = new cjs.Graphics().p("AyEqfQJpnZMABmQMDBmHYJpQHYJohnMBQhkMCppHYg");
	var mask_1_graphics_221 = new cjs.Graphics().p("Axpq+QJynNL9BzQMBB0HNJyQHNJwh1L/QhyMApxHNg");
	var mask_1_graphics_222 = new cjs.Graphics().p("AxNrcQJ5nCL7CCQL/CCHCJ5QHCJ4iDL+QiBL9p5HCg");
	var mask_1_graphics_223 = new cjs.Graphics().p("Awyr5QKBm2L5CPQL8CQG3KBQG2KAiQL7QiPL7qBG3g");
	var mask_1_graphics_224 = new cjs.Graphics().p("AwWsVQKJmrL2CdQL6CdGrKKQGqKIieL4QicL4qJGrg");
	var mask_1_graphics_225 = new cjs.Graphics().p("Av6sxQKRmfLzCrQL3CrGfKRQGfKPisL2QiqL1qRGfg");
	var mask_1_graphics_226 = new cjs.Graphics().p("AvdtMQKYmTLwC5QLzC4GTKYQGTKYi5LxQi4LzqYGTg");
	var mask_1_graphics_227 = new cjs.Graphics().p("AvAtmQKfmHLtDGQLvDGGHKgQGIKejILuQjFLvqfGHg");
	var mask_1_graphics_228 = new cjs.Graphics().p("Aujt/QKml7LpDTQLsDUF7KnQF7KljVLrQjSLrqmF7g");
	var mask_1_graphics_229 = new cjs.Graphics().p("AuFuXQKtlvLlDhQLoDhFuKtQFvKsjiLnQjgLnqtFvg");
	var mask_1_graphics_230 = new cjs.Graphics().p("AtouvQK0liLhDuQLkDvFiKzQFiKzjvLiQjuLjqzFig");
	var mask_1_graphics_231 = new cjs.Graphics().p("AtJvGQK5lVLdD7QLfD8FWK6QFWK4j9LeQj7Lfq5FWg");
	var mask_1_graphics_232 = new cjs.Graphics().p("AsrvcQLAlJLYEJQLaEJFJLAQFJK/kJLZQkILarAFJg");
	var mask_1_graphics_233 = new cjs.Graphics().p("AsMvxQLFk8LTEVQLWEXE8LFQE9LFkXLVQkVLVrGE8g");
	var mask_1_graphics_234 = new cjs.Graphics().p("ArtwFQLLkwLOEjQLREjEvLLQEvLLkkLPQkhLQrMEwg");
	var mask_1_graphics_235 = new cjs.Graphics().p("ArOwZQLQkiLJEvQLLExEjLQQEiLQkwLKQkvLLrREig");
	var mask_1_graphics_236 = new cjs.Graphics().p("AquwrQLUkWLEE9QLGE9EVLUQEWLWk+LEQk8LGrVEVg");
	var mask_1_graphics_237 = new cjs.Graphics().p("AqPw9QLakIK+FJQLAFJEILaQEJLblLK+QlILArbEIg");
	var mask_1_graphics_238 = new cjs.Graphics().p("ApvxOQLfj7K4FVQK6FXD7LeQD7LglXK4QlVK5rgD7g");
	var mask_1_graphics_239 = new cjs.Graphics().p("ApOxeQLijuKyFiQK0FjDtLjQDuLkljKyQliKzrkDug");
	var mask_1_graphics_240 = new cjs.Graphics().p("AouxtQLnjhKrFvQKtFvDhLnQDgLolwKsQluKsroDhg");
	var mask_1_graphics_241 = new cjs.Graphics().p("AoNx8QLrjTKkF7QKmF8DTLrQDTLrl8KlQl6KmrsDTg");
	var mask_1_graphics_242 = new cjs.Graphics().p("AnsyJQLujFKeGGQKfGIDFLvQDGLvmIKeQmHKfrvDGg");
	var mask_1_graphics_243 = new cjs.Graphics().p("AnLyWQLyi3KWGSQKYGUC4LyQC4LzmUKXQmTKYrzC4g");
	var mask_1_graphics_244 = new cjs.Graphics().p("AmqyhQL1iqKPGeQKRGgCqL1QCqL2mgKQQmeKQr3Cqg");
	var mask_1_graphics_245 = new cjs.Graphics().p("AmJysQL4icKIGqQKJGsCcL4QCdL5msKHQmqKJr5Cdg");
	var mask_1_graphics_246 = new cjs.Graphics().p("Alny2QL6iPKAG3QKBG3CPL7QCPL7m4KAQm2KBr7CPg");
	var mask_1_graphics_247 = new cjs.Graphics().p("AlGy/QL9iBJ4HCQJ5HDCBL9QCBL+nDJ4QnBJ5r+CBg");
	var mask_1_graphics_248 = new cjs.Graphics().p("AkkzHQL/hzJwHNQJxHOBzL/QBzMBnOJvQnNJxsAB0g");
	var mask_1_graphics_249 = new cjs.Graphics().p("AkCzOQMBhlJnHYQJpHZBlMCQBlMCnZJnQnYJpsDBlg");
	var mask_1_graphics_250 = new cjs.Graphics().p("AjhzUQMDhYJfHkQJgHkBXMDQBYMEnlJfQnjJfsEBYg");
	var mask_1_graphics_251 = new cjs.Graphics().p("Ai/zZQMFhKJVHuQJYHvBJMFQBJMFnvJWQnuJXsFBJg");
	var mask_1_graphics_252 = new cjs.Graphics().p("AidzeQMGg7JMH4QJPH6A7MGQA8MHn6JMQn5JOsHA8g");
	var mask_1_graphics_253 = new cjs.Graphics().p("Ah7zhQMHguJDIDQJFIFAuMGQAtMIoEJEQoEJEsHAug");
	var mask_1_graphics_254 = new cjs.Graphics().p("AhZzkQMHggI6IOQI8IPAgMHQAfMJoPI6QoNI7sJAgg");
	var mask_1_graphics_255 = new cjs.Graphics().p("Ag3zlQMIgSIwIYQIyIZASMIQARMIoZIxQoYIysIARg");
	var mask_1_graphics_256 = new cjs.Graphics().p("AgczmQMIgHIpIgQIqIhAGMIQAHMJohIpQogIqsJAHg");
	var mask_1_graphics_257 = new cjs.Graphics().p("EgAXAm/MAAWg6lQMIAEIhIoQIiIpgFMIQgEMJopIhQojIesAAAIgMAAg");
	var mask_1_graphics_258 = new cjs.Graphics().p("EgAyAm+MABKg6kQMJAQIZIvQIbIxgQMHQgPMJoxIZQogIMrrAAIgsgBg");
	var mask_1_graphics_259 = new cjs.Graphics().p("EgBNAm9MACAg6iQMJAaIRI3QISI5gbMHQgaMIo4IRQocH6rZAAIhKgCg");
	var mask_1_graphics_260 = new cjs.Graphics().p("EgBnAm8MAC1g6gQMIAmIJI+QIKJAgmMHQglMIpAIIQoYHorGAAQgzAAg0gDg");
	var mask_1_graphics_261 = new cjs.Graphics().p("EgCCAm6MADqg6dQMIAxIBJGQICJHgxMGQgxMHpHIBQoTHWq1AAQhBAAhDgFg");
	var mask_1_graphics_262 = new cjs.Graphics().p("EgCdAm4MAEgg6ZQMHA8H4JNQH6JOg8MGQg8MGpOH4QoPHFqjAAQhPAAhSgHg");
	var mask_1_graphics_263 = new cjs.Graphics().p("EgC3Am2MAFVg6VQMFBHHwJUQHyJUhHMGQhHMGpWHvQoJG0qSAAQhdAAhggJg");
	var mask_1_graphics_264 = new cjs.Graphics().p("EgDSAmzMAGKg6QQMFBSHnJbQHpJchSMEQhSMFpcHnQoFGjqBAAQhqAAhvgMg");
	var mask_1_graphics_265 = new cjs.Graphics().p("EgDtAmwMAHAg6KQMDBdHfJiQHgJihdMEQhdMDpjHfQn/GSpxAAQh4AAh9gPg");
	var mask_1_graphics_266 = new cjs.Graphics().p("EgEHAmsMAH0g6DQMCBoHWJpQHXJphnMCQhoMCpqHWQn6GCpgAAQiFAAiLgTg");
	var mask_1_graphics_267 = new cjs.Graphics().p("EgFcAmeMAKeg5oQL8CLG5J9QG7J+iLL9QiLL8p/G5QnlFRovAAQiuAAi3ghg");
	var mask_1_graphics_268 = new cjs.Graphics().p("EgGwAmNMANFg5GQL2CtGbKRQGdKSitL1QiuL1qSGcQnPEjoAAAQjXAAjggzg");
	var mask_1_graphics_269 = new cjs.Graphics().p("EgIDAl3MAPrg4cQLtDQF9KjQF/KkjQLtQjRLsqkF9Qm2D4nUAAQj9AAkIhJg");
	var mask_1_graphics_270 = new cjs.Graphics().p("EgJVAleMASPg3qQLiDyFeKzQFfK1jyLiQjyLiq1FeQmaDQmpAAQklAAkthig");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(135).to({graphics:mask_1_graphics_135,x:154.1,y:226.8}).wait(1).to({graphics:mask_1_graphics_136,x:155.5,y:225.5}).wait(1).to({graphics:mask_1_graphics_137,x:156.8,y:224.3}).wait(1).to({graphics:mask_1_graphics_138,x:158.1,y:223}).wait(1).to({graphics:mask_1_graphics_139,x:159.3,y:221.6}).wait(1).to({graphics:mask_1_graphics_140,x:160.6,y:220.3}).wait(1).to({graphics:mask_1_graphics_141,x:161.8,y:218.9}).wait(1).to({graphics:mask_1_graphics_142,x:162.9,y:217.5}).wait(1).to({graphics:mask_1_graphics_143,x:164.1,y:216.1}).wait(1).to({graphics:mask_1_graphics_144,x:165.2,y:214.6}).wait(1).to({graphics:mask_1_graphics_145,x:166.3,y:213.1}).wait(1).to({graphics:mask_1_graphics_146,x:167.3,y:211.7}).wait(1).to({graphics:mask_1_graphics_147,x:168.3,y:210.1}).wait(1).to({graphics:mask_1_graphics_148,x:169.3,y:208.6}).wait(1).to({graphics:mask_1_graphics_149,x:170.3,y:207}).wait(1).to({graphics:mask_1_graphics_150,x:171.2,y:205.5}).wait(1).to({graphics:mask_1_graphics_151,x:172.1,y:203.9}).wait(1).to({graphics:mask_1_graphics_152,x:173,y:202.3}).wait(1).to({graphics:mask_1_graphics_153,x:173.8,y:200.6}).wait(1).to({graphics:mask_1_graphics_154,x:174.7,y:199}).wait(1).to({graphics:mask_1_graphics_155,x:175.5,y:197.3}).wait(1).to({graphics:mask_1_graphics_156,x:176.2,y:195.6}).wait(1).to({graphics:mask_1_graphics_157,x:176.9,y:193.9}).wait(1).to({graphics:mask_1_graphics_158,x:177.6,y:192.2}).wait(1).to({graphics:mask_1_graphics_159,x:178.3,y:190.5}).wait(1).to({graphics:mask_1_graphics_160,x:178.9,y:188.8}).wait(1).to({graphics:mask_1_graphics_161,x:179.5,y:187}).wait(1).to({graphics:mask_1_graphics_162,x:180.1,y:185.2}).wait(1).to({graphics:mask_1_graphics_163,x:180.6,y:183.5}).wait(1).to({graphics:mask_1_graphics_164,x:181.1,y:181.7}).wait(1).to({graphics:mask_1_graphics_165,x:181.6,y:179.9}).wait(1).to({graphics:mask_1_graphics_166,x:182.1,y:178.1}).wait(1).to({graphics:mask_1_graphics_167,x:182.5,y:176.3}).wait(1).to({graphics:mask_1_graphics_168,x:182.8,y:174.4}).wait(1).to({graphics:mask_1_graphics_169,x:183.2,y:172.6}).wait(1).to({graphics:mask_1_graphics_170,x:183.5,y:170.8}).wait(1).to({graphics:mask_1_graphics_171,x:183.8,y:168.9}).wait(1).to({graphics:mask_1_graphics_172,x:184,y:167.1}).wait(1).to({graphics:mask_1_graphics_173,x:184.2,y:165.3}).wait(1).to({graphics:mask_1_graphics_174,x:184.3,y:163.4}).wait(1).to({graphics:mask_1_graphics_175,x:184.4,y:161.5}).wait(1).to({graphics:mask_1_graphics_176,x:184.5,y:159.7}).wait(1).to({graphics:mask_1_graphics_177,x:184.6,y:157.8}).wait(1).to({graphics:mask_1_graphics_178,x:184.5,y:157.3}).wait(1).to({graphics:mask_1_graphics_179,x:184.6,y:159.1}).wait(1).to({graphics:mask_1_graphics_180,x:184.6,y:160.9}).wait(1).to({graphics:mask_1_graphics_181,x:184.7,y:162.8}).wait(1).to({graphics:mask_1_graphics_182,x:184.9,y:164.6}).wait(1).to({graphics:mask_1_graphics_183,x:185.1,y:166.4}).wait(1).to({graphics:mask_1_graphics_184,x:185.3,y:168.3}).wait(1).to({graphics:mask_1_graphics_185,x:185.5,y:170.1}).wait(1).to({graphics:mask_1_graphics_186,x:185.8,y:172.1}).wait(1).to({graphics:mask_1_graphics_187,x:186.1,y:174.1}).wait(1).to({graphics:mask_1_graphics_188,x:186.1,y:176.1}).wait(1).to({graphics:mask_1_graphics_189,x:186.1,y:178.1}).wait(1).to({graphics:mask_1_graphics_190,x:186.1,y:180.1}).wait(1).to({graphics:mask_1_graphics_191,x:186.2,y:182.1}).wait(1).to({graphics:mask_1_graphics_192,x:186.2,y:184.1}).wait(1).to({graphics:mask_1_graphics_193,x:186.2,y:186}).wait(1).to({graphics:mask_1_graphics_194,x:186.2,y:188}).wait(1).to({graphics:mask_1_graphics_195,x:186.2,y:189.9}).wait(1).to({graphics:mask_1_graphics_196,x:186.2,y:191.8}).wait(1).to({graphics:mask_1_graphics_197,x:186.2,y:193.7}).wait(1).to({graphics:mask_1_graphics_198,x:186.2,y:195.6}).wait(1).to({graphics:mask_1_graphics_199,x:186.2,y:197.4}).wait(1).to({graphics:mask_1_graphics_200,x:186.2,y:199.3}).wait(1).to({graphics:mask_1_graphics_201,x:186.1,y:201.1}).wait(1).to({graphics:mask_1_graphics_202,x:186.1,y:202.9}).wait(1).to({graphics:mask_1_graphics_203,x:186.1,y:204.6}).wait(1).to({graphics:mask_1_graphics_204,x:186.1,y:206.4}).wait(1).to({graphics:mask_1_graphics_205,x:186,y:208.1}).wait(1).to({graphics:mask_1_graphics_206,x:186,y:209.8}).wait(1).to({graphics:mask_1_graphics_207,x:186,y:211.5}).wait(1).to({graphics:mask_1_graphics_208,x:186,y:213.1}).wait(1).to({graphics:mask_1_graphics_209,x:185.9,y:214.7}).wait(1).to({graphics:mask_1_graphics_210,x:185.9,y:216.3}).wait(1).to({graphics:mask_1_graphics_211,x:185.9,y:217.9}).wait(1).to({graphics:mask_1_graphics_212,x:185.9,y:219.4}).wait(1).to({graphics:mask_1_graphics_213,x:185.9,y:220.9}).wait(1).to({graphics:mask_1_graphics_214,x:185.9,y:222.4}).wait(1).to({graphics:mask_1_graphics_215,x:185.9,y:223.8}).wait(1).to({graphics:mask_1_graphics_216,x:185.9,y:225.2}).wait(1).to({graphics:mask_1_graphics_217,x:185.9,y:226.6}).wait(1).to({graphics:mask_1_graphics_218,x:186,y:227.9}).wait(1).to({graphics:mask_1_graphics_219,x:186,y:229.2}).wait(1).to({graphics:mask_1_graphics_220,x:186,y:230.4}).wait(1).to({graphics:mask_1_graphics_221,x:186,y:231.4}).wait(1).to({graphics:mask_1_graphics_222,x:186,y:232.4}).wait(1).to({graphics:mask_1_graphics_223,x:186.1,y:233.4}).wait(1).to({graphics:mask_1_graphics_224,x:186.1,y:234.3}).wait(1).to({graphics:mask_1_graphics_225,x:186.1,y:235.2}).wait(1).to({graphics:mask_1_graphics_226,x:186.1,y:236.1}).wait(1).to({graphics:mask_1_graphics_227,x:186.2,y:236.9}).wait(1).to({graphics:mask_1_graphics_228,x:186.2,y:237.8}).wait(1).to({graphics:mask_1_graphics_229,x:186.2,y:238.6}).wait(1).to({graphics:mask_1_graphics_230,x:186.2,y:239.3}).wait(1).to({graphics:mask_1_graphics_231,x:186.2,y:240.1}).wait(1).to({graphics:mask_1_graphics_232,x:186.2,y:240.8}).wait(1).to({graphics:mask_1_graphics_233,x:186.3,y:241.5}).wait(1).to({graphics:mask_1_graphics_234,x:186.3,y:242.2}).wait(1).to({graphics:mask_1_graphics_235,x:186.3,y:242.8}).wait(1).to({graphics:mask_1_graphics_236,x:186.3,y:243.4}).wait(1).to({graphics:mask_1_graphics_237,x:186.3,y:244}).wait(1).to({graphics:mask_1_graphics_238,x:186.3,y:244.5}).wait(1).to({graphics:mask_1_graphics_239,x:186.3,y:245.1}).wait(1).to({graphics:mask_1_graphics_240,x:186.3,y:245.6}).wait(1).to({graphics:mask_1_graphics_241,x:186.3,y:246}).wait(1).to({graphics:mask_1_graphics_242,x:186.3,y:246.5}).wait(1).to({graphics:mask_1_graphics_243,x:186.2,y:246.9}).wait(1).to({graphics:mask_1_graphics_244,x:186.2,y:247.2}).wait(1).to({graphics:mask_1_graphics_245,x:186.2,y:247.6}).wait(1).to({graphics:mask_1_graphics_246,x:186.2,y:247.9}).wait(1).to({graphics:mask_1_graphics_247,x:186.2,y:248.2}).wait(1).to({graphics:mask_1_graphics_248,x:186.2,y:248.5}).wait(1).to({graphics:mask_1_graphics_249,x:186.2,y:248.7}).wait(1).to({graphics:mask_1_graphics_250,x:186.2,y:248.9}).wait(1).to({graphics:mask_1_graphics_251,x:186.2,y:249}).wait(1).to({graphics:mask_1_graphics_252,x:186.1,y:249.2}).wait(1).to({graphics:mask_1_graphics_253,x:186.1,y:249.3}).wait(1).to({graphics:mask_1_graphics_254,x:186.1,y:249.4}).wait(1).to({graphics:mask_1_graphics_255,x:186.1,y:249.4}).wait(1).to({graphics:mask_1_graphics_256,x:186.1,y:249.5}).wait(1).to({graphics:mask_1_graphics_257,x:186.1,y:249.5}).wait(1).to({graphics:mask_1_graphics_258,x:186.2,y:249.5}).wait(1).to({graphics:mask_1_graphics_259,x:186.2,y:249.5}).wait(1).to({graphics:mask_1_graphics_260,x:186.2,y:249.5}).wait(1).to({graphics:mask_1_graphics_261,x:186.2,y:249.5}).wait(1).to({graphics:mask_1_graphics_262,x:186.2,y:249.5}).wait(1).to({graphics:mask_1_graphics_263,x:186.3,y:249.5}).wait(1).to({graphics:mask_1_graphics_264,x:186.3,y:249.5}).wait(1).to({graphics:mask_1_graphics_265,x:186.3,y:249.5}).wait(1).to({graphics:mask_1_graphics_266,x:186.3,y:249.5}).wait(1).to({graphics:mask_1_graphics_267,x:186.4,y:249.5}).wait(1).to({graphics:mask_1_graphics_268,x:186.5,y:249.6}).wait(1).to({graphics:mask_1_graphics_269,x:186.6,y:249.6}).wait(1).to({graphics:mask_1_graphics_270,x:186.6,y:249.6}).wait(277));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(20,1,1).p("ABXqCQGDAghBErQhAEri1EZQi0EaitA5QitA6g4gn");
	this.shape_2.setTransform(209.4,335.2);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(135).to({_off:false},0).wait(412));

	// Layer 11
	this.instance_3 = new lib.ar2("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(208.1,101,1,1,0,-76.3,103.7,0.8,-0.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).wait(538));

	// Layer 15 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_59 = new cjs.Graphics().p("A5JiXQFErCLZkOQLXkOLBFEQLCFDEOLZMg26AUXQkOrZFDrAg");
	var mask_2_graphics_60 = new cjs.Graphics().p("A49iqQFUq6Lfj9QLej9K5FVQK6FUD9LeMg3ZATEQj8rfFUq4g");
	var mask_2_graphics_61 = new cjs.Graphics().p("A4wi8QFlqyLkjsQLkjrKwFmQKyFkDsLjMg30ARwQjsrlFlqvg");
	var mask_2_graphics_62 = new cjs.Graphics().p("A4ijOQF2qqLpjZQLpjaKoF2QKpF0DaLpMg4OAQaQjZrpF0qng");
	var mask_2_graphics_63 = new cjs.Graphics().p("A4SjfQGGqhLujIQLujIKfGGQKgGEDILuMg4mAPFQjHrvGEqdg");
	var mask_2_graphics_64 = new cjs.Graphics().p("A4BjwQGWqXLzi2QLyi2KVGWQKXGUC2LyMg47ANuQi2rzGUqUg");
	var mask_2_graphics_65 = new cjs.Graphics().p("A3ukAQGlqNL3ikQL2ikKMGlQKNGkCkL2Mg5PAMYQikr3GkqLg");
	var mask_2_graphics_66 = new cjs.Graphics().p("A3akPQG1qDL6iSQL6iSKBG1QKDGyCSL6Mg5gALBQiSr7GzqAg");
	var mask_2_graphics_67 = new cjs.Graphics().p("A3EkdQHDp5L+iAQL9iAJ3HEQJ4HCCAL9Mg5vAJpQiAr+HCp1g");
	var mask_2_graphics_68 = new cjs.Graphics().p("A2tkrQHSpuMBhtQL/huJsHSQJtHRBuMAMg58AIRQhusAHRprg");
	var mask_2_graphics_69 = new cjs.Graphics().p("A2Vk4QHhpjMDhbQMChcJgHhQJiHgBcMCMg6IAG5QhbsDHfpfg");
	var mask_2_graphics_70 = new cjs.Graphics().p("A17lFQHvpWMFhJQMDhKJWHwQJWHtBJMEMg6RAFhQhJsFHupUg");
	var mask_2_graphics_71 = new cjs.Graphics().p("A1glQQH9pLMGg3QMFg3JKH9QJKH8A3MFMg6YAEJQg3sGH8pIg");
	var mask_2_graphics_72 = new cjs.Graphics().p("A1ElbQILo/MHgkQMGglI9ILQI/IIAkMIMg6dACwQgksIIJo7g");
	var mask_2_graphics_73 = new cjs.Graphics().p("A0mlmQIYoxMIgSQMHgSIwIYQIyIVASMIMg6gABYQgSsIIXowg");
	var mask_2_graphics_74 = new cjs.Graphics().p("A8sO7QABsIIjojQImolMHABQMIAAIjIlQIlIjAAMIg");
	var mask_2_graphics_75 = new cjs.Graphics().p("A8rN4QATsIIwoVQIyoYMHATQMIATIWIyQIYIwgTMHg");
	var mask_2_graphics_76 = new cjs.Graphics().p("A8qM2QAmsII9oHQI+oKMGAlQMHAlIJI+QIKI8glMIg");
	var mask_2_graphics_77 = new cjs.Graphics().p("A8nLzQA4sFJJn7QJLn8MEA3QMGA4H7JKQH9JJg4MGg");
	var mask_2_graphics_78 = new cjs.Graphics().p("A8jKxQBJsEJVnsQJXnvMDBKQMFBKHtJWQHuJUhKMFg");
	var mask_2_graphics_79 = new cjs.Graphics().p("A8fJvQBcsCJhneQJingMBBcQMDBcHeJiQHgJghcMCg");
	var mask_2_graphics_80 = new cjs.Graphics().p("A8ZItQBur/JsnQQJtnRL/BuQMABuHQJtQHRJrhuMAg");
	var mask_2_graphics_81 = new cjs.Graphics().p("A8SHrQCAr8J3nBQJ4nDL8CBQL9CAHAJ4QHDJ2iAL9g");
	var mask_2_graphics_82 = new cjs.Graphics().p("A8LGpQCTr4KBmyQKCm0L5CTQL6CTGxKCQG0KAiTL6g");
	var mask_2_graphics_83 = new cjs.Graphics().p("A8CFoQClr1KLmiQKMmkL1CkQL2ClGiKMQGlKKilL2g");
	var mask_2_graphics_84 = new cjs.Graphics().p("A74EnQC3rwKUmTQKXmVLwC3QLyC2GTKWQGUKUi2Lyg");
	var mask_2_graphics_85 = new cjs.Graphics().p("A7rDaQDMrsKgmAQKimBLrDMQLsDMGAKhQGBKgjMLsg");
	var mask_2_graphics_86 = new cjs.Graphics().p("A7cCMQDhrlKrlsQKsluLlDhQLmDhFsKsQFvKqjiLng");
	var mask_2_graphics_87 = new cjs.Graphics().p("A7MBAQD2rfK1lZQK3lZLeD2QLfD2FZK3QFaK0j2Lfg");
	var mask_2_graphics_88 = new cjs.Graphics().p("A67gLQEMrYK+lFQLAlGLXELQLYEMFFLAQFGK9kLLYg");
	var mask_2_graphics_89 = new cjs.Graphics().p("A6ohWQEgrQLIkxQLIkyLQEhQLQEgEwLIQEzLHkhLQg");
	var mask_2_graphics_90 = new cjs.Graphics().p("A6TigQE0rILQkcQLRkdLIE0QLHE1EcLRQEdLQk0LHg");
	var mask_2_graphics_91 = new cjs.Graphics().p("A59jqQFJq+LXkIQLZkIK+FJQK/FJEHLZQEJLXlJK+g");
	var mask_2_graphics_92 = new cjs.Graphics().p("A5mkyQFdq1LfjyQLgj0K1FdQK0FdDyLgQD0LfldK1g");
	var mask_2_graphics_93 = new cjs.Graphics().p("A5Nl5QFxqrLljdQLnjeKqFwQKrFxDcLnQDfLllwKqg");
	var mask_2_graphics_94 = new cjs.Graphics().p("A4znAQGEqfLsjIQLtjJKfGEQKgGEDHLsQDKLsmEKgg");
	var mask_2_graphics_95 = new cjs.Graphics().p("A4XoFQGXqULxizQLyizKUGXQKVGXCxLyQC0LxmXKVg");
	var mask_2_graphics_96 = new cjs.Graphics().p("A36pJQGqqIL2idQL3idKIGpQKIGqCcL2QCfL3mqKIg");
	var mask_2_graphics_97 = new cjs.Graphics().p("A3cqLQG8p8L7iHQL7iIJ7G8QJ8G8CHL7QCIL6m8J8g");
	var mask_2_graphics_98 = new cjs.Graphics().p("A28rNQHOpuL+hyQL+hyJvHPQJvHOBxL+QByL+nOJvg");
	var mask_2_graphics_99 = new cjs.Graphics().p("A2bsNQHgphMAhbQMChcJhHgQJhHgBbMAQBdMCngJhg");
	var mask_2_graphics_100 = new cjs.Graphics().p("A15tLQHxpTMDhGQMEhFJTHxQJTHxBFMDQBGMEnxJTg");
	var mask_2_graphics_101 = new cjs.Graphics().p("A1WuIQICpFMEgvQMGgwJFICQJFICAuMFQAwMFoCJFg");
	var mask_2_graphics_102 = new cjs.Graphics().p("A0yvEQISo2MGgZQMHgZI2ISQI2ITAYMFQAaMHoSI2g");
	var mask_2_graphics_103 = new cjs.Graphics().p("A0Nv+QIjomMFgDQMIgDImIiQInIjACMGQAEMHojImg");
	var mask_2_graphics_104 = new cjs.Graphics().p("Aznw2QIyoXMFATQMIATIWIyQIXIygUMGQgSMHoyIWg");
	var mask_2_graphics_105 = new cjs.Graphics().p("Ay3x5QJEoDMEAuQMHAvICJEQIDJEgvMFQgtMGpFIDg");
	var mask_2_graphics_106 = new cjs.Graphics().p("AyGy5QJWnvMCBKQMEBJHvJWQHuJWhKMDQhJMEpWHug");
	var mask_2_graphics_107 = new cjs.Graphics().p("AxUz3QJnnZL/BkQMCBlHZJnQHZJmhlMAQhjMBpnHZg");
	var mask_2_graphics_108 = new cjs.Graphics().p("Awg0yQJ4nDL6B/QL+B/HEJ3QHDJ3iAL8Qh+L9p3HEg");
	var mask_2_graphics_109 = new cjs.Graphics().p("Avq1qQKGmtL2CaQL5CaGtKGQGtKHiaL3QiZL4qHGtg");
	var mask_2_graphics_110 = new cjs.Graphics().p("Au02fQKVmWLxC0QLzC0GWKVQGXKWi2LxQizLyqVGXg");
	var mask_2_graphics_111 = new cjs.Graphics().p("At83RQKjl/LqDOQLsDPF/KjQF/KjjPLqQjOLsqjF/g");
	var mask_2_graphics_112 = new cjs.Graphics().p("AtD4BQKwlnLiDoQLlDpFnKwQFnKxjpLiQjnLlqxFng");
	var mask_2_graphics_113 = new cjs.Graphics().p("AsJ4tQK9lPLZECQLdEDFOK8QFPK7kDLcQkBLbq8FPg");
	var mask_2_graphics_114 = new cjs.Graphics().p("ArO5WQLIk2LQEbQLTEcE3LIQE2LGkdLSQkaLTrIE2g");
	var mask_2_graphics_115 = new cjs.Graphics().p("AqR58QLRkdLHE0QLJE1EdLSQEdLSk2LHQkzLIrTEdg");
	var mask_2_graphics_116 = new cjs.Graphics().p("ApU6fQLbkEK8FNQK9FOEELcQEELblPK8QlMK9rcEEg");
	var mask_2_graphics_117 = new cjs.Graphics().p("AoW6/QLkjqKvFmQKyFmDqLkQDqLklnKwQlkKxrlDqg");
	var mask_2_graphics_118 = new cjs.Graphics().p("AnX7bQLrjQKjF9QKlF+DQLsQDQLsl+KjQl9KkrsDQg");
	var mask_2_graphics_119 = new cjs.Graphics().p("AmX70QLyi2KVGVQKXGVC2LzQC2LzmWKVQmUKXr0C2g");
	var mask_2_graphics_120 = new cjs.Graphics().p("AlX8KQL4ibKHGrQKIGtCcL5QCbL4mtKHQmrKIr5Ccg");
	var mask_2_graphics_121 = new cjs.Graphics().p("AkX8cQL9iBJ4HCQJ5HDCBL+QCAL+nDJ3QnCJ5r+CBg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(59).to({graphics:mask_2_graphics_59,x:185.2,y:128.2}).wait(1).to({graphics:mask_2_graphics_60,x:186,y:126.1}).wait(1).to({graphics:mask_2_graphics_61,x:186.7,y:124}).wait(1).to({graphics:mask_2_graphics_62,x:187.3,y:121.8}).wait(1).to({graphics:mask_2_graphics_63,x:187.9,y:119.7}).wait(1).to({graphics:mask_2_graphics_64,x:188.4,y:117.5}).wait(1).to({graphics:mask_2_graphics_65,x:188.9,y:115.4}).wait(1).to({graphics:mask_2_graphics_66,x:189.3,y:113.2}).wait(1).to({graphics:mask_2_graphics_67,x:189.7,y:111}).wait(1).to({graphics:mask_2_graphics_68,x:190,y:108.8}).wait(1).to({graphics:mask_2_graphics_69,x:190.3,y:106.6}).wait(1).to({graphics:mask_2_graphics_70,x:190.5,y:104.4}).wait(1).to({graphics:mask_2_graphics_71,x:190.7,y:102.2}).wait(1).to({graphics:mask_2_graphics_72,x:190.8,y:100}).wait(1).to({graphics:mask_2_graphics_73,x:190.9,y:97.8}).wait(1).to({graphics:mask_2_graphics_74,x:190.9,y:95.6}).wait(1).to({graphics:mask_2_graphics_75,x:190.9,y:97.8}).wait(1).to({graphics:mask_2_graphics_76,x:190.9,y:100.1}).wait(1).to({graphics:mask_2_graphics_77,x:190.9,y:102.3}).wait(1).to({graphics:mask_2_graphics_78,x:190.9,y:104.5}).wait(1).to({graphics:mask_2_graphics_79,x:190.9,y:106.7}).wait(1).to({graphics:mask_2_graphics_80,x:190.9,y:108.9}).wait(1).to({graphics:mask_2_graphics_81,x:190.9,y:111.1}).wait(1).to({graphics:mask_2_graphics_82,x:190.9,y:113.3}).wait(1).to({graphics:mask_2_graphics_83,x:190.9,y:115.4}).wait(1).to({graphics:mask_2_graphics_84,x:191,y:117.6}).wait(1).to({graphics:mask_2_graphics_85,x:191,y:120.2}).wait(1).to({graphics:mask_2_graphics_86,x:191,y:122.8}).wait(1).to({graphics:mask_2_graphics_87,x:191,y:125.3}).wait(1).to({graphics:mask_2_graphics_88,x:191,y:127.8}).wait(1).to({graphics:mask_2_graphics_89,x:191,y:130.3}).wait(1).to({graphics:mask_2_graphics_90,x:191,y:132.8}).wait(1).to({graphics:mask_2_graphics_91,x:191,y:135.2}).wait(1).to({graphics:mask_2_graphics_92,x:191,y:137.7}).wait(1).to({graphics:mask_2_graphics_93,x:190.9,y:140}).wait(1).to({graphics:mask_2_graphics_94,x:190.9,y:142.4}).wait(1).to({graphics:mask_2_graphics_95,x:190.9,y:144.7}).wait(1).to({graphics:mask_2_graphics_96,x:190.8,y:146.9}).wait(1).to({graphics:mask_2_graphics_97,x:190.8,y:149.1}).wait(1).to({graphics:mask_2_graphics_98,x:190.7,y:151.3}).wait(1).to({graphics:mask_2_graphics_99,x:190.7,y:153.4}).wait(1).to({graphics:mask_2_graphics_100,x:190.7,y:155.5}).wait(1).to({graphics:mask_2_graphics_101,x:190.6,y:157.5}).wait(1).to({graphics:mask_2_graphics_102,x:190.6,y:159.5}).wait(1).to({graphics:mask_2_graphics_103,x:190.6,y:161.4}).wait(1).to({graphics:mask_2_graphics_104,x:190.6,y:163.2}).wait(1).to({graphics:mask_2_graphics_105,x:190.6,y:165.5}).wait(1).to({graphics:mask_2_graphics_106,x:190.6,y:167.6}).wait(1).to({graphics:mask_2_graphics_107,x:190.7,y:169.6}).wait(1).to({graphics:mask_2_graphics_108,x:190.7,y:171.6}).wait(1).to({graphics:mask_2_graphics_109,x:190.8,y:173.4}).wait(1).to({graphics:mask_2_graphics_110,x:190.8,y:175.2}).wait(1).to({graphics:mask_2_graphics_111,x:190.9,y:176.8}).wait(1).to({graphics:mask_2_graphics_112,x:190.9,y:178.4}).wait(1).to({graphics:mask_2_graphics_113,x:190.9,y:179.8}).wait(1).to({graphics:mask_2_graphics_114,x:190.9,y:181.2}).wait(1).to({graphics:mask_2_graphics_115,x:191,y:182.4}).wait(1).to({graphics:mask_2_graphics_116,x:191,y:183.6}).wait(1).to({graphics:mask_2_graphics_117,x:191,y:184.6}).wait(1).to({graphics:mask_2_graphics_118,x:190.9,y:185.5}).wait(1).to({graphics:mask_2_graphics_119,x:190.9,y:186.4}).wait(1).to({graphics:mask_2_graphics_120,x:190.9,y:187.1}).wait(1).to({graphics:mask_2_graphics_121,x:190.8,y:187.7}).wait(426));

	// Layer 14
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(20,1,1).p("Am+h8QB3hzAQgNQBRhEBVg+QBYhCBbg5QBrhCB5gcQCKghAnB6QAJAdgBAgQgEBzgwBfQgvBfg+BaQg9BZhKBwQhKBwhTBjQhTBkgeAuQgHALhTBc");
	this.shape_3.setTransform(239,210.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF0000").ss(1,1,1,3,true).p("AnYhmQBchRBfhPQBRhEBVg/QBYhBBbg6QBrhCB5gcQCKggAnB6QAJAdgBAfQgEBzgnBvQgiBigzBcQg4BkhHBcQhLBghRBZQhQBZhXBWQg6A4g9A1");
	this.shape_4.setTransform(236.4,211.3);

	var maskedShapeInstanceList = [this.shape_3,this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},59).wait(488));

	// Layer 4 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_9 = new cjs.Graphics().p("EAGcAjaQr/h5nJp1QnJp1B7r+QB4r+J1nJMAibAvZQnxFppGAAQibAAiggag");
	var mask_3_graphics_10 = new cjs.Graphics().p("EAGHAjUQr9iIm8p+Qm8p9CJr8QCHr8J9m8MAhgAwDQnoFUoxAAQisAAizggg");
	var mask_3_graphics_11 = new cjs.Graphics().p("EAFyAjNQr5iXmwqGQmwqGCYr5QCWr5KGmwMAgjAwsQneFAoeAAQi9AAjFgng");
	var mask_3_graphics_12 = new cjs.Graphics().p("EAFeAjGQr3immjqOQmjqOCmr3QClr1KOmkMAfnAxUQnVEtoKAAQjOAAjWgvg");
	var mask_3_graphics_13 = new cjs.Graphics().p("EAFKAi9Qrzi0mXqWQmWqWC1ryQCzrzKWmXMAeqAx6QnLEan3AAQjfAAjng4g");
	var mask_3_graphics_14 = new cjs.Graphics().p("EAE2Ai1QrvjEmKqdQmKqeDFruQDBrwKemKMAdsAygQnBEHnkAAQjvAAj5hAg");
	var mask_3_graphics_15 = new cjs.Graphics().p("EAEjAirQrrjSl9qlQl9qlDTrqQDQrsKml9MAcsAzEQm1D1nSAAQkAAAkJhKg");
	var mask_3_graphics_16 = new cjs.Graphics().p("EAEQAihQrnjglvqtQlwqsDhrmQDfroKslvMAbtAzmQmqDkm/AAQkRAAkZhUg");
	var mask_3_graphics_17 = new cjs.Graphics().p("EAD+AiWQrjjvliqzQliqzDvriQDtrjK0liMAasA0IQmeDUmuAAQkhAAkohgg");
	var mask_3_graphics_18 = new cjs.Graphics().p("EADsAiKQrej8lVq7QlVq6D+rcQD7rfK5lUMAZtA0oQmRDEmdAAQkyAAk3hsg");
	var mask_3_graphics_19 = new cjs.Graphics().p("EADaAh+QrZkLlHrAQlHrBELrXQEKraLAlHMAYqA1IQmEC0mLAAQlCAAlHh4g");
	var mask_3_graphics_20 = new cjs.Graphics().p("EADJAhyQrUkak5rGQk6rHEarSQEYrULFk6MAXpA1mQl3Cll7AAQlSAAlViEg");
	var mask_3_graphics_21 = new cjs.Graphics().p("EAC4AhkQrOknksrNQksrMEorNQEmrOLMksMAWlA2CQlpCXlqAAQljAAljiSg");
	var mask_3_graphics_22 = new cjs.Graphics().p("EACnAhWQrIk1kerSQkdrSE1rHQE0rJLRkdMAVjA2dQlcCJlZAAQl0AAlxigg");
	var mask_3_graphics_23 = new cjs.Graphics().p("EACXAhIQrClDkQrYQkPrYFDrAQFBrDLXkPMAUfA23QlNB8lJAAQmFAAl+iug");
	var mask_3_graphics_24 = new cjs.Graphics().p("EACHAg4Qq7lQkCrdQkBrdFRq6QFOq8LckBMATbA3PQk/Bwk3AAQmXAAmLi+g");
	var mask_3_graphics_25 = new cjs.Graphics().p("EAB4AgoQq1ldjzriQjzriFeqzQFcq2LhjzMASWA3nQkvBkkoAAQmnAAmYjOg");
	var mask_3_graphics_26 = new cjs.Graphics().p("EABpAgYQqulrjlrmQjlrnFsqsQFqqvLljlMARQA39QkfBZkXAAQm5AAmkjeg");
	var mask_3_graphics_27 = new cjs.Graphics().p("EABbAgHQqnl4jXrrQjWrqF5qmQF3qnLpjXMAQLA4SQkPBOkHAAQnLAAmvjvg");
	var mask_3_graphics_28 = new cjs.Graphics().p("ABNf1QqgmFjIrvQjIruGGqeQGEqgLujIMAPFA4lQj/BEj2AAQneAAm6kBg");
	var mask_3_graphics_29 = new cjs.Graphics().p("AA/fjQqYmSi5rzQi6ryGTqWQGRqYLxi6MAN/A43QjuA7jlAAQnxAAnFkTg");
	var mask_3_graphics_30 = new cjs.Graphics().p("AAyfQQqQmfirr2Qiqr1GfqOQGeqRL0irMAM4A5IQjdAxjUAAQoDAAnQklg");
	var mask_3_graphics_31 = new cjs.Graphics().p("AAle9QqImsicr5Qicr4GtqHQGqqIL4icMALxA5XQjMApjEAAQoWAAnak4g");
	var mask_3_graphics_32 = new cjs.Graphics().p("AAZepQp/m4iOr8QiNr7G5p+QG3qAL6iOMAKqA5lQi6AiiyAAQorAAnjlMg");
	var mask_3_graphics_33 = new cjs.Graphics().p("AANeUQp2nEh/r+Qh+r+HFp2QHCp3L+h+MAJiA5wQioAcihAAQo/AAnslhg");
	var mask_3_graphics_34 = new cjs.Graphics().p("AACd/QpunRhwsAQhvsAHRptQHOpuMAhwMAIbA58QiVAWiQAAQpUAAn0l2g");
	var mask_3_graphics_35 = new cjs.Graphics().p("AgHdtQpnnbhjsDQhisBHbplQHYpnMChjMAHeA6EQiFARiBAAQpnAAn6mHg");
	var mask_3_graphics_36 = new cjs.Graphics().p("AgQdaQpfnlhWsEQhWsDHlpdQHjpfMEhWMAGfA6LQh0ANhxAAQp6AAoBmag");
	var mask_3_graphics_37 = new cjs.Graphics().p("AgZdGQpWnvhKsFQhJsEHvpVQHtpXMFhJMAFiA6SQhkAJhhAAQqOAAoHmug");
	var mask_3_graphics_38 = new cjs.Graphics().p("AghczQpPn5g8sHQg9sFH5pNQH3pOMGg9MAEkA6YQhTAGhRAAQqhAAoNnBg");
	var mask_3_graphics_39 = new cjs.Graphics().p("AgpceQpGoCgwsHQgwsHIDpEQIApGMHgwMADnA6cQhCAEhBAAQq2AAoSnWg");
	var mask_3_graphics_40 = new cjs.Graphics().p("AgxcKQo9oMgjsIQgjsHIMo8QIKo+MIgjMACoA6gQgwACgwAAQrLAAoYnqg");
	var mask_3_graphics_41 = new cjs.Graphics().p("Ag4b1Qo1oWgWsIQgWsHIWo0QITo1MIgWMABrA6iIg+ABQrhAAocn/g");
	var mask_3_graphics_42 = new cjs.Graphics().p("Ag/bgQosofgJsJQgJsIIfoqQIcosMJgJMAAsA6jIgaAAQr4AAogoUg");
	var mask_3_graphics_43 = new cjs.Graphics().p("AhObKQojooAEsJQADsIIoohQImojMJAEMgASA6jQsJgEogomg");
	var mask_3_graphics_44 = new cjs.Graphics().p("Ahza0QoaoxAQsJQARsHIxoZQIvoZMIAQMgBQA6jQsIgRoXovg");
	var mask_3_graphics_45 = new cjs.Graphics().p("AiYaeQoRo6AesIQAdsHI6oPQI3oRMIAeMgCNA6gQsIgdoOo4g");
	var mask_3_graphics_46 = new cjs.Graphics().p("Ai9aIQoHpDArsIQAqsGJCoGQJAoHMIArMgDMA6eQsHgqoFpBg");
	var mask_3_graphics_47 = new cjs.Graphics().p("AjhZxQn9pLA3sHQA3sFJLn8QJJn9MGA3MgEJA6aQsHg3n7pKg");
	var mask_3_graphics_48 = new cjs.Graphics().p("AkEZbQn0pTBEsGQBEsFJTnyQJRn0MGBEMgFHA6WQsGhEnxpSg");
	var mask_3_graphics_49 = new cjs.Graphics().p("AkoZFQnppcBQsFQBRsDJbnoQJanqMEBRMgGFA6PQsEhQnopag");
	var mask_3_graphics_50 = new cjs.Graphics().p("AlKYuQngpkBdsDQBesCJjneQJhngMEBeMgHDA6JQsDhendpig");
	var mask_3_graphics_51 = new cjs.Graphics().p("AltYYQnVpsBqsBQBqsBJrnUQJpnVMCBqMgIAA6BQsChqnTpqg");
	var mask_3_graphics_52 = new cjs.Graphics().p("AmPYBQnLpzB3sAQB3r/JynJQJynLL/B2MgI9A54QsAh2nJpyg");
	var mask_3_graphics_53 = new cjs.Graphics().p("AmwXqQnBp6CEr+QCDr9J6m/QJ5nBL+CEMgJ7A5uQr+iEm+p5g");
	var mask_3_graphics_54 = new cjs.Graphics().p("AnRXUQm2qCCQr8QCQr6KBm1QKAm2L8CQMgK4A5jQr6iQm1qAg");
	var mask_3_graphics_55 = new cjs.Graphics().p("AnyW9QmrqJCcr5QCdr4KImqQKImsL5CdMgL1A5XQr4icmqqIg");
	var mask_3_graphics_56 = new cjs.Graphics().p("AoSWmQmhqQCqr2QCpr1KPmgQKPmhL2CqMgMxA5KQr2ipmfqPg");
	var mask_3_graphics_57 = new cjs.Graphics().p("AoyWQQmVqYC2rzQC1ryKWmVQKWmWLzC2MgNuA49Qryi2mVqVg");
	var mask_3_graphics_58 = new cjs.Graphics().p("ApRV5QmKqeDCrvQDCrxKdmJQKcmLLwDDMgOqA4tQrvjCmKqcg");
	var mask_3_graphics_59 = new cjs.Graphics().p("ApvViQmAqkDPrsQDPrtKil+QKjmALtDPMgPmA4eQrsjPl+qjg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_3_graphics_9,x:180.6,y:229.2}).wait(1).to({graphics:mask_3_graphics_10,x:179.1,y:229.2}).wait(1).to({graphics:mask_3_graphics_11,x:177.6,y:229.2}).wait(1).to({graphics:mask_3_graphics_12,x:176.1,y:229.3}).wait(1).to({graphics:mask_3_graphics_13,x:174.6,y:229.3}).wait(1).to({graphics:mask_3_graphics_14,x:173.1,y:229.3}).wait(1).to({graphics:mask_3_graphics_15,x:171.5,y:229.3}).wait(1).to({graphics:mask_3_graphics_16,x:169.9,y:229.3}).wait(1).to({graphics:mask_3_graphics_17,x:168.3,y:229.4}).wait(1).to({graphics:mask_3_graphics_18,x:166.7,y:229.4}).wait(1).to({graphics:mask_3_graphics_19,x:165,y:229.4}).wait(1).to({graphics:mask_3_graphics_20,x:163.4,y:229.4}).wait(1).to({graphics:mask_3_graphics_21,x:161.7,y:229.4}).wait(1).to({graphics:mask_3_graphics_22,x:160.1,y:229.4}).wait(1).to({graphics:mask_3_graphics_23,x:158.4,y:229.4}).wait(1).to({graphics:mask_3_graphics_24,x:156.7,y:229.4}).wait(1).to({graphics:mask_3_graphics_25,x:155,y:229.4}).wait(1).to({graphics:mask_3_graphics_26,x:153.2,y:229.4}).wait(1).to({graphics:mask_3_graphics_27,x:151.5,y:229.4}).wait(1).to({graphics:mask_3_graphics_28,x:149.8,y:229.4}).wait(1).to({graphics:mask_3_graphics_29,x:148,y:229.4}).wait(1).to({graphics:mask_3_graphics_30,x:146.2,y:229.3}).wait(1).to({graphics:mask_3_graphics_31,x:144.5,y:229.3}).wait(1).to({graphics:mask_3_graphics_32,x:142.7,y:229.3}).wait(1).to({graphics:mask_3_graphics_33,x:140.9,y:229.3}).wait(1).to({graphics:mask_3_graphics_34,x:139.1,y:229.3}).wait(1).to({graphics:mask_3_graphics_35,x:137.6,y:229.2}).wait(1).to({graphics:mask_3_graphics_36,x:136,y:229.2}).wait(1).to({graphics:mask_3_graphics_37,x:134.5,y:229.2}).wait(1).to({graphics:mask_3_graphics_38,x:132.9,y:229.2}).wait(1).to({graphics:mask_3_graphics_39,x:131.4,y:229.2}).wait(1).to({graphics:mask_3_graphics_40,x:129.8,y:229.2}).wait(1).to({graphics:mask_3_graphics_41,x:128.3,y:229.2}).wait(1).to({graphics:mask_3_graphics_42,x:126.7,y:229.2}).wait(1).to({graphics:mask_3_graphics_43,x:126.1,y:229.2}).wait(1).to({graphics:mask_3_graphics_44,x:127.6,y:229.2}).wait(1).to({graphics:mask_3_graphics_45,x:129.1,y:229.1}).wait(1).to({graphics:mask_3_graphics_46,x:130.7,y:229.1}).wait(1).to({graphics:mask_3_graphics_47,x:132.2,y:229}).wait(1).to({graphics:mask_3_graphics_48,x:133.8,y:228.9}).wait(1).to({graphics:mask_3_graphics_49,x:135.3,y:228.7}).wait(1).to({graphics:mask_3_graphics_50,x:136.9,y:228.6}).wait(1).to({graphics:mask_3_graphics_51,x:138.4,y:228.4}).wait(1).to({graphics:mask_3_graphics_52,x:139.9,y:228.1}).wait(1).to({graphics:mask_3_graphics_53,x:141.5,y:227.9}).wait(1).to({graphics:mask_3_graphics_54,x:143,y:227.6}).wait(1).to({graphics:mask_3_graphics_55,x:144.5,y:227.3}).wait(1).to({graphics:mask_3_graphics_56,x:146,y:227}).wait(1).to({graphics:mask_3_graphics_57,x:147.5,y:226.7}).wait(1).to({graphics:mask_3_graphics_58,x:149,y:226.3}).wait(1).to({graphics:mask_3_graphics_59,x:150.5,y:226}).wait(488));

	// Layer 2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(20,1,1).p("AmjDxQB3hzAQgNQBRhEBVg9QBYhCBbg5QBrhCB5gcQBUgUAvAl");
	this.shape_5.setTransform(236.3,173.6);
	this.shape_5._off = true;

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(9).to({_off:false},0).wait(538));

	// Letter
	this.instance_4 = new lib.z("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(275,275);
	this.instance_4.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(547));

	// Background
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_6.setTransform(275,275,3.373,2.543);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_7.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).wait(547));

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