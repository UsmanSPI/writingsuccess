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


(lib.N = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A6ZU2QAAhXN265QBXi9AAi6QAAi1hZhXQhahXi1ABQilAAiTBmQh2BXhHAAQhsgBAAhmQAAhGBIhEQA+g6BsgyQDShiCdAAQCOAABxAqQBxAoBRBRQBPBPAqBwQAqB0AACOIgPDcQC8iQC4hcQDwh2C2AAQCQAABUBMQBZBPAACTQAAB5g0CXIh0EDIojRRQg1B3AABBQAAAqBMAAQCXAACrg+QCWg4ClhsQDPiGFgk4IBchRQBchPCqitQA3gqA1AAQBcAAAABnQAAAnhuCDIiUCtQmZGVkMCnQjUCGjIBKQjcBPi3AAQiTAAhchKQhehSAAiQQAAh+BOirIIuxCQCUkhAAhcQAAhghMAAQhagBiGA6IkCCLQkHCoieCjQgUAPh7CRIrNWVQgyBHg/AAQiAAAAAiAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-169,-146.2,338.1,292.4);


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


(lib.ar7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-5.4,-65.1,1,1,-173.8,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-143.7,guide:{path:[-5.3,-65.1,-0.8,-104,2.3,-128.4,5.3,-152.8,18.5,-174.2,18.5,-174.3,18.6,-174.4]}},77).to({rotation:-49.3,guide:{path:[18.6,-174.5,23.9,-183,27.9,-184.6]}},12).to({regX:0.1,regY:-0.1,scaleX:1,scaleY:1,rotation:0,guide:{path:[27.9,-184.6,30.8,-185.8,33,-183.2,35.2,-180.7,36.7,-174.3,41.7,-152.9,40.7,-147]}},30).wait(1));

	// Layer 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_89 = new cjs.Graphics().p("Ag4tsIAAhhIGXAAIAABhg");
	var mask_graphics_90 = new cjs.Graphics().p("AjLA4IAAhvIGXAAIAABvg");
	var mask_graphics_91 = new cjs.Graphics().p("AjLA/IAAh9IGXAAIAAB9g");
	var mask_graphics_92 = new cjs.Graphics().p("AjLBGIAAiLIGXAAIAACLg");
	var mask_graphics_93 = new cjs.Graphics().p("AjLBNIAAiZIGXAAIAACZg");
	var mask_graphics_94 = new cjs.Graphics().p("AjLBUIAAinIGXAAIAACng");
	var mask_graphics_95 = new cjs.Graphics().p("AjLBbIAAi1IGXAAIAAC1g");
	var mask_graphics_96 = new cjs.Graphics().p("AjLBiIAAjDIGXAAIAADDg");
	var mask_graphics_97 = new cjs.Graphics().p("AjLBpIAAjRIGXAAIAADRg");
	var mask_graphics_98 = new cjs.Graphics().p("AjLBwIAAjfIGXAAIAADfg");
	var mask_graphics_99 = new cjs.Graphics().p("AjLB3IAAjtIGXAAIAADtg");
	var mask_graphics_100 = new cjs.Graphics().p("AjLB+IAAj7IGXAAIAAD7g");
	var mask_graphics_101 = new cjs.Graphics().p("AjLCFIAAkJIGXAAIAAEJg");
	var mask_graphics_102 = new cjs.Graphics().p("AjLCMIAAkYIGXAAIAAEYg");
	var mask_graphics_103 = new cjs.Graphics().p("AjLCUIAAknIGXAAIAAEng");
	var mask_graphics_104 = new cjs.Graphics().p("AjLCbIAAk1IGXAAIAAE1g");
	var mask_graphics_105 = new cjs.Graphics().p("AjLCiIAAlDIGXAAIAAFDg");
	var mask_graphics_106 = new cjs.Graphics().p("AjLCpIAAlRIGXAAIAAFRg");
	var mask_graphics_107 = new cjs.Graphics().p("AjLCwIAAlfIGXAAIAAFfg");
	var mask_graphics_108 = new cjs.Graphics().p("AjLC3IAAltIGXAAIAAFtg");
	var mask_graphics_109 = new cjs.Graphics().p("AjLC+IAAl7IGXAAIAAF7g");
	var mask_graphics_110 = new cjs.Graphics().p("AjLDFIAAmJIGXAAIAAGJg");
	var mask_graphics_111 = new cjs.Graphics().p("AjLDMIAAmXIGXAAIAAGXg");
	var mask_graphics_112 = new cjs.Graphics().p("AjLDTIAAmlIGXAAIAAGlg");
	var mask_graphics_113 = new cjs.Graphics().p("AjLDaIAAmzIGXAAIAAGzg");
	var mask_graphics_114 = new cjs.Graphics().p("AjLDhIAAnBIGXAAIAAHBg");
	var mask_graphics_115 = new cjs.Graphics().p("AjLDoIAAnPIGXAAIAAHPg");
	var mask_graphics_116 = new cjs.Graphics().p("AjLDwIAAnfIGXAAIAAHfg");
	var mask_graphics_117 = new cjs.Graphics().p("AjLD2IAAnsIGXAAIAAHsg");
	var mask_graphics_118 = new cjs.Graphics().p("AjLD+IAAn7IGXAAIAAH7g");
	var mask_graphics_119 = new cjs.Graphics().p("Ag4l9IAApQIGXAAIAAJQg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(89).to({graphics:mask_graphics_89,x:35.1,y:-97.4}).wait(1).to({graphics:mask_graphics_90,x:49.8,y:-189.3}).wait(1).to({graphics:mask_graphics_91,x:49.8,y:-188.6}).wait(1).to({graphics:mask_graphics_92,x:49.8,y:-187.8}).wait(1).to({graphics:mask_graphics_93,x:49.8,y:-187.1}).wait(1).to({graphics:mask_graphics_94,x:49.8,y:-186.4}).wait(1).to({graphics:mask_graphics_95,x:49.8,y:-185.7}).wait(1).to({graphics:mask_graphics_96,x:49.8,y:-185}).wait(1).to({graphics:mask_graphics_97,x:49.8,y:-184.3}).wait(1).to({graphics:mask_graphics_98,x:49.8,y:-183.6}).wait(1).to({graphics:mask_graphics_99,x:49.8,y:-182.9}).wait(1).to({graphics:mask_graphics_100,x:49.8,y:-182.2}).wait(1).to({graphics:mask_graphics_101,x:49.8,y:-181.5}).wait(1).to({graphics:mask_graphics_102,x:49.8,y:-180.8}).wait(1).to({graphics:mask_graphics_103,x:49.8,y:-180.1}).wait(1).to({graphics:mask_graphics_104,x:49.8,y:-179.4}).wait(1).to({graphics:mask_graphics_105,x:49.8,y:-178.7}).wait(1).to({graphics:mask_graphics_106,x:49.8,y:-178}).wait(1).to({graphics:mask_graphics_107,x:49.8,y:-177.3}).wait(1).to({graphics:mask_graphics_108,x:49.8,y:-176.6}).wait(1).to({graphics:mask_graphics_109,x:49.8,y:-175.9}).wait(1).to({graphics:mask_graphics_110,x:49.8,y:-175.2}).wait(1).to({graphics:mask_graphics_111,x:49.8,y:-174.5}).wait(1).to({graphics:mask_graphics_112,x:49.8,y:-173.8}).wait(1).to({graphics:mask_graphics_113,x:49.8,y:-173.1}).wait(1).to({graphics:mask_graphics_114,x:49.8,y:-172.4}).wait(1).to({graphics:mask_graphics_115,x:49.8,y:-171.7}).wait(1).to({graphics:mask_graphics_116,x:49.8,y:-170.9}).wait(1).to({graphics:mask_graphics_117,x:49.8,y:-170.2}).wait(1).to({graphics:mask_graphics_118,x:49.8,y:-169.5}).wait(1).to({graphics:mask_graphics_119,x:35.1,y:-97.4}).wait(1));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AjlJWQAtmGAejzQAfj0CDjVQCEjWA1DdQA1DcgWBu");
	this.shape.setTransform(17.6,-124.9);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(89).to({_off:false},0).wait(31));

	// Layer 4 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AjLidIAAi4IGXAAIAAC4g");
	var mask_1_graphics_1 = new cjs.Graphics().p("AjLBjIAAjFIGXAAIAADFg");
	var mask_1_graphics_2 = new cjs.Graphics().p("AjLBqIAAjTIGXAAIAADTg");
	var mask_1_graphics_3 = new cjs.Graphics().p("AjLBxIAAjhIGXAAIAADhg");
	var mask_1_graphics_4 = new cjs.Graphics().p("AjLB4IAAjvIGXAAIAADvg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AjLB/IAAj+IGXAAIAAD+g");
	var mask_1_graphics_6 = new cjs.Graphics().p("AjLCGIAAkLIGXAAIAAELg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AjLCOIAAkbIGXAAIAAEbg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AjLCVIAAkpIGXAAIAAEpg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AjLCcIAAk3IGXAAIAAE3g");
	var mask_1_graphics_10 = new cjs.Graphics().p("AjLCjIAAlFIGXAAIAAFFg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AjLCqIAAlTIGXAAIAAFTg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AjLCxIAAlhIGXAAIAAFhg");
	var mask_1_graphics_13 = new cjs.Graphics().p("AjLC4IAAlvIGXAAIAAFvg");
	var mask_1_graphics_14 = new cjs.Graphics().p("AjLC/IAAl9IGXAAIAAF9g");
	var mask_1_graphics_15 = new cjs.Graphics().p("AjLDGIAAmMIGXAAIAAGMg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AjLDNIAAmZIGXAAIAAGZg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AjLDVIAAmpIGXAAIAAGpg");
	var mask_1_graphics_18 = new cjs.Graphics().p("AjLDcIAAm3IGXAAIAAG3g");
	var mask_1_graphics_19 = new cjs.Graphics().p("AjLDjIAAnFIGXAAIAAHFg");
	var mask_1_graphics_20 = new cjs.Graphics().p("AjLDqIAAnTIGXAAIAAHTg");
	var mask_1_graphics_21 = new cjs.Graphics().p("AjLDxIAAnhIGXAAIAAHhg");
	var mask_1_graphics_22 = new cjs.Graphics().p("AjLD4IAAnvIGXAAIAAHvg");
	var mask_1_graphics_23 = new cjs.Graphics().p("AjLD/IAAn9IGXAAIAAH9g");
	var mask_1_graphics_24 = new cjs.Graphics().p("AjLEGIAAoMIGXAAIAAIMg");
	var mask_1_graphics_25 = new cjs.Graphics().p("AjLENIAAoZIGXAAIAAIZg");
	var mask_1_graphics_26 = new cjs.Graphics().p("AjLEVIAAopIGXAAIAAIpg");
	var mask_1_graphics_27 = new cjs.Graphics().p("AjLEcIAAo3IGXAAIAAI3g");
	var mask_1_graphics_28 = new cjs.Graphics().p("AjLEjIAApFIGXAAIAAJFg");
	var mask_1_graphics_29 = new cjs.Graphics().p("AjLEqIAApTIGXAAIAAJTg");
	var mask_1_graphics_30 = new cjs.Graphics().p("AjLExIAAphIGXAAIAAJhg");
	var mask_1_graphics_31 = new cjs.Graphics().p("AjLE4IAApvIGXAAIAAJvg");
	var mask_1_graphics_32 = new cjs.Graphics().p("AjLE/IAAp9IGXAAIAAJ9g");
	var mask_1_graphics_33 = new cjs.Graphics().p("AjLFGIAAqLIGXAAIAAKLg");
	var mask_1_graphics_34 = new cjs.Graphics().p("AjLFNIAAqaIGXAAIAAKag");
	var mask_1_graphics_35 = new cjs.Graphics().p("AjLFUIAAqnIGXAAIAAKng");
	var mask_1_graphics_36 = new cjs.Graphics().p("AjLFcIAAq3IGXAAIAAK3g");
	var mask_1_graphics_37 = new cjs.Graphics().p("AjLFjIAArFIGXAAIAALFg");
	var mask_1_graphics_38 = new cjs.Graphics().p("AjLFqIAArTIGXAAIAALTg");
	var mask_1_graphics_39 = new cjs.Graphics().p("AjLFxIAArhIGXAAIAALhg");
	var mask_1_graphics_40 = new cjs.Graphics().p("AjLF4IAArvIGXAAIAALvg");
	var mask_1_graphics_41 = new cjs.Graphics().p("AjLF/IAAr9IGXAAIAAL9g");
	var mask_1_graphics_42 = new cjs.Graphics().p("AjLGGIAAsLIGXAAIAAMLg");
	var mask_1_graphics_43 = new cjs.Graphics().p("AjLGNIAAsZIGXAAIAAMZg");
	var mask_1_graphics_44 = new cjs.Graphics().p("AjLGUIAAsnIGXAAIAAMng");
	var mask_1_graphics_45 = new cjs.Graphics().p("AjLGbIAAs2IGXAAIAAM2g");
	var mask_1_graphics_46 = new cjs.Graphics().p("AjLGjIAAtFIGXAAIAANFg");
	var mask_1_graphics_47 = new cjs.Graphics().p("AjLGqIAAtTIGXAAIAANTg");
	var mask_1_graphics_48 = new cjs.Graphics().p("AjLGxIAAthIGXAAIAANhg");
	var mask_1_graphics_49 = new cjs.Graphics().p("AjLG4IAAtvIGXAAIAANvg");
	var mask_1_graphics_50 = new cjs.Graphics().p("AjLG/IAAt9IGXAAIAAN9g");
	var mask_1_graphics_51 = new cjs.Graphics().p("AjLHGIAAuLIGXAAIAAOLg");
	var mask_1_graphics_52 = new cjs.Graphics().p("AjLHNIAAuZIGXAAIAAOZg");
	var mask_1_graphics_53 = new cjs.Graphics().p("AjLHUIAAunIGXAAIAAOng");
	var mask_1_graphics_54 = new cjs.Graphics().p("AjLHbIAAu1IGXAAIAAO1g");
	var mask_1_graphics_55 = new cjs.Graphics().p("AjLHiIAAvEIGXAAIAAPEg");
	var mask_1_graphics_56 = new cjs.Graphics().p("AjLHqIAAvTIGXAAIAAPTg");
	var mask_1_graphics_57 = new cjs.Graphics().p("AjLHxIAAvhIGXAAIAAPhg");
	var mask_1_graphics_58 = new cjs.Graphics().p("AjLH4IAAvvIGXAAIAAPvg");
	var mask_1_graphics_59 = new cjs.Graphics().p("AjLH/IAAv9IGXAAIAAP9g");
	var mask_1_graphics_60 = new cjs.Graphics().p("AjLIGIAAwLIGXAAIAAQLg");
	var mask_1_graphics_61 = new cjs.Graphics().p("AjLINIAAwZIGXAAIAAQZg");
	var mask_1_graphics_62 = new cjs.Graphics().p("AjLIUIAAwnIGXAAIAAQng");
	var mask_1_graphics_63 = new cjs.Graphics().p("AjLIbIAAw1IGXAAIAAQ1g");
	var mask_1_graphics_64 = new cjs.Graphics().p("AjLIiIAAxEIGXAAIAAREg");
	var mask_1_graphics_65 = new cjs.Graphics().p("AjLIpIAAxSIGXAAIAARSg");
	var mask_1_graphics_66 = new cjs.Graphics().p("AjLIxIAAxhIGXAAIAARhg");
	var mask_1_graphics_67 = new cjs.Graphics().p("AjLI4IAAxvIGXAAIAARvg");
	var mask_1_graphics_68 = new cjs.Graphics().p("AjLI/IAAx9IGXAAIAAR9g");
	var mask_1_graphics_69 = new cjs.Graphics().p("AjLJGIAAyLIGXAAIAASLg");
	var mask_1_graphics_70 = new cjs.Graphics().p("AjLJNIAAyZIGXAAIAASZg");
	var mask_1_graphics_71 = new cjs.Graphics().p("AjLJUIAAynIGXAAIAASng");
	var mask_1_graphics_72 = new cjs.Graphics().p("AjLJbIAAy1IGXAAIAAS1g");
	var mask_1_graphics_73 = new cjs.Graphics().p("AjLJiIAAzDIGXAAIAATDg");
	var mask_1_graphics_74 = new cjs.Graphics().p("AjLJpIAAzSIGXAAIAATSg");
	var mask_1_graphics_75 = new cjs.Graphics().p("AjLJwIAAzfIGXAAIAATfg");
	var mask_1_graphics_76 = new cjs.Graphics().p("AjLJ4IAAzvIGXAAIAATvg");
	var mask_1_graphics_77 = new cjs.Graphics().p("AjLJ/IAAz9IGXAAIAAT9g");
	var mask_1_graphics_78 = new cjs.Graphics().p("AjLKGIAA0LIGXAAIAAULg");
	var mask_1_graphics_79 = new cjs.Graphics().p("AjLKNIAA0ZIGXAAIAAUZg");
	var mask_1_graphics_80 = new cjs.Graphics().p("AjLKUIAA0nIGXAAIAAUng");
	var mask_1_graphics_81 = new cjs.Graphics().p("AjLKbIAA01IGXAAIAAU1g");
	var mask_1_graphics_82 = new cjs.Graphics().p("AjLKiIAA1DIGXAAIAAVDg");
	var mask_1_graphics_83 = new cjs.Graphics().p("AjLKpIAA1SIGXAAIAAVSg");
	var mask_1_graphics_84 = new cjs.Graphics().p("AjLKwIAA1gIGXAAIAAVgg");
	var mask_1_graphics_85 = new cjs.Graphics().p("AjLK3IAA1tIGXAAIAAVtg");
	var mask_1_graphics_86 = new cjs.Graphics().p("AjLK/IAA19IGXAAIAAV9g");
	var mask_1_graphics_87 = new cjs.Graphics().p("AjLLGIAA2LIGXAAIAAWLg");
	var mask_1_graphics_88 = new cjs.Graphics().p("AjLLNIAA2ZIGXAAIAAWZg");
	var mask_1_graphics_89 = new cjs.Graphics().p("AjLHaIAA2nIGXAAIAAWng");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:9.8,y:-34.2}).wait(1).to({graphics:mask_1_graphics_1,x:9.8,y:-59.9}).wait(1).to({graphics:mask_1_graphics_2,x:9.8,y:-60.6}).wait(1).to({graphics:mask_1_graphics_3,x:9.8,y:-61.3}).wait(1).to({graphics:mask_1_graphics_4,x:9.8,y:-62}).wait(1).to({graphics:mask_1_graphics_5,x:9.8,y:-62.7}).wait(1).to({graphics:mask_1_graphics_6,x:9.8,y:-63.4}).wait(1).to({graphics:mask_1_graphics_7,x:9.8,y:-64.2}).wait(1).to({graphics:mask_1_graphics_8,x:9.8,y:-64.9}).wait(1).to({graphics:mask_1_graphics_9,x:9.8,y:-65.6}).wait(1).to({graphics:mask_1_graphics_10,x:9.8,y:-66.3}).wait(1).to({graphics:mask_1_graphics_11,x:9.8,y:-67}).wait(1).to({graphics:mask_1_graphics_12,x:9.8,y:-67.7}).wait(1).to({graphics:mask_1_graphics_13,x:9.8,y:-68.4}).wait(1).to({graphics:mask_1_graphics_14,x:9.8,y:-69.1}).wait(1).to({graphics:mask_1_graphics_15,x:9.8,y:-69.8}).wait(1).to({graphics:mask_1_graphics_16,x:9.8,y:-70.5}).wait(1).to({graphics:mask_1_graphics_17,x:9.8,y:-71.3}).wait(1).to({graphics:mask_1_graphics_18,x:9.8,y:-72}).wait(1).to({graphics:mask_1_graphics_19,x:9.8,y:-72.7}).wait(1).to({graphics:mask_1_graphics_20,x:9.8,y:-73.4}).wait(1).to({graphics:mask_1_graphics_21,x:9.8,y:-74.1}).wait(1).to({graphics:mask_1_graphics_22,x:9.8,y:-74.8}).wait(1).to({graphics:mask_1_graphics_23,x:9.8,y:-75.5}).wait(1).to({graphics:mask_1_graphics_24,x:9.8,y:-76.2}).wait(1).to({graphics:mask_1_graphics_25,x:9.8,y:-76.9}).wait(1).to({graphics:mask_1_graphics_26,x:9.8,y:-77.7}).wait(1).to({graphics:mask_1_graphics_27,x:9.8,y:-78.4}).wait(1).to({graphics:mask_1_graphics_28,x:9.8,y:-79.1}).wait(1).to({graphics:mask_1_graphics_29,x:9.8,y:-79.8}).wait(1).to({graphics:mask_1_graphics_30,x:9.8,y:-80.5}).wait(1).to({graphics:mask_1_graphics_31,x:9.8,y:-81.2}).wait(1).to({graphics:mask_1_graphics_32,x:9.8,y:-81.9}).wait(1).to({graphics:mask_1_graphics_33,x:9.8,y:-82.6}).wait(1).to({graphics:mask_1_graphics_34,x:9.8,y:-83.3}).wait(1).to({graphics:mask_1_graphics_35,x:9.8,y:-84}).wait(1).to({graphics:mask_1_graphics_36,x:9.8,y:-84.8}).wait(1).to({graphics:mask_1_graphics_37,x:9.8,y:-85.5}).wait(1).to({graphics:mask_1_graphics_38,x:9.8,y:-86.2}).wait(1).to({graphics:mask_1_graphics_39,x:9.8,y:-86.9}).wait(1).to({graphics:mask_1_graphics_40,x:9.8,y:-87.6}).wait(1).to({graphics:mask_1_graphics_41,x:9.8,y:-88.3}).wait(1).to({graphics:mask_1_graphics_42,x:9.8,y:-89}).wait(1).to({graphics:mask_1_graphics_43,x:9.8,y:-89.7}).wait(1).to({graphics:mask_1_graphics_44,x:9.8,y:-90.4}).wait(1).to({graphics:mask_1_graphics_45,x:9.8,y:-91.1}).wait(1).to({graphics:mask_1_graphics_46,x:9.8,y:-91.9}).wait(1).to({graphics:mask_1_graphics_47,x:9.8,y:-92.6}).wait(1).to({graphics:mask_1_graphics_48,x:9.8,y:-93.3}).wait(1).to({graphics:mask_1_graphics_49,x:9.8,y:-94}).wait(1).to({graphics:mask_1_graphics_50,x:9.8,y:-94.7}).wait(1).to({graphics:mask_1_graphics_51,x:9.8,y:-95.4}).wait(1).to({graphics:mask_1_graphics_52,x:9.8,y:-96.1}).wait(1).to({graphics:mask_1_graphics_53,x:9.8,y:-96.8}).wait(1).to({graphics:mask_1_graphics_54,x:9.8,y:-97.5}).wait(1).to({graphics:mask_1_graphics_55,x:9.8,y:-98.2}).wait(1).to({graphics:mask_1_graphics_56,x:9.8,y:-99}).wait(1).to({graphics:mask_1_graphics_57,x:9.8,y:-99.7}).wait(1).to({graphics:mask_1_graphics_58,x:9.8,y:-100.4}).wait(1).to({graphics:mask_1_graphics_59,x:9.8,y:-101.1}).wait(1).to({graphics:mask_1_graphics_60,x:9.8,y:-101.8}).wait(1).to({graphics:mask_1_graphics_61,x:9.8,y:-102.5}).wait(1).to({graphics:mask_1_graphics_62,x:9.8,y:-103.2}).wait(1).to({graphics:mask_1_graphics_63,x:9.8,y:-103.9}).wait(1).to({graphics:mask_1_graphics_64,x:9.8,y:-104.6}).wait(1).to({graphics:mask_1_graphics_65,x:9.8,y:-105.3}).wait(1).to({graphics:mask_1_graphics_66,x:9.8,y:-106.1}).wait(1).to({graphics:mask_1_graphics_67,x:9.8,y:-106.8}).wait(1).to({graphics:mask_1_graphics_68,x:9.8,y:-107.5}).wait(1).to({graphics:mask_1_graphics_69,x:9.8,y:-108.2}).wait(1).to({graphics:mask_1_graphics_70,x:9.8,y:-108.9}).wait(1).to({graphics:mask_1_graphics_71,x:9.8,y:-109.6}).wait(1).to({graphics:mask_1_graphics_72,x:9.8,y:-110.3}).wait(1).to({graphics:mask_1_graphics_73,x:9.8,y:-111}).wait(1).to({graphics:mask_1_graphics_74,x:9.8,y:-111.7}).wait(1).to({graphics:mask_1_graphics_75,x:9.8,y:-112.4}).wait(1).to({graphics:mask_1_graphics_76,x:9.8,y:-113.2}).wait(1).to({graphics:mask_1_graphics_77,x:9.8,y:-113.9}).wait(1).to({graphics:mask_1_graphics_78,x:9.8,y:-114.6}).wait(1).to({graphics:mask_1_graphics_79,x:9.8,y:-115.3}).wait(1).to({graphics:mask_1_graphics_80,x:9.8,y:-116}).wait(1).to({graphics:mask_1_graphics_81,x:9.8,y:-116.7}).wait(1).to({graphics:mask_1_graphics_82,x:9.8,y:-117.4}).wait(1).to({graphics:mask_1_graphics_83,x:9.8,y:-118.1}).wait(1).to({graphics:mask_1_graphics_84,x:9.8,y:-118.8}).wait(1).to({graphics:mask_1_graphics_85,x:9.8,y:-119.5}).wait(1).to({graphics:mask_1_graphics_86,x:9.8,y:-120.3}).wait(1).to({graphics:mask_1_graphics_87,x:9.8,y:-121}).wait(1).to({graphics:mask_1_graphics_88,x:9.8,y:-121.7}).wait(1).to({graphics:mask_1_graphics_89,x:9.8,y:-97.4}).wait(31));

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


