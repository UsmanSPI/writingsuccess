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
	this.shape.graphics.f("#FFFFFF").s().p("AwfOJQjKhJhkiEIgghMQAAiWCYAAQApAACNBZQCKBbB7gBQBvAABeg9QBSg4BAhkQByiyAPjrIAMj7QjQDthEA4QguAxg4AAQiKAAAAiIQAAg+BJhGQE6lOEFlyQBMhxBJgBQB9AAAAB5IgRBPQhmDtAAEcQAAEbggCkQgvDriBCwQGziZKXpvIDBjBQCNiHBPAAQBmAAAABzQAAAuiPCwIjIDaQhgBtjZC1QmpFPjkBvQiyBYi2AsQjEAujTABQi+AAizhEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139,-97.2,278.1,194.5);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-94.4,guide:{path:[-47.9,-29.5,-18.3,23.1,47,28.3]}},74).wait(1));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AlhCZICwlVIBHAkIixFVg");
	var mask_graphics_1 = new cjs.Graphics().p("AiBCVICwlVIBTAsIivFVg");
	var mask_graphics_2 = new cjs.Graphics().p("AiICSICwlVIBhAyIiwFVg");
	var mask_graphics_3 = new cjs.Graphics().p("AiPCOICwlVIBvA5IiwFVg");
	var mask_graphics_4 = new cjs.Graphics().p("AiVCLICvlVIB8BAIivFVg");
	var mask_graphics_5 = new cjs.Graphics().p("AicCHICvlVICLBIIiwFVg");
	var mask_graphics_6 = new cjs.Graphics().p("AijCEICvlVICYBOIivFVg");
	var mask_graphics_7 = new cjs.Graphics().p("AiqCAICwlVIClBWIivFVg");
	var mask_graphics_8 = new cjs.Graphics().p("AixB9ICxlVICyBcIixFVg");
	var mask_graphics_9 = new cjs.Graphics().p("Ai4B5ICxlVIDABkIixFVg");
	var mask_graphics_10 = new cjs.Graphics().p("Ai/B2ICxlVIDOBqIixFVg");
	var mask_graphics_11 = new cjs.Graphics().p("AjFByICwlVIDcByIixFVg");
	var mask_graphics_12 = new cjs.Graphics().p("AjMBuICwlVIDpB6IiwFVg");
	var mask_graphics_13 = new cjs.Graphics().p("AjTBrICwlVID3CAIiwFVg");
	var mask_graphics_14 = new cjs.Graphics().p("AjaBnICxlVIEECHIixFVg");
	var mask_graphics_15 = new cjs.Graphics().p("AjhBkICxlVIESCOIixFVg");
	var mask_graphics_16 = new cjs.Graphics().p("AjoBgICxlVIEgCWIixFVg");
	var mask_graphics_17 = new cjs.Graphics().p("AjuBdICwlVIEtCcIiwFVg");
	var mask_graphics_18 = new cjs.Graphics().p("Aj1BZICwlVIE7CjIiwFVg");
	var mask_graphics_19 = new cjs.Graphics().p("Aj8BWICwlVIFJCqIiwFVg");
	var mask_graphics_20 = new cjs.Graphics().p("AkDBSICxlVIFWCyIixFVg");
	var mask_graphics_21 = new cjs.Graphics().p("AkKBPICxlVIFkC4IixFVg");
	var mask_graphics_22 = new cjs.Graphics().p("AkRBLICxlVIFyDAIixFVg");
	var mask_graphics_23 = new cjs.Graphics().p("AkXBIICwlVIF/DGIiwFVg");
	var mask_graphics_24 = new cjs.Graphics().p("AkeBEICwlVIGNDOIiwFVg");
	var mask_graphics_25 = new cjs.Graphics().p("AklBBICwlVIGbDUIiwFVg");
	var mask_graphics_26 = new cjs.Graphics().p("AksA9ICxlVIGoDcIiwFVg");
	var mask_graphics_27 = new cjs.Graphics().p("AkzA5ICxlVIG2DjIixFVg");
	var mask_graphics_28 = new cjs.Graphics().p("Ak6A2ICxlVIHEDqIixFVg");
	var mask_graphics_29 = new cjs.Graphics().p("AlAAyICwlVIHRDyIiwFVg");
	var mask_graphics_30 = new cjs.Graphics().p("AlHAvICwlVIHgD4IixFVg");
	var mask_graphics_31 = new cjs.Graphics().p("AlOArICwlVIHtD/IiwFVg");
	var mask_graphics_32 = new cjs.Graphics().p("AlVAoICxlVIH6EGIiwFVg");
	var mask_graphics_33 = new cjs.Graphics().p("AlcAkICxlVIIIENIixFWg");
	var mask_graphics_34 = new cjs.Graphics().p("AljAhICxlVIIWEUIixFVg");
	var mask_graphics_35 = new cjs.Graphics().p("AlpAdICwlVIIjEcIiwFVg");
	var mask_graphics_36 = new cjs.Graphics().p("AlwAaICwlVIIyEiIixFVg");
	var mask_graphics_37 = new cjs.Graphics().p("Al3AWICwlVII/EqIiwFVg");
	var mask_graphics_38 = new cjs.Graphics().p("Al+ATICwlVIJNEwIiwFVg");
	var mask_graphics_39 = new cjs.Graphics().p("AmFAPICwlVIJbE4IiwFVg");
	var mask_graphics_40 = new cjs.Graphics().p("AmMAMICwlVIJpE+IixFVg");
	var mask_graphics_41 = new cjs.Graphics().p("AmTAIICxlVIJ2FGIixFVg");
	var mask_graphics_42 = new cjs.Graphics().p("AmaAEICxlVIKEFOIixFVg");
	var mask_graphics_43 = new cjs.Graphics().p("AmhABICxlVIKRFUIiwFVg");
	var mask_graphics_44 = new cjs.Graphics().p("AmngCICwlWIKfFbIiwFWg");
	var mask_graphics_45 = new cjs.Graphics().p("AmugFICwlWIKtFhIiwFWg");
	var mask_graphics_46 = new cjs.Graphics().p("Am1gJICwlWIK7FpIixFWg");
	var mask_graphics_47 = new cjs.Graphics().p("Am8gMICwlWILJFvIixFWg");
	var mask_graphics_48 = new cjs.Graphics().p("AnDgQICxlWILWF3IixFWg");
	var mask_graphics_49 = new cjs.Graphics().p("AnKgTICxlWILjF9IiwFWg");
	var mask_graphics_50 = new cjs.Graphics().p("AnRgXICxlWILyGFIixFWg");
	var mask_graphics_51 = new cjs.Graphics().p("AnXgaICwlWIL/GMIiwFWg");
	var mask_graphics_52 = new cjs.Graphics().p("AnegeICwlWIMNGTIiwFWg");
	var mask_graphics_53 = new cjs.Graphics().p("AnlghICwlWIMbGZIixFWg");
	var mask_graphics_54 = new cjs.Graphics().p("AnsglICxlWIMoGhIixFWg");
	var mask_graphics_55 = new cjs.Graphics().p("AnzgoICxlWIM1GoIiwFWg");
	var mask_graphics_56 = new cjs.Graphics().p("An6gsICxlWINEGvIixFWg");
	var mask_graphics_57 = new cjs.Graphics().p("AoAgwICwlWINRG3IiwFWg");
	var mask_graphics_58 = new cjs.Graphics().p("AoHgzICwlWINfG9IiwFWg");
	var mask_graphics_59 = new cjs.Graphics().p("AoOg3ICwlWINtHFIixFWg");
	var mask_graphics_60 = new cjs.Graphics().p("AoVg6ICxlWIN6HLIixFWg");
	var mask_graphics_61 = new cjs.Graphics().p("Aocg+ICxlWIOHHTIiwFWg");
	var mask_graphics_62 = new cjs.Graphics().p("AojhBICxlWIOWHZIixFWg");
	var mask_graphics_63 = new cjs.Graphics().p("AophFICwlWIOjHhIiwFWg");
	var mask_graphics_64 = new cjs.Graphics().p("AowhIICwlWIOxHoIiwFWg");
	var mask_graphics_65 = new cjs.Graphics().p("Ao3hMICwlWIO/HvIixFWg");
	var mask_graphics_66 = new cjs.Graphics().p("Ao+hPICxlWIPMH1IixFWg");
	var mask_graphics_67 = new cjs.Graphics().p("ApFhTICxlWIPaH9IixFWg");
	var mask_graphics_68 = new cjs.Graphics().p("ApMhWICxlWIPnIEIiwFWg");
	var mask_graphics_69 = new cjs.Graphics().p("ApShaICwlWIP1ILIiwFWg");
	var mask_graphics_70 = new cjs.Graphics().p("ApZhdICwlWIQDISIiwFWg");
	var mask_graphics_71 = new cjs.Graphics().p("ApghhICwlWIQRIZIixFWg");
	var mask_graphics_72 = new cjs.Graphics().p("ApnhlICxlWIQeIhIixFWg");
	var mask_graphics_73 = new cjs.Graphics().p("ApuhoICxlWIQsInIixFWg");
	var mask_graphics_74 = new cjs.Graphics().p("Ap1hsICxlWIQ6IvIixFWg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-35.4,y:-17.5}).wait(1).to({graphics:mask_graphics_1,x:-57.8,y:-17.1}).wait(1).to({graphics:mask_graphics_2,x:-57.1,y:-16.7}).wait(1).to({graphics:mask_graphics_3,x:-56.5,y:-16.4}).wait(1).to({graphics:mask_graphics_4,x:-55.8,y:-16}).wait(1).to({graphics:mask_graphics_5,x:-55.1,y:-15.7}).wait(1).to({graphics:mask_graphics_6,x:-54.4,y:-15.3}).wait(1).to({graphics:mask_graphics_7,x:-53.7,y:-15}).wait(1).to({graphics:mask_graphics_8,x:-53,y:-14.6}).wait(1).to({graphics:mask_graphics_9,x:-52.4,y:-14.3}).wait(1).to({graphics:mask_graphics_10,x:-51.7,y:-13.9}).wait(1).to({graphics:mask_graphics_11,x:-51,y:-13.6}).wait(1).to({graphics:mask_graphics_12,x:-50.3,y:-13.2}).wait(1).to({graphics:mask_graphics_13,x:-49.6,y:-12.8}).wait(1).to({graphics:mask_graphics_14,x:-48.9,y:-12.5}).wait(1).to({graphics:mask_graphics_15,x:-48.3,y:-12.1}).wait(1).to({graphics:mask_graphics_16,x:-47.6,y:-11.8}).wait(1).to({graphics:mask_graphics_17,x:-46.9,y:-11.4}).wait(1).to({graphics:mask_graphics_18,x:-46.2,y:-11.1}).wait(1).to({graphics:mask_graphics_19,x:-45.5,y:-10.7}).wait(1).to({graphics:mask_graphics_20,x:-44.8,y:-10.4}).wait(1).to({graphics:mask_graphics_21,x:-44.2,y:-10}).wait(1).to({graphics:mask_graphics_22,x:-43.5,y:-9.7}).wait(1).to({graphics:mask_graphics_23,x:-42.8,y:-9.3}).wait(1).to({graphics:mask_graphics_24,x:-42.1,y:-9}).wait(1).to({graphics:mask_graphics_25,x:-41.4,y:-8.6}).wait(1).to({graphics:mask_graphics_26,x:-40.7,y:-8.2}).wait(1).to({graphics:mask_graphics_27,x:-40.1,y:-7.9}).wait(1).to({graphics:mask_graphics_28,x:-39.4,y:-7.5}).wait(1).to({graphics:mask_graphics_29,x:-38.7,y:-7.2}).wait(1).to({graphics:mask_graphics_30,x:-38,y:-6.8}).wait(1).to({graphics:mask_graphics_31,x:-37.3,y:-6.5}).wait(1).to({graphics:mask_graphics_32,x:-36.6,y:-6.1}).wait(1).to({graphics:mask_graphics_33,x:-35.9,y:-5.8}).wait(1).to({graphics:mask_graphics_34,x:-35.3,y:-5.4}).wait(1).to({graphics:mask_graphics_35,x:-34.6,y:-5.1}).wait(1).to({graphics:mask_graphics_36,x:-33.9,y:-4.7}).wait(1).to({graphics:mask_graphics_37,x:-33.2,y:-4.4}).wait(1).to({graphics:mask_graphics_38,x:-32.6,y:-4}).wait(1).to({graphics:mask_graphics_39,x:-31.9,y:-3.7}).wait(1).to({graphics:mask_graphics_40,x:-31.2,y:-3.3}).wait(1).to({graphics:mask_graphics_41,x:-30.5,y:-3}).wait(1).to({graphics:mask_graphics_42,x:-29.8,y:-2.6}).wait(1).to({graphics:mask_graphics_43,x:-29.1,y:-2.3}).wait(1).to({graphics:mask_graphics_44,x:-28.5,y:-1.9}).wait(1).to({graphics:mask_graphics_45,x:-27.8,y:-1.6}).wait(1).to({graphics:mask_graphics_46,x:-27.1,y:-1.2}).wait(1).to({graphics:mask_graphics_47,x:-26.4,y:-0.9}).wait(1).to({graphics:mask_graphics_48,x:-25.7,y:-0.5}).wait(1).to({graphics:mask_graphics_49,x:-25,y:-0.1}).wait(1).to({graphics:mask_graphics_50,x:-24.3,y:0.2}).wait(1).to({graphics:mask_graphics_51,x:-23.7,y:0.6}).wait(1).to({graphics:mask_graphics_52,x:-23,y:0.9}).wait(1).to({graphics:mask_graphics_53,x:-22.3,y:1.3}).wait(1).to({graphics:mask_graphics_54,x:-21.6,y:1.6}).wait(1).to({graphics:mask_graphics_55,x:-20.9,y:2}).wait(1).to({graphics:mask_graphics_56,x:-20.2,y:2.3}).wait(1).to({graphics:mask_graphics_57,x:-19.6,y:2.7}).wait(1).to({graphics:mask_graphics_58,x:-18.9,y:3}).wait(1).to({graphics:mask_graphics_59,x:-18.2,y:3.4}).wait(1).to({graphics:mask_graphics_60,x:-17.5,y:3.7}).wait(1).to({graphics:mask_graphics_61,x:-16.8,y:4.1}).wait(1).to({graphics:mask_graphics_62,x:-16.1,y:4.4}).wait(1).to({graphics:mask_graphics_63,x:-15.5,y:4.8}).wait(1).to({graphics:mask_graphics_64,x:-14.8,y:5.2}).wait(1).to({graphics:mask_graphics_65,x:-14.1,y:5.5}).wait(1).to({graphics:mask_graphics_66,x:-13.4,y:5.9}).wait(1).to({graphics:mask_graphics_67,x:-12.7,y:6.2}).wait(1).to({graphics:mask_graphics_68,x:-12,y:6.6}).wait(1).to({graphics:mask_graphics_69,x:-11.4,y:6.9}).wait(1).to({graphics:mask_graphics_70,x:-10.7,y:7.3}).wait(1).to({graphics:mask_graphics_71,x:-10,y:7.6}).wait(1).to({graphics:mask_graphics_72,x:-9.3,y:8}).wait(1).to({graphics:mask_graphics_73,x:-8.6,y:8.3}).wait(1).to({graphics:mask_graphics_74,x:-7.9,y:8.7}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AnfkhQEVIJKqA6");
	this.shape.setTransform(0,-0.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.3,-37.3,21.2,38.8);


