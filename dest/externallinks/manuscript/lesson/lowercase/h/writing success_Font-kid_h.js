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


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AKMdfQiVABAAieIAAwpQAAmCm/AAQjUAAinBlQi1BtAACYIAARHQAACYiwgBQiYABAAigMAAAg1sQAAikCegOIALAAQA6gBAxAvQA0AyAABSIAAcJQD4iNEwAAIAMAAQFJAADPCjQDsC+ABFoIAAQpQAACXipAGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.2,-188.7,166.5,377.5);


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

	// Layer 3
	this.instance = new lib.triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(94.7,7.8,1,1,122,0,0,0.3,-17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.4,rotation:0,guide:{path:[94.6,7.8,82,0,72.3,-6,62.5,-12,52.4,-17.7,42.6,-23.2,32.6,-28.5,22.6,-33.8,11,-33.4,-0.2,-33.1,-10,-27.7,-20.1,-22.2,-25.1,-11.8,-30.2,-1.4,-30.4,7.5,-30.6,11.7,-30.1,15.2], orient:'auto'}},119).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AnpRgQpuielIomMAphgYuQFIImicJtQifJtomFHQl1DemTAAQjBAAjJgzg");
	var mask_graphics_1 = new cjs.Graphics().p("AnPR4QpyiOlUofMAo7gZtQFVIfiOJxQiQJwoeFUQl/DxmmAAQixAAi4grg");
	var mask_graphics_2 = new cjs.Graphics().p("Am1SQQp1iAlhoXMAoTgaqQFiIXh/J0QiCJzoVFhQmJEEm6AAQigAAimgig");
	var mask_graphics_3 = new cjs.Graphics().p("AmbSmQp4hxluoOMAnrgbnQFuIOhxJ3QhyJ2oNFuQmSEYnOAAQiPAAiUgbg");
	var mask_graphics_4 = new cjs.Graphics().p("AmCS7Qp6hil6oFMAnAgciQF6IFhhJ5QhjJ5oFF5QmbEtnjAAQh9AAiCgUg");
	var mask_graphics_5 = new cjs.Graphics().p("AloTPQp8hTmHn8MAmUgddQGHH8hTJ8QhUJ6n7GGQmkFDn4AAQhrAAhvgPg");
	var mask_graphics_6 = new cjs.Graphics().p("AlPTiQp+hEmSnzMAlngeWQGSHzhDJ9QhGJ8nyGSQmrFZoOAAQhZAAhcgKg");
	var mask_graphics_7 = new cjs.Graphics().p("Ak2T0Qp/g1menpMAk4gfPQGeHpg0J/Qg3J+noGdQmyFwomAAQhGAAhIgGg");
	var mask_graphics_8 = new cjs.Graphics().p("AkdUEQqBgmmpnfMAkIggFQGpHfglJ/QgnJ/neGpQm5GHo9AAQgzAAg0gDg");
	var mask_graphics_9 = new cjs.Graphics().p("AkFUUQqBgXm1nVMAjXgg8QG1HVgWKAQgYKAnUG0Qm+GgpXAAIg/gBg");
	var mask_graphics_10 = new cjs.Graphics().p("AjtUiQqCgIm/nKMAikghxQHAHKgHKBQgJKAnKG/QnDG5pxAAIgVAAg");
	var mask_graphics_11 = new cjs.Graphics().p("A0hN3MAhwgilQHLHAAIKAQAGKBm/HJQnAHLp+AIIgWAAQp0AAnCm4g");
	var mask_graphics_12 = new cjs.Graphics().p("A0UOcMAg8gjWQHUG0AYKAQAVKAm0HUQm1HWp+AWIg/ABQpaAAm9mfg");
	var mask_graphics_13 = new cjs.Graphics().p("A0GPBMAgFgkIQHfGqAnJ/QAkJ/mpHeQmpHgp+AmQg1ADgzAAQpAAAm3mHg");
	var mask_graphics_14 = new cjs.Graphics().p("Az5PlMAfOgk4QHpGeA2J+QA0J+meHpQmeHpp9A1QhIAGhHAAQooAAmxlvg");
	var mask_graphics_15 = new cjs.Graphics().p("AzrQIMAeWglnQHyGSBFJ9QBDJ9mSHyQmSHzp7BEQhdAKhZAAQoRAAmqlYg");
	var mask_graphics_16 = new cjs.Graphics().p("AzdQqMAddgmUQH7GGBUJ7QBSJ7mGH7QmGH9p6BTQhvAOhsAAQn6AAmjlBg");
	var mask_graphics_17 = new cjs.Graphics().p("AzORKMAchgm/QIFF6BjJ5QBhJ4l6IFQl6IFp3BiQiDAUh+AAQnkAAmaksg");
	var mask_graphics_18 = new cjs.Graphics().p("Ay/RqMAbmgnqQINFuByJ2QBwJ2ltINQlvIPp0BwQiWAbiPAAQnPAAmRkXg");
	var mask_graphics_19 = new cjs.Graphics().p("AywSIMAapgoTQIWFiCBJzQB/J0lhIVQliIXpyCAQinAiihAAQm6AAmIkEg");
	var mask_graphics_20 = new cjs.Graphics().p("AyhSmMAZsgo7QIeFVCQJwQCNJwlUIeQlVIfpvCPQi4AqiyAAQmnAAl+jwg");
	var mask_graphics_21 = new cjs.Graphics().p("AySTCMAYugpgQImFHCeJtQCdJtlIIlQlIInpsCdQjJAzjCAAQmUABl0jeg");
	var mask_graphics_22 = new cjs.Graphics().p("AyCTeMAXugqGQIuE7CtJoQCrJpk6IuQk7IupoCsQjaA9jTAAQmCAAlojLg");
	var mask_graphics_23 = new cjs.Graphics().p("AxyT4MAWugqpQI1EtC7JlQC6JlktI0QkuI2pjC6QjqBIjkAAQlvAAldi6g");
	var mask_graphics_24 = new cjs.Graphics().p("AxiURMAVtgrKQI8EgDKJfQDIJgkgI8QkgI9pfDIQj6BTj0AAQldAAlRipg");
	var mask_graphics_25 = new cjs.Graphics().p("AxSUpMAUsgrqQJCESDZJbQDWJbkSJCQkSJDpbDXQkJBfkFAAQlMAAlEiZg");
	var mask_graphics_26 = new cjs.Graphics().p("AxBVAMATpgsJQJJEEDmJWQDlJXkEJHQkFJKpVDlQkYBskWAAQk6AAk3iKg");
	var mask_graphics_27 = new cjs.Graphics().p("AwwVVMASlgslQJPD2D1JQQDyJSj2JNQj3JQpPDzQkmB5knAAQkpAAkph8g");
	var mask_graphics_28 = new cjs.Graphics().p("AwfVqMARhgtBQJVDoEDJKQEAJMjoJTQjpJVpJEBQk0CIk4AAQkYAAkbhug");
	var mask_graphics_29 = new cjs.Graphics().p("AwOV9MAQdgtaQJaDaEQJEQEPJFjaJYQjbJbpDEPQlBCWlJAAQkIAAkMhhg");
	var mask_graphics_30 = new cjs.Graphics().p("Av9WPMAPZgtyQJeDMEeI9QEcI+jLJeQjNJfo8EdQlOCmlaAAQj4AAj9hVg");
	var mask_graphics_31 = new cjs.Graphics().p("AvrWgMAOTguJQJjC+ErI2QEqI4i9JiQi+Jko2EqQlaC3lsAAQjnAAjthKg");
	var mask_graphics_32 = new cjs.Graphics().p("AvZWwMANNgueQJnCvE4IvQE3IxiuJmQiwJoouE4QlmDIl+AAQjWAAjdg/g");
	var mask_graphics_33 = new cjs.Graphics().p("AvIW/MAMHguyQJrChFGInQFEIpigJrQihJsonFFQlxDamRAAQjFAAjNg1g");
	var mask_graphics_34 = new cjs.Graphics().p("AuyXMMALAgvDQJuCSFTIgQFRIhiRJuQiSJwofFRQl8DtmkAAQi0AAi8gsg");
	var mask_graphics_35 = new cjs.Graphics().p("AuOXYMAJ5gvSQJxCDFgIXQFeIZiDJxQiDJzoXFfQmGD/m3AAQikAAiqgjg");
	var mask_graphics_36 = new cjs.Graphics().p("AtqXjMAIxgvhQJ1B0FsIPQFqIRh0J0Qh0J2oPFrQmPEUnLAAQiSAAiZgcg");
	var mask_graphics_37 = new cjs.Graphics().p("AtFXsMAHogvtQJ3BmF5IGQF2IIhlJ2QhlJ5oGF3QmYEpngAAQiAAAiGgWg");
	var mask_graphics_38 = new cjs.Graphics().p("AshX0MAGggv3QJ6BWGEH9QGDH/hWJ5QhWJ7n9GDQmhE+n1AAQhvAAhzgQg");
	var mask_graphics_39 = new cjs.Graphics().p("Ar8X7MAFXgwAQJ7BHGRH0QGPH1hHJ7QhHJ9n0GPQmpFUoKAAQhdAAhggLg");
	var mask_graphics_40 = new cjs.Graphics().p("ArYYBMAEPgwIQJ9A4GcHrQGbHsg4J8Qg5J+nqGbQmvFroiAAQhKAAhNgHg");
	var mask_graphics_41 = new cjs.Graphics().p("AqzYFMADGgwNQJ+ApGnHgQGmHjgpJ9QgpJ/ngGnQm2GCo6AAQg3AAg4gEg");
	var mask_graphics_42 = new cjs.Graphics().p("AqOYIMAB8gwRQJ/AaGzHWQGxHYgZJ+QgaKBnWGxQm9GbpSAAIhHgCg");
	var mask_graphics_43 = new cjs.Graphics().p("ApqYKMAA0gwTQJ/ALG+HLQG8HOgKJ+QgLKBnMG9QnCGzpsAAIgeAAg");
	var mask_graphics_44 = new cjs.Graphics().p("Apb4JQKAgEHIHBQHHHCAFKAQAEKAnBHHQnCHJp/AEg");
	var mask_graphics_45 = new cjs.Graphics().p("Ap/4IQJ/gTHTG2QHSG4ATJ/QAUJ/m2HSQm4HTp/AUg");
	var mask_graphics_46 = new cjs.Graphics().p("Aqk4FQJ/gjHdGrQHcGtAiJ+QAjJ/mrHcQmsHdp+Ajg");
	var mask_graphics_47 = new cjs.Graphics().p("ArI4CQJ+gxHmGfQHmGiAyJ9QAyJ+mgHmQmhHnp9Ayg");
	var mask_graphics_48 = new cjs.Graphics().p("Art39QJ9hAHwGTQHwGWBAJ9QBBJ8mUHwQmVHxp8BBg");
	var mask_graphics_49 = new cjs.Graphics().p("AsR32QJ7hQH5GIQH5GKBQJ6QBQJ7mIH5QmJH7p6BQg");
	var mask_graphics_50 = new cjs.Graphics().p("As23uQJ5hfIDF8QICF+BfJ4QBfJ5l8ICQl9IDp4Bfg");
	var mask_graphics_51 = new cjs.Graphics().p("Ata3lQJ2huIMFvQILFyBuJ2QBuJ2lwILQlxINp1Bug");
	var mask_graphics_52 = new cjs.Graphics().p("At+3bQJ0h9ITFjQIUFmB9JzQB9JzlkIUQlkIVpzB8g");
	var mask_graphics_53 = new cjs.Graphics().p("Aui3PQJwiMIdFWQIcFZCLJwQCMJwlXIcQlXIdpwCMg");
	var mask_graphics_54 = new cjs.Graphics().p("AvA3DQJtiaIkFKQIkFLCbJtQCaJtlKIjQlKImptCag");
	var mask_graphics_55 = new cjs.Graphics().p("AvS21QJqipIrE9QIsE+CpJpQCpJpk9IsQk9IsppCpg");
	var mask_graphics_56 = new cjs.Graphics().p("Avf2qQJnizIxEzQIxE1CzJlQC0JmkzIxQk0IyplC0g");
	var mask_graphics_57 = new cjs.Graphics().p("Avs2eQJki+I2EpQI2ErC+JjQC/JikqI2QkqI4piC+g");
	var mask_graphics_58 = new cjs.Graphics().p("Av42RQJfjJI8EfQI7EhDJJfQDJJgkgI7QkgI8pfDJg");
	var mask_graphics_59 = new cjs.Graphics().p("AwF2EQJcjUJAEWQJBEXDTJbQDTJckVJAQkXJCpbDTg");
	var mask_graphics_60 = new cjs.Graphics().p("AwS13QJZjdJEELQJGENDdJYQDeJYkMJEQkMJHpYDdg");
	var mask_graphics_61 = new cjs.Graphics().p("Awe1oQJUjoJKEBQJJEDDoJUQDoJUkBJJQkCJLpVDng");
	var mask_graphics_62 = new cjs.Graphics().p("Awr1aQJRjyJND3QJPD5DyJQQDyJQj3JNQj4JPpRDzg");
	var mask_graphics_63 = new cjs.Graphics().p("Aw31KQJMj8JSDsQJSDvD9JLQD8JMjtJSQjtJTpND8g");
	var mask_graphics_64 = new cjs.Graphics().p("AxD06QJHkGJWDiQJXDkEGJHQEHJHjjJWQjjJXpIEHg");
	var mask_graphics_65 = new cjs.Graphics().p("AxP0pQJDkRJZDYQJbDaEQJCQERJEjYJYQjZJcpDEQg");
	var mask_graphics_66 = new cjs.Graphics().p("Axb0YQI+kaJdDNQJeDQEaI9QEbI/jOJcQjOJfo+Eag");
	var mask_graphics_67 = new cjs.Graphics().p("Axn0GQI5kkJhDDQJhDFEkI4QElI6jDJfQjEJjo5Ekg");
	var mask_graphics_68 = new cjs.Graphics().p("AxzzzQI0kuJkC4QJlC6EuI0QEuI0i4JjQi6Jmo0Eug");
	var mask_graphics_69 = new cjs.Graphics().p("Ax+zgQIuk4JnCuQJoCwE4IuQE4IviuJmQivJoouE4g");
	var mask_graphics_70 = new cjs.Graphics().p("AyKzMQIplCJqCjQJrClFBIpQFCIqijJoQikJsopFCg");
	var mask_graphics_71 = new cjs.Graphics().p("AyVy4QIjlLJuCYQJsCbFLIjQFMIkiZJrQiZJuokFMg");
	var mask_graphics_72 = new cjs.Graphics().p("AygyjQIdlUJwCNQJwCQFUIdQFVIeiOJuQiPJxodFUg");
	var mask_graphics_73 = new cjs.Graphics().p("AyryNQIXleJzCCQJxCFFeIXQFeIZiDJwQiEJzoYFeg");
	var mask_graphics_74 = new cjs.Graphics().p("Ay2x3QIRlnJ1B3QJzB6FnIRQFoISh5JzQh5J1oRFng");
	var mask_graphics_75 = new cjs.Graphics().p("AzBxgQILlxJ3BtQJ1BvFwILQFxIMhuJ0QhuJ3oLFxg");
	var mask_graphics_76 = new cjs.Graphics().p("AzMxJQIFl5J4BhQJ4BlF5IEQF5IFhjJ2QhiJ6oFF5g");
	var mask_graphics_77 = new cjs.Graphics().p("AzWwxQH+mCJ6BWQJ5BaGBH9QGDH/hYJ4QhYJ7n+GCg");
	var mask_graphics_78 = new cjs.Graphics().p("AzhwZQH4mLJ7BMQJ6BOGLH3QGLH4hNJ5QhNJ8n3GLg");
	var mask_graphics_79 = new cjs.Graphics().p("AzrwAQHwmUJ9BBQJ8BDGTHwQGUHxhCJ7QhCJ9nwGUg");
	var mask_graphics_80 = new cjs.Graphics().p("Az1vnQHpmcJ+A2QJ9A4GbHpQGcHqg2J8Qg3J+npGcg");
	var mask_graphics_81 = new cjs.Graphics().p("Az/vNQHimkJ+ArQJ+AtGkHiQGlHigsJ9QgsJ/niGkg");
	var mask_graphics_82 = new cjs.Graphics().p("A0JuyQHbmtJ/AgQJ+AiGsHaQGtHcggJ9QghKAnbGsg");
	var mask_graphics_83 = new cjs.Graphics().p("A0TuXQHUm1J/AVQJ/AXG0HTQG1HTgVJ+QgWKAnTG1g");
	var mask_graphics_84 = new cjs.Graphics().p("A0ct7QHLm9KAAJQJ/AMG8HMQG+HMgLJ9QgKKBnMG9g");
	var mask_graphics_85 = new cjs.Graphics().p("A0mtfQHEnFKAgBQJ/AAHEHEQHFHEABJ+QAAKBnEHEg");
	var mask_graphics_86 = new cjs.Graphics().p("A0vtDQG8nMJ/gNQKAgKHLG8QHNG8AMJ+QALKAm7HNg");
	var mask_graphics_87 = new cjs.Graphics().p("A04smQG0nTJ/gYQJ/gVHTGzQHVG0AWJ+QAXKAm0HUg");
	var mask_graphics_88 = new cjs.Graphics().p("A1BsIQGrnbJ/gjQJ+ggHbGrQHcGsAiJ9QAiKAmsHbg");
	var mask_graphics_89 = new cjs.Graphics().p("A1KrqQGjniJ+guQJ+gsHiGjQHjGkAtJ8QAtJ/mkHjg");
	var mask_graphics_90 = new cjs.Graphics().p("A1TrLQGbnqJ9g5QJ9g2HpGaQHrGcA3J7QA4J+mbHqg");
	var mask_graphics_91 = new cjs.Graphics().p("A1cqsQGTnxJ8hEQJ8hBHwGSQHxGTBDJ6QBDJ9mSHxg");
	var mask_graphics_92 = new cjs.Graphics().p("A1kqNQGKn3J6hPQJ7hNH3GKQH5GKBNJ5QBOJ8mKH4g");
	var mask_graphics_93 = new cjs.Graphics().p("A1sptQGBn+J5haQJ5hXH+GAQH/GCBZJ3QBZJ7mBH+g");
	var mask_graphics_94 = new cjs.Graphics().p("A11pMQF5oFJ3hlQJ4hiIEF3QIGF5BkJ2QBjJ4l4IFg");
	var mask_graphics_95 = new cjs.Graphics().p("A18orQFvoMJ1hwQJ2htILFvQIMFvBvJ0QBvJ3lwIMg");
	var mask_graphics_96 = new cjs.Graphics().p("A2EoKQFmoSJ0h6QJzh5ISFmQISFmB5JyQB6J1lmISg");
	var mask_graphics_97 = new cjs.Graphics().p("A2MnpQFdoYJyiFQJxiDIXFcQIZFdCEJwQCFJzldIYg");
	var mask_graphics_98 = new cjs.Graphics().p("A2TnHQFToeJwiQQJviOIdFTQIeFUCPJuQCQJwlUIeg");
	var mask_graphics_99 = new cjs.Graphics().p("A2amkQFKokJsibQJtiZIjFKQIkFKCaJrQCaJulKIjg");
	var mask_graphics_100 = new cjs.Graphics().p("A2il9QE/oqJpinQJqilIpE/QIrE/CmJpQCmJpk/Iqg");
	var mask_graphics_101 = new cjs.Graphics().p("A2qlVQE0owJmi0QJmixIwE0QIxE0CyJmQCzJmk0Iwg");
	var mask_graphics_102 = new cjs.Graphics().p("A2xktQEpo2Jii/QJji+I2EpQI2EpC/JiQC+JjkpI2g");
	var mask_graphics_103 = new cjs.Graphics().p("A24kEQEdo8JfjLQJfjKI7EeQI9EeDKJeQDLJfkeI8g");
	var mask_graphics_104 = new cjs.Graphics().p("A2/jbQESpBJbjYQJajVJCESQJCETDWJaQDXJakTJCg");
	var mask_graphics_105 = new cjs.Graphics().p("A3GixQEHpHJWjkQJYjhJFEHQJIEHDiJWQDjJWkHJIg");
	var mask_graphics_106 = new cjs.Graphics().p("A3MiHQD7pNJSjvQJTjtJLD8QJMD7DuJSQDvJRj8JNg");
	var mask_graphics_107 = new cjs.Graphics().p("A3ShdQDwpRJMj7QJPj5JPDwQJSDwD6JMQD6JOjwJRg");
	var mask_graphics_108 = new cjs.Graphics().p("A3YgyQDkpWJIkHQJJkEJUDkQJXDkEFJIQEGJIjkJWg");
	var mask_graphics_109 = new cjs.Graphics().p("A3dgIQDYpaJDkSQJEkQJYDYQJbDZERJCQERJDjYJag");
	var mask_graphics_110 = new cjs.Graphics().p("A3jAjQDNpeI9kdQI/kcJdDNQJfDMEcI9QEdI9jNJfg");
	var mask_graphics_111 = new cjs.Graphics().p("A3nBOQDAphI4kpQI4knJhDAQJkDBEnI3QEoI4jAJig");
	var mask_graphics_112 = new cjs.Graphics().p("A3sB6QC0pmIykzQIzkyJlC0QJnC0EyIyQEzIyi0Jmg");
	var mask_graphics_113 = new cjs.Graphics().p("A3wCmQCoppIsk/QItk9JoCoQJqCoE+IsQE+IrioJqg");
	var mask_graphics_114 = new cjs.Graphics().p("A30DSQCcpsIllKQInlIJrCcQJuCcFIIlQFKIlicJtg");
	var mask_graphics_115 = new cjs.Graphics().p("A33D+QCPpvIflUQIglTJuCPQJxCQFTIfQFUIeiPJwg");
	var mask_graphics_116 = new cjs.Graphics().p("A37ErQCEpyIXlfQIaleJxCDQJzCEFeIYQFfIYiDJyg");
	var mask_graphics_117 = new cjs.Graphics().p("A3+FYQB3p1IRlpQISlpJ0B3QJ2B3FpIRQFpIRh3J1g");
	var mask_graphics_118 = new cjs.Graphics().p("A4AGFQBqp3IKl0QILlzJ2BrQJ4BqFzIKQF0IJhqJ4g");
	var mask_graphics_119 = new cjs.Graphics().p("A4DGyQBep5IDl+QIDl9J4BeQJ7BeF9ICQF+ICheJ6g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:47,y:70.9}).wait(1).to({graphics:mask_graphics_1,x:47.9,y:69.3}).wait(1).to({graphics:mask_graphics_2,x:48.9,y:67.7}).wait(1).to({graphics:mask_graphics_3,x:49.9,y:66.2}).wait(1).to({graphics:mask_graphics_4,x:50.9,y:64.7}).wait(1).to({graphics:mask_graphics_5,x:52,y:63.2}).wait(1).to({graphics:mask_graphics_6,x:53.1,y:61.7}).wait(1).to({graphics:mask_graphics_7,x:54.3,y:60.3}).wait(1).to({graphics:mask_graphics_8,x:55.5,y:58.9}).wait(1).to({graphics:mask_graphics_9,x:56.7,y:57.5}).wait(1).to({graphics:mask_graphics_10,x:57.9,y:56.2}).wait(1).to({graphics:mask_graphics_11,x:59.2,y:54.9}).wait(1).to({graphics:mask_graphics_12,x:60.6,y:53.7}).wait(1).to({graphics:mask_graphics_13,x:61.9,y:52.4}).wait(1).to({graphics:mask_graphics_14,x:63.3,y:51.3}).wait(1).to({graphics:mask_graphics_15,x:64.8,y:50.1}).wait(1).to({graphics:mask_graphics_16,x:66.2,y:49}).wait(1).to({graphics:mask_graphics_17,x:67.7,y:47.9}).wait(1).to({graphics:mask_graphics_18,x:69.2,y:46.9}).wait(1).to({graphics:mask_graphics_19,x:70.7,y:45.9}).wait(1).to({graphics:mask_graphics_20,x:72.3,y:44.9}).wait(1).to({graphics:mask_graphics_21,x:73.9,y:44}).wait(1).to({graphics:mask_graphics_22,x:75.5,y:43.1}).wait(1).to({graphics:mask_graphics_23,x:77.1,y:42.2}).wait(1).to({graphics:mask_graphics_24,x:78.7,y:41.4}).wait(1).to({graphics:mask_graphics_25,x:80.4,y:40.6}).wait(1).to({graphics:mask_graphics_26,x:82.1,y:39.8}).wait(1).to({graphics:mask_graphics_27,x:83.7,y:39.1}).wait(1).to({graphics:mask_graphics_28,x:85.4,y:38.4}).wait(1).to({graphics:mask_graphics_29,x:87.1,y:37.8}).wait(1).to({graphics:mask_graphics_30,x:88.9,y:37.1}).wait(1).to({graphics:mask_graphics_31,x:90.6,y:36.6}).wait(1).to({graphics:mask_graphics_32,x:92.3,y:36}).wait(1).to({graphics:mask_graphics_33,x:94.1,y:35.5}).wait(1).to({graphics:mask_graphics_34,x:95.5,y:35.1}).wait(1).to({graphics:mask_graphics_35,x:95.4,y:34.7}).wait(1).to({graphics:mask_graphics_36,x:95.4,y:34.3}).wait(1).to({graphics:mask_graphics_37,x:95.4,y:34}).wait(1).to({graphics:mask_graphics_38,x:95.4,y:33.7}).wait(1).to({graphics:mask_graphics_39,x:95.3,y:33.4}).wait(1).to({graphics:mask_graphics_40,x:95.3,y:33.2}).wait(1).to({graphics:mask_graphics_41,x:95.3,y:33.1}).wait(1).to({graphics:mask_graphics_42,x:95.3,y:33}).wait(1).to({graphics:mask_graphics_43,x:95.3,y:32.9}).wait(1).to({graphics:mask_graphics_44,x:95.3,y:32.9}).wait(1).to({graphics:mask_graphics_45,x:95.3,y:32.8}).wait(1).to({graphics:mask_graphics_46,x:95.3,y:32.8}).wait(1).to({graphics:mask_graphics_47,x:95.3,y:32.6}).wait(1).to({graphics:mask_graphics_48,x:95.3,y:32.4}).wait(1).to({graphics:mask_graphics_49,x:95.4,y:32.2}).wait(1).to({graphics:mask_graphics_50,x:95.4,y:31.9}).wait(1).to({graphics:mask_graphics_51,x:95.4,y:31.6}).wait(1).to({graphics:mask_graphics_52,x:95.4,y:31.3}).wait(1).to({graphics:mask_graphics_53,x:95.5,y:30.9}).wait(1).to({graphics:mask_graphics_54,x:94.9,y:30.4}).wait(1).to({graphics:mask_graphics_55,x:93.1,y:30}).wait(1).to({graphics:mask_graphics_56,x:91.8,y:29.6}).wait(1).to({graphics:mask_graphics_57,x:90.5,y:29.2}).wait(1).to({graphics:mask_graphics_58,x:89.3,y:28.8}).wait(1).to({graphics:mask_graphics_59,x:88,y:28.3}).wait(1).to({graphics:mask_graphics_60,x:86.7,y:27.9}).wait(1).to({graphics:mask_graphics_61,x:85.5,y:27.4}).wait(1).to({graphics:mask_graphics_62,x:84.3,y:26.9}).wait(1).to({graphics:mask_graphics_63,x:83,y:26.4}).wait(1).to({graphics:mask_graphics_64,x:81.8,y:25.9}).wait(1).to({graphics:mask_graphics_65,x:80.6,y:25.3}).wait(1).to({graphics:mask_graphics_66,x:79.4,y:24.7}).wait(1).to({graphics:mask_graphics_67,x:78.2,y:24.1}).wait(1).to({graphics:mask_graphics_68,x:77,y:23.5}).wait(1).to({graphics:mask_graphics_69,x:75.8,y:22.9}).wait(1).to({graphics:mask_graphics_70,x:74.6,y:22.3}).wait(1).to({graphics:mask_graphics_71,x:73.5,y:21.6}).wait(1).to({graphics:mask_graphics_72,x:72.3,y:20.9}).wait(1).to({graphics:mask_graphics_73,x:71.2,y:20.2}).wait(1).to({graphics:mask_graphics_74,x:70.1,y:19.5}).wait(1).to({graphics:mask_graphics_75,x:69,y:18.7}).wait(1).to({graphics:mask_graphics_76,x:67.9,y:18}).wait(1).to({graphics:mask_graphics_77,x:66.8,y:17.2}).wait(1).to({graphics:mask_graphics_78,x:65.7,y:16.4}).wait(1).to({graphics:mask_graphics_79,x:64.6,y:15.6}).wait(1).to({graphics:mask_graphics_80,x:63.6,y:14.7}).wait(1).to({graphics:mask_graphics_81,x:62.6,y:13.9}).wait(1).to({graphics:mask_graphics_82,x:61.6,y:13}).wait(1).to({graphics:mask_graphics_83,x:60.6,y:12.1}).wait(1).to({graphics:mask_graphics_84,x:59.6,y:11.2}).wait(1).to({graphics:mask_graphics_85,x:58.7,y:10.3}).wait(1).to({graphics:mask_graphics_86,x:57.7,y:9.3}).wait(1).to({graphics:mask_graphics_87,x:56.8,y:8.3}).wait(1).to({graphics:mask_graphics_88,x:55.9,y:7.3}).wait(1).to({graphics:mask_graphics_89,x:55,y:6.3}).wait(1).to({graphics:mask_graphics_90,x:54.2,y:5.3}).wait(1).to({graphics:mask_graphics_91,x:53.4,y:4.3}).wait(1).to({graphics:mask_graphics_92,x:52.6,y:3.2}).wait(1).to({graphics:mask_graphics_93,x:51.8,y:2.1}).wait(1).to({graphics:mask_graphics_94,x:51,y:1.1}).wait(1).to({graphics:mask_graphics_95,x:50.2,y:0}).wait(1).to({graphics:mask_graphics_96,x:49.5,y:-1.2}).wait(1).to({graphics:mask_graphics_97,x:48.8,y:-2.3}).wait(1).to({graphics:mask_graphics_98,x:48.1,y:-3.4}).wait(1).to({graphics:mask_graphics_99,x:47.3,y:-4.5}).wait(1).to({graphics:mask_graphics_100,x:46.5,y:-5.9}).wait(1).to({graphics:mask_graphics_101,x:45.8,y:-7.2}).wait(1).to({graphics:mask_graphics_102,x:45.1,y:-8.5}).wait(1).to({graphics:mask_graphics_103,x:44.4,y:-9.9}).wait(1).to({graphics:mask_graphics_104,x:43.7,y:-11.3}).wait(1).to({graphics:mask_graphics_105,x:43.1,y:-12.6}).wait(1).to({graphics:mask_graphics_106,x:42.5,y:-14}).wait(1).to({graphics:mask_graphics_107,x:41.9,y:-15.4}).wait(1).to({graphics:mask_graphics_108,x:41.3,y:-16.9}).wait(1).to({graphics:mask_graphics_109,x:40.8,y:-18.3}).wait(1).to({graphics:mask_graphics_110,x:40.3,y:-19.7}).wait(1).to({graphics:mask_graphics_111,x:39.8,y:-21.1}).wait(1).to({graphics:mask_graphics_112,x:39.3,y:-22.6}).wait(1).to({graphics:mask_graphics_113,x:38.9,y:-24}).wait(1).to({graphics:mask_graphics_114,x:38.5,y:-25.5}).wait(1).to({graphics:mask_graphics_115,x:38.1,y:-26.9}).wait(1).to({graphics:mask_graphics_116,x:37.7,y:-28.4}).wait(1).to({graphics:mask_graphics_117,x:37.4,y:-29.9}).wait(1).to({graphics:mask_graphics_118,x:37.1,y:-31.4}).wait(1).to({graphics:mask_graphics_119,x:37,y:-33}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,0,1).p("AJpByQhhg+hhg7Qhig9hlg5Qhig3hkg1Qhkg1h0AEQhwADhiA2QhlA3gyBpQgzBngCBZQgCBZAcBU");
	this.shape.setTransform(30,-5.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-36,134,63.4);


(lib.ar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-10,-226.7,1,1,0,0,0,0.1,-4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,regY:0,y:73.5},174,cjs.Ease.get(0.5)).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AAAgXIAAAv");
	this.shape.setTransform(-10,-232.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AAAAlIAAhJ");
	this.shape_1.setTransform(-10,-231.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AAAAxIAAhh");
	this.shape_2.setTransform(-10,-229.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("AAAA+IAAh7");
	this.shape_3.setTransform(-10,-228.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("AAABKIAAiT");
	this.shape_4.setTransform(-10,-227.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(5,1,1).p("AAABXIAAit");
	this.shape_5.setTransform(-10,-226.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(5,1,1).p("AAABjIAAjF");
	this.shape_6.setTransform(-10,-224.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(5,1,1).p("AAABwIAAjf");
	this.shape_7.setTransform(-10,-223.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(5,1,1).p("AAAB8IAAj3");
	this.shape_8.setTransform(-10,-222.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(5,1,1).p("AAACIIAAkP");
	this.shape_9.setTransform(-10,-221.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(5,1,1).p("AAACUIAAkn");
	this.shape_10.setTransform(-10,-220);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5,1,1).p("AAAChIAAlB");
	this.shape_11.setTransform(-10,-218.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(5,1,1).p("AAACtIAAlZ");
	this.shape_12.setTransform(-10,-217.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(5,1,1).p("AAAC5IAAlw");
	this.shape_13.setTransform(-10,-216.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(5,1,1).p("AAADFIAAmJ");
	this.shape_14.setTransform(-10,-215.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(5,1,1).p("AAADRIAAmh");
	this.shape_15.setTransform(-10,-213.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(5,1,1).p("AAADdIAAm5");
	this.shape_16.setTransform(-10,-212.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(5,1,1).p("AAADpIAAnR");
	this.shape_17.setTransform(-10,-211.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(5,1,1).p("AAAD0IAAnn");
	this.shape_18.setTransform(-10,-210.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(5,1,1).p("AAAEAIAAn/");
	this.shape_19.setTransform(-10,-209.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(5,1,1).p("AAAEMIAAoX");
	this.shape_20.setTransform(-10,-208);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(5,1,1).p("AAAEYIAAou");
	this.shape_21.setTransform(-10,-206.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(5,1,1).p("AAAEjIAApF");
	this.shape_22.setTransform(-10,-205.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(5,1,1).p("AAAEvIAApd");
	this.shape_23.setTransform(-10,-204.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(5,1,1).p("AAAE6IAApz");
	this.shape_24.setTransform(-10,-203.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(5,1,1).p("AAAFGIAAqL");
	this.shape_25.setTransform(-10,-202.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(5,1,1).p("AAAFRIAAqh");
	this.shape_26.setTransform(-10,-201.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(5,1,1).p("AAAFdIAAq5");
	this.shape_27.setTransform(-10,-199.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(5,1,1).p("AAAFoIAArP");
	this.shape_28.setTransform(-10,-198.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(5,1,1).p("AAAF0IAArn");
	this.shape_29.setTransform(-10,-197.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(5,1,1).p("AAAF/IAAr9");
	this.shape_30.setTransform(-10,-196.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(5,1,1).p("AAAGKIAAsT");
	this.shape_31.setTransform(-10,-195.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(5,1,1).p("AAAGVIAAsp");
	this.shape_32.setTransform(-10,-194.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(5,1,1).p("AAAGgIAAs/");
	this.shape_33.setTransform(-10,-193.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(5,1,1).p("AAAGrIAAtV");
	this.shape_34.setTransform(-10,-192.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(5,1,1).p("AAAG2IAAtr");
	this.shape_35.setTransform(-10,-191);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(5,1,1).p("AAAHBIAAuB");
	this.shape_36.setTransform(-10,-189.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(5,1,1).p("AAAHMIAAuX");
	this.shape_37.setTransform(-10,-188.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(5,1,1).p("AAAHXIAAut");
	this.shape_38.setTransform(-10,-187.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(5,1,1).p("AAAHiIAAvD");
	this.shape_39.setTransform(-10,-186.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(5,1,1).p("AAAHtIAAvZ");
	this.shape_40.setTransform(-10,-185.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(5,1,1).p("AAAH3IAAvt");
	this.shape_41.setTransform(-10,-184.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(5,1,1).p("AAAICIAAwD");
	this.shape_42.setTransform(-10,-183.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(5,1,1).p("AAAINIAAwY");
	this.shape_43.setTransform(-10,-182.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(5,1,1).p("AAAIXIAAwt");
	this.shape_44.setTransform(-10,-181.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(5,1,1).p("AAAIiIAAxD");
	this.shape_45.setTransform(-10,-180.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(5,1,1).p("AAAIsIAAxX");
	this.shape_46.setTransform(-10,-179.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(5,1,1).p("AAAI3IAAxt");
	this.shape_47.setTransform(-10,-178.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(5,1,1).p("AAAJBIAAyB");
	this.shape_48.setTransform(-10,-177.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(5,1,1).p("AAAJLIAAyV");
	this.shape_49.setTransform(-10,-176.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(5,1,1).p("AAAJWIAAyr");
	this.shape_50.setTransform(-10,-175);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(5,1,1).p("AAAJgIAAy/");
	this.shape_51.setTransform(-10,-174);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(5,1,1).p("AAAJqIAAzT");
	this.shape_52.setTransform(-10,-173);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(5,1,1).p("AAAJ0IAAzn");
	this.shape_53.setTransform(-10,-172);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(5,1,1).p("AAAJ+IAAz7");
	this.shape_54.setTransform(-10,-171);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(5,1,1).p("AAAKIIAA0P");
	this.shape_55.setTransform(-10,-170);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(5,1,1).p("AAAKSIAA0j");
	this.shape_56.setTransform(-10,-169);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(5,1,1).p("AAAKcIAA03");
	this.shape_57.setTransform(-10,-168);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(5,1,1).p("AAAKmIAA1L");
	this.shape_58.setTransform(-10,-167);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(5,1,1).p("AAAKwIAA1f");
	this.shape_59.setTransform(-10,-166);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(5,1,1).p("AAAK6IAA1z");
	this.shape_60.setTransform(-10,-165);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(5,1,1).p("AAALEIAA2H");
	this.shape_61.setTransform(-10,-164);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(5,1,1).p("AAALNIAA2Z");
	this.shape_62.setTransform(-10,-163.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(5,1,1).p("AAALXIAA2t");
	this.shape_63.setTransform(-10,-162.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(5,1,1).p("AAALhIAA3B");
	this.shape_64.setTransform(-10,-161.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(5,1,1).p("AAALqIAA3T");
	this.shape_65.setTransform(-10,-160.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(5,1,1).p("AAAL0IAA3n");
	this.shape_66.setTransform(-10,-159.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(5,1,1).p("AAAL9IAA35");
	this.shape_67.setTransform(-10,-158.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(5,1,1).p("AAAMHIAA4M");
	this.shape_68.setTransform(-10,-157.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(5,1,1).p("AAAMQIAA4f");
	this.shape_69.setTransform(-10,-156.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(5,1,1).p("AAAMZIAA4x");
	this.shape_70.setTransform(-10,-155.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(5,1,1).p("AAAMiIAA5D");
	this.shape_71.setTransform(-10,-154.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(5,1,1).p("AAAMsIAA5X");
	this.shape_72.setTransform(-10,-153.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(5,1,1).p("AAAM1IAA5p");
	this.shape_73.setTransform(-10,-152.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(5,1,1).p("AAAM+IAA57");
	this.shape_74.setTransform(-10,-151.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(5,1,1).p("AAANHIAA6N");
	this.shape_75.setTransform(-10,-150.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(5,1,1).p("AAANQIAA6f");
	this.shape_76.setTransform(-10,-150);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(5,1,1).p("AAANZIAA6x");
	this.shape_77.setTransform(-10,-149.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(5,1,1).p("AAANiIAA7D");
	this.shape_78.setTransform(-10,-148.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(5,1,1).p("AAANrIAA7V");
	this.shape_79.setTransform(-10,-147.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(5,1,1).p("AAAN0IAA7n");
	this.shape_80.setTransform(-10,-146.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(5,1,1).p("AAAN8IAA73");
	this.shape_81.setTransform(-10,-145.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(5,1,1).p("AAAOFIAA8J");
	this.shape_82.setTransform(-10,-144.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(5,1,1).p("AAAOOIAA8b");
	this.shape_83.setTransform(-10,-143.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(5,1,1).p("AAAOWIAA8r");
	this.shape_84.setTransform(-10,-143);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(5,1,1).p("AAAOfIAA89");
	this.shape_85.setTransform(-10,-142.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(5,1,1).p("AAAOoIAA9P");
	this.shape_86.setTransform(-10,-141.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(5,1,1).p("AAAOwIAA9f");
	this.shape_87.setTransform(-10,-140.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(5,1,1).p("AAAO5IAA9x");
	this.shape_88.setTransform(-10,-139.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(5,1,1).p("AAAPBIAA+B");
	this.shape_89.setTransform(-10,-138.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(5,1,1).p("AAAPJIAA+R");
	this.shape_90.setTransform(-10,-137.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(5,1,1).p("AAAPSIAA+j");
	this.shape_91.setTransform(-10,-137);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(5,1,1).p("AAAPaIAA+z");
	this.shape_92.setTransform(-10,-136.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(5,1,1).p("AAAPiIAA/D");
	this.shape_93.setTransform(-10,-135.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(5,1,1).p("AAAPqIAA/T");
	this.shape_94.setTransform(-10,-134.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(5,1,1).p("AAAPyIAA/j");
	this.shape_95.setTransform(-10,-133.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(5,1,1).p("AAAP6IAA/z");
	this.shape_96.setTransform(-10,-133);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(5,1,1).p("AAAQCMAAAggD");
	this.shape_97.setTransform(-10,-132.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(5,1,1).p("AAAQKMAAAggT");
	this.shape_98.setTransform(-10,-131.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(5,1,1).p("AAAQSMAAAggj");
	this.shape_99.setTransform(-10,-130.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(5,1,1).p("AAAQaMAAAggz");
	this.shape_100.setTransform(-10,-129.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(5,1,1).p("AAAQiMAAAghD");
	this.shape_101.setTransform(-10,-129);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(5,1,1).p("AAAQpMAAAghR");
	this.shape_102.setTransform(-10,-128.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(5,1,1).p("AAAQxMAAAghh");
	this.shape_103.setTransform(-10,-127.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(5,1,1).p("AAAQ5MAAAghx");
	this.shape_104.setTransform(-10,-126.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(5,1,1).p("AAARAMAAAgh/");
	this.shape_105.setTransform(-10,-126);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(5,1,1).p("AAARIMAAAgiP");
	this.shape_106.setTransform(-10,-125.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(5,1,1).p("AAARQMAAAgif");
	this.shape_107.setTransform(-10,-124.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(5,1,1).p("AAARXMAAAgit");
	this.shape_108.setTransform(-10,-123.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(5,1,1).p("AAAReMAAAgi7");
	this.shape_109.setTransform(-10,-123);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(5,1,1).p("AAARmMAAAgjL");
	this.shape_110.setTransform(-10,-122.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(5,1,1).p("AAARtMAAAgjZ");
	this.shape_111.setTransform(-10,-121.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(5,1,1).p("AAAR0MAAAgjn");
	this.shape_112.setTransform(-10,-120.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(5,1,1).p("AAAR8MAAAgj3");
	this.shape_113.setTransform(-10,-120);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(5,1,1).p("AAASDMAAAgkF");
	this.shape_114.setTransform(-10,-119.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(5,1,1).p("AAASKMAAAgkT");
	this.shape_115.setTransform(-10,-118.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(5,1,1).p("AAASRMAAAgkh");
	this.shape_116.setTransform(-10,-117.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(5,1,1).p("AAASYMAAAgkv");
	this.shape_117.setTransform(-10,-117.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(5,1,1).p("AAASfMAAAgk9");
	this.shape_118.setTransform(-10,-116.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(5,1,1).p("AAASmMAAAglL");
	this.shape_119.setTransform(-10,-115.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(5,1,1).p("AAAStMAAAglZ");
	this.shape_120.setTransform(-10,-115.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(5,1,1).p("AAAS0MAAAgln");
	this.shape_121.setTransform(-10,-114.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(5,1,1).p("AAAS6MAAAglz");
	this.shape_122.setTransform(-10,-113.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(5,1,1).p("AAATBMAAAgmB");
	this.shape_123.setTransform(-10,-113.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(5,1,1).p("AAATIMAAAgmP");
	this.shape_124.setTransform(-10,-112.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(5,1,1).p("AAATOMAAAgmb");
	this.shape_125.setTransform(-10,-111.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(5,1,1).p("AAATVMAAAgmp");
	this.shape_126.setTransform(-10,-111.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(5,1,1).p("AAATcMAAAgm3");
	this.shape_127.setTransform(-10,-110.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(5,1,1).p("AAATiMAAAgnD");
	this.shape_128.setTransform(-10,-109.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(5,1,1).p("AAATpMAAAgnR");
	this.shape_129.setTransform(-10,-109.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(5,1,1).p("AAATvMAAAgnd");
	this.shape_130.setTransform(-10,-108.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").ss(5,1,1).p("AAAT1MAAAgnp");
	this.shape_131.setTransform(-10,-107.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(5,1,1).p("AAAT8MAAAgn3");
	this.shape_132.setTransform(-10,-107.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(5,1,1).p("AAAUCMAAAgoD");
	this.shape_133.setTransform(-10,-106.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(5,1,1).p("AAAUIMAAAgoP");
	this.shape_134.setTransform(-10,-106);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#000000").ss(5,1,1).p("AAAUOMAAAgob");
	this.shape_135.setTransform(-10,-105.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#000000").ss(5,1,1).p("AAAUUMAAAgon");
	this.shape_136.setTransform(-10,-104.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#000000").ss(5,1,1).p("AAAUaMAAAgoz");
	this.shape_137.setTransform(-10,-104.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").ss(5,1,1).p("AAAUgMAAAgo/");
	this.shape_138.setTransform(-10,-103.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#000000").ss(5,1,1).p("AAAUmMAAAgpL");
	this.shape_139.setTransform(-10,-103);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").ss(5,1,1).p("AAAUsMAAAgpX");
	this.shape_140.setTransform(-10,-102.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#000000").ss(5,1,1).p("AAAUyMAAAgpj");
	this.shape_141.setTransform(-10,-101.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#000000").ss(5,1,1).p("AAAU4MAAAgpv");
	this.shape_142.setTransform(-10,-101.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#000000").ss(5,1,1).p("AAAU+MAAAgp7");
	this.shape_143.setTransform(-10,-100.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#000000").ss(5,1,1).p("AAAVDMAAAgqF");
	this.shape_144.setTransform(-10,-100.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#000000").ss(5,1,1).p("AAAVJMAAAgqR");
	this.shape_145.setTransform(-10,-99.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#000000").ss(5,1,1).p("AAAVPMAAAgqd");
	this.shape_146.setTransform(-10,-98.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#000000").ss(5,1,1).p("AAAVUMAAAgqn");
	this.shape_147.setTransform(-10,-98.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#000000").ss(5,1,1).p("AAAVaMAAAgqz");
	this.shape_148.setTransform(-10,-97.8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#000000").ss(5,1,1).p("AAAVfMAAAgq9");
	this.shape_149.setTransform(-10,-97.3);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#000000").ss(5,1,1).p("AAAVlMAAAgrJ");
	this.shape_150.setTransform(-10,-96.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#000000").ss(5,1,1).p("AAAVqMAAAgrT");
	this.shape_151.setTransform(-10,-96.2);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#000000").ss(5,1,1).p("AAAVvMAAAgrd");
	this.shape_152.setTransform(-10,-95.7);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#000000").ss(5,1,1).p("AAAV1MAAAgrp");
	this.shape_153.setTransform(-10,-95.1);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#000000").ss(5,1,1).p("AAAV6MAAAgrz");
	this.shape_154.setTransform(-10,-94.6);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#000000").ss(5,1,1).p("AAAV/MAAAgr9");
	this.shape_155.setTransform(-10,-94.1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#000000").ss(5,1,1).p("AAAWEMAAAgsH");
	this.shape_156.setTransform(-10,-93.6);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#000000").ss(5,1,1).p("AAAWJMAAAgsR");
	this.shape_157.setTransform(-10,-93.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#000000").ss(5,1,1).p("AAAWOMAAAgsb");
	this.shape_158.setTransform(-10,-92.6);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#000000").ss(5,1,1).p("AAAWTMAAAgsl");
	this.shape_159.setTransform(-10,-92.1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#000000").ss(5,1,1).p("AAAWYMAAAgsv");
	this.shape_160.setTransform(-10,-91.6);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#000000").ss(5,1,1).p("AAAWdMAAAgs5");
	this.shape_161.setTransform(-10,-91.1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#000000").ss(5,1,1).p("AAAWiMAAAgtD");
	this.shape_162.setTransform(-10,-90.6);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#000000").ss(5,1,1).p("AAAWnMAAAgtN");
	this.shape_163.setTransform(-10,-90.1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#000000").ss(5,1,1).p("AAAWrMAAAgtV");
	this.shape_164.setTransform(-10,-89.7);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#000000").ss(5,1,1).p("AAAWwMAAAgtf");
	this.shape_165.setTransform(-10,-89.2);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#000000").ss(5,1,1).p("AAAW1MAAAgtp");
	this.shape_166.setTransform(-10,-88.7);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#000000").ss(5,1,1).p("AAAW5MAAAgtx");
	this.shape_167.setTransform(-10,-88.3);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#000000").ss(5,1,1).p("AAAW+MAAAgt7");
	this.shape_168.setTransform(-10,-87.8);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#000000").ss(5,1,1).p("AAAXCMAAAguD");
	this.shape_169.setTransform(-10,-87.4);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#000000").ss(5,1,1).p("AAAXHMAAAguN");
	this.shape_170.setTransform(-10,-86.9);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#000000").ss(5,1,1).p("AAAXLMAAAguV");
	this.shape_171.setTransform(-10,-86.5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#000000").ss(5,1,1).p("AAAXQMAAAguf");
	this.shape_172.setTransform(-10,-86);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#000000").ss(5,1,1).p("AAAXUMAAAgun");
	this.shape_173.setTransform(-10,-85.6);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#000000").ss(5,1,1).p("AAA3XMAAAAuv");
	this.shape_174.setTransform(-10,-85.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.9,-240.1,24.3,21.8);


(lib.honeyflap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.honeybee();
	this.instance.parent = this;
	this.instance.setTransform(22.7,-144.3,0.422,0.422,0,0,0,-37.2,63);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgTB8QgPgDgOgGIgMgGIgBAAIgBgBIgCgBIgBgBIgBAAIgCgBIgBgBIgBgBIgBAAIgBgBIgBgBIgBgBIgBgBIgBAAIgBgBIgBgBIgBgBIgBgBIgBgBIgBAAIgBgBIgBgBIgBgBIgBgBIAAAAIgBgBIgBgBIgBgBIgBgBIAAgBIgBgBIgBAAIgBgBIAAgBIgBgBIgBgBIgBgBIgBAAIAAgBIgBgBIAAgBIgBgBIgBgBIAAgBIgBAAIgBgBIAAgBIgBgBIAAgBIgBgBIAAgBIgBAAIgBgBIAAgBIAAgBIgBgBIgBgBIAAgBIgBgBIAAgBIgBgCIgBgCIgBgBIAAgBIgBgBIAAAAIAAgBIgBgBIAAgBIgBgBIAAgBIAAgBIgBgBIAAgBIAAgBIgBAAIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIgBAAIAAgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIAAgBIgBgCIAAgCIAAgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIABgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIABgBIABgBIAAgBIABgBIAAgBIABgBIAAgBIABgBIAAgBIABgBIABgBIABgBIAAgBIABgBIABgBIAAgBIABgBIABgCIABgBIAAgBIABgBIABgBIABgBIABgBIABgBIAAgBIACgBIAAgBIAEgEIAMgLQAHgFAHgEIAPgHQAHgEAJgCIAOgDIAPgBIAQABIARADIAOAEQAIADAIAFIAEACIABABIABAAIABABIABABIACABIABABIABAAIABABIABABIABABIABABIABAAIABABIABABIABABIABABIABAAIABABIABABIABABIAAABIABABIABAAIABABIABABIABABIAAABIABABIABAAIABABIAAABIABABIABABIABABIAAABIABAAIABABIAAABIABABIABABIAAABIABAAIABABIAAABIABABIAAABIABABIAAABIABABIABAAIAAABIAAABIABABIABABIAAABIABABIAAABIAAAAIABABIAAABIABABIAAABIABABIAAABIABABIAAABIAAAAIABABIAAABIAAABIABABIAAABIAAABIABABIAAABIAAABIABAAIAAABIAAABIABABIAAABIAAABIABABIAAABIAAABIAAABIABAAIAAABIAAABIAAABIABABIAAABIAAABIAAABIAAABIABABIAAABIAAABIAAABIAAAAIAAABIAAABIABABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIABABIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIgBABIABABIgBABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAABIgBABIAAABIAAABIAAABIAAABIAAABIgBABIAAABIAAABIAAABIgBABIAAABIAAABIgBABIAAABIAAABIAAABIgBABIAAABIAAABIAAABIgBABIAAABIgBABIAAABIAAABIgBABIAAABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIgBABIAAABIgBABIAAABIgBABIgBABIAAABIgBABIgBABIAAACIgBABIgBABIgBABIgBABIAAABIgBABIgBABIgBABIgBABIgBABIgBABIgBABIgBABIgBACIgCACIgEAEIgGAFIgEADIgEADIgEACIgBABIgQAIQgXAKgaAAIgTgBg");
	this.shape.setTransform(24,-144.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-215.3,105.5,83.3);


// stage content:
(lib.writingsuccess_Fontkid_h = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_433 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(433).call(this.frame_433).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(207,109,0.998,0.998,0,-8,172,22.4,-144);
	this.instance._off = true;

	this.instance_1 = new lib.honeybee();
	this.instance_1.parent = this;
	this.instance_1.setTransform(341.2,446.5,0.421,0.421,0,-8,172,-37.2,63);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({x:208.6,y:447.9},180).wait(10).to({startPosition:0},0).to({regY:-143.9,x:207.7,y:329.7},44).to({scaleX:1,scaleY:1,guide:{path:[207.4,329.6,216.2,297,256.9,289.5]}},22).to({regY:-143.8,guide:{path:[257,289.5,257.8,289.3,258.7,289.2,279.5,285.6,295.1,287.5]}},20).to({scaleX:1,scaleY:1,guide:{path:[295.2,287.4,311.5,289.4,322.1,297.2,342.9,312.5,344.3,334]}},29).to({x:343.2,y:447.1},45).to({_off:true},14).wait(61));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(373).to({_off:false},0).to({guide:{path:[341.9,447,463.4,527.3,453.1,405.4,448,344.5,495.3,379.9,542.6,415.3,642.4,547.1]}},60).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(208,446.3,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},180).wait(10).to({_off:false,x:342},0).to({_off:true},160).wait(75));

	// Layer 20
	this.instance_2 = new lib.ar1("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(113,381.9,1,1,0,0,0,0.3,30.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(425));

	// Layer 27
	this.instance_3 = new lib.ar2("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(274.9,356.5,1,1,0,-60,120);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(199).to({_off:false},0).wait(235));

	// Layer 26 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_314 = new cjs.Graphics().p("AXOZ4IAAiuIEkAAIAACug");
	var mask_graphics_315 = new cjs.Graphics().p("AiRBlIAAjJIEjAAIAADJg");
	var mask_graphics_316 = new cjs.Graphics().p("AiRB0IAAjnIEjAAIAADng");
	var mask_graphics_317 = new cjs.Graphics().p("AiQCCIAAkDIEhAAIAAEDg");
	var mask_graphics_318 = new cjs.Graphics().p("AiQCRIAAkgIEhAAIAAEgg");
	var mask_graphics_319 = new cjs.Graphics().p("AiQCfIAAk9IEhAAIAAE9g");
	var mask_graphics_320 = new cjs.Graphics().p("AiQCtIAAlZIEhAAIAAFZg");
	var mask_graphics_321 = new cjs.Graphics().p("AiPC8IAAl3IEgAAIAAF3g");
	var mask_graphics_322 = new cjs.Graphics().p("AiPDLIAAmUIEfAAIAAGUg");
	var mask_graphics_323 = new cjs.Graphics().p("AiPDZIAAmxIEfAAIAAGxg");
	var mask_graphics_324 = new cjs.Graphics().p("AiPDnIAAnNIEfAAIAAHNg");
	var mask_graphics_325 = new cjs.Graphics().p("AiPD2IAAnrIEeAAIAAHrg");
	var mask_graphics_326 = new cjs.Graphics().p("AiPEEIAAoHIEeAAIAAIHg");
	var mask_graphics_327 = new cjs.Graphics().p("AiOETIAAolIEdAAIAAIlg");
	var mask_graphics_328 = new cjs.Graphics().p("AiOEhIAApBIEdAAIAAJBg");
	var mask_graphics_329 = new cjs.Graphics().p("AiOEvIAApdIEdAAIAAJdg");
	var mask_graphics_330 = new cjs.Graphics().p("AiOE+IAAp7IEdAAIAAJ7g");
	var mask_graphics_331 = new cjs.Graphics().p("AiNFNIAAqYIEbAAIAAKYg");
	var mask_graphics_332 = new cjs.Graphics().p("AiNFbIAAq1IEbAAIAAK1g");
	var mask_graphics_333 = new cjs.Graphics().p("AiNFqIAArSIEbAAIAALSg");
	var mask_graphics_334 = new cjs.Graphics().p("AiNF4IAArvIEbAAIAALvg");
	var mask_graphics_335 = new cjs.Graphics().p("AiMGGIAAsLIEZAAIAAMLg");
	var mask_graphics_336 = new cjs.Graphics().p("AiMGVIAAspIEZAAIAAMpg");
	var mask_graphics_337 = new cjs.Graphics().p("AiMGjIAAtFIEZAAIAANFg");
	var mask_graphics_338 = new cjs.Graphics().p("AiMGyIAAtjIEZAAIAANjg");
	var mask_graphics_339 = new cjs.Graphics().p("AiMHAIAAt/IEZAAIAAN/g");
	var mask_graphics_340 = new cjs.Graphics().p("AiMHOIAAubIEZAAIAAObg");
	var mask_graphics_341 = new cjs.Graphics().p("AiLHdIAAu5IEXAAIAAO5g");
	var mask_graphics_342 = new cjs.Graphics().p("AiLHsIAAvWIEXAAIAAPWg");
	var mask_graphics_343 = new cjs.Graphics().p("AiLH6IAAvzIEXAAIAAPzg");
	var mask_graphics_344 = new cjs.Graphics().p("AiLIIIAAwPIEWAAIAAQPg");
	var mask_graphics_345 = new cjs.Graphics().p("AiKIXIAAwtIEVAAIAAQtg");
	var mask_graphics_346 = new cjs.Graphics().p("AiKIlIAAxJIEVAAIAARJg");
	var mask_graphics_347 = new cjs.Graphics().p("AiKI0IAAxnIEVAAIAARng");
	var mask_graphics_348 = new cjs.Graphics().p("AiKJCIAAyDIEVAAIAASDg");
	var mask_graphics_349 = new cjs.Graphics().p("AiJJRIAAyhIETAAIAAShg");
	var mask_graphics_350 = new cjs.Graphics().p("AiJJfIAAy9IETAAIAAS9g");
	var mask_graphics_351 = new cjs.Graphics().p("AiJJuIAAzaIETAAIAATag");
	var mask_graphics_352 = new cjs.Graphics().p("AiJJ8IAAz3IETAAIAAT3g");
	var mask_graphics_353 = new cjs.Graphics().p("AiIKKIAA0TIERAAIAAUTg");
	var mask_graphics_354 = new cjs.Graphics().p("AiIKZIAA0xIERAAIAAUxg");
	var mask_graphics_355 = new cjs.Graphics().p("AiIKoIAA1OIERAAIAAVOg");
	var mask_graphics_356 = new cjs.Graphics().p("AiIK2IAA1rIERAAIAAVrg");
	var mask_graphics_357 = new cjs.Graphics().p("AiHLEIAA2HIEQAAIAAWHg");
	var mask_graphics_358 = new cjs.Graphics().p("AiHLTIAA2lIEQAAIAAWlg");
	var mask_graphics_359 = new cjs.Graphics().p("AiHLhIAA3BIEPAAIAAXBg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(314).to({graphics:mask_graphics_314,x:177.8,y:165.6}).wait(1).to({graphics:mask_graphics_315,x:340.9,y:323.9}).wait(1).to({graphics:mask_graphics_316,x:340.9,y:325.4}).wait(1).to({graphics:mask_graphics_317,x:340.9,y:326.8}).wait(1).to({graphics:mask_graphics_318,x:340.9,y:328.3}).wait(1).to({graphics:mask_graphics_319,x:341,y:329.7}).wait(1).to({graphics:mask_graphics_320,x:341,y:331.2}).wait(1).to({graphics:mask_graphics_321,x:341,y:332.6}).wait(1).to({graphics:mask_graphics_322,x:341,y:334.1}).wait(1).to({graphics:mask_graphics_323,x:341,y:335.5}).wait(1).to({graphics:mask_graphics_324,x:341,y:336.9}).wait(1).to({graphics:mask_graphics_325,x:341,y:338.4}).wait(1).to({graphics:mask_graphics_326,x:341,y:339.8}).wait(1).to({graphics:mask_graphics_327,x:341,y:341.3}).wait(1).to({graphics:mask_graphics_328,x:341.1,y:342.7}).wait(1).to({graphics:mask_graphics_329,x:341,y:344.2}).wait(1).to({graphics:mask_graphics_330,x:341.1,y:345.6}).wait(1).to({graphics:mask_graphics_331,x:341.1,y:347.1}).wait(1).to({graphics:mask_graphics_332,x:341.1,y:348.5}).wait(1).to({graphics:mask_graphics_333,x:341.1,y:350}).wait(1).to({graphics:mask_graphics_334,x:341.1,y:351.4}).wait(1).to({graphics:mask_graphics_335,x:341.1,y:352.8}).wait(1).to({graphics:mask_graphics_336,x:341.1,y:354.3}).wait(1).to({graphics:mask_graphics_337,x:341.1,y:355.7}).wait(1).to({graphics:mask_graphics_338,x:341.1,y:357.2}).wait(1).to({graphics:mask_graphics_339,x:341.2,y:358.6}).wait(1).to({graphics:mask_graphics_340,x:341.2,y:360.1}).wait(1).to({graphics:mask_graphics_341,x:341.2,y:361.5}).wait(1).to({graphics:mask_graphics_342,x:341.2,y:363}).wait(1).to({graphics:mask_graphics_343,x:341.2,y:364.4}).wait(1).to({graphics:mask_graphics_344,x:341.2,y:365.9}).wait(1).to({graphics:mask_graphics_345,x:341.2,y:367.3}).wait(1).to({graphics:mask_graphics_346,x:341.2,y:368.7}).wait(1).to({graphics:mask_graphics_347,x:341.2,y:370.2}).wait(1).to({graphics:mask_graphics_348,x:341.2,y:371.6}).wait(1).to({graphics:mask_graphics_349,x:341.2,y:373.1}).wait(1).to({graphics:mask_graphics_350,x:341.2,y:374.5}).wait(1).to({graphics:mask_graphics_351,x:341.3,y:376}).wait(1).to({graphics:mask_graphics_352,x:341.3,y:377.4}).wait(1).to({graphics:mask_graphics_353,x:341.3,y:378.9}).wait(1).to({graphics:mask_graphics_354,x:341.3,y:380.3}).wait(1).to({graphics:mask_graphics_355,x:341.3,y:381.8}).wait(1).to({graphics:mask_graphics_356,x:341.3,y:383.2}).wait(1).to({graphics:mask_graphics_357,x:341.3,y:384.6}).wait(1).to({graphics:mask_graphics_358,x:341.3,y:386.1}).wait(1).to({graphics:mask_graphics_359,x:341.3,y:387.5}).wait(75));

	// Layer 25
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(25,1,1).p("AqjMlIAAyQQBYlXGphKQGphLDQCeQDQCegDDeIAARi");
	this.shape_1.setTransform(274.4,366.9);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(314).to({_off:false},0).wait(120));

	// Layer 24 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_243 = new cjs.Graphics().p("Ahcd9QlrlrAAoBMAmrAAAQAAIBlqFrQlsFqoAAAQoBAAlplqg");
	var mask_1_graphics_244 = new cjs.Graphics().p("EALYAjlQoAgWlZl6Qlbl7AXoAMAmoABuQgXIAl5FbQlkFEnYAAIg/gCg");
	var mask_1_graphics_245 = new cjs.Graphics().p("EAKjAjiQn/gulHmIQlKmKAun+MAmgADaQgtH/mJFJQlaEhm0AAQg8AAg+gFg");
	var mask_1_graphics_246 = new cjs.Graphics().p("EAJwAjbQn9hEk1mWQk4mYBEn8MAmUAFHQhEH8mWE4QlQD/mSAAQhXAAhbgMg");
	var mask_1_graphics_247 = new cjs.Graphics().p("EAI+AjSQn5hakkmkQklmlBan5MAmEAG0QhaH5mkElQlDDglyAAQhyAAh3gWg");
	var mask_1_graphics_248 = new cjs.Graphics().p("EAIOAjHQn1hwkQmxQkTmyBxn0MAluAIgQhxH0mxESQkzDClVAAQiMAAiRghg");
	var mask_1_graphics_249 = new cjs.Graphics().p("EAHfAi6QnuiHj+m8Qj/m+CGnuMAlUAKJQiGHvm9D/QkjCmk5AAQilAAirgug");
	var mask_1_graphics_250 = new cjs.Graphics().p("EAGzAiqQnoicjrnHQjrnJCdnoMAk0ALzQicHonHDrQkSCNkdAAQi+AAjDg/g");
	var mask_1_graphics_251 = new cjs.Graphics().p("EAGIAiYQnhiyjWnRQjWnSCxnhMAkRANaQixHhnSDXQj+B1kDAAQjXAAjahRg");
	var mask_1_graphics_252 = new cjs.Graphics().p("EAFfAiEQnYjHjBnaQjCnbDHnZMAjoAPAQjGHZnbDCQjqBfjpAAQjxAAjvhlg");
	var mask_1_graphics_253 = new cjs.Graphics().p("EAE4AhuQnPjcisniQisnkDbnPMAi8AQkQjbHPnjCtQjUBMjQAAQkKAAkEh7g");
	var mask_1_graphics_254 = new cjs.Graphics().p("EAETAhVQnEjwiXnpQiXnrDwnFMAiLASGQjwHFnqCYQi8A6i4AAQkkAAkXiUg");
	var mask_1_graphics_255 = new cjs.Graphics().p("EADxAg7Qm6kEiAnvQiCnxEEm6MAhWATlQkEG6nwCCQikAqieAAQlBAAknitg");
	var mask_1_graphics_256 = new cjs.Graphics().p("EADRAgeQmukXhrn0Qhrn3EXmuMAgcAVDQkXGun1BsQiKAdiFAAQldAAk3jKg");
	var mask_1_graphics_257 = new cjs.Graphics().p("EACzAgAQmhkqhVn5QhUn6EpmiIffWeQkqGhn5BVQhvAThrAAQl8AAlFjog");
	var mask_1_graphics_258 = new cjs.Graphics().p("ACXffQmTk8g+n8Qg+n9E7mUIedX1Qk7GUn9A/QhTAJhQAAQmcAAlSkIg");
	var mask_1_graphics_259 = new cjs.Graphics().p("AB+e9QmFlOgnn+QgooAFNmFIdYZKQlNGFn/AoQg1AEg0AAQm/AAldkqg");
	var mask_1_graphics_260 = new cjs.Graphics().p("ABoeZQl2lfgRoAQgRoBFdl2IcQabQleF3oBARIgsABQnlAAlllOg");
	var mask_1_graphics_261 = new cjs.Graphics().p("EAO7AjnQoBgHlmluQlmluAGoAQAFoCFulmIbDbqQlqFhn3AAIgOAAg");
	var mask_1_graphics_262 = new cjs.Graphics().p("EAOYAjlQoAgdlWl+QlVl+Acn/QAdoBF9lWIZzc1QliE8nQAAQgmAAgmgCg");
	var mask_1_graphics_263 = new cjs.Graphics().p("EAN2AjhQn+g0lFmNQlDmNAyn9QAzn/GMlEIYgd7QlYEZmsAAQhDAAhEgGg");
	var mask_1_graphics_264 = new cjs.Graphics().p("EANVAjaQn7hLkzmaQkymbBKn7QBJn8GakyIXJe/QlMD4mLAAQhdAAhigOg");
	var mask_1_graphics_265 = new cjs.Graphics().p("EAM2AjQQn4hhkgmnQkgmoBgn3QBgn4GnkhIVwf/Qk/DZlrAAQh4AAh9gYg");
	var mask_1_graphics_266 = new cjs.Graphics().p("EAMXAjFQnzh4kNmzQkNm1B2nyQB3nzGzkNMAUUAg6QkwC7lOAAQiSAAiXgjg");
	var mask_1_graphics_267 = new cjs.Graphics().p("EAL6Ai3QnuiNj5nAQj5nACMnsQCLnuG/j5MAS2AhxQkfCgkyAAQirAAiwgxg");
	var mask_1_graphics_268 = new cjs.Graphics().p("EALdAimQnmiijmnKQjknLChnmQChnnHKjkMARVAikQkNCHkXAAQjEAAjJhDg");
	var mask_1_graphics_269 = new cjs.Graphics().p("EALCAiUQnei4jRnUQjRnUC3neQC2ngHUjQMAPzAjTQj6Bwj+AAQjcAAjghVg");
	var mask_1_graphics_270 = new cjs.Graphics().p("EAKpAh/QnWjNi8ncQi8ndDLnWQDMnXHdi7MAONAj9QjlBbjkAAQj2AAj0hqg");
	var mask_1_graphics_271 = new cjs.Graphics().p("EAKRAhoQnNjhinnkQimnlDgnNQDhnNHkimMAMnAkjQjPBIjLAAQkQAAkIiBg");
	var mask_1_graphics_272 = new cjs.Graphics().p("EAJ6AhPQnCj1iRnrQiRnsD0nCQD1nCHriSMAK/AlFQi4A2iyAAQkqAAkbiZg");
	var mask_1_graphics_273 = new cjs.Graphics().p("EAJlAg0Qm3kJh7nxQh7nyEHm2QEJm3Hyh8MAJUAliQieAniZAAQlGAAksi0g");
	var mask_1_graphics_274 = new cjs.Graphics().p("EAJSAgXQmrkchln2Qhln3EamqQEcmrH3hlMAHpAl5QiEAbh/AAQlkAAk6jRg");
	var mask_1_graphics_275 = new cjs.Graphics().p("AJAf5QmekwhPn6QhPn7EumdQEumeH7hPMAF9AmNQhpARhlAAQmCAAlIjvg");
	var mask_1_graphics_276 = new cjs.Graphics().p("AIvfYQmQlCg4n9Qg5n9FAmQQFBmQH9g5MAERAmcQhMAIhKAAQmjAAlVkPg");
	var mask_1_graphics_277 = new cjs.Graphics().p("AIge1QmBlTgin/QgioAFRmBQFSmBIAgiMACkAmlQgvADguAAQnGAAlfkyg");
	var mask_1_graphics_278 = new cjs.Graphics().p("AITeQQlylkgLn/QgLoBFilyQFjlyIAgLMAA3AmpIggABQnsAAlolXg");
	var mask_1_graphics_279 = new cjs.Graphics().p("AHtdpQlilzALoAQALoBFyliQFzliIBAMMgA3AmqQoAgMljlyg");
	var mask_1_graphics_280 = new cjs.Graphics().p("AGsdCQlRmDAin+QAioAGBlSQGDlRH/AiMgCkAmlQn/gilTmBg");
	var mask_1_graphics_281 = new cjs.Graphics().p("AFucbQlAmSA5n9QA4n9GQlAQGRlAH9A5MgERAmbQn9g5lBmPg");
	var mask_1_graphics_282 = new cjs.Graphics().p("AExbzQktmfBPn6QBPn7GdkuQGfkuH6BPMgF9AmNQn7hPkvmdg");
	var mask_1_graphics_283 = new cjs.Graphics().p("AD3bLQkamsBln2QBln3GqkbQGskbH2BlMgHpAl6Qn3hmkcmqg");
	var mask_1_graphics_284 = new cjs.Graphics().p("AC/aiQkHm4B7nxQB7nyG3kHQG4kJHxB8MgJUAliQnyh8kJm3g");
	var mask_1_graphics_285 = new cjs.Graphics().p("ACKZ6QjznDCQnrQCRnsHCj0QHDj1HsCSMgK/AlEQnriRj1nCg");
	var mask_1_graphics_286 = new cjs.Graphics().p("ABWZSQjenOClnkQCnnlHNjfQHNjhHlCnMgMnAkjQnkinjinMg");
	var mask_1_graphics_287 = new cjs.Graphics().p("AAmYpQjKnXC7ncQC8ndHWjLQHXjMHcC8MgONAj+Qndi9jMnWg");
	var mask_1_graphics_288 = new cjs.Graphics().p("AgHYBQi2nfDQnUQDRnUHei2QHgi3HUDRMgPzAjTQnTjRi3nfg");
	var mask_1_graphics_289 = new cjs.Graphics().p("AgyXZQihnnDknKQDmnKHmihQHniiHKDlMgRVAilQnKjlihnng");
	var mask_1_graphics_290 = new cjs.Graphics().p("AhbWyQiLnuD5m/QD6nAHsiLQHuiMHAD4MgS2AhyQnAj5iMntg");
	var mask_1_graphics_291 = new cjs.Graphics().p("AiAWLQh1n0EMm0QENm0Hzh1QHzh2G0EMMgUUAg6QmzkNh3nyg");
	var mask_1_graphics_292 = new cjs.Graphics().p("AiiVkQhfn4EfmoQEgmoH3hfQH4hfGoEfI1wf/Qmnkhhgn3g");
	var mask_1_graphics_293 = new cjs.Graphics().p("AjCU+QhIn8ExmaQEzmbH7hJQH8hJGaExI3JfAQmakzhKn7g");
	var mask_1_graphics_294 = new cjs.Graphics().p("AjeUYQgyn+FDmNQFFmNH+gxQH+gzGNFDI4gd8QmLlFg0n+g");
	var mask_1_graphics_295 = new cjs.Graphics().p("Aj3TzQgboAFUl9QFWl+H/gcQIBgcF+FVI5zc0Ql9lWgdoAg");
	var mask_1_graphics_296 = new cjs.Graphics().p("AkNTPQgFoBFmluQFmltIAgGQIBgGFvFmI7DbpQlulmgGoBg");
	var mask_1_graphics_297 = new cjs.Graphics().p("AkfSsQASoBF0ldQF3leIAAQQIBARFeF2I8QacQldl2ARoBg");
	var mask_1_graphics_298 = new cjs.Graphics().p("AkvSKQApoAGElMQGGlNH+AnQIAAnFNGGI9XZJQlOmFAnn/g");
	var mask_1_graphics_299 = new cjs.Graphics().p("Ak7RpQBAn+GSk7QGUk7H8A9QH+A+E8GUI+dX1Qk8mUA9n8g");
	var mask_1_graphics_300 = new cjs.Graphics().p("AlDRIQBWn6GgkpQGhkpH5BUQH6BVEqGhI/fWdQkpmhBUn6g");
	var mask_1_graphics_301 = new cjs.Graphics().p("AlIQpQBsn1GskXQGvkXH1BrQH2BrEWGuMggcAVDQkXmuBrn2g");
	var mask_1_graphics_302 = new cjs.Graphics().p("AlKQLQCCnwG5kDQG6kEHvCBQHxCBEEG6MghWATlQkDm6CAnwg");
	var mask_1_graphics_303 = new cjs.Graphics().p("AlIPuQCYnqHDjvQHFjwHqCWQHqCYDwHFMgiLASFQjwnFCXnqg");
	var mask_1_graphics_304 = new cjs.Graphics().p("AlDPTQCtnjHOjbQHPjcHiCsQHkCtDbHPMgi8AQkQjbnPCsnjg");
	var mask_1_graphics_305 = new cjs.Graphics().p("Ak7O5QDDnbHXjHQHYjHHaDCQHcDCDHHYMgjpAPAQjHnYDBnbg");
	var mask_1_graphics_306 = new cjs.Graphics().p("AkvOgQDXnSHfixQHiiyHRDWQHSDXCyHgMgkRANaQiyngDWnSg");
	var mask_1_graphics_307 = new cjs.Graphics().p("AkgOIQDsnHHmicQHpidHHDrQHIDrCdHoMgk1ALzQicnpDqnIg");
	var mask_1_graphics_308 = new cjs.Graphics().p("AkONzQEAm9HtiGQHviHG8D+QG+D/CGHvMglTAKJQiHnuD+m9g");
	var mask_1_graphics_309 = new cjs.Graphics().p("Aj4NeQESmxH0hwQH0hxGxESQGxETBxH0MgluAIfQhxn0ESmyg");
	var mask_1_graphics_310 = new cjs.Graphics().p("AjfNLQElmkH4haQH5haGkEkQGlEmBaH4MgmEAG0Qhan5Elmlg");
	var mask_1_graphics_311 = new cjs.Graphics().p("AjDM6QE3mXH8hEQH8hDGXE2QGYE4BEH8MgmVAFIQhEn8E3mYg");
	var mask_1_graphics_312 = new cjs.Graphics().p("AikMrQFJmJH+gtQH/guGJFJQGJFJAuH/MgmhADbQgun/FJmJg");
	var mask_1_graphics_313 = new cjs.Graphics().p("AiCMdQFal6IAgXQIAgWF6FZQF7FbAWIAMgmoABtQgWoAFZl6g");
	var mask_1_graphics_314 = new cjs.Graphics().p("AnHZ8QAAoAFrlsQFqlqIAABQIBgBFqFqQFrFsAAIAg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(243).to({graphics:mask_1_graphics_243,x:202,y:227.9}).wait(1).to({graphics:mask_1_graphics_244,x:201.9,y:227.9}).wait(1).to({graphics:mask_1_graphics_245,x:201.7,y:227.9}).wait(1).to({graphics:mask_1_graphics_246,x:201.4,y:227.9}).wait(1).to({graphics:mask_1_graphics_247,x:201,y:228}).wait(1).to({graphics:mask_1_graphics_248,x:200.5,y:228}).wait(1).to({graphics:mask_1_graphics_249,x:199.8,y:228}).wait(1).to({graphics:mask_1_graphics_250,x:199,y:228.1}).wait(1).to({graphics:mask_1_graphics_251,x:198.1,y:228.1}).wait(1).to({graphics:mask_1_graphics_252,x:197.1,y:228.1}).wait(1).to({graphics:mask_1_graphics_253,x:196,y:228.1}).wait(1).to({graphics:mask_1_graphics_254,x:194.8,y:228.1}).wait(1).to({graphics:mask_1_graphics_255,x:193.5,y:228}).wait(1).to({graphics:mask_1_graphics_256,x:192,y:228}).wait(1).to({graphics:mask_1_graphics_257,x:190.5,y:228}).wait(1).to({graphics:mask_1_graphics_258,x:188.8,y:227.9}).wait(1).to({graphics:mask_1_graphics_259,x:187.1,y:227.9}).wait(1).to({graphics:mask_1_graphics_260,x:185.3,y:227.9}).wait(1).to({graphics:mask_1_graphics_261,x:183.4,y:227.9}).wait(1).to({graphics:mask_1_graphics_262,x:181.4,y:227.9}).wait(1).to({graphics:mask_1_graphics_263,x:179.3,y:227.9}).wait(1).to({graphics:mask_1_graphics_264,x:177.1,y:228}).wait(1).to({graphics:mask_1_graphics_265,x:174.9,y:228}).wait(1).to({graphics:mask_1_graphics_266,x:172.6,y:228}).wait(1).to({graphics:mask_1_graphics_267,x:170.2,y:228}).wait(1).to({graphics:mask_1_graphics_268,x:167.8,y:228.1}).wait(1).to({graphics:mask_1_graphics_269,x:165.4,y:228.1}).wait(1).to({graphics:mask_1_graphics_270,x:162.8,y:228.1}).wait(1).to({graphics:mask_1_graphics_271,x:160.3,y:228.1}).wait(1).to({graphics:mask_1_graphics_272,x:157.7,y:228}).wait(1).to({graphics:mask_1_graphics_273,x:155,y:228}).wait(1).to({graphics:mask_1_graphics_274,x:152.3,y:228}).wait(1).to({graphics:mask_1_graphics_275,x:149.6,y:228}).wait(1).to({graphics:mask_1_graphics_276,x:146.9,y:227.9}).wait(1).to({graphics:mask_1_graphics_277,x:144.2,y:227.9}).wait(1).to({graphics:mask_1_graphics_278,x:141.5,y:227.9}).wait(1).to({graphics:mask_1_graphics_279,x:141.5,y:227.9}).wait(1).to({graphics:mask_1_graphics_280,x:144.2,y:227.7}).wait(1).to({graphics:mask_1_graphics_281,x:146.9,y:227.5}).wait(1).to({graphics:mask_1_graphics_282,x:149.6,y:227.1}).wait(1).to({graphics:mask_1_graphics_283,x:152.3,y:226.7}).wait(1).to({graphics:mask_1_graphics_284,x:155,y:226.1}).wait(1).to({graphics:mask_1_graphics_285,x:157.7,y:225.3}).wait(1).to({graphics:mask_1_graphics_286,x:160.3,y:224.5}).wait(1).to({graphics:mask_1_graphics_287,x:162.8,y:223.6}).wait(1).to({graphics:mask_1_graphics_288,x:165.4,y:222.5}).wait(1).to({graphics:mask_1_graphics_289,x:167.8,y:221.3}).wait(1).to({graphics:mask_1_graphics_290,x:170.3,y:220}).wait(1).to({graphics:mask_1_graphics_291,x:172.6,y:218.6}).wait(1).to({graphics:mask_1_graphics_292,x:174.9,y:217.2}).wait(1).to({graphics:mask_1_graphics_293,x:177.1,y:215.6}).wait(1).to({graphics:mask_1_graphics_294,x:179.3,y:213.9}).wait(1).to({graphics:mask_1_graphics_295,x:181.4,y:212.1}).wait(1).to({graphics:mask_1_graphics_296,x:183.4,y:210.2}).wait(1).to({graphics:mask_1_graphics_297,x:185.3,y:208.3}).wait(1).to({graphics:mask_1_graphics_298,x:187.1,y:206.2}).wait(1).to({graphics:mask_1_graphics_299,x:188.9,y:204.1}).wait(1).to({graphics:mask_1_graphics_300,x:190.5,y:201.9}).wait(1).to({graphics:mask_1_graphics_301,x:192,y:199.7}).wait(1).to({graphics:mask_1_graphics_302,x:193.5,y:197.3}).wait(1).to({graphics:mask_1_graphics_303,x:194.8,y:194.9}).wait(1).to({graphics:mask_1_graphics_304,x:196,y:192.5}).wait(1).to({graphics:mask_1_graphics_305,x:197.2,y:190}).wait(1).to({graphics:mask_1_graphics_306,x:198.2,y:187.4}).wait(1).to({graphics:mask_1_graphics_307,x:199.1,y:184.9}).wait(1).to({graphics:mask_1_graphics_308,x:199.8,y:182.2}).wait(1).to({graphics:mask_1_graphics_309,x:200.5,y:179.6}).wait(1).to({graphics:mask_1_graphics_310,x:201,y:176.9}).wait(1).to({graphics:mask_1_graphics_311,x:201.5,y:174.2}).wait(1).to({graphics:mask_1_graphics_312,x:201.8,y:171.5}).wait(1).to({graphics:mask_1_graphics_313,x:201.9,y:168.7}).wait(1).to({graphics:mask_1_graphics_314,x:202,y:166}).wait(120));

	// Layer 23
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(25,1,1).p("Ap0MlIAAyQQBXlXGqhKQGohLDRCeQBCAzAtA5");
	this.shape_2.setTransform(269.7,366.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(25,1,1).p("AqjMlIAAyQQBYlXGqhKQGohLDQCeQDBCTAMDI");
	this.shape_3.setTransform(274.3,366.9);

	var maskedShapeInstanceList = [this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2}]},243).to({state:[{t:this.shape_3}]},10).wait(181));

	// Layer 22 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_199 = new cjs.Graphics().p("EAMtAkWIAAitIEkAAIAACtg");
	var mask_2_graphics_200 = new cjs.Graphics().p("AiRBjIAAjGIEjAAIAADGg");
	var mask_2_graphics_201 = new cjs.Graphics().p("AiRBwIAAjfIEjAAIAADfg");
	var mask_2_graphics_202 = new cjs.Graphics().p("AiRB9IAAj5IEjAAIAAD5g");
	var mask_2_graphics_203 = new cjs.Graphics().p("AiRCKIAAkTIEjAAIAAETg");
	var mask_2_graphics_204 = new cjs.Graphics().p("AiRCWIAAkrIEjAAIAAErg");
	var mask_2_graphics_205 = new cjs.Graphics().p("AiRCjIAAlFIEjAAIAAFFg");
	var mask_2_graphics_206 = new cjs.Graphics().p("AiRCwIAAlfIEjAAIAAFfg");
	var mask_2_graphics_207 = new cjs.Graphics().p("AiRC8IAAl3IEjAAIAAF3g");
	var mask_2_graphics_208 = new cjs.Graphics().p("AiRDJIAAmRIEjAAIAAGRg");
	var mask_2_graphics_209 = new cjs.Graphics().p("AiRDWIAAmrIEjAAIAAGrg");
	var mask_2_graphics_210 = new cjs.Graphics().p("AiRDiIAAnEIEjAAIAAHEg");
	var mask_2_graphics_211 = new cjs.Graphics().p("AiRDvIAAndIEjAAIAAHdg");
	var mask_2_graphics_212 = new cjs.Graphics().p("AiRD8IAAn3IEjAAIAAH3g");
	var mask_2_graphics_213 = new cjs.Graphics().p("AiREJIAAoRIEjAAIAAIRg");
	var mask_2_graphics_214 = new cjs.Graphics().p("AiREVIAAopIEjAAIAAIpg");
	var mask_2_graphics_215 = new cjs.Graphics().p("AiREiIAApDIEjAAIAAJDg");
	var mask_2_graphics_216 = new cjs.Graphics().p("AiREvIAApdIEjAAIAAJdg");
	var mask_2_graphics_217 = new cjs.Graphics().p("AiRE7IAAp2IEjAAIAAJ2g");
	var mask_2_graphics_218 = new cjs.Graphics().p("AiRFIIAAqPIEjAAIAAKPg");
	var mask_2_graphics_219 = new cjs.Graphics().p("AiRFVIAAqpIEjAAIAAKpg");
	var mask_2_graphics_220 = new cjs.Graphics().p("AiRFiIAArDIEjAAIAALDg");
	var mask_2_graphics_221 = new cjs.Graphics().p("AiRFuIAArbIEjAAIAALbg");
	var mask_2_graphics_222 = new cjs.Graphics().p("AiRF7IAAr1IEjAAIAAL1g");
	var mask_2_graphics_223 = new cjs.Graphics().p("AiRGIIAAsPIEjAAIAAMPg");
	var mask_2_graphics_224 = new cjs.Graphics().p("AiRGVIAAspIEjAAIAAMpg");
	var mask_2_graphics_225 = new cjs.Graphics().p("AiRGhIAAtBIEjAAIAANBg");
	var mask_2_graphics_226 = new cjs.Graphics().p("AiRGuIAAtbIEjAAIAANbg");
	var mask_2_graphics_227 = new cjs.Graphics().p("AiRG7IAAt1IEjAAIAAN1g");
	var mask_2_graphics_228 = new cjs.Graphics().p("AiRHIIAAuOIEjAAIAAOOg");
	var mask_2_graphics_229 = new cjs.Graphics().p("AiRHUIAAunIEjAAIAAOng");
	var mask_2_graphics_230 = new cjs.Graphics().p("AiRHhIAAvBIEjAAIAAPBg");
	var mask_2_graphics_231 = new cjs.Graphics().p("AiRHuIAAvbIEjAAIAAPbg");
	var mask_2_graphics_232 = new cjs.Graphics().p("AiRH6IAAvzIEjAAIAAPzg");
	var mask_2_graphics_233 = new cjs.Graphics().p("AiRIHIAAwNIEjAAIAAQNg");
	var mask_2_graphics_234 = new cjs.Graphics().p("AiRIUIAAwnIEjAAIAAQng");
	var mask_2_graphics_235 = new cjs.Graphics().p("AiRIhIAAxBIEjAAIAARBg");
	var mask_2_graphics_236 = new cjs.Graphics().p("AiRItIAAxZIEjAAIAARZg");
	var mask_2_graphics_237 = new cjs.Graphics().p("AiRI6IAAxzIEjAAIAARzg");
	var mask_2_graphics_238 = new cjs.Graphics().p("AiRJHIAAyNIEjAAIAASNg");
	var mask_2_graphics_239 = new cjs.Graphics().p("AiRJTIAAylIEjAAIAASlg");
	var mask_2_graphics_240 = new cjs.Graphics().p("AiRJgIAAy/IEjAAIAAS/g");
	var mask_2_graphics_241 = new cjs.Graphics().p("AiRJtIAAzZIEjAAIAATZg");
	var mask_2_graphics_242 = new cjs.Graphics().p("AiRJ5IAAzyIEjAAIAATyg");
	var mask_2_graphics_243 = new cjs.Graphics().p("EAMtAkCIAA0MIEkAAIAAUMg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(199).to({graphics:mask_2_graphics_199,x:110.5,y:232.6}).wait(1).to({graphics:mask_2_graphics_200,x:206.4,y:455.2}).wait(1).to({graphics:mask_2_graphics_201,x:206.4,y:453.9}).wait(1).to({graphics:mask_2_graphics_202,x:206.4,y:452.5}).wait(1).to({graphics:mask_2_graphics_203,x:206.4,y:451.1}).wait(1).to({graphics:mask_2_graphics_204,x:206.4,y:449.8}).wait(1).to({graphics:mask_2_graphics_205,x:206.4,y:448.4}).wait(1).to({graphics:mask_2_graphics_206,x:206.4,y:447}).wait(1).to({graphics:mask_2_graphics_207,x:206.4,y:445.7}).wait(1).to({graphics:mask_2_graphics_208,x:206.4,y:444.3}).wait(1).to({graphics:mask_2_graphics_209,x:206.4,y:443}).wait(1).to({graphics:mask_2_graphics_210,x:206.4,y:441.6}).wait(1).to({graphics:mask_2_graphics_211,x:206.4,y:440.2}).wait(1).to({graphics:mask_2_graphics_212,x:206.4,y:438.9}).wait(1).to({graphics:mask_2_graphics_213,x:206.4,y:437.5}).wait(1).to({graphics:mask_2_graphics_214,x:206.4,y:436.2}).wait(1).to({graphics:mask_2_graphics_215,x:206.4,y:434.8}).wait(1).to({graphics:mask_2_graphics_216,x:206.4,y:433.4}).wait(1).to({graphics:mask_2_graphics_217,x:206.4,y:432.1}).wait(1).to({graphics:mask_2_graphics_218,x:206.4,y:430.7}).wait(1).to({graphics:mask_2_graphics_219,x:206.4,y:429.3}).wait(1).to({graphics:mask_2_graphics_220,x:206.4,y:428}).wait(1).to({graphics:mask_2_graphics_221,x:206.4,y:426.6}).wait(1).to({graphics:mask_2_graphics_222,x:206.4,y:425.2}).wait(1).to({graphics:mask_2_graphics_223,x:206.4,y:423.9}).wait(1).to({graphics:mask_2_graphics_224,x:206.4,y:422.5}).wait(1).to({graphics:mask_2_graphics_225,x:206.4,y:421.2}).wait(1).to({graphics:mask_2_graphics_226,x:206.4,y:419.8}).wait(1).to({graphics:mask_2_graphics_227,x:206.4,y:418.4}).wait(1).to({graphics:mask_2_graphics_228,x:206.4,y:417.1}).wait(1).to({graphics:mask_2_graphics_229,x:206.4,y:415.7}).wait(1).to({graphics:mask_2_graphics_230,x:206.4,y:414.4}).wait(1).to({graphics:mask_2_graphics_231,x:206.4,y:413}).wait(1).to({graphics:mask_2_graphics_232,x:206.4,y:411.6}).wait(1).to({graphics:mask_2_graphics_233,x:206.4,y:410.3}).wait(1).to({graphics:mask_2_graphics_234,x:206.4,y:408.9}).wait(1).to({graphics:mask_2_graphics_235,x:206.4,y:407.5}).wait(1).to({graphics:mask_2_graphics_236,x:206.4,y:406.2}).wait(1).to({graphics:mask_2_graphics_237,x:206.4,y:404.8}).wait(1).to({graphics:mask_2_graphics_238,x:206.4,y:403.4}).wait(1).to({graphics:mask_2_graphics_239,x:206.4,y:402.1}).wait(1).to({graphics:mask_2_graphics_240,x:206.4,y:400.7}).wait(1).to({graphics:mask_2_graphics_241,x:206.4,y:399.4}).wait(1).to({graphics:mask_2_graphics_242,x:206.4,y:398}).wait(1).to({graphics:mask_2_graphics_243,x:110.5,y:230.6}).wait(191));

	// Layer 21
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(25,1,1).p("AqjMlIAAyQQBYlXGphKQGphLDQCeQDQCegDDeIAARi");
	this.shape_4.setTransform(274.4,366.9);
	this.shape_4._off = true;

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(199).to({_off:false},0).wait(235));

	// Layer 19
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(25,1,1).p("AAAgTIAAAn");
	this.shape_5.setTransform(207,107.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(25,1,1).p("AAAAeIAAg7");
	this.shape_6.setTransform(207,108);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(25,1,1).p("AAAAnIAAhN");
	this.shape_7.setTransform(207,108.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(25,1,1).p("AAAAwIAAhf");
	this.shape_8.setTransform(207,109.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(25,1,1).p("AAAA5IAAhy");
	this.shape_9.setTransform(207,110.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(25,1,1).p("AAABDIAAiF");
	this.shape_10.setTransform(207,111.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(25,1,1).p("AAABMIAAiX");
	this.shape_11.setTransform(207,112.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(25,1,1).p("AAABWIAAir");
	this.shape_12.setTransform(207,113.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(25,1,1).p("AAABfIAAi9");
	this.shape_13.setTransform(207,114.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(25,1,1).p("AAABpIAAjR");
	this.shape_14.setTransform(207,115.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(25,1,1).p("AAAByIAAjj");
	this.shape_15.setTransform(207,116.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(25,1,1).p("AAAB7IAAj1");
	this.shape_16.setTransform(207,117.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(25,1,1).p("AAACFIAAkJ");
	this.shape_17.setTransform(207,118.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(25,1,1).p("AAACOIAAkb");
	this.shape_18.setTransform(207,119.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(25,1,1).p("AAACYIAAku");
	this.shape_19.setTransform(207,120.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(25,1,1).p("AAAChIAAlB");
	this.shape_20.setTransform(207,121.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(25,1,1).p("AAACqIAAlT");
	this.shape_21.setTransform(207,122.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(25,1,1).p("AAACzIAAlm");
	this.shape_22.setTransform(207,123);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(25,1,1).p("AAAC9IAAl5");
	this.shape_23.setTransform(207,124);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(25,1,1).p("AAADGIAAmL");
	this.shape_24.setTransform(207,124.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(25,1,1).p("AAADQIAAmf");
	this.shape_25.setTransform(207,125.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(25,1,1).p("AAADZIAAmx");
	this.shape_26.setTransform(207,126.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(25,1,1).p("AAADjIAAnE");
	this.shape_27.setTransform(207,127.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(25,1,1).p("AAADsIAAnX");
	this.shape_28.setTransform(207,128.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(25,1,1).p("AAAD1IAAnp");
	this.shape_29.setTransform(207,129.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(25,1,1).p("AAAD/IAAn9");
	this.shape_30.setTransform(207,130.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(25,1,1).p("AAAEIIAAoP");
	this.shape_31.setTransform(207,131.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(25,1,1).p("AAAERIAAoi");
	this.shape_32.setTransform(207,132.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(25,1,1).p("AAAEbIAAo1");
	this.shape_33.setTransform(207,133.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(25,1,1).p("AAAEkIAApH");
	this.shape_34.setTransform(207,134.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(25,1,1).p("AAAEuIAApb");
	this.shape_35.setTransform(207,135.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(25,1,1).p("AAAE3IAApt");
	this.shape_36.setTransform(207,136.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(25,1,1).p("AAAFBIAAqB");
	this.shape_37.setTransform(207,137.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(25,1,1).p("AAAFKIAAqT");
	this.shape_38.setTransform(207,138);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(25,1,1).p("AAAFTIAAql");
	this.shape_39.setTransform(207,139);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(25,1,1).p("AAAFcIAAq4");
	this.shape_40.setTransform(207,139.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(25,1,1).p("AAAFmIAArL");
	this.shape_41.setTransform(207,140.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(25,1,1).p("AAAFvIAArd");
	this.shape_42.setTransform(207,141.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(25,1,1).p("AAAF5IAArx");
	this.shape_43.setTransform(207,142.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(25,1,1).p("AAAGCIAAsD");
	this.shape_44.setTransform(207,143.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(25,1,1).p("AAAGMIAAsX");
	this.shape_45.setTransform(207,144.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(25,1,1).p("AAAGVIAAsp");
	this.shape_46.setTransform(207,145.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(25,1,1).p("AAAGeIAAs7");
	this.shape_47.setTransform(207,146.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(25,1,1).p("AAAGoIAAtP");
	this.shape_48.setTransform(207,147.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(25,1,1).p("AAAGxIAAth");
	this.shape_49.setTransform(207,148.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(25,1,1).p("AAAG7IAAt1");
	this.shape_50.setTransform(207,149.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(25,1,1).p("AAAHEIAAuH");
	this.shape_51.setTransform(207,150.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(25,1,1).p("AAAHNIAAuZ");
	this.shape_52.setTransform(207,151.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(25,1,1).p("AAAHXIAAut");
	this.shape_53.setTransform(207,152.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(25,1,1).p("AAAHgIAAu/");
	this.shape_54.setTransform(207,153.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(25,1,1).p("AAAHpIAAvR");
	this.shape_55.setTransform(207,154);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(25,1,1).p("AAAHzIAAvl");
	this.shape_56.setTransform(207,154.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(25,1,1).p("AAAH8IAAv3");
	this.shape_57.setTransform(207,155.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(25,1,1).p("AAAIGIAAwL");
	this.shape_58.setTransform(207,156.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(25,1,1).p("AAAIPIAAwd");
	this.shape_59.setTransform(207,157.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(25,1,1).p("AAAIYIAAwv");
	this.shape_60.setTransform(207,158.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(25,1,1).p("AAAIiIAAxD");
	this.shape_61.setTransform(207,159.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(25,1,1).p("AAAIrIAAxV");
	this.shape_62.setTransform(207,160.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(25,1,1).p("AAAI0IAAxo");
	this.shape_63.setTransform(207,161.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(25,1,1).p("AAAI+IAAx7");
	this.shape_64.setTransform(207,162.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(25,1,1).p("AAAJHIAAyN");
	this.shape_65.setTransform(207,163.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(25,1,1).p("AAAJRIAAyh");
	this.shape_66.setTransform(207,164.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(25,1,1).p("AAAJaIAAyz");
	this.shape_67.setTransform(207,165.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(25,1,1).p("AAAJkIAAzG");
	this.shape_68.setTransform(207,166.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(25,1,1).p("AAAJtIAAzZ");
	this.shape_69.setTransform(207,167.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(25,1,1).p("AAAJ2IAAzr");
	this.shape_70.setTransform(207,168.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(25,1,1).p("AAAJ/IAAz+");
	this.shape_71.setTransform(207,169);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(25,1,1).p("AAAKJIAA0R");
	this.shape_72.setTransform(207,170);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(25,1,1).p("AAAKSIAA0j");
	this.shape_73.setTransform(207,170.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(25,1,1).p("AAAKcIAA03");
	this.shape_74.setTransform(207,171.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(25,1,1).p("AAAKlIAA1J");
	this.shape_75.setTransform(207,172.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(25,1,1).p("AAAKvIAA1c");
	this.shape_76.setTransform(207,173.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(25,1,1).p("AAAK4IAA1v");
	this.shape_77.setTransform(207,174.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(25,1,1).p("AAALBIAA2B");
	this.shape_78.setTransform(207,175.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(25,1,1).p("AAALLIAA2V");
	this.shape_79.setTransform(207,176.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(25,1,1).p("AAALUIAA2n");
	this.shape_80.setTransform(207,177.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(25,1,1).p("AAALeIAA27");
	this.shape_81.setTransform(207,178.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(25,1,1).p("AAALnIAA3N");
	this.shape_82.setTransform(207,179.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(25,1,1).p("AAALwIAA3f");
	this.shape_83.setTransform(207,180.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(25,1,1).p("AAAL6IAA3z");
	this.shape_84.setTransform(207,181.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(25,1,1).p("AAAMDIAA4F");
	this.shape_85.setTransform(207,182.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(25,1,1).p("AAAMMIAA4Y");
	this.shape_86.setTransform(207,183.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(25,1,1).p("AAAMWIAA4r");
	this.shape_87.setTransform(207,184);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(25,1,1).p("AAAMfIAA49");
	this.shape_88.setTransform(207,185);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(25,1,1).p("AAAMpIAA5R");
	this.shape_89.setTransform(207,185.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(25,1,1).p("AAAMyIAA5j");
	this.shape_90.setTransform(207,186.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(25,1,1).p("AAAM7IAA51");
	this.shape_91.setTransform(207,187.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(25,1,1).p("AAANFIAA6J");
	this.shape_92.setTransform(207,188.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(25,1,1).p("AAANOIAA6b");
	this.shape_93.setTransform(207,189.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(25,1,1).p("AAANXIAA6u");
	this.shape_94.setTransform(207,190.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(25,1,1).p("AAANhIAA7B");
	this.shape_95.setTransform(207,191.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(25,1,1).p("AAANqIAA7T");
	this.shape_96.setTransform(207,192.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(25,1,1).p("AAAN0IAA7n");
	this.shape_97.setTransform(207,193.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(25,1,1).p("AAAN9IAA75");
	this.shape_98.setTransform(207,194.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(25,1,1).p("AAAOHIAA8N");
	this.shape_99.setTransform(207,195.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(25,1,1).p("AAAOQIAA8f");
	this.shape_100.setTransform(207,196.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(25,1,1).p("AAAOZIAA8x");
	this.shape_101.setTransform(207,197.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(25,1,1).p("AAAOiIAA9E");
	this.shape_102.setTransform(207,198.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(25,1,1).p("AAAOsIAA9X");
	this.shape_103.setTransform(207,199.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(25,1,1).p("AAAO1IAA9p");
	this.shape_104.setTransform(207,200);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(25,1,1).p("AAAO/IAA99");
	this.shape_105.setTransform(207,200.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(25,1,1).p("AAAPIIAA+P");
	this.shape_106.setTransform(207,201.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(25,1,1).p("AAAPSIAA+j");
	this.shape_107.setTransform(207,202.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(25,1,1).p("AAAPbIAA+1");
	this.shape_108.setTransform(207,203.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(25,1,1).p("AAAPkIAA/H");
	this.shape_109.setTransform(207,204.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(25,1,1).p("AAAPuIAA/b");
	this.shape_110.setTransform(207,205.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(25,1,1).p("AAAP3IAA/t");
	this.shape_111.setTransform(207,206.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(25,1,1).p("AAAQBMAAAggB");
	this.shape_112.setTransform(207,207.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(25,1,1).p("AAAQKMAAAggT");
	this.shape_113.setTransform(207,208.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(25,1,1).p("AAAQTMAAAggl");
	this.shape_114.setTransform(207,209.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(25,1,1).p("AAAQdMAAAgg5");
	this.shape_115.setTransform(207,210.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(25,1,1).p("AAAQmMAAAghL");
	this.shape_116.setTransform(207,211.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(25,1,1).p("AAAQwMAAAghf");
	this.shape_117.setTransform(207,212.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(25,1,1).p("AAAQ5MAAAghx");
	this.shape_118.setTransform(207,213.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(25,1,1).p("AAARCMAAAgiD");
	this.shape_119.setTransform(207,214.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(25,1,1).p("AAARMMAAAgiX");
	this.shape_120.setTransform(207,215);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(25,1,1).p("AAARVMAAAgip");
	this.shape_121.setTransform(207,216);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(25,1,1).p("AAAReMAAAgi7");
	this.shape_122.setTransform(207,216.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(25,1,1).p("AAARoMAAAgjP");
	this.shape_123.setTransform(207,217.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(25,1,1).p("AAARxMAAAgjh");
	this.shape_124.setTransform(207,218.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(25,1,1).p("AAAR7MAAAgj1");
	this.shape_125.setTransform(207,219.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(25,1,1).p("AAASEMAAAgkH");
	this.shape_126.setTransform(207,220.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(25,1,1).p("AAASNMAAAgkZ");
	this.shape_127.setTransform(207,221.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(25,1,1).p("AAASXMAAAgkt");
	this.shape_128.setTransform(207,222.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(25,1,1).p("AAASgMAAAgk/");
	this.shape_129.setTransform(207,223.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(25,1,1).p("AAASqMAAAglT");
	this.shape_130.setTransform(207,224.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").ss(25,1,1).p("AAASzMAAAgll");
	this.shape_131.setTransform(207,225.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(25,1,1).p("AAAS8MAAAgl3");
	this.shape_132.setTransform(207,226.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(25,1,1).p("AAATGMAAAgmL");
	this.shape_133.setTransform(207,227.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(25,1,1).p("AAATPMAAAgmd");
	this.shape_134.setTransform(207,228.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#000000").ss(25,1,1).p("AAATYMAAAgmw");
	this.shape_135.setTransform(207,229.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#000000").ss(25,1,1).p("AAATiMAAAgnD");
	this.shape_136.setTransform(207,230);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#000000").ss(25,1,1).p("AAATrMAAAgnV");
	this.shape_137.setTransform(207,231);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").ss(25,1,1).p("AAAT1MAAAgnp");
	this.shape_138.setTransform(207,231.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#000000").ss(25,1,1).p("AAAT+MAAAgn7");
	this.shape_139.setTransform(207,232.9);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").ss(25,1,1).p("AAAUHMAAAgoN");
	this.shape_140.setTransform(207,233.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#000000").ss(25,1,1).p("AAAURMAAAgoh");
	this.shape_141.setTransform(207,234.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#000000").ss(25,1,1).p("AAAUaMAAAgoz");
	this.shape_142.setTransform(207,235.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#000000").ss(25,1,1).p("AAAUjMAAAgpG");
	this.shape_143.setTransform(207,236.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#000000").ss(25,1,1).p("AAAUtMAAAgpZ");
	this.shape_144.setTransform(207,237.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#000000").ss(25,1,1).p("AAAU2MAAAgpr");
	this.shape_145.setTransform(207,238.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#000000").ss(25,1,1).p("AAAVAMAAAgp/");
	this.shape_146.setTransform(207,239.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#000000").ss(25,1,1).p("AAAVJMAAAgqR");
	this.shape_147.setTransform(207,240.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#000000").ss(25,1,1).p("AAAVTMAAAgql");
	this.shape_148.setTransform(207,241.3);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#000000").ss(25,1,1).p("AAAVcMAAAgq3");
	this.shape_149.setTransform(207,242.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#000000").ss(25,1,1).p("AAAVlMAAAgrJ");
	this.shape_150.setTransform(207,243.2);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#000000").ss(25,1,1).p("AAAVuMAAAgrc");
	this.shape_151.setTransform(207,244.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#000000").ss(25,1,1).p("AAAV4MAAAgrv");
	this.shape_152.setTransform(207,245.1);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#000000").ss(25,1,1).p("AAAWBMAAAgsB");
	this.shape_153.setTransform(207,246);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#000000").ss(25,1,1).p("AAAWLMAAAgsV");
	this.shape_154.setTransform(207,246.9);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#000000").ss(25,1,1).p("AAAWUMAAAgsn");
	this.shape_155.setTransform(207,247.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#000000").ss(25,1,1).p("AAAWeMAAAgs7");
	this.shape_156.setTransform(207,248.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#000000").ss(25,1,1).p("AAAWnMAAAgtN");
	this.shape_157.setTransform(207,249.8);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#000000").ss(25,1,1).p("AAAWwMAAAgtf");
	this.shape_158.setTransform(207,250.7);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#000000").ss(25,1,1).p("AAAW6MAAAgtz");
	this.shape_159.setTransform(207,251.6);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#000000").ss(25,1,1).p("AAAXDMAAAguF");
	this.shape_160.setTransform(207,252.6);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#000000").ss(25,1,1).p("AAAXNMAAAguZ");
	this.shape_161.setTransform(207,253.5);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#000000").ss(25,1,1).p("AAAXWMAAAgur");
	this.shape_162.setTransform(207,254.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#000000").ss(25,1,1).p("AAAXfMAAAgu9");
	this.shape_163.setTransform(207,255.4);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#000000").ss(25,1,1).p("AAAXpMAAAgvR");
	this.shape_164.setTransform(207,256.3);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#000000").ss(25,1,1).p("AAAXyMAAAgvj");
	this.shape_165.setTransform(207,257.3);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#000000").ss(25,1,1).p("AAAX8MAAAgv2");
	this.shape_166.setTransform(207,258.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#000000").ss(25,1,1).p("AAAYFMAAAgwJ");
	this.shape_167.setTransform(207,259.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#000000").ss(25,1,1).p("AAAYOMAAAgwb");
	this.shape_168.setTransform(207,260.1);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#000000").ss(25,1,1).p("AAAYYMAAAgwv");
	this.shape_169.setTransform(207,261);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#000000").ss(25,1,1).p("AAAYhMAAAgxB");
	this.shape_170.setTransform(207,262);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#000000").ss(25,1,1).p("AAAYqMAAAgxT");
	this.shape_171.setTransform(207,262.9);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#000000").ss(25,1,1).p("AAAY0MAAAgxn");
	this.shape_172.setTransform(207,263.8);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#000000").ss(25,1,1).p("AAAY9MAAAgx5");
	this.shape_173.setTransform(207,264.8);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#000000").ss(25,1,1).p("AAAZHMAAAgyM");
	this.shape_174.setTransform(207,265.7);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#000000").ss(25,1,1).p("AAAZQMAAAgyf");
	this.shape_175.setTransform(207,266.6);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#000000").ss(25,1,1).p("AAAZZMAAAgyx");
	this.shape_176.setTransform(207,267.6);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#000000").ss(25,1,1).p("AAAZjMAAAgzF");
	this.shape_177.setTransform(207,268.5);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#000000").ss(25,1,1).p("AAAZsMAAAgzX");
	this.shape_178.setTransform(207,269.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#000000").ss(25,1,1).p("AAAZ2MAAAgzq");
	this.shape_179.setTransform(207,270.4);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#000000").ss(25,1,1).p("AAAZ/MAAAgz9");
	this.shape_180.setTransform(207,271.3);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#000000").ss(25,1,1).p("AAAaIMAAAg0P");
	this.shape_181.setTransform(207,272.3);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#000000").ss(25,1,1).p("AAAaSMAAAg0i");
	this.shape_182.setTransform(207,273.2);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#000000").ss(25,1,1).p("AAAabMAAAg01");
	this.shape_183.setTransform(207,274.2);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#000000").ss(25,1,1).p("AAAakMAAAg1H");
	this.shape_184.setTransform(207,275.1);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#000000").ss(25,1,1).p("AAA6tMAAAA1b");
	this.shape_185.setTransform(207,276);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5}]},9).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).wait(245));

	// Base
	this.instance_4 = new lib.Symbol2("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(275,275);
	this.instance_4.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(434));

	// Background
	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#F59E9E").ss(3,1,1).p("AMvQ5I5dAAMAAAghxIZdAAg");
	this.shape_186.setTransform(275,275,3.373,2.543);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_187.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_187},{t:this.shape_186}]}).wait(434));

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