(lib.ar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-27,21.4,1,1,-135);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:33.2,y:-27},74).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AiggCIA+gvIBvCTIg9Aug");
	var mask_graphics_1 = new cjs.Graphics().p("AhagvIBGg0IBvCTIhGA0g");
	var mask_graphics_2 = new cjs.Graphics().p("AhegsIBOg6IBuCSIhMA7g");
	var mask_graphics_3 = new cjs.Graphics().p("AhhgpIBUhAIBvCTIhUBAg");
	var mask_graphics_4 = new cjs.Graphics().p("AhlgmIBchGIBvCTIhcBGg");
	var mask_graphics_5 = new cjs.Graphics().p("AhogjIBjhLIBuCSIhjBLg");
	var mask_graphics_6 = new cjs.Graphics().p("AhsggIBqhRIBvCSIhqBRg");
	var mask_graphics_7 = new cjs.Graphics().p("AhwgdIBxhXIBwCSIhxBXg");
	var mask_graphics_8 = new cjs.Graphics().p("Ah0gaIB5hdIBwCTIh5Bcg");
	var mask_graphics_9 = new cjs.Graphics().p("Ah4gYICBhiIBwCTIiBBig");
	var mask_graphics_10 = new cjs.Graphics().p("Ah7gVICHhoIBwCTIiIBog");
	var mask_graphics_11 = new cjs.Graphics().p("Ah/gSICPhuIBwCTIiPBug");
	var mask_graphics_12 = new cjs.Graphics().p("AiDgPICXhzIBwCSIiXBzg");
	var mask_graphics_13 = new cjs.Graphics().p("AiHgNICfh4IBwCSIifB5g");
	var mask_graphics_14 = new cjs.Graphics().p("AiKgKIClh+IBwCSIilB/g");
	var mask_graphics_15 = new cjs.Graphics().p("AiOgHICtiEIBwCTIitCEg");
	var mask_graphics_16 = new cjs.Graphics().p("AiSgEIC1iKIBwCTIi1CKg");
	var mask_graphics_17 = new cjs.Graphics().p("AiWgBIC8iPIBxCSIi8CPg");
	var mask_graphics_18 = new cjs.Graphics().p("AiZABIDDiVIBwCUIjDCUg");
	var mask_graphics_19 = new cjs.Graphics().p("AidAEIDLiaIBwCUIjLCZg");
	var mask_graphics_20 = new cjs.Graphics().p("AihAGIDTifIBwCUIjTCfg");
	var mask_graphics_21 = new cjs.Graphics().p("AilAJIDbilIBvCUIjZClg");
	var mask_graphics_22 = new cjs.Graphics().p("AioAMIDhirIBwCUIjhCqg");
	var mask_graphics_23 = new cjs.Graphics().p("AisAPIDpixIBwCUIjpCwg");
	var mask_graphics_24 = new cjs.Graphics().p("AiwASIDxi2IBwCTIjxC2g");
	var mask_graphics_25 = new cjs.Graphics().p("AizAVID4i8IBvCTIj4C8g");
	var mask_graphics_26 = new cjs.Graphics().p("Ai3AXID/jBIBwCUIj/DBg");
	var mask_graphics_27 = new cjs.Graphics().p("Ai7AaIEHjHIBwCUIkHDHg");
	var mask_graphics_28 = new cjs.Graphics().p("Ai/AdIEPjMIBwCTIkPDNg");
	var mask_graphics_29 = new cjs.Graphics().p("AjCAgIEWjTIBvCUIkWDTg");
	var mask_graphics_30 = new cjs.Graphics().p("AjGAjIEdjYIBwCTIkdDYg");
	var mask_graphics_31 = new cjs.Graphics().p("AjKAmIEljeIBwCTIklDeg");
	var mask_graphics_32 = new cjs.Graphics().p("AjOAoIEtjjIBwCTIktDkg");
	var mask_graphics_33 = new cjs.Graphics().p("AjRArIEzjpIBwCTIkzDqg");
	var mask_graphics_34 = new cjs.Graphics().p("AjVAuIE7jvIBwCUIk7Dug");
	var mask_graphics_35 = new cjs.Graphics().p("AjZAxIFDj0IBwCTIlDD0g");
	var mask_graphics_36 = new cjs.Graphics().p("AjdA0IFKj6IBxCTIlKD6g");
	var mask_graphics_37 = new cjs.Graphics().p("AjhA2IFSj/IBxCTIlSEAg");
	var mask_graphics_38 = new cjs.Graphics().p("AjkA5IFZkFIBwCUIlZEFg");
	var mask_graphics_39 = new cjs.Graphics().p("AjoA8IFhkLIBwCUIlhELg");
	var mask_graphics_40 = new cjs.Graphics().p("AjsA/IFpkRIBwCUIlpERg");
	var mask_graphics_41 = new cjs.Graphics().p("AjwBCIFwkWIBxCTIlwEWg");
	var mask_graphics_42 = new cjs.Graphics().p("AjzBFIF3kcIBwCTIl3Ecg");
	var mask_graphics_43 = new cjs.Graphics().p("Aj3BIIF/kiIBwCTIl/Eig");
	var mask_graphics_44 = new cjs.Graphics().p("Aj7BLIGGkoIBxCTImHEog");
	var mask_graphics_45 = new cjs.Graphics().p("Aj+BNIGNktIBwCUImNEtg");
	var mask_graphics_46 = new cjs.Graphics().p("AkCBQIGVkzIBwCUImVEzg");
	var mask_graphics_47 = new cjs.Graphics().p("AkGBTIGdk4IBwCTImdE5g");
	var mask_graphics_48 = new cjs.Graphics().p("AkKBWIGlk+IBvCTImkE/g");
	var mask_graphics_49 = new cjs.Graphics().p("AkNBYIGrlDIBwCUImrFDg");
	var mask_graphics_50 = new cjs.Graphics().p("AkRBbIGzlJIBwCTImzFKg");
	var mask_graphics_51 = new cjs.Graphics().p("AkUBeIG6lPIBvCUIm6FPg");
	var mask_graphics_52 = new cjs.Graphics().p("AkYBhIHClVIBvCUInCFVg");
	var mask_graphics_53 = new cjs.Graphics().p("AkcBkIHJlbIBwCUInJFag");
	var mask_graphics_54 = new cjs.Graphics().p("AkgBnIHRlgIBwCTInRFgg");
	var mask_graphics_55 = new cjs.Graphics().p("AkkBqIHZlmIBwCTInZFmg");
	var mask_graphics_56 = new cjs.Graphics().p("AknBsIHflrIBwCUIngFrg");
	var mask_graphics_57 = new cjs.Graphics().p("AkrBvIHnlxIBwCUInnFxg");
	var mask_graphics_58 = new cjs.Graphics().p("AkvByIHvl2IBwCTInvF3g");
	var mask_graphics_59 = new cjs.Graphics().p("AkzB1IH3l8IBwCTIn3F9g");
	var mask_graphics_60 = new cjs.Graphics().p("Ak2B4IH9mCIBxCTIn/GCg");
	var mask_graphics_61 = new cjs.Graphics().p("Ak6B7IIFmIIBwCTIoFGIg");
	var mask_graphics_62 = new cjs.Graphics().p("Ak+B+IINmOIBwCUIoNGNg");
	var mask_graphics_63 = new cjs.Graphics().p("AlCCAIIUmTIBxCUIoUGTg");
	var mask_graphics_64 = new cjs.Graphics().p("AlFCDIIbmZIBwCUIobGYg");
	var mask_graphics_65 = new cjs.Graphics().p("AlJCGIIjmeIBwCTIojGeg");
	var mask_graphics_66 = new cjs.Graphics().p("AlNCJIIrmkIBwCTIorGkg");
	var mask_graphics_67 = new cjs.Graphics().p("AlRCMIIzmqIBwCTIozGqg");
	var mask_graphics_68 = new cjs.Graphics().p("AlVCOII7mvIBwCUIo6Gvg");
	var mask_graphics_69 = new cjs.Graphics().p("AlYCRIJBm1IBwCUIpBG1g");
	var mask_graphics_70 = new cjs.Graphics().p("AlcCUIJJm7IBwCUIpJG7g");
	var mask_graphics_71 = new cjs.Graphics().p("AlfCXIJQnBIBwCUIpRHBg");
	var mask_graphics_72 = new cjs.Graphics().p("AljCaIJXnGIBwCTIpXHGg");
	var mask_graphics_73 = new cjs.Graphics().p("AlnCdIJfnMIBwCTIpfHMg");
	var mask_graphics_74 = new cjs.Graphics().p("AlrCgIJnnSIBwCTIpnHSg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-16.1,y:14.4}).wait(1).to({graphics:mask_graphics_1,x:-23.1,y:18.9}).wait(1).to({graphics:mask_graphics_2,x:-22.7,y:18.6}).wait(1).to({graphics:mask_graphics_3,x:-22.4,y:18.3}).wait(1).to({graphics:mask_graphics_4,x:-22,y:18}).wait(1).to({graphics:mask_graphics_5,x:-21.6,y:17.7}).wait(1).to({graphics:mask_graphics_6,x:-21.2,y:17.4}).wait(1).to({graphics:mask_graphics_7,x:-20.8,y:17.2}).wait(1).to({graphics:mask_graphics_8,x:-20.4,y:16.9}).wait(1).to({graphics:mask_graphics_9,x:-20.1,y:16.6}).wait(1).to({graphics:mask_graphics_10,x:-19.7,y:16.3}).wait(1).to({graphics:mask_graphics_11,x:-19.3,y:16}).wait(1).to({graphics:mask_graphics_12,x:-18.9,y:15.7}).wait(1).to({graphics:mask_graphics_13,x:-18.6,y:15.4}).wait(1).to({graphics:mask_graphics_14,x:-18.2,y:15.1}).wait(1).to({graphics:mask_graphics_15,x:-17.8,y:14.8}).wait(1).to({graphics:mask_graphics_16,x:-17.4,y:14.5}).wait(1).to({graphics:mask_graphics_17,x:-17,y:14.3}).wait(1).to({graphics:mask_graphics_18,x:-16.7,y:14}).wait(1).to({graphics:mask_graphics_19,x:-16.3,y:13.7}).wait(1).to({graphics:mask_graphics_20,x:-15.9,y:13.4}).wait(1).to({graphics:mask_graphics_21,x:-15.5,y:13.1}).wait(1).to({graphics:mask_graphics_22,x:-15.2,y:12.8}).wait(1).to({graphics:mask_graphics_23,x:-14.8,y:12.5}).wait(1).to({graphics:mask_graphics_24,x:-14.4,y:12.2}).wait(1).to({graphics:mask_graphics_25,x:-14,y:11.9}).wait(1).to({graphics:mask_graphics_26,x:-13.6,y:11.6}).wait(1).to({graphics:mask_graphics_27,x:-13.2,y:11.3}).wait(1).to({graphics:mask_graphics_28,x:-12.9,y:11.1}).wait(1).to({graphics:mask_graphics_29,x:-12.5,y:10.8}).wait(1).to({graphics:mask_graphics_30,x:-12.1,y:10.5}).wait(1).to({graphics:mask_graphics_31,x:-11.7,y:10.2}).wait(1).to({graphics:mask_graphics_32,x:-11.4,y:9.9}).wait(1).to({graphics:mask_graphics_33,x:-11,y:9.6}).wait(1).to({graphics:mask_graphics_34,x:-10.6,y:9.3}).wait(1).to({graphics:mask_graphics_35,x:-10.2,y:9}).wait(1).to({graphics:mask_graphics_36,x:-9.8,y:8.7}).wait(1).to({graphics:mask_graphics_37,x:-9.4,y:8.5}).wait(1).to({graphics:mask_graphics_38,x:-9.1,y:8.2}).wait(1).to({graphics:mask_graphics_39,x:-8.7,y:7.9}).wait(1).to({graphics:mask_graphics_40,x:-8.3,y:7.6}).wait(1).to({graphics:mask_graphics_41,x:-7.9,y:7.3}).wait(1).to({graphics:mask_graphics_42,x:-7.5,y:7}).wait(1).to({graphics:mask_graphics_43,x:-7.2,y:6.7}).wait(1).to({graphics:mask_graphics_44,x:-6.8,y:6.4}).wait(1).to({graphics:mask_graphics_45,x:-6.4,y:6.1}).wait(1).to({graphics:mask_graphics_46,x:-6,y:5.8}).wait(1).to({graphics:mask_graphics_47,x:-5.7,y:5.6}).wait(1).to({graphics:mask_graphics_48,x:-5.3,y:5.3}).wait(1).to({graphics:mask_graphics_49,x:-4.9,y:5}).wait(1).to({graphics:mask_graphics_50,x:-4.5,y:4.7}).wait(1).to({graphics:mask_graphics_51,x:-4.1,y:4.4}).wait(1).to({graphics:mask_graphics_52,x:-3.7,y:4.1}).wait(1).to({graphics:mask_graphics_53,x:-3.4,y:3.8}).wait(1).to({graphics:mask_graphics_54,x:-3,y:3.5}).wait(1).to({graphics:mask_graphics_55,x:-2.6,y:3.2}).wait(1).to({graphics:mask_graphics_56,x:-2.2,y:2.9}).wait(1).to({graphics:mask_graphics_57,x:-1.9,y:2.6}).wait(1).to({graphics:mask_graphics_58,x:-1.5,y:2.4}).wait(1).to({graphics:mask_graphics_59,x:-1.1,y:2.1}).wait(1).to({graphics:mask_graphics_60,x:-0.7,y:1.8}).wait(1).to({graphics:mask_graphics_61,x:-0.3,y:1.5}).wait(1).to({graphics:mask_graphics_62,x:0,y:1.2}).wait(1).to({graphics:mask_graphics_63,x:0.4,y:0.9}).wait(1).to({graphics:mask_graphics_64,x:0.8,y:0.6}).wait(1).to({graphics:mask_graphics_65,x:1.2,y:0.3}).wait(1).to({graphics:mask_graphics_66,x:1.5,y:0}).wait(1).to({graphics:mask_graphics_67,x:1.9,y:-0.3}).wait(1).to({graphics:mask_graphics_68,x:2.3,y:-0.5}).wait(1).to({graphics:mask_graphics_69,x:2.7,y:-0.8}).wait(1).to({graphics:mask_graphics_70,x:3.1,y:-1.1}).wait(1).to({graphics:mask_graphics_71,x:3.5,y:-1.4}).wait(1).to({graphics:mask_graphics_72,x:3.8,y:-1.7}).wait(1).to({graphics:mask_graphics_73,x:4.2,y:-2}).wait(1).to({graphics:mask_graphics_74,x:4.6,y:-2.3}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AjtEeQCHkkFUkW");
	this.shape.setTransform(3.5,-4.5,1,1,-167.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(75));

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
(lib.WS_Cursive_N = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_543 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(543).call(this.frame_543).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(119.9,159.8,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[120,159.9,159.2,135.5,181.7,143.6,204.2,151.8,212.8,174.3,221.3,196.7,202.8,238.8,182.1,278,167.2,308.2,152.4,338.3,119.4,405.6]}},180).wait(15).to({startPosition:0},0).to({guide:{path:[119.3,405.5,158,329.9,196.8,254.3,236.5,212,275.7,198.1,295.3,191.1,307.4,191.2,319.6,191.3,324.4,198.6,334,212.9,302.8,269.8,271.5,326.7,256.4,362.9,248.8,381,249.6,391.7,250.5,402.4,259.7,405.6,278.2,412,310.2,400.3,342.1,388.7,378.6,355.6,414.8,322.7,429.7,302.2]}},260).wait(14).to({x:430.1},0).to({guide:{path:[430,302.1,423.7,266.9,479,217.9,534.5,168.8,631.8,212.1]}},65).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(120.8,404.9,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},180).wait(15).to({_off:false,x:428.8,y:301.9},0).to({_off:true},260).wait(80));

	// Layer 14
	this.instance_1 = new lib.ar7("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(187.9,329.5,0.88,1,22.4,0,0,-1.2,-99.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(204).to({_off:false},0).wait(340));

	// Layer 12 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_453 = new cjs.Graphics().p("AldCRIAAkhIK7AAIAAEhg");
	var mask_graphics_454 = new cjs.Graphics().p("AldCiIAAlDIK7AAIAAFDg");
	var mask_graphics_455 = new cjs.Graphics().p("AldC0IAAlmIK7AAIAAFmg");
	var mask_graphics_456 = new cjs.Graphics().p("AldDFIAAmJIK7AAIAAGJg");
	var mask_graphics_457 = new cjs.Graphics().p("AldDWIAAmrIK7AAIAAGrg");
	var mask_graphics_458 = new cjs.Graphics().p("AldDnIAAnNIK7AAIAAHNg");
	var mask_graphics_459 = new cjs.Graphics().p("AldD5IAAnxIK7AAIAAHxg");
	var mask_graphics_460 = new cjs.Graphics().p("AldEKIAAoTIK7AAIAAITg");
	var mask_graphics_461 = new cjs.Graphics().p("AldEbIAAo1IK7AAIAAI1g");
	var mask_graphics_462 = new cjs.Graphics().p("AldEsIAApYIK7AAIAAJYg");
	var mask_graphics_463 = new cjs.Graphics().p("AldE+IAAp7IK7AAIAAJ7g");
	var mask_graphics_464 = new cjs.Graphics().p("AX1b5IAAqeIK8AAIAAKeg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(453).to({graphics:mask_graphics_453,x:410,y:342.5}).wait(1).to({graphics:mask_graphics_454,x:410,y:340.8}).wait(1).to({graphics:mask_graphics_455,x:410,y:339.1}).wait(1).to({graphics:mask_graphics_456,x:410,y:337.3}).wait(1).to({graphics:mask_graphics_457,x:410,y:335.6}).wait(1).to({graphics:mask_graphics_458,x:410,y:333.9}).wait(1).to({graphics:mask_graphics_459,x:410,y:332.2}).wait(1).to({graphics:mask_graphics_460,x:410,y:330.5}).wait(1).to({graphics:mask_graphics_461,x:410,y:328.7}).wait(1).to({graphics:mask_graphics_462,x:410,y:327}).wait(1).to({graphics:mask_graphics_463,x:410,y:325.3}).wait(1).to({graphics:mask_graphics_464,x:222.5,y:178.5}).wait(80));

	// Layer 11
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(20,1,1).p("AvrmBQFbl/EhiaQEhiZCYBgQCaBgkaJEQkaJDiFFQQiFFPCGA0QCHAzD/hcQD/hdFakrQFZksCHjA");
	this.shape_1.setTransform(310.7,297.9,1.157,1.065);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(453).to({_off:false},0).wait(91));

	// Layer 8 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_377 = new cjs.Graphics().p("AuyJfQEGrbK+lMQK+lMLbEHQLbEFFMK9Mg0+AZCQlLq+EFrag");
	var mask_1_graphics_378 = new cjs.Graphics().p("Au2J1QD1rhK2lcQK2lcLgD1QLhD0FcK2Mg0XAaQQlcq3D1rfg");
	var mask_1_graphics_379 = new cjs.Graphics().p("Au5KLQDjrmKvlsQKtltLmDlQLmDiFsKtMgzuAbeQltquDkrlg");
	var mask_1_graphics_380 = new cjs.Graphics().p("Au7KiQDSrrKml9QKkl8LrDTQLsDRF8KlMgzFAcrQl8qmDSrqg");
	var mask_1_graphics_381 = new cjs.Graphics().p("Au7K5QDBrwKcmMQKcmLLvDBQLwDAGMKbMgyZAd2QmLqcDArvg");
	var mask_1_graphics_382 = new cjs.Graphics().p("Au6LRQCvr0KTmbQKSmcL0CwQL1CuGbKSMgxrAfBQmcqTCvrzg");
	var mask_1_graphics_383 = new cjs.Graphics().p("Au3LpQCdr4KKmqQKImrL3CfQL5CcGqKIMgw8AgKQmqqJCdr3g");
	var mask_1_graphics_384 = new cjs.Graphics().p("AuzMCQCMr8J/m5QJ+m5L7CMQL7CLG6J+MgwLAhSQm5p/CLr6g");
	var mask_1_graphics_385 = new cjs.Graphics().p("AutMbQB6r/J0nHQJznIL/B6QL+B5HIJ1MgvYAiYQnIp0B6r+g");
	var mask_1_graphics_386 = new cjs.Graphics().p("AumM1QBosCJpnWQJpnWMBBpQMBBmHWJqMgujAjfQnXpqBosAg");
	var mask_1_graphics_387 = new cjs.Graphics().p("AueNPQBWsEJenkQJenlMDBXQMDBVHlJfMgtuAkjQnlpfBWsCg");
	var mask_1_graphics_388 = new cjs.Graphics().p("AuUNqQBEsGJTnyQJSnzMEBFQMFBDHzJTMgs2AlmQnzpSBEsEg");
	var mask_1_graphics_389 = new cjs.Graphics().p("AuJOFQAysHJHoAQJGoBMGAzQMGAxIBJHMgr9AmpQoBpHAysFg");
	var mask_1_graphics_390 = new cjs.Graphics().p("At8OgQAfsII7oNQI6oOMHAhQMHAfIOI7MgrCAnpQoOo7AgsGg");
	var mask_1_graphics_391 = new cjs.Graphics().p("AtuO8QANsJIvoaQItobMIAPQMHANIbIuMgqGAopQobovAOsGg");
	var mask_1_graphics_392 = new cjs.Graphics().p("AtfPYQgEsJIhonQIhonMIgEQMHgFIoIiMgpJApmQooohgEsHg");
	var mask_1_graphics_393 = new cjs.Graphics().p("AtOP1QgXsJIVozQIUo1MHgVQMHgXI1IUMgoLAqjQo0oUgWsGg");
	var mask_1_graphics_394 = new cjs.Graphics().p("As8QRQgpsHIIpAQIGpBMGgnQMHgpJBIHMgnKAreQpBoHgosGg");
	var mask_1_graphics_395 = new cjs.Graphics().p("AspQuQg6sGH5pLQH5pNMFg5QMGg8JMH6MgmIAsXQpMn5g7sFg");
	var mask_1_graphics_396 = new cjs.Graphics().p("AsURMQhNsFHspXQHrpYMEhMQMDhNJZHsMglGAtPQpYnshMsCg");
	var mask_1_graphics_397 = new cjs.Graphics().p("Ar+RpQhfsCHepjQHdpjMBhdQMChgJjHeMgkAAuGQpknehesBg");
	var mask_1_graphics_398 = new cjs.Graphics().p("ArmSJQhxsAHPpuQHNpvMAhwQL/hyJuHPMgi4Au8QpvnOhxr+g");
	var mask_1_graphics_399 = new cjs.Graphics().p("ArMSoQiEr9HAp5QG+p6L8iCQL8iFJ6HAMghwAvyQp5nAiDr7g");
	var mask_1_graphics_400 = new cjs.Graphics().p("AqxTIQiWr6GwqDQGvqFL5iVQL4iXKEGwMgglAwlQqDmwiWr3g");
	var mask_1_graphics_401 = new cjs.Graphics().p("AqVToQior2GgqOQGfqOL1ioQL1ipKOGgMgfZAxXQqOmhiorzg");
	var mask_1_graphics_402 = new cjs.Graphics().p("Ap3UIQi7rxGRqYQGQqZLwi5QLwi8KYGQMgeMAyHQqXmRi7rvg");
	var mask_1_graphics_403 = new cjs.Graphics().p("ApYUoQjNrsGAqhQGAqiLrjMQLsjOKiGAMgc+Ay0QqhmAjNrrg");
	var mask_1_graphics_404 = new cjs.Graphics().p("Ao3VJQjfroFvqqQFwqrLmjeQLmjfKrFvMgbvAzgQqqlwjerlg");
	var mask_1_graphics_405 = new cjs.Graphics().p("AoVVqQjxriFfqzQFfq0LgjvQLgjyK0FfMgaeA0JQqzlfjwrfg");
	var mask_1_graphics_406 = new cjs.Graphics().p("AnyWKQkDrbFOq7QFOq8LakCQLbkDK8FOMgZNA0xQq7lOkCrag");
	var mask_1_graphics_407 = new cjs.Graphics().p("AnOWrQkUrVE9rEQE9rDLTkTQLUkVLEE9MgX6A1YQrDk9kUrUg");
	var mask_1_graphics_408 = new cjs.Graphics().p("AmoXNQkmrPEsrLQErrKLNklQLNknLLEsMgWnA18QrKksklrMg");
	var mask_1_graphics_409 = new cjs.Graphics().p("AmCXuQk3rHEbrTQEarRLGk2QLFk4LSEbMgVTA2dQrRkak3rFg");
	var mask_1_graphics_410 = new cjs.Graphics().p("AlaYPQlIq/EJrZQEJrYK9lHQK+lJLZEJMgT+A29QrYkJlIq9g");
	var mask_1_graphics_411 = new cjs.Graphics().p("AkaZCQliqzDtriQDurhKxlhQKxljLiDuMgR7A3qQrijtlgqxg");
	var mask_1_graphics_412 = new cjs.Graphics().p("AjYZ1Ql8qlDSrqQDTrqKjl6QKjl8LrDSMgP2A4SQrqjSl6qjg");
	var mask_1_graphics_413 = new cjs.Graphics().p("AiTaoQmVqWC3ryQC2rxKVmTQKVmVLxC2MgNvA42Qryi2mSqVg");
	var mask_1_graphics_414 = new cjs.Graphics().p("AhMbbQmtqHCar4QCbr3KFmrQKFmtL5CaMgLoA5TQr4iamrqFg");
	var mask_1_graphics_415 = new cjs.Graphics().p("AgCcOQnFp3B+r9QB+r8J1nDQJ1nFL9B+MgJfA5sQr9h9nCp1g");
	var mask_1_graphics_416 = new cjs.Graphics().p("ABJdAQnbplBisBQBhsBJknaQJknbMBBhMgHVA6AQsChhnapkg");
	var mask_1_graphics_417 = new cjs.Graphics().p("ACXdzQnxpTBFsFQBEsDJSnxQJSnyMFBFMgFMA6PQsEhFnxpRg");
	var mask_1_graphics_418 = new cjs.Graphics().p("ADnelQoGpBAosGQAosGI/oGQI/oIMGAoMgDBA6ZQsGgooHo+g");
	var mask_1_graphics_419 = new cjs.Graphics().p("AE6fWQocosALsIQALsGIsocQIrocMHALMgA2A6dQsHgLoborg");
	var mask_1_graphics_420 = new cjs.Graphics().p("EAFjAgHQowoYgRsIQgSsGIXovQIXoxMHgSMABVA6dIgxAAQroAAoeoFg");
	var mask_1_graphics_421 = new cjs.Graphics().p("EAF0Ag2QpEoDgusGQgusHICpCQIBpEMGguMADgA6XQhAADg/AAQq3AAoTnWg");
	var mask_1_graphics_422 = new cjs.Graphics().p("EAGGAhiQpXnthLsEQhLsEHspVQHspXMEhLMAFqA6MQhmAKhkAAQqJAAoGmqg");
	var mask_1_graphics_423 = new cjs.Graphics().p("EAGmAilQpynJh5r+Qh4r+HIpxQHHpzL+h4MAJGA5vQihAaiaAAQpGAAnvlog");
	var mask_1_graphics_424 = new cjs.Graphics().p("EAHLAjiQqMmiimr2Qilr1GjqLQGgqNL1imMAMgA5HQjXAvjPAAQoIAAnTkrg");
	var mask_1_graphics_425 = new cjs.Graphics().p("EAH1AkaQqkl7jSrqQjTrqF8qjQF5qkLqjSMAP3A4QQkLBMkBAAQnQAAmxj0g");
	var mask_1_graphics_426 = new cjs.Graphics().p("EAIiAlNQq5lSj+rdQj+rcFTq4QFQq6Lcj+MATLA3PQk7Btk0AAQmZAAmNjBg");
	var mask_1_graphics_427 = new cjs.Graphics().p("EAJTAl6QrLkpkprMQkprMEprKQEnrMLLkpMAWZA1/QlmCVlnAAQllAAlliUg");
	var mask_1_graphics_428 = new cjs.Graphics().p("EAKIAmhQrcj9lSq6QlTq5D+rcQD8rbK4lTMAZkA0kQmPDCmbAAQkyAAk5hsg");
	var mask_1_graphics_429 = new cjs.Graphics().p("EALBAnCQrqjRl7qkQl8qkDTrqQDQrpKjl7MAcoAy9Qm0D1nQAAQkAAAkJhLg");
	var mask_1_graphics_430 = new cjs.Graphics().p("EAL9AneQr2immiqMQmiqMCmr1QCjr0KMmjMAflAxLQnUEtoJAAQjOAAjVgug");
	var mask_1_graphics_431 = new cjs.Graphics().p("EAM8AnyQr+h4nIpyQnIpyB5r9QB2r9JynIMAicAvNQnxFqpGAAQiZAAifgZg");
	var mask_1_graphics_432 = new cjs.Graphics().p("EAN+AoBQsEhLnspWQnspWBLsDQBJsCJWntMAlKAtGQoHGsqKAAQhiAAhlgJg");
	var mask_1_graphics_433 = new cjs.Graphics().p("EAPDAoIQsHgcoOo4QoQo4AesGQAbsFI4oPMAnxAqzQobH1rTAAIhPgCg");
	var mask_1_graphics_434 = new cjs.Graphics().p("EgEsAgDQowoYgQsGQgTsFIYoxMAqOAoYQoXIxsGARIgwAAQroAAoeoGg");
	var mask_1_graphics_435 = new cjs.Graphics().p("EgD/AhMQpPn1g+sEQhAsEH2pOMAsiAl0Qn1JOsDA/QhXAIhUAAQqcAAoMm+g");
	var mask_1_graphics_436 = new cjs.Graphics().p("EgDLAiRQprnShsr/Qhur+HSprMAutAjGQnSJsr+BsQiRAViMAAQpYAAn1l5g");
	var mask_1_graphics_437 = new cjs.Graphics().p("EgCQAjQQqGmsiZr3Qibr3GsqFMAwsAgRQmsKGr2CaQjJApjBAAQoYAAnak7g");
	var mask_1_graphics_438 = new cjs.Graphics().p("EgBPAkKQqemGjGrsQjHrsGFqdMAyhAdVQmGKerrDGQj9BDj1AAQneAAm6kBg");
	var mask_1_graphics_439 = new cjs.Graphics().p("EgAmAkqQqrltjgrlQjirlFtqqMAziAbgQltKsrkDgQkbBWkTAAQm9AAmmjhg");
	var mask_1_graphics_440 = new cjs.Graphics().p("EAAFAlIQq3lUj6rdQj9rcFVq3MA0fAZpQlUK4rcD8Qk4BrkxAAQmcAAmRjEg");
	var mask_1_graphics_441 = new cjs.Graphics().p("EAA0AlkQrDk7kVrUQkWrSE7rDMA1YAXxQk7LErSEVQlTCClQAAQl9AAl4iog");
	var mask_1_graphics_442 = new cjs.Graphics().p("EABkAl+QrOkikurJQkwrIEhrOMA2NAV2QkiLPrIEvQltCbluAAQleAAlfiOg");
	var mask_1_graphics_443 = new cjs.Graphics().p("EACWAmWQrYkIlHq+QlKq9EIrZMA29AT7QkILZq9FIQmFC2mOAAQk/AAlFh2g");
	var mask_1_graphics_444 = new cjs.Graphics().p("EADKAmsQrhjulgqyQliqxDtriMA3pAR9QjuLhqxFhQmcDUmuAAQkhAAkphgg");
	var mask_1_graphics_445 = new cjs.Graphics().p("EAEAAnAQrpjUl5qlQl6qkDTrqMA4QAP9QjULqqjF5QmzDznPAAQkCAAkMhMg");
	var mask_1_graphics_446 = new cjs.Graphics().p("EAE4AnRQrwi4mRqYQmTqWC5rxMA4yAN7Qi5LyqVGRQnHETnxAAQjkAAjtg6g");
	var mask_1_graphics_447 = new cjs.Graphics().p("EAFxAnhQr2iemoqJQmqqHCer3MA5PAL5QidL3qHGpQnaE2oUAAQjFAAjOgqg");
	var mask_1_graphics_448 = new cjs.Graphics().p("EAGtAntQr8iCm/p5QnBp4CDr8MA5pAJ1QiDL9p3G/QnrFco5AAQimAAisgeg");
	var mask_1_graphics_449 = new cjs.Graphics().p("EAHpAn4Qr/hnnWppQnXpnBnsBMA5+AHyQhnMApoHWQn6GDpgAAQiFAAiLgTg");
	var mask_1_graphics_450 = new cjs.Graphics().p("EAIoAoAQsDhLnspYQntpWBMsFMA6OAFtQhMMFpWHrQoIGrqKAAQhjAAhngKg");
	var mask_1_graphics_451 = new cjs.Graphics().p("EAJoAoGQsGgwoApGQoCpEAwsHMA6YADoQgwMGpEIBQoUHWq2AAQhAAAhCgEg");
	var mask_1_graphics_452 = new cjs.Graphics().p("EAKpAoJQsHgUoVozQoWoyAUsIMA6fABiQgVMIoxIVQofIDrkAAIg4gBg");
	var mask_1_graphics_453 = new cjs.Graphics().p("ApFfxQoqoegIsIMA6hgAkQAHMIoeIpQogIqsIAHIgVAAQr6AAohoYg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(377).to({graphics:mask_1_graphics_377,x:251.4,y:203.9}).wait(1).to({graphics:mask_1_graphics_378,x:250.4,y:205.9}).wait(1).to({graphics:mask_1_graphics_379,x:249.4,y:207.8}).wait(1).to({graphics:mask_1_graphics_380,x:248.4,y:209.8}).wait(1).to({graphics:mask_1_graphics_381,x:247.3,y:211.6}).wait(1).to({graphics:mask_1_graphics_382,x:246.2,y:213.5}).wait(1).to({graphics:mask_1_graphics_383,x:245,y:215.3}).wait(1).to({graphics:mask_1_graphics_384,x:243.8,y:217.1}).wait(1).to({graphics:mask_1_graphics_385,x:242.5,y:218.9}).wait(1).to({graphics:mask_1_graphics_386,x:241.2,y:220.7}).wait(1).to({graphics:mask_1_graphics_387,x:239.9,y:222.4}).wait(1).to({graphics:mask_1_graphics_388,x:238.5,y:224}).wait(1).to({graphics:mask_1_graphics_389,x:237.1,y:225.7}).wait(1).to({graphics:mask_1_graphics_390,x:235.6,y:227.3}).wait(1).to({graphics:mask_1_graphics_391,x:234.1,y:228.9}).wait(1).to({graphics:mask_1_graphics_392,x:232.6,y:230.4}).wait(1).to({graphics:mask_1_graphics_393,x:231.1,y:231.9}).wait(1).to({graphics:mask_1_graphics_394,x:229.5,y:233.4}).wait(1).to({graphics:mask_1_graphics_395,x:227.8,y:234.8}).wait(1).to({graphics:mask_1_graphics_396,x:226.2,y:236.2}).wait(1).to({graphics:mask_1_graphics_397,x:224.4,y:237.6}).wait(1).to({graphics:mask_1_graphics_398,x:222.6,y:238.9}).wait(1).to({graphics:mask_1_graphics_399,x:220.8,y:240.3}).wait(1).to({graphics:mask_1_graphics_400,x:218.9,y:241.5}).wait(1).to({graphics:mask_1_graphics_401,x:217,y:242.8}).wait(1).to({graphics:mask_1_graphics_402,x:215.1,y:244}).wait(1).to({graphics:mask_1_graphics_403,x:213.2,y:245.1}).wait(1).to({graphics:mask_1_graphics_404,x:211.2,y:246.2}).wait(1).to({graphics:mask_1_graphics_405,x:209.2,y:247.2}).wait(1).to({graphics:mask_1_graphics_406,x:207.2,y:248.2}).wait(1).to({graphics:mask_1_graphics_407,x:205.1,y:249.2}).wait(1).to({graphics:mask_1_graphics_408,x:203,y:250.1}).wait(1).to({graphics:mask_1_graphics_409,x:200.9,y:250.9}).wait(1).to({graphics:mask_1_graphics_410,x:198.8,y:251.7}).wait(1).to({graphics:mask_1_graphics_411,x:195.5,y:252.8}).wait(1).to({graphics:mask_1_graphics_412,x:192.2,y:253.8}).wait(1).to({graphics:mask_1_graphics_413,x:188.8,y:254.7}).wait(1).to({graphics:mask_1_graphics_414,x:185.5,y:255.4}).wait(1).to({graphics:mask_1_graphics_415,x:182,y:256}).wait(1).to({graphics:mask_1_graphics_416,x:178.6,y:256.5}).wait(1).to({graphics:mask_1_graphics_417,x:175.2,y:256.9}).wait(1).to({graphics:mask_1_graphics_418,x:171.7,y:257.1}).wait(1).to({graphics:mask_1_graphics_419,x:168.2,y:257.2}).wait(1).to({graphics:mask_1_graphics_420,x:169,y:257.2}).wait(1).to({graphics:mask_1_graphics_421,x:172.5,y:257.2}).wait(1).to({graphics:mask_1_graphics_422,x:175.9,y:257.2}).wait(1).to({graphics:mask_1_graphics_423,x:181.4,y:257.3}).wait(1).to({graphics:mask_1_graphics_424,x:186.8,y:257.3}).wait(1).to({graphics:mask_1_graphics_425,x:192.2,y:257.4}).wait(1).to({graphics:mask_1_graphics_426,x:197.5,y:257.4}).wait(1).to({graphics:mask_1_graphics_427,x:202.6,y:257.4}).wait(1).to({graphics:mask_1_graphics_428,x:207.7,y:257.3}).wait(1).to({graphics:mask_1_graphics_429,x:212.6,y:257.3}).wait(1).to({graphics:mask_1_graphics_430,x:217.3,y:257.2}).wait(1).to({graphics:mask_1_graphics_431,x:221.9,y:257.1}).wait(1).to({graphics:mask_1_graphics_432,x:226.2,y:257}).wait(1).to({graphics:mask_1_graphics_433,x:230.4,y:257}).wait(1).to({graphics:mask_1_graphics_434,x:234.3,y:256.9}).wait(1).to({graphics:mask_1_graphics_435,x:238,y:257}).wait(1).to({graphics:mask_1_graphics_436,x:241.5,y:257}).wait(1).to({graphics:mask_1_graphics_437,x:244.6,y:257.1}).wait(1).to({graphics:mask_1_graphics_438,x:247.6,y:257.1}).wait(1).to({graphics:mask_1_graphics_439,x:249.2,y:257.1}).wait(1).to({graphics:mask_1_graphics_440,x:250.7,y:257.2}).wait(1).to({graphics:mask_1_graphics_441,x:252.1,y:257.2}).wait(1).to({graphics:mask_1_graphics_442,x:253.4,y:257.2}).wait(1).to({graphics:mask_1_graphics_443,x:254.6,y:257.2}).wait(1).to({graphics:mask_1_graphics_444,x:255.7,y:257.2}).wait(1).to({graphics:mask_1_graphics_445,x:256.7,y:257.2}).wait(1).to({graphics:mask_1_graphics_446,x:257.5,y:257.1}).wait(1).to({graphics:mask_1_graphics_447,x:258.2,y:257.1}).wait(1).to({graphics:mask_1_graphics_448,x:258.9,y:257.1}).wait(1).to({graphics:mask_1_graphics_449,x:259.4,y:257.1}).wait(1).to({graphics:mask_1_graphics_450,x:259.8,y:257}).wait(1).to({graphics:mask_1_graphics_451,x:260,y:257}).wait(1).to({graphics:mask_1_graphics_452,x:260.2,y:257}).wait(1).to({graphics:mask_1_graphics_453,x:260.2,y:256.9}).wait(91));

	// Layer 9
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(20,1,1).p("AvrmBQFbl/EhiaQEhiZCYBgQCaBgkaJEQkaJDiFFQQiFFPCGA0QCHAzD/hcQD/hdFakrQFZksCHjA");
	this.shape_2.setTransform(310.7,297.9,1.157,1.065);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(377).to({_off:false},0).wait(167));

	// Layer 7 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_311 = new cjs.Graphics().p("ALVP0IAAksINSAAIAAEsg");
	var mask_2_graphics_312 = new cjs.Graphics().p("AnNCWIAAkrIObAAIAAErg");
	var mask_2_graphics_313 = new cjs.Graphics().p("AnzCWIAAkrIPnAAIAAErg");
	var mask_2_graphics_314 = new cjs.Graphics().p("AJlP0IAAksIQzAAIAAEsg");
	var mask_2_graphics_315 = new cjs.Graphics().p("AJbP0IAAksIRHAAIAAEsg");
	var mask_2_graphics_316 = new cjs.Graphics().p("AojCjIAAlGIRHAAIAAFGg");
	var mask_2_graphics_317 = new cjs.Graphics().p("AojCxIAAlhIRHAAIAAFhg");
	var mask_2_graphics_318 = new cjs.Graphics().p("AojC+IAAl8IRHAAIAAF8g");
	var mask_2_graphics_319 = new cjs.Graphics().p("AojDMIAAmXIRHAAIAAGXg");
	var mask_2_graphics_320 = new cjs.Graphics().p("AojDZIAAmyIRHAAIAAGyg");
	var mask_2_graphics_321 = new cjs.Graphics().p("AojDnIAAnNIRHAAIAAHNg");
	var mask_2_graphics_322 = new cjs.Graphics().p("AojD0IAAnoIRHAAIAAHog");
	var mask_2_graphics_323 = new cjs.Graphics().p("AojECIAAoDIRHAAIAAIDg");
	var mask_2_graphics_324 = new cjs.Graphics().p("AojEPIAAoeIRHAAIAAIeg");
	var mask_2_graphics_325 = new cjs.Graphics().p("AojEdIAAo5IRHAAIAAI5g");
	var mask_2_graphics_326 = new cjs.Graphics().p("AojEqIAApTIRHAAIAAJTg");
	var mask_2_graphics_327 = new cjs.Graphics().p("AojE4IAApvIRHAAIAAJvg");
	var mask_2_graphics_328 = new cjs.Graphics().p("AojFFIAAqJIRHAAIAAKJg");
	var mask_2_graphics_329 = new cjs.Graphics().p("AojFTIAAqlIRHAAIAAKlg");
	var mask_2_graphics_330 = new cjs.Graphics().p("AojFgIAAq/IRHAAIAAK/g");
	var mask_2_graphics_331 = new cjs.Graphics().p("AojFuIAArbIRHAAIAALbg");
	var mask_2_graphics_332 = new cjs.Graphics().p("AojF7IAAr1IRHAAIAAL1g");
	var mask_2_graphics_333 = new cjs.Graphics().p("AojGJIAAsRIRHAAIAAMRg");
	var mask_2_graphics_334 = new cjs.Graphics().p("AojGWIAAsrIRHAAIAAMrg");
	var mask_2_graphics_335 = new cjs.Graphics().p("AojGkIAAtHIRHAAIAANHg");
	var mask_2_graphics_336 = new cjs.Graphics().p("AojGxIAAthIRHAAIAANhg");
	var mask_2_graphics_337 = new cjs.Graphics().p("AojG/IAAt9IRHAAIAAN9g");
	var mask_2_graphics_338 = new cjs.Graphics().p("AojHMIAAuXIRHAAIAAOXg");
	var mask_2_graphics_339 = new cjs.Graphics().p("AojHaIAAuzIRHAAIAAOzg");
	var mask_2_graphics_340 = new cjs.Graphics().p("AojHnIAAvNIRHAAIAAPNg");
	var mask_2_graphics_341 = new cjs.Graphics().p("AojH1IAAvpIRHAAIAAPpg");
	var mask_2_graphics_342 = new cjs.Graphics().p("AojICIAAwDIRHAAIAAQDg");
	var mask_2_graphics_343 = new cjs.Graphics().p("AojIQIAAwfIRHAAIAAQfg");
	var mask_2_graphics_344 = new cjs.Graphics().p("AojIdIAAw5IRHAAIAAQ5g");
	var mask_2_graphics_345 = new cjs.Graphics().p("AojIqIAAxUIRHAAIAARUg");
	var mask_2_graphics_346 = new cjs.Graphics().p("AojI4IAAxvIRHAAIAARvg");
	var mask_2_graphics_347 = new cjs.Graphics().p("AojJFIAAyKIRHAAIAASKg");
	var mask_2_graphics_348 = new cjs.Graphics().p("AojJTIAAylIRHAAIAASlg");
	var mask_2_graphics_349 = new cjs.Graphics().p("AojJgIAAzAIRHAAIAATAg");
	var mask_2_graphics_350 = new cjs.Graphics().p("AojJuIAAzbIRHAAIAATbg");
	var mask_2_graphics_351 = new cjs.Graphics().p("AojJ7IAAz2IRHAAIAAT2g");
	var mask_2_graphics_352 = new cjs.Graphics().p("AojKJIAA0RIRHAAIAAURg");
	var mask_2_graphics_353 = new cjs.Graphics().p("AJbX1IAA0tIRHAAIAAUtg");
	var mask_2_graphics_354 = new cjs.Graphics().p("AojKjIAA1GIRHAAIAAVGg");
	var mask_2_graphics_355 = new cjs.Graphics().p("AojKwIAA1fIRHAAIAAVfg");
	var mask_2_graphics_356 = new cjs.Graphics().p("AojK9IAA15IRHAAIAAV5g");
	var mask_2_graphics_357 = new cjs.Graphics().p("AojLKIAA2TIRHAAIAAWTg");
	var mask_2_graphics_358 = new cjs.Graphics().p("AojLXIAA2tIRHAAIAAWtg");
	var mask_2_graphics_359 = new cjs.Graphics().p("AojLkIAA3HIRHAAIAAXHg");
	var mask_2_graphics_360 = new cjs.Graphics().p("AojLxIAA3hIRHAAIAAXhg");
	var mask_2_graphics_361 = new cjs.Graphics().p("AojL+IAA37IRHAAIAAX7g");
	var mask_2_graphics_362 = new cjs.Graphics().p("AojMLIAA4VIRHAAIAAYVg");
	var mask_2_graphics_363 = new cjs.Graphics().p("AojMYIAA4vIRHAAIAAYvg");
	var mask_2_graphics_364 = new cjs.Graphics().p("AojMlIAA5JIRHAAIAAZJg");
	var mask_2_graphics_365 = new cjs.Graphics().p("AojMxIAA5hIRHAAIAAZhg");
	var mask_2_graphics_366 = new cjs.Graphics().p("AojM+IAA57IRHAAIAAZ7g");
	var mask_2_graphics_367 = new cjs.Graphics().p("AojNLIAA6VIRHAAIAAaVg");
	var mask_2_graphics_368 = new cjs.Graphics().p("AojNYIAA6vIRHAAIAAavg");
	var mask_2_graphics_369 = new cjs.Graphics().p("AojNlIAA7JIRHAAIAAbJg");
	var mask_2_graphics_370 = new cjs.Graphics().p("AojNyIAA7jIRHAAIAAbjg");
	var mask_2_graphics_371 = new cjs.Graphics().p("AojN/IAA79IRHAAIAAb9g");
	var mask_2_graphics_372 = new cjs.Graphics().p("AojOMIAA8XIRHAAIAAcXg");
	var mask_2_graphics_373 = new cjs.Graphics().p("AojOZIAA8xIRHAAIAAcxg");
	var mask_2_graphics_374 = new cjs.Graphics().p("AojOmIAA9LIRHAAIAAdLg");
	var mask_2_graphics_375 = new cjs.Graphics().p("AojOzIAA9lIRHAAIAAdlg");
	var mask_2_graphics_376 = new cjs.Graphics().p("AojPAIAA9/IRHAAIAAd/g");
	var mask_2_graphics_377 = new cjs.Graphics().p("AJbcsIAA+ZIRHAAIAAeZg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(311).to({graphics:mask_2_graphics_311,x:157.5,y:101.2}).wait(1).to({graphics:mask_2_graphics_312,x:276.3,y:187.5}).wait(1).to({graphics:mask_2_graphics_313,x:280.1,y:187.5}).wait(1).to({graphics:mask_2_graphics_314,x:168.8,y:101.2}).wait(1).to({graphics:mask_2_graphics_315,x:169.8,y:101.2}).wait(1).to({graphics:mask_2_graphics_316,x:284.9,y:188.8}).wait(1).to({graphics:mask_2_graphics_317,x:284.9,y:190.2}).wait(1).to({graphics:mask_2_graphics_318,x:284.9,y:191.5}).wait(1).to({graphics:mask_2_graphics_319,x:284.9,y:192.9}).wait(1).to({graphics:mask_2_graphics_320,x:284.9,y:194.2}).wait(1).to({graphics:mask_2_graphics_321,x:284.9,y:195.6}).wait(1).to({graphics:mask_2_graphics_322,x:284.9,y:196.9}).wait(1).to({graphics:mask_2_graphics_323,x:284.9,y:198.3}).wait(1).to({graphics:mask_2_graphics_324,x:284.9,y:199.6}).wait(1).to({graphics:mask_2_graphics_325,x:284.9,y:201}).wait(1).to({graphics:mask_2_graphics_326,x:284.9,y:202.3}).wait(1).to({graphics:mask_2_graphics_327,x:284.9,y:203.7}).wait(1).to({graphics:mask_2_graphics_328,x:284.9,y:205}).wait(1).to({graphics:mask_2_graphics_329,x:284.9,y:206.4}).wait(1).to({graphics:mask_2_graphics_330,x:284.9,y:207.7}).wait(1).to({graphics:mask_2_graphics_331,x:284.9,y:209.1}).wait(1).to({graphics:mask_2_graphics_332,x:284.9,y:210.4}).wait(1).to({graphics:mask_2_graphics_333,x:284.9,y:211.8}).wait(1).to({graphics:mask_2_graphics_334,x:284.9,y:213.1}).wait(1).to({graphics:mask_2_graphics_335,x:284.9,y:214.5}).wait(1).to({graphics:mask_2_graphics_336,x:284.9,y:215.8}).wait(1).to({graphics:mask_2_graphics_337,x:284.9,y:217.2}).wait(1).to({graphics:mask_2_graphics_338,x:284.9,y:218.5}).wait(1).to({graphics:mask_2_graphics_339,x:284.9,y:219.9}).wait(1).to({graphics:mask_2_graphics_340,x:284.9,y:221.2}).wait(1).to({graphics:mask_2_graphics_341,x:284.9,y:222.6}).wait(1).to({graphics:mask_2_graphics_342,x:284.9,y:223.9}).wait(1).to({graphics:mask_2_graphics_343,x:284.9,y:225.3}).wait(1).to({graphics:mask_2_graphics_344,x:284.9,y:226.7}).wait(1).to({graphics:mask_2_graphics_345,x:284.9,y:228}).wait(1).to({graphics:mask_2_graphics_346,x:284.9,y:229.4}).wait(1).to({graphics:mask_2_graphics_347,x:284.9,y:230.7}).wait(1).to({graphics:mask_2_graphics_348,x:284.9,y:232.1}).wait(1).to({graphics:mask_2_graphics_349,x:284.9,y:233.4}).wait(1).to({graphics:mask_2_graphics_350,x:284.9,y:234.8}).wait(1).to({graphics:mask_2_graphics_351,x:284.9,y:236.1}).wait(1).to({graphics:mask_2_graphics_352,x:284.9,y:237.5}).wait(1).to({graphics:mask_2_graphics_353,x:169.8,y:152.5}).wait(1).to({graphics:mask_2_graphics_354,x:284.9,y:240.1}).wait(1).to({graphics:mask_2_graphics_355,x:284.9,y:241.4}).wait(1).to({graphics:mask_2_graphics_356,x:284.9,y:242.7}).wait(1).to({graphics:mask_2_graphics_357,x:284.9,y:244}).wait(1).to({graphics:mask_2_graphics_358,x:284.9,y:245.3}).wait(1).to({graphics:mask_2_graphics_359,x:284.9,y:246.6}).wait(1).to({graphics:mask_2_graphics_360,x:284.9,y:247.9}).wait(1).to({graphics:mask_2_graphics_361,x:284.9,y:249.2}).wait(1).to({graphics:mask_2_graphics_362,x:284.9,y:250.5}).wait(1).to({graphics:mask_2_graphics_363,x:284.9,y:251.8}).wait(1).to({graphics:mask_2_graphics_364,x:284.9,y:253}).wait(1).to({graphics:mask_2_graphics_365,x:284.9,y:254.4}).wait(1).to({graphics:mask_2_graphics_366,x:284.9,y:255.7}).wait(1).to({graphics:mask_2_graphics_367,x:284.9,y:256.9}).wait(1).to({graphics:mask_2_graphics_368,x:284.9,y:258.2}).wait(1).to({graphics:mask_2_graphics_369,x:284.9,y:259.5}).wait(1).to({graphics:mask_2_graphics_370,x:284.9,y:260.8}).wait(1).to({graphics:mask_2_graphics_371,x:284.9,y:262.1}).wait(1).to({graphics:mask_2_graphics_372,x:284.9,y:263.4}).wait(1).to({graphics:mask_2_graphics_373,x:284.9,y:264.7}).wait(1).to({graphics:mask_2_graphics_374,x:284.9,y:266}).wait(1).to({graphics:mask_2_graphics_375,x:284.9,y:267.3}).wait(1).to({graphics:mask_2_graphics_376,x:284.9,y:268.6}).wait(1).to({graphics:mask_2_graphics_377,x:169.8,y:183.6}).wait(167));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(20,1,1).p("AvrmBQFbl/EhiaQEhiZCYBgQCaBgkaJEQkaJDiFFQQiFFPCGA0QCHAzD/hcQD/hdFakrQFZksCHjA");
	this.shape_3.setTransform(310.7,297.9,1.157,1.065);
	this.shape_3._off = true;

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(311).to({_off:false},0).wait(233));

	// Layer 10 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_263 = new cjs.Graphics().p("AKQdvQnchBkil+Qkdl2A5nRMAj5AE5QhGHOl2EdQk5Dul4AAQhTAAhXgMg");
	var mask_3_graphics_264 = new cjs.Graphics().p("AJkdnQnZhVkRmKQkNmDBMnNMAjqAGaQhZHLmDENQktDRlaAAQhsAAhwgUg");
	var mask_3_graphics_265 = new cjs.Graphics().p("AI5ddQnVhqkAmVQj8mOBgnKMAjWAH9QhtHGmND8QkgC2lAAAQiDAAiIgeg");
	var mask_3_graphics_266 = new cjs.Graphics().p("AIPdQQnQh9jumgQjqmYBznGMAi+AJdQiAHCmYDrQkRCckmAAQiaAAiggrg");
	var mask_3_graphics_267 = new cjs.Graphics().p("AHndCQnKiRjcmqQjZmiCHnAMAiiAK9QiTG7miDZQkBCGkNAAQixAAi2g6g");
	var mask_3_graphics_268 = new cjs.Graphics().p("AHBcyQnCiljLmzQjGmrCZm5MAiCAMaQimG1mrDHQjwBwj1AAQjHAAjLhKg");
	var mask_3_graphics_269 = new cjs.Graphics().p("AGdcgQm7i4i4m8Qi0mzCsmyMAheAN3Qi5GumyC0QjeBcjeAAQjeAAjehcg");
	var mask_3_graphics_270 = new cjs.Graphics().p("AF6cMQmzjLiknDQihm6C/mrMAg1APSQjLGmm6ChQjKBKjHAAQj1AAjxhwg");
	var mask_3_graphics_271 = new cjs.Graphics().p("AFZb2QmpjdiRnKQiPnBDSmiMAgKAQsQjeGcnACOQi1A6ixAAQkNAAkCiGg");
	var mask_3_graphics_272 = new cjs.Graphics().p("AE6beQmfjvh+nQQh6nGDjmZIfaSDQjvGSnGB7QifAriaAAQkmAAkSidg");
	var mask_3_graphics_273 = new cjs.Graphics().p("AEdbFQmVkBhpnVQhnnLD0mPIenTZQkAGHnLBoQiIAeiCAAQlAAAkhi2g");
	var mask_3_graphics_274 = new cjs.Graphics().p("AEDaqQmKkThVnYQhTnPEFmEIdvUrQkQF8nPBUQhwAUhrAAQlbAAktjRg");
	var mask_3_graphics_275 = new cjs.Graphics().p("ADqaNQl+kjhAncQhAnSEVl5Ic2V8QkhFwnSBAQhWAMhTAAQl4AAk5jug");
	var mask_3_graphics_276 = new cjs.Graphics().p("ADTZuQlwkzgtneQgrnVEklsIb5XKQkxFjnUAsQg8AGg6AAQmXAAlDkNg");
	var mask_3_graphics_277 = new cjs.Graphics().p("AC/ZOQljlDgYnfQgXnXE0leIa2YVQk/FVnVAYQghACggAAQm3AAlMktg");
	var mask_3_graphics_278 = new cjs.Graphics().p("ACsYsQlVlSgDngQgDnXFDlQIZyZcQlNFInWAEIgIAAQnbAAlUlPg");
	var mask_3_graphics_279 = new cjs.Graphics().p("APDd6QnggSlHlgQlGlgASngQARnWFRlCIYraiQlKEpm4AAIgwgBg");
	var mask_3_graphics_280 = new cjs.Graphics().p("AOld3Qnfgmk3luQk3luAmneQAlnVFfk0IXgbkQlAEJmXAAQgyAAg0gEg");
	var mask_3_graphics_281 = new cjs.Graphics().p("AOIdyQndg7kol7Qknl6A7ndQA6nTFrkkIWTcjQk2Drl3AAQhMAAhOgKg");
	var mask_3_graphics_282 = new cjs.Graphics().p("ANrdrQnahQkXmHQkWmHBPnZQBNnQF4kVIVDdfQkqDOlaAAQhkAAhogRg");
	var mask_3_graphics_283 = new cjs.Graphics().p("ANPdiQnWhkkGmTQkFmSBjnWQBhnNGEkDITxeWQkdC0k+AAQh8AAiBgbg");
	var mask_3_graphics_284 = new cjs.Graphics().p("AM0dWQnRh4j0mdQj0meB3nQQB0nIGPjzISdfLQkOCakkAAQiTAAiZgng");
	var mask_3_graphics_285 = new cjs.Graphics().p("AMbdJQnMiMjimnQjimoCKnLQCJnCGZjiIRGf7Qj/CEkLAAQipAAivg1g");
	var mask_3_graphics_286 = new cjs.Graphics().p("AMCc6QnFigjQmxQjPmwCdnGQCcm7GijRMAPuAgpQjtBuj0AAQjAAAjEhEg");
	var mask_3_graphics_287 = new cjs.Graphics().p("ALrcoQm+iyi+m6Qi8m5Cxm+QCvm0Gri/MAOSAhSQjaBajcAAQjXABjYhXg");
	var mask_3_graphics_288 = new cjs.Graphics().p("ALVcVQm2jFirnBQipnCDEm1QDBmtGzisMAM2Ah4QjHBIjEAAQjuAAjrhqg");
	var mask_3_graphics_289 = new cjs.Graphics().p("ALAcAQmtjYiXnIQiWnIDWmtQDUmjG6iaMALYAiZQiyA4iuAAQkGAAj8h/g");
	var mask_3_graphics_290 = new cjs.Graphics().p("AKsbqQmjjriEnOQiDnODqmjQDlmaHAiHMAJ5Ai2QicAqiXAAQkeAAkNiVg");
	var mask_3_graphics_291 = new cjs.Graphics().p("AKZbRQmYj8hwnTQhvnUD8mZQD2mPHGhzMAIZAjPQiGAdiAAAQk4AAkciug");
	var mask_3_graphics_292 = new cjs.Graphics().p("AKIa3QmNkOhbnXQhbnYEMmOQEImFHKhfMAG3AjkQhtAThpAAQlSAAkqjIg");
	var mask_3_graphics_293 = new cjs.Graphics().p("AJ5abQmCkfhHnbQhHnbEemCQEYl5HOhLMAFVAj0QhUAMhRAAQlvAAk1jlg");
	var mask_3_graphics_294 = new cjs.Graphics().p("AJqZ9Ql1kvgyndQgyneEul1QEoltHQg4MADzAkBQg6AGg5AAQmNAAlAkDg");
	var mask_3_graphics_295 = new cjs.Graphics().p("AJdZdQlok+gdngQgenfE+lnQE3lhHSgjMACQAkJIg+ACQmtAAlJkjg");
	var mask_3_graphics_296 = new cjs.Graphics().p("AJUZDQldlKgOngQgNngFJlcQFElWHTgUMABCAkNIgTAAQnIAAlPk9g");
	var mask_3_graphics_297 = new cjs.Graphics().p("AJGYpQlSlWADngQACnhFVlQQFPlMHTgEMgALAkOQnUgJlLlOg");
	var mask_3_graphics_298 = new cjs.Graphics().p("AIYYOQlGlhASngQATngFglFQFalAHTALMgBaAkMQnSgYlAlZg");
	var mask_3_graphics_299 = new cjs.Graphics().p("AHrXyQk6lrAinfQAjnfFrk5QFkk0HTAaMgCoAkIQnRgok0lkg");
	var mask_3_graphics_300 = new cjs.Graphics().p("AG+XXQktl2AyneQAzndF1ktQFukoHSArMgD0AkBQnRg4kolug");
	var mask_3_graphics_301 = new cjs.Graphics().p("AGTW7Qkhl/BDncQBDncF/kgQF4kbHQA6MgFCAj3QnOhHkcl4g");
	var mask_3_graphics_302 = new cjs.Graphics().p("AFpWgQkUmKBTnZQBSnZGJkTQGBkPHOBKMgGOAjrQnMhXkPmAg");
	var mask_3_graphics_303 = new cjs.Graphics().p("AFAWEQkGmSBinXQBinWGSkGQGKkBHLBZMgHbAjdQnIhnkCmJg");
	var mask_3_graphics_304 = new cjs.Graphics().p("AEZVoQj5mbBynTQBynSGaj4QGTj1HHBpMgImAjLQnFh1j0mSg");
	var mask_3_graphics_305 = new cjs.Graphics().p("ADyVMQjrmjCCnPQCBnOGjjrQGajmHEB3MgJxAi5QnBiFjnmag");
	var mask_3_graphics_306 = new cjs.Graphics().p("ADNUwQjcmrCQnKQCRnJGqjdQGijZHACHMgK8AiiQm8iUjZmhg");
	var mask_3_graphics_307 = new cjs.Graphics().p("ACpUUQjNmyCfnFQChnEGxjOQGpjLG7CWMgMGAiJQm3ijjLmog");
	var mask_3_graphics_308 = new cjs.Graphics().p("ACHT4Qi/m4CvnAQCvm+G4jAQGvi8G2CkMgNPAhuQmwixi9mvg");
	var mask_3_graphics_309 = new cjs.Graphics().p("ABmTcQiwm+C9m6QC/m4G+ixQG1iuGwCzMgOWAhRQmrjAium1g");
	var mask_3_graphics_310 = new cjs.Graphics().p("ABGTBQihnFDMmyQDNmyHEiiQG7ifGqDBMgPdAgxQmkjOigm6g");
	var mask_3_graphics_311 = new cjs.Graphics().p("AAoSlQiSnKDbmrQDbmqHJiTQHAiRGkDQMgQkAgOQmcjbiRnAg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(263).to({graphics:mask_3_graphics_263,x:195.9,y:191.5}).wait(1).to({graphics:mask_3_graphics_264,x:195.5,y:191.5}).wait(1).to({graphics:mask_3_graphics_265,x:195,y:191.5}).wait(1).to({graphics:mask_3_graphics_266,x:194.4,y:191.5}).wait(1).to({graphics:mask_3_graphics_267,x:193.7,y:191.6}).wait(1).to({graphics:mask_3_graphics_268,x:192.9,y:191.6}).wait(1).to({graphics:mask_3_graphics_269,x:192,y:191.6}).wait(1).to({graphics:mask_3_graphics_270,x:191,y:191.6}).wait(1).to({graphics:mask_3_graphics_271,x:190,y:191.6}).wait(1).to({graphics:mask_3_graphics_272,x:188.8,y:191.5}).wait(1).to({graphics:mask_3_graphics_273,x:187.5,y:191.5}).wait(1).to({graphics:mask_3_graphics_274,x:186.1,y:191.5}).wait(1).to({graphics:mask_3_graphics_275,x:184.7,y:191.5}).wait(1).to({graphics:mask_3_graphics_276,x:183.2,y:191.5}).wait(1).to({graphics:mask_3_graphics_277,x:181.5,y:191.5}).wait(1).to({graphics:mask_3_graphics_278,x:179.8,y:191.5}).wait(1).to({graphics:mask_3_graphics_279,x:178.1,y:191.5}).wait(1).to({graphics:mask_3_graphics_280,x:176.2,y:191.5}).wait(1).to({graphics:mask_3_graphics_281,x:174.3,y:191.6}).wait(1).to({graphics:mask_3_graphics_282,x:172.3,y:191.6}).wait(1).to({graphics:mask_3_graphics_283,x:170.3,y:191.7}).wait(1).to({graphics:mask_3_graphics_284,x:168.2,y:191.7}).wait(1).to({graphics:mask_3_graphics_285,x:166.1,y:191.8}).wait(1).to({graphics:mask_3_graphics_286,x:163.9,y:191.8}).wait(1).to({graphics:mask_3_graphics_287,x:161.6,y:191.8}).wait(1).to({graphics:mask_3_graphics_288,x:159.3,y:191.9}).wait(1).to({graphics:mask_3_graphics_289,x:157,y:191.9}).wait(1).to({graphics:mask_3_graphics_290,x:154.6,y:191.9}).wait(1).to({graphics:mask_3_graphics_291,x:152.3,y:191.9}).wait(1).to({graphics:mask_3_graphics_292,x:149.8,y:191.9}).wait(1).to({graphics:mask_3_graphics_293,x:147.4,y:192}).wait(1).to({graphics:mask_3_graphics_294,x:145,y:192}).wait(1).to({graphics:mask_3_graphics_295,x:142.5,y:192}).wait(1).to({graphics:mask_3_graphics_296,x:140.6,y:192}).wait(1).to({graphics:mask_3_graphics_297,x:139.2,y:192}).wait(1).to({graphics:mask_3_graphics_298,x:141.2,y:191.9}).wait(1).to({graphics:mask_3_graphics_299,x:143.2,y:191.8}).wait(1).to({graphics:mask_3_graphics_300,x:145.1,y:191.7}).wait(1).to({graphics:mask_3_graphics_301,x:147.1,y:191.4}).wait(1).to({graphics:mask_3_graphics_302,x:149,y:191.1}).wait(1).to({graphics:mask_3_graphics_303,x:150.9,y:190.8}).wait(1).to({graphics:mask_3_graphics_304,x:152.8,y:190.3}).wait(1).to({graphics:mask_3_graphics_305,x:154.7,y:189.9}).wait(1).to({graphics:mask_3_graphics_306,x:156.6,y:189.3}).wait(1).to({graphics:mask_3_graphics_307,x:158.5,y:188.7}).wait(1).to({graphics:mask_3_graphics_308,x:160.3,y:188}).wait(1).to({graphics:mask_3_graphics_309,x:162.1,y:187.3}).wait(1).to({graphics:mask_3_graphics_310,x:163.9,y:186.5}).wait(1).to({graphics:mask_3_graphics_311,x:165.7,y:185.6}).wait(233));

	// Layer 6
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(20,1,1).p("AqOFKQGRmXFNikQFOikCyBnQCnBgkVIk");
	this.shape_4.setTransform(260.1,223.8);
	this.shape_4._off = true;

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(263).to({_off:false},0).wait(281));

	// Layer 18
	this.instance_2 = new lib.ar1("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(136.7,75.4,1,1,0,137.6,-42.4,-0.7,0.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(535));

	// Layer 5 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_107 = new cjs.Graphics().p("AlxUUIAAnWIXvAAIAAHWg");
	var mask_4_graphics_108 = new cjs.Graphics().p("Ar3D0IAAnnIXvAAIAAHng");
	var mask_4_graphics_109 = new cjs.Graphics().p("Ar3D9IAAn5IXvAAIAAH5g");
	var mask_4_graphics_110 = new cjs.Graphics().p("Ar3EGIAAoLIXvAAIAAILg");
	var mask_4_graphics_111 = new cjs.Graphics().p("Ar3EPIAAodIXvAAIAAIdg");
	var mask_4_graphics_112 = new cjs.Graphics().p("Ar3EYIAAovIXvAAIAAIvg");
	var mask_4_graphics_113 = new cjs.Graphics().p("Ar3EhIAApBIXvAAIAAJBg");
	var mask_4_graphics_114 = new cjs.Graphics().p("Ar3EqIAApTIXvAAIAAJTg");
	var mask_4_graphics_115 = new cjs.Graphics().p("Ar3EzIAAplIXvAAIAAJlg");
	var mask_4_graphics_116 = new cjs.Graphics().p("Ar3E8IAAp3IXvAAIAAJ3g");
	var mask_4_graphics_117 = new cjs.Graphics().p("Ar3FFIAAqJIXvAAIAAKJg");
	var mask_4_graphics_118 = new cjs.Graphics().p("Ar3FOIAAqbIXvAAIAAKbg");
	var mask_4_graphics_119 = new cjs.Graphics().p("Ar3FXIAAqtIXvAAIAAKtg");
	var mask_4_graphics_120 = new cjs.Graphics().p("Ar3FgIAAq/IXvAAIAAK/g");
	var mask_4_graphics_121 = new cjs.Graphics().p("Ar3FpIAArRIXvAAIAALRg");
	var mask_4_graphics_122 = new cjs.Graphics().p("Ar3FyIAArjIXvAAIAALjg");
	var mask_4_graphics_123 = new cjs.Graphics().p("Ar3F7IAAr1IXvAAIAAL1g");
	var mask_4_graphics_124 = new cjs.Graphics().p("Ar3GEIAAsHIXvAAIAAMHg");
	var mask_4_graphics_125 = new cjs.Graphics().p("Ar3GNIAAsZIXvAAIAAMZg");
	var mask_4_graphics_126 = new cjs.Graphics().p("Ar3GWIAAsrIXvAAIAAMrg");
	var mask_4_graphics_127 = new cjs.Graphics().p("Ar3GfIAAs9IXvAAIAAM9g");
	var mask_4_graphics_128 = new cjs.Graphics().p("Ar3GoIAAtPIXvAAIAANPg");
	var mask_4_graphics_129 = new cjs.Graphics().p("Ar3GxIAAthIXvAAIAANhg");
	var mask_4_graphics_130 = new cjs.Graphics().p("Ar3G6IAAtzIXvAAIAANzg");
	var mask_4_graphics_131 = new cjs.Graphics().p("Ar3HDIAAuFIXvAAIAAOFg");
	var mask_4_graphics_132 = new cjs.Graphics().p("Ar3HMIAAuXIXvAAIAAOXg");
	var mask_4_graphics_133 = new cjs.Graphics().p("Ar3HVIAAupIXvAAIAAOpg");
	var mask_4_graphics_134 = new cjs.Graphics().p("Ar3HeIAAu7IXvAAIAAO7g");
	var mask_4_graphics_135 = new cjs.Graphics().p("Ar3HnIAAvNIXvAAIAAPNg");
	var mask_4_graphics_136 = new cjs.Graphics().p("Ar3HwIAAvfIXvAAIAAPfg");
	var mask_4_graphics_137 = new cjs.Graphics().p("Ar3H5IAAvxIXvAAIAAPxg");
	var mask_4_graphics_138 = new cjs.Graphics().p("Ar3ICIAAwDIXvAAIAAQDg");
	var mask_4_graphics_139 = new cjs.Graphics().p("Ar3ILIAAwVIXvAAIAAQVg");
	var mask_4_graphics_140 = new cjs.Graphics().p("Ar3IUIAAwnIXvAAIAAQng");
	var mask_4_graphics_141 = new cjs.Graphics().p("Ar3IdIAAw5IXvAAIAAQ5g");
	var mask_4_graphics_142 = new cjs.Graphics().p("Ar3ImIAAxLIXvAAIAARLg");
	var mask_4_graphics_143 = new cjs.Graphics().p("Ar3IvIAAxdIXvAAIAARdg");
	var mask_4_graphics_144 = new cjs.Graphics().p("Ar3I4IAAxvIXvAAIAARvg");
	var mask_4_graphics_145 = new cjs.Graphics().p("Ar3JBIAAyBIXvAAIAASBg");
	var mask_4_graphics_146 = new cjs.Graphics().p("Ar3JKIAAyTIXvAAIAASTg");
	var mask_4_graphics_147 = new cjs.Graphics().p("Ar3JTIAAylIXvAAIAASlg");
	var mask_4_graphics_148 = new cjs.Graphics().p("Ar3JcIAAy3IXvAAIAAS3g");
	var mask_4_graphics_149 = new cjs.Graphics().p("Ar3JlIAAzJIXvAAIAATJg");
	var mask_4_graphics_150 = new cjs.Graphics().p("Ar3JuIAAzbIXvAAIAATbg");
	var mask_4_graphics_151 = new cjs.Graphics().p("Ar3J3IAAztIXvAAIAATtg");
	var mask_4_graphics_152 = new cjs.Graphics().p("Ar3KAIAAz/IXvAAIAAT/g");
	var mask_4_graphics_153 = new cjs.Graphics().p("Ar3KJIAA0RIXvAAIAAURg");
	var mask_4_graphics_154 = new cjs.Graphics().p("Ar3KSIAA0jIXvAAIAAUjg");
	var mask_4_graphics_155 = new cjs.Graphics().p("Ar3KbIAA01IXvAAIAAU1g");
	var mask_4_graphics_156 = new cjs.Graphics().p("Ar3KkIAA1HIXvAAIAAVHg");
	var mask_4_graphics_157 = new cjs.Graphics().p("Ar3KtIAA1ZIXvAAIAAVZg");
	var mask_4_graphics_158 = new cjs.Graphics().p("Ar3K2IAA1rIXvAAIAAVrg");
	var mask_4_graphics_159 = new cjs.Graphics().p("Ar3K/IAA19IXvAAIAAV9g");
	var mask_4_graphics_160 = new cjs.Graphics().p("Ar3LIIAA2PIXvAAIAAWPg");
	var mask_4_graphics_161 = new cjs.Graphics().p("Ar3LRIAA2hIXvAAIAAWhg");
	var mask_4_graphics_162 = new cjs.Graphics().p("Ar3LaIAA2zIXvAAIAAWzg");
	var mask_4_graphics_163 = new cjs.Graphics().p("Ar3LjIAA3FIXvAAIAAXFg");
	var mask_4_graphics_164 = new cjs.Graphics().p("Ar3LsIAA3XIXvAAIAAXXg");
	var mask_4_graphics_165 = new cjs.Graphics().p("Ar3L1IAA3pIXvAAIAAXpg");
	var mask_4_graphics_166 = new cjs.Graphics().p("Ar3L/IAA39IXvAAIAAX9g");
	var mask_4_graphics_167 = new cjs.Graphics().p("Ar3MIIAA4PIXvAAIAAYPg");
	var mask_4_graphics_168 = new cjs.Graphics().p("Ar3MRIAA4hIXvAAIAAYhg");
	var mask_4_graphics_169 = new cjs.Graphics().p("Ar3MbIAA41IXvAAIAAY1g");
	var mask_4_graphics_170 = new cjs.Graphics().p("Ar3MkIAA5HIXvAAIAAZHg");
	var mask_4_graphics_171 = new cjs.Graphics().p("Ar3MuIAA5aIXvAAIAAZag");
	var mask_4_graphics_172 = new cjs.Graphics().p("Ar3M3IAA5tIXvAAIAAZtg");
	var mask_4_graphics_173 = new cjs.Graphics().p("Ar3NAIAA5/IXvAAIAAZ/g");
	var mask_4_graphics_174 = new cjs.Graphics().p("Ar3NKIAA6TIXvAAIAAaTg");
	var mask_4_graphics_175 = new cjs.Graphics().p("Ar3NTIAA6lIXvAAIAAalg");
	var mask_4_graphics_176 = new cjs.Graphics().p("Ar3NcIAA63IXvAAIAAa3g");
	var mask_4_graphics_177 = new cjs.Graphics().p("Ar3NmIAA7LIXvAAIAAbLg");
	var mask_4_graphics_178 = new cjs.Graphics().p("Ar3NvIAA7dIXvAAIAAbdg");
	var mask_4_graphics_179 = new cjs.Graphics().p("Ar3N5IAA7xIXvAAIAAbxg");
	var mask_4_graphics_180 = new cjs.Graphics().p("Ar3OCIAA8DIXvAAIAAcDg");
	var mask_4_graphics_181 = new cjs.Graphics().p("Ar3OLIAA8VIXvAAIAAcVg");
	var mask_4_graphics_182 = new cjs.Graphics().p("Ar3OUIAA8oIXvAAIAAcog");
	var mask_4_graphics_183 = new cjs.Graphics().p("Ar3OeIAA87IXvAAIAAc7g");
	var mask_4_graphics_184 = new cjs.Graphics().p("Ar3OnIAA9NIXvAAIAAdNg");
	var mask_4_graphics_185 = new cjs.Graphics().p("Ar3OxIAA9hIXvAAIAAdhg");
	var mask_4_graphics_186 = new cjs.Graphics().p("Ar3PDIAA+EIXvAAIAAeEg");
	var mask_4_graphics_187 = new cjs.Graphics().p("Ar3PVIAA+oIXvAAIAAeog");
	var mask_4_graphics_188 = new cjs.Graphics().p("Ar3PmIAA/LIXvAAIAAfLg");
	var mask_4_graphics_189 = new cjs.Graphics().p("EgFxAgiIAA/wIXvAAIAAfwg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(107).to({graphics:mask_4_graphics_107,x:115,y:130}).wait(1).to({graphics:mask_4_graphics_108,x:154,y:237.5}).wait(1).to({graphics:mask_4_graphics_109,x:154,y:238.4}).wait(1).to({graphics:mask_4_graphics_110,x:154,y:239.3}).wait(1).to({graphics:mask_4_graphics_111,x:154,y:240.2}).wait(1).to({graphics:mask_4_graphics_112,x:154,y:241.1}).wait(1).to({graphics:mask_4_graphics_113,x:154,y:242}).wait(1).to({graphics:mask_4_graphics_114,x:154,y:242.9}).wait(1).to({graphics:mask_4_graphics_115,x:154,y:243.8}).wait(1).to({graphics:mask_4_graphics_116,x:154,y:244.7}).wait(1).to({graphics:mask_4_graphics_117,x:154,y:245.6}).wait(1).to({graphics:mask_4_graphics_118,x:154,y:246.5}).wait(1).to({graphics:mask_4_graphics_119,x:154,y:247.4}).wait(1).to({graphics:mask_4_graphics_120,x:154,y:248.3}).wait(1).to({graphics:mask_4_graphics_121,x:154,y:249.2}).wait(1).to({graphics:mask_4_graphics_122,x:154,y:250.1}).wait(1).to({graphics:mask_4_graphics_123,x:154,y:251}).wait(1).to({graphics:mask_4_graphics_124,x:154,y:251.9}).wait(1).to({graphics:mask_4_graphics_125,x:154,y:252.8}).wait(1).to({graphics:mask_4_graphics_126,x:154,y:253.7}).wait(1).to({graphics:mask_4_graphics_127,x:154,y:254.6}).wait(1).to({graphics:mask_4_graphics_128,x:154,y:255.5}).wait(1).to({graphics:mask_4_graphics_129,x:154,y:256.4}).wait(1).to({graphics:mask_4_graphics_130,x:154,y:257.3}).wait(1).to({graphics:mask_4_graphics_131,x:154,y:258.2}).wait(1).to({graphics:mask_4_graphics_132,x:154,y:259.1}).wait(1).to({graphics:mask_4_graphics_133,x:154,y:260}).wait(1).to({graphics:mask_4_graphics_134,x:154,y:260.9}).wait(1).to({graphics:mask_4_graphics_135,x:154,y:261.8}).wait(1).to({graphics:mask_4_graphics_136,x:154,y:262.7}).wait(1).to({graphics:mask_4_graphics_137,x:154,y:263.6}).wait(1).to({graphics:mask_4_graphics_138,x:154,y:264.5}).wait(1).to({graphics:mask_4_graphics_139,x:154,y:265.4}).wait(1).to({graphics:mask_4_graphics_140,x:154,y:266.3}).wait(1).to({graphics:mask_4_graphics_141,x:154,y:267.2}).wait(1).to({graphics:mask_4_graphics_142,x:154,y:268.1}).wait(1).to({graphics:mask_4_graphics_143,x:154,y:269}).wait(1).to({graphics:mask_4_graphics_144,x:154,y:269.9}).wait(1).to({graphics:mask_4_graphics_145,x:154,y:270.8}).wait(1).to({graphics:mask_4_graphics_146,x:154,y:271.7}).wait(1).to({graphics:mask_4_graphics_147,x:154,y:272.6}).wait(1).to({graphics:mask_4_graphics_148,x:154,y:273.5}).wait(1).to({graphics:mask_4_graphics_149,x:154,y:274.4}).wait(1).to({graphics:mask_4_graphics_150,x:154,y:275.3}).wait(1).to({graphics:mask_4_graphics_151,x:154,y:276.2}).wait(1).to({graphics:mask_4_graphics_152,x:154,y:277.1}).wait(1).to({graphics:mask_4_graphics_153,x:154,y:278}).wait(1).to({graphics:mask_4_graphics_154,x:154,y:278.9}).wait(1).to({graphics:mask_4_graphics_155,x:154,y:279.8}).wait(1).to({graphics:mask_4_graphics_156,x:154,y:280.7}).wait(1).to({graphics:mask_4_graphics_157,x:154,y:281.6}).wait(1).to({graphics:mask_4_graphics_158,x:154,y:282.5}).wait(1).to({graphics:mask_4_graphics_159,x:154,y:283.4}).wait(1).to({graphics:mask_4_graphics_160,x:154,y:284.3}).wait(1).to({graphics:mask_4_graphics_161,x:154,y:285.2}).wait(1).to({graphics:mask_4_graphics_162,x:154,y:286.1}).wait(1).to({graphics:mask_4_graphics_163,x:154,y:287}).wait(1).to({graphics:mask_4_graphics_164,x:154,y:287.9}).wait(1).to({graphics:mask_4_graphics_165,x:154,y:288.8}).wait(1).to({graphics:mask_4_graphics_166,x:154,y:289.8}).wait(1).to({graphics:mask_4_graphics_167,x:154,y:290.7}).wait(1).to({graphics:mask_4_graphics_168,x:154,y:291.7}).wait(1).to({graphics:mask_4_graphics_169,x:154,y:292.6}).wait(1).to({graphics:mask_4_graphics_170,x:154,y:293.5}).wait(1).to({graphics:mask_4_graphics_171,x:154,y:294.5}).wait(1).to({graphics:mask_4_graphics_172,x:154,y:295.4}).wait(1).to({graphics:mask_4_graphics_173,x:154,y:296.3}).wait(1).to({graphics:mask_4_graphics_174,x:154,y:297.3}).wait(1).to({graphics:mask_4_graphics_175,x:154,y:298.3}).wait(1).to({graphics:mask_4_graphics_176,x:154,y:299.2}).wait(1).to({graphics:mask_4_graphics_177,x:154,y:300.1}).wait(1).to({graphics:mask_4_graphics_178,x:154,y:301.1}).wait(1).to({graphics:mask_4_graphics_179,x:154,y:302}).wait(1).to({graphics:mask_4_graphics_180,x:154,y:302.9}).wait(1).to({graphics:mask_4_graphics_181,x:154,y:303.9}).wait(1).to({graphics:mask_4_graphics_182,x:154,y:304.8}).wait(1).to({graphics:mask_4_graphics_183,x:154,y:305.8}).wait(1).to({graphics:mask_4_graphics_184,x:154,y:306.7}).wait(1).to({graphics:mask_4_graphics_185,x:154,y:307.6}).wait(1).to({graphics:mask_4_graphics_186,x:154,y:309.5}).wait(1).to({graphics:mask_4_graphics_187,x:154,y:311.3}).wait(1).to({graphics:mask_4_graphics_188,x:154,y:313.1}).wait(1).to({graphics:mask_4_graphics_189,x:115,y:208.2}).wait(355));

	// Layer 4
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(20,1,1).p("AnByRQGBjODaBMQDcBLBSDxQBRDwioFjQioFjjJGQQjIGQkZIp");
	this.shape_5.setTransform(168.1,274);
	this.shape_5._off = true;

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(107).to({_off:false},0).wait(437));

	// Layer 3 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_9 = new cjs.Graphics().p("ACzZfQnMiIjlmmQjmmmCHnNQCGnCGXjmIRUf0QkBCHkPAAQimAAirgyg");
	var mask_5_graphics_10 = new cjs.Graphics().p("AClZWQnJiUjbmrQjbmsCTnJQCRm/GdjbMAQhAgPQj4B6kBAAQizAAi3g7g");
	var mask_5_graphics_11 = new cjs.Graphics().p("ACWZNQnEifjQmxQjRmxCfnFQCcm7GhjRMAPuAgpQjtBtj0AAQjAAAjEhEg");
	var mask_5_graphics_12 = new cjs.Graphics().p("ACIZDQnAiqjFm2QjFm2CqnBQCmm4GnjGMAO5AhCQjjBijlAAQjOAAjQhPg");
	var mask_5_graphics_13 = new cjs.Graphics().p("AB7Y5Qm8i2i6m7Qi6m7C1m8QCymzGri8MAODAhZQjXBXjYAAQjbAAjbhZg");
	var mask_5_graphics_14 = new cjs.Graphics().p("ABuYtQm3jAivnAQivm/DAm4QC9muGwixMANNAhuQjMBNjKAAQjpAAjmhlg");
	var mask_5_graphics_15 = new cjs.Graphics().p("ABhYiQmyjMijnEQiknEDLmyQDImqG0imMAMWAiEQjABCi9AAQj2AAjxhwg");
	var mask_5_graphics_16 = new cjs.Graphics().p("ABVYVQmtjXiYnHQiYnIDWmtQDSmkG4ibMALgAiWQi0A5iwAAQkEAAj7h9g");
	var mask_5_graphics_17 = new cjs.Graphics().p("ABJYIQmnjhiNnMQiMnLDgmnQDdmgG8iPMAKoAioQinAwijAAQkSAAkFiKg");
	var mask_5_graphics_18 = new cjs.Graphics().p("AA+X6QmhjsiCnOQiBnPDsmhQDnmaG/iFMAJwAi5QiaAoiVAAQkhAAkOiYg");
	var mask_5_graphics_19 = new cjs.Graphics().p("AAzXsQmbj2h2nSQh1nSD2mbQDxmUHCh5MAI4AjHQiNAhiHAAQkwAAkXimg");
	var mask_5_graphics_20 = new cjs.Graphics().p("AApXdQmVkBhqnUQhqnVEAmUQD8mOHFhuMAH/AjVQh/Aah6AAQk/AAkfi1g");
	var mask_5_graphics_21 = new cjs.Graphics().p("AAfXOQmOkLhenXQhfnXELmOQEFmIHIhiMAHGAjgQhxAVhtAAQlOAAknjEg");
	var mask_5_graphics_22 = new cjs.Graphics().p("AAVW+QmHkVhSnZQhSnaEUmHQEOmBHLhXMAGNAjsQhjAPhfAAQleAAkvjUg");
	var mask_5_graphics_23 = new cjs.Graphics().p("AAMWtQmAkfhGnbQhGnbEemAQEXl6HNhLMAFUAj0QhUALhRAAQlvAAk2jlg");
	var mask_5_graphics_24 = new cjs.Graphics().p("AAEWcQl5kpg6ncQg7ndEol5QEhlzHPg/MAEZAj8QhEAHhDAAQmAAAk8j2g");
	var mask_5_graphics_25 = new cjs.Graphics().p("AgDWKQlzkyguneQguneExlxQEqlrHQg0MADgAkCQg1AEg0AAQmSAAlBkIg");
	var mask_5_graphics_26 = new cjs.Graphics().p("AgLV3Qlqk6gjnfQginfE6lqQEzlkHSgoMAClAkHQglACgkAAQmlAAlHkbg");
	var mask_5_graphics_27 = new cjs.Graphics().p("AgSVkQlilEgXnfQgWngFDlhQE8lcHTgdMABrAkLIgpABQm6AAlLkvg");
	var mask_5_graphics_28 = new cjs.Graphics().p("AgYVRQlblNgKngQgKngFMlZQFFlUHTgRMAAxAkNIgJAAQnOAAlPlCg");
	var mask_5_graphics_29 = new cjs.Graphics().p("AgjU9QlSlWACngQACngFVlRQFNlLHTgFMgAJAkNQnUgJlKlNg");
	var mask_5_graphics_30 = new cjs.Graphics().p("AhGUoQlJldAOngQAOngFdlIQFVlDHUAHMgBEAkMQnTgVlClWg");
	var mask_5_graphics_31 = new cjs.Graphics().p("AhoUUQlAlmAanfQAaneFllBQFdk6HTATMgB+AkJQnSggk5leg");
	var mask_5_graphics_32 = new cjs.Graphics().p("AiJUAQk4luAmnfQAnndFtk3QFlkyHSAfMgC4AkFQnRgskwllg");
	var mask_5_graphics_33 = new cjs.Graphics().p("AiqTrQkul1AyneQAyncF0kuQFtkoHSAqMgDyAkAQnQg4knltg");
	var mask_5_graphics_34 = new cjs.Graphics().p("AjLTWQkkl8A+ncQA+ncF7kkQF1kfHQA2MgEsAj5QnOhDkel1g");
	var mask_5_graphics_35 = new cjs.Graphics().p("AjrTCQkamEBKnbQBKnZGCkbQF8kVHPBBMgFmAjxQnMhPkVl7g");
	var mask_5_graphics_36 = new cjs.Graphics().p("AkKStQkRmLBWnYQBWnYGKkRQGCkLHNBNMgGfAjmQnKhakLmCg");
	var mask_5_graphics_37 = new cjs.Graphics().p("AkoSYQkHmSBinWQBhnVGRkHQGJkCHLBZMgHYAjcQnHhmkCmJg");
	var mask_5_graphics_38 = new cjs.Graphics().p("AlGSDQj9mYBunTQBtnTGXj9QGQj3HIBjMgIRAjPQnEhxj4mPg");
	var mask_5_graphics_39 = new cjs.Graphics().p("AljRuQjzmeB6nRQB5nPGdjzQGWjtHFBvMgJJAjBQnBh9jumVg");
	var mask_5_graphics_40 = new cjs.Graphics().p("AmARZQjomkCFnNQCFnNGjjoQGcjjHCB7MgKBAixQm+iIjkmbg");
	var mask_5_graphics_41 = new cjs.Graphics().p("AmbREQjemqCRnKQCQnIGpjeQGhjZG/CGMgK5AihQm6iTjZmhg");
	var mask_5_graphics_42 = new cjs.Graphics().p("Am2QvQjTmvCcnGQCcnFGujTQGmjOG8CRMgLwAiOQm3iejOmmg");
	var mask_5_graphics_43 = new cjs.Graphics().p("AnRQaQjHm0CnnCQConBGzjIQGrjDG4CcMgMnAh7QmziqjEmrg");
	var mask_5_graphics_44 = new cjs.Graphics().p("AnqQFQi8m5Cym9QCzm9G4i9QGwi5G0CoMgNeAhlQmui0i5mwg");
	var mask_5_graphics_45 = new cjs.Graphics().p("AoCPxQiym+C+m5QC+m4G8iyQG1iuGwCzMgOUAhPQmpi/ium0g");
	var mask_5_graphics_46 = new cjs.Graphics().p("AoaPcQimnCDIm0QDJmzHBimQG5ijGrC9MgPJAg3QmkjKijm4g");
	var mask_5_graphics_47 = new cjs.Graphics().p("AoxPHQibnGDUmvQDTmuHFiaQG9iYGmDHMgP9AgfQmfjUiYm9g");
	var mask_5_graphics_48 = new cjs.Graphics().p("ApHOzQiPnKDemqQDemoHJiPQHAiNGhDSMgQwAgEQmajeiNnAg");
	var mask_5_graphics_49 = new cjs.Graphics().p("ApdOeQiDnNDpmkQDpmiHMiEQHEiCGbDdIxjfoQmVjoiCnEg");
	var mask_5_graphics_50 = new cjs.Graphics().p("ApxOKQh4nRDzmdQD0mdHPh4QHHh2GWDnIyWfLQmPjzh2nGg");
	var mask_5_graphics_51 = new cjs.Graphics().p("AqEN1QhtnTD+mXQD+mWHShtQHKhqGQDxIzIetQmJj9hqnKg");
	var mask_5_graphics_52 = new cjs.Graphics().p("AqXNhQhgnWEHmPQEImRHVhhQHMhfGKD7Iz5eOQmCkHhfnMg");
	var mask_5_graphics_53 = new cjs.Graphics().p("AqpNNQhUnYESmJQERmKHXhVQHPhTGDEFI0pdtQl7kQhUnPg");
	var mask_5_graphics_54 = new cjs.Graphics().p("Aq5M6QhJnbEbmCQEcmCHZhJQHQhIF9EOI1YdLQl1kZhHnQg");
	var mask_5_graphics_55 = new cjs.Graphics().p("ArJMmQg9ncEll7QEll7Hbg9QHSg8F2EYI2HcoQltkjg8nSg");
	var mask_5_graphics_56 = new cjs.Graphics().p("ArYMTQgxneEvlzQEul0HcgxQHUgwFuEhI20cEQlmksgwnTg");
	var mask_5_graphics_57 = new cjs.Graphics().p("ArmL/QglneE4lrQE4ltHdglQHUgkFoEqI3hbeQlfk0gknVg");
	var mask_5_graphics_58 = new cjs.Graphics().p("ArzLsQgZnfFBljQFBlkHegaQHVgYFgEzI4Na4QlWk+gZnVg");
	var mask_5_graphics_59 = new cjs.Graphics().p("AsALaQgMnfFKlcQFJlcHfgNQHVgNFYE8I43aQQlOlFgOnWg");
	var mask_5_graphics_60 = new cjs.Graphics().p("AsLLGQAAnfFTlTQFTlTHeAAQHWAAFPFFI5jZlQlGlPAAnWg");
	var mask_5_graphics_61 = new cjs.Graphics().p("AsWKzQANnfFclKQFclKHeANQHWAMFGFOI6PY5Qk8lYAMnVg");
	var mask_5_graphics_62 = new cjs.Graphics().p("AsfKgQAZnfFllAQFllAHdAZQHWAZE9FXI65YKQkzlfAZnVg");
	var mask_5_graphics_63 = new cjs.Graphics().p("AsoKNQAnneFtk2QFtk3HdAmQHUAmE0FfI7iXcQkploAlnUg");
	var mask_5_graphics_64 = new cjs.Graphics().p("AsvJ7QAzndF2ksQF1ktHbAzQHUAyEqFmI8JWtQkglvAynTg");
	var mask_5_graphics_65 = new cjs.Graphics().p("As1JoQBAnbF9kiQF8kjHbBAQHSA/EhFuI8wV8QkVl3A+nSg");
	var mask_5_graphics_66 = new cjs.Graphics().p("As6JXQBNnaGFkXQGDkZHaBNQHPBLEXF1I9UVLQkMl/BLnPg");
	var mask_5_graphics_67 = new cjs.Graphics().p("As+JFQBanXGMkNQGLkOHXBZQHOBYEMF8I94UYQkBmFBXnOg");
	var mask_5_graphics_68 = new cjs.Graphics().p("AtBI0QBmnUGUkDQGSkDHUBmQHLBjEDGEI+aTkQj3mMBjnLg");
	var mask_5_graphics_69 = new cjs.Graphics().p("AtCIkQBynSGbj3QGZj5HRByQHIBwD4GLI+7SvQjsmSBwnIg");
	var mask_5_graphics_70 = new cjs.Graphics().p("AtDITQB/nOGhjsQGgjuHOB/QHFB8DtGRI/aR6QjhmZB7nFg");
	var mask_5_graphics_71 = new cjs.Graphics().p("AtCIEQCMnLGmjhQGmjiHLCKQHBCJDiGXI/3REQjXmfCInBg");
	var mask_5_graphics_72 = new cjs.Graphics().p("AtAH0QCYnHGsjVQGsjXHHCXQG+CUDXGdMggVAQNQjLmkCUm+g");
	var mask_5_graphics_73 = new cjs.Graphics().p("As9HlQCknCGyjKQGxjMHDCkQG5CgDMGiMggvAPVQi/mpCfm6g");
	var mask_5_graphics_74 = new cjs.Graphics().p("As5HXQCwm+G4i/QG2i/G+CvQG1CsDBGoMghJAOcQi0muCrm1g");
	var mask_5_graphics_75 = new cjs.Graphics().p("AsyHGQC+m4G9ixQG9ixG4C+QGvC4CzGvMghlANYQinm0C6mvg");
	var mask_5_graphics_76 = new cjs.Graphics().p("AsqG2QDMmyHDiiQHCijGyDMQGpDGClG1MgiAAMSQiYm5DHmpg");
	var mask_5_graphics_77 = new cjs.Graphics().p("AsgGmQDamqHIiUQHHiVGrDaQGiDUCXG6MgiYALLQiKm+DVmig");
	var mask_5_graphics_78 = new cjs.Graphics().p("AsVGXQDomjHMiFQHMiGGjDnQGcDiCIG+MgiuAKFQh7nCDimcg");
	var mask_5_graphics_79 = new cjs.Graphics().p("AsIGJQD1mbHRh3QHPh2GcD0QGUDvB6HCMgjBAI9QhtnGDvmUg");
	var mask_5_graphics_80 = new cjs.Graphics().p("Ar5F8QECmTHUhoQHThoGUEBQGMD9BsHGMgjTAH0QhenJD8mMg");
	var mask_5_graphics_81 = new cjs.Graphics().p("ArpFvQEPmKHXhZQHXhYGLENQGEEJBdHKMgjiAGrQhQnMEJmEg");
	var mask_5_graphics_82 = new cjs.Graphics().p("ArXFjQEbmBHZhKQHahJGDEaQF7EWBOHMMgjvAFiQhAnPEVl7g");
	var mask_5_graphics_83 = new cjs.Graphics().p("ArEFYQEol4Hbg6QHcg6F5EmQFyEiBAHOMgj5AEYQgynQEhlyg");
	var mask_5_graphics_84 = new cjs.Graphics().p("AqvFOQE0luHdgrQHdgrFwEzQFoEtAxHQMgkBADOQgjnREtlpg");
	var mask_5_graphics_85 = new cjs.Graphics().p("AqYFFQE/llHegbQHfgbFlE+QFfE4AhHSMgkGACEQgUnTE5leg");
	var mask_5_graphics_86 = new cjs.Graphics().p("AqBE8QFLlaHfgMQHfgMFbFKQFUFEATHSMgkJAA5QgFnTFDlUg");
	var mask_5_graphics_87 = new cjs.Graphics().p("AvARIQALnTFOlJQFWlQHeAEQHgAEFQFUQFKFPADHSg");
	var mask_5_graphics_88 = new cjs.Graphics().p("Au/QQQAanSFYk/QFhlEHeATQHfATFFFfQE/FagMHSg");
	var mask_5_graphics_89 = new cjs.Graphics().p("Au8PZQAonRFjk0QFqk5HeAjQHeAiE6FqQEzFjgaHSg");
	var mask_5_graphics_90 = new cjs.Graphics().p("Au5OhQA3nPFtkoQF0ktHcAyQHdAyEuFzQEoFtgqHRg");
	var mask_5_graphics_91 = new cjs.Graphics().p("Au0NqQBGnOF2kcQF+kgHaBBQHbBBEiF9QEcF2g5HPg");
	var mask_5_graphics_92 = new cjs.Graphics().p("AuvMzQBVnLF/kQQGHkUHYBQQHZBQEVGGQEQGAhHHNg");
	var mask_5_graphics_93 = new cjs.Graphics().p("AuoL8QBknIGHkEQGQkHHVBgQHWBfEJGPQEDGIhWHKg");
	var mask_5_graphics_94 = new cjs.Graphics().p("AugLGQBynFGQj3QGYj6HSBvQHSBuD8GXQD2GQhlHIg");
	var mask_5_graphics_95 = new cjs.Graphics().p("AuUJ+QCGnAGajkQGhjqHOCDQHNCCDqGiQDmGah5HDg");
	var mask_5_graphics_96 = new cjs.Graphics().p("AuFI2QCYm5GkjSQGrjYHICWQHHCXDYGrQDUGjiMG+g");
	var mask_5_graphics_97 = new cjs.Graphics().p("At1HwQCsmyGsjBQG0jFHBCqQHBCpDFG1QDBGsieG4g");
	var mask_5_graphics_98 = new cjs.Graphics().p("AtiGrQC+mqG0iuQG8iyG6C8QG5C8CyG9QCvG1iyGwg");
	var mask_5_graphics_99 = new cjs.Graphics().p("AtOFnQDRmhG7icQHEifGwDQQGxDPCfHEQCcG8jEGog");
	var mask_5_graphics_100 = new cjs.Graphics().p("As3ElQDimYHCiJQHKiLGoDiQGnDhCLHLQCJHCjWGfg");
	var mask_5_graphics_101 = new cjs.Graphics().p("AseDkQDzmOHHh2QHQh3GeD0QGdDzB4HRQB1HHjoGWg");
	var mask_5_graphics_102 = new cjs.Graphics().p("AsECkQEFmDHLhiQHVhjGTEGQGSEEBkHWQBiHMj5GLg");
	var mask_5_graphics_103 = new cjs.Graphics().p("ArnBnQEUl4HQhOQHZhPGHEXQGHEVBPHaQBOHQkKGAg");
	var mask_5_graphics_104 = new cjs.Graphics().p("ArJArQEklsHSg6QHdg6F6EnQF7EmA7HcQA6HTkaF1g");
	var mask_5_graphics_105 = new cjs.Graphics().p("AqqgOQE0lgHUgmQHfgmFuE3QFuE3AmHeQAmHVkqFpg");
	var mask_5_graphics_106 = new cjs.Graphics().p("AqJhGQFDlSHVgSQHhgRFgFGQFgFGASHgQARHWk5Fcg");
	var mask_5_graphics_107 = new cjs.Graphics().p("Apmh7QFSlEHVACQHhADFRFWQFSFUgCHhQgDHWlIFOg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_5_graphics_9,x:104.4,y:168.1}).wait(1).to({graphics:mask_5_graphics_10,x:103.2,y:168.1}).wait(1).to({graphics:mask_5_graphics_11,x:101.9,y:168.1}).wait(1).to({graphics:mask_5_graphics_12,x:100.6,y:168.2}).wait(1).to({graphics:mask_5_graphics_13,x:99.2,y:168.2}).wait(1).to({graphics:mask_5_graphics_14,x:97.9,y:168.2}).wait(1).to({graphics:mask_5_graphics_15,x:96.5,y:168.2}).wait(1).to({graphics:mask_5_graphics_16,x:95.2,y:168.2}).wait(1).to({graphics:mask_5_graphics_17,x:93.8,y:168.2}).wait(1).to({graphics:mask_5_graphics_18,x:92.4,y:168.2}).wait(1).to({graphics:mask_5_graphics_19,x:91,y:168.2}).wait(1).to({graphics:mask_5_graphics_20,x:89.6,y:168.2}).wait(1).to({graphics:mask_5_graphics_21,x:88.2,y:168.2}).wait(1).to({graphics:mask_5_graphics_22,x:86.8,y:168.2}).wait(1).to({graphics:mask_5_graphics_23,x:85.4,y:168.2}).wait(1).to({graphics:mask_5_graphics_24,x:83.9,y:168.2}).wait(1).to({graphics:mask_5_graphics_25,x:82.5,y:168.2}).wait(1).to({graphics:mask_5_graphics_26,x:81,y:168.2}).wait(1).to({graphics:mask_5_graphics_27,x:79.6,y:168.3}).wait(1).to({graphics:mask_5_graphics_28,x:78.2,y:168.3}).wait(1).to({graphics:mask_5_graphics_29,x:77.2,y:168.3}).wait(1).to({graphics:mask_5_graphics_30,x:78.7,y:168.3}).wait(1).to({graphics:mask_5_graphics_31,x:80.1,y:168.2}).wait(1).to({graphics:mask_5_graphics_32,x:81.6,y:168.1}).wait(1).to({graphics:mask_5_graphics_33,x:83.1,y:168}).wait(1).to({graphics:mask_5_graphics_34,x:84.5,y:167.8}).wait(1).to({graphics:mask_5_graphics_35,x:86,y:167.6}).wait(1).to({graphics:mask_5_graphics_36,x:87.4,y:167.3}).wait(1).to({graphics:mask_5_graphics_37,x:88.9,y:167.1}).wait(1).to({graphics:mask_5_graphics_38,x:90.3,y:166.7}).wait(1).to({graphics:mask_5_graphics_39,x:91.7,y:166.4}).wait(1).to({graphics:mask_5_graphics_40,x:93.1,y:166}).wait(1).to({graphics:mask_5_graphics_41,x:94.5,y:165.6}).wait(1).to({graphics:mask_5_graphics_42,x:95.9,y:165.1}).wait(1).to({graphics:mask_5_graphics_43,x:97.3,y:164.7}).wait(1).to({graphics:mask_5_graphics_44,x:98.7,y:164.1}).wait(1).to({graphics:mask_5_graphics_45,x:100.1,y:163.6}).wait(1).to({graphics:mask_5_graphics_46,x:101.4,y:163}).wait(1).to({graphics:mask_5_graphics_47,x:102.7,y:162.4}).wait(1).to({graphics:mask_5_graphics_48,x:104,y:161.7}).wait(1).to({graphics:mask_5_graphics_49,x:105.3,y:161}).wait(1).to({graphics:mask_5_graphics_50,x:106.6,y:160.3}).wait(1).to({graphics:mask_5_graphics_51,x:107.9,y:159.6}).wait(1).to({graphics:mask_5_graphics_52,x:109.1,y:158.8}).wait(1).to({graphics:mask_5_graphics_53,x:110.3,y:158}).wait(1).to({graphics:mask_5_graphics_54,x:111.5,y:157.1}).wait(1).to({graphics:mask_5_graphics_55,x:112.7,y:156.3}).wait(1).to({graphics:mask_5_graphics_56,x:113.8,y:155.4}).wait(1).to({graphics:mask_5_graphics_57,x:115,y:154.4}).wait(1).to({graphics:mask_5_graphics_58,x:116.1,y:153.5}).wait(1).to({graphics:mask_5_graphics_59,x:117.1,y:152.5}).wait(1).to({graphics:mask_5_graphics_60,x:118.2,y:151.5}).wait(1).to({graphics:mask_5_graphics_61,x:119.3,y:150.4}).wait(1).to({graphics:mask_5_graphics_62,x:120.4,y:149.2}).wait(1).to({graphics:mask_5_graphics_63,x:121.4,y:148.1}).wait(1).to({graphics:mask_5_graphics_64,x:122.4,y:146.9}).wait(1).to({graphics:mask_5_graphics_65,x:123.4,y:145.7}).wait(1).to({graphics:mask_5_graphics_66,x:124.3,y:144.5}).wait(1).to({graphics:mask_5_graphics_67,x:125.2,y:143.2}).wait(1).to({graphics:mask_5_graphics_68,x:126.1,y:141.9}).wait(1).to({graphics:mask_5_graphics_69,x:126.9,y:140.6}).wait(1).to({graphics:mask_5_graphics_70,x:127.7,y:139.3}).wait(1).to({graphics:mask_5_graphics_71,x:128.4,y:138}).wait(1).to({graphics:mask_5_graphics_72,x:129.2,y:136.6}).wait(1).to({graphics:mask_5_graphics_73,x:129.8,y:135.2}).wait(1).to({graphics:mask_5_graphics_74,x:130.5,y:133.8}).wait(1).to({graphics:mask_5_graphics_75,x:131.2,y:132.1}).wait(1).to({graphics:mask_5_graphics_76,x:131.9,y:130.4}).wait(1).to({graphics:mask_5_graphics_77,x:132.5,y:128.6}).wait(1).to({graphics:mask_5_graphics_78,x:133,y:126.9}).wait(1).to({graphics:mask_5_graphics_79,x:133.5,y:125.1}).wait(1).to({graphics:mask_5_graphics_80,x:134,y:123.3}).wait(1).to({graphics:mask_5_graphics_81,x:134.4,y:121.5}).wait(1).to({graphics:mask_5_graphics_82,x:134.7,y:119.7}).wait(1).to({graphics:mask_5_graphics_83,x:135,y:117.8}).wait(1).to({graphics:mask_5_graphics_84,x:135.2,y:116}).wait(1).to({graphics:mask_5_graphics_85,x:135.3,y:114.2}).wait(1).to({graphics:mask_5_graphics_86,x:135.4,y:112.3}).wait(1).to({graphics:mask_5_graphics_87,x:135.4,y:111.3}).wait(1).to({graphics:mask_5_graphics_88,x:135.4,y:113.2}).wait(1).to({graphics:mask_5_graphics_89,x:135.4,y:115.1}).wait(1).to({graphics:mask_5_graphics_90,x:135.4,y:117}).wait(1).to({graphics:mask_5_graphics_91,x:135.4,y:118.8}).wait(1).to({graphics:mask_5_graphics_92,x:135.3,y:120.7}).wait(1).to({graphics:mask_5_graphics_93,x:135.3,y:122.5}).wait(1).to({graphics:mask_5_graphics_94,x:135.3,y:124.4}).wait(1).to({graphics:mask_5_graphics_95,x:135.3,y:126.8}).wait(1).to({graphics:mask_5_graphics_96,x:135.2,y:129.2}).wait(1).to({graphics:mask_5_graphics_97,x:135.2,y:131.6}).wait(1).to({graphics:mask_5_graphics_98,x:135.2,y:133.9}).wait(1).to({graphics:mask_5_graphics_99,x:135.1,y:136.2}).wait(1).to({graphics:mask_5_graphics_100,x:135.1,y:138.4}).wait(1).to({graphics:mask_5_graphics_101,x:135,y:140.6}).wait(1).to({graphics:mask_5_graphics_102,x:134.9,y:142.7}).wait(1).to({graphics:mask_5_graphics_103,x:134.9,y:144.8}).wait(1).to({graphics:mask_5_graphics_104,x:134.8,y:146.8}).wait(1).to({graphics:mask_5_graphics_105,x:134.7,y:148.8}).wait(1).to({graphics:mask_5_graphics_106,x:134.7,y:150.7}).wait(1).to({graphics:mask_5_graphics_107,x:134.7,y:152.5}).wait(437));

	// Layer 2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(20,1,1).p("AnRmsQGBjODbBLQDbBMBSDwQBSDwioFjQg1Bwg5B0");
	this.shape_6.setTransform(169.7,200);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(20,1,1).p("AnByRQGBjODaBMQDcBLBSDxQBRDwioFjQioFjjJGQQjIGQkZIp");
	this.shape_7.setTransform(168.1,274);

	var maskedShapeInstanceList = [this.shape_6,this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6}]},9).to({state:[{t:this.shape_7}]},25).wait(510));

	// Letter
	this.instance_3 = new lib.N("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(275,275);
	this.instance_3.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(544));

	// Background
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_8.setTransform(275,275,3.373,2.543);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_9.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).wait(544));

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