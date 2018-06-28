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


(lib.ar_triangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhuhDIABAAQAtAYBAAAQA/AAAtgYIACgBIABAAIhuCJg");
	this.shape.setTransform(0,4.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.1,-2.6,22.3,13.8);


(lib._0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("Au9cRQhjg5hOhOQhEhAg1hOQhqijgxjNQgvjLAAjUQAAkAA1j5QA4j3BgjwQA8ijBgi0QA0hlBBhqQCvkkDsj2QDsj5EdiiQEdijExAAQD2AACsBhQBfA3BMBMQBFBBA3BRQBtCjAuDNQAvDLAADUQAABRgFBRQgKCtgjCpQgyD4hgDvQhmEDiwEkQizEkjpD2QjsD4kZCjQkdCjk4AAQj2AAiphhgADZ3QQisBQicB7IkgETIjbEXQgxBIgqBJQiKDnhdD0Ih+GuQgyDYAADbIAaEeQAfCRA/B7QApBRA+A/QAZAXAcAUQBuBNCiAAQCwAACwhQQCthTCXh7IEakNIDikdQDEkrCBlBIB+moQAfiKAMiIQAGhUABhTIgakUQgbiVhGh7QgrhQg+g9QgagZgdgVQhuhTiiAAQiwAAipBTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-145.8,-190.5,291.6,381.2);


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
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AnCHOQFNq7I4jg");
	this.shape.setTransform(2.2,-3.9);

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
(lib.WS_Cursive_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_404 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(404).call(this.frame_404).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(336.8,103.7,1,1,0,8,5.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[336.8,104.1,336,104.1,335.2,104.1,287.4,105,250.3,137.7,216.1,167.7,190.5,205.5,186.6,211.3,183,217.2,176.2,228.1,170.7,239.8,169.1,243.2,167.6,246.6,159.4,264.9,154.1,284.6,141,333.2,145.4,377.6,149.7,422,184.4,442.5,219,463.1,266.8,439.5,314.5,415.9,342.6,378.2,369.6,342.2,385.7,300.3,401.2,259.9,404.5,217.2,405,211.4,405.2,205.7,407,158.8,375.9,123.3,374.6,121.6,373.2,120.1,363.2,109.3,350,105.8]}},291).wait(14).to({x:349.8,y:107.2},0).to({guide:{path:[349.7,107.1,205.5,41.3,146.9,126,88.3,210.9,35.4,169.7,-17.6,128.6,-69.9,140]}},89).wait(2));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(336.5,102.1,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},291).wait(105));

	// arrow
	this.instance_1 = new lib.ar2("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(194.1,130,1,1,-0.9,0,0,0.7,-0.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).wait(396));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_245 = new cjs.Graphics().p("A3ecGQqzqqgFvLMBJOgAXQAFPLqpKxQqsKyvLAFIgOAAQvCAAqrqng");
	var mask_graphics_246 = new cjs.Graphics().p("A2+cmQrAqcgXvLMBJNgBzQAXPLqcK+QqeLAvLAXIhCABQugAAqmqHg");
	var mask_graphics_247 = new cjs.Graphics().p("A2ddFQrMqPgrvKMBJKgDOQArPLqPLKQqQLNvLArQg7ACg6AAQt/AAqgpog");
	var mask_graphics_248 = new cjs.Graphics().p("A17djQrZqAg9vKMBJEgEnQA+PIqBLXQqCLZvJA+QhVAFhTAAQtgAAqYpKg");
	var mask_graphics_249 = new cjs.Graphics().p("A1ZeBQrlpzhQvHMBI+gGDQBQPHpyLkQp0LlvIBQQhuAKhqAAQtDAAqQotg");
	var mask_graphics_250 = new cjs.Graphics().p("A02edQrxpjhjvGMBI1gHdQBjPFpjLvQpmLyvGBjQiGAOiCAAQslAAqIoRg");
	var mask_graphics_251 = new cjs.Graphics().p("A0Se6Qr+pVh1vEMBIrgI4QB2PDpVL7QpXL+vEB2QieATiZAAQsJAAp+n0g");
	var mask_graphics_252 = new cjs.Graphics().p("AzufVQsJpGiJvBMBIggKSQCIPApGMHQpIMJvBCIQi2AaiwAAQrtAAp0nZg");
	var mask_graphics_253 = new cjs.Graphics().p("AzKfwQsUo3ibu/MBIRgLsQCcO+o3MSQo5MUu+CbQjOAhjFAAQrTAApqm+g");
	var mask_graphics_254 = new cjs.Graphics().p("EgSlAgKQsfooitu7MBIBgNGQCuO7onMcQopMfu8CuQjkAqjbAAQq6AApemlg");
	var mask_graphics_255 = new cjs.Graphics().p("EgSAAgjQspoYjAu4MBHwgOfQDBO3oYMnQoZMqu4DAQj7AzjxAAQqgAApTmMg");
	var mask_graphics_256 = new cjs.Graphics().p("EgRaAg7QszoHjTu0MBHegP4QDSOzoIMxQoJM0u0DSQkRA9kGAAQqHAApHl0g");
	var mask_graphics_257 = new cjs.Graphics().p("EgQzAhTQs+n4jluvMBHJgRRQDlOvn4M7Qn5M+uwDlQkmBHkbAAQpwAAo5lcg");
	var mask_graphics_258 = new cjs.Graphics().p("EgQMAhqQtHnnj4urMBGzgSpQD3OqnoNFQnpNHurD3Qk7BTkwAAQpYABoslGg");
	var mask_graphics_259 = new cjs.Graphics().p("EgPlAiAQtQnXkKulMBGagUBQEKOlnYNOQnYNRumEJQlQBglEAAQpCAAoekwg");
	var mask_graphics_260 = new cjs.Graphics().p("EgO9AiWQtZnGkcuhMBGAgVYQEcOfnHNYQnINZuhEcQlkBtlZAAQoqAAoQkag");
	var mask_graphics_261 = new cjs.Graphics().p("EgOVAirQtim2ktubMBFkgWvQEuOam2NgQm4NjubEtQl3B7luAAQoUAAoBkFg");
	var mask_graphics_262 = new cjs.Graphics().p("EgNsAi/QtqmllAuVMBFIgYFQE/OUmlNoQmnNruVFAQmKCJmCAAQn/AAnxjxg");
	var mask_graphics_263 = new cjs.Graphics().p("EgNDAjSQtymUlSuOMBEpgZbQFROOmUNwQmWNzuOFRQmdCZmXAAQnpAAnhjeg");
	var mask_graphics_264 = new cjs.Graphics().p("EgMaAjlQt5mDljuHMBEIgawQFjOGmEN4QmEN7uHFjQmwCpmrAAQnUAAnRjLg");
	var mask_graphics_265 = new cjs.Graphics().p("EgLwAj2QuBlxl0uAMBDmgcEQF0N/lyOAQlzOBuAF1QnBC6nBAAQm+AAnAi6g");
	var mask_graphics_266 = new cjs.Graphics().p("EgLGAkHQuIlfmFt5MBDCgdYQGFN4lgOGQlhOJt5GGQnSDMnWAAQmqAAmuipg");
	var mask_graphics_267 = new cjs.Graphics().p("EgKbAkYQuPlOmWtyMBCcgeqQGXNwlPONQlQOPtxGXQniDfnrAAQmVAAmciYg");
	var mask_graphics_268 = new cjs.Graphics().p("EgJwAknQuVk8motqMBB2gf8QGoNpk+OSQk9OWtqGoQnyDyoBAAQmAAAmJiJg");
	var mask_graphics_269 = new cjs.Graphics().p("EgJFAk2Qubkrm4thMBBMghOQG5NhkrOYQksOcthG5QoCEGoWAAQlsAAl2h6g");
	var mask_graphics_270 = new cjs.Graphics().p("EgIZAlDQuhkYnJtYMBAigifQHKNYkZOeQkaOhtYHKQoREaotAAQlXAAlihsg");
	var mask_graphics_271 = new cjs.Graphics().p("EgHtAlQQumkGnatPMA/3gjvQHaNPkHOjQkIOntPHaQogEwpDAAQlCAAlOhfg");
	var mask_graphics_272 = new cjs.Graphics().p("EgHBAlcQurj0nqtFMA/Jgk+QHrNGj1OoQj2OrtGHrQotFGpaAAQktAAk6hTg");
	var mask_graphics_273 = new cjs.Graphics().p("EgGVAloQuvjin6s8MA+agmMQH7M8jjOtQjjOws8H6Qo7FepxAAQkZAAklhHg");
	var mask_graphics_274 = new cjs.Graphics().p("EgFoAlyQuzjPoLsyMA9qgnZQILMyjROxQjRO0sxILQpIF0qJAAQkEAAkPg8g");
	var mask_graphics_275 = new cjs.Graphics().p("EgE7Al8Qu4i9oasoMA85golQIaMoi+O0Qi/O5snIaQpUGNqhAAQjvAAj5gyg");
	var mask_graphics_276 = new cjs.Graphics().p("EgEOAmEQu7iqoqsdMA8FgpwQIqMdirO4QisO8sdIqQpfGmq7AAQjZAAjjgqg");
	var mask_graphics_277 = new cjs.Graphics().p("EgDhAmMQu+iXo5sSMA7Qgq7QI5MSiZO7QiZO/sSI6QpqG/rUAAQjEAAjMghg");
	var mask_graphics_278 = new cjs.Graphics().p("EgC0AmTQvAiFpJsHMA6agsDQJJMHiHO+QiGPBsHJJQp1HaruAAQivAAi0gag");
	var mask_graphics_279 = new cjs.Graphics().p("EgCHAmaQvChzpYr7MA5jgtMQJXL8h0PAQh0PEr7JXQp+H2sKAAQiYAAidgTg");
	var mask_graphics_280 = new cjs.Graphics().p("EgBZAmfQvFhgpmrvMA4qguTQJmLwhhPCQhiPGrvJmQqIIRsmAAQiBAAiEgNg");
	var mask_graphics_281 = new cjs.Graphics().p("EgArAmjQvHhNp1rjMA3wgvYQJ0LjhOPEQhPPIrjJ0QqQIutDAAQhqAAhrgJg");
	var mask_graphics_282 = new cjs.Graphics().p("EAABAmnQvHg7qCrXMA2zgwcQKDLWg8PGQg7PJrXKDQqYJLthAAQhSAAhUgFg");
	var mask_graphics_283 = new cjs.Graphics().p("EAAvAmpQvIgnqRrLMA13gxgQKQLKgoPHQgpPKrKKQQqgJquAAAQg5AAg6gDg");
	var mask_graphics_284 = new cjs.Graphics().p("EABcAmrQvIgVqeq9MA04gyjQKeK9gWPHQgWPLq9KeQqmKIugAAIhBAAg");
	var mask_graphics_285 = new cjs.Graphics().p("EACKAmrQvJgBqsqxMAz5gzjQKsKwgDPHQgDPLqwKsQqsKnvCAAIgMAAg");
	var mask_graphics_286 = new cjs.Graphics().p("A3KcZMAy3g0jQK6KiAPPHQAQPLqjK5QqiK5vKAPIgwAAQupAAqoqSg");
	var mask_graphics_287 = new cjs.Graphics().p("A2pc4MAx1g1iQLHKVAiPHQAjPKqVLGQqVLGvJAiQgyABgyAAQuJAAqhpzg");
	var mask_graphics_288 = new cjs.Graphics().p("A2IdXMAwzg2fQLSKHA2PFQA1PKqHLSQqHLTvIA0QhMAFhKAAQtpAAqbpVg");
	var mask_graphics_289 = new cjs.Graphics().p("A1md1MAvug3cQLfJ5BJPGQBIPHp5LfQp5LfvHBHQhkAIhjAAQtLAAqTo3g");
	var mask_graphics_290 = new cjs.Graphics().p("A1DeSMAuog4WQLsJqBaPEQBcPGprLrQpqLrvGBaQh9AMh6AAQsuAAqKoag");
	var mask_graphics_291 = new cjs.Graphics().p("A0geuMAtig5PQL3JcBtPCQBuPDpcL3QpbL4vEBsQiVARiRAAQsSAAqBn+g");
	var mask_graphics_292 = new cjs.Graphics().p("Az8fKMAsag6HQMCJNCBO/QCAPBpNMDQpNMDvBB/QitAYinAAQr3AAp3njg");
	var mask_graphics_293 = new cjs.Graphics().p("AzYflMArRg6+QMOI+CTO9QCTO+o+MPQo+MOu+CRQjFAfi9AAQrcAAptnIg");
	var mask_graphics_294 = new cjs.Graphics().p("Ayzf/MAqHg7yQMZIuClO6QCmO7ovMZQouMZu8ClQjbAmjTAAQrCAApimug");
	var mask_graphics_295 = new cjs.Graphics().p("EgSOAgZMAo8g8mQMkIfC4O2QC4O4ofMkQofMju4C3QjyAvjpAAQqoAApXmUg");
	var mask_graphics_296 = new cjs.Graphics().p("EgRoAgxMAnwg9YQMuIQDKOyQDLO0oPMuQoQMuu0DKQkIA5j+AAQqPAApLl9g");
	var mask_graphics_297 = new cjs.Graphics().p("EgRCAhJMAmjg+IQM4H/DdOuQDdOwn/M5QoAM4uwDbQkeBEkTAAQp3AAo+llg");
	var mask_graphics_298 = new cjs.Graphics().p("EgPdAiGMAjWhAEQNSHVEMOiQEOOknVNSQnVNRukEMQlUBjlKAAQo7AAobkpg");
	var mask_graphics_299 = new cjs.Graphics().p("EgN0Ai9MAgChB0QNpGpE8OUQE9OVmpNpQmpNpuVE7QmICImAAAQoBAAn0jzg");
	var mask_graphics_300 = new cjs.Graphics().p("EgMIAjvMAcphDZQN+F8FqOCQFsOFl8N+Ql8N9uEFqQm5Czm3AAQnIAAnJjCg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(245).to({graphics:mask_graphics_245,x:248.9,y:247.7}).wait(1).to({graphics:mask_graphics_246,x:248.9,y:247.7}).wait(1).to({graphics:mask_graphics_247,x:248.9,y:247.7}).wait(1).to({graphics:mask_graphics_248,x:248.9,y:247.7}).wait(1).to({graphics:mask_graphics_249,x:248.9,y:247.8}).wait(1).to({graphics:mask_graphics_250,x:248.9,y:247.8}).wait(1).to({graphics:mask_graphics_251,x:248.9,y:247.8}).wait(1).to({graphics:mask_graphics_252,x:249,y:247.8}).wait(1).to({graphics:mask_graphics_253,x:249,y:247.8}).wait(1).to({graphics:mask_graphics_254,x:249,y:247.9}).wait(1).to({graphics:mask_graphics_255,x:249,y:247.9}).wait(1).to({graphics:mask_graphics_256,x:249,y:247.9}).wait(1).to({graphics:mask_graphics_257,x:249.1,y:247.9}).wait(1).to({graphics:mask_graphics_258,x:249.1,y:248}).wait(1).to({graphics:mask_graphics_259,x:249.1,y:248}).wait(1).to({graphics:mask_graphics_260,x:249.1,y:248}).wait(1).to({graphics:mask_graphics_261,x:249.1,y:248}).wait(1).to({graphics:mask_graphics_262,x:249.1,y:248}).wait(1).to({graphics:mask_graphics_263,x:249.1,y:248}).wait(1).to({graphics:mask_graphics_264,x:249.1,y:248}).wait(1).to({graphics:mask_graphics_265,x:249.1,y:248}).wait(1).to({graphics:mask_graphics_266,x:249.1,y:248}).wait(1).to({graphics:mask_graphics_267,x:249.1,y:248}).wait(1).to({graphics:mask_graphics_268,x:249.1,y:248}).wait(1).to({graphics:mask_graphics_269,x:249.1,y:248}).wait(1).to({graphics:mask_graphics_270,x:249.1,y:247.9}).wait(1).to({graphics:mask_graphics_271,x:249.1,y:247.9}).wait(1).to({graphics:mask_graphics_272,x:249,y:247.9}).wait(1).to({graphics:mask_graphics_273,x:249,y:247.9}).wait(1).to({graphics:mask_graphics_274,x:249,y:247.8}).wait(1).to({graphics:mask_graphics_275,x:248.9,y:247.8}).wait(1).to({graphics:mask_graphics_276,x:248.9,y:247.8}).wait(1).to({graphics:mask_graphics_277,x:248.9,y:247.7}).wait(1).to({graphics:mask_graphics_278,x:248.8,y:247.7}).wait(1).to({graphics:mask_graphics_279,x:248.8,y:247.7}).wait(1).to({graphics:mask_graphics_280,x:248.8,y:247.6}).wait(1).to({graphics:mask_graphics_281,x:248.8,y:247.6}).wait(1).to({graphics:mask_graphics_282,x:248.7,y:247.6}).wait(1).to({graphics:mask_graphics_283,x:248.7,y:247.6}).wait(1).to({graphics:mask_graphics_284,x:248.7,y:247.5}).wait(1).to({graphics:mask_graphics_285,x:248.7,y:247.5}).wait(1).to({graphics:mask_graphics_286,x:248.7,y:247.5}).wait(1).to({graphics:mask_graphics_287,x:248.7,y:247.5}).wait(1).to({graphics:mask_graphics_288,x:248.7,y:247.6}).wait(1).to({graphics:mask_graphics_289,x:248.7,y:247.6}).wait(1).to({graphics:mask_graphics_290,x:248.7,y:247.6}).wait(1).to({graphics:mask_graphics_291,x:248.7,y:247.6}).wait(1).to({graphics:mask_graphics_292,x:248.8,y:247.7}).wait(1).to({graphics:mask_graphics_293,x:248.8,y:247.7}).wait(1).to({graphics:mask_graphics_294,x:248.8,y:247.7}).wait(1).to({graphics:mask_graphics_295,x:248.8,y:247.7}).wait(1).to({graphics:mask_graphics_296,x:248.8,y:247.8}).wait(1).to({graphics:mask_graphics_297,x:248.8,y:247.8}).wait(1).to({graphics:mask_graphics_298,x:249,y:247.9}).wait(1).to({graphics:mask_graphics_299,x:249.1,y:248}).wait(1).to({graphics:mask_graphics_300,x:249.1,y:248.1}).wait(105));

	// Layer 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(20,1,1).p("AljtTQAtAFAjAJQAFABAEACQBbAZA7AlQA+AmBIBDQAMALANAMQBkBqBKB/QBIB6AhCIQAgCEABCIQABCGgQCIQgQCGgdCEQgWBlgeBk");
	this.shape_1.setTransform(371.5,187.7);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(245).to({_off:false},0).wait(160));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_89 = new cjs.Graphics().p("A5jkyQJ3rjPIhNQPHhMLhJ3QLkJ0BMPIMhJAAFyQhMvJJ1rgg");
	var mask_1_graphics_90 = new cjs.Graphics().p("A59kmQJprvPHheQPFhfLtJqQLvJnBePGMhI4AHHQhevGJnrsg");
	var mask_1_graphics_91 = new cjs.Graphics().p("A6WkaQJcr6PEhwQPEhwL4JbQL6JaBwPDMhIvAIeQhwvFJZr3g");
	var mask_1_graphics_92 = new cjs.Graphics().p("A6tkNQJNsFPCiCQPCiCMDJOQMEJLCCPBMhIkAJzQiCvDJMsBg");
	var mask_1_graphics_93 = new cjs.Graphics().p("A7EkAQI/sQPAiTQO/iUMNI/QMQI9CTO/MhIYALIQiTvAI9sMg");
	var mask_1_graphics_94 = new cjs.Graphics().p("A7ajyQIxsaO9ilQO8imMYIxQMaIvClO8MhIKAMdQilu9IusXg");
	var mask_1_graphics_95 = new cjs.Graphics().p("A7ujkQIhskO6i3QO5i3MiIiQMkIgC3O5MhH7ANyQi2u6Igshg");
	var mask_1_graphics_96 = new cjs.Graphics().p("A8CjVQITsuO2jIQO2jJMsITQMtIRDJO2MhHqAPGQjIu2IRsrg");
	var mask_1_graphics_97 = new cjs.Graphics().p("A8UjGQIEs3OyjaQOxjaM2IEQM3ICDaOyMhHXAQaQjZuzICs0g");
	var mask_1_graphics_98 = new cjs.Graphics().p("A8mi2QH1tBOujrQOtjrM/H1QNBHzDrOtMhHDARuQjruuHzs+g");
	var mask_1_graphics_99 = new cjs.Graphics().p("A82imQHltKOqj8QOpj8NIHlQNJHjD8OpMhGsATCQj9uqHktHg");
	var mask_1_graphics_100 = new cjs.Graphics().p("A9FiVQHVtTOlkNQOkkONRHWQNSHUEOOkMhGWAUUQkNulHUtPg");
	var mask_1_graphics_101 = new cjs.Graphics().p("A9TiEQHFtbOgkeQOfkfNZHGQNbHEEfOfMhF9AVnQkfugHFtYg");
	var mask_1_graphics_102 = new cjs.Graphics().p("A9hhyQG2tjObkwQOZkvNiG2QNiG0EwOaMhFjAW5QkvubG0tgg");
	var mask_1_graphics_103 = new cjs.Graphics().p("A9thgQGmtrOVlAQOTlBNqGnQNrGkFAOTMhFHAYLQlAuVGktog");
	var mask_1_graphics_104 = new cjs.Graphics().p("A94hNQGWtzOPlRQONlRNxGWQNzGUFROOMhEqAZbQlRuOGUtwg");
	var mask_1_graphics_105 = new cjs.Graphics().p("A+Bg6QGFt6OIliQOHliN5GHQN5GDFiOHMhELAasQliuIGFt3g");
	var mask_1_graphics_106 = new cjs.Graphics().p("A+KgmQF1uBOBlzQOBlyN/F2QOBFzFyOBMhDrAb7QlyuBF0t+g");
	var mask_1_graphics_107 = new cjs.Graphics().p("A+SgSQFkuIN7mDQN6mCOGFlQOHFiGDN7MhDJAdKQmDt6FjuFg");
	var mask_1_graphics_108 = new cjs.Graphics().p("A+ZACQFUuNNzmUQNzmTOMFVQOOFSGTNzMhCmAeZQmTtzFSuMg");
	var mask_1_graphics_109 = new cjs.Graphics().p("A+eAXQFDuTNsmkQNqmjOTFEQOTFBGkNrMhCCAfnQmjtrFCuSg");
	var mask_1_graphics_110 = new cjs.Graphics().p("A+iAsQEyuZNjmzQNjm0OZEzQOZExGzNjMhBbAg1Qm0tkEyuYg");
	var mask_1_graphics_111 = new cjs.Graphics().p("A+mBCQEhueNcnEQNbnDOeEiQOeEfHDNcMhA0AiBQnDtcEgudg");
	var mask_1_graphics_112 = new cjs.Graphics().p("A+oBYQEQujNTnTQNTnTOjERQOjEOHTNTMhALAjNQnTtUEPuig");
	var mask_1_graphics_113 = new cjs.Graphics().p("A+pBvQD/uoNKnjQNLniOnD/QOoD9HjNLMg/hAkXQnjtKD+ung");
	var mask_1_graphics_114 = new cjs.Graphics().p("A+pCGQDuutNBnyQNCnyOrDvQOtDsHyNBMg+2AliQnytBDtusg");
	var mask_1_graphics_115 = new cjs.Graphics().p("A+oCeQDcuxM5oCQM4oBOvDdQOxDbICM4Mg+JAmrQoBs4Dbuvg");
	var mask_1_graphics_116 = new cjs.Graphics().p("A+lC2QDKu1MvoRQMuoQO0DMQO1DJIQMuMg9aAn1QoQsvDKuzg");
	var mask_1_graphics_117 = new cjs.Graphics().p("A+iDOQC5u5MlofQMlofO3C6QO4C4IfMlMg8rAo8QofslC5u3g");
	var mask_1_graphics_118 = new cjs.Graphics().p("A+eDmQCou7MbouQMaouO6CpQO8CmIuMaMg76AqDQousaCnu7g");
	var mask_1_graphics_119 = new cjs.Graphics().p("A+YD/QCWu+MQo8QMQo9O+CXQO+CVI8MQMg7HArJQo9sQCWu+g");
	var mask_1_graphics_120 = new cjs.Graphics().p("A+REZQCEvBMGpLQMFpLPACGQPBCDJLMFMg6VAsOQpKsFCEvAg");
	var mask_1_graphics_121 = new cjs.Graphics().p("A+KEzQBzvEL7pZQL6pYPCBzQPEByJYL6Mg5fAtSQpZr7ByvBg");
	var mask_1_graphics_122 = new cjs.Graphics().p("A+BFNQBhvGLwpmQLvpnPEBiQPFBfJnLwMg4qAuVQpmrwBgvDg");
	var mask_1_graphics_123 = new cjs.Graphics().p("A93FnQBPvHLkp0QLkp1PGBRQPHBNJ0LkMg3yAvXQp1rkBPvFg");
	var mask_1_graphics_124 = new cjs.Graphics().p("A9sGCQA+vJLYqBQLYqCPHA+QPIA8KCLYMg26AwZQqCrZA9vGg");
	var mask_1_graphics_125 = new cjs.Graphics().p("A9fGdQArvKLMqPQLNqPPIAtQPJAqKPLMMg2BAxZQqPrNAsvHg");
	var mask_1_graphics_126 = new cjs.Graphics().p("A9SG4QAZvKLBqcQLAqcPIAbQPKAYKcLAMg1GAyXQqcrAAavIg");
	var mask_1_graphics_127 = new cjs.Graphics().p("A9EHTQAIvKK0qpQKzqoPJAJQPKAGKpK0Mg0KAzVQqpq0AIvJg");
	var mask_1_graphics_128 = new cjs.Graphics().p("A81HvQgKvKKnq1QKoq2PIgJQPKgLK2KnMgzNA0SQq1qngLvJg");
	var mask_1_graphics_129 = new cjs.Graphics().p("A8kILQgcvJKarCQKarCPJgbQPJgdLCKaMgyOA1OQrCqagcvJg");
	var mask_1_graphics_130 = new cjs.Graphics().p("A8TIoQgtvJKNrOQKNrOPIgtQPJgvLNKOMgxPA2IQrOqOguvHg");
	var mask_1_graphics_131 = new cjs.Graphics().p("A8AJFQhAvJKArZQKAraPHg+QPIhBLZKAMgwPA3BQraqAg/vGg");
	var mask_1_graphics_132 = new cjs.Graphics().p("A7sJhQhSvGJyrmQJzrlPFhQQPHhTLlJzMgvOA35QrlpyhRvGg");
	var mask_1_graphics_133 = new cjs.Graphics().p("A7YJ/QhjvFJlrxQJkrxPEhiQPFhkLxJkMguMA4xQrxplhjvDg");
	var mask_1_graphics_134 = new cjs.Graphics().p("A7CKcQh1vDJXr8QJWr8PChzQPDh3L8JXMgtJA5mQr7pXh1vBg");
	var mask_1_graphics_135 = new cjs.Graphics().p("A6rK6QiHvBJIsHQJJsHPAiFQPAiIMHJJMgsEA6aQsHpIiGu/g");
	var mask_1_graphics_136 = new cjs.Graphics().p("A6ULXQiYu+I6sRQI6sSO9iWQO+iaMRI6Mgq+A7OQsSo6iYu9g");
	var mask_1_graphics_137 = new cjs.Graphics().p("A57L1Qiqu7IsscQIrsbO6ipQO7irMcIsMgp5A7/Qsboriqu6g");
	var mask_1_graphics_138 = new cjs.Graphics().p("A5hMTQi8u3IdsmQIdsmO3i6QO3i8MmIdMgoxA8vQsmoci7u3g");
	var mask_1_graphics_139 = new cjs.Graphics().p("A5GMyQjNu0IOswQIOswOzjLQOzjOMwIOMgnpA9fQswoOjMuyg");
	var mask_1_graphics_140 = new cjs.Graphics().p("A4rNQQjeuwH/s5QH/s5OvjdQOwjfM5H/MgmhA+NQs5n/jeuvg");
	var mask_1_graphics_141 = new cjs.Graphics().p("A4ONvQjwusHwtCQHwtDOrjuQOrjwNCHvMglXA+6QtCnwjvuqg");
	var mask_1_graphics_142 = new cjs.Graphics().p("A3wOOQkBuoHgtLQHgtLOnkAQOnkBNLHgMgkNA/lQtLngkAumg");
	var mask_1_graphics_143 = new cjs.Graphics().p("A3SOtQkSukHRtTQHRtUOhkQQOikTNUHQMgjBBAPQtUnQkSuhg");
	var mask_1_graphics_144 = new cjs.Graphics().p("A2yPMQkjufHBtbQHBtcOckiQOdkkNcHBMgh1BA3QtdnBkiubg");
	var mask_1_graphics_145 = new cjs.Graphics().p("A2RPrQk1uZGxtjQGxtlOXkyQOXk1NlGxMggpBBeQtkmxkzuWg");
	var mask_1_graphics_146 = new cjs.Graphics().p("A1wQKQlFuTGhtrQGhtsORlEQORlFNtGhMgfcBCDQtsmglEuRg");
	var mask_1_graphics_147 = new cjs.Graphics().p("A1OQpQlVuMGQtzQGRt0OLlUQOLlWN0GQMgeNBCoQt0mQlVuLg");
	var mask_1_graphics_148 = new cjs.Graphics().p("A0qRJQlnuHGBt5QGAt7OGllQODlnN7GAMgc+BDLQt7mAlluEg");
	var mask_1_graphics_149 = new cjs.Graphics().p("A0GRoQl3t/FwuBQFwuCN/l1QN9l4OCFwMgbvBDtQuClwl2t+g");
	var mask_1_graphics_150 = new cjs.Graphics().p("AzjSGQmGt5FguHQFguIN5mEQN2mHOIFgMgalBEKQuHlgmFt3g");
	var mask_1_graphics_151 = new cjs.Graphics().p("Ay/SkQmWtyFRuNQFQuONymUQNvmWOOFQMgZZBEnQuNlQmUtwg");
	var mask_1_graphics_152 = new cjs.Graphics().p("AybTCQmltrFBuTQFBuUNqmjQNomlOUFBMgYNBFCQuSlBmktog");
	var mask_1_graphics_153 = new cjs.Graphics().p("Ax2TgQm0tkExuYQExuZNjmyQNhm1OZExMgXABFdQuYkxmzthg");
	var mask_1_graphics_154 = new cjs.Graphics().p("AxQT9QnDtbEhueQEhueNbnBQNZnDOeEhMgVyBF1QudkhnCtag");
	var mask_1_graphics_155 = new cjs.Graphics().p("AwpUbQnStUERuiQERujNTnQQNRnSOjERMgUlBGNQuikRnQtSg");
	var mask_1_graphics_156 = new cjs.Graphics().p("AwCU5QngtMEAumQEBuoNLneQNJnhOoEBMgTXBGiQunkBnftJg");
	var mask_1_graphics_157 = new cjs.Graphics().p("AvaVXQnvtDDxurQDwusNDntQNAnvOsDwMgSJBG3QuqjwnutBg");
	var mask_1_graphics_158 = new cjs.Graphics().p("AuxV1Qn9s7DguvQDguwM6n7QM3n+OwDhMgQ6BHKQuujgn8s4g");
	var mask_1_graphics_159 = new cjs.Graphics().p("AuIWSQoLsxDPuzQDQuzMxoKQMvoMO0DQMgPrBHdQuzjQoKswg");
	var mask_1_graphics_160 = new cjs.Graphics().p("AteWwQoZsoC/u2QC/u3MooYQMmoaO3DAMgOcBHtQu2jAoYsmg");
	var mask_1_graphics_161 = new cjs.Graphics().p("AszXOQoosfCvu5QCvu6MfomQMcooO6CvMgNMBH8Qu5iuomsdg");
	var mask_1_graphics_162 = new cjs.Graphics().p("AsIXsQo1sWCeu8QCfu9MVozQMSo1O9CeMgL8BIKQu8ieo0sTg");
	var mask_1_graphics_163 = new cjs.Graphics().p("ArcYJQpCsLCNu/QCOu/MLpBQMIpDPACNMgKsBIXQu/iOpBsJg");
	var mask_1_graphics_164 = new cjs.Graphics().p("AqvYnQpQsBB9vBQB9vCMBpPQL+pQPCB9MgJcBIiQvBh9pOr/g");
	var mask_1_graphics_165 = new cjs.Graphics().p("AqCZEQpdr3BsvDQBsvEL3pbQL0pePEBtMgILBIrQvDhspcr1g");
	var mask_1_graphics_166 = new cjs.Graphics().p("ApUZhQprrsBcvEQBcvGLspoQLpprPGBcMgG7BIzQvGhcpnrqg");
	var mask_1_graphics_167 = new cjs.Graphics().p("AomZ/Qp3riBLvGQBLvHLhp1QLep3PHBLMgFpBI6QvHhLp1rfg");
	var mask_1_graphics_168 = new cjs.Graphics().p("An3acQqErWA6vIQA7vILWqCQLTqEPIA6MgEZBJAQvIg6qBrUg");
	var mask_1_graphics_169 = new cjs.Graphics().p("AnIa5QqQrLAqvJQApvILLqPQLIqQPJApMgDIBJEQvJgpqOrJg");
	var mask_1_graphics_170 = new cjs.Graphics().p("AmYbWQqcrAAZvJQAYvJLAqbQK8qcPKAYMgB3BJHQvKgZqaq9g");
	var mask_1_graphics_171 = new cjs.Graphics().p("AlnbyQqpqzAIvKQAIvJK0qnQKxqpPKAIMgAmBJIQvKgIqmqyg");
	var mask_1_graphics_172 = new cjs.Graphics().p("AlMcPQq0qogJvKQgJvJKoqyQKlq1PKgJMAArBJIIgZAAQu6AAqpqdg");
	var mask_1_graphics_173 = new cjs.Graphics().p("AlDcrQrAqcgavJQgZvJKcq+QKYrAPKgaMAB8BJGIhIABQucAAqjqBg");
	var mask_1_graphics_174 = new cjs.Graphics().p("Ak5dHQrMqQgqvJQgrvIKQrKQKMrLPJgrMADNBJEQg7ACg6AAQt/AAqdplg");
	var mask_1_graphics_175 = new cjs.Graphics().p("AkvdhQrXqDg7vIQg8vHKDrVQKBrWPIg8MAEeBI/QhSAFhQAAQtkAAqWpLg");
	var mask_1_graphics_176 = new cjs.Graphics().p("Akld8Qrip2hMvHQhMvGJ3rgQJzriPHhMMAFvBI5QhoAJhmAAQtIAAqQoxg");
	var mask_1_graphics_177 = new cjs.Graphics().p("AkaeWQrtpqhcvFQhdvFJqrqQJmrtPFhcMAHABIyQh+AMh7AAQsuAAqIoXg");
	var mask_1_graphics_178 = new cjs.Graphics().p("AkPevQr3pdhtvDQhuvDJdr1QJar3PDhtMAIQBIpQiUARiPAAQsVAAqAn+g");
	var mask_1_graphics_179 = new cjs.Graphics().p("AkDfIQsBpQh+vBQh+vBJPr/QJNsCPBh+MAJgBIgQipAWikAAQr7AAp4nlg");
	var mask_1_graphics_180 = new cjs.Graphics().p("Aj2fgQsMpCiPu/QiOu+JCsKQI/sMO/iOMAKwBIUQi+Aci3AAQrkAApunNg");
	var mask_1_graphics_181 = new cjs.Graphics().p("Ajqf3QsVo0ifu8Qigu8I1sUQIysVO8ifMAMABIHQjTAkjLAAQrMAAplm3g");
	var mask_1_graphics_182 = new cjs.Graphics().p("EgDcAgOQsfomiwu6Qiwu4InseQIksfO5ivMANQBH5QjnArjeAAQq2AApamgg");
	var mask_1_graphics_183 = new cjs.Graphics().p("EgDPAgkQsooYjAu2QjBu2IZsmQIXspO1jAMAOgBHqQj7AzjxAAQqfAApRmKg");
	var mask_1_graphics_184 = new cjs.Graphics().p("EgDAAg6QsyoKjRuzQjQuyIKswQIJsxOyjRMAPvBHZQkPA8kEAAQqJAApFl0g");
	var mask_1_graphics_185 = new cjs.Graphics().p("EgCyAhQQs6n9jhuvQjhuuH8s5QH6s6OujhMAQ/BHHQkiBFkXAAQp0AAo6leg");
	var mask_1_graphics_186 = new cjs.Graphics().p("EgCjAhkQtDntjxusQjyuqHvtBQHrtDOqjxMASNBGzQk1BQkpAAQpfAAoulLg");
	var mask_1_graphics_187 = new cjs.Graphics().p("EgCTAh4QtMnfkBunQkCulHgtKQHdtLOmkCMATbBGeQlHBbk8AAQpKAAoik3g");
	var mask_1_graphics_188 = new cjs.Graphics().p("EgCDAiMQtUnRkSuiQkRuhHRtSQHOtTOhkSMAUpBGIQlZBmlOAAQo2AAoVkjg");
	var mask_1_graphics_189 = new cjs.Graphics().p("EgBzAifQtbnCkiudQkiudHCtZQHAtcOckhMAV3BFwQlrBylhAAQoiAAoIkQg");
	var mask_1_graphics_190 = new cjs.Graphics().p("EgBiAixQtjmzkyuYQkyuXG0thQGwtjOXkyMAXEBFYQl8B+l0AAQoOAAn6j+g");
	var mask_1_graphics_191 = new cjs.Graphics().p("EgBRAjDQtqmklCuTQlCuRGltpQGhtqOSlCMAYQBE9QmNCMmGAAQn6AAntjsg");
	var mask_1_graphics_192 = new cjs.Graphics().p("EgA/AjUQtymVlRuNQlSuNGVtvQGTtxOMlRMAZcBEhQmeCamYAAQnnAAnejbg");
	var mask_1_graphics_193 = new cjs.Graphics().p("EgAtAjkQt5mFlhuHQlhuHGGt2QGDt4OGlhMAaoBEFQmuComqAAQnVAAnPjLg");
	var mask_1_graphics_194 = new cjs.Graphics().p("EgAaAj0QuAl2lwuAQlxuBF2t8QF0t/OBlxMAbyBDnQm+C3m9AAQnCAAm/i7g");
	var mask_1_graphics_195 = new cjs.Graphics().p("EgAHAkDQuGlmmAt6QmAt6FmuDQFluFN6mAMAc9BDHQnODHnPAAQmvAAmwisg");
	var mask_1_graphics_196 = new cjs.Graphics().p("EAALAkSQuLlXmPtzQmQtzFXuJQFVuLNzmPMAeHBCmQncDXnjAAQmcAAmhidg");
	var mask_1_graphics_197 = new cjs.Graphics().p("EAAeAkgQuQlHmftsQmetsFHuPQFFuRNsmeMAfRBCEQnrDon2AAQmKAAmRiPg");
	var mask_1_graphics_198 = new cjs.Graphics().p("EAAzAktQuWk3mutlQmutlE4uUQE1uWNlmuMAgZBBhQn5D6oJAAQl4AAl/iCg");
	var mask_1_graphics_199 = new cjs.Graphics().p("EABQAk/QudkfnEtaQnDtaEgubQEeueNZnEMAiDBArQoNEVolAAQldAAlnhwg");
	var mask_1_graphics_200 = new cjs.Graphics().p("EABvAlQQukkHnatOQnZtPEJuiQEGulNOnZMAjrA/yQogEwpCAAQlCAAlNheg");
	var mask_1_graphics_201 = new cjs.Graphics().p("EACPAlgQurjwnvtCQnutCDxupQDuurNCnvMAlSA+4QoyFNphAAQkmAAkyhOg");
	var mask_1_graphics_202 = new cjs.Graphics().p("EACvAluQuxjYoDs1QoEs1DZuvQDXuxM1oEMAm3A96QpDFsp/AAQkMAAkWhAg");
	var mask_1_graphics_203 = new cjs.Graphics().p("EADQAl7Qu2jAoYsoQoYsoDBu0QC/u2MnoYMAobA86QpTGLqfAAQjwAAj6gzg");
	var mask_1_graphics_204 = new cjs.Graphics().p("EADyAmHQu7ipossaQotsaCpu5QCnu6MaotMAp9A74QpjGrrAAAQjUAAjcgmg");
	var mask_1_graphics_205 = new cjs.Graphics().p("EAEUAmQQu+iPpBsMQpAsMCRu9QCOu+MMpBMArdA6yQpxHOriAAQi3AAi/gdg");
	var mask_1_graphics_206 = new cjs.Graphics().p("EAE3AmZQvCh4pUr9QpUr9B5vAQB2vCL9pUMAs7A5rQp9HxsFAAQibAAiggUg");
	var mask_1_graphics_207 = new cjs.Graphics().p("EAFbAmgQvFhfpnruQpnruBgvDQBevELtpoMAuZA4hQqKIVsqAAQh8AAiBgMg");
	var mask_1_graphics_208 = new cjs.Graphics().p("EAF/AmlQvHhHp6rdQp6reBIvGQBFvGLep6MAvzA3UQqUI7tQAAQheAAhhgHg");
	var mask_1_graphics_209 = new cjs.Graphics().p("EAGkAmpQvIguqNrOQqMrNAvvIQAtvHLOqNMAxLA2GQqeJit4AAQg+AAhAgDg");
	var mask_1_graphics_210 = new cjs.Graphics().p("EAHKAmrQvKgVqeq9Qqeq9AWvJQAVvIK8qeMAyjA01QqnKKuiAAIg7gBg");
	var mask_1_graphics_211 = new cjs.Graphics().p("AyKcDQqwqsgBvJQgFvIKsqwMAz3AzjQqrKwvIADIgJAAQvEAAqtqpg");
	var mask_1_graphics_212 = new cjs.Graphics().p("Ax0csQrBqagavJQgdvHKarCMA1KAyOQqaLBvIAcIhMABQuZAAqlqAg");
	var mask_1_graphics_213 = new cjs.Graphics().p("AxcdUQrSqIgzvIQg1vGKIrSMA2aAw2QqILSvHA0QhIAEhHAAQtuAAqcpYg");
	var mask_1_graphics_214 = new cjs.Graphics().p("AxDd7Qrip1hMvHQhOvFJ2riMA3pAvdQp2LivFBNQhpAIhmAAQtIAAqRoxg");
	var mask_1_graphics_215 = new cjs.Graphics().p("AwpehQrypjhjvEQhnvDJjryMA41AuDQpjLxvDBlQiJAPiFAAQshAAqHoMg");
	var mask_1_graphics_216 = new cjs.Graphics().p("AwNfFQsBpPh8vCQh/vAJQsBMA5+AsmQpPMBvAB9QipAWijAAQr9AAp6nog");
	var mask_1_graphics_217 = new cjs.Graphics().p("AvvfoQsQo7iUu+QiYu9I8sQMA7GArHQo8MQu9CVQjHAfi/AAQraAAptnFg");
	var mask_1_graphics_218 = new cjs.Graphics().p("EgPQAgKQseonitu6Qivu5IoseMA8KApmQooMeu4CuQjlAqjdAAQq4AApemkg");
	var mask_1_graphics_219 = new cjs.Graphics().p("EgOwAgrQsroTjFu2QjIuzIUssMA9MAoEQoTMru0DGQkCA2j4AAQqYAApPmDg");
	var mask_1_graphics_220 = new cjs.Graphics().p("EgOOAhLQs5n/jcuwQjguvH/s5MA+MAmgQn+M5uvDeQkeBDkUAAQp4AAo/ljg");
	var mask_1_graphics_221 = new cjs.Graphics().p("EgNqAhpQtGnqj1uqQj3uoHqtGMA/KAk6QnqNGupD1Qk6BTkvAAQpZAAotlGg");
	var mask_1_graphics_222 = new cjs.Graphics().p("EgNGAiGQtRnUkNukQkOuiHUtSMBAEAjTQnUNSuiENQlVBjlKAAQo7AAockpg");
	var mask_1_graphics_223 = new cjs.Graphics().p("EgMfAiiQtem/kkudQkmubG/tdMBA8AhrQm+NdubElQlvB0llAAQoeAAoIkNg");
	var mask_1_graphics_224 = new cjs.Graphics().p("EgL4Ai8Qtompk7uVQk+uTGptoMBByAgBQmpNouTE8QmICImAAAQoCAAn0j0g");
	var mask_1_graphics_225 = new cjs.Graphics().p("EgLPAjVQtzmSlSuNQlVuMGTtyMBCkAeWQmSNzuLFTQmhCcmbAAQnlAAnfjbg");
	var mask_1_graphics_226 = new cjs.Graphics().p("EgKlAjtQt9l8lpuEQlruDF8t8MBDUAcqQl8N9uCFqQm4Cxm2AAQnKAAnJjDg");
	var mask_1_graphics_227 = new cjs.Graphics().p("EgJ5AkEQuGllmAt7QmDt6FmuFMBECAa8QlmOGt4GBQnPDInSAAQmuAAmyisg");
	var mask_1_graphics_228 = new cjs.Graphics().p("EgJMAkZQuQlOmWtxQmZtvFPuPMBEsAZNQlOOQtvGWQnkDhnuAAQmTAAmaiXg");
	var mask_1_graphics_229 = new cjs.Graphics().p("EgIeAktQuYk3mstmQmvtlE3uXMBFUAXeQk3OXtkGtQn6D6oJAAQl5AAmBiDg");
	var mask_1_graphics_230 = new cjs.Graphics().p("EgHvAlAQufkgnDtbQnEtaEfueMBF5AVsQkgOftZHDQoNEVomAAQleAAlohwg");
	var mask_1_graphics_231 = new cjs.Graphics().p("EgG/AlRQumkJnYtPQnatOEIulMBGbAT7QkIOmtOHYQogEwpEAAQlCAAlPheg");
	var mask_1_graphics_232 = new cjs.Graphics().p("EgGNAlgQutjwnttDQnwtCDxusMBG6ASJQjxOstBHuQozFNpiAAQknAAkzhPg");
	var mask_1_graphics_233 = new cjs.Graphics().p("EgFbAlvQuyjZoCs2QoFs1DZuyMBHWAQVQjZOys1IDQpDFsqBAAQkMAAkYhAg");
	var mask_1_graphics_234 = new cjs.Graphics().p("EgEnAl8Qu4jBoXspQoZsoDBu2MBHvAOhQjBO3snIXQpUGMqhAAQjwAAj7gzg");
	var mask_1_graphics_235 = new cjs.Graphics().p("EgDzAmHQu8ioorscQousaCpu7MBIFAMtQioO8saIrQpjGsrBAAQjUAAjfgng");
	var mask_1_graphics_236 = new cjs.Graphics().p("EgC9AmRQvAiQo/sNQpCsMCQu/MBIZAK3QiQPAsLJAQpxHOrkAAQi5AAi/gdg");
	var mask_1_graphics_237 = new cjs.Graphics().p("EgCGAmaQvEh4pTr/QpVr8B4vDMBIpAJCQh4PDr8JUQp+HxsHAAQicAAiggUg");
	var mask_1_graphics_238 = new cjs.Graphics().p("EgBPAmgQvGhfpmrvQportBfvGMBI3AHMQhgPGrtJnQqLIVsrAAQh+AAiBgNg");
	var mask_1_graphics_239 = new cjs.Graphics().p("EgAWAmmQvIhHp6rfQp7reBHvHMBJBAFVQhHPJrdJ5QqWI7tSAAQhfAAhggHg");
	var mask_1_graphics_240 = new cjs.Graphics().p("EAAiAmqQvJgvqLrPQqOrNAvvKMBJIADgQgvPKrNKMQqfJit6AAQg/AAhBgDg");
	var mask_1_graphics_241 = new cjs.Graphics().p("EABcAmsQvJgWqeq+Qqfq9AWvLMBJMABqQgWPLq8KeQqpKKukAAIg9gBg");
	var mask_1_graphics_242 = new cjs.Graphics().p("A3icCQqxqrgDvLMBJOgANQADPLqrKvQqtKxvMADIgHAAQvFAAqtqrg");
	var mask_1_graphics_243 = new cjs.Graphics().p("A23crQrDqZgbvLMBJMgCEQAcPLqaLAQqcLCvKAcIhMABQuaAAqkqCg");
	var mask_1_graphics_244 = new cjs.Graphics().p("A2MdUQrTqIg0vKMBJIgD6QA0PKqILQQqKLTvJA0QhIAEhGAAQtwAAqcpZg");
	var mask_1_graphics_245 = new cjs.Graphics().p("A1gd7Qrjp1hMvJMBJAgFwQBMPIp1LhQp3LjvIBMQhpAJhmAAQtIAAqSozg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(89).to({graphics:mask_1_graphics_89,x:248.4,y:139.9}).wait(1).to({graphics:mask_1_graphics_90,x:248.2,y:142}).wait(1).to({graphics:mask_1_graphics_91,x:248,y:144.2}).wait(1).to({graphics:mask_1_graphics_92,x:247.7,y:146.3}).wait(1).to({graphics:mask_1_graphics_93,x:247.4,y:148.4}).wait(1).to({graphics:mask_1_graphics_94,x:247.1,y:150.6}).wait(1).to({graphics:mask_1_graphics_95,x:246.7,y:152.7}).wait(1).to({graphics:mask_1_graphics_96,x:246.3,y:154.8}).wait(1).to({graphics:mask_1_graphics_97,x:245.8,y:156.9}).wait(1).to({graphics:mask_1_graphics_98,x:245.3,y:159}).wait(1).to({graphics:mask_1_graphics_99,x:244.7,y:161.1}).wait(1).to({graphics:mask_1_graphics_100,x:244.2,y:163.1}).wait(1).to({graphics:mask_1_graphics_101,x:243.6,y:165.2}).wait(1).to({graphics:mask_1_graphics_102,x:242.9,y:167.3}).wait(1).to({graphics:mask_1_graphics_103,x:242.2,y:169.3}).wait(1).to({graphics:mask_1_graphics_104,x:241.5,y:171.3}).wait(1).to({graphics:mask_1_graphics_105,x:240.7,y:173.3}).wait(1).to({graphics:mask_1_graphics_106,x:239.9,y:175.3}).wait(1).to({graphics:mask_1_graphics_107,x:239.1,y:177.3}).wait(1).to({graphics:mask_1_graphics_108,x:238.2,y:179.3}).wait(1).to({graphics:mask_1_graphics_109,x:237.3,y:181.2}).wait(1).to({graphics:mask_1_graphics_110,x:236.3,y:183.2}).wait(1).to({graphics:mask_1_graphics_111,x:235.3,y:185.1}).wait(1).to({graphics:mask_1_graphics_112,x:234.3,y:187}).wait(1).to({graphics:mask_1_graphics_113,x:233.3,y:188.8}).wait(1).to({graphics:mask_1_graphics_114,x:232.2,y:190.7}).wait(1).to({graphics:mask_1_graphics_115,x:231.1,y:192.5}).wait(1).to({graphics:mask_1_graphics_116,x:229.9,y:194.4}).wait(1).to({graphics:mask_1_graphics_117,x:228.7,y:196.2}).wait(1).to({graphics:mask_1_graphics_118,x:227.5,y:197.9}).wait(1).to({graphics:mask_1_graphics_119,x:226.2,y:199.7}).wait(1).to({graphics:mask_1_graphics_120,x:225,y:201.4}).wait(1).to({graphics:mask_1_graphics_121,x:223.6,y:203.1}).wait(1).to({graphics:mask_1_graphics_122,x:222.3,y:204.8}).wait(1).to({graphics:mask_1_graphics_123,x:220.9,y:206.4}).wait(1).to({graphics:mask_1_graphics_124,x:219.5,y:208.1}).wait(1).to({graphics:mask_1_graphics_125,x:218.1,y:209.7}).wait(1).to({graphics:mask_1_graphics_126,x:216.6,y:211.2}).wait(1).to({graphics:mask_1_graphics_127,x:215.1,y:212.8}).wait(1).to({graphics:mask_1_graphics_128,x:213.6,y:214.3}).wait(1).to({graphics:mask_1_graphics_129,x:212,y:215.8}).wait(1).to({graphics:mask_1_graphics_130,x:210.4,y:217.3}).wait(1).to({graphics:mask_1_graphics_131,x:208.8,y:218.7}).wait(1).to({graphics:mask_1_graphics_132,x:207.2,y:220.1}).wait(1).to({graphics:mask_1_graphics_133,x:205.5,y:221.5}).wait(1).to({graphics:mask_1_graphics_134,x:203.9,y:222.8}).wait(1).to({graphics:mask_1_graphics_135,x:202.2,y:224.1}).wait(1).to({graphics:mask_1_graphics_136,x:200.4,y:225.4}).wait(1).to({graphics:mask_1_graphics_137,x:198.7,y:226.6}).wait(1).to({graphics:mask_1_graphics_138,x:196.9,y:227.8}).wait(1).to({graphics:mask_1_graphics_139,x:195.1,y:229}).wait(1).to({graphics:mask_1_graphics_140,x:193.3,y:230.2}).wait(1).to({graphics:mask_1_graphics_141,x:191.4,y:231.3}).wait(1).to({graphics:mask_1_graphics_142,x:189.6,y:232.4}).wait(1).to({graphics:mask_1_graphics_143,x:187.7,y:233.4}).wait(1).to({graphics:mask_1_graphics_144,x:185.8,y:234.4}).wait(1).to({graphics:mask_1_graphics_145,x:183.9,y:235.4}).wait(1).to({graphics:mask_1_graphics_146,x:182,y:236.3}).wait(1).to({graphics:mask_1_graphics_147,x:180,y:237.2}).wait(1).to({graphics:mask_1_graphics_148,x:178,y:238.1}).wait(1).to({graphics:mask_1_graphics_149,x:176.1,y:239}).wait(1).to({graphics:mask_1_graphics_150,x:174.2,y:239.7}).wait(1).to({graphics:mask_1_graphics_151,x:172.3,y:240.4}).wait(1).to({graphics:mask_1_graphics_152,x:170.4,y:241.1}).wait(1).to({graphics:mask_1_graphics_153,x:168.5,y:241.8}).wait(1).to({graphics:mask_1_graphics_154,x:166.5,y:242.4}).wait(1).to({graphics:mask_1_graphics_155,x:164.6,y:243}).wait(1).to({graphics:mask_1_graphics_156,x:162.7,y:243.5}).wait(1).to({graphics:mask_1_graphics_157,x:160.7,y:244}).wait(1).to({graphics:mask_1_graphics_158,x:158.7,y:244.5}).wait(1).to({graphics:mask_1_graphics_159,x:156.8,y:245}).wait(1).to({graphics:mask_1_graphics_160,x:154.8,y:245.4}).wait(1).to({graphics:mask_1_graphics_161,x:152.8,y:245.7}).wait(1).to({graphics:mask_1_graphics_162,x:150.8,y:246.1}).wait(1).to({graphics:mask_1_graphics_163,x:148.8,y:246.4}).wait(1).to({graphics:mask_1_graphics_164,x:146.8,y:246.7}).wait(1).to({graphics:mask_1_graphics_165,x:144.8,y:246.9}).wait(1).to({graphics:mask_1_graphics_166,x:142.8,y:247.1}).wait(1).to({graphics:mask_1_graphics_167,x:140.7,y:247.3}).wait(1).to({graphics:mask_1_graphics_168,x:138.7,y:247.4}).wait(1).to({graphics:mask_1_graphics_169,x:136.7,y:247.5}).wait(1).to({graphics:mask_1_graphics_170,x:134.7,y:247.6}).wait(1).to({graphics:mask_1_graphics_171,x:132.7,y:247.6}).wait(1).to({graphics:mask_1_graphics_172,x:132.8,y:247.6}).wait(1).to({graphics:mask_1_graphics_173,x:134.8,y:247.6}).wait(1).to({graphics:mask_1_graphics_174,x:136.8,y:247.6}).wait(1).to({graphics:mask_1_graphics_175,x:138.9,y:247.6}).wait(1).to({graphics:mask_1_graphics_176,x:140.9,y:247.7}).wait(1).to({graphics:mask_1_graphics_177,x:142.9,y:247.7}).wait(1).to({graphics:mask_1_graphics_178,x:144.9,y:247.7}).wait(1).to({graphics:mask_1_graphics_179,x:146.9,y:247.7}).wait(1).to({graphics:mask_1_graphics_180,x:148.9,y:247.7}).wait(1).to({graphics:mask_1_graphics_181,x:150.9,y:247.8}).wait(1).to({graphics:mask_1_graphics_182,x:152.9,y:247.8}).wait(1).to({graphics:mask_1_graphics_183,x:154.9,y:247.8}).wait(1).to({graphics:mask_1_graphics_184,x:156.9,y:247.8}).wait(1).to({graphics:mask_1_graphics_185,x:158.9,y:247.8}).wait(1).to({graphics:mask_1_graphics_186,x:160.8,y:247.9}).wait(1).to({graphics:mask_1_graphics_187,x:162.8,y:247.9}).wait(1).to({graphics:mask_1_graphics_188,x:164.8,y:247.9}).wait(1).to({graphics:mask_1_graphics_189,x:166.7,y:247.9}).wait(1).to({graphics:mask_1_graphics_190,x:168.6,y:247.9}).wait(1).to({graphics:mask_1_graphics_191,x:170.5,y:247.9}).wait(1).to({graphics:mask_1_graphics_192,x:172.4,y:247.9}).wait(1).to({graphics:mask_1_graphics_193,x:174.3,y:247.9}).wait(1).to({graphics:mask_1_graphics_194,x:176.2,y:247.9}).wait(1).to({graphics:mask_1_graphics_195,x:178.1,y:247.9}).wait(1).to({graphics:mask_1_graphics_196,x:179.9,y:247.9}).wait(1).to({graphics:mask_1_graphics_197,x:181.8,y:247.9}).wait(1).to({graphics:mask_1_graphics_198,x:183.6,y:247.9}).wait(1).to({graphics:mask_1_graphics_199,x:186.2,y:247.9}).wait(1).to({graphics:mask_1_graphics_200,x:188.8,y:247.8}).wait(1).to({graphics:mask_1_graphics_201,x:191.4,y:247.8}).wait(1).to({graphics:mask_1_graphics_202,x:193.9,y:247.8}).wait(1).to({graphics:mask_1_graphics_203,x:196.4,y:247.8}).wait(1).to({graphics:mask_1_graphics_204,x:198.9,y:247.7}).wait(1).to({graphics:mask_1_graphics_205,x:201.3,y:247.7}).wait(1).to({graphics:mask_1_graphics_206,x:203.6,y:247.7}).wait(1).to({graphics:mask_1_graphics_207,x:206,y:247.6}).wait(1).to({graphics:mask_1_graphics_208,x:208.2,y:247.6}).wait(1).to({graphics:mask_1_graphics_209,x:210.4,y:247.6}).wait(1).to({graphics:mask_1_graphics_210,x:212.6,y:247.6}).wait(1).to({graphics:mask_1_graphics_211,x:214.7,y:247.6}).wait(1).to({graphics:mask_1_graphics_212,x:216.8,y:247.6}).wait(1).to({graphics:mask_1_graphics_213,x:218.8,y:247.6}).wait(1).to({graphics:mask_1_graphics_214,x:220.8,y:247.6}).wait(1).to({graphics:mask_1_graphics_215,x:222.7,y:247.7}).wait(1).to({graphics:mask_1_graphics_216,x:224.5,y:247.7}).wait(1).to({graphics:mask_1_graphics_217,x:226.3,y:247.7}).wait(1).to({graphics:mask_1_graphics_218,x:228,y:247.8}).wait(1).to({graphics:mask_1_graphics_219,x:229.6,y:247.8}).wait(1).to({graphics:mask_1_graphics_220,x:231.2,y:247.8}).wait(1).to({graphics:mask_1_graphics_221,x:232.8,y:247.9}).wait(1).to({graphics:mask_1_graphics_222,x:234.2,y:247.9}).wait(1).to({graphics:mask_1_graphics_223,x:235.6,y:247.9}).wait(1).to({graphics:mask_1_graphics_224,x:237,y:248}).wait(1).to({graphics:mask_1_graphics_225,x:238.2,y:248}).wait(1).to({graphics:mask_1_graphics_226,x:239.4,y:248}).wait(1).to({graphics:mask_1_graphics_227,x:240.6,y:248}).wait(1).to({graphics:mask_1_graphics_228,x:241.6,y:248}).wait(1).to({graphics:mask_1_graphics_229,x:242.6,y:248}).wait(1).to({graphics:mask_1_graphics_230,x:243.5,y:248}).wait(1).to({graphics:mask_1_graphics_231,x:244.4,y:247.9}).wait(1).to({graphics:mask_1_graphics_232,x:245.2,y:247.9}).wait(1).to({graphics:mask_1_graphics_233,x:245.9,y:247.9}).wait(1).to({graphics:mask_1_graphics_234,x:246.5,y:247.9}).wait(1).to({graphics:mask_1_graphics_235,x:247,y:247.8}).wait(1).to({graphics:mask_1_graphics_236,x:247.5,y:247.8}).wait(1).to({graphics:mask_1_graphics_237,x:247.9,y:247.8}).wait(1).to({graphics:mask_1_graphics_238,x:248.3,y:247.7}).wait(1).to({graphics:mask_1_graphics_239,x:248.5,y:247.7}).wait(1).to({graphics:mask_1_graphics_240,x:248.7,y:247.7}).wait(1).to({graphics:mask_1_graphics_241,x:248.8,y:247.7}).wait(1).to({graphics:mask_1_graphics_242,x:248.8,y:247.7}).wait(1).to({graphics:mask_1_graphics_243,x:248.8,y:247.7}).wait(1).to({graphics:mask_1_graphics_244,x:248.9,y:247.7}).wait(1).to({graphics:mask_1_graphics_245,x:248.9,y:247.8}).wait(160));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(20,1,1).p("ATquBQgOAugPAuQgsCDgyCAQg1CGg/CAQg/B/hLB7QhLB4hZBwQhXBuhlBjQhoBmh2BWQhzBTh7BGQh5BGiIAuQiDAuiMAEQiKAFiDghQiDghhfhLQhFg3g8hfQgNgWgCgCQgDgCgjg7Qgkg6goiuQgoitgEiWQgEiYARiMQAQiKAciHQAOhBARhBQARhDAUhCQALglAMgl");
	this.shape_2.setTransform(270.9,358.8);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(89).to({_off:false},0).wait(316));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_9 = new cjs.Graphics().p("EgNaAjKMAfOhCPQNuGeFIOQQFIOSmeNuQmeNvuSFHQmUCSmOAAQnzAAnpjng");
	var mask_2_graphics_10 = new cjs.Graphics().p("EgMyAjcMAd+hCzQN2GNFZOKQFZOLmNN2QmON2uMFYQmmCimhAAQnfAAnZjVg");
	var mask_2_graphics_11 = new cjs.Graphics().p("EgMKAjuMAcuhDXQN9F9FqODQFqOFl9N9Ql9N+uFFoQm3Cym2AAQnKAAnJjDg");
	var mask_2_graphics_12 = new cjs.Graphics().p("EgLhAj+MAbchD4QOEFtF7N8QF7N9lsOFQlsOEt+F6QnIDCnKAAQm2AAm4izg");
	var mask_2_graphics_13 = new cjs.Graphics().p("EgK4AkPMAaKhEYQOLFbGLN1QGMN2lbOLQlbOLt3GKQnYDUneAAQmiAAmniig");
	var mask_2_graphics_14 = new cjs.Graphics().p("EgKPAkeMAY4hE3QOSFLGbNtQGcNvlKORQlKORtvGbQnoDmnzAAQmOAAmViTg");
	var mask_2_graphics_15 = new cjs.Graphics().p("EgJmAksMAXmhFTQOXE5GsNmQGtNok5OWQk5OXtnGrQn4D4oHAAQl6AAmEiEg");
	var mask_2_graphics_16 = new cjs.Graphics().p("EgI8Ak6MAWThFuQOcEnG8NeQG9NfknOcQkoOdtfG7QoGEModAAQlmAAlxh2g");
	var mask_2_graphics_17 = new cjs.Graphics().p("EgISAlHMAU/hGIQOiEWHMNVQHNNXkWOhQkXOjtWHLQoVEgoyAAQlSAAlehpg");
	var mask_2_graphics_18 = new cjs.Graphics().p("EgHnAlUMATqhGhQOnEFHcNMQHdNOkFOnQkFOntOHbQoiE1pIAAQk+AAlKhcg");
	var mask_2_graphics_19 = new cjs.Graphics().p("EgG9AlfMASWhG3QOsDzHrNDQHtNGjzOqQj0OstFHrQovFLpeAAQkqAAk3hRg");
	var mask_2_graphics_20 = new cjs.Graphics().p("EgGSAlqMARBhHMQOwDiH7M5QH8M8jiOvQjhOws8H7Qo8Fgp1AAQkWAAkihFg");
	var mask_2_graphics_21 = new cjs.Graphics().p("EgFnAl0MAPrhHgQO0DQILMwQILMyjQO0QjQO0sxIKQpJF3qMAAQkCAAkNg7g");
	var mask_2_graphics_22 = new cjs.Graphics().p("EgE8Al9MAOVhHxQO4C+IaMmQIbMoi+O3Qi/O4snIZQpVGPqjAAQjuAAj4gyg");
	var mask_2_graphics_23 = new cjs.Graphics().p("EgEQAmGMAM/hICQO7CsIoMcQIqMeisO6QisO8seIoQpfGnq8AAQjZAAjigpg");
	var mask_2_graphics_24 = new cjs.Graphics().p("EgDlAmNMALphIQQO+CbI3MRQI5MTiaO9QibO/sTI3QpqG/rUAAQjEAAjNghg");
	var mask_2_graphics_25 = new cjs.Graphics().p("EgC5AmUMAKShIdQPBCIJFMHQJIMIiJPAQiIPCsIJFQp0HZrvAAQiuAAi2gag");
	var mask_2_graphics_26 = new cjs.Graphics().p("EgCNAmaMAI7hIoQPDB2JUL7QJWL+h3PCQh2PEr9JUQp+HzsIAAQiaAAiegUg");
	var mask_2_graphics_27 = new cjs.Graphics().p("EgBiAmfMAHkhIyQPGBkJiLxQJkLyhlPEQhkPFryJjQqGINskAAQiEAAiHgOg");
	var mask_2_graphics_28 = new cjs.Graphics().p("EgA2AmkMAGNhI7QPHBTJwLkQJyLnhSPGQhTPHrmJwQqPIps/AAQhtAAhwgJg");
	var mask_2_graphics_29 = new cjs.Graphics().p("EgAKAmnMAE1hJBQPJBBJ+LYQKALbhBPHQhAPJrbJ+QqWJFtcAAQhWAAhYgGg");
	var mask_2_graphics_30 = new cjs.Graphics().p("EAAhAmqMADfhJGQPJAuKMLNQKNLOguPJQguPJrPKMQqdJit6AAQg/AAhAgDg");
	var mask_2_graphics_31 = new cjs.Graphics().p("EABNAmrMACHhJIQPKAcKZLAQKbLCgcPJQgcPKrDKZQqjKAuZAAIhOgCg");
	var mask_2_graphics_32 = new cjs.Graphics().p("EAB5AmsMAAwhJKQPKAKKmK0QKnK1gKPJQgJPLq2KmQqqKdu4ABIgcgBg");
	var mask_2_graphics_33 = new cjs.Graphics().p("EAB9gieQPKgIKzKnQK0KoAIPKQAJPKqpKzQqnK0vKAIg");
	var mask_2_graphics_34 = new cjs.Graphics().p("EABRgicQPKgbK/KaQLBKbAbPJQAaPKqcLAQqZLBvKAag");
	var mask_2_graphics_35 = new cjs.Graphics().p("EAAlgiaQPJgtLMKNQLNKOAtPIQAsPKqOLLQqMLOvKAsg");
	var mask_2_graphics_36 = new cjs.Graphics().p("EgAGgiWQPHg/LYJ/QLZKBA/PIQA/PHqBLYQp/LZvIA/g");
	var mask_2_graphics_37 = new cjs.Graphics().p("EgAygiRQPGhRLkJxQLlJzBRPHQBRPGp0LjQpxLlvGBRg");
	var mask_2_graphics_38 = new cjs.Graphics().p("EgBdgiLQPEhjLvJjQLwJlBjPFQBjPFplLvQpjLwvFBjg");
	var mask_2_graphics_39 = new cjs.Graphics().p("EgCJgiDQPCh1L6JVQL8JWB1PDQB1PDpXL6QpVL8vDB1g");
	var mask_2_graphics_40 = new cjs.Graphics().p("EgC1gh7QPAiHMFJHQMHJICHPBQCHPApIMFQpHMHvACHg");
	var mask_2_graphics_41 = new cjs.Graphics().p("EgDgghxQO9iZMQI4QMRI6CZO+QCZO9o6MQQo3MSu+CZg");
	var mask_2_graphics_42 = new cjs.Graphics().p("EgEMghmQO6irMaIqQMdIrCrO6QCrO6osMbQopMcu6Crg");
	var mask_2_graphics_43 = new cjs.Graphics().p("EgE3ghZQO3i9MkIaQMnIcC8O4QC9O2ocMlQoaMmu4C9g");
	var mask_2_graphics_44 = new cjs.Graphics().p("EgFighMQOzjOMuILQMxIMDOO0QDPOzoNMvQoLMwu0DOg");
	var mask_2_graphics_45 = new cjs.Graphics().p("EgGNgg9QOvjgM4H7QM6H+DgOvQDgOvn9M4Qn8M6uwDgg");
	var mask_2_graphics_46 = new cjs.Graphics().p("EgHWggiQOnj+NIHhQNKHiD+OoQD+OnniNJQnhNKuoD+g");
	var mask_2_graphics_47 = new cjs.Graphics().p("EgIfggCQOekdNXHGQNaHHEcOfQEcOfnHNXQnFNZugEdg");
	var mask_2_graphics_48 = new cjs.Graphics().p("Apn/gQOVk6NlGqQNnGsE6OVQE7OVmsNmQmqNnuVE6g");
	var mask_2_graphics_49 = new cjs.Graphics().p("Aqu+5QOKlYNyGOQN1GPFYOLQFXOKmPN0QmNN0uMFXg");
	var mask_2_graphics_50 = new cjs.Graphics().p("Ar0+QQN+l0N/FxQOCFyF0OAQF1N/lzN/QlxOBuAF0g");
	var mask_2_graphics_51 = new cjs.Graphics().p("As69jQNzmROKFUQONFWGRNzQGRNylWOLQlTOMtzGRg");
	var mask_2_graphics_52 = new cjs.Graphics().p("At+8yQNmmuOUE3QOYE4GtNmQGtNlk4OVQk2OXtmGtg");
	var mask_2_graphics_53 = new cjs.Graphics().p("AvA7/QNXnJOeEZQOhEaHJNYQHJNXkbOfQkYOgtYHJg");
	var mask_2_graphics_54 = new cjs.Graphics().p("AwC7IQNJnkOmD7QOpD8HlNIQHkNJj9OnQj6OotJHlg");
	var mask_2_graphics_55 = new cjs.Graphics().p("AxC6OQM4n/OuDdQOxDdH/M5QIAM5jfOuQjcOws5IAg");
	var mask_2_graphics_56 = new cjs.Graphics().p("AyB5RQMnoaO1C/QO3C/IaMoQIaMojAO1Qi+O3soIZg");
	var mask_2_graphics_57 = new cjs.Graphics().p("Ay/4RQMWozO6CgQO9CgI0MWQIzMWihO7QifO9sWIzg");
	var mask_2_graphics_58 = new cjs.Graphics().p("Az73OQMDpMO/CBQPCCBJNMEQJMMDiCPAQiAPBsEJNg");
	var mask_2_graphics_59 = new cjs.Graphics().p("A022IQLwplPCBiQPGBjJlLwQJlLwhjPEQhhPErwJlg");
	var mask_2_graphics_60 = new cjs.Graphics().p("A1v0/QLcp9PFBDQPIBDJ9LcQJ9LchEPHQhCPHrcJ9g");
	var mask_2_graphics_61 = new cjs.Graphics().p("A2nzzQLHqVPHAkQPKAkKULHQKULIglPIQgjPJrHKUg");
	var mask_2_graphics_62 = new cjs.Graphics().p("A3eylQKyqrPHAFQPLAFKrKxQKrKygGPIQgEPKqxKrg");
	var mask_2_graphics_63 = new cjs.Graphics().p("A4SxUQKbrBPHgbQPLgaLAKbQLBKcAZPIQAcPJqbLBg");
	var mask_2_graphics_64 = new cjs.Graphics().p("A5GwBQKErWPGg6QPKg5LVKEQLWKEA5PHQA6PIqELWg");
	var mask_2_graphics_65 = new cjs.Graphics().p("A53urQJsrrPFhYQPGhZLqJsQLqJtBXPFQBbPGptLqg");
	var mask_2_graphics_66 = new cjs.Graphics().p("A6ntTQJUr+PBh4QPDh4L+JUQL9JVB3PBQB5PDpUL9g");
	var mask_2_graphics_67 = new cjs.Graphics().p("A7Vr5QI7sRO9iWQO+iXMRI7QMRI8CVO9QCYO+o7MQg");
	var mask_2_graphics_68 = new cjs.Graphics().p("A8BqdQIisiO3i1QO5i2MjIiQMiIhC1O4QC2O5ohMjg");
	var mask_2_graphics_69 = new cjs.Graphics().p("A8ro+QIIs0OxjUQOyjUM0IIQM0IHDTOyQDVOyoHM0g");
	var mask_2_graphics_70 = new cjs.Graphics().p("A9TneQHttEOqjyQOrjzNFHtQNEHtDxOrQD0OrntNEg");
	var mask_2_graphics_71 = new cjs.Graphics().p("A95l7QHStUOikQQOjkRNUHSQNTHSEQOiQEROjnSNTg");
	var mask_2_graphics_72 = new cjs.Graphics().p("A+ckXQG2tiOYkuQOakvNjG2QNiG2EtOZQEwOam3Nig");
	var mask_2_graphics_73 = new cjs.Graphics().p("A+9ixQGatwOOlMQOQlMNwGaQNvGaFLOPQFNOPmaNwg");
	var mask_2_graphics_74 = new cjs.Graphics().p("A/chKQF9t9ODloQOFlqN9F+QN8F9FoOFQFqODl9N9g");
	var mask_2_graphics_75 = new cjs.Graphics().p("A/5AdQFhuHN3mFQN4mHOJFhQOIFhGFN4QGHN3lhOJg");
	var mask_2_graphics_76 = new cjs.Graphics().p("EggTACIQFDuTNqmiQNsmjOTFEQOUFDGhNsQGjNqlDOTg");
	var mask_2_graphics_77 = new cjs.Graphics().p("EggrADzQEmudNcm9QNem/OdEmQOdElG9NeQHANckmOeg");
	var mask_2_graphics_78 = new cjs.Graphics().p("EghBAFfQEIulNOnZQNQnbOlEIQOmEIHZNPQHbNNkIOmg");
	var mask_2_graphics_79 = new cjs.Graphics().p("EghUAHNQDquuM+n0QNAn2OtDqQOvDqHzM/QH2M+jpOug");
	var mask_2_graphics_80 = new cjs.Graphics().p("EghkAI7QDLu1MtoOQMwoQO0DLQO2DLIOMvQIQMtjLO1g");
	var mask_2_graphics_81 = new cjs.Graphics().p("EghzAKqQCtu7McooQMeoqO7CsQO7CtIoMdQIrMcitO7g");
	var mask_2_graphics_82 = new cjs.Graphics().p("Egh+AMZQCNu/MKpCQMMpEPACOQPACOJCMLQJEMJiOPBg");
	var mask_2_graphics_83 = new cjs.Graphics().p("EgiIAOKQBvvEL3pbQL5pcPDBvQPFBuJaL5QJdL2hvPFg");
	var mask_2_graphics_84 = new cjs.Graphics().p("EgiPAP6QBQvILjpxQLlp1PHBQQPHBPJzLlQJ1LihQPIg");
	var mask_2_graphics_85 = new cjs.Graphics().p("EgiUARrQAxvKLOqJQLRqMPJAwQPKAxKKLQQKMLOgxPKg");
	var mask_2_graphics_86 = new cjs.Graphics().p("EgiWATcQARvLK5qgQK7qjPKARQPLASKhK7QKjK4gRPLg");
	var mask_2_graphics_87 = new cjs.Graphics().p("A4BlWQKlq5PKgOQPLgOK3KlQK5KiAPPLMhJOABEQgOvLKjq2g");
	var mask_2_graphics_88 = new cjs.Graphics().p("A40lFQKPrOPJguQPKgtLNKOQLOKMAtPKMhJJADbQgtvKKMrMg");
	var mask_2_graphics_89 = new cjs.Graphics().p("A5jkyQJ3rjPIhNQPHhMLhJ3QLkJ0BMPIMhJAAFyQhMvJJ1rgg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_2_graphics_9,x:249.1,y:248.1}).wait(1).to({graphics:mask_2_graphics_10,x:249.1,y:248.1}).wait(1).to({graphics:mask_2_graphics_11,x:249.1,y:248.1}).wait(1).to({graphics:mask_2_graphics_12,x:249.1,y:248.1}).wait(1).to({graphics:mask_2_graphics_13,x:249.1,y:248.1}).wait(1).to({graphics:mask_2_graphics_14,x:249.1,y:248.1}).wait(1).to({graphics:mask_2_graphics_15,x:249.1,y:248}).wait(1).to({graphics:mask_2_graphics_16,x:249.1,y:248}).wait(1).to({graphics:mask_2_graphics_17,x:249.1,y:248}).wait(1).to({graphics:mask_2_graphics_18,x:249,y:248}).wait(1).to({graphics:mask_2_graphics_19,x:249,y:248}).wait(1).to({graphics:mask_2_graphics_20,x:249,y:247.9}).wait(1).to({graphics:mask_2_graphics_21,x:248.9,y:247.9}).wait(1).to({graphics:mask_2_graphics_22,x:248.9,y:247.9}).wait(1).to({graphics:mask_2_graphics_23,x:248.9,y:247.9}).wait(1).to({graphics:mask_2_graphics_24,x:248.9,y:247.8}).wait(1).to({graphics:mask_2_graphics_25,x:248.8,y:247.8}).wait(1).to({graphics:mask_2_graphics_26,x:248.8,y:247.8}).wait(1).to({graphics:mask_2_graphics_27,x:248.8,y:247.7}).wait(1).to({graphics:mask_2_graphics_28,x:248.7,y:247.7}).wait(1).to({graphics:mask_2_graphics_29,x:248.7,y:247.7}).wait(1).to({graphics:mask_2_graphics_30,x:248.7,y:247.7}).wait(1).to({graphics:mask_2_graphics_31,x:248.7,y:247.7}).wait(1).to({graphics:mask_2_graphics_32,x:248.7,y:247.7}).wait(1).to({graphics:mask_2_graphics_33,x:248.7,y:247.6}).wait(1).to({graphics:mask_2_graphics_34,x:248.7,y:247.6}).wait(1).to({graphics:mask_2_graphics_35,x:248.7,y:247.5}).wait(1).to({graphics:mask_2_graphics_36,x:248.7,y:247.4}).wait(1).to({graphics:mask_2_graphics_37,x:248.7,y:247.2}).wait(1).to({graphics:mask_2_graphics_38,x:248.7,y:247}).wait(1).to({graphics:mask_2_graphics_39,x:248.7,y:246.8}).wait(1).to({graphics:mask_2_graphics_40,x:248.7,y:246.5}).wait(1).to({graphics:mask_2_graphics_41,x:248.8,y:246.2}).wait(1).to({graphics:mask_2_graphics_42,x:248.8,y:245.8}).wait(1).to({graphics:mask_2_graphics_43,x:248.8,y:245.4}).wait(1).to({graphics:mask_2_graphics_44,x:248.8,y:244.9}).wait(1).to({graphics:mask_2_graphics_45,x:248.8,y:244.4}).wait(1).to({graphics:mask_2_graphics_46,x:248.9,y:243.5}).wait(1).to({graphics:mask_2_graphics_47,x:248.9,y:242.5}).wait(1).to({graphics:mask_2_graphics_48,x:248.9,y:241.3}).wait(1).to({graphics:mask_2_graphics_49,x:249,y:240}).wait(1).to({graphics:mask_2_graphics_50,x:249,y:238.6}).wait(1).to({graphics:mask_2_graphics_51,x:249,y:237.1}).wait(1).to({graphics:mask_2_graphics_52,x:249,y:235.5}).wait(1).to({graphics:mask_2_graphics_53,x:248.9,y:233.8}).wait(1).to({graphics:mask_2_graphics_54,x:248.9,y:232}).wait(1).to({graphics:mask_2_graphics_55,x:248.9,y:230.1}).wait(1).to({graphics:mask_2_graphics_56,x:248.8,y:228}).wait(1).to({graphics:mask_2_graphics_57,x:248.8,y:225.9}).wait(1).to({graphics:mask_2_graphics_58,x:248.7,y:223.7}).wait(1).to({graphics:mask_2_graphics_59,x:248.7,y:221.3}).wait(1).to({graphics:mask_2_graphics_60,x:248.6,y:218.9}).wait(1).to({graphics:mask_2_graphics_61,x:248.6,y:216.4}).wait(1).to({graphics:mask_2_graphics_62,x:248.6,y:213.8}).wait(1).to({graphics:mask_2_graphics_63,x:248.6,y:211.1}).wait(1).to({graphics:mask_2_graphics_64,x:248.6,y:208.3}).wait(1).to({graphics:mask_2_graphics_65,x:248.7,y:205.5}).wait(1).to({graphics:mask_2_graphics_66,x:248.7,y:202.5}).wait(1).to({graphics:mask_2_graphics_67,x:248.8,y:199.5}).wait(1).to({graphics:mask_2_graphics_68,x:248.8,y:196.5}).wait(1).to({graphics:mask_2_graphics_69,x:248.9,y:193.3}).wait(1).to({graphics:mask_2_graphics_70,x:248.9,y:190.1}).wait(1).to({graphics:mask_2_graphics_71,x:249,y:186.8}).wait(1).to({graphics:mask_2_graphics_72,x:249,y:183.5}).wait(1).to({graphics:mask_2_graphics_73,x:249,y:180.1}).wait(1).to({graphics:mask_2_graphics_74,x:249.1,y:176.7}).wait(1).to({graphics:mask_2_graphics_75,x:249.1,y:173.2}).wait(1).to({graphics:mask_2_graphics_76,x:249.1,y:169.6}).wait(1).to({graphics:mask_2_graphics_77,x:249,y:166.1}).wait(1).to({graphics:mask_2_graphics_78,x:249,y:162.4}).wait(1).to({graphics:mask_2_graphics_79,x:249,y:158.8}).wait(1).to({graphics:mask_2_graphics_80,x:249,y:155.1}).wait(1).to({graphics:mask_2_graphics_81,x:248.9,y:151.4}).wait(1).to({graphics:mask_2_graphics_82,x:248.9,y:147.7}).wait(1).to({graphics:mask_2_graphics_83,x:248.8,y:144}).wait(1).to({graphics:mask_2_graphics_84,x:248.8,y:140.2}).wait(1).to({graphics:mask_2_graphics_85,x:248.8,y:136.5}).wait(1).to({graphics:mask_2_graphics_86,x:248.8,y:132.7}).wait(1).to({graphics:mask_2_graphics_87,x:248.8,y:132.3}).wait(1).to({graphics:mask_2_graphics_88,x:248.6,y:136.1}).wait(1).to({graphics:mask_2_graphics_89,x:248.4,y:139.9}).wait(316));

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(20,1,1).p("AswYsQgQgYgMgXQg+h4gnlfQgoleCEnnQAYhaAehXQAkhnAshjQAPgiAQgiQAMgYANgZQAphRAvhPQAohEAthCQDCkeDyjwQBOhPBUhKQFzlFHcgK");
	this.shape_3.setTransform(240.7,260.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(20,1,1).p("AqfZ9QgDgDgEgEQgIgHgHgHQgCgBgBgCQgGgFgGgGQgvgugigrQgigrgVgpQg+h5gnlfQgoleCEnnQAYhaAehWQAkhnAshkQAPgiAQgiQAMgYANgZQAphRAvhPQAohEAthCQDCkdDyjxQBOhPBUhKQFzlFHcgK");
	this.shape_4.setTransform(240.7,268.4);

	var maskedShapeInstanceList = [this.shape_3,this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3}]},9).to({state:[{t:this.shape_4}]},13).wait(383));

	// Layer 1
	this.instance_2 = new lib._0("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(275.8,275.8);
	this.instance_2.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(405));

	// Background
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#F59E9E").ss(3,1,1).p("EAq+Aq+MhV7AAAMAAAhV7MBV7AAAg");
	this.shape_5.setTransform(275,275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F6E7E7").s().p("Egq9Aq+MAAAhV7MBV7AAAMAAABV7g");
	this.shape_6.setTransform(275,275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(405));

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