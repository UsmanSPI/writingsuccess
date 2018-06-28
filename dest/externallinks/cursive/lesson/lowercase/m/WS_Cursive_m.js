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


(lib.m = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Au6LyQAAhDETobQE0pSAghaIAUhBQh1AgibBhIkoDWQkEDWjrD6IhnBzQiVFRhaCbQg+BVhHAAQiPAAAAiQQAAg6Ero/QFFpsAshyQjlAvkQDEIm1FXIhUAfQiWABAAiSQAAg1AyguQCSi8GGjlIFUipQCshHBtAAQBsAABEA6QBMA+AABsQAABzg+B4QDcizCwhsQETiqCkAAQBwAABDBGQBEBEAABsQgBBvgiBSQDFimCrhqQEEinCVAAQBqAABABGQBBBAAABqQAAB4hJCcIibEfQjlGTAADlQAAA0BVAAQCPAAFGiEQFliyJZovQBghMCzi7QBKgwApABQBsgBAABzQAABJjHDcIkOEGQmGFdkcCwQjNCBi1BDQjUBPi4AAQieAAhphSQhzhXAAicQAAhmAdg7IGXuoIAShHQiqAjk3EOQivCYkQEZIitC+IjwHsQg0BVhKAAQiPAAAAiQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-250.5,-89.8,501,179.6);


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
(lib.WS_Cursive_m = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_608 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(608).call(this.frame_608).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(42.4,257.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[42.7,258,63.1,240.3,89.1,223.9,115.2,207.4,134.4,201.6,153.6,195.9,152.8,214.1,152.5,222.3,149.3,231.8]}},84).to({guide:{path:[149.3,231.7,145.3,243.4,137,257.1,121.8,281.8,110,305.5,99,327.9,90.8,347.2]}},56).wait(15).to({skewY:180,x:89.9,y:348.3},0).to({guide:{path:[90,348.3,107.9,313.6,122.7,287.4,173.3,241.5,201.9,221.1,230.5,200.7,246.9,201.3,255.1,201.6,251.9,217.6,248.7,233.6,234.1,265.4,215.1,305.5,196.2,345.6]}},145).wait(15).to({x:194.2,y:348.3},0).to({guide:{path:[194.2,348.3,207.4,324.4,220.7,300.5]}},26).to({guide:{path:[220.7,300.4,224.7,293.1,228.8,285.7,268.1,247.4,301.2,221.3,334.2,195.1,348.7,201.9,359.5,207,355.4,220.3]}},63).to({guide:{path:[355.4,220.3,354,224.8,350.9,230.2,338.7,251.6,319.8,296.6,310.3,319.1,309.8,331.8,309.4,344.5,317.9,347.3,334.8,352.9,357.9,345.5,380.9,338.1,422,310.2,463,282.5,506.6,236.3]}},116).wait(14).to({x:506.2,y:236.5},0).to({guide:{path:[506.1,236.4,498,231.4,505.3,215.2,512.6,198.9,535.3,171.5,558.1,144.1,581.2,164.9,604.3,185.8,627.7,254.9]}},65).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(90,348,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},140).wait(15).to({_off:false,x:195},0).to({_off:true},145).wait(15).to({_off:false,x:508,y:235},0).to({_off:true},205).wait(80));

	// Layer 14
	this.instance_1 = new lib.ar7("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(238.4,329.5,0.88,1,22.4,0,0,-1.2,-99.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(324).to({_off:false},0).wait(285));

	// Layer 30 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_467 = new cjs.Graphics().p("AUBWBIDXh+IE1IRIjWB+g");
	var mask_graphics_468 = new cjs.Graphics().p("AkTjBIDyiNIE1IPIjyCOg");
	var mask_graphics_469 = new cjs.Graphics().p("Akhi5IEOidIE1IOIkOCfg");
	var mask_graphics_470 = new cjs.Graphics().p("AkuiyIEpisIE0IOIkpCvg");
	var mask_graphics_471 = new cjs.Graphics().p("Ak8iqIFDi8IE2INIlDDAg");
	var mask_graphics_472 = new cjs.Graphics().p("AlKijIFejLIE3INIleDQg");
	var mask_graphics_473 = new cjs.Graphics().p("AlYibIF6jbIE3IMIl6Dhg");
	var mask_graphics_474 = new cjs.Graphics().p("AlliUIGVjqIE3ILImWDxg");
	var mask_graphics_475 = new cjs.Graphics().p("AlziMIGxj6IE2ILImwEBg");
	var mask_graphics_476 = new cjs.Graphics().p("AmBiEIHMkJIE3IKInMERg");
	var mask_graphics_477 = new cjs.Graphics().p("AmPh9IHokYIE3IJInnEig");
	var mask_graphics_478 = new cjs.Graphics().p("Amdh1IIDkpIE4IKIoDEyg");
	var mask_graphics_479 = new cjs.Graphics().p("AmqhuIIdk3IE5IIIoeFDg");
	var mask_graphics_480 = new cjs.Graphics().p("Am4hmII5lHIE4IHIo5FUg");
	var mask_graphics_481 = new cjs.Graphics().p("AnGhfIJVlWIE4IHIpUFkg");
	var mask_graphics_482 = new cjs.Graphics().p("AnUhXIJwlmIE5IGIpwF1g");
	var mask_graphics_483 = new cjs.Graphics().p("AnhhQIKLl1IE4IFIqKGGg");
	var mask_graphics_484 = new cjs.Graphics().p("AnvhIIKnmFIE4IFIqmGWg");
	var mask_graphics_485 = new cjs.Graphics().p("An9hBILDmUIE4IFIrBGmg");
	var mask_graphics_486 = new cjs.Graphics().p("AoLg5ILemkIE5IEIrdG3g");
	var mask_graphics_487 = new cjs.Graphics().p("AoYgyIL5mzIE4IDIr3HIg");
	var mask_graphics_488 = new cjs.Graphics().p("AomgqIMUnDIE5IDIsTHYg");
	var mask_graphics_489 = new cjs.Graphics().p("Ao0giIMvnTIE6ICIsuHpg");
	var mask_graphics_490 = new cjs.Graphics().p("ApCgbINLniIE6ICItKH5g");
	var mask_graphics_491 = new cjs.Graphics().p("ApPgTINmnyIE6ICItlIJg");
	var mask_graphics_492 = new cjs.Graphics().p("ApdgMIOBoBIE6IBIuAIZg");
	var mask_graphics_493 = new cjs.Graphics().p("AprgEIOdoQIE6IAIubIpg");
	var mask_graphics_494 = new cjs.Graphics().p("Ap5ACIO5oeIE6IAIu3I5g");
	var mask_graphics_495 = new cjs.Graphics().p("AqGAKIPTovIE7IAIvSJKg");
	var mask_graphics_496 = new cjs.Graphics().p("AqUARIPvo+IE6H/IvtJbg");
	var mask_graphics_497 = new cjs.Graphics().p("AqiAZIQKpNIE7H+IwJJrg");
	var mask_graphics_498 = new cjs.Graphics().p("AqwAhIQmpdIE7H+IwkJ7g");
	var mask_graphics_499 = new cjs.Graphics().p("Aq+AoIRBpsIE8H9Iw/KMg");
	var mask_graphics_500 = new cjs.Graphics().p("ArLAwIRcp8IE7H9IxaKcg");
	var mask_graphics_501 = new cjs.Graphics().p("ArZA3IR3qLIE8H8Ix2Ktg");
	var mask_graphics_502 = new cjs.Graphics().p("ArnA/ISTqbIE8H8IyRK9g");
	var mask_graphics_503 = new cjs.Graphics().p("Ar1BGISvqqIE8H7IysLOg");
	var mask_graphics_504 = new cjs.Graphics().p("AsCBOITJq6IE8H7IzHLeg");
	var mask_graphics_505 = new cjs.Graphics().p("AsQBVITkrJIE9H6IzjLvg");
	var mask_graphics_506 = new cjs.Graphics().p("AseBdIUArZIE9H5Iz+MAg");
	var mask_graphics_507 = new cjs.Graphics().p("AssBlIUcrpIE8H5I0YMQg");
	var mask_graphics_508 = new cjs.Graphics().p("As5BsIU2r4IE9H4I00Mhg");
	var mask_graphics_509 = new cjs.Graphics().p("AtHB0IVSsIIE9H4I1QMxg");
	var mask_graphics_510 = new cjs.Graphics().p("AtVB7IVusXIE9H3I1rNCg");
	var mask_graphics_511 = new cjs.Graphics().p("AtjCDIWJsmIE9H2I2GNRg");
	var mask_graphics_512 = new cjs.Graphics().p("AtwCKIWks2IE9H2I2hNig");
	var mask_graphics_513 = new cjs.Graphics().p("At+CSIXAtGIE9H2I28Nyg");
	var mask_graphics_514 = new cjs.Graphics().p("AuMCZIXbtVIE+H1I3YODg");
	var mask_graphics_515 = new cjs.Graphics().p("AuaChIX2tkIE+HzI3zOUg");
	var mask_graphics_516 = new cjs.Graphics().p("AunCpIYRt0IE+HzI4OOkg");
	var mask_graphics_517 = new cjs.Graphics().p("Au1CwIYtuDIE+HyI4qO1g");
	var mask_graphics_518 = new cjs.Graphics().p("AvDC4IZIuTIE/HyI5FPFg");
	var mask_graphics_519 = new cjs.Graphics().p("AvRC/IZkuiIE/HxI5hPWg");
	var mask_graphics_520 = new cjs.Graphics().p("AvfDHIZ/uyIFAHxI59Pmg");
	var mask_graphics_521 = new cjs.Graphics().p("AvsDPIaavCIE/HwI6XP3g");
	var mask_graphics_522 = new cjs.Graphics().p("Av6DWIa2vRIE/HwI6yQHg");
	var mask_graphics_523 = new cjs.Graphics().p("AwIDdIbRvgIFAHvI7OQYg");
	var mask_graphics_524 = new cjs.Graphics().p("AwWDlIbtvwIFAHuI7qQpg");
	var mask_graphics_525 = new cjs.Graphics().p("AwjDtIcHwAIFAHuI8EQ5g");
	var mask_graphics_526 = new cjs.Graphics().p("AwxD0IcjwPIFAHtI8gRKg");
	var mask_graphics_527 = new cjs.Graphics().p("AxPEQIdiw+IE9H4I9gRlg");
	var mask_graphics_528 = new cjs.Graphics().p("AxtErIeixtIE5IEI+hSBg");
	var mask_graphics_529 = new cjs.Graphics().p("AF8WBIfhydIE2IQI/iSeg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(467).to({graphics:mask_graphics_467,x:180.5,y:193.8}).wait(1).to({graphics:mask_graphics_468,x:336.2,y:354.1}).wait(1).to({graphics:mask_graphics_469,x:337.6,y:353.3}).wait(1).to({graphics:mask_graphics_470,x:339,y:352.5}).wait(1).to({graphics:mask_graphics_471,x:340.3,y:351.7}).wait(1).to({graphics:mask_graphics_472,x:341.7,y:350.9}).wait(1).to({graphics:mask_graphics_473,x:343.1,y:350.1}).wait(1).to({graphics:mask_graphics_474,x:344.5,y:349.3}).wait(1).to({graphics:mask_graphics_475,x:345.8,y:348.5}).wait(1).to({graphics:mask_graphics_476,x:347.2,y:347.7}).wait(1).to({graphics:mask_graphics_477,x:348.6,y:346.9}).wait(1).to({graphics:mask_graphics_478,x:350,y:346.1}).wait(1).to({graphics:mask_graphics_479,x:351.4,y:345.3}).wait(1).to({graphics:mask_graphics_480,x:352.7,y:344.5}).wait(1).to({graphics:mask_graphics_481,x:354.1,y:343.7}).wait(1).to({graphics:mask_graphics_482,x:355.5,y:342.9}).wait(1).to({graphics:mask_graphics_483,x:356.9,y:342.2}).wait(1).to({graphics:mask_graphics_484,x:358.2,y:341.4}).wait(1).to({graphics:mask_graphics_485,x:359.6,y:340.6}).wait(1).to({graphics:mask_graphics_486,x:361,y:339.8}).wait(1).to({graphics:mask_graphics_487,x:362.4,y:339}).wait(1).to({graphics:mask_graphics_488,x:363.7,y:338.2}).wait(1).to({graphics:mask_graphics_489,x:365.1,y:337.4}).wait(1).to({graphics:mask_graphics_490,x:366.5,y:336.6}).wait(1).to({graphics:mask_graphics_491,x:367.9,y:335.8}).wait(1).to({graphics:mask_graphics_492,x:369.2,y:335}).wait(1).to({graphics:mask_graphics_493,x:370.6,y:334.2}).wait(1).to({graphics:mask_graphics_494,x:372,y:333.4}).wait(1).to({graphics:mask_graphics_495,x:373.4,y:332.6}).wait(1).to({graphics:mask_graphics_496,x:374.7,y:331.8}).wait(1).to({graphics:mask_graphics_497,x:376.2,y:331}).wait(1).to({graphics:mask_graphics_498,x:377.5,y:330.2}).wait(1).to({graphics:mask_graphics_499,x:378.9,y:329.4}).wait(1).to({graphics:mask_graphics_500,x:380.3,y:328.6}).wait(1).to({graphics:mask_graphics_501,x:381.7,y:327.8}).wait(1).to({graphics:mask_graphics_502,x:383,y:327.1}).wait(1).to({graphics:mask_graphics_503,x:384.4,y:326.3}).wait(1).to({graphics:mask_graphics_504,x:385.8,y:325.5}).wait(1).to({graphics:mask_graphics_505,x:387.2,y:324.7}).wait(1).to({graphics:mask_graphics_506,x:388.5,y:323.9}).wait(1).to({graphics:mask_graphics_507,x:389.9,y:323.1}).wait(1).to({graphics:mask_graphics_508,x:391.3,y:322.3}).wait(1).to({graphics:mask_graphics_509,x:392.7,y:321.5}).wait(1).to({graphics:mask_graphics_510,x:394,y:320.7}).wait(1).to({graphics:mask_graphics_511,x:395.4,y:319.9}).wait(1).to({graphics:mask_graphics_512,x:396.8,y:319.1}).wait(1).to({graphics:mask_graphics_513,x:398.2,y:318.3}).wait(1).to({graphics:mask_graphics_514,x:399.5,y:317.5}).wait(1).to({graphics:mask_graphics_515,x:400.9,y:316.7}).wait(1).to({graphics:mask_graphics_516,x:402.3,y:315.9}).wait(1).to({graphics:mask_graphics_517,x:403.7,y:315.1}).wait(1).to({graphics:mask_graphics_518,x:405.1,y:314.3}).wait(1).to({graphics:mask_graphics_519,x:406.4,y:313.5}).wait(1).to({graphics:mask_graphics_520,x:407.8,y:312.8}).wait(1).to({graphics:mask_graphics_521,x:409.2,y:312}).wait(1).to({graphics:mask_graphics_522,x:410.6,y:311.2}).wait(1).to({graphics:mask_graphics_523,x:411.9,y:310.4}).wait(1).to({graphics:mask_graphics_524,x:413.3,y:309.6}).wait(1).to({graphics:mask_graphics_525,x:414.7,y:308.8}).wait(1).to({graphics:mask_graphics_526,x:416.1,y:308}).wait(1).to({graphics:mask_graphics_527,x:419,y:306}).wait(1).to({graphics:mask_graphics_528,x:422,y:304}).wait(1).to({graphics:mask_graphics_529,x:270.7,y:193.8}).wait(80));

	// Layer 29
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(20,1,1).p("A2mDdQJMqCFbjGQFcjGBABtQA/BtijEYQijEYiHFoQiGFpDJA0QDIA0FHiQQFJiRE3j2QE4j2GNmM");
	this.shape_1.setTransform(363.7,274.7);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(467).to({_off:false},0).wait(142));

	// Layer 28 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_450 = new cjs.Graphics().p("AM0SuQCOjmEHg+QEHg/DmCOQDiCLBAD/Iz1EtQg5kBCKjhg");
	var mask_1_graphics_451 = new cjs.Graphics().p("AMgTHQB2jzEAhYQEAhXDyB2QDuB0BZD4IzRGoQhSj6B0jug");
	var mask_1_graphics_452 = new cjs.Graphics().p("AMTTkQBfj9D2hxQD1hwD+BeQD4BcBxDuIyjIfQhqjxBcj4g");
	var mask_1_graphics_453 = new cjs.Graphics().p("AMQUEQBFkFDqiIQDpiIEFBFQEABECIDhIxoKQQiBjlBEkAg");
	var mask_1_graphics_454 = new cjs.Graphics().p("AMVUnQArkLDbieQDcieEKArQEGArCdDTIwjL7QiWjYAqkFg");
	var mask_1_graphics_455 = new cjs.Graphics().p("AMiVNQASkODKizQDLiyEOARQEIAQCxDDIvTNfQirjIAQkIg");
	var mask_1_graphics_456 = new cjs.Graphics().p("AM5V1QgKkOC5jGQC4jFEOgKQEJgJDDCxIt6O6Qi+i3gJkIg");
	var mask_1_graphics_457 = new cjs.Graphics().p("ANXWfQgkkMCljWQCkjXELgkQEHgjDTCdIsYQMQjPiigjkHg");
	var mask_1_graphics_458 = new cjs.Graphics().p("AN9XLQg9kHCOjmQCPjmEHg9QEBg9DiCIIqvRVQjeiOg9kCg");
	var mask_1_graphics_459 = new cjs.Graphics().p("AOsX4QhXkAB3jyQB3jzEAhXQD6hVDuBwIpASTQjqh4hVj6g");
	var mask_1_graphics_460 = new cjs.Graphics().p("APhYmQhwj2Bfj9QBfj9D2hwQDxhuD4BZInLTGQj1hghtjxg");
	var mask_1_graphics_461 = new cjs.Graphics().p("AQdZUQiHjqBGkFQBFkGDqiHQDmiED/BAIlSTtQj9hIiEjlg");
	var mask_1_graphics_462 = new cjs.Graphics().p("ARfaCQidjcAskLQAskKDbieQDXiaEFAnIjVUHQkDguiajXg");
	var mask_1_graphics_463 = new cjs.Graphics().p("ASmavQiyjLASkOQASkODLiyQDHiuEHANIhWUWQkGgVivjHg");
	var mask_1_graphics_464 = new cjs.Graphics().p("ATebbQjFi5gJkOQgIkOC4jFQC2jBEGgMIAqUYIgNAAQj/AAi8ixg");
	var mask_1_graphics_465 = new cjs.Graphics().p("ATvcEQjWilgjkMQgjkMCkjWQCijSEEgmICpUOQgpAEgoAAQjWAAiwiHg");
	var mask_1_graphics_466 = new cjs.Graphics().p("AUEcnQjmiPg9kHQg9kICPjlQCNjgD/hAIEmT4QhJAPhGAAQiyAAighkg");
	var mask_1_graphics_467 = new cjs.Graphics().p("AUcdFQjyh4hXkAQhWkAB4jyQB2jtD4hYIGhTUQhmAhhkAAQiRAAiNhGg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(450).to({graphics:mask_1_graphics_450,x:200.8,y:168}).wait(1).to({graphics:mask_1_graphics_451,x:199.9,y:171.1}).wait(1).to({graphics:mask_1_graphics_452,x:198.8,y:174.1}).wait(1).to({graphics:mask_1_graphics_453,x:197.3,y:176.9}).wait(1).to({graphics:mask_1_graphics_454,x:195.6,y:179.6}).wait(1).to({graphics:mask_1_graphics_455,x:193.6,y:182.1}).wait(1).to({graphics:mask_1_graphics_456,x:191.4,y:184.4}).wait(1).to({graphics:mask_1_graphics_457,x:188.9,y:186.4}).wait(1).to({graphics:mask_1_graphics_458,x:186.3,y:188.3}).wait(1).to({graphics:mask_1_graphics_459,x:183.5,y:189.8}).wait(1).to({graphics:mask_1_graphics_460,x:180.6,y:191.1}).wait(1).to({graphics:mask_1_graphics_461,x:177.6,y:192.1}).wait(1).to({graphics:mask_1_graphics_462,x:174.5,y:192.7}).wait(1).to({graphics:mask_1_graphics_463,x:171.3,y:193.1}).wait(1).to({graphics:mask_1_graphics_464,x:170.2,y:193.2}).wait(1).to({graphics:mask_1_graphics_465,x:173.4,y:193.1}).wait(1).to({graphics:mask_1_graphics_466,x:176.5,y:193.1}).wait(1).to({graphics:mask_1_graphics_467,x:179.6,y:193.1}).wait(142));

	// Layer 27
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(20,1,1).p("A2mDdQJMqCFbjGQFcjGBABtQA/BtijEYQijEYiHFoQiGFpDJA0QDIA0FHiQQFJiRE3j2QE4j2GNmM");
	this.shape_2.setTransform(363.7,274.7);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(450).to({_off:false},0).wait(159));

	// Layer 26 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_413 = new cjs.Graphics().p("AXcPvIAshyIE0B4IgsBxg");
	var mask_2_graphics_414 = new cjs.Graphics().p("Ai1AMIA4iOIEzB3Ig4COg");
	var mask_2_graphics_415 = new cjs.Graphics().p("Ai6AaIBCirIEzB4IhCCrg");
	var mask_2_graphics_416 = new cjs.Graphics().p("AjAApIBOjIIEzB3IhODJg");
	var mask_2_graphics_417 = new cjs.Graphics().p("AjGA4IBajmIEzB4IhaDlg");
	var mask_2_graphics_418 = new cjs.Graphics().p("AjLBGIBkkDIEzB4IhkEDg");
	var mask_2_graphics_419 = new cjs.Graphics().p("AjRBVIBwkgIEzB3IhwEgg");
	var mask_2_graphics_420 = new cjs.Graphics().p("AjXBkIB8k+IEzB4Ih8E9g");
	var mask_2_graphics_421 = new cjs.Graphics().p("AjcByICGlaIEzB3IiGFbg");
	var mask_2_graphics_422 = new cjs.Graphics().p("AjiCBICSl4IEzB3IiSF4g");
	var mask_2_graphics_423 = new cjs.Graphics().p("AjoCPICemVIEzB4IieGVg");
	var mask_2_graphics_424 = new cjs.Graphics().p("AjtCeIComyIEzB3IioGzg");
	var mask_2_graphics_425 = new cjs.Graphics().p("AjzCsIC0nPIEzB4Ii0HPg");
	var mask_2_graphics_426 = new cjs.Graphics().p("Aj5C7IDAntIEzB4IjAHtg");
	var mask_2_graphics_427 = new cjs.Graphics().p("Aj+DKIDKoKIEzB3IjKIKg");
	var mask_2_graphics_428 = new cjs.Graphics().p("AkEDZIDWooIEzB4IjWIng");
	var mask_2_graphics_429 = new cjs.Graphics().p("AkKDnIDipFIEzB4IjiJFg");
	var mask_2_graphics_430 = new cjs.Graphics().p("AkPD2IDspiIEzB3IjsJig");
	var mask_2_graphics_431 = new cjs.Graphics().p("AkVEFID4qAIEzB4Ij4J/g");
	var mask_2_graphics_432 = new cjs.Graphics().p("AkbETIEEqcIEzB3IkEKcg");
	var mask_2_graphics_433 = new cjs.Graphics().p("AkhEiIEQq6IEzB3IkQK6g");
	var mask_2_graphics_434 = new cjs.Graphics().p("AkmEwIEarXIEzB4IkaLXg");
	var mask_2_graphics_435 = new cjs.Graphics().p("AksE/IEmr0IEzB3IkmL0g");
	var mask_2_graphics_436 = new cjs.Graphics().p("AkyFNIEysRIEzB4IkyMRg");
	var mask_2_graphics_437 = new cjs.Graphics().p("Ak3FcIE7svIE0B4Ik7Mug");
	var mask_2_graphics_438 = new cjs.Graphics().p("Ak9FrIFHtMIE0B3IlHNMg");
	var mask_2_graphics_439 = new cjs.Graphics().p("AlDF5IFTtpIE0B4IlTNpg");
	var mask_2_graphics_440 = new cjs.Graphics().p("AlIGIIFduHIE0B4IldOGg");
	var mask_2_graphics_441 = new cjs.Graphics().p("AlOGXIFpukIE0B3IlpOkg");
	var mask_2_graphics_442 = new cjs.Graphics().p("AlUGlIF1vBIE0B4Il1PBg");
	var mask_2_graphics_443 = new cjs.Graphics().p("AlZG0IF/veIE0B3Il/Peg");
	var mask_2_graphics_444 = new cjs.Graphics().p("AlfHCIGLv7IE0B3ImLP8g");
	var mask_2_graphics_445 = new cjs.Graphics().p("AllHRIGXwZIE0B4ImXQYg");
	var mask_2_graphics_446 = new cjs.Graphics().p("AlqHgIGhw2IE0B3ImhQ2g");
	var mask_2_graphics_447 = new cjs.Graphics().p("AlwHuIGtxTIE0B4ImtRTg");
	var mask_2_graphics_448 = new cjs.Graphics().p("Al2H9IG5xxIE0B4Im5Rwg");
	var mask_2_graphics_449 = new cjs.Graphics().p("Al7IMIHDyOIE0B3InDSOg");
	var mask_2_graphics_450 = new cjs.Graphics().p("AQ5YMIHPyrIE0B3InQSsg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(413).to({graphics:mask_2_graphics_413,x:185.2,y:112.6}).wait(1).to({graphics:mask_2_graphics_414,x:352.2,y:215.1}).wait(1).to({graphics:mask_2_graphics_415,x:351.7,y:216.5}).wait(1).to({graphics:mask_2_graphics_416,x:351.1,y:218}).wait(1).to({graphics:mask_2_graphics_417,x:350.5,y:219.5}).wait(1).to({graphics:mask_2_graphics_418,x:350,y:220.9}).wait(1).to({graphics:mask_2_graphics_419,x:349.4,y:222.4}).wait(1).to({graphics:mask_2_graphics_420,x:348.8,y:223.9}).wait(1).to({graphics:mask_2_graphics_421,x:348.3,y:225.3}).wait(1).to({graphics:mask_2_graphics_422,x:347.7,y:226.8}).wait(1).to({graphics:mask_2_graphics_423,x:347.1,y:228.2}).wait(1).to({graphics:mask_2_graphics_424,x:346.6,y:229.7}).wait(1).to({graphics:mask_2_graphics_425,x:346,y:231.2}).wait(1).to({graphics:mask_2_graphics_426,x:345.4,y:232.6}).wait(1).to({graphics:mask_2_graphics_427,x:344.9,y:234.1}).wait(1).to({graphics:mask_2_graphics_428,x:344.3,y:235.6}).wait(1).to({graphics:mask_2_graphics_429,x:343.7,y:237}).wait(1).to({graphics:mask_2_graphics_430,x:343.2,y:238.5}).wait(1).to({graphics:mask_2_graphics_431,x:342.6,y:240}).wait(1).to({graphics:mask_2_graphics_432,x:342.1,y:241.4}).wait(1).to({graphics:mask_2_graphics_433,x:341.5,y:242.9}).wait(1).to({graphics:mask_2_graphics_434,x:340.9,y:244.4}).wait(1).to({graphics:mask_2_graphics_435,x:340.4,y:245.8}).wait(1).to({graphics:mask_2_graphics_436,x:339.8,y:247.3}).wait(1).to({graphics:mask_2_graphics_437,x:339.2,y:248.8}).wait(1).to({graphics:mask_2_graphics_438,x:338.7,y:250.2}).wait(1).to({graphics:mask_2_graphics_439,x:338.1,y:251.7}).wait(1).to({graphics:mask_2_graphics_440,x:337.5,y:253.2}).wait(1).to({graphics:mask_2_graphics_441,x:337,y:254.6}).wait(1).to({graphics:mask_2_graphics_442,x:336.4,y:256.1}).wait(1).to({graphics:mask_2_graphics_443,x:335.8,y:257.5}).wait(1).to({graphics:mask_2_graphics_444,x:335.3,y:259}).wait(1).to({graphics:mask_2_graphics_445,x:334.7,y:260.5}).wait(1).to({graphics:mask_2_graphics_446,x:334.1,y:261.9}).wait(1).to({graphics:mask_2_graphics_447,x:333.6,y:263.4}).wait(1).to({graphics:mask_2_graphics_448,x:333,y:264.9}).wait(1).to({graphics:mask_2_graphics_449,x:332.4,y:266.3}).wait(1).to({graphics:mask_2_graphics_450,x:185.2,y:166.8}).wait(159));

	// Layer 16
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(20,1,1).p("A2mDdQJMqCFbjGQFcjGBABtQA/BtijEYQijEYiHFoQiGFpDJA0QDIA0FHiQQFJiRE3j2QE4j2GNmM");
	this.shape_3.setTransform(363.7,274.7);
	this.shape_3._off = true;

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(413).to({_off:false},0).wait(196));

	// Layer 25 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_405 = new cjs.Graphics().p("ALwNfQAJkPDGi4QDFi5EOAJQEIAJC3C+Iu5N7QixjDAJkIg");
	var mask_3_graphics_406 = new cjs.Graphics().p("ALgM3QAkkMDWikQDXikEMAkQEGAjCjDOIwMMZQidjTAjkHg");
	var mask_3_graphics_407 = new cjs.Graphics().p("ALYMTQA/kHDmiOQDmiOEGA+QECA9CODdIxWKuQiHjiA8kBg");
	var mask_3_graphics_408 = new cjs.Graphics().p("ALaLxQBYj/Dzh3QDzh2D/BXQD7BWB2DrIyUI9QhwjuBWj7g");
	var mask_3_graphics_409 = new cjs.Graphics().p("ALlLTQBwj1D+heQD9heD2BxQDwBuBfD1IzHHGQhYj4Bvjxg");
	var mask_3_graphics_410 = new cjs.Graphics().p("AL4K5QCJjpEFhFQEGhEDpCIQDkCGBGD+IzuFKQg/kACGjkg");
	var mask_3_graphics_411 = new cjs.Graphics().p("AMUKjQCfjbELgqQELgqDaCfQDXCcAsEDI0IDLQgmkECcjWg");
	var mask_3_graphics_412 = new cjs.Graphics().p("AM4KQQC0jJEOgQQEOgPDKC0QDFCwATEGI0XBLQgLkHCwjGg");
	var mask_3_graphics_413 = new cjs.Graphics().p("AKTQhQAPkGDDi0QDHi2EOALQEOALC3DHQCzDDgHEHg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(405).to({graphics:mask_3_graphics_405,x:187.3,y:132.2}).wait(1).to({graphics:mask_3_graphics_406,x:189.4,y:129.7}).wait(1).to({graphics:mask_3_graphics_407,x:191.3,y:127}).wait(1).to({graphics:mask_3_graphics_408,x:192.8,y:124.2}).wait(1).to({graphics:mask_3_graphics_409,x:194.1,y:121.2}).wait(1).to({graphics:mask_3_graphics_410,x:195.1,y:118.1}).wait(1).to({graphics:mask_3_graphics_411,x:195.8,y:114.9}).wait(1).to({graphics:mask_3_graphics_412,x:196.2,y:111.7}).wait(1).to({graphics:mask_3_graphics_413,x:196.3,y:111.2}).wait(196));

	// Layer 13
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(20,1,1).p("A2mDdQJMqCFbjGQFcjGBABtQA/BtijEYQijEYiHFoQiGFpDJA0QDIA0FHiQQFJiRE3j2QE4j2GNmM");
	this.shape_4.setTransform(363.7,274.7);
	this.shape_4._off = true;

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(405).to({_off:false},0).wait(204));

	// Layer 24 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_350 = new cjs.Graphics().p("EADWAoVQrQkjkurLQkwrKEjrRMA2UAV9QkjLRrKEvQltCblvAAQlgAAlgiPg");
	var mask_4_graphics_351 = new cjs.Graphics().p("EAC5AoGQrJkykfrSQkhrQEyrKMA11AXGQkyLKrQEgQleCMlcAAQlyAAlwieg");
	var mask_4_graphics_352 = new cjs.Graphics().p("EACcAn2QrClCkPrXQkSrWFCrEMA1UAYQQlBLDrWEQQlPB+lJAAQmFAAl/iug");
	var mask_4_graphics_353 = new cjs.Graphics().p("EACBAnlQq7lQkArdQkCrdFQq8MA0zAZYQlRK9rbEAQk+Bwk4AAQmXAAmNi/g");
	var mask_4_graphics_354 = new cjs.Graphics().p("EABmAnTQq0lfjwriQjyrhFfq0MA0PAaeQlgK1rgDxQktBjkmAAQmqAAmbjRg");
	var mask_4_graphics_355 = new cjs.Graphics().p("EABMAnBQqslujhrnQjirmFuqsMAzqAblQluKtrmDhQkcBWkTAAQm+ABmojjg");
	var mask_4_graphics_356 = new cjs.Graphics().p("EAAzAmuQqll8jQrsQjTrrF9qkMAzDAcrQl9KlrqDSQkKBKkBAAQnSAAm0j1g");
	var mask_4_graphics_357 = new cjs.Graphics().p("EAAaAmaQqcmKjArwQjDrwGLqbMAybAdwQmLKdruDBQj4BAjvAAQnmAAnBkJg");
	var mask_4_graphics_358 = new cjs.Graphics().p("EAACAmGQqTmZiwr0QizrzGZqTMAxyAe0QmZKVrzCxQjlA2jcAAQn7AAnNkdg");
	var mask_4_graphics_359 = new cjs.Graphics().p("EgATAlxQqMmnigr3Qijr3GnqLMAxHAf4QmnKMr2ChQjSAtjKAAQoQAAnWkyg");
	var mask_4_graphics_360 = new cjs.Graphics().p("EgApAlbQqDm1iQr6QiSr6G0qBMAwbAg6Qm1KCr5CRQi/Ali3AAQomAAnglIg");
	var mask_4_graphics_361 = new cjs.Graphics().p("EgA/AlEQp4nCiAr9QiCr9HCp4MAvtAh8QnDJ5r8CBQirAcikAAQo8AAnrleg");
	var mask_4_graphics_362 = new cjs.Graphics().p("EgBTAktQpvnPhwsAQhxsAHPpuMAu+Ai9QnQJvr+BwQiXAWiRAAQpTAAn0l1g");
	var mask_4_graphics_363 = new cjs.Graphics().p("EgBnAkVQplnchfsCQhhsCHdpkMAuNAj8QndJlsBBgQiBAQh+AAQprAAn9mNg");
	var mask_4_graphics_364 = new cjs.Graphics().p("EgB5Aj9QpbnqhPsEQhRsDHqpaMAtbAk6QnpJbsDBPQhsAMhpAAQqEAAoFmlg");
	var mask_4_graphics_365 = new cjs.Graphics().p("EgCLAjjQpQn2g+sFQhBsFH3pPMAsoAl3Qn3JQsEA/QhXAHhUAAQqeAAoMm+g");
	var mask_4_graphics_366 = new cjs.Graphics().p("EgCcAjJQpFoCgusHQgwsGIDpEMAr0AmzQoDJGsGAuQhAAEhAAAQq3AAoUnYg");
	var mask_4_graphics_367 = new cjs.Graphics().p("EgCsAivQo6oPgdsHQggsHIPo5MAq+AnuQoPI6sGAeQgqACgqAAQrTAAoanyg");
	var mask_4_graphics_368 = new cjs.Graphics().p("EgC7AiUQovocgNsHQgPsIIcotMAqGAooQobIvsGAOIgnAAQrwAAofoNg");
	var mask_4_graphics_369 = new cjs.Graphics().p("EARhAqhQsJgDoiomQojonAEsIQACsIInohMApOAphQokIgsBAAIgIAAg");
	var mask_4_graphics_370 = new cjs.Graphics().p("EARIAqgQsJgToWoyQoXoyAUsIQASsHIzoWMAoVAqZQofIErkAAIg1gBg");
	var mask_4_graphics_371 = new cjs.Graphics().p("EAQuAqfQsHgkoKo9QoLo+AksHQAjsFI+oLMAnbArPQoZHprJAAQgwAAgygCg");
	var mask_4_graphics_372 = new cjs.Graphics().p("EAQVAqdQsGg1n+pIQn+pJA1sFQAzsFJIn/MAmgAsEQoTHPqtAAQhGAAhIgEg");
	var mask_4_graphics_373 = new cjs.Graphics().p("EAP9AqZQsGhEnxpUQnypTBGsEQBEsEJTnyMAljAs4QoMG2qTAAQhbAAhdgJg");
	var mask_4_graphics_374 = new cjs.Graphics().p("EAPlAqVQsEhVnkpeQnlpdBWsDQBUsCJdnlMAklAtqQoDGdp6AAQhvAAhzgNg");
	var mask_4_graphics_375 = new cjs.Graphics().p("EAPNAqQQsChlnXpoQnYpoBmsBQBlsAJnnYMAjmAubQn7GFphAAQiDAAiIgSg");
	var mask_4_graphics_376 = new cjs.Graphics().p("EAO1AqKQr/h2nKpxQnLpyB3r+QB1r+JxnLMAinAvLQnyFtpLAAQiWAAidgYg");
	var mask_4_graphics_377 = new cjs.Graphics().p("EAOeAqEQr8iHm9p7Qm9p7CHr8QCFr7J7m9MAhlAv5QnoFXo0AAQipAAixgfg");
	var mask_4_graphics_378 = new cjs.Graphics().p("EAOIAp8Qr6iWmvqFQmvqFCXr4QCVr4KEmwMAgkAwnQneFAoeAAQi8AAjEgng");
	var mask_4_graphics_379 = new cjs.Graphics().p("EANxAp0Qr2inmhqOQmiqNCor1QCmr1KMmiMAfhAxSQnTEroIAAQjPAAjYgvg");
	var mask_4_graphics_380 = new cjs.Graphics().p("EANbApqQryi3mTqWQmUqWC4ryQC1rwKWmUMAedAx8QnIEWnzAAQjiAAjqg5g");
	var mask_4_graphics_381 = new cjs.Graphics().p("EANIAphQrvjFmGqfQmHqeDGrtQDFrtKdmHMAdeAyhQm9EEngAAQjzAAj6hCg");
	var mask_4_graphics_382 = new cjs.Graphics().p("EAM0ApXQrrjUl4qlQl6qmDVrqQDSrpKll5MAcgAzFQmzDynOAAQkCAAkMhMg");
	var mask_4_graphics_383 = new cjs.Graphics().p("EAMhApNQrmjjlsqsQltqtDkrmQDhrlKslsMAbgAzoQmnDim8AAQkTAAkchXg");
	var mask_4_graphics_384 = new cjs.Graphics().p("EAMPApCQrjjxleq0Qlfq0DyrhQDvrgKzlfMAagA0KQmbDRmrAAQkjAAkrhig");
	var mask_4_graphics_385 = new cjs.Graphics().p("EAL8Ao2Qrdj/lRq7QlRq6EArcQD+rcK5lSMAZeA0rQmODBmZAAQk0AAk7hug");
	var mask_4_graphics_386 = new cjs.Graphics().p("EALqAoqQrYkNlDrCQlErBEOrXQEMrWLBlEMAYcA1KQmCCxmHAAQlFAAlKh6g");
	var mask_4_graphics_387 = new cjs.Graphics().p("EALZAodQrTkck1rHQk3rHEdrSQEarRLGk3MAXaA1pQl0Cil3AAQlVAAlYiHg");
	var mask_4_graphics_388 = new cjs.Graphics().p("EALIAoQQrMkqkprNQkorOEqrMQEorLLNkpMAWXA2FQlnCUlmAAQlmAAlmiUg");
	var mask_4_graphics_389 = new cjs.Graphics().p("EAK3AoBQrGk3kbrTQkarTE4rGQE1rGLTkbMAVUA2hQlZCGlVAAQl3AAl0ijg");
	var mask_4_graphics_390 = new cjs.Graphics().p("EAKnAnzQrAlGkNrYQkMrZFGrAQFDq/LYkNMAUQA27QlKB5lFAAQmIAAmBixg");
	var mask_4_graphics_391 = new cjs.Graphics().p("EAKXAnjQq6lTj+reQj+rdFTq5QFRq6Lej+MATLA3TQk7Btk0AAQmaAAmOjBg");
	var mask_4_graphics_392 = new cjs.Graphics().p("EAKIAnTQq0lhjvriQjwriFhqyQFeq0LijwMASGA3rQkrBhkkAAQmrAAmajRg");
	var mask_4_graphics_393 = new cjs.Graphics().p("EAJ5AnCQqtlujhrnQjirnFvqqQFsqtLnjiMARAA4BQkcBWkTAAQm9AAmmjig");
	var mask_4_graphics_394 = new cjs.Graphics().p("EAJqAmxQqll7jTrsQjTrrF8qjQF5qmLrjTMAP6A4VQkLBMkDAAQnPAAmyjzg");
	var mask_4_graphics_395 = new cjs.Graphics().p("EAJcAmfQqemIjErwQjFrvGJqcQGGqeLwjEMAO0A4oQj7BCjyAAQniAAm9kFg");
	var mask_4_graphics_396 = new cjs.Graphics().p("EAJOAmNQqWmWi1rzQi2rzGWqUQGTqWLzi2MANtA46QjqA5jhAAQn1AAnIkXg");
	var mask_4_graphics_397 = new cjs.Graphics().p("EAJBAl6QqOmjinr2Qinr2GiqNQGgqOL3inMAMmA5LQjYAwjRAAQoIAAnSkqg");
	var mask_4_graphics_398 = new cjs.Graphics().p("EAI0AlmQqFmviZr6QiYr5GuqEQGuqHL5iYMALgA5bQjIAni/AAQocAAnck9g");
	var mask_4_graphics_399 = new cjs.Graphics().p("EAIoAlSQp9m8iKr8QiJr9G7p7QG6p+L8iKMAKYA5pQi2AgiuAAQowAAnllRg");
	var mask_4_graphics_400 = new cjs.Graphics().p("EAIcAk9Qp0nIh7r/Qh7r/HIpzQHGp1L/h7MAJQA51QijAaidAAQpFAAnulmg");
	var mask_4_graphics_401 = new cjs.Graphics().p("EAIRAkoQpsnUhrsCQhssBHTpqQHTpsMBhsMAIIA6AQiQAUiLAAQpbAAn2l7g");
	var mask_4_graphics_402 = new cjs.Graphics().p("EAIGAkSQpjnghcsEQhdsDHfphQHfpjMDhdMAHAA6KQh9APh5AAQpwAAn/mRg");
	var mask_4_graphics_403 = new cjs.Graphics().p("EAH7Aj7QpZnshNsFQhOsFHrpXQHrpaMFhOMAF3A6SQhqALhnAAQqGAAoHmog");
	var mask_4_graphics_404 = new cjs.Graphics().p("EAHxAjkQpPn4g+sGQg/sGH3pOQH2pQMGg/MAEuA6ZQhVAGhUAAQqeAAoOm+g");
	var mask_4_graphics_405 = new cjs.Graphics().p("EAHoAjNQpFoDgwsIQgwsHIDpEQIBpGMIgwMADlA6eQhBAEhBAAQq2AAoUnWg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(350).to({graphics:mask_4_graphics_350,x:265.5,y:272.4}).wait(1).to({graphics:mask_4_graphics_351,x:264.7,y:272.4}).wait(1).to({graphics:mask_4_graphics_352,x:263.9,y:272.4}).wait(1).to({graphics:mask_4_graphics_353,x:263.1,y:272.4}).wait(1).to({graphics:mask_4_graphics_354,x:262.2,y:272.4}).wait(1).to({graphics:mask_4_graphics_355,x:261.3,y:272.3}).wait(1).to({graphics:mask_4_graphics_356,x:260.3,y:272.3}).wait(1).to({graphics:mask_4_graphics_357,x:259.3,y:272.3}).wait(1).to({graphics:mask_4_graphics_358,x:258.3,y:272.3}).wait(1).to({graphics:mask_4_graphics_359,x:257.2,y:272.3}).wait(1).to({graphics:mask_4_graphics_360,x:256.1,y:272.3}).wait(1).to({graphics:mask_4_graphics_361,x:255,y:272.2}).wait(1).to({graphics:mask_4_graphics_362,x:253.8,y:272.2}).wait(1).to({graphics:mask_4_graphics_363,x:252.6,y:272.2}).wait(1).to({graphics:mask_4_graphics_364,x:251.3,y:272.2}).wait(1).to({graphics:mask_4_graphics_365,x:250.1,y:272.1}).wait(1).to({graphics:mask_4_graphics_366,x:248.8,y:272.1}).wait(1).to({graphics:mask_4_graphics_367,x:247.4,y:272.1}).wait(1).to({graphics:mask_4_graphics_368,x:246,y:272.1}).wait(1).to({graphics:mask_4_graphics_369,x:244.6,y:272.1}).wait(1).to({graphics:mask_4_graphics_370,x:243.2,y:272.1}).wait(1).to({graphics:mask_4_graphics_371,x:241.8,y:272.1}).wait(1).to({graphics:mask_4_graphics_372,x:240.3,y:272.1}).wait(1).to({graphics:mask_4_graphics_373,x:238.8,y:272.2}).wait(1).to({graphics:mask_4_graphics_374,x:237.2,y:272.2}).wait(1).to({graphics:mask_4_graphics_375,x:235.6,y:272.2}).wait(1).to({graphics:mask_4_graphics_376,x:234.1,y:272.2}).wait(1).to({graphics:mask_4_graphics_377,x:232.4,y:272.3}).wait(1).to({graphics:mask_4_graphics_378,x:230.8,y:272.3}).wait(1).to({graphics:mask_4_graphics_379,x:229.1,y:272.3}).wait(1).to({graphics:mask_4_graphics_380,x:227.4,y:272.3}).wait(1).to({graphics:mask_4_graphics_381,x:225.8,y:272.3}).wait(1).to({graphics:mask_4_graphics_382,x:224.3,y:272.3}).wait(1).to({graphics:mask_4_graphics_383,x:222.7,y:272.4}).wait(1).to({graphics:mask_4_graphics_384,x:221.1,y:272.4}).wait(1).to({graphics:mask_4_graphics_385,x:219.4,y:272.4}).wait(1).to({graphics:mask_4_graphics_386,x:217.8,y:272.4}).wait(1).to({graphics:mask_4_graphics_387,x:216.1,y:272.4}).wait(1).to({graphics:mask_4_graphics_388,x:214.5,y:272.4}).wait(1).to({graphics:mask_4_graphics_389,x:212.8,y:272.4}).wait(1).to({graphics:mask_4_graphics_390,x:211.1,y:272.4}).wait(1).to({graphics:mask_4_graphics_391,x:209.4,y:272.4}).wait(1).to({graphics:mask_4_graphics_392,x:207.6,y:272.4}).wait(1).to({graphics:mask_4_graphics_393,x:205.9,y:272.4}).wait(1).to({graphics:mask_4_graphics_394,x:204.1,y:272.4}).wait(1).to({graphics:mask_4_graphics_395,x:202.4,y:272.4}).wait(1).to({graphics:mask_4_graphics_396,x:200.6,y:272.4}).wait(1).to({graphics:mask_4_graphics_397,x:198.8,y:272.4}).wait(1).to({graphics:mask_4_graphics_398,x:197.1,y:272.3}).wait(1).to({graphics:mask_4_graphics_399,x:195.3,y:272.3}).wait(1).to({graphics:mask_4_graphics_400,x:193.5,y:272.3}).wait(1).to({graphics:mask_4_graphics_401,x:191.7,y:272.3}).wait(1).to({graphics:mask_4_graphics_402,x:189.9,y:272.3}).wait(1).to({graphics:mask_4_graphics_403,x:188.1,y:272.3}).wait(1).to({graphics:mask_4_graphics_404,x:186.2,y:272.2}).wait(1).to({graphics:mask_4_graphics_405,x:184.4,y:272.3}).wait(204));

	// Layer 6
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(20,1,1).p("AqLHlQJLqDFbjGQDwiJBpAKQANABALAE");
	this.shape_5.setTransform(284.2,248.4);
	this.shape_5._off = true;

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(350).to({_off:false},0).wait(259));

	// Layer 19
	this.instance_2 = new lib.ar7("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(129.5,330.5,1,1,22.4,0,0,-1.2,-99.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(164).to({_off:false},0).wait(445));

	// Layer 23 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_266 = new cjs.Graphics().p("AHiSPIAAsjINHAAIAAMjg");
	var mask_5_graphics_267 = new cjs.Graphics().p("AmjGfIAAs9INHAAIAAM9g");
	var mask_5_graphics_268 = new cjs.Graphics().p("AmjGtIAAtZINHAAIAANZg");
	var mask_5_graphics_269 = new cjs.Graphics().p("AmjG7IAAt1INHAAIAAN1g");
	var mask_5_graphics_270 = new cjs.Graphics().p("AmjHJIAAuRINHAAIAAORg");
	var mask_5_graphics_271 = new cjs.Graphics().p("AmjHXIAAutINHAAIAAOtg");
	var mask_5_graphics_272 = new cjs.Graphics().p("AmjHlIAAvJINHAAIAAPJg");
	var mask_5_graphics_273 = new cjs.Graphics().p("AmjHzIAAvlINHAAIAAPlg");
	var mask_5_graphics_274 = new cjs.Graphics().p("AmjIAIAAv/INHAAIAAP/g");
	var mask_5_graphics_275 = new cjs.Graphics().p("AmjIPIAAwcINHAAIAAQcg");
	var mask_5_graphics_276 = new cjs.Graphics().p("AmjIdIAAw4INHAAIAAQ4g");
	var mask_5_graphics_277 = new cjs.Graphics().p("AmjIqIAAxTINHAAIAARTg");
	var mask_5_graphics_278 = new cjs.Graphics().p("AmjI4IAAxvINHAAIAARvg");
	var mask_5_graphics_279 = new cjs.Graphics().p("AmjJGIAAyLINHAAIAASLg");
	var mask_5_graphics_280 = new cjs.Graphics().p("AmjJUIAAynINHAAIAASng");
	var mask_5_graphics_281 = new cjs.Graphics().p("AmjJiIAAzDINHAAIAATDg");
	var mask_5_graphics_282 = new cjs.Graphics().p("AmjJwIAAzfINHAAIAATfg");
	var mask_5_graphics_283 = new cjs.Graphics().p("AmjJ+IAAz7INHAAIAAT7g");
	var mask_5_graphics_284 = new cjs.Graphics().p("AmjKMIAA0XINHAAIAAUXg");
	var mask_5_graphics_285 = new cjs.Graphics().p("AmjKZIAA0xINHAAIAAUxg");
	var mask_5_graphics_286 = new cjs.Graphics().p("AmjKnIAA1NINHAAIAAVNg");
	var mask_5_graphics_287 = new cjs.Graphics().p("AmjK1IAA1pINHAAIAAVpg");
	var mask_5_graphics_288 = new cjs.Graphics().p("AmjLDIAA2FINHAAIAAWFg");
	var mask_5_graphics_289 = new cjs.Graphics().p("AmjLRIAA2hINHAAIAAWhg");
	var mask_5_graphics_290 = new cjs.Graphics().p("AmjLfIAA29INHAAIAAW9g");
	var mask_5_graphics_291 = new cjs.Graphics().p("AmjLtIAA3ZINHAAIAAXZg");
	var mask_5_graphics_292 = new cjs.Graphics().p("AmjL7IAA31INHAAIAAX1g");
	var mask_5_graphics_293 = new cjs.Graphics().p("AmjMJIAA4RINHAAIAAYRg");
	var mask_5_graphics_294 = new cjs.Graphics().p("AmjMXIAA4tINHAAIAAYtg");
	var mask_5_graphics_295 = new cjs.Graphics().p("AmjMlIAA5JINHAAIAAZJg");
	var mask_5_graphics_296 = new cjs.Graphics().p("AmjMyIAA5kINHAAIAAZkg");
	var mask_5_graphics_297 = new cjs.Graphics().p("AmjNAIAA5/INHAAIAAZ/g");
	var mask_5_graphics_298 = new cjs.Graphics().p("AmjNOIAA6bINHAAIAAabg");
	var mask_5_graphics_299 = new cjs.Graphics().p("AmjNcIAA63INHAAIAAa3g");
	var mask_5_graphics_300 = new cjs.Graphics().p("AmjNqIAA7TINHAAIAAbTg");
	var mask_5_graphics_301 = new cjs.Graphics().p("AmjN4IAA7vINHAAIAAbvg");
	var mask_5_graphics_302 = new cjs.Graphics().p("AmjOGIAA8LINHAAIAAcLg");
	var mask_5_graphics_303 = new cjs.Graphics().p("AmjOUIAA8nINHAAIAAcng");
	var mask_5_graphics_304 = new cjs.Graphics().p("AmjOiIAA9DINHAAIAAdDg");
	var mask_5_graphics_305 = new cjs.Graphics().p("AmjOwIAA9fINHAAIAAdfg");
	var mask_5_graphics_306 = new cjs.Graphics().p("AHia7IAA96INHAAIAAd6g");
	var mask_5_graphics_307 = new cjs.Graphics().p("AmjPXIAA+tINHAAIAAetg");
	var mask_5_graphics_308 = new cjs.Graphics().p("AmjPxIAA/gINHAAIAAfgg");
	var mask_5_graphics_309 = new cjs.Graphics().p("AHicHMAAAggSINHAAMAAAAgSg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(266).to({graphics:mask_5_graphics_266,x:132.1,y:116.7}).wait(1).to({graphics:mask_5_graphics_267,x:222.2,y:194.6}).wait(1).to({graphics:mask_5_graphics_268,x:222.2,y:196}).wait(1).to({graphics:mask_5_graphics_269,x:222.2,y:197.4}).wait(1).to({graphics:mask_5_graphics_270,x:222.2,y:198.8}).wait(1).to({graphics:mask_5_graphics_271,x:222.2,y:200.1}).wait(1).to({graphics:mask_5_graphics_272,x:222.2,y:201.5}).wait(1).to({graphics:mask_5_graphics_273,x:222.2,y:202.9}).wait(1).to({graphics:mask_5_graphics_274,x:222.2,y:204.3}).wait(1).to({graphics:mask_5_graphics_275,x:222.2,y:205.7}).wait(1).to({graphics:mask_5_graphics_276,x:222.2,y:207.1}).wait(1).to({graphics:mask_5_graphics_277,x:222.2,y:208.5}).wait(1).to({graphics:mask_5_graphics_278,x:222.2,y:209.9}).wait(1).to({graphics:mask_5_graphics_279,x:222.2,y:211.3}).wait(1).to({graphics:mask_5_graphics_280,x:222.2,y:212.7}).wait(1).to({graphics:mask_5_graphics_281,x:222.2,y:214.1}).wait(1).to({graphics:mask_5_graphics_282,x:222.2,y:215.4}).wait(1).to({graphics:mask_5_graphics_283,x:222.2,y:216.8}).wait(1).to({graphics:mask_5_graphics_284,x:222.2,y:218.2}).wait(1).to({graphics:mask_5_graphics_285,x:222.2,y:219.6}).wait(1).to({graphics:mask_5_graphics_286,x:222.2,y:221}).wait(1).to({graphics:mask_5_graphics_287,x:222.2,y:222.4}).wait(1).to({graphics:mask_5_graphics_288,x:222.2,y:223.8}).wait(1).to({graphics:mask_5_graphics_289,x:222.2,y:225.2}).wait(1).to({graphics:mask_5_graphics_290,x:222.2,y:226.6}).wait(1).to({graphics:mask_5_graphics_291,x:222.2,y:228}).wait(1).to({graphics:mask_5_graphics_292,x:222.2,y:229.4}).wait(1).to({graphics:mask_5_graphics_293,x:222.2,y:230.8}).wait(1).to({graphics:mask_5_graphics_294,x:222.2,y:232.2}).wait(1).to({graphics:mask_5_graphics_295,x:222.2,y:233.6}).wait(1).to({graphics:mask_5_graphics_296,x:222.2,y:235}).wait(1).to({graphics:mask_5_graphics_297,x:222.2,y:236.3}).wait(1).to({graphics:mask_5_graphics_298,x:222.2,y:237.7}).wait(1).to({graphics:mask_5_graphics_299,x:222.2,y:239.1}).wait(1).to({graphics:mask_5_graphics_300,x:222.2,y:240.5}).wait(1).to({graphics:mask_5_graphics_301,x:222.2,y:241.9}).wait(1).to({graphics:mask_5_graphics_302,x:222.2,y:243.3}).wait(1).to({graphics:mask_5_graphics_303,x:222.2,y:244.7}).wait(1).to({graphics:mask_5_graphics_304,x:222.2,y:246.1}).wait(1).to({graphics:mask_5_graphics_305,x:222.2,y:247.5}).wait(1).to({graphics:mask_5_graphics_306,x:132.1,y:172.3}).wait(1).to({graphics:mask_5_graphics_307,x:222.2,y:251.4}).wait(1).to({graphics:mask_5_graphics_308,x:222.2,y:253.9}).wait(1).to({graphics:mask_5_graphics_309,x:132.1,y:179.9}).wait(300));

	// Layer 22
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(20,1,1).p("AqkCgQLKqsEliIQEkiIAyBYQAzBXqWVV");
	this.shape_6.setTransform(187.7,274.7);
	this.shape_6._off = true;

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(266).to({_off:false},0).wait(343));

	// Layer 21 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_239 = new cjs.Graphics().p("AN4WjQkMghinjVQimjVAhkMQAgkHDNilIMjQDQiuCFjUAAQgqAAgsgFg");
	var mask_6_graphics_240 = new cjs.Graphics().p("AMxWHQkAhWh5jyQh4jyBWkAQBUj7Dqh5IJFSQQiIBBiNAAQhoAAhrgjg");
	var mask_6_graphics_241 = new cjs.Graphics().p("AL4VTQjqiIhFkFQhGkFCHjqQCFjlD9hIIFQTtQhTAVhQAAQinAAiahZg");
	var mask_6_graphics_242 = new cjs.Graphics().p("ALPUIQjKizgQkOQgQkOC0jKQCvjGEHgTIBMUWIggABQjzAAi5ilg");
	var mask_6_graphics_243 = new cjs.Graphics().p("AJbStQiijZAmkLQAnkMDYihQDUifEFAiIi6ULQkEgpiejUg");
	var mask_6_graphics_244 = new cjs.Graphics().p("AIwSQQiUjiA2kIQA3kJDiiUQDdiREDAxIkJT+QkBg6iRjdg");
	var mask_6_graphics_245 = new cjs.Graphics().p("AIHR0QiGjrBHkFQBHkFDriGQDliDD/BBIlXTrQj8hJiEjlg");
	var mask_6_graphics_246 = new cjs.Graphics().p("AHhRXQh4jzBXkAQBXkADzh3QDth1D6BRImjTTQj4hYh1jtg");
	var mask_6_graphics_247 = new cjs.Graphics().p("AG9Q6Qhoj5Bmj6QBnj7D5hoQD0hmD1BgInvS3Qjyhnhmj0g");
	var mask_6_graphics_248 = new cjs.Graphics().p("AGcQdQhZj/B2jzQB2jzD/hZQD6hXDuBvIo4SWQjrh2hXj6g");
	var mask_6_graphics_249 = new cjs.Graphics().p("AF+QBQhJkECEjsQCFjrEEhJQD/hIDnB+Ip/RxQjkiEhHj/g");
	var mask_6_graphics_250 = new cjs.Graphics().p("AFjPlQg5kICTjjQCSjjEIg5QEDg4DfCMIrERIQjbiSg3kDg");
	var mask_6_graphics_251 = new cjs.Graphics().p("AFKPKQgokMCgjZQChjaELgoQEGgoDWCZIsGQaQjSifgokFg");
	var mask_6_graphics_252 = new cjs.Graphics().p("AE1OvQgYkNCtjPQCujQENgYQEIgXDMCmItFPoQjIirgXkIg");
	var mask_6_graphics_253 = new cjs.Graphics().p("AEdOMQgBkOC+jAQC+jBEOgBQEJgBC+C2IuWOfQi4i7gCkJg");
	var mask_6_graphics_254 = new cjs.Graphics().p("AEMNqQAVkNDOiwQDNivENAVQEIAVCuDFIvgNQQiojLAVkIg");
	var mask_6_graphics_255 = new cjs.Graphics().p("AEBNKQArkKDcieQDbieELArQEFArCdDTIwjL6QiXjXArkGg");
	var mask_6_graphics_256 = new cjs.Graphics().p("AD8MsQBCkGDniLQDoiLEGBCQEBBACLDgIxfKfQiEjkBAkBg");
	var mask_6_graphics_257 = new cjs.Graphics().p("AD9MRQBYkADyh3QDzh3D/BXQD7BVB3DrIyTI/QhwjuBVj6g");
	var mask_6_graphics_258 = new cjs.Graphics().p("AEFL3QBsj3D8hjQD8hiD3BsQDzBqBjD0Iy/HbQhcj2Bqjzg");
	var mask_6_graphics_259 = new cjs.Graphics().p("AETLhQCBjuEDhNQEDhNDtCAQDpB+BPD7IziF1QhIj+B+jog");
	var mask_6_graphics_260 = new cjs.Graphics().p("AEnLMQCUjiEJg3QEIg3DiCUQDeCRA5EAIz9ELQgykCCRjeg");
	var mask_6_graphics_261 = new cjs.Graphics().p("AFBK7QCnjVEMghQEMghDVCmQDRCjAkEFI0PCfQgdkFCjjRg");
	var mask_6_graphics_262 = new cjs.Graphics().p("AFhKtQC4jGEOgLQEOgKDGC3QDDC0AOEHI0YAyQgGkHCzjCg");
	var mask_6_graphics_263 = new cjs.Graphics().p("AC0Q+QAPkGDDizQDIi2EOAMQEOAMC2DHQCzDDgIEHg");
	var mask_6_graphics_264 = new cjs.Graphics().p("AC4PtQAmkFDRihQDWilEMAiQEMAjClDVQCiDSgeEFg");
	var mask_6_graphics_265 = new cjs.Graphics().p("ADCOcQA7kADeiQQDjiSEIA4QEIA5CTDjQCQDeg0ECg");
	var mask_6_graphics_266 = new cjs.Graphics().p("ADPNNQBQj7Dph8QDviAECBPQEDBPB/DuQB9DphJD9g");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(239).to({graphics:mask_6_graphics_239,x:136,y:144.8}).wait(1).to({graphics:mask_6_graphics_240,x:130.5,y:145}).wait(1).to({graphics:mask_6_graphics_241,x:124.4,y:145.2}).wait(1).to({graphics:mask_6_graphics_242,x:117.9,y:145.3}).wait(1).to({graphics:mask_6_graphics_243,x:120.7,y:145}).wait(1).to({graphics:mask_6_graphics_244,x:122.7,y:144.7}).wait(1).to({graphics:mask_6_graphics_245,x:124.6,y:144.2}).wait(1).to({graphics:mask_6_graphics_246,x:126.5,y:143.6}).wait(1).to({graphics:mask_6_graphics_247,x:128.4,y:142.9}).wait(1).to({graphics:mask_6_graphics_248,x:130.2,y:142.1}).wait(1).to({graphics:mask_6_graphics_249,x:132,y:141.2}).wait(1).to({graphics:mask_6_graphics_250,x:133.7,y:140.2}).wait(1).to({graphics:mask_6_graphics_251,x:135.4,y:139}).wait(1).to({graphics:mask_6_graphics_252,x:136.9,y:137.8}).wait(1).to({graphics:mask_6_graphics_253,x:138.9,y:136}).wait(1).to({graphics:mask_6_graphics_254,x:140.7,y:134.1}).wait(1).to({graphics:mask_6_graphics_255,x:142.4,y:131.9}).wait(1).to({graphics:mask_6_graphics_256,x:143.9,y:129.7}).wait(1).to({graphics:mask_6_graphics_257,x:145.1,y:127.3}).wait(1).to({graphics:mask_6_graphics_258,x:146.2,y:124.8}).wait(1).to({graphics:mask_6_graphics_259,x:147.1,y:122.3}).wait(1).to({graphics:mask_6_graphics_260,x:147.7,y:119.6}).wait(1).to({graphics:mask_6_graphics_261,x:148.2,y:116.9}).wait(1).to({graphics:mask_6_graphics_262,x:148.4,y:114.2}).wait(1).to({graphics:mask_6_graphics_263,x:148.3,y:114.4}).wait(1).to({graphics:mask_6_graphics_264,x:148.3,y:117.1}).wait(1).to({graphics:mask_6_graphics_265,x:148.3,y:119.8}).wait(1).to({graphics:mask_6_graphics_266,x:148.2,y:122.4}).wait(343));

	// Layer 20
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(20,1,1).p("AqkHEQLKqtEliHQEkiIAyBXQATAhhSDW");
	this.shape_7.setTransform(187.7,245.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(20,1,1).p("AqkCgQLKqsEliIQEkiIAyBYQAzBXqWVV");
	this.shape_8.setTransform(187.7,274.7);

	var maskedShapeInstanceList = [this.shape_7,this.shape_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7}]},239).to({state:[{t:this.shape_7}]},4).to({state:[{t:this.shape_8}]},9).wait(357));

	// Layer 7 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_190 = new cjs.Graphics().p("AE9UHICHhpIDDD8IiHBpg");
	var mask_7_graphics_191 = new cjs.Graphics().p("AiuhAICbh5IDDD6IidB5g");
	var mask_7_graphics_192 = new cjs.Graphics().p("Ai5g4ICxiJIDCD6IixCKg");
	var mask_7_graphics_193 = new cjs.Graphics().p("AjEgwIDGiZIDDD6IjGCag");
	var mask_7_graphics_194 = new cjs.Graphics().p("AjOgoIDaiqIDDD7IjaCqg");
	var mask_7_graphics_195 = new cjs.Graphics().p("AjZggIDwi6IDDD7IjwC6g");
	var mask_7_graphics_196 = new cjs.Graphics().p("AjjgXIEFjLIDCD6IkFDLg");
	var mask_7_graphics_197 = new cjs.Graphics().p("AjugPIEajbIDDD6IkaDbg");
	var mask_7_graphics_198 = new cjs.Graphics().p("Aj4gHIEujrIDDD6IkvDsg");
	var mask_7_graphics_199 = new cjs.Graphics().p("AkDAAIFEj7IDDD7IlED8g");
	var mask_7_graphics_200 = new cjs.Graphics().p("AkOAIIFakLIDDD8IlaELg");
	var mask_7_graphics_201 = new cjs.Graphics().p("AkYAQIFukbIDDD8IluEbg");
	var mask_7_graphics_202 = new cjs.Graphics().p("AkjAZIGDksIDED7ImDEsg");
	var mask_7_graphics_203 = new cjs.Graphics().p("AktAhIGYk8IDDD7ImYE9g");
	var mask_7_graphics_204 = new cjs.Graphics().p("Ak4ApIGulNIDDD8ImuFNg");
	var mask_7_graphics_205 = new cjs.Graphics().p("AlCAxIHCldIDDD8InCFdg");
	var mask_7_graphics_206 = new cjs.Graphics().p("AlNA5IHYltIDDD8InYFtg");
	var mask_7_graphics_207 = new cjs.Graphics().p("AlYBCIHtl+IDED7IntF+g");
	var mask_7_graphics_208 = new cjs.Graphics().p("AliBKIICmOIDDD7IoCGPg");
	var mask_7_graphics_209 = new cjs.Graphics().p("AltBSIIYmeIDCD7IoWGfg");
	var mask_7_graphics_210 = new cjs.Graphics().p("Al3BaIIsmvIDDD8IosGvg");
	var mask_7_graphics_211 = new cjs.Graphics().p("AmCBiIJCm/IDDD8IpCG/g");
	var mask_7_graphics_212 = new cjs.Graphics().p("AmMBqIJWnPIDCD8IpUHPg");
	var mask_7_graphics_213 = new cjs.Graphics().p("AmWByIJqneIDDD7IppHeg");
	var mask_7_graphics_214 = new cjs.Graphics().p("AmfB5IJ8ntIDDD7Ip8Hug");
	var mask_7_graphics_215 = new cjs.Graphics().p("AmpCBIKQn9IDDD8IqQH9g");
	var mask_7_graphics_216 = new cjs.Graphics().p("AmzCJIKkoMIDDD7IqkIMg");
	var mask_7_graphics_217 = new cjs.Graphics().p("Am9CQIK4obIDDD8Iq4Ibg");
	var mask_7_graphics_218 = new cjs.Graphics().p("AnHCYILMorIDDD8IrMIrg");
	var mask_7_graphics_219 = new cjs.Graphics().p("AnRCgILfo6IDED7IrfI6g");
	var mask_7_graphics_220 = new cjs.Graphics().p("AnbCnILzpJIDED8IrzJJg");
	var mask_7_graphics_221 = new cjs.Graphics().p("AnkCvIMGpZIDDD8IsGJZg");
	var mask_7_graphics_222 = new cjs.Graphics().p("AnuC2IMapnIDDD8IsaJng");
	var mask_7_graphics_223 = new cjs.Graphics().p("An4C+IMup3IDDD8IsuJ3g");
	var mask_7_graphics_224 = new cjs.Graphics().p("AoCDGINCqGIDDD7ItCKGg");
	var mask_7_graphics_225 = new cjs.Graphics().p("AoMDOINWqWIDDD7ItWKWg");
	var mask_7_graphics_226 = new cjs.Graphics().p("AoWDWINpqmIDDD8ItoKlg");
	var mask_7_graphics_227 = new cjs.Graphics().p("AogDdIN+q1IDCD8It8K0g");
	var mask_7_graphics_228 = new cjs.Graphics().p("AopDlIOQrEIDDD7IuQLEg");
	var mask_7_graphics_229 = new cjs.Graphics().p("AozDsIOkrTIDDD8IukLTg");
	var mask_7_graphics_230 = new cjs.Graphics().p("Ao9D0IO4rjIDDD8Iu4Lig");
	var mask_7_graphics_231 = new cjs.Graphics().p("ApHD8IPMryIDDD7IvMLyg");
	var mask_7_graphics_232 = new cjs.Graphics().p("ApREDIPgsBIDDD8IvgMBg");
	var mask_7_graphics_233 = new cjs.Graphics().p("ApbELIP0sRIDCD8IvyMQg");
	var mask_7_graphics_234 = new cjs.Graphics().p("AplETIQIsgIDDD7IwHMgg");
	var mask_7_graphics_235 = new cjs.Graphics().p("ApuEaIQasvIDDD8IwaMvg");
	var mask_7_graphics_236 = new cjs.Graphics().p("Ap4EiIQus+IDDD7IwuM+g");
	var mask_7_graphics_237 = new cjs.Graphics().p("AqCEqIRCtOIDDD8IxCNNg");
	var mask_7_graphics_238 = new cjs.Graphics().p("AqMExIRWtcIDDD7IxWNcg");
	var mask_7_graphics_239 = new cjs.Graphics().p("AizUHIRpttIDDD7IxqNug");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(190).to({graphics:mask_7_graphics_190,x:64.7,y:153.9}).wait(1).to({graphics:mask_7_graphics_191,x:114,y:289.1}).wait(1).to({graphics:mask_7_graphics_192,x:115.1,y:288.3}).wait(1).to({graphics:mask_7_graphics_193,x:116.1,y:287.5}).wait(1).to({graphics:mask_7_graphics_194,x:117.2,y:286.6}).wait(1).to({graphics:mask_7_graphics_195,x:118.2,y:285.8}).wait(1).to({graphics:mask_7_graphics_196,x:119.3,y:285}).wait(1).to({graphics:mask_7_graphics_197,x:120.4,y:284.2}).wait(1).to({graphics:mask_7_graphics_198,x:121.4,y:283.4}).wait(1).to({graphics:mask_7_graphics_199,x:122.5,y:282.5}).wait(1).to({graphics:mask_7_graphics_200,x:123.5,y:281.7}).wait(1).to({graphics:mask_7_graphics_201,x:124.6,y:280.9}).wait(1).to({graphics:mask_7_graphics_202,x:125.7,y:280.1}).wait(1).to({graphics:mask_7_graphics_203,x:126.7,y:279.3}).wait(1).to({graphics:mask_7_graphics_204,x:127.8,y:278.4}).wait(1).to({graphics:mask_7_graphics_205,x:128.8,y:277.6}).wait(1).to({graphics:mask_7_graphics_206,x:129.9,y:276.8}).wait(1).to({graphics:mask_7_graphics_207,x:131,y:276}).wait(1).to({graphics:mask_7_graphics_208,x:132,y:275.2}).wait(1).to({graphics:mask_7_graphics_209,x:133.1,y:274.4}).wait(1).to({graphics:mask_7_graphics_210,x:134.1,y:273.5}).wait(1).to({graphics:mask_7_graphics_211,x:135.2,y:272.7}).wait(1).to({graphics:mask_7_graphics_212,x:136.2,y:271.9}).wait(1).to({graphics:mask_7_graphics_213,x:137.2,y:271.2}).wait(1).to({graphics:mask_7_graphics_214,x:138.1,y:270.4}).wait(1).to({graphics:mask_7_graphics_215,x:139.1,y:269.7}).wait(1).to({graphics:mask_7_graphics_216,x:140.1,y:268.9}).wait(1).to({graphics:mask_7_graphics_217,x:141.1,y:268.1}).wait(1).to({graphics:mask_7_graphics_218,x:142.1,y:267.4}).wait(1).to({graphics:mask_7_graphics_219,x:143.1,y:266.6}).wait(1).to({graphics:mask_7_graphics_220,x:144.1,y:265.8}).wait(1).to({graphics:mask_7_graphics_221,x:145,y:265.1}).wait(1).to({graphics:mask_7_graphics_222,x:146,y:264.3}).wait(1).to({graphics:mask_7_graphics_223,x:147,y:263.5}).wait(1).to({graphics:mask_7_graphics_224,x:148,y:262.8}).wait(1).to({graphics:mask_7_graphics_225,x:149,y:262}).wait(1).to({graphics:mask_7_graphics_226,x:150,y:261.3}).wait(1).to({graphics:mask_7_graphics_227,x:151,y:260.5}).wait(1).to({graphics:mask_7_graphics_228,x:151.9,y:259.7}).wait(1).to({graphics:mask_7_graphics_229,x:152.9,y:259}).wait(1).to({graphics:mask_7_graphics_230,x:153.9,y:258.2}).wait(1).to({graphics:mask_7_graphics_231,x:154.9,y:257.5}).wait(1).to({graphics:mask_7_graphics_232,x:155.9,y:256.7}).wait(1).to({graphics:mask_7_graphics_233,x:156.9,y:255.9}).wait(1).to({graphics:mask_7_graphics_234,x:157.9,y:255.2}).wait(1).to({graphics:mask_7_graphics_235,x:158.8,y:254.4}).wait(1).to({graphics:mask_7_graphics_236,x:159.8,y:253.6}).wait(1).to({graphics:mask_7_graphics_237,x:160.8,y:252.9}).wait(1).to({graphics:mask_7_graphics_238,x:161.8,y:252.1}).wait(1).to({graphics:mask_7_graphics_239,x:114.5,y:153.9}).wait(370));

	// Layer 1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(20,1,1).p("AqkCgQLKqsEliIQEkiIAyBYQAzBXqWVV");
	this.shape_9.setTransform(187.7,274.7);
	this.shape_9._off = true;

	var maskedShapeInstanceList = [this.shape_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(190).to({_off:false},0).wait(419));

	// Layer 18
	this.instance_3 = new lib.ar1("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(44.9,178.7,1,1,0,110.9,-69.1,-0.7,0.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).wait(600));

	// Layer 5 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_94 = new cjs.Graphics().p("AoHSNIAAjIIXvAAIAADIg");
	var mask_8_graphics_95 = new cjs.Graphics().p("Ar3BvIAAjdIXvAAIAADdg");
	var mask_8_graphics_96 = new cjs.Graphics().p("Ar3B6IAAjzIXvAAIAADzg");
	var mask_8_graphics_97 = new cjs.Graphics().p("Ar3CFIAAkJIXvAAIAAEJg");
	var mask_8_graphics_98 = new cjs.Graphics().p("Ar3CQIAAkgIXvAAIAAEgg");
	var mask_8_graphics_99 = new cjs.Graphics().p("Ar3CcIAAk3IXvAAIAAE3g");
	var mask_8_graphics_100 = new cjs.Graphics().p("Ar3CnIAAlNIXvAAIAAFNg");
	var mask_8_graphics_101 = new cjs.Graphics().p("Ar3CyIAAljIXvAAIAAFjg");
	var mask_8_graphics_102 = new cjs.Graphics().p("Ar3C9IAAl5IXvAAIAAF5g");
	var mask_8_graphics_103 = new cjs.Graphics().p("Ar3DIIAAmPIXvAAIAAGPg");
	var mask_8_graphics_104 = new cjs.Graphics().p("Ar3DTIAAmlIXvAAIAAGlg");
	var mask_8_graphics_105 = new cjs.Graphics().p("Ar3DeIAAm7IXvAAIAAG7g");
	var mask_8_graphics_106 = new cjs.Graphics().p("Ar3DpIAAnRIXvAAIAAHRg");
	var mask_8_graphics_107 = new cjs.Graphics().p("Ar3D0IAAnnIXvAAIAAHng");
	var mask_8_graphics_108 = new cjs.Graphics().p("Ar3D/IAAn9IXvAAIAAH9g");
	var mask_8_graphics_109 = new cjs.Graphics().p("Ar3EKIAAoTIXvAAIAAITg");
	var mask_8_graphics_110 = new cjs.Graphics().p("Ar3EVIAAopIXvAAIAAIpg");
	var mask_8_graphics_111 = new cjs.Graphics().p("Ar3EhIAApAIXvAAIAAJAg");
	var mask_8_graphics_112 = new cjs.Graphics().p("Ar3EsIAApXIXvAAIAAJXg");
	var mask_8_graphics_113 = new cjs.Graphics().p("Ar3E3IAAptIXvAAIAAJtg");
	var mask_8_graphics_114 = new cjs.Graphics().p("Ar3FCIAAqDIXvAAIAAKDg");
	var mask_8_graphics_115 = new cjs.Graphics().p("Ar3FNIAAqZIXvAAIAAKZg");
	var mask_8_graphics_116 = new cjs.Graphics().p("Ar3FYIAAqvIXvAAIAAKvg");
	var mask_8_graphics_117 = new cjs.Graphics().p("Ar3FjIAArFIXvAAIAALFg");
	var mask_8_graphics_118 = new cjs.Graphics().p("Ar3FuIAArbIXvAAIAALbg");
	var mask_8_graphics_119 = new cjs.Graphics().p("Ar3F6IAAryIXvAAIAALyg");
	var mask_8_graphics_120 = new cjs.Graphics().p("Ar3GEIAAsHIXvAAIAAMHg");
	var mask_8_graphics_121 = new cjs.Graphics().p("Ar3GPIAAsdIXvAAIAAMdg");
	var mask_8_graphics_122 = new cjs.Graphics().p("Ar3GbIAAs1IXvAAIAAM1g");
	var mask_8_graphics_123 = new cjs.Graphics().p("Ar3GlIAAtKIXvAAIAANKg");
	var mask_8_graphics_124 = new cjs.Graphics().p("Ar3GxIAAthIXvAAIAANhg");
	var mask_8_graphics_125 = new cjs.Graphics().p("Ar3G8IAAt3IXvAAIAAN3g");
	var mask_8_graphics_126 = new cjs.Graphics().p("Ar3HHIAAuNIXvAAIAAONg");
	var mask_8_graphics_127 = new cjs.Graphics().p("Ar3HSIAAujIXvAAIAAOjg");
	var mask_8_graphics_128 = new cjs.Graphics().p("Ar3HdIAAu5IXvAAIAAO5g");
	var mask_8_graphics_129 = new cjs.Graphics().p("Ar3HoIAAvPIXvAAIAAPPg");
	var mask_8_graphics_130 = new cjs.Graphics().p("Ar3HzIAAvlIXvAAIAAPlg");
	var mask_8_graphics_131 = new cjs.Graphics().p("Ar3H/IAAv9IXvAAIAAP9g");
	var mask_8_graphics_132 = new cjs.Graphics().p("Ar3IJIAAwSIXvAAIAAQSg");
	var mask_8_graphics_133 = new cjs.Graphics().p("Ar3IVIAAwpIXvAAIAAQpg");
	var mask_8_graphics_134 = new cjs.Graphics().p("Ar3IgIAAw/IXvAAIAAQ/g");
	var mask_8_graphics_135 = new cjs.Graphics().p("Ar3IrIAAxVIXvAAIAARVg");
	var mask_8_graphics_136 = new cjs.Graphics().p("Ar3I2IAAxrIXvAAIAARrg");
	var mask_8_graphics_137 = new cjs.Graphics().p("Ar3JBIAAyBIXvAAIAASBg");
	var mask_8_graphics_138 = new cjs.Graphics().p("Ar3JMIAAyXIXvAAIAASXg");
	var mask_8_graphics_139 = new cjs.Graphics().p("Ar3JXIAAytIXvAAIAAStg");
	var mask_8_graphics_140 = new cjs.Graphics().p("Ar3JiIAAzDIXvAAIAATDg");
	var mask_8_graphics_141 = new cjs.Graphics().p("Ar3JtIAAzZIXvAAIAATZg");
	var mask_8_graphics_142 = new cjs.Graphics().p("Ar3J4IAAzvIXvAAIAATvg");
	var mask_8_graphics_143 = new cjs.Graphics().p("Ar3KEIAA0GIXvAAIAAUGg");
	var mask_8_graphics_144 = new cjs.Graphics().p("Ar3KOIAA0bIXvAAIAAUbg");
	var mask_8_graphics_145 = new cjs.Graphics().p("Ar3KaIAA0zIXvAAIAAUzg");
	var mask_8_graphics_146 = new cjs.Graphics().p("Ar3KlIAA1JIXvAAIAAVJg");
	var mask_8_graphics_147 = new cjs.Graphics().p("Ar3K3IAA1tIXvAAIAAVtg");
	var mask_8_graphics_148 = new cjs.Graphics().p("Ar3LKIAA2TIXvAAIAAWTg");
	var mask_8_graphics_149 = new cjs.Graphics().p("AoHcHIAA26IXvAAIAAW6g");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(94).to({graphics:mask_8_graphics_94,x:100,y:116.5}).wait(1).to({graphics:mask_8_graphics_95,x:124,y:224.2}).wait(1).to({graphics:mask_8_graphics_96,x:124,y:225.3}).wait(1).to({graphics:mask_8_graphics_97,x:124,y:226.4}).wait(1).to({graphics:mask_8_graphics_98,x:124,y:227.5}).wait(1).to({graphics:mask_8_graphics_99,x:124,y:228.6}).wait(1).to({graphics:mask_8_graphics_100,x:124,y:229.7}).wait(1).to({graphics:mask_8_graphics_101,x:124,y:230.8}).wait(1).to({graphics:mask_8_graphics_102,x:124,y:231.9}).wait(1).to({graphics:mask_8_graphics_103,x:124,y:233.1}).wait(1).to({graphics:mask_8_graphics_104,x:124,y:234.2}).wait(1).to({graphics:mask_8_graphics_105,x:124,y:235.3}).wait(1).to({graphics:mask_8_graphics_106,x:124,y:236.4}).wait(1).to({graphics:mask_8_graphics_107,x:124,y:237.5}).wait(1).to({graphics:mask_8_graphics_108,x:124,y:238.6}).wait(1).to({graphics:mask_8_graphics_109,x:124,y:239.7}).wait(1).to({graphics:mask_8_graphics_110,x:124,y:240.9}).wait(1).to({graphics:mask_8_graphics_111,x:124,y:242}).wait(1).to({graphics:mask_8_graphics_112,x:124,y:243.1}).wait(1).to({graphics:mask_8_graphics_113,x:124,y:244.2}).wait(1).to({graphics:mask_8_graphics_114,x:124,y:245.3}).wait(1).to({graphics:mask_8_graphics_115,x:124,y:246.4}).wait(1).to({graphics:mask_8_graphics_116,x:124,y:247.5}).wait(1).to({graphics:mask_8_graphics_117,x:124,y:248.6}).wait(1).to({graphics:mask_8_graphics_118,x:124,y:249.7}).wait(1).to({graphics:mask_8_graphics_119,x:124,y:250.9}).wait(1).to({graphics:mask_8_graphics_120,x:124,y:252}).wait(1).to({graphics:mask_8_graphics_121,x:124,y:253.1}).wait(1).to({graphics:mask_8_graphics_122,x:124,y:254.2}).wait(1).to({graphics:mask_8_graphics_123,x:124,y:255.3}).wait(1).to({graphics:mask_8_graphics_124,x:124,y:256.4}).wait(1).to({graphics:mask_8_graphics_125,x:124,y:257.5}).wait(1).to({graphics:mask_8_graphics_126,x:124,y:258.7}).wait(1).to({graphics:mask_8_graphics_127,x:124,y:259.8}).wait(1).to({graphics:mask_8_graphics_128,x:124,y:260.9}).wait(1).to({graphics:mask_8_graphics_129,x:124,y:262}).wait(1).to({graphics:mask_8_graphics_130,x:124,y:263.1}).wait(1).to({graphics:mask_8_graphics_131,x:124,y:264.2}).wait(1).to({graphics:mask_8_graphics_132,x:124,y:265.3}).wait(1).to({graphics:mask_8_graphics_133,x:124,y:266.4}).wait(1).to({graphics:mask_8_graphics_134,x:124,y:267.5}).wait(1).to({graphics:mask_8_graphics_135,x:124,y:268.6}).wait(1).to({graphics:mask_8_graphics_136,x:124,y:269.8}).wait(1).to({graphics:mask_8_graphics_137,x:124,y:270.9}).wait(1).to({graphics:mask_8_graphics_138,x:124,y:272}).wait(1).to({graphics:mask_8_graphics_139,x:124,y:273.1}).wait(1).to({graphics:mask_8_graphics_140,x:124,y:274.2}).wait(1).to({graphics:mask_8_graphics_141,x:124,y:275.3}).wait(1).to({graphics:mask_8_graphics_142,x:124,y:276.4}).wait(1).to({graphics:mask_8_graphics_143,x:124,y:277.6}).wait(1).to({graphics:mask_8_graphics_144,x:124,y:278.7}).wait(1).to({graphics:mask_8_graphics_145,x:124,y:279.8}).wait(1).to({graphics:mask_8_graphics_146,x:124,y:280.9}).wait(1).to({graphics:mask_8_graphics_147,x:124,y:282.8}).wait(1).to({graphics:mask_8_graphics_148,x:124,y:284.6}).wait(1).to({graphics:mask_8_graphics_149,x:100,y:179.9}).wait(460));

	// Layer 4
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(20,1,1).p("Ao9ifQDdiyDnieQDmieEihVQEOgwiTFaIpaSh");
	this.shape_10.setTransform(97.9,274.1);
	this.shape_10._off = true;

	var maskedShapeInstanceList = [this.shape_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(94).to({_off:false},0).wait(515));

	// Layer 12 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_69 = new cjs.Graphics().p("AGaVvQkKguibjcQicjdAtkKQAtkFDUibILxQpQinByjBAAQg6AAg8gKg");
	var mask_9_graphics_70 = new cjs.Graphics().p("AFuVcQkDhPh+juQh/jvBPkCQBMj9Dnh/IJlR/QiPBJiVAAQhgAAhjgeg");
	var mask_9_graphics_71 = new cjs.Graphics().p("AFHVAQj3hvhfj9Qhgj8Bvj3QBsjxD0hhIHPTDQhwAphvAAQiFAAiEg7g");
	var mask_9_graphics_72 = new cjs.Graphics().p("AEmUaQjniNg/kGQg/kHCMjnQCKjiD/hBIEyT0QhMARhJAAQiuAAifhhg");
	var mask_9_graphics_73 = new cjs.Graphics().p("AELTsQjTipgekMQgckNCnjTQCmjPEFggICQUQQgjAEgiAAQjdAAiziQg");
	var mask_9_graphics_74 = new cjs.Graphics().p("ADtS2Qi8jCAEkOQAFkPDCi8QC+i4EHAAIgVUZQkHgIi4i+g");
	var mask_9_graphics_75 = new cjs.Graphics().p("ACOR8QihjYAmkMQAmkLDYiiQDUifEFAhIi5UMQkEgpifjUg");
	var mask_9_graphics_76 = new cjs.Graphics().p("AA4RBQiEjrBIkFQBGkEDriGQDmiDD/BCIlaTqQj9hJiDjmg");
	var mask_9_graphics_77 = new cjs.Graphics().p("AgSQGQhnj6Boj6QBnj5D6hnQD1hlD0BiIn2S0Qjxhphkj0g");
	var mask_9_graphics_78 = new cjs.Graphics().p("AhSPLQhHkFCHjqQCGjrEEhGQEAhFDmB/IqKRsQjhiGhFkAg");
	var mask_9_graphics_79 = new cjs.Graphics().p("AiGOSQglkLCjjYQCijYEMglQEGgkDUCbIsTQRQjOiiglkGg");
	var mask_9_graphics_80 = new cjs.Graphics().p("AisNcQgDkOC8jBQC9jCEOgDQEJgDC+C1IuPOlQi5i6gDkJg");
	var mask_9_graphics_81 = new cjs.Graphics().p("AjEMpQAfkMDSioQDUioEMAfQEIAeCmDMIv9MrQihjRAfkHg");
	var mask_9_graphics_82 = new cjs.Graphics().p("AjPL7QBBkHDmiLQDoiMEGBAQEBA/CLDfIxbKkQiFjjA/kBg");
	var mask_9_graphics_83 = new cjs.Graphics().p("AjKLRQBhj8D2htQD3huD8BhQD3BfBvDvIyoIRQhnjyBfj3g");
	var mask_9_graphics_84 = new cjs.Graphics().p("Ai3KuQCAjuEChOQEDhODtCAQDpB+BQD7IzhF3QhIj9B+jpg");
	var mask_9_graphics_85 = new cjs.Graphics().p("AiXKQQCdjcEKgsQELgtDcCdQDXCaAvEDI0GDXQgnkECZjYg");
	var mask_9_graphics_86 = new cjs.Graphics().p("AhoJ5QC2jGEOgKQEPgLDGC3QDCC0AOEHI0WAzQgHkHC0jDg");
	var mask_9_graphics_87 = new cjs.Graphics().p("AkTPhQAakGDLiqQDOiuENAYQEOAXCtDPQCqDLgTEGg");
	var mask_9_graphics_88 = new cjs.Graphics().p("AkHNnQA8kBDdiPQDkiSEIA5QEIA6CSDjQCPDeg0ECg");
	var mask_9_graphics_89 = new cjs.Graphics().p("AjwLwQBbj3DuhyQD0h0D/BaQD/BaB0D0QByDvhUD5g");
	var mask_9_graphics_90 = new cjs.Graphics().p("AjPJ+QB6jpD6hTQEBhVDxB6QDxB5BVEBQBTD7hzDtg");
	var mask_9_graphics_91 = new cjs.Graphics().p("AikIUQCWjYECgzQEKg0DgCXQDgCXA0EJQAzEEiQDcg");
	var mask_9_graphics_92 = new cjs.Graphics().p("AhxGyQCvjEEIgSQEOgRDLCyQDLCyASENQASEIiqDJg");
	var mask_9_graphics_93 = new cjs.Graphics().p("Ag3FaQDHisEIAQQEOAQCzDLQCzDKgQENQgQEJjCCxg");
	var mask_9_graphics_94 = new cjs.Graphics().p("AAKEOQDbiREEAxQEKAyCYDfQCYDfgyEKQgxEEjXCXg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(69).to({graphics:mask_9_graphics_69,x:88.8,y:140.1}).wait(1).to({graphics:mask_9_graphics_70,x:85.3,y:140.2}).wait(1).to({graphics:mask_9_graphics_71,x:81.5,y:140.3}).wait(1).to({graphics:mask_9_graphics_72,x:77.6,y:140.3}).wait(1).to({graphics:mask_9_graphics_73,x:73.6,y:140.4}).wait(1).to({graphics:mask_9_graphics_74,x:70.5,y:140.4}).wait(1).to({graphics:mask_9_graphics_75,x:74.6,y:140.1}).wait(1).to({graphics:mask_9_graphics_76,x:78.6,y:139.2}).wait(1).to({graphics:mask_9_graphics_77,x:82.5,y:137.9}).wait(1).to({graphics:mask_9_graphics_78,x:86.2,y:136.1}).wait(1).to({graphics:mask_9_graphics_79,x:89.6,y:133.8}).wait(1).to({graphics:mask_9_graphics_80,x:92.7,y:131.1}).wait(1).to({graphics:mask_9_graphics_81,x:95.5,y:128.1}).wait(1).to({graphics:mask_9_graphics_82,x:97.8,y:124.7}).wait(1).to({graphics:mask_9_graphics_83,x:99.8,y:121}).wait(1).to({graphics:mask_9_graphics_84,x:101.2,y:117.2}).wait(1).to({graphics:mask_9_graphics_85,x:102.1,y:113.2}).wait(1).to({graphics:mask_9_graphics_86,x:102.5,y:109.1}).wait(1).to({graphics:mask_9_graphics_87,x:102.5,y:110.6}).wait(1).to({graphics:mask_9_graphics_88,x:102.5,y:114.7}).wait(1).to({graphics:mask_9_graphics_89,x:102.5,y:118.7}).wait(1).to({graphics:mask_9_graphics_90,x:102.4,y:122.5}).wait(1).to({graphics:mask_9_graphics_91,x:102.3,y:126}).wait(1).to({graphics:mask_9_graphics_92,x:102.2,y:129.3}).wait(1).to({graphics:mask_9_graphics_93,x:102.1,y:132.2}).wait(1).to({graphics:mask_9_graphics_94,x:102.2,y:134.7}).wait(515));

	// Layer 11
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(20,1,1).p("Ao9EkQDdiyDnicQDmieEihWQDJgjgeC3");
	this.shape_11.setTransform(97.9,228.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(20,1,1).p("Ao9ifQDdiyDnieQDmieEihVQEOgwiTFaIpaSh");
	this.shape_12.setTransform(97.9,274.1);

	var maskedShapeInstanceList = [this.shape_11,this.shape_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_11}]},69).to({state:[{t:this.shape_12}]},15).wait(525));

	// Layer 3 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	var mask_10_graphics_9 = new cjs.Graphics().p("AhVQ9IB/hYIDjFIIiABYg");
	var mask_10_graphics_10 = new cjs.Graphics().p("Ai3hyICOhiIDiFHIiPBig");
	var mask_10_graphics_11 = new cjs.Graphics().p("Ai/htICdhsIDiFHIidBsg");
	var mask_10_graphics_12 = new cjs.Graphics().p("AjGhoICrh3IDiFIIisB2g");
	var mask_10_graphics_13 = new cjs.Graphics().p("AjNhjIC6iBIDiFIIi7CAg");
	var mask_10_graphics_14 = new cjs.Graphics().p("AjVheIDJiLIDiFIIjJCKg");
	var mask_10_graphics_15 = new cjs.Graphics().p("AjchZIDXiVIDiFIIjYCUg");
	var mask_10_graphics_16 = new cjs.Graphics().p("AjjhUIDlifIDiFIIjlCeg");
	var mask_10_graphics_17 = new cjs.Graphics().p("AjqhPIDzipIDiFIIjzCpg");
	var mask_10_graphics_18 = new cjs.Graphics().p("AjyhKIECizIDjFIIkCCzg");
	var mask_10_graphics_19 = new cjs.Graphics().p("Aj5hFIERi9IDiFIIkRC9g");
	var mask_10_graphics_20 = new cjs.Graphics().p("AkAhAIEfjHIDjFIIkgDHg");
	var mask_10_graphics_21 = new cjs.Graphics().p("AkIg7IEujRIDjFIIkuDRg");
	var mask_10_graphics_22 = new cjs.Graphics().p("AkPg2IE9jbIDiFIIk9Dbg");
	var mask_10_graphics_23 = new cjs.Graphics().p("AkWgxIFLjlIDiFIIlLDlg");
	var mask_10_graphics_24 = new cjs.Graphics().p("AkdgsIFZjvIDiFIIlZDvg");
	var mask_10_graphics_25 = new cjs.Graphics().p("AklgnIFoj5IDjFIIloD5g");
	var mask_10_graphics_26 = new cjs.Graphics().p("AksgiIF3kDIDiFIIl3EDg");
	var mask_10_graphics_27 = new cjs.Graphics().p("AkzgdIGFkNIDiFIImFENg");
	var mask_10_graphics_28 = new cjs.Graphics().p("Ak7gYIGUkXIDjFIImUEXg");
	var mask_10_graphics_29 = new cjs.Graphics().p("AlCgTIGjkhIDiFIImjEhg");
	var mask_10_graphics_30 = new cjs.Graphics().p("AlJgOIGxkrIDiFIImxErg");
	var mask_10_graphics_31 = new cjs.Graphics().p("AlQgJIG/k1IDjFIInAE1g");
	var mask_10_graphics_32 = new cjs.Graphics().p("AlYgEIHOk/IDjFHInOFAg");
	var mask_10_graphics_33 = new cjs.Graphics().p("AlfAAIHdlIIDiFIIndFJg");
	var mask_10_graphics_34 = new cjs.Graphics().p("AlmAFIHrlSIDjFJInsFSg");
	var mask_10_graphics_35 = new cjs.Graphics().p("AluAKIH6lcIDjFJIn6Fcg");
	var mask_10_graphics_36 = new cjs.Graphics().p("Al1APIIIlmIDjFJIoJFmg");
	var mask_10_graphics_37 = new cjs.Graphics().p("Al8AUIIXlwIDiFJIoXFwg");
	var mask_10_graphics_38 = new cjs.Graphics().p("AmDAZIIll6IDiFIIolF7g");
	var mask_10_graphics_39 = new cjs.Graphics().p("AmLAeII0mEIDjFIIo1GFg");
	var mask_10_graphics_40 = new cjs.Graphics().p("AmSAjIJDmOIDiFIIpDGPg");
	var mask_10_graphics_41 = new cjs.Graphics().p("AmZAoIJRmYIDiFIIpRGZg");
	var mask_10_graphics_42 = new cjs.Graphics().p("AmhAtIJgmiIDjFIIpgGjg");
	var mask_10_graphics_43 = new cjs.Graphics().p("AmoAyIJvmsIDiFJIpvGsg");
	var mask_10_graphics_44 = new cjs.Graphics().p("AmvA3IJ9m2IDiFJIp9G2g");
	var mask_10_graphics_45 = new cjs.Graphics().p("Am2A8IKLnAIDiFJIqLHAg");
	var mask_10_graphics_46 = new cjs.Graphics().p("Am+BBIKanKIDjFJIqbHKg");
	var mask_10_graphics_47 = new cjs.Graphics().p("AnFBHIKpnVIDiFIIqpHVg");
	var mask_10_graphics_48 = new cjs.Graphics().p("AnMBMIK3nfIDiFIIq3Hfg");
	var mask_10_graphics_49 = new cjs.Graphics().p("AnUBRILGnpIDjFIIrGHpg");
	var mask_10_graphics_50 = new cjs.Graphics().p("AnbBWILVnzIDiFIIrVHzg");
	var mask_10_graphics_51 = new cjs.Graphics().p("AniBbILjn9IDiFIIrjH9g");
	var mask_10_graphics_52 = new cjs.Graphics().p("AnpBgILxoHIDjFIIryIHg");
	var mask_10_graphics_53 = new cjs.Graphics().p("AnxBlIMBoRIDiFIIsBIRg");
	var mask_10_graphics_54 = new cjs.Graphics().p("An4BqIMPobIDiFIIsPIbg");
	var mask_10_graphics_55 = new cjs.Graphics().p("An/BvIMdolIDjFIIseIlg");
	var mask_10_graphics_56 = new cjs.Graphics().p("AoHB0IMsovIDjFIIssIvg");
	var mask_10_graphics_57 = new cjs.Graphics().p("AoOB5IM6o5IDjFIIs7I5g");
	var mask_10_graphics_58 = new cjs.Graphics().p("AoVB+INJpDIDiFIItJJDg");
	var mask_10_graphics_59 = new cjs.Graphics().p("AocCDINXpNIDiFIItXJNg");
	var mask_10_graphics_60 = new cjs.Graphics().p("AokCIINmpXIDjFIItnJXg");
	var mask_10_graphics_61 = new cjs.Graphics().p("AorCNIN1phIDiFIIt1Jhg");
	var mask_10_graphics_62 = new cjs.Graphics().p("AoyCSIODprIDiFIIuDJrg");
	var mask_10_graphics_63 = new cjs.Graphics().p("Ao6CXIOSp1IDjFIIuSJ1g");
	var mask_10_graphics_64 = new cjs.Graphics().p("ApBCcIOhqAIDiFJIuhJ/g");
	var mask_10_graphics_65 = new cjs.Graphics().p("ApIChIOvqKIDiFJIuvKJg");
	var mask_10_graphics_66 = new cjs.Graphics().p("ApQCmIO+qUIDjFJIu+KTg");
	var mask_10_graphics_67 = new cjs.Graphics().p("ApXCrIPMqeIDjFJIvNKdg");
	var mask_10_graphics_68 = new cjs.Graphics().p("ApeCwIPbqnIDiFIIvbKng");
	var mask_10_graphics_69 = new cjs.Graphics().p("AoKQ9IPqqzIDiFJIvqKyg");

	this.timeline.addTween(cjs.Tween.get(mask_10).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_10_graphics_9,x:26.9,y:141.3}).wait(1).to({graphics:mask_10_graphics_10,x:36.7,y:261.4}).wait(1).to({graphics:mask_10_graphics_11,x:37.4,y:260.9}).wait(1).to({graphics:mask_10_graphics_12,x:38.2,y:260.4}).wait(1).to({graphics:mask_10_graphics_13,x:38.9,y:259.9}).wait(1).to({graphics:mask_10_graphics_14,x:39.6,y:259.4}).wait(1).to({graphics:mask_10_graphics_15,x:40.4,y:258.9}).wait(1).to({graphics:mask_10_graphics_16,x:41.1,y:258.4}).wait(1).to({graphics:mask_10_graphics_17,x:41.8,y:257.8}).wait(1).to({graphics:mask_10_graphics_18,x:42.5,y:257.3}).wait(1).to({graphics:mask_10_graphics_19,x:43.3,y:256.8}).wait(1).to({graphics:mask_10_graphics_20,x:44,y:256.3}).wait(1).to({graphics:mask_10_graphics_21,x:44.7,y:255.8}).wait(1).to({graphics:mask_10_graphics_22,x:45.5,y:255.3}).wait(1).to({graphics:mask_10_graphics_23,x:46.2,y:254.8}).wait(1).to({graphics:mask_10_graphics_24,x:46.9,y:254.3}).wait(1).to({graphics:mask_10_graphics_25,x:47.6,y:253.8}).wait(1).to({graphics:mask_10_graphics_26,x:48.4,y:253.3}).wait(1).to({graphics:mask_10_graphics_27,x:49.1,y:252.8}).wait(1).to({graphics:mask_10_graphics_28,x:49.8,y:252.3}).wait(1).to({graphics:mask_10_graphics_29,x:50.6,y:251.8}).wait(1).to({graphics:mask_10_graphics_30,x:51.3,y:251.3}).wait(1).to({graphics:mask_10_graphics_31,x:52,y:250.8}).wait(1).to({graphics:mask_10_graphics_32,x:52.7,y:250.3}).wait(1).to({graphics:mask_10_graphics_33,x:53.5,y:249.8}).wait(1).to({graphics:mask_10_graphics_34,x:54.2,y:249.3}).wait(1).to({graphics:mask_10_graphics_35,x:54.9,y:248.8}).wait(1).to({graphics:mask_10_graphics_36,x:55.7,y:248.3}).wait(1).to({graphics:mask_10_graphics_37,x:56.4,y:247.8}).wait(1).to({graphics:mask_10_graphics_38,x:57.1,y:247.3}).wait(1).to({graphics:mask_10_graphics_39,x:57.9,y:246.8}).wait(1).to({graphics:mask_10_graphics_40,x:58.6,y:246.3}).wait(1).to({graphics:mask_10_graphics_41,x:59.3,y:245.8}).wait(1).to({graphics:mask_10_graphics_42,x:60,y:245.3}).wait(1).to({graphics:mask_10_graphics_43,x:60.8,y:244.8}).wait(1).to({graphics:mask_10_graphics_44,x:61.5,y:244.3}).wait(1).to({graphics:mask_10_graphics_45,x:62.2,y:243.8}).wait(1).to({graphics:mask_10_graphics_46,x:63,y:243.3}).wait(1).to({graphics:mask_10_graphics_47,x:63.7,y:242.8}).wait(1).to({graphics:mask_10_graphics_48,x:64.4,y:242.3}).wait(1).to({graphics:mask_10_graphics_49,x:65.1,y:241.8}).wait(1).to({graphics:mask_10_graphics_50,x:65.9,y:241.3}).wait(1).to({graphics:mask_10_graphics_51,x:66.6,y:240.8}).wait(1).to({graphics:mask_10_graphics_52,x:67.3,y:240.3}).wait(1).to({graphics:mask_10_graphics_53,x:68.1,y:239.8}).wait(1).to({graphics:mask_10_graphics_54,x:68.8,y:239.3}).wait(1).to({graphics:mask_10_graphics_55,x:69.5,y:238.8}).wait(1).to({graphics:mask_10_graphics_56,x:70.2,y:238.3}).wait(1).to({graphics:mask_10_graphics_57,x:71,y:237.8}).wait(1).to({graphics:mask_10_graphics_58,x:71.7,y:237.3}).wait(1).to({graphics:mask_10_graphics_59,x:72.4,y:236.8}).wait(1).to({graphics:mask_10_graphics_60,x:73.2,y:236.3}).wait(1).to({graphics:mask_10_graphics_61,x:73.9,y:235.8}).wait(1).to({graphics:mask_10_graphics_62,x:74.6,y:235.3}).wait(1).to({graphics:mask_10_graphics_63,x:75.3,y:234.8}).wait(1).to({graphics:mask_10_graphics_64,x:76.1,y:234.3}).wait(1).to({graphics:mask_10_graphics_65,x:76.8,y:233.8}).wait(1).to({graphics:mask_10_graphics_66,x:77.5,y:233.3}).wait(1).to({graphics:mask_10_graphics_67,x:78.3,y:232.8}).wait(1).to({graphics:mask_10_graphics_68,x:79,y:232.3}).wait(1).to({graphics:mask_10_graphics_69,x:70.6,y:141.3}).wait(540));

	// Layer 2
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(20,1,1).p("Ao9ifQDdiyDnieQDmieEihVQEOgwiTFaIpaSh");
	this.shape_13.setTransform(97.9,274.1);
	this.shape_13._off = true;

	var maskedShapeInstanceList = [this.shape_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(9).to({_off:false},0).wait(600));

	// Letter
	this.instance_4 = new lib.m("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(275,275);
	this.instance_4.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(609));

	// Background
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_14.setTransform(275,275,3.373,2.543);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_15.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14}]}).wait(609));

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