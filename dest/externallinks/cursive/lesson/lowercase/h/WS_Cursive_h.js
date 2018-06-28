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


(lib.h = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A8mY1QAAhdEWoHIAvhVQgpAsgyAAQhyAAAAh+QAAhsCYiWIGploIIVv4IEooAQCPjrBBg3QBghHBDAAQBhAABVA4QBeBAAABYQAAC/hNDQQhAC4h7DHQivEXlUF9QBqgmCkAAQCYAABUBAQBhBFAACWQAACGg7CWIiCEFQjCFIAACqQAAChB4AAQCUAAC/hMQCqhHC/h7QFKjWERkWIB+hyQBdhSC2i2QBHgvAsAAQBsAAAABzQAABJkuFCIjwDwQmsFgj2CHQjHBvi7A7QjRBAjAAAQikAAhbh1QhShqAAiqQAAjBC4lLICCjtQA6iEAAhtQAAhdhyAAQh7AAiEAyQh1Auh4BYQjcChiTDlQhMB7kcI4Qh4Drh+AAQhyAAAAhtgAj4uNIkWIqQDhkICNjhQCykrA3kFQh3BwjKF/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-183.1,-169.7,366.2,339.6);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0.1,rotation:31.8,guide:{path:[48.5,-50.4,-9.2,-28.3,-42.7,42.1]}},104).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AA1kPIBIhMICkCaIhIBMg");
	var mask_graphics_1 = new cjs.Graphics().p("Ah5giIBQhVICjCaIhQBVg");
	var mask_graphics_2 = new cjs.Graphics().p("Ah9gdIBYheICkCZIhZBeg");
	var mask_graphics_3 = new cjs.Graphics().p("AiCgZIBihnICjCaIhiBng");
	var mask_graphics_4 = new cjs.Graphics().p("AiGgUIBqhxICjCaIhqBxg");
	var mask_graphics_5 = new cjs.Graphics().p("AiKgQIByh5ICkCaIhzB5g");
	var mask_graphics_6 = new cjs.Graphics().p("AiPgLIB8iDICjCaIh8CDg");
	var mask_graphics_7 = new cjs.Graphics().p("AiTgHICEiLICjCaIiECLg");
	var mask_graphics_8 = new cjs.Graphics().p("AiXgCICMiVICjCaIiMCVg");
	var mask_graphics_9 = new cjs.Graphics().p("AibABICUicICkCbIiWCcg");
	var mask_graphics_10 = new cjs.Graphics().p("AigAGICeimICjCbIieCmg");
	var mask_graphics_11 = new cjs.Graphics().p("AikAKICliuICkCbIilCug");
	var mask_graphics_12 = new cjs.Graphics().p("AioAPICti4ICkCbIitC4g");
	var mask_graphics_13 = new cjs.Graphics().p("AitAUIC2jBIClCaIi3DBg");
	var mask_graphics_14 = new cjs.Graphics().p("AixAZIC/jLICkCbIi/DKg");
	var mask_graphics_15 = new cjs.Graphics().p("Ai1AdIDHjTICkCbIjHDSg");
	var mask_graphics_16 = new cjs.Graphics().p("Ai6AiIDQjdIClCbIjRDcg");
	var mask_graphics_17 = new cjs.Graphics().p("Ai+AmIDZjlICkCbIjZDkg");
	var mask_graphics_18 = new cjs.Graphics().p("AjCArIDhjvICkCaIjhDvg");
	var mask_graphics_19 = new cjs.Graphics().p("AjGAvIDpj4ICkCbIjpD4g");
	var mask_graphics_20 = new cjs.Graphics().p("AjLAzIDykAIClCaIjyEBg");
	var mask_graphics_21 = new cjs.Graphics().p("AjPA4ID7kKICkCbIj7EKg");
	var mask_graphics_22 = new cjs.Graphics().p("AjTA9IEDkTICkCaIkDETg");
	var mask_graphics_23 = new cjs.Graphics().p("AjXBBIELkcICkCbIkLEcg");
	var mask_graphics_24 = new cjs.Graphics().p("AjcBGIEVklICkCaIkUElg");
	var mask_graphics_25 = new cjs.Graphics().p("AjgBKIEdkuICkCbIkdEug");
	var mask_graphics_26 = new cjs.Graphics().p("AjkBOIElk2ICkCaIklE3g");
	var mask_graphics_27 = new cjs.Graphics().p("AjoBTIEtlAIClCaIkvFBg");
	var mask_graphics_28 = new cjs.Graphics().p("AjtBXIE3lIICkCaIk3FJg");
	var mask_graphics_29 = new cjs.Graphics().p("AjxBdIE/lTICkCaIk/FTg");
	var mask_graphics_30 = new cjs.Graphics().p("Aj1BhIFHlbICkCaIlHFbg");
	var mask_graphics_31 = new cjs.Graphics().p("Aj5BmIFPllIClCaIlRFlg");
	var mask_graphics_32 = new cjs.Graphics().p("Aj+BqIFZltICkCaIlZFtg");
	var mask_graphics_33 = new cjs.Graphics().p("AkCBvIFhl3ICkCaIlhF3g");
	var mask_graphics_34 = new cjs.Graphics().p("AkHBzIFqmAIClCbIlqGAg");
	var mask_graphics_35 = new cjs.Graphics().p("AkLB3IFzmIICkCaIlyGJg");
	var mask_graphics_36 = new cjs.Graphics().p("AkPB8IF7mSICkCbIl7GSg");
	var mask_graphics_37 = new cjs.Graphics().p("AkTCBIGDmbICkCaImDGbg");
	var mask_graphics_38 = new cjs.Graphics().p("AkYCFIGMmkIClCbImMGkg");
	var mask_graphics_39 = new cjs.Graphics().p("AkcCKIGVmtICkCaImVGtg");
	var mask_graphics_40 = new cjs.Graphics().p("AkgCOIGdm2ICkCbImdG2g");
	var mask_graphics_41 = new cjs.Graphics().p("AkkCTIGlnAICkCbImlHAg");
	var mask_graphics_42 = new cjs.Graphics().p("AkoCXIGtnIIClCbImuHIg");
	var mask_graphics_43 = new cjs.Graphics().p("AktCcIG3nSICkCbIm3HSg");
	var mask_graphics_44 = new cjs.Graphics().p("AkxChIG/nbICkCbIm/Hag");
	var mask_graphics_45 = new cjs.Graphics().p("Ak1ClIHHnkIClCbInIHkg");
	var mask_graphics_46 = new cjs.Graphics().p("Ak6CqIHRntICkCbInQHsg");
	var mask_graphics_47 = new cjs.Graphics().p("Ak+CuIHZn2ICkCbInZH2g");
	var mask_graphics_48 = new cjs.Graphics().p("AlCCzIHhn/ICkCbInhH+g");
	var mask_graphics_49 = new cjs.Graphics().p("AlGC3IHpoIIClCbInrIIg");
	var mask_graphics_50 = new cjs.Graphics().p("AlLC8IHzoSICkCbInzIRg");
	var mask_graphics_51 = new cjs.Graphics().p("AlPDAIH7oaICkCbIn7Iag");
	var mask_graphics_52 = new cjs.Graphics().p("AlTDFIIDokICkCbIoDIjg");
	var mask_graphics_53 = new cjs.Graphics().p("AlYDJIIMosIClCbIoNIsg");
	var mask_graphics_54 = new cjs.Graphics().p("AlcDOIIVo2ICkCbIoVI1g");
	var mask_graphics_55 = new cjs.Graphics().p("AlgDSIIdo+ICkCbIodI+g");
	var mask_graphics_56 = new cjs.Graphics().p("AllDXIImpIIClCbIomJIg");
	var mask_graphics_57 = new cjs.Graphics().p("AlpDbIIupQIClCaIouJRg");
	var mask_graphics_58 = new cjs.Graphics().p("AltDgII3paICkCbIo3Jag");
	var mask_graphics_59 = new cjs.Graphics().p("AlxDkII/piICkCaIpAJjg");
	var mask_graphics_60 = new cjs.Graphics().p("Al2DpIJIpsIClCbIpJJsg");
	var mask_graphics_61 = new cjs.Graphics().p("Al6DuIJQp1IClCaIpRJ1g");
	var mask_graphics_62 = new cjs.Graphics().p("Al/DyIJap+ICkCbIpZJ+g");
	var mask_graphics_63 = new cjs.Graphics().p("AmDD3IJiqHIClCaIpiKHg");
	var mask_graphics_64 = new cjs.Graphics().p("AmHD7IJqqQIClCbIpqKQg");
	var mask_graphics_65 = new cjs.Graphics().p("AmLD/IJzqZICkCbIpzKZg");
	var mask_graphics_66 = new cjs.Graphics().p("AmQEEIJ8qiICkCbIp7Kig");
	var mask_graphics_67 = new cjs.Graphics().p("AmUEJIKEqsIClCbIqEKsg");
	var mask_graphics_68 = new cjs.Graphics().p("AmYENIKMq0IClCbIqNK0g");
	var mask_graphics_69 = new cjs.Graphics().p("AmcESIKVq+ICkCbIqVK+g");
	var mask_graphics_70 = new cjs.Graphics().p("AmhEXIKerHICkCbIqdLGg");
	var mask_graphics_71 = new cjs.Graphics().p("AmlEbIKmrQIClCbIqnLQg");
	var mask_graphics_72 = new cjs.Graphics().p("AmpEgIKvraICkCcIqvLZg");
	var mask_graphics_73 = new cjs.Graphics().p("AmtEkIK3riICkCbIq3Lig");
	var mask_graphics_74 = new cjs.Graphics().p("AmyEpILArsIClCcIrALrg");
	var mask_graphics_75 = new cjs.Graphics().p("Am2EtILIr0IClCbIrJL0g");
	var mask_graphics_76 = new cjs.Graphics().p("Am6EyILRr+ICkCcIrRL9g");
	var mask_graphics_77 = new cjs.Graphics().p("Am+E2ILZsGICkCbIrZMGg");
	var mask_graphics_78 = new cjs.Graphics().p("AnDE7ILisQIClCbIriMQg");
	var mask_graphics_79 = new cjs.Graphics().p("AnHE/ILqsYIClCbIrrMYg");
	var mask_graphics_80 = new cjs.Graphics().p("AnLFEILzsiICkCbIrzMig");
	var mask_graphics_81 = new cjs.Graphics().p("AnQFIIL8sqIClCbIr8Mqg");
	var mask_graphics_82 = new cjs.Graphics().p("AnUFNIMEs0IClCbIsEM0g");
	var mask_graphics_83 = new cjs.Graphics().p("AnYFRIMNs8ICkCbIsNM8g");
	var mask_graphics_84 = new cjs.Graphics().p("AndFWIMWtGICkCbIsVNGg");
	var mask_graphics_85 = new cjs.Graphics().p("AnhFbIMetPIClCbIseNOg");
	var mask_graphics_86 = new cjs.Graphics().p("AnlFfIMmtYIClCbIsnNYg");
	var mask_graphics_87 = new cjs.Graphics().p("AnpFkIMvtiICkCbIsvNig");
	var mask_graphics_88 = new cjs.Graphics().p("AnuFoIM4tqICkCaIs3Nrg");
	var mask_graphics_89 = new cjs.Graphics().p("AnyFtINAt0IClCbItBN0g");
	var mask_graphics_90 = new cjs.Graphics().p("An2FxINJt8ICkCaItJN9g");
	var mask_graphics_91 = new cjs.Graphics().p("An7F2INSuGICkCbItROGg");
	var mask_graphics_92 = new cjs.Graphics().p("An/F6INauOIClCbItaOOg");
	var mask_graphics_93 = new cjs.Graphics().p("AoDF/INiuYIClCbItjOYg");
	var mask_graphics_94 = new cjs.Graphics().p("AoHGDINrugICkCaItrOhg");
	var mask_graphics_95 = new cjs.Graphics().p("AoLGIINzuqICkCbItzOqg");
	var mask_graphics_96 = new cjs.Graphics().p("AoQGMIN8uyIClCaIt8Ozg");
	var mask_graphics_97 = new cjs.Graphics().p("AoUGRIOEu8IClCbIuEO8g");
	var mask_graphics_98 = new cjs.Graphics().p("AoYGVIONvEICkCaIuNPFg");
	var mask_graphics_99 = new cjs.Graphics().p("AocGaIOVvOICkCbIuWPOg");
	var mask_graphics_100 = new cjs.Graphics().p("AohGeIOevWIClCaIuePXg");
	var mask_graphics_101 = new cjs.Graphics().p("AolGjIOnvgICkCbIunPgg");
	var mask_graphics_102 = new cjs.Graphics().p("AoqGoIOwvqICkCbIuvPqg");
	var mask_graphics_103 = new cjs.Graphics().p("AouGsIO4vyIClCbIu4Pyg");
	var mask_graphics_104 = new cjs.Graphics().p("AoyGxIPAv8IClCbIvAP8g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:28.9,y:-34.8}).wait(1).to({graphics:mask_graphics_1,x:45.5,y:-57.7}).wait(1).to({graphics:mask_graphics_2,x:45.1,y:-57.2}).wait(1).to({graphics:mask_graphics_3,x:44.7,y:-56.8}).wait(1).to({graphics:mask_graphics_4,x:44.3,y:-56.3}).wait(1).to({graphics:mask_graphics_5,x:43.8,y:-55.8}).wait(1).to({graphics:mask_graphics_6,x:43.4,y:-55.4}).wait(1).to({graphics:mask_graphics_7,x:43,y:-54.9}).wait(1).to({graphics:mask_graphics_8,x:42.5,y:-54.5}).wait(1).to({graphics:mask_graphics_9,x:42.1,y:-54}).wait(1).to({graphics:mask_graphics_10,x:41.7,y:-53.6}).wait(1).to({graphics:mask_graphics_11,x:41.3,y:-53.1}).wait(1).to({graphics:mask_graphics_12,x:40.8,y:-52.7}).wait(1).to({graphics:mask_graphics_13,x:40.4,y:-52.2}).wait(1).to({graphics:mask_graphics_14,x:40,y:-51.8}).wait(1).to({graphics:mask_graphics_15,x:39.5,y:-51.3}).wait(1).to({graphics:mask_graphics_16,x:39.1,y:-50.9}).wait(1).to({graphics:mask_graphics_17,x:38.7,y:-50.4}).wait(1).to({graphics:mask_graphics_18,x:38.3,y:-50}).wait(1).to({graphics:mask_graphics_19,x:37.8,y:-49.5}).wait(1).to({graphics:mask_graphics_20,x:37.4,y:-49.1}).wait(1).to({graphics:mask_graphics_21,x:37,y:-48.6}).wait(1).to({graphics:mask_graphics_22,x:36.6,y:-48.2}).wait(1).to({graphics:mask_graphics_23,x:36.1,y:-47.7}).wait(1).to({graphics:mask_graphics_24,x:35.7,y:-47.3}).wait(1).to({graphics:mask_graphics_25,x:35.3,y:-46.8}).wait(1).to({graphics:mask_graphics_26,x:34.8,y:-46.3}).wait(1).to({graphics:mask_graphics_27,x:34.4,y:-45.9}).wait(1).to({graphics:mask_graphics_28,x:34,y:-45.4}).wait(1).to({graphics:mask_graphics_29,x:33.6,y:-45}).wait(1).to({graphics:mask_graphics_30,x:33.1,y:-44.5}).wait(1).to({graphics:mask_graphics_31,x:32.7,y:-44.1}).wait(1).to({graphics:mask_graphics_32,x:32.3,y:-43.6}).wait(1).to({graphics:mask_graphics_33,x:31.9,y:-43.2}).wait(1).to({graphics:mask_graphics_34,x:31.4,y:-42.7}).wait(1).to({graphics:mask_graphics_35,x:31,y:-42.3}).wait(1).to({graphics:mask_graphics_36,x:30.6,y:-41.8}).wait(1).to({graphics:mask_graphics_37,x:30.1,y:-41.4}).wait(1).to({graphics:mask_graphics_38,x:29.7,y:-40.9}).wait(1).to({graphics:mask_graphics_39,x:29.3,y:-40.5}).wait(1).to({graphics:mask_graphics_40,x:28.9,y:-40}).wait(1).to({graphics:mask_graphics_41,x:28.4,y:-39.6}).wait(1).to({graphics:mask_graphics_42,x:28,y:-39.1}).wait(1).to({graphics:mask_graphics_43,x:27.6,y:-38.7}).wait(1).to({graphics:mask_graphics_44,x:27.1,y:-38.2}).wait(1).to({graphics:mask_graphics_45,x:26.7,y:-37.8}).wait(1).to({graphics:mask_graphics_46,x:26.3,y:-37.3}).wait(1).to({graphics:mask_graphics_47,x:25.9,y:-36.9}).wait(1).to({graphics:mask_graphics_48,x:25.4,y:-36.4}).wait(1).to({graphics:mask_graphics_49,x:25,y:-35.9}).wait(1).to({graphics:mask_graphics_50,x:24.6,y:-35.5}).wait(1).to({graphics:mask_graphics_51,x:24.2,y:-35}).wait(1).to({graphics:mask_graphics_52,x:23.8,y:-34.6}).wait(1).to({graphics:mask_graphics_53,x:23.3,y:-34.1}).wait(1).to({graphics:mask_graphics_54,x:22.9,y:-33.7}).wait(1).to({graphics:mask_graphics_55,x:22.5,y:-33.2}).wait(1).to({graphics:mask_graphics_56,x:22,y:-32.8}).wait(1).to({graphics:mask_graphics_57,x:21.6,y:-32.3}).wait(1).to({graphics:mask_graphics_58,x:21.2,y:-31.9}).wait(1).to({graphics:mask_graphics_59,x:20.8,y:-31.4}).wait(1).to({graphics:mask_graphics_60,x:20.3,y:-31}).wait(1).to({graphics:mask_graphics_61,x:19.9,y:-30.5}).wait(1).to({graphics:mask_graphics_62,x:19.5,y:-30.1}).wait(1).to({graphics:mask_graphics_63,x:19,y:-29.6}).wait(1).to({graphics:mask_graphics_64,x:18.6,y:-29.1}).wait(1).to({graphics:mask_graphics_65,x:18.2,y:-28.7}).wait(1).to({graphics:mask_graphics_66,x:17.8,y:-28.3}).wait(1).to({graphics:mask_graphics_67,x:17.3,y:-27.8}).wait(1).to({graphics:mask_graphics_68,x:16.9,y:-27.4}).wait(1).to({graphics:mask_graphics_69,x:16.5,y:-26.9}).wait(1).to({graphics:mask_graphics_70,x:16.1,y:-26.5}).wait(1).to({graphics:mask_graphics_71,x:15.6,y:-26}).wait(1).to({graphics:mask_graphics_72,x:15.2,y:-25.5}).wait(1).to({graphics:mask_graphics_73,x:14.8,y:-25.1}).wait(1).to({graphics:mask_graphics_74,x:14.3,y:-24.6}).wait(1).to({graphics:mask_graphics_75,x:13.9,y:-24.2}).wait(1).to({graphics:mask_graphics_76,x:13.5,y:-23.7}).wait(1).to({graphics:mask_graphics_77,x:13.1,y:-23.3}).wait(1).to({graphics:mask_graphics_78,x:12.6,y:-22.8}).wait(1).to({graphics:mask_graphics_79,x:12.2,y:-22.4}).wait(1).to({graphics:mask_graphics_80,x:11.8,y:-21.9}).wait(1).to({graphics:mask_graphics_81,x:11.3,y:-21.5}).wait(1).to({graphics:mask_graphics_82,x:10.9,y:-21}).wait(1).to({graphics:mask_graphics_83,x:10.5,y:-20.6}).wait(1).to({graphics:mask_graphics_84,x:10.1,y:-20.1}).wait(1).to({graphics:mask_graphics_85,x:9.6,y:-19.7}).wait(1).to({graphics:mask_graphics_86,x:9.2,y:-19.2}).wait(1).to({graphics:mask_graphics_87,x:8.8,y:-18.7}).wait(1).to({graphics:mask_graphics_88,x:8.4,y:-18.3}).wait(1).to({graphics:mask_graphics_89,x:7.9,y:-17.8}).wait(1).to({graphics:mask_graphics_90,x:7.5,y:-17.4}).wait(1).to({graphics:mask_graphics_91,x:7.1,y:-16.9}).wait(1).to({graphics:mask_graphics_92,x:6.6,y:-16.5}).wait(1).to({graphics:mask_graphics_93,x:6.2,y:-16}).wait(1).to({graphics:mask_graphics_94,x:5.8,y:-15.6}).wait(1).to({graphics:mask_graphics_95,x:5.4,y:-15.1}).wait(1).to({graphics:mask_graphics_96,x:4.9,y:-14.7}).wait(1).to({graphics:mask_graphics_97,x:4.5,y:-14.2}).wait(1).to({graphics:mask_graphics_98,x:4.1,y:-13.8}).wait(1).to({graphics:mask_graphics_99,x:3.7,y:-13.3}).wait(1).to({graphics:mask_graphics_100,x:3.2,y:-12.9}).wait(1).to({graphics:mask_graphics_101,x:2.8,y:-12.4}).wait(1).to({graphics:mask_graphics_102,x:2.4,y:-12}).wait(1).to({graphics:mask_graphics_103,x:1.9,y:-11.5}).wait(1).to({graphics:mask_graphics_104,x:1.5,y:-11.1}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AnIHQQFQrCJBjd");
	this.shape.setTransform(2.8,-4.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(105));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34.2,-61.9,21.2,20.3);


