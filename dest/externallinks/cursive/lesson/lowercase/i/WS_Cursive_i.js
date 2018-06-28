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
	this.shape.graphics.f("#FFFFFF").s().p("AwUTNQhyhbAAikQAAhqCQlZQgYAgg3AAQheAAAAh+QAAhsB+iVIFrm3QCejTBTAAQCSAAAACKQAABGhYC2IjBFzIi/GFQhYDLABBjQgBAvBKAAQCYAAC8hEQCng6C7hvQE+i8ETkIIDOjHQBXhMC8i0QA6gwA4AAQBnAAAABzQAABFlGFdIgLASQm9GrklC5QjpCSjXBSQjwBbjBAAQinAAhthSgAmYwuQAAhgBQhKQBLhGBhAAQBDAAAyA1QAxA1AABCQAABfhLBGQhKBGhgAAQitAAAAing");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.8,-131.1,237.6,262.2);


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
	this.instance.setTransform(-45.6,24,1,1,8.2,0,0,-0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-0.3,scaleX:1,scaleY:1,rotation:-5.4,guide:{path:[-45.5,24.1,-50.2,47.2,-48.6,57.6]}},44).to({scaleX:1,scaleY:1,rotation:-123.8,guide:{path:[-48.6,57.6,-46.6,70.7,-34.5,63.5]}},15).to({regX:-0.2,scaleX:1,scaleY:1,rotation:-139.2,guide:{path:[-34.6,63.5,-31.4,61.6,-27.5,58.2,-16.1,48.3,-6.1,36.9]}},24).to({scaleX:1,scaleY:1,rotation:-151.9,guide:{path:[-5.9,36.9,10.2,18.6,22.2,-3.4,41.7,-38.9,49.4,-50.5]}},36).wait(1));

	// Layer 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_86 = new cjs.Graphics().p("AkhhAIBBhlIICFGIhBBlg");
	var mask_graphics_87 = new cjs.Graphics().p("AkohkIBPh9IICFGIhPB9g");
	var mask_graphics_88 = new cjs.Graphics().p("AkwhYIBfiVIICFGIhfCVg");
	var mask_graphics_89 = new cjs.Graphics().p("Ak3hMIBtisIICFFIhtCsg");
	var mask_graphics_90 = new cjs.Graphics().p("Ak/hBIB9jDIIBFGIh8DDg");
	var mask_graphics_91 = new cjs.Graphics().p("AlGg1ICLjbIICFGIiLDbg");
	var mask_graphics_92 = new cjs.Graphics().p("AlOgpICajzIICFGIiaDyg");
	var mask_graphics_93 = new cjs.Graphics().p("AlVgeICpkJIICFGIipEJg");
	var mask_graphics_94 = new cjs.Graphics().p("AlcgSIC3khIICFGIi3Ehg");
	var mask_graphics_95 = new cjs.Graphics().p("AlkgHIDHk3IICFFIjHE5g");
	var mask_graphics_96 = new cjs.Graphics().p("AlrAEIDVlOIICFHIjVFOg");
	var mask_graphics_97 = new cjs.Graphics().p("AlyAQIDjlmIICFHIjjFmg");
	var mask_graphics_98 = new cjs.Graphics().p("Al6AcIDzl+IICFHIjzF+g");
	var mask_graphics_99 = new cjs.Graphics().p("AmBAnIEBmVIIDFIIkCGVg");
	var mask_graphics_100 = new cjs.Graphics().p("AmJAzIERmsIICFHIkRGsg");
	var mask_graphics_101 = new cjs.Graphics().p("AmQA/IEgnEIICFHIkgHEg");
	var mask_graphics_102 = new cjs.Graphics().p("AmYBKIEvnbIICFIIkvHbg");
	var mask_graphics_103 = new cjs.Graphics().p("AmfBWIE9nyIICFHIk9Hyg");
	var mask_graphics_104 = new cjs.Graphics().p("AmnBiIFNoKIICFHIlNIKg");
	var mask_graphics_105 = new cjs.Graphics().p("AmuBuIFboiIICFHIlbIig");
	var mask_graphics_106 = new cjs.Graphics().p("Am2B5IFro5IICFHIlrI6g");
	var mask_graphics_107 = new cjs.Graphics().p("Am9CFIF5pQIICFHIl5JQg");
	var mask_graphics_108 = new cjs.Graphics().p("AnECRIGHpoIICFHImHJog");
	var mask_graphics_109 = new cjs.Graphics().p("AnMCdIGXqAIICFHImXKAg");
	var mask_graphics_110 = new cjs.Graphics().p("AnTCoIGlqWIICFHImlKWg");
	var mask_graphics_111 = new cjs.Graphics().p("AnbC0IG1quIICFHIm1Kug");
	var mask_graphics_112 = new cjs.Graphics().p("AniDAIHDrFIICFGInDLFg");
	var mask_graphics_113 = new cjs.Graphics().p("AnqDLIHTrcIICFHInTLcg");
	var mask_graphics_114 = new cjs.Graphics().p("AnxDXIHhr0IICFHInhL0g");
	var mask_graphics_115 = new cjs.Graphics().p("An5DjIHwsMIIDFHInxMMg");
	var mask_graphics_116 = new cjs.Graphics().p("AoADvIH/skIICFIIn/Mig");
	var mask_graphics_117 = new cjs.Graphics().p("AoHD6IIMs6IIDFHIoMM6g");
	var mask_graphics_118 = new cjs.Graphics().p("AoTEMIIkteIIDFHIokNeg");
	var mask_graphics_119 = new cjs.Graphics().p("AodEdII5uAIICFHIo5OAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(86).to({graphics:mask_graphics_86,x:-0.2,y:26.2}).wait(1).to({graphics:mask_graphics_87,x:0.6,y:29.8}).wait(1).to({graphics:mask_graphics_88,x:1.3,y:28.6}).wait(1).to({graphics:mask_graphics_89,x:2.1,y:27.5}).wait(1).to({graphics:mask_graphics_90,x:2.8,y:26.3}).wait(1).to({graphics:mask_graphics_91,x:3.6,y:25.1}).wait(1).to({graphics:mask_graphics_92,x:4.3,y:24}).wait(1).to({graphics:mask_graphics_93,x:5.1,y:22.8}).wait(1).to({graphics:mask_graphics_94,x:5.8,y:21.6}).wait(1).to({graphics:mask_graphics_95,x:6.6,y:20.4}).wait(1).to({graphics:mask_graphics_96,x:7.3,y:19.2}).wait(1).to({graphics:mask_graphics_97,x:8.1,y:18.1}).wait(1).to({graphics:mask_graphics_98,x:8.8,y:16.9}).wait(1).to({graphics:mask_graphics_99,x:9.6,y:15.7}).wait(1).to({graphics:mask_graphics_100,x:10.3,y:14.5}).wait(1).to({graphics:mask_graphics_101,x:11.1,y:13.4}).wait(1).to({graphics:mask_graphics_102,x:11.8,y:12.2}).wait(1).to({graphics:mask_graphics_103,x:12.5,y:11}).wait(1).to({graphics:mask_graphics_104,x:13.3,y:9.9}).wait(1).to({graphics:mask_graphics_105,x:14,y:8.7}).wait(1).to({graphics:mask_graphics_106,x:14.8,y:7.5}).wait(1).to({graphics:mask_graphics_107,x:15.5,y:6.3}).wait(1).to({graphics:mask_graphics_108,x:16.3,y:5.2}).wait(1).to({graphics:mask_graphics_109,x:17,y:4}).wait(1).to({graphics:mask_graphics_110,x:17.8,y:2.8}).wait(1).to({graphics:mask_graphics_111,x:18.5,y:1.6}).wait(1).to({graphics:mask_graphics_112,x:19.3,y:0.5}).wait(1).to({graphics:mask_graphics_113,x:20,y:-0.7}).wait(1).to({graphics:mask_graphics_114,x:20.8,y:-1.9}).wait(1).to({graphics:mask_graphics_115,x:21.5,y:-3.1}).wait(1).to({graphics:mask_graphics_116,x:22.3,y:-4.2}).wait(1).to({graphics:mask_graphics_117,x:23,y:-5.4}).wait(1).to({graphics:mask_graphics_118,x:24.1,y:-7.1}).wait(1).to({graphics:mask_graphics_119,x:25.2,y:-8.8}).wait(1));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AnPCwQhzJUEukEQEtkEDDljQDDlkBRiD");
	this.shape.setTransform(0.1,7);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(86).to({_off:false},0).wait(34));

	// Layer 3 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_44 = new cjs.Graphics().p("ArsHFQihnEDNmxQDNmzHDiiQG6ifGqDCMgPdAgvQmkjNifm7g");
	var mask_1_graphics_45 = new cjs.Graphics().p("ArWHZQisnBDDm2QDDm3G/isQG3ipGuC3MgOsAhGQmojEiqm2g");
	var mask_1_graphics_46 = new cjs.Graphics().p("Aq/HsQi3m8C5m6QC4m8G8i3QGyizGyCtMgN6AhcQmti6izmzg");
	var mask_1_graphics_47 = new cjs.Graphics().p("AqoIAQjBm4Cum+QCunAG4jBQGti+G2CjMgNHAhwQmxiwi+mug");
	var mask_1_graphics_48 = new cjs.Graphics().p("AqQIUQjLmzCjnDQCknEGzjLQGpjIG6CZMgMVAiDQm1imjImpg");
	var mask_1_graphics_49 = new cjs.Graphics().p("Ap3InQjWmuCZnGQCZnHGujWQGkjRG+COMgLjAiVQm4icjRmlg");
	var mask_1_graphics_50 = new cjs.Graphics().p("ApeI7QjgmpCPnKQCOnLGpjfQGfjbHBCEMgKvAilQm8iRjbmgg");
	var mask_1_graphics_51 = new cjs.Graphics().p("ApEJPQjqmkCEnNQCEnOGjjpQGajlHDB5MgJ7Ai1Qm+iHjlmag");
	var mask_1_graphics_52 = new cjs.Graphics().p("AouJiQjzmeB4nQQB5nRGejzQGVjuHGBvMgJHAjDQnCh8jumWg");
	var mask_1_graphics_53 = new cjs.Graphics().p("AobJ9QkAmWBqnUQBpnUGWkAQGNj8HKBhMgH/AjUQnGhuj7mNg");
	var mask_1_graphics_54 = new cjs.Graphics().p("AoHKYQkNmOBbnXQBbnYGNkNQGFkHHMBRMgG2AjkQnJhfkImFg");
	var mask_1_graphics_55 = new cjs.Graphics().p("AnyKyQkZmFBMnZQBLnbGFkZQF8kUHPBDMgFuAjwQnMhQkUl9g");
	var mask_1_graphics_56 = new cjs.Graphics().p("AncLNQkll8A8ncQA9ncF7kmQFzkgHRA0MgElAj7QnOhCkglzg");
	var mask_1_graphics_57 = new cjs.Graphics().p("AnFLnQkxlzAtndQAtneFykyQFqkrHSAlMgDbAkDQnQgzkslqg");
	var mask_1_graphics_58 = new cjs.Graphics().p("AmtMBQk9loAenfQAenfFok9QFgk4HTAXMgCRAkJQnRgkk4lhg");
	var mask_1_graphics_59 = new cjs.Graphics().p("AmUMbQlIleAOnfQAPngFelJQFXlCHSAHMgBHAkNQnSgWlDlWg");
	var mask_1_graphics_60 = new cjs.Graphics().p("Al6M1QlUlUAAngQAAnfFTlUQFMlNHSgHMAADAkNQnTgGlNlMg");
	var mask_1_graphics_61 = new cjs.Graphics().p("AlfNOQlelJgQngQgQnfFIleQFClYHSgWMABMAkNIgYAAQnEAAlOk5g");
	var mask_1_graphics_62 = new cjs.Graphics().p("AlENlQlok9gfnfQgfneE8lpQE3liHRglMACWAkJQghACggAAQmrAAlIkhg");
	var mask_1_graphics_63 = new cjs.Graphics().p("AknN7QlzkxguneQgundExlzQErlrHPg0MADgAkDQg1AEgzAAQmTAAlBkJg");
	var mask_1_graphics_64 = new cjs.Graphics().p("AkKOQQl8kmg+ncQg9ncEll8QEfl0HOhDMAEpAj7QhIAIhHAAQl8AAk5jyg");
	var mask_1_graphics_65 = new cjs.Graphics().p("AjsOjQmFkahNnaQhNnZEZmFQEUl+HLhRMAFyAjwQhcANhYAAQlmAAkxjcg");
	var mask_1_graphics_66 = new cjs.Graphics().p("AjNO0QmOkNhcnXQhcnXEMmOQEHmGHJhgMAG7AjjQhuAUhqAAQlSAAknjIg");
	var mask_1_graphics_67 = new cjs.Graphics().p("AiuPEQmWkAhrnUQhrnUEAmWQD6mOHFhvMAIDAjUQiAAbh7AAQk9AAkei0g");
	var mask_1_graphics_68 = new cjs.Graphics().p("AiOPSQmfjzh5nQQh6nQDzmeQDtmWHCh9MAJLAjCQiSAjiMAAQkqAAkTihg");
	var mask_1_graphics_69 = new cjs.Graphics().p("Ah+PfQmmjmiInMQiJnMDlmlQDhmeG9iLMAKSAiuQiiAtidAAQkYAAkHiPg");
	var mask_1_graphics_70 = new cjs.Graphics().p("AhvPqQmtjYiXnIQiXnHDYmtQDTmkG4iaMALZAiYQiyA5iuAAQkGAAj7h/g");
	var mask_1_graphics_71 = new cjs.Graphics().p("AhfP0Qm0jLilnDQimnBDKm0QDGmrG0inMAMeAh/QjCBEi/AAQj0AAjuhug");
	var mask_1_graphics_72 = new cjs.Graphics().p("Ag7QDQnAisjEm2QjFm2CsnAQCnm3GojGMAOyAhEQjhBhjkAAQjPAAjQhQg");
	var mask_1_graphics_73 = new cjs.Graphics().p("AgTQLQnMiMjimoQjimoCMnKQCJnCGajiIRBf9Qj9CCkLAAQiqAAiug1g");
	var mask_1_graphics_74 = new cjs.Graphics().p("AAWQLQnThsj/mXQj/mXBsnTQBqnLGJj9ITMetQkXCokzAAQiFAAiLggg");
	var mask_1_graphics_75 = new cjs.Graphics().p("ABCQEQnZhMkamEQkamFBLnZQBKnRF2kYIVRdUQksDTlfAAQhgAAhkgQg");
	var mask_1_graphics_76 = new cjs.Graphics().p("ABxP1Qndgqk1lxQk0lwArndQApnVFikxIXQbxQk/ECmPAAQg4AAg6gFg");
	var mask_1_graphics_77 = new cjs.Graphics().p("ACjPfQnggKlNlaQlNlaAKnfQAJnXFMlJIZHaGQlNE3nGAAIgZAAg");
	var mask_1_graphics_78 = new cjs.Graphics().p("ApsKVQlllCgXnfQgYnWE1lfIa2YUQk/FWnWAXQggACggAAQm3AAlLktg");
	var mask_1_graphics_79 = new cjs.Graphics().p("ApJKqQl6kpg5ncQg3nUEblzIceWZQknFrnTA4QhMAJhKAAQmCAAk9j5g");
	var mask_1_graphics_80 = new cjs.Graphics().p("AogK4QmOkPhZnWQhYnPEBmGId8UYQkMF/nOBYQh1AWhxAAQlUAAkqjLg");
	var mask_1_graphics_81 = new cjs.Graphics().p("AnyLAQmfjyh6nQQh4nHDmmXIfSSQQjyGRnHB3QibApiWAAQkpAAkUihg");
	var mask_1_graphics_82 = new cjs.Graphics().p("Am/LCQmvjViZnHQiXm9DJmmMAgeAQEQjWGgm9CXQi/BAi6AAQkCAAj6h8g");
	var mask_1_graphics_83 = new cjs.Graphics().p("AmHK+Qm8i3i5m7Qi1mxCrmzMAhgANxQi4GumyC2QjfBcjfAAQjcAAjdhbg");
	var mask_1_graphics_84 = new cjs.Graphics().p("AlLK0QnIiXjWmuQjTmkCNm9MAiYALcQibG5mkDTQj8B9kFAAQi3AAi9g/g");
	var mask_1_graphics_85 = new cjs.Graphics().p("AkKKlQnRh4j0meQjwmUBunGMAjFAJDQh7HCmVDvQkVCjktAAQiTAAiZgng");
	var mask_1_graphics_86 = new cjs.Graphics().p("AjGKPQnYhXkQmMQkLmDBPnNMAjnAGnQhcHJmDELQksDOlXAAQhuAAhzgWg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_1_graphics_44,x:-62.7,y:16.3}).wait(1).to({graphics:mask_1_graphics_45,x:-63.9,y:16.9}).wait(1).to({graphics:mask_1_graphics_46,x:-65.1,y:17.4}).wait(1).to({graphics:mask_1_graphics_47,x:-66.3,y:17.9}).wait(1).to({graphics:mask_1_graphics_48,x:-67.6,y:18.3}).wait(1).to({graphics:mask_1_graphics_49,x:-68.8,y:18.7}).wait(1).to({graphics:mask_1_graphics_50,x:-70,y:19.1}).wait(1).to({graphics:mask_1_graphics_51,x:-71.3,y:19.5}).wait(1).to({graphics:mask_1_graphics_52,x:-72.2,y:20}).wait(1).to({graphics:mask_1_graphics_53,x:-72.1,y:20.4}).wait(1).to({graphics:mask_1_graphics_54,x:-72.1,y:20.8}).wait(1).to({graphics:mask_1_graphics_55,x:-72.1,y:21.1}).wait(1).to({graphics:mask_1_graphics_56,x:-72,y:21.4}).wait(1).to({graphics:mask_1_graphics_57,x:-72,y:21.6}).wait(1).to({graphics:mask_1_graphics_58,x:-71.9,y:21.7}).wait(1).to({graphics:mask_1_graphics_59,x:-71.9,y:21.8}).wait(1).to({graphics:mask_1_graphics_60,x:-71.9,y:21.8}).wait(1).to({graphics:mask_1_graphics_61,x:-71.9,y:21.8}).wait(1).to({graphics:mask_1_graphics_62,x:-71.9,y:21.9}).wait(1).to({graphics:mask_1_graphics_63,x:-71.9,y:22}).wait(1).to({graphics:mask_1_graphics_64,x:-71.9,y:22.2}).wait(1).to({graphics:mask_1_graphics_65,x:-71.9,y:22.5}).wait(1).to({graphics:mask_1_graphics_66,x:-71.9,y:22.8}).wait(1).to({graphics:mask_1_graphics_67,x:-72,y:23.2}).wait(1).to({graphics:mask_1_graphics_68,x:-72,y:23.6}).wait(1).to({graphics:mask_1_graphics_69,x:-70.4,y:24.1}).wait(1).to({graphics:mask_1_graphics_70,x:-68.6,y:24.6}).wait(1).to({graphics:mask_1_graphics_71,x:-66.8,y:25.1}).wait(1).to({graphics:mask_1_graphics_72,x:-63.2,y:26.5}).wait(1).to({graphics:mask_1_graphics_73,x:-59.8,y:28.1}).wait(1).to({graphics:mask_1_graphics_74,x:-56.4,y:29.9}).wait(1).to({graphics:mask_1_graphics_75,x:-53.2,y:31.9}).wait(1).to({graphics:mask_1_graphics_76,x:-50.1,y:34.2}).wait(1).to({graphics:mask_1_graphics_77,x:-47.3,y:36.7}).wait(1).to({graphics:mask_1_graphics_78,x:-44.7,y:39.4}).wait(1).to({graphics:mask_1_graphics_79,x:-42.3,y:42.4}).wait(1).to({graphics:mask_1_graphics_80,x:-40.2,y:45.5}).wait(1).to({graphics:mask_1_graphics_81,x:-38.3,y:48.8}).wait(1).to({graphics:mask_1_graphics_82,x:-36.6,y:52.2}).wait(1).to({graphics:mask_1_graphics_83,x:-35.1,y:55.7}).wait(1).to({graphics:mask_1_graphics_84,x:-33.9,y:59.3}).wait(1).to({graphics:mask_1_graphics_85,x:-33,y:63}).wait(1).to({graphics:mask_1_graphics_86,x:-32.2,y:66.5}).wait(34));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AnPCwQhzJUEukEQEtkEDDljQDDlkBRiD");
	this.shape_1.setTransform(0.1,7);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(44).to({_off:false},0).wait(76));

	// Layer 6 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("Aj5CMIBtkfIGGAIIhsEfg");
	var mask_2_graphics_1 = new cjs.Graphics().p("Aj1CPIBrklIGAAHIhqEmg");
	var mask_2_graphics_2 = new cjs.Graphics().p("AjyCTIBqktIF7AIIhpEtg");
	var mask_2_graphics_3 = new cjs.Graphics().p("AjuCWIBokzIF1AIIhoEzg");
	var mask_2_graphics_4 = new cjs.Graphics().p("AjqCaIBmk7IFvAIIhmE7g");
	var mask_2_graphics_5 = new cjs.Graphics().p("AjmCdIBklCIFpAJIhkFCg");
	var mask_2_graphics_6 = new cjs.Graphics().p("AjjCgIBjlIIFkAIIhjFJg");
	var mask_2_graphics_7 = new cjs.Graphics().p("AjfCkIBilQIFdAJIhhFQg");
	var mask_2_graphics_8 = new cjs.Graphics().p("AjbCnIBflWIFYAJIhfFWg");
	var mask_2_graphics_9 = new cjs.Graphics().p("AjXCqIBdldIFSAJIhdFeg");
	var mask_2_graphics_10 = new cjs.Graphics().p("AjUCuIBcllIFNAKIhcFlg");
	var mask_2_graphics_11 = new cjs.Graphics().p("AjQCyIBblsIFGAJIhaFsg");
	var mask_2_graphics_12 = new cjs.Graphics().p("AjMC1IBZlzIFAAKIhYFzg");
	var mask_2_graphics_13 = new cjs.Graphics().p("AjJC5IBYl6IE7AKIhYF5g");
	var mask_2_graphics_14 = new cjs.Graphics().p("AjFC8IBWmBIE1AKIhWGBg");
	var mask_2_graphics_15 = new cjs.Graphics().p("AjBDAIBUmJIEvAKIhUGJg");
	var mask_2_graphics_16 = new cjs.Graphics().p("Ai9DDIBSmPIEpAKIhSGPg");
	var mask_2_graphics_17 = new cjs.Graphics().p("Ai6DGIBRmWIEkALIhRGWg");
	var mask_2_graphics_18 = new cjs.Graphics().p("Ai2DKIBPmdIEeALIhPGcg");
	var mask_2_graphics_19 = new cjs.Graphics().p("AiyDNIBOmkIEXALIhNGkg");
	var mask_2_graphics_20 = new cjs.Graphics().p("AiuDRIBMmsIERALIhLGsg");
	var mask_2_graphics_21 = new cjs.Graphics().p("AirDUIBLmyIEMALIhLGyg");
	var mask_2_graphics_22 = new cjs.Graphics().p("AinDXIBJm5IEGAMIhJG5g");
	var mask_2_graphics_23 = new cjs.Graphics().p("AijDbIBHnAIEAALIhHHAg");
	var mask_2_graphics_24 = new cjs.Graphics().p("AigDeIBGnHID7AMIhGHHg");
	var mask_2_graphics_25 = new cjs.Graphics().p("AicDhIBEnOID1AMIhEHPg");
	var mask_2_graphics_26 = new cjs.Graphics().p("AiYDlIBCnVIDvAMIhDHVg");
	var mask_2_graphics_27 = new cjs.Graphics().p("AiUDoIBAncIDpANIhAHcg");
	var mask_2_graphics_28 = new cjs.Graphics().p("AiRDsIA/njIDkAMIhAHjg");
	var mask_2_graphics_29 = new cjs.Graphics().p("AiNDvIA9nqIDeANIg9Hqg");
	var mask_2_graphics_30 = new cjs.Graphics().p("AiJDyIA8nxIDXANIg8Hyg");
	var mask_2_graphics_31 = new cjs.Graphics().p("AiFD2IA6n4IDRANIg6H4g");
	var mask_2_graphics_32 = new cjs.Graphics().p("AiCD5IA5n/IDMAOIg5H/g");
	var mask_2_graphics_33 = new cjs.Graphics().p("Ah+D9IA3oHIDGAOIg3IGg");
	var mask_2_graphics_34 = new cjs.Graphics().p("Ah6EAIA1oNIDAAOIg1INg");
	var mask_2_graphics_35 = new cjs.Graphics().p("Ah3EEIA0oVIC7APIg0IUg");
	var mask_2_graphics_36 = new cjs.Graphics().p("AhzEHIAyobIC1AOIgzIbg");
	var mask_2_graphics_37 = new cjs.Graphics().p("AhvELIAwojICvAOIgxIjg");
	var mask_2_graphics_38 = new cjs.Graphics().p("AhrEOIAuoqICpAPIgvIpg");
	var mask_2_graphics_39 = new cjs.Graphics().p("AhoESIAtoxICkAOIguIxg");
	var mask_2_graphics_40 = new cjs.Graphics().p("AhkEVIAso4ICdAQIgsI3g");
	var mask_2_graphics_41 = new cjs.Graphics().p("AhgEYIAqo+ICXAPIgqI+g");
	var mask_2_graphics_42 = new cjs.Graphics().p("AhcEcIAopGICRAPIgoJGg");
	var mask_2_graphics_43 = new cjs.Graphics().p("AhZEfIAnpNICMAQIgnJMg");
	var mask_2_graphics_44 = new cjs.Graphics().p("AkbEiIAmpTICGAQIglJTg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:-43.1,y:14.8}).wait(1).to({graphics:mask_2_graphics_1,x:-43.2,y:15.1}).wait(1).to({graphics:mask_2_graphics_2,x:-43.3,y:15.5}).wait(1).to({graphics:mask_2_graphics_3,x:-43.4,y:15.8}).wait(1).to({graphics:mask_2_graphics_4,x:-43.5,y:16.2}).wait(1).to({graphics:mask_2_graphics_5,x:-43.7,y:16.6}).wait(1).to({graphics:mask_2_graphics_6,x:-43.8,y:16.9}).wait(1).to({graphics:mask_2_graphics_7,x:-43.9,y:17.3}).wait(1).to({graphics:mask_2_graphics_8,x:-44,y:17.6}).wait(1).to({graphics:mask_2_graphics_9,x:-44.1,y:18}).wait(1).to({graphics:mask_2_graphics_10,x:-44.2,y:18.4}).wait(1).to({graphics:mask_2_graphics_11,x:-44.3,y:18.7}).wait(1).to({graphics:mask_2_graphics_12,x:-44.5,y:19.1}).wait(1).to({graphics:mask_2_graphics_13,x:-44.6,y:19.4}).wait(1).to({graphics:mask_2_graphics_14,x:-44.7,y:19.8}).wait(1).to({graphics:mask_2_graphics_15,x:-44.8,y:20.2}).wait(1).to({graphics:mask_2_graphics_16,x:-44.9,y:20.5}).wait(1).to({graphics:mask_2_graphics_17,x:-45,y:20.9}).wait(1).to({graphics:mask_2_graphics_18,x:-45.1,y:21.2}).wait(1).to({graphics:mask_2_graphics_19,x:-45.3,y:21.6}).wait(1).to({graphics:mask_2_graphics_20,x:-45.4,y:22}).wait(1).to({graphics:mask_2_graphics_21,x:-45.5,y:22.3}).wait(1).to({graphics:mask_2_graphics_22,x:-45.6,y:22.7}).wait(1).to({graphics:mask_2_graphics_23,x:-45.7,y:23}).wait(1).to({graphics:mask_2_graphics_24,x:-45.8,y:23.4}).wait(1).to({graphics:mask_2_graphics_25,x:-45.9,y:23.8}).wait(1).to({graphics:mask_2_graphics_26,x:-46,y:24.1}).wait(1).to({graphics:mask_2_graphics_27,x:-46.2,y:24.5}).wait(1).to({graphics:mask_2_graphics_28,x:-46.3,y:24.8}).wait(1).to({graphics:mask_2_graphics_29,x:-46.4,y:25.2}).wait(1).to({graphics:mask_2_graphics_30,x:-46.5,y:25.6}).wait(1).to({graphics:mask_2_graphics_31,x:-46.6,y:25.9}).wait(1).to({graphics:mask_2_graphics_32,x:-46.7,y:26.3}).wait(1).to({graphics:mask_2_graphics_33,x:-46.8,y:26.7}).wait(1).to({graphics:mask_2_graphics_34,x:-47,y:27}).wait(1).to({graphics:mask_2_graphics_35,x:-47.1,y:27.4}).wait(1).to({graphics:mask_2_graphics_36,x:-47.2,y:27.7}).wait(1).to({graphics:mask_2_graphics_37,x:-47.3,y:28.1}).wait(1).to({graphics:mask_2_graphics_38,x:-47.4,y:28.5}).wait(1).to({graphics:mask_2_graphics_39,x:-47.5,y:28.8}).wait(1).to({graphics:mask_2_graphics_40,x:-47.6,y:29.2}).wait(1).to({graphics:mask_2_graphics_41,x:-47.8,y:29.5}).wait(1).to({graphics:mask_2_graphics_42,x:-47.9,y:29.9}).wait(1).to({graphics:mask_2_graphics_43,x:-48,y:30.3}).wait(1).to({graphics:mask_2_graphics_44,x:-28.4,y:30.6}).wait(76));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AnPCwQhzJUEukEQEtkEDDljQDDlkBRiD");
	this.shape_2.setTransform(0.1,7);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.1,0,38,35.1);


