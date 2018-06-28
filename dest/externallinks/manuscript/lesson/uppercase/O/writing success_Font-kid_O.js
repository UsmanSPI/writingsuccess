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
	this.shape.graphics.f("#FFFFFF").s().p("A02U1QomopAAsLQAAsOIkooQInonMLAAQMOAAIqInQIrIoAAMOQAAMLopIpQooInsMABQsNgBopongAxCw/Qm/HDAAJ9QAAJ8HBHBQHDHEJ9AAQJ9AAHBnEQHEnBAAp8QAAp9nGnDQnFnCp9AAQp8AAnAHCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188.4,-188.4,376.9,376.9);


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
	this.instance.setTransform(98.2,-111.1,1,1,115.5,0,0,0.2,-17.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-60,guide:{path:[98.2,-111.1,81,-119.9,67,-123.9,15.4,-138.4,-30.6,-111,-76.6,-83.6,-90.2,-30.4,-103.8,22.7,-77,70.6,-56.9,106.3,-23,123.5]}},179).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgV1AgcMASchCOQNsD1HBMZQHAMaj1NtQj0NtsZHAQoBEiolABQkrAAk2hXg");
	var mask_graphics_1 = new cjs.Graphics().p("EgVkAgqMARahCgQNxDnHNMSQHLMTjnNxQjnNxsSHMQoLEzo2AAQkcAAkmhNg");
	var mask_graphics_2 = new cjs.Graphics().p("EgVQAg2MAQahCwQN0DaHYMLQHYMMjaN0QjZN0sLHYQoVFEpIAAQkMAAkXhFg");
	var mask_graphics_3 = new cjs.Graphics().p("EgUvAhCMAPZhC/QN2DMHlMDQHjMFjMN3QjMN4sDHkQofFUpZAAQj9AAkHg8g");
	var mask_graphics_4 = new cjs.Graphics().p("EgUOAhNMAOXhDOQN6C/HwL8QHvL9i+N6Qi/N7r8HvQooFnprAAQjtAAj3g1g");
	var mask_graphics_5 = new cjs.Graphics().p("EgTtAhXMANVhDbQN9CxH8L0QH6L2ixN9QiwN+r1H6QoxF5p9AAQjeAAjmgug");
	var mask_graphics_6 = new cjs.Graphics().p("EgTMAhhMAMUhDoQN/CjIHLtQIGLuijN/QijOBrtIGQo6GLqPAAQjOAAjWgng");
	var mask_graphics_7 = new cjs.Graphics().p("EgSrAhqMALShD0QOBCWITLlQIRLmiVOBQiWODrkISQpCGeqjAAQi+AAjFghg");
	var mask_graphics_8 = new cjs.Graphics().p("EgSKAhyMAKQhD+QOECIIeLdQIcLdiIOEQiIOFrcIdQpKGxq2AAQitAAi1gbg");
	var mask_graphics_9 = new cjs.Graphics().p("EgRpAh5MAJOhEHQOGB6IpLUQInLWh6OGQh6OHrUInQpSHFrJAAQidAAikgWg");
	var mask_graphics_10 = new cjs.Graphics().p("EgRHAiAMAILhEQQOHBsI0LMQIzLNhtOIQhsOIrMIzQpYHZreAAQiMAAiSgRg");
	var mask_graphics_11 = new cjs.Graphics().p("EgQmAiFMAHJhEXQOJBfI/LDQI9LEhfOKQheOKrDI9QpgHuryAAQh8AAiAgOg");
	var mask_graphics_12 = new cjs.Graphics().p("EgQEAiKMAGGhEdQOKBRJJK6QJJK7hROLQhROMq6JIQpmICsHAAQhrAAhugKg");
	var mask_graphics_13 = new cjs.Graphics().p("EgPjAiPMAFDhEjQOMBDJUKxQJTKyhDOMQhDONqyJTQprIXsdAAQhaAAhcgGg");
	var mask_graphics_14 = new cjs.Graphics().p("EgPBAiSMAEAhEnQONA1JeKoQJdKpg1ONQg1OOqoJdQpzItsyAAQhIAAhJgEg");
	var mask_graphics_15 = new cjs.Graphics().p("EgOfAiVMAC9hErQONAnJpKfQJnKggnOOQgnOOqfJnQp4JEtJAAQg2AAg2gCg");
	var mask_graphics_16 = new cjs.Graphics().p("EgN+AiXMAB7hEuQONAaJzKVQJyKXgaOOQgZOPqWJxQp8JbthAAIhHgBg");
	var mask_graphics_17 = new cjs.Graphics().p("EgNcAiYMAA3hEvQOOAMJ9KMQJ8KNgMOOQgLOPqMJ7QqCJyt5AAIggAAg");
	var mask_graphics_18 = new cjs.Graphics().p("EgNGgiXQOOgCKHKCQKFKDACOPQADOOqCKGQqEKHuOACg");
	var mask_graphics_19 = new cjs.Graphics().p("EgNogiWQOOgRKRJ5QKPJ5AQOPQAQOOp4KPQp5KRuOAQg");
	var mask_graphics_20 = new cjs.Graphics().p("EgOJgiVQOOgeKZJuQKZJvAeOPQAeOOpuKYQpvKauOAeg");
	var mask_graphics_21 = new cjs.Graphics().p("EgOqgiTQOOgsKiJkQKiJlAsOOQAsONpkKjQplKjuNAsg");
	var mask_graphics_22 = new cjs.Graphics().p("EgPMgiQQONg6KsJaQKrJbA6ONQA6OMpaKsQpbKsuMA6g");
	var mask_graphics_23 = new cjs.Graphics().p("EgPtgiMQOMhIK1JPQK0JRBIOMQBHOLpPK1QpQK1uLBIg");
	var mask_graphics_24 = new cjs.Graphics().p("EgQPgiIQOLhVK+JEQK9JGBWOLQBVOKpEK+QpGK+uKBWg");
	var mask_graphics_25 = new cjs.Graphics().p("EgQwgiDQOKhjLGI6QLGI7BjOKQBjOJo5LGQo7LHuJBjg");
	var mask_graphics_26 = new cjs.Graphics().p("EgRRgh8QOIhxLPIuQLOIxBxOIQBxOHovLOQowLQuHBxg");
	var mask_graphics_27 = new cjs.Graphics().p("EgRygh2QOGh+LXIjQLXImB/OGQB/OFokLXQolLZuFB+g");
	var mask_graphics_28 = new cjs.Graphics().p("EgSUghuQOFiNLfIZQLfIaCNOEQCMOEoYLfQoaLhuDCMg");
	var mask_graphics_29 = new cjs.Graphics().p("EgS1ghmQOCiaLoIOQLnIOCbOCQCaOBoOLoQoOLpuBCag");
	var mask_graphics_30 = new cjs.Graphics().p("EgTWghdQOAinLvICQLwIDCoOAQCnN+oCLvQoDLxt+Cog");
	var mask_graphics_31 = new cjs.Graphics().p("EgT2ghTQN8i1L4H2QL3H4C1N9QC2N8n3L3Qn4L5t7C1g");
	var mask_graphics_32 = new cjs.Graphics().p("EgUXghIQN6jDL/HrQL+HsDDN6QDDN5nrL/QnsMAt5DDg");
	var mask_graphics_33 = new cjs.Graphics().p("EgU4gg9QN3jQMGHfQMGHgDRN3QDQN2nfMGQngMIt2DQg");
	var mask_graphics_34 = new cjs.Graphics().p("EgVYggxQNzjeMOHTQMNHVDeN0QDeNznTMNQnVMOtyDeg");
	var mask_graphics_35 = new cjs.Graphics().p("EgVqggkQNwjsMVHIQMUHJDsNwQDrNvnIMUQnIMWtvDrg");
	var mask_graphics_36 = new cjs.Graphics().p("EgV6ggXQNsj4McG7QMbG9D5NsQD4Nsm7MbQm8MctsD5g");
	var mask_graphics_37 = new cjs.Graphics().p("EgWKggIQNokGMiGvQMiGwEGNpQEGNnmvMiQmwMjtoEHg");
	var mask_graphics_38 = new cjs.Graphics().p("A2a/6QNkkTMoGjQMpGkETNlQEUNjmkMpQmjMptkEUg");
	var mask_graphics_39 = new cjs.Graphics().p("A2q/qQNgkgMuGWQMvGYEhNgQEgNgmXMuQmXMwtfEhg");
	var mask_graphics_40 = new cjs.Graphics().p("A26/aQNbktM1GKQM1GLEuNcQEtNbmKM1QmLM2tbEtg");
	var mask_graphics_41 = new cjs.Graphics().p("A3K/IQNXk7M6F9QM7F/E7NXQE7NWl+M7Ql/M8tXE7g");
	var mask_graphics_42 = new cjs.Graphics().p("A3a+3QNSlHNBFwQNAFzFINSQFHNRlxNAQlyNCtSFIg");
	var mask_graphics_43 = new cjs.Graphics().p("A3p+kQNNlVNFFkQNHFmFUNNQFVNMllNGQllNHtNFVg");
	var mask_graphics_44 = new cjs.Graphics().p("A35+RQNIlhNLFXQNLFZFiNHQFhNHlXNLQlZNNtHFhg");
	var mask_graphics_45 = new cjs.Graphics().p("A4I99QNCluNQFKQNRFMFuNCQFuNClLNQQlLNStCFug");
	var mask_graphics_46 = new cjs.Graphics().p("A4Y9pQM9l7NVE+QNWE/F7M9QF6M7k9NVQk/NXs8F7g");
	var mask_graphics_47 = new cjs.Graphics().p("A4n9UQM3mHNaEwQNaEyGIM3QGHM3kxNZQkxNbs3GIg");
	var mask_graphics_48 = new cjs.Graphics().p("A428+QMxmUNeEkQNfElGUMwQGUMxkkNeQkkNgsxGTg");
	var mask_graphics_49 = new cjs.Graphics().p("A5F8nQMrmgNjEWQNjEXGgMrQGgMqkWNiQkXNlsrGgg");
	var mask_graphics_50 = new cjs.Graphics().p("A5T8QQMkmtNnEJQNnELGtMkQGsMkkJNmQkKNoskGtg");
	var mask_graphics_51 = new cjs.Graphics().p("A5i74QMem5NqD8QNsD9G5MdQG4Mej8NqQj8NsseG5g");
	var mask_graphics_52 = new cjs.Graphics().p("A5w7gQMWnFNvDvQNvDwHFMWQHFMXjvNtQjvNxsXHEg");
	var mask_graphics_53 = new cjs.Graphics().p("A5/7HQMQnQNyDgQNzDjHRMQQHQMPjhNxQjiN0sPHRg");
	var mask_graphics_54 = new cjs.Graphics().p("A6N6tQMJncN2DTQN1DVHdMIQHcMJjTN0QjVN3sIHdg");
	var mask_graphics_55 = new cjs.Graphics().p("A6b6SQMBnpN6DGQN4DHHoMCQHpMBjHN3QjGN7sBHog");
	var mask_graphics_56 = new cjs.Graphics().p("A6p53QL6n0N8C4QN8C6H0L5QH0L6i5N7Qi5N9r6H0g");
	var mask_graphics_57 = new cjs.Graphics().p("A625cQLyn/N/CqQN+CtH/LyQIALyisN9QirOAryH/g");
	var mask_graphics_58 = new cjs.Graphics().p("A7E4/QLqoLOCCdQOACeILLqQILLrieN/QidODrqILg");
	var mask_graphics_59 = new cjs.Graphics().p("A7R4iQLioXOECQQOCCRIWLiQIXLiiQOCQiQOEriIXg");
	var mask_graphics_60 = new cjs.Graphics().p("A7f4FQLaohOGCBQOFCEIhLaQIiLZiCOEQiDOHraIig");
	var mask_graphics_61 = new cjs.Graphics().p("A7s3nQLSosOHB0QOHB1ItLSQIsLRh0OGQh1OJrSIsg");
	var mask_graphics_62 = new cjs.Graphics().p("A753IQLJo3OKBmQOIBoI3LJQI4LIhnOIQhnOKrJI4g");
	var mask_graphics_63 = new cjs.Graphics().p("A8G2oQLBpDOLBZQOJBaJDLAQJCLAhZOJQhZOMrBJCg");
	var mask_graphics_64 = new cjs.Graphics().p("A8S2IQK3pNOMBKQOLBMJNK4QJNK3hLOKQhMONq3JNg");
	var mask_graphics_65 = new cjs.Graphics().p("A8f1oQKupXOOA9QOMA+JXKuQJXKug9OMQg9OOqvJXg");
	var mask_graphics_66 = new cjs.Graphics().p("A8r1HQKlphOOAuQONAxJiKlQJhKlgvOMQgwOPqlJig");
	var mask_graphics_67 = new cjs.Graphics().p("A830lQKbpsOPAhQONAjJsKcQJsKbghONQgiOQqcJrg");
	var mask_graphics_68 = new cjs.Graphics().p("A9E0CQKTp2OPATQOOAUJ2KTQJ2KSgUONQgUOQqSJ2g");
	var mask_graphics_69 = new cjs.Graphics().p("A9QzfQKJqAOPAFQOOAHKAKIQKAKJgGONQgGOQqIKAg");
	var mask_graphics_70 = new cjs.Graphics().p("A9by8QJ+qKOQgIQOOgHKKJ+QKJJ/AIOOQAIOQp/KJg");
	var mask_graphics_71 = new cjs.Graphics().p("A9nyYQJ1qTOPgXQOOgVKTJ1QKUJ1AVONQAWOQp1KTg");
	var mask_graphics_72 = new cjs.Graphics().p("A9zxzQJrqdOPgkQONgjKdJrQKdJqAkONQAjOPpqKdg");
	var mask_graphics_73 = new cjs.Graphics().p("A9+xOQJgqmOOgyQONgxKnJhQKmJgAxOMQAyOPphKmg");
	var mask_graphics_74 = new cjs.Graphics().p("A+JwoQJWqwONhAQOMg+KvJWQKwJWA/OLQA/OOpWKwg");
	var mask_graphics_75 = new cjs.Graphics().p("A+UwCQJLq4OMhOQOLhMK5JLQK4JMBNOKQBNONpLK4g");
	var mask_graphics_76 = new cjs.Graphics().p("A+fvbQJBrBOKhcQOKhaLBJBQLCJBBbOIQBbOMpBLBg");
	var mask_graphics_77 = new cjs.Graphics().p("A+qu0QI2rKOJhpQOJhoLKI2QLKI2BoOHQBpOKo2LKg");
	var mask_graphics_78 = new cjs.Graphics().p("A+0uMQIrrTOHh3QOHh1LSIrQLTIrB2OFQB3OJorLSg");
	var mask_graphics_79 = new cjs.Graphics().p("A+/tkQIgrbOGiFQOFiDLbIgQLbIgCEOEQCEOGogLbg");
	var mask_graphics_80 = new cjs.Graphics().p("A/Js7QIVrjOEiTQOCiRLjIVQLjIVCSOBQCSOFoULjg");
	var mask_graphics_81 = new cjs.Graphics().p("A/TsSQIKrrOBigQOAifLrIJQLsIKCfN/QCgOCoKLrg");
	var mask_graphics_82 = new cjs.Graphics().p("A/croQH+rzN+iuQN+itLzH/QLzH+CtN8QCuOAn+Lzg");
	var mask_graphics_83 = new cjs.Graphics().p("A/mq+QHzr7N8i8QN7i5L6HyQL7HzC7N6QC7N8nzL7g");
	var mask_graphics_84 = new cjs.Graphics().p("A/vqUQHnsCN5jJQN4jIMCHnQMCHnDIN3QDJN6nnMCg");
	var mask_graphics_85 = new cjs.Graphics().p("A/4ppQHbsKN2jWQN1jVMJHbQMKHbDVN0QDXN3ncMJg");
	var mask_graphics_86 = new cjs.Graphics().p("EggBgI+QHPsQNzjlQNxjiMRHPQMRHPDjNyQDjNynPMRg");
	var mask_graphics_87 = new cjs.Graphics().p("EggJgISQHDsYNvjxQNujwMXHDQMYHDDwNuQDxNvnDMYg");
	var mask_graphics_88 = new cjs.Graphics().p("EggSgHmQG3sfNrj+QNrj+MeG3QMeG4D+NqQD/Nrm3Meg");
	var mask_graphics_89 = new cjs.Graphics().p("EggagG6QGrslNnkMQNnkLMkGrQMlGrEMNnQELNnmrMkg");
	var mask_graphics_90 = new cjs.Graphics().p("EggigGNQGfssNjkZQNikYMrGfQMsGeEYNjQEZNimfMsg");
	var mask_graphics_91 = new cjs.Graphics().p("EggpgFgQGSsyNekmQNeklMyGSQMxGSEmNeQEmNemSMyg");
	var mask_graphics_92 = new cjs.Graphics().p("EggwgEzQGFs4NakzQNZkyM4GGQM4GFEyNZQEzNamFM4g");
	var mask_graphics_93 = new cjs.Graphics().p("Egg4gEGQF6s9NVlAQNVk/M9F5QM9F5FANUQFANVl5M+g");
	var mask_graphics_94 = new cjs.Graphics().p("Egg+gDYQFstDNQlNQNRlMNCFsQNDFtFMNPQFNNQlsNDg");
	var mask_graphics_95 = new cjs.Graphics().p("EghFgCpQFgtJNKlaQNMlZNIFgQNIFfFZNLQFaNLlfNIg");
	var mask_graphics_96 = new cjs.Graphics().p("EghLgB7QFStONGlnQNGlmNNFTQNOFTFmNFQFnNGlTNOg");
	var mask_graphics_97 = new cjs.Graphics().p("EghRgBMQFFtTNAl0QNBlyNSFGQNTFGFzM/QFzNAlGNTg");
	var mask_graphics_98 = new cjs.Graphics().p("EghXgAdQE5tYM6mAQM7l/NWE5QNYE5GAM5QGAM7k5NXg");
	var mask_graphics_99 = new cjs.Graphics().p("EghdAARQEstbM0mNQM1mMNcEsQNcEsGMM0QGNM0ksNcg");
	var mask_graphics_100 = new cjs.Graphics().p("EghiABAQEftfMumaQMvmYNfEfQNhEfGZMtQGZMvkfNgg");
	var mask_graphics_101 = new cjs.Graphics().p("EghnABwQERtkMommQMpmkNkESQNlERGlMoQGlMnkRNlg");
	var mask_graphics_102 = new cjs.Graphics().p("EghsACgQEEtoMimyQMimxNoEFQNpEEGxMhQGyMhkFNpg");
	var mask_graphics_103 = new cjs.Graphics().p("EghxADQQD3tsMbm+QMbm9NsD3QNtD3G+MaQG+Mbj4Ntg");
	var mask_graphics_104 = new cjs.Graphics().p("Egh1AEAQDqtvMTnKQMVnJNwDpQNwDqHJMTQHLMUjqNxg");
	var mask_graphics_105 = new cjs.Graphics().p("Egh5AExQDctzMNnWQMNnVN0DcQN0DcHVMNQHWMMjcN0g");
	var mask_graphics_106 = new cjs.Graphics().p("Egh9AFhQDPt2MGniQMGngN2DOQN3DPHhMFQHiMGjPN3g");
	var mask_graphics_107 = new cjs.Graphics().p("EgiAAGSQDBt5L+nuQL/nsN5DBQN7DBHsL+QHuL+jBN6g");
	var mask_graphics_108 = new cjs.Graphics().p("EgiDAHDQCzt8L3n5QL3n4N8CzQN9C0H5L2QH5L3i0N9g");
	var mask_graphics_109 = new cjs.Graphics().p("EgiGAH0QCmt+LuoFQLwoEN/CmQOACmIDLvQIFLuimOAg");
	var mask_graphics_110 = new cjs.Graphics().p("EgiJAImQCYuCLnoQQLooPOBCZQOCCYIPLmQIQLniYOCg");
	var mask_graphics_111 = new cjs.Graphics().p("EgiLAJXQCKuDLfocQLfoaOECLQOECKIaLfQIcLeiLOFg");
	var mask_graphics_112 = new cjs.Graphics().p("EgiOAKIQB9uFLWonQLYolOFB9QOHB9IlLWQInLWh9OHg");
	var mask_graphics_113 = new cjs.Graphics().p("EgiQAK6QBwuHLNoyQLPowOHBvQOJBwIwLNQIxLOhvOIg");
	var mask_graphics_114 = new cjs.Graphics().p("EgiRALsQBhuJLFo8QLGo8OJBiQOKBhI7LFQI9LFhiOKg");
	var mask_graphics_115 = new cjs.Graphics().p("EgiTAMdQBUuKK8pHQK9pGOLBUQOLBUJGK8QJHK8hUOLg");
	var mask_graphics_116 = new cjs.Graphics().p("EgiUANPQBGuLKzpSQK0pQOMBGQOMBGJRKzQJSKzhGONg");
	var mask_graphics_117 = new cjs.Graphics().p("EgiVAOBQA4uMKqpcQKrpbONA4QONA4JbKqQJcKqg4OOg");
	var mask_graphics_118 = new cjs.Graphics().p("EgiWAOzQAquOKhplQKiplONAqQOPAqJlKhQJmKhgqOOg");
	var mask_graphics_119 = new cjs.Graphics().p("EgiWAPlQAcuOKXpwQKZpvOOAcQOOAcJwKYQJxKXgdOPg");
	var mask_graphics_120 = new cjs.Graphics().p("EgiXAQYQAPuPKOp6QKPp5OOAOQOPAOJ5KOQJ7KOgPOPg");
	var mask_graphics_121 = new cjs.Graphics().p("EgiXARKQABuPKEqEQKFqDOOAAQOQABKDKEQKEKEAAOQg");
	var mask_graphics_122 = new cjs.Graphics().p("A4qnAQJ8qNOPgOQOOgNKNJ6QKPJ7ANOPMhEvABAQgNuPJ6qNg");
	var mask_graphics_123 = new cjs.Graphics().p("A5Am5QJxqWOPgcQOOgbKWJxQKYJwAcOPMhEtACDQgcuPJxqXg");
	var mask_graphics_124 = new cjs.Graphics().p("A5WmxQJnqgOOgpQONgpKhJmQKhJmApOOMhEqADHQgpuPJmqgg");
	var mask_graphics_125 = new cjs.Graphics().p("A5smpQJdqpOOg3QOMg3KqJcQKqJdA3OMMhEnAEJQg3uNJcqqg");
	var mask_graphics_126 = new cjs.Graphics().p("A6AmgQJSqyONhFQOLhFKzJSQK0JSBEOLMhEiAFMQhFuMJSqzg");
	var mask_graphics_127 = new cjs.Graphics().p("A6VmXQJJq7OLhTQOKhSK8JGQK8JIBTOLMhEdAGOQhSuLJGq8g");
	var mask_graphics_128 = new cjs.Graphics().p("A6omNQI9rFOKhgQOJhgLFI8QLFI9BhOJMhEXAHRQhguKI8rEg");
	var mask_graphics_129 = new cjs.Graphics().p("A67mEQIzrNOIhuQOIhuLNIxQLOIzBuOHMhEPAIUQhuuJIxrNg");
	var mask_graphics_130 = new cjs.Graphics().p("A7Nl6QIorVOGh8QOGh8LVInQLXInB8OFMhEGAJXQh8uHImrWg");
	var mask_graphics_131 = new cjs.Graphics().p("A7elvQIcreOFiJQOEiKLdIbQLfIcCKOEMhD9AKYQiJuEIbreg");
	var mask_graphics_132 = new cjs.Graphics().p("A7vlkQIRrmODiXQOBiYLmIQQLnIRCXOCMhDyALaQiXuCIQrmg");
	var mask_graphics_133 = new cjs.Graphics().p("A7/lZQIGruOAilQN/ilLuIFQLvIFClN/MhDnAMdQiluAIFrug");
	var mask_graphics_134 = new cjs.Graphics().p("A8PlOQH7r1N9izQN9iyL1H5QL3H6CzN8MhDaANeQiyt9H4r2g");
	var mask_graphics_135 = new cjs.Graphics().p("A8dlCQHur9N7jAQN6jAL9HtQL+HvDAN5MhDMAOgQjAt7Hur9g");
	var mask_graphics_136 = new cjs.Graphics().p("A8rk2QHjsEN3jOQN3jOMEHiQMGHjDON2MhC9APhQjOt3HisFg");
	var mask_graphics_137 = new cjs.Graphics().p("A85kpQHXsMN1jbQNzjbMMHWQMNHWDbN0MhCtAQiQjct0HWsMg");
	var mask_graphics_138 = new cjs.Graphics().p("A9GkcQHMsTNxjpQNwjpMSHKQMVHLDoNwMhCdARjQjotxHJsSg");
	var mask_graphics_139 = new cjs.Graphics().p("A9SkPQHAsaNtj2QNsj2MaG+QMbG/D2NsMhCMASkQj1tuG9sZg");
	var mask_graphics_140 = new cjs.Graphics().p("A9dkCQGzshNqkDQNokDMgGyQMiGyEDNpMhB4ATkQkEtqGysgg");
	var mask_graphics_141 = new cjs.Graphics().p("A9oj0QGnsnNmkRQNkkRMnGmQMoGnERNkMhBmAUkQkQtlGlsng");
	var mask_graphics_142 = new cjs.Graphics().p("A9yjmQGbsuNhkeQNgkdMtGZQMvGaEeNgMhBRAVkQkethGZstg");
	var mask_graphics_143 = new cjs.Graphics().p("A97jYQGOs0NdkrQNbkqM0GMQM1GOEqNcMhA7AWjQkrtdGNszg");
	var mask_graphics_144 = new cjs.Graphics().p("A+EjKQGCs5NYk4QNXk4M5GAQM7GCE4NYMhAlAXhQk4tYGAs6g");
	var mask_graphics_145 = new cjs.Graphics().p("A+Mi7QF1s/NTlFQNTlFM/F0QNAF0FFNUMhANAYgQlFtUFzs/g");
	var mask_graphics_146 = new cjs.Graphics().p("A+TisQFotFNOlRQNNlSNFFnQNGFoFSNOMg/1AZeQlStOFntFg");
	var mask_graphics_147 = new cjs.Graphics().p("A+aicQFctLNJleQNIlfNKFaQNLFbFfNJMg/cAadQlftJFatKg");
	var mask_graphics_148 = new cjs.Graphics().p("A+giNQFPtPNDlsQNDlrNPFOQNRFOFrNDMg/CAbaQlrtDFNtQg");
	var mask_graphics_149 = new cjs.Graphics().p("A+lh9QFCtUM+l4QM8l4NVFAQNVFBF4M+Mg+mAcXQl4s9FAtVg");
	var mask_graphics_150 = new cjs.Graphics().p("A+qhsQE1taM4mEQM4mFNYEzQNbE1GEM4Mg+KAdTQmFs3EztZg");
	var mask_graphics_151 = new cjs.Graphics().p("A+uhcQEoteMymRQMymRNdEmQNfEnGRMyMg9tAeQQmSsxEmteg");
	var mask_graphics_152 = new cjs.Graphics().p("A+xhLQEbtjMsmdQMrmeNhEaQNkEZGdMsMg9PAfMQmesrEZtig");
	var mask_graphics_153 = new cjs.Graphics().p("A+zg6QENtnMmmqQMlmqNlEMQNoENGqMlMg8xAgIQmqslEMtmg");
	var mask_graphics_154 = new cjs.Graphics().p("A+1gpQEAtrMfm2QMfm2NpD/QNrD/G2MfMg8QAhDQm2sfD+tqg");
	var mask_graphics_155 = new cjs.Graphics().p("A+2gYQDztuMYnCQMYnCNtDxQNvDyHCMYMg7wAh9QnCsYDxtug");
	var mask_graphics_156 = new cjs.Graphics().p("A+3gGQDmtyMRnOQMRnONwDkQNzDkHPMSMg7PAi3QnOsSDjtxg");
	var mask_graphics_157 = new cjs.Graphics().p("A+2ALQDYt0MKnaQMKnbNzDXQN3DXHaMKMg6sAjxQnasKDWt2g");
	var mask_graphics_158 = new cjs.Graphics().p("A+1AdQDKt3MDnmQMDnmN2DJQN6DKHmMCMg6JAkqQnmsDDJt5g");
	var mask_graphics_159 = new cjs.Graphics().p("A+0AwQC9t7L8nxQL7nyN6C8QN8C8HyL7Mg5lAliQnyr8C7t7g");
	var mask_graphics_160 = new cjs.Graphics().p("A+xBCQCvt9L0n9QLzn9N9CuQN/CuH9L0Mg5AAmZQn9rzCut/g");
	var mask_graphics_161 = new cjs.Graphics().p("A+uBVQCiuALroIQLsoJN/ChQOCChIJLrMg4aAnRQoJrsCguBg");
	var mask_graphics_162 = new cjs.Graphics().p("A+qBoQCUuCLjoUQLkoUOCCTQOECTIULkMg30AoIQoTrkCSuEg");
	var mask_graphics_163 = new cjs.Graphics().p("A+mB8QCHuFLbofQLcofODCFQOHCGIfLbMg3MAo+QofrcCEuFg");
	var mask_graphics_164 = new cjs.Graphics().p("A+gCPQB4uGLToqQLUoqOFB3QOIB4IqLTMg2jApzQoqrTB3uIg");
	var mask_graphics_165 = new cjs.Graphics().p("A+aCjQBquILLo1QLLo1OHBqQOKBqI1LKMg16AqoQo1rLBpuJg");
	var mask_graphics_166 = new cjs.Graphics().p("A+UC3QBduJLCpAQLCpAOJBcQOLBcJALCMg1QArcQpArCBbuLg");
	var mask_graphics_167 = new cjs.Graphics().p("A+MDLQBPuKK5pLQK5pKOKBOQONBOJKK5Mg0lAsQQpLq6BOuMg");
	var mask_graphics_168 = new cjs.Graphics().p("A+EDgQBBuMKwpVQKwpVOLBAQOOBBJVKwMgz6AtCQpVqwBAuNg");
	var mask_graphics_169 = new cjs.Graphics().p("A97D1QAzuNKnpgQKnpfOMAyQOPAzJfKnMgzOAt1QpfqnAyuOg");
	var mask_graphics_170 = new cjs.Graphics().p("A9yEKQAmuOKdpqQKeppONAkQOPAlJqKeMgyhAumQpqqeAkuOg");
	var mask_graphics_171 = new cjs.Graphics().p("A9oEfQAYuOKUp0QKVp0ONAXQOPAXJ0KUMgxzAvXQp0qUAWuPg");
	var mask_graphics_172 = new cjs.Graphics().p("A9dE0QAKuOKLp+QKKp+OOAJQOQAJJ+KLMgxFAwHQp+qLAIuPg");
	var mask_graphics_173 = new cjs.Graphics().p("A9RFKQgEuOKBqIQKBqIONgFQOQgFKIKBMgwVAw3QqIqBgGuPg");
	var mask_graphics_174 = new cjs.Graphics().p("A9EFgQgSuOJ3qSQJ2qROOgTQOQgTKRJ3MgvmAxmQqRp3gTuPg");
	var mask_graphics_175 = new cjs.Graphics().p("A83F2QgguOJtqbQJtqbOMggQOQghKbJtMgu1AyTQqbptghuOg");
	var mask_graphics_176 = new cjs.Graphics().p("A8pGMQguuNJjqkQJiqlOMguQOPgvKlJjMguEAzBQqkpjgvuOg");
	var mask_graphics_177 = new cjs.Graphics().p("A8bGiQg7uMJYqtQJYquOMg8QOOg9KtJYMgtRAzuQqupYg9uOg");
	var mask_graphics_178 = new cjs.Graphics().p("A8LG5QhKuLJOq3QJOq2OKhLQONhKK3JOMgsfA0ZQq3pOhKuMg");
	var mask_graphics_179 = new cjs.Graphics().p("A78HQQhXuKJDrAQJEq/OJhYQOMhYK/JDMgrrA1EQrApDhZuLg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:134.1,y:21.4}).wait(1).to({graphics:mask_graphics_1,x:135.7,y:21}).wait(1).to({graphics:mask_graphics_2,x:136.9,y:20.8}).wait(1).to({graphics:mask_graphics_3,x:136.9,y:20.5}).wait(1).to({graphics:mask_graphics_4,x:136.8,y:20.3}).wait(1).to({graphics:mask_graphics_5,x:136.8,y:20.1}).wait(1).to({graphics:mask_graphics_6,x:136.8,y:19.9}).wait(1).to({graphics:mask_graphics_7,x:136.8,y:19.7}).wait(1).to({graphics:mask_graphics_8,x:136.7,y:19.6}).wait(1).to({graphics:mask_graphics_9,x:136.7,y:19.5}).wait(1).to({graphics:mask_graphics_10,x:136.7,y:19.4}).wait(1).to({graphics:mask_graphics_11,x:136.7,y:19.3}).wait(1).to({graphics:mask_graphics_12,x:136.7,y:19.3}).wait(1).to({graphics:mask_graphics_13,x:136.6,y:19.3}).wait(1).to({graphics:mask_graphics_14,x:136.6,y:19.3}).wait(1).to({graphics:mask_graphics_15,x:136.6,y:19.4}).wait(1).to({graphics:mask_graphics_16,x:136.6,y:19.4}).wait(1).to({graphics:mask_graphics_17,x:136.6,y:19.6}).wait(1).to({graphics:mask_graphics_18,x:136.6,y:19.7}).wait(1).to({graphics:mask_graphics_19,x:136.6,y:19.8}).wait(1).to({graphics:mask_graphics_20,x:136.7,y:19.9}).wait(1).to({graphics:mask_graphics_21,x:136.7,y:20}).wait(1).to({graphics:mask_graphics_22,x:136.7,y:20}).wait(1).to({graphics:mask_graphics_23,x:136.7,y:20}).wait(1).to({graphics:mask_graphics_24,x:136.8,y:20}).wait(1).to({graphics:mask_graphics_25,x:136.8,y:20}).wait(1).to({graphics:mask_graphics_26,x:136.8,y:19.9}).wait(1).to({graphics:mask_graphics_27,x:136.9,y:19.8}).wait(1).to({graphics:mask_graphics_28,x:136.9,y:19.7}).wait(1).to({graphics:mask_graphics_29,x:137,y:19.5}).wait(1).to({graphics:mask_graphics_30,x:137,y:19.4}).wait(1).to({graphics:mask_graphics_31,x:137,y:19.2}).wait(1).to({graphics:mask_graphics_32,x:137.1,y:18.9}).wait(1).to({graphics:mask_graphics_33,x:137.1,y:18.7}).wait(1).to({graphics:mask_graphics_34,x:137.2,y:18.4}).wait(1).to({graphics:mask_graphics_35,x:135.7,y:18.1}).wait(1).to({graphics:mask_graphics_36,x:134.2,y:17.8}).wait(1).to({graphics:mask_graphics_37,x:132.6,y:17.4}).wait(1).to({graphics:mask_graphics_38,x:131.1,y:17.1}).wait(1).to({graphics:mask_graphics_39,x:129.6,y:16.7}).wait(1).to({graphics:mask_graphics_40,x:128.1,y:16.3}).wait(1).to({graphics:mask_graphics_41,x:126.6,y:15.8}).wait(1).to({graphics:mask_graphics_42,x:125.1,y:15.3}).wait(1).to({graphics:mask_graphics_43,x:123.6,y:14.9}).wait(1).to({graphics:mask_graphics_44,x:122.1,y:14.4}).wait(1).to({graphics:mask_graphics_45,x:120.7,y:13.8}).wait(1).to({graphics:mask_graphics_46,x:119.2,y:13.3}).wait(1).to({graphics:mask_graphics_47,x:117.8,y:12.7}).wait(1).to({graphics:mask_graphics_48,x:116.3,y:12.1}).wait(1).to({graphics:mask_graphics_49,x:114.9,y:11.5}).wait(1).to({graphics:mask_graphics_50,x:113.5,y:10.8}).wait(1).to({graphics:mask_graphics_51,x:112.1,y:10.2}).wait(1).to({graphics:mask_graphics_52,x:110.7,y:9.5}).wait(1).to({graphics:mask_graphics_53,x:109.3,y:8.8}).wait(1).to({graphics:mask_graphics_54,x:108,y:8}).wait(1).to({graphics:mask_graphics_55,x:106.6,y:7.3}).wait(1).to({graphics:mask_graphics_56,x:105.3,y:6.5}).wait(1).to({graphics:mask_graphics_57,x:104,y:5.7}).wait(1).to({graphics:mask_graphics_58,x:102.7,y:4.9}).wait(1).to({graphics:mask_graphics_59,x:101.4,y:4.1}).wait(1).to({graphics:mask_graphics_60,x:100.1,y:3.2}).wait(1).to({graphics:mask_graphics_61,x:98.9,y:2.3}).wait(1).to({graphics:mask_graphics_62,x:97.6,y:1.4}).wait(1).to({graphics:mask_graphics_63,x:96.4,y:0.5}).wait(1).to({graphics:mask_graphics_64,x:95.2,y:-0.5}).wait(1).to({graphics:mask_graphics_65,x:94,y:-1.5}).wait(1).to({graphics:mask_graphics_66,x:92.9,y:-2.5}).wait(1).to({graphics:mask_graphics_67,x:91.7,y:-3.5}).wait(1).to({graphics:mask_graphics_68,x:90.6,y:-4.5}).wait(1).to({graphics:mask_graphics_69,x:89.5,y:-5.6}).wait(1).to({graphics:mask_graphics_70,x:88.5,y:-6.7}).wait(1).to({graphics:mask_graphics_71,x:87.4,y:-7.8}).wait(1).to({graphics:mask_graphics_72,x:86.4,y:-9}).wait(1).to({graphics:mask_graphics_73,x:85.4,y:-10.1}).wait(1).to({graphics:mask_graphics_74,x:84.4,y:-11.3}).wait(1).to({graphics:mask_graphics_75,x:83.5,y:-12.5}).wait(1).to({graphics:mask_graphics_76,x:82.5,y:-13.7}).wait(1).to({graphics:mask_graphics_77,x:81.6,y:-15}).wait(1).to({graphics:mask_graphics_78,x:80.8,y:-16.2}).wait(1).to({graphics:mask_graphics_79,x:79.9,y:-17.5}).wait(1).to({graphics:mask_graphics_80,x:79.1,y:-18.8}).wait(1).to({graphics:mask_graphics_81,x:78.2,y:-20.1}).wait(1).to({graphics:mask_graphics_82,x:77.4,y:-21.4}).wait(1).to({graphics:mask_graphics_83,x:76.7,y:-22.8}).wait(1).to({graphics:mask_graphics_84,x:75.9,y:-24.1}).wait(1).to({graphics:mask_graphics_85,x:75.2,y:-25.5}).wait(1).to({graphics:mask_graphics_86,x:74.5,y:-26.9}).wait(1).to({graphics:mask_graphics_87,x:73.8,y:-28.3}).wait(1).to({graphics:mask_graphics_88,x:73.1,y:-29.7}).wait(1).to({graphics:mask_graphics_89,x:72.5,y:-31.1}).wait(1).to({graphics:mask_graphics_90,x:71.8,y:-32.6}).wait(1).to({graphics:mask_graphics_91,x:71.2,y:-34}).wait(1).to({graphics:mask_graphics_92,x:70.7,y:-35.5}).wait(1).to({graphics:mask_graphics_93,x:70.1,y:-37}).wait(1).to({graphics:mask_graphics_94,x:69.6,y:-38.5}).wait(1).to({graphics:mask_graphics_95,x:69,y:-40}).wait(1).to({graphics:mask_graphics_96,x:68.6,y:-41.5}).wait(1).to({graphics:mask_graphics_97,x:68.1,y:-43}).wait(1).to({graphics:mask_graphics_98,x:67.6,y:-44.5}).wait(1).to({graphics:mask_graphics_99,x:67.2,y:-46}).wait(1).to({graphics:mask_graphics_100,x:66.8,y:-47.6}).wait(1).to({graphics:mask_graphics_101,x:66.4,y:-49.1}).wait(1).to({graphics:mask_graphics_102,x:66.1,y:-50.7}).wait(1).to({graphics:mask_graphics_103,x:65.7,y:-52.3}).wait(1).to({graphics:mask_graphics_104,x:65.4,y:-53.8}).wait(1).to({graphics:mask_graphics_105,x:65.1,y:-55.4}).wait(1).to({graphics:mask_graphics_106,x:64.9,y:-57}).wait(1).to({graphics:mask_graphics_107,x:64.6,y:-58.6}).wait(1).to({graphics:mask_graphics_108,x:64.4,y:-60.2}).wait(1).to({graphics:mask_graphics_109,x:64.2,y:-61.8}).wait(1).to({graphics:mask_graphics_110,x:64.1,y:-63.4}).wait(1).to({graphics:mask_graphics_111,x:63.9,y:-65.1}).wait(1).to({graphics:mask_graphics_112,x:63.8,y:-66.7}).wait(1).to({graphics:mask_graphics_113,x:63.7,y:-68.3}).wait(1).to({graphics:mask_graphics_114,x:63.7,y:-70}).wait(1).to({graphics:mask_graphics_115,x:63.6,y:-71.6}).wait(1).to({graphics:mask_graphics_116,x:63.6,y:-73.3}).wait(1).to({graphics:mask_graphics_117,x:63.6,y:-74.9}).wait(1).to({graphics:mask_graphics_118,x:63.7,y:-76.6}).wait(1).to({graphics:mask_graphics_119,x:63.7,y:-78.3}).wait(1).to({graphics:mask_graphics_120,x:63.9,y:-80}).wait(1).to({graphics:mask_graphics_121,x:64,y:-81.6}).wait(1).to({graphics:mask_graphics_122,x:64.1,y:-80.1}).wait(1).to({graphics:mask_graphics_123,x:64.2,y:-78.5}).wait(1).to({graphics:mask_graphics_124,x:64.3,y:-76.8}).wait(1).to({graphics:mask_graphics_125,x:64.3,y:-75.2}).wait(1).to({graphics:mask_graphics_126,x:64.4,y:-73.6}).wait(1).to({graphics:mask_graphics_127,x:64.3,y:-71.9}).wait(1).to({graphics:mask_graphics_128,x:64.3,y:-70.3}).wait(1).to({graphics:mask_graphics_129,x:64.2,y:-68.7}).wait(1).to({graphics:mask_graphics_130,x:64.2,y:-67.1}).wait(1).to({graphics:mask_graphics_131,x:64,y:-65.5}).wait(1).to({graphics:mask_graphics_132,x:63.9,y:-63.9}).wait(1).to({graphics:mask_graphics_133,x:63.7,y:-62.3}).wait(1).to({graphics:mask_graphics_134,x:63.5,y:-60.7}).wait(1).to({graphics:mask_graphics_135,x:63.3,y:-59.2}).wait(1).to({graphics:mask_graphics_136,x:63.1,y:-57.6}).wait(1).to({graphics:mask_graphics_137,x:62.8,y:-56}).wait(1).to({graphics:mask_graphics_138,x:62.5,y:-54.5}).wait(1).to({graphics:mask_graphics_139,x:62.2,y:-52.9}).wait(1).to({graphics:mask_graphics_140,x:61.8,y:-51.4}).wait(1).to({graphics:mask_graphics_141,x:61.5,y:-49.9}).wait(1).to({graphics:mask_graphics_142,x:61.1,y:-48.3}).wait(1).to({graphics:mask_graphics_143,x:60.7,y:-46.8}).wait(1).to({graphics:mask_graphics_144,x:60.2,y:-45.3}).wait(1).to({graphics:mask_graphics_145,x:59.8,y:-43.8}).wait(1).to({graphics:mask_graphics_146,x:59.3,y:-42.3}).wait(1).to({graphics:mask_graphics_147,x:58.8,y:-40.9}).wait(1).to({graphics:mask_graphics_148,x:58.3,y:-39.4}).wait(1).to({graphics:mask_graphics_149,x:57.7,y:-37.9}).wait(1).to({graphics:mask_graphics_150,x:57.2,y:-36.5}).wait(1).to({graphics:mask_graphics_151,x:56.6,y:-35}).wait(1).to({graphics:mask_graphics_152,x:56,y:-33.6}).wait(1).to({graphics:mask_graphics_153,x:55.3,y:-32.2}).wait(1).to({graphics:mask_graphics_154,x:54.7,y:-30.8}).wait(1).to({graphics:mask_graphics_155,x:54,y:-29.4}).wait(1).to({graphics:mask_graphics_156,x:53.3,y:-28}).wait(1).to({graphics:mask_graphics_157,x:52.5,y:-26.7}).wait(1).to({graphics:mask_graphics_158,x:51.8,y:-25.3}).wait(1).to({graphics:mask_graphics_159,x:51,y:-24}).wait(1).to({graphics:mask_graphics_160,x:50.2,y:-22.7}).wait(1).to({graphics:mask_graphics_161,x:49.4,y:-21.3}).wait(1).to({graphics:mask_graphics_162,x:48.6,y:-20.1}).wait(1).to({graphics:mask_graphics_163,x:47.7,y:-18.8}).wait(1).to({graphics:mask_graphics_164,x:46.8,y:-17.5}).wait(1).to({graphics:mask_graphics_165,x:45.9,y:-16.3}).wait(1).to({graphics:mask_graphics_166,x:45,y:-15.1}).wait(1).to({graphics:mask_graphics_167,x:44.1,y:-13.9}).wait(1).to({graphics:mask_graphics_168,x:43.1,y:-12.7}).wait(1).to({graphics:mask_graphics_169,x:42.1,y:-11.5}).wait(1).to({graphics:mask_graphics_170,x:41.1,y:-10.4}).wait(1).to({graphics:mask_graphics_171,x:40,y:-9.3}).wait(1).to({graphics:mask_graphics_172,x:39,y:-8.2}).wait(1).to({graphics:mask_graphics_173,x:37.9,y:-7.1}).wait(1).to({graphics:mask_graphics_174,x:36.8,y:-6}).wait(1).to({graphics:mask_graphics_175,x:35.7,y:-5}).wait(1).to({graphics:mask_graphics_176,x:34.5,y:-4}).wait(1).to({graphics:mask_graphics_177,x:33.3,y:-3}).wait(1).to({graphics:mask_graphics_178,x:32.1,y:-2.1}).wait(1).to({graphics:mask_graphics_179,x:31,y:-1}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("Ah3UFQmciljnmaQkMneCIoTQCIoUHNkSQHLkSIECRQCNAnB6BB");
	this.shape.setTransform(-0.8,-0.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(180));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.6,-131.5,109.1,262.1);


