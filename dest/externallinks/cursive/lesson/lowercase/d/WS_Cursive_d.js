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


(lib.d = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmyTHQhehbAAikIAGh+QohHVkuAAQi7AAhwiEQhsh+AAjCQAAi7Dfl/QCEi8CsiOQCniODIhgQDBheDcguQDWgwDnABICjAMIGjsMQAshMBMAAQCWAAAACQQsMXmhfCcIhzCyQhVC5AABXQAABHBEAAQC6AADQhSQC2hHDHiEQELivGFlvQEdkbAXgRQBGgvAyAAQBhAAAAByQAAAuh+CWIikDBQgmBAhwBbIgRAMIhPBPQljE3kuCpQjBBti2A7QjKBDi6AAQikAAhbhYgAl4iNQi1AjikBGQinBIiQBtQiVByhyCPQjIFAAACQQAACbB+AAQFdAALLsMIA6hJQCTiYBYjAQi5AAizAjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-177.6,-131.1,355.4,262.2);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-143.7,guide:{path:[-5.3,-65.1,-0.8,-104,2.3,-128.4,5.3,-152.8,18.5,-174.2,18.5,-174.3,18.6,-174.4]}},79).to({rotation:-49.3,guide:{path:[18.6,-174.5,23.9,-183,27.9,-184.6]}},11).to({regX:0.1,regY:-0.1,scaleX:1,scaleY:1,rotation:0,guide:{path:[27.9,-184.6,30.8,-185.8,33,-183.2,35.2,-180.7,36.7,-174.3,41.7,-152.9,40.7,-147]}},29).wait(1));

	// Layer 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_90 = new cjs.Graphics().p("Ag4tsIAAhhIGXAAIAABhg");
	var mask_graphics_91 = new cjs.Graphics().p("AjLA4IAAhvIGXAAIAABvg");
	var mask_graphics_92 = new cjs.Graphics().p("AjLA/IAAh9IGXAAIAAB9g");
	var mask_graphics_93 = new cjs.Graphics().p("AjLBHIAAiNIGXAAIAACNg");
	var mask_graphics_94 = new cjs.Graphics().p("AjLBOIAAibIGXAAIAACbg");
	var mask_graphics_95 = new cjs.Graphics().p("AjLBVIAAipIGXAAIAACpg");
	var mask_graphics_96 = new cjs.Graphics().p("AjLBdIAAi5IGXAAIAAC5g");
	var mask_graphics_97 = new cjs.Graphics().p("AjLBkIAAjHIGXAAIAADHg");
	var mask_graphics_98 = new cjs.Graphics().p("AjLBrIAAjVIGXAAIAADVg");
	var mask_graphics_99 = new cjs.Graphics().p("AjLByIAAjkIGXAAIAADkg");
	var mask_graphics_100 = new cjs.Graphics().p("AjLB6IAAjzIGXAAIAADzg");
	var mask_graphics_101 = new cjs.Graphics().p("AjLCBIAAkBIGXAAIAAEBg");
	var mask_graphics_102 = new cjs.Graphics().p("AjLCIIAAkQIGXAAIAAEQg");
	var mask_graphics_103 = new cjs.Graphics().p("AjLCQIAAkfIGXAAIAAEfg");
	var mask_graphics_104 = new cjs.Graphics().p("AjLCXIAAktIGXAAIAAEtg");
	var mask_graphics_105 = new cjs.Graphics().p("AjLCfIAAk9IGXAAIAAE9g");
	var mask_graphics_106 = new cjs.Graphics().p("AjLCmIAAlLIGXAAIAAFLg");
	var mask_graphics_107 = new cjs.Graphics().p("AjLCtIAAlZIGXAAIAAFZg");
	var mask_graphics_108 = new cjs.Graphics().p("AjLC1IAAlpIGXAAIAAFpg");
	var mask_graphics_109 = new cjs.Graphics().p("AjLC8IAAl3IGXAAIAAF3g");
	var mask_graphics_110 = new cjs.Graphics().p("AjLDDIAAmFIGXAAIAAGFg");
	var mask_graphics_111 = new cjs.Graphics().p("AjLDKIAAmUIGXAAIAAGUg");
	var mask_graphics_112 = new cjs.Graphics().p("AjLDSIAAmjIGXAAIAAGjg");
	var mask_graphics_113 = new cjs.Graphics().p("AjLDZIAAmxIGXAAIAAGxg");
	var mask_graphics_114 = new cjs.Graphics().p("AjLDgIAAm/IGXAAIAAG/g");
	var mask_graphics_115 = new cjs.Graphics().p("AjLDoIAAnPIGXAAIAAHPg");
	var mask_graphics_116 = new cjs.Graphics().p("AjLDvIAAndIGXAAIAAHdg");
	var mask_graphics_117 = new cjs.Graphics().p("AjLD2IAAnrIGXAAIAAHrg");
	var mask_graphics_118 = new cjs.Graphics().p("AjLD+IAAn7IGXAAIAAH7g");
	var mask_graphics_119 = new cjs.Graphics().p("Ag4l9IAApQIGXAAIAAJQg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(90).to({graphics:mask_graphics_90,x:35.1,y:-97.4}).wait(1).to({graphics:mask_graphics_91,x:49.8,y:-189.2}).wait(1).to({graphics:mask_graphics_92,x:49.8,y:-188.5}).wait(1).to({graphics:mask_graphics_93,x:49.8,y:-187.8}).wait(1).to({graphics:mask_graphics_94,x:49.8,y:-187}).wait(1).to({graphics:mask_graphics_95,x:49.8,y:-186.3}).wait(1).to({graphics:mask_graphics_96,x:49.8,y:-185.6}).wait(1).to({graphics:mask_graphics_97,x:49.8,y:-184.8}).wait(1).to({graphics:mask_graphics_98,x:49.8,y:-184.1}).wait(1).to({graphics:mask_graphics_99,x:49.8,y:-183.4}).wait(1).to({graphics:mask_graphics_100,x:49.8,y:-182.7}).wait(1).to({graphics:mask_graphics_101,x:49.8,y:-181.9}).wait(1).to({graphics:mask_graphics_102,x:49.8,y:-181.2}).wait(1).to({graphics:mask_graphics_103,x:49.8,y:-180.5}).wait(1).to({graphics:mask_graphics_104,x:49.8,y:-179.7}).wait(1).to({graphics:mask_graphics_105,x:49.8,y:-179}).wait(1).to({graphics:mask_graphics_106,x:49.8,y:-178.3}).wait(1).to({graphics:mask_graphics_107,x:49.8,y:-177.6}).wait(1).to({graphics:mask_graphics_108,x:49.8,y:-176.8}).wait(1).to({graphics:mask_graphics_109,x:49.8,y:-176.1}).wait(1).to({graphics:mask_graphics_110,x:49.8,y:-175.4}).wait(1).to({graphics:mask_graphics_111,x:49.8,y:-174.6}).wait(1).to({graphics:mask_graphics_112,x:49.8,y:-173.9}).wait(1).to({graphics:mask_graphics_113,x:49.8,y:-173.2}).wait(1).to({graphics:mask_graphics_114,x:49.8,y:-172.5}).wait(1).to({graphics:mask_graphics_115,x:49.8,y:-171.7}).wait(1).to({graphics:mask_graphics_116,x:49.8,y:-171}).wait(1).to({graphics:mask_graphics_117,x:49.8,y:-170.3}).wait(1).to({graphics:mask_graphics_118,x:49.8,y:-169.5}).wait(1).to({graphics:mask_graphics_119,x:35.1,y:-97.4}).wait(1));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AjlJWQAtmGAejzQAfj0CDjVQCEjWA1DdQA1DcgWBu");
	this.shape.setTransform(17.6,-124.9);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90).to({_off:false},0).wait(30));

	// Layer 4 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AjLidIAAi4IGXAAIAAC4g");
	var mask_1_graphics_1 = new cjs.Graphics().p("AjLBjIAAjFIGXAAIAADFg");
	var mask_1_graphics_2 = new cjs.Graphics().p("AjLBqIAAjTIGXAAIAADTg");
	var mask_1_graphics_3 = new cjs.Graphics().p("AjLBxIAAjhIGXAAIAADhg");
	var mask_1_graphics_4 = new cjs.Graphics().p("AjLB4IAAjvIGXAAIAADvg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AjLB/IAAj9IGXAAIAAD9g");
	var mask_1_graphics_6 = new cjs.Graphics().p("AjLCGIAAkLIGXAAIAAELg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AjLCNIAAkZIGXAAIAAEZg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AjLCUIAAknIGXAAIAAEng");
	var mask_1_graphics_9 = new cjs.Graphics().p("AjLCbIAAk1IGXAAIAAE1g");
	var mask_1_graphics_10 = new cjs.Graphics().p("AjLCiIAAlDIGXAAIAAFDg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AjLCpIAAlRIGXAAIAAFRg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AjLCwIAAlfIGXAAIAAFfg");
	var mask_1_graphics_13 = new cjs.Graphics().p("AjLC3IAAltIGXAAIAAFtg");
	var mask_1_graphics_14 = new cjs.Graphics().p("AjLC+IAAl7IGXAAIAAF7g");
	var mask_1_graphics_15 = new cjs.Graphics().p("AjLDFIAAmJIGXAAIAAGJg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AjLDMIAAmXIGXAAIAAGXg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AjLDTIAAmmIGXAAIAAGmg");
	var mask_1_graphics_18 = new cjs.Graphics().p("AjLDaIAAmzIGXAAIAAGzg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AjLDhIAAnCIGXAAIAAHCg");
	var mask_1_graphics_20 = new cjs.Graphics().p("AjLDoIAAnPIGXAAIAAHPg");
	var mask_1_graphics_21 = new cjs.Graphics().p("AjLDvIAAneIGXAAIAAHeg");
	var mask_1_graphics_22 = new cjs.Graphics().p("AjLD2IAAnrIGXAAIAAHrg");
	var mask_1_graphics_23 = new cjs.Graphics().p("AjLD9IAAn6IGXAAIAAH6g");
	var mask_1_graphics_24 = new cjs.Graphics().p("AjLEEIAAoHIGXAAIAAIHg");
	var mask_1_graphics_25 = new cjs.Graphics().p("AjLELIAAoWIGXAAIAAIWg");
	var mask_1_graphics_26 = new cjs.Graphics().p("AjLESIAAokIGXAAIAAIkg");
	var mask_1_graphics_27 = new cjs.Graphics().p("AjLEZIAAoxIGXAAIAAIxg");
	var mask_1_graphics_28 = new cjs.Graphics().p("AjLEgIAApAIGXAAIAAJAg");
	var mask_1_graphics_29 = new cjs.Graphics().p("AjLEoIAApPIGXAAIAAJPg");
	var mask_1_graphics_30 = new cjs.Graphics().p("AjLEvIAApdIGXAAIAAJdg");
	var mask_1_graphics_31 = new cjs.Graphics().p("AjLE2IAAprIGXAAIAAJrg");
	var mask_1_graphics_32 = new cjs.Graphics().p("AjLE9IAAp5IGXAAIAAJ5g");
	var mask_1_graphics_33 = new cjs.Graphics().p("AjLFEIAAqHIGXAAIAAKHg");
	var mask_1_graphics_34 = new cjs.Graphics().p("AjLFLIAAqVIGXAAIAAKVg");
	var mask_1_graphics_35 = new cjs.Graphics().p("AjLFSIAAqjIGXAAIAAKjg");
	var mask_1_graphics_36 = new cjs.Graphics().p("AjLFZIAAqxIGXAAIAAKxg");
	var mask_1_graphics_37 = new cjs.Graphics().p("AjLFgIAAq/IGXAAIAAK/g");
	var mask_1_graphics_38 = new cjs.Graphics().p("AjLFnIAArNIGXAAIAALNg");
	var mask_1_graphics_39 = new cjs.Graphics().p("AjLFuIAArbIGXAAIAALbg");
	var mask_1_graphics_40 = new cjs.Graphics().p("AjLF1IAArpIGXAAIAALpg");
	var mask_1_graphics_41 = new cjs.Graphics().p("AjLF8IAAr3IGXAAIAAL3g");
	var mask_1_graphics_42 = new cjs.Graphics().p("AjLGDIAAsFIGXAAIAAMFg");
	var mask_1_graphics_43 = new cjs.Graphics().p("AjLGKIAAsTIGXAAIAAMTg");
	var mask_1_graphics_44 = new cjs.Graphics().p("AjLGRIAAshIGXAAIAAMhg");
	var mask_1_graphics_45 = new cjs.Graphics().p("AjLGYIAAsvIGXAAIAAMvg");
	var mask_1_graphics_46 = new cjs.Graphics().p("AjLGfIAAs9IGXAAIAAM9g");
	var mask_1_graphics_47 = new cjs.Graphics().p("AjLGmIAAtLIGXAAIAANLg");
	var mask_1_graphics_48 = new cjs.Graphics().p("AjLGtIAAtZIGXAAIAANZg");
	var mask_1_graphics_49 = new cjs.Graphics().p("AjLG0IAAtnIGXAAIAANng");
	var mask_1_graphics_50 = new cjs.Graphics().p("AjLG7IAAt1IGXAAIAAN1g");
	var mask_1_graphics_51 = new cjs.Graphics().p("AjLHCIAAuDIGXAAIAAODg");
	var mask_1_graphics_52 = new cjs.Graphics().p("AjLHJIAAuRIGXAAIAAORg");
	var mask_1_graphics_53 = new cjs.Graphics().p("AjLHQIAAufIGXAAIAAOfg");
	var mask_1_graphics_54 = new cjs.Graphics().p("AjLHXIAAutIGXAAIAAOtg");
	var mask_1_graphics_55 = new cjs.Graphics().p("AjLHeIAAu7IGXAAIAAO7g");
	var mask_1_graphics_56 = new cjs.Graphics().p("AjLHlIAAvJIGXAAIAAPJg");
	var mask_1_graphics_57 = new cjs.Graphics().p("AjLHsIAAvXIGXAAIAAPXg");
	var mask_1_graphics_58 = new cjs.Graphics().p("AjLHzIAAvlIGXAAIAAPlg");
	var mask_1_graphics_59 = new cjs.Graphics().p("AjLH6IAAvzIGXAAIAAPzg");
	var mask_1_graphics_60 = new cjs.Graphics().p("AjLIBIAAwBIGXAAIAAQBg");
	var mask_1_graphics_61 = new cjs.Graphics().p("AjLIIIAAwPIGXAAIAAQPg");
	var mask_1_graphics_62 = new cjs.Graphics().p("AjLIPIAAweIGXAAIAAQeg");
	var mask_1_graphics_63 = new cjs.Graphics().p("AjLIWIAAwrIGXAAIAAQrg");
	var mask_1_graphics_64 = new cjs.Graphics().p("AjLIdIAAw6IGXAAIAAQ6g");
	var mask_1_graphics_65 = new cjs.Graphics().p("AjLIkIAAxHIGXAAIAARHg");
	var mask_1_graphics_66 = new cjs.Graphics().p("AjLIrIAAxWIGXAAIAARWg");
	var mask_1_graphics_67 = new cjs.Graphics().p("AjLIyIAAxkIGXAAIAARkg");
	var mask_1_graphics_68 = new cjs.Graphics().p("AjLI5IAAxxIGXAAIAARxg");
	var mask_1_graphics_69 = new cjs.Graphics().p("AjLJAIAAyAIGXAAIAASAg");
	var mask_1_graphics_70 = new cjs.Graphics().p("AjLJHIAAyNIGXAAIAASNg");
	var mask_1_graphics_71 = new cjs.Graphics().p("AjLJOIAAycIGXAAIAAScg");
	var mask_1_graphics_72 = new cjs.Graphics().p("AjLJVIAAypIGXAAIAASpg");
	var mask_1_graphics_73 = new cjs.Graphics().p("AjLJcIAAy4IGXAAIAAS4g");
	var mask_1_graphics_74 = new cjs.Graphics().p("AjLJkIAAzHIGXAAIAATHg");
	var mask_1_graphics_75 = new cjs.Graphics().p("AjLJrIAAzVIGXAAIAATVg");
	var mask_1_graphics_76 = new cjs.Graphics().p("AjLJyIAAzjIGXAAIAATjg");
	var mask_1_graphics_77 = new cjs.Graphics().p("AjLJ5IAAzxIGXAAIAATxg");
	var mask_1_graphics_78 = new cjs.Graphics().p("AjLKAIAAz/IGXAAIAAT/g");
	var mask_1_graphics_79 = new cjs.Graphics().p("AjLKHIAA0NIGXAAIAAUNg");
	var mask_1_graphics_80 = new cjs.Graphics().p("AjLKOIAA0bIGXAAIAAUbg");
	var mask_1_graphics_81 = new cjs.Graphics().p("AjLKVIAA0pIGXAAIAAUpg");
	var mask_1_graphics_82 = new cjs.Graphics().p("AjLKcIAA03IGXAAIAAU3g");
	var mask_1_graphics_83 = new cjs.Graphics().p("AjLKjIAA1FIGXAAIAAVFg");
	var mask_1_graphics_84 = new cjs.Graphics().p("AjLKqIAA1TIGXAAIAAVTg");
	var mask_1_graphics_85 = new cjs.Graphics().p("AjLKxIAA1hIGXAAIAAVhg");
	var mask_1_graphics_86 = new cjs.Graphics().p("AjLK4IAA1vIGXAAIAAVvg");
	var mask_1_graphics_87 = new cjs.Graphics().p("AjLK/IAA19IGXAAIAAV9g");
	var mask_1_graphics_88 = new cjs.Graphics().p("AjLLGIAA2LIGXAAIAAWLg");
	var mask_1_graphics_89 = new cjs.Graphics().p("AjLLNIAA2ZIGXAAIAAWZg");
	var mask_1_graphics_90 = new cjs.Graphics().p("AjLHaIAA2nIGXAAIAAWng");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:9.8,y:-34.2}).wait(1).to({graphics:mask_1_graphics_1,x:9.8,y:-59.9}).wait(1).to({graphics:mask_1_graphics_2,x:9.8,y:-60.6}).wait(1).to({graphics:mask_1_graphics_3,x:9.8,y:-61.3}).wait(1).to({graphics:mask_1_graphics_4,x:9.8,y:-62}).wait(1).to({graphics:mask_1_graphics_5,x:9.8,y:-62.7}).wait(1).to({graphics:mask_1_graphics_6,x:9.8,y:-63.4}).wait(1).to({graphics:mask_1_graphics_7,x:9.8,y:-64.1}).wait(1).to({graphics:mask_1_graphics_8,x:9.8,y:-64.8}).wait(1).to({graphics:mask_1_graphics_9,x:9.8,y:-65.5}).wait(1).to({graphics:mask_1_graphics_10,x:9.8,y:-66.2}).wait(1).to({graphics:mask_1_graphics_11,x:9.8,y:-66.9}).wait(1).to({graphics:mask_1_graphics_12,x:9.8,y:-67.6}).wait(1).to({graphics:mask_1_graphics_13,x:9.8,y:-68.3}).wait(1).to({graphics:mask_1_graphics_14,x:9.8,y:-69}).wait(1).to({graphics:mask_1_graphics_15,x:9.8,y:-69.7}).wait(1).to({graphics:mask_1_graphics_16,x:9.8,y:-70.4}).wait(1).to({graphics:mask_1_graphics_17,x:9.8,y:-71.1}).wait(1).to({graphics:mask_1_graphics_18,x:9.8,y:-71.8}).wait(1).to({graphics:mask_1_graphics_19,x:9.8,y:-72.5}).wait(1).to({graphics:mask_1_graphics_20,x:9.8,y:-73.2}).wait(1).to({graphics:mask_1_graphics_21,x:9.8,y:-73.9}).wait(1).to({graphics:mask_1_graphics_22,x:9.8,y:-74.6}).wait(1).to({graphics:mask_1_graphics_23,x:9.8,y:-75.3}).wait(1).to({graphics:mask_1_graphics_24,x:9.8,y:-76}).wait(1).to({graphics:mask_1_graphics_25,x:9.8,y:-76.7}).wait(1).to({graphics:mask_1_graphics_26,x:9.8,y:-77.4}).wait(1).to({graphics:mask_1_graphics_27,x:9.8,y:-78.1}).wait(1).to({graphics:mask_1_graphics_28,x:9.8,y:-78.8}).wait(1).to({graphics:mask_1_graphics_29,x:9.8,y:-79.6}).wait(1).to({graphics:mask_1_graphics_30,x:9.8,y:-80.3}).wait(1).to({graphics:mask_1_graphics_31,x:9.8,y:-81}).wait(1).to({graphics:mask_1_graphics_32,x:9.8,y:-81.7}).wait(1).to({graphics:mask_1_graphics_33,x:9.8,y:-82.4}).wait(1).to({graphics:mask_1_graphics_34,x:9.8,y:-83.1}).wait(1).to({graphics:mask_1_graphics_35,x:9.8,y:-83.8}).wait(1).to({graphics:mask_1_graphics_36,x:9.8,y:-84.5}).wait(1).to({graphics:mask_1_graphics_37,x:9.8,y:-85.2}).wait(1).to({graphics:mask_1_graphics_38,x:9.8,y:-85.9}).wait(1).to({graphics:mask_1_graphics_39,x:9.8,y:-86.6}).wait(1).to({graphics:mask_1_graphics_40,x:9.8,y:-87.3}).wait(1).to({graphics:mask_1_graphics_41,x:9.8,y:-88}).wait(1).to({graphics:mask_1_graphics_42,x:9.8,y:-88.7}).wait(1).to({graphics:mask_1_graphics_43,x:9.8,y:-89.4}).wait(1).to({graphics:mask_1_graphics_44,x:9.8,y:-90.1}).wait(1).to({graphics:mask_1_graphics_45,x:9.8,y:-90.8}).wait(1).to({graphics:mask_1_graphics_46,x:9.8,y:-91.5}).wait(1).to({graphics:mask_1_graphics_47,x:9.8,y:-92.2}).wait(1).to({graphics:mask_1_graphics_48,x:9.8,y:-92.9}).wait(1).to({graphics:mask_1_graphics_49,x:9.8,y:-93.6}).wait(1).to({graphics:mask_1_graphics_50,x:9.8,y:-94.3}).wait(1).to({graphics:mask_1_graphics_51,x:9.8,y:-95}).wait(1).to({graphics:mask_1_graphics_52,x:9.8,y:-95.7}).wait(1).to({graphics:mask_1_graphics_53,x:9.8,y:-96.4}).wait(1).to({graphics:mask_1_graphics_54,x:9.8,y:-97.1}).wait(1).to({graphics:mask_1_graphics_55,x:9.8,y:-97.8}).wait(1).to({graphics:mask_1_graphics_56,x:9.8,y:-98.5}).wait(1).to({graphics:mask_1_graphics_57,x:9.8,y:-99.2}).wait(1).to({graphics:mask_1_graphics_58,x:9.8,y:-99.9}).wait(1).to({graphics:mask_1_graphics_59,x:9.8,y:-100.6}).wait(1).to({graphics:mask_1_graphics_60,x:9.8,y:-101.3}).wait(1).to({graphics:mask_1_graphics_61,x:9.8,y:-102}).wait(1).to({graphics:mask_1_graphics_62,x:9.8,y:-102.7}).wait(1).to({graphics:mask_1_graphics_63,x:9.8,y:-103.4}).wait(1).to({graphics:mask_1_graphics_64,x:9.8,y:-104.1}).wait(1).to({graphics:mask_1_graphics_65,x:9.8,y:-104.8}).wait(1).to({graphics:mask_1_graphics_66,x:9.8,y:-105.5}).wait(1).to({graphics:mask_1_graphics_67,x:9.8,y:-106.2}).wait(1).to({graphics:mask_1_graphics_68,x:9.8,y:-106.9}).wait(1).to({graphics:mask_1_graphics_69,x:9.8,y:-107.6}).wait(1).to({graphics:mask_1_graphics_70,x:9.8,y:-108.3}).wait(1).to({graphics:mask_1_graphics_71,x:9.8,y:-109}).wait(1).to({graphics:mask_1_graphics_72,x:9.8,y:-109.7}).wait(1).to({graphics:mask_1_graphics_73,x:9.8,y:-110.4}).wait(1).to({graphics:mask_1_graphics_74,x:9.8,y:-111.2}).wait(1).to({graphics:mask_1_graphics_75,x:9.8,y:-111.9}).wait(1).to({graphics:mask_1_graphics_76,x:9.8,y:-112.6}).wait(1).to({graphics:mask_1_graphics_77,x:9.8,y:-113.3}).wait(1).to({graphics:mask_1_graphics_78,x:9.8,y:-114}).wait(1).to({graphics:mask_1_graphics_79,x:9.8,y:-114.7}).wait(1).to({graphics:mask_1_graphics_80,x:9.8,y:-115.4}).wait(1).to({graphics:mask_1_graphics_81,x:9.8,y:-116.1}).wait(1).to({graphics:mask_1_graphics_82,x:9.8,y:-116.8}).wait(1).to({graphics:mask_1_graphics_83,x:9.8,y:-117.5}).wait(1).to({graphics:mask_1_graphics_84,x:9.8,y:-118.2}).wait(1).to({graphics:mask_1_graphics_85,x:9.8,y:-118.9}).wait(1).to({graphics:mask_1_graphics_86,x:9.8,y:-119.6}).wait(1).to({graphics:mask_1_graphics_87,x:9.8,y:-120.3}).wait(1).to({graphics:mask_1_graphics_88,x:9.8,y:-121}).wait(1).to({graphics:mask_1_graphics_89,x:9.8,y:-121.7}).wait(1).to({graphics:mask_1_graphics_90,x:9.8,y:-97.4}).wait(30));

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
(lib.WS_Cursive_d = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_604 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(604).call(this.frame_604).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(290.9,243.1,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[290.8,242.9,219.5,238.5,170.3,273.7,120.8,309.1,113.2,346.2,105.6,383.2,129.6,389.9,153.7,396.5,201.3,359.7,249,322.8,280.1,272.2,310.8,222.3,340.2,162.8]}},300).wait(15).to({startPosition:0},0).to({x:260.8,y:300.5},60).to({guide:{path:[261,300.5,234.7,349.8,235.3,372.5,235.9,395.1,263.4,391.2,318.9,383.3,363.8,345.1,389,323.6,406.8,306.7,410.8,302.8,414.4,299.3,417.3,296.5,419.9,293.8,425.7,288,430.1,283,433.3,279.3,435.7,276]}},140).wait(15).to({startPosition:0},0).to({guide:{path:[436,276,451,329.9,485.4,337.4,519.8,344.9,563.6,323.5,606.5,302.5,632,265.5]}},65).wait(1));

	// Layer 13
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(341,161.1,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},300).wait(15).to({_off:false,x:437,y:275.1},0).to({_off:true},200).wait(81));

	// Layer 15
	this.instance_1 = new lib.ar7("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(321.3,265.5,1,1,0,-138,42,-1.3,-99.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(324).to({_off:false},0).wait(281));

	// Layer 10 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_448 = new cjs.Graphics().p("AjcjKIBihJIFXHnIhXBAg");
	var mask_graphics_449 = new cjs.Graphics().p("AjkjEIByhVIFXHnIhnBMg");
	var mask_graphics_450 = new cjs.Graphics().p("Ajti/ICDhfIFYHmIh4BYg");
	var mask_graphics_451 = new cjs.Graphics().p("Aj1i5ICThsIFYHnIiIBkg");
	var mask_graphics_452 = new cjs.Graphics().p("Aj9izICjh4IFYHmIiZBxg");
	var mask_graphics_453 = new cjs.Graphics().p("AkFitICyiDIFZHlIipB8g");
	var mask_graphics_454 = new cjs.Graphics().p("AkOinIDDiPIFZHkIi5CJg");
	var mask_graphics_455 = new cjs.Graphics().p("AkWihIDTibIFZHkIjJCVg");
	var mask_graphics_456 = new cjs.Graphics().p("AkeibIDjinIFaHkIjaChg");
	var mask_graphics_457 = new cjs.Graphics().p("AkmiVIDzizIFaHkIjrCtg");
	var mask_graphics_458 = new cjs.Graphics().p("AkuiPIECi/IFbHkIj7C5g");
	var mask_graphics_459 = new cjs.Graphics().p("Ak3iJIETjLIFbHjIkLDGg");
	var mask_graphics_460 = new cjs.Graphics().p("Ak/iDIEjjXIFcHjIkcDSg");
	var mask_graphics_461 = new cjs.Graphics().p("AlHh9IEzjjIFcHjIktDeg");
	var mask_graphics_462 = new cjs.Graphics().p("AlPh3IFCjvIFdHiIk9Drg");
	var mask_graphics_463 = new cjs.Graphics().p("AlYhyIFTj5IFeHhIlOD3g");
	var mask_graphics_464 = new cjs.Graphics().p("AlghsIFhkGIFgHiIlfEDg");
	var mask_graphics_465 = new cjs.Graphics().p("AlohmIFxkSIFgHiIluEPg");
	var mask_graphics_466 = new cjs.Graphics().p("AlwhgIGBkdIFgHgIl+Ebg");
	var mask_graphics_467 = new cjs.Graphics().p("Al5haIGSkpIFgHgImOEng");
	var mask_graphics_468 = new cjs.Graphics().p("AmBhUIGik1IFhHgImfEzg");
	var mask_graphics_469 = new cjs.Graphics().p("AmJhOIGxlBIFiHfImwFAg");
	var mask_graphics_470 = new cjs.Graphics().p("AmRhIIHBlNIFiHfInAFMg");
	var mask_graphics_471 = new cjs.Graphics().p("AmZhCIHRlZIFiHfInQFYg");
	var mask_graphics_472 = new cjs.Graphics().p("Amig8IHillIFiHfIngFkg");
	var mask_graphics_473 = new cjs.Graphics().p("Amqg2IHxlxIFkHeInyFxg");
	var mask_graphics_474 = new cjs.Graphics().p("AmygwIIBl9IFkHeIoCF9g");
	var mask_graphics_475 = new cjs.Graphics().p("Am8gpIIVmLIFkHdIoWGMg");
	var mask_graphics_476 = new cjs.Graphics().p("AnGghIIpmbIFkHeIoqGbg");
	var mask_graphics_477 = new cjs.Graphics().p("AnRgaII+mpIFlHdIo/Gqg");
	var mask_graphics_478 = new cjs.Graphics().p("AnbgSIJSm5IFlHeIpTG5g");
	var mask_graphics_479 = new cjs.Graphics().p("AnlgLIJnnHIFkHdIpoHJg");
	var mask_graphics_480 = new cjs.Graphics().p("AnvgDIJ7nXIFkHeIp8HXg");
	var mask_graphics_481 = new cjs.Graphics().p("An5ADIKPnlIFkHfIqQHmg");
	var mask_graphics_482 = new cjs.Graphics().p("AoDALIKkn0IFjHeIqkH1g");
	var mask_graphics_483 = new cjs.Graphics().p("AoNATIK3oEIFkHfIq4IEg");
	var mask_graphics_484 = new cjs.Graphics().p("AoYAaILNoSIFjHeIrMITg");
	var mask_graphics_485 = new cjs.Graphics().p("AoiAiILhoiIFkHfIrhIig");
	var mask_graphics_486 = new cjs.Graphics().p("AosApIL1owIFkHeIr2Ixg");
	var mask_graphics_487 = new cjs.Graphics().p("Ao2AxIMKpAIFjHfIsKJAg");
	var mask_graphics_488 = new cjs.Graphics().p("ApAA4IMdpOIFkHeIseJPg");
	var mask_graphics_489 = new cjs.Graphics().p("ApKBAIMypeIFjHfIsyJeg");
	var mask_graphics_490 = new cjs.Graphics().p("ApUBHINGpsIFjHeItHJtg");
	var mask_graphics_491 = new cjs.Graphics().p("ApeBPINap8IFkHfItcJ8g");
	var mask_graphics_492 = new cjs.Graphics().p("AppBWINvqKIFkHeItwKLg");
	var mask_graphics_493 = new cjs.Graphics().p("ApzBeIODqaIFkHfIuEKag");
	var mask_graphics_494 = new cjs.Graphics().p("Ap9BlIOXqpIFkHfIuYKpg");
	var mask_graphics_495 = new cjs.Graphics().p("AqHBtIOsq4IFjHeIusK5g");
	var mask_graphics_496 = new cjs.Graphics().p("AqRB0IPArGIFjHeIvALHg");
	var mask_graphics_497 = new cjs.Graphics().p("AqbB8IPUrWIFjHfIvVLWg");
	var mask_graphics_498 = new cjs.Graphics().p("AqlCEIPormIFjHfIvpLmg");
	var mask_graphics_499 = new cjs.Graphics().p("AqwCMIP9r2IFkHgIv+L1g");
	var mask_graphics_500 = new cjs.Graphics().p("Aq6CTIQRsEIFkHfIwSMEg");
	var mask_graphics_501 = new cjs.Graphics().p("ArECbIQlsUIFkHfIwmMUg");
	var mask_graphics_502 = new cjs.Graphics().p("ArOCiIQ6siIFjHfIw6Mig");
	var mask_graphics_503 = new cjs.Graphics().p("ArYCqIROsxIFjHfIxOMxg");
	var mask_graphics_504 = new cjs.Graphics().p("AriCxIRitAIFjHfIxjNAg");
	var mask_graphics_505 = new cjs.Graphics().p("ArsC5IR2tQIFjHfIx3NQg");
	var mask_graphics_506 = new cjs.Graphics().p("Ar3DAISLteIFkHeIyMNfg");
	var mask_graphics_507 = new cjs.Graphics().p("AsBDIISgtuIFjHfIygNug");
	var mask_graphics_508 = new cjs.Graphics().p("AsLDPISzt8IFkHfIy0N8g");
	var mask_graphics_509 = new cjs.Graphics().p("AsVDXITIuMIFjHfIzIOMg");
	var mask_graphics_510 = new cjs.Graphics().p("AsgDeITduaIFkHfIzdOag");
	var mask_graphics_511 = new cjs.Graphics().p("AsqDmITyuqIFiHfIzwOqg");
	var mask_graphics_512 = new cjs.Graphics().p("As0DtIUGu4IFjHfI0GO4g");
	var mask_graphics_513 = new cjs.Graphics().p("As+D1IUavIIFjHfI0aPIg");
	var mask_graphics_514 = new cjs.Graphics().p("AtID8IUuvWIFjHeI0uPXg");
	var mask_graphics_515 = new cjs.Graphics().p("AtSEEIVCvmIFjHfI1CPmg");
	var mask_graphics_516 = new cjs.Graphics().p("AtcELIVWv1IFjHfI1WP1g");
	var mask_graphics_517 = new cjs.Graphics().p("AtnETIVrwEIFkHfI1rQEg");
	var mask_graphics_518 = new cjs.Graphics().p("AtxEbIWAwUIFiHfI1+QUg");
	var mask_graphics_519 = new cjs.Graphics().p("At7EiIWUwiIFjHfI2UQig");
	var mask_graphics_520 = new cjs.Graphics().p("AuFEqIWowyIFjHfI2oQyg");
	var mask_graphics_521 = new cjs.Graphics().p("AGvY0IW+xBIFjHfI29RBg");
	var mask_graphics_522 = new cjs.Graphics().p("AuoFEIXuxlIFiHfI3tRlg");
	var mask_graphics_523 = new cjs.Graphics().p("AvAFVIYeyIIFjHfI4eSIg");
	var mask_graphics_524 = new cjs.Graphics().p("AFlY1IZQyuIFjHfI5QSug");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(448).to({graphics:mask_graphics_448,x:291,y:385.7}).wait(1).to({graphics:mask_graphics_449,x:291.8,y:385.1}).wait(1).to({graphics:mask_graphics_450,x:292.6,y:384.5}).wait(1).to({graphics:mask_graphics_451,x:293.4,y:383.9}).wait(1).to({graphics:mask_graphics_452,x:294.3,y:383.3}).wait(1).to({graphics:mask_graphics_453,x:295.1,y:382.7}).wait(1).to({graphics:mask_graphics_454,x:295.9,y:382.1}).wait(1).to({graphics:mask_graphics_455,x:296.7,y:381.5}).wait(1).to({graphics:mask_graphics_456,x:297.5,y:380.9}).wait(1).to({graphics:mask_graphics_457,x:298.4,y:380.4}).wait(1).to({graphics:mask_graphics_458,x:299.2,y:379.8}).wait(1).to({graphics:mask_graphics_459,x:300,y:379.2}).wait(1).to({graphics:mask_graphics_460,x:300.8,y:378.6}).wait(1).to({graphics:mask_graphics_461,x:301.7,y:378}).wait(1).to({graphics:mask_graphics_462,x:302.5,y:377.4}).wait(1).to({graphics:mask_graphics_463,x:303.3,y:376.8}).wait(1).to({graphics:mask_graphics_464,x:304.1,y:376.2}).wait(1).to({graphics:mask_graphics_465,x:305,y:375.6}).wait(1).to({graphics:mask_graphics_466,x:305.8,y:375}).wait(1).to({graphics:mask_graphics_467,x:306.6,y:374.4}).wait(1).to({graphics:mask_graphics_468,x:307.4,y:373.8}).wait(1).to({graphics:mask_graphics_469,x:308.2,y:373.2}).wait(1).to({graphics:mask_graphics_470,x:309.1,y:372.7}).wait(1).to({graphics:mask_graphics_471,x:309.9,y:372.1}).wait(1).to({graphics:mask_graphics_472,x:310.7,y:371.5}).wait(1).to({graphics:mask_graphics_473,x:311.5,y:370.9}).wait(1).to({graphics:mask_graphics_474,x:312.3,y:370.3}).wait(1).to({graphics:mask_graphics_475,x:313.4,y:369.5}).wait(1).to({graphics:mask_graphics_476,x:314.4,y:368.8}).wait(1).to({graphics:mask_graphics_477,x:315.4,y:368}).wait(1).to({graphics:mask_graphics_478,x:316.4,y:367.3}).wait(1).to({graphics:mask_graphics_479,x:317.4,y:366.5}).wait(1).to({graphics:mask_graphics_480,x:318.4,y:365.8}).wait(1).to({graphics:mask_graphics_481,x:319.5,y:365}).wait(1).to({graphics:mask_graphics_482,x:320.5,y:364.3}).wait(1).to({graphics:mask_graphics_483,x:321.5,y:363.5}).wait(1).to({graphics:mask_graphics_484,x:322.5,y:362.8}).wait(1).to({graphics:mask_graphics_485,x:323.5,y:362}).wait(1).to({graphics:mask_graphics_486,x:324.5,y:361.3}).wait(1).to({graphics:mask_graphics_487,x:325.5,y:360.5}).wait(1).to({graphics:mask_graphics_488,x:326.5,y:359.8}).wait(1).to({graphics:mask_graphics_489,x:327.5,y:359}).wait(1).to({graphics:mask_graphics_490,x:328.6,y:358.3}).wait(1).to({graphics:mask_graphics_491,x:329.6,y:357.5}).wait(1).to({graphics:mask_graphics_492,x:330.6,y:356.8}).wait(1).to({graphics:mask_graphics_493,x:331.6,y:356}).wait(1).to({graphics:mask_graphics_494,x:332.6,y:355.3}).wait(1).to({graphics:mask_graphics_495,x:333.6,y:354.5}).wait(1).to({graphics:mask_graphics_496,x:334.6,y:353.8}).wait(1).to({graphics:mask_graphics_497,x:335.7,y:353}).wait(1).to({graphics:mask_graphics_498,x:336.7,y:352.3}).wait(1).to({graphics:mask_graphics_499,x:337.7,y:351.5}).wait(1).to({graphics:mask_graphics_500,x:338.7,y:350.8}).wait(1).to({graphics:mask_graphics_501,x:339.7,y:350}).wait(1).to({graphics:mask_graphics_502,x:340.7,y:349.3}).wait(1).to({graphics:mask_graphics_503,x:341.7,y:348.5}).wait(1).to({graphics:mask_graphics_504,x:342.8,y:347.8}).wait(1).to({graphics:mask_graphics_505,x:343.8,y:347}).wait(1).to({graphics:mask_graphics_506,x:344.8,y:346.3}).wait(1).to({graphics:mask_graphics_507,x:345.8,y:345.5}).wait(1).to({graphics:mask_graphics_508,x:346.8,y:344.7}).wait(1).to({graphics:mask_graphics_509,x:347.8,y:344}).wait(1).to({graphics:mask_graphics_510,x:348.8,y:343.2}).wait(1).to({graphics:mask_graphics_511,x:349.8,y:342.5}).wait(1).to({graphics:mask_graphics_512,x:350.8,y:341.7}).wait(1).to({graphics:mask_graphics_513,x:351.9,y:341}).wait(1).to({graphics:mask_graphics_514,x:352.9,y:340.3}).wait(1).to({graphics:mask_graphics_515,x:353.9,y:339.5}).wait(1).to({graphics:mask_graphics_516,x:354.9,y:338.8}).wait(1).to({graphics:mask_graphics_517,x:355.9,y:338}).wait(1).to({graphics:mask_graphics_518,x:356.9,y:337.2}).wait(1).to({graphics:mask_graphics_519,x:357.9,y:336.5}).wait(1).to({graphics:mask_graphics_520,x:358.9,y:335.7}).wait(1).to({graphics:mask_graphics_521,x:225.6,y:206.7}).wait(1).to({graphics:mask_graphics_522,x:362.3,y:333.2}).wait(1).to({graphics:mask_graphics_523,x:364.7,y:331.4}).wait(1).to({graphics:mask_graphics_524,x:232.8,y:206.8}).wait(81));

	// Layer 9
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(20,1,1).p("ApNpNQrHTlIqhPQDtghDZhZQAZgKAZgLQEIh1DrjJQHBl9Eck/");
	this.shape_1.setTransform(338,332.7);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(448).to({_off:false},0).wait(157));

	// Layer 11 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_430 = new cjs.Graphics().p("ARTXHICKAAIAAJUIiJAAg");
	var mask_1_graphics_431 = new cjs.Graphics().p("AhREqIgBpTICkAAIABJTg");
	var mask_1_graphics_432 = new cjs.Graphics().p("AhfEqIgBpTIDAAAIABJTg");
	var mask_1_graphics_433 = new cjs.Graphics().p("AhtEqIgBpTIDcAAIABJTg");
	var mask_1_graphics_434 = new cjs.Graphics().p("Ah7EqIgBpTID4AAIABJTg");
	var mask_1_graphics_435 = new cjs.Graphics().p("AiKkpIEUgBIABJUIkUABg");
	var mask_1_graphics_436 = new cjs.Graphics().p("AiYkpIEvgBIABJUIkvABg");
	var mask_1_graphics_437 = new cjs.Graphics().p("AimkpIFLgBIABJUIlLABg");
	var mask_1_graphics_438 = new cjs.Graphics().p("AizkpIFmgBIABJUIlmABg");
	var mask_1_graphics_439 = new cjs.Graphics().p("AjBkpIGCgBIABJUImCABg");
	var mask_1_graphics_440 = new cjs.Graphics().p("AjPkpIGegBIABJUImeABg");
	var mask_1_graphics_441 = new cjs.Graphics().p("AjdkpIG6gBIABJUIm6ABg");
	var mask_1_graphics_442 = new cjs.Graphics().p("AjrkpIHWgBIABJUInWABg");
	var mask_1_graphics_443 = new cjs.Graphics().p("Aj5kpIHygBIABJUInyABg");
	var mask_1_graphics_444 = new cjs.Graphics().p("AkGkpIIMgBIABJUIoMABg");
	var mask_1_graphics_445 = new cjs.Graphics().p("AkUkpIIogBIABJUIooABg");
	var mask_1_graphics_446 = new cjs.Graphics().p("AkikpIJEgBIABJUIpEABg");
	var mask_1_graphics_447 = new cjs.Graphics().p("AkwkpIJggBIABJUIpgABg");
	var mask_1_graphics_448 = new cjs.Graphics().p("ANZXHIJ9gBIABJUIp+ABg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(430).to({graphics:mask_1_graphics_430,x:124.5,y:207.5}).wait(1).to({graphics:mask_1_graphics_431,x:243.5,y:385.2}).wait(1).to({graphics:mask_1_graphics_432,x:244.9,y:385.2}).wait(1).to({graphics:mask_1_graphics_433,x:246.3,y:385.2}).wait(1).to({graphics:mask_1_graphics_434,x:247.7,y:385.2}).wait(1).to({graphics:mask_1_graphics_435,x:249.1,y:385.2}).wait(1).to({graphics:mask_1_graphics_436,x:250.5,y:385.2}).wait(1).to({graphics:mask_1_graphics_437,x:251.9,y:385.2}).wait(1).to({graphics:mask_1_graphics_438,x:253.2,y:385.2}).wait(1).to({graphics:mask_1_graphics_439,x:254.6,y:385.2}).wait(1).to({graphics:mask_1_graphics_440,x:256,y:385.2}).wait(1).to({graphics:mask_1_graphics_441,x:257.4,y:385.2}).wait(1).to({graphics:mask_1_graphics_442,x:258.8,y:385.2}).wait(1).to({graphics:mask_1_graphics_443,x:260.1,y:385.2}).wait(1).to({graphics:mask_1_graphics_444,x:261.5,y:385.2}).wait(1).to({graphics:mask_1_graphics_445,x:262.9,y:385.2}).wait(1).to({graphics:mask_1_graphics_446,x:264.3,y:385.2}).wait(1).to({graphics:mask_1_graphics_447,x:265.7,y:385.2}).wait(1).to({graphics:mask_1_graphics_448,x:149.5,y:207.5}).wait(157));

	// Layer 12
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(20,1,1).p("AoqpNQrHTlIqhPQEIglDwhqQEIh1DrjJQHBl9DWjv");
	this.shape_2.setTransform(334.5,332.7);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(430).to({_off:false},0).wait(175));

	// Layer 8 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_384 = new cjs.Graphics().p("AuCEEQExrLLPkiQLRkjLKExQLLEvEiLQMg2VAV6QkjrREwrJg");
	var mask_2_graphics_385 = new cjs.Graphics().p("AuGEOQEorOLMkrQLNkrLOEpQLOEmErLNMg2FAWiQkqrNEnrNg");
	var mask_2_graphics_386 = new cjs.Graphics().p("AuKEYQEfrRLJk0QLKkzLREgQLREeE0LJMg10AXLQkzrKEfrQg");
	var mask_2_graphics_387 = new cjs.Graphics().p("AuOEiQEXrULFk8QLGk8LVEYQLVEWE7LFMg1hAXzQk8rGEWrUg");
	var mask_2_graphics_388 = new cjs.Graphics().p("AuREtQEPrYLBlEQLClELYEPQLYENFELCMg1QAYbQlErCEOrXg");
	var mask_2_graphics_389 = new cjs.Graphics().p("AuUE4QEGrbK+lNQK+lMLbEHQLbEEFMK+Mg09AZDQlMq+EFrag");
	var mask_2_graphics_390 = new cjs.Graphics().p("AuWFCQD9reK6lUQK6lULeD+QLeD8FVK5Mg0qAZrQlVq7D9rdg");
	var mask_2_graphics_391 = new cjs.Graphics().p("AuYFNQD0rhK2lcQK2ldLhD2QLhDzFdK1Mg0XAaTQlcq3D0rgg");
	var mask_2_graphics_392 = new cjs.Graphics().p("AuaFZQDsrkKxllQKyllLkDtQLkDrFlKxMg0DAa6QlkqzDrrig");
	var mask_2_graphics_393 = new cjs.Graphics().p("AubFkQDjrnKultQKtlsLmDkQLnDiFtKtMgzuAbgQltquDjrlg");
	var mask_2_graphics_394 = new cjs.Graphics().p("AudFvQDbrpKql1QKol1LpDcQLqDZF0KqMgzZAcGQl0qqDZrog");
	var mask_2_graphics_395 = new cjs.Graphics().p("AudF7QDSrsKll9QKkl9LrDTQLsDQF9KmMgzEActQl8qmDRrqg");
	var mask_2_graphics_396 = new cjs.Graphics().p("AueGGQDJruKhmEQKgmFLuDKQLuDHGFKhMgyuAdTQmFqhDIrtg");
	var mask_2_graphics_397 = new cjs.Graphics().p("AudGSQDArwKcmNQKbmMLwDAQLxC/GMKdMgyXAd5QmNqdDArvg");
	var mask_2_graphics_398 = new cjs.Graphics().p("AudGeQC3rzKYmUQKWmULyC4QLzC2GVKXMgyBAefQmVqYC3rxg");
	var mask_2_graphics_399 = new cjs.Graphics().p("AucGqQCur1KTmcQKRmcL1CvQL1CtGcKTMgxqAfEQmcqSCur0g");
	var mask_2_graphics_400 = new cjs.Graphics().p("AubG2QClr2KOmkQKNmkL2CmQL3CkGkKOMgxSAfqQmkqOClr2g");
	var mask_2_graphics_401 = new cjs.Graphics().p("AuaHCQCdr4KJmsQKImrL4CdQL4CcGsKIMgw6AgPQmsqJCcr4g");
	var mask_2_graphics_402 = new cjs.Graphics().p("AuYHPQCUr6KEm0QKCmzL6CVQL7CSGzKEMgwiAgzQmzqECTr5g");
	var mask_2_graphics_403 = new cjs.Graphics().p("AuWHbQCLr8J/m6QJ9m7L8CMQL8CJG7J/MgwJAhXQm7p/CKr7g");
	var mask_2_graphics_404 = new cjs.Graphics().p("AuTHoQCCr9J5nDQJ4nCL+CDQL9CAHCJ6MgvvAh7QnCp5CBr9g");
	var mask_2_graphics_405 = new cjs.Graphics().p("AuQH1QB5r/J0nKQJznJL+B5QMAB4HJJ0MgvWAifQnJp0B4r+g");
	var mask_2_graphics_406 = new cjs.Graphics().p("AuNICQBwsBJunQQJunRMABwQMBBvHRJuMgu8AjDQnRpvBvr/g");
	var mask_2_graphics_407 = new cjs.Graphics().p("AuJIPQBmsCJqnYQJonYMBBnQMCBmHYJpMguhAjlQnYppBmsAg");
	var mask_2_graphics_408 = new cjs.Graphics().p("AuFIcQBdsDJknfQJingMDBfQMDBcHfJkMguGAkIQnfpjBdsCg");
	var mask_2_graphics_409 = new cjs.Graphics().p("AuBIpQBVsEJenmQJcnnMEBWQMEBTHmJeMgtrAkrQnmpeBUsDg");
	var mask_2_graphics_410 = new cjs.Graphics().p("At8I2QBLsEJYnuQJYntMEBMQMFBKHuJYMgtQAlNQntpYBLsEg");
	var mask_2_graphics_411 = new cjs.Graphics().p("At3JEQBCsGJTn0QJRn1MFBDQMGBCH1JSMgs0AlvQn0pTBCsEg");
	var mask_2_graphics_412 = new cjs.Graphics().p("AtyJRQA6sGJMn7QJLn8MHA6QMGA4H7JNMgsWAmQQn8pMA5sGg");
	var mask_2_graphics_413 = new cjs.Graphics().p("AtsJfQAwsHJHoCQJFoDMHAxQMHAvICJHMgr5AmxQoDpGAwsGg");
	var mask_2_graphics_414 = new cjs.Graphics().p("AtmJtQAnsIJBoJQI/oJMHAoQMIAmIJJAMgrcAnSQoKpAAnsGg");
	var mask_2_graphics_415 = new cjs.Graphics().p("AtfJ7QAesII6oQQI5oQMIAfQMIAdIQI6Mgq/AnyQoQo6AesGg");
	var mask_2_graphics_416 = new cjs.Graphics().p("AtYKJQAUsJI0oWQIzoXMIAWQMIAUIXI0MgqgAoSQoXozAVsHg");
	var mask_2_graphics_417 = new cjs.Graphics().p("AtRKXQAMsJItodQItodMIANQMIAKIdIuMgqCAoyQodotAMsHg");
	var mask_2_graphics_418 = new cjs.Graphics().p("AtKKlQADsJInojQImokMJAEQMIABIkInMgpjApSQokonACsHg");
	var mask_2_graphics_419 = new cjs.Graphics().p("AtCKzQgGsJIgoqQIgoqMJgFQMIgIIqIhMgpEApxQoqohgHsHg");
	var mask_2_graphics_420 = new cjs.Graphics().p("As5LBQgQsIIaowQIZoxMIgPQMJgQIwIaMgokAqQQoxobgPsHg");
	var mask_2_graphics_421 = new cjs.Graphics().p("AsxLQQgZsIIUo3QISo3MJgYQMHgaI3IUMgoEAquQo3oTgZsHg");
	var mask_2_graphics_422 = new cjs.Graphics().p("AsoLeQgisIINo9QIMo8MIghQMHgjI9INMgnkArMQo9oNgisHg");
	var mask_2_graphics_423 = new cjs.Graphics().p("AsfLtQgrsIIGpDQIGpDMHgqQMHgsJDIGMgnEArqQpDoGgrsGg");
	var mask_2_graphics_424 = new cjs.Graphics().p("AsVL7Qg0sGH/pJQH+pKMHgzQMHg1JJH/MgmjAsHQpJn/g0sGg");
	var mask_2_graphics_425 = new cjs.Graphics().p("AsLMKQg9sHH4pOQH4pPMGg8QMFg/JPH5MgmBAsjQpPn4g9sFg");
	var mask_2_graphics_426 = new cjs.Graphics().p("AsBMZQhGsGHxpUQHxpVMFhFQMFhIJVHyMglfAs/QpVnxhHsEg");
	var mask_2_graphics_427 = new cjs.Graphics().p("Ar2MoQhPsGHqpZQHppbMFhOQMEhRJbHrMgk+AtbQpbnqhPsDg");
	var mask_2_graphics_428 = new cjs.Graphics().p("ArrM3QhZsFHkpfQHiphMDhXQMEhZJgHjMgkbAt3QphnjhYsCg");
	var mask_2_graphics_429 = new cjs.Graphics().p("ArgNGQhhsEHcplQHbpmMChgQMChjJmHcMgj4AuTQpmnchisBg");
	var mask_2_graphics_430 = new cjs.Graphics().p("ArUNVQhrsCHVprQHUprMBhqQMBhrJsHUMgjXAuuQprnVhqsAg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(384).to({graphics:mask_2_graphics_384,x:256.6,y:169.4}).wait(1).to({graphics:mask_2_graphics_385,x:256.2,y:170.4}).wait(1).to({graphics:mask_2_graphics_386,x:255.8,y:171.4}).wait(1).to({graphics:mask_2_graphics_387,x:255.3,y:172.4}).wait(1).to({graphics:mask_2_graphics_388,x:254.9,y:173.4}).wait(1).to({graphics:mask_2_graphics_389,x:254.4,y:174.4}).wait(1).to({graphics:mask_2_graphics_390,x:254,y:175.4}).wait(1).to({graphics:mask_2_graphics_391,x:253.5,y:176.4}).wait(1).to({graphics:mask_2_graphics_392,x:253,y:177.4}).wait(1).to({graphics:mask_2_graphics_393,x:252.5,y:178.3}).wait(1).to({graphics:mask_2_graphics_394,x:251.9,y:179.3}).wait(1).to({graphics:mask_2_graphics_395,x:251.4,y:180.3}).wait(1).to({graphics:mask_2_graphics_396,x:250.9,y:181.2}).wait(1).to({graphics:mask_2_graphics_397,x:250.3,y:182.2}).wait(1).to({graphics:mask_2_graphics_398,x:249.8,y:183.1}).wait(1).to({graphics:mask_2_graphics_399,x:249.2,y:184}).wait(1).to({graphics:mask_2_graphics_400,x:248.6,y:185}).wait(1).to({graphics:mask_2_graphics_401,x:248,y:185.9}).wait(1).to({graphics:mask_2_graphics_402,x:247.4,y:186.8}).wait(1).to({graphics:mask_2_graphics_403,x:246.8,y:187.7}).wait(1).to({graphics:mask_2_graphics_404,x:246.1,y:188.6}).wait(1).to({graphics:mask_2_graphics_405,x:245.5,y:189.5}).wait(1).to({graphics:mask_2_graphics_406,x:244.9,y:190.4}).wait(1).to({graphics:mask_2_graphics_407,x:244.2,y:191.2}).wait(1).to({graphics:mask_2_graphics_408,x:243.5,y:192.1}).wait(1).to({graphics:mask_2_graphics_409,x:242.8,y:193}).wait(1).to({graphics:mask_2_graphics_410,x:242.2,y:193.8}).wait(1).to({graphics:mask_2_graphics_411,x:241.5,y:194.7}).wait(1).to({graphics:mask_2_graphics_412,x:240.7,y:195.5}).wait(1).to({graphics:mask_2_graphics_413,x:240,y:196.3}).wait(1).to({graphics:mask_2_graphics_414,x:239.3,y:197.1}).wait(1).to({graphics:mask_2_graphics_415,x:238.6,y:197.9}).wait(1).to({graphics:mask_2_graphics_416,x:237.8,y:198.7}).wait(1).to({graphics:mask_2_graphics_417,x:237,y:199.5}).wait(1).to({graphics:mask_2_graphics_418,x:236.3,y:200.3}).wait(1).to({graphics:mask_2_graphics_419,x:235.5,y:201.1}).wait(1).to({graphics:mask_2_graphics_420,x:234.7,y:201.9}).wait(1).to({graphics:mask_2_graphics_421,x:233.9,y:202.6}).wait(1).to({graphics:mask_2_graphics_422,x:233.1,y:203.4}).wait(1).to({graphics:mask_2_graphics_423,x:232.3,y:204.1}).wait(1).to({graphics:mask_2_graphics_424,x:231.5,y:204.8}).wait(1).to({graphics:mask_2_graphics_425,x:230.6,y:205.5}).wait(1).to({graphics:mask_2_graphics_426,x:229.8,y:206.2}).wait(1).to({graphics:mask_2_graphics_427,x:229,y:206.9}).wait(1).to({graphics:mask_2_graphics_428,x:228.1,y:207.6}).wait(1).to({graphics:mask_2_graphics_429,x:227.2,y:208.3}).wait(1).to({graphics:mask_2_graphics_430,x:226.4,y:209}).wait(175));

	// Layer 4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(20,1,1).p("AoqpNQrHTlIqhPQEIglDwhqQEIh1DrjJQHBl9DWjv");
	this.shape_3.setTransform(334.5,332.7);
	this.shape_3._off = true;

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(384).to({_off:false},0).wait(221));

	// Layer 14
	this.instance_2 = new lib.ar2("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(196.2,312.2,1,1,11.2,0,0,0.8,-0.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(596));

	// Layer 7 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_174 = new cjs.Graphics().p("AFmaXICzjaIHNF6IizDag");
	var mask_3_graphics_175 = new cjs.Graphics().p("AlFhIIDAjpIHLF6Ii/Dpg");
	var mask_3_graphics_176 = new cjs.Graphics().p("AlMhAIDNj5IHMF6IjND5g");
	var mask_3_graphics_177 = new cjs.Graphics().p("AlSg4IDZkIIHMF5IjZEIg");
	var mask_3_graphics_178 = new cjs.Graphics().p("AlYgxIDlkXIHMF6IjlEXg");
	var mask_3_graphics_179 = new cjs.Graphics().p("AlfgpIDzknIHMF6IjzEng");
	var mask_3_graphics_180 = new cjs.Graphics().p("AllgiID/k1IHMF5Ij/E2g");
	var mask_3_graphics_181 = new cjs.Graphics().p("AlrgaIELlFIHMF6IkLFFg");
	var mask_3_graphics_182 = new cjs.Graphics().p("AlxgSIEYlUIHLF5IkXFUg");
	var mask_3_graphics_183 = new cjs.Graphics().p("Al4gLIElljIHMF5IklFkg");
	var mask_3_graphics_184 = new cjs.Graphics().p("Al+gDIExlzIHMF6IkxFzg");
	var mask_3_graphics_185 = new cjs.Graphics().p("AmEAEIE9mBIHMF6Ik9GBg");
	var mask_3_graphics_186 = new cjs.Graphics().p("AmKALIFJmQIHNF7IlKGQg");
	var mask_3_graphics_187 = new cjs.Graphics().p("AmRATIFXmfIHMF6IlXGgg");
	var mask_3_graphics_188 = new cjs.Graphics().p("AmXAbIFjmvIHMF6IljGvg");
	var mask_3_graphics_189 = new cjs.Graphics().p("AmdAiIFwm+IHMF7IlwG+g");
	var mask_3_graphics_190 = new cjs.Graphics().p("AmkAqIF9nNIHMF6Il9HOg");
	var mask_3_graphics_191 = new cjs.Graphics().p("AmqAyIGJndIHMF6ImJHdg");
	var mask_3_graphics_192 = new cjs.Graphics().p("AmwA5IGVnsIHMF6ImVHtg");
	var mask_3_graphics_193 = new cjs.Graphics().p("Am2BBIGhn8IHMF7ImhH8g");
	var mask_3_graphics_194 = new cjs.Graphics().p("Am9BJIGvoLIHMF6ImvILg");
	var mask_3_graphics_195 = new cjs.Graphics().p("AnDBQIG7oaIHMF6Im7Ibg");
	var mask_3_graphics_196 = new cjs.Graphics().p("AnJBYIHHopIHMF6InHIqg");
	var mask_3_graphics_197 = new cjs.Graphics().p("AnPBgIHTo5IHNF6InTI5g");
	var mask_3_graphics_198 = new cjs.Graphics().p("AnWBnIHgpIIHNF7IngJIg");
	var mask_3_graphics_199 = new cjs.Graphics().p("AncBvIHspXIHNF6InsJYg");
	var mask_3_graphics_200 = new cjs.Graphics().p("AniB2IH5pmIHMF7In4Jmg");
	var mask_3_graphics_201 = new cjs.Graphics().p("AnpB+IIGp2IHNF7IoGJ2g");
	var mask_3_graphics_202 = new cjs.Graphics().p("AnvCGIISqFIHNF6IoSKGg");
	var mask_3_graphics_203 = new cjs.Graphics().p("An1CNIIeqUIHNF7IoeKUg");
	var mask_3_graphics_204 = new cjs.Graphics().p("An7CVIIqqkIHOF7IorKkg");
	var mask_3_graphics_205 = new cjs.Graphics().p("AoCCdII4qzIHNF6Io4Kzg");
	var mask_3_graphics_206 = new cjs.Graphics().p("AoICkIJErCIHNF6IpELDg");
	var mask_3_graphics_207 = new cjs.Graphics().p("AoOCsIJRrSIHNF7IpRLSg");
	var mask_3_graphics_208 = new cjs.Graphics().p("AoVC0IJerhIHNF6IpeLhg");
	var mask_3_graphics_209 = new cjs.Graphics().p("AobC7IJqrwIHNF7IpqLwg");
	var mask_3_graphics_210 = new cjs.Graphics().p("AohDDIJ2sAIHNF7Ip2MAg");
	var mask_3_graphics_211 = new cjs.Graphics().p("AonDKIKCsOIHNF6IqCMPg");
	var mask_3_graphics_212 = new cjs.Graphics().p("AouDSIKQseIHNF7IqQMeg");
	var mask_3_graphics_213 = new cjs.Graphics().p("Ao0DaIKcstIHNF6IqcMug");
	var mask_3_graphics_214 = new cjs.Graphics().p("Ao6DhIKos8IHNF7IqoM8g");
	var mask_3_graphics_215 = new cjs.Graphics().p("ApADpIK1tMIHNF7Iq1NMg");
	var mask_3_graphics_216 = new cjs.Graphics().p("ApHDxILCtbIHNF6IrCNbg");
	var mask_3_graphics_217 = new cjs.Graphics().p("ApND4ILOtqIHNF7IrONqg");
	var mask_3_graphics_218 = new cjs.Graphics().p("ApTEAILbt5IHMF6IraN6g");
	var mask_3_graphics_219 = new cjs.Graphics().p("ApaEIILouJIHNF6IroOJg");
	var mask_3_graphics_220 = new cjs.Graphics().p("ApgEPIL0uYIHNF7Ir0OYg");
	var mask_3_graphics_221 = new cjs.Graphics().p("ApmEXIMAuoIHNF7IsAOog");
	var mask_3_graphics_222 = new cjs.Graphics().p("ApsEfIMNu3IHNF6IsNO3g");
	var mask_3_graphics_223 = new cjs.Graphics().p("ApzEmIMavGIHNF7IsaPGg");
	var mask_3_graphics_224 = new cjs.Graphics().p("Ap5EuIMmvWIHNF7IsmPWg");
	var mask_3_graphics_225 = new cjs.Graphics().p("Ap/E2IMyvlIHNF6IsyPlg");
	var mask_3_graphics_226 = new cjs.Graphics().p("AqGE+INAv1IHNF7ItAP0g");
	var mask_3_graphics_227 = new cjs.Graphics().p("AqMFFINMwDIHNF6ItMQDg");
	var mask_3_graphics_228 = new cjs.Graphics().p("AqSFNINYwTIHNF6ItYQTg");
	var mask_3_graphics_229 = new cjs.Graphics().p("AqYFUINkwiIHOF7ItlQig");
	var mask_3_graphics_230 = new cjs.Graphics().p("AqfFcINywxIHNF6ItyQxg");
	var mask_3_graphics_231 = new cjs.Graphics().p("AqlFkIN+xBIHNF6It+RBg");
	var mask_3_graphics_232 = new cjs.Graphics().p("AqrFrIOKxQIHNF7IuKRQg");
	var mask_3_graphics_233 = new cjs.Graphics().p("AqxFzIOXxfIHMF6IuWRfg");
	var mask_3_graphics_234 = new cjs.Graphics().p("Aq4F7IOkxvIHNF6IukRvg");
	var mask_3_graphics_235 = new cjs.Graphics().p("Aq+GCIOwx+IHNF7IuwR+g");
	var mask_3_graphics_236 = new cjs.Graphics().p("ArEGKIO8yNIHNF6Iu8SNg");
	var mask_3_graphics_237 = new cjs.Graphics().p("ArLGSIPKydIHNF6IvKSdg");
	var mask_3_graphics_238 = new cjs.Graphics().p("ArRGZIPWysIHNF7IvWSrg");
	var mask_3_graphics_239 = new cjs.Graphics().p("ArXGhIPiy7IHNF6IviS7g");
	var mask_3_graphics_240 = new cjs.Graphics().p("ArdGoIPvzKIHNF7IvvTKg");
	var mask_3_graphics_241 = new cjs.Graphics().p("ArkGwIP8zZIHNF6Iv8TZg");
	var mask_3_graphics_242 = new cjs.Graphics().p("ArqG4IQIzpIHNF6IwITpg");
	var mask_3_graphics_243 = new cjs.Graphics().p("ArxG/IQVz4IHOF7IwWT4g");
	var mask_3_graphics_244 = new cjs.Graphics().p("Ar3HHIQi0HIHNF6IwiUHg");
	var mask_3_graphics_245 = new cjs.Graphics().p("Ar9HPIQu0XIHNF7IwuUWg");
	var mask_3_graphics_246 = new cjs.Graphics().p("AsEHWIQ80mIHNF7Iw8Umg");
	var mask_3_graphics_247 = new cjs.Graphics().p("AsKHeIRI01IHNF6IxIU1g");
	var mask_3_graphics_248 = new cjs.Graphics().p("AsQHmIRU1FIHNF7IxUVEg");
	var mask_3_graphics_249 = new cjs.Graphics().p("AsWHtIRg1UIHNF7IxgVTg");
	var mask_3_graphics_250 = new cjs.Graphics().p("AsdH1IRt1jIHNF6IxtVjg");
	var mask_3_graphics_251 = new cjs.Graphics().p("AsjH9IR61zIHNF7Ix6Vyg");
	var mask_3_graphics_252 = new cjs.Graphics().p("AspIEISG2CIHNF7IyGWBg");
	var mask_3_graphics_253 = new cjs.Graphics().p("AsvIMISS2RIHNF6IySWRg");
	var mask_3_graphics_254 = new cjs.Graphics().p("As2ITISg2gIHNF7IygWgg");
	var mask_3_graphics_255 = new cjs.Graphics().p("As8IbISs2wIHNF7IysWvg");
	var mask_3_graphics_256 = new cjs.Graphics().p("AtCIjIS42/IHNF6Iy4W/g");
	var mask_3_graphics_257 = new cjs.Graphics().p("AtJIqITG3OIHMF7IzFXOg");
	var mask_3_graphics_258 = new cjs.Graphics().p("AtPIyITS3dIHNF6IzSXeg");
	var mask_3_graphics_259 = new cjs.Graphics().p("AtVI6ITe3tIHNF6IzeXtg");
	var mask_3_graphics_260 = new cjs.Graphics().p("AtbJBITq38IHNF7IzqX8g");
	var mask_3_graphics_261 = new cjs.Graphics().p("AtiJJIT34LIHOF6Iz4YMg");
	var mask_3_graphics_262 = new cjs.Graphics().p("AtoJRIUE4bIHNF6I0EYbg");
	var mask_3_graphics_263 = new cjs.Graphics().p("AtuJYIUQ4qIHNF7I0QYqg");
	var mask_3_graphics_264 = new cjs.Graphics().p("At1JgIUe46IHNF7I0eY6g");
	var mask_3_graphics_265 = new cjs.Graphics().p("At7JnIUq5IIHNF6I0qZJg");
	var mask_3_graphics_266 = new cjs.Graphics().p("AuBJvIU25YIHNF7I02ZYg");
	var mask_3_graphics_267 = new cjs.Graphics().p("AuHJ3IVC5nIHNF6I1CZng");
	var mask_3_graphics_268 = new cjs.Graphics().p("AuOJ+IVP52IHNF6I1PZ3g");
	var mask_3_graphics_269 = new cjs.Graphics().p("AuUKGIVc6GIHNF7I1caGg");
	var mask_3_graphics_270 = new cjs.Graphics().p("AuaKOIVo6VIHNF6I1oaVg");
	var mask_3_graphics_271 = new cjs.Graphics().p("AugKVIV06kIHNF6I10alg");
	var mask_3_graphics_272 = new cjs.Graphics().p("AunKdIWC6zIHMF6I2Ba0g");
	var mask_3_graphics_273 = new cjs.Graphics().p("AutKlIWO7DIHNF6I2ObDg");
	var mask_3_graphics_274 = new cjs.Graphics().p("AuzKsIWa7SIHNF7I2abSg");
	var mask_3_graphics_275 = new cjs.Graphics().p("Au6K0IWo7hIHMF6I2nbig");
	var mask_3_graphics_276 = new cjs.Graphics().p("AvAK7IW07wIHNF7I20bwg");
	var mask_3_graphics_277 = new cjs.Graphics().p("AvGLDIXA8AIHNF7I3AcAg");
	var mask_3_graphics_278 = new cjs.Graphics().p("AvMLLIXM8PIHNF6I3McPg");
	var mask_3_graphics_279 = new cjs.Graphics().p("AvTLSIXa8eIHNF7I3aceg");
	var mask_3_graphics_280 = new cjs.Graphics().p("AvZLaIXm8uIHNF7I3mcug");
	var mask_3_graphics_281 = new cjs.Graphics().p("AvfLiIXy89IHNF6I3yc9g");
	var mask_3_graphics_282 = new cjs.Graphics().p("AvlLpIX+9MIHNF6I3+dNg");
	var mask_3_graphics_283 = new cjs.Graphics().p("AvsLxIYM9cIHNF7I4Mdcg");
	var mask_3_graphics_284 = new cjs.Graphics().p("AvyL5IYY9rIHNF6I4Ydrg");
	var mask_3_graphics_285 = new cjs.Graphics().p("Av4MAIYk96IHNF7I4kd6g");
	var mask_3_graphics_286 = new cjs.Graphics().p("Av/MIIYx+KIHOF7I4yeKg");
	var mask_3_graphics_287 = new cjs.Graphics().p("AwFMQIY++ZIHNF6I4+eZg");
	var mask_3_graphics_288 = new cjs.Graphics().p("AwLMXIZK+oIHNF7I5Keog");
	var mask_3_graphics_289 = new cjs.Graphics().p("AwRMfIZW+4IHNF7I5We4g");
	var mask_3_graphics_290 = new cjs.Graphics().p("AwYMnIZk/HIHMF6I5jfHg");
	var mask_3_graphics_291 = new cjs.Graphics().p("AweMvIZw/XIHNF7I5wfWg");
	var mask_3_graphics_292 = new cjs.Graphics().p("AwkM2IZ8/mIHNF7I58flg");
	var mask_3_graphics_293 = new cjs.Graphics().p("AwrM+IaJ/1IHNF6I6Jf1g");
	var mask_3_graphics_294 = new cjs.Graphics().p("AwxNFMAaWggEIHNF7MgaWAgEg");
	var mask_3_graphics_295 = new cjs.Graphics().p("Aw3NNMAaiggUIHNF7MgaiAgTg");
	var mask_3_graphics_296 = new cjs.Graphics().p("Aw9NVMAauggjIHNF6MgauAgjg");
	var mask_3_graphics_297 = new cjs.Graphics().p("AxENcMAa8ggyIHNF7Mga8Agyg");
	var mask_3_graphics_298 = new cjs.Graphics().p("AxKNkMAbIghCIHNF7MgbIAhBg");
	var mask_3_graphics_299 = new cjs.Graphics().p("AxQNsMAbUghRIHNF6MgbUAhRg");
	var mask_3_graphics_300 = new cjs.Graphics().p("AxWNzMAbgghgIHNF7MgbgAhgg");
	var mask_3_graphics_301 = new cjs.Graphics().p("AxdN7MAbtghvIHNF6MgbtAhvg");
	var mask_3_graphics_302 = new cjs.Graphics().p("AxjODMAb6gh/IHNF6Mgb6Ah/g");
	var mask_3_graphics_303 = new cjs.Graphics().p("AxpOKMAcGgiNIHNF6MgcGAiNg");
	var mask_3_graphics_304 = new cjs.Graphics().p("AxwOSMAcTgidIHOF6MgcUAidg");
	var mask_3_graphics_305 = new cjs.Graphics().p("Ax2OZMAcggisIHNF7MgcgAisg");
	var mask_3_graphics_306 = new cjs.Graphics().p("AnWaYMAcsgi8IHNF7MgctAi7g");
	var mask_3_graphics_307 = new cjs.Graphics().p("AyRO6MAdWgjtIHMF6MgdVAjtg");
	var mask_3_graphics_308 = new cjs.Graphics().p("AykPSMAd9gkeIHNF7Mgd9Akeg");
	var mask_3_graphics_309 = new cjs.Graphics().p("AoTaXMAemglPIHNF6MgemAlQg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(174).to({graphics:mask_3_graphics_174,x:99.8,y:206.5}).wait(1).to({graphics:mask_3_graphics_175,x:168.3,y:382.5}).wait(1).to({graphics:mask_3_graphics_176,x:168.9,y:381.8}).wait(1).to({graphics:mask_3_graphics_177,x:169.5,y:381}).wait(1).to({graphics:mask_3_graphics_178,x:170.1,y:380.2}).wait(1).to({graphics:mask_3_graphics_179,x:170.8,y:379.5}).wait(1).to({graphics:mask_3_graphics_180,x:171.4,y:378.7}).wait(1).to({graphics:mask_3_graphics_181,x:172,y:377.9}).wait(1).to({graphics:mask_3_graphics_182,x:172.7,y:377.2}).wait(1).to({graphics:mask_3_graphics_183,x:173.3,y:376.4}).wait(1).to({graphics:mask_3_graphics_184,x:173.9,y:375.6}).wait(1).to({graphics:mask_3_graphics_185,x:174.5,y:374.9}).wait(1).to({graphics:mask_3_graphics_186,x:175.2,y:374.1}).wait(1).to({graphics:mask_3_graphics_187,x:175.8,y:373.4}).wait(1).to({graphics:mask_3_graphics_188,x:176.4,y:372.6}).wait(1).to({graphics:mask_3_graphics_189,x:177.1,y:371.8}).wait(1).to({graphics:mask_3_graphics_190,x:177.7,y:371.1}).wait(1).to({graphics:mask_3_graphics_191,x:178.3,y:370.3}).wait(1).to({graphics:mask_3_graphics_192,x:178.9,y:369.6}).wait(1).to({graphics:mask_3_graphics_193,x:179.6,y:368.8}).wait(1).to({graphics:mask_3_graphics_194,x:180.2,y:368}).wait(1).to({graphics:mask_3_graphics_195,x:180.8,y:367.3}).wait(1).to({graphics:mask_3_graphics_196,x:181.4,y:366.5}).wait(1).to({graphics:mask_3_graphics_197,x:182.1,y:365.7}).wait(1).to({graphics:mask_3_graphics_198,x:182.7,y:365}).wait(1).to({graphics:mask_3_graphics_199,x:183.3,y:364.2}).wait(1).to({graphics:mask_3_graphics_200,x:184,y:363.5}).wait(1).to({graphics:mask_3_graphics_201,x:184.6,y:362.7}).wait(1).to({graphics:mask_3_graphics_202,x:185.2,y:361.9}).wait(1).to({graphics:mask_3_graphics_203,x:185.8,y:361.2}).wait(1).to({graphics:mask_3_graphics_204,x:186.5,y:360.4}).wait(1).to({graphics:mask_3_graphics_205,x:187.1,y:359.6}).wait(1).to({graphics:mask_3_graphics_206,x:187.7,y:358.9}).wait(1).to({graphics:mask_3_graphics_207,x:188.4,y:358.1}).wait(1).to({graphics:mask_3_graphics_208,x:189,y:357.3}).wait(1).to({graphics:mask_3_graphics_209,x:189.6,y:356.6}).wait(1).to({graphics:mask_3_graphics_210,x:190.2,y:355.8}).wait(1).to({graphics:mask_3_graphics_211,x:190.9,y:355.1}).wait(1).to({graphics:mask_3_graphics_212,x:191.5,y:354.3}).wait(1).to({graphics:mask_3_graphics_213,x:192.1,y:353.5}).wait(1).to({graphics:mask_3_graphics_214,x:192.7,y:352.8}).wait(1).to({graphics:mask_3_graphics_215,x:193.4,y:352}).wait(1).to({graphics:mask_3_graphics_216,x:194,y:351.2}).wait(1).to({graphics:mask_3_graphics_217,x:194.6,y:350.5}).wait(1).to({graphics:mask_3_graphics_218,x:195.3,y:349.7}).wait(1).to({graphics:mask_3_graphics_219,x:195.9,y:348.9}).wait(1).to({graphics:mask_3_graphics_220,x:196.5,y:348.2}).wait(1).to({graphics:mask_3_graphics_221,x:197.1,y:347.4}).wait(1).to({graphics:mask_3_graphics_222,x:197.8,y:346.6}).wait(1).to({graphics:mask_3_graphics_223,x:198.4,y:345.9}).wait(1).to({graphics:mask_3_graphics_224,x:199,y:345.1}).wait(1).to({graphics:mask_3_graphics_225,x:199.6,y:344.4}).wait(1).to({graphics:mask_3_graphics_226,x:200.3,y:343.6}).wait(1).to({graphics:mask_3_graphics_227,x:200.9,y:342.9}).wait(1).to({graphics:mask_3_graphics_228,x:201.5,y:342.1}).wait(1).to({graphics:mask_3_graphics_229,x:202.2,y:341.3}).wait(1).to({graphics:mask_3_graphics_230,x:202.8,y:340.6}).wait(1).to({graphics:mask_3_graphics_231,x:203.4,y:339.8}).wait(1).to({graphics:mask_3_graphics_232,x:204,y:339}).wait(1).to({graphics:mask_3_graphics_233,x:204.7,y:338.3}).wait(1).to({graphics:mask_3_graphics_234,x:205.3,y:337.5}).wait(1).to({graphics:mask_3_graphics_235,x:205.9,y:336.7}).wait(1).to({graphics:mask_3_graphics_236,x:206.6,y:336}).wait(1).to({graphics:mask_3_graphics_237,x:207.2,y:335.2}).wait(1).to({graphics:mask_3_graphics_238,x:207.8,y:334.5}).wait(1).to({graphics:mask_3_graphics_239,x:208.4,y:333.7}).wait(1).to({graphics:mask_3_graphics_240,x:209.1,y:332.9}).wait(1).to({graphics:mask_3_graphics_241,x:209.7,y:332.2}).wait(1).to({graphics:mask_3_graphics_242,x:210.3,y:331.4}).wait(1).to({graphics:mask_3_graphics_243,x:210.9,y:330.6}).wait(1).to({graphics:mask_3_graphics_244,x:211.5,y:329.9}).wait(1).to({graphics:mask_3_graphics_245,x:212.2,y:329.1}).wait(1).to({graphics:mask_3_graphics_246,x:212.8,y:328.3}).wait(1).to({graphics:mask_3_graphics_247,x:213.4,y:327.6}).wait(1).to({graphics:mask_3_graphics_248,x:214.1,y:326.8}).wait(1).to({graphics:mask_3_graphics_249,x:214.7,y:326.1}).wait(1).to({graphics:mask_3_graphics_250,x:215.3,y:325.3}).wait(1).to({graphics:mask_3_graphics_251,x:215.9,y:324.5}).wait(1).to({graphics:mask_3_graphics_252,x:216.6,y:323.8}).wait(1).to({graphics:mask_3_graphics_253,x:217.2,y:323}).wait(1).to({graphics:mask_3_graphics_254,x:217.8,y:322.2}).wait(1).to({graphics:mask_3_graphics_255,x:218.5,y:321.5}).wait(1).to({graphics:mask_3_graphics_256,x:219.1,y:320.7}).wait(1).to({graphics:mask_3_graphics_257,x:219.7,y:320}).wait(1).to({graphics:mask_3_graphics_258,x:220.3,y:319.2}).wait(1).to({graphics:mask_3_graphics_259,x:221,y:318.4}).wait(1).to({graphics:mask_3_graphics_260,x:221.6,y:317.7}).wait(1).to({graphics:mask_3_graphics_261,x:222.2,y:316.9}).wait(1).to({graphics:mask_3_graphics_262,x:222.8,y:316.1}).wait(1).to({graphics:mask_3_graphics_263,x:223.5,y:315.4}).wait(1).to({graphics:mask_3_graphics_264,x:224.1,y:314.6}).wait(1).to({graphics:mask_3_graphics_265,x:224.7,y:313.9}).wait(1).to({graphics:mask_3_graphics_266,x:225.4,y:313.1}).wait(1).to({graphics:mask_3_graphics_267,x:226,y:312.3}).wait(1).to({graphics:mask_3_graphics_268,x:226.6,y:311.6}).wait(1).to({graphics:mask_3_graphics_269,x:227.2,y:310.8}).wait(1).to({graphics:mask_3_graphics_270,x:227.9,y:310}).wait(1).to({graphics:mask_3_graphics_271,x:228.5,y:309.3}).wait(1).to({graphics:mask_3_graphics_272,x:229.1,y:308.5}).wait(1).to({graphics:mask_3_graphics_273,x:229.8,y:307.7}).wait(1).to({graphics:mask_3_graphics_274,x:230.4,y:307}).wait(1).to({graphics:mask_3_graphics_275,x:231,y:306.2}).wait(1).to({graphics:mask_3_graphics_276,x:231.6,y:305.5}).wait(1).to({graphics:mask_3_graphics_277,x:232.3,y:304.7}).wait(1).to({graphics:mask_3_graphics_278,x:232.9,y:303.9}).wait(1).to({graphics:mask_3_graphics_279,x:233.5,y:303.2}).wait(1).to({graphics:mask_3_graphics_280,x:234.1,y:302.4}).wait(1).to({graphics:mask_3_graphics_281,x:234.8,y:301.6}).wait(1).to({graphics:mask_3_graphics_282,x:235.4,y:300.9}).wait(1).to({graphics:mask_3_graphics_283,x:236,y:300.1}).wait(1).to({graphics:mask_3_graphics_284,x:236.7,y:299.3}).wait(1).to({graphics:mask_3_graphics_285,x:237.3,y:298.6}).wait(1).to({graphics:mask_3_graphics_286,x:237.9,y:297.8}).wait(1).to({graphics:mask_3_graphics_287,x:238.5,y:297}).wait(1).to({graphics:mask_3_graphics_288,x:239.2,y:296.3}).wait(1).to({graphics:mask_3_graphics_289,x:239.8,y:295.5}).wait(1).to({graphics:mask_3_graphics_290,x:240.4,y:294.8}).wait(1).to({graphics:mask_3_graphics_291,x:241,y:294}).wait(1).to({graphics:mask_3_graphics_292,x:241.7,y:293.3}).wait(1).to({graphics:mask_3_graphics_293,x:242.3,y:292.5}).wait(1).to({graphics:mask_3_graphics_294,x:242.9,y:291.7}).wait(1).to({graphics:mask_3_graphics_295,x:243.6,y:291}).wait(1).to({graphics:mask_3_graphics_296,x:244.2,y:290.2}).wait(1).to({graphics:mask_3_graphics_297,x:244.8,y:289.4}).wait(1).to({graphics:mask_3_graphics_298,x:245.4,y:288.7}).wait(1).to({graphics:mask_3_graphics_299,x:246.1,y:287.9}).wait(1).to({graphics:mask_3_graphics_300,x:246.7,y:287.1}).wait(1).to({graphics:mask_3_graphics_301,x:247.3,y:286.4}).wait(1).to({graphics:mask_3_graphics_302,x:248,y:285.6}).wait(1).to({graphics:mask_3_graphics_303,x:248.6,y:284.9}).wait(1).to({graphics:mask_3_graphics_304,x:249.2,y:284.1}).wait(1).to({graphics:mask_3_graphics_305,x:249.8,y:283.3}).wait(1).to({graphics:mask_3_graphics_306,x:182.7,y:206.6}).wait(1).to({graphics:mask_3_graphics_307,x:252.5,y:280}).wait(1).to({graphics:mask_3_graphics_308,x:254.6,y:277.6}).wait(1).to({graphics:mask_3_graphics_309,x:188.8,y:206.6}).wait(296));

	// Layer 6
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(20,1,1).p("ARxx8QkpJek4H6QjQFRkaEVQiLCJieB6QndFxjwhDQh3gggphq");
	this.shape_4.setTransform(227.3,275.9);
	this.shape_4._off = true;

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(174).to({_off:false},0).wait(431));

	// Layer 5 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_145 = new cjs.Graphics().p("EADwAg+IAApEIF8AAIAAJEg");
	var mask_4_graphics_146 = new cjs.Graphics().p("AjFEiIAApDIGLAAIAAJDg");
	var mask_4_graphics_147 = new cjs.Graphics().p("AjMEiIAApDIGZAAIAAJDg");
	var mask_4_graphics_148 = new cjs.Graphics().p("AjUEiIAApDIGpAAIAAJDg");
	var mask_4_graphics_149 = new cjs.Graphics().p("AjcEiIAApDIG5AAIAAJDg");
	var mask_4_graphics_150 = new cjs.Graphics().p("AjkEiIAApDIHJAAIAAJDg");
	var mask_4_graphics_151 = new cjs.Graphics().p("AjsEiIAApDIHZAAIAAJDg");
	var mask_4_graphics_152 = new cjs.Graphics().p("AjzEiIAApDIHnAAIAAJDg");
	var mask_4_graphics_153 = new cjs.Graphics().p("Aj7EiIAApDIH3AAIAAJDg");
	var mask_4_graphics_154 = new cjs.Graphics().p("AkDEiIAApDIIHAAIAAJDg");
	var mask_4_graphics_155 = new cjs.Graphics().p("AkLEiIAApDIIXAAIAAJDg");
	var mask_4_graphics_156 = new cjs.Graphics().p("AkSEiIAApDIImAAIAAJDg");
	var mask_4_graphics_157 = new cjs.Graphics().p("AkbEiIAApDII2AAIAAJDg");
	var mask_4_graphics_158 = new cjs.Graphics().p("AkiEiIAApDIJFAAIAAJDg");
	var mask_4_graphics_159 = new cjs.Graphics().p("AkqEiIAApDIJVAAIAAJDg");
	var mask_4_graphics_160 = new cjs.Graphics().p("AkxEiIAApDIJkAAIAAJDg");
	var mask_4_graphics_161 = new cjs.Graphics().p("Ak6EiIAApDIJ0AAIAAJDg");
	var mask_4_graphics_162 = new cjs.Graphics().p("AlBEiIAApDIKDAAIAAJDg");
	var mask_4_graphics_163 = new cjs.Graphics().p("AlJEiIAApDIKTAAIAAJDg");
	var mask_4_graphics_164 = new cjs.Graphics().p("EACPAg+IAApEIKjAAIAAJEg");
	var mask_4_graphics_165 = new cjs.Graphics().p("AlfEiIAApDIK+AAIAAJDg");
	var mask_4_graphics_166 = new cjs.Graphics().p("AlsEiIAApDILZAAIAAJDg");
	var mask_4_graphics_167 = new cjs.Graphics().p("Al6EiIAApDIL1AAIAAJDg");
	var mask_4_graphics_168 = new cjs.Graphics().p("AmIEiIAApDIMRAAIAAJDg");
	var mask_4_graphics_169 = new cjs.Graphics().p("AmWEiIAApDIMtAAIAAJDg");
	var mask_4_graphics_170 = new cjs.Graphics().p("AmjEiIAApDINHAAIAAJDg");
	var mask_4_graphics_171 = new cjs.Graphics().p("AmxEiIAApDINjAAIAAJDg");
	var mask_4_graphics_172 = new cjs.Graphics().p("Am/EiIAApDIN/AAIAAJDg");
	var mask_4_graphics_173 = new cjs.Graphics().p("AnNEiIAApDIObAAIAAJDg");
	var mask_4_graphics_174 = new cjs.Graphics().p("EgArAg+IAApEIO1AAIAAJEg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(145).to({graphics:mask_4_graphics_145,x:62,y:211}).wait(1).to({graphics:mask_4_graphics_146,x:106.4,y:393}).wait(1).to({graphics:mask_4_graphics_147,x:107.7,y:393}).wait(1).to({graphics:mask_4_graphics_148,x:109,y:393}).wait(1).to({graphics:mask_4_graphics_149,x:110.3,y:393}).wait(1).to({graphics:mask_4_graphics_150,x:111.6,y:393}).wait(1).to({graphics:mask_4_graphics_151,x:112.9,y:393}).wait(1).to({graphics:mask_4_graphics_152,x:114.2,y:393}).wait(1).to({graphics:mask_4_graphics_153,x:115.5,y:393}).wait(1).to({graphics:mask_4_graphics_154,x:116.8,y:393}).wait(1).to({graphics:mask_4_graphics_155,x:118.1,y:393}).wait(1).to({graphics:mask_4_graphics_156,x:119.4,y:393}).wait(1).to({graphics:mask_4_graphics_157,x:120.7,y:393}).wait(1).to({graphics:mask_4_graphics_158,x:122,y:393}).wait(1).to({graphics:mask_4_graphics_159,x:123.3,y:393}).wait(1).to({graphics:mask_4_graphics_160,x:124.6,y:393}).wait(1).to({graphics:mask_4_graphics_161,x:125.9,y:393}).wait(1).to({graphics:mask_4_graphics_162,x:127.2,y:393}).wait(1).to({graphics:mask_4_graphics_163,x:128.5,y:393}).wait(1).to({graphics:mask_4_graphics_164,x:81.8,y:211}).wait(1).to({graphics:mask_4_graphics_165,x:130.2,y:393}).wait(1).to({graphics:mask_4_graphics_166,x:130.6,y:393}).wait(1).to({graphics:mask_4_graphics_167,x:131,y:393}).wait(1).to({graphics:mask_4_graphics_168,x:131.4,y:393}).wait(1).to({graphics:mask_4_graphics_169,x:131.8,y:393}).wait(1).to({graphics:mask_4_graphics_170,x:132.1,y:393}).wait(1).to({graphics:mask_4_graphics_171,x:132.5,y:393}).wait(1).to({graphics:mask_4_graphics_172,x:132.9,y:393}).wait(1).to({graphics:mask_4_graphics_173,x:133.3,y:393}).wait(1).to({graphics:mask_4_graphics_174,x:90.6,y:211}).wait(431));

	// Layer 3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(20,1,1).p("ARxx8QkpJek4H6QjQFRkaEVQiLCJieB6QndFxjwhDQh3gggphq");
	this.shape_5.setTransform(227.3,275.9);
	this.shape_5._off = true;

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(145).to({_off:false},0).wait(460));

	// Layer 1 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_9 = new cjs.Graphics().p("EAEcApJMAFmg6UQMFBKHuJXQHvJWhLMGQhKMFpXHtQoIGvqNAAQhiAAhlgKg");
	var mask_5_graphics_10 = new cjs.Graphics().p("EAFAApMMAEfg6ZQMGA7H5JNQH6JNg7MGQg8MHpOH5QoPHFqjAAQhQAAhRgHg");
	var mask_5_graphics_11 = new cjs.Graphics().p("EAFkApPMADXg6eQMIAsIEJDQIFJEgtMHQgtMIpEIDQoVHcq7AAQg9AAg9gDg");
	var mask_5_graphics_12 = new cjs.Graphics().p("EAGHApRMACRg6iQMIAeIPI5QIQI6geMIQgeMIo6IPQobHzrUAAQgpAAgqgBg");
	var mask_5_graphics_13 = new cjs.Graphics().p("EAGrApSMABKg6jQMIAPIaIvQIaIvgPMJQgPMIowIZQogIMrtAAIgrAAg");
	var mask_5_graphics_14 = new cjs.Graphics().p("EAHPApSMAACg6jQMJAAIkIlQIlIlgBMIQAAMJomIkQokIksIAAIgBAAg");
	var mask_5_graphics_15 = new cjs.Graphics().p("AGuxRQMIgOIuIaQIwIbAOMIQAOMIobIuQoaIwsIAOg");
	var mask_5_graphics_16 = new cjs.Graphics().p("AGKxPQMIgdI4IPQI6IRAdMHQAdMIoRI4QoPI6sIAdg");
	var mask_5_graphics_17 = new cjs.Graphics().p("AFnxMQMHgsJCIEQJDIGAsMGQAsMIoGJCQoEJDsHAsg");
	var mask_5_graphics_18 = new cjs.Graphics().p("AFDxIQMGg7JMH5QJNH7A6MFQA7MGn7JMQn5JNsGA7g");
	var mask_5_graphics_19 = new cjs.Graphics().p("AEfxDQMFhKJVHuQJXHvBJMEQBJMFnvJVQnuJXsFBJg");
	var mask_5_graphics_20 = new cjs.Graphics().p("AD8w+QMDhXJfHiQJfHkBYMCQBYMDnkJfQniJfsDBYg");
	var mask_5_graphics_21 = new cjs.Graphics().p("ADZw3QMBhmJnHWQJpHYBnMBQBmMCnYJnQnXJpsBBmg");
	var mask_5_graphics_22 = new cjs.Graphics().p("AC1wvQMAh1JwHLQJxHMB1L+QB1MAnMJwQnLJyr/B1g");
	var mask_5_graphics_23 = new cjs.Graphics().p("ACSwmQL9iEJ5G/QJ6HACDL8QCEL9nAJ5Qm/J6r9CEg");
	var mask_5_graphics_24 = new cjs.Graphics().p("ABvwcQL6iSKBGyQKDG0CSL6QCSL6m0KBQmzKDr6CSg");
	var mask_5_graphics_25 = new cjs.Graphics().p("ABMwSQL3igKJGnQKLGnCgL3QChL3moKJQmmKLr4Cgg");
	var mask_5_graphics_26 = new cjs.Graphics().p("AApwGQL0ivKRGbQKTGbCvLzQCuL0mbKRQmaKSr0Cvg");
	var mask_5_graphics_27 = new cjs.Graphics().p("AAHv5QLwi9KZGNQKaGPC9LwQC9LwmPKZQmNKarxC9g");
	var mask_5_graphics_28 = new cjs.Graphics().p("AgbvrQLsjMKgGBQKhGCDMLsQDLLtmCKgQmAKhrtDMg");
	var mask_5_graphics_29 = new cjs.Graphics().p("Ag9vcQLojaKnF0QKoF1DaLoQDaLol2KoQlzKorpDag");
	var mask_5_graphics_30 = new cjs.Graphics().p("AhfvNQLjjnKuFnQKwFoDoLjQDnLkloKvQlnKvrkDog");
	var mask_5_graphics_31 = new cjs.Graphics().p("AiBu8QLfj2K0FaQK3FbD1LfQD2LglbK1QlaK1rfD2g");
	var mask_5_graphics_32 = new cjs.Graphics().p("AijuqQLakEK7FNQK9FNEELaQEDLblOK7QlMK9rbEDg");
	var mask_5_graphics_33 = new cjs.Graphics().p("AjEuYQLVkRLBE/QLDFAERLVQESLWlBLBQk/LDrVERg");
	var mask_5_graphics_34 = new cjs.Graphics().p("AjluEQLQkfLHExQLIEzEgLPQEfLRkzLHQkyLJrQEfg");
	var mask_5_graphics_35 = new cjs.Graphics().p("AkGtwQLKktLNElQLOElEtLJQEtLLkmLNQkjLOrLEtg");
	var mask_5_graphics_36 = new cjs.Graphics().p("AkmtaQLEk7LSEXQLUEXE6LEQE6LFkYLTQkWLTrFE6g");
	var mask_5_graphics_37 = new cjs.Graphics().p("AlGtEQK+lILXEJQLZEJFHK+QFIK/kKLYQkILYq/FIg");
	var mask_5_graphics_38 = new cjs.Graphics().p("AlmstQK3lVLcD7QLeD8FVK3QFVK4j8LdQj6Ldq5FVg");
	var mask_5_graphics_39 = new cjs.Graphics().p("AmFsVQKwliLhDtQLiDuFiKwQFiKyjuLhQjsLiqyFig");
	var mask_5_graphics_40 = new cjs.Graphics().p("Amlr8QKqlvLlDfQLnDgFvKqQFvKqjgLmQjeLmqrFvg");
	var mask_5_graphics_41 = new cjs.Graphics().p("AnDriQKil8LpDRQLrDRF8KkQF8KjjSLpQjQLqqkF8g");
	var mask_5_graphics_42 = new cjs.Graphics().p("AndrMQKdmGLsDFQLuDFGGKeQGHKcjGLtQjELtqeGHg");
	var mask_5_graphics_43 = new cjs.Graphics().p("An2q1QKWmRLvC5QLxC5GRKYQGSKWi7LwQi4LwqXGRg");
	var mask_5_graphics_44 = new cjs.Graphics().p("AoPqdQKPmcLyCtQL0CtGcKRQGcKQivLzQisLzqRGcg");
	var mask_5_graphics_45 = new cjs.Graphics().p("AooqGQKJmmL1ChQL2CiGmKKQGmKJiiL2QigL2qLGmg");
	var mask_5_graphics_46 = new cjs.Graphics().p("ApBptQKCmwL4CVQL5CVGwKEQGwKCiWL4QiUL4qDGxg");
	var mask_5_graphics_47 = new cjs.Graphics().p("ApZpUQJ7m6L6CJQL7CJG7J9QG6J7iKL6QiIL7p9G6g");
	var mask_5_graphics_48 = new cjs.Graphics().p("Apxo6QJ0nFL7B9QL+B9HFJ2QHEJ0h+L9Qh8L8p1HFg");
	var mask_5_graphics_49 = new cjs.Graphics().p("AqJogQJunOL8BwQMABxHOJvQHPJthyL+QhwL/puHOg");
	var mask_5_graphics_50 = new cjs.Graphics().p("AqhoFQJnnYL+BkQMBBlHZJnQHYJmhmMAQhjMApnHYg");
	var mask_5_graphics_51 = new cjs.Graphics().p("Aq4npQJfniMABYQMDBYHiJgQHiJehaMBQhXMCpfHig");
	var mask_5_graphics_52 = new cjs.Graphics().p("ArPnNQJYnsMABMQMEBMHsJYQHsJWhNMDQhMMDpXHsg");
	var mask_5_graphics_53 = new cjs.Graphics().p("ArmmxQJQn1MCBAQMFBAH1JQQH1JOhBMEQg+MEpQH2g");
	var mask_5_graphics_54 = new cjs.Graphics().p("Ar8mUQJIn+MDAzQMGA0H+JIQH/JGg1MFQgzMFpHH/g");
	var mask_5_graphics_55 = new cjs.Graphics().p("AsSl2QI/oIMEAoQMHAnIII/QIHI/goMGQgmMFpAIIg");
	var mask_5_graphics_56 = new cjs.Graphics().p("AsolYQI3oRMEAbQMIAbIRI4QIQI2gcMGQgaMGo3IRg");
	var mask_5_graphics_57 = new cjs.Graphics().p("As9k5QIuoaMFAPQMIAPIZIuQIaIugQMHQgNMGovIag");
	var mask_5_graphics_58 = new cjs.Graphics().p("AtTkaQImojMFADQMIACIjImQIiIlgDMHQgCMHomIjg");
	var mask_5_graphics_59 = new cjs.Graphics().p("Atoj6QIeosMEgJQMIgKIsIdQIrIcAJMHQAKMHodIrg");
	var mask_5_graphics_60 = new cjs.Graphics().p("At8jaQIUo0MFgWQMHgWI0IUQI0IUAVMGQAXMHoUI0g");
	var mask_5_graphics_61 = new cjs.Graphics().p("AuRi6QIMo8MEgiQMHgjI8IMQI8IKAiMGQAjMHoLI8g");
	var mask_5_graphics_62 = new cjs.Graphics().p("AuliYQIDpFMDguQMHgvJEICQJFIBAtMGQAwMFoCJFg");
	var mask_5_graphics_63 = new cjs.Graphics().p("Au4h3QH5pMMCg7QMGg7JNH5QJMH4A6MEQA8MFn5JNg");
	var mask_5_graphics_64 = new cjs.Graphics().p("AvMhVQHwpUMChHQMEhIJVHwQJUHuBGMEQBJMEnwJUg");
	var mask_5_graphics_65 = new cjs.Graphics().p("AvfgyQHmpcMBhUQMDhUJdHnQJcHlBSMCQBVMDnmJcg");
	var mask_5_graphics_66 = new cjs.Graphics().p("AvxgPQHcpkL/hgQMChgJkHdQJkHbBfMBQBhMBndJkg");
	var mask_5_graphics_67 = new cjs.Graphics().p("AwEATQHTpqL9hsQMBhsJrHTQJsHRBrMAQBtL/nTJrg");
	var mask_5_graphics_68 = new cjs.Graphics().p("AwVA3QHIpyL8h4QL/h4JyHJQJzHIB3L9QB5L+nIJzg");
	var mask_5_graphics_69 = new cjs.Graphics().p("AwnBbQG/p5L5iEQL9iEJ6G/QJ6G9CDL8QCGL8m/J6g");
	var mask_5_graphics_70 = new cjs.Graphics().p("Aw4CAQG1qAL3iQQL6iRKBG1QKCGzCPL6QCRL5m0KBg");
	var mask_5_graphics_71 = new cjs.Graphics().p("AxJClQGrqHL1icQL4idKIGrQKIGpCbL3QCeL3mrKIg");
	var mask_5_graphics_72 = new cjs.Graphics().p("AxZDLQGgqOLyioQL2ipKPGgQKOGfCoL1QCpL0mgKPg");
	var mask_5_graphics_73 = new cjs.Graphics().p("AxpDwQGWqULvi0QLzi1KVGWQKVGUC0LyQC1LymVKVg");
	var mask_5_graphics_74 = new cjs.Graphics().p("Ax5EWQGLqaLujAQLvjBKcGLQKbGKDALvQDBLvmLKbg");
	var mask_5_graphics_75 = new cjs.Graphics().p("AyEE0QGDqfLrjKQLsjKKhGDQKgGCDJLtQDKLsmDKgg");
	var mask_5_graphics_76 = new cjs.Graphics().p("AyQFSQF7qkLpjTQLqjTKlF7QKlF7DRLpQDULpl6Klg");
	var mask_5_graphics_77 = new cjs.Graphics().p("AybFwQFzqpLmjbQLnjcKqFyQKpFyDbLnQDdLnlyKpg");
	var mask_5_graphics_78 = new cjs.Graphics().p("AymGOQFqqtLkjkQLkjmKuFqQKuFqDkLkQDmLklqKug");
	var mask_5_graphics_79 = new cjs.Graphics().p("AywGtQFhqyLhjtQLijvKyFiQKyFhDtLhQDvLilhKyg");
	var mask_5_graphics_80 = new cjs.Graphics().p("Ay7HMQFZq2Lej3QLfj3K2FZQK3FZD2LeQD4LelZK3g");
	var mask_5_graphics_81 = new cjs.Graphics().p("AzFHrQFRq6LakAQLckAK7FQQK7FRD/LbQEBLblRK7g");
	var mask_5_graphics_82 = new cjs.Graphics().p("AzPIKQFIq+LYkJQLYkJK/FIQK/FIEILXQEKLYlIK/g");
	var mask_5_graphics_83 = new cjs.Graphics().p("AzYIpQE/rCLUkSQLVkSLDFAQLDE/ERLUQETLVk/LDg");
	var mask_5_graphics_84 = new cjs.Graphics().p("AzhJIQE2rFLRkbQLSkbLGE3QLHE2EaLRQEcLSk3LHg");
	var mask_5_graphics_85 = new cjs.Graphics().p("AzqJoQEurKLNkjQLOkkLKEuQLLEuEiLOQElLOkuLKg");
	var mask_5_graphics_86 = new cjs.Graphics().p("AzzKIQElrNLKksQLKktLOElQLOElEsLKQEtLKklLPg");
	var mask_5_graphics_87 = new cjs.Graphics().p("Az8KoQEdrRLGk1QLGk1LSEcQLSEdE0LGQE2LGkdLSg");
	var mask_5_graphics_88 = new cjs.Graphics().p("A0ELIQEUrULCk+QLDk+LVEUQLVETE9LDQE+LCkTLVg");
	var mask_5_graphics_89 = new cjs.Graphics().p("A0MLoQELrZK+lEQK/lHLYEKQLZELFFK/QFHK+kKLZg");
	var mask_5_graphics_90 = new cjs.Graphics().p("A0TMIQEBrbK6lOQK7lPLcECQLcEBFNK7QFQK6kBLcg");
	var mask_5_graphics_91 = new cjs.Graphics().p("A0bMpQD5rfK2lWQK3lYLeD5QLfD5FXK2QFYK2j5Lfg");
	var mask_5_graphics_92 = new cjs.Graphics().p("A0iNJQDwrhKxlfQKzlgLiDwQLhDvFfKyQFhKyjvLig");
	var mask_5_graphics_93 = new cjs.Graphics().p("A0pNqQDnrkKtlnQKulpLlDnQLlDmFnKuQFpKujmLkg");
	var mask_5_graphics_94 = new cjs.Graphics().p("A0vOLQDdrnKplvQKqlyLnDeQLoDdFvKqQFyKpjeLng");
	var mask_5_graphics_95 = new cjs.Graphics().p("A02OsQDVrqKkl3QKll6LqDVQLqDUF4KlQF6KkjULqg");
	var mask_5_graphics_96 = new cjs.Graphics().p("A08PNQDMrsKfmAQKhmCLsDLQLtDMGAKgQGDKgjMLsg");
	var mask_5_graphics_97 = new cjs.Graphics().p("A1BPvQDCrvKbmIQKbmKLvDCQLvDCGJKbQGKKbjCLvg");
	var mask_5_graphics_98 = new cjs.Graphics().p("A1HQQQC5rxKWmRQKXmSLxC5QLyC5GQKXQGTKWi5Lxg");
	var mask_5_graphics_99 = new cjs.Graphics().p("A1MQxQCwrzKRmYQKSmbLzCwQL0CwGZKRQGaKSivLzg");
	var mask_5_graphics_100 = new cjs.Graphics().p("A1RRTQCnr2KMmgQKMmiL2CmQL2CnGhKMQGiKMimL2g");
	var mask_5_graphics_101 = new cjs.Graphics().p("A1VR1QCdr4KHmoQKHmqL4CdQL3CdGpKHQGrKHidL4g");
	var mask_5_graphics_102 = new cjs.Graphics().p("A1aSWQCUr5KCmwQKCmyL6CTQL5CUGxKCQGyKCiUL6g");
	var mask_5_graphics_103 = new cjs.Graphics().p("A1eS4QCLr7J8m5QJ9m5L7CKQL7CLG5J9QG6J8iKL7g");
	var mask_5_graphics_104 = new cjs.Graphics().p("A1hTaQCBr9J2nBQJ4nAL9CBQL9CBHAJ3QHCJ3iBL9g");
	var mask_5_graphics_105 = new cjs.Graphics().p("A1lT6QB5r/JxnHQJ0nIL9B4QL+B4HIJyQHJJyh4L/g");
	var mask_5_graphics_106 = new cjs.Graphics().p("A1oUZQBwr/JsnPQJunPL/BvQMABwHOJtQHRJshwMAg");
	var mask_5_graphics_107 = new cjs.Graphics().p("A1rU5QBnsBJnnWQJpnWMABnQMBBnHWJnQHXJohnMAg");
	var mask_5_graphics_108 = new cjs.Graphics().p("A1tVZQBesCJhndQJkndMBBeQMCBeHdJiQHeJiheMCg");
	var mask_5_graphics_109 = new cjs.Graphics().p("A1wV5QBWsDJcnkQJenkMCBVQMDBVHkJdQHlJchVMDg");
	var mask_5_graphics_110 = new cjs.Graphics().p("A1yWZQBNsEJWnrQJZnrMDBMQMEBNHqJXQHtJXhNMEg");
	var mask_5_graphics_111 = new cjs.Graphics().p("A10W5QBEsFJRnyQJTnyMDBEQMFBDHyJSQHzJRhEMFg");
	var mask_5_graphics_112 = new cjs.Graphics().p("A11XZQA6sGJMn4QJNn5MEA7QMGA7H4JLQH6JMg7MFg");
	var mask_5_graphics_113 = new cjs.Graphics().p("A13X5QAysGJGoAQJHn/MFAyQMGAyH/JGQIBJGgyMGg");
	var mask_5_graphics_114 = new cjs.Graphics().p("A14YZQApsHJAoGQJBoGMGApQMHApIFJBQIHI/gpMHg");
	var mask_5_graphics_115 = new cjs.Graphics().p("A15Y5QAgsHI6oNQI7oMMHAgQMHAgIMI6QIOI6ggMHg");
	var mask_5_graphics_116 = new cjs.Graphics().p("A16ZZQAYsIIzoSQI2oTMGAXQMIAXITI0QIUI0gYMIg");
	var mask_5_graphics_117 = new cjs.Graphics().p("A16Z5QAOsIIuoZQIvoZMHAOQMIAPIZIuQIbItgPMIg");
	var mask_5_graphics_118 = new cjs.Graphics().p("A16aZQAFsIIoofQIpogMHAFQMIAGIfIoQIhIngGMIg");
	var mask_5_graphics_119 = new cjs.Graphics().p("AtcGEQIionMHgDQMIgDImIiQInIhAEMIMg6gAAQQgEsIIiomg");
	var mask_5_graphics_120 = new cjs.Graphics().p("AtrGIQIcosMHgMQMIgMIsIbQItIbANMIMg6gAA6QgMsIIbosg");
	var mask_5_graphics_121 = new cjs.Graphics().p("At6GNQIWozMHgVQMIgVIyIWQIzIUAVMIMg6eABlQgVsIIUoyg");
	var mask_5_graphics_122 = new cjs.Graphics().p("AuIGSQIPo5MHgeQMHgdI5IOQI5IOAeMIMg6dACQQgesIIOo4g");
	var mask_5_graphics_123 = new cjs.Graphics().p("AuWGXQIJo/MGgmQMHgnI+IIQJAIIAnMHMg6cAC6QgnsHIIo+g");
	var mask_5_graphics_124 = new cjs.Graphics().p("AukGcQIDpEMFgwQMHgvJEIBQJGIBAvMHMg6ZADlQgwsHIBpEg");
	var mask_5_graphics_125 = new cjs.Graphics().p("AuxGiQH8pLMFg4QMGg5JKH7QJLH7A5MGMg6XAEQQg5sGH7pKg");
	var mask_5_graphics_126 = new cjs.Graphics().p("Au+GnQH1pQMEhBQMFhBJQH0QJSHzBBMGMg6UAE6QhBsFH0pQg");
	var mask_5_graphics_127 = new cjs.Graphics().p("AvLGtQHupWMEhKQMEhKJWHtQJXHtBKMFMg6QAFlQhKsEHtpWg");
	var mask_5_graphics_128 = new cjs.Graphics().p("AvXGzQHnpcMDhSQMDhTJbHmQJdHmBTMEMg6LAGQQhTsEHmpbg");
	var mask_5_graphics_129 = new cjs.Graphics().p("AvkG5QHgphMChcQMDhcJgHgQJiHfBcMDMg6GAG6QhcsCHfphg");
	var mask_5_graphics_130 = new cjs.Graphics().p("AvuG+QHbpmMBhiQMChjJlHaQJmHZBjMCMg6CAHdQhjsCHZplg");
	var mask_5_graphics_131 = new cjs.Graphics().p("Av3HDQHVpqMAhqQMBhqJpHUQJrHUBqMBMg5+AH/QhqsAHUpqg");
	var mask_5_graphics_132 = new cjs.Graphics().p("AwAHJQHPpvL/hxQMAhxJuHOQJvHOBxMAMg55AIiQhxsAHOptg");
	var mask_5_graphics_133 = new cjs.Graphics().p("AwJHOQHJpzL+h4QL/h4JyHIQJzHIB4L/Mg5zAJFQh4r/HIpyg");
	var mask_5_graphics_134 = new cjs.Graphics().p("AwSHTQHEp2L8iAQL+h/J2HDQJ4HCB/L9Mg5uAJnQh/r9HCp3g");
	var mask_5_graphics_135 = new cjs.Graphics().p("AwbHZQG+p7L8iGQL8iHJ6G9QJ8G8CHL9Mg5pAKJQiGr9G8p6g");
	var mask_5_graphics_136 = new cjs.Graphics().p("AwjHfQG4p/L6iOQL7iNJ/G4QKAG1CNL7Mg5iAKrQiOr7G3p+g");
	var mask_5_graphics_137 = new cjs.Graphics().p("AwrHlQGyqEL5iUQL5iVKDGyQKEGwCUL5Mg5bALOQiVr6GxqCg");
	var mask_5_graphics_138 = new cjs.Graphics().p("AwzHqQGsqHL3ibQL5icKGGsQKIGpCcL5Mg5VALvQicr4GrqHg");
	var mask_5_graphics_139 = new cjs.Graphics().p("Aw7HwQGmqLL2iiQL3ijKLGmQKLGjCjL3Mg5OAMSQiir3GkqLg");
	var mask_5_graphics_140 = new cjs.Graphics().p("AxCH3QGgqPL0iqQL1iqKPGgQKPGeCqL1Mg5GAMzQiqr1GfqOg");
	var mask_5_graphics_141 = new cjs.Graphics().p("AxKH9QGaqTLzixQL0iwKSGaQKTGXCxLzMg4+ANWQixr0GYqSg");
	var mask_5_graphics_142 = new cjs.Graphics().p("AxRIDQGUqWLxi4QLyi4KWGUQKXGRC4LyMg42AN3Qi4ryGSqWg");
	var mask_5_graphics_143 = new cjs.Graphics().p("AxXIKQGNqbLvi+QLxi/KZGOQKbGKC/LxMg4uAOYQi/rwGNqZg");
	var mask_5_graphics_144 = new cjs.Graphics().p("AxeIQQGHqeLujFQLujGKeGHQKeGFDGLvMg4lAO6QjGrvGGqdg");
	var mask_5_graphics_145 = new cjs.Graphics().p("AxkIXQGAqhLsjNQLtjNKhGBQKiF/DNLtMg4dAPbQjMrsGAqhg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_5_graphics_9,x:233.9,y:264.3}).wait(1).to({graphics:mask_5_graphics_10,x:233.9,y:264.3}).wait(1).to({graphics:mask_5_graphics_11,x:233.9,y:264.2}).wait(1).to({graphics:mask_5_graphics_12,x:233.9,y:264.2}).wait(1).to({graphics:mask_5_graphics_13,x:233.8,y:264.2}).wait(1).to({graphics:mask_5_graphics_14,x:233.8,y:264.2}).wait(1).to({graphics:mask_5_graphics_15,x:233.8,y:264.2}).wait(1).to({graphics:mask_5_graphics_16,x:233.8,y:264.2}).wait(1).to({graphics:mask_5_graphics_17,x:233.8,y:264.1}).wait(1).to({graphics:mask_5_graphics_18,x:233.8,y:264}).wait(1).to({graphics:mask_5_graphics_19,x:233.9,y:263.8}).wait(1).to({graphics:mask_5_graphics_20,x:233.9,y:263.6}).wait(1).to({graphics:mask_5_graphics_21,x:233.9,y:263.4}).wait(1).to({graphics:mask_5_graphics_22,x:233.9,y:263.2}).wait(1).to({graphics:mask_5_graphics_23,x:233.9,y:262.9}).wait(1).to({graphics:mask_5_graphics_24,x:233.9,y:262.6}).wait(1).to({graphics:mask_5_graphics_25,x:234,y:262.2}).wait(1).to({graphics:mask_5_graphics_26,x:234,y:261.8}).wait(1).to({graphics:mask_5_graphics_27,x:234,y:261.4}).wait(1).to({graphics:mask_5_graphics_28,x:234,y:261}).wait(1).to({graphics:mask_5_graphics_29,x:234,y:260.5}).wait(1).to({graphics:mask_5_graphics_30,x:234,y:260}).wait(1).to({graphics:mask_5_graphics_31,x:234,y:259.4}).wait(1).to({graphics:mask_5_graphics_32,x:234,y:258.8}).wait(1).to({graphics:mask_5_graphics_33,x:234,y:258.2}).wait(1).to({graphics:mask_5_graphics_34,x:234,y:257.6}).wait(1).to({graphics:mask_5_graphics_35,x:234,y:256.9}).wait(1).to({graphics:mask_5_graphics_36,x:234,y:256.2}).wait(1).to({graphics:mask_5_graphics_37,x:234,y:255.5}).wait(1).to({graphics:mask_5_graphics_38,x:234,y:254.7}).wait(1).to({graphics:mask_5_graphics_39,x:234,y:253.9}).wait(1).to({graphics:mask_5_graphics_40,x:234,y:253.1}).wait(1).to({graphics:mask_5_graphics_41,x:234,y:252.2}).wait(1).to({graphics:mask_5_graphics_42,x:233.9,y:251.5}).wait(1).to({graphics:mask_5_graphics_43,x:233.9,y:250.7}).wait(1).to({graphics:mask_5_graphics_44,x:233.9,y:250}).wait(1).to({graphics:mask_5_graphics_45,x:233.9,y:249.2}).wait(1).to({graphics:mask_5_graphics_46,x:233.9,y:248.4}).wait(1).to({graphics:mask_5_graphics_47,x:233.9,y:247.5}).wait(1).to({graphics:mask_5_graphics_48,x:233.9,y:246.7}).wait(1).to({graphics:mask_5_graphics_49,x:233.8,y:245.8}).wait(1).to({graphics:mask_5_graphics_50,x:233.8,y:244.9}).wait(1).to({graphics:mask_5_graphics_51,x:233.8,y:244}).wait(1).to({graphics:mask_5_graphics_52,x:233.8,y:243.1}).wait(1).to({graphics:mask_5_graphics_53,x:233.8,y:242.2}).wait(1).to({graphics:mask_5_graphics_54,x:233.8,y:241.2}).wait(1).to({graphics:mask_5_graphics_55,x:233.8,y:240.2}).wait(1).to({graphics:mask_5_graphics_56,x:233.8,y:239.2}).wait(1).to({graphics:mask_5_graphics_57,x:233.8,y:238.2}).wait(1).to({graphics:mask_5_graphics_58,x:233.8,y:237.2}).wait(1).to({graphics:mask_5_graphics_59,x:233.8,y:236.1}).wait(1).to({graphics:mask_5_graphics_60,x:233.8,y:235.1}).wait(1).to({graphics:mask_5_graphics_61,x:233.8,y:234}).wait(1).to({graphics:mask_5_graphics_62,x:233.8,y:232.9}).wait(1).to({graphics:mask_5_graphics_63,x:233.8,y:231.8}).wait(1).to({graphics:mask_5_graphics_64,x:233.9,y:230.6}).wait(1).to({graphics:mask_5_graphics_65,x:233.9,y:229.5}).wait(1).to({graphics:mask_5_graphics_66,x:233.9,y:228.3}).wait(1).to({graphics:mask_5_graphics_67,x:233.9,y:227.1}).wait(1).to({graphics:mask_5_graphics_68,x:234,y:226}).wait(1).to({graphics:mask_5_graphics_69,x:234,y:224.8}).wait(1).to({graphics:mask_5_graphics_70,x:234,y:223.5}).wait(1).to({graphics:mask_5_graphics_71,x:234.1,y:222.3}).wait(1).to({graphics:mask_5_graphics_72,x:234.1,y:221.1}).wait(1).to({graphics:mask_5_graphics_73,x:234.1,y:219.8}).wait(1).to({graphics:mask_5_graphics_74,x:234.1,y:218.5}).wait(1).to({graphics:mask_5_graphics_75,x:234.1,y:217.5}).wait(1).to({graphics:mask_5_graphics_76,x:234.1,y:216.5}).wait(1).to({graphics:mask_5_graphics_77,x:234.2,y:215.5}).wait(1).to({graphics:mask_5_graphics_78,x:234.2,y:214.5}).wait(1).to({graphics:mask_5_graphics_79,x:234.2,y:213.5}).wait(1).to({graphics:mask_5_graphics_80,x:234.2,y:212.5}).wait(1).to({graphics:mask_5_graphics_81,x:234.2,y:211.5}).wait(1).to({graphics:mask_5_graphics_82,x:234.2,y:210.4}).wait(1).to({graphics:mask_5_graphics_83,x:234.2,y:209.4}).wait(1).to({graphics:mask_5_graphics_84,x:234.2,y:208.4}).wait(1).to({graphics:mask_5_graphics_85,x:234.2,y:207.3}).wait(1).to({graphics:mask_5_graphics_86,x:234.2,y:206.3}).wait(1).to({graphics:mask_5_graphics_87,x:234.2,y:205.2}).wait(1).to({graphics:mask_5_graphics_88,x:234.2,y:204.1}).wait(1).to({graphics:mask_5_graphics_89,x:234.3,y:203.1}).wait(1).to({graphics:mask_5_graphics_90,x:234.3,y:202}).wait(1).to({graphics:mask_5_graphics_91,x:234.3,y:200.9}).wait(1).to({graphics:mask_5_graphics_92,x:234.3,y:199.8}).wait(1).to({graphics:mask_5_graphics_93,x:234.2,y:198.7}).wait(1).to({graphics:mask_5_graphics_94,x:234.2,y:197.6}).wait(1).to({graphics:mask_5_graphics_95,x:234.2,y:196.5}).wait(1).to({graphics:mask_5_graphics_96,x:234.2,y:195.4}).wait(1).to({graphics:mask_5_graphics_97,x:234.2,y:194.3}).wait(1).to({graphics:mask_5_graphics_98,x:234.2,y:193.2}).wait(1).to({graphics:mask_5_graphics_99,x:234.2,y:192.1}).wait(1).to({graphics:mask_5_graphics_100,x:234.2,y:191}).wait(1).to({graphics:mask_5_graphics_101,x:234.2,y:189.9}).wait(1).to({graphics:mask_5_graphics_102,x:234.2,y:188.8}).wait(1).to({graphics:mask_5_graphics_103,x:234.2,y:187.6}).wait(1).to({graphics:mask_5_graphics_104,x:234.2,y:186.5}).wait(1).to({graphics:mask_5_graphics_105,x:234.2,y:185.5}).wait(1).to({graphics:mask_5_graphics_106,x:234.2,y:184.4}).wait(1).to({graphics:mask_5_graphics_107,x:234.2,y:183.3}).wait(1).to({graphics:mask_5_graphics_108,x:234.2,y:182.3}).wait(1).to({graphics:mask_5_graphics_109,x:234.1,y:181.2}).wait(1).to({graphics:mask_5_graphics_110,x:234.1,y:180.2}).wait(1).to({graphics:mask_5_graphics_111,x:234.1,y:179.1}).wait(1).to({graphics:mask_5_graphics_112,x:234.1,y:178}).wait(1).to({graphics:mask_5_graphics_113,x:234.1,y:177}).wait(1).to({graphics:mask_5_graphics_114,x:234.1,y:175.9}).wait(1).to({graphics:mask_5_graphics_115,x:234.1,y:174.8}).wait(1).to({graphics:mask_5_graphics_116,x:234.1,y:173.8}).wait(1).to({graphics:mask_5_graphics_117,x:234.1,y:172.7}).wait(1).to({graphics:mask_5_graphics_118,x:234.1,y:171.6}).wait(1).to({graphics:mask_5_graphics_119,x:234.2,y:171.4}).wait(1).to({graphics:mask_5_graphics_120,x:234.2,y:172.4}).wait(1).to({graphics:mask_5_graphics_121,x:234.1,y:173.5}).wait(1).to({graphics:mask_5_graphics_122,x:234.1,y:174.6}).wait(1).to({graphics:mask_5_graphics_123,x:234.1,y:175.6}).wait(1).to({graphics:mask_5_graphics_124,x:234,y:176.7}).wait(1).to({graphics:mask_5_graphics_125,x:234,y:177.8}).wait(1).to({graphics:mask_5_graphics_126,x:233.9,y:178.8}).wait(1).to({graphics:mask_5_graphics_127,x:233.8,y:179.9}).wait(1).to({graphics:mask_5_graphics_128,x:233.7,y:181}).wait(1).to({graphics:mask_5_graphics_129,x:233.5,y:182}).wait(1).to({graphics:mask_5_graphics_130,x:233.4,y:182.9}).wait(1).to({graphics:mask_5_graphics_131,x:233.3,y:183.7}).wait(1).to({graphics:mask_5_graphics_132,x:233.2,y:184.6}).wait(1).to({graphics:mask_5_graphics_133,x:233,y:185.5}).wait(1).to({graphics:mask_5_graphics_134,x:232.9,y:186.3}).wait(1).to({graphics:mask_5_graphics_135,x:232.8,y:187.2}).wait(1).to({graphics:mask_5_graphics_136,x:232.6,y:188}).wait(1).to({graphics:mask_5_graphics_137,x:232.4,y:188.9}).wait(1).to({graphics:mask_5_graphics_138,x:232.3,y:189.7}).wait(1).to({graphics:mask_5_graphics_139,x:232.1,y:190.6}).wait(1).to({graphics:mask_5_graphics_140,x:231.9,y:191.4}).wait(1).to({graphics:mask_5_graphics_141,x:231.7,y:192.3}).wait(1).to({graphics:mask_5_graphics_142,x:231.5,y:193.1}).wait(1).to({graphics:mask_5_graphics_143,x:231.3,y:193.9}).wait(1).to({graphics:mask_5_graphics_144,x:231.1,y:194.8}).wait(1).to({graphics:mask_5_graphics_145,x:230.9,y:195.6}).wait(460));

	// Layer 2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(20,1,1).p("An5LRQh8AkhbgZQjxhCBNlzQBMlyHwliQHvljLRAw");
	this.shape_6.setTransform(201.6,316.7);
	this.shape_6._off = true;

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(9).to({_off:false},0).wait(596));

	// Letter
	this.instance_3 = new lib.d("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(275,275);
	this.instance_3.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(605));

	// Background
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_7.setTransform(275,275,3.373,2.543);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_8.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).wait(605));

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