(lib.ar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-27,21.4,1,1,-135);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:33.2,y:-27},89).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AiggCIA+gvIBvCTIg9Aug");
	var mask_graphics_1 = new cjs.Graphics().p("AhZgvIBEg0IBvCTIhEA0g");
	var mask_graphics_2 = new cjs.Graphics().p("AhcgtIBKg4IBvCSIhKA5g");
	var mask_graphics_3 = new cjs.Graphics().p("AhggqIBRg9IBwCSIhRA9g");
	var mask_graphics_4 = new cjs.Graphics().p("AhjgoIBYhCIBuCTIhWBCg");
	var mask_graphics_5 = new cjs.Graphics().p("AhmglIBehHIBvCSIheBHg");
	var mask_graphics_6 = new cjs.Graphics().p("AhogjIBjhLIBuCSIhjBLg");
	var mask_graphics_7 = new cjs.Graphics().p("AhsghIBqhQIBvCTIhqBQg");
	var mask_graphics_8 = new cjs.Graphics().p("AhvgeIBvhVIBwCTIhwBUg");
	var mask_graphics_9 = new cjs.Graphics().p("AhygcIB1haIBwCTIh1Bag");
	var mask_graphics_10 = new cjs.Graphics().p("Ah1gaIB7heIBwCTIh7Beg");
	var mask_graphics_11 = new cjs.Graphics().p("Ah4gXICBhjIBwCSIiBBjg");
	var mask_graphics_12 = new cjs.Graphics().p("Ah7gVICHhnIBwCSIiHBog");
	var mask_graphics_13 = new cjs.Graphics().p("Ah+gSICOhtIBvCSIiOBtg");
	var mask_graphics_14 = new cjs.Graphics().p("AiBgQICThxIBxCSIiVBxg");
	var mask_graphics_15 = new cjs.Graphics().p("AiFgOICbh1IBwCSIibB1g");
	var mask_graphics_16 = new cjs.Graphics().p("AiIgMIChh6IBwCTIihB6g");
	var mask_graphics_17 = new cjs.Graphics().p("AiLgJICnh/IBwCSIinB/g");
	var mask_graphics_18 = new cjs.Graphics().p("AiOgHICtiEIBwCTIitCEg");
	var mask_graphics_19 = new cjs.Graphics().p("AiRgFICziIIBwCSIizCJg");
	var mask_graphics_20 = new cjs.Graphics().p("AiUgCIC5iNIBwCSIi5CNg");
	var mask_graphics_21 = new cjs.Graphics().p("AiXAAIC/iSIBwCTIi/CSg");
	var mask_graphics_22 = new cjs.Graphics().p("AibACIDGiWIBxCTIjGCWg");
	var mask_graphics_23 = new cjs.Graphics().p("AieAEIDMiaIBxCTIjMCag");
	var mask_graphics_24 = new cjs.Graphics().p("AihAGIDTifIBwCUIjTCfg");
	var mask_graphics_25 = new cjs.Graphics().p("AikAJIDZikIBwCUIjZCjg");
	var mask_graphics_26 = new cjs.Graphics().p("AinALIDfipIBwCUIjfCog");
	var mask_graphics_27 = new cjs.Graphics().p("AiqAOIDliuIBwCUIjlCtg");
	var mask_graphics_28 = new cjs.Graphics().p("AitAQIDriyIBwCTIjrCyg");
	var mask_graphics_29 = new cjs.Graphics().p("AiwASIDxi3IBwCUIjxC3g");
	var mask_graphics_30 = new cjs.Graphics().p("AizAVID3i8IBwCTIj3C8g");
	var mask_graphics_31 = new cjs.Graphics().p("Ai2AXID9jAIBwCTIj9DAg");
	var mask_graphics_32 = new cjs.Graphics().p("Ai5AZIEEjEIBvCTIkEDFg");
	var mask_graphics_33 = new cjs.Graphics().p("Ai8AbIEKjJIBvCUIkKDJg");
	var mask_graphics_34 = new cjs.Graphics().p("AjAAeIERjOIBwCTIkRDOg");
	var mask_graphics_35 = new cjs.Graphics().p("AjDAgIEXjTIBwCUIkXDTg");
	var mask_graphics_36 = new cjs.Graphics().p("AjGAiIEdjXIBwCTIkdDYg");
	var mask_graphics_37 = new cjs.Graphics().p("AjJAlIEjjcIBwCTIkjDdg");
	var mask_graphics_38 = new cjs.Graphics().p("AjMAnIEpjhIBwCUIkpDhg");
	var mask_graphics_39 = new cjs.Graphics().p("AjPAqIEvjmIBwCTIkvDmg");
	var mask_graphics_40 = new cjs.Graphics().p("AjSAsIE1jrIBwCUIk1Drg");
	var mask_graphics_41 = new cjs.Graphics().p("AjWAuIE9jvIBvCUIk7Dvg");
	var mask_graphics_42 = new cjs.Graphics().p("AjZAxIFCj0IBxCTIlCD0g");
	var mask_graphics_43 = new cjs.Graphics().p("AjcAzIFJj5IBwCUIlJD4g");
	var mask_graphics_44 = new cjs.Graphics().p("AjfA1IFPj9IBwCUIlPD9g");
	var mask_graphics_45 = new cjs.Graphics().p("AjiA4IFVkCIBwCTIlVECg");
	var mask_graphics_46 = new cjs.Graphics().p("AjlA6IFbkHIBwCUIlbEHg");
	var mask_graphics_47 = new cjs.Graphics().p("AjoA8IFhkLIBwCTIlhEMg");
	var mask_graphics_48 = new cjs.Graphics().p("AjrA/IFnkQIBwCTIlnEQg");
	var mask_graphics_49 = new cjs.Graphics().p("AjvBBIFukUIBxCTIluEVg");
	var mask_graphics_50 = new cjs.Graphics().p("AjyBEIF1kaIBvCUIlzEZg");
	var mask_graphics_51 = new cjs.Graphics().p("Aj1BGIF6kfIBxCUIl7Efg");
	var mask_graphics_52 = new cjs.Graphics().p("Aj4BIIGBkjIBvCUImAEjg");
	var mask_graphics_53 = new cjs.Graphics().p("Aj7BLIGHkoIBwCTImHEog");
	var mask_graphics_54 = new cjs.Graphics().p("Aj+BNIGNksIBwCTImNEtg");
	var mask_graphics_55 = new cjs.Graphics().p("AkBBQIGTkyIBwCTImTEyg");
	var mask_graphics_56 = new cjs.Graphics().p("AkEBSIGZk2IBwCTImZE2g");
	var mask_graphics_57 = new cjs.Graphics().p("AkHBUIGfk7IBwCUImfE7g");
	var mask_graphics_58 = new cjs.Graphics().p("AkLBWIGmk/IBwCUImmE/g");
	var mask_graphics_59 = new cjs.Graphics().p("AkOBZIGtlEIBvCTImsFEg");
	var mask_graphics_60 = new cjs.Graphics().p("AkRBbIGzlJIBwCUImzFIg");
	var mask_graphics_61 = new cjs.Graphics().p("AkUBdIG5lNIBwCUIm5FNg");
	var mask_graphics_62 = new cjs.Graphics().p("AkXBgIG/lSIBwCTIm/FSg");
	var mask_graphics_63 = new cjs.Graphics().p("AkaBiIHFlXIBwCUInFFXg");
	var mask_graphics_64 = new cjs.Graphics().p("AkdBlIHLlcIBwCTInLFcg");
	var mask_graphics_65 = new cjs.Graphics().p("AkgBnIHRlgIBwCTInRFgg");
	var mask_graphics_66 = new cjs.Graphics().p("AkjBpIHXllIBwCUInXFlg");
	var mask_graphics_67 = new cjs.Graphics().p("AkmBsIHdlqIBwCUIndFpg");
	var mask_graphics_68 = new cjs.Graphics().p("AkpBuIHjlvIBxCUInlFvg");
	var mask_graphics_69 = new cjs.Graphics().p("AksBwIHplzIBxCUInrFzg");
	var mask_graphics_70 = new cjs.Graphics().p("AkwBzIHxl4IBwCTInxF4g");
	var mask_graphics_71 = new cjs.Graphics().p("AkzB1IH3l8IBwCTIn3F9g");
	var mask_graphics_72 = new cjs.Graphics().p("Ak2B4IH9mCIBwCTIn9GCg");
	var mask_graphics_73 = new cjs.Graphics().p("Ak5B6IIDmGIBwCTIoDGGg");
	var mask_graphics_74 = new cjs.Graphics().p("Ak8B8IIJmLIBwCUIoJGLg");
	var mask_graphics_75 = new cjs.Graphics().p("Ak/B/IIPmQIBwCUIoPGPg");
	var mask_graphics_76 = new cjs.Graphics().p("AlCCBIIVmUIBwCTIoVGUg");
	var mask_graphics_77 = new cjs.Graphics().p("AlGCDIIcmZIBxCUIocGZg");
	var mask_graphics_78 = new cjs.Graphics().p("AlJCFIIjmdIBvCUIohGdg");
	var mask_graphics_79 = new cjs.Graphics().p("AlMCIIIpmjIBwCUIopGig");
	var mask_graphics_80 = new cjs.Graphics().p("AlPCKIIvmnIBwCUIovGng");
	var mask_graphics_81 = new cjs.Graphics().p("AlSCNII1msIBwCTIo1Gsg");
	var mask_graphics_82 = new cjs.Graphics().p("AlVCPII7mwIBwCTIo7Gwg");
	var mask_graphics_83 = new cjs.Graphics().p("AlYCRIJBm1IBwCUIpBG1g");
	var mask_graphics_84 = new cjs.Graphics().p("AlbCUIJHm6IBwCTIpHG6g");
	var mask_graphics_85 = new cjs.Graphics().p("AleCWIJNm/IBwCUIpNG/g");
	var mask_graphics_86 = new cjs.Graphics().p("AlhCYIJTnDIBwCUIpTHDg");
	var mask_graphics_87 = new cjs.Graphics().p("AlkCbIJanIIBvCTIpaHIg");
	var mask_graphics_88 = new cjs.Graphics().p("AlnCdIJfnMIBxCTIphHNg");
	var mask_graphics_89 = new cjs.Graphics().p("AlrCgIJnnSIBwCTIpnHSg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-16.1,y:14.4}).wait(1).to({graphics:mask_graphics_1,x:-23.2,y:18.9}).wait(1).to({graphics:mask_graphics_2,x:-22.9,y:18.7}).wait(1).to({graphics:mask_graphics_3,x:-22.5,y:18.5}).wait(1).to({graphics:mask_graphics_4,x:-22.2,y:18.2}).wait(1).to({graphics:mask_graphics_5,x:-21.9,y:18}).wait(1).to({graphics:mask_graphics_6,x:-21.6,y:17.7}).wait(1).to({graphics:mask_graphics_7,x:-21.3,y:17.5}).wait(1).to({graphics:mask_graphics_8,x:-21,y:17.3}).wait(1).to({graphics:mask_graphics_9,x:-20.6,y:17}).wait(1).to({graphics:mask_graphics_10,x:-20.3,y:16.8}).wait(1).to({graphics:mask_graphics_11,x:-20,y:16.5}).wait(1).to({graphics:mask_graphics_12,x:-19.7,y:16.3}).wait(1).to({graphics:mask_graphics_13,x:-19.4,y:16.1}).wait(1).to({graphics:mask_graphics_14,x:-19.1,y:15.8}).wait(1).to({graphics:mask_graphics_15,x:-18.8,y:15.6}).wait(1).to({graphics:mask_graphics_16,x:-18.5,y:15.3}).wait(1).to({graphics:mask_graphics_17,x:-18.1,y:15.1}).wait(1).to({graphics:mask_graphics_18,x:-17.8,y:14.8}).wait(1).to({graphics:mask_graphics_19,x:-17.5,y:14.6}).wait(1).to({graphics:mask_graphics_20,x:-17.2,y:14.4}).wait(1).to({graphics:mask_graphics_21,x:-16.9,y:14.1}).wait(1).to({graphics:mask_graphics_22,x:-16.5,y:13.9}).wait(1).to({graphics:mask_graphics_23,x:-16.2,y:13.6}).wait(1).to({graphics:mask_graphics_24,x:-15.9,y:13.4}).wait(1).to({graphics:mask_graphics_25,x:-15.6,y:13.2}).wait(1).to({graphics:mask_graphics_26,x:-15.3,y:12.9}).wait(1).to({graphics:mask_graphics_27,x:-15,y:12.7}).wait(1).to({graphics:mask_graphics_28,x:-14.6,y:12.4}).wait(1).to({graphics:mask_graphics_29,x:-14.3,y:12.2}).wait(1).to({graphics:mask_graphics_30,x:-14,y:12}).wait(1).to({graphics:mask_graphics_31,x:-13.7,y:11.7}).wait(1).to({graphics:mask_graphics_32,x:-13.4,y:11.5}).wait(1).to({graphics:mask_graphics_33,x:-13.1,y:11.2}).wait(1).to({graphics:mask_graphics_34,x:-12.8,y:11}).wait(1).to({graphics:mask_graphics_35,x:-12.5,y:10.7}).wait(1).to({graphics:mask_graphics_36,x:-12.1,y:10.5}).wait(1).to({graphics:mask_graphics_37,x:-11.8,y:10.3}).wait(1).to({graphics:mask_graphics_38,x:-11.5,y:10}).wait(1).to({graphics:mask_graphics_39,x:-11.2,y:9.8}).wait(1).to({graphics:mask_graphics_40,x:-10.9,y:9.5}).wait(1).to({graphics:mask_graphics_41,x:-10.5,y:9.3}).wait(1).to({graphics:mask_graphics_42,x:-10.2,y:9}).wait(1).to({graphics:mask_graphics_43,x:-9.9,y:8.8}).wait(1).to({graphics:mask_graphics_44,x:-9.6,y:8.6}).wait(1).to({graphics:mask_graphics_45,x:-9.3,y:8.3}).wait(1).to({graphics:mask_graphics_46,x:-9,y:8.1}).wait(1).to({graphics:mask_graphics_47,x:-8.7,y:7.9}).wait(1).to({graphics:mask_graphics_48,x:-8.4,y:7.6}).wait(1).to({graphics:mask_graphics_49,x:-8,y:7.4}).wait(1).to({graphics:mask_graphics_50,x:-7.7,y:7.1}).wait(1).to({graphics:mask_graphics_51,x:-7.4,y:6.9}).wait(1).to({graphics:mask_graphics_52,x:-7.1,y:6.6}).wait(1).to({graphics:mask_graphics_53,x:-6.8,y:6.4}).wait(1).to({graphics:mask_graphics_54,x:-6.4,y:6.2}).wait(1).to({graphics:mask_graphics_55,x:-6.1,y:5.9}).wait(1).to({graphics:mask_graphics_56,x:-5.8,y:5.7}).wait(1).to({graphics:mask_graphics_57,x:-5.5,y:5.4}).wait(1).to({graphics:mask_graphics_58,x:-5.2,y:5.2}).wait(1).to({graphics:mask_graphics_59,x:-4.9,y:4.9}).wait(1).to({graphics:mask_graphics_60,x:-4.6,y:4.7}).wait(1).to({graphics:mask_graphics_61,x:-4.3,y:4.5}).wait(1).to({graphics:mask_graphics_62,x:-3.9,y:4.2}).wait(1).to({graphics:mask_graphics_63,x:-3.6,y:4}).wait(1).to({graphics:mask_graphics_64,x:-3.3,y:3.7}).wait(1).to({graphics:mask_graphics_65,x:-3,y:3.5}).wait(1).to({graphics:mask_graphics_66,x:-2.7,y:3.3}).wait(1).to({graphics:mask_graphics_67,x:-2.4,y:3}).wait(1).to({graphics:mask_graphics_68,x:-2,y:2.8}).wait(1).to({graphics:mask_graphics_69,x:-1.7,y:2.5}).wait(1).to({graphics:mask_graphics_70,x:-1.4,y:2.3}).wait(1).to({graphics:mask_graphics_71,x:-1.1,y:2.1}).wait(1).to({graphics:mask_graphics_72,x:-0.8,y:1.8}).wait(1).to({graphics:mask_graphics_73,x:-0.4,y:1.6}).wait(1).to({graphics:mask_graphics_74,x:-0.1,y:1.3}).wait(1).to({graphics:mask_graphics_75,x:0.2,y:1.1}).wait(1).to({graphics:mask_graphics_76,x:0.5,y:0.8}).wait(1).to({graphics:mask_graphics_77,x:0.8,y:0.6}).wait(1).to({graphics:mask_graphics_78,x:1.1,y:0.4}).wait(1).to({graphics:mask_graphics_79,x:1.4,y:0.1}).wait(1).to({graphics:mask_graphics_80,x:1.7,y:-0.1}).wait(1).to({graphics:mask_graphics_81,x:2.1,y:-0.4}).wait(1).to({graphics:mask_graphics_82,x:2.4,y:-0.6}).wait(1).to({graphics:mask_graphics_83,x:2.7,y:-0.8}).wait(1).to({graphics:mask_graphics_84,x:3,y:-1.1}).wait(1).to({graphics:mask_graphics_85,x:3.3,y:-1.3}).wait(1).to({graphics:mask_graphics_86,x:3.6,y:-1.6}).wait(1).to({graphics:mask_graphics_87,x:4,y:-1.8}).wait(1).to({graphics:mask_graphics_88,x:4.3,y:-2}).wait(1).to({graphics:mask_graphics_89,x:4.6,y:-2.3}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AjtEeQCxkJEqkx");
	this.shape.setTransform(3.5,-4.5,1,1,-167.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90));

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
(lib.WS_Cursive_h = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_725 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(725).call(this.frame_725).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(121.4,349.1,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[121.4,349,149,322.8,176.6,296.6,215.4,265.9,250.9,222.7,286.4,179.6,292.6,148.7,295.2,135.7,294,128.9,292.8,122.1,287.8,121.6]}},135).wait(16).to({startPosition:0},0).to({guide:{path:[287.9,121,286.2,120.7,284.1,121.2,269.5,124.7,253.9,147.7,238.2,170.6,218.6,214.7,199,258.8,176.6,296.7,155.8,334.5,140.1,365.9,124.5,396.7,106.7,428.9]}},179).wait(16).to({startPosition:0},0).to({x:150.9,y:342.5},49).to({guide:{path:[151.1,342.6,191.1,289.9,231.3,285.7,251.7,283.6,262.3,287.5,272.8,291.4,273.5,301.3,274.9,321.2,251.2,363.6,239.4,384.8,237.2,398.8,235,412.9,242.4,419.7,257.4,433.3,289.1,425.9,320.8,418.5,362.8,386,404.6,353.7,438.7,316.3]}},240).wait(16).to({startPosition:0},0).to({guide:{path:[438.8,316.4,438,305,437.5,291.5,437,276.4,443.5,262.9,450,249.4,460.8,239.6,471.5,229.8,484.2,223.3,498.5,216,513.1,222.4,526.3,228.1,539.2,234.4,552.7,240.9,567,245.2,580.9,249.4,595.4,252.3,610.2,256.6,615.1,249.2,620,241.8,623.8,236.8,626.6,233.1,628.3,230.7]}},65).wait(1));

	// Layer 9
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(290.9,123.1,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},135).wait(16).to({_off:false,x:104.9,y:430.1},0).to({_off:true},179).wait(16).to({_off:false,x:439.9,y:315.1},0).to({_off:true},289).wait(82));

	// Layer 19
	this.instance_1 = new lib.ar2("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(182.5,372.2,1,1,0,-100.8,79.2,-1.6,-4.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(355).to({_off:false},0).wait(371));

	// Layer 16 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_550 = new cjs.Graphics().p("AOUbsIB5hXIGJIlIh5BXg");
	var mask_graphics_551 = new cjs.Graphics().p("AkJjhICLhiIGHIkIiKBjg");
	var mask_graphics_552 = new cjs.Graphics().p("AkRjbICchuIGHIjIibBwg");
	var mask_graphics_553 = new cjs.Graphics().p("AkajVICth6IGIIjIitB8g");
	var mask_graphics_554 = new cjs.Graphics().p("AkjjPIC/iGIGHIjIi9CIg");
	var mask_graphics_555 = new cjs.Graphics().p("AkrjKIDQiRIGHIiIjOCVg");
	var mask_graphics_556 = new cjs.Graphics().p("Ak0jEIDiidIGHIiIjgChg");
	var mask_graphics_557 = new cjs.Graphics().p("Ak9i+IDzipIGIIhIjxCug");
	var mask_graphics_558 = new cjs.Graphics().p("AlFi4IEEi1IGHIhIkCC6g");
	var mask_graphics_559 = new cjs.Graphics().p("AlOizIEWjAIGHIhIkTDGg");
	var mask_graphics_560 = new cjs.Graphics().p("AlWitIEnjMIGGIgIkjDTg");
	var mask_graphics_561 = new cjs.Graphics().p("AlfinIE4jYIGHIfIk1Dgg");
	var mask_graphics_562 = new cjs.Graphics().p("AloihIFKjkIGHIgIlGDrg");
	var mask_graphics_563 = new cjs.Graphics().p("AlxibIFcjwIGHIfIlYD4g");
	var mask_graphics_564 = new cjs.Graphics().p("Al5iVIFsj8IGHIeIloEFg");
	var mask_graphics_565 = new cjs.Graphics().p("AmCiQIF+kHIGHIeIl5ERg");
	var mask_graphics_566 = new cjs.Graphics().p("AmLiKIGQkTIGGIeImKEdg");
	var mask_graphics_567 = new cjs.Graphics().p("AmTiEIGgkfIGHIdImaEqg");
	var mask_graphics_568 = new cjs.Graphics().p("Amch/IGykqIGHIcImsE3g");
	var mask_graphics_569 = new cjs.Graphics().p("Amlh5IHDk2IGIIdIm9FCg");
	var mask_graphics_570 = new cjs.Graphics().p("AmthzIHUlCIGHIcInOFPg");
	var mask_graphics_571 = new cjs.Graphics().p("Am2htIHmlOIGHIcInfFbg");
	var mask_graphics_572 = new cjs.Graphics().p("Am/hnIH3laIGHIbInwFog");
	var mask_graphics_573 = new cjs.Graphics().p("AnHhiIIIllIGHIbIoBF0g");
	var mask_graphics_574 = new cjs.Graphics().p("AnQhcIIalyIGHIbIoTGCg");
	var mask_graphics_575 = new cjs.Graphics().p("AnYhWIIrl+IGGIaIojGOg");
	var mask_graphics_576 = new cjs.Graphics().p("AnhhRII9mIIGGIZIo0Gag");
	var mask_graphics_577 = new cjs.Graphics().p("AnqhLIJOmVIGHIaIpGGng");
	var mask_graphics_578 = new cjs.Graphics().p("AnzhFIJgmhIGHIZIpXGzg");
	var mask_graphics_579 = new cjs.Graphics().p("An7hAIJxmrIGGIYIpoG/g");
	var mask_graphics_580 = new cjs.Graphics().p("AoEg5IKCm5IGHIZIp5HMg");
	var mask_graphics_581 = new cjs.Graphics().p("AoNg0IKUnEIGHIYIqKHYg");
	var mask_graphics_582 = new cjs.Graphics().p("AoWgvIKmnOIGGIWIqaHlg");
	var mask_graphics_583 = new cjs.Graphics().p("AoegoIK3ncIGGIXIqsHyg");
	var mask_graphics_584 = new cjs.Graphics().p("AongjILInnIGHIXIq+H+g");
	var mask_graphics_585 = new cjs.Graphics().p("AowgdILanzIGHIXIrPIKg");
	var mask_graphics_586 = new cjs.Graphics().p("Ao4gXILrn/IGGIWIrfIXg");
	var mask_graphics_587 = new cjs.Graphics().p("ApBgRIL9oLIGGIXIrxIig");
	var mask_graphics_588 = new cjs.Graphics().p("ApKgMIMOoWIGGIWIsBIvg");
	var mask_graphics_589 = new cjs.Graphics().p("ApSgGIMfoiIGGIWIsTI7g");
	var mask_graphics_590 = new cjs.Graphics().p("ApbAAIMxouIGGIVIskJIg");
	var mask_graphics_591 = new cjs.Graphics().p("ApjAFINCo5IGFIVIs0JUg");
	var mask_graphics_592 = new cjs.Graphics().p("ApsAKINTpEIGGIVItGJgg");
	var mask_graphics_593 = new cjs.Graphics().p("Ap1AQINlpQIGGIUItYJtg");
	var mask_graphics_594 = new cjs.Graphics().p("Ap9AWIN1pcIGHIUItpJ5g");
	var mask_graphics_595 = new cjs.Graphics().p("AqGAcIOHpoIGGITIt5KGg");
	var mask_graphics_596 = new cjs.Graphics().p("AqPAiIOap0IGFITIuLKSg");
	var mask_graphics_597 = new cjs.Graphics().p("AqYAnIOsp/IGFITIucKeg");
	var mask_graphics_598 = new cjs.Graphics().p("AqgAtIO8qLIGFISIutKrg");
	var mask_graphics_599 = new cjs.Graphics().p("AqpAzIPOqXIGFISIu+K3g");
	var mask_graphics_600 = new cjs.Graphics().p("AqxA4IPeqiIGFISIvPLDg");
	var mask_graphics_601 = new cjs.Graphics().p("Aq6A/IPwqvIGFIRIvgLQg");
	var mask_graphics_602 = new cjs.Graphics().p("ArDBEIQCq6IGFIQIvxLdg");
	var mask_graphics_603 = new cjs.Graphics().p("ArLBKIQTrGIGEIQIwCLpg");
	var mask_graphics_604 = new cjs.Graphics().p("ArUBQIQkrSIGFIPIwTL2g");
	var mask_graphics_605 = new cjs.Graphics().p("ArdBVIQ2rdIGFIPIwlMCg");
	var mask_graphics_606 = new cjs.Graphics().p("ArlBbIRHrpIGFIPIw2MOg");
	var mask_graphics_607 = new cjs.Graphics().p("AruBhIRZr1IGEIPIxGMag");
	var mask_graphics_608 = new cjs.Graphics().p("Ar3BmIRqsAIGFIOIxXMng");
	var mask_graphics_609 = new cjs.Graphics().p("Ar/BtIR7sNIGEIOIxoMzg");
	var mask_graphics_610 = new cjs.Graphics().p("AsIByISNsYIGEINIx6NAg");
	var mask_graphics_611 = new cjs.Graphics().p("AsRB4ISfskIGEINIyLNMg");
	var mask_graphics_612 = new cjs.Graphics().p("AsaB+ISwswIGFIMIycNZg");
	var mask_graphics_613 = new cjs.Graphics().p("AsiCDITBs7IGEIMIytNlg");
	var mask_graphics_614 = new cjs.Graphics().p("AsrCJITTtHIGEILIy+Nyg");
	var mask_graphics_615 = new cjs.Graphics().p("As0CPITktTIGFILIzQN+g");
	var mask_graphics_616 = new cjs.Graphics().p("As9CVIT2tfIGEILIzgOKg");
	var mask_graphics_617 = new cjs.Graphics().p("AtFCaIUHtqIGEIKIzxOXg");
	var mask_graphics_618 = new cjs.Graphics().p("AtOCgIUZt2IGEIKI0DOjg");
	var mask_graphics_619 = new cjs.Graphics().p("AtWClIUquCIGDIKI0UOwg");
	var mask_graphics_620 = new cjs.Graphics().p("AtfCsIU7uOIGEIJI0lO8g");
	var mask_graphics_621 = new cjs.Graphics().p("AtoCxIVNuaIGEIJI02PKg");
	var mask_graphics_622 = new cjs.Graphics().p("AtwC3IVeumIGEIJI1IPWg");
	var mask_graphics_623 = new cjs.Graphics().p("At5C9IVvuyIGEIJI1YPig");
	var mask_graphics_624 = new cjs.Graphics().p("AuCDDIWBu+IGEIII1qPvg");
	var mask_graphics_625 = new cjs.Graphics().p("AuKDIIWRvJIGEIII16P7g");
	var mask_graphics_626 = new cjs.Graphics().p("AuTDOIWkvVIGDIHI2MQIg");
	var mask_graphics_627 = new cjs.Graphics().p("AucDUIW2vhIGDIHI2dQUg");
	var mask_graphics_628 = new cjs.Graphics().p("AukDaIXGvtIGDIGI2tQhg");
	var mask_graphics_629 = new cjs.Graphics().p("AutDfIXYv4IGDIGI2+Qtg");
	var mask_graphics_630 = new cjs.Graphics().p("Au2DlIXqwEIGDIGI3QQ5g");
	var mask_graphics_631 = new cjs.Graphics().p("Au+DrIX6wQIGDIFI3gRGg");
	var mask_graphics_632 = new cjs.Graphics().p("AvHDxIYMwcIGDIFI3yRSg");
	var mask_graphics_633 = new cjs.Graphics().p("AvQD2IYewnIGDIEI4DRfg");
	var mask_graphics_634 = new cjs.Graphics().p("AvYD8IYvwzIGDIEI4URrg");
	var mask_graphics_635 = new cjs.Graphics().p("AvhECIZAw/IGDIDI4lR4g");
	var mask_graphics_636 = new cjs.Graphics().p("AvqEIIZSxLIGDIDI43SEg");
	var mask_graphics_637 = new cjs.Graphics().p("AvyENIZjxWIGCIDI5HSQg");
	var mask_graphics_638 = new cjs.Graphics().p("Av7EUIZ1xjIGCICI5YSdg");
	var mask_graphics_639 = new cjs.Graphics().p("AwEEZIaGxuIGDICI5qSpg");
	var mask_graphics_640 = new cjs.Graphics().p("AwMEfIaXx6IGCICI56S1g");
	var mask_graphics_641 = new cjs.Graphics().p("AwVElIaoyGIGDIBI6MTCg");
	var mask_graphics_642 = new cjs.Graphics().p("Aw1FJIbmzGIGFINI7UTug");
	var mask_graphics_643 = new cjs.Graphics().p("AxVFtIck0GIGHIZI8aUag");
	var mask_graphics_644 = new cjs.Graphics().p("ABXc1Idi1IIGJIlI9jVIg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(550).to({graphics:mask_graphics_550,x:143,y:232.1}).wait(1).to({graphics:mask_graphics_551,x:261.3,y:431.9}).wait(1).to({graphics:mask_graphics_552,x:262.3,y:431.5}).wait(1).to({graphics:mask_graphics_553,x:263.3,y:431}).wait(1).to({graphics:mask_graphics_554,x:264.3,y:430.6}).wait(1).to({graphics:mask_graphics_555,x:265.2,y:430.1}).wait(1).to({graphics:mask_graphics_556,x:266.2,y:429.7}).wait(1).to({graphics:mask_graphics_557,x:267.2,y:429.2}).wait(1).to({graphics:mask_graphics_558,x:268.2,y:428.8}).wait(1).to({graphics:mask_graphics_559,x:269.2,y:428.3}).wait(1).to({graphics:mask_graphics_560,x:270.2,y:427.9}).wait(1).to({graphics:mask_graphics_561,x:271.1,y:427.4}).wait(1).to({graphics:mask_graphics_562,x:272.1,y:427}).wait(1).to({graphics:mask_graphics_563,x:273.1,y:426.5}).wait(1).to({graphics:mask_graphics_564,x:274.1,y:426.1}).wait(1).to({graphics:mask_graphics_565,x:275.1,y:425.6}).wait(1).to({graphics:mask_graphics_566,x:276,y:425.2}).wait(1).to({graphics:mask_graphics_567,x:277,y:424.7}).wait(1).to({graphics:mask_graphics_568,x:278,y:424.3}).wait(1).to({graphics:mask_graphics_569,x:279,y:423.8}).wait(1).to({graphics:mask_graphics_570,x:279.9,y:423.3}).wait(1).to({graphics:mask_graphics_571,x:280.9,y:422.9}).wait(1).to({graphics:mask_graphics_572,x:281.9,y:422.4}).wait(1).to({graphics:mask_graphics_573,x:282.9,y:422}).wait(1).to({graphics:mask_graphics_574,x:283.9,y:421.6}).wait(1).to({graphics:mask_graphics_575,x:284.9,y:421.1}).wait(1).to({graphics:mask_graphics_576,x:285.8,y:420.7}).wait(1).to({graphics:mask_graphics_577,x:286.8,y:420.2}).wait(1).to({graphics:mask_graphics_578,x:287.8,y:419.8}).wait(1).to({graphics:mask_graphics_579,x:288.8,y:419.3}).wait(1).to({graphics:mask_graphics_580,x:289.8,y:418.9}).wait(1).to({graphics:mask_graphics_581,x:290.7,y:418.4}).wait(1).to({graphics:mask_graphics_582,x:291.7,y:418}).wait(1).to({graphics:mask_graphics_583,x:292.7,y:417.5}).wait(1).to({graphics:mask_graphics_584,x:293.7,y:417}).wait(1).to({graphics:mask_graphics_585,x:294.7,y:416.6}).wait(1).to({graphics:mask_graphics_586,x:295.6,y:416.1}).wait(1).to({graphics:mask_graphics_587,x:296.6,y:415.7}).wait(1).to({graphics:mask_graphics_588,x:297.6,y:415.2}).wait(1).to({graphics:mask_graphics_589,x:298.6,y:414.8}).wait(1).to({graphics:mask_graphics_590,x:299.6,y:414.3}).wait(1).to({graphics:mask_graphics_591,x:300.6,y:413.9}).wait(1).to({graphics:mask_graphics_592,x:301.5,y:413.4}).wait(1).to({graphics:mask_graphics_593,x:302.5,y:413}).wait(1).to({graphics:mask_graphics_594,x:303.5,y:412.5}).wait(1).to({graphics:mask_graphics_595,x:304.5,y:412.1}).wait(1).to({graphics:mask_graphics_596,x:305.4,y:411.6}).wait(1).to({graphics:mask_graphics_597,x:306.4,y:411.2}).wait(1).to({graphics:mask_graphics_598,x:307.4,y:410.7}).wait(1).to({graphics:mask_graphics_599,x:308.4,y:410.3}).wait(1).to({graphics:mask_graphics_600,x:309.4,y:409.8}).wait(1).to({graphics:mask_graphics_601,x:310.3,y:409.4}).wait(1).to({graphics:mask_graphics_602,x:311.3,y:408.9}).wait(1).to({graphics:mask_graphics_603,x:312.3,y:408.5}).wait(1).to({graphics:mask_graphics_604,x:313.3,y:408}).wait(1).to({graphics:mask_graphics_605,x:314.3,y:407.6}).wait(1).to({graphics:mask_graphics_606,x:315.3,y:407.1}).wait(1).to({graphics:mask_graphics_607,x:316.2,y:406.7}).wait(1).to({graphics:mask_graphics_608,x:317.2,y:406.2}).wait(1).to({graphics:mask_graphics_609,x:318.2,y:405.7}).wait(1).to({graphics:mask_graphics_610,x:319.2,y:405.3}).wait(1).to({graphics:mask_graphics_611,x:320.2,y:404.8}).wait(1).to({graphics:mask_graphics_612,x:321.1,y:404.4}).wait(1).to({graphics:mask_graphics_613,x:322.1,y:403.9}).wait(1).to({graphics:mask_graphics_614,x:323.1,y:403.5}).wait(1).to({graphics:mask_graphics_615,x:324.1,y:403}).wait(1).to({graphics:mask_graphics_616,x:325.1,y:402.6}).wait(1).to({graphics:mask_graphics_617,x:326.1,y:402.1}).wait(1).to({graphics:mask_graphics_618,x:327,y:401.7}).wait(1).to({graphics:mask_graphics_619,x:328,y:401.3}).wait(1).to({graphics:mask_graphics_620,x:329,y:400.8}).wait(1).to({graphics:mask_graphics_621,x:330,y:400.4}).wait(1).to({graphics:mask_graphics_622,x:331,y:399.9}).wait(1).to({graphics:mask_graphics_623,x:331.9,y:399.4}).wait(1).to({graphics:mask_graphics_624,x:332.9,y:399}).wait(1).to({graphics:mask_graphics_625,x:333.9,y:398.5}).wait(1).to({graphics:mask_graphics_626,x:334.9,y:398.1}).wait(1).to({graphics:mask_graphics_627,x:335.8,y:397.6}).wait(1).to({graphics:mask_graphics_628,x:336.8,y:397.2}).wait(1).to({graphics:mask_graphics_629,x:337.8,y:396.7}).wait(1).to({graphics:mask_graphics_630,x:338.8,y:396.3}).wait(1).to({graphics:mask_graphics_631,x:339.8,y:395.8}).wait(1).to({graphics:mask_graphics_632,x:340.8,y:395.4}).wait(1).to({graphics:mask_graphics_633,x:341.7,y:394.9}).wait(1).to({graphics:mask_graphics_634,x:342.7,y:394.5}).wait(1).to({graphics:mask_graphics_635,x:343.7,y:394}).wait(1).to({graphics:mask_graphics_636,x:344.7,y:393.6}).wait(1).to({graphics:mask_graphics_637,x:345.7,y:393.1}).wait(1).to({graphics:mask_graphics_638,x:346.6,y:392.7}).wait(1).to({graphics:mask_graphics_639,x:347.6,y:392.2}).wait(1).to({graphics:mask_graphics_640,x:348.6,y:391.8}).wait(1).to({graphics:mask_graphics_641,x:349.6,y:391.3}).wait(1).to({graphics:mask_graphics_642,x:353,y:388.8}).wait(1).to({graphics:mask_graphics_643,x:356.4,y:386.3}).wait(1).to({graphics:mask_graphics_644,x:237,y:239.4}).wait(82));

	// Layer 15
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(20,1,1).p("A2khtQHfo9GPgtQGPgtgSDNQgTDNjdGnQjdGpCOCWQCPCWE5hLQE3hMGllEQGklEFVl4");
	this.shape_1.setTransform(294.5,355);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(550).to({_off:false},0).wait(176));

	// Layer 14 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_495 = new cjs.Graphics().p("Atva+QAAsJIkokQIlolMJAAQMJAAIkIlQImIkAAMJg");
	var mask_1_graphics_496 = new cjs.Graphics().p("AlaGVQIforMJgIQMJgJIqIeQIsIeAJMJMg6lAArQgJsJIeorg");
	var mask_1_graphics_497 = new cjs.Graphics().p("AloGaQIYoxMIgSQMJgRIxIYQIyIXASMJMg6kABWQgSsJIYoxg");
	var mask_1_graphics_498 = new cjs.Graphics().p("Al3GfQISo3MIgbQMJgaI3IRQI4IRAaMJMg6iACAQgbsIIRo3g");
	var mask_1_graphics_499 = new cjs.Graphics().p("AmFGkQILo9MIgkQMJgjI8ILQI/ILAjMIMg6hACrQgksIILo9g");
	var mask_1_graphics_500 = new cjs.Graphics().p("AmTGpQIFpDMIgsQMHgtJDIFQJEIEAsMIMg6eADWQgtsIIEpDg");
	var mask_1_graphics_501 = new cjs.Graphics().p("AmgGvQH+pJMHg2QMHg1JJH+QJKH+A1MHMg6cAEAQg2sHH+pIg");
	var mask_1_graphics_502 = new cjs.Graphics().p("AmtG0QH3pPMGg+QMHg+JOH4QJQH2A+MHMg6ZAErQg+sHH3pOg");
	var mask_1_graphics_503 = new cjs.Graphics().p("Am6G6QHwpVMGhGQMGhHJUHwQJVHwBHMGMg6VAFWQhHsGHwpUg");
	var mask_1_graphics_504 = new cjs.Graphics().p("AnHHAQHqpaMFhQQMFhQJZHqQJbHpBQMFMg6RAGAQhQsFHppZg");
	var mask_1_graphics_505 = new cjs.Graphics().p("AnTHGQHjpgMEhYQMEhZJfHjQJhHiBYMEMg6NAGrQhYsEHipfg");
	var mask_1_graphics_506 = new cjs.Graphics().p("AnfHMQHdplMChhQMDhiJkHcQJmHbBiMDMg6IAHVQhhsCHbplg");
	var mask_1_graphics_507 = new cjs.Graphics().p("AnqHSQHVpqMBhqQMChqJqHVQJrHUBqMBMg6CAIAQhqsCHVpqg");
	var mask_1_graphics_508 = new cjs.Graphics().p("An2HZQHPpwL/hzQMBhzJvHOQJxHNBzMBMg58AIqQhzsBHNpvg");
	var mask_1_graphics_509 = new cjs.Graphics().p("AoBHgQHIp2L+h7QL/h8J1HHQJ2HGB7L/Mg51AJUQh8r/HGp0g");
	var mask_1_graphics_510 = new cjs.Graphics().p("AoLHnQHAp7L9iEQL9iEJ6G/QJ7G/CFL9Mg5vAJ/QiEr+G/p5g");
	var mask_1_graphics_511 = new cjs.Graphics().p("AoVHuQG4qAL7iNQL9iNJ+G4QKBG4CNL8Mg5nAKoQiNr8G4p+g");
	var mask_1_graphics_512 = new cjs.Graphics().p("AofH1QGxqFL5iVQL7iWKEGyQKFGvCWL6Mg5fALTQiWr7GxqDg");
	var mask_1_graphics_513 = new cjs.Graphics().p("AopH8QGqqJL4ifQL4ieKJGqQKKGoCfL5Mg5XAL8Qier4GpqJg");
	var mask_1_graphics_514 = new cjs.Graphics().p("AoyIEQGiqOL2ioQL3inKNGjQKPGhCnL2Mg5NAMnQinr3GiqNg");
	var mask_1_graphics_515 = new cjs.Graphics().p("Ao8ILQGcqTL0ivQL0iwKTGbQKTGZCwL1Mg5EANQQiwr1GaqSg");
	var mask_1_graphics_516 = new cjs.Graphics().p("ApEITQGTqXLyi5QLzi4KXGUQKYGRC5LzMg46AN6Qi5rzGTqXg");
	var mask_1_graphics_517 = new cjs.Graphics().p("ApNIbQGMqcLwjBQLxjBKbGMQKdGKDBLxMg4wAOjQjArxGKqbg");
	var mask_1_graphics_518 = new cjs.Graphics().p("ApVIjQGFqgLtjKQLvjJKgGEQKhGCDJLvMg4kAPMQjKruGDqgg");
	var mask_1_graphics_519 = new cjs.Graphics().p("ApcIrQF8qkLrjSQLsjTKlF9QKlF7DSLsMg4ZAP2QjSrsF8qlg");
	var mask_1_graphics_520 = new cjs.Graphics().p("ApkI0QF1qpLpjbQLpjaKpF1QKqFyDbLqMg4OAQfQjbrqF0qog");
	var mask_1_graphics_521 = new cjs.Graphics().p("AprI9QFtquLmjjQLnjjKtFtQKuFrDkLnMg4CARIQjjrnFsqsg");
	var mask_1_graphics_522 = new cjs.Graphics().p("ApxJFQFlqxLjjsQLljrKxFlQKyFjDrLlMg30ARwQjsrkFlqxg");
	var mask_1_graphics_523 = new cjs.Graphics().p("Ap4JOQFdq1Lhj0QLij0K1FdQK2FbD0LiMg3nASaQj0riFcq1g");
	var mask_1_graphics_524 = new cjs.Graphics().p("Ap+JXQFVq5Lej9QLfj8K5FWQK6FTD9LfMg3aATCQj8rfFUq5g");
	var mask_1_graphics_525 = new cjs.Graphics().p("AqEJgQFOq9LbkFQLckEK9FNQK9FLEFLcMg3LATrQkFrcFMq9g");
	var mask_1_graphics_526 = new cjs.Graphics().p("AqJJqQFFrBLYkOQLZkNLBFGQLBFDEOLZMg29AUTQkOrZFFrAg");
	var mask_1_graphics_527 = new cjs.Graphics().p("AqOJzQE9rFLVkVQLWkVLEE9QLFE8EWLVMg2uAU7QkWrWE9rEg");
	var mask_1_graphics_528 = new cjs.Graphics().p("AqTJ9QE1rJLSkdQLTkeLIE2QLIE0EeLRMg2eAVjQkerTE0rHg");
	var mask_1_graphics_529 = new cjs.Graphics().p("AqXKHQEtrMLOkmQLPkmLMEuQLMErEmLOMg2PAWLQklrQEsrKg");
	var mask_1_graphics_530 = new cjs.Graphics().p("AqbKQQElrPLKkuQLMkuLPElQLQEkEuLLMg1+AWyQkurMEkrPg");
	var mask_1_graphics_531 = new cjs.Graphics().p("AqfKaQEdrSLHk2QLIk2LTEdQLTEbE2LHMg1uAXZQk2rIEcrSg");
	var mask_1_graphics_532 = new cjs.Graphics().p("AqiKlQEUrWLEk+QLFk/LVEVQLWETE+LEMg1cAYAQk+rFEUrUg");
	var mask_1_graphics_533 = new cjs.Graphics().p("AqlKvQEMrZLAlGQLBlHLYENQLaELFGLAMg1KAYnQlHrBEMrYg");
	var mask_1_graphics_534 = new cjs.Graphics().p("AqoK5QEErbK8lPQK9lOLcEEQLcECFOK9Mg04AZOQlOq+EDrbg");
	var mask_1_graphics_535 = new cjs.Graphics().p("AqqLEQD7rfK4lWQK6lXLeD8QLfD6FXK5Mg0mAZ0QlWq5D7reg");
	var mask_1_graphics_536 = new cjs.Graphics().p("AqsLPQDzriK0leQK2leLhDzQLiDyFeK0Mg0SAabQlfq2Dzrgg");
	var mask_1_graphics_537 = new cjs.Graphics().p("AquLZQDqrkKxlmQKxlmLkDrQLlDpFmKxMgz/AbAQlmqxDqrkg");
	var mask_1_graphics_538 = new cjs.Graphics().p("AqvLkQDirmKsluQKtluLnDiQLnDhFuKsMgzrAbnQluquDirmg");
	var mask_1_graphics_539 = new cjs.Graphics().p("AqwLwQDZrrKol1QKql2LpDbQLpDYF2KoMgzWAcMQl2qpDZrog");
	var mask_1_graphics_540 = new cjs.Graphics().p("AqxL7QDRrtKkl9QKll9LrDRQLsDQF+KkMgzCAcxQl9qkDQrrg");
	var mask_1_graphics_541 = new cjs.Graphics().p("AqxMGQDIrvKgmEQKgmGLuDKQLuDHGGKfMgytAdXQmFqhDIrtg");
	var mask_1_graphics_542 = new cjs.Graphics().p("AqxMSQDAryKbmMQKcmNLwDBQLwC+GNKbMgyXAd8QmMqcC/rvg");
	var mask_1_graphics_543 = new cjs.Graphics().p("AqxMdQC3rzKXmUQKXmULzC4QLyC1GVKXMgyBAegQmUqXC2ryg");
	var mask_1_graphics_544 = new cjs.Graphics().p("AqwMpQCvr2KRmbQKTmcL0CwQL1CtGcKSMgxqAfEQmcqTCurzg");
	var mask_1_graphics_545 = new cjs.Graphics().p("AqvM1QCmr4KNmiQKOmkL2CnQL3CkGkKNMgxUAfpQmjqOClr1g");
	var mask_1_graphics_546 = new cjs.Graphics().p("AquNBQCer6KImqQKJmrL4CeQL5CcGrKJMgw8AgMQmrqJCcr3g");
	var mask_1_graphics_547 = new cjs.Graphics().p("AqsNNQCVr7KDmyQKEmyL6CVQL6CUGzKDMgwlAgwQmyqECUr5g");
	var mask_1_graphics_548 = new cjs.Graphics().p("AqqNZQCMr9J+m4QKAm6L7CNQL8CKG6J+MgwMAhUQm6p/CLr7g");
	var mask_1_graphics_549 = new cjs.Graphics().p("AqnNlQCDr+J5nAQJ6nBL9CEQL+CCHBJ5Mgv0Ah3QnBp7CDr8g");
	var mask_1_graphics_550 = new cjs.Graphics().p("AqlNxQB7r/J0nHQJ1nJL+B8QL/B5HIJ0MgvaAiZQnJp1B6r+g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(495).to({graphics:mask_1_graphics_495,x:287,y:172.6}).wait(1).to({graphics:mask_1_graphics_496,x:287,y:173.7}).wait(1).to({graphics:mask_1_graphics_497,x:287,y:174.8}).wait(1).to({graphics:mask_1_graphics_498,x:286.9,y:175.8}).wait(1).to({graphics:mask_1_graphics_499,x:286.9,y:176.9}).wait(1).to({graphics:mask_1_graphics_500,x:286.8,y:178}).wait(1).to({graphics:mask_1_graphics_501,x:286.8,y:179}).wait(1).to({graphics:mask_1_graphics_502,x:286.7,y:180.1}).wait(1).to({graphics:mask_1_graphics_503,x:286.6,y:181.2}).wait(1).to({graphics:mask_1_graphics_504,x:286.5,y:182.2}).wait(1).to({graphics:mask_1_graphics_505,x:286.4,y:183.3}).wait(1).to({graphics:mask_1_graphics_506,x:286.3,y:184.3}).wait(1).to({graphics:mask_1_graphics_507,x:286.1,y:185.4}).wait(1).to({graphics:mask_1_graphics_508,x:286,y:186.5}).wait(1).to({graphics:mask_1_graphics_509,x:285.8,y:187.5}).wait(1).to({graphics:mask_1_graphics_510,x:285.7,y:188.6}).wait(1).to({graphics:mask_1_graphics_511,x:285.5,y:189.6}).wait(1).to({graphics:mask_1_graphics_512,x:285.3,y:190.7}).wait(1).to({graphics:mask_1_graphics_513,x:285.1,y:191.7}).wait(1).to({graphics:mask_1_graphics_514,x:284.8,y:192.8}).wait(1).to({graphics:mask_1_graphics_515,x:284.6,y:193.8}).wait(1).to({graphics:mask_1_graphics_516,x:284.4,y:194.9}).wait(1).to({graphics:mask_1_graphics_517,x:284.1,y:195.9}).wait(1).to({graphics:mask_1_graphics_518,x:283.8,y:196.9}).wait(1).to({graphics:mask_1_graphics_519,x:283.5,y:198}).wait(1).to({graphics:mask_1_graphics_520,x:283.3,y:199}).wait(1).to({graphics:mask_1_graphics_521,x:282.9,y:200}).wait(1).to({graphics:mask_1_graphics_522,x:282.6,y:201}).wait(1).to({graphics:mask_1_graphics_523,x:282.3,y:202.1}).wait(1).to({graphics:mask_1_graphics_524,x:282,y:203.1}).wait(1).to({graphics:mask_1_graphics_525,x:281.6,y:204.1}).wait(1).to({graphics:mask_1_graphics_526,x:281.3,y:205.1}).wait(1).to({graphics:mask_1_graphics_527,x:280.9,y:206.1}).wait(1).to({graphics:mask_1_graphics_528,x:280.5,y:207.1}).wait(1).to({graphics:mask_1_graphics_529,x:280.1,y:208.1}).wait(1).to({graphics:mask_1_graphics_530,x:279.7,y:209.1}).wait(1).to({graphics:mask_1_graphics_531,x:279.3,y:210}).wait(1).to({graphics:mask_1_graphics_532,x:278.8,y:211}).wait(1).to({graphics:mask_1_graphics_533,x:278.4,y:212}).wait(1).to({graphics:mask_1_graphics_534,x:277.9,y:213}).wait(1).to({graphics:mask_1_graphics_535,x:277.5,y:213.9}).wait(1).to({graphics:mask_1_graphics_536,x:277,y:214.9}).wait(1).to({graphics:mask_1_graphics_537,x:276.5,y:215.8}).wait(1).to({graphics:mask_1_graphics_538,x:276,y:216.8}).wait(1).to({graphics:mask_1_graphics_539,x:275.5,y:217.7}).wait(1).to({graphics:mask_1_graphics_540,x:275,y:218.6}).wait(1).to({graphics:mask_1_graphics_541,x:274.5,y:219.6}).wait(1).to({graphics:mask_1_graphics_542,x:273.9,y:220.5}).wait(1).to({graphics:mask_1_graphics_543,x:273.4,y:221.4}).wait(1).to({graphics:mask_1_graphics_544,x:272.8,y:222.3}).wait(1).to({graphics:mask_1_graphics_545,x:272.3,y:223.2}).wait(1).to({graphics:mask_1_graphics_546,x:271.7,y:224.1}).wait(1).to({graphics:mask_1_graphics_547,x:271.1,y:225}).wait(1).to({graphics:mask_1_graphics_548,x:270.5,y:225.9}).wait(1).to({graphics:mask_1_graphics_549,x:269.9,y:226.8}).wait(1).to({graphics:mask_1_graphics_550,x:269.2,y:227.6}).wait(176));

	// Layer 13
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(20,1,1).p("AqHhtQHgo9GOgtQGOgtgSDNQgSDNjdGnQjeGpCPCWQB2B9Dtgf");
	this.shape_2.setTransform(214.8,355);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(495).to({_off:false},0).wait(231));

	// Layer 12 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_404 = new cjs.Graphics().p("AldefQlNlNgGnUMAkOAAAQgHHUlMFNQlUFTnhAAQnfAAlUlTg");
	var mask_2_graphics_405 = new cjs.Graphics().p("EAGlAjxQnfgVlEliQk+lbANnUMAkNABmQgcHTlaE+QlNEwm8AAIg6gBg");
	var mask_2_graphics_406 = new cjs.Graphics().p("EAF1AjtQnegqk0lwQkvlpAjnSMAkFADLQgwHSloEuQlEEPmaAAQg4AAg5gFg");
	var mask_2_graphics_407 = new cjs.Graphics().p("EAFGAjnQnbg/kkl9Qkfl1A3nRMAj6AExQhEHOl1EfQk6Dwl6AAQhRAAhVgMg");
	var mask_2_graphics_408 = new cjs.Graphics().p("EAEYAjfQnYhUkTmJQkNmCBLnNMAjqAGVQhYHLmCENQktDTldAAQhqAAhvgUg");
	var mask_2_graphics_409 = new cjs.Graphics().p("EADsAjVQnThokCmWQj8mNBfnKMAjWAH5QhsHHmND8QkhC3lAAAQiCAAiIgeg");
	var mask_2_graphics_410 = new cjs.Graphics().p("EADCAjJQnPh9jvmgQjrmYBznFMAi+AJbQiAHCmYDrQkRCdkmAAQiaAAifgrg");
	var mask_2_graphics_411 = new cjs.Graphics().p("EACZAi6QnJiRjcmqQjZmiCHm/MAihAK9QiUG7mhDZQkCCFkMAAQixAAi2g6g");
	var mask_2_graphics_412 = new cjs.Graphics().p("EAByAiqQnCiljKm0QjGmqCbm6MAiAAMeQioG0mqDGQjwBvj0AAQjIAAjLhKg");
	var mask_2_graphics_413 = new cjs.Graphics().p("EABNAiYQm6i5i3m8QizmzCtmyMAhbAN8Qi6GsmzC0QjcBajdAAQjfAAjfhcg");
	var mask_2_graphics_414 = new cjs.Graphics().p("EAAqAiDQmyjMijnDQigm7DAmqMAgyAPZQjNGkm6CgQjIBJjGAAQj3AAjxhyg");
	var mask_2_graphics_415 = new cjs.Graphics().p("EAAIAhtQmojfiPnKQiMnBDSmhMAgFAQ0QjfGanBCNQizA4iuAAQkQAAkDiIg");
	var mask_2_graphics_416 = new cjs.Graphics().p("EgAWAhVQmfjyh7nPQh5nHDlmYIfTSNQjwGRnHB4QicAqiXAAQkpAAkSigg");
	var mask_2_graphics_417 = new cjs.Graphics().p("EgAzAg7QmVkEhmnUQhknMD2mNIeeTkQkCGFnLBlQiFAdh/AAQlEAAkgi6g");
	var mask_2_graphics_418 = new cjs.Graphics().p("EgBPAgfQmIkVhSnZQhQnPEImCIdlU4QkTF6nPBQQhsAThnAAQlgAAkujWg");
	var mask_2_graphics_419 = new cjs.Graphics().p("EgBoAgBQl8kmg8nbQg8nTEYl2IcpWKQkkFtnSA8QhRAKhPAAQl9AAk6jzg");
	var mask_2_graphics_420 = new cjs.Graphics().p("Ah/fiQluk2goneQgnnVEolpIbpXYQkzFgnVAoQg2AEg1AAQmdAAlEkSg");
	var mask_2_graphics_421 = new cjs.Graphics().p("AiTfAQlhlFgTngQgSnWE4lbIalYkQlCFTnWATIgzABQnAAAlMk1g");
	var mask_2_graphics_422 = new cjs.Graphics().p("EAKMAj1QnggDlRlVQlSlUACngQACnWFHlOIZeZuQlPFCnSAAIgFAAg");
	var mask_2_graphics_423 = new cjs.Graphics().p("EAJsAj0QnggYlBljQlDlkAXnfQAXnVFVk/IYVazQlHEgmuAAIg/gBg");
	var mask_2_graphics_424 = new cjs.Graphics().p("EAJNAjwQnegskylxQkylyAsndQArnUFjkwIXHb2Qk9EAmMAAQg6AAg8gGg");
	var mask_2_graphics_425 = new cjs.Graphics().p("EAIvAjqQnchBkhl+Qkil+BBnbQBAnSFvkgIV5c1QkzDhltAAQhTAAhXgMg");
	var mask_2_graphics_426 = new cjs.Graphics().p("EAISAjjQnYhXkQmKQkSmLBWnYQBUnOF7kQIUndxQklDFlRAAQhsAAhwgUg");
	var mask_2_graphics_427 = new cjs.Graphics().p("EAH2AjYQnUhqj/mXQj/mWBqnTQBpnLGGj+ITSeoQkYCrk0AAQiEAAiJggg");
	var mask_2_graphics_428 = new cjs.Graphics().p("EAHbAjMQnPh/jsmhQjumhB/nOQB8nGGSjtIR6fdQkICRkaAAQibAAihgsg");
	var mask_2_graphics_429 = new cjs.Graphics().p("EAHBAi+QnIiUjbmrQjbmqCTnJQCQm/GcjbMAQhAgMQj4B7kBAAQiyAAi3g7g");
	var mask_2_graphics_430 = new cjs.Graphics().p("EAGoAitQnBinjIm0QjIm0CnnBQCkm5GkjJMAPGAg5QjlBljpAAQjKAAjMhMg");
	var mask_2_graphics_431 = new cjs.Graphics().p("EAGQAibQm5i7i0m8Qi1m9C7m5QC2myGti2MANoAhiQjRBRjRAAQjhAAjhheg");
	var mask_2_graphics_432 = new cjs.Graphics().p("EAF7AiHQmxjNihnEQiinDDNmyQDImpG1ijMAMMAiEQi9BBi7AAQj4AAjyhzg");
	var mask_2_graphics_433 = new cjs.Graphics().p("EAFmAhyQmnjgiOnKQiPnKDgmoQDZmgG8iRMAKvAijQipAyikAAQkPAAkEiIg");
	var mask_2_graphics_434 = new cjs.Graphics().p("EAFTAhbQmdjyh7nPQh7nQDxmeQDrmXHCh+MAJQAi+QiSAliOAAQkoAAkTifg");
	var mask_2_graphics_435 = new cjs.Graphics().p("EAFCAhCQmTkDhnnUQhnnVECmUQD8mLHHhrMAHxAjVQh8AZh3AAQlCAAkgi4g");
	var mask_2_graphics_436 = new cjs.Graphics().p("EAExAgnQmHkUhTnYQhTnYESmJQENmAHLhYMAGQAjoQhjAQhgAAQlcAAkujTg");
	var mask_2_graphics_437 = new cjs.Graphics().p("EAEiAgLQl8kkg+ncQg/nbEil8QEel1HOhDMAEvAj1QhKAJhIAAQl5AAk5jvg");
	var mask_2_graphics_438 = new cjs.Graphics().p("AEUftQlvk0gqneQgrndEylwQEuloHQgwMADOAkBQgwADgvAAQmYAAlDkNg");
	var mask_2_graphics_439 = new cjs.Graphics().p("AEIfNQlilDgWnfQgWnfFBliQE9lcHRgbMABsAkHIgqAAQm4AAlLktg");
	var mask_2_graphics_440 = new cjs.Graphics().p("AD9esQlTlSgCngQgDnfFRlUQFLlNHSgJMAAKAkKQnTgFlNlKg");
	var mask_2_graphics_441 = new cjs.Graphics().p("ADHeKQlElgASnfQASnfFelGQFZk+HTALMgBZAkHQnSgYk/lYg");
	var mask_2_graphics_442 = new cjs.Graphics().p("ACOdnQk1ltAmneQAnneFsk2QFmkvHRAeMgC6AkCQnRgtkwllg");
	var mask_2_graphics_443 = new cjs.Graphics().p("ABXdEQkml6A7nbQA7ncF4knQFzkgHPAzMgEbAj3QnPhAkglyg");
	var mask_2_graphics_444 = new cjs.Graphics().p("AAhchQkVmGBPnZQBPnYGEkXQF/kPHNBFMgF9AjqQnLhUkRl+g");
	var mask_2_graphics_445 = new cjs.Graphics().p("AgSb+QkFmSBjnUQBinVGRkGQGJj/HKBYMgHeAjYQnHhnj/mJg");
	var mask_2_graphics_446 = new cjs.Graphics().p("AhEbbQj0mcB3nRQB2nQGbj0QGUjvHGBsMgI9AjBQnCh6jvmTg");
	var mask_2_graphics_447 = new cjs.Graphics().p("Ah0a4QjimnCKnKQCKnLGljjQGejdHAB/MgKbAinQm9iNjdmdg");
	var mask_2_graphics_448 = new cjs.Graphics().p("AiPajQjYmsCWnHQCVnHGqjYQGjjTG+CKMgLSAiWQm5iYjTmjg");
	var mask_2_graphics_449 = new cjs.Graphics().p("AipaPQjNmxCgnEQChnDGvjOQGojIG6CVMgMHAiDQm1ijjJmng");
	var mask_2_graphics_450 = new cjs.Graphics().p("AjDZ6QjCm2Csm/QCrm/G1jDQGti+G1CgMgM8AhvQmwitjAmtg");
	var mask_2_graphics_451 = new cjs.Graphics().p("AjbZmQi4m7C3m7QC2m7G5i4QGyizGyCqMgNyAhbQmsi4i0mxg");
	var mask_2_graphics_452 = new cjs.Graphics().p("AjzZSQitm/DBm3QDCm2G9itQG2ipGuC1MgOmAhFQmnjDiqm1g");
	var mask_2_graphics_453 = new cjs.Graphics().p("AkKY9QiinDDMmxQDMmyHCiiQG6ieGpDAMgPaAgtQmijNifm6g");
	var mask_2_graphics_454 = new cjs.Graphics().p("AkhYpQiWnHDWmsQDXmtHGiXQG9iTGkDKMgQMAgVQmdjYiVm9g");
	var mask_2_graphics_455 = new cjs.Graphics().p("Ak2YVQiMnKDimnQDgmnHKiMQHBiIGfDUIw/f6QmYjhiJnBg");
	var mask_2_graphics_456 = new cjs.Graphics().p("AlLYBQiAnODsmhQDqmhHOiBQHEh9GZDeIxxffQmSjrh+nEg");
	var mask_2_graphics_457 = new cjs.Graphics().p("AlfXtQh0nRD1mbQD1mcHQh1QHIhyGUDpIyjfCQmMj1hznHg");
	var mask_2_graphics_458 = new cjs.Graphics().p("AlyXZQhpnTEAmWQD/mVHThpQHKhoGODzIzTelQmGj/honKg");
	var mask_2_graphics_459 = new cjs.Graphics().p("AmEXGQhenWEKmPQEJmPHVheQHNhdGID9I0DeGQl/kIhdnMg");
	var mask_2_graphics_460 = new cjs.Graphics().p("AmVWyQhSnYETmIQESmJHYhSQHPhRGCEGI0ydmQl5kShRnOg");
	var mask_2_graphics_461 = new cjs.Graphics().p("AmmWfQhGnaEdmCQEcmBHZhHQHRhGF7EQI1gdFQlykbhGnQg");
	var mask_2_graphics_462 = new cjs.Graphics().p("Am1WMQg7ncEml6QEml7Hbg7QHSg6F0EZI2MciQlskkg6nRg");
	var mask_2_graphics_463 = new cjs.Graphics().p("AnEV5QgvndEwlzQEulzHdgwQHTgvFuEjI25b+QllksgvnTg");
	var mask_2_graphics_464 = new cjs.Graphics().p("AnRVmQgkneE5lsQE3lrHegkQHUgjFmErI3kbaQldk1gjnUg");
	var mask_2_graphics_465 = new cjs.Graphics().p("AneVTQgYneFBlkQFBlkHegYQHVgYFfE0I4Pa1QlVk+gYnVg");
	var mask_2_graphics_466 = new cjs.Graphics().p("AnqVBQgMnfFKlcQFJlcHfgMQHVgMFXE8I44aOQlOlGgMnVg");
	var mask_2_graphics_467 = new cjs.Graphics().p("An1UvQAAngFSlTQFSlTHfgBQHWgBFPFFI5iZmQlFlOgBnVg");
	var mask_2_graphics_468 = new cjs.Graphics().p("An/UdQALnfFblLQFalLHfALQHWALFHFMI6JY+Qk+lWALnVg");
	var mask_2_graphics_469 = new cjs.Graphics().p("AoIULQAXnfFjlCQFilCHeAWQHWAXE+FVI6wYUQk0leAWnVg");
	var mask_2_graphics_470 = new cjs.Graphics().p("AoQT6QAjneFqk6QFqk6HeAjQHUAiE3FdI7WXpQksllAinUg");
	var mask_2_graphics_471 = new cjs.Graphics().p("AoXToQAvndFykxQFxkwHdAuQHUAuEtFkI76W+QkjltAtnTg");
	var mask_2_graphics_472 = new cjs.Graphics().p("AodTXQA6ncF6knQF5koHbA7QHTA5ElFrI8fWSQkal0A5nSg");
	var mask_2_graphics_473 = new cjs.Graphics().p("AojTGQBHnaGBkeQGAkeHaBGQHRBFEbFyI9BVkQkRl6BEnRg");
	var mask_2_graphics_474 = new cjs.Graphics().p("AonS2QBSnZGIkUQGHkUHZBSQHOBQETF5I9kU2QkHmCBQnOg");
	var mask_2_graphics_475 = new cjs.Graphics().p("AoqSlQBenWGOkKQGOkLHWBeQHNBcEJGAI+EUGQj+mIBcnNg");
	var mask_2_graphics_476 = new cjs.Graphics().p("AotSVQBqnTGVkBQGVkAHTBpQHLBnD/GHI+kTWQj0mOBnnLg");
	var mask_2_graphics_477 = new cjs.Graphics().p("AouSGQB1nRGcj3QGaj2HRB1QHIBzD2GNI/DSlQjpmVBynHg");
	var mask_2_graphics_478 = new cjs.Graphics().p("AovR3QCBnPGijsQGhjsHNCBQHFB+DsGTI/fRzQjgmaB9nEg");
	var mask_2_graphics_479 = new cjs.Graphics().p("AouRoQCMnLGnjiQGnjhHLCMQHBCJDiGZI/7RAQjWmfCJnBg");
	var mask_2_graphics_480 = new cjs.Graphics().p("AosRZQCXnHGsjXQGtjXHHCXQG+CVDYGeMggWAQOQjLmlCUm+g");
	var mask_2_graphics_481 = new cjs.Graphics().p("AoqRLQCjnDGxjNQGzjMHDCjQG6CfDNGkMggvAPaQjBmqCfm6g");
	var mask_2_graphics_482 = new cjs.Graphics().p("AomQ9QCum/G2jBQG3jCG/CuQG3CqDCGpMghHAOmQi2mvCqm2g");
	var mask_2_graphics_483 = new cjs.Graphics().p("AoiQwQC5m7G7i2QG8i3G7C5QGyC1C4GuMgheANwQismyC1myg");
	var mask_2_graphics_484 = new cjs.Graphics().p("AocQjQDEm2G/irQHBisG2DEQGtDACtGyMghzAM7Qihm3DAmtg");
	var mask_2_graphics_485 = new cjs.Graphics().p("AoWQWQDPmxHEigQHFigGwDPQGpDKCiG2MgiHAMFQiWm6DKmpg");
	var mask_2_graphics_486 = new cjs.Graphics().p("AoOQKQDamsHHiUQHJiVGrDZQGkDVCXG6MgiaALPQiLm/DVmjg");
	var mask_2_graphics_487 = new cjs.Graphics().p("AoGP+QDlmmHLiJQHMiKGmDkQGeDgCMG9MgirAKYQiAnCDfmeg");
	var mask_2_graphics_488 = new cjs.Graphics().p("An8PzQDvmgHOh+QHPh+GhDuQGYDqCBHBMgi7AJgQh0nFDpmYg");
	var mask_2_graphics_489 = new cjs.Graphics().p("AnyPoQD5maHShzQHShyGbD5QGSDzB2HFMgjKAIoQhpnHDzmTg");
	var mask_2_graphics_490 = new cjs.Graphics().p("AnmPeQEDmUHUhnQHVhnGUEDQGND+BqHHMgjXAHwQhenKD+mMg");
	var mask_2_graphics_491 = new cjs.Graphics().p("AnaPUQENmOHXhbQHXhbGOENQGGEHBfHKMgjjAG4QhSnMEHmGg");
	var mask_2_graphics_492 = new cjs.Graphics().p("AnNPKQEXmGHZhQQHahPGHEWQF/ESBUHMMgjuAF/QhHnOERmAg");
	var mask_2_graphics_493 = new cjs.Graphics().p("Am/PBQEhl/HbhEQHchEF/EhQF5EaBIHOMgj3AFGQg7nPEal5g");
	var mask_2_graphics_494 = new cjs.Graphics().p("AmvO5QEql5Hcg4QHdg3F5EqQFxEkA9HPMgj+AENQgwnREklxg");
	var mask_2_graphics_495 = new cjs.Graphics().p("AmgOxQEzlyHegrQHegsFxEzQFqEtAyHRMgkFADUQgknTEtlpg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(404).to({graphics:mask_2_graphics_404,x:163,y:229}).wait(1).to({graphics:mask_2_graphics_405,x:163,y:229}).wait(1).to({graphics:mask_2_graphics_406,x:162.8,y:229}).wait(1).to({graphics:mask_2_graphics_407,x:162.5,y:229.1}).wait(1).to({graphics:mask_2_graphics_408,x:162.1,y:229.1}).wait(1).to({graphics:mask_2_graphics_409,x:161.6,y:229.1}).wait(1).to({graphics:mask_2_graphics_410,x:161,y:229.2}).wait(1).to({graphics:mask_2_graphics_411,x:160.3,y:229.2}).wait(1).to({graphics:mask_2_graphics_412,x:159.5,y:229.2}).wait(1).to({graphics:mask_2_graphics_413,x:158.5,y:229.2}).wait(1).to({graphics:mask_2_graphics_414,x:157.5,y:229.3}).wait(1).to({graphics:mask_2_graphics_415,x:156.4,y:229.3}).wait(1).to({graphics:mask_2_graphics_416,x:155.1,y:229.3}).wait(1).to({graphics:mask_2_graphics_417,x:153.8,y:229.3}).wait(1).to({graphics:mask_2_graphics_418,x:152.4,y:229.3}).wait(1).to({graphics:mask_2_graphics_419,x:150.9,y:229.2}).wait(1).to({graphics:mask_2_graphics_420,x:149.3,y:229.2}).wait(1).to({graphics:mask_2_graphics_421,x:147.6,y:229.3}).wait(1).to({graphics:mask_2_graphics_422,x:145.8,y:229.3}).wait(1).to({graphics:mask_2_graphics_423,x:144,y:229.3}).wait(1).to({graphics:mask_2_graphics_424,x:142,y:229.4}).wait(1).to({graphics:mask_2_graphics_425,x:140.1,y:229.4}).wait(1).to({graphics:mask_2_graphics_426,x:138,y:229.5}).wait(1).to({graphics:mask_2_graphics_427,x:135.9,y:229.6}).wait(1).to({graphics:mask_2_graphics_428,x:133.7,y:229.6}).wait(1).to({graphics:mask_2_graphics_429,x:131.5,y:229.7}).wait(1).to({graphics:mask_2_graphics_430,x:129.2,y:229.7}).wait(1).to({graphics:mask_2_graphics_431,x:126.8,y:229.7}).wait(1).to({graphics:mask_2_graphics_432,x:124.5,y:229.8}).wait(1).to({graphics:mask_2_graphics_433,x:122.2,y:229.8}).wait(1).to({graphics:mask_2_graphics_434,x:119.8,y:229.8}).wait(1).to({graphics:mask_2_graphics_435,x:117.5,y:229.8}).wait(1).to({graphics:mask_2_graphics_436,x:115.1,y:229.8}).wait(1).to({graphics:mask_2_graphics_437,x:112.6,y:229.8}).wait(1).to({graphics:mask_2_graphics_438,x:110.2,y:229.8}).wait(1).to({graphics:mask_2_graphics_439,x:107.7,y:229.8}).wait(1).to({graphics:mask_2_graphics_440,x:105.3,y:229.9}).wait(1).to({graphics:mask_2_graphics_441,x:107.3,y:229.8}).wait(1).to({graphics:mask_2_graphics_442,x:109.7,y:229.7}).wait(1).to({graphics:mask_2_graphics_443,x:112.1,y:229.4}).wait(1).to({graphics:mask_2_graphics_444,x:114.6,y:229.1}).wait(1).to({graphics:mask_2_graphics_445,x:117,y:228.6}).wait(1).to({graphics:mask_2_graphics_446,x:119.4,y:228}).wait(1).to({graphics:mask_2_graphics_447,x:121.7,y:227.4}).wait(1).to({graphics:mask_2_graphics_448,x:123.1,y:227}).wait(1).to({graphics:mask_2_graphics_449,x:124.4,y:226.5}).wait(1).to({graphics:mask_2_graphics_450,x:125.7,y:226}).wait(1).to({graphics:mask_2_graphics_451,x:127.1,y:225.5}).wait(1).to({graphics:mask_2_graphics_452,x:128.4,y:225}).wait(1).to({graphics:mask_2_graphics_453,x:129.7,y:224.4}).wait(1).to({graphics:mask_2_graphics_454,x:130.9,y:223.8}).wait(1).to({graphics:mask_2_graphics_455,x:132.2,y:223.1}).wait(1).to({graphics:mask_2_graphics_456,x:133.4,y:222.4}).wait(1).to({graphics:mask_2_graphics_457,x:134.7,y:221.7}).wait(1).to({graphics:mask_2_graphics_458,x:135.9,y:221}).wait(1).to({graphics:mask_2_graphics_459,x:137.1,y:220.2}).wait(1).to({graphics:mask_2_graphics_460,x:138.3,y:219.4}).wait(1).to({graphics:mask_2_graphics_461,x:139.4,y:218.6}).wait(1).to({graphics:mask_2_graphics_462,x:140.5,y:217.7}).wait(1).to({graphics:mask_2_graphics_463,x:141.7,y:216.8}).wait(1).to({graphics:mask_2_graphics_464,x:142.7,y:215.9}).wait(1).to({graphics:mask_2_graphics_465,x:143.8,y:215}).wait(1).to({graphics:mask_2_graphics_466,x:144.8,y:214}).wait(1).to({graphics:mask_2_graphics_467,x:145.9,y:213}).wait(1).to({graphics:mask_2_graphics_468,x:146.9,y:212}).wait(1).to({graphics:mask_2_graphics_469,x:147.8,y:211}).wait(1).to({graphics:mask_2_graphics_470,x:148.8,y:209.9}).wait(1).to({graphics:mask_2_graphics_471,x:149.7,y:208.8}).wait(1).to({graphics:mask_2_graphics_472,x:150.7,y:207.7}).wait(1).to({graphics:mask_2_graphics_473,x:151.5,y:206.5}).wait(1).to({graphics:mask_2_graphics_474,x:152.4,y:205.4}).wait(1).to({graphics:mask_2_graphics_475,x:153.2,y:204.2}).wait(1).to({graphics:mask_2_graphics_476,x:154,y:203}).wait(1).to({graphics:mask_2_graphics_477,x:154.8,y:201.8}).wait(1).to({graphics:mask_2_graphics_478,x:155.5,y:200.5}).wait(1).to({graphics:mask_2_graphics_479,x:156.2,y:199.2}).wait(1).to({graphics:mask_2_graphics_480,x:156.9,y:198}).wait(1).to({graphics:mask_2_graphics_481,x:157.5,y:196.7}).wait(1).to({graphics:mask_2_graphics_482,x:158.1,y:195.4}).wait(1).to({graphics:mask_2_graphics_483,x:158.7,y:194}).wait(1).to({graphics:mask_2_graphics_484,x:159.2,y:192.7}).wait(1).to({graphics:mask_2_graphics_485,x:159.7,y:191.3}).wait(1).to({graphics:mask_2_graphics_486,x:160.2,y:190}).wait(1).to({graphics:mask_2_graphics_487,x:160.6,y:188.6}).wait(1).to({graphics:mask_2_graphics_488,x:161,y:187.2}).wait(1).to({graphics:mask_2_graphics_489,x:161.4,y:185.8}).wait(1).to({graphics:mask_2_graphics_490,x:161.7,y:184.4}).wait(1).to({graphics:mask_2_graphics_491,x:162,y:183}).wait(1).to({graphics:mask_2_graphics_492,x:162.3,y:181.6}).wait(1).to({graphics:mask_2_graphics_493,x:162.5,y:180.1}).wait(1).to({graphics:mask_2_graphics_494,x:162.7,y:178.7}).wait(1).to({graphics:mask_2_graphics_495,x:162.8,y:177.3}).wait(231));

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(20,1,1).p("Ap1E5QHgo8GNgtQGPgtgSDNQgKBuhECs");
	this.shape_3.setTransform(213,312.7);
	this.shape_3._off = true;

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(404).to({_off:false},0).wait(322));

	// Layer 18
	this.instance_2 = new lib.ar2("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(192,82.9,1,1,1,0,0,0.8,-0.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(160).to({_off:false},0).wait(566));

	// Layer 11 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_172 = new cjs.Graphics().p("AsrKyIAAu1MAkCAAAIAAO1g");
	var mask_3_graphics_173 = new cjs.Graphics().p("AyBHkIAAvHMAkDAAAIAAPHg");
	var mask_3_graphics_174 = new cjs.Graphics().p("AyBHtIAAvZMAkDAAAIAAPZg");
	var mask_3_graphics_175 = new cjs.Graphics().p("AyBH2IAAvrMAkDAAAIAAPrg");
	var mask_3_graphics_176 = new cjs.Graphics().p("AyBH/IAAv9MAkDAAAIAAP9g");
	var mask_3_graphics_177 = new cjs.Graphics().p("AyBIHIAAwNMAkDAAAIAAQNg");
	var mask_3_graphics_178 = new cjs.Graphics().p("AyBIQIAAwfMAkDAAAIAAQfg");
	var mask_3_graphics_179 = new cjs.Graphics().p("AyBIZIAAwxMAkDAAAIAAQxg");
	var mask_3_graphics_180 = new cjs.Graphics().p("AyBIiIAAxDMAkDAAAIAARDg");
	var mask_3_graphics_181 = new cjs.Graphics().p("AyBIrIAAxVMAkDAAAIAARVg");
	var mask_3_graphics_182 = new cjs.Graphics().p("AyBI0IAAxnMAkDAAAIAARng");
	var mask_3_graphics_183 = new cjs.Graphics().p("AyBI8IAAx3MAkDAAAIAAR3g");
	var mask_3_graphics_184 = new cjs.Graphics().p("AyBJFIAAyJMAkDAAAIAASJg");
	var mask_3_graphics_185 = new cjs.Graphics().p("AyBJOIAAybMAkDAAAIAASbg");
	var mask_3_graphics_186 = new cjs.Graphics().p("AyBJXIAAytMAkDAAAIAAStg");
	var mask_3_graphics_187 = new cjs.Graphics().p("AyBJgIAAy/MAkDAAAIAAS/g");
	var mask_3_graphics_188 = new cjs.Graphics().p("AyBJoIAAzQMAkDAAAIAATQg");
	var mask_3_graphics_189 = new cjs.Graphics().p("AyBJxIAAziMAkDAAAIAATig");
	var mask_3_graphics_190 = new cjs.Graphics().p("AyBJ6IAAzzMAkDAAAIAATzg");
	var mask_3_graphics_191 = new cjs.Graphics().p("AyBKDIAA0FMAkDAAAIAAUFg");
	var mask_3_graphics_192 = new cjs.Graphics().p("AyBKMIAA0XMAkDAAAIAAUXg");
	var mask_3_graphics_193 = new cjs.Graphics().p("AyBKVIAA0pMAkDAAAIAAUpg");
	var mask_3_graphics_194 = new cjs.Graphics().p("AyBKeIAA07MAkDAAAIAAU7g");
	var mask_3_graphics_195 = new cjs.Graphics().p("AyBKmIAA1MMAkDAAAIAAVMg");
	var mask_3_graphics_196 = new cjs.Graphics().p("AyBKvIAA1dMAkDAAAIAAVdg");
	var mask_3_graphics_197 = new cjs.Graphics().p("AyBK4IAA1vMAkDAAAIAAVvg");
	var mask_3_graphics_198 = new cjs.Graphics().p("AyBLBIAA2BMAkDAAAIAAWBg");
	var mask_3_graphics_199 = new cjs.Graphics().p("AyBLKIAA2TMAkDAAAIAAWTg");
	var mask_3_graphics_200 = new cjs.Graphics().p("AyBLTIAA2lMAkDAAAIAAWlg");
	var mask_3_graphics_201 = new cjs.Graphics().p("AyBLcIAA23MAkDAAAIAAW3g");
	var mask_3_graphics_202 = new cjs.Graphics().p("AyBLlIAA3JMAkDAAAIAAXJg");
	var mask_3_graphics_203 = new cjs.Graphics().p("AyBLtIAA3ZMAkDAAAIAAXZg");
	var mask_3_graphics_204 = new cjs.Graphics().p("AyBL2IAA3rMAkDAAAIAAXrg");
	var mask_3_graphics_205 = new cjs.Graphics().p("AyBL/IAA39MAkDAAAIAAX9g");
	var mask_3_graphics_206 = new cjs.Graphics().p("AyBMIIAA4PMAkDAAAIAAYPg");
	var mask_3_graphics_207 = new cjs.Graphics().p("AyBMRIAA4hMAkDAAAIAAYhg");
	var mask_3_graphics_208 = new cjs.Graphics().p("AyBMaIAA4zMAkDAAAIAAYzg");
	var mask_3_graphics_209 = new cjs.Graphics().p("AyBMjIAA5FMAkDAAAIAAZFg");
	var mask_3_graphics_210 = new cjs.Graphics().p("AyBMrIAA5VMAkDAAAIAAZVg");
	var mask_3_graphics_211 = new cjs.Graphics().p("AyBM0IAA5nMAkDAAAIAAZng");
	var mask_3_graphics_212 = new cjs.Graphics().p("AyBM9IAA55MAkDAAAIAAZ5g");
	var mask_3_graphics_213 = new cjs.Graphics().p("AyBNGIAA6LMAkDAAAIAAaLg");
	var mask_3_graphics_214 = new cjs.Graphics().p("AyBNPIAA6dMAkDAAAIAAadg");
	var mask_3_graphics_215 = new cjs.Graphics().p("AyBNXIAA6uMAkDAAAIAAaug");
	var mask_3_graphics_216 = new cjs.Graphics().p("AyBNgIAA6/MAkDAAAIAAa/g");
	var mask_3_graphics_217 = new cjs.Graphics().p("AyBNpIAA7RMAkDAAAIAAbRg");
	var mask_3_graphics_218 = new cjs.Graphics().p("AyBNyIAA7jMAkDAAAIAAbjg");
	var mask_3_graphics_219 = new cjs.Graphics().p("AyBN7IAA71MAkDAAAIAAb1g");
	var mask_3_graphics_220 = new cjs.Graphics().p("AyBOEIAA8HMAkDAAAIAAcHg");
	var mask_3_graphics_221 = new cjs.Graphics().p("AyBOMIAA8YMAkDAAAIAAcYg");
	var mask_3_graphics_222 = new cjs.Graphics().p("AyBOVIAA8qMAkDAAAIAAcqg");
	var mask_3_graphics_223 = new cjs.Graphics().p("AyBOeIAA87MAkDAAAIAAc7g");
	var mask_3_graphics_224 = new cjs.Graphics().p("AyBOnIAA9NMAkDAAAIAAdNg");
	var mask_3_graphics_225 = new cjs.Graphics().p("AyBOwIAA9fMAkDAAAIAAdfg");
	var mask_3_graphics_226 = new cjs.Graphics().p("AyBO5IAA9xMAkDAAAIAAdxg");
	var mask_3_graphics_227 = new cjs.Graphics().p("AyBPCIAA+DMAkDAAAIAAeDg");
	var mask_3_graphics_228 = new cjs.Graphics().p("AyBPKIAA+UMAkDAAAIAAeUg");
	var mask_3_graphics_229 = new cjs.Graphics().p("AyBPTIAA+lMAkDAAAIAAelg");
	var mask_3_graphics_230 = new cjs.Graphics().p("AyBPcIAA+3MAkDAAAIAAe3g");
	var mask_3_graphics_231 = new cjs.Graphics().p("AyBPlIAA/JMAkDAAAIAAfJg");
	var mask_3_graphics_232 = new cjs.Graphics().p("AyBPuIAA/bMAkDAAAIAAfbg");
	var mask_3_graphics_233 = new cjs.Graphics().p("AyBP3IAA/tMAkDAAAIAAftg");
	var mask_3_graphics_234 = new cjs.Graphics().p("AyBQAIAA//MAkDAAAIAAf/g");
	var mask_3_graphics_235 = new cjs.Graphics().p("AyBQJMAAAggRMAkDAAAMAAAAgRg");
	var mask_3_graphics_236 = new cjs.Graphics().p("AyBQRMAAAgghMAkDAAAMAAAAghg");
	var mask_3_graphics_237 = new cjs.Graphics().p("AyBQaMAAAggzMAkDAAAMAAAAgzg");
	var mask_3_graphics_238 = new cjs.Graphics().p("AyBQjMAAAghFMAkDAAAMAAAAhFg");
	var mask_3_graphics_239 = new cjs.Graphics().p("AyBQsMAAAghXMAkDAAAMAAAAhXg");
	var mask_3_graphics_240 = new cjs.Graphics().p("AyBQ1MAAAghpMAkDAAAMAAAAhpg");
	var mask_3_graphics_241 = new cjs.Graphics().p("AyBQ+MAAAgh7MAkDAAAMAAAAh7g");
	var mask_3_graphics_242 = new cjs.Graphics().p("AyBRHMAAAgiNMAkDAAAMAAAAiNg");
	var mask_3_graphics_243 = new cjs.Graphics().p("AyBRPMAAAgidMAkDAAAMAAAAidg");
	var mask_3_graphics_244 = new cjs.Graphics().p("AyBRYMAAAgivMAkDAAAMAAAAivg");
	var mask_3_graphics_245 = new cjs.Graphics().p("AyBRhMAAAgjBMAkDAAAMAAAAjBg");
	var mask_3_graphics_246 = new cjs.Graphics().p("AyBRqMAAAgjTMAkDAAAMAAAAjTg");
	var mask_3_graphics_247 = new cjs.Graphics().p("AyBRzMAAAgjlMAkDAAAMAAAAjlg");
	var mask_3_graphics_248 = new cjs.Graphics().p("AyBR7MAAAgj2MAkDAAAMAAAAj2g");
	var mask_3_graphics_249 = new cjs.Graphics().p("AyBSEMAAAgkHMAkDAAAMAAAAkHg");
	var mask_3_graphics_250 = new cjs.Graphics().p("AyBSNMAAAgkZMAkDAAAMAAAAkZg");
	var mask_3_graphics_251 = new cjs.Graphics().p("AyBSWMAAAgkrMAkDAAAMAAAAkrg");
	var mask_3_graphics_252 = new cjs.Graphics().p("AyBSfMAAAgk9MAkDAAAMAAAAk9g");
	var mask_3_graphics_253 = new cjs.Graphics().p("AyBSoMAAAglPMAkDAAAMAAAAlPg");
	var mask_3_graphics_254 = new cjs.Graphics().p("AyBSwMAAAglgMAkDAAAMAAAAlgg");
	var mask_3_graphics_255 = new cjs.Graphics().p("AyBS5MAAAglxMAkDAAAMAAAAlxg");
	var mask_3_graphics_256 = new cjs.Graphics().p("AyBTCMAAAgmDMAkDAAAMAAAAmDg");
	var mask_3_graphics_257 = new cjs.Graphics().p("AyBTLMAAAgmVMAkDAAAMAAAAmVg");
	var mask_3_graphics_258 = new cjs.Graphics().p("AyBTUMAAAgmnMAkDAAAMAAAAmng");
	var mask_3_graphics_259 = new cjs.Graphics().p("AyBTcMAAAgm3MAkDAAAMAAAAm3g");
	var mask_3_graphics_260 = new cjs.Graphics().p("AyBTlMAAAgnJMAkDAAAMAAAAnJg");
	var mask_3_graphics_261 = new cjs.Graphics().p("AyBTuMAAAgnbMAkDAAAMAAAAnbg");
	var mask_3_graphics_262 = new cjs.Graphics().p("AyBT3MAAAgntMAkDAAAMAAAAntg");
	var mask_3_graphics_263 = new cjs.Graphics().p("AyBUAMAAAgn/MAkDAAAMAAAAn/g");
	var mask_3_graphics_264 = new cjs.Graphics().p("AyBUJMAAAgoRMAkDAAAMAAAAoRg");
	var mask_3_graphics_265 = new cjs.Graphics().p("AyBUSMAAAgojMAkDAAAMAAAAojg");
	var mask_3_graphics_266 = new cjs.Graphics().p("AyBUaMAAAgozMAkDAAAMAAAAozg");
	var mask_3_graphics_267 = new cjs.Graphics().p("AyBUjMAAAgpFMAkDAAAMAAAApFg");
	var mask_3_graphics_268 = new cjs.Graphics().p("AyBUsMAAAgpXMAkDAAAMAAAApXg");
	var mask_3_graphics_269 = new cjs.Graphics().p("AyBU1MAAAgppMAkDAAAMAAAAppg");
	var mask_3_graphics_270 = new cjs.Graphics().p("AyBU+MAAAgp7MAkDAAAMAAAAp7g");
	var mask_3_graphics_271 = new cjs.Graphics().p("AyBVHMAAAgqNMAkDAAAMAAAAqNg");
	var mask_3_graphics_272 = new cjs.Graphics().p("AyBVQMAAAgqeMAkDAAAMAAAAqeg");
	var mask_3_graphics_273 = new cjs.Graphics().p("AyBVYMAAAgqvMAkDAAAMAAAAqvg");
	var mask_3_graphics_274 = new cjs.Graphics().p("AyBVhMAAAgrBMAkDAAAMAAAArBg");
	var mask_3_graphics_275 = new cjs.Graphics().p("AyBVqMAAAgrTMAkDAAAMAAAArTg");
	var mask_3_graphics_276 = new cjs.Graphics().p("AyBVzMAAAgrlMAkDAAAMAAAArlg");
	var mask_3_graphics_277 = new cjs.Graphics().p("AyBV8MAAAgr3MAkDAAAMAAAAr3g");
	var mask_3_graphics_278 = new cjs.Graphics().p("AyBWFMAAAgsJMAkDAAAMAAAAsJg");
	var mask_3_graphics_279 = new cjs.Graphics().p("AyBWOMAAAgsaMAkDAAAMAAAAsag");
	var mask_3_graphics_280 = new cjs.Graphics().p("AyBWXMAAAgssMAkDAAAMAAAAssg");
	var mask_3_graphics_281 = new cjs.Graphics().p("AyBWfMAAAgs9MAkDAAAMAAAAs9g");
	var mask_3_graphics_282 = new cjs.Graphics().p("AyBWoMAAAgtPMAkDAAAMAAAAtPg");
	var mask_3_graphics_283 = new cjs.Graphics().p("AyBWxMAAAgthMAkDAAAMAAAAthg");
	var mask_3_graphics_284 = new cjs.Graphics().p("AyBW6MAAAgtzMAkDAAAMAAAAtzg");
	var mask_3_graphics_285 = new cjs.Graphics().p("AyBXDMAAAguEMAkDAAAMAAAAuEg");
	var mask_3_graphics_286 = new cjs.Graphics().p("AyBXMMAAAguWMAkDAAAMAAAAuWg");
	var mask_3_graphics_287 = new cjs.Graphics().p("AyBXUMAAAgunMAkDAAAMAAAAung");
	var mask_3_graphics_288 = new cjs.Graphics().p("AyBXdMAAAgu5MAkDAAAMAAAAu5g");
	var mask_3_graphics_289 = new cjs.Graphics().p("AyBXmMAAAgvLMAkDAAAMAAAAvLg");
	var mask_3_graphics_290 = new cjs.Graphics().p("AyBXvMAAAgvdMAkDAAAMAAAAvdg");
	var mask_3_graphics_291 = new cjs.Graphics().p("AyBX4MAAAgvvMAkDAAAMAAAAvvg");
	var mask_3_graphics_292 = new cjs.Graphics().p("AyBYAMAAAgv/MAkDAAAMAAAAv/g");
	var mask_3_graphics_293 = new cjs.Graphics().p("AyBYJMAAAgwRMAkDAAAMAAAAwRg");
	var mask_3_graphics_294 = new cjs.Graphics().p("AyBYSMAAAgwjMAkDAAAMAAAAwjg");
	var mask_3_graphics_295 = new cjs.Graphics().p("AyBYbMAAAgw1MAkDAAAMAAAAw1g");
	var mask_3_graphics_296 = new cjs.Graphics().p("AyBYkMAAAgxHMAkDAAAMAAAAxHg");
	var mask_3_graphics_297 = new cjs.Graphics().p("AyBYtMAAAgxZMAkDAAAMAAAAxZg");
	var mask_3_graphics_298 = new cjs.Graphics().p("AyBY2MAAAgxrMAkDAAAMAAAAxrg");
	var mask_3_graphics_299 = new cjs.Graphics().p("AyBY+MAAAgx7MAkDAAAMAAAAx7g");
	var mask_3_graphics_300 = new cjs.Graphics().p("AyBZHMAAAgyNMAkDAAAMAAAAyNg");
	var mask_3_graphics_301 = new cjs.Graphics().p("AyBZQMAAAgyfMAkDAAAMAAAAyfg");
	var mask_3_graphics_302 = new cjs.Graphics().p("AyBZZMAAAgyxMAkDAAAMAAAAyxg");
	var mask_3_graphics_303 = new cjs.Graphics().p("AyBZiMAAAgzDMAkDAAAMAAAAzDg");
	var mask_3_graphics_304 = new cjs.Graphics().p("AyBZrMAAAgzVMAkDAAAMAAAAzVg");
	var mask_3_graphics_305 = new cjs.Graphics().p("AyBZ0MAAAgzmMAkDAAAMAAAAzmg");
	var mask_3_graphics_306 = new cjs.Graphics().p("AyBZ9MAAAgz4MAkDAAAMAAAAz4g");
	var mask_3_graphics_307 = new cjs.Graphics().p("AyBaFMAAAg0JMAkDAAAMAAAA0Jg");
	var mask_3_graphics_308 = new cjs.Graphics().p("AyBaOMAAAg0bMAkDAAAMAAAA0bg");
	var mask_3_graphics_309 = new cjs.Graphics().p("AyBaXMAAAg0tMAkDAAAMAAAA0tg");
	var mask_3_graphics_310 = new cjs.Graphics().p("AyBagMAAAg0/MAkDAAAMAAAA0/g");
	var mask_3_graphics_311 = new cjs.Graphics().p("AyBapMAAAg1RMAkDAAAMAAAA1Rg");
	var mask_3_graphics_312 = new cjs.Graphics().p("AyBayMAAAg1iMAkDAAAMAAAA1ig");
	var mask_3_graphics_313 = new cjs.Graphics().p("AyBa7MAAAg10MAkDAAAMAAAA10g");
	var mask_3_graphics_314 = new cjs.Graphics().p("AyBbDMAAAg2FMAkDAAAMAAAA2Fg");
	var mask_3_graphics_315 = new cjs.Graphics().p("AyBbMMAAAg2XMAkDAAAMAAAA2Xg");
	var mask_3_graphics_316 = new cjs.Graphics().p("AyBbVMAAAg2pMAkDAAAMAAAA2pg");
	var mask_3_graphics_317 = new cjs.Graphics().p("AyBbeMAAAg27MAkDAAAMAAAA27g");
	var mask_3_graphics_318 = new cjs.Graphics().p("AyBbmMAAAg3LMAkDAAAMAAAA3Lg");
	var mask_3_graphics_319 = new cjs.Graphics().p("AyBbvMAAAg3dMAkDAAAMAAAA3dg");
	var mask_3_graphics_320 = new cjs.Graphics().p("AyBb4MAAAg3vMAkDAAAMAAAA3vg");
	var mask_3_graphics_321 = new cjs.Graphics().p("AyBcBMAAAg4BMAkDAAAMAAAA4Bg");
	var mask_3_graphics_322 = new cjs.Graphics().p("AyBcKMAAAg4TMAkDAAAMAAAA4Tg");
	var mask_3_graphics_323 = new cjs.Graphics().p("AyBcTMAAAg4lMAkDAAAMAAAA4lg");
	var mask_3_graphics_324 = new cjs.Graphics().p("AyBccMAAAg43MAkDAAAMAAAA43g");
	var mask_3_graphics_325 = new cjs.Graphics().p("AyBckMAAAg5HMAkDAAAMAAAA5Hg");
	var mask_3_graphics_326 = new cjs.Graphics().p("AyBctMAAAg5ZMAkDAAAMAAAA5Zg");
	var mask_3_graphics_327 = new cjs.Graphics().p("AyBc2MAAAg5rMAkDAAAMAAAA5rg");
	var mask_3_graphics_328 = new cjs.Graphics().p("AyBc/MAAAg59MAkDAAAMAAAA59g");
	var mask_3_graphics_329 = new cjs.Graphics().p("AyBdIMAAAg6PMAkDAAAMAAAA6Pg");
	var mask_3_graphics_330 = new cjs.Graphics().p("AyBdRMAAAg6hMAkDAAAMAAAA6hg");
	var mask_3_graphics_331 = new cjs.Graphics().p("AyBdaMAAAg6zMAkDAAAMAAAA6zg");
	var mask_3_graphics_332 = new cjs.Graphics().p("AyBdiMAAAg7DMAkDAAAMAAAA7Dg");
	var mask_3_graphics_333 = new cjs.Graphics().p("AyBdrMAAAg7VMAkDAAAMAAAA7Vg");
	var mask_3_graphics_334 = new cjs.Graphics().p("AyBd0MAAAg7nMAkDAAAMAAAA7ng");
	var mask_3_graphics_335 = new cjs.Graphics().p("AyBd9MAAAg75MAkDAAAMAAAA75g");
	var mask_3_graphics_336 = new cjs.Graphics().p("AyBeGMAAAg8LMAkDAAAMAAAA8Lg");
	var mask_3_graphics_337 = new cjs.Graphics().p("EgMrAhmMAAAg8cMAkCAAAMAAAA8cg");
	var mask_3_graphics_338 = new cjs.Graphics().p("AyBeqMAAAg9TMAkDAAAMAAAA9Tg");
	var mask_3_graphics_339 = new cjs.Graphics().p("EgMrAieMAAAg+JMAkCAAAMAAAA+Jg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(172).to({graphics:mask_3_graphics_172,x:149.5,y:69}).wait(1).to({graphics:mask_3_graphics_173,x:183.7,y:91.4}).wait(1).to({graphics:mask_3_graphics_174,x:183.7,y:92.3}).wait(1).to({graphics:mask_3_graphics_175,x:183.7,y:93.2}).wait(1).to({graphics:mask_3_graphics_176,x:183.7,y:94.1}).wait(1).to({graphics:mask_3_graphics_177,x:183.7,y:95}).wait(1).to({graphics:mask_3_graphics_178,x:183.7,y:95.9}).wait(1).to({graphics:mask_3_graphics_179,x:183.7,y:96.8}).wait(1).to({graphics:mask_3_graphics_180,x:183.7,y:97.6}).wait(1).to({graphics:mask_3_graphics_181,x:183.7,y:98.5}).wait(1).to({graphics:mask_3_graphics_182,x:183.7,y:99.4}).wait(1).to({graphics:mask_3_graphics_183,x:183.7,y:100.3}).wait(1).to({graphics:mask_3_graphics_184,x:183.7,y:101.2}).wait(1).to({graphics:mask_3_graphics_185,x:183.7,y:102.1}).wait(1).to({graphics:mask_3_graphics_186,x:183.7,y:103}).wait(1).to({graphics:mask_3_graphics_187,x:183.7,y:103.8}).wait(1).to({graphics:mask_3_graphics_188,x:183.7,y:104.7}).wait(1).to({graphics:mask_3_graphics_189,x:183.7,y:105.6}).wait(1).to({graphics:mask_3_graphics_190,x:183.7,y:106.5}).wait(1).to({graphics:mask_3_graphics_191,x:183.7,y:107.4}).wait(1).to({graphics:mask_3_graphics_192,x:183.7,y:108.3}).wait(1).to({graphics:mask_3_graphics_193,x:183.7,y:109.1}).wait(1).to({graphics:mask_3_graphics_194,x:183.7,y:110}).wait(1).to({graphics:mask_3_graphics_195,x:183.7,y:110.9}).wait(1).to({graphics:mask_3_graphics_196,x:183.7,y:111.8}).wait(1).to({graphics:mask_3_graphics_197,x:183.7,y:112.7}).wait(1).to({graphics:mask_3_graphics_198,x:183.7,y:113.6}).wait(1).to({graphics:mask_3_graphics_199,x:183.7,y:114.5}).wait(1).to({graphics:mask_3_graphics_200,x:183.7,y:115.3}).wait(1).to({graphics:mask_3_graphics_201,x:183.7,y:116.2}).wait(1).to({graphics:mask_3_graphics_202,x:183.7,y:117.1}).wait(1).to({graphics:mask_3_graphics_203,x:183.7,y:118}).wait(1).to({graphics:mask_3_graphics_204,x:183.7,y:118.9}).wait(1).to({graphics:mask_3_graphics_205,x:183.7,y:119.8}).wait(1).to({graphics:mask_3_graphics_206,x:183.7,y:120.6}).wait(1).to({graphics:mask_3_graphics_207,x:183.7,y:121.5}).wait(1).to({graphics:mask_3_graphics_208,x:183.7,y:122.4}).wait(1).to({graphics:mask_3_graphics_209,x:183.7,y:123.3}).wait(1).to({graphics:mask_3_graphics_210,x:183.7,y:124.2}).wait(1).to({graphics:mask_3_graphics_211,x:183.7,y:125.1}).wait(1).to({graphics:mask_3_graphics_212,x:183.7,y:126}).wait(1).to({graphics:mask_3_graphics_213,x:183.7,y:126.8}).wait(1).to({graphics:mask_3_graphics_214,x:183.7,y:127.7}).wait(1).to({graphics:mask_3_graphics_215,x:183.7,y:128.6}).wait(1).to({graphics:mask_3_graphics_216,x:183.7,y:129.5}).wait(1).to({graphics:mask_3_graphics_217,x:183.7,y:130.4}).wait(1).to({graphics:mask_3_graphics_218,x:183.7,y:131.3}).wait(1).to({graphics:mask_3_graphics_219,x:183.7,y:132.2}).wait(1).to({graphics:mask_3_graphics_220,x:183.7,y:133}).wait(1).to({graphics:mask_3_graphics_221,x:183.7,y:133.9}).wait(1).to({graphics:mask_3_graphics_222,x:183.7,y:134.8}).wait(1).to({graphics:mask_3_graphics_223,x:183.7,y:135.7}).wait(1).to({graphics:mask_3_graphics_224,x:183.7,y:136.6}).wait(1).to({graphics:mask_3_graphics_225,x:183.7,y:137.5}).wait(1).to({graphics:mask_3_graphics_226,x:183.7,y:138.3}).wait(1).to({graphics:mask_3_graphics_227,x:183.7,y:139.2}).wait(1).to({graphics:mask_3_graphics_228,x:183.7,y:140.1}).wait(1).to({graphics:mask_3_graphics_229,x:183.7,y:141}).wait(1).to({graphics:mask_3_graphics_230,x:183.7,y:141.9}).wait(1).to({graphics:mask_3_graphics_231,x:183.7,y:142.8}).wait(1).to({graphics:mask_3_graphics_232,x:183.7,y:143.7}).wait(1).to({graphics:mask_3_graphics_233,x:183.7,y:144.5}).wait(1).to({graphics:mask_3_graphics_234,x:183.7,y:145.4}).wait(1).to({graphics:mask_3_graphics_235,x:183.7,y:146.3}).wait(1).to({graphics:mask_3_graphics_236,x:183.7,y:147.2}).wait(1).to({graphics:mask_3_graphics_237,x:183.7,y:148.1}).wait(1).to({graphics:mask_3_graphics_238,x:183.7,y:149}).wait(1).to({graphics:mask_3_graphics_239,x:183.7,y:149.8}).wait(1).to({graphics:mask_3_graphics_240,x:183.7,y:150.7}).wait(1).to({graphics:mask_3_graphics_241,x:183.7,y:151.6}).wait(1).to({graphics:mask_3_graphics_242,x:183.7,y:152.5}).wait(1).to({graphics:mask_3_graphics_243,x:183.7,y:153.4}).wait(1).to({graphics:mask_3_graphics_244,x:183.7,y:154.3}).wait(1).to({graphics:mask_3_graphics_245,x:183.7,y:155.2}).wait(1).to({graphics:mask_3_graphics_246,x:183.7,y:156}).wait(1).to({graphics:mask_3_graphics_247,x:183.7,y:156.9}).wait(1).to({graphics:mask_3_graphics_248,x:183.7,y:157.8}).wait(1).to({graphics:mask_3_graphics_249,x:183.7,y:158.7}).wait(1).to({graphics:mask_3_graphics_250,x:183.7,y:159.6}).wait(1).to({graphics:mask_3_graphics_251,x:183.7,y:160.5}).wait(1).to({graphics:mask_3_graphics_252,x:183.7,y:161.4}).wait(1).to({graphics:mask_3_graphics_253,x:183.7,y:162.2}).wait(1).to({graphics:mask_3_graphics_254,x:183.7,y:163.1}).wait(1).to({graphics:mask_3_graphics_255,x:183.7,y:164}).wait(1).to({graphics:mask_3_graphics_256,x:183.7,y:164.9}).wait(1).to({graphics:mask_3_graphics_257,x:183.7,y:165.8}).wait(1).to({graphics:mask_3_graphics_258,x:183.7,y:166.7}).wait(1).to({graphics:mask_3_graphics_259,x:183.7,y:167.6}).wait(1).to({graphics:mask_3_graphics_260,x:183.7,y:168.5}).wait(1).to({graphics:mask_3_graphics_261,x:183.7,y:169.3}).wait(1).to({graphics:mask_3_graphics_262,x:183.7,y:170.2}).wait(1).to({graphics:mask_3_graphics_263,x:183.7,y:171.1}).wait(1).to({graphics:mask_3_graphics_264,x:183.7,y:172}).wait(1).to({graphics:mask_3_graphics_265,x:183.7,y:172.9}).wait(1).to({graphics:mask_3_graphics_266,x:183.7,y:173.8}).wait(1).to({graphics:mask_3_graphics_267,x:183.7,y:174.6}).wait(1).to({graphics:mask_3_graphics_268,x:183.7,y:175.5}).wait(1).to({graphics:mask_3_graphics_269,x:183.7,y:176.4}).wait(1).to({graphics:mask_3_graphics_270,x:183.7,y:177.3}).wait(1).to({graphics:mask_3_graphics_271,x:183.7,y:178.2}).wait(1).to({graphics:mask_3_graphics_272,x:183.7,y:179.1}).wait(1).to({graphics:mask_3_graphics_273,x:183.7,y:180}).wait(1).to({graphics:mask_3_graphics_274,x:183.7,y:180.8}).wait(1).to({graphics:mask_3_graphics_275,x:183.7,y:181.7}).wait(1).to({graphics:mask_3_graphics_276,x:183.7,y:182.6}).wait(1).to({graphics:mask_3_graphics_277,x:183.7,y:183.5}).wait(1).to({graphics:mask_3_graphics_278,x:183.7,y:184.4}).wait(1).to({graphics:mask_3_graphics_279,x:183.7,y:185.3}).wait(1).to({graphics:mask_3_graphics_280,x:183.7,y:186.2}).wait(1).to({graphics:mask_3_graphics_281,x:183.7,y:187}).wait(1).to({graphics:mask_3_graphics_282,x:183.7,y:187.9}).wait(1).to({graphics:mask_3_graphics_283,x:183.7,y:188.8}).wait(1).to({graphics:mask_3_graphics_284,x:183.7,y:189.7}).wait(1).to({graphics:mask_3_graphics_285,x:183.7,y:190.6}).wait(1).to({graphics:mask_3_graphics_286,x:183.7,y:191.5}).wait(1).to({graphics:mask_3_graphics_287,x:183.7,y:192.3}).wait(1).to({graphics:mask_3_graphics_288,x:183.7,y:193.2}).wait(1).to({graphics:mask_3_graphics_289,x:183.7,y:194.1}).wait(1).to({graphics:mask_3_graphics_290,x:183.7,y:195}).wait(1).to({graphics:mask_3_graphics_291,x:183.7,y:195.9}).wait(1).to({graphics:mask_3_graphics_292,x:183.7,y:196.8}).wait(1).to({graphics:mask_3_graphics_293,x:183.7,y:197.7}).wait(1).to({graphics:mask_3_graphics_294,x:183.7,y:198.5}).wait(1).to({graphics:mask_3_graphics_295,x:183.7,y:199.4}).wait(1).to({graphics:mask_3_graphics_296,x:183.7,y:200.3}).wait(1).to({graphics:mask_3_graphics_297,x:183.7,y:201.2}).wait(1).to({graphics:mask_3_graphics_298,x:183.7,y:202.1}).wait(1).to({graphics:mask_3_graphics_299,x:183.7,y:203}).wait(1).to({graphics:mask_3_graphics_300,x:183.7,y:203.8}).wait(1).to({graphics:mask_3_graphics_301,x:183.7,y:204.7}).wait(1).to({graphics:mask_3_graphics_302,x:183.7,y:205.6}).wait(1).to({graphics:mask_3_graphics_303,x:183.7,y:206.5}).wait(1).to({graphics:mask_3_graphics_304,x:183.7,y:207.4}).wait(1).to({graphics:mask_3_graphics_305,x:183.7,y:208.3}).wait(1).to({graphics:mask_3_graphics_306,x:183.7,y:209.2}).wait(1).to({graphics:mask_3_graphics_307,x:183.7,y:210}).wait(1).to({graphics:mask_3_graphics_308,x:183.7,y:210.9}).wait(1).to({graphics:mask_3_graphics_309,x:183.7,y:211.8}).wait(1).to({graphics:mask_3_graphics_310,x:183.7,y:212.7}).wait(1).to({graphics:mask_3_graphics_311,x:183.7,y:213.6}).wait(1).to({graphics:mask_3_graphics_312,x:183.7,y:214.5}).wait(1).to({graphics:mask_3_graphics_313,x:183.7,y:215.4}).wait(1).to({graphics:mask_3_graphics_314,x:183.7,y:216.2}).wait(1).to({graphics:mask_3_graphics_315,x:183.7,y:217.1}).wait(1).to({graphics:mask_3_graphics_316,x:183.7,y:218}).wait(1).to({graphics:mask_3_graphics_317,x:183.7,y:218.9}).wait(1).to({graphics:mask_3_graphics_318,x:183.7,y:219.8}).wait(1).to({graphics:mask_3_graphics_319,x:183.7,y:220.7}).wait(1).to({graphics:mask_3_graphics_320,x:183.7,y:221.5}).wait(1).to({graphics:mask_3_graphics_321,x:183.7,y:222.4}).wait(1).to({graphics:mask_3_graphics_322,x:183.7,y:223.3}).wait(1).to({graphics:mask_3_graphics_323,x:183.7,y:224.2}).wait(1).to({graphics:mask_3_graphics_324,x:183.7,y:225.1}).wait(1).to({graphics:mask_3_graphics_325,x:183.7,y:226}).wait(1).to({graphics:mask_3_graphics_326,x:183.7,y:226.9}).wait(1).to({graphics:mask_3_graphics_327,x:183.7,y:227.7}).wait(1).to({graphics:mask_3_graphics_328,x:183.7,y:228.6}).wait(1).to({graphics:mask_3_graphics_329,x:183.7,y:229.5}).wait(1).to({graphics:mask_3_graphics_330,x:183.7,y:230.4}).wait(1).to({graphics:mask_3_graphics_331,x:183.7,y:231.3}).wait(1).to({graphics:mask_3_graphics_332,x:183.7,y:232.2}).wait(1).to({graphics:mask_3_graphics_333,x:183.7,y:233}).wait(1).to({graphics:mask_3_graphics_334,x:183.7,y:233.9}).wait(1).to({graphics:mask_3_graphics_335,x:183.7,y:234.8}).wait(1).to({graphics:mask_3_graphics_336,x:183.7,y:235.7}).wait(1).to({graphics:mask_3_graphics_337,x:149.5,y:215}).wait(1).to({graphics:mask_3_graphics_338,x:183.7,y:239.4}).wait(1).to({graphics:mask_3_graphics_339,x:149.5,y:220.6}).wait(387));

	// Layer 8
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(20,1,1).p("AOY4CQgUgLgeAFQgEABgFABQiSAjicDmQidDljEG6QjEG5jfF6QjQF6ifE6QieE5i1FI");
	this.shape_4.setTransform(198,275.4);
	this.shape_4._off = true;

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(172).to({_off:false},0).wait(554));

	// Layer 7 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_160 = new cjs.Graphics().p("ANhs8QHUAGFNFNQFTFUAAHfQAAHhlTFTQlNFNnUAHg");
	var mask_4_graphics_161 = new cjs.Graphics().p("AM5s7QHUgJFYFBQFfFIAQHfQARHglIFfQlBFYnTAXg");
	var mask_4_graphics_162 = new cjs.Graphics().p("AMSs4QHTgZFiE1QFqE8AhHeQAhHgk8FqQk1FinSAng");
	var mask_4_graphics_163 = new cjs.Graphics().p("ALqszQHSgpFtEpQF0EvAxHdQAyHekwF1QkpFtnQA3g");
	var mask_4_graphics_164 = new cjs.Graphics().p("ALCsrQHQg5F3EcQF/EiBBHbQBCHckiF/QkdF3nOBGg");
	var mask_4_graphics_165 = new cjs.Graphics().p("AKbsiQHOhJGAEPQGIEWBSHYQBSHakVGIQkQGAnMBXg");
	var mask_4_graphics_166 = new cjs.Graphics().p("AJzsXQHMhYGJECQGSEHBhHWQBiHWkHGSQkDGJnIBmg");
	var mask_4_graphics_167 = new cjs.Graphics().p("AJMsKQHIhoGSD1QGbD6BxHRQByHTj5GaQj1GTnFB1g");
	var mask_4_graphics_168 = new cjs.Graphics().p("AImr6QHEh4GaDmQGjDsCBHOQCCHPjsGiQjnGbnACEg");
	var mask_4_graphics_169 = new cjs.Graphics().p("AH/rpQHAiHGiDYQGqDeCSHJQCRHKjdGqQjZGim7CUg");
	var mask_4_graphics_170 = new cjs.Graphics().p("AHZrWQG7iWGpDKQGyDOChHFQChHEjPGyQjKGpm2Cjg");
	var mask_4_graphics_171 = new cjs.Graphics().p("AG0rBQG2ilGvC7QG5DACwG/QCwG+i/G4Qi8GwmwCyg");
	var mask_4_graphics_172 = new cjs.Graphics().p("AGPqqQGwi0G1CsQG/CxDAG5QC/G4iwG+QitG2mqDBg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(160).to({graphics:mask_4_graphics_160,x:200.5,y:149}).wait(1).to({graphics:mask_4_graphics_161,x:200.5,y:149}).wait(1).to({graphics:mask_4_graphics_162,x:200.5,y:148.9}).wait(1).to({graphics:mask_4_graphics_163,x:200.5,y:148.8}).wait(1).to({graphics:mask_4_graphics_164,x:200.5,y:148.5}).wait(1).to({graphics:mask_4_graphics_165,x:200.6,y:148.3}).wait(1).to({graphics:mask_4_graphics_166,x:200.6,y:147.9}).wait(1).to({graphics:mask_4_graphics_167,x:200.6,y:147.5}).wait(1).to({graphics:mask_4_graphics_168,x:200.6,y:147}).wait(1).to({graphics:mask_4_graphics_169,x:200.6,y:146.5}).wait(1).to({graphics:mask_4_graphics_170,x:200.6,y:145.9}).wait(1).to({graphics:mask_4_graphics_171,x:200.6,y:145.2}).wait(1).to({graphics:mask_4_graphics_172,x:200.6,y:144.5}).wait(554));

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(20,1,1).p("AOY4CQgUgLgeAFQgEABgFABQiSAjicDmQidDljEG6QjEG5jfF6QjQF6ifE6QieE5i1FI");
	this.shape_5.setTransform(198,275.4);
	this.shape_5._off = true;

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(160).to({_off:false},0).wait(566));

	// Layer 17
	this.instance_3 = new lib.ar1("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(82.2,254.9,1,1,0,0,0,-0.8,0.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).wait(717));

	// Layer 6 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_127 = new cjs.Graphics().p("AENSVQm4jAivm/Qism2C0mvMAhNAOeQjBGqm2CtQjVBTjUAAQjoAAjmhkg");
	var mask_5_graphics_128 = new cjs.Graphics().p("AE+SuQnCimjJmzQjGmsCbm4MAiAAMgQioG0mrDGQjvBuj0AAQjIAAjMhLg");
	var mask_5_graphics_129 = new cjs.Graphics().p("AFyTEQnKiLjjmnQjemfCBnBMAirAKfQiOG9mfDfQkGCMkVAAQiqAAivg1g");
	var mask_5_graphics_130 = new cjs.Graphics().p("AGqTWQnShvj7maQj3mRBnnHMAjOAIbQhzHFmRD2QkbCuk3AAQiLAAiQgjg");
	var mask_5_graphics_131 = new cjs.Graphics().p("AHlTlQnahUkRmKQkOmCBMnNMAjqAGWQhZHLmBEOQkuDSlcAAQhqAAhvgUg");
	var mask_5_graphics_132 = new cjs.Graphics().p("AIiTwQneg5kol5QkjlxAwnRMAj+AEQQg9HPlyEkQk9D6mEAAQhJAAhMgJg");
	var mask_5_graphics_133 = new cjs.Graphics().p("AJhT2Qnfgck+lnQk5lgAVnTMAkKACIQgiHTlgE5QlKEkmvAAQgnAAgngCg");
	var mask_5_graphics_134 = new cjs.Graphics().p("AKjT5QngAAlTlUQlNlNgGnUMAkOAABQgHHTlMFNQlUFUnhAAIAAAAg");
	var mask_5_graphics_135 = new cjs.Graphics().p("AhfPUQlgk5ginSMAkKgCIQAVHTk4FgQlAFnngAcQgmACgnAAQmvAAlJklg");
	var mask_5_graphics_136 = new cjs.Graphics().p("AgsQAQlxkkg+nQMAj/gEOQAwHQkkFyQkqF5ndA4QhMAJhJAAQmEAAk8j6g");
	var mask_5_graphics_137 = new cjs.Graphics().p("AAJQoQmBkNhZnLMAjrgGWQBLHNkNGCQkTGKnZBUQhvAUhrAAQlcAAktjTg");
	var mask_5_graphics_138 = new cjs.Graphics().p("ABBROQmQj3h0nFMAjPgIaQBmHHj2GRQj7GZnUBwQiPAiiLAAQk3AAkbitg");
	var mask_5_graphics_139 = new cjs.Graphics().p("AB7RwQmejfiOm9MAisgKeQCAHAjdGfQjkGnnMCLQiuA1iqAAQkUAAkHiMg");
	var mask_5_graphics_140 = new cjs.Graphics().p("AC3SOQmqjFiom1MAiBgMfQCaG4jFGrQjKG0nDCmQjLBLjJAAQjzAAjwhvg");
	var mask_5_graphics_141 = new cjs.Graphics().p("AD2SpQm2isjBmqMAhOgOdQC0GuirG2QixG/m4DAQjmBkjoAAQjUAAjVhUg");
	var mask_5_graphics_142 = new cjs.Graphics().p("AE1TBQm+iSjameMAgUgQYQDNGjiSG/QiVHJmtDZQj+CBkIAAQi1AAi6g9g");
	var mask_5_graphics_143 = new cjs.Graphics().p("AHjTuQnQhLkWl4IdZ1KQEMF/hLHQQhOHamGEZQkyDcllAAQhjAAhmgRg");
	var mask_5_graphics_144 = new cjs.Graphics().p("AKWT/QnXgDlMlIIZy5cQFEFSgDHVQgEHhlWFRQlTFOnaAAIgJAAg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(127).to({graphics:mask_5_graphics_127,x:178.7,y:127.3}).wait(1).to({graphics:mask_5_graphics_128,x:180,y:127.3}).wait(1).to({graphics:mask_5_graphics_129,x:181.1,y:127.3}).wait(1).to({graphics:mask_5_graphics_130,x:181.9,y:127.3}).wait(1).to({graphics:mask_5_graphics_131,x:182.6,y:127.3}).wait(1).to({graphics:mask_5_graphics_132,x:183.1,y:127.3}).wait(1).to({graphics:mask_5_graphics_133,x:183.4,y:127.2}).wait(1).to({graphics:mask_5_graphics_134,x:183.5,y:127.3}).wait(1).to({graphics:mask_5_graphics_135,x:183.5,y:127.3}).wait(1).to({graphics:mask_5_graphics_136,x:183.4,y:127.4}).wait(1).to({graphics:mask_5_graphics_137,x:183.4,y:127.5}).wait(1).to({graphics:mask_5_graphics_138,x:183.4,y:127.5}).wait(1).to({graphics:mask_5_graphics_139,x:183.4,y:127.6}).wait(1).to({graphics:mask_5_graphics_140,x:183.4,y:127.7}).wait(1).to({graphics:mask_5_graphics_141,x:183.3,y:127.7}).wait(1).to({graphics:mask_5_graphics_142,x:183.3,y:127.8}).wait(1).to({graphics:mask_5_graphics_143,x:183.1,y:127.9}).wait(1).to({graphics:mask_5_graphics_144,x:183,y:127.9}).wait(582));

	// Layer 5
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(20,1,1).p("AttR9IJCoiQGEk0FjmuQFjmwA9k2QAujqhIgl");
	this.shape_6.setTransform(206.6,236.4);
	this.shape_6._off = true;

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(127).to({_off:false},0).wait(599));

	// Layer 4 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_9 = new cjs.Graphics().p("AC1X/IBph8IHiGUIhpB8g");
	var mask_6_graphics_10 = new cjs.Graphics().p("AkriCIB3iNIHgGSIh3CNg");
	var mask_6_graphics_11 = new cjs.Graphics().p("Akyh5ICGieIHfGSIiFCdg");
	var mask_6_graphics_12 = new cjs.Graphics().p("Ak4hwICUivIHdGQIiTCvg");
	var mask_6_graphics_13 = new cjs.Graphics().p("Ak/hnICijAIHdGQIihC+g");
	var mask_6_graphics_14 = new cjs.Graphics().p("AlFhfICvjQIHcGPIivDQg");
	var mask_6_graphics_15 = new cjs.Graphics().p("AlMhVIC+jhIHbGNIi9Dgg");
	var mask_6_graphics_16 = new cjs.Graphics().p("AlShNIDLjxIHaGMIjKDxg");
	var mask_6_graphics_17 = new cjs.Graphics().p("AlZhEIDakCIHZGLIjaECg");
	var mask_6_graphics_18 = new cjs.Graphics().p("Algg8IDokSIHZGLIjoESg");
	var mask_6_graphics_19 = new cjs.Graphics().p("AlmgyID2kkIHYGKIj3Ejg");
	var mask_6_graphics_20 = new cjs.Graphics().p("AltgqIEFk0IHWGJIkEEzg");
	var mask_6_graphics_21 = new cjs.Graphics().p("AlzghIESlEIHWGHIkTFEg");
	var mask_6_graphics_22 = new cjs.Graphics().p("Al6gYIEglVIHVGGIkgFVg");
	var mask_6_graphics_23 = new cjs.Graphics().p("AmBgPIEvlmIHUGFIkuFmg");
	var mask_6_graphics_24 = new cjs.Graphics().p("AmHgGIE8l3IHTGFIk8F2g");
	var mask_6_graphics_25 = new cjs.Graphics().p("AmOABIFLmGIHSGFIlKGGg");
	var mask_6_graphics_26 = new cjs.Graphics().p("AmUAKIFYmXIHRGEIlYGXg");
	var mask_6_graphics_27 = new cjs.Graphics().p("AmbAUIFnmpIHQGDIlmGog");
	var mask_6_graphics_28 = new cjs.Graphics().p("AmhAcIF0m5IHQGCIl1G4g");
	var mask_6_graphics_29 = new cjs.Graphics().p("AmoAlIGDnJIHOGBImCHIg");
	var mask_6_graphics_30 = new cjs.Graphics().p("AmuAtIGQnZIHOF/ImRHag");
	var mask_6_graphics_31 = new cjs.Graphics().p("Am1A3IGfnrIHMF/ImeHqg");
	var mask_6_graphics_32 = new cjs.Graphics().p("Am8A/IGtn7IHMF+ImtH7g");
	var mask_6_graphics_33 = new cjs.Graphics().p("AnCBIIG7oLIHKF8Im6ILg");
	var mask_6_graphics_34 = new cjs.Graphics().p("AnJBRIHJocIHKF8InJIbg");
	var mask_6_graphics_35 = new cjs.Graphics().p("AnQBaIHXotIHKF7InWIsg");
	var mask_6_graphics_36 = new cjs.Graphics().p("AnWBjIHko+IHJF6InkI9g");
	var mask_6_graphics_37 = new cjs.Graphics().p("AndBrIHzpOIHIF6InyJNg");
	var mask_6_graphics_38 = new cjs.Graphics().p("AnjB0IIApfIHHF4IoAJfg");
	var mask_6_graphics_39 = new cjs.Graphics().p("AnqB9IIPpwIHGF3IoOJwg");
	var mask_6_graphics_40 = new cjs.Graphics().p("AnwCGIIdqAIHEF1IocKBg");
	var mask_6_graphics_41 = new cjs.Graphics().p("An3CPIIqqSIHFF2IoqKQg");
	var mask_6_graphics_42 = new cjs.Graphics().p("An9CXII4qhIHDF0Io3Khg");
	var mask_6_graphics_43 = new cjs.Graphics().p("AoEChIJHqzIHCFzIpGKyg");
	var mask_6_graphics_44 = new cjs.Graphics().p("AoLCpIJVrDIHCFzIpULCg");
	var mask_6_graphics_45 = new cjs.Graphics().p("AoRCyIJjrUIHAFyIpiLTg");
	var mask_6_graphics_46 = new cjs.Graphics().p("AoYC7IJxrlIHAFxIpxLkg");
	var mask_6_graphics_47 = new cjs.Graphics().p("AofDEIKAr1IG+FvIp+L1g");
	var mask_6_graphics_48 = new cjs.Graphics().p("AolDNIKNsGIG+FuIqNMFg");
	var mask_6_graphics_49 = new cjs.Graphics().p("AorDVIKbsWIG8FtIqaMWg");
	var mask_6_graphics_50 = new cjs.Graphics().p("AoyDfIKpsoIG8FtIqpMmg");
	var mask_6_graphics_51 = new cjs.Graphics().p("Ao5DnIK4s4IG7FsIq3M3g");
	var mask_6_graphics_52 = new cjs.Graphics().p("Ao/DwILFtJIG7FrIrFNIg");
	var mask_6_graphics_53 = new cjs.Graphics().p("ApGD5ILTtaIG6FqIrTNZg");
	var mask_6_graphics_54 = new cjs.Graphics().p("ApMECILhtqIG5FpIrhNpg");
	var mask_6_graphics_55 = new cjs.Graphics().p("ApTELILwt7IG3FnIrvN6g");
	var mask_6_graphics_56 = new cjs.Graphics().p("ApaETIL+uLIG3FnIr9OKg");
	var mask_6_graphics_57 = new cjs.Graphics().p("ApgEcIMMucIG1FmIsLObg");
	var mask_6_graphics_58 = new cjs.Graphics().p("ApnElIMautIG1FlIsZOsg");
	var mask_6_graphics_59 = new cjs.Graphics().p("ApuEuIMou+IG1FkIsoO9g");
	var mask_6_graphics_60 = new cjs.Graphics().p("Ap0E2IM2vNIGzFiIs1POg");
	var mask_6_graphics_61 = new cjs.Graphics().p("Ap6E/INEveIGyFiItEPdg");
	var mask_6_graphics_62 = new cjs.Graphics().p("AqBFIINSvvIGxFhItRPug");
	var mask_6_graphics_63 = new cjs.Graphics().p("AqIFRINhwAIGwFgItgP/g");
	var mask_6_graphics_64 = new cjs.Graphics().p("AqOFaINuwRIGvFfIttQQg");
	var mask_6_graphics_65 = new cjs.Graphics().p("AqVFjIN9wiIGuFeIt8Qhg");
	var mask_6_graphics_66 = new cjs.Graphics().p("AqbFsIOKwzIGtFdIuJQyg");
	var mask_6_graphics_67 = new cjs.Graphics().p("AqiF0IOZxDIGsFdIuYRCg");
	var mask_6_graphics_68 = new cjs.Graphics().p("AqpF9IOnxTIGsFbIumRSg");
	var mask_6_graphics_69 = new cjs.Graphics().p("AqvGGIO0xkIGrFaIu0Rjg");
	var mask_6_graphics_70 = new cjs.Graphics().p("Aq2GPIPDx1IGqFaIvCRzg");
	var mask_6_graphics_71 = new cjs.Graphics().p("Aq9GYIPRyGIGpFZIvPSEg");
	var mask_6_graphics_72 = new cjs.Graphics().p("ArDGhIPfyXIGoFYIveSVg");
	var mask_6_graphics_73 = new cjs.Graphics().p("ArJGpIPsynIGnFXIvrSmg");
	var mask_6_graphics_74 = new cjs.Graphics().p("ArQGyIP7y3IGmFVIv6S2g");
	var mask_6_graphics_75 = new cjs.Graphics().p("ArXG7IQKzIIGlFUIwITHg");
	var mask_6_graphics_76 = new cjs.Graphics().p("ArdHEIQXzZIGkFTIwWTYg");
	var mask_6_graphics_77 = new cjs.Graphics().p("ArkHNIQmzqIGjFTIwlTog");
	var mask_6_graphics_78 = new cjs.Graphics().p("ArrHVIQ0z6IGiFSIwyT5g");
	var mask_6_graphics_79 = new cjs.Graphics().p("ArxHeIRB0KIGiFQIxAUKg");
	var mask_6_graphics_80 = new cjs.Graphics().p("Ar4HoIRQ0dIGgFRIxOUZg");
	var mask_6_graphics_81 = new cjs.Graphics().p("Ar+HwIRe0tIGfFPIxcUrg");
	var mask_6_graphics_82 = new cjs.Graphics().p("AsFH5IRs09IGfFOIxrU7g");
	var mask_6_graphics_83 = new cjs.Graphics().p("AsLIBIR61NIGdFNIx4VMg");
	var mask_6_graphics_84 = new cjs.Graphics().p("AsSILISI1fIGdFMIyHVdg");
	var mask_6_graphics_85 = new cjs.Graphics().p("AsYITISV1vIGdFLIyWVug");
	var mask_6_graphics_86 = new cjs.Graphics().p("AsfIcISk1/IGbFJIyjV/g");
	var mask_6_graphics_87 = new cjs.Graphics().p("AsmIlISy2QIGbFJIyxWOg");
	var mask_6_graphics_88 = new cjs.Graphics().p("AssIuITA2hIGZFIIy/Wfg");
	var mask_6_graphics_89 = new cjs.Graphics().p("AszI3ITO2yIGZFHIzNWwg");
	var mask_6_graphics_90 = new cjs.Graphics().p("As6I/ITd3CIGYFGIzbXBg");
	var mask_6_graphics_91 = new cjs.Graphics().p("AtAJIITq3TIGXFFIzpXSg");
	var mask_6_graphics_92 = new cjs.Graphics().p("AtHJSIT53lIGWFEIz4Xjg");
	var mask_6_graphics_93 = new cjs.Graphics().p("AtNJaIUG30IGVFDI0GXyg");
	var mask_6_graphics_94 = new cjs.Graphics().p("AtUJjIUV4GIGUFDI0UYDg");
	var mask_6_graphics_95 = new cjs.Graphics().p("AtaJrIUj4VIGSFBI0hYUg");
	var mask_6_graphics_96 = new cjs.Graphics().p("AthJ1IUx4nIGSFAI0wYlg");
	var mask_6_graphics_97 = new cjs.Graphics().p("AtnJ9IU+43IGRFAI09Y1g");
	var mask_6_graphics_98 = new cjs.Graphics().p("AtuKGIVN5IIGQE/I1LZGg");
	var mask_6_graphics_99 = new cjs.Graphics().p("At1KPIVc5YIGPE8I1aZYg");
	var mask_6_graphics_100 = new cjs.Graphics().p("At7KYIVp5pIGOE8I1nZng");
	var mask_6_graphics_101 = new cjs.Graphics().p("AuCKhIV456IGNE7I12Z4g");
	var mask_6_graphics_102 = new cjs.Graphics().p("AuJKpIWG6KIGME6I2EaJg");
	var mask_6_graphics_103 = new cjs.Graphics().p("AuPKyIWT6bIGME6I2SaZg");
	var mask_6_graphics_104 = new cjs.Graphics().p("AuWK7IWi6sIGKE5I2gaqg");
	var mask_6_graphics_105 = new cjs.Graphics().p("AucLEIWv69IGKE4I2va7g");
	var mask_6_graphics_106 = new cjs.Graphics().p("AujLNIW+7OIGJE4I29bKg");
	var mask_6_graphics_107 = new cjs.Graphics().p("AupLVIXL7dIGIE1I3Kbcg");
	var mask_6_graphics_108 = new cjs.Graphics().p("AuwLfIXa7vIGHE1I3Zbsg");
	var mask_6_graphics_109 = new cjs.Graphics().p("Au2LnIXn7/IGGE0I3mb9g");
	var mask_6_graphics_110 = new cjs.Graphics().p("Au9LwIX28QIGFEzI31cOg");
	var mask_6_graphics_111 = new cjs.Graphics().p("AvEL5IYE8hIGEEyI4Ccfg");
	var mask_6_graphics_112 = new cjs.Graphics().p("AvKMCIYS8yIGDExI4Rcwg");
	var mask_6_graphics_113 = new cjs.Graphics().p("AvRMLIYh9CIGBEwI4ec/g");
	var mask_6_graphics_114 = new cjs.Graphics().p("AvXMTIYu9SIGBEvI4sdQg");
	var mask_6_graphics_115 = new cjs.Graphics().p("AveMcIY89jIGBEuI47dhg");
	var mask_6_graphics_116 = new cjs.Graphics().p("AvkMmIZK91IF/EuI5Idxg");
	var mask_6_graphics_117 = new cjs.Graphics().p("AvrMuIZY+FIF/EsI5XeDg");
	var mask_6_graphics_118 = new cjs.Graphics().p("AvxM3IZm+VIF9ErI5keTg");
	var mask_6_graphics_119 = new cjs.Graphics().p("Av4M/IZ0+mIF9ErI5zekg");
	var mask_6_graphics_120 = new cjs.Graphics().p("Av/NJIaD+4IF8EqI6Ce0g");
	var mask_6_graphics_121 = new cjs.Graphics().p("AwFNRIaQ/HIF7EoI6PfFg");
	var mask_6_graphics_122 = new cjs.Graphics().p("AwMNaIaf/YIF6EnI6efWg");
	var mask_6_graphics_123 = new cjs.Graphics().p("AwTNjIat/pIF5EnI6rfmg");
	var mask_6_graphics_124 = new cjs.Graphics().p("AwZNsIa7/6IF4EmI66f3g");
	var mask_6_graphics_125 = new cjs.Graphics().p("AwgN0MAbJggJIF4EjMgbIAgJg");
	var mask_6_graphics_126 = new cjs.Graphics().p("AwmN9MAbXggaIF2EjMgbVAgYg");
	var mask_6_graphics_127 = new cjs.Graphics().p("AwtOGMAblggrIF2EiMgbkAgpg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_6_graphics_9,x:76.8,y:193.9}).wait(1).to({graphics:mask_6_graphics_10,x:124.9,y:360.6}).wait(1).to({graphics:mask_6_graphics_11,x:125.6,y:359.7}).wait(1).to({graphics:mask_6_graphics_12,x:126.3,y:358.9}).wait(1).to({graphics:mask_6_graphics_13,x:127,y:358}).wait(1).to({graphics:mask_6_graphics_14,x:127.7,y:357.2}).wait(1).to({graphics:mask_6_graphics_15,x:128.4,y:356.3}).wait(1).to({graphics:mask_6_graphics_16,x:129.1,y:355.5}).wait(1).to({graphics:mask_6_graphics_17,x:129.8,y:354.6}).wait(1).to({graphics:mask_6_graphics_18,x:130.5,y:353.8}).wait(1).to({graphics:mask_6_graphics_19,x:131.2,y:352.9}).wait(1).to({graphics:mask_6_graphics_20,x:131.9,y:352.1}).wait(1).to({graphics:mask_6_graphics_21,x:132.6,y:351.2}).wait(1).to({graphics:mask_6_graphics_22,x:133.3,y:350.3}).wait(1).to({graphics:mask_6_graphics_23,x:133.9,y:349.5}).wait(1).to({graphics:mask_6_graphics_24,x:134.6,y:348.6}).wait(1).to({graphics:mask_6_graphics_25,x:135.3,y:347.8}).wait(1).to({graphics:mask_6_graphics_26,x:136,y:346.9}).wait(1).to({graphics:mask_6_graphics_27,x:136.7,y:346.1}).wait(1).to({graphics:mask_6_graphics_28,x:137.4,y:345.2}).wait(1).to({graphics:mask_6_graphics_29,x:138.1,y:344.4}).wait(1).to({graphics:mask_6_graphics_30,x:138.8,y:343.5}).wait(1).to({graphics:mask_6_graphics_31,x:139.5,y:342.7}).wait(1).to({graphics:mask_6_graphics_32,x:140.2,y:341.8}).wait(1).to({graphics:mask_6_graphics_33,x:140.9,y:341}).wait(1).to({graphics:mask_6_graphics_34,x:141.6,y:340.1}).wait(1).to({graphics:mask_6_graphics_35,x:142.3,y:339.2}).wait(1).to({graphics:mask_6_graphics_36,x:143,y:338.4}).wait(1).to({graphics:mask_6_graphics_37,x:143.7,y:337.5}).wait(1).to({graphics:mask_6_graphics_38,x:144.4,y:336.7}).wait(1).to({graphics:mask_6_graphics_39,x:145.1,y:335.8}).wait(1).to({graphics:mask_6_graphics_40,x:145.8,y:335}).wait(1).to({graphics:mask_6_graphics_41,x:146.5,y:334.1}).wait(1).to({graphics:mask_6_graphics_42,x:147.2,y:333.3}).wait(1).to({graphics:mask_6_graphics_43,x:147.8,y:332.4}).wait(1).to({graphics:mask_6_graphics_44,x:148.5,y:331.6}).wait(1).to({graphics:mask_6_graphics_45,x:149.2,y:330.7}).wait(1).to({graphics:mask_6_graphics_46,x:149.9,y:329.8}).wait(1).to({graphics:mask_6_graphics_47,x:150.6,y:329}).wait(1).to({graphics:mask_6_graphics_48,x:151.3,y:328.1}).wait(1).to({graphics:mask_6_graphics_49,x:152,y:327.3}).wait(1).to({graphics:mask_6_graphics_50,x:152.7,y:326.4}).wait(1).to({graphics:mask_6_graphics_51,x:153.4,y:325.6}).wait(1).to({graphics:mask_6_graphics_52,x:154.1,y:324.7}).wait(1).to({graphics:mask_6_graphics_53,x:154.8,y:323.9}).wait(1).to({graphics:mask_6_graphics_54,x:155.5,y:323}).wait(1).to({graphics:mask_6_graphics_55,x:156.2,y:322.2}).wait(1).to({graphics:mask_6_graphics_56,x:156.9,y:321.3}).wait(1).to({graphics:mask_6_graphics_57,x:157.6,y:320.5}).wait(1).to({graphics:mask_6_graphics_58,x:158.3,y:319.6}).wait(1).to({graphics:mask_6_graphics_59,x:159,y:318.7}).wait(1).to({graphics:mask_6_graphics_60,x:159.7,y:317.9}).wait(1).to({graphics:mask_6_graphics_61,x:160.4,y:317}).wait(1).to({graphics:mask_6_graphics_62,x:161.1,y:316.2}).wait(1).to({graphics:mask_6_graphics_63,x:161.7,y:315.3}).wait(1).to({graphics:mask_6_graphics_64,x:162.4,y:314.5}).wait(1).to({graphics:mask_6_graphics_65,x:163.1,y:313.6}).wait(1).to({graphics:mask_6_graphics_66,x:163.8,y:312.8}).wait(1).to({graphics:mask_6_graphics_67,x:164.5,y:311.9}).wait(1).to({graphics:mask_6_graphics_68,x:165.2,y:311.1}).wait(1).to({graphics:mask_6_graphics_69,x:165.9,y:310.2}).wait(1).to({graphics:mask_6_graphics_70,x:166.6,y:309.4}).wait(1).to({graphics:mask_6_graphics_71,x:167.3,y:308.5}).wait(1).to({graphics:mask_6_graphics_72,x:168,y:307.6}).wait(1).to({graphics:mask_6_graphics_73,x:168.7,y:306.8}).wait(1).to({graphics:mask_6_graphics_74,x:169.4,y:305.9}).wait(1).to({graphics:mask_6_graphics_75,x:170.1,y:305.1}).wait(1).to({graphics:mask_6_graphics_76,x:170.8,y:304.2}).wait(1).to({graphics:mask_6_graphics_77,x:171.5,y:303.4}).wait(1).to({graphics:mask_6_graphics_78,x:172.2,y:302.5}).wait(1).to({graphics:mask_6_graphics_79,x:172.9,y:301.7}).wait(1).to({graphics:mask_6_graphics_80,x:173.6,y:300.8}).wait(1).to({graphics:mask_6_graphics_81,x:174.3,y:300}).wait(1).to({graphics:mask_6_graphics_82,x:174.9,y:299.1}).wait(1).to({graphics:mask_6_graphics_83,x:175.6,y:298.3}).wait(1).to({graphics:mask_6_graphics_84,x:176.3,y:297.4}).wait(1).to({graphics:mask_6_graphics_85,x:177.1,y:296.5}).wait(1).to({graphics:mask_6_graphics_86,x:177.7,y:295.7}).wait(1).to({graphics:mask_6_graphics_87,x:178.4,y:294.8}).wait(1).to({graphics:mask_6_graphics_88,x:179.1,y:294}).wait(1).to({graphics:mask_6_graphics_89,x:179.8,y:293.1}).wait(1).to({graphics:mask_6_graphics_90,x:180.5,y:292.3}).wait(1).to({graphics:mask_6_graphics_91,x:181.2,y:291.4}).wait(1).to({graphics:mask_6_graphics_92,x:181.9,y:290.6}).wait(1).to({graphics:mask_6_graphics_93,x:182.6,y:289.7}).wait(1).to({graphics:mask_6_graphics_94,x:183.3,y:288.9}).wait(1).to({graphics:mask_6_graphics_95,x:184,y:288}).wait(1).to({graphics:mask_6_graphics_96,x:184.7,y:287.2}).wait(1).to({graphics:mask_6_graphics_97,x:185.4,y:286.3}).wait(1).to({graphics:mask_6_graphics_98,x:186.1,y:285.4}).wait(1).to({graphics:mask_6_graphics_99,x:186.8,y:284.6}).wait(1).to({graphics:mask_6_graphics_100,x:187.5,y:283.7}).wait(1).to({graphics:mask_6_graphics_101,x:188.2,y:282.9}).wait(1).to({graphics:mask_6_graphics_102,x:188.9,y:282}).wait(1).to({graphics:mask_6_graphics_103,x:189.6,y:281.2}).wait(1).to({graphics:mask_6_graphics_104,x:190.3,y:280.3}).wait(1).to({graphics:mask_6_graphics_105,x:191,y:279.5}).wait(1).to({graphics:mask_6_graphics_106,x:191.6,y:278.6}).wait(1).to({graphics:mask_6_graphics_107,x:192.3,y:277.8}).wait(1).to({graphics:mask_6_graphics_108,x:193,y:276.9}).wait(1).to({graphics:mask_6_graphics_109,x:193.7,y:276.1}).wait(1).to({graphics:mask_6_graphics_110,x:194.4,y:275.2}).wait(1).to({graphics:mask_6_graphics_111,x:195.1,y:274.3}).wait(1).to({graphics:mask_6_graphics_112,x:195.8,y:273.5}).wait(1).to({graphics:mask_6_graphics_113,x:196.5,y:272.6}).wait(1).to({graphics:mask_6_graphics_114,x:197.2,y:271.8}).wait(1).to({graphics:mask_6_graphics_115,x:197.9,y:270.9}).wait(1).to({graphics:mask_6_graphics_116,x:198.6,y:270.1}).wait(1).to({graphics:mask_6_graphics_117,x:199.3,y:269.2}).wait(1).to({graphics:mask_6_graphics_118,x:200,y:268.4}).wait(1).to({graphics:mask_6_graphics_119,x:200.7,y:267.5}).wait(1).to({graphics:mask_6_graphics_120,x:201.4,y:266.7}).wait(1).to({graphics:mask_6_graphics_121,x:202.1,y:265.8}).wait(1).to({graphics:mask_6_graphics_122,x:202.8,y:265}).wait(1).to({graphics:mask_6_graphics_123,x:203.5,y:264.1}).wait(1).to({graphics:mask_6_graphics_124,x:204.2,y:263.2}).wait(1).to({graphics:mask_6_graphics_125,x:204.9,y:262.4}).wait(1).to({graphics:mask_6_graphics_126,x:205.5,y:261.5}).wait(1).to({graphics:mask_6_graphics_127,x:206.2,y:260.7}).wait(599));

	// Layer 2
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(20,1,1).p("AttR9IJCoiQGEk0FjmuQFjmwA9k2QAujqhIgl");
	this.shape_7.setTransform(206.6,236.4);
	this.shape_7._off = true;

	var maskedShapeInstanceList = [this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(9).to({_off:false},0).wait(717));

	// Letter
	this.instance_4 = new lib.h("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(275,275);
	this.instance_4.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(726));

	// Background
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_8.setTransform(275,275,3.373,2.543);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_9.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).wait(726));

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