(lib.honeyflap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.honeybee();
	this.instance.parent = this;
	this.instance.setTransform(38.4,-170.9,0.422,0.422,0,0,0,-0.1,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHB9IgTgDQgNgDgLgFIgIgEIgBAAIAAAAIgBgBIgBAAIAAAAIgBgBIgBAAIAAgBIgBAAIgBAAIAAgBIgBAAIgBAAIAAgBIgBAAIAAgBIgBAAIAAAAIgBgBIgBgBIgBAAIAAAAIgBgBIAAAAIgBgBIAAAAIgBgBIgBAAIAAgBIgBAAIgBgBIAAAAIgBgBIAAAAIgBgBIgBAAIAAgBIgBAAIAAAAIgBgBIAAAAIgBgBIAAAAIAAAAIgBgBIAAAAIgBgBIAAgBIgBAAIAAAAIgEgEIAAAAIAAAAIgBgBIAAAAIAAgBIgBAAIAAgBIgBAAIAAAAIAAgBIgBAAIAAgBIAAAAIgBgBIAAAAIAAAAIgBgBIAAgBIgBAAIAAAAIAAgBIgBAAIAAgBIAAAAIgBgBIAAAAIgBgBIAAAAIAAgBIAAAAIgBgBIgBgBIAAAAIAAgBIgBgBIgBgBIAAAAIAAgBIgBAAIAAgBIAAgBIgBAAIAAAAIAAgBIAAgBIgBAAIAAgBIAAAAIgBAAIAAgBIAAgBIAAAAIgBgBIAAgBIgBgBIAAgBIgBgBIgBgBIAAgBIAAgBIAAgBIgBAAIAAgBIAAAAIAAgBIgBAAIAAgBIAAgBIAAgBIgBAAIAAgBIAAgBIgBAAIAAgBIAAgBIAAgBIgBAAIAAgCIAAAAIAAgBIgBAAIAAgCIAAAAIAAgBIgBgBIAAgCIAAAAIAAgBIgBgBIAAgBIAAgBIAAgCIgBAAIAAgDIAAAAIAAgDIgBAAIAAgEIAAAAIAAgEIgBAAIAAgLIAAAAIAAgBIAAAAIAAgBIAAgHIABAAIgBgBIABAAIAAgEIAAgBIAAgDIABAAIAAgDIAAAAIAAgCIABgBIAAgCIAAAAIAAgCIABAAIAAgCIAAAAIAAgCIABAAIAAgCIAAAAIAAgBIABgBIAAgBIAAAAIAAgBIABgBIAAgBIAAAAIAAgBIABgBIAAgBIAAAAIAAgBIABAAIAAgBIAAgBIAAAAIABgBIAAgBIAAAAIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAgBIAAgBIAAAAIABgBIAAAAIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAgBIAAAAIAAgBIABgBIAAAAIAAgBIABAAIAAgBIAAAAIABgBIAAAAIAAgBIAAAAIABgBIAAAAIAAgBIABAAIAAgBIABAAIAAgBIAAAAIABgBIAAAAIAAgBIABgBIAAAAIAAgBIABAAIABgBIAAgBIAAAAIABgBIAAAAIABgBIAAAAIAAgBIABgBIABgBIAAAAIACgCIAAgBIABAAIAAgBIABAAIABgBIAAgBIAAAAIADgDIALgJIAOgKIAMgGIAKgEQALgEAMgCIAMgBIAMAAIAOACIAMADIANAEIAEABIAAABIABAAIABAAIABABIABAAIAAAAIABABIABAAIAAABIABAAIACABIABAAIABABIABABIABAAIAAAAIABABIABAAIAAAAIABABIABABIABAAIAAAAIABABIAAAAIABABIABAAIAAAAIABABIAAAAIABAAIABABIABABIAAAAIABAAIAAABIABAAIABABIAAAAIABABIAAAAIABABIABAAIAAABIABAAIAAABIAAAAIABAAIABABIAAABIABAAIAAAAIABABIAAAAIAAABIABAAIAAABIABAAIAAAAIAAABIABAAIAAABIABAAIAAAAIABABIAAAAIAAABIACACIABABIABAAIAAABIABABIAAABIABAAIAAAAIABABIAAAAIABABIAAABIAAAAIABAAIAAABIAAAAIABABIAAAAIABABIAAABIABABIAAAAIAAABIABAAIAAAAIAAABIAAAAIABABIAAAAIAAABIABAAIAAAAIAAABIAAAAIABABIAAAAIAAABIAAAAIABAAIAAABIAAAAIAAABIABAAIAAABIAAAAIAAABIABAAIAAAAIAAABIAAAAIABABIAAAAIAAABIAAAAIABAAIAAABIAAAAIAAABIABABIAAAAIAAABIAAAAIABABIAAAAIAAABIAAAAIABABIAAABIAAAAIABABIAAABIAAAAIAAABIABABIAAAAIAAABIAAABIABAAIAAABIAAABIAAABIABAAIAAABIAAABIAAABIABAAIAAACIAAAAIAAABIABABIAAABIAAABIAAABIABAAIAAACIAAAAIAAACIABABIAAABIAAABIAAACIAAABIABABIAAABIAAABIAAABIAAACIABABIAAAGIAAABIAAAAIAAABIAAAKIAAAAIAAAAIAAABIAAAAIAAABIAAAFIgBAAIAAAFIAAAAIAAACIgBAAIAAACIAAABIAAABIAAABIgBABIAAACIAAAAIAAACIgBAAIAAACIAAAAIAAACIgBAAIAAACIAAAAIAAABIgBAAIAAACIAAAAIAAABIgBABIAAABIAAAAIAAABIgBABIAAAAIAAABIAAABIgBAAIAAABIAAAAIAAABIgBABIAAAAIAAABIAAABIgBAAIAAABIAAAAIAAABIgBAAIAAABIAAAAIAAABIgBAAIAAABIAAAAIAAABIgBAAIAAABIAAAAIAAABIgBAAIAAABIAAAAIgBABIAAAAIAAABIAAABIgBAAIAAABIAAAAIgBABIAAAAIAAABIgBAAIAAABIAAAAIgBABIAAAAIAAABIgBAAIAAABIAAAAIgBABIAAAAIAAABIgBAAIAAABIAAABIgBAAIAAABIgBABIAAAAIgBABIgBABIgBABIAAAAIgBABIAAABIAAAAIgBABIAAAAIgBABIAAAAIgDADIAAABIgBAAIAAABIgBAAIgBABIAAAAIgBABIAAAAIgBABIAAABIgBAAIgBABIAAAAIgBABIgBAAIgDADQgGAGgHAEIgQAIIgIADQgLAEgMACQgLABgKAAIgFAAg");
	this.shape.setTransform(22.7,-143.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-215.3,105.5,83.9);


// stage content:
(lib.writingsuccess_Fontkid_O = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_574 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(574).call(this.frame_574).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(267.9,104.9,0.999,0.999,8.5,0,0,22.4,-144);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:8.3,guide:{path:[267.9,104.8,199.9,106.2,151.5,154.6,101.7,204.5,101.7,275,101.7,345.5,151.5,395.4,201.4,445.3,271.9,445.3,272.6,445.3,273.3,445.3]}},250).to({guide:{path:[273.2,445.3,343,444.8,393.9,395.4,440.2,350.4,444.7,288.5]}},115).to({scaleX:1,scaleY:1,rotation:8.5,guide:{path:[444.8,288.6,445.3,281.9,445.3,275,445.2,204.4,394.3,155,343.4,105.6,271,104.8]}},125).wait(11).to({x:275.1},0).to({guide:{path:[275,104.7,35.3,191.6,73.8,5.2,112.3,-181.2,-44.8,-77.2]}},64).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(277.6,102.6,1.009,1.009);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(25,1,1).p("AanAAQAALCnzHzQnyHyrCAAQrBAAnznyQnynzAArCQAArBHynzQHznzLBAAQLCAAHyHzQHzHzAALBg");
	this.shape_1.setTransform(275,275.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},9).to({state:[{t:this.shape_1}]},490).wait(76));

	// ar
	this.instance_1 = new lib.ar1("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(250.4,282.8,1,1,-15);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).wait(566));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_259 = new cjs.Graphics().p("AjtcFQp2qTAUuPQAUuOKSp2QKSp3OPAUMgBhBEvQuOgUp2qSg");
	var mask_graphics_260 = new cjs.Graphics().p("AjMcZQp+qKAIuQQAIuOKKp+QKKp/OPAIMgAnBEvQuPgIp/qKg");
	var mask_graphics_261 = new cjs.Graphics().p("AizcuQqHqDgDuPQgEuOKBqHQKCqIOPgEMAATBEwIgLAAQuJAAqDp9g");
	var mask_graphics_262 = new cjs.Graphics().p("AitdCQqPp6gQuPQgQuPJ5qOQJ5qROQgPMABMBEvIgsAAQt0AAp/ppg");
	var mask_graphics_263 = new cjs.Graphics().p("AindVQqYpxgbuPQgcuOJxqXQJwqYOQgcMACFBEuIhNABQtfAAp7pWg");
	var mask_graphics_264 = new cjs.Graphics().p("AihdpQqgppgnuOQgouOJoqfQJoqgOQgoMAC+BEsQg3ACg2AAQtLAAp3pCg");
	var mask_graphics_265 = new cjs.Graphics().p("Aibd8QqopggzuOQgzuMJfqoQJgqoOOgzMAD4BEoQhHAEhGAAQs3AApzovg");
	var mask_graphics_266 = new cjs.Graphics().p("AiUePQqwpXg/uNQg/uMJWqvQJXqwOOhAMAExBElQhXAGhVAAQskAApuocg");
	var mask_graphics_267 = new cjs.Graphics().p("AiNehQq4pNhLuNQhLuLJOq3QJOq4ONhLMAFqBEhQhnAIhkAAQsRAAppoKg");
	var mask_graphics_268 = new cjs.Graphics().p("AiGe0QrApFhXuLQhWuKJFq/QJEq/ONhXMAGjBEbQh2AMhzAAQsAAApjn4g");
	var mask_graphics_269 = new cjs.Graphics().p("Ah/fGQrHo8hjuKQhiuJI8rFQI7rIOMhiMAHcBEVQiGAPiCAAQrtAApenmg");
	var mask_graphics_270 = new cjs.Graphics().p("Ah3fXQrPoyhuuIQhvuIIzrNQIzrPOKhuMAIVBEPQiVASiQAAQrcAApYnVg");
	var mask_graphics_271 = new cjs.Graphics().p("AhvfpQrWoph6uHQh7uGIqrVQIprVOJh7MAJOBEIQikAWifAAQrKAApSnDg");
	var mask_graphics_272 = new cjs.Graphics().p("Ahnf6QrdofiGuGQiGuEIgrcQIhrdOHiGMAKGBEAQizAaitAAQq6AApLmyg");
	var mask_graphics_273 = new cjs.Graphics().p("EgBfAgLQrkoWiSuDQiRuDIWrjQIYrkOFiSMAK/BD3QjCAfi7AAQqpAApFmhg");
	var mask_graphics_274 = new cjs.Graphics().p("EgBWAgbQrsoMiduBQiduBINrpQIOrrODieMAL4BDtQjRAljJAAQqYAAo+mSg");
	var mask_graphics_275 = new cjs.Graphics().p("EgBNAgsQrzoDiot/Qipt+IDrxQIEryOCipMAMwBDjQjgAqjWAAQqIAAo3mBg");
	var mask_graphics_276 = new cjs.Graphics().p("EgBEAg7Qr5n4i1t9Qi0t8H5r3QH7r5N/i1MANpBDYQjuAwjkAAQp5AAovlyg");
	var mask_graphics_277 = new cjs.Graphics().p("EgA7AhLQr/nujBt7QjAt6Hwr9QHxr/N9jBMAOgBDMQj7A2jyAAQppAAoolig");
	var mask_graphics_278 = new cjs.Graphics().p("EgAxAhaQsGnkjMt4QjMt3HmsEQHnsGN7jMMAPYBC/QkJA9kAAAQpZAAoglTg");
	var mask_graphics_279 = new cjs.Graphics().p("EgAnAhpQsNnajXt1QjXt0HcsLQHdsMN4jYMAQQBCzQkXBEkNAAQpLAAoXlFg");
	var mask_graphics_280 = new cjs.Graphics().p("EgAdAh4QsTnQjjtyQjjtyHTsQQHSsSN2jkMARHBClQkkBLkaAAQo8AAoPk2g");
	var mask_graphics_281 = new cjs.Graphics().p("EgASAiHQsanGjutvQjutvHIsWQHIsZNzjvMAR/BCWQkyBTknAAQouAAoFkng");
	var mask_graphics_282 = new cjs.Graphics().p("EgAIAiVQsfm7j6ttQj5tsG9scQG/seNvj7MAS3BCHQlABbk0AAQofAAn9kZg");
	var mask_graphics_283 = new cjs.Graphics().p("EAACAiiQskmwkFtpQkFtpGzshQG1skNskHMATtBB3QlMBjlCAAQoQAAn1kMg");
	var mask_graphics_284 = new cjs.Graphics().p("EAANAiwQspmmkRtmQkQtlGpsnQGqspNpkSMAUkBBlQlZBslPAAQoDAAnrj+g");
	var mask_graphics_285 = new cjs.Graphics().p("EAAYAi9QsvmbkctiQkbtiGestQGgsuNlkeMAVbBBUQllB2ldAAQn0AAnijyg");
	var mask_graphics_286 = new cjs.Graphics().p("EAAkAjKQs1mRknteQknteGUsyQGVs0NikpMAWRBBCQlyB/lpAAQnmAAnYjlg");
	var mask_graphics_287 = new cjs.Graphics().p("EAAwAjWQs6mFkytbQkztaGKs3QGKs6Nfk0MAXHBAwQl+CIl3AAQnZAAnNjZg");
	var mask_graphics_288 = new cjs.Graphics().p("EAA8AjjQs/l7k+tXQk9tWF/s8QGAs/Nak/MAX9BAcQmKCSmEAAQnLAAnDjMg");
	var mask_graphics_289 = new cjs.Graphics().p("EABIAjuQtElwlItSQlJtRF0tCQF1tDNXlLMAYyBAHQmWCdmRAAQm+AAm4jBg");
	var mask_graphics_290 = new cjs.Graphics().p("EABUAj6QtIlllUtOQlTtNFptGQFqtJNSlVMAZoA/yQmhCnmfAAQmwAAmui1g");
	var mask_graphics_291 = new cjs.Graphics().p("EABhAkFQtNlalftJQletJFetLQFgtNNNlhMAadA/dQmtCymsAAQmjAAmiiqg");
	var mask_graphics_292 = new cjs.Graphics().p("EABuAkQQtSlPlqtEQlptFFUtPQFUtSNKlsMAbRA/GQm4C+m6AAQmVAAmXifg");
	var mask_graphics_293 = new cjs.Graphics().p("EAB7AkbQtWlEl1tAQl0s/FJtUQFJtWNFl3MAcGA+vQnDDJnIAAQmHABmMiVg");
	var mask_graphics_294 = new cjs.Graphics().p("EACIAklQtak5l/s6QmAs7E+tYQE/taNBmCMAc5A+XQnODWnVAAQl7AAmAiLg");
	var mask_graphics_295 = new cjs.Graphics().p("EACWAkvQtfkumKs1QmKs2EztcQE0teM8mNMAdsA9/QnXDinkAAQltAAl0iBg");
	var mask_graphics_296 = new cjs.Graphics().p("EACkAk4QtjkimVswQmUsxEotgQEotiM3mYMAegA9mQniDvnyAAQlgAAlnh4g");
	var mask_graphics_297 = new cjs.Graphics().p("EACyAlBQtnkWmfsrQmfsrEctkQEdtmMymjMAfUA9MQntD8n/AAQlTAAlbhvg");
	var mask_graphics_298 = new cjs.Graphics().p("EADAAlKQtrkLmpslQmqsmEStoQERtqMtmtMAgGA8yQn2EJoOAAQlGAAlOhmg");
	var mask_graphics_299 = new cjs.Graphics().p("EADOAlTQtukAm0sgQm0sgEGtrQEHttMnm4MAg4A8WQn/EXodAAQk4AAlChdg");
	var mask_graphics_300 = new cjs.Graphics().p("EADdAlbQtyj0m+saQm+sbD6tuQD8txMhnCMAhrA76QoJElosAAQkqAAk1hVg");
	var mask_graphics_301 = new cjs.Graphics().p("EADrAljQt0jpnJsUQnIsUDvtyQDwt0MbnNMAidA7eQoSEzo6AAQkeAAkohNg");
	var mask_graphics_302 = new cjs.Graphics().p("EAD6AlqQt3jcnTsPQnTsODkt1QDkt4MWnXMAjOA7BQobFCpJAAQkQAAkbhGg");
	var mask_graphics_303 = new cjs.Graphics().p("EAEKAlxQt7jRndsIQndsIDYt4QDZt6MQniMAj/A6jQokFRpYAAQkDAAkMg/g");
	var mask_graphics_304 = new cjs.Graphics().p("EAEZAl4Qt9jFnosCQnnsCDNt7QDOt9MJnsMAkwA6FQosFgpoAAQj1AAj/g4g");
	var mask_graphics_305 = new cjs.Graphics().p("EAEoAl/Qt/i6nyr8Qnxr7DCt9QDCuAMDn2MAlgA5mQo1Fvp3AAQjoAAjxgxg");
	var mask_graphics_306 = new cjs.Graphics().p("EAE4AmFQuCiun7r1Qn7r1C2uAQC2uDL9oAMAmPA5HQo8F/qIAAQjZAAjjgrg");
	var mask_graphics_307 = new cjs.Graphics().p("EAFIAmKQuFiioEruQoFruCquDQCruEL2oLMAm/A4nQpEGPqYAAQjMAAjUgmg");
	var mask_graphics_308 = new cjs.Graphics().p("EAFYAmQQuHiXoOrnQoProCfuEQCfuHLwoUMAntA4FQpLGgqoAAQi/AAjFggg");
	var mask_graphics_309 = new cjs.Graphics().p("EAFoAmVQuIiLoZrgQoYrhCTuGQCUuKLpoeMAocA3kQpTGxq5AAQiwAAi3gbg");
	var mask_graphics_310 = new cjs.Graphics().p("EAF5AmZQuLh+oiraQohrZCHuJQCIuLLiooMApKA3CQpZHCrLAAQiiAAingXg");
	var mask_graphics_311 = new cjs.Graphics().p("EAGJAmdQuMhyorrTQorrSB8uKQB8uNLaoxMAp4A2fQpgHTrcAAQiTAAiZgTg");
	var mask_graphics_312 = new cjs.Graphics().p("EAGaAmhQuOhmo0rMQo1rLBwuMQBxuOLTo7MAqlA18QpmHlruAAQiFAAiJgPg");
	var mask_graphics_313 = new cjs.Graphics().p("EAGrAmlQuPhbo+rEQo+rDBluPQBkuPLMpEMArSA1YQpsH3sBABQh2AAh5gMg");
	var mask_graphics_314 = new cjs.Graphics().p("EAG8AmoQuQhPpHq8QpHq8BZuQQBYuQLFpOMAr+A00QpyIKsTAAQhnAAhqgJg");
	var mask_graphics_315 = new cjs.Graphics().p("EAHNAmqQuRhCpQq1QpQq0BNuRQBNuSK9pXMAsqA0PQp4IdsmAAQhYAAhagHg");
	var mask_graphics_316 = new cjs.Graphics().p("EAHfAmtQuSg3pZqtQpZqtBBuRQBBuTK1pgMAtVAzpQp9Iws6AAQhIAAhJgEg");
	var mask_graphics_317 = new cjs.Graphics().p("EAHwAmvQuTgrphqlQpiqlA1uSQA1uUKuppMAuAAzDQqDJDtNAAQg4AAg6gCg");
	var mask_graphics_318 = new cjs.Graphics().p("EAICAmwQuTgfprqdQprqcAquUQApuUKmpyMAuqAydQqHJWtiAAIhRgBg");
	var mask_graphics_319 = new cjs.Graphics().p("EAIUAmxQuUgTpzqUQp0qVAeuUQAeuUKdp8MAvUAx2QqLJrt3AAIgwgBg");
	var mask_graphics_320 = new cjs.Graphics().p("EAImAmyQuUgHp8qMQp8qNASuUQASuVKVqEMAv9AxOQqQJ/uMAAIgOAAg");
	var mask_graphics_321 = new cjs.Graphics().p("AvgczQqFqEAGuUQAGuWKNqNMAwmAwmQqMKNuWAHIgPAAQuKAAp/p/g");
	var mask_graphics_322 = new cjs.Graphics().p("AvWdIQqNp8gGuVQgGuVKFqVMAxOAv8QqEKWuVATIgxAAQt1ABp7prg");
	var mask_graphics_323 = new cjs.Graphics().p("AvMdcQqVpzgRuVQgSuVJ8qeMAx2AvTQp8KeuVAgIhSABQtgAAp3pXg");
	var mask_graphics_324 = new cjs.Graphics().p("AvBdwQqdprgeuUQgduVJzqnMAydAuqQpzKmuUAsQg6ACg5AAQtLAApzpDg");
	var mask_graphics_325 = new cjs.Graphics().p("Au2eDQqlpigpuUQgpuUJqqvMAzEAt/QprKvuUA3QhKAFhIAAQs4AApuoxg");
	var mask_graphics_326 = new cjs.Graphics().p("AuqeWQqtpZg1uTQg1uUJhq3MAzqAtVQphK2uUBEQhaAGhYAAQskAAppoeg");
	var mask_graphics_327 = new cjs.Graphics().p("AueepQq1pQhBuSQhBuUJZq/MA0PAspQpYK/uTBQQhqAJhnAAQsRAApkoMg");
	var mask_graphics_328 = new cjs.Graphics().p("AuSe8Qq8pHhNuSQhNuTJQrGMA00Ar9QpPLHuSBbQh6AMh2AAQr+AApfn5g");
	var mask_graphics_329 = new cjs.Graphics().p("AuFfOQrEo9hYuRQhZuSJGrPMA1ZArRQpGLPuRBnQiJAQiFAAQrsAApZnog");
	var mask_graphics_330 = new cjs.Graphics().p("At4fgQrLo0hkuQQhluRI9rWMA19AqkQo9LXuPBzQiZATiTAAQraAApUnWg");
	var mask_graphics_331 = new cjs.Graphics().p("AtqfyQrSorhxuPQhwuPI0reMA2fAp3QozLeuOB/QioAYihAAQrJAApNnFg");
	var mask_graphics_332 = new cjs.Graphics().p("EgNcAgDQraohh8uNQh8uOIrrlMA3CApJQoqLluMCLQi3AciwAAQq3AApHm0g");
	var mask_graphics_333 = new cjs.Graphics().p("EgNOAgUQrgoYiIuLQiIuMIhrtMA3kAobQohLtuKCXQjFAhi+AAQqnAApAmkg");
	var mask_graphics_334 = new cjs.Graphics().p("EgM/AglQrnoOiUuKQiTuLIXrzMA4FAntQoXLzuICjQjUAmjLAAQqXAAo5mTg");
	var mask_graphics_335 = new cjs.Graphics().p("EgMwAg2QruoFifuIQifuJINr6MA4mAm+QoNL6uGCvQjjAsjZAAQqGAAoymDg");
	var mask_graphics_336 = new cjs.Graphics().p("EgMgAhGQr1n7iruGQiruGIDsCMA5HAmOQoDMCuEC7QjxAxjmAAQp3AAoqlzg");
	var mask_graphics_337 = new cjs.Graphics().p("EgMQAhWQr8nxi2uEQi3uEH5sJMA5nAlfQn6MIuBDHQj/A4j0AAQpmAAojlkg");
	var mask_graphics_338 = new cjs.Graphics().p("EgMAAhlQsCnmjCuCQjCuCHvsPMA6FAkuQnvMPt/DTQkMA+kCAAQpXAAoblVg");
	var mask_graphics_339 = new cjs.Graphics().p("EgLvAh1QsIndjOt/QjOuAHlsVMA6jAj9QnlMWt8DeQkaBGkOAAQpIAAoTlGg");
	var mask_graphics_340 = new cjs.Graphics().p("EgLeAiEQsPnTjZt8QjZt9HbsdMA7BAjNQnbMct5DqQkoBNkcAAQo5AAoKk3g");
	var mask_graphics_341 = new cjs.Graphics().p("EgLNAiSQsUnIjlt6Qjlt6HRsiMA7eAibQnRMit2D2Qk1BVkoAAQorAAoCkqg");
	var mask_graphics_342 = new cjs.Graphics().p("EgK7AihQsam+jxt3Qjwt3HGspMA76AhqQnGMotzEBQlBBdk2AAQocAAn5kbg");
	var mask_graphics_343 = new cjs.Graphics().p("EgKpAivQsgm0j8t0Qj8t1G8stMA8WAg3Qm8MvtvEMQlOBmlDAAQoOAAnwkOg");
	var mask_graphics_344 = new cjs.Graphics().p("EgKXAi8QslmpkHtwQkItyGys0MA8xAgFQmyM1tsEYQlaBulQAAQoAAAnnkBg");
	var mask_graphics_345 = new cjs.Graphics().p("EgKEAjKQsrmfkSttQkTtvGms5MA9MAfSQmnM7toEjQlnB4ldAAQnxAAnej0g");
	var mask_graphics_346 = new cjs.Graphics().p("EgJxAjXQswmUketqQketrGcs/MA9lAefQmcNAtkEvQl0CBlpAAQnkAAnUjng");
	var mask_graphics_347 = new cjs.Graphics().p("EgJdAjkQs2mKkptmQkptnGRtEMA9+AdrQmRNFtgE7QmACLl2AAQnWAAnKjbg");
	var mask_graphics_348 = new cjs.Graphics().p("EgJJAjwQs7l/k0tiQk1tjGGtKMA+XAc4QmGNKtdFGQmKCVmEAAQnJAAm/jPg");
	var mask_graphics_349 = new cjs.Graphics().p("EgI1Aj8Qs/l0lAteQlAtfF7tPMA+vAcDQl8NQtYFRQmWCgmRAAQm7AAm1jEg");
	var mask_graphics_350 = new cjs.Graphics().p("EgIgAkIQtFlplKtaQlMtcFxtTMA/FAbPQlwNVtUFcQmhCqmeAAQmuAAmqi4g");
	var mask_graphics_351 = new cjs.Graphics().p("EgILAkTQtJlelWtWQlWtXFltZMA/cAabQlmNatPFnQmsC1mrABQmhAAmfiug");
	var mask_graphics_352 = new cjs.Graphics().p("EgH2AkeQtOlTlgtRQlitTFatdMA/yAZlQlaNetLFzQm3DBm4AAQmUAAmUijg");
	var mask_graphics_353 = new cjs.Graphics().p("EgHhAkpQtRlIlstNQlttOFPtiMBAHAYwQlPNjtGF+QnCDMnFAAQmGAAmKiYg");
	var mask_graphics_354 = new cjs.Graphics().p("EgHLAk0QtWk9l2tIQl4tKFEtnMBAbAX7QlENntBGJQnMDZnTAAQl5AAl+iOg");
	var mask_graphics_355 = new cjs.Graphics().p("EgG1Ak+QtakymBtDQmCtFE4trMBAuAXEQk4Nss8GUQnWDlngAAQlsAAlziEg");
	var mask_graphics_356 = new cjs.Graphics().p("EgGeAlIQteknmMs+QmNtAEttvMBBBAWOQktNws2GfQnhDxntAAQlfAAlnh6g");
	var mask_graphics_357 = new cjs.Graphics().p("EgGHAlRQtikcmXs5QmYs6Eit0MBBTAVZQkiN0swGpQnqD/n7AAQlTAAlahyg");
	var mask_graphics_358 = new cjs.Graphics().p("EgFwAlaQtmkQmhs0Qmjs1EWt4MBBlAUiQkWN4srG0QnzEMoJAAQlGAAlOhpg");
	var mask_graphics_359 = new cjs.Graphics().p("EgFZAljQtpkFmssvQmtswELt6MBB1ATqQkLN8slG/Qn8EZoXAAQk5AAlChgg");
	var mask_graphics_360 = new cjs.Graphics().p("EgFBAlrQtsj5m3spQm4srD/t+MBCGAS0Qj/N/sgHKQoFEmolAAQkrAAk2hYg");
	var mask_graphics_361 = new cjs.Graphics().p("EgEpAlzQtvjunCsjQnCslD0uCMBCUAR9QjzODsaHUQoOE1ozAAQkeAAkphRg");
	var mask_graphics_362 = new cjs.Graphics().p("EgERAl7QtyjjnMsdQnMsfDnuFMBCkARFQjoOGsTHeQoXFEpBAAQkTAAkbhJg");
	var mask_graphics_363 = new cjs.Graphics().p("EgD4AmCQt1jXnWsYQnXsZDcuIMBCxAQOQjcOJsNHpQofFSpQAAQkFAAkOhCg");
	var mask_graphics_364 = new cjs.Graphics().p("EgDfAmJQt4jLngsSQnisTDRuLMBC+APWQjQOMsHHzQomFhpfAAQj5AAkAg7g");
	var mask_graphics_365 = new cjs.Graphics().p("EgDGAmQQt7jAnqsMQnrsMDEuOMBDLAOeQjEOPsBH9QouFwpuAAQjrABjzg1g");
	var mask_graphics_366 = new cjs.Graphics().p("EgCtAmWQt9i0n0sFQn2sHC5uRMBDXANmQi5OSr6IIQo1GAp9AAQjeAAjmgvg");
	var mask_graphics_367 = new cjs.Graphics().p("EgCTAmcQt/ipn/r+Qn/sACtuUMBDhAMuQitOUryISQo9GQqNAAQjQAAjYgpg");
	var mask_graphics_368 = new cjs.Graphics().p("EgB5AmiQuBieoJr4QoJr5ChuWMBDrAL2QigOWrsIcQpEGgqcAAQjDAAjKgjg");
	var mask_graphics_369 = new cjs.Graphics().p("EgBfAmnQuDiSoSrxQoUrzCVuYMBD2AK9QiVOZrlIlQpKGxqtAAQi1AAi8geg");
	var mask_graphics_370 = new cjs.Graphics().p("EgBEAmsQuFiGocrrQodrsCJuZMBD+AKEQiJObreIvQpQHBq9AAQioAAitgZg");
	var mask_graphics_371 = new cjs.Graphics().p("EgAqAmwQuGh6omrkQonrkB9ucMBEGAJLQh9OdrWI5QpWHSrOAAQiaAAifgVg");
	var mask_graphics_372 = new cjs.Graphics().p("EgAPAm0QuIhuovrdQowrdBxueMBENAITQhxOerPJCQpcHlrfAAQiMAAiQgSg");
	var mask_graphics_373 = new cjs.Graphics().p("EAALAm4QuIhjo5rVQo5rXBkugMBEUAHbQhlOgrHJMQpiH2rvAAQh+AAiDgOg");
	var mask_graphics_374 = new cjs.Graphics().p("EAAnAm7QuKhXpCrOQpDrPBZuhMBEZAGiQhYOhrAJVQpnIIsBAAQhwAAhzgLg");
	var mask_graphics_375 = new cjs.Graphics().p("EABDAm+QuLhLpLrGQpNrIBNujMBEeAFpQhMOjq4JeQpsIasTAAQhiAAhjgIg");
	var mask_graphics_376 = new cjs.Graphics().p("EABfAnAQuMg+pVq/QpVrBBAukMBEjAEwQhAOkqwJnQpxItslAAQhTAAhUgGg");
	var mask_graphics_377 = new cjs.Graphics().p("EAB7AnDQuNg0pdq3Qpfq4A0ulMBEnAD2Qg0OlqoJxQp1I/s5AAQhDAAhFgDg");
	var mask_graphics_378 = new cjs.Graphics().p("EACXAnEQuNgnpmqvQpoqxAoumMBEpAC+QgoOlqfJ6Qp6JTtLAAQg1AAg1gDg");
	var mask_graphics_379 = new cjs.Graphics().p("EAC0AnGQuOgcpvqnQpxqpAcumMBEsACEQgcOmqYKCQp9JntfAAIhKgBg");
	var mask_graphics_380 = new cjs.Graphics().p("EADQAnHQuNgQp4qfQp6qhAQunMBEtABLQgQOnqPKLQqBJ6tzAAIgrAAg");
	var mask_graphics_381 = new cjs.Graphics().p("EADtAnHQuNgDqBqYQqCqYADuoMBEuAASQgEOnqGKUQqEKOuIAAIgLAAg");
	var mask_graphics_382 = new cjs.Graphics().p("A0NdAQqKqQgJunMBEtgAoQAJOop+KbQp/KbuOAIIgXAAQt/AAqCqHg");
	var mask_graphics_383 = new cjs.Graphics().p("Az4dUQqTqHgVuoMBEtgBhQAUOop1KkQp2KjuOAUIg3ABQtrAAp+p0g");
	var mask_graphics_384 = new cjs.Graphics().p("AzjdoQqbp/ghunMBEqgCbQAhOopsKsQptKsuOAfQgsACgqAAQtXAAp7pgg");
	var mask_graphics_385 = new cjs.Graphics().p("AzNd8Qqkp3gtunMBEogDUQAtOnpjK1QpkK0uOArQg7ADg6AAQtEAAp2pMg");
	var mask_graphics_386 = new cjs.Graphics().p("Ay4ePQqspug5unMBElgEMQA5OmpaK9QpbK7uNA4QhLAFhJAAQswAApzo6g");
	var mask_graphics_387 = new cjs.Graphics().p("AyiehQq0plhGumMBEigFFQBFOmpRLEQpSLEuMBDQhaAHhYAAQseAApuoog");
	var mask_graphics_388 = new cjs.Graphics().p("AyMe0Qq8pchSulMBEdgF/QBROlpHLMQpJLMuLBPQhqAJhmAAQsMAAppoVg");
	var mask_graphics_389 = new cjs.Graphics().p("Ax2fGQrEpTheukMBEYgG4QBdOko+LUQo/LTuKBbQh5AMh1AAQr5AAploDg");
	var mask_graphics_390 = new cjs.Graphics().p("AxgfYQrLpKhqujMBERgHwQBqOio1LcQo1LbuJBmQiIAQiDAAQroAApgnyg");
	var mask_graphics_391 = new cjs.Graphics().p("AxJfqQrTpBh2uiMBEKgIoQB2OgorLjQosLiuIBzQiWATiRAAQrXAApangg");
	var mask_graphics_392 = new cjs.Graphics().p("Awyf7Qrbo3iCuhMBEDgJhQCCOfohLrQojLpuGB+QikAXifAAQrHAApUnPg");
	var mask_graphics_393 = new cjs.Graphics().p("EgQbAgMQriouiOufMBD6gKaQCOOeoXLyQoZLwuECKQizAcisAAQq3AApOm/g");
	var mask_graphics_394 = new cjs.Graphics().p("EgQEAgdQrpoliaudMBDxgLSQCaOcoNL4QoPL4uDCWQjBAgi5AAQqnAApImug");
	var mask_graphics_395 = new cjs.Graphics().p("EgPsAgtQrxobimubMBDogMLQCmOaoEMAQoFL+uACiQjPAljHAAQqXAApBmeg");
	var mask_graphics_396 = new cjs.Graphics().p("EgPVAg+Qr3oSiyuZMBDdgNDQCyOYn5MGQn7MGt/CtQjcAqjVAAQqHAAo7mNg");
	var mask_graphics_397 = new cjs.Graphics().p("EgO9AhNQr+oHi+uXMBDRgN8QC/OWnwMNQnwMMt8C5QjqAxjiAAQp4AAo0l/g");
	var mask_graphics_398 = new cjs.Graphics().p("EgOlAhdQsEn+jLuUMBDGgO0QDKOUnlMTQnmMTt6DEQj3A3jvAAQppAAotlvg");
	var mask_graphics_399 = new cjs.Graphics().p("EgOMAhsQsMn0jWuSMBC5gPrQDWORnbMaQncMZt2DQQkFA9j8AAQpaAAollgg");
	var mask_graphics_400 = new cjs.Graphics().p("EgN0Ah7QsSnqjiuPMBCsgQjQDiOOnRMhQnRMft0DbQkSBEkJAAQpLAAoelRg");
	var mask_graphics_401 = new cjs.Graphics().p("EgNbAiKQsYngjuuMMBCdgRbQDuOMnGMmQnHMltxDnQkfBLkVAAQo+AAoVlCg");
	var mask_graphics_402 = new cjs.Graphics().p("EgNCAiYQsenVj7uKMBCPgSSQD6OJm7MsQm9MrtuDzQksBTkiAAQovAAoNk1g");
	var mask_graphics_403 = new cjs.Graphics().p("EgMpAimQsknLkGuGMBB+gTJQEGOFmwMyQmzMxtqD+Qk4BbkvAAQohAAoFkng");
	var mask_graphics_404 = new cjs.Graphics().p("EgMQAi0QsqnBkSuDMBBvgUAQEROCmmM4QmnM3tnEJQlEBjk8AAQoUAAn8kZg");
	var mask_graphics_405 = new cjs.Graphics().p("EgL2AjBQswm2keuAMBBdgU2QEeN+mbM+QmdM8tkEVQlQBrlIAAQoGAAnzkMg");
	var mask_graphics_406 = new cjs.Graphics().p("EgLdAjOQs2mskpt8MBBMgVsQEpN6mQNDQmSNCtgEgQlcB0lVAAQn5AAnqj/g");
	var mask_graphics_407 = new cjs.Graphics().p("EgLDAjbQs7mhk1t5MBA5gWjQE1N4mFNIQmHNHtdErQlnB9liAAQnrAAnhjyg");
	var mask_graphics_408 = new cjs.Graphics().p("EgKpAjnQtBmWlAt1MBAmgXZQFAN0l6NNQl8NMtYE2QlzCHlvAAQneAAnXjmg");
	var mask_graphics_409 = new cjs.Graphics().p("EgKPAjzQtGmLlMtxMBASgYOQFMNvlvNSQlxNRtUFCQl+CQl7AAQnRAAnOjag");
	var mask_graphics_410 = new cjs.Graphics().p("EgJ0Aj/QtMmBlXtsMA/9gZEQFYNrlkNXQlmNWtQFNQmJCamIAAQnEAAnDjOg");
	var mask_graphics_411 = new cjs.Graphics().p("EgJaAkKQtQl2ljtnMA/ogZ6QFjNnlZNcQlaNbtMFXQmUClmVAAQm3AAm5jDg");
	var mask_graphics_412 = new cjs.Graphics().p("EgI/AkVQtVlqlvtkMA/TgauQFuNilONgQlPNgtHFiQmfCwmhAAQmrAAmui4g");
	var mask_graphics_413 = new cjs.Graphics().p("EgIkAkgQtalgl6teMA+8gbjQF5NdlCNlQlENktCFtQmpC6mvAAQmeAAmjisg");
	var mask_graphics_414 = new cjs.Graphics().p("EgIKAkrQtelVmFtaMA+kgcXQGFNZk3NpQk4Nos9F4Qm0DFm8AAQmRAAmZihg");
	var mask_graphics_415 = new cjs.Graphics().p("EgHvAk1QtilKmQtVMA+MgdLQGQNUkrNtQktNss5GDQm9DRnKAAQmEAAmOiXg");
	var mask_graphics_416 = new cjs.Graphics().p("EgHTAk/Qtok/mbtQMA90gd+QGbNOkgNxQkhNws0GOQnHDdnWAAQl4AAmCiNg");
	var mask_graphics_417 = new cjs.Graphics().p("EgG4AlIQtrkzmntLMA9bgeyQGmNKkUN0QkWN0suGZQnRDpnkAAQlrAAl3iEg");
	var mask_graphics_418 = new cjs.Graphics().p("EgGdAlRQtvkomxtFMA9AgflQGxNEkIN4QkLN4soGjQnaD1nyAAQlfAAlrh6g");
	var mask_graphics_419 = new cjs.Graphics().p("EgGBAlaQtzkdm9s/MA8mggYQG8M+j9N8Qj+N7sjGuQnkECn/AAQlSAAlfhxg");
	var mask_graphics_420 = new cjs.Graphics().p("EgFlAliQt3kRnHs6MA8KghKQHHM5jxN/QjzN/seG3QnsEQoOAAQlFAAlShpg");
	var mask_graphics_421 = new cjs.Graphics().p("EgFKAlqQt6kGnSszMA7ugh8QHSMzjlOCQjoOCsXHCQn1EcocAAQk4AAlHhgg");
	var mask_graphics_422 = new cjs.Graphics().p("EgEuAlyQt+j6ncsuMA7RgiuQHdMujaOEQjbOFsSHNQn9EqoqAAQktAAk5hYg");
	var mask_graphics_423 = new cjs.Graphics().p("EgESAl5QuBjunnsoMA60gjfQHnMojOOHQjPOIsMHWQoFE5o5AAQkgAAkshRg");
	var mask_graphics_424 = new cjs.Graphics().p("EgD2AmAQuEjjnyshMA6WgkQQHyMhjCOKQjDOLsGHhQoNFGpIAAQkTAAkfhJg");
	var mask_graphics_425 = new cjs.Graphics().p("EgDaAmHQuHjYn8sbMA53glAQH9Mbi2ONQi4ONr/HrQoWFVpWAAQkGAAkShCg");
	var mask_graphics_426 = new cjs.Graphics().p("EgC+AmNQuJjMoHsUMA5YglwQIHMUiqOPQisOQr5H0QodFkplAAQj5AAkFg7g");
	var mask_graphics_427 = new cjs.Graphics().p("EgChAmTQuNjAoRsOMA45gmgQIRMOieORQigOSryH/QokFzp1AAQjtAAj2g1g");
	var mask_graphics_428 = new cjs.Graphics().p("EgCFAmZQuPi1ocsHMA4ZgnPQIbMHiSOUQiUOUrrIIQorGCqFAAQjfAAjpgug");
	var mask_graphics_429 = new cjs.Graphics().p("EgBpAmeQuRipomsAMA34gn+QIlMBiGOVQiIOWrkISQoyGSqVAAQjSAAjbgpg");
	var mask_graphics_430 = new cjs.Graphics().p("EgBMAmjQuUidowr5MA3WgosQIwL5h6OXQh8OYreIbQo4GiqlAAQjFAAjMgjg");
	var mask_graphics_431 = new cjs.Graphics().p("EgAwAmnQuViRo6ryMA2zgpaQI6LyhuOZQhwOZrWIlQo/Gzq2AAQi3AAi+gfg");
	var mask_graphics_432 = new cjs.Graphics().p("EgATAmrQuYiFpDrqMA2QgqIQJELrhiOaQhkObrPIuQpFHDrGAAQiqAAivgag");
	var mask_graphics_433 = new cjs.Graphics().p("EAAIAmvQuYh5pNrjMA1tgq1QJNLjhWOcQhXOcrII4QpLHUrYAAQibAAiigWg");
	var mask_graphics_434 = new cjs.Graphics().p("EAAlAmzQuahupXrcMA1JgrhQJXLchJOdQhMOdrAJBQpRHlrpAAQiNAAiTgRg");
	var mask_graphics_435 = new cjs.Graphics().p("EABBAm2QubhiphrUMA0lgsNQJhLUg+OdQg/Ofq5JKQpWH2r7AAQh/AAiEgNg");
	var mask_graphics_436 = new cjs.Graphics().p("EABeAm4QudhWpqrMMA0Ags4QJqLMgxOeQg0OfqxJUQpbIIsOAAQhwAAh0gLg");
	var mask_graphics_437 = new cjs.Graphics().p("EAB7Am6QuehJp0rFMAzagtjQJ0LEgmOfQgnOgqpJcQpgIasgAAQhiAAhkgIg");
	var mask_graphics_438 = new cjs.Graphics().p("EACXAm8Qufg+p8q8MAyzguOQJ9K8gZOgQgbOgqhJlQpkIts1AAQhSAAhVgGg");
	var mask_graphics_439 = new cjs.Graphics().p("EAC0Am9QuggxqGq0MAyNgu4QKGKzgNOgQgPOhqZJuQpoI/tJAAQhDAAhEgEg");
	var mask_graphics_440 = new cjs.Graphics().p("EADQAm/QuggmqPqsMAxlgviQKPKsAAOgQgDOhqRJ2QpsJTtdAAQg0AAg0gCg");
	var mask_graphics_441 = new cjs.Graphics().p("EADtAm/QuhgaqYqjMAw9gwLQKYKjAMOgQAKOiqJJ+QpwJmtyAAIhHgBg");
	var mask_graphics_442 = new cjs.Graphics().p("EAEJAm/QuhgNqhqbMAwVgwzQKhKaAYOgQAWOhqBKHQpzJ6uHAAIgngBg");
	var mask_graphics_443 = new cjs.Graphics().p("EAEmAm/QuigCqpqRMAvsgxcQKpKSAkOfQAjOhp5KQQp2KNudAAIgFAAg");
	var mask_graphics_444 = new cjs.Graphics().p("A0SdAMAvDgyDQKyKJAwOfQAvOgpwKYQpvKXuhAKIgdABQuPAAqop/g");
	var mask_graphics_445 = new cjs.Graphics().p("Az+dUMAuZgyqQK7KAA8OeQA7OgpnKgQpnKfuhAWIg+ABQt6AAqkpqg");
	var mask_graphics_446 = new cjs.Graphics().p("AzqdnMAtvgzQQLDJ3BIOeQBHOfpeKnQpeKougAiQgwACgwAAQtmAAqfpXg");
	var mask_graphics_447 = new cjs.Graphics().p("AzVd7MAtDgz3QLMJuBUOdQBTOepVKwQpVKvugAuQhAADhAAAQtSAAqapCg");
	var mask_graphics_448 = new cjs.Graphics().p("AzBeOMAsYg0cQLUJlBhOcQBfOdpMK3QpNK3ufA6QhQAFhQAAQs/AAqVovg");
	var mask_graphics_449 = new cjs.Graphics().p("AysegMArsg1AQLcJcBtOaQBrOcpDK+QpDK/ufBGQhgAIhfAAQssAAqQodg");
	var mask_graphics_450 = new cjs.Graphics().p("AyXezMArAg1kQLkJRB5OaQB3Oao6LGQo6LGudBSQhxAKhuAAQsaAAqKoJg");
	var mask_graphics_451 = new cjs.Graphics().p("AyBfFMAqSg2IQLsJICFOYQCEOZoxLNQoxLOucBeQiBANh9AAQsHAAqEn3g");
	var mask_graphics_452 = new cjs.Graphics().p("AxsfXMAplg2rQL0I/CROVQCQOXooLVQonLVubBqQiRARiMAAQr1AAp+nlg");
	var mask_graphics_453 = new cjs.Graphics().p("AxWfoMAo3g3NQL7I1CeOVQCbOUoeLcQodLcuaB2QigAUibAAQrkAAp3nTg");
	var mask_graphics_454 = new cjs.Graphics().p("AxAf5MAoJg3uQMCIrCqOSQCnOToULiQoULjuYCCQivAZiqAAQrTAApwnCg");
	var mask_graphics_455 = new cjs.Graphics().p("EgQqAgKMAnag4QQMKIhC2ORQCzOQoKLqQoLLpuWCOQi/Aei4AAQrCAAppmxg");
	var mask_graphics_456 = new cjs.Graphics().p("EgQTAgbMAmrg4xQMRIXDBOPQDAONoBLxQoBLwuVCaQjNAijHAAQqxAAphmfg");
	var mask_graphics_457 = new cjs.Graphics().p("EgP9AgrMAl8g5QQMYINDNOLQDMOMn3L3Qn3L3uTClQjcAojVAAQqhAApamPg");
	var mask_graphics_458 = new cjs.Graphics().p("EgPmAg7MAlMg5wQMfIDDZOJQDYOJntL9QntL+uRCxQjrAujjAAQqRAApSl/g");
	var mask_graphics_459 = new cjs.Graphics().p("EgPPAhLMAkbg6PQMmH5DlOGQDkOGnjMEQnjMDuPC+Qj5AzjxAAQqBAApKlug");
	var mask_graphics_460 = new cjs.Graphics().p("EgO4AhaMAjrg6sQMsHuDxODQDwODnZMKQnZMKuMDJQkIA6j/AAQpxAApClfg");
	var mask_graphics_461 = new cjs.Graphics().p("EgOgAhpMAi5g7KQMzHkD9OAQD7N/nOMRQnPMQuKDUQkVBCkOAAQpiAAo4lQg");
	var mask_graphics_462 = new cjs.Graphics().p("EgOIAh4MAiIg7nQM5HZEIN9QEHN8nEMWQnFMXuGDgQkkBIkbAAQpTAAovlAg");
	var mask_graphics_463 = new cjs.Graphics().p("EgNxAiGMAhXg8CQM/HOEUN5QETN5m6McQm6McuEDsQkxBQkqAAQpDAAonkyg");
	var mask_graphics_464 = new cjs.Graphics().p("EgNYAiUMAgjg8eQNGHEEgN1QEeN2mvMhQmwMiuBD4Qk/BYk3AAQo1AAockkg");
	var mask_graphics_465 = new cjs.Graphics().p("EgNAAiiMAfxg85QNMG5ErNyQEqNxmlMnQmlMot+EDQlMBglFAAQonAAoSkVg");
	var mask_graphics_466 = new cjs.Graphics().p("EgMoAiwMAe/g9TQNRGtE3NuQE2NumbMsQmbMtt6EPQlZBplTAAQoYAAoJkHg");
	var mask_graphics_467 = new cjs.Graphics().p("EgMPAi9MAeLg9tQNXGjFDNqQFBNpmQMyQmQMyt3EaQlnBylhAAQoJAAn+j5g");
	var mask_graphics_468 = new cjs.Graphics().p("EgL2AjKMAdXg+GQNdGYFONlQFNNmmGM3QmFM3tzEmQl0B7lvAAQn7AAnzjsg");
	var mask_graphics_469 = new cjs.Graphics().p("EgLdAjWMAcjg+dQNiGMFaNhQFYNhl7M8Ql6M8twExQmACGl9AAQnsAAnpjgg");
	var mask_graphics_470 = new cjs.Graphics().p("EgLEAjiMAbvg+1QNoGBFlNdQFjNdlwNBQlwNAtrE9QmNCPmLAAQneAAnejTg");
	var mask_graphics_471 = new cjs.Graphics().p("EgKrAjuMAa7g/MQNtF2FwNYQFvNYllNGQllNFtoFIQmYCamaAAQnQAAnTjHg");
	var mask_graphics_472 = new cjs.Graphics().p("EgKRAj5MAaGg/hQNxFqF8NTQF6NTlaNLQlaNKtkFTQmkCkmoAAQnCAAnHi7g");
	var mask_graphics_473 = new cjs.Graphics().p("EgJ4AkFMAZRg/4QN3FfGGNPQGGNOlPNOQlPNPtfFeQmxCwm2AAQm1AAm7ivg");
	var mask_graphics_474 = new cjs.Graphics().p("EgJeAkPMAYchALQN7FTGSNJQGQNJlENTQlENTtaFqQm9C7nEAAQmnAAmvilg");
	var mask_graphics_475 = new cjs.Graphics().p("EgJEAkaMAXmhAgQOAFIGdNEQGbNEk5NXQk5NXtWF0QnHDHnTAAQmZAAmjiZg");
	var mask_graphics_476 = new cjs.Graphics().p("EgIqAkkMAWwhAzQOEE8GoM/QGnM+kuNbQkuNbtRGAQnTDTnhAAQmLAAmXiPg");
	var mask_graphics_477 = new cjs.Graphics().p("EgIPAkuMAV5hBGQOJEwGzM6QGxM4kjNfQkiNftMGLQneDfnxAAQl9AAmJiEg");
	var mask_graphics_478 = new cjs.Graphics().p("EgH1Ak3MAVEhBYQOMElG9M0QG9MzkYNiQkXNjtHGWQnpDsn/AAQlwAAl8h7g");
	var mask_graphics_479 = new cjs.Graphics().p("EgHaAlAMAUMhBpQOREZHIMuQHHMtkMNmQkMNntCGgQnzD5oPAAQlhAAlvhxg");
	var mask_graphics_480 = new cjs.Graphics().p("EgHAAlJMATWhB5QOUENHTMnQHSMokANpQkBNqs9GrQn9EHoeAAQlUAAlihog");
	var mask_graphics_481 = new cjs.Graphics().p("EgGlAlRMASfhCJQOYEBHeMiQHcMhj1NtQj2Nts3G2QoHEUouAAQlGAAlUhfg");
	var mask_graphics_482 = new cjs.Graphics().p("EgGKAlZMARohCYQObD1HoMcQHnMcjqNvQjpNwsyHAQoSEjo9AAQk4AAlGhXg");
	var mask_graphics_483 = new cjs.Graphics().p("EgFvAlhMAQwhCnQOfDqHzMVQHxMVjeNyQjfNzsrHLQocExpNAAQkqAAk4hOg");
	var mask_graphics_484 = new cjs.Graphics().p("EgFUAloMAP5hC0QOiDdH9MPQH7MPjSN1QjTN1smHWQolFApeAAQkbAAkqhHg");
	var mask_graphics_485 = new cjs.Graphics().p("EgE4AlvMAPBhDBQOkDRIHMIQIGMJjHN3QjHN4sgHgQouFPpuAAQkOAAkag/g");
	var mask_graphics_486 = new cjs.Graphics().p("EgEdAl2MAOJhDNQOnDEISMBQIQMCi8N6Qi7N7saHqQo3Ffp/AAQj/AAkMg4g");
	var mask_graphics_487 = new cjs.Graphics().p("EgEBAl8MANQhDZQOqC5IcL6QIaL7iwN8QiwN9sTH1QpAFvqQAAQjxAAj8gyg");
	var mask_graphics_488 = new cjs.Graphics().p("EgDmAmCMAMZhDkQOsCtImLzQIkL0ikN+QikOAsNH+QpJF/qhAAQjkAAjsgrg");
	var mask_graphics_489 = new cjs.Graphics().p("EgDKAmHMALghDtQOvCgIwLsQIuLtiZOAQiZOCsGIIQpRGQqzAAQjVAAjcgmg");
	var mask_graphics_490 = new cjs.Graphics().p("EgCuAmMMAKnhD2QOxCUI6LkQI4LliNODQiNODr/ITQpaGgrFAAQjGAAjMggg");
	var mask_graphics_491 = new cjs.Graphics().p("EgCTAmRMAJvhD/QO0CIJDLdQJCLdiCOFQiBOFr4IdQpiGxrXAAQi3AAi9gbg");
	var mask_graphics_492 = new cjs.Graphics().p("EgB3AmVMAI3hEHQO1B8JMLVQJMLWh2OGQh1OHryInQppHCrqAAQinAAitgWg");
	var mask_graphics_493 = new cjs.Graphics().p("EgBbAmZMAH+hEOQO2BvJXLOQJVLPhqOHQhqOIrqIwQpwHVr+AAQiYAAicgSg");
	var mask_graphics_494 = new cjs.Graphics().p("EgA/AmcMAHFhEUQO4BjJgLGQJeLHheOIQheOKrjI6Qp3HnsSAAQiHAAiMgPg");
	var mask_graphics_495 = new cjs.Graphics().p("EgAjAmfMAGMhEZQO6BWJpK+QJnK/hSOKQhSOKrcJEQp+H5smAAQh3AAh7gLg");
	var mask_graphics_496 = new cjs.Graphics().p("EgAHAmiMAFThEeQO7BKJyK2QJxK2hGOLQhHOMrUJNQqFIMs6AAQhnAAhqgIg");
	var mask_graphics_497 = new cjs.Graphics().p("EAAUAmkMAEbhEiQO8A+J7KtQJ6Kvg6OLQg7ONrMJWQqMIgtPAAQhXAAhZgGg");
	var mask_graphics_498 = new cjs.Graphics().p("EAAwAmmMADihElQO9AxKEKlQKDKmguOMQgvOOrFJfQqSI0tkAAQhGAAhIgEg");
	var mask_graphics_499 = new cjs.Graphics().p("EABNAmnMACohEoQO9AlKOKdQKMKegjOMQgjOOq9JpQqXJHt7AAQg1AAg1gCg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(259).to({graphics:mask_graphics_259,x:140,y:247.5}).wait(1).to({graphics:mask_graphics_260,x:138.5,y:247.5}).wait(1).to({graphics:mask_graphics_261,x:138,y:247.5}).wait(1).to({graphics:mask_graphics_262,x:139.4,y:247.5}).wait(1).to({graphics:mask_graphics_263,x:140.8,y:247.5}).wait(1).to({graphics:mask_graphics_264,x:142.2,y:247.5}).wait(1).to({graphics:mask_graphics_265,x:143.6,y:247.5}).wait(1).to({graphics:mask_graphics_266,x:145,y:247.5}).wait(1).to({graphics:mask_graphics_267,x:146.4,y:247.5}).wait(1).to({graphics:mask_graphics_268,x:147.8,y:247.6}).wait(1).to({graphics:mask_graphics_269,x:149.2,y:247.6}).wait(1).to({graphics:mask_graphics_270,x:150.6,y:247.6}).wait(1).to({graphics:mask_graphics_271,x:152,y:247.6}).wait(1).to({graphics:mask_graphics_272,x:153.4,y:247.6}).wait(1).to({graphics:mask_graphics_273,x:154.8,y:247.6}).wait(1).to({graphics:mask_graphics_274,x:156.2,y:247.7}).wait(1).to({graphics:mask_graphics_275,x:157.6,y:247.7}).wait(1).to({graphics:mask_graphics_276,x:159,y:247.7}).wait(1).to({graphics:mask_graphics_277,x:160.3,y:247.7}).wait(1).to({graphics:mask_graphics_278,x:161.7,y:247.7}).wait(1).to({graphics:mask_graphics_279,x:163.1,y:247.8}).wait(1).to({graphics:mask_graphics_280,x:164.4,y:247.8}).wait(1).to({graphics:mask_graphics_281,x:165.8,y:247.8}).wait(1).to({graphics:mask_graphics_282,x:167.2,y:247.8}).wait(1).to({graphics:mask_graphics_283,x:168.5,y:247.8}).wait(1).to({graphics:mask_graphics_284,x:169.9,y:247.8}).wait(1).to({graphics:mask_graphics_285,x:171.2,y:247.9}).wait(1).to({graphics:mask_graphics_286,x:172.5,y:247.9}).wait(1).to({graphics:mask_graphics_287,x:173.9,y:247.9}).wait(1).to({graphics:mask_graphics_288,x:175.2,y:247.9}).wait(1).to({graphics:mask_graphics_289,x:176.5,y:247.9}).wait(1).to({graphics:mask_graphics_290,x:177.8,y:247.9}).wait(1).to({graphics:mask_graphics_291,x:179.1,y:247.9}).wait(1).to({graphics:mask_graphics_292,x:180.4,y:247.9}).wait(1).to({graphics:mask_graphics_293,x:181.7,y:247.9}).wait(1).to({graphics:mask_graphics_294,x:183,y:248}).wait(1).to({graphics:mask_graphics_295,x:184.2,y:248}).wait(1).to({graphics:mask_graphics_296,x:185.5,y:248}).wait(1).to({graphics:mask_graphics_297,x:186.8,y:248}).wait(1).to({graphics:mask_graphics_298,x:188,y:248}).wait(1).to({graphics:mask_graphics_299,x:189.2,y:248}).wait(1).to({graphics:mask_graphics_300,x:190.5,y:248}).wait(1).to({graphics:mask_graphics_301,x:191.7,y:248}).wait(1).to({graphics:mask_graphics_302,x:192.9,y:248}).wait(1).to({graphics:mask_graphics_303,x:194.1,y:248}).wait(1).to({graphics:mask_graphics_304,x:195.3,y:248}).wait(1).to({graphics:mask_graphics_305,x:196.5,y:248}).wait(1).to({graphics:mask_graphics_306,x:197.6,y:248}).wait(1).to({graphics:mask_graphics_307,x:198.8,y:248}).wait(1).to({graphics:mask_graphics_308,x:199.9,y:248}).wait(1).to({graphics:mask_graphics_309,x:201.1,y:248}).wait(1).to({graphics:mask_graphics_310,x:202.2,y:248}).wait(1).to({graphics:mask_graphics_311,x:203.3,y:248}).wait(1).to({graphics:mask_graphics_312,x:204.4,y:248}).wait(1).to({graphics:mask_graphics_313,x:205.5,y:248.1}).wait(1).to({graphics:mask_graphics_314,x:206.6,y:248.1}).wait(1).to({graphics:mask_graphics_315,x:207.7,y:248.1}).wait(1).to({graphics:mask_graphics_316,x:208.7,y:248.1}).wait(1).to({graphics:mask_graphics_317,x:209.8,y:248.1}).wait(1).to({graphics:mask_graphics_318,x:210.8,y:248.1}).wait(1).to({graphics:mask_graphics_319,x:211.8,y:248.2}).wait(1).to({graphics:mask_graphics_320,x:212.8,y:248.2}).wait(1).to({graphics:mask_graphics_321,x:213.8,y:248.2}).wait(1).to({graphics:mask_graphics_322,x:214.8,y:248.2}).wait(1).to({graphics:mask_graphics_323,x:215.8,y:248.3}).wait(1).to({graphics:mask_graphics_324,x:216.7,y:248.3}).wait(1).to({graphics:mask_graphics_325,x:217.7,y:248.4}).wait(1).to({graphics:mask_graphics_326,x:218.6,y:248.4}).wait(1).to({graphics:mask_graphics_327,x:219.5,y:248.5}).wait(1).to({graphics:mask_graphics_328,x:220.4,y:248.5}).wait(1).to({graphics:mask_graphics_329,x:221.3,y:248.6}).wait(1).to({graphics:mask_graphics_330,x:222.2,y:248.6}).wait(1).to({graphics:mask_graphics_331,x:223,y:248.7}).wait(1).to({graphics:mask_graphics_332,x:223.9,y:248.7}).wait(1).to({graphics:mask_graphics_333,x:224.7,y:248.8}).wait(1).to({graphics:mask_graphics_334,x:225.5,y:248.8}).wait(1).to({graphics:mask_graphics_335,x:226.3,y:248.9}).wait(1).to({graphics:mask_graphics_336,x:227.1,y:248.9}).wait(1).to({graphics:mask_graphics_337,x:227.9,y:249}).wait(1).to({graphics:mask_graphics_338,x:228.6,y:249}).wait(1).to({graphics:mask_graphics_339,x:229.3,y:249.1}).wait(1).to({graphics:mask_graphics_340,x:230.1,y:249.1}).wait(1).to({graphics:mask_graphics_341,x:230.8,y:249.2}).wait(1).to({graphics:mask_graphics_342,x:231.4,y:249.2}).wait(1).to({graphics:mask_graphics_343,x:232.1,y:249.3}).wait(1).to({graphics:mask_graphics_344,x:232.8,y:249.3}).wait(1).to({graphics:mask_graphics_345,x:233.4,y:249.4}).wait(1).to({graphics:mask_graphics_346,x:234,y:249.4}).wait(1).to({graphics:mask_graphics_347,x:234.6,y:249.5}).wait(1).to({graphics:mask_graphics_348,x:235.2,y:249.5}).wait(1).to({graphics:mask_graphics_349,x:235.8,y:249.6}).wait(1).to({graphics:mask_graphics_350,x:236.3,y:249.6}).wait(1).to({graphics:mask_graphics_351,x:236.9,y:249.7}).wait(1).to({graphics:mask_graphics_352,x:237.4,y:249.7}).wait(1).to({graphics:mask_graphics_353,x:237.9,y:249.7}).wait(1).to({graphics:mask_graphics_354,x:238.4,y:249.8}).wait(1).to({graphics:mask_graphics_355,x:238.8,y:249.8}).wait(1).to({graphics:mask_graphics_356,x:239.3,y:249.8}).wait(1).to({graphics:mask_graphics_357,x:239.7,y:249.9}).wait(1).to({graphics:mask_graphics_358,x:240.1,y:249.9}).wait(1).to({graphics:mask_graphics_359,x:240.5,y:249.9}).wait(1).to({graphics:mask_graphics_360,x:240.9,y:249.9}).wait(1).to({graphics:mask_graphics_361,x:241.2,y:250}).wait(1).to({graphics:mask_graphics_362,x:241.6,y:250}).wait(1).to({graphics:mask_graphics_363,x:241.9,y:250}).wait(1).to({graphics:mask_graphics_364,x:242.2,y:250}).wait(1).to({graphics:mask_graphics_365,x:242.5,y:250}).wait(1).to({graphics:mask_graphics_366,x:242.8,y:250.1}).wait(1).to({graphics:mask_graphics_367,x:243,y:250.1}).wait(1).to({graphics:mask_graphics_368,x:243.2,y:250.1}).wait(1).to({graphics:mask_graphics_369,x:243.5,y:250.1}).wait(1).to({graphics:mask_graphics_370,x:243.7,y:250.1}).wait(1).to({graphics:mask_graphics_371,x:243.8,y:250.1}).wait(1).to({graphics:mask_graphics_372,x:244,y:250.2}).wait(1).to({graphics:mask_graphics_373,x:244.1,y:250.2}).wait(1).to({graphics:mask_graphics_374,x:244.2,y:250.2}).wait(1).to({graphics:mask_graphics_375,x:244.3,y:250.2}).wait(1).to({graphics:mask_graphics_376,x:244.4,y:250.2}).wait(1).to({graphics:mask_graphics_377,x:244.5,y:250.2}).wait(1).to({graphics:mask_graphics_378,x:244.5,y:250.3}).wait(1).to({graphics:mask_graphics_379,x:244.6,y:250.3}).wait(1).to({graphics:mask_graphics_380,x:244.6,y:250.3}).wait(1).to({graphics:mask_graphics_381,x:244.6,y:250.3}).wait(1).to({graphics:mask_graphics_382,x:244.5,y:250.3}).wait(1).to({graphics:mask_graphics_383,x:244.5,y:250.4}).wait(1).to({graphics:mask_graphics_384,x:244.5,y:250.4}).wait(1).to({graphics:mask_graphics_385,x:244.5,y:250.4}).wait(1).to({graphics:mask_graphics_386,x:244.5,y:250.5}).wait(1).to({graphics:mask_graphics_387,x:244.5,y:250.5}).wait(1).to({graphics:mask_graphics_388,x:244.5,y:250.5}).wait(1).to({graphics:mask_graphics_389,x:244.5,y:250.5}).wait(1).to({graphics:mask_graphics_390,x:244.5,y:250.6}).wait(1).to({graphics:mask_graphics_391,x:244.5,y:250.6}).wait(1).to({graphics:mask_graphics_392,x:244.5,y:250.6}).wait(1).to({graphics:mask_graphics_393,x:244.5,y:250.7}).wait(1).to({graphics:mask_graphics_394,x:244.5,y:250.7}).wait(1).to({graphics:mask_graphics_395,x:244.5,y:250.7}).wait(1).to({graphics:mask_graphics_396,x:244.5,y:250.7}).wait(1).to({graphics:mask_graphics_397,x:244.5,y:250.8}).wait(1).to({graphics:mask_graphics_398,x:244.5,y:250.8}).wait(1).to({graphics:mask_graphics_399,x:244.6,y:250.8}).wait(1).to({graphics:mask_graphics_400,x:244.6,y:250.8}).wait(1).to({graphics:mask_graphics_401,x:244.6,y:250.8}).wait(1).to({graphics:mask_graphics_402,x:244.6,y:250.9}).wait(1).to({graphics:mask_graphics_403,x:244.6,y:250.9}).wait(1).to({graphics:mask_graphics_404,x:244.6,y:250.9}).wait(1).to({graphics:mask_graphics_405,x:244.6,y:250.9}).wait(1).to({graphics:mask_graphics_406,x:244.6,y:250.9}).wait(1).to({graphics:mask_graphics_407,x:244.7,y:250.9}).wait(1).to({graphics:mask_graphics_408,x:244.7,y:250.9}).wait(1).to({graphics:mask_graphics_409,x:244.7,y:250.9}).wait(1).to({graphics:mask_graphics_410,x:244.7,y:250.9}).wait(1).to({graphics:mask_graphics_411,x:244.7,y:250.9}).wait(1).to({graphics:mask_graphics_412,x:244.7,y:250.9}).wait(1).to({graphics:mask_graphics_413,x:244.7,y:250.8}).wait(1).to({graphics:mask_graphics_414,x:244.8,y:250.8}).wait(1).to({graphics:mask_graphics_415,x:244.8,y:250.8}).wait(1).to({graphics:mask_graphics_416,x:244.8,y:250.8}).wait(1).to({graphics:mask_graphics_417,x:244.8,y:250.8}).wait(1).to({graphics:mask_graphics_418,x:244.8,y:250.7}).wait(1).to({graphics:mask_graphics_419,x:244.8,y:250.7}).wait(1).to({graphics:mask_graphics_420,x:244.8,y:250.7}).wait(1).to({graphics:mask_graphics_421,x:244.8,y:250.6}).wait(1).to({graphics:mask_graphics_422,x:244.8,y:250.6}).wait(1).to({graphics:mask_graphics_423,x:244.9,y:250.6}).wait(1).to({graphics:mask_graphics_424,x:244.9,y:250.5}).wait(1).to({graphics:mask_graphics_425,x:244.9,y:250.5}).wait(1).to({graphics:mask_graphics_426,x:244.9,y:250.4}).wait(1).to({graphics:mask_graphics_427,x:244.9,y:250.4}).wait(1).to({graphics:mask_graphics_428,x:244.9,y:250.3}).wait(1).to({graphics:mask_graphics_429,x:244.9,y:250.3}).wait(1).to({graphics:mask_graphics_430,x:245,y:250.2}).wait(1).to({graphics:mask_graphics_431,x:245,y:250.2}).wait(1).to({graphics:mask_graphics_432,x:245,y:250.1}).wait(1).to({graphics:mask_graphics_433,x:245,y:250.1}).wait(1).to({graphics:mask_graphics_434,x:245.1,y:250}).wait(1).to({graphics:mask_graphics_435,x:245.1,y:249.9}).wait(1).to({graphics:mask_graphics_436,x:245.1,y:249.9}).wait(1).to({graphics:mask_graphics_437,x:245.2,y:249.8}).wait(1).to({graphics:mask_graphics_438,x:245.2,y:249.8}).wait(1).to({graphics:mask_graphics_439,x:245.2,y:249.7}).wait(1).to({graphics:mask_graphics_440,x:245.3,y:249.7}).wait(1).to({graphics:mask_graphics_441,x:245.3,y:249.6}).wait(1).to({graphics:mask_graphics_442,x:245.4,y:249.6}).wait(1).to({graphics:mask_graphics_443,x:245.4,y:249.5}).wait(1).to({graphics:mask_graphics_444,x:245.5,y:249.5}).wait(1).to({graphics:mask_graphics_445,x:245.5,y:249.4}).wait(1).to({graphics:mask_graphics_446,x:245.6,y:249.4}).wait(1).to({graphics:mask_graphics_447,x:245.6,y:249.3}).wait(1).to({graphics:mask_graphics_448,x:245.7,y:249.3}).wait(1).to({graphics:mask_graphics_449,x:245.8,y:249.3}).wait(1).to({graphics:mask_graphics_450,x:245.8,y:249.2}).wait(1).to({graphics:mask_graphics_451,x:245.9,y:249.2}).wait(1).to({graphics:mask_graphics_452,x:246,y:249.2}).wait(1).to({graphics:mask_graphics_453,x:246,y:249.1}).wait(1).to({graphics:mask_graphics_454,x:246.1,y:249.1}).wait(1).to({graphics:mask_graphics_455,x:246.2,y:249.1}).wait(1).to({graphics:mask_graphics_456,x:246.2,y:249}).wait(1).to({graphics:mask_graphics_457,x:246.3,y:249}).wait(1).to({graphics:mask_graphics_458,x:246.4,y:249}).wait(1).to({graphics:mask_graphics_459,x:246.4,y:248.9}).wait(1).to({graphics:mask_graphics_460,x:246.5,y:248.9}).wait(1).to({graphics:mask_graphics_461,x:246.6,y:248.9}).wait(1).to({graphics:mask_graphics_462,x:246.6,y:248.8}).wait(1).to({graphics:mask_graphics_463,x:246.7,y:248.8}).wait(1).to({graphics:mask_graphics_464,x:246.7,y:248.8}).wait(1).to({graphics:mask_graphics_465,x:246.8,y:248.7}).wait(1).to({graphics:mask_graphics_466,x:246.8,y:248.7}).wait(1).to({graphics:mask_graphics_467,x:246.9,y:248.6}).wait(1).to({graphics:mask_graphics_468,x:246.9,y:248.6}).wait(1).to({graphics:mask_graphics_469,x:247,y:248.6}).wait(1).to({graphics:mask_graphics_470,x:247,y:248.5}).wait(1).to({graphics:mask_graphics_471,x:247.1,y:248.5}).wait(1).to({graphics:mask_graphics_472,x:247.1,y:248.4}).wait(1).to({graphics:mask_graphics_473,x:247.2,y:248.4}).wait(1).to({graphics:mask_graphics_474,x:247.2,y:248.4}).wait(1).to({graphics:mask_graphics_475,x:247.2,y:248.3}).wait(1).to({graphics:mask_graphics_476,x:247.3,y:248.3}).wait(1).to({graphics:mask_graphics_477,x:247.3,y:248.2}).wait(1).to({graphics:mask_graphics_478,x:247.3,y:248.2}).wait(1).to({graphics:mask_graphics_479,x:247.3,y:248.1}).wait(1).to({graphics:mask_graphics_480,x:247.4,y:248.1}).wait(1).to({graphics:mask_graphics_481,x:247.4,y:248}).wait(1).to({graphics:mask_graphics_482,x:247.4,y:248}).wait(1).to({graphics:mask_graphics_483,x:247.4,y:247.9}).wait(1).to({graphics:mask_graphics_484,x:247.4,y:247.9}).wait(1).to({graphics:mask_graphics_485,x:247.5,y:247.8}).wait(1).to({graphics:mask_graphics_486,x:247.5,y:247.8}).wait(1).to({graphics:mask_graphics_487,x:247.5,y:247.8}).wait(1).to({graphics:mask_graphics_488,x:247.5,y:247.7}).wait(1).to({graphics:mask_graphics_489,x:247.5,y:247.7}).wait(1).to({graphics:mask_graphics_490,x:247.5,y:247.6}).wait(1).to({graphics:mask_graphics_491,x:247.5,y:247.6}).wait(1).to({graphics:mask_graphics_492,x:247.5,y:247.5}).wait(1).to({graphics:mask_graphics_493,x:247.5,y:247.5}).wait(1).to({graphics:mask_graphics_494,x:247.5,y:247.5}).wait(1).to({graphics:mask_graphics_495,x:247.5,y:247.4}).wait(1).to({graphics:mask_graphics_496,x:247.5,y:247.4}).wait(1).to({graphics:mask_graphics_497,x:247.5,y:247.4}).wait(1).to({graphics:mask_graphics_498,x:247.5,y:247.4}).wait(1).to({graphics:mask_graphics_499,x:247.5,y:247.3}).wait(76));

	// 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(25,0,1).p("AMuakQpogtnAnBQnynzAArBQAArBHynzQHUnVKLgc");
	this.shape_2.setTransform(179.6,274.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(25,1,1).p("ATOvQQARB6AACAQAALCnzHyQnzHzrBAAQmyAAlji9");
	this.shape_3.setTransform(320.7,347.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(25,1,1).p("AaXj5QAQB6AAB/QAALCnzHzQnyHyrCAAQmxAAlki8Qjfh2jAjAQnynzAArCQAArBHynzQHznzLBAAQLCAAHyHzQGYGYBLIjg");
	this.shape_4.setTransform(275,275.1);

	var maskedShapeInstanceList = [this.shape_2,this.shape_3,this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},259).to({state:[{t:this.shape_4}]},32).wait(284));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_9 = new cjs.Graphics().p("ADB+BQN7gqKVJlQKTJnAsONQArOOpXKhQpXKjt6Aqg");
	var mask_1_graphics_10 = new cjs.Graphics().p("ACm9+QN6g2KcJdQKcJfA2OMQA3OOpPKoQpPKqt6A1g");
	var mask_1_graphics_11 = new cjs.Graphics().p("ACL98QN5hAKkJVQKjJWBBOMQBCONpGKvQpHKxt5BBg");
	var mask_1_graphics_12 = new cjs.Graphics().p("ABw94QN4hMKrJNQKqJOBNOLQBNOMo9K2Qo/K4t4BLg");
	var mask_1_graphics_13 = new cjs.Graphics().p("ABV91QN3hWKyJEQKyJFBYOKQBYOLo1K+Qo2K/t4BWg");
	var mask_1_graphics_14 = new cjs.Graphics().p("AA59xQN3hhK5I8QK5I9BjOJQBjOJosLFQouLGt2Bhg");
	var mask_1_graphics_15 = new cjs.Graphics().p("AAe9sQN1hsLBIzQK/I0BvOIQBuOIokLMQokLMt2Bsg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AAD9nQN0h3LHIrQLHIrB5OHQB6OGobLSQocLUt0B3g");
	var mask_1_graphics_17 = new cjs.Graphics().p("AgX9hQNxiCLPIiQLNIiCEOGQCFOEoSLZQoTLatzCCg");
	var mask_1_graphics_18 = new cjs.Graphics().p("Agy9bQNwiMLVIYQLUIaCPOEQCQODoJLfQoKLgtxCNg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AhN9UQNuiYLcIQQLaIRCbOCQCaOBoALlQoBLntvCYg");
	var mask_1_graphics_20 = new cjs.Graphics().p("Aho9NQNsiiLiIGQLhIICmOAQClN/n2LsQn4LttuCig");
	var mask_1_graphics_21 = new cjs.Graphics().p("AiD9GQNqisLpH9QLnH/CxN+QCwN9ntLxQnvL0trCtg");
	var mask_1_graphics_22 = new cjs.Graphics().p("Aie8+QNoi3LvH0QLuH2C7N7QC8N7nlL4QnlL5tpC4g");
	var mask_1_graphics_23 = new cjs.Graphics().p("Ai581QNmjCL1HrQL0HsDHN5QDGN5nbL9QncMAtnDCg");
	var mask_1_graphics_24 = new cjs.Graphics().p("AjT8sQNjjNL7HiQL6HjDRN2QDSN2nSMEQnTMFtkDNg");
	var mask_1_graphics_25 = new cjs.Graphics().p("Aju8iQNhjYMBHYQMAHaDcN0QDcNznIMJQnJMLtiDYg");
	var mask_1_graphics_26 = new cjs.Graphics().p("AkJ8YQNfjjMGHPQMGHQDnNyQDnNwm+MPQnAMQtfDjg");
	var mask_1_graphics_27 = new cjs.Graphics().p("Akj8OQNcjtMMHFQMLHHDyNuQDyNum1MUQm2MWtdDtg");
	var mask_1_graphics_28 = new cjs.Graphics().p("Ak98DQNYj3MSG7QMRG9D9NsQD9NqmsMaQmsMbtaD3g");
	var mask_1_graphics_29 = new cjs.Graphics().p("AlY73QNWkCMXGxQMXG0EHNoQEINnmiMfQmjMgtWEDg");
	var mask_1_graphics_30 = new cjs.Graphics().p("Aly7rQNTkNMcGoQMcGpESNmQESNkmYMkQmYMltUENg");
	var mask_1_graphics_31 = new cjs.Graphics().p("AmM7fQNPkXMiGeQMhGgEdNhQEdNhmOMpQmPMqtQEXg");
	var mask_1_graphics_32 = new cjs.Graphics().p("Amm7SQNMkhMnGUQMmGVEnNfQEoNdmEMtQmFMwtNEhg");
	var mask_1_graphics_33 = new cjs.Graphics().p("AnA7EQNJksMrGKQMsGMEyNaQEyNZl7MzQl7M0tJEsg");
	var mask_1_graphics_34 = new cjs.Graphics().p("AnZ63QNEk2MxGAQMwGCE8NXQE9NVlwM3QlxM5tGE2g");
	var mask_1_graphics_35 = new cjs.Graphics().p("Anz6oQNBlBM1F2QM1F4FHNSQFHNSlmM8QlnM9tCFAg");
	var mask_1_graphics_36 = new cjs.Graphics().p("AoM6ZQM9lLM5FsQM6FtFRNPQFSNNlcNAQldNCs+FKg");
	var mask_1_graphics_37 = new cjs.Graphics().p("Aom6KQM5lVM/FiQM9FjFcNKQFcNJlSNFQlSNFs6FVg");
	var mask_1_graphics_38 = new cjs.Graphics().p("Ao/56QM1lgNDFYQNCFZFmNGQFmNFlINIQlINKs1Ffg");
	var mask_1_graphics_39 = new cjs.Graphics().p("ApY5qQMwlqNHFOQNHFOFwNCQFxNAk+NNQk9NNsyFqg");
	var mask_1_graphics_40 = new cjs.Graphics().p("Apx5aQMslzNLFDQNLFEF6M9QF7M8kzNQQkzNSstFzg");
	var mask_1_graphics_41 = new cjs.Graphics().p("AqK5JQMol9NPE4QNOE6GFM5QGFM3kpNUQkpNVsoF9g");
	var mask_1_graphics_42 = new cjs.Graphics().p("Aqi43QMjmHNSEuQNTEvGOM0QGPMykeNXQkeNZskGIg");
	var mask_1_graphics_43 = new cjs.Graphics().p("Aq74lQMemRNXEjQNWElGZMvQGZMtkUNbQkUNcsfGSg");
	var mask_1_graphics_44 = new cjs.Graphics().p("ArT4TQMZmbNaEZQNaEbGjMpQGjMokJNfQkKNfsaGbg");
	var mask_1_graphics_45 = new cjs.Graphics().p("Arr4AQMUmlNdEPQNdEQGtMkQGtMjj+NhQj/NjsVGlg");
	var mask_1_graphics_46 = new cjs.Graphics().p("AsD3sQMPmvNhEEQNgEFG3MfQG2Mej0NkQj0NmsQGvg");
	var mask_1_graphics_47 = new cjs.Graphics().p("Asb3ZQMLm4NjD5QNjD7HBMZQHAMYjpNoQjqNpsKG4g");
	var mask_1_graphics_48 = new cjs.Graphics().p("Asy3FQMFnBNmDuQNmDwHLMUQHKMTjfNqQjfNssFHBg");
	var mask_1_graphics_49 = new cjs.Graphics().p("AtK2wQMAnLNpDjQNpDmHUMOQHUMNjUNtQjUNusAHMg");
	var mask_1_graphics_50 = new cjs.Graphics().p("Ath2bQL6nVNsDZQNsDbHdMIQHeMHjJNwQjKNxr6HVg");
	var mask_1_graphics_51 = new cjs.Graphics().p("At42FQL0neNuDOQNvDPHnMCQHnMCi+NyQi/Nzr0Heg");
	var mask_1_graphics_52 = new cjs.Graphics().p("AuP1wQLunnNxDDQNyDFHwL8QHwL8izN0Qi0N2ruHng");
	var mask_1_graphics_53 = new cjs.Graphics().p("Aum1ZQLpnxNzC4QN0C6H5L2QH6L2ipN2QipN4roHxg");
	var mask_1_graphics_54 = new cjs.Graphics().p("Au81DQLin5N2CtQN2CvIDLwQIDLwieN3QieN7rjH5g");
	var mask_1_graphics_55 = new cjs.Graphics().p("AvT0rQLcoDN4CiQN4CkINLqQIMLpiTN6QiTN8rdICg");
	var mask_1_graphics_56 = new cjs.Graphics().p("Avp0UQLWoMN6CYQN6CZIVLjQIVLjiIN7QiIN+rWIMg");
	var mask_1_graphics_57 = new cjs.Graphics().p("Av/z8QLQoVN7CNQN8COIfLcQIeLdh9N8Qh+OArPIVg");
	var mask_1_graphics_58 = new cjs.Graphics().p("AwUzkQLIodN9CBQN+CDIoLWQInLWhyN+QhzOBrIIeg");
	var mask_1_graphics_59 = new cjs.Graphics().p("AwqzLQLComN/B2QN/B4IwLPQIxLPhoOAQhnOCrCImg");
	var mask_1_graphics_60 = new cjs.Graphics().p("Aw/yyQK7ovOABsQOBBtI5LHQI5LIhcOBQhdOEq7Ivg");
	var mask_1_graphics_61 = new cjs.Graphics().p("AxVyYQK1o4OBBgQODBiJBLBQJCLBhROCQhSOFq0I3g");
	var mask_1_graphics_62 = new cjs.Graphics().p("Axpx+QKtpAODBVQODBXJKK5QJLK6hHODQhGOGqtJAg");
	var mask_1_graphics_63 = new cjs.Graphics().p("Ax+xkQKmpJOEBLQOEBLJTKzQJTKyg7OEQg8OHqmJIg");
	var mask_1_graphics_64 = new cjs.Graphics().p("AyTxJQKgpROEA/QOFBAJcKrQJbKsgwOEQgwOHqgJRg");
	var mask_1_graphics_65 = new cjs.Graphics().p("AynwuQKYpZOFAzQOGA2JkKkQJjKjglOFQglOIqYJZg");
	var mask_1_graphics_66 = new cjs.Graphics().p("Ay7wTQKQphOGApQOHAqJsKcQJsKcgaOGQgaOIqRJhg");
	var mask_1_graphics_67 = new cjs.Graphics().p("AzPv3QKJppOGAdQOIAfJ0KVQJ0KUgPOGQgPOIqKJqg");
	var mask_1_graphics_68 = new cjs.Graphics().p("AzjvbQKCpxOGASQOIAUJ8KNQJ8KMgEOGQgEOJqBJxg");
	var mask_1_graphics_69 = new cjs.Graphics().p("Az2u/QJ6p5OGAIQOIAIKEKFQKEKFAHOGQAIOJp6J5g");
	var mask_1_graphics_70 = new cjs.Graphics().p("A0KuiQJyqBOHgEQOIgCKMJ9QKMJ9ASOGQASOIpyKBg");
	var mask_1_graphics_71 = new cjs.Graphics().p("A0duEQJqqJOHgPQOIgOKUJ1QKUJ1AdOFQAdOJpqKJg");
	var mask_1_graphics_72 = new cjs.Graphics().p("A0wtnQJjqQOGgaQOIgZKbJtQKcJsAoOFQAoOIpiKRg");
	var mask_1_graphics_73 = new cjs.Graphics().p("A1CtJQJaqYOGglQOIgkKiJkQKjJlA0OEQAzOIpaKYg");
	var mask_1_graphics_74 = new cjs.Graphics().p("A1VsrQJSqfOGgxQOHguKqJcQKrJcA+OEQA/OGpSKgg");
	var mask_1_graphics_75 = new cjs.Graphics().p("A1nsMQJKqnOFg7QOGg6KyJTQKyJUBJODQBKOGpKKng");
	var mask_1_graphics_76 = new cjs.Graphics().p("A15rtQJCquOEhHQOGhFK5JLQK5JLBUOCQBVOFpCKug");
	var mask_1_graphics_77 = new cjs.Graphics().p("A2KrOQI5q1ODhSQOFhQLAJCQLAJDBgOBQBfOEo5K1g");
	var mask_1_graphics_78 = new cjs.Graphics().p("A2cqvQIxq8OChdQOEhbLHI6QLHI6BrOAQBqOCowK8g");
	var mask_1_graphics_79 = new cjs.Graphics().p("A2tqPQIorDOChoQOChmLOIxQLOIxB2N/QB1OBooLDg");
	var mask_1_graphics_80 = new cjs.Graphics().p("A2+pvQIfrJOBh0QOAhxLWIoQLVIoCAN9QCBOAogLKg");
	var mask_1_graphics_81 = new cjs.Graphics().p("A3PpOQIXrRN/h+QN/h8LcIfQLcIfCLN8QCMN+oXLQg");
	var mask_1_graphics_82 = new cjs.Graphics().p("A3fouQIOrXN+iJQN9iHLiIWQLjIWCWN6QCWN8oNLXg");
	var mask_1_graphics_83 = new cjs.Graphics().p("A3voNQIFrdN8iUQN7iTLpINQLpINChN4QCiN7oFLdg");
	var mask_1_graphics_84 = new cjs.Graphics().p("A3/nrQH8rkN6ifQN6ieLvIEQLvIECtN2QCsN5n8Ljg");
	var mask_1_graphics_85 = new cjs.Graphics().p("A4OnKQHyrqN5iqQN3ioL2H6QL1H7C3N0QC4N2nzLqg");
	var mask_1_graphics_86 = new cjs.Graphics().p("A4emoQHqrwN2i1QN2i0L7HyQL8HxDCNxQDCN1nqLwg");
	var mask_1_graphics_87 = new cjs.Graphics().p("A4tmGQHhr2N0jAQNzi+MCHnQMCHoDMNvQDNNyngL2g");
	var mask_1_graphics_88 = new cjs.Graphics().p("A47ljQHXr8NxjLQNxjKMIHfQMIHeDXNtQDYNvnXL8g");
	var mask_1_graphics_89 = new cjs.Graphics().p("A5KlBQHOsCNvjVQNujVMOHVQMNHVDjNqQDiNtnOMBg");
	var mask_1_graphics_90 = new cjs.Graphics().p("A5YkeQHEsHNtjhQNsjfMTHLQMTHLDtNnQDtNqnEMIg");
	var mask_1_graphics_91 = new cjs.Graphics().p("A5mj7QG7sNNqjrQNpjqMYHBQMZHCD4NkQD4Nnm7MNg");
	var mask_1_graphics_92 = new cjs.Graphics().p("A5zjXQGxsTNnj2QNmj1MeG4QMeG3ECNiQEDNkmxMSg");
	var mask_1_graphics_93 = new cjs.Graphics().p("A6Ai0QGnsXNkkBQNjkAMjGuQMkGuENNeQENNgmoMYg");
	var mask_1_graphics_94 = new cjs.Graphics().p("A6NiQQGesdNgkLQNgkKMpGjQMpGkEXNbQEXNdmdMdg");
	var mask_1_graphics_95 = new cjs.Graphics().p("A6ahsQGUsiNdkWQNdkVMuGaQMuGaEhNXQEjNamUMig");
	var mask_1_graphics_96 = new cjs.Graphics().p("A6mhHQGKsnNakhQNZkgMzGQQMzGQEsNUQEtNWmKMng");
	var mask_1_graphics_97 = new cjs.Graphics().p("A6ygjQGAssNWkrQNWkqM4GGQM3GFE3NQQE3NTmAMsg");
	var mask_1_graphics_98 = new cjs.Graphics().p("A69ABQF2swNSk2QNSk0M8F7QM9F8FBNMQFCNPl3Mxg");
	var mask_1_graphics_99 = new cjs.Graphics().p("A7JAmQFss0NPlBQNOk/NBFyQNBFxFLNIQFMNLlsM1g");
	var mask_1_graphics_100 = new cjs.Graphics().p("A7UBLQFis5NLlKQNKlKNFFnQNGFnFWNFQFWNGliM6g");
	var mask_1_graphics_101 = new cjs.Graphics().p("A7eBxQFYs+NGlVQNGlUNKFdQNKFdFgNAQFgNClYM/g");
	var mask_1_graphics_102 = new cjs.Graphics().p("A7pCWQFOtBNClgQNCleNOFSQNOFTFqM7QFrM/lONCg");
	var mask_1_graphics_103 = new cjs.Graphics().p("A7zC8QFEtGM9lpQM+lpNSFIQNSFIF1M3QF1M6lENHg");
	var mask_1_graphics_104 = new cjs.Graphics().p("A78DiQE5tKM5l0QM5lyNWE9QNWE+F/MyQF/M1k5NLg");
	var mask_1_graphics_105 = new cjs.Graphics().p("A8GEIQEvtNM1l/QM0l8NaEzQNaEyGJMuQGJMxkvNOg");
	var mask_1_graphics_106 = new cjs.Graphics().p("A8PEuQEltRMwmIQMvmHNeEoQNeEpGSMpQGTMrkkNSg");
	var mask_1_graphics_107 = new cjs.Graphics().p("A8XFVQEatVMrmSQMqmRNiEdQNhEeGcMkQGdMnkaNWg");
	var mask_1_graphics_108 = new cjs.Graphics().p("A8gF7QEQtYMmmcQMmmbNkETQNlETGmMfQGnMikPNZg");
	var mask_1_graphics_109 = new cjs.Graphics().p("A8oGiQEFtcMhmmQMhmlNoEJQNoEIGwMaQGxMckFNdg");
	var mask_1_graphics_110 = new cjs.Graphics().p("A8vHJQD6tfMcmwQMbmvNrD+QNsD+G5MUQG7MXj7Ngg");
	var mask_1_graphics_111 = new cjs.Graphics().p("A83HwQDwtiMWm6QMXm4NuDyQNuDzHDMPQHEMSjvNjg");
	var mask_1_graphics_112 = new cjs.Graphics().p("A8+IXQDltlMRnDQMSnDNwDoQNxDoHNMKQHOMMjlNmg");
	var mask_1_graphics_113 = new cjs.Graphics().p("A9EI+QDatnMLnOQMMnMNzDeQN0DdHXMFQHXMFjaNpg");
	var mask_1_graphics_114 = new cjs.Graphics().p("A9LJmQDQtrMFnXQMHnVN2DSQN2DTHgL/QHhL/jQNsg");
	var mask_1_graphics_115 = new cjs.Graphics().p("A9RKNQDFttMAngQMAnfN5DHQN5DIHpL5QHqL6jFNtg");
	var mask_1_graphics_116 = new cjs.Graphics().p("A9WK1QC6tvL5nqQL7npN7C9QN7C8HzLzQHzL0i6Nwg");
	var mask_1_graphics_117 = new cjs.Graphics().p("A9cLdQCwtyLznzQL1nyN9CxQN9CyH8LtQH9LtivNzg");
	var mask_1_graphics_118 = new cjs.Graphics().p("A9hMEQCltzLtn9QLvn7N/CmQOACnIELnQIGLnikN1g");
	var mask_1_graphics_119 = new cjs.Graphics().p("A9lMsQCZt1LnoGQLpoFOACcQOCCbIOLhQIPLhiZN2g");
	var mask_1_graphics_120 = new cjs.Graphics().p("A9qNUQCPt3LhoPQLhoOODCQQOECRIXLaQIYLaiPN5g");
	var mask_1_graphics_121 = new cjs.Graphics().p("A9uN8QCEt6LaoXQLcoXOECGQOFCFIgLTQIhLUiEN7g");
	var mask_1_graphics_122 = new cjs.Graphics().p("A9xOlQB4t8LUohQLVofOGB6QOHB6IoLNQIqLNh5N8g");
	var mask_1_graphics_123 = new cjs.Graphics().p("A91PNQBut+LNopQLOooOHBvQOJBvIxLGQIzLGhuN+g");
	var mask_1_graphics_124 = new cjs.Graphics().p("A94P1QBjt/LGoyQLHoxOJBkQOKBkI6K/QI7LAhjN+g");
	var mask_1_graphics_125 = new cjs.Graphics().p("A97QeQBYuBK/o6QLBo7OKBZQOKBZJDK4QJEK5hYOAg");
	var mask_1_graphics_126 = new cjs.Graphics().p("A99RGQBNuBK4pEQK5pDOLBOQOMBOJLKxQJNKxhNOCg");
	var mask_1_graphics_127 = new cjs.Graphics().p("A9/RuQBCuCKxpMQKypLOMBCQOMBDJUKqQJVKqhCOCg");
	var mask_1_graphics_128 = new cjs.Graphics().p("A+BSXQA3uDKqpVQKqpUONA4QOOA3JcKjQJdKjg3ODg");
	var mask_1_graphics_129 = new cjs.Graphics().p("A+CS/QAsuDKipdQKjpcONAsQOPAsJkKbQJlKbgsOEg");
	var mask_1_graphics_130 = new cjs.Graphics().p("A+DToQAhuEKaplQKcplOOAhQOOAhJtKUQJtKTggOFg");
	var mask_1_graphics_131 = new cjs.Graphics().p("A+EUQQAWuEKTptQKUptOOAVQOPAWJ1KMQJ1KMgVOFg");
	var mask_1_graphics_132 = new cjs.Graphics().p("A+EU5QAKuFKMp1QKMp1OOAKQOQALJ8KEQJ+KFgLOFg");
	var mask_1_graphics_133 = new cjs.Graphics().p("A0BiiQKEp9OPgBQOPAAKEJ8QKGJ9AAOFMhEvAACQgBuFKEp9g");
	var mask_1_graphics_134 = new cjs.Graphics().p("A0UidQJ9qFOOgLQOPgMKMJ1QKOJ0ALOFMhEvAA5QgMuFJ8qGg");
	var mask_1_graphics_135 = new cjs.Graphics().p("A0miXQJ1qNOOgWQOPgXKTJsQKVJtAXOFMhEuABuQgXuFJ0qNg");
	var mask_1_graphics_136 = new cjs.Graphics().p("A04iRQJtqUONgiQOPgiKbJkQKdJkAhOFMhEsAClQgiuFJsqVg");
	var mask_1_graphics_137 = new cjs.Graphics().p("A1KiKQJlqdONgtQOOgtKjJcQKkJcAtOFMhEqADaQgtuEJjqcg");
	var mask_1_graphics_138 = new cjs.Graphics().p("A1biEQJdqkOMg4QOOg5KqJUQKrJUA4OEMhEnAERQg4uEJbqkg");
	var mask_1_graphics_139 = new cjs.Graphics().p("A1rh9QJUqrOLhEQONhEKyJMQKyJMBDODMhEjAFGQhDuDJTqrg");
	var mask_1_graphics_140 = new cjs.Graphics().p("A18h2QJMqzOLhOQOMhPK4JDQK6JDBOOCMhEfAF9QhOuDJKqyg");
	var mask_1_graphics_141 = new cjs.Graphics().p("A2LhvQJDq6OJhaQOLhaLAI7QLBI7BZOBMhEaAGyQhZuBJCq6g");
	var mask_1_graphics_142 = new cjs.Graphics().p("A2bhoQI7rAOIhlQOKhmLHIyQLHIyBkOBMhEUAHoQhkuBI5rBg");
	var mask_1_graphics_143 = new cjs.Graphics().p("A2qhgQIyrIOHhwQOJhwLNIpQLPIpBvN/MhEOAIeQhvt/IwrIg");
	var mask_1_graphics_144 = new cjs.Graphics().p("A24hYQIprPOGh7QOGh7LVIgQLVIgB6N+MhEHAJTQh6t9IorPg");
	var mask_1_graphics_145 = new cjs.Graphics().p("A3HhQQIgrVOGiHQOEiGLbIXQLcIZCFN7MhD/AKJQiFt8IerWg");
	var mask_1_graphics_146 = new cjs.Graphics().p("A3UhIQIXrcODiRQODiSLhIPQLjIPCQN6MhD3AK+QiQt6IWrdg");
	var mask_1_graphics_147 = new cjs.Graphics().p("A3ig/QIOrjOCicQOBidLoIGQLpIGCbN4MhDuAL0Qibt5IMrjg");
	var mask_1_graphics_148 = new cjs.Graphics().p("A3ug2QIFrqN/inQN/ioLuH9QLwH9CmN2MhDlAMpQimt3IErpg");
	var mask_1_graphics_149 = new cjs.Graphics().p("A37gtQH8rwN+izQN8iyL1HzQL1H0CxN0MhDaANeQixt1H6rvg");
	var mask_1_graphics_150 = new cjs.Graphics().p("A4HgkQHzr2N7i+QN6i9L7HqQL8HrC7NxMhDPAOTQi8tyHxr2g");
	var mask_1_graphics_151 = new cjs.Graphics().p("A4SgbQHpr8N5jIQN4jJMAHhQMCHhDGNwMhDDAPIQjHtxHor8g");
	var mask_1_graphics_152 = new cjs.Graphics().p("A4dgRQHfsCN3jUQN1jTMGHXQMIHYDRNtMhC3AP9QjStuHfsCg");
	var mask_1_graphics_153 = new cjs.Graphics().p("A4ogHQHWsIN0jeQNzjfMMHOQMNHODcNrMhCrAQxQjctsHVsHg");
	var mask_1_graphics_154 = new cjs.Graphics().p("A4yACQHMsNNxjpQNwjpMSHEQMTHFDnNnMhCdARmQjntpHLsOg");
	var mask_1_graphics_155 = new cjs.Graphics().p("A48AMQHDsSNuj0QNtj0MXG6QMZG7DxNlMhCPASaQjxtmHBsUg");
	var mask_1_graphics_156 = new cjs.Graphics().p("A5FAWQG5sXNrj/QNqj/McGxQMeGxD9NiMhCBATOQj8tjG4sag");
	var mask_1_graphics_157 = new cjs.Graphics().p("A5OAhQGvsdNokKQNnkJMhGnQMkGoEHNeMhBxAUCQkHtgGusfg");
	var mask_1_graphics_158 = new cjs.Graphics().p("A5XAsQGmsjNkkUQNkkUMnGdQMoGeESNcMhBhAU1QkStdGkskg");
	var mask_1_graphics_159 = new cjs.Graphics().p("A5fA3QGcsoNhkfQNgkeMsGTQMtGUEdNYMhBRAVpQkctaGaspg");
	var mask_1_graphics_160 = new cjs.Graphics().p("A5mBCQGRstNekpQNckpMxGJQMzGKEmNVMhA/AWcQkmtWGQsvg");
	var mask_1_graphics_161 = new cjs.Graphics().p("A5tBOQGHsyNak0QNZk0M1F/QM4GAExNRMhAtAXPQkxtSGGszg");
	var mask_1_graphics_162 = new cjs.Graphics().p("A50BZQF9s2NWk/QNVk+M7F1QM7F2E8NNMhAaAYCQk8tPF8s4g");
	var mask_1_graphics_163 = new cjs.Graphics().p("A56BlQFzs7NSlJQNRlJM/FrQNAFsFGNJMhAHAY1QlGtLFys9g");
	var mask_1_graphics_164 = new cjs.Graphics().p("A6ABxQFptANOlTQNNlTNDFhQNFFhFQNGMg/zAZmQlQtGFntCg");
	var mask_1_graphics_165 = new cjs.Graphics().p("A6FB9QFftENJldQNJleNHFWQNKFYFaNBMg/fAaZQlatDFdtGg");
	var mask_1_graphics_166 = new cjs.Graphics().p("A6KCKQFVtJNFloQNEloNMFNQNNFNFlM9Mg/KAbKQlls+FTtKg");
	var mask_1_graphics_167 = new cjs.Graphics().p("A6OCWQFKtMNAlyQNAlzNQFCQNRFDFwM5Mg+0Ab7Qlws5FJtPg");
	var mask_1_graphics_168 = new cjs.Graphics().p("A6SCjQE/tQM9l9QM7l8NTE3QNWE4F5M2Mg+eAcsQl5s2E+tSg");
	var mask_1_graphics_169 = new cjs.Graphics().p("A6WCwQE2tUM3mHQM2mHNYEuQNZEtGDMxMg+HAddQmDsxEztWg");
	var mask_1_graphics_170 = new cjs.Graphics().p("A6ZC9QErtYMzmRQMxmQNbEiQNdEjGNMsMg9vAeOQmNssEotag");
	var mask_1_graphics_171 = new cjs.Graphics().p("A6bDLQEgtcMtmbQMtmbNfEYQNgEZGXMnMg9XAe+QmXsnEetdg");
	var mask_1_graphics_172 = new cjs.Graphics().p("A6dDYQEVtfMpmlQMnmlNiEOQNkEOGhMiMg8+AfuQmisiEUthg");
	var mask_1_graphics_173 = new cjs.Graphics().p("A6fDmQELtjMjmvQMimuNmEDQNnEDGrMdMg8lAgeQmssdEJtkg");
	var mask_1_graphics_174 = new cjs.Graphics().p("A6gD0QEAtmMem5QMdm4NoD4QNqD5G2MXMg8MAhOQm1sYD+tng");
	var mask_1_graphics_175 = new cjs.Graphics().p("A6gECQD1tqMYnCQMXnCNsDuQNtDuG/MSMg7xAh9Qm/sSD0trg");
	var mask_1_graphics_176 = new cjs.Graphics().p("A6hEQQDrtsMSnMQMSnMNvDjQNwDjHIMNMg7WAisQnIsNDotug");
	var mask_1_graphics_177 = new cjs.Graphics().p("A6gEeQDftvMNnVQMMnWNxDYQNzDZHSMHMg66AjaQnSsHDetxg");
	var mask_1_graphics_178 = new cjs.Graphics().p("A6gEtQDVtyMHnfQMGnfN0DNQN2DOHbMBMg6eAkJQncsCDTtzg");
	var mask_1_graphics_179 = new cjs.Graphics().p("A6fE8QDKt1MCnoQMAnpN2DCQN4DDHlL8Mg6CAk2Qnlr7DIt2g");
	var mask_1_graphics_180 = new cjs.Graphics().p("A6dFLQC/t3L7nyQL6nyN5C3QN6C4HvL2Mg5lAlkQnur2C9t4g");
	var mask_1_graphics_181 = new cjs.Graphics().p("A6bFaQC0t6L1n7QL0n7N7CsQN9CtH3LwMg5GAmRQn4rwCyt6g");
	var mask_1_graphics_182 = new cjs.Graphics().p("A6YFpQCpt8LuoEQLvoFN8CiQN/CiIBLpMg4oAm+QoCrpCot9g");
	var mask_1_graphics_183 = new cjs.Graphics().p("A6VF4QCet9LooOQLooON+CXQOBCXIKLjMg4JAnqQoKrjCct/g");
	var mask_1_graphics_184 = new cjs.Graphics().p("A6SGIQCTuALioXQLioXOACMQOCCMITLdMg3qAoWQoTrdCRuAg");
	var mask_1_graphics_185 = new cjs.Graphics().p("A6OGXQCIuBLbogQLbogOCCBQOECBIcLXMg3KApBQocrWCGuDg");
	var mask_1_graphics_186 = new cjs.Graphics().p("A6JGnQB8uDLVopQLUopODB2QOGB2IlLQMg2pAptQolrQB7uEg");
	var mask_1_graphics_187 = new cjs.Graphics().p("A6FG3QByuELOoyQLNoyOFBrQOHBrIuLJMg2IAqYQovrJBwuGg");
	var mask_1_graphics_188 = new cjs.Graphics().p("A5/HHQBmuGLHo6QLHo7OFBgQOJBgI2LCMg1mArCQo3rCBluHg");
	var mask_1_graphics_189 = new cjs.Graphics().p("A55HXQBbuHLApDQK/pDOHBVQOJBVJAK7Mg1FArsQo/q8BauIg");
	var mask_1_graphics_190 = new cjs.Graphics().p("A5zHoQBQuIK4pMQK5pMOIBKQOKBKJIK0Mg0iAsVQpIq0BPuJg");
	var mask_1_graphics_191 = new cjs.Graphics().p("A5tH4QBGuJKxpUQKxpUOIA+QOMA/JQKtMgz+As+QpRqtBDuKg");
	var mask_1_graphics_192 = new cjs.Graphics().p("A5lIJQA5uKKqpdQKqpdOJA0QOMA0JaKlMgzcAtnQpZqlA5uLg");
	var mask_1_graphics_193 = new cjs.Graphics().p("A5eIaQAvuLKiplQKiplOKAoQONApJiKeMgy3AuPQpiqeAtuLg");
	var mask_1_graphics_194 = new cjs.Graphics().p("A5WIqQAkuLKaptQKbptOLAdQONAdJpKXMgySAu3QpqqWAiuNg");
	var mask_1_graphics_195 = new cjs.Graphics().p("A5NI8QAYuMKTp1QKTp2OLASQONATJyKPMgxtAveQpyqPAXuMg");
	var mask_1_graphics_196 = new cjs.Graphics().p("A5EJNQANuMKLp+QKLp9OLAHQOOAHJ6KIMgxIAwFQp6qIAMuMg");
	var mask_1_graphics_197 = new cjs.Graphics().p("A47JeQACuMKDqFQKEqGOLgEQONgEKCKAMgwhAwsQqCqAAAuNg");
	var mask_1_graphics_198 = new cjs.Graphics().p("A4xJvQgJuMJ7qNQJ7qNOLgPQOOgQKKJ4Mgv7AxSQqKp4gLuNg");
	var mask_1_graphics_199 = new cjs.Graphics().p("A4nKBQgUuMJzqVQJzqVOLgaQONgbKSJwMgvUAx3QqSpvgWuNg");
	var mask_1_graphics_200 = new cjs.Graphics().p("A4cKSQgguLJrqdQJrqdOLglQONglKZJnMgutAydQqZpoghuNg");
	var mask_1_graphics_201 = new cjs.Graphics().p("A4RKkQgruLJjqkQJjqkOKgxQOMgxKhJgMguFAzBQqgpggtuMg");
	var mask_1_graphics_202 = new cjs.Graphics().p("A4FK2Qg3uLJbqrQJaqsOKg8QOMg7KoJXMgtcAzlQqppYg3uLg");
	var mask_1_graphics_203 = new cjs.Graphics().p("A35LIQhCuKJSqzQJSqzOJhHQOLhHKwJPMgs0A0JQqvpPhDuLg");
	var mask_1_graphics_204 = new cjs.Graphics().p("A3tLaQhMuJJJq6QJKq7OHhRQOLhSK2JGMgsKA0rQq3pGhOuKg");
	var mask_1_graphics_205 = new cjs.Graphics().p("A3gLsQhYuIJBrBQJBrCOHhdQOJhdK+I+MgrhA1OQq+o+hZuJg");
	var mask_1_graphics_206 = new cjs.Graphics().p("A3TL+QhiuHI4rIQI4rJOFhoQOIhoLFI2Mgq2A1vQrFo1hluIg");
	var mask_1_graphics_207 = new cjs.Graphics().p("A3FMRQhuuGIwrPQIvrQOEhzQOHhzLMItMgqMA2RQrMothwuGg");
	var mask_1_graphics_208 = new cjs.Graphics().p("A23MjQh5uEInrWQImrXODh+QOFh+LTIkMgphA2yQrTokh7uFg");
	var mask_1_graphics_209 = new cjs.Graphics().p("A2oM2QiEuDIdrdQIerdOBiJQOEiJLZIbMgo2A3SQrZobiGuDg");
	var mask_1_graphics_210 = new cjs.Graphics().p("A2ZNIQiPuBIUrjQIVrkN/iUQOCiULgISMgoKA3yQrgoSiRuCg");
	var mask_1_graphics_211 = new cjs.Graphics().p("A2KNbQiat/ILrqQIMrqN9ifQOBigLmIJMgneA4SQrmoJiduAg");
	var mask_1_graphics_212 = new cjs.Graphics().p("A16NuQilt+ICrwQICrxN8ipQN+irLtIAMgmxA4xQruoAint+g");
	var mask_1_graphics_213 = new cjs.Graphics().p("A1pOBQixt9H5r1QH5r3N5i1QN9i1LzH3MgmFA5OQrzn3iyt7g");
	var mask_1_graphics_214 = new cjs.Graphics().p("A1ZOTQi7t6Hvr7QHwr9N3jAQN6jAL6HtMglYA5tQr6nui9t6g");
	var mask_1_graphics_215 = new cjs.Graphics().p("A1HOmQjHt3HmsCQHmsDN1jLQN4jLL/HkMgkqA6KQr/nkjIt4g");
	var mask_1_graphics_216 = new cjs.Graphics().p("A02O5QjRt1HcsIQHdsINyjWQN1jWMGHbMgj8A6mQsGnbjTt1g");
	var mask_1_graphics_217 = new cjs.Graphics().p("A0kPNQjctzHTsOQHTsONvjhQNzjgMLHRMgjNA7CQsMnRjetyg");
	var mask_1_graphics_218 = new cjs.Graphics().p("A0SPgQjntwHKsTQHJsVNtjrQNvjrMSHHMgigA7eQsRnIjptvg");
	var mask_1_graphics_219 = new cjs.Graphics().p("Az/PzQjyttHAsZQG/saNqj1QNtj3MXG+MghwA75QsXm+j0ttg");
	var mask_1_graphics_220 = new cjs.Graphics().p("AzsQGQj8tqG1seQG2sfNnkBQNqkBMcG1MghBA8SQscm0j/tqg");
	var mask_1_graphics_221 = new cjs.Graphics().p("AzYQaQkItnGsskQGsskNkkMQNnkLMhGqMggRA8tQsimrkJtmg");
	var mask_1_graphics_222 = new cjs.Graphics().p("AzEQtQkStjGispQGisqNgkWQNjkWMnGgMgfhA9GQsnmhkUtjg");
	var mask_1_graphics_223 = new cjs.Graphics().p("AywRBQkdthGYstQGYsvNdkhQNgkhMsGXMgexA9eQssmXkftfg");
	var mask_1_graphics_224 = new cjs.Graphics().p("AybRUQkotdGOsyQGOs0NakrQNcksMxGNMgeBA92QsxmNkptcg");
	var mask_1_graphics_225 = new cjs.Graphics().p("AyGRoQkytZGEs4QGEs5NVk1QNZk2M2GDMgdQA+NQs2mDk0tYg");
	var mask_1_graphics_226 = new cjs.Graphics().p("AxwR7Qk9tVF5s8QF6s+NSlAQNVlAM7F5MgcgA+jQs6l4k+tVg");
	var mask_1_graphics_227 = new cjs.Graphics().p("AxbSPQlHtRFwtBQFvtCNOlLQNRlKM/FuMgbuA+6Qs/lvlJtQg");
	var mask_1_graphics_228 = new cjs.Graphics().p("AxESjQlStOFltFQFltGNKlVQNNlVNEFkMga9A/PQtDlklTtMg");
	var mask_1_graphics_229 = new cjs.Graphics().p("AwuS2QlctJFbtJQFbtLNGlfQNIlgNIFaMgaLA/kQtHlZletJg");
	var mask_1_graphics_230 = new cjs.Graphics().p("AwXTKQlmtFFQtOQFRtONBlqQNElqNNFQMgZZA/5QtMlQlotEg");
	var mask_1_graphics_231 = new cjs.Graphics().p("Av/TeQlxtAFGtSQFGtTM9l0QNAl0NQFFMgYmBAMQtQlFlys/g");
	var mask_1_graphics_232 = new cjs.Graphics().p("AvoTxQl7s7E8tWQE7tXM5l+QM7l+NVE7MgX0BAfQtUk7l9s7g");
	var mask_1_graphics_233 = new cjs.Graphics().p("AvQUFQmFs3ExtZQExtbM0mIQM2mINZEwMgXBBAyQtYkxmHs2g");
	var mask_1_graphics_234 = new cjs.Graphics().p("Au3UZQmQsyEntdQEmtfMvmSQMymSNcEmMgWOBBDQtbkmmRsxg");
	var mask_1_graphics_235 = new cjs.Graphics().p("AueUtQmastEcthQEctiMqmcQMsmcNgEbMgVaBBVQtfkcmbssg");
	var mask_1_graphics_236 = new cjs.Graphics().p("AuFVBQmksoERtlQEStlMlmmQMnmmNkEQMgUoBBmQtikRmlsng");
	var mask_1_graphics_237 = new cjs.Graphics().p("AtsVVQmtsjEGtoQEHtpMgmvQMimwNnEFMgT0BB2QtmkGmvsig");
	var mask_1_graphics_238 = new cjs.Graphics().p("AtSVoQm3sdD7trQD8tsMbm5QMdm6NqD7MgTABCEQtpj7m5sdg");
	var mask_1_graphics_239 = new cjs.Graphics().p("As4V8QnBsYDxtuQDxtvMWnDQMXnDNtDwMgSMBCTQtsjwnDsYg");
	var mask_1_graphics_240 = new cjs.Graphics().p("AsdWQQnLsSDmtxQDmtyMRnNQMQnNNxDmMgRYBChQtvjmnMsSg");
	var mask_1_graphics_241 = new cjs.Graphics().p("AsDWkQnUsNDbtzQDbt1MLnWQMMnXNyDbMgQjBCuQtxjbnXsMg");
	var mask_1_graphics_242 = new cjs.Graphics().p("ArnW4QnfsHDRt2QDQt4MFnfQMGnhN1DQMgPuBC7Qt1jQnfsGg");
	var mask_1_graphics_243 = new cjs.Graphics().p("ArMXMQnosBDGt5QDFt6L/npQMAnqN4DFMgO6BDHQt3jFnpsAg");
	var mask_1_graphics_244 = new cjs.Graphics().p("AqwXfQnxr7C6t7QC7t8L5nyQL5n0N7C6MgOFBDTQt6i6nyr7g");
	var mask_1_graphics_245 = new cjs.Graphics().p("AqUXzQn7r1Cwt9QCvt+Lzn8QL0n9N9CvMgNQBDeQt8iwn8r0g");
	var mask_1_graphics_246 = new cjs.Graphics().p("Ap4YHQoErvClt/QCkuALtoFQLtoHN/ClMgMaBDnQt+ikoGrug");
	var mask_1_graphics_247 = new cjs.Graphics().p("ApbYbQoNroCZuCQCauCLmoOQLnoQOBCaMgLlBDwQuBiZoOrng");
	var mask_1_graphics_248 = new cjs.Graphics().p("Ao+YvQoWriCOuDQCPuELfoYQLhoYODCOMgKwBD6QuCiPoYrgg");
	var mask_1_graphics_249 = new cjs.Graphics().p("AohZCQofrbCDuFQCEuFLZohQLaohOECDMgJ6BECQuEiEohrag");
	var mask_1_graphics_250 = new cjs.Graphics().p("AoDZWQoprVB5uGQB4uHLTopQLTorOGB4MgJFBEJQuGh4oprTg");
	var mask_1_graphics_251 = new cjs.Graphics().p("AnlZqQoyrOBtuJQBuuILMoyQLMozOIBtMgIQBEQQuIhtoxrMg");
	var mask_1_graphics_252 = new cjs.Graphics().p("AnHZ9Qo7rHBjuKQBiuJLFo6QLFo8OJBiMgHaBEWQuJhio6rGg");
	var mask_1_graphics_253 = new cjs.Graphics().p("AmpaRQpDrABXuLQBXuKK+pEQK+pEOLBXMgGkBEbQuLhXpDq+g");
	var mask_1_graphics_254 = new cjs.Graphics().p("AmKakQpMq4BMuMQBMuLK3pNQK3pNOLBMMgFuBEgQuLhLpMq4g");
	var mask_1_graphics_255 = new cjs.Graphics().p("Alra4QpUqxBAuNQBBuMKvpVQKwpWONBBMgE4BEkQuNhApUqwg");
	var mask_1_graphics_256 = new cjs.Graphics().p("AlMbLQpdqqA2uNQA1uNKopdQKppeONA1MgECBEoQuNg1pdqpg");
	var mask_1_graphics_257 = new cjs.Graphics().p("AktbeQplqiAruOQAquNKhpmQKhpmOOAqMgDMBErQuOgqpmqig");
	var mask_1_graphics_258 = new cjs.Graphics().p("AkNbyQptqbAfuPQAfuNKZpuQKapvOOAfMgCWBEtQuOgfpuqZg");
	var mask_1_graphics_259 = new cjs.Graphics().p("AjtcFQp2qTAUuPQAUuOKSp2QKSp3OPAUMgBhBEvQuOgUp2qSg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_1_graphics_9,x:245,y:247.4}).wait(1).to({graphics:mask_1_graphics_10,x:245.1,y:247.3}).wait(1).to({graphics:mask_1_graphics_11,x:245.1,y:247.3}).wait(1).to({graphics:mask_1_graphics_12,x:245.1,y:247.1}).wait(1).to({graphics:mask_1_graphics_13,x:245.2,y:247}).wait(1).to({graphics:mask_1_graphics_14,x:245.2,y:246.9}).wait(1).to({graphics:mask_1_graphics_15,x:245.2,y:246.7}).wait(1).to({graphics:mask_1_graphics_16,x:245.2,y:246.6}).wait(1).to({graphics:mask_1_graphics_17,x:245.3,y:246.4}).wait(1).to({graphics:mask_1_graphics_18,x:245.3,y:246.2}).wait(1).to({graphics:mask_1_graphics_19,x:245.4,y:246}).wait(1).to({graphics:mask_1_graphics_20,x:245.4,y:245.7}).wait(1).to({graphics:mask_1_graphics_21,x:245.4,y:245.5}).wait(1).to({graphics:mask_1_graphics_22,x:245.5,y:245.2}).wait(1).to({graphics:mask_1_graphics_23,x:245.5,y:244.9}).wait(1).to({graphics:mask_1_graphics_24,x:245.5,y:244.6}).wait(1).to({graphics:mask_1_graphics_25,x:245.6,y:244.3}).wait(1).to({graphics:mask_1_graphics_26,x:245.6,y:244}).wait(1).to({graphics:mask_1_graphics_27,x:245.6,y:243.6}).wait(1).to({graphics:mask_1_graphics_28,x:245.7,y:243.2}).wait(1).to({graphics:mask_1_graphics_29,x:245.7,y:242.9}).wait(1).to({graphics:mask_1_graphics_30,x:245.7,y:242.5}).wait(1).to({graphics:mask_1_graphics_31,x:245.8,y:242}).wait(1).to({graphics:mask_1_graphics_32,x:245.8,y:241.6}).wait(1).to({graphics:mask_1_graphics_33,x:245.8,y:241.2}).wait(1).to({graphics:mask_1_graphics_34,x:245.9,y:240.7}).wait(1).to({graphics:mask_1_graphics_35,x:245.9,y:240.2}).wait(1).to({graphics:mask_1_graphics_36,x:245.9,y:239.7}).wait(1).to({graphics:mask_1_graphics_37,x:246,y:239.2}).wait(1).to({graphics:mask_1_graphics_38,x:246,y:238.7}).wait(1).to({graphics:mask_1_graphics_39,x:246,y:238.2}).wait(1).to({graphics:mask_1_graphics_40,x:246,y:237.6}).wait(1).to({graphics:mask_1_graphics_41,x:246.1,y:237}).wait(1).to({graphics:mask_1_graphics_42,x:246.1,y:236.5}).wait(1).to({graphics:mask_1_graphics_43,x:246.1,y:235.9}).wait(1).to({graphics:mask_1_graphics_44,x:246.1,y:235.2}).wait(1).to({graphics:mask_1_graphics_45,x:246.1,y:234.6}).wait(1).to({graphics:mask_1_graphics_46,x:246.2,y:234}).wait(1).to({graphics:mask_1_graphics_47,x:246.2,y:233.3}).wait(1).to({graphics:mask_1_graphics_48,x:246.2,y:232.6}).wait(1).to({graphics:mask_1_graphics_49,x:246.2,y:232}).wait(1).to({graphics:mask_1_graphics_50,x:246.2,y:231.3}).wait(1).to({graphics:mask_1_graphics_51,x:246.2,y:230.5}).wait(1).to({graphics:mask_1_graphics_52,x:246.3,y:229.8}).wait(1).to({graphics:mask_1_graphics_53,x:246.3,y:229.1}).wait(1).to({graphics:mask_1_graphics_54,x:246.3,y:228.3}).wait(1).to({graphics:mask_1_graphics_55,x:246.3,y:227.5}).wait(1).to({graphics:mask_1_graphics_56,x:246.3,y:226.8}).wait(1).to({graphics:mask_1_graphics_57,x:246.3,y:226}).wait(1).to({graphics:mask_1_graphics_58,x:246.3,y:225.2}).wait(1).to({graphics:mask_1_graphics_59,x:246.3,y:224.3}).wait(1).to({graphics:mask_1_graphics_60,x:246.4,y:223.5}).wait(1).to({graphics:mask_1_graphics_61,x:246.4,y:222.6}).wait(1).to({graphics:mask_1_graphics_62,x:246.4,y:221.8}).wait(1).to({graphics:mask_1_graphics_63,x:246.4,y:220.9}).wait(1).to({graphics:mask_1_graphics_64,x:246.4,y:220}).wait(1).to({graphics:mask_1_graphics_65,x:246.4,y:219.1}).wait(1).to({graphics:mask_1_graphics_66,x:246.5,y:218.2}).wait(1).to({graphics:mask_1_graphics_67,x:246.5,y:217.3}).wait(1).to({graphics:mask_1_graphics_68,x:246.5,y:216.3}).wait(1).to({graphics:mask_1_graphics_69,x:246.5,y:215.4}).wait(1).to({graphics:mask_1_graphics_70,x:246.6,y:214.4}).wait(1).to({graphics:mask_1_graphics_71,x:246.6,y:213.5}).wait(1).to({graphics:mask_1_graphics_72,x:246.6,y:212.5}).wait(1).to({graphics:mask_1_graphics_73,x:246.7,y:211.5}).wait(1).to({graphics:mask_1_graphics_74,x:246.7,y:210.5}).wait(1).to({graphics:mask_1_graphics_75,x:246.8,y:209.5}).wait(1).to({graphics:mask_1_graphics_76,x:246.8,y:208.4}).wait(1).to({graphics:mask_1_graphics_77,x:246.8,y:207.4}).wait(1).to({graphics:mask_1_graphics_78,x:246.9,y:206.3}).wait(1).to({graphics:mask_1_graphics_79,x:246.9,y:205.3}).wait(1).to({graphics:mask_1_graphics_80,x:247,y:204.2}).wait(1).to({graphics:mask_1_graphics_81,x:247,y:203.1}).wait(1).to({graphics:mask_1_graphics_82,x:247,y:202}).wait(1).to({graphics:mask_1_graphics_83,x:247.1,y:200.9}).wait(1).to({graphics:mask_1_graphics_84,x:247.1,y:199.8}).wait(1).to({graphics:mask_1_graphics_85,x:247.2,y:198.7}).wait(1).to({graphics:mask_1_graphics_86,x:247.2,y:197.6}).wait(1).to({graphics:mask_1_graphics_87,x:247.2,y:196.4}).wait(1).to({graphics:mask_1_graphics_88,x:247.3,y:195.3}).wait(1).to({graphics:mask_1_graphics_89,x:247.3,y:194.1}).wait(1).to({graphics:mask_1_graphics_90,x:247.3,y:193}).wait(1).to({graphics:mask_1_graphics_91,x:247.4,y:191.8}).wait(1).to({graphics:mask_1_graphics_92,x:247.4,y:190.6}).wait(1).to({graphics:mask_1_graphics_93,x:247.4,y:189.4}).wait(1).to({graphics:mask_1_graphics_94,x:247.5,y:188.2}).wait(1).to({graphics:mask_1_graphics_95,x:247.5,y:187}).wait(1).to({graphics:mask_1_graphics_96,x:247.5,y:185.8}).wait(1).to({graphics:mask_1_graphics_97,x:247.5,y:184.6}).wait(1).to({graphics:mask_1_graphics_98,x:247.6,y:183.4}).wait(1).to({graphics:mask_1_graphics_99,x:247.6,y:182.1}).wait(1).to({graphics:mask_1_graphics_100,x:247.6,y:180.9}).wait(1).to({graphics:mask_1_graphics_101,x:247.6,y:179.7}).wait(1).to({graphics:mask_1_graphics_102,x:247.6,y:178.4}).wait(1).to({graphics:mask_1_graphics_103,x:247.6,y:177.2}).wait(1).to({graphics:mask_1_graphics_104,x:247.6,y:175.9}).wait(1).to({graphics:mask_1_graphics_105,x:247.7,y:174.6}).wait(1).to({graphics:mask_1_graphics_106,x:247.7,y:173.3}).wait(1).to({graphics:mask_1_graphics_107,x:247.7,y:172.1}).wait(1).to({graphics:mask_1_graphics_108,x:247.7,y:170.8}).wait(1).to({graphics:mask_1_graphics_109,x:247.7,y:169.5}).wait(1).to({graphics:mask_1_graphics_110,x:247.7,y:168.2}).wait(1).to({graphics:mask_1_graphics_111,x:247.7,y:166.9}).wait(1).to({graphics:mask_1_graphics_112,x:247.7,y:165.6}).wait(1).to({graphics:mask_1_graphics_113,x:247.7,y:164.3}).wait(1).to({graphics:mask_1_graphics_114,x:247.7,y:163}).wait(1).to({graphics:mask_1_graphics_115,x:247.7,y:161.6}).wait(1).to({graphics:mask_1_graphics_116,x:247.7,y:160.3}).wait(1).to({graphics:mask_1_graphics_117,x:247.6,y:159}).wait(1).to({graphics:mask_1_graphics_118,x:247.6,y:157.7}).wait(1).to({graphics:mask_1_graphics_119,x:247.6,y:156.3}).wait(1).to({graphics:mask_1_graphics_120,x:247.6,y:155}).wait(1).to({graphics:mask_1_graphics_121,x:247.6,y:153.7}).wait(1).to({graphics:mask_1_graphics_122,x:247.6,y:152.3}).wait(1).to({graphics:mask_1_graphics_123,x:247.6,y:151}).wait(1).to({graphics:mask_1_graphics_124,x:247.6,y:149.6}).wait(1).to({graphics:mask_1_graphics_125,x:247.6,y:148.3}).wait(1).to({graphics:mask_1_graphics_126,x:247.6,y:147}).wait(1).to({graphics:mask_1_graphics_127,x:247.5,y:145.6}).wait(1).to({graphics:mask_1_graphics_128,x:247.5,y:144.3}).wait(1).to({graphics:mask_1_graphics_129,x:247.5,y:142.9}).wait(1).to({graphics:mask_1_graphics_130,x:247.5,y:141.6}).wait(1).to({graphics:mask_1_graphics_131,x:247.5,y:140.2}).wait(1).to({graphics:mask_1_graphics_132,x:247.5,y:138.9}).wait(1).to({graphics:mask_1_graphics_133,x:247.5,y:137.6}).wait(1).to({graphics:mask_1_graphics_134,x:247.5,y:139}).wait(1).to({graphics:mask_1_graphics_135,x:247.5,y:140.3}).wait(1).to({graphics:mask_1_graphics_136,x:247.4,y:141.7}).wait(1).to({graphics:mask_1_graphics_137,x:247.4,y:143}).wait(1).to({graphics:mask_1_graphics_138,x:247.3,y:144.4}).wait(1).to({graphics:mask_1_graphics_139,x:247.2,y:145.7}).wait(1).to({graphics:mask_1_graphics_140,x:247.1,y:147.1}).wait(1).to({graphics:mask_1_graphics_141,x:247,y:148.4}).wait(1).to({graphics:mask_1_graphics_142,x:246.8,y:149.8}).wait(1).to({graphics:mask_1_graphics_143,x:246.7,y:151.1}).wait(1).to({graphics:mask_1_graphics_144,x:246.5,y:152.4}).wait(1).to({graphics:mask_1_graphics_145,x:246.3,y:153.8}).wait(1).to({graphics:mask_1_graphics_146,x:246.1,y:155.1}).wait(1).to({graphics:mask_1_graphics_147,x:245.9,y:156.5}).wait(1).to({graphics:mask_1_graphics_148,x:245.7,y:157.8}).wait(1).to({graphics:mask_1_graphics_149,x:245.4,y:159.1}).wait(1).to({graphics:mask_1_graphics_150,x:245.1,y:160.4}).wait(1).to({graphics:mask_1_graphics_151,x:244.8,y:161.8}).wait(1).to({graphics:mask_1_graphics_152,x:244.5,y:163.1}).wait(1).to({graphics:mask_1_graphics_153,x:244.2,y:164.4}).wait(1).to({graphics:mask_1_graphics_154,x:243.9,y:165.7}).wait(1).to({graphics:mask_1_graphics_155,x:243.5,y:167}).wait(1).to({graphics:mask_1_graphics_156,x:243.2,y:168.3}).wait(1).to({graphics:mask_1_graphics_157,x:242.8,y:169.6}).wait(1).to({graphics:mask_1_graphics_158,x:242.4,y:170.9}).wait(1).to({graphics:mask_1_graphics_159,x:242,y:172.2}).wait(1).to({graphics:mask_1_graphics_160,x:241.5,y:173.5}).wait(1).to({graphics:mask_1_graphics_161,x:241.1,y:174.7}).wait(1).to({graphics:mask_1_graphics_162,x:240.6,y:176}).wait(1).to({graphics:mask_1_graphics_163,x:240.1,y:177.3}).wait(1).to({graphics:mask_1_graphics_164,x:239.6,y:178.5}).wait(1).to({graphics:mask_1_graphics_165,x:239.1,y:179.8}).wait(1).to({graphics:mask_1_graphics_166,x:238.6,y:181}).wait(1).to({graphics:mask_1_graphics_167,x:238.1,y:182.3}).wait(1).to({graphics:mask_1_graphics_168,x:237.5,y:183.5}).wait(1).to({graphics:mask_1_graphics_169,x:236.9,y:184.7}).wait(1).to({graphics:mask_1_graphics_170,x:236.3,y:185.9}).wait(1).to({graphics:mask_1_graphics_171,x:235.7,y:187.1}).wait(1).to({graphics:mask_1_graphics_172,x:235.1,y:188.3}).wait(1).to({graphics:mask_1_graphics_173,x:234.5,y:189.5}).wait(1).to({graphics:mask_1_graphics_174,x:233.9,y:190.7}).wait(1).to({graphics:mask_1_graphics_175,x:233.2,y:191.9}).wait(1).to({graphics:mask_1_graphics_176,x:232.5,y:193.1}).wait(1).to({graphics:mask_1_graphics_177,x:231.8,y:194.2}).wait(1).to({graphics:mask_1_graphics_178,x:231.1,y:195.4}).wait(1).to({graphics:mask_1_graphics_179,x:230.4,y:196.5}).wait(1).to({graphics:mask_1_graphics_180,x:229.7,y:197.7}).wait(1).to({graphics:mask_1_graphics_181,x:228.9,y:198.8}).wait(1).to({graphics:mask_1_graphics_182,x:228.2,y:199.9}).wait(1).to({graphics:mask_1_graphics_183,x:227.4,y:201}).wait(1).to({graphics:mask_1_graphics_184,x:226.6,y:202.1}).wait(1).to({graphics:mask_1_graphics_185,x:225.8,y:203.2}).wait(1).to({graphics:mask_1_graphics_186,x:225,y:204.3}).wait(1).to({graphics:mask_1_graphics_187,x:224.2,y:205.4}).wait(1).to({graphics:mask_1_graphics_188,x:223.3,y:206.4}).wait(1).to({graphics:mask_1_graphics_189,x:222.5,y:207.5}).wait(1).to({graphics:mask_1_graphics_190,x:221.6,y:208.5}).wait(1).to({graphics:mask_1_graphics_191,x:220.7,y:209.5}).wait(1).to({graphics:mask_1_graphics_192,x:219.9,y:210.5}).wait(1).to({graphics:mask_1_graphics_193,x:219,y:211.5}).wait(1).to({graphics:mask_1_graphics_194,x:218,y:212.5}).wait(1).to({graphics:mask_1_graphics_195,x:217.1,y:213.5}).wait(1).to({graphics:mask_1_graphics_196,x:216.2,y:214.5}).wait(1).to({graphics:mask_1_graphics_197,x:215.2,y:215.5}).wait(1).to({graphics:mask_1_graphics_198,x:214.3,y:216.4}).wait(1).to({graphics:mask_1_graphics_199,x:213.3,y:217.3}).wait(1).to({graphics:mask_1_graphics_200,x:212.3,y:218.3}).wait(1).to({graphics:mask_1_graphics_201,x:211.3,y:219.2}).wait(1).to({graphics:mask_1_graphics_202,x:210.3,y:220.1}).wait(1).to({graphics:mask_1_graphics_203,x:209.3,y:221}).wait(1).to({graphics:mask_1_graphics_204,x:208.2,y:221.8}).wait(1).to({graphics:mask_1_graphics_205,x:207.2,y:222.7}).wait(1).to({graphics:mask_1_graphics_206,x:206.1,y:223.5}).wait(1).to({graphics:mask_1_graphics_207,x:205.1,y:224.4}).wait(1).to({graphics:mask_1_graphics_208,x:204,y:225.2}).wait(1).to({graphics:mask_1_graphics_209,x:202.9,y:226}).wait(1).to({graphics:mask_1_graphics_210,x:201.8,y:226.8}).wait(1).to({graphics:mask_1_graphics_211,x:200.7,y:227.6}).wait(1).to({graphics:mask_1_graphics_212,x:199.6,y:228.4}).wait(1).to({graphics:mask_1_graphics_213,x:198.5,y:229.1}).wait(1).to({graphics:mask_1_graphics_214,x:197.4,y:229.9}).wait(1).to({graphics:mask_1_graphics_215,x:196.2,y:230.6}).wait(1).to({graphics:mask_1_graphics_216,x:195.1,y:231.3}).wait(1).to({graphics:mask_1_graphics_217,x:193.9,y:232}).wait(1).to({graphics:mask_1_graphics_218,x:192.8,y:232.7}).wait(1).to({graphics:mask_1_graphics_219,x:191.6,y:233.4}).wait(1).to({graphics:mask_1_graphics_220,x:190.4,y:234}).wait(1).to({graphics:mask_1_graphics_221,x:189.2,y:234.7}).wait(1).to({graphics:mask_1_graphics_222,x:188,y:235.3}).wait(1).to({graphics:mask_1_graphics_223,x:186.8,y:235.9}).wait(1).to({graphics:mask_1_graphics_224,x:185.6,y:236.5}).wait(1).to({graphics:mask_1_graphics_225,x:184.4,y:237.1}).wait(1).to({graphics:mask_1_graphics_226,x:183.2,y:237.6}).wait(1).to({graphics:mask_1_graphics_227,x:181.9,y:238.2}).wait(1).to({graphics:mask_1_graphics_228,x:180.7,y:238.7}).wait(1).to({graphics:mask_1_graphics_229,x:179.4,y:239.2}).wait(1).to({graphics:mask_1_graphics_230,x:178.2,y:239.8}).wait(1).to({graphics:mask_1_graphics_231,x:176.9,y:240.2}).wait(1).to({graphics:mask_1_graphics_232,x:175.7,y:240.7}).wait(1).to({graphics:mask_1_graphics_233,x:174.4,y:241.2}).wait(1).to({graphics:mask_1_graphics_234,x:173.1,y:241.6}).wait(1).to({graphics:mask_1_graphics_235,x:171.8,y:242.1}).wait(1).to({graphics:mask_1_graphics_236,x:170.6,y:242.5}).wait(1).to({graphics:mask_1_graphics_237,x:169.3,y:242.9}).wait(1).to({graphics:mask_1_graphics_238,x:168,y:243.2}).wait(1).to({graphics:mask_1_graphics_239,x:166.7,y:243.6}).wait(1).to({graphics:mask_1_graphics_240,x:165.4,y:244}).wait(1).to({graphics:mask_1_graphics_241,x:164,y:244.3}).wait(1).to({graphics:mask_1_graphics_242,x:162.7,y:244.6}).wait(1).to({graphics:mask_1_graphics_243,x:161.4,y:244.9}).wait(1).to({graphics:mask_1_graphics_244,x:160.1,y:245.2}).wait(1).to({graphics:mask_1_graphics_245,x:158.8,y:245.5}).wait(1).to({graphics:mask_1_graphics_246,x:157.4,y:245.7}).wait(1).to({graphics:mask_1_graphics_247,x:156.1,y:245.9}).wait(1).to({graphics:mask_1_graphics_248,x:154.8,y:246.2}).wait(1).to({graphics:mask_1_graphics_249,x:153.4,y:246.4}).wait(1).to({graphics:mask_1_graphics_250,x:152.1,y:246.5}).wait(1).to({graphics:mask_1_graphics_251,x:150.8,y:246.7}).wait(1).to({graphics:mask_1_graphics_252,x:149.4,y:246.9}).wait(1).to({graphics:mask_1_graphics_253,x:148.1,y:247}).wait(1).to({graphics:mask_1_graphics_254,x:146.7,y:247.1}).wait(1).to({graphics:mask_1_graphics_255,x:145.4,y:247.2}).wait(1).to({graphics:mask_1_graphics_256,x:144,y:247.3}).wait(1).to({graphics:mask_1_graphics_257,x:142.7,y:247.4}).wait(1).to({graphics:mask_1_graphics_258,x:141.3,y:247.4}).wait(1).to({graphics:mask_1_graphics_259,x:140,y:247.5}).wait(316));

	// 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(25,1,1).p("ALyakQpogtnAnBQnynzAArBQAArBHynzQHUnVKLgc");
	this.shape_5.setTransform(185.6,274.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(25,0,1).p("AMuakQpogtnAnBQnynzAArBQAArBHynzQHUnVKLgc");
	this.shape_6.setTransform(179.6,274.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(25,1,1).p("ATOvQQARB6AACAQAALCnzHyQnzHzrBAAQmyAAlji9");
	this.shape_7.setTransform(320.7,347.7);

	var maskedShapeInstanceList = [this.shape_5,this.shape_6,this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5}]},9).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},233).wait(333));

	// Base
	this.instance_2 = new lib.Symbol1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(275,275);
	this.instance_2.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(575));

	// Background
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_8.setTransform(275,275,3.373,2.543);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_9.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).wait(575));

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