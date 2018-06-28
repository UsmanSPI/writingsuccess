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


(lib._9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ap1ZrQgvgpAAg3IAYhGIMn3bIjSCDIjwB6Ij5BeIj2AkQh4AAhYg7QhYg4g1hYQg3hVgYhrIgXjQQAAjfBejBQBdjECZieQCYifDNh+QDKh+DchVQDbhYDegsQDcgsDCAAICDAJICnAhICTBAQAgAWAQAbQAQAbAAAgIgRBJMgZfAu9QgsBNhMAAQg4AAgvgqgADW0rQkkBSkCCVQkCCWiyDVQi2DXAAENIADBhIAXBpIAyBUQAgAmA4AAQCEAACehDIE9ieIEmjHIDui7IAdgXIBkhWQAOgMAGgLIGMrWIhPgMIhSAAQjlAAkiBPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124.2,-168.4,248.5,336.9);


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
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AAAgIIAAAR");
	this.shape.setTransform(-3.5,-299.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AAAgUIAAAp");
	this.shape_1.setTransform(-3.5,-298);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AAAghIAABC");
	this.shape_2.setTransform(-3.5,-296.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("AAAgsIABBZ");
	this.shape_3.setTransform(-3.5,-295.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("AAAg4IABBx");
	this.shape_4.setTransform(-3.5,-294.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(5,1,1).p("AAAhEIABCJ");
	this.shape_5.setTransform(-3.4,-293.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(5,1,1).p("AAAhQIABCh");
	this.shape_6.setTransform(-3.4,-292);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(5,1,1).p("AAAhcIABC5");
	this.shape_7.setTransform(-3.4,-290.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(5,1,1).p("AAAhoIABDR");
	this.shape_8.setTransform(-3.4,-289.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(5,1,1).p("AAAh0IABDp");
	this.shape_9.setTransform(-3.4,-288.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(5,1,1).p("AAAiAIABEB");
	this.shape_10.setTransform(-3.4,-287.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5,1,1).p("AgBiMIADEZ");
	this.shape_11.setTransform(-3.4,-286);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(5,1,1).p("AgBiYIADEx");
	this.shape_12.setTransform(-3.4,-284.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(5,1,1).p("AgBikIADFJ");
	this.shape_13.setTransform(-3.3,-283.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(5,1,1).p("AgBiwIADFh");
	this.shape_14.setTransform(-3.3,-282.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(5,1,1).p("AgBi8IADF5");
	this.shape_15.setTransform(-3.3,-281.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(5,1,1).p("AgCjHIAFGQ");
	this.shape_16.setTransform(-3.3,-280.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(5,1,1).p("AgCjUIAFGp");
	this.shape_17.setTransform(-3.3,-278.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(5,1,1).p("AgCjfIAFG/");
	this.shape_18.setTransform(-3.3,-277.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(5,1,1).p("AgCjrIAFHY");
	this.shape_19.setTransform(-3.3,-276.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(5,1,1).p("AgCj3IAFHv");
	this.shape_20.setTransform(-3.2,-275.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(5,1,1).p("AgCkDIAFIH");
	this.shape_21.setTransform(-3.2,-274.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(5,1,1).p("AgCkPIAFIf");
	this.shape_22.setTransform(-3.2,-272.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(5,1,1).p("AgCkbIAFI3");
	this.shape_23.setTransform(-3.2,-271.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(5,1,1).p("AgCknIAGJP");
	this.shape_24.setTransform(-3.2,-270.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(5,1,1).p("AgCkzIAGJn");
	this.shape_25.setTransform(-3.2,-269.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(5,1,1).p("AgDk/IAHJ/");
	this.shape_26.setTransform(-3.2,-268.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(5,1,1).p("AgDlLIAHKX");
	this.shape_27.setTransform(-3.1,-266.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(5,1,1).p("AgDlXIAHKv");
	this.shape_28.setTransform(-3.1,-265.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(5,1,1).p("AgDljIAHLH");
	this.shape_29.setTransform(-3.1,-264.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(5,1,1).p("AgDlvIAHLf");
	this.shape_30.setTransform(-3.1,-263.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(5,1,1).p("AgEl7IAIL3");
	this.shape_31.setTransform(-3.1,-262.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(5,1,1).p("AgEmHIAIMP");
	this.shape_32.setTransform(-3.1,-261);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(5,1,1).p("AgEmTIAJMn");
	this.shape_33.setTransform(-3.1,-259.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(5,1,1).p("AgEmeIAJM+");
	this.shape_34.setTransform(-3.1,-258.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(5,1,1).p("AgEmrIAJNW");
	this.shape_35.setTransform(-3,-257.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(5,1,1).p("AgEm2IAJNt");
	this.shape_36.setTransform(-3,-256.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(5,1,1).p("AgEnCIAJOG");
	this.shape_37.setTransform(-3,-255);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(5,1,1).p("AgEnOIAJOd");
	this.shape_38.setTransform(-3,-253.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(5,1,1).p("AgEnaIAJO1");
	this.shape_39.setTransform(-3,-252.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(5,1,1).p("AgFnmIALPN");
	this.shape_40.setTransform(-3,-251.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(5,1,1).p("AgFnyIALPl");
	this.shape_41.setTransform(-3,-250.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(5,1,1).p("AgFn+IALP9");
	this.shape_42.setTransform(-2.9,-249);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(5,1,1).p("AgFoKIALQV");
	this.shape_43.setTransform(-2.9,-247.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(5,1,1).p("AgFoWIALQt");
	this.shape_44.setTransform(-2.9,-246.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(5,1,1).p("AgFoiIALRF");
	this.shape_45.setTransform(-2.9,-245.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(5,1,1).p("AgFouIALRd");
	this.shape_46.setTransform(-2.9,-244.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(5,1,1).p("AgFo6IALR1");
	this.shape_47.setTransform(-2.9,-243.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(5,1,1).p("AgGpGIANSN");
	this.shape_48.setTransform(-2.9,-241.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(5,1,1).p("AgGpSIANSl");
	this.shape_49.setTransform(-2.9,-240.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(5,1,1).p("AgGpeIANS9");
	this.shape_50.setTransform(-2.8,-239.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(5,1,1).p("AgGpqIANTV");
	this.shape_51.setTransform(-2.8,-238.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(5,1,1).p("AgGp1IANTr");
	this.shape_52.setTransform(-2.8,-237.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(5,1,1).p("AgHqCIAPUE");
	this.shape_53.setTransform(-2.8,-235.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(5,1,1).p("AgHqNIAPUb");
	this.shape_54.setTransform(-2.8,-234.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(5,1,1).p("AgHqZIAPU0");
	this.shape_55.setTransform(-2.8,-233.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(5,1,1).p("AgHqlIAPVL");
	this.shape_56.setTransform(-2.8,-232.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(5,1,1).p("AgHqxIAPVj");
	this.shape_57.setTransform(-2.7,-231.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(5,1,1).p("AgHq9IAPV7");
	this.shape_58.setTransform(-2.7,-229.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(5,1,1).p("AgHrJIAPWT");
	this.shape_59.setTransform(-2.7,-228.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(5,1,1).p("AgHrVIAPWr");
	this.shape_60.setTransform(-2.7,-227.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(5,1,1).p("AgHrhIAQXD");
	this.shape_61.setTransform(-2.7,-226.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(5,1,1).p("AgHrtIAQXb");
	this.shape_62.setTransform(-2.7,-225.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(5,1,1).p("AgIr5IARXz");
	this.shape_63.setTransform(-2.7,-223.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(5,1,1).p("AgIsFIARYL");
	this.shape_64.setTransform(-2.7,-222.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(5,1,1).p("AgIsRIARYj");
	this.shape_65.setTransform(-2.6,-221.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(5,1,1).p("AgIsdIARY7");
	this.shape_66.setTransform(-2.6,-220.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(5,1,1).p("AgIspIARZT");
	this.shape_67.setTransform(-2.6,-219.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(5,1,1).p("AgJs1IASZr");
	this.shape_68.setTransform(-2.6,-218);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(5,1,1).p("AgJtBIASaD");
	this.shape_69.setTransform(-2.6,-216.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(5,1,1).p("AgJtMIATaZ");
	this.shape_70.setTransform(-2.6,-215.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(5,1,1).p("AgJtZIATay");
	this.shape_71.setTransform(-2.6,-214.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(5,1,1).p("AgJtkIATbJ");
	this.shape_72.setTransform(-2.5,-213.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(5,1,1).p("AgJtwIATbh");
	this.shape_73.setTransform(-2.5,-212);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(5,1,1).p("AgJt8IATb5");
	this.shape_74.setTransform(-2.5,-210.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(5,1,1).p("AgJuIIATcR");
	this.shape_75.setTransform(-2.5,-209.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(5,1,1).p("AgJuUIAUcp");
	this.shape_76.setTransform(-2.5,-208.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(5,1,1).p("AgJugIAUdB");
	this.shape_77.setTransform(-2.5,-207.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(5,1,1).p("AgKusIAVdZ");
	this.shape_78.setTransform(-2.5,-206);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(5,1,1).p("AgKu4IAVdx");
	this.shape_79.setTransform(-2.5,-204.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(5,1,1).p("AgKvEIAVeJ");
	this.shape_80.setTransform(-2.4,-203.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(5,1,1).p("AgKvQIAVeh");
	this.shape_81.setTransform(-2.4,-202.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(5,1,1).p("AgKvcIAVe5");
	this.shape_82.setTransform(-2.4,-201.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(5,1,1).p("AgLvoIAXfR");
	this.shape_83.setTransform(-2.4,-200.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(5,1,1).p("AgLv0IAXfp");
	this.shape_84.setTransform(-2.4,-198.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(5,1,1).p("AgLwAMAAXAgB");
	this.shape_85.setTransform(-2.4,-197.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(5,1,1).p("AgLwLMAAXAgY");
	this.shape_86.setTransform(-2.4,-196.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(5,1,1).p("AgLwYMAAXAgw");
	this.shape_87.setTransform(-2.3,-195.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(5,1,1).p("AgLwjMAAXAhI");
	this.shape_88.setTransform(-2.3,-194.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(5,1,1).p("AgLwwMAAXAhg");
	this.shape_89.setTransform(-2.3,-192.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(5,1,1).p("AgLw8MAAXAh5");
	this.shape_90.setTransform(-2.3,-191.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(5,1,1).p("AgMxHMAAYAiP");
	this.shape_91.setTransform(-2.3,-190.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(5,1,1).p("AgMxTMAAYAin");
	this.shape_92.setTransform(-2.3,-189.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(5,1,1).p("AgMxfMAAZAi/");
	this.shape_93.setTransform(-2.3,-188.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(5,1,1).p("AgMxrMAAZAjX");
	this.shape_94.setTransform(-2.2,-186.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(5,1,1).p("AgMx3MAAZAjv");
	this.shape_95.setTransform(-2.2,-185.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(5,1,1).p("AgMyDMAAZAkH");
	this.shape_96.setTransform(-2.2,-184.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(5,1,1).p("AgMyPMAAZAkf");
	this.shape_97.setTransform(-2.2,-183.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(5,1,1).p("AgMybMAAaAk3");
	this.shape_98.setTransform(-2.2,-182.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(5,1,1).p("AgMynMAAaAlP");
	this.shape_99.setTransform(-2.2,-180.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(5,1,1).p("AgNyzMAAbAln");
	this.shape_100.setTransform(-2.2,-179.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(5,1,1).p("AgNy/MAAbAl/");
	this.shape_101.setTransform(-2.2,-178.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(5,1,1).p("AgNzLMAAbAmX");
	this.shape_102.setTransform(-2.1,-177.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(5,1,1).p("AgNzXMAAbAmv");
	this.shape_103.setTransform(-2.1,-176.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(5,1,1).p("AgNziMAAbAnG");
	this.shape_104.setTransform(-2.1,-175);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(5,1,1).p("AgNzvMAAbAne");
	this.shape_105.setTransform(-2.1,-173.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(5,1,1).p("AgOz6MAAcAn2");
	this.shape_106.setTransform(-2.1,-172.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(5,1,1).p("AgO0HMAAdAoO");
	this.shape_107.setTransform(-2.1,-171.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(5,1,1).p("AgO0SMAAdAol");
	this.shape_108.setTransform(-2.1,-170.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(5,1,1).p("AgO0eMAAdAo9");
	this.shape_109.setTransform(-2,-169);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(5,1,1).p("AgO0qMAAdApV");
	this.shape_110.setTransform(-2,-167.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(5,1,1).p("AgO02MAAdApt");
	this.shape_111.setTransform(-2,-166.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(5,1,1).p("AgO1CMAAdAqF");
	this.shape_112.setTransform(-2,-165.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(5,1,1).p("AgO1OMAAeAqd");
	this.shape_113.setTransform(-2,-164.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(5,1,1).p("AgO1aMAAeAq1");
	this.shape_114.setTransform(-2,-163);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(5,1,1).p("AgP1mMAAfArN");
	this.shape_115.setTransform(-2,-161.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(5,1,1).p("AgP1yMAAfArl");
	this.shape_116.setTransform(-2,-160.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(5,1,1).p("AgP1+MAAfAr9");
	this.shape_117.setTransform(-1.9,-159.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(5,1,1).p("AgP2KMAAfAsV");
	this.shape_118.setTransform(-1.9,-158.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(5,1,1).p("AgP2WMAAfAst");
	this.shape_119.setTransform(-1.9,-157.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).wait(1));

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-3.5,-301.3,1,1,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:0.3,y:-16.8},119).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.8,-304.2,22.3,13.8);


(lib.ar2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(48.5,-50.6,1,1,65.5,0,0,0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0.1,rotation:31.8,guide:{path:[48.5,-50.4,-9.2,-28.3,-42.7,42.1]}},91).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AA1kPIBIhMICkCaIhIBMg");
	var mask_graphics_1 = new cjs.Graphics().p("Ah6ghIBShXICjCaIhSBXg");
	var mask_graphics_2 = new cjs.Graphics().p("Ah/gcIBchhICjCaIhcBgg");
	var mask_graphics_3 = new cjs.Graphics().p("AiEgXIBmhrICjCaIhmBrg");
	var mask_graphics_4 = new cjs.Graphics().p("AiJgRIBvh2ICkCaIhwB1g");
	var mask_graphics_5 = new cjs.Graphics().p("AiOgMIB5iAICkCZIh6CAg");
	var mask_graphics_6 = new cjs.Graphics().p("AiSgHICCiKICjCZIiCCKg");
	var mask_graphics_7 = new cjs.Graphics().p("AiXgCICMiVICjCaIiMCVg");
	var mask_graphics_8 = new cjs.Graphics().p("AicACICWieICjCbIiWCeg");
	var mask_graphics_9 = new cjs.Graphics().p("AihAHICgioICjCbIigCog");
	var mask_graphics_10 = new cjs.Graphics().p("AimANICpizICkCbIipCyg");
	var mask_graphics_11 = new cjs.Graphics().p("AirASICzi9ICkCaIizC9g");
	var mask_graphics_12 = new cjs.Graphics().p("AiwAXIC9jIICkCbIi8DIg");
	var mask_graphics_13 = new cjs.Graphics().p("Ai1AcIDGjSIClCbIjGDSg");
	var mask_graphics_14 = new cjs.Graphics().p("Ai6AiIDQjdIClCbIjRDcg");
	var mask_graphics_15 = new cjs.Graphics().p("Ai+AnIDZjnICkCbIjZDmg");
	var mask_graphics_16 = new cjs.Graphics().p("AjDArIDjjwICkCaIjjDyg");
	var mask_graphics_17 = new cjs.Graphics().p("AjIAxIDtj7ICkCaIjtD8g");
	var mask_graphics_18 = new cjs.Graphics().p("AjNA2ID3kGICkCbIj3EGg");
	var mask_graphics_19 = new cjs.Graphics().p("AjSA7IEBkQICkCaIkBERg");
	var mask_graphics_20 = new cjs.Graphics().p("AjXBAIELkaICkCaIkLEbg");
	var mask_graphics_21 = new cjs.Graphics().p("AjcBGIEVklICkCaIkUElg");
	var mask_graphics_22 = new cjs.Graphics().p("AjgBLIEdkvIClCaIkeEwg");
	var mask_graphics_23 = new cjs.Graphics().p("AjmBQIEok6IClCbIkoE6g");
	var mask_graphics_24 = new cjs.Graphics().p("AjqBVIExlEICkCbIkxFEg");
	var mask_graphics_25 = new cjs.Graphics().p("AjvBaIE7lOICkCaIk7FPg");
	var mask_graphics_26 = new cjs.Graphics().p("Aj0BgIFFlZICkCaIlFFZg");
	var mask_graphics_27 = new cjs.Graphics().p("Aj5BkIFPliICkCaIlPFjg");
	var mask_graphics_28 = new cjs.Graphics().p("Aj+BqIFZltICkCaIlZFtg");
	var mask_graphics_29 = new cjs.Graphics().p("AkDBvIFjl4ICkCbIljF4g");
	var mask_graphics_30 = new cjs.Graphics().p("AkHB0IFrmCIClCaIltGDg");
	var mask_graphics_31 = new cjs.Graphics().p("AkMB5IF1mMIClCaIl3GNg");
	var mask_graphics_32 = new cjs.Graphics().p("AkRB/IF/mXIClCaImAGXg");
	var mask_graphics_33 = new cjs.Graphics().p("AkWCEIGJmhICkCaImJGhg");
	var mask_graphics_34 = new cjs.Graphics().p("AkbCJIGTmsICkCbImTGsg");
	var mask_graphics_35 = new cjs.Graphics().p("AkgCOIGdm2ICkCbImdG2g");
	var mask_graphics_36 = new cjs.Graphics().p("AklCUIGnnBICkCbImnHAg");
	var mask_graphics_37 = new cjs.Graphics().p("AkqCYIGxnLICkCbImxHLg");
	var mask_graphics_38 = new cjs.Graphics().p("AkvCeIG7nWICkCbIm6HWg");
	var mask_graphics_39 = new cjs.Graphics().p("Ak0CjIHEngIClCbInFHgg");
	var mask_graphics_40 = new cjs.Graphics().p("Ak5CoIHOnqIClCbInPHqg");
	var mask_graphics_41 = new cjs.Graphics().p("Ak9CtIHXn0IClCbInYH0g");
	var mask_graphics_42 = new cjs.Graphics().p("AlCCzIHhn/ICkCbInhH+g");
	var mask_graphics_43 = new cjs.Graphics().p("AlHC4IHroKICkCbInrIJg");
	var mask_graphics_44 = new cjs.Graphics().p("AlMC9IH1oUICkCbIn1IUg");
	var mask_graphics_45 = new cjs.Graphics().p("AlRDCIH/oeICkCbIn/Ieg");
	var mask_graphics_46 = new cjs.Graphics().p("AlWDHIIIooIClCbIoJIog");
	var mask_graphics_47 = new cjs.Graphics().p("AlbDNIISozIClCaIoSIzg");
	var mask_graphics_48 = new cjs.Graphics().p("AlgDSIIco+IClCbIodI9g");
	var mask_graphics_49 = new cjs.Graphics().p("AllDXIImpIIClCbIomJIg");
	var mask_graphics_50 = new cjs.Graphics().p("AlpDcIIvpSICkCbIovJSg");
	var mask_graphics_51 = new cjs.Graphics().p("AluDhII5pcICkCbIo5Jcg");
	var mask_graphics_52 = new cjs.Graphics().p("Al0DmIJEpmICkCaIpDJng");
	var mask_graphics_53 = new cjs.Graphics().p("Al4DsIJNpxICkCaIpNJxg");
	var mask_graphics_54 = new cjs.Graphics().p("Al9DxIJXp8ICkCbIpXJ8g");
	var mask_graphics_55 = new cjs.Graphics().p("AmCD2IJgqGIClCbIphKGg");
	var mask_graphics_56 = new cjs.Graphics().p("AmHD7IJqqQIClCbIpqKQg");
	var mask_graphics_57 = new cjs.Graphics().p("AmMEBIJ0qbIClCbIp1Kag");
	var mask_graphics_58 = new cjs.Graphics().p("AmREGIJ+qmIClCcIp+Klg");
	var mask_graphics_59 = new cjs.Graphics().p("AmVELIKHqwICkCbIqIKwg");
	var mask_graphics_60 = new cjs.Graphics().p("AmaEQIKRq6ICkCbIqRK6g");
	var mask_graphics_61 = new cjs.Graphics().p("AmfEWIKbrFICkCbIqbLEg");
	var mask_graphics_62 = new cjs.Graphics().p("AmkEaIKlrOICkCbIqlLOg");
	var mask_graphics_63 = new cjs.Graphics().p("AmpEgIKvraICkCcIqvLZg");
	var mask_graphics_64 = new cjs.Graphics().p("AmuElIK4rkIClCcIq5Ljg");
	var mask_graphics_65 = new cjs.Graphics().p("AmzEqILCruIClCbIrDLug");
	var mask_graphics_66 = new cjs.Graphics().p("Am4EvILMr4IClCbIrNL4g");
	var mask_graphics_67 = new cjs.Graphics().p("Am9E0ILWsCIClCbIrWMCg");
	var mask_graphics_68 = new cjs.Graphics().p("AnCE6ILgsNICkCbIrgMMg");
	var mask_graphics_69 = new cjs.Graphics().p("AnHE+ILqsXICkCcIrpMXg");
	var mask_graphics_70 = new cjs.Graphics().p("AnLFEILzsiICkCbIrzMig");
	var mask_graphics_71 = new cjs.Graphics().p("AnQFJIL9ssICkCbIr9Msg");
	var mask_graphics_72 = new cjs.Graphics().p("AnVFOIMHs2ICkCbIsHM2g");
	var mask_graphics_73 = new cjs.Graphics().p("AnaFTIMQtAIClCbIsRNAg");
	var mask_graphics_74 = new cjs.Graphics().p("AnfFYIMatLIClCcIsbNKg");
	var mask_graphics_75 = new cjs.Graphics().p("AnkFeIMktWIClCcIskNVg");
	var mask_graphics_76 = new cjs.Graphics().p("AnpFjIMutgIClCbIsuNgg");
	var mask_graphics_77 = new cjs.Graphics().p("AnuFoIM4tqICkCaIs3Nrg");
	var mask_graphics_78 = new cjs.Graphics().p("AnzFtINCt0ICkCaItBN1g");
	var mask_graphics_79 = new cjs.Graphics().p("An3FyINLt+ICkCaItLN/g");
	var mask_graphics_80 = new cjs.Graphics().p("An8F4INVuKICkCbItVOKg");
	var mask_graphics_81 = new cjs.Graphics().p("AoBF9INeuUIClCbItfOUg");
	var mask_graphics_82 = new cjs.Graphics().p("AoGGCINoueIClCbItoOeg");
	var mask_graphics_83 = new cjs.Graphics().p("AoLGHINyuoIClCbItyOog");
	var mask_graphics_84 = new cjs.Graphics().p("AoQGMIN8uyIClCaIt8Ozg");
	var mask_graphics_85 = new cjs.Graphics().p("AoVGSIOGu+IClCbIuGO+g");
	var mask_graphics_86 = new cjs.Graphics().p("AoZGXIOPvIICkCbIuPPIg");
	var mask_graphics_87 = new cjs.Graphics().p("AofGcIOavSICkCbIuZPSg");
	var mask_graphics_88 = new cjs.Graphics().p("AojGhIOjvcICkCbIujPcg");
	var mask_graphics_89 = new cjs.Graphics().p("AooGmIOtvmICkCaIutPng");
	var mask_graphics_90 = new cjs.Graphics().p("AotGrIO2vwIClCaIu3Pxg");
	var mask_graphics_91 = new cjs.Graphics().p("AoyGxIPAv8IClCbIvAP8g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:28.9,y:-34.8}).wait(1).to({graphics:mask_graphics_1,x:45.5,y:-57.6}).wait(1).to({graphics:mask_graphics_2,x:45,y:-57.1}).wait(1).to({graphics:mask_graphics_3,x:44.5,y:-56.6}).wait(1).to({graphics:mask_graphics_4,x:44,y:-56}).wait(1).to({graphics:mask_graphics_5,x:43.5,y:-55.5}).wait(1).to({graphics:mask_graphics_6,x:43,y:-55}).wait(1).to({graphics:mask_graphics_7,x:42.5,y:-54.5}).wait(1).to({graphics:mask_graphics_8,x:42.1,y:-54}).wait(1).to({graphics:mask_graphics_9,x:41.6,y:-53.4}).wait(1).to({graphics:mask_graphics_10,x:41.1,y:-52.9}).wait(1).to({graphics:mask_graphics_11,x:40.6,y:-52.4}).wait(1).to({graphics:mask_graphics_12,x:40.1,y:-51.9}).wait(1).to({graphics:mask_graphics_13,x:39.6,y:-51.4}).wait(1).to({graphics:mask_graphics_14,x:39.1,y:-50.9}).wait(1).to({graphics:mask_graphics_15,x:38.6,y:-50.4}).wait(1).to({graphics:mask_graphics_16,x:38.1,y:-49.8}).wait(1).to({graphics:mask_graphics_17,x:37.7,y:-49.3}).wait(1).to({graphics:mask_graphics_18,x:37.2,y:-48.8}).wait(1).to({graphics:mask_graphics_19,x:36.7,y:-48.3}).wait(1).to({graphics:mask_graphics_20,x:36.2,y:-47.8}).wait(1).to({graphics:mask_graphics_21,x:35.7,y:-47.3}).wait(1).to({graphics:mask_graphics_22,x:35.2,y:-46.7}).wait(1).to({graphics:mask_graphics_23,x:34.7,y:-46.2}).wait(1).to({graphics:mask_graphics_24,x:34.2,y:-45.7}).wait(1).to({graphics:mask_graphics_25,x:33.7,y:-45.2}).wait(1).to({graphics:mask_graphics_26,x:33.3,y:-44.7}).wait(1).to({graphics:mask_graphics_27,x:32.8,y:-44.1}).wait(1).to({graphics:mask_graphics_28,x:32.3,y:-43.6}).wait(1).to({graphics:mask_graphics_29,x:31.8,y:-43.1}).wait(1).to({graphics:mask_graphics_30,x:31.3,y:-42.6}).wait(1).to({graphics:mask_graphics_31,x:30.8,y:-42.1}).wait(1).to({graphics:mask_graphics_32,x:30.3,y:-41.6}).wait(1).to({graphics:mask_graphics_33,x:29.8,y:-41}).wait(1).to({graphics:mask_graphics_34,x:29.3,y:-40.5}).wait(1).to({graphics:mask_graphics_35,x:28.9,y:-40}).wait(1).to({graphics:mask_graphics_36,x:28.4,y:-39.5}).wait(1).to({graphics:mask_graphics_37,x:27.9,y:-39}).wait(1).to({graphics:mask_graphics_38,x:27.4,y:-38.5}).wait(1).to({graphics:mask_graphics_39,x:26.9,y:-38}).wait(1).to({graphics:mask_graphics_40,x:26.4,y:-37.4}).wait(1).to({graphics:mask_graphics_41,x:25.9,y:-36.9}).wait(1).to({graphics:mask_graphics_42,x:25.4,y:-36.4}).wait(1).to({graphics:mask_graphics_43,x:24.9,y:-35.9}).wait(1).to({graphics:mask_graphics_44,x:24.5,y:-35.4}).wait(1).to({graphics:mask_graphics_45,x:24,y:-34.8}).wait(1).to({graphics:mask_graphics_46,x:23.5,y:-34.3}).wait(1).to({graphics:mask_graphics_47,x:23,y:-33.8}).wait(1).to({graphics:mask_graphics_48,x:22.5,y:-33.3}).wait(1).to({graphics:mask_graphics_49,x:22,y:-32.8}).wait(1).to({graphics:mask_graphics_50,x:21.6,y:-32.3}).wait(1).to({graphics:mask_graphics_51,x:21.1,y:-31.7}).wait(1).to({graphics:mask_graphics_52,x:20.6,y:-31.2}).wait(1).to({graphics:mask_graphics_53,x:20.1,y:-30.7}).wait(1).to({graphics:mask_graphics_54,x:19.6,y:-30.2}).wait(1).to({graphics:mask_graphics_55,x:19.1,y:-29.7}).wait(1).to({graphics:mask_graphics_56,x:18.6,y:-29.1}).wait(1).to({graphics:mask_graphics_57,x:18.1,y:-28.7}).wait(1).to({graphics:mask_graphics_58,x:17.6,y:-28.1}).wait(1).to({graphics:mask_graphics_59,x:17.2,y:-27.6}).wait(1).to({graphics:mask_graphics_60,x:16.7,y:-27.1}).wait(1).to({graphics:mask_graphics_61,x:16.2,y:-26.6}).wait(1).to({graphics:mask_graphics_62,x:15.7,y:-26.1}).wait(1).to({graphics:mask_graphics_63,x:15.2,y:-25.5}).wait(1).to({graphics:mask_graphics_64,x:14.7,y:-25}).wait(1).to({graphics:mask_graphics_65,x:14.2,y:-24.5}).wait(1).to({graphics:mask_graphics_66,x:13.7,y:-24}).wait(1).to({graphics:mask_graphics_67,x:13.2,y:-23.5}).wait(1).to({graphics:mask_graphics_68,x:12.8,y:-23}).wait(1).to({graphics:mask_graphics_69,x:12.3,y:-22.4}).wait(1).to({graphics:mask_graphics_70,x:11.8,y:-21.9}).wait(1).to({graphics:mask_graphics_71,x:11.3,y:-21.4}).wait(1).to({graphics:mask_graphics_72,x:10.8,y:-20.9}).wait(1).to({graphics:mask_graphics_73,x:10.3,y:-20.4}).wait(1).to({graphics:mask_graphics_74,x:9.8,y:-19.8}).wait(1).to({graphics:mask_graphics_75,x:9.3,y:-19.3}).wait(1).to({graphics:mask_graphics_76,x:8.8,y:-18.8}).wait(1).to({graphics:mask_graphics_77,x:8.4,y:-18.3}).wait(1).to({graphics:mask_graphics_78,x:7.9,y:-17.8}).wait(1).to({graphics:mask_graphics_79,x:7.4,y:-17.3}).wait(1).to({graphics:mask_graphics_80,x:6.9,y:-16.8}).wait(1).to({graphics:mask_graphics_81,x:6.4,y:-16.2}).wait(1).to({graphics:mask_graphics_82,x:5.9,y:-15.7}).wait(1).to({graphics:mask_graphics_83,x:5.4,y:-15.2}).wait(1).to({graphics:mask_graphics_84,x:4.9,y:-14.7}).wait(1).to({graphics:mask_graphics_85,x:4.4,y:-14.2}).wait(1).to({graphics:mask_graphics_86,x:4,y:-13.7}).wait(1).to({graphics:mask_graphics_87,x:3.5,y:-13.1}).wait(1).to({graphics:mask_graphics_88,x:3,y:-12.6}).wait(1).to({graphics:mask_graphics_89,x:2.5,y:-12.1}).wait(1).to({graphics:mask_graphics_90,x:2,y:-11.6}).wait(1).to({graphics:mask_graphics_91,x:1.5,y:-11.1}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AnIHQQFQrCJBjd");
	this.shape.setTransform(2.8,-4.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(92));

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
(lib.WS_Cursive_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_493 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(493).call(this.frame_493).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(383,128.3,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[383,128.3,354.9,116.8,324.6,121.5,296.5,125.8,270,136.5,244.1,146.9,220.5,161.9,197.1,176.8,180.5,198.9,162.1,223.2,162.1,253.4,162,285.2,191.3,292.5,220.5,299.8,245.7,283.5,270.8,267.3,292.7,252,314.6,236.7,331.5,213.4,348.4,190,362.3,169.3,376.2,148.6,387.4,130.3,387.3,130.2,387.1,130.1]}},263).wait(18).to({startPosition:0},0).to({guide:{path:[387.6,130.7,304,280.5,220.3,430.2]}},120).wait(14).to({startPosition:0},0).to({guide:{path:[220,430,332.2,388.1,373.8,445.5,415.3,502.9,404.4,579,400,609.5,408.9,630.4]}},69).wait(1));

	// Layer 3
	this.instance_1 = new lib.ar5("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(313.6,350.9,1,1,28.1,0,0,-1,-104.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(290).to({_off:false},0).wait(204));

	// Layer 7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_290 = new cjs.Graphics().p("AZTILIB7kSIFtCkIh7ESg");
	var mask_graphics_291 = new cjs.Graphics().p("Aj7BDICKkqIFtClIiJEqg");
	var mask_graphics_292 = new cjs.Graphics().p("AkCBPICXlDIFuCmIiXFDg");
	var mask_graphics_293 = new cjs.Graphics().p("AkKBbICmldIFvCnIimFeg");
	var mask_graphics_294 = new cjs.Graphics().p("AkSBnIC0l2IFxCoIi0F3g");
	var mask_graphics_295 = new cjs.Graphics().p("AkaB0IDCmQIFyCpIjBGQg");
	var mask_graphics_296 = new cjs.Graphics().p("AkhCAIDQmpIFzCqIjQGpg");
	var mask_graphics_297 = new cjs.Graphics().p("AkpCMIDfnCIF0CrIjeHCg");
	var mask_graphics_298 = new cjs.Graphics().p("AkxCZIDtncIF2CsIjtHbg");
	var mask_graphics_299 = new cjs.Graphics().p("Ak5CkID8n0IF3CsIj7H1g");
	var mask_graphics_300 = new cjs.Graphics().p("AlACwIEJoNIF4CtIkJIPg");
	var mask_graphics_301 = new cjs.Graphics().p("AlIC8IEXomIF6CuIkXIog");
	var mask_graphics_302 = new cjs.Graphics().p("AlQDJIEmpAIF7CvIkmJAg");
	var mask_graphics_303 = new cjs.Graphics().p("AlXDVIE0paIF7CxIkzJag");
	var mask_graphics_304 = new cjs.Graphics().p("AlfDhIFCpzIF9CxIlCJ0g");
	var mask_graphics_305 = new cjs.Graphics().p("AlmDtIFPqMIF/CzIlRKMg");
	var mask_graphics_306 = new cjs.Graphics().p("AluD5IFeqlIF/C0IleKlg");
	var mask_graphics_307 = new cjs.Graphics().p("Al2EGIFsq/IGBC0IlsK/g");
	var mask_graphics_308 = new cjs.Graphics().p("Al9ESIF6rZIGCC2Il7LYg");
	var mask_graphics_309 = new cjs.Graphics().p("AmFEeIGHryIGEC3ImHLyg");
	var mask_graphics_310 = new cjs.Graphics().p("AmNEqIGWsLIGFC4ImWMLg");
	var mask_graphics_311 = new cjs.Graphics().p("AmVE3IGkslIGHC5ImkMkg");
	var mask_graphics_312 = new cjs.Graphics().p("AmdFCIGzs9IGHC6ImyM9g");
	var mask_graphics_313 = new cjs.Graphics().p("AmkFOIHAtWIGJC7InANWg");
	var mask_graphics_314 = new cjs.Graphics().p("AmsFbIHPtwIGKC7InPNwg");
	var mask_graphics_315 = new cjs.Graphics().p("Am0FnIHduJIGMC8IndOKg");
	var mask_graphics_316 = new cjs.Graphics().p("Am7FzIHrujIGMC+InrOjg");
	var mask_graphics_317 = new cjs.Graphics().p("AnDF/IH6u8IGNC/In5O8g");
	var mask_graphics_318 = new cjs.Graphics().p("AnLGLIIIvVIGPDAIoIPVg");
	var mask_graphics_319 = new cjs.Graphics().p("AnTGXIIXvuIGPDBIoVPug");
	var mask_graphics_320 = new cjs.Graphics().p("AnaGkIIkwIIGRDBIokQIg");
	var mask_graphics_321 = new cjs.Graphics().p("AniGwIIywhIGTDCIoyQhg");
	var mask_graphics_322 = new cjs.Graphics().p("AnqG8IJBw7IGUDEIpBQ6g");
	var mask_graphics_323 = new cjs.Graphics().p("AnxHIIJOxUIGVDFIpORTg");
	var mask_graphics_324 = new cjs.Graphics().p("An5HUIJcxtIGXDFIpdRtg");
	var mask_graphics_325 = new cjs.Graphics().p("AoBHhIJryHIGYDHIprSGg");
	var mask_graphics_326 = new cjs.Graphics().p("AoIHtIJ5ygIGZDHIp6Sgg");
	var mask_graphics_327 = new cjs.Graphics().p("AoQH5IKHy5IGaDIIqIS5g");
	var mask_graphics_328 = new cjs.Graphics().p("AoYIFIKWzSIGbDJIqWTSg");
	var mask_graphics_329 = new cjs.Graphics().p("AofIRIKjzrIGdDKIqkTrg");
	var mask_graphics_330 = new cjs.Graphics().p("AonIeIKy0FIGdDLIqyUEg");
	var mask_graphics_331 = new cjs.Graphics().p("AovIpILA0dIGfDMIrAUdg");
	var mask_graphics_332 = new cjs.Graphics().p("Ao3I1ILP03IGgDNIrPU4g");
	var mask_graphics_333 = new cjs.Graphics().p("Ao+JCILc1RIGhDPIrcVQg");
	var mask_graphics_334 = new cjs.Graphics().p("ApGJOILr1qIGiDPIrrVqg");
	var mask_graphics_335 = new cjs.Graphics().p("ApOJaIL52DIGkDQIr5WDg");
	var mask_graphics_336 = new cjs.Graphics().p("ApWJmIMI2cIGkDRIsHWcg");
	var mask_graphics_337 = new cjs.Graphics().p("ApdJyIMV21IGmDSIsVW1g");
	var mask_graphics_338 = new cjs.Graphics().p("AplJ+IMk3PIGnDUIsjXPg");
	var mask_graphics_339 = new cjs.Graphics().p("AptKLIMy3pIGoDUIsyXpg");
	var mask_graphics_340 = new cjs.Graphics().p("Ap0KXINA4CIGpDVItAYCg");
	var mask_graphics_341 = new cjs.Graphics().p("Ap8KjINP4bIGqDXItOYag");
	var mask_graphics_342 = new cjs.Graphics().p("AqEKvINd40IGsDXItcY0g");
	var mask_graphics_343 = new cjs.Graphics().p("AqLK7INq5NIGtDYItqZNg");
	var mask_graphics_344 = new cjs.Graphics().p("AqTLHIN55mIGuDYIt5Zng");
	var mask_graphics_345 = new cjs.Graphics().p("AqbLUIOH6AIGwDZIuHaAg");
	var mask_graphics_346 = new cjs.Graphics().p("AqjLgIOW6aIGxDcIuWaZg");
	var mask_graphics_347 = new cjs.Graphics().p("AqqLsIOj6zIGyDcIujazg");
	var mask_graphics_348 = new cjs.Graphics().p("AqyL4IOx7MIG0DdIuybMg");
	var mask_graphics_349 = new cjs.Graphics().p("Aq6MEIPA7lIG1DeIvAblg");
	var mask_graphics_350 = new cjs.Graphics().p("ArBMQIPO7+IG1DfIvOb+g");
	var mask_graphics_351 = new cjs.Graphics().p("ArJMcIPc8XIG3DgIvccXg");
	var mask_graphics_352 = new cjs.Graphics().p("ArRMpIPr8yIG4DhIvrcyg");
	var mask_graphics_353 = new cjs.Graphics().p("ArYM1IP49LIG5DiIv4dLg");
	var mask_graphics_354 = new cjs.Graphics().p("ArgNBIQG9kIG7DjIwGdkg");
	var mask_graphics_355 = new cjs.Graphics().p("AroNNIQV99IG8DkIwVd9g");
	var mask_graphics_356 = new cjs.Graphics().p("ArwNZIQj+WIG+DlIwkeWg");
	var mask_graphics_357 = new cjs.Graphics().p("Ar3NmIQx+wIG/DmIwyevg");
	var mask_graphics_358 = new cjs.Graphics().p("Ar/NyIQ//JIHADnIxAfIg");
	var mask_graphics_359 = new cjs.Graphics().p("AsHN9IRO/iIHBDoIxOfig");
	var mask_graphics_360 = new cjs.Graphics().p("AsPOKIRd/8IHCDpIxdf8g");
	var mask_graphics_361 = new cjs.Graphics().p("AsWOWMARqggVIHDDqMgRqAgVg");
	var mask_graphics_362 = new cjs.Graphics().p("AseOiMAR4gguIHFDrMgR5Agug");
	var mask_graphics_363 = new cjs.Graphics().p("AsmOuMASHghHIHGDsMgSHAhHg");
	var mask_graphics_364 = new cjs.Graphics().p("AstO6MASVghgIHGDsMgSUAhhg");
	var mask_graphics_365 = new cjs.Graphics().p("As1PGMASjgh5IHIDtMgSjAh6g");
	var mask_graphics_366 = new cjs.Graphics().p("As9PSMASygiTIHJDvMgSyAiTg");
	var mask_graphics_367 = new cjs.Graphics().p("AtEPfMAS/gitIHKDwMgS/Aitg");
	var mask_graphics_368 = new cjs.Graphics().p("AtMPrMATOgjGIHLDxMgTOAjGg");
	var mask_graphics_369 = new cjs.Graphics().p("AtUP3MATcgjfIHNDxMgTcAjgg");
	var mask_graphics_370 = new cjs.Graphics().p("AtbQDMATqgj4IHNDyMgTqAj5g");
	var mask_graphics_371 = new cjs.Graphics().p("AtjQQMAT4gkSIHPD0MgT4AkRg");
	var mask_graphics_372 = new cjs.Graphics().p("AtrQcMAUGgkrIHRD0MgUGAkrg");
	var mask_graphics_373 = new cjs.Graphics().p("AtzQoMAUVglEIHSD1MgUVAlEg");
	var mask_graphics_374 = new cjs.Graphics().p("At6Q0MAUigldIHTD2MgUjAleg");
	var mask_graphics_375 = new cjs.Graphics().p("AuCRAMAUxgl3IHUD4MgUxAl3g");
	var mask_graphics_376 = new cjs.Graphics().p("AuKRNMAVAgmRIHVD5MgU/AmQg");
	var mask_graphics_377 = new cjs.Graphics().p("AuRRZMAVNgmqIHWD5MgVNAmqg");
	var mask_graphics_378 = new cjs.Graphics().p("AuZRkMAVbgnCIHYD7MgVcAnCg");
	var mask_graphics_379 = new cjs.Graphics().p("AuhRxMAVqgncIHZD7MgVqAncg");
	var mask_graphics_380 = new cjs.Graphics().p("AupR9MAV4gn1IHbD8MgV4An1g");
	var mask_graphics_381 = new cjs.Graphics().p("AuwSJMAWGgoOIHbD9MgWGAoPg");
	var mask_graphics_382 = new cjs.Graphics().p("Au4SVMAWUgooIHdD/MgWVAoog");
	var mask_graphics_383 = new cjs.Graphics().p("AvAShMAWjgpBIHeEAMgWjApBg");
	var mask_graphics_384 = new cjs.Graphics().p("AvIStMAWxgpaIHgEAMgWxApbg");
	var mask_graphics_385 = new cjs.Graphics().p("AvPS6MAW/gp0IHgECMgW/Apzg");
	var mask_graphics_386 = new cjs.Graphics().p("AvXTGMAXNgqNIHiECMgXNAqNg");
	var mask_graphics_387 = new cjs.Graphics().p("AvfTSMAXcgqnIHjEEMgXcAqng");
	var mask_graphics_388 = new cjs.Graphics().p("AvmTeMAXqgrAIHjEFMgXpArAg");
	var mask_graphics_389 = new cjs.Graphics().p("AvuTqMAX4grZIHlEGMgX4ArZg");
	var mask_graphics_390 = new cjs.Graphics().p("Av2T3MAYHgrzIHmEHMgYHAryg");
	var mask_graphics_391 = new cjs.Graphics().p("Av9UDMAYUgsMIHnEIMgYUAsLg");
	var mask_graphics_392 = new cjs.Graphics().p("AwFUPMAYigslIHpEIMgYiAslg");
	var mask_graphics_393 = new cjs.Graphics().p("AwNUbMAYxgs+IHqEJMgYxAs+g");
	var mask_graphics_394 = new cjs.Graphics().p("AwUUnMAY+gtXIHrEKMgY/AtXg");
	var mask_graphics_395 = new cjs.Graphics().p("AwcUzMAZNgtwIHsELMgZNAtwg");
	var mask_graphics_396 = new cjs.Graphics().p("AwkVAMAZcguLIHtENMgZbAuJg");
	var mask_graphics_397 = new cjs.Graphics().p("AwrVLMAZogujIHvENMgZpAukg");
	var mask_graphics_398 = new cjs.Graphics().p("AwzVXMAZ3gu8IHwEOMgZ3Au9g");
	var mask_graphics_399 = new cjs.Graphics().p("Aw7VkMAaGgvWIHxEPMgaGAvWg");
	var mask_graphics_400 = new cjs.Graphics().p("AxDVwMAaUgvvIHzEQMgaUAvvg");
	var mask_graphics_401 = new cjs.Graphics().p("AxKV8MAaigwIIHzERMgaiAwIg");
	var mask_graphics_402 = new cjs.Graphics().p("AxSWIMAawgwiIH1ETMgawAwig");
	var mask_graphics_403 = new cjs.Graphics().p("AxaWUMAa/gw7IH2EUMga/Aw7g");
	var mask_graphics_404 = new cjs.Graphics().p("AxhWhMAbMgxVIH3EUMgbMAxVg");
	var mask_graphics_405 = new cjs.Graphics().p("AxpWtMAbbgxuIH4EVMgbbAxug");
	var mask_graphics_406 = new cjs.Graphics().p("AxxW5MAbpgyHIH6EXMgbpAyGg");
	var mask_graphics_407 = new cjs.Graphics().p("Ax5XFMAb4gygIH7EXMgb4Aygg");
	var mask_graphics_408 = new cjs.Graphics().p("AyBXRMAcGgy5IH9EYMgcGAy5g");
	var mask_graphics_409 = new cjs.Graphics().p("AyIXdMAcUgzSIH9EZMgcUAzTg");
	var mask_graphics_410 = new cjs.Graphics().p("AjjeyMAcigzrIH+EaMgcjAzrg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(290).to({graphics:mask_graphics_290,x:210.7,y:68.7}).wait(1).to({graphics:mask_graphics_291,x:396.2,y:116.8}).wait(1).to({graphics:mask_graphics_292,x:395.5,y:118.1}).wait(1).to({graphics:mask_graphics_293,x:394.7,y:119.4}).wait(1).to({graphics:mask_graphics_294,x:393.9,y:120.7}).wait(1).to({graphics:mask_graphics_295,x:393.2,y:122}).wait(1).to({graphics:mask_graphics_296,x:392.4,y:123.3}).wait(1).to({graphics:mask_graphics_297,x:391.7,y:124.6}).wait(1).to({graphics:mask_graphics_298,x:390.9,y:125.9}).wait(1).to({graphics:mask_graphics_299,x:390.1,y:127.2}).wait(1).to({graphics:mask_graphics_300,x:389.4,y:128.5}).wait(1).to({graphics:mask_graphics_301,x:388.6,y:129.8}).wait(1).to({graphics:mask_graphics_302,x:387.8,y:131.1}).wait(1).to({graphics:mask_graphics_303,x:387,y:132.3}).wait(1).to({graphics:mask_graphics_304,x:386.3,y:133.7}).wait(1).to({graphics:mask_graphics_305,x:385.5,y:135}).wait(1).to({graphics:mask_graphics_306,x:384.7,y:136.2}).wait(1).to({graphics:mask_graphics_307,x:384,y:137.5}).wait(1).to({graphics:mask_graphics_308,x:383.2,y:138.8}).wait(1).to({graphics:mask_graphics_309,x:382.5,y:140.1}).wait(1).to({graphics:mask_graphics_310,x:381.7,y:141.4}).wait(1).to({graphics:mask_graphics_311,x:380.9,y:142.7}).wait(1).to({graphics:mask_graphics_312,x:380.2,y:144}).wait(1).to({graphics:mask_graphics_313,x:379.4,y:145.3}).wait(1).to({graphics:mask_graphics_314,x:378.6,y:146.6}).wait(1).to({graphics:mask_graphics_315,x:377.8,y:147.9}).wait(1).to({graphics:mask_graphics_316,x:377.1,y:149.2}).wait(1).to({graphics:mask_graphics_317,x:376.3,y:150.5}).wait(1).to({graphics:mask_graphics_318,x:375.5,y:151.8}).wait(1).to({graphics:mask_graphics_319,x:374.8,y:153.1}).wait(1).to({graphics:mask_graphics_320,x:374,y:154.4}).wait(1).to({graphics:mask_graphics_321,x:373.3,y:155.7}).wait(1).to({graphics:mask_graphics_322,x:372.5,y:157}).wait(1).to({graphics:mask_graphics_323,x:371.7,y:158.3}).wait(1).to({graphics:mask_graphics_324,x:371,y:159.6}).wait(1).to({graphics:mask_graphics_325,x:370.2,y:160.8}).wait(1).to({graphics:mask_graphics_326,x:369.4,y:162.2}).wait(1).to({graphics:mask_graphics_327,x:368.7,y:163.4}).wait(1).to({graphics:mask_graphics_328,x:367.9,y:164.7}).wait(1).to({graphics:mask_graphics_329,x:367.1,y:166}).wait(1).to({graphics:mask_graphics_330,x:366.3,y:167.3}).wait(1).to({graphics:mask_graphics_331,x:365.6,y:168.6}).wait(1).to({graphics:mask_graphics_332,x:364.8,y:169.9}).wait(1).to({graphics:mask_graphics_333,x:364.1,y:171.2}).wait(1).to({graphics:mask_graphics_334,x:363.3,y:172.5}).wait(1).to({graphics:mask_graphics_335,x:362.5,y:173.8}).wait(1).to({graphics:mask_graphics_336,x:361.8,y:175.1}).wait(1).to({graphics:mask_graphics_337,x:361,y:176.4}).wait(1).to({graphics:mask_graphics_338,x:360.2,y:177.7}).wait(1).to({graphics:mask_graphics_339,x:359.5,y:179}).wait(1).to({graphics:mask_graphics_340,x:358.7,y:180.3}).wait(1).to({graphics:mask_graphics_341,x:357.9,y:181.6}).wait(1).to({graphics:mask_graphics_342,x:357.1,y:182.9}).wait(1).to({graphics:mask_graphics_343,x:356.4,y:184.2}).wait(1).to({graphics:mask_graphics_344,x:355.6,y:185.5}).wait(1).to({graphics:mask_graphics_345,x:354.9,y:186.8}).wait(1).to({graphics:mask_graphics_346,x:354.1,y:188}).wait(1).to({graphics:mask_graphics_347,x:353.3,y:189.3}).wait(1).to({graphics:mask_graphics_348,x:352.6,y:190.7}).wait(1).to({graphics:mask_graphics_349,x:351.8,y:191.9}).wait(1).to({graphics:mask_graphics_350,x:351,y:193.2}).wait(1).to({graphics:mask_graphics_351,x:350.3,y:194.5}).wait(1).to({graphics:mask_graphics_352,x:349.5,y:195.8}).wait(1).to({graphics:mask_graphics_353,x:348.7,y:197.1}).wait(1).to({graphics:mask_graphics_354,x:348,y:198.4}).wait(1).to({graphics:mask_graphics_355,x:347.2,y:199.7}).wait(1).to({graphics:mask_graphics_356,x:346.4,y:201}).wait(1).to({graphics:mask_graphics_357,x:345.7,y:202.3}).wait(1).to({graphics:mask_graphics_358,x:344.9,y:203.6}).wait(1).to({graphics:mask_graphics_359,x:344.1,y:204.9}).wait(1).to({graphics:mask_graphics_360,x:343.4,y:206.2}).wait(1).to({graphics:mask_graphics_361,x:342.6,y:207.5}).wait(1).to({graphics:mask_graphics_362,x:341.8,y:208.8}).wait(1).to({graphics:mask_graphics_363,x:341.1,y:210.1}).wait(1).to({graphics:mask_graphics_364,x:340.3,y:211.4}).wait(1).to({graphics:mask_graphics_365,x:339.5,y:212.7}).wait(1).to({graphics:mask_graphics_366,x:338.8,y:214}).wait(1).to({graphics:mask_graphics_367,x:338,y:215.3}).wait(1).to({graphics:mask_graphics_368,x:337.2,y:216.5}).wait(1).to({graphics:mask_graphics_369,x:336.5,y:217.9}).wait(1).to({graphics:mask_graphics_370,x:335.7,y:219.2}).wait(1).to({graphics:mask_graphics_371,x:334.9,y:220.4}).wait(1).to({graphics:mask_graphics_372,x:334.2,y:221.7}).wait(1).to({graphics:mask_graphics_373,x:333.4,y:223}).wait(1).to({graphics:mask_graphics_374,x:332.6,y:224.3}).wait(1).to({graphics:mask_graphics_375,x:331.9,y:225.6}).wait(1).to({graphics:mask_graphics_376,x:331.1,y:226.9}).wait(1).to({graphics:mask_graphics_377,x:330.3,y:228.2}).wait(1).to({graphics:mask_graphics_378,x:329.6,y:229.5}).wait(1).to({graphics:mask_graphics_379,x:328.8,y:230.8}).wait(1).to({graphics:mask_graphics_380,x:328,y:232.1}).wait(1).to({graphics:mask_graphics_381,x:327.3,y:233.4}).wait(1).to({graphics:mask_graphics_382,x:326.5,y:234.7}).wait(1).to({graphics:mask_graphics_383,x:325.7,y:236}).wait(1).to({graphics:mask_graphics_384,x:325,y:237.3}).wait(1).to({graphics:mask_graphics_385,x:324.2,y:238.6}).wait(1).to({graphics:mask_graphics_386,x:323.4,y:239.9}).wait(1).to({graphics:mask_graphics_387,x:322.7,y:241.2}).wait(1).to({graphics:mask_graphics_388,x:321.9,y:242.5}).wait(1).to({graphics:mask_graphics_389,x:321.1,y:243.8}).wait(1).to({graphics:mask_graphics_390,x:320.4,y:245}).wait(1).to({graphics:mask_graphics_391,x:319.6,y:246.3}).wait(1).to({graphics:mask_graphics_392,x:318.8,y:247.7}).wait(1).to({graphics:mask_graphics_393,x:318.1,y:248.9}).wait(1).to({graphics:mask_graphics_394,x:317.3,y:250.2}).wait(1).to({graphics:mask_graphics_395,x:316.5,y:251.5}).wait(1).to({graphics:mask_graphics_396,x:315.8,y:252.8}).wait(1).to({graphics:mask_graphics_397,x:315,y:254.1}).wait(1).to({graphics:mask_graphics_398,x:314.2,y:255.4}).wait(1).to({graphics:mask_graphics_399,x:313.5,y:256.7}).wait(1).to({graphics:mask_graphics_400,x:312.7,y:258}).wait(1).to({graphics:mask_graphics_401,x:311.9,y:259.3}).wait(1).to({graphics:mask_graphics_402,x:311.2,y:260.6}).wait(1).to({graphics:mask_graphics_403,x:310.4,y:261.9}).wait(1).to({graphics:mask_graphics_404,x:309.6,y:263.2}).wait(1).to({graphics:mask_graphics_405,x:308.9,y:264.5}).wait(1).to({graphics:mask_graphics_406,x:308.1,y:265.8}).wait(1).to({graphics:mask_graphics_407,x:307.3,y:267.1}).wait(1).to({graphics:mask_graphics_408,x:306.6,y:268.4}).wait(1).to({graphics:mask_graphics_409,x:305.8,y:269.7}).wait(1).to({graphics:mask_graphics_410,x:210.9,y:225.2}).wait(84));

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(15,1,1).p("ANG3bMgaLAu3");
	this.shape.setTransform(304.3,280.6);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(290).to({_off:false},0).wait(204));

	// arrow
	this.instance_2 = new lib.ar2("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(299.6,68.1,1,1,31.5,0,0,0.8,-0.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(485));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_150 = new cjs.Graphics().p("EgluABQQDvxmPFp0QPFp1RlDuQRRDpJyOiMhIyAvaQpXu0DoxQg");
	var mask_1_graphics_151 = new cjs.Graphics().p("EglzABrQDbxtO9qGQO8qHRsDbQRXDXKDOZMhIIAwwQpourDWxWg");
	var mask_1_graphics_152 = new cjs.Graphics().p("Egl4ACGQDJxzOzqYQOzqZRyDIQRdDEKVOQMhHcAyHQp6ujDDxcg");
	var mask_1_graphics_153 = new cjs.Graphics().p("Egl7ACiQC1x5OqqqQOqqqR4C0QRjCxKlOHMhGuAzdQqLuaCwxig");
	var mask_1_graphics_154 = new cjs.Graphics().p("Egl9AC+QCix+Ogq8QOgq8R9ChQRpCeK2N9MhF/A0yQqduRCexng");
	var mask_1_graphics_155 = new cjs.Graphics().p("Egl+ADbQCOyEOWrNQOXrOSCCOQRuCLLHNzMhFPA2GQqtuHCKxsg");
	var mask_1_graphics_156 = new cjs.Graphics().p("Egl+AD4QB7yJOMreQOLrfSIB6QRyB4LYNoMhEcA3aQq/t9B3xxg");
	var mask_1_graphics_157 = new cjs.Graphics().p("Egl9AEVQBoyMOBrwQOBrwSMBmQR2BkLpNeMhDpA4tQrPtzBjx2g");
	var mask_1_graphics_158 = new cjs.Graphics().p("Egl6AE0QBTySN2sBQN2sBSRBTQR6BRL6NTMhC0A5/QrgtoBQx6g");
	var mask_1_graphics_159 = new cjs.Graphics().p("Egl2AFSQA/yVNrsSQNqsSSVA/QR+A9MKNIMhB9A7RQrxteA9x+g");
	var mask_1_graphics_160 = new cjs.Graphics().p("EglxAFxQAryYNfsjQNfsjSYArQSCAqMZM7MhBEA8iQsBtSApyCg");
	var mask_1_graphics_161 = new cjs.Graphics().p("EglrAGRQAXycNTszQNTszSbAWQSFAWMqMwMhALA9yQsRtHAVyFg");
	var mask_1_graphics_162 = new cjs.Graphics().p("EglkAGxQADyfNHtDQNGtESeACQSIACM6MkMg/PA/BQsis7AByIg");
	var mask_1_graphics_163 = new cjs.Graphics().p("EglbAHSQgSyhM6tUQM6tUShgSQSKgSNJMXMg+SBAPQsxsvgTyKg");
	var mask_1_graphics_164 = new cjs.Graphics().p("EglRAHzQgmyjMttkQMttkSignQSNgmNZMKMg9UBBdQtBsjgnyMg");
	var mask_1_graphics_165 = new cjs.Graphics().p("EglGAIVQg7ymMgtzQMgt0Skg7QSPg7NnL+Mg8TBCpQtRsXg7yNg");
	var mask_1_graphics_166 = new cjs.Graphics().p("Egk6AI3QhPynMSuDQMSuESmhQQSQhON3LwMg7SBD0QthsJhPyPg");
	var mask_1_graphics_167 = new cjs.Graphics().p("EgkrAJZQhkyoMFuSQMEuTSnhlQSRhiOFLiMg6PBE+Qtvr7hkyRg");
	var mask_1_graphics_168 = new cjs.Graphics().p("EgkYAJ8Qh4yoL2uiQL2uiSoh6QSSh3OTLUMg5KBGJQt/rvh4yRg");
	var mask_1_graphics_169 = new cjs.Graphics().p("EgkEAKgQiNypLouxQLnuxSpiOQSSiMOiLGMg4FBHQQuNrgiNyRg");
	var mask_1_graphics_170 = new cjs.Graphics().p("EgjuALEQiiyqLZu/QLZvASoijQSSigOxK3Mg2+BIYQucrSihyRg");
	var mask_1_graphics_171 = new cjs.Graphics().p("EgjXALoQi3ypLKvOQLJvPSoi4QSSi0O/KoMg12BJeQuqrDi1yRg");
	var mask_1_graphics_172 = new cjs.Graphics().p("Egi/AMMQjMyoK6vdQK7vcSnjNQSRjJPMKZMg0rBKkQu5q2jJyQg");
	var mask_1_graphics_173 = new cjs.Graphics().p("EgimAMxQjhynKrvrQKrvqSmjiQSQjePaKKMgzgBLnQvHqmjeyPg");
	var mask_1_graphics_174 = new cjs.Graphics().p("Egh8ANoQkAykKTv+QKSv+SjkBQSMj8PsJyMgxqBNFQvZqPj9yLg");
	var mask_1_graphics_175 = new cjs.Graphics().p("EghPAOfQkfyfJ5wRQJ6wRSekgQSJkaP9JZMgvxBOgQvsp3kbyHg");
	var mask_1_graphics_176 = new cjs.Graphics().p("EgggAPXQk+yaJgwjQJgwjSak/QSDk5QPJAMgt2BP4Qv+pek6yCg");
	var mask_1_graphics_177 = new cjs.Graphics().p("A/uQPQldyUJGw0QJGw1SUleQR8lXQhInMgr4BRMQwQpElYx9g");
	var mask_1_graphics_178 = new cjs.Graphics().p("A+5RIQl8yNIrxGQIrxFSOl9QR1l1QxIMMgp4BSfQwhorl1x2g");
	var mask_1_graphics_179 = new cjs.Graphics().p("A+DSBQmayFIQxWQIQxWSGmbQRumTRAHxMgn1BTuQwxoRmUxvg");
	var mask_1_graphics_180 = new cjs.Graphics().p("A9JS7Qm5x+H0xlQH1xlR9m6QRmmxRPHXMglwBU4QxBn2mxxmg");
	var mask_1_graphics_181 = new cjs.Graphics().p("A8OT1QnXx1HZx0QHYx0R0nYQRdnPRdG8MgjpBWAQxPnbnQxdg");
	var mask_1_graphics_182 = new cjs.Graphics().p("A7QUvQn1xrG8yBQG8yDRqn2QRUntRqGgMghgBXFQxenAntxTg");
	var mask_1_graphics_183 = new cjs.Graphics().p("A6PVqQoUxgGgyQQGfyQRfoUQRJoKR3GDMgfVBYHQxrmkoKxIg");
	var mask_1_graphics_184 = new cjs.Graphics().p("A5NWlQoxxVGCycQGDydRToyQQ9onSDFnMgdIBZFQx3mIoow9g");
	var mask_1_graphics_185 = new cjs.Graphics().p("A4IXgQpOxIFkypQFlypRHpPQQxpESOFKMga5BZ/QyDlrpFwxg");
	var mask_1_graphics_186 = new cjs.Graphics().p("A3AYbQpsw7FGy0QFHy0Q6ptQQkpgSYEsMgYoBa2QyPlOpgwkg");
	var mask_1_graphics_187 = new cjs.Graphics().p("A13ZXQqJwuEoy+QEpy/QrqJQQXp9SiEOMgWVBbpQyakwp9wWg");
	var mask_1_graphics_188 = new cjs.Graphics().p("A0raSQqmweEKzIQEJzJQdqmQQIqZSsDwMgUCBcZQyjkTqZwIg");
	var mask_1_graphics_189 = new cjs.Graphics().p("AzdbOQrCwPDqzRQDrzSQNrDQP5q0S0DSMgRsBdEQysj1q1v4g");
	var mask_1_graphics_190 = new cjs.Graphics().p("AyNcJQrev+DLzaQDLzaP+reQPorQS8CzMgPVBdsQy1jWrQvpg");
	var mask_1_graphics_191 = new cjs.Graphics().p("Aw7dFQr6vuCszgQCsziPsr6QPYrrTDCVMgM9BeQQy9i4rrvYg");
	var mask_1_graphics_192 = new cjs.Graphics().p("AvneBQsVvcCMzoQCMzoPbsVQPGsGTJB2MgKkBewQzDiZsGvGg");
	var mask_1_graphics_193 = new cjs.Graphics().p("AuRe9QsvvKBsztQBszuPIswQO0sgTOBXMgIJBfMQzKh6sgu0g");
	var mask_1_graphics_194 = new cjs.Graphics().p("As4f4QtKu2BLzyQBMzzO1tKQOis6TSA3MgFtBfkQzQhas5uig");
	var mask_1_graphics_195 = new cjs.Graphics().p("EgJ6AhvQt9uKAIz4QAJz4OJt9QN3tsTWgKMgAqBf9QzWgatqt2g");
	var mask_1_graphics_196 = new cjs.Graphics().p("EgJDAjhQuttcg7z6Qg7z4NbuuQNJubTWhMMAEcBgDQg5ACg3AAQySAAtxsig");
	var mask_1_graphics_197 = new cjs.Graphics().p("EgIZAlIQvcsqh+z4Qh/z2MqvcQMZvJTTiNMAJhBf5QiRAMiOAAQwqAAtVq7g");
	var mask_1_graphics_198 = new cjs.Graphics().p("EgHpAmlQwIr3jCzyQjBzxL1wHQLnvzTMjPMAOnBfdQjoAgjfAAQvJAAs0pag");
	var mask_1_graphics_199 = new cjs.Graphics().p("EgG0An3QwwrBkFzoQkFzoK/wwQKywcTCkQMATsBexQk6A8kuAAQtvAAsOoAg");
	var mask_1_graphics_200 = new cjs.Graphics().p("EgF4Ao+QxXqJlIzcQlHzaKHxXQJ7xBS0lRMAYuBdzQmIBil7AAQsbAArgmtg");
	var mask_1_graphics_201 = new cjs.Graphics().p("EgE3Ap5Qx6pOmKzLQmKzKJNx6QJBxjSkmRMAdtBcjQnSCOnHAAQrLAAqtlgg");
	var mask_1_graphics_202 = new cjs.Graphics().p("EgDxAqpQyaoRnLy4QnMy2IRyZQIGyDSQnRMAioBbDQoYDEoTAAQp+AAp1kbg");
	var mask_1_graphics_203 = new cjs.Graphics().p("EgCmArOQy3nUoMygQoLyeHTy3QHJyfR4oPMAneBZSQpaEBpgAAQozAAo3jcg");
	var mask_1_graphics_204 = new cjs.Graphics().p("EgBWArnQzRmUpKyFQpLyFGTzPQGLy4RepMMAsOBXQQqXFFqwAAQnpAAn0ikg");
	var mask_1_graphics_205 = new cjs.Graphics().p("EgACAr0QznlTqIxnQqIxmFSzmQFMzOQ+qHMAw5BU+QrPGRsEAAQmeAAmth0g");
	var mask_1_graphics_206 = new cjs.Graphics().p("EABWAr2Qz4kRrFxGQrExFEQz4QEKzhQerBMA1bBSdQsCHktcAAQlTAAlhhLg");
	var mask_1_graphics_207 = new cjs.Graphics().p("EAC0ArrQ0IjOr/whQr/wgDN0HQDJzwP4r6MA51BPsQswI/u6AAQkEAAkPgrg");
	var mask_1_graphics_208 = new cjs.Graphics().p("EAEWArTQ0UiJs3v5Qs4v4CJ0UQCGz7PRswMA+GBMrQtYKiwhAAQiyAAi4gUg");
	var mask_1_graphics_209 = new cjs.Graphics().p("EAF8AqwQ0chFtuvOQtuvOBE0bQBD0DOmtkMBCNBJbQt6MMyQAAQhbAAhdgEg");
	var mask_1_graphics_210 = new cjs.Graphics().p("A7cbgQuiuggC0gQgB0IN5uWMBGJBF+QuUN90GACIgCAAQ0gAAuhufg");
	var mask_1_graphics_211 = new cjs.Graphics().p("A6gcuQvUtvhH0hQhG0JNKvGMBJ4BCUQtkOu0IBGQhhAFhfAAQyqAAuLsug");
	var mask_1_graphics_212 = new cjs.Graphics().p("A5aebQwEs8iM0dQiK0GMXv0MBNdA+dQs0Pc0FCLQi9AUi3AAQw/AAturFg");
	var mask_1_graphics_213 = new cjs.Graphics().p("EgYLAgCQwwsGjS0XQjO0ALiwdMBQ0A6YQsAQIz+DPQkWAtkLAAQvbAAtMpig");
	var mask_1_graphics_214 = new cjs.Graphics().p("EgWyAhiQxarOkX0OQkSz0KqxGMBT+A2JQrKQyz0ETQlqBOlcAAQt/AAsioGg");
	var mask_1_graphics_215 = new cjs.Graphics().p("EgVRAi7QyAqTlc0AQlWznJxxqMBW5AxuQqRRYznFXQm6B3mqAAQspAArzmwg");
	var mask_1_graphics_216 = new cjs.Graphics().p("EgTnAkOQykpXmgzvQmZzVI2yNMBZlAtKQpWR8zVGZQoGCqn5AAQrXAAq9lhg");
	var mask_1_graphics_217 = new cjs.Graphics().p("EgR1AlYQzFoYnjzaQnazAH4yrMBcDAocQobSczAHbQpNDlpHAAQqIAAqCkbg");
	var mask_1_graphics_218 = new cjs.Graphics().p("EgP7AmbQzinYolzBQobyoG5zHMBeQAjnQndS5yoIbQqOEnqYABQo6AApCjbg");
	var mask_1_graphics_219 = new cjs.Graphics().p("EgOjAnGQz1mrpSyuQpIyWGNzZMBfsAgMQmxTNyWJIQq6FarRAAQoGAAoSizg");
	var mask_1_graphics_220 = new cjs.Graphics().p("EgNHAntQ0Gl9qAyaQpzyCFgzpMBhAAcuQmETeyDJ0QriGRsNAAQnRAAngiPg");
	var mask_1_graphics_221 = new cjs.Graphics().p("EgLnAoRQ0WlPqsyEQqfxtEzz3MBiLAZNQlXTuxsKfQsJHLtLAAQmbAAmrhug");
	var mask_1_graphics_222 = new cjs.Graphics().p("EgKEAowQ0kkfrXxsQrKxXEE0EMBjQAVpQkpT8xWLJQssIJuLAAQllAAl0hRg");
	var mask_1_graphics_223 = new cjs.Graphics().p("EgIeApMQ0wjwsCxTQrzw+DV0PMBkMASBQj7UJw9LzQtOJLvOAAQktAAk7g4g");
	var mask_1_graphics_224 = new cjs.Graphics().p("EgG0ApjQ07i/ssw5QsbwkCm0YMBk+AOYQjMUUwiMbQttKRwUAAQj1AAj+gkg");
	var mask_1_graphics_225 = new cjs.Graphics().p("EgFHAp2Q1EiOtUwdQtEwIB30gMBloAKtQicUcwHNEQuHLaxgAAQi5AAjAgUg");
	var mask_1_graphics_226 = new cjs.Graphics().p("EgDXAqEQ1Lhct8v/QtrvrBH0mMBmKAG/QhsUjvqNrQufMoyvAAQh8AAh/gJg");
	var mask_1_graphics_227 = new cjs.Graphics().p("EgBkAqOQ1QgruivfQuRvMAW0rMBmkADQQg9UpvKORQu1N50FAAQg6AAg8gCg");
	var mask_1_graphics_228 = new cjs.Graphics().p("EgkKAbcQu1usgb0tMBm1gAhQgMUturO2QvAPI1TAHIgSAAQ1HAAvCu4g");
	var mask_1_graphics_229 = new cjs.Graphics().p("Egi6AcxQvZuKhL0uMBm8gETQAlUwuKPZQudPt1VA5QhPADhNAAQzyAAuztng");
	var mask_1_graphics_230 = new cjs.Graphics().p("EghpAeDQv8tnh80uMBm7gIEQBWUwtnP8Qt6QQ1UBrQiTALiOAAQyjAAugsZg");
	var mask_1_graphics_231 = new cjs.Graphics().p("EggXAfSQwdtDit0rMBmwgL3QCHUvtCQdQtVQy1TCdQjUAZjMAAQxZAAuKrPg");
	var mask_1_graphics_232 = new cjs.Graphics().p("EgfEAgdQw+sdjd0mMBmdgPpQC3UrscQ9QsvRT1ODPQkUAqkJABQwSAAtxqJg");
	var mask_1_graphics_233 = new cjs.Graphics().p("EgelAg8QxMsPjx0mMBmbgRLQDLUrsORLQsgRh1ODkQktAykhAAQv4ABtnpug");
	var mask_1_graphics_234 = new cjs.Graphics().p("EgeGAhaQxZsAkF0lMBmXgSuQDfUrr/RZQsRRu1ND5QlHA7k5AAQveAAtdpTg");
	var mask_1_graphics_235 = new cjs.Graphics().p("EgdnAh4QxmrxkZ0kMBmSgURQDzUqrwRmQsCR91MENQlgBFlQAAQvFAAtTo5g");
	var mask_1_graphics_236 = new cjs.Graphics().p("EgdHAiWQx0rjkt0iMBmMgV0QEHUqrhRzQrzSK1KEhQl5BQloAAQusAAtHofg");
	var mask_1_graphics_237 = new cjs.Graphics().p("EgcnAiyQyBrTlB0gMBmDgXXQEbUorRSAQrjSY1JE2QmQBbmAAAQuUAAs7oHg");
	var mask_1_graphics_238 = new cjs.Graphics().p("EgcHAjPQyOrElV0dMBl6gY7QEvUorCSMQrTSk1HFLQmoBnmYAAQt7AAsvnug");
	var mask_1_graphics_239 = new cjs.Graphics().p("EgbnAjrQyaq0lp0bMBlugadQFDUlqySYQrCSy1FFfQnAB0mvAAQtkAAsinWg");
	var mask_1_graphics_240 = new cjs.Graphics().p("EgbHAkGQymqkl90YMBlhgcAQFYUiqiSlQqzS+1CF0QnXCCnHAAQtMAAsVm/g");
	var mask_1_graphics_241 = new cjs.Graphics().p("EgamAkhQyzqTmR0WMBlTgdjQFsUgqSSxQqhTL1AGIQnvCQneAAQs1AAsGmog");
	var mask_1_graphics_242 = new cjs.Graphics().p("EgaFAk7Qy/qDml0RMBlDgfHQGAUdqBS9QqRTX08GdQoGCfn1AAQseAAr4mSg");
	var mask_1_graphics_243 = new cjs.Graphics().p("EgZkAlVQzLpym50OMBkyggqQGUUapxTJQp/Tj05GxQocCvoNAAQsIAArol8g");
	var mask_1_graphics_244 = new cjs.Graphics().p("EgZDAluQzWphnN0KMBkfgiNQGoUXpgTUQpuTv01HFQoyDAolAAQrxAArZlng");
	var mask_1_graphics_245 = new cjs.Graphics().p("EgYiAmHQzhpQnh0GMBkLgjwQG7UTpOTgQpdT60wHaQpJDRo9AAQraAArJlSg");
	var mask_1_graphics_246 = new cjs.Graphics().p("EgYBAmfQzso/n10BMBj1glSQHQUOo9TrQpLUF0sHvQpeDipVAAQrEAAq5k9g");
	var mask_1_graphics_247 = new cjs.Graphics().p("EgXoAmxQz1oxoEz+MBjmgmfQHfUMowT0Qo+UO0pH/QpuDwpoAAQqzAAqskvg");
	var mask_1_graphics_248 = new cjs.Graphics().p("EgXPAnEQz+oloTz6MBjXgnrQHuUJojT8QoxUY0lIOQp/D/p6AAQqjAAqfkgg");
	var mask_1_graphics_249 = new cjs.Graphics().p("EgW3AnWQ0GoXoiz3MBjHgo3QH9UGoWUEQojUh0iIeQqPEOqNAAQqTAAqSkSg");
	var mask_1_graphics_250 = new cjs.Graphics().p("EgWeAnoQ0OoKoyzzMBi2gqEQIMUDoIUNQoVUp0fIuQqfEdqgAAQqCAAqFkDg");
	var mask_1_graphics_251 = new cjs.Graphics().p("EgWFAn5Q0Xn8pBzvMBikgrQQIcUAn7UVQoHUx0bI+QqvEtqzAAQpyAAp3j2g");
	var mask_1_graphics_252 = new cjs.Graphics().p("EgVrAoKQ0gnupQzrMBiRgscQIrT8ntUeQn6U50XJNQq+E+rHAAQphAApojpg");
	var mask_1_graphics_253 = new cjs.Graphics().p("EgVSAobQ0nnhpgznMBh9gtnQI7T4ngUmQnrVB0TJdQrOFOraAAQpRABpajcg");
	var mask_1_graphics_254 = new cjs.Graphics().p("EgU5AorQ0vnTpvziMBhoguzQJKT0nRUuQneVJ0OJtQrdFfruAAQpAAApMjPg");
	var mask_1_graphics_255 = new cjs.Graphics().p("EgUfAo8Q03nFp+zeMBhSgv/QJZTwnDU1QnQVS0KJ8QrrFxsCAAQowAAo8jCg");
	var mask_1_graphics_256 = new cjs.Graphics().p("EgUGApLQ0/m3qNzZMBg8gxKQJpTsm2U8QnBVa0FKMQr6GCsXAAQofAAoti2g");
	var mask_1_graphics_257 = new cjs.Graphics().p("EgTtApbQ1GmpqczUMBgkgyVQJ4TmmnVFQmyVh0BKbQsIGVsrAAQoPAAoeiqg");
	var mask_1_graphics_258 = new cjs.Graphics().p("EgTTApqQ1NmbqrzOMBgLgzhQKHTimZVLQmkVpz7KrQsXGos/AAQn+AAoOifg");
	var mask_1_graphics_259 = new cjs.Graphics().p("EgS5Ap5Q1VmMq6zKMBfyg0sQKWTdmKVTQmVVwz2K6QslG7tVAAQntAAn9iTg");
	var mask_1_graphics_260 = new cjs.Graphics().p("EgSgAqHQ1bl9rJzEMBfXg13QKmTYl8VZQmGV3zxLKQszHPtqAAQncAAntiJg");
	var mask_1_graphics_261 = new cjs.Graphics().p("EgSGAqVQ1ilvrYy+MBe8g3CQK1TTluVgQl3V+zrLaQtAHjuAAAQnLAAnch/g");
	var mask_1_graphics_262 = new cjs.Graphics().p("EgRsAqjQ1plgrny5MBegg4MQLETNlfVnQloWFzlLpQtOH3uVAAQm6AAnLh0g");
	var mask_1_graphics_263 = new cjs.Graphics().p("EgRSAqwQ1wlRr2yzMBeDg5WQLTTHlQVuQlZWLzfL5QtbIMurAAQmpAAm5hrg");
	var mask_1_graphics_264 = new cjs.Graphics().p("EgQ4Aq9Q12lDsFysMBdlg6hQLiTClBV0QlKWSzZMIQtnIhvCAAQmYAAmnhhg");
	var mask_1_graphics_265 = new cjs.Graphics().p("EgQfArJQ18kzsTymMBdGg7rQLxS8kyV6Qk6WZzTMXQt0I3vZAAQmGAAmWhZg");
	var mask_1_graphics_266 = new cjs.Graphics().p("EgQFArVQ2CkksiyfMBcmg81QMAS2kiWAQkrWfzMMmQuBJNvwAAQl0AAmEhQg");
	var mask_1_graphics_267 = new cjs.Graphics().p("EgPrArhQ2IkVsxyYMBcGg9+QMPSvkUWHQkbWjzFM2QuNJkwIAAQliAAlxhIg");
	var mask_1_graphics_268 = new cjs.Graphics().p("EgPRArsQ2NkFtAyRMBbkg/IQMeSpkEWMQkMWqy+NFQuZJ7wgAAQlQAAlehBg");
	var mask_1_graphics_269 = new cjs.Graphics().p("EgO3Ar3Q2Tj2tPyKMBbChARQMtSij1WTQj8Wuy3NVQulKSw3AAQk+AAlLg5g");
	var mask_1_graphics_270 = new cjs.Graphics().p("EgOdAsCQ2YjnteyCMBaehBaQM8SbjlWYQjsW0ywNjQuwKrxQAAQksAAk3gyg");
	var mask_1_graphics_271 = new cjs.Graphics().p("EgODAsMQ2ejXtrx7MBZ5hCiQNLSUjWWcQjcW6yoNyQu7LDxqAAQkZAAkjgrg");
	var mask_1_graphics_272 = new cjs.Graphics().p("EgNpAsWQ2jjHt6xzMBZVhDqQNZSMjGWiQjMW/yhOBQvGLcyDAAQkGAAkPgmg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(150).to({graphics:mask_1_graphics_150,x:261.1,y:153.7}).wait(1).to({graphics:mask_1_graphics_151,x:259.9,y:155.5}).wait(1).to({graphics:mask_1_graphics_152,x:258.7,y:157.4}).wait(1).to({graphics:mask_1_graphics_153,x:257.4,y:159.2}).wait(1).to({graphics:mask_1_graphics_154,x:256.1,y:161}).wait(1).to({graphics:mask_1_graphics_155,x:254.8,y:162.8}).wait(1).to({graphics:mask_1_graphics_156,x:253.4,y:164.6}).wait(1).to({graphics:mask_1_graphics_157,x:252,y:166.4}).wait(1).to({graphics:mask_1_graphics_158,x:250.6,y:168.1}).wait(1).to({graphics:mask_1_graphics_159,x:249.1,y:169.8}).wait(1).to({graphics:mask_1_graphics_160,x:247.5,y:171.5}).wait(1).to({graphics:mask_1_graphics_161,x:246,y:173.2}).wait(1).to({graphics:mask_1_graphics_162,x:244.4,y:174.9}).wait(1).to({graphics:mask_1_graphics_163,x:242.7,y:176.5}).wait(1).to({graphics:mask_1_graphics_164,x:241.1,y:178}).wait(1).to({graphics:mask_1_graphics_165,x:239.3,y:179.6}).wait(1).to({graphics:mask_1_graphics_166,x:237.6,y:181.1}).wait(1).to({graphics:mask_1_graphics_167,x:235.6,y:182.6}).wait(1).to({graphics:mask_1_graphics_168,x:233.4,y:184.1}).wait(1).to({graphics:mask_1_graphics_169,x:231.1,y:185.5}).wait(1).to({graphics:mask_1_graphics_170,x:228.7,y:186.9}).wait(1).to({graphics:mask_1_graphics_171,x:226.4,y:188.3}).wait(1).to({graphics:mask_1_graphics_172,x:224,y:189.7}).wait(1).to({graphics:mask_1_graphics_173,x:221.3,y:191.1}).wait(1).to({graphics:mask_1_graphics_174,x:217.8,y:193}).wait(1).to({graphics:mask_1_graphics_175,x:214.2,y:194.9}).wait(1).to({graphics:mask_1_graphics_176,x:210.6,y:196.7}).wait(1).to({graphics:mask_1_graphics_177,x:206.8,y:198.4}).wait(1).to({graphics:mask_1_graphics_178,x:203.1,y:200.1}).wait(1).to({graphics:mask_1_graphics_179,x:199.2,y:201.7}).wait(1).to({graphics:mask_1_graphics_180,x:195.4,y:203.2}).wait(1).to({graphics:mask_1_graphics_181,x:191.4,y:204.6}).wait(1).to({graphics:mask_1_graphics_182,x:187.5,y:206}).wait(1).to({graphics:mask_1_graphics_183,x:183.4,y:207.3}).wait(1).to({graphics:mask_1_graphics_184,x:179.4,y:208.5}).wait(1).to({graphics:mask_1_graphics_185,x:175.3,y:209.6}).wait(1).to({graphics:mask_1_graphics_186,x:171.1,y:210.6}).wait(1).to({graphics:mask_1_graphics_187,x:166.9,y:211.6}).wait(1).to({graphics:mask_1_graphics_188,x:162.7,y:212.4}).wait(1).to({graphics:mask_1_graphics_189,x:158.5,y:213.2}).wait(1).to({graphics:mask_1_graphics_190,x:154.2,y:213.9}).wait(1).to({graphics:mask_1_graphics_191,x:149.8,y:214.5}).wait(1).to({graphics:mask_1_graphics_192,x:145.5,y:215}).wait(1).to({graphics:mask_1_graphics_193,x:141.1,y:215.3}).wait(1).to({graphics:mask_1_graphics_194,x:136.6,y:215.5}).wait(1).to({graphics:mask_1_graphics_195,x:127.9,y:215.7}).wait(1).to({graphics:mask_1_graphics_196,x:133.2,y:215.8}).wait(1).to({graphics:mask_1_graphics_197,x:140.7,y:216.4}).wait(1).to({graphics:mask_1_graphics_198,x:148,y:217.4}).wait(1).to({graphics:mask_1_graphics_199,x:155.4,y:218.8}).wait(1).to({graphics:mask_1_graphics_200,x:162.6,y:220.7}).wait(1).to({graphics:mask_1_graphics_201,x:169.9,y:223}).wait(1).to({graphics:mask_1_graphics_202,x:177,y:225.7}).wait(1).to({graphics:mask_1_graphics_203,x:184,y:228.8}).wait(1).to({graphics:mask_1_graphics_204,x:191,y:232.2}).wait(1).to({graphics:mask_1_graphics_205,x:197.8,y:236.1}).wait(1).to({graphics:mask_1_graphics_206,x:204.4,y:240.3}).wait(1).to({graphics:mask_1_graphics_207,x:210.8,y:244.9}).wait(1).to({graphics:mask_1_graphics_208,x:217,y:250}).wait(1).to({graphics:mask_1_graphics_209,x:222.9,y:255.4}).wait(1).to({graphics:mask_1_graphics_210,x:228.5,y:261.2}).wait(1).to({graphics:mask_1_graphics_211,x:233.7,y:265.2}).wait(1).to({graphics:mask_1_graphics_212,x:238.6,y:265.6}).wait(1).to({graphics:mask_1_graphics_213,x:243.1,y:266}).wait(1).to({graphics:mask_1_graphics_214,x:247.3,y:266.4}).wait(1).to({graphics:mask_1_graphics_215,x:251.1,y:266.7}).wait(1).to({graphics:mask_1_graphics_216,x:254.6,y:267.1}).wait(1).to({graphics:mask_1_graphics_217,x:257.7,y:267.5}).wait(1).to({graphics:mask_1_graphics_218,x:260.6,y:267.8}).wait(1).to({graphics:mask_1_graphics_219,x:262.2,y:268.1}).wait(1).to({graphics:mask_1_graphics_220,x:263.7,y:268.4}).wait(1).to({graphics:mask_1_graphics_221,x:265,y:268.7}).wait(1).to({graphics:mask_1_graphics_222,x:266,y:268.9}).wait(1).to({graphics:mask_1_graphics_223,x:266.9,y:269.2}).wait(1).to({graphics:mask_1_graphics_224,x:267.6,y:269.5}).wait(1).to({graphics:mask_1_graphics_225,x:268,y:269.8}).wait(1).to({graphics:mask_1_graphics_226,x:268.3,y:270.1}).wait(1).to({graphics:mask_1_graphics_227,x:268.3,y:270.4}).wait(1).to({graphics:mask_1_graphics_228,x:268,y:270.8}).wait(1).to({graphics:mask_1_graphics_229,x:267.9,y:271.2}).wait(1).to({graphics:mask_1_graphics_230,x:268,y:271.6}).wait(1).to({graphics:mask_1_graphics_231,x:268.3,y:272.1}).wait(1).to({graphics:mask_1_graphics_232,x:268.7,y:272.5}).wait(1).to({graphics:mask_1_graphics_233,x:268.9,y:272.9}).wait(1).to({graphics:mask_1_graphics_234,x:269,y:273.3}).wait(1).to({graphics:mask_1_graphics_235,x:269.2,y:273.7}).wait(1).to({graphics:mask_1_graphics_236,x:269.5,y:274.1}).wait(1).to({graphics:mask_1_graphics_237,x:269.8,y:274.5}).wait(1).to({graphics:mask_1_graphics_238,x:270.1,y:274.9}).wait(1).to({graphics:mask_1_graphics_239,x:270.4,y:275.3}).wait(1).to({graphics:mask_1_graphics_240,x:270.8,y:275.7}).wait(1).to({graphics:mask_1_graphics_241,x:271.3,y:276.1}).wait(1).to({graphics:mask_1_graphics_242,x:271.7,y:276.5}).wait(1).to({graphics:mask_1_graphics_243,x:272.2,y:276.9}).wait(1).to({graphics:mask_1_graphics_244,x:272.8,y:277.3}).wait(1).to({graphics:mask_1_graphics_245,x:273.3,y:277.7}).wait(1).to({graphics:mask_1_graphics_246,x:274,y:278}).wait(1).to({graphics:mask_1_graphics_247,x:274.5,y:278.4}).wait(1).to({graphics:mask_1_graphics_248,x:274.9,y:278.8}).wait(1).to({graphics:mask_1_graphics_249,x:275.4,y:279.2}).wait(1).to({graphics:mask_1_graphics_250,x:275.9,y:279.5}).wait(1).to({graphics:mask_1_graphics_251,x:276.4,y:279.9}).wait(1).to({graphics:mask_1_graphics_252,x:277,y:280.3}).wait(1).to({graphics:mask_1_graphics_253,x:277.5,y:280.6}).wait(1).to({graphics:mask_1_graphics_254,x:278.1,y:281}).wait(1).to({graphics:mask_1_graphics_255,x:278.7,y:281.4}).wait(1).to({graphics:mask_1_graphics_256,x:279.4,y:281.7}).wait(1).to({graphics:mask_1_graphics_257,x:280,y:282.1}).wait(1).to({graphics:mask_1_graphics_258,x:280.7,y:282.5}).wait(1).to({graphics:mask_1_graphics_259,x:281.4,y:282.8}).wait(1).to({graphics:mask_1_graphics_260,x:282.1,y:283.2}).wait(1).to({graphics:mask_1_graphics_261,x:282.8,y:283.6}).wait(1).to({graphics:mask_1_graphics_262,x:283.6,y:283.9}).wait(1).to({graphics:mask_1_graphics_263,x:284.4,y:284.3}).wait(1).to({graphics:mask_1_graphics_264,x:285.2,y:284.6}).wait(1).to({graphics:mask_1_graphics_265,x:286,y:285}).wait(1).to({graphics:mask_1_graphics_266,x:286.9,y:285.3}).wait(1).to({graphics:mask_1_graphics_267,x:287.7,y:285.7}).wait(1).to({graphics:mask_1_graphics_268,x:288.6,y:286.1}).wait(1).to({graphics:mask_1_graphics_269,x:289.5,y:286.4}).wait(1).to({graphics:mask_1_graphics_270,x:290.5,y:286.8}).wait(1).to({graphics:mask_1_graphics_271,x:291.4,y:287.1}).wait(1).to({graphics:mask_1_graphics_272,x:292.2,y:287.6}).wait(222));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(15,1,1).p("ANBnbQggApgfAnQjaETiuCOQk4D+iqBHQhVAjhbAdQhdAchkAWQi5Aoh6hEQgDgCgCgBQgHgEgFgDQgLgHgKgIQgBAAgBgBQgGgEgGgF");
	this.shape_1.setTransform(260.2,247.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(15,1,1).p("AC0sfQBVgUBVgNQCVgXCVgNQAegCAegCQBbgDBaAUQBgATBcAmARgsLQg3CAhFB6QgEAHgDAGQgIANgCAFQm9KZk0D8Qk3D+irBHQirBHjFArQjGArh+hRQiChTgciZQgaiSAZiTQALg9ATg6");
	this.shape_2.setTransform(275.2,207.4);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},150).to({state:[{t:this.shape_2}]},55).wait(289));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_9 = new cjs.Graphics().p("AIAdZQqGgim2nXMAlBghWQGnHkghKFQgjKUnqG6QnIGapYAAQgvAAgvgCg");
	var mask_2_graphics_10 = new cjs.Graphics().p("AIedaQqGgVm/nPMAkYgiCQGwHbgVKGQgWKUniHEQnMGupuAAIg8gBg");
	var mask_2_graphics_11 = new cjs.Graphics().p("AI8dbQqHgJnHnGMAjugiuQG5HTgIKGQgKKVnZHMQnRHEqDAAIgagBg");
	var mask_2_graphics_12 = new cjs.Graphics().p("An8WiMAjDgjaQHCHLAEKGQADKUnRHWQnRHVqUAEIgJAAQqBAAnMm6g");
	var mask_2_graphics_13 = new cjs.Graphics().p("AnmW2MAiXgkDQHLHCAQKGQAQKUnIHeQnIHeqUAQIgsABQpqAAnImmg");
	var mask_2_graphics_14 = new cjs.Graphics().p("AnQXLMAhrgktQHTG5AdKGQAcKTm/HnQm+HnqUAcQgnACgnAAQpVAAnDmRg");
	var mask_2_graphics_15 = new cjs.Graphics().p("Am5XfMAg9glVQHcGwApKEQAoKUm1HvQm1HvqTApQg4ADg4AAQpBAAm8l9g");
	var mask_2_graphics_16 = new cjs.Graphics().p("AmiXyMAgQgl9QHkGnA0KEQA1KTmrH3QmsH3qSA2QhJAGhIAAQotAAm2lrg");
	var mask_2_graphics_17 = new cjs.Graphics().p("AmLYFMAfhgmjQHsGdBBKDQBCKRmiIAQmiH/qRBCQhaAJhXAAQoZAAmxlYg");
	var mask_2_graphics_18 = new cjs.Graphics().p("AlzYYMAeygnKQHzGVBOKBQBOKQmZIHQmYIHqPBPQhqAMhnAAQoGAAmqlFg");
	var mask_2_graphics_19 = new cjs.Graphics().p("AlbYqMAeCgnuQH7GKBZKAQBbKOmOIPQmPIPqNBbQh6ARh2AAQn0AAmjk0g");
	var mask_2_graphics_20 = new cjs.Graphics().p("AlDY8MAdRgoTQIDGBBmJ+QBmKMmEIXQmEIWqMBnQiJAWiEAAQnjAAmckig");
	var mask_2_graphics_21 = new cjs.Graphics().p("AkqZNMAcfgo2QIKF3ByJ8QBzKKl6IeQl5IeqKBzQiZAciTAAQnRAAmUkSg");
	var mask_2_graphics_22 = new cjs.Graphics().p("AkRZeMAbtgpYQIRFtB+J6QCAKHlwIlQlvIlqICAQioAhihAAQnAAAmMkBg");
	var mask_2_graphics_23 = new cjs.Graphics().p("Aj4ZuMAa7gp5QIYFjCKJ4QCMKEllIsQlmIrqECNQi3AnivAAQmwAAmEjxg");
	var mask_2_graphics_24 = new cjs.Graphics().p("AjeZ+MAaHgqaQIfFZCWJ1QCYKClbIyQlaIyqCCZQjFAvi9AAQmhAAl6jig");
	var mask_2_graphics_25 = new cjs.Graphics().p("AjEaNMAZTgq5QIlFPCiJyQCkJ+lPI5QlQI5p/ClQjTA2jLAAQmRAAlxjTg");
	var mask_2_graphics_26 = new cjs.Graphics().p("AiqacMAYfgrXQIrFECuJvQCwJ7lEI/QlFI/p8CxQjhA+jZAAQmBAAlojEg");
	var mask_2_graphics_27 = new cjs.Graphics().p("AiPaqMAXpgr0QIxE5C6JsQC9J3k6JGQk6JFp4C9QjuBHjnAAQlyAAlei3g");
	var mask_2_graphics_28 = new cjs.Graphics().p("Ah0a4MAW0gsRQI3EvDFJoQDIJ0kuJLQkvJLp0DJQj8BQj1AAQljAAlTipg");
	var mask_2_graphics_29 = new cjs.Graphics().p("AhZbFMAV9gsrQI9EjDRJkQDVJwkkJRQkjJQpxDVQkIBakDAAQlUAAlJicg");
	var mask_2_graphics_30 = new cjs.Graphics().p("Ag+bSMAVHgtGQJCEZDdJgQDgJskYJWQkYJWpsDgQkVBlkRAAQlGAAk+iQg");
	var mask_2_graphics_31 = new cjs.Graphics().p("AgibeMAUQgtfQJHEODoJbQDsJokMJbQkNJcpoDsQkhBvkeAAQk4AAkziEg");
	var mask_2_graphics_32 = new cjs.Graphics().p("AgGbqMATYgt3QJMECD0JXQD4JkkCJgQkBJgpjD4QktB6ksAAQkqAAknh4g");
	var mask_2_graphics_33 = new cjs.Graphics().p("AAVb1MAShguOQJRD3D/JTQEDJej1JlQj2JlpeEEQk5CFk6AAQkbAAkdhtg");
	var mask_2_graphics_34 = new cjs.Graphics().p("AAxcAMARpgukQJVDsELJNQEPJZjqJqQjqJppaEQQlDCSlJAAQkNAAkRhjg");
	var mask_2_graphics_35 = new cjs.Graphics().p("ABOcKMAQwgu4QJaDgEVJIQEaJUjeJuQjeJupUEaQlPCflWAAQkAAAkEhZg");
	var mask_2_graphics_36 = new cjs.Graphics().p("ABrcUMAP2gvMQJeDUEhJDQElJPjSJxQjSJypPEmQlZCsllAAQjyAAj3hPg");
	var mask_2_graphics_37 = new cjs.Graphics().p("ACIcdMAO8gvfQJiDJEsI+QExJIjHJ2QjGJ2pJExQljC5l0AAQjkAAjqhGg");
	var mask_2_graphics_38 = new cjs.Graphics().p("AClcmMAODgvxQJlC+E2I3QE8JDi6J5Qi6J6pDE8QltDHmDAAQjWAAjdg9g");
	var mask_2_graphics_39 = new cjs.Graphics().p("ADCcuMANJgwBQJpCyFBIxQFHI9ivJ9QiuJ8o9FHQl2DWmSAAQjJAAjPg1g");
	var mask_2_graphics_40 = new cjs.Graphics().p("ADgc2MAMNgwRQJtCmFLIrQFSI3iiKAQiiKAo2FSQmADkmhAAQi7AAjBgtg");
	var mask_2_graphics_41 = new cjs.Graphics().p("AD9c9MALTgwfQJwCaFWIlQFcIwiWKDQiVKDowFcQmJD1mxAAQitAAizgng");
	var mask_2_graphics_42 = new cjs.Graphics().p("AEbdDMAKYgwsQJyCPFhIeQFnIqiKKFQiJKFoqFnQmREFnBAAQieAAilghg");
	var mask_2_graphics_43 = new cjs.Graphics().p("AE5dJMAJcgw4QJ1CDFrIXQFxIjh9KHQh9KIoiFyQmaEVnRAAQiQAAiWgbg");
	var mask_2_graphics_44 = new cjs.Graphics().p("AFXdPMAIhgxDQJ3B2F1IRQF8IbhxKKQhxKKobF8QmhEmniAAQiCAAiHgVg");
	var mask_2_graphics_45 = new cjs.Graphics().p("AF1dTMAHlgxMQJ6BqF+IJQGGIVhkKLQhlKNoUGGQmoE3nzAAQhzAAh4gRg");
	var mask_2_graphics_46 = new cjs.Graphics().p("AGUdYMAGogxWQJ8BfGIICQGQINhYKNQhYKOoMGQQmvFJoGAAQhkAAhngMg");
	var mask_2_graphics_47 = new cjs.Graphics().p("AGydbMAFsgxcQJ9BSGTH6QGaIGhMKOQhLKQoFGaQm1FboYAAQhVAAhYgJg");
	var mask_2_graphics_48 = new cjs.Graphics().p("AHQdeMAExgxjQJ+BHGcHyQGjH+g/KQQg/KRn8GjQm8FuorAAQhFAAhIgGg");
	var mask_2_graphics_49 = new cjs.Graphics().p("AHvdhMADzgxoQKAA6GlHqQGuH2gzKRQgyKSn1GtQnBGBo+AAQg2AAg3gDg");
	var mask_2_graphics_50 = new cjs.Graphics().p("AINdjMAC3gxsQKBAuGuHiQG3HtgmKSQgmKTnsG3QnGGUpTAAQgmAAgmgBg");
	var mask_2_graphics_51 = new cjs.Graphics().p("AIrdkMAB7gxvQKCAiG3HaQHAHlgZKSQgaKUnkHAQnLGppnAAIgrgBg");
	var mask_2_graphics_52 = new cjs.Graphics().p("AJKdlMAA+gxxQKCAWHAHRQHJHcgMKTQgNKUncHJQnPG+p9AAIgIAAg");
	var mask_2_graphics_53 = new cjs.Graphics().p("AJq0MQKCAJHJHJQHSHTAAKTQgBKUnSHSQnKHKqCAJg");
	var mask_2_graphics_54 = new cjs.Graphics().p("AJL0MQKDgDHRHAQHbHLAMKTQANKUnKHaQnBHSqCAWg");
	var mask_2_graphics_55 = new cjs.Graphics().p("AIt0KQKCgQHaG4QHkHBAZKSQAYKUnAHjQm4HbqBAhg");
	var mask_2_graphics_56 = new cjs.Graphics().p("AIP0IQKBgcHjGvQHsG3AlKSQAlKTm3HsQmvHjqAAug");
	var mask_2_graphics_57 = new cjs.Graphics().p("AHw0FQKBgoHrGlQH0GvAyKRQAyKSmuH0QmmHrp/A6g");
	var mask_2_graphics_58 = new cjs.Graphics().p("AHS0BQKAg0HyGbQH9GlA+KQQA+KRmkH9QmcHyp+BGg");
	var mask_2_graphics_59 = new cjs.Graphics().p("AGzz9QJ/hAH6GSQIFGbBKKPQBLKQmaIEQmTH6p9BSg");
	var mask_2_graphics_60 = new cjs.Graphics().p("AGHz0QJ9hSIFGEQIQGMBdKNQBdKNmMIPQmFIGp6Bkg");
	var mask_2_graphics_61 = new cjs.Graphics().p("AFbzqQJ7hjIPF1QIbF+BvKJQBvKLl+IaQl2IQp3B1g");
	var mask_2_graphics_62 = new cjs.Graphics().p("AEvzeQJ4h1IaFnQIkFuCBKHQCBKHluIkQlnIap0CHg");
	var mask_2_graphics_63 = new cjs.Graphics().p("AEEzQQJ0iHIkFYQIuFgCTKDQCTKClfIvQlYIjpwCZg");
	var mask_2_graphics_64 = new cjs.Graphics().p("ADZzBQJwiXItFIQI4FQCkJ/QClJ+lPI4QlJItpsCqg");
	var mask_2_graphics_65 = new cjs.Graphics().p("ACuyvQJripI2E5QJBFAC3J6QC2J5lAJBQk5I2pnC7g");
	var mask_2_graphics_66 = new cjs.Graphics().p("ACDycQJni6I+EpQJKEwDIJ1QDHJ0kvJKQkpI+piDMg");
	var mask_2_graphics_67 = new cjs.Graphics().p("ABZyHQJhjLJHEZQJSEgDZJvQDZJukfJSQkaJGpbDdg");
	var mask_2_graphics_68 = new cjs.Graphics().p("AAvxxQJcjbJOEIQJZEQDrJpQDqJokPJZQkJJOpVDtg");
	var mask_2_graphics_69 = new cjs.Graphics().p("AAGxYQJVjsJVD4QJhD+D8JjQD7Jhj+JhQj5JVpOD9g");
	var mask_2_graphics_70 = new cjs.Graphics().p("Agiw+QJOj9JbDoQJoDtEMJbQEMJbjsJnQjpJcpHEOg");
	var mask_2_graphics_71 = new cjs.Graphics().p("AhKwjQJGkMJiDWQJuDdEdJTQEdJTjcJuQjXJipAEdg");
	var mask_2_graphics_72 = new cjs.Graphics().p("AhxwFQI+kdJoDGQJ0DLEtJLQEtJLjLJ0QjGJno3Eug");
	var mask_2_graphics_73 = new cjs.Graphics().p("AiZvmQI3ktJtC1QJ5C5E9JDQE+JCi5J5Qi2JtouE9g");
	var mask_2_graphics_74 = new cjs.Graphics().p("Ai/vGQIuk8JyCkQJ+CoFNI5QFNI5inJ+QikJyomFNg");
	var mask_2_graphics_75 = new cjs.Graphics().p("AjlujQIllMJ2CSQKDCWFdIxQFcIviVKDQiTJ2ocFbg");
	var mask_2_graphics_76 = new cjs.Graphics().p("AkKuAQIclaJ5CAQKHCFFsImQFsImiDKGQiCJ6oSFrg");
	var mask_2_graphics_77 = new cjs.Graphics().p("AkutaQIRlqJ9BvQKLBzF7IcQF7IbhyKKQhvJ9oJF5g");
	var mask_2_graphics_78 = new cjs.Graphics().p("AlSszQIIl5J/BeQKNBgGKISQGLIQhgKNQheKAn+GHg");
	var mask_2_graphics_79 = new cjs.Graphics().p("Al1sLQH9mHKCBMQKQBOGYIHQGZIFhOKPQhMKDnzGVg");
	var mask_2_graphics_80 = new cjs.Graphics().p("AmYrhQHzmVKEA6QKRA8GnH7QGnH7g8KQQg6KEnnGjg");
	var mask_2_graphics_81 = new cjs.Graphics().p("Am5q2QHnmjKFAoQKTAqG1HvQG0HwgpKRQgpKGnbGwg");
	var mask_2_graphics_82 = new cjs.Graphics().p("AnaqKQHbmvKGAWQKUAXHCHjQHDHjgYKSQgWKHnPG9g");
	var mask_2_graphics_83 = new cjs.Graphics().p("An6pcQHQm9KFAFQKVAFHPHWQHQHWgFKTQgFKHnDHKg");
	var mask_2_graphics_84 = new cjs.Graphics().p("AoZotQHDnJKFgOQKVgNHcHJQHcHKAOKSQANKHm2HWg");
	var mask_2_graphics_85 = new cjs.Graphics().p("Ao4n8QG3nWKEggQKUgfHpG8QHpG8AfKSQAfKGmoHig");
	var mask_2_graphics_86 = new cjs.Graphics().p("ApWnLQGqnhKDgyQKTgxH1GuQH1GuAyKRQAxKFmcHug");
	var mask_2_graphics_87 = new cjs.Graphics().p("ApymYQGbntKDhDQKQhEIBGgQIBGgBEKQQBDKDmOH5g");
	var mask_2_graphics_88 = new cjs.Graphics().p("AqOlkQGOn4KAhVQKOhWIMGSQIMGRBXKOQBUKBl/IEg");
	var mask_2_graphics_89 = new cjs.Graphics().p("AqpkvQGAoDJ9hnQKMhoIXGDQIXGEBoKKQBnJ/lxIOg");
	var mask_2_graphics_90 = new cjs.Graphics().p("ArDj5QFxoNJ7h5QKJh6IhF1QIhF0B7KHQB4J8liIYg");
	var mask_2_graphics_91 = new cjs.Graphics().p("ArcjBQFioYJ3iKQKGiMIrFlQIsFlCMKEQCKJ4lUIig");
	var mask_2_graphics_92 = new cjs.Graphics().p("Ar0iJQFUohJyicQKCieI1FWQI1FVCeKAQCbJ0lEIrg");
	var mask_2_graphics_93 = new cjs.Graphics().p("AsLhQQFEoqJvitQJ8iwI/FGQI+FGCwJ7QCsJwk0Izg");
	var mask_2_graphics_94 = new cjs.Graphics().p("AshgWQE1ozJpi+QJ4jBJHE2QJIE1DBJ2QC9JrkkI8g");
	var mask_2_graphics_95 = new cjs.Graphics().p("As2AkQEmo7JkjPQJyjSJPElQJQEmDTJwQDOJmkVJEg");
	var mask_2_graphics_96 = new cjs.Graphics().p("AtJBgQEVpDJejgQJsjjJYEVQJXEVDkJqQDgJfkFJMg");
	var mask_2_graphics_97 = new cjs.Graphics().p("AtcCcQEGpKJXjwQJmj1JfEEQJfEFD1JjQDwJZj0JTg");
	var mask_2_graphics_98 = new cjs.Graphics().p("AttDaQD1pRJSkCQJdkFJmDzQJmD0EGJcQEBJSjkJZg");
	var mask_2_graphics_99 = new cjs.Graphics().p("At9EYQDlpYJKkSQJWkWJsDiQJtDjEWJVQESJLjUJfg");
	var mask_2_graphics_100 = new cjs.Graphics().p("AuMFWQDUpeJCkhQJOknJzDRQJzDREnJNQEhJDjCJlg");
	var mask_2_graphics_101 = new cjs.Graphics().p("AuZGVQDDpjI6kyQJFk3J4DAQJ5DAE3JFQExI6ixJqg");
	var mask_2_graphics_102 = new cjs.Graphics().p("AumHVQCyppIylBQI8lHJ+CuQJ9CuFHI8QFBIzigJug");
	var mask_2_graphics_103 = new cjs.Graphics().p("AuxIVQChptIolRQI0lXKBCdQKCCcFXIzQFRIpiPJzg");
	var mask_2_graphics_104 = new cjs.Graphics().p("Au7JWQCPpyIflfQIqlnKGCLQKGCKFmIpQFgIgh9J2g");
	var mask_2_graphics_105 = new cjs.Graphics().p("AvEKXQB+p2IVluQIgl2KJB5QKKB4F2IfQFuIWhsJ6g");
	var mask_2_graphics_106 = new cjs.Graphics().p("AvLLXQBsp5ILl9QIVmEKNBmQKMBnGFIUQF9IMhaJ8g");
	var mask_2_graphics_107 = new cjs.Graphics().p("AvQMIQBgp8ICmHQINmPKPBZQKOBZGQIMQGIIEhOJ+g");
	var mask_2_graphics_108 = new cjs.Graphics().p("AvUM4QBSp9H7mRQIFmaKQBLQKQBMGaIEQGSH7hAKAg");
	var mask_2_graphics_109 = new cjs.Graphics().p("AvXNpQBFp/HymbQH8mlKSA+QKRA+GlH8QGdHzgzKAg");
	var mask_2_graphics_110 = new cjs.Graphics().p("AvaOaQA4qAHqmmQHzmvKTAxQKSAxGvHyQGnHrgmKBg");
	var mask_2_graphics_111 = new cjs.Graphics().p("AvcPLQArqBHhmwQHqm5KUAjQKTAkG5HpQGxHigZKCg");
	var mask_2_graphics_112 = new cjs.Graphics().p("AvdP8QAeqCHXm5QHjnDKSAVQKUAWHDHhQG7HYgMKCg");
	var mask_2_graphics_113 = new cjs.Graphics().p("AveQtQARqCHOnDQHZnNKTAIQKUAIHNHXQHEHQACKCg");
	var mask_2_graphics_114 = new cjs.Graphics().p("AoVABQHPnVKTgGQKUgFHXHPQHNHEAPKDMgxyAAaQAEqDHFnNg");
	var mask_2_graphics_115 = new cjs.Graphics().p("AorAIQHGneKSgTQKUgTHgHFQHWG7AdKCMgxxABbQgKqCG8nXg");
	var mask_2_graphics_116 = new cjs.Graphics().p("ApAAQQG7nnKTghQKTggHpG7QHfGxAqKBMgxuACdQgXqCGyngg");
	var mask_2_graphics_117 = new cjs.Graphics().p("ApLAVQG3ntKSgnQKTgoHtG2QHkGsAwKBMgxsAC+QgdqBGsnkg");
	var mask_2_graphics_118 = new cjs.Graphics().p("ApVAZQGxnxKSgvQKSguHyGwQHpGnA2KAMgxpADhQgkqCGnnog");
	var mask_2_graphics_119 = new cjs.Graphics().p("ApfAdQGsn1KRg2QKSg1H2GrQHtGiA+J/MgxnAECQgrqBGintg");
	var mask_2_graphics_120 = new cjs.Graphics().p("ApoAiQGmn6KQg8QKRg9H7GmQHyGcBEJ/MgxjAEjQgyqAGdnxg");
	var mask_2_graphics_121 = new cjs.Graphics().p("ApyAnQGhn/KPhDQKRhDH/GgQH2GXBLJ+MgxgAFFQg4qAGXn1g");
	var mask_2_graphics_122 = new cjs.Graphics().p("Ap7AsQGboDKPhLQKQhKIDGbQH6GSBSJ9MgxcAFmQg/p/GSn5g");
	var mask_2_graphics_123 = new cjs.Graphics().p("AqEAwQGWoHKNhRQKPhRIIGVQH+GMBZJ8MgxYAGIQhGp+GNn+g");
	var mask_2_graphics_124 = new cjs.Graphics().p("AqSA4QGNoNKMhdQKNhcIPGMQIFGEBjJ6MgxQAG+QhRp9GEoFg");
	var mask_2_graphics_125 = new cjs.Graphics().p("AqfBBQGEoVKKhnQKMhnIVGDQILF7BuJ4MgxIAHzQhcp7F8oLg");
	var mask_2_graphics_126 = new cjs.Graphics().p("AqsBJQF7oaKJhzQKJhyIcF6QIRFyB5J3Mgw/AInQhmp5FyoSg");
	var mask_2_graphics_127 = new cjs.Graphics().p("Aq4BSQFyohKGh9QKIh9IiFxQIXFpCEJ0Mgw1AJdQhxp4FpoYg");
	var mask_2_graphics_128 = new cjs.Graphics().p("ArEBcQFpooKEiIQKFiIIpFoQIdFhCOJxMgwqAKRQh8p2Fgodg");
	var mask_2_graphics_129 = new cjs.Graphics().p("ArPBlQFfotKCiTQKDiTIuFfQIjFXCZJvMgweALFQiHp0FXojg");
	var mask_2_graphics_130 = new cjs.Graphics().p("ArZBwQFWozJ/ieQKBidI0FWQIoFOCjJsMgwTAL4QiQpyFOoog");
	var mask_2_graphics_131 = new cjs.Graphics().p("ArjB6QFNo4J9ioQJ+inI5FMQIuFGCtJpMgwHAMpQiapvFFoug");
	var mask_2_graphics_132 = new cjs.Graphics().p("ArsCFQFEo9J6iyQJ7iyI+FDQI0E9C2JmMgv5ANbQikpsE8o0g");
	var mask_2_graphics_133 = new cjs.Graphics().p("Ar1CRQE7pDJ3i9QJ4i8JEE6QI5E0DAJjMgvrAONQivpqEzo4g");
	var mask_2_graphics_134 = new cjs.Graphics().p("Ar9CcQExpIJ0jGQJ2jHJIExQI+EqDKJgMgvcAO+Qi5pnEqo9g");
	var mask_2_graphics_135 = new cjs.Graphics().p("AsECoQEnpNJxjRQJyjQJOEnQJCEhDUJdMgvMAPvQjDpkEhpCg");
	var mask_2_graphics_136 = new cjs.Graphics().p("AsLC0QEepSJtjbQJvjaJSEdQJHEYDeJZMgu8AQgQjMpgEXpHg");
	var mask_2_graphics_137 = new cjs.Graphics().p("AsSDAQEVpWJqjlQJrjlJXEUQJLEODoJWMgurARRQjWpeENpLg");
	var mask_2_graphics_138 = new cjs.Graphics().p("AsXDMQEKpaJmjvQJojvJbEKQJQEFDxJSMguZASBQjgpaEFpQg");
	var mask_2_graphics_139 = new cjs.Graphics().p("AsdDZQEBpfJjj4QJjj5JgEAQJUD7D7JPMguHASwQjppWD6pUg");
	var mask_2_graphics_140 = new cjs.Graphics().p("AshDmQD3pjJekDQJfkCJkD2QJYDyEFJKMgtzATgQjzpSDxpYg");
	var mask_2_graphics_141 = new cjs.Graphics().p("AslDzQDtpnJakMQJbkNJoDtQJcDoEOJGMgtfAUPQj9pODopcg");
	var mask_2_graphics_142 = new cjs.Graphics().p("AspEBQDjprJWkWQJXkWJrDiQJgDeEXJCMgtJAU+QkHpKDepfg");
	var mask_2_graphics_143 = new cjs.Graphics().p("AssEOQDZpuJSkgQJSkgJvDZQJjDUEhI9Mgs0AVtQkQpGDUpjg");
	var mask_2_graphics_144 = new cjs.Graphics().p("AsuEcQDPpyJNkpQJNkqJzDPQJmDKEqI5MgsdAWbQkZpCDKpmg");
	var mask_2_graphics_145 = new cjs.Graphics().p("AswEqQDFp1JJkzQJHkzJ2DEQJqDBEzIzMgsFAXKQkjo9DApqg");
	var mask_2_graphics_146 = new cjs.Graphics().p("AsxE4QC6p4JEk8QJDk9J5C7QJtC2E8IwMgrtAX1Qkso4C2ptg");
	var mask_2_graphics_147 = new cjs.Graphics().p("AsyFHQCxp8I+lFQI+lGJ8CwQJwCtFFIqMgrVAYjQk1o0Cspvg");
	var mask_2_graphics_148 = new cjs.Graphics().p("AsyFWQCmp/I6lPQI4lOJ/ClQJyCjFPIlMgq8AZPQk+ouCipyg");
	var mask_2_graphics_149 = new cjs.Graphics().p("AsxFkQCbqAI0lZQIzlYKCCcQJ1CYFXIgMgqhAZ8QlHoqCYp1g");
	var mask_2_graphics_150 = new cjs.Graphics().p("AswF0QCSqEIulhQItlhKECRQJ4COFgIaMgqGAaoQlQokCNp3g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_2_graphics_9,x:219,y:188.3}).wait(1).to({graphics:mask_2_graphics_10,x:218.9,y:188.3}).wait(1).to({graphics:mask_2_graphics_11,x:218.9,y:188.4}).wait(1).to({graphics:mask_2_graphics_12,x:218.9,y:188.4}).wait(1).to({graphics:mask_2_graphics_13,x:218.9,y:188.4}).wait(1).to({graphics:mask_2_graphics_14,x:218.8,y:188.4}).wait(1).to({graphics:mask_2_graphics_15,x:218.8,y:188.4}).wait(1).to({graphics:mask_2_graphics_16,x:218.8,y:188.5}).wait(1).to({graphics:mask_2_graphics_17,x:218.8,y:188.5}).wait(1).to({graphics:mask_2_graphics_18,x:218.8,y:188.5}).wait(1).to({graphics:mask_2_graphics_19,x:218.8,y:188.6}).wait(1).to({graphics:mask_2_graphics_20,x:218.8,y:188.6}).wait(1).to({graphics:mask_2_graphics_21,x:218.8,y:188.7}).wait(1).to({graphics:mask_2_graphics_22,x:218.8,y:188.7}).wait(1).to({graphics:mask_2_graphics_23,x:218.8,y:188.7}).wait(1).to({graphics:mask_2_graphics_24,x:218.8,y:188.8}).wait(1).to({graphics:mask_2_graphics_25,x:218.8,y:188.8}).wait(1).to({graphics:mask_2_graphics_26,x:218.8,y:188.8}).wait(1).to({graphics:mask_2_graphics_27,x:218.8,y:188.9}).wait(1).to({graphics:mask_2_graphics_28,x:218.8,y:188.9}).wait(1).to({graphics:mask_2_graphics_29,x:218.8,y:188.9}).wait(1).to({graphics:mask_2_graphics_30,x:218.8,y:189}).wait(1).to({graphics:mask_2_graphics_31,x:218.8,y:189}).wait(1).to({graphics:mask_2_graphics_32,x:218.7,y:189}).wait(1).to({graphics:mask_2_graphics_33,x:218.7,y:189}).wait(1).to({graphics:mask_2_graphics_34,x:218.7,y:189.1}).wait(1).to({graphics:mask_2_graphics_35,x:218.7,y:189.1}).wait(1).to({graphics:mask_2_graphics_36,x:218.7,y:189.1}).wait(1).to({graphics:mask_2_graphics_37,x:218.6,y:189.1}).wait(1).to({graphics:mask_2_graphics_38,x:218.6,y:189.1}).wait(1).to({graphics:mask_2_graphics_39,x:218.6,y:189.1}).wait(1).to({graphics:mask_2_graphics_40,x:218.6,y:189.1}).wait(1).to({graphics:mask_2_graphics_41,x:218.5,y:189.2}).wait(1).to({graphics:mask_2_graphics_42,x:218.5,y:189.2}).wait(1).to({graphics:mask_2_graphics_43,x:218.5,y:189.2}).wait(1).to({graphics:mask_2_graphics_44,x:218.5,y:189.2}).wait(1).to({graphics:mask_2_graphics_45,x:218.4,y:189.2}).wait(1).to({graphics:mask_2_graphics_46,x:218.4,y:189.2}).wait(1).to({graphics:mask_2_graphics_47,x:218.4,y:189.2}).wait(1).to({graphics:mask_2_graphics_48,x:218.4,y:189.2}).wait(1).to({graphics:mask_2_graphics_49,x:218.3,y:189.2}).wait(1).to({graphics:mask_2_graphics_50,x:218.3,y:189.2}).wait(1).to({graphics:mask_2_graphics_51,x:218.3,y:189.3}).wait(1).to({graphics:mask_2_graphics_52,x:218.3,y:189.3}).wait(1).to({graphics:mask_2_graphics_53,x:218.3,y:189.3}).wait(1).to({graphics:mask_2_graphics_54,x:218.3,y:189.3}).wait(1).to({graphics:mask_2_graphics_55,x:218.3,y:189.2}).wait(1).to({graphics:mask_2_graphics_56,x:218.3,y:189.2}).wait(1).to({graphics:mask_2_graphics_57,x:218.3,y:189.1}).wait(1).to({graphics:mask_2_graphics_58,x:218.3,y:188.9}).wait(1).to({graphics:mask_2_graphics_59,x:218.3,y:188.7}).wait(1).to({graphics:mask_2_graphics_60,x:218.3,y:188.5}).wait(1).to({graphics:mask_2_graphics_61,x:218.4,y:188.1}).wait(1).to({graphics:mask_2_graphics_62,x:218.4,y:187.7}).wait(1).to({graphics:mask_2_graphics_63,x:218.4,y:187.3}).wait(1).to({graphics:mask_2_graphics_64,x:218.4,y:186.8}).wait(1).to({graphics:mask_2_graphics_65,x:218.5,y:186.2}).wait(1).to({graphics:mask_2_graphics_66,x:218.5,y:185.6}).wait(1).to({graphics:mask_2_graphics_67,x:218.5,y:184.9}).wait(1).to({graphics:mask_2_graphics_68,x:218.5,y:184.1}).wait(1).to({graphics:mask_2_graphics_69,x:218.6,y:183.3}).wait(1).to({graphics:mask_2_graphics_70,x:218.6,y:182.5}).wait(1).to({graphics:mask_2_graphics_71,x:218.6,y:181.5}).wait(1).to({graphics:mask_2_graphics_72,x:218.6,y:180.6}).wait(1).to({graphics:mask_2_graphics_73,x:218.6,y:179.5}).wait(1).to({graphics:mask_2_graphics_74,x:218.6,y:178.5}).wait(1).to({graphics:mask_2_graphics_75,x:218.6,y:177.3}).wait(1).to({graphics:mask_2_graphics_76,x:218.6,y:176.2}).wait(1).to({graphics:mask_2_graphics_77,x:218.6,y:174.9}).wait(1).to({graphics:mask_2_graphics_78,x:218.6,y:173.6}).wait(1).to({graphics:mask_2_graphics_79,x:218.5,y:172.3}).wait(1).to({graphics:mask_2_graphics_80,x:218.5,y:170.9}).wait(1).to({graphics:mask_2_graphics_81,x:218.5,y:169.5}).wait(1).to({graphics:mask_2_graphics_82,x:218.6,y:168}).wait(1).to({graphics:mask_2_graphics_83,x:218.6,y:166.5}).wait(1).to({graphics:mask_2_graphics_84,x:218.6,y:164.9}).wait(1).to({graphics:mask_2_graphics_85,x:218.6,y:163.3}).wait(1).to({graphics:mask_2_graphics_86,x:218.7,y:161.7}).wait(1).to({graphics:mask_2_graphics_87,x:218.7,y:160}).wait(1).to({graphics:mask_2_graphics_88,x:218.8,y:158.3}).wait(1).to({graphics:mask_2_graphics_89,x:218.9,y:156.5}).wait(1).to({graphics:mask_2_graphics_90,x:218.9,y:154.7}).wait(1).to({graphics:mask_2_graphics_91,x:219,y:152.9}).wait(1).to({graphics:mask_2_graphics_92,x:219,y:151}).wait(1).to({graphics:mask_2_graphics_93,x:219.1,y:149.1}).wait(1).to({graphics:mask_2_graphics_94,x:219.1,y:147.2}).wait(1).to({graphics:mask_2_graphics_95,x:219.2,y:145.3}).wait(1).to({graphics:mask_2_graphics_96,x:219.2,y:143.3}).wait(1).to({graphics:mask_2_graphics_97,x:219.3,y:141.3}).wait(1).to({graphics:mask_2_graphics_98,x:219.3,y:139.2}).wait(1).to({graphics:mask_2_graphics_99,x:219.3,y:137.2}).wait(1).to({graphics:mask_2_graphics_100,x:219.4,y:135.1}).wait(1).to({graphics:mask_2_graphics_101,x:219.4,y:133}).wait(1).to({graphics:mask_2_graphics_102,x:219.4,y:130.9}).wait(1).to({graphics:mask_2_graphics_103,x:219.4,y:128.8}).wait(1).to({graphics:mask_2_graphics_104,x:219.5,y:126.6}).wait(1).to({graphics:mask_2_graphics_105,x:219.5,y:124.5}).wait(1).to({graphics:mask_2_graphics_106,x:219.5,y:122.2}).wait(1).to({graphics:mask_2_graphics_107,x:219.5,y:120.6}).wait(1).to({graphics:mask_2_graphics_108,x:219.5,y:119}).wait(1).to({graphics:mask_2_graphics_109,x:219.5,y:117.3}).wait(1).to({graphics:mask_2_graphics_110,x:219.5,y:115.7}).wait(1).to({graphics:mask_2_graphics_111,x:219.5,y:114.1}).wait(1).to({graphics:mask_2_graphics_112,x:219.6,y:112.4}).wait(1).to({graphics:mask_2_graphics_113,x:219.6,y:110.8}).wait(1).to({graphics:mask_2_graphics_114,x:219.6,y:110.5}).wait(1).to({graphics:mask_2_graphics_115,x:219.6,y:112.1}).wait(1).to({graphics:mask_2_graphics_116,x:219.5,y:113.8}).wait(1).to({graphics:mask_2_graphics_117,x:219.4,y:114.6}).wait(1).to({graphics:mask_2_graphics_118,x:219.3,y:115.5}).wait(1).to({graphics:mask_2_graphics_119,x:219.3,y:116.3}).wait(1).to({graphics:mask_2_graphics_120,x:219.2,y:117.1}).wait(1).to({graphics:mask_2_graphics_121,x:219.1,y:118}).wait(1).to({graphics:mask_2_graphics_122,x:219,y:118.8}).wait(1).to({graphics:mask_2_graphics_123,x:218.9,y:119.6}).wait(1).to({graphics:mask_2_graphics_124,x:218.7,y:121}).wait(1).to({graphics:mask_2_graphics_125,x:218.5,y:122.3}).wait(1).to({graphics:mask_2_graphics_126,x:218.3,y:123.6}).wait(1).to({graphics:mask_2_graphics_127,x:218.1,y:125}).wait(1).to({graphics:mask_2_graphics_128,x:217.8,y:126.3}).wait(1).to({graphics:mask_2_graphics_129,x:217.5,y:127.6}).wait(1).to({graphics:mask_2_graphics_130,x:217.2,y:129}).wait(1).to({graphics:mask_2_graphics_131,x:216.9,y:130.3}).wait(1).to({graphics:mask_2_graphics_132,x:216.5,y:131.7}).wait(1).to({graphics:mask_2_graphics_133,x:216.2,y:133.1}).wait(1).to({graphics:mask_2_graphics_134,x:215.8,y:134.4}).wait(1).to({graphics:mask_2_graphics_135,x:215.4,y:135.8}).wait(1).to({graphics:mask_2_graphics_136,x:215,y:137.1}).wait(1).to({graphics:mask_2_graphics_137,x:214.6,y:138.5}).wait(1).to({graphics:mask_2_graphics_138,x:214.1,y:139.8}).wait(1).to({graphics:mask_2_graphics_139,x:213.7,y:141.1}).wait(1).to({graphics:mask_2_graphics_140,x:213.2,y:142.4}).wait(1).to({graphics:mask_2_graphics_141,x:212.7,y:143.7}).wait(1).to({graphics:mask_2_graphics_142,x:212.1,y:145}).wait(1).to({graphics:mask_2_graphics_143,x:211.6,y:146.3}).wait(1).to({graphics:mask_2_graphics_144,x:211,y:147.6}).wait(1).to({graphics:mask_2_graphics_145,x:210.4,y:148.9}).wait(1).to({graphics:mask_2_graphics_146,x:209.8,y:150.1}).wait(1).to({graphics:mask_2_graphics_147,x:209.2,y:151.4}).wait(1).to({graphics:mask_2_graphics_148,x:208.6,y:152.6}).wait(1).to({graphics:mask_2_graphics_149,x:207.9,y:153.9}).wait(1).to({graphics:mask_2_graphics_150,x:207.3,y:155.1}).wait(344));

	// Layer 5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(15,1,1).p("ARLrEQg7gYg9gRQgigJgjgHQhagUhbADQgeACgeACQiVANiUAXQiUAXiPAqQiPAqiFBHQhsA6hnBGQhxBMhuBQQhyBThfBmQhdBjhAB3QhDB6gXCIQgaCTAbCSQALA8AaAx");
	this.shape_3.setTransform(273.2,198.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(15,1,1).p("ARLsOQg7gZg9gQQgigJgjgHQhagUhbADQgeACgeACQiVANiUAXQiUAXiPAqQiPAqiFBHQhsA6hnBGQhxBMhuBQQhyBThfBmQhdBkhAB2QhDB6gXCIQgaCTAbCSQASBkA9BGQAVAYAaAUQABABACABQANAKAPAKQAKAGAiAQ");
	this.shape_4.setTransform(273.2,206.1);

	var maskedShapeInstanceList = [this.shape_3,this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3}]},9).to({state:[{t:this.shape_4}]},141).wait(344));

	// Layer 1
	this.instance_3 = new lib._9("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(275,275);
	this.instance_3.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(494));

	// Background
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#F59E9E").ss(3,1,1).p("EAq+Aq+MhV7AAAMAAAhV7MBV7AAAg");
	this.shape_5.setTransform(275,275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F6E7E7").s().p("Egq9Aq+MAAAhV7MBV7AAAMAAABV7g");
	this.shape_6.setTransform(275,275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(494));

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