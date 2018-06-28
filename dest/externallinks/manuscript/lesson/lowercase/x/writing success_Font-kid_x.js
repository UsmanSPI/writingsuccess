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


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AJaN1IpasGIpYMGQg2BIhUAAQhFgBg5gyQg5gzAAhJQAAg0AogxIKYtTImJn4QgkgxAAg2QAAhFA3gyQA4gxBIAAQBQAAA2BEIFJGmIFHmrQA3hKBWAAQBHABA5AyQA3AxAABAQAAA7goA3ImJH3IKaNYQAmAxAAA2QAACti1AAQhUAAg3hIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.1,-95.6,184.4,191.3);


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


(lib.ar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-2.8,-52.9,1,1,0,0,0,0.4,-17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-2.3,y:-5.4},35).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AAAggIAABB");
	this.shape.setTransform(-2.8,-42.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AAAgnIAABP");
	this.shape_1.setTransform(-2.8,-42.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AAAgtIABBb");
	this.shape_2.setTransform(-2.8,-41.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("AAAg0IABBp");
	this.shape_3.setTransform(-2.8,-40.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("AAAg7IABB3");
	this.shape_4.setTransform(-2.8,-40.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(5,1,1).p("AAAhCIABCF");
	this.shape_5.setTransform(-2.8,-39.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(5,1,1).p("AAAhIIABCR");
	this.shape_6.setTransform(-2.7,-38.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(5,1,1).p("AAAhPIABCf");
	this.shape_7.setTransform(-2.7,-38.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(5,1,1).p("AAAhWIABCt");
	this.shape_8.setTransform(-2.7,-37.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(5,1,1).p("AAAhdIABC6");
	this.shape_9.setTransform(-2.7,-36.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(5,1,1).p("AAAhjIABDH");
	this.shape_10.setTransform(-2.7,-36.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5,1,1).p("AAAhqIABDV");
	this.shape_11.setTransform(-2.7,-35.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(5,1,1).p("AAAhxIABDi");
	this.shape_12.setTransform(-2.7,-34.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(5,1,1).p("AgBh3IACDv");
	this.shape_13.setTransform(-2.7,-34.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(5,1,1).p("AgBh+IACD9");
	this.shape_14.setTransform(-2.7,-33.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(5,1,1).p("AgBiFIACEK");
	this.shape_15.setTransform(-2.7,-32.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(5,1,1).p("AgBiLIADEX");
	this.shape_16.setTransform(-2.7,-32.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(5,1,1).p("AgBiSIADEl");
	this.shape_17.setTransform(-2.7,-31.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(5,1,1).p("AgBiZIADEy");
	this.shape_18.setTransform(-2.7,-30.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(5,1,1).p("AgBifIADE/");
	this.shape_19.setTransform(-2.7,-30.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(5,1,1).p("AgBimIADFN");
	this.shape_20.setTransform(-2.6,-29.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(5,1,1).p("AgBitIADFb");
	this.shape_21.setTransform(-2.6,-28.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(5,1,1).p("AgBizIADFn");
	this.shape_22.setTransform(-2.6,-28.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(5,1,1).p("AgBi6IADF1");
	this.shape_23.setTransform(-2.6,-27.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(5,1,1).p("AgBjBIADGD");
	this.shape_24.setTransform(-2.6,-26.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(5,1,1).p("AgBjIIADGQ");
	this.shape_25.setTransform(-2.6,-26.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(5,1,1).p("AgBjOIADGd");
	this.shape_26.setTransform(-2.6,-25.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(5,1,1).p("AgCjVIAEGr");
	this.shape_27.setTransform(-2.6,-24.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(5,1,1).p("AgCjcIAEG5");
	this.shape_28.setTransform(-2.6,-24.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(5,1,1).p("AgCjiIAEHF");
	this.shape_29.setTransform(-2.6,-23.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(5,1,1).p("AgCjpIAFHT");
	this.shape_30.setTransform(-2.6,-22.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(5,1,1).p("AgCjwIAFHh");
	this.shape_31.setTransform(-2.6,-22.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(5,1,1).p("AgCj2IAFHt");
	this.shape_32.setTransform(-2.6,-21.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(5,1,1).p("AgCj9IAFH7");
	this.shape_33.setTransform(-2.6,-20.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(5,1,1).p("AgCkEIAFIJ");
	this.shape_34.setTransform(-2.5,-20.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(5,1,1).p("AgCkKIAFIV");
	this.shape_35.setTransform(-2.5,-19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.9,-52.9,24.3,21.9);


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
(lib.writingsuccess_Fontkid_x = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_403 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(403).call(this.frame_403).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(227.8,197.1,0.999,0.999,-6.5,0,0,22.4,-143.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({x:347.2,y:349.5},160).wait(11).to({regX:22.5,rotation:0,skewX:10.7,skewY:-169.3,x:317.9,y:198.7},0).to({x:202,y:352.6},149).wait(10).to({startPosition:0},0).to({guide:{path:[202.1,352.6,182.1,374.5,222.5,398.3,262.9,422.2,337.7,416.5,412.5,410.7,302.6,474.3,247.7,506.1,286.1,550.7,324.4,595.4,456,653]}},64).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(350.6,353.8,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},160).wait(11).to({_off:false,x:201.8,y:352.2},0).to({_off:true},149).wait(75));

	// ar2
	this.instance_1 = new lib.ar1("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(385,177.8,1,1,0,37.1,-142.9,-0.3,-94.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(180).to({_off:false},0).wait(224));

	// ar1
	this.instance_2 = new lib.ar1("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(166.8,178.2,1,1,-38,0,0,-0.1,-94.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(395));

	// 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(25,1,1).p("AAIgJIgPAU");
	this.shape_1.setTransform(319.6,198.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(25,1,1).p("AgLAQIAXge");
	this.shape_2.setTransform(319.2,199.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(25,1,1).p("AgPAVIAfgp");
	this.shape_3.setTransform(318.8,199.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(25,1,1).p("AgTAaIAngz");
	this.shape_4.setTransform(318.4,200.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(25,1,1).p("AgXAfIAvg9");
	this.shape_5.setTransform(318,201);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(25,1,1).p("AgbAkIA3hH");
	this.shape_6.setTransform(317.6,201.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(25,1,1).p("AgfApIA+hR");
	this.shape_7.setTransform(317.2,202);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(25,1,1).p("AgjAuIBHhb");
	this.shape_8.setTransform(316.8,202.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(25,1,1).p("AgmAzIBOhl");
	this.shape_9.setTransform(316.4,203);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(25,1,1).p("AgqA5IBVhx");
	this.shape_10.setTransform(316,203.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(25,1,1).p("AguA+IBdh7");
	this.shape_11.setTransform(315.6,204);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(25,1,1).p("AgyBDIBliF");
	this.shape_12.setTransform(315.2,204.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(25,1,1).p("Ag2BIIBtiP");
	this.shape_13.setTransform(314.9,205);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(25,1,1).p("Ag6BNIB1iZ");
	this.shape_14.setTransform(314.5,205.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(25,1,1).p("Ag+BSIB9ij");
	this.shape_15.setTransform(314.1,206.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(25,1,1).p("AhCBXICFit");
	this.shape_16.setTransform(313.7,206.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(25,1,1).p("AhGBcICNi3");
	this.shape_17.setTransform(313.3,207.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(25,1,1).p("AhKBhICVjB");
	this.shape_18.setTransform(312.9,207.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(25,1,1).p("AhOBnICdjN");
	this.shape_19.setTransform(312.5,208.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(25,1,1).p("AhSBsICljX");
	this.shape_20.setTransform(312.1,208.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(25,1,1).p("AhWBxICsjh");
	this.shape_21.setTransform(311.7,209.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(25,1,1).p("AhaB2IC1jr");
	this.shape_22.setTransform(311.3,209.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(25,1,1).p("AhdB7IC7j1");
	this.shape_23.setTransform(310.9,210.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(25,1,1).p("AhhCAIDDj/");
	this.shape_24.setTransform(310.5,210.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(25,1,1).p("AhlCFIDLkJ");
	this.shape_25.setTransform(310.1,211.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(25,1,1).p("AhpCKIDTkT");
	this.shape_26.setTransform(309.8,211.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(25,1,1).p("AhtCPIDbkd");
	this.shape_27.setTransform(309.4,212.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(25,1,1).p("AhxCVIDjko");
	this.shape_28.setTransform(309,212.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(25,1,1).p("Ah1CaIDrky");
	this.shape_29.setTransform(308.6,213.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(25,1,1).p("Ah5CfIDzk8");
	this.shape_30.setTransform(308.2,213.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(25,1,1).p("Ah9CkID7lH");
	this.shape_31.setTransform(307.8,214.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(25,1,1).p("AiBCpIEDlR");
	this.shape_32.setTransform(307.4,214.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(25,1,1).p("AiFCuIELlb");
	this.shape_33.setTransform(307,215.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(25,1,1).p("AiJCzIETll");
	this.shape_34.setTransform(306.6,215.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(25,1,1).p("AiNC4IEalv");
	this.shape_35.setTransform(306.2,216.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(25,1,1).p("AiQC9IEhl5");
	this.shape_36.setTransform(305.8,216.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(25,1,1).p("AiUDCIEpmD");
	this.shape_37.setTransform(305.4,217.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(25,1,1).p("AiYDHIExmO");
	this.shape_38.setTransform(305,217.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(25,1,1).p("AicDMIE5mY");
	this.shape_39.setTransform(304.6,218.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(25,1,1).p("AigDSIFBmj");
	this.shape_40.setTransform(304.3,218.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(25,1,1).p("AikDXIFJmt");
	this.shape_41.setTransform(303.9,219.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(25,1,1).p("AioDcIFRm3");
	this.shape_42.setTransform(303.5,219.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(25,1,1).p("AisDhIFZnB");
	this.shape_43.setTransform(303.1,220.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(25,1,1).p("AiwDmIFhnL");
	this.shape_44.setTransform(302.7,220.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(25,1,1).p("Ai0DrIFpnV");
	this.shape_45.setTransform(302.3,221.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(25,1,1).p("Ai3DwIFwnf");
	this.shape_46.setTransform(301.9,221.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(25,1,1).p("Ai8D2IF5nq");
	this.shape_47.setTransform(301.5,222.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(25,1,1).p("AjAD7IGBn0");
	this.shape_48.setTransform(301.1,222.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(25,1,1).p("AjDEAIGHn/");
	this.shape_49.setTransform(300.7,223.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(25,1,1).p("AjHEFIGPoJ");
	this.shape_50.setTransform(300.3,223.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(25,1,1).p("AjLEKIGXoT");
	this.shape_51.setTransform(299.9,224.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(25,1,1).p("AjPEPIGfod");
	this.shape_52.setTransform(299.5,225);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(25,1,1).p("AjTEUIGnon");
	this.shape_53.setTransform(299.2,225.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(25,1,1).p("AjXEZIGvox");
	this.shape_54.setTransform(298.8,226);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(25,1,1).p("AjbEeIG3o7");
	this.shape_55.setTransform(298.4,226.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(25,1,1).p("AjfEjIG/pG");
	this.shape_56.setTransform(298,227);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(25,1,1).p("AjjEoIHHpQ");
	this.shape_57.setTransform(297.6,227.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(25,1,1).p("AjnEtIHPpa");
	this.shape_58.setTransform(297.2,228);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(25,1,1).p("AjrEzIHXpl");
	this.shape_59.setTransform(296.8,228.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(25,1,1).p("AjuE4IHepv");
	this.shape_60.setTransform(296.4,229);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(25,1,1).p("AjzE9IHnp5");
	this.shape_61.setTransform(296,229.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(25,1,1).p("Aj3FCIHvqD");
	this.shape_62.setTransform(295.6,230.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(25,1,1).p("Aj6FHIH1qN");
	this.shape_63.setTransform(295.2,230.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(25,1,1).p("Aj+FMIH9qX");
	this.shape_64.setTransform(294.8,231.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(25,1,1).p("AkCFSIIFqj");
	this.shape_65.setTransform(294.4,231.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(25,1,1).p("AkGFXIINqt");
	this.shape_66.setTransform(294.1,232.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(25,1,1).p("AkKFcIIVq3");
	this.shape_67.setTransform(293.7,232.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(25,1,1).p("AkOFhIIdrB");
	this.shape_68.setTransform(293.3,233.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(25,1,1).p("AkSFmIIlrL");
	this.shape_69.setTransform(292.9,233.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(25,1,1).p("AkWFrIItrV");
	this.shape_70.setTransform(292.5,234.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(25,1,1).p("AkaFwII1rf");
	this.shape_71.setTransform(292.1,234.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(25,1,1).p("AkeF1II9rp");
	this.shape_72.setTransform(291.7,235.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(25,1,1).p("AkiF6IJFrz");
	this.shape_73.setTransform(291.3,235.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(25,1,1).p("AklF/IJMr9");
	this.shape_74.setTransform(290.9,236.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(25,1,1).p("AkqGFIJVsI");
	this.shape_75.setTransform(290.5,236.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(25,1,1).p("AktGKIJbsS");
	this.shape_76.setTransform(290.1,237.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(25,1,1).p("AkxGPIJjsd");
	this.shape_77.setTransform(289.7,237.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(25,1,1).p("Ak1GUIJrsn");
	this.shape_78.setTransform(289.3,238.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(25,1,1).p("Ak5GZIJzsx");
	this.shape_79.setTransform(289,238.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(25,1,1).p("Ak9GeIJ7s7");
	this.shape_80.setTransform(288.6,239.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(25,1,1).p("AlBGjIKDtF");
	this.shape_81.setTransform(288.2,239.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(25,1,1).p("AlFGoIKLtP");
	this.shape_82.setTransform(287.8,240.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(25,1,1).p("AlJGtIKTtZ");
	this.shape_83.setTransform(287.4,240.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(25,1,1).p("AlNGyIKbtk");
	this.shape_84.setTransform(287,241.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(25,1,1).p("AlRG3IKjtu");
	this.shape_85.setTransform(286.6,241.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(25,1,1).p("AlVG8IKqt4");
	this.shape_86.setTransform(286.2,242.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(25,1,1).p("AlZHCIKzuD");
	this.shape_87.setTransform(285.8,242.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(25,1,1).p("AlcHHIK6uN");
	this.shape_88.setTransform(285.4,243.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(25,1,1).p("AlgHMILBuX");
	this.shape_89.setTransform(285,243.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(25,1,1).p("AlkHRILJuh");
	this.shape_90.setTransform(284.6,244.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(25,1,1).p("AloHWILRur");
	this.shape_91.setTransform(284.2,244.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(25,1,1).p("AlsHbILZu1");
	this.shape_92.setTransform(283.8,245.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(25,1,1).p("AlwHhILhvA");
	this.shape_93.setTransform(283.5,245.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(25,1,1).p("Al0HmILpvK");
	this.shape_94.setTransform(283.1,246.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(25,1,1).p("Al4HrILxvU");
	this.shape_95.setTransform(282.7,246.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(25,1,1).p("Al8HwIL5vf");
	this.shape_96.setTransform(282.3,247.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(25,1,1).p("AmAH1IMBvp");
	this.shape_97.setTransform(281.9,247.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(25,1,1).p("AmEH6IMJvz");
	this.shape_98.setTransform(281.5,248.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(25,1,1).p("AmIH/IMRv9");
	this.shape_99.setTransform(281.1,249);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(25,1,1).p("AmMIEIMYwH");
	this.shape_100.setTransform(280.7,249.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(25,1,1).p("AmQIJIMhwR");
	this.shape_101.setTransform(280.3,250);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(25,1,1).p("AmTIOIMowb");
	this.shape_102.setTransform(279.9,250.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(25,1,1).p("AmXITIMvwm");
	this.shape_103.setTransform(279.5,251);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(25,1,1).p("AmbIYIM3ww");
	this.shape_104.setTransform(279.1,251.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(25,1,1).p("AmfIeIM/w7");
	this.shape_105.setTransform(278.7,252);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(25,1,1).p("AmjIjINHxF");
	this.shape_106.setTransform(278.4,252.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(25,1,1).p("AmnIoINPxP");
	this.shape_107.setTransform(278,253.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(25,1,1).p("AmrItINXxZ");
	this.shape_108.setTransform(277.6,253.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(25,1,1).p("AmvIyINfxj");
	this.shape_109.setTransform(277.2,254.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(25,1,1).p("AmzI3INnxt");
	this.shape_110.setTransform(276.8,254.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(25,1,1).p("Am3I8INvx3");
	this.shape_111.setTransform(276.4,255.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(25,1,1).p("Am6JCIN2yD");
	this.shape_112.setTransform(276,255.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(25,1,1).p("Am/JHIN/yN");
	this.shape_113.setTransform(275.6,256.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(25,1,1).p("AnDJMIOGyX");
	this.shape_114.setTransform(275.2,256.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(25,1,1).p("AnHJRIOPyh");
	this.shape_115.setTransform(274.8,257.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(25,1,1).p("AnKJWIOVyr");
	this.shape_116.setTransform(274.4,257.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(25,1,1).p("AnOJbIOdy1");
	this.shape_117.setTransform(274,258.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(25,1,1).p("AnSJgIOly/");
	this.shape_118.setTransform(273.6,258.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(25,1,1).p("AnWJlIOtzJ");
	this.shape_119.setTransform(273.3,259.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(25,1,1).p("AnaJqIO1zT");
	this.shape_120.setTransform(272.9,259.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(25,1,1).p("AneJwIO9zf");
	this.shape_121.setTransform(272.5,260.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(25,1,1).p("AniJ1IPFzp");
	this.shape_122.setTransform(272.1,260.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(25,1,1).p("AnmJ6IPNzz");
	this.shape_123.setTransform(271.7,261.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(25,1,1).p("AnqJ/IPVz9");
	this.shape_124.setTransform(271.3,261.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(25,1,1).p("AnuKEIPd0H");
	this.shape_125.setTransform(270.9,262.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(25,1,1).p("AnxKJIPk0R");
	this.shape_126.setTransform(270.5,262.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(25,1,1).p("An2KOIPt0b");
	this.shape_127.setTransform(270.1,263.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(25,1,1).p("An6KTIP00l");
	this.shape_128.setTransform(269.7,263.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(25,1,1).p("An9KYIP70v");
	this.shape_129.setTransform(269.3,264.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(25,1,1).p("AoBKdIQD05");
	this.shape_130.setTransform(268.9,264.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").ss(25,1,1).p("AoFKiIQL1E");
	this.shape_131.setTransform(268.5,265.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(25,1,1).p("AoJKnIQT1O");
	this.shape_132.setTransform(268.2,265.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(25,1,1).p("AoNKtIQb1Z");
	this.shape_133.setTransform(267.8,266.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(25,1,1).p("AoRKyIQj1j");
	this.shape_134.setTransform(267.4,266.8);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#000000").ss(25,1,1).p("AoVK3IQr1t");
	this.shape_135.setTransform(267,267.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#000000").ss(25,1,1).p("AoZK8IQz13");
	this.shape_136.setTransform(266.6,267.9);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#000000").ss(25,1,1).p("AodLBIQ72B");
	this.shape_137.setTransform(266.2,268.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").ss(25,1,1).p("AohLGIRD2L");
	this.shape_138.setTransform(265.8,268.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#000000").ss(25,1,1).p("AokLLIRK2V");
	this.shape_139.setTransform(265.4,269.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").ss(25,1,1).p("AopLRIRT2g");
	this.shape_140.setTransform(265,269.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#000000").ss(25,1,1).p("AotLWIRb2q");
	this.shape_141.setTransform(264.6,270.4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#000000").ss(25,1,1).p("AowLbIRh21");
	this.shape_142.setTransform(264.2,270.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#000000").ss(25,1,1).p("Ao0LgIRp2/");
	this.shape_143.setTransform(263.8,271.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#000000").ss(25,1,1).p("Ao4LlIRx3J");
	this.shape_144.setTransform(263.4,271.9);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#000000").ss(25,1,1).p("Ao8LqIR53T");
	this.shape_145.setTransform(263,272.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#000000").ss(25,1,1).p("ApALvISB3d");
	this.shape_146.setTransform(262.7,273);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#000000").ss(25,1,1).p("ApEL0ISJ3n");
	this.shape_147.setTransform(262.3,273.5);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#000000").ss(25,1,1).p("ApIL5ISR3x");
	this.shape_148.setTransform(261.9,274);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#000000").ss(25,1,1).p("ApML+ISZ38");
	this.shape_149.setTransform(261.5,274.5);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#000000").ss(25,1,1).p("ApPsEISfYJ");
	this.shape_150.setTransform(261.1,275,1,1,75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},180).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).wait(75));

	// 1
	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#000000").ss(25,1,1).p("AgDgEIAHAJ");
	this.shape_151.setTransform(228.2,198.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#000000").ss(25,1,1).p("AgHgJIAPAT");
	this.shape_152.setTransform(228.5,198.9);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#000000").ss(25,1,1).p("AgLgOIAXAd");
	this.shape_153.setTransform(228.9,199.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#000000").ss(25,1,1).p("AgOgTIAdAm");
	this.shape_154.setTransform(229.3,199.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#000000").ss(25,1,1).p("AgSgXIAlAv");
	this.shape_155.setTransform(229.7,200.3);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#000000").ss(25,1,1).p("AgWgcIAtA5");
	this.shape_156.setTransform(230,200.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#000000").ss(25,1,1).p("AgaghIA1BD");
	this.shape_157.setTransform(230.4,201.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#000000").ss(25,1,1).p("AgdglIA7BM");
	this.shape_158.setTransform(230.8,201.7);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#000000").ss(25,1,1).p("AghgqIBDBV");
	this.shape_159.setTransform(231.2,202.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#000000").ss(25,1,1).p("AglgvIBLBf");
	this.shape_160.setTransform(231.5,202.7);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#000000").ss(25,1,1).p("Agog0IBRBp");
	this.shape_161.setTransform(231.9,203.2);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#000000").ss(25,1,1).p("Agsg5IBZBz");
	this.shape_162.setTransform(232.3,203.6);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#000000").ss(25,1,1).p("Agwg+IBhB9");
	this.shape_163.setTransform(232.6,204.1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#000000").ss(25,1,1).p("Ag0hCIBpCF");
	this.shape_164.setTransform(233,204.6);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#000000").ss(25,1,1).p("Ag3hHIBvCP");
	this.shape_165.setTransform(233.4,205.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#000000").ss(25,1,1).p("Ag7hMIB3CZ");
	this.shape_166.setTransform(233.8,205.5);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#000000").ss(25,1,1).p("Ag/hRIB/Cj");
	this.shape_167.setTransform(234.1,206);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#000000").ss(25,1,1).p("AhDhVICHCr");
	this.shape_168.setTransform(234.5,206.5);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#000000").ss(25,1,1).p("AhGhaICNC1");
	this.shape_169.setTransform(234.9,207);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#000000").ss(25,1,1).p("AhKhfICVC/");
	this.shape_170.setTransform(235.3,207.4);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#000000").ss(25,1,1).p("AhOhjICdDI");
	this.shape_171.setTransform(235.6,207.9);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#000000").ss(25,1,1).p("AhShoIClDR");
	this.shape_172.setTransform(236,208.4);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#000000").ss(25,1,1).p("AhVhtICrDb");
	this.shape_173.setTransform(236.4,208.9);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#000000").ss(25,1,1).p("AhZhyICzDl");
	this.shape_174.setTransform(236.8,209.3);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#000000").ss(25,1,1).p("Ahdh3IC7Du");
	this.shape_175.setTransform(237.1,209.8);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#000000").ss(25,1,1).p("Ahhh7IDDD3");
	this.shape_176.setTransform(237.5,210.3);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#000000").ss(25,1,1).p("AhkiAIDJEB");
	this.shape_177.setTransform(237.9,210.8);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#000000").ss(25,1,1).p("AhoiFIDREL");
	this.shape_178.setTransform(238.2,211.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#000000").ss(25,1,1).p("AhriJIDXEU");
	this.shape_179.setTransform(238.6,211.7);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#000000").ss(25,1,1).p("AhviOIDfEd");
	this.shape_180.setTransform(239,212.2);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#000000").ss(25,1,1).p("AhziTIDnEn");
	this.shape_181.setTransform(239.4,212.7);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#000000").ss(25,1,1).p("Ah3iYIDvEx");
	this.shape_182.setTransform(239.7,213.2);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#000000").ss(25,1,1).p("Ah6idID1E7");
	this.shape_183.setTransform(240.1,213.6);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#000000").ss(25,1,1).p("Ah+iiID9FF");
	this.shape_184.setTransform(240.5,214.1);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#000000").ss(25,1,1).p("AiCimIEFFN");
	this.shape_185.setTransform(240.9,214.6);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#000000").ss(25,1,1).p("AiGirIENFX");
	this.shape_186.setTransform(241.2,215.1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#000000").ss(25,1,1).p("AiJiwIETFh");
	this.shape_187.setTransform(241.6,215.5);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#000000").ss(25,1,1).p("AiNi1IEbFr");
	this.shape_188.setTransform(242,216);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#000000").ss(25,1,1).p("AiRi5IEjFz");
	this.shape_189.setTransform(242.4,216.5);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#000000").ss(25,1,1).p("AiVi+IErF9");
	this.shape_190.setTransform(242.7,217);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#000000").ss(25,1,1).p("AiYjDIExGH");
	this.shape_191.setTransform(243.1,217.4);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#000000").ss(25,1,1).p("AicjHIE5GQ");
	this.shape_192.setTransform(243.5,217.9);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#000000").ss(25,1,1).p("AigjMIFBGZ");
	this.shape_193.setTransform(243.9,218.4);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#000000").ss(25,1,1).p("AikjRIFJGj");
	this.shape_194.setTransform(244.2,218.9);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#000000").ss(25,1,1).p("AinjWIFPGt");
	this.shape_195.setTransform(244.6,219.3);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#000000").ss(25,1,1).p("AirjbIFXG2");
	this.shape_196.setTransform(245,219.8);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#000000").ss(25,1,1).p("AivjfIFfG/");
	this.shape_197.setTransform(245.3,220.3);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#000000").ss(25,1,1).p("AiyjkIFlHJ");
	this.shape_198.setTransform(245.7,220.8);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#000000").ss(25,1,1).p("Ai2jpIFtHT");
	this.shape_199.setTransform(246.1,221.2);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#000000").ss(25,1,1).p("Ai6jtIF1Hc");
	this.shape_200.setTransform(246.5,221.7);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#000000").ss(25,1,1).p("Ai+jyIF9Hm");
	this.shape_201.setTransform(246.8,222.2);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#000000").ss(25,1,1).p("AjBj3IGDHv");
	this.shape_202.setTransform(247.2,222.7);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#000000").ss(25,1,1).p("AjFj8IGLH5");
	this.shape_203.setTransform(247.6,223.2);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#000000").ss(25,1,1).p("AjJkBIGTID");
	this.shape_204.setTransform(248,223.6);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#000000").ss(25,1,1).p("AjNkGIGbIM");
	this.shape_205.setTransform(248.3,224.1);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#000000").ss(25,1,1).p("AjQkKIGhIV");
	this.shape_206.setTransform(248.7,224.6);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#000000").ss(25,1,1).p("AjUkPIGpIf");
	this.shape_207.setTransform(249.1,225.1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#000000").ss(25,1,1).p("AjYkUIGxIp");
	this.shape_208.setTransform(249.5,225.5);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#000000").ss(25,1,1).p("AjckZIG5Iz");
	this.shape_209.setTransform(249.8,226);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#000000").ss(25,1,1).p("AjfkdIG/I7");
	this.shape_210.setTransform(250.2,226.5);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#000000").ss(25,1,1).p("AjjkiIHHJF");
	this.shape_211.setTransform(250.6,227);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#000000").ss(25,1,1).p("AjnknIHPJP");
	this.shape_212.setTransform(251,227.4);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#000000").ss(25,1,1).p("AjrkrIHXJY");
	this.shape_213.setTransform(251.3,227.9);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#000000").ss(25,1,1).p("AjukwIHdJh");
	this.shape_214.setTransform(251.7,228.4);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#000000").ss(25,1,1).p("Ajyk1IHlJr");
	this.shape_215.setTransform(252.1,228.9);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#000000").ss(25,1,1).p("Aj2k6IHtJ1");
	this.shape_216.setTransform(252.4,229.3);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#000000").ss(25,1,1).p("Aj6k/IH1J+");
	this.shape_217.setTransform(252.8,229.8);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#000000").ss(25,1,1).p("Aj9lDIH7KH");
	this.shape_218.setTransform(253.2,230.3);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#000000").ss(25,1,1).p("AkBlIIIDKR");
	this.shape_219.setTransform(253.6,230.8);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#000000").ss(25,1,1).p("AkFlNIILKb");
	this.shape_220.setTransform(253.9,231.2);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#000000").ss(25,1,1).p("AkJlSIITKl");
	this.shape_221.setTransform(254.3,231.7);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#000000").ss(25,1,1).p("AkMlWIIZKu");
	this.shape_222.setTransform(254.7,232.2);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#000000").ss(25,1,1).p("AkQlbIIhK3");
	this.shape_223.setTransform(255.1,232.7);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#000000").ss(25,1,1).p("AkUlgIIpLB");
	this.shape_224.setTransform(255.4,233.2);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#000000").ss(25,1,1).p("AkYllIIxLL");
	this.shape_225.setTransform(255.8,233.6);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#000000").ss(25,1,1).p("AkblqII3LV");
	this.shape_226.setTransform(256.2,234.1);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#000000").ss(25,1,1).p("AkfluII/Ld");
	this.shape_227.setTransform(256.6,234.6);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#000000").ss(25,1,1).p("AkjlzIJHLn");
	this.shape_228.setTransform(256.9,235.1);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#000000").ss(25,1,1).p("Aknl4IJPLx");
	this.shape_229.setTransform(257.3,235.5);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#000000").ss(25,1,1).p("Akql9IJVL6");
	this.shape_230.setTransform(257.7,236);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#000000").ss(25,1,1).p("AkumBIJdMD");
	this.shape_231.setTransform(258.1,236.5);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#000000").ss(25,1,1).p("AkxmGIJkMN");
	this.shape_232.setTransform(258.4,237);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#000000").ss(25,1,1).p("Ak1mLIJrMX");
	this.shape_233.setTransform(258.8,237.4);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#000000").ss(25,1,1).p("Ak5mPIJzMg");
	this.shape_234.setTransform(259.2,237.9);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#000000").ss(25,1,1).p("Ak9mUIJ7Mp");
	this.shape_235.setTransform(259.5,238.4);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#000000").ss(25,1,1).p("AlAmZIKCMz");
	this.shape_236.setTransform(259.9,238.9);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#000000").ss(25,1,1).p("AlEmeIKJM9");
	this.shape_237.setTransform(260.3,239.3);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#000000").ss(25,1,1).p("AlImjIKRNG");
	this.shape_238.setTransform(260.7,239.8);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#000000").ss(25,1,1).p("AlMmnIKZNP");
	this.shape_239.setTransform(261,240.3);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#000000").ss(25,1,1).p("AlPmsIKgNZ");
	this.shape_240.setTransform(261.4,240.8);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#000000").ss(25,1,1).p("AlTmxIKnNj");
	this.shape_241.setTransform(261.8,241.3);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#000000").ss(25,1,1).p("AlXm2IKvNt");
	this.shape_242.setTransform(262.2,241.7);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#000000").ss(25,1,1).p("Albm6IK3N2");
	this.shape_243.setTransform(262.5,242.2);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#000000").ss(25,1,1).p("Alem/IK+N/");
	this.shape_244.setTransform(262.9,242.7);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("#000000").ss(25,1,1).p("AlinEILFOJ");
	this.shape_245.setTransform(263.3,243.2);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#000000").ss(25,1,1).p("AlmnJILNOT");
	this.shape_246.setTransform(263.7,243.6);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("#000000").ss(25,1,1).p("AlqnOILVOd");
	this.shape_247.setTransform(264,244.1);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#000000").ss(25,1,1).p("AltnSILcOl");
	this.shape_248.setTransform(264.4,244.6);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#000000").ss(25,1,1).p("AlxnXILjOv");
	this.shape_249.setTransform(264.8,245.1);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#000000").ss(25,1,1).p("Al1ncILrO5");
	this.shape_250.setTransform(265.1,245.5);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#000000").ss(25,1,1).p("Al5nhILzPC");
	this.shape_251.setTransform(265.5,246);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#000000").ss(25,1,1).p("Al8nlIL5PL");
	this.shape_252.setTransform(265.9,246.5);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#000000").ss(25,1,1).p("AmAnqIMBPV");
	this.shape_253.setTransform(266.3,247);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#000000").ss(25,1,1).p("AmEnvIMJPf");
	this.shape_254.setTransform(266.6,247.4);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("#000000").ss(25,1,1).p("AmInzIMRPo");
	this.shape_255.setTransform(267,247.9);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#000000").ss(25,1,1).p("AmLn4IMXPx");
	this.shape_256.setTransform(267.4,248.4);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("#000000").ss(25,1,1).p("AmPn9IMfP7");
	this.shape_257.setTransform(267.8,248.9);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#000000").ss(25,1,1).p("AmToCIMnQF");
	this.shape_258.setTransform(268.1,249.3);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("#000000").ss(25,1,1).p("AmXoHIMvQO");
	this.shape_259.setTransform(268.5,249.8);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#000000").ss(25,1,1).p("AmaoLIM1QX");
	this.shape_260.setTransform(268.9,250.3);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("#000000").ss(25,1,1).p("AmeoQIM9Qh");
	this.shape_261.setTransform(269.3,250.8);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#000000").ss(25,1,1).p("AmioVINFQr");
	this.shape_262.setTransform(269.6,251.3);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#000000").ss(25,1,1).p("AmmoaINNQ1");
	this.shape_263.setTransform(270,251.7);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#000000").ss(25,1,1).p("AmpofINTQ/");
	this.shape_264.setTransform(270.4,252.2);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("#000000").ss(25,1,1).p("AmtojINbRH");
	this.shape_265.setTransform(270.8,252.7);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#000000").ss(25,1,1).p("AmxooINjRR");
	this.shape_266.setTransform(271.1,253.2);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("#000000").ss(25,1,1).p("Am0otINpRb");
	this.shape_267.setTransform(271.5,253.6);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#000000").ss(25,1,1).p("Am4oyINxRl");
	this.shape_268.setTransform(271.9,254.1);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#000000").ss(25,1,1).p("Am8o2IN5Rt");
	this.shape_269.setTransform(272.2,254.6);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#000000").ss(25,1,1).p("AnAo7IOAR3");
	this.shape_270.setTransform(272.6,255.1);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("#000000").ss(25,1,1).p("AnDpAIOHSB");
	this.shape_271.setTransform(273,255.5);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#000000").ss(25,1,1).p("AnHpFIOPSK");
	this.shape_272.setTransform(273.4,256);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("#000000").ss(25,1,1).p("AnLpJIOXST");
	this.shape_273.setTransform(273.7,256.5);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#000000").ss(25,1,1).p("AnPpOIOeSd");
	this.shape_274.setTransform(274.1,257);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("#000000").ss(25,1,1).p("AnSpTIOlSn");
	this.shape_275.setTransform(274.5,257.4);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#000000").ss(25,1,1).p("AnWpXIOtSw");
	this.shape_276.setTransform(274.9,257.9);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f().s("#000000").ss(25,1,1).p("AnapcIO1S5");
	this.shape_277.setTransform(275.2,258.4);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#000000").ss(25,1,1).p("AnephIO8TD");
	this.shape_278.setTransform(275.6,258.9);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f().s("#000000").ss(25,1,1).p("AnhpmIPDTN");
	this.shape_279.setTransform(276,259.3);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#000000").ss(25,1,1).p("AnlprIPLTW");
	this.shape_280.setTransform(276.4,259.8);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f().s("#000000").ss(25,1,1).p("AnppwIPTTg");
	this.shape_281.setTransform(276.7,260.3);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("#000000").ss(25,1,1).p("Antp0IPaTp");
	this.shape_282.setTransform(277.1,260.8);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f().s("#000000").ss(25,1,1).p("Anwp5IPhTz");
	this.shape_283.setTransform(277.5,261.3);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("#000000").ss(25,1,1).p("An0p+IPpT9");
	this.shape_284.setTransform(277.9,261.7);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f().s("#000000").ss(25,1,1).p("An3qDIPvUH");
	this.shape_285.setTransform(278.2,262.2);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("#000000").ss(25,1,1).p("An7qHIP3UP");
	this.shape_286.setTransform(278.6,262.7);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f().s("#000000").ss(25,1,1).p("An/qMIP/UZ");
	this.shape_287.setTransform(279,263.2);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("#000000").ss(25,1,1).p("AoDqRIQHUj");
	this.shape_288.setTransform(279.3,263.6);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f().s("#000000").ss(25,1,1).p("AoGqWIQNUt");
	this.shape_289.setTransform(279.7,264.1);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f().s("#000000").ss(25,1,1).p("AoKqaIQVU1");
	this.shape_290.setTransform(280.1,264.6);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f().s("#000000").ss(25,1,1).p("AoOqfIQdU/");
	this.shape_291.setTransform(280.5,265.1);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f().s("#000000").ss(25,1,1).p("AoSqkIQlVJ");
	this.shape_292.setTransform(280.8,265.5);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f().s("#000000").ss(25,1,1).p("AoVqpIQrVS");
	this.shape_293.setTransform(281.2,266);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("#000000").ss(25,1,1).p("AoZqtIQzVb");
	this.shape_294.setTransform(281.6,266.5);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f().s("#000000").ss(25,1,1).p("AodqyIQ7Vl");
	this.shape_295.setTransform(282,267);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f().s("#000000").ss(25,1,1).p("Aohq3IRDVv");
	this.shape_296.setTransform(282.3,267.4);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f().s("#000000").ss(25,1,1).p("Aokq7IRJV4");
	this.shape_297.setTransform(282.7,267.9);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f().s("#000000").ss(25,1,1).p("AoorAIRRWB");
	this.shape_298.setTransform(283.1,268.4);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f().s("#000000").ss(25,1,1).p("AosrFIRZWL");
	this.shape_299.setTransform(283.5,268.9);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f().s("#000000").ss(25,1,1).p("AowrKIRhWV");
	this.shape_300.setTransform(283.8,269.3);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f().s("#000000").ss(25,1,1).p("AozrPIRnWf");
	this.shape_301.setTransform(284.2,269.8);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f().s("#000000").ss(25,1,1).p("Ao3rUIRvWo");
	this.shape_302.setTransform(284.6,270.3);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f().s("#000000").ss(25,1,1).p("Ao7rYIR3Wx");
	this.shape_303.setTransform(284.9,270.8);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f().s("#000000").ss(25,1,1).p("Ao/rdIR/W7");
	this.shape_304.setTransform(285.3,271.3);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f().s("#000000").ss(25,1,1).p("ApCriISFXF");
	this.shape_305.setTransform(285.7,271.7);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f().s("#000000").ss(25,1,1).p("ApGrnISNXP");
	this.shape_306.setTransform(286.1,272.2);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f().s("#000000").ss(25,1,1).p("ApKrrISVXX");
	this.shape_307.setTransform(286.4,272.7);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f().s("#000000").ss(25,1,1).p("ApOrwISdXh");
	this.shape_308.setTransform(286.8,273.2);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f().s("#000000").ss(25,1,1).p("ApRr1ISjXr");
	this.shape_309.setTransform(287.2,273.6);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f().s("#000000").ss(25,1,1).p("ApVr6ISrX1");
	this.shape_310.setTransform(287.6,274.1);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f().s("#000000").ss(25,1,1).p("ApZr+ISzX9");
	this.shape_311.setTransform(287.9,274.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_151}]},9).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).to({state:[{t:this.shape_273}]},1).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_282}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_289}]},1).to({state:[{t:this.shape_290}]},1).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_293}]},1).to({state:[{t:this.shape_294}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_299}]},1).to({state:[{t:this.shape_300}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_304}]},1).to({state:[{t:this.shape_305}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_308}]},1).to({state:[{t:this.shape_309}]},1).to({state:[{t:this.shape_310}]},1).to({state:[{t:this.shape_311}]},1).wait(235));

	// Base
	this.instance_3 = new lib.Symbol1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(275,275);
	this.instance_3.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(404));

	// Background
	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_312.setTransform(275,275,3.373,2.543);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_313.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_313},{t:this.shape_312}]}).wait(404));

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