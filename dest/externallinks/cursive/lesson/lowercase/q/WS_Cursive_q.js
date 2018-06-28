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
	this.shape.graphics.f("#FFFFFF").s().p("Av7X2QhShgAAiKQAAhmAhg+IJ71pQn9GakXgBQi8ABhuiEQhth+AAjBQAAjBDel6QCNjECziTQCtiMDKheQDHhbDigsQDbgsD1AAQFbAGAACEQgBBMj2GpIk7ImIh+EaQENg1Eqi/QD2iYD2jqIECjwQBbhNCqijQBGgwApABQBngBAABzQAAAuiQCwIjHDcQmVGLjzCiQjBB+i+BOQjNBYjJAgQA6DHAADfQAACzhADwQhGEEhiB8QktETitAAQiGAAhWhkgAsrTaIgFA+QAAAjARAAQA6AABbhKIBzh+QChmFAAjKIgRjTgAjh0UQi1AkiiBIQipBKiNBsQiPBzhzCSQjNE6AACPQAACcB4gBQFRAAJ2qlIAygxIDUj8QBHhNAyh3IALgYQi6AAizAjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-162.9,-162.6,325.8,325.2);


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


(lib.ar5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AAAgYIAAAx");
	this.shape.setTransform(0,-101.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AAAAgIAAg/");
	this.shape_1.setTransform(0,-100.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AAAAnIAAhO");
	this.shape_2.setTransform(0,-100.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("AAAAvIAAhc");
	this.shape_3.setTransform(0,-99.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("AAAA2IAAhr");
	this.shape_4.setTransform(0,-98.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(5,1,1).p("AAAA9IAAh5");
	this.shape_5.setTransform(0,-97.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(5,1,1).p("AAABEIAAiH");
	this.shape_6.setTransform(0,-97.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(5,1,1).p("AAABLIAAiV");
	this.shape_7.setTransform(0,-96.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(5,1,1).p("AAABTIAAil");
	this.shape_8.setTransform(0,-95.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(5,1,1).p("AAABaIAAiz");
	this.shape_9.setTransform(0,-95.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(5,1,1).p("AAABhIAAjB");
	this.shape_10.setTransform(0,-94.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5,1,1).p("AAABoIAAjP");
	this.shape_11.setTransform(0,-93.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(5,1,1).p("AAABwIAAje");
	this.shape_12.setTransform(0,-92.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(5,1,1).p("AAAB3IAAjt");
	this.shape_13.setTransform(0,-92.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(5,1,1).p("AAAB+IAAj7");
	this.shape_14.setTransform(0,-91.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(5,1,1).p("AAACFIAAkJ");
	this.shape_15.setTransform(0,-90.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(5,1,1).p("AAACMIAAkX");
	this.shape_16.setTransform(0,-90);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(5,1,1).p("AAACUIAAkn");
	this.shape_17.setTransform(0,-89.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(5,1,1).p("AAACbIAAk1");
	this.shape_18.setTransform(0,-88.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(5,1,1).p("AAACiIAAlD");
	this.shape_19.setTransform(0,-87.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(5,1,1).p("AAACpIAAlR");
	this.shape_20.setTransform(0,-87.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(5,1,1).p("AAACwIAAlf");
	this.shape_21.setTransform(0,-86.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(5,1,1).p("AAAC3IAAlu");
	this.shape_22.setTransform(0,-85.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(5,1,1).p("AAAC/IAAl9");
	this.shape_23.setTransform(0,-85);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(5,1,1).p("AAADGIAAmL");
	this.shape_24.setTransform(0,-84.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(5,1,1).p("AAADNIAAmZ");
	this.shape_25.setTransform(0,-83.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(5,1,1).p("AAADVIAAmp");
	this.shape_26.setTransform(0,-82.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(5,1,1).p("AAADbIAAm2");
	this.shape_27.setTransform(0,-82.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(5,1,1).p("AAADjIAAnF");
	this.shape_28.setTransform(0,-81.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(5,1,1).p("AAADqIAAnT");
	this.shape_29.setTransform(0,-80.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(5,1,1).p("AAADxIAAnh");
	this.shape_30.setTransform(0,-79.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(5,1,1).p("AAAD5IAAnw");
	this.shape_31.setTransform(0,-79.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(5,1,1).p("AAAEAIAAn/");
	this.shape_32.setTransform(0,-78.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(5,1,1).p("AAAEHIAAoN");
	this.shape_33.setTransform(0,-77.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(5,1,1).p("AAAEOIAAob");
	this.shape_34.setTransform(0,-77);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(5,1,1).p("AAAEVIAAop");
	this.shape_35.setTransform(0,-76.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(5,1,1).p("AAAEcIAAo4");
	this.shape_36.setTransform(0,-75.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(5,1,1).p("AAAEkIAApH");
	this.shape_37.setTransform(0,-74.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(5,1,1).p("AAAErIAApV");
	this.shape_38.setTransform(0,-74.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(5,1,1).p("AAAEyIAApj");
	this.shape_39.setTransform(0,-73.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(5,1,1).p("AAAE5IAApx");
	this.shape_40.setTransform(0,-72.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(5,1,1).p("AAAFBIAAqB");
	this.shape_41.setTransform(0,-72);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(5,1,1).p("AAAFIIAAqP");
	this.shape_42.setTransform(0,-71.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(5,1,1).p("AAAFPIAAqd");
	this.shape_43.setTransform(0,-70.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(5,1,1).p("AAAFWIAAqr");
	this.shape_44.setTransform(0,-69.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(5,1,1).p("AAAFdIAAq5");
	this.shape_45.setTransform(0,-69.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(5,1,1).p("AAAFlIAArI");
	this.shape_46.setTransform(0,-68.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(5,1,1).p("AAAFsIAArX");
	this.shape_47.setTransform(0,-67.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(5,1,1).p("AAAFzIAArl");
	this.shape_48.setTransform(0,-66.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(5,1,1).p("AAAF6IAArz");
	this.shape_49.setTransform(0,-66.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(5,1,1).p("AAAGCIAAsD");
	this.shape_50.setTransform(0,-65.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(5,1,1).p("AAAGJIAAsR");
	this.shape_51.setTransform(0,-64.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(5,1,1).p("AAAGQIAAsf");
	this.shape_52.setTransform(0,-64.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(5,1,1).p("AAAGXIAAst");
	this.shape_53.setTransform(0,-63.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(5,1,1).p("AAAGeIAAs7");
	this.shape_54.setTransform(0,-62.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(5,1,1).p("AAAGmIAAtL");
	this.shape_55.setTransform(0,-61.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(5,1,1).p("AAAGtIAAtZ");
	this.shape_56.setTransform(0,-61.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(5,1,1).p("AAAG0IAAtn");
	this.shape_57.setTransform(0,-60.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(5,1,1).p("AAAG7IAAt1");
	this.shape_58.setTransform(0,-59.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(5,1,1).p("AAAnBIAAOD");
	this.shape_59.setTransform(0,-59);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).wait(1));

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0.3,-103.8,1,1,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-16.8},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.1,-106.6,22.3,13.8);


(lib.ar4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-48.7,-31.5,1,1,-17.5,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-94.4,guide:{path:[-47.9,-29.4,-30.4,37.2,47,28.6]}},59).wait(1));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AlhCZICwlVIBHAkIixFVg");
	var mask_graphics_1 = new cjs.Graphics().p("AiDCUICwlVIBXAtIiwFVg");
	var mask_graphics_2 = new cjs.Graphics().p("AiLCQICvlVIBoA2IivFVg");
	var mask_graphics_3 = new cjs.Graphics().p("AiUCMICwlVIB5A+IivFVg");
	var mask_graphics_4 = new cjs.Graphics().p("AicCHICvlVICLBIIiwFVg");
	var mask_graphics_5 = new cjs.Graphics().p("AilCDICvlVICcBQIivFVg");
	var mask_graphics_6 = new cjs.Graphics().p("AiuB+ICwlVICtBZIiwFWg");
	var mask_graphics_7 = new cjs.Graphics().p("Ai2B6ICwlVIC9BiIiwFVg");
	var mask_graphics_8 = new cjs.Graphics().p("Ai/B1ICxlVIDOBrIixFWg");
	var mask_graphics_9 = new cjs.Graphics().p("AjHBxICwlVIDfB0IiwFVg");
	var mask_graphics_10 = new cjs.Graphics().p("AjQBtICxlVIDwB8IixFVg");
	var mask_graphics_11 = new cjs.Graphics().p("AjYBoICwlVIEBCGIiwFVg");
	var mask_graphics_12 = new cjs.Graphics().p("AjhBkICwlVIETCOIiwFVg");
	var mask_graphics_13 = new cjs.Graphics().p("AjqBfICxlVIEkCYIixFVg");
	var mask_graphics_14 = new cjs.Graphics().p("AjyBbICwlVIE1CgIiwFVg");
	var mask_graphics_15 = new cjs.Graphics().p("Aj7BWICxlVIFGCqIiwFVg");
	var mask_graphics_16 = new cjs.Graphics().p("AkDBSICwlVIFYCyIixFVg");
	var mask_graphics_17 = new cjs.Graphics().p("AkMBOICxlVIFoC6IixFVg");
	var mask_graphics_18 = new cjs.Graphics().p("AkUBJICwlVIF5DEIiwFVg");
	var mask_graphics_19 = new cjs.Graphics().p("AkdBFICwlVIGLDMIiwFVg");
	var mask_graphics_20 = new cjs.Graphics().p("AkmBAICxlVIGcDWIixFVg");
	var mask_graphics_21 = new cjs.Graphics().p("AkuA8ICwlVIGtDeIiwFVg");
	var mask_graphics_22 = new cjs.Graphics().p("Ak3A3ICxlVIG+DoIixFVg");
	var mask_graphics_23 = new cjs.Graphics().p("Ak/AzICwlVIHPDwIiwFVg");
	var mask_graphics_24 = new cjs.Graphics().p("AlIAvICxlVIHgD4IiwFVg");
	var mask_graphics_25 = new cjs.Graphics().p("AlRAqICxlVIHyECIixFVg");
	var mask_graphics_26 = new cjs.Graphics().p("AlZAmICwlVIIDEKIiwFVg");
	var mask_graphics_27 = new cjs.Graphics().p("AliAhICxlVIIUEUIixFVg");
	var mask_graphics_28 = new cjs.Graphics().p("AlqAdICwlVIImEcIixFVg");
	var mask_graphics_29 = new cjs.Graphics().p("AlzAYICxlVII2EmIixFVg");
	var mask_graphics_30 = new cjs.Graphics().p("Al8AUICxlVIJIEuIixFVg");
	var mask_graphics_31 = new cjs.Graphics().p("AmEAPICwlVIJZE4IiwFVg");
	var mask_graphics_32 = new cjs.Graphics().p("AmNALICwlVIJrFAIiwFVg");
	var mask_graphics_33 = new cjs.Graphics().p("AmWAHICxlVIJ8FIIixFVg");
	var mask_graphics_34 = new cjs.Graphics().p("AmeACICwlVIKNFSIixFVg");
	var mask_graphics_35 = new cjs.Graphics().p("AmngBICxlWIKeFZIixFWg");
	var mask_graphics_36 = new cjs.Graphics().p("AmvgGICwlWIKvFjIiwFWg");
	var mask_graphics_37 = new cjs.Graphics().p("Am4gKICxlWILAFrIixFWg");
	var mask_graphics_38 = new cjs.Graphics().p("AnBgPICxlWILRF1IiwFWg");
	var mask_graphics_39 = new cjs.Graphics().p("AnJgTICwlWILjF9IiwFWg");
	var mask_graphics_40 = new cjs.Graphics().p("AnSgXICxlWIL0GGIixFVg");
	var mask_graphics_41 = new cjs.Graphics().p("AnagcICwlWIMFGPIiwFWg");
	var mask_graphics_42 = new cjs.Graphics().p("AnjggICxlWIMWGXIixFXg");
	var mask_graphics_43 = new cjs.Graphics().p("AnrglICwlWIMnGhIiwFWg");
	var mask_graphics_44 = new cjs.Graphics().p("An0gpICxlWIM4GpIixFWg");
	var mask_graphics_45 = new cjs.Graphics().p("An9guICxlWINJGzIiwFWg");
	var mask_graphics_46 = new cjs.Graphics().p("AoFgyICwlWINbG7IixFWg");
	var mask_graphics_47 = new cjs.Graphics().p("AoOg2ICxlWINrHEIiwFWg");
	var mask_graphics_48 = new cjs.Graphics().p("AoWg7ICwlWIN9HNIiwFWg");
	var mask_graphics_49 = new cjs.Graphics().p("Aofg/ICxlWIOOHWIixFWg");
	var mask_graphics_50 = new cjs.Graphics().p("AonhEICwlWIOfHfIiwFWg");
	var mask_graphics_51 = new cjs.Graphics().p("AowhIICwlWIOxHnIiwFWg");
	var mask_graphics_52 = new cjs.Graphics().p("Ao5hNICxlWIPCHxIixFWg");
	var mask_graphics_53 = new cjs.Graphics().p("ApBhRICwlWIPTH5IiwFWg");
	var mask_graphics_54 = new cjs.Graphics().p("ApKhVICxlWIPkICIixFWg");
	var mask_graphics_55 = new cjs.Graphics().p("ApShaICwlWIP1ILIiwFWg");
	var mask_graphics_56 = new cjs.Graphics().p("ApbheICxlWIQGIUIixFWg");
	var mask_graphics_57 = new cjs.Graphics().p("ApjhjICwlWIQXIdIiwFWg");
	var mask_graphics_58 = new cjs.Graphics().p("ApshnICwlWIQpIlIixFWg");
	var mask_graphics_59 = new cjs.Graphics().p("Ap1hsICxlWIQ6IvIixFWg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-35.4,y:-17.5}).wait(1).to({graphics:mask_graphics_1,x:-57.7,y:-17}).wait(1).to({graphics:mask_graphics_2,x:-56.8,y:-16.6}).wait(1).to({graphics:mask_graphics_3,x:-55.9,y:-16.1}).wait(1).to({graphics:mask_graphics_4,x:-55.1,y:-15.7}).wait(1).to({graphics:mask_graphics_5,x:-54.2,y:-15.2}).wait(1).to({graphics:mask_graphics_6,x:-53.4,y:-14.8}).wait(1).to({graphics:mask_graphics_7,x:-52.5,y:-14.3}).wait(1).to({graphics:mask_graphics_8,x:-51.7,y:-13.9}).wait(1).to({graphics:mask_graphics_9,x:-50.8,y:-13.4}).wait(1).to({graphics:mask_graphics_10,x:-49.9,y:-13}).wait(1).to({graphics:mask_graphics_11,x:-49.1,y:-12.6}).wait(1).to({graphics:mask_graphics_12,x:-48.2,y:-12.1}).wait(1).to({graphics:mask_graphics_13,x:-47.4,y:-11.7}).wait(1).to({graphics:mask_graphics_14,x:-46.5,y:-11.2}).wait(1).to({graphics:mask_graphics_15,x:-45.6,y:-10.8}).wait(1).to({graphics:mask_graphics_16,x:-44.8,y:-10.3}).wait(1).to({graphics:mask_graphics_17,x:-43.9,y:-9.9}).wait(1).to({graphics:mask_graphics_18,x:-43.1,y:-9.5}).wait(1).to({graphics:mask_graphics_19,x:-42.2,y:-9}).wait(1).to({graphics:mask_graphics_20,x:-41.4,y:-8.6}).wait(1).to({graphics:mask_graphics_21,x:-40.5,y:-8.1}).wait(1).to({graphics:mask_graphics_22,x:-39.6,y:-7.7}).wait(1).to({graphics:mask_graphics_23,x:-38.8,y:-7.2}).wait(1).to({graphics:mask_graphics_24,x:-37.9,y:-6.8}).wait(1).to({graphics:mask_graphics_25,x:-37.1,y:-6.4}).wait(1).to({graphics:mask_graphics_26,x:-36.2,y:-5.9}).wait(1).to({graphics:mask_graphics_27,x:-35.4,y:-5.5}).wait(1).to({graphics:mask_graphics_28,x:-34.5,y:-5}).wait(1).to({graphics:mask_graphics_29,x:-33.6,y:-4.6}).wait(1).to({graphics:mask_graphics_30,x:-32.8,y:-4.2}).wait(1).to({graphics:mask_graphics_31,x:-32,y:-3.7}).wait(1).to({graphics:mask_graphics_32,x:-31.1,y:-3.3}).wait(1).to({graphics:mask_graphics_33,x:-30.2,y:-2.8}).wait(1).to({graphics:mask_graphics_34,x:-29.4,y:-2.4}).wait(1).to({graphics:mask_graphics_35,x:-28.5,y:-1.9}).wait(1).to({graphics:mask_graphics_36,x:-27.7,y:-1.5}).wait(1).to({graphics:mask_graphics_37,x:-26.8,y:-1.1}).wait(1).to({graphics:mask_graphics_38,x:-25.9,y:-0.6}).wait(1).to({graphics:mask_graphics_39,x:-25.1,y:-0.2}).wait(1).to({graphics:mask_graphics_40,x:-24.2,y:0.3}).wait(1).to({graphics:mask_graphics_41,x:-23.4,y:0.7}).wait(1).to({graphics:mask_graphics_42,x:-22.5,y:1.2}).wait(1).to({graphics:mask_graphics_43,x:-21.7,y:1.6}).wait(1).to({graphics:mask_graphics_44,x:-20.8,y:2}).wait(1).to({graphics:mask_graphics_45,x:-19.9,y:2.5}).wait(1).to({graphics:mask_graphics_46,x:-19.1,y:2.9}).wait(1).to({graphics:mask_graphics_47,x:-18.2,y:3.4}).wait(1).to({graphics:mask_graphics_48,x:-17.4,y:3.8}).wait(1).to({graphics:mask_graphics_49,x:-16.5,y:4.3}).wait(1).to({graphics:mask_graphics_50,x:-15.7,y:4.7}).wait(1).to({graphics:mask_graphics_51,x:-14.8,y:5.1}).wait(1).to({graphics:mask_graphics_52,x:-13.9,y:5.6}).wait(1).to({graphics:mask_graphics_53,x:-13.1,y:6}).wait(1).to({graphics:mask_graphics_54,x:-12.2,y:6.5}).wait(1).to({graphics:mask_graphics_55,x:-11.4,y:6.9}).wait(1).to({graphics:mask_graphics_56,x:-10.5,y:7.4}).wait(1).to({graphics:mask_graphics_57,x:-9.7,y:7.8}).wait(1).to({graphics:mask_graphics_58,x:-8.8,y:8.2}).wait(1).to({graphics:mask_graphics_59,x:-7.9,y:8.7}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AnfkmQCwKeMPhb");

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.3,-37.3,21.2,38.8);


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
(lib.WS_Cursive_q = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_745 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(745).call(this.frame_745).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(311.4,130.3,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[311.4,130.5,263,122.1,216.2,140.2,168.9,158.5,143.5,201.1,118.1,243.7,129.5,261.4,140.9,279,166.6,272.8,192.4,266.6,229.1,234.6,265.8,202.6,284.8,174.7,303.7,146.8,311.1,131.9]}},265).wait(15).to({startPosition:0},0).to({guide:{path:[311.1,131.9,289.2,173.1,266.8,215.4,245.2,256.5,222.9,300.7,200.7,345,187.4,382,180.8,400.4,180.6,410.6,180.5,420.8,186.9,422.7]}},135).wait(16).to({startPosition:0},0).to({guide:{path:[186.9,422.7,236.9,422,247.2,364.6,257.6,307.3,241.9,279.1]}},104).wait(16).to({startPosition:0},0).to({guide:{path:[241.9,279.3,291.4,271.3,341.2,235.1,390.8,198.9,420.9,162]}},104).wait(16).to({startPosition:0},0).to({guide:{path:[420.9,161.9,496.1,153.1,472.1,83.1,467.9,71,461.7,59,440.7,18.3,466.9,-21.9]}},65).wait(1));

	// Layer 21
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(310,130.4,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},265).wait(15).to({_off:false,x:188,y:422.4},0).to({_off:true},135).wait(16).to({_off:false,x:235,y:278.4},0).to({_off:true},104).wait(16).to({_off:false,x:423,y:159.4},0).to({_off:true},104).wait(82));

	// Layer 20
	this.instance_1 = new lib.ar2("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350,271,1,1,-165.2,0,0,0.8,-0.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(560).to({_off:false},0).wait(186));

	// Layer 16 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_560 = new cjs.Graphics().p("AihUBQoTo4AbsIQAbsII4oRQI1oTMJAbMgCAA6iQsJgaoQo3g");
	var mask_graphics_561 = new cjs.Graphics().p("Ah+UWQobowAOsHQAOsJIwoaQItocMJAPMgBFA6kQsJgPoZoug");
	var mask_graphics_562 = new cjs.Graphics().p("AhaUrQokonACsIQACsJInojQIlokMJACMgALA6lQsJgCohomg");
	var mask_graphics_563 = new cjs.Graphics().p("AhPVAQotofgKsJQgKsIIforQIcotMJgKMAAwA6kIgcABQr3AAogoTg");
	var mask_graphics_564 = new cjs.Graphics().p("AhIVUQo1oWgXsJQgWsHIWo0QITo1MIgWMABsA6iIg+ABQrhAAocn+g");
	var mask_graphics_565 = new cjs.Graphics().p("AhBVnQo+oNgisIQgjsHINo8QIKo9MIgjMACnA6hQgwACgvAAQrMAAoYnrg");
	var mask_graphics_566 = new cjs.Graphics().p("Ag6V6QpFoEgvsHQgvsHIEpEQIBpFMHgvMADiA6dQhBAEg/AAQq4AAoTnXg");
	var mask_graphics_567 = new cjs.Graphics().p("AgyWMQpOn6g7sHQg7sFH7pNQH4pNMGg7MAEdA6ZQhRAGhPAAQqkAAoOnEg");
	var mask_graphics_568 = new cjs.Graphics().p("AgqWeQpWnxhHsGQhHsEHxpUQHvpWMFhHMAFXA6UQhhAJheAAQqRAAoImxg");
	var mask_graphics_569 = new cjs.Graphics().p("AgiWvQpdnohTsEQhUsDHopcQHlpdMEhUMAGSA6OQhxANhtAAQp+AAoDmfg");
	var mask_graphics_570 = new cjs.Graphics().p("AgZW/QplnehfsDQhgsCHepjQHcplMChfMAHNA6HQiBAQh8AAQpsAAn8mNg");
	var mask_graphics_571 = new cjs.Graphics().p("AgQXPQptnUhrsCQhssAHVprQHRpsMChrMAIHA5/QiQAUiLAAQpaAAn2l7g");
	var mask_graphics_572 = new cjs.Graphics().p("AgHXeQp0nKh3sAQh4r+HLpyQHIp0L/h3MAJBA52QifAZiZAAQpJAAnvlqg");
	var mask_graphics_573 = new cjs.Graphics().p("AACXsQp6nAiEr9QiDr9HAp5QG/p6L8iEMAJ8A5tQiuAeinAAQo4AAnplag");
	var mask_graphics_574 = new cjs.Graphics().p("AALX6QqAm2iQr7QiQr6G3qAQG1qCL6iPMAK1A5iQi8Aji2AAQonAAnilJg");
	var mask_graphics_575 = new cjs.Graphics().p("AAWYIQqImsicr5Qibr4GsqHQGrqIL4icMALvA5XQjLAqjDAAQoYAAnZk5g");
	var mask_graphics_576 = new cjs.Graphics().p("AAgYVQqOmiior3Qinr1GiqNQGgqPL2ioMAMoA5LQjZAwjRAAQoHAAnSkpg");
	var mask_graphics_577 = new cjs.Graphics().p("AArYhQqVmYizrzQi0rzGYqUQGWqVLzi0MANiA4+QjoA3jeAAQn4AAnJkag");
	var mask_graphics_578 = new cjs.Graphics().p("AA2YsQqbmNi/rwQjArwGOqaQGLqcLwi/MAObA4vQj1A+jsAAQnoAAnBkLg");
	var mask_graphics_579 = new cjs.Graphics().p("ABBY3QqhmCjLruQjLrsGDqhQGBqhLsjLMAPVA4fQkDBGj6AAQnZAAm4j8g");
	var mask_graphics_580 = new cjs.Graphics().p("ABNZBQqnl3jXrqQjXrqF4qmQF2qoLpjXMAQOA4QQkQBPkHAAQnKAAmvjvg");
	var mask_graphics_581 = new cjs.Graphics().p("ABZZLQqtltjjrnQjirlFtqsQFsquLljiMARGA3+QkdBXkUAAQm8AAmljgg");
	var mask_graphics_582 = new cjs.Graphics().p("ABlZUQqzlijurjQjuriFiqyQFhqzLijuMAR+A3tQkpBgkiAAQmtAAmcjTg");
	var mask_graphics_583 = new cjs.Graphics().p("ABxZdQq4lYj5rfQj6reFXq3QFWq5Lej5MAS2A3aQk2BpkvAAQmfAAmSjFg");
	var mask_graphics_584 = new cjs.Graphics().p("AB+ZkQq9lMkFrbQkGraFNq9QFLq9LakGMATtA3HQlCB0k9AAQmRAAmHi6g");
	var mask_graphics_585 = new cjs.Graphics().p("ACLZsQrClCkRrWQkRrWFCrCQE/rDLWkQMAUlA2yQlOB9lKAAQmDAAl9isg");
	var mask_graphics_586 = new cjs.Graphics().p("ACYZyQrHk2kcrSQkcrRE2rHQE1rILRkcMAVcA2dQlaCIlXAAQl2AAlyihg");
	var mask_graphics_587 = new cjs.Graphics().p("ACmZ4QrMkrkorNQknrNErrMQEprMLNkoMAWTA2HQlmCUllAAQlnAAlniWg");
	var mask_graphics_588 = new cjs.Graphics().p("AC0Z9QrRkfkzrJQkyrIEfrQQEerRLIkzMAXJA1wQlwCflzAAQlaAAlbiLg");
	var mask_graphics_589 = new cjs.Graphics().p("ADCaCQrVkUk+rEQk+rDEUrUQETrWLDk+MAX/A1YQl8CrmAAAQlMAAlQiAg");
	var mask_graphics_590 = new cjs.Graphics().p("ADQaGQrZkIlJq/QlJq/EJrYQEHrZK+lKMAY0A1AQmGC3mOAAQk/AAlEh2g");
	var mask_graphics_591 = new cjs.Graphics().p("ADfaKQrdj9lVq6QlUq6D+rbQD8reK4lUMAZqA0mQmRDDmcAAQkxAAk4hrg");
	var mask_graphics_592 = new cjs.Graphics().p("ADuaMQrhjxlfq0Qlgq0DzrgQDwrhK0lfMAadA0LQmbDQmqAAQkkAAkrhig");
	var mask_graphics_593 = new cjs.Graphics().p("AD9aPQrljmlqqvQlqquDnrkQDkrlKvlpMAbRAzwQmkDdm5AAQkXAAkehYg");
	var mask_graphics_594 = new cjs.Graphics().p("AEMaQQrojal1qpQl0qoDarnQDZrpKpl0MAcFAzUQmuDrnHAAQkJAAkShQg");
	var mask_graphics_595 = new cjs.Graphics().p("AEcaRQrsjOl/qjQl/qjDPrqQDMrsKjl/MAc5Ay4Qm3D5nWAAQj8AAkEhIg");
	var mask_graphics_596 = new cjs.Graphics().p("AEraRQrujCmKqdQmKqcDDruQDBrvKdmJMAdsAyZQnAEInlAAQjuAAj4hAg");
	var mask_graphics_597 = new cjs.Graphics().p("AE7aRQrxi3mUqWQmVqWC4rwQC1ryKWmVMAeeAx8QnIEXn0AAQjhAAjqg5g");
	var mask_graphics_598 = new cjs.Graphics().p("AFMaQQr1irmeqPQmfqQCsrzQCpr1KQmfMAfQAxdQnREmoDAAQjTAAjcgyg");
	var mask_graphics_599 = new cjs.Graphics().p("AFcaOQr3iempqJQmoqKCfr1QCdr4KKmoMAgBAw8QnZE1oSAAQjGAAjOgrg");
	var mask_graphics_600 = new cjs.Graphics().p("AFtaMQr5iTmzqCQmzqCCTr4QCSr6KCmzMAgzAwbQnhFGojAAQi4AAi/glg");
	var mask_graphics_601 = new cjs.Graphics().p("AF+aJQr8iGm9p8Qm9p7CIr7QCFr7J8m9MAhjAv6QnoFVozAAQiqAAixgfg");
	var mask_graphics_602 = new cjs.Graphics().p("AGPaGQr+h7nHp0QnHp1B8r8QB5r+J1nHMAiTAvYQnvFnpEAAQicAAiigag");
	var mask_graphics_603 = new cjs.Graphics().p("AGgaBQr/hunRptQnRptBwr+QBtsAJtnRMAjDAu1Qn2F4pVAAQiOAAiTgWg");
	var mask_graphics_604 = new cjs.Graphics().p("AGyZ9QsBhjnbpmQnaplBjsAQBisBJlnaMAjxAuQQn8GJpmAAQh/AAiEgQg");
	var mask_graphics_605 = new cjs.Graphics().p("AHDZ3QsChWnkpeQnkpeBXsCQBVsCJenkMAkgAtsQoDGbp4AAQhwAAh1gNg");
	var mask_graphics_606 = new cjs.Graphics().p("AHUZ1QsDhLntpXQntpWBMsDQBJsDJXntMAlLAtJQoJGsqJAAQhiAAhmgKg");
	var mask_graphics_607 = new cjs.Graphics().p("AHlZ4QsEhAn2pPQn2pQBAsDQA/sFJPn2MAl1AsmQoNG+qbAAQhUAAhXgHg");
	var mask_graphics_608 = new cjs.Graphics().p("AH2Z6QsFg0n/pIQn+pIA1sEQAzsGJIn+MAmfAsBQoSHQquAAQhFAAhIgFg");
	var mask_graphics_609 = new cjs.Graphics().p("AIIZ7QsGgooHpAQoIpBAqsFQAnsGJBoHMAnIArdQoXHhrAAAQg2AAg4gDg");
	var mask_graphics_610 = new cjs.Graphics().p("AIZZ9QsGgdoQo5QoQo5AfsFQAbsHI5oPMAnxAq3QobH0rTAAIhQgBg");
	var mask_graphics_611 = new cjs.Graphics().p("AIrZ9QsHgRoYoxQoYoxATsFQAQsHIxoYMAoZAqRQofIHrmAAIgxgBg");
	var mask_graphics_612 = new cjs.Graphics().p("AI9Z+QsHgGohopQogopAHsGQAFsHIpogMApBAprQoiIar7AAIgRAAg");
	var mask_graphics_613 = new cjs.Graphics().p("ArhRjQooohgFsGQgGsHIhooMApoApDQogIosGAGIgQAAQr9AAojobg");
	var mask_graphics_614 = new cjs.Graphics().p("ArXR2QowoZgQsFQgSsHIZoxMAqPAocQoZIwsFARIgwABQroAAogoIg");
	var mask_graphics_615 = new cjs.Graphics().p("ArMSJQo4oQgbsGQgesGIQo5MAq1An0QoQI4sFAcIhPACQrVAAobn1g");
	var mask_graphics_616 = new cjs.Graphics().p("ArBSbQpAoHgnsFQgosGIHpAMArbAnKQoIJAsFAoQg3ADg2AAQrCAAoXnjg");
	var mask_graphics_617 = new cjs.Graphics().p("Aq1StQpIn/gysEQg0sFH+pIMAsAAmhQn/JIsEAzQhHAFhFAAQqvAAoSnRg");
	var mask_graphics_618 = new cjs.Graphics().p("AqpS/QpPn2g+sDQhAsFH2pPMAskAl3Qn2JPsEA/QhWAHhUAAQqcAAoNm/g");
	var mask_graphics_619 = new cjs.Graphics().p("AqdTRQpWnuhKsCQhLsDHupXMAtHAlMQnuJXsCBKQhlAKhiAAQqLAAoImtg");
	var mask_graphics_620 = new cjs.Graphics().p("AqQTiQpenkhUsCQhXsCHkpeMAtqAkiQnkJdsBBWQh0ANhwAAQp6AAoCmcg");
	var mask_graphics_621 = new cjs.Graphics().p("AqDTzQplnbhgsCQhir/HcplMAuMAj2QnbJksABhQiDARh+AAQpoAAn9mLg");
	var mask_graphics_622 = new cjs.Graphics().p("Ap1UEQpsnThrr/Qhur+HSpsMAuuAjJQnSJsr+BsQiRAViMAAQpYAAn2l6g");
	var mask_graphics_623 = new cjs.Graphics().p("ApnUUQpznJh3r+Qh4r9HJpyMAvPAidQnJJyr9B4QifAZiaAAQpHAAnwlqg");
	var mask_graphics_624 = new cjs.Graphics().p("ApZUkQp5nAiCr8QiEr7HAp5MAvvAhwQnAJ5r7CDQitAeinAAQo3AAnqlag");
	var mask_graphics_625 = new cjs.Graphics().p("ApKUzQqAm2iNr6QiQr5G3p/MAwPAhCQm3KAr4COQi8AjizAAQooAAnjlLg");
	var mask_graphics_626 = new cjs.Graphics().p("Ao7VCQqGmsiZr4Qiar2GtqHMAwtAgVQmsKGr3CZQjJApjBAAQoYAAnck8g");
	var mask_graphics_627 = new cjs.Graphics().p("AorVRQqNmjijr1Qimr0GjqNMAxMAfmQmjKNr0CkQjXAvjNAAQoKAAnUktg");
	var mask_graphics_628 = new cjs.Graphics().p("AobVgQqTmZivrzQixryGaqSMAxpAe3QmZKSryCwQjjA1jbAAQn7AAnMkeg");
	var mask_graphics_629 = new cjs.Graphics().p("AoLVuQqYmPi6rxQi9ruGQqZMAyGAeIQmPKYrvC7QjxA8jnAAQnsAAnFkQg");
	var mask_graphics_630 = new cjs.Graphics().p("An6V8QqemGjGrtQjHrsGGqeMAyjAdYQmGKersDGQj+BDj0AAQneAAm8kCg");
	var mask_graphics_631 = new cjs.Graphics().p("AnpWKQqkl8jQrrQjTroF8qkMAy+AcnQl7KlrpDRQkKBKkBAAQnQAAm0j0g");
	var mask_graphics_632 = new cjs.Graphics().p("AnXWXQqqlyjbrnQjermFyqpMAzZAb3QlyKqrmDcQkWBSkNAAQnCAAmrjng");
	var mask_graphics_633 = new cjs.Graphics().p("AnFWkQqvlojnrkQjoriFoqvMAzzAbGQloKvrjDnQkiBbkaAAQm0AAmijag");
	var mask_graphics_634 = new cjs.Graphics().p("AmzWwQq0ldjyrhQjzreFdq1MA0NAaVQleK1rfDyQkuBjkmAAQmnAAmZjOg");
	var mask_graphics_635 = new cjs.Graphics().p("AmgW8Qq6lTj8rdQj+rbFTq5MA0lAZjQlTK6rbD9Qk6BskzAAQmaAAmPjCg");
	var mask_graphics_636 = new cjs.Graphics().p("AmNXIQq+lJkHrZQkJrXFIq+MA09AYxQlJK+rXEIQlFB2lAAAQmNAAmFi2g");
	var mask_graphics_637 = new cjs.Graphics().p("Al+XRQrClAkQrWQkRrUFArCMA1QAYJQlBLCrUEQQlOB+lKAAQmCAAl+itg");
	var mask_graphics_638 = new cjs.Graphics().p("AluXaQrGk4kZrTQkarRE5rGMA1hAXiQk4LGrREZQlXCFlUAAQl5AAl0ikg");
	var mask_graphics_639 = new cjs.Graphics().p("AlfXjQrJkwkhrPQkjrOEwrKMA10AW5QkwLKrOEhQlgCOleAAQlvAAlsibg");
	var mask_graphics_640 = new cjs.Graphics().p("AlPXrQrNknkprMQkrrKEnrOMA2FAWRQkoLNrKEqQloCWloAAQllAAlkiTg");
	var mask_graphics_641 = new cjs.Graphics().p("Ak/XzQrQkfkyrIQkzrHEfrQMA2VAVoQkfLQrHEyQlwCflzAAQlaAAlciLg");
	var mask_graphics_642 = new cjs.Graphics().p("AkuX7QrUkWk6rFQk8rDEWrUMA2mAU/QkWLUrEE7Ql5Cnl8AAQlRAAlSiDg");
	var mask_graphics_643 = new cjs.Graphics().p("AkeYDQrXkOlCrBQlFq/EOrYMA22AUWQkOLYrAFDQmACwmIAAQlGAAlKh7g");
	var mask_graphics_644 = new cjs.Graphics().p("AkNYLQrbkGlKq9QlNq7EGrbMA3FATtQkGLaq8FLQmIC6mSAAQk8AAlBhzg");
	var mask_graphics_645 = new cjs.Graphics().p("Aj8YSQrej9lSq5QlVq4D9rdMA3UATDQj9Ldq4FUQmRDDmcAAQkyAAk4hsg");
	var mask_graphics_646 = new cjs.Graphics().p("AjrYZQrgj0lbq1Qldq0D0rhMA3iASaQj0Lgq0FcQmYDNmnAAQkoAAkvhlg");
	var mask_graphics_647 = new cjs.Graphics().p("AjZYgQrkjrljqyQllqvDrrkMA3xARwQjsLjqwFkQmfDXmyAAQkeAAklheg");
	var mask_graphics_648 = new cjs.Graphics().p("AjIYnQrmjjlrqtQluqsDjrmMA3+ARGQjjLmqsFsQmnDhm8AAQkUAAkchXg");
	var mask_graphics_649 = new cjs.Graphics().p("Ai2YtQrpjalzqpQl2qoDbroMA4KAQcQjaLpqoFzQmtDsnIAAQkKAAkShRg");
	var mask_graphics_650 = new cjs.Graphics().p("AikYzQrsjRl7qlQl9qjDRrrMA4XAPxQjRLsqjF8Qm1D2nTAAQkAAAkIhLg");
	var mask_graphics_651 = new cjs.Graphics().p("AiSY5QrujImDqgQmFqgDIrtMA4jAPHQjILuqfGEQm8EAndAAQj3AAj+hEg");
	var mask_graphics_652 = new cjs.Graphics().p("Ah/Y/QrxjAmLqbQmNqbDArvMA4uAOcQjALwqaGMQnCELnpAAQjsAAj0g+g");
	var mask_graphics_653 = new cjs.Graphics().p("AhtZEQryi3mUqWQmUqWC2ryMA46ANxQi3LzqWGUQnJEWn0AAQjiAAjqg5g");
	var mask_graphics_654 = new cjs.Graphics().p("AhaZKQr1iumbqTQmcqRCur0MA5DANHQiuL1qRGbQnPEioAAAQjXAAjggzg");
	var mask_graphics_655 = new cjs.Graphics().p("AhHZOQr3ilmjqNQmkqMClr2MA5OAMbQilL3qMGjQnWEuoLAAQjOAAjVgvg");
	var mask_graphics_656 = new cjs.Graphics().p("Ag0ZTQr5icmqqIQmsqICcr4MA5XALxQicL5qHGqQncE6oXAAQjDAAjLgqg");
	var mask_graphics_657 = new cjs.Graphics().p("AggZYQr7iUmyqDQm0qCCTr6MA5gALFQiTL7qCGyQnhFGokAAQi5AAi/glg");
	var mask_graphics_658 = new cjs.Graphics().p("AgNZcQr8iKm6p/Qm7p9CKr7MA5oAKaQiKL8p9G6QnnFSowAAQiuAAi1ghg");
	var mask_graphics_659 = new cjs.Graphics().p("AAGZgQr9iCnBp5QnDp4CBr9MA5wAJvQiBL+p4HBQnsFeo8AAQilAAiqgcg");
	var mask_graphics_660 = new cjs.Graphics().p("AAaZjQr/h4nJp0QnKpyB4r/MA54AJDQh4MApzHJQnxFqpJAAQiaAAifgZg");
	var mask_graphics_661 = new cjs.Graphics().p("AAtZnQsAhvnQpvQnRptBvsAMA5+AIYQhvMBptHQQn3F3pWAAQiOAAiVgVg");
	var mask_graphics_662 = new cjs.Graphics().p("ABvZwQsEhSnnpdQnppbBTsEMA6PAGNQhSMEpbHnQoGGiqAAAQhsAAhvgMg");
	var mask_graphics_663 = new cjs.Graphics().p("ACxZ2QsGg1n9pKQn/pIA1sHMA6cAEBQg1MGpIH+QoTHOquAAQhIAAhJgFg");
	var mask_graphics_664 = new cjs.Graphics().p("AD2Z6QsIgYoTo3QoUo1AYsHMA6jAB0QgYMIo1ITQoeH9reAAIhDgBg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(560).to({graphics:mask_graphics_560,x:127.2,y:146}).wait(1).to({graphics:mask_graphics_561,x:125.7,y:146.1}).wait(1).to({graphics:mask_graphics_562,x:124.3,y:146.1}).wait(1).to({graphics:mask_graphics_563,x:125.2,y:146.1}).wait(1).to({graphics:mask_graphics_564,x:126.7,y:146.1}).wait(1).to({graphics:mask_graphics_565,x:128.2,y:146.1}).wait(1).to({graphics:mask_graphics_566,x:129.7,y:146.2}).wait(1).to({graphics:mask_graphics_567,x:131.2,y:146.3}).wait(1).to({graphics:mask_graphics_568,x:132.6,y:146.4}).wait(1).to({graphics:mask_graphics_569,x:134.1,y:146.6}).wait(1).to({graphics:mask_graphics_570,x:135.6,y:146.7}).wait(1).to({graphics:mask_graphics_571,x:137.1,y:146.9}).wait(1).to({graphics:mask_graphics_572,x:138.5,y:147.2}).wait(1).to({graphics:mask_graphics_573,x:140,y:147.4}).wait(1).to({graphics:mask_graphics_574,x:141.4,y:147.7}).wait(1).to({graphics:mask_graphics_575,x:142.9,y:147.9}).wait(1).to({graphics:mask_graphics_576,x:144.3,y:148.3}).wait(1).to({graphics:mask_graphics_577,x:145.8,y:148.6}).wait(1).to({graphics:mask_graphics_578,x:147.2,y:148.9}).wait(1).to({graphics:mask_graphics_579,x:148.7,y:149.3}).wait(1).to({graphics:mask_graphics_580,x:150.1,y:149.7}).wait(1).to({graphics:mask_graphics_581,x:151.5,y:150.1}).wait(1).to({graphics:mask_graphics_582,x:152.9,y:150.5}).wait(1).to({graphics:mask_graphics_583,x:154.3,y:151}).wait(1).to({graphics:mask_graphics_584,x:155.7,y:151.5}).wait(1).to({graphics:mask_graphics_585,x:157.1,y:152}).wait(1).to({graphics:mask_graphics_586,x:158.5,y:152.5}).wait(1).to({graphics:mask_graphics_587,x:159.9,y:153}).wait(1).to({graphics:mask_graphics_588,x:161.2,y:153.6}).wait(1).to({graphics:mask_graphics_589,x:162.6,y:154.1}).wait(1).to({graphics:mask_graphics_590,x:163.9,y:154.7}).wait(1).to({graphics:mask_graphics_591,x:165.3,y:155.3}).wait(1).to({graphics:mask_graphics_592,x:166.6,y:156}).wait(1).to({graphics:mask_graphics_593,x:167.9,y:156.6}).wait(1).to({graphics:mask_graphics_594,x:169.2,y:157.3}).wait(1).to({graphics:mask_graphics_595,x:170.5,y:157.9}).wait(1).to({graphics:mask_graphics_596,x:171.8,y:158.7}).wait(1).to({graphics:mask_graphics_597,x:173,y:159.4}).wait(1).to({graphics:mask_graphics_598,x:174.3,y:160.1}).wait(1).to({graphics:mask_graphics_599,x:175.5,y:160.9}).wait(1).to({graphics:mask_graphics_600,x:176.8,y:161.7}).wait(1).to({graphics:mask_graphics_601,x:178,y:162.4}).wait(1).to({graphics:mask_graphics_602,x:179.2,y:163.3}).wait(1).to({graphics:mask_graphics_603,x:180.4,y:164.1}).wait(1).to({graphics:mask_graphics_604,x:181.5,y:164.9}).wait(1).to({graphics:mask_graphics_605,x:182.7,y:165.8}).wait(1).to({graphics:mask_graphics_606,x:183.8,y:166.3}).wait(1).to({graphics:mask_graphics_607,x:184.8,y:166.3}).wait(1).to({graphics:mask_graphics_608,x:185.9,y:166.3}).wait(1).to({graphics:mask_graphics_609,x:186.9,y:166.2}).wait(1).to({graphics:mask_graphics_610,x:187.9,y:166.2}).wait(1).to({graphics:mask_graphics_611,x:188.9,y:166.2}).wait(1).to({graphics:mask_graphics_612,x:189.9,y:166.2}).wait(1).to({graphics:mask_graphics_613,x:190.9,y:166.2}).wait(1).to({graphics:mask_graphics_614,x:191.9,y:166.2}).wait(1).to({graphics:mask_graphics_615,x:192.8,y:166.2}).wait(1).to({graphics:mask_graphics_616,x:193.8,y:166.2}).wait(1).to({graphics:mask_graphics_617,x:194.7,y:166.2}).wait(1).to({graphics:mask_graphics_618,x:195.6,y:166.2}).wait(1).to({graphics:mask_graphics_619,x:196.5,y:166.2}).wait(1).to({graphics:mask_graphics_620,x:197.3,y:166.2}).wait(1).to({graphics:mask_graphics_621,x:198.2,y:166.2}).wait(1).to({graphics:mask_graphics_622,x:199,y:166.2}).wait(1).to({graphics:mask_graphics_623,x:199.9,y:166.2}).wait(1).to({graphics:mask_graphics_624,x:200.7,y:166.2}).wait(1).to({graphics:mask_graphics_625,x:201.5,y:166.2}).wait(1).to({graphics:mask_graphics_626,x:202.2,y:166.2}).wait(1).to({graphics:mask_graphics_627,x:203,y:166.2}).wait(1).to({graphics:mask_graphics_628,x:203.7,y:166.2}).wait(1).to({graphics:mask_graphics_629,x:204.4,y:166.2}).wait(1).to({graphics:mask_graphics_630,x:205.2,y:166.2}).wait(1).to({graphics:mask_graphics_631,x:205.8,y:166.2}).wait(1).to({graphics:mask_graphics_632,x:206.5,y:166.2}).wait(1).to({graphics:mask_graphics_633,x:207.2,y:166.2}).wait(1).to({graphics:mask_graphics_634,x:207.8,y:166.2}).wait(1).to({graphics:mask_graphics_635,x:208.4,y:166.2}).wait(1).to({graphics:mask_graphics_636,x:209,y:166.2}).wait(1).to({graphics:mask_graphics_637,x:209.5,y:166.2}).wait(1).to({graphics:mask_graphics_638,x:209.9,y:166.2}).wait(1).to({graphics:mask_graphics_639,x:210.4,y:166.2}).wait(1).to({graphics:mask_graphics_640,x:210.8,y:166.2}).wait(1).to({graphics:mask_graphics_641,x:211.2,y:166.2}).wait(1).to({graphics:mask_graphics_642,x:211.6,y:166.2}).wait(1).to({graphics:mask_graphics_643,x:212,y:166.2}).wait(1).to({graphics:mask_graphics_644,x:212.4,y:166.2}).wait(1).to({graphics:mask_graphics_645,x:212.8,y:166.2}).wait(1).to({graphics:mask_graphics_646,x:213.1,y:166.2}).wait(1).to({graphics:mask_graphics_647,x:213.5,y:166.2}).wait(1).to({graphics:mask_graphics_648,x:213.8,y:166.2}).wait(1).to({graphics:mask_graphics_649,x:214.1,y:166.2}).wait(1).to({graphics:mask_graphics_650,x:214.4,y:166.2}).wait(1).to({graphics:mask_graphics_651,x:214.7,y:166.1}).wait(1).to({graphics:mask_graphics_652,x:215,y:166.1}).wait(1).to({graphics:mask_graphics_653,x:215.3,y:166.1}).wait(1).to({graphics:mask_graphics_654,x:215.5,y:166.1}).wait(1).to({graphics:mask_graphics_655,x:215.8,y:166.1}).wait(1).to({graphics:mask_graphics_656,x:216,y:166.1}).wait(1).to({graphics:mask_graphics_657,x:216.2,y:166.1}).wait(1).to({graphics:mask_graphics_658,x:216.4,y:166.1}).wait(1).to({graphics:mask_graphics_659,x:216.6,y:166}).wait(1).to({graphics:mask_graphics_660,x:216.8,y:166}).wait(1).to({graphics:mask_graphics_661,x:216.9,y:166}).wait(1).to({graphics:mask_graphics_662,x:217.3,y:166}).wait(1).to({graphics:mask_graphics_663,x:217.6,y:165.9}).wait(1).to({graphics:mask_graphics_664,x:217.8,y:165.9}).wait(82));

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(20,1,1).p("At+I6QHvgeHxl5QHzl3Eqll");
	this.shape_1.setTransform(331.5,219);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(560).to({_off:false},0).wait(186));

	// Layer 19
	this.instance_2 = new lib.ar4("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(243.8,414.2,1,1,-76.7,0,0,0,0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(440).to({_off:false},0).wait(306));

	// Layer 15 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_464 = new cjs.Graphics().p("EgOgAi3QpxnOhzr/Qh1sAHNpwMAvJAixQnOJyr+BzQibAXiUAAQpPABnzlxg");
	var mask_1_graphics_465 = new cjs.Graphics().p("EgOTAjFQp3nEh9r/QiAr+HFp2MAvmAiJQnFJ3r9B+QinAcihAAQo/AAnuljg");
	var mask_1_graphics_466 = new cjs.Graphics().p("EgOGAjUQp9m8iHr9QiKr8G9p8MAwDAhfQm9J+r7CIQi0AgitAAQoxAAnolUg");
	var mask_1_graphics_467 = new cjs.Graphics().p("EgN4AjiQqDm0iSr6QiTr7GzqCMAwgAg2Qm0KEr5CSQjAAli5AAQokAAnhlGg");
	var mask_1_graphics_468 = new cjs.Graphics().p("EgNqAjwQqJmricr5Qidr4GrqIMAw7AgMQmrKJr3CdQjNAqjFAAQoVAAnbk4g");
	var mask_1_graphics_469 = new cjs.Graphics().p("EgNbAj+QqPmjimr2Qior2GiqOMAxXAfiQmiKPr1CnQjZAvjRAAQoIAAnTkqg");
	var mask_1_graphics_470 = new cjs.Graphics().p("EgNMAkLQqVmaiwr0QiyrzGZqUMAxyAe4QmZKUrzCxQjlA1jcABQn7AAnMkeg");
	var mask_1_graphics_471 = new cjs.Graphics().p("EgM9AkYQqamRi6rxQi9ryGRqYMAyMAeMQmRKarwC7QjxA8jnAAQnuAAnFkRg");
	var mask_1_graphics_472 = new cjs.Graphics().p("EgMuAklQqfmIjFrvQjGrvGIqeMAylAdhQmHKfruDFQj8BDj0AAQngAAm+kEg");
	var mask_1_graphics_473 = new cjs.Graphics().p("EgMeAkxQqll+jOrtQjRrsF/qjMAy/Ac1Ql/KkrrDQQkIBJj+AAQnUAAm2j4g");
	var mask_1_graphics_474 = new cjs.Graphics().p("EgMOAk9Qqql1jYrqQjbrpF2qoMAzXAcJQl1KprpDaQkTBQkKAAQnHAAmujsg");
	var mask_1_graphics_475 = new cjs.Graphics().p("EgL+AlJQqulsjjrnQjkrmFsqtMAzvAbdQlsKurlDjQkfBYkVAAQm7AAmmjgg");
	var mask_1_graphics_476 = new cjs.Graphics().p("EgLtAlVQq0ljjsrkQjvriFjqzMA0HAawQljK0riDtQkpBfkhAAQmvAAmdjUg");
	var mask_1_graphics_477 = new cjs.Graphics().p("EgLcAlgQq4laj3rgQj4rfFZq3MA0eAaDQlaK4rfD3QkzBnktAAQmiAAmVjJg");
	var mask_1_graphics_478 = new cjs.Graphics().p("EgLLAlrQq9lQkArdQkCrcFQq7MA0zAZVQlQK9rbEBQk/Bvk4AAQmWAAmMi+g");
	var mask_1_graphics_479 = new cjs.Graphics().p("EgK6Al2QrBlHkKrZQkMrZFHrAMA1JAYoQlHLBrYELQlJB5lDAAQmKAAmEi0g");
	var mask_1_graphics_480 = new cjs.Graphics().p("EgKoAmAQrFk9kUrWQkWrVE9rEMA1eAX6Qk9LGrVEUQlSCClPAAQl/AAl6iqg");
	var mask_1_graphics_481 = new cjs.Graphics().p("EgKWAmKQrJkzkerSQkgrRE0rJMA1yAXMQk0LKrQEeQldCLlaAAQlzAAlxigg");
	var mask_1_graphics_482 = new cjs.Graphics().p("EgKEAmUQrNkqkorOQkprNEqrNMA2GAWeQkqLOrNEoQlmCUlmAAQlnAAloiWg");
	var mask_1_graphics_483 = new cjs.Graphics().p("EgJxAmeQrSkhkxrKQkyrJEgrRMA2ZAVwQkhLRrIEyQlwCelyAAQlbAAleiMg");
	var mask_1_graphics_484 = new cjs.Graphics().p("EgJeAmnQrWkXk6rFQk8rFEWrWMA2rAVCQkWLVrFE7Ql5Col+AAQlPAAlUiDg");
	var mask_1_graphics_485 = new cjs.Graphics().p("EgJLAmwQrZkNlErBQlGrBENrZMA29AUSQkNLZrAFEQmDCzmJAAQlEAAlKh6g");
	var mask_1_graphics_486 = new cjs.Graphics().p("EgI4Am5QrckElOq9QlPq8EDrcMA3OATiQkDLdq8FOQmLC9mWAAQk4AAlAhxg");
	var mask_1_graphics_487 = new cjs.Graphics().p("EgIkAnBQrgj5lXq5QlZq3D6rgMA3eASzQj5Lfq3FYQmVDImhAAQktAAk1hpg");
	var mask_1_graphics_488 = new cjs.Graphics().p("EgIQAnJQrjjvlhq0QliqzDwrjMA3uASDQjvLjqzFhQmdDTmtAAQkiAAkqhhg");
	var mask_1_graphics_489 = new cjs.Graphics().p("EgH8AnRQrmjmlqqvQlrquDlrmMA3+ARTQjmLmqtFqQmmDem5AAQkXAAkfhYg");
	var mask_1_graphics_490 = new cjs.Graphics().p("EgHoAnYQrpjblzqqQl0qqDbrpMA4MAQjQjbLpqpFzQmtDqnHAAQkKAAkVhRg");
	var mask_1_graphics_491 = new cjs.Graphics().p("EgHTAnfQrsjRl8qlQl+qkDSrsMA4aAPyQjSLsqjF8Qm2D2nTAAQj/AAkJhKg");
	var mask_1_graphics_492 = new cjs.Graphics().p("EgG+AnmQrvjHmFqgQmHqfDIrvMA4nAPCQjILvqeGFQm9ECngAAQjzAAj+hDg");
	var mask_1_graphics_493 = new cjs.Graphics().p("EgGpAnsQryi9mNqaQmQqaC9rxMA40AOQQi9LyqaGOQnEEPntAAQjoAAjyg9g");
	var mask_1_graphics_494 = new cjs.Graphics().p("EgGUAnyQr0izmWqVQmZqUCzr0MA5AANgQizL0qUGXQnMEcn6AAQjcAAjng3g");
	var mask_1_graphics_495 = new cjs.Graphics().p("EgF+An4Qr2ipmgqPQmhqPCor2MA5LAMvQipL2qOGgQnTEpoHAAQjRAAjagxg");
	var mask_1_graphics_496 = new cjs.Graphics().p("EgFoAn+Qr5ifmoqKQmqqJCer4MA5WAL9QifL5qIGoQnaE3oVAAQjFAAjOgrg");
	var mask_1_graphics_497 = new cjs.Graphics().p("EgFSAoDQr7iVmxqEQmzqDCVr6MA5fALMQiUL6qDGyQnhFEoiAAQi5AAjCgmg");
	var mask_1_graphics_498 = new cjs.Graphics().p("EgE8AoIQr8iKm6p/Qm8p9CLr8MA5oAKaQiKL9p9G6QnnFRowAAQitAAi2ggg");
	var mask_1_graphics_499 = new cjs.Graphics().p("EgElAoMQr/iAnCp4QnEp3CAr+MA5xAJoQiAL/p2HCQnuFgo+AAQihAAipgcg");
	var mask_1_graphics_500 = new cjs.Graphics().p("EgEPAoQQsAh1nKpyQnNpxB2sAMA55AI3Qh1MApxHLQnzFupNAAQiVAAidgYg");
	var mask_1_graphics_501 = new cjs.Graphics().p("EgD4AoUQsBhrnTpsQnVprBrsBMA6BAIFQhrMBprHUQn5F9pbAAQiJAAiQgUg");
	var mask_1_graphics_502 = new cjs.Graphics().p("EgDgAoYQsDhhncpmQndpkBhsDMA6HAHTQhhMDpkHcQn+GMprAAQh8AAiCgQg");
	var mask_1_graphics_503 = new cjs.Graphics().p("EgDJAobQsEhXnkpfQnlpeBWsEMA6OAGhQhXMEpeHkQoDGcp6AAQhwAAh1gNg");
	var mask_1_graphics_504 = new cjs.Graphics().p("EgCxAoeQsGhNnrpYQnupYBMsFMA6TAFvQhMMFpXHsQoJGsqKAAQhjAAhngKg");
	var mask_1_graphics_505 = new cjs.Graphics().p("EgCaAogQsGhCnzpSQn2pQBCsGMA6XAE8QhCMHpQHzQoOG8qaAAQhWAAhagIg");
	var mask_1_graphics_506 = new cjs.Graphics().p("EgCCAoiQsGg3n8pLQn9pKA3sHMA6bAEKQg4MHpJH8QoSHLqrAAQhJAAhMgFg");
	var mask_1_graphics_507 = new cjs.Graphics().p("EgBpAokQsIgtoDpEQoGpDAtsIMA6eADYQgsMIpDIEQoWHbq8AAQg8AAg9gDg");
	var mask_1_graphics_508 = new cjs.Graphics().p("EgBRAolQsIgioLo+QoNo7AisJMA6hACmQgjMIo7IMQobHsrMAAQguAAgwgCg");
	var mask_1_graphics_509 = new cjs.Graphics().p("EgA4AomQsJgYoTo2QoUo1AYsJMA6iAB0QgYMJo0ISQoeH+rfAAIhBgBg");
	var mask_1_graphics_510 = new cjs.Graphics().p("EgAgAonQsIgOobovQocouAOsIMA6kABBQgOMJouIaQohIPrxAAIglAAg");
	var mask_1_graphics_511 = new cjs.Graphics().p("EgAHAonQsIgDoiooQokomADsJMA6lAAPQgDMJonIiQolIgsDAAIgIAAg");
	var mask_1_graphics_512 = new cjs.Graphics().p("EgUgAgOQoqofgIsJMA6lgAjQAHMJofIpQohIrsIAHIgUAAQr8AAoioZg");
	var mask_1_graphics_513 = new cjs.Graphics().p("EgUOAgfQoyoXgRsJMA6jgBVQASMIoYIxQoZIysJARIgwABQrpAAofoIg");
	var mask_1_graphics_514 = new cjs.Graphics().p("EgT8AgwQo5oQgcsIMA6igCIQAcMJoQI3QoSI5sIAdIhNABQrXAAobn3g");
	var mask_1_graphics_515 = new cjs.Graphics().p("EgTqAhBQpAoIgnsIMA6ggC6QAnMIoJI/QoKJAsHAmQg2ADgzAAQrGAAoXnmg");
	var mask_1_graphics_516 = new cjs.Graphics().p("EgTYAhSQpHoBgxsHMA6dgDsQAxMHoBJGQoCJHsHAxQhDAEhBAAQq1AAoTnVg");
	var mask_1_graphics_517 = new cjs.Graphics().p("EgTGAhiQpOn5g7sGMA6ZgEeQA7MGn4JNQn6JOsHA7QhRAGhOAAQqkAAoPnFg");
	var mask_1_graphics_518 = new cjs.Graphics().p("EgS0AhyQpVnwhFsGMA6VgFQQBGMFnxJTQnyJVsGBGQhfAIhbAAQqUAAoKm1g");
	var mask_1_graphics_519 = new cjs.Graphics().p("EgSiAiCQpbnphQsEMA6QgGDQBQMFnpJaQnqJbsFBQQhsAMhoAAQqEAAoFmmg");
	var mask_1_graphics_520 = new cjs.Graphics().p("EgSQAiSQpinhhasEMA6LgG0QBaMEngJgQniJisEBaQh6APh1AAQp0AAoAmWg");
	var mask_1_graphics_521 = new cjs.Graphics().p("EgR+AihQponYhlsDMA6FgHmQBlMDnZJmQnZJosDBlQiHASiBAAQplAAn7mHg");
	var mask_1_graphics_522 = new cjs.Graphics().p("EgRsAiwQpunQhvsBMA5+gIYQBvMBnQJtQnSJvsBBvQiUAViNAAQpWAAn2l4g");
	var mask_1_graphics_523 = new cjs.Graphics().p("EgRaAi/Qp0nIh6r/MA53gJKQB5L/nIJ0QnJJ0r/B6QihAZiaAAQpHAAnwlpg");
	var mask_1_graphics_524 = new cjs.Graphics().p("EgRHAjNQp7m/iEr+MA5vgJ7QCDL+m/J5QnBJ7r9CDQiuAeimAAQo5AAnplbg");
	var mask_1_graphics_525 = new cjs.Graphics().p("EgQ1AjbQqBm2iOr8MA5mgKtQCOL8m3J/Qm4KBr8COQi6AiiyAAQorAAnjlNg");
	var mask_1_graphics_526 = new cjs.Graphics().p("EgQjAjpQqGmuiYr6MA5cgLeQCYL6mvKFQmvKHr6CYQjGAni+AAQodABndlAg");
	var mask_1_graphics_527 = new cjs.Graphics().p("EgQRAj3QqMmliir4MA5SgMPQCiL3mlKLQmnKMr4CjQjTAtjJAAQoPAAnXkyg");
	var mask_1_graphics_528 = new cjs.Graphics().p("EgP+AkEQqSmcisr2MA5HgNAQCsL1mdKRQmeKSr1CsQjfAzjVAAQoCAAnPklg");
	var mask_1_graphics_529 = new cjs.Graphics().p("EgPsAkRQqXmTi3r0MA48gNxQC2L0mUKVQmVKYrzC2QjqA5jhAAQn1AAnIkYg");
	var mask_1_graphics_530 = new cjs.Graphics().p("EgPaAkeQqcmLjBrwMA4wgOiQDALwmLKbQmMKdrxDBQj2A/jsAAQnoAAnBkLg");
	var mask_1_graphics_531 = new cjs.Graphics().p("EgPHAkrQqimCjLruMA4jgPTQDLLumCKhQmEKiruDKQkBBGj4AAQnbAAm5j+g");
	var mask_1_graphics_532 = new cjs.Graphics().p("EgO1Ak3Qqnl5jVrrMA4WgQDQDVLrl6KmQl6KnrrDVQkNBMkDAAQnOAAmyjyg");
	var mask_1_graphics_533 = new cjs.Graphics().p("EgOjAlDQqrlwjfroMA4HgQzQDfLolwKqQlxKtroDfQkYBTkPAAQnCAAmqjmg");
	var mask_1_graphics_534 = new cjs.Graphics().p("EgOQAlPQqxlnjprlMA35gRjQDpLllnKvQloKxrlDpQkjBbkaAAQm1AAmijag");
	var mask_1_graphics_535 = new cjs.Graphics().p("EgN+AlaQq1ldjzriMA3pgSTQDzLileK0QleK2riDyQkuBjklAAQmpAAmajPg");
	var mask_1_graphics_536 = new cjs.Graphics().p("EgNrAllQq6lUj9rfMA3ZgTCQD9LflUK4QlWK7reD8Qk5BrkwABQmdAAmRjFg");
	var mask_1_graphics_537 = new cjs.Graphics().p("EgNZAlwQq+lLkHrbMA3JgTyQEGLblLK9QlMK/rbEHQlDB0k7AAQmSAAmIi6g");
	var mask_1_graphics_538 = new cjs.Graphics().p("EgNGAl6QrDlBkQrXMA23gUiQEQLYlCLCQlCLDrYEQQlNB9lHAAQmFAAl/iwg");
	var mask_1_graphics_539 = new cjs.Graphics().p("EgM0AmFQrHk4karUMA2lgVQQEaLUk4LGQk5LHrUEaQlXCGlSAAQl6AAl2ilg");
	var mask_1_graphics_540 = new cjs.Graphics().p("EgMiAmPQrLkukjrRMA2SgV/QEkLRkvLJQkvLMrQEkQlhCPleAAQluAAltibg");
	var mask_1_graphics_541 = new cjs.Graphics().p("EgMPAmYQrQkkktrMMA2AgWtQEtLLklLOQklLQrNEtQlqCZlqAAQliAAljiSg");
	var mask_1_graphics_542 = new cjs.Graphics().p("EgL9AmhQrTkak3rIMA1sgXbQE3LHkbLSQkcLTrIE3Ql0Cil2AAQlXAAlZiIg");
	var mask_1_graphics_543 = new cjs.Graphics().p("EgLEAm8Qrfj9lTq6MA0rgZnQFUK5j+LdQj+Lfq6FUQmQDCmaAAQkzAAk6htg");
	var mask_1_graphics_544 = new cjs.Graphics().p("EgKMAnUQrojelxqsMAzlgbxQFwKrjeLnQjgLpqsFwQmpDlm/AAQkRAAkZhVg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(464).to({graphics:mask_1_graphics_464,x:102,y:259.9}).wait(1).to({graphics:mask_1_graphics_465,x:102.7,y:260}).wait(1).to({graphics:mask_1_graphics_466,x:103.4,y:260}).wait(1).to({graphics:mask_1_graphics_467,x:104.1,y:260}).wait(1).to({graphics:mask_1_graphics_468,x:104.8,y:260}).wait(1).to({graphics:mask_1_graphics_469,x:105.5,y:260}).wait(1).to({graphics:mask_1_graphics_470,x:106.1,y:260.1}).wait(1).to({graphics:mask_1_graphics_471,x:106.8,y:260.1}).wait(1).to({graphics:mask_1_graphics_472,x:107.4,y:260.1}).wait(1).to({graphics:mask_1_graphics_473,x:108,y:260.1}).wait(1).to({graphics:mask_1_graphics_474,x:108.6,y:260.1}).wait(1).to({graphics:mask_1_graphics_475,x:109.2,y:260.1}).wait(1).to({graphics:mask_1_graphics_476,x:109.8,y:260.1}).wait(1).to({graphics:mask_1_graphics_477,x:110.3,y:260.1}).wait(1).to({graphics:mask_1_graphics_478,x:110.9,y:260.1}).wait(1).to({graphics:mask_1_graphics_479,x:111.4,y:260.2}).wait(1).to({graphics:mask_1_graphics_480,x:112,y:260.2}).wait(1).to({graphics:mask_1_graphics_481,x:112.5,y:260.2}).wait(1).to({graphics:mask_1_graphics_482,x:112.9,y:260.2}).wait(1).to({graphics:mask_1_graphics_483,x:113.4,y:260.2}).wait(1).to({graphics:mask_1_graphics_484,x:113.9,y:260.2}).wait(1).to({graphics:mask_1_graphics_485,x:114.3,y:260.2}).wait(1).to({graphics:mask_1_graphics_486,x:114.8,y:260.2}).wait(1).to({graphics:mask_1_graphics_487,x:115.2,y:260.2}).wait(1).to({graphics:mask_1_graphics_488,x:115.6,y:260.2}).wait(1).to({graphics:mask_1_graphics_489,x:116,y:260.1}).wait(1).to({graphics:mask_1_graphics_490,x:116.4,y:260.1}).wait(1).to({graphics:mask_1_graphics_491,x:116.7,y:260.1}).wait(1).to({graphics:mask_1_graphics_492,x:117.1,y:260.1}).wait(1).to({graphics:mask_1_graphics_493,x:117.4,y:260.1}).wait(1).to({graphics:mask_1_graphics_494,x:117.7,y:260.1}).wait(1).to({graphics:mask_1_graphics_495,x:118,y:260.1}).wait(1).to({graphics:mask_1_graphics_496,x:118.3,y:260.1}).wait(1).to({graphics:mask_1_graphics_497,x:118.5,y:260.1}).wait(1).to({graphics:mask_1_graphics_498,x:118.8,y:260}).wait(1).to({graphics:mask_1_graphics_499,x:119,y:260}).wait(1).to({graphics:mask_1_graphics_500,x:119.2,y:260}).wait(1).to({graphics:mask_1_graphics_501,x:119.4,y:260}).wait(1).to({graphics:mask_1_graphics_502,x:119.6,y:260}).wait(1).to({graphics:mask_1_graphics_503,x:119.8,y:260}).wait(1).to({graphics:mask_1_graphics_504,x:119.9,y:260}).wait(1).to({graphics:mask_1_graphics_505,x:120.1,y:260}).wait(1).to({graphics:mask_1_graphics_506,x:120.2,y:259.9}).wait(1).to({graphics:mask_1_graphics_507,x:120.3,y:259.9}).wait(1).to({graphics:mask_1_graphics_508,x:120.3,y:259.9}).wait(1).to({graphics:mask_1_graphics_509,x:120.4,y:259.9}).wait(1).to({graphics:mask_1_graphics_510,x:120.4,y:259.9}).wait(1).to({graphics:mask_1_graphics_511,x:120.5,y:259.9}).wait(1).to({graphics:mask_1_graphics_512,x:120.5,y:259.9}).wait(1).to({graphics:mask_1_graphics_513,x:120.5,y:259.9}).wait(1).to({graphics:mask_1_graphics_514,x:120.5,y:259.9}).wait(1).to({graphics:mask_1_graphics_515,x:120.6,y:259.9}).wait(1).to({graphics:mask_1_graphics_516,x:120.7,y:259.9}).wait(1).to({graphics:mask_1_graphics_517,x:120.8,y:259.9}).wait(1).to({graphics:mask_1_graphics_518,x:120.9,y:259.9}).wait(1).to({graphics:mask_1_graphics_519,x:121,y:260}).wait(1).to({graphics:mask_1_graphics_520,x:121.2,y:260}).wait(1).to({graphics:mask_1_graphics_521,x:121.3,y:260}).wait(1).to({graphics:mask_1_graphics_522,x:121.5,y:260}).wait(1).to({graphics:mask_1_graphics_523,x:121.7,y:260}).wait(1).to({graphics:mask_1_graphics_524,x:122,y:260}).wait(1).to({graphics:mask_1_graphics_525,x:122.2,y:260}).wait(1).to({graphics:mask_1_graphics_526,x:122.5,y:260.1}).wait(1).to({graphics:mask_1_graphics_527,x:122.7,y:260.1}).wait(1).to({graphics:mask_1_graphics_528,x:123,y:260.1}).wait(1).to({graphics:mask_1_graphics_529,x:123.3,y:260.1}).wait(1).to({graphics:mask_1_graphics_530,x:123.6,y:260.1}).wait(1).to({graphics:mask_1_graphics_531,x:124,y:260.1}).wait(1).to({graphics:mask_1_graphics_532,x:124.3,y:260.1}).wait(1).to({graphics:mask_1_graphics_533,x:124.7,y:260.1}).wait(1).to({graphics:mask_1_graphics_534,x:125.1,y:260.1}).wait(1).to({graphics:mask_1_graphics_535,x:125.4,y:260.1}).wait(1).to({graphics:mask_1_graphics_536,x:125.9,y:260.2}).wait(1).to({graphics:mask_1_graphics_537,x:126.3,y:260.2}).wait(1).to({graphics:mask_1_graphics_538,x:126.7,y:260.2}).wait(1).to({graphics:mask_1_graphics_539,x:127.2,y:260.2}).wait(1).to({graphics:mask_1_graphics_540,x:127.6,y:260.2}).wait(1).to({graphics:mask_1_graphics_541,x:128.1,y:260.2}).wait(1).to({graphics:mask_1_graphics_542,x:128.6,y:260.1}).wait(1).to({graphics:mask_1_graphics_543,x:130.2,y:260.1}).wait(1).to({graphics:mask_1_graphics_544,x:131.9,y:260.1}).wait(202));

	// Layer 14
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(20,1,1).p("Ak9LfQHqguBpo9QBpo8irkW");
	this.shape_2.setTransform(219.8,350.5);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(464).to({_off:false},0).wait(282));

	// Layer 13 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_440 = new cjs.Graphics().p("AHmf4Qi/jAAAkOQAAkOC/i/QC7i7EHgEIAAUZQkHgEi7i7g");
	var mask_2_graphics_441 = new cjs.Graphics().p("EAHsAgJQjGi4gLkOQgKkOC3jGQC0jDEHgOIAyUYIgSAAQj8AAi7itg");
	var mask_2_graphics_442 = new cjs.Graphics().p("EAHyAgZQjNiwgVkNQgUkOCvjNQCtjJEGgYIBkUVIgtABQjrAAi4idg");
	var mask_2_graphics_443 = new cjs.Graphics().p("EAH5AgpQjUiogfkNQgfkMCojUQCljQEFgiICVUQQgkAEgjAAQjbAAiziNg");
	var mask_2_graphics_444 = new cjs.Graphics().p("EAIBAg3QjaifgpkMQgqkLCgjaQCcjVEEgsIDHUJQgxAHgwAAQjMAAith/g");
	var mask_2_graphics_445 = new cjs.Graphics().p("EAIJAhFQjgiXgzkJQg0kKCXjgQCUjbECg2ID4UBQg9ALg8AAQi+AAinhxg");
	var mask_2_graphics_446 = new cjs.Graphics().p("EAISAhTQjmiPg9kHQg+kHCOjmQCMjhD/hAIEqT3QhKAQhHAAQixAAighjg");
	var mask_2_graphics_447 = new cjs.Graphics().p("EAIbAhfQjqiGhIkEQhIkFCGjrQCDjmD8hJIFaTqQhVAWhTAAQikAAiZhXg");
	var mask_2_graphics_448 = new cjs.Graphics().p("EAIlAhrQjvh9hSkCQhSkBB9jwQB6jrD5hTIGKTcQhgAdheAAQiYAAiRhLg");
	var mask_2_graphics_449 = new cjs.Graphics().p("EAIwAh1Qj0hzhcj+Qhbj/Bzj0QBxjwD2hcIG5TMQhrAkhpAAQiMAAiIhAg");
	var mask_2_graphics_450 = new cjs.Graphics().p("EAI7Ah/Qj4hqhlj6Qhmj7Bqj5QBojzDyhmIHoS6Qh1Ath1AAQiAAAh/g2g");
	var mask_2_graphics_451 = new cjs.Graphics().p("EAJHAiIQj9hghuj3Qhvj2Bgj9QBej3DvhvIIWSmQh/A3iBAAQh0AAh1gtg");
	var mask_2_graphics_452 = new cjs.Graphics().p("EAJTAiRQkAhXh4jyQh4jyBXkAQBUj7Dqh4IJDSRQiIBBiMAAQhpAAhrgkg");
	var mask_2_graphics_453 = new cjs.Graphics().p("EAJgAiYQkDhNiBjtQiCjuBNkDQBLj+DliBIJwR6QiRBMiZAAQhdAAhggcg");
	var mask_2_graphics_454 = new cjs.Graphics().p("EAJtAieQkGhCiKjpQiKjoBCkGQBCkADgiKIKbRhQiZBYilAAQhSAAhVgWg");
	var mask_2_graphics_455 = new cjs.Graphics().p("EAJ7AikQkIg5iTjjQiTjiA4kJQA3kCDbiTILGRHQigBkizAAQhGAAhJgPg");
	var mask_2_graphics_456 = new cjs.Graphics().p("EAKJAioQkKguicjdQibjdAukKQAtkFDVibILvQrQinByjAAAQg6AAg9gLg");
	var mask_2_graphics_457 = new cjs.Graphics().p("EAKYAisQkMgkikjXQikjXAkkMQAjkGDPijIMXQOQisCAjPAAQguAAgwgHg");
	var mask_2_graphics_458 = new cjs.Graphics().p("EAKnAivQkNgaitjRQisjQAakNQAZkHDJirIM+PuQiyCPjeAAQgiAAgigDg");
	var mask_2_graphics_459 = new cjs.Graphics().p("EAK2AixQkOgQi0jKQi0jJAQkOQAPkIDBiyINlPNQi3CfjvAAIgpgBg");
	var mask_2_graphics_460 = new cjs.Graphics().p("EALGAixQkPgFi7jDQi8jCAFkOQAFkJC7i5IOJOrQi7CvkAAAIgNAAg");
	var mask_2_graphics_461 = new cjs.Graphics().p("AEFf7QjDi8gGkOQgFkIC0jBIOsOJQi5C7kIAFIgPAAQkFAAi9i2g");
	var mask_2_graphics_462 = new cjs.Graphics().p("EAEOAgLQjKizgPkOQgQkICsjHIPPNjQiyDCkIAQIgqABQj0AAi6img");
	var mask_2_graphics_463 = new cjs.Graphics().p("EAEZAgbQjRisgakMQgZkICkjNIPvM9QiqDJkHAZQgkAEgiAAQjjAAi1iWg");
	var mask_2_graphics_464 = new cjs.Graphics().p("EAEkAgqQjXijgkkMQgkkGCdjUIQOMWQijDPkGAkQgwAGgvAAQjTAAixiGg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(440).to({graphics:mask_2_graphics_440,x:93.6,y:223.1}).wait(1).to({graphics:mask_2_graphics_441,x:94.9,y:223}).wait(1).to({graphics:mask_2_graphics_442,x:96.2,y:223}).wait(1).to({graphics:mask_2_graphics_443,x:97.4,y:223}).wait(1).to({graphics:mask_2_graphics_444,x:98.7,y:223}).wait(1).to({graphics:mask_2_graphics_445,x:99.9,y:223}).wait(1).to({graphics:mask_2_graphics_446,x:101.2,y:223}).wait(1).to({graphics:mask_2_graphics_447,x:102.4,y:223}).wait(1).to({graphics:mask_2_graphics_448,x:103.6,y:223}).wait(1).to({graphics:mask_2_graphics_449,x:104.8,y:222.9}).wait(1).to({graphics:mask_2_graphics_450,x:106,y:222.9}).wait(1).to({graphics:mask_2_graphics_451,x:107.2,y:222.9}).wait(1).to({graphics:mask_2_graphics_452,x:108.3,y:222.9}).wait(1).to({graphics:mask_2_graphics_453,x:109.5,y:222.8}).wait(1).to({graphics:mask_2_graphics_454,x:110.6,y:222.8}).wait(1).to({graphics:mask_2_graphics_455,x:111.7,y:222.7}).wait(1).to({graphics:mask_2_graphics_456,x:112.7,y:222.7}).wait(1).to({graphics:mask_2_graphics_457,x:113.7,y:222.7}).wait(1).to({graphics:mask_2_graphics_458,x:114.7,y:222.6}).wait(1).to({graphics:mask_2_graphics_459,x:115.7,y:222.6}).wait(1).to({graphics:mask_2_graphics_460,x:116.6,y:222.5}).wait(1).to({graphics:mask_2_graphics_461,x:117.5,y:222.5}).wait(1).to({graphics:mask_2_graphics_462,x:118.4,y:222.5}).wait(1).to({graphics:mask_2_graphics_463,x:119.2,y:222.5}).wait(1).to({graphics:mask_2_graphics_464,x:120,y:222.4}).wait(282));

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(20,1,1).p("Ak9LfQHqguBpo9QBpo8irkW");
	this.shape_3.setTransform(219.8,350.5);
	this.shape_3._off = true;

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(440).to({_off:false},0).wait(306));

	// Layer 18
	this.instance_3 = new lib.ar5("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(296,234.7,1,1,27.2,0,0,0,-1.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(289).to({_off:false},0).wait(457));

	// Layer 12 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_414 = new cjs.Graphics().p("AB6faQAEkHC7i7QC/i/EOAAQEPAAC+C/QC8C7AEEHg");
	var mask_3_graphics_415 = new cjs.Graphics().p("AEfYhQCyjKEOgRQEOgRDKCyQDHCvAUEGI0WBTQgMkHCvjHg");
	var mask_3_graphics_416 = new cjs.Graphics().p("AEIYsQCljVEMgiQEMgiDWClQDRCjAlEEI0OCkQgdkFCijSg");
	var mask_3_graphics_417 = new cjs.Graphics().p("AD0Y5QCYjfEJgzQEJgzDgCYQDbCVA1EBI0BD1QgtkDCUjbg");
	var mask_3_graphics_418 = new cjs.Graphics().p("ADkZIQCJjpEGhDQEFhDDpCJQDkCGBFD+IzvFFQg9j/CGjkg");
	var mask_3_graphics_419 = new cjs.Graphics().p("ADXZYQB7jxEAhTQEBhUDwB6QDsB4BVD5IzXGUQhOj7B4jsg");
	var mask_3_graphics_420 = new cjs.Graphics().p("ADOZqQBrj4D7hkQD7hjD3BqQDzBpBlDzIy7HhQhej2Bpjyg");
	var mask_3_graphics_421 = new cjs.Graphics().p("ADIZ9QBbj+D0h0QD1hzD9BbQD5BZB0DsIyaItQhtjvBZj5g");
	var mask_3_graphics_422 = new cjs.Graphics().p("ADGaRQBLkDDsiDQDsiCEDBLQD+BJCDDkIx1J2Qh7joBJj+g");
	var mask_3_graphics_423 = new cjs.Graphics().p("ADSbTQAbkNDQirQDRisEMAaQEIAaCqDJIvvM8QikjOAZkHg");
	var mask_3_graphics_424 = new cjs.Graphics().p("AD9ceQgXkNCujPQCujPENgXQEIgXDLCmItHPnQjHitgXkHg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(414).to({graphics:mask_3_graphics_414,x:142.7,y:201}).wait(1).to({graphics:mask_3_graphics_415,x:142.6,y:203.1}).wait(1).to({graphics:mask_3_graphics_416,x:142.5,y:205.1}).wait(1).to({graphics:mask_3_graphics_417,x:142.2,y:207.1}).wait(1).to({graphics:mask_3_graphics_418,x:141.8,y:209.1}).wait(1).to({graphics:mask_3_graphics_419,x:141.2,y:211.1}).wait(1).to({graphics:mask_3_graphics_420,x:140.6,y:213}).wait(1).to({graphics:mask_3_graphics_421,x:139.8,y:214.9}).wait(1).to({graphics:mask_3_graphics_422,x:138.9,y:216.7}).wait(1).to({graphics:mask_3_graphics_423,x:135.6,y:221.6}).wait(1).to({graphics:mask_3_graphics_424,x:131.4,y:225.8}).wait(322));

	// Layer 11
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(20,1,1).p("AKY24QjkGjjgGpQjXGbjTG8QjSG9iiFkQihFjCsBK");
	this.shape_4.setTransform(245.6,277.5);
	this.shape_4._off = true;

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(414).to({_off:false},0).wait(332));

	// Layer 10 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_289 = new cjs.Graphics().p("AOzGpIA/iWILiE1Ig/CWg");
	var mask_4_graphics_290 = new cjs.Graphics().p("AmUhDIBIisILhE0IhICrg");
	var mask_4_graphics_291 = new cjs.Graphics().p("AmZg5IBSjBILhE0IhSDBg");
	var mask_4_graphics_292 = new cjs.Graphics().p("AmdgtIBajYILhE0IhaDXg");
	var mask_4_graphics_293 = new cjs.Graphics().p("AmigjIBkjtILhE0IhkDtg");
	var mask_4_graphics_294 = new cjs.Graphics().p("AmmgYIBtkDILgE0IhsEDg");
	var mask_4_graphics_295 = new cjs.Graphics().p("AmrgNIB2kZILhE0Ih2EZg");
	var mask_4_graphics_296 = new cjs.Graphics().p("AmvgCIB/kvILgE0Ih+Evg");
	var mask_4_graphics_297 = new cjs.Graphics().p("Am0AIICIlEILhE1IiIFEg");
	var mask_4_graphics_298 = new cjs.Graphics().p("Am5ATICSlaILhE1IiSFag");
	var mask_4_graphics_299 = new cjs.Graphics().p("Am9AeICblwILgE1IiaFwg");
	var mask_4_graphics_300 = new cjs.Graphics().p("AnCApICkmGILhE1IikGGg");
	var mask_4_graphics_301 = new cjs.Graphics().p("AnGA0ICtmcILgE1IisGbg");
	var mask_4_graphics_302 = new cjs.Graphics().p("AnLA/IC2myILhE1Ii2Gyg");
	var mask_4_graphics_303 = new cjs.Graphics().p("AnQBKIDAnIILhE1IjAHHg");
	var mask_4_graphics_304 = new cjs.Graphics().p("AnUBVIDIneILhE1IjIHeg");
	var mask_4_graphics_305 = new cjs.Graphics().p("AnZBgIDSn0ILhE1IjSH0g");
	var mask_4_graphics_306 = new cjs.Graphics().p("AndBrIDboKILgE1IjaIJg");
	var mask_4_graphics_307 = new cjs.Graphics().p("AniB2IDkofILhE0IjkIfg");
	var mask_4_graphics_308 = new cjs.Graphics().p("AnnCBIDuo1ILhE0IjuI1g");
	var mask_4_graphics_309 = new cjs.Graphics().p("AnrCMID2pLILhE0Ij2JLg");
	var mask_4_graphics_310 = new cjs.Graphics().p("AnwCXIEAphILhE0IkAJhg");
	var mask_4_graphics_311 = new cjs.Graphics().p("An0CiIEJp3ILgE0IkIJ3g");
	var mask_4_graphics_312 = new cjs.Graphics().p("An5CtIESqNILhE0IkSKNg");
	var mask_4_graphics_313 = new cjs.Graphics().p("An9C4IEbqjILgE0IkaKjg");
	var mask_4_graphics_314 = new cjs.Graphics().p("AoCDCIEkq4ILhE1IkkK4g");
	var mask_4_graphics_315 = new cjs.Graphics().p("AoHDOIEurPILhE1IkuLOg");
	var mask_4_graphics_316 = new cjs.Graphics().p("AoMDZIE4rlILgE1Ik3Lkg");
	var mask_4_graphics_317 = new cjs.Graphics().p("AoQDjIFAr6ILhE1IlAL6g");
	var mask_4_graphics_318 = new cjs.Graphics().p("AoVDvIFKsRILgE1IlJMQg");
	var mask_4_graphics_319 = new cjs.Graphics().p("AoZD5IFSsmILhE1IlSMmg");
	var mask_4_graphics_320 = new cjs.Graphics().p("AoeEFIFcs9ILhE1IlcM8g");
	var mask_4_graphics_321 = new cjs.Graphics().p("AoiEPIFktRILhE0IlkNRg");
	var mask_4_graphics_322 = new cjs.Graphics().p("AonEaIFutnILhE0IluNog");
	var mask_4_graphics_323 = new cjs.Graphics().p("AosElIF4t9ILgE0Il3N9g");
	var mask_4_graphics_324 = new cjs.Graphics().p("AowEwIGAuTILhE0ImAOUg");
	var mask_4_graphics_325 = new cjs.Graphics().p("Ao1E7IGKupILhE0ImKOpg");
	var mask_4_graphics_326 = new cjs.Graphics().p("Ao5FGIGSu/ILhE0ImSPAg");
	var mask_4_graphics_327 = new cjs.Graphics().p("Ao+FRIGcvVILhE0ImcPVg");
	var mask_4_graphics_328 = new cjs.Graphics().p("ApDFcIGmvrILgE0ImlPrg");
	var mask_4_graphics_329 = new cjs.Graphics().p("ApHFnIGuwBILhE0ImuQBg");
	var mask_4_graphics_330 = new cjs.Graphics().p("ApMFyIG4wXILgE0Im3QXg");
	var mask_4_graphics_331 = new cjs.Graphics().p("ApQF9IHAwtILhE0InAQtg");
	var mask_4_graphics_332 = new cjs.Graphics().p("ApVGIIHKxDILhE0InKRDg");
	var mask_4_graphics_333 = new cjs.Graphics().p("ApZGTIHSxZILhE0InSRZg");
	var mask_4_graphics_334 = new cjs.Graphics().p("ApeGeIHcxvILhE0IncRvg");
	var mask_4_graphics_335 = new cjs.Graphics().p("ApjGpIHmyFILgE0InlSFg");
	var mask_4_graphics_336 = new cjs.Graphics().p("ApnGzIHuyaILhE0InuSbg");
	var mask_4_graphics_337 = new cjs.Graphics().p("ApsG/IH4yxILhE0In4Sxg");
	var mask_4_graphics_338 = new cjs.Graphics().p("ApwHJIIAzGILhE0IoATHg");
	var mask_4_graphics_339 = new cjs.Graphics().p("Ap1HVIIKzdILhE0IoKTdg");
	var mask_4_graphics_340 = new cjs.Graphics().p("Ap5HfIITzyILgE0IoTTzg");
	var mask_4_graphics_341 = new cjs.Graphics().p("Ap+HqIIc0IILhE0IocUJg");
	var mask_4_graphics_342 = new cjs.Graphics().p("AqDH1IIm0eILhE1IomUeg");
	var mask_4_graphics_343 = new cjs.Graphics().p("AqHIAIIu00ILhE1IouU0g");
	var mask_4_graphics_344 = new cjs.Graphics().p("AqMILII41KILhE1Io4VKg");
	var mask_4_graphics_345 = new cjs.Graphics().p("AqQIWIJB1gILgE1IpAVgg");
	var mask_4_graphics_346 = new cjs.Graphics().p("AqVIhIJK12ILhE1IpKV2g");
	var mask_4_graphics_347 = new cjs.Graphics().p("AqZIsIJT2MILgE1IpSWMg");
	var mask_4_graphics_348 = new cjs.Graphics().p("AqeI3IJc2iILhE1IpcWig");
	var mask_4_graphics_349 = new cjs.Graphics().p("AqjJCIJm23ILhE0IpmW4g");
	var mask_4_graphics_350 = new cjs.Graphics().p("AqnJNIJu3NILhE0IpuXNg");
	var mask_4_graphics_351 = new cjs.Graphics().p("AqsJYIJ43jILhE0Ip4Xkg");
	var mask_4_graphics_352 = new cjs.Graphics().p("AqwJjIKB35ILgE0IqAX6g");
	var mask_4_graphics_353 = new cjs.Graphics().p("Aq1JuIKK4PILhE0IqKYPg");
	var mask_4_graphics_354 = new cjs.Graphics().p("Aq6J5IKU4lILhE0IqUYmg");
	var mask_4_graphics_355 = new cjs.Graphics().p("Aq+KEIKc47ILhE0IqcY7g");
	var mask_4_graphics_356 = new cjs.Graphics().p("ArDKPIKm5RILhE0IqmZRg");
	var mask_4_graphics_357 = new cjs.Graphics().p("ArHKaIKv5nILgE0IquZng");
	var mask_4_graphics_358 = new cjs.Graphics().p("ArMKlIK459ILhE0Iq4Z9g");
	var mask_4_graphics_359 = new cjs.Graphics().p("ArRKwILC6TILhE0IrCaTg");
	var mask_4_graphics_360 = new cjs.Graphics().p("ArVK7ILK6pILhE0IrKapg");
	var mask_4_graphics_361 = new cjs.Graphics().p("AraLGILU6/ILhE0IrUa/g");
	var mask_4_graphics_362 = new cjs.Graphics().p("AreLRILd7VILgE0IrcbVg");
	var mask_4_graphics_363 = new cjs.Graphics().p("ArjLcILl7rILiE0Irlbrg");
	var mask_4_graphics_364 = new cjs.Graphics().p("ArnLmILu8AILhE0IrtcBg");
	var mask_4_graphics_365 = new cjs.Graphics().p("ArsLyIL38XILiE0Ir3cXg");
	var mask_4_graphics_366 = new cjs.Graphics().p("ArxL8IMB8sILiE0IsBctg");
	var mask_4_graphics_367 = new cjs.Graphics().p("Ar1MIIMJ9DILiE0IsJdDg");
	var mask_4_graphics_368 = new cjs.Graphics().p("Ar6MSIMT9YILiE0IsTdZg");
	var mask_4_graphics_369 = new cjs.Graphics().p("Ar/MdIMd9uILhE1Iscdug");
	var mask_4_graphics_370 = new cjs.Graphics().p("AsDMoIMl+EILiE1IsleEg");
	var mask_4_graphics_371 = new cjs.Graphics().p("AsIMzIMv+aILiE1Isveag");
	var mask_4_graphics_372 = new cjs.Graphics().p("AsMM+IM3+wILiE1Is3ewg");
	var mask_4_graphics_373 = new cjs.Graphics().p("AsRNJINB/GILiE1ItBfGg");
	var mask_4_graphics_374 = new cjs.Graphics().p("AsWNUINL/cILhE1ItKfcg");
	var mask_4_graphics_375 = new cjs.Graphics().p("AsaNfINT/yILiE1ItTfyg");
	var mask_4_graphics_376 = new cjs.Graphics().p("AsfNqMANdggHILiE0MgNdAgHg");
	var mask_4_graphics_377 = new cjs.Graphics().p("AsjN1MANlggdILiE0MgNlAgeg");
	var mask_4_graphics_378 = new cjs.Graphics().p("AsoOAMANvggzILiE0MgNvAgzg");
	var mask_4_graphics_379 = new cjs.Graphics().p("AstOLMAN5ghJILhE0MgN4AhKg");
	var mask_4_graphics_380 = new cjs.Graphics().p("AsxOWMAOBghfILiE0MgOBAhfg");
	var mask_4_graphics_381 = new cjs.Graphics().p("As2OhMAOLgh1ILhE0MgOKAh2g");
	var mask_4_graphics_382 = new cjs.Graphics().p("As6OsMAOTgiLILiE0MgOTAiLg");
	var mask_4_graphics_383 = new cjs.Graphics().p("As/O2MAOdgigILiE0MgOdAihg");
	var mask_4_graphics_384 = new cjs.Graphics().p("AtDPCMAOlgi3ILiE0MgOlAi3g");
	var mask_4_graphics_385 = new cjs.Graphics().p("AtIPMMAOvgjMILiE0MgOvAjNg");
	var mask_4_graphics_386 = new cjs.Graphics().p("AtNPYMAO5gjjILhE0MgO4Ajjg");
	var mask_4_graphics_387 = new cjs.Graphics().p("AtRPiMAPBgj4ILiE0MgPBAj5g");
	var mask_4_graphics_388 = new cjs.Graphics().p("AtWPtMAPLgkOILiE0MgPLAkPg");
	var mask_4_graphics_389 = new cjs.Graphics().p("AtaP5MAPTgklILiE0MgPTAklg");
	var mask_4_graphics_390 = new cjs.Graphics().p("AtfQDMAPdgk6ILiE1MgPdAk6g");
	var mask_4_graphics_391 = new cjs.Graphics().p("AtkQOMAPnglQILhE1MgPlAlQg");
	var mask_4_graphics_392 = new cjs.Graphics().p("AtoQZMAPvglmILiE1MgPvAlmg");
	var mask_4_graphics_393 = new cjs.Graphics().p("AttQkMAP5gl8ILiE1MgP5Al8g");
	var mask_4_graphics_394 = new cjs.Graphics().p("AtxQvMAQBgmSILiE1MgQBAmSg");
	var mask_4_graphics_395 = new cjs.Graphics().p("At2Q6MAQLgmoILiE1MgQLAmog");
	var mask_4_graphics_396 = new cjs.Graphics().p("At6RFMAQUgm+ILhE1MgQTAm+g");
	var mask_4_graphics_397 = new cjs.Graphics().p("At/RQMAQdgnUILiE1MgQdAnTg");
	var mask_4_graphics_398 = new cjs.Graphics().p("AuDRbMAQmgnqILhE1MgQlAnqg");
	var mask_4_graphics_399 = new cjs.Graphics().p("AuIRmMAQvgoAILiE1MgQvAn/g");
	var mask_4_graphics_400 = new cjs.Graphics().p("AuNRxMAQ5goWILiE1MgQ5AoVg");
	var mask_4_graphics_401 = new cjs.Graphics().p("AuRR8MARBgosILiE1MgRBAosg");
	var mask_4_graphics_402 = new cjs.Graphics().p("AuWSHMARLgpCILiE1MgRLApBg");
	var mask_4_graphics_403 = new cjs.Graphics().p("AuaSSMARUgpYILhE1MgRTApYg");
	var mask_4_graphics_404 = new cjs.Graphics().p("AufSdMARdgptILiE0MgRdAptg");
	var mask_4_graphics_405 = new cjs.Graphics().p("AukSoMARngqDILiE0MgRnAqDg");
	var mask_4_graphics_406 = new cjs.Graphics().p("AuoSzMARvgqZILiE0MgRvAqZg");
	var mask_4_graphics_407 = new cjs.Graphics().p("AutS+MAR5gqvILiE0MgR5Aqvg");
	var mask_4_graphics_408 = new cjs.Graphics().p("AuxTJMASCgrFILhE0MgSBArFg");
	var mask_4_graphics_409 = new cjs.Graphics().p("Au2TUMASLgrbILiE0MgSLArbg");
	var mask_4_graphics_410 = new cjs.Graphics().p("Au7TfMASVgrxILiE0MgSVArxg");
	var mask_4_graphics_411 = new cjs.Graphics().p("Au/TpMASdgsGILiE0MgSdAsHg");
	var mask_4_graphics_412 = new cjs.Graphics().p("AvET1MASngsdILiE0MgSnAsdg");
	var mask_4_graphics_413 = new cjs.Graphics().p("AvIT/MASwgsyILhE0MgSvAszg");
	var mask_4_graphics_414 = new cjs.Graphics().p("AjHcDMAS5gtIILiE1MgS6AtIg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(289).to({graphics:mask_4_graphics_289,x:174.8,y:73.4}).wait(1).to({graphics:mask_4_graphics_290,x:309.2,y:124.9}).wait(1).to({graphics:mask_4_graphics_291,x:308.7,y:126}).wait(1).to({graphics:mask_4_graphics_292,x:308.2,y:127.1}).wait(1).to({graphics:mask_4_graphics_293,x:307.8,y:128.2}).wait(1).to({graphics:mask_4_graphics_294,x:307.3,y:129.3}).wait(1).to({graphics:mask_4_graphics_295,x:306.9,y:130.4}).wait(1).to({graphics:mask_4_graphics_296,x:306.4,y:131.5}).wait(1).to({graphics:mask_4_graphics_297,x:305.9,y:132.6}).wait(1).to({graphics:mask_4_graphics_298,x:305.5,y:133.7}).wait(1).to({graphics:mask_4_graphics_299,x:305,y:134.8}).wait(1).to({graphics:mask_4_graphics_300,x:304.6,y:135.9}).wait(1).to({graphics:mask_4_graphics_301,x:304.1,y:137}).wait(1).to({graphics:mask_4_graphics_302,x:303.6,y:138.1}).wait(1).to({graphics:mask_4_graphics_303,x:303.2,y:139.2}).wait(1).to({graphics:mask_4_graphics_304,x:302.7,y:140.3}).wait(1).to({graphics:mask_4_graphics_305,x:302.3,y:141.4}).wait(1).to({graphics:mask_4_graphics_306,x:301.8,y:142.5}).wait(1).to({graphics:mask_4_graphics_307,x:301.4,y:143.5}).wait(1).to({graphics:mask_4_graphics_308,x:300.9,y:144.6}).wait(1).to({graphics:mask_4_graphics_309,x:300.4,y:145.7}).wait(1).to({graphics:mask_4_graphics_310,x:300,y:146.8}).wait(1).to({graphics:mask_4_graphics_311,x:299.5,y:147.9}).wait(1).to({graphics:mask_4_graphics_312,x:299.1,y:149}).wait(1).to({graphics:mask_4_graphics_313,x:298.6,y:150.1}).wait(1).to({graphics:mask_4_graphics_314,x:298.1,y:151.2}).wait(1).to({graphics:mask_4_graphics_315,x:297.7,y:152.3}).wait(1).to({graphics:mask_4_graphics_316,x:297.2,y:153.4}).wait(1).to({graphics:mask_4_graphics_317,x:296.8,y:154.5}).wait(1).to({graphics:mask_4_graphics_318,x:296.3,y:155.6}).wait(1).to({graphics:mask_4_graphics_319,x:295.8,y:156.7}).wait(1).to({graphics:mask_4_graphics_320,x:295.4,y:157.8}).wait(1).to({graphics:mask_4_graphics_321,x:294.9,y:158.9}).wait(1).to({graphics:mask_4_graphics_322,x:294.5,y:160}).wait(1).to({graphics:mask_4_graphics_323,x:294,y:161.1}).wait(1).to({graphics:mask_4_graphics_324,x:293.6,y:162.2}).wait(1).to({graphics:mask_4_graphics_325,x:293.1,y:163.3}).wait(1).to({graphics:mask_4_graphics_326,x:292.6,y:164.4}).wait(1).to({graphics:mask_4_graphics_327,x:292.2,y:165.5}).wait(1).to({graphics:mask_4_graphics_328,x:291.7,y:166.6}).wait(1).to({graphics:mask_4_graphics_329,x:291.3,y:167.7}).wait(1).to({graphics:mask_4_graphics_330,x:290.8,y:168.8}).wait(1).to({graphics:mask_4_graphics_331,x:290.3,y:169.9}).wait(1).to({graphics:mask_4_graphics_332,x:289.9,y:171}).wait(1).to({graphics:mask_4_graphics_333,x:289.4,y:172.1}).wait(1).to({graphics:mask_4_graphics_334,x:289,y:173.2}).wait(1).to({graphics:mask_4_graphics_335,x:288.5,y:174.3}).wait(1).to({graphics:mask_4_graphics_336,x:288,y:175.4}).wait(1).to({graphics:mask_4_graphics_337,x:287.6,y:176.5}).wait(1).to({graphics:mask_4_graphics_338,x:287.1,y:177.6}).wait(1).to({graphics:mask_4_graphics_339,x:286.7,y:178.7}).wait(1).to({graphics:mask_4_graphics_340,x:286.2,y:179.8}).wait(1).to({graphics:mask_4_graphics_341,x:285.8,y:180.9}).wait(1).to({graphics:mask_4_graphics_342,x:285.3,y:181.9}).wait(1).to({graphics:mask_4_graphics_343,x:284.8,y:183}).wait(1).to({graphics:mask_4_graphics_344,x:284.4,y:184.1}).wait(1).to({graphics:mask_4_graphics_345,x:283.9,y:185.2}).wait(1).to({graphics:mask_4_graphics_346,x:283.5,y:186.3}).wait(1).to({graphics:mask_4_graphics_347,x:283,y:187.4}).wait(1).to({graphics:mask_4_graphics_348,x:282.5,y:188.5}).wait(1).to({graphics:mask_4_graphics_349,x:282.1,y:189.6}).wait(1).to({graphics:mask_4_graphics_350,x:281.6,y:190.7}).wait(1).to({graphics:mask_4_graphics_351,x:281.2,y:191.8}).wait(1).to({graphics:mask_4_graphics_352,x:280.7,y:192.9}).wait(1).to({graphics:mask_4_graphics_353,x:280.2,y:194}).wait(1).to({graphics:mask_4_graphics_354,x:279.8,y:195.1}).wait(1).to({graphics:mask_4_graphics_355,x:279.3,y:196.2}).wait(1).to({graphics:mask_4_graphics_356,x:278.9,y:197.3}).wait(1).to({graphics:mask_4_graphics_357,x:278.4,y:198.4}).wait(1).to({graphics:mask_4_graphics_358,x:278,y:199.5}).wait(1).to({graphics:mask_4_graphics_359,x:277.5,y:200.6}).wait(1).to({graphics:mask_4_graphics_360,x:277,y:201.7}).wait(1).to({graphics:mask_4_graphics_361,x:276.6,y:202.8}).wait(1).to({graphics:mask_4_graphics_362,x:276.1,y:203.9}).wait(1).to({graphics:mask_4_graphics_363,x:275.7,y:205}).wait(1).to({graphics:mask_4_graphics_364,x:275.2,y:206.1}).wait(1).to({graphics:mask_4_graphics_365,x:274.7,y:207.2}).wait(1).to({graphics:mask_4_graphics_366,x:274.3,y:208.3}).wait(1).to({graphics:mask_4_graphics_367,x:273.8,y:209.4}).wait(1).to({graphics:mask_4_graphics_368,x:273.4,y:210.5}).wait(1).to({graphics:mask_4_graphics_369,x:272.9,y:211.5}).wait(1).to({graphics:mask_4_graphics_370,x:272.4,y:212.6}).wait(1).to({graphics:mask_4_graphics_371,x:272,y:213.7}).wait(1).to({graphics:mask_4_graphics_372,x:271.5,y:214.8}).wait(1).to({graphics:mask_4_graphics_373,x:271.1,y:215.9}).wait(1).to({graphics:mask_4_graphics_374,x:270.6,y:217}).wait(1).to({graphics:mask_4_graphics_375,x:270.2,y:218.1}).wait(1).to({graphics:mask_4_graphics_376,x:269.7,y:219.2}).wait(1).to({graphics:mask_4_graphics_377,x:269.2,y:220.3}).wait(1).to({graphics:mask_4_graphics_378,x:268.8,y:221.4}).wait(1).to({graphics:mask_4_graphics_379,x:268.3,y:222.5}).wait(1).to({graphics:mask_4_graphics_380,x:267.9,y:223.6}).wait(1).to({graphics:mask_4_graphics_381,x:267.4,y:224.7}).wait(1).to({graphics:mask_4_graphics_382,x:266.9,y:225.8}).wait(1).to({graphics:mask_4_graphics_383,x:266.5,y:226.9}).wait(1).to({graphics:mask_4_graphics_384,x:266,y:228}).wait(1).to({graphics:mask_4_graphics_385,x:265.6,y:229.1}).wait(1).to({graphics:mask_4_graphics_386,x:265.1,y:230.2}).wait(1).to({graphics:mask_4_graphics_387,x:264.7,y:231.3}).wait(1).to({graphics:mask_4_graphics_388,x:264.2,y:232.4}).wait(1).to({graphics:mask_4_graphics_389,x:263.7,y:233.5}).wait(1).to({graphics:mask_4_graphics_390,x:263.3,y:234.6}).wait(1).to({graphics:mask_4_graphics_391,x:262.8,y:235.7}).wait(1).to({graphics:mask_4_graphics_392,x:262.4,y:236.8}).wait(1).to({graphics:mask_4_graphics_393,x:261.9,y:237.9}).wait(1).to({graphics:mask_4_graphics_394,x:261.4,y:239}).wait(1).to({graphics:mask_4_graphics_395,x:261,y:240.1}).wait(1).to({graphics:mask_4_graphics_396,x:260.5,y:241.2}).wait(1).to({graphics:mask_4_graphics_397,x:260.1,y:242.3}).wait(1).to({graphics:mask_4_graphics_398,x:259.6,y:243.4}).wait(1).to({graphics:mask_4_graphics_399,x:259.1,y:244.5}).wait(1).to({graphics:mask_4_graphics_400,x:258.7,y:245.6}).wait(1).to({graphics:mask_4_graphics_401,x:258.2,y:246.7}).wait(1).to({graphics:mask_4_graphics_402,x:257.8,y:247.8}).wait(1).to({graphics:mask_4_graphics_403,x:257.3,y:248.9}).wait(1).to({graphics:mask_4_graphics_404,x:256.9,y:249.9}).wait(1).to({graphics:mask_4_graphics_405,x:256.4,y:251}).wait(1).to({graphics:mask_4_graphics_406,x:255.9,y:252.1}).wait(1).to({graphics:mask_4_graphics_407,x:255.5,y:253.2}).wait(1).to({graphics:mask_4_graphics_408,x:255,y:254.3}).wait(1).to({graphics:mask_4_graphics_409,x:254.6,y:255.4}).wait(1).to({graphics:mask_4_graphics_410,x:254.1,y:256.5}).wait(1).to({graphics:mask_4_graphics_411,x:253.6,y:257.6}).wait(1).to({graphics:mask_4_graphics_412,x:253.2,y:258.7}).wait(1).to({graphics:mask_4_graphics_413,x:252.7,y:259.8}).wait(1).to({graphics:mask_4_graphics_414,x:174.8,y:210.4}).wait(332));

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(20,1,1).p("AKY24QjkGjjgGpQjXGbjTG8QjSG9iiFkQihFjCsBK");
	this.shape_5.setTransform(245.6,277.5);
	this.shape_5._off = true;

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(289).to({_off:false},0).wait(457));

	// Layer 17
	this.instance_4 = new lib.ar2("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(216.5,194,1,1,9.9,0,0,0.9,-0.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).wait(737));

	// Layer 9 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_169 = new cjs.Graphics().p("AEeJYIClhUIG3NZIilBVg");
	var mask_5_graphics_170 = new cjs.Graphics().p("Ak1l9IC2hdIG2NYIi3Bdg");
	var mask_5_graphics_171 = new cjs.Graphics().p("Ak+l5IDHhmIG2NZIjHBmg");
	var mask_5_graphics_172 = new cjs.Graphics().p("AlGl0IDYhvIG1NZIjYBug");
	var mask_5_graphics_173 = new cjs.Graphics().p("AlPlwIDph3IG2NYIjpB3g");
	var mask_5_graphics_174 = new cjs.Graphics().p("AlXlsID6iAIG1NZIj6CAg");
	var mask_5_graphics_175 = new cjs.Graphics().p("AlglnIEMiJIG1NZIkLCIg");
	var mask_5_graphics_176 = new cjs.Graphics().p("AloljIEciSIG1NZIkcCRg");
	var mask_5_graphics_177 = new cjs.Graphics().p("AlxlfIEuiaIG1NZIktCag");
	var mask_5_graphics_178 = new cjs.Graphics().p("Al5laIE+ijIG2NZIk/Cig");
	var mask_5_graphics_179 = new cjs.Graphics().p("AmClWIFPisIG2NZIlPCrg");
	var mask_5_graphics_180 = new cjs.Graphics().p("AmKlSIFgi0IG2NZIlhC0g");
	var mask_5_graphics_181 = new cjs.Graphics().p("AmTlNIFxi9IG2NYIlxC9g");
	var mask_5_graphics_182 = new cjs.Graphics().p("AmblJIGCjGIG1NZImCDFg");
	var mask_5_graphics_183 = new cjs.Graphics().p("AmklFIGTjOIG2NZImTDOg");
	var mask_5_graphics_184 = new cjs.Graphics().p("AmslAIGkjXIG1NYImkDXg");
	var mask_5_graphics_185 = new cjs.Graphics().p("Am1k8IG1jgIG2NZIm1Dfg");
	var mask_5_graphics_186 = new cjs.Graphics().p("Am9k4IHFjoIG2NZInFDog");
	var mask_5_graphics_187 = new cjs.Graphics().p("AnGkzIHWjxIG3NYInWDxg");
	var mask_5_graphics_188 = new cjs.Graphics().p("AnOkvIHnj6IG2NZInnD5g");
	var mask_5_graphics_189 = new cjs.Graphics().p("AnXkrIH4kCIG3NZIn4ECg");
	var mask_5_graphics_190 = new cjs.Graphics().p("AnfkmIIJkLIG2NYIoJELg");
	var mask_5_graphics_191 = new cjs.Graphics().p("AnokiIIakTIG3NYIoaETg");
	var mask_5_graphics_192 = new cjs.Graphics().p("AnwkdIIrkdIG2NYIorEdg");
	var mask_5_graphics_193 = new cjs.Graphics().p("An5kZII8klIG3NYIo8Elg");
	var mask_5_graphics_194 = new cjs.Graphics().p("AoBkVIJNktIG2NYIpNEtg");
	var mask_5_graphics_195 = new cjs.Graphics().p("AoKkQIJek3IG3NYIpeE3g");
	var mask_5_graphics_196 = new cjs.Graphics().p("AoSkMIJvk/IG2NYIpvE/g");
	var mask_5_graphics_197 = new cjs.Graphics().p("AobkIIKAlHIG3NYIqAFHg");
	var mask_5_graphics_198 = new cjs.Graphics().p("AojkDIKRlRIG2NZIqRFQg");
	var mask_5_graphics_199 = new cjs.Graphics().p("Aosj/IKilZIG3NYIqiFZg");
	var mask_5_graphics_200 = new cjs.Graphics().p("Ao0j7IKzliIG2NZIqzFig");
	var mask_5_graphics_201 = new cjs.Graphics().p("Ao9j2ILElrIG3NZIrEFqg");
	var mask_5_graphics_202 = new cjs.Graphics().p("ApFjyILVlzIG2NYIrVFzg");
	var mask_5_graphics_203 = new cjs.Graphics().p("ApOjuILml8IG3NZIrmF8g");
	var mask_5_graphics_204 = new cjs.Graphics().p("ApWjpIL3mFIG2NZIr3GEg");
	var mask_5_graphics_205 = new cjs.Graphics().p("ApfjlIMImNIG3NYIsIGNg");
	var mask_5_graphics_206 = new cjs.Graphics().p("ApnjhIMZmWIG2NZIsZGWg");
	var mask_5_graphics_207 = new cjs.Graphics().p("ApwjcIMqmfIG3NZIsqGeg");
	var mask_5_graphics_208 = new cjs.Graphics().p("Ap4jYIM7mnIG2NYIs7Gng");
	var mask_5_graphics_209 = new cjs.Graphics().p("AqAjUINLmwIG2NZItLGwg");
	var mask_5_graphics_210 = new cjs.Graphics().p("AqJjPINdm5IG2NYItcG5g");
	var mask_5_graphics_211 = new cjs.Graphics().p("AqRjLINtnCIG3NZItuHBg");
	var mask_5_graphics_212 = new cjs.Graphics().p("AqajHIN/nKIG2NZIt+HKg");
	var mask_5_graphics_213 = new cjs.Graphics().p("AqijCIOPnTIG3NYIuQHTg");
	var mask_5_graphics_214 = new cjs.Graphics().p("Aqri+IOgncIG3NZIugHbg");
	var mask_5_graphics_215 = new cjs.Graphics().p("Aqzi6IOxnkIG3NZIuyHkg");
	var mask_5_graphics_216 = new cjs.Graphics().p("Aq8i1IPCntIG3NYIvCHtg");
	var mask_5_graphics_217 = new cjs.Graphics().p("ArEixIPTn2IG2NZIvTH1g");
	var mask_5_graphics_218 = new cjs.Graphics().p("ArNitIPkn+IG3NZIvkH+g");
	var mask_5_graphics_219 = new cjs.Graphics().p("ArVioIP1oHIG2NYIv1IHg");
	var mask_5_graphics_220 = new cjs.Graphics().p("AreikIQHoPIG2NYIwGIPg");
	var mask_5_graphics_221 = new cjs.Graphics().p("ArmigIQXoYIG3NZIwYIYg");
	var mask_5_graphics_222 = new cjs.Graphics().p("ArvicIQpogIG2NZIwoIgg");
	var mask_5_graphics_223 = new cjs.Graphics().p("Ar3iXIQ5opIG3NYIw6Ipg");
	var mask_5_graphics_224 = new cjs.Graphics().p("AsAiTIRKoyIG3NZIxKIyg");
	var mask_5_graphics_225 = new cjs.Graphics().p("AsIiPIRbo6IG2NYIxbI7g");
	var mask_5_graphics_226 = new cjs.Graphics().p("AsRiKIRspDIG3NYIxsJDg");
	var mask_5_graphics_227 = new cjs.Graphics().p("AsZiGIR9pMIG2NZIx9JMg");
	var mask_5_graphics_228 = new cjs.Graphics().p("AsiiCISPpUIG2NYIyOJVg");
	var mask_5_graphics_229 = new cjs.Graphics().p("Asqh9ISfpdIG2NYIyfJdg");
	var mask_5_graphics_230 = new cjs.Graphics().p("Aszh5ISxpmIG2NZIywJmg");
	var mask_5_graphics_231 = new cjs.Graphics().p("As7h1ITBpuIG3NYIzCJvg");
	var mask_5_graphics_232 = new cjs.Graphics().p("AtEhwITSp3IG3NYIzSJ3g");
	var mask_5_graphics_233 = new cjs.Graphics().p("AtMhsITjqAIG3NZIzkKAg");
	var mask_5_graphics_234 = new cjs.Graphics().p("AtVhoIT0qIIG3NYIz0KJg");
	var mask_5_graphics_235 = new cjs.Graphics().p("AtdhjIUFqRIG2NYI0FKSg");
	var mask_5_graphics_236 = new cjs.Graphics().p("AtmhfIUWqaIG3NZI0WKag");
	var mask_5_graphics_237 = new cjs.Graphics().p("AtuhbIUnqiIG2NYI0nKjg");
	var mask_5_graphics_238 = new cjs.Graphics().p("At3hWIU4qrIG3NYI04Ksg");
	var mask_5_graphics_239 = new cjs.Graphics().p("At/hSIVJq0IG2NZI1JK0g");
	var mask_5_graphics_240 = new cjs.Graphics().p("AuIhOIVaq8IG3NZI1aK8g");
	var mask_5_graphics_241 = new cjs.Graphics().p("AuQhJIVrrFIG2NYI1rLGg");
	var mask_5_graphics_242 = new cjs.Graphics().p("AuZhFIV8rOIG3NZI18LOg");
	var mask_5_graphics_243 = new cjs.Graphics().p("AuhhBIWNrWIG2NZI2NLWg");
	var mask_5_graphics_244 = new cjs.Graphics().p("Auqg8IWerfIG3NYI2eLgg");
	var mask_5_graphics_245 = new cjs.Graphics().p("Auyg4IWvroIG2NZI2vLog");
	var mask_5_graphics_246 = new cjs.Graphics().p("Au7gzIXArxIG3NYI3ALxg");
	var mask_5_graphics_247 = new cjs.Graphics().p("AvDgvIXRr6IG2NZI3RL6g");
	var mask_5_graphics_248 = new cjs.Graphics().p("AvMgrIXisCIG3NZI3iMCg");
	var mask_5_graphics_249 = new cjs.Graphics().p("AvUgmIXzsLIG2NYI3zMLg");
	var mask_5_graphics_250 = new cjs.Graphics().p("AvdgiIYEsUIG3NZI4EMUg");
	var mask_5_graphics_251 = new cjs.Graphics().p("AvlgeIYVscIG2NZI4VMcg");
	var mask_5_graphics_252 = new cjs.Graphics().p("AvugZIYmslIG3NYI4mMlg");
	var mask_5_graphics_253 = new cjs.Graphics().p("Av2gVIY3suIG2NZI43Mug");
	var mask_5_graphics_254 = new cjs.Graphics().p("Av/gRIZIs2IG3NZI5IM2g");
	var mask_5_graphics_255 = new cjs.Graphics().p("AwHgMIZZs/IG2NYI5ZM/g");
	var mask_5_graphics_256 = new cjs.Graphics().p("AwQgIIZqtIIG3NZI5qNIg");
	var mask_5_graphics_257 = new cjs.Graphics().p("AwYgEIZ7tQIG2NYI57NRg");
	var mask_5_graphics_258 = new cjs.Graphics().p("AwhAAIaMtYIG3NYI6MNZg");
	var mask_5_graphics_259 = new cjs.Graphics().p("AwpAEIadthIG2NaI6dNhg");
	var mask_5_graphics_260 = new cjs.Graphics().p("AwyAIIautpIG3NZI6uNqg");
	var mask_5_graphics_261 = new cjs.Graphics().p("Aw6ANIa+tyIG3NZI6+Nyg");
	var mask_5_graphics_262 = new cjs.Graphics().p("AxCARIbPt7IG2NaI7PN7g");
	var mask_5_graphics_263 = new cjs.Graphics().p("AxLAVIbhuDIG2NZI7gOEg");
	var mask_5_graphics_264 = new cjs.Graphics().p("AxTAaIbxuMIG2NZI7xOMg");
	var mask_5_graphics_265 = new cjs.Graphics().p("AxcAeIcDuVIG2NaI8COVg");
	var mask_5_graphics_266 = new cjs.Graphics().p("AxkAiIcTudIG3NZI8UOeg");
	var mask_5_graphics_267 = new cjs.Graphics().p("AxtAnIckumIG3NZI8kOmg");
	var mask_5_graphics_268 = new cjs.Graphics().p("Ax1ArIc1uvIG3NaI82Ovg");
	var mask_5_graphics_269 = new cjs.Graphics().p("Ax+AvIdGu3IG3NaI9GO3g");
	var mask_5_graphics_270 = new cjs.Graphics().p("AyGA0IdXvAIG2NZI9XPBg");
	var mask_5_graphics_271 = new cjs.Graphics().p("AyPA4IdpvJIG2NaI9oPJg");
	var mask_5_graphics_272 = new cjs.Graphics().p("AyXA8Id5vRIG2NaI95PRg");
	var mask_5_graphics_273 = new cjs.Graphics().p("AygBBIeLvaIG2NZI+KPbg");
	var mask_5_graphics_274 = new cjs.Graphics().p("ApcJYIebvjIG2NZI+bPkg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(169).to({graphics:mask_5_graphics_169,x:89,y:145.8}).wait(1).to({graphics:mask_5_graphics_170,x:148.7,y:244}).wait(1).to({graphics:mask_5_graphics_171,x:149.5,y:243.6}).wait(1).to({graphics:mask_5_graphics_172,x:150.4,y:243.2}).wait(1).to({graphics:mask_5_graphics_173,x:151.2,y:242.7}).wait(1).to({graphics:mask_5_graphics_174,x:152.1,y:242.3}).wait(1).to({graphics:mask_5_graphics_175,x:152.9,y:241.9}).wait(1).to({graphics:mask_5_graphics_176,x:153.8,y:241.4}).wait(1).to({graphics:mask_5_graphics_177,x:154.6,y:241}).wait(1).to({graphics:mask_5_graphics_178,x:155.5,y:240.6}).wait(1).to({graphics:mask_5_graphics_179,x:156.3,y:240.1}).wait(1).to({graphics:mask_5_graphics_180,x:157.2,y:239.7}).wait(1).to({graphics:mask_5_graphics_181,x:158,y:239.3}).wait(1).to({graphics:mask_5_graphics_182,x:158.9,y:238.8}).wait(1).to({graphics:mask_5_graphics_183,x:159.7,y:238.4}).wait(1).to({graphics:mask_5_graphics_184,x:160.5,y:237.9}).wait(1).to({graphics:mask_5_graphics_185,x:161.4,y:237.5}).wait(1).to({graphics:mask_5_graphics_186,x:162.2,y:237.1}).wait(1).to({graphics:mask_5_graphics_187,x:163.1,y:236.6}).wait(1).to({graphics:mask_5_graphics_188,x:163.9,y:236.2}).wait(1).to({graphics:mask_5_graphics_189,x:164.8,y:235.8}).wait(1).to({graphics:mask_5_graphics_190,x:165.6,y:235.3}).wait(1).to({graphics:mask_5_graphics_191,x:166.5,y:234.9}).wait(1).to({graphics:mask_5_graphics_192,x:167.3,y:234.5}).wait(1).to({graphics:mask_5_graphics_193,x:168.2,y:234}).wait(1).to({graphics:mask_5_graphics_194,x:169,y:233.6}).wait(1).to({graphics:mask_5_graphics_195,x:169.9,y:233.2}).wait(1).to({graphics:mask_5_graphics_196,x:170.7,y:232.7}).wait(1).to({graphics:mask_5_graphics_197,x:171.6,y:232.3}).wait(1).to({graphics:mask_5_graphics_198,x:172.4,y:231.9}).wait(1).to({graphics:mask_5_graphics_199,x:173.3,y:231.4}).wait(1).to({graphics:mask_5_graphics_200,x:174.1,y:231}).wait(1).to({graphics:mask_5_graphics_201,x:175,y:230.6}).wait(1).to({graphics:mask_5_graphics_202,x:175.8,y:230.1}).wait(1).to({graphics:mask_5_graphics_203,x:176.7,y:229.7}).wait(1).to({graphics:mask_5_graphics_204,x:177.5,y:229.3}).wait(1).to({graphics:mask_5_graphics_205,x:178.4,y:228.8}).wait(1).to({graphics:mask_5_graphics_206,x:179.2,y:228.4}).wait(1).to({graphics:mask_5_graphics_207,x:180.1,y:228}).wait(1).to({graphics:mask_5_graphics_208,x:180.9,y:227.5}).wait(1).to({graphics:mask_5_graphics_209,x:181.8,y:227.1}).wait(1).to({graphics:mask_5_graphics_210,x:182.6,y:226.7}).wait(1).to({graphics:mask_5_graphics_211,x:183.5,y:226.2}).wait(1).to({graphics:mask_5_graphics_212,x:184.3,y:225.8}).wait(1).to({graphics:mask_5_graphics_213,x:185.2,y:225.4}).wait(1).to({graphics:mask_5_graphics_214,x:186,y:224.9}).wait(1).to({graphics:mask_5_graphics_215,x:186.9,y:224.5}).wait(1).to({graphics:mask_5_graphics_216,x:187.7,y:224.1}).wait(1).to({graphics:mask_5_graphics_217,x:188.6,y:223.6}).wait(1).to({graphics:mask_5_graphics_218,x:189.4,y:223.2}).wait(1).to({graphics:mask_5_graphics_219,x:190.3,y:222.7}).wait(1).to({graphics:mask_5_graphics_220,x:191.1,y:222.3}).wait(1).to({graphics:mask_5_graphics_221,x:192,y:221.9}).wait(1).to({graphics:mask_5_graphics_222,x:192.8,y:221.4}).wait(1).to({graphics:mask_5_graphics_223,x:193.7,y:221}).wait(1).to({graphics:mask_5_graphics_224,x:194.5,y:220.6}).wait(1).to({graphics:mask_5_graphics_225,x:195.4,y:220.1}).wait(1).to({graphics:mask_5_graphics_226,x:196.2,y:219.7}).wait(1).to({graphics:mask_5_graphics_227,x:197.1,y:219.2}).wait(1).to({graphics:mask_5_graphics_228,x:197.9,y:218.8}).wait(1).to({graphics:mask_5_graphics_229,x:198.8,y:218.4}).wait(1).to({graphics:mask_5_graphics_230,x:199.6,y:217.9}).wait(1).to({graphics:mask_5_graphics_231,x:200.5,y:217.5}).wait(1).to({graphics:mask_5_graphics_232,x:201.3,y:217.1}).wait(1).to({graphics:mask_5_graphics_233,x:202.2,y:216.6}).wait(1).to({graphics:mask_5_graphics_234,x:203,y:216.2}).wait(1).to({graphics:mask_5_graphics_235,x:203.8,y:215.8}).wait(1).to({graphics:mask_5_graphics_236,x:204.7,y:215.3}).wait(1).to({graphics:mask_5_graphics_237,x:205.5,y:214.9}).wait(1).to({graphics:mask_5_graphics_238,x:206.4,y:214.5}).wait(1).to({graphics:mask_5_graphics_239,x:207.2,y:214}).wait(1).to({graphics:mask_5_graphics_240,x:208.1,y:213.6}).wait(1).to({graphics:mask_5_graphics_241,x:208.9,y:213.2}).wait(1).to({graphics:mask_5_graphics_242,x:209.8,y:212.7}).wait(1).to({graphics:mask_5_graphics_243,x:210.6,y:212.3}).wait(1).to({graphics:mask_5_graphics_244,x:211.5,y:211.9}).wait(1).to({graphics:mask_5_graphics_245,x:212.3,y:211.4}).wait(1).to({graphics:mask_5_graphics_246,x:213.2,y:211}).wait(1).to({graphics:mask_5_graphics_247,x:214,y:210.6}).wait(1).to({graphics:mask_5_graphics_248,x:214.9,y:210.1}).wait(1).to({graphics:mask_5_graphics_249,x:215.7,y:209.7}).wait(1).to({graphics:mask_5_graphics_250,x:216.6,y:209.3}).wait(1).to({graphics:mask_5_graphics_251,x:217.4,y:208.8}).wait(1).to({graphics:mask_5_graphics_252,x:218.3,y:208.4}).wait(1).to({graphics:mask_5_graphics_253,x:219.1,y:208}).wait(1).to({graphics:mask_5_graphics_254,x:220,y:207.5}).wait(1).to({graphics:mask_5_graphics_255,x:220.8,y:207.1}).wait(1).to({graphics:mask_5_graphics_256,x:221.7,y:206.7}).wait(1).to({graphics:mask_5_graphics_257,x:222.5,y:206.2}).wait(1).to({graphics:mask_5_graphics_258,x:223.4,y:205.8}).wait(1).to({graphics:mask_5_graphics_259,x:224.2,y:205.4}).wait(1).to({graphics:mask_5_graphics_260,x:225.1,y:204.9}).wait(1).to({graphics:mask_5_graphics_261,x:225.9,y:204.5}).wait(1).to({graphics:mask_5_graphics_262,x:226.8,y:204}).wait(1).to({graphics:mask_5_graphics_263,x:227.6,y:203.6}).wait(1).to({graphics:mask_5_graphics_264,x:228.5,y:203.2}).wait(1).to({graphics:mask_5_graphics_265,x:229.3,y:202.7}).wait(1).to({graphics:mask_5_graphics_266,x:230.2,y:202.3}).wait(1).to({graphics:mask_5_graphics_267,x:231,y:201.9}).wait(1).to({graphics:mask_5_graphics_268,x:231.9,y:201.4}).wait(1).to({graphics:mask_5_graphics_269,x:232.7,y:201}).wait(1).to({graphics:mask_5_graphics_270,x:233.6,y:200.6}).wait(1).to({graphics:mask_5_graphics_271,x:234.4,y:200.1}).wait(1).to({graphics:mask_5_graphics_272,x:235.3,y:199.7}).wait(1).to({graphics:mask_5_graphics_273,x:236.1,y:199.3}).wait(1).to({graphics:mask_5_graphics_274,x:178.1,y:145.8}).wait(472));

	// Layer 8
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(20,1,1).p("AOjrEQnmhSnYC3QnZC3j+GpQj/GqBzCxQByCxEAg+QEAg+FolAQFolADGkXQDFkXBUing");
	this.shape_6.setTransform(218.9,200.9);
	this.shape_6._off = true;

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(169).to({_off:false},0).wait(577));

	// Layer 7 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_137 = new cjs.Graphics().p("AiBTdQAEkHC6i7QC/i/EPAAQEOAAC/C/QC7C7AEEHg");
	var mask_6_graphics_138 = new cjs.Graphics().p("AAqMhQC2jHEOgMQEOgNDHC2QDECzAQEGI0XA8QgIkHCyjEg");
	var mask_6_graphics_139 = new cjs.Graphics().p("AAYMpQCtjPENgZQENgZDPCtQDMCqAcEFI0SB3QgUkHCojLg");
	var mask_6_graphics_140 = new cjs.Graphics().p("AAHMyQCkjYEMgkQELglDXCjQDTCgAoEEI0LCxQggkFCejSg");
	var mask_6_graphics_141 = new cjs.Graphics().p("AgGM7QCYjeEKgxQEKgxDeCZQDaCWA0ECI0CDsQgskDCWjag");
	var mask_6_graphics_142 = new cjs.Graphics().p("AgTNFQCOjlEIg9QEHg9DlCPQDgCMA/D/Iz1EnQg3kBCLjhg");
	var mask_6_graphics_143 = new cjs.Graphics().p("AgeNQQCEjrEEhJQEEhJDrCFQDnCBBLD8IznFgQhDj+CBjng");
	var mask_6_graphics_144 = new cjs.Graphics().p("AgnNcQB5jxEBhUQEAhVDxB5QDsB3BWD5IzVGYQhOj7B2jsg");
	var mask_6_graphics_145 = new cjs.Graphics().p("AguNpQBuj2D8hhQD8hgD3BvQDxBsBhD0IzBHQQhaj3Bsjxg");
	var mask_6_graphics_146 = new cjs.Graphics().p("AgzN2QBij7D4hrQD3hsD7BjQD3BhBsDwIyrIHQhljzBhj2g");
	var mask_6_graphics_147 = new cjs.Graphics().p("Ag3OFQBXkADzh2QDyh3D/BXQD7BWB3DqIySI+QhwjuBVj6g");
	var mask_6_graphics_148 = new cjs.Graphics().p("Ag4OUQBLkDDtiCQDsiCEDBMQD+BKCCDlIx2JyQh7jpBKj9g");
	var mask_6_graphics_149 = new cjs.Graphics().p("Ag4OjQA/kGDniMQDmiMEHA/QEAA/CMDfIxZKlQiEjjA+kBg");
	var mask_6_graphics_150 = new cjs.Graphics().p("Ag2O0QA0kJDfiXQDgiWEJAzQEDAzCWDYIw5LXQiOjcAykDg");
	var mask_6_graphics_151 = new cjs.Graphics().p("AgyPEQAokKDYihQDZihELAoQEFAnCgDRIwXMHQiZjVAnkGg");
	var mask_6_graphics_152 = new cjs.Graphics().p("AgsPWQAckNDQiqQDRiqENAbQEHAbCoDKIvyM2QiijOAbkHg");
	var mask_6_graphics_153 = new cjs.Graphics().p("AgiPtQAMkODGi2QDHi2ENAMQEJALC0C/IvBNwQitjEALkIg");
	var mask_6_graphics_154 = new cjs.Graphics().p("AgVQFQgEkOC7jBQC8jCEOgEQEIgEDAC0IuMOnQi4i6gFkIg");
	var mask_6_graphics_155 = new cjs.Graphics().p("AgEQeQgUkNCvjNQCwjMENgUQEIgUDJCpItSPbQjFiugSkIg");
	var mask_6_graphics_156 = new cjs.Graphics().p("AAOQ4QgjkMCjjWQCkjXELgkQEGgjDTCdIsWQLQjPiigjkGg");
	var mask_6_graphics_157 = new cjs.Graphics().p("AAkRSQgykJCWjgQCWjgEJgzQEEgzDcCQIrZQ4QjXiWgzkDg");
	var mask_6_graphics_158 = new cjs.Graphics().p("AA9RsQhCkFCJjoQCJjpEFhDQEBhBDkCCIqYRiQjgiJhCkBg");
	var mask_6_graphics_159 = new cjs.Graphics().p("ABZSIQhTkCB8jwQB8jwEBhSQD8hRDrB1IpVSHQjoh8hQj7g");
	var mask_6_graphics_160 = new cjs.Graphics().p("AB3SjQhhj8Btj3QBtj3D8hhQD3hgDyBnIoQSoQjvhuhfj2g");
	var mask_6_graphics_161 = new cjs.Graphics().p("ACYS+Qhwj1Bej9QBfj9D2hwQDwhuD4BYInJTGQj0hghujxg");
	var mask_6_graphics_162 = new cjs.Graphics().p("AC7TaQh+jvBPkCQBQkCDvh+QDph8D9BKImATeQj6hRh8jqg");
	var mask_6_graphics_163 = new cjs.Graphics().p("ADhT2QiMjnBAkHQBAkGDniMQDiiJEAA6Ik1TzQj/hCiJjig");
	var mask_6_graphics_164 = new cjs.Graphics().p("AEIURQiZjeAxkKQAwkJDeiaQDaiWEEArIjrUDQkCgziXjag");
	var mask_6_graphics_165 = new cjs.Graphics().p("AEyUtQimjVAhkMQAhkNDVimQDQijEGAcIifUPQkFgkijjQg");
	var mask_6_graphics_166 = new cjs.Graphics().p("AFeVIQiyjLARkOQARkNDKizQDHivEGANIhSUWQkGgVivjGg");
	var mask_6_graphics_167 = new cjs.Graphics().p("AGLVjQi+jAABkOQACkPC/i+QC8i6EHgDIgFUYQkHgFi7i7g");
	var mask_6_graphics_168 = new cjs.Graphics().p("AGXV9QjJi1gPkOQgPkNC0jKQCxjFEGgSIBIUXIgeAAQj0AAi6img");
	var mask_6_graphics_169 = new cjs.Graphics().p("AGhWVQjTiogfkNQgfkMCojUQCljPEFgiICUURQgkADgiAAQjcAAiziOg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(137).to({graphics:mask_6_graphics_137,x:117.5,y:124.5}).wait(1).to({graphics:mask_6_graphics_138,x:117.5,y:126}).wait(1).to({graphics:mask_6_graphics_139,x:117.4,y:127.5}).wait(1).to({graphics:mask_6_graphics_140,x:117.2,y:128.9}).wait(1).to({graphics:mask_6_graphics_141,x:117,y:130.4}).wait(1).to({graphics:mask_6_graphics_142,x:116.6,y:131.9}).wait(1).to({graphics:mask_6_graphics_143,x:116.3,y:133.3}).wait(1).to({graphics:mask_6_graphics_144,x:115.8,y:134.7}).wait(1).to({graphics:mask_6_graphics_145,x:115.3,y:136.1}).wait(1).to({graphics:mask_6_graphics_146,x:114.8,y:137.5}).wait(1).to({graphics:mask_6_graphics_147,x:114.2,y:138.9}).wait(1).to({graphics:mask_6_graphics_148,x:113.5,y:140.2}).wait(1).to({graphics:mask_6_graphics_149,x:112.7,y:141.5}).wait(1).to({graphics:mask_6_graphics_150,x:111.9,y:142.7}).wait(1).to({graphics:mask_6_graphics_151,x:111.1,y:143.9}).wait(1).to({graphics:mask_6_graphics_152,x:110.1,y:145.1}).wait(1).to({graphics:mask_6_graphics_153,x:108.9,y:146.5}).wait(1).to({graphics:mask_6_graphics_154,x:107.5,y:147.9}).wait(1).to({graphics:mask_6_graphics_155,x:106.1,y:149.2}).wait(1).to({graphics:mask_6_graphics_156,x:104.6,y:150.4}).wait(1).to({graphics:mask_6_graphics_157,x:103.1,y:151.5}).wait(1).to({graphics:mask_6_graphics_158,x:101.5,y:152.6}).wait(1).to({graphics:mask_6_graphics_159,x:99.8,y:153.5}).wait(1).to({graphics:mask_6_graphics_160,x:98.1,y:154.3}).wait(1).to({graphics:mask_6_graphics_161,x:96.3,y:155.1}).wait(1).to({graphics:mask_6_graphics_162,x:94.5,y:155.7}).wait(1).to({graphics:mask_6_graphics_163,x:92.6,y:156.2}).wait(1).to({graphics:mask_6_graphics_164,x:90.8,y:156.6}).wait(1).to({graphics:mask_6_graphics_165,x:88.9,y:156.9}).wait(1).to({graphics:mask_6_graphics_166,x:86.9,y:157.1}).wait(1).to({graphics:mask_6_graphics_167,x:85,y:157.1}).wait(1).to({graphics:mask_6_graphics_168,x:86.7,y:157.1}).wait(1).to({graphics:mask_6_graphics_169,x:88.6,y:157.1}).wait(577));

	// Layer 6
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(20,1,1).p("AOjrEQnmhSnYC3QnZC3j+GpQj/GqBzCxQByCxEAg+QB6geCQhX");
	this.shape_7.setTransform(218.9,200.9);
	this.shape_7._off = true;

	var maskedShapeInstanceList = [this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(137).to({_off:false},0).wait(609));

	// Layer 5 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_9 = new cjs.Graphics().p("EgIUAgiMAZcg0xQK7FSEALcQEBLclSK8QlRK8rdD/Qk9Bwk3AAQmXAAmNjAg");
	var mask_7_graphics_10 = new cjs.Graphics().p("EgH+AgsMAYwg1FQLAFJEJLYQEKLalJLAQlILAraEIQlHB4lBAAQmMAAmEi2g");
	var mask_7_graphics_11 = new cjs.Graphics().p("EgHpAg2MAYFg1ZQLFFAESLVQETLWlALEQk/LFrXERQlQCAlMAAQmBAAl8isg");
	var mask_7_graphics_12 = new cjs.Graphics().p("EgHTAhAMAXag1sQLIE2EbLSQEcLSk2LJQk3LIrTEbQlZCIlXAAQl2AAlziig");
	var mask_7_graphics_13 = new cjs.Graphics().p("EgG9AhJMAWug1/QLMEuEkLOQEmLPkuLMQktLMrQEkQliCRljAAQlqAAlqiZg");
	var mask_7_graphics_14 = new cjs.Graphics().p("EgGnAhSMAWCg2RQLQElEtLKQEvLLklLQQkkLQrMEtQlsCaltAAQlfAAlhiQg");
	var mask_7_graphics_15 = new cjs.Graphics().p("EgGRAhbMAVWg2jQLTEcE3LGQE3LHkbLUQkbLTrIE3Ql1Cjl4AAQlUAAlYiHg");
	var mask_7_graphics_16 = new cjs.Graphics().p("EgF7AhkMAUqg20QLXESE/LDQFBLDkSLXQkTLXrDE/Ql+CtmDAAQlJAAlPh+g");
	var mask_7_graphics_17 = new cjs.Graphics().p("EgFlAhsMAT9g3EQLbEJFIK+QFKK/kJLbQkJLarAFIQmGC3mOAAQk/AAlFh2g");
	var mask_7_graphics_18 = new cjs.Graphics().p("EgFPAh0MATRg3UQLeEAFRK6QFSK7j/LdQkALeq7FRQmODBmaAAQk0AAk8hug");
	var mask_7_graphics_19 = new cjs.Graphics().p("EgE4Ah8MASkg3jQLgD2FbK2QFbK2j3LhQj2Lhq3FaQmWDLmlAAQkpAAkyhmg");
	var mask_7_graphics_20 = new cjs.Graphics().p("EgEhAiDMAR2g3yQLkDtFjKxQFkKzjtLkQjtLkqzFiQmeDWmwAAQkgAAkmhfg");
	var mask_7_graphics_21 = new cjs.Graphics().p("EgELAiLMARJg4BQLnDkFsKtQFtKtjkLnQjjLnqvFrQmmDhm8AAQkUAAkdhXg");
	var mask_7_graphics_22 = new cjs.Graphics().p("EgD0AiSMAQcg4OQLpDaF1KoQF1KpjaLpQjaLqqqF0QmtDsnIAAQkKAAkShQg");
	var mask_7_graphics_23 = new cjs.Graphics().p("EgDdAiYMAPug4bQLsDRF9KjQF+KkjQLtQjRLsqlF9Qm1D3nUAAQj/AAkHhKg");
	var mask_7_graphics_24 = new cjs.Graphics().p("EgDGAifMAPAg4oQLvDHGGKfQGGKfjHLvQjHLvqgGFQm9EDnfAAQj0AAj9hDg");
	var mask_7_graphics_25 = new cjs.Graphics().p("EgCvAilMAOSg40QLyC+GOKaQGPKai+LxQi+LyqbGNQnDEPnsAAQjpAAjyg9g");
	var mask_7_graphics_26 = new cjs.Graphics().p("EgCYAirMANkg4/QL0C0GWKUQGYKWi0LzQi0L0qWGWQnKEbn5AAQjeAAjng3g");
	var mask_7_graphics_27 = new cjs.Graphics().p("EgCAAiwMAM1g5JQL2CqGfKPQGgKQirL2QiqL2qRGfQnREnoEAAQjUAAjbgyg");
	var mask_7_graphics_28 = new cjs.Graphics().p("EgBpAi1MAMHg5TQL4ChGnKKQGoKKihL4QihL5qLGmQnXE0oSAAQjIAAjQgtg");
	var mask_7_graphics_29 = new cjs.Graphics().p("EgBSAi6MALZg5dQL6CYGvKEQGwKGiXL5QiXL6qGGvQneFBoeAAQi9AAjFgog");
	var mask_7_graphics_30 = new cjs.Graphics().p("EgA6Ai/MAKqg5mQL8COG3J/QG4KAiNL7QiOL8qAG3QnkFNorAAQizAAi4gig");
	var mask_7_graphics_31 = new cjs.Graphics().p("EgAjAjDMAJ8g5uQL9CEHAJ5QHAJ7iEL9QiEL+p7G/QnpFao5AAQinAAitgeg");
	var mask_7_graphics_32 = new cjs.Graphics().p("EgALAjHMAJMg51QMAB6HHJzQHIJ2h6L+Qh6L/p1HHQnvFopHAAQibAAihgag");
	var mask_7_graphics_33 = new cjs.Graphics().p("EAALAjLMAIfg59QMBBxHPJtQHQJwhwMAQhxMApvHPQn1F2pUAAQiQAAiWgWg");
	var mask_7_graphics_34 = new cjs.Graphics().p("EAAjAjPMAHwg6EQMCBnHXJoQHYJphnMBQhnMCppHXQn6GEpiAAQiEAAiKgSg");
	var mask_7_graphics_35 = new cjs.Graphics().p("EAA7AjSMAHAg6KQMEBdHeJiQHgJkhdMCQhdMDpjHfQn/GSpwAAQh5AAh9gPg");
	var mask_7_graphics_36 = new cjs.Graphics().p("EABSAjVMAGSg6PQMEBTHnJcQHnJdhTMEQhTMEpdHmQoEGhp/AAQhtAAhxgMg");
	var mask_7_graphics_37 = new cjs.Graphics().p("EABqAjXMAFig6TQMGBJHuJWQHvJXhJMEQhKMGpXHtQoIGwqOAAQhhAAhkgKg");
	var mask_7_graphics_38 = new cjs.Graphics().p("EACCAjaMAEzg6YQMGA/H2JQQH2JQg/MGQhAMGpQH1QoNG/qeAAQhUAAhXgHg");
	var mask_7_graphics_39 = new cjs.Graphics().p("EACaAjcMAEDg6cQMHA2H9JJQH/JKg2MGQg2MHpKH9QoRHOqtAAQhIAAhKgFg");
	var mask_7_graphics_40 = new cjs.Graphics().p("EACyAjdMADUg6eQMHAsIFJCQIFJEgsMHQgsMHpDIEQoWHeq8AAQg8AAg8gEg");
	var mask_7_graphics_41 = new cjs.Graphics().p("EADJAjfMAClg6hQMIAiIMI8QINI9giMHQgjMIo9IMQoZHtrNAAQguAAgwgCg");
	var mask_7_graphics_42 = new cjs.Graphics().p("EADhAjgMAB1g6jQMJAYITI1QIUI3gYMHQgZMJo2ITQodH9rdAAIhEgBg");
	var mask_7_graphics_43 = new cjs.Graphics().p("EAD5AjgMABGg6jQMIAOIaIuQIcIwgPMIQgOMJowIZQogIOrvAAIgogBg");
	var mask_7_graphics_44 = new cjs.Graphics().p("EAERAjhMAAWg6lQMJAFIhInQIiIpgFMIQgEMJopIhQojIesAAAIgNAAg");
	var mask_7_graphics_45 = new cjs.Graphics().p("AEP3EQMJgFIoIhQIpIiAFMHQAGMJoiIoQohIpsJAGg");
	var mask_7_graphics_46 = new cjs.Graphics().p("AD33DQMJgPIvIZQIwIbAPMIQAPMJobIuQoZIxsJAPg");
	var mask_7_graphics_47 = new cjs.Graphics().p("ADg3CQMIgZI2ISQI3IUAYMIQAZMIoUI2QoSI2sIAZg");
	var mask_7_graphics_48 = new cjs.Graphics().p("ADI3BQMIgiI8ILQI+IMAiMHQAjMIoMI9QoLI9sJAjg");
	var mask_7_graphics_49 = new cjs.Graphics().p("ACw2/QMHgsJDIEQJEIFAtMGQAsMIoFJDQoEJEsHAsg");
	var mask_7_graphics_50 = new cjs.Graphics().p("ACT28QMHg4JKH7QJMH8A5MGQA4MGn8JLQn7JMsHA5g");
	var mask_7_graphics_51 = new cjs.Graphics().p("AB224QMGhFJSHyQJUHzBEMFQBFMGnzJSQnyJUsGBEg");
	var mask_7_graphics_52 = new cjs.Graphics().p("ABZ20QMFhQJaHoQJbHqBRMEQBQMFnqJaQnpJbsEBQg");
	var mask_7_graphics_53 = new cjs.Graphics().p("AA92vQMDhcJhHfQJjHhBcMCQBcMDngJiQngJisDBdg");
	var mask_7_graphics_54 = new cjs.Graphics().p("AAg2qQMChoJoHWQJqHXBoMBQBoMCnXJpQnWJqsCBog");
	var mask_7_graphics_55 = new cjs.Graphics().p("AAD2kQMAhzJwHMQJxHOB0L/QB0MAnOJwQnMJxsAB0g");
	var mask_7_graphics_56 = new cjs.Graphics().p("AgZ2dQL+h/J2HCQJ5HEB/L+QCAL+nEJ3QnDJ4r+CAg");
	var mask_7_graphics_57 = new cjs.Graphics().p("Ag12VQL7iMJ+G5QJ/G7CLL7QCML8m7J+Qm4J/r9CLg");
	var mask_7_graphics_58 = new cjs.Graphics().p("AhS2NQL5iXKFGvQKGGwCXL5QCXL6mxKFQmvKGr6CXg");
	var mask_7_graphics_59 = new cjs.Graphics().p("Ahu2EQL3ijKKGlQKNGmCjL3QCjL4mnKLQmlKMr3Cjg");
	var mask_7_graphics_60 = new cjs.Graphics().p("AiK17QL0iuKRGbQKTGcCuL0QCvL1mdKSQmaKSr2Cvg");
	var mask_7_graphics_61 = new cjs.Graphics().p("Aim1xQLxi6KXGRQKaGSC6LyQC6LymTKYQmQKYrzC7g");
	var mask_7_graphics_62 = new cjs.Graphics().p("AjC1mQLujGKdGHQKgGIDFLvQDGLvmIKdQmHKfrvDGg");
	var mask_7_graphics_63 = new cjs.Graphics().p("Aje1bQLrjRKjF9QKmF9DRLsQDRLrl+KkQl8KlrsDRg");
	var mask_7_graphics_64 = new cjs.Graphics().p("Aj61PQLojcKpFyQKrFzDdLpQDcLnlzKqQlyKrrpDcg");
	var mask_7_graphics_65 = new cjs.Graphics().p("AkW1CQLljoKuFnQKxFpDoLlQDoLllpKvQlnKwrlDog");
	var mask_7_graphics_66 = new cjs.Graphics().p("Akx01QLgjzK1FdQK2FeDzLhQD0LhlfK1QlcK2riDzg");
	var mask_7_graphics_67 = new cjs.Graphics().p("AlN0nQLdj+K6FSQK7FTD/LeQD/LdlUK6QlSK7rdD+g");
	var mask_7_graphics_68 = new cjs.Graphics().p("Alo0YQLZkKK/FHQLAFJEKLZQEKLZlJLAQlGLAraEKg");
	var mask_7_graphics_69 = new cjs.Graphics().p("AmD0JQLVkVLDE8QLGE+EVLWQEVLUk+LFQk8LFrVEVg");
	var mask_7_graphics_70 = new cjs.Graphics().p("Amez5QLRkgLIExQLKEzEhLRQEgLQkzLJQkxLKrSEhg");
	var mask_7_graphics_71 = new cjs.Graphics().p("Am4zpQLLkrLOEnQLPEnErLNQErLMkoLNQkmLPrNErg");
	var mask_7_graphics_72 = new cjs.Graphics().p("AnTzYQLHk2LSEbQLTEdE3LIQE2LHkdLSQkbLTrIE3g");
	var mask_7_graphics_73 = new cjs.Graphics().p("AntzGQLClBLWEQQLYERFBLEQFBLCkSLWQkQLYrDFBg");
	var mask_7_graphics_74 = new cjs.Graphics().p("AoHy0QK9lMLaEFQLcEGFMK/QFMK9kHLbQkELbq/FMg");
	var mask_7_graphics_75 = new cjs.Graphics().p("AohyhQK4lXLeD6QLgD7FWK5QFXK4j7LfQj5Lfq6FXg");
	var mask_7_graphics_76 = new cjs.Graphics().p("Ao7yOQKzlhLiDvQLjDvFiK0QFhKzjwLiQjuLjq0Fhg");
	var mask_7_graphics_77 = new cjs.Graphics().p("ApUx6QKtlsLlDkQLnDkFsKuQFtKtjlLmQjjLnquFsg");
	var mask_7_graphics_78 = new cjs.Graphics().p("AptxlQKnl3LpDYQLqDZF3KoQF3KojaLpQjXLqqpF3g");
	var mask_7_graphics_79 = new cjs.Graphics().p("AqGxQQKhmBLsDNQLuDNGBKiQGBKijOLtQjMLtqiGBg");
	var mask_7_graphics_80 = new cjs.Graphics().p("Aqfw6QKdmLLtDBQLxDBGMKdQGLKcjCLvQjALwqdGMg");
	var mask_7_graphics_81 = new cjs.Graphics().p("Aq4wkQKXmVLxC1QLzC2GWKXQGWKVi3LzQi1LzqWGVg");
	var mask_7_graphics_82 = new cjs.Graphics().p("ArQwNQKQmgL0CqQL2CrGgKQQGgKPirL1QipL2qRGgg");
	var mask_7_graphics_83 = new cjs.Graphics().p("Arov1QKKmqL2CeQL5CfGqKJQGpKJifL4QidL4qKGqg");
	var mask_7_graphics_84 = new cjs.Graphics().p("AsAvdQKEm0L4CSQL7CTG0KEQG0KCiUL6QiSL6qDG0g");
	var mask_7_graphics_85 = new cjs.Graphics().p("AsXvFQJ8m9L7CGQL9CIG+J8QG9J8iIL8QiGL9p8G9g");
	var mask_7_graphics_86 = new cjs.Graphics().p("AsuusQJ1nHL8B7QMAB7HHJ2QHIJ1h9L+Qh6L+p1HIg");
	var mask_7_graphics_87 = new cjs.Graphics().p("AtFuSQJunRL+BvQMCBwHQJuQHRJuhwMAQhuMApvHRg");
	var mask_7_graphics_88 = new cjs.Graphics().p("Atct4QJnnaMABjQMDBkHaJnQHbJmhlMCQhiMCpoHbg");
	var mask_7_graphics_89 = new cjs.Graphics().p("AtztdQJgnkMBBYQMFBXHkJgQHjJfhYMEQhXMDpgHkg");
	var mask_7_graphics_90 = new cjs.Graphics().p("AuJtCQJYntMDBMQMGBMHtJYQHtJYhNMEQhLMFpYHtg");
	var mask_7_graphics_91 = new cjs.Graphics().p("AufsmQJRn2MEA/QMGBBH3JQQH2JQhBMGQg/MFpRH3g");
	var mask_7_graphics_92 = new cjs.Graphics().p("Au0sKQJIn/MFA0QMIA0H/JJQH/JJg1MFQgzMHpJH/g");
	var mask_7_graphics_93 = new cjs.Graphics().p("AvKrtQJBoIMFAoQMJAoIIJBQIIJBgpMGQgnMIpBIIg");
	var mask_7_graphics_94 = new cjs.Graphics().p("AvfrQQI5oRMGAcQMJAdIRI4QIRI5geMHQgbMIo5IRg");
	var mask_7_graphics_95 = new cjs.Graphics().p("Av0qyQIxoaMGAQQMJARIaIwQIaIxgSMHQgPMJoxIZg");
	var mask_7_graphics_96 = new cjs.Graphics().p("AwIqUQIooiMGAEQMKAEIiIpQIiIogFMIQgDMIopIig");
	var mask_7_graphics_97 = new cjs.Graphics().p("Awdp1QIgorMHgIQMJgHIrIgQIqIgAHMHQAIMIogIrg");
	var mask_7_graphics_98 = new cjs.Graphics().p("AwxpWQIYozMGgUQMJgTIzIXQIzIYASMHQAVMIoYIzg");
	var mask_7_graphics_99 = new cjs.Graphics().p("AxEo3QIOo7MGgfQMJggI7IPQI7IPAeMHQAhMHoPI7g");
	var mask_7_graphics_100 = new cjs.Graphics().p("AxYoWQIGpEMFgrQMIgrJDIFQJEIGAqMGQAsMIoGJDg");
	var mask_7_graphics_101 = new cjs.Graphics().p("Axrn2QH9pLMEg3QMIg4JLH9QJLH9A2MGQA4MGn9JLg");
	var mask_7_graphics_102 = new cjs.Graphics().p("Ax+nVQH0pTMDhDQMHhDJTH0QJSHzBDMFQBEMFn0JTg");
	var mask_7_graphics_103 = new cjs.Graphics().p("AyQm0QHqpaMChPQMGhPJaHqQJbHrBOMDQBQMFnrJag");
	var mask_7_graphics_104 = new cjs.Graphics().p("AyjmSQHipiMBhbQMEhbJiHiQJiHhBZMCQBcMDnhJig");
	var mask_7_graphics_105 = new cjs.Graphics().p("Ay0lwQHYppL/hnQMDhmJpHXQJpHYBmMBQBoMBnYJqg");
	var mask_7_graphics_106 = new cjs.Graphics().p("AzGlNQHOpxL+hyQMBhzJxHPQJwHOByL/QBzMAnOJwg");
	var mask_7_graphics_107 = new cjs.Graphics().p("AzXkqQHFp4L9h+QL+h+J3HEQJ4HFB9L9QB/L+nEJ3g");
	var mask_7_graphics_108 = new cjs.Graphics().p("AzokHQG7p+L7iKQL8iKJ/G7QJ+G6CJL8QCLL7m7J/g");
	var mask_7_graphics_109 = new cjs.Graphics().p("Az4jjQGxqFL5iWQL5iWKGGxQKFGxCUL5QCXL6mxKFg");
	var mask_7_graphics_110 = new cjs.Graphics().p("A0Ii/QGnqML2ihQL4iiKLGnQKMGoChL2QCiL3mnKMg");
	var mask_7_graphics_111 = new cjs.Graphics().p("A0YiaQGdqTL0isQL1iuKSGdQKSGdCsL0QCuL1mdKSg");
	var mask_7_graphics_112 = new cjs.Graphics().p("A0nh2QGTqYLxi5QLyi5KYGTQKZGTC3LxQC6LymTKZg");
	var mask_7_graphics_113 = new cjs.Graphics().p("A02hQQGJqfLujEQLvjFKeGJQKfGJDDLuQDGLvmJKeg");
	var mask_7_graphics_114 = new cjs.Graphics().p("A1EgrQF+qkLrjQQLsjQKkF+QKlF+DPLsQDRLrl/Klg");
	var mask_7_graphics_115 = new cjs.Graphics().p("A1SgFQFzqqLojbQLpjcKqF0QKqF0DbLoQDcLol0Kqg");
	var mask_7_graphics_116 = new cjs.Graphics().p("A1gAgQFpqvLljmQLljnKwFpQKwFpDlLlQDoLllpKwg");
	var mask_7_graphics_117 = new cjs.Graphics().p("A1tBHQFeq1LhjyQLijyK1FfQK1FeDxLhQD0LhlfK2g");
	var mask_7_graphics_118 = new cjs.Graphics().p("A16BtQFUq5Ldj9QLej+K6FUQK7FUD8LdQD/LdlUK7g");
	var mask_7_graphics_119 = new cjs.Graphics().p("A2HCUQFKq+LYkJQLakJLAFJQLAFJEILaQEJLZlJLAg");
	var mask_7_graphics_120 = new cjs.Graphics().p("A2TC8QE/rELUkUQLWkULFE+QLFE/ETLVQEULVk+LFg");
	var mask_7_graphics_121 = new cjs.Graphics().p("A2eDjQEzrILRkfQLRkfLKEzQLJEzEeLRQEgLRkzLKg");
	var mask_7_graphics_122 = new cjs.Graphics().p("A2pELQEorNLMkqQLNkqLOEoQLOEpEpLMQErLMkoLPg");
	var mask_7_graphics_123 = new cjs.Graphics().p("A20EzQEdrRLIk1QLIk2LSEeQLTEdE0LIQE2LHkdLTg");
	var mask_7_graphics_124 = new cjs.Graphics().p("A2+FcQESrWLClAQLElALXESQLXESE/LDQFBLDkTLXg");
	var mask_7_graphics_125 = new cjs.Graphics().p("A3IGEQEHraK9lKQK/lMLbEHQLbEHFKK+QFLK+kHLbg");
	var mask_7_graphics_126 = new cjs.Graphics().p("A3SGtQD8reK4lVQK6lWLfD8QLfD7FUK5QFXK5j8Lfg");
	var mask_7_graphics_127 = new cjs.Graphics().p("A3bHWQDxriKzlgQK0lgLiDwQLjDwFgK0QFhKzjxLjg");
	var mask_7_graphics_128 = new cjs.Graphics().p("A3jH/QDlrlKtlrQKvlrLmDlQLnDlFpKuQFsKujlLmg");
	var mask_7_graphics_129 = new cjs.Graphics().p("A3rIpQDZrpKol1QKpl2LqDaQLqDZF0KoQF2KpjZLqg");
	var mask_7_graphics_130 = new cjs.Graphics().p("A3zJSQDOrsKil/QKjmALtDOQLtDOF/KiQGBKjjOLtg");
	var mask_7_graphics_131 = new cjs.Graphics().p("A36J8QDCrvKcmKQKdmKLwDCQLxDDGJKcQGLKdjDLwg");
	var mask_7_graphics_132 = new cjs.Graphics().p("A4BKmQC3ryKWmUQKYmVLyC3QLzC3GTKXQGVKWi2Lzg");
	var mask_7_graphics_133 = new cjs.Graphics().p("A4HLQQCrr1KQmeQKRmfL1CsQL2CrGdKQQGgKQisL2g");
	var mask_7_graphics_134 = new cjs.Graphics().p("A4NL6QCfr4KKmnQKKmpL4CgQL4CfGoKKQGpKJifL5g");
	var mask_7_graphics_135 = new cjs.Graphics().p("A4TMlQCUr7KDmxQKEmzL6CUQL7CUGxKDQG0KDiUL7g");
	var mask_7_graphics_136 = new cjs.Graphics().p("A4YNPQCIr9J8m6QJ+m9L8CIQL9CIG7J9QG9J8iIL9g");
	var mask_7_graphics_137 = new cjs.Graphics().p("A4cN6QB8r/J1nFQJ3nGL+B8QL/B8HFJ2QHHJ1h9L/g");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_7_graphics_9,x:216.2,y:227.4}).wait(1).to({graphics:mask_7_graphics_10,x:216.2,y:227.4}).wait(1).to({graphics:mask_7_graphics_11,x:216.2,y:227.4}).wait(1).to({graphics:mask_7_graphics_12,x:216.2,y:227.4}).wait(1).to({graphics:mask_7_graphics_13,x:216.2,y:227.4}).wait(1).to({graphics:mask_7_graphics_14,x:216.2,y:227.4}).wait(1).to({graphics:mask_7_graphics_15,x:216.2,y:227.4}).wait(1).to({graphics:mask_7_graphics_16,x:216.2,y:227.4}).wait(1).to({graphics:mask_7_graphics_17,x:216.2,y:227.4}).wait(1).to({graphics:mask_7_graphics_18,x:216.2,y:227.4}).wait(1).to({graphics:mask_7_graphics_19,x:216.2,y:227.4}).wait(1).to({graphics:mask_7_graphics_20,x:216.2,y:227.4}).wait(1).to({graphics:mask_7_graphics_21,x:216.1,y:227.4}).wait(1).to({graphics:mask_7_graphics_22,x:216.1,y:227.4}).wait(1).to({graphics:mask_7_graphics_23,x:216.1,y:227.4}).wait(1).to({graphics:mask_7_graphics_24,x:216.1,y:227.4}).wait(1).to({graphics:mask_7_graphics_25,x:216.1,y:227.4}).wait(1).to({graphics:mask_7_graphics_26,x:216.1,y:227.4}).wait(1).to({graphics:mask_7_graphics_27,x:216.1,y:227.4}).wait(1).to({graphics:mask_7_graphics_28,x:216.1,y:227.4}).wait(1).to({graphics:mask_7_graphics_29,x:216,y:227.4}).wait(1).to({graphics:mask_7_graphics_30,x:216,y:227.3}).wait(1).to({graphics:mask_7_graphics_31,x:216,y:227.3}).wait(1).to({graphics:mask_7_graphics_32,x:216,y:227.3}).wait(1).to({graphics:mask_7_graphics_33,x:216,y:227.3}).wait(1).to({graphics:mask_7_graphics_34,x:216,y:227.3}).wait(1).to({graphics:mask_7_graphics_35,x:215.9,y:227.3}).wait(1).to({graphics:mask_7_graphics_36,x:215.9,y:227.3}).wait(1).to({graphics:mask_7_graphics_37,x:215.9,y:227.3}).wait(1).to({graphics:mask_7_graphics_38,x:215.9,y:227.3}).wait(1).to({graphics:mask_7_graphics_39,x:215.9,y:227.3}).wait(1).to({graphics:mask_7_graphics_40,x:215.9,y:227.3}).wait(1).to({graphics:mask_7_graphics_41,x:215.9,y:227.3}).wait(1).to({graphics:mask_7_graphics_42,x:215.9,y:227.3}).wait(1).to({graphics:mask_7_graphics_43,x:215.9,y:227.3}).wait(1).to({graphics:mask_7_graphics_44,x:215.8,y:227.3}).wait(1).to({graphics:mask_7_graphics_45,x:215.8,y:227.3}).wait(1).to({graphics:mask_7_graphics_46,x:215.8,y:227.3}).wait(1).to({graphics:mask_7_graphics_47,x:215.9,y:227.2}).wait(1).to({graphics:mask_7_graphics_48,x:215.9,y:227.2}).wait(1).to({graphics:mask_7_graphics_49,x:215.8,y:227.1}).wait(1).to({graphics:mask_7_graphics_50,x:215.9,y:227.1}).wait(1).to({graphics:mask_7_graphics_51,x:215.9,y:226.9}).wait(1).to({graphics:mask_7_graphics_52,x:215.9,y:226.8}).wait(1).to({graphics:mask_7_graphics_53,x:215.9,y:226.7}).wait(1).to({graphics:mask_7_graphics_54,x:215.9,y:226.5}).wait(1).to({graphics:mask_7_graphics_55,x:215.9,y:226.3}).wait(1).to({graphics:mask_7_graphics_56,x:216,y:226.1}).wait(1).to({graphics:mask_7_graphics_57,x:216,y:225.8}).wait(1).to({graphics:mask_7_graphics_58,x:216,y:225.6}).wait(1).to({graphics:mask_7_graphics_59,x:216,y:225.3}).wait(1).to({graphics:mask_7_graphics_60,x:216,y:225}).wait(1).to({graphics:mask_7_graphics_61,x:216,y:224.7}).wait(1).to({graphics:mask_7_graphics_62,x:216.1,y:224.3}).wait(1).to({graphics:mask_7_graphics_63,x:216.1,y:223.9}).wait(1).to({graphics:mask_7_graphics_64,x:216.1,y:223.5}).wait(1).to({graphics:mask_7_graphics_65,x:216.1,y:223.1}).wait(1).to({graphics:mask_7_graphics_66,x:216.1,y:222.7}).wait(1).to({graphics:mask_7_graphics_67,x:216.1,y:222.2}).wait(1).to({graphics:mask_7_graphics_68,x:216.1,y:221.8}).wait(1).to({graphics:mask_7_graphics_69,x:216.1,y:221.3}).wait(1).to({graphics:mask_7_graphics_70,x:216.1,y:220.8}).wait(1).to({graphics:mask_7_graphics_71,x:216.1,y:220.2}).wait(1).to({graphics:mask_7_graphics_72,x:216.1,y:219.7}).wait(1).to({graphics:mask_7_graphics_73,x:216.1,y:219.1}).wait(1).to({graphics:mask_7_graphics_74,x:216.1,y:218.5}).wait(1).to({graphics:mask_7_graphics_75,x:216.1,y:217.9}).wait(1).to({graphics:mask_7_graphics_76,x:216.1,y:217.2}).wait(1).to({graphics:mask_7_graphics_77,x:216.1,y:216.6}).wait(1).to({graphics:mask_7_graphics_78,x:216.1,y:215.9}).wait(1).to({graphics:mask_7_graphics_79,x:216.1,y:215.2}).wait(1).to({graphics:mask_7_graphics_80,x:216.1,y:214.5}).wait(1).to({graphics:mask_7_graphics_81,x:216.1,y:213.7}).wait(1).to({graphics:mask_7_graphics_82,x:216.1,y:213}).wait(1).to({graphics:mask_7_graphics_83,x:216,y:212.2}).wait(1).to({graphics:mask_7_graphics_84,x:216,y:211.4}).wait(1).to({graphics:mask_7_graphics_85,x:216,y:210.6}).wait(1).to({graphics:mask_7_graphics_86,x:216,y:209.8}).wait(1).to({graphics:mask_7_graphics_87,x:216,y:208.9}).wait(1).to({graphics:mask_7_graphics_88,x:216,y:208.1}).wait(1).to({graphics:mask_7_graphics_89,x:215.9,y:207.2}).wait(1).to({graphics:mask_7_graphics_90,x:215.9,y:206.3}).wait(1).to({graphics:mask_7_graphics_91,x:215.9,y:205.4}).wait(1).to({graphics:mask_7_graphics_92,x:215.9,y:204.4}).wait(1).to({graphics:mask_7_graphics_93,x:215.9,y:203.5}).wait(1).to({graphics:mask_7_graphics_94,x:215.9,y:202.5}).wait(1).to({graphics:mask_7_graphics_95,x:215.9,y:201.5}).wait(1).to({graphics:mask_7_graphics_96,x:215.9,y:200.5}).wait(1).to({graphics:mask_7_graphics_97,x:215.9,y:199.5}).wait(1).to({graphics:mask_7_graphics_98,x:215.9,y:198.5}).wait(1).to({graphics:mask_7_graphics_99,x:215.9,y:197.4}).wait(1).to({graphics:mask_7_graphics_100,x:215.9,y:196.4}).wait(1).to({graphics:mask_7_graphics_101,x:216,y:195.3}).wait(1).to({graphics:mask_7_graphics_102,x:216,y:194.2}).wait(1).to({graphics:mask_7_graphics_103,x:216,y:193.1}).wait(1).to({graphics:mask_7_graphics_104,x:216,y:192}).wait(1).to({graphics:mask_7_graphics_105,x:216,y:190.9}).wait(1).to({graphics:mask_7_graphics_106,x:216.1,y:189.7}).wait(1).to({graphics:mask_7_graphics_107,x:216.1,y:188.5}).wait(1).to({graphics:mask_7_graphics_108,x:216.1,y:187.4}).wait(1).to({graphics:mask_7_graphics_109,x:216.1,y:186.2}).wait(1).to({graphics:mask_7_graphics_110,x:216.2,y:185}).wait(1).to({graphics:mask_7_graphics_111,x:216.2,y:183.8}).wait(1).to({graphics:mask_7_graphics_112,x:216.2,y:182.6}).wait(1).to({graphics:mask_7_graphics_113,x:216.2,y:181.3}).wait(1).to({graphics:mask_7_graphics_114,x:216.3,y:180.1}).wait(1).to({graphics:mask_7_graphics_115,x:216.3,y:178.8}).wait(1).to({graphics:mask_7_graphics_116,x:216.3,y:177.6}).wait(1).to({graphics:mask_7_graphics_117,x:216.3,y:176.3}).wait(1).to({graphics:mask_7_graphics_118,x:216.3,y:175}).wait(1).to({graphics:mask_7_graphics_119,x:216.3,y:173.7}).wait(1).to({graphics:mask_7_graphics_120,x:216.3,y:172.4}).wait(1).to({graphics:mask_7_graphics_121,x:216.4,y:171.1}).wait(1).to({graphics:mask_7_graphics_122,x:216.4,y:169.8}).wait(1).to({graphics:mask_7_graphics_123,x:216.4,y:168.4}).wait(1).to({graphics:mask_7_graphics_124,x:216.4,y:167.1}).wait(1).to({graphics:mask_7_graphics_125,x:216.4,y:165.7}).wait(1).to({graphics:mask_7_graphics_126,x:216.4,y:164.4}).wait(1).to({graphics:mask_7_graphics_127,x:216.4,y:163}).wait(1).to({graphics:mask_7_graphics_128,x:216.4,y:161.6}).wait(1).to({graphics:mask_7_graphics_129,x:216.4,y:160.3}).wait(1).to({graphics:mask_7_graphics_130,x:216.4,y:158.9}).wait(1).to({graphics:mask_7_graphics_131,x:216.4,y:157.5}).wait(1).to({graphics:mask_7_graphics_132,x:216.3,y:156.1}).wait(1).to({graphics:mask_7_graphics_133,x:216.3,y:154.7}).wait(1).to({graphics:mask_7_graphics_134,x:216.3,y:153.3}).wait(1).to({graphics:mask_7_graphics_135,x:216.3,y:151.9}).wait(1).to({graphics:mask_7_graphics_136,x:216.3,y:150.5}).wait(1).to({graphics:mask_7_graphics_137,x:216.3,y:149}).wait(609));

	// Layer 2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(20,1,1).p("AOjrDQnmhSnYC3QnZC3j+GpQj/GrBzCwQBHBuB9AS");
	this.shape_8.setTransform(218.9,200.8);
	this.shape_8._off = true;

	var maskedShapeInstanceList = [this.shape_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(9).to({_off:false},0).wait(737));

	// Letter
	this.instance_5 = new lib.Symbol1("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(275,275);
	this.instance_5.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(746));

	// Background
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_9.setTransform(275,275,3.373,2.543);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_10.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9}]}).wait(746));

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