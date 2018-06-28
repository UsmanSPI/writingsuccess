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


(lib.l = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AvrZgQhdhVAAikQAAiEBSjwIhMAdQhEAAAAhsQAAkIHsl0QEIoOIJw0QBXikBbhjQCEiQCNAAQCJAABEBwQA6BdAACQQAADWiPEZQh+DzjiEfQi4Duj1D7ImDF3QlRIvAAECQAABABPAAQH+AANrtDQBehXDHjCQA6gvA4AAQBnAAAABzQgJBJh+CVIi5DEQmxGeklC+QjtCYjQBVQjqBhiwAAQinAAhehSgADguXIlEKlIgVAdQEEklChjzICzk5QBJinAAh7IAGg1QgGgMgMAAQhAAAj8Hyg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115.8,-171.3,231.8,342.8);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0.1,rotation:31.8,guide:{path:[48.5,-50.4,-9.2,-28.3,-42.7,42.1]}},119).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AA1kPIBIhMICkCaIhIBMg");
	var mask_graphics_1 = new cjs.Graphics().p("Ah5giIBQhUICjCZIhQBUg");
	var mask_graphics_2 = new cjs.Graphics().p("Ah8geIBWhcICkCZIhYBcg");
	var mask_graphics_3 = new cjs.Graphics().p("AiAgaIBehkICjCZIheBkg");
	var mask_graphics_4 = new cjs.Graphics().p("AiEgWIBmhsICjCaIhmBrg");
	var mask_graphics_5 = new cjs.Graphics().p("AiIgTIBuhzICjCaIhuBzg");
	var mask_graphics_6 = new cjs.Graphics().p("AiMgPIB1h7ICkCaIh1B7g");
	var mask_graphics_7 = new cjs.Graphics().p("AiPgLIB8iDICjCaIh8CDg");
	var mask_graphics_8 = new cjs.Graphics().p("AiTgHICEiLICjCaIiECLg");
	var mask_graphics_9 = new cjs.Graphics().p("AiXgDICMiTICjCaIiLCTg");
	var mask_graphics_10 = new cjs.Graphics().p("AiaAAICSiaICjCaIiSCbg");
	var mask_graphics_11 = new cjs.Graphics().p("AieAEICaiiICjCbIiaCig");
	var mask_graphics_12 = new cjs.Graphics().p("AiiAIICiiqICjCbIiiCqg");
	var mask_graphics_13 = new cjs.Graphics().p("AilAMICniyIClCbIioCyg");
	var mask_graphics_14 = new cjs.Graphics().p("AipAQICvi6ICkCbIivC6g");
	var mask_graphics_15 = new cjs.Graphics().p("AitAVIC3jDICkCbIi3DCg");
	var mask_graphics_16 = new cjs.Graphics().p("AixAYIC/jKICkCbIi/DKg");
	var mask_graphics_17 = new cjs.Graphics().p("Ai1AcIDGjSIClCbIjGDSg");
	var mask_graphics_18 = new cjs.Graphics().p("Ai4AgIDNjaICkCbIjNDag");
	var mask_graphics_19 = new cjs.Graphics().p("Ai8AkIDVjiICkCbIjVDig");
	var mask_graphics_20 = new cjs.Graphics().p("AjAAoIDdjqICkCbIjdDqg");
	var mask_graphics_21 = new cjs.Graphics().p("AjEAsIDkjyIClCbIjlDyg");
	var mask_graphics_22 = new cjs.Graphics().p("AjHAwIDrj6ICkCbIjrD6g");
	var mask_graphics_23 = new cjs.Graphics().p("AjLA0IDzkCICkCbIjzECg");
	var mask_graphics_24 = new cjs.Graphics().p("AjPA4ID7kJICkCaIj7EJg");
	var mask_graphics_25 = new cjs.Graphics().p("AjSA8IEBkRIClCaIkCERg");
	var mask_graphics_26 = new cjs.Graphics().p("AjWBAIEJkZICkCaIkJEZg");
	var mask_graphics_27 = new cjs.Graphics().p("AjaBEIERkhICkCaIkQEhg");
	var mask_graphics_28 = new cjs.Graphics().p("AjeBIIEZkpICkCaIkYEqg");
	var mask_graphics_29 = new cjs.Graphics().p("AjiBMIEgkxIClCaIkgEyg");
	var mask_graphics_30 = new cjs.Graphics().p("AjlBQIEnk5ICkCaIknE5g");
	var mask_graphics_31 = new cjs.Graphics().p("AjpBUIEvlBICkCaIkvFBg");
	var mask_graphics_32 = new cjs.Graphics().p("AjsBYIE1lJIClCaIk3FJg");
	var mask_graphics_33 = new cjs.Graphics().p("AjwBcIE9lRICkCaIk9FRg");
	var mask_graphics_34 = new cjs.Graphics().p("Aj0BgIFFlZICkCaIlFFZg");
	var mask_graphics_35 = new cjs.Graphics().p("Aj4BjIFNlgICkCaIlNFhg");
	var mask_graphics_36 = new cjs.Graphics().p("Aj7BnIFTloIClCaIlUFpg");
	var mask_graphics_37 = new cjs.Graphics().p("Aj/BrIFblwICkCaIlbFxg");
	var mask_graphics_38 = new cjs.Graphics().p("AkDBvIFjl4ICkCaIljF5g");
	var mask_graphics_39 = new cjs.Graphics().p("AkHB0IFrmBICkCaIlrGBg");
	var mask_graphics_40 = new cjs.Graphics().p("AkLB4IFymJIClCaIlzGJg");
	var mask_graphics_41 = new cjs.Graphics().p("AkOB7IF5mQICkCaIl5GRg");
	var mask_graphics_42 = new cjs.Graphics().p("AkSB/IGBmYICkCaImBGZg");
	var mask_graphics_43 = new cjs.Graphics().p("AkWCDIGJmgICkCbImIGgg");
	var mask_graphics_44 = new cjs.Graphics().p("AkZCHIGPmoIClCbImQGog");
	var mask_graphics_45 = new cjs.Graphics().p("AkdCMIGXmxICkCbImXGwg");
	var mask_graphics_46 = new cjs.Graphics().p("AkhCQIGfm5ICkCbImfG4g");
	var mask_graphics_47 = new cjs.Graphics().p("AklCTIGnnAICkCbImmHAg");
	var mask_graphics_48 = new cjs.Graphics().p("AkoCXIGtnIIClCbImuHIg");
	var mask_graphics_49 = new cjs.Graphics().p("AksCbIG1nQICkCbIm1HQg");
	var mask_graphics_50 = new cjs.Graphics().p("AkwCfIG9nYICkCbIm9HYg");
	var mask_graphics_51 = new cjs.Graphics().p("Ak0CjIHEngIClCbInFHgg");
	var mask_graphics_52 = new cjs.Graphics().p("Ak3CnIHLnoICkCbInLHog");
	var mask_graphics_53 = new cjs.Graphics().p("Ak7CrIHTnwICkCbInTHwg");
	var mask_graphics_54 = new cjs.Graphics().p("Ak/CvIHbn4ICkCbInbH4g");
	var mask_graphics_55 = new cjs.Graphics().p("AlCCzIHhoAIClCbInjIAg");
	var mask_graphics_56 = new cjs.Graphics().p("AlGC3IHpoIICkCbInpIIg");
	var mask_graphics_57 = new cjs.Graphics().p("AlKC7IHxoQICkCbInxIQg");
	var mask_graphics_58 = new cjs.Graphics().p("AlOC/IH5oYICkCbIn5IYg");
	var mask_graphics_59 = new cjs.Graphics().p("AlSDDIIAogIClCbIoAIgg");
	var mask_graphics_60 = new cjs.Graphics().p("AlWDGIIIonICkCbIoHIog");
	var mask_graphics_61 = new cjs.Graphics().p("AlZDKIIPovICkCbIoPIvg");
	var mask_graphics_62 = new cjs.Graphics().p("AldDOIIWo3IClCbIoXI3g");
	var mask_graphics_63 = new cjs.Graphics().p("AlhDTIIeo/IClCaIoeI/g");
	var mask_graphics_64 = new cjs.Graphics().p("AlkDXIIlpHICkCaIolJHg");
	var mask_graphics_65 = new cjs.Graphics().p("AloDbIItpPICkCaIotJPg");
	var mask_graphics_66 = new cjs.Graphics().p("AlsDeII0pWIClCaIo0JXg");
	var mask_graphics_67 = new cjs.Graphics().p("AlwDiII8peIClCaIo8Jfg");
	var mask_graphics_68 = new cjs.Graphics().p("Al0DmIJEpmICkCaIpDJng");
	var mask_graphics_69 = new cjs.Graphics().p("Al3DqIJLpuICkCaIpLJvg");
	var mask_graphics_70 = new cjs.Graphics().p("Al7DvIJSp3IClCbIpTJ2g");
	var mask_graphics_71 = new cjs.Graphics().p("Al/DzIJap/ICkCbIpaJ+g");
	var mask_graphics_72 = new cjs.Graphics().p("AmCD2IJhqGICkCbIphKGg");
	var mask_graphics_73 = new cjs.Graphics().p("AmGD6IJoqOIClCbIppKOg");
	var mask_graphics_74 = new cjs.Graphics().p("AmKD+IJwqWIClCbIpxKWg");
	var mask_graphics_75 = new cjs.Graphics().p("AmNECIJ3qeICkCbIp3Keg");
	var mask_graphics_76 = new cjs.Graphics().p("AmREGIJ/qmICkCbIp/Kmg");
	var mask_graphics_77 = new cjs.Graphics().p("AmVEKIKGquIClCbIqGKug");
	var mask_graphics_78 = new cjs.Graphics().p("AmZEOIKOq2IClCbIqOK2g");
	var mask_graphics_79 = new cjs.Graphics().p("AmdESIKWq+ICkCbIqVK+g");
	var mask_graphics_80 = new cjs.Graphics().p("AmgEWIKdrGICkCbIqdLGg");
	var mask_graphics_81 = new cjs.Graphics().p("AmkEaIKkrOIClCbIqlLOg");
	var mask_graphics_82 = new cjs.Graphics().p("AmoEeIKsrWIClCbIqsLWg");
	var mask_graphics_83 = new cjs.Graphics().p("AmsEiIK0reICkCbIqzLeg");
	var mask_graphics_84 = new cjs.Graphics().p("AmvEmIK7rmICkCbIq7Lmg");
	var mask_graphics_85 = new cjs.Graphics().p("AmzEqILCruIClCbIrDLug");
	var mask_graphics_86 = new cjs.Graphics().p("Am3EuILKr2IClCbIrKL2g");
	var mask_graphics_87 = new cjs.Graphics().p("Am6EyILRr+ICkCbIrRL+g");
	var mask_graphics_88 = new cjs.Graphics().p("Am+E2ILZsGICkCbIrZMGg");
	var mask_graphics_89 = new cjs.Graphics().p("AnCE6ILgsOIClCbIrgMOg");
	var mask_graphics_90 = new cjs.Graphics().p("AnGE+ILosWICkCcIroMUg");
	var mask_graphics_91 = new cjs.Graphics().p("AnJFBILvsdICkCcIrvMcg");
	var mask_graphics_92 = new cjs.Graphics().p("AnNFGIL2smIClCcIr3Mkg");
	var mask_graphics_93 = new cjs.Graphics().p("AnRFKIL+suIClCcIr/Msg");
	var mask_graphics_94 = new cjs.Graphics().p("AnUFOIMFs2ICkCcIsFM0g");
	var mask_graphics_95 = new cjs.Graphics().p("AnYFSIMNs+ICkCcIsNM9g");
	var mask_graphics_96 = new cjs.Graphics().p("AncFWIMUtFIClCbIsVNEg");
	var mask_graphics_97 = new cjs.Graphics().p("AngFaIMctNIClCbIscNMg");
	var mask_graphics_98 = new cjs.Graphics().p("AnjFdIMjtUICkCbIsjNUg");
	var mask_graphics_99 = new cjs.Graphics().p("AnnFhIMrtcICkCbIsrNcg");
	var mask_graphics_100 = new cjs.Graphics().p("AnrFlIMytkIClCaIsyNlg");
	var mask_graphics_101 = new cjs.Graphics().p("AnvFpIM6tsIClCaIs6Ntg");
	var mask_graphics_102 = new cjs.Graphics().p("AnzFtINCt0ICkCaItBN1g");
	var mask_graphics_103 = new cjs.Graphics().p("An2FxINJt8ICkCaItJN9g");
	var mask_graphics_104 = new cjs.Graphics().p("An6F1INQuEIClCaItROFg");
	var mask_graphics_105 = new cjs.Graphics().p("An+F5INYuMIClCbItYOMg");
	var mask_graphics_106 = new cjs.Graphics().p("AoBF9INfuUICkCbItfOUg");
	var mask_graphics_107 = new cjs.Graphics().p("AoFGBINnucICkCbItnOcg");
	var mask_graphics_108 = new cjs.Graphics().p("AoJGFINuukIClCbItvOkg");
	var mask_graphics_109 = new cjs.Graphics().p("AoNGJIN2usIClCbIt2Osg");
	var mask_graphics_110 = new cjs.Graphics().p("AoQGNIN9u0ICkCbIt9O0g");
	var mask_graphics_111 = new cjs.Graphics().p("AoUGRIOEu8IClCbIuEO8g");
	var mask_graphics_112 = new cjs.Graphics().p("AoYGVIOMvEIClCbIuMPEg");
	var mask_graphics_113 = new cjs.Graphics().p("AocGZIOUvMICkCbIuTPMg");
	var mask_graphics_114 = new cjs.Graphics().p("AofGdIObvUICkCbIubPUg");
	var mask_graphics_115 = new cjs.Graphics().p("AojGhIOivcIClCbIujPcg");
	var mask_graphics_116 = new cjs.Graphics().p("AonGlIOqvkIClCbIuqPkg");
	var mask_graphics_117 = new cjs.Graphics().p("AoqGpIOxvsICkCbIuxPsg");
	var mask_graphics_118 = new cjs.Graphics().p("AouGtIO5v0ICkCbIu5P0g");
	var mask_graphics_119 = new cjs.Graphics().p("AoyGxIPAv8IClCbIvAP8g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:28.9,y:-34.8}).wait(1).to({graphics:mask_graphics_1,x:45.6,y:-57.7}).wait(1).to({graphics:mask_graphics_2,x:45.2,y:-57.3}).wait(1).to({graphics:mask_graphics_3,x:44.8,y:-56.9}).wait(1).to({graphics:mask_graphics_4,x:44.5,y:-56.5}).wait(1).to({graphics:mask_graphics_5,x:44.1,y:-56.1}).wait(1).to({graphics:mask_graphics_6,x:43.7,y:-55.7}).wait(1).to({graphics:mask_graphics_7,x:43.3,y:-55.3}).wait(1).to({graphics:mask_graphics_8,x:43,y:-54.9}).wait(1).to({graphics:mask_graphics_9,x:42.6,y:-54.5}).wait(1).to({graphics:mask_graphics_10,x:42.2,y:-54.2}).wait(1).to({graphics:mask_graphics_11,x:41.9,y:-53.8}).wait(1).to({graphics:mask_graphics_12,x:41.5,y:-53.4}).wait(1).to({graphics:mask_graphics_13,x:41.1,y:-53}).wait(1).to({graphics:mask_graphics_14,x:40.7,y:-52.6}).wait(1).to({graphics:mask_graphics_15,x:40.4,y:-52.2}).wait(1).to({graphics:mask_graphics_16,x:40,y:-51.8}).wait(1).to({graphics:mask_graphics_17,x:39.6,y:-51.4}).wait(1).to({graphics:mask_graphics_18,x:39.2,y:-51}).wait(1).to({graphics:mask_graphics_19,x:38.9,y:-50.6}).wait(1).to({graphics:mask_graphics_20,x:38.5,y:-50.2}).wait(1).to({graphics:mask_graphics_21,x:38.1,y:-49.8}).wait(1).to({graphics:mask_graphics_22,x:37.7,y:-49.4}).wait(1).to({graphics:mask_graphics_23,x:37.4,y:-49}).wait(1).to({graphics:mask_graphics_24,x:37,y:-48.6}).wait(1).to({graphics:mask_graphics_25,x:36.6,y:-48.2}).wait(1).to({graphics:mask_graphics_26,x:36.2,y:-47.8}).wait(1).to({graphics:mask_graphics_27,x:35.9,y:-47.4}).wait(1).to({graphics:mask_graphics_28,x:35.5,y:-47}).wait(1).to({graphics:mask_graphics_29,x:35.1,y:-46.6}).wait(1).to({graphics:mask_graphics_30,x:34.8,y:-46.3}).wait(1).to({graphics:mask_graphics_31,x:34.4,y:-45.9}).wait(1).to({graphics:mask_graphics_32,x:34,y:-45.5}).wait(1).to({graphics:mask_graphics_33,x:33.6,y:-45.1}).wait(1).to({graphics:mask_graphics_34,x:33.3,y:-44.7}).wait(1).to({graphics:mask_graphics_35,x:32.9,y:-44.3}).wait(1).to({graphics:mask_graphics_36,x:32.5,y:-43.9}).wait(1).to({graphics:mask_graphics_37,x:32.1,y:-43.5}).wait(1).to({graphics:mask_graphics_38,x:31.8,y:-43.1}).wait(1).to({graphics:mask_graphics_39,x:31.4,y:-42.7}).wait(1).to({graphics:mask_graphics_40,x:31,y:-42.3}).wait(1).to({graphics:mask_graphics_41,x:30.6,y:-41.9}).wait(1).to({graphics:mask_graphics_42,x:30.3,y:-41.5}).wait(1).to({graphics:mask_graphics_43,x:29.9,y:-41.1}).wait(1).to({graphics:mask_graphics_44,x:29.5,y:-40.7}).wait(1).to({graphics:mask_graphics_45,x:29.1,y:-40.3}).wait(1).to({graphics:mask_graphics_46,x:28.8,y:-39.9}).wait(1).to({graphics:mask_graphics_47,x:28.4,y:-39.5}).wait(1).to({graphics:mask_graphics_48,x:28,y:-39.1}).wait(1).to({graphics:mask_graphics_49,x:27.6,y:-38.7}).wait(1).to({graphics:mask_graphics_50,x:27.3,y:-38.4}).wait(1).to({graphics:mask_graphics_51,x:26.9,y:-38}).wait(1).to({graphics:mask_graphics_52,x:26.5,y:-37.6}).wait(1).to({graphics:mask_graphics_53,x:26.2,y:-37.2}).wait(1).to({graphics:mask_graphics_54,x:25.8,y:-36.8}).wait(1).to({graphics:mask_graphics_55,x:25.4,y:-36.4}).wait(1).to({graphics:mask_graphics_56,x:25,y:-36}).wait(1).to({graphics:mask_graphics_57,x:24.7,y:-35.6}).wait(1).to({graphics:mask_graphics_58,x:24.3,y:-35.2}).wait(1).to({graphics:mask_graphics_59,x:23.9,y:-34.8}).wait(1).to({graphics:mask_graphics_60,x:23.6,y:-34.4}).wait(1).to({graphics:mask_graphics_61,x:23.2,y:-34}).wait(1).to({graphics:mask_graphics_62,x:22.8,y:-33.6}).wait(1).to({graphics:mask_graphics_63,x:22.4,y:-33.2}).wait(1).to({graphics:mask_graphics_64,x:22.1,y:-32.8}).wait(1).to({graphics:mask_graphics_65,x:21.7,y:-32.4}).wait(1).to({graphics:mask_graphics_66,x:21.3,y:-32}).wait(1).to({graphics:mask_graphics_67,x:20.9,y:-31.6}).wait(1).to({graphics:mask_graphics_68,x:20.6,y:-31.2}).wait(1).to({graphics:mask_graphics_69,x:20.2,y:-30.8}).wait(1).to({graphics:mask_graphics_70,x:19.8,y:-30.4}).wait(1).to({graphics:mask_graphics_71,x:19.5,y:-30}).wait(1).to({graphics:mask_graphics_72,x:19.1,y:-29.6}).wait(1).to({graphics:mask_graphics_73,x:18.7,y:-29.2}).wait(1).to({graphics:mask_graphics_74,x:18.3,y:-28.8}).wait(1).to({graphics:mask_graphics_75,x:18,y:-28.5}).wait(1).to({graphics:mask_graphics_76,x:17.6,y:-28.1}).wait(1).to({graphics:mask_graphics_77,x:17.2,y:-27.7}).wait(1).to({graphics:mask_graphics_78,x:16.8,y:-27.3}).wait(1).to({graphics:mask_graphics_79,x:16.5,y:-26.9}).wait(1).to({graphics:mask_graphics_80,x:16.1,y:-26.5}).wait(1).to({graphics:mask_graphics_81,x:15.7,y:-26.1}).wait(1).to({graphics:mask_graphics_82,x:15.3,y:-25.7}).wait(1).to({graphics:mask_graphics_83,x:15,y:-25.3}).wait(1).to({graphics:mask_graphics_84,x:14.6,y:-24.9}).wait(1).to({graphics:mask_graphics_85,x:14.2,y:-24.5}).wait(1).to({graphics:mask_graphics_86,x:13.8,y:-24.1}).wait(1).to({graphics:mask_graphics_87,x:13.5,y:-23.7}).wait(1).to({graphics:mask_graphics_88,x:13.1,y:-23.3}).wait(1).to({graphics:mask_graphics_89,x:12.7,y:-22.9}).wait(1).to({graphics:mask_graphics_90,x:12.4,y:-22.5}).wait(1).to({graphics:mask_graphics_91,x:12,y:-22.1}).wait(1).to({graphics:mask_graphics_92,x:11.6,y:-21.7}).wait(1).to({graphics:mask_graphics_93,x:11.2,y:-21.3}).wait(1).to({graphics:mask_graphics_94,x:10.9,y:-20.9}).wait(1).to({graphics:mask_graphics_95,x:10.5,y:-20.5}).wait(1).to({graphics:mask_graphics_96,x:10.1,y:-20.2}).wait(1).to({graphics:mask_graphics_97,x:9.7,y:-19.8}).wait(1).to({graphics:mask_graphics_98,x:9.4,y:-19.4}).wait(1).to({graphics:mask_graphics_99,x:9,y:-19}).wait(1).to({graphics:mask_graphics_100,x:8.6,y:-18.6}).wait(1).to({graphics:mask_graphics_101,x:8.2,y:-18.2}).wait(1).to({graphics:mask_graphics_102,x:7.9,y:-17.8}).wait(1).to({graphics:mask_graphics_103,x:7.5,y:-17.4}).wait(1).to({graphics:mask_graphics_104,x:7.1,y:-17}).wait(1).to({graphics:mask_graphics_105,x:6.7,y:-16.6}).wait(1).to({graphics:mask_graphics_106,x:6.4,y:-16.2}).wait(1).to({graphics:mask_graphics_107,x:6,y:-15.8}).wait(1).to({graphics:mask_graphics_108,x:5.6,y:-15.4}).wait(1).to({graphics:mask_graphics_109,x:5.2,y:-15}).wait(1).to({graphics:mask_graphics_110,x:4.9,y:-14.6}).wait(1).to({graphics:mask_graphics_111,x:4.5,y:-14.2}).wait(1).to({graphics:mask_graphics_112,x:4.1,y:-13.8}).wait(1).to({graphics:mask_graphics_113,x:3.8,y:-13.4}).wait(1).to({graphics:mask_graphics_114,x:3.4,y:-13}).wait(1).to({graphics:mask_graphics_115,x:3,y:-12.6}).wait(1).to({graphics:mask_graphics_116,x:2.6,y:-12.3}).wait(1).to({graphics:mask_graphics_117,x:2.3,y:-11.9}).wait(1).to({graphics:mask_graphics_118,x:1.9,y:-11.5}).wait(1).to({graphics:mask_graphics_119,x:1.5,y:-11.1}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AnIHQQFQrCJBjd");
	this.shape.setTransform(2.8,-4.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(120));

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
(lib.WS_Cursive_l = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_499 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(499).call(this.frame_499).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(176.6,355.3,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[176.7,355.4,210,325.1,245.4,289.6,280.9,254.1,301.9,227.1,322.9,200.2,333.7,178.6,344.5,157.1,344.1,142.3,343.8,128,339.9,121.5]}},146).wait(15).to({x:338.8,y:120.9},0).to({guide:{path:[338.8,120.9,322.6,110.3,306.1,139.5,289.6,168.9,276.8,195.1,264.1,221.3,251.6,247.3,241.2,269,230.2,290.4,217.7,314.9,204.3,339.1,190.2,364.7,181.3,398.2,172.3,431.8,203.1,429.4,234,427,257.3,413.4,280.6,399.9,302.3,383.1,324,366.3,341.8,349.3,359.5,332.3,376.2,315]}},255).wait(15).to({x:373.1,y:318.5},0).to({guide:{path:[374.1,318.8,397.6,246.7,461.2,282.8,492.7,300.6,522.5,320.4,538.6,331,556.5,321.4,603.6,296.1,630.8,264.4]}},59).wait(1));

	// Layer 15
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(336,119.1,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},146).wait(15).to({_off:false,x:376,y:315.1},0).to({_off:true},255).wait(75));

	// Layer 14
	this.instance_1 = new lib.ar2("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(232.3,99.5,1,1,-1.5,0,0,0.8,-0.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(170).to({_off:false},0).wait(330));

	// Layer 12 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_342 = new cjs.Graphics().p("ANIdhIBGgwID+FzIhHAwg");
	var mask_graphics_343 = new cjs.Graphics().p("AiribIBag8ID9FyIhZA9g");
	var mask_graphics_344 = new cjs.Graphics().p("Ai0iVIBthIID8FxIhsBKg");
	var mask_graphics_345 = new cjs.Graphics().p("Ai+iPICAhUID9FxIh/BWg");
	var mask_graphics_346 = new cjs.Graphics().p("AjHiJICThgID8FxIiRBig");
	var mask_graphics_347 = new cjs.Graphics().p("AjRiEICnhrID8FwIikBvg");
	var mask_graphics_348 = new cjs.Graphics().p("Ajbh+IC6h3ID9FvIi3B8g");
	var mask_graphics_349 = new cjs.Graphics().p("Ajkh4IDMiDID9FvIjKCJg");
	var mask_graphics_350 = new cjs.Graphics().p("AjuhyIDhiQID7FvIjbCWg");
	var mask_graphics_351 = new cjs.Graphics().p("Aj3htIDzibID8FvIjvCig");
	var mask_graphics_352 = new cjs.Graphics().p("AkBhmIEFioID9FuIkBCvg");
	var mask_graphics_353 = new cjs.Graphics().p("AkKhhIEZizID8FtIkTC8g");
	var mask_graphics_354 = new cjs.Graphics().p("AkUhbIEsi/ID9FtIkmDIg");
	var mask_graphics_355 = new cjs.Graphics().p("AkdhVIE+jLID9FsIk5DVg");
	var mask_graphics_356 = new cjs.Graphics().p("AknhPIFTjXID8FrIlLDig");
	var mask_graphics_357 = new cjs.Graphics().p("AkwhJIFljjID8FrIleDug");
	var mask_graphics_358 = new cjs.Graphics().p("Ak6hEIF5juID7FqIlwD7g");
	var mask_graphics_359 = new cjs.Graphics().p("AlDg+IGMj7ID7FrImDEIg");
	var mask_graphics_360 = new cjs.Graphics().p("AlNg4IGfkGID8FpImWEVg");
	var mask_graphics_361 = new cjs.Graphics().p("AlWgyIGxkTID8FqImoEhg");
	var mask_graphics_362 = new cjs.Graphics().p("AlggsIHFkfID8FpIm8Eug");
	var mask_graphics_363 = new cjs.Graphics().p("AlpgmIHYkrID7FoInOE7g");
	var mask_graphics_364 = new cjs.Graphics().p("AlzghIHrk2ID8FoInhFHg");
	var mask_graphics_365 = new cjs.Graphics().p("Al8gbIH+lCID7FoInzFTg");
	var mask_graphics_366 = new cjs.Graphics().p("AmGgVIISlOID7FmIoGFhg");
	var mask_graphics_367 = new cjs.Graphics().p("AmPgPIIklaID7FnIoYFsg");
	var mask_graphics_368 = new cjs.Graphics().p("AmZgJII4lmID7FmIorF5g");
	var mask_graphics_369 = new cjs.Graphics().p("AmigEIJLlxID6FmIo+GFg");
	var mask_graphics_370 = new cjs.Graphics().p("AmsACIJel+ID7FmIpRGTg");
	var mask_graphics_371 = new cjs.Graphics().p("Am1AHIJxmJID6FlIpjGgg");
	var mask_graphics_372 = new cjs.Graphics().p("Am/ANIKEmVID7FlIp2Gsg");
	var mask_graphics_373 = new cjs.Graphics().p("AnIATIKXmhID6FlIqJG4g");
	var mask_graphics_374 = new cjs.Graphics().p("AnSAZIKrmtID6FjIqcHGg");
	var mask_graphics_375 = new cjs.Graphics().p("AnbAeIK9m4ID6FjIquHSg");
	var mask_graphics_376 = new cjs.Graphics().p("AnlAkILRnEID6FiIrBHfg");
	var mask_graphics_377 = new cjs.Graphics().p("AnuAqILknRID5FjIrTHrg");
	var mask_graphics_378 = new cjs.Graphics().p("An4AwIL3ncID6FhIrmH4g");
	var mask_graphics_379 = new cjs.Graphics().p("AoBA2IMKnoID5FhIr4IEg");
	var mask_graphics_380 = new cjs.Graphics().p("AoLA7IMen0ID5FhIsMISg");
	var mask_graphics_381 = new cjs.Graphics().p("AoUBBIMwoAID5FhIseIeg");
	var mask_graphics_382 = new cjs.Graphics().p("AoeBHINDoMID6FgIsxIrg");
	var mask_graphics_383 = new cjs.Graphics().p("AonBNINXoYID4FgItEI3g");
	var mask_graphics_384 = new cjs.Graphics().p("AoxBSINqojID5FfItXJEg");
	var mask_graphics_385 = new cjs.Graphics().p("Ao6BZIN8owID6FeItpJRg");
	var mask_graphics_386 = new cjs.Graphics().p("ApEBeIORo7ID4FeIt8Jdg");
	var mask_graphics_387 = new cjs.Graphics().p("ApNBkIOjpHID5FdIuPJqg");
	var mask_graphics_388 = new cjs.Graphics().p("ApXBqIO3pUID4FdIuhJ3g");
	var mask_graphics_389 = new cjs.Graphics().p("ApgBwIPKpgID3FdIuzKDg");
	var mask_graphics_390 = new cjs.Graphics().p("ApqB2IPdpsID4FcIvGKRg");
	var mask_graphics_391 = new cjs.Graphics().p("ApzB7IPwp3ID3FcIvYKdg");
	var mask_graphics_392 = new cjs.Graphics().p("Ap9CBIQDqDID4FbIvsKqg");
	var mask_graphics_393 = new cjs.Graphics().p("AqGCHIQWqPID4FbIv+K2g");
	var mask_graphics_394 = new cjs.Graphics().p("AqQCNIQpqbID4FaIwRLDg");
	var mask_graphics_395 = new cjs.Graphics().p("AqaCTIQ9qnID4FZIwkLQg");
	var mask_graphics_396 = new cjs.Graphics().p("AqjCZIRQqzID3FZIw2Lcg");
	var mask_graphics_397 = new cjs.Graphics().p("AqtCeIRjq+ID4FYIxJLpg");
	var mask_graphics_398 = new cjs.Graphics().p("Aq2CkIR2rKID3FXIxcL2g");
	var mask_graphics_399 = new cjs.Graphics().p("ArACqISKrXID3FYIxvMCg");
	var mask_graphics_400 = new cjs.Graphics().p("ArJCxIScrkID3FXIyBMQg");
	var mask_graphics_401 = new cjs.Graphics().p("ArSC4ISuryID3FXIyUMeg");
	var mask_graphics_402 = new cjs.Graphics().p("ArcC+ITCr/ID3FXIynMsg");
	var mask_graphics_403 = new cjs.Graphics().p("ArlDFITTsNID5FYIy8M5g");
	var mask_graphics_404 = new cjs.Graphics().p("ArvDMITnsbID4FYIzONHg");
	var mask_graphics_405 = new cjs.Graphics().p("Ar4DTIT5spID4FYIzgNVg");
	var mask_graphics_406 = new cjs.Graphics().p("AsCDaIUMs3ID5FYIz0Njg");
	var mask_graphics_407 = new cjs.Graphics().p("AsLDhIUetFID5FYI0HNxg");
	var mask_graphics_408 = new cjs.Graphics().p("AsUDoIUwtTID5FYI0ZN/g");
	var mask_graphics_409 = new cjs.Graphics().p("AseDuIVEtgID5FYI0tONg");
	var mask_graphics_410 = new cjs.Graphics().p("AsnD1IVWtuID5FYI0/Obg");
	var mask_graphics_411 = new cjs.Graphics().p("AsxD8IVpt8ID6FZI1TOog");
	var mask_graphics_412 = new cjs.Graphics().p("As6EDIV7uKID6FZI1mO2g");
	var mask_graphics_413 = new cjs.Graphics().p("AtEEKIWPuXID6FXI15PEg");
	var mask_graphics_414 = new cjs.Graphics().p("AtNEQIWhulID6FZI2MPRg");
	var mask_graphics_415 = new cjs.Graphics().p("AtWEXIWzuyID7FYI2fPfg");
	var mask_graphics_416 = new cjs.Graphics().p("AtgEeIXGvBID7FaI2zPsg");
	var mask_graphics_417 = new cjs.Graphics().p("AtpElIXYvOID7FYI3FP7g");
	var mask_graphics_418 = new cjs.Graphics().p("AtzEsIXsvcID7FYI3YQJg");
	var mask_graphics_419 = new cjs.Graphics().p("At8EzIX+vqID7FZI3rQWg");
	var mask_graphics_420 = new cjs.Graphics().p("AuGE6IYRv4ID8FZI3/Qkg");
	var mask_graphics_421 = new cjs.Graphics().p("AuPFBIYkwGID7FZI4SQyg");
	var mask_graphics_422 = new cjs.Graphics().p("AuYFIIY1wUID8FZI4kRAg");
	var mask_graphics_423 = new cjs.Graphics().p("Au1FlIZuxIID9FiI5jRlg");
	var mask_graphics_424 = new cjs.Graphics().p("AvRGBIamx7ID9FqI6gSLg");
	var mask_graphics_425 = new cjs.Graphics().p("AgEdhIbeyyID+F0I7fSxg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(342).to({graphics:mask_graphics_342,x:116.4,y:226}).wait(1).to({graphics:mask_graphics_343,x:217.5,y:430.5}).wait(1).to({graphics:mask_graphics_344,x:218.5,y:429.9}).wait(1).to({graphics:mask_graphics_345,x:219.4,y:429.3}).wait(1).to({graphics:mask_graphics_346,x:220.4,y:428.6}).wait(1).to({graphics:mask_graphics_347,x:221.3,y:428}).wait(1).to({graphics:mask_graphics_348,x:222.3,y:427.4}).wait(1).to({graphics:mask_graphics_349,x:223.3,y:426.8}).wait(1).to({graphics:mask_graphics_350,x:224.2,y:426.2}).wait(1).to({graphics:mask_graphics_351,x:225.2,y:425.6}).wait(1).to({graphics:mask_graphics_352,x:226.1,y:425}).wait(1).to({graphics:mask_graphics_353,x:227.1,y:424.4}).wait(1).to({graphics:mask_graphics_354,x:228,y:423.8}).wait(1).to({graphics:mask_graphics_355,x:229,y:423.2}).wait(1).to({graphics:mask_graphics_356,x:229.9,y:422.6}).wait(1).to({graphics:mask_graphics_357,x:230.9,y:421.9}).wait(1).to({graphics:mask_graphics_358,x:231.8,y:421.3}).wait(1).to({graphics:mask_graphics_359,x:232.8,y:420.7}).wait(1).to({graphics:mask_graphics_360,x:233.7,y:420.1}).wait(1).to({graphics:mask_graphics_361,x:234.7,y:419.5}).wait(1).to({graphics:mask_graphics_362,x:235.6,y:418.9}).wait(1).to({graphics:mask_graphics_363,x:236.6,y:418.3}).wait(1).to({graphics:mask_graphics_364,x:237.5,y:417.7}).wait(1).to({graphics:mask_graphics_365,x:238.5,y:417.1}).wait(1).to({graphics:mask_graphics_366,x:239.4,y:416.5}).wait(1).to({graphics:mask_graphics_367,x:240.4,y:415.8}).wait(1).to({graphics:mask_graphics_368,x:241.3,y:415.2}).wait(1).to({graphics:mask_graphics_369,x:242.3,y:414.6}).wait(1).to({graphics:mask_graphics_370,x:243.2,y:414}).wait(1).to({graphics:mask_graphics_371,x:244.2,y:413.4}).wait(1).to({graphics:mask_graphics_372,x:245.2,y:412.8}).wait(1).to({graphics:mask_graphics_373,x:246.1,y:412.2}).wait(1).to({graphics:mask_graphics_374,x:247.1,y:411.6}).wait(1).to({graphics:mask_graphics_375,x:248,y:411}).wait(1).to({graphics:mask_graphics_376,x:249,y:410.4}).wait(1).to({graphics:mask_graphics_377,x:249.9,y:409.8}).wait(1).to({graphics:mask_graphics_378,x:250.9,y:409.2}).wait(1).to({graphics:mask_graphics_379,x:251.8,y:408.6}).wait(1).to({graphics:mask_graphics_380,x:252.8,y:407.9}).wait(1).to({graphics:mask_graphics_381,x:253.7,y:407.3}).wait(1).to({graphics:mask_graphics_382,x:254.7,y:406.7}).wait(1).to({graphics:mask_graphics_383,x:255.7,y:406.1}).wait(1).to({graphics:mask_graphics_384,x:256.6,y:405.5}).wait(1).to({graphics:mask_graphics_385,x:257.6,y:404.9}).wait(1).to({graphics:mask_graphics_386,x:258.5,y:404.3}).wait(1).to({graphics:mask_graphics_387,x:259.5,y:403.7}).wait(1).to({graphics:mask_graphics_388,x:260.4,y:403.1}).wait(1).to({graphics:mask_graphics_389,x:261.4,y:402.5}).wait(1).to({graphics:mask_graphics_390,x:262.3,y:401.8}).wait(1).to({graphics:mask_graphics_391,x:263.3,y:401.2}).wait(1).to({graphics:mask_graphics_392,x:264.2,y:400.6}).wait(1).to({graphics:mask_graphics_393,x:265.2,y:400}).wait(1).to({graphics:mask_graphics_394,x:266.1,y:399.4}).wait(1).to({graphics:mask_graphics_395,x:267.1,y:398.8}).wait(1).to({graphics:mask_graphics_396,x:268,y:398.2}).wait(1).to({graphics:mask_graphics_397,x:269,y:397.6}).wait(1).to({graphics:mask_graphics_398,x:269.9,y:397}).wait(1).to({graphics:mask_graphics_399,x:270.9,y:396.4}).wait(1).to({graphics:mask_graphics_400,x:271.8,y:395.7}).wait(1).to({graphics:mask_graphics_401,x:272.8,y:395}).wait(1).to({graphics:mask_graphics_402,x:273.7,y:394.3}).wait(1).to({graphics:mask_graphics_403,x:274.7,y:393.6}).wait(1).to({graphics:mask_graphics_404,x:275.6,y:392.9}).wait(1).to({graphics:mask_graphics_405,x:276.5,y:392.2}).wait(1).to({graphics:mask_graphics_406,x:277.5,y:391.5}).wait(1).to({graphics:mask_graphics_407,x:278.4,y:390.8}).wait(1).to({graphics:mask_graphics_408,x:279.4,y:390.1}).wait(1).to({graphics:mask_graphics_409,x:280.3,y:389.4}).wait(1).to({graphics:mask_graphics_410,x:281.3,y:388.7}).wait(1).to({graphics:mask_graphics_411,x:282.2,y:388}).wait(1).to({graphics:mask_graphics_412,x:283.1,y:387.3}).wait(1).to({graphics:mask_graphics_413,x:284.1,y:386.7}).wait(1).to({graphics:mask_graphics_414,x:285,y:386}).wait(1).to({graphics:mask_graphics_415,x:286,y:385.3}).wait(1).to({graphics:mask_graphics_416,x:286.9,y:384.6}).wait(1).to({graphics:mask_graphics_417,x:287.9,y:383.9}).wait(1).to({graphics:mask_graphics_418,x:288.8,y:383.2}).wait(1).to({graphics:mask_graphics_419,x:289.7,y:382.5}).wait(1).to({graphics:mask_graphics_420,x:290.7,y:381.8}).wait(1).to({graphics:mask_graphics_421,x:291.6,y:381.1}).wait(1).to({graphics:mask_graphics_422,x:292.6,y:380.4}).wait(1).to({graphics:mask_graphics_423,x:295.4,y:378.1}).wait(1).to({graphics:mask_graphics_424,x:298.2,y:375.8}).wait(1).to({graphics:mask_graphics_425,x:200.8,y:226}).wait(75));

	// Layer 11
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(20,1,1).p("AJm33QijhtimElQilEmh/EHQh/EGh9EEQhoDZhuDVQh9D1iGDyQiNEAhaFQQhaFPE1gYQE1gYDpiHQDoiHDZipQDZioCyiqQCxiqCliw");
	this.shape_1.setTransform(277.6,273.8);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(342).to({_off:false},0).wait(158));

	// Layer 10 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_316 = new cjs.Graphics().p("ADHYkQCfjaELgpQEKgqDaCfQDWCcAsEDI0HDJQglkFCcjVg");
	var mask_1_graphics_317 = new cjs.Graphics().p("AC0YyQCRjkEHg6QEHg7DkCQQDfCOA9EAIz3EbQg2kBCOjfg");
	var mask_1_graphics_318 = new cjs.Graphics().p("ACkZCQCCjtEDhLQEDhMDtCCQDoB/BND7IzjFsQhGj9B/jng");
	var mask_1_graphics_319 = new cjs.Graphics().p("ACYZTQBzj1D+hcQD9hcD0BzQDwBvBdD2IzIG8QhWj4Bvjvg");
	var mask_1_graphics_320 = new cjs.Graphics().p("ACQZmQBjj8D3hsQD3hsD7BiQD3BhBsDvIypIKQhmjyBgj2g");
	var mask_1_graphics_321 = new cjs.Graphics().p("ACMZ6QBSkBDwh8QDvh8EBBSQD8BQB8DoIyFJWQh1jrBQj8g");
	var mask_1_graphics_322 = new cjs.Graphics().p("ACLaQQBCkGDniLQDniLEGBBQEABACLDfIxcKfQiEjjA/kAg");
	var mask_1_graphics_323 = new cjs.Graphics().p("ACPanQAwkKDeiZQDdiaEKAwQEEAvCZDWIwvLmQiSjaAvkEg");
	var mask_1_graphics_324 = new cjs.Graphics().p("ACVa/QAgkMDTioQDTinEMAfQEHAeCmDLIv9MqQigjQAekHg");
	var mask_1_graphics_325 = new cjs.Graphics().p("ACgbYQAOkNDIi1QDIi1EOAOQEIANCzDAIvHNqQitjGANkIg");
	var mask_1_graphics_326 = new cjs.Graphics().p("ACubzQgDkOC8jBQC8jCEOgEQEIgDC/C0IuMOmQi6i6gEkIg");
	var mask_1_graphics_327 = new cjs.Graphics().p("ADAcOQgVkNCwjNQCvjNENgVQEHgVDKCoItOPeQjFiugVkHg");
	var mask_1_graphics_328 = new cjs.Graphics().p("ADWcqQgnkLCijYQCijYELgmQEFgmDVCaIsNQTQjQigglkGg");
	var mask_1_graphics_329 = new cjs.Graphics().p("ADvdHQg4kICUjiQCTjiEIg4QEDg2DeCMIrIRDQjaiSg2kDg");
	var mask_1_graphics_330 = new cjs.Graphics().p("AEKdkQhHkECFjrQCEjrEEhIQD/hHDmB+IqBRuQjjiFhHj+g");
	var mask_1_graphics_331 = new cjs.Graphics().p("AEpeBQhYj/B2jzQB2jzD/hYQD5hWDuBvIo5SUQjqh3hXj5g");
	var mask_1_graphics_332 = new cjs.Graphics().p("AFLeeQhoj5Bmj5QBmj6D5hoQD0hmD1BgInuS1Qjyhnhmj0g");
	var mask_1_graphics_333 = new cjs.Graphics().p("AFve8Qh3jyBWkAQBXj/Dxh4QDth1D6BQImhTSQj3hXh2jtg");
	var mask_1_graphics_334 = new cjs.Graphics().p("AGXfZQiHjpBGkFQBGkFDqiGQDliED/BAIlTTqQj8hIiEjlg");
	var mask_1_graphics_335 = new cjs.Graphics().p("AHAf3QiVjhA2kIQA1kJDhiVQDciSEDAwIkDT9QkAg4iTjcg");
	var mask_1_graphics_336 = new cjs.Graphics().p("EAHtAgUQijjXAkkLQAlkLDXijQDTigEEAgIixUKQkEgnifjTg");
	var mask_1_graphics_337 = new cjs.Graphics().p("EAIbAgyQiwjNAUkNQATkNDNiwQDIitEGAQIhgUTQkFgXitjIg");
	var mask_1_graphics_338 = new cjs.Graphics().p("EAJLAhOQi8jBADkNQACkODBi9QC9i5EGgBIgNUXQkHgHi5i9g");
	var mask_1_graphics_339 = new cjs.Graphics().p("EAJbAhqQjIi0gOkOQgPkNC1jJQCxjEEGgSIBEUVIgcAAQj1AAi6ing");
	var mask_1_graphics_340 = new cjs.Graphics().p("EAJmAiEQjTingfkMQggkMCojUQCkjPEEgiICXUOQglADgjAAQjaAAiziNg");
	var mask_1_graphics_341 = new cjs.Graphics().p("EAJzAicQjeiagwkJQgwkKCajdQCWjaECgyIDoUCQg6AJg3AAQjCAAiph1g");
	var mask_1_graphics_342 = new cjs.Graphics().p("EAKBAiyQjniMhBkGQhAkGCLjmQCJjjD+hCIE4TwQhOAShKAAQisAAiehfg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(316).to({graphics:mask_1_graphics_316,x:136.7,y:204.6}).wait(1).to({graphics:mask_1_graphics_317,x:136.3,y:206.6}).wait(1).to({graphics:mask_1_graphics_318,x:135.8,y:208.6}).wait(1).to({graphics:mask_1_graphics_319,x:135.1,y:210.6}).wait(1).to({graphics:mask_1_graphics_320,x:134.3,y:212.6}).wait(1).to({graphics:mask_1_graphics_321,x:133.4,y:214.5}).wait(1).to({graphics:mask_1_graphics_322,x:132.4,y:216.3}).wait(1).to({graphics:mask_1_graphics_323,x:131.3,y:218.1}).wait(1).to({graphics:mask_1_graphics_324,x:130,y:219.8}).wait(1).to({graphics:mask_1_graphics_325,x:128.7,y:221.4}).wait(1).to({graphics:mask_1_graphics_326,x:127.2,y:222.9}).wait(1).to({graphics:mask_1_graphics_327,x:125.6,y:224.3}).wait(1).to({graphics:mask_1_graphics_328,x:124,y:225.6}).wait(1).to({graphics:mask_1_graphics_329,x:122.3,y:226.8}).wait(1).to({graphics:mask_1_graphics_330,x:120.5,y:227.9}).wait(1).to({graphics:mask_1_graphics_331,x:118.7,y:228.9}).wait(1).to({graphics:mask_1_graphics_332,x:116.9,y:229.7}).wait(1).to({graphics:mask_1_graphics_333,x:114.9,y:230.4}).wait(1).to({graphics:mask_1_graphics_334,x:113,y:231}).wait(1).to({graphics:mask_1_graphics_335,x:111,y:231.5}).wait(1).to({graphics:mask_1_graphics_336,x:108.9,y:231.8}).wait(1).to({graphics:mask_1_graphics_337,x:106.9,y:232.1}).wait(1).to({graphics:mask_1_graphics_338,x:104.8,y:232.1}).wait(1).to({graphics:mask_1_graphics_339,x:106.2,y:232.1}).wait(1).to({graphics:mask_1_graphics_340,x:108.3,y:232.1}).wait(1).to({graphics:mask_1_graphics_341,x:110.3,y:232.1}).wait(1).to({graphics:mask_1_graphics_342,x:112.3,y:232.1}).wait(158));

	// Layer 9
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(20,1,1).p("AMf33QijhtimElQilEmiAEHQh/EGh8EEQhoDZhuDVQh9D1iGDyQiNEAhaFQQhaFPE1gYQAzgEAwgHQAFgBAFAA");
	this.shape_2.setTransform(259.1,273.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(20,1,1).p("AJ033QikhtilElQilEmiAEHQh+EGh9EEQhoDZhuDVQh9D1iGDyQiNEAhaFQQhaFPE1gYQE1gYDpiHQDoiHDZipQDZioCyiqQCxiqCJiK");
	this.shape_3.setTransform(276.2,273.8);

	var maskedShapeInstanceList = [this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2}]},316).to({state:[{t:this.shape_3}]},13).wait(171));

	// Layer 8 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_185 = new cjs.Graphics().p("AUMIsIAbg2IE/CeIgbA2g");
	var mask_2_graphics_186 = new cjs.Graphics().p("AixgoIAkhLIE/CcIglBLg");
	var mask_2_graphics_187 = new cjs.Graphics().p("Ai2geIAuhfIE/CcIgvBfg");
	var mask_2_graphics_188 = new cjs.Graphics().p("Ai7gUIA4hzIE/CcIg5Bzg");
	var mask_2_graphics_189 = new cjs.Graphics().p("AjAgKIBDiHIE+CcIhDCHg");
	var mask_2_graphics_190 = new cjs.Graphics().p("AjFAAIBNicIE+CdIhNCcg");
	var mask_2_graphics_191 = new cjs.Graphics().p("AjKAKIBXiwIE+CdIhXCwg");
	var mask_2_graphics_192 = new cjs.Graphics().p("AjPAUIBhjEIE+CdIhhDEg");
	var mask_2_graphics_193 = new cjs.Graphics().p("AjUAeIBrjYIE+CdIhrDYg");
	var mask_2_graphics_194 = new cjs.Graphics().p("AjZApIB1juIE+CeIh1Dsg");
	var mask_2_graphics_195 = new cjs.Graphics().p("AjeAzIB/kCIE+CdIh/ECg");
	var mask_2_graphics_196 = new cjs.Graphics().p("AjjA9ICJkWIE+CdIiJEWg");
	var mask_2_graphics_197 = new cjs.Graphics().p("AjpBHICUkqIE/CdIiUEqg");
	var mask_2_graphics_198 = new cjs.Graphics().p("AjuBRICek+IE/CdIieE+g");
	var mask_2_graphics_199 = new cjs.Graphics().p("AjyBcICnlUIE/CeIioFSg");
	var mask_2_graphics_200 = new cjs.Graphics().p("Aj3BmICxloIE/CdIiyFog");
	var mask_2_graphics_201 = new cjs.Graphics().p("Aj8BwIC7l8IE/CdIi8F8g");
	var mask_2_graphics_202 = new cjs.Graphics().p("AkBB6IDFmQIE/CdIjGGQg");
	var mask_2_graphics_203 = new cjs.Graphics().p("AkHCFIDQmmIE/CeIjQGkg");
	var mask_2_graphics_204 = new cjs.Graphics().p("AkMCOIDam5IE/CeIjaG5g");
	var mask_2_graphics_205 = new cjs.Graphics().p("AkRCZIDknOIE/CdIjkHOg");
	var mask_2_graphics_206 = new cjs.Graphics().p("AkWCjIDuniIE/CdIjuHig");
	var mask_2_graphics_207 = new cjs.Graphics().p("AkbCtID4n2IE/CdIj4H2g");
	var mask_2_graphics_208 = new cjs.Graphics().p("AkgC3IECoLIE/CeIkCILg");
	var mask_2_graphics_209 = new cjs.Graphics().p("AklDCIEMogIE/CdIkMIgg");
	var mask_2_graphics_210 = new cjs.Graphics().p("AkqDMIEWo0IE/CdIkWI0g");
	var mask_2_graphics_211 = new cjs.Graphics().p("AkvDWIEgpIIE/CdIkgJIg");
	var mask_2_graphics_212 = new cjs.Graphics().p("Ak0DgIEqpcIE/CdIkqJcg");
	var mask_2_graphics_213 = new cjs.Graphics().p("Ak5DrIE0pyIE/CeIk1Jwg");
	var mask_2_graphics_214 = new cjs.Graphics().p("Ak+D1IE+qGIE/CdIk/KGg");
	var mask_2_graphics_215 = new cjs.Graphics().p("AlDD/IFHqaIFACdIlIKag");
	var mask_2_graphics_216 = new cjs.Graphics().p("AlIEJIFRquIFACdIlRKug");
	var mask_2_graphics_217 = new cjs.Graphics().p("AlNEUIFbrEIFACeIlbLCg");
	var mask_2_graphics_218 = new cjs.Graphics().p("AlSEdIFlrXIFACeIllLWg");
	var mask_2_graphics_219 = new cjs.Graphics().p("AlXEoIFvrsIFACdIlvLsg");
	var mask_2_graphics_220 = new cjs.Graphics().p("AlcEyIF6sAIE/CdIl6MAg");
	var mask_2_graphics_221 = new cjs.Graphics().p("AlhE8IGEsUIE/CdImEMUg");
	var mask_2_graphics_222 = new cjs.Graphics().p("AlmFGIGOspIE/CeImOMpg");
	var mask_2_graphics_223 = new cjs.Graphics().p("AlrFRIGYs+IE/CdImYM+g");
	var mask_2_graphics_224 = new cjs.Graphics().p("AlwFbIGitSIE/CdImiNSg");
	var mask_2_graphics_225 = new cjs.Graphics().p("Al1FlIGstmIE/CdImsNmg");
	var mask_2_graphics_226 = new cjs.Graphics().p("Al6FvIG2t6IE/CdIm2N6g");
	var mask_2_graphics_227 = new cjs.Graphics().p("Al/F5IHAuPIE/CeInAOPg");
	var mask_2_graphics_228 = new cjs.Graphics().p("AmFGEIHLukIFACdInLOkg");
	var mask_2_graphics_229 = new cjs.Graphics().p("AmKGOIHVu4IFACdInVO4g");
	var mask_2_graphics_230 = new cjs.Graphics().p("AmPGYIHfvMIFACdInfPMg");
	var mask_2_graphics_231 = new cjs.Graphics().p("AmUGjIHpviIFACeInpPgg");
	var mask_2_graphics_232 = new cjs.Graphics().p("AmZGtIHzv2IFACdInzP2g");
	var mask_2_graphics_233 = new cjs.Graphics().p("AmdG3IH8wKIFACdIn9QKg");
	var mask_2_graphics_234 = new cjs.Graphics().p("AmiHBIIGweIFACdIoHQeg");
	var mask_2_graphics_235 = new cjs.Graphics().p("AmnHLIIQwyIFACdIoRQyg");
	var mask_2_graphics_236 = new cjs.Graphics().p("AmtHWIIbxIIFACeIobRGg");
	var mask_2_graphics_237 = new cjs.Graphics().p("AmyHgIIlxcIFACdIolRcg");
	var mask_2_graphics_238 = new cjs.Graphics().p("Am3HqIIvxwIFACdIovRwg");
	var mask_2_graphics_239 = new cjs.Graphics().p("Am8H0II5yEIFACdIo5SEg");
	var mask_2_graphics_240 = new cjs.Graphics().p("AnBH+IJDyYIFACdIpDSYg");
	var mask_2_graphics_241 = new cjs.Graphics().p("AnGIIIJNytIFACeIpNStg");
	var mask_2_graphics_242 = new cjs.Graphics().p("AnLITIJXzCIFACdIpXTCg");
	var mask_2_graphics_243 = new cjs.Graphics().p("AnQIdIJhzWIFACdIphTWg");
	var mask_2_graphics_244 = new cjs.Graphics().p("AnVInIJrzqIFACdIprTqg");
	var mask_2_graphics_245 = new cjs.Graphics().p("AnaIxIJ1z/IFACeIp2T/g");
	var mask_2_graphics_246 = new cjs.Graphics().p("AnfI8IJ/0UIFACdIqAUUg");
	var mask_2_graphics_247 = new cjs.Graphics().p("AnkJGIKJ0oIFACdIqKUog");
	var mask_2_graphics_248 = new cjs.Graphics().p("AnpJQIKT08IFACdIqUU8g");
	var mask_2_graphics_249 = new cjs.Graphics().p("AnuJaIKd1QIFACdIqeVQg");
	var mask_2_graphics_250 = new cjs.Graphics().p("AnzJlIKn1mIFACeIqnVkg");
	var mask_2_graphics_251 = new cjs.Graphics().p("An4JuIKy14IE/CcIqyV6g");
	var mask_2_graphics_252 = new cjs.Graphics().p("An9J5IK82OIE/CdIq8WOg");
	var mask_2_graphics_253 = new cjs.Graphics().p("AoCKDILG2iIE/CdIrGWig");
	var mask_2_graphics_254 = new cjs.Graphics().p("AoHKNILQ22IE/CdIrQW2g");
	var mask_2_graphics_255 = new cjs.Graphics().p("AoMKXILa3KIE/CdIraXKg");
	var mask_2_graphics_256 = new cjs.Graphics().p("AoRKiILk3fIE/CcIrkXfg");
	var mask_2_graphics_257 = new cjs.Graphics().p("AoWKsILu30IE/CdIruX0g");
	var mask_2_graphics_258 = new cjs.Graphics().p("AobK2IL44IIE/CdIr4YIg");
	var mask_2_graphics_259 = new cjs.Graphics().p("AogLAIMC4cIFACdIsDYcg");
	var mask_2_graphics_260 = new cjs.Graphics().p("AolLLIMM4xIFACcIsNYxg");
	var mask_2_graphics_261 = new cjs.Graphics().p("AoqLVIMW5GIFACdIsXZGg");
	var mask_2_graphics_262 = new cjs.Graphics().p("AowLfIMh5aIFACdIshZag");
	var mask_2_graphics_263 = new cjs.Graphics().p("Ao1LpIMr5uIFACdIsrZug");
	var mask_2_graphics_264 = new cjs.Graphics().p("Ao6LzIM16CIFACdIs1aCg");
	var mask_2_graphics_265 = new cjs.Graphics().p("Ao/L9IM/6WIFACcIs/aYg");
	var mask_2_graphics_266 = new cjs.Graphics().p("ApEMIINJ6sIFACdItJasg");
	var mask_2_graphics_267 = new cjs.Graphics().p("ApJMSINT7AIFACdItTbAg");
	var mask_2_graphics_268 = new cjs.Graphics().p("ApOMcINd7UIFACdItdbUg");
	var mask_2_graphics_269 = new cjs.Graphics().p("ApTMmINn7oIFACdItnbog");
	var mask_2_graphics_270 = new cjs.Graphics().p("ApYMxINx79IFACcItxb+g");
	var mask_2_graphics_271 = new cjs.Graphics().p("ApdM7IN78SIFACdIt7cSg");
	var mask_2_graphics_272 = new cjs.Graphics().p("ApiNFIOF8mIFACdIuFcmg");
	var mask_2_graphics_273 = new cjs.Graphics().p("ApnNPIOP86IFACdIuPc6g");
	var mask_2_graphics_274 = new cjs.Graphics().p("ApsNaIOZ9PIFACcIuadPg");
	var mask_2_graphics_275 = new cjs.Graphics().p("ApxNkIOj9kIFACdIujdkg");
	var mask_2_graphics_276 = new cjs.Graphics().p("Ap2NuIOt94IFACdIutd4g");
	var mask_2_graphics_277 = new cjs.Graphics().p("Ap7N4IO3+MIFACdIu3eMg");
	var mask_2_graphics_278 = new cjs.Graphics().p("AqAOCIPB+gIFACdIvBegg");
	var mask_2_graphics_279 = new cjs.Graphics().p("AqFOMIPL+0IFACcIvMe1g");
	var mask_2_graphics_280 = new cjs.Graphics().p("AqKOXIPV/KIFACdIvWfKg");
	var mask_2_graphics_281 = new cjs.Graphics().p("AqPOhIPf/eIFACdIvgfeg");
	var mask_2_graphics_282 = new cjs.Graphics().p("AqUOrIPq/yIE/CdIvqfyg");
	var mask_2_graphics_283 = new cjs.Graphics().p("AqZO1MAP0ggGIE/CcMgP0AgIg");
	var mask_2_graphics_284 = new cjs.Graphics().p("AqeO/MAP+ggaIE/CcMgP+Agcg");
	var mask_2_graphics_285 = new cjs.Graphics().p("AqjPKMAQIggwIE/CdMgQIAgwg");
	var mask_2_graphics_286 = new cjs.Graphics().p("AqoPUMAQSghEIE/CdMgQSAhEg");
	var mask_2_graphics_287 = new cjs.Graphics().p("AqtPeMAQcghYIE/CdMgQcAhYg");
	var mask_2_graphics_288 = new cjs.Graphics().p("AqyPoMAQmghsIE/CcMgQmAhug");
	var mask_2_graphics_289 = new cjs.Graphics().p("Aq4PzMAQxgiCIFACdMgQxAiCg");
	var mask_2_graphics_290 = new cjs.Graphics().p("Aq9P9MAQ7giWIFACdMgQ7AiWg");
	var mask_2_graphics_291 = new cjs.Graphics().p("ArBQHMAREgiqIFACdMgRFAiqg");
	var mask_2_graphics_292 = new cjs.Graphics().p("ArGQRMAROgi+IFACdMgRPAi+g");
	var mask_2_graphics_293 = new cjs.Graphics().p("ArLQcMARYgjTIFACcMgRZAjTg");
	var mask_2_graphics_294 = new cjs.Graphics().p("ArQQmMARigjoIFACdMgRjAjog");
	var mask_2_graphics_295 = new cjs.Graphics().p("ArVQwMARsgj8IFACdMgRtAj8g");
	var mask_2_graphics_296 = new cjs.Graphics().p("ArbQ6MAR3gkQIFACdMgR3AkQg");
	var mask_2_graphics_297 = new cjs.Graphics().p("ArgRFMASBgklIFACcMgSBAklg");
	var mask_2_graphics_298 = new cjs.Graphics().p("ArlROMASLgk4IFACcMgSLAk6g");
	var mask_2_graphics_299 = new cjs.Graphics().p("ArqRZMASVglOIFACdMgSVAlOg");
	var mask_2_graphics_300 = new cjs.Graphics().p("ArvRjMASfgliIFACdMgSfAlig");
	var mask_2_graphics_301 = new cjs.Graphics().p("Ar0RtMASpgl2IFACdMgSpAl2g");
	var mask_2_graphics_302 = new cjs.Graphics().p("Ar5R3MASzgmKIFACcMgSzAmMg");
	var mask_2_graphics_303 = new cjs.Graphics().p("Ar+SCMAS9gmgIFACdMgS9Amgg");
	var mask_2_graphics_304 = new cjs.Graphics().p("AsDSMMATHgm0IFACdMgTHAm0g");
	var mask_2_graphics_305 = new cjs.Graphics().p("AsISWMATRgnIIFACdMgTSAnIg");
	var mask_2_graphics_306 = new cjs.Graphics().p("AsNSgMATbgncIFACdMgTcAncg");
	var mask_2_graphics_307 = new cjs.Graphics().p("AsSSrMATlgnxIFACcMgTmAnxg");
	var mask_2_graphics_308 = new cjs.Graphics().p("AsXS1MATvgoGIFACdMgTwAoGg");
	var mask_2_graphics_309 = new cjs.Graphics().p("AscS/MAT5goaIFACdMgT5Aoag");
	var mask_2_graphics_310 = new cjs.Graphics().p("AshTJMAUDgouIFACdMgUDAoug");
	var mask_2_graphics_311 = new cjs.Graphics().p("AsmTUMAUNgpDIFACcMgUNApDg");
	var mask_2_graphics_312 = new cjs.Graphics().p("AsrTeMAUXgpYIFACdMgUXApYg");
	var mask_2_graphics_313 = new cjs.Graphics().p("AswToMAUigpsIE/CdMgUiApsg");
	var mask_2_graphics_314 = new cjs.Graphics().p("As1TyMAUsgqAIE/CdMgUsAqAg");
	var mask_2_graphics_315 = new cjs.Graphics().p("As6T8MAU2gqUIE/CdMgU2AqUg");
	var mask_2_graphics_316 = new cjs.Graphics().p("AgZdnMAVAgqpIE/CdMgVBAqpg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(185).to({graphics:mask_2_graphics_185,x:163.8,y:71.4}).wait(1).to({graphics:mask_2_graphics_186,x:309.8,y:133.2}).wait(1).to({graphics:mask_2_graphics_187,x:309.3,y:134.2}).wait(1).to({graphics:mask_2_graphics_188,x:308.8,y:135.2}).wait(1).to({graphics:mask_2_graphics_189,x:308.3,y:136.2}).wait(1).to({graphics:mask_2_graphics_190,x:307.8,y:137.3}).wait(1).to({graphics:mask_2_graphics_191,x:307.3,y:138.3}).wait(1).to({graphics:mask_2_graphics_192,x:306.8,y:139.3}).wait(1).to({graphics:mask_2_graphics_193,x:306.3,y:140.3}).wait(1).to({graphics:mask_2_graphics_194,x:305.8,y:141.4}).wait(1).to({graphics:mask_2_graphics_195,x:305.3,y:142.4}).wait(1).to({graphics:mask_2_graphics_196,x:304.8,y:143.4}).wait(1).to({graphics:mask_2_graphics_197,x:304.3,y:144.4}).wait(1).to({graphics:mask_2_graphics_198,x:303.8,y:145.4}).wait(1).to({graphics:mask_2_graphics_199,x:303.3,y:146.5}).wait(1).to({graphics:mask_2_graphics_200,x:302.8,y:147.5}).wait(1).to({graphics:mask_2_graphics_201,x:302.3,y:148.5}).wait(1).to({graphics:mask_2_graphics_202,x:301.8,y:149.5}).wait(1).to({graphics:mask_2_graphics_203,x:301.3,y:150.6}).wait(1).to({graphics:mask_2_graphics_204,x:300.8,y:151.6}).wait(1).to({graphics:mask_2_graphics_205,x:300.2,y:152.6}).wait(1).to({graphics:mask_2_graphics_206,x:299.7,y:153.6}).wait(1).to({graphics:mask_2_graphics_207,x:299.2,y:154.6}).wait(1).to({graphics:mask_2_graphics_208,x:298.7,y:155.7}).wait(1).to({graphics:mask_2_graphics_209,x:298.2,y:156.7}).wait(1).to({graphics:mask_2_graphics_210,x:297.7,y:157.7}).wait(1).to({graphics:mask_2_graphics_211,x:297.2,y:158.7}).wait(1).to({graphics:mask_2_graphics_212,x:296.7,y:159.7}).wait(1).to({graphics:mask_2_graphics_213,x:296.2,y:160.8}).wait(1).to({graphics:mask_2_graphics_214,x:295.7,y:161.8}).wait(1).to({graphics:mask_2_graphics_215,x:295.2,y:162.8}).wait(1).to({graphics:mask_2_graphics_216,x:294.7,y:163.8}).wait(1).to({graphics:mask_2_graphics_217,x:294.2,y:164.9}).wait(1).to({graphics:mask_2_graphics_218,x:293.7,y:165.9}).wait(1).to({graphics:mask_2_graphics_219,x:293.2,y:166.9}).wait(1).to({graphics:mask_2_graphics_220,x:292.7,y:167.9}).wait(1).to({graphics:mask_2_graphics_221,x:292.2,y:168.9}).wait(1).to({graphics:mask_2_graphics_222,x:291.7,y:170}).wait(1).to({graphics:mask_2_graphics_223,x:291.2,y:171}).wait(1).to({graphics:mask_2_graphics_224,x:290.7,y:172}).wait(1).to({graphics:mask_2_graphics_225,x:290.2,y:173}).wait(1).to({graphics:mask_2_graphics_226,x:289.7,y:174}).wait(1).to({graphics:mask_2_graphics_227,x:289.2,y:175.1}).wait(1).to({graphics:mask_2_graphics_228,x:288.7,y:176.1}).wait(1).to({graphics:mask_2_graphics_229,x:288.2,y:177.1}).wait(1).to({graphics:mask_2_graphics_230,x:287.7,y:178.1}).wait(1).to({graphics:mask_2_graphics_231,x:287.2,y:179.2}).wait(1).to({graphics:mask_2_graphics_232,x:286.7,y:180.2}).wait(1).to({graphics:mask_2_graphics_233,x:286.2,y:181.2}).wait(1).to({graphics:mask_2_graphics_234,x:285.7,y:182.2}).wait(1).to({graphics:mask_2_graphics_235,x:285.2,y:183.2}).wait(1).to({graphics:mask_2_graphics_236,x:284.6,y:184.3}).wait(1).to({graphics:mask_2_graphics_237,x:284.1,y:185.3}).wait(1).to({graphics:mask_2_graphics_238,x:283.6,y:186.3}).wait(1).to({graphics:mask_2_graphics_239,x:283.1,y:187.3}).wait(1).to({graphics:mask_2_graphics_240,x:282.6,y:188.3}).wait(1).to({graphics:mask_2_graphics_241,x:282.1,y:189.4}).wait(1).to({graphics:mask_2_graphics_242,x:281.6,y:190.4}).wait(1).to({graphics:mask_2_graphics_243,x:281.1,y:191.4}).wait(1).to({graphics:mask_2_graphics_244,x:280.6,y:192.4}).wait(1).to({graphics:mask_2_graphics_245,x:280.1,y:193.5}).wait(1).to({graphics:mask_2_graphics_246,x:279.6,y:194.5}).wait(1).to({graphics:mask_2_graphics_247,x:279.1,y:195.5}).wait(1).to({graphics:mask_2_graphics_248,x:278.6,y:196.5}).wait(1).to({graphics:mask_2_graphics_249,x:278.1,y:197.5}).wait(1).to({graphics:mask_2_graphics_250,x:277.6,y:198.6}).wait(1).to({graphics:mask_2_graphics_251,x:277.1,y:199.6}).wait(1).to({graphics:mask_2_graphics_252,x:276.6,y:200.6}).wait(1).to({graphics:mask_2_graphics_253,x:276.1,y:201.7}).wait(1).to({graphics:mask_2_graphics_254,x:275.6,y:202.7}).wait(1).to({graphics:mask_2_graphics_255,x:275.1,y:203.7}).wait(1).to({graphics:mask_2_graphics_256,x:274.6,y:204.7}).wait(1).to({graphics:mask_2_graphics_257,x:274.1,y:205.7}).wait(1).to({graphics:mask_2_graphics_258,x:273.6,y:206.8}).wait(1).to({graphics:mask_2_graphics_259,x:273.1,y:207.8}).wait(1).to({graphics:mask_2_graphics_260,x:272.6,y:208.8}).wait(1).to({graphics:mask_2_graphics_261,x:272.1,y:209.8}).wait(1).to({graphics:mask_2_graphics_262,x:271.6,y:210.8}).wait(1).to({graphics:mask_2_graphics_263,x:271.1,y:211.9}).wait(1).to({graphics:mask_2_graphics_264,x:270.6,y:212.9}).wait(1).to({graphics:mask_2_graphics_265,x:270.1,y:213.9}).wait(1).to({graphics:mask_2_graphics_266,x:269.5,y:214.9}).wait(1).to({graphics:mask_2_graphics_267,x:269,y:216}).wait(1).to({graphics:mask_2_graphics_268,x:268.5,y:217}).wait(1).to({graphics:mask_2_graphics_269,x:268,y:218}).wait(1).to({graphics:mask_2_graphics_270,x:267.5,y:219}).wait(1).to({graphics:mask_2_graphics_271,x:267,y:220}).wait(1).to({graphics:mask_2_graphics_272,x:266.5,y:221.1}).wait(1).to({graphics:mask_2_graphics_273,x:266,y:222.1}).wait(1).to({graphics:mask_2_graphics_274,x:265.5,y:223.1}).wait(1).to({graphics:mask_2_graphics_275,x:265,y:224.1}).wait(1).to({graphics:mask_2_graphics_276,x:264.5,y:225.1}).wait(1).to({graphics:mask_2_graphics_277,x:264,y:226.2}).wait(1).to({graphics:mask_2_graphics_278,x:263.5,y:227.2}).wait(1).to({graphics:mask_2_graphics_279,x:263,y:228.2}).wait(1).to({graphics:mask_2_graphics_280,x:262.5,y:229.2}).wait(1).to({graphics:mask_2_graphics_281,x:262,y:230.3}).wait(1).to({graphics:mask_2_graphics_282,x:261.5,y:231.3}).wait(1).to({graphics:mask_2_graphics_283,x:261,y:232.3}).wait(1).to({graphics:mask_2_graphics_284,x:260.5,y:233.3}).wait(1).to({graphics:mask_2_graphics_285,x:260,y:234.3}).wait(1).to({graphics:mask_2_graphics_286,x:259.5,y:235.4}).wait(1).to({graphics:mask_2_graphics_287,x:259,y:236.4}).wait(1).to({graphics:mask_2_graphics_288,x:258.5,y:237.4}).wait(1).to({graphics:mask_2_graphics_289,x:258,y:238.4}).wait(1).to({graphics:mask_2_graphics_290,x:257.5,y:239.5}).wait(1).to({graphics:mask_2_graphics_291,x:257,y:240.5}).wait(1).to({graphics:mask_2_graphics_292,x:256.5,y:241.5}).wait(1).to({graphics:mask_2_graphics_293,x:256,y:242.5}).wait(1).to({graphics:mask_2_graphics_294,x:255.5,y:243.5}).wait(1).to({graphics:mask_2_graphics_295,x:255,y:244.6}).wait(1).to({graphics:mask_2_graphics_296,x:254.5,y:245.6}).wait(1).to({graphics:mask_2_graphics_297,x:253.9,y:246.6}).wait(1).to({graphics:mask_2_graphics_298,x:253.4,y:247.6}).wait(1).to({graphics:mask_2_graphics_299,x:252.9,y:248.6}).wait(1).to({graphics:mask_2_graphics_300,x:252.4,y:249.7}).wait(1).to({graphics:mask_2_graphics_301,x:251.9,y:250.7}).wait(1).to({graphics:mask_2_graphics_302,x:251.4,y:251.7}).wait(1).to({graphics:mask_2_graphics_303,x:250.9,y:252.7}).wait(1).to({graphics:mask_2_graphics_304,x:250.4,y:253.8}).wait(1).to({graphics:mask_2_graphics_305,x:249.9,y:254.8}).wait(1).to({graphics:mask_2_graphics_306,x:249.4,y:255.8}).wait(1).to({graphics:mask_2_graphics_307,x:248.9,y:256.8}).wait(1).to({graphics:mask_2_graphics_308,x:248.4,y:257.8}).wait(1).to({graphics:mask_2_graphics_309,x:247.9,y:258.9}).wait(1).to({graphics:mask_2_graphics_310,x:247.4,y:259.9}).wait(1).to({graphics:mask_2_graphics_311,x:246.9,y:260.9}).wait(1).to({graphics:mask_2_graphics_312,x:246.4,y:261.9}).wait(1).to({graphics:mask_2_graphics_313,x:245.9,y:262.9}).wait(1).to({graphics:mask_2_graphics_314,x:245.4,y:264}).wait(1).to({graphics:mask_2_graphics_315,x:244.9,y:265}).wait(1).to({graphics:mask_2_graphics_316,x:163.8,y:205.2}).wait(184));

	// Layer 7
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(20,1,1).p("AJ033QikhtilElQilEmiAEHQh+EGh9EEQhoDZhuDVQh9D1iGDyQiNEAhaFQQhaFPE1gYQE1gYDpiHQDoiHDZipQDZioCyiqQCxiqCJiK");
	this.shape_4.setTransform(276.2,273.8);
	this.shape_4._off = true;

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(185).to({_off:false},0).wait(315));

	// Layer 6 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_170 = new cjs.Graphics().p("AU7jBQEHACC9C5QDBC9ACEOQACEOi9DBQi6C9kHAGg");
	var mask_3_graphics_171 = new cjs.Graphics().p("AUkjAQEHgIDDCzQDHC2AMENQAMEOi2DIQizDDkHAPg");
	var mask_3_graphics_172 = new cjs.Graphics().p("AUNi9QEGgSDJCsQDOCuAWEOQAVENivDNQisDKkFAZg");
	var mask_3_graphics_173 = new cjs.Graphics().p("AT1i6QEGgaDPCkQDUCnAfEMQAfEMinDUQilDPkEAjg");
	var mask_3_graphics_174 = new cjs.Graphics().p("ATei1QEEgkDWCdQDZCfApELQApELigDZQidDWkDArg");
	var mask_3_graphics_175 = new cjs.Graphics().p("ATHivQEDgtDaCVQDgCXAyEKQAyEJiYDfQiVDbkBA0g");
	var mask_3_graphics_176 = new cjs.Graphics().p("ASwinQEBg2DgCMQDkCPA8EIQA8EHiQDkQiNDgkAA+g");
	var mask_3_graphics_177 = new cjs.Graphics().p("ASZifQD/g/DlCEQDpCHBFEFQBFEFiHDpQiFDlj9BHg");
	var mask_3_graphics_178 = new cjs.Graphics().p("ARziOQD6hPDtB2QDxB5BVEAQBUEBh5DxQh2Dsj5BWg");
	var mask_3_graphics_179 = new cjs.Graphics().p("ARNh6QD1heD0BoQD4BrBkD5QBkD7hqD4QhoDzjzBlg");
	var mask_3_graphics_180 = new cjs.Graphics().p("AQohiQDwhtD5BZQD+BbBzD0QB0D0hcD+QhZD5jsB0g");
	var mask_3_graphics_181 = new cjs.Graphics().p("AQFhHQDoh7D+BJQEDBMCCDsQCCDthLEDQhKD+jlCCg");
	var mask_3_graphics_182 = new cjs.Graphics().p("APigpQDhiJECA6QEHA8CQDjQCRDlg8EHQg6ECjdCQg");
	var mask_3_graphics_183 = new cjs.Graphics().p("APBgIQDYiXEFArQELAsCeDaQCdDbgrELQgrEFjTCdg");
	var mask_3_graphics_184 = new cjs.Graphics().p("AOiAbQDOiiEHAaQENAcCrDQQCrDRgcENQgaEHjKCqg");
	var mask_3_graphics_185 = new cjs.Graphics().p("AOEBCQDEiuEIAKQEOALC4DGQC3DHgLENQgLEJi+C1g");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(170).to({graphics:mask_3_graphics_170,x:198.6,y:111.1}).wait(1).to({graphics:mask_3_graphics_171,x:198.6,y:111}).wait(1).to({graphics:mask_3_graphics_172,x:198.6,y:111}).wait(1).to({graphics:mask_3_graphics_173,x:198.6,y:110.9}).wait(1).to({graphics:mask_3_graphics_174,x:198.6,y:110.7}).wait(1).to({graphics:mask_3_graphics_175,x:198.6,y:110.5}).wait(1).to({graphics:mask_3_graphics_176,x:198.6,y:110.3}).wait(1).to({graphics:mask_3_graphics_177,x:198.6,y:110}).wait(1).to({graphics:mask_3_graphics_178,x:198.7,y:109.4}).wait(1).to({graphics:mask_3_graphics_179,x:198.7,y:108.7}).wait(1).to({graphics:mask_3_graphics_180,x:198.7,y:108}).wait(1).to({graphics:mask_3_graphics_181,x:198.7,y:107.1}).wait(1).to({graphics:mask_3_graphics_182,x:198.6,y:106.1}).wait(1).to({graphics:mask_3_graphics_183,x:198.6,y:105}).wait(1).to({graphics:mask_3_graphics_184,x:198.6,y:103.8}).wait(1).to({graphics:mask_3_graphics_185,x:198.7,y:102.5}).wait(315));

	// Layer 5
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(20,1,1).p("AJ033QikhtilElQilEmiAEHQh+EGh9EEQhoDZhuDVQh9D1iGDyQiNEAhaFQQhaFPE1gYQE1gYDpiHQDoiHDZipQDZioCyiqQCxiqCJiK");
	this.shape_5.setTransform(276.2,273.8);
	this.shape_5._off = true;

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(170).to({_off:false},0).wait(330));

	// Layer 13
	this.instance_2 = new lib.ar1("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(116.3,264,1,1,0,0,0,-0.8,0.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(491));

	// Layer 4 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_140 = new cjs.Graphics().p("APUNfQjUiogekNQgekHChjPIP9MsQinDLkHAeQgpAFgoAAQjcAAiziPg");
	var mask_4_graphics_141 = new cjs.Graphics().p("AP9OMQjmiNg/kHQg+kCCHjiIRYKrQiNDekCA+QhQAThOAAQivAAighig");
	var mask_4_graphics_142 = new cjs.Graphics().p("AQwOxQj2hwhfj9Qhcj4BpjxISjIeQhwDtj4BdQh0ArhyAAQiIAAiFg9g");
	var mask_4_graphics_143 = new cjs.Graphics().p("ARqPNQkBhRh9jwQh6jrBMj8ITcGKQhTD5jrB6QiRBMiXAAQhkAAhmghg");
	var mask_4_graphics_144 = new cjs.Graphics().p("AStPhQkKgxiZjfQiWjaAtkEIUCDvQgzECjaCWQipBzjBAAQg+AAhBgMg");
	var mask_4_graphics_145 = new cjs.Graphics().p("AT2PrQkOgRizjKQivjGAMkHIUWBQQgUEHjGCvQi5CkjyAAIgtgCg");
	var mask_4_graphics_146 = new cjs.Graphics().p("ANsNIQjGivgUkGIUWhPQAMEGivDHQizDKkOAQIgtACQjyAAi5ilg");
	var mask_4_graphics_147 = new cjs.Graphics().p("AOqN5QjbiWgzkCIUDjtQAsEDiWDbQiZDekKAxQhBAMg+AAQjBAAioh0g");
	var mask_4_graphics_148 = new cjs.Graphics().p("APtOiQjrh6hTj6ITdmIQBLD8h6DrQh9DwkCBRQhlAghjAAQiYAAiRhMg");
	var mask_4_graphics_149 = new cjs.Graphics().p("AQ1PDQj4hdhxjuISkocQBpDxhcD3QhfD9j2BwQiFA9iIAAQhyAAh0grg");
	var mask_4_graphics_150 = new cjs.Graphics().p("ASBPbQkCg+iMjfIRZqpQCGDig+ECQhAEGjmCOQifBhivAAQhOAAhRgTg");
	var mask_4_graphics_151 = new cjs.Graphics().p("ATPPpQkHgeimjLIP9srQChDPgeEHQgfENjUCoQizCOjbAAQgoAAgqgFg");
	var mask_4_graphics_152 = new cjs.Graphics().p("ANYM7IOTuhQC4C6ADEIQACEPi+DAQi9DBkOACIgHAAQkEAAi8izg");
	var mask_4_graphics_153 = new cjs.Graphics().p("AOUNuIMbwKQDOCiAjEHQAiEMikDWQilDWkMAjQgvAHgtAAQjQAAitiBg");
	var mask_4_graphics_154 = new cjs.Graphics().p("AQdO9IIJysQDwBtBhD1QBiD8hsD3QhrD4j8BjQh4Avh4AAQh9AAh8gzg");
	var mask_4_graphics_155 = new cjs.Graphics().p("AS2PpIDY0GQEDAwCaDXQCdDbgtELQgtEKjcCdQirB6jIAAQgzAAg2gIg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(140).to({graphics:mask_4_graphics_140,x:189,y:100.6}).wait(1).to({graphics:mask_4_graphics_141,x:191.3,y:100.6}).wait(1).to({graphics:mask_4_graphics_142,x:193.1,y:100.6}).wait(1).to({graphics:mask_4_graphics_143,x:194.6,y:100.6}).wait(1).to({graphics:mask_4_graphics_144,x:195.5,y:100.5}).wait(1).to({graphics:mask_4_graphics_145,x:196,y:100.5}).wait(1).to({graphics:mask_4_graphics_146,x:196.1,y:100.5}).wait(1).to({graphics:mask_4_graphics_147,x:196.1,y:100.5}).wait(1).to({graphics:mask_4_graphics_148,x:196.1,y:100.6}).wait(1).to({graphics:mask_4_graphics_149,x:196,y:100.6}).wait(1).to({graphics:mask_4_graphics_150,x:195.9,y:100.6}).wait(1).to({graphics:mask_4_graphics_151,x:195.8,y:100.6}).wait(1).to({graphics:mask_4_graphics_152,x:195.8,y:100.6}).wait(1).to({graphics:mask_4_graphics_153,x:195.8,y:100.7}).wait(1).to({graphics:mask_4_graphics_154,x:195.8,y:100.8}).wait(1).to({graphics:mask_4_graphics_155,x:195.7,y:100.9}).wait(345));

	// Layer 3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(20,1,1).p("AtDSSQFJkqFklkQFiljDSkNQDRkNBsjYQBsjYgDiUQgDiTgqhB");
	this.shape_6.setTransform(260.6,238);
	this.shape_6._off = true;

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(140).to({_off:false},0).wait(360));

	// Layer 1 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_9 = new cjs.Graphics().p("An6jpICxjXINEKqIixDXg");
	var mask_5_graphics_10 = new cjs.Graphics().p("AoAjhIC9jmINEKoIi9Dng");
	var mask_5_graphics_11 = new cjs.Graphics().p("AoHjaIDKj1INFKnIjLD3g");
	var mask_5_graphics_12 = new cjs.Graphics().p("AoOjTIDXkDINFKlIjYEIg");
	var mask_5_graphics_13 = new cjs.Graphics().p("AoUjMIDjkRINGKjIjlEYg");
	var mask_5_graphics_14 = new cjs.Graphics().p("AoajEIDwkgINGKhIjzEog");
	var mask_5_graphics_15 = new cjs.Graphics().p("Aohi9ID9kvINGKgIj/E5g");
	var mask_5_graphics_16 = new cjs.Graphics().p("Aooi2IEKk9INHKfIkNFIg");
	var mask_5_graphics_17 = new cjs.Graphics().p("AouivIEWlLINHKdIkZFYg");
	var mask_5_graphics_18 = new cjs.Graphics().p("Ao1inIEklaINHKbIknFog");
	var mask_5_graphics_19 = new cjs.Graphics().p("Ao7igIEwlpINHKaIkzF4g");
	var mask_5_graphics_20 = new cjs.Graphics().p("ApCiZIE9l3INIKZIlBGIg");
	var mask_5_graphics_21 = new cjs.Graphics().p("ApIiRIFJmGINJKWIlOGZg");
	var mask_5_graphics_22 = new cjs.Graphics().p("ApPiKIFWmUINJKVIlbGog");
	var mask_5_graphics_23 = new cjs.Graphics().p("ApWiDIFkmiINJKTIlpG4g");
	var mask_5_graphics_24 = new cjs.Graphics().p("Apch8IFwmxINJKSIl1HJg");
	var mask_5_graphics_25 = new cjs.Graphics().p("Apjh1IF9m/INKKRImDHYg");
	var mask_5_graphics_26 = new cjs.Graphics().p("ApqhtIGKnOINLKPImRHog");
	var mask_5_graphics_27 = new cjs.Graphics().p("ApwhmIGXncINKKNImdH5g");
	var mask_5_graphics_28 = new cjs.Graphics().p("Ap3hfIGknrINLKMImrIJg");
	var mask_5_graphics_29 = new cjs.Graphics().p("Ap9hYIGwn5INLKKIm3IZg");
	var mask_5_graphics_30 = new cjs.Graphics().p("AqEhQIG9oIINMKIInFIpg");
	var mask_5_graphics_31 = new cjs.Graphics().p("AqLhJIHKoWINNKHInTI4g");
	var mask_5_graphics_32 = new cjs.Graphics().p("AqRhCIHXolINMKGInfJJg");
	var mask_5_graphics_33 = new cjs.Graphics().p("AqXg6IHjo0INMKEInrJZg");
	var mask_5_graphics_34 = new cjs.Graphics().p("AqegzIHwpCINNKCIn5Jpg");
	var mask_5_graphics_35 = new cjs.Graphics().p("AqlgsIH9pRINOKBIoHJ5g");
	var mask_5_graphics_36 = new cjs.Graphics().p("AqrglIIKpfINOKBIoUKIg");
	var mask_5_graphics_37 = new cjs.Graphics().p("AqygeIIXptINOJ+IohKZg");
	var mask_5_graphics_38 = new cjs.Graphics().p("Aq5gWIIkp8INPJ9IovKog");
	var mask_5_graphics_39 = new cjs.Graphics().p("Aq/gPIIxqLINOJ8Io7K5g");
	var mask_5_graphics_40 = new cjs.Graphics().p("ArGgIII9qZINQJ6IpJLJg");
	var mask_5_graphics_41 = new cjs.Graphics().p("ArMgBIJKqnINPJ4IpVLZg");
	var mask_5_graphics_42 = new cjs.Graphics().p("ArTAGIJXq1INQJ3IpjLog");
	var mask_5_graphics_43 = new cjs.Graphics().p("AraANIJkrEINRJ1IpxL5g");
	var mask_5_graphics_44 = new cjs.Graphics().p("ArgAUIJwrSINRJ0Ip9MJg");
	var mask_5_graphics_45 = new cjs.Graphics().p("ArnAcIJ+rhINRJyIqLMZg");
	var mask_5_graphics_46 = new cjs.Graphics().p("ArtAjIKKrvINRJwIqXMpg");
	var mask_5_graphics_47 = new cjs.Graphics().p("Ar0AqIKXr+INSJvIqlM5g");
	var mask_5_graphics_48 = new cjs.Graphics().p("Ar6AxIKksMINRJuIqxNJg");
	var mask_5_graphics_49 = new cjs.Graphics().p("AsBA4IKwsaINTJsIq/NZg");
	var mask_5_graphics_50 = new cjs.Graphics().p("AsIBAIK+spINTJqIrNNpg");
	var mask_5_graphics_51 = new cjs.Graphics().p("AsOBHILKs4INTJpIrZN5g");
	var mask_5_graphics_52 = new cjs.Graphics().p("AsVBOILXtGINUJnIrnOKg");
	var mask_5_graphics_53 = new cjs.Graphics().p("AscBVILltUINTJlIr0Oag");
	var mask_5_graphics_54 = new cjs.Graphics().p("AsiBdILwtjINVJkIsBOpg");
	var mask_5_graphics_55 = new cjs.Graphics().p("AspBkIL+tyINVJjIsPO6g");
	var mask_5_graphics_56 = new cjs.Graphics().p("AsvBrIMKuAINVJhIsbPKg");
	var mask_5_graphics_57 = new cjs.Graphics().p("As2BzIMYuPINVJfIspPag");
	var mask_5_graphics_58 = new cjs.Graphics().p("As9B6IMludINWJdIs3Pqg");
	var mask_5_graphics_59 = new cjs.Graphics().p("AtDCBIMwurINXJbItDP7g");
	var mask_5_graphics_60 = new cjs.Graphics().p("AtJCIIM9u6INWJbItOQKg");
	var mask_5_graphics_61 = new cjs.Graphics().p("AtQCPINKvIINXJZItcQag");
	var mask_5_graphics_62 = new cjs.Graphics().p("AtXCXINXvXINYJXItqQqg");
	var mask_5_graphics_63 = new cjs.Graphics().p("AtdCeINivlINaJVIt3Q6g");
	var mask_5_graphics_64 = new cjs.Graphics().p("AtkClINwv0INZJUIuERLg");
	var mask_5_graphics_65 = new cjs.Graphics().p("AtrCsIN9wCINaJTIuSRag");
	var mask_5_graphics_66 = new cjs.Graphics().p("AtxC0IOKwRINZJRIueRqg");
	var mask_5_graphics_67 = new cjs.Graphics().p("At4C7IOWwfINbJPIusR7g");
	var mask_5_graphics_68 = new cjs.Graphics().p("At+DCIOjwuINaJOIu4SLg");
	var mask_5_graphics_69 = new cjs.Graphics().p("AuFDJIOww8INbJMIvGSbg");
	var mask_5_graphics_70 = new cjs.Graphics().p("AuMDRIO+xLINaJKIvTSrg");
	var mask_5_graphics_71 = new cjs.Graphics().p("AuSDYIPKxaINbJJIvgS8g");
	var mask_5_graphics_72 = new cjs.Graphics().p("AuZDfIPWxoINdJIIvuTLg");
	var mask_5_graphics_73 = new cjs.Graphics().p("AufDnIPjx3INcJGIv6Tbg");
	var mask_5_graphics_74 = new cjs.Graphics().p("AumDuIPwyFINdJEIwITrg");
	var mask_5_graphics_75 = new cjs.Graphics().p("AutD1IP+yUINcJDIwVT7g");
	var mask_5_graphics_76 = new cjs.Graphics().p("AuzD8IQKyiINdJBIwiUMg");
	var mask_5_graphics_77 = new cjs.Graphics().p("Au6EEIQXyxINeI/IwwUcg");
	var mask_5_graphics_78 = new cjs.Graphics().p("AvAELIQjy/INeI+Iw8Urg");
	var mask_5_graphics_79 = new cjs.Graphics().p("AvHESIQwzOINfI9IxKU8g");
	var mask_5_graphics_80 = new cjs.Graphics().p("AvNEZIQ9zcINeI7IxWVMg");
	var mask_5_graphics_81 = new cjs.Graphics().p("AvUEgIRJzqINgI6IxkVbg");
	var mask_5_graphics_82 = new cjs.Graphics().p("AvaEoIRWz5INgI3IxxVsg");
	var mask_5_graphics_83 = new cjs.Graphics().p("AvhEvIRj0HINgI2Ix+V8g");
	var mask_5_graphics_84 = new cjs.Graphics().p("AvoE2IRx0WINgI1IyMWMg");
	var mask_5_graphics_85 = new cjs.Graphics().p("AvuE+IR90lINgIzIyYWcg");
	var mask_5_graphics_86 = new cjs.Graphics().p("Av1FFISK0zINhIxIymWsg");
	var mask_5_graphics_87 = new cjs.Graphics().p("Av8FMISX1BINiIwIy0W7g");
	var mask_5_graphics_88 = new cjs.Graphics().p("AwCFTISk1QINhIuIzAXNg");
	var mask_5_graphics_89 = new cjs.Graphics().p("AwJFbISx1fINiItIzOXcg");
	var mask_5_graphics_90 = new cjs.Graphics().p("AwPFiIS91tINiIrIzaXsg");
	var mask_5_graphics_91 = new cjs.Graphics().p("AwWFpITK17INjIpIzoX9g");
	var mask_5_graphics_92 = new cjs.Graphics().p("AwcFwITW2KINkIoIz1YNg");
	var mask_5_graphics_93 = new cjs.Graphics().p("AwjF3ITj2YINkImI0CYdg");
	var mask_5_graphics_94 = new cjs.Graphics().p("AwpF/ITw2nINkIlI0PYsg");
	var mask_5_graphics_95 = new cjs.Graphics().p("AwwGGIT922INkIjI0cY+g");
	var mask_5_graphics_96 = new cjs.Graphics().p("Aw3GNIUK3EINlIiI0qZNg");
	var mask_5_graphics_97 = new cjs.Graphics().p("Aw9GVIUX3TINkIgI02Zdg");
	var mask_5_graphics_98 = new cjs.Graphics().p("AxEGcIUk3hINlIeI1EZtg");
	var mask_5_graphics_99 = new cjs.Graphics().p("AxLGjIUx3wINmIdI1SZ9g");
	var mask_5_graphics_100 = new cjs.Graphics().p("AxRGqIU93+INmIcI1eaNg");
	var mask_5_graphics_101 = new cjs.Graphics().p("AxYGyIVK4NINnIZI1saeg");
	var mask_5_graphics_102 = new cjs.Graphics().p("AxfG5IVX4bINnIYI15atg");
	var mask_5_graphics_103 = new cjs.Graphics().p("AxlHAIVk4qINnIYI2Ga8g");
	var mask_5_graphics_104 = new cjs.Graphics().p("AxsHHIVx44INoIVI2UbOg");
	var mask_5_graphics_105 = new cjs.Graphics().p("AxyHOIV95GINoIUI2gbdg");
	var mask_5_graphics_106 = new cjs.Graphics().p("Ax5HWIWK5VINpISI2ubtg");
	var mask_5_graphics_107 = new cjs.Graphics().p("Ax/HdIWX5jINoIPI26b+g");
	var mask_5_graphics_108 = new cjs.Graphics().p("AyGHkIWk5yINpIPI3IcOg");
	var mask_5_graphics_109 = new cjs.Graphics().p("AyMHsIWw6BINqIOI3Vcdg");
	var mask_5_graphics_110 = new cjs.Graphics().p("AyTHzIW96PINqILI3icug");
	var mask_5_graphics_111 = new cjs.Graphics().p("AyaH6IXK6dINqIKI3vc+g");
	var mask_5_graphics_112 = new cjs.Graphics().p("AygIBIXX6sINqIJI38dOg");
	var mask_5_graphics_113 = new cjs.Graphics().p("AynIJIXk67INrIHI4Kdeg");
	var mask_5_graphics_114 = new cjs.Graphics().p("AyuIQIXx7JINsIFI4Ydug");
	var mask_5_graphics_115 = new cjs.Graphics().p("Ay0IXIX97XINsIDI4kd+g");
	var mask_5_graphics_116 = new cjs.Graphics().p("Ay7IeIYL7mINsIDI4yeOg");
	var mask_5_graphics_117 = new cjs.Graphics().p("AzBImIYX71INsIAI4+efg");
	var mask_5_graphics_118 = new cjs.Graphics().p("AzIItIYk8DINtH/I5Meug");
	var mask_5_graphics_119 = new cjs.Graphics().p("AzOI0IYw8SINtH+I5Ye+g");
	var mask_5_graphics_120 = new cjs.Graphics().p("AzVI7IY98gINuH8I5mfPg");
	var mask_5_graphics_121 = new cjs.Graphics().p("AzbJCIZK8uINtH6I5yffg");
	var mask_5_graphics_122 = new cjs.Graphics().p("AziJKIZX89INuH5I6Afug");
	var mask_5_graphics_123 = new cjs.Graphics().p("AzpJRIZk9MINvH3MgaOAgAg");
	var mask_5_graphics_124 = new cjs.Graphics().p("AzvJYIZw9aINwH2MgabAgPg");
	var mask_5_graphics_125 = new cjs.Graphics().p("Az2JfIZ+9oINvH0MgaoAgfg");
	var mask_5_graphics_126 = new cjs.Graphics().p("Az9JnIaL93INvHyMga1Agvg");
	var mask_5_graphics_127 = new cjs.Graphics().p("A0DJuIaY+GINvHyMgbCAg+g");
	var mask_5_graphics_128 = new cjs.Graphics().p("A0KJ1Iak+UINxHwMgbQAhPg");
	var mask_5_graphics_129 = new cjs.Graphics().p("A0QJ9Iax+jINwHuMgbcAhfg");
	var mask_5_graphics_130 = new cjs.Graphics().p("A0XKEIa++xINxHsMgbqAhvg");
	var mask_5_graphics_131 = new cjs.Graphics().p("A0dKLIbK+/INxHqMgb2Ah/g");
	var mask_5_graphics_132 = new cjs.Graphics().p("A0kKSIbX/OINyHqMgcEAiPg");
	var mask_5_graphics_133 = new cjs.Graphics().p("A0rKZIbk/cINzHoMgcSAifg");
	var mask_5_graphics_134 = new cjs.Graphics().p("AsQUxIbw/qINzHmMgcfAivg");
	var mask_5_graphics_135 = new cjs.Graphics().p("A04KpIb+/7INzHlMgcsAjAg");
	var mask_5_graphics_136 = new cjs.Graphics().p("A0/KxMAcLggLIN0HjMgc6AjSg");
	var mask_5_graphics_137 = new cjs.Graphics().p("A1GK5MAcYggbIN1HiMgdIAjjg");
	var mask_5_graphics_138 = new cjs.Graphics().p("A1NLBMAclggrIN2HiMgdWAjzg");
	var mask_5_graphics_139 = new cjs.Graphics().p("A1ULJMAcygg7IN3HgMgdkAkFg");
	var mask_5_graphics_140 = new cjs.Graphics().p("As6UxMAc/ghKIN4HfMgdzAkWg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_5_graphics_9,x:158.6,y:358.6}).wait(1).to({graphics:mask_5_graphics_10,x:159.3,y:357.9}).wait(1).to({graphics:mask_5_graphics_11,x:159.9,y:357.2}).wait(1).to({graphics:mask_5_graphics_12,x:160.6,y:356.4}).wait(1).to({graphics:mask_5_graphics_13,x:161.3,y:355.7}).wait(1).to({graphics:mask_5_graphics_14,x:162,y:354.9}).wait(1).to({graphics:mask_5_graphics_15,x:162.6,y:354.2}).wait(1).to({graphics:mask_5_graphics_16,x:163.3,y:353.5}).wait(1).to({graphics:mask_5_graphics_17,x:163.9,y:352.8}).wait(1).to({graphics:mask_5_graphics_18,x:164.6,y:352}).wait(1).to({graphics:mask_5_graphics_19,x:165.3,y:351.3}).wait(1).to({graphics:mask_5_graphics_20,x:166,y:350.5}).wait(1).to({graphics:mask_5_graphics_21,x:166.6,y:349.8}).wait(1).to({graphics:mask_5_graphics_22,x:167.3,y:349.1}).wait(1).to({graphics:mask_5_graphics_23,x:167.9,y:348.4}).wait(1).to({graphics:mask_5_graphics_24,x:168.6,y:347.6}).wait(1).to({graphics:mask_5_graphics_25,x:169.3,y:346.9}).wait(1).to({graphics:mask_5_graphics_26,x:170,y:346.1}).wait(1).to({graphics:mask_5_graphics_27,x:170.6,y:345.4}).wait(1).to({graphics:mask_5_graphics_28,x:171.3,y:344.7}).wait(1).to({graphics:mask_5_graphics_29,x:171.9,y:344}).wait(1).to({graphics:mask_5_graphics_30,x:172.6,y:343.2}).wait(1).to({graphics:mask_5_graphics_31,x:173.3,y:342.5}).wait(1).to({graphics:mask_5_graphics_32,x:173.9,y:341.7}).wait(1).to({graphics:mask_5_graphics_33,x:174.6,y:341}).wait(1).to({graphics:mask_5_graphics_34,x:175.3,y:340.3}).wait(1).to({graphics:mask_5_graphics_35,x:175.9,y:339.6}).wait(1).to({graphics:mask_5_graphics_36,x:176.6,y:338.8}).wait(1).to({graphics:mask_5_graphics_37,x:177.3,y:338.1}).wait(1).to({graphics:mask_5_graphics_38,x:177.9,y:337.3}).wait(1).to({graphics:mask_5_graphics_39,x:178.6,y:336.6}).wait(1).to({graphics:mask_5_graphics_40,x:179.3,y:335.9}).wait(1).to({graphics:mask_5_graphics_41,x:179.9,y:335.2}).wait(1).to({graphics:mask_5_graphics_42,x:180.6,y:334.4}).wait(1).to({graphics:mask_5_graphics_43,x:181.3,y:333.7}).wait(1).to({graphics:mask_5_graphics_44,x:181.9,y:332.9}).wait(1).to({graphics:mask_5_graphics_45,x:182.6,y:332.2}).wait(1).to({graphics:mask_5_graphics_46,x:183.3,y:331.5}).wait(1).to({graphics:mask_5_graphics_47,x:183.9,y:330.8}).wait(1).to({graphics:mask_5_graphics_48,x:184.6,y:330}).wait(1).to({graphics:mask_5_graphics_49,x:185.3,y:329.3}).wait(1).to({graphics:mask_5_graphics_50,x:185.9,y:328.5}).wait(1).to({graphics:mask_5_graphics_51,x:186.6,y:327.8}).wait(1).to({graphics:mask_5_graphics_52,x:187.3,y:327.1}).wait(1).to({graphics:mask_5_graphics_53,x:188,y:326.4}).wait(1).to({graphics:mask_5_graphics_54,x:188.6,y:325.6}).wait(1).to({graphics:mask_5_graphics_55,x:189.3,y:324.9}).wait(1).to({graphics:mask_5_graphics_56,x:189.9,y:324.1}).wait(1).to({graphics:mask_5_graphics_57,x:190.6,y:323.4}).wait(1).to({graphics:mask_5_graphics_58,x:191.3,y:322.7}).wait(1).to({graphics:mask_5_graphics_59,x:192,y:322}).wait(1).to({graphics:mask_5_graphics_60,x:192.6,y:321.2}).wait(1).to({graphics:mask_5_graphics_61,x:193.3,y:320.5}).wait(1).to({graphics:mask_5_graphics_62,x:193.9,y:319.7}).wait(1).to({graphics:mask_5_graphics_63,x:194.6,y:319}).wait(1).to({graphics:mask_5_graphics_64,x:195.3,y:318.3}).wait(1).to({graphics:mask_5_graphics_65,x:196,y:317.6}).wait(1).to({graphics:mask_5_graphics_66,x:196.6,y:316.8}).wait(1).to({graphics:mask_5_graphics_67,x:197.3,y:316.1}).wait(1).to({graphics:mask_5_graphics_68,x:197.9,y:315.3}).wait(1).to({graphics:mask_5_graphics_69,x:198.6,y:314.6}).wait(1).to({graphics:mask_5_graphics_70,x:199.3,y:313.9}).wait(1).to({graphics:mask_5_graphics_71,x:199.9,y:313.2}).wait(1).to({graphics:mask_5_graphics_72,x:200.6,y:312.4}).wait(1).to({graphics:mask_5_graphics_73,x:201.3,y:311.7}).wait(1).to({graphics:mask_5_graphics_74,x:201.9,y:310.9}).wait(1).to({graphics:mask_5_graphics_75,x:202.6,y:310.2}).wait(1).to({graphics:mask_5_graphics_76,x:203.3,y:309.5}).wait(1).to({graphics:mask_5_graphics_77,x:203.9,y:308.8}).wait(1).to({graphics:mask_5_graphics_78,x:204.6,y:308}).wait(1).to({graphics:mask_5_graphics_79,x:205.3,y:307.3}).wait(1).to({graphics:mask_5_graphics_80,x:205.9,y:306.5}).wait(1).to({graphics:mask_5_graphics_81,x:206.6,y:305.8}).wait(1).to({graphics:mask_5_graphics_82,x:207.3,y:305.1}).wait(1).to({graphics:mask_5_graphics_83,x:207.9,y:304.4}).wait(1).to({graphics:mask_5_graphics_84,x:208.6,y:303.6}).wait(1).to({graphics:mask_5_graphics_85,x:209.3,y:302.9}).wait(1).to({graphics:mask_5_graphics_86,x:209.9,y:302.1}).wait(1).to({graphics:mask_5_graphics_87,x:210.6,y:301.4}).wait(1).to({graphics:mask_5_graphics_88,x:211.3,y:300.7}).wait(1).to({graphics:mask_5_graphics_89,x:211.9,y:300}).wait(1).to({graphics:mask_5_graphics_90,x:212.6,y:299.2}).wait(1).to({graphics:mask_5_graphics_91,x:213.3,y:298.5}).wait(1).to({graphics:mask_5_graphics_92,x:214,y:297.7}).wait(1).to({graphics:mask_5_graphics_93,x:214.6,y:297}).wait(1).to({graphics:mask_5_graphics_94,x:215.3,y:296.3}).wait(1).to({graphics:mask_5_graphics_95,x:215.9,y:295.6}).wait(1).to({graphics:mask_5_graphics_96,x:216.6,y:294.8}).wait(1).to({graphics:mask_5_graphics_97,x:217.3,y:294.1}).wait(1).to({graphics:mask_5_graphics_98,x:218,y:293.3}).wait(1).to({graphics:mask_5_graphics_99,x:218.6,y:292.6}).wait(1).to({graphics:mask_5_graphics_100,x:219.3,y:291.9}).wait(1).to({graphics:mask_5_graphics_101,x:219.9,y:291.2}).wait(1).to({graphics:mask_5_graphics_102,x:220.6,y:290.4}).wait(1).to({graphics:mask_5_graphics_103,x:221.3,y:289.7}).wait(1).to({graphics:mask_5_graphics_104,x:221.9,y:288.9}).wait(1).to({graphics:mask_5_graphics_105,x:222.6,y:288.2}).wait(1).to({graphics:mask_5_graphics_106,x:223.3,y:287.5}).wait(1).to({graphics:mask_5_graphics_107,x:223.9,y:286.8}).wait(1).to({graphics:mask_5_graphics_108,x:224.6,y:286}).wait(1).to({graphics:mask_5_graphics_109,x:225.3,y:285.3}).wait(1).to({graphics:mask_5_graphics_110,x:225.9,y:284.5}).wait(1).to({graphics:mask_5_graphics_111,x:226.6,y:283.8}).wait(1).to({graphics:mask_5_graphics_112,x:227.3,y:283.1}).wait(1).to({graphics:mask_5_graphics_113,x:227.9,y:282.4}).wait(1).to({graphics:mask_5_graphics_114,x:228.6,y:281.6}).wait(1).to({graphics:mask_5_graphics_115,x:229.3,y:280.9}).wait(1).to({graphics:mask_5_graphics_116,x:229.9,y:280.1}).wait(1).to({graphics:mask_5_graphics_117,x:230.6,y:279.4}).wait(1).to({graphics:mask_5_graphics_118,x:231.3,y:278.7}).wait(1).to({graphics:mask_5_graphics_119,x:231.9,y:278}).wait(1).to({graphics:mask_5_graphics_120,x:232.6,y:277.2}).wait(1).to({graphics:mask_5_graphics_121,x:233.3,y:276.5}).wait(1).to({graphics:mask_5_graphics_122,x:233.9,y:275.7}).wait(1).to({graphics:mask_5_graphics_123,x:234.6,y:275}).wait(1).to({graphics:mask_5_graphics_124,x:235.3,y:274.3}).wait(1).to({graphics:mask_5_graphics_125,x:235.9,y:273.6}).wait(1).to({graphics:mask_5_graphics_126,x:236.6,y:272.8}).wait(1).to({graphics:mask_5_graphics_127,x:237.3,y:272.1}).wait(1).to({graphics:mask_5_graphics_128,x:237.9,y:271.3}).wait(1).to({graphics:mask_5_graphics_129,x:238.6,y:270.6}).wait(1).to({graphics:mask_5_graphics_130,x:239.3,y:269.9}).wait(1).to({graphics:mask_5_graphics_131,x:239.9,y:269.2}).wait(1).to({graphics:mask_5_graphics_132,x:240.6,y:268.4}).wait(1).to({graphics:mask_5_graphics_133,x:241.3,y:267.7}).wait(1).to({graphics:mask_5_graphics_134,x:187.5,y:201.2}).wait(1).to({graphics:mask_5_graphics_135,x:242.6,y:266.1}).wait(1).to({graphics:mask_5_graphics_136,x:243.3,y:265.3}).wait(1).to({graphics:mask_5_graphics_137,x:244.1,y:264.5}).wait(1).to({graphics:mask_5_graphics_138,x:244.8,y:263.7}).wait(1).to({graphics:mask_5_graphics_139,x:245.5,y:262.9}).wait(1).to({graphics:mask_5_graphics_140,x:191.7,y:201.2}).wait(360));

	// Layer 2
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(20,1,1).p("AtiTDQGImMFjlkQFiljDSkNQDSkNBsjYQBrjYgDiUQgDiTgqhB");
	this.shape_7.setTransform(257.5,242.9);
	this.shape_7._off = true;

	var maskedShapeInstanceList = [this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(9).to({_off:false},0).wait(491));

	// Letter
	this.instance_3 = new lib.l("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(275,275);
	this.instance_3.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(500));

	// Background
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_8.setTransform(275,275,3.373,2.543);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_9.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).wait(500));

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