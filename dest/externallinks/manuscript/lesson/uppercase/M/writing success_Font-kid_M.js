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
	this.shape.graphics.f("#FFFFFF").s().p("AYEa1MAAAgo5MgVkApwQg6BzhvAAQhxAAg7hzMgVSgpoMAAAAo2QAACljEAAQi2AAAAilMAAAg1kQACi0C5AAQCGAAAoB1MAYLAv7MAYkgv7QAoh1CCAAQDBAAAAC7MAAAA1nQAACcjBgBQi9ABAAirg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-192.2,-188.7,384.4,377.5);


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

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AAZAAIgxAA");
	this.shape.setTransform(6.6,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AgoAAIBRAA");
	this.shape_1.setTransform(8.1,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("Ag4AAIBxAA");
	this.shape_2.setTransform(9.7,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("AhHAAICPAA");
	this.shape_3.setTransform(11.2,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("AhXAAICvAA");
	this.shape_4.setTransform(12.7,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(5,1,1).p("AhmAAIDNAA");
	this.shape_5.setTransform(14.2,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(5,1,1).p("Ah2AAIDtAA");
	this.shape_6.setTransform(15.7,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(5,1,1).p("AiFAAIELAA");
	this.shape_7.setTransform(17.1,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(5,1,1).p("AiUAAIEpAA");
	this.shape_8.setTransform(18.6,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(5,1,1).p("AijAAIFHAA");
	this.shape_9.setTransform(20,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(5,1,1).p("AiyAAIFlAA");
	this.shape_10.setTransform(21.5,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5,1,1).p("AjAAAIGCAA");
	this.shape_11.setTransform(22.9,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(5,1,1).p("AjPAAIGfAA");
	this.shape_12.setTransform(24.3,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(5,1,1).p("AjeAAIG9AA");
	this.shape_13.setTransform(25.8,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(5,1,1).p("AjsAAIHZAA");
	this.shape_14.setTransform(27.2,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(5,1,1).p("Aj6AAIH1AA");
	this.shape_15.setTransform(28.5,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(5,1,1).p("AkJAAIITAA");
	this.shape_16.setTransform(29.9,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(5,1,1).p("AkXAAIIvAA");
	this.shape_17.setTransform(31.3,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(5,1,1).p("AklAAIJLAA");
	this.shape_18.setTransform(32.6,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(5,1,1).p("AkzAAIJnAA");
	this.shape_19.setTransform(34,0);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(5,1,1).p("AlBAAIKDAA");
	this.shape_20.setTransform(35.3,0);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(5,1,1).p("AlPAAIKfAA");
	this.shape_21.setTransform(36.7,0);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(5,1,1).p("AlcAAIK5AA");
	this.shape_22.setTransform(38,0);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(5,1,1).p("AlpAAILTAA");
	this.shape_23.setTransform(39.3,0);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(5,1,1).p("Al3AAILvAA");
	this.shape_24.setTransform(40.6,0);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(5,1,1).p("AmEAAIMJAA");
	this.shape_25.setTransform(41.9,0);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(5,1,1).p("AmRAAIMjAA");
	this.shape_26.setTransform(43.1,0);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(5,1,1).p("AmeAAIM9AA");
	this.shape_27.setTransform(44.4,0);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(5,1,1).p("AmrAAINXAA");
	this.shape_28.setTransform(45.7,0);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(5,1,1).p("Am4AAINxAA");
	this.shape_29.setTransform(46.9,0);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(5,1,1).p("AnFAAIOLAA");
	this.shape_30.setTransform(48.1,0);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(5,1,1).p("AnSAAIOlAA");
	this.shape_31.setTransform(49.4,0);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(5,1,1).p("AneAAIO9AA");
	this.shape_32.setTransform(50.6,0);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(5,1,1).p("AnqAAIPVAA");
	this.shape_33.setTransform(51.8,0);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(5,1,1).p("An2AAIPuAA");
	this.shape_34.setTransform(53,0);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(5,1,1).p("AoDAAIQHAA");
	this.shape_35.setTransform(54.2,0);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(5,1,1).p("AoPAAIQfAA");
	this.shape_36.setTransform(55.3,0);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(5,1,1).p("AobAAIQ3AA");
	this.shape_37.setTransform(56.5,0);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(5,1,1).p("AonAAIRPAA");
	this.shape_38.setTransform(57.6,0);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(5,1,1).p("AozAAIRnAA");
	this.shape_39.setTransform(58.8,0);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(5,1,1).p("Ao+AAIR9AA");
	this.shape_40.setTransform(59.9,0);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(5,1,1).p("ApKAAISVAA");
	this.shape_41.setTransform(61,0);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(5,1,1).p("ApVAAISrAA");
	this.shape_42.setTransform(62.1,0);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(5,1,1).p("AphAAITDAA");
	this.shape_43.setTransform(63.2,0);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(5,1,1).p("ApsAAITZAA");
	this.shape_44.setTransform(64.3,0);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(5,1,1).p("Ap3AAITvAA");
	this.shape_45.setTransform(65.4,0);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(5,1,1).p("AqCAAIUFAA");
	this.shape_46.setTransform(66.5,0);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(5,1,1).p("AqNAAIUbAA");
	this.shape_47.setTransform(67.5,0);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(5,1,1).p("AqYAAIUxAA");
	this.shape_48.setTransform(68.6,0);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(5,1,1).p("AqjAAIVHAA");
	this.shape_49.setTransform(69.6,0);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(5,1,1).p("AqtAAIVbAA");
	this.shape_50.setTransform(70.6,0);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(5,1,1).p("Aq4AAIVxAA");
	this.shape_51.setTransform(71.7,0);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(5,1,1).p("ArCAAIWFAA");
	this.shape_52.setTransform(72.7,0);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(5,1,1).p("ArMAAIWZAA");
	this.shape_53.setTransform(73.6,0);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(5,1,1).p("ArWAAIWtAA");
	this.shape_54.setTransform(74.6,0);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(5,1,1).p("ArhAAIXDAA");
	this.shape_55.setTransform(75.6,0);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(5,1,1).p("ArqAAIXVAA");
	this.shape_56.setTransform(76.6,0);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(5,1,1).p("Ar0AAIXpAA");
	this.shape_57.setTransform(77.5,0);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(5,1,1).p("Ar+AAIX9AA");
	this.shape_58.setTransform(78.5,0);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(5,1,1).p("AsIAAIYRAA");
	this.shape_59.setTransform(79.4,0);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(5,1,1).p("AsRAAIYjAA");
	this.shape_60.setTransform(80.3,0);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(5,1,1).p("AsbAAIY3AA");
	this.shape_61.setTransform(81.3,0);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(5,1,1).p("AskAAIZJAA");
	this.shape_62.setTransform(82.2,0);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(5,1,1).p("AstAAIZbAA");
	this.shape_63.setTransform(83,0);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(5,1,1).p("As2AAIZtAA");
	this.shape_64.setTransform(83.9,0);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(5,1,1).p("As/AAIZ/AA");
	this.shape_65.setTransform(84.8,0);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(5,1,1).p("AtIAAIaRAA");
	this.shape_66.setTransform(85.7,0);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(5,1,1).p("AtRAAIajAA");
	this.shape_67.setTransform(86.5,0);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(5,1,1).p("AtaAAIa1AA");
	this.shape_68.setTransform(87.4,0);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(5,1,1).p("AtiAAIbFAA");
	this.shape_69.setTransform(88.2,0);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(5,1,1).p("AtrAAIbXAA");
	this.shape_70.setTransform(89,0);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(5,1,1).p("AtzAAIbnAA");
	this.shape_71.setTransform(89.8,0);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(5,1,1).p("At7AAIb3AA");
	this.shape_72.setTransform(90.6,0);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(5,1,1).p("AuDAAIcHAA");
	this.shape_73.setTransform(91.4,0);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(5,1,1).p("AuMAAIcZAA");
	this.shape_74.setTransform(92.2,0);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(5,1,1).p("AuTAAIcnAA");
	this.shape_75.setTransform(92.9,0);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(5,1,1).p("AubAAIc3AA");
	this.shape_76.setTransform(93.7,0);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(5,1,1).p("AujAAIdHAA");
	this.shape_77.setTransform(94.4,0);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(5,1,1).p("AuqAAIdWAA");
	this.shape_78.setTransform(95.2,0);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(5,1,1).p("AuyAAIdlAA");
	this.shape_79.setTransform(95.9,0);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(5,1,1).p("Au5AAIdzAA");
	this.shape_80.setTransform(96.6,0);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(5,1,1).p("AvAAAIeBAA");
	this.shape_81.setTransform(97.3,0);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(5,1,1).p("AvIAAIeRAA");
	this.shape_82.setTransform(98,0);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(5,1,1).p("AvPAAIefAA");
	this.shape_83.setTransform(98.7,0);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(5,1,1).p("AvWAAIetAA");
	this.shape_84.setTransform(99.4,0);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(5,1,1).p("AvdAAIe7AA");
	this.shape_85.setTransform(100,0);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(5,1,1).p("AvjAAIfHAA");
	this.shape_86.setTransform(100.7,0);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(5,1,1).p("AvqAAIfVAA");
	this.shape_87.setTransform(101.3,0);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(5,1,1).p("AvxAAIfjAA");
	this.shape_88.setTransform(102,0);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(5,1,1).p("Av3AAIfvAA");
	this.shape_89.setTransform(102.6,0);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(5,1,1).p("Av9AAIf7AA");
	this.shape_90.setTransform(103.2,0);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(5,1,1).p("AwEAAMAgJAAA");
	this.shape_91.setTransform(103.8,0);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(5,1,1).p("AwKAAMAgVAAA");
	this.shape_92.setTransform(104.4,0);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(5,1,1).p("AwQAAMAghAAA");
	this.shape_93.setTransform(105,0);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(5,1,1).p("AwVAAMAgrAAA");
	this.shape_94.setTransform(105.5,0);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(5,1,1).p("AwbAAMAg3AAA");
	this.shape_95.setTransform(106.1,0);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(5,1,1).p("AwhAAMAhDAAA");
	this.shape_96.setTransform(106.7,0);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(5,1,1).p("AwmAAMAhNAAA");
	this.shape_97.setTransform(107.2,0);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(5,1,1).p("AwsAAMAhZAAA");
	this.shape_98.setTransform(107.7,0);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(5,1,1).p("AQyAAMghjAAA");
	this.shape_99.setTransform(108.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).wait(1));

	// Layer 1
	this.instance = new lib.triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(9.1,0,1,1,-90,0,0,0.4,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:219.9,y:0.1},99,cjs.Ease.get(0.5)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.8,-12.1,21.9,24.3);


(lib.ar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,-96.7,1,1,0,0,0,0.1,-4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,regY:0,y:213.5},140,cjs.Ease.get(0.5)).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AAAgVIAAAr");
	this.shape.setTransform(-0.2,-101.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AAAAnIAAhN");
	this.shape_1.setTransform(-0.2,-100);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AAAA3IAAht");
	this.shape_2.setTransform(-0.2,-98.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("AAABHIAAiN");
	this.shape_3.setTransform(-0.2,-96.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("AAABYIAAiv");
	this.shape_4.setTransform(-0.2,-95.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(5,1,1).p("AAABnIAAjO");
	this.shape_5.setTransform(-0.2,-93.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(5,1,1).p("AAAB4IAAjv");
	this.shape_6.setTransform(-0.2,-92);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(5,1,1).p("AAACHIAAkN");
	this.shape_7.setTransform(-0.2,-90.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(5,1,1).p("AAACXIAAkt");
	this.shape_8.setTransform(-0.2,-88.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(5,1,1).p("AAACnIAAlN");
	this.shape_9.setTransform(-0.2,-87.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(5,1,1).p("AAAC3IAAlt");
	this.shape_10.setTransform(-0.2,-85.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5,1,1).p("AAADGIAAmL");
	this.shape_11.setTransform(-0.2,-84.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(5,1,1).p("AAADWIAAmr");
	this.shape_12.setTransform(-0.2,-82.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(5,1,1).p("AAADlIAAnK");
	this.shape_13.setTransform(-0.1,-81.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(5,1,1).p("AAAD1IAAnp");
	this.shape_14.setTransform(-0.1,-79.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(5,1,1).p("AAAEEIAAoH");
	this.shape_15.setTransform(-0.1,-78.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(5,1,1).p("AAAEUIAAon");
	this.shape_16.setTransform(-0.1,-76.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(5,1,1).p("AAAEjIAApF");
	this.shape_17.setTransform(-0.1,-75.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(5,1,1).p("AAAEyIAApj");
	this.shape_18.setTransform(-0.1,-73.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(5,1,1).p("AAAFBIAAqB");
	this.shape_19.setTransform(-0.1,-72.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(5,1,1).p("AAAFQIAAqf");
	this.shape_20.setTransform(-0.1,-70.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(5,1,1).p("AAAFfIAAq9");
	this.shape_21.setTransform(-0.1,-69.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(5,1,1).p("AAAFtIAArZ");
	this.shape_22.setTransform(-0.1,-68);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(5,1,1).p("AAAF8IAAr3");
	this.shape_23.setTransform(-0.1,-66.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(5,1,1).p("AAAGKIAAsU");
	this.shape_24.setTransform(-0.1,-65.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(5,1,1).p("AAAGZIAAsx");
	this.shape_25.setTransform(-0.1,-63.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(5,1,1).p("AAAGoIAAtP");
	this.shape_26.setTransform(-0.1,-62.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(5,1,1).p("AAAG2IAAtr");
	this.shape_27.setTransform(-0.1,-60.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(5,1,1).p("AAAHEIAAuH");
	this.shape_28.setTransform(-0.1,-59.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(5,1,1).p("AAAHSIAAuj");
	this.shape_29.setTransform(-0.1,-58.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(5,1,1).p("AAAHgIAAu/");
	this.shape_30.setTransform(-0.1,-56.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(5,1,1).p("AAAHvIAAvc");
	this.shape_31.setTransform(-0.1,-55.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(5,1,1).p("AAAH8IAAv3");
	this.shape_32.setTransform(-0.1,-54);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(5,1,1).p("AAAIKIAAwT");
	this.shape_33.setTransform(-0.1,-52.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(5,1,1).p("AAAIYIAAwv");
	this.shape_34.setTransform(-0.1,-51.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(5,1,1).p("AAAImIAAxL");
	this.shape_35.setTransform(-0.1,-49.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(5,1,1).p("AAAI0IAAxn");
	this.shape_36.setTransform(-0.1,-48.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(5,1,1).p("AAAJBIAAyB");
	this.shape_37.setTransform(-0.1,-47.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(5,1,1).p("AAAJPIAAyd");
	this.shape_38.setTransform(-0.1,-45.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(5,1,1).p("AAAJcIAAy3");
	this.shape_39.setTransform(-0.1,-44.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(5,1,1).p("AAAJqIAAzT");
	this.shape_40.setTransform(-0.1,-43.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(5,1,1).p("AAAJ3IAAzt");
	this.shape_41.setTransform(-0.1,-42);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(5,1,1).p("AAAKEIAA0H");
	this.shape_42.setTransform(-0.1,-40.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(5,1,1).p("AAAKRIAA0h");
	this.shape_43.setTransform(-0.1,-39.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(5,1,1).p("AAAKeIAA07");
	this.shape_44.setTransform(-0.1,-38.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(5,1,1).p("AAAKrIAA1V");
	this.shape_45.setTransform(-0.1,-36.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(5,1,1).p("AAAK4IAA1v");
	this.shape_46.setTransform(-0.1,-35.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(5,1,1).p("AAALFIAA2J");
	this.shape_47.setTransform(-0.1,-34.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(5,1,1).p("AAALRIAA2h");
	this.shape_48.setTransform(-0.1,-33.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(5,1,1).p("AAALeIAA27");
	this.shape_49.setTransform(-0.1,-31.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(5,1,1).p("AAALrIAA3V");
	this.shape_50.setTransform(-0.1,-30.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(5,1,1).p("AAAL3IAA3t");
	this.shape_51.setTransform(-0.1,-29.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(5,1,1).p("AAAMEIAA4H");
	this.shape_52.setTransform(-0.1,-28.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(5,1,1).p("AAAMQIAA4f");
	this.shape_53.setTransform(-0.1,-27);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(5,1,1).p("AAAMcIAA43");
	this.shape_54.setTransform(-0.1,-25.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(5,1,1).p("AAAMoIAA5P");
	this.shape_55.setTransform(-0.1,-24.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(5,1,1).p("AAAM0IAA5n");
	this.shape_56.setTransform(-0.1,-23.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(5,1,1).p("AAANBIAA6B");
	this.shape_57.setTransform(-0.1,-22.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(5,1,1).p("AAANMIAA6X");
	this.shape_58.setTransform(-0.1,-21.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(5,1,1).p("AAANYIAA6v");
	this.shape_59.setTransform(-0.1,-19.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(5,1,1).p("AAANkIAA7H");
	this.shape_60.setTransform(-0.1,-18.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(5,1,1).p("AAANwIAA7f");
	this.shape_61.setTransform(-0.1,-17.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(5,1,1).p("AAAN7IAA71");
	this.shape_62.setTransform(-0.1,-16.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(5,1,1).p("AAAOHIAA8N");
	this.shape_63.setTransform(-0.1,-15.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(5,1,1).p("AAAOSIAA8j");
	this.shape_64.setTransform(-0.1,-14.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(5,1,1).p("AAAOeIAA87");
	this.shape_65.setTransform(-0.1,-13.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(5,1,1).p("AAAOpIAA9R");
	this.shape_66.setTransform(-0.1,-12);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(5,1,1).p("AAAO0IAA9n");
	this.shape_67.setTransform(-0.1,-10.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(5,1,1).p("AAAPAIAA9/");
	this.shape_68.setTransform(-0.1,-9.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(5,1,1).p("AAAPLIAA+V");
	this.shape_69.setTransform(-0.1,-8.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(5,1,1).p("AAAPWIAA+r");
	this.shape_70.setTransform(0,-7.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(5,1,1).p("AAAPgIAA+/");
	this.shape_71.setTransform(0,-6.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(5,1,1).p("AAAPrIAA/V");
	this.shape_72.setTransform(0,-5.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(5,1,1).p("AAAP2IAA/r");
	this.shape_73.setTransform(0,-4.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(5,1,1).p("AAAQBMAAAggB");
	this.shape_74.setTransform(0,-3.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(5,1,1).p("AAAQLMAAAggV");
	this.shape_75.setTransform(0,-2.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(5,1,1).p("AAAQWMAAAggr");
	this.shape_76.setTransform(0,-1.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(5,1,1).p("AAAQgMAAAgg/");
	this.shape_77.setTransform(0,-0.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(5,1,1).p("AAAQrMAAAghV");
	this.shape_78.setTransform(0,0.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(5,1,1).p("AAAQ1MAAAghp");
	this.shape_79.setTransform(0,1.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(5,1,1).p("AAAQ/MAAAgh9");
	this.shape_80.setTransform(0,2.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(5,1,1).p("AAARJMAAAgiR");
	this.shape_81.setTransform(0,3.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(5,1,1).p("AAARTMAAAgil");
	this.shape_82.setTransform(0,4.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(5,1,1).p("AAAReMAAAgi7");
	this.shape_83.setTransform(0,5.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(5,1,1).p("AAARnMAAAgjN");
	this.shape_84.setTransform(0,6.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(5,1,1).p("AAARxMAAAgjh");
	this.shape_85.setTransform(0,7.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(5,1,1).p("AAAR7MAAAgj1");
	this.shape_86.setTransform(0,8.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(5,1,1).p("AAASFMAAAgkJ");
	this.shape_87.setTransform(0,9.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(5,1,1).p("AAASOMAAAgkb");
	this.shape_88.setTransform(0,10.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(5,1,1).p("AAASYMAAAgkv");
	this.shape_89.setTransform(0,11.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(5,1,1).p("AAAShMAAAglB");
	this.shape_90.setTransform(0,12.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(5,1,1).p("AAASrMAAAglV");
	this.shape_91.setTransform(0,13.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(5,1,1).p("AAAS0MAAAgln");
	this.shape_92.setTransform(0,14.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(5,1,1).p("AAAS9MAAAgl5");
	this.shape_93.setTransform(0,15);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(5,1,1).p("AAATGMAAAgmL");
	this.shape_94.setTransform(0,15.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(5,1,1).p("AAATPMAAAgmd");
	this.shape_95.setTransform(0,16.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(5,1,1).p("AAATYMAAAgmv");
	this.shape_96.setTransform(0,17.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(5,1,1).p("AAAThMAAAgnB");
	this.shape_97.setTransform(0,18.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(5,1,1).p("AAATqMAAAgnT");
	this.shape_98.setTransform(0,19.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(5,1,1).p("AAATzMAAAgnl");
	this.shape_99.setTransform(0,20.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(5,1,1).p("AAAT7MAAAgn1");
	this.shape_100.setTransform(0,21.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(5,1,1).p("AAAUEMAAAgoH");
	this.shape_101.setTransform(0,21.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(5,1,1).p("AAAUMMAAAgoX");
	this.shape_102.setTransform(0,22.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(5,1,1).p("AAAUVMAAAgop");
	this.shape_103.setTransform(0,23.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(5,1,1).p("AAAUdMAAAgo5");
	this.shape_104.setTransform(0,24.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(5,1,1).p("AAAUlMAAAgpJ");
	this.shape_105.setTransform(0,25.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(5,1,1).p("AAAUtMAAAgpZ");
	this.shape_106.setTransform(0,26);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(5,1,1).p("AAAU2MAAAgpr");
	this.shape_107.setTransform(0,26.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(5,1,1).p("AAAU+MAAAgp7");
	this.shape_108.setTransform(0,27.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(5,1,1).p("AAAVGMAAAgqL");
	this.shape_109.setTransform(0,28.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(5,1,1).p("AAAVOMAAAgqb");
	this.shape_110.setTransform(0,29.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(5,1,1).p("AAAVVMAAAgqp");
	this.shape_111.setTransform(0,29.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(5,1,1).p("AAAVdMAAAgq5");
	this.shape_112.setTransform(0,30.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(5,1,1).p("AAAVlMAAAgrJ");
	this.shape_113.setTransform(0,31.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(5,1,1).p("AAAVsMAAAgrX");
	this.shape_114.setTransform(0,32.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(5,1,1).p("AAAV0MAAAgrn");
	this.shape_115.setTransform(0,32.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(5,1,1).p("AAAV7MAAAgr1");
	this.shape_116.setTransform(0,33.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(5,1,1).p("AAAWCMAAAgsD");
	this.shape_117.setTransform(0,34.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(5,1,1).p("AAAWKMAAAgsT");
	this.shape_118.setTransform(0,35.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(5,1,1).p("AAAWRMAAAgsh");
	this.shape_119.setTransform(0,35.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(5,1,1).p("AAAWYMAAAgsv");
	this.shape_120.setTransform(0,36.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(5,1,1).p("AAAWfMAAAgs9");
	this.shape_121.setTransform(0,37.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(5,1,1).p("AAAWmMAAAgtL");
	this.shape_122.setTransform(0,37.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(5,1,1).p("AAAWtMAAAgtZ");
	this.shape_123.setTransform(0,38.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(5,1,1).p("AAAWzMAAAgtl");
	this.shape_124.setTransform(0,39.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(5,1,1).p("AAAW6MAAAgtz");
	this.shape_125.setTransform(0,39.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(5,1,1).p("AAAXBMAAAguB");
	this.shape_126.setTransform(0,40.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(5,1,1).p("AAAXHMAAAguN");
	this.shape_127.setTransform(0,41.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(5,1,1).p("AAAXOMAAAgub");
	this.shape_128.setTransform(0,41.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(5,1,1).p("AAAXUMAAAgun");
	this.shape_129.setTransform(0,42.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(5,1,1).p("AAAXbMAAAgu1");
	this.shape_130.setTransform(0,43);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").ss(5,1,1).p("AAAXhMAAAgvB");
	this.shape_131.setTransform(0,43.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(5,1,1).p("AAAXnMAAAgvN");
	this.shape_132.setTransform(0,44.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(5,1,1).p("AAAXtMAAAgvZ");
	this.shape_133.setTransform(0,44.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(5,1,1).p("AAAXzMAAAgvl");
	this.shape_134.setTransform(0,45.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#000000").ss(5,1,1).p("AAAX5MAAAgvx");
	this.shape_135.setTransform(0,45.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#000000").ss(5,1,1).p("AAAX/MAAAgv9");
	this.shape_136.setTransform(0,46.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#000000").ss(5,1,1).p("AAAYEMAAAgwH");
	this.shape_137.setTransform(0,47.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").ss(5,1,1).p("AAAYKMAAAgwT");
	this.shape_138.setTransform(0,47.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#000000").ss(5,1,1).p("AAAYQMAAAgwf");
	this.shape_139.setTransform(0,48.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").ss(5,1,1).p("AAA4UMAAAAwp");
	this.shape_140.setTransform(0,48.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.9,-110.1,24.3,21.8);


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
(lib.writingsuccess_Fontkid_M = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_674 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(674).call(this.frame_674).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(101.4,108.1,0.999,0.999,8.5,0,0,22.4,-144);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({y:446.1},140).wait(11).to({rotation:0,skewX:-8.5,skewY:171.5,x:101.3,y:108.1},0).to({x:271.6,y:445.5},140).wait(9).to({scaleX:1,scaleY:1,rotation:8,skewX:0,skewY:0,x:272.8,y:443.4},0).to({x:448.4,y:103.5},140).wait(11).to({rotation:0,skewX:-8,skewY:172,y:105.5},0).to({x:449.4,y:444.5},140).wait(10).to({startPosition:0},0).to({guide:{path:[449.4,444.5,483.4,347.5,561.6,465.2,639.7,582.8,709.3,480]}},64).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(101.6,445.8,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},140).wait(11).to({_off:false,x:274.6,y:440.8},0).to({_off:true},140).wait(9).to({_off:false,x:447.5,y:104.8},0).to({_off:true},140).wait(11).to({_off:false,x:448.6,y:445.8},0).to({_off:true},140).wait(75));

	// ar
	this.instance_1 = new lib.ar2("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(294.4,274,1,1,-60,0,0,0.8,0.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(309).to({_off:false},0).wait(366));

	// ar3
	this.instance_2 = new lib.ar2("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(143.1,81.1,1,1,60,0,0,0.8,0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(160).to({_off:false},0).wait(515));

	// ar2
	this.instance_3 = new lib.ar1("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(499.9,217.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(460).to({_off:false},0).wait(215));

	// ar1
	this.instance_4 = new lib.ar1("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(49.9,217.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).wait(666));

	// 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(25,1,1).p("AAJgQIgRAh");
	this.shape_1.setTransform(274.6,443.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(25,1,1).p("AgOAdIAdg5");
	this.shape_2.setTransform(275.2,442.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(25,1,1).p("AgUApIAphR");
	this.shape_3.setTransform(275.9,441.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(25,1,1).p("AgaA1IA1hp");
	this.shape_4.setTransform(276.5,440.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(25,1,1).p("AggBBIBBiB");
	this.shape_5.setTransform(277.1,438.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(25,1,1).p("AgmBNIBNiZ");
	this.shape_6.setTransform(277.7,437.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(25,1,1).p("AgtBZIBbix");
	this.shape_7.setTransform(278.3,436.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(25,1,1).p("AgyBlIBmjJ");
	this.shape_8.setTransform(278.9,435.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(25,1,1).p("Ag5BxIBzjh");
	this.shape_9.setTransform(279.5,434.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(25,1,1).p("Ag/B+IB/j6");
	this.shape_10.setTransform(280.1,432.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(25,1,1).p("AhFCKICLkT");
	this.shape_11.setTransform(280.8,431.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(25,1,1).p("AhLCVICXkp");
	this.shape_12.setTransform(281.4,430.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(25,1,1).p("AhRCiICjlC");
	this.shape_13.setTransform(282,429.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(25,1,1).p("AhXCtICvla");
	this.shape_14.setTransform(282.6,428.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(25,1,1).p("AhdC6IC7ly");
	this.shape_15.setTransform(283.2,426.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(25,1,1).p("AhkDGIDJmL");
	this.shape_16.setTransform(283.8,425.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(25,1,1).p("AhpDRIDUmh");
	this.shape_17.setTransform(284.4,424.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(25,1,1).p("AhwDeIDhm6");
	this.shape_18.setTransform(285,423.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(25,1,1).p("Ah2DpIDtnS");
	this.shape_19.setTransform(285.6,422.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(25,1,1).p("Ah8D2ID5nq");
	this.shape_20.setTransform(286.3,420.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(25,1,1).p("AiCECIEFoD");
	this.shape_21.setTransform(286.9,419.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(25,1,1).p("AiIENIERoZ");
	this.shape_22.setTransform(287.5,418.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(25,1,1).p("AiOEaIEdoy");
	this.shape_23.setTransform(288.1,417.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(25,1,1).p("AiUElIEppK");
	this.shape_24.setTransform(288.7,416.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(25,1,1).p("AibEyIE3pi");
	this.shape_25.setTransform(289.3,414.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(25,1,1).p("AihE+IFDp7");
	this.shape_26.setTransform(289.9,413.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(25,1,1).p("AinFJIFPqR");
	this.shape_27.setTransform(290.5,412.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(25,1,1).p("AitFWIFbqr");
	this.shape_28.setTransform(291.2,411.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(25,1,1).p("AizFiIFnrD");
	this.shape_29.setTransform(291.8,410.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(25,1,1).p("Ai5FuIFzrb");
	this.shape_30.setTransform(292.4,408.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(25,1,1).p("Ai/F6IF/rz");
	this.shape_31.setTransform(293,407.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(25,1,1).p("AjFGGIGLsL");
	this.shape_32.setTransform(293.6,406.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(25,1,1).p("AjLGSIGXsj");
	this.shape_33.setTransform(294.2,405.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(25,1,1).p("AjSGeIGls7");
	this.shape_34.setTransform(294.8,404.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(25,1,1).p("AjYGqIGxtT");
	this.shape_35.setTransform(295.4,402.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(25,1,1).p("AjeG2IG9tr");
	this.shape_36.setTransform(296,401.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(25,1,1).p("AjkHCIHJuD");
	this.shape_37.setTransform(296.7,400.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(25,1,1).p("AjqHOIHVub");
	this.shape_38.setTransform(297.3,399.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(25,1,1).p("AjwHaIHhuz");
	this.shape_39.setTransform(297.9,398.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(25,1,1).p("Aj2HmIHtvL");
	this.shape_40.setTransform(298.5,396.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(25,1,1).p("Aj9HyIH6vj");
	this.shape_41.setTransform(299.1,395.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(25,1,1).p("AkCH+IIFv7");
	this.shape_42.setTransform(299.7,394.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(25,1,1).p("AkJIKIITwT");
	this.shape_43.setTransform(300.3,393.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(25,1,1).p("AkPIWIIfwr");
	this.shape_44.setTransform(300.9,392.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(25,1,1).p("AkVIiIIrxD");
	this.shape_45.setTransform(301.5,390.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(25,1,1).p("AkbIuII3xb");
	this.shape_46.setTransform(302.2,389.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(25,1,1).p("AkhI6IJDxz");
	this.shape_47.setTransform(302.8,388.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(25,1,1).p("AknJGIJPyL");
	this.shape_48.setTransform(303.4,387.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(25,1,1).p("AktJSIJbyj");
	this.shape_49.setTransform(304,386.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(25,1,1).p("Ak0JeIJoy7");
	this.shape_50.setTransform(304.6,384.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(25,1,1).p("Ak5JqIJzzT");
	this.shape_51.setTransform(305.2,383.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(25,1,1).p("AlAJ2IKBzr");
	this.shape_52.setTransform(305.8,382.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(25,1,1).p("AlGKCIKN0D");
	this.shape_53.setTransform(306.4,381.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(25,1,1).p("AlMKOIKZ0b");
	this.shape_54.setTransform(307.1,380.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(25,1,1).p("AlSKaIKl0z");
	this.shape_55.setTransform(307.7,378.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(25,1,1).p("AlYKmIKx1L");
	this.shape_56.setTransform(308.3,377.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(25,1,1).p("AleKyIK91j");
	this.shape_57.setTransform(308.9,376.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(25,1,1).p("AlkK+ILJ17");
	this.shape_58.setTransform(309.5,375.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(25,1,1).p("AlrLKILW2T");
	this.shape_59.setTransform(310.1,374.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(25,1,1).p("AlwLWILh2r");
	this.shape_60.setTransform(310.7,372.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(25,1,1).p("Al3LiILv3D");
	this.shape_61.setTransform(311.3,371.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(25,1,1).p("Al9LuIL73b");
	this.shape_62.setTransform(311.9,370.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(25,1,1).p("AmDL6IMH3z");
	this.shape_63.setTransform(312.6,369.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(25,1,1).p("AmJMGIMT4L");
	this.shape_64.setTransform(313.2,368);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(25,1,1).p("AmPMSIMf4j");
	this.shape_65.setTransform(313.8,366.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(25,1,1).p("AmVMeIMr47");
	this.shape_66.setTransform(314.4,365.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(25,1,1).p("AmcMqIM55T");
	this.shape_67.setTransform(315,364.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(25,1,1).p("AmiM2INE5r");
	this.shape_68.setTransform(315.6,363.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(25,1,1).p("AmoNCINR6D");
	this.shape_69.setTransform(316.2,362);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(25,1,1).p("AmuNOINd6b");
	this.shape_70.setTransform(316.8,360.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(25,1,1).p("Am0NaINp6z");
	this.shape_71.setTransform(317.5,359.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(25,1,1).p("Am6NmIN17L");
	this.shape_72.setTransform(318.1,358.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(25,1,1).p("AnANyIOB7j");
	this.shape_73.setTransform(318.7,357.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(25,1,1).p("AnGN+ION77");
	this.shape_74.setTransform(319.3,356);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(25,1,1).p("AnMOKIOZ8T");
	this.shape_75.setTransform(319.9,354.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(25,1,1).p("AnTOWIOn8r");
	this.shape_76.setTransform(320.5,353.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(25,1,1).p("AnZOiIOy9D");
	this.shape_77.setTransform(321.1,352.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(25,1,1).p("AnfOuIO/9b");
	this.shape_78.setTransform(321.7,351.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(25,1,1).p("AnlO6IPL9z");
	this.shape_79.setTransform(322.3,350);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(25,1,1).p("AnrPGIPX+M");
	this.shape_80.setTransform(323,348.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(25,1,1).p("AnxPSIPj+k");
	this.shape_81.setTransform(323.6,347.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(25,1,1).p("An3PfIPv+8");
	this.shape_82.setTransform(324.2,346.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(25,1,1).p("An9PrIP7/V");
	this.shape_83.setTransform(324.8,345.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(25,1,1).p("AoDP2IQI/r");
	this.shape_84.setTransform(325.4,344);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(25,1,1).p("AoKQCMAQVggE");
	this.shape_85.setTransform(326,342.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(25,1,1).p("AoQQOMAQgggc");
	this.shape_86.setTransform(326.6,341.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(25,1,1).p("AoWQbMAQtgg0");
	this.shape_87.setTransform(327.2,340.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(25,1,1).p("AocQnMAQ5ghN");
	this.shape_88.setTransform(327.8,339.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(25,1,1).p("AoiQzMARFghl");
	this.shape_89.setTransform(328.5,338);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(25,1,1).p("AooQ+MARRgh8");
	this.shape_90.setTransform(329.1,336.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(25,1,1).p("AouRKMARdgiU");
	this.shape_91.setTransform(329.7,335.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(25,1,1).p("Ao0RXMARpgis");
	this.shape_92.setTransform(330.3,334.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(25,1,1).p("Ao6RjMAR2gjF");
	this.shape_93.setTransform(330.9,333.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(25,1,1).p("ApBRvMASDgjd");
	this.shape_94.setTransform(331.5,332);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(25,1,1).p("ApHR6MASPgj0");
	this.shape_95.setTransform(332.1,330.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(25,1,1).p("ApNSGMASbgkM");
	this.shape_96.setTransform(332.7,329.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(25,1,1).p("ApTSTMASngkk");
	this.shape_97.setTransform(333.4,328.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(25,1,1).p("ApZSfMASzgk9");
	this.shape_98.setTransform(334,327.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(25,1,1).p("ApfSrMAS/glV");
	this.shape_99.setTransform(334.6,326);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(25,1,1).p("AplS3MATLglt");
	this.shape_100.setTransform(335.2,324.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(25,1,1).p("AprTDMATXgmF");
	this.shape_101.setTransform(335.8,323.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(25,1,1).p("ApxTPMATkgmd");
	this.shape_102.setTransform(336.4,322.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(25,1,1).p("Ap4TbMATxgm1");
	this.shape_103.setTransform(337,321.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(25,1,1).p("Ap+TnMAT9gnN");
	this.shape_104.setTransform(337.6,320);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(25,1,1).p("AqETzMAUJgnl");
	this.shape_105.setTransform(338.2,318.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(25,1,1).p("AqKT/MAUVgn9");
	this.shape_106.setTransform(338.9,317.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(25,1,1).p("AqQULMAUhgoV");
	this.shape_107.setTransform(339.5,316.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(25,1,1).p("AqWUXMAUtgot");
	this.shape_108.setTransform(340.1,315.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(25,1,1).p("AqcUjMAU5gpF");
	this.shape_109.setTransform(340.7,314);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(25,1,1).p("AqjUvMAVHgpd");
	this.shape_110.setTransform(341.3,312.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(25,1,1).p("AqoU7MAVSgp1");
	this.shape_111.setTransform(341.9,311.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(25,1,1).p("AqvVHMAVfgqN");
	this.shape_112.setTransform(342.5,310.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(25,1,1).p("Aq1VTMAVrgql");
	this.shape_113.setTransform(343.1,309.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(25,1,1).p("Aq7VfMAV3gq9");
	this.shape_114.setTransform(343.7,308);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(25,1,1).p("ArBVrMAWDgrV");
	this.shape_115.setTransform(344.4,306.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(25,1,1).p("ArHV3MAWPgrt");
	this.shape_116.setTransform(345,305.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(25,1,1).p("ArNWDMAWbgsF");
	this.shape_117.setTransform(345.6,304.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(25,1,1).p("ArTWPMAWngsd");
	this.shape_118.setTransform(346.2,303.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(25,1,1).p("AraWbMAW1gs1");
	this.shape_119.setTransform(346.8,302);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(25,1,1).p("ArfWnMAXAgtN");
	this.shape_120.setTransform(347.4,300.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(25,1,1).p("ArmWzMAXNgtl");
	this.shape_121.setTransform(348,299.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(25,1,1).p("ArsW/MAXZgt9");
	this.shape_122.setTransform(348.6,298.4);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(25,1,1).p("AryXLMAXlguV");
	this.shape_123.setTransform(349.3,297.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(25,1,1).p("Ar4XXMAXxgut");
	this.shape_124.setTransform(349.9,296);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(25,1,1).p("Ar+XjMAX9gvF");
	this.shape_125.setTransform(350.5,294.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(25,1,1).p("AsEXvMAYJgvd");
	this.shape_126.setTransform(351.1,293.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(25,1,1).p("AsKX7MAYVgv1");
	this.shape_127.setTransform(351.7,292.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(25,1,1).p("AsRYHMAYjgwN");
	this.shape_128.setTransform(352.3,291.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(25,1,1).p("AsWYTMAYugwl");
	this.shape_129.setTransform(352.9,290);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(25,1,1).p("AsdYfMAY7gw9");
	this.shape_130.setTransform(353.5,288.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").ss(25,1,1).p("AsjYrMAZHgxV");
	this.shape_131.setTransform(354.1,287.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(25,1,1).p("AspY3MAZTgxt");
	this.shape_132.setTransform(354.8,286.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(25,1,1).p("AsvZDMAZfgyF");
	this.shape_133.setTransform(355.4,285.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(25,1,1).p("As1ZPMAZrgyd");
	this.shape_134.setTransform(356,283.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#000000").ss(25,1,1).p("As7ZbMAZ3gy1");
	this.shape_135.setTransform(356.6,282.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#000000").ss(25,1,1).p("AtBZnMAaDgzN");
	this.shape_136.setTransform(357.2,281.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#000000").ss(25,1,1).p("AtIZzMAaRgzl");
	this.shape_137.setTransform(357.8,280.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").ss(25,1,1).p("AtOZ/MAadgz9");
	this.shape_138.setTransform(358.4,279.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#000000").ss(25,1,1).p("AtUaLMAapg0V");
	this.shape_139.setTransform(359,277.9);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").ss(25,1,1).p("AtaaXMAa1g0t");
	this.shape_140.setTransform(359.7,276.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#000000").ss(25,1,1).p("ANh6iMgbBA1F");
	this.shape_141.setTransform(360.3,275.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},309).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).wait(226));

	// 2
	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#000000").ss(25,1,1).p("AAAgkIAABJ");
	this.shape_142.setTransform(448.4,108.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#000000").ss(25,1,1).p("AAAAxIAAhh");
	this.shape_143.setTransform(448.4,109.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#000000").ss(25,1,1).p("AAAA9IAAh5");
	this.shape_144.setTransform(448.4,110.7);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#000000").ss(25,1,1).p("AAABJIAAiR");
	this.shape_145.setTransform(448.4,111.9);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#000000").ss(25,1,1).p("AAABVIAAip");
	this.shape_146.setTransform(448.4,113.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#000000").ss(25,1,1).p("AAABhIAAjB");
	this.shape_147.setTransform(448.4,114.3);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#000000").ss(25,1,1).p("AAABtIAAjZ");
	this.shape_148.setTransform(448.4,115.5);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#000000").ss(25,1,1).p("AAAB5IAAjx");
	this.shape_149.setTransform(448.4,116.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#000000").ss(25,1,1).p("AAACFIAAkJ");
	this.shape_150.setTransform(448.4,117.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#000000").ss(25,1,1).p("AAACRIAAkh");
	this.shape_151.setTransform(448.4,119.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#000000").ss(25,1,1).p("AAACdIAAk5");
	this.shape_152.setTransform(448.4,120.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#000000").ss(25,1,1).p("AAACpIAAlR");
	this.shape_153.setTransform(448.4,121.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#000000").ss(25,1,1).p("AAAC0IAAln");
	this.shape_154.setTransform(448.4,122.7);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#000000").ss(25,1,1).p("AAADBIAAmB");
	this.shape_155.setTransform(448.4,123.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#000000").ss(25,1,1).p("AAADNIAAmZ");
	this.shape_156.setTransform(448.4,125.1);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#000000").ss(25,1,1).p("AAADZIAAmx");
	this.shape_157.setTransform(448.4,126.3);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#000000").ss(25,1,1).p("AAADkIAAnH");
	this.shape_158.setTransform(448.4,127.4);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#000000").ss(25,1,1).p("AAADwIAAnf");
	this.shape_159.setTransform(448.4,128.6);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#000000").ss(25,1,1).p("AAAD8IAAn3");
	this.shape_160.setTransform(448.4,129.8);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#000000").ss(25,1,1).p("AAAEIIAAoP");
	this.shape_161.setTransform(448.4,131);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#000000").ss(25,1,1).p("AAAEUIAAon");
	this.shape_162.setTransform(448.4,132.2);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#000000").ss(25,1,1).p("AAAEgIAAo/");
	this.shape_163.setTransform(448.4,133.4);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#000000").ss(25,1,1).p("AAAEsIAApX");
	this.shape_164.setTransform(448.4,134.6);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#000000").ss(25,1,1).p("AAAE4IAApv");
	this.shape_165.setTransform(448.4,135.8);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#000000").ss(25,1,1).p("AAAFEIAAqH");
	this.shape_166.setTransform(448.4,137);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#000000").ss(25,1,1).p("AAAFQIAAqf");
	this.shape_167.setTransform(448.4,138.2);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#000000").ss(25,1,1).p("AAAFcIAAq3");
	this.shape_168.setTransform(448.4,139.4);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#000000").ss(25,1,1).p("AAAFoIAArP");
	this.shape_169.setTransform(448.4,140.6);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#000000").ss(25,1,1).p("AAAF0IAArn");
	this.shape_170.setTransform(448.4,141.8);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#000000").ss(25,1,1).p("AAAGAIAAr+");
	this.shape_171.setTransform(448.4,143);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#000000").ss(25,1,1).p("AAAGMIAAsW");
	this.shape_172.setTransform(448.4,144.2);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#000000").ss(25,1,1).p("AAAGYIAAsv");
	this.shape_173.setTransform(448.4,145.4);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#000000").ss(25,1,1).p("AAAGjIAAtG");
	this.shape_174.setTransform(448.4,146.6);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#000000").ss(25,1,1).p("AAAGvIAAtd");
	this.shape_175.setTransform(448.4,147.7);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#000000").ss(25,1,1).p("AAAG7IAAt1");
	this.shape_176.setTransform(448.4,148.9);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#000000").ss(25,1,1).p("AAAHHIAAuN");
	this.shape_177.setTransform(448.4,150.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#000000").ss(25,1,1).p("AAAHTIAAul");
	this.shape_178.setTransform(448.4,151.3);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#000000").ss(25,1,1).p("AAAHfIAAu9");
	this.shape_179.setTransform(448.4,152.5);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#000000").ss(25,1,1).p("AAAHrIAAvV");
	this.shape_180.setTransform(448.4,153.7);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#000000").ss(25,1,1).p("AAAH3IAAvt");
	this.shape_181.setTransform(448.4,154.9);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#000000").ss(25,1,1).p("AAAIDIAAwF");
	this.shape_182.setTransform(448.4,156.1);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#000000").ss(25,1,1).p("AAAIPIAAwd");
	this.shape_183.setTransform(448.4,157.3);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#000000").ss(25,1,1).p("AAAIbIAAw1");
	this.shape_184.setTransform(448.4,158.5);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#000000").ss(25,1,1).p("AAAInIAAxN");
	this.shape_185.setTransform(448.4,159.7);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#000000").ss(25,1,1).p("AAAIzIAAxl");
	this.shape_186.setTransform(448.4,160.9);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#000000").ss(25,1,1).p("AAAI/IAAx9");
	this.shape_187.setTransform(448.4,162.1);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#000000").ss(25,1,1).p("AAAJLIAAyV");
	this.shape_188.setTransform(448.4,163.3);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#000000").ss(25,1,1).p("AAAJXIAAyt");
	this.shape_189.setTransform(448.4,164.5);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#000000").ss(25,1,1).p("AAAJjIAAzE");
	this.shape_190.setTransform(448.4,165.7);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#000000").ss(25,1,1).p("AAAJvIAAzd");
	this.shape_191.setTransform(448.4,166.9);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#000000").ss(25,1,1).p("AAAJ6IAAz0");
	this.shape_192.setTransform(448.4,168.1);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#000000").ss(25,1,1).p("AAAKGIAA0L");
	this.shape_193.setTransform(448.4,169.2);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#000000").ss(25,1,1).p("AAAKSIAA0j");
	this.shape_194.setTransform(448.4,170.4);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#000000").ss(25,1,1).p("AAAKeIAA07");
	this.shape_195.setTransform(448.4,171.6);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#000000").ss(25,1,1).p("AAAKqIAA1T");
	this.shape_196.setTransform(448.4,172.8);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#000000").ss(25,1,1).p("AAAK2IAA1r");
	this.shape_197.setTransform(448.4,174);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#000000").ss(25,1,1).p("AAALCIAA2D");
	this.shape_198.setTransform(448.4,175.2);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#000000").ss(25,1,1).p("AAALOIAA2b");
	this.shape_199.setTransform(448.4,176.4);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#000000").ss(25,1,1).p("AAALaIAA2z");
	this.shape_200.setTransform(448.4,177.6);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#000000").ss(25,1,1).p("AAALmIAA3L");
	this.shape_201.setTransform(448.4,178.8);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#000000").ss(25,1,1).p("AAALyIAA3j");
	this.shape_202.setTransform(448.4,180);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#000000").ss(25,1,1).p("AAAL+IAA37");
	this.shape_203.setTransform(448.4,181.2);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#000000").ss(25,1,1).p("AAAMKIAA4T");
	this.shape_204.setTransform(448.4,182.4);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#000000").ss(25,1,1).p("AAAMWIAA4r");
	this.shape_205.setTransform(448.4,183.6);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#000000").ss(25,1,1).p("AAAMhIAA5C");
	this.shape_206.setTransform(448.4,184.8);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#000000").ss(25,1,1).p("AAAMuIAA5b");
	this.shape_207.setTransform(448.4,186);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#000000").ss(25,1,1).p("AAAM6IAA5y");
	this.shape_208.setTransform(448.4,187.2);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#000000").ss(25,1,1).p("AAANGIAA6L");
	this.shape_209.setTransform(448.4,188.4);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#000000").ss(25,1,1).p("AAANRIAA6h");
	this.shape_210.setTransform(448.4,189.5);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#000000").ss(25,1,1).p("AAANdIAA65");
	this.shape_211.setTransform(448.4,190.7);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#000000").ss(25,1,1).p("AAANpIAA7R");
	this.shape_212.setTransform(448.4,191.9);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#000000").ss(25,1,1).p("AAAN1IAA7p");
	this.shape_213.setTransform(448.4,193.1);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#000000").ss(25,1,1).p("AAAOBIAA8B");
	this.shape_214.setTransform(448.4,194.3);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#000000").ss(25,1,1).p("AAAONIAA8Z");
	this.shape_215.setTransform(448.4,195.5);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#000000").ss(25,1,1).p("AAAOZIAA8x");
	this.shape_216.setTransform(448.4,196.7);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#000000").ss(25,1,1).p("AAAOlIAA9J");
	this.shape_217.setTransform(448.4,197.9);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#000000").ss(25,1,1).p("AAAOxIAA9h");
	this.shape_218.setTransform(448.4,199.1);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#000000").ss(25,1,1).p("AAAO9IAA95");
	this.shape_219.setTransform(448.4,200.3);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#000000").ss(25,1,1).p("AAAPJIAA+R");
	this.shape_220.setTransform(448.4,201.5);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#000000").ss(25,1,1).p("AAAPVIAA+p");
	this.shape_221.setTransform(448.4,202.7);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#000000").ss(25,1,1).p("AAAPhIAA/B");
	this.shape_222.setTransform(448.4,203.9);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#000000").ss(25,1,1).p("AAAPsIAA/Y");
	this.shape_223.setTransform(448.4,205.1);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#000000").ss(25,1,1).p("AAAP4IAA/w");
	this.shape_224.setTransform(448.4,206.3);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#000000").ss(25,1,1).p("AAAQFMAAAggJ");
	this.shape_225.setTransform(448.4,207.5);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#000000").ss(25,1,1).p("AAAQRMAAAggg");
	this.shape_226.setTransform(448.4,208.7);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#000000").ss(25,1,1).p("AAAQdMAAAgg5");
	this.shape_227.setTransform(448.4,209.9);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#000000").ss(25,1,1).p("AAAQoMAAAghP");
	this.shape_228.setTransform(448.4,211);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#000000").ss(25,1,1).p("AAAQ0MAAAghn");
	this.shape_229.setTransform(448.4,212.2);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#000000").ss(25,1,1).p("AAARAMAAAgh/");
	this.shape_230.setTransform(448.4,213.4);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#000000").ss(25,1,1).p("AAARMMAAAgiX");
	this.shape_231.setTransform(448.4,214.6);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#000000").ss(25,1,1).p("AAARYMAAAgiv");
	this.shape_232.setTransform(448.4,215.8);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#000000").ss(25,1,1).p("AAARkMAAAgjH");
	this.shape_233.setTransform(448.4,217);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#000000").ss(25,1,1).p("AAARwMAAAgjf");
	this.shape_234.setTransform(448.4,218.2);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#000000").ss(25,1,1).p("AAAR8MAAAgj3");
	this.shape_235.setTransform(448.4,219.4);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#000000").ss(25,1,1).p("AAASIMAAAgkP");
	this.shape_236.setTransform(448.4,220.6);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#000000").ss(25,1,1).p("AAASUMAAAgkn");
	this.shape_237.setTransform(448.4,221.8);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#000000").ss(25,1,1).p("AAASgMAAAgk/");
	this.shape_238.setTransform(448.4,223);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#000000").ss(25,1,1).p("AAASsMAAAglX");
	this.shape_239.setTransform(448.4,224.2);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#000000").ss(25,1,1).p("AAAS4MAAAglv");
	this.shape_240.setTransform(448.4,225.4);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#000000").ss(25,1,1).p("AAATEMAAAgmH");
	this.shape_241.setTransform(448.4,226.6);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#000000").ss(25,1,1).p("AAATPMAAAgme");
	this.shape_242.setTransform(448.4,227.8);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#000000").ss(25,1,1).p("AAATcMAAAgm3");
	this.shape_243.setTransform(448.4,229);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#000000").ss(25,1,1).p("AAAToMAAAgnO");
	this.shape_244.setTransform(448.4,230.2);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("#000000").ss(25,1,1).p("AAATzMAAAgnl");
	this.shape_245.setTransform(448.4,231.3);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#000000").ss(25,1,1).p("AAAT/MAAAgn9");
	this.shape_246.setTransform(448.4,232.5);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("#000000").ss(25,1,1).p("AAAULMAAAgoV");
	this.shape_247.setTransform(448.4,233.7);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#000000").ss(25,1,1).p("AAAUXMAAAgot");
	this.shape_248.setTransform(448.4,234.9);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#000000").ss(25,1,1).p("AAAUjMAAAgpF");
	this.shape_249.setTransform(448.4,236.1);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#000000").ss(25,1,1).p("AAAUvMAAAgpd");
	this.shape_250.setTransform(448.4,237.3);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#000000").ss(25,1,1).p("AAAU7MAAAgp1");
	this.shape_251.setTransform(448.4,238.5);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#000000").ss(25,1,1).p("AAAVHMAAAgqN");
	this.shape_252.setTransform(448.4,239.7);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#000000").ss(25,1,1).p("AAAVTMAAAgql");
	this.shape_253.setTransform(448.4,240.9);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#000000").ss(25,1,1).p("AAAVfMAAAgq9");
	this.shape_254.setTransform(448.4,242.1);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("#000000").ss(25,1,1).p("AAAVrMAAAgrV");
	this.shape_255.setTransform(448.4,243.3);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#000000").ss(25,1,1).p("AAAV3MAAAgrt");
	this.shape_256.setTransform(448.4,244.5);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("#000000").ss(25,1,1).p("AAAWDMAAAgsF");
	this.shape_257.setTransform(448.4,245.7);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#000000").ss(25,1,1).p("AAAWPMAAAgsd");
	this.shape_258.setTransform(448.4,246.9);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("#000000").ss(25,1,1).p("AAAWbMAAAgs1");
	this.shape_259.setTransform(448.4,248.1);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#000000").ss(25,1,1).p("AAAWmMAAAgtM");
	this.shape_260.setTransform(448.4,249.3);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("#000000").ss(25,1,1).p("AAAWzMAAAgtl");
	this.shape_261.setTransform(448.4,250.5);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#000000").ss(25,1,1).p("AAAW/MAAAgt8");
	this.shape_262.setTransform(448.4,251.7);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#000000").ss(25,1,1).p("AAAXKMAAAguT");
	this.shape_263.setTransform(448.4,252.8);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#000000").ss(25,1,1).p("AAAXWMAAAgur");
	this.shape_264.setTransform(448.4,254);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("#000000").ss(25,1,1).p("AAAXiMAAAgvD");
	this.shape_265.setTransform(448.4,255.2);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#000000").ss(25,1,1).p("AAAXuMAAAgvb");
	this.shape_266.setTransform(448.4,256.4);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("#000000").ss(25,1,1).p("AAAX6MAAAgvz");
	this.shape_267.setTransform(448.4,257.6);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#000000").ss(25,1,1).p("AAAYGMAAAgwL");
	this.shape_268.setTransform(448.4,258.8);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#000000").ss(25,1,1).p("AAAYSMAAAgwj");
	this.shape_269.setTransform(448.4,260);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#000000").ss(25,1,1).p("AAAYeMAAAgw7");
	this.shape_270.setTransform(448.4,261.2);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("#000000").ss(25,1,1).p("AAAYqMAAAgxT");
	this.shape_271.setTransform(448.4,262.4);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#000000").ss(25,1,1).p("AAAY2MAAAgxr");
	this.shape_272.setTransform(448.4,263.6);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("#000000").ss(25,1,1).p("AAAZCMAAAgyD");
	this.shape_273.setTransform(448.4,264.8);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#000000").ss(25,1,1).p("AAAZOMAAAgyb");
	this.shape_274.setTransform(448.4,266);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("#000000").ss(25,1,1).p("AAAZaMAAAgyz");
	this.shape_275.setTransform(448.4,267.2);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#000000").ss(25,1,1).p("AAAZmMAAAgzL");
	this.shape_276.setTransform(448.4,268.4);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f().s("#000000").ss(25,1,1).p("AAAZyMAAAgzj");
	this.shape_277.setTransform(448.4,269.6);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#000000").ss(25,1,1).p("AAAZ9MAAAgz6");
	this.shape_278.setTransform(448.4,270.8);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f().s("#000000").ss(25,1,1).p("AAAaKMAAAg0T");
	this.shape_279.setTransform(448.4,272);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#000000").ss(25,1,1).p("AAAaVMAAAg0p");
	this.shape_280.setTransform(448.4,273.1);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f().s("#000000").ss(25,1,1).p("AAAahMAAAg1B");
	this.shape_281.setTransform(448.4,274.3);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("#000000").ss(25,1,1).p("AAA6sMAAAA1Z");
	this.shape_282.setTransform(448.4,275.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_142}]},460).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).to({state:[{t:this.shape_273}]},1).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_282}]},1).wait(75));

	// 4
	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f().s("#000000").ss(25,1,1).p("AgXguIAvBd");
	this.shape_283.setTransform(103.7,109.3);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("#000000").ss(25,1,1).p("Agdg6IA7B1");
	this.shape_284.setTransform(104.3,110.5);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f().s("#000000").ss(25,1,1).p("AgjhGIBHCN");
	this.shape_285.setTransform(104.9,111.7);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("#000000").ss(25,1,1).p("AgphSIBTCl");
	this.shape_286.setTransform(105.5,112.9);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f().s("#000000").ss(25,1,1).p("AgvheIBfC9");
	this.shape_287.setTransform(106.1,114.1);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("#000000").ss(25,1,1).p("Ag0hqIBqDV");
	this.shape_288.setTransform(106.7,115.3);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f().s("#000000").ss(25,1,1).p("Ag7h1IB3Dr");
	this.shape_289.setTransform(107.3,116.4);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f().s("#000000").ss(25,1,1).p("AhBiBICCED");
	this.shape_290.setTransform(107.9,117.6);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f().s("#000000").ss(25,1,1).p("AhGiNICNEb");
	this.shape_291.setTransform(108.5,118.8);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f().s("#000000").ss(25,1,1).p("AhMiZICZEz");
	this.shape_292.setTransform(109.1,120);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f().s("#000000").ss(25,1,1).p("AhSikIClFJ");
	this.shape_293.setTransform(109.7,121.2);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("#000000").ss(25,1,1).p("AhYixICxFj");
	this.shape_294.setTransform(110.3,122.4);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f().s("#000000").ss(25,1,1).p("Ahei8IC9F5");
	this.shape_295.setTransform(110.9,123.5);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f().s("#000000").ss(25,1,1).p("AhkjIIDJGR");
	this.shape_296.setTransform(111.5,124.7);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f().s("#000000").ss(25,1,1).p("AhqjUIDVGp");
	this.shape_297.setTransform(112.1,125.9);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f().s("#000000").ss(25,1,1).p("AhwjgIDhHB");
	this.shape_298.setTransform(112.7,127.1);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f().s("#000000").ss(25,1,1).p("Ah2jsIDtHZ");
	this.shape_299.setTransform(113.3,128.3);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f().s("#000000").ss(25,1,1).p("Ah8j3ID5Hw");
	this.shape_300.setTransform(113.9,129.5);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f().s("#000000").ss(25,1,1).p("AiCkDIEFIH");
	this.shape_301.setTransform(114.5,130.6);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f().s("#000000").ss(25,1,1).p("AiIkPIERIf");
	this.shape_302.setTransform(115,131.8);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f().s("#000000").ss(25,1,1).p("AiOkbIEdI3");
	this.shape_303.setTransform(115.6,133);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f().s("#000000").ss(25,1,1).p("AiUknIEpJP");
	this.shape_304.setTransform(116.2,134.2);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f().s("#000000").ss(25,1,1).p("AiakzIE1Jn");
	this.shape_305.setTransform(116.8,135.4);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f().s("#000000").ss(25,1,1).p("Aigk/IFBJ+");
	this.shape_306.setTransform(117.4,136.6);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f().s("#000000").ss(25,1,1).p("AimlKIFNKV");
	this.shape_307.setTransform(118,137.7);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f().s("#000000").ss(25,1,1).p("AislWIFZKt");
	this.shape_308.setTransform(118.6,138.9);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f().s("#000000").ss(25,1,1).p("AiyliIFlLF");
	this.shape_309.setTransform(119.2,140.1);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f().s("#000000").ss(25,1,1).p("Ai4luIFxLd");
	this.shape_310.setTransform(119.8,141.3);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f().s("#000000").ss(25,1,1).p("Ai9l6IF7L1");
	this.shape_311.setTransform(120.4,142.5);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f().s("#000000").ss(25,1,1).p("AjDmFIGHMM");
	this.shape_312.setTransform(121,143.7);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f().s("#000000").ss(25,1,1).p("AjJmRIGTMj");
	this.shape_313.setTransform(121.6,144.8);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f().s("#000000").ss(25,1,1).p("AjPmdIGfM7");
	this.shape_314.setTransform(122.2,146);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f().s("#000000").ss(25,1,1).p("AjVmpIGrNT");
	this.shape_315.setTransform(122.8,147.2);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f().s("#000000").ss(25,1,1).p("Ajbm1IG3Nr");
	this.shape_316.setTransform(123.4,148.4);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f().s("#000000").ss(25,1,1).p("AjhnBIHDOD");
	this.shape_317.setTransform(124,149.6);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f().s("#000000").ss(25,1,1).p("AjnnNIHPOb");
	this.shape_318.setTransform(124.6,150.8);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f().s("#000000").ss(25,1,1).p("AjtnYIHbOx");
	this.shape_319.setTransform(125.2,151.9);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f().s("#000000").ss(25,1,1).p("AjznkIHnPJ");
	this.shape_320.setTransform(125.8,153.1);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f().s("#000000").ss(25,1,1).p("Aj5nwIHzPh");
	this.shape_321.setTransform(126.4,154.3);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f().s("#000000").ss(25,1,1).p("Aj/n8IH/P5");
	this.shape_322.setTransform(126.9,155.5);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f().s("#000000").ss(25,1,1).p("AkFoIIILQR");
	this.shape_323.setTransform(127.5,156.7);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f().s("#000000").ss(25,1,1).p("AkLoUIIXQp");
	this.shape_324.setTransform(128.1,157.9);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f().s("#000000").ss(25,1,1).p("AkRofIIjQ/");
	this.shape_325.setTransform(128.7,159);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f().s("#000000").ss(25,1,1).p("AkXorIIvRX");
	this.shape_326.setTransform(129.3,160.2);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f().s("#000000").ss(25,1,1).p("Akdo3II7Rv");
	this.shape_327.setTransform(129.9,161.4);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f().s("#000000").ss(25,1,1).p("AkjpDIJHSH");
	this.shape_328.setTransform(130.5,162.6);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f().s("#000000").ss(25,1,1).p("AkppPIJTSf");
	this.shape_329.setTransform(131.1,163.8);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f().s("#000000").ss(25,1,1).p("AkupbIJeS3");
	this.shape_330.setTransform(131.7,165);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f().s("#000000").ss(25,1,1).p("Ak1pmIJqTN");
	this.shape_331.setTransform(132.3,166.1);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f().s("#000000").ss(25,1,1).p("Ak6pyIJ2Tl");
	this.shape_332.setTransform(132.9,167.3);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f().s("#000000").ss(25,1,1).p("AlAp+IKBT9");
	this.shape_333.setTransform(133.5,168.5);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f().s("#000000").ss(25,1,1).p("AlGqKIKNUV");
	this.shape_334.setTransform(134.1,169.7);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f().s("#000000").ss(25,1,1).p("AlMqWIKZUt");
	this.shape_335.setTransform(134.7,170.9);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f().s("#000000").ss(25,1,1).p("AlSqiIKlVE");
	this.shape_336.setTransform(135.3,172.1);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f().s("#000000").ss(25,1,1).p("AlYqtIKxVb");
	this.shape_337.setTransform(135.9,173.2);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f().s("#000000").ss(25,1,1).p("Aleq5IK9Vz");
	this.shape_338.setTransform(136.5,174.4);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f().s("#000000").ss(25,1,1).p("AlkrFILJWL");
	this.shape_339.setTransform(137.1,175.6);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f().s("#000000").ss(25,1,1).p("AlqrRILVWj");
	this.shape_340.setTransform(137.7,176.8);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f().s("#000000").ss(25,1,1).p("AlwrdILhW7");
	this.shape_341.setTransform(138.3,178);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f().s("#000000").ss(25,1,1).p("Al2roILtXS");
	this.shape_342.setTransform(138.9,179.2);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f().s("#000000").ss(25,1,1).p("Al8r1IL5Xr");
	this.shape_343.setTransform(139.4,180.4);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f().s("#000000").ss(25,1,1).p("AmCsAIMFYB");
	this.shape_344.setTransform(140,181.5);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f().s("#000000").ss(25,1,1).p("AmIsMIMRYZ");
	this.shape_345.setTransform(140.6,182.7);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f().s("#000000").ss(25,1,1).p("AmOsYIMdYx");
	this.shape_346.setTransform(141.2,183.9);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f().s("#000000").ss(25,1,1).p("AmUskIMpZJ");
	this.shape_347.setTransform(141.8,185.1);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f().s("#000000").ss(25,1,1).p("AmZswIM0Zg");
	this.shape_348.setTransform(142.4,186.3);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f().s("#000000").ss(25,1,1).p("Amgs8INBZ5");
	this.shape_349.setTransform(143,187.5);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f().s("#000000").ss(25,1,1).p("AmmtHINNaP");
	this.shape_350.setTransform(143.6,188.6);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f().s("#000000").ss(25,1,1).p("AmrtTINYan");
	this.shape_351.setTransform(144.2,189.8);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f().s("#000000").ss(25,1,1).p("AmytfINka/");
	this.shape_352.setTransform(144.8,191);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f().s("#000000").ss(25,1,1).p("Am3trINwbX");
	this.shape_353.setTransform(145.4,192.2);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f().s("#000000").ss(25,1,1).p("Am9t3IN7bv");
	this.shape_354.setTransform(146,193.4);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f().s("#000000").ss(25,1,1).p("AnDuDIOHcG");
	this.shape_355.setTransform(146.6,194.6);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f().s("#000000").ss(25,1,1).p("AnJuOIOTcd");
	this.shape_356.setTransform(147.2,195.7);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f().s("#000000").ss(25,1,1).p("AnPuaIOfc1");
	this.shape_357.setTransform(147.8,196.9);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f().s("#000000").ss(25,1,1).p("AnVumIOrdN");
	this.shape_358.setTransform(148.4,198.1);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f().s("#000000").ss(25,1,1).p("AnbuyIO3dl");
	this.shape_359.setTransform(149,199.3);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f().s("#000000").ss(25,1,1).p("Anhu+IPDd9");
	this.shape_360.setTransform(149.6,200.5);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f().s("#000000").ss(25,1,1).p("AnnvJIPPeU");
	this.shape_361.setTransform(150.2,201.7);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f().s("#000000").ss(25,1,1).p("AntvVIPber");
	this.shape_362.setTransform(150.8,202.8);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f().s("#000000").ss(25,1,1).p("AnzvhIPnfD");
	this.shape_363.setTransform(151.4,204);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f().s("#000000").ss(25,1,1).p("An5vtIPzfb");
	this.shape_364.setTransform(151.9,205.2);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f().s("#000000").ss(25,1,1).p("An/v5IP/fz");
	this.shape_365.setTransform(152.5,206.4);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f().s("#000000").ss(25,1,1).p("AoFwFMAQLAgL");
	this.shape_366.setTransform(153.1,207.6);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f().s("#000000").ss(25,1,1).p("AoLwRMAQXAgi");
	this.shape_367.setTransform(153.7,208.8);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f().s("#000000").ss(25,1,1).p("AoRwcMAQjAg5");
	this.shape_368.setTransform(154.3,209.9);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f().s("#000000").ss(25,1,1).p("AoWwoMAQuAhR");
	this.shape_369.setTransform(154.9,211.1);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f().s("#000000").ss(25,1,1).p("Aodw0MAQ7Ahp");
	this.shape_370.setTransform(155.5,212.3);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f().s("#000000").ss(25,1,1).p("AojxAMARHAiB");
	this.shape_371.setTransform(156.1,213.5);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f().s("#000000").ss(25,1,1).p("AopxLMARTAiY");
	this.shape_372.setTransform(156.7,214.7);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f().s("#000000").ss(25,1,1).p("AovxYMAReAix");
	this.shape_373.setTransform(157.3,215.9);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f().s("#000000").ss(25,1,1).p("Ao0xjMARpAjH");
	this.shape_374.setTransform(157.9,217);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f().s("#000000").ss(25,1,1).p("Ao6xvMAR1Ajf");
	this.shape_375.setTransform(158.5,218.2);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f().s("#000000").ss(25,1,1).p("ApAx7MASBAj3");
	this.shape_376.setTransform(159.1,219.4);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f().s("#000000").ss(25,1,1).p("ApGyHMASNAkP");
	this.shape_377.setTransform(159.7,220.6);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f().s("#000000").ss(25,1,1).p("ApMyTMASZAkn");
	this.shape_378.setTransform(160.3,221.8);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f().s("#000000").ss(25,1,1).p("ApSyfMASlAk/");
	this.shape_379.setTransform(160.9,223);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f().s("#000000").ss(25,1,1).p("ApYyqMASxAlV");
	this.shape_380.setTransform(161.5,224.1);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f().s("#000000").ss(25,1,1).p("Apey2MAS9Alt");
	this.shape_381.setTransform(162.1,225.3);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f().s("#000000").ss(25,1,1).p("ApkzCMATJAmF");
	this.shape_382.setTransform(162.7,226.5);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f().s("#000000").ss(25,1,1).p("ApqzOMATVAmd");
	this.shape_383.setTransform(163.3,227.7);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f().s("#000000").ss(25,1,1).p("ApwzaMAThAm1");
	this.shape_384.setTransform(163.9,228.9);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f().s("#000000").ss(25,1,1).p("Ap2zmMATtAnN");
	this.shape_385.setTransform(164.4,230.1);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f().s("#000000").ss(25,1,1).p("Ap8zxMAT5Anj");
	this.shape_386.setTransform(165,231.2);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f().s("#000000").ss(25,1,1).p("AqCz9MAUFAn7");
	this.shape_387.setTransform(165.6,232.4);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f().s("#000000").ss(25,1,1).p("AqI0JMAURAoT");
	this.shape_388.setTransform(166.2,233.6);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f().s("#000000").ss(25,1,1).p("AqO0VMAUdAor");
	this.shape_389.setTransform(166.8,234.8);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f().s("#000000").ss(25,1,1).p("AqT0hMAUoApD");
	this.shape_390.setTransform(167.4,236);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f().s("#000000").ss(25,1,1).p("Aqa0sMAU1Apa");
	this.shape_391.setTransform(168,237.2);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f().s("#000000").ss(25,1,1).p("Aqg04MAVBApx");
	this.shape_392.setTransform(168.6,238.3);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f().s("#000000").ss(25,1,1).p("Aqm1EMAVNAqJ");
	this.shape_393.setTransform(169.2,239.5);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f().s("#000000").ss(25,1,1).p("Aqs1QMAVYAqh");
	this.shape_394.setTransform(169.8,240.7);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f().s("#000000").ss(25,1,1).p("Aqx1cMAVjAq5");
	this.shape_395.setTransform(170.4,241.9);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f().s("#000000").ss(25,1,1).p("Aq31oMAVvArR");
	this.shape_396.setTransform(171,243.1);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f().s("#000000").ss(25,1,1).p("Aq910MAV7Aro");
	this.shape_397.setTransform(171.6,244.3);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f().s("#000000").ss(25,1,1).p("ArD1/MAWHAr/");
	this.shape_398.setTransform(172.2,245.4);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f().s("#000000").ss(25,1,1).p("ArJ2LMAWTAsX");
	this.shape_399.setTransform(172.8,246.6);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f().s("#000000").ss(25,1,1).p("ArP2XMAWfAsv");
	this.shape_400.setTransform(173.4,247.8);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f().s("#000000").ss(25,1,1).p("ArV2jMAWrAtH");
	this.shape_401.setTransform(174,249);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f().s("#000000").ss(25,1,1).p("Arb2vMAW3Atf");
	this.shape_402.setTransform(174.6,250.2);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f().s("#000000").ss(25,1,1).p("Arh27MAXDAt3");
	this.shape_403.setTransform(175.2,251.4);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f().s("#000000").ss(25,1,1).p("Arn3HMAXPAuP");
	this.shape_404.setTransform(175.8,252.6);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f().s("#000000").ss(25,1,1).p("Art3SMAXbAul");
	this.shape_405.setTransform(176.3,253.7);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f().s("#000000").ss(25,1,1).p("Arz3eMAXnAu9");
	this.shape_406.setTransform(176.9,254.9);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f().s("#000000").ss(25,1,1).p("Ar53qMAXzAvV");
	this.shape_407.setTransform(177.5,256.1);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f().s("#000000").ss(25,1,1).p("Ar/32MAX/Avt");
	this.shape_408.setTransform(178.1,257.3);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f().s("#000000").ss(25,1,1).p("AsF4CMAYLAwF");
	this.shape_409.setTransform(178.7,258.5);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f().s("#000000").ss(25,1,1).p("AsL4NMAYXAwc");
	this.shape_410.setTransform(179.3,259.7);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f().s("#000000").ss(25,1,1).p("AsQ4ZMAYiAwz");
	this.shape_411.setTransform(179.9,260.8);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f().s("#000000").ss(25,1,1).p("AsX4lMAYuAxL");
	this.shape_412.setTransform(180.5,262);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f().s("#000000").ss(25,1,1).p("Asd4xMAY7Axj");
	this.shape_413.setTransform(181.1,263.2);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f().s("#000000").ss(25,1,1).p("Asj49MAZHAx7");
	this.shape_414.setTransform(181.7,264.4);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f().s("#000000").ss(25,1,1).p("Asp5JMAZSAyT");
	this.shape_415.setTransform(182.3,265.6);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f().s("#000000").ss(25,1,1).p("Asu5VMAZdAyq");
	this.shape_416.setTransform(182.9,266.8);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f().s("#000000").ss(25,1,1).p("As05gMAZpAzB");
	this.shape_417.setTransform(183.5,267.9);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f().s("#000000").ss(25,1,1).p("As65sMAZ1AzZ");
	this.shape_418.setTransform(184.1,269.1);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f().s("#000000").ss(25,1,1).p("AtA54MAaBAzx");
	this.shape_419.setTransform(184.7,270.3);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f().s("#000000").ss(25,1,1).p("AtG6EMAaNA0J");
	this.shape_420.setTransform(185.3,271.5);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f().s("#000000").ss(25,1,1).p("AtM6PMAaZA0g");
	this.shape_421.setTransform(185.9,272.7);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f().s("#000000").ss(25,1,1).p("AtS6cMAalA05");
	this.shape_422.setTransform(186.5,273.9);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f().s("#000000").ss(25,1,1).p("AtY6nMAaxA1P");
	this.shape_423.setTransform(187.1,275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_283}]},160).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_289}]},1).to({state:[{t:this.shape_290}]},1).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_293}]},1).to({state:[{t:this.shape_294}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_299}]},1).to({state:[{t:this.shape_300}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_304}]},1).to({state:[{t:this.shape_305}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_308}]},1).to({state:[{t:this.shape_309}]},1).to({state:[{t:this.shape_310}]},1).to({state:[{t:this.shape_311}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_313}]},1).to({state:[{t:this.shape_314}]},1).to({state:[{t:this.shape_315}]},1).to({state:[{t:this.shape_316}]},1).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_352}]},1).to({state:[{t:this.shape_353}]},1).to({state:[{t:this.shape_354}]},1).to({state:[{t:this.shape_355}]},1).to({state:[{t:this.shape_356}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_358}]},1).to({state:[{t:this.shape_359}]},1).to({state:[{t:this.shape_360}]},1).to({state:[{t:this.shape_361}]},1).to({state:[{t:this.shape_362}]},1).to({state:[{t:this.shape_363}]},1).to({state:[{t:this.shape_364}]},1).to({state:[{t:this.shape_365}]},1).to({state:[{t:this.shape_366}]},1).to({state:[{t:this.shape_367}]},1).to({state:[{t:this.shape_368}]},1).to({state:[{t:this.shape_369}]},1).to({state:[{t:this.shape_370}]},1).to({state:[{t:this.shape_371}]},1).to({state:[{t:this.shape_372}]},1).to({state:[{t:this.shape_373}]},1).to({state:[{t:this.shape_374}]},1).to({state:[{t:this.shape_375}]},1).to({state:[{t:this.shape_376}]},1).to({state:[{t:this.shape_377}]},1).to({state:[{t:this.shape_378}]},1).to({state:[{t:this.shape_379}]},1).to({state:[{t:this.shape_380}]},1).to({state:[{t:this.shape_381}]},1).to({state:[{t:this.shape_382}]},1).to({state:[{t:this.shape_383}]},1).to({state:[{t:this.shape_384}]},1).to({state:[{t:this.shape_385}]},1).to({state:[{t:this.shape_386}]},1).to({state:[{t:this.shape_387}]},1).to({state:[{t:this.shape_388}]},1).to({state:[{t:this.shape_389}]},1).to({state:[{t:this.shape_390}]},1).to({state:[{t:this.shape_391}]},1).to({state:[{t:this.shape_392}]},1).to({state:[{t:this.shape_393}]},1).to({state:[{t:this.shape_394}]},1).to({state:[{t:this.shape_395}]},1).to({state:[{t:this.shape_396}]},1).to({state:[{t:this.shape_397}]},1).to({state:[{t:this.shape_398}]},1).to({state:[{t:this.shape_399}]},1).to({state:[{t:this.shape_400}]},1).to({state:[{t:this.shape_401}]},1).to({state:[{t:this.shape_402}]},1).to({state:[{t:this.shape_403}]},1).to({state:[{t:this.shape_404}]},1).to({state:[{t:this.shape_405}]},1).to({state:[{t:this.shape_406}]},1).to({state:[{t:this.shape_407}]},1).to({state:[{t:this.shape_408}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_410}]},1).to({state:[{t:this.shape_411}]},1).to({state:[{t:this.shape_412}]},1).to({state:[{t:this.shape_413}]},1).to({state:[{t:this.shape_414}]},1).to({state:[{t:this.shape_415}]},1).to({state:[{t:this.shape_416}]},1).to({state:[{t:this.shape_417}]},1).to({state:[{t:this.shape_418}]},1).to({state:[{t:this.shape_419}]},1).to({state:[{t:this.shape_420}]},1).to({state:[{t:this.shape_421}]},1).to({state:[{t:this.shape_422}]},1).to({state:[{t:this.shape_423}]},1).to({state:[{t:this.shape_423}]},9).wait(366));

	// 1
	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f().s("#000000").ss(25,1,1).p("AAAgQIAAAh");
	this.shape_424.setTransform(101.4,106.3);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f().s("#000000").ss(25,1,1).p("AAAAdIAAg5");
	this.shape_425.setTransform(101.4,107.5);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f().s("#000000").ss(25,1,1).p("AAAAqIAAhT");
	this.shape_426.setTransform(101.4,108.8);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f().s("#000000").ss(25,1,1).p("AAAA2IAAhq");
	this.shape_427.setTransform(101.4,110);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f().s("#000000").ss(25,1,1).p("AAABCIAAiC");
	this.shape_428.setTransform(101.4,111.2);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f().s("#000000").ss(25,1,1).p("AAABOIAAib");
	this.shape_429.setTransform(101.4,112.4);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f().s("#000000").ss(25,1,1).p("AAABaIAAiz");
	this.shape_430.setTransform(101.4,113.6);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f().s("#000000").ss(25,1,1).p("AAABmIAAjL");
	this.shape_431.setTransform(101.4,114.8);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f().s("#000000").ss(25,1,1).p("AAAByIAAjj");
	this.shape_432.setTransform(101.4,116);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f().s("#000000").ss(25,1,1).p("AAAB+IAAj7");
	this.shape_433.setTransform(101.4,117.2);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f().s("#000000").ss(25,1,1).p("AAACKIAAkT");
	this.shape_434.setTransform(101.4,118.4);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f().s("#000000").ss(25,1,1).p("AAACWIAAkr");
	this.shape_435.setTransform(101.4,119.6);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f().s("#000000").ss(25,1,1).p("AAACiIAAlD");
	this.shape_436.setTransform(101.4,120.8);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f().s("#000000").ss(25,1,1).p("AAACuIAAlb");
	this.shape_437.setTransform(101.4,122);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f().s("#000000").ss(25,1,1).p("AAAC7IAAl1");
	this.shape_438.setTransform(101.4,123.3);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f().s("#000000").ss(25,1,1).p("AAADHIAAmN");
	this.shape_439.setTransform(101.4,124.5);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f().s("#000000").ss(25,1,1).p("AAADTIAAml");
	this.shape_440.setTransform(101.4,125.7);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f().s("#000000").ss(25,1,1).p("AAADfIAAm9");
	this.shape_441.setTransform(101.4,126.9);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f().s("#000000").ss(25,1,1).p("AAADrIAAnV");
	this.shape_442.setTransform(101.4,128.1);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f().s("#000000").ss(25,1,1).p("AAAD3IAAnt");
	this.shape_443.setTransform(101.4,129.3);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f().s("#000000").ss(25,1,1).p("AAAEDIAAoF");
	this.shape_444.setTransform(101.4,130.5);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f().s("#000000").ss(25,1,1).p("AAAEPIAAod");
	this.shape_445.setTransform(101.4,131.7);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f().s("#000000").ss(25,1,1).p("AAAEbIAAo1");
	this.shape_446.setTransform(101.4,132.9);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f().s("#000000").ss(25,1,1).p("AAAEnIAApN");
	this.shape_447.setTransform(101.4,134.1);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f().s("#000000").ss(25,1,1).p("AAAEzIAApl");
	this.shape_448.setTransform(101.4,135.3);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f().s("#000000").ss(25,1,1).p("AAAE/IAAp+");
	this.shape_449.setTransform(101.4,136.6);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f().s("#000000").ss(25,1,1).p("AAAFMIAAqX");
	this.shape_450.setTransform(101.4,137.8);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f().s("#000000").ss(25,1,1).p("AAAFYIAAqu");
	this.shape_451.setTransform(101.4,139);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f().s("#000000").ss(25,1,1).p("AAAFkIAArH");
	this.shape_452.setTransform(101.4,140.2);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f().s("#000000").ss(25,1,1).p("AAAFwIAArf");
	this.shape_453.setTransform(101.4,141.4);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f().s("#000000").ss(25,1,1).p("AAAF8IAAr3");
	this.shape_454.setTransform(101.4,142.6);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f().s("#000000").ss(25,1,1).p("AAAGIIAAsP");
	this.shape_455.setTransform(101.4,143.8);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f().s("#000000").ss(25,1,1).p("AAAGUIAAsn");
	this.shape_456.setTransform(101.4,145);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f().s("#000000").ss(25,1,1).p("AAAGgIAAs/");
	this.shape_457.setTransform(101.4,146.2);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f().s("#000000").ss(25,1,1).p("AAAGsIAAtX");
	this.shape_458.setTransform(101.4,147.4);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f().s("#000000").ss(25,1,1).p("AAAG4IAAtv");
	this.shape_459.setTransform(101.4,148.6);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f().s("#000000").ss(25,1,1).p("AAAHEIAAuH");
	this.shape_460.setTransform(101.4,149.8);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f().s("#000000").ss(25,1,1).p("AAAHQIAAug");
	this.shape_461.setTransform(101.4,151.1);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f().s("#000000").ss(25,1,1).p("AAAHdIAAu5");
	this.shape_462.setTransform(101.4,152.3);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f().s("#000000").ss(25,1,1).p("AAAHpIAAvQ");
	this.shape_463.setTransform(101.4,153.5);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f().s("#000000").ss(25,1,1).p("AAAH1IAAvp");
	this.shape_464.setTransform(101.4,154.7);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f().s("#000000").ss(25,1,1).p("AAAIBIAAwB");
	this.shape_465.setTransform(101.4,155.9);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f().s("#000000").ss(25,1,1).p("AAAINIAAwZ");
	this.shape_466.setTransform(101.4,157.1);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f().s("#000000").ss(25,1,1).p("AAAIZIAAwx");
	this.shape_467.setTransform(101.4,158.3);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f().s("#000000").ss(25,1,1).p("AAAIlIAAxJ");
	this.shape_468.setTransform(101.4,159.5);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f().s("#000000").ss(25,1,1).p("AAAIxIAAxh");
	this.shape_469.setTransform(101.4,160.7);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f().s("#000000").ss(25,1,1).p("AAAI9IAAx5");
	this.shape_470.setTransform(101.4,161.9);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f().s("#000000").ss(25,1,1).p("AAAJJIAAyR");
	this.shape_471.setTransform(101.4,163.1);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f().s("#000000").ss(25,1,1).p("AAAJVIAAyp");
	this.shape_472.setTransform(101.4,164.3);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f().s("#000000").ss(25,1,1).p("AAAJhIAAzC");
	this.shape_473.setTransform(101.4,165.6);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f().s("#000000").ss(25,1,1).p("AAAJuIAAzb");
	this.shape_474.setTransform(101.4,166.8);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f().s("#000000").ss(25,1,1).p("AAAJ6IAAzz");
	this.shape_475.setTransform(101.4,168);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f().s("#000000").ss(25,1,1).p("AAAKGIAA0L");
	this.shape_476.setTransform(101.4,169.2);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f().s("#000000").ss(25,1,1).p("AAAKSIAA0j");
	this.shape_477.setTransform(101.4,170.4);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f().s("#000000").ss(25,1,1).p("AAAKeIAA07");
	this.shape_478.setTransform(101.4,171.6);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f().s("#000000").ss(25,1,1).p("AAAKqIAA1T");
	this.shape_479.setTransform(101.4,172.8);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f().s("#000000").ss(25,1,1).p("AAAK2IAA1r");
	this.shape_480.setTransform(101.4,174);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f().s("#000000").ss(25,1,1).p("AAALCIAA2D");
	this.shape_481.setTransform(101.4,175.2);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f().s("#000000").ss(25,1,1).p("AAALOIAA2b");
	this.shape_482.setTransform(101.4,176.4);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f().s("#000000").ss(25,1,1).p("AAALaIAA2z");
	this.shape_483.setTransform(101.4,177.6);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f().s("#000000").ss(25,1,1).p("AAALmIAA3M");
	this.shape_484.setTransform(101.4,178.9);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f().s("#000000").ss(25,1,1).p("AAALyIAA3k");
	this.shape_485.setTransform(101.4,180.1);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f().s("#000000").ss(25,1,1).p("AAAL+IAA38");
	this.shape_486.setTransform(101.4,181.3);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f().s("#000000").ss(25,1,1).p("AAAMLIAA4V");
	this.shape_487.setTransform(101.4,182.5);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f().s("#000000").ss(25,1,1).p("AAAMXIAA4t");
	this.shape_488.setTransform(101.4,183.7);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f().s("#000000").ss(25,1,1).p("AAAMjIAA5F");
	this.shape_489.setTransform(101.4,184.9);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f().s("#000000").ss(25,1,1).p("AAAMvIAA5d");
	this.shape_490.setTransform(101.4,186.1);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f().s("#000000").ss(25,1,1).p("AAAM7IAA51");
	this.shape_491.setTransform(101.4,187.3);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f().s("#000000").ss(25,1,1).p("AAANHIAA6N");
	this.shape_492.setTransform(101.4,188.5);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f().s("#000000").ss(25,1,1).p("AAANTIAA6l");
	this.shape_493.setTransform(101.4,189.7);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f().s("#000000").ss(25,1,1).p("AAANfIAA69");
	this.shape_494.setTransform(101.4,190.9);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f().s("#000000").ss(25,1,1).p("AAANrIAA7V");
	this.shape_495.setTransform(101.4,192.1);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f().s("#000000").ss(25,1,1).p("AAAN4IAA7v");
	this.shape_496.setTransform(101.4,193.4);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f().s("#000000").ss(25,1,1).p("AAAODIAA8G");
	this.shape_497.setTransform(101.4,194.6);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f().s("#000000").ss(25,1,1).p("AAAOPIAA8e");
	this.shape_498.setTransform(101.4,195.8);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f().s("#000000").ss(25,1,1).p("AAAOcIAA83");
	this.shape_499.setTransform(101.4,197);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f().s("#000000").ss(25,1,1).p("AAAOoIAA9P");
	this.shape_500.setTransform(101.4,198.2);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f().s("#000000").ss(25,1,1).p("AAAO0IAA9n");
	this.shape_501.setTransform(101.4,199.4);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f().s("#000000").ss(25,1,1).p("AAAPAIAA9/");
	this.shape_502.setTransform(101.4,200.6);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f().s("#000000").ss(25,1,1).p("AAAPMIAA+X");
	this.shape_503.setTransform(101.4,201.8);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f().s("#000000").ss(25,1,1).p("AAAPYIAA+v");
	this.shape_504.setTransform(101.4,203);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f().s("#000000").ss(25,1,1).p("AAAPkIAA/H");
	this.shape_505.setTransform(101.4,204.2);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f().s("#000000").ss(25,1,1).p("AAAPwIAA/f");
	this.shape_506.setTransform(101.4,205.4);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f().s("#000000").ss(25,1,1).p("AAAP8IAA/3");
	this.shape_507.setTransform(101.4,206.6);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f().s("#000000").ss(25,1,1).p("AAAQJMAAAggR");
	this.shape_508.setTransform(101.4,207.9);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f().s("#000000").ss(25,1,1).p("AAAQVMAAAggp");
	this.shape_509.setTransform(101.4,209.1);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f().s("#000000").ss(25,1,1).p("AAAQhMAAAghB");
	this.shape_510.setTransform(101.4,210.3);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f().s("#000000").ss(25,1,1).p("AAAQtMAAAghZ");
	this.shape_511.setTransform(101.4,211.5);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f().s("#000000").ss(25,1,1).p("AAAQ5MAAAghx");
	this.shape_512.setTransform(101.4,212.7);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f().s("#000000").ss(25,1,1).p("AAARFMAAAgiJ");
	this.shape_513.setTransform(101.4,213.9);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f().s("#000000").ss(25,1,1).p("AAARRMAAAgih");
	this.shape_514.setTransform(101.4,215.1);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f().s("#000000").ss(25,1,1).p("AAARdMAAAgi5");
	this.shape_515.setTransform(101.4,216.3);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f().s("#000000").ss(25,1,1).p("AAARpMAAAgjR");
	this.shape_516.setTransform(101.4,217.5);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f().s("#000000").ss(25,1,1).p("AAAR1MAAAgjp");
	this.shape_517.setTransform(101.4,218.7);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f().s("#000000").ss(25,1,1).p("AAASBMAAAgkB");
	this.shape_518.setTransform(101.4,219.9);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f().s("#000000").ss(25,1,1).p("AAASOMAAAgka");
	this.shape_519.setTransform(101.4,221.2);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f().s("#000000").ss(25,1,1).p("AAASaMAAAgkz");
	this.shape_520.setTransform(101.4,222.4);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f().s("#000000").ss(25,1,1).p("AAASmMAAAglL");
	this.shape_521.setTransform(101.4,223.6);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f().s("#000000").ss(25,1,1).p("AAASyMAAAglj");
	this.shape_522.setTransform(101.4,224.8);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f().s("#000000").ss(25,1,1).p("AAAS+MAAAgl7");
	this.shape_523.setTransform(101.4,226);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f().s("#000000").ss(25,1,1).p("AAATKMAAAgmT");
	this.shape_524.setTransform(101.4,227.2);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f().s("#000000").ss(25,1,1).p("AAATWMAAAgmr");
	this.shape_525.setTransform(101.4,228.4);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f().s("#000000").ss(25,1,1).p("AAATiMAAAgnD");
	this.shape_526.setTransform(101.4,229.6);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f().s("#000000").ss(25,1,1).p("AAATuMAAAgnb");
	this.shape_527.setTransform(101.4,230.8);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f().s("#000000").ss(25,1,1).p("AAAT6MAAAgnz");
	this.shape_528.setTransform(101.4,232);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f().s("#000000").ss(25,1,1).p("AAAUGMAAAgoL");
	this.shape_529.setTransform(101.4,233.2);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f().s("#000000").ss(25,1,1).p("AAAUSMAAAgoj");
	this.shape_530.setTransform(101.4,234.4);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f().s("#000000").ss(25,1,1).p("AAAUfMAAAgo8");
	this.shape_531.setTransform(101.4,235.7);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f().s("#000000").ss(25,1,1).p("AAAUrMAAAgpV");
	this.shape_532.setTransform(101.4,236.9);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f().s("#000000").ss(25,1,1).p("AAAU3MAAAgpt");
	this.shape_533.setTransform(101.4,238.1);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f().s("#000000").ss(25,1,1).p("AAAVDMAAAgqF");
	this.shape_534.setTransform(101.4,239.3);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f().s("#000000").ss(25,1,1).p("AAAVPMAAAgqd");
	this.shape_535.setTransform(101.4,240.5);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f().s("#000000").ss(25,1,1).p("AAAVbMAAAgq1");
	this.shape_536.setTransform(101.4,241.7);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f().s("#000000").ss(25,1,1).p("AAAVnMAAAgrN");
	this.shape_537.setTransform(101.4,242.9);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f().s("#000000").ss(25,1,1).p("AAAVzMAAAgrl");
	this.shape_538.setTransform(101.4,244.1);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f().s("#000000").ss(25,1,1).p("AAAV/MAAAgr9");
	this.shape_539.setTransform(101.4,245.3);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f().s("#000000").ss(25,1,1).p("AAAWLMAAAgsV");
	this.shape_540.setTransform(101.4,246.5);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f().s("#000000").ss(25,1,1).p("AAAWXMAAAgst");
	this.shape_541.setTransform(101.4,247.7);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f().s("#000000").ss(25,1,1).p("AAAWjMAAAgtF");
	this.shape_542.setTransform(101.4,248.9);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f().s("#000000").ss(25,1,1).p("AAAWwMAAAgte");
	this.shape_543.setTransform(101.4,250.2);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f().s("#000000").ss(25,1,1).p("AAAW8MAAAgt3");
	this.shape_544.setTransform(101.4,251.4);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f().s("#000000").ss(25,1,1).p("AAAXIMAAAguP");
	this.shape_545.setTransform(101.4,252.6);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f().s("#000000").ss(25,1,1).p("AAAXUMAAAgun");
	this.shape_546.setTransform(101.4,253.8);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f().s("#000000").ss(25,1,1).p("AAAXgMAAAgu/");
	this.shape_547.setTransform(101.4,255);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f().s("#000000").ss(25,1,1).p("AAAXsMAAAgvX");
	this.shape_548.setTransform(101.4,256.2);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f().s("#000000").ss(25,1,1).p("AAAX4MAAAgvv");
	this.shape_549.setTransform(101.4,257.4);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f().s("#000000").ss(25,1,1).p("AAAYEMAAAgwH");
	this.shape_550.setTransform(101.4,258.6);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f().s("#000000").ss(25,1,1).p("AAAYQMAAAgwf");
	this.shape_551.setTransform(101.4,259.8);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f().s("#000000").ss(25,1,1).p("AAAYcMAAAgw3");
	this.shape_552.setTransform(101.4,261);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f().s("#000000").ss(25,1,1).p("AAAYoMAAAgxP");
	this.shape_553.setTransform(101.4,262.2);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f().s("#000000").ss(25,1,1).p("AAAY1MAAAgxp");
	this.shape_554.setTransform(101.4,263.5);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f().s("#000000").ss(25,1,1).p("AAAZBMAAAgyA");
	this.shape_555.setTransform(101.4,264.7);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f().s("#000000").ss(25,1,1).p("AAAZNMAAAgyZ");
	this.shape_556.setTransform(101.4,265.9);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f().s("#000000").ss(25,1,1).p("AAAZZMAAAgyx");
	this.shape_557.setTransform(101.4,267.1);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f().s("#000000").ss(25,1,1).p("AAAZlMAAAgzJ");
	this.shape_558.setTransform(101.4,268.3);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f().s("#000000").ss(25,1,1).p("AAAZxMAAAgzh");
	this.shape_559.setTransform(101.4,269.5);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f().s("#000000").ss(25,1,1).p("AAAZ9MAAAgz5");
	this.shape_560.setTransform(101.4,270.7);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f().s("#000000").ss(25,1,1).p("AAAaJMAAAg0R");
	this.shape_561.setTransform(101.4,271.9);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f().s("#000000").ss(25,1,1).p("AAAaVMAAAg0p");
	this.shape_562.setTransform(101.4,273.1);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f().s("#000000").ss(25,1,1).p("AAAahMAAAg1B");
	this.shape_563.setTransform(101.4,274.3);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f().s("#000000").ss(25,1,1).p("AAA6sMAAAA1Z");
	this.shape_564.setTransform(101.4,275.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_424}]},9).to({state:[{t:this.shape_425}]},1).to({state:[{t:this.shape_426}]},1).to({state:[{t:this.shape_427}]},1).to({state:[{t:this.shape_428}]},1).to({state:[{t:this.shape_429}]},1).to({state:[{t:this.shape_430}]},1).to({state:[{t:this.shape_431}]},1).to({state:[{t:this.shape_432}]},1).to({state:[{t:this.shape_433}]},1).to({state:[{t:this.shape_434}]},1).to({state:[{t:this.shape_435}]},1).to({state:[{t:this.shape_436}]},1).to({state:[{t:this.shape_437}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_439}]},1).to({state:[{t:this.shape_440}]},1).to({state:[{t:this.shape_441}]},1).to({state:[{t:this.shape_442}]},1).to({state:[{t:this.shape_443}]},1).to({state:[{t:this.shape_444}]},1).to({state:[{t:this.shape_445}]},1).to({state:[{t:this.shape_446}]},1).to({state:[{t:this.shape_447}]},1).to({state:[{t:this.shape_448}]},1).to({state:[{t:this.shape_449}]},1).to({state:[{t:this.shape_450}]},1).to({state:[{t:this.shape_451}]},1).to({state:[{t:this.shape_452}]},1).to({state:[{t:this.shape_453}]},1).to({state:[{t:this.shape_454}]},1).to({state:[{t:this.shape_455}]},1).to({state:[{t:this.shape_456}]},1).to({state:[{t:this.shape_457}]},1).to({state:[{t:this.shape_458}]},1).to({state:[{t:this.shape_459}]},1).to({state:[{t:this.shape_460}]},1).to({state:[{t:this.shape_461}]},1).to({state:[{t:this.shape_462}]},1).to({state:[{t:this.shape_463}]},1).to({state:[{t:this.shape_464}]},1).to({state:[{t:this.shape_465}]},1).to({state:[{t:this.shape_466}]},1).to({state:[{t:this.shape_467}]},1).to({state:[{t:this.shape_468}]},1).to({state:[{t:this.shape_469}]},1).to({state:[{t:this.shape_470}]},1).to({state:[{t:this.shape_471}]},1).to({state:[{t:this.shape_472}]},1).to({state:[{t:this.shape_473}]},1).to({state:[{t:this.shape_474}]},1).to({state:[{t:this.shape_475}]},1).to({state:[{t:this.shape_476}]},1).to({state:[{t:this.shape_477}]},1).to({state:[{t:this.shape_478}]},1).to({state:[{t:this.shape_479}]},1).to({state:[{t:this.shape_480}]},1).to({state:[{t:this.shape_481}]},1).to({state:[{t:this.shape_482}]},1).to({state:[{t:this.shape_483}]},1).to({state:[{t:this.shape_484}]},1).to({state:[{t:this.shape_485}]},1).to({state:[{t:this.shape_486}]},1).to({state:[{t:this.shape_487}]},1).to({state:[{t:this.shape_488}]},1).to({state:[{t:this.shape_489}]},1).to({state:[{t:this.shape_490}]},1).to({state:[{t:this.shape_491}]},1).to({state:[{t:this.shape_492}]},1).to({state:[{t:this.shape_493}]},1).to({state:[{t:this.shape_494}]},1).to({state:[{t:this.shape_495}]},1).to({state:[{t:this.shape_496}]},1).to({state:[{t:this.shape_497}]},1).to({state:[{t:this.shape_498}]},1).to({state:[{t:this.shape_499}]},1).to({state:[{t:this.shape_500}]},1).to({state:[{t:this.shape_501}]},1).to({state:[{t:this.shape_502}]},1).to({state:[{t:this.shape_503}]},1).to({state:[{t:this.shape_504}]},1).to({state:[{t:this.shape_505}]},1).to({state:[{t:this.shape_506}]},1).to({state:[{t:this.shape_507}]},1).to({state:[{t:this.shape_508}]},1).to({state:[{t:this.shape_509}]},1).to({state:[{t:this.shape_510}]},1).to({state:[{t:this.shape_511}]},1).to({state:[{t:this.shape_512}]},1).to({state:[{t:this.shape_513}]},1).to({state:[{t:this.shape_514}]},1).to({state:[{t:this.shape_515}]},1).to({state:[{t:this.shape_516}]},1).to({state:[{t:this.shape_517}]},1).to({state:[{t:this.shape_518}]},1).to({state:[{t:this.shape_519}]},1).to({state:[{t:this.shape_520}]},1).to({state:[{t:this.shape_521}]},1).to({state:[{t:this.shape_522}]},1).to({state:[{t:this.shape_523}]},1).to({state:[{t:this.shape_524}]},1).to({state:[{t:this.shape_525}]},1).to({state:[{t:this.shape_526}]},1).to({state:[{t:this.shape_527}]},1).to({state:[{t:this.shape_528}]},1).to({state:[{t:this.shape_529}]},1).to({state:[{t:this.shape_530}]},1).to({state:[{t:this.shape_531}]},1).to({state:[{t:this.shape_532}]},1).to({state:[{t:this.shape_533}]},1).to({state:[{t:this.shape_534}]},1).to({state:[{t:this.shape_535}]},1).to({state:[{t:this.shape_536}]},1).to({state:[{t:this.shape_537}]},1).to({state:[{t:this.shape_538}]},1).to({state:[{t:this.shape_539}]},1).to({state:[{t:this.shape_540}]},1).to({state:[{t:this.shape_541}]},1).to({state:[{t:this.shape_542}]},1).to({state:[{t:this.shape_543}]},1).to({state:[{t:this.shape_544}]},1).to({state:[{t:this.shape_545}]},1).to({state:[{t:this.shape_546}]},1).to({state:[{t:this.shape_547}]},1).to({state:[{t:this.shape_548}]},1).to({state:[{t:this.shape_549}]},1).to({state:[{t:this.shape_550}]},1).to({state:[{t:this.shape_551}]},1).to({state:[{t:this.shape_552}]},1).to({state:[{t:this.shape_553}]},1).to({state:[{t:this.shape_554}]},1).to({state:[{t:this.shape_555}]},1).to({state:[{t:this.shape_556}]},1).to({state:[{t:this.shape_557}]},1).to({state:[{t:this.shape_558}]},1).to({state:[{t:this.shape_559}]},1).to({state:[{t:this.shape_560}]},1).to({state:[{t:this.shape_561}]},1).to({state:[{t:this.shape_562}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_564}]},1).to({state:[{t:this.shape_564}]},11).to({state:[{t:this.shape_564}]},149).wait(366));

	// Base
	this.instance_5 = new lib.Symbol1("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(275,275);
	this.instance_5.alpha = 0.5;

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#FFFFFF").s().p("AYEa2MAAAgo6MgVjApwQg7B0hvAAQhxAAg6h0MgVTgpnMAAAAo0QAACnjDAAQi3AAAAinMAAAg1jQACi0C4gBQCHAAAoB2MAYMAv6MAYjgv6QAoh2CCAAQDBAAAAC7MAAAA1oQAACcjBAAQi9gBAAipg");
	this.shape_565.setTransform(275,275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.shape_565}]},309).wait(366));

	// Background
	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_566.setTransform(275,275,3.373,2.543);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_567.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_567},{t:this.shape_566}]}).to({state:[{t:this.shape_567},{t:this.shape_566}]},309).wait(366));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(273.5,234.3,553,735);
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