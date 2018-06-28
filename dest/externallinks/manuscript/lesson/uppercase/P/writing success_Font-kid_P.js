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
	this.shape.graphics.f("#FFFFFF").s().p("A28afMAAAg1JQAAibCuAAIb8AAQHKAAEQE9QD1EcAAGbQAAGZj3EeQkUE/nNAAI5DAAIAAX6QAACni0AAQiqAAAAingAxei/IZDAAQEtAACvjQQCii2AAkQQAAkQiii9QivjLkzAAI49AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146.9,-186.2,293.9,372.5);


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

	// Layer 5
	this.instance = new lib.triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-70.3,-51.2,1,1,-90,0,0,0.4,-17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[-70.3,-51,-22.9,-51,24.4,-51]}},104).to({scaleX:1,scaleY:1,rotation:14.8,guide:{path:[24.5,-51,27.5,-51.1,30.4,-51.2,30.7,-51.2,31,-51.2,49.3,-51.2,62.3,-37.7,75.3,-24.3,75.3,-5.4]}},31).to({regX:0.5,scaleX:1,scaleY:1,rotation:56.4,guide:{path:[75.3,-5.2,75.3,-5.1,75.3,-5,75.3,10.5,66.8,23.5]}},13).to({scaleX:1,scaleY:1,rotation:78.2,guide:{path:[66.9,23.5,65,26.4,62.6,29.2,59.4,33.1,56.3,35.7]}},6).to({rotation:84.2,guide:{path:[56.2,35.6,54,37.5,51.7,38.7]}},10).wait(1));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_104 = new cjs.Graphics().p("AkFGiQisjnArkcQAqkdDoisQDmisEeArIjNVgQkcgrisjog");
	var mask_graphics_105 = new cjs.Graphics().p("AkqGJQigjvA5kaQA4kbDwigQDvigEbA5IkRVUQkag4igjxg");
	var mask_graphics_106 = new cjs.Graphics().p("AlNFwQiUj3BHkXQBGkXD4iVQD2iTEYBGIlUVFQkXhGiUj4g");
	var mask_graphics_107 = new cjs.Graphics().p("AlvFXQiHj/BVkSQBUkUD+iIQD+iHEUBUImXUzQkThUiIj/g");
	var mask_graphics_108 = new cjs.Graphics().p("AmOE9Qh7kEBikPQBikPEFh7QEEh6EPBiInXUdQkQhih6kGg");
	var mask_graphics_109 = new cjs.Graphics().p("AmsEkQhukKBwkKQBvkKELhtQEJhtEKBvIoYUDQkKhvhtkLg");
	var mask_graphics_110 = new cjs.Graphics().p("AnIELQhgkPB8kEQB8kEEQhhQEPhfEEB8IpXTnQkEh8hgkQg");
	var mask_graphics_111 = new cjs.Graphics().p("AnjDyQhSkTCJj+QCJj+EUhTQEUhSD+CJIqVTIQj+iJhTkUg");
	var mask_graphics_112 = new cjs.Graphics().p("An7DZQhEkXCVj3QCWj2EXhFQEYhED2CVIrRSmQj2iWhFkYg");
	var mask_graphics_113 = new cjs.Graphics().p("AoRDAQg3kaCijvQCijuEag3QEbg3DvCiIsMSAQjuiig3kbg");
	var mask_graphics_114 = new cjs.Graphics().p("AolCoQgokcCtjnQCtjmEdgpQEdgoDnCtItERYQjmitgpkeg");
	var mask_graphics_115 = new cjs.Graphics().p("Ao3CQQgakeC5jeQC4jdEegbQEfgaDeC5It6QtQjdi5gbkfg");
	var mask_graphics_116 = new cjs.Graphics().p("ApGB5QgMkfDDjUQDDjUEggNQEggLDUDDIuuP/QjUjDgMkgg");
	var mask_graphics_117 = new cjs.Graphics().p("ApTBiQACkfDOjKQDNjKEgACQEgACDKDOIvfPPQjLjNADkhg");
	var mask_graphics_118 = new cjs.Graphics().p("ApeBMQARkeDXjAQDYjAEfARQEfARDADXIwPOdQjAjYARkgg");
	var mask_graphics_119 = new cjs.Graphics().p("ApmA3QAfkdDhi1QDgi1EeAfQEfAfC0DhIw7NoQi1jhAfkfg");
	var mask_graphics_120 = new cjs.Graphics().p("ApsAjQAukcDpipQDpiqEcAtQEdAuCpDpIxlMxQiqjpAtkdg");
	var mask_graphics_121 = new cjs.Graphics().p("ApvAPQA7kZDyidQDxieEZA7QEbA8CdDxIyNL4QidjxA7kbg");
	var mask_graphics_122 = new cjs.Graphics().p("ApwgDQBJkWD5iSQD5iREWBJQEXBJCRD5IyxK+QiRj5BJkXg");
	var mask_graphics_123 = new cjs.Graphics().p("ApugVQBWkSEAiFQEAiFESBXQETBXCFEAIzTKBQiFkABYkTg");
	var mask_graphics_124 = new cjs.Graphics().p("AprgmQBlkOEGh4QEFh4EOBlQEPBkB4EHIzxJCQh4kGBkkOg");
	var mask_graphics_125 = new cjs.Graphics().p("Aplg2QBykJEMhqQELhrEJBxQEJByBqEMI0MIDQhrkMBykIg");
	var mask_graphics_126 = new cjs.Graphics().p("ApchFQB+kDERhdQEQheEDB/QEDB/BdEQI0kHDQhdkRB/kCg");
	var mask_graphics_127 = new cjs.Graphics().p("ApShTQCMj8EVhQQEUhQD9CLQD8CMBQEUI06GBQhPkVCLj7g");
	var mask_graphics_128 = new cjs.Graphics().p("ApFhhQCYj1EZhBQEYhCD1CXQD1CZBCEXI1LE+QhCkYCYj1g");
	var mask_graphics_129 = new cjs.Graphics().p("Ao1htQCjjtEcg0QEbg0DtCkQDtCkA0EbI1ZD6QgzkbCkjtg");
	var mask_graphics_130 = new cjs.Graphics().p("Aokh4QCvjlEeglQEdgmDlCvQDlCwAmEdI1kC2QgmkeCwjkg");
	var mask_graphics_131 = new cjs.Graphics().p("AoQiCQC6jbEggYQEegXDcC6QDcC7AXEeI1rByQgXkgC7jbg");
	var mask_graphics_132 = new cjs.Graphics().p("An6iLQDFjSEggJQEfgJDTDFQDSDFAJEgI1vAsQgJkgDGjSg");
	var mask_graphics_133 = new cjs.Graphics().p("Aq3FJQAFkgDQjHQDPjIEfAFQEhAFDIDPQDIDPgFEgg");
	var mask_graphics_134 = new cjs.Graphics().p("Aq3EWQAUkfDZi+QDZi9EfATQEgAUC+DZQC9DYgTEgg");
	var mask_graphics_135 = new cjs.Graphics().p("Aq1DiQAikdDiizQDiiyEeAhQEeAiCzDiQCyDighEeg");
	var mask_graphics_136 = new cjs.Graphics().p("AqzCvQAwkbDrioQDrinEbAwQEdAwCnDrQCnDqgwEcg");
	var mask_graphics_137 = new cjs.Graphics().p("AqwB8QA+kYDzicQDzibEZA+QEZA+CcDzQCbDyg+Eag");
	var mask_graphics_138 = new cjs.Graphics().p("AqsBKQBMkVD7iPQD6iPEVBMQEWBMCQD6QCOD5hMEXg");
	var mask_graphics_139 = new cjs.Graphics().p("AqnAYQBakREBiCQEBiCERBZQESBaCDEBQCCEAhaESg");
	var mask_graphics_140 = new cjs.Graphics().p("AqhgXQBnkOEHh1QEIh2EMBoQENBnB2EHQB1EGhnEOg");
	var mask_graphics_141 = new cjs.Graphics().p("AqbhHQB1kIENhoQEMhpEHB1QEIB0BpENQBoEMh1EIg");
	var mask_graphics_142 = new cjs.Graphics().p("AqTh2QCBkCEShbQERhbEBCCQECCBBbESQBaERiBEBg");
	var mask_graphics_143 = new cjs.Graphics().p("AqLikQCOj7EWhNQEVhND7COQD7COBNEWQBNEUiOD7g");
	var mask_graphics_144 = new cjs.Graphics().p("AqCjRQCaj0Eag/QEYg/D0CaQDzCbBAEYQA/EZibD0g");
	var mask_graphics_145 = new cjs.Graphics().p("Ap4j8QCmjsEcgxQEbgxDsCmQDsCmAxEbQAxEdimDrg");
	var mask_graphics_146 = new cjs.Graphics().p("ApukmQCyjjEfgjQEdgjDjCyQDjCxAjEeQAjEeiyDjg");
	var mask_graphics_147 = new cjs.Graphics().p("ApilOQC8jaEggVQEfgVDaC9QDaC9AUEeQAVEgi9Dag");
	var mask_graphics_148 = new cjs.Graphics().p("ApXl1QDIjQEggHQEfgGDRDHQDQDIAHEfQAGEgjIDRg");
	var mask_graphics_149 = new cjs.Graphics().p("ApKmZQDRjHEhAIQEfAIDGDSQDGDRgIEgQgIEgjSDGg");
	var mask_graphics_150 = new cjs.Graphics().p("Ao+m8QDbi8EgAXQEeAWC8DbQC7DbgWEfQgWEfjbC8g");
	var mask_graphics_151 = new cjs.Graphics().p("AowndQDkiwEeAlQEdAkCwDkQCxDkglEdQglEejkCxg");
	var mask_graphics_152 = new cjs.Graphics().p("Aojn7QDtilEcAzQEbAyCkDtQClDtgyEbQgzEbjtClg");
	var mask_graphics_153 = new cjs.Graphics().p("AoUoYQD0iYEZBAQEYBBCZD1QCZD0hBEYQhBEZj0CZg");
	var mask_graphics_154 = new cjs.Graphics().p("AoGoyQD8iMEVBOQEVBPCMD8QCND7hOEVQhPEVj8CNg");
	var mask_graphics_155 = new cjs.Graphics().p("An3pKQEDiAEQBdQERBcCAECQCAEDhcEQQhdERkCCAg");
	var mask_graphics_156 = new cjs.Graphics().p("AnnpgQEJhzELBqQEMBqBzEJQBzEHhqEMQhqENkIByg");
	var mask_graphics_157 = new cjs.Graphics().p("AnXpzQEOhmEGB3QEGB3BmEOQBmENh3EHQh3EGkOBmg");
	var mask_graphics_158 = new cjs.Graphics().p("Am3qEQEThYEACEQEACDBYETQBYESiEEAQiEEAkRBZg");
	var mask_graphics_159 = new cjs.Graphics().p("AmVqTQEWhKD5CQQD6CRBKEWQBKEWiQD5QiRD6kVBKg");
	var mask_graphics_160 = new cjs.Graphics().p("AlzqfQEag9DxCdQDyCdA8EaQA9EYidDzQidDykZA8g");
	var mask_graphics_161 = new cjs.Graphics().p("AlRqpQEcguDqCoQDpCpAvEcQAuEcioDqQipDqkbAug");
	var mask_graphics_162 = new cjs.Graphics().p("AkvqwQEfghDgC1QDiCzAgEfQAgEdi0DiQi0DhkeAgg");
	var mask_graphics_163 = new cjs.Graphics().p("AkMq1QEfgSDYC/QDYC/ASEgQASEei/DZQi/DYkfASg");
	var mask_graphics_164 = new cjs.Graphics().p("Ajpq3QEfgEDPDKQDODJADEgQAEEgjJDOQjKDPkfADg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(104).to({graphics:mask_graphics_104,x:-5.1,y:0.4}).wait(1).to({graphics:mask_graphics_105,x:-3.5,y:0.1}).wait(1).to({graphics:mask_graphics_106,x:-1.8,y:-0.3}).wait(1).to({graphics:mask_graphics_107,x:-0.1,y:-0.8}).wait(1).to({graphics:mask_graphics_108,x:1.5,y:-1.3}).wait(1).to({graphics:mask_graphics_109,x:3.1,y:-2}).wait(1).to({graphics:mask_graphics_110,x:4.7,y:-2.7}).wait(1).to({graphics:mask_graphics_111,x:6.2,y:-3.4}).wait(1).to({graphics:mask_graphics_112,x:7.7,y:-4.3}).wait(1).to({graphics:mask_graphics_113,x:9.2,y:-5.2}).wait(1).to({graphics:mask_graphics_114,x:10.6,y:-6.2}).wait(1).to({graphics:mask_graphics_115,x:12,y:-7.2}).wait(1).to({graphics:mask_graphics_116,x:13.3,y:-8.4}).wait(1).to({graphics:mask_graphics_117,x:14.6,y:-9.6}).wait(1).to({graphics:mask_graphics_118,x:15.7,y:-10.8}).wait(1).to({graphics:mask_graphics_119,x:16.8,y:-12.2}).wait(1).to({graphics:mask_graphics_120,x:17.9,y:-13.5}).wait(1).to({graphics:mask_graphics_121,x:18.8,y:-15}).wait(1).to({graphics:mask_graphics_122,x:19.7,y:-16.5}).wait(1).to({graphics:mask_graphics_123,x:20.5,y:-18}).wait(1).to({graphics:mask_graphics_124,x:21.3,y:-19.6}).wait(1).to({graphics:mask_graphics_125,x:21.9,y:-21.2}).wait(1).to({graphics:mask_graphics_126,x:22.5,y:-22.8}).wait(1).to({graphics:mask_graphics_127,x:23.1,y:-24.4}).wait(1).to({graphics:mask_graphics_128,x:23.5,y:-26.1}).wait(1).to({graphics:mask_graphics_129,x:23.9,y:-27.7}).wait(1).to({graphics:mask_graphics_130,x:24.2,y:-29.4}).wait(1).to({graphics:mask_graphics_131,x:24.4,y:-31.1}).wait(1).to({graphics:mask_graphics_132,x:24.5,y:-32.9}).wait(1).to({graphics:mask_graphics_133,x:24.5,y:-33.3}).wait(1).to({graphics:mask_graphics_134,x:24.6,y:-31.6}).wait(1).to({graphics:mask_graphics_135,x:24.7,y:-29.9}).wait(1).to({graphics:mask_graphics_136,x:25,y:-28.2}).wait(1).to({graphics:mask_graphics_137,x:25.4,y:-26.6}).wait(1).to({graphics:mask_graphics_138,x:25.8,y:-24.9}).wait(1).to({graphics:mask_graphics_139,x:26.3,y:-23.3}).wait(1).to({graphics:mask_graphics_140,x:26.9,y:-21.6}).wait(1).to({graphics:mask_graphics_141,x:27.5,y:-20}).wait(1).to({graphics:mask_graphics_142,x:28.3,y:-18.5}).wait(1).to({graphics:mask_graphics_143,x:29.1,y:-16.9}).wait(1).to({graphics:mask_graphics_144,x:29.9,y:-15.4}).wait(1).to({graphics:mask_graphics_145,x:30.9,y:-14}).wait(1).to({graphics:mask_graphics_146,x:31.9,y:-12.6}).wait(1).to({graphics:mask_graphics_147,x:33,y:-11.2}).wait(1).to({graphics:mask_graphics_148,x:34.1,y:-9.9}).wait(1).to({graphics:mask_graphics_149,x:35.3,y:-8.7}).wait(1).to({graphics:mask_graphics_150,x:36.6,y:-7.6}).wait(1).to({graphics:mask_graphics_151,x:38,y:-6.5}).wait(1).to({graphics:mask_graphics_152,x:39.4,y:-5.5}).wait(1).to({graphics:mask_graphics_153,x:40.9,y:-4.6}).wait(1).to({graphics:mask_graphics_154,x:42.4,y:-3.7}).wait(1).to({graphics:mask_graphics_155,x:43.9,y:-2.9}).wait(1).to({graphics:mask_graphics_156,x:45.5,y:-2.2}).wait(1).to({graphics:mask_graphics_157,x:47.1,y:-1.6}).wait(1).to({graphics:mask_graphics_158,x:47.1,y:-1}).wait(1).to({graphics:mask_graphics_159,x:47.1,y:-0.5}).wait(1).to({graphics:mask_graphics_160,x:47.1,y:-0.1}).wait(1).to({graphics:mask_graphics_161,x:47.1,y:0.3}).wait(1).to({graphics:mask_graphics_162,x:47.1,y:0.5}).wait(1).to({graphics:mask_graphics_163,x:47,y:0.7}).wait(1).to({graphics:mask_graphics_164,x:47,y:0.8}).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("Aq0nJIOnAAQACAAAEAAQC4AACCCHQCCCHAAC+QAAC/iCCGQhoBriIAX");
	this.shape.setTransform(6.1,-5.4);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(104).to({_off:false},0).wait(61));

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AgeAyIAAhjIA9AAIAABjg");
	var mask_1_graphics_1 = new cjs.Graphics().p("AgjAyIAAhjIBHAAIAABjg");
	var mask_1_graphics_2 = new cjs.Graphics().p("AgoAyIAAhjIBRAAIAABjg");
	var mask_1_graphics_3 = new cjs.Graphics().p("AgtAyIAAhjIBbAAIAABjg");
	var mask_1_graphics_4 = new cjs.Graphics().p("AgxAyIAAhjIBjAAIAABjg");
	var mask_1_graphics_5 = new cjs.Graphics().p("Ag2AyIAAhjIBtAAIAABjg");
	var mask_1_graphics_6 = new cjs.Graphics().p("Ag7AyIAAhjIB3AAIAABjg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AhAAyIAAhjICBAAIAABjg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AhFAyIAAhjICLAAIAABjg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AhKAyIAAhjICVAAIAABjg");
	var mask_1_graphics_10 = new cjs.Graphics().p("AhPAyIAAhjICfAAIAABjg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AhUAyIAAhjICpAAIAABjg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AhZAyIAAhjICzAAIAABjg");
	var mask_1_graphics_13 = new cjs.Graphics().p("AheAyIAAhjIC9AAIAABjg");
	var mask_1_graphics_14 = new cjs.Graphics().p("AhiAyIAAhjIDFAAIAABjg");
	var mask_1_graphics_15 = new cjs.Graphics().p("AhnAyIAAhjIDPAAIAABjg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AhsAyIAAhjIDZAAIAABjg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AhxAyIAAhjIDjAAIAABjg");
	var mask_1_graphics_18 = new cjs.Graphics().p("Ah2AyIAAhjIDtAAIAABjg");
	var mask_1_graphics_19 = new cjs.Graphics().p("Ah7AyIAAhjID3AAIAABjg");
	var mask_1_graphics_20 = new cjs.Graphics().p("AiAAyIAAhjIEBAAIAABjg");
	var mask_1_graphics_21 = new cjs.Graphics().p("AiFAyIAAhjIELAAIAABjg");
	var mask_1_graphics_22 = new cjs.Graphics().p("AiKAyIAAhjIEVAAIAABjg");
	var mask_1_graphics_23 = new cjs.Graphics().p("AiPAyIAAhjIEfAAIAABjg");
	var mask_1_graphics_24 = new cjs.Graphics().p("AiTAyIAAhjIEoAAIAABjg");
	var mask_1_graphics_25 = new cjs.Graphics().p("AiYAyIAAhjIExAAIAABjg");
	var mask_1_graphics_26 = new cjs.Graphics().p("AidAyIAAhjIE7AAIAABjg");
	var mask_1_graphics_27 = new cjs.Graphics().p("AiiAyIAAhjIFFAAIAABjg");
	var mask_1_graphics_28 = new cjs.Graphics().p("AinAyIAAhjIFPAAIAABjg");
	var mask_1_graphics_29 = new cjs.Graphics().p("AisAyIAAhjIFZAAIAABjg");
	var mask_1_graphics_30 = new cjs.Graphics().p("AixAyIAAhjIFjAAIAABjg");
	var mask_1_graphics_31 = new cjs.Graphics().p("Ai2AyIAAhjIFtAAIAABjg");
	var mask_1_graphics_32 = new cjs.Graphics().p("Ai7AyIAAhjIF3AAIAABjg");
	var mask_1_graphics_33 = new cjs.Graphics().p("Ai/AyIAAhjIGAAAIAABjg");
	var mask_1_graphics_34 = new cjs.Graphics().p("AjEAyIAAhjIGKAAIAABjg");
	var mask_1_graphics_35 = new cjs.Graphics().p("AjJAyIAAhjIGUAAIAABjg");
	var mask_1_graphics_36 = new cjs.Graphics().p("AjOAyIAAhjIGdAAIAABjg");
	var mask_1_graphics_37 = new cjs.Graphics().p("AjTAyIAAhjIGnAAIAABjg");
	var mask_1_graphics_38 = new cjs.Graphics().p("AjYAyIAAhjIGxAAIAABjg");
	var mask_1_graphics_39 = new cjs.Graphics().p("AjdAyIAAhjIG7AAIAABjg");
	var mask_1_graphics_40 = new cjs.Graphics().p("AjiAyIAAhjIHFAAIAABjg");
	var mask_1_graphics_41 = new cjs.Graphics().p("AjnAyIAAhjIHPAAIAABjg");
	var mask_1_graphics_42 = new cjs.Graphics().p("AjsAyIAAhjIHZAAIAABjg");
	var mask_1_graphics_43 = new cjs.Graphics().p("AjwAyIAAhjIHiAAIAABjg");
	var mask_1_graphics_44 = new cjs.Graphics().p("Aj1AyIAAhjIHsAAIAABjg");
	var mask_1_graphics_45 = new cjs.Graphics().p("Aj6AyIAAhjIH1AAIAABjg");
	var mask_1_graphics_46 = new cjs.Graphics().p("Aj/AyIAAhjIH/AAIAABjg");
	var mask_1_graphics_47 = new cjs.Graphics().p("AkEAyIAAhjIIJAAIAABjg");
	var mask_1_graphics_48 = new cjs.Graphics().p("AkJAyIAAhjIITAAIAABjg");
	var mask_1_graphics_49 = new cjs.Graphics().p("AkOAyIAAhjIIdAAIAABjg");
	var mask_1_graphics_50 = new cjs.Graphics().p("AkTAyIAAhjIInAAIAABjg");
	var mask_1_graphics_51 = new cjs.Graphics().p("AkYAyIAAhjIIxAAIAABjg");
	var mask_1_graphics_52 = new cjs.Graphics().p("AkdAyIAAhjII7AAIAABjg");
	var mask_1_graphics_53 = new cjs.Graphics().p("AkiAyIAAhjIJFAAIAABjg");
	var mask_1_graphics_54 = new cjs.Graphics().p("AknAyIAAhjIJPAAIAABjg");
	var mask_1_graphics_55 = new cjs.Graphics().p("AksAyIAAhjIJYAAIAABjg");
	var mask_1_graphics_56 = new cjs.Graphics().p("AkxAyIAAhjIJiAAIAABjg");
	var mask_1_graphics_57 = new cjs.Graphics().p("Ak1AyIAAhjIJrAAIAABjg");
	var mask_1_graphics_58 = new cjs.Graphics().p("Ak6AyIAAhjIJ1AAIAABjg");
	var mask_1_graphics_59 = new cjs.Graphics().p("Ak/AyIAAhjIJ/AAIAABjg");
	var mask_1_graphics_60 = new cjs.Graphics().p("AlEAyIAAhjIKJAAIAABjg");
	var mask_1_graphics_61 = new cjs.Graphics().p("AlJAyIAAhjIKTAAIAABjg");
	var mask_1_graphics_62 = new cjs.Graphics().p("AlOAyIAAhjIKdAAIAABjg");
	var mask_1_graphics_63 = new cjs.Graphics().p("AlTAyIAAhjIKnAAIAABjg");
	var mask_1_graphics_64 = new cjs.Graphics().p("AlYAyIAAhjIKxAAIAABjg");
	var mask_1_graphics_65 = new cjs.Graphics().p("AldAyIAAhjIK6AAIAABjg");
	var mask_1_graphics_66 = new cjs.Graphics().p("AliAyIAAhjILEAAIAABjg");
	var mask_1_graphics_67 = new cjs.Graphics().p("AlmAyIAAhjILNAAIAABjg");
	var mask_1_graphics_68 = new cjs.Graphics().p("AlrAyIAAhjILXAAIAABjg");
	var mask_1_graphics_69 = new cjs.Graphics().p("AlwAyIAAhjILhAAIAABjg");
	var mask_1_graphics_70 = new cjs.Graphics().p("Al1AyIAAhjILrAAIAABjg");
	var mask_1_graphics_71 = new cjs.Graphics().p("Al6AyIAAhjIL1AAIAABjg");
	var mask_1_graphics_72 = new cjs.Graphics().p("Al/AyIAAhjIL/AAIAABjg");
	var mask_1_graphics_73 = new cjs.Graphics().p("AmEAyIAAhjIMJAAIAABjg");
	var mask_1_graphics_74 = new cjs.Graphics().p("AmJAyIAAhjIMTAAIAABjg");
	var mask_1_graphics_75 = new cjs.Graphics().p("AmOAyIAAhjIMdAAIAABjg");
	var mask_1_graphics_76 = new cjs.Graphics().p("AmTAyIAAhjIMnAAIAABjg");
	var mask_1_graphics_77 = new cjs.Graphics().p("AmXAyIAAhjIMvAAIAABjg");
	var mask_1_graphics_78 = new cjs.Graphics().p("AmcAyIAAhjIM5AAIAABjg");
	var mask_1_graphics_79 = new cjs.Graphics().p("AmhAyIAAhjINDAAIAABjg");
	var mask_1_graphics_80 = new cjs.Graphics().p("AmmAyIAAhjINNAAIAABjg");
	var mask_1_graphics_81 = new cjs.Graphics().p("AmrAyIAAhjINXAAIAABjg");
	var mask_1_graphics_82 = new cjs.Graphics().p("AmwAyIAAhjINhAAIAABjg");
	var mask_1_graphics_83 = new cjs.Graphics().p("Am1AyIAAhjINrAAIAABjg");
	var mask_1_graphics_84 = new cjs.Graphics().p("Am6AyIAAhjIN1AAIAABjg");
	var mask_1_graphics_85 = new cjs.Graphics().p("Am/AyIAAhjIN/AAIAABjg");
	var mask_1_graphics_86 = new cjs.Graphics().p("AnDAyIAAhjIOHAAIAABjg");
	var mask_1_graphics_87 = new cjs.Graphics().p("AnIAyIAAhjIORAAIAABjg");
	var mask_1_graphics_88 = new cjs.Graphics().p("AnNAyIAAhjIObAAIAABjg");
	var mask_1_graphics_89 = new cjs.Graphics().p("AnSAyIAAhjIOlAAIAABjg");
	var mask_1_graphics_90 = new cjs.Graphics().p("AnXAyIAAhjIOvAAIAABjg");
	var mask_1_graphics_91 = new cjs.Graphics().p("AncAyIAAhjIO5AAIAABjg");
	var mask_1_graphics_92 = new cjs.Graphics().p("AnhAyIAAhjIPDAAIAABjg");
	var mask_1_graphics_93 = new cjs.Graphics().p("AnmAyIAAhjIPNAAIAABjg");
	var mask_1_graphics_94 = new cjs.Graphics().p("AnrAyIAAhjIPXAAIAABjg");
	var mask_1_graphics_95 = new cjs.Graphics().p("AnwAyIAAhjIPhAAIAABjg");
	var mask_1_graphics_96 = new cjs.Graphics().p("An0AyIAAhjIPpAAIAABjg");
	var mask_1_graphics_97 = new cjs.Graphics().p("An5AyIAAhjIPzAAIAABjg");
	var mask_1_graphics_98 = new cjs.Graphics().p("An+AyIAAhjIP9AAIAABjg");
	var mask_1_graphics_99 = new cjs.Graphics().p("AoDAyIAAhjIQHAAIAABjg");
	var mask_1_graphics_100 = new cjs.Graphics().p("AoIAyIAAhjIQRAAIAABjg");
	var mask_1_graphics_101 = new cjs.Graphics().p("AoNAyIAAhjIQbAAIAABjg");
	var mask_1_graphics_102 = new cjs.Graphics().p("AoSAyIAAhjIQlAAIAABjg");
	var mask_1_graphics_103 = new cjs.Graphics().p("AoXAyIAAhjIQuAAIAABjg");
	var mask_1_graphics_104 = new cjs.Graphics().p("AocAyIAAhjIQ4AAIAABjg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:-68.5,y:-51.8}).wait(1).to({graphics:mask_1_graphics_1,x:-68,y:-51.8}).wait(1).to({graphics:mask_1_graphics_2,x:-67.6,y:-51.8}).wait(1).to({graphics:mask_1_graphics_3,x:-67.1,y:-51.8}).wait(1).to({graphics:mask_1_graphics_4,x:-66.6,y:-51.8}).wait(1).to({graphics:mask_1_graphics_5,x:-66.1,y:-51.8}).wait(1).to({graphics:mask_1_graphics_6,x:-65.6,y:-51.8}).wait(1).to({graphics:mask_1_graphics_7,x:-65.1,y:-51.8}).wait(1).to({graphics:mask_1_graphics_8,x:-64.6,y:-51.8}).wait(1).to({graphics:mask_1_graphics_9,x:-64.1,y:-51.8}).wait(1).to({graphics:mask_1_graphics_10,x:-63.6,y:-51.8}).wait(1).to({graphics:mask_1_graphics_11,x:-63.2,y:-51.8}).wait(1).to({graphics:mask_1_graphics_12,x:-62.7,y:-51.8}).wait(1).to({graphics:mask_1_graphics_13,x:-62.2,y:-51.8}).wait(1).to({graphics:mask_1_graphics_14,x:-61.7,y:-51.8}).wait(1).to({graphics:mask_1_graphics_15,x:-61.2,y:-51.8}).wait(1).to({graphics:mask_1_graphics_16,x:-60.7,y:-51.8}).wait(1).to({graphics:mask_1_graphics_17,x:-60.2,y:-51.8}).wait(1).to({graphics:mask_1_graphics_18,x:-59.7,y:-51.8}).wait(1).to({graphics:mask_1_graphics_19,x:-59.2,y:-51.8}).wait(1).to({graphics:mask_1_graphics_20,x:-58.7,y:-51.8}).wait(1).to({graphics:mask_1_graphics_21,x:-58.3,y:-51.8}).wait(1).to({graphics:mask_1_graphics_22,x:-57.8,y:-51.8}).wait(1).to({graphics:mask_1_graphics_23,x:-57.3,y:-51.8}).wait(1).to({graphics:mask_1_graphics_24,x:-56.8,y:-51.8}).wait(1).to({graphics:mask_1_graphics_25,x:-56.3,y:-51.8}).wait(1).to({graphics:mask_1_graphics_26,x:-55.8,y:-51.8}).wait(1).to({graphics:mask_1_graphics_27,x:-55.3,y:-51.8}).wait(1).to({graphics:mask_1_graphics_28,x:-54.8,y:-51.8}).wait(1).to({graphics:mask_1_graphics_29,x:-54.3,y:-51.8}).wait(1).to({graphics:mask_1_graphics_30,x:-53.8,y:-51.8}).wait(1).to({graphics:mask_1_graphics_31,x:-53.4,y:-51.8}).wait(1).to({graphics:mask_1_graphics_32,x:-52.9,y:-51.8}).wait(1).to({graphics:mask_1_graphics_33,x:-52.4,y:-51.8}).wait(1).to({graphics:mask_1_graphics_34,x:-51.9,y:-51.8}).wait(1).to({graphics:mask_1_graphics_35,x:-51.4,y:-51.8}).wait(1).to({graphics:mask_1_graphics_36,x:-50.9,y:-51.8}).wait(1).to({graphics:mask_1_graphics_37,x:-50.4,y:-51.8}).wait(1).to({graphics:mask_1_graphics_38,x:-49.9,y:-51.8}).wait(1).to({graphics:mask_1_graphics_39,x:-49.4,y:-51.8}).wait(1).to({graphics:mask_1_graphics_40,x:-49,y:-51.8}).wait(1).to({graphics:mask_1_graphics_41,x:-48.5,y:-51.8}).wait(1).to({graphics:mask_1_graphics_42,x:-48,y:-51.8}).wait(1).to({graphics:mask_1_graphics_43,x:-47.5,y:-51.8}).wait(1).to({graphics:mask_1_graphics_44,x:-47,y:-51.8}).wait(1).to({graphics:mask_1_graphics_45,x:-46.5,y:-51.8}).wait(1).to({graphics:mask_1_graphics_46,x:-46,y:-51.8}).wait(1).to({graphics:mask_1_graphics_47,x:-45.5,y:-51.8}).wait(1).to({graphics:mask_1_graphics_48,x:-45,y:-51.8}).wait(1).to({graphics:mask_1_graphics_49,x:-44.5,y:-51.8}).wait(1).to({graphics:mask_1_graphics_50,x:-44.1,y:-51.8}).wait(1).to({graphics:mask_1_graphics_51,x:-43.6,y:-51.8}).wait(1).to({graphics:mask_1_graphics_52,x:-43.1,y:-51.8}).wait(1).to({graphics:mask_1_graphics_53,x:-42.6,y:-51.8}).wait(1).to({graphics:mask_1_graphics_54,x:-42.1,y:-51.8}).wait(1).to({graphics:mask_1_graphics_55,x:-41.6,y:-51.8}).wait(1).to({graphics:mask_1_graphics_56,x:-41.1,y:-51.8}).wait(1).to({graphics:mask_1_graphics_57,x:-40.7,y:-51.8}).wait(1).to({graphics:mask_1_graphics_58,x:-40.2,y:-51.8}).wait(1).to({graphics:mask_1_graphics_59,x:-39.7,y:-51.8}).wait(1).to({graphics:mask_1_graphics_60,x:-39.2,y:-51.8}).wait(1).to({graphics:mask_1_graphics_61,x:-38.7,y:-51.8}).wait(1).to({graphics:mask_1_graphics_62,x:-38.2,y:-51.8}).wait(1).to({graphics:mask_1_graphics_63,x:-37.7,y:-51.8}).wait(1).to({graphics:mask_1_graphics_64,x:-37.2,y:-51.8}).wait(1).to({graphics:mask_1_graphics_65,x:-36.7,y:-51.8}).wait(1).to({graphics:mask_1_graphics_66,x:-36.2,y:-51.8}).wait(1).to({graphics:mask_1_graphics_67,x:-35.8,y:-51.8}).wait(1).to({graphics:mask_1_graphics_68,x:-35.3,y:-51.8}).wait(1).to({graphics:mask_1_graphics_69,x:-34.8,y:-51.8}).wait(1).to({graphics:mask_1_graphics_70,x:-34.3,y:-51.8}).wait(1).to({graphics:mask_1_graphics_71,x:-33.8,y:-51.8}).wait(1).to({graphics:mask_1_graphics_72,x:-33.3,y:-51.8}).wait(1).to({graphics:mask_1_graphics_73,x:-32.8,y:-51.8}).wait(1).to({graphics:mask_1_graphics_74,x:-32.3,y:-51.8}).wait(1).to({graphics:mask_1_graphics_75,x:-31.8,y:-51.8}).wait(1).to({graphics:mask_1_graphics_76,x:-31.3,y:-51.8}).wait(1).to({graphics:mask_1_graphics_77,x:-30.9,y:-51.8}).wait(1).to({graphics:mask_1_graphics_78,x:-30.4,y:-51.8}).wait(1).to({graphics:mask_1_graphics_79,x:-29.9,y:-51.8}).wait(1).to({graphics:mask_1_graphics_80,x:-29.4,y:-51.8}).wait(1).to({graphics:mask_1_graphics_81,x:-28.9,y:-51.8}).wait(1).to({graphics:mask_1_graphics_82,x:-28.4,y:-51.8}).wait(1).to({graphics:mask_1_graphics_83,x:-27.9,y:-51.8}).wait(1).to({graphics:mask_1_graphics_84,x:-27.4,y:-51.8}).wait(1).to({graphics:mask_1_graphics_85,x:-26.9,y:-51.8}).wait(1).to({graphics:mask_1_graphics_86,x:-26.5,y:-51.8}).wait(1).to({graphics:mask_1_graphics_87,x:-26,y:-51.8}).wait(1).to({graphics:mask_1_graphics_88,x:-25.5,y:-51.8}).wait(1).to({graphics:mask_1_graphics_89,x:-25,y:-51.8}).wait(1).to({graphics:mask_1_graphics_90,x:-24.5,y:-51.8}).wait(1).to({graphics:mask_1_graphics_91,x:-24,y:-51.8}).wait(1).to({graphics:mask_1_graphics_92,x:-23.5,y:-51.8}).wait(1).to({graphics:mask_1_graphics_93,x:-23,y:-51.8}).wait(1).to({graphics:mask_1_graphics_94,x:-22.5,y:-51.8}).wait(1).to({graphics:mask_1_graphics_95,x:-22,y:-51.8}).wait(1).to({graphics:mask_1_graphics_96,x:-21.6,y:-51.8}).wait(1).to({graphics:mask_1_graphics_97,x:-21.1,y:-51.8}).wait(1).to({graphics:mask_1_graphics_98,x:-20.6,y:-51.8}).wait(1).to({graphics:mask_1_graphics_99,x:-20.1,y:-51.8}).wait(1).to({graphics:mask_1_graphics_100,x:-19.6,y:-51.8}).wait(1).to({graphics:mask_1_graphics_101,x:-19.1,y:-51.8}).wait(1).to({graphics:mask_1_graphics_102,x:-18.6,y:-51.8}).wait(1).to({graphics:mask_1_graphics_103,x:-18.1,y:-51.8}).wait(1).to({graphics:mask_1_graphics_104,x:-17.6,y:-51.8}).wait(61));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("Aq0nJIOnAAQACAAAEAAQC4AACCCHQCCCHAAC+QAAC/iCCGQhoBriIAX");
	this.shape_1.setTransform(6.1,-5.4);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(165));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.3,-63.3,21.8,24.3);