(lib.ar2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(35.9,-44.1,1,1,13.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.1,regY:0.1,scaleX:1,scaleY:1,rotation:81.5,guide:{path:[36,-44,34.5,-38.4,31.7,-31.1,28.9,-23.7,22.2,-15,15.5,-6.1,5.2,-1.3,2,0.2,-1.4,1.7]}},29).to({regX:0.2,scaleX:1,scaleY:1,rotation:31.8,guide:{path:[-1.5,1.8,-8.6,4.9,-15.8,7.7,-26.3,11.8,-33.8,21.1,-41.2,30.3,-42.8,42.1]}},30).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AiFjgIBohvIFDExIhoBug");
	var mask_graphics_1 = new cjs.Graphics().p("AjchYIB3h/IFCEwIh3B/g");
	var mask_graphics_2 = new cjs.Graphics().p("AjjhPICHiPIFAEuIiFCPg");
	var mask_graphics_3 = new cjs.Graphics().p("AjqhHICWifIE/EtIiUCgg");
	var mask_graphics_4 = new cjs.Graphics().p("Ajxg/IClivIE+EsIijCxg");
	var mask_graphics_5 = new cjs.Graphics().p("Aj4g3IC1i+IE8ErIiyDAg");
	var mask_graphics_6 = new cjs.Graphics().p("AkAguIDFjPIE7EqIjADRg");
	var mask_graphics_7 = new cjs.Graphics().p("AkGgmIDTjeIE6EoIjPDig");
	var mask_graphics_8 = new cjs.Graphics().p("AkOgdIDjjvIE5EnIjfDyg");
	var mask_graphics_9 = new cjs.Graphics().p("AkUgVIDyj/IE3EmIjtEDg");
	var mask_graphics_10 = new cjs.Graphics().p("AkcgMIEDkQIE2EmIj9ESg");
	var mask_graphics_11 = new cjs.Graphics().p("AkjgDIESkgIE1EjIkMEkg");
	var mask_graphics_12 = new cjs.Graphics().p("AkqAEIEhkvIE0EkIkaEzg");
	var mask_graphics_13 = new cjs.Graphics().p("AkxAMIEwk+IEzEiIkpFDg");
	var mask_graphics_14 = new cjs.Graphics().p("Ak4AVIE/lPIEyEhIk4FUg");
	var mask_graphics_15 = new cjs.Graphics().p("Ak/AdIFOlfIExEgIlFFlg");
	var mask_graphics_16 = new cjs.Graphics().p("AlGAlIFeluIEvEeIlUF1g");
	var mask_graphics_17 = new cjs.Graphics().p("AlNAuIFtl/IEuEeIljGFg");
	var mask_graphics_18 = new cjs.Graphics().p("AlUA2IF9mOIEsEcIlyGWg");
	var mask_graphics_19 = new cjs.Graphics().p("AlbA/IGLmfIEsEbImAGmg");
	var mask_graphics_20 = new cjs.Graphics().p("AliBIIGbmwIEqEaImPG3g");
	var mask_graphics_21 = new cjs.Graphics().p("AlpBQIGrm/IEoEZImeHGg");
	var mask_graphics_22 = new cjs.Graphics().p("AlwBZIG6nQIEnEYImtHXg");
	var mask_graphics_23 = new cjs.Graphics().p("Al3BhIHJngIEmEXIm8Hog");
	var mask_graphics_24 = new cjs.Graphics().p("Al/BpIHanwIEkEWInLH4g");
	var mask_graphics_25 = new cjs.Graphics().p("AmFByIHooAIEkEUInaIJg");
	var mask_graphics_26 = new cjs.Graphics().p("AmNB6IH4oPIEjESInpIag");
	var mask_graphics_27 = new cjs.Graphics().p("AmTCCIIHofIEhERIn4Iqg");
	var mask_graphics_28 = new cjs.Graphics().p("AmbCLIIXowIEgERIoGI6g");
	var mask_graphics_29 = new cjs.Graphics().p("AmiCTIImo/IEfEPIoVJKg");
	var mask_graphics_30 = new cjs.Graphics().p("AmoCcIIzpPIEeEOIojJZg");
	var mask_graphics_31 = new cjs.Graphics().p("AmvCjIJCpdIEdEOIoyJng");
	var mask_graphics_32 = new cjs.Graphics().p("Am1CrIJPpsIEcENIpAJ2g");
	var mask_graphics_33 = new cjs.Graphics().p("Am8C0IJdp8IEcENIpOKEg");
	var mask_graphics_34 = new cjs.Graphics().p("AnCC7IJqqKIEbEMIpcKTg");
	var mask_graphics_35 = new cjs.Graphics().p("AnJDDIJ4qYIEbEKIprKhg");
	var mask_graphics_36 = new cjs.Graphics().p("AnPDLIKGqnIEZEJIp5Kwg");
	var mask_graphics_37 = new cjs.Graphics().p("AnVDTIKTq2IEYEJIqHK+g");
	var mask_graphics_38 = new cjs.Graphics().p("AncDbIKhrFIEYEIIqVLNg");
	var mask_graphics_39 = new cjs.Graphics().p("AniDjIKvrUIEWEIIqjLbg");
	var mask_graphics_40 = new cjs.Graphics().p("AnpDrIK9riIEWEGIqyLqg");
	var mask_graphics_41 = new cjs.Graphics().p("AnvDzILKrxIEVEGIrAL3g");
	var mask_graphics_42 = new cjs.Graphics().p("An2D7ILYsAIEVEFIrOMGg");
	var mask_graphics_43 = new cjs.Graphics().p("An8EDILmsPIETEFIrcMUg");
	var mask_graphics_44 = new cjs.Graphics().p("AoCELILzseIESEEIrqMjg");
	var mask_graphics_45 = new cjs.Graphics().p("AoJETIMAssIETECIr5Mxg");
	var mask_graphics_46 = new cjs.Graphics().p("AoPEbIMOs7IERECIsHM/g");
	var mask_graphics_47 = new cjs.Graphics().p("AoWEjIMctKIEREBIsWNOg");
	var mask_graphics_48 = new cjs.Graphics().p("AodErIMqtZIEREAIslNdg");
	var mask_graphics_49 = new cjs.Graphics().p("AojEzIM4toIEPEAIsyNrg");
	var mask_graphics_50 = new cjs.Graphics().p("AopE7INFt3IEPD/ItBN6g");
	var mask_graphics_51 = new cjs.Graphics().p("AowFDINTuFIEOD9ItPOJg");
	var mask_graphics_52 = new cjs.Graphics().p("Ao2FLINhuUIEMD9ItcOWg");
	var mask_graphics_53 = new cjs.Graphics().p("Ao9FTINvujIEMD8ItrOlg");
	var mask_graphics_54 = new cjs.Graphics().p("ApDFbIN8uyIELD8It5Ozg");
	var mask_graphics_55 = new cjs.Graphics().p("ApKFiIOKvAIELD7IuIPCg");
	var mask_graphics_56 = new cjs.Graphics().p("ApQFqIOYvOIEJD6IuWPPg");
	var mask_graphics_57 = new cjs.Graphics().p("ApWFzIOlveIEID5IukPeg");
	var mask_graphics_58 = new cjs.Graphics().p("ApdF6IOzvsIEID4IuyPtg");
	var mask_graphics_59 = new cjs.Graphics().p("ApjGCIPAv7IEHD4IvAP7g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:29.4,y:-33.6}).wait(1).to({graphics:mask_graphics_1,x:36.8,y:-45.8}).wait(1).to({graphics:mask_graphics_2,x:36.2,y:-45.1}).wait(1).to({graphics:mask_graphics_3,x:35.6,y:-44.4}).wait(1).to({graphics:mask_graphics_4,x:35,y:-43.8}).wait(1).to({graphics:mask_graphics_5,x:34.4,y:-43.1}).wait(1).to({graphics:mask_graphics_6,x:33.8,y:-42.4}).wait(1).to({graphics:mask_graphics_7,x:33.2,y:-41.7}).wait(1).to({graphics:mask_graphics_8,x:32.6,y:-41.1}).wait(1).to({graphics:mask_graphics_9,x:32,y:-40.4}).wait(1).to({graphics:mask_graphics_10,x:31.3,y:-39.7}).wait(1).to({graphics:mask_graphics_11,x:30.7,y:-39.1}).wait(1).to({graphics:mask_graphics_12,x:30.1,y:-38.4}).wait(1).to({graphics:mask_graphics_13,x:29.5,y:-37.7}).wait(1).to({graphics:mask_graphics_14,x:28.9,y:-37.1}).wait(1).to({graphics:mask_graphics_15,x:28.3,y:-36.4}).wait(1).to({graphics:mask_graphics_16,x:27.7,y:-35.7}).wait(1).to({graphics:mask_graphics_17,x:27.1,y:-35.1}).wait(1).to({graphics:mask_graphics_18,x:26.5,y:-34.4}).wait(1).to({graphics:mask_graphics_19,x:25.9,y:-33.7}).wait(1).to({graphics:mask_graphics_20,x:25.2,y:-33.1}).wait(1).to({graphics:mask_graphics_21,x:24.6,y:-32.4}).wait(1).to({graphics:mask_graphics_22,x:24,y:-31.7}).wait(1).to({graphics:mask_graphics_23,x:23.4,y:-31.1}).wait(1).to({graphics:mask_graphics_24,x:22.8,y:-30.4}).wait(1).to({graphics:mask_graphics_25,x:22.2,y:-29.7}).wait(1).to({graphics:mask_graphics_26,x:21.6,y:-29}).wait(1).to({graphics:mask_graphics_27,x:21,y:-28.4}).wait(1).to({graphics:mask_graphics_28,x:20.4,y:-27.7}).wait(1).to({graphics:mask_graphics_29,x:19.8,y:-27.1}).wait(1).to({graphics:mask_graphics_30,x:19.2,y:-26.5}).wait(1).to({graphics:mask_graphics_31,x:18.7,y:-25.9}).wait(1).to({graphics:mask_graphics_32,x:18.1,y:-25.3}).wait(1).to({graphics:mask_graphics_33,x:17.6,y:-24.7}).wait(1).to({graphics:mask_graphics_34,x:17,y:-24.1}).wait(1).to({graphics:mask_graphics_35,x:16.5,y:-23.5}).wait(1).to({graphics:mask_graphics_36,x:16,y:-22.9}).wait(1).to({graphics:mask_graphics_37,x:15.4,y:-22.3}).wait(1).to({graphics:mask_graphics_38,x:14.8,y:-21.8}).wait(1).to({graphics:mask_graphics_39,x:14.3,y:-21.2}).wait(1).to({graphics:mask_graphics_40,x:13.7,y:-20.6}).wait(1).to({graphics:mask_graphics_41,x:13.2,y:-20}).wait(1).to({graphics:mask_graphics_42,x:12.6,y:-19.4}).wait(1).to({graphics:mask_graphics_43,x:12.1,y:-18.8}).wait(1).to({graphics:mask_graphics_44,x:11.6,y:-18.2}).wait(1).to({graphics:mask_graphics_45,x:11,y:-17.6}).wait(1).to({graphics:mask_graphics_46,x:10.5,y:-17.1}).wait(1).to({graphics:mask_graphics_47,x:9.9,y:-16.5}).wait(1).to({graphics:mask_graphics_48,x:9.4,y:-15.9}).wait(1).to({graphics:mask_graphics_49,x:8.8,y:-15.3}).wait(1).to({graphics:mask_graphics_50,x:8.3,y:-14.7}).wait(1).to({graphics:mask_graphics_51,x:7.7,y:-14.1}).wait(1).to({graphics:mask_graphics_52,x:7.1,y:-13.6}).wait(1).to({graphics:mask_graphics_53,x:6.6,y:-13}).wait(1).to({graphics:mask_graphics_54,x:6.1,y:-12.4}).wait(1).to({graphics:mask_graphics_55,x:5.5,y:-11.8}).wait(1).to({graphics:mask_graphics_56,x:5,y:-11.2}).wait(1).to({graphics:mask_graphics_57,x:4.4,y:-10.6}).wait(1).to({graphics:mask_graphics_58,x:3.9,y:-10}).wait(1).to({graphics:mask_graphics_59,x:3.3,y:-9.4}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AmJGwQAUiMBWheQBWhdB9goQB9gnBgg8QBgg9A7hqQA7hpAkh9");
	this.shape.setTransform(-3.5,-1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16,-49.2,31.2,23.6);


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
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AjtEeQCxkJEqkx");
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
(lib.WS_Cursive_s = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_514 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(514).call(this.frame_514).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(206.7,272.6,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[206.6,272.5,248.4,227.9,271.6,193.7]}},65).wait(16).to({x:271.3,y:193.6},0).to({guide:{path:[271.6,193.7,260.1,218,257.7,268.9,255.3,320.5,226.3,344.4,197.3,368.1,152.8,337.4]}},194).wait(15).to({startPosition:0},0).to({guide:{path:[152.9,337.5,192.6,374.3,246.9,353.3,301.5,332.2,344.9,293.3,387.7,254.9,402.3,238.4]}},135).wait(15).to({x:392.9,y:247.8},0).to({guide:{path:[393,249.9,451.4,245.4,444.3,290.9,432.2,368.3,496.9,346.3,561.6,324.3,599.7,316.5,637.4,308.7,632.1,358.9]}},65).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(272,192.8,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},65).wait(16).to({_off:false,x:152,y:336.8},0).to({_off:true},194).wait(15).to({_off:false,x:402,y:237.8},0).to({_off:true},135).wait(81));

	// Layer 13
	this.instance_1 = new lib.ar4("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(235.4,373.3,1,1,-37.8,0,0,0.1,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(299).to({_off:false},0).wait(216));

	// Layer 10 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_299 = new cjs.Graphics().p("AzOHgQAAsJIlolQImomMHACQMJgCIlImMgpbApbQolomAAsHg");
	var mask_graphics_300 = new cjs.Graphics().p("AzEHxQgLsIIdotQIdouMIgKQMIgMItIdMgo0AqBQotodgLsIg");
	var mask_graphics_301 = new cjs.Graphics().p("Ay6IDQgWsIIVo1QIVo1MIgWQMIgXI1IVMgoNAqmQo1oVgXsHg");
	var mask_graphics_302 = new cjs.Graphics().p("AyvIVQghsIINo9QINo8MGghQMIgiI9INMgnlArLQo9oOgisGg");
	var mask_graphics_303 = new cjs.Graphics().p("AyjInQgtsHIFpFQIEpEMHgsQMHgtJEIEMgm9ArwQpEoFgtsGg");
	var mask_graphics_304 = new cjs.Graphics().p("AyXI5Qg4sHH8pLQH8pMMGg3QMGg5JMH9MgmVAsSQpLn8g4sFg");
	var mask_graphics_305 = new cjs.Graphics().p("AyLJLQhDsFH0pTQH0pTMEhCQMFhFJTH0MglrAs2QpSn0hEsEg");
	var mask_graphics_306 = new cjs.Graphics().p("Ax+JdQhOsEHrpaQHrpaMEhNQMEhQJaHrMglBAtZQpanrhPsEg");
	var mask_graphics_307 = new cjs.Graphics().p("AxwJwQhasEHjphQHiphMChYQMDhbJhHjMgkXAt6QphnihZsCg");
	var mask_graphics_308 = new cjs.Graphics().p("AxiKCQhlsCHapoQHZpoMBhjQMChmJoHaMgjsAubQponZhlsBg");
	var mask_graphics_309 = new cjs.Graphics().p("AxTKVQhwsAHQpvQHRpvL/hvQMAhwJvHQMgjBAu9QpvnRhvr/g");
	var mask_graphics_310 = new cjs.Graphics().p("AxEKoQh7r/HHp1QHIp2L9h6QL/h7J1HHMgiVAvdQp2nIh6r9g");
	var mask_graphics_311 = new cjs.Graphics().p("Aw1K6QiGr8G/p8QG+p8L8iFQL8iHJ8G/MghpAv7Qp8m+iGr8g");
	var mask_graphics_312 = new cjs.Graphics().p("AwlLNQiRr6G1qDQG2qCL5iQQL7iSKCG1Mgg9AwbQqCm1iRr6g");
	var mask_graphics_313 = new cjs.Graphics().p("AwULgQicr4GsqJQGrqIL4ibQL4idKJGsMggQAw4QqImricr4g");
	var mask_graphics_314 = new cjs.Graphics().p("AwDLzQinr2GiqOQGjqPL1imQL2ioKPGjMgfjAxWQqOmjinr1g");
	var mask_graphics_315 = new cjs.Graphics().p("AvxMGQiyr0GYqUQGZqULzixQL0izKUGZMge0AxzQqVmZixrzg");
	var mask_graphics_316 = new cjs.Graphics().p("AvfMaQi9ryGPqaQGPqaLwi8QLxi9KbGPMgeHAyPQqamPi8rwg");
	var mask_graphics_317 = new cjs.Graphics().p("AvNMtQjIrvGGqfQGGqgLtjHQLujIKgGFMgdYAyrQqgmGjHrtg");
	var mask_graphics_318 = new cjs.Graphics().p("Au6NAQjTrsF8qlQF8qlLrjRQLrjUKlF8MgcoAzFQqml8jSrqg");
	var mask_graphics_319 = new cjs.Graphics().p("AumNUQjerpFyqqQFyqrLojdQLnjeKrFyMgb5AzgQqrlyjcrng");
	var mask_graphics_320 = new cjs.Graphics().p("AuTNnQjormFoqvQFpqwLkjnQLkjpKwFoMgbKAz5Qqvlojorkg");
	var mask_graphics_321 = new cjs.Graphics().p("At+N7QjzrjFeq0QFeq1LhjyQLhjzK1FeMgaaA0RQq0lejyrgg");
	var mask_graphics_322 = new cjs.Graphics().p("AtpOOQj+reFUq6QFUq6Lej8QLdj+K6FUMgZpA0pQq5lUj9rdg");
	var mask_graphics_323 = new cjs.Graphics().p("AtUOiQkIrbFKq+QFKq/LZkHQLakJK/FKMgY4A1BQq/lKkHrZg");
	var mask_graphics_324 = new cjs.Graphics().p("As+O2QkTrXFArDQFArELVkSQLWkTLEFAMgYHA1YQrDlAkSrVg");
	var mask_graphics_325 = new cjs.Graphics().p("AsoPJQkdrTE1rHQE2rJLRkbQLSkeLJE2MgXWA1tQrIk1kcrSg");
	var mask_graphics_326 = new cjs.Graphics().p("AsRPdQkorPErrMQEsrMLNkmQLNkpLNEsMgWkA2CQrMkrkmrNg");
	var mask_graphics_327 = new cjs.Graphics().p("Ar6PxQkyrLEhrQQEgrRLJkwQLKkzLREhMgVyA2XQrQkgkxrJg");
	var mask_graphics_328 = new cjs.Graphics().p("ArjQFQk8rGEWrUQEXrWLEk6QLFk9LVEWMgU/A2rQrVkWk7rEg");
	var mask_graphics_329 = new cjs.Graphics().p("ArLQZQlGrCEMrYQELrZLAlFQLAlHLZEMMgUMA2+QrYkMlGq/g");
	var mask_graphics_330 = new cjs.Graphics().p("AqzQsQlQq8EBrcQECrdK7lPQK7lRLdEBMgTaA3QQrckBlQq7g");
	var mask_graphics_331 = new cjs.Graphics().p("AqaRAQlaq3D2rgQD3rgK2laQK2lbLhD3MgSnA3iQrfj3laq2g");
	var mask_graphics_332 = new cjs.Graphics().p("AqBRUQlkqyDsrjQDsrkKxljQKxlmLkDsMgRzA3zQrjjslkqxg");
	var mask_graphics_333 = new cjs.Graphics().p("ApnRoQlvqtDirnQDhrnKsltQKslvLnDhMgQ/A4DQrnjhltqsg");
	var mask_graphics_334 = new cjs.Graphics().p("ApNR8Ql4qoDWrpQDXrrKml3QKnl5LqDXMgQLA4SQrqjXl3qmg");
	var mask_graphics_335 = new cjs.Graphics().p("AozSQQmCqjDMrsQDMruKhmAQKhmDLtDMMgPXA4gQrtjMmBqgg");
	var mask_graphics_336 = new cjs.Graphics().p("AoYSkQmMqdDBrvQDBrxKbmKQKcmMLwDBMgOjA4uQrvjBmLqbg");
	var mask_graphics_337 = new cjs.Graphics().p("An9S4QmVqXC2ryQC2r0KVmUQKWmVLzC2MgNuA47Qryi2mVqVg");
	var mask_graphics_338 = new cjs.Graphics().p("AnhTLQmfqRCrr0QCrr2KQmdQKPmgL2CrMgM6A5IQr0irmeqQg");
	var mask_graphics_339 = new cjs.Graphics().p("AnFTfQmpqLCgr3QCgr4KKmnQKKmoL4CgMgMFA5TQr3igmnqKg");
	var mask_graphics_340 = new cjs.Graphics().p("AmpTzQmyqFCVr5QCVr6KEmwQKDmyL6CVMgLPA5dQr6iVmwqDg");
	var mask_graphics_341 = new cjs.Graphics().p("AmMUHQm8p/CLr7QCKr8J9m6QJ9m7L8CKMgKaA5oQr9iKm4p9g");
	var mask_graphics_342 = new cjs.Graphics().p("AlvUbQnFp4B/r+QB/r+J3nCQJ3nFL+B/MgJlA5xQr/h/nBp2g");
	var mask_graphics_343 = new cjs.Graphics().p("AlSUuQnNpxB0r/QBzsAJxnMQJwnNL/B0MgIvA55QsAh0nLpwg");
	var mask_graphics_344 = new cjs.Graphics().p("Ak0VCQnXprBpsAQBpsCJpnVQJqnWMBBpMgH6A6BQsBhpnUppg");
	var mask_graphics_345 = new cjs.Graphics().p("AkNVcQnipiBasCQBbsEJgngQJgniMDBaMgGzA6KQsDhangpgg");
	var mask_graphics_346 = new cjs.Graphics().p("AjlV2QntpZBLsFQBMsEJXnsQJXntMFBLMgFsA6SQsFhMnspWg");
	var mask_graphics_347 = new cjs.Graphics().p("Ai8WPQn5pOA9sHQA9sFJOn3QJNn5MGA9MgElA6XQsGg9n3pNg");
	var mask_graphics_348 = new cjs.Graphics().p("AiSWpQoEpFAusHQAusGJDoDQJEoEMHAuMgDeA6cQsHguoBpDg");
	var mask_graphics_349 = new cjs.Graphics().p("AhpXCQoOo7AfsIQAfsGI6oOQI5oPMIAfMgCWA6gQsIgfoNo6g");
	var mask_graphics_350 = new cjs.Graphics().p("Ag+XcQoaoxARsIQAQsIIxoYQIuoaMIARMgBPA6hQsIgQoXovg");
	var mask_graphics_351 = new cjs.Graphics().p("AgTX1QokonABsIQACsHImojQIkokMJABMgAIA6jQsJgCoholg");
	var mask_graphics_352 = new cjs.Graphics().p("AgIYOQouocgOsIQgNsIIcotQIaouMIgOMABAA6iIglAAQrxAAofoNg");
	var mask_graphics_353 = new cjs.Graphics().p("AAAYmQo4oRgcsIQgcsHIRo3QIPo5MHgcMACIA6gIhOABQrXAAoan1g");
	var mask_graphics_354 = new cjs.Graphics().p("AAIY+QpCoGgrsHQgqsGIGpCQIEpCMHgrMADOA6cQg7ADg6AAQq+AAoVndg");
	var mask_graphics_355 = new cjs.Graphics().p("AARZVQpLn7g6sGQg6sFH8pLQH4pMMHg6MAEVA6YQhPAGhNAAQqmAAoPnHg");
	var mask_graphics_356 = new cjs.Graphics().p("AAbZsQpVnvhJsFQhIsEHwpVQHtpWMFhIMAFdA6RQhjAKhfAAQqPAAoImwg");
	var mask_graphics_357 = new cjs.Graphics().p("AAlaCQpfnkhXsDQhXsDHlpdQHhpgMEhXMAGkA6KQh2AOhyAAQp4AAoBmag");
	var mask_graphics_358 = new cjs.Graphics().p("AAvaYQpnnYhmsCQhmsBHZpnQHWpoMChmMAHqA6CQiIASiEAAQpiAAn6mEg");
	var mask_graphics_359 = new cjs.Graphics().p("AA6atQpwnMh1sAQh0r+HNpwQHKpxMAh1MAIxA54QibAXiVAAQpNAAnylvg");
	var mask_graphics_360 = new cjs.Graphics().p("ABFbCQp5nBiDr9QiCr8HBp5QG+p5L9iDMAJ4A5rQitAeinAAQo5AAnplag");
	var mask_graphics_361 = new cjs.Graphics().p("ABRbWQqBm1iSr6QiRr6G1qBQGyqCL6iRMAK+A5fQi/Aki3AAQolAAnglGg");
	var mask_graphics_362 = new cjs.Graphics().p("ABdbpQqJmoigr3Qigr3GpqJQGmqKL3igMAMEA5QQjRAsjIAAQoRAAnXkzg");
	var mask_graphics_363 = new cjs.Graphics().p("ABqb8QqRmbivr1QiurzGcqRQGaqSL0ivMANJA5CQjhAzjZAAQn+ABnNkhg");
	var mask_graphics_364 = new cjs.Graphics().p("AB3cPQqZmPi9rxQi8rwGPqZQGOqaLwi9MAOOA4xQjyA9jpAAQnrAAnDkOg");
	var mask_graphics_365 = new cjs.Graphics().p("ACFcgQqhmCjLrtQjLrsGDqgQGBqiLsjLMAPUA4fQkDBGj5AAQnZAAm4j9g");
	var mask_graphics_366 = new cjs.Graphics().p("ACTcyQqol2jZrpQjaroF2qnQF0qpLojZMAQZA4LQkTBQkJAAQnHAAmtjrg");
	var mask_graphics_367 = new cjs.Graphics().p("AChdCQqvlojnrlQjnrlFoqtQFnqwLkjnMARdA32QkiBbkaAAQm2AAmhjbg");
	var mask_graphics_368 = new cjs.Graphics().p("ACwdSQq2lbj1rgQj2rgFcq0QFaq3Lfj1MAShA3gQkyBmkpAAQmlAAmVjLg");
	var mask_graphics_369 = new cjs.Graphics().p("AC/diQq8lOkDrcQkErbFPq7QFMq8LakEMATlA3JQlBByk6AAQmTAAmJi7g");
	var mask_graphics_370 = new cjs.Graphics().p("ADPdxQrClBkSrWQkRrWFBrBQE/rDLVkRMAUoA2wQlPB+lLAAQmCAAl8isg");
	var mask_graphics_371 = new cjs.Graphics().p("ADfd/QrIkzkfrRQkgrRE0rHQExrILQkfMAVqA2WQldCLlbAAQlxAAlvieg");
	var mask_graphics_372 = new cjs.Graphics().p("ADveNQrOkmksrLQktrLEmrNQEkrOLKktMAWsA17QlrCZlrAAQlhAAliiQg");
	var mask_graphics_373 = new cjs.Graphics().p("AEAeaQrTkYk7rFQk6rGEYrSQEWrTLFk7MAXtA1fQl4Cnl8AAQlQAAlUiDg");
	var mask_graphics_374 = new cjs.Graphics().p("AERemQrYkKlIq/QlIq/ELrXQEIrZK+lIMAYuA1BQmFC1mMAAQlAAAlGh2g");
	var mask_graphics_375 = new cjs.Graphics().p("AEjeyQrdj8lWq5QlVq4D9rdQD6rdK4lVMAZuA0iQmRDEmeAAQkwAAk2hqg");
	var mask_graphics_376 = new cjs.Graphics().p("AE1e9QrijtljqzQliqyDurhQDtriKxliMAauA0CQmdDUmvAAQkgAAknhfg");
	var mask_graphics_377 = new cjs.Graphics().p("AFHfIQrmjglwqrQlvqrDgrlQDernKslwMAbsAzhQmpDlnAAAQkQAAkYhUg");
	var mask_graphics_378 = new cjs.Graphics().p("AFafSQrrjSl8qkQl8qkDSrpQDQrrKkl8MAcqAy+Qm0D2nSAAQj/AAkIhKg");
	var mask_graphics_379 = new cjs.Graphics().p("AFtfbQrvjDmJqdQmJqcDErtQDCrvKcmJMAdpAyaQnAEHnjAAQjvAAj4hAg");
	var mask_graphics_380 = new cjs.Graphics().p("AGAfkQryi1mWqVQmVqVC1rxQCzryKWmWMAelAx2QnKEZn2AAQjeAAjog3g");
	var mask_graphics_381 = new cjs.Graphics().p("AGUfsQr1immjqOQmiqNCnr0QClr1KNmiMAfiAxPQnUEsoIAAQjPAAjWgvg");
	var mask_graphics_382 = new cjs.Graphics().p("AGofzQr4iXmvqGQmvqFCZr3QCWr4KFmvMAgeAwpQndE/ocAAQi+AAjFgog");
	var mask_graphics_383 = new cjs.Graphics().p("AG8f6Qr7iJm7p9Qm7p9CLr5QCHr8J9m6MAhZAwAQnnFSovAAQitAAi0ggg");
	var mask_graphics_384 = new cjs.Graphics().p("EAHRAgAQr+h6nHp1QnGp0B7r8QB5r+J1nHMAiSAvYQnvFmpEAAQibAAiigag");
	var mask_graphics_385 = new cjs.Graphics().p("EAHmAgGQsAhsnTpsQnSprBsr/QBrr/JsnTMAjMAusQn4F8pYAAQiLAAiPgUg");
	var mask_graphics_386 = new cjs.Graphics().p("EAH7AgKQsChdnepiQnfpjBfsAQBcsCJineMAkFAuBQn/GQpuAAQh5AAh9gPg");
	var mask_graphics_387 = new cjs.Graphics().p("EAIQAgOQsDhOnqpZQnqpaBQsCQBNsDJanqMAk8AtVQoHGmqDAAQhnAAhrgLg");
	var mask_graphics_388 = new cjs.Graphics().p("EAImAgSQsEhAn2pQQn1pQBBsEQA/sDJPn2MAlzAsnQoNG9qaAAQhVAAhXgHg");
	var mask_graphics_389 = new cjs.Graphics().p("EAI8AgUQsFgxoBpGQoApGAysFQAwsFJGoAMAmoAr4QoTHTqxABQhCAAhEgFg");
	var mask_graphics_390 = new cjs.Graphics().p("EAJRAgWQsGgjoLo9QoLo9AksGQAjsFI9oLMAnaArMQoZHprIAAQgwAAgxgCg");
	var mask_graphics_391 = new cjs.Graphics().p("EAJmAgXQsHgVoVo0QoVozAXsHQAUsFI0oVMAoLAqeQoeIArfAAIg8gBg");
	var mask_graphics_392 = new cjs.Graphics().p("EAJ7AgYQsHgIofoqQofoqAJsGQAHsGIqofMAo7ApwQoiIXr4AAIgWAAg");
	var mask_graphics_393 = new cjs.Graphics().p("AqfX+QopoggFsHQgHsGIgopMAprApBQohIpsFAGIgRAAQr8AAojoag");
	var mask_graphics_394 = new cjs.Graphics().p("AqTYVQoyoWgTsHQgVsGIXoyMAqYAoRQoWIzsGATIg3ABQrkAAoeoDg");
	var mask_graphics_395 = new cjs.Graphics().p("AqGYsQo8oNggsGQgjsFIMo8MArGAnhQoMI8sFAhQgvACguAAQrMAAoZnsg");
	var mask_graphics_396 = new cjs.Graphics().p("Ap4ZCQpFoCgvsGQgwsEICpFMArzAmvQoCJFsFAvQhBAEhAAAQq2AAoTnWg");
	var mask_graphics_397 = new cjs.Graphics().p("ApqZXQpOn3g8sFQg+sEH3pNMAseAl9Qn3JOsEA9QhTAGhSAAQqfAAoOnBg");
	var mask_graphics_398 = new cjs.Graphics().p("ApcZsQpWnthKsDQhMsCHtpXMAtJAlKQntJXsCBLQhmAJhjAAQqKAAoImsg");
	var mask_graphics_399 = new cjs.Graphics().p("ApMaBQpgnihXsCQhasBHipgMAtzAkXQniJgsBBYQh3AOh0AAQp1AAoBmYg");
	var mask_graphics_400 = new cjs.Graphics().p("Ao8aVQponXhlsAQhosAHYpoMAucAjjQnYJor/BmQiJASiFAAQpgAAn6mEg");
	var mask_graphics_401 = new cjs.Graphics().p("AosapQpwnMhzr/Qh1r9HNpwMAvEAitQnNJwr9B0QibAXiUAAQpNAAnzlwg");
	var mask_graphics_402 = new cjs.Graphics().p("Aoba9Qp4nCiBr8QiCr7HBp5MAvrAh4QnBJ4r7CBQirAdilAAQo6AAnrlcg");
	var mask_graphics_403 = new cjs.Graphics().p("AoJbPQqAm2iOr6QiQr4G2qAMAwRAhAQm2KAr5CPQi8Aji0AAQooAAnilKg");
	var mask_graphics_404 = new cjs.Graphics().p("An3biQqImribr3Qier2GrqIMAw2AgJQmrKIr2CcQjMAqjEAAQoVAAnak3g");
	var mask_graphics_405 = new cjs.Graphics().p("AnkbzQqPmeipr1QirrzGeqPMAxbAfRQmfKPrzCqQjdAyjTAAQoDAAnRkng");
	var mask_graphics_406 = new cjs.Graphics().p("AnRcFQqWmTi3ryQi4rwGTqWMAx+AeYQmUKXrwC3QjsA6jjAAQnxAAnIkVg");
	var mask_graphics_407 = new cjs.Graphics().p("Am9cWQqdmIjEruQjGrsGHqeMAygAdgQmHKdrtDFQj7BCjzAAQnhAAm9kEg");
	var mask_graphics_408 = new cjs.Graphics().p("AmocmQqll7jRrrQjTrpF7qkMAzBAcmQl7KkrpDSQkLBLkBAAQnRAAmyj0g");
	var mask_graphics_409 = new cjs.Graphics().p("AmTc2QqrlvjfrnQjgrlFvqrMAzhAbrQlvKsrlDfQkaBUkQAAQnAAAmojkg");
	var mask_graphics_410 = new cjs.Graphics().p("Al9dFQqyljjsriQjtriFjqxMA0AAaxQljKxrhDtQkoBekgAAQmwAAmcjVg");
	var mask_graphics_411 = new cjs.Graphics().p("AlndUQq4lXj5reQj6rdFWq3MA0eAZ1QlWK4rdD5Qk2BpkvAAQmgAAmRjGg");
	var mask_graphics_412 = new cjs.Graphics().p("AlRdjQq+lLkFraQkIrZFLq9MA07AY6QlLK+rYEGQlEB0k+AAQmQAAmGi3g");
	var mask_graphics_413 = new cjs.Graphics().p("Ak5dwQrEk9kTrVQkUrVE+rCMA1WAX8Qk9LErUETQlRCAlOAAQl/ABl6irg");
	var mask_graphics_414 = new cjs.Graphics().p("Akid+QrJkxkfrRQkirPEyrIMA1xAXAQkxLJrPEgQleCNldAAQlwAAluidg");
	var mask_graphics_415 = new cjs.Graphics().p("AkJeLQrPklksrLQkurKEkrNMA2LAWCQkkLPrJEsQlsCalsAAQlhAAlgiQg");
	var mask_graphics_416 = new cjs.Graphics().p("AjxeXQrTkYk5rFQk7rFEYrSMA2kAVEQkYLUrEE5Ql4Cml7AAQlSAAlUiDg");
	var mask_graphics_417 = new cjs.Graphics().p("AjYejQrYkLlGrAQlHq/ELrXMA27AUGQkKLZq/FGQmDCzmMAAQlCAAlHh3g");
	var mask_graphics_418 = new cjs.Graphics().p("Ai+euQrdj+lSq6QlUq5D+rcMA3SATIQj+Ldq4FSQmQDCmbAAQkzAAk5hsg");
	var mask_graphics_419 = new cjs.Graphics().p("Aike4Qrijwleq0QlgqzDxrgMA3nASIQjxLiqyFeQmbDRmrAAQkkAAkrhig");
	var mask_graphics_420 = new cjs.Graphics().p("AiLfCQrmjklqquQlrqsDkrlMA37ARMQjkLmqtFqQmlDfm7AAQkWAAkdhYg");
	var mask_graphics_421 = new cjs.Graphics().p("AhxfMQrqjYl2qnQl3qnDXrpMA4OAQPQjXLqqmF2QmwDunLAAQkHAAkPhOg");
	var mask_graphics_422 = new cjs.Graphics().p("AhXfVQrujLmBqhQmDqhDLrsMA4gAPSQjLLtqgGCQm6D+naAAQj5AAkBhGg");
	var mask_graphics_423 = new cjs.Graphics().p("Ag9fdQrxi+mMqbQmPqaC+rvMA4xAOUQi+LxqaGNQnDEOnrAAQjqAAjzg+g");
	var mask_graphics_424 = new cjs.Graphics().p("AgiflQr0ixmYqUQmaqTCxr0MA5BANXQiyL0qSGZQnNEen8AAQjbAAjkg2g");
	var mask_graphics_425 = new cjs.Graphics().p("AgHfsQr3ikmjqNQmlqMCkr2MA5PAMYQikL3qMGkQnWEvoMAAQjNAAjVgvg");
	var mask_graphics_426 = new cjs.Graphics().p("AAVfzQr6iXmuqGQmwqFCXr5MA5dALaQiXL6qFGvQnfFAoeAAQi+AAjFgog");
	var mask_graphics_427 = new cjs.Graphics().p("AA/f8Qr9iEm+p7QnBp5CEr9MA5uAJ8QiEL+p5G/QnrFao4AAQioAAiugeg");
	var mask_graphics_428 = new cjs.Graphics().p("EABrAgEQsAhwnPpvQnRpuBxsAMA59AIdQhwMBpuHPQn2F2pUAAQiRAAiVgWg");
	var mask_graphics_429 = new cjs.Graphics().p("EACXAgLQsChdnfpjQnhpiBdsCMA6KAG+QhdMDphHfQoBGTpxAAQh4AAh9gPg");
	var mask_graphics_430 = new cjs.Graphics().p("EADEAgQQsFhJnupXQnwpVBJsGMA6VAFgQhJMGpWHuQoKGwqPAAQhgAAhjgJg");
	var mask_graphics_431 = new cjs.Graphics().p("EADyAgUQsGg1n+pKQn/pIA1sHMA6cAEAQg1MHpIH9QoTHPquAAQhHAAhJgFg");
	var mask_graphics_432 = new cjs.Graphics().p("EAEgAgXQsHghoMo9QoOo7AhsIMA6iACgQgiMIo7INQoaHurPAAQguAAgugCg");
	var mask_graphics_433 = new cjs.Graphics().p("EAFPAgZQsIgOoaovQocotANsJMA6kABAQgNMJouIbQohIPrxAAIgmAAg");
	var mask_graphics_434 = new cjs.Graphics().p("AuyX+QoqoggHsJMA6lgAfQAHMJogIpQohIqsJAHIgSAAQr8AAojobg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(299).to({graphics:mask_graphics_299,x:197,y:180.5}).wait(1).to({graphics:mask_graphics_300,x:196,y:181.4}).wait(1).to({graphics:mask_graphics_301,x:195.1,y:182.3}).wait(1).to({graphics:mask_graphics_302,x:194.1,y:183.3}).wait(1).to({graphics:mask_graphics_303,x:193.1,y:184.2}).wait(1).to({graphics:mask_graphics_304,x:192.1,y:185}).wait(1).to({graphics:mask_graphics_305,x:191,y:185.9}).wait(1).to({graphics:mask_graphics_306,x:190,y:186.8}).wait(1).to({graphics:mask_graphics_307,x:188.9,y:187.6}).wait(1).to({graphics:mask_graphics_308,x:187.9,y:188.4}).wait(1).to({graphics:mask_graphics_309,x:186.8,y:189.3}).wait(1).to({graphics:mask_graphics_310,x:185.7,y:190.1}).wait(1).to({graphics:mask_graphics_311,x:184.6,y:190.8}).wait(1).to({graphics:mask_graphics_312,x:183.5,y:191.6}).wait(1).to({graphics:mask_graphics_313,x:182.4,y:192.3}).wait(1).to({graphics:mask_graphics_314,x:181.3,y:193.1}).wait(1).to({graphics:mask_graphics_315,x:180.1,y:193.8}).wait(1).to({graphics:mask_graphics_316,x:179,y:194.5}).wait(1).to({graphics:mask_graphics_317,x:177.8,y:195.2}).wait(1).to({graphics:mask_graphics_318,x:176.6,y:195.8}).wait(1).to({graphics:mask_graphics_319,x:175.4,y:196.5}).wait(1).to({graphics:mask_graphics_320,x:174.2,y:197.1}).wait(1).to({graphics:mask_graphics_321,x:173,y:197.7}).wait(1).to({graphics:mask_graphics_322,x:171.8,y:198.3}).wait(1).to({graphics:mask_graphics_323,x:170.6,y:198.9}).wait(1).to({graphics:mask_graphics_324,x:169.4,y:199.5}).wait(1).to({graphics:mask_graphics_325,x:168.2,y:200}).wait(1).to({graphics:mask_graphics_326,x:166.9,y:200.5}).wait(1).to({graphics:mask_graphics_327,x:165.7,y:201}).wait(1).to({graphics:mask_graphics_328,x:164.4,y:201.5}).wait(1).to({graphics:mask_graphics_329,x:163.1,y:202}).wait(1).to({graphics:mask_graphics_330,x:161.9,y:202.4}).wait(1).to({graphics:mask_graphics_331,x:160.6,y:202.9}).wait(1).to({graphics:mask_graphics_332,x:159.3,y:203.3}).wait(1).to({graphics:mask_graphics_333,x:158,y:203.7}).wait(1).to({graphics:mask_graphics_334,x:156.7,y:204.1}).wait(1).to({graphics:mask_graphics_335,x:155.4,y:204.4}).wait(1).to({graphics:mask_graphics_336,x:154.1,y:204.8}).wait(1).to({graphics:mask_graphics_337,x:152.8,y:205.1}).wait(1).to({graphics:mask_graphics_338,x:151.5,y:205.4}).wait(1).to({graphics:mask_graphics_339,x:150.2,y:205.7}).wait(1).to({graphics:mask_graphics_340,x:148.8,y:205.9}).wait(1).to({graphics:mask_graphics_341,x:147.5,y:206.2}).wait(1).to({graphics:mask_graphics_342,x:146.2,y:206.4}).wait(1).to({graphics:mask_graphics_343,x:144.8,y:206.6}).wait(1).to({graphics:mask_graphics_344,x:143.5,y:206.8}).wait(1).to({graphics:mask_graphics_345,x:141.7,y:207}).wait(1).to({graphics:mask_graphics_346,x:140,y:207.2}).wait(1).to({graphics:mask_graphics_347,x:138.2,y:207.3}).wait(1).to({graphics:mask_graphics_348,x:136.4,y:207.4}).wait(1).to({graphics:mask_graphics_349,x:134.6,y:207.5}).wait(1).to({graphics:mask_graphics_350,x:132.8,y:207.5}).wait(1).to({graphics:mask_graphics_351,x:131.1,y:207.6}).wait(1).to({graphics:mask_graphics_352,x:132.5,y:207.5}).wait(1).to({graphics:mask_graphics_353,x:134.3,y:207.5}).wait(1).to({graphics:mask_graphics_354,x:136,y:207.5}).wait(1).to({graphics:mask_graphics_355,x:137.8,y:207.6}).wait(1).to({graphics:mask_graphics_356,x:139.6,y:207.6}).wait(1).to({graphics:mask_graphics_357,x:141.4,y:207.6}).wait(1).to({graphics:mask_graphics_358,x:143.1,y:207.6}).wait(1).to({graphics:mask_graphics_359,x:144.9,y:207.6}).wait(1).to({graphics:mask_graphics_360,x:146.7,y:207.6}).wait(1).to({graphics:mask_graphics_361,x:148.4,y:207.6}).wait(1).to({graphics:mask_graphics_362,x:150.2,y:207.6}).wait(1).to({graphics:mask_graphics_363,x:151.9,y:207.6}).wait(1).to({graphics:mask_graphics_364,x:153.6,y:207.7}).wait(1).to({graphics:mask_graphics_365,x:155.4,y:207.7}).wait(1).to({graphics:mask_graphics_366,x:157.1,y:207.7}).wait(1).to({graphics:mask_graphics_367,x:158.8,y:207.7}).wait(1).to({graphics:mask_graphics_368,x:160.5,y:207.7}).wait(1).to({graphics:mask_graphics_369,x:162.2,y:207.7}).wait(1).to({graphics:mask_graphics_370,x:163.9,y:207.7}).wait(1).to({graphics:mask_graphics_371,x:165.5,y:207.7}).wait(1).to({graphics:mask_graphics_372,x:167.2,y:207.7}).wait(1).to({graphics:mask_graphics_373,x:168.8,y:207.7}).wait(1).to({graphics:mask_graphics_374,x:170.4,y:207.6}).wait(1).to({graphics:mask_graphics_375,x:172,y:207.6}).wait(1).to({graphics:mask_graphics_376,x:173.6,y:207.6}).wait(1).to({graphics:mask_graphics_377,x:175.2,y:207.6}).wait(1).to({graphics:mask_graphics_378,x:176.7,y:207.6}).wait(1).to({graphics:mask_graphics_379,x:178.3,y:207.5}).wait(1).to({graphics:mask_graphics_380,x:179.8,y:207.5}).wait(1).to({graphics:mask_graphics_381,x:181.3,y:207.5}).wait(1).to({graphics:mask_graphics_382,x:182.8,y:207.5}).wait(1).to({graphics:mask_graphics_383,x:184.3,y:207.4}).wait(1).to({graphics:mask_graphics_384,x:185.7,y:207.4}).wait(1).to({graphics:mask_graphics_385,x:187.2,y:207.4}).wait(1).to({graphics:mask_graphics_386,x:188.6,y:207.3}).wait(1).to({graphics:mask_graphics_387,x:190,y:207.3}).wait(1).to({graphics:mask_graphics_388,x:191.3,y:207.3}).wait(1).to({graphics:mask_graphics_389,x:192.6,y:207.3}).wait(1).to({graphics:mask_graphics_390,x:193.9,y:207.2}).wait(1).to({graphics:mask_graphics_391,x:195.1,y:207.2}).wait(1).to({graphics:mask_graphics_392,x:196.3,y:207.2}).wait(1).to({graphics:mask_graphics_393,x:197.5,y:207.2}).wait(1).to({graphics:mask_graphics_394,x:198.6,y:207.2}).wait(1).to({graphics:mask_graphics_395,x:199.7,y:207.2}).wait(1).to({graphics:mask_graphics_396,x:200.9,y:207.2}).wait(1).to({graphics:mask_graphics_397,x:201.9,y:207.2}).wait(1).to({graphics:mask_graphics_398,x:203,y:207.2}).wait(1).to({graphics:mask_graphics_399,x:204,y:207.3}).wait(1).to({graphics:mask_graphics_400,x:205.1,y:207.3}).wait(1).to({graphics:mask_graphics_401,x:206.1,y:207.3}).wait(1).to({graphics:mask_graphics_402,x:207,y:207.3}).wait(1).to({graphics:mask_graphics_403,x:208,y:207.3}).wait(1).to({graphics:mask_graphics_404,x:208.9,y:207.3}).wait(1).to({graphics:mask_graphics_405,x:209.8,y:207.4}).wait(1).to({graphics:mask_graphics_406,x:210.7,y:207.4}).wait(1).to({graphics:mask_graphics_407,x:211.5,y:207.4}).wait(1).to({graphics:mask_graphics_408,x:212.3,y:207.4}).wait(1).to({graphics:mask_graphics_409,x:213.1,y:207.4}).wait(1).to({graphics:mask_graphics_410,x:213.9,y:207.4}).wait(1).to({graphics:mask_graphics_411,x:214.6,y:207.4}).wait(1).to({graphics:mask_graphics_412,x:215.4,y:207.4}).wait(1).to({graphics:mask_graphics_413,x:216,y:207.4}).wait(1).to({graphics:mask_graphics_414,x:216.7,y:207.5}).wait(1).to({graphics:mask_graphics_415,x:217.3,y:207.5}).wait(1).to({graphics:mask_graphics_416,x:218,y:207.4}).wait(1).to({graphics:mask_graphics_417,x:218.5,y:207.4}).wait(1).to({graphics:mask_graphics_418,x:219.1,y:207.4}).wait(1).to({graphics:mask_graphics_419,x:219.6,y:207.4}).wait(1).to({graphics:mask_graphics_420,x:220.1,y:207.4}).wait(1).to({graphics:mask_graphics_421,x:220.5,y:207.4}).wait(1).to({graphics:mask_graphics_422,x:221,y:207.5}).wait(1).to({graphics:mask_graphics_423,x:221.4,y:207.5}).wait(1).to({graphics:mask_graphics_424,x:221.8,y:207.5}).wait(1).to({graphics:mask_graphics_425,x:222.1,y:207.5}).wait(1).to({graphics:mask_graphics_426,x:222.5,y:207.5}).wait(1).to({graphics:mask_graphics_427,x:222.9,y:207.4}).wait(1).to({graphics:mask_graphics_428,x:223.3,y:207.4}).wait(1).to({graphics:mask_graphics_429,x:223.6,y:207.4}).wait(1).to({graphics:mask_graphics_430,x:223.9,y:207.3}).wait(1).to({graphics:mask_graphics_431,x:224,y:207.3}).wait(1).to({graphics:mask_graphics_432,x:224.2,y:207.3}).wait(1).to({graphics:mask_graphics_433,x:224.2,y:207.3}).wait(1).to({graphics:mask_graphics_434,x:224.2,y:207.3}).wait(81));

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(20,1,1).p("AzhF3QGUF2IhjTQIhjSGymEQGxmFCKik");
	this.shape_1.setTransform(277,299.5);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(299).to({_off:false},0).wait(216));

	// Layer 12
	this.instance_2 = new lib.ar2("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(299.4,243.4,1,1,0,58,-122,0.8,-0.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(90).to({_off:false},0).wait(425));

	// Layer 9 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_225 = new cjs.Graphics().p("AhbEzIAAplIC3AAIAAJlg");
	var mask_1_graphics_226 = new cjs.Graphics().p("AhiEzIAAplIDFAAIAAJlg");
	var mask_1_graphics_227 = new cjs.Graphics().p("AhoEzIAAplIDRAAIAAJlg");
	var mask_1_graphics_228 = new cjs.Graphics().p("AhvEzIAAplIDfAAIAAJlg");
	var mask_1_graphics_229 = new cjs.Graphics().p("Ah2EzIAAplIDtAAIAAJlg");
	var mask_1_graphics_230 = new cjs.Graphics().p("Ah8EzIAAplID5AAIAAJlg");
	var mask_1_graphics_231 = new cjs.Graphics().p("AiDEzIAAplIEHAAIAAJlg");
	var mask_1_graphics_232 = new cjs.Graphics().p("AiJEzIAAplIETAAIAAJlg");
	var mask_1_graphics_233 = new cjs.Graphics().p("AiQEzIAAplIEhAAIAAJlg");
	var mask_1_graphics_234 = new cjs.Graphics().p("AiWEzIAAplIEtAAIAAJlg");
	var mask_1_graphics_235 = new cjs.Graphics().p("AidEzIAAplIE7AAIAAJlg");
	var mask_1_graphics_236 = new cjs.Graphics().p("AikEzIAAplIFJAAIAAJlg");
	var mask_1_graphics_237 = new cjs.Graphics().p("AiqEzIAAplIFVAAIAAJlg");
	var mask_1_graphics_238 = new cjs.Graphics().p("AixEzIAAplIFjAAIAAJlg");
	var mask_1_graphics_239 = new cjs.Graphics().p("Ai3EzIAAplIFvAAIAAJlg");
	var mask_1_graphics_240 = new cjs.Graphics().p("Ai+EzIAAplIF9AAIAAJlg");
	var mask_1_graphics_241 = new cjs.Graphics().p("AjFEzIAAplIGKAAIAAJlg");
	var mask_1_graphics_242 = new cjs.Graphics().p("AjLEzIAAplIGXAAIAAJlg");
	var mask_1_graphics_243 = new cjs.Graphics().p("AjREzIAAplIGjAAIAAJlg");
	var mask_1_graphics_244 = new cjs.Graphics().p("AjYEzIAAplIGxAAIAAJlg");
	var mask_1_graphics_245 = new cjs.Graphics().p("AjfEzIAAplIG/AAIAAJlg");
	var mask_1_graphics_246 = new cjs.Graphics().p("AjlEzIAAplIHLAAIAAJlg");
	var mask_1_graphics_247 = new cjs.Graphics().p("AjsEzIAAplIHZAAIAAJlg");
	var mask_1_graphics_248 = new cjs.Graphics().p("AjyEzIAAplIHlAAIAAJlg");
	var mask_1_graphics_249 = new cjs.Graphics().p("Aj5EzIAAplIHzAAIAAJlg");
	var mask_1_graphics_250 = new cjs.Graphics().p("AkAEzIAAplIIAAAIAAJlg");
	var mask_1_graphics_251 = new cjs.Graphics().p("AkGEzIAAplIINAAIAAJlg");
	var mask_1_graphics_252 = new cjs.Graphics().p("AkNEzIAAplIIaAAIAAJlg");
	var mask_1_graphics_253 = new cjs.Graphics().p("AkTEzIAAplIInAAIAAJlg");
	var mask_1_graphics_254 = new cjs.Graphics().p("AkaEzIAAplII1AAIAAJlg");
	var mask_1_graphics_255 = new cjs.Graphics().p("AkgEzIAAplIJBAAIAAJlg");
	var mask_1_graphics_256 = new cjs.Graphics().p("AknEzIAAplIJPAAIAAJlg");
	var mask_1_graphics_257 = new cjs.Graphics().p("AktEzIAAplIJbAAIAAJlg");
	var mask_1_graphics_258 = new cjs.Graphics().p("Ak0EzIAAplIJpAAIAAJlg");
	var mask_1_graphics_259 = new cjs.Graphics().p("Ak7EzIAAplIJ2AAIAAJlg");
	var mask_1_graphics_260 = new cjs.Graphics().p("AlBEzIAAplIKDAAIAAJlg");
	var mask_1_graphics_261 = new cjs.Graphics().p("AlIEzIAAplIKQAAIAAJlg");
	var mask_1_graphics_262 = new cjs.Graphics().p("AlOEzIAAplIKdAAIAAJlg");
	var mask_1_graphics_263 = new cjs.Graphics().p("AlVEzIAAplIKrAAIAAJlg");
	var mask_1_graphics_264 = new cjs.Graphics().p("AlbEzIAAplIK3AAIAAJlg");
	var mask_1_graphics_265 = new cjs.Graphics().p("AliEzIAAplILFAAIAAJlg");
	var mask_1_graphics_266 = new cjs.Graphics().p("AloEzIAAplILRAAIAAJlg");
	var mask_1_graphics_267 = new cjs.Graphics().p("AlvEzIAAplILfAAIAAJlg");
	var mask_1_graphics_268 = new cjs.Graphics().p("Al2EzIAAplILsAAIAAJlg");
	var mask_1_graphics_269 = new cjs.Graphics().p("Al8EzIAAplIL5AAIAAJlg");
	var mask_1_graphics_270 = new cjs.Graphics().p("AmDEzIAAplIMGAAIAAJlg");
	var mask_1_graphics_271 = new cjs.Graphics().p("AmJEzIAAplIMTAAIAAJlg");
	var mask_1_graphics_272 = new cjs.Graphics().p("AmQEzIAAplIMhAAIAAJlg");
	var mask_1_graphics_273 = new cjs.Graphics().p("AmWEzIAAplIMtAAIAAJlg");
	var mask_1_graphics_274 = new cjs.Graphics().p("AmdEzIAAplIM7AAIAAJlg");
	var mask_1_graphics_275 = new cjs.Graphics().p("AmjEzIAAplINHAAIAAJlg");
	var mask_1_graphics_276 = new cjs.Graphics().p("AmqEzIAAplINVAAIAAJlg");
	var mask_1_graphics_277 = new cjs.Graphics().p("AmxEzIAAplINiAAIAAJlg");
	var mask_1_graphics_278 = new cjs.Graphics().p("Am3EzIAAplINvAAIAAJlg");
	var mask_1_graphics_279 = new cjs.Graphics().p("Am+EzIAAplIN8AAIAAJlg");
	var mask_1_graphics_280 = new cjs.Graphics().p("AnEEzIAAplIOJAAIAAJlg");
	var mask_1_graphics_281 = new cjs.Graphics().p("AnLEzIAAplIOXAAIAAJlg");
	var mask_1_graphics_282 = new cjs.Graphics().p("AEcdTIAApnIOlAAIAAJng");
	var mask_1_graphics_283 = new cjs.Graphics().p("AniEzIAAplIPFAAIAAJlg");
	var mask_1_graphics_284 = new cjs.Graphics().p("ADZdTIAApnIPpAAIAAJng");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(225).to({graphics:mask_1_graphics_225,x:234.1,y:344.2}).wait(1).to({graphics:mask_1_graphics_226,x:233.4,y:344.2}).wait(1).to({graphics:mask_1_graphics_227,x:232.8,y:344.2}).wait(1).to({graphics:mask_1_graphics_228,x:232.1,y:344.2}).wait(1).to({graphics:mask_1_graphics_229,x:231.4,y:344.2}).wait(1).to({graphics:mask_1_graphics_230,x:230.8,y:344.2}).wait(1).to({graphics:mask_1_graphics_231,x:230.1,y:344.2}).wait(1).to({graphics:mask_1_graphics_232,x:229.5,y:344.2}).wait(1).to({graphics:mask_1_graphics_233,x:228.8,y:344.2}).wait(1).to({graphics:mask_1_graphics_234,x:228.2,y:344.2}).wait(1).to({graphics:mask_1_graphics_235,x:227.5,y:344.2}).wait(1).to({graphics:mask_1_graphics_236,x:226.8,y:344.2}).wait(1).to({graphics:mask_1_graphics_237,x:226.2,y:344.2}).wait(1).to({graphics:mask_1_graphics_238,x:225.5,y:344.2}).wait(1).to({graphics:mask_1_graphics_239,x:224.9,y:344.2}).wait(1).to({graphics:mask_1_graphics_240,x:224.2,y:344.2}).wait(1).to({graphics:mask_1_graphics_241,x:223.6,y:344.2}).wait(1).to({graphics:mask_1_graphics_242,x:222.9,y:344.2}).wait(1).to({graphics:mask_1_graphics_243,x:222.3,y:344.2}).wait(1).to({graphics:mask_1_graphics_244,x:221.6,y:344.2}).wait(1).to({graphics:mask_1_graphics_245,x:220.9,y:344.2}).wait(1).to({graphics:mask_1_graphics_246,x:220.3,y:344.2}).wait(1).to({graphics:mask_1_graphics_247,x:219.6,y:344.2}).wait(1).to({graphics:mask_1_graphics_248,x:219,y:344.2}).wait(1).to({graphics:mask_1_graphics_249,x:218.3,y:344.2}).wait(1).to({graphics:mask_1_graphics_250,x:217.7,y:344.2}).wait(1).to({graphics:mask_1_graphics_251,x:217,y:344.2}).wait(1).to({graphics:mask_1_graphics_252,x:216.4,y:344.2}).wait(1).to({graphics:mask_1_graphics_253,x:215.7,y:344.2}).wait(1).to({graphics:mask_1_graphics_254,x:215,y:344.2}).wait(1).to({graphics:mask_1_graphics_255,x:214.4,y:344.2}).wait(1).to({graphics:mask_1_graphics_256,x:213.7,y:344.2}).wait(1).to({graphics:mask_1_graphics_257,x:213.1,y:344.2}).wait(1).to({graphics:mask_1_graphics_258,x:212.4,y:344.2}).wait(1).to({graphics:mask_1_graphics_259,x:211.8,y:344.2}).wait(1).to({graphics:mask_1_graphics_260,x:211.1,y:344.2}).wait(1).to({graphics:mask_1_graphics_261,x:210.5,y:344.2}).wait(1).to({graphics:mask_1_graphics_262,x:209.8,y:344.2}).wait(1).to({graphics:mask_1_graphics_263,x:209.1,y:344.2}).wait(1).to({graphics:mask_1_graphics_264,x:208.5,y:344.2}).wait(1).to({graphics:mask_1_graphics_265,x:207.8,y:344.2}).wait(1).to({graphics:mask_1_graphics_266,x:207.2,y:344.2}).wait(1).to({graphics:mask_1_graphics_267,x:206.5,y:344.2}).wait(1).to({graphics:mask_1_graphics_268,x:205.9,y:344.2}).wait(1).to({graphics:mask_1_graphics_269,x:205.2,y:344.2}).wait(1).to({graphics:mask_1_graphics_270,x:204.6,y:344.2}).wait(1).to({graphics:mask_1_graphics_271,x:203.9,y:344.2}).wait(1).to({graphics:mask_1_graphics_272,x:203.2,y:344.2}).wait(1).to({graphics:mask_1_graphics_273,x:202.6,y:344.2}).wait(1).to({graphics:mask_1_graphics_274,x:201.9,y:344.2}).wait(1).to({graphics:mask_1_graphics_275,x:201.3,y:344.2}).wait(1).to({graphics:mask_1_graphics_276,x:200.6,y:344.2}).wait(1).to({graphics:mask_1_graphics_277,x:200,y:344.2}).wait(1).to({graphics:mask_1_graphics_278,x:199.3,y:344.2}).wait(1).to({graphics:mask_1_graphics_279,x:198.7,y:344.2}).wait(1).to({graphics:mask_1_graphics_280,x:198,y:344.2}).wait(1).to({graphics:mask_1_graphics_281,x:197.3,y:344.2}).wait(1).to({graphics:mask_1_graphics_282,x:121.7,y:187.5}).wait(1).to({graphics:mask_1_graphics_283,x:195.1,y:344.2}).wait(1).to({graphics:mask_1_graphics_284,x:121.8,y:187.5}).wait(231));

	// Layer 8
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(20,1,1).p("AJYsnQh2DzgYIDQgZIDkiDuQkhDunFk2");
	this.shape_2.setTransform(212,273.8);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(225).to({_off:false},0).wait(290));

	// Layer 7 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_179 = new cjs.Graphics().p("A7ohGQFsquLljlQLmjkKvFrQKuFsDkLlQDlLllrKvg");
	var mask_2_graphics_180 = new cjs.Graphics().p("A7jhgQFzqrLnjcQLpjdKqFzQKrFyDcLoQDdLolyKrg");
	var mask_2_graphics_181 = new cjs.Graphics().p("A7eh6QF6qnLqjUQLqjVKnF6QKnF6DULpQDVLrl5Kng");
	var mask_2_graphics_182 = new cjs.Graphics().p("A7ZiTQGBqjLsjNQLtjNKiGBQKjGBDMLsQDOLsmBKjg");
	var mask_2_graphics_183 = new cjs.Graphics().p("A7UitQGIqfLujEQLvjGKfGIQKeGIDELuQDGLvmIKfg");
	var mask_2_graphics_184 = new cjs.Graphics().p("A7PjHQGPqaLwi9QLxi9KbGPQKaGPC8LwQC+LxmPKag");
	var mask_2_graphics_185 = new cjs.Graphics().p("A7JjgQGWqWLxi1QLzi1KXGWQKWGWC0LyQC2LymWKXg");
	var mask_2_graphics_186 = new cjs.Graphics().p("A7Ej5QGdqSL0itQL0itKSGdQKSGdCsL0QCuL0mdKSg");
	var mask_2_graphics_187 = new cjs.Graphics().p("A6+kSQGjqNL2ilQL2imKOGkQKNGkCkL2QCmL2mjKNg");
	var mask_2_graphics_188 = new cjs.Graphics().p("A65krQGrqJL3idQL4idKJGrQKJGqCcL4QCeL3mqKKg");
	var mask_2_graphics_189 = new cjs.Graphics().p("A6zlDQGxqFL5iVQL6iVKEGyQKEGxCVL5QCWL5myKFg");
	var mask_2_graphics_190 = new cjs.Graphics().p("A6tlcQG4qAL6iMQL7iOKAG5QKAG4CML6QCOL7m4KAg");
	var mask_2_graphics_191 = new cjs.Graphics().p("A6ol0QG/p7L8iFQL8iFJ8G/QJ7G/CEL7QCGL9m/J7g");
	var mask_2_graphics_192 = new cjs.Graphics().p("A6hmMQHFp2L9h9QL+h9J3HFQJ2HGB8L9QB+L+nGJ2g");
	var mask_2_graphics_193 = new cjs.Graphics().p("A6VmkQHMpxL+h1QL/h1JyHMQJxHMB0L+QB2L/nMJyg");
	var mask_2_graphics_194 = new cjs.Graphics().p("A6Jm8QHSpsMAhtQMAhtJtHTQJsHTBsL/QBuMAnTJtg");
	var mask_2_graphics_195 = new cjs.Graphics().p("A59nTQHZpoMAhkQMChlJnHZQJoHZBkMBQBlMBnZJog");
	var mask_2_graphics_196 = new cjs.Graphics().p("A5xnqQHgpjMBhdQMDhcJiHfQJjHgBbMCQBeMCngJig");
	var mask_2_graphics_197 = new cjs.Graphics().p("A5koCQHmpdMChUQMDhVJeHmQJdHmBUMCQBVMEnmJdg");
	var mask_2_graphics_198 = new cjs.Graphics().p("A5YoZQHtpYMDhMQMEhMJYHsQJZHsBLMDQBNMEnsJZg");
	var mask_2_graphics_199 = new cjs.Graphics().p("A5LovQHzpTMDhEQMFhFJTHzQJUHzBDMEQBFMEnzJTg");
	var mask_2_graphics_200 = new cjs.Graphics().p("A4+pGQH5pOMEg8QMGg8JOH5QJNH5A7MFQA9MFn4JOg");
	var mask_2_graphics_201 = new cjs.Graphics().p("A4xpcQH/pJMFgzQMGg0JJH/QJIH/AzMFQA1MGn/JIg");
	var mask_2_graphics_202 = new cjs.Graphics().p("A4kpyQIFpDMGgsQMGgsJDIFQJDIGArMFQAtMHoFJDg");
	var mask_2_graphics_203 = new cjs.Graphics().p("A4WqIQILo+MGgjQMHgkI9ILQI+IMAiMGQAlMGoLI+g");
	var mask_2_graphics_204 = new cjs.Graphics().p("A4JqeQIRo4MHgbQMHgcI4ISQI4IRAaMGQAcMHoRI4g");
	var mask_2_graphics_205 = new cjs.Graphics().p("A37qzQIXozMGgTQMIgTIyIXQIyIXATMHQAUMHoXIyg");
	var mask_2_graphics_206 = new cjs.Graphics().p("A3trJQIdosMGgLQMIgLIsIdQItIdAKMGQAMMIodIsg");
	var mask_2_graphics_207 = new cjs.Graphics().p("A3freQIionMHgCQMIgDInIjQImIiACMHQAEMIojImg");
	var mask_2_graphics_208 = new cjs.Graphics().p("A3RrzQIoohMHAGQMHAFIhIpQIhIogGMHQgEMHopIhg");
	var mask_2_graphics_209 = new cjs.Graphics().p("A3DsHQIuobMGANQMIAOIbIuQIbIugOMHQgNMHouIbg");
	var mask_2_graphics_210 = new cjs.Graphics().p("A21scQI0oVMGAWQMHAWIWIzQIVI0gXMHQgUMHo0IVg");
	var mask_2_graphics_211 = new cjs.Graphics().p("A2nswQI6oPMGAeQMHAeIPI5QIPI6gfMGQgcMGo6IQg");
	var mask_2_graphics_212 = new cjs.Graphics().p("A2YtEQI/oJMFAmQMHAmIJI/QIKI/gnMGQglMGo/IJg");
	var mask_2_graphics_213 = new cjs.Graphics().p("A2JtXQJEoDMFAuQMGAuIDJEQIEJFgwMFQgtMGpEIDg");
	var mask_2_graphics_214 = new cjs.Graphics().p("A16trQJJn9MFA3QMFA2H9JKQH9JJg3MFQg1MFpKH9g");
	var mask_2_graphics_215 = new cjs.Graphics().p("A1st+QJQn3MDA/QMFA+H3JPQH3JPhAMEQg9MFpPH3g");
	var mask_2_graphics_216 = new cjs.Graphics().p("A1duRQJVnwMDBGQMEBHHxJUQHwJUhIMDQhFMFpUHwg");
	var mask_2_graphics_217 = new cjs.Graphics().p("A1NukQJZnqMBBPQMFBPHqJZQHqJahQMCQhNMDpaHqg");
	var mask_2_graphics_218 = new cjs.Graphics().p("A0+u2QJfnkMABXQMDBXHkJeQHkJfhYMBQhWMDpeHkg");
	var mask_2_graphics_219 = new cjs.Graphics().p("A0vvIQJkneL/BfQMDBfHdJkQHeJjhgMBQheMBpkHeg");
	var mask_2_graphics_220 = new cjs.Graphics().p("A0fvaQJpnXL+BnQMBBnHXJoQHXJphoL/QhmMBppHXg");
	var mask_2_graphics_221 = new cjs.Graphics().p("A0PvsQJtnRL9BvQMBBwHQJtQHQJuhwL+QhuL/ptHRg");
	var mask_2_graphics_222 = new cjs.Graphics().p("A0Av+QJznJL8B3QL/B3HKJyQHJJyh4L+Qh2L+pyHJg");
	var mask_2_graphics_223 = new cjs.Graphics().p("AzwwPQJ3nDL7B/QL+B/HDJ4QHDJ2iAL8Qh+L9p4HDg");
	var mask_2_graphics_224 = new cjs.Graphics().p("AzgwgQJ8m8L5CHQL9CHG8J8QG9J7iJL7QiGL7p8G9g");
	var mask_2_graphics_225 = new cjs.Graphics().p("AzQwxQKBm1L3CPQL7CPG2KBQG1J/iQL6QiOL6qBG1g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(179).to({graphics:mask_2_graphics_179,x:163.4,y:168.3}).wait(1).to({graphics:mask_2_graphics_180,x:163.9,y:169.2}).wait(1).to({graphics:mask_2_graphics_181,x:164.3,y:170.1}).wait(1).to({graphics:mask_2_graphics_182,x:164.8,y:170.9}).wait(1).to({graphics:mask_2_graphics_183,x:165.3,y:171.8}).wait(1).to({graphics:mask_2_graphics_184,x:165.8,y:172.6}).wait(1).to({graphics:mask_2_graphics_185,x:166.3,y:173.5}).wait(1).to({graphics:mask_2_graphics_186,x:166.8,y:174.3}).wait(1).to({graphics:mask_2_graphics_187,x:167.3,y:175.1}).wait(1).to({graphics:mask_2_graphics_188,x:167.8,y:176}).wait(1).to({graphics:mask_2_graphics_189,x:168.3,y:176.8}).wait(1).to({graphics:mask_2_graphics_190,x:168.9,y:177.6}).wait(1).to({graphics:mask_2_graphics_191,x:169.4,y:178.4}).wait(1).to({graphics:mask_2_graphics_192,x:169.9,y:179.2}).wait(1).to({graphics:mask_2_graphics_193,x:169.9,y:180}).wait(1).to({graphics:mask_2_graphics_194,x:169.9,y:180.8}).wait(1).to({graphics:mask_2_graphics_195,x:169.9,y:181.6}).wait(1).to({graphics:mask_2_graphics_196,x:169.9,y:182.3}).wait(1).to({graphics:mask_2_graphics_197,x:169.8,y:183.1}).wait(1).to({graphics:mask_2_graphics_198,x:169.8,y:183.9}).wait(1).to({graphics:mask_2_graphics_199,x:169.8,y:184.6}).wait(1).to({graphics:mask_2_graphics_200,x:169.8,y:185.4}).wait(1).to({graphics:mask_2_graphics_201,x:169.8,y:186.1}).wait(1).to({graphics:mask_2_graphics_202,x:169.8,y:186.9}).wait(1).to({graphics:mask_2_graphics_203,x:169.8,y:187.6}).wait(1).to({graphics:mask_2_graphics_204,x:169.7,y:188.3}).wait(1).to({graphics:mask_2_graphics_205,x:169.7,y:189}).wait(1).to({graphics:mask_2_graphics_206,x:169.7,y:189.7}).wait(1).to({graphics:mask_2_graphics_207,x:169.7,y:190.4}).wait(1).to({graphics:mask_2_graphics_208,x:169.7,y:191.1}).wait(1).to({graphics:mask_2_graphics_209,x:169.7,y:191.8}).wait(1).to({graphics:mask_2_graphics_210,x:169.7,y:192.5}).wait(1).to({graphics:mask_2_graphics_211,x:169.7,y:193.2}).wait(1).to({graphics:mask_2_graphics_212,x:169.7,y:193.8}).wait(1).to({graphics:mask_2_graphics_213,x:169.7,y:194.5}).wait(1).to({graphics:mask_2_graphics_214,x:169.7,y:195.1}).wait(1).to({graphics:mask_2_graphics_215,x:169.7,y:195.8}).wait(1).to({graphics:mask_2_graphics_216,x:169.7,y:196.4}).wait(1).to({graphics:mask_2_graphics_217,x:169.8,y:197}).wait(1).to({graphics:mask_2_graphics_218,x:169.8,y:197.7}).wait(1).to({graphics:mask_2_graphics_219,x:169.8,y:198.3}).wait(1).to({graphics:mask_2_graphics_220,x:169.8,y:198.9}).wait(1).to({graphics:mask_2_graphics_221,x:169.8,y:199.5}).wait(1).to({graphics:mask_2_graphics_222,x:169.8,y:200}).wait(1).to({graphics:mask_2_graphics_223,x:169.8,y:200.6}).wait(1).to({graphics:mask_2_graphics_224,x:169.8,y:201.2}).wait(1).to({graphics:mask_2_graphics_225,x:169.8,y:201.7}).wait(290));

	// Layer 6
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(20,1,1).p("AJYsnQh2DzgYIDQgZIDkiDuQkhDunFk2");
	this.shape_3.setTransform(212,273.8);
	this.shape_3._off = true;

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(179).to({_off:false},0).wait(336));

	// Layer 5 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_90 = new cjs.Graphics().p("AOQPdIAAigIIFAAIAACgg");
	var mask_3_graphics_91 = new cjs.Graphics().p("AkCBWIAAirIIFAAIAACrg");
	var mask_3_graphics_92 = new cjs.Graphics().p("AkCBcIAAi3IIFAAIAAC3g");
	var mask_3_graphics_93 = new cjs.Graphics().p("AkCBiIAAjDIIFAAIAADDg");
	var mask_3_graphics_94 = new cjs.Graphics().p("AkCBoIAAjPIIFAAIAADPg");
	var mask_3_graphics_95 = new cjs.Graphics().p("AkCBuIAAjbIIFAAIAADbg");
	var mask_3_graphics_96 = new cjs.Graphics().p("AkCB0IAAjnIIFAAIAADng");
	var mask_3_graphics_97 = new cjs.Graphics().p("AkCB6IAAjzIIFAAIAADzg");
	var mask_3_graphics_98 = new cjs.Graphics().p("AkCCAIAAj/IIFAAIAAD/g");
	var mask_3_graphics_99 = new cjs.Graphics().p("AkCCGIAAkLIIFAAIAAELg");
	var mask_3_graphics_100 = new cjs.Graphics().p("AkCCMIAAkXIIFAAIAAEXg");
	var mask_3_graphics_101 = new cjs.Graphics().p("AkCCSIAAkjIIFAAIAAEjg");
	var mask_3_graphics_102 = new cjs.Graphics().p("AkCCYIAAkvIIFAAIAAEvg");
	var mask_3_graphics_103 = new cjs.Graphics().p("AkCCeIAAk7IIFAAIAAE7g");
	var mask_3_graphics_104 = new cjs.Graphics().p("AkCCkIAAlHIIFAAIAAFHg");
	var mask_3_graphics_105 = new cjs.Graphics().p("AkCCpIAAlSIIFAAIAAFSg");
	var mask_3_graphics_106 = new cjs.Graphics().p("AkCCvIAAleIIFAAIAAFeg");
	var mask_3_graphics_107 = new cjs.Graphics().p("AkCC2IAAlrIIFAAIAAFrg");
	var mask_3_graphics_108 = new cjs.Graphics().p("AkCC7IAAl2IIFAAIAAF2g");
	var mask_3_graphics_109 = new cjs.Graphics().p("AkCDBIAAmBIIFAAIAAGBg");
	var mask_3_graphics_110 = new cjs.Graphics().p("AkCDHIAAmNIIFAAIAAGNg");
	var mask_3_graphics_111 = new cjs.Graphics().p("AkCDNIAAmZIIFAAIAAGZg");
	var mask_3_graphics_112 = new cjs.Graphics().p("AkCDTIAAmlIIFAAIAAGlg");
	var mask_3_graphics_113 = new cjs.Graphics().p("AkCDZIAAmxIIFAAIAAGxg");
	var mask_3_graphics_114 = new cjs.Graphics().p("AkCDfIAAm9IIFAAIAAG9g");
	var mask_3_graphics_115 = new cjs.Graphics().p("AkCDlIAAnJIIFAAIAAHJg");
	var mask_3_graphics_116 = new cjs.Graphics().p("AkCDrIAAnVIIFAAIAAHVg");
	var mask_3_graphics_117 = new cjs.Graphics().p("AkCDxIAAnhIIFAAIAAHhg");
	var mask_3_graphics_118 = new cjs.Graphics().p("AkCD3IAAntIIFAAIAAHtg");
	var mask_3_graphics_119 = new cjs.Graphics().p("AkCD9IAAn5IIFAAIAAH5g");
	var mask_3_graphics_120 = new cjs.Graphics().p("AkCEDIAAoFIIFAAIAAIFg");
	var mask_3_graphics_121 = new cjs.Graphics().p("AkCEJIAAoRIIFAAIAAIRg");
	var mask_3_graphics_122 = new cjs.Graphics().p("AkCEPIAAodIIFAAIAAIdg");
	var mask_3_graphics_123 = new cjs.Graphics().p("AkCEVIAAopIIFAAIAAIpg");
	var mask_3_graphics_124 = new cjs.Graphics().p("AkCEbIAAo1IIFAAIAAI1g");
	var mask_3_graphics_125 = new cjs.Graphics().p("AkCEhIAApBIIFAAIAAJBg");
	var mask_3_graphics_126 = new cjs.Graphics().p("AkCEnIAApNIIFAAIAAJNg");
	var mask_3_graphics_127 = new cjs.Graphics().p("AkCEsIAApYIIFAAIAAJYg");
	var mask_3_graphics_128 = new cjs.Graphics().p("AkCEzIAAplIIFAAIAAJlg");
	var mask_3_graphics_129 = new cjs.Graphics().p("AkCE5IAApxIIFAAIAAJxg");
	var mask_3_graphics_130 = new cjs.Graphics().p("AkCE+IAAp8IIFAAIAAJ8g");
	var mask_3_graphics_131 = new cjs.Graphics().p("AkCFEIAAqHIIFAAIAAKHg");
	var mask_3_graphics_132 = new cjs.Graphics().p("AkCFKIAAqTIIFAAIAAKTg");
	var mask_3_graphics_133 = new cjs.Graphics().p("AkCFQIAAqfIIFAAIAAKfg");
	var mask_3_graphics_134 = new cjs.Graphics().p("AkCFWIAAqrIIFAAIAAKrg");
	var mask_3_graphics_135 = new cjs.Graphics().p("AkCFcIAAq3IIFAAIAAK3g");
	var mask_3_graphics_136 = new cjs.Graphics().p("AkCFiIAArDIIFAAIAALDg");
	var mask_3_graphics_137 = new cjs.Graphics().p("AkCFoIAArPIIFAAIAALPg");
	var mask_3_graphics_138 = new cjs.Graphics().p("AkCFuIAArbIIFAAIAALbg");
	var mask_3_graphics_139 = new cjs.Graphics().p("AkCF0IAArnIIFAAIAALng");
	var mask_3_graphics_140 = new cjs.Graphics().p("AkCF6IAArzIIFAAIAALzg");
	var mask_3_graphics_141 = new cjs.Graphics().p("AkCGAIAAr/IIFAAIAAL/g");
	var mask_3_graphics_142 = new cjs.Graphics().p("AkCGGIAAsLIIFAAIAAMLg");
	var mask_3_graphics_143 = new cjs.Graphics().p("AkCGMIAAsXIIFAAIAAMXg");
	var mask_3_graphics_144 = new cjs.Graphics().p("AkCGSIAAsjIIFAAIAAMjg");
	var mask_3_graphics_145 = new cjs.Graphics().p("AkCGYIAAsvIIFAAIAAMvg");
	var mask_3_graphics_146 = new cjs.Graphics().p("AkCGeIAAs7IIFAAIAAM7g");
	var mask_3_graphics_147 = new cjs.Graphics().p("AkCGkIAAtHIIFAAIAANHg");
	var mask_3_graphics_148 = new cjs.Graphics().p("AkCGqIAAtTIIFAAIAANTg");
	var mask_3_graphics_149 = new cjs.Graphics().p("AkCGvIAAteIIFAAIAANeg");
	var mask_3_graphics_150 = new cjs.Graphics().p("AkCG2IAAtrIIFAAIAANrg");
	var mask_3_graphics_151 = new cjs.Graphics().p("AkCG7IAAt2IIFAAIAAN2g");
	var mask_3_graphics_152 = new cjs.Graphics().p("AkCHBIAAuCIIFAAIAAOCg");
	var mask_3_graphics_153 = new cjs.Graphics().p("AkCHHIAAuNIIFAAIAAONg");
	var mask_3_graphics_154 = new cjs.Graphics().p("AkCHNIAAuZIIFAAIAAOZg");
	var mask_3_graphics_155 = new cjs.Graphics().p("AkCHTIAAulIIFAAIAAOlg");
	var mask_3_graphics_156 = new cjs.Graphics().p("AkCHZIAAuxIIFAAIAAOxg");
	var mask_3_graphics_157 = new cjs.Graphics().p("AkCHfIAAu9IIFAAIAAO9g");
	var mask_3_graphics_158 = new cjs.Graphics().p("AkCHlIAAvJIIFAAIAAPJg");
	var mask_3_graphics_159 = new cjs.Graphics().p("AkCHrIAAvVIIFAAIAAPVg");
	var mask_3_graphics_160 = new cjs.Graphics().p("AkCHxIAAvhIIFAAIAAPhg");
	var mask_3_graphics_161 = new cjs.Graphics().p("AkCH3IAAvtIIFAAIAAPtg");
	var mask_3_graphics_162 = new cjs.Graphics().p("AkCH9IAAv5IIFAAIAAP5g");
	var mask_3_graphics_163 = new cjs.Graphics().p("AkCIDIAAwFIIFAAIAAQFg");
	var mask_3_graphics_164 = new cjs.Graphics().p("AkCIJIAAwRIIFAAIAAQRg");
	var mask_3_graphics_165 = new cjs.Graphics().p("AkCIPIAAwdIIFAAIAAQdg");
	var mask_3_graphics_166 = new cjs.Graphics().p("AkCIVIAAwpIIFAAIAAQpg");
	var mask_3_graphics_167 = new cjs.Graphics().p("AkCIbIAAw1IIFAAIAAQ1g");
	var mask_3_graphics_168 = new cjs.Graphics().p("AkCIhIAAxBIIFAAIAARBg");
	var mask_3_graphics_169 = new cjs.Graphics().p("AkCInIAAxNIIFAAIAARNg");
	var mask_3_graphics_170 = new cjs.Graphics().p("AkCIsIAAxYIIFAAIAARYg");
	var mask_3_graphics_171 = new cjs.Graphics().p("AkCIyIAAxkIIFAAIAARkg");
	var mask_3_graphics_172 = new cjs.Graphics().p("AkCI5IAAxxIIFAAIAARxg");
	var mask_3_graphics_173 = new cjs.Graphics().p("AkCI+IAAx8IIFAAIAAR8g");
	var mask_3_graphics_174 = new cjs.Graphics().p("AkCJEIAAyIIIFAAIAASIg");
	var mask_3_graphics_175 = new cjs.Graphics().p("AkCJKIAAyTIIFAAIAASTg");
	var mask_3_graphics_176 = new cjs.Graphics().p("AkCJQIAAyfIIFAAIAASfg");
	var mask_3_graphics_177 = new cjs.Graphics().p("AOQXjIAAysIIFAAIAASsg");
	var mask_3_graphics_178 = new cjs.Graphics().p("AkCJaIAAyzIIFAAIAASzg");
	var mask_3_graphics_179 = new cjs.Graphics().p("AOQXqIAAy6IIFAAIAAS6g");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(90).to({graphics:mask_3_graphics_90,x:142.9,y:98.9}).wait(1).to({graphics:mask_3_graphics_91,x:260,y:190.4}).wait(1).to({graphics:mask_3_graphics_92,x:260,y:191}).wait(1).to({graphics:mask_3_graphics_93,x:260,y:191.6}).wait(1).to({graphics:mask_3_graphics_94,x:260,y:192.2}).wait(1).to({graphics:mask_3_graphics_95,x:260,y:192.8}).wait(1).to({graphics:mask_3_graphics_96,x:260,y:193.4}).wait(1).to({graphics:mask_3_graphics_97,x:260,y:194}).wait(1).to({graphics:mask_3_graphics_98,x:260,y:194.6}).wait(1).to({graphics:mask_3_graphics_99,x:260,y:195.1}).wait(1).to({graphics:mask_3_graphics_100,x:260,y:195.7}).wait(1).to({graphics:mask_3_graphics_101,x:260,y:196.3}).wait(1).to({graphics:mask_3_graphics_102,x:260,y:196.9}).wait(1).to({graphics:mask_3_graphics_103,x:260,y:197.5}).wait(1).to({graphics:mask_3_graphics_104,x:260,y:198.1}).wait(1).to({graphics:mask_3_graphics_105,x:260,y:198.7}).wait(1).to({graphics:mask_3_graphics_106,x:260,y:199.3}).wait(1).to({graphics:mask_3_graphics_107,x:260,y:199.9}).wait(1).to({graphics:mask_3_graphics_108,x:260,y:200.5}).wait(1).to({graphics:mask_3_graphics_109,x:260,y:201.1}).wait(1).to({graphics:mask_3_graphics_110,x:260,y:201.7}).wait(1).to({graphics:mask_3_graphics_111,x:260,y:202.3}).wait(1).to({graphics:mask_3_graphics_112,x:260,y:202.9}).wait(1).to({graphics:mask_3_graphics_113,x:260,y:203.5}).wait(1).to({graphics:mask_3_graphics_114,x:260,y:204.1}).wait(1).to({graphics:mask_3_graphics_115,x:260,y:204.7}).wait(1).to({graphics:mask_3_graphics_116,x:260,y:205.3}).wait(1).to({graphics:mask_3_graphics_117,x:260,y:205.9}).wait(1).to({graphics:mask_3_graphics_118,x:260,y:206.5}).wait(1).to({graphics:mask_3_graphics_119,x:260,y:207.1}).wait(1).to({graphics:mask_3_graphics_120,x:260,y:207.6}).wait(1).to({graphics:mask_3_graphics_121,x:260,y:208.2}).wait(1).to({graphics:mask_3_graphics_122,x:260,y:208.8}).wait(1).to({graphics:mask_3_graphics_123,x:260,y:209.4}).wait(1).to({graphics:mask_3_graphics_124,x:260,y:210}).wait(1).to({graphics:mask_3_graphics_125,x:260,y:210.6}).wait(1).to({graphics:mask_3_graphics_126,x:260,y:211.2}).wait(1).to({graphics:mask_3_graphics_127,x:260,y:211.8}).wait(1).to({graphics:mask_3_graphics_128,x:260,y:212.4}).wait(1).to({graphics:mask_3_graphics_129,x:260,y:213}).wait(1).to({graphics:mask_3_graphics_130,x:260,y:213.6}).wait(1).to({graphics:mask_3_graphics_131,x:260,y:214.2}).wait(1).to({graphics:mask_3_graphics_132,x:260,y:214.8}).wait(1).to({graphics:mask_3_graphics_133,x:260,y:215.4}).wait(1).to({graphics:mask_3_graphics_134,x:260,y:216}).wait(1).to({graphics:mask_3_graphics_135,x:260,y:216.6}).wait(1).to({graphics:mask_3_graphics_136,x:260,y:217.2}).wait(1).to({graphics:mask_3_graphics_137,x:260,y:217.8}).wait(1).to({graphics:mask_3_graphics_138,x:260,y:218.4}).wait(1).to({graphics:mask_3_graphics_139,x:260,y:219}).wait(1).to({graphics:mask_3_graphics_140,x:260,y:219.6}).wait(1).to({graphics:mask_3_graphics_141,x:260,y:220.2}).wait(1).to({graphics:mask_3_graphics_142,x:260,y:220.7}).wait(1).to({graphics:mask_3_graphics_143,x:260,y:221.3}).wait(1).to({graphics:mask_3_graphics_144,x:260,y:221.9}).wait(1).to({graphics:mask_3_graphics_145,x:260,y:222.5}).wait(1).to({graphics:mask_3_graphics_146,x:260,y:223.1}).wait(1).to({graphics:mask_3_graphics_147,x:260,y:223.7}).wait(1).to({graphics:mask_3_graphics_148,x:260,y:224.3}).wait(1).to({graphics:mask_3_graphics_149,x:260,y:224.9}).wait(1).to({graphics:mask_3_graphics_150,x:260,y:225.5}).wait(1).to({graphics:mask_3_graphics_151,x:260,y:226.1}).wait(1).to({graphics:mask_3_graphics_152,x:260,y:226.7}).wait(1).to({graphics:mask_3_graphics_153,x:260,y:227.3}).wait(1).to({graphics:mask_3_graphics_154,x:260,y:227.9}).wait(1).to({graphics:mask_3_graphics_155,x:260,y:228.5}).wait(1).to({graphics:mask_3_graphics_156,x:260,y:229.1}).wait(1).to({graphics:mask_3_graphics_157,x:260,y:229.7}).wait(1).to({graphics:mask_3_graphics_158,x:260,y:230.3}).wait(1).to({graphics:mask_3_graphics_159,x:260,y:230.9}).wait(1).to({graphics:mask_3_graphics_160,x:260,y:231.5}).wait(1).to({graphics:mask_3_graphics_161,x:260,y:232.1}).wait(1).to({graphics:mask_3_graphics_162,x:260,y:232.7}).wait(1).to({graphics:mask_3_graphics_163,x:260,y:233.3}).wait(1).to({graphics:mask_3_graphics_164,x:260,y:233.8}).wait(1).to({graphics:mask_3_graphics_165,x:260,y:234.4}).wait(1).to({graphics:mask_3_graphics_166,x:260,y:235}).wait(1).to({graphics:mask_3_graphics_167,x:260,y:235.6}).wait(1).to({graphics:mask_3_graphics_168,x:260,y:236.2}).wait(1).to({graphics:mask_3_graphics_169,x:260,y:236.8}).wait(1).to({graphics:mask_3_graphics_170,x:260,y:237.4}).wait(1).to({graphics:mask_3_graphics_171,x:260,y:238}).wait(1).to({graphics:mask_3_graphics_172,x:260,y:238.6}).wait(1).to({graphics:mask_3_graphics_173,x:260,y:239.2}).wait(1).to({graphics:mask_3_graphics_174,x:260,y:239.8}).wait(1).to({graphics:mask_3_graphics_175,x:260,y:240.4}).wait(1).to({graphics:mask_3_graphics_176,x:260,y:241}).wait(1).to({graphics:mask_3_graphics_177,x:142.9,y:150.7}).wait(1).to({graphics:mask_3_graphics_178,x:260,y:242}).wait(1).to({graphics:mask_3_graphics_179,x:142.9,y:151.4}).wait(336));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(20,1,1).p("AJYsnQh2DzgYIDQgZIDkiDuQkhDunFk2");
	this.shape_4.setTransform(212,273.8);
	this.shape_4._off = true;

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(90).to({_off:false},0).wait(425));

	// Layer 11
	this.instance_3 = new lib.ar1("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(166.3,161.4,1,1,-3.7,0,0,-0.7,0.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).wait(506));

	// Layer 3 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_9 = new cjs.Graphics().p("AMjUPIBXhsIDMCkIhXBsg");
	var mask_4_graphics_10 = new cjs.Graphics().p("AiVgVIBgh5IDLCkIhgB5g");
	var mask_4_graphics_11 = new cjs.Graphics().p("AiagPIBqiFIDLCkIhqCFg");
	var mask_4_graphics_12 = new cjs.Graphics().p("AifgJIB0iRIDLCjIh0CSg");
	var mask_4_graphics_13 = new cjs.Graphics().p("AikgCIB/ieIDLCjIiACeg");
	var mask_4_graphics_14 = new cjs.Graphics().p("AipADICIipIDMCkIiKCqg");
	var mask_4_graphics_15 = new cjs.Graphics().p("AiuAJICSi2IDMClIiUC2g");
	var mask_4_graphics_16 = new cjs.Graphics().p("AizAPICcjCIDMClIieDCg");
	var mask_4_graphics_17 = new cjs.Graphics().p("Ai4AWICmjPIDMCkIioDPg");
	var mask_4_graphics_18 = new cjs.Graphics().p("Ai9AcICwjbIDLCkIixDcg");
	var mask_4_graphics_19 = new cjs.Graphics().p("AjCAiIC7joIDKClIi7Dog");
	var mask_4_graphics_20 = new cjs.Graphics().p("AjHAoIDFj0IDKCkIjFD1g");
	var mask_4_graphics_21 = new cjs.Graphics().p("AjNAvIDPkBIDMCkIjPEBg");
	var mask_4_graphics_22 = new cjs.Graphics().p("AjSA1IDZkOIDMClIjZEOg");
	var mask_4_graphics_23 = new cjs.Graphics().p("AjXA7IDjkaIDMClIjjEag");
	var mask_4_graphics_24 = new cjs.Graphics().p("AjcBBIDtkmIDMCkIjtEng");
	var mask_4_graphics_25 = new cjs.Graphics().p("AjhBIID3kzIDMCkIj3Ezg");
	var mask_4_graphics_26 = new cjs.Graphics().p("AjmBOIEBk/IDMCkIkBFAg");
	var mask_4_graphics_27 = new cjs.Graphics().p("AjrBUIELlMIDMClIkLFMg");
	var mask_4_graphics_28 = new cjs.Graphics().p("AjwBaIEVlYIDMClIkVFYg");
	var mask_4_graphics_29 = new cjs.Graphics().p("Aj1BhIEfllIDMCkIkfFlg");
	var mask_4_graphics_30 = new cjs.Graphics().p("Aj6BnIEplyIDMClIkpFyg");
	var mask_4_graphics_31 = new cjs.Graphics().p("Aj/BtIEzl+IDMClIkzF+g");
	var mask_4_graphics_32 = new cjs.Graphics().p("AkEBzIE9mKIDMCkIk9GLg");
	var mask_4_graphics_33 = new cjs.Graphics().p("AkJB6IFHmXIDMCkIlHGXg");
	var mask_4_graphics_34 = new cjs.Graphics().p("AkOCAIFRmjIDMCkIlRGkg");
	var mask_4_graphics_35 = new cjs.Graphics().p("AkTCGIFbmwIDMClIlbGwg");
	var mask_4_graphics_36 = new cjs.Graphics().p("AkYCMIFlm8IDMClIllG8g");
	var mask_4_graphics_37 = new cjs.Graphics().p("AkdCTIFvnJIDMCkIlvHJg");
	var mask_4_graphics_38 = new cjs.Graphics().p("AkiCZIF5nWIDMClIl5HWg");
	var mask_4_graphics_39 = new cjs.Graphics().p("AknCfIGDniIDMClImDHig");
	var mask_4_graphics_40 = new cjs.Graphics().p("AksClIGNnuIDMCkImNHvg");
	var mask_4_graphics_41 = new cjs.Graphics().p("AkxCsIGXn7IDMCkImXH8g");
	var mask_4_graphics_42 = new cjs.Graphics().p("Ak2CyIGhoIIDMClImhIIg");
	var mask_4_graphics_43 = new cjs.Graphics().p("Ak7C4IGroUIDMCkImrIVg");
	var mask_4_graphics_44 = new cjs.Graphics().p("AlAC/IG1ohIDMCkIm1Ihg");
	var mask_4_graphics_45 = new cjs.Graphics().p("AlFDFIHAouIDLClInAIug");
	var mask_4_graphics_46 = new cjs.Graphics().p("AlKDLIHKo6IDLClInKI6g");
	var mask_4_graphics_47 = new cjs.Graphics().p("AlPDRIHUpGIDMCkInVJHg");
	var mask_4_graphics_48 = new cjs.Graphics().p("AlUDYIHdpTIDNCkInfJTg");
	var mask_4_graphics_49 = new cjs.Graphics().p("AlZDeIHnpfIDNCkInpJgg");
	var mask_4_graphics_50 = new cjs.Graphics().p("AleDkIHxpsIDNClInzJsg");
	var mask_4_graphics_51 = new cjs.Graphics().p("AljDqIH7p4IDNClIn9J4g");
	var mask_4_graphics_52 = new cjs.Graphics().p("AloDxIIFqFIDMCkIoGKFg");
	var mask_4_graphics_53 = new cjs.Graphics().p("AluD3IIRqSIDMClIoRKSg");
	var mask_4_graphics_54 = new cjs.Graphics().p("AlzD9IIbqeIDMClIobKeg");
	var mask_4_graphics_55 = new cjs.Graphics().p("Al4EDIIlqqIDMCkIolKrg");
	var mask_4_graphics_56 = new cjs.Graphics().p("Al9EKIIvq3IDMCkIovK3g");
	var mask_4_graphics_57 = new cjs.Graphics().p("AmCEQII5rDIDMCkIo5LEg");
	var mask_4_graphics_58 = new cjs.Graphics().p("AmHEWIJDrQIDMClIpDLQg");
	var mask_4_graphics_59 = new cjs.Graphics().p("AmMEcIJNrcIDMClIpNLcg");
	var mask_4_graphics_60 = new cjs.Graphics().p("AmREjIJXrpIDMCkIpXLpg");
	var mask_4_graphics_61 = new cjs.Graphics().p("AmWEpIJhr2IDMClIphL2g");
	var mask_4_graphics_62 = new cjs.Graphics().p("AmbEvIJrsCIDMClIprMCg");
	var mask_4_graphics_63 = new cjs.Graphics().p("AmgE1IJ1sOIDMCkIp1MPg");
	var mask_4_graphics_64 = new cjs.Graphics().p("AmlE8IJ/sbIDMCkIp/Mbg");
	var mask_4_graphics_65 = new cjs.Graphics().p("AmqFCIKJsnIDMCkIqJMog");
	var mask_4_graphics_66 = new cjs.Graphics().p("AmvFIIKTs0IDMClIqTM0g");
	var mask_4_graphics_67 = new cjs.Graphics().p("Am0FOIKdtAIDMClIqdNAg");
	var mask_4_graphics_68 = new cjs.Graphics().p("Am5FVIKntNIDMCkIqnNNg");
	var mask_4_graphics_69 = new cjs.Graphics().p("Am+FbIKxtaIDMClIqxNag");
	var mask_4_graphics_70 = new cjs.Graphics().p("AnDFhIK7tmIDMClIq7Nmg");
	var mask_4_graphics_71 = new cjs.Graphics().p("AnIFnILFtyIDMCkIrFNzg");
	var mask_4_graphics_72 = new cjs.Graphics().p("AHmUPILRuAIDMCkIrROAg");
	var mask_4_graphics_73 = new cjs.Graphics().p("AngGFIL1utIDMCkIr1Oug");
	var mask_4_graphics_74 = new cjs.Graphics().p("AHBUPIMbvdIDMCkIsbPdg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_4_graphics_9,x:109.4,y:145.9}).wait(1).to({graphics:mask_4_graphics_10,x:204.7,y:277.6}).wait(1).to({graphics:mask_4_graphics_11,x:205.2,y:277}).wait(1).to({graphics:mask_4_graphics_12,x:205.7,y:276.4}).wait(1).to({graphics:mask_4_graphics_13,x:206.3,y:275.7}).wait(1).to({graphics:mask_4_graphics_14,x:206.8,y:275.1}).wait(1).to({graphics:mask_4_graphics_15,x:207.3,y:274.5}).wait(1).to({graphics:mask_4_graphics_16,x:207.8,y:273.9}).wait(1).to({graphics:mask_4_graphics_17,x:208.3,y:273.2}).wait(1).to({graphics:mask_4_graphics_18,x:208.8,y:272.6}).wait(1).to({graphics:mask_4_graphics_19,x:209.3,y:272}).wait(1).to({graphics:mask_4_graphics_20,x:209.8,y:271.4}).wait(1).to({graphics:mask_4_graphics_21,x:210.3,y:270.7}).wait(1).to({graphics:mask_4_graphics_22,x:210.8,y:270.1}).wait(1).to({graphics:mask_4_graphics_23,x:211.3,y:269.5}).wait(1).to({graphics:mask_4_graphics_24,x:211.8,y:268.9}).wait(1).to({graphics:mask_4_graphics_25,x:212.3,y:268.2}).wait(1).to({graphics:mask_4_graphics_26,x:212.8,y:267.6}).wait(1).to({graphics:mask_4_graphics_27,x:213.3,y:267}).wait(1).to({graphics:mask_4_graphics_28,x:213.8,y:266.4}).wait(1).to({graphics:mask_4_graphics_29,x:214.3,y:265.7}).wait(1).to({graphics:mask_4_graphics_30,x:214.8,y:265.1}).wait(1).to({graphics:mask_4_graphics_31,x:215.3,y:264.5}).wait(1).to({graphics:mask_4_graphics_32,x:215.8,y:263.9}).wait(1).to({graphics:mask_4_graphics_33,x:216.3,y:263.2}).wait(1).to({graphics:mask_4_graphics_34,x:216.8,y:262.6}).wait(1).to({graphics:mask_4_graphics_35,x:217.3,y:262}).wait(1).to({graphics:mask_4_graphics_36,x:217.8,y:261.4}).wait(1).to({graphics:mask_4_graphics_37,x:218.3,y:260.7}).wait(1).to({graphics:mask_4_graphics_38,x:218.8,y:260.1}).wait(1).to({graphics:mask_4_graphics_39,x:219.3,y:259.5}).wait(1).to({graphics:mask_4_graphics_40,x:219.8,y:258.9}).wait(1).to({graphics:mask_4_graphics_41,x:220.3,y:258.2}).wait(1).to({graphics:mask_4_graphics_42,x:220.8,y:257.6}).wait(1).to({graphics:mask_4_graphics_43,x:221.3,y:257}).wait(1).to({graphics:mask_4_graphics_44,x:221.8,y:256.3}).wait(1).to({graphics:mask_4_graphics_45,x:222.4,y:255.7}).wait(1).to({graphics:mask_4_graphics_46,x:222.9,y:255.1}).wait(1).to({graphics:mask_4_graphics_47,x:223.4,y:254.5}).wait(1).to({graphics:mask_4_graphics_48,x:223.9,y:253.8}).wait(1).to({graphics:mask_4_graphics_49,x:224.4,y:253.2}).wait(1).to({graphics:mask_4_graphics_50,x:224.9,y:252.6}).wait(1).to({graphics:mask_4_graphics_51,x:225.4,y:252}).wait(1).to({graphics:mask_4_graphics_52,x:225.9,y:251.3}).wait(1).to({graphics:mask_4_graphics_53,x:226.4,y:250.7}).wait(1).to({graphics:mask_4_graphics_54,x:226.9,y:250.1}).wait(1).to({graphics:mask_4_graphics_55,x:227.4,y:249.5}).wait(1).to({graphics:mask_4_graphics_56,x:227.9,y:248.8}).wait(1).to({graphics:mask_4_graphics_57,x:228.4,y:248.2}).wait(1).to({graphics:mask_4_graphics_58,x:228.9,y:247.6}).wait(1).to({graphics:mask_4_graphics_59,x:229.4,y:247}).wait(1).to({graphics:mask_4_graphics_60,x:229.9,y:246.3}).wait(1).to({graphics:mask_4_graphics_61,x:230.4,y:245.7}).wait(1).to({graphics:mask_4_graphics_62,x:230.9,y:245.1}).wait(1).to({graphics:mask_4_graphics_63,x:231.4,y:244.5}).wait(1).to({graphics:mask_4_graphics_64,x:231.9,y:243.8}).wait(1).to({graphics:mask_4_graphics_65,x:232.4,y:243.2}).wait(1).to({graphics:mask_4_graphics_66,x:232.9,y:242.6}).wait(1).to({graphics:mask_4_graphics_67,x:233.4,y:242}).wait(1).to({graphics:mask_4_graphics_68,x:233.9,y:241.3}).wait(1).to({graphics:mask_4_graphics_69,x:234.4,y:240.7}).wait(1).to({graphics:mask_4_graphics_70,x:234.9,y:240.1}).wait(1).to({graphics:mask_4_graphics_71,x:235.4,y:239.5}).wait(1).to({graphics:mask_4_graphics_72,x:141.1,y:145.9}).wait(1).to({graphics:mask_4_graphics_73,x:237.8,y:236.5}).wait(1).to({graphics:mask_4_graphics_74,x:144.8,y:145.9}).wait(441));

	// Layer 2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(20,1,1).p("AlJGQQGlnADulf");
	this.shape_5.setTransform(239,233.1);
	this.shape_5._off = true;

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(9).to({_off:false},0).wait(506));

	// Letter
	this.instance_4 = new lib.Symbol1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(275,275);
	this.instance_4.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(515));

	// Background
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_6.setTransform(275,275,3.373,2.543);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_7.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).wait(515));

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