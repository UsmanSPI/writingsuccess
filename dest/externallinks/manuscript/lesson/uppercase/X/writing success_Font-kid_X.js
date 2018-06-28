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


(lib.triangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjXjAIAJAFIA0AbQAaAPAcAMQAbAMAaAFQAbAGAaAAQAcACAcgHQAZgHAagOIA1gcQAagOAYgPIjaGDg");
	this.shape.setTransform(0.4,-6.5,0.563,0.563);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.7,-17.4,24.3,21.8);


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


(lib.basex = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3yc/Qg3g0AAhIQAAg5Aqg0IUp5tIzZ4gQgogzAAg4QAAhGA1g2QA2g1BDAAQBMAAA0BDISqXmISi4DQA1hFBJAAQBGAAA0A0QA3A3AABHQgCA4gkA1IzQY8IUmZgQAoA1AAA2IgVBQQguBjhrAAQhMAAg0g/Iz54tIz9Y3Qg3BBhHAAQhGAAg0g0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-157.7,-190.7,315.6,381.5);


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


(lib.ar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-0.1,-52.1,1,1,0,0,0,0.4,-17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-0.2,y:263.5},134).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AAAArIAAhV");
	this.shape.setTransform(-0.1,-41.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AAAg1IAABr");
	this.shape_1.setTransform(-0.1,-40.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AAAhBIAACD");
	this.shape_2.setTransform(-0.1,-38.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("AAAhNIAACb");
	this.shape_3.setTransform(-0.1,-37.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("AAAhYIAACx");
	this.shape_4.setTransform(-0.1,-36.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(5,1,1).p("AAAhkIAADJ");
	this.shape_5.setTransform(-0.1,-35.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(5,1,1).p("AAAhwIAADh");
	this.shape_6.setTransform(-0.1,-34.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(5,1,1).p("AAAh7IAAD3");
	this.shape_7.setTransform(-0.1,-33.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(5,1,1).p("AAAiHIAAEP");
	this.shape_8.setTransform(-0.1,-31.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(5,1,1).p("AAAiSIAAEl");
	this.shape_9.setTransform(-0.1,-30.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(5,1,1).p("AAAieIAAE9");
	this.shape_10.setTransform(-0.1,-29.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5,1,1).p("AAAiqIAAFU");
	this.shape_11.setTransform(-0.1,-28.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(5,1,1).p("AAAi1IAAFr");
	this.shape_12.setTransform(-0.1,-27.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(5,1,1).p("AAAjBIAAGD");
	this.shape_13.setTransform(-0.1,-26.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(5,1,1).p("AAAjNIAAGa");
	this.shape_14.setTransform(-0.1,-24.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(5,1,1).p("AAAjYIAAGx");
	this.shape_15.setTransform(-0.1,-23.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(5,1,1).p("AAAjkIAAHJ");
	this.shape_16.setTransform(-0.1,-22.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(5,1,1).p("AAAjvIAAHf");
	this.shape_17.setTransform(-0.1,-21.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(5,1,1).p("AAAj7IAAH3");
	this.shape_18.setTransform(-0.1,-20.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(5,1,1).p("AAAkHIAAIP");
	this.shape_19.setTransform(-0.1,-19.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(5,1,1).p("AAAkSIAAIl");
	this.shape_20.setTransform(-0.1,-18);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(5,1,1).p("AAAkeIAAI9");
	this.shape_21.setTransform(-0.1,-16.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(5,1,1).p("AAAkqIAAJV");
	this.shape_22.setTransform(-0.1,-15.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(5,1,1).p("AAAk1IAAJr");
	this.shape_23.setTransform(-0.1,-14.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(5,1,1).p("AAAlBIAAKD");
	this.shape_24.setTransform(-0.1,-13.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(5,1,1).p("AAAlMIAAKZ");
	this.shape_25.setTransform(-0.1,-12.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(5,1,1).p("AAAlYIAAKx");
	this.shape_26.setTransform(-0.1,-11);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(5,1,1).p("AAAlkIAALJ");
	this.shape_27.setTransform(-0.1,-9.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(5,1,1).p("AAAlvIAALf");
	this.shape_28.setTransform(-0.1,-8.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(5,1,1).p("AAAl7IAAL3");
	this.shape_29.setTransform(-0.1,-7.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(5,1,1).p("AAAmGIAAMN");
	this.shape_30.setTransform(-0.1,-6.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(5,1,1).p("AAAmSIAAMl");
	this.shape_31.setTransform(-0.1,-5.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(5,1,1).p("AAAmeIAAM9");
	this.shape_32.setTransform(-0.1,-4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(5,1,1).p("AAAmpIAANT");
	this.shape_33.setTransform(-0.1,-2.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(5,1,1).p("AAAm1IAANr");
	this.shape_34.setTransform(-0.1,-1.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(5,1,1).p("AAAnBIAAOD");
	this.shape_35.setTransform(-0.1,-0.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(5,1,1).p("AAAnMIAAOZ");
	this.shape_36.setTransform(-0.1,0.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(5,1,1).p("AAAnYIAAOx");
	this.shape_37.setTransform(-0.1,1.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(5,1,1).p("AAAnjIAAPH");
	this.shape_38.setTransform(-0.1,2.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(5,1,1).p("AAAnvIAAPf");
	this.shape_39.setTransform(-0.1,4.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(5,1,1).p("AAAn7IAAP3");
	this.shape_40.setTransform(-0.1,5.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(5,1,1).p("AAAoGIAAQN");
	this.shape_41.setTransform(-0.1,6.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(5,1,1).p("AAAoSIAAQl");
	this.shape_42.setTransform(-0.1,7.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(5,1,1).p("AAAoeIAAQ9");
	this.shape_43.setTransform(-0.1,8.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(5,1,1).p("AAAopIAART");
	this.shape_44.setTransform(-0.1,9.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(5,1,1).p("AAAo1IAARr");
	this.shape_45.setTransform(-0.1,11.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(5,1,1).p("AAApAIAASB");
	this.shape_46.setTransform(-0.1,12.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(5,1,1).p("AAApMIAASZ");
	this.shape_47.setTransform(-0.1,13.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(5,1,1).p("AAApYIAASx");
	this.shape_48.setTransform(-0.1,14.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(5,1,1).p("AAApjIAATH");
	this.shape_49.setTransform(-0.1,15.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(5,1,1).p("AAApvIAATf");
	this.shape_50.setTransform(-0.1,16.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(5,1,1).p("AAAp6IAAT1");
	this.shape_51.setTransform(-0.1,18);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(5,1,1).p("AAAqGIAAUN");
	this.shape_52.setTransform(-0.1,19.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(5,1,1).p("AAAqSIAAUl");
	this.shape_53.setTransform(-0.1,20.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(5,1,1).p("AAAqdIAAU7");
	this.shape_54.setTransform(-0.1,21.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(5,1,1).p("AAAqpIAAVT");
	this.shape_55.setTransform(-0.1,22.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(5,1,1).p("AAAq1IAAVr");
	this.shape_56.setTransform(-0.1,23.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(5,1,1).p("AAArAIAAWB");
	this.shape_57.setTransform(-0.1,25);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(5,1,1).p("AAArMIAAWZ");
	this.shape_58.setTransform(-0.1,26.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(5,1,1).p("AAArXIAAWv");
	this.shape_59.setTransform(-0.1,27.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(5,1,1).p("AAArjIAAXH");
	this.shape_60.setTransform(-0.1,28.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(5,1,1).p("AAArvIAAXf");
	this.shape_61.setTransform(-0.1,29.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(5,1,1).p("AAAr6IAAX1");
	this.shape_62.setTransform(-0.1,30.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(5,1,1).p("AAAsGIAAYN");
	this.shape_63.setTransform(-0.1,32);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(5,1,1).p("AAAsSIAAYl");
	this.shape_64.setTransform(-0.1,33.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(5,1,1).p("AAAsdIAAY7");
	this.shape_65.setTransform(-0.1,34.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(5,1,1).p("AAAspIAAZT");
	this.shape_66.setTransform(-0.1,35.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(5,1,1).p("AAAs0IAAZp");
	this.shape_67.setTransform(-0.1,36.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(5,1,1).p("AAAtAIAAaB");
	this.shape_68.setTransform(-0.1,37.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(5,1,1).p("AAAtMIAAaZ");
	this.shape_69.setTransform(-0.1,39);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(5,1,1).p("AAAtXIAAav");
	this.shape_70.setTransform(-0.1,40.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(5,1,1).p("AAAtjIAAbH");
	this.shape_71.setTransform(-0.1,41.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(5,1,1).p("AAAtuIAAbd");
	this.shape_72.setTransform(-0.1,42.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(5,1,1).p("AAAt6IAAb1");
	this.shape_73.setTransform(-0.1,43.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(5,1,1).p("AAAuGIAAcN");
	this.shape_74.setTransform(-0.1,44.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(5,1,1).p("AAAuRIAAcj");
	this.shape_75.setTransform(-0.1,45.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(5,1,1).p("AAAudIAAc7");
	this.shape_76.setTransform(-0.1,47.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(5,1,1).p("AAAupIAAdT");
	this.shape_77.setTransform(-0.1,48.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(5,1,1).p("AAAu0IAAdp");
	this.shape_78.setTransform(-0.1,49.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(5,1,1).p("AAAvAIAAeB");
	this.shape_79.setTransform(-0.1,50.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(5,1,1).p("AAAvLIAAeX");
	this.shape_80.setTransform(-0.1,51.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(5,1,1).p("AAAvXIAAev");
	this.shape_81.setTransform(-0.1,52.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(5,1,1).p("AAAvjIAAfH");
	this.shape_82.setTransform(-0.1,54.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(5,1,1).p("AAAvuIAAfd");
	this.shape_83.setTransform(-0.1,55.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(5,1,1).p("AAAv6IAAf1");
	this.shape_84.setTransform(-0.1,56.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(5,1,1).p("AAAwGMAAAAgN");
	this.shape_85.setTransform(-0.1,57.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(5,1,1).p("AAAwRMAAAAgj");
	this.shape_86.setTransform(-0.1,58.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(5,1,1).p("AAAwdMAAAAg7");
	this.shape_87.setTransform(-0.1,59.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(5,1,1).p("AAAwoMAAAAhR");
	this.shape_88.setTransform(-0.1,61);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(5,1,1).p("AAAw0MAAAAhp");
	this.shape_89.setTransform(-0.1,62.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(5,1,1).p("AAAxAMAAAAiB");
	this.shape_90.setTransform(-0.1,63.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(5,1,1).p("AAAxLMAAAAiX");
	this.shape_91.setTransform(-0.1,64.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(5,1,1).p("AAAxXMAAAAiv");
	this.shape_92.setTransform(-0.1,65.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(5,1,1).p("AAAxiMAAAAjF");
	this.shape_93.setTransform(-0.1,66.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(5,1,1).p("AAAxuMAAAAjd");
	this.shape_94.setTransform(-0.1,68);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(5,1,1).p("AAAx6MAAAAj1");
	this.shape_95.setTransform(-0.1,69.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(5,1,1).p("AAAyFMAAAAkL");
	this.shape_96.setTransform(-0.1,70.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(5,1,1).p("AAAyRMAAAAkj");
	this.shape_97.setTransform(-0.1,71.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(5,1,1).p("AAAydMAAAAk7");
	this.shape_98.setTransform(-0.1,72.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(5,1,1).p("AAAyoMAAAAlR");
	this.shape_99.setTransform(-0.1,73.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(5,1,1).p("AAAy0MAAAAlp");
	this.shape_100.setTransform(-0.1,75);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(5,1,1).p("AAAy/MAAAAl/");
	this.shape_101.setTransform(-0.1,76.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(5,1,1).p("AAAzLMAAAAmX");
	this.shape_102.setTransform(-0.1,77.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(5,1,1).p("AAAzXMAAAAmv");
	this.shape_103.setTransform(-0.1,78.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(5,1,1).p("AAAziMAAAAnF");
	this.shape_104.setTransform(-0.1,79.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(5,1,1).p("AAAzuMAAAAnd");
	this.shape_105.setTransform(-0.1,80.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(5,1,1).p("AAAz6MAAAAn1");
	this.shape_106.setTransform(-0.1,82);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(5,1,1).p("AAA0FMAAAAoL");
	this.shape_107.setTransform(-0.1,83.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(5,1,1).p("AAA0RMAAAAoj");
	this.shape_108.setTransform(-0.1,84.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(5,1,1).p("AAA0cMAAAAo5");
	this.shape_109.setTransform(-0.1,85.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(5,1,1).p("AAA0oMAAAApR");
	this.shape_110.setTransform(-0.1,86.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(5,1,1).p("AAA00MAAAApp");
	this.shape_111.setTransform(-0.1,87.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(5,1,1).p("AAA0/MAAAAp/");
	this.shape_112.setTransform(-0.1,88.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(5,1,1).p("AAA1LMAAAAqX");
	this.shape_113.setTransform(-0.1,90.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(5,1,1).p("AAA1WMAAAAqt");
	this.shape_114.setTransform(-0.1,91.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(5,1,1).p("AAA1iMAAAArF");
	this.shape_115.setTransform(-0.1,92.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(5,1,1).p("AAA1uMAAAArd");
	this.shape_116.setTransform(-0.1,93.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(5,1,1).p("AAA15MAAAArz");
	this.shape_117.setTransform(-0.1,94.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(5,1,1).p("AAA2FMAAAAsL");
	this.shape_118.setTransform(-0.1,95.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(5,1,1).p("AAA2RMAAAAsj");
	this.shape_119.setTransform(-0.1,97.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(5,1,1).p("AAA2cMAAAAs5");
	this.shape_120.setTransform(-0.1,98.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(5,1,1).p("AAA2oMAAAAtR");
	this.shape_121.setTransform(-0.1,99.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(5,1,1).p("AAA2zMAAAAtn");
	this.shape_122.setTransform(-0.1,100.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(5,1,1).p("AAA2/MAAAAt/");
	this.shape_123.setTransform(-0.1,101.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(5,1,1).p("AAA3LMAAAAuX");
	this.shape_124.setTransform(-0.1,102.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(5,1,1).p("AAA3WMAAAAut");
	this.shape_125.setTransform(-0.1,104);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(5,1,1).p("AAA3iMAAAAvF");
	this.shape_126.setTransform(-0.1,105.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(5,1,1).p("AAA3uMAAAAvd");
	this.shape_127.setTransform(-0.1,106.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(5,1,1).p("AAA35MAAAAvz");
	this.shape_128.setTransform(-0.1,107.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(5,1,1).p("AAA4FMAAAAwL");
	this.shape_129.setTransform(-0.1,108.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(5,1,1).p("AAA4QMAAAAwh");
	this.shape_130.setTransform(-0.1,109.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").ss(5,1,1).p("AAA4cMAAAAw5");
	this.shape_131.setTransform(-0.1,111);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(5,1,1).p("AAA4oMAAAAxR");
	this.shape_132.setTransform(-0.1,112.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(5,1,1).p("AAA4zMAAAAxn");
	this.shape_133.setTransform(-0.1,113.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(5,1,1).p("AAAZAMAAAgx/");
	this.shape_134.setTransform(-0.1,114.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.3,-52.1,24.3,21.9);


(lib.honeyflap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.honeybee();
	this.instance.parent = this;
	this.instance.setTransform(38.4,-170.9,0.422,0.422,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-215.3,105.5,81.8);


// stage content:
(lib.writingsuccess_Fontkid_X = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_494 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(494).call(this.frame_494).wait(1));

	// honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(145.1,113.6,0.999,0.999,-6.5,0,0,22.4,-144);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({x:413.7,y:453},210).wait(11).to({regY:-144.1,rotation:0,skewX:-3.2,skewY:176.8,x:406.4,y:110.3},0).to({x:138.8,y:451.4},180).wait(10).to({regX:22.5,regY:-143.9,skewX:10.7,skewY:190.7,x:138,y:451.5},0).to({guide:{path:[138.1,451.6,122.4,488.8,172.5,494.6,222.6,500.4,231.4,529.4,235.9,543.8,259.3,538.7,282.6,533.6,324.8,509,367,484.3,399.8,520.3,432.6,556.3,456,653]}},74).wait(1));

	// Layer 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(415.8,454.1,1.345,1.345);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},210).wait(11).to({_off:false,x:138.2,y:450.7},0).to({_off:true},180).wait(85));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0.976)").ss(30,1,1).p("AAFgHIgJAP");
	this.shape_1.setTransform(405.5,111.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(0,0,0,0.976)").ss(30,1,1).p("AgMARIAZgh");
	this.shape_2.setTransform(404.8,112.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(0,0,0,0.976)").ss(30,1,1).p("AgTAaIAngz");
	this.shape_3.setTransform(404,113.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(0,0,0,0.976)").ss(29.9,1,1).p("AgaAkIA1hH");
	this.shape_4.setTransform(403.3,114.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(0,0,0,0.976)").ss(29.9,1,1).p("AghAtIBDhZ");
	this.shape_5.setTransform(402.6,115.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(0,0,0,0.976)").ss(29.9,1,1).p("AgpA3IBTht");
	this.shape_6.setTransform(401.8,116);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(0,0,0,0.976)").ss(29.9,1,1).p("AgwBAIBhh/");
	this.shape_7.setTransform(401.1,117);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(0,0,0,0.976)").ss(29.8,1,1).p("Ag4BJIBxiS");
	this.shape_8.setTransform(400.3,117.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(0,0,0,0.976)").ss(29.8,1,1).p("AhABTICAil");
	this.shape_9.setTransform(399.6,118.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(0,0,0,0.976)").ss(29.8,1,1).p("AhHBcICPi3");
	this.shape_10.setTransform(398.9,119.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(0,0,0,0.976)").ss(29.7,1,1).p("AhOBlICdjJ");
	this.shape_11.setTransform(398.1,120.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(0,0,0,0.976)").ss(29.7,1,1).p("AhVBvICsjd");
	this.shape_12.setTransform(397.4,121.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("rgba(0,0,0,0.976)").ss(29.7,1,1).p("AhdB4IC7jv");
	this.shape_13.setTransform(396.7,122.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(0,0,0,0.976)").ss(29.7,1,1).p("AhkCCIDJkC");
	this.shape_14.setTransform(395.9,123.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("rgba(0,0,0,0.976)").ss(29.6,1,1).p("AhsCLIDZkV");
	this.shape_15.setTransform(395.2,124.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(0,0,0,0.976)").ss(29.6,1,1).p("AhzCUIDnko");
	this.shape_16.setTransform(394.4,125.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("rgba(0,0,0,0.98)").ss(29.6,1,1).p("Ah7CeID2k7");
	this.shape_17.setTransform(393.7,126.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(0,0,0,0.98)").ss(29.6,1,1).p("AiCCnIEFlN");
	this.shape_18.setTransform(393,127.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("rgba(0,0,0,0.98)").ss(29.5,1,1).p("AiJCxIETlh");
	this.shape_19.setTransform(392.2,128.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(0,0,0,0.98)").ss(29.5,1,1).p("AiRC6IEjlz");
	this.shape_20.setTransform(391.5,129.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("rgba(0,0,0,0.98)").ss(29.5,1,1).p("AiYDEIExmG");
	this.shape_21.setTransform(390.8,130.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("rgba(0,0,0,0.98)").ss(29.4,1,1).p("AigDNIFBmZ");
	this.shape_22.setTransform(390,131.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("rgba(0,0,0,0.98)").ss(29.4,1,1).p("AinDWIFPmr");
	this.shape_23.setTransform(389.3,132);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("rgba(0,0,0,0.98)").ss(29.4,1,1).p("AivDgIFfm/");
	this.shape_24.setTransform(388.6,133);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("rgba(0,0,0,0.98)").ss(29.4,1,1).p("Ai2DpIFtnR");
	this.shape_25.setTransform(387.8,133.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(0,0,0,0.98)").ss(29.3,1,1).p("Ai9DzIF7nl");
	this.shape_26.setTransform(387.1,134.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("rgba(0,0,0,0.98)").ss(29.3,1,1).p("AjFD8IGLn3");
	this.shape_27.setTransform(386.3,135.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(0,0,0,0.98)").ss(29.3,1,1).p("AjMEFIGZoJ");
	this.shape_28.setTransform(385.6,136.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("rgba(0,0,0,0.98)").ss(29.2,1,1).p("AjUEPIGpoc");
	this.shape_29.setTransform(384.9,137.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("rgba(0,0,0,0.98)").ss(29.2,1,1).p("AjbEYIG3ov");
	this.shape_30.setTransform(384.1,138.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("rgba(0,0,0,0.98)").ss(29.2,1,1).p("AjiEhIHFpB");
	this.shape_31.setTransform(383.4,139.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("rgba(0,0,0,0.98)").ss(29.2,1,1).p("AjqErIHVpV");
	this.shape_32.setTransform(382.6,140.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("rgba(0,0,0,0.98)").ss(29.1,1,1).p("AjxE0IHjpn");
	this.shape_33.setTransform(381.9,141.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("rgba(0,0,0,0.98)").ss(29.1,1,1).p("Aj4E+IHyp7");
	this.shape_34.setTransform(381.2,142.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("rgba(0,0,0,0.98)").ss(29.1,1,1).p("AkAFHIIBqN");
	this.shape_35.setTransform(380.4,143.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("rgba(0,0,0,0.98)").ss(29.1,1,1).p("AkHFQIIPqg");
	this.shape_36.setTransform(379.7,144.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("rgba(0,0,0,0.98)").ss(29,1,1).p("AkPFaIIfqz");
	this.shape_37.setTransform(378.9,145.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("rgba(0,0,0,0.98)").ss(29,1,1).p("AkWFjIItrF");
	this.shape_38.setTransform(378.2,146.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("rgba(0,0,0,0.98)").ss(29,1,1).p("AkeFsII9rY");
	this.shape_39.setTransform(377.5,147.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("rgba(0,0,0,0.98)").ss(28.9,1,1).p("AklF2IJLrr");
	this.shape_40.setTransform(376.8,148.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("rgba(0,0,0,0.98)").ss(28.9,1,1).p("AksF/IJZr9");
	this.shape_41.setTransform(376,149);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("rgba(0,0,0,0.98)").ss(28.9,1,1).p("Ak0GJIJpsR");
	this.shape_42.setTransform(375.3,149.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("rgba(0,0,0,0.98)").ss(28.9,1,1).p("Ak7GSIJ3sj");
	this.shape_43.setTransform(374.5,150.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("rgba(0,0,0,0.98)").ss(28.8,1,1).p("AlDGcIKHs3");
	this.shape_44.setTransform(373.8,151.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("rgba(0,0,0,0.98)").ss(28.8,1,1).p("AlKGlIKVtJ");
	this.shape_45.setTransform(373.1,152.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("rgba(0,0,0,0.984)").ss(28.8,1,1).p("AlRGuIKktb");
	this.shape_46.setTransform(372.3,153.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("rgba(0,0,0,0.984)").ss(28.7,1,1).p("AlZG4IKztv");
	this.shape_47.setTransform(371.6,154.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("rgba(0,0,0,0.984)").ss(28.7,1,1).p("AlgHBILBuB");
	this.shape_48.setTransform(370.8,155.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("rgba(0,0,0,0.984)").ss(28.7,1,1).p("AloHKILQuU");
	this.shape_49.setTransform(370.1,156.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("rgba(0,0,0,0.984)").ss(28.7,1,1).p("AlvHUILfun");
	this.shape_50.setTransform(369.4,157.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("rgba(0,0,0,0.984)").ss(28.6,1,1).p("Al3HdILuu5");
	this.shape_51.setTransform(368.6,158.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("rgba(0,0,0,0.984)").ss(28.6,1,1).p("Al+HnIL9vN");
	this.shape_52.setTransform(367.9,159.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("rgba(0,0,0,0.984)").ss(28.6,1,1).p("AmFHwIMLvf");
	this.shape_53.setTransform(367.1,160.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("rgba(0,0,0,0.984)").ss(28.6,1,1).p("AmNH6IMbvz");
	this.shape_54.setTransform(366.4,161.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("rgba(0,0,0,0.984)").ss(28.5,1,1).p("AmUIDIMpwF");
	this.shape_55.setTransform(365.7,162.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("rgba(0,0,0,0.984)").ss(28.5,1,1).p("AmcIMIM5wX");
	this.shape_56.setTransform(365,163.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("rgba(0,0,0,0.984)").ss(28.5,1,1).p("AmjIWINHwr");
	this.shape_57.setTransform(364.2,164.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("rgba(0,0,0,0.984)").ss(28.4,1,1).p("AmrIfINXw9");
	this.shape_58.setTransform(363.5,165);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("rgba(0,0,0,0.984)").ss(28.4,1,1).p("AmyIpINlxQ");
	this.shape_59.setTransform(362.7,166);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("rgba(0,0,0,0.984)").ss(28.4,1,1).p("Am5IyINzxj");
	this.shape_60.setTransform(362,166.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("rgba(0,0,0,0.984)").ss(28.4,1,1).p("AnAI7IOBx2");
	this.shape_61.setTransform(361.3,167.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("rgba(0,0,0,0.984)").ss(28.3,1,1).p("AnIJFIORyJ");
	this.shape_62.setTransform(360.5,168.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("rgba(0,0,0,0.984)").ss(28.3,1,1).p("AnPJOIOfyb");
	this.shape_63.setTransform(359.8,169.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("rgba(0,0,0,0.984)").ss(28.3,1,1).p("AnXJYIOvyu");
	this.shape_64.setTransform(359,170.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("rgba(0,0,0,0.984)").ss(28.2,1,1).p("AneJhIO9zB");
	this.shape_65.setTransform(358.3,171.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("rgba(0,0,0,0.984)").ss(28.2,1,1).p("AnlJqIPMzT");
	this.shape_66.setTransform(357.6,172.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("rgba(0,0,0,0.984)").ss(28.2,1,1).p("AntJ0IPbzn");
	this.shape_67.setTransform(356.8,173.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("rgba(0,0,0,0.984)").ss(28.2,1,1).p("An0J9IPpz5");
	this.shape_68.setTransform(356.1,174.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("rgba(0,0,0,0.984)").ss(28.1,1,1).p("An8KHIP50N");
	this.shape_69.setTransform(355.4,175.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("rgba(0,0,0,0.984)").ss(28.1,1,1).p("AoDKQIQH0f");
	this.shape_70.setTransform(354.6,176.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("rgba(0,0,0,0.984)").ss(28.1,1,1).p("AoLKZIQX0x");
	this.shape_71.setTransform(353.9,177.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("rgba(0,0,0,0.984)").ss(28.1,1,1).p("AoSKjIQl1F");
	this.shape_72.setTransform(353.1,178.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("rgba(0,0,0,0.984)").ss(28,1,1).p("AoZKsIQ01X");
	this.shape_73.setTransform(352.4,179.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("rgba(0,0,0,0.984)").ss(28,1,1).p("AohK1IRD1q");
	this.shape_74.setTransform(351.7,180.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("rgba(0,0,0,0.984)").ss(28,1,1).p("AooK/IRR19");
	this.shape_75.setTransform(350.9,181.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("rgba(0,0,0,0.988)").ss(27.9,1,1).p("AowLIIRh2P");
	this.shape_76.setTransform(350.2,182);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("rgba(0,0,0,0.988)").ss(27.9,1,1).p("Ao3LSIRv2j");
	this.shape_77.setTransform(349.4,182.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("rgba(0,0,0,0.988)").ss(27.9,1,1).p("Ao/LbIR/21");
	this.shape_78.setTransform(348.7,183.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("rgba(0,0,0,0.988)").ss(27.9,1,1).p("ApGLlISN3J");
	this.shape_79.setTransform(348,184.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("rgba(0,0,0,0.988)").ss(27.8,1,1).p("ApNLuISb3b");
	this.shape_80.setTransform(347.2,185.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("rgba(0,0,0,0.988)").ss(27.8,1,1).p("ApVL3ISr3t");
	this.shape_81.setTransform(346.5,186.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("rgba(0,0,0,0.988)").ss(27.8,1,1).p("ApcMBIS54B");
	this.shape_82.setTransform(345.8,187.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("rgba(0,0,0,0.988)").ss(27.7,1,1).p("ApkMKITJ4T");
	this.shape_83.setTransform(345,188.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("rgba(0,0,0,0.988)").ss(27.7,1,1).p("AprMTITX4l");
	this.shape_84.setTransform(344.3,189.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("rgba(0,0,0,0.988)").ss(27.7,1,1).p("ApzMdITn45");
	this.shape_85.setTransform(343.6,190.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("rgba(0,0,0,0.988)").ss(27.7,1,1).p("Ap6MmIT15L");
	this.shape_86.setTransform(342.8,191.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("rgba(0,0,0,0.988)").ss(27.6,1,1).p("AqBMvIUD5e");
	this.shape_87.setTransform(342.1,192.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("rgba(0,0,0,0.988)").ss(27.6,1,1).p("AqJM5IUT5x");
	this.shape_88.setTransform(341.3,193.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("rgba(0,0,0,0.988)").ss(27.6,1,1).p("AqQNDIUh6E");
	this.shape_89.setTransform(340.6,194.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("rgba(0,0,0,0.988)").ss(27.6,1,1).p("AqYNMIUw6X");
	this.shape_90.setTransform(339.9,195.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("rgba(0,0,0,0.988)").ss(27.5,1,1).p("AqfNVIU/6p");
	this.shape_91.setTransform(339.1,196.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("rgba(0,0,0,0.988)").ss(27.5,1,1).p("AqmNfIVN69");
	this.shape_92.setTransform(338.4,197.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("rgba(0,0,0,0.988)").ss(27.5,1,1).p("AquNoIVd7P");
	this.shape_93.setTransform(337.6,198);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("rgba(0,0,0,0.988)").ss(27.4,1,1).p("Aq1NyIVr7i");
	this.shape_94.setTransform(336.9,199);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("rgba(0,0,0,0.988)").ss(27.4,1,1).p("Aq8N7IV671");
	this.shape_95.setTransform(336.2,199.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("rgba(0,0,0,0.988)").ss(27.4,1,1).p("ArEOEIWJ8H");
	this.shape_96.setTransform(335.4,200.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("rgba(0,0,0,0.988)").ss(27.4,1,1).p("ArLOOIWX8b");
	this.shape_97.setTransform(334.7,201.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("rgba(0,0,0,0.988)").ss(27.3,1,1).p("ArTOXIWn8t");
	this.shape_98.setTransform(333.9,202.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("rgba(0,0,0,0.988)").ss(27.3,1,1).p("AraOhIW19A");
	this.shape_99.setTransform(333.2,203.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("rgba(0,0,0,0.988)").ss(27.3,1,1).p("AriOqIXF9T");
	this.shape_100.setTransform(332.5,204.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("rgba(0,0,0,0.988)").ss(27.2,1,1).p("ArpOzIXT9l");
	this.shape_101.setTransform(331.8,205.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("rgba(0,0,0,0.988)").ss(27.2,1,1).p("ArxO8IXj94");
	this.shape_102.setTransform(331,206.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("rgba(0,0,0,0.988)").ss(27.2,1,1).p("Ar4PGIXx+L");
	this.shape_103.setTransform(330.3,207.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("rgba(0,0,0,0.988)").ss(27.2,1,1).p("Ar/PPIX/+d");
	this.shape_104.setTransform(329.5,208.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("rgba(0,0,0,0.988)").ss(27.1,1,1).p("AsHPZIYP+x");
	this.shape_105.setTransform(328.8,209.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("rgba(0,0,0,0.988)").ss(27.1,1,1).p("AsOPiIYd/D");
	this.shape_106.setTransform(328.1,210.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("rgba(0,0,0,0.992)").ss(27.1,1,1).p("AsWPsIYt/X");
	this.shape_107.setTransform(327.3,211.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("rgba(0,0,0,0.992)").ss(27.1,1,1).p("AsdP1IY7/p");
	this.shape_108.setTransform(326.6,212.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("rgba(0,0,0,0.992)").ss(27,1,1).p("AskP/IZJ/9");
	this.shape_109.setTransform(325.8,213.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("rgba(0,0,0,0.992)").ss(27,1,1).p("AssQIMAZZggP");
	this.shape_110.setTransform(325.1,214);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("rgba(0,0,0,0.992)").ss(27,1,1).p("AszQRMAZnggh");
	this.shape_111.setTransform(324.4,215);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("rgba(0,0,0,0.992)").ss(26.9,1,1).p("As7QbMAZ3gg1");
	this.shape_112.setTransform(323.6,215.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("rgba(0,0,0,0.992)").ss(26.9,1,1).p("AtCQkMAaFghH");
	this.shape_113.setTransform(322.9,216.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("rgba(0,0,0,0.992)").ss(26.9,1,1).p("AtJQuMAaUghb");
	this.shape_114.setTransform(322.2,217.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("rgba(0,0,0,0.992)").ss(26.9,1,1).p("AtRQ3MAajght");
	this.shape_115.setTransform(321.4,218.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("rgba(0,0,0,0.992)").ss(26.8,1,1).p("AtYRAMAaxgh/");
	this.shape_116.setTransform(320.7,219.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("rgba(0,0,0,0.992)").ss(26.8,1,1).p("AtfRKMAa/giT");
	this.shape_117.setTransform(320,220.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("rgba(0,0,0,0.992)").ss(26.8,1,1).p("AtnRTMAbPgil");
	this.shape_118.setTransform(319.2,221.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("rgba(0,0,0,0.992)").ss(26.7,1,1).p("AtuRcMAbdgi3");
	this.shape_119.setTransform(318.5,222.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("rgba(0,0,0,0.992)").ss(26.7,1,1).p("At2RmMAbtgjL");
	this.shape_120.setTransform(317.7,223.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("rgba(0,0,0,0.992)").ss(26.7,1,1).p("At9RvMAb7gjd");
	this.shape_121.setTransform(317,224.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("rgba(0,0,0,0.992)").ss(26.7,1,1).p("AuFR5MAcKgjx");
	this.shape_122.setTransform(316.3,225.4);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("rgba(0,0,0,0.992)").ss(26.6,1,1).p("AuMSCMAcZgkD");
	this.shape_123.setTransform(315.5,226.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("rgba(0,0,0,0.992)").ss(26.6,1,1).p("AuTSLMAcngkV");
	this.shape_124.setTransform(314.8,227.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("rgba(0,0,0,0.992)").ss(26.6,1,1).p("AubSVMAc3gkp");
	this.shape_125.setTransform(314,228.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("rgba(0,0,0,0.992)").ss(26.6,1,1).p("AuiSeMAdFgk7");
	this.shape_126.setTransform(313.3,229.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("rgba(0,0,0,0.992)").ss(26.5,1,1).p("AupSnMAdUglO");
	this.shape_127.setTransform(312.6,230.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("rgba(0,0,0,0.992)").ss(26.5,1,1).p("AuxSxMAdjglh");
	this.shape_128.setTransform(311.8,231);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("rgba(0,0,0,0.992)").ss(26.5,1,1).p("Au5S6MAdyglz");
	this.shape_129.setTransform(311.1,231.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("rgba(0,0,0,0.992)").ss(26.4,1,1).p("AvATEMAeBgmH");
	this.shape_130.setTransform(310.4,232.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("rgba(0,0,0,0.992)").ss(26.4,1,1).p("AvHTNMAePgmZ");
	this.shape_131.setTransform(309.6,233.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("rgba(0,0,0,0.992)").ss(26.4,1,1).p("AvPTXMAefgmt");
	this.shape_132.setTransform(308.9,234.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("rgba(0,0,0,0.992)").ss(26.4,1,1).p("AvWTgMAetgm/");
	this.shape_133.setTransform(308.1,235.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("rgba(0,0,0,0.992)").ss(26.3,1,1).p("AvdTqMAe8gnS");
	this.shape_134.setTransform(307.4,236.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("rgba(0,0,0,0.992)").ss(26.3,1,1).p("AvlTzMAfLgnl");
	this.shape_135.setTransform(306.7,237.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("rgba(0,0,0,0.996)").ss(26.3,1,1).p("AvsT8MAfZgn3");
	this.shape_136.setTransform(305.9,238.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("rgba(0,0,0,0.996)").ss(26.2,1,1).p("Av0UGMAfpgoL");
	this.shape_137.setTransform(305.2,239.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("rgba(0,0,0,0.996)").ss(26.2,1,1).p("Av7UPMAf3god");
	this.shape_138.setTransform(304.5,240.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("rgba(0,0,0,0.996)").ss(26.2,1,1).p("AwDUYMAgHgov");
	this.shape_139.setTransform(303.7,241.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("rgba(0,0,0,0.996)").ss(26.2,1,1).p("AwKUiMAgVgpD");
	this.shape_140.setTransform(303,242.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("rgba(0,0,0,0.996)").ss(26.1,1,1).p("AwRUrMAgjgpV");
	this.shape_141.setTransform(302.2,243.3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("rgba(0,0,0,0.996)").ss(26.1,1,1).p("AwZU1MAgzgpp");
	this.shape_142.setTransform(301.5,244.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("rgba(0,0,0,0.996)").ss(26.1,1,1).p("AwgU+MAhBgp7");
	this.shape_143.setTransform(300.8,245.2);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("rgba(0,0,0,0.996)").ss(26.1,1,1).p("AwoVHMAhRgqN");
	this.shape_144.setTransform(300,246.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("rgba(0,0,0,0.996)").ss(26,1,1).p("AwvVRMAhfgqh");
	this.shape_145.setTransform(299.3,247);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("rgba(0,0,0,0.996)").ss(26,1,1).p("Aw3VaMAhvgqz");
	this.shape_146.setTransform(298.6,248);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("rgba(0,0,0,0.996)").ss(26,1,1).p("Aw+VkMAh9grH");
	this.shape_147.setTransform(297.8,248.9);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("rgba(0,0,0,0.996)").ss(25.9,1,1).p("AxFVtMAiLgrZ");
	this.shape_148.setTransform(297.1,249.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("rgba(0,0,0,0.996)").ss(25.9,1,1).p("AxNV2MAibgrr");
	this.shape_149.setTransform(296.3,250.8);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("rgba(0,0,0,0.996)").ss(25.9,1,1).p("AxUWAMAipgr/");
	this.shape_150.setTransform(295.6,251.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("rgba(0,0,0,0.996)").ss(25.9,1,1).p("AxcWJMAi4gsR");
	this.shape_151.setTransform(294.9,252.7);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("rgba(0,0,0,0.996)").ss(25.8,1,1).p("AxjWTMAjHgsk");
	this.shape_152.setTransform(294.1,253.6);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("rgba(0,0,0,0.996)").ss(25.8,1,1).p("AxqWcMAjVgs3");
	this.shape_153.setTransform(293.4,254.6);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("rgba(0,0,0,0.996)").ss(25.8,1,1).p("AxyWlMAjlgtJ");
	this.shape_154.setTransform(292.6,255.5);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("rgba(0,0,0,0.996)").ss(25.7,1,1).p("Ax5WvMAjzgtd");
	this.shape_155.setTransform(291.9,256.5);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("rgba(0,0,0,0.996)").ss(25.7,1,1).p("AyBW4MAkCgtv");
	this.shape_156.setTransform(291.2,257.4);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("rgba(0,0,0,0.996)").ss(25.7,1,1).p("AyIXCMAkRguC");
	this.shape_157.setTransform(290.4,258.4);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("rgba(0,0,0,0.996)").ss(25.7,1,1).p("AyPXLMAkfguV");
	this.shape_158.setTransform(289.7,259.3);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("rgba(0,0,0,0.996)").ss(25.6,1,1).p("AyXXUMAkvgun");
	this.shape_159.setTransform(289,260.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("rgba(0,0,0,0.996)").ss(25.6,1,1).p("AyeXdMAk9gu6");
	this.shape_160.setTransform(288.2,261.2);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("rgba(0,0,0,0.996)").ss(25.6,1,1).p("AymXnMAlNgvN");
	this.shape_161.setTransform(287.5,262.1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("rgba(0,0,0,0.996)").ss(25.6,1,1).p("AytXxMAlbgvh");
	this.shape_162.setTransform(286.8,263.1);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("rgba(0,0,0,0.996)").ss(25.5,1,1).p("Ay1X6MAlrgvz");
	this.shape_163.setTransform(286,264);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("rgba(0,0,0,0.996)").ss(25.5,1,1).p("Ay8YDMAl5gwF");
	this.shape_164.setTransform(285.3,264.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("rgba(0,0,0,0.996)").ss(25.5,1,1).p("AzDYNMAmHgwZ");
	this.shape_165.setTransform(284.5,265.9);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#000000").ss(25.4,1,1).p("AzLYWMAmXgwr");
	this.shape_166.setTransform(283.8,266.8);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#000000").ss(25.4,1,1).p("AzSYgMAmlgw/");
	this.shape_167.setTransform(283.1,267.8);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#000000").ss(25.4,1,1).p("AzaYpMAm1gxR");
	this.shape_168.setTransform(282.3,268.7);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#000000").ss(25.4,1,1).p("AzhYyMAnDgxj");
	this.shape_169.setTransform(281.6,269.6);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#000000").ss(25.3,1,1).p("AzoY8MAnRgx3");
	this.shape_170.setTransform(280.8,270.6);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#000000").ss(25.3,1,1).p("AzwZFMAnhgyJ");
	this.shape_171.setTransform(280.1,271.5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#000000").ss(25.3,1,1).p("Az3ZPMAnvgyd");
	this.shape_172.setTransform(279.4,272.5);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#000000").ss(25.2,1,1).p("Az+ZYMAn9gyv");
	this.shape_173.setTransform(278.6,273.4);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#000000").ss(25.2,1,1).p("A0GZhMAoNgzB");
	this.shape_174.setTransform(277.9,274.4);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#000000").ss(25.2,1,1).p("A0OZrMAodgzV");
	this.shape_175.setTransform(277.2,275.3);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#000000").ss(25.2,1,1).p("A0VZ0MAorgzn");
	this.shape_176.setTransform(276.4,276.3);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#000000").ss(25.1,1,1).p("A0cZ9MAo5gz5");
	this.shape_177.setTransform(275.7,277.2);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#000000").ss(25.1,1,1).p("A0kaHMApIg0N");
	this.shape_178.setTransform(275,278.1);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#000000").ss(25.1,1,1).p("A0raQMApXg0f");
	this.shape_179.setTransform(274.2,279.1);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#000000").ss(25.1,1,1).p("A0yaaMAplg0z");
	this.shape_180.setTransform(273.5,280);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#000000").ss(25,1,1).p("AU76iMgp1A1F");
	this.shape_181.setTransform(272.7,281);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},230).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).wait(85));

	// Layer 12
	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("rgba(0,0,0,0.976)").ss(25,1,1).p("AgEgHIAJAP");
	this.shape_182.setTransform(144.5,112.8);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("rgba(0,0,0,0.976)").ss(25,1,1).p("AgLgOIAXAe");
	this.shape_183.setTransform(145.2,113.6);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("rgba(0,0,0,0.976)").ss(25,1,1).p("AgRgXIAjAv");
	this.shape_184.setTransform(145.8,114.4);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("rgba(0,0,0,0.976)").ss(25,1,1).p("AgXgfIAvA/");
	this.shape_185.setTransform(146.4,115.2);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("rgba(0,0,0,0.976)").ss(25,1,1).p("AgegnIA8BP");
	this.shape_186.setTransform(147.1,116);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("rgba(0,0,0,0.976)").ss(25,1,1).p("AgkgvIBJBf");
	this.shape_187.setTransform(147.7,116.9);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("rgba(0,0,0,0.976)").ss(25,1,1).p("Agrg3IBWBv");
	this.shape_188.setTransform(148.3,117.7);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("rgba(0,0,0,0.976)").ss(25,1,1).p("Agxg/IBjB/");
	this.shape_189.setTransform(149,118.5);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("rgba(0,0,0,0.976)").ss(25,1,1).p("Ag4hHIBxCP");
	this.shape_190.setTransform(149.6,119.3);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("rgba(0,0,0,0.976)").ss(25,1,1).p("Ag+hPIB9Cf");
	this.shape_191.setTransform(150.2,120.1);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("rgba(0,0,0,0.976)").ss(25,1,1).p("AhEhXICJCv");
	this.shape_192.setTransform(150.9,120.9);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("rgba(0,0,0,0.976)").ss(25,1,1).p("AhLhfICXDA");
	this.shape_193.setTransform(151.5,121.7);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("rgba(0,0,0,0.976)").ss(25,1,1).p("AhRhoICjDQ");
	this.shape_194.setTransform(152.2,122.5);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("rgba(0,0,0,0.976)").ss(25,1,1).p("AhYhwICwDh");
	this.shape_195.setTransform(152.8,123.3);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("rgba(0,0,0,0.976)").ss(25,1,1).p("Aheh4IC9Dx");
	this.shape_196.setTransform(153.4,124.1);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("rgba(0,0,0,0.976)").ss(25,1,1).p("AhkiAIDJEB");
	this.shape_197.setTransform(154.1,124.9);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("rgba(0,0,0,0.976)").ss(25,1,1).p("AhriIIDXER");
	this.shape_198.setTransform(154.7,125.7);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("rgba(0,0,0,0.976)").ss(25,1,1).p("AhxiQIDjEh");
	this.shape_199.setTransform(155.3,126.6);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("rgba(0,0,0,0.98)").ss(25,1,1).p("Ah3iYIDwEx");
	this.shape_200.setTransform(156,127.4);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("rgba(0,0,0,0.98)").ss(25,1,1).p("Ah+igID9FB");
	this.shape_201.setTransform(156.6,128.2);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("rgba(0,0,0,0.98)").ss(25,1,1).p("AiEioIEJFR");
	this.shape_202.setTransform(157.3,129);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("rgba(0,0,0,0.98)").ss(25,1,1).p("AiLiwIEXFh");
	this.shape_203.setTransform(157.9,129.8);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("rgba(0,0,0,0.98)").ss(25,1,1).p("AiRi4IEjFx");
	this.shape_204.setTransform(158.5,130.6);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("rgba(0,0,0,0.98)").ss(25,1,1).p("AiYjBIExGC");
	this.shape_205.setTransform(159.2,131.4);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("rgba(0,0,0,0.98)").ss(25,1,1).p("AiejIIE9GS");
	this.shape_206.setTransform(159.8,132.2);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("rgba(0,0,0,0.98)").ss(25,1,1).p("AikjRIFKGi");
	this.shape_207.setTransform(160.5,133);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("rgba(0,0,0,0.98)").ss(25,1,1).p("AirjZIFXGz");
	this.shape_208.setTransform(161.1,133.8);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("rgba(0,0,0,0.98)").ss(25,1,1).p("AixjhIFkHD");
	this.shape_209.setTransform(161.7,134.6);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("rgba(0,0,0,0.98)").ss(25,1,1).p("Ai4jpIFxHT");
	this.shape_210.setTransform(162.3,135.4);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("rgba(0,0,0,0.98)").ss(25,1,1).p("Ai+jxIF9Hj");
	this.shape_211.setTransform(163,136.3);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("rgba(0,0,0,0.98)").ss(25,1,1).p("AjFj5IGLHz");
	this.shape_212.setTransform(163.6,137.1);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("rgba(0,0,0,0.98)").ss(25,1,1).p("AjLkBIGXID");
	this.shape_213.setTransform(164.3,137.9);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("rgba(0,0,0,0.98)").ss(25,1,1).p("AjRkJIGkIT");
	this.shape_214.setTransform(164.9,138.7);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("rgba(0,0,0,0.98)").ss(25,1,1).p("AjYkRIGxIj");
	this.shape_215.setTransform(165.5,139.5);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("rgba(0,0,0,0.98)").ss(25,1,1).p("AjekZIG9Iz");
	this.shape_216.setTransform(166.2,140.3);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("rgba(0,0,0,0.98)").ss(25,1,1).p("AjlkiIHKJF");
	this.shape_217.setTransform(166.8,141.1);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("rgba(0,0,0,0.98)").ss(25,1,1).p("AjrkqIHXJU");
	this.shape_218.setTransform(167.5,141.9);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("rgba(0,0,0,0.98)").ss(25,1,1).p("AjykxIHlJk");
	this.shape_219.setTransform(168.1,142.7);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("rgba(0,0,0,0.98)").ss(25,1,1).p("Aj4k6IHxJ0");
	this.shape_220.setTransform(168.7,143.5);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("rgba(0,0,0,0.98)").ss(25,1,1).p("Aj/lCIH+KF");
	this.shape_221.setTransform(169.4,144.3);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("rgba(0,0,0,0.98)").ss(25,1,1).p("AkFlKIILKV");
	this.shape_222.setTransform(170,145.1);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("rgba(0,0,0,0.98)").ss(25,1,1).p("AkLlSIIXKl");
	this.shape_223.setTransform(170.6,145.9);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("rgba(0,0,0,0.98)").ss(25,1,1).p("AkRlaIIjK1");
	this.shape_224.setTransform(171.3,146.8);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("rgba(0,0,0,0.98)").ss(25,1,1).p("AkYliIIxLF");
	this.shape_225.setTransform(171.9,147.6);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("rgba(0,0,0,0.98)").ss(25,1,1).p("AkflqII/LV");
	this.shape_226.setTransform(172.6,148.4);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("rgba(0,0,0,0.98)").ss(25,1,1).p("AkllyIJLLl");
	this.shape_227.setTransform(173.2,149.2);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("rgba(0,0,0,0.98)").ss(25,1,1).p("Akrl6IJXL1");
	this.shape_228.setTransform(173.8,150);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("rgba(0,0,0,0.98)").ss(25,1,1).p("AkxmCIJkMF");
	this.shape_229.setTransform(174.5,150.8);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("rgba(0,0,0,0.98)").ss(25,1,1).p("Ak4mLIJxMX");
	this.shape_230.setTransform(175.1,151.6);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("rgba(0,0,0,0.98)").ss(25,1,1).p("Ak+mTIJ+Mm");
	this.shape_231.setTransform(175.7,152.4);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("rgba(0,0,0,0.98)").ss(25,1,1).p("AlFmaIKLM2");
	this.shape_232.setTransform(176.4,153.2);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("rgba(0,0,0,0.98)").ss(25,1,1).p("AlMmjIKZNH");
	this.shape_233.setTransform(177,154);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("rgba(0,0,0,0.98)").ss(25,1,1).p("AlSmrIKlNX");
	this.shape_234.setTransform(177.6,154.8);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("rgba(0,0,0,0.984)").ss(25,1,1).p("AlYmzIKxNn");
	this.shape_235.setTransform(178.3,155.6);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("rgba(0,0,0,0.984)").ss(25,1,1).p("Alfm7IK/N3");
	this.shape_236.setTransform(178.9,156.5);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("rgba(0,0,0,0.984)").ss(25,1,1).p("AllnDILLOH");
	this.shape_237.setTransform(179.6,157.3);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("rgba(0,0,0,0.984)").ss(25,1,1).p("AlrnLILYOX");
	this.shape_238.setTransform(180.2,158.1);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("rgba(0,0,0,0.984)").ss(25,1,1).p("AlynTILlOn");
	this.shape_239.setTransform(180.8,158.9);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("rgba(0,0,0,0.984)").ss(25,1,1).p("Al5nbILzO3");
	this.shape_240.setTransform(181.5,159.7);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("rgba(0,0,0,0.984)").ss(25,1,1).p("Al/njIL/PH");
	this.shape_241.setTransform(182.1,160.5);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("rgba(0,0,0,0.984)").ss(25,1,1).p("AmFnsIMLPZ");
	this.shape_242.setTransform(182.7,161.3);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("rgba(0,0,0,0.984)").ss(25,1,1).p("AmMn0IMZPp");
	this.shape_243.setTransform(183.4,162.1);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("rgba(0,0,0,0.984)").ss(25,1,1).p("AmSn8IMlP4");
	this.shape_244.setTransform(184,162.9);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("rgba(0,0,0,0.984)").ss(25,1,1).p("AmYoEIMyQJ");
	this.shape_245.setTransform(184.7,163.7);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("rgba(0,0,0,0.984)").ss(25,1,1).p("AmfoMIM/QZ");
	this.shape_246.setTransform(185.3,164.5);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("rgba(0,0,0,0.984)").ss(25,1,1).p("AmloUINLQp");
	this.shape_247.setTransform(185.9,165.3);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("rgba(0,0,0,0.984)").ss(25,1,1).p("AmsocINYQ5");
	this.shape_248.setTransform(186.6,166.2);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("rgba(0,0,0,0.984)").ss(25,1,1).p("AmyokINlRJ");
	this.shape_249.setTransform(187.2,167);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("rgba(0,0,0,0.984)").ss(25,1,1).p("Am4osINxRZ");
	this.shape_250.setTransform(187.8,167.8);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("rgba(0,0,0,0.984)").ss(25,1,1).p("Am/o0IN/Rp");
	this.shape_251.setTransform(188.5,168.6);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("rgba(0,0,0,0.984)").ss(25,1,1).p("AnGo8IOMR5");
	this.shape_252.setTransform(189.1,169.4);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("rgba(0,0,0,0.984)").ss(25,1,1).p("AnMpEIOZSJ");
	this.shape_253.setTransform(189.7,170.2);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("rgba(0,0,0,0.984)").ss(25,1,1).p("AnSpNIOlSa");
	this.shape_254.setTransform(190.4,171);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("rgba(0,0,0,0.984)").ss(25,1,1).p("AnYpVIOxSr");
	this.shape_255.setTransform(191,171.8);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("rgba(0,0,0,0.984)").ss(25,1,1).p("AnfpdIO/S7");
	this.shape_256.setTransform(191.7,172.6);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("rgba(0,0,0,0.984)").ss(25,1,1).p("AnmplIPMTL");
	this.shape_257.setTransform(192.3,173.4);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("rgba(0,0,0,0.984)").ss(25,1,1).p("AnsptIPZTb");
	this.shape_258.setTransform(192.9,174.2);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("rgba(0,0,0,0.984)").ss(25,1,1).p("Anyp1IPlTr");
	this.shape_259.setTransform(193.6,175);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("rgba(0,0,0,0.984)").ss(25,1,1).p("An4p9IPyT7");
	this.shape_260.setTransform(194.2,175.9);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("rgba(0,0,0,0.984)").ss(25,1,1).p("An/qFIP/UL");
	this.shape_261.setTransform(194.8,176.7);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("rgba(0,0,0,0.984)").ss(25,1,1).p("AoGqNIQNUb");
	this.shape_262.setTransform(195.5,177.5);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("rgba(0,0,0,0.984)").ss(25,1,1).p("AoMqVIQZUr");
	this.shape_263.setTransform(196.1,178.3);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("rgba(0,0,0,0.984)").ss(25,1,1).p("AoTqdIQnU7");
	this.shape_264.setTransform(196.8,179.1);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("rgba(0,0,0,0.984)").ss(25,1,1).p("AoZqlIQzVL");
	this.shape_265.setTransform(197.4,179.9);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("rgba(0,0,0,0.984)").ss(25,1,1).p("AofquIQ/Vc");
	this.shape_266.setTransform(198,180.7);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("rgba(0,0,0,0.984)").ss(25,1,1).p("Aolq2IRMVs");
	this.shape_267.setTransform(198.7,181.5);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("rgba(0,0,0,0.984)").ss(25,1,1).p("Aosq+IRZV9");
	this.shape_268.setTransform(199.3,182.3);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("rgba(0,0,0,0.984)").ss(25,1,1).p("AozrGIRnWN");
	this.shape_269.setTransform(200,183.1);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("rgba(0,0,0,0.988)").ss(25,1,1).p("Ao5rOIRzWd");
	this.shape_270.setTransform(200.6,183.9);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("rgba(0,0,0,0.988)").ss(25,1,1).p("Ao/rWIR/Wt");
	this.shape_271.setTransform(201.2,184.7);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("rgba(0,0,0,0.988)").ss(25,1,1).p("ApGreISNW9");
	this.shape_272.setTransform(201.8,185.6);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("rgba(0,0,0,0.988)").ss(25,1,1).p("ApMrmISZXN");
	this.shape_273.setTransform(202.5,186.4);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("rgba(0,0,0,0.988)").ss(25,1,1).p("ApSruISlXd");
	this.shape_274.setTransform(203.1,187.2);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("rgba(0,0,0,0.988)").ss(25,1,1).p("ApZr2ISzXt");
	this.shape_275.setTransform(203.8,188);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("rgba(0,0,0,0.988)").ss(25,1,1).p("Apgr+ITBX9");
	this.shape_276.setTransform(204.4,188.8);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f().s("rgba(0,0,0,0.988)").ss(25,1,1).p("ApmsGITNYN");
	this.shape_277.setTransform(205,189.6);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("rgba(0,0,0,0.988)").ss(25,1,1).p("ApssPITZYf");
	this.shape_278.setTransform(205.7,190.4);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f().s("rgba(0,0,0,0.988)").ss(25,1,1).p("ApzsXITnYv");
	this.shape_279.setTransform(206.3,191.2);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("rgba(0,0,0,0.988)").ss(25,1,1).p("Ap5sfITzY+");
	this.shape_280.setTransform(207,192);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f().s("rgba(0,0,0,0.988)").ss(25,1,1).p("Ap/snIT/ZP");
	this.shape_281.setTransform(207.6,192.8);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("rgba(0,0,0,0.988)").ss(25,1,1).p("AqGsvIUNZf");
	this.shape_282.setTransform(208.2,193.6);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f().s("rgba(0,0,0,0.988)").ss(25,1,1).p("AqNs3IUbZv");
	this.shape_283.setTransform(208.9,194.4);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("rgba(0,0,0,0.988)").ss(25,1,1).p("AqTs/IUnZ/");
	this.shape_284.setTransform(209.5,195.3);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f().s("rgba(0,0,0,0.988)").ss(25,1,1).p("AqZtHIUzaP");
	this.shape_285.setTransform(210.1,196.1);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("rgba(0,0,0,0.988)").ss(25,1,1).p("AqgtPIVBaf");
	this.shape_286.setTransform(210.8,196.9);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f().s("rgba(0,0,0,0.988)").ss(25,1,1).p("AqmtXIVNav");
	this.shape_287.setTransform(211.4,197.7);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("rgba(0,0,0,0.988)").ss(25,1,1).p("AqttfIVba/");
	this.shape_288.setTransform(212.1,198.5);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f().s("rgba(0,0,0,0.988)").ss(25,1,1).p("AqztnIVnbP");
	this.shape_289.setTransform(212.7,199.3);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f().s("rgba(0,0,0,0.988)").ss(25,1,1).p("Aq5tvIVzbf");
	this.shape_290.setTransform(213.3,200.1);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f().s("rgba(0,0,0,0.988)").ss(25,1,1).p("Aq/t4IV/bx");
	this.shape_291.setTransform(214,200.9);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f().s("rgba(0,0,0,0.988)").ss(25,1,1).p("ArGuAIWNcB");
	this.shape_292.setTransform(214.6,201.7);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f().s("rgba(0,0,0,0.988)").ss(25,1,1).p("ArNuIIWbcQ");
	this.shape_293.setTransform(215.2,202.5);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("rgba(0,0,0,0.988)").ss(25,1,1).p("ArTuQIWnch");
	this.shape_294.setTransform(215.9,203.3);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f().s("rgba(0,0,0,0.988)").ss(25,1,1).p("ArauYIW1cx");
	this.shape_295.setTransform(216.5,204.1);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f().s("rgba(0,0,0,0.988)").ss(25,1,1).p("ArgugIXBdB");
	this.shape_296.setTransform(217.1,204.9);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f().s("rgba(0,0,0,0.988)").ss(25,1,1).p("ArmuoIXNdR");
	this.shape_297.setTransform(217.8,205.8);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f().s("rgba(0,0,0,0.988)").ss(25,1,1).p("ArtuwIXbdh");
	this.shape_298.setTransform(218.4,206.6);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f().s("rgba(0,0,0,0.988)").ss(25,1,1).p("Arzu4IXndx");
	this.shape_299.setTransform(219.1,207.4);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f().s("rgba(0,0,0,0.988)").ss(25,1,1).p("Ar6vAIX1eB");
	this.shape_300.setTransform(219.7,208.2);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f().s("rgba(0,0,0,0.988)").ss(25,1,1).p("AsAvIIYBeR");
	this.shape_301.setTransform(220.3,209);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f().s("rgba(0,0,0,0.988)").ss(25,1,1).p("AsGvQIYNeh");
	this.shape_302.setTransform(221,209.8);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f().s("rgba(0,0,0,0.988)").ss(25,1,1).p("AsNvZIYbey");
	this.shape_303.setTransform(221.6,210.6);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f().s("rgba(0,0,0,0.988)").ss(25,1,1).p("AsTvhIYnfD");
	this.shape_304.setTransform(222.2,211.4);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f().s("rgba(0,0,0,0.992)").ss(25,1,1).p("AsavpIY0fT");
	this.shape_305.setTransform(222.9,212.2);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f().s("rgba(0,0,0,0.992)").ss(25,1,1).p("AsgvxIZBfj");
	this.shape_306.setTransform(223.5,213);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f().s("rgba(0,0,0,0.992)").ss(25,1,1).p("Asmv5IZOfz");
	this.shape_307.setTransform(224.2,213.8);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f().s("rgba(0,0,0,0.992)").ss(25,1,1).p("AstwBMAZbAgD");
	this.shape_308.setTransform(224.8,214.6);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f().s("rgba(0,0,0,0.992)").ss(25,1,1).p("AszwJMAZnAgT");
	this.shape_309.setTransform(225.4,215.5);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f().s("rgba(0,0,0,0.992)").ss(25,1,1).p("As6wRMAZ0Agj");
	this.shape_310.setTransform(226.1,216.3);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f().s("rgba(0,0,0,0.992)").ss(25,1,1).p("AtAwZMAaBAgz");
	this.shape_311.setTransform(226.7,217.1);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f().s("rgba(0,0,0,0.992)").ss(25,1,1).p("AtHwhMAaOAhD");
	this.shape_312.setTransform(227.4,217.9);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f().s("rgba(0,0,0,0.992)").ss(25,1,1).p("AtNwpMAabAhT");
	this.shape_313.setTransform(228,218.7);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f().s("rgba(0,0,0,0.992)").ss(25,1,1).p("AtUwxMAapAhj");
	this.shape_314.setTransform(228.6,219.5);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f().s("rgba(0,0,0,0.992)").ss(25,1,1).p("Ataw6MAa1Ah1");
	this.shape_315.setTransform(229.2,220.3);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f().s("rgba(0,0,0,0.992)").ss(25,1,1).p("AtgxCMAbBAiE");
	this.shape_316.setTransform(229.9,221.1);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f().s("rgba(0,0,0,0.992)").ss(25,1,1).p("AtnxKMAbOAiV");
	this.shape_317.setTransform(230.5,221.9);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f().s("rgba(0,0,0,0.992)").ss(25,1,1).p("AttxSMAbbAil");
	this.shape_318.setTransform(231.2,222.7);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f().s("rgba(0,0,0,0.992)").ss(25,1,1).p("At0xaMAboAi1");
	this.shape_319.setTransform(231.8,223.5);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f().s("rgba(0,0,0,0.992)").ss(25,1,1).p("At6xiMAb1AjF");
	this.shape_320.setTransform(232.4,224.3);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f().s("rgba(0,0,0,0.992)").ss(25,1,1).p("AuAxqMAcBAjV");
	this.shape_321.setTransform(233.1,225.2);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f().s("rgba(0,0,0,0.992)").ss(25,1,1).p("AuHxyMAcPAjl");
	this.shape_322.setTransform(233.7,226);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f().s("rgba(0,0,0,0.992)").ss(25,1,1).p("AuNx6MAcbAj1");
	this.shape_323.setTransform(234.4,226.8);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f().s("rgba(0,0,0,0.992)").ss(25,1,1).p("AuUyCMAcpAkF");
	this.shape_324.setTransform(235,227.6);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f().s("rgba(0,0,0,0.992)").ss(25,1,1).p("AuayKMAc1AkV");
	this.shape_325.setTransform(235.6,228.4);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f().s("rgba(0,0,0,0.992)").ss(25,1,1).p("AugySMAdBAkl");
	this.shape_326.setTransform(236.3,229.2);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f().s("rgba(0,0,0,0.992)").ss(25,1,1).p("AunybMAdPAk3");
	this.shape_327.setTransform(236.9,230);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f().s("rgba(0,0,0,0.992)").ss(25,1,1).p("AutyjMAdbAlH");
	this.shape_328.setTransform(237.5,230.8);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f().s("rgba(0,0,0,0.992)").ss(25,1,1).p("Au0yrMAdpAlW");
	this.shape_329.setTransform(238.2,231.6);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f().s("rgba(0,0,0,0.992)").ss(25,1,1).p("Au6yzMAd1Aln");
	this.shape_330.setTransform(238.8,232.4);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f().s("rgba(0,0,0,0.992)").ss(25,1,1).p("AvBy7MAeDAl3");
	this.shape_331.setTransform(239.5,233.2);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f().s("rgba(0,0,0,0.992)").ss(25,1,1).p("AvHzDMAePAmH");
	this.shape_332.setTransform(240.1,234);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f().s("rgba(0,0,0,0.992)").ss(25,1,1).p("AvNzLMAebAmX");
	this.shape_333.setTransform(240.7,234.9);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f().s("rgba(0,0,0,0.992)").ss(25,1,1).p("AvTzTMAenAmn");
	this.shape_334.setTransform(241.4,235.7);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f().s("rgba(0,0,0,0.992)").ss(25,1,1).p("AvazbMAe1Am3");
	this.shape_335.setTransform(242,236.5);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f().s("rgba(0,0,0,0.992)").ss(25,1,1).p("AvhzjMAfDAnH");
	this.shape_336.setTransform(242.6,237.3);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f().s("rgba(0,0,0,0.992)").ss(25,1,1).p("AvnzrMAfPAnX");
	this.shape_337.setTransform(243.3,238.1);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f().s("rgba(0,0,0,0.992)").ss(25,1,1).p("AvuzzMAfdAnn");
	this.shape_338.setTransform(243.9,238.9);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f().s("rgba(0,0,0,0.992)").ss(25,1,1).p("Av0z8MAfpAn5");
	this.shape_339.setTransform(244.5,239.7);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f().s("rgba(0,0,0,0.996)").ss(25,1,1).p("Av60EMAf1AoJ");
	this.shape_340.setTransform(245.2,240.5);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f().s("rgba(0,0,0,0.996)").ss(25,1,1).p("AwB0MMAgDAoZ");
	this.shape_341.setTransform(245.8,241.3);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f().s("rgba(0,0,0,0.996)").ss(25,1,1).p("AwH0UMAgPAop");
	this.shape_342.setTransform(246.5,242.1);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f().s("rgba(0,0,0,0.996)").ss(25,1,1).p("AwO0cMAgdAo5");
	this.shape_343.setTransform(247.1,242.9);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f().s("rgba(0,0,0,0.996)").ss(25,1,1).p("AwU0kMAgpApJ");
	this.shape_344.setTransform(247.7,243.7);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f().s("rgba(0,0,0,0.996)").ss(25,1,1).p("Awb0sMAg3ApZ");
	this.shape_345.setTransform(248.4,244.6);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f().s("rgba(0,0,0,0.996)").ss(25,1,1).p("Awh00MAhDApp");
	this.shape_346.setTransform(249,245.4);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f().s("rgba(0,0,0,0.996)").ss(25,1,1).p("Awn08MAhPAp5");
	this.shape_347.setTransform(249.6,246.2);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f().s("rgba(0,0,0,0.996)").ss(25,1,1).p("Awu1EMAhdAqJ");
	this.shape_348.setTransform(250.3,247);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f().s("rgba(0,0,0,0.996)").ss(25,1,1).p("Aw01MMAhpAqZ");
	this.shape_349.setTransform(250.9,247.8);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f().s("rgba(0,0,0,0.996)").ss(25,1,1).p("Aw71UMAh3Aqp");
	this.shape_350.setTransform(251.6,248.6);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f().s("rgba(0,0,0,0.996)").ss(25,1,1).p("AxB1dMAiDAq7");
	this.shape_351.setTransform(252.2,249.4);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f().s("rgba(0,0,0,0.996)").ss(25,1,1).p("AxH1lMAiPArL");
	this.shape_352.setTransform(252.8,250.2);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f().s("rgba(0,0,0,0.996)").ss(25,1,1).p("AxO1tMAidArb");
	this.shape_353.setTransform(253.5,251);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f().s("rgba(0,0,0,0.996)").ss(25,1,1).p("AxU11MAipArr");
	this.shape_354.setTransform(254.1,251.8);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f().s("rgba(0,0,0,0.996)").ss(25,1,1).p("Axa19MAi1Ar7");
	this.shape_355.setTransform(254.7,252.6);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f().s("rgba(0,0,0,0.996)").ss(25,1,1).p("Axh2FMAjDAsL");
	this.shape_356.setTransform(255.4,253.4);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f().s("rgba(0,0,0,0.996)").ss(25,1,1).p("Axo2NMAjRAsb");
	this.shape_357.setTransform(256,254.2);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f().s("rgba(0,0,0,0.996)").ss(25,1,1).p("Axu2VMAjdAsr");
	this.shape_358.setTransform(256.6,255.1);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f().s("rgba(0,0,0,0.996)").ss(25,1,1).p("Ax02dMAjpAs7");
	this.shape_359.setTransform(257.3,255.9);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f().s("rgba(0,0,0,0.996)").ss(25,1,1).p("Ax62lMAj2AtL");
	this.shape_360.setTransform(257.9,256.7);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f().s("rgba(0,0,0,0.996)").ss(25,1,1).p("AyB2tMAkDAtb");
	this.shape_361.setTransform(258.6,257.5);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f().s("rgba(0,0,0,0.996)").ss(25,1,1).p("AyH21MAkQAtr");
	this.shape_362.setTransform(259.2,258.3);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f().s("rgba(0,0,0,0.996)").ss(25,1,1).p("AyO29MAkdAt7");
	this.shape_363.setTransform(259.8,259.1);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f().s("rgba(0,0,0,0.996)").ss(25,1,1).p("AyU3FMAkpAuM");
	this.shape_364.setTransform(260.5,259.9);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f().s("rgba(0,0,0,0.996)").ss(25,1,1).p("Ayb3NMAk3Auc");
	this.shape_365.setTransform(261.1,260.7);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f().s("rgba(0,0,0,0.996)").ss(25,1,1).p("Ayh3WMAlDAut");
	this.shape_366.setTransform(261.7,261.5);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f().s("rgba(0,0,0,0.996)").ss(25,1,1).p("Ayo3eMAlRAu9");
	this.shape_367.setTransform(262.4,262.3);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f().s("rgba(0,0,0,0.996)").ss(25,1,1).p("Ayu3mMAldAvN");
	this.shape_368.setTransform(263,263.1);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f().s("rgba(0,0,0,0.996)").ss(25,1,1).p("Ay03uMAlqAvd");
	this.shape_369.setTransform(263.7,263.9);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f().s("rgba(0,0,0,0.996)").ss(25,1,1).p("Ay732MAl3Avt");
	this.shape_370.setTransform(264.3,264.8);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f().s("rgba(0,0,0,0.996)").ss(25,1,1).p("AzB3+MAmDAv9");
	this.shape_371.setTransform(264.9,265.6);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f().s("rgba(0,0,0,0.996)").ss(25,1,1).p("AzI4GMAmRAwN");
	this.shape_372.setTransform(265.6,266.4);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f().s("rgba(0,0,0,0.996)").ss(25,1,1).p("AzO4OMAmdAwd");
	this.shape_373.setTransform(266.2,267.2);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f().s("rgba(0,0,0,0.996)").ss(25,1,1).p("AzV4WMAmrAwt");
	this.shape_374.setTransform(266.9,268);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f().s("#000000").ss(25,1,1).p("Azb4eMAm3Aw9");
	this.shape_375.setTransform(267.5,268.8);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f().s("#000000").ss(25,1,1).p("Azh4mMAnDAxO");
	this.shape_376.setTransform(268.1,269.6);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f().s("#000000").ss(25,1,1).p("Azo4uMAnRAxe");
	this.shape_377.setTransform(268.7,270.4);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f().s("#000000").ss(25,1,1).p("Azu42MAndAxu");
	this.shape_378.setTransform(269.4,271.2);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f().s("#000000").ss(25,1,1).p("Az14/MAnrAx/");
	this.shape_379.setTransform(270,272);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f().s("#000000").ss(25,1,1).p("Az75HMAn3AyP");
	this.shape_380.setTransform(270.7,272.8);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f().s("#000000").ss(25,1,1).p("A0C5PMAoFAyf");
	this.shape_381.setTransform(271.3,273.6);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f().s("#000000").ss(25,1,1).p("A0I5XMAoRAyv");
	this.shape_382.setTransform(271.9,274.5);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f().s("#000000").ss(25,1,1).p("A0O5fMAodAy/");
	this.shape_383.setTransform(272.6,275.3);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f().s("#000000").ss(25,1,1).p("A0V5nMAoqAzP");
	this.shape_384.setTransform(273.2,276.1);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f().s("#000000").ss(25,1,1).p("A0b5vMAo3Azf");
	this.shape_385.setTransform(273.9,276.9);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f().s("#000000").ss(25,1,1).p("A0i53MApFAzv");
	this.shape_386.setTransform(274.5,277.7);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f().s("#000000").ss(25,1,1).p("A0o5/MApRAz/");
	this.shape_387.setTransform(275.1,278.5);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f().s("#000000").ss(25,1,1).p("A0v6IMApfA0R");
	this.shape_388.setTransform(275.8,279.3);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f().s("#000000").ss(25,1,1).p("A016PMAprA0g");
	this.shape_389.setTransform(276.4,280.1);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f().s("#000000").ss(25,1,1).p("A076XMAp3A0w");
	this.shape_390.setTransform(277,280.9);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f().s("#000000").ss(25,1,1).p("A1B6gMAqEA1B");
	this.shape_391.setTransform(277.7,281.7);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f().s("#000000").ss(25,1,1).p("A1I6oMAqRA1R");
	this.shape_392.setTransform(278.3,282.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_182}]},9).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).to({state:[{t:this.shape_273}]},1).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_282}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_289}]},1).to({state:[{t:this.shape_290}]},1).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_293}]},1).to({state:[{t:this.shape_294}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_299}]},1).to({state:[{t:this.shape_300}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_304}]},1).to({state:[{t:this.shape_305}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_308}]},1).to({state:[{t:this.shape_309}]},1).to({state:[{t:this.shape_310}]},1).to({state:[{t:this.shape_311}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_313}]},1).to({state:[{t:this.shape_314}]},1).to({state:[{t:this.shape_315}]},1).to({state:[{t:this.shape_316}]},1).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_352}]},1).to({state:[{t:this.shape_353}]},1).to({state:[{t:this.shape_354}]},1).to({state:[{t:this.shape_355}]},1).to({state:[{t:this.shape_356}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_358}]},1).to({state:[{t:this.shape_359}]},1).to({state:[{t:this.shape_360}]},1).to({state:[{t:this.shape_361}]},1).to({state:[{t:this.shape_362}]},1).to({state:[{t:this.shape_363}]},1).to({state:[{t:this.shape_364}]},1).to({state:[{t:this.shape_365}]},1).to({state:[{t:this.shape_366}]},1).to({state:[{t:this.shape_367}]},1).to({state:[{t:this.shape_368}]},1).to({state:[{t:this.shape_369}]},1).to({state:[{t:this.shape_370}]},1).to({state:[{t:this.shape_371}]},1).to({state:[{t:this.shape_372}]},1).to({state:[{t:this.shape_373}]},1).to({state:[{t:this.shape_374}]},1).to({state:[{t:this.shape_375}]},1).to({state:[{t:this.shape_376}]},1).to({state:[{t:this.shape_377}]},1).to({state:[{t:this.shape_378}]},1).to({state:[{t:this.shape_379}]},1).to({state:[{t:this.shape_380}]},1).to({state:[{t:this.shape_381}]},1).to({state:[{t:this.shape_382}]},1).to({state:[{t:this.shape_383}]},1).to({state:[{t:this.shape_384}]},1).to({state:[{t:this.shape_385}]},1).to({state:[{t:this.shape_386}]},1).to({state:[{t:this.shape_387}]},1).to({state:[{t:this.shape_388}]},1).to({state:[{t:this.shape_389}]},1).to({state:[{t:this.shape_390}]},1).to({state:[{t:this.shape_391}]},1).to({state:[{t:this.shape_392}]},1).wait(276));

	// bg text
	this.instance_1 = new lib.basex("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(276.2,281.3);
	this.instance_1.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(495));

	// Layer 1
	this.instance_2 = new lib.ar1("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(112.3,129.8,1,1,-38,0,0,-0.1,-94.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(486));

	// Layer 8
	this.instance_3 = new lib.ar1("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(434.4,126.2,1,1,0,37.1,-142.9,-0.3,-94.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(230).to({_off:false},0).wait(265));

	// Background
	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_393.setTransform(275,275,3.373,2.543);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_394.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_394},{t:this.shape_393}]}).wait(495));

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