(lib.ar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,-127.5,1,1,0,0,0,0.1,-4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:161.7},149).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AAAAoIAAhQ");
	this.shape.setTransform(0,-130.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AAAgxIAABj");
	this.shape_1.setTransform(0,-129.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AAAg6IAAB1");
	this.shape_2.setTransform(0,-128.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("AAAhEIAACJ");
	this.shape_3.setTransform(0,-127.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("AAAhNIAACb");
	this.shape_4.setTransform(0,-126.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(5,1,1).p("AAAhXIAACv");
	this.shape_5.setTransform(0,-125.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(5,1,1).p("AAAhgIAADB");
	this.shape_6.setTransform(0,-124.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(5,1,1).p("AAAhpIAADT");
	this.shape_7.setTransform(0,-124);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(5,1,1).p("AAAhzIAADn");
	this.shape_8.setTransform(0,-123.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(5,1,1).p("AAAh8IAAD5");
	this.shape_9.setTransform(0,-122.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(5,1,1).p("AAAiGIAAEN");
	this.shape_10.setTransform(0,-121.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5,1,1).p("AAAiPIAAEf");
	this.shape_11.setTransform(0,-120.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(5,1,1).p("AAAiYIAAEx");
	this.shape_12.setTransform(0,-119.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(5,1,1).p("AAAiiIAAFF");
	this.shape_13.setTransform(0,-118.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(5,1,1).p("AAAirIAAFX");
	this.shape_14.setTransform(0,-117.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(5,1,1).p("AAAi1IAAFr");
	this.shape_15.setTransform(0,-116.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(5,1,1).p("AAAi+IAAF9");
	this.shape_16.setTransform(0,-115.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(5,1,1).p("AAAjHIAAGP");
	this.shape_17.setTransform(0,-114.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(5,1,1).p("AAAjRIAAGj");
	this.shape_18.setTransform(0,-113.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(5,1,1).p("AAAjaIAAG1");
	this.shape_19.setTransform(0,-112.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(5,1,1).p("AAAjjIAAHI");
	this.shape_20.setTransform(0,-111.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(5,1,1).p("AAAjtIAAHb");
	this.shape_21.setTransform(0,-110.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(5,1,1).p("AAAj2IAAHt");
	this.shape_22.setTransform(0,-109.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(5,1,1).p("AAAkAIAAIB");
	this.shape_23.setTransform(0,-109);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(5,1,1).p("AAAkJIAAIT");
	this.shape_24.setTransform(0,-108);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(5,1,1).p("AAAkTIAAIn");
	this.shape_25.setTransform(0,-107.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(5,1,1).p("AAAkcIAAI5");
	this.shape_26.setTransform(0,-106.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(5,1,1).p("AAAklIAAJL");
	this.shape_27.setTransform(0,-105.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(5,1,1).p("AAAkvIAAJf");
	this.shape_28.setTransform(0,-104.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(5,1,1).p("AAAk4IAAJx");
	this.shape_29.setTransform(0,-103.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(5,1,1).p("AAAlCIAAKF");
	this.shape_30.setTransform(0,-102.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(5,1,1).p("AAAlLIAAKX");
	this.shape_31.setTransform(0,-101.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(5,1,1).p("AAAlUIAAKp");
	this.shape_32.setTransform(0,-100.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(5,1,1).p("AAAleIAAK9");
	this.shape_33.setTransform(0,-99.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(5,1,1).p("AAAlnIAALP");
	this.shape_34.setTransform(0,-98.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(5,1,1).p("AAAlxIAALj");
	this.shape_35.setTransform(0,-97.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(5,1,1).p("AAAl6IAAL1");
	this.shape_36.setTransform(0,-96.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(5,1,1).p("AAAmDIAAMH");
	this.shape_37.setTransform(0,-95.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(5,1,1).p("AAAmNIAAMb");
	this.shape_38.setTransform(0,-94.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(5,1,1).p("AAAmWIAAMt");
	this.shape_39.setTransform(0,-93.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(5,1,1).p("AAAmgIAANB");
	this.shape_40.setTransform(0,-93);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(5,1,1).p("AAAmpIAANT");
	this.shape_41.setTransform(0,-92.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(5,1,1).p("AAAmyIAANl");
	this.shape_42.setTransform(0,-91.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(5,1,1).p("AAAm8IAAN5");
	this.shape_43.setTransform(0,-90.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(5,1,1).p("AAAnFIAAOL");
	this.shape_44.setTransform(0,-89.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(5,1,1).p("AAAnOIAAOe");
	this.shape_45.setTransform(0,-88.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(5,1,1).p("AAAnYIAAOx");
	this.shape_46.setTransform(0,-87.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(5,1,1).p("AAAnhIAAPD");
	this.shape_47.setTransform(0,-86.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(5,1,1).p("AAAnrIAAPX");
	this.shape_48.setTransform(0,-85.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(5,1,1).p("AAAn0IAAPp");
	this.shape_49.setTransform(0,-84.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(5,1,1).p("AAAn+IAAP9");
	this.shape_50.setTransform(0,-83.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(5,1,1).p("AAAoHIAAQP");
	this.shape_51.setTransform(0,-82.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(5,1,1).p("AAAoQIAAQh");
	this.shape_52.setTransform(0,-81.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(5,1,1).p("AAAoaIAAQ1");
	this.shape_53.setTransform(0,-80.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(5,1,1).p("AAAojIAARH");
	this.shape_54.setTransform(0,-79.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(5,1,1).p("AAAotIAARb");
	this.shape_55.setTransform(0,-78.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(5,1,1).p("AAAo2IAARt");
	this.shape_56.setTransform(0,-78);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(5,1,1).p("AAAo/IAAR/");
	this.shape_57.setTransform(0,-77);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(5,1,1).p("AAApJIAAST");
	this.shape_58.setTransform(0,-76.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(5,1,1).p("AAApSIAASl");
	this.shape_59.setTransform(0,-75.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(5,1,1).p("AAApcIAAS5");
	this.shape_60.setTransform(0,-74.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(5,1,1).p("AAAplIAATL");
	this.shape_61.setTransform(0,-73.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(5,1,1).p("AAApuIAATd");
	this.shape_62.setTransform(0,-72.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(5,1,1).p("AAAp4IAATx");
	this.shape_63.setTransform(0,-71.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(5,1,1).p("AAAqBIAAUD");
	this.shape_64.setTransform(0,-70.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(5,1,1).p("AAAqLIAAUX");
	this.shape_65.setTransform(0,-69.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(5,1,1).p("AAAqUIAAUp");
	this.shape_66.setTransform(0,-68.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(5,1,1).p("AAAqdIAAU7");
	this.shape_67.setTransform(0,-67.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(5,1,1).p("AAAqnIAAVP");
	this.shape_68.setTransform(0,-66.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(5,1,1).p("AAAqwIAAVh");
	this.shape_69.setTransform(0,-65.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(5,1,1).p("AAAq6IAAV1");
	this.shape_70.setTransform(0,-64.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(5,1,1).p("AAArDIAAWH");
	this.shape_71.setTransform(0,-63.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(5,1,1).p("AAArMIAAWZ");
	this.shape_72.setTransform(0,-62.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(5,1,1).p("AAArWIAAWt");
	this.shape_73.setTransform(0,-62);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(5,1,1).p("AAArfIAAW/");
	this.shape_74.setTransform(0,-61);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(5,1,1).p("AAArpIAAXT");
	this.shape_75.setTransform(0,-60.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(5,1,1).p("AAAryIAAXl");
	this.shape_76.setTransform(0,-59.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(5,1,1).p("AAAr7IAAX3");
	this.shape_77.setTransform(0,-58.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(5,1,1).p("AAAsFIAAYL");
	this.shape_78.setTransform(0,-57.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(5,1,1).p("AAAsOIAAYd");
	this.shape_79.setTransform(0,-56.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(5,1,1).p("AAAsYIAAYx");
	this.shape_80.setTransform(0,-55.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(5,1,1).p("AAAshIAAZD");
	this.shape_81.setTransform(0,-54.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(5,1,1).p("AAAsqIAAZV");
	this.shape_82.setTransform(0,-53.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(5,1,1).p("AAAs0IAAZp");
	this.shape_83.setTransform(0,-52.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(5,1,1).p("AAAs9IAAZ7");
	this.shape_84.setTransform(0,-51.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(5,1,1).p("AAAtHIAAaP");
	this.shape_85.setTransform(0,-50.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(5,1,1).p("AAAtQIAAah");
	this.shape_86.setTransform(0,-49.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(5,1,1).p("AAAtZIAAaz");
	this.shape_87.setTransform(0,-48.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(5,1,1).p("AAAtjIAAbH");
	this.shape_88.setTransform(0,-47.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(5,1,1).p("AAAtsIAAbZ");
	this.shape_89.setTransform(0,-46.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(5,1,1).p("AAAt2IAAbt");
	this.shape_90.setTransform(0,-46);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(5,1,1).p("AAAt/IAAb/");
	this.shape_91.setTransform(0,-45.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(5,1,1).p("AAAuIIAAcR");
	this.shape_92.setTransform(0,-44.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(5,1,1).p("AAAuSIAAcl");
	this.shape_93.setTransform(0,-43.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(5,1,1).p("AAAubIAAc3");
	this.shape_94.setTransform(0,-42.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(5,1,1).p("AAAulIAAdL");
	this.shape_95.setTransform(0,-41.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(5,1,1).p("AAAuuIAAdd");
	this.shape_96.setTransform(0,-40.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(5,1,1).p("AAAu3IAAdv");
	this.shape_97.setTransform(0,-39.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(5,1,1).p("AAAvBIAAeD");
	this.shape_98.setTransform(0,-38.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(5,1,1).p("AAAvKIAAeV");
	this.shape_99.setTransform(0,-37.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(5,1,1).p("AAAvUIAAep");
	this.shape_100.setTransform(0,-36.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(5,1,1).p("AAAvdIAAe7");
	this.shape_101.setTransform(0,-35.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(5,1,1).p("AAAvmIAAfN");
	this.shape_102.setTransform(0,-34.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(5,1,1).p("AAAvwIAAfh");
	this.shape_103.setTransform(0,-33.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(5,1,1).p("AAAv5IAAfz");
	this.shape_104.setTransform(0,-32.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(5,1,1).p("AAAwDMAAAAgH");
	this.shape_105.setTransform(0,-31.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(5,1,1).p("AAAwMMAAAAgZ");
	this.shape_106.setTransform(0,-31);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(5,1,1).p("AAAwVMAAAAgr");
	this.shape_107.setTransform(0,-30);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(5,1,1).p("AAAwfMAAAAg/");
	this.shape_108.setTransform(0,-29.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(5,1,1).p("AAAwoMAAAAhR");
	this.shape_109.setTransform(0,-28.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(5,1,1).p("AAAwyMAAAAhl");
	this.shape_110.setTransform(0,-27.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(5,1,1).p("AAAw7MAAAAh3");
	this.shape_111.setTransform(0,-26.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(5,1,1).p("AAAxEMAAAAiJ");
	this.shape_112.setTransform(0,-25.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(5,1,1).p("AAAxOMAAAAid");
	this.shape_113.setTransform(0,-24.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(5,1,1).p("AAAxXMAAAAiv");
	this.shape_114.setTransform(0,-23.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(5,1,1).p("AAAxhMAAAAjD");
	this.shape_115.setTransform(0,-22.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(5,1,1).p("AAAxqMAAAAjV");
	this.shape_116.setTransform(0,-21.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(5,1,1).p("AAAxzMAAAAjn");
	this.shape_117.setTransform(0,-20.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(5,1,1).p("AAAx9MAAAAj7");
	this.shape_118.setTransform(0,-19.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(5,1,1).p("AAAyGMAAAAkN");
	this.shape_119.setTransform(0,-18.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(5,1,1).p("AAAyQMAAAAkh");
	this.shape_120.setTransform(0,-17.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(5,1,1).p("AAAyZMAAAAkz");
	this.shape_121.setTransform(0,-16.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(5,1,1).p("AAAyiMAAAAlF");
	this.shape_122.setTransform(0,-15.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(5,1,1).p("AAAysMAAAAlZ");
	this.shape_123.setTransform(0,-15);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(5,1,1).p("AAAy1MAAAAlr");
	this.shape_124.setTransform(0,-14);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(5,1,1).p("AAAy/MAAAAl/");
	this.shape_125.setTransform(0,-13.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(5,1,1).p("AAAzIMAAAAmR");
	this.shape_126.setTransform(0,-12.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(5,1,1).p("AAAzRMAAAAmj");
	this.shape_127.setTransform(0,-11.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(5,1,1).p("AAAzbMAAAAm3");
	this.shape_128.setTransform(0,-10.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(5,1,1).p("AAAzkMAAAAnJ");
	this.shape_129.setTransform(0,-9.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(5,1,1).p("AAAzuMAAAAnd");
	this.shape_130.setTransform(0,-8.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").ss(5,1,1).p("AAAz3MAAAAnv");
	this.shape_131.setTransform(0,-7.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(5,1,1).p("AAA0AMAAAAoB");
	this.shape_132.setTransform(0,-6.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(5,1,1).p("AAA0KMAAAAoV");
	this.shape_133.setTransform(0,-5.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(5,1,1).p("AAA0TMAAAAon");
	this.shape_134.setTransform(0,-4.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#000000").ss(5,1,1).p("AAA0dMAAAAo7");
	this.shape_135.setTransform(0,-3.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#000000").ss(5,1,1).p("AAA0mMAAAApN");
	this.shape_136.setTransform(0,-2.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#000000").ss(5,1,1).p("AAA0vMAAAApf");
	this.shape_137.setTransform(0,-1.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").ss(5,1,1).p("AAA05MAAAApz");
	this.shape_138.setTransform(0,-0.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#000000").ss(5,1,1).p("AAA1CMAAAAqF");
	this.shape_139.setTransform(0,0.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").ss(5,1,1).p("AAA1MMAAAAqZ");
	this.shape_140.setTransform(0,1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#000000").ss(5,1,1).p("AAA1VMAAAAqr");
	this.shape_141.setTransform(0,1.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#000000").ss(5,1,1).p("AAA1eMAAAAq9");
	this.shape_142.setTransform(0,2.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#000000").ss(5,1,1).p("AAA1oMAAAArR");
	this.shape_143.setTransform(0,3.8);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#000000").ss(5,1,1).p("AAA1xMAAAArj");
	this.shape_144.setTransform(0,4.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#000000").ss(5,1,1).p("AAA17MAAAAr3");
	this.shape_145.setTransform(0,5.7);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#000000").ss(5,1,1).p("AAA2EMAAAAsJ");
	this.shape_146.setTransform(0,6.6);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#000000").ss(5,1,1).p("AAA2NMAAAAsb");
	this.shape_147.setTransform(0,7.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#000000").ss(5,1,1).p("AAA2XMAAAAsv");
	this.shape_148.setTransform(0,8.5);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#000000").ss(5,1,1).p("AAAWhMAAAgtB");
	this.shape_149.setTransform(0,9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.9,-140.9,24.3,21.9);


(lib.honeyflap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.honeybee();
	this.instance.parent = this;
	this.instance.setTransform(38.4,-170.9,0.422,0.422,0,0,0,-0.1,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgFB9IgGAAQgIgBgGgCIgJgCIgFgBIgDgCIgHgCIgDgCIgEgBIgCgCIgDgBIgDgCIgCgBIgCgCIgCgBIgDgCIgCgCIgCgBIgCgCIgBgBIgDgCIgCgCIgBgBIgCgCIgBgCIgCgBIgCgCIgBgCIgBgBIgBgCIgCgCIgCgBIgBgCIgBgCIgBgCIgBgBIgBgCIgBgCIgBgCIgBgBIgCgCIgBgCIAAgCIgBgBIgBgCIAAgCIgBgCIgBgBIgBgCIAAgCIgBgCIgBgCIgBgBIAAgCIgBgCIAAgCIAAgCIgBgCIAAgBIgBgCIAAgCIAAgCIAAgCIAAgCIgBgCIAAgBIAAgCIAAgCIgBgCIABgCIgBgCIAAgCIAAgCIAAAAIABgCIgBgCIABgCIAAgCIAAgCIAAgCIAAgCIABgCIAAgCIAAgCIAAgCIABgCIAAgCIAAgCIABgCIABgCIAAgCIAAgBIABgDIABgBIABgDIABgCIAAgBIABgDIABgCIABgCIABgCIABgCIABgCIABgCIACgCIABgCIABgCIABgCIABgCIACgCIACgDIABgCIACgCIACgCIABgCIADgCIACgDIACgCIADgCIADgDIACgCIADgCIADgCIAJgFIAJgFIAGgDIAIgEIAJgCIANgDIAAABIALgCIAMAAIAIABIANACIAJADIAOAFIAJAEIADACIACABIADACIACABIACACIADABIABACIACACIADABIACACIACABIABACIACACIABABIACACIACACIACABIAAACIACACIABABIACACIABACIACABIABACIABACIABACIABABIACACIAAACIABACIABABIABACIABACIAAACIABABIABACIABACIAAACIACACIABABIAAACIABACIAAACIABACIAAABIABACIAAACIAAACIABACIAAACIAAABIAAACIABACIAAACIAAACIAAACIABACIAAABIAAACIABACIgBACIABACIAAABIgBACIABACIgBACIAAACIAAABIAAACIAAACIAAACIAAACIgBACIAAACIAAACIgBACIAAACIgBACIAAACIAAACIgBACIAAACIgBACIAAACIgBACIgBACIgBACIgBACIgBACIgBACIgBACIgBACIAAACIgCACIgBACIgCACIgBACIgBACIgCADIgBACIgCACIgCACIgBACIgCACIgCACIgCADIgCACIgFAEIgLAKQgHAEgGADIgOAHIgPAEIgMADIgRABIgGAAg");
	this.shape.setTransform(22.4,-144.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-215.3,105.5,83.7);


// stage content:
(lib.writingsuccess_Fontkid_P = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_634 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(634).call(this.frame_634).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(156.3,98.1,0.999,0.999,0,-8.5,171.5,22.4,-144);
	this.instance._off = true;

	this.instance_1 = new lib.honeybee();
	this.instance_1.parent = this;
	this.instance_1.setTransform(156.2,272,0.421,0.421,-21.5,0,0,-37.9,64);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({y:443.9},185).wait(11).to({rotation:-21.5,skewX:0,skewY:0,x:157.3,y:102.5},0).to({scaleX:1,scaleY:1,guide:{path:[157.4,102.5,240.7,102.4,324.1,102.3,330.1,102.4,335.7,102.9]}},139).to({scaleX:1,scaleY:1,guide:{path:[335.8,103.1,367.6,106.2,390,126.1,416.5,149.4,417.8,184.6,419.1,219.9,392,244.5,364.9,269.1,344.1,270,341.3,270.2,338.7,270.3]}},120).to({scaleX:1,scaleY:1,guide:{path:[338.7,270.3,322.7,271,319,271.2,314.6,271.4,310.1,271.4,233.2,271.7,156.3,272.1]}},100).to({_off:true},10).wait(61));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(574).to({_off:false},0).to({regX:-38.1,regY:64.4,rotation:-43.3,guide:{path:[156.2,272,153.4,268.8,142.6,263.3,129.7,256.8,117.8,256.8,99.8,256.8,82.5,272.8,71,283.7,54.2,308.2,35.2,336,28.5,343.5,14.3,359.5,1.4,359.5,-16.7,359.5,-41.2,343,-70.3,323.4,-99.4,286.1]}},60).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(156.5,438.3,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},185).wait(11).to({_off:false,x:157.1,y:271},0).to({_off:true},359).wait(71));

	// ar2
	this.instance_2 = new lib.ar2("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(297.6,188.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(205).to({_off:false},0).wait(430));

	// ar1
	this.instance_3 = new lib.ar1("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(62.2,258.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).wait(626));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_344 = new cjs.Graphics().p("AMmSeQlulsgCoDQgCoDFqltQFslvIDgCMAALAm4IgHAAQn/AAlslog");
	var mask_graphics_345 = new cjs.Graphics().p("AMESGQlkl0ALoEQALoCF1lkQF0llIEALMgA3Am4QoDgLlll1g");
	var mask_graphics_346 = new cjs.Graphics().p("ALdRvQlal+AZoDQAZoCF9laQF+lbIDAZMgB4Am1QoDgYlbl+g");
	var mask_graphics_347 = new cjs.Graphics().p("AK4RYQlRmHAnoCQAmoBGGlQQGHlRICAmMgC5AmxQoCgmlQmGg");
	var mask_graphics_348 = new cjs.Graphics().p("AKSRAQlFmPAzoBQA0oAGPlGQGQlGIAAzMgD5AmsQoBg0lHmPg");
	var mask_graphics_349 = new cjs.Graphics().p("AJuQpQk7mYBBoAQBBn+GXk7QGYk8IABBMgE7AmkQn/hBk8mXg");
	var mask_graphics_350 = new cjs.Graphics().p("AJKQRQkwmgBOn+QBPn8GfkxQGgkxH+BPMgF7AmbQn+hPkxmfg");
	var mask_graphics_351 = new cjs.Graphics().p("AInP5QklmoBcn7QBbn6GokmQGokmH7BcMgG7AmQQn8hckmmng");
	var mask_graphics_352 = new cjs.Graphics().p("AIFPhQkamvBpn5QBpn4GvkaQGvkbH5BpMgH7AmEQn5hpkbmvg");
	var mask_graphics_353 = new cjs.Graphics().p("AHkPJQkPm3B2n1QB2n1G2kPQG3kQH2B3MgI7Al1Qn2h2kPm2g");
	var mask_graphics_354 = new cjs.Graphics().p("AHDOxQkDm+CDnyQCDnyG9kDQG+kEHzCDMgJ6AlmQnziDkEm9g");
	var mask_graphics_355 = new cjs.Graphics().p("AGjOZQj3nECQnuQCQnvHEj4QHEj4HvCQMgK5AlVQnuiQj5nEg");
	var mask_graphics_356 = new cjs.Graphics().p("AGEOBQjrnLCdnqQCdnqHKjsQHLjsHrCdMgL3AlBQnridjtnKg");
	var mask_graphics_357 = new cjs.Graphics().p("AFmNpQjfnRCqnlQCqnnHQjgQHRjgHmCqMgM1AktQnmiqjhnQg");
	var mask_graphics_358 = new cjs.Graphics().p("AFJNRQjTnWC3nhQC3niHVjUQHXjUHiC3MgNzAkXQnii3jUnWg");
	var mask_graphics_359 = new cjs.Graphics().p("AEtM5QjHncDEncQDDndHbjHQHcjHHdDDMgOvAj/QndjEjInbg");
	var mask_graphics_360 = new cjs.Graphics().p("AESMhQi6ngDPnXQDQnYHgi7QHhi7HYDQMgPrAjlQnYjPi7nhg");
	var mask_graphics_361 = new cjs.Graphics().p("AD4MJQiunlDcnRQDcnSHliuQHmivHSDcMgQmAjKQnTjbiunmg");
	var mask_graphics_362 = new cjs.Graphics().p("ADfLyQihnqDonLQDonNHpihQHqihHMDoMgRgAitQnNjoihnpg");
	var mask_graphics_363 = new cjs.Graphics().p("ADGLaQiUnuD0nFQD0nGHuiUQHuiVHGD0MgSbAiQQnGj0iVnug");
	var mask_graphics_364 = new cjs.Graphics().p("ACvLDQiHnyEAm+QEAnAHxiHQHyiIG/EAMgTTAhwQnAkAiInxg");
	var mask_graphics_365 = new cjs.Graphics().p("ACZKsQh6n1ELm4QEMm5H0h6QH2h7G4EMMgUMAhPQm4kMh7n0g");
	var mask_graphics_366 = new cjs.Graphics().p("ACEKUQhtn4EXmwQEXmyH3htQH4htGyEXMgVDAgsQmxkXhun4g");
	var mask_graphics_367 = new cjs.Graphics().p("ABwJ9Qhgn6EimpQEjmqH6hgQH7hhGqEjMgV6AgIQmqkihgn7g");
	var mask_graphics_368 = new cjs.Graphics().p("ABdJnQhTn9EumiQEtmiH8hTQH+hTGiEuI2vfjQmikuhTn8g");
	var mask_graphics_369 = new cjs.Graphics().p("ABLJQQhFn/E4mZQE4maH+hGQIAhFGaE4I3je8Qmak4hGn/g");
	var mask_graphics_370 = new cjs.Graphics().p("AA6I6Qg3oBFCmRQFDmSIAg4QIBg4GSFDI4WeUQmSlDg5oAg");
	var mask_graphics_371 = new cjs.Graphics().p("AAqIkQgqoCFNmIQFOmKIBgqQICgrGJFNI5IdrQmKlOgroBg");
	var mask_graphics_372 = new cjs.Graphics().p("AAcIOQgcoDFXl/QFXmBICgdQIDgdGBFXI56dAQmBlXgdoDg");
	var mask_graphics_373 = new cjs.Graphics().p("AAOH4QgOoCFhl3QFhl4IDgPQIDgQF4FhI6qcUQl3lhgRoEg");
	var mask_graphics_374 = new cjs.Graphics().p("AACHjQgCoCFrlvQFrluIDgCQIFgCFuFrI7ZbnQlulrgDoEg");
	var mask_graphics_375 = new cjs.Graphics().p("AgIHOQALoCF0llQF1lkIDALQIEALFkF1I8Ga4Qlkl0ALoEg");
	var mask_graphics_376 = new cjs.Graphics().p("AgSG5QAYoBF+lbQF+lbICAZQIEAZFaF+I8zaIQlZl+AYoDg");
	var mask_graphics_377 = new cjs.Graphics().p("AgbGlQAmoBGHlQQGGlRICAmQICAnFRGGI9eZYQlQmHAmoCg");
	var mask_graphics_378 = new cjs.Graphics().p("AgiGRQAzoAGPlGQGPlGIBA0QIBAzFGGQI+HYlQlGmPA0oBg");
	var mask_graphics_379 = new cjs.Graphics().p("AgpF+QBBn/GYk7QGXk8H/BBQIABBE8GYI+xXzQk6mYBAn/g");
	var mask_graphics_380 = new cjs.Graphics().p("AguFqQBOn8GgkxQGgkxH9BPQH+BOEwGgI/XW/QkwmgBOn+g");
	var mask_graphics_381 = new cjs.Graphics().p("AgyFXQBbn6GokmQGnklH7BbQH8BcEmGoI/+WJQkkmnBbn8g");
	var mask_graphics_382 = new cjs.Graphics().p("Ag1FFQBpn4GvkaQGvkbH4BpQH5BpEbGvMggiAVUQkamvBpn5g");
	var mask_graphics_383 = new cjs.Graphics().p("Ag3EzQB2n1G2kPQG3kPH1B2QH3B2EPG2MghFAUdQkOm2B1n2g");
	var mask_graphics_384 = new cjs.Graphics().p("Ag3EhQCDnxG9kEQG9kEHyCEQH0CDEDG9MghmATlQkDm9CDnzg");
	var mask_graphics_385 = new cjs.Graphics().p("Ag2EQQCPnuHEj4QHEj4HvCRQHvCQD4HDMgiGAStQj3nECQnvg");
	var mask_graphics_386 = new cjs.Graphics().p("Ag0D/QCcnqHLjsQHKjsHqCdQHsCeDsHJMgilAR0QjrnLCdnrg");
	var mask_graphics_387 = new cjs.Graphics().p("AgxDvQCpnmHQjgQHRjfHmCpQHnCrDgHPMgjCAQ5QjfnQCqnng");
	var mask_graphics_388 = new cjs.Graphics().p("AgtDfQC2nhHWjUQHWjTHiC2QHiC3DUHVMgjdAP+QjTnWC2nig");
	var mask_graphics_389 = new cjs.Graphics().p("AgoDQQDDncHcjIQHbjHHdDDQHdDEDHHaMgj2APCQjInbDDndg");
	var mask_graphics_390 = new cjs.Graphics().p("AghDBQDPnXHhi7QHgi6HYDPQHYDQC7HfMgkQAOGQi6ngDPnYg");
	var mask_graphics_391 = new cjs.Graphics().p("AgZCyQDbnRHliuQHmiuHRDcQHTDcCuHkMgkmANJQiunlDcnTg");
	var mask_graphics_392 = new cjs.Graphics().p("AgQCkQDnnLHqihQHqihHLDnQHNDpCiHoMgk8AMMQihnqDonNg");
	var mask_graphics_393 = new cjs.Graphics().p("AgGCXQD0nFHtiUQHuiVHFD0QHHD0CVHtMglPALNQiVnuD0nGg");
	var mask_graphics_394 = new cjs.Graphics().p("AAECKQEBm+HxiIQHxiHHAEAQHAEACHHwMglhAKOQiHnxD+nAg");
	var mask_graphics_395 = new cjs.Graphics().p("AARB+QEMm3H0h7QH1h6G5ELQG5EMB6HzMglxAJQQh6n1EKm5g");
	var mask_graphics_396 = new cjs.Graphics().p("AAeByQEYmwH4htQH3huGyEXQGxEWBuH4MgmAAIQQhtn4EVmyg");
	var mask_graphics_397 = new cjs.Graphics().p("AAtBnQEjmpH6hgQH7hgGpEiQGrEhBgH7MgmNAHQQhgn7Ehmqg");
	var mask_graphics_398 = new cjs.Graphics().p("AA9BcQEumhH9hSQH8hTGiEtQGjEsBTH9MgmYAGQQhTn9Esmjg");
	var mask_graphics_399 = new cjs.Graphics().p("ABOBSQE5mZH+hFQH/hGGaE4QGbE4BFH+MgmhAFQQhGn/E3mbg");
	var mask_graphics_400 = new cjs.Graphics().p("ABgBJQFDmRIBg4QIAg4GSFCQGSFCA4IBMgmpAEPQg4oBFBmSg");
	var mask_graphics_401 = new cjs.Graphics().p("ABzBAQFOmIICgrQIBgqGJFMQGKFNArIBMgmwADOQgqoBFLmKg");
	var mask_graphics_402 = new cjs.Graphics().p("ACIA4QFXmAIDgdQIDgdGAFXQGBFXAdICMgm0ACNQgdoDFWmAg");
	var mask_graphics_403 = new cjs.Graphics().p("ACdAwQFil2IDgQQIDgQF3FhQF4FhAQIDMgm3ABMQgQoDFgl4g");
	var mask_graphics_404 = new cjs.Graphics().p("ACzApQFsltIDgCQIEgCFtFpQFvFsACIDMgm4AALQgCoEFplug");
	var mask_graphics_405 = new cjs.Graphics().p("Ai0NvQALoDF0llQF0ljIEALQIDALFkFzQFlF1gLIEg");
	var mask_graphics_406 = new cjs.Graphics().p("AizM+QAZoDF8laQF+laIDAZQIDAZFaF8QFbF+gZIDg");
	var mask_graphics_407 = new cjs.Graphics().p("AixMNQAmoCGGlQQGHlQICAnQICAmFQGFQFRGHgnICg");
	var mask_graphics_408 = new cjs.Graphics().p("AiuLdQAzoBGOlGQGQlFIBAzQIBA0FGGOQFGGQg0IAg");
	var mask_graphics_409 = new cjs.Graphics().p("AirKsQBBn/GXk7QGYk7H/BBQH/BBE8GWQE8GYhBIAg");
	var mask_graphics_410 = new cjs.Graphics().p("AimJ8QBOn+GfkwQGgkwH9BOQH+BPEwGeQExGghOH+g");
	var mask_graphics_411 = new cjs.Graphics().p("AihJMQBcn8GmklQGoklH7BcQH7BbEmGnQEmGohcH7g");
	var mask_graphics_412 = new cjs.Graphics().p("AibIcQBpn5GukaQGvkaH5BpQH5BpEaGuQEbGvhpH5g");
	var mask_graphics_413 = new cjs.Graphics().p("AiUHsQB2n1G1kPQG3kPH2B2QH1B2EPG1QEQG3h2H2g");
	var mask_graphics_414 = new cjs.Graphics().p("AiNG8QCEnxG8kEQG9kDHzCDQHyCDEEG8QEEG+iDHzg");
	var mask_graphics_415 = new cjs.Graphics().p("AiEGNQCPntHEj5QHEj3HvCQQHvCQD4HDQD4HEiQHvg");
	var mask_graphics_416 = new cjs.Graphics().p("Ah7FfQCdnqHKjtQHKjrHrCdQHrCdDsHJQDsHLidHrg");
	var mask_graphics_417 = new cjs.Graphics().p("AhwEwQCpnlHQjhQHQjfHnCqQHnCqDfHPQDhHRiqHmg");
	var mask_graphics_418 = new cjs.Graphics().p("AhlECQC1nhHWjUQHXjTHiC3QHiC2DTHVQDUHXi3Hig");
	var mask_graphics_419 = new cjs.Graphics().p("AhZDVQDCncHbjIQHcjHHdDEQHdDDDHHaQDIHcjEHdg");
	var mask_graphics_420 = new cjs.Graphics().p("AhNCoQDPnXHgi7QHhi6HYDPQHYDQC6HfQC7HhjPHYg");
	var mask_graphics_421 = new cjs.Graphics().p("Ag/B8QDbnSHliuQHliuHTDcQHSDcCuHkQCuHljcHTg");
	var mask_graphics_422 = new cjs.Graphics().p("AgxBQQDnnMHqihQHqihHMDoQHMDoCiHoQChHqjoHMg");
	var mask_graphics_423 = new cjs.Graphics().p("AghAkQDznFHtiVQHuiUHGD0QHGD0CUHtQCVHuj0HGg");
	var mask_graphics_424 = new cjs.Graphics().p("AgSgFQD/nAHyiIQHxiHHAEAQG/EACIHwQCHHykAG/g");
	var mask_graphics_425 = new cjs.Graphics().p("AgBgwQELm4H0h7QH1h6G5ELQG5EMB6HzQB7H1kMG5g");
	var mask_graphics_426 = new cjs.Graphics().p("AAQhZQEXmxH3huQH4htGyEXQGxEXBtH2QBuH4kXGyg");
	var mask_graphics_427 = new cjs.Graphics().p("AAiiCQEimqH6hgQH7hgGqEiQGqEiBgH6QBgH6kiGrg");
	var mask_graphics_428 = new cjs.Graphics().p("AA1iqQEtmiH9hTQH9hTGiEuQGiEtBTH7QBTH+ktGig");
	var mask_graphics_429 = new cjs.Graphics().p("ABIjRQE4maH/hGQH/hFGaE4QGbE4BFH9QBGIAk4Gag");
	var mask_graphics_430 = new cjs.Graphics().p("ABdj3QFCmSIBg5QIAg4GSFDQGSFDA4H/QA4IBlCGSg");
	var mask_graphics_431 = new cjs.Graphics().p("ABxkdQFOmKIBgrQICgqGJFNQGKFNArIBQAqIClNGJg");
	var mask_graphics_432 = new cjs.Graphics().p("ACHlCQFXmBIDgdQIDgdGAFXQGBFYAdIBQAdIDlXGBg");
	var mask_graphics_433 = new cjs.Graphics().p("ACdlmQFhl3IEgRQIDgPF3FhQF4FiAPICQAQIDlhF4g");
	var mask_graphics_434 = new cjs.Graphics().p("AC0mJQFrluIDgDQIEgCFuFrQFuFrACICQACIElrFug");
	var mask_graphics_435 = new cjs.Graphics().p("ADLmrQF0llIEALQIDAMFlF0QFkF1gLICQgMIEl0Fkg");
	var mask_graphics_436 = new cjs.Graphics().p("ADjnNQF9laIDAYQIDAZFbF+QFaF9gYICQgZIEl+Fag");
	var mask_graphics_437 = new cjs.Graphics().p("AD7ntQGGlRIDAmQICAnFQGHQFRGFgnICQgmICmGFRg");
	var mask_graphics_438 = new cjs.Graphics().p("AEUoNQGPlGIBA0QIBA0FGGPQFGGOg0IBQgzIBmQFGg");
	var mask_graphics_439 = new cjs.Graphics().p("AEtorQGYk7H/BAQH/BCE8GXQE8GXhBH/QhCIAmXE7g");
	var mask_graphics_440 = new cjs.Graphics().p("AFHpIQGgkxH9BOQH+BPEwGgQExGehOH+QhPH+mfEwg");
	var mask_graphics_441 = new cjs.Graphics().p("AFhplQGoklH7BbQH7BcEmGoQEmGmhcH7QhcH8mnEmg");
	var mask_graphics_442 = new cjs.Graphics().p("AF8qAQGvkbH5BpQH5BqEaGvQEbGuhpH4QhpH5mvEbg");
	var mask_graphics_443 = new cjs.Graphics().p("AGXqaQG3kPH2B1QH1B3EPG2QEQG2h2H1Qh3H3m2EPg");
	var mask_graphics_444 = new cjs.Graphics().p("AGzqzQG9kEHzCDQHyCEEEG9QEEG8iDHyQiEHzm9EEg");
	var mask_graphics_445 = new cjs.Graphics().p("AHPrLQHEj4HvCQQHvCQD4HEQD4HDiQHvQiRHvnED4g");
	var mask_graphics_446 = new cjs.Graphics().p("AHsriQHKjsHrCcQHrCeDsHLQDsHJidHqQidHsnLDsg");
	var mask_graphics_447 = new cjs.Graphics().p("AIJr4QHQjgHnCqQHnCqDgHQQDfHQipHmQirHnnQDgg");
	var mask_graphics_448 = new cjs.Graphics().p("AImsNQHWjTHjC2QHiC3DTHWQDUHVi3HiQi2HinWDUg");
	var mask_graphics_449 = new cjs.Graphics().p("AJEsgQHcjIHdDDQHdDEDHHbQDIHbjEHdQjDHdnbDHg");
	var mask_graphics_450 = new cjs.Graphics().p("AJjszQHgi6HYDPQHYDQC6HhQC7HfjPHYQjQHYnhC7g");
	var mask_graphics_451 = new cjs.Graphics().p("AKBtEQHliuHTDcQHSDcCuHlQCuHljcHRQjcHTnlCug");
	var mask_graphics_452 = new cjs.Graphics().p("AKgtUQHqihHMDoQHMDoCiHqQChHpjoHLQjoHNnqCig");
	var mask_graphics_453 = new cjs.Graphics().p("AK/tiQHuiVHGD0QHGD1CUHtQCVHtj0HFQj0HHnuCVg");
	var mask_graphics_454 = new cjs.Graphics().p("ALftwQHxiHHAD/QG/EBCIHxQCHHwkAHAQkAHAnxCHg");
	var mask_graphics_455 = new cjs.Graphics().p("AL+t8QH1h6G5ELQG4EMB7HzQB6H1kLG5QkMG5n0B6g");
	var mask_graphics_456 = new cjs.Graphics().p("AMeuHQH4htGyEWQGxEYBtH3QBuH3kXGyQkXGxn4Bug");
	var mask_graphics_457 = new cjs.Graphics().p("AM+uRQH7hgGqEiQGqEjBgH5QBgH7kiGpQkiGrn7Bgg");
	var mask_graphics_458 = new cjs.Graphics().p("ANfuZQH8hTGjEtQGiEuBTH8QBTH8ktGiQkuGjn9BTg");
	var mask_graphics_459 = new cjs.Graphics().p("AN/ugQH/hGGaE4QGaE5BGH9QBFH/k3GaQk5Gbn/BFg");
	var mask_graphics_460 = new cjs.Graphics().p("AOgumQIAg4GSFCQGSFDA4IAQA4IAlCGSQlDGSoBA4g");
	var mask_graphics_461 = new cjs.Graphics().p("APAurQICgqGKFMQGJFOAqIBQArIBlNGJQlNGKoCArg");
	var mask_graphics_462 = new cjs.Graphics().p("APhuuQICgdGBFXQGBFXAdICQAdIDlXGAQlYGBoCAdg");
	var mask_graphics_463 = new cjs.Graphics().p("AQBuwQIEgQF3FhQF4FiAPICQAQIDlhF3QliF4oDAQg");
	var mask_graphics_464 = new cjs.Graphics().p("AQiuxQIDgCFvFqQFuFsACICQACIElrFtQlrFvoDACg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(344).to({graphics:mask_graphics_344,x:168.8,y:154.2}).wait(1).to({graphics:mask_graphics_345,x:169.9,y:154.2}).wait(1).to({graphics:mask_graphics_346,x:171.5,y:154.1}).wait(1).to({graphics:mask_graphics_347,x:173.1,y:154}).wait(1).to({graphics:mask_graphics_348,x:174.7,y:153.9}).wait(1).to({graphics:mask_graphics_349,x:176.4,y:153.7}).wait(1).to({graphics:mask_graphics_350,x:178,y:153.5}).wait(1).to({graphics:mask_graphics_351,x:179.6,y:153.2}).wait(1).to({graphics:mask_graphics_352,x:181.2,y:152.9}).wait(1).to({graphics:mask_graphics_353,x:182.8,y:152.5}).wait(1).to({graphics:mask_graphics_354,x:184.4,y:152.1}).wait(1).to({graphics:mask_graphics_355,x:185.9,y:151.7}).wait(1).to({graphics:mask_graphics_356,x:187.5,y:151.2}).wait(1).to({graphics:mask_graphics_357,x:189,y:150.7}).wait(1).to({graphics:mask_graphics_358,x:190.6,y:150.2}).wait(1).to({graphics:mask_graphics_359,x:192.1,y:149.6}).wait(1).to({graphics:mask_graphics_360,x:193.6,y:148.9}).wait(1).to({graphics:mask_graphics_361,x:195.1,y:148.2}).wait(1).to({graphics:mask_graphics_362,x:196.5,y:147.5}).wait(1).to({graphics:mask_graphics_363,x:198,y:146.8}).wait(1).to({graphics:mask_graphics_364,x:199.4,y:146}).wait(1).to({graphics:mask_graphics_365,x:200.8,y:145.2}).wait(1).to({graphics:mask_graphics_366,x:202.2,y:144.3}).wait(1).to({graphics:mask_graphics_367,x:203.6,y:143.4}).wait(1).to({graphics:mask_graphics_368,x:204.9,y:142.5}).wait(1).to({graphics:mask_graphics_369,x:206.2,y:141.5}).wait(1).to({graphics:mask_graphics_370,x:207.5,y:140.5}).wait(1).to({graphics:mask_graphics_371,x:208.7,y:139.5}).wait(1).to({graphics:mask_graphics_372,x:210,y:138.4}).wait(1).to({graphics:mask_graphics_373,x:211.2,y:137.3}).wait(1).to({graphics:mask_graphics_374,x:212.4,y:136.2}).wait(1).to({graphics:mask_graphics_375,x:213.5,y:135}).wait(1).to({graphics:mask_graphics_376,x:214.6,y:133.8}).wait(1).to({graphics:mask_graphics_377,x:215.7,y:132.6}).wait(1).to({graphics:mask_graphics_378,x:216.7,y:131.3}).wait(1).to({graphics:mask_graphics_379,x:217.8,y:130.1}).wait(1).to({graphics:mask_graphics_380,x:218.7,y:128.8}).wait(1).to({graphics:mask_graphics_381,x:219.7,y:127.4}).wait(1).to({graphics:mask_graphics_382,x:220.6,y:126.1}).wait(1).to({graphics:mask_graphics_383,x:221.5,y:124.7}).wait(1).to({graphics:mask_graphics_384,x:222.3,y:123.3}).wait(1).to({graphics:mask_graphics_385,x:223.1,y:121.9}).wait(1).to({graphics:mask_graphics_386,x:223.9,y:120.5}).wait(1).to({graphics:mask_graphics_387,x:224.6,y:119}).wait(1).to({graphics:mask_graphics_388,x:225.3,y:117.5}).wait(1).to({graphics:mask_graphics_389,x:225.9,y:116}).wait(1).to({graphics:mask_graphics_390,x:226.6,y:114.5}).wait(1).to({graphics:mask_graphics_391,x:227.1,y:113}).wait(1).to({graphics:mask_graphics_392,x:227.7,y:111.5}).wait(1).to({graphics:mask_graphics_393,x:228.2,y:109.9}).wait(1).to({graphics:mask_graphics_394,x:228.6,y:108.3}).wait(1).to({graphics:mask_graphics_395,x:229,y:106.8}).wait(1).to({graphics:mask_graphics_396,x:229.4,y:105.2}).wait(1).to({graphics:mask_graphics_397,x:229.7,y:103.6}).wait(1).to({graphics:mask_graphics_398,x:230,y:102}).wait(1).to({graphics:mask_graphics_399,x:230.2,y:100.4}).wait(1).to({graphics:mask_graphics_400,x:230.4,y:98.8}).wait(1).to({graphics:mask_graphics_401,x:230.6,y:97.1}).wait(1).to({graphics:mask_graphics_402,x:230.7,y:95.5}).wait(1).to({graphics:mask_graphics_403,x:230.8,y:93.9}).wait(1).to({graphics:mask_graphics_404,x:230.8,y:92.3}).wait(1).to({graphics:mask_graphics_405,x:230.8,y:93.4}).wait(1).to({graphics:mask_graphics_406,x:230.8,y:95}).wait(1).to({graphics:mask_graphics_407,x:230.8,y:96.6}).wait(1).to({graphics:mask_graphics_408,x:230.8,y:98.2}).wait(1).to({graphics:mask_graphics_409,x:230.9,y:99.9}).wait(1).to({graphics:mask_graphics_410,x:230.9,y:101.5}).wait(1).to({graphics:mask_graphics_411,x:230.9,y:103.1}).wait(1).to({graphics:mask_graphics_412,x:230.9,y:104.7}).wait(1).to({graphics:mask_graphics_413,x:230.9,y:106.3}).wait(1).to({graphics:mask_graphics_414,x:231,y:107.9}).wait(1).to({graphics:mask_graphics_415,x:231,y:109.4}).wait(1).to({graphics:mask_graphics_416,x:231,y:111}).wait(1).to({graphics:mask_graphics_417,x:231,y:112.5}).wait(1).to({graphics:mask_graphics_418,x:231,y:114.1}).wait(1).to({graphics:mask_graphics_419,x:231,y:115.6}).wait(1).to({graphics:mask_graphics_420,x:231,y:117.1}).wait(1).to({graphics:mask_graphics_421,x:231,y:118.6}).wait(1).to({graphics:mask_graphics_422,x:231,y:120}).wait(1).to({graphics:mask_graphics_423,x:231,y:121.5}).wait(1).to({graphics:mask_graphics_424,x:231,y:122.9}).wait(1).to({graphics:mask_graphics_425,x:230.9,y:124.3}).wait(1).to({graphics:mask_graphics_426,x:230.9,y:125.7}).wait(1).to({graphics:mask_graphics_427,x:230.9,y:127.1}).wait(1).to({graphics:mask_graphics_428,x:230.9,y:128.4}).wait(1).to({graphics:mask_graphics_429,x:230.9,y:129.7}).wait(1).to({graphics:mask_graphics_430,x:230.9,y:131}).wait(1).to({graphics:mask_graphics_431,x:230.8,y:132.2}).wait(1).to({graphics:mask_graphics_432,x:230.8,y:133.5}).wait(1).to({graphics:mask_graphics_433,x:230.8,y:134.7}).wait(1).to({graphics:mask_graphics_434,x:230.8,y:135.8}).wait(1).to({graphics:mask_graphics_435,x:230.8,y:137}).wait(1).to({graphics:mask_graphics_436,x:230.8,y:138.1}).wait(1).to({graphics:mask_graphics_437,x:230.8,y:139.2}).wait(1).to({graphics:mask_graphics_438,x:230.8,y:140.2}).wait(1).to({graphics:mask_graphics_439,x:230.9,y:141.2}).wait(1).to({graphics:mask_graphics_440,x:230.9,y:142.2}).wait(1).to({graphics:mask_graphics_441,x:230.9,y:143.2}).wait(1).to({graphics:mask_graphics_442,x:230.9,y:144.1}).wait(1).to({graphics:mask_graphics_443,x:230.9,y:145}).wait(1).to({graphics:mask_graphics_444,x:231,y:145.8}).wait(1).to({graphics:mask_graphics_445,x:231,y:146.6}).wait(1).to({graphics:mask_graphics_446,x:231,y:147.4}).wait(1).to({graphics:mask_graphics_447,x:231,y:148.1}).wait(1).to({graphics:mask_graphics_448,x:231,y:148.8}).wait(1).to({graphics:mask_graphics_449,x:231,y:149.4}).wait(1).to({graphics:mask_graphics_450,x:231,y:150.1}).wait(1).to({graphics:mask_graphics_451,x:231,y:150.6}).wait(1).to({graphics:mask_graphics_452,x:231,y:151.2}).wait(1).to({graphics:mask_graphics_453,x:231,y:151.7}).wait(1).to({graphics:mask_graphics_454,x:231,y:152.1}).wait(1).to({graphics:mask_graphics_455,x:230.9,y:152.5}).wait(1).to({graphics:mask_graphics_456,x:230.9,y:152.9}).wait(1).to({graphics:mask_graphics_457,x:230.9,y:153.2}).wait(1).to({graphics:mask_graphics_458,x:230.9,y:153.5}).wait(1).to({graphics:mask_graphics_459,x:230.9,y:153.7}).wait(1).to({graphics:mask_graphics_460,x:230.8,y:153.9}).wait(1).to({graphics:mask_graphics_461,x:230.8,y:154.1}).wait(1).to({graphics:mask_graphics_462,x:230.8,y:154.2}).wait(1).to({graphics:mask_graphics_463,x:230.8,y:154.3}).wait(1).to({graphics:mask_graphics_464,x:230.8,y:154.3}).wait(171));

	// 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(25,1,1).p("A0PqsIaFAAQG0gNDyDuQDyDtACFhQACFKjCDg");
	this.shape_1.setTransform(286.7,170.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(25,1,1).p("A0PtMIaFAAQG0gNDyDtQDyDuACFiQACFgjgDpQjfDpjlAYQjkAYgyADQgyADg8ACI2nAA");
	this.shape_2.setTransform(286.7,186.8);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},344).to({state:[{t:this.shape_2}]},36).wait(255));

	// Layer 1 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_205 = new cjs.Graphics().p("AiBDdIAAm5IEDAAIAAG5g");
	var mask_1_graphics_206 = new cjs.Graphics().p("AiHDdIAAm5IEPAAIAAG5g");
	var mask_1_graphics_207 = new cjs.Graphics().p("AiODdIAAm5IEdAAIAAG5g");
	var mask_1_graphics_208 = new cjs.Graphics().p("AiUDdIAAm5IEpAAIAAG5g");
	var mask_1_graphics_209 = new cjs.Graphics().p("AibDdIAAm5IE3AAIAAG5g");
	var mask_1_graphics_210 = new cjs.Graphics().p("AihDdIAAm5IFDAAIAAG5g");
	var mask_1_graphics_211 = new cjs.Graphics().p("AinDdIAAm5IFPAAIAAG5g");
	var mask_1_graphics_212 = new cjs.Graphics().p("AiuDdIAAm5IFdAAIAAG5g");
	var mask_1_graphics_213 = new cjs.Graphics().p("Ai0DdIAAm5IFpAAIAAG5g");
	var mask_1_graphics_214 = new cjs.Graphics().p("Ai7DdIAAm5IF3AAIAAG5g");
	var mask_1_graphics_215 = new cjs.Graphics().p("AjBDdIAAm5IGDAAIAAG5g");
	var mask_1_graphics_216 = new cjs.Graphics().p("AjIDdIAAm5IGRAAIAAG5g");
	var mask_1_graphics_217 = new cjs.Graphics().p("AjODdIAAm5IGdAAIAAG5g");
	var mask_1_graphics_218 = new cjs.Graphics().p("AjVDdIAAm5IGrAAIAAG5g");
	var mask_1_graphics_219 = new cjs.Graphics().p("AjbDdIAAm5IG3AAIAAG5g");
	var mask_1_graphics_220 = new cjs.Graphics().p("AjhDdIAAm5IHDAAIAAG5g");
	var mask_1_graphics_221 = new cjs.Graphics().p("AjoDdIAAm5IHRAAIAAG5g");
	var mask_1_graphics_222 = new cjs.Graphics().p("AjuDdIAAm5IHdAAIAAG5g");
	var mask_1_graphics_223 = new cjs.Graphics().p("Aj1DdIAAm5IHrAAIAAG5g");
	var mask_1_graphics_224 = new cjs.Graphics().p("Aj7DdIAAm5IH3AAIAAG5g");
	var mask_1_graphics_225 = new cjs.Graphics().p("AkCDdIAAm5IIFAAIAAG5g");
	var mask_1_graphics_226 = new cjs.Graphics().p("AkIDdIAAm5IIRAAIAAG5g");
	var mask_1_graphics_227 = new cjs.Graphics().p("AkODdIAAm5IIdAAIAAG5g");
	var mask_1_graphics_228 = new cjs.Graphics().p("AkVDdIAAm5IIrAAIAAG5g");
	var mask_1_graphics_229 = new cjs.Graphics().p("AkbDdIAAm5II3AAIAAG5g");
	var mask_1_graphics_230 = new cjs.Graphics().p("AkiDdIAAm5IJFAAIAAG5g");
	var mask_1_graphics_231 = new cjs.Graphics().p("AkoDdIAAm5IJRAAIAAG5g");
	var mask_1_graphics_232 = new cjs.Graphics().p("AkvDdIAAm5IJfAAIAAG5g");
	var mask_1_graphics_233 = new cjs.Graphics().p("Ak1DdIAAm5IJrAAIAAG5g");
	var mask_1_graphics_234 = new cjs.Graphics().p("Ak8DdIAAm5IJ5AAIAAG5g");
	var mask_1_graphics_235 = new cjs.Graphics().p("AlCDdIAAm5IKFAAIAAG5g");
	var mask_1_graphics_236 = new cjs.Graphics().p("AlIDdIAAm5IKRAAIAAG5g");
	var mask_1_graphics_237 = new cjs.Graphics().p("AlPDdIAAm5IKfAAIAAG5g");
	var mask_1_graphics_238 = new cjs.Graphics().p("AlVDdIAAm5IKsAAIAAG5g");
	var mask_1_graphics_239 = new cjs.Graphics().p("AlcDdIAAm5IK5AAIAAG5g");
	var mask_1_graphics_240 = new cjs.Graphics().p("AliDdIAAm5ILFAAIAAG5g");
	var mask_1_graphics_241 = new cjs.Graphics().p("AlpDdIAAm5ILTAAIAAG5g");
	var mask_1_graphics_242 = new cjs.Graphics().p("AlvDdIAAm5ILfAAIAAG5g");
	var mask_1_graphics_243 = new cjs.Graphics().p("Al1DdIAAm5ILrAAIAAG5g");
	var mask_1_graphics_244 = new cjs.Graphics().p("Al8DdIAAm5IL5AAIAAG5g");
	var mask_1_graphics_245 = new cjs.Graphics().p("AmCDdIAAm5IMGAAIAAG5g");
	var mask_1_graphics_246 = new cjs.Graphics().p("AmJDdIAAm5IMTAAIAAG5g");
	var mask_1_graphics_247 = new cjs.Graphics().p("AmPDdIAAm5IMfAAIAAG5g");
	var mask_1_graphics_248 = new cjs.Graphics().p("AmWDdIAAm5IMtAAIAAG5g");
	var mask_1_graphics_249 = new cjs.Graphics().p("AmcDdIAAm5IM5AAIAAG5g");
	var mask_1_graphics_250 = new cjs.Graphics().p("AmjDdIAAm5INHAAIAAG5g");
	var mask_1_graphics_251 = new cjs.Graphics().p("AmpDdIAAm5INTAAIAAG5g");
	var mask_1_graphics_252 = new cjs.Graphics().p("AmvDdIAAm5INgAAIAAG5g");
	var mask_1_graphics_253 = new cjs.Graphics().p("Am2DdIAAm5INtAAIAAG5g");
	var mask_1_graphics_254 = new cjs.Graphics().p("Am8DdIAAm5IN6AAIAAG5g");
	var mask_1_graphics_255 = new cjs.Graphics().p("AnDDdIAAm5IOHAAIAAG5g");
	var mask_1_graphics_256 = new cjs.Graphics().p("AnJDdIAAm5IOTAAIAAG5g");
	var mask_1_graphics_257 = new cjs.Graphics().p("AnQDdIAAm5IOhAAIAAG5g");
	var mask_1_graphics_258 = new cjs.Graphics().p("AnWDdIAAm5IOtAAIAAG5g");
	var mask_1_graphics_259 = new cjs.Graphics().p("AncDdIAAm5IO6AAIAAG5g");
	var mask_1_graphics_260 = new cjs.Graphics().p("AnjDdIAAm5IPHAAIAAG5g");
	var mask_1_graphics_261 = new cjs.Graphics().p("AnpDdIAAm5IPUAAIAAG5g");
	var mask_1_graphics_262 = new cjs.Graphics().p("AnwDdIAAm5IPhAAIAAG5g");
	var mask_1_graphics_263 = new cjs.Graphics().p("An2DdIAAm5IPtAAIAAG5g");
	var mask_1_graphics_264 = new cjs.Graphics().p("An9DdIAAm5IP7AAIAAG5g");
	var mask_1_graphics_265 = new cjs.Graphics().p("AoDDdIAAm5IQHAAIAAG5g");
	var mask_1_graphics_266 = new cjs.Graphics().p("AoKDdIAAm5IQVAAIAAG5g");
	var mask_1_graphics_267 = new cjs.Graphics().p("AoQDdIAAm5IQhAAIAAG5g");
	var mask_1_graphics_268 = new cjs.Graphics().p("AoWDdIAAm5IQuAAIAAG5g");
	var mask_1_graphics_269 = new cjs.Graphics().p("AodDdIAAm5IQ7AAIAAG5g");
	var mask_1_graphics_270 = new cjs.Graphics().p("AojDdIAAm5IRIAAIAAG5g");
	var mask_1_graphics_271 = new cjs.Graphics().p("AoqDdIAAm5IRVAAIAAG5g");
	var mask_1_graphics_272 = new cjs.Graphics().p("AowDdIAAm5IRhAAIAAG5g");
	var mask_1_graphics_273 = new cjs.Graphics().p("Ao3DdIAAm5IRvAAIAAG5g");
	var mask_1_graphics_274 = new cjs.Graphics().p("Ao9DdIAAm5IR7AAIAAG5g");
	var mask_1_graphics_275 = new cjs.Graphics().p("ApDDdIAAm5ISIAAIAAG5g");
	var mask_1_graphics_276 = new cjs.Graphics().p("ApKDdIAAm5ISVAAIAAG5g");
	var mask_1_graphics_277 = new cjs.Graphics().p("ApQDdIAAm5ISiAAIAAG5g");
	var mask_1_graphics_278 = new cjs.Graphics().p("ApXDdIAAm5ISvAAIAAG5g");
	var mask_1_graphics_279 = new cjs.Graphics().p("ApdDdIAAm5IS7AAIAAG5g");
	var mask_1_graphics_280 = new cjs.Graphics().p("ApkDdIAAm5ITJAAIAAG5g");
	var mask_1_graphics_281 = new cjs.Graphics().p("ApqDdIAAm5ITVAAIAAG5g");
	var mask_1_graphics_282 = new cjs.Graphics().p("ApxDdIAAm5ITjAAIAAG5g");
	var mask_1_graphics_283 = new cjs.Graphics().p("Ap3DdIAAm5ITvAAIAAG5g");
	var mask_1_graphics_284 = new cjs.Graphics().p("Ap9DdIAAm5IT8AAIAAG5g");
	var mask_1_graphics_285 = new cjs.Graphics().p("AqEDdIAAm5IUJAAIAAG5g");
	var mask_1_graphics_286 = new cjs.Graphics().p("AqKDdIAAm5IUWAAIAAG5g");
	var mask_1_graphics_287 = new cjs.Graphics().p("AqRDdIAAm5IUjAAIAAG5g");
	var mask_1_graphics_288 = new cjs.Graphics().p("AqXDdIAAm5IUvAAIAAG5g");
	var mask_1_graphics_289 = new cjs.Graphics().p("AqeDdIAAm5IU9AAIAAG5g");
	var mask_1_graphics_290 = new cjs.Graphics().p("AqkDdIAAm5IVJAAIAAG5g");
	var mask_1_graphics_291 = new cjs.Graphics().p("AqqDdIAAm5IVWAAIAAG5g");
	var mask_1_graphics_292 = new cjs.Graphics().p("AqxDdIAAm5IVjAAIAAG5g");
	var mask_1_graphics_293 = new cjs.Graphics().p("Aq3DdIAAm5IVwAAIAAG5g");
	var mask_1_graphics_294 = new cjs.Graphics().p("Aq+DdIAAm5IV9AAIAAG5g");
	var mask_1_graphics_295 = new cjs.Graphics().p("ArEDdIAAm5IWJAAIAAG5g");
	var mask_1_graphics_296 = new cjs.Graphics().p("ArLDdIAAm5IWXAAIAAG5g");
	var mask_1_graphics_297 = new cjs.Graphics().p("ArRDdIAAm5IWjAAIAAG5g");
	var mask_1_graphics_298 = new cjs.Graphics().p("ArYDdIAAm5IWxAAIAAG5g");
	var mask_1_graphics_299 = new cjs.Graphics().p("AreDdIAAm5IW9AAIAAG5g");
	var mask_1_graphics_300 = new cjs.Graphics().p("ArkDdIAAm5IXKAAIAAG5g");
	var mask_1_graphics_301 = new cjs.Graphics().p("ArrDdIAAm5IXXAAIAAG5g");
	var mask_1_graphics_302 = new cjs.Graphics().p("ArxDdIAAm5IXjAAIAAG5g");
	var mask_1_graphics_303 = new cjs.Graphics().p("Ar4DdIAAm5IXxAAIAAG5g");
	var mask_1_graphics_304 = new cjs.Graphics().p("Ar+DdIAAm5IX9AAIAAG5g");
	var mask_1_graphics_305 = new cjs.Graphics().p("AsFDdIAAm5IYLAAIAAG5g");
	var mask_1_graphics_306 = new cjs.Graphics().p("AsLDdIAAm5IYXAAIAAG5g");
	var mask_1_graphics_307 = new cjs.Graphics().p("AsRDdIAAm5IYkAAIAAG5g");
	var mask_1_graphics_308 = new cjs.Graphics().p("AsYDdIAAm5IYxAAIAAG5g");
	var mask_1_graphics_309 = new cjs.Graphics().p("AseDdIAAm5IY9AAIAAG5g");
	var mask_1_graphics_310 = new cjs.Graphics().p("AslDdIAAm5IZLAAIAAG5g");
	var mask_1_graphics_311 = new cjs.Graphics().p("AsrDdIAAm5IZXAAIAAG5g");
	var mask_1_graphics_312 = new cjs.Graphics().p("AsyDdIAAm5IZlAAIAAG5g");
	var mask_1_graphics_313 = new cjs.Graphics().p("As4DdIAAm5IZxAAIAAG5g");
	var mask_1_graphics_314 = new cjs.Graphics().p("As/DdIAAm5IZ/AAIAAG5g");
	var mask_1_graphics_315 = new cjs.Graphics().p("AtFDdIAAm5IaLAAIAAG5g");
	var mask_1_graphics_316 = new cjs.Graphics().p("AtLDdIAAm5IaXAAIAAG5g");
	var mask_1_graphics_317 = new cjs.Graphics().p("AtSDdIAAm5IalAAIAAG5g");
	var mask_1_graphics_318 = new cjs.Graphics().p("AtYDdIAAm5IaxAAIAAG5g");
	var mask_1_graphics_319 = new cjs.Graphics().p("AtfDdIAAm5Ia/AAIAAG5g");
	var mask_1_graphics_320 = new cjs.Graphics().p("AtlDdIAAm5IbLAAIAAG5g");
	var mask_1_graphics_321 = new cjs.Graphics().p("AtsDdIAAm5IbZAAIAAG5g");
	var mask_1_graphics_322 = new cjs.Graphics().p("AtyDdIAAm5IblAAIAAG5g");
	var mask_1_graphics_323 = new cjs.Graphics().p("At4DdIAAm5IbxAAIAAG5g");
	var mask_1_graphics_324 = new cjs.Graphics().p("At/DdIAAm5Ib/AAIAAG5g");
	var mask_1_graphics_325 = new cjs.Graphics().p("AuFDdIAAm5IcLAAIAAG5g");
	var mask_1_graphics_326 = new cjs.Graphics().p("AuMDdIAAm5IcZAAIAAG5g");
	var mask_1_graphics_327 = new cjs.Graphics().p("AuSDdIAAm5IclAAIAAG5g");
	var mask_1_graphics_328 = new cjs.Graphics().p("AuZDdIAAm5IczAAIAAG5g");
	var mask_1_graphics_329 = new cjs.Graphics().p("AufDdIAAm5Ic/AAIAAG5g");
	var mask_1_graphics_330 = new cjs.Graphics().p("AumDdIAAm5IdNAAIAAG5g");
	var mask_1_graphics_331 = new cjs.Graphics().p("AusDdIAAm5IdZAAIAAG5g");
	var mask_1_graphics_332 = new cjs.Graphics().p("AuyDdIAAm5IdlAAIAAG5g");
	var mask_1_graphics_333 = new cjs.Graphics().p("Au5DdIAAm5IdzAAIAAG5g");
	var mask_1_graphics_334 = new cjs.Graphics().p("Au/DdIAAm5Id/AAIAAG5g");
	var mask_1_graphics_335 = new cjs.Graphics().p("AvGDdIAAm5IeNAAIAAG5g");
	var mask_1_graphics_336 = new cjs.Graphics().p("AvMDdIAAm5IeZAAIAAG5g");
	var mask_1_graphics_337 = new cjs.Graphics().p("AvTDdIAAm5IenAAIAAG5g");
	var mask_1_graphics_338 = new cjs.Graphics().p("AvZDdIAAm5IezAAIAAG5g");
	var mask_1_graphics_339 = new cjs.Graphics().p("AvfDdIAAm5Ie/AAIAAG5g");
	var mask_1_graphics_340 = new cjs.Graphics().p("AvmDdIAAm5IfNAAIAAG5g");
	var mask_1_graphics_341 = new cjs.Graphics().p("AvsDdIAAm5IfZAAIAAG5g");
	var mask_1_graphics_342 = new cjs.Graphics().p("AvzDdIAAm5IfnAAIAAG5g");
	var mask_1_graphics_343 = new cjs.Graphics().p("Av5DdIAAm5IfzAAIAAG5g");
	var mask_1_graphics_344 = new cjs.Graphics().p("AwADdIAAm5MAgBAAAIAAG5g");
	var mask_1_graphics_464 = new cjs.Graphics().p("APZQvIAAm6IAyAAIAAG6gAwKp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_465 = new cjs.Graphics().p("APHQvIAAm6IBEAAIAAG6gAwKp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_466 = new cjs.Graphics().p("AO1QvIAAm6IBWAAIAAG6gAwJp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_467 = new cjs.Graphics().p("AOjQvIAAm6IBoAAIAAG6gAwJp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_468 = new cjs.Graphics().p("AOSQvIAAm6IB4AAIAAG6gAwJp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_469 = new cjs.Graphics().p("AOAQvIAAm6ICKAAIAAG6gAwJp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_470 = new cjs.Graphics().p("ANuQvIAAm6ICcAAIAAG6gAwJp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_471 = new cjs.Graphics().p("ANdQvIAAm6ICtAAIAAG6gAwJp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_472 = new cjs.Graphics().p("ANLQvIAAm6IC/AAIAAG6gAwJp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_473 = new cjs.Graphics().p("AM5QvIAAm6IDRAAIAAG6gAwJp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_474 = new cjs.Graphics().p("AMnQvIAAm6IDjAAIAAG6gAwJp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_475 = new cjs.Graphics().p("AMVQvIAAm6ID1AAIAAG6gAwJp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_476 = new cjs.Graphics().p("AMDQvIAAm6IEGAAIAAG6gAwIp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_477 = new cjs.Graphics().p("ALxQvIAAm6IEYAAIAAG6gAwIp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_478 = new cjs.Graphics().p("ALgQvIAAm6IEpAAIAAG6gAwIp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_479 = new cjs.Graphics().p("ALOQvIAAm6IE7AAIAAG6gAwIp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_480 = new cjs.Graphics().p("AK8QvIAAm6IFNAAIAAG6gAwIp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_481 = new cjs.Graphics().p("AKrQvIAAm6IFeAAIAAG6gAwIp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_482 = new cjs.Graphics().p("AKZQvIAAm6IFwAAIAAG6gAwIp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_483 = new cjs.Graphics().p("AKHQvIAAm6IGCAAIAAG6gAwIp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_484 = new cjs.Graphics().p("AJ1QvIAAm6IGUAAIAAG6gAwIp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_485 = new cjs.Graphics().p("AJjQvIAAm6IGmAAIAAG6gAwIp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_486 = new cjs.Graphics().p("AJRQvIAAm6IG3AAIAAG6gAwHp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_487 = new cjs.Graphics().p("AI/QvIAAm6IHJAAIAAG6gAwHp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_488 = new cjs.Graphics().p("AIuQvIAAm6IHaAAIAAG6gAwHp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_489 = new cjs.Graphics().p("AIcQvIAAm6IHsAAIAAG6gAwHp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_490 = new cjs.Graphics().p("AIKQvIAAm6IH+AAIAAG6gAwHp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_491 = new cjs.Graphics().p("AH4QvIAAm6IIQAAIAAG6gAwHp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_492 = new cjs.Graphics().p("AHmQvIAAm6IIiAAIAAG6gAwHp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_493 = new cjs.Graphics().p("AHVQvIAAm6IIzAAIAAG6gAwHp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_494 = new cjs.Graphics().p("AHDQvIAAm6IJFAAIAAG6gAwHp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_495 = new cjs.Graphics().p("AGxQvIAAm6IJXAAIAAG6gAwHp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_496 = new cjs.Graphics().p("AGfQvIAAm6IJoAAIAAG6gAwGp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_497 = new cjs.Graphics().p("AGNQvIAAm6IJ6AAIAAG6gAwGp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_498 = new cjs.Graphics().p("AF7QvIAAm6IKMAAIAAG6gAwGp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_499 = new cjs.Graphics().p("AFqQvIAAm6IKdAAIAAG6gAwGp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_500 = new cjs.Graphics().p("AFYQvIAAm6IKvAAIAAG6gAwGp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_501 = new cjs.Graphics().p("AFGQvIAAm6ILBAAIAAG6gAwGp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_502 = new cjs.Graphics().p("AE0QvIAAm6ILTAAIAAG6gAwGp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_503 = new cjs.Graphics().p("AEiQvIAAm6ILlAAIAAG6gAwGp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_504 = new cjs.Graphics().p("AEQQvIAAm6IL3AAIAAG6gAwGp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_505 = new cjs.Graphics().p("AD/QvIAAm6IMIAAIAAG6gAwGp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_506 = new cjs.Graphics().p("ADtQvIAAm6IMaAAIAAG6gAwFp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_507 = new cjs.Graphics().p("ADbQvIAAm6IMsAAIAAG6gAwFp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_508 = new cjs.Graphics().p("ADJQvIAAm6IM9AAIAAG6gAwFp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_509 = new cjs.Graphics().p("AC3QvIAAm6INPAAIAAG6gAwFp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_510 = new cjs.Graphics().p("AClQvIAAm6INhAAIAAG6gAwFp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_511 = new cjs.Graphics().p("ACUQvIAAm6INyAAIAAG6gAwFp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_512 = new cjs.Graphics().p("ACCQvIAAm6IOEAAIAAG6gAwFp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_513 = new cjs.Graphics().p("ABwQvIAAm6IOWAAIAAG6gAwFp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_514 = new cjs.Graphics().p("ABeQvIAAm6IOoAAIAAG6gAwFp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_515 = new cjs.Graphics().p("ABMQvIAAm6IO6AAIAAG6gAwFp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_516 = new cjs.Graphics().p("AA7QvIAAm6IPLAAIAAG6gAwEp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_517 = new cjs.Graphics().p("AApQvIAAm6IPdAAIAAG6gAwEp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_518 = new cjs.Graphics().p("AAXQvIAAm6IPuAAIAAG6gAwEp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_519 = new cjs.Graphics().p("AAFQvIAAm6IQAAAIAAG6gAwEp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_520 = new cjs.Graphics().p("AgMQvIAAm6IQRAAIAAG6gAwEp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_521 = new cjs.Graphics().p("AgeQvIAAm6IQjAAIAAG6gAwEp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_522 = new cjs.Graphics().p("AgwQvIAAm6IQ1AAIAAG6gAwEp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_523 = new cjs.Graphics().p("AhBQvIAAm6IRGAAIAAG6gAwEp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_524 = new cjs.Graphics().p("AhTQvIAAm6IRYAAIAAG6gAwEp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_525 = new cjs.Graphics().p("AhlQvIAAm6IRqAAIAAG6gAwEp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_526 = new cjs.Graphics().p("Ah2QvIAAm6IR6AAIAAG6gAwDp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_527 = new cjs.Graphics().p("AiIQvIAAm6ISMAAIAAG6gAwDp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_528 = new cjs.Graphics().p("AiaQvIAAm6ISeAAIAAG6gAwDp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_529 = new cjs.Graphics().p("AisQvIAAm6ISwAAIAAG6gAwDp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_530 = new cjs.Graphics().p("Ai+QvIAAm6ITCAAIAAG6gAwDp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_531 = new cjs.Graphics().p("AjQQvIAAm6ITUAAIAAG6gAwDp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_532 = new cjs.Graphics().p("AjiQvIAAm6ITmAAIAAG6gAwDp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_533 = new cjs.Graphics().p("AjzQvIAAm6IT3AAIAAG6gAwDp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_534 = new cjs.Graphics().p("AkFQvIAAm6IUJAAIAAG6gAwDp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_535 = new cjs.Graphics().p("AkXQvIAAm6IUbAAIAAG6gAwDp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_536 = new cjs.Graphics().p("AkoQvIAAm6IUrAAIAAG6gAwCp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_537 = new cjs.Graphics().p("Ak6QvIAAm6IU9AAIAAG6gAwCp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_538 = new cjs.Graphics().p("AlMQvIAAm6IVPAAIAAG6gAwCp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_539 = new cjs.Graphics().p("AleQvIAAm6IVhAAIAAG6gAwCp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_540 = new cjs.Graphics().p("AlwQvIAAm6IVzAAIAAG6gAwCp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_541 = new cjs.Graphics().p("AmCQvIAAm6IWFAAIAAG6gAwCp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_542 = new cjs.Graphics().p("AmUQvIAAm6IWXAAIAAG6gAwCp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_543 = new cjs.Graphics().p("AmlQvIAAm6IWoAAIAAG6gAwCp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_544 = new cjs.Graphics().p("Am3QvIAAm6IW6AAIAAG6gAwCp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_545 = new cjs.Graphics().p("AnJQvIAAm6IXMAAIAAG6gAwCp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_546 = new cjs.Graphics().p("AnbQvIAAm6IXeAAIAAG6gAwBp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_547 = new cjs.Graphics().p("AntQvIAAm6IXwAAIAAG6gAwBp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_548 = new cjs.Graphics().p("An/QvIAAm6IYBAAIAAG6gAwBp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_549 = new cjs.Graphics().p("AoQQvIAAm6IYSAAIAAG6gAwBp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_550 = new cjs.Graphics().p("AoiQvIAAm6IYkAAIAAG6gAwBp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_551 = new cjs.Graphics().p("Ao0QvIAAm6IY2AAIAAG6gAwBp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_552 = new cjs.Graphics().p("ApGQvIAAm6IZIAAIAAG6gAwBp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_553 = new cjs.Graphics().p("ApYQvIAAm6IZaAAIAAG6gAwBp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_554 = new cjs.Graphics().p("ApqQvIAAm6IZsAAIAAG6gAwBp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_555 = new cjs.Graphics().p("Ap7QvIAAm6IZ9AAIAAG6gAwBp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_556 = new cjs.Graphics().p("AqNQvIAAm6IaPAAIAAG6gAwAp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_557 = new cjs.Graphics().p("AqfQvIAAm6IahAAIAAG6gAwAp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_558 = new cjs.Graphics().p("AqxQvIAAm6IayAAIAAG6gAwAp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_559 = new cjs.Graphics().p("ArDQvIAAm6IbEAAIAAG6gAwAp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_560 = new cjs.Graphics().p("ArVQvIAAm6IbWAAIAAG6gAwAp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_561 = new cjs.Graphics().p("ArmQvIAAm6IbnAAIAAG6gAwAp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_562 = new cjs.Graphics().p("Ar4QvIAAm6Ib5AAIAAG6gAwAp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_563 = new cjs.Graphics().p("AsKQvIAAm6IcLAAIAAG6gAwAp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_564 = new cjs.Graphics().p("AscQvIAAm6IcdAAIAAG6gAwAp0IAAm6MAgBAAAIAAG6g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(205).to({graphics:mask_1_graphics_205,x:146,y:99.1}).wait(1).to({graphics:mask_1_graphics_206,x:146.7,y:99.1}).wait(1).to({graphics:mask_1_graphics_207,x:147.3,y:99.1}).wait(1).to({graphics:mask_1_graphics_208,x:147.9,y:99.1}).wait(1).to({graphics:mask_1_graphics_209,x:148.6,y:99.1}).wait(1).to({graphics:mask_1_graphics_210,x:149.2,y:99.1}).wait(1).to({graphics:mask_1_graphics_211,x:149.9,y:99.1}).wait(1).to({graphics:mask_1_graphics_212,x:150.5,y:99.1}).wait(1).to({graphics:mask_1_graphics_213,x:151.2,y:99.1}).wait(1).to({graphics:mask_1_graphics_214,x:151.8,y:99.1}).wait(1).to({graphics:mask_1_graphics_215,x:152.4,y:99.1}).wait(1).to({graphics:mask_1_graphics_216,x:153.1,y:99.1}).wait(1).to({graphics:mask_1_graphics_217,x:153.7,y:99.1}).wait(1).to({graphics:mask_1_graphics_218,x:154.4,y:99.1}).wait(1).to({graphics:mask_1_graphics_219,x:155,y:99.1}).wait(1).to({graphics:mask_1_graphics_220,x:155.7,y:99.1}).wait(1).to({graphics:mask_1_graphics_221,x:156.3,y:99.1}).wait(1).to({graphics:mask_1_graphics_222,x:157,y:99.1}).wait(1).to({graphics:mask_1_graphics_223,x:157.6,y:99.1}).wait(1).to({graphics:mask_1_graphics_224,x:158.2,y:99.1}).wait(1).to({graphics:mask_1_graphics_225,x:158.9,y:99.1}).wait(1).to({graphics:mask_1_graphics_226,x:159.5,y:99.1}).wait(1).to({graphics:mask_1_graphics_227,x:160.2,y:99.1}).wait(1).to({graphics:mask_1_graphics_228,x:160.8,y:99.1}).wait(1).to({graphics:mask_1_graphics_229,x:161.5,y:99.1}).wait(1).to({graphics:mask_1_graphics_230,x:162.1,y:99.1}).wait(1).to({graphics:mask_1_graphics_231,x:162.7,y:99.1}).wait(1).to({graphics:mask_1_graphics_232,x:163.4,y:99.1}).wait(1).to({graphics:mask_1_graphics_233,x:164,y:99.1}).wait(1).to({graphics:mask_1_graphics_234,x:164.7,y:99.1}).wait(1).to({graphics:mask_1_graphics_235,x:165.3,y:99.1}).wait(1).to({graphics:mask_1_graphics_236,x:166,y:99.1}).wait(1).to({graphics:mask_1_graphics_237,x:166.6,y:99.1}).wait(1).to({graphics:mask_1_graphics_238,x:167.3,y:99.1}).wait(1).to({graphics:mask_1_graphics_239,x:167.9,y:99.1}).wait(1).to({graphics:mask_1_graphics_240,x:168.5,y:99.1}).wait(1).to({graphics:mask_1_graphics_241,x:169.2,y:99.1}).wait(1).to({graphics:mask_1_graphics_242,x:169.8,y:99.1}).wait(1).to({graphics:mask_1_graphics_243,x:170.5,y:99.1}).wait(1).to({graphics:mask_1_graphics_244,x:171.1,y:99.1}).wait(1).to({graphics:mask_1_graphics_245,x:171.8,y:99.1}).wait(1).to({graphics:mask_1_graphics_246,x:172.4,y:99.1}).wait(1).to({graphics:mask_1_graphics_247,x:173,y:99.1}).wait(1).to({graphics:mask_1_graphics_248,x:173.7,y:99.1}).wait(1).to({graphics:mask_1_graphics_249,x:174.3,y:99.1}).wait(1).to({graphics:mask_1_graphics_250,x:175,y:99.1}).wait(1).to({graphics:mask_1_graphics_251,x:175.6,y:99.1}).wait(1).to({graphics:mask_1_graphics_252,x:176.3,y:99.1}).wait(1).to({graphics:mask_1_graphics_253,x:176.9,y:99.1}).wait(1).to({graphics:mask_1_graphics_254,x:177.6,y:99.1}).wait(1).to({graphics:mask_1_graphics_255,x:178.2,y:99.1}).wait(1).to({graphics:mask_1_graphics_256,x:178.8,y:99.1}).wait(1).to({graphics:mask_1_graphics_257,x:179.5,y:99.1}).wait(1).to({graphics:mask_1_graphics_258,x:180.1,y:99.1}).wait(1).to({graphics:mask_1_graphics_259,x:180.8,y:99.1}).wait(1).to({graphics:mask_1_graphics_260,x:181.4,y:99.1}).wait(1).to({graphics:mask_1_graphics_261,x:182.1,y:99.1}).wait(1).to({graphics:mask_1_graphics_262,x:182.7,y:99.1}).wait(1).to({graphics:mask_1_graphics_263,x:183.3,y:99.1}).wait(1).to({graphics:mask_1_graphics_264,x:184,y:99.1}).wait(1).to({graphics:mask_1_graphics_265,x:184.6,y:99.1}).wait(1).to({graphics:mask_1_graphics_266,x:185.3,y:99.1}).wait(1).to({graphics:mask_1_graphics_267,x:185.9,y:99.1}).wait(1).to({graphics:mask_1_graphics_268,x:186.6,y:99.1}).wait(1).to({graphics:mask_1_graphics_269,x:187.2,y:99.1}).wait(1).to({graphics:mask_1_graphics_270,x:187.9,y:99.1}).wait(1).to({graphics:mask_1_graphics_271,x:188.5,y:99.1}).wait(1).to({graphics:mask_1_graphics_272,x:189.1,y:99.1}).wait(1).to({graphics:mask_1_graphics_273,x:189.8,y:99.1}).wait(1).to({graphics:mask_1_graphics_274,x:190.4,y:99.1}).wait(1).to({graphics:mask_1_graphics_275,x:191.1,y:99.1}).wait(1).to({graphics:mask_1_graphics_276,x:191.7,y:99.1}).wait(1).to({graphics:mask_1_graphics_277,x:192.4,y:99.1}).wait(1).to({graphics:mask_1_graphics_278,x:193,y:99.1}).wait(1).to({graphics:mask_1_graphics_279,x:193.6,y:99.1}).wait(1).to({graphics:mask_1_graphics_280,x:194.3,y:99.1}).wait(1).to({graphics:mask_1_graphics_281,x:194.9,y:99.1}).wait(1).to({graphics:mask_1_graphics_282,x:195.6,y:99.1}).wait(1).to({graphics:mask_1_graphics_283,x:196.2,y:99.1}).wait(1).to({graphics:mask_1_graphics_284,x:196.9,y:99.1}).wait(1).to({graphics:mask_1_graphics_285,x:197.5,y:99.1}).wait(1).to({graphics:mask_1_graphics_286,x:198.2,y:99.1}).wait(1).to({graphics:mask_1_graphics_287,x:198.8,y:99.1}).wait(1).to({graphics:mask_1_graphics_288,x:199.4,y:99.1}).wait(1).to({graphics:mask_1_graphics_289,x:200.1,y:99.1}).wait(1).to({graphics:mask_1_graphics_290,x:200.7,y:99.1}).wait(1).to({graphics:mask_1_graphics_291,x:201.4,y:99.1}).wait(1).to({graphics:mask_1_graphics_292,x:202,y:99.1}).wait(1).to({graphics:mask_1_graphics_293,x:202.7,y:99.1}).wait(1).to({graphics:mask_1_graphics_294,x:203.3,y:99.1}).wait(1).to({graphics:mask_1_graphics_295,x:203.9,y:99.1}).wait(1).to({graphics:mask_1_graphics_296,x:204.6,y:99.1}).wait(1).to({graphics:mask_1_graphics_297,x:205.2,y:99.1}).wait(1).to({graphics:mask_1_graphics_298,x:205.9,y:99.1}).wait(1).to({graphics:mask_1_graphics_299,x:206.5,y:99.1}).wait(1).to({graphics:mask_1_graphics_300,x:207.2,y:99.1}).wait(1).to({graphics:mask_1_graphics_301,x:207.8,y:99.1}).wait(1).to({graphics:mask_1_graphics_302,x:208.5,y:99.1}).wait(1).to({graphics:mask_1_graphics_303,x:209.1,y:99.1}).wait(1).to({graphics:mask_1_graphics_304,x:209.7,y:99.1}).wait(1).to({graphics:mask_1_graphics_305,x:210.4,y:99.1}).wait(1).to({graphics:mask_1_graphics_306,x:211,y:99.1}).wait(1).to({graphics:mask_1_graphics_307,x:211.7,y:99.1}).wait(1).to({graphics:mask_1_graphics_308,x:212.3,y:99.1}).wait(1).to({graphics:mask_1_graphics_309,x:213,y:99.1}).wait(1).to({graphics:mask_1_graphics_310,x:213.6,y:99.1}).wait(1).to({graphics:mask_1_graphics_311,x:214.2,y:99.1}).wait(1).to({graphics:mask_1_graphics_312,x:214.9,y:99.1}).wait(1).to({graphics:mask_1_graphics_313,x:215.5,y:99.1}).wait(1).to({graphics:mask_1_graphics_314,x:216.2,y:99.1}).wait(1).to({graphics:mask_1_graphics_315,x:216.8,y:99.1}).wait(1).to({graphics:mask_1_graphics_316,x:217.5,y:99.1}).wait(1).to({graphics:mask_1_graphics_317,x:218.1,y:99.1}).wait(1).to({graphics:mask_1_graphics_318,x:218.8,y:99.1}).wait(1).to({graphics:mask_1_graphics_319,x:219.4,y:99.1}).wait(1).to({graphics:mask_1_graphics_320,x:220,y:99.1}).wait(1).to({graphics:mask_1_graphics_321,x:220.7,y:99.1}).wait(1).to({graphics:mask_1_graphics_322,x:221.3,y:99.1}).wait(1).to({graphics:mask_1_graphics_323,x:222,y:99.1}).wait(1).to({graphics:mask_1_graphics_324,x:222.6,y:99.1}).wait(1).to({graphics:mask_1_graphics_325,x:223.3,y:99.1}).wait(1).to({graphics:mask_1_graphics_326,x:223.9,y:99.1}).wait(1).to({graphics:mask_1_graphics_327,x:224.5,y:99.1}).wait(1).to({graphics:mask_1_graphics_328,x:225.2,y:99.1}).wait(1).to({graphics:mask_1_graphics_329,x:225.8,y:99.1}).wait(1).to({graphics:mask_1_graphics_330,x:226.5,y:99.1}).wait(1).to({graphics:mask_1_graphics_331,x:227.1,y:99.1}).wait(1).to({graphics:mask_1_graphics_332,x:227.8,y:99.1}).wait(1).to({graphics:mask_1_graphics_333,x:228.4,y:99.1}).wait(1).to({graphics:mask_1_graphics_334,x:229.1,y:99.1}).wait(1).to({graphics:mask_1_graphics_335,x:229.7,y:99.1}).wait(1).to({graphics:mask_1_graphics_336,x:230.3,y:99.1}).wait(1).to({graphics:mask_1_graphics_337,x:231,y:99.1}).wait(1).to({graphics:mask_1_graphics_338,x:231.6,y:99.1}).wait(1).to({graphics:mask_1_graphics_339,x:232.3,y:99.1}).wait(1).to({graphics:mask_1_graphics_340,x:232.9,y:99.1}).wait(1).to({graphics:mask_1_graphics_341,x:233.6,y:99.1}).wait(1).to({graphics:mask_1_graphics_342,x:234.2,y:99.1}).wait(1).to({graphics:mask_1_graphics_343,x:234.8,y:99.1}).wait(1).to({graphics:mask_1_graphics_344,x:235.5,y:99.1}).wait(120).to({graphics:mask_1_graphics_464,x:236.5,y:184.1}).wait(1).to({graphics:mask_1_graphics_465,x:236.5,y:184.1}).wait(1).to({graphics:mask_1_graphics_466,x:236.5,y:184.1}).wait(1).to({graphics:mask_1_graphics_467,x:236.5,y:184.1}).wait(1).to({graphics:mask_1_graphics_468,x:236.4,y:184.1}).wait(1).to({graphics:mask_1_graphics_469,x:236.4,y:184.1}).wait(1).to({graphics:mask_1_graphics_470,x:236.4,y:184.1}).wait(1).to({graphics:mask_1_graphics_471,x:236.4,y:184.1}).wait(1).to({graphics:mask_1_graphics_472,x:236.4,y:184.1}).wait(1).to({graphics:mask_1_graphics_473,x:236.4,y:184.1}).wait(1).to({graphics:mask_1_graphics_474,x:236.4,y:184.1}).wait(1).to({graphics:mask_1_graphics_475,x:236.4,y:184.1}).wait(1).to({graphics:mask_1_graphics_476,x:236.4,y:184.1}).wait(1).to({graphics:mask_1_graphics_477,x:236.4,y:184.1}).wait(1).to({graphics:mask_1_graphics_478,x:236.3,y:184.1}).wait(1).to({graphics:mask_1_graphics_479,x:236.3,y:184.1}).wait(1).to({graphics:mask_1_graphics_480,x:236.3,y:184.1}).wait(1).to({graphics:mask_1_graphics_481,x:236.3,y:184.1}).wait(1).to({graphics:mask_1_graphics_482,x:236.3,y:184.1}).wait(1).to({graphics:mask_1_graphics_483,x:236.3,y:184.1}).wait(1).to({graphics:mask_1_graphics_484,x:236.3,y:184.1}).wait(1).to({graphics:mask_1_graphics_485,x:236.3,y:184.1}).wait(1).to({graphics:mask_1_graphics_486,x:236.3,y:184.1}).wait(1).to({graphics:mask_1_graphics_487,x:236.3,y:184.1}).wait(1).to({graphics:mask_1_graphics_488,x:236.2,y:184.1}).wait(1).to({graphics:mask_1_graphics_489,x:236.2,y:184.1}).wait(1).to({graphics:mask_1_graphics_490,x:236.2,y:184.1}).wait(1).to({graphics:mask_1_graphics_491,x:236.2,y:184.1}).wait(1).to({graphics:mask_1_graphics_492,x:236.2,y:184.1}).wait(1).to({graphics:mask_1_graphics_493,x:236.2,y:184.1}).wait(1).to({graphics:mask_1_graphics_494,x:236.2,y:184.1}).wait(1).to({graphics:mask_1_graphics_495,x:236.2,y:184.1}).wait(1).to({graphics:mask_1_graphics_496,x:236.2,y:184.1}).wait(1).to({graphics:mask_1_graphics_497,x:236.2,y:184.1}).wait(1).to({graphics:mask_1_graphics_498,x:236.1,y:184.1}).wait(1).to({graphics:mask_1_graphics_499,x:236.1,y:184.1}).wait(1).to({graphics:mask_1_graphics_500,x:236.1,y:184.1}).wait(1).to({graphics:mask_1_graphics_501,x:236.1,y:184.1}).wait(1).to({graphics:mask_1_graphics_502,x:236.1,y:184.1}).wait(1).to({graphics:mask_1_graphics_503,x:236.1,y:184.1}).wait(1).to({graphics:mask_1_graphics_504,x:236.1,y:184.1}).wait(1).to({graphics:mask_1_graphics_505,x:236.1,y:184.1}).wait(1).to({graphics:mask_1_graphics_506,x:236.1,y:184.1}).wait(1).to({graphics:mask_1_graphics_507,x:236.1,y:184.1}).wait(1).to({graphics:mask_1_graphics_508,x:236,y:184.1}).wait(1).to({graphics:mask_1_graphics_509,x:236,y:184.1}).wait(1).to({graphics:mask_1_graphics_510,x:236,y:184.1}).wait(1).to({graphics:mask_1_graphics_511,x:236,y:184.1}).wait(1).to({graphics:mask_1_graphics_512,x:236,y:184.1}).wait(1).to({graphics:mask_1_graphics_513,x:236,y:184.1}).wait(1).to({graphics:mask_1_graphics_514,x:236,y:184.1}).wait(1).to({graphics:mask_1_graphics_515,x:236,y:184.1}).wait(1).to({graphics:mask_1_graphics_516,x:236,y:184.1}).wait(1).to({graphics:mask_1_graphics_517,x:236,y:184.1}).wait(1).to({graphics:mask_1_graphics_518,x:235.9,y:184.1}).wait(1).to({graphics:mask_1_graphics_519,x:235.9,y:184.1}).wait(1).to({graphics:mask_1_graphics_520,x:235.9,y:184.1}).wait(1).to({graphics:mask_1_graphics_521,x:235.9,y:184.1}).wait(1).to({graphics:mask_1_graphics_522,x:235.9,y:184.1}).wait(1).to({graphics:mask_1_graphics_523,x:235.9,y:184.1}).wait(1).to({graphics:mask_1_graphics_524,x:235.9,y:184.1}).wait(1).to({graphics:mask_1_graphics_525,x:235.9,y:184.1}).wait(1).to({graphics:mask_1_graphics_526,x:235.9,y:184.1}).wait(1).to({graphics:mask_1_graphics_527,x:235.9,y:184.1}).wait(1).to({graphics:mask_1_graphics_528,x:235.8,y:184.1}).wait(1).to({graphics:mask_1_graphics_529,x:235.8,y:184.1}).wait(1).to({graphics:mask_1_graphics_530,x:235.8,y:184.1}).wait(1).to({graphics:mask_1_graphics_531,x:235.8,y:184.1}).wait(1).to({graphics:mask_1_graphics_532,x:235.8,y:184.1}).wait(1).to({graphics:mask_1_graphics_533,x:235.8,y:184.1}).wait(1).to({graphics:mask_1_graphics_534,x:235.8,y:184.1}).wait(1).to({graphics:mask_1_graphics_535,x:235.8,y:184.1}).wait(1).to({graphics:mask_1_graphics_536,x:235.8,y:184.1}).wait(1).to({graphics:mask_1_graphics_537,x:235.8,y:184.1}).wait(1).to({graphics:mask_1_graphics_538,x:235.7,y:184.1}).wait(1).to({graphics:mask_1_graphics_539,x:235.7,y:184.1}).wait(1).to({graphics:mask_1_graphics_540,x:235.7,y:184.1}).wait(1).to({graphics:mask_1_graphics_541,x:235.7,y:184.1}).wait(1).to({graphics:mask_1_graphics_542,x:235.7,y:184.1}).wait(1).to({graphics:mask_1_graphics_543,x:235.7,y:184.1}).wait(1).to({graphics:mask_1_graphics_544,x:235.7,y:184.1}).wait(1).to({graphics:mask_1_graphics_545,x:235.7,y:184.1}).wait(1).to({graphics:mask_1_graphics_546,x:235.7,y:184.1}).wait(1).to({graphics:mask_1_graphics_547,x:235.7,y:184.1}).wait(1).to({graphics:mask_1_graphics_548,x:235.6,y:184.1}).wait(1).to({graphics:mask_1_graphics_549,x:235.6,y:184.1}).wait(1).to({graphics:mask_1_graphics_550,x:235.6,y:184.1}).wait(1).to({graphics:mask_1_graphics_551,x:235.6,y:184.1}).wait(1).to({graphics:mask_1_graphics_552,x:235.6,y:184.1}).wait(1).to({graphics:mask_1_graphics_553,x:235.6,y:184.1}).wait(1).to({graphics:mask_1_graphics_554,x:235.6,y:184.1}).wait(1).to({graphics:mask_1_graphics_555,x:235.6,y:184.1}).wait(1).to({graphics:mask_1_graphics_556,x:235.6,y:184.1}).wait(1).to({graphics:mask_1_graphics_557,x:235.6,y:184.1}).wait(1).to({graphics:mask_1_graphics_558,x:235.5,y:184.1}).wait(1).to({graphics:mask_1_graphics_559,x:235.5,y:184.1}).wait(1).to({graphics:mask_1_graphics_560,x:235.5,y:184.1}).wait(1).to({graphics:mask_1_graphics_561,x:235.5,y:184.1}).wait(1).to({graphics:mask_1_graphics_562,x:235.5,y:184.1}).wait(1).to({graphics:mask_1_graphics_563,x:235.5,y:184.1}).wait(1).to({graphics:mask_1_graphics_564,x:235.5,y:184.1}).wait(71));

	// 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(25,1,1).p("A0PtMIaFAAQG0gNDyDtQDyDuACFiQACFgjgDpQjfDpjlAYQjkAYgyADQgyADg8ACI2nAA");
	this.shape_3.setTransform(286.7,186.8);
	this.shape_3._off = true;

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(205).to({_off:false},0).wait(430));

	// 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(25,1,1).p("AAAgPIAAAg");
	this.shape_4.setTransform(156.3,99.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(25,1,1).p("AAAAZIAAgx");
	this.shape_5.setTransform(156.3,100.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(25,1,1).p("AAAAjIAAhF");
	this.shape_6.setTransform(156.3,101.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(25,1,1).p("AAAArIAAhV");
	this.shape_7.setTransform(156.3,102.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(25,1,1).p("AAAA1IAAhp");
	this.shape_8.setTransform(156.3,103.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(25,1,1).p("AAAA9IAAh5");
	this.shape_9.setTransform(156.3,104.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(25,1,1).p("AAABGIAAiL");
	this.shape_10.setTransform(156.3,105.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(25,1,1).p("AAABQIAAif");
	this.shape_11.setTransform(156.3,106.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(25,1,1).p("AAABZIAAiw");
	this.shape_12.setTransform(156.3,107.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(25,1,1).p("AAABhIAAjB");
	this.shape_13.setTransform(156.3,108);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(25,1,1).p("AAABrIAAjU");
	this.shape_14.setTransform(156.3,109);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(25,1,1).p("AAAB0IAAjm");
	this.shape_15.setTransform(156.3,109.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(25,1,1).p("AAAB9IAAj5");
	this.shape_16.setTransform(156.3,110.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(25,1,1).p("AAACFIAAkJ");
	this.shape_17.setTransform(156.3,111.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(25,1,1).p("AAACOIAAkb");
	this.shape_18.setTransform(156.3,112.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(25,1,1).p("AAACYIAAku");
	this.shape_19.setTransform(156.3,113.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(25,1,1).p("AAACgIAAk/");
	this.shape_20.setTransform(156.3,114.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(25,1,1).p("AAACqIAAlT");
	this.shape_21.setTransform(156.3,115.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(25,1,1).p("AAACyIAAlj");
	this.shape_22.setTransform(156.3,116.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(25,1,1).p("AAAC8IAAl3");
	this.shape_23.setTransform(156.3,117.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(25,1,1).p("AAADEIAAmH");
	this.shape_24.setTransform(156.3,118.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(25,1,1).p("AAADNIAAmZ");
	this.shape_25.setTransform(156.3,119.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(25,1,1).p("AAADWIAAmr");
	this.shape_26.setTransform(156.3,120.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(25,1,1).p("AAADfIAAm9");
	this.shape_27.setTransform(156.3,121);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(25,1,1).p("AAADoIAAnP");
	this.shape_28.setTransform(156.3,121.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(25,1,1).p("AAADxIAAnh");
	this.shape_29.setTransform(156.3,122.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(25,1,1).p("AAAD6IAAnz");
	this.shape_30.setTransform(156.3,123.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(25,1,1).p("AAAEDIAAoF");
	this.shape_31.setTransform(156.3,124.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(25,1,1).p("AAAEMIAAoX");
	this.shape_32.setTransform(156.3,125.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(25,1,1).p("AAAEVIAAop");
	this.shape_33.setTransform(156.3,126.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(25,1,1).p("AAAEeIAAo7");
	this.shape_34.setTransform(156.3,127.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(25,1,1).p("AAAEnIAApN");
	this.shape_35.setTransform(156.3,128.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(25,1,1).p("AAAEwIAApf");
	this.shape_36.setTransform(156.3,129.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(25,1,1).p("AAAE5IAApx");
	this.shape_37.setTransform(156.3,130.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(25,1,1).p("AAAFCIAAqD");
	this.shape_38.setTransform(156.3,131.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(25,1,1).p("AAAFLIAAqV");
	this.shape_39.setTransform(156.3,132.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(25,1,1).p("AAAFUIAAqn");
	this.shape_40.setTransform(156.3,133);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(25,1,1).p("AAAFdIAAq5");
	this.shape_41.setTransform(156.3,134);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(25,1,1).p("AAAFmIAArL");
	this.shape_42.setTransform(156.3,134.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(25,1,1).p("AAAFvIAArd");
	this.shape_43.setTransform(156.3,135.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(25,1,1).p("AAAF4IAArv");
	this.shape_44.setTransform(156.3,136.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(25,1,1).p("AAAGBIAAsB");
	this.shape_45.setTransform(156.3,137.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(25,1,1).p("AAAGKIAAsT");
	this.shape_46.setTransform(156.3,138.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(25,1,1).p("AAAGTIAAsl");
	this.shape_47.setTransform(156.3,139.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(25,1,1).p("AAAGcIAAs3");
	this.shape_48.setTransform(156.3,140.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(25,1,1).p("AAAGlIAAtJ");
	this.shape_49.setTransform(156.3,141.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(25,1,1).p("AAAGuIAAtb");
	this.shape_50.setTransform(156.3,142.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(25,1,1).p("AAAG3IAAtt");
	this.shape_51.setTransform(156.3,143.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(25,1,1).p("AAAHAIAAt/");
	this.shape_52.setTransform(156.3,144.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(25,1,1).p("AAAHJIAAuR");
	this.shape_53.setTransform(156.3,145.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(25,1,1).p("AAAHSIAAuj");
	this.shape_54.setTransform(156.3,146);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(25,1,1).p("AAAHbIAAu1");
	this.shape_55.setTransform(156.3,147);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(25,1,1).p("AAAHkIAAvH");
	this.shape_56.setTransform(156.3,147.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(25,1,1).p("AAAHtIAAvZ");
	this.shape_57.setTransform(156.3,148.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(25,1,1).p("AAAH2IAAvr");
	this.shape_58.setTransform(156.3,149.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(25,1,1).p("AAAH/IAAv9");
	this.shape_59.setTransform(156.3,150.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(25,1,1).p("AAAIIIAAwP");
	this.shape_60.setTransform(156.3,151.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(25,1,1).p("AAAIRIAAwh");
	this.shape_61.setTransform(156.3,152.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(25,1,1).p("AAAIaIAAwz");
	this.shape_62.setTransform(156.3,153.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(25,1,1).p("AAAIjIAAxF");
	this.shape_63.setTransform(156.3,154.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(25,1,1).p("AAAIsIAAxX");
	this.shape_64.setTransform(156.3,155.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(25,1,1).p("AAAI1IAAxp");
	this.shape_65.setTransform(156.3,156.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(25,1,1).p("AAAI+IAAx7");
	this.shape_66.setTransform(156.3,157.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(25,1,1).p("AAAJHIAAyN");
	this.shape_67.setTransform(156.3,158.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(25,1,1).p("AAAJQIAAyf");
	this.shape_68.setTransform(156.3,159);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(25,1,1).p("AAAJZIAAyx");
	this.shape_69.setTransform(156.3,159.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(25,1,1).p("AAAJiIAAzD");
	this.shape_70.setTransform(156.3,160.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(25,1,1).p("AAAJrIAAzV");
	this.shape_71.setTransform(156.3,161.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(25,1,1).p("AAAJ0IAAzn");
	this.shape_72.setTransform(156.3,162.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(25,1,1).p("AAAJ9IAAz5");
	this.shape_73.setTransform(156.3,163.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(25,1,1).p("AAAKGIAA0L");
	this.shape_74.setTransform(156.3,164.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(25,1,1).p("AAAKPIAA0d");
	this.shape_75.setTransform(156.3,165.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(25,1,1).p("AAAKYIAA0v");
	this.shape_76.setTransform(156.3,166.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(25,1,1).p("AAAKhIAA1B");
	this.shape_77.setTransform(156.3,167.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(25,1,1).p("AAAKqIAA1T");
	this.shape_78.setTransform(156.3,168.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(25,1,1).p("AAAKzIAA1l");
	this.shape_79.setTransform(156.3,169.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(25,1,1).p("AAAK8IAA13");
	this.shape_80.setTransform(156.3,170.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(25,1,1).p("AAALFIAA2J");
	this.shape_81.setTransform(156.3,171);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(25,1,1).p("AAALOIAA2b");
	this.shape_82.setTransform(156.3,171.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(25,1,1).p("AAALXIAA2t");
	this.shape_83.setTransform(156.3,172.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(25,1,1).p("AAALgIAA2/");
	this.shape_84.setTransform(156.3,173.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(25,1,1).p("AAALpIAA3R");
	this.shape_85.setTransform(156.3,174.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(25,1,1).p("AAALyIAA3j");
	this.shape_86.setTransform(156.3,175.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(25,1,1).p("AAAL7IAA31");
	this.shape_87.setTransform(156.3,176.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(25,1,1).p("AAAMEIAA4H");
	this.shape_88.setTransform(156.3,177.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(25,1,1).p("AAAMNIAA4Z");
	this.shape_89.setTransform(156.3,178.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(25,1,1).p("AAAMWIAA4r");
	this.shape_90.setTransform(156.3,179.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(25,1,1).p("AAAMfIAA49");
	this.shape_91.setTransform(156.3,180.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(25,1,1).p("AAAMoIAA5O");
	this.shape_92.setTransform(156.3,181.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(25,1,1).p("AAAMxIAA5h");
	this.shape_93.setTransform(156.3,182.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(25,1,1).p("AAAM6IAA5z");
	this.shape_94.setTransform(156.3,183.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(25,1,1).p("AAANDIAA6F");
	this.shape_95.setTransform(156.3,184);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(25,1,1).p("AAANMIAA6X");
	this.shape_96.setTransform(156.3,184.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(25,1,1).p("AAANVIAA6p");
	this.shape_97.setTransform(156.3,185.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(25,1,1).p("AAANdIAA66");
	this.shape_98.setTransform(156.3,186.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(25,1,1).p("AAANnIAA7N");
	this.shape_99.setTransform(156.3,187.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(25,1,1).p("AAANvIAA7e");
	this.shape_100.setTransform(156.3,188.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(25,1,1).p("AAAN5IAA7x");
	this.shape_101.setTransform(156.3,189.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(25,1,1).p("AAAOCIAA8C");
	this.shape_102.setTransform(156.3,190.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(25,1,1).p("AAAOLIAA8V");
	this.shape_103.setTransform(156.3,191.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(25,1,1).p("AAAOUIAA8n");
	this.shape_104.setTransform(156.3,192.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(25,1,1).p("AAAOcIAA84");
	this.shape_105.setTransform(156.3,193.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(25,1,1).p("AAAOmIAA9L");
	this.shape_106.setTransform(156.3,194.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(25,1,1).p("AAAOvIAA9d");
	this.shape_107.setTransform(156.3,195.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(25,1,1).p("AAAO3IAA9u");
	this.shape_108.setTransform(156.3,196);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(25,1,1).p("AAAPBIAA+A");
	this.shape_109.setTransform(156.3,197);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(25,1,1).p("AAAPJIAA+S");
	this.shape_110.setTransform(156.3,197.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(25,1,1).p("AAAPTIAA+k");
	this.shape_111.setTransform(156.3,198.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(25,1,1).p("AAAPcIAA+2");
	this.shape_112.setTransform(156.3,199.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(25,1,1).p("AAAPlIAA/J");
	this.shape_113.setTransform(156.3,200.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(25,1,1).p("AAAPuIAA/b");
	this.shape_114.setTransform(156.3,201.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(25,1,1).p("AAAP2IAA/s");
	this.shape_115.setTransform(156.3,202.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(25,1,1).p("AAAP/IAA/9");
	this.shape_116.setTransform(156.3,203.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(25,1,1).p("AAAQJMAAAggR");
	this.shape_117.setTransform(156.3,204.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(25,1,1).p("AAAQRMAAAggh");
	this.shape_118.setTransform(156.3,205.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(25,1,1).p("AAAQbMAAAgg0");
	this.shape_119.setTransform(156.3,206.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(25,1,1).p("AAAQjMAAAghF");
	this.shape_120.setTransform(156.3,207.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(25,1,1).p("AAAQtMAAAghY");
	this.shape_121.setTransform(156.3,208.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(25,1,1).p("AAAQ1MAAAghp");
	this.shape_122.setTransform(156.3,209);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(25,1,1).p("AAAQ/MAAAgh9");
	this.shape_123.setTransform(156.3,209.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(25,1,1).p("AAARHMAAAgiN");
	this.shape_124.setTransform(156.3,210.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(25,1,1).p("AAARRMAAAgih");
	this.shape_125.setTransform(156.3,211.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(25,1,1).p("AAARZMAAAgix");
	this.shape_126.setTransform(156.3,212.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(25,1,1).p("AAARjMAAAgjF");
	this.shape_127.setTransform(156.3,213.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(25,1,1).p("AAARrMAAAgjV");
	this.shape_128.setTransform(156.3,214.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(25,1,1).p("AAAR0MAAAgjn");
	this.shape_129.setTransform(156.3,215.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(25,1,1).p("AAAR9MAAAgj5");
	this.shape_130.setTransform(156.3,216.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").ss(25,1,1).p("AAASGMAAAgkL");
	this.shape_131.setTransform(156.3,217.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(25,1,1).p("AAASPMAAAgkd");
	this.shape_132.setTransform(156.3,218.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(25,1,1).p("AAASYMAAAgkv");
	this.shape_133.setTransform(156.3,219.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(25,1,1).p("AAAShMAAAglB");
	this.shape_134.setTransform(156.3,220.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#000000").ss(25,1,1).p("AAASqMAAAglT");
	this.shape_135.setTransform(156.3,221);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#000000").ss(25,1,1).p("AAASzMAAAgll");
	this.shape_136.setTransform(156.3,221.9);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#000000").ss(25,1,1).p("AAAS8MAAAgl3");
	this.shape_137.setTransform(156.3,222.9);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").ss(25,1,1).p("AAATFMAAAgmJ");
	this.shape_138.setTransform(156.3,223.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#000000").ss(25,1,1).p("AAATOMAAAgmb");
	this.shape_139.setTransform(156.3,224.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").ss(25,1,1).p("AAATXMAAAgmt");
	this.shape_140.setTransform(156.3,225.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#000000").ss(25,1,1).p("AAATgMAAAgm/");
	this.shape_141.setTransform(156.3,226.6);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#000000").ss(25,1,1).p("AAATpMAAAgnR");
	this.shape_142.setTransform(156.3,227.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#000000").ss(25,1,1).p("AAATyMAAAgnj");
	this.shape_143.setTransform(156.3,228.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#000000").ss(25,1,1).p("AAAT7MAAAgn1");
	this.shape_144.setTransform(156.3,229.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#000000").ss(25,1,1).p("AAAUEMAAAgoH");
	this.shape_145.setTransform(156.3,230.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#000000").ss(25,1,1).p("AAAUNMAAAgoZ");
	this.shape_146.setTransform(156.3,231.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#000000").ss(25,1,1).p("AAAUWMAAAgor");
	this.shape_147.setTransform(156.3,232.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#000000").ss(25,1,1).p("AAAUfMAAAgo9");
	this.shape_148.setTransform(156.3,233.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#000000").ss(25,1,1).p("AAAUoMAAAgpP");
	this.shape_149.setTransform(156.3,234);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#000000").ss(25,1,1).p("AAAUxMAAAgph");
	this.shape_150.setTransform(156.3,234.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#000000").ss(25,1,1).p("AAAU6MAAAgpz");
	this.shape_151.setTransform(156.3,235.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#000000").ss(25,1,1).p("AAAVDMAAAgqF");
	this.shape_152.setTransform(156.3,236.8);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#000000").ss(25,1,1).p("AAAVMMAAAgqX");
	this.shape_153.setTransform(156.3,237.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#000000").ss(25,1,1).p("AAAVVMAAAgqp");
	this.shape_154.setTransform(156.3,238.6);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#000000").ss(25,1,1).p("AAAVeMAAAgq7");
	this.shape_155.setTransform(156.3,239.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#000000").ss(25,1,1).p("AAAVnMAAAgrN");
	this.shape_156.setTransform(156.3,240.5);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#000000").ss(25,1,1).p("AAAVwMAAAgrf");
	this.shape_157.setTransform(156.3,241.4);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#000000").ss(25,1,1).p("AAAV5MAAAgrx");
	this.shape_158.setTransform(156.3,242.3);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#000000").ss(25,1,1).p("AAAWCMAAAgsD");
	this.shape_159.setTransform(156.3,243.3);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#000000").ss(25,1,1).p("AAAWLMAAAgsV");
	this.shape_160.setTransform(156.3,244.2);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#000000").ss(25,1,1).p("AAAWUMAAAgsn");
	this.shape_161.setTransform(156.3,245.1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#000000").ss(25,1,1).p("AAAWdMAAAgs5");
	this.shape_162.setTransform(156.3,246);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#000000").ss(25,1,1).p("AAAWmMAAAgtL");
	this.shape_163.setTransform(156.3,247);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#000000").ss(25,1,1).p("AAAWvMAAAgtd");
	this.shape_164.setTransform(156.3,247.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#000000").ss(25,1,1).p("AAAW4MAAAgtv");
	this.shape_165.setTransform(156.3,248.8);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#000000").ss(25,1,1).p("AAAXBMAAAguB");
	this.shape_166.setTransform(156.3,249.7);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#000000").ss(25,1,1).p("AAAXKMAAAguT");
	this.shape_167.setTransform(156.3,250.7);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#000000").ss(25,1,1).p("AAAXTMAAAgul");
	this.shape_168.setTransform(156.3,251.6);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#000000").ss(25,1,1).p("AAAXcMAAAgu3");
	this.shape_169.setTransform(156.3,252.5);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#000000").ss(25,1,1).p("AAAXlMAAAgvJ");
	this.shape_170.setTransform(156.3,253.4);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#000000").ss(25,1,1).p("AAAXuMAAAgvb");
	this.shape_171.setTransform(156.3,254.4);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#000000").ss(25,1,1).p("AAAX3MAAAgvt");
	this.shape_172.setTransform(156.3,255.3);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#000000").ss(25,1,1).p("AAAYAMAAAgv/");
	this.shape_173.setTransform(156.3,256.2);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#000000").ss(25,1,1).p("AAAYJMAAAgwR");
	this.shape_174.setTransform(156.3,257.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#000000").ss(25,1,1).p("AAAYSMAAAgwj");
	this.shape_175.setTransform(156.3,258.1);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#000000").ss(25,1,1).p("AAAYbMAAAgw1");
	this.shape_176.setTransform(156.3,259);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#000000").ss(25,1,1).p("AAAYkMAAAgxH");
	this.shape_177.setTransform(156.3,259.9);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#000000").ss(25,1,1).p("AAAYtMAAAgxZ");
	this.shape_178.setTransform(156.3,260.8);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#000000").ss(25,1,1).p("AAAY2MAAAgxr");
	this.shape_179.setTransform(156.3,261.8);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#000000").ss(25,1,1).p("AAAY/MAAAgx9");
	this.shape_180.setTransform(156.3,262.7);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#000000").ss(25,1,1).p("AAAZIMAAAgyP");
	this.shape_181.setTransform(156.3,263.6);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#000000").ss(25,1,1).p("AAAZRMAAAgyh");
	this.shape_182.setTransform(156.3,264.5);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#000000").ss(25,1,1).p("AAAZaMAAAgyz");
	this.shape_183.setTransform(156.3,265.5);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#000000").ss(25,1,1).p("AAAZjMAAAgzF");
	this.shape_184.setTransform(156.3,266.4);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#000000").ss(25,1,1).p("AAAZsMAAAgzX");
	this.shape_185.setTransform(156.3,267.3);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#000000").ss(25,1,1).p("AAAZ1MAAAgzp");
	this.shape_186.setTransform(156.3,268.2);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#000000").ss(25,1,1).p("AAAZ+MAAAgz7");
	this.shape_187.setTransform(156.3,269.2);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#000000").ss(25,1,1).p("AAAaHMAAAg0N");
	this.shape_188.setTransform(156.3,270.1);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#000000").ss(25,1,1).p("AAA6PMAAAA0f");
	this.shape_189.setTransform(156.3,271);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4}]},9).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).wait(441));

	// Base
	this.instance_4 = new lib.Symbol1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(286.4,270.9);
	this.instance_4.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(635));

	// Background
	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_190.setTransform(275,275,3.373,2.543);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_191.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_191},{t:this.shape_190}]}).wait(635));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(273.5,234.3,553,726.5);
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