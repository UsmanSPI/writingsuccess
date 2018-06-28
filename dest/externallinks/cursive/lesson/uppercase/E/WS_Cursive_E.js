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
	this.shape.graphics.f("#FFFFFF").s().p("AuccIQjRhHijiGQiqiNhei1QhljIAAjkQAAi9A+itQA3ilBviQQBoiMCWhrQCThrC0hEQg1iwAAjhQAAjNBsjgQBpjVC2i2QCzi3DRhsQDchuDKAAQCjAACMAkQCZAqCABYQBNAHAACtQAADwh4AAQhYABhvjEQiThHjDAAQiMAAifBUQiZBSiFCMQiJCJhOCbQhVCjAACQQAACjAnCgIDKgHQDtAACSBRQC3BpAADdQAAB/iABKQhnA/iJAAQilgBiahRQiPhOhpiMQkYBkiqDOQhUBogtB8QguCCAACPQAACjBICKQBFB+B+BfQB2BbCYAxQCTAuCcAAQDhAAGujKQEHidFGklIHcnBQDkjOBcAAQB4AAAAB/QAABojUD1QjbD+k7D7QlkEblZCmQnqDHjfAAQjaAAjQhLgAhwAYQgkgziDAAIguAAQBVAzBlAAIAbAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-166.2,-187.5,332.4,375);


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


(lib.ar3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(103.5,-41.8,1,1,133.2,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0.1,scaleX:1,scaleY:1,rotation:56.8,guide:{path:[103.4,-41.8,77.2,-77.8,43.9,-58.8]}},45).to({regX:0.3,regY:0.2,scaleX:1,scaleY:1,rotation:28,guide:{path:[43.8,-58.8,-1.1,-33.4,-58.9,90.9]}},87).wait(3));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_45 = new cjs.Graphics().p("AABkOIBBhjIDyCgIhBBig");
	var mask_graphics_46 = new cjs.Graphics().p("AifgTIBOh4IDyCfIhPB3g");
	var mask_graphics_47 = new cjs.Graphics().p("AimgJIBciMIDxCfIhcCMg");
	var mask_graphics_48 = new cjs.Graphics().p("AitAAIBpifIDyCfIhpCgg");
	var mask_graphics_49 = new cjs.Graphics().p("Ai0AKIB3izIDyCgIh3Czg");
	var mask_graphics_50 = new cjs.Graphics().p("Ai7AUICFjHIDxCfIiEDJg");
	var mask_graphics_51 = new cjs.Graphics().p("AjBAfICSjdIDxCgIiSDdg");
	var mask_graphics_52 = new cjs.Graphics().p("AjIApICgjxIDxCgIigDxg");
	var mask_graphics_53 = new cjs.Graphics().p("AjOAzICskFIDyCgIitEFg");
	var mask_graphics_54 = new cjs.Graphics().p("AjVA9IC6kZIDxCgIi6EZg");
	var mask_graphics_55 = new cjs.Graphics().p("AjcBHIDIktIDxCfIjIEug");
	var mask_graphics_56 = new cjs.Graphics().p("AjjBSIDVlDIDyCgIjVFDg");
	var mask_graphics_57 = new cjs.Graphics().p("AjqBcIDjlXIDxCgIjiFXg");
	var mask_graphics_58 = new cjs.Graphics().p("AjwBmIDwlrIDxCgIjwFrg");
	var mask_graphics_59 = new cjs.Graphics().p("Aj3BwID9l/IDyCgIj8F/g");
	var mask_graphics_60 = new cjs.Graphics().p("Aj+B6IEKmUIDzCgIkKGUg");
	var mask_graphics_61 = new cjs.Graphics().p("AkECFIEXmpIDzCgIkYGpg");
	var mask_graphics_62 = new cjs.Graphics().p("AkLCPIElm9IDyCgIklG9g");
	var mask_graphics_63 = new cjs.Graphics().p("AkSCZIEynRIDzCgIkzHRg");
	var mask_graphics_64 = new cjs.Graphics().p("AkZCkIFAnmIDzCfIlAHng");
	var mask_graphics_65 = new cjs.Graphics().p("AkgCuIFOn7IDyCgIlNH7g");
	var mask_graphics_66 = new cjs.Graphics().p("AkmC4IFboPIDyCgIlbIPg");
	var mask_graphics_67 = new cjs.Graphics().p("AktDCIFpojIDyCgIloIjg");
	var mask_graphics_68 = new cjs.Graphics().p("Ak0DMIF2o3IDzCgIl2I3g");
	var mask_graphics_69 = new cjs.Graphics().p("Ak6DWIGDpLIDzCfImEJNg");
	var mask_graphics_70 = new cjs.Graphics().p("AlBDhIGRphIDyCgImRJhg");
	var mask_graphics_71 = new cjs.Graphics().p("AlIDrIGfp1IDyCgImeJ1g");
	var mask_graphics_72 = new cjs.Graphics().p("AlPD1IGsqJIDzCgImsKJg");
	var mask_graphics_73 = new cjs.Graphics().p("AlWD/IG6qdIDyCgIm5Kdg");
	var mask_graphics_74 = new cjs.Graphics().p("AlcEKIHHqzIDyChInHKyg");
	var mask_graphics_75 = new cjs.Graphics().p("AljEUIHUrHIDzCgInVLHg");
	var mask_graphics_76 = new cjs.Graphics().p("AlqEeIHirbIDzCgIniLbg");
	var mask_graphics_77 = new cjs.Graphics().p("AlwEoIHvrvIDzCgInwLvg");
	var mask_graphics_78 = new cjs.Graphics().p("Al3EzIH9sEIDyCfIn9MEg");
	var mask_graphics_79 = new cjs.Graphics().p("Al+E8IILsXIDyCgIoLMYg");
	var mask_graphics_80 = new cjs.Graphics().p("AmFFHIIYstIDzCgIoYMtg");
	var mask_graphics_81 = new cjs.Graphics().p("AmMFRIImtBIDyCgIolNBg");
	var mask_graphics_82 = new cjs.Graphics().p("AmSFcIIztWIDyCgIozNWg");
	var mask_graphics_83 = new cjs.Graphics().p("AmZFlIJAtqIDzChIpANpg");
	var mask_graphics_84 = new cjs.Graphics().p("AmfFwIJNt/IDyCgIpNN/g");
	var mask_graphics_85 = new cjs.Graphics().p("AmmF6IJbuTIDyCgIpbOTg");
	var mask_graphics_86 = new cjs.Graphics().p("AmtGEIJpunIDyCgIppOng");
	var mask_graphics_87 = new cjs.Graphics().p("Am0GOIJ2u7IDzCgIp2O8g");
	var mask_graphics_88 = new cjs.Graphics().p("Am7GZIKEvRIDzChIqEPPg");
	var mask_graphics_89 = new cjs.Graphics().p("AnBGjIKRvlIDyCgIqRPlg");
	var mask_graphics_90 = new cjs.Graphics().p("AnIGtIKev5IDzCgIqeP5g");
	var mask_graphics_91 = new cjs.Graphics().p("AnPG3IKswOIDzChIqsQNg");
	var mask_graphics_92 = new cjs.Graphics().p("AnWHCIK6wjIDzCgIq6Qjg");
	var mask_graphics_93 = new cjs.Graphics().p("AncHMILHw3IDyCgIrHQ3g");
	var mask_graphics_94 = new cjs.Graphics().p("AnjHWILVxLIDyCgIrVRLg");
	var mask_graphics_95 = new cjs.Graphics().p("AnqHgILixfIDzCgIriRfg");
	var mask_graphics_96 = new cjs.Graphics().p("AnwHrILvx0IDyCgIrvRzg");
	var mask_graphics_97 = new cjs.Graphics().p("An3H0IL9yIIDyChIr9SIg");
	var mask_graphics_98 = new cjs.Graphics().p("An+H/IMKydIDzCgIsKSdg");
	var mask_graphics_99 = new cjs.Graphics().p("AoFIJIMYyxIDyCgIsXSxg");
	var mask_graphics_100 = new cjs.Graphics().p("AoLITIMlzGIDyChIslTGg");
	var mask_graphics_101 = new cjs.Graphics().p("AoSIdIMzzaIDyCgIsyTag");
	var mask_graphics_102 = new cjs.Graphics().p("AoZIoINAzvIDzCgItATvg");
	var mask_graphics_103 = new cjs.Graphics().p("AofIyINN0DIDzCgItOUDg");
	var mask_graphics_104 = new cjs.Graphics().p("AomI8INb0XIDyCgItbUXg");
	var mask_graphics_105 = new cjs.Graphics().p("AotJGINo0sIDzChItpUrg");
	var mask_graphics_106 = new cjs.Graphics().p("Ao0JRIN21BIDzCgIt2VAg");
	var mask_graphics_107 = new cjs.Graphics().p("Ao7JbIOE1VIDyCgIuDVVg");
	var mask_graphics_108 = new cjs.Graphics().p("ApBJlIOR1pIDyCgIuRVpg");
	var mask_graphics_109 = new cjs.Graphics().p("ApIJvIOf19IDyCgIueV9g");
	var mask_graphics_110 = new cjs.Graphics().p("ApPJ6IOs2TIDzCgIusWTg");
	var mask_graphics_111 = new cjs.Graphics().p("ApVKEIO52nIDzCgIu6Wng");
	var mask_graphics_112 = new cjs.Graphics().p("ApcKOIPH27IDyCgIvHW7g");
	var mask_graphics_113 = new cjs.Graphics().p("ApjKYIPV3PIDyCgIvUXPg");
	var mask_graphics_114 = new cjs.Graphics().p("ApqKiIPi3jIDzCgIviXjg");
	var mask_graphics_115 = new cjs.Graphics().p("ApxKsIPw34IDyCgIvvX4g");
	var mask_graphics_116 = new cjs.Graphics().p("Ap3K3IP94NIDyCgIv9YNg");
	var mask_graphics_117 = new cjs.Graphics().p("Ap+LBIQK4hIDzCgIwLYhg");
	var mask_graphics_118 = new cjs.Graphics().p("AqFLLIQY41IDzCgIwYY1g");
	var mask_graphics_119 = new cjs.Graphics().p("AqLLWIQl5KIDzCfIwmZKg");
	var mask_graphics_120 = new cjs.Graphics().p("AqSLgIQz5fIDyCgIwzZfg");
	var mask_graphics_121 = new cjs.Graphics().p("AqZLqIRB5zIDyCgIxAZzg");
	var mask_graphics_122 = new cjs.Graphics().p("AqgL0IRO6HIDzCgIxOaHg");
	var mask_graphics_123 = new cjs.Graphics().p("AqnL+IRc6bIDyCgIxbabg");
	var mask_graphics_124 = new cjs.Graphics().p("AqtMJIRp6xIDyCgIxpaxg");
	var mask_graphics_125 = new cjs.Graphics().p("Aq0MTIR27FIDzCgIx3bFg");
	var mask_graphics_126 = new cjs.Graphics().p("Aq7MdISE7ZIDzCgIyEbZg");
	var mask_graphics_127 = new cjs.Graphics().p("ArBMnISR7tIDyCgIyRbtg");
	var mask_graphics_128 = new cjs.Graphics().p("ArIMxISf8BIDyCgIyfcBg");
	var mask_graphics_129 = new cjs.Graphics().p("ArPM8ISs8XIDzCgIyscXg");
	var mask_graphics_130 = new cjs.Graphics().p("ArWNGIS68rIDzCgIy6crg");
	var mask_graphics_131 = new cjs.Graphics().p("ArcNQITH8/IDyCgIzHc/g");
	var mask_graphics_132 = new cjs.Graphics().p("ArjNaITU9TIDzCgIzUdTg");
	var mask_graphics_133 = new cjs.Graphics().p("ArqNkITi9nIDzCfIzidog");
	var mask_graphics_134 = new cjs.Graphics().p("ArwNvITv99IDyCgIzvd9g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(45).to({graphics:mask_graphics_45,x:30.8,y:-37}).wait(1).to({graphics:mask_graphics_46,x:45.7,y:-60.3}).wait(1).to({graphics:mask_graphics_47,x:45.1,y:-59.6}).wait(1).to({graphics:mask_graphics_48,x:44.5,y:-58.9}).wait(1).to({graphics:mask_graphics_49,x:43.9,y:-58.1}).wait(1).to({graphics:mask_graphics_50,x:43.4,y:-57.4}).wait(1).to({graphics:mask_graphics_51,x:42.8,y:-56.7}).wait(1).to({graphics:mask_graphics_52,x:42.2,y:-55.9}).wait(1).to({graphics:mask_graphics_53,x:41.6,y:-55.2}).wait(1).to({graphics:mask_graphics_54,x:41,y:-54.5}).wait(1).to({graphics:mask_graphics_55,x:40.5,y:-53.7}).wait(1).to({graphics:mask_graphics_56,x:39.9,y:-53}).wait(1).to({graphics:mask_graphics_57,x:39.3,y:-52.3}).wait(1).to({graphics:mask_graphics_58,x:38.7,y:-51.5}).wait(1).to({graphics:mask_graphics_59,x:38.2,y:-50.8}).wait(1).to({graphics:mask_graphics_60,x:37.6,y:-50.1}).wait(1).to({graphics:mask_graphics_61,x:37,y:-49.3}).wait(1).to({graphics:mask_graphics_62,x:36.4,y:-48.6}).wait(1).to({graphics:mask_graphics_63,x:35.9,y:-47.9}).wait(1).to({graphics:mask_graphics_64,x:35.3,y:-47.1}).wait(1).to({graphics:mask_graphics_65,x:34.7,y:-46.4}).wait(1).to({graphics:mask_graphics_66,x:34.1,y:-45.7}).wait(1).to({graphics:mask_graphics_67,x:33.6,y:-44.9}).wait(1).to({graphics:mask_graphics_68,x:32.9,y:-44.2}).wait(1).to({graphics:mask_graphics_69,x:32.4,y:-43.5}).wait(1).to({graphics:mask_graphics_70,x:31.8,y:-42.7}).wait(1).to({graphics:mask_graphics_71,x:31.2,y:-42}).wait(1).to({graphics:mask_graphics_72,x:30.6,y:-41.3}).wait(1).to({graphics:mask_graphics_73,x:30.1,y:-40.5}).wait(1).to({graphics:mask_graphics_74,x:29.5,y:-39.8}).wait(1).to({graphics:mask_graphics_75,x:28.9,y:-39.1}).wait(1).to({graphics:mask_graphics_76,x:28.3,y:-38.3}).wait(1).to({graphics:mask_graphics_77,x:27.8,y:-37.6}).wait(1).to({graphics:mask_graphics_78,x:27.2,y:-36.9}).wait(1).to({graphics:mask_graphics_79,x:26.6,y:-36.1}).wait(1).to({graphics:mask_graphics_80,x:26,y:-35.4}).wait(1).to({graphics:mask_graphics_81,x:25.5,y:-34.7}).wait(1).to({graphics:mask_graphics_82,x:24.9,y:-33.9}).wait(1).to({graphics:mask_graphics_83,x:24.3,y:-33.2}).wait(1).to({graphics:mask_graphics_84,x:23.7,y:-32.5}).wait(1).to({graphics:mask_graphics_85,x:23.1,y:-31.7}).wait(1).to({graphics:mask_graphics_86,x:22.6,y:-31}).wait(1).to({graphics:mask_graphics_87,x:22,y:-30.3}).wait(1).to({graphics:mask_graphics_88,x:21.4,y:-29.5}).wait(1).to({graphics:mask_graphics_89,x:20.8,y:-28.8}).wait(1).to({graphics:mask_graphics_90,x:20.3,y:-28.1}).wait(1).to({graphics:mask_graphics_91,x:19.7,y:-27.3}).wait(1).to({graphics:mask_graphics_92,x:19.1,y:-26.6}).wait(1).to({graphics:mask_graphics_93,x:18.5,y:-25.9}).wait(1).to({graphics:mask_graphics_94,x:18,y:-25.1}).wait(1).to({graphics:mask_graphics_95,x:17.4,y:-24.4}).wait(1).to({graphics:mask_graphics_96,x:16.8,y:-23.7}).wait(1).to({graphics:mask_graphics_97,x:16.2,y:-22.9}).wait(1).to({graphics:mask_graphics_98,x:15.6,y:-22.2}).wait(1).to({graphics:mask_graphics_99,x:15.1,y:-21.5}).wait(1).to({graphics:mask_graphics_100,x:14.5,y:-20.7}).wait(1).to({graphics:mask_graphics_101,x:13.9,y:-20}).wait(1).to({graphics:mask_graphics_102,x:13.3,y:-19.3}).wait(1).to({graphics:mask_graphics_103,x:12.8,y:-18.5}).wait(1).to({graphics:mask_graphics_104,x:12.2,y:-17.8}).wait(1).to({graphics:mask_graphics_105,x:11.6,y:-17.1}).wait(1).to({graphics:mask_graphics_106,x:11,y:-16.3}).wait(1).to({graphics:mask_graphics_107,x:10.5,y:-15.6}).wait(1).to({graphics:mask_graphics_108,x:9.9,y:-14.9}).wait(1).to({graphics:mask_graphics_109,x:9.3,y:-14.2}).wait(1).to({graphics:mask_graphics_110,x:8.7,y:-13.4}).wait(1).to({graphics:mask_graphics_111,x:8.2,y:-12.7}).wait(1).to({graphics:mask_graphics_112,x:7.5,y:-11.9}).wait(1).to({graphics:mask_graphics_113,x:7,y:-11.2}).wait(1).to({graphics:mask_graphics_114,x:6.4,y:-10.5}).wait(1).to({graphics:mask_graphics_115,x:5.8,y:-9.7}).wait(1).to({graphics:mask_graphics_116,x:5.2,y:-9}).wait(1).to({graphics:mask_graphics_117,x:4.7,y:-8.3}).wait(1).to({graphics:mask_graphics_118,x:4.1,y:-7.6}).wait(1).to({graphics:mask_graphics_119,x:3.5,y:-6.8}).wait(1).to({graphics:mask_graphics_120,x:2.9,y:-6.1}).wait(1).to({graphics:mask_graphics_121,x:2.4,y:-5.3}).wait(1).to({graphics:mask_graphics_122,x:1.8,y:-4.6}).wait(1).to({graphics:mask_graphics_123,x:1.2,y:-3.9}).wait(1).to({graphics:mask_graphics_124,x:0.6,y:-3.1}).wait(1).to({graphics:mask_graphics_125,x:0.1,y:-2.4}).wait(1).to({graphics:mask_graphics_126,x:-0.5,y:-1.7}).wait(1).to({graphics:mask_graphics_127,x:-1.1,y:-1}).wait(1).to({graphics:mask_graphics_128,x:-1.7,y:-0.2}).wait(1).to({graphics:mask_graphics_129,x:-2.3,y:0.5}).wait(1).to({graphics:mask_graphics_130,x:-2.8,y:1.3}).wait(1).to({graphics:mask_graphics_131,x:-3.4,y:2}).wait(1).to({graphics:mask_graphics_132,x:-4,y:2.7}).wait(1).to({graphics:mask_graphics_133,x:-4.6,y:3.5}).wait(1).to({graphics:mask_graphics_134,x:-5.1,y:4.2}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AMyofUgKKgNKgPZAh1");
	this.shape.setTransform(22.8,13);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(45).to({_off:false},0).wait(90));

	// Layer 3 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("A4uRQMAoUgqgQIzIWAVMHQAVMIoXI0QoXI0sHAUIg8AAQriAAoeoBg");
	var mask_1_graphics_1 = new cjs.Graphics().p("A4nRiMAn5gq5QI5ISAcMHQAcMIoRI4QoSI5sHAbIhQACQrVAAobn2g");
	var mask_1_graphics_2 = new cjs.Graphics().p("A4hRzMAnggrQQI+IMAjMHQAjMIoMI9QoMI+sHAiQgyADgxAAQrJAAoZnrg");
	var mask_1_graphics_3 = new cjs.Graphics().p("A4aSFMAnFgroQJDIHAqMGQArMHoHJDQoGJDsHApQg8AEg6AAQq+AAoVnfg");
	var mask_1_graphics_4 = new cjs.Graphics().p("A4USXMAmrgr/QJIIBAyMFQAxMHoBJIQoBJHsGAxQhGAEhEAAQqxAAoTnSg");
	var mask_1_graphics_5 = new cjs.Graphics().p("A4NSoMAmQgsWQJNH7A5MGQA5MGn8JMQn8JMsFA4QhPAGhOAAQqlAAoQnHg");
	var mask_1_graphics_6 = new cjs.Graphics().p("A4HS5MAl2gstQJRH2BAMFQBBMFn2JRQn2JRsFBAQhZAHhXAAQqaAAoNm8g");
	var mask_1_graphics_7 = new cjs.Graphics().p("A4ATKMAlbgtEQJWHxBHMEQBIMFnxJVQnwJWsEBHQhjAJhgAAQqPAAoJmxg");
	var mask_1_graphics_8 = new cjs.Graphics().p("A35TaMAk/gtaQJbHrBOMEQBPMEnqJaQnrJbsEBNQhsAMhpAAQqDAAoGmng");
	var mask_1_graphics_9 = new cjs.Graphics().p("A3zTrMAklgtwQJfHlBWMDQBWMDnlJfQnmJfsCBVQh2ANhxAAQp5AAoDmbg");
	var mask_1_graphics_10 = new cjs.Graphics().p("A3sT7MAkJguGQJkHgBdMBQBdMDnfJkQngJjsCBcQh+AQh7AAQpuAAn/mRg");
	var mask_1_graphics_11 = new cjs.Graphics().p("A3lULMAjtgubQJoHZBkMBQBlMCnaJoQnZJosBBjQiIASiDAAQpkAAn7mGg");
	var mask_1_graphics_12 = new cjs.Graphics().p("A3eUbMAjRguxQJsHUBsMAQBsMBnUJsQnUJtsABqQiRAViMAAQpZAAn3l8g");
	var mask_1_graphics_13 = new cjs.Graphics().p("A3XUrMAi1gvGQJwHOBzL/QBzMAnOJwQnOJxr/ByQiaAXiUAAQpPAAnzlxg");
	var mask_1_graphics_14 = new cjs.Graphics().p("A3QU6MAiYgvaQJ1HIB6L9QB7L/nJJ1QnIJ1r+B5QijAaicAAQpFAAnvlng");
	var mask_1_graphics_15 = new cjs.Graphics().p("A3JVKMAh8gvwQJ5HDCBL8QCCL+nDJ5QnCJ5r9CAQirAeimAAQo6AAnrldg");
	var mask_1_graphics_16 = new cjs.Graphics().p("A3CVZMAhfgwEQJ+G8CIL8QCJL8m9J9Qm8J+r7CHQi1AhiuAAQowAAnnlTg");
	var mask_1_graphics_17 = new cjs.Graphics().p("A27VnMAhCgwXQKCG2CPL6QCQL7m2KCQm2KBr7CPQi9Aki2AAQonAAnilKg");
	var mask_1_graphics_18 = new cjs.Graphics().p("A20V2MAglgwrQKGGwCXL5QCXL5mxKGQmwKGr5CWQjGAni+AAQodAAnelAg");
	var mask_1_graphics_19 = new cjs.Graphics().p("A2sWFMAgHgw/QKKGqCeL3QCeL4mqKKQmqKKr4CdQjOArjHAAQoTAAnZk2g");
	var mask_1_graphics_20 = new cjs.Graphics().p("A2lWTMAfqgxSQKOGkClL2QClL2mkKOQmkKOr2CkQjXAvjPAAQoKAAnUktg");
	var mask_1_graphics_21 = new cjs.Graphics().p("A2eWhMAfNgxlQKRGeCsL0QCtL1meKSQmeKRr0CsQjgAzjWAAQoBAAnQkkg");
	var mask_1_graphics_22 = new cjs.Graphics().p("A2XWvMAevgx3QKWGXCzLzQCzLzmYKVQmXKWrzCyQjnA3jfAAQn4AAnLkag");
	var mask_1_graphics_23 = new cjs.Graphics().p("A2PW8MAeRgyJQKZGRC6LxQC6LymRKZQmRKZrxC6QjwA7jnAAQnvAAnFkSg");
	var mask_1_graphics_24 = new cjs.Graphics().p("A2IXKMAdzgycQKdGLDBLvQDCLwmMKdQmLKdrwDBQj3BAjvAAQnlAAnBkJg");
	var mask_1_graphics_25 = new cjs.Graphics().p("A2AXXMAdUgytQKhGFDILtQDJLumFKgQmFKhrvDIQj/BEj2AAQndAAm7kAg");
	var mask_1_graphics_26 = new cjs.Graphics().p("A15XkMAc2gy/QKkF/DPLrQDQLsl+KkQl/KlrsDOQkHBKj/AAQnUAAm2j4g");
	var mask_1_graphics_27 = new cjs.Graphics().p("A1xXxMAcXgzQQKoF4DWLpQDXLql5KoQl4KorqDWQkPBOkHAAQnLAAmwjvg");
	var mask_1_graphics_28 = new cjs.Graphics().p("A1pX+MAb4gzhQKrFxDdLoQDeLolyKrQlyKrroDdQkXBTkOAAQnDAAmqjmg");
	var mask_1_graphics_29 = new cjs.Graphics().p("A1iYKMAbZgzyQKvFsDkLlQDlLmlrKvQlsKurmDkQkeBZkXAAQm6AAmljfg");
	var mask_1_graphics_30 = new cjs.Graphics().p("A1aYWMAa6g0CQKyFlDrLjQDsLkllKyQllKyrkDrQkmBekfAAQmxAAmfjXg");
	var mask_1_graphics_31 = new cjs.Graphics().p("A1SYiMAaag0SQK2FfDyLgQDyLileK1QleK2riDxQkuBkkmAAQmpAAmZjPg");
	var mask_1_graphics_32 = new cjs.Graphics().p("A1KYuMAZ7g0iQK4FYD5LeQD6LglYK4QlYK5rgD4Qk0BqkvAAQmgAAmTjHg");
	var mask_1_graphics_33 = new cjs.Graphics().p("A1CY5MAZbg0xQK8FSEALcQEALclRK8QlSK8rdD/Qk8Bwk3AAQmXAAmNjAg");
	var mask_1_graphics_34 = new cjs.Graphics().p("A06ZFMAY7g1BQK/FLEHLaQEHLalLK/QlKK/rbEGQlDB2k/AAQmPAAmHi4g");
	var mask_1_graphics_35 = new cjs.Graphics().p("A0zZQMAYcg1PQLCFEEOLXQEOLZlELBQlELCrZENQlKB7lHAAQmHAAmBiwg");
	var mask_1_graphics_36 = new cjs.Graphics().p("A0rZbMAX8g1eQLFE+EULUQEVLWk9LFQk+LFrVETQlSCClOAAQl/AAl7ipg");
	var mask_1_graphics_37 = new cjs.Graphics().p("A0iZlMAXbg1sQLIE3EbLSQEcLUk3LHQk3LIrTEbQlYCIlXAAQl3AAlzijg");
	var mask_1_graphics_38 = new cjs.Graphics().p("A0aZwMAW7g16QLLEwEhLPQEjLRkwLKQkwLLrREiQlfCOlfAAQluAAltibg");
	var mask_1_graphics_39 = new cjs.Graphics().p("A0SZ6MAWag2HQLOEpEpLMQEpLPkpLMQkqLOrOEoQllCVlnAAQlnAAlmiUg");
	var mask_1_graphics_40 = new cjs.Graphics().p("A0KaEMAV6g2VQLQEjEwLJQEwLMkjLQQkjLQrLEvQlsCclvAAQleAAlgiOg");
	var mask_1_graphics_41 = new cjs.Graphics().p("A0CaOMAVZg2iQLUEcE2LHQE2LIkcLSQkbLUrJE1QlzCjl3AAQlWAAlZiHg");
	var mask_1_graphics_42 = new cjs.Graphics().p("Az6aXMAU5g2uQLWEVE8LEQE+LFkVLVQkVLWrGE8Ql5CqmAAAQlOAAlSiBg");
	var mask_1_graphics_43 = new cjs.Graphics().p("AzyagMAUYg26QLYEOFELBQFELCkOLYQkPLYrCFDQmACxmHAAQlHAAlLh7g");
	var mask_1_graphics_44 = new cjs.Graphics().p("AzpaqMAT2g3HQLbEHFKK+QFLK/kILaQkHLbq/FKQmGC4mQAAQk+AAlEh0g");
	var mask_1_graphics_45 = new cjs.Graphics().p("AzhayMATWg3SQLdEAFQK7QFSK8kBLdQkBLdq7FQQmNDAmYAAQk2AAk9hvg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:27,y:89.7}).wait(1).to({graphics:mask_1_graphics_1,x:27.6,y:89.1}).wait(1).to({graphics:mask_1_graphics_2,x:28.3,y:88.5}).wait(1).to({graphics:mask_1_graphics_3,x:28.9,y:87.9}).wait(1).to({graphics:mask_1_graphics_4,x:29.6,y:87.4}).wait(1).to({graphics:mask_1_graphics_5,x:30.3,y:86.8}).wait(1).to({graphics:mask_1_graphics_6,x:31,y:86.3}).wait(1).to({graphics:mask_1_graphics_7,x:31.6,y:85.7}).wait(1).to({graphics:mask_1_graphics_8,x:32.3,y:85.2}).wait(1).to({graphics:mask_1_graphics_9,x:33,y:84.6}).wait(1).to({graphics:mask_1_graphics_10,x:33.7,y:84.1}).wait(1).to({graphics:mask_1_graphics_11,x:34.4,y:83.6}).wait(1).to({graphics:mask_1_graphics_12,x:35.1,y:83.1}).wait(1).to({graphics:mask_1_graphics_13,x:35.9,y:82.6}).wait(1).to({graphics:mask_1_graphics_14,x:36.6,y:82.1}).wait(1).to({graphics:mask_1_graphics_15,x:37.3,y:81.6}).wait(1).to({graphics:mask_1_graphics_16,x:38,y:81.1}).wait(1).to({graphics:mask_1_graphics_17,x:38.8,y:80.6}).wait(1).to({graphics:mask_1_graphics_18,x:39.5,y:80.2}).wait(1).to({graphics:mask_1_graphics_19,x:40.3,y:79.7}).wait(1).to({graphics:mask_1_graphics_20,x:41,y:79.2}).wait(1).to({graphics:mask_1_graphics_21,x:41.8,y:78.8}).wait(1).to({graphics:mask_1_graphics_22,x:42.5,y:78.3}).wait(1).to({graphics:mask_1_graphics_23,x:43.3,y:77.9}).wait(1).to({graphics:mask_1_graphics_24,x:44.1,y:77.5}).wait(1).to({graphics:mask_1_graphics_25,x:44.8,y:77}).wait(1).to({graphics:mask_1_graphics_26,x:45.6,y:76.6}).wait(1).to({graphics:mask_1_graphics_27,x:46.4,y:76.2}).wait(1).to({graphics:mask_1_graphics_28,x:47.2,y:75.8}).wait(1).to({graphics:mask_1_graphics_29,x:47.9,y:75.4}).wait(1).to({graphics:mask_1_graphics_30,x:48.7,y:75}).wait(1).to({graphics:mask_1_graphics_31,x:49.5,y:74.6}).wait(1).to({graphics:mask_1_graphics_32,x:50.3,y:74.3}).wait(1).to({graphics:mask_1_graphics_33,x:51.1,y:73.9}).wait(1).to({graphics:mask_1_graphics_34,x:51.9,y:73.5}).wait(1).to({graphics:mask_1_graphics_35,x:52.7,y:73.2}).wait(1).to({graphics:mask_1_graphics_36,x:53.5,y:72.8}).wait(1).to({graphics:mask_1_graphics_37,x:54.3,y:72.5}).wait(1).to({graphics:mask_1_graphics_38,x:55.2,y:72.1}).wait(1).to({graphics:mask_1_graphics_39,x:56,y:71.8}).wait(1).to({graphics:mask_1_graphics_40,x:56.8,y:71.5}).wait(1).to({graphics:mask_1_graphics_41,x:57.6,y:71.2}).wait(1).to({graphics:mask_1_graphics_42,x:58.4,y:70.9}).wait(1).to({graphics:mask_1_graphics_43,x:59.3,y:70.6}).wait(1).to({graphics:mask_1_graphics_44,x:60.1,y:70.3}).wait(1).to({graphics:mask_1_graphics_45,x:60.9,y:69.9}).wait(90));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AMyofUgKKgNKgPZAh1");
	this.shape_1.setTransform(22.8,13);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(135));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-67.4,174.8,161);


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
(lib.WS_Cursive_E = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_659 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(659).call(this.frame_659).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(356.9,128.1,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[356.8,128.2,348.9,116.8,340.2,111.4,330.7,105.6,319.5,104.2,309,102.7,298.7,104.5,287.4,106.2,277.2,110.5,266.9,114.7,257.6,120.3,247.6,126.3,238.9,134.1,229.8,142.1,223.1,152,217.3,160.8,213.4,170.5,209.6,180.1,207.4,190.3,205,201.3,204.6,212.6,204.1,224.9,205.9,236.9,207.7,249,212.7,260.2,217.4,270.6,225.1,279,232.2,286.9,242,291.3,253.5,296.6,266,295.5,279.8,294.4,282.1,281.8]}},250).wait(11).to({startPosition:0},0).to({guide:{path:[282.3,281.1,277.4,249.3,239.2,252.4,189.7,256.3,155.4,292.2,119.1,330.3,130.1,381.5,139.1,423.7,180.5,438.7,227,455.7,272.3,435.8,317.7,415.8,353.8,388.3,390,360.8,405,339.9,419.9,319,428.1,312.6]}},309).wait(15).to({startPosition:0},0).to({guide:{path:[428.3,312.6,426.4,239,499.1,260.6,554.5,277.2,609.1,284.7,619,286.1,626.5,277.1,639.4,261.9,642.7,258.1]}},65).wait(1));

	// Layer 11
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(279.8,281.9,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},250).wait(11).to({_off:false,x:426.4,y:315.9},0).to({_off:true},309).wait(81));

	// Layer 10
	this.instance_1 = new lib.ar3("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(280.7,363.8,1,1,-156.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(270).to({_off:false},0).wait(390));

	// Layer 8 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_475 = new cjs.Graphics().p("EAJyAkfIAA6QILQAAIAAaQg");
	var mask_graphics_476 = new cjs.Graphics().p("AlwNIIAA6PILhAAIAAaPg");
	var mask_graphics_477 = new cjs.Graphics().p("Al5NIIAA6PILzAAIAAaPg");
	var mask_graphics_478 = new cjs.Graphics().p("AmCNIIAA6PIMFAAIAAaPg");
	var mask_graphics_479 = new cjs.Graphics().p("AmLNIIAA6PIMXAAIAAaPg");
	var mask_graphics_480 = new cjs.Graphics().p("AmTNIIAA6PIMnAAIAAaPg");
	var mask_graphics_481 = new cjs.Graphics().p("AmcNIIAA6PIM5AAIAAaPg");
	var mask_graphics_482 = new cjs.Graphics().p("AmlNIIAA6PINLAAIAAaPg");
	var mask_graphics_483 = new cjs.Graphics().p("AmtNIIAA6PINbAAIAAaPg");
	var mask_graphics_484 = new cjs.Graphics().p("Am3NIIAA6PINvAAIAAaPg");
	var mask_graphics_485 = new cjs.Graphics().p("Am/NIIAA6PIN/AAIAAaPg");
	var mask_graphics_486 = new cjs.Graphics().p("AnINIIAA6PIORAAIAAaPg");
	var mask_graphics_487 = new cjs.Graphics().p("AnRNIIAA6PIOjAAIAAaPg");
	var mask_graphics_488 = new cjs.Graphics().p("AnaNIIAA6PIO0AAIAAaPg");
	var mask_graphics_489 = new cjs.Graphics().p("AnjNIIAA6PIPHAAIAAaPg");
	var mask_graphics_490 = new cjs.Graphics().p("AnrNIIAA6PIPXAAIAAaPg");
	var mask_graphics_491 = new cjs.Graphics().p("An0NIIAA6PIPpAAIAAaPg");
	var mask_graphics_492 = new cjs.Graphics().p("An9NIIAA6PIP7AAIAAaPg");
	var mask_graphics_493 = new cjs.Graphics().p("AoFNIIAA6PIQLAAIAAaPg");
	var mask_graphics_494 = new cjs.Graphics().p("AoONIIAA6PIQdAAIAAaPg");
	var mask_graphics_495 = new cjs.Graphics().p("AoXNIIAA6PIQvAAIAAaPg");
	var mask_graphics_496 = new cjs.Graphics().p("AogNIIAA6PIRBAAIAAaPg");
	var mask_graphics_497 = new cjs.Graphics().p("AooNIIAA6PIRSAAIAAaPg");
	var mask_graphics_498 = new cjs.Graphics().p("AoxNIIAA6PIRjAAIAAaPg");
	var mask_graphics_499 = new cjs.Graphics().p("Ao6NIIAA6PIR1AAIAAaPg");
	var mask_graphics_500 = new cjs.Graphics().p("ApDNIIAA6PISHAAIAAaPg");
	var mask_graphics_501 = new cjs.Graphics().p("ApMNIIAA6PISZAAIAAaPg");
	var mask_graphics_502 = new cjs.Graphics().p("ApVNIIAA6PISqAAIAAaPg");
	var mask_graphics_503 = new cjs.Graphics().p("ApdNIIAA6PIS7AAIAAaPg");
	var mask_graphics_504 = new cjs.Graphics().p("ApmNIIAA6PITNAAIAAaPg");
	var mask_graphics_505 = new cjs.Graphics().p("ApvNIIAA6PITfAAIAAaPg");
	var mask_graphics_506 = new cjs.Graphics().p("Ap3NIIAA6PITvAAIAAaPg");
	var mask_graphics_507 = new cjs.Graphics().p("AqANIIAA6PIUBAAIAAaPg");
	var mask_graphics_508 = new cjs.Graphics().p("AqJNIIAA6PIUTAAIAAaPg");
	var mask_graphics_509 = new cjs.Graphics().p("AqSNIIAA6PIUlAAIAAaPg");
	var mask_graphics_510 = new cjs.Graphics().p("AqaNIIAA6PIU1AAIAAaPg");
	var mask_graphics_511 = new cjs.Graphics().p("AqkNIIAA6PIVJAAIAAaPg");
	var mask_graphics_512 = new cjs.Graphics().p("AqsNIIAA6PIVZAAIAAaPg");
	var mask_graphics_513 = new cjs.Graphics().p("Aq1NIIAA6PIVrAAIAAaPg");
	var mask_graphics_514 = new cjs.Graphics().p("Aq+NIIAA6PIV8AAIAAaPg");
	var mask_graphics_515 = new cjs.Graphics().p("ArGNIIAA6PIWNAAIAAaPg");
	var mask_graphics_516 = new cjs.Graphics().p("ArPNIIAA6PIWfAAIAAaPg");
	var mask_graphics_517 = new cjs.Graphics().p("ArYNIIAA6PIWxAAIAAaPg");
	var mask_graphics_518 = new cjs.Graphics().p("ArhNIIAA6PIXDAAIAAaPg");
	var mask_graphics_519 = new cjs.Graphics().p("ArpNIIAA6PIXUAAIAAaPg");
	var mask_graphics_520 = new cjs.Graphics().p("AryNIIAA6PIXlAAIAAaPg");
	var mask_graphics_521 = new cjs.Graphics().p("Ar7NIIAA6PIX3AAIAAaPg");
	var mask_graphics_522 = new cjs.Graphics().p("AsENIIAA6PIYJAAIAAaPg");
	var mask_graphics_523 = new cjs.Graphics().p("AsNNIIAA6PIYbAAIAAaPg");
	var mask_graphics_524 = new cjs.Graphics().p("AsVNIIAA6PIYrAAIAAaPg");
	var mask_graphics_525 = new cjs.Graphics().p("AseNIIAA6PIY9AAIAAaPg");
	var mask_graphics_526 = new cjs.Graphics().p("AsnNIIAA6PIZPAAIAAaPg");
	var mask_graphics_527 = new cjs.Graphics().p("AswNIIAA6PIZhAAIAAaPg");
	var mask_graphics_528 = new cjs.Graphics().p("As4NIIAA6PIZxAAIAAaPg");
	var mask_graphics_529 = new cjs.Graphics().p("EACVAkfIAA6QIaFAAIAAaQg");
	var mask_graphics_530 = new cjs.Graphics().p("AtJNIIAA6PIaTAAIAAaPg");
	var mask_graphics_531 = new cjs.Graphics().p("AtQNIIAA6PIahAAIAAaPg");
	var mask_graphics_532 = new cjs.Graphics().p("AtYNIIAA6PIaxAAIAAaPg");
	var mask_graphics_533 = new cjs.Graphics().p("AtgNIIAA6PIbBAAIAAaPg");
	var mask_graphics_534 = new cjs.Graphics().p("AtoNIIAA6PIbRAAIAAaPg");
	var mask_graphics_535 = new cjs.Graphics().p("AtvNIIAA6PIbfAAIAAaPg");
	var mask_graphics_536 = new cjs.Graphics().p("At3NIIAA6PIbvAAIAAaPg");
	var mask_graphics_537 = new cjs.Graphics().p("At/NIIAA6PIb+AAIAAaPg");
	var mask_graphics_538 = new cjs.Graphics().p("AuGNIIAA6PIcNAAIAAaPg");
	var mask_graphics_539 = new cjs.Graphics().p("AuONIIAA6PIcdAAIAAaPg");
	var mask_graphics_540 = new cjs.Graphics().p("AuVNIIAA6PIcrAAIAAaPg");
	var mask_graphics_541 = new cjs.Graphics().p("AudNIIAA6PIc7AAIAAaPg");
	var mask_graphics_542 = new cjs.Graphics().p("AulNIIAA6PIdLAAIAAaPg");
	var mask_graphics_543 = new cjs.Graphics().p("AusNIIAA6PIdZAAIAAaPg");
	var mask_graphics_544 = new cjs.Graphics().p("Au0NIIAA6PIdpAAIAAaPg");
	var mask_graphics_545 = new cjs.Graphics().p("Au8NIIAA6PId5AAIAAaPg");
	var mask_graphics_546 = new cjs.Graphics().p("AvENIIAA6PIeJAAIAAaPg");
	var mask_graphics_547 = new cjs.Graphics().p("AvLNIIAA6PIeXAAIAAaPg");
	var mask_graphics_548 = new cjs.Graphics().p("AvTNIIAA6PIenAAIAAaPg");
	var mask_graphics_549 = new cjs.Graphics().p("AvaNIIAA6PIe1AAIAAaPg");
	var mask_graphics_550 = new cjs.Graphics().p("AviNIIAA6PIfFAAIAAaPg");
	var mask_graphics_551 = new cjs.Graphics().p("AvqNIIAA6PIfVAAIAAaPg");
	var mask_graphics_552 = new cjs.Graphics().p("AvxNIIAA6PIfjAAIAAaPg");
	var mask_graphics_553 = new cjs.Graphics().p("Av5NIIAA6PIfzAAIAAaPg");
	var mask_graphics_554 = new cjs.Graphics().p("AwANIIAA6PMAgCAAAIAAaPg");
	var mask_graphics_555 = new cjs.Graphics().p("AwINIIAA6PMAgRAAAIAAaPg");
	var mask_graphics_556 = new cjs.Graphics().p("AwQNIIAA6PMAghAAAIAAaPg");
	var mask_graphics_557 = new cjs.Graphics().p("AwYNIIAA6PMAgwAAAIAAaPg");
	var mask_graphics_558 = new cjs.Graphics().p("AwfNIIAA6PMAg/AAAIAAaPg");
	var mask_graphics_559 = new cjs.Graphics().p("AwnNIIAA6PMAhPAAAIAAaPg");
	var mask_graphics_560 = new cjs.Graphics().p("AwuNIIAA6PMAheAAAIAAaPg");
	var mask_graphics_561 = new cjs.Graphics().p("Aw2NIIAA6PMAhtAAAIAAaPg");
	var mask_graphics_562 = new cjs.Graphics().p("Aw+NIIAA6PMAh9AAAIAAaPg");
	var mask_graphics_563 = new cjs.Graphics().p("AxFNIIAA6PMAiMAAAIAAaPg");
	var mask_graphics_564 = new cjs.Graphics().p("AxNNIIAA6PMAibAAAIAAaPg");
	var mask_graphics_565 = new cjs.Graphics().p("AxVNIIAA6PMAirAAAIAAaPg");
	var mask_graphics_566 = new cjs.Graphics().p("AxdNIIAA6PMAi6AAAIAAaPg");
	var mask_graphics_567 = new cjs.Graphics().p("AxkNIIAA6PMAjJAAAIAAaPg");
	var mask_graphics_568 = new cjs.Graphics().p("AxsNIIAA6PMAjZAAAIAAaPg");
	var mask_graphics_569 = new cjs.Graphics().p("AxzNIIAA6PMAjoAAAIAAaPg");
	var mask_graphics_570 = new cjs.Graphics().p("Ax7NIIAA6PMAj3AAAIAAaPg");
	var mask_graphics_571 = new cjs.Graphics().p("AyDNIIAA6PMAkHAAAIAAaPg");
	var mask_graphics_572 = new cjs.Graphics().p("AyKNIIAA6PMAkVAAAIAAaPg");
	var mask_graphics_573 = new cjs.Graphics().p("AySNIIAA6PMAklAAAIAAaPg");
	var mask_graphics_574 = new cjs.Graphics().p("AyaNIIAA6PMAk1AAAIAAaPg");
	var mask_graphics_575 = new cjs.Graphics().p("AyhNIIAA6PMAlDAAAIAAaPg");
	var mask_graphics_576 = new cjs.Graphics().p("AypNIIAA6PMAlTAAAIAAaPg");
	var mask_graphics_577 = new cjs.Graphics().p("AyxNIIAA6PMAljAAAIAAaPg");
	var mask_graphics_578 = new cjs.Graphics().p("Ay5NIIAA6PMAlyAAAIAAaPg");
	var mask_graphics_579 = new cjs.Graphics().p("EgDrAkfIAA6QMAmBAAAIAAaQg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(475).to({graphics:mask_graphics_475,x:134.6,y:233.5}).wait(1).to({graphics:mask_graphics_476,x:234.1,y:383.1}).wait(1).to({graphics:mask_graphics_477,x:235,y:383.1}).wait(1).to({graphics:mask_graphics_478,x:235.9,y:383.1}).wait(1).to({graphics:mask_graphics_479,x:236.7,y:383.1}).wait(1).to({graphics:mask_graphics_480,x:237.6,y:383.1}).wait(1).to({graphics:mask_graphics_481,x:238.5,y:383.1}).wait(1).to({graphics:mask_graphics_482,x:239.3,y:383.1}).wait(1).to({graphics:mask_graphics_483,x:240.2,y:383.1}).wait(1).to({graphics:mask_graphics_484,x:241.1,y:383.1}).wait(1).to({graphics:mask_graphics_485,x:241.9,y:383.1}).wait(1).to({graphics:mask_graphics_486,x:242.8,y:383.1}).wait(1).to({graphics:mask_graphics_487,x:243.7,y:383.1}).wait(1).to({graphics:mask_graphics_488,x:244.6,y:383.1}).wait(1).to({graphics:mask_graphics_489,x:245.4,y:383.1}).wait(1).to({graphics:mask_graphics_490,x:246.3,y:383.1}).wait(1).to({graphics:mask_graphics_491,x:247.2,y:383.1}).wait(1).to({graphics:mask_graphics_492,x:248,y:383.1}).wait(1).to({graphics:mask_graphics_493,x:248.9,y:383.1}).wait(1).to({graphics:mask_graphics_494,x:249.7,y:383.1}).wait(1).to({graphics:mask_graphics_495,x:250.6,y:383.1}).wait(1).to({graphics:mask_graphics_496,x:251.5,y:383.1}).wait(1).to({graphics:mask_graphics_497,x:252.4,y:383.1}).wait(1).to({graphics:mask_graphics_498,x:253.2,y:383.1}).wait(1).to({graphics:mask_graphics_499,x:254.1,y:383.1}).wait(1).to({graphics:mask_graphics_500,x:255,y:383.1}).wait(1).to({graphics:mask_graphics_501,x:255.8,y:383.1}).wait(1).to({graphics:mask_graphics_502,x:256.7,y:383.1}).wait(1).to({graphics:mask_graphics_503,x:257.6,y:383.1}).wait(1).to({graphics:mask_graphics_504,x:258.4,y:383.1}).wait(1).to({graphics:mask_graphics_505,x:259.3,y:383.1}).wait(1).to({graphics:mask_graphics_506,x:260.2,y:383.1}).wait(1).to({graphics:mask_graphics_507,x:261,y:383.1}).wait(1).to({graphics:mask_graphics_508,x:261.9,y:383.1}).wait(1).to({graphics:mask_graphics_509,x:262.8,y:383.1}).wait(1).to({graphics:mask_graphics_510,x:263.7,y:383.1}).wait(1).to({graphics:mask_graphics_511,x:264.5,y:383.1}).wait(1).to({graphics:mask_graphics_512,x:265.4,y:383.1}).wait(1).to({graphics:mask_graphics_513,x:266.2,y:383.1}).wait(1).to({graphics:mask_graphics_514,x:267.1,y:383.1}).wait(1).to({graphics:mask_graphics_515,x:268,y:383.1}).wait(1).to({graphics:mask_graphics_516,x:268.8,y:383.1}).wait(1).to({graphics:mask_graphics_517,x:269.7,y:383.1}).wait(1).to({graphics:mask_graphics_518,x:270.6,y:383.1}).wait(1).to({graphics:mask_graphics_519,x:271.5,y:383.1}).wait(1).to({graphics:mask_graphics_520,x:272.3,y:383.1}).wait(1).to({graphics:mask_graphics_521,x:273.2,y:383.1}).wait(1).to({graphics:mask_graphics_522,x:274.1,y:383.1}).wait(1).to({graphics:mask_graphics_523,x:274.9,y:383.1}).wait(1).to({graphics:mask_graphics_524,x:275.8,y:383.1}).wait(1).to({graphics:mask_graphics_525,x:276.7,y:383.1}).wait(1).to({graphics:mask_graphics_526,x:277.5,y:383.1}).wait(1).to({graphics:mask_graphics_527,x:278.4,y:383.1}).wait(1).to({graphics:mask_graphics_528,x:279.3,y:383.1}).wait(1).to({graphics:mask_graphics_529,x:181.8,y:233.5}).wait(1).to({graphics:mask_graphics_530,x:280.9,y:383.1}).wait(1).to({graphics:mask_graphics_531,x:281.7,y:383.1}).wait(1).to({graphics:mask_graphics_532,x:282.4,y:383.1}).wait(1).to({graphics:mask_graphics_533,x:283.2,y:383.1}).wait(1).to({graphics:mask_graphics_534,x:283.9,y:383.1}).wait(1).to({graphics:mask_graphics_535,x:284.7,y:383.1}).wait(1).to({graphics:mask_graphics_536,x:285.4,y:383.1}).wait(1).to({graphics:mask_graphics_537,x:286.2,y:383.1}).wait(1).to({graphics:mask_graphics_538,x:286.9,y:383.1}).wait(1).to({graphics:mask_graphics_539,x:287.7,y:383.1}).wait(1).to({graphics:mask_graphics_540,x:288.4,y:383.1}).wait(1).to({graphics:mask_graphics_541,x:289.2,y:383.1}).wait(1).to({graphics:mask_graphics_542,x:289.9,y:383.1}).wait(1).to({graphics:mask_graphics_543,x:290.7,y:383.1}).wait(1).to({graphics:mask_graphics_544,x:291.5,y:383.1}).wait(1).to({graphics:mask_graphics_545,x:292.2,y:383.1}).wait(1).to({graphics:mask_graphics_546,x:293,y:383.1}).wait(1).to({graphics:mask_graphics_547,x:293.7,y:383.1}).wait(1).to({graphics:mask_graphics_548,x:294.5,y:383.1}).wait(1).to({graphics:mask_graphics_549,x:295.2,y:383.1}).wait(1).to({graphics:mask_graphics_550,x:296,y:383.1}).wait(1).to({graphics:mask_graphics_551,x:296.7,y:383.1}).wait(1).to({graphics:mask_graphics_552,x:297.5,y:383.1}).wait(1).to({graphics:mask_graphics_553,x:298.3,y:383.1}).wait(1).to({graphics:mask_graphics_554,x:299,y:383.1}).wait(1).to({graphics:mask_graphics_555,x:299.7,y:383.1}).wait(1).to({graphics:mask_graphics_556,x:300.5,y:383.1}).wait(1).to({graphics:mask_graphics_557,x:301.3,y:383.1}).wait(1).to({graphics:mask_graphics_558,x:302,y:383.1}).wait(1).to({graphics:mask_graphics_559,x:302.8,y:383.1}).wait(1).to({graphics:mask_graphics_560,x:303.5,y:383.1}).wait(1).to({graphics:mask_graphics_561,x:304.3,y:383.1}).wait(1).to({graphics:mask_graphics_562,x:305,y:383.1}).wait(1).to({graphics:mask_graphics_563,x:305.8,y:383.1}).wait(1).to({graphics:mask_graphics_564,x:306.5,y:383.1}).wait(1).to({graphics:mask_graphics_565,x:307.3,y:383.1}).wait(1).to({graphics:mask_graphics_566,x:308.1,y:383.1}).wait(1).to({graphics:mask_graphics_567,x:308.8,y:383.1}).wait(1).to({graphics:mask_graphics_568,x:309.6,y:383.1}).wait(1).to({graphics:mask_graphics_569,x:310.3,y:383.1}).wait(1).to({graphics:mask_graphics_570,x:311.1,y:383.1}).wait(1).to({graphics:mask_graphics_571,x:311.8,y:383.1}).wait(1).to({graphics:mask_graphics_572,x:312.6,y:383.1}).wait(1).to({graphics:mask_graphics_573,x:313.3,y:383.1}).wait(1).to({graphics:mask_graphics_574,x:314.1,y:383.1}).wait(1).to({graphics:mask_graphics_575,x:314.8,y:383.1}).wait(1).to({graphics:mask_graphics_576,x:315.6,y:383.1}).wait(1).to({graphics:mask_graphics_577,x:316.3,y:383.1}).wait(1).to({graphics:mask_graphics_578,x:317.1,y:383.1}).wait(1).to({graphics:mask_graphics_579,x:219.8,y:233.5}).wait(81));

	// Layer 7
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(20,1,1).p("ABBq2QAWiDiKhIQiLhIiWAFQiWAGiOAjQiOAkh6BCQh7BBhqBYQhqBYhRBxQhRBvgvCEQgvCDgSCZQgTCZAzCqQA0CqBoBhQBoBfBeA6QBdA6CIArQCJAqCSAPQCRAOCQgZQBkgSBjglQIhj3GblaQGblZEHkr");
	this.shape_1.setTransform(282.5,281.1,1,1,0,0,0,6.5,-68.8);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(475).to({_off:false},0).wait(185));

	// Layer 6 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_270 = new cjs.Graphics().p("AHQvnQMJAAIkIkQImIlAAMJQAAMJomIkQokImsJAAg");
	var mask_1_graphics_271 = new cjs.Graphics().p("AG2vnQMJgLIrIdQIuIdAKMJQALMJoeIsQocItsJALg");
	var mask_1_graphics_272 = new cjs.Graphics().p("AGcvmQMIgVIzIUQI1IWAWMIQAVMJoWIzQoVI1sIAWg");
	var mask_1_graphics_273 = new cjs.Graphics().p("AGBvkQMJghI6INQI8IOAhMIQAgMIoOI7QoNI8sIAgg");
	var mask_1_graphics_274 = new cjs.Graphics().p("AFnviQMIgrJCIEQJDIHArMHQAsMHoHJCQoFJDsHAsg");
	var mask_1_graphics_275 = new cjs.Graphics().p("AFNvgQMHg2JJH9QJLH+A2MGQA2MHn/JJQn8JLsHA2g");
	var mask_1_graphics_276 = new cjs.Graphics().p("AEzvdQMHhAJPH0QJSH2BBMGQBAMGn2JQQn0JRsHBBg");
	var mask_1_graphics_277 = new cjs.Graphics().p("AEZvZQMFhLJXHsQJZHuBLMEQBMMFnuJXQntJYsFBMg");
	var mask_1_graphics_278 = new cjs.Graphics().p("AD/vVQMEhWJeHkQJfHlBWMDQBWMFnlJdQnkJfsEBWg");
	var mask_1_graphics_279 = new cjs.Graphics().p("ADlvQQMDhhJkHcQJmHcBhMCQBhMDndJkQnbJmsDBhg");
	var mask_1_graphics_280 = new cjs.Graphics().p("ADLvLQMChrJqHTQJtHUBrMAQBsMCnUJqQnTJtsCBrg");
	var mask_1_graphics_281 = new cjs.Graphics().p("ACyvFQL/h2JxHKQJzHMB2L+QB3MAnMJyQnKJysAB2g");
	var mask_1_graphics_282 = new cjs.Graphics().p("ACYu/QL+iBJ3HCQJ5HDCBL9QCBL+nDJ4QnBJ4r+CBg");
	var mask_1_graphics_283 = new cjs.Graphics().p("AB+u4QL8iLJ+G4QJ/G6CLL8QCML8m6J+Qm5J/r8CLg");
	var mask_1_graphics_284 = new cjs.Graphics().p("ABkuwQL6iXKEGwQKFGxCWL5QCXL7myKEQmvKFr6CWg");
	var mask_1_graphics_285 = new cjs.Graphics().p("ABLupQL4igKJGnQKLGoChL3QChL4mpKJQmmKMr4Cgg");
	var mask_1_graphics_286 = new cjs.Graphics().p("AAxugQL2irKPGeQKRGeCrL1QCsL2mgKPQmdKRr2Crg");
	var mask_1_graphics_287 = new cjs.Graphics().p("AAYuXQLzi2KVGVQKXGWC1LyQC2LzmWKVQmUKXr0C2g");
	var mask_1_graphics_288 = new cjs.Graphics().p("AgBuOQLwjAKaGMQKdGMDALwQDALwmNKbQmLKcrwDAg");
	var mask_1_graphics_289 = new cjs.Graphics().p("AgauEQLtjKKgGCQKiGDDKLtQDLLumEKgQmBKiruDKg");
	var mask_1_graphics_290 = new cjs.Graphics().p("Agzt5QLqjVKlF5QKnF6DVLpQDVLrl6KmQl4KnrrDVg");
	var mask_1_graphics_291 = new cjs.Graphics().p("AhMtuQLnjfKqFvQKsFwDgLnQDfLolxKrQlvKsrnDfg");
	var mask_1_graphics_292 = new cjs.Graphics().p("AhltiQLkjqKvFmQKxFnDqLjQDqLlloKwQllKxrlDpg");
	var mask_1_graphics_293 = new cjs.Graphics().p("Ah+tWQLhj0K0FcQK2FdD0LhQD0LhleK1QlcK1rhD0g");
	var mask_1_graphics_294 = new cjs.Graphics().p("AiWtKQLcj+K5FTQK7FTD/LdQD+LelUK6QlSK6reD+g");
	var mask_1_graphics_295 = new cjs.Graphics().p("Aivs8QLZkJK+FJQLAFKEILZQEILalKK/QlIK/rbEIg");
	var mask_1_graphics_296 = new cjs.Graphics().p("AjHsvQLVkSLCE/QLEFAETLVQESLXlALCQk/LErWESg");
	var mask_1_graphics_297 = new cjs.Graphics().p("AjgshQLSkcLGE1QLJE2EcLSQEdLSk3LHQk0LIrTEdg");
	var mask_1_graphics_298 = new cjs.Graphics().p("Aj4sSQLOkmLLErQLMEsEnLOQEmLOktLLQkqLNrPEmg");
	var mask_1_graphics_299 = new cjs.Graphics().p("AkQsDQLKkwLPEhQLQEiExLKQEwLKkjLPQkgLRrLEwg");
	var mask_1_graphics_300 = new cjs.Graphics().p("AknrzQLFk6LSEXQLVEYE6LFQE7LGkZLTQkXLVrGE6g");
	var mask_1_graphics_301 = new cjs.Graphics().p("Ak/rjQLBlELWENQLZEOFELBQFELBkPLYQkMLXrCFEg");
	var mask_1_graphics_302 = new cjs.Graphics().p("AlXrSQK9lOLaEDQLcEEFOK8QFNK9kELbQkCLbq9FOg");
	var mask_1_graphics_303 = new cjs.Graphics().p("AlurBQK4lYLdD5QLgD6FXK3QFYK4j6LfQj5Lfq4FXg");
	var mask_1_graphics_304 = new cjs.Graphics().p("AmFqvQKzliLhDvQLjDvFhKzQFhKzjwLiQjuLiq0Fig");
	var mask_1_graphics_305 = new cjs.Graphics().p("AmcqdQKulrLkDkQLmDlFrKuQFrKujmLlQjkLmquFrg");
	var mask_1_graphics_306 = new cjs.Graphics().p("AmzqLQKpl0LnDaQLqDbF0KoQF0KqjcLoQjZLoqpF0g");
	var mask_1_graphics_307 = new cjs.Graphics().p("AnJp4QKjl9LqDPQLtDRF9KjQF+KkjRLrQjPLsqkF9g");
	var mask_1_graphics_308 = new cjs.Graphics().p("AnfpkQKdmHLtDFQLvDGGHKeQGHKfjGLtQjFLvqfGHg");
	var mask_1_graphics_309 = new cjs.Graphics().p("An2pQQKZmQLvC7QLyC7GQKYQGRKZi9LxQi6LxqZGQg");
	var mask_1_graphics_310 = new cjs.Graphics().p("AoMo8QKTmZLyCwQL1CxGZKTQGZKTixLzQiwL0qUGZg");
	var mask_1_graphics_311 = new cjs.Graphics().p("AohonQKMmiL1CmQL3CmGiKNQGjKOioL1QilL2qOGjg");
	var mask_1_graphics_312 = new cjs.Graphics().p("Ao3oRQKHmsL3CbQL5CcGrKHQGsKIidL4QibL4qIGrg");
	var mask_1_graphics_313 = new cjs.Graphics().p("ApMn8QKBm0L4CRQL7CRG1KCQG0KBiSL6QiQL6qCG0g");
	var mask_1_graphics_314 = new cjs.Graphics().p("ApinlQJ7m+L7CHQL9CGG9J8QG+J7iIL7QiFL9p8G9g");
	var mask_1_graphics_315 = new cjs.Graphics().p("Ap2nPQJ1nGL8B8QL+B8HGJ1QHHJ1h9L9Qh7L+p2HGg");
	var mask_1_graphics_316 = new cjs.Graphics().p("AqLm4QJvnOL9BxQMABxHPJvQHPJuhyL/QhwMApvHPg");
	var mask_1_graphics_317 = new cjs.Graphics().p("AqgmgQJpnXL/BmQMBBnHYJoQHXJohnMBQhmMBpoHXg");
	var mask_1_graphics_318 = new cjs.Graphics().p("Aq0mIQJingMABcQMDBcHgJiQHgJhhdMCQhbMCpiHgg");
	var mask_1_graphics_319 = new cjs.Graphics().p("ArIlwQJbnoMBBRQMFBSHoJbQHoJahSMDQhQMEpbHog");
	var mask_1_graphics_320 = new cjs.Graphics().p("ArclXQJUnwMDBGQMFBHHxJUQHwJThHMFQhGMEpUHxg");
	var mask_1_graphics_321 = new cjs.Graphics().p("Arwk9QJOn5MDA7QMGA8H5JOQH5JMg9MFQg6MFpOH5g");
	var mask_1_graphics_322 = new cjs.Graphics().p("AsDkkQJGoBMEAxQMHAxIBJHQIBJFgyMGQgwMGpGIBg");
	var mask_1_graphics_323 = new cjs.Graphics().p("AsWkKQI/oJMEAnQMIAmIJI/QIJI+gnMHQglMGpAIJg");
	var mask_1_graphics_324 = new cjs.Graphics().p("AspjvQI4oRMFAbQMIAcIRI4QIRI3gdMGQgaMHo4IRg");
	var mask_1_graphics_325 = new cjs.Graphics().p("As8jUQIxoZMFARQMIAQIZIxQIZIvgSMHQgQMIowIZg");
	var mask_1_graphics_326 = new cjs.Graphics().p("AtOi5QIpohMFAGQMIAGIhIpQIgIogHMIQgFMHooIgg");
	var mask_1_graphics_327 = new cjs.Graphics().p("AthidQIiooMFgFQMIgFIoIhQIpIgADMIQAGMHohIog");
	var mask_1_graphics_328 = new cjs.Graphics().p("AtziBQIaowMFgQQMIgPIwIZQIvIZAPMHQARMHoaIwg");
	var mask_1_graphics_329 = new cjs.Graphics().p("AuFhlQISo3MFgaQMIgbI3ISQI3IRAZMHQAcMHoSI3g");
	var mask_1_graphics_330 = new cjs.Graphics().p("AuWhIQIJo+MFgmQMHglI/IKQI+IJAkMGQAmMHoKI+g");
	var mask_1_graphics_331 = new cjs.Graphics().p("AuogrQICpGMEgvQMHgwJFICQJGIAAvMGQAxMGoCJFg");
	var mask_1_graphics_332 = new cjs.Graphics().p("Au5gOQH6pMMDg7QMGg6JNH5QJMH5A6MFQA7MFn5JNg");
	var mask_1_graphics_333 = new cjs.Graphics().p("AvKAPQHypSMChFQMFhGJUHyQJTHwBEMEQBHMEnyJUg");
	var mask_1_graphics_334 = new cjs.Graphics().p("AvaAuQHppaMBhQQMEhQJaHpQJbHoBPMDQBRMDnpJbg");
	var mask_1_graphics_335 = new cjs.Graphics().p("AvrBMQHhpgMAhbQMDhbJhHhQJhHgBaMCQBcMCnhJhg");
	var mask_1_graphics_336 = new cjs.Graphics().p("Av7BrQHZpnL+hlQMChmJnHYQJoHYBkMAQBnMBnYJng");
	var mask_1_graphics_337 = new cjs.Graphics().p("AwKCKQHPptL9hwQMAhwJvHPQJuHPBvL/QBxL/nQJug");
	var mask_1_graphics_338 = new cjs.Graphics().p("AwaCqQHHp0L7h6QL/h7J0HGQJ1HGB6L+QB7L9nGJ1g");
	var mask_1_graphics_339 = new cjs.Graphics().p("AwpDJQG+p5L5iGQL9iFJ7G+QJ7G9CEL8QCGL7m+J7g");
	var mask_1_graphics_340 = new cjs.Graphics().p("Aw4DpQG2qAL3iQQL7iPKBG1QKBG0COL6QCRL6m1KAg");
	var mask_1_graphics_341 = new cjs.Graphics().p("AxGEJQGsqGL2iaQL5iaKGGsQKHGsCZL4QCbL3msKHg");
	var mask_1_graphics_342 = new cjs.Graphics().p("AxUEpQGjqML0ikQL3ilKMGkQKMGjCkL1QClL2mjKMg");
	var mask_1_graphics_343 = new cjs.Graphics().p("AxiFJQGbqRLxiuQL0iwKSGbQKSGaCuLzQCwLzmbKSg");
	var mask_1_graphics_344 = new cjs.Graphics().p("AxvFqQGRqXLvi5QLyi5KXGSQKYGQC4LxQC6LxmRKYg");
	var mask_1_graphics_345 = new cjs.Graphics().p("Ax9GLQGJqcLtjDQLujEKdGJQKdGHDDLvQDELumIKdg");
	var mask_1_graphics_346 = new cjs.Graphics().p("AyJGsQF/qhLqjOQLsjNKiF/QKjF+DMLsQDPLrmAKjg");
	var mask_1_graphics_347 = new cjs.Graphics().p("AyWHOQF2qnLojXQLojYKoF2QKnF1DXLpQDZLol2Kng");
	var mask_1_graphics_348 = new cjs.Graphics().p("AyiHvQFtqrLkjiQLmjiKsFtQKtFsDhLmQDjLlltKsg");
	var mask_1_graphics_349 = new cjs.Graphics().p("AyuIRQFjqwLijsQLijsKyFjQKxFjDrLiQDtLjljKxg");
	var mask_1_graphics_350 = new cjs.Graphics().p("Ay6I0QFaq2Lej1QLgj3K2FaQK2FZD1LgQD3LelaK3g");
	var mask_1_graphics_351 = new cjs.Graphics().p("AzFJWQFRq6LakAQLckAK7FRQK7FPD/LcQEBLblRK7g");
	var mask_1_graphics_352 = new cjs.Graphics().p("AzQJ5QFHq/LXkJQLYkLLAFHQK/FGEJLZQELLXlHLAg");
	var mask_1_graphics_353 = new cjs.Graphics().p("AzaKcQE9rDLTkUQLVkULEE9QLDE9ETLUQEVLUk9LEg");
	var mask_1_graphics_354 = new cjs.Graphics().p("AzlK/QE0rHLQkeQLQkeLIE0QLIEyEdLRQEfLQk0LIg");
	var mask_1_graphics_355 = new cjs.Graphics().p("AzuLiQEprMLMkmQLMkoLNEqQLMEoEnLNQEoLMkqLNg");
	var mask_1_graphics_356 = new cjs.Graphics().p("Az4MGQEgrRLHkwQLJkxLQEgQLQEfExLJQEyLIkgLQg");
	var mask_1_graphics_357 = new cjs.Graphics().p("A0BMpQEWrULDk5QLEk8LUEWQLUEWE7LEQE8LEkXLUg");
	var mask_1_graphics_358 = new cjs.Graphics().p("A0KNNQEMrYK/lDQLAlFLYEMQLXEMFELAQFGK/kNLYg");
	var mask_1_graphics_359 = new cjs.Graphics().p("A0TNxQEDrbK6lNQK7lPLcEDQLbECFNK7QFQK7kDLbg");
	var mask_1_graphics_360 = new cjs.Graphics().p("A0bOWQD4rfK2lXQK3lYLfD4QLeD5FXK2QFZK2j4Lfg");
	var mask_1_graphics_361 = new cjs.Graphics().p("A0jO6QDuriKxlgQKyliLiDvQLjDuFgKxQFiKyjuLig");
	var mask_1_graphics_362 = new cjs.Graphics().p("A0qPfQDkrmKslpQKtlrLlDkQLmDkFpKtQFsKsjkLmg");
	var mask_1_graphics_363 = new cjs.Graphics().p("A0yQDQDaroKolyQKnl1LpDaQLoDaFzKoQF1KnjaLpg");
	var mask_1_graphics_364 = new cjs.Graphics().p("A04QoQDPrrKil8QKjl9LrDPQLsDQF8KjQF+KijQLrg");
	var mask_1_graphics_365 = new cjs.Graphics().p("A0/RNQDGruKcmFQKemGLuDFQLuDGGGKdQGHKdjGLug");
	var mask_1_graphics_366 = new cjs.Graphics().p("A1FRyQC7rwKYmOQKYmQLwC7QLxC8GPKXQGQKYi7Lxg");
	var mask_1_graphics_367 = new cjs.Graphics().p("A1LSYQCxrzKSmYQKTmYLzCxQLzCxGYKSQGZKSixLzg");
	var mask_1_graphics_368 = new cjs.Graphics().p("A1QS9QCmr1KNmhQKNmhL1CmQL2CnGgKNQGiKMimL2g");
	var mask_1_graphics_369 = new cjs.Graphics().p("A1VTjQCcr4KGmqQKImqL3CdQL4CcGpKHQGsKHidL3g");
	var mask_1_graphics_370 = new cjs.Graphics().p("A1aUIQCSr6KAmyQKCmzL5CSQL6CSGyKBQG0KBiSL6g");
	var mask_1_graphics_371 = new cjs.Graphics().p("A1fUuQCIr8J7m7QJ7m7L8CHQL7CIG7J7QG9J7iIL7g");
	var mask_1_graphics_372 = new cjs.Graphics().p("A1jVUQB+r+J0nEQJ1nEL+B+QL9B9HEJ1QHFJ0h9L+g");
	var mask_1_graphics_373 = new cjs.Graphics().p("A1mV6QBysAJvnMQJvnML/ByQL/BzHMJvQHOJuhzL/g");
	var mask_1_graphics_374 = new cjs.Graphics().p("A1qWgQBpsBJnnVQJqnVL/BoQMBBoHVJpQHWJohoMAg");
	var mask_1_graphics_375 = new cjs.Graphics().p("A1tXGQBesCJhndQJjneMBBeQMCBdHdJiQHfJiheMCg");
	var mask_1_graphics_376 = new cjs.Graphics().p("A1vXsQBTsDJbnmQJcnmMCBUQMDBTHmJbQHnJbhUMDg");
	var mask_1_graphics_377 = new cjs.Graphics().p("A1yYSQBJsEJUnuQJWnuMDBJQMEBIHuJVQHvJUhJMEg");
	var mask_1_graphics_378 = new cjs.Graphics().p("A10Y4QA+sFJOn2QJPn2MEA+QMFA+H1JOQH4JOg/MFg");
	var mask_1_graphics_379 = new cjs.Graphics().p("A11ZeQAzsGJHn9QJIn+MEAzQMGA0H+JHQH/JGgzMGg");
	var mask_1_graphics_380 = new cjs.Graphics().p("A13aFQApsHJAoGQJBoGMFApQMHApIFJAQIHJAgpMGg");
	var mask_1_graphics_381 = new cjs.Graphics().p("A14arQAfsHI4oOQI6oNMGAeQMHAeINI5QIPI4geMHg");
	var mask_1_graphics_382 = new cjs.Graphics().p("A14bRQATsHIxoVQIzoWMGAUQMIAUIVIxQIWIxgUMIg");
	var mask_1_graphics_383 = new cjs.Graphics().p("A15b3QAJsHIqodQIrodMHAJQMHAJIdIrQIeIpgJMIg");
	var mask_1_graphics_384 = new cjs.Graphics().p("AtYHvQIkolMGgBQMIgCIkIjQImIiABMIMg6eAAGQgBsHIiokg");
	var mask_1_graphics_385 = new cjs.Graphics().p("AtqH0QIdosMGgMQMIgMIrIbQItIbAMMIMg6dAA5QgMsHIaosg");
	var mask_1_graphics_386 = new cjs.Graphics().p("At7H6QIVo0MGgWQMHgXIzIUQI0ITAXMHMg6dABtQgWsHITozg");
	var mask_1_graphics_387 = new cjs.Graphics().p("AuMIAQINo7MGghQMHghI6IMQI7ILAiMHMg6bACgQghsHILo6g");
	var mask_1_graphics_388 = new cjs.Graphics().p("AucIGQIFpCMFgrQMGgsJCIEQJCIDAsMHMg6YADTQgssHIEpBg");
	var mask_1_graphics_389 = new cjs.Graphics().p("AusINQH9pJMEg3QMGg2JIH8QJKH8A2MGMg6VAEFQg2sFH8pIg");
	var mask_1_graphics_390 = new cjs.Graphics().p("Au8ITQH1pPMEhBQMFhBJPH0QJRHzBAMFMg6RAE5QhAsFHzpPg");
	var mask_1_graphics_391 = new cjs.Graphics().p("AvLIaQHtpWMDhMQMEhLJWHsQJXHrBLMEMg6MAFsQhLsEHrpWg");
	var mask_1_graphics_392 = new cjs.Graphics().p("AvaIhQHlpdMChWQMDhWJcHkQJeHjBWMDMg6HAGeQhWsCHjpdg");
	var mask_1_graphics_393 = new cjs.Graphics().p("AvoIpQHcpkMBhgQMBhhJkHcQJkHaBgMCMg6AAHRQhhsBHbpjg");
	var mask_1_graphics_394 = new cjs.Graphics().p("Av2IwQHUpqL/hrQMBhrJpHUQJrHSBrMAMg56AIEQhrsAHSpqg");
	var mask_1_graphics_395 = new cjs.Graphics().p("AwDI4QHLpwL+h2QL/h1JwHLQJxHKB1L+Mg5zAI2Qh1r+HKpwg");
	var mask_1_graphics_396 = new cjs.Graphics().p("AwQJAQHDp2L8iAQL9iAJ2HCQJ3HBCAL9Mg5rAJpQh/r9HBp2g");
	var mask_1_graphics_397 = new cjs.Graphics().p("AwcJJQG6p9L6iKQL7iLJ8G6QJ+G4CKL8Mg5iAKbQiKr7G5p8g");
	var mask_1_graphics_398 = new cjs.Graphics().p("AwoJRQGxqDL4iUQL5iVKDGxQKDGwCVL5Mg5ZALNQiUr5GwqCg");
	var mask_1_graphics_399 = new cjs.Graphics().p("Aw0JaQGpqJL2ifQL3ifKIGoQKJGnCfL3Mg5OAMAQifr3GnqIg");
	var mask_1_graphics_400 = new cjs.Graphics().p("Aw/JjQGgqOL0iqQL0ipKOGfQKPGeCqL1Mg5EAMxQipr1GeqNg");
	var mask_1_graphics_401 = new cjs.Graphics().p("AxJJsQGWqULyizQLyi0KUGWQKUGVC0LzMg44ANjQi0rzGWqTg");
	var mask_1_graphics_402 = new cjs.Graphics().p("AxTJ2QGNqaLvi+QLwi+KZGOQKaGLC+LwMg4sAOVQi+rwGNqYg");
	var mask_1_graphics_403 = new cjs.Graphics().p("AxdJ/QGEqeLtjJQLtjIKeGFQKfGCDJLtMg4fAPGQjIrtGDqeg");
	var mask_1_graphics_404 = new cjs.Graphics().p("AxmKJQF7qkLqjSQLqjTKjF8QKlF5DSLqMg4RAP4QjSrrF6qjg");
	var mask_1_graphics_405 = new cjs.Graphics().p("AxvKTQFyqpLnjcQLnjdKoFyQKqFwDcLnMg4DAQpQjcroFxqog");
	var mask_1_graphics_406 = new cjs.Graphics().p("Ax3KdQFpquLkjmQLkjnKtFqQKvFmDmLlMg31ARYQjmrlFoqtg");
	var mask_1_graphics_407 = new cjs.Graphics().p("Ax/KnQFgqyLhjwQLhjxKyFhQKzFdDwLhMg3lASHQjwrhFeqyg");
	var mask_1_graphics_408 = new cjs.Graphics().p("AyGKyQFXq3Lej6QLdj6K3FXQK3FUD6LeMg3VAS2Qj6reFVq2g");
	var mask_1_graphics_409 = new cjs.Graphics().p("AyMK8QFNq8LbkDQLZkDK7FNQK9FLEDLbMg3FATlQkErbFNq7g");
	var mask_1_graphics_410 = new cjs.Graphics().p("AyTLHQFErBLYkMQLWkNK/FEQLBFCENLXMg20AUUQkOrYFDq/g");
	var mask_1_graphics_411 = new cjs.Graphics().p("AyYLSQE6rFLUkWQLSkXLEE7QLFE4EXLUMg2jAVCQkXrTE6rEg");
	var mask_1_graphics_412 = new cjs.Graphics().p("AydLeQExrKLPkfQLPkhLIEyQLJEvEgLPMg2QAVxQkhrQExrHg");
	var mask_1_graphics_413 = new cjs.Graphics().p("AyiLpQEnrNLMkpQLLkqLMEoQLNElEqLMMg1+AWeQkqrMEnrLg");
	var mask_1_graphics_414 = new cjs.Graphics().p("AynL1QEerSLIkyQLHk0LQEfQLQEdE0LHMg1qAXLQk0rHEdrPg");
	var mask_1_graphics_415 = new cjs.Graphics().p("AyrMAQEVrVLEk7QLCk9LUEVQLUETE9LDMg1WAX5Qk9rEETrTg");
	var mask_1_graphics_416 = new cjs.Graphics().p("AyuMMQELrYK/lFQK/lHLXEMQLXEJFHK/Mg1CAYmQlGq/EKrXg");
	var mask_1_graphics_417 = new cjs.Graphics().p("AyxMYQEBrcK7lOQK6lQLbECQLbEAFPK6Mg0sAZTQlPq7EArag");
	var mask_1_graphics_418 = new cjs.Graphics().p("AyzMlQD3rgK2lXQK2lZLeD4QLeD2FZK2Mg0WAZ/QlZq2D3rdg");
	var mask_1_graphics_419 = new cjs.Graphics().p("Ay2MxQDuriKylhQKxliLhDuQLiDtFiKwMg0BAasQlhqxDsrhg");
	var mask_1_graphics_420 = new cjs.Graphics().p("Ay3M+QDkrmKtlqQKslrLkDlQLlDiFrKsMgzpAbYQlrqtDjrjg");
	var mask_1_graphics_421 = new cjs.Graphics().p("Ay4NLQDarpKolzQKnl0LnDbQLoDYF0KoMgzSAcDQl0qoDarmg");
	var mask_1_graphics_422 = new cjs.Graphics().p("Ay5NYQDQrsKjl8QKil9LqDRQLrDPF9KiMgy5AcvQl9qjDPrpg");
	var mask_1_graphics_423 = new cjs.Graphics().p("Ay5NlQDGruKemFQKdmGLtDHQLtDFGGKdMgyhAdaQmGqeDGrsg");
	var mask_1_graphics_424 = new cjs.Graphics().p("Ay5NyQC8rwKZmOQKYmPLvC9QLwC7GPKYMgyIAeEQmPqYC8rvg");
	var mask_1_graphics_425 = new cjs.Graphics().p("Ay4OAQCyrzKTmXQKTmXLxCzQLzCxGXKSMgxtAevQmYqTCyrxg");
	var mask_1_graphics_426 = new cjs.Graphics().p("Ay3ONQCor1KOmfQKNmgL0CpQL0CmGhKNMgxTAfZQmhqNCor0g");
	var mask_1_graphics_427 = new cjs.Graphics().p("Ay1ObQCer3KImoQKHmpL2CfQL3CdGpKHMgw4AgDQmpqICer2g");
	var mask_1_graphics_428 = new cjs.Graphics().p("AyzOpQCUr5KCmxQKCmxL4CVQL5CTGxKBMgwcAgsQmyqCCUr4g");
	var mask_1_graphics_429 = new cjs.Graphics().p("AyxO3QCKr7J9m5QJ8m6L6CLQL6CJG6J7MgwAAhVQm6p8CJr6g");
	var mask_1_graphics_430 = new cjs.Graphics().p("AyuPGQCAr9J3nCQJ2nCL8CBQL8B+HCJ2MgvkAh9QnCp2B/r7g");
	var mask_1_graphics_431 = new cjs.Graphics().p("AyqPUQB1r/JxnJQJwnLL9B3QL+B0HLJwMgvHAilQnLpwB2r9g");
	var mask_1_graphics_432 = new cjs.Graphics().p("AymPjQBrsAJrnSQJpnTL/BsQMABqHSJqMgupAjNQnSpqBrr+g");
	var mask_1_graphics_433 = new cjs.Graphics().p("AyiPxQBhsBJlnaQJjnbMABiQMBBgHbJjMguLAj1QnbpkBhsAg");
	var mask_1_graphics_434 = new cjs.Graphics().p("AydQAQBXsCJenjQJdnjMBBYQMCBWHjJdMgtsAkcQnjpeBXsBg");
	var mask_1_graphics_435 = new cjs.Graphics().p("AyYQPQBNsDJXnrQJXnrMDBOQMCBMHsJWMgtNAlCQnrpXBMsCg");
	var mask_1_graphics_436 = new cjs.Graphics().p("AySQeQBCsEJRnyQJQnzMEBDQMEBCHzJQMgsuAloQnzpRBDsDg");
	var mask_1_graphics_437 = new cjs.Graphics().p("AyMQuQA4sGJLn6QJJn6MEA5QMFA3H7JKMgsNAmNQn7pKA4sDg");
	var mask_1_graphics_438 = new cjs.Graphics().p("AyFQ9QAusGJDoCQJDoCMFAvQMFAtIDJDMgrtAmzQoCpEAusEg");
	var mask_1_graphics_439 = new cjs.Graphics().p("Ax+RNQAksHI8oJQI8oKMFAkQMGAjIKI9MgrLAnXQoKo9AksEg");
	var mask_1_graphics_440 = new cjs.Graphics().p("Ax3RcQAasHI1oRQI1oRMGAaQMGAZISI1MgqpAn8QoSo2AZsFg");
	var mask_1_graphics_441 = new cjs.Graphics().p("AxvRsQAPsHIvoYQIvoaMFARQMGAOIZIuMgqHAogQoZovAPsFg");
	var mask_1_graphics_442 = new cjs.Graphics().p("AxmR8QAFsIInofQIoohMFAGQMGAEIhIoMgplApDQogooAFsFg");
	var mask_1_graphics_443 = new cjs.Graphics().p("AxeSMQgFsIIgomQIgooMGgEQMGgHIoIgMgpCApmQonoggGsFg");
	var mask_1_graphics_444 = new cjs.Graphics().p("AxRSjQgUsHIWoxQIWoyMFgTQMGgVIyIVMgoOAqYQoyoWgVsFg");
	var mask_1_graphics_445 = new cjs.Graphics().p("AxCS6QgjsGILo8QIKo8MFghQMGgkI8ILMgnaArIQo9oLgisFg");
	var mask_1_graphics_446 = new cjs.Graphics().p("AwzTSQgysGIApFQIApGMEgxQMFgyJGIAMgmmAr4QpGoAgxsEg");
	var mask_1_graphics_447 = new cjs.Graphics().p("AwjTqQhBsFH1pPQH1pQMDg/QMEhBJPH1MglwAsmQpPn0hAsDg");
	var mask_1_graphics_448 = new cjs.Graphics().p("AwTUCQhPsEHqpYQHppZMChOQMDhQJZHpMgk6AtVQpZnqhPsBg");
	var mask_1_graphics_449 = new cjs.Graphics().p("AwBUaQhesCHepiQHepiMBhdQMBheJiHeMgkCAuBQpinehesAg");
	var mask_1_graphics_450 = new cjs.Graphics().p("AvuUyQhtsAHTprQHSprL+hrQMAhtJrHSMgjKAutQprnThsr+g");
	var mask_1_graphics_451 = new cjs.Graphics().p("AvbVLQh7r+HHp0QHGp0L9h6QL8h8J1HHMgiRAvXQp0nGh7r8g");
	var mask_1_graphics_452 = new cjs.Graphics().p("AvGVjQiKr7G7p8QG6p9L6iIQL6iLJ9G7MghWAwBQp9m7iJr6g");
	var mask_1_graphics_453 = new cjs.Graphics().p("AuxV8QiYr5GuqEQGuqFL4iXQL3iZKGGvMggcAwpQqGmviXr3g");
	var mask_1_graphics_454 = new cjs.Graphics().p("AubWVQinr2GiqNQGiqML1imQL0inKOGiMgfhAxQQqNmiimr0g");
	var mask_1_graphics_455 = new cjs.Graphics().p("AuEWvQi1rzGVqVQGWqVLxizQLyi2KVGVMgelAx3QqVmWi0rwg");
	var mask_1_graphics_456 = new cjs.Graphics().p("AtsXIQjErvGJqdQGJqcLujCQLujEKdGJMgdoAybQqdmJjCrtg");
	var mask_1_graphics_457 = new cjs.Graphics().p("AtUXhQjRrrF8qlQF8qjLqjQQLqjSKkF8MgcrAy/Qqjl8jRrqg");
	var mask_1_graphics_458 = new cjs.Graphics().p("As6X7QjgroFvqrQFvqrLmjeQLmjgKsFvMgbtAziQqqlwjfrlg");
	var mask_1_graphics_459 = new cjs.Graphics().p("AsgYUQjurjFiqyQFiqxLijtQLijuKyFiMgauA0DQqxlijtrig");
	var mask_1_graphics_460 = new cjs.Graphics().p("AsFYuQj8reFVq5QFVq4Ldj7QLdj9K5FWMgZuA0jQq4lVj7rdg");
	var mask_1_graphics_461 = new cjs.Graphics().p("ArpZIQkKraFHq/QFIq/LYkIQLZkLK/FIMgYuA1CQq+lHkJrYg");
	var mask_1_graphics_462 = new cjs.Graphics().p("ArNZiQkYrVE7rFQE6rFLTkWQLTkYLGE6MgXtA1gQrFk6kXrTg");
	var mask_1_graphics_463 = new cjs.Graphics().p("AqvZ8QkmrPEtrMQEtrKLNkkQLOkmLMEsMgWsA19QrLktkkrNg");
	var mask_1_graphics_464 = new cjs.Graphics().p("AqRaWQkzrJEfrSQEfrQLIkyQLIkzLREfMgVqA2YQrQkfkyrIg");
	var mask_1_graphics_465 = new cjs.Graphics().p("ApyawQlBrDERrXQESrWLCk/QLClBLXERMgUoA2yQrWkRk/rCg");
	var mask_1_graphics_466 = new cjs.Graphics().p("ApTbKQlOq9EErcQEDrbK8lMQK8lPLcEEMgTlA3KQrbkDlNq8g");
	var mask_1_graphics_467 = new cjs.Graphics().p("AoybkQlcq3D2rgQD1rgK2laQK1lcLhD2MgShA3iQrgj2laq1g");
	var mask_1_graphics_468 = new cjs.Graphics().p("AoRb/QlpqxDorlQDnrkKvlnQKvlpLlDnMgReA35Qrkjolnqug");
	var mask_1_graphics_469 = new cjs.Graphics().p("AnwcZQl1qqDZrpQDarpKol0QKol2LpDaMgQZA4NQrpjal1qng");
	var mask_1_graphics_470 = new cjs.Graphics().p("AnNczQmDqiDMruQDLrsKhmCQKgmDLuDMMgPVA4hQrtjMmBqgg");
	var mask_1_graphics_471 = new cjs.Graphics().p("AmqdNQmPqbC9rxQC9rwKZmOQKZmQLyC9MgOQA4zQrxi9mOqZg");
	var mask_1_graphics_472 = new cjs.Graphics().p("AmGdnQmcqTCur1QCvr0KSmaQKRmcL1CuMgNKA5EQr1iumaqSg");
	var mask_1_graphics_473 = new cjs.Graphics().p("AlieBQmoqLCgr4QCgr3KKmnQKKmpL4CgMgMFA5UQr4igmnqKg");
	var mask_1_graphics_474 = new cjs.Graphics().p("Ak9ecQm0qDCRr8QCSr6KCmzQKBm1L8CRMgLAA5jQr7iSmzqBg");
	var mask_1_graphics_475 = new cjs.Graphics().p("AkWe1QnBp7CDr+QCDr8J5nAQJ6nBL9CDMgJ5A5vQr+iDm+p5g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(270).to({graphics:mask_1_graphics_270,x:233.9,y:275}).wait(1).to({graphics:mask_1_graphics_271,x:233.9,y:275}).wait(1).to({graphics:mask_1_graphics_272,x:233.9,y:275}).wait(1).to({graphics:mask_1_graphics_273,x:233.9,y:274.9}).wait(1).to({graphics:mask_1_graphics_274,x:233.9,y:274.9}).wait(1).to({graphics:mask_1_graphics_275,x:233.9,y:274.8}).wait(1).to({graphics:mask_1_graphics_276,x:233.9,y:274.7}).wait(1).to({graphics:mask_1_graphics_277,x:233.9,y:274.6}).wait(1).to({graphics:mask_1_graphics_278,x:233.9,y:274.4}).wait(1).to({graphics:mask_1_graphics_279,x:233.9,y:274.3}).wait(1).to({graphics:mask_1_graphics_280,x:233.9,y:274.1}).wait(1).to({graphics:mask_1_graphics_281,x:234,y:273.9}).wait(1).to({graphics:mask_1_graphics_282,x:234,y:273.7}).wait(1).to({graphics:mask_1_graphics_283,x:234,y:273.5}).wait(1).to({graphics:mask_1_graphics_284,x:234,y:273.3}).wait(1).to({graphics:mask_1_graphics_285,x:234,y:273}).wait(1).to({graphics:mask_1_graphics_286,x:234,y:272.7}).wait(1).to({graphics:mask_1_graphics_287,x:234.1,y:272.5}).wait(1).to({graphics:mask_1_graphics_288,x:234.1,y:272.1}).wait(1).to({graphics:mask_1_graphics_289,x:234.1,y:271.8}).wait(1).to({graphics:mask_1_graphics_290,x:234.1,y:271.5}).wait(1).to({graphics:mask_1_graphics_291,x:234.1,y:271.1}).wait(1).to({graphics:mask_1_graphics_292,x:234.1,y:270.7}).wait(1).to({graphics:mask_1_graphics_293,x:234.1,y:270.3}).wait(1).to({graphics:mask_1_graphics_294,x:234.1,y:269.9}).wait(1).to({graphics:mask_1_graphics_295,x:234.1,y:269.5}).wait(1).to({graphics:mask_1_graphics_296,x:234.1,y:269}).wait(1).to({graphics:mask_1_graphics_297,x:234.1,y:268.6}).wait(1).to({graphics:mask_1_graphics_298,x:234.1,y:268.1}).wait(1).to({graphics:mask_1_graphics_299,x:234.1,y:267.6}).wait(1).to({graphics:mask_1_graphics_300,x:234.1,y:267.1}).wait(1).to({graphics:mask_1_graphics_301,x:234.1,y:266.5}).wait(1).to({graphics:mask_1_graphics_302,x:234.1,y:266}).wait(1).to({graphics:mask_1_graphics_303,x:234.1,y:265.4}).wait(1).to({graphics:mask_1_graphics_304,x:234.1,y:264.9}).wait(1).to({graphics:mask_1_graphics_305,x:234.1,y:264.3}).wait(1).to({graphics:mask_1_graphics_306,x:234.1,y:263.6}).wait(1).to({graphics:mask_1_graphics_307,x:234.1,y:263}).wait(1).to({graphics:mask_1_graphics_308,x:234.1,y:262.4}).wait(1).to({graphics:mask_1_graphics_309,x:234.1,y:261.7}).wait(1).to({graphics:mask_1_graphics_310,x:234,y:261}).wait(1).to({graphics:mask_1_graphics_311,x:234,y:260.4}).wait(1).to({graphics:mask_1_graphics_312,x:234,y:259.6}).wait(1).to({graphics:mask_1_graphics_313,x:234,y:258.9}).wait(1).to({graphics:mask_1_graphics_314,x:234,y:258.2}).wait(1).to({graphics:mask_1_graphics_315,x:234,y:257.4}).wait(1).to({graphics:mask_1_graphics_316,x:233.9,y:256.7}).wait(1).to({graphics:mask_1_graphics_317,x:233.9,y:255.9}).wait(1).to({graphics:mask_1_graphics_318,x:233.9,y:255.1}).wait(1).to({graphics:mask_1_graphics_319,x:233.9,y:254.3}).wait(1).to({graphics:mask_1_graphics_320,x:233.9,y:253.5}).wait(1).to({graphics:mask_1_graphics_321,x:233.9,y:252.6}).wait(1).to({graphics:mask_1_graphics_322,x:233.9,y:251.8}).wait(1).to({graphics:mask_1_graphics_323,x:233.9,y:250.9}).wait(1).to({graphics:mask_1_graphics_324,x:233.8,y:250}).wait(1).to({graphics:mask_1_graphics_325,x:233.8,y:249.2}).wait(1).to({graphics:mask_1_graphics_326,x:233.8,y:248.2}).wait(1).to({graphics:mask_1_graphics_327,x:233.8,y:247.3}).wait(1).to({graphics:mask_1_graphics_328,x:233.8,y:246.4}).wait(1).to({graphics:mask_1_graphics_329,x:233.9,y:245.5}).wait(1).to({graphics:mask_1_graphics_330,x:233.9,y:244.5}).wait(1).to({graphics:mask_1_graphics_331,x:233.9,y:243.5}).wait(1).to({graphics:mask_1_graphics_332,x:233.9,y:242.6}).wait(1).to({graphics:mask_1_graphics_333,x:233.9,y:241.6}).wait(1).to({graphics:mask_1_graphics_334,x:233.9,y:240.6}).wait(1).to({graphics:mask_1_graphics_335,x:234,y:239.6}).wait(1).to({graphics:mask_1_graphics_336,x:234,y:238.5}).wait(1).to({graphics:mask_1_graphics_337,x:234,y:237.5}).wait(1).to({graphics:mask_1_graphics_338,x:234,y:236.5}).wait(1).to({graphics:mask_1_graphics_339,x:234,y:235.4}).wait(1).to({graphics:mask_1_graphics_340,x:234,y:234.3}).wait(1).to({graphics:mask_1_graphics_341,x:234.1,y:233.3}).wait(1).to({graphics:mask_1_graphics_342,x:234.1,y:232.2}).wait(1).to({graphics:mask_1_graphics_343,x:234.1,y:231.1}).wait(1).to({graphics:mask_1_graphics_344,x:234.1,y:230.1}).wait(1).to({graphics:mask_1_graphics_345,x:234.1,y:229}).wait(1).to({graphics:mask_1_graphics_346,x:234.1,y:227.9}).wait(1).to({graphics:mask_1_graphics_347,x:234.2,y:226.7}).wait(1).to({graphics:mask_1_graphics_348,x:234.2,y:225.6}).wait(1).to({graphics:mask_1_graphics_349,x:234.2,y:224.5}).wait(1).to({graphics:mask_1_graphics_350,x:234.2,y:223.4}).wait(1).to({graphics:mask_1_graphics_351,x:234.2,y:222.2}).wait(1).to({graphics:mask_1_graphics_352,x:234.2,y:221.1}).wait(1).to({graphics:mask_1_graphics_353,x:234.2,y:219.9}).wait(1).to({graphics:mask_1_graphics_354,x:234.2,y:218.7}).wait(1).to({graphics:mask_1_graphics_355,x:234.3,y:217.6}).wait(1).to({graphics:mask_1_graphics_356,x:234.3,y:216.4}).wait(1).to({graphics:mask_1_graphics_357,x:234.3,y:215.2}).wait(1).to({graphics:mask_1_graphics_358,x:234.3,y:214}).wait(1).to({graphics:mask_1_graphics_359,x:234.3,y:212.8}).wait(1).to({graphics:mask_1_graphics_360,x:234.3,y:211.6}).wait(1).to({graphics:mask_1_graphics_361,x:234.3,y:210.4}).wait(1).to({graphics:mask_1_graphics_362,x:234.3,y:209.2}).wait(1).to({graphics:mask_1_graphics_363,x:234.3,y:208}).wait(1).to({graphics:mask_1_graphics_364,x:234.3,y:206.7}).wait(1).to({graphics:mask_1_graphics_365,x:234.2,y:205.5}).wait(1).to({graphics:mask_1_graphics_366,x:234.2,y:204.3}).wait(1).to({graphics:mask_1_graphics_367,x:234.2,y:203}).wait(1).to({graphics:mask_1_graphics_368,x:234.2,y:201.8}).wait(1).to({graphics:mask_1_graphics_369,x:234.2,y:200.5}).wait(1).to({graphics:mask_1_graphics_370,x:234.2,y:199.3}).wait(1).to({graphics:mask_1_graphics_371,x:234.2,y:198}).wait(1).to({graphics:mask_1_graphics_372,x:234.2,y:196.8}).wait(1).to({graphics:mask_1_graphics_373,x:234.2,y:195.5}).wait(1).to({graphics:mask_1_graphics_374,x:234.2,y:194.2}).wait(1).to({graphics:mask_1_graphics_375,x:234.2,y:193}).wait(1).to({graphics:mask_1_graphics_376,x:234.1,y:191.7}).wait(1).to({graphics:mask_1_graphics_377,x:234.1,y:190.4}).wait(1).to({graphics:mask_1_graphics_378,x:234.1,y:189.2}).wait(1).to({graphics:mask_1_graphics_379,x:234.1,y:187.9}).wait(1).to({graphics:mask_1_graphics_380,x:234.1,y:186.6}).wait(1).to({graphics:mask_1_graphics_381,x:234.1,y:185.3}).wait(1).to({graphics:mask_1_graphics_382,x:234.1,y:184.1}).wait(1).to({graphics:mask_1_graphics_383,x:234.1,y:182.8}).wait(1).to({graphics:mask_1_graphics_384,x:234.1,y:181.8}).wait(1).to({graphics:mask_1_graphics_385,x:234.1,y:183.1}).wait(1).to({graphics:mask_1_graphics_386,x:234.1,y:184.4}).wait(1).to({graphics:mask_1_graphics_387,x:234.1,y:185.7}).wait(1).to({graphics:mask_1_graphics_388,x:234,y:187}).wait(1).to({graphics:mask_1_graphics_389,x:233.9,y:188.2}).wait(1).to({graphics:mask_1_graphics_390,x:233.8,y:189.5}).wait(1).to({graphics:mask_1_graphics_391,x:233.7,y:190.8}).wait(1).to({graphics:mask_1_graphics_392,x:233.6,y:192}).wait(1).to({graphics:mask_1_graphics_393,x:233.5,y:193.3}).wait(1).to({graphics:mask_1_graphics_394,x:233.3,y:194.6}).wait(1).to({graphics:mask_1_graphics_395,x:233.1,y:195.8}).wait(1).to({graphics:mask_1_graphics_396,x:232.9,y:197.1}).wait(1).to({graphics:mask_1_graphics_397,x:232.7,y:198.4}).wait(1).to({graphics:mask_1_graphics_398,x:232.5,y:199.6}).wait(1).to({graphics:mask_1_graphics_399,x:232.2,y:200.9}).wait(1).to({graphics:mask_1_graphics_400,x:232,y:202.1}).wait(1).to({graphics:mask_1_graphics_401,x:231.7,y:203.4}).wait(1).to({graphics:mask_1_graphics_402,x:231.4,y:204.6}).wait(1).to({graphics:mask_1_graphics_403,x:231.1,y:205.8}).wait(1).to({graphics:mask_1_graphics_404,x:230.7,y:207.1}).wait(1).to({graphics:mask_1_graphics_405,x:230.3,y:208.3}).wait(1).to({graphics:mask_1_graphics_406,x:230,y:209.5}).wait(1).to({graphics:mask_1_graphics_407,x:229.6,y:210.6}).wait(1).to({graphics:mask_1_graphics_408,x:229.2,y:211.8}).wait(1).to({graphics:mask_1_graphics_409,x:228.8,y:213}).wait(1).to({graphics:mask_1_graphics_410,x:228.4,y:214.2}).wait(1).to({graphics:mask_1_graphics_411,x:228,y:215.3}).wait(1).to({graphics:mask_1_graphics_412,x:227.5,y:216.5}).wait(1).to({graphics:mask_1_graphics_413,x:227.1,y:217.6}).wait(1).to({graphics:mask_1_graphics_414,x:226.6,y:218.7}).wait(1).to({graphics:mask_1_graphics_415,x:226.1,y:219.9}).wait(1).to({graphics:mask_1_graphics_416,x:225.6,y:221}).wait(1).to({graphics:mask_1_graphics_417,x:225,y:222.1}).wait(1).to({graphics:mask_1_graphics_418,x:224.5,y:223.2}).wait(1).to({graphics:mask_1_graphics_419,x:224,y:224.3}).wait(1).to({graphics:mask_1_graphics_420,x:223.4,y:225.4}).wait(1).to({graphics:mask_1_graphics_421,x:222.8,y:226.5}).wait(1).to({graphics:mask_1_graphics_422,x:222.2,y:227.6}).wait(1).to({graphics:mask_1_graphics_423,x:221.6,y:228.7}).wait(1).to({graphics:mask_1_graphics_424,x:221,y:229.7}).wait(1).to({graphics:mask_1_graphics_425,x:220.3,y:230.8}).wait(1).to({graphics:mask_1_graphics_426,x:219.7,y:231.8}).wait(1).to({graphics:mask_1_graphics_427,x:219,y:232.9}).wait(1).to({graphics:mask_1_graphics_428,x:218.3,y:233.9}).wait(1).to({graphics:mask_1_graphics_429,x:217.6,y:234.9}).wait(1).to({graphics:mask_1_graphics_430,x:216.9,y:235.9}).wait(1).to({graphics:mask_1_graphics_431,x:216.2,y:236.9}).wait(1).to({graphics:mask_1_graphics_432,x:215.4,y:237.9}).wait(1).to({graphics:mask_1_graphics_433,x:214.7,y:238.9}).wait(1).to({graphics:mask_1_graphics_434,x:213.9,y:239.9}).wait(1).to({graphics:mask_1_graphics_435,x:213.2,y:240.8}).wait(1).to({graphics:mask_1_graphics_436,x:212.4,y:241.8}).wait(1).to({graphics:mask_1_graphics_437,x:211.6,y:242.7}).wait(1).to({graphics:mask_1_graphics_438,x:210.8,y:243.7}).wait(1).to({graphics:mask_1_graphics_439,x:209.9,y:244.6}).wait(1).to({graphics:mask_1_graphics_440,x:209.1,y:245.5}).wait(1).to({graphics:mask_1_graphics_441,x:208.2,y:246.4}).wait(1).to({graphics:mask_1_graphics_442,x:207.4,y:247.3}).wait(1).to({graphics:mask_1_graphics_443,x:206.5,y:248.1}).wait(1).to({graphics:mask_1_graphics_444,x:205.2,y:249.4}).wait(1).to({graphics:mask_1_graphics_445,x:203.9,y:250.6}).wait(1).to({graphics:mask_1_graphics_446,x:202.6,y:251.8}).wait(1).to({graphics:mask_1_graphics_447,x:201.2,y:252.9}).wait(1).to({graphics:mask_1_graphics_448,x:199.9,y:254.1}).wait(1).to({graphics:mask_1_graphics_449,x:198.5,y:255.2}).wait(1).to({graphics:mask_1_graphics_450,x:197.1,y:256.3}).wait(1).to({graphics:mask_1_graphics_451,x:195.7,y:257.3}).wait(1).to({graphics:mask_1_graphics_452,x:194.2,y:258.4}).wait(1).to({graphics:mask_1_graphics_453,x:192.8,y:259.4}).wait(1).to({graphics:mask_1_graphics_454,x:191.3,y:260.3}).wait(1).to({graphics:mask_1_graphics_455,x:189.8,y:261.3}).wait(1).to({graphics:mask_1_graphics_456,x:188.3,y:262.2}).wait(1).to({graphics:mask_1_graphics_457,x:186.7,y:263.1}).wait(1).to({graphics:mask_1_graphics_458,x:185.2,y:264}).wait(1).to({graphics:mask_1_graphics_459,x:183.6,y:264.8}).wait(1).to({graphics:mask_1_graphics_460,x:182,y:265.6}).wait(1).to({graphics:mask_1_graphics_461,x:180.4,y:266.3}).wait(1).to({graphics:mask_1_graphics_462,x:178.8,y:267.1}).wait(1).to({graphics:mask_1_graphics_463,x:177.2,y:267.8}).wait(1).to({graphics:mask_1_graphics_464,x:175.5,y:268.5}).wait(1).to({graphics:mask_1_graphics_465,x:173.9,y:269.1}).wait(1).to({graphics:mask_1_graphics_466,x:172.2,y:269.7}).wait(1).to({graphics:mask_1_graphics_467,x:170.5,y:270.3}).wait(1).to({graphics:mask_1_graphics_468,x:168.8,y:270.9}).wait(1).to({graphics:mask_1_graphics_469,x:167.1,y:271.4}).wait(1).to({graphics:mask_1_graphics_470,x:165.4,y:271.9}).wait(1).to({graphics:mask_1_graphics_471,x:163.7,y:272.3}).wait(1).to({graphics:mask_1_graphics_472,x:161.9,y:272.7}).wait(1).to({graphics:mask_1_graphics_473,x:160.2,y:273.1}).wait(1).to({graphics:mask_1_graphics_474,x:158.5,y:273.5}).wait(1).to({graphics:mask_1_graphics_475,x:156.7,y:273.7}).wait(185));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(20,1,1).p("AMRrKQARhjh5hEQh5hEikABQikABiQAVQiQAWh6BCQh6BChrBYQhpBYhRBwQhRBwgvB+QguB/gQCUQgQCWA7CqQA8CqBiBmQBiBnBYA8QBZA8CIArQCJArCRAOQCRAOCPgZQB6gVB2gy");
	this.shape_2.setTransform(282.5,281.1,1,1,0,0,0,78.4,-70.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(20,1,1).p("AMRrJQARhjh5hEQh5hEikABQikABiQAVQiQAWh6BCQh6BChrBYQhpBYhRBwQhRBwgvB+QguB/gQCUQgQCWA7CqQA8CqBiBmQBiBnBYA8QAvAfA7AbQA2AYBBAVQCJArCOANQBgAIBcgHQAsgEArgIQAmgGAmgJQhVAWhOAF");
	this.shape_3.setTransform(282.5,281.1,1,1,0,0,0,78.4,-70.4);

	var maskedShapeInstanceList = [this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2}]},270).to({state:[{t:this.shape_3}]},148).wait(242));

	// Layer 9
	this.instance_2 = new lib.ar4("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(163.2,86.2,1,1,106.9,0,0,0.1,-0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(651));

	// Layer 5 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_234 = new cjs.Graphics().p("AsjKPQiWr5GvqEQGwqFL4iVQL4iXKFGvMggjAwmQqFmwiWr3g");
	var mask_2_graphics_235 = new cjs.Graphics().p("AsTKhQihr3GnqKQGnqKL2igQL2iiKKGnMgf5AxCQqJmnihr1g");
	var mask_2_graphics_236 = new cjs.Graphics().p("AsDKzQirr0GeqRQGeqQLziqQL0isKQGeMgfOAxeQqPmeirrzg");
	var mask_2_graphics_237 = new cjs.Graphics().p("AryLFQi2ryGVqWQGVqWLxi0QLyi2KWGVMgejAx5QqVmVi1rxg");
	var mask_2_graphics_238 = new cjs.Graphics().p("ArhLXQjArvGMqcQGMqbLui/QLvjAKcGMMgd3AyTQqbmMi/rug");
	var mask_2_graphics_239 = new cjs.Graphics().p("ArQLpQjKrsGDqhQGDqhLsjJQLsjLKhGDMgdLAyuQqgmDjKrsg");
	var mask_2_graphics_240 = new cjs.Graphics().p("Aq+L8QjUrrF5qlQF6qmLpjTQLqjWKmF6MgcfAzHQqll5jUrpg");
	var mask_2_graphics_241 = new cjs.Graphics().p("AqsMOQjeroFwqqQFxqrLmjeQLmjfKsFwMgbyAzgQqqlwjfrmg");
	var mask_2_graphics_242 = new cjs.Graphics().p("AqZMhQjprlFnqwQFnqwLkjnQLjjqKwFnMgbEAz4Qqwlnjorig");
	var mask_2_graphics_243 = new cjs.Graphics().p("AqGMzQjzriFeq0QFeq1LgjxQLgj0K1FeMgaXA0PQq0ldjzrgg");
	var mask_2_graphics_244 = new cjs.Graphics().p("ApyNGQj9rfFUq5QFUq5Ldj8QLdj+K6FUMgZqA0nQq5lUj8rcg");
	var mask_2_graphics_245 = new cjs.Graphics().p("ApeNYQkHrbFKq9QFLq/LZkFQLakIK+FLMgY7A09Qq+lLkGrZg");
	var mask_2_graphics_246 = new cjs.Graphics().p("ApKNrQkRrXFBrCQFBrDLWkQQLWkSLDFBMgYNA1TQrClBkRrVg");
	var mask_2_graphics_247 = new cjs.Graphics().p("Ao1N9QkbrTE3rGQE4rILSkZQLSkcLHE3MgXeA1oQrHk3karSg");
	var mask_2_graphics_248 = new cjs.Graphics().p("AogOQQklrPEurLQEtrMLOkjQLPklLLEtMgWvA18QrLktkkrOg");
	var mask_2_graphics_249 = new cjs.Graphics().p("AoKOjQkvrMEkrOQEkrQLKktQLKkwLPEkMgWAA2QQrOkkkurJg");
	var mask_2_graphics_250 = new cjs.Graphics().p("An0O2Qk5rIEarSQEarULGk3QLGk5LUEaMgVRA2jQrTkak3rFg");
	var mask_2_graphics_251 = new cjs.Graphics().p("AnePIQlCrDEQrWQEQrYLClAQLBlDLYEQMgUhA22QrXkQlBrCg");
	var mask_2_graphics_252 = new cjs.Graphics().p("AnHPbQlMq/EGraQEGrbK9lKQK+lMLbEGMgTxA3HQrakGlLq9g");
	var mask_2_graphics_253 = new cjs.Graphics().p("AmwPuQlVq6D8reQD8reK4lUQK5lWLfD8MgTBA3YQrej8lUq4g");
	var mask_2_graphics_254 = new cjs.Graphics().p("AmZQBQlfq2DyrhQDzriKzldQK1lgLiDyMgSQA3pQrijyleqzg");
	var mask_2_graphics_255 = new cjs.Graphics().p("AmBQUQloqxDorkQDormKvlnQKvlpLlDoMgRfA35Qrkjoloqug");
	var mask_2_graphics_256 = new cjs.Graphics().p("AlpQmQlxqrDdroQDeroKqlxQKrlyLoDeMgQuA4IQrpjelwqqg");
	var mask_2_graphics_257 = new cjs.Graphics().p("AlQQ5Ql7qmDUrrQDTrrKll6QKll8LsDUMgP9A4XQrsjUl5qlg");
	var mask_2_graphics_258 = new cjs.Graphics().p("Ak3RMQmEqhDJruQDJruKgmDQKgmFLvDKMgPMA4kQrvjJmCqgg");
	var mask_2_graphics_259 = new cjs.Graphics().p("AkeRfQmOqcC/rxQC/rxKbmMQKbmOLxC/MgObA4yQrxi/mLqag");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(234).to({graphics:mask_2_graphics_234,x:207.5,y:184.6}).wait(1).to({graphics:mask_2_graphics_235,x:206.4,y:185.3}).wait(1).to({graphics:mask_2_graphics_236,x:205.3,y:186}).wait(1).to({graphics:mask_2_graphics_237,x:204.3,y:186.7}).wait(1).to({graphics:mask_2_graphics_238,x:203.2,y:187.3}).wait(1).to({graphics:mask_2_graphics_239,x:202.1,y:188}).wait(1).to({graphics:mask_2_graphics_240,x:201,y:188.6}).wait(1).to({graphics:mask_2_graphics_241,x:199.9,y:189.2}).wait(1).to({graphics:mask_2_graphics_242,x:198.7,y:189.8}).wait(1).to({graphics:mask_2_graphics_243,x:197.6,y:190.4}).wait(1).to({graphics:mask_2_graphics_244,x:196.5,y:191}).wait(1).to({graphics:mask_2_graphics_245,x:195.3,y:191.6}).wait(1).to({graphics:mask_2_graphics_246,x:194.2,y:192.1}).wait(1).to({graphics:mask_2_graphics_247,x:193,y:192.6}).wait(1).to({graphics:mask_2_graphics_248,x:191.8,y:193.1}).wait(1).to({graphics:mask_2_graphics_249,x:190.6,y:193.6}).wait(1).to({graphics:mask_2_graphics_250,x:189.5,y:194.1}).wait(1).to({graphics:mask_2_graphics_251,x:188.3,y:194.6}).wait(1).to({graphics:mask_2_graphics_252,x:187.1,y:195}).wait(1).to({graphics:mask_2_graphics_253,x:185.9,y:195.4}).wait(1).to({graphics:mask_2_graphics_254,x:184.7,y:195.8}).wait(1).to({graphics:mask_2_graphics_255,x:183.4,y:196.2}).wait(1).to({graphics:mask_2_graphics_256,x:182.2,y:196.6}).wait(1).to({graphics:mask_2_graphics_257,x:181,y:197}).wait(1).to({graphics:mask_2_graphics_258,x:179.8,y:197.3}).wait(1).to({graphics:mask_2_graphics_259,x:178.5,y:197.6}).wait(401));

	// Layer 4
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(20,1,1).p("AAiMwQnrFajwptQjwprHIn7QHIn7JYDcQBtAoBhBD");
	this.shape_4.setTransform(278.9,199.1);
	this.shape_4._off = true;

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(234).to({_off:false},0).wait(426));

	// Layer 3 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_9 = new cjs.Graphics().p("AlBbYMAdBgy4QKjGBDNLsQDMLtmBKjQmBKjrtDMQkFBHj7AAQnYAAm2j7g");
	var mask_3_graphics_10 = new cjs.Graphics().p("AkrblMAcVgzRQKoF4DWLpQDYLql4KoQl4KorrDWQkQBOkHAAQnKAAmvjug");
	var mask_3_graphics_11 = new cjs.Graphics().p("AkVbxMAbogzqQKtFvDhLmQDhLnluKtQlvKtrnDgQkbBWkTAAQm+ABmnjjg");
	var mask_3_graphics_12 = new cjs.Graphics().p("Aj+b9MAa7g0CQKyFmDqLjQDsLjllKyQlmKzrkDqQkmBekfAAQmxAAmejXg");
	var mask_3_graphics_13 = new cjs.Graphics().p("AjocIMAaOg0YQK2FcD1LfQD2LhlcK3QlcK2rhD1QkxBmkqAAQmlAAmWjMg");
	var mask_3_graphics_14 = new cjs.Graphics().p("AjRcTMAZgg0uQK7FSD/LcQEALdlTK8QlSK7rdD+Qk8Bvk2AAQmZAAmNjBg");
	var mask_3_graphics_15 = new cjs.Graphics().p("Ai6ceMAYxg1EQLAFIEJLZQEKLalJLAQlILAraEIQlHB3lBAAQmNAAmEi2g");
	var mask_3_graphics_16 = new cjs.Graphics().p("AijcpMAYDg1aQLFE/ESLVQEULWk/LEQk/LFrXESQlQCAlNAAQmBAAl7irg");
	var mask_3_graphics_17 = new cjs.Graphics().p("AiLczMAXUg1uQLIE1EdLRQEdLSk1LJQk1LJrTEcQlaCJlZAAQl1AAlxihg");
	var mask_3_graphics_18 = new cjs.Graphics().p("Ah0c9MAWlg2CQLNErEmLNQEoLPksLMQkrLNrPEmQllCTlkAAQlpAAloiXg");
	var mask_3_graphics_19 = new cjs.Graphics().p("AhcdHMAV1g2WQLREiExLJQExLKkiLRQkiLRrKEvQlvCdlwAAQldAAleiNg");
	var mask_3_graphics_20 = new cjs.Graphics().p("AhEdRMAVGg2pQLUEYE6LEQE7LGkYLVQkYLVrGE5Ql4Cnl8AAQlRAAlUiDg");
	var mask_3_graphics_21 = new cjs.Graphics().p("AgsdaMAUWg27QLYEOFELAQFELCkOLYQkOLZrCFDQmBCxmIAAQlGAAlJh6g");
	var mask_3_graphics_22 = new cjs.Graphics().p("AgUdjMATmg3NQLcEEFNK8QFOK9kELcQkELcq9FNQmLC8mUAAQk6AAk/hxg");
	var mask_3_graphics_23 = new cjs.Graphics().p("AADdrMAS3g3dQLfD6FXK3QFXK6j6LeQj6Lgq4FWQmTDHmhAAQkuAAk2hpg");
	var mask_3_graphics_24 = new cjs.Graphics().p("AAbdzMASGg3tQLjDwFgKzQFhK0jvLiQjwLjq1FgQmbDSmtAAQkjAAkrhhg");
	var mask_3_graphics_25 = new cjs.Graphics().p("AA0d7MARVg39QLmDmFqKuQFqKwjmLlQjlLmqwFpQmkDem5AAQkXAAkghZg");
	var mask_3_graphics_26 = new cjs.Graphics().p("ABMeDMAQlg4MQLpDcFzKpQFzKqjbLoQjcLqqqFyQmtDqnFAAQkMAAkVhRg");
	var mask_3_graphics_27 = new cjs.Graphics().p("ABleKMAPzg4aQLsDSF8KjQF9KmjRLrQjSLsqlF8Qm0D2nTAAQkAAAkJhKg");
	var mask_3_graphics_28 = new cjs.Graphics().p("AB+eRMAPCg4nQLuDHGGKeQGGKhjHLuQjHLuqgGFQm9EDnfAAQj0AAj+hDg");
	var mask_3_graphics_29 = new cjs.Graphics().p("ACXeXMAOQg40QLxC9GPKaQGPKai9LxQi9LyqaGOQnEEPntAAQjoAAjyg9g");
	var mask_3_graphics_30 = new cjs.Graphics().p("ACweeMANeg5AQL0CyGYKUQGYKVizLzQiyL0qVGXQnLEdn6AAQjdAAjmg2g");
	var mask_3_graphics_31 = new cjs.Graphics().p("ADJejMAMsg5LQL3CoGgKOQGiKQipL2QioL2qPGgQnTEqoHAAQjRAAjagxg");
	var mask_3_graphics_32 = new cjs.Graphics().p("ADiepMAL7g5WQL4CeGpKIQGrKKieL4QieL4qKGpQnZE4oVAAQjFAAjOgrg");
	var mask_3_graphics_33 = new cjs.Graphics().p("AD7euMALJg5gQL6CUGyKCQG0KEiUL6QiUL7qDGxQngFGojAAQi6AAjBgmg");
	var mask_3_graphics_34 = new cjs.Graphics().p("AEVezMAKWg5pQL8CJG7J8QG8J+iJL8QiJL9p+G6QnnFToxABQitAAi0ghg");
	var mask_3_graphics_35 = new cjs.Graphics().p("AEue4MAJkg5yQL+B+HDJ3QHFJ3h/L+Qh+L+p4HEQntFho/AAQiiAAingbg");
	var mask_3_graphics_36 = new cjs.Graphics().p("AFHe8MAIxg56QMBB0HLJwQHOJyh1L/Qh0MApxHMQnzFwpOAAQiVAAibgXg");
	var mask_3_graphics_37 = new cjs.Graphics().p("AFhfAMAH+g6CQMCBqHUJqQHWJrhqMBQhqMBprHVQn4F/peAAQiIAAiNgTg");
	var mask_3_graphics_38 = new cjs.Graphics().p("AF6fDMAHMg6IQMDBgHdJjQHeJlhfMCQhgMDpkHcQn+GPptAAQh8AAiAgQg");
	var mask_3_graphics_39 = new cjs.Graphics().p("AGUfGMAGZg6NQMEBUHlJdQHmJehUMDQhVMFpeHlQoDGep9AAQhvAAhygNg");
	var mask_3_graphics_40 = new cjs.Graphics().p("AGtfJMAFmg6TQMGBKHtJWQHvJYhLMEQhKMFpXHuQoIGuqNAAQhiAAhlgKg");
	var mask_3_graphics_41 = new cjs.Graphics().p("AHHfMMAEzg6YQMGBAH2JPQH3JRhAMFQhAMGpQH1QoNG/qdAAQhVAAhXgHg");
	var mask_3_graphics_42 = new cjs.Graphics().p("AHhfOMAEAg6cQMHA1H9JJQH/JKg1MGQg1MHpKH9QoRHPquAAQhHAAhJgFg");
	var mask_3_graphics_43 = new cjs.Graphics().p("AH6fPMADNg6eQMIAqIFJCQIHJDgqMGQgrMIpDIFQoVHgq/AAQg6AAg7gEg");
	var mask_3_graphics_44 = new cjs.Graphics().p("AIUfRMACag6hQMIAgINI6QIPI8ggMHQggMIo8INQoZHxrRAAQgsAAgsgCg");
	var mask_3_graphics_45 = new cjs.Graphics().p("AIufSMABmg6jQMJAVIVIzQIWI1gVMHQgVMJo1IVQodICrjAAIg7gBg");
	var mask_3_graphics_46 = new cjs.Graphics().p("AJHfSMAA0g6jQMJAKIcIsQIeItgLMIQgKMJotIcQohIUr2AAIgegBg");
	var mask_3_graphics_47 = new cjs.Graphics().p("AJhfTMAAAg6kQMJAAIkIkQImImAAMHQgBMJolIkQokImsJAAIAAAAg");
	var mask_3_graphics_48 = new cjs.Graphics().p("AJI7RQMIgLIsIdQItIeAKMIQALMJoeIrQodItsJALg");
	var mask_3_graphics_49 = new cjs.Graphics().p("AIu7QQMJgVIyIVQI1IWAVMIQAVMIoXIzQoVI0sIAVg");
	var mask_3_graphics_50 = new cjs.Graphics().p("AIU7PQMJgfI6INQI7IPAgMHQAgMIoPI6QoNI7sJAgg");
	var mask_3_graphics_51 = new cjs.Graphics().p("AH77NQMIgqJBIFQJCIHArMHQAqMHoHJCQoFJCsIAqg");
	var mask_3_graphics_52 = new cjs.Graphics().p("AHh7KQMHg1JIH9QJKH/A1MGQA1MHn/JIQn+JKsHA1g");
	var mask_3_graphics_53 = new cjs.Graphics().p("AHI7IQMGg/JPH2QJQH2BAMHQA/MFn3JPQn1JQsGBAg");
	var mask_3_graphics_54 = new cjs.Graphics().p("AGu7EQMFhKJWHtQJXHvBKMFQBKMFnuJVQnuJYsFBKg");
	var mask_3_graphics_55 = new cjs.Graphics().p("AGU7AQMFhVJcHmQJeHmBVMEQBUMDnmJdQnlJesFBUg");
	var mask_3_graphics_56 = new cjs.Graphics().p("AF768QMDhfJjHdQJlHeBfMDQBfMCnfJkQncJksDBfg");
	var mask_3_graphics_57 = new cjs.Graphics().p("AFh63QMChpJpHUQJsHWBpMCQBqMAnWJqQnVJrsBBpg");
	var mask_3_graphics_58 = new cjs.Graphics().p("AFI6xQMAh0JwHMQJxHNB0MAQB0L/nNJwQnMJysAB0g");
	var mask_3_graphics_59 = new cjs.Graphics().p("AEv6rQL+h+J2HDQJ4HFB+L+QB/L9nFJ3QnDJ3r/B/g");
	var mask_3_graphics_60 = new cjs.Graphics().p("AEV6kQL9iJJ8G7QJ+G8CJL8QCJL8m9J8Qm6J+r9CJg");
	var mask_3_graphics_61 = new cjs.Graphics().p("AD86dQL7iUKCGzQKEGzCTL6QCTL6mzKCQmyKEr7CTg");
	var mask_3_graphics_62 = new cjs.Graphics().p("ADj6WQL4idKIGpQKKGqCeL5QCdL3mqKJQmpKJr5Ceg");
	var mask_3_graphics_63 = new cjs.Graphics().p("ADK6OQL2ioKOGhQKPGhCoL3QCoL1miKOQmgKPr2Cog");
	var mask_3_graphics_64 = new cjs.Graphics().p("ACx6FQL0iyKTGXQKVGZCyL0QCzLzmZKTQmXKVr0Cyg");
	var mask_3_graphics_65 = new cjs.Graphics().p("ACY58QLxi8KZGOQKaGPC9LyQC9LwmQKZQmOKbrxC8g");
	var mask_3_graphics_66 = new cjs.Graphics().p("AB/5yQLvjHKeGFQKgGHDHLuQDHLumHKfQmFKfrvDHg");
	var mask_3_graphics_67 = new cjs.Graphics().p("ABm5oQLsjRKjF8QKmF9DRLsQDRLrl9KkQl8KlrsDRg");
	var mask_3_graphics_68 = new cjs.Graphics().p("ABN5dQLpjcKpFzQKqF0DcLpQDbLol0KpQlzKqrpDcg");
	var mask_3_graphics_69 = new cjs.Graphics().p("AA15SQLmjmKtFqQKwFqDlLmQDmLllrKuQlpKvrmDmg");
	var mask_3_graphics_70 = new cjs.Graphics().p("AAc5GQLjjwKzFgQK0FhDvLjQDwLilhKzQlgKzrjDwg");
	var mask_3_graphics_71 = new cjs.Graphics().p("AAE46QLfj6K4FXQK5FXD5LgQD6LelYK4QlWK4rgD6g");
	var mask_3_graphics_72 = new cjs.Graphics().p("AgT4uQLbkDK8FNQK9FOEELcQEELblPK8QlNK9rcEEg");
	var mask_3_graphics_73 = new cjs.Graphics().p("Agr4hQLXkNLAFDQLCFFEOLYQEOLYlFLAQlDLCrZEOg");
	var mask_3_graphics_74 = new cjs.Graphics().p("AhD4TQLTkXLFE6QLHE6EXLVQEYLUk8LFQk5LGrVEXg");
	var mask_3_graphics_75 = new cjs.Graphics().p("Ahb4FQLQkhLJEwQLKExEiLRQEhLQkxLJQkwLKrREhg");
	var mask_3_graphics_76 = new cjs.Graphics().p("Ahy32QLLkrLNEmQLPEnErLNQErLMkoLNQkmLOrMEsg");
	var mask_3_graphics_77 = new cjs.Graphics().p("AiK3nQLIk1LQEdQLTEdE1LJQE1LHkeLSQkcLSrJE1g");
	var mask_3_graphics_78 = new cjs.Graphics().p("Aih3XQLDk/LVETQLWETE/LFQE+LDkULVQkSLWrEE/g");
	var mask_3_graphics_79 = new cjs.Graphics().p("Ai43HQK+lJLZEJQLaEKFILAQFJK+kLLZQkILarAFIg");
	var mask_3_graphics_80 = new cjs.Graphics().p("AjP23QK6lSLcD/QLdEAFSK7QFSK6kALdQj+Ldq8FSg");
	var mask_3_graphics_81 = new cjs.Graphics().p("Ajm2mQK1lbLfD1QLiD1FbK3QFcK1j3LgQj0Lhq3Fbg");
	var mask_3_graphics_82 = new cjs.Graphics().p("Aj92UQKxllLiDrQLlDrFlKyQFkKxjsLjQjqLkqyFlg");
	var mask_3_graphics_83 = new cjs.Graphics().p("AkT2DQKrluLmDhQLoDhFuKtQFuKsjiLmQjgLnqtFvg");
	var mask_3_graphics_84 = new cjs.Graphics().p("Akq1wQKnl4LpDXQLqDXF4KoQF3KnjYLpQjWLqqnF4g");
	var mask_3_graphics_85 = new cjs.Graphics().p("AlA1dQKimBLrDMQLuDNGAKjQGBKijOLsQjLLtqjGAg");
	var mask_3_graphics_86 = new cjs.Graphics().p("AlW1KQKcmKLvDCQLwDDGKKdQGKKejELuQjBLvqeGKg");
	var mask_3_graphics_87 = new cjs.Graphics().p("Als02QKXmTLxC4QLzC4GTKYQGTKYi6LwQi3LyqYGTg");
	var mask_3_graphics_88 = new cjs.Graphics().p("AmB0iQKRmcLzCuQL1CuGcKSQGdKSivLzQitL1qTGcg");
	var mask_3_graphics_89 = new cjs.Graphics().p("AmX0NQKMmlL1CjQL4CkGlKMQGlKNilL1QiiL3qNGlg");
	var mask_3_graphics_90 = new cjs.Graphics().p("Amsz4QKGmuL4CZQL5CZGuKHQGuKHiaL3QiZL5qGGug");
	var mask_3_graphics_91 = new cjs.Graphics().p("AnBzjQKAm2L6COQL7CPG3KBQG3KBiQL5QiOL7qBG3g");
	var mask_3_graphics_92 = new cjs.Graphics().p("AnWzNQJ6m/L8CEQL9CFHAJ6QG/J7iGL8QiDL8p7HAg");
	var mask_3_graphics_93 = new cjs.Graphics().p("Anqy3QJznHL+B5QL/B7HIJ0QHIJ1h7L9Qh5L+p1HIg");
	var mask_3_graphics_94 = new cjs.Graphics().p("An/ygQJunQL/BvQMBBwHQJuQHQJuhwL/QhvMApuHRg");
	var mask_3_graphics_95 = new cjs.Graphics().p("AoTyJQJnnYMABkQMDBmHZJoQHZJnhmMBQhkMBpoHZg");
	var mask_3_graphics_96 = new cjs.Graphics().p("AonxxQJhnhMBBaQMEBbHhJhQHiJihcMBQhaMDphHhg");
	var mask_3_graphics_97 = new cjs.Graphics().p("Ao6xZQJZnpMDBPQMFBRHpJaQHqJbhRMDQhPMEpbHpg");
	var mask_3_graphics_98 = new cjs.Graphics().p("ApOxAQJTnyMEBFQMGBGHxJUQHyJUhGMEQhFMEpUHyg");
	var mask_3_graphics_99 = new cjs.Graphics().p("AphwoQJNn5MEA6QMGA7H6JOQH6JNg8MEQg6MGpNH6g");
	var mask_3_graphics_100 = new cjs.Graphics().p("Ap0wOQJGoCMEAwQMIAxIBJGQICJGgxMFQgwMHpGICg");
	var mask_3_graphics_101 = new cjs.Graphics().p("AqHv1QI/oJMFAlQMIAmIKI/QIJI/gnMGQgkMHpAIKg");
	var mask_3_graphics_102 = new cjs.Graphics().p("AqavbQI4oRMFAbQMJAbIRI4QISI4gcMHQgbMHo4ISg");
	var mask_3_graphics_103 = new cjs.Graphics().p("AqsvAQIwoaMGARQMJARIZIwQIZIxgSMHQgPMIoxIZg");
	var mask_3_graphics_104 = new cjs.Graphics().p("Aq/umQIqogMFAGQMJAGIhIpQIhIpgHMHQgFMIoqIhg");
	var mask_3_graphics_105 = new cjs.Graphics().p("ArRuKQIiopMGgEQMJgFIoIiQIoIiAEMHQAFMIohIog");
	var mask_3_graphics_106 = new cjs.Graphics().p("ArjtvQIbowMFgPQMJgPIwIaQIvIbAPMGQAQMIobIwg");
	var mask_3_graphics_107 = new cjs.Graphics().p("Ar0tTQISo3MGgaQMIgZI3ISQI3ITAZMGQAbMIoTI3g");
	var mask_3_graphics_108 = new cjs.Graphics().p("AsGs3QILo+MFgkQMIglI+ILQI/ILAjMGQAlMHoLI+g");
	var mask_3_graphics_109 = new cjs.Graphics().p("AsXsaQIDpFMFgvQMHgvJFIDQJFIDAuMFQAwMHoDJFg");
	var mask_3_graphics_110 = new cjs.Graphics().p("Asor9QH7pMMEg6QMHg5JMH7QJMH6A4MFQA7MGn7JMg");
	var mask_3_graphics_111 = new cjs.Graphics().p("As4rgQHzpTMChEQMGhEJTHzQJTHzBDMEQBFMEnyJTg");
	var mask_3_graphics_112 = new cjs.Graphics().p("AtJrCQHrpaMChPQMFhOJaHqQJZHrBOMDQBPMEnqJag");
	var mask_3_graphics_113 = new cjs.Graphics().p("AtZqkQHjphMAhZQMEhZJhHiQJgHjBYMCQBaMCniJhg");
	var mask_3_graphics_114 = new cjs.Graphics().p("AtpqGQHapnMAhkQMChjJnHaQJnHaBjMAQBkMCnaJng");
	var mask_3_graphics_115 = new cjs.Graphics().p("At4poQHRptL+huQMBhuJuHSQJtHRBtL/QBvMAnRJtg");
	var mask_3_graphics_116 = new cjs.Graphics().p("AuHpJQHJpzL8h5QL/h4J0HJQJ0HJB3L9QB6L/nJJzg");
	var mask_3_graphics_117 = new cjs.Graphics().p("AuWoqQHAp5L7iDQL9iDJ6HAQJ6HBCCL8QCEL8nBJ6g");
	var mask_3_graphics_118 = new cjs.Graphics().p("AuloKQG4qAL4iNQL8iOKAG4QKAG4CML6QCPL7m4J/g");
	var mask_3_graphics_119 = new cjs.Graphics().p("Au0nqQGvqGL3iYQL6iYKGGvQKGGvCWL4QCZL5mvKGg");
	var mask_3_graphics_120 = new cjs.Graphics().p("AvCnKQGmqML1iiQL4iiKLGmQKMGmChL2QCjL3mmKLg");
	var mask_3_graphics_121 = new cjs.Graphics().p("AvQmqQGeqRLyisQL1itKSGdQKRGdCrL0QCuL0mdKRg");
	var mask_3_graphics_122 = new cjs.Graphics().p("AvdmJQGUqXLwi3QLzi3KXGVQKXGUC1LxQC4LymUKXg");
	var mask_3_graphics_123 = new cjs.Graphics().p("AvqloQGLqdLtjAQLxjCKcGLQKcGMDALuQDCLvmLKdg");
	var mask_3_graphics_124 = new cjs.Graphics().p("Av3lHQGCqiLqjLQLujLKiGCQKhGCDLLsQDMLsmCKig");
	var mask_3_graphics_125 = new cjs.Graphics().p("AwEkmQF5qnLojVQLqjVKnF4QKnF5DVLpQDWLql5Kng");
	var mask_3_graphics_126 = new cjs.Graphics().p("AwQkEQFvqsLljfQLojgKsFvQKsFwDeLmQDhLmlvKsg");
	var mask_3_graphics_127 = new cjs.Graphics().p("AwcjiQFmqxLijpQLkjqKxFmQKxFmDpLjQDqLjlmKxg");
	var mask_3_graphics_128 = new cjs.Graphics().p("AwojAQFdq2LejzQLij0K1FdQK2FcDzLgQD1LgldK2g");
	var mask_3_graphics_129 = new cjs.Graphics().p("AwzidQFTq7Lcj9QLdj+K6FTQK7FTD9LcQD+LdlTK6g");
	var mask_3_graphics_130 = new cjs.Graphics().p("Aw+h7QFJq/LZkHQLZkIK/FJQK/FKEHLZQEJLZlKK/g");
	var mask_3_graphics_131 = new cjs.Graphics().p("AxJhYQFArDLVkSQLWkSLDFAQLDFAERLVQETLWlALDg");
	var mask_3_graphics_132 = new cjs.Graphics().p("AxTg1QE2rILRkbQLSkcLIE3QLHE2EbLRQEdLSk3LIg");
	var mask_3_graphics_133 = new cjs.Graphics().p("AxdgSQEsrLLNklQLPkmLLEsQLMEtElLOQEmLNktLMg");
	var mask_3_graphics_134 = new cjs.Graphics().p("AxnARQEjrPLJkvQLKkvLQEiQLQEjEuLLQEwLIkjLQg");
	var mask_3_graphics_135 = new cjs.Graphics().p("AxwA1QEZrTLFk5QLFk5LUEZQLUEZE4LGQE6LEkZLUg");
	var mask_3_graphics_136 = new cjs.Graphics().p("Ax5BYQEPrWLAlCQLClDLXEPQLYEPFBLCQFELAkPLXg");
	var mask_3_graphics_137 = new cjs.Graphics().p("AyCB8QEFraK8lLQK9lNLbEFQLbEFFMK+QFNK7kFLbg");
	var mask_3_graphics_138 = new cjs.Graphics().p("AyKChQD7reK3lVQK5lWLeD7QLfD7FVK5QFWK3j7Leg");
	var mask_3_graphics_139 = new cjs.Graphics().p("AySDFQDxrhKzlfQKzlfLiDxQLiDxFeK0QFgKyjxLig");
	var mask_3_graphics_140 = new cjs.Graphics().p("AyaDqQDnrlKuloQKvlpLlDnQLlDnFoKvQFpKujnLlg");
	var mask_3_graphics_141 = new cjs.Graphics().p("AyhEOQDdrnKplxQKplzLpDdQLoDdFxKqQFzKpjdLog");
	var mask_3_graphics_142 = new cjs.Graphics().p("AyoEzQDTrqKjl7QKll7LrDSQLrDTF7KlQF8KjjTLrg");
	var mask_3_graphics_143 = new cjs.Graphics().p("AyvFYQDJrtKemEQKgmELuDIQLuDIGDKgQGFKejILug");
	var mask_3_graphics_144 = new cjs.Graphics().p("Ay1F9QC+rvKamNQKamOLwC+QLxC+GMKbQGPKYi+Lxg");
	var mask_3_graphics_145 = new cjs.Graphics().p("Ay7GjQC0rzKUmWQKUmXL0C0QLzC0GVKVQGYKTi0Lzg");
	var mask_3_graphics_146 = new cjs.Graphics().p("AzAHIQCpr1KOmeQKPmhL2CqQL1CpGfKQQGgKNipL2g");
	var mask_3_graphics_147 = new cjs.Graphics().p("AzFHtQCfr2KImoQKJmpL4CfQL4CfGnKKQGqKIigL4g");
	var mask_3_graphics_148 = new cjs.Graphics().p("AzKITQCVr5KCmwQKDmyL6CVQL6CUGwKEQGyKCiUL6g");
	var mask_3_graphics_149 = new cjs.Graphics().p("AzPI5QCLr7J8m5QJ9m7L8CKQL8CLG5J+QG7J8iKL7g");
	var mask_3_graphics_150 = new cjs.Graphics().p("AzTJfQCAr9J3nCQJ3nDL9CAQL+CAHCJ4QHDJ1iAL+g");
	var mask_3_graphics_151 = new cjs.Graphics().p("AzXKEQB2r+JwnKQJxnML/B1QMAB2HKJxQHMJwh2L/g");
	var mask_3_graphics_152 = new cjs.Graphics().p("AzaKqQBrr/JqnTQJqnVMBBrQMBBrHTJsQHUJphrMBg");
	var mask_3_graphics_153 = new cjs.Graphics().p("AzdLQQBgsBJknbQJkndMCBhQMCBgHcJlQHcJjhgMCg");
	var mask_3_graphics_154 = new cjs.Graphics().p("AzgL2QBWsCJdnkQJdnlMEBWQMDBWHkJfQHlJchWMDg");
	var mask_3_graphics_155 = new cjs.Graphics().p("AzjMdQBMsFJWnrQJXntMFBLQMEBMHsJYQHtJVhLMFg");
	var mask_3_graphics_156 = new cjs.Graphics().p("AzlNDQBBsGJQnzQJRn1MEBBQMGBBH0JRQH1JOhBMGg");
	var mask_3_graphics_157 = new cjs.Graphics().p("AzmNpQA2sGJJn7QJKn+MFA3QMGA2H8JKQH+JIg2MGg");
	var mask_3_graphics_158 = new cjs.Graphics().p("AzoOPQAssHJCoDQJDoFMGAsQMHArIEJEQIFJAgsMHg");
	var mask_3_graphics_159 = new cjs.Graphics().p("AzpO2QAhsII7oLQI8oNMGAhQMIAhIMI9QINI5ghMIg");
	var mask_3_graphics_160 = new cjs.Graphics().p("AzqPcQAXsIIzoSQI1oVMHAWQMIAXITI1QIVIygWMIg");
	var mask_3_graphics_161 = new cjs.Graphics().p("AzqQCQAMsIIsoaQItodMIAMQMIAMIbIuQIcIrgMMIg");
	var mask_3_graphics_162 = new cjs.Graphics().p("AzqQpQABsJIlohQImokMHABQMIABIjImQIkIkgBMIg");
	var mask_3_graphics_163 = new cjs.Graphics().p("ArWj4QIfosMHgJQMIgJIqIeQIrIcAKMIMg6hAAtQgJsIIdopg");
	var mask_3_graphics_164 = new cjs.Graphics().p("ArnjzQIXozMGgUQMIgTIyIXQIzIUATMIMg6fABfQgUsHIWoxg");
	var mask_3_graphics_165 = new cjs.Graphics().p("Ar4jtQIPo6MGgfQMIgeI5IPQI6INAeMIMg6eACSQgesHIOo4g");
	var mask_3_graphics_166 = new cjs.Graphics().p("AsJjnQIHpBMGgpQMIgpI/IHQJCIFApMHMg6cADGQgpsHIGo/g");
	var mask_3_graphics_167 = new cjs.Graphics().p("AsZjgQH/pJMGgzQMGg0JHIAQJIH9A0MGMg6ZAD5QgzsHH+pFg");
	var mask_3_graphics_168 = new cjs.Graphics().p("AspjaQH4pPMEg+QMGg+JOH3QJPH1A+MGMg6VAEsQg+sGH2pNg");
	var mask_3_graphics_169 = new cjs.Graphics().p("As4jTQHvpWMEhJQMFhIJUHvQJWHtBJMFMg6QAFeQhJsEHupUg");
	var mask_3_graphics_170 = new cjs.Graphics().p("AtHjMQHnpdMDhTQMEhTJbHnQJdHmBTMDMg6MAGRQhTsEHmpag");
	var mask_3_graphics_171 = new cjs.Graphics().p("AtVjFQHfpjMBheQMChdJiHfQJkHdBdMCMg6FAHEQhesDHephg");
	var mask_3_graphics_172 = new cjs.Graphics().p("Atji9QHWpqMAhoQMBhoJpHWQJqHVBoMBMg5/AH2QhosBHVpng");
	var mask_3_graphics_173 = new cjs.Graphics().p("Atxi1QHOpwL/hzQMAhzJuHPQJwHMBzL/Mg54AIpQhysAHMptg");
	var mask_3_graphics_174 = new cjs.Graphics().p("At+itQHGp3L9h9QL+h9J1HGQJ2HEB9L9Mg5wAJcQh9r+HEp0g");
	var mask_3_graphics_175 = new cjs.Graphics().p("AuKilQG9p8L7iIQL8iIJ7G9QJ8G8CIL7Mg5nAKOQiIr8G8p6g");
	var mask_3_graphics_176 = new cjs.Graphics().p("AuWicQG0qDL5iSQL6iSKBG0QKDGzCSL5Mg5eALBQiSr7Gzp/g");
	var mask_3_graphics_177 = new cjs.Graphics().p("AuiiUQGrqIL4icQL4idKHGsQKIGpCcL4Mg5UALyQicr4GqqGg");
	var mask_3_graphics_178 = new cjs.Graphics().p("AutiLQGiqOL1inQL2imKNGiQKOGhCnL1Mg5KAMlQimr2GhqMg");
	var mask_3_graphics_179 = new cjs.Graphics().p("Au4iBQGaqULyixQL0ixKSGZQKUGYCxLzMg4+ANWQixrzGYqRg");
	var mask_3_graphics_180 = new cjs.Graphics().p("AvCh4QGQqZLwi8QLyi7KYGRQKZGOC7LxMg4yAOIQi7ryGPqWg");
	var mask_3_graphics_181 = new cjs.Graphics().p("AvMhuQGHqfLujGQLujFKeGHQKeGGDGLtMg4lAO6QjGrvGGqbg");
	var mask_3_graphics_182 = new cjs.Graphics().p("AvVhlQF+qkLrjQQLrjPKjF+QKkF9DPLqMg4XAPrQjQrrF9qig");
	var mask_3_graphics_183 = new cjs.Graphics().p("AvehbQF1qpLojaQLojaKoF1QKpF0DaLoMg4KAQcQjarpF0qng");
	var mask_3_graphics_184 = new cjs.Graphics().p("AvmhQQFrqvLljkQLmjkKsFsQKuFqDkLlMg37ARNQjkrmFrqrg");
	var mask_3_graphics_185 = new cjs.Graphics().p("AvuhGQFiqzLhjuQLjjuKyFiQKyFhDvLhMg3sAR+QjurjFhqwg");
	var mask_3_graphics_186 = new cjs.Graphics().p("Av2g7QFZq4Lej4QLfj5K3FZQK3FYD5LeMg3cASuQj4rfFXq1g");
	var mask_3_graphics_187 = new cjs.Graphics().p("Av9gwQFQq9LakCQLckCK7FPQK8FOECLbMg3KATeQkDrcFOq5g");
	var mask_3_graphics_188 = new cjs.Graphics().p("AwDglQFFrBLYkMQLYkNK/FGQLBFEEMLYMg25AUOQkMrYFEq+g");
	var mask_3_graphics_189 = new cjs.Graphics().p("AwJgaQE8rFLTkWQLVkXLEE9QLFE6EWLUMg2oAU+QkWrUE7rDg");
	var mask_3_graphics_190 = new cjs.Graphics().p("AwOgOQEyrKLQkgQLQkgLIEzQLJEwEgLQMg2VAVuQkgrREyrGg");
	var mask_3_graphics_191 = new cjs.Graphics().p("AwTgDQEorNLMkqQLMkqLMEpQLOEnEpLMMg2BAWdQkqrNEorLg");
	var mask_3_graphics_192 = new cjs.Graphics().p("AwYAIQEfrQLIk0QLHkzLREfQLREdEzLIMg1tAXMQk0rJEerQg");
	var mask_3_graphics_193 = new cjs.Graphics().p("AwcAUQEVrULEk9QLDk+LUEWQLVETE9LEMg1ZAX6Qk9rEEUrUg");
	var mask_3_graphics_194 = new cjs.Graphics().p("AwgAhQELrYLAlHQK/lHLYELQLYEJFHLAMg1EAYpQlGrAEJrXg");
	var mask_3_graphics_195 = new cjs.Graphics().p("AwjAtQEBrcK7lQQK7lQLbEBQLcD/FRK8Mg0uAZWQlRq7EArbg");
	var mask_3_graphics_196 = new cjs.Graphics().p("AwlA6QD2rfK3laQK2laLfD3QLfD1FaK3Mg0XAaFQlaq3D2reg");
	var mask_3_graphics_197 = new cjs.Graphics().p("AwnBHQDsrjKyljQKxljLiDtQLjDrFjKyMg0AAayQljqyDsrhg");
	var mask_3_graphics_198 = new cjs.Graphics().p("AwpBUQDjrmKsltQKslsLmDjQLmDhFsKtMgzoAbfQltqsDirlg");
	var mask_3_graphics_199 = new cjs.Graphics().p("AwqBhQDYrpKol2QKnl2LoDZQLpDXF2KoMgzQAcNQl2qoDYrog");
	var mask_3_graphics_200 = new cjs.Graphics().p("AwrBvQDOrsKjl/QKimALrDPQLsDNF/KjMgy3Ac5Ql/qjDNrqg");
	var mask_3_graphics_201 = new cjs.Graphics().p("AwrB8QDEruKdmJQKdmILuDFQLuDCGJKeMgyeAdlQmIqeDDrtg");
	var mask_3_graphics_202 = new cjs.Graphics().p("AwqCKQC5rxKYmSQKXmRLxC6QLxC5GRKYMgyDAeRQmSqYC6rwg");
	var mask_3_graphics_203 = new cjs.Graphics().p("AwqCYQCwrzKSmbQKRmbL0CwQLzCvGbKSMgxpAe9QmbqTCvryg");
	var mask_3_graphics_204 = new cjs.Graphics().p("AwoCmQClr2KMmjQKMmkL2CmQL1CkGkKNMgxNAfnQmkqMClr1g");
	var mask_3_graphics_205 = new cjs.Graphics().p("AwnC0QCbr4KHmsQKGmsL4CbQL4CZGsKHMgwxAgTQmtqHCar3g");
	var mask_3_graphics_206 = new cjs.Graphics().p("AwkDDQCQr6KBm1QKAm1L6CRQL6CPG1KBMgwVAg9Qm1qBCQr5g");
	var mask_3_graphics_207 = new cjs.Graphics().p("AwhDRQCFr7J7m+QJ6m+L8CGQL8CFG+J7Mgv4AhnQm+p7CGr7g");
	var mask_3_graphics_208 = new cjs.Graphics().p("AweDgQB7r9J1nHQJ0nGL9B8QL+B6HGJ1MgvaAiQQnGp0B7r9g");
	var mask_3_graphics_209 = new cjs.Graphics().p("AwaDvQBwr/JvnPQJunPL/ByQL/BvHPJvMgu8Ai6QnPpvBxr+g");
	var mask_3_graphics_210 = new cjs.Graphics().p("AwWD+QBmsAJonYQJonXMABnQMBBlHXJoMgudAjjQnXpoBmsAg");
	var mask_3_graphics_211 = new cjs.Graphics().p("AwSENQBcsBJingQJhngMCBdQMCBaHfJiMgt9AkLQngpiBbsBg");
	var mask_3_graphics_212 = new cjs.Graphics().p("AwMEdQBRsDJbnoQJanpMDBTQMDBQHoJbMgtdAkzQnopbBRsCg");
	var mask_3_graphics_213 = new cjs.Graphics().p("AwHEsQBHsEJVnwQJTnwMEBHQMEBGHwJUMgs9AlbQnwpVBGsDg");
	var mask_3_graphics_214 = new cjs.Graphics().p("AwBE8QA9sFJNn4QJNn5MFA9QMFA8H4JNMgscAmBQn5pNA8sEg");
	var mask_3_graphics_215 = new cjs.Graphics().p("Av6FMQAysGJGoAQJGoBMGAzQMFAxIBJGMgr7AmoQoApHAxsEg");
	var mask_3_graphics_216 = new cjs.Graphics().p("AvzFcQAnsHJAoIQI+oIMHAoQMGAmIIJAMgrZAnOQoIpAAnsFg");
	var mask_3_graphics_217 = new cjs.Graphics().p("AvrFsQAcsHI5oQQI3oQMHAdQMHAcIQI4Mgq3An0QoQo4AdsGg");
	var mask_3_graphics_218 = new cjs.Graphics().p("AvjF8QASsHIxoYQIwoYMHATQMHARIYIxMgqTAoZQoYoxASsGg");
	var mask_3_graphics_219 = new cjs.Graphics().p("AvbGMQAIsHIqofQIoogMIAJQMHAGIfIqMgpwAo9QofopAHsHg");
	var mask_3_graphics_220 = new cjs.Graphics().p("AvSGdQgDsHIjonQIhonMHgCQMHgFInIjMgpLAphQonoigEsGg");
	var mask_3_graphics_221 = new cjs.Graphics().p("AvIGtQgOsHIbouQIaouMHgNQMHgPIuIbMgonAqFQouoagOsHg");
	var mask_3_graphics_222 = new cjs.Graphics().p("Au+G+QgZsHIUo1QISo2MHgXQMGgaI2ITMgoCAqpQo2oTgYsGg");
	var mask_3_graphics_223 = new cjs.Graphics().p("Au0HPQgjsHIMo8QIKo9MGgiQMHgkI9ILMgndArMQo9oMgjsFg");
	var mask_3_graphics_224 = new cjs.Graphics().p("AupHgQgtsGIDpEQICpEMGgsQMGgvJEIEMgm3ArtQpDoDgusFg");
	var mask_3_graphics_225 = new cjs.Graphics().p("AudHxQg5sFH8pLQH6pLMGg3QMFg5JLH7MgmRAsQQpKn8g4sEg");
	var mask_3_graphics_226 = new cjs.Graphics().p("AuSICQhCsEHzpSQHypSMFhBQMEhEJSHzMglpAsxQpSn0hDsDg");
	var mask_3_graphics_227 = new cjs.Graphics().p("AuFITQhOsDHspZQHqpYMDhMQMEhOJYHrMglCAtRQpYnrhNsDg");
	var mask_3_graphics_228 = new cjs.Graphics().p("At5IlQhXsDHjpfQHjpfMBhWQMChZJfHjMgkaAtxQpfnjhYsBg");
	var mask_3_graphics_229 = new cjs.Graphics().p("AtsI2QhisBHbpmQHbplMAhhQMBhjJlHaMgjyAuRQplnbhjsAg");
	var mask_3_graphics_230 = new cjs.Graphics().p("AteJIQhtsAHTpsQHSpsL/hsQL/htJsHSMgjJAuvQpsnShtr+g");
	var mask_3_graphics_231 = new cjs.Graphics().p("AtQJZQh3r+HKpyQHJpyL+h3QL9h4JzHKMgihAvOQpynKh3r9g");
	var mask_3_graphics_232 = new cjs.Graphics().p("AtBJrQiCr8HBp5QHBp4L8iBQL8iCJ4HBMgh2AvrQp5nBiBr7g");
	var mask_3_graphics_233 = new cjs.Graphics().p("AsyJ9QiMr7G4p+QG5p/L5iLQL6iNJ/G5MghNAwJQp/m5iLr5g");
	var mask_3_graphics_234 = new cjs.Graphics().p("AsjKPQiWr5GvqEQGwqFL4iVQL4iXKFGvMggjAwmQqFmwiWr3g");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_3_graphics_9,x:248.7,y:200.3}).wait(1).to({graphics:mask_3_graphics_10,x:248.7,y:200.3}).wait(1).to({graphics:mask_3_graphics_11,x:248.7,y:200.3}).wait(1).to({graphics:mask_3_graphics_12,x:248.7,y:200.4}).wait(1).to({graphics:mask_3_graphics_13,x:248.7,y:200.4}).wait(1).to({graphics:mask_3_graphics_14,x:248.7,y:200.4}).wait(1).to({graphics:mask_3_graphics_15,x:248.7,y:200.4}).wait(1).to({graphics:mask_3_graphics_16,x:248.7,y:200.4}).wait(1).to({graphics:mask_3_graphics_17,x:248.7,y:200.4}).wait(1).to({graphics:mask_3_graphics_18,x:248.7,y:200.4}).wait(1).to({graphics:mask_3_graphics_19,x:248.7,y:200.4}).wait(1).to({graphics:mask_3_graphics_20,x:248.7,y:200.4}).wait(1).to({graphics:mask_3_graphics_21,x:248.7,y:200.4}).wait(1).to({graphics:mask_3_graphics_22,x:248.7,y:200.4}).wait(1).to({graphics:mask_3_graphics_23,x:248.7,y:200.4}).wait(1).to({graphics:mask_3_graphics_24,x:248.7,y:200.4}).wait(1).to({graphics:mask_3_graphics_25,x:248.7,y:200.4}).wait(1).to({graphics:mask_3_graphics_26,x:248.6,y:200.4}).wait(1).to({graphics:mask_3_graphics_27,x:248.6,y:200.4}).wait(1).to({graphics:mask_3_graphics_28,x:248.6,y:200.4}).wait(1).to({graphics:mask_3_graphics_29,x:248.6,y:200.4}).wait(1).to({graphics:mask_3_graphics_30,x:248.6,y:200.4}).wait(1).to({graphics:mask_3_graphics_31,x:248.6,y:200.4}).wait(1).to({graphics:mask_3_graphics_32,x:248.6,y:200.4}).wait(1).to({graphics:mask_3_graphics_33,x:248.5,y:200.4}).wait(1).to({graphics:mask_3_graphics_34,x:248.5,y:200.4}).wait(1).to({graphics:mask_3_graphics_35,x:248.5,y:200.3}).wait(1).to({graphics:mask_3_graphics_36,x:248.5,y:200.3}).wait(1).to({graphics:mask_3_graphics_37,x:248.5,y:200.3}).wait(1).to({graphics:mask_3_graphics_38,x:248.4,y:200.3}).wait(1).to({graphics:mask_3_graphics_39,x:248.4,y:200.3}).wait(1).to({graphics:mask_3_graphics_40,x:248.4,y:200.3}).wait(1).to({graphics:mask_3_graphics_41,x:248.4,y:200.3}).wait(1).to({graphics:mask_3_graphics_42,x:248.4,y:200.3}).wait(1).to({graphics:mask_3_graphics_43,x:248.4,y:200.3}).wait(1).to({graphics:mask_3_graphics_44,x:248.4,y:200.3}).wait(1).to({graphics:mask_3_graphics_45,x:248.4,y:200.3}).wait(1).to({graphics:mask_3_graphics_46,x:248.4,y:200.3}).wait(1).to({graphics:mask_3_graphics_47,x:248.4,y:200.3}).wait(1).to({graphics:mask_3_graphics_48,x:248.4,y:200.3}).wait(1).to({graphics:mask_3_graphics_49,x:248.4,y:200.2}).wait(1).to({graphics:mask_3_graphics_50,x:248.4,y:200.2}).wait(1).to({graphics:mask_3_graphics_51,x:248.4,y:200.1}).wait(1).to({graphics:mask_3_graphics_52,x:248.4,y:200.1}).wait(1).to({graphics:mask_3_graphics_53,x:248.4,y:200}).wait(1).to({graphics:mask_3_graphics_54,x:248.4,y:199.9}).wait(1).to({graphics:mask_3_graphics_55,x:248.4,y:199.7}).wait(1).to({graphics:mask_3_graphics_56,x:248.4,y:199.6}).wait(1).to({graphics:mask_3_graphics_57,x:248.5,y:199.4}).wait(1).to({graphics:mask_3_graphics_58,x:248.5,y:199.3}).wait(1).to({graphics:mask_3_graphics_59,x:248.5,y:199.1}).wait(1).to({graphics:mask_3_graphics_60,x:248.5,y:198.9}).wait(1).to({graphics:mask_3_graphics_61,x:248.5,y:198.6}).wait(1).to({graphics:mask_3_graphics_62,x:248.5,y:198.4}).wait(1).to({graphics:mask_3_graphics_63,x:248.5,y:198.1}).wait(1).to({graphics:mask_3_graphics_64,x:248.6,y:197.8}).wait(1).to({graphics:mask_3_graphics_65,x:248.6,y:197.5}).wait(1).to({graphics:mask_3_graphics_66,x:248.6,y:197.2}).wait(1).to({graphics:mask_3_graphics_67,x:248.6,y:196.9}).wait(1).to({graphics:mask_3_graphics_68,x:248.6,y:196.5}).wait(1).to({graphics:mask_3_graphics_69,x:248.6,y:196.2}).wait(1).to({graphics:mask_3_graphics_70,x:248.6,y:195.8}).wait(1).to({graphics:mask_3_graphics_71,x:248.6,y:195.4}).wait(1).to({graphics:mask_3_graphics_72,x:248.6,y:195}).wait(1).to({graphics:mask_3_graphics_73,x:248.6,y:194.6}).wait(1).to({graphics:mask_3_graphics_74,x:248.6,y:194.1}).wait(1).to({graphics:mask_3_graphics_75,x:248.7,y:193.6}).wait(1).to({graphics:mask_3_graphics_76,x:248.7,y:193.2}).wait(1).to({graphics:mask_3_graphics_77,x:248.7,y:192.7}).wait(1).to({graphics:mask_3_graphics_78,x:248.7,y:192.2}).wait(1).to({graphics:mask_3_graphics_79,x:248.6,y:191.6}).wait(1).to({graphics:mask_3_graphics_80,x:248.6,y:191.1}).wait(1).to({graphics:mask_3_graphics_81,x:248.6,y:190.5}).wait(1).to({graphics:mask_3_graphics_82,x:248.6,y:190}).wait(1).to({graphics:mask_3_graphics_83,x:248.6,y:189.4}).wait(1).to({graphics:mask_3_graphics_84,x:248.6,y:188.8}).wait(1).to({graphics:mask_3_graphics_85,x:248.6,y:188.1}).wait(1).to({graphics:mask_3_graphics_86,x:248.6,y:187.5}).wait(1).to({graphics:mask_3_graphics_87,x:248.6,y:186.8}).wait(1).to({graphics:mask_3_graphics_88,x:248.6,y:186.2}).wait(1).to({graphics:mask_3_graphics_89,x:248.6,y:185.5}).wait(1).to({graphics:mask_3_graphics_90,x:248.5,y:184.8}).wait(1).to({graphics:mask_3_graphics_91,x:248.5,y:184.1}).wait(1).to({graphics:mask_3_graphics_92,x:248.5,y:183.4}).wait(1).to({graphics:mask_3_graphics_93,x:248.5,y:182.6}).wait(1).to({graphics:mask_3_graphics_94,x:248.5,y:181.9}).wait(1).to({graphics:mask_3_graphics_95,x:248.5,y:181.1}).wait(1).to({graphics:mask_3_graphics_96,x:248.5,y:180.3}).wait(1).to({graphics:mask_3_graphics_97,x:248.4,y:179.5}).wait(1).to({graphics:mask_3_graphics_98,x:248.4,y:178.7}).wait(1).to({graphics:mask_3_graphics_99,x:248.4,y:177.9}).wait(1).to({graphics:mask_3_graphics_100,x:248.4,y:177.1}).wait(1).to({graphics:mask_3_graphics_101,x:248.4,y:176.2}).wait(1).to({graphics:mask_3_graphics_102,x:248.4,y:175.4}).wait(1).to({graphics:mask_3_graphics_103,x:248.4,y:174.5}).wait(1).to({graphics:mask_3_graphics_104,x:248.4,y:173.6}).wait(1).to({graphics:mask_3_graphics_105,x:248.4,y:172.7}).wait(1).to({graphics:mask_3_graphics_106,x:248.4,y:171.8}).wait(1).to({graphics:mask_3_graphics_107,x:248.4,y:170.9}).wait(1).to({graphics:mask_3_graphics_108,x:248.4,y:169.9}).wait(1).to({graphics:mask_3_graphics_109,x:248.4,y:169}).wait(1).to({graphics:mask_3_graphics_110,x:248.5,y:168}).wait(1).to({graphics:mask_3_graphics_111,x:248.5,y:167}).wait(1).to({graphics:mask_3_graphics_112,x:248.5,y:166.1}).wait(1).to({graphics:mask_3_graphics_113,x:248.5,y:165.1}).wait(1).to({graphics:mask_3_graphics_114,x:248.5,y:164.1}).wait(1).to({graphics:mask_3_graphics_115,x:248.5,y:163}).wait(1).to({graphics:mask_3_graphics_116,x:248.6,y:162}).wait(1).to({graphics:mask_3_graphics_117,x:248.6,y:161}).wait(1).to({graphics:mask_3_graphics_118,x:248.6,y:159.9}).wait(1).to({graphics:mask_3_graphics_119,x:248.6,y:158.9}).wait(1).to({graphics:mask_3_graphics_120,x:248.7,y:157.8}).wait(1).to({graphics:mask_3_graphics_121,x:248.7,y:156.7}).wait(1).to({graphics:mask_3_graphics_122,x:248.7,y:155.7}).wait(1).to({graphics:mask_3_graphics_123,x:248.7,y:154.6}).wait(1).to({graphics:mask_3_graphics_124,x:248.7,y:153.5}).wait(1).to({graphics:mask_3_graphics_125,x:248.7,y:152.4}).wait(1).to({graphics:mask_3_graphics_126,x:248.8,y:151.2}).wait(1).to({graphics:mask_3_graphics_127,x:248.8,y:150.1}).wait(1).to({graphics:mask_3_graphics_128,x:248.8,y:149}).wait(1).to({graphics:mask_3_graphics_129,x:248.8,y:147.8}).wait(1).to({graphics:mask_3_graphics_130,x:248.8,y:146.7}).wait(1).to({graphics:mask_3_graphics_131,x:248.8,y:145.5}).wait(1).to({graphics:mask_3_graphics_132,x:248.8,y:144.4}).wait(1).to({graphics:mask_3_graphics_133,x:248.8,y:143.2}).wait(1).to({graphics:mask_3_graphics_134,x:248.8,y:142}).wait(1).to({graphics:mask_3_graphics_135,x:248.8,y:140.8}).wait(1).to({graphics:mask_3_graphics_136,x:248.8,y:139.6}).wait(1).to({graphics:mask_3_graphics_137,x:248.8,y:138.4}).wait(1).to({graphics:mask_3_graphics_138,x:248.8,y:137.2}).wait(1).to({graphics:mask_3_graphics_139,x:248.8,y:136}).wait(1).to({graphics:mask_3_graphics_140,x:248.8,y:134.8}).wait(1).to({graphics:mask_3_graphics_141,x:248.8,y:133.6}).wait(1).to({graphics:mask_3_graphics_142,x:248.8,y:132.3}).wait(1).to({graphics:mask_3_graphics_143,x:248.8,y:131.1}).wait(1).to({graphics:mask_3_graphics_144,x:248.8,y:129.9}).wait(1).to({graphics:mask_3_graphics_145,x:248.8,y:128.6}).wait(1).to({graphics:mask_3_graphics_146,x:248.8,y:127.4}).wait(1).to({graphics:mask_3_graphics_147,x:248.8,y:126.2}).wait(1).to({graphics:mask_3_graphics_148,x:248.8,y:124.9}).wait(1).to({graphics:mask_3_graphics_149,x:248.8,y:123.6}).wait(1).to({graphics:mask_3_graphics_150,x:248.7,y:122.4}).wait(1).to({graphics:mask_3_graphics_151,x:248.7,y:121.1}).wait(1).to({graphics:mask_3_graphics_152,x:248.7,y:119.9}).wait(1).to({graphics:mask_3_graphics_153,x:248.7,y:118.6}).wait(1).to({graphics:mask_3_graphics_154,x:248.7,y:117.3}).wait(1).to({graphics:mask_3_graphics_155,x:248.7,y:116.1}).wait(1).to({graphics:mask_3_graphics_156,x:248.7,y:114.8}).wait(1).to({graphics:mask_3_graphics_157,x:248.7,y:113.5}).wait(1).to({graphics:mask_3_graphics_158,x:248.7,y:112.2}).wait(1).to({graphics:mask_3_graphics_159,x:248.7,y:111}).wait(1).to({graphics:mask_3_graphics_160,x:248.7,y:109.7}).wait(1).to({graphics:mask_3_graphics_161,x:248.7,y:108.4}).wait(1).to({graphics:mask_3_graphics_162,x:248.7,y:107.1}).wait(1).to({graphics:mask_3_graphics_163,x:248.7,y:108.1}).wait(1).to({graphics:mask_3_graphics_164,x:248.6,y:109.3}).wait(1).to({graphics:mask_3_graphics_165,x:248.6,y:110.6}).wait(1).to({graphics:mask_3_graphics_166,x:248.6,y:111.9}).wait(1).to({graphics:mask_3_graphics_167,x:248.5,y:113.2}).wait(1).to({graphics:mask_3_graphics_168,x:248.4,y:114.5}).wait(1).to({graphics:mask_3_graphics_169,x:248.3,y:115.7}).wait(1).to({graphics:mask_3_graphics_170,x:248.2,y:117}).wait(1).to({graphics:mask_3_graphics_171,x:248,y:118.3}).wait(1).to({graphics:mask_3_graphics_172,x:247.9,y:119.5}).wait(1).to({graphics:mask_3_graphics_173,x:247.7,y:120.8}).wait(1).to({graphics:mask_3_graphics_174,x:247.5,y:122.1}).wait(1).to({graphics:mask_3_graphics_175,x:247.3,y:123.3}).wait(1).to({graphics:mask_3_graphics_176,x:247.1,y:124.6}).wait(1).to({graphics:mask_3_graphics_177,x:246.8,y:125.8}).wait(1).to({graphics:mask_3_graphics_178,x:246.6,y:127.1}).wait(1).to({graphics:mask_3_graphics_179,x:246.3,y:128.3}).wait(1).to({graphics:mask_3_graphics_180,x:246,y:129.6}).wait(1).to({graphics:mask_3_graphics_181,x:245.7,y:130.8}).wait(1).to({graphics:mask_3_graphics_182,x:245.3,y:132}).wait(1).to({graphics:mask_3_graphics_183,x:245,y:133.3}).wait(1).to({graphics:mask_3_graphics_184,x:244.6,y:134.5}).wait(1).to({graphics:mask_3_graphics_185,x:244.3,y:135.7}).wait(1).to({graphics:mask_3_graphics_186,x:243.9,y:136.9}).wait(1).to({graphics:mask_3_graphics_187,x:243.4,y:138.1}).wait(1).to({graphics:mask_3_graphics_188,x:243,y:139.3}).wait(1).to({graphics:mask_3_graphics_189,x:242.6,y:140.5}).wait(1).to({graphics:mask_3_graphics_190,x:242.1,y:141.7}).wait(1).to({graphics:mask_3_graphics_191,x:241.6,y:142.9}).wait(1).to({graphics:mask_3_graphics_192,x:241.1,y:144.1}).wait(1).to({graphics:mask_3_graphics_193,x:240.6,y:145.2}).wait(1).to({graphics:mask_3_graphics_194,x:240.1,y:146.4}).wait(1).to({graphics:mask_3_graphics_195,x:239.6,y:147.5}).wait(1).to({graphics:mask_3_graphics_196,x:239,y:148.7}).wait(1).to({graphics:mask_3_graphics_197,x:238.4,y:149.8}).wait(1).to({graphics:mask_3_graphics_198,x:237.8,y:150.9}).wait(1).to({graphics:mask_3_graphics_199,x:237.2,y:152.1}).wait(1).to({graphics:mask_3_graphics_200,x:236.6,y:153.2}).wait(1).to({graphics:mask_3_graphics_201,x:236,y:154.3}).wait(1).to({graphics:mask_3_graphics_202,x:235.3,y:155.4}).wait(1).to({graphics:mask_3_graphics_203,x:234.7,y:156.5}).wait(1).to({graphics:mask_3_graphics_204,x:234,y:157.5}).wait(1).to({graphics:mask_3_graphics_205,x:233.3,y:158.6}).wait(1).to({graphics:mask_3_graphics_206,x:232.6,y:159.7}).wait(1).to({graphics:mask_3_graphics_207,x:231.9,y:160.7}).wait(1).to({graphics:mask_3_graphics_208,x:231.1,y:161.7}).wait(1).to({graphics:mask_3_graphics_209,x:230.4,y:162.8}).wait(1).to({graphics:mask_3_graphics_210,x:229.6,y:163.8}).wait(1).to({graphics:mask_3_graphics_211,x:228.8,y:164.8}).wait(1).to({graphics:mask_3_graphics_212,x:228,y:165.8}).wait(1).to({graphics:mask_3_graphics_213,x:227.2,y:166.8}).wait(1).to({graphics:mask_3_graphics_214,x:226.4,y:167.7}).wait(1).to({graphics:mask_3_graphics_215,x:225.6,y:168.7}).wait(1).to({graphics:mask_3_graphics_216,x:224.7,y:169.7}).wait(1).to({graphics:mask_3_graphics_217,x:223.9,y:170.6}).wait(1).to({graphics:mask_3_graphics_218,x:223,y:171.5}).wait(1).to({graphics:mask_3_graphics_219,x:222.1,y:172.4}).wait(1).to({graphics:mask_3_graphics_220,x:221.2,y:173.3}).wait(1).to({graphics:mask_3_graphics_221,x:220.3,y:174.2}).wait(1).to({graphics:mask_3_graphics_222,x:219.4,y:175.1}).wait(1).to({graphics:mask_3_graphics_223,x:218.5,y:176}).wait(1).to({graphics:mask_3_graphics_224,x:217.5,y:176.8}).wait(1).to({graphics:mask_3_graphics_225,x:216.6,y:177.7}).wait(1).to({graphics:mask_3_graphics_226,x:215.6,y:178.5}).wait(1).to({graphics:mask_3_graphics_227,x:214.6,y:179.3}).wait(1).to({graphics:mask_3_graphics_228,x:213.6,y:180.1}).wait(1).to({graphics:mask_3_graphics_229,x:212.6,y:180.9}).wait(1).to({graphics:mask_3_graphics_230,x:211.6,y:181.6}).wait(1).to({graphics:mask_3_graphics_231,x:210.6,y:182.4}).wait(1).to({graphics:mask_3_graphics_232,x:209.5,y:183.1}).wait(1).to({graphics:mask_3_graphics_233,x:208.5,y:183.9}).wait(1).to({graphics:mask_3_graphics_234,x:207.5,y:184.6}).wait(426));

	// Layer 2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(20,1,1).p("AnAOVQiThahmkHQjwprHIn7QHIn7JYDcQBtAoBhBD");
	this.shape_5.setTransform(278.9,196.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(20,1,1).p("AAiMwQnrFajwptQjwprHIn7QHIn7JYDcQBtAoBhBD");
	this.shape_6.setTransform(278.9,199.1);

	var maskedShapeInstanceList = [this.shape_5,this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5}]},9).to({state:[{t:this.shape_6}]},41).wait(610));

	// Letter
	this.instance_3 = new lib.Symbol1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(275,275);
	this.instance_3.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(660));

	// Background
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_7.setTransform(275,275,3.373,2.543);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_8.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).wait(660));

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