(lib.ar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-20.3,14.1,1,1,-127.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-135,guide:{path:[-20.3,14,9.9,-5.2,33.3,-26.8]}},74).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AiRgYIA+gvIBvCTIg9Avg");
	var mask_graphics_1 = new cjs.Graphics().p("AhaguIBGg1IBvCSIhGA1g");
	var mask_graphics_2 = new cjs.Graphics().p("AhdgsIBMg6IBvCTIhMA6g");
	var mask_graphics_3 = new cjs.Graphics().p("AhhgpIBUhAIBvCTIhUBAg");
	var mask_graphics_4 = new cjs.Graphics().p("AhlgmIBchFIBvCSIhcBGg");
	var mask_graphics_5 = new cjs.Graphics().p("AhogjIBihLIBvCSIhiBLg");
	var mask_graphics_6 = new cjs.Graphics().p("AhsggIBqhRIBvCSIhqBRg");
	var mask_graphics_7 = new cjs.Graphics().p("AhwgeIBxhWIBwCTIhxBWg");
	var mask_graphics_8 = new cjs.Graphics().p("AhzgbIB3hcIBwCTIh3Bcg");
	var mask_graphics_9 = new cjs.Graphics().p("Ah3gYIB/hhIBwCSIh/Bhg");
	var mask_graphics_10 = new cjs.Graphics().p("Ah7gVICHhnIBwCTIiHBmg");
	var mask_graphics_11 = new cjs.Graphics().p("Ah+gTICNhsIBwCTIiNBsg");
	var mask_graphics_12 = new cjs.Graphics().p("AiCgQICVhyIBwCTIiVByg");
	var mask_graphics_13 = new cjs.Graphics().p("AiFgNICbh3IBxCSIidB3g");
	var mask_graphics_14 = new cjs.Graphics().p("AiJgLICjh8IBwCTIijB8g");
	var mask_graphics_15 = new cjs.Graphics().p("AiNgIICriCIBwCTIirCCg");
	var mask_graphics_16 = new cjs.Graphics().p("AiQgFICyiHIBwCSIizCHg");
	var mask_graphics_17 = new cjs.Graphics().p("AiUgCIC5iNIBwCSIi5CNg");
	var mask_graphics_18 = new cjs.Graphics().p("AiYAAIDBiSIBwCSIjBCTg");
	var mask_graphics_19 = new cjs.Graphics().p("AibACIDHiXIBwCUIjICXg");
	var mask_graphics_20 = new cjs.Graphics().p("AifAFIDPidIBwCUIjPCdg");
	var mask_graphics_21 = new cjs.Graphics().p("AijAIIDXiiIBwCTIjXCig");
	var mask_graphics_22 = new cjs.Graphics().p("AimALIDdioIBxCTIjfCog");
	var mask_graphics_23 = new cjs.Graphics().p("AiqANIDlitIBwCTIjlCug");
	var mask_graphics_24 = new cjs.Graphics().p("AiuAQIDtizIBwCUIjtCzg");
	var mask_graphics_25 = new cjs.Graphics().p("AixATID0i5IBvCUIj0C4g");
	var mask_graphics_26 = new cjs.Graphics().p("Ai1AWID7i+IBwCTIj7C+g");
	var mask_graphics_27 = new cjs.Graphics().p("Ai5AZIEDjEIBwCTIkDDEg");
	var mask_graphics_28 = new cjs.Graphics().p("Ai8AbIEJjJIBxCTIkLDKg");
	var mask_graphics_29 = new cjs.Graphics().p("AjAAeIERjPIBwCUIkRDPg");
	var mask_graphics_30 = new cjs.Graphics().p("AjEAhIEZjVIBwCUIkZDUg");
	var mask_graphics_31 = new cjs.Graphics().p("AjHAkIEgjaIBvCTIkgDag");
	var mask_graphics_32 = new cjs.Graphics().p("AjLAmIEnjfIBwCUIknDfg");
	var mask_graphics_33 = new cjs.Graphics().p("AjPApIEvjlIBwCUIkvDlg");
	var mask_graphics_34 = new cjs.Graphics().p("AjSAsIE1jrIBxCUIk3Drg");
	var mask_graphics_35 = new cjs.Graphics().p("AjWAvIE9jxIBwCUIk9Dwg");
	var mask_graphics_36 = new cjs.Graphics().p("AjaAyIFFj2IBwCTIlFD2g");
	var mask_graphics_37 = new cjs.Graphics().p("AjdA0IFLj7IBwCUIlLD7g");
	var mask_graphics_38 = new cjs.Graphics().p("AjhA3IFTkAIBwCTIlTEBg");
	var mask_graphics_39 = new cjs.Graphics().p("AjlA6IFbkGIBvCTIlZEGg");
	var mask_graphics_40 = new cjs.Graphics().p("AjoA9IFhkMIBwCTIlhEMg");
	var mask_graphics_41 = new cjs.Graphics().p("AjsBAIFpkSIBwCUIlpERg");
	var mask_graphics_42 = new cjs.Graphics().p("AjwBCIFwkXIBxCUIlwEXg");
	var mask_graphics_43 = new cjs.Graphics().p("AjzBFIF3kcIBwCTIl3Edg");
	var mask_graphics_44 = new cjs.Graphics().p("Aj3BIIF/kiIBwCTIl/Eig");
	var mask_graphics_45 = new cjs.Graphics().p("Aj7BLIGHkoIBvCTImFEog");
	var mask_graphics_46 = new cjs.Graphics().p("Aj+BNIGNktIBwCUImNEtg");
	var mask_graphics_47 = new cjs.Graphics().p("AkCBQIGVkzIBwCUImVEzg");
	var mask_graphics_48 = new cjs.Graphics().p("AkGBTIGck4IBxCTImcE4g");
	var mask_graphics_49 = new cjs.Graphics().p("AkJBWIGjk+IBwCTImjE+g");
	var mask_graphics_50 = new cjs.Graphics().p("AkNBZIGrlEIBwCTImrFEg");
	var mask_graphics_51 = new cjs.Graphics().p("AkRBbIGzlJIBvCUImxFJg");
	var mask_graphics_52 = new cjs.Graphics().p("AkUBeIG5lPIBwCUIm5FPg");
	var mask_graphics_53 = new cjs.Graphics().p("AkYBhIHBlUIBwCTInBFUg");
	var mask_graphics_54 = new cjs.Graphics().p("AkcBkIHIlaIBwCUInHFZg");
	var mask_graphics_55 = new cjs.Graphics().p("AkfBmIHPlfIBwCUInPFfg");
	var mask_graphics_56 = new cjs.Graphics().p("AkjBpIHXllIBwCUInXFlg");
	var mask_graphics_57 = new cjs.Graphics().p("AknBsIHflqIBwCTInfFrg");
	var mask_graphics_58 = new cjs.Graphics().p("AkqBvIHllwIBwCTInlFwg");
	var mask_graphics_59 = new cjs.Graphics().p("AkuByIHtl2IBwCUIntF1g");
	var mask_graphics_60 = new cjs.Graphics().p("AkyB0IH1l7IBwCUIn1F7g");
	var mask_graphics_61 = new cjs.Graphics().p("Ak1B3IH7mBIBwCUIn7GBg");
	var mask_graphics_62 = new cjs.Graphics().p("Ak5B5IIDmFIBwCTIoDGGg");
	var mask_graphics_63 = new cjs.Graphics().p("Ak8B8IIKmLIBvCUIoKGLg");
	var mask_graphics_64 = new cjs.Graphics().p("AlAB/IIRmRIBwCUIoRGRg");
	var mask_graphics_65 = new cjs.Graphics().p("AlECCIIZmXIBwCUIoZGWg");
	var mask_graphics_66 = new cjs.Graphics().p("AlHCFIIfmcIBxCTIohGcg");
	var mask_graphics_67 = new cjs.Graphics().p("AlLCHIInmhIBwCTIonGig");
	var mask_graphics_68 = new cjs.Graphics().p("AlPCKIIvmnIBwCUIovGng");
	var mask_graphics_69 = new cjs.Graphics().p("AlSCNII2mtIBvCUIo2Gsg");
	var mask_graphics_70 = new cjs.Graphics().p("AlWCQII9myIBwCTIo9Gyg");
	var mask_graphics_71 = new cjs.Graphics().p("AlaCTIJFm4IBwCTIpFG4g");
	var mask_graphics_72 = new cjs.Graphics().p("AldCVIJLm9IBxCTIpNG+g");
	var mask_graphics_73 = new cjs.Graphics().p("AlhCYIJTnDIBwCUIpTHDg");
	var mask_graphics_74 = new cjs.Graphics().p("AllCbIJbnIIBwCTIpbHIg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-14.6,y:12.3}).wait(1).to({graphics:mask_graphics_1,x:-20.1,y:14.6}).wait(1).to({graphics:mask_graphics_2,x:-19.7,y:14.3}).wait(1).to({graphics:mask_graphics_3,x:-19.3,y:14}).wait(1).to({graphics:mask_graphics_4,x:-19,y:13.7}).wait(1).to({graphics:mask_graphics_5,x:-18.6,y:13.4}).wait(1).to({graphics:mask_graphics_6,x:-18.2,y:13.2}).wait(1).to({graphics:mask_graphics_7,x:-17.9,y:12.9}).wait(1).to({graphics:mask_graphics_8,x:-17.5,y:12.6}).wait(1).to({graphics:mask_graphics_9,x:-17.1,y:12.3}).wait(1).to({graphics:mask_graphics_10,x:-16.8,y:12.1}).wait(1).to({graphics:mask_graphics_11,x:-16.4,y:11.8}).wait(1).to({graphics:mask_graphics_12,x:-16,y:11.5}).wait(1).to({graphics:mask_graphics_13,x:-15.6,y:11.2}).wait(1).to({graphics:mask_graphics_14,x:-15.3,y:10.9}).wait(1).to({graphics:mask_graphics_15,x:-14.9,y:10.6}).wait(1).to({graphics:mask_graphics_16,x:-14.5,y:10.4}).wait(1).to({graphics:mask_graphics_17,x:-14.2,y:10.1}).wait(1).to({graphics:mask_graphics_18,x:-13.8,y:9.8}).wait(1).to({graphics:mask_graphics_19,x:-13.4,y:9.5}).wait(1).to({graphics:mask_graphics_20,x:-13.1,y:9.2}).wait(1).to({graphics:mask_graphics_21,x:-12.7,y:9}).wait(1).to({graphics:mask_graphics_22,x:-12.3,y:8.7}).wait(1).to({graphics:mask_graphics_23,x:-12,y:8.4}).wait(1).to({graphics:mask_graphics_24,x:-11.6,y:8.1}).wait(1).to({graphics:mask_graphics_25,x:-11.2,y:7.9}).wait(1).to({graphics:mask_graphics_26,x:-10.9,y:7.6}).wait(1).to({graphics:mask_graphics_27,x:-10.5,y:7.3}).wait(1).to({graphics:mask_graphics_28,x:-10.1,y:7}).wait(1).to({graphics:mask_graphics_29,x:-9.8,y:6.7}).wait(1).to({graphics:mask_graphics_30,x:-9.4,y:6.5}).wait(1).to({graphics:mask_graphics_31,x:-9,y:6.2}).wait(1).to({graphics:mask_graphics_32,x:-8.7,y:5.9}).wait(1).to({graphics:mask_graphics_33,x:-8.3,y:5.6}).wait(1).to({graphics:mask_graphics_34,x:-7.9,y:5.3}).wait(1).to({graphics:mask_graphics_35,x:-7.6,y:5.1}).wait(1).to({graphics:mask_graphics_36,x:-7.2,y:4.8}).wait(1).to({graphics:mask_graphics_37,x:-6.8,y:4.5}).wait(1).to({graphics:mask_graphics_38,x:-6.4,y:4.2}).wait(1).to({graphics:mask_graphics_39,x:-6.1,y:3.9}).wait(1).to({graphics:mask_graphics_40,x:-5.7,y:3.7}).wait(1).to({graphics:mask_graphics_41,x:-5.3,y:3.4}).wait(1).to({graphics:mask_graphics_42,x:-5,y:3.1}).wait(1).to({graphics:mask_graphics_43,x:-4.6,y:2.8}).wait(1).to({graphics:mask_graphics_44,x:-4.2,y:2.5}).wait(1).to({graphics:mask_graphics_45,x:-3.9,y:2.3}).wait(1).to({graphics:mask_graphics_46,x:-3.5,y:2}).wait(1).to({graphics:mask_graphics_47,x:-3.1,y:1.7}).wait(1).to({graphics:mask_graphics_48,x:-2.8,y:1.4}).wait(1).to({graphics:mask_graphics_49,x:-2.4,y:1.1}).wait(1).to({graphics:mask_graphics_50,x:-2,y:0.9}).wait(1).to({graphics:mask_graphics_51,x:-1.7,y:0.6}).wait(1).to({graphics:mask_graphics_52,x:-1.3,y:0.3}).wait(1).to({graphics:mask_graphics_53,x:-0.9,y:0}).wait(1).to({graphics:mask_graphics_54,x:-0.6,y:-0.2}).wait(1).to({graphics:mask_graphics_55,x:-0.2,y:-0.5}).wait(1).to({graphics:mask_graphics_56,x:0.2,y:-0.8}).wait(1).to({graphics:mask_graphics_57,x:0.5,y:-1.1}).wait(1).to({graphics:mask_graphics_58,x:0.9,y:-1.4}).wait(1).to({graphics:mask_graphics_59,x:1.3,y:-1.6}).wait(1).to({graphics:mask_graphics_60,x:1.6,y:-1.9}).wait(1).to({graphics:mask_graphics_61,x:2,y:-2.2}).wait(1).to({graphics:mask_graphics_62,x:2.4,y:-2.5}).wait(1).to({graphics:mask_graphics_63,x:2.8,y:-2.8}).wait(1).to({graphics:mask_graphics_64,x:3.1,y:-3.1}).wait(1).to({graphics:mask_graphics_65,x:3.5,y:-3.3}).wait(1).to({graphics:mask_graphics_66,x:3.9,y:-3.6}).wait(1).to({graphics:mask_graphics_67,x:4.2,y:-3.9}).wait(1).to({graphics:mask_graphics_68,x:4.6,y:-4.2}).wait(1).to({graphics:mask_graphics_69,x:5,y:-4.4}).wait(1).to({graphics:mask_graphics_70,x:5.3,y:-4.7}).wait(1).to({graphics:mask_graphics_71,x:5.7,y:-5}).wait(1).to({graphics:mask_graphics_72,x:6.1,y:-5.3}).wait(1).to({graphics:mask_graphics_73,x:6.4,y:-5.6}).wait(1).to({graphics:mask_graphics_74,x:6.8,y:-5.8}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AjVECQCxkHD7j9");
	this.shape.setTransform(6.4,-6.6,1,1,-167.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.1,5.1,17.7,19.5);


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
(lib.WS_Cursive_i = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_424 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(424).call(this.frame_424).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(168.6,315.3,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[168.8,315.5,201.8,281.7,227,246]}},65).wait(16).to({startPosition:0},0).to({guide:{path:[227.1,246.1,212.2,279.9,191.1,323.7,170.1,367.5,176.7,383.5,183.2,399.4,204.7,396.1,226.2,392.7,262.3,371.5,298.5,350.3,326.8,324.9,355.1,299.6,380.6,271.2]}},239).wait(16).to({x:253.7,y:163.8},0).wait(25).to({startPosition:0},0).to({guide:{path:[253.9,163.6,291.9,191.5,339,193,388.5,194.6,432.6,172,465.8,154.8,500.9,143.2,550.2,126.8,595.9,150,617.5,160.9,627.7,182.6]}},54).wait(1));

	// Layer 12
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(228,245.7,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},65).wait(16).to({_off:false,x:380,y:271.7},0).wait(239).to({x:255,y:164.7},0).to({_off:true},16).wait(80));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgQB8IgGgBIgHgBIgIgEIgKgDIgHgDIgIgFIgGgDIgGgEIgDgEIgFgDIgEgEIgDgEIgFgEIgCgDIgDgEIgDgEIgDgDIgCgFIgBgDIgDgEIgBgEIgBgDIgDgEIgBgEIgCgEIAAgDIgBgEIgBgEIAAgDIgBgFIAAgDIAAgEIAAgEIAAgDIgBgDIABgEIAAgEIAAgDIAAgEIABgEIAAgDIABgFIAAgDIABgEIACgEIABgDIACgEIABgEIACgEIABgDIADgEIACgEIADgDIADgFIACgDIADgEIADgEIAEgDIADgEIAFgEIAEgEIAGgDIAEgEIAIgEIAHgDIAJgEIAIgDIAEgBIAHgBIAGgBIARgBIAAgBIARACIAGABIAGABIAJACIAJAEIAJAEIAGADIAGAFIAFADIAGAEIAEAEIAEADIAEAEIACAEIAEAEIADADIACAEIACAEIADADIACAFIACADIABAEIADAEIABADIABAEIABAEIABAEIACADIAAAEIABAEIAAADIACAFIAAADIAAAEIAAAEIAAACIAAAEIAAAEIAAAEIAAADIgCAEIgBAEIAAADIgCAFIgBADIgBAEIgBAEIgBADIgCAEIgCAEIgCAEIgCADIgBAEIgDAEIgCADIgCAFIgFADIgCAEIgDAEIgFADIgEAEIgEAEIgGAEIgGADIgGAEIgHAEIgKADIgGADIgGACIgGABIgGABIgRABIgRgBg");
	this.shape_1.setTransform(254,164.1);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(345).to({_off:false},0).wait(80));

	// Layer 11
	this.instance_1 = new lib.ar6("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(295.4,272.8,1,1,20,0,0,-1.2,1.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90).to({_off:false},0).wait(335));

	// Layer 9 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_204 = new cjs.Graphics().p("ALATHIBhghIEOMuIhhAgg");
	var mask_graphics_205 = new cjs.Graphics().p("Ai/mDIBxgmIEOMuIhxAlg");
	var mask_graphics_206 = new cjs.Graphics().p("AjImBICCgqIEPMuIiCApg");
	var mask_graphics_207 = new cjs.Graphics().p("AjQl/ICSgvIEPMuIiSAvg");
	var mask_graphics_208 = new cjs.Graphics().p("AjZl9ICigzIERMuIiiAzg");
	var mask_graphics_209 = new cjs.Graphics().p("Ajhl7ICyg3IERMuIiyA3g");
	var mask_graphics_210 = new cjs.Graphics().p("Ajpl4IDBg9IESMvIjBA8g");
	var mask_graphics_211 = new cjs.Graphics().p("Ajyl2IDShBIETMuIjSBBg");
	var mask_graphics_212 = new cjs.Graphics().p("Aj6l0IDihGIETMvIjiBGg");
	var mask_graphics_213 = new cjs.Graphics().p("AkDlyIDyhKIEUMvIjyBKg");
	var mask_graphics_214 = new cjs.Graphics().p("AkLlwIEChOIEVMvIkCBPg");
	var mask_graphics_215 = new cjs.Graphics().p("AkUltIEThUIEWMwIkTBTg");
	var mask_graphics_216 = new cjs.Graphics().p("AkclsIEhhYIEYMwIkhBZg");
	var mask_graphics_217 = new cjs.Graphics().p("AkklpIExhdIEYMwIkxBdg");
	var mask_graphics_218 = new cjs.Graphics().p("AktlnIFChiIEZMxIlCBig");
	var mask_graphics_219 = new cjs.Graphics().p("Ak1llIFShmIEZMxIlRBmg");
	var mask_graphics_220 = new cjs.Graphics().p("Ak+ljIFihqIEaMxIlhBrg");
	var mask_graphics_221 = new cjs.Graphics().p("AlGlhIFyhvIEbMyIlyBvg");
	var mask_graphics_222 = new cjs.Graphics().p("AlPleIGCh0IEdMyImDB0g");
	var mask_graphics_223 = new cjs.Graphics().p("AlXlcIGTh5IEcMzImSB4g");
	var mask_graphics_224 = new cjs.Graphics().p("AlflaIGih9IEdMzImiB9g");
	var mask_graphics_225 = new cjs.Graphics().p("AlolYIGziCIEeMzImzCCg");
	var mask_graphics_226 = new cjs.Graphics().p("AlwlWIHCiGIEfMzInCCGg");
	var mask_graphics_227 = new cjs.Graphics().p("Al4lUIHSiLIEfM0InSCLg");
	var mask_graphics_228 = new cjs.Graphics().p("AmBlSIHjiPIEgM0InjCPg");
	var mask_graphics_229 = new cjs.Graphics().p("AmJlPIHyiVIEhM1InyCUg");
	var mask_graphics_230 = new cjs.Graphics().p("AmSlNIIDiZIEiM0IoDCZg");
	var mask_graphics_231 = new cjs.Graphics().p("AmalLIITidIEiM0IoTCeg");
	var mask_graphics_232 = new cjs.Graphics().p("AmjlJIIjiiIEkM1IokCig");
	var mask_graphics_233 = new cjs.Graphics().p("AmrlHIIzimIEkM1IozCng");
	var mask_graphics_234 = new cjs.Graphics().p("Am0lEIJEisIElM2IpECrg");
	var mask_graphics_235 = new cjs.Graphics().p("Am8lDIJTivIEmM1IpUCxg");
	var mask_graphics_236 = new cjs.Graphics().p("AnFlAIJki1IEnM2IpkC1g");
	var mask_graphics_237 = new cjs.Graphics().p("AnNk+IJ0i6IEnM3Ip0C6g");
	var mask_graphics_238 = new cjs.Graphics().p("AnWk8IKFi+IEoM3IqFC+g");
	var mask_graphics_239 = new cjs.Graphics().p("Anek6IKUjCIEpM3IqUDCg");
	var mask_graphics_240 = new cjs.Graphics().p("Annk3IKljIIEqM4IqlDHg");
	var mask_graphics_241 = new cjs.Graphics().p("Anvk1IK1jMIEqM4Iq1DLg");
	var mask_graphics_242 = new cjs.Graphics().p("An3kzILEjRIErM5IrFDQg");
	var mask_graphics_243 = new cjs.Graphics().p("AoAkxILVjVIEsM4IrVDVg");
	var mask_graphics_244 = new cjs.Graphics().p("AoIkvILljZIEsM4IrlDag");
	var mask_graphics_245 = new cjs.Graphics().p("AoRktIL1jeIEtM5Ir1Deg");
	var mask_graphics_246 = new cjs.Graphics().p("AoZkqIMFjjIEuM5IsGDjg");
	var mask_graphics_247 = new cjs.Graphics().p("AoikoIMVjoIEwM6IsWDng");
	var mask_graphics_248 = new cjs.Graphics().p("AoqkmIMljtIEwM6IslDtg");
	var mask_graphics_249 = new cjs.Graphics().p("AoykkIM1jxIEwM6Is1Dxg");
	var mask_graphics_250 = new cjs.Graphics().p("Ao7kiINGj1IExM6ItGD1g");
	var mask_graphics_251 = new cjs.Graphics().p("ApDkgINVj6IEyM7ItWD6g");
	var mask_graphics_252 = new cjs.Graphics().p("ApMkeINmj+IEyM7ItmD+g");
	var mask_graphics_253 = new cjs.Graphics().p("ApUkbIN1kEIE0M8It2EDg");
	var mask_graphics_254 = new cjs.Graphics().p("ApdkZIOHkIIE0M8IuHEHg");
	var mask_graphics_255 = new cjs.Graphics().p("AplkXIOWkNIE1M9IuXEMg");
	var mask_graphics_256 = new cjs.Graphics().p("AptkVIOmkRIE1M8IumERg");
	var mask_graphics_257 = new cjs.Graphics().p("Ap2kTIO2kWIE3M9Iu3EWg");
	var mask_graphics_258 = new cjs.Graphics().p("Ap+kRIPGkaIE3M9IvHEag");
	var mask_graphics_259 = new cjs.Graphics().p("AqGkOIPWkgIE3M+IvXEfg");
	var mask_graphics_260 = new cjs.Graphics().p("AqPkMIPmkkIE5M+IvnEjg");
	var mask_graphics_261 = new cjs.Graphics().p("AqXkKIP2koIE5M9Iv3Eog");
	var mask_graphics_262 = new cjs.Graphics().p("AqgkIIQHktIE6M+IwHEtg");
	var mask_graphics_263 = new cjs.Graphics().p("AqokFIQWkyIE7M+IwXExg");
	var mask_graphics_264 = new cjs.Graphics().p("ADKS1IQok2IE7NAIwoE2g");
	var mask_graphics_265 = new cjs.Graphics().p("Aq4kBIQ2k8IE7M/Iw2E8g");
	var mask_graphics_266 = new cjs.Graphics().p("Aq+j+IRDlCIE7NAIxFFAg");
	var mask_graphics_267 = new cjs.Graphics().p("ArGj7IRTlHIE6M/IxTFGg");
	var mask_graphics_268 = new cjs.Graphics().p("ArMj4IRglNIE5M/IxhFMg");
	var mask_graphics_269 = new cjs.Graphics().p("ArTj2IRvlSIE4M/IxvFSg");
	var mask_graphics_270 = new cjs.Graphics().p("Araj0IR9lXIE4NAIx9FXg");
	var mask_graphics_271 = new cjs.Graphics().p("ArhjwISMldIE3M/IyMFcg");
	var mask_graphics_272 = new cjs.Graphics().p("ArojuISaliIE3NAIybFhg");
	var mask_graphics_273 = new cjs.Graphics().p("ArvjrISploIE2NAIypFng");
	var mask_graphics_274 = new cjs.Graphics().p("Ar2jpIS3lsIE2M/Iy3Ftg");
	var mask_graphics_275 = new cjs.Graphics().p("Ar8jlITFl0IE1NAIzGFyg");
	var mask_graphics_276 = new cjs.Graphics().p("AsDjjITTl4IE0NAIzUF3g");
	var mask_graphics_277 = new cjs.Graphics().p("AsKjgITil+IEzNAIziF9g");
	var mask_graphics_278 = new cjs.Graphics().p("AsRjdITwmDIEzM/IzwGCg");
	var mask_graphics_279 = new cjs.Graphics().p("AsYjbIT+mIIEzM/Iz/GJg");
	var mask_graphics_280 = new cjs.Graphics().p("AsfjYIUNmOIEyM/I0NGOg");
	var mask_graphics_281 = new cjs.Graphics().p("AsmjVIUbmUIEyNAI0cGTg");
	var mask_graphics_282 = new cjs.Graphics().p("AstjTIUqmZIExNAI0qGZg");
	var mask_graphics_283 = new cjs.Graphics().p("AszjQIU3meIExM/I05Geg");
	var mask_graphics_284 = new cjs.Graphics().p("As7jNIVHmkIEwNAI1HGjg");
	var mask_graphics_285 = new cjs.Graphics().p("AtBjLIVUmpIEvNAI1VGpg");
	var mask_graphics_286 = new cjs.Graphics().p("AtIjIIVjmvIEuNBI1jGug");
	var mask_graphics_287 = new cjs.Graphics().p("AtPjFIVym0IEtM/I1yG0g");
	var mask_graphics_288 = new cjs.Graphics().p("AtWjDIWAm5IEtNAI2AG5g");
	var mask_graphics_289 = new cjs.Graphics().p("AtdjAIWOm/IEtNAI2PG/g");
	var mask_graphics_290 = new cjs.Graphics().p("Atki9IWdnFIEsNAI2dHEg");
	var mask_graphics_291 = new cjs.Graphics().p("Atri7IWsnJIErNAI2sHJg");
	var mask_graphics_292 = new cjs.Graphics().p("Atxi4IW5nPIErNAI26HPg");
	var mask_graphics_293 = new cjs.Graphics().p("At5i1IXJnVIEqNAI3JHVg");
	var mask_graphics_294 = new cjs.Graphics().p("At/izIXWnZIEpM/I3WHbg");
	var mask_graphics_295 = new cjs.Graphics().p("AuGiwIXknfIEpNAI3lHfg");
	var mask_graphics_296 = new cjs.Graphics().p("AuNitIXznlIEoNAI3zHlg");
	var mask_graphics_297 = new cjs.Graphics().p("AuUiqIYCnrIEnNBI4CHqg");
	var mask_graphics_298 = new cjs.Graphics().p("AubinIYQnwIEnNAI4QHwg");
	var mask_graphics_299 = new cjs.Graphics().p("AuiilIYen1IEnNAI4fH1g");
	var mask_graphics_300 = new cjs.Graphics().p("AuoiiIYrn7IEnNAI4tH7g");
	var mask_graphics_301 = new cjs.Graphics().p("AuvigIY6oAIEmNBI47IAg");
	var mask_graphics_302 = new cjs.Graphics().p("Au3idIZKoGIElNBI5KIGg");
	var mask_graphics_303 = new cjs.Graphics().p("Au9iaIZXoLIEkNAI5XILg");
	var mask_graphics_304 = new cjs.Graphics().p("AvEiXIZmoRIEjNBI5mIQg");
	var mask_graphics_305 = new cjs.Graphics().p("AvLiUIZ0oXIEjNBI50IWg");
	var mask_graphics_306 = new cjs.Graphics().p("AvSiSIaDocIEiNBI6DIcg");
	var mask_graphics_307 = new cjs.Graphics().p("AvZiPIaRohIEiNAI6RIhg");
	var mask_graphics_308 = new cjs.Graphics().p("AvgiMIagonIEhNAI6gIng");
	var mask_graphics_309 = new cjs.Graphics().p("AvmiKIatosIEhNBI6uIsg");
	var mask_graphics_310 = new cjs.Graphics().p("AvuiHIa9oyIEgNBI69Iyg");
	var mask_graphics_311 = new cjs.Graphics().p("Av0iFIbKo2IEfNBI7KI3g");
	var mask_graphics_312 = new cjs.Graphics().p("Av7iBIbZo9IEeNBI7ZI8g");
	var mask_graphics_313 = new cjs.Graphics().p("AwCh/IbnpCIEeNBI7nJCg");
	var mask_graphics_314 = new cjs.Graphics().p("AwJh8Ib2pIIEdNBI72JIg");
	var mask_graphics_315 = new cjs.Graphics().p("AwQh5IcFpOIEcNCI8EJMg");
	var mask_graphics_316 = new cjs.Graphics().p("AwXh3IcTpSIEcNBI8TJSg");
	var mask_graphics_317 = new cjs.Graphics().p("Aweh0IchpYIEcNCI8hJXg");
	var mask_graphics_318 = new cjs.Graphics().p("AwlhxIcvpeIEcNBI8wJeg");
	var mask_graphics_319 = new cjs.Graphics().p("AwshvIc+pjIEbNBI8+Jkg");
	var mask_graphics_320 = new cjs.Graphics().p("AwyhsIdMpoIEZNBI9MJog");
	var mask_graphics_321 = new cjs.Graphics().p("Aw5hpIdapuIEZNBI9aJug");
	var mask_graphics_322 = new cjs.Graphics().p("AxAhmIdop0IEZNCI9oJzg");
	var mask_graphics_323 = new cjs.Graphics().p("AxHhkId3p4IEYNBI93J5g");
	var mask_graphics_324 = new cjs.Graphics().p("AxOhhIeFp+IEYNBI+GJ+g");
	var mask_graphics_325 = new cjs.Graphics().p("AxVheIeUqEIEXNBI+UKEg");
	var mask_graphics_326 = new cjs.Graphics().p("AxbhcIehqJIEXNCI+iKJg");
	var mask_graphics_327 = new cjs.Graphics().p("AjvS+IewqOIEVNDI+xKOg");
	var mask_graphics_328 = new cjs.Graphics().p("AyFhPIf0qlIEWNEI/zKlg");
	var mask_graphics_329 = new cjs.Graphics().p("AkxS7MAg3gK7IEXNIMgg3AK7g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(204).to({graphics:mask_graphics_204,x:107.1,y:203.6}).wait(1).to({graphics:mask_graphics_205,x:196.7,y:364.7}).wait(1).to({graphics:mask_graphics_206,x:197.6,y:364.5}).wait(1).to({graphics:mask_graphics_207,x:198.4,y:364.2}).wait(1).to({graphics:mask_graphics_208,x:199.3,y:364}).wait(1).to({graphics:mask_graphics_209,x:200.1,y:363.7}).wait(1).to({graphics:mask_graphics_210,x:201,y:363.5}).wait(1).to({graphics:mask_graphics_211,x:201.8,y:363.2}).wait(1).to({graphics:mask_graphics_212,x:202.7,y:363}).wait(1).to({graphics:mask_graphics_213,x:203.6,y:362.8}).wait(1).to({graphics:mask_graphics_214,x:204.4,y:362.5}).wait(1).to({graphics:mask_graphics_215,x:205.3,y:362.3}).wait(1).to({graphics:mask_graphics_216,x:206.1,y:362}).wait(1).to({graphics:mask_graphics_217,x:207,y:361.8}).wait(1).to({graphics:mask_graphics_218,x:207.8,y:361.5}).wait(1).to({graphics:mask_graphics_219,x:208.7,y:361.3}).wait(1).to({graphics:mask_graphics_220,x:209.6,y:361.1}).wait(1).to({graphics:mask_graphics_221,x:210.4,y:360.8}).wait(1).to({graphics:mask_graphics_222,x:211.3,y:360.6}).wait(1).to({graphics:mask_graphics_223,x:212.1,y:360.3}).wait(1).to({graphics:mask_graphics_224,x:213,y:360.1}).wait(1).to({graphics:mask_graphics_225,x:213.8,y:359.8}).wait(1).to({graphics:mask_graphics_226,x:214.7,y:359.6}).wait(1).to({graphics:mask_graphics_227,x:215.6,y:359.3}).wait(1).to({graphics:mask_graphics_228,x:216.4,y:359.1}).wait(1).to({graphics:mask_graphics_229,x:217.3,y:358.8}).wait(1).to({graphics:mask_graphics_230,x:218.1,y:358.6}).wait(1).to({graphics:mask_graphics_231,x:219,y:358.4}).wait(1).to({graphics:mask_graphics_232,x:219.8,y:358.1}).wait(1).to({graphics:mask_graphics_233,x:220.7,y:357.9}).wait(1).to({graphics:mask_graphics_234,x:221.6,y:357.6}).wait(1).to({graphics:mask_graphics_235,x:222.4,y:357.4}).wait(1).to({graphics:mask_graphics_236,x:223.3,y:357.1}).wait(1).to({graphics:mask_graphics_237,x:224.1,y:356.9}).wait(1).to({graphics:mask_graphics_238,x:225,y:356.6}).wait(1).to({graphics:mask_graphics_239,x:225.9,y:356.4}).wait(1).to({graphics:mask_graphics_240,x:226.7,y:356.1}).wait(1).to({graphics:mask_graphics_241,x:227.6,y:355.9}).wait(1).to({graphics:mask_graphics_242,x:228.4,y:355.6}).wait(1).to({graphics:mask_graphics_243,x:229.3,y:355.4}).wait(1).to({graphics:mask_graphics_244,x:230.1,y:355.2}).wait(1).to({graphics:mask_graphics_245,x:231,y:354.9}).wait(1).to({graphics:mask_graphics_246,x:231.9,y:354.7}).wait(1).to({graphics:mask_graphics_247,x:232.7,y:354.4}).wait(1).to({graphics:mask_graphics_248,x:233.6,y:354.2}).wait(1).to({graphics:mask_graphics_249,x:234.4,y:354}).wait(1).to({graphics:mask_graphics_250,x:235.3,y:353.7}).wait(1).to({graphics:mask_graphics_251,x:236.1,y:353.5}).wait(1).to({graphics:mask_graphics_252,x:237,y:353.2}).wait(1).to({graphics:mask_graphics_253,x:237.9,y:353}).wait(1).to({graphics:mask_graphics_254,x:238.7,y:352.7}).wait(1).to({graphics:mask_graphics_255,x:239.6,y:352.5}).wait(1).to({graphics:mask_graphics_256,x:240.4,y:352.2}).wait(1).to({graphics:mask_graphics_257,x:241.3,y:352}).wait(1).to({graphics:mask_graphics_258,x:242.1,y:351.7}).wait(1).to({graphics:mask_graphics_259,x:243,y:351.5}).wait(1).to({graphics:mask_graphics_260,x:243.9,y:351.2}).wait(1).to({graphics:mask_graphics_261,x:244.7,y:351}).wait(1).to({graphics:mask_graphics_262,x:245.6,y:350.8}).wait(1).to({graphics:mask_graphics_263,x:246.4,y:350.5}).wait(1).to({graphics:mask_graphics_264,x:158.1,y:203.7}).wait(1).to({graphics:mask_graphics_265,x:247.9,y:350}).wait(1).to({graphics:mask_graphics_266,x:248.6,y:349.8}).wait(1).to({graphics:mask_graphics_267,x:249.3,y:349.5}).wait(1).to({graphics:mask_graphics_268,x:249.9,y:349.3}).wait(1).to({graphics:mask_graphics_269,x:250.6,y:349.1}).wait(1).to({graphics:mask_graphics_270,x:251.3,y:348.9}).wait(1).to({graphics:mask_graphics_271,x:251.9,y:348.6}).wait(1).to({graphics:mask_graphics_272,x:252.6,y:348.4}).wait(1).to({graphics:mask_graphics_273,x:253.2,y:348.1}).wait(1).to({graphics:mask_graphics_274,x:253.9,y:347.9}).wait(1).to({graphics:mask_graphics_275,x:254.6,y:347.7}).wait(1).to({graphics:mask_graphics_276,x:255.2,y:347.4}).wait(1).to({graphics:mask_graphics_277,x:255.9,y:347.2}).wait(1).to({graphics:mask_graphics_278,x:256.5,y:347}).wait(1).to({graphics:mask_graphics_279,x:257.2,y:346.7}).wait(1).to({graphics:mask_graphics_280,x:257.9,y:346.5}).wait(1).to({graphics:mask_graphics_281,x:258.5,y:346.2}).wait(1).to({graphics:mask_graphics_282,x:259.2,y:346}).wait(1).to({graphics:mask_graphics_283,x:259.9,y:345.8}).wait(1).to({graphics:mask_graphics_284,x:260.5,y:345.5}).wait(1).to({graphics:mask_graphics_285,x:261.2,y:345.3}).wait(1).to({graphics:mask_graphics_286,x:261.8,y:345.1}).wait(1).to({graphics:mask_graphics_287,x:262.5,y:344.8}).wait(1).to({graphics:mask_graphics_288,x:263.2,y:344.6}).wait(1).to({graphics:mask_graphics_289,x:263.8,y:344.3}).wait(1).to({graphics:mask_graphics_290,x:264.5,y:344.1}).wait(1).to({graphics:mask_graphics_291,x:265.1,y:343.9}).wait(1).to({graphics:mask_graphics_292,x:265.8,y:343.6}).wait(1).to({graphics:mask_graphics_293,x:266.5,y:343.4}).wait(1).to({graphics:mask_graphics_294,x:267.1,y:343.2}).wait(1).to({graphics:mask_graphics_295,x:267.8,y:342.9}).wait(1).to({graphics:mask_graphics_296,x:268.5,y:342.7}).wait(1).to({graphics:mask_graphics_297,x:269.1,y:342.5}).wait(1).to({graphics:mask_graphics_298,x:269.8,y:342.2}).wait(1).to({graphics:mask_graphics_299,x:270.4,y:342}).wait(1).to({graphics:mask_graphics_300,x:271.1,y:341.7}).wait(1).to({graphics:mask_graphics_301,x:271.8,y:341.5}).wait(1).to({graphics:mask_graphics_302,x:272.4,y:341.3}).wait(1).to({graphics:mask_graphics_303,x:273.1,y:341}).wait(1).to({graphics:mask_graphics_304,x:273.7,y:340.8}).wait(1).to({graphics:mask_graphics_305,x:274.4,y:340.6}).wait(1).to({graphics:mask_graphics_306,x:275.1,y:340.3}).wait(1).to({graphics:mask_graphics_307,x:275.7,y:340.1}).wait(1).to({graphics:mask_graphics_308,x:276.4,y:339.9}).wait(1).to({graphics:mask_graphics_309,x:277.1,y:339.6}).wait(1).to({graphics:mask_graphics_310,x:277.7,y:339.4}).wait(1).to({graphics:mask_graphics_311,x:278.4,y:339.2}).wait(1).to({graphics:mask_graphics_312,x:279,y:338.9}).wait(1).to({graphics:mask_graphics_313,x:279.7,y:338.7}).wait(1).to({graphics:mask_graphics_314,x:280.4,y:338.4}).wait(1).to({graphics:mask_graphics_315,x:281,y:338.2}).wait(1).to({graphics:mask_graphics_316,x:281.7,y:338}).wait(1).to({graphics:mask_graphics_317,x:282.3,y:337.7}).wait(1).to({graphics:mask_graphics_318,x:283,y:337.5}).wait(1).to({graphics:mask_graphics_319,x:283.7,y:337.3}).wait(1).to({graphics:mask_graphics_320,x:284.3,y:337}).wait(1).to({graphics:mask_graphics_321,x:285,y:336.8}).wait(1).to({graphics:mask_graphics_322,x:285.7,y:336.5}).wait(1).to({graphics:mask_graphics_323,x:286.3,y:336.3}).wait(1).to({graphics:mask_graphics_324,x:287,y:336.1}).wait(1).to({graphics:mask_graphics_325,x:287.6,y:335.8}).wait(1).to({graphics:mask_graphics_326,x:288.3,y:335.6}).wait(1).to({graphics:mask_graphics_327,x:200.6,y:204.9}).wait(1).to({graphics:mask_graphics_328,x:292.6,y:334.3}).wait(1).to({graphics:mask_graphics_329,x:207.7,y:205.1}).wait(96));

	// Layer 8
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(20,1,1).p("AnqrcQiKFFjeGrQjeGsAuCZQAvCZEUgYQEUgXGGj8QGEj8DWjQQDWjQEAkJ");
	this.shape_2.setTransform(277,318.9);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(204).to({_off:false},0).wait(221));

	// Layer 7 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_167 = new cjs.Graphics().p("Ao6PZQD0mPHGh2QHSh3GdD0QGeD1B4HRQB1HIjoGWg");
	var mask_1_graphics_168 = new cjs.Graphics().p("ApfQ8QDameG+iTQHIiVGtDZQGsDZCWHIQCSHAjNGkg");
	var mask_1_graphics_169 = new cjs.Graphics().p("Ap/SiQC+mrG0iwQG+iyG5C9QG6C9CyG9QCvG1ixGxg");
	var mask_1_graphics_170 = new cjs.Graphics().p("AqbULQCim3GojLQGxjPHFCgQHFCgDPGxQDLGpiVG7g");
	var mask_1_graphics_171 = new cjs.Graphics().p("AqyV2QCGnAGajmQGijrHOCDQHPCCDqGjQDmGbh4HDg");
	var mask_1_graphics_172 = new cjs.Graphics().p("ArEXjQBonHGLkAQGSkFHVBkQHWBkEFGTQEAGKhbHLg");
	var mask_1_graphics_173 = new cjs.Graphics().p("ArRZSQBKnNF5kZQGBkfHbBGQHbBFEeGBQEZF6g8HPg");
	var mask_1_graphics_174 = new cjs.Graphics().p("ArabCQAtnRFmkxQFtk3HeAnQHfAnE3FtQExFngfHSg");
	var mask_1_graphics_175 = new cjs.Graphics().p("ArecyQAPnTFRlHQFZlOHfAIQHgAIFOFYQFIFSgBHUg");
	var mask_1_graphics_176 = new cjs.Graphics().p("AmwQ7QFDljHegYQHggXFjFCQFdE8AdHTMgkKABxQgQnTE8ldg");
	var mask_1_graphics_177 = new cjs.Graphics().p("AncRPQErl3Hcg3QHdg2F3EqQFwElA8HQMgj9AEGQgunREklwg");
	var mask_1_graphics_178 = new cjs.Graphics().p("AoCRmQESmKHYhVQHYhVGKESQGCEMBaHLMgjoAGaQhMnNEMmCg");
	var mask_1_graphics_179 = new cjs.Graphics().p("AoiSAQD5mbHQhzQHSh0GbD4QGTDzB3HEMgjIAItQhqnHDymTg");
	var mask_1_graphics_180 = new cjs.Graphics().p("Ao7SdQDdmqHJiRQHJiRGqDcQGiDYCTG8MgifAK9QiGm/DXmig");
	var mask_1_graphics_181 = new cjs.Graphics().p("ApNS9QDBm3G+ivQG/iuG3DAQGvC9CwGxMghtANKQijm1C8mvg");
	var mask_1_graphics_182 = new cjs.Graphics().p("ApZTgQCknDGzjLQGyjLHCCkQG6CgDMGkMggxAPVQjAmqCgm6g");
	var mask_1_graphics_183 = new cjs.Graphics().p("ApeUGQCHnNGkjnQGkjmHMCGQHECDDmGWI/tRaQjbmcCDnDg");
	var mask_1_graphics_184 = new cjs.Graphics().p("ApcUtQBonUGVkBQGUkCHUBoQHLBmEAGHI+hTbQj1mOBmnLg");
	var mask_1_graphics_185 = new cjs.Graphics().p("ApUVXQBKnZGEkcQGCkbHZBKQHRBIEZF1I9NVXQkOl9BInRg");
	var mask_1_graphics_186 = new cjs.Graphics().p("ApFWDQArneFxkzQFvk0HdArQHUAqExFiI7wXNQkmlrApnUg");
	var mask_1_graphics_187 = new cjs.Graphics().p("AosW3QAIngFZlNQFYlOHfAJQHWAHFKFLI6AZKQlAlUAInWg");
	var mask_1_graphics_188 = new cjs.Graphics().p("AoLXtQgbnfFAlmQE/llHegbQHWgaFgEyI4Ga+QlYk8ganVg");
	var mask_1_graphics_189 = new cjs.Graphics().p("AnjYlQg9ncEll8QEkl8Hcg9QHSg9F2EYI2GcqQltkig9nSg");
	var mask_1_graphics_190 = new cjs.Graphics().p("AmyZeQhfnWEImQQEJmRHVhfQHNheGJD8Iz+eMQmBkIhenMg");
	var mask_1_graphics_191 = new cjs.Graphics().p("Al6aZQiBnODrmjQDrmiHNiCQHEh/GbDfIxufkQmTjriAnEg");
	var mask_1_graphics_192 = new cjs.Graphics().p("Ak6bUQijnDDNmzQDMmyHCijQG6ifGqDAMgPZAgxQmjjNigm6g");
	var mask_1_graphics_193 = new cjs.Graphics().p("AjzcRQjDm3CsnAQCsnAG1jDQGtjAG3ChMgM+Ah0Qmxiui/mtg");
	var mask_1_graphics_194 = new cjs.Graphics().p("AimdNQjimnCLnLQCLnMGljiQGfjeHBCAMgKfAiqQm9iOjdmeg");
	var mask_1_graphics_195 = new cjs.Graphics().p("AhTeKQkAmWBpnUQBpnVGVkAQGNj8HKBgMgH9AjVQnGhtj7mNg");
	var mask_1_graphics_196 = new cjs.Graphics().p("AAFfGQkcmCBHnbQBHnbGBkdQF6kXHPA+MgFXAj0QnNhMkYl6g");
	var mask_1_graphics_197 = new cjs.Graphics().p("EABkAgCQk4lsAlnfQAknfFrk5QFlkyHSAdMgCvAkHQnSgqkyllg");
	var mask_1_graphics_198 = new cjs.Graphics().p("EADHAg9QlRlVABngQACngFTlTQFOlLHTgFMgAHAkOQnUgJlLlNg");
	var mask_1_graphics_199 = new cjs.Graphics().p("EADeAh1Qlpk7ghnfQginfE6lqQE1ljHSgnMAChAkIQgkACgjAAQmnAAlIkdg");
	var mask_1_graphics_200 = new cjs.Graphics().p("EAD1AipQl/kghDncQhEnbEfmAQEal4HOhJMAFIAj3QhRAKhOAAQlzAAk3jpg");
	var mask_1_graphics_201 = new cjs.Graphics().p("EAERAjYQmTkEhmnVQhnnVEEmUQD9mMHHhqMAHuAjZQh7AZh2AAQlDAAkii6g");
	var mask_1_graphics_202 = new cjs.Graphics().p("EAEwAkCQmljmiInMQiInNDmmmQDgmdG+iLMAKRAiwQiiAtidAAQkYAAkJiQg");
	var mask_1_graphics_203 = new cjs.Graphics().p("EAFTAknQm0jHipnCQipnBDGm1QDCmtGyirMAMxAh6QjGBIjDAAQjwAAjshrg");
	var mask_1_graphics_204 = new cjs.Graphics().p("EAF6AlGQnBimjKm0QjJm1CmnCQCjm6GkjKMAPMAg6QjmBmjrAAQjIAAjMhLg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(167).to({graphics:mask_1_graphics_167,x:158,y:216.5}).wait(1).to({graphics:mask_1_graphics_168,x:158.1,y:213.2}).wait(1).to({graphics:mask_1_graphics_169,x:158.1,y:209.8}).wait(1).to({graphics:mask_1_graphics_170,x:158.2,y:206.3}).wait(1).to({graphics:mask_1_graphics_171,x:158.2,y:202.7}).wait(1).to({graphics:mask_1_graphics_172,x:158.2,y:199.1}).wait(1).to({graphics:mask_1_graphics_173,x:158.2,y:195.4}).wait(1).to({graphics:mask_1_graphics_174,x:158.3,y:191.7}).wait(1).to({graphics:mask_1_graphics_175,x:158.3,y:188}).wait(1).to({graphics:mask_1_graphics_176,x:158.2,y:189.9}).wait(1).to({graphics:mask_1_graphics_177,x:157.9,y:193.6}).wait(1).to({graphics:mask_1_graphics_178,x:157.4,y:197.3}).wait(1).to({graphics:mask_1_graphics_179,x:156.6,y:201}).wait(1).to({graphics:mask_1_graphics_180,x:155.5,y:204.6}).wait(1).to({graphics:mask_1_graphics_181,x:154.3,y:208.1}).wait(1).to({graphics:mask_1_graphics_182,x:152.8,y:211.6}).wait(1).to({graphics:mask_1_graphics_183,x:151.1,y:214.9}).wait(1).to({graphics:mask_1_graphics_184,x:149.2,y:218.2}).wait(1).to({graphics:mask_1_graphics_185,x:147.1,y:221.3}).wait(1).to({graphics:mask_1_graphics_186,x:144.8,y:224.2}).wait(1).to({graphics:mask_1_graphics_187,x:142,y:227.3}).wait(1).to({graphics:mask_1_graphics_188,x:138.9,y:230.2}).wait(1).to({graphics:mask_1_graphics_189,x:135.7,y:232.9}).wait(1).to({graphics:mask_1_graphics_190,x:132.3,y:235.4}).wait(1).to({graphics:mask_1_graphics_191,x:128.7,y:237.6}).wait(1).to({graphics:mask_1_graphics_192,x:125,y:239.5}).wait(1).to({graphics:mask_1_graphics_193,x:121.1,y:241.2}).wait(1).to({graphics:mask_1_graphics_194,x:117.1,y:242.5}).wait(1).to({graphics:mask_1_graphics_195,x:113.1,y:243.6}).wait(1).to({graphics:mask_1_graphics_196,x:108.9,y:244.4}).wait(1).to({graphics:mask_1_graphics_197,x:104.7,y:244.9}).wait(1).to({graphics:mask_1_graphics_198,x:100.5,y:245.1}).wait(1).to({graphics:mask_1_graphics_199,x:104.4,y:245}).wait(1).to({graphics:mask_1_graphics_200,x:108.6,y:245}).wait(1).to({graphics:mask_1_graphics_201,x:112.7,y:245}).wait(1).to({graphics:mask_1_graphics_202,x:116.8,y:245}).wait(1).to({graphics:mask_1_graphics_203,x:120.8,y:245}).wait(1).to({graphics:mask_1_graphics_204,x:124.7,y:244.9}).wait(221));

	// Layer 6
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(20,1,1).p("AEQrcQiLFFjcGrQjeGsAuCZQAvCZETgYQANgBANgC");
	this.shape_3.setTransform(200.8,318.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(20,1,1).p("AnOrcQiLFFjeGrQjdGsAuCZQAuCZEUgYQEVgXGFj8QGFj8DVjQQDWjQDJjQ");
	this.shape_4.setTransform(274.3,318.9);

	var maskedShapeInstanceList = [this.shape_3,this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3}]},167).to({state:[{t:this.shape_4}]},18).wait(240));

	// Layer 5 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_90 = new cjs.Graphics().p("ANVRSIA9h6IFdCwIg9B5g");
	var mask_2_graphics_91 = new cjs.Graphics().p("AjPgSIBEiJIFbCuIhECJg");
	var mask_2_graphics_92 = new cjs.Graphics().p("AjTgLIBMiXIFbCuIhMCXg");
	var mask_2_graphics_93 = new cjs.Graphics().p("AjXgEIBTilIFbCuIhSClg");
	var mask_2_graphics_94 = new cjs.Graphics().p("AjaACIBaiyIFbCvIhaCyg");
	var mask_2_graphics_95 = new cjs.Graphics().p("AjeAKIBhjCIFcCwIhhDAg");
	var mask_2_graphics_96 = new cjs.Graphics().p("AjhARIBojQIFbCvIhoDQg");
	var mask_2_graphics_97 = new cjs.Graphics().p("AjlAYIBwjeIFbCvIhwDeg");
	var mask_2_graphics_98 = new cjs.Graphics().p("AjpAfIB3jsIFcCvIh3Dsg");
	var mask_2_graphics_99 = new cjs.Graphics().p("AjsAmIB+j6IFbCvIh+D6g");
	var mask_2_graphics_100 = new cjs.Graphics().p("AjwAuICGkKIFbCwIiFEIg");
	var mask_2_graphics_101 = new cjs.Graphics().p("AjzA0ICMkXIFbCwIiMEXg");
	var mask_2_graphics_102 = new cjs.Graphics().p("Aj3A8ICUkmIFbCvIiUEmg");
	var mask_2_graphics_103 = new cjs.Graphics().p("Aj7BDICbk0IFcCvIibE0g");
	var mask_2_graphics_104 = new cjs.Graphics().p("Aj/BKICjlCIFbCvIiiFCg");
	var mask_2_graphics_105 = new cjs.Graphics().p("AkCBSICqlSIFbCwIipFQg");
	var mask_2_graphics_106 = new cjs.Graphics().p("AkFBYICwlfIFbCwIiwFfg");
	var mask_2_graphics_107 = new cjs.Graphics().p("AkJBgIC4luIFbCvIi4Fug");
	var mask_2_graphics_108 = new cjs.Graphics().p("AkNBnIC/l8IFcCvIi/F8g");
	var mask_2_graphics_109 = new cjs.Graphics().p("AkRBuIDHmKIFbCvIjGGKg");
	var mask_2_graphics_110 = new cjs.Graphics().p("AkUB1IDOmYIFbCvIjNGYg");
	var mask_2_graphics_111 = new cjs.Graphics().p("AkYB8IDVmmIFcCvIjVGmg");
	var mask_2_graphics_112 = new cjs.Graphics().p("AkbCDIDcm0IFbCuIjcG2g");
	var mask_2_graphics_113 = new cjs.Graphics().p("AkfCLIDknEIFbCvIjkHEg");
	var mask_2_graphics_114 = new cjs.Graphics().p("AkjCSIDrnSIFbCvIjqHSg");
	var mask_2_graphics_115 = new cjs.Graphics().p("AkmCZIDyngIFbCvIjyHgg");
	var mask_2_graphics_116 = new cjs.Graphics().p("AkqCgID5nuIFcCvIj5Hug");
	var mask_2_graphics_117 = new cjs.Graphics().p("AktCnIEAn8IFbCuIkAH+g");
	var mask_2_graphics_118 = new cjs.Graphics().p("AkxCuIEIoKIFbCuIkIILg");
	var mask_2_graphics_119 = new cjs.Graphics().p("Ak1C2IEPoaIFcCvIkPIag");
	var mask_2_graphics_120 = new cjs.Graphics().p("Ak4C9IEWooIFbCvIkWIog");
	var mask_2_graphics_121 = new cjs.Graphics().p("Ak8DEIEdo2IFcCvIkdI2g");
	var mask_2_graphics_122 = new cjs.Graphics().p("Ak/DLIEkpEIFbCuIkkJGg");
	var mask_2_graphics_123 = new cjs.Graphics().p("AlDDSIEspSIFbCuIksJTg");
	var mask_2_graphics_124 = new cjs.Graphics().p("AlHDaIEzpiIFcCvIkzJig");
	var mask_2_graphics_125 = new cjs.Graphics().p("AlKDhIE6pwIFbCvIk6Jwg");
	var mask_2_graphics_126 = new cjs.Graphics().p("AlODoIFCp+IFbCvIlBJ+g");
	var mask_2_graphics_127 = new cjs.Graphics().p("AlRDvIFIqMIFbCvIlIKMg");
	var mask_2_graphics_128 = new cjs.Graphics().p("AlVD2IFQqaIFbCuIlQKbg");
	var mask_2_graphics_129 = new cjs.Graphics().p("AlZD+IFXqqIFcCvIlXKqg");
	var mask_2_graphics_130 = new cjs.Graphics().p("AldEFIFeq4IFcCvIldK4g");
	var mask_2_graphics_131 = new cjs.Graphics().p("AlgEMIFlrGIFcCvIlkLGg");
	var mask_2_graphics_132 = new cjs.Graphics().p("AlkETIFsrUIFdCvIlsLUg");
	var mask_2_graphics_133 = new cjs.Graphics().p("AlnEbIFzrjIFcCuIlzLjg");
	var mask_2_graphics_134 = new cjs.Graphics().p("AlrEiIF7ryIFcCvIl7Lyg");
	var mask_2_graphics_135 = new cjs.Graphics().p("AlvEpIGCsAIFcCvImBMAg");
	var mask_2_graphics_136 = new cjs.Graphics().p("AlyEwIGJsOIFcCvImJMOg");
	var mask_2_graphics_137 = new cjs.Graphics().p("Al2E3IGQscIFdCvImQMcg");
	var mask_2_graphics_138 = new cjs.Graphics().p("Al5E+IGXsqIFcCuImXMrg");
	var mask_2_graphics_139 = new cjs.Graphics().p("Al9FGIGfs6IFcCvImfM6g");
	var mask_2_graphics_140 = new cjs.Graphics().p("AmBFNIGmtIIFcCvImlNIg");
	var mask_2_graphics_141 = new cjs.Graphics().p("AmEFUIGttWIFcCvImtNWg");
	var mask_2_graphics_142 = new cjs.Graphics().p("AmIFbIG0tkIFdCvIm0Nkg");
	var mask_2_graphics_143 = new cjs.Graphics().p("AmMFiIG8tyIFcCuIm7Nzg");
	var mask_2_graphics_144 = new cjs.Graphics().p("AmPFqIHDuBIFcCuInDOBg");
	var mask_2_graphics_145 = new cjs.Graphics().p("AmTFxIHKuQIFdCvInKOQg");
	var mask_2_graphics_146 = new cjs.Graphics().p("AmWF4IHRueIFcCvInROeg");
	var mask_2_graphics_147 = new cjs.Graphics().p("AmaF/IHZusIFcCvInZOsg");
	var mask_2_graphics_148 = new cjs.Graphics().p("AmeGGIHgu6IFcCvInfO6g");
	var mask_2_graphics_149 = new cjs.Graphics().p("AmhGNIHnvIIFcCvInnPIg");
	var mask_2_graphics_150 = new cjs.Graphics().p("AmlGVIHuvYIFdCwInuPWg");
	var mask_2_graphics_151 = new cjs.Graphics().p("AmoGcIH1vmIFcCvIn1Pmg");
	var mask_2_graphics_152 = new cjs.Graphics().p("AmsGjIH9v0IFcCvIn9P0g");
	var mask_2_graphics_153 = new cjs.Graphics().p("AmvGqIIDwCIFcCvIoDQCg");
	var mask_2_graphics_154 = new cjs.Graphics().p("AmzGxIILwQIFcCvIoLQQg");
	var mask_2_graphics_155 = new cjs.Graphics().p("Am3G5IISwgIFdCwIoSQeg");
	var mask_2_graphics_156 = new cjs.Graphics().p("Am6HAIIZwuIFcCvIoZQug");
	var mask_2_graphics_157 = new cjs.Graphics().p("Am+HHIIhw8IFcCvIohQ8g");
	var mask_2_graphics_158 = new cjs.Graphics().p("AnCHOIIoxKIFdCvIooRKg");
	var mask_2_graphics_159 = new cjs.Graphics().p("AnFHVIIvxYIFcCvIovRYg");
	var mask_2_graphics_160 = new cjs.Graphics().p("AnJHdII3xoIFcCwIo2Rmg");
	var mask_2_graphics_161 = new cjs.Graphics().p("AnMHjII9x1IFcCwIo9R1g");
	var mask_2_graphics_162 = new cjs.Graphics().p("AnQHrIJFyEIFcCvIpFSEg");
	var mask_2_graphics_163 = new cjs.Graphics().p("AnUHyIJMySIFdCvIpMSSg");
	var mask_2_graphics_164 = new cjs.Graphics().p("AnYH5IJUygIFcCvIpTSgg");
	var mask_2_graphics_165 = new cjs.Graphics().p("AnbIAIJbyuIFcCvIpaSug");
	var mask_2_graphics_166 = new cjs.Graphics().p("AnfIHIJiy9IFdCwIpiS9g");
	var mask_2_graphics_167 = new cjs.Graphics().p("AEpZ8IJpzNIFdCwIpqTMg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(90).to({graphics:mask_2_graphics_90,x:126.3,y:128.1}).wait(1).to({graphics:mask_2_graphics_91,x:231.7,y:242.1}).wait(1).to({graphics:mask_2_graphics_92,x:231.4,y:242.9}).wait(1).to({graphics:mask_2_graphics_93,x:231,y:243.6}).wait(1).to({graphics:mask_2_graphics_94,x:230.6,y:244.3}).wait(1).to({graphics:mask_2_graphics_95,x:230.3,y:245}).wait(1).to({graphics:mask_2_graphics_96,x:229.9,y:245.7}).wait(1).to({graphics:mask_2_graphics_97,x:229.6,y:246.4}).wait(1).to({graphics:mask_2_graphics_98,x:229.2,y:247.2}).wait(1).to({graphics:mask_2_graphics_99,x:228.8,y:247.9}).wait(1).to({graphics:mask_2_graphics_100,x:228.5,y:248.6}).wait(1).to({graphics:mask_2_graphics_101,x:228.1,y:249.3}).wait(1).to({graphics:mask_2_graphics_102,x:227.7,y:250}).wait(1).to({graphics:mask_2_graphics_103,x:227.4,y:250.8}).wait(1).to({graphics:mask_2_graphics_104,x:227,y:251.5}).wait(1).to({graphics:mask_2_graphics_105,x:226.7,y:252.2}).wait(1).to({graphics:mask_2_graphics_106,x:226.3,y:252.9}).wait(1).to({graphics:mask_2_graphics_107,x:225.9,y:253.6}).wait(1).to({graphics:mask_2_graphics_108,x:225.6,y:254.4}).wait(1).to({graphics:mask_2_graphics_109,x:225.2,y:255.1}).wait(1).to({graphics:mask_2_graphics_110,x:224.9,y:255.8}).wait(1).to({graphics:mask_2_graphics_111,x:224.5,y:256.5}).wait(1).to({graphics:mask_2_graphics_112,x:224.1,y:257.3}).wait(1).to({graphics:mask_2_graphics_113,x:223.8,y:258}).wait(1).to({graphics:mask_2_graphics_114,x:223.4,y:258.7}).wait(1).to({graphics:mask_2_graphics_115,x:223,y:259.4}).wait(1).to({graphics:mask_2_graphics_116,x:222.7,y:260.1}).wait(1).to({graphics:mask_2_graphics_117,x:222.3,y:260.9}).wait(1).to({graphics:mask_2_graphics_118,x:222,y:261.6}).wait(1).to({graphics:mask_2_graphics_119,x:221.6,y:262.3}).wait(1).to({graphics:mask_2_graphics_120,x:221.2,y:263}).wait(1).to({graphics:mask_2_graphics_121,x:220.9,y:263.7}).wait(1).to({graphics:mask_2_graphics_122,x:220.5,y:264.5}).wait(1).to({graphics:mask_2_graphics_123,x:220.2,y:265.2}).wait(1).to({graphics:mask_2_graphics_124,x:219.8,y:265.9}).wait(1).to({graphics:mask_2_graphics_125,x:219.4,y:266.6}).wait(1).to({graphics:mask_2_graphics_126,x:219.1,y:267.3}).wait(1).to({graphics:mask_2_graphics_127,x:218.7,y:268}).wait(1).to({graphics:mask_2_graphics_128,x:218.3,y:268.8}).wait(1).to({graphics:mask_2_graphics_129,x:218,y:269.5}).wait(1).to({graphics:mask_2_graphics_130,x:217.6,y:270.2}).wait(1).to({graphics:mask_2_graphics_131,x:217.3,y:270.9}).wait(1).to({graphics:mask_2_graphics_132,x:216.9,y:271.6}).wait(1).to({graphics:mask_2_graphics_133,x:216.5,y:272.4}).wait(1).to({graphics:mask_2_graphics_134,x:216.2,y:273.1}).wait(1).to({graphics:mask_2_graphics_135,x:215.8,y:273.8}).wait(1).to({graphics:mask_2_graphics_136,x:215.4,y:274.5}).wait(1).to({graphics:mask_2_graphics_137,x:215.1,y:275.2}).wait(1).to({graphics:mask_2_graphics_138,x:214.7,y:276}).wait(1).to({graphics:mask_2_graphics_139,x:214.4,y:276.7}).wait(1).to({graphics:mask_2_graphics_140,x:214,y:277.4}).wait(1).to({graphics:mask_2_graphics_141,x:213.6,y:278.1}).wait(1).to({graphics:mask_2_graphics_142,x:213.3,y:278.8}).wait(1).to({graphics:mask_2_graphics_143,x:212.9,y:279.6}).wait(1).to({graphics:mask_2_graphics_144,x:212.6,y:280.3}).wait(1).to({graphics:mask_2_graphics_145,x:212.2,y:281}).wait(1).to({graphics:mask_2_graphics_146,x:211.8,y:281.7}).wait(1).to({graphics:mask_2_graphics_147,x:211.5,y:282.4}).wait(1).to({graphics:mask_2_graphics_148,x:211.1,y:283.2}).wait(1).to({graphics:mask_2_graphics_149,x:210.7,y:283.9}).wait(1).to({graphics:mask_2_graphics_150,x:210.4,y:284.6}).wait(1).to({graphics:mask_2_graphics_151,x:210,y:285.3}).wait(1).to({graphics:mask_2_graphics_152,x:209.7,y:286}).wait(1).to({graphics:mask_2_graphics_153,x:209.3,y:286.8}).wait(1).to({graphics:mask_2_graphics_154,x:208.9,y:287.5}).wait(1).to({graphics:mask_2_graphics_155,x:208.6,y:288.2}).wait(1).to({graphics:mask_2_graphics_156,x:208.2,y:288.9}).wait(1).to({graphics:mask_2_graphics_157,x:207.9,y:289.6}).wait(1).to({graphics:mask_2_graphics_158,x:207.5,y:290.4}).wait(1).to({graphics:mask_2_graphics_159,x:207.1,y:291.1}).wait(1).to({graphics:mask_2_graphics_160,x:206.8,y:291.8}).wait(1).to({graphics:mask_2_graphics_161,x:206.4,y:292.5}).wait(1).to({graphics:mask_2_graphics_162,x:206,y:293.2}).wait(1).to({graphics:mask_2_graphics_163,x:205.7,y:294}).wait(1).to({graphics:mask_2_graphics_164,x:205.3,y:294.7}).wait(1).to({graphics:mask_2_graphics_165,x:205,y:295.4}).wait(1).to({graphics:mask_2_graphics_166,x:204.6,y:296.1}).wait(1).to({graphics:mask_2_graphics_167,x:126.3,y:183.5}).wait(258));

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(20,1,1).p("AnOrcQiLFFjeGrQjdGsAuCZQAuCZEUgYQEVgXGFj8QGFj8DVjQQDWjQDJjQ");
	this.shape_5.setTransform(274.3,318.9);
	this.shape_5._off = true;

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(90).to({_off:false},0).wait(335));

	// Layer 10
	this.instance_2 = new lib.ar1("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(119.1,228.6,1,1,-3.7,0,0,-0.7,0.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(416));

	// Layer 4 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_9 = new cjs.Graphics().p("AIFWOIBUhiIE7EOIhUBig");
	var mask_3_graphics_10 = new cjs.Graphics().p("AjLhRIBehsIE5EOIhdBsg");
	var mask_3_graphics_11 = new cjs.Graphics().p("AjQhLIBoh3IE5ENIhmB4g");
	var mask_3_graphics_12 = new cjs.Graphics().p("AjVhGIByiBIE5ENIhvCCg");
	var mask_3_graphics_13 = new cjs.Graphics().p("AjahBIB8iMIE5EMIh5CPg");
	var mask_3_graphics_14 = new cjs.Graphics().p("Ajeg8ICGiXIE3ENIiBCZg");
	var mask_3_graphics_15 = new cjs.Graphics().p("Ajjg2ICQiiIE3EMIiKClg");
	var mask_3_graphics_16 = new cjs.Graphics().p("AjogyICairIE3EMIiUCvg");
	var mask_3_graphics_17 = new cjs.Graphics().p("AjtgsICli3IE2EMIidC7g");
	var mask_3_graphics_18 = new cjs.Graphics().p("AjygnICvjCIE1EMIilDHg");
	var mask_3_graphics_19 = new cjs.Graphics().p("Aj2giIC4jMIE1ELIiuDSg");
	var mask_3_graphics_20 = new cjs.Graphics().p("Aj7gdIDCjXIE1EMIi4Ddg");
	var mask_3_graphics_21 = new cjs.Graphics().p("AkAgYIDNjhIE0ELIjBDog");
	var mask_3_graphics_22 = new cjs.Graphics().p("AkFgSIDXjtIEzELIjJD0g");
	var mask_3_graphics_23 = new cjs.Graphics().p("AkJgNIDgj3IEzELIjSD+g");
	var mask_3_graphics_24 = new cjs.Graphics().p("AkOgIIDrkCIEyELIjbEKg");
	var mask_3_graphics_25 = new cjs.Graphics().p("AkTgDID0kMIEzELIjmEUg");
	var mask_3_graphics_26 = new cjs.Graphics().p("AkXABID+kWIExELIjuEgg");
	var mask_3_graphics_27 = new cjs.Graphics().p("AkcAGIEIkgIExELIj3Eqg");
	var mask_3_graphics_28 = new cjs.Graphics().p("AkhALIESkrIExELIkBE2g");
	var mask_3_graphics_29 = new cjs.Graphics().p("AkmAQIEck1IExEKIkKFBg");
	var mask_3_graphics_30 = new cjs.Graphics().p("AkqAWIEllBIEwELIkSFMg");
	var mask_3_graphics_31 = new cjs.Graphics().p("AkvAbIEvlLIEwEKIkbFXg");
	var mask_3_graphics_32 = new cjs.Graphics().p("Ak0AgIE5lWIEwEKIklFjg");
	var mask_3_graphics_33 = new cjs.Graphics().p("Ak5AlIFElhIEvELIkuFtg");
	var mask_3_graphics_34 = new cjs.Graphics().p("Ak9ArIFNlsIEvEKIk3F5g");
	var mask_3_graphics_35 = new cjs.Graphics().p("AlCAvIFXl1IEvEJIlBGEg");
	var mask_3_graphics_36 = new cjs.Graphics().p("AlHA1IFhmBIEuEJIlIGQg");
	var mask_3_graphics_37 = new cjs.Graphics().p("AlMA6IFsmMIEtEKIlRGag");
	var mask_3_graphics_38 = new cjs.Graphics().p("AlRA/IF2mWIEtEJIlaGmg");
	var mask_3_graphics_39 = new cjs.Graphics().p("AlVBEIF/mgIEtEIIlkGxg");
	var mask_3_graphics_40 = new cjs.Graphics().p("AlaBKIGJmsIEsEIIlsG9g");
	var mask_3_graphics_41 = new cjs.Graphics().p("AlfBOIGTm2IEsEJIl1HHg");
	var mask_3_graphics_42 = new cjs.Graphics().p("AlkBUIGenBIErEIIl+HTg");
	var mask_3_graphics_43 = new cjs.Graphics().p("AloBYIGnnKIEqEHImGHeg");
	var mask_3_graphics_44 = new cjs.Graphics().p("AltBeIGxnWIEqEHImQHqg");
	var mask_3_graphics_45 = new cjs.Graphics().p("AlyBjIG8nhIEpEIImZH0g");
	var mask_3_graphics_46 = new cjs.Graphics().p("Al3BoIHGnrIEpEHImjIAg");
	var mask_3_graphics_47 = new cjs.Graphics().p("Al8BtIHQn2IEpEHImsILg");
	var mask_3_graphics_48 = new cjs.Graphics().p("AmABzIHaoBIEnEHIm0IWg");
	var mask_3_graphics_49 = new cjs.Graphics().p("AmFB4IHkoMIEnEHIm9Iig");
	var mask_3_graphics_50 = new cjs.Graphics().p("AmKB9IHuoWIEnEGInHItg");
	var mask_3_graphics_51 = new cjs.Graphics().p("AmPCCIH4ohIEnEHInQI4g");
	var mask_3_graphics_52 = new cjs.Graphics().p("AmTCHIIBorIEnEGInZJDg");
	var mask_3_graphics_53 = new cjs.Graphics().p("AmYCMIIMo2IElEGInhJPg");
	var mask_3_graphics_54 = new cjs.Graphics().p("AmdCRIIWpAIElEGInqJZg");
	var mask_3_graphics_55 = new cjs.Graphics().p("AmiCXIIgpMIElEGIn0Jlg");
	var mask_3_graphics_56 = new cjs.Graphics().p("AmnCcIIqpWIEkEFIn9Jwg");
	var mask_3_graphics_57 = new cjs.Graphics().p("AmrChIIzphIEkEFIoGJ8g");
	var mask_3_graphics_58 = new cjs.Graphics().p("AmwCmII+prIEjEFIoQKGg");
	var mask_3_graphics_59 = new cjs.Graphics().p("Am1CrIJIp2IEjEFIoZKSg");
	var mask_3_graphics_60 = new cjs.Graphics().p("Am6CwIJSqAIEjEEIoiKdg");
	var mask_3_graphics_61 = new cjs.Graphics().p("Am+C1IJbqLIEiEFIoqKog");
	var mask_3_graphics_62 = new cjs.Graphics().p("AnDC7IJlqWIEiEEIozKzg");
	var mask_3_graphics_63 = new cjs.Graphics().p("AnIDAIJwqhIEhEEIo9K/g");
	var mask_3_graphics_64 = new cjs.Graphics().p("AnNDFIJ7qsIEgEFIpGLJg");
	var mask_3_graphics_65 = new cjs.Graphics().p("AnRDKIKEq2IEfEEIpOLVg");
	var mask_3_graphics_66 = new cjs.Graphics().p("AnWDPIKOrAIEfEDIpYLgg");
	var mask_3_graphics_67 = new cjs.Graphics().p("AnbDVIKYrMIEfEEIphLrg");
	var mask_3_graphics_68 = new cjs.Graphics().p("AngDZIKirWIEfEEIpqL2g");
	var mask_3_graphics_69 = new cjs.Graphics().p("AnlDeIKsrgIEeEDIpzMCg");
	var mask_3_graphics_70 = new cjs.Graphics().p("AnpDkIK2rrIEdECIp8MNg");
	var mask_3_graphics_71 = new cjs.Graphics().p("AnuDpILAr2IEdECIqFMZg");
	var mask_3_graphics_72 = new cjs.Graphics().p("An9ECILUshIEnEGIqsM5g");
	var mask_3_graphics_73 = new cjs.Graphics().p("AoMEcILotNIExELIrUNYg");
	var mask_3_graphics_74 = new cjs.Graphics().p("ACyWNIL7t5IE7EOIr7N6g");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_3_graphics_9,x:91.6,y:169.2}).wait(1).to({graphics:mask_3_graphics_10,x:163.7,y:319.4}).wait(1).to({graphics:mask_3_graphics_11,x:164.2,y:318.9}).wait(1).to({graphics:mask_3_graphics_12,x:164.7,y:318.3}).wait(1).to({graphics:mask_3_graphics_13,x:165.2,y:317.8}).wait(1).to({graphics:mask_3_graphics_14,x:165.6,y:317.2}).wait(1).to({graphics:mask_3_graphics_15,x:166.1,y:316.7}).wait(1).to({graphics:mask_3_graphics_16,x:166.6,y:316.1}).wait(1).to({graphics:mask_3_graphics_17,x:167.1,y:315.5}).wait(1).to({graphics:mask_3_graphics_18,x:167.6,y:315}).wait(1).to({graphics:mask_3_graphics_19,x:168,y:314.4}).wait(1).to({graphics:mask_3_graphics_20,x:168.5,y:313.9}).wait(1).to({graphics:mask_3_graphics_21,x:169,y:313.3}).wait(1).to({graphics:mask_3_graphics_22,x:169.5,y:312.8}).wait(1).to({graphics:mask_3_graphics_23,x:169.9,y:312.2}).wait(1).to({graphics:mask_3_graphics_24,x:170.4,y:311.7}).wait(1).to({graphics:mask_3_graphics_25,x:170.9,y:311.1}).wait(1).to({graphics:mask_3_graphics_26,x:171.4,y:310.6}).wait(1).to({graphics:mask_3_graphics_27,x:171.9,y:310}).wait(1).to({graphics:mask_3_graphics_28,x:172.4,y:309.5}).wait(1).to({graphics:mask_3_graphics_29,x:172.8,y:308.9}).wait(1).to({graphics:mask_3_graphics_30,x:173.3,y:308.4}).wait(1).to({graphics:mask_3_graphics_31,x:173.8,y:307.8}).wait(1).to({graphics:mask_3_graphics_32,x:174.3,y:307.3}).wait(1).to({graphics:mask_3_graphics_33,x:174.7,y:306.7}).wait(1).to({graphics:mask_3_graphics_34,x:175.2,y:306.2}).wait(1).to({graphics:mask_3_graphics_35,x:175.7,y:305.6}).wait(1).to({graphics:mask_3_graphics_36,x:176.2,y:305.1}).wait(1).to({graphics:mask_3_graphics_37,x:176.7,y:304.5}).wait(1).to({graphics:mask_3_graphics_38,x:177.1,y:304}).wait(1).to({graphics:mask_3_graphics_39,x:177.6,y:303.4}).wait(1).to({graphics:mask_3_graphics_40,x:178.1,y:302.9}).wait(1).to({graphics:mask_3_graphics_41,x:178.6,y:302.3}).wait(1).to({graphics:mask_3_graphics_42,x:179,y:301.8}).wait(1).to({graphics:mask_3_graphics_43,x:179.5,y:301.2}).wait(1).to({graphics:mask_3_graphics_44,x:180,y:300.7}).wait(1).to({graphics:mask_3_graphics_45,x:180.5,y:300.1}).wait(1).to({graphics:mask_3_graphics_46,x:181,y:299.6}).wait(1).to({graphics:mask_3_graphics_47,x:181.4,y:299}).wait(1).to({graphics:mask_3_graphics_48,x:181.9,y:298.4}).wait(1).to({graphics:mask_3_graphics_49,x:182.4,y:297.9}).wait(1).to({graphics:mask_3_graphics_50,x:182.9,y:297.3}).wait(1).to({graphics:mask_3_graphics_51,x:183.3,y:296.8}).wait(1).to({graphics:mask_3_graphics_52,x:183.8,y:296.2}).wait(1).to({graphics:mask_3_graphics_53,x:184.3,y:295.7}).wait(1).to({graphics:mask_3_graphics_54,x:184.8,y:295.1}).wait(1).to({graphics:mask_3_graphics_55,x:185.2,y:294.6}).wait(1).to({graphics:mask_3_graphics_56,x:185.8,y:294}).wait(1).to({graphics:mask_3_graphics_57,x:186.2,y:293.5}).wait(1).to({graphics:mask_3_graphics_58,x:186.7,y:292.9}).wait(1).to({graphics:mask_3_graphics_59,x:187.2,y:292.4}).wait(1).to({graphics:mask_3_graphics_60,x:187.7,y:291.8}).wait(1).to({graphics:mask_3_graphics_61,x:188.1,y:291.3}).wait(1).to({graphics:mask_3_graphics_62,x:188.6,y:290.7}).wait(1).to({graphics:mask_3_graphics_63,x:189.1,y:290.2}).wait(1).to({graphics:mask_3_graphics_64,x:189.6,y:289.6}).wait(1).to({graphics:mask_3_graphics_65,x:190,y:289.1}).wait(1).to({graphics:mask_3_graphics_66,x:190.5,y:288.5}).wait(1).to({graphics:mask_3_graphics_67,x:191,y:288}).wait(1).to({graphics:mask_3_graphics_68,x:191.5,y:287.4}).wait(1).to({graphics:mask_3_graphics_69,x:192,y:286.9}).wait(1).to({graphics:mask_3_graphics_70,x:192.4,y:286.3}).wait(1).to({graphics:mask_3_graphics_71,x:192.9,y:285.8}).wait(1).to({graphics:mask_3_graphics_72,x:194.4,y:284}).wait(1).to({graphics:mask_3_graphics_73,x:195.9,y:282.2}).wait(1).to({graphics:mask_3_graphics_74,x:125.6,y:169.2}).wait(351));

	// Layer 2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(20,1,1).p("AkqFiQFml6DvlJ");
	this.shape_6.setTransform(197.9,281.1);
	this.shape_6._off = true;

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(9).to({_off:false},0).wait(416));

	// Letter
	this.instance_3 = new lib.Symbol1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(275,275);
	this.instance_3.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(425));

	// Background
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_7.setTransform(275,275,3.373,2.543);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_8.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).wait(425));

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