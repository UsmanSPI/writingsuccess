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


(lib.K = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A8NZUQgtgwAAg7QAAhUP9+aQBujYAAjKQAAjZh3h0QhzhujaAAQjPAAivBfQh6BihNAAQh6AAAAh0QAAhZBThKQBIhBB8gwQDfhZDJAAQCqAACIAyQCJAzBiBfQBiBfAzCGQA1CIAACqQAAC9hQDWIivFwQCyA/BrDAQFEiLFfqWIDflMQCGi2CAh2QCaiSCjhKQC4hWDOAAQCXAAAACUQAABuiDAeIjbAdQhvAehzBXIjHDDQiVCpijEXQkxH5iYCuQiTCnjfBTQAyEdAAGCQABC7AXA7QAkBQBtAAIDtgjQCqgyCQhOQDKhrCviCQFNkDE4lYQCgi1CMAAQBNAAAABHQAABNiDCpIilDCIiSCdQnMGUkCCaQjRB6jKBBQjeBHjgAAQihAAhiiUQhNh6gnjhQgqkMgJnMIi1ASQh8AAhmgpIpaSUQgpBWhXAAQg2AAgugvgAsxC8IB0gdQg4gtgeAAQgeAAAABKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-187.5,-166.7,375,333.5);


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


(lib.ar6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-64.4,22.3,1,1,-3.5,0,0,-0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:-139.2,guide:{path:[-64.4,22.5,-57.7,84.2,-27.6,58.2,-16,48.2,-6.1,36.9]}},56).to({scaleX:1,scaleY:1,rotation:-151.9,guide:{path:[-5.9,36.9,10.2,18.6,22.2,-3.4,41.7,-38.9,49.4,-50.5]}},63).wait(1));

	// Layer 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_63 = new cjs.Graphics().p("AkwDIIAAh4IJhAAIAAB4g");
	var mask_graphics_64 = new cjs.Graphics().p("AkwBEIAAiHIJhAAIAACHg");
	var mask_graphics_65 = new cjs.Graphics().p("AkwBMIAAiXIJhAAIAACXg");
	var mask_graphics_66 = new cjs.Graphics().p("AkwBTIAAilIJhAAIAAClg");
	var mask_graphics_67 = new cjs.Graphics().p("AkwBbIAAi1IJhAAIAAC1g");
	var mask_graphics_68 = new cjs.Graphics().p("AkwBjIAAjFIJhAAIAADFg");
	var mask_graphics_69 = new cjs.Graphics().p("AkwBrIAAjVIJhAAIAADVg");
	var mask_graphics_70 = new cjs.Graphics().p("AkwBzIAAjlIJhAAIAADlg");
	var mask_graphics_71 = new cjs.Graphics().p("AkwB6IAAjzIJhAAIAADzg");
	var mask_graphics_72 = new cjs.Graphics().p("AkwCCIAAkDIJhAAIAAEDg");
	var mask_graphics_73 = new cjs.Graphics().p("AkwCKIAAkTIJhAAIAAETg");
	var mask_graphics_74 = new cjs.Graphics().p("AkwCSIAAkiIJhAAIAAEig");
	var mask_graphics_75 = new cjs.Graphics().p("AkwCZIAAkxIJhAAIAAExg");
	var mask_graphics_76 = new cjs.Graphics().p("AkwChIAAlBIJhAAIAAFBg");
	var mask_graphics_77 = new cjs.Graphics().p("AkwCpIAAlRIJhAAIAAFRg");
	var mask_graphics_78 = new cjs.Graphics().p("AkwCxIAAlgIJhAAIAAFgg");
	var mask_graphics_79 = new cjs.Graphics().p("AkwC4IAAlvIJhAAIAAFvg");
	var mask_graphics_80 = new cjs.Graphics().p("AkwDAIAAl/IJhAAIAAF/g");
	var mask_graphics_81 = new cjs.Graphics().p("AkwDIIAAmPIJhAAIAAGPg");
	var mask_graphics_82 = new cjs.Graphics().p("AkwDQIAAmfIJhAAIAAGfg");
	var mask_graphics_83 = new cjs.Graphics().p("AkwDYIAAmvIJhAAIAAGvg");
	var mask_graphics_84 = new cjs.Graphics().p("AkwDfIAAm9IJhAAIAAG9g");
	var mask_graphics_85 = new cjs.Graphics().p("AkwDnIAAnNIJhAAIAAHNg");
	var mask_graphics_86 = new cjs.Graphics().p("AkwDvIAAndIJhAAIAAHdg");
	var mask_graphics_87 = new cjs.Graphics().p("AkwD3IAAntIJhAAIAAHtg");
	var mask_graphics_88 = new cjs.Graphics().p("AkwD+IAAn7IJhAAIAAH7g");
	var mask_graphics_89 = new cjs.Graphics().p("AkwEGIAAoLIJhAAIAAILg");
	var mask_graphics_90 = new cjs.Graphics().p("AkwEOIAAobIJhAAIAAIbg");
	var mask_graphics_91 = new cjs.Graphics().p("AkwEWIAAorIJhAAIAAIrg");
	var mask_graphics_92 = new cjs.Graphics().p("AkwEdIAAo5IJhAAIAAI5g");
	var mask_graphics_93 = new cjs.Graphics().p("AkwElIAApJIJhAAIAAJJg");
	var mask_graphics_94 = new cjs.Graphics().p("AkwEtIAApZIJhAAIAAJZg");
	var mask_graphics_95 = new cjs.Graphics().p("AkwE0IAApnIJhAAIAAJng");
	var mask_graphics_96 = new cjs.Graphics().p("AkwE8IAAp3IJhAAIAAJ3g");
	var mask_graphics_97 = new cjs.Graphics().p("AkwFEIAAqHIJhAAIAAKHg");
	var mask_graphics_98 = new cjs.Graphics().p("AkwFMIAAqXIJhAAIAAKXg");
	var mask_graphics_99 = new cjs.Graphics().p("AkwFTIAAqlIJhAAIAAKlg");
	var mask_graphics_100 = new cjs.Graphics().p("AkwFbIAAq1IJhAAIAAK1g");
	var mask_graphics_101 = new cjs.Graphics().p("AkwFjIAArFIJhAAIAALFg");
	var mask_graphics_102 = new cjs.Graphics().p("AkwFrIAArVIJhAAIAALVg");
	var mask_graphics_103 = new cjs.Graphics().p("AkwFzIAArlIJhAAIAALlg");
	var mask_graphics_104 = new cjs.Graphics().p("AkwF6IAAr0IJhAAIAAL0g");
	var mask_graphics_105 = new cjs.Graphics().p("AkwGCIAAsDIJhAAIAAMDg");
	var mask_graphics_106 = new cjs.Graphics().p("AkwGKIAAsTIJhAAIAAMTg");
	var mask_graphics_107 = new cjs.Graphics().p("AkwGSIAAsjIJhAAIAAMjg");
	var mask_graphics_108 = new cjs.Graphics().p("AkwGZIAAsyIJhAAIAAMyg");
	var mask_graphics_109 = new cjs.Graphics().p("AkwGhIAAtBIJhAAIAANBg");
	var mask_graphics_110 = new cjs.Graphics().p("AkwGpIAAtRIJhAAIAANRg");
	var mask_graphics_111 = new cjs.Graphics().p("AkwGxIAAthIJhAAIAANhg");
	var mask_graphics_112 = new cjs.Graphics().p("AkwG4IAAtwIJhAAIAANwg");
	var mask_graphics_113 = new cjs.Graphics().p("AkwHAIAAt/IJhAAIAAN/g");
	var mask_graphics_114 = new cjs.Graphics().p("AkwHIIAAuPIJhAAIAAOPg");
	var mask_graphics_115 = new cjs.Graphics().p("AkwHQIAAufIJhAAIAAOfg");
	var mask_graphics_116 = new cjs.Graphics().p("AkwHYIAAuvIJhAAIAAOvg");
	var mask_graphics_117 = new cjs.Graphics().p("AkwHfIAAu9IJhAAIAAO9g");
	var mask_graphics_118 = new cjs.Graphics().p("AkwHnIAAvNIJhAAIAAPNg");
	var mask_graphics_119 = new cjs.Graphics().p("AkwHvIAAvdIJhAAIAAPdg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(63).to({graphics:mask_graphics_63,x:28.3,y:20}).wait(1).to({graphics:mask_graphics_64,x:28.3,y:33.2}).wait(1).to({graphics:mask_graphics_65,x:28.3,y:32.4}).wait(1).to({graphics:mask_graphics_66,x:28.3,y:31.6}).wait(1).to({graphics:mask_graphics_67,x:28.3,y:30.9}).wait(1).to({graphics:mask_graphics_68,x:28.3,y:30.1}).wait(1).to({graphics:mask_graphics_69,x:28.3,y:29.3}).wait(1).to({graphics:mask_graphics_70,x:28.3,y:28.5}).wait(1).to({graphics:mask_graphics_71,x:28.3,y:27.7}).wait(1).to({graphics:mask_graphics_72,x:28.3,y:27}).wait(1).to({graphics:mask_graphics_73,x:28.3,y:26.2}).wait(1).to({graphics:mask_graphics_74,x:28.3,y:25.4}).wait(1).to({graphics:mask_graphics_75,x:28.3,y:24.6}).wait(1).to({graphics:mask_graphics_76,x:28.3,y:23.9}).wait(1).to({graphics:mask_graphics_77,x:28.3,y:23.1}).wait(1).to({graphics:mask_graphics_78,x:28.3,y:22.3}).wait(1).to({graphics:mask_graphics_79,x:28.3,y:21.5}).wait(1).to({graphics:mask_graphics_80,x:28.3,y:20.7}).wait(1).to({graphics:mask_graphics_81,x:28.3,y:20}).wait(1).to({graphics:mask_graphics_82,x:28.3,y:19.2}).wait(1).to({graphics:mask_graphics_83,x:28.3,y:18.4}).wait(1).to({graphics:mask_graphics_84,x:28.3,y:17.6}).wait(1).to({graphics:mask_graphics_85,x:28.3,y:16.9}).wait(1).to({graphics:mask_graphics_86,x:28.3,y:16.1}).wait(1).to({graphics:mask_graphics_87,x:28.3,y:15.3}).wait(1).to({graphics:mask_graphics_88,x:28.3,y:14.5}).wait(1).to({graphics:mask_graphics_89,x:28.3,y:13.8}).wait(1).to({graphics:mask_graphics_90,x:28.3,y:13}).wait(1).to({graphics:mask_graphics_91,x:28.3,y:12.2}).wait(1).to({graphics:mask_graphics_92,x:28.3,y:11.4}).wait(1).to({graphics:mask_graphics_93,x:28.3,y:10.6}).wait(1).to({graphics:mask_graphics_94,x:28.3,y:9.8}).wait(1).to({graphics:mask_graphics_95,x:28.3,y:9.1}).wait(1).to({graphics:mask_graphics_96,x:28.3,y:8.3}).wait(1).to({graphics:mask_graphics_97,x:28.3,y:7.5}).wait(1).to({graphics:mask_graphics_98,x:28.3,y:6.7}).wait(1).to({graphics:mask_graphics_99,x:28.3,y:6}).wait(1).to({graphics:mask_graphics_100,x:28.3,y:5.2}).wait(1).to({graphics:mask_graphics_101,x:28.3,y:4.4}).wait(1).to({graphics:mask_graphics_102,x:28.3,y:3.6}).wait(1).to({graphics:mask_graphics_103,x:28.3,y:2.8}).wait(1).to({graphics:mask_graphics_104,x:28.3,y:2.1}).wait(1).to({graphics:mask_graphics_105,x:28.3,y:1.3}).wait(1).to({graphics:mask_graphics_106,x:28.3,y:0.5}).wait(1).to({graphics:mask_graphics_107,x:28.3,y:-0.3}).wait(1).to({graphics:mask_graphics_108,x:28.3,y:-1}).wait(1).to({graphics:mask_graphics_109,x:28.3,y:-1.8}).wait(1).to({graphics:mask_graphics_110,x:28.3,y:-2.6}).wait(1).to({graphics:mask_graphics_111,x:28.3,y:-3.4}).wait(1).to({graphics:mask_graphics_112,x:28.3,y:-4.1}).wait(1).to({graphics:mask_graphics_113,x:28.3,y:-4.9}).wait(1).to({graphics:mask_graphics_114,x:28.3,y:-5.7}).wait(1).to({graphics:mask_graphics_115,x:28.3,y:-6.5}).wait(1).to({graphics:mask_graphics_116,x:28.3,y:-7.3}).wait(1).to({graphics:mask_graphics_117,x:28.3,y:-8}).wait(1).to({graphics:mask_graphics_118,x:28.3,y:-8.8}).wait(1).to({graphics:mask_graphics_119,x:28.3,y:-9.6}).wait(1));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("Ao5CgQBBJlEukEQEtkFDDliQDElkBQiD");
	this.shape.setTransform(-7.3,6.9);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(63).to({_off:false},0).wait(57));

	// Layer 3 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AuxipQEPmNHYhaQHXhaGNEPQGFEJBeHJMgjmAGwQhQnMEImEg");
	var mask_1_graphics_1 = new cjs.Graphics().p("AvHiXQD9mZHUhuQHShvGZD9QGQD3ByHFMgjQAIVQhlnJD3mPg");
	var mask_1_graphics_2 = new cjs.Graphics().p("AvaiEQDrmjHOiDQHNiDGkDqQGbDmCGG/Mgi3AJ4Qh5nEDlmag");
	var mask_1_graphics_3 = new cjs.Graphics().p("AvqhvQDYmtHIiXQHHiYGtDXQGlDUCaG4MgiYALbQiNm+DSmkg");
	var mask_1_graphics_4 = new cjs.Graphics().p("Av3hYQDFm3HBirQHAisG2DEQGuDACtGzMgh2AM6Qigm3C/msg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AwAhBQCxm/G4i/QG4i/G/CwQG2CtDAGrMghPAOZQi0mvCtm1g");
	var mask_1_graphics_6 = new cjs.Graphics().p("AwHgoQCdnGGwjTQGwjSHFCcQG9CZDTGiMggkAP3QjHmoCZm7g");
	var mask_1_graphics_7 = new cjs.Graphics().p("AwLgPQCJnMGmjmQGmjlHMCIQHDCGDlGXI/1RTQjZmeCFnDg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AwLALQB0nRGbj4QGcj4HRB0QHJBxD3GNI/CSsQjrmUBxnJg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AwJAnQBgnWGQkKQGQkJHWBeQHNBdEIGCI+KUDQj9mKBcnNg");
	var mask_1_graphics_10 = new cjs.Graphics().p("AwDBEQBKnZGEkcQGEkbHaBKQHRBIEZF2I9QVXQkOl+BInRg");
	var mask_1_graphics_11 = new cjs.Graphics().p("Av6BiQA1ncF3ktQF3ksHcA1QHUA0EqFpI8SWoQkelxAznUg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AvuCBQAgneFpk9QFqk8HeAfQHVAfE6FbI7QX4QkvllAfnVg");
	var mask_1_graphics_13 = new cjs.Graphics().p("AvfChQALnfFblMQFblNHfALQHXAKFIFNI6KZDQk+lXAJnWg");
	var mask_1_graphics_14 = new cjs.Graphics().p("AvMDCQgLnfFMlcQFMlbHfgLQHXgKFWE+I5BaLQlNlIgLnWg");
	var mask_1_graphics_15 = new cjs.Graphics().p("Au2DkQggneE8lqQE8lqHeggQHWgfFkEuI31bRQlbk5ggnVg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AudEGQg2ncEsl3QEsl4Hcg1QHUg0FxEeI2mcTQlpkpg0nUg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AuCEqQhKnaEbmEQEbmEHZhLQHRhJF+EOI1VdRQl1kZhKnQg");
	var mask_1_graphics_18 = new cjs.Graphics().p("AtjFOQhfnWEJmRQEKmQHVhfQHOheGJD9I0AeMQmCkIhenNg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AtBFyQh0nRD3mcQD4mcHQh0QHJhyGUDrIypfDQmNj3hynIg");
	var mask_1_graphics_20 = new cjs.Graphics().p("AsdGXQiInMDlmmQDkmmHNiJQHCiGGeDZIxQf1QmYjliGnCg");
	var mask_1_graphics_21 = new cjs.Graphics().p("Ar2G8QidnFDSmwQDSmwHGidQG8iaGnDGMgP1AgkQmhjSiam8g");
	var mask_1_graphics_22 = new cjs.Graphics().p("ArNHhQiwm/C+m4QC/m5G+iwQG1iuGwCzMgOYAhQQmqjAium1g");
	var mask_1_graphics_23 = new cjs.Graphics().p("AqhIGQjEm2CrnAQCrnBG2jEQGsjBG4CgMgM4Ah2QmzitjBmtg");
	var mask_1_graphics_24 = new cjs.Graphics().p("ApyIrQjYmtCXnHQCXnIGtjYQGjjTG+CMMgLYAiZQm5iajTmkg");
	var mask_1_graphics_25 = new cjs.Graphics().p("ApLJRQjqmkCDnNQCCnOGjjrQGajlHDB4MgJ2Ai2Qm/iFjmmag");
	var mask_1_graphics_26 = new cjs.Graphics().p("AowJ2Qj9mZBunSQBunUGYj9QGPj3HJBkMgITAjQQnEhyj4mPg");
	var mask_1_graphics_27 = new cjs.Graphics().p("AoZKVQkMmPBdnWQBcnYGPkLQGFkHHMBUMgG+AjiQnIhhkHmGg");
	var mask_1_graphics_28 = new cjs.Graphics().p("AoBK0QkamFBLnZQBLnbGEkaQF8kVHOBDMgFpAjwQnMhPkVl8g");
	var mask_1_graphics_29 = new cjs.Graphics().p("AnnLSQkol6A5nbQA5ndF6kpQFxkiHQAxMgEUAj8QnOg+kjlyg");
	var mask_1_graphics_30 = new cjs.Graphics().p("AnMLxQk2lvAondQAnnfFuk2QFmkwHSAgMgC/AkEQnQgtkwlmg");
	var mask_1_graphics_31 = new cjs.Graphics().p("AmwMPQlDljAWneQAVngFjlEQFbk9HSAPMgBpAkKQnSgck9lbg");
	var mask_1_graphics_32 = new cjs.Graphics().p("AmSMtQlRlXAEnfQAEngFWlQQFQlKHSgDMgATAkNQnSgLlKlPg");
	var mask_1_graphics_33 = new cjs.Graphics().p("Al0NKQlclKgOnfQgOnfFJldQFDlWHSgUMABDAkLIgTAAQnGAAlQk8g");
	var mask_1_graphics_34 = new cjs.Graphics().p("AlUNmQlok9ggnfQgfneE8lpQE2lhHQgmMACZAkHQgiACghAAQmoAAlJkfg");
	var mask_1_graphics_35 = new cjs.Graphics().p("AkzN/Ql0kvgxneQgxncEul0QEpltHPg3MADtAkAQg4AFg4AAQmNAAlAkEg");
	var mask_1_graphics_36 = new cjs.Graphics().p("AkROWQl/khhDnbQhDnaEhmAQEbl3HMhIMAFDAj1QhPAKhNAAQlzAAk3jqg");
	var mask_1_graphics_37 = new cjs.Graphics().p("AjuOrQmJkShVnZQhUnXESmKQENmCHJhYMAGYAjnQhlAQhiAAQlbAAksjRg");
	var mask_1_graphics_38 = new cjs.Graphics().p("AjKO+QmTkEhmnVQhmnTEDmUQD/mLHFhqMAHsAjWQh6AZh2AAQlDAAkhi6g");
	var mask_1_graphics_39 = new cjs.Graphics().p("AilPPQmdj1h3nQQh3nQD0mdQDvmUHCh7MAI/AjDQiOAiiKAAQktAAkUikg");
	var mask_1_graphics_40 = new cjs.Graphics().p("AiAPeQmljliInMQiJnLDlmmQDgmdG9iLMAKSAisQiiAtidAAQkXAAkIiPg");
	var mask_1_graphics_41 = new cjs.Graphics().p("AhsPrQmujWiZnGQiZnGDUmtQDRmmG3ibMALkAiRQi0A6ixAAQkCAAj5h7g");
	var mask_1_graphics_42 = new cjs.Graphics().p("AhaP1Qm1jFiqnBQiqm/DFm1QDBmtGyisMAM0Ah1QjHBIjEAAQjuAAjqhqg");
	var mask_1_graphics_43 = new cjs.Graphics().p("AhGP+Qm8i1i7m6Qi6m5C0m8QCxmzGri8MAOEAhUQjYBXjYAAQjaAAjZhYg");
	var mask_1_graphics_44 = new cjs.Graphics().p("AgnQHQnGicjTmvQjTmvCcnEQCYm9GgjTMAP5AgfQjvBwj3AAQi8AAi/hBg");
	var mask_1_graphics_45 = new cjs.Graphics().p("AgHQLQnNiDjrmiQjrmjCCnMQCAnFGUjqIRrfjQkFCOkXAAQieAAikgug");
	var mask_1_graphics_46 = new cjs.Graphics().p("AAbQKQnUhpkBmUQkCmVBonTQBmnLGGkBITbehQkZCuk4AAQiBAAiGgeg");
	var mask_1_graphics_47 = new cjs.Graphics().p("AA/QEQnZhOkYmGQkXmGBNnYQBNnQF3kWIVGdZQkrDQlbAAQhjAAhmgRg");
	var mask_1_graphics_48 = new cjs.Graphics().p("ABkP5Qncg0ktl1Qktl2AzncQAznTFnkqIWscKQk5D1mCAAQhDAAhFgHg");
	var mask_1_graphics_49 = new cjs.Graphics().p("ACLPpQnegZlBlkQlClkAZneQAYnWFWk+IYPa3QlGEemsAAQghAAgigCg");
	var mask_1_graphics_50 = new cjs.Graphics().p("AqAKEQlVlSgCneQgCnXFElQIZtZeQlOFHnWACIgFAAQncAAlTlQg");
	var mask_1_graphics_51 = new cjs.Graphics().p("ApnKYQlnk+gdneQgcnVEwliIbFX/Qk7FanVAcQgnACgnAAQmtAAlKkkg");
	var mask_1_graphics_52 = new cjs.Graphics().p("ApKKoQl5kqg3nbQg3nTEdlzIcYWdQknFqnTA3QhLAJhIAAQmEAAk9j8g");
	var mask_1_graphics_53 = new cjs.Graphics().p("AoqK1QmIkVhSnYQhRnPEImCIdlU2QkSF6nPBQQhsAThoAAQleAAkvjVg");
	var mask_1_graphics_54 = new cjs.Graphics().p("AoGK9QmXj+htnTQhqnKDymQIetTKQj9GJnKBqQiLAgiHAAQk6AAkeiyg");
	var mask_1_graphics_55 = new cjs.Graphics().p("AnfLBQmljniGnNQiDnCDbmdIfuRaQjnGXnDCDQipAxikAAQkZAAkLiSg");
	var mask_1_graphics_56 = new cjs.Graphics().p("Am1LBQmxjPifnEQidm7DEmpMAgqAPoQjQGjm7CcQjFBGjBAAQj7AAj1h2g");
	var mask_1_graphics_57 = new cjs.Graphics().p("AmHK+Qm8i3i5m7Qi1mxCsmzMAhfANyQi5GtmyC1QjeBdjfAAQjcAAjdhbg");
	var mask_1_graphics_58 = new cjs.Graphics().p("AlXK3QnFiejRmwQjNmnCTm8MAiNAL6QigG3moDNQj2B3j9AAQi+AAjEhEg");
	var mask_1_graphics_59 = new cjs.Graphics().p("AkkKrQnNiEjpmkQjkmaB6nDMAi0AJ+QiIG/mbDkQkMCUkcAAQihAAiogwg");
	var mask_1_graphics_60 = new cjs.Graphics().p("AjuKcQnUhqkAmWQj7mNBhnKMAjUAICQhuHFmOD7QkfC1k+AAQiDAAiKggg");
	var mask_1_graphics_61 = new cjs.Graphics().p("Ai2KRQnZhQkWmIQkRl+BHnPMAjuAGDQhVHLl/ERQkwDYliAAQhlAAhqgSg");
	var mask_1_graphics_62 = new cjs.Graphics().p("Ah7KaQneg2krl3QkmlvAunRMAj/AEDQg6HOlwEmQk/D+mIAAQhFAAhIgIg");
	var mask_1_graphics_63 = new cjs.Graphics().p("Ag+KgQnggblAlmQk6leAUnTMAkKACCQggHRlfE6QlLEnmyAAQgjAAglgCg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:-33.4,y:-27.4}).wait(1).to({graphics:mask_1_graphics_1,x:-34,y:-24.9}).wait(1).to({graphics:mask_1_graphics_2,x:-34.6,y:-22.4}).wait(1).to({graphics:mask_1_graphics_3,x:-35.4,y:-20}).wait(1).to({graphics:mask_1_graphics_4,x:-36.3,y:-17.6}).wait(1).to({graphics:mask_1_graphics_5,x:-37.3,y:-15.2}).wait(1).to({graphics:mask_1_graphics_6,x:-38.3,y:-12.9}).wait(1).to({graphics:mask_1_graphics_7,x:-39.5,y:-10.6}).wait(1).to({graphics:mask_1_graphics_8,x:-40.7,y:-8.3}).wait(1).to({graphics:mask_1_graphics_9,x:-42.1,y:-6.1}).wait(1).to({graphics:mask_1_graphics_10,x:-43.5,y:-4}).wait(1).to({graphics:mask_1_graphics_11,x:-45.1,y:-1.9}).wait(1).to({graphics:mask_1_graphics_12,x:-46.7,y:0.1}).wait(1).to({graphics:mask_1_graphics_13,x:-48.4,y:2}).wait(1).to({graphics:mask_1_graphics_14,x:-50.2,y:3.8}).wait(1).to({graphics:mask_1_graphics_15,x:-52.1,y:5.5}).wait(1).to({graphics:mask_1_graphics_16,x:-54.1,y:7.2}).wait(1).to({graphics:mask_1_graphics_17,x:-56.2,y:8.7}).wait(1).to({graphics:mask_1_graphics_18,x:-58.4,y:10.1}).wait(1).to({graphics:mask_1_graphics_19,x:-60.6,y:11.5}).wait(1).to({graphics:mask_1_graphics_20,x:-62.8,y:12.7}).wait(1).to({graphics:mask_1_graphics_21,x:-65.1,y:13.9}).wait(1).to({graphics:mask_1_graphics_22,x:-67.5,y:14.9}).wait(1).to({graphics:mask_1_graphics_23,x:-69.8,y:15.9}).wait(1).to({graphics:mask_1_graphics_24,x:-72.2,y:16.8}).wait(1).to({graphics:mask_1_graphics_25,x:-73.8,y:17.6}).wait(1).to({graphics:mask_1_graphics_26,x:-73.7,y:18.2}).wait(1).to({graphics:mask_1_graphics_27,x:-73.7,y:18.6}).wait(1).to({graphics:mask_1_graphics_28,x:-73.6,y:19}).wait(1).to({graphics:mask_1_graphics_29,x:-73.6,y:19.4}).wait(1).to({graphics:mask_1_graphics_30,x:-73.6,y:19.6}).wait(1).to({graphics:mask_1_graphics_31,x:-73.6,y:19.7}).wait(1).to({graphics:mask_1_graphics_32,x:-73.6,y:19.8}).wait(1).to({graphics:mask_1_graphics_33,x:-73.6,y:19.9}).wait(1).to({graphics:mask_1_graphics_34,x:-73.6,y:20}).wait(1).to({graphics:mask_1_graphics_35,x:-73.6,y:20.2}).wait(1).to({graphics:mask_1_graphics_36,x:-73.6,y:20.5}).wait(1).to({graphics:mask_1_graphics_37,x:-73.7,y:20.8}).wait(1).to({graphics:mask_1_graphics_38,x:-73.7,y:21.3}).wait(1).to({graphics:mask_1_graphics_39,x:-73.7,y:21.8}).wait(1).to({graphics:mask_1_graphics_40,x:-73.7,y:22.4}).wait(1).to({graphics:mask_1_graphics_41,x:-71.9,y:23}).wait(1).to({graphics:mask_1_graphics_42,x:-69.9,y:23.8}).wait(1).to({graphics:mask_1_graphics_43,x:-67.8,y:24.6}).wait(1).to({graphics:mask_1_graphics_44,x:-64.9,y:25.9}).wait(1).to({graphics:mask_1_graphics_45,x:-62,y:27.4}).wait(1).to({graphics:mask_1_graphics_46,x:-59.2,y:29}).wait(1).to({graphics:mask_1_graphics_47,x:-56.5,y:30.7}).wait(1).to({graphics:mask_1_graphics_48,x:-53.9,y:32.7}).wait(1).to({graphics:mask_1_graphics_49,x:-51.4,y:34.7}).wait(1).to({graphics:mask_1_graphics_50,x:-49.1,y:36.9}).wait(1).to({graphics:mask_1_graphics_51,x:-46.9,y:39.3}).wait(1).to({graphics:mask_1_graphics_52,x:-44.9,y:41.8}).wait(1).to({graphics:mask_1_graphics_53,x:-43,y:44.4}).wait(1).to({graphics:mask_1_graphics_54,x:-41.2,y:47.2}).wait(1).to({graphics:mask_1_graphics_55,x:-39.6,y:50}).wait(1).to({graphics:mask_1_graphics_56,x:-38.2,y:52.9}).wait(1).to({graphics:mask_1_graphics_57,x:-36.9,y:55.8}).wait(1).to({graphics:mask_1_graphics_58,x:-35.7,y:58.8}).wait(1).to({graphics:mask_1_graphics_59,x:-34.7,y:61.9}).wait(1).to({graphics:mask_1_graphics_60,x:-33.9,y:65}).wait(1).to({graphics:mask_1_graphics_61,x:-33.2,y:67.5}).wait(1).to({graphics:mask_1_graphics_62,x:-32.8,y:67.4}).wait(1).to({graphics:mask_1_graphics_63,x:-32.3,y:67.4}).wait(57));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AifjWQA7IzEEiv");
	this.shape_1.setTransform(-48.3,44.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("Alwi4QBAJkEvkEQDTi2Cfjm");
	this.shape_2.setTransform(-27.4,41.4);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},34).wait(86));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.5,19.1,45.8,21.5);


(lib.ar4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-48.7,-31.5,1,1,-17.5,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-94.4,guide:{path:[-47.9,-29.4,-30.4,37.2,47,28.6]}},119).wait(1));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AlhCZICwlVIBHAkIixFVg");
	var mask_graphics_1 = new cjs.Graphics().p("Ah+CXICvlVIBOAoIivFVg");
	var mask_graphics_2 = new cjs.Graphics().p("AiDCUICwlVIBXAtIiwFVg");
	var mask_graphics_3 = new cjs.Graphics().p("AiHCSICwlVIBfAyIivFVg");
	var mask_graphics_4 = new cjs.Graphics().p("AiLCQICvlVIBoA2IivFVg");
	var mask_graphics_5 = new cjs.Graphics().p("AiPCOICvlVIBxA6IiwFVg");
	var mask_graphics_6 = new cjs.Graphics().p("AiUCMICwlVIB5A+IiwFVg");
	var mask_graphics_7 = new cjs.Graphics().p("AiYCJICwlVICBBEIivFVg");
	var mask_graphics_8 = new cjs.Graphics().p("AicCHICvlVICKBHIivFVg");
	var mask_graphics_9 = new cjs.Graphics().p("AigCFICvlVICTBMIiwFVg");
	var mask_graphics_10 = new cjs.Graphics().p("AilCDICwlVICbBQIiwFVg");
	var mask_graphics_11 = new cjs.Graphics().p("AipCBICwlVICjBUIiwFVg");
	var mask_graphics_12 = new cjs.Graphics().p("AitB/ICvlVICsBYIivFVg");
	var mask_graphics_13 = new cjs.Graphics().p("AixB8ICwlVICzBdIiwFVg");
	var mask_graphics_14 = new cjs.Graphics().p("Ai2B6ICxlVIC8BiIixFVg");
	var mask_graphics_15 = new cjs.Graphics().p("Ai6B4ICxlVIDEBmIixFVg");
	var mask_graphics_16 = new cjs.Graphics().p("Ai+B2ICwlVIDNBqIiwFVg");
	var mask_graphics_17 = new cjs.Graphics().p("AjCB0ICwlVIDVBuIiwFVg");
	var mask_graphics_18 = new cjs.Graphics().p("AjHBxICxlVIDeB0IixFVg");
	var mask_graphics_19 = new cjs.Graphics().p("AjLBvICxlVIDmB4IixFVg");
	var mask_graphics_20 = new cjs.Graphics().p("AjPBtICwlVIDvB8IiwFVg");
	var mask_graphics_21 = new cjs.Graphics().p("AjTBrICwlVID3CAIiwFVg");
	var mask_graphics_22 = new cjs.Graphics().p("AjYBpICxlVIEACEIixFVg");
	var mask_graphics_23 = new cjs.Graphics().p("AjcBmICxlVIEICJIiwFVg");
	var mask_graphics_24 = new cjs.Graphics().p("AjgBkICwlVIERCOIiwFVg");
	var mask_graphics_25 = new cjs.Graphics().p("AjkBiICwlVIEaCSIixFVg");
	var mask_graphics_26 = new cjs.Graphics().p("AjpBgICxlVIEiCWIixFVg");
	var mask_graphics_27 = new cjs.Graphics().p("AjtBeICxlVIEqCaIiwFVg");
	var mask_graphics_28 = new cjs.Graphics().p("AjxBbICwlVIEzCgIiwFVg");
	var mask_graphics_29 = new cjs.Graphics().p("Aj1BZICwlVIE8CkIixFVg");
	var mask_graphics_30 = new cjs.Graphics().p("Aj6BXICxlVIFECoIixFVg");
	var mask_graphics_31 = new cjs.Graphics().p("Aj+BVICxlVIFMCsIixFVg");
	var mask_graphics_32 = new cjs.Graphics().p("AkCBTICwlVIFVCwIiwFVg");
	var mask_graphics_33 = new cjs.Graphics().p("AkGBQICwlVIFdC1IiwFVg");
	var mask_graphics_34 = new cjs.Graphics().p("AkLBOICxlVIFmC6IixFVg");
	var mask_graphics_35 = new cjs.Graphics().p("AkPBMICxlVIFuC+IixFVg");
	var mask_graphics_36 = new cjs.Graphics().p("AkTBKICwlVIF3DCIiwFVg");
	var mask_graphics_37 = new cjs.Graphics().p("AkXBIICwlVIF/DGIiwFVg");
	var mask_graphics_38 = new cjs.Graphics().p("AkcBFICxlVIGIDMIixFVg");
	var mask_graphics_39 = new cjs.Graphics().p("AkgBDICxlVIGQDQIiwFVg");
	var mask_graphics_40 = new cjs.Graphics().p("AkkBBICwlVIGZDUIiwFVg");
	var mask_graphics_41 = new cjs.Graphics().p("AkoA/ICwlVIGiDYIixFVg");
	var mask_graphics_42 = new cjs.Graphics().p("AktA9ICxlVIGqDcIixFVg");
	var mask_graphics_43 = new cjs.Graphics().p("AkxA6ICxlVIGyDhIiwFVg");
	var mask_graphics_44 = new cjs.Graphics().p("Ak1A4ICwlVIG7DmIiwFVg");
	var mask_graphics_45 = new cjs.Graphics().p("Ak5A2ICwlVIHEDqIixFVg");
	var mask_graphics_46 = new cjs.Graphics().p("Ak+A0ICxlVIHMDuIixFVg");
	var mask_graphics_47 = new cjs.Graphics().p("AlCAyICxlVIHUDyIixFVg");
	var mask_graphics_48 = new cjs.Graphics().p("AlGAvICwlVIHdD4IiwFVg");
	var mask_graphics_49 = new cjs.Graphics().p("AlKAtICwlVIHlD8IiwFVg");
	var mask_graphics_50 = new cjs.Graphics().p("AlPArICxlVIHuEAIixFVg");
	var mask_graphics_51 = new cjs.Graphics().p("AlTApICxlVIH2EEIixFVg");
	var mask_graphics_52 = new cjs.Graphics().p("AlXAnICwlVIH/EIIiwFVg");
	var mask_graphics_53 = new cjs.Graphics().p("AlbAkICwlVIIHENIiwFWg");
	var mask_graphics_54 = new cjs.Graphics().p("AlgAiICxlVIIQESIixFVg");
	var mask_graphics_55 = new cjs.Graphics().p("AlkAgICxlVIIYEWIixFVg");
	var mask_graphics_56 = new cjs.Graphics().p("AloAeICwlVIIhEaIiwFVg");
	var mask_graphics_57 = new cjs.Graphics().p("AlsAcICwlVIIqEeIixFVg");
	var mask_graphics_58 = new cjs.Graphics().p("AlxAZICxlVIIyEjIixFVg");
	var mask_graphics_59 = new cjs.Graphics().p("Al1AXICwlVII7EoIiwFVg");
	var mask_graphics_60 = new cjs.Graphics().p("Al6AVICxlVIJDEsIiwFVg");
	var mask_graphics_61 = new cjs.Graphics().p("Al+ATICwlVIJNEwIixFVg");
	var mask_graphics_62 = new cjs.Graphics().p("AmCARICwlVIJVE1IiwFVg");
	var mask_graphics_63 = new cjs.Graphics().p("AmHAOICxlVIJdE6IiwFVg");
	var mask_graphics_64 = new cjs.Graphics().p("AmLAMICxlVIJmE+IixFVg");
	var mask_graphics_65 = new cjs.Graphics().p("AmPAKICwlVIJvFCIixFVg");
	var mask_graphics_66 = new cjs.Graphics().p("AmTAIICwlVIJ3FGIiwFVg");
	var mask_graphics_67 = new cjs.Graphics().p("AmYAGICxlVIKAFKIixFVg");
	var mask_graphics_68 = new cjs.Graphics().p("AmcADICxlVIKIFQIixFVg");
	var mask_graphics_69 = new cjs.Graphics().p("AmgABICwlVIKRFUIiwFVg");
	var mask_graphics_70 = new cjs.Graphics().p("AmkAAICwlWIKZFXIiwFWg");
	var mask_graphics_71 = new cjs.Graphics().p("AmpgCICxlWIKiFbIixFWg");
	var mask_graphics_72 = new cjs.Graphics().p("AmtgEICxlWIKqFgIixFWg");
	var mask_graphics_73 = new cjs.Graphics().p("AmxgHICwlWIKzFlIiwFWg");
	var mask_graphics_74 = new cjs.Graphics().p("Am1gJICwlWIK7FpIiwFWg");
	var mask_graphics_75 = new cjs.Graphics().p("Am6gLICxlWILEFtIixFWg");
	var mask_graphics_76 = new cjs.Graphics().p("Am+gNICxlWILMFxIixFWg");
	var mask_graphics_77 = new cjs.Graphics().p("AnCgPICwlWILVF1IixFWg");
	var mask_graphics_78 = new cjs.Graphics().p("AnGgSICwlWILdF7IiwFWg");
	var mask_graphics_79 = new cjs.Graphics().p("AnLgUICxlWILlF/IiwFWg");
	var mask_graphics_80 = new cjs.Graphics().p("AnPgWICxlWILuGDIixFWg");
	var mask_graphics_81 = new cjs.Graphics().p("AnTgYICwlWIL3GHIixFWg");
	var mask_graphics_82 = new cjs.Graphics().p("AnXgaICwlWIL/GMIiwFWg");
	var mask_graphics_83 = new cjs.Graphics().p("AncgdICxlWIMHGRIiwFWg");
	var mask_graphics_84 = new cjs.Graphics().p("AnggfICxlWIMQGVIixFWg");
	var mask_graphics_85 = new cjs.Graphics().p("AnkghICwlWIMZGZIiwFWg");
	var mask_graphics_86 = new cjs.Graphics().p("AnogjICwlWIMhGdIiwFWg");
	var mask_graphics_87 = new cjs.Graphics().p("AntglICxlWIMqGhIixFWg");
	var mask_graphics_88 = new cjs.Graphics().p("AnxgoICxlWIMyGnIixFWg");
	var mask_graphics_89 = new cjs.Graphics().p("An1gqICwlWIM7GrIiwFWg");
	var mask_graphics_90 = new cjs.Graphics().p("An5gsICwlWINDGvIiwFWg");
	var mask_graphics_91 = new cjs.Graphics().p("An+guICxlWINMGzIixFWg");
	var mask_graphics_92 = new cjs.Graphics().p("AoCgwICxlWINUG4IixFWg");
	var mask_graphics_93 = new cjs.Graphics().p("AoGgyICwlWINdG7IixFWg");
	var mask_graphics_94 = new cjs.Graphics().p("AoKg1ICwlWINlHBIiwFWg");
	var mask_graphics_95 = new cjs.Graphics().p("AoPg3ICxlWINtHFIiwFWg");
	var mask_graphics_96 = new cjs.Graphics().p("AoTg5ICxlWIN2HJIixFWg");
	var mask_graphics_97 = new cjs.Graphics().p("AoXg7ICwlWIN/HNIixFWg");
	var mask_graphics_98 = new cjs.Graphics().p("Aobg9ICwlWIOHHRIiwFWg");
	var mask_graphics_99 = new cjs.Graphics().p("AoghAICxlWIOPHXIiwFWg");
	var mask_graphics_100 = new cjs.Graphics().p("AokhCICxlWIOYHbIixFWg");
	var mask_graphics_101 = new cjs.Graphics().p("AoohEICwlWIOhHfIixFWg");
	var mask_graphics_102 = new cjs.Graphics().p("AoshGICwlWIOpHjIiwFWg");
	var mask_graphics_103 = new cjs.Graphics().p("AoxhIICxlWIOxHoIiwFWg");
	var mask_graphics_104 = new cjs.Graphics().p("Ao1hLICxlWIO6HtIixFWg");
	var mask_graphics_105 = new cjs.Graphics().p("Ao5hNICwlWIPDHxIiwFWg");
	var mask_graphics_106 = new cjs.Graphics().p("Ao9hPICwlWIPLH1IiwFWg");
	var mask_graphics_107 = new cjs.Graphics().p("ApChRICxlWIPUH6IixFWg");
	var mask_graphics_108 = new cjs.Graphics().p("ApGhTICxlWIPcH9IixFWg");
	var mask_graphics_109 = new cjs.Graphics().p("ApKhWICwlWIPlIDIiwFWg");
	var mask_graphics_110 = new cjs.Graphics().p("ApOhYICwlWIPtIHIiwFWg");
	var mask_graphics_111 = new cjs.Graphics().p("ApThaICxlWIP2ILIixFWg");
	var mask_graphics_112 = new cjs.Graphics().p("ApXhcICxlWIP+IPIixFWg");
	var mask_graphics_113 = new cjs.Graphics().p("ApbheICwlWIQHIUIixFWg");
	var mask_graphics_114 = new cjs.Graphics().p("ApfhhICwlWIQPIZIiwFWg");
	var mask_graphics_115 = new cjs.Graphics().p("ApkhjICxlWIQXIdIiwFWg");
	var mask_graphics_116 = new cjs.Graphics().p("ApohlICxlWIQgIhIixFWg");
	var mask_graphics_117 = new cjs.Graphics().p("ApshnICwlWIQpIlIixFWg");
	var mask_graphics_118 = new cjs.Graphics().p("ApwhpICwlWIQxIpIiwFWg");
	var mask_graphics_119 = new cjs.Graphics().p("Ap1hsICxlWIQ6IvIixFWg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-35.4,y:-17.5}).wait(1).to({graphics:mask_graphics_1,x:-58.1,y:-17.2}).wait(1).to({graphics:mask_graphics_2,x:-57.7,y:-17}).wait(1).to({graphics:mask_graphics_3,x:-57.2,y:-16.8}).wait(1).to({graphics:mask_graphics_4,x:-56.8,y:-16.6}).wait(1).to({graphics:mask_graphics_5,x:-56.4,y:-16.3}).wait(1).to({graphics:mask_graphics_6,x:-56,y:-16.1}).wait(1).to({graphics:mask_graphics_7,x:-55.5,y:-15.9}).wait(1).to({graphics:mask_graphics_8,x:-55.1,y:-15.7}).wait(1).to({graphics:mask_graphics_9,x:-54.7,y:-15.5}).wait(1).to({graphics:mask_graphics_10,x:-54.3,y:-15.2}).wait(1).to({graphics:mask_graphics_11,x:-53.8,y:-15}).wait(1).to({graphics:mask_graphics_12,x:-53.4,y:-14.8}).wait(1).to({graphics:mask_graphics_13,x:-53,y:-14.6}).wait(1).to({graphics:mask_graphics_14,x:-52.6,y:-14.4}).wait(1).to({graphics:mask_graphics_15,x:-52.1,y:-14.1}).wait(1).to({graphics:mask_graphics_16,x:-51.7,y:-13.9}).wait(1).to({graphics:mask_graphics_17,x:-51.3,y:-13.7}).wait(1).to({graphics:mask_graphics_18,x:-50.9,y:-13.5}).wait(1).to({graphics:mask_graphics_19,x:-50.4,y:-13.3}).wait(1).to({graphics:mask_graphics_20,x:-50,y:-13}).wait(1).to({graphics:mask_graphics_21,x:-49.6,y:-12.8}).wait(1).to({graphics:mask_graphics_22,x:-49.2,y:-12.6}).wait(1).to({graphics:mask_graphics_23,x:-48.7,y:-12.4}).wait(1).to({graphics:mask_graphics_24,x:-48.3,y:-12.2}).wait(1).to({graphics:mask_graphics_25,x:-47.9,y:-11.9}).wait(1).to({graphics:mask_graphics_26,x:-47.5,y:-11.7}).wait(1).to({graphics:mask_graphics_27,x:-47,y:-11.5}).wait(1).to({graphics:mask_graphics_28,x:-46.6,y:-11.3}).wait(1).to({graphics:mask_graphics_29,x:-46.2,y:-11.1}).wait(1).to({graphics:mask_graphics_30,x:-45.8,y:-10.8}).wait(1).to({graphics:mask_graphics_31,x:-45.3,y:-10.6}).wait(1).to({graphics:mask_graphics_32,x:-44.9,y:-10.4}).wait(1).to({graphics:mask_graphics_33,x:-44.5,y:-10.2}).wait(1).to({graphics:mask_graphics_34,x:-44.1,y:-10}).wait(1).to({graphics:mask_graphics_35,x:-43.6,y:-9.7}).wait(1).to({graphics:mask_graphics_36,x:-43.2,y:-9.5}).wait(1).to({graphics:mask_graphics_37,x:-42.8,y:-9.3}).wait(1).to({graphics:mask_graphics_38,x:-42.4,y:-9.1}).wait(1).to({graphics:mask_graphics_39,x:-41.9,y:-8.9}).wait(1).to({graphics:mask_graphics_40,x:-41.5,y:-8.6}).wait(1).to({graphics:mask_graphics_41,x:-41.1,y:-8.4}).wait(1).to({graphics:mask_graphics_42,x:-40.7,y:-8.2}).wait(1).to({graphics:mask_graphics_43,x:-40.2,y:-8}).wait(1).to({graphics:mask_graphics_44,x:-39.8,y:-7.8}).wait(1).to({graphics:mask_graphics_45,x:-39.4,y:-7.5}).wait(1).to({graphics:mask_graphics_46,x:-39,y:-7.3}).wait(1).to({graphics:mask_graphics_47,x:-38.5,y:-7.1}).wait(1).to({graphics:mask_graphics_48,x:-38.1,y:-6.9}).wait(1).to({graphics:mask_graphics_49,x:-37.7,y:-6.7}).wait(1).to({graphics:mask_graphics_50,x:-37.3,y:-6.5}).wait(1).to({graphics:mask_graphics_51,x:-36.8,y:-6.2}).wait(1).to({graphics:mask_graphics_52,x:-36.4,y:-6}).wait(1).to({graphics:mask_graphics_53,x:-36,y:-5.8}).wait(1).to({graphics:mask_graphics_54,x:-35.6,y:-5.6}).wait(1).to({graphics:mask_graphics_55,x:-35.1,y:-5.4}).wait(1).to({graphics:mask_graphics_56,x:-34.7,y:-5.1}).wait(1).to({graphics:mask_graphics_57,x:-34.3,y:-4.9}).wait(1).to({graphics:mask_graphics_58,x:-33.9,y:-4.7}).wait(1).to({graphics:mask_graphics_59,x:-33.4,y:-4.5}).wait(1).to({graphics:mask_graphics_60,x:-33,y:-4.3}).wait(1).to({graphics:mask_graphics_61,x:-32.6,y:-4.1}).wait(1).to({graphics:mask_graphics_62,x:-32.2,y:-3.8}).wait(1).to({graphics:mask_graphics_63,x:-31.7,y:-3.6}).wait(1).to({graphics:mask_graphics_64,x:-31.3,y:-3.4}).wait(1).to({graphics:mask_graphics_65,x:-30.9,y:-3.2}).wait(1).to({graphics:mask_graphics_66,x:-30.5,y:-3}).wait(1).to({graphics:mask_graphics_67,x:-30,y:-2.7}).wait(1).to({graphics:mask_graphics_68,x:-29.6,y:-2.5}).wait(1).to({graphics:mask_graphics_69,x:-29.2,y:-2.3}).wait(1).to({graphics:mask_graphics_70,x:-28.8,y:-2.1}).wait(1).to({graphics:mask_graphics_71,x:-28.3,y:-1.9}).wait(1).to({graphics:mask_graphics_72,x:-27.9,y:-1.6}).wait(1).to({graphics:mask_graphics_73,x:-27.5,y:-1.4}).wait(1).to({graphics:mask_graphics_74,x:-27.1,y:-1.2}).wait(1).to({graphics:mask_graphics_75,x:-26.6,y:-1}).wait(1).to({graphics:mask_graphics_76,x:-26.2,y:-0.8}).wait(1).to({graphics:mask_graphics_77,x:-25.8,y:-0.5}).wait(1).to({graphics:mask_graphics_78,x:-25.4,y:-0.3}).wait(1).to({graphics:mask_graphics_79,x:-24.9,y:-0.1}).wait(1).to({graphics:mask_graphics_80,x:-24.5,y:0.1}).wait(1).to({graphics:mask_graphics_81,x:-24.1,y:0.3}).wait(1).to({graphics:mask_graphics_82,x:-23.7,y:0.6}).wait(1).to({graphics:mask_graphics_83,x:-23.2,y:0.8}).wait(1).to({graphics:mask_graphics_84,x:-22.8,y:1}).wait(1).to({graphics:mask_graphics_85,x:-22.4,y:1.2}).wait(1).to({graphics:mask_graphics_86,x:-22,y:1.4}).wait(1).to({graphics:mask_graphics_87,x:-21.5,y:1.7}).wait(1).to({graphics:mask_graphics_88,x:-21.1,y:1.9}).wait(1).to({graphics:mask_graphics_89,x:-20.7,y:2.1}).wait(1).to({graphics:mask_graphics_90,x:-20.3,y:2.3}).wait(1).to({graphics:mask_graphics_91,x:-19.8,y:2.5}).wait(1).to({graphics:mask_graphics_92,x:-19.4,y:2.8}).wait(1).to({graphics:mask_graphics_93,x:-19,y:3}).wait(1).to({graphics:mask_graphics_94,x:-18.6,y:3.2}).wait(1).to({graphics:mask_graphics_95,x:-18.1,y:3.4}).wait(1).to({graphics:mask_graphics_96,x:-17.7,y:3.6}).wait(1).to({graphics:mask_graphics_97,x:-17.3,y:3.9}).wait(1).to({graphics:mask_graphics_98,x:-16.9,y:4.1}).wait(1).to({graphics:mask_graphics_99,x:-16.4,y:4.3}).wait(1).to({graphics:mask_graphics_100,x:-16,y:4.5}).wait(1).to({graphics:mask_graphics_101,x:-15.6,y:4.7}).wait(1).to({graphics:mask_graphics_102,x:-15.2,y:5}).wait(1).to({graphics:mask_graphics_103,x:-14.7,y:5.2}).wait(1).to({graphics:mask_graphics_104,x:-14.3,y:5.4}).wait(1).to({graphics:mask_graphics_105,x:-13.9,y:5.6}).wait(1).to({graphics:mask_graphics_106,x:-13.5,y:5.8}).wait(1).to({graphics:mask_graphics_107,x:-13,y:6.1}).wait(1).to({graphics:mask_graphics_108,x:-12.6,y:6.3}).wait(1).to({graphics:mask_graphics_109,x:-12.2,y:6.5}).wait(1).to({graphics:mask_graphics_110,x:-11.8,y:6.7}).wait(1).to({graphics:mask_graphics_111,x:-11.3,y:6.9}).wait(1).to({graphics:mask_graphics_112,x:-10.9,y:7.1}).wait(1).to({graphics:mask_graphics_113,x:-10.5,y:7.4}).wait(1).to({graphics:mask_graphics_114,x:-10.1,y:7.6}).wait(1).to({graphics:mask_graphics_115,x:-9.6,y:7.8}).wait(1).to({graphics:mask_graphics_116,x:-9.2,y:8}).wait(1).to({graphics:mask_graphics_117,x:-8.8,y:8.2}).wait(1).to({graphics:mask_graphics_118,x:-8.4,y:8.5}).wait(1).to({graphics:mask_graphics_119,x:-7.9,y:8.7}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AnfkmQCwKeMPhb");

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.3,-37.3,21.2,38.8);


(lib.ar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-15.4,-5.5,1,1,-102.7,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,rotation:-63.5,guide:{path:[-15.4,-5.7,33.1,-17.9,72.4,-1.3]}},89).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AhkBcIAFi4IBEABIgFC4g");
	var mask_graphics_1 = new cjs.Graphics().p("AgpBbIAFi4IBOADIgFC4g");
	var mask_graphics_2 = new cjs.Graphics().p("AguBbIAFi4IBYADIgFC4g");
	var mask_graphics_3 = new cjs.Graphics().p("AgzBbIAFi4IBiADIgFC4g");
	var mask_graphics_4 = new cjs.Graphics().p("Ag4BbIAFi4IBsADIgFC4g");
	var mask_graphics_5 = new cjs.Graphics().p("Ag9BaIAFi3IB2ADIgFC4g");
	var mask_graphics_6 = new cjs.Graphics().p("AhCBaIAFi3ICAADIgFC4g");
	var mask_graphics_7 = new cjs.Graphics().p("AhHBaIAFi3ICKAEIgFC3g");
	var mask_graphics_8 = new cjs.Graphics().p("AhMBaIAFi3ICUAEIgFC3g");
	var mask_graphics_9 = new cjs.Graphics().p("AhRBaIAFi4ICeAFIgFC3g");
	var mask_graphics_10 = new cjs.Graphics().p("AhWBaIAFi4ICoAFIgFC4g");
	var mask_graphics_11 = new cjs.Graphics().p("AhbBaIAFi4ICyAFIgFC4g");
	var mask_graphics_12 = new cjs.Graphics().p("AhgBZIAFi3IC8AFIgFC4g");
	var mask_graphics_13 = new cjs.Graphics().p("AhlBZIAFi3IDGAFIgFC4g");
	var mask_graphics_14 = new cjs.Graphics().p("AhqBZIAFi3IDQAGIgFC3g");
	var mask_graphics_15 = new cjs.Graphics().p("AhvBZIAFi3IDaAGIgFC3g");
	var mask_graphics_16 = new cjs.Graphics().p("Ah0BZIAFi4IDkAHIgFC3g");
	var mask_graphics_17 = new cjs.Graphics().p("Ah5BZIAFi4IDuAHIgFC3g");
	var mask_graphics_18 = new cjs.Graphics().p("Ah+BZIAFi4ID4AHIgFC4g");
	var mask_graphics_19 = new cjs.Graphics().p("AiDBZIAFi4IECAHIgFC4g");
	var mask_graphics_20 = new cjs.Graphics().p("AiIBYIAFi3IEMAHIgFC4g");
	var mask_graphics_21 = new cjs.Graphics().p("AiNBYIAFi3IEWAIIgFC3g");
	var mask_graphics_22 = new cjs.Graphics().p("AiSBYIAFi3IEgAIIgFC3g");
	var mask_graphics_23 = new cjs.Graphics().p("AiXBYIAFi4IEqAJIgFC4g");
	var mask_graphics_24 = new cjs.Graphics().p("AicBYIAFi4IE0AJIgFC4g");
	var mask_graphics_25 = new cjs.Graphics().p("AihBYIAFi4IE+AJIgFC4g");
	var mask_graphics_26 = new cjs.Graphics().p("AimBYIAFi4IFIAJIgFC4g");
	var mask_graphics_27 = new cjs.Graphics().p("AirBXIAFi3IFSAKIgFC3g");
	var mask_graphics_28 = new cjs.Graphics().p("AiwBXIAFi3IFcAKIgFC3g");
	var mask_graphics_29 = new cjs.Graphics().p("Ai1BXIAFi3IFmAKIgFC3g");
	var mask_graphics_30 = new cjs.Graphics().p("Ai6BXIAFi4IFwALIgFC4g");
	var mask_graphics_31 = new cjs.Graphics().p("Ai/BXIAFi4IF6ALIgFC4g");
	var mask_graphics_32 = new cjs.Graphics().p("AjEBXIAFi4IGEALIgFC4g");
	var mask_graphics_33 = new cjs.Graphics().p("AjJBXIAFi4IGOALIgFC4g");
	var mask_graphics_34 = new cjs.Graphics().p("AjOBWIAFi3IGYAMIgFC3g");
	var mask_graphics_35 = new cjs.Graphics().p("AjTBWIAFi3IGiAMIgFC3g");
	var mask_graphics_36 = new cjs.Graphics().p("AjYBWIAFi3IGsAMIgFC3g");
	var mask_graphics_37 = new cjs.Graphics().p("AjdBWIAFi3IG2AMIgFC3g");
	var mask_graphics_38 = new cjs.Graphics().p("AjiBWIAFi4IHAANIgFC4g");
	var mask_graphics_39 = new cjs.Graphics().p("AjnBWIAFi4IHKANIgFC4g");
	var mask_graphics_40 = new cjs.Graphics().p("AjsBWIAFi4IHUANIgFC4g");
	var mask_graphics_41 = new cjs.Graphics().p("AjxBVIAFi3IHeANIgFC4g");
	var mask_graphics_42 = new cjs.Graphics().p("Aj2BVIAFi3IHoANIgFC4g");
	var mask_graphics_43 = new cjs.Graphics().p("Aj7BVIAFi3IHyAOIgFC3g");
	var mask_graphics_44 = new cjs.Graphics().p("AkABVIAFi3IH8AOIgFC3g");
	var mask_graphics_45 = new cjs.Graphics().p("AkGBVIAFi3IIIAOIgFC3g");
	var mask_graphics_46 = new cjs.Graphics().p("AkLBVIAFi3IISAOIgFC3g");
	var mask_graphics_47 = new cjs.Graphics().p("AkQBVIAFi3IIcAOIgFC4g");
	var mask_graphics_48 = new cjs.Graphics().p("AkVBVIAFi3IImAOIgFC4g");
	var mask_graphics_49 = new cjs.Graphics().p("AkaBVIAFi4IIwAPIgFC4g");
	var mask_graphics_50 = new cjs.Graphics().p("AkfBVIAFi4II6AQIgFC3g");
	var mask_graphics_51 = new cjs.Graphics().p("AkkBVIAFi4IJEAQIgFC3g");
	var mask_graphics_52 = new cjs.Graphics().p("AkpBUIAFi3IJOAQIgFC3g");
	var mask_graphics_53 = new cjs.Graphics().p("AkuBUIAFi3IJYAQIgFC3g");
	var mask_graphics_54 = new cjs.Graphics().p("AkzBUIAFi3IJiAQIgFC4g");
	var mask_graphics_55 = new cjs.Graphics().p("Ak4BUIAFi3IJsAQIgFC4g");
	var mask_graphics_56 = new cjs.Graphics().p("Ak9BUIAFi4IJ2ARIgFC4g");
	var mask_graphics_57 = new cjs.Graphics().p("AlCBUIAFi4IKAARIgFC4g");
	var mask_graphics_58 = new cjs.Graphics().p("AlHBUIAFi4IKKARIgFC4g");
	var mask_graphics_59 = new cjs.Graphics().p("AlMBUIAFi4IKUARIgFC4g");
	var mask_graphics_60 = new cjs.Graphics().p("AlRBTIAFi3IKeASIgFC3g");
	var mask_graphics_61 = new cjs.Graphics().p("AlWBTIAFi3IKoASIgFC3g");
	var mask_graphics_62 = new cjs.Graphics().p("AlbBTIAFi3IKyASIgFC3g");
	var mask_graphics_63 = new cjs.Graphics().p("AlgBTIAFi4IK8ATIgFC4g");
	var mask_graphics_64 = new cjs.Graphics().p("AllBTIAFi4ILGATIgFC4g");
	var mask_graphics_65 = new cjs.Graphics().p("AlqBTIAFi4ILQATIgFC4g");
	var mask_graphics_66 = new cjs.Graphics().p("AlvBTIAFi4ILaATIgFC4g");
	var mask_graphics_67 = new cjs.Graphics().p("Al0BSIAFi3ILkAUIgFC3g");
	var mask_graphics_68 = new cjs.Graphics().p("Al5BSIAFi3ILuAUIgFC3g");
	var mask_graphics_69 = new cjs.Graphics().p("Al+BSIAFi3IL4AUIgFC3g");
	var mask_graphics_70 = new cjs.Graphics().p("AmDBSIAFi4IMCAVIgFC4g");
	var mask_graphics_71 = new cjs.Graphics().p("AmIBSIAFi4IMMAVIgFC4g");
	var mask_graphics_72 = new cjs.Graphics().p("AmNBSIAFi4IMWAWIgFC3g");
	var mask_graphics_73 = new cjs.Graphics().p("AmSBSIAFi4IMgAWIgFC3g");
	var mask_graphics_74 = new cjs.Graphics().p("AmXBRIAFi3IMqAWIgFC3g");
	var mask_graphics_75 = new cjs.Graphics().p("AmcBRIAFi3IM0AWIgFC3g");
	var mask_graphics_76 = new cjs.Graphics().p("AmhBRIAFi3IM+AWIgFC4g");
	var mask_graphics_77 = new cjs.Graphics().p("AmmBRIAFi3INIAWIgFC4g");
	var mask_graphics_78 = new cjs.Graphics().p("AmrBRIAFi4INSAXIgFC4g");
	var mask_graphics_79 = new cjs.Graphics().p("AmwBRIAFi4INcAXIgFC4g");
	var mask_graphics_80 = new cjs.Graphics().p("Am1BRIAFi4INmAYIgFC3g");
	var mask_graphics_81 = new cjs.Graphics().p("Am6BQIAFi3INwAYIgFC3g");
	var mask_graphics_82 = new cjs.Graphics().p("Am/BQIAFi3IN6AYIgFC3g");
	var mask_graphics_83 = new cjs.Graphics().p("AnEBQIAFi3IOEAYIgFC4g");
	var mask_graphics_84 = new cjs.Graphics().p("AnJBQIAFi3IOOAYIgFC4g");
	var mask_graphics_85 = new cjs.Graphics().p("AnOBQIAFi4IOYAZIgFC4g");
	var mask_graphics_86 = new cjs.Graphics().p("AnTBQIAFi4IOiAZIgFC4g");
	var mask_graphics_87 = new cjs.Graphics().p("AnYBQIAFi4IOsAZIgFC4g");
	var mask_graphics_88 = new cjs.Graphics().p("AndBQIAFi4IO2AZIgFC4g");
	var mask_graphics_89 = new cjs.Graphics().p("AniBPIAFi4IPAAbIgFC4g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-10.1,y:-8.1}).wait(1).to({graphics:mask_graphics_1,x:-16.1,y:-8.1}).wait(1).to({graphics:mask_graphics_2,x:-15.6,y:-8.1}).wait(1).to({graphics:mask_graphics_3,x:-15.1,y:-8.1}).wait(1).to({graphics:mask_graphics_4,x:-14.6,y:-8.1}).wait(1).to({graphics:mask_graphics_5,x:-14.1,y:-8}).wait(1).to({graphics:mask_graphics_6,x:-13.6,y:-8}).wait(1).to({graphics:mask_graphics_7,x:-13.1,y:-8}).wait(1).to({graphics:mask_graphics_8,x:-12.6,y:-8}).wait(1).to({graphics:mask_graphics_9,x:-12.1,y:-8}).wait(1).to({graphics:mask_graphics_10,x:-11.5,y:-8}).wait(1).to({graphics:mask_graphics_11,x:-11,y:-8}).wait(1).to({graphics:mask_graphics_12,x:-10.5,y:-7.9}).wait(1).to({graphics:mask_graphics_13,x:-10,y:-7.9}).wait(1).to({graphics:mask_graphics_14,x:-9.5,y:-7.9}).wait(1).to({graphics:mask_graphics_15,x:-9,y:-7.9}).wait(1).to({graphics:mask_graphics_16,x:-8.5,y:-7.9}).wait(1).to({graphics:mask_graphics_17,x:-8,y:-7.9}).wait(1).to({graphics:mask_graphics_18,x:-7.5,y:-7.9}).wait(1).to({graphics:mask_graphics_19,x:-7,y:-7.9}).wait(1).to({graphics:mask_graphics_20,x:-6.5,y:-7.8}).wait(1).to({graphics:mask_graphics_21,x:-6,y:-7.8}).wait(1).to({graphics:mask_graphics_22,x:-5.5,y:-7.8}).wait(1).to({graphics:mask_graphics_23,x:-5,y:-7.8}).wait(1).to({graphics:mask_graphics_24,x:-4.5,y:-7.8}).wait(1).to({graphics:mask_graphics_25,x:-4,y:-7.8}).wait(1).to({graphics:mask_graphics_26,x:-3.5,y:-7.8}).wait(1).to({graphics:mask_graphics_27,x:-3,y:-7.7}).wait(1).to({graphics:mask_graphics_28,x:-2.5,y:-7.7}).wait(1).to({graphics:mask_graphics_29,x:-2,y:-7.7}).wait(1).to({graphics:mask_graphics_30,x:-1.5,y:-7.7}).wait(1).to({graphics:mask_graphics_31,x:-1,y:-7.7}).wait(1).to({graphics:mask_graphics_32,x:-0.5,y:-7.7}).wait(1).to({graphics:mask_graphics_33,x:0,y:-7.7}).wait(1).to({graphics:mask_graphics_34,x:0.5,y:-7.6}).wait(1).to({graphics:mask_graphics_35,x:1,y:-7.6}).wait(1).to({graphics:mask_graphics_36,x:1.5,y:-7.6}).wait(1).to({graphics:mask_graphics_37,x:2,y:-7.6}).wait(1).to({graphics:mask_graphics_38,x:2.5,y:-7.6}).wait(1).to({graphics:mask_graphics_39,x:3,y:-7.6}).wait(1).to({graphics:mask_graphics_40,x:3.5,y:-7.6}).wait(1).to({graphics:mask_graphics_41,x:4,y:-7.5}).wait(1).to({graphics:mask_graphics_42,x:4.5,y:-7.5}).wait(1).to({graphics:mask_graphics_43,x:5,y:-7.5}).wait(1).to({graphics:mask_graphics_44,x:5.5,y:-7.5}).wait(1).to({graphics:mask_graphics_45,x:6,y:-7.5}).wait(1).to({graphics:mask_graphics_46,x:6.5,y:-7.5}).wait(1).to({graphics:mask_graphics_47,x:7,y:-7.4}).wait(1).to({graphics:mask_graphics_48,x:7.5,y:-7.4}).wait(1).to({graphics:mask_graphics_49,x:8,y:-7.4}).wait(1).to({graphics:mask_graphics_50,x:8.5,y:-7.4}).wait(1).to({graphics:mask_graphics_51,x:9,y:-7.4}).wait(1).to({graphics:mask_graphics_52,x:9.5,y:-7.4}).wait(1).to({graphics:mask_graphics_53,x:10,y:-7.4}).wait(1).to({graphics:mask_graphics_54,x:10.5,y:-7.3}).wait(1).to({graphics:mask_graphics_55,x:11,y:-7.3}).wait(1).to({graphics:mask_graphics_56,x:11.5,y:-7.3}).wait(1).to({graphics:mask_graphics_57,x:12,y:-7.3}).wait(1).to({graphics:mask_graphics_58,x:12.5,y:-7.3}).wait(1).to({graphics:mask_graphics_59,x:13,y:-7.3}).wait(1).to({graphics:mask_graphics_60,x:13.5,y:-7.3}).wait(1).to({graphics:mask_graphics_61,x:14,y:-7.2}).wait(1).to({graphics:mask_graphics_62,x:14.5,y:-7.2}).wait(1).to({graphics:mask_graphics_63,x:15,y:-7.2}).wait(1).to({graphics:mask_graphics_64,x:15.5,y:-7.2}).wait(1).to({graphics:mask_graphics_65,x:16,y:-7.2}).wait(1).to({graphics:mask_graphics_66,x:16.5,y:-7.2}).wait(1).to({graphics:mask_graphics_67,x:17,y:-7.2}).wait(1).to({graphics:mask_graphics_68,x:17.5,y:-7.2}).wait(1).to({graphics:mask_graphics_69,x:18,y:-7.1}).wait(1).to({graphics:mask_graphics_70,x:18.5,y:-7.1}).wait(1).to({graphics:mask_graphics_71,x:19,y:-7.1}).wait(1).to({graphics:mask_graphics_72,x:19.5,y:-7.1}).wait(1).to({graphics:mask_graphics_73,x:20,y:-7.1}).wait(1).to({graphics:mask_graphics_74,x:20.5,y:-7.1}).wait(1).to({graphics:mask_graphics_75,x:21,y:-7.1}).wait(1).to({graphics:mask_graphics_76,x:21.5,y:-7}).wait(1).to({graphics:mask_graphics_77,x:22,y:-7}).wait(1).to({graphics:mask_graphics_78,x:22.5,y:-7}).wait(1).to({graphics:mask_graphics_79,x:23,y:-7}).wait(1).to({graphics:mask_graphics_80,x:23.5,y:-7}).wait(1).to({graphics:mask_graphics_81,x:24,y:-7}).wait(1).to({graphics:mask_graphics_82,x:24.5,y:-7}).wait(1).to({graphics:mask_graphics_83,x:25,y:-6.9}).wait(1).to({graphics:mask_graphics_84,x:25.5,y:-6.9}).wait(1).to({graphics:mask_graphics_85,x:26,y:-6.9}).wait(1).to({graphics:mask_graphics_86,x:26.5,y:-6.9}).wait(1).to({graphics:mask_graphics_87,x:27,y:-6.9}).wait(1).to({graphics:mask_graphics_88,x:27.5,y:-6.9}).wait(1).to({graphics:mask_graphics_89,x:28.1,y:-6.9}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AGzAwQmFilngB2");
	this.shape.setTransform(29,-6.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.5,-15.6,15.9,21.8);


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
(lib.WS_Cursive_K = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_625 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(625).call(this.frame_625).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(98.7,143.7,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[98.8,143.7,162.4,102.5,199.4,136.7,236.3,170.9,207.8,225.6,179.4,280.4,154.7,328.9,130.1,377.1,103.4,428.4]}},180).wait(11).to({skewY:0,x:418.4,y:124.9},0).to({guide:{path:[418.4,125.1,357.7,129.6,316.1,206.1,281.6,261.8,270.4,276.4,259.2,291,226.1,304.8,216.8,309.2,200.7,310.7,184.5,312.2,180.5,304.1,176.6,296.2,176.8,292.8]}},159).wait(11).to({x:176.9,y:292.9},0).to({guide:{path:[176.9,292.8,183.5,270.4,197.6,272.1,211.8,273.7,217.5,279.2,219.3,280.9,220.8,283.1,224,287.8,225.9,294.6,231.1,312.2,232.7,330.5,233,333.8,233.3,337.1,233.7,341.1,234.2,345.2,235.8,359.9,236.5,374.8,237,387.5,239.8,399.7,243,413.8,253.8,422.9,259,427.2,266.6,428.7,286.9,430.2,302.9,422.2,318.9,414.3,333.3,404.7,345.6,396.5,357.8,388.1,373.1,377.8,387.7,366.7,402.3,355.5,415.2,342.4,429.1,328.4,444,310.9]}},178).wait(12).to({startPosition:0},0).to({guide:{path:[443.9,310.9,429,241.1,356.6,247.2,298,251.9,270.5,305.1,244.1,356.1,222,409.4,200.3,461.7,171.3,512.2,142.3,562.8,121.7,582.3,101,601.9,86.1,618.2,71.2,634.5,58.8,639.7]}},65).wait(1));

	// Layer 16
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(104.8,426.9,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},180).wait(11).to({_off:false,x:174.8,y:288.9},0).to({_off:true},159).wait(11).to({_off:false,x:444.8,y:309.9},0).wait(256));

	// Layer 15
	this.instance_1 = new lib.ar6("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(337.7,314.3,1,1,20.2,0,0,-1.2,1.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(370).to({_off:false},0).wait(256));

	// Layer 12 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_400 = new cjs.Graphics().p("AzGXHQAAsJIlokQIlolMIAAQMJAAIlIlQIlIkAAMJg");
	var mask_graphics_401 = new cjs.Graphics().p("ArCCkQIYoyMIgUQMIgTIyIWQIzIXAUMIMg6kABfQgTsJIWoyg");
	var mask_graphics_402 = new cjs.Graphics().p("ArhCvQIJo/MHgnQMIgnI/IIQJBIIAnMIMg6gAC8QgnsIIIo/g");
	var mask_graphics_403 = new cjs.Graphics().p("Ar+C7QH6pMMGg7QMHg6JMH6QJNH5A7MGMg6aAEbQg7sHH6pMg");
	var mask_graphics_404 = new cjs.Graphics().p("AsaDIQHrpZMEhOQMFhOJYHsQJaHpBOMFMg6RAF4QhOsFHrpYg");
	var mask_graphics_405 = new cjs.Graphics().p("As1DWQHcpmMChhQMDhhJkHcQJmHaBiMDMg6HAHWQhhsDHbpkg");
	var mask_graphics_406 = new cjs.Graphics().p("AtODkQHNpxL/h1QL/h0JxHNQJyHKB0MAMg55AIzQh1sAHMpwg");
	var mask_graphics_407 = new cjs.Graphics().p("AtmDzQG9p8L8iIQL9iIJ7G9QJ9G6CIL9Mg5pAKQQiIr8G7p8g");
	var mask_graphics_408 = new cjs.Graphics().p("At7EDQGsqHL4ibQL5ibKHGsQKIGrCbL5Mg5YALsQibr4GsqHg");
	var mask_graphics_409 = new cjs.Graphics().p("AuQEUQGcqSL0iuQL1iuKRGcQKTGaCuL1Mg5EANJQiur1GbqRg");
	var mask_graphics_410 = new cjs.Graphics().p("AujElQGMqcLvjBQLwjBKcGMQKcGJDBLwMg4tAOkQjBrwGKqbg");
	var mask_graphics_411 = new cjs.Graphics().p("Au0E3QF7qlLqjUQLrjUKlF7QKmF5DULqMg4UAP/QjUrrF5qlg");
	var mask_graphics_412 = new cjs.Graphics().p("AvDFKQFpquLkjnQLmjnKuFqQKwFoDmLkMg35ARaQjnrmFpqug");
	var mask_graphics_413 = new cjs.Graphics().p("AvRFeQFYq3Lej6QLfj5K3FYQK5FXD5LeMg3cASzQj5rfFXq3g");
	var mask_graphics_414 = new cjs.Graphics().p("AveFzQFHrALXkMQLZkMLAFHQLAFFEMLXMg28AUMQkMrYFFq/g");
	var mask_graphics_415 = new cjs.Graphics().p("AvoGIQE0rILRkeQLSkeLHE1QLJEzEeLRMg2bAVjQkerRE0rHg");
	var mask_graphics_416 = new cjs.Graphics().p("AvxGdQEirPLKkwQLKkwLPEjQLQEhEwLJMg13AW7QkwrKEirPg");
	var mask_graphics_417 = new cjs.Graphics().p("Av5G0QEQrXLDlBQLBlCLWERQLXEOFCLCMg1QAYRQlCrDEPrVg");
	var mask_graphics_418 = new cjs.Graphics().p("Av+HLQD9rdK6lTQK5lULdD+QLdD9FUK5Mg0oAZmQlTq6D9rcg");
	var mask_graphics_419 = new cjs.Graphics().p("AwCHjQDrrjKxllQKwllLjDsQLjDqFlKwMgz9Aa6QllqxDrrig");
	var mask_graphics_420 = new cjs.Graphics().p("AwFH7QDZrpKol2QKnl2LoDZQLpDYF2KnMgzRAcNQl2qoDYrog");
	var mask_graphics_421 = new cjs.Graphics().p("AwGIUQDGruKemHQKemHLtDHQLuDEGHKdMgyiAdfQmHqeDFrtg");
	var mask_graphics_422 = new cjs.Graphics().p("AwFIuQCzrzKUmYQKTmXLzCzQLzCyGXKTMgxxAewQmYqVCyrxg");
	var mask_graphics_423 = new cjs.Graphics().p("AwCJIQCfr3KKmoQKJmoL2CgQL3CfGpKJMgw/Af+QmpqJCgr2g");
	var mask_graphics_424 = new cjs.Graphics().p("Av+JjQCMr7J/m4QJ+m5L6COQL7CLG4J/MgwKAhMQm5p/CNr5g");
	var mask_graphics_425 = new cjs.Graphics().p("Av7J0QCAr8J3nDQJ3nDL9CBQL8B+HDJ4MgvnAh/QnDp4CAr8g");
	var mask_graphics_426 = new cjs.Graphics().p("Av3KGQBzr/JwnNQJvnNL/B0QL/ByHNJwMgvDAixQnNpwBzr+g");
	var mask_graphics_427 = new cjs.Graphics().p("AvyKZQBmsBJpnYQJnnXMBBnQMABmHYJoMgueAjjQnXppBmr/g");
	var mask_graphics_428 = new cjs.Graphics().p("AvtKrQBasCJhniQJfnhMDBaQMCBZHhJhMgt4AkTQnhphBZsBg");
	var mask_graphics_429 = new cjs.Graphics().p("AvmK+QBNsEJYnsQJYnrMDBOQMEBMHsJYMgtSAlEQnrpZBNsCg");
	var mask_graphics_430 = new cjs.Graphics().p("AvfLRQBAsFJQn2QJQn1MFBBQMFA/H1JRMgsqAlzQn1pRBAsDg");
	var mask_graphics_431 = new cjs.Graphics().p("AvYLkQA0sGJIn/QJHn/MGA0QMGAzH/JIMgsCAmiQn/pJAzsEg");
	var mask_graphics_432 = new cjs.Graphics().p("AvPL3QAnsHI/oIQI/oJMGAoQMHAlIJJAMgrZAnQQoJo/AnsGg");
	var mask_graphics_433 = new cjs.Graphics().p("AvGMKQAasII3oRQI2oSMHAbQMHAZISI3MgqvAn+QoSo3AasHg");
	var mask_graphics_434 = new cjs.Graphics().p("Au8MeQANsIIuobQItobMIAOQMHAMIcIuMgqFAorQocouAOsHg");
	var mask_graphics_435 = new cjs.Graphics().p("AuyMyQAAsJImojQIkolMHACQMIgBIlIlMgpaApXQokolAAsHg");
	var mask_graphics_436 = new cjs.Graphics().p("AunNGQgMsJIcosQIbouMIgLQMHgOIuIdMgouAqCQotocgNsHg");
	var mask_graphics_437 = new cjs.Graphics().p("AubNaQgZsIITo1QIRo3MIgYQMHgaI3ITMgoBAqsQo3oSgZsHg");
	var mask_graphics_438 = new cjs.Graphics().p("AuPNvQgmsIIKo+QIIo/MHglQMHgnI/IJMgnTArXQpAoJgmsGg");
	var mask_graphics_439 = new cjs.Graphics().p("AuBODQgzsHIApHQH/pHMGgyQMGg0JIIAMgmmAsAQpIoAgysFg");
	var mask_graphics_440 = new cjs.Graphics().p("AtzOYQhAsGH2pPQH1pQMGg/QMFhAJQH2Mgl3AsoQpQn2g/sEg");
	var mask_graphics_441 = new cjs.Graphics().p("AtlOtQhMsFHspXQHspZMEhLQMEhNJYHsMglHAtQQpZnshMsDg");
	var mask_graphics_442 = new cjs.Graphics().p("AtWPCQhZsEHjpfQHhphMDhXQMDhbJgHjMgkXAt3QphnihZsCg");
	var mask_graphics_443 = new cjs.Graphics().p("AtGPXQhmsCHZpnQHXppMChkQMBhnJoHYMgjnAueQponZhmsAg");
	var mask_graphics_444 = new cjs.Graphics().p("As1PtQhzsBHOpvQHPpwL+hxQMAh0JwHOMgi2AvDQpwnOhyr+g");
	var mask_graphics_445 = new cjs.Graphics().p("AskQCQh/r/HEp2QHDp4L9h+QL9iAJ4HEMgiEAvnQp3nEh/r8g");
	var mask_graphics_446 = new cjs.Graphics().p("AsSQYQiMr9G5p+QG6p/L6iKQL7iNJ/G5MghRAwLQp/m5iLr6g");
	var mask_graphics_447 = new cjs.Graphics().p("AsAQtQiYr6GvqFQGvqGL4iXQL4iaKHGvMggfAwuQqGmviYr4g");
	var mask_graphics_448 = new cjs.Graphics().p("ArsRDQilr3GkqNQGkqNL1ikQL3ilKNGkMgfsAxPQqMmkikr1g");
	var mask_graphics_449 = new cjs.Graphics().p("ArZRZQixr1GZqTQGZqULziwQL0iyKUGZMge4AxxQqTmaixryg");
	var mask_graphics_450 = new cjs.Graphics().p("ArERvQi+ryGOqZQGPqbLvi9QLxi/KaGPMgeCAyRQqamOi9rwg");
	var mask_graphics_451 = new cjs.Graphics().p("AqvSFQjLruGEqhQGDqhLtjJQLtjLKhGDMgdNAyxQqgmEjKrsg");
	var mask_graphics_452 = new cjs.Graphics().p("AqaSbQjWrrF4qmQF4qoLpjVQLqjYKoF4MgcYAzPQqml4jXrpg");
	var mask_graphics_453 = new cjs.Graphics().p("AqDSyQjjroFtqtQFtqtLljiQLmjkKuFtMgbhAztQqtltjirlg");
	var mask_graphics_454 = new cjs.Graphics().p("ApsTIQjwrkFiqyQFiq0LhjuQLjjwKzFiMgaqA0JQqzlijurhg");
	var mask_graphics_455 = new cjs.Graphics().p("ApVTeQj7rfFWq5QFWq5Lej6QLej8K6FWMgZ0A0lQq4lWj7reg");
	var mask_graphics_456 = new cjs.Graphics().p("Ao9T1QkHrbFKq/QFLq/LakGQLakIK/FLMgY8A1AQq+lLkHrZg");
	var mask_graphics_457 = new cjs.Graphics().p("AokULQkUrXE/rDQE/rELWkTQLVkULFE/MgYEA1aQrDk/kTrVg");
	var mask_graphics_458 = new cjs.Graphics().p("AoLUiQkfrSEzrJQEzrKLRkeQLRkgLJE0MgXKA1zQrJk0kfrQg");
	var mask_graphics_459 = new cjs.Graphics().p("AnxU4QkrrOEnrNQEorPLMkqQLMksLOEnMgWSA2MQrNkokrrLg");
	var mask_graphics_460 = new cjs.Graphics().p("AnVVPQk4rIEbrTQEbrTLHk2QLHk4LUEbMgVXA2jQrTkck2rGg");
	var mask_graphics_461 = new cjs.Graphics().p("Am5VnQlErDEPrXQEPrZLBlCQLBlELZEPMgUbA25QrYkOlCrBg");
	var mask_graphics_462 = new cjs.Graphics().p("AmdV+QlPq9ECrcQECrcK8lPQK8lQLdECMgTfA3QQrckClPq8g");
	var mask_graphics_463 = new cjs.Graphics().p("Al/WWQlcq4D2rgQD2rhK2laQK1lcLhD2MgSiA3kQrgj2laq1g");
	var mask_graphics_464 = new cjs.Graphics().p("AliWtQlnqxDprlQDprkKwlmQKwloLlDpMgRlA34Qrljplmqwg");
	var mask_graphics_465 = new cjs.Graphics().p("AlDXFQlzqrDcrpQDdroKplyQKqlzLpDcMgQoA4LQrpjdlxqpg");
	var mask_graphics_466 = new cjs.Graphics().p("AkkXdQl/qlDQrtQDQrrKjl9QKjl/LtDPMgPrA4cQrtjQl8qig");
	var mask_graphics_467 = new cjs.Graphics().p("AkFX0QmKqeDDrwQDDrvKdmJQKcmKLwDDMgOtA4sQrwjDmIqcg");
	var mask_graphics_468 = new cjs.Graphics().p("AjlYMQmVqXC2r0QC2ryKWmUQKVmWL0C2MgNvA48Qrzi2mUqVg");
	var mask_graphics_469 = new cjs.Graphics().p("AjEYjQmhqQCpr2QCpr1KPmfQKPmiL2CqMgMxA5KQr2ipmeqPg");
	var mask_graphics_470 = new cjs.Graphics().p("AijY7QmsqJCcr5QCcr4KImqQKImtL4CdMgLyA5XQr5icmpqHg");
	var mask_graphics_471 = new cjs.Graphics().p("AiCZSQm2qBCPr8QCPr6KAm2QKAm3L8CQMgK0A5jQr7iPm1qAg");
	var mask_graphics_472 = new cjs.Graphics().p("AhgZqQnBp6CCr+QCCr9J5nAQJ4nCL+CCMgJ0A5vQr+iCnAp4g");
	var mask_graphics_473 = new cjs.Graphics().p("Ag9aBQnMpyB1sAQB1r/JxnLQJwnMMAB1MgI1A55QsAh1nKpxg");
	var mask_graphics_474 = new cjs.Graphics().p("AgaaYQnXpqBosCQBosAJpnWQJpnXMCBoMgH3A6CQsBhonVppg");
	var mask_graphics_475 = new cjs.Graphics().p("AAIawQngpiBbsEQBbsCJhngQJgniMEBbMgG3A6KQsDhbnhpgg");
	var mask_graphics_476 = new cjs.Graphics().p("AAsbHQnqpaBNsFQBOsDJZnrQJYnsMFBOMgF3A6RQsFhOnrpYg");
	var mask_graphics_477 = new cjs.Graphics().p("ABRbeQn1pRBAsGQBBsFJQn1QJQn2MGBBMgE4A6WQsGhAn0pQg");
	var mask_graphics_478 = new cjs.Graphics().p("AB2b1Qn/pIAzsHQAzsGJIn/QJHoAMHAzMgD4A6cQsHg0n+pHg");
	var mask_graphics_479 = new cjs.Graphics().p("ACbcMQoJpAAmsHQAmsHI/oJQI+oKMIAnMgC4A6eQsIgmoIo+g");
	var mask_graphics_480 = new cjs.Graphics().p("ADBcjQoTo3AZsIQAZsHI2oSQI1oUMIAZMgB4A6hQsIgZoSo1g");
	var mask_graphics_481 = new cjs.Graphics().p("ADnc6QocouALsIQAMsIIsocQItodMIAMMgA4A6jQsJgMobosg");
	var mask_graphics_482 = new cjs.Graphics().p("AEJdQQolokgCsJQgCsHIkolQIjonMIgBMAAIA6jIgFAAQsFAAokoig");
	var mask_graphics_483 = new cjs.Graphics().p("AEQdnQovobgPsJQgOsHIaouQIZowMIgPMABIA6iIgqABQrtAAogoLg");
	var mask_graphics_484 = new cjs.Graphics().p("AEXd8Qo4oRgcsIQgcsHIQo3QIQo5MIgcMACIA6gIhOACQrXAAobn2g");
	var mask_graphics_485 = new cjs.Graphics().p("AEheZQpDoFgusHQgtsGIDpDQIDpFMHgtMADcA6cQg/AEg+AAQq5AAoVnZg");
	var mask_graphics_486 = new cjs.Graphics().p("AEse0QpPn3g/sGQg+sFH2pPQH2pQMGg+MAEvA6WQhWAHhUAAQqeAAoNm+g");
	var mask_graphics_487 = new cjs.Graphics().p("AE4fOQpanphQsFQhQsDHppaQHopaMEhRMAGCA6PQhsALhqAAQqDAAoEmkg");
	var mask_graphics_488 = new cjs.Graphics().p("AFEfoQplnchhsCQhisCHdpkQHZplMDhiMAHVA6FQiDAQh+AAQppAAn8mKg");
	var mask_graphics_489 = new cjs.Graphics().p("EAFQAgBQpvnOhysAQhzsAHPpuQHMpwMAhyMAIoA55QiZAXiTAAQpQAAnzlyg");
	var mask_graphics_490 = new cjs.Graphics().p("EAFeAgaQp6nBiDr9QiEr9HBp4QG9p6L9iDMAJ8A5rQiuAeioAAQo3AAnplZg");
	var mask_graphics_491 = new cjs.Graphics().p("EAFsAgxQqDmyiVr6QiVr6GyqBQGwqEL6iVMALNA5cQjDAmi7AAQogAAnelCg");
	var mask_graphics_492 = new cjs.Graphics().p("EAF6AhIQqMmjimr3Qimr2GkqLQGhqOL2imMAMgA5MQjXAvjPAAQoKAAnTksg");
	var mask_graphics_493 = new cjs.Graphics().p("EAGKAheQqWmVi3ryQi3ryGVqVQGTqXLyi2MANxA44QjrA5jiAAQnzAAnHkWg");
	var mask_graphics_494 = new cjs.Graphics().p("EAGZAhzQqemFjIrvQjHruGGqdQGDqfLujIMAPCA4jQj+BEj1AAQneAAm7kBg");
	var mask_graphics_495 = new cjs.Graphics().p("EAGqAiIQqol3jYrpQjYrqF3qmQF0qoLqjYMAQTA4NQkSBPkIAAQnJAAmtjsg");
	var mask_graphics_496 = new cjs.Graphics().p("EAG7AibQqwlnjorkQjprlFnquQFlqwLljoMARjA30QkkBbkbAAQm0AAmgjZg");
	var mask_graphics_497 = new cjs.Graphics().p("EAHMAiuQq3lYj5rfQj5rfFYq1QFWq4Lej5MASyA3aQk1BpkuAAQmgAAmSjHg");
	var mask_graphics_498 = new cjs.Graphics().p("EAHeAjAQq+lIkKrZQkKrZFJq+QFHq/LYkJMAUBA2+QlGB3lCAAQmLAAmEi1g");
	var mask_graphics_499 = new cjs.Graphics().p("EAHxAjRQrGk4karTQkZrTE4rEQE3rHLSkZMAVQA2gQlYCGlUAAQl4AAl0ikg");
	var mask_graphics_500 = new cjs.Graphics().p("EAIEAjiQrNkpkprMQkqrMEprMQEmrNLMkqMAWdA2BQlnCWloAAQllAAlkiTg");
	var mask_graphics_501 = new cjs.Graphics().p("EAIYAjxQrTkYk6rFQk6rGEZrSQEXrTLEk6MAXqA1gQl3Cml7AAQlRAAlUiEg");
	var mask_graphics_502 = new cjs.Graphics().p("EAIsAkAQrZkIlKq+QlJq/EIrXQEHraK9lJMAY2A09QmGC3mPAAQk+AAlDh1g");
	var mask_graphics_503 = new cjs.Graphics().p("EAJBAkOQrfj4lZq2QlZq3D4reQD2rfK2lZMAaBA0YQmVDKmiAAQkrAAkyhng");
	var mask_graphics_504 = new cjs.Graphics().p("EAJWAkbQrkjnlpqvQloqvDnriQDmrlKuloMAbMAzyQmjDcm3AAQkYAAkghag");
	var mask_graphics_505 = new cjs.Graphics().p("EAJsAknQrpjWl4qnQl4qmDXrpQDVroKml4MAcVAzKQmwDvnLAAQkGAAkNhNg");
	var mask_graphics_506 = new cjs.Graphics().p("EAKCAkyQrtjFmHqeQmHqeDGrtQDErtKdmHMAdfAygQm+EEngAAQjyAAj7hCg");
	var mask_graphics_507 = new cjs.Graphics().p("EAKZAk9Qryi1mWqVQmVqVC1rxQCzrxKUmWMAemAx1QnJEZn2AAQjfAAjng3g");
	var mask_graphics_508 = new cjs.Graphics().p("EAKwAlGQr2ikmkqLQmkqMCkr1QCjr1KKmkMAftAxIQnVEvoMAAQjLAAjUgug");
	var mask_graphics_509 = new cjs.Graphics().p("EALIAlOQr5iTmzqCQmzqCCUr5QCRr4KBmzMAgzAwbQnhFFoiAAQi4AAi/glg");
	var mask_graphics_510 = new cjs.Graphics().p("EALgAlWQr9iCnBp4QnBp5CDr7QCBr8J4nBMAh2AvrQnrFdo6AAQikAAiqgdg");
	var mask_graphics_511 = new cjs.Graphics().p("EAL4AldQr/hxnPpuQnPpvByr+QBvr+JunPMAi6Au6Qn1F0pSAAQiQAAiVgVg");
	var mask_graphics_512 = new cjs.Graphics().p("EAMQAliQsChfnbpkQndpkBgsBQBfsAJjndMAj8AuIQn+GNpqAAQh8AAiAgQg");
	var mask_graphics_513 = new cjs.Graphics().p("EAMqAlnQsFhOnppZQnqpZBPsDQBOsCJZnqMAk9AtTQoHGnqEAAQhnAAhpgLg");
	var mask_graphics_514 = new cjs.Graphics().p("EANDAlrQsGg9n2pOQn4pOA+sEQA9sEJOn4MAl9AsfQoPHBqeAAQhSAAhTgHg");
	var mask_graphics_515 = new cjs.Graphics().p("EANdAluQsHgsoEpCQoEpDAtsGQArsFJCoEMAm8AroQoVHcq6AAQg8AAg8gEg");
	var mask_graphics_516 = new cjs.Graphics().p("EAN3AlwQsIgaoQo3QoRo3AbsHQAasGI3oRMAn6AqwQocH4rXAAIhKgCg");
	var mask_graphics_517 = new cjs.Graphics().p("EAOSAlxQsJgJocorQoeorAKsHQAJsGIroeMAo2Ap2QoiIVr1AAIgagBg");
	var mask_graphics_518 = new cjs.Graphics().p("AmFdaQoqofgHsHQgIsGIfoqMApwAo8QofIqsGAHIgWABQr6AAohoYg");
	var mask_graphics_519 = new cjs.Graphics().p("Al1d3Qo2oSgYsHQgasGISo2MAqrAoAQoTI2sFAZIhGABQrcAAobn7g");
	var mask_graphics_520 = new cjs.Graphics().p("AlleTQpBoGgqsGQgrsFIGpBMArjAnCQoGJBsFArQg6ADg6AAQq/AAoVnfg");
	var mask_graphics_521 = new cjs.Graphics().p("AlTeuQpNn4g7sFQg8sEH5pNMAsaAmDQn5JNsEA8QhSAGhPAAQqjAAoOnEg");
	var mask_graphics_522 = new cjs.Graphics().p("AlBfJQpYnshLsDQhOsCHrpZMAtQAlEQnsJYsCBNQhoAKhmAAQqIAAoGmpg");
	var mask_graphics_523 = new cjs.Graphics().p("AktfjQpjnehdsCQhfsBHepiMAuEAkCQneJjsBBeQh+AQh6AAQpvAAn9mQg");
	var mask_graphics_524 = new cjs.Graphics().p("AkZf8QptnQhusAQhwr/HQptMAu3AjBQnRJur+BuQiUAWiPAAQpVAAn1l3g");
	var mask_graphics_525 = new cjs.Graphics().p("EgEEAgUQp3nCh/r9QiBr9HCp2MAvoAh9QnCJ4r8CAQiqAcijAAQo9AAnrlfg");
	var mask_graphics_526 = new cjs.Graphics().p("EgDtAgsQqCm0iQr6QiSr6G0qAMAwYAg5Qm0KBr5CRQi+Aki3AAQomAAnglHg");
	var mask_graphics_527 = new cjs.Graphics().p("EgDWAhDQqLmmihr3Qijr2GmqKMAxGAf0QmmKLr2CiQjSAtjLAAQoPAAnVkxg");
	var mask_graphics_528 = new cjs.Graphics().p("EgC+AhZQqVmYixryQi0rzGXqTMAxzAetQmYKVrxCyQjnA3jeAAQn4AAnKkbg");
	var mask_graphics_529 = new cjs.Graphics().p("EgClAhuQqemJjCruQjFruGJqdMAydAdmQmIKeruDDQj6BBjwAAQnkAAm9kGg");
	var mask_graphics_530 = new cjs.Graphics().p("EgCMAiDQqll6jUrqQjVrqF6qlMAzHAceQl6KmrpDUQkNBMkEAAQnOAAmxjxg");
	var mask_graphics_531 = new cjs.Graphics().p("EgBxAiWQqulqjkrlQjmrlFrqtMAzvAbUQlrKurkDlQkfBZkXAAQm5AAmkjfg");
	var mask_graphics_532 = new cjs.Graphics().p("EgBVAipQq3lbj0rgQj2rfFbq1MA0VAaKQlbK2rfD1QkxBmkqAAQmlAAmVjMg");
	var mask_graphics_533 = new cjs.Graphics().p("EgA5Ai8Qq+lMkErbQkHrZFMq9MA05AY/QlLK+rZEFQlDB0k9AAQmRAAmHi5g");
	var mask_graphics_534 = new cjs.Graphics().p("EgAcAjNQrFk8kVrVQkWrTE8rEMA1cAX0Qk8LErTEWQlTCClQAAQl+AAl4iog");
	var mask_graphics_535 = new cjs.Graphics().p("EAABAjdQrLksklrOQkmrNEsrLMA1+AWnQktLMrMElQlkCSljAAQlrAAlpiYg");
	var mask_graphics_536 = new cjs.Graphics().p("EAAgAjtQrSkck0rIQk3rGEcrSMA2dAVbQkcLSrGE1QlzCil3AAQlXAAlZiIg");
	var mask_graphics_537 = new cjs.Graphics().p("EAA/Aj8QrXkMlFrAQlGrAEMrYMA27AUNQkMLYq/FFQmDCzmKAAQlEAAlJh5g");
	var mask_graphics_538 = new cjs.Graphics().p("EABfAkKQrdj8lUq5QlWq4D8rdMA3XAS+Qj8Leq4FUQmRDFmeAAQkxAAk4hrg");
	var mask_graphics_539 = new cjs.Graphics().p("EACAAkXQrijrlkqxQllqxDrrjMA3xARvQjrLkqwFkQmgDXmyAAQkeAAkmheg");
	var mask_graphics_540 = new cjs.Graphics().p("EACiAkkQrojblyqqQl1qoDbrpMA4KAQgQjbLpqoFzQmuDrnGAAQkLAAkUhRg");
	var mask_graphics_541 = new cjs.Graphics().p("EADFAkvQrtjKmCqhQmDqgDKrtMA4gAPPQjKLuqgGCQm6D/nbAAQj4AAkBhGg");
	var mask_graphics_542 = new cjs.Graphics().p("EADoAk6Qrxi6mRqYQmSqXC5ryMA41AN/Qi5LyqXGRQnHETnwAAQjlAAjug6g");
	var mask_graphics_543 = new cjs.Graphics().p("EAELAlEQr0ipmgqPQmhqOCpr2MA5IAMuQioL2qOGfQnTEpoGAAQjSAAjbgwg");
	var mask_graphics_544 = new cjs.Graphics().p("EAEwAlMQr5iXmuqGQmvqFCXr5MA5aALcQiXL6qFGuQneE/odAAQi+AAjGgog");
	var mask_graphics_545 = new cjs.Graphics().p("EAFrAlZQr9h9nFp2QnGp1B8r+MA5yAJZQh8L/p1HEQnvFlpCAAQifAAilgbg");
	var mask_graphics_546 = new cjs.Graphics().p("EAGoAljQsChhnapmQndplBisCMA6FAHWQhhMCpkHbQn+GMpqAAQh+AAiDgRg");
	var mask_graphics_547 = new cjs.Graphics().p("EAHmAlrQsEhGnxpVQnxpTBGsGMA6UAFSQhGMFpTHxQoLG0qUAAQhcAAhggIg");
	var mask_graphics_548 = new cjs.Graphics().p("EAImAlwQsGgqoGpDQoHpCArsHMA6fADNQgrMIpBIFQoXHfq/AAQg6AAg7gDg");
	var mask_graphics_549 = new cjs.Graphics().p("EAJoAlzQsIgPoZowQobovAPsJMA6kABIQgPMJovIaQohIMruAAIgqAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(400).to({graphics:mask_graphics_400,x:252.7,y:147.9}).wait(1).to({graphics:mask_graphics_401,x:252.7,y:150.3}).wait(1).to({graphics:mask_graphics_402,x:252.6,y:152.6}).wait(1).to({graphics:mask_graphics_403,x:252.5,y:155}).wait(1).to({graphics:mask_graphics_404,x:252.2,y:157.3}).wait(1).to({graphics:mask_graphics_405,x:252,y:159.7}).wait(1).to({graphics:mask_graphics_406,x:251.6,y:162}).wait(1).to({graphics:mask_graphics_407,x:251.2,y:164.3}).wait(1).to({graphics:mask_graphics_408,x:250.8,y:166.6}).wait(1).to({graphics:mask_graphics_409,x:250.3,y:169}).wait(1).to({graphics:mask_graphics_410,x:249.7,y:171.2}).wait(1).to({graphics:mask_graphics_411,x:249.1,y:173.5}).wait(1).to({graphics:mask_graphics_412,x:248.4,y:175.8}).wait(1).to({graphics:mask_graphics_413,x:247.7,y:178}).wait(1).to({graphics:mask_graphics_414,x:246.9,y:180.2}).wait(1).to({graphics:mask_graphics_415,x:246.1,y:182.4}).wait(1).to({graphics:mask_graphics_416,x:245.2,y:184.6}).wait(1).to({graphics:mask_graphics_417,x:244.2,y:186.8}).wait(1).to({graphics:mask_graphics_418,x:243.2,y:188.9}).wait(1).to({graphics:mask_graphics_419,x:242.1,y:191}).wait(1).to({graphics:mask_graphics_420,x:241,y:193.1}).wait(1).to({graphics:mask_graphics_421,x:239.8,y:195.1}).wait(1).to({graphics:mask_graphics_422,x:238.6,y:197.2}).wait(1).to({graphics:mask_graphics_423,x:237.4,y:199.1}).wait(1).to({graphics:mask_graphics_424,x:236,y:201.1}).wait(1).to({graphics:mask_graphics_425,x:235.1,y:202.4}).wait(1).to({graphics:mask_graphics_426,x:234.2,y:203.6}).wait(1).to({graphics:mask_graphics_427,x:233.3,y:204.9}).wait(1).to({graphics:mask_graphics_428,x:232.3,y:206.1}).wait(1).to({graphics:mask_graphics_429,x:231.4,y:207.3}).wait(1).to({graphics:mask_graphics_430,x:230.4,y:208.5}).wait(1).to({graphics:mask_graphics_431,x:229.4,y:209.7}).wait(1).to({graphics:mask_graphics_432,x:228.4,y:210.8}).wait(1).to({graphics:mask_graphics_433,x:227.3,y:212}).wait(1).to({graphics:mask_graphics_434,x:226.3,y:213.1}).wait(1).to({graphics:mask_graphics_435,x:225.2,y:214.2}).wait(1).to({graphics:mask_graphics_436,x:224.1,y:215.3}).wait(1).to({graphics:mask_graphics_437,x:223,y:216.3}).wait(1).to({graphics:mask_graphics_438,x:221.8,y:217.4}).wait(1).to({graphics:mask_graphics_439,x:220.7,y:218.4}).wait(1).to({graphics:mask_graphics_440,x:219.5,y:219.4}).wait(1).to({graphics:mask_graphics_441,x:218.3,y:220.4}).wait(1).to({graphics:mask_graphics_442,x:217.1,y:221.4}).wait(1).to({graphics:mask_graphics_443,x:215.9,y:222.4}).wait(1).to({graphics:mask_graphics_444,x:214.7,y:223.3}).wait(1).to({graphics:mask_graphics_445,x:213.4,y:224.2}).wait(1).to({graphics:mask_graphics_446,x:212.1,y:225.1}).wait(1).to({graphics:mask_graphics_447,x:210.9,y:226}).wait(1).to({graphics:mask_graphics_448,x:209.6,y:226.8}).wait(1).to({graphics:mask_graphics_449,x:208.3,y:227.7}).wait(1).to({graphics:mask_graphics_450,x:206.9,y:228.5}).wait(1).to({graphics:mask_graphics_451,x:205.6,y:229.3}).wait(1).to({graphics:mask_graphics_452,x:204.3,y:230}).wait(1).to({graphics:mask_graphics_453,x:202.9,y:230.8}).wait(1).to({graphics:mask_graphics_454,x:201.5,y:231.5}).wait(1).to({graphics:mask_graphics_455,x:200.2,y:232.2}).wait(1).to({graphics:mask_graphics_456,x:198.8,y:232.9}).wait(1).to({graphics:mask_graphics_457,x:197.4,y:233.5}).wait(1).to({graphics:mask_graphics_458,x:195.9,y:234.2}).wait(1).to({graphics:mask_graphics_459,x:194.5,y:234.7}).wait(1).to({graphics:mask_graphics_460,x:193.1,y:235.3}).wait(1).to({graphics:mask_graphics_461,x:191.6,y:235.8}).wait(1).to({graphics:mask_graphics_462,x:190.1,y:236.4}).wait(1).to({graphics:mask_graphics_463,x:188.5,y:236.9}).wait(1).to({graphics:mask_graphics_464,x:187,y:237.4}).wait(1).to({graphics:mask_graphics_465,x:185.5,y:237.9}).wait(1).to({graphics:mask_graphics_466,x:184,y:238.3}).wait(1).to({graphics:mask_graphics_467,x:182.4,y:238.7}).wait(1).to({graphics:mask_graphics_468,x:180.9,y:239.1}).wait(1).to({graphics:mask_graphics_469,x:179.3,y:239.5}).wait(1).to({graphics:mask_graphics_470,x:177.7,y:239.8}).wait(1).to({graphics:mask_graphics_471,x:176.2,y:240.1}).wait(1).to({graphics:mask_graphics_472,x:174.6,y:240.4}).wait(1).to({graphics:mask_graphics_473,x:173,y:240.7}).wait(1).to({graphics:mask_graphics_474,x:171.5,y:240.9}).wait(1).to({graphics:mask_graphics_475,x:169.9,y:241.1}).wait(1).to({graphics:mask_graphics_476,x:168.3,y:241.3}).wait(1).to({graphics:mask_graphics_477,x:166.7,y:241.4}).wait(1).to({graphics:mask_graphics_478,x:165.1,y:241.6}).wait(1).to({graphics:mask_graphics_479,x:163.5,y:241.6}).wait(1).to({graphics:mask_graphics_480,x:161.9,y:241.7}).wait(1).to({graphics:mask_graphics_481,x:160.3,y:241.8}).wait(1).to({graphics:mask_graphics_482,x:159.1,y:241.8}).wait(1).to({graphics:mask_graphics_483,x:160.7,y:241.8}).wait(1).to({graphics:mask_graphics_484,x:162.3,y:241.8}).wait(1).to({graphics:mask_graphics_485,x:164.4,y:241.8}).wait(1).to({graphics:mask_graphics_486,x:166.5,y:241.8}).wait(1).to({graphics:mask_graphics_487,x:168.5,y:241.8}).wait(1).to({graphics:mask_graphics_488,x:170.6,y:241.8}).wait(1).to({graphics:mask_graphics_489,x:172.7,y:241.9}).wait(1).to({graphics:mask_graphics_490,x:174.8,y:241.9}).wait(1).to({graphics:mask_graphics_491,x:176.8,y:241.9}).wait(1).to({graphics:mask_graphics_492,x:178.9,y:242}).wait(1).to({graphics:mask_graphics_493,x:180.9,y:242}).wait(1).to({graphics:mask_graphics_494,x:182.9,y:242}).wait(1).to({graphics:mask_graphics_495,x:185,y:242}).wait(1).to({graphics:mask_graphics_496,x:187,y:242}).wait(1).to({graphics:mask_graphics_497,x:188.9,y:242.1}).wait(1).to({graphics:mask_graphics_498,x:190.9,y:242.1}).wait(1).to({graphics:mask_graphics_499,x:192.9,y:242.1}).wait(1).to({graphics:mask_graphics_500,x:194.8,y:242.1}).wait(1).to({graphics:mask_graphics_501,x:196.7,y:242.1}).wait(1).to({graphics:mask_graphics_502,x:198.6,y:242.1}).wait(1).to({graphics:mask_graphics_503,x:200.5,y:242.1}).wait(1).to({graphics:mask_graphics_504,x:202.4,y:242.1}).wait(1).to({graphics:mask_graphics_505,x:204.2,y:242}).wait(1).to({graphics:mask_graphics_506,x:206.1,y:242}).wait(1).to({graphics:mask_graphics_507,x:207.8,y:242}).wait(1).to({graphics:mask_graphics_508,x:209.6,y:242}).wait(1).to({graphics:mask_graphics_509,x:211.4,y:241.9}).wait(1).to({graphics:mask_graphics_510,x:213.1,y:241.9}).wait(1).to({graphics:mask_graphics_511,x:214.8,y:241.8}).wait(1).to({graphics:mask_graphics_512,x:216.4,y:241.8}).wait(1).to({graphics:mask_graphics_513,x:218.1,y:241.8}).wait(1).to({graphics:mask_graphics_514,x:219.7,y:241.8}).wait(1).to({graphics:mask_graphics_515,x:221.2,y:241.8}).wait(1).to({graphics:mask_graphics_516,x:222.8,y:241.8}).wait(1).to({graphics:mask_graphics_517,x:224.3,y:241.8}).wait(1).to({graphics:mask_graphics_518,x:225.7,y:241.8}).wait(1).to({graphics:mask_graphics_519,x:227.2,y:241.8}).wait(1).to({graphics:mask_graphics_520,x:228.6,y:241.8}).wait(1).to({graphics:mask_graphics_521,x:230,y:241.8}).wait(1).to({graphics:mask_graphics_522,x:231.3,y:241.8}).wait(1).to({graphics:mask_graphics_523,x:232.6,y:241.9}).wait(1).to({graphics:mask_graphics_524,x:233.9,y:241.9}).wait(1).to({graphics:mask_graphics_525,x:235.1,y:241.9}).wait(1).to({graphics:mask_graphics_526,x:236.3,y:241.9}).wait(1).to({graphics:mask_graphics_527,x:237.5,y:242}).wait(1).to({graphics:mask_graphics_528,x:238.6,y:242}).wait(1).to({graphics:mask_graphics_529,x:239.6,y:242}).wait(1).to({graphics:mask_graphics_530,x:240.7,y:242}).wait(1).to({graphics:mask_graphics_531,x:241.7,y:242.1}).wait(1).to({graphics:mask_graphics_532,x:242.6,y:242.1}).wait(1).to({graphics:mask_graphics_533,x:243.5,y:242.1}).wait(1).to({graphics:mask_graphics_534,x:244.4,y:242.1}).wait(1).to({graphics:mask_graphics_535,x:245.3,y:242.1}).wait(1).to({graphics:mask_graphics_536,x:246,y:242.1}).wait(1).to({graphics:mask_graphics_537,x:246.8,y:242.1}).wait(1).to({graphics:mask_graphics_538,x:247.5,y:242.1}).wait(1).to({graphics:mask_graphics_539,x:248.1,y:242.1}).wait(1).to({graphics:mask_graphics_540,x:248.8,y:242.1}).wait(1).to({graphics:mask_graphics_541,x:249.3,y:242.1}).wait(1).to({graphics:mask_graphics_542,x:249.8,y:242}).wait(1).to({graphics:mask_graphics_543,x:250.3,y:242}).wait(1).to({graphics:mask_graphics_544,x:250.7,y:242}).wait(1).to({graphics:mask_graphics_545,x:251.3,y:242}).wait(1).to({graphics:mask_graphics_546,x:251.8,y:242}).wait(1).to({graphics:mask_graphics_547,x:252.2,y:241.9}).wait(1).to({graphics:mask_graphics_548,x:252.5,y:241.9}).wait(1).to({graphics:mask_graphics_549,x:252.7,y:241.9}).wait(77));

	// Layer 11
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(20,1,1).p("A0jrKQBhgxAVgHQBUgcBVAtQBVAtAdA+QAdA+AkBwQAWCNASB3QARB4AGCOQAGCQAODDQAODEBTBjQBSBkCVgCQCPgDCFgsQB8gqB5g+QB6g+B6hMQB6hLB4hlQB4hkBzhcQByhdBlhpQBghjBfhmQA2g6AdgjQAPgSAIgM");
	this.shape_1.setTransform(313.1,349.6);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(400).to({_off:false},0).wait(226));

	// Layer 10 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_370 = new cjs.Graphics().p("Azkc5QolokAAsJMA6lAAAQAAMJolIkQolImsJAAQsIAAolomg");
	var mask_1_graphics_371 = new cjs.Graphics().p("EgB5AlTQsFhTnmpdQnopcBTsFMA6QAGSQhTMEpcHnQoFGgqAAAQhsAAhwgMg");
	var mask_1_graphics_372 = new cjs.Graphics().p("EgEvAkyQr3ilmjqOQmkqNClr3MA5PAMeQilL3qNGjQnVEuoMAAQjNAAjWgvg");
	var mask_1_graphics_373 = new cjs.Graphics().p("EgHWAj8Qrhj1laq3Qldq2D2rgMA3lASgQj2Lhq1FbQmYDMmmAAQkpAAkxhmg");
	var mask_1_graphics_374 = new cjs.Graphics().p("EgJrAiyQrDlCkOrYQkQrYFDrBMA1RAYVQlDLDrWEPQlNB8lIAAQmFAAmAiwg");
	var mask_1_graphics_375 = new cjs.Graphics().p("EgLuAhWQqcmMi/rxQjBrwGNqbMAyXAd5QmMKcrwDAQj2A+jsABQnoAAnCkMg");
	var mask_1_graphics_376 = new cjs.Graphics().p("AtdfoQpunShtsBQhvsAHSptMAu4AjIQnSJtsABuQiTAWiOAAQpWAAn3l5g");
	var mask_1_graphics_377 = new cjs.Graphics().p("Au2doQo5oRgasIQgdsHISo5MAq3An8QoSI4sHAcIhMABQrYAAocn4g");
	var mask_1_graphics_378 = new cjs.Graphics().p("EAEKAlbQsHg4n8pLQn9pMA5sGQA3sGJLn8MAmWAsSQoSHLqoAAQhLAAhMgGg");
	var mask_1_graphics_379 = new cjs.Graphics().p("EACSAlBQr8iKm7p/Qm7p+CMr8QCJr7J/m7MAhXAwJQnmFRovAAQivAAi1ghg");
	var mask_1_graphics_380 = new cjs.Graphics().p("EAAkAkSQrpjbl0qqQl0qrDdrnQDarpKql0MAcCAzbQmtDqnGAAQkLAAkUhRg");
	var mask_1_graphics_381 = new cjs.Graphics().p("EgA9AjQQrOkrkprOQkprOEqrLQEprOLOkpMAWYA2JQlnCUlmAAQlnAAlliUg");
	var mask_1_graphics_382 = new cjs.Graphics().p("EgCUAh6Qqql1jarqQjbrqF2qoQF0qpLojbMAQeA4OQkUBRkKAAQnHAAmsjqg");
	var mask_1_graphics_383 = new cjs.Graphics().p("EgDdAgSQp+m8iJr9QiKr9G8p8QG7p+L8iJMAKXA5qQi2AgitAAQoxAAnllRg");
	var mask_1_graphics_384 = new cjs.Graphics().p("AkYeYQpLn+g3sHQg2sGH9pKQH8pLMHg2MAEIA6bQhLAGhKAAQqrAAoQnLg");
	var mask_1_graphics_385 = new cjs.Graphics().p("AmIcOQoSo6AdsIQAcsII6oQQI3oRMIAdMgCJA6iQsJgcoOo4g");
	var mask_1_graphics_386 = new cjs.Graphics().p("AptZ9QnSpvBwsBQBvsAJvnQQJsnRMBBvMgIZA5/QsAhwnQptg");
	var mask_1_graphics_387 = new cjs.Graphics().p("As/XqQmMqdDBrxQDBrvKcmLQKbmMLxDBMgOkA4vQrvjBmLqbg");
	var mask_1_graphics_388 = new cjs.Graphics().p("Av8VXQlCrEEQrXQEQrXLDlBQLBlDLYEQMgUiA24QrXkRlBrBg");
	var mask_1_graphics_389 = new cjs.Graphics().p("AyiTEQj1riFdq1QFdq3LgjzQLhj1K2FcMgaSA0XQq2ldj0rgg");
	var mask_1_graphics_390 = new cjs.Graphics().p("A0uQ1Qilr4GlqNQGlqNL2ijQL3ilKNGlMgfuAxPQqOmlijr1g");
	var mask_1_graphics_391 = new cjs.Graphics().p("A2gOpQhSsFHopbQHppcMDhRQMEhTJcHoMgk0AtkQpcnphSsDg");
	var mask_1_graphics_392 = new cjs.Graphics().p("A31MkQABsJImokQImokMHACQMJAAIkImMgpeApXQolomACsIg");
	var mask_1_graphics_393 = new cjs.Graphics().p("A4uKnQBUsEJennQJenmMDBVQMDBTHnJeMgtqAkrQnnpdBUsDg");
	var mask_1_graphics_394 = new cjs.Graphics().p("A5JIyQCnr2KOmjQKOmjL2CnQL2ClGjKOMgxUAfmQmjqOClr2g");
	var mask_1_graphics_395 = new cjs.Graphics().p("A5FHIQD3rgK3lbQK2lbLgD4QLhD1FbK3Mg0bAaJQlbq3D2rgg");
	var mask_1_graphics_396 = new cjs.Graphics().p("A4kFqQFErCLZkOQLXkPLCFFQLCFDEOLXMg27AUZQkOrZFDrAg");
	var mask_1_graphics_397 = new cjs.Graphics().p("A3lEYQGOqbLxi/QLxi/KaGOQKcGMC/LxMg4zAOZQi+rxGMqag");
	var mask_1_graphics_398 = new cjs.Graphics().p("A2JDTQHTpsMChtQMAhuJsHUQJtHQBuMCMg6AAIPQhtsCHRpsg");
	var mask_1_graphics_399 = new cjs.Graphics().p("A0RCeQITo3MIgbQMIgaI3ISQI4IRAaMJMg6jAB/QgasJIRo2g");
	var mask_1_graphics_400 = new cjs.Graphics().p("A8FTvQA4sHJLn6QJNn8MGA5QMHA5H6JLQH8JLg5MHg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(370).to({graphics:mask_1_graphics_370,x:194.8,y:239.9}).wait(1).to({graphics:mask_1_graphics_371,x:194.3,y:239.9}).wait(1).to({graphics:mask_1_graphics_372,x:192.7,y:240.1}).wait(1).to({graphics:mask_1_graphics_373,x:190.1,y:240.2}).wait(1).to({graphics:mask_1_graphics_374,x:186.4,y:240.2}).wait(1).to({graphics:mask_1_graphics_375,x:181.8,y:240.2}).wait(1).to({graphics:mask_1_graphics_376,x:176.3,y:240.1}).wait(1).to({graphics:mask_1_graphics_377,x:169.9,y:240}).wait(1).to({graphics:mask_1_graphics_378,x:162.7,y:240.1}).wait(1).to({graphics:mask_1_graphics_379,x:154.7,y:240.2}).wait(1).to({graphics:mask_1_graphics_380,x:146.2,y:240.3}).wait(1).to({graphics:mask_1_graphics_381,x:137.2,y:240.4}).wait(1).to({graphics:mask_1_graphics_382,x:127.7,y:240.4}).wait(1).to({graphics:mask_1_graphics_383,x:118,y:240.3}).wait(1).to({graphics:mask_1_graphics_384,x:108,y:240.3}).wait(1).to({graphics:mask_1_graphics_385,x:104.8,y:240.2}).wait(1).to({graphics:mask_1_graphics_386,x:114.8,y:239.4}).wait(1).to({graphics:mask_1_graphics_387,x:124.7,y:237.4}).wait(1).to({graphics:mask_1_graphics_388,x:134.2,y:234.5}).wait(1).to({graphics:mask_1_graphics_389,x:143.4,y:230.5}).wait(1).to({graphics:mask_1_graphics_390,x:152.1,y:225.5}).wait(1).to({graphics:mask_1_graphics_391,x:160.2,y:219.7}).wait(1).to({graphics:mask_1_graphics_392,x:167.6,y:213}).wait(1).to({graphics:mask_1_graphics_393,x:174.3,y:205.5}).wait(1).to({graphics:mask_1_graphics_394,x:180.1,y:197.4}).wait(1).to({graphics:mask_1_graphics_395,x:185.1,y:188.7}).wait(1).to({graphics:mask_1_graphics_396,x:189,y:179.5}).wait(1).to({graphics:mask_1_graphics_397,x:192,y:169.9}).wait(1).to({graphics:mask_1_graphics_398,x:193.9,y:160.1}).wait(1).to({graphics:mask_1_graphics_399,x:194.7,y:150.1}).wait(1).to({graphics:mask_1_graphics_400,x:194.7,y:153.7}).wait(226));

	// Layer 6
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(20,1,1).p("AisAhQBigvAUgHQBTgdBVAtQAiASAZAU");
	this.shape_2.setTransform(198.8,274.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(20,1,1).p("AjohXQBigwAUgHQBUgdBUAtQBVAuAdA+QAdA9AkBv");
	this.shape_3.setTransform(204.8,286.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(20,1,1).p("A0lrMQBigxAVgHQBTgcBVAtQBWAtAcA+QAdA+AkBwQAXCNAVCNQAWCRADCXQAECYAICQQAICRBOB6QBOB7CbgHQCbgGCFgsQB8gqB7g/QB8hAB7hOQB7hOB1hgQB1hhBzhcQByhdBlhpQBghjBfhmQBShYAbgh");
	this.shape_4.setTransform(313.3,349.8);

	var maskedShapeInstanceList = [this.shape_2,this.shape_3,this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2}]},370).to({state:[{t:this.shape_3}]},7).to({state:[{t:this.shape_4}]},172).wait(77));

	// Layer 14
	this.instance_2 = new lib.ar4("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(409.9,235.2,1,1,111.3,0,0,0.1,-0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(200).to({_off:false},0).wait(426));

	// Layer 9 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_304 = new cjs.Graphics().p("A9SVeQAAsJIkokQImolMIAAQMJAAIkIlQImIkAAMJg");
	var mask_2_graphics_305 = new cjs.Graphics().p("A9SUeQASsJIxoWQIyoZMHARQMJASIYIxQIZIxgSMJg");
	var mask_2_graphics_306 = new cjs.Graphics().p("A9RTeQAksII8oKQI+oMMHAkQMIAjILI9QIMI9gjMIg");
	var mask_2_graphics_307 = new cjs.Graphics().p("A9QSeQA1sHJJn8QJKn/MGA1QMHA1H9JJQH/JIg1MHg");
	var mask_2_graphics_308 = new cjs.Graphics().p("A9OReQBHsFJTnvQJWnyMEBHQMGBHHwJUQHxJUhHMGg");
	var mask_2_graphics_309 = new cjs.Graphics().p("A9MQeQBYsDJfnhQJhnkMCBYQMEBZHiJfQHkJfhZMEg");
	var mask_2_graphics_310 = new cjs.Graphics().p("A9JPfQBqsCJpnTQJrnVMBBqQMBBqHUJqQHWJqhqMBg");
	var mask_2_graphics_311 = new cjs.Graphics().p("A9GOfQB7r+J0nFQJ2nHL+B7QL+B7HGJ1QHHJ0h7L/g");
	var mask_2_graphics_312 = new cjs.Graphics().p("A9DNgQCNr7J+m3QKAm4L7CMQL8CNG3J/QG5J+iNL8g");
	var mask_2_graphics_313 = new cjs.Graphics().p("A8/MhQCer4KImoQKKmpL3CeQL5CeGoKJQGqKIieL4g");
	var mask_2_graphics_314 = new cjs.Graphics().p("A86LjQCvrzKSmaQKTmbLzCvQL1CwGZKSQGbKSivL0g");
	var mask_2_graphics_315 = new cjs.Graphics().p("A8zKlQDArvKbmLQKcmMLvDBQLwDBGLKbQGMKbjBLwg");
	var mask_2_graphics_316 = new cjs.Graphics().p("A8oJnQDRrrKkl7QKll8LqDRQLsDSF7KkQF8KkjRLrg");
	var mask_2_graphics_317 = new cjs.Graphics().p("A8cIpQDirlKslsQKultLlDjQLmDjFsKsQFtKsjjLng");
	var mask_2_graphics_318 = new cjs.Graphics().p("A8PHsQDzrgK0lcQK2ldLgD0QLhDzFbK1QFeK0j0Lhg");
	var mask_2_graphics_319 = new cjs.Graphics().p("A8CGwQEFraK7lNQK+lNLaEFQLbEEFMK8QFNK8kELbg");
	var mask_2_graphics_320 = new cjs.Graphics().p("A7zF0QEVrULDk8QLFk9LUEVQLVEUE7LEQE+LDkVLVg");
	var mask_2_graphics_321 = new cjs.Graphics().p("A7jE4QElrNLKksQLMktLNEmQLPElErLKQEtLKklLPg");
	var mask_2_graphics_322 = new cjs.Graphics().p("A7SD9QE2rGLQkcQLRkcLIE2QLHE1EbLRQEdLRk2LHg");
	var mask_2_graphics_323 = new cjs.Graphics().p("A7ADDQFFq/LXkLQLYkMLAFGQLAFFEKLXQENLYlGLAg");
	var mask_2_graphics_324 = new cjs.Graphics().p("A6uCJQFVq4Ldj6QLdj7K5FWQK4FVD6LdQD8LdlWK5g");
	var mask_2_graphics_325 = new cjs.Graphics().p("A6OArQFvqqLmjfQLmjfKrFvQKrFwDeLmQDgLmlvKrg");
	var mask_2_graphics_326 = new cjs.Graphics().p("A5sgvQGJqdLtjDQLujEKdGJQKdGJDCLtQDFLumJKdg");
	var mask_2_graphics_327 = new cjs.Graphics().p("A5HiJQGiqOL0inQL1inKNGiQKOGhCmL1QCoL0miKOg");
	var mask_2_graphics_328 = new cjs.Graphics().p("A4gjhQG6p9L6iLQL6iKJ+G5QJ+G6CJL6QCML6m6J+g");
	var mask_2_graphics_329 = new cjs.Graphics().p("A32k2QHRptL+huQL/huJtHSQJtHRBtL/QBvL/nSJsg");
	var mask_2_graphics_330 = new cjs.Graphics().p("A3LmJQHopbMChRQMDhRJbHoQJbHoBQMCQBSMDnpJbg");
	var mask_2_graphics_331 = new cjs.Graphics().p("A2enaQH/pIMEg0QMFg0JJH+QJIH/AzMEQA1MFn+JJg");
	var mask_2_graphics_332 = new cjs.Graphics().p("A1uooQITo0MGgXQMHgYI1IUQI0IUAWMGQAZMHoUI0g");
	var mask_2_graphics_333 = new cjs.Graphics().p("A09pzQIoogMGAGQMHAFIhIpQIgIpgHMGQgFMHooIgg");
	var mask_2_graphics_334 = new cjs.Graphics().p("A0Lq7QI9oMMEAjQMHAjIMI9QILI8gkMGQgiMGo8ILg");
	var mask_2_graphics_335 = new cjs.Graphics().p("AzXsBQJQn1MCA/QMGBAH2JQQH1JPhBMEQg/MFpQH1g");
	var mask_2_graphics_336 = new cjs.Graphics().p("AyhtEQJineMABcQMCBdHfJiQHfJhheMCQhbMBpiHfg");
	var mask_2_graphics_337 = new cjs.Graphics().p("AxquDQJ0nIL8B5QL+B6HIJ0QHIJyh7L+Qh4L+p0HHg");
	var mask_2_graphics_338 = new cjs.Graphics().p("Awxu/QKFmwL2CWQL6CWGvKEQGwKDiXL5QiVL4qEGwg");
	var mask_2_graphics_339 = new cjs.Graphics().p("Av2v4QKUmYLwCyQLzCzGYKUQGXKTizLyQixLyqUGYg");
	var mask_2_graphics_340 = new cjs.Graphics().p("Au6wuQKil/LpDPQLtDOF+KjQF/KijQLrQjNLrqjF/g");
	var mask_2_graphics_341 = new cjs.Graphics().p("At9xgQKwllLhDqQLkDqFlKxQFlKwjrLiQjpLjqxFlg");
	var mask_2_graphics_342 = new cjs.Graphics().p("As/yPQK+lLLXEFQLbEHFLK9QFLK9kHLZQkFLaq9FLg");
	var mask_2_graphics_343 = new cjs.Graphics().p("Ar/y6QLJkxLOEhQLQEhEwLJQExLJkiLPQkgLPrJExg");
	var mask_2_graphics_344 = new cjs.Graphics().p("Aq+ziQLTkVLDE7QLFE8EWLUQEVLTk8LEQk7LErUEWg");
	var mask_2_graphics_345 = new cjs.Graphics().p("Apz0KQLej3K1FZQK3FaD3LfQD2LflaK1QlYK3rgD2g");
	var mask_2_graphics_346 = new cjs.Graphics().p("Aon0uQLojYKmF2QKoF3DXLqQDXLol3KmQl2KorpDXg");
	var mask_2_graphics_347 = new cjs.Graphics().p("Ana1OQLxi3KVGTQKXGTC4LxQC3LymUKWQmSKXryC3g");
	var mask_2_graphics_348 = new cjs.Graphics().p("AmM1oQL4iXKEGuQKFGwCXL4QCYL5mwKEQmuKFr5CYg");
	var mask_2_graphics_349 = new cjs.Graphics().p("Ak+19QL+h3JxHJQJzHLB3L+QB3L/nLJxQnJJzr/B3g");
	var mask_2_graphics_350 = new cjs.Graphics().p("Ajv2NQMDhXJdHkQJfHlBWMCQBWMDnlJeQnjJesDBXg");
	var mask_2_graphics_351 = new cjs.Graphics().p("Aif2ZQMFg1JJH9QJJH+A2MFQA1MHn+JIQn9JKsGA1g");
	var mask_2_graphics_352 = new cjs.Graphics().p("AhP2fQMHgUIyIVQIzIXAVMHQAUMIoWIyQoVI0sIAUg");
	var mask_2_graphics_353 = new cjs.Graphics().p("EgA8AkCMAA8g6iQMHAMIbItQIdIugMMIQgNMIouIbQogIQrxAAIgjAAg");
	var mask_2_graphics_354 = new cjs.Graphics().p("EgCMAj/MADag6dQMIAuIDJDQIEJEgtMHQguMHpEIDQoVHaq5AAQg9AAg/gDg");
	var mask_2_graphics_355 = new cjs.Graphics().p("EgDbAj4MAF4g6QQMFBOHqJYQHrJahOMEQhOMFpaHqQoGGoqFAAQhnAAhqgLg");
	var mask_2_graphics_356 = new cjs.Graphics().p("EgErAjuMAIXg59QMABuHRJtQHRJvhvL/QhvMBpuHQQn2F4pUAAQiPAAiUgVg");
	var mask_2_graphics_357 = new cjs.Graphics().p("EgF6AjgMAK0g5jQL7CPG2KAQG2KBiPL7QiQL8qBG1QnjFLonAAQi1AAi8gkg");
	var mask_2_graphics_358 = new cjs.Graphics().p("EgHIAjPMANPg5DQL1CwGaKSQGbKTiwL0QiwL1qTGaQnNEgn9AAQjaAAjig1g");
	var mask_2_graphics_359 = new cjs.Graphics().p("EgIWAi8MAPpg4dQLtDQF+KjQF/KkjQLtQjQLsqkF+Qm2D4nUAAQj+AAkHhJg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(304).to({graphics:mask_2_graphics_304,x:182,y:137.4}).wait(1).to({graphics:mask_2_graphics_305,x:182,y:139.6}).wait(1).to({graphics:mask_2_graphics_306,x:182.1,y:141.7}).wait(1).to({graphics:mask_2_graphics_307,x:182.2,y:143.8}).wait(1).to({graphics:mask_2_graphics_308,x:182.4,y:146}).wait(1).to({graphics:mask_2_graphics_309,x:182.6,y:148.1}).wait(1).to({graphics:mask_2_graphics_310,x:182.9,y:150.2}).wait(1).to({graphics:mask_2_graphics_311,x:183.2,y:152.3}).wait(1).to({graphics:mask_2_graphics_312,x:183.6,y:154.4}).wait(1).to({graphics:mask_2_graphics_313,x:184,y:156.5}).wait(1).to({graphics:mask_2_graphics_314,x:184.5,y:158.6}).wait(1).to({graphics:mask_2_graphics_315,x:184.8,y:160.7}).wait(1).to({graphics:mask_2_graphics_316,x:184.8,y:162.7}).wait(1).to({graphics:mask_2_graphics_317,x:184.8,y:164.8}).wait(1).to({graphics:mask_2_graphics_318,x:184.8,y:166.8}).wait(1).to({graphics:mask_2_graphics_319,x:184.8,y:168.8}).wait(1).to({graphics:mask_2_graphics_320,x:184.8,y:170.8}).wait(1).to({graphics:mask_2_graphics_321,x:184.8,y:172.8}).wait(1).to({graphics:mask_2_graphics_322,x:184.8,y:174.7}).wait(1).to({graphics:mask_2_graphics_323,x:184.8,y:176.7}).wait(1).to({graphics:mask_2_graphics_324,x:184.7,y:178.6}).wait(1).to({graphics:mask_2_graphics_325,x:184.6,y:181.7}).wait(1).to({graphics:mask_2_graphics_326,x:184.6,y:184.7}).wait(1).to({graphics:mask_2_graphics_327,x:184.5,y:187.7}).wait(1).to({graphics:mask_2_graphics_328,x:184.5,y:190.6}).wait(1).to({graphics:mask_2_graphics_329,x:184.4,y:193.4}).wait(1).to({graphics:mask_2_graphics_330,x:184.3,y:196.2}).wait(1).to({graphics:mask_2_graphics_331,x:184.3,y:198.9}).wait(1).to({graphics:mask_2_graphics_332,x:184.2,y:201.4}).wait(1).to({graphics:mask_2_graphics_333,x:184.2,y:203.9}).wait(1).to({graphics:mask_2_graphics_334,x:184.2,y:206.3}).wait(1).to({graphics:mask_2_graphics_335,x:184.3,y:208.6}).wait(1).to({graphics:mask_2_graphics_336,x:184.3,y:210.8}).wait(1).to({graphics:mask_2_graphics_337,x:184.3,y:212.9}).wait(1).to({graphics:mask_2_graphics_338,x:184.4,y:214.9}).wait(1).to({graphics:mask_2_graphics_339,x:184.4,y:216.8}).wait(1).to({graphics:mask_2_graphics_340,x:184.4,y:218.6}).wait(1).to({graphics:mask_2_graphics_341,x:184.4,y:220.2}).wait(1).to({graphics:mask_2_graphics_342,x:184.4,y:221.8}).wait(1).to({graphics:mask_2_graphics_343,x:184.5,y:223.2}).wait(1).to({graphics:mask_2_graphics_344,x:184.4,y:224.5}).wait(1).to({graphics:mask_2_graphics_345,x:184.4,y:225.8}).wait(1).to({graphics:mask_2_graphics_346,x:184.4,y:227}).wait(1).to({graphics:mask_2_graphics_347,x:184.4,y:228}).wait(1).to({graphics:mask_2_graphics_348,x:184.4,y:228.9}).wait(1).to({graphics:mask_2_graphics_349,x:184.3,y:229.6}).wait(1).to({graphics:mask_2_graphics_350,x:184.3,y:230.1}).wait(1).to({graphics:mask_2_graphics_351,x:184.3,y:230.4}).wait(1).to({graphics:mask_2_graphics_352,x:184.3,y:230.6}).wait(1).to({graphics:mask_2_graphics_353,x:184.3,y:230.6}).wait(1).to({graphics:mask_2_graphics_354,x:184.3,y:230.6}).wait(1).to({graphics:mask_2_graphics_355,x:184.4,y:230.7}).wait(1).to({graphics:mask_2_graphics_356,x:184.4,y:230.7}).wait(1).to({graphics:mask_2_graphics_357,x:184.5,y:230.8}).wait(1).to({graphics:mask_2_graphics_358,x:184.6,y:230.8}).wait(1).to({graphics:mask_2_graphics_359,x:184.6,y:230.9}).wait(267));

	// Layer 8
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(20,1,1).p("ASvudQnygHmxKuQmwKth2CQQh1CPksB2QhxBFiXAMQitAPgnipQgNg4gKgY");
	this.shape_5.setTransform(298.1,217.9);
	this.shape_5._off = true;

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(304).to({_off:false},0).wait(322));

	// Layer 7 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_200 = new cjs.Graphics().p("AdlLzIAApOIGSAAIAAJOg");
	var mask_3_graphics_201 = new cjs.Graphics().p("AjTEnIAApNIGnAAIAAJNg");
	var mask_3_graphics_202 = new cjs.Graphics().p("AjeEnIAApNIG9AAIAAJNg");
	var mask_3_graphics_203 = new cjs.Graphics().p("AjoEnIAApNIHRAAIAAJNg");
	var mask_3_graphics_204 = new cjs.Graphics().p("AjzEnIAApNIHnAAIAAJNg");
	var mask_3_graphics_205 = new cjs.Graphics().p("Aj+EnIAApNIH9AAIAAJNg");
	var mask_3_graphics_206 = new cjs.Graphics().p("AkIEnIAApNIIRAAIAAJNg");
	var mask_3_graphics_207 = new cjs.Graphics().p("AkTEnIAApNIInAAIAAJNg");
	var mask_3_graphics_208 = new cjs.Graphics().p("AkeEnIAApNII9AAIAAJNg");
	var mask_3_graphics_209 = new cjs.Graphics().p("AkoEnIAApNIJRAAIAAJNg");
	var mask_3_graphics_210 = new cjs.Graphics().p("AkzEnIAApNIJnAAIAAJNg");
	var mask_3_graphics_211 = new cjs.Graphics().p("Ak+EnIAApNIJ9AAIAAJNg");
	var mask_3_graphics_212 = new cjs.Graphics().p("AlIEnIAApNIKRAAIAAJNg");
	var mask_3_graphics_213 = new cjs.Graphics().p("AlTEnIAApNIKnAAIAAJNg");
	var mask_3_graphics_214 = new cjs.Graphics().p("AleEnIAApNIK9AAIAAJNg");
	var mask_3_graphics_215 = new cjs.Graphics().p("AloEnIAApNILRAAIAAJNg");
	var mask_3_graphics_216 = new cjs.Graphics().p("AlxEnIAApNILjAAIAAJNg");
	var mask_3_graphics_217 = new cjs.Graphics().p("Al5EnIAApNILzAAIAAJNg");
	var mask_3_graphics_218 = new cjs.Graphics().p("AmCEnIAApNIMFAAIAAJNg");
	var mask_3_graphics_219 = new cjs.Graphics().p("AmLEnIAApNIMWAAIAAJNg");
	var mask_3_graphics_220 = new cjs.Graphics().p("AmTEnIAApNIMnAAIAAJNg");
	var mask_3_graphics_221 = new cjs.Graphics().p("AmbEnIAApNIM4AAIAAJNg");
	var mask_3_graphics_222 = new cjs.Graphics().p("AmkEnIAApNINJAAIAAJNg");
	var mask_3_graphics_223 = new cjs.Graphics().p("AmtEnIAApNINbAAIAAJNg");
	var mask_3_graphics_224 = new cjs.Graphics().p("Am1EnIAApNINrAAIAAJNg");
	var mask_3_graphics_225 = new cjs.Graphics().p("Am9EnIAApNIN7AAIAAJNg");
	var mask_3_graphics_226 = new cjs.Graphics().p("AnGEnIAApNIONAAIAAJNg");
	var mask_3_graphics_227 = new cjs.Graphics().p("AnPEnIAApNIOfAAIAAJNg");
	var mask_3_graphics_228 = new cjs.Graphics().p("AnXEnIAApNIOvAAIAAJNg");
	var mask_3_graphics_229 = new cjs.Graphics().p("AU5LzIAApOIPBAAIAAJOg");
	var mask_3_graphics_230 = new cjs.Graphics().p("An/EnIAApNIP/AAIAAJNg");
	var mask_3_graphics_231 = new cjs.Graphics().p("AodEnIAApNIQ7AAIAAJNg");
	var mask_3_graphics_232 = new cjs.Graphics().p("Ao8EnIAApNIR5AAIAAJNg");
	var mask_3_graphics_233 = new cjs.Graphics().p("ApbEnIAApNIS3AAIAAJNg");
	var mask_3_graphics_234 = new cjs.Graphics().p("AQELzIAApOIT2AAIAAJOg");
	var mask_3_graphics_235 = new cjs.Graphics().p("AAkLzIAApOMAjWAAAIAAJOg");
	var mask_3_graphics_236 = new cjs.Graphics().p("AxqEwIAApfMAjVAAAIAAJfg");
	var mask_3_graphics_237 = new cjs.Graphics().p("AxqE5IAApxMAjVAAAIAAJxg");
	var mask_3_graphics_238 = new cjs.Graphics().p("AxqFCIAAqDMAjVAAAIAAKDg");
	var mask_3_graphics_239 = new cjs.Graphics().p("AxqFLIAAqVMAjVAAAIAAKVg");
	var mask_3_graphics_240 = new cjs.Graphics().p("AxqFUIAAqnMAjVAAAIAAKng");
	var mask_3_graphics_241 = new cjs.Graphics().p("AxqFdIAAq5MAjVAAAIAAK5g");
	var mask_3_graphics_242 = new cjs.Graphics().p("AxqFmIAArLMAjVAAAIAALLg");
	var mask_3_graphics_243 = new cjs.Graphics().p("AxqFuIAArbMAjVAAAIAALbg");
	var mask_3_graphics_244 = new cjs.Graphics().p("AxqF3IAArtMAjVAAAIAALtg");
	var mask_3_graphics_245 = new cjs.Graphics().p("AxqGAIAAr/MAjVAAAIAAL/g");
	var mask_3_graphics_246 = new cjs.Graphics().p("AxqGJIAAsRMAjVAAAIAAMRg");
	var mask_3_graphics_247 = new cjs.Graphics().p("AxqGSIAAsjMAjVAAAIAAMjg");
	var mask_3_graphics_248 = new cjs.Graphics().p("AxqGbIAAs1MAjVAAAIAAM1g");
	var mask_3_graphics_249 = new cjs.Graphics().p("AxqGkIAAtHMAjVAAAIAANHg");
	var mask_3_graphics_250 = new cjs.Graphics().p("AxqGtIAAtZMAjVAAAIAANZg");
	var mask_3_graphics_251 = new cjs.Graphics().p("AxqG2IAAtrMAjVAAAIAANrg");
	var mask_3_graphics_252 = new cjs.Graphics().p("AxqG/IAAt9MAjVAAAIAAN9g");
	var mask_3_graphics_253 = new cjs.Graphics().p("AxqHIIAAuPMAjVAAAIAAOPg");
	var mask_3_graphics_254 = new cjs.Graphics().p("AxqHQIAAufMAjVAAAIAAOfg");
	var mask_3_graphics_255 = new cjs.Graphics().p("AxqHZIAAuxMAjVAAAIAAOxg");
	var mask_3_graphics_256 = new cjs.Graphics().p("AxqHiIAAvDMAjVAAAIAAPDg");
	var mask_3_graphics_257 = new cjs.Graphics().p("AxqHrIAAvVMAjVAAAIAAPVg");
	var mask_3_graphics_258 = new cjs.Graphics().p("AxqH0IAAvnMAjVAAAIAAPng");
	var mask_3_graphics_259 = new cjs.Graphics().p("AxqH9IAAv5MAjVAAAIAAP5g");
	var mask_3_graphics_260 = new cjs.Graphics().p("AxqIGIAAwLMAjVAAAIAAQLg");
	var mask_3_graphics_261 = new cjs.Graphics().p("AxqIPIAAwdMAjVAAAIAAQdg");
	var mask_3_graphics_262 = new cjs.Graphics().p("AxqIYIAAwvMAjVAAAIAAQvg");
	var mask_3_graphics_263 = new cjs.Graphics().p("AxqIgIAAxAMAjVAAAIAARAg");
	var mask_3_graphics_264 = new cjs.Graphics().p("AxqIpIAAxSMAjVAAAIAARSg");
	var mask_3_graphics_265 = new cjs.Graphics().p("AxqIyIAAxkMAjVAAAIAARkg");
	var mask_3_graphics_266 = new cjs.Graphics().p("AxqI7IAAx1MAjVAAAIAAR1g");
	var mask_3_graphics_267 = new cjs.Graphics().p("AxqJEIAAyHMAjVAAAIAASHg");
	var mask_3_graphics_268 = new cjs.Graphics().p("AxqJNIAAyZMAjVAAAIAASZg");
	var mask_3_graphics_269 = new cjs.Graphics().p("AxqJWIAAyrMAjVAAAIAASrg");
	var mask_3_graphics_270 = new cjs.Graphics().p("AxqJfIAAy9MAjVAAAIAAS9g");
	var mask_3_graphics_271 = new cjs.Graphics().p("AxqJoIAAzOMAjVAAAIAATOg");
	var mask_3_graphics_272 = new cjs.Graphics().p("AxqJxIAAzgMAjVAAAIAATgg");
	var mask_3_graphics_273 = new cjs.Graphics().p("AxqJ6IAAzyMAjVAAAIAATyg");
	var mask_3_graphics_274 = new cjs.Graphics().p("AxqKCIAA0DMAjVAAAIAAUDg");
	var mask_3_graphics_275 = new cjs.Graphics().p("AxqKLIAA0VMAjVAAAIAAUVg");
	var mask_3_graphics_276 = new cjs.Graphics().p("AxqKUIAA0nMAjVAAAIAAUng");
	var mask_3_graphics_277 = new cjs.Graphics().p("AxqKdIAA05MAjVAAAIAAU5g");
	var mask_3_graphics_278 = new cjs.Graphics().p("AxqKmIAA1LMAjVAAAIAAVLg");
	var mask_3_graphics_279 = new cjs.Graphics().p("AxqKvIAA1dMAjVAAAIAAVdg");
	var mask_3_graphics_280 = new cjs.Graphics().p("AxqK4IAA1vMAjVAAAIAAVvg");
	var mask_3_graphics_281 = new cjs.Graphics().p("AxqLBIAA2BMAjVAAAIAAWBg");
	var mask_3_graphics_282 = new cjs.Graphics().p("AxqLKIAA2TMAjVAAAIAAWTg");
	var mask_3_graphics_283 = new cjs.Graphics().p("AxqLSIAA2jMAjVAAAIAAWjg");
	var mask_3_graphics_284 = new cjs.Graphics().p("AxqLbIAA21MAjVAAAIAAW1g");
	var mask_3_graphics_285 = new cjs.Graphics().p("AxqLkIAA3HMAjVAAAIAAXHg");
	var mask_3_graphics_286 = new cjs.Graphics().p("AxqLtIAA3ZMAjVAAAIAAXZg");
	var mask_3_graphics_287 = new cjs.Graphics().p("AxqL2IAA3rMAjVAAAIAAXrg");
	var mask_3_graphics_288 = new cjs.Graphics().p("AxqL/IAA39MAjVAAAIAAX9g");
	var mask_3_graphics_289 = new cjs.Graphics().p("AxqMIIAA4PMAjVAAAIAAYPg");
	var mask_3_graphics_290 = new cjs.Graphics().p("AxqMRIAA4hMAjVAAAIAAYhg");
	var mask_3_graphics_291 = new cjs.Graphics().p("AxqMaIAA4zMAjVAAAIAAYzg");
	var mask_3_graphics_292 = new cjs.Graphics().p("AxqMjIAA5FMAjVAAAIAAZFg");
	var mask_3_graphics_293 = new cjs.Graphics().p("AxqMsIAA5XMAjVAAAIAAZXg");
	var mask_3_graphics_294 = new cjs.Graphics().p("AxqM0IAA5nMAjVAAAIAAZng");
	var mask_3_graphics_295 = new cjs.Graphics().p("AxqM9IAA55MAjVAAAIAAZ5g");
	var mask_3_graphics_296 = new cjs.Graphics().p("AxqNGIAA6LMAjVAAAIAAaLg");
	var mask_3_graphics_297 = new cjs.Graphics().p("AxqNPIAA6dMAjVAAAIAAadg");
	var mask_3_graphics_298 = new cjs.Graphics().p("AxqNYIAA6vMAjVAAAIAAavg");
	var mask_3_graphics_299 = new cjs.Graphics().p("AxqNhIAA7BMAjVAAAIAAbBg");
	var mask_3_graphics_300 = new cjs.Graphics().p("AxqNqIAA7TMAjVAAAIAAbTg");
	var mask_3_graphics_301 = new cjs.Graphics().p("AxqNzIAA7lMAjVAAAIAAblg");
	var mask_3_graphics_302 = new cjs.Graphics().p("AxqN8IAA73MAjVAAAIAAb3g");
	var mask_3_graphics_303 = new cjs.Graphics().p("AxqOFIAA8JMAjVAAAIAAcJg");
	var mask_3_graphics_304 = new cjs.Graphics().p("AAkVbIAA8bMAjWAAAIAAcbg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(200).to({graphics:mask_3_graphics_200,x:229.5,y:75.5}).wait(1).to({graphics:mask_3_graphics_201,x:437.9,y:121.6}).wait(1).to({graphics:mask_3_graphics_202,x:436.9,y:121.6}).wait(1).to({graphics:mask_3_graphics_203,x:435.8,y:121.6}).wait(1).to({graphics:mask_3_graphics_204,x:434.8,y:121.6}).wait(1).to({graphics:mask_3_graphics_205,x:433.7,y:121.6}).wait(1).to({graphics:mask_3_graphics_206,x:432.7,y:121.6}).wait(1).to({graphics:mask_3_graphics_207,x:431.6,y:121.6}).wait(1).to({graphics:mask_3_graphics_208,x:430.6,y:121.6}).wait(1).to({graphics:mask_3_graphics_209,x:429.5,y:121.6}).wait(1).to({graphics:mask_3_graphics_210,x:428.5,y:121.6}).wait(1).to({graphics:mask_3_graphics_211,x:427.4,y:121.6}).wait(1).to({graphics:mask_3_graphics_212,x:426.4,y:121.6}).wait(1).to({graphics:mask_3_graphics_213,x:425.3,y:121.6}).wait(1).to({graphics:mask_3_graphics_214,x:424.3,y:121.6}).wait(1).to({graphics:mask_3_graphics_215,x:423.2,y:121.6}).wait(1).to({graphics:mask_3_graphics_216,x:422.4,y:121.6}).wait(1).to({graphics:mask_3_graphics_217,x:421.6,y:121.6}).wait(1).to({graphics:mask_3_graphics_218,x:420.7,y:121.6}).wait(1).to({graphics:mask_3_graphics_219,x:419.9,y:121.6}).wait(1).to({graphics:mask_3_graphics_220,x:419.1,y:121.6}).wait(1).to({graphics:mask_3_graphics_221,x:418.3,y:121.6}).wait(1).to({graphics:mask_3_graphics_222,x:417.4,y:121.6}).wait(1).to({graphics:mask_3_graphics_223,x:416.6,y:121.6}).wait(1).to({graphics:mask_3_graphics_224,x:415.8,y:121.6}).wait(1).to({graphics:mask_3_graphics_225,x:414.9,y:121.6}).wait(1).to({graphics:mask_3_graphics_226,x:414.1,y:121.6}).wait(1).to({graphics:mask_3_graphics_227,x:413.2,y:121.6}).wait(1).to({graphics:mask_3_graphics_228,x:412.4,y:121.6}).wait(1).to({graphics:mask_3_graphics_229,x:229.8,y:75.5}).wait(1).to({graphics:mask_3_graphics_230,x:408.5,y:121.6}).wait(1).to({graphics:mask_3_graphics_231,x:405.4,y:121.6}).wait(1).to({graphics:mask_3_graphics_232,x:402.3,y:121.6}).wait(1).to({graphics:mask_3_graphics_233,x:399.2,y:121.6}).wait(1).to({graphics:mask_3_graphics_234,x:229.8,y:75.5}).wait(1).to({graphics:mask_3_graphics_235,x:229.8,y:75.5}).wait(1).to({graphics:mask_3_graphics_236,x:346.6,y:122.5}).wait(1).to({graphics:mask_3_graphics_237,x:346.6,y:123.4}).wait(1).to({graphics:mask_3_graphics_238,x:346.6,y:124.3}).wait(1).to({graphics:mask_3_graphics_239,x:346.6,y:125.2}).wait(1).to({graphics:mask_3_graphics_240,x:346.6,y:126.1}).wait(1).to({graphics:mask_3_graphics_241,x:346.6,y:127}).wait(1).to({graphics:mask_3_graphics_242,x:346.6,y:127.9}).wait(1).to({graphics:mask_3_graphics_243,x:346.6,y:128.7}).wait(1).to({graphics:mask_3_graphics_244,x:346.6,y:129.6}).wait(1).to({graphics:mask_3_graphics_245,x:346.6,y:130.5}).wait(1).to({graphics:mask_3_graphics_246,x:346.6,y:131.4}).wait(1).to({graphics:mask_3_graphics_247,x:346.6,y:132.3}).wait(1).to({graphics:mask_3_graphics_248,x:346.6,y:133.2}).wait(1).to({graphics:mask_3_graphics_249,x:346.6,y:134.1}).wait(1).to({graphics:mask_3_graphics_250,x:346.6,y:135}).wait(1).to({graphics:mask_3_graphics_251,x:346.6,y:135.9}).wait(1).to({graphics:mask_3_graphics_252,x:346.6,y:136.8}).wait(1).to({graphics:mask_3_graphics_253,x:346.6,y:137.7}).wait(1).to({graphics:mask_3_graphics_254,x:346.6,y:138.5}).wait(1).to({graphics:mask_3_graphics_255,x:346.6,y:139.4}).wait(1).to({graphics:mask_3_graphics_256,x:346.6,y:140.3}).wait(1).to({graphics:mask_3_graphics_257,x:346.6,y:141.2}).wait(1).to({graphics:mask_3_graphics_258,x:346.6,y:142.1}).wait(1).to({graphics:mask_3_graphics_259,x:346.6,y:143}).wait(1).to({graphics:mask_3_graphics_260,x:346.6,y:143.9}).wait(1).to({graphics:mask_3_graphics_261,x:346.6,y:144.8}).wait(1).to({graphics:mask_3_graphics_262,x:346.6,y:145.7}).wait(1).to({graphics:mask_3_graphics_263,x:346.6,y:146.6}).wait(1).to({graphics:mask_3_graphics_264,x:346.6,y:147.5}).wait(1).to({graphics:mask_3_graphics_265,x:346.6,y:148.4}).wait(1).to({graphics:mask_3_graphics_266,x:346.6,y:149.2}).wait(1).to({graphics:mask_3_graphics_267,x:346.6,y:150.1}).wait(1).to({graphics:mask_3_graphics_268,x:346.6,y:151}).wait(1).to({graphics:mask_3_graphics_269,x:346.6,y:151.9}).wait(1).to({graphics:mask_3_graphics_270,x:346.6,y:152.8}).wait(1).to({graphics:mask_3_graphics_271,x:346.6,y:153.7}).wait(1).to({graphics:mask_3_graphics_272,x:346.6,y:154.6}).wait(1).to({graphics:mask_3_graphics_273,x:346.6,y:155.5}).wait(1).to({graphics:mask_3_graphics_274,x:346.6,y:156.4}).wait(1).to({graphics:mask_3_graphics_275,x:346.6,y:157.3}).wait(1).to({graphics:mask_3_graphics_276,x:346.6,y:158.2}).wait(1).to({graphics:mask_3_graphics_277,x:346.6,y:159.1}).wait(1).to({graphics:mask_3_graphics_278,x:346.6,y:160}).wait(1).to({graphics:mask_3_graphics_279,x:346.6,y:160.9}).wait(1).to({graphics:mask_3_graphics_280,x:346.6,y:161.7}).wait(1).to({graphics:mask_3_graphics_281,x:346.6,y:162.6}).wait(1).to({graphics:mask_3_graphics_282,x:346.6,y:163.5}).wait(1).to({graphics:mask_3_graphics_283,x:346.6,y:164.4}).wait(1).to({graphics:mask_3_graphics_284,x:346.6,y:165.3}).wait(1).to({graphics:mask_3_graphics_285,x:346.6,y:166.2}).wait(1).to({graphics:mask_3_graphics_286,x:346.6,y:167.1}).wait(1).to({graphics:mask_3_graphics_287,x:346.6,y:168}).wait(1).to({graphics:mask_3_graphics_288,x:346.6,y:168.9}).wait(1).to({graphics:mask_3_graphics_289,x:346.6,y:169.8}).wait(1).to({graphics:mask_3_graphics_290,x:346.6,y:170.7}).wait(1).to({graphics:mask_3_graphics_291,x:346.6,y:171.6}).wait(1).to({graphics:mask_3_graphics_292,x:346.6,y:172.4}).wait(1).to({graphics:mask_3_graphics_293,x:346.6,y:173.3}).wait(1).to({graphics:mask_3_graphics_294,x:346.6,y:174.2}).wait(1).to({graphics:mask_3_graphics_295,x:346.6,y:175.1}).wait(1).to({graphics:mask_3_graphics_296,x:346.6,y:176}).wait(1).to({graphics:mask_3_graphics_297,x:346.6,y:176.9}).wait(1).to({graphics:mask_3_graphics_298,x:346.6,y:177.8}).wait(1).to({graphics:mask_3_graphics_299,x:346.6,y:178.7}).wait(1).to({graphics:mask_3_graphics_300,x:346.6,y:179.6}).wait(1).to({graphics:mask_3_graphics_301,x:346.6,y:180.5}).wait(1).to({graphics:mask_3_graphics_302,x:346.6,y:181.4}).wait(1).to({graphics:mask_3_graphics_303,x:346.6,y:182.2}).wait(1).to({graphics:mask_3_graphics_304,x:229.8,y:137.1}).wait(322));

	// Layer 2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(20,1,1).p("ASvudQnygHmxKuQmwKth2CQQh1CPksB2QhxBFiXAMQitAPgnipQgNg4gKgY");
	this.shape_6.setTransform(298.1,217.9);
	this.shape_6._off = true;

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(200).to({_off:false},0).wait(426));

	// Layer 13
	this.instance_3 = new lib.ar1("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(160,50.7,1,1,0,0,0,35.5,0.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).wait(617));

	// Layer 5 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_100 = new cjs.Graphics().p("AmvSlIAAo7IZVAAIAAI7g");
	var mask_4_graphics_101 = new cjs.Graphics().p("AsqEoIAApQIZVAAIAAJQg");
	var mask_4_graphics_102 = new cjs.Graphics().p("AsqE0IAApnIZVAAIAAJng");
	var mask_4_graphics_103 = new cjs.Graphics().p("AsqE+IAAp7IZVAAIAAJ7g");
	var mask_4_graphics_104 = new cjs.Graphics().p("AsqFJIAAqRIZVAAIAAKRg");
	var mask_4_graphics_105 = new cjs.Graphics().p("AsqFUIAAqnIZVAAIAAKng");
	var mask_4_graphics_106 = new cjs.Graphics().p("AsqFfIAAq9IZVAAIAAK9g");
	var mask_4_graphics_107 = new cjs.Graphics().p("AsqFpIAArRIZVAAIAALRg");
	var mask_4_graphics_108 = new cjs.Graphics().p("AsqF0IAArnIZVAAIAALng");
	var mask_4_graphics_109 = new cjs.Graphics().p("AsqF/IAAr9IZVAAIAAL9g");
	var mask_4_graphics_110 = new cjs.Graphics().p("AsqGKIAAsTIZVAAIAAMTg");
	var mask_4_graphics_111 = new cjs.Graphics().p("AsqGVIAAspIZVAAIAAMpg");
	var mask_4_graphics_112 = new cjs.Graphics().p("AsqGgIAAs/IZVAAIAAM/g");
	var mask_4_graphics_113 = new cjs.Graphics().p("AsqGrIAAtUIZVAAIAANUg");
	var mask_4_graphics_114 = new cjs.Graphics().p("AsqG1IAAtpIZVAAIAANpg");
	var mask_4_graphics_115 = new cjs.Graphics().p("AsqHAIAAt/IZVAAIAAN/g");
	var mask_4_graphics_116 = new cjs.Graphics().p("AsqHLIAAuVIZVAAIAAOVg");
	var mask_4_graphics_117 = new cjs.Graphics().p("AsqHWIAAurIZVAAIAAOrg");
	var mask_4_graphics_118 = new cjs.Graphics().p("AsqHhIAAvBIZVAAIAAPBg");
	var mask_4_graphics_119 = new cjs.Graphics().p("AsqHsIAAvXIZVAAIAAPXg");
	var mask_4_graphics_120 = new cjs.Graphics().p("AsqH3IAAvsIZVAAIAAPsg");
	var mask_4_graphics_121 = new cjs.Graphics().p("AsqIBIAAwBIZVAAIAAQBg");
	var mask_4_graphics_122 = new cjs.Graphics().p("AsqIMIAAwXIZVAAIAAQXg");
	var mask_4_graphics_123 = new cjs.Graphics().p("AsqIXIAAwtIZVAAIAAQtg");
	var mask_4_graphics_124 = new cjs.Graphics().p("AsqIiIAAxDIZVAAIAARDg");
	var mask_4_graphics_125 = new cjs.Graphics().p("AsqIsIAAxYIZVAAIAARYg");
	var mask_4_graphics_126 = new cjs.Graphics().p("AsqI3IAAxtIZVAAIAARtg");
	var mask_4_graphics_127 = new cjs.Graphics().p("AsqJCIAAyDIZVAAIAASDg");
	var mask_4_graphics_128 = new cjs.Graphics().p("AsqJNIAAyZIZVAAIAASZg");
	var mask_4_graphics_129 = new cjs.Graphics().p("AsqJYIAAyvIZVAAIAASvg");
	var mask_4_graphics_130 = new cjs.Graphics().p("AsqJjIAAzFIZVAAIAATFg");
	var mask_4_graphics_131 = new cjs.Graphics().p("AsqJuIAAzbIZVAAIAATbg");
	var mask_4_graphics_132 = new cjs.Graphics().p("AsqJ5IAAzxIZVAAIAATxg");
	var mask_4_graphics_133 = new cjs.Graphics().p("AsqKDIAA0FIZVAAIAAUFg");
	var mask_4_graphics_134 = new cjs.Graphics().p("AsqKOIAA0bIZVAAIAAUbg");
	var mask_4_graphics_135 = new cjs.Graphics().p("AsqKZIAA0xIZVAAIAAUxg");
	var mask_4_graphics_136 = new cjs.Graphics().p("AsqKjIAA1GIZVAAIAAVGg");
	var mask_4_graphics_137 = new cjs.Graphics().p("AsqKvIAA1dIZVAAIAAVdg");
	var mask_4_graphics_138 = new cjs.Graphics().p("AsqK5IAA1xIZVAAIAAVxg");
	var mask_4_graphics_139 = new cjs.Graphics().p("AsqLEIAA2HIZVAAIAAWHg");
	var mask_4_graphics_140 = new cjs.Graphics().p("AsqLPIAA2dIZVAAIAAWdg");
	var mask_4_graphics_141 = new cjs.Graphics().p("AsqLaIAA2zIZVAAIAAWzg");
	var mask_4_graphics_142 = new cjs.Graphics().p("AsqLlIAA3JIZVAAIAAXJg");
	var mask_4_graphics_143 = new cjs.Graphics().p("AsqLvIAA3eIZVAAIAAXeg");
	var mask_4_graphics_144 = new cjs.Graphics().p("AsqL6IAA3zIZVAAIAAXzg");
	var mask_4_graphics_145 = new cjs.Graphics().p("AsqMFIAA4JIZVAAIAAYJg");
	var mask_4_graphics_146 = new cjs.Graphics().p("AsqMQIAA4fIZVAAIAAYfg");
	var mask_4_graphics_147 = new cjs.Graphics().p("AsqMbIAA41IZVAAIAAY1g");
	var mask_4_graphics_148 = new cjs.Graphics().p("AsqMmIAA5LIZVAAIAAZLg");
	var mask_4_graphics_149 = new cjs.Graphics().p("AsqMwIAA5fIZVAAIAAZfg");
	var mask_4_graphics_150 = new cjs.Graphics().p("AsqM7IAA51IZVAAIAAZ1g");
	var mask_4_graphics_151 = new cjs.Graphics().p("AsqNGIAA6LIZVAAIAAaLg");
	var mask_4_graphics_152 = new cjs.Graphics().p("AsqNRIAA6hIZVAAIAAahg");
	var mask_4_graphics_153 = new cjs.Graphics().p("AsqNcIAA63IZVAAIAAa3g");
	var mask_4_graphics_154 = new cjs.Graphics().p("AsqNmIAA7LIZVAAIAAbLg");
	var mask_4_graphics_155 = new cjs.Graphics().p("AsqNxIAA7hIZVAAIAAbhg");
	var mask_4_graphics_156 = new cjs.Graphics().p("AsqN8IAA73IZVAAIAAb3g");
	var mask_4_graphics_157 = new cjs.Graphics().p("AsqOHIAA8NIZVAAIAAcNg");
	var mask_4_graphics_158 = new cjs.Graphics().p("AsqOSIAA8jIZVAAIAAcjg");
	var mask_4_graphics_159 = new cjs.Graphics().p("AsqOdIAA85IZVAAIAAc5g");
	var mask_4_graphics_160 = new cjs.Graphics().p("AsqOoIAA9PIZVAAIAAdPg");
	var mask_4_graphics_161 = new cjs.Graphics().p("AsqOzIAA9kIZVAAIAAdkg");
	var mask_4_graphics_162 = new cjs.Graphics().p("AsqO9IAA95IZVAAIAAd5g");
	var mask_4_graphics_163 = new cjs.Graphics().p("AsqPIIAA+PIZVAAIAAePg");
	var mask_4_graphics_164 = new cjs.Graphics().p("AsqPTIAA+lIZVAAIAAelg");
	var mask_4_graphics_165 = new cjs.Graphics().p("AsqPeIAA+7IZVAAIAAe7g");
	var mask_4_graphics_166 = new cjs.Graphics().p("AsqPoIAA/QIZVAAIAAfQg");
	var mask_4_graphics_167 = new cjs.Graphics().p("AsqP0IAA/nIZVAAIAAfng");
	var mask_4_graphics_168 = new cjs.Graphics().p("AsqP+IAA/7IZVAAIAAf7g");
	var mask_4_graphics_169 = new cjs.Graphics().p("AsqQJMAAAggRIZVAAMAAAAgRg");
	var mask_4_graphics_170 = new cjs.Graphics().p("AsqQUMAAAggnIZVAAMAAAAgng");
	var mask_4_graphics_171 = new cjs.Graphics().p("AsqQfMAAAgg9IZVAAMAAAAg9g");
	var mask_4_graphics_172 = new cjs.Graphics().p("AsqQqMAAAghTIZVAAMAAAAhTg");
	var mask_4_graphics_173 = new cjs.Graphics().p("AsqQ0MAAAghoIZVAAMAAAAhog");
	var mask_4_graphics_174 = new cjs.Graphics().p("AsqQ/MAAAgh9IZVAAMAAAAh9g");
	var mask_4_graphics_175 = new cjs.Graphics().p("AsqRKMAAAgiTIZVAAMAAAAiTg");
	var mask_4_graphics_176 = new cjs.Graphics().p("AsqRVMAAAgipIZVAAMAAAAipg");
	var mask_4_graphics_177 = new cjs.Graphics().p("AsqRgMAAAgi/IZVAAMAAAAi/g");
	var mask_4_graphics_178 = new cjs.Graphics().p("AsqRrMAAAgjUIZVAAMAAAAjUg");
	var mask_4_graphics_179 = new cjs.Graphics().p("AsqR1MAAAgjpIZVAAMAAAAjpg");
	var mask_4_graphics_180 = new cjs.Graphics().p("AsqSAMAAAgj/IZVAAMAAAAj/g");
	var mask_4_graphics_181 = new cjs.Graphics().p("AsqSLMAAAgkVIZVAAMAAAAkVg");
	var mask_4_graphics_182 = new cjs.Graphics().p("AsqSWMAAAgkrIZVAAMAAAAkrg");
	var mask_4_graphics_183 = new cjs.Graphics().p("AsqShMAAAglBIZVAAMAAAAlBg");
	var mask_4_graphics_184 = new cjs.Graphics().p("AsqSzMAAAgllIZVAAMAAAAllg");
	var mask_4_graphics_185 = new cjs.Graphics().p("AsqTFMAAAgmJIZVAAMAAAAmJg");
	var mask_4_graphics_186 = new cjs.Graphics().p("AsqTXMAAAgmtIZVAAMAAAAmtg");
	var mask_4_graphics_187 = new cjs.Graphics().p("AsqTpMAAAgnRIZVAAMAAAAnRg");
	var mask_4_graphics_188 = new cjs.Graphics().p("AsqT8MAAAgn3IZVAAMAAAAn3g");
	var mask_4_graphics_189 = new cjs.Graphics().p("EgGvAiWMAAAgoaIZVAAMAAAAoag");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(100).to({graphics:mask_4_graphics_100,x:119,y:119}).wait(1).to({graphics:mask_4_graphics_101,x:156.9,y:210.4}).wait(1).to({graphics:mask_4_graphics_102,x:156.9,y:211.5}).wait(1).to({graphics:mask_4_graphics_103,x:156.9,y:212.6}).wait(1).to({graphics:mask_4_graphics_104,x:156.9,y:213.7}).wait(1).to({graphics:mask_4_graphics_105,x:156.9,y:214.8}).wait(1).to({graphics:mask_4_graphics_106,x:156.9,y:215.8}).wait(1).to({graphics:mask_4_graphics_107,x:156.9,y:217}).wait(1).to({graphics:mask_4_graphics_108,x:156.9,y:218}).wait(1).to({graphics:mask_4_graphics_109,x:156.9,y:219.1}).wait(1).to({graphics:mask_4_graphics_110,x:156.9,y:220.2}).wait(1).to({graphics:mask_4_graphics_111,x:156.9,y:221.3}).wait(1).to({graphics:mask_4_graphics_112,x:156.9,y:222.4}).wait(1).to({graphics:mask_4_graphics_113,x:156.9,y:223.5}).wait(1).to({graphics:mask_4_graphics_114,x:156.9,y:224.6}).wait(1).to({graphics:mask_4_graphics_115,x:156.9,y:225.6}).wait(1).to({graphics:mask_4_graphics_116,x:156.9,y:226.7}).wait(1).to({graphics:mask_4_graphics_117,x:156.9,y:227.8}).wait(1).to({graphics:mask_4_graphics_118,x:156.9,y:228.9}).wait(1).to({graphics:mask_4_graphics_119,x:156.9,y:230}).wait(1).to({graphics:mask_4_graphics_120,x:156.9,y:231.1}).wait(1).to({graphics:mask_4_graphics_121,x:156.9,y:232.2}).wait(1).to({graphics:mask_4_graphics_122,x:156.9,y:233.3}).wait(1).to({graphics:mask_4_graphics_123,x:156.9,y:234.3}).wait(1).to({graphics:mask_4_graphics_124,x:156.9,y:235.4}).wait(1).to({graphics:mask_4_graphics_125,x:156.9,y:236.5}).wait(1).to({graphics:mask_4_graphics_126,x:156.9,y:237.6}).wait(1).to({graphics:mask_4_graphics_127,x:156.9,y:238.7}).wait(1).to({graphics:mask_4_graphics_128,x:156.9,y:239.8}).wait(1).to({graphics:mask_4_graphics_129,x:156.9,y:240.9}).wait(1).to({graphics:mask_4_graphics_130,x:156.9,y:241.9}).wait(1).to({graphics:mask_4_graphics_131,x:156.9,y:243}).wait(1).to({graphics:mask_4_graphics_132,x:156.9,y:244.1}).wait(1).to({graphics:mask_4_graphics_133,x:156.9,y:245.2}).wait(1).to({graphics:mask_4_graphics_134,x:156.9,y:246.3}).wait(1).to({graphics:mask_4_graphics_135,x:156.9,y:247.4}).wait(1).to({graphics:mask_4_graphics_136,x:156.9,y:248.5}).wait(1).to({graphics:mask_4_graphics_137,x:156.9,y:249.6}).wait(1).to({graphics:mask_4_graphics_138,x:156.9,y:250.6}).wait(1).to({graphics:mask_4_graphics_139,x:156.9,y:251.7}).wait(1).to({graphics:mask_4_graphics_140,x:156.9,y:252.8}).wait(1).to({graphics:mask_4_graphics_141,x:156.9,y:253.9}).wait(1).to({graphics:mask_4_graphics_142,x:156.9,y:255}).wait(1).to({graphics:mask_4_graphics_143,x:156.9,y:256.1}).wait(1).to({graphics:mask_4_graphics_144,x:156.9,y:257.1}).wait(1).to({graphics:mask_4_graphics_145,x:156.9,y:258.2}).wait(1).to({graphics:mask_4_graphics_146,x:156.9,y:259.3}).wait(1).to({graphics:mask_4_graphics_147,x:156.9,y:260.4}).wait(1).to({graphics:mask_4_graphics_148,x:156.9,y:261.5}).wait(1).to({graphics:mask_4_graphics_149,x:156.9,y:262.6}).wait(1).to({graphics:mask_4_graphics_150,x:156.9,y:263.7}).wait(1).to({graphics:mask_4_graphics_151,x:156.9,y:264.8}).wait(1).to({graphics:mask_4_graphics_152,x:156.9,y:265.9}).wait(1).to({graphics:mask_4_graphics_153,x:156.9,y:266.9}).wait(1).to({graphics:mask_4_graphics_154,x:156.9,y:268}).wait(1).to({graphics:mask_4_graphics_155,x:156.9,y:269.1}).wait(1).to({graphics:mask_4_graphics_156,x:156.9,y:270.2}).wait(1).to({graphics:mask_4_graphics_157,x:156.9,y:271.3}).wait(1).to({graphics:mask_4_graphics_158,x:156.9,y:272.4}).wait(1).to({graphics:mask_4_graphics_159,x:156.9,y:273.4}).wait(1).to({graphics:mask_4_graphics_160,x:156.9,y:274.5}).wait(1).to({graphics:mask_4_graphics_161,x:156.9,y:275.6}).wait(1).to({graphics:mask_4_graphics_162,x:156.9,y:276.7}).wait(1).to({graphics:mask_4_graphics_163,x:156.9,y:277.8}).wait(1).to({graphics:mask_4_graphics_164,x:156.9,y:278.9}).wait(1).to({graphics:mask_4_graphics_165,x:156.9,y:280}).wait(1).to({graphics:mask_4_graphics_166,x:156.9,y:281.1}).wait(1).to({graphics:mask_4_graphics_167,x:156.9,y:282.2}).wait(1).to({graphics:mask_4_graphics_168,x:156.9,y:283.2}).wait(1).to({graphics:mask_4_graphics_169,x:156.9,y:284.3}).wait(1).to({graphics:mask_4_graphics_170,x:156.9,y:285.4}).wait(1).to({graphics:mask_4_graphics_171,x:156.9,y:286.5}).wait(1).to({graphics:mask_4_graphics_172,x:156.9,y:287.6}).wait(1).to({graphics:mask_4_graphics_173,x:156.9,y:288.7}).wait(1).to({graphics:mask_4_graphics_174,x:156.9,y:289.7}).wait(1).to({graphics:mask_4_graphics_175,x:156.9,y:290.8}).wait(1).to({graphics:mask_4_graphics_176,x:156.9,y:291.9}).wait(1).to({graphics:mask_4_graphics_177,x:156.9,y:293}).wait(1).to({graphics:mask_4_graphics_178,x:156.9,y:294.1}).wait(1).to({graphics:mask_4_graphics_179,x:156.9,y:295.2}).wait(1).to({graphics:mask_4_graphics_180,x:156.9,y:296.3}).wait(1).to({graphics:mask_4_graphics_181,x:156.9,y:297.4}).wait(1).to({graphics:mask_4_graphics_182,x:156.9,y:298.5}).wait(1).to({graphics:mask_4_graphics_183,x:156.9,y:299.5}).wait(1).to({graphics:mask_4_graphics_184,x:156.9,y:301.3}).wait(1).to({graphics:mask_4_graphics_185,x:156.9,y:303.1}).wait(1).to({graphics:mask_4_graphics_186,x:156.9,y:304.9}).wait(1).to({graphics:mask_4_graphics_187,x:156.9,y:306.7}).wait(1).to({graphics:mask_4_graphics_188,x:156.9,y:308.5}).wait(1).to({graphics:mask_4_graphics_189,x:119,y:219.8}).wait(437));

	// Layer 4
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(20,1,1).p("ApY0nQJvmWFxFXQFyFWkdIkQkdIjj2HlQj3HkkNIE");
	this.shape_7.setTransform(160.1,275);
	this.shape_7._off = true;

	var maskedShapeInstanceList = [this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(100).to({_off:false},0).wait(526));

	// Layer 3 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_9 = new cjs.Graphics().p("ABlfgQsAh1nMpyQnMpyB3r/QB0r/JynMMAirAvNQnzFupMAAQiVAAicgYg");
	var mask_5_graphics_10 = new cjs.Graphics().p("ABLfZQr9iIm8p+Qm9p9CJr7QCHr8J9m9MAhhAwCQnoFUoyAAQisAAiygfg");
	var mask_5_graphics_11 = new cjs.Graphics().p("AAxfQQr5ibmtqHQmtqICcr4QCZr5KImtMAgWAw1QndE8oZAAQjBAAjJgpg");
	var mask_5_graphics_12 = new cjs.Graphics().p("AAYfGQr1itmdqSQmdqSCurzQCsr1KRmeMAfKAxnQnQEjoBAAQjWAAjfgzg");
	var mask_5_graphics_13 = new cjs.Graphics().p("AAAe7Qrxi/mNqcQmNqbDArwQC+rwKcmNMAd8AyVQnDEMnpAAQjsAAjzg+g");
	var mask_5_graphics_14 = new cjs.Graphics().p("AgXewQrtjSl9qlQl9qlDTrrQDQrrKll9MActAzDQm1D2nSAAQkAAAkHhKg");
	var mask_5_graphics_15 = new cjs.Graphics().p("AgvejQrnjklsquQltquDlrlQDirnKulsMAbdAzvQmmDgm8AAQkUAAkchXg");
	var mask_5_graphics_16 = new cjs.Graphics().p("AhGeVQrhj2lcq3Qlbq2D2rgQD0rgK3lcMAaMA0YQmXDMmmAAQkpAAkvhlg");
	var mask_5_graphics_17 = new cjs.Graphics().p("AhceGQrckIlKq/QlLq/EIrYQEHrbK/lLMAY6A1AQmIC4mQAAQk9AAlCh0g");
	var mask_5_graphics_18 = new cjs.Graphics().p("Ahyd2QrVkZk5rHQk6rHEarSQEYrULHk5MAXnA1lQl3Cll6AAQlTAAlUiEg");
	var mask_5_graphics_19 = new cjs.Graphics().p("AiHdlQrOkrkorOQkorOErrLQEprNLPkoMAWTA2JQlmCTllAAQloAAlliVg");
	var mask_5_graphics_20 = new cjs.Graphics().p("AicdTQrGk8kXrVQkWrVE8rEQE7rFLVkXMAU/A2rQlUCClRAAQl8AAl3ing");
	var mask_5_graphics_21 = new cjs.Graphics().p("AiwdAQq+lNkFrbQkFrcFOq8QFLq9LckFMATqA3KQlCByk8AAQmSAAmHi6g");
	var mask_5_graphics_22 = new cjs.Graphics().p("AjEctQq2lejzriQjzriFfqzQFdq2LgjzMASVA3oQkvBjknAAQmoAAmXjNg");
	var mask_5_graphics_23 = new cjs.Graphics().p("AjWcYQqulvjhrnQjhrnFwqrQFtqtLmjhMAQ+A4DQkbBVkSAAQm+AAmmjig");
	var mask_5_graphics_24 = new cjs.Graphics().p("AjpcCQqkl/jPrtQjPrrGAqjQF+qjLsjPMAPmA4cQkHBIj+AAQnUAAm1j4g");
	var mask_5_graphics_25 = new cjs.Graphics().p("Aj6bsQqbmQi8rxQi9rxGQqZQGOqaLwi9MAOPA4zQjyA9jpAAQnsAAnCkOg");
	var mask_5_graphics_26 = new cjs.Graphics().p("AkLbUQqRmfiqr2Qiqr1GgqPQGeqQL0irMAM2A5IQjcAyjUAAQoEAAnPkmg");
	var mask_5_graphics_27 = new cjs.Graphics().p("Akba8QqHmwiXr5QiYr5GvqFQGuqGL5iYMALdA5bQjHAoi/AAQocAAnbk+g");
	var mask_5_graphics_28 = new cjs.Graphics().p("AkraiQp7m/iGr9QiFr8G/p6QG+p7L8iGMAKDA5sQiwAeipAAQo2AAnnlXg");
	var mask_5_graphics_29 = new cjs.Graphics().p("Ak5aIQpxnOhzsAQhyr/HOpvQHNpxL/hyMAIqA55QiaAXiTAAQpQAAnxlxg");
	var mask_5_graphics_30 = new cjs.Graphics().p("AlHZtQpmndhgsDQhgsBHepkQHbplMChgMAHQA6GQiCAQh9AAQprAAn7mMg");
	var mask_5_graphics_31 = new cjs.Graphics().p("AlVZRQpZnshNsFQhOsDHspYQHrpZMDhOMAF2A6QQhpALhmAAQqIAAoFmog");
	var mask_5_graphics_32 = new cjs.Graphics().p("AlhY0QpNn6g7sGQg6sGH6pMQH5pNMFg6MAEbA6YQhRAGhOAAQqkAAoOnFg");
	var mask_5_graphics_33 = new cjs.Graphics().p("AltYWQpAoIgosIQgosGIJo/QIGpBMHgoMADAA6eQg3ACg2AAQrDABoWnjg");
	var mask_5_graphics_34 = new cjs.Graphics().p("Al3X4Qo0oXgVsIQgVsHIWoyQIUo0MIgVMABlA6hIg6AAQrjAAocoAg");
	var mask_5_graphics_35 = new cjs.Graphics().p("AmBXYQonokgCsIQgCsHIjomQIionMIgCMAAKA6iIgGAAQsEAAoiogg");
	var mask_5_graphics_36 = new cjs.Graphics().p("AmzW4QoZoxARsIQAQsHIxoYQIvoaMIARMgBRA6hQsIgQoXowg");
	var mask_5_graphics_37 = new cjs.Graphics().p("AnoWYQoMo+AjsIQAksGI+oKQI7oMMIAkMgCsA6eQsHgkoJo8g");
	var mask_5_graphics_38 = new cjs.Graphics().p("AodV3Qn+pKA3sHQA2sFJKn8QJIn+MHA3MgEHA6YQsFg2n8pJg");
	var mask_5_graphics_39 = new cjs.Graphics().p("ApRVXQnvpXBJsEQBJsFJWntQJVnwMEBJMgFgA6SQsEhKnupUg");
	var mask_5_graphics_40 = new cjs.Graphics().p("AqEU2QngpjBbsCQBcsCJjnfQJfnhMDBcMgG7A6HQsChcnfpgg");
	var mask_5_graphics_41 = new cjs.Graphics().p("Aq2UVQnRpuBusAQBvsAJtnQQJsnSMABvMgIVA57QsAhunQpsg");
	var mask_5_graphics_42 = new cjs.Graphics().p("ArnTzQnCp4CBr9QCBr9J5nBQJ2nDL+CCMgJvA5tQr9iBnBp4g");
	var mask_5_graphics_43 = new cjs.Graphics().p("AsYTSQmyqECUr5QCUr6KDmxQKCmzL6CUMgLKA5dQr5iUmyqCg");
	var mask_5_graphics_44 = new cjs.Graphics().p("AtHSwQmjqOCnr1QCnr3KOmgQKLmjL3CnMgMlA5JQr1inmhqMg");
	var mask_5_graphics_45 = new cjs.Graphics().p("At2SOQmSqYC5rxQC6ryKYmQQKWmTLxC6MgN+A40Qrxi5mRqXg");
	var mask_5_graphics_46 = new cjs.Graphics().p("AukRsQmBqiDMrsQDMrtKhmAQKgmCLtDMMgPYA4dQrsjMmBqgg");
	var mask_5_graphics_47 = new cjs.Graphics().p("AvQRKQlxqrDfrnQDernKrlwQKplxLnDeMgQxA4EQrmjelwqqg");
	var mask_5_graphics_48 = new cjs.Graphics().p("Av7QoQlgq0DwrhQDxriK0leQKxlgLiDwMgSJA3oQrgjxlfqyg");
	var mask_5_graphics_49 = new cjs.Graphics().p("AwlQGQlPq8EDrbQECrbK8lOQK7lPLbEDMgTgA3KQrbkDlNq7g");
	var mask_5_graphics_50 = new cjs.Graphics().p("AxOPkQk+rEEVrUQEVrVLEk8QLCk+LVEVMgU2A2qQrVkVk8rDg");
	var mask_5_graphics_51 = new cjs.Graphics().p("Ax2PDQksrNEnrMQEmrOLMkqQLJktLOEnMgWMA2HQrNkmkrrKg");
	var mask_5_graphics_52 = new cjs.Graphics().p("AydOhQkZrTE4rGQE3rGLTkYQLRkbLGE4MgXgA1jQrHk4kZrRg");
	var mask_5_graphics_53 = new cjs.Graphics().p("AzCN/QkIraFKq9QFJq+LZkHQLYkIK+FJMgY0A09Qq/lKkHrYg");
	var mask_5_graphics_54 = new cjs.Graphics().p("AzmNeQj2rgFbq1QFaq2Lgj1QLej2K2FaMgaIA0VQq2lbj1reg");
	var mask_5_graphics_55 = new cjs.Graphics().p("A0JM9QjjrmFrqtQFsqtLljiQLkjkKtFrMgbaAzqQqtlrjjrkg");
	var mask_5_graphics_56 = new cjs.Graphics().p("A0qMbQjRrrF8qjQF9qkLqjQQLpjRKkF8MgcqAy9Qqkl8jRrqg");
	var mask_5_graphics_57 = new cjs.Graphics().p("A1KL7Qi/rxGNqZQGNqaLvi+QLvi/KaGNMgd7AyPQqamNi+rug");
	var mask_5_graphics_58 = new cjs.Graphics().p("A1pLaQisr0GdqQQGeqQLzirQLzitKQGdMgfJAxfQqQmeisryg");
	var mask_5_graphics_59 = new cjs.Graphics().p("A2GK5QiZr3GtqGQGtqGL3iYQL3iaKGGtMggWAwsQqGmtiZr3g");
	var mask_5_graphics_60 = new cjs.Graphics().p("A2iKZQiGr7G9p7QG9p7L6iFQL7iIJ7G9MghjAv4Qp7m9iGr6g");
	var mask_5_graphics_61 = new cjs.Graphics().p("A28J5Qh0r+HNpwQHMpwL+hyQL+h0JvHMMgitAvCQpwnNhzr9g");
	var mask_5_graphics_62 = new cjs.Graphics().p("A3VJZQhhsAHcplQHcpkMAhfQMAhiJkHcMgj3AuKQpknchgsAg");
	var mask_5_graphics_63 = new cjs.Graphics().p("A3tI6QhNsDHrpYQHqpYMChNQMDhOJYHqMgk/AtQQpYnqhOsCg");
	var mask_5_graphics_64 = new cjs.Graphics().p("A4CIbQg7sFH5pMQH6pMMDg5QMFg8JLH6MgmFAsUQpMn5g6sDg");
	var mask_5_graphics_65 = new cjs.Graphics().p("A4YH6QgmsGIJo+QIIo/MFgkQMGgnI+IIMgnQArTQo+oJgmsEg");
	var mask_5_graphics_66 = new cjs.Graphics().p("A4sHZQgRsGIXoxQIYowMFgQQMHgSIwIYMgoZAqOQowoYgRsFg");
	var mask_5_graphics_67 = new cjs.Graphics().p("A4+G5QADsHImohQInoiMFAEQMHADIhImMgpfApIQoiomAEsFg");
	var mask_5_graphics_68 = new cjs.Graphics().p("A5PGZQAYsGI1oTQI1oTMFAaQMGAWITI1MgqlAoBQoTo1AYsFg");
	var mask_5_graphics_69 = new cjs.Graphics().p("A5dF6QAtsFJCoEQJDoDMEAtQMFAsIDJDMgrnAm2QoDpCAssEg");
	var mask_5_graphics_70 = new cjs.Graphics().p("A5pFbQBBsEJQnzQJQn0MCBCQMEBAH0JQMgspAlrQnzpQBBsCg");
	var mask_5_graphics_71 = new cjs.Graphics().p("A50E9QBWsCJdnkQJdnjMABWQMCBVHkJdMgtoAkeQnjpdBVsAg");
	var mask_5_graphics_72 = new cjs.Graphics().p("A59EfQBrr/JpnTQJqnUL+BrQL/BpHTJqMgukAjQQnUpqBqr+g");
	var mask_5_graphics_73 = new cjs.Graphics().p("A6DECQB+r8J2nCQJ2nDL6B/QL8B+HDJ2MgvfAh/QnDp2B/r7g");
	var mask_5_graphics_74 = new cjs.Graphics().p("A6IDlQCSr4KCmxQKCmyL2CTQL5CSGxKCMgwXAgtQmyqCCTr3g");
	var mask_5_graphics_75 = new cjs.Graphics().p("A6MDIQCor0KOmfQKOmgLyCpQL0CoGfKNMgxSAfVQmfqOCoryg");
	var mask_5_graphics_76 = new cjs.Graphics().p("A6NCrQC9rvKamNQKZmMLtC+QLvC9GNKZMgyKAd6QmNqZC+rtg");
	var mask_5_graphics_77 = new cjs.Graphics().p("A6NCOQDTroKll6QKkl6LoDUQLpDSF5KkMgy/AceQl6qkDTrog");
	var mask_5_graphics_78 = new cjs.Graphics().p("A6KBzQDorjKvlmQKvlmLhDpQLjDnFmKuMgzyAbBQlmqvDorhg");
	var mask_5_graphics_79 = new cjs.Graphics().p("A6FBYQD9rcK5lSQK4lTLbD+QLcD8FSK5Mg0hAZhQlTq4D9rbg");
	var mask_5_graphics_80 = new cjs.Graphics().p("A5/A+QESrULCk/QLCk/LTETQLVERE/LCMg1PAYBQk/rCERrTg");
	var mask_5_graphics_81 = new cjs.Graphics().p("A52AlQEnrMLLkrQLKkqLLEnQLNElErLKMg16AWhQkrrLEmrLg");
	var mask_5_graphics_82 = new cjs.Graphics().p("A5rANQE7rELTkWQLSkWLDE7QLEE6EWLSMg2hAU/QkWrUE6rCg");
	var mask_5_graphics_83 = new cjs.Graphics().p("A5egJQFPq8LbkBQLZkCK6FQQK7FNECLaMg3GATbQkCrbFOq4g");
	var mask_5_graphics_84 = new cjs.Graphics().p("A5PghQFiqxLijtQLhjsKwFjQKxFhDtLhMg3oAR2QjtriFiqvg");
	var mask_5_graphics_85 = new cjs.Graphics().p("A43g/QF+qjLrjPQLqjPKhF+QKjF9DPLqMg4UAPnQjPrrF9qgg");
	var mask_5_graphics_86 = new cjs.Graphics().p("A4bhbQGZqTLyiyQLyixKSGZQKTGXCxLyMg45ANXQixrzGXqQg");
	var mask_5_graphics_87 = new cjs.Graphics().p("A37h1QGzqDL5iTQL4iTKBGzQKDGxCTL4Mg5ZALGQiTr6Gxp/g");
	var mask_5_graphics_88 = new cjs.Graphics().p("A3XiOQHMpxL/h0QL9h1JwHMQJwHLB1L9Mg5zAIzQh1r/HLpug");
	var mask_5_graphics_89 = new cjs.Graphics().p("A2vikQHkpfMDhWQMChVJdHkQJeHiBVMDMg6HAGfQhVsDHjpbg");
	var mask_5_graphics_90 = new cjs.Graphics().p("A2Ei5QH9pKMGg4QMEg3JJH9QJLH6A3MFMg6VAELQg4sGH7pIg");
	var mask_5_graphics_91 = new cjs.Graphics().p("A1UjLQIUo2MHgYQMGgZI1IUQI1IRAZMHMg6eAB1QgYsHISozg");
	var mask_5_graphics_92 = new cjs.Graphics().p("A9PQ6QAGsIIooeQIqogMHAHQMIAGIfIqQIgIngHMIg");
	var mask_5_graphics_93 = new cjs.Graphics().p("A9PPKQAmsHI9oIQI/oKMGAmQMIAmIII/QIKI8gmMHg");
	var mask_5_graphics_94 = new cjs.Graphics().p("A9NNaQBFsFJRnwQJUnzMEBEQMFBFHxJTQHzJRhEMFg");
	var mask_5_graphics_95 = new cjs.Graphics().p("A9KLrQBksBJlnaQJnnaMBBjQMCBjHZJnQHbJlhkMCg");
	var mask_5_graphics_96 = new cjs.Graphics().p("A9FJ8QCCr9J4nAQJ5nCL9CCQL9CCHBJ5QHCJ3iCL9g");
	var mask_5_graphics_97 = new cjs.Graphics().p("A8/INQChr3KJmnQKLmoL3ChQL4CgGnKLQGoKIigL4g");
	var mask_5_graphics_98 = new cjs.Graphics().p("A83GgQC/rwKZmNQKcmOLwC/QLxC+GMKbQGPKZi/Lxg");
	var mask_5_graphics_99 = new cjs.Graphics().p("A8uE0QDdroKplyQKrl0LoDdQLpDcFxKrQF0KojcLpg");
	var mask_5_graphics_100 = new cjs.Graphics().p("A8jDKQD6rfK4lWQK5lYLfD6QLfD6FXK5QFYK3j6Lgg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_5_graphics_9,x:117.7,y:204}).wait(1).to({graphics:mask_5_graphics_10,x:115.9,y:204}).wait(1).to({graphics:mask_5_graphics_11,x:113.9,y:204.1}).wait(1).to({graphics:mask_5_graphics_12,x:112,y:204.1}).wait(1).to({graphics:mask_5_graphics_13,x:110.1,y:204.1}).wait(1).to({graphics:mask_5_graphics_14,x:108.1,y:204.2}).wait(1).to({graphics:mask_5_graphics_15,x:106.1,y:204.2}).wait(1).to({graphics:mask_5_graphics_16,x:104,y:204.2}).wait(1).to({graphics:mask_5_graphics_17,x:102,y:204.2}).wait(1).to({graphics:mask_5_graphics_18,x:99.9,y:204.2}).wait(1).to({graphics:mask_5_graphics_19,x:97.8,y:204.2}).wait(1).to({graphics:mask_5_graphics_20,x:95.7,y:204.2}).wait(1).to({graphics:mask_5_graphics_21,x:93.6,y:204.2}).wait(1).to({graphics:mask_5_graphics_22,x:91.4,y:204.2}).wait(1).to({graphics:mask_5_graphics_23,x:89.3,y:204.2}).wait(1).to({graphics:mask_5_graphics_24,x:87.1,y:204.2}).wait(1).to({graphics:mask_5_graphics_25,x:85,y:204.2}).wait(1).to({graphics:mask_5_graphics_26,x:82.8,y:204.2}).wait(1).to({graphics:mask_5_graphics_27,x:80.6,y:204.2}).wait(1).to({graphics:mask_5_graphics_28,x:78.4,y:204.1}).wait(1).to({graphics:mask_5_graphics_29,x:76.2,y:204.1}).wait(1).to({graphics:mask_5_graphics_30,x:73.9,y:204.1}).wait(1).to({graphics:mask_5_graphics_31,x:71.7,y:204.1}).wait(1).to({graphics:mask_5_graphics_32,x:69.5,y:204.1}).wait(1).to({graphics:mask_5_graphics_33,x:67.2,y:204}).wait(1).to({graphics:mask_5_graphics_34,x:64.9,y:204}).wait(1).to({graphics:mask_5_graphics_35,x:62.7,y:204}).wait(1).to({graphics:mask_5_graphics_36,x:64.4,y:204}).wait(1).to({graphics:mask_5_graphics_37,x:66.7,y:204}).wait(1).to({graphics:mask_5_graphics_38,x:68.9,y:203.8}).wait(1).to({graphics:mask_5_graphics_39,x:71.2,y:203.7}).wait(1).to({graphics:mask_5_graphics_40,x:73.4,y:203.4}).wait(1).to({graphics:mask_5_graphics_41,x:75.6,y:203.1}).wait(1).to({graphics:mask_5_graphics_42,x:77.8,y:202.8}).wait(1).to({graphics:mask_5_graphics_43,x:80,y:202.4}).wait(1).to({graphics:mask_5_graphics_44,x:82.3,y:201.9}).wait(1).to({graphics:mask_5_graphics_45,x:84.5,y:201.4}).wait(1).to({graphics:mask_5_graphics_46,x:86.7,y:200.8}).wait(1).to({graphics:mask_5_graphics_47,x:88.9,y:200.2}).wait(1).to({graphics:mask_5_graphics_48,x:91.1,y:199.5}).wait(1).to({graphics:mask_5_graphics_49,x:93.3,y:198.8}).wait(1).to({graphics:mask_5_graphics_50,x:95.4,y:198}).wait(1).to({graphics:mask_5_graphics_51,x:97.6,y:197.1}).wait(1).to({graphics:mask_5_graphics_52,x:99.7,y:196.2}).wait(1).to({graphics:mask_5_graphics_53,x:101.8,y:195.3}).wait(1).to({graphics:mask_5_graphics_54,x:103.9,y:194.3}).wait(1).to({graphics:mask_5_graphics_55,x:105.9,y:193.2}).wait(1).to({graphics:mask_5_graphics_56,x:108,y:192.1}).wait(1).to({graphics:mask_5_graphics_57,x:110,y:191}).wait(1).to({graphics:mask_5_graphics_58,x:112,y:189.8}).wait(1).to({graphics:mask_5_graphics_59,x:113.9,y:188.5}).wait(1).to({graphics:mask_5_graphics_60,x:115.9,y:187.2}).wait(1).to({graphics:mask_5_graphics_61,x:117.8,y:185.9}).wait(1).to({graphics:mask_5_graphics_62,x:119.6,y:184.5}).wait(1).to({graphics:mask_5_graphics_63,x:121.4,y:183}).wait(1).to({graphics:mask_5_graphics_64,x:123.1,y:181.5}).wait(1).to({graphics:mask_5_graphics_65,x:125,y:179.9}).wait(1).to({graphics:mask_5_graphics_66,x:126.9,y:178.2}).wait(1).to({graphics:mask_5_graphics_67,x:128.6,y:176.4}).wait(1).to({graphics:mask_5_graphics_68,x:130.4,y:174.7}).wait(1).to({graphics:mask_5_graphics_69,x:132,y:172.8}).wait(1).to({graphics:mask_5_graphics_70,x:133.6,y:170.9}).wait(1).to({graphics:mask_5_graphics_71,x:135.2,y:169}).wait(1).to({graphics:mask_5_graphics_72,x:136.7,y:167.1}).wait(1).to({graphics:mask_5_graphics_73,x:138.1,y:165.1}).wait(1).to({graphics:mask_5_graphics_74,x:139.4,y:163}).wait(1).to({graphics:mask_5_graphics_75,x:140.9,y:160.8}).wait(1).to({graphics:mask_5_graphics_76,x:142.2,y:158.5}).wait(1).to({graphics:mask_5_graphics_77,x:143.5,y:156.2}).wait(1).to({graphics:mask_5_graphics_78,x:144.7,y:153.9}).wait(1).to({graphics:mask_5_graphics_79,x:145.9,y:151.5}).wait(1).to({graphics:mask_5_graphics_80,x:147,y:149.1}).wait(1).to({graphics:mask_5_graphics_81,x:148.1,y:146.7}).wait(1).to({graphics:mask_5_graphics_82,x:149,y:144.3}).wait(1).to({graphics:mask_5_graphics_83,x:150,y:141.8}).wait(1).to({graphics:mask_5_graphics_84,x:150.8,y:139.2}).wait(1).to({graphics:mask_5_graphics_85,x:151.8,y:135.6}).wait(1).to({graphics:mask_5_graphics_86,x:152.8,y:132}).wait(1).to({graphics:mask_5_graphics_87,x:153.6,y:128.4}).wait(1).to({graphics:mask_5_graphics_88,x:154.3,y:124.7}).wait(1).to({graphics:mask_5_graphics_89,x:154.8,y:121}).wait(1).to({graphics:mask_5_graphics_90,x:155.1,y:117.3}).wait(1).to({graphics:mask_5_graphics_91,x:155.3,y:113.5}).wait(1).to({graphics:mask_5_graphics_92,x:155.4,y:111.4}).wait(1).to({graphics:mask_5_graphics_93,x:155.5,y:115.1}).wait(1).to({graphics:mask_5_graphics_94,x:155.7,y:118.8}).wait(1).to({graphics:mask_5_graphics_95,x:156.2,y:122.6}).wait(1).to({graphics:mask_5_graphics_96,x:156.8,y:126.2}).wait(1).to({graphics:mask_5_graphics_97,x:157.5,y:129.9}).wait(1).to({graphics:mask_5_graphics_98,x:158.3,y:133.5}).wait(1).to({graphics:mask_5_graphics_99,x:159.4,y:137.1}).wait(1).to({graphics:mask_5_graphics_100,x:160.3,y:140.9}).wait(526));

	// Layer 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(20,1,1).p("ApYmUQJvmVFxFWQFyFWkdIjQg1Bng0Bk");
	this.shape_8.setTransform(160.1,183.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(20,1,1).p("ApY0nQJvmWFxFXQFyFWkdIkQkdIjj2HlQj3HkkNIE");
	this.shape_9.setTransform(160.1,275);

	var maskedShapeInstanceList = [this.shape_8,this.shape_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8}]},9).to({state:[{t:this.shape_9}]},38).wait(579));

	// Letter
	this.instance_4 = new lib.K("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(275,275);
	this.instance_4.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(626));

	// Background
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_10.setTransform(275,275,3.373,2.543);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_11.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10}]}).wait(626));

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