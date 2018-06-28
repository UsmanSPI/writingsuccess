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
	this.shape.graphics.f("#FFFFFF").s().p("A1RU1Qo1opAAsLQAAsOI1ooQI3onMbAAQN6AAJEKUQArA3ABA6QgBBFg2A1Qg2A3hIAAQhHAAg3g9QnboercAAQqOAAnQHEQnOHDAAJ7QAAJ6HOHDQHQHEKOAAQJBAAHCmFQG/mBBao+I4cAAQipAAAAi0QAAi0CpAAIbZAAQCtAAAACkIAAAQQgeMGo3InQo1Imr8AAQsbgBo3ong");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-192.6,-188.4,385.3,376.9);


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
	this.shape.setTransform(-1.4,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AggAAIBBAA");
	this.shape_1.setTransform(-0.6,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AgoAAIBRAA");
	this.shape_2.setTransform(0.3,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("AgwAAIBhAA");
	this.shape_3.setTransform(1.1,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("Ag4AAIBxAA");
	this.shape_4.setTransform(1.8,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(5,1,1).p("AhAAAICBAA");
	this.shape_5.setTransform(2.7,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(5,1,1).p("AhHAAICPAA");
	this.shape_6.setTransform(3.4,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(5,1,1).p("AhPAAICfAA");
	this.shape_7.setTransform(4.2,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(5,1,1).p("AhWAAICtAA");
	this.shape_8.setTransform(5,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(5,1,1).p("AheAAIC9AA");
	this.shape_9.setTransform(5.7,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(5,1,1).p("AhlAAIDLAA");
	this.shape_10.setTransform(6.5,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5,1,1).p("AhtAAIDbAA");
	this.shape_11.setTransform(7.3,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(5,1,1).p("Ah0AAIDpAA");
	this.shape_12.setTransform(8,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(5,1,1).p("Ah7AAID3AA");
	this.shape_13.setTransform(8.8,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(5,1,1).p("AiCAAIEFAA");
	this.shape_14.setTransform(9.5,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(5,1,1).p("AiJAAIETAA");
	this.shape_15.setTransform(10.2,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(5,1,1).p("AiQAAIEhAA");
	this.shape_16.setTransform(10.9,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(5,1,1).p("AiXAAIEvAA");
	this.shape_17.setTransform(11.6,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(5,1,1).p("AieAAIE9AA");
	this.shape_18.setTransform(12.3,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(5,1,1).p("AilAAIFLAA");
	this.shape_19.setTransform(13,0);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(5,1,1).p("AisAAIFZAA");
	this.shape_20.setTransform(13.7,0);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(5,1,1).p("AiyAAIFlAA");
	this.shape_21.setTransform(14.4,0);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(5,1,1).p("Ai5AAIFzAA");
	this.shape_22.setTransform(15.1,0);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(5,1,1).p("Ai/AAIF/AA");
	this.shape_23.setTransform(15.7,0);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(5,1,1).p("AjGAAIGNAA");
	this.shape_24.setTransform(16.4,0);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(5,1,1).p("AjMAAIGZAA");
	this.shape_25.setTransform(17,0);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(5,1,1).p("AjTAAIGnAA");
	this.shape_26.setTransform(17.7,0);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(5,1,1).p("AjZAAIGzAA");
	this.shape_27.setTransform(18.3,0);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(5,1,1).p("AjfAAIG/AA");
	this.shape_28.setTransform(19,0);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(5,1,1).p("AjlAAIHLAA");
	this.shape_29.setTransform(19.6,0);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(5,1,1).p("AjrAAIHXAA");
	this.shape_30.setTransform(20.2,0);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(5,1,1).p("AjxAAIHjAA");
	this.shape_31.setTransform(20.8,0);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(5,1,1).p("Aj3AAIHvAA");
	this.shape_32.setTransform(21.5,0);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(5,1,1).p("Aj9AAIH7AA");
	this.shape_33.setTransform(22.1,0);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(5,1,1).p("AkDAAIIHAA");
	this.shape_34.setTransform(22.6,0);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(5,1,1).p("AkJAAIITAA");
	this.shape_35.setTransform(23.2,0);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(5,1,1).p("AkOAAIIdAA");
	this.shape_36.setTransform(23.8,0);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(5,1,1).p("AkUAAIIpAA");
	this.shape_37.setTransform(24.4,0);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(5,1,1).p("AkZAAIIzAA");
	this.shape_38.setTransform(24.9,0);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(5,1,1).p("AkfAAII/AA");
	this.shape_39.setTransform(25.5,0);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(5,1,1).p("AkkAAIJJAA");
	this.shape_40.setTransform(26.1,0);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(5,1,1).p("AkpAAIJTAA");
	this.shape_41.setTransform(26.6,0);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(5,1,1).p("AkvAAIJfAA");
	this.shape_42.setTransform(27.1,0);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(5,1,1).p("Ak0AAIJpAA");
	this.shape_43.setTransform(27.6,0);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(5,1,1).p("Ak5AAIJzAA");
	this.shape_44.setTransform(28.2,0);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(5,1,1).p("Ak+AAIJ9AA");
	this.shape_45.setTransform(28.7,0);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(5,1,1).p("AlDAAIKHAA");
	this.shape_46.setTransform(29.2,0);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(5,1,1).p("AlIAAIKRAA");
	this.shape_47.setTransform(29.7,0);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(5,1,1).p("AlNAAIKaAA");
	this.shape_48.setTransform(30.2,0);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(5,1,1).p("AlRAAIKjAA");
	this.shape_49.setTransform(30.7,0);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(5,1,1).p("AlWAAIKtAA");
	this.shape_50.setTransform(31.2,0);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(5,1,1).p("AlbAAIK3AA");
	this.shape_51.setTransform(31.6,0);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(5,1,1).p("AlfAAIK/AA");
	this.shape_52.setTransform(32.1,0);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(5,1,1).p("AlkAAILJAA");
	this.shape_53.setTransform(32.6,0);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(5,1,1).p("AloAAILRAA");
	this.shape_54.setTransform(33,0);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(5,1,1).p("AltAAILbAA");
	this.shape_55.setTransform(33.5,0);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(5,1,1).p("AlxAAILjAA");
	this.shape_56.setTransform(33.9,0);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(5,1,1).p("Al1AAILrAA");
	this.shape_57.setTransform(34.3,0);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(5,1,1).p("Al5AAILzAA");
	this.shape_58.setTransform(34.8,0);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(5,1,1).p("Al9AAIL7AA");
	this.shape_59.setTransform(35.2,0);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(5,1,1).p("AmBAAIMDAA");
	this.shape_60.setTransform(35.6,0);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(5,1,1).p("AmFAAIMLAA");
	this.shape_61.setTransform(36,0);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(5,1,1).p("AmJAAIMTAA");
	this.shape_62.setTransform(36.4,0);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(5,1,1).p("AmNAAIMbAA");
	this.shape_63.setTransform(36.8,0);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(5,1,1).p("AmRAAIMjAA");
	this.shape_64.setTransform(37.2,0);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(5,1,1).p("AmUAAIMpAA");
	this.shape_65.setTransform(37.5,0);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(5,1,1).p("AmYAAIMxAA");
	this.shape_66.setTransform(37.9,0);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(5,1,1).p("AmcAAIM5AA");
	this.shape_67.setTransform(38.3,0);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(5,1,1).p("AmfAAIM/AA");
	this.shape_68.setTransform(38.6,0);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(5,1,1).p("AmiAAINFAA");
	this.shape_69.setTransform(39,0);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(5,1,1).p("AmmAAINNAA");
	this.shape_70.setTransform(39.3,0);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(5,1,1).p("AmpAAINTAA");
	this.shape_71.setTransform(39.6,0);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(5,1,1).p("AmsAAINZAA");
	this.shape_72.setTransform(40,0);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(5,1,1).p("AmvAAINfAA");
	this.shape_73.setTransform(40.3,0);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(5,1,1).p("AmyAAINlAA");
	this.shape_74.setTransform(40.6,0);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(5,1,1).p("Am1AAINrAA");
	this.shape_75.setTransform(40.9,0);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(5,1,1).p("Am4AAINxAA");
	this.shape_76.setTransform(41.2,0);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(5,1,1).p("Am7AAIN3AA");
	this.shape_77.setTransform(41.5,0);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(5,1,1).p("Am+AAIN9AA");
	this.shape_78.setTransform(41.8,0);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(5,1,1).p("AHCAAIuCAA");
	this.shape_79.setTransform(42.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).wait(1));

	// Layer 1
	this.instance = new lib.triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1.1,0,1,1,-90,0,0,0.4,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:91.1},79,cjs.Ease.get(0.5)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.8,-12.1,21.9,24.3);


(lib.ar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(97.4,-124.9,1,1,98.8,0,0,0.4,-17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:69.5,guide:{path:[97.3,-124.9,67.4,-130,37.1,-130.5,30.2,-130.7,23.6,-130.2]}},31).to({rotation:39.1,guide:{path:[23.5,-130.2,-16.9,-127.1,-45.9,-100.8]}},28).to({scaleX:1,scaleY:1,rotation:-0.8,guide:{path:[-45.9,-100.7,-56.3,-91.3,-65.2,-78.8,-87.8,-47.3,-90,-12]}},40).to({regX:0.3,scaleX:1,scaleY:1,rotation:-29.8,guide:{path:[-90,-11.9,-91.3,9.8,-84.9,32.7,-81,47,-74.8,59.4]}},30).to({regX:0.2,regY:-17.3,scaleX:1,scaleY:1,rotation:-44.6,guide:{path:[-74.8,59.4,-66.3,76.7,-53.7,90.4]}},15).to({rotation:-53.9,guide:{path:[-53.7,90.4,-45.8,99,-36.3,106.2]}},10).to({rotation:-58.6,guide:{path:[-36.2,106.2,-31.6,109.7,-26.5,112.9]}},7).to({regX:0.1,scaleX:1,scaleY:1,rotation:-62.9,guide:{path:[-26.6,112.9,-22.1,115.7,-17.3,118.3]}},13).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgVmAgoMARjhCdQNwDoHLMTQHKMUjpNwQjpNxsSHLQoKEwo0AAQkeAAkohOg");
	var mask_graphics_1 = new cjs.Graphics().p("EgVRAg2MAQchCwQN0DaHYMMQHXMMjaN0QjaN0sLHXQoVFEpHAAQkNAAkXhFg");
	var mask_graphics_2 = new cjs.Graphics().p("EgUtAhDMAPUhDBQN3DLHmMEQHjMEjLN3QjLN5sDHkQofFWpaAAQj8AAkGg8g");
	var mask_graphics_3 = new cjs.Graphics().p("EgUJAhPMAONhDQQN6C8HyL7QHxL8i9N7Qi8N7r7HxQopFppuAAQjrAAj0gzg");
	var mask_graphics_4 = new cjs.Graphics().p("EgTlAhaMANFhDfQN9CuH/LyQH9L0itN9QitN/rzH+QozF9qCAAQjaAAjigsg");
	var mask_graphics_5 = new cjs.Graphics().p("EgTBAhkMAL9hDsQOACeILLrQIKLrieOAQifOBrqIKQo8GSqWAAQjIAAjRglg");
	var mask_graphics_6 = new cjs.Graphics().p("EgSdAhtMAK1hD4QODCQIXLhQIWLiiPODQiPOErhIWQpGGnqrAAQi3AAi+gfg");
	var mask_graphics_7 = new cjs.Graphics().p("EgR4Ah2MAJshEDQOFCAIkLYQIiLaiAOFQiBOGrYIiQpOG8rAAAQilAAirgYg");
	var mask_graphics_8 = new cjs.Graphics().p("EgRUAh9MAIkhEMQOHBxIvLPQIvLQhxOHQhyOIrOIvQpWHRrWAAQiTAAiZgTg");
	var mask_graphics_9 = new cjs.Graphics().p("EgQvAiEMAHahEVQOJBiI8LFQI6LHhiOJQhiOKrFI6QpeHortAAQiAAAiFgOg");
	var mask_graphics_10 = new cjs.Graphics().p("EgQKAiKMAGRhEdQOKBTJIK8QJGK9hTOKQhTOMq8JGQplH/sDAAQhuAAhxgKg");
	var mask_graphics_11 = new cjs.Graphics().p("EgPlAiOMAFIhEiQOLBEJTKyQJSKzhEOMQhEOMqyJSQprIWscAAQhaAAhdgHg");
	var mask_graphics_12 = new cjs.Graphics().p("EgPBAiSMAD/hEnQONA0JeKoQJeKqg1OMQg1OOqoJdQpzIusyAAQhIAAhJgEg");
	var mask_graphics_13 = new cjs.Graphics().p("EgOcAiVMAC2hErQONAlJqKeQJoKfglOOQgmOOqeJpQp4JGtMAAQg0AAg0gCg");
	var mask_graphics_14 = new cjs.Graphics().p("EgN3AiXMABshEuQOOAXJ1KTQJ0KVgXOOQgWOPqUJzQp9JgtnAAIg+gBg");
	var mask_graphics_15 = new cjs.Graphics().p("EgNSAiYMAAjhEvQOOAHKAKJQJ+KKgHOOQgHOQqJJ+QqDJ5uBAAIgUAAg");
	var mask_graphics_16 = new cjs.Graphics().p("EgNUgiXQOOgIKLJ+QKJKAAIOPQAIOOp+KJQp/KLuOAIg");
	var mask_graphics_17 = new cjs.Graphics().p("EgN5giWQOOgXKVJzQKUJ1AXOOQAYOOp0KUQp0KVuOAYg");
	var mask_graphics_18 = new cjs.Graphics().p("EgOdgiUQOOgmKfJoQKeJpAmOPQAnONpoKeQpqKguNAmg");
	var mask_graphics_19 = new cjs.Graphics().p("EgPCgiRQOOg2KoJdQKpJeA1OOQA2ONpdKoQpeKquMA1g");
	var mask_graphics_20 = new cjs.Graphics().p("EgPmgiNQOMhFKzJSQKyJSBFONQBFOLpSKzQpSK0uMBEg");
	var mask_graphics_21 = new cjs.Graphics().p("EgQLgiIQOLhUK9JGQK8JHBUOLQBUOKpGK8QpHK+uKBUg");
	var mask_graphics_22 = new cjs.Graphics().p("EgQwgiDQOKhjLGI6QLGI8BjOJQBjOJo6LGQo7LHuJBjg");
	var mask_graphics_23 = new cjs.Graphics().p("EgRUgh8QOIhyLPIuQLQIvByOIQByOHouLQQovLQuHByg");
	var mask_graphics_24 = new cjs.Graphics().p("EgR4gh0QOFiCLZIiQLZIkCBOGQCBOFoiLYQojLauFCBg");
	var mask_graphics_25 = new cjs.Graphics().p("EgSdghsQOEiQLiIWQLhIXCQODQCQODoVLiQoXLiuDCRg");
	var mask_graphics_26 = new cjs.Graphics().p("EgTBghjQOBifLrIKQLqIKCfOBQCfOBoJLqQoKLsuBCfg");
	var mask_graphics_27 = new cjs.Graphics().p("EgTlghYQN+iuLzH8QLzH/CvN+QCuN9n9LzQn+L1t9Cug");
	var mask_graphics_28 = new cjs.Graphics().p("EgUJghNQN7i9L8HwQL7HyC9N7QC9N6nwL8QnxL8t6C9g");
	var mask_graphics_29 = new cjs.Graphics().p("EgUtghBQN4jMMEHjQMEHlDLN4QDMN3njMEQnlMFt3DLg");
	var mask_graphics_30 = new cjs.Graphics().p("EgVQgg0QN0jbMMHXQMLHXDbN1QDbN0nXMLQnXMNt0Dag");
	var mask_graphics_31 = new cjs.Graphics().p("EgVnggmQNwjpMUHJQMTHKDpNxQDqNwnKMTQnKMVtwDpg");
	var mask_graphics_32 = new cjs.Graphics().p("EgV5ggYQNtj3MaG8QMbG9D4NtQD4Nsm8MaQm9MctsD4g");
	var mask_graphics_33 = new cjs.Graphics().p("EgWLggIQNpkGMiGuQMiGwEGNpQEHNnmvMiQmwMktnEGg");
	var mask_graphics_34 = new cjs.Graphics().p("A2d/4QNkkVMqGiQMpGiEVNkQEVNjmhMpQmjMrtjEVg");
	var mask_graphics_35 = new cjs.Graphics().p("A2u/mQNfkkMwGUQMwGVEkNfQEjNfmUMwQmUMxteEjg");
	var mask_graphics_36 = new cjs.Graphics().p("A2//UQNakyM2GGQM3GIEyNaQEyNZmGM3QmHM4tbEyg");
	var mask_graphics_37 = new cjs.Graphics().p("A3R/BQNVlAM9F4QM+F6FANVQFANUl5M9Ql5M+tVFAg");
	var mask_graphics_38 = new cjs.Graphics().p("A3i+tQNQlPNDFrQNDFsFPNPQFONPlrNDQlrNEtQFPg");
	var mask_graphics_39 = new cjs.Graphics().p("A3z+ZQNKlcNJFcQNJFeFdNKQFcNJlcNJQleNLtKFcg");
	var mask_graphics_40 = new cjs.Graphics().p("A4E+DQNElrNPFPQNPFPFqNEQFrNDlPNPQlPNQtEFrg");
	var mask_graphics_41 = new cjs.Graphics().p("A4V9tQM+l4NUFAQNVFBF4M+QF5M9lBNUQlBNWs+F4g");
	var mask_graphics_42 = new cjs.Graphics().p("A4l9WQM3mGNaEyQNaEzGGM4QGGM3kyNYQkzNbs4GGg");
	var mask_graphics_43 = new cjs.Graphics().p("A428+QMxmUNfEkQNeElGUMxQGUMwkkNeQkkNgsxGTg");
	var mask_graphics_44 = new cjs.Graphics().p("A5G8lQMqmiNjEVQNkEXGhMqQGhMqkVNiQkWNlsqGhg");
	var mask_graphics_45 = new cjs.Graphics().p("A5W8MQMjmuNoEGQNoEIGuMjQGvMjkHNmQkHNqsjGug");
	var mask_graphics_46 = new cjs.Graphics().p("A5m7xQMcm9NsD4QNsD6G8MbQG8Mcj4NrQj5NtsbG8g");
	var mask_graphics_47 = new cjs.Graphics().p("A527WQMUnKNwDqQNxDqHJMUQHJMUjpNvQjqNysUHJg");
	var mask_graphics_48 = new cjs.Graphics().p("A6F67QMMnWN1DbQNzDcHWMMQHXMMjbNzQjcN1sMHXg");
	var mask_graphics_49 = new cjs.Graphics().p("A6V6eQMFnjN4DLQN3DOHjMEQHjMFjMN2QjMN5sFHjg");
	var mask_graphics_50 = new cjs.Graphics().p("A6k6BQL8nwN8C9QN6C/HwL8QHwL8i9N6Qi+N8r8Hwg");
	var mask_graphics_51 = new cjs.Graphics().p("A6z5iQL0n9N+CuQN9CvH9L0QH9L0iuN9QivN/r0H9g");
	var mask_graphics_52 = new cjs.Graphics().p("A7C5EQLroJOBCfQOAChIKLrQIJLrifOAQigOCrrIJg");
	var mask_graphics_53 = new cjs.Graphics().p("A7R4kQLjoWODCQQODCSIWLjQIWLiiROCQiROEriIWg");
	var mask_graphics_54 = new cjs.Graphics().p("A7f4DQLZoiOGCBQOFCCIiLaQIiLZiCOEQiBOHraIig");
	var mask_graphics_55 = new cjs.Graphics().p("A7u3iQLRouOIByQOHBzIuLQQIuLRhzOGQhzOJrQIug");
	var mask_graphics_56 = new cjs.Graphics().p("A783AQLHo6OKBiQOJBlI6LHQI6LHhkOIQhkOKrGI6g");
	var mask_graphics_57 = new cjs.Graphics().p("A8K2eQK9pGOMBUQOKBVJGK+QJGK9hVOJQhUONq9JFg");
	var mask_graphics_58 = new cjs.Graphics().p("A8Y17QK0pROMBFQOMBGJRKzQJSK0hGOLQhFONqzJRg");
	var mask_graphics_59 = new cjs.Graphics().p("A8l1WQKppdOOA1QOMA3JdKqQJdKpg2OMQg2OOqqJdg");
	var mask_graphics_60 = new cjs.Graphics().p("A8z0yQKfpoOPAmQONAoJoKgQJoKfgmOMQgnOQqgJog");
	var mask_graphics_61 = new cjs.Graphics().p("A9A0MQKVpzOPAXQOOAYJzKVQJzKVgYONQgXOQqVJzg");
	var mask_graphics_62 = new cjs.Graphics().p("A9NzmQKKp+OPAIQOOAJJ/KLQJ+KKgJONQgIOQqLJ+g");
	var mask_graphics_63 = new cjs.Graphics().p("A9ay/QJ/qJOQgHQOOgGKJKAQKJJ/AGOOQAHOQqAKIg");
	var mask_graphics_64 = new cjs.Graphics().p("A9nyYQJ1qTOPgXQOOgVKTJ1QKUJ1AVONQAWOQp0KTg");
	var mask_graphics_65 = new cjs.Graphics().p("A90xvQJqqeOOgmQOOgkKeJqQKeJpAlONQAlOPpqKeg");
	var mask_graphics_66 = new cjs.Graphics().p("A+AxHQJeqoOOg1QONgzKoJfQKoJeA0OMQA0OOpeKpg");
	var mask_graphics_67 = new cjs.Graphics().p("A+MwdQJSqyONhEQOMhDKyJTQKyJTBEOLQBDOOpTKyg");
	var mask_graphics_68 = new cjs.Graphics().p("A+YvzQJHq8OLhTQOLhSK8JIQK8JHBSOKQBTOMpHK8g");
	var mask_graphics_69 = new cjs.Graphics().p("A+kvIQI7rGOKhiQOJhhLGI8QLFI7BiOJQBiOLo8LFg");
	var mask_graphics_70 = new cjs.Graphics().p("A+wudQIwrPOIhxQOHhwLPIwQLPIvBxOHQBxOJowLPg");
	var mask_graphics_71 = new cjs.Graphics().p("A+7txQIjrYOGiBQOGh+LYIjQLYIkCAOEQCAOHokLYg");
	var mask_graphics_72 = new cjs.Graphics().p("A/GtEQIXriOEiPQODiOLhIXQLiIYCOOCQCPOFoXLhg");
	var mask_graphics_73 = new cjs.Graphics().p("A/RsXQILrqOBifQOBidLqILQLqILCeOAQCeOCoLLqg");
	var mask_graphics_74 = new cjs.Graphics().p("A/crqQH/rzN+itQN+isLzH/QLzH+CsN9QCtOAn+Lyg");
	var mask_graphics_75 = new cjs.Graphics().p("A/mq8QHyr7N7i8QN7i7L7HyQL7HyC8N6QC8N8nyL7g");
	var mask_graphics_76 = new cjs.Graphics().p("A/wqNQHlsEN4jLQN4jJMDHlQMDHlDLN2QDKN6nlMDg");
	var mask_graphics_77 = new cjs.Graphics().p("A/6peQHYsLN1jbQN0jYMLHYQMMHYDZNzQDZN2nYMMg");
	var mask_graphics_78 = new cjs.Graphics().p("EggEgIvQHLsTNxjpQNxjnMTHLQMTHLDoNxQDoNxnLMTg");
	var mask_graphics_79 = new cjs.Graphics().p("EggNgH/QG+saNtj4QNsj2MbG+QMbG+D2NtQD3Ntm+Mag");
	var mask_graphics_80 = new cjs.Graphics().p("EggWgHPQGwshNpkGQNpkFMhGxQMiGwEFNpQEGNomwMig");
	var mask_graphics_81 = new cjs.Graphics().p("EggfgGeQGjspNlkUQNjkTMqGjQMpGjETNkQEUNkmjMpg");
	var mask_graphics_82 = new cjs.Graphics().p("EggngFtQGVsvNgkjQNfkiMwGWQMwGVEiNfQEiNgmVMwg");
	var mask_graphics_83 = new cjs.Graphics().p("EggvgE7QGIs2NakyQNakwM3GIQM3GIEwNaQExNbmIM2g");
	var mask_graphics_84 = new cjs.Graphics().p("Egg3gEJQF6s9NVlAQNWk+M8F7QM9F6E/NUQE/NWl6M9g");
	var mask_graphics_85 = new cjs.Graphics().p("Egg/gDXQFttDNQlOQNQlMNCFsQNDFtFNNPQFONQltNDg");
	var mask_graphics_86 = new cjs.Graphics().p("EghGgCkQFetJNLlcQNLlaNIFeQNJFeFbNKQFbNKleNJg");
	var mask_graphics_87 = new cjs.Graphics().p("EghNgBxQFQtPNFlqQNFloNOFQQNPFQFoNEQFqNElQNPg");
	var mask_graphics_88 = new cjs.Graphics().p("EghTgA+QFCtUM+l4QM/l2NTFCQNUFCF3M+QF4M+lCNUg");
	var mask_graphics_89 = new cjs.Graphics().p("EghagAKQE0taM4mFQM4mENZEzQNaE0GEM3QGFM4kzNag");
	var mask_graphics_90 = new cjs.Graphics().p("EghgAApQEmteMxmTQMymSNeElQNeEmGSMxQGTMxklNeg");
	var mask_graphics_91 = new cjs.Graphics().p("EghlABdQEXtjMqmgQMrmgNjEXQNjEXGgMqQGgMrkXNjg");
	var mask_graphics_92 = new cjs.Graphics().p("EghrACRQEJtnMjmuQMkmtNnEJQNoEIGtMjQGuMjkINog");
	var mask_graphics_93 = new cjs.Graphics().p("EghwADGQD6trMcm8QMdm6NrD6QNtD6G6MbQG7Mcj5Ntg");
	var mask_graphics_94 = new cjs.Graphics().p("Egh0AD7QDrtwMUnIQMWnINvDrQNwDsHIMUQHJMUjsNxg");
	var mask_graphics_95 = new cjs.Graphics().p("Egh5AEwQDdtzMNnWQMNnVNzDdQN0DcHVMNQHWMNjdN0g");
	var mask_graphics_96 = new cjs.Graphics().p("Egh9AFlQDOt2MFnjQMFniN3DOQN4DOHhMEQHjMFjON4g");
	var mask_graphics_97 = new cjs.Graphics().p("EgiBAGbQC/t6L9nwQL9nuN6C/QN7C/HvL8QHvL9i+N7g");
	var mask_graphics_98 = new cjs.Graphics().p("EgiEAHQQCwt9L0n8QL1n7N9CwQN+CwH8L0QH8L0iwN+g");
	var mask_graphics_99 = new cjs.Graphics().p("EgiHAIGQChuALroJQLtoHOAChQOBChIILsQIILrihOBg");
	var mask_graphics_100 = new cjs.Graphics().p("EgiKAI8QCSuCLjoVQLkoUOCCSQODCSIVLiQIVLkiSODg");
	var mask_graphics_101 = new cjs.Graphics().p("EgiNAJyQCDuELaoiQLbogOFCDQOGCDIgLaQIhLaiDOFg");
	var mask_graphics_102 = new cjs.Graphics().p("EgiPAKpQB0uHLRouQLRosOHB0QOIB0IsLRQIuLQh0OIg");
	var mask_graphics_103 = new cjs.Graphics().p("EgiRALfQBluILHo6QLJo4OIBlQOKBlI4LHQI6LHhlOKg");
	var mask_graphics_104 = new cjs.Graphics().p("EgiTAMWQBWuKK+pGQK/pEOKBWQOLBWJEK9QJGK+hWOLg");
	var mask_graphics_105 = new cjs.Graphics().p("EgiUANMQBHuLK0pRQK1pQOLBHQOMBHJQKzQJRK0hGONg");
	var mask_graphics_106 = new cjs.Graphics().p("EgiVAODQA3uMKqpdQKrpbONA3QONA4JcKqQJcKqg3ONg");
	var mask_graphics_107 = new cjs.Graphics().p("EgiWAO6QAouOKgpnQKhpnONApQOPAoJmKgQJoKggoOOg");
	var mask_graphics_108 = new cjs.Graphics().p("EgiXAPxQAauPKVpyQKXpyONAaQOPAZJyKVQJzKWgZOOg");
	var mask_graphics_109 = new cjs.Graphics().p("EgiXAQoQAKuPKLp9QKMp9OOAKQOPAKJ9KLQJ+KLgKOPg");
	var mask_graphics_110 = new cjs.Graphics().p("A4cnFQKBqHOPgFQOPgFKHKAQKJKAAFOPMhEvAAZQgFuPKAqIg");
	var mask_graphics_111 = new cjs.Graphics().p("A41m8QJ2qTOPgUQOOgUKSJ1QKTJ1AVOPMhEuABjQgUuPJ1qSg");
	var mask_graphics_112 = new cjs.Graphics().p("A5Om0QJsqcOOgkQOOgkKcJrQKeJqAjOOMhErACsQgkuOJqqdg");
	var mask_graphics_113 = new cjs.Graphics().p("A5lmrQJgqnONgyQONgzKnJfQKoJfAzONMhEpAD1QgyuNJfqng");
	var mask_graphics_114 = new cjs.Graphics().p("A58miQJUqwONhCQOMhCKxJTQKyJVBBOMMhEjAE+QhCuNJUqxg");
	var mask_graphics_115 = new cjs.Graphics().p("A6SmYQJJq6OLhRQOLhSK6JIQK8JJBROLMhEdAGHQhRuLJIq7g");
	var mask_graphics_116 = new cjs.Graphics().p("A6omOQI+rEOKhgQOJhgLEI8QLFI9BhOJMhEXAHRQhguKI8rFg");
	var mask_graphics_117 = new cjs.Graphics().p("A68mDQIxrNOJhwQOHhvLNIwQLPIyBwOHMhEOAIZQhwuIIxrOg");
	var mask_graphics_118 = new cjs.Graphics().p("A7Ql4QIlrXOHh+QOFh+LXIkQLYIlB/OFMhEFAJjQh+uHIkrXg");
	var mask_graphics_119 = new cjs.Graphics().p("A7jlsQIZrgOEiNQOEiOLfIYQLiIZCNODMhD6AKrQiNuEIYrgg");
	var mask_graphics_120 = new cjs.Graphics().p("A71lgQINrpOBicQOBidLpIMQLqINCcOAMhDtALzQiduBIMrpg");
	var mask_graphics_121 = new cjs.Graphics().p("A8GlUQIArxN/isQN+irLxH/QLzIACrN+MhDgAM8Qist/IAryg");
	var mask_graphics_122 = new cjs.Graphics().p("A8XlHQH0r6N8i6QN7i6L5HyQL8H0C6N6MhDSAOEQi6t8Hyr6g");
	var mask_graphics_123 = new cjs.Graphics().p("A8nk6QHnsCN5jJQN4jJMCHmQMDHmDJN4MhDCAPLQjJt5HlsCg");
	var mask_graphics_124 = new cjs.Graphics().p("A82ksQHasKN2jYQN0jYMKHZQMLHZDYN1MhCyAQSQjXt1HYsKg");
	var mask_graphics_125 = new cjs.Graphics().p("A9EkeQHNsSNyjnQNwjnMSHMQMTHNDnNwMhCgARaQjmtxHLsSg");
	var mask_graphics_126 = new cjs.Graphics().p("A9RkQQHAsaNtj1QNtj1MZG+QMbHAD1NsMhCMAShQj2tuG/sZg");
	var mask_graphics_127 = new cjs.Graphics().p("A9ekBQGzshNpkEQNpkEMgGxQMiGyEENpMhB4ATnQkEtqGxsgg");
	var mask_graphics_128 = new cjs.Graphics().p("A9pjyQGlsoNlkTQNkkSMnGkQMqGkESNkMhBjAUtQkStkGksog");
	var mask_graphics_129 = new cjs.Graphics().p("A90jjQGXsvNhkhQNfkhMuGXQMxGXEhNfMhBMAVzQkhtgGWsvg");
	var mask_graphics_130 = new cjs.Graphics().p("A9+jTQGKs2NbkvQNakvM2GIQM2GKEwNaMhA1AW4QkvtbGJs1g");
	var mask_graphics_131 = new cjs.Graphics().p("A+HjDQF8s8NWk+QNVk9M8F7QM9F7E9NWMhAbAX9Qk9tWF7s8g");
	var mask_graphics_132 = new cjs.Graphics().p("A+QizQFvtCNQlMQNQlMNCFuQNDFtFMNRMhABAZBQlMtRFttCg");
	var mask_graphics_133 = new cjs.Graphics().p("A+XiiQFgtINLlaQNKlaNIFfQNJFgFaNLMg/mAaFQlZtLFftIg");
	var mask_graphics_134 = new cjs.Graphics().p("A+eiRQFStONFloQNEloNOFRQNPFSFoNFMg/JAbJQlotFFRtOg");
	var mask_graphics_135 = new cjs.Graphics().p("A+kiAQFEtTM/l2QM+l2NTFDQNVFEF2M/Mg+sAcMQl2s/FDtUg");
	var mask_graphics_136 = new cjs.Graphics().p("A+phuQE2tZM4mDQM5mENXE1QNaE1GEM5Mg+NAdOQmEs4E1tZg");
	var mask_graphics_137 = new cjs.Graphics().p("A+uhcQEoteMymRQMymRNdEmQNfEnGRMyMg9tAeRQmSsyEmteg");
	var mask_graphics_138 = new cjs.Graphics().p("A+xhKQEZtiMrmfQMsmfNhEYQNkEZGfMrMg9NAfSQmfsrEYtjg");
	var mask_graphics_139 = new cjs.Graphics().p("A+0g3QELtnMkmtQMkmsNmEKQNpEKGsMkMg8rAgTQmsskEJtng");
	var mask_graphics_140 = new cjs.Graphics().p("A+1gkQD8tsMdm5QMdm6NqD7QNtD7G5MdMg8HAhUQm6sdD7trg");
	var mask_graphics_141 = new cjs.Graphics().p("A+2gRQDttwMWnGQMVnHNuDsQNxDtHHMVMg7jAiUQnHsWDstvg");
	var mask_graphics_142 = new cjs.Graphics().p("A+3ACQDftzMOnUQMOnUNyDeQN1DeHTMOMg6+AjSQnUsNDdt0g");
	var mask_graphics_143 = new cjs.Graphics().p("A+2AWQDQt3MGnhQMGnhN2DPQN4DQHhMFMg6YAkSQnhsGDOt3g");
	var mask_graphics_144 = new cjs.Graphics().p("A+0AqQDBt6L+nuQL9nuN5DBQN8DAHuL+Mg5xAlPQnur9DAt7g");
	var mask_graphics_145 = new cjs.Graphics().p("A+yA+QCzt9L1n6QL1n7N8CyQN/CxH6L1Mg5IAmNQn6r1Cwt+g");
	var mask_graphics_146 = new cjs.Graphics().p("A+vBTQCkuALtoHQLtoHN+CiQOCCjIHLtMg4fAnJQoHrsChuBg");
	var mask_graphics_147 = new cjs.Graphics().p("A+qBoQCUuCLkoUQLkoTOCCTQOECUITLkMg31AoFQoTrkCTuDg");
	var mask_graphics_148 = new cjs.Graphics().p("A+lB9QCFuFLbofQLbogOECEQOGCFIgLbMg3JApBQogrbCEuGg");
	var mask_graphics_149 = new cjs.Graphics().p("A+gCSQB3uGLSosQLSosOFB1QOJB2IsLSMg2dAp7QosrSB0uIg");
	var mask_graphics_150 = new cjs.Graphics().p("A+ZCoQBnuILJo4QLJo4OHBmQOLBnI3LIMg1wAq1Qo3rIBluKg");
	var mask_graphics_151 = new cjs.Graphics().p("A+RC+QBYuKK/pDQK/pEOJBXQOMBXJEK/Mg1CAruQpEq/BXuLg");
	var mask_graphics_152 = new cjs.Graphics().p("A+JDVQBJuMK1pPQK2pPOKBIQONBIJQK1Mg0TAsmQpPq1BHuMg");
	var mask_graphics_153 = new cjs.Graphics().p("A+ADrQA6uMKrpbQKspbOLA5QOPA5JaKrMgziAteQpbqrA4uOg");
	var mask_graphics_154 = new cjs.Graphics().p("A92ECQAruNKhpmQKhpmONApQOPAqJmKhMgyxAuUQpnqhApuOg");
	var mask_graphics_155 = new cjs.Graphics().p("A9rEZQAcuOKXpxQKXpxONAaQOPAbJyKXMgyAAvKQpxqXAZuPg");
	var mask_graphics_156 = new cjs.Graphics().p("A9fEwQANuOKMp8QKMp8OOALQOQAMJ8KMMgxNAv/Qp8qMAKuQg");
	var mask_graphics_157 = new cjs.Graphics().p("A9SFIQgDuOKCqHQKBqHOOgEQOQgEKHKCMgwZAwzQqHqCgFuPg");
	var mask_graphics_158 = new cjs.Graphics().p("A9EFgQgSuOJ2qSQJ3qRONgTQOQgTKSJ2MgvlAxnQqRp3gUuPg");
	var mask_graphics_159 = new cjs.Graphics().p("A82F4QghuNJsqcQJrqcONgjQOQgiKbJsMguvAyYQqcprgjuPg");
	var mask_graphics_160 = new cjs.Graphics().p("A8mGRQgxuNJhqnQJgqmOMgxQOPgyKmJhMgt5AzKQqmpggyuOg");
	var mask_graphics_161 = new cjs.Graphics().p("A8WGpQhAuMJVqwQJVqwOLhBQOOhBKwJVMgtCAz7QqwpVhBuNg");
	var mask_graphics_162 = new cjs.Graphics().p("A8FHCQhPuLJJq6QJKq6OKhQQOMhQK7JKMgsLA0qQq6pJhQuMg");
	var mask_graphics_163 = new cjs.Graphics().p("A7zHbQheuJI9rEQI+rEOJhfQOLhfLEI+MgrSA1ZQrEo+hfuKg");
	var mask_graphics_164 = new cjs.Graphics().p("A7hH0QhtuHIyrOQIyrNOHhuQOJhuLNIyMgqYA2HQrNoyhvuJg");
	var mask_graphics_165 = new cjs.Graphics().p("A7NIOQh8uGIlrWQImrXOFh9QOIh9LWImMgpeA2zQrWomh+uGg");
	var mask_graphics_166 = new cjs.Graphics().p("A65InQiLuDIZrgQIarfODiMQOFiNLgIaMgokA3fQrfoZiNuFg");
	var mask_graphics_167 = new cjs.Graphics().p("A6kJBQiauBINroQINrpOBibQOCibLpINMgnoA4KQrooNicuCg");
	var mask_graphics_168 = new cjs.Graphics().p("A6OJbQipt+IBryQIArxN+iqQOAiqLxIBMgmrA40QrxoBirt/g");
	var mask_graphics_169 = new cjs.Graphics().p("A53J1Qi5t7H1r6QH0r6N6i4QN9i6L6H1MgluA5cQr6n0i5t8g");
	var mask_graphics_170 = new cjs.Graphics().p("A5gKPQjHt4HnsCQHosCN3jHQN6jIMCHnMgkxA6FQsCnojIt5g");
	var mask_graphics_171 = new cjs.Graphics().p("A5IKqQjWt1HbsKQHasKN0jWQN3jXMJHaMgjyA6rQsKnajXt1g");
	var mask_graphics_172 = new cjs.Graphics().p("A4vLEQjltxHOsSQHNsSNxjlQNyjlMSHNMgi0A7RQsRnNjmtyg");
	var mask_graphics_173 = new cjs.Graphics().p("A4WLeQjzttHBsZQHAsZNtj0QNuj0MZHAMgh0A71QsZnAj1tug");
	var mask_graphics_174 = new cjs.Graphics().p("A37L5QkCtpGzshQGzsgNpkDQNqkDMgGzMggzA8ZQshmzkDtpg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:135.5,y:21.1}).wait(1).to({graphics:mask_graphics_1,x:136.9,y:20.8}).wait(1).to({graphics:mask_graphics_2,x:136.8,y:20.5}).wait(1).to({graphics:mask_graphics_3,x:136.8,y:20.3}).wait(1).to({graphics:mask_graphics_4,x:136.8,y:20}).wait(1).to({graphics:mask_graphics_5,x:136.8,y:19.8}).wait(1).to({graphics:mask_graphics_6,x:136.7,y:19.7}).wait(1).to({graphics:mask_graphics_7,x:136.7,y:19.5}).wait(1).to({graphics:mask_graphics_8,x:136.7,y:19.4}).wait(1).to({graphics:mask_graphics_9,x:136.7,y:19.4}).wait(1).to({graphics:mask_graphics_10,x:136.6,y:19.3}).wait(1).to({graphics:mask_graphics_11,x:136.6,y:19.3}).wait(1).to({graphics:mask_graphics_12,x:136.6,y:19.3}).wait(1).to({graphics:mask_graphics_13,x:136.6,y:19.4}).wait(1).to({graphics:mask_graphics_14,x:136.6,y:19.5}).wait(1).to({graphics:mask_graphics_15,x:136.6,y:19.6}).wait(1).to({graphics:mask_graphics_16,x:136.6,y:19.8}).wait(1).to({graphics:mask_graphics_17,x:136.6,y:19.9}).wait(1).to({graphics:mask_graphics_18,x:136.6,y:20}).wait(1).to({graphics:mask_graphics_19,x:136.7,y:20}).wait(1).to({graphics:mask_graphics_20,x:136.7,y:20.1}).wait(1).to({graphics:mask_graphics_21,x:136.7,y:20.1}).wait(1).to({graphics:mask_graphics_22,x:136.8,y:20}).wait(1).to({graphics:mask_graphics_23,x:136.8,y:19.9}).wait(1).to({graphics:mask_graphics_24,x:136.9,y:19.8}).wait(1).to({graphics:mask_graphics_25,x:136.9,y:19.7}).wait(1).to({graphics:mask_graphics_26,x:136.9,y:19.5}).wait(1).to({graphics:mask_graphics_27,x:137,y:19.3}).wait(1).to({graphics:mask_graphics_28,x:137,y:19.1}).wait(1).to({graphics:mask_graphics_29,x:137.1,y:18.8}).wait(1).to({graphics:mask_graphics_30,x:137.1,y:18.5}).wait(1).to({graphics:mask_graphics_31,x:135.9,y:18.2}).wait(1).to({graphics:mask_graphics_32,x:134.2,y:17.8}).wait(1).to({graphics:mask_graphics_33,x:132.5,y:17.5}).wait(1).to({graphics:mask_graphics_34,x:130.9,y:17.1}).wait(1).to({graphics:mask_graphics_35,x:129.2,y:16.6}).wait(1).to({graphics:mask_graphics_36,x:127.6,y:16.2}).wait(1).to({graphics:mask_graphics_37,x:125.9,y:15.7}).wait(1).to({graphics:mask_graphics_38,x:124.3,y:15.2}).wait(1).to({graphics:mask_graphics_39,x:122.7,y:14.6}).wait(1).to({graphics:mask_graphics_40,x:121,y:14}).wait(1).to({graphics:mask_graphics_41,x:119.4,y:13.4}).wait(1).to({graphics:mask_graphics_42,x:117.9,y:12.8}).wait(1).to({graphics:mask_graphics_43,x:116.3,y:12.2}).wait(1).to({graphics:mask_graphics_44,x:114.7,y:11.5}).wait(1).to({graphics:mask_graphics_45,x:113.2,y:10.8}).wait(1).to({graphics:mask_graphics_46,x:111.6,y:10}).wait(1).to({graphics:mask_graphics_47,x:110.1,y:9.3}).wait(1).to({graphics:mask_graphics_48,x:108.6,y:8.5}).wait(1).to({graphics:mask_graphics_49,x:107.1,y:7.7}).wait(1).to({graphics:mask_graphics_50,x:105.7,y:6.8}).wait(1).to({graphics:mask_graphics_51,x:104.2,y:6}).wait(1).to({graphics:mask_graphics_52,x:102.8,y:5.1}).wait(1).to({graphics:mask_graphics_53,x:101.4,y:4.1}).wait(1).to({graphics:mask_graphics_54,x:100,y:3.2}).wait(1).to({graphics:mask_graphics_55,x:98.6,y:2.2}).wait(1).to({graphics:mask_graphics_56,x:97.3,y:1.2}).wait(1).to({graphics:mask_graphics_57,x:96,y:0.2}).wait(1).to({graphics:mask_graphics_58,x:94.7,y:-0.9}).wait(1).to({graphics:mask_graphics_59,x:93.4,y:-1.9}).wait(1).to({graphics:mask_graphics_60,x:92.1,y:-3}).wait(1).to({graphics:mask_graphics_61,x:90.9,y:-4.2}).wait(1).to({graphics:mask_graphics_62,x:89.7,y:-5.3}).wait(1).to({graphics:mask_graphics_63,x:88.5,y:-6.5}).wait(1).to({graphics:mask_graphics_64,x:87.4,y:-7.8}).wait(1).to({graphics:mask_graphics_65,x:86.3,y:-9}).wait(1).to({graphics:mask_graphics_66,x:85.2,y:-10.3}).wait(1).to({graphics:mask_graphics_67,x:84.1,y:-11.6}).wait(1).to({graphics:mask_graphics_68,x:83.1,y:-12.9}).wait(1).to({graphics:mask_graphics_69,x:82.1,y:-14.3}).wait(1).to({graphics:mask_graphics_70,x:81.1,y:-15.6}).wait(1).to({graphics:mask_graphics_71,x:80.1,y:-17}).wait(1).to({graphics:mask_graphics_72,x:79.2,y:-18.4}).wait(1).to({graphics:mask_graphics_73,x:78.3,y:-19.9}).wait(1).to({graphics:mask_graphics_74,x:77.4,y:-21.3}).wait(1).to({graphics:mask_graphics_75,x:76.6,y:-22.8}).wait(1).to({graphics:mask_graphics_76,x:75.8,y:-24.3}).wait(1).to({graphics:mask_graphics_77,x:75,y:-25.8}).wait(1).to({graphics:mask_graphics_78,x:74.2,y:-27.3}).wait(1).to({graphics:mask_graphics_79,x:73.4,y:-28.9}).wait(1).to({graphics:mask_graphics_80,x:72.7,y:-30.4}).wait(1).to({graphics:mask_graphics_81,x:72,y:-32}).wait(1).to({graphics:mask_graphics_82,x:71.4,y:-33.6}).wait(1).to({graphics:mask_graphics_83,x:70.7,y:-35.2}).wait(1).to({graphics:mask_graphics_84,x:70.1,y:-36.8}).wait(1).to({graphics:mask_graphics_85,x:69.5,y:-38.4}).wait(1).to({graphics:mask_graphics_86,x:69,y:-40.1}).wait(1).to({graphics:mask_graphics_87,x:68.4,y:-41.7}).wait(1).to({graphics:mask_graphics_88,x:67.9,y:-43.4}).wait(1).to({graphics:mask_graphics_89,x:67.4,y:-45.1}).wait(1).to({graphics:mask_graphics_90,x:67,y:-46.7}).wait(1).to({graphics:mask_graphics_91,x:66.6,y:-48.4}).wait(1).to({graphics:mask_graphics_92,x:66.2,y:-50.1}).wait(1).to({graphics:mask_graphics_93,x:65.8,y:-51.9}).wait(1).to({graphics:mask_graphics_94,x:65.4,y:-53.6}).wait(1).to({graphics:mask_graphics_95,x:65.1,y:-55.3}).wait(1).to({graphics:mask_graphics_96,x:64.8,y:-57.1}).wait(1).to({graphics:mask_graphics_97,x:64.6,y:-58.8}).wait(1).to({graphics:mask_graphics_98,x:64.4,y:-60.6}).wait(1).to({graphics:mask_graphics_99,x:64.2,y:-62.3}).wait(1).to({graphics:mask_graphics_100,x:64,y:-64.1}).wait(1).to({graphics:mask_graphics_101,x:63.8,y:-65.9}).wait(1).to({graphics:mask_graphics_102,x:63.7,y:-67.7}).wait(1).to({graphics:mask_graphics_103,x:63.7,y:-69.5}).wait(1).to({graphics:mask_graphics_104,x:63.6,y:-71.3}).wait(1).to({graphics:mask_graphics_105,x:63.6,y:-73.1}).wait(1).to({graphics:mask_graphics_106,x:63.6,y:-74.9}).wait(1).to({graphics:mask_graphics_107,x:63.7,y:-76.8}).wait(1).to({graphics:mask_graphics_108,x:63.8,y:-78.6}).wait(1).to({graphics:mask_graphics_109,x:63.9,y:-80.4}).wait(1).to({graphics:mask_graphics_110,x:64,y:-81}).wait(1).to({graphics:mask_graphics_111,x:64.2,y:-79.2}).wait(1).to({graphics:mask_graphics_112,x:64.3,y:-77.4}).wait(1).to({graphics:mask_graphics_113,x:64.3,y:-75.6}).wait(1).to({graphics:mask_graphics_114,x:64.4,y:-73.8}).wait(1).to({graphics:mask_graphics_115,x:64.3,y:-72.1}).wait(1).to({graphics:mask_graphics_116,x:64.3,y:-70.3}).wait(1).to({graphics:mask_graphics_117,x:64.2,y:-68.5}).wait(1).to({graphics:mask_graphics_118,x:64.1,y:-66.8}).wait(1).to({graphics:mask_graphics_119,x:64,y:-65}).wait(1).to({graphics:mask_graphics_120,x:63.8,y:-63.3}).wait(1).to({graphics:mask_graphics_121,x:63.6,y:-61.5}).wait(1).to({graphics:mask_graphics_122,x:63.4,y:-59.8}).wait(1).to({graphics:mask_graphics_123,x:63.2,y:-58.1}).wait(1).to({graphics:mask_graphics_124,x:62.9,y:-56.4}).wait(1).to({graphics:mask_graphics_125,x:62.6,y:-54.7}).wait(1).to({graphics:mask_graphics_126,x:62.2,y:-53}).wait(1).to({graphics:mask_graphics_127,x:61.8,y:-51.3}).wait(1).to({graphics:mask_graphics_128,x:61.4,y:-49.6}).wait(1).to({graphics:mask_graphics_129,x:61,y:-47.9}).wait(1).to({graphics:mask_graphics_130,x:60.5,y:-46.3}).wait(1).to({graphics:mask_graphics_131,x:60.1,y:-44.6}).wait(1).to({graphics:mask_graphics_132,x:59.6,y:-43}).wait(1).to({graphics:mask_graphics_133,x:59,y:-41.4}).wait(1).to({graphics:mask_graphics_134,x:58.4,y:-39.7}).wait(1).to({graphics:mask_graphics_135,x:57.8,y:-38.1}).wait(1).to({graphics:mask_graphics_136,x:57.2,y:-36.6}).wait(1).to({graphics:mask_graphics_137,x:56.6,y:-35}).wait(1).to({graphics:mask_graphics_138,x:55.9,y:-33.4}).wait(1).to({graphics:mask_graphics_139,x:55.2,y:-31.9}).wait(1).to({graphics:mask_graphics_140,x:54.5,y:-30.3}).wait(1).to({graphics:mask_graphics_141,x:53.7,y:-28.8}).wait(1).to({graphics:mask_graphics_142,x:52.9,y:-27.3}).wait(1).to({graphics:mask_graphics_143,x:52.1,y:-25.8}).wait(1).to({graphics:mask_graphics_144,x:51.3,y:-24.4}).wait(1).to({graphics:mask_graphics_145,x:50.4,y:-22.9}).wait(1).to({graphics:mask_graphics_146,x:49.5,y:-21.5}).wait(1).to({graphics:mask_graphics_147,x:48.6,y:-20.1}).wait(1).to({graphics:mask_graphics_148,x:47.7,y:-18.7}).wait(1).to({graphics:mask_graphics_149,x:46.7,y:-17.3}).wait(1).to({graphics:mask_graphics_150,x:45.7,y:-15.9}).wait(1).to({graphics:mask_graphics_151,x:44.7,y:-14.6}).wait(1).to({graphics:mask_graphics_152,x:43.7,y:-13.3}).wait(1).to({graphics:mask_graphics_153,x:42.6,y:-12}).wait(1).to({graphics:mask_graphics_154,x:41.5,y:-10.8}).wait(1).to({graphics:mask_graphics_155,x:40.4,y:-9.5}).wait(1).to({graphics:mask_graphics_156,x:39.2,y:-8.3}).wait(1).to({graphics:mask_graphics_157,x:38,y:-7.1}).wait(1).to({graphics:mask_graphics_158,x:36.8,y:-6}).wait(1).to({graphics:mask_graphics_159,x:35.5,y:-4.9}).wait(1).to({graphics:mask_graphics_160,x:34.3,y:-3.8}).wait(1).to({graphics:mask_graphics_161,x:33,y:-2.7}).wait(1).to({graphics:mask_graphics_162,x:31.7,y:-1.7}).wait(1).to({graphics:mask_graphics_163,x:30.3,y:-0.6}).wait(1).to({graphics:mask_graphics_164,x:29,y:0.3}).wait(1).to({graphics:mask_graphics_165,x:27.6,y:1.3}).wait(1).to({graphics:mask_graphics_166,x:26.2,y:2.2}).wait(1).to({graphics:mask_graphics_167,x:24.7,y:3.1}).wait(1).to({graphics:mask_graphics_168,x:23.3,y:4}).wait(1).to({graphics:mask_graphics_169,x:21.8,y:4.9}).wait(1).to({graphics:mask_graphics_170,x:20.3,y:5.7}).wait(1).to({graphics:mask_graphics_171,x:18.8,y:6.5}).wait(1).to({graphics:mask_graphics_172,x:17.3,y:7.3}).wait(1).to({graphics:mask_graphics_173,x:15.8,y:8}).wait(1).to({graphics:mask_graphics_174,x:14.2,y:8.8}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("Ah4ToQokkOispQQiupTFdoDQFkoOJ7gMQEhgFEcAt");
	this.shape.setTransform(0.2,-4.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(175));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.8,-136.9,101.9,260.7);


(lib.honeyflap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.honeybee();
	this.instance.parent = this;
	this.instance.setTransform(22.5,-144.2,0.422,0.422,0,0,0,-37.7,63.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHB9IgTgDQgNgDgLgFIgEgBIgBgBIAAAAIgBgBIgBAAIAAAAIgBgBIgBAAIAAAAIgBgBIgBAAIgBgBIAAAAIgBAAIAAgBIgBAAIgBAAIAAgBIgBAAIgBgBIAAAAIgBAAIAAgBIgBAAIAAgBIgBAAIAAAAIgBgBIgBAAIAAAAIgBgBIAAAAIgBgBIAAAAIgBAAIgBgBIAAgBIgBAAIAAAAIgBgBIgBgBIAAAAIgBAAIgCgCIAAAAIgBgBIAAAAIgBgBIAAAAIAAgBIgBAAIAAAAIgBgBIAAAAIAAgBIgBAAIAAAAIgBgBIAAAAIgBgBIAAAAIAAAAIgBgBIgBgBIAAAAIAAgBIgBAAIAAAAIAAgBIgBAAIAAgBIgBgBIgBAAIAAgBIAAAAIgBgBIgBgBIAAAAIAAgBIgBAAIgBgBIAAgBIAAAAIgBgBIAAAAIAAgBIgBAAIAAAAIAAgBIAAAAIgBgBIAAAAIAAgBIgBAAIAAAAIAAgBIgBgBIAAgBIgBAAIAAgBIgBAAIAAgBIAAgBIgBAAIAAgBIAAgBIgBgBIAAAAIgBgBIAAAAIAAgBIAAAAIgBgBIAAgBIgBgBIAAgBIgBgBIgBgCIAAAAIAAgBIAAgBIgBAAIAAgBIAAAAIAAgBIgBAAIAAgBIAAgBIAAgBIgBAAIAAgBIAAAAIAAgBIgBAAIAAgBIAAgBIAAgBIgBgBIAAgBIAAAAIAAgBIgBAAIAAgCIAAAAIAAgBIgBgBIAAgCIAAAAIAAgCIgBAAIAAgBIAAgBIAAgCIgBgBIAAgCIAAAAIAAgDIgBgBIAAgDIAAAAIAAgEIgBgBIAAgIIAAAAIAAAAIAAgCIAAAAIAAgBIAAAAIAAgBIAAgHIABAAIgBgBIABAAIAAgFIAAAAIAAgDIABgBIAAgCIAAAAIAAgCIABgBIAAgCIAAAAIAAgCIABAAIAAgCIAAAAIAAgCIABAAIAAgCIAAAAIAAgBIABgBIAAgBIAAAAIAAgBIABgBIAAgBIAAgBIAAAAIABgBIAAgBIAAAAIAAgBIABAAIAAgBIAAgBIAAAAIABgBIAAgBIAAAAIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAgBIAAgBIAAAAIABgBIAAAAIAAgBIABAAIAAgBIAAAAIAAgBIABgBIAAAAIAAgBIAAAAIABgBIAAAAIAAgBIABAAIAAgBIAAAAIABgBIAAAAIAAgBIAAAAIABgBIAAAAIAAgBIABAAIAAgBIABAAIAAgBIAAAAIABgBIAAgBIAAAAIABgBIAAAAIAAgBIABAAIABgBIAAgBIABgBIAAAAIABgBIAAAAIAAgBIABgBIAAAAIABgBIAAAAIACgCIAAAAIAAgBIABAAIAAgBIABAAIABgBIAAgBIAAAAIABgBIABAAIAAgBIABAAIAAgBIABAAIAAgBIABgBIABgBIABgBIAEgDIAMgJIARgJIAHgDIAPgFIALgCIAOgBIANAAIAMACIANADIAMAEIADACIABAAIABAAIABABIABAAIAAAAIABABIABAAIAAABIABAAIABAAIABABIAAAAIABAAIABABIAAAAIABAAIABABIAAAAIABABIABAAIAAAAIABABIAAAAIABABIABAAIAAAAIABABIAAAAIABAAIABABIAAAAIABABIAAAAIABABIABAAIABABIAAAAIABAAIAAABIABABIABAAIAAAAIABABIABABIAAAAIABAAIAAABIABAAIAAABIAAAAIABABIABAAIAAABIABAAIAAAAIABABIAAAAIAAABIABAAIAAAAIABABIAAAAIAAABIABAAIAAABIABAAIAAAAIABABIAAAAIAAABIABAAIAAAAIAAABIABAAIAAABIABABIABAAIAAABIABABIABABIABABIAAAAIABABIAAABIABAAIAAABIABABIAAAAIAAAAIAAABIABAAIAAABIAAAAIABABIAAAAIAAAAIABABIAAAAIAAABIAAAAIABABIAAAAIAAAAIABABIAAAAIAAABIAAAAIABABIAAAAIABABIAAABIAAAAIAAABIABAAIAAABIAAAAIABABIAAAAIAAABIAAAAIABABIAAAAIAAABIABAAIAAABIAAABIAAAAIABABIAAAAIAAAAIAAABIABABIAAAAIAAABIAAAAIABABIAAAAIAAABIAAABIABAAIAAABIAAAAIAAABIABABIAAAAIAAABIAAABIABAAIAAABIAAABIAAABIABAAIAAABIAAABIAAABIABAAIAAABIAAABIAAABIABABIAAABIAAABIAAAAIABABIAAACIAAAAIAAACIABABIAAABIAAABIAAACIAAABIABABIAAABIAAABIAAABIAAACIABABIAAAGIAAABIAAAAIAAABIAAAJIAAABIAAAAIAAABIAAAAIAAABIAAAFIgBAAIAAAEIAAAAIAAADIgBAAIAAACIAAABIAAABIAAABIgBABIAAACIAAAAIAAACIgBAAIAAACIAAAAIAAACIgBAAIAAACIAAAAIAAABIgBAAIAAACIAAAAIAAABIgBABIAAABIAAAAIAAABIgBABIAAAAIAAABIAAABIgBAAIAAABIAAAAIAAABIgBABIAAAAIAAABIAAABIgBAAIAAABIAAAAIAAABIgBAAIAAABIAAAAIAAABIgBAAIAAABIAAAAIAAABIgBAAIAAABIAAAAIAAABIgBAAIAAABIAAAAIgBABIAAAAIAAABIAAAAIgBABIAAAAIAAABIgBABIAAAAIAAABIgBAAIAAABIAAAAIgBABIAAAAIAAABIgBAAIAAABIAAAAIgBABIAAAAIAAABIgBAAIAAABIgBAAIAAABIAAABIgBABIAAAAIgBABIAAAAIgBABIAAAAIgBABIAAAAIgBABIAAAAIAAABIgBABIAAAAIgBABIAAAAIgBABIAAAAIgCACIgBABIAAABIgBAAIgBABIgBABIAAAAIgBABIgBABIgBABIAAAAIgBABIgBAAIgDADIgNAKIgQAIIgIADQgLAEgMACQgLABgKAAIgFAAg");
	this.shape.setTransform(22.4,-143.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-215.3,105.5,84.1);


// stage content:
(lib.writingsuccess_Fontkid_G = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_499 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(499).call(this.frame_499).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(404.3,158.9,0.999,0.999,8.5,0,0,22.4,-144);
	this.instance._off = true;

	this.instance_1 = new lib.honeybee();
	this.instance_1.parent = this;
	this.instance_1.setTransform(269.6,275.4,0.421,0.421,-21.5,0,0,-37.7,63.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:-12.6,guide:{path:[404.1,159,401.5,156.3,398.7,153.6,397.1,152,395.5,150.5,345.2,103.8,275,103.8,202.5,103.8,151.3,153.6,100.1,203.4,100.1,273.8,100.1,344.3,151.3,394.1,197.9,439.4,261.9,443.5]}},205).to({scaleX:1,scaleY:1,rotation:-21.5,guide:{path:[261.9,443.5,268.3,443.9,275,443.9,347.5,443.9,398.7,394.1,447.4,346.8,449.5,276.5]}},86).wait(10).to({x:273.5,y:275.5},0).to({x:448.5},100).to({_off:true},9).wait(81));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(419).to({_off:false},0).to({regY:63.5,rotation:-43.3,guide:{path:[269,275.7,235.3,217.9,174.7,226.8,160.5,229,149.3,239,102.1,281,109.5,343.4,114.4,384.7,132.6,422.8,159.6,479.5,126,530.1,93.1,579.6,56.4,626.5,47.5,637.9,37.9,648.7]}},80).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(449.6,276.6,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},291).wait(10).to({_off:false,x:448.8,y:274.5},0).to({_off:true},100).wait(90));

	// ar2
	this.instance_2 = new lib.ar2("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(373,326,1,1,0,0,0,81.1,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(310).to({_off:false},0).wait(190));

	// ar1
	this.instance_3 = new lib.ar1("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(237,270.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).wait(491));

	// 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(25,1,1).p("AAPAAIgdAA");
	this.shape_1.setTransform(273.5,275.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(25,1,1).p("AgXAAIAvAA");
	this.shape_2.setTransform(274.4,275.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(25,1,1).p("AggAAIBBAA");
	this.shape_3.setTransform(275.3,275.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(25,1,1).p("AgoAAIBRAA");
	this.shape_4.setTransform(276.2,275.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(25,1,1).p("AgxAAIBjAA");
	this.shape_5.setTransform(277,275.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(25,1,1).p("Ag5AAIB0AA");
	this.shape_6.setTransform(277.9,275.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(25,1,1).p("AhCAAICFAA");
	this.shape_7.setTransform(278.8,275.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(25,1,1).p("AhLAAICXAA");
	this.shape_8.setTransform(279.6,275.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(25,1,1).p("AhTAAICnAA");
	this.shape_9.setTransform(280.5,275.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(25,1,1).p("AhcAAIC5AA");
	this.shape_10.setTransform(281.4,275.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(25,1,1).p("AhlAAIDLAA");
	this.shape_11.setTransform(282.3,275.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(25,1,1).p("AhtAAIDcAA");
	this.shape_12.setTransform(283.2,275.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(25,1,1).p("Ah2AAIDtAA");
	this.shape_13.setTransform(284,275.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(25,1,1).p("Ah/AAID/AA");
	this.shape_14.setTransform(284.9,275.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(25,1,1).p("AiHAAIEQAA");
	this.shape_15.setTransform(285.8,275.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(25,1,1).p("AiQAAIEhAA");
	this.shape_16.setTransform(286.7,275.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(25,1,1).p("AiZAAIEzAA");
	this.shape_17.setTransform(287.6,275.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(25,1,1).p("AiiAAIFFAA");
	this.shape_18.setTransform(288.4,275.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(25,1,1).p("AiqAAIFVAA");
	this.shape_19.setTransform(289.3,275.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(25,1,1).p("AizAAIFnAA");
	this.shape_20.setTransform(290.2,275.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(25,1,1).p("Ai7AAIF4AA");
	this.shape_21.setTransform(291.1,275.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(25,1,1).p("AjEAAIGJAA");
	this.shape_22.setTransform(291.9,275.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(25,1,1).p("AjNAAIGbAA");
	this.shape_23.setTransform(292.8,275.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(25,1,1).p("AjVAAIGrAA");
	this.shape_24.setTransform(293.7,275.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(25,1,1).p("AjeAAIG9AA");
	this.shape_25.setTransform(294.6,275.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(25,1,1).p("AjnAAIHPAA");
	this.shape_26.setTransform(295.5,275.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(25,1,1).p("AjwAAIHhAA");
	this.shape_27.setTransform(296.3,275.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(25,1,1).p("Aj4AAIHxAA");
	this.shape_28.setTransform(297.2,275.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(25,1,1).p("AkBAAIIDAA");
	this.shape_29.setTransform(298.1,275.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(25,1,1).p("AkKAAIIUAA");
	this.shape_30.setTransform(299,275.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(25,1,1).p("AkSAAIIlAA");
	this.shape_31.setTransform(299.8,275.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(25,1,1).p("AkbAAII3AA");
	this.shape_32.setTransform(300.7,275.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(25,1,1).p("AkkAAIJJAA");
	this.shape_33.setTransform(301.6,275.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(25,1,1).p("AksAAIJZAA");
	this.shape_34.setTransform(302.5,275.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(25,1,1).p("Ak1AAIJrAA");
	this.shape_35.setTransform(303.4,275.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(25,1,1).p("Ak+AAIJ9AA");
	this.shape_36.setTransform(304.2,275.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(25,1,1).p("AlHAAIKPAA");
	this.shape_37.setTransform(305.1,275.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(25,1,1).p("AlPAAIKfAA");
	this.shape_38.setTransform(306,275.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(25,1,1).p("AlYAAIKxAA");
	this.shape_39.setTransform(306.9,275.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(25,1,1).p("AlgAAILBAA");
	this.shape_40.setTransform(307.7,275.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(25,1,1).p("AlpAAILTAA");
	this.shape_41.setTransform(308.6,275.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(25,1,1).p("AlyAAILlAA");
	this.shape_42.setTransform(309.5,275.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(25,1,1).p("Al7AAIL2AA");
	this.shape_43.setTransform(310.4,275.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(25,1,1).p("AmDAAIMHAA");
	this.shape_44.setTransform(311.3,275.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(25,1,1).p("AmMAAIMZAA");
	this.shape_45.setTransform(312.1,275.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(25,1,1).p("AmVAAIMrAA");
	this.shape_46.setTransform(313,275.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(25,1,1).p("AmdAAIM7AA");
	this.shape_47.setTransform(313.9,275.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(25,1,1).p("AmmAAINNAA");
	this.shape_48.setTransform(314.8,275.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(25,1,1).p("AmuAAINeAA");
	this.shape_49.setTransform(315.7,275.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(25,1,1).p("Am3AAINvAA");
	this.shape_50.setTransform(316.5,275.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(25,1,1).p("AnAAAIOBAA");
	this.shape_51.setTransform(317.4,275.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(25,1,1).p("AnJAAIOTAA");
	this.shape_52.setTransform(318.3,275.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(25,1,1).p("AnRAAIOjAA");
	this.shape_53.setTransform(319.1,275.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(25,1,1).p("AnaAAIO1AA");
	this.shape_54.setTransform(320,275.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(25,1,1).p("AniAAIPGAA");
	this.shape_55.setTransform(320.9,275.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(25,1,1).p("AnrAAIPXAA");
	this.shape_56.setTransform(321.8,275.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(25,1,1).p("An0AAIPpAA");
	this.shape_57.setTransform(322.7,275.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(25,1,1).p("An9AAIP7AA");
	this.shape_58.setTransform(323.5,275.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(25,1,1).p("AoFAAIQLAA");
	this.shape_59.setTransform(324.4,275.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(25,1,1).p("AoOAAIQdAA");
	this.shape_60.setTransform(325.3,275.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(25,1,1).p("AoXAAIQvAA");
	this.shape_61.setTransform(326.2,275.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(25,1,1).p("AofAAIQ/AA");
	this.shape_62.setTransform(327.1,275.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(25,1,1).p("AooAAIRRAA");
	this.shape_63.setTransform(327.9,275.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(25,1,1).p("AowAAIRiAA");
	this.shape_64.setTransform(328.8,275.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(25,1,1).p("Ao5AAIRzAA");
	this.shape_65.setTransform(329.7,275.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(25,1,1).p("ApCAAISFAA");
	this.shape_66.setTransform(330.6,275.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(25,1,1).p("ApLAAISXAA");
	this.shape_67.setTransform(331.4,275.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(25,1,1).p("ApTAAISoAA");
	this.shape_68.setTransform(332.3,275.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(25,1,1).p("ApcAAIS5AA");
	this.shape_69.setTransform(333.2,275.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(25,1,1).p("AplAAITLAA");
	this.shape_70.setTransform(334.1,275.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(25,1,1).p("ApuAAITdAA");
	this.shape_71.setTransform(335,275.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(25,1,1).p("Ap2AAITtAA");
	this.shape_72.setTransform(335.8,275.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(25,1,1).p("Ap/AAIT/AA");
	this.shape_73.setTransform(336.7,275.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(25,1,1).p("AqHAAIUPAA");
	this.shape_74.setTransform(337.6,275.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(25,1,1).p("AqQAAIUhAA");
	this.shape_75.setTransform(338.5,275.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(25,1,1).p("AqZAAIUzAA");
	this.shape_76.setTransform(339.3,275.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(25,1,1).p("AqhAAIVDAA");
	this.shape_77.setTransform(340.2,275.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(25,1,1).p("AqqAAIVVAA");
	this.shape_78.setTransform(341.1,275.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(25,1,1).p("AqzAAIVnAA");
	this.shape_79.setTransform(342,275.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(25,1,1).p("Aq8AAIV4AA");
	this.shape_80.setTransform(342.9,275.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(25,1,1).p("ArEAAIWJAA");
	this.shape_81.setTransform(343.7,275.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(25,1,1).p("ArNAAIWbAA");
	this.shape_82.setTransform(344.6,275.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(25,1,1).p("ArWAAIWtAA");
	this.shape_83.setTransform(345.5,275.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(25,1,1).p("AreAAIW9AA");
	this.shape_84.setTransform(346.4,275.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(25,1,1).p("ArnAAIXPAA");
	this.shape_85.setTransform(347.2,275.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(25,1,1).p("ArwAAIXhAA");
	this.shape_86.setTransform(348.1,275.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(25,1,1).p("Ar4AAIXxAA");
	this.shape_87.setTransform(349,275.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(25,1,1).p("AsBAAIYDAA");
	this.shape_88.setTransform(349.9,275.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(25,1,1).p("AsKAAIYVAA");
	this.shape_89.setTransform(350.8,275.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(25,1,1).p("AsSAAIYlAA");
	this.shape_90.setTransform(351.6,275.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(25,1,1).p("AsbAAIY3AA");
	this.shape_91.setTransform(352.5,275.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(25,1,1).p("AskAAIZJAA");
	this.shape_92.setTransform(353.4,275.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(25,1,1).p("AstAAIZbAA");
	this.shape_93.setTransform(354.3,275.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(25,1,1).p("As1AAIZrAA");
	this.shape_94.setTransform(355.2,275.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(25,1,1).p("As+AAIZ9AA");
	this.shape_95.setTransform(356,275.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(25,1,1).p("AtGAAIaNAA");
	this.shape_96.setTransform(356.9,275.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(25,1,1).p("AtPAAIafAA");
	this.shape_97.setTransform(357.8,275.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(25,1,1).p("AtYAAIaxAA");
	this.shape_98.setTransform(358.6,275.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(25,1,1).p("AtgAAIbBAA");
	this.shape_99.setTransform(359.5,275.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(25,1,1).p("AtpAAIbTAA");
	this.shape_100.setTransform(360.4,275.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(25,1,1).p("ANzAAI7lAA");
	this.shape_101.setTransform(361.3,275.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},310).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).wait(90));

	// Layer 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_139 = new cjs.Graphics().p("A1FimQJpqfOOgnQOOgoKfJoQKgJnAnOPMhErAC9QgnuOJnqfg");
	var mask_graphics_140 = new cjs.Graphics().p("A1eicQJcqrOMg4QOOg5KqJbQKsJbA4OOMhEnAEQQg4uOJbqqg");
	var mask_graphics_141 = new cjs.Graphics().p("A13iSQJPq2OLhJQONhJK1JNQK3JOBKONMhEhAFiQhKuMJOq2g");
	var mask_graphics_142 = new cjs.Graphics().p("A2PiHQJCrBOKhaQOLhaLAJAQLCJBBbOLMhEaAG1QhauLJArBg");
	var mask_graphics_143 = new cjs.Graphics().p("A2lh7QI0rMOIhrQOJhsLLI0QLNIzBrOJMhEQAIHQhsuJI0rLg");
	var mask_graphics_144 = new cjs.Graphics().p("A27hvQInrWOHh9QOFh8LWImQLXImB9OGMhEHAJZQh8uGImrWg");
	var mask_graphics_145 = new cjs.Graphics().p("A3QhjQIZrgOFiNQODiOLgIYQLhIZCNOEMhD6AKqQiNuEIYrgg");
	var mask_graphics_146 = new cjs.Graphics().p("A3khWQIMrqOBieQOAieLqIKQLsILCeOAMhDtAL9QieuCIKrqg");
	var mask_graphics_147 = new cjs.Graphics().p("A32hIQH9r0N+ivQN9ivL0H8QL1H9CvN9MhDdANOQivt/H8rzg");
	var mask_graphics_148 = new cjs.Graphics().p("A4Ig6QHvr9N7jAQN6jAL8HuQL/HuDAN6MhDNAOfQjAt7Hur9g");
	var mask_graphics_149 = new cjs.Graphics().p("A4ZgsQHhsGN3jRQN2jQMGHfQMIHgDQN2MhC7APvQjQt3HfsGg");
	var mask_graphics_150 = new cjs.Graphics().p("A4pgdQHSsPNzjhQNyjhMPHQQMRHSDhNyMhCnAQ/QjhtzHQsPg");
	var mask_graphics_151 = new cjs.Graphics().p("A43gNQHDsYNvjyQNtjyMYHCQMZHDDyNuMhCSASPQjytvHCsXg");
	var mask_graphics_152 = new cjs.Graphics().p("A5FABQG0sfNqkCQNpkCMgGzQMiG0ECNpMhB7ATeQkDtqGzshg");
	var mask_graphics_153 = new cjs.Graphics().p("A5RASQGlsnNlkTQNkkSMoGjQMpGlESNkMhBiAUuQkTtlGkspg");
	var mask_graphics_154 = new cjs.Graphics().p("A5dAjQGWsvNgkjQNekjMwGVQMxGVEjNfMhBJAV8QkjtgGUswg");
	var mask_graphics_155 = new cjs.Graphics().p("A5nA0QGGs2NakzQNZkzM3GFQM5GGEzNZMhAuAXKQkztaGFs4g");
	var mask_graphics_156 = new cjs.Graphics().p("A5xBGQF3s+NUlDQNUlDM+F2QNAF2FDNTMhASAYYQlDtUF1s/g");
	var mask_graphics_157 = new cjs.Graphics().p("A55BYQFntFNOlTQNNlTNFFnQNHFmFTNNMg/0AZlQlTtOFmtGg");
	var mask_graphics_158 = new cjs.Graphics().p("A6ABrQFXtMNIliQNGljNMFWQNNFXFjNGMg/UAayQljtIFWtMg");
	var mask_graphics_159 = new cjs.Graphics().p("A6GB+QFHtSNBlyQM/lzNSFHQNUFHFyM/Mg+zAb9QlytAFGtTg");
	var mask_graphics_160 = new cjs.Graphics().p("A6LCRQE3tXM6mCQM4mDNYE3QNaE3GCM5Mg+RAdHQmCs5E2tZg");
	var mask_graphics_161 = new cjs.Graphics().p("A6PClQEntdMymSQMxmRNeEmQNfEnGRMyMg9tAeSQmRsyEmtfg");
	var mask_graphics_162 = new cjs.Graphics().p("A6SC5QEXtiMqmhQMqmhNjEWQNkEXGhMqMg9IAfcQmhsrEWtkg");
	var mask_graphics_163 = new cjs.Graphics().p("A6UDOQEHtoMimwQMhmwNoEGQNqEGGwMjMg8iAgkQmvsiEFtpg");
	var mask_graphics_164 = new cjs.Graphics().p("A6VDjQD2tsMbm/QMZm/NsD1QNvD2G/MaMg76AhtQm/saD1tug");
	var mask_graphics_165 = new cjs.Graphics().p("A6VD4QDmtwMSnOQMQnONyDlQNzDlHNMSMg7QAi0QnOsRDktzg");
	var mask_graphics_166 = new cjs.Graphics().p("A6TEOQDVt1MJncQMHndN2DVQN3DUHcMJMg6mAj7QncsIDUt3g");
	var mask_graphics_167 = new cjs.Graphics().p("A6REkQDFt4L/nrQL/nrN5DDQN7DEHrMAMg56AlBQnrr/DDt7g");
	var mask_graphics_168 = new cjs.Graphics().p("A6NE7QCzt8L3n6QL1n5N9CzQN+CzH6L2Mg5OAmHQn5r2Czt+g");
	var mask_graphics_169 = new cjs.Graphics().p("A6JFSQCjuALtoHQLtoHN/CiQOBCiIILsMg4fAnMQoHrtChuBg");
	var mask_graphics_170 = new cjs.Graphics().p("A6DFpQCSuCLjoWQLjoVOBCRQOFCSIVLiMg3vAoPQoVrjCRuEg");
	var mask_graphics_171 = new cjs.Graphics().p("A59GBQCCuFLYojQLZokOFCBQOHCAIjLZMg2+ApRQojrZB/uGg");
	var mask_graphics_172 = new cjs.Graphics().p("A51GZQBxuILOowQLOoxOHBvQOJBwIxLOMg2MAqTQowrPBuuIg");
	var mask_graphics_173 = new cjs.Graphics().p("A5sGxQBfuJLEo+QLEo/OIBfQOMBeI+LEMg1ZArTQo+rDBeuLg");
	var mask_graphics_174 = new cjs.Graphics().p("A5iHKQBOuLK5pMQK5pLOKBNQONBOJLK4Mg0jAsTQpMq4BNuMg");
	var mask_graphics_175 = new cjs.Graphics().p("A5XHjQA9uNKupYQKtpYOMA8QOOA8JYKuMgztAtRQpZqtA8uNg");
	var mask_graphics_176 = new cjs.Graphics().p("A5LH8QAsuOKiplQKiplONArQOPAsJlKiMgy3AuPQplqiAruOg");
	var mask_graphics_177 = new cjs.Graphics().p("A4+IVQAbuOKXpxQKWpyONAaQOQAaJyKXMgx/AvMQpxqXAZuPg");
	var mask_graphics_178 = new cjs.Graphics().p("A4wIvQAKuOKLp+QKKp+OOAJQOQAJJ+KKMgxFAwIQp+qLAIuPg");
	var mask_graphics_179 = new cjs.Graphics().p("A4hJJQgHuOJ/qKQJ+qKOOgJQOQgIKKJ/MgwLAxCQqKp/gJuPg");
	var mask_graphics_180 = new cjs.Graphics().p("A4RJjQgYuOJyqWQJzqWONgZQOQgZKWJyMgvQAx7QqWpygauPg");
	var mask_graphics_181 = new cjs.Graphics().p("A3/J+QgquOJmqhQJmqiOMgqQOPgrKiJmMguTAy0QqhpmgruOg");
	var mask_graphics_182 = new cjs.Graphics().p("A3tKYQg7uMJZqtQJZqtOMg7QOOg8KtJZMgtVAzrQqtpZg8uOg");
	var mask_graphics_183 = new cjs.Graphics().p("A3aKzQhLuLJMq4QJMq4OKhMQONhNK4JMMgsXA0gQq4pLhNuNg");
	var mask_graphics_184 = new cjs.Graphics().p("A3GLPQhcuKI/rDQI+rDOJheQOMhdLDI/MgrXA1VQrDo/hfuKg");
	var mask_graphics_185 = new cjs.Graphics().p("A2wLqQhuuIIxrNQIyrOOHhvQOJhuLOIxMgqWA2JQrOoxhvuJg");
	var mask_graphics_186 = new cjs.Graphics().p("A2aMGQh/uGIkrYQIkrYOFh/QOHiALYIkMgpVA27QrYokiAuGg");
	var mask_graphics_187 = new cjs.Graphics().p("A2DMiQiPuDIWrjQIWriOCiQQOFiRLiIWMgoSA3sQrjoWiRuDg");
	var mask_graphics_188 = new cjs.Graphics().p("A1rM+QiguBIIrsQIIrsN/ihQOCiiLsIJMgnOA4bQrtoIiiuAg");
	var mask_graphics_189 = new cjs.Graphics().p("A1RNaQiyt9H6r2QH6r2N8iyQN/iyL2H6MgmLA5KQr2n6iyt9g");
	var mask_graphics_190 = new cjs.Graphics().p("A03N2QjCt5HrsAQHsr/N5jDQN7jDL/HsMglGA54Qr/nsjDt6g");
	var mask_graphics_191 = new cjs.Graphics().p("A0cOTQjTt3HdsHQHesJN0jTQN4jUMIHdMgkAA6kQsIndjUt2g");
	var mask_graphics_192 = new cjs.Graphics().p("A0AOvQjjtyHOsRQHPsRNwjkQNzjkMRHPMgi4A7OQsRnPjltyg");
	var mask_graphics_193 = new cjs.Graphics().p("AzjPMQj0tuHAsZQG/saNtj0QNuj1MaHAMghxA73Qsam/j1tug");
	var mask_graphics_194 = new cjs.Graphics().p("AzFPpQkEtqGwsgQGxsiNnkFQNqkGMiGxMggpA8fQshmwkGtpg");
	var mask_graphics_195 = new cjs.Graphics().p("AymQGQkVtlGisoQGhsqNikWQNlkVMqGhMgffA9GQsqmhkWtkg");
	var mask_graphics_196 = new cjs.Graphics().p("AyHQjQkltfGTsxQGSsxNdkmQNgkmMxGTMgeWA9rQsxmTknteg");
	var mask_graphics_197 = new cjs.Graphics().p("AxmRAQk1tZGDs4QGDs5NXk2QNak2M5GDMgdNA+PQs4mDk2tZg");
	var mask_graphics_198 = new cjs.Graphics().p("AxFRdQlFtTF0s/QFztANRlGQNUlGNAFzMgcBA+yQs/l0lHtTg");
	var mask_graphics_199 = new cjs.Graphics().p("AwiR7QlVtNFjtGQFktHNLlWQNOlWNHFkMga2A/SQtGlklWtMg");
	var mask_graphics_200 = new cjs.Graphics().p("Av/SYQlltGFUtNQFUtNNElmQNHlmNOFUMgZpA/yQtNlUlmtGg");
	var mask_graphics_201 = new cjs.Graphics().p("AvbS2Ql0tAFDtTQFEtUM+l1QNAl1NUFEMgYcBAQQtTlEl2s/g");
	var mask_graphics_202 = new cjs.Graphics().p("Au2TTQmEs4E0tZQE0taM2mEQM5mGNaE0MgXPBAtQtZk0mFs4g");
	var mask_graphics_203 = new cjs.Graphics().p("AuQTxQmUsxEktfQEjtfMwmUQMxmVNfEkMgWABBIQtekkmVswg");
	var mask_graphics_204 = new cjs.Graphics().p("AtqUOQmjspEUtkQETtkMnmkQMqmkNlEUMgUyBBhQtkkTmkspg");
	var mask_graphics_205 = new cjs.Graphics().p("AtDUsQmysiEEtoQEDtqMfmyQMimzNpEDMgTjBB6QtokEm0sgg");
	var mask_graphics_206 = new cjs.Graphics().p("AsbVJQnAsZDyttQDztuMXnCQMZnCNvDzMgSUBCQQttjynDsZg");
	var mask_graphics_207 = new cjs.Graphics().p("AryVnQnPsRDitxQDitzMOnQQMRnRNzDiMgREBCmQtyjinRsQg");
	var mask_graphics_208 = new cjs.Graphics().p("ArIWEQnesHDRt2QDRt3MGnfQMInfN3DRMgP0BC6Qt1jSngsHg");
	var mask_graphics_209 = new cjs.Graphics().p("AqeWiQntr/DBt5QDBt7L9ntQL+nuN7DBMgOjBDLQt6jAnur+g");
	var mask_graphics_210 = new cjs.Graphics().p("ApzW/Qn7r1Cwt9QCwt+L0n7QL1n9N+CwMgNSBDdQt9iwn9r1g");
	var mask_graphics_211 = new cjs.Graphics().p("ApHXdQoJrsCfuAQCfuBLqoKQLroKOBCfMgMABDsQuBigoKrqg");
	var mask_graphics_212 = new cjs.Graphics().p("AobX6QoXriCOuDQCPuELgoXQLhoYOECOMgKvBD5QuDiOoZrhg");
	var mask_graphics_213 = new cjs.Graphics().p("AnuYXQolrXB+uGQB9uGLWolQLXonOHB+MgJeBEFQuGh9omrXg");
	var mask_graphics_214 = new cjs.Graphics().p("AnAY1QoyrOBsuHQBsuJLMozQLMozOJBsMgILBEQQuJhsozrMg");
	var mask_graphics_215 = new cjs.Graphics().p("AmSZSQo/rDBbuKQBbuKLCpAQLBpBOLBbMgG6BEZQuKhbpBrBg");
	var mask_graphics_216 = new cjs.Graphics().p("AljZvQpNq4BLuMQBKuLK2pNQK3pPOMBLMgFnBEgQuMhKpOq2g");
	var mask_graphics_217 = new cjs.Graphics().p("AkzaLQpaqsA5uNQA6uNKrpaQKrpbONA5MgEUBEnQuOg5paqsg");
	var mask_graphics_218 = new cjs.Graphics().p("AkDaoQpmqhAouOQAouNKgpnQKfpoOPAoMgDDBErQuOgopnqgg");
	var mask_graphics_219 = new cjs.Graphics().p("AjSbFQpzqVAXuPQAXuOKUp0QKUp0OPAXMgBwBEuQuPgXpzqUg");
	var mask_graphics_220 = new cjs.Graphics().p("AihbhQp/qJAGuPQAGuOKIqAQKIqBOPAGMgAdBEvQuPgGqAqIg");
	var mask_graphics_221 = new cjs.Graphics().p("AiKb+QqLp+gLuPQgLuOJ8qMQJ8qNOPgLMAA1BEvIgfABQt7AAqBpxg");
	var mask_graphics_222 = new cjs.Graphics().p("AiBcZQqXpxgcuOQgcuOJvqYQJwqYOPgdMACIBEtIhPACQtdAAp7pVg");
	var mask_graphics_223 = new cjs.Graphics().p("Ah3c0QqjpkgtuOQguuNJjqjQJkqlOOgtMADaBEqQg/ADg9AAQtAAAp1o5g");
	var mask_graphics_224 = new cjs.Graphics().p("AhtdPQqupYg/uNQg+uMJWqvQJXqvONg/MAEtBElQhWAGhUAAQskAApuodg");
	var mask_graphics_225 = new cjs.Graphics().p("AhidoQq6pKhPuMQhQuLJKq5QJJq7OMhQMAF/BEfQhsAKhqAAQsJAApmoEg");
	var mask_graphics_226 = new cjs.Graphics().p("AhXeBQrEo9hhuKQhguJI8rEQI8rGOKhhMAHSBEXQiDAOh/AAQrvAApenqg");
	var mask_graphics_227 = new cjs.Graphics().p("AhLeaQrPowhyuIQhxuHIurPQIvrROIhxMAIkBENQiZATiTAAQrWAApVnQg");
	var mask_graphics_228 = new cjs.Graphics().p("Ag/eyQraoiiCuGQiCuFIhrZQIhrbOFiDMAJ2BECQiuAaioAAQq9AApMm4g");
	var mask_graphics_229 = new cjs.Graphics().p("AgyfJQrkoUiTuDQiUuDITrjQIVrlOCiTMALHBD1QjDAgi8AAQqlAApCmgg");
	var mask_graphics_230 = new cjs.Graphics().p("AglfgQruoHikuAQikt/IFruQIGruOAikMAMYBDnQjYAnjPAAQqOAAo4mIg");
	var mask_graphics_231 = new cjs.Graphics().p("AgYf2Qr3n4i1t9Qi1t9H3r2QH4r5N8i1MANqBDYQjsAwjjAAQp3AAoulyg");
	var mask_graphics_232 = new cjs.Graphics().p("EgAJAgLQsBnqjGt5QjFt5HosAQHqsCN4jFMAO7BDGQkAA5j2AAQphAAoilcg");
	var mask_graphics_233 = new cjs.Graphics().p("EAAEAggQsInbjXt2QjWt1HasJQHbsLN1jWMAQLBC0QkUBDkJAAQpLAAoYlHg");
	var mask_graphics_234 = new cjs.Graphics().p("EAATAg0QsRnNjntxQjntwHMsSQHMsUNwjnMARcBCgQknBNkcAAQo2AAoMkyg");
	var mask_graphics_235 = new cjs.Graphics().p("EAAjAhIQsam+j3ttQj4tsG9sbQG9scNsj3MASsBCKQk6BYkvAAQohAAn/kdg");
	var mask_graphics_236 = new cjs.Graphics().p("EAAzAhbQsimvkItpQkItnGusiQGuslNnkIMAT7BBzQlMBllCAAQoMAAnykKg");
	var mask_graphics_237 = new cjs.Graphics().p("EABEAhtQsqmgkZtjQkYtjGfsqQGfssNikYMAVJBBaQldBxlVAAQn4AAnkj3g");
	var mask_graphics_238 = new cjs.Graphics().p("EABVAh+QsymQkpteQkotdGPsyQGQs0NdkoMAWYBBAQlwB+lnAAQnkAAnWjlg");
	var mask_graphics_239 = new cjs.Graphics().p("EABmAiPQs5mBk5tYQk4tYGAs4QGAs8NXk4MAXmBAkQmBCMl6AAQnQAAnIjTg");
	var mask_graphics_240 = new cjs.Graphics().p("EAB4AifQtAlxlJtSQlItSFwtAQFxtCNRlIMAYzBAHQmRCbmOAAQm9AAm4jDg");
	var mask_graphics_241 = new cjs.Graphics().p("EACKAivQtHlilYtLQlZtMFhtGQFhtKNLlYMAZ/A/pQmhCqmgAAQmqAAmpiyg");
	var mask_graphics_242 = new cjs.Graphics().p("EACdAi+QtNlSlptFQlotFFRtNQFRtQNEloMAbMA/JQmxC6mzAAQmXAAmZiig");
	var mask_graphics_243 = new cjs.Graphics().p("EACwAjMQtTlCl4s+Ql4s+FAtTQFCtWM9l4MAcXA+nQnADLnHAAQmDAAmJiTg");
	var mask_graphics_244 = new cjs.Graphics().p("EADEAjZQtakxmHs3QmIs3ExtZQExtcM3mHMAdiA+EQnPDdnbAAQlwAAl4iGg");
	var mask_graphics_245 = new cjs.Graphics().p("EADYAjmQtfkhmXswQmXsvEhtfQEhthMvmXMAesA9gQneDvnuAAQleAAlmh4g");
	var mask_graphics_246 = new cjs.Graphics().p("EADsAjyQtkkRmmsoQmmsnEQtkQERtnMnmmMAf2A87QnsEBoCAAQlLAAlVhrg");
	var mask_graphics_247 = new cjs.Graphics().p("EAEBAj+QtpkBm1sgQm2sfEAtpQEBtsMfm1MAg+A8UQn4EUoXAAQk4AAlDheg");
	var mask_graphics_248 = new cjs.Graphics().p("EAEWAkIQtujwnEsXQnEsYDwttQDvtwMXnEMAiHA7rQoGEoorAAQkmAAkwhTg");
	var mask_graphics_249 = new cjs.Graphics().p("EAEsAkSQtyjgnTsOQnTsPDftyQDft0MOnTMAjOA7CQoSE8pAAAQkTAAkdhIg");
	var mask_graphics_250 = new cjs.Graphics().p("EAFCAkcQt3jQnhsFQnisGDPt2QDOt4MGniMAkUA6XQoeFRpWAAQj/AAkKg9g");
	var mask_graphics_251 = new cjs.Graphics().p("EAFYAkkQt6i/nwr8Qnwr8C+t6QC+t8L8nwMAlaA5qQopFnpsAAQjtAAj2g0g");
	var mask_graphics_252 = new cjs.Graphics().p("EAFvAksQt+iun+rzQn+rzCtt9QCtuALzn+MAmfA49Qo1F9qCAAQjZAAjigrg");
	var mask_graphics_253 = new cjs.Graphics().p("EAGGAkzQuBidoMrqQoMrpCcuAQCcuDLpoMMAnjA4OQo/GUqZAAQjGAAjNgjg");
	var mask_graphics_254 = new cjs.Graphics().p("EAGdAk5QuDiMoarfQobrgCMuCQCLuGLfoaMAomA3eQpIGrqyABQixAAi5gdg");
	var mask_graphics_255 = new cjs.Graphics().p("EAG1Ak/QuGh8oorVQoorVB7uFQB6uILVooMApoA2sQpSHFrJAAQieAAijgWg");
	var mask_graphics_256 = new cjs.Graphics().p("EAHNAlDQuIhqo1rLQo2rKBpuHQBquLLKo1MAqqA16QpbHdrjAAQiIAAiOgRg");
	var mask_graphics_257 = new cjs.Graphics().p("EAHmAlHQuKhZpDrAQpDrABYuJQBZuMLApCMArpA1FQpjH3r8AAQh0AAh3gMg");
	var mask_graphics_258 = new cjs.Graphics().p("EAH+AlLQuLhJpQq1QpQq0BHuMQBIuMK0pQMAsqA0QQprIRsYAAQheAAhhgHg");
	var mask_graphics_259 = new cjs.Graphics().p("EAIXAlNQuMg3pdqqQpdqpA2uNQA2uOKqpdMAtoAzbQpzIrsyAAQhJAAhKgEg");
	var mask_graphics_260 = new cjs.Graphics().p("EAIxAlPQuOgnpqqeQppqeAluOQAluOKeppMAulAyjQp5JHtPAAQgyAAgygCg");
	var mask_graphics_261 = new cjs.Graphics().p("EAJKAlPQuOgVp2qSQp2qSAUuPQAUuPKSp2MAviAxrQp/JjttAAIg2gBg");
	var mask_graphics_262 = new cjs.Graphics().p("EAJkAlPQuOgEqDqGQqCqGADuPQADuPKGqCMAwdAwwQqFKAuLAAIgGAAg");
	var mask_graphics_263 = new cjs.Graphics().p("AuebhQqPp6gOuOQgOuPJ6qOMAxWAv1Qp6KPuPAOIglABQt3AAqApug");
	var mask_graphics_264 = new cjs.Graphics().p("AuQb9QqapugfuOQgfuOJuqaMAyPAu6QpuKauPAgIhUABQtYAAp8pRg");
	var mask_graphics_265 = new cjs.Graphics().p("AuAcZQqlpigxuNQgwuOJhqlMAzHAt9QphKluOAxQhCAEhAAAQs8AAp1o1g");
	var mask_graphics_266 = new cjs.Graphics().p("AtvczQqxpUhBuMQhCuNJUqxMAz+As/QpUKxuNBCQhZAGhXAAQsfAApuoag");
	var mask_graphics_267 = new cjs.Graphics().p("AtedNQq8pHhSuLQhTuLJIq8MA0zAsAQpIK8uLBTQhvAKhtAAQsFAApmoAg");
	var mask_graphics_268 = new cjs.Graphics().p("AtMdnQrGo6hkuJQhkuKI7rHMA1nArAQo6LHuKBkQiFAPiCAAQrrAApenmg");
	var mask_graphics_269 = new cjs.Graphics().p("As5eAQrRoth1uHQh0uIIsrRMA2bAp/QotLRuHB2QicAUiWAAQrRAApWnNg");
	var mask_graphics_270 = new cjs.Graphics().p("AsleYQrcofiFuFQiGuFIfrcMA3NAo9QofLcuGCGQixAaiqAAQq5AApMm0g");
	var mask_graphics_271 = new cjs.Graphics().p("AsRevQrloRiXuCQiWuCIRrmMA39An6QoRLmuDCXQjGAhi+AAQqhAApDmdg");
	var mask_graphics_272 = new cjs.Graphics().p("Ar7fGQrwoDint/Qint/IDrwMA4sAm3QoDLvuACoQjaApjSAAQqKAAo4mGg");
	var mask_graphics_273 = new cjs.Graphics().p("ArlfdQr6n1i3t8Qi5t8H1r5MA5bAlyQn1L5t8C5QjvAxjmAAQpzAAotlvg");
	var mask_graphics_274 = new cjs.Graphics().p("ArPfzQsCnnjJt4QjJt5HnsCMA6HAktQnmMCt5DJQkDA7j5AAQpdAAoilZg");
	var mask_graphics_275 = new cjs.Graphics().p("EgK3AgIQsMnYjZt0QjZt1HYsMMA6yAjnQnYMLt1DaQkWBEkMAAQpHAAoWlDg");
	var mask_graphics_276 = new cjs.Graphics().p("EgKfAgcQsUnJjqtwQjqtxHJsUMA7dAigQnJMUtxDrQkpBOkfAAQoyAAoKkvg");
	var mask_graphics_277 = new cjs.Graphics().p("EgKGAgwQsdm6j6tsQj7tsG7scMA8FAhXQm6MdtsD7Qk8BakyAAQodAAn9kbg");
	var mask_graphics_278 = new cjs.Graphics().p("EgJtAhDQskmrkLtnQkLtnGrskMA8tAgOQmrMltnEMQlOBmlFAAQoIAAnxkIg");
	var mask_graphics_279 = new cjs.Graphics().p("EgJSAhWQstmckbtiQkbtiGcssMA9TAfFQmcMttiEcQlgBzlYAAQn0AAnij1g");
	var mask_graphics_280 = new cjs.Graphics().p("EgI3AhoQs0mNkstcQkrtdGNs0MA93Ad8QmMM0tdEsQlyCAlqAAQngAAnUjig");
	var mask_graphics_281 = new cjs.Graphics().p("EgIcAh5Qs7l9k7tWQk8tYF9s7MA+bAcxQl9M8tXE8QmCCOl9AAQnNAAnGjRg");
	var mask_graphics_282 = new cjs.Graphics().p("EgH/AiKQtDlulLtQQlMtSFutBMA+9AblQluNDtQFMQmUCdmPAAQm6AAm2jAg");
	var mask_graphics_283 = new cjs.Graphics().p("EgHiAiaQtJlelctKQlbtLFetJMA/dAaaQleNJtKFcQmjCtmjAAQmmAAmniwg");
	var mask_graphics_284 = new cjs.Graphics().p("EgHFAipQtPlOlrtDQlstFFPtOMA/8AZMQlONQtEFsQmzC8m2AAQmTAAmXigg");
	var mask_graphics_285 = new cjs.Graphics().p("EgGmAi4QtWk/l7s8Ql7s9E/tVMBAaAYAQk/NVs8F8QnCDNnKAAQmAAAmGiRg");
	var mask_graphics_286 = new cjs.Graphics().p("EgGHAjGQtckvmKs0QmLs3EvtaMBA2AWyQkuNbs2GLQnRDfndAAQltAAl1iDg");
	var mask_graphics_287 = new cjs.Graphics().p("EgFoAjTQthkemZstQmasvEetgMBBRAVkQkeNhsuGaQnfDxnxAAQlbAAlkh2g");
	var mask_graphics_288 = new cjs.Graphics().p("EgFIAjfQtmkNmosmQmqsnEOtlMBBqAUVQkONmslGqQnuEDoFAAQlIAAlShpg");
	var mask_graphics_289 = new cjs.Graphics().p("EgEnAjrQtrj9m4sdQm4sfD9tqMBCCATGQj9NrseG4Qn6EXoaAAQk2AAk/hdg");
	var mask_graphics_290 = new cjs.Graphics().p("EgEFAj2QtwjsnHsVQnHsXDttvMBCYAR3QjtNwsVHHQoIErouAAQkjAAkshSg");
	var mask_graphics_291 = new cjs.Graphics().p("EgDkAkBQt0jcnVsNQnWsNDct0MBCtAQnQjcN0sNHWQoUE/pDAAQkQAAkahGg");
	var mask_graphics_292 = new cjs.Graphics().p("EgDBAkLQt4jMnksDQnlsFDMt3MBDAAPWQjMN4sDHlQogFUpZAAQj9AAkGg8g");
	var mask_graphics_293 = new cjs.Graphics().p("EgCeAkUQt8i7nyr6Qnzr8C7t7MBDRAOGQi6N7r7H0QorFqpvAAQjqAAjygzg");
	var mask_graphics_294 = new cjs.Graphics().p("EgB6AkcQuAiqoArxQoBryCqt+MBDiAM0QiqN/rxICQo2GAqGAAQjWAAjegqg");
	var mask_graphics_295 = new cjs.Graphics().p("EgBWAkjQuDiZoOrnQoProCZuBMBDwALjQiZOCrnIQQpAGXqdAAQjDAAjJgjg");
	var mask_graphics_296 = new cjs.Graphics().p("EgAyAkqQuFiIocrdQodreCIuEMBD+AKRQiJOFrdIeQpKGvq0AAQivAAi1gcg");
	var mask_graphics_297 = new cjs.Graphics().p("EgANAkwQuHh3oqrTQorrUB3uGMBEKAJAQh4OHrSIrQpUHHrNAAQiaAAiggVg");
	var mask_graphics_298 = new cjs.Graphics().p("EAAYAk1QuJhmo3rIQo4rJBmuJMBETAHuQhmOJrII5QpdHgrmAAQiGAAiKgQg");
	var mask_graphics_299 = new cjs.Graphics().p("EAA+Ak6QuKhVpFq+QpGq+BWuKMBEcAGbQhWOLq9JGQplH6sAAAQhxAAh0gLg");
	var mask_graphics_300 = new cjs.Graphics().p("EABkAk9QuLhEpSqyQpTq0BEuMMBEjAFKQhEOMqzJTQpsIUsaAAQhcAAhegHg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(139).to({graphics:mask_graphics_139,x:247,y:141.5}).wait(1).to({graphics:mask_graphics_140,x:247,y:143.6}).wait(1).to({graphics:mask_graphics_141,x:247,y:145.6}).wait(1).to({graphics:mask_graphics_142,x:246.9,y:147.7}).wait(1).to({graphics:mask_graphics_143,x:246.7,y:149.7}).wait(1).to({graphics:mask_graphics_144,x:246.6,y:151.7}).wait(1).to({graphics:mask_graphics_145,x:246.3,y:153.7}).wait(1).to({graphics:mask_graphics_146,x:246.1,y:155.8}).wait(1).to({graphics:mask_graphics_147,x:245.8,y:157.8}).wait(1).to({graphics:mask_graphics_148,x:245.5,y:159.8}).wait(1).to({graphics:mask_graphics_149,x:245.1,y:161.7}).wait(1).to({graphics:mask_graphics_150,x:244.7,y:163.7}).wait(1).to({graphics:mask_graphics_151,x:244.3,y:165.7}).wait(1).to({graphics:mask_graphics_152,x:243.8,y:167.6}).wait(1).to({graphics:mask_graphics_153,x:243.2,y:169.6}).wait(1).to({graphics:mask_graphics_154,x:242.7,y:171.5}).wait(1).to({graphics:mask_graphics_155,x:242.1,y:173.4}).wait(1).to({graphics:mask_graphics_156,x:241.5,y:175.3}).wait(1).to({graphics:mask_graphics_157,x:240.8,y:177.2}).wait(1).to({graphics:mask_graphics_158,x:240.1,y:179.1}).wait(1).to({graphics:mask_graphics_159,x:239.3,y:180.9}).wait(1).to({graphics:mask_graphics_160,x:238.6,y:182.7}).wait(1).to({graphics:mask_graphics_161,x:237.7,y:184.6}).wait(1).to({graphics:mask_graphics_162,x:236.9,y:186.4}).wait(1).to({graphics:mask_graphics_163,x:236,y:188.1}).wait(1).to({graphics:mask_graphics_164,x:235.1,y:189.9}).wait(1).to({graphics:mask_graphics_165,x:234.1,y:191.6}).wait(1).to({graphics:mask_graphics_166,x:233.1,y:193.3}).wait(1).to({graphics:mask_graphics_167,x:232.1,y:195}).wait(1).to({graphics:mask_graphics_168,x:231.1,y:196.7}).wait(1).to({graphics:mask_graphics_169,x:230,y:198.4}).wait(1).to({graphics:mask_graphics_170,x:228.8,y:200}).wait(1).to({graphics:mask_graphics_171,x:227.7,y:201.6}).wait(1).to({graphics:mask_graphics_172,x:226.5,y:203.2}).wait(1).to({graphics:mask_graphics_173,x:225.3,y:204.7}).wait(1).to({graphics:mask_graphics_174,x:224,y:206.2}).wait(1).to({graphics:mask_graphics_175,x:222.7,y:207.7}).wait(1).to({graphics:mask_graphics_176,x:221.4,y:209.2}).wait(1).to({graphics:mask_graphics_177,x:220.1,y:210.7}).wait(1).to({graphics:mask_graphics_178,x:218.7,y:212.1}).wait(1).to({graphics:mask_graphics_179,x:217.3,y:213.5}).wait(1).to({graphics:mask_graphics_180,x:215.9,y:214.8}).wait(1).to({graphics:mask_graphics_181,x:214.4,y:216.2}).wait(1).to({graphics:mask_graphics_182,x:212.9,y:217.5}).wait(1).to({graphics:mask_graphics_183,x:211.4,y:218.8}).wait(1).to({graphics:mask_graphics_184,x:209.9,y:220}).wait(1).to({graphics:mask_graphics_185,x:208.3,y:221.2}).wait(1).to({graphics:mask_graphics_186,x:206.7,y:222.4}).wait(1).to({graphics:mask_graphics_187,x:205.1,y:223.5}).wait(1).to({graphics:mask_graphics_188,x:203.4,y:224.6}).wait(1).to({graphics:mask_graphics_189,x:201.8,y:225.7}).wait(1).to({graphics:mask_graphics_190,x:200.1,y:226.8}).wait(1).to({graphics:mask_graphics_191,x:198.4,y:227.8}).wait(1).to({graphics:mask_graphics_192,x:196.6,y:228.8}).wait(1).to({graphics:mask_graphics_193,x:194.9,y:229.7}).wait(1).to({graphics:mask_graphics_194,x:193.1,y:230.6}).wait(1).to({graphics:mask_graphics_195,x:191.3,y:231.5}).wait(1).to({graphics:mask_graphics_196,x:189.5,y:232.4}).wait(1).to({graphics:mask_graphics_197,x:187.7,y:233.2}).wait(1).to({graphics:mask_graphics_198,x:185.8,y:234}).wait(1).to({graphics:mask_graphics_199,x:184,y:234.7}).wait(1).to({graphics:mask_graphics_200,x:182.1,y:235.4}).wait(1).to({graphics:mask_graphics_201,x:180.2,y:236.1}).wait(1).to({graphics:mask_graphics_202,x:178.3,y:236.7}).wait(1).to({graphics:mask_graphics_203,x:176.3,y:237.3}).wait(1).to({graphics:mask_graphics_204,x:174.4,y:237.8}).wait(1).to({graphics:mask_graphics_205,x:172.4,y:238.4}).wait(1).to({graphics:mask_graphics_206,x:170.5,y:238.8}).wait(1).to({graphics:mask_graphics_207,x:168.5,y:239.3}).wait(1).to({graphics:mask_graphics_208,x:166.5,y:239.7}).wait(1).to({graphics:mask_graphics_209,x:164.5,y:240}).wait(1).to({graphics:mask_graphics_210,x:162.5,y:240.4}).wait(1).to({graphics:mask_graphics_211,x:160.4,y:240.7}).wait(1).to({graphics:mask_graphics_212,x:158.4,y:240.9}).wait(1).to({graphics:mask_graphics_213,x:156.4,y:241.1}).wait(1).to({graphics:mask_graphics_214,x:154.3,y:241.3}).wait(1).to({graphics:mask_graphics_215,x:152.3,y:241.4}).wait(1).to({graphics:mask_graphics_216,x:150.2,y:241.5}).wait(1).to({graphics:mask_graphics_217,x:148.1,y:241.6}).wait(1).to({graphics:mask_graphics_218,x:146.1,y:241.6}).wait(1).to({graphics:mask_graphics_219,x:144,y:241.6}).wait(1).to({graphics:mask_graphics_220,x:141.9,y:241.5}).wait(1).to({graphics:mask_graphics_221,x:142.5,y:241.5}).wait(1).to({graphics:mask_graphics_222,x:144.6,y:241.4}).wait(1).to({graphics:mask_graphics_223,x:146.6,y:241.3}).wait(1).to({graphics:mask_graphics_224,x:148.7,y:241.2}).wait(1).to({graphics:mask_graphics_225,x:150.7,y:241.2}).wait(1).to({graphics:mask_graphics_226,x:152.8,y:241.1}).wait(1).to({graphics:mask_graphics_227,x:154.8,y:241}).wait(1).to({graphics:mask_graphics_228,x:156.8,y:241}).wait(1).to({graphics:mask_graphics_229,x:158.8,y:240.9}).wait(1).to({graphics:mask_graphics_230,x:160.8,y:240.8}).wait(1).to({graphics:mask_graphics_231,x:162.8,y:240.8}).wait(1).to({graphics:mask_graphics_232,x:164.8,y:240.7}).wait(1).to({graphics:mask_graphics_233,x:166.8,y:240.7}).wait(1).to({graphics:mask_graphics_234,x:168.8,y:240.6}).wait(1).to({graphics:mask_graphics_235,x:170.8,y:240.5}).wait(1).to({graphics:mask_graphics_236,x:172.7,y:240.5}).wait(1).to({graphics:mask_graphics_237,x:174.6,y:240.4}).wait(1).to({graphics:mask_graphics_238,x:176.6,y:240.3}).wait(1).to({graphics:mask_graphics_239,x:178.5,y:240.2}).wait(1).to({graphics:mask_graphics_240,x:180.4,y:240.2}).wait(1).to({graphics:mask_graphics_241,x:182.2,y:240.1}).wait(1).to({graphics:mask_graphics_242,x:184.1,y:240}).wait(1).to({graphics:mask_graphics_243,x:185.9,y:239.9}).wait(1).to({graphics:mask_graphics_244,x:187.8,y:239.9}).wait(1).to({graphics:mask_graphics_245,x:189.6,y:239.8}).wait(1).to({graphics:mask_graphics_246,x:191.4,y:239.7}).wait(1).to({graphics:mask_graphics_247,x:193.1,y:239.6}).wait(1).to({graphics:mask_graphics_248,x:194.9,y:239.5}).wait(1).to({graphics:mask_graphics_249,x:196.6,y:239.4}).wait(1).to({graphics:mask_graphics_250,x:198.3,y:239.3}).wait(1).to({graphics:mask_graphics_251,x:200,y:239.2}).wait(1).to({graphics:mask_graphics_252,x:201.7,y:239.1}).wait(1).to({graphics:mask_graphics_253,x:203.3,y:239}).wait(1).to({graphics:mask_graphics_254,x:204.9,y:239}).wait(1).to({graphics:mask_graphics_255,x:206.5,y:238.9}).wait(1).to({graphics:mask_graphics_256,x:208.1,y:238.8}).wait(1).to({graphics:mask_graphics_257,x:209.6,y:238.7}).wait(1).to({graphics:mask_graphics_258,x:211.2,y:238.6}).wait(1).to({graphics:mask_graphics_259,x:212.7,y:238.5}).wait(1).to({graphics:mask_graphics_260,x:214.1,y:238.5}).wait(1).to({graphics:mask_graphics_261,x:215.6,y:238.4}).wait(1).to({graphics:mask_graphics_262,x:217,y:238.3}).wait(1).to({graphics:mask_graphics_263,x:218.3,y:238.3}).wait(1).to({graphics:mask_graphics_264,x:219.7,y:238.2}).wait(1).to({graphics:mask_graphics_265,x:221,y:238.2}).wait(1).to({graphics:mask_graphics_266,x:222.3,y:238.1}).wait(1).to({graphics:mask_graphics_267,x:223.6,y:238.1}).wait(1).to({graphics:mask_graphics_268,x:224.8,y:238.1}).wait(1).to({graphics:mask_graphics_269,x:226,y:238.1}).wait(1).to({graphics:mask_graphics_270,x:227.2,y:238}).wait(1).to({graphics:mask_graphics_271,x:228.3,y:238}).wait(1).to({graphics:mask_graphics_272,x:229.4,y:238}).wait(1).to({graphics:mask_graphics_273,x:230.5,y:238}).wait(1).to({graphics:mask_graphics_274,x:231.5,y:238}).wait(1).to({graphics:mask_graphics_275,x:232.5,y:237.9}).wait(1).to({graphics:mask_graphics_276,x:233.5,y:237.9}).wait(1).to({graphics:mask_graphics_277,x:234.4,y:237.9}).wait(1).to({graphics:mask_graphics_278,x:235.3,y:237.9}).wait(1).to({graphics:mask_graphics_279,x:236.2,y:237.9}).wait(1).to({graphics:mask_graphics_280,x:237,y:237.8}).wait(1).to({graphics:mask_graphics_281,x:237.8,y:237.8}).wait(1).to({graphics:mask_graphics_282,x:238.6,y:237.8}).wait(1).to({graphics:mask_graphics_283,x:239.3,y:237.8}).wait(1).to({graphics:mask_graphics_284,x:240,y:237.7}).wait(1).to({graphics:mask_graphics_285,x:240.7,y:237.7}).wait(1).to({graphics:mask_graphics_286,x:241.3,y:237.7}).wait(1).to({graphics:mask_graphics_287,x:241.9,y:237.7}).wait(1).to({graphics:mask_graphics_288,x:242.4,y:237.6}).wait(1).to({graphics:mask_graphics_289,x:242.9,y:237.6}).wait(1).to({graphics:mask_graphics_290,x:243.4,y:237.6}).wait(1).to({graphics:mask_graphics_291,x:243.8,y:237.5}).wait(1).to({graphics:mask_graphics_292,x:244.2,y:237.5}).wait(1).to({graphics:mask_graphics_293,x:244.5,y:237.5}).wait(1).to({graphics:mask_graphics_294,x:244.9,y:237.4}).wait(1).to({graphics:mask_graphics_295,x:245.1,y:237.4}).wait(1).to({graphics:mask_graphics_296,x:245.4,y:237.4}).wait(1).to({graphics:mask_graphics_297,x:245.6,y:237.3}).wait(1).to({graphics:mask_graphics_298,x:245.7,y:237.3}).wait(1).to({graphics:mask_graphics_299,x:245.9,y:237.3}).wait(1).to({graphics:mask_graphics_300,x:245.9,y:237.2}).wait(200));

	// 1
	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(25,1,1).p("AbVBHQgZKTnmHZQoAHyrVAAQrUAAoBnyQoAnyAArBQAArAIAnyQIBnyLUAAQK+AAH3HTQAQAPAQAQQAcAbAaAb");
	this.shape_102.setTransform(274.9,273.8);
	this.shape_102._off = true;

	var maskedShapeInstanceList = [this.shape_102];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_102).wait(139).to({_off:false},0).wait(361));

	// Layer 3 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_9 = new cjs.Graphics().p("EgByAk0QuEiPoXrhMA3ogoYQIXLiiOODQiQOEriIXQpGGmqrAAQi2AAi9geg");
	var mask_1_graphics_10 = new cjs.Graphics().p("EgBHAk8QuIh+olrXMA21gpcQIlLWh8OGQh/OHrWIlQpQHArEAAQiiAAimgXg");
	var mask_1_graphics_11 = new cjs.Graphics().p("EgAdAlCQuJhso0rMMA2AgqhQI0LMhrOIQhtOJrMI0QpZHZreAAQiMAAiQgRg");
	var mask_1_graphics_12 = new cjs.Graphics().p("EAANAlIQuLhapBrBMA1JgrlQJCLBhZOKQhbOLrAJCQpiH0r5AAQh2AAh6gMg");
	var mask_1_graphics_13 = new cjs.Graphics().p("EAA4AlMQuNhIpPq1MA0SgsnQJQK1hIOMQhIOMq2JQQpqIPsUAAQhgAAhigIg");
	var mask_1_graphics_14 = new cjs.Graphics().p("EABiAlQQuNg2pdqpMAzZgtpQJdKqg1ONQg3ONqpJdQpyIssxAAQhJAAhLgFg");
	var mask_1_graphics_15 = new cjs.Graphics().p("EACNAlTQuPgkpqqdMAyggupQJqKegjONQglOPqeJqQp4JItPAAQgyAAgygCg");
	var mask_1_graphics_16 = new cjs.Graphics().p("EAC4AlVQuPgSp4qRMAxlgvnQJ3KRgSOOQgTOPqRJ3Qp/JmtuAAIgygBg");
	var mask_1_graphics_17 = new cjs.Graphics().p("EADiAlWQuPAAqEqEMAwogwmQKEKFAAOOQgBOQqFKEQqEKDuOAAIgBAAg");
	var mask_1_graphics_18 = new cjs.Graphics().p("A0TbxMAvqgxiQKRJ4ASOOQAROPp4KRQp4KQuOASIgxAAQtwAAp/pmg");
	var mask_1_graphics_19 = new cjs.Graphics().p("Az0cPMAurgydQKdJqAkOOQAjOPprKdQprKduNAjQgyACgxAAQtQAAp5pJg");
	var mask_1_graphics_20 = new cjs.Graphics().p("AzUctMAtqgzYQKpJeA2OMQA1OOpdKpQpeKpuNA2QhKAEhIAAQszAApxosg");
	var mask_1_graphics_21 = new cjs.Graphics().p("Ay0dKMAspg0RQK1JQBIOMQBGOMpQK1QpQK1uLBHQhiAIhgAAQsVAApqoQg");
	var mask_1_graphics_22 = new cjs.Graphics().p("AyUdmMArng1IQLAJCBaOLQBZOKpDLBQpCLAuKBZQh5AMh2AAQr6AApin1g");
	var mask_1_graphics_23 = new cjs.Graphics().p("AxzeCMAqkg1+QLLI0BsOJQBqOIo0LLQo0LMuJBrQiQARiMAAQrfAApZnag");
	var mask_1_graphics_24 = new cjs.Graphics().p("AxRedMApfg2zQLWImB+OGQB8OGonLXQomLWuFB9QioAXihAAQrFAApPnAg");
	var mask_1_graphics_25 = new cjs.Graphics().p("Awve3MAoZg3mQLhIXCQOEQCNODoXLiQoYLhuDCOQi+Aei2AAQqrAApGmng");
	var mask_1_graphics_26 = new cjs.Graphics().p("AwNfRMAnTg4ZQLsIJChOBQCfOAoJLsQoJLruAChQjUAljLAAQqSAAo8mOg");
	var mask_1_graphics_27 = new cjs.Graphics().p("AvqfqMAmMg5KQL1H6CzN+QCxN9n6L2Qn7L1t9CyQjoAujgAAQp6AAoxl2g");
	var mask_1_graphics_28 = new cjs.Graphics().p("EgPGAgCMAlDg55QL/HrDEN6QDDN6nrL/QnsMAt5DDQj+A3jzAAQpjAAollfg");
	var mask_1_graphics_29 = new cjs.Graphics().p("EgOiAgaMAj6g6nQMJHcDVN2QDUN1ncMJQncMJt1DVQkTBCkHAAQpNAAoYlJg");
	var mask_1_graphics_30 = new cjs.Graphics().p("EgN+AgxMAiwg7UQMSHNDnNxQDlNxnMMTQnNMStxDmQkmBNkcAAQo2AAoMkzg");
	var mask_1_graphics_31 = new cjs.Graphics().p("EgNZAhHMAhlg7/QMbG9D4NtQD3Ntm9MbQm+MbtsD3Qk6BZkvAAQogAAn/keg");
	var mask_1_graphics_32 = new cjs.Graphics().p("EgMzAhcMAgYg8oQMkGuEJNnQEINomtMjQmuMktnEJQlNBllDAAQoKAAnxkKg");
	var mask_1_graphics_33 = new cjs.Graphics().p("EgMNAhxMAfLg9QQMsGdEbNjQEZNimeMsQmdMstiEZQlgBzlXAAQn1AAnij2g");
	var mask_1_graphics_34 = new cjs.Graphics().p("EgLnAiFMAd+g93QM0GOEsNdQEqNcmOM0QmNM0tcEqQlyCBlrAAQngAAnUjjg");
	var mask_1_graphics_35 = new cjs.Graphics().p("EgLAAiYMAcwg+bQM7F9E9NXQE7NWl+M8Ql9M7tWE8QmECPl+AAQnMAAnEjRg");
	var mask_1_graphics_36 = new cjs.Graphics().p("EgKZAirMAbhg+/QNDFtFNNQQFMNQltNDQltNDtQFMQmVCfmSAAQm4AAm0i/g");
	var mask_1_graphics_37 = new cjs.Graphics().p("EgJyAi9MAaSg/hQNKFcFeNKQFcNJldNKQlcNKtJFdQmmCvmmAAQmjAAmliug");
	var mask_1_graphics_38 = new cjs.Graphics().p("EgJKAjOMAZChABQNQFLFuNDQFtNClMNRQlMNQtCFuQm2DAm6AAQmPAAmUieg");
	var mask_1_graphics_39 = new cjs.Graphics().p("EgIhAjeMAXwhAgQNXE7F+M7QF+M7k8NXQk7NXs6F+QnGDRnOAAQl8AAmCiOg");
	var mask_1_graphics_40 = new cjs.Graphics().p("EgH5AjuMAWfhA9QNdEqGPMzQGNMzkqNeQkqNdszGNQnWDkniAAQloAAlxh/g");
	var mask_1_graphics_41 = new cjs.Graphics().p("EgHQAj9MAVNhBZQNjEZGeMsQGeMrkZNjQkaNisrGeQnkD3n3AAQlVAAlehxg");
	var mask_1_graphics_42 = new cjs.Graphics().p("EgGnAkLMAT7hBzQNoEIGuMjQGuMkkJNnQkINosiGuQnzELoMAAQlBAAlMhkg");
	var mask_1_graphics_43 = new cjs.Graphics().p("EgF9AkYMASnhCLQNtD3G/MaQG9Mcj3NsQj3NtsaG9QoBEgoiAAQktAAk4hYg");
	var mask_1_graphics_44 = new cjs.Graphics().p("EgFTAkkMARThChQNyDlHOMSQHNMSjmNxQjmNysRHNQoNE0o4AAQkZAAklhMg");
	var mask_1_graphics_45 = new cjs.Graphics().p("EgEpAkwMAP/hC2QN3DUHdMIQHcMJjUN1QjVN3sIHcQoaFKpOAAQkFAAkRhBg");
	var mask_1_graphics_46 = new cjs.Graphics().p("EgD/Ak7MAOrhDKQN7DDHsL/QHrL/jDN5QjCN7r/HrQomFhplAAQjyAAj8g3g");
	var mask_1_graphics_47 = new cjs.Graphics().p("EgDUAlFMANWhDcQN+CyH7L1QH7L1iyN9QixN+r0H6QoyF5p9AAQjeAAjmgug");
	var mask_1_graphics_48 = new cjs.Graphics().p("EgCqAlOMAMChDrQOBCfIKLrQIJLsifOAQigOBrrIJQo8GQqVAAQjKAAjRglg");
	var mask_1_graphics_49 = new cjs.Graphics().p("EgB/AlWMAKshD5QOECOIZLgQIYLhiOODQiOOFrgIXQpHGpqtAAQi2AAi7geg");
	var mask_1_graphics_50 = new cjs.Graphics().p("EgBUAleMAJXhEGQOGB8IoLVQImLXh8OGQh9OHrVImQpRHCrHAAQigAAilgXg");
	var mask_1_graphics_51 = new cjs.Graphics().p("EgAoAlkMAIAhERQOJBrI2LKQI0LMhrOIQhqOJrLI0QpaHcrhAAQiKAAiOgRg");
	var mask_1_graphics_52 = new cjs.Graphics().p("EAACAlqMAGrhEaQOLBYJELAQJCLAhZOKQhYOLrAJCQpjH3r7AAQh1AAh4gMg");
	var mask_1_graphics_53 = new cjs.Graphics().p("EAAtAlvMAFWhEiQOMBHJRK0QJQK1hHOLQhHONqzJQQpsISsXAAQheAAhhgIg");
	var mask_1_graphics_54 = new cjs.Graphics().p("EABZAlzMAD/hEoQONA1JfKoQJdKqg1OMQg1OOqoJdQpyIus0AAQhIAAhIgEg");
	var mask_1_graphics_55 = new cjs.Graphics().p("EACEAl2MACphEsQOOAjJsKcQJqKegiONQgjOPqcJqQp6JLtSAAQgvAAgxgCg");
	var mask_1_graphics_56 = new cjs.Graphics().p("EACvAl5MABShEvQOPARJ5KQQJ4KRgROOQgROPqQJ4Qp/JotxAAIgwAAg");
	var mask_1_graphics_57 = new cjs.Graphics().p("ADW+1QOPgBKGKDQKFKEAAOPQABOPqDKEQqEKGuPABg");
	var mask_1_graphics_58 = new cjs.Graphics().p("ACr+0QOPgSKSJ2QKRJ4ATOOQATOPp2KRQp4KSuPATg");
	var mask_1_graphics_59 = new cjs.Graphics().p("ACA+xQOOgkKfJpQKdJqAlOOQAlOOpqKeQpqKeuPAlg");
	var mask_1_graphics_60 = new cjs.Graphics().p("ABV+sQONg3KrJcQKpJdA3ONQA2ONpcKqQpdKquNA3g");
	var mask_1_graphics_61 = new cjs.Graphics().p("AAq+nQOMhJK2JPQK1JQBJOLQBIOMpOK1QpQK3uMBIg");
	var mask_1_graphics_62 = new cjs.Graphics().p("AgB+gQOKhbLCJBQLAJCBbOKQBaOKpBLBQpBLCuLBag");
	var mask_1_graphics_63 = new cjs.Graphics().p("Ags+YQOIhsLNIyQLMI0BsOJQBsOIozLMQozLNuJBsg");
	var mask_1_graphics_64 = new cjs.Graphics().p("AhX+PQOGh+LYIkQLWImB+OHQB+OFokLXQomLYuGB+g");
	var mask_1_graphics_65 = new cjs.Graphics().p("AiB+FQOCiPLjIWQLhIXCQOEQCQODoXLhQoXLjuDCQg");
	var mask_1_graphics_66 = new cjs.Graphics().p("Ais95QOAihLsIHQLsIJCiOBQChOAoILsQoILtuBChg");
	var mask_1_graphics_67 = new cjs.Graphics().p("AjX9sQN9izL3H5QL2H6CzN9QCzN9n5L2Qn6L3t9Czg");
	var mask_1_graphics_68 = new cjs.Graphics().p("AkB9dQN5jFMAHqQMAHrDFN5QDEN5npMAQnrMBt6DEg");
	var mask_1_graphics_69 = new cjs.Graphics().p("Akr9OQN1jWMKHaQMJHcDWN2QDWN1nbMJQnbMKt2DWg");
	var mask_1_graphics_70 = new cjs.Graphics().p("AlV89QNwjoMUHLQMSHNDoNxQDnNxnLMSQnMMUtyDng");
	var mask_1_graphics_71 = new cjs.Graphics().p("Al+8rQNrj5McG8QMcG8D4NtQD5Nsm8MbQm8McttD5g");
	var mask_1_graphics_72 = new cjs.Graphics().p("Amo8YQNnkKMkGsQMkGtEKNoQEKNmmsMkQmsMltoEKg");
	var mask_1_graphics_73 = new cjs.Graphics().p("AnR8EQNhkbMtGcQMtGdEbNjQEaNhmcMsQmcMttiEbg");
	var mask_1_graphics_74 = new cjs.Graphics().p("An67uQNcksM1GMQM0GNEsNcQEsNcmMM0QmNM1tcEsg");
	var mask_1_graphics_75 = new cjs.Graphics().p("Aoi7XQNVk9M9F8QM8F9E9NWQE8NVl7M8Ql9M9tWE9g");
	var mask_1_graphics_76 = new cjs.Graphics().p("ApK6/QNPlONEFrQNDFtFONQQFNNPlrNDQlsNEtQFOg");
	var mask_1_graphics_77 = new cjs.Graphics().p("Apy6mQNJleNKFaQNLFdFeNJQFeNIlbNKQlcNLtJFeg");
	var mask_1_graphics_78 = new cjs.Graphics().p("AqZ6MQNBluNSFKQNRFLFuNCQFvNClKNQQlLNStCFvg");
	var mask_1_graphics_79 = new cjs.Graphics().p("ArA5wQM6l/NYE5QNXE7F/M7QF/M6k6NWQk6NZs7F/g");
	var mask_1_graphics_80 = new cjs.Graphics().p("Arm5TQMymQNeEpQNdEqGPMzQGPMykpNdQkpNeszGPg");
	var mask_1_graphics_81 = new cjs.Graphics().p("AsM42QMqmfNjEXQNjEZGfMrQGgMrkYNiQkYNksrGfg");
	var mask_1_graphics_82 = new cjs.Graphics().p("Asy4XQMjmvNnEGQNpEIGvMjQGvMikHNoQkHNpsiGvg");
	var mask_1_graphics_83 = new cjs.Graphics().p("AtX33QMam+NtD0QNtD3G/MaQG/MZj2NtQj2NvsaG+g");
	var mask_1_graphics_84 = new cjs.Graphics().p("At83WQMRnONyDkQNyDlHOMRQHOMRjkNxQjkNzsSHOg");
	var mask_1_graphics_85 = new cjs.Graphics().p("Aug2zQMIneN1DSQN3DUHdMIQHeMHjTN2QjTN3sIHeg");
	var mask_1_graphics_86 = new cjs.Graphics().p("AvE2QQL+ntN6DBQN6DCHtL/QHtL9jBN6QjCN7r+Htg");
	var mask_1_graphics_87 = new cjs.Graphics().p("Avn1sQL0n7N9CvQN/CxH7L0QH8L1iwN8QiwN/r0H8g");
	var mask_1_graphics_88 = new cjs.Graphics().p("AwK1GQLqoLOBCeQOBCfILLqQIKLrieOAQieOCrrILg");
	var mask_1_graphics_89 = new cjs.Graphics().p("Awt0gQLgoZOECMQOECNIZLhQIaLgiNOCQiNOFrgIag");
	var mask_1_graphics_90 = new cjs.Graphics().p("AxOz4QLVooOGB6QOHB8IoLVQInLWh7OFQh7OIrVIng");
	var mask_1_graphics_91 = new cjs.Graphics().p("AxwzQQLLo2OIBpQOJBqI2LKQI2LLhpOHQhqOKrKI2g");
	var mask_1_graphics_92 = new cjs.Graphics().p("AyQymQK/pEOKBXQOLBYJEK/QJDK/hXOJQhXOMq/JEg");
	var mask_1_graphics_93 = new cjs.Graphics().p("Ayxx8QK0pROMBEQOMBHJSKzQJRK0hFOLQhGONqzJSg");
	var mask_1_graphics_94 = new cjs.Graphics().p("AzQxRQKnpeONAyQOOA1JfKoQJfKng0OMQgzOPqoJfg");
	var mask_1_graphics_95 = new cjs.Graphics().p("AzvwkQKbpsOOAhQOPAiJsKcQJsKbgiONQghOQqcJsg");
	var mask_1_graphics_96 = new cjs.Graphics().p("A0Ov3QKPp5OPAPQOPAQJ5KQQJ5KPgQOOQgPOQqQJ5g");
	var mask_1_graphics_97 = new cjs.Graphics().p("A0svJQKDqGOOgDQOPgBKGKDQKGKDACONQADOQqDKGg");
	var mask_1_graphics_98 = new cjs.Graphics().p("A1KuaQJ2qSOOgVQOQgTKSJ2QKSJ2AVONQAUOQp2KSg");
	var mask_1_graphics_99 = new cjs.Graphics().p("A1ntqQJpqfOOgmQOOglKfJoQKfJpAmONQAmOPppKfg");
	var mask_1_graphics_100 = new cjs.Graphics().p("A2Ds5QJcqrOMg5QOOg3KrJcQKqJcA4OLQA4OPpbKqg");
	var mask_1_graphics_101 = new cjs.Graphics().p("A2fsIQJOq2OMhLQOMhIK2JOQK3JOBKOKQBKONpOK3g");
	var mask_1_graphics_102 = new cjs.Graphics().p("A26rVQJArCOKhcQOLhbLCJAQLCJABbOJQBcOMpALCg");
	var mask_1_graphics_103 = new cjs.Graphics().p("A3UqiQIyrNOJhuQOHhtLOIyQLNIzBtOHQBuOJozLNg");
	var mask_1_graphics_104 = new cjs.Graphics().p("A3upuQIkrYOGiAQOGh+LYIkQLYIkB/OEQB/OIokLYg");
	var mask_1_graphics_105 = new cjs.Graphics().p("A4Ho5QIVrjOEiSQODiQLjIWQLiIWCROBQCROFoVLjg");
	var mask_1_graphics_106 = new cjs.Graphics().p("A4goEQIHrtOBijQOAiiLtIHQLtIHCiN/QCjOBoHLtg");
	var mask_1_graphics_107 = new cjs.Graphics().p("A43nOQH4r3N9i1QN8izL4H4QL3H4C0N8QC0N+n4L3g");
	var mask_1_graphics_108 = new cjs.Graphics().p("A5OmXQHpsBN5jGQN5jFMBHpQMBHpDFN4QDGN6npMBg");
	var mask_1_graphics_109 = new cjs.Graphics().p("A5llfQHasLN2jYQN0jWMLHaQMKHaDXN0QDYN2naMKg");
	var mask_1_graphics_110 = new cjs.Graphics().p("A56knQHKsUNxjpQNxjoMTHLQMUHKDoNwQDpNynKMTg");
	var mask_1_graphics_111 = new cjs.Graphics().p("A6PjuQG7sdNsj6QNsj5McG7QMdG6D5NrQD7Ntm7Mdg");
	var mask_1_graphics_112 = new cjs.Graphics().p("A6ji1QGrslNnkMQNnkKMlGrQMlGrELNmQELNomrMlg");
	var mask_1_graphics_113 = new cjs.Graphics().p("A62h7QGbstNikdQNhkbMtGbQMtGbEcNgQEdNjmbMtg");
	var mask_1_graphics_114 = new cjs.Graphics().p("A7IhBQGLs1NcktQNbktM1GLQM1GMEtNaQEuNdmLM1g");
	var mask_1_graphics_115 = new cjs.Graphics().p("A7agGQF7s8NWk/QNVk9M9F7QM9F7E9NUQE/NXl7M9g");
	var mask_1_graphics_116 = new cjs.Graphics().p("A7rA1QFrtDNPlPQNPlONEFqQNEFrFPNOQFPNQlrNEg");
	var mask_1_graphics_117 = new cjs.Graphics().p("A77BxQFatKNJlgQNIleNLFaQNLFaFfNHQFgNKlaNKg");
	var mask_1_graphics_118 = new cjs.Graphics().p("A8KCuQFKtRNBlwQNBlvNSFJQNSFJFvNBQFwNClJNSg");
	var mask_1_graphics_119 = new cjs.Graphics().p("A8YDrQE5tXM6mBQM6l/NXE4QNYE5GAM5QGBM7k5NYg");
	var mask_1_graphics_120 = new cjs.Graphics().p("A8lEoQEntdMzmRQMymPNeEnQNeEoGQMxQGQM0knNdg");
	var mask_1_graphics_121 = new cjs.Graphics().p("A8yFmQEXtjMqmhQMqmfNkEWQNjEXGgMpQGhMskXNjg");
	var mask_1_graphics_122 = new cjs.Graphics().p("A8+GkQEGtoMimxQMhmvNpEGQNpEFGwMhQGxMjkGNpg");
	var mask_1_graphics_123 = new cjs.Graphics().p("A9JHjQD1ttMZnBQMam/NtD0QNuD1G/MZQHBMZj1Nug");
	var mask_1_graphics_124 = new cjs.Graphics().p("A9TIhQDjtxMRnQQMRnPNxDjQNzDjHPMQQHQMRjjNyg");
	var mask_1_graphics_125 = new cjs.Graphics().p("A9cJgQDSt1MHngQMIneN1DSQN3DSHfMGQHfMIjSN2g");
	var mask_1_graphics_126 = new cjs.Graphics().p("A9kKgQDAt6L9nuQL/nuN5DBQN7DAHuL9QHuL+jAN6g");
	var mask_1_graphics_127 = new cjs.Graphics().p("A9sLgQCvt+Lzn9QL1n8N9CuQN+CvH9LzQH9L0iuN+g");
	var mask_1_graphics_128 = new cjs.Graphics().p("A9zMfQCduALqoMQLqoLOBCdQOBCdIMLpQIMLpidOCg");
	var mask_1_graphics_129 = new cjs.Graphics().p("A94NgQCLuELfobQLgoZODCLQOFCLIaLfQIaLfiLOFg");
	var mask_1_graphics_130 = new cjs.Graphics().p("A99OgQB5uHLUooQLWooOGB5QOHB6IoLUQIpLUh6OHg");
	var mask_1_graphics_131 = new cjs.Graphics().p("A+CPgQBouJLJo2QLLo2OIBnQOJBoI3LJQI3LKhoOJg");
	var mask_1_graphics_132 = new cjs.Graphics().p("A+FQhQBWuLK+pFQK/pEOKBWQOLBWJEK+QJGK+hWOLg");
	var mask_1_graphics_133 = new cjs.Graphics().p("A+IRhQBFuMKypSQKzpSOMBEQONBEJSKzQJTKyhEONg");
	var mask_1_graphics_134 = new cjs.Graphics().p("A+JSiQAyuOKnpfQKnpfONAyQOOAyJfKnQJhKmgzOOg");
	var mask_1_graphics_135 = new cjs.Graphics().p("A+KTjQAguPKbpsQKbptOOAhQOPAgJsKaQJuKbghOOg");
	var mask_1_graphics_136 = new cjs.Graphics().p("A+KUkQAOuPKOp6QKQp5OOAOQOPAOJ5KOQJ7KPgOOPg");
	var mask_1_graphics_137 = new cjs.Graphics().p("A0Li5QKCqHOOgDQOQgDKGKBQKHKBAEOQMhEvAAQQgEuPKCqGg");
	var mask_1_graphics_138 = new cjs.Graphics().p("A0oiwQJ1qTOOgVQOPgWKTJ1QKUJ1AVOPMhEuABnQgVuPJ1qTg");
	var mask_1_graphics_139 = new cjs.Graphics().p("A1FimQJpqfOOgnQOOgoKfJoQKgJnAnOPMhErAC9QgnuOJnqfg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_1_graphics_9,x:243.4,y:238.6}).wait(1).to({graphics:mask_1_graphics_10,x:243.3,y:238.7}).wait(1).to({graphics:mask_1_graphics_11,x:243.2,y:238.7}).wait(1).to({graphics:mask_1_graphics_12,x:243.1,y:238.8}).wait(1).to({graphics:mask_1_graphics_13,x:243,y:238.8}).wait(1).to({graphics:mask_1_graphics_14,x:242.9,y:238.9}).wait(1).to({graphics:mask_1_graphics_15,x:242.8,y:238.9}).wait(1).to({graphics:mask_1_graphics_16,x:242.8,y:239}).wait(1).to({graphics:mask_1_graphics_17,x:242.7,y:239}).wait(1).to({graphics:mask_1_graphics_18,x:242.7,y:239.1}).wait(1).to({graphics:mask_1_graphics_19,x:242.6,y:239.2}).wait(1).to({graphics:mask_1_graphics_20,x:242.6,y:239.3}).wait(1).to({graphics:mask_1_graphics_21,x:242.5,y:239.4}).wait(1).to({graphics:mask_1_graphics_22,x:242.5,y:239.5}).wait(1).to({graphics:mask_1_graphics_23,x:242.5,y:239.6}).wait(1).to({graphics:mask_1_graphics_24,x:242.4,y:239.7}).wait(1).to({graphics:mask_1_graphics_25,x:242.4,y:239.8}).wait(1).to({graphics:mask_1_graphics_26,x:242.4,y:239.9}).wait(1).to({graphics:mask_1_graphics_27,x:242.4,y:240}).wait(1).to({graphics:mask_1_graphics_28,x:242.4,y:240.1}).wait(1).to({graphics:mask_1_graphics_29,x:242.3,y:240.3}).wait(1).to({graphics:mask_1_graphics_30,x:242.3,y:240.4}).wait(1).to({graphics:mask_1_graphics_31,x:242.3,y:240.5}).wait(1).to({graphics:mask_1_graphics_32,x:242.3,y:240.6}).wait(1).to({graphics:mask_1_graphics_33,x:242.3,y:240.7}).wait(1).to({graphics:mask_1_graphics_34,x:242.2,y:240.8}).wait(1).to({graphics:mask_1_graphics_35,x:242.2,y:240.9}).wait(1).to({graphics:mask_1_graphics_36,x:242.2,y:241}).wait(1).to({graphics:mask_1_graphics_37,x:242.2,y:241.1}).wait(1).to({graphics:mask_1_graphics_38,x:242.1,y:241.2}).wait(1).to({graphics:mask_1_graphics_39,x:242.1,y:241.2}).wait(1).to({graphics:mask_1_graphics_40,x:242.1,y:241.3}).wait(1).to({graphics:mask_1_graphics_41,x:242,y:241.4}).wait(1).to({graphics:mask_1_graphics_42,x:242,y:241.5}).wait(1).to({graphics:mask_1_graphics_43,x:242,y:241.6}).wait(1).to({graphics:mask_1_graphics_44,x:241.9,y:241.6}).wait(1).to({graphics:mask_1_graphics_45,x:241.9,y:241.7}).wait(1).to({graphics:mask_1_graphics_46,x:241.9,y:241.8}).wait(1).to({graphics:mask_1_graphics_47,x:241.8,y:241.9}).wait(1).to({graphics:mask_1_graphics_48,x:241.8,y:241.9}).wait(1).to({graphics:mask_1_graphics_49,x:241.8,y:242}).wait(1).to({graphics:mask_1_graphics_50,x:241.7,y:242.1}).wait(1).to({graphics:mask_1_graphics_51,x:241.7,y:242.1}).wait(1).to({graphics:mask_1_graphics_52,x:241.7,y:242.2}).wait(1).to({graphics:mask_1_graphics_53,x:241.7,y:242.3}).wait(1).to({graphics:mask_1_graphics_54,x:241.7,y:242.3}).wait(1).to({graphics:mask_1_graphics_55,x:241.6,y:242.4}).wait(1).to({graphics:mask_1_graphics_56,x:241.6,y:242.5}).wait(1).to({graphics:mask_1_graphics_57,x:241.6,y:242.6}).wait(1).to({graphics:mask_1_graphics_58,x:241.7,y:242.7}).wait(1).to({graphics:mask_1_graphics_59,x:241.7,y:242.7}).wait(1).to({graphics:mask_1_graphics_60,x:241.7,y:242.7}).wait(1).to({graphics:mask_1_graphics_61,x:241.8,y:242.6}).wait(1).to({graphics:mask_1_graphics_62,x:241.8,y:242.5}).wait(1).to({graphics:mask_1_graphics_63,x:241.8,y:242.4}).wait(1).to({graphics:mask_1_graphics_64,x:241.9,y:242.2}).wait(1).to({graphics:mask_1_graphics_65,x:241.9,y:242}).wait(1).to({graphics:mask_1_graphics_66,x:242,y:241.7}).wait(1).to({graphics:mask_1_graphics_67,x:242,y:241.4}).wait(1).to({graphics:mask_1_graphics_68,x:242.1,y:241}).wait(1).to({graphics:mask_1_graphics_69,x:242.2,y:240.6}).wait(1).to({graphics:mask_1_graphics_70,x:242.2,y:240.2}).wait(1).to({graphics:mask_1_graphics_71,x:242.3,y:239.7}).wait(1).to({graphics:mask_1_graphics_72,x:242.3,y:239.2}).wait(1).to({graphics:mask_1_graphics_73,x:242.4,y:238.6}).wait(1).to({graphics:mask_1_graphics_74,x:242.4,y:238}).wait(1).to({graphics:mask_1_graphics_75,x:242.5,y:237.4}).wait(1).to({graphics:mask_1_graphics_76,x:242.5,y:236.7}).wait(1).to({graphics:mask_1_graphics_77,x:242.6,y:235.9}).wait(1).to({graphics:mask_1_graphics_78,x:242.6,y:235.2}).wait(1).to({graphics:mask_1_graphics_79,x:242.7,y:234.4}).wait(1).to({graphics:mask_1_graphics_80,x:242.7,y:233.5}).wait(1).to({graphics:mask_1_graphics_81,x:242.7,y:232.6}).wait(1).to({graphics:mask_1_graphics_82,x:242.8,y:231.7}).wait(1).to({graphics:mask_1_graphics_83,x:242.8,y:230.7}).wait(1).to({graphics:mask_1_graphics_84,x:242.9,y:229.7}).wait(1).to({graphics:mask_1_graphics_85,x:242.9,y:228.7}).wait(1).to({graphics:mask_1_graphics_86,x:242.9,y:227.6}).wait(1).to({graphics:mask_1_graphics_87,x:243,y:226.5}).wait(1).to({graphics:mask_1_graphics_88,x:243,y:225.4}).wait(1).to({graphics:mask_1_graphics_89,x:243,y:224.2}).wait(1).to({graphics:mask_1_graphics_90,x:243.1,y:222.9}).wait(1).to({graphics:mask_1_graphics_91,x:243.1,y:221.7}).wait(1).to({graphics:mask_1_graphics_92,x:243.2,y:220.4}).wait(1).to({graphics:mask_1_graphics_93,x:243.2,y:219.1}).wait(1).to({graphics:mask_1_graphics_94,x:243.2,y:217.7}).wait(1).to({graphics:mask_1_graphics_95,x:243.3,y:216.3}).wait(1).to({graphics:mask_1_graphics_96,x:243.4,y:214.9}).wait(1).to({graphics:mask_1_graphics_97,x:243.4,y:213.4}).wait(1).to({graphics:mask_1_graphics_98,x:243.5,y:211.9}).wait(1).to({graphics:mask_1_graphics_99,x:243.6,y:210.4}).wait(1).to({graphics:mask_1_graphics_100,x:243.7,y:208.8}).wait(1).to({graphics:mask_1_graphics_101,x:243.8,y:207.3}).wait(1).to({graphics:mask_1_graphics_102,x:243.9,y:205.7}).wait(1).to({graphics:mask_1_graphics_103,x:244,y:204}).wait(1).to({graphics:mask_1_graphics_104,x:244.1,y:202.3}).wait(1).to({graphics:mask_1_graphics_105,x:244.2,y:200.7}).wait(1).to({graphics:mask_1_graphics_106,x:244.3,y:198.9}).wait(1).to({graphics:mask_1_graphics_107,x:244.4,y:197.2}).wait(1).to({graphics:mask_1_graphics_108,x:244.5,y:195.4}).wait(1).to({graphics:mask_1_graphics_109,x:244.6,y:193.6}).wait(1).to({graphics:mask_1_graphics_110,x:244.8,y:191.8}).wait(1).to({graphics:mask_1_graphics_111,x:244.9,y:190}).wait(1).to({graphics:mask_1_graphics_112,x:245,y:188.1}).wait(1).to({graphics:mask_1_graphics_113,x:245.1,y:186.2}).wait(1).to({graphics:mask_1_graphics_114,x:245.2,y:184.3}).wait(1).to({graphics:mask_1_graphics_115,x:245.3,y:182.4}).wait(1).to({graphics:mask_1_graphics_116,x:245.4,y:180.4}).wait(1).to({graphics:mask_1_graphics_117,x:245.5,y:178.4}).wait(1).to({graphics:mask_1_graphics_118,x:245.5,y:176.5}).wait(1).to({graphics:mask_1_graphics_119,x:245.6,y:174.5}).wait(1).to({graphics:mask_1_graphics_120,x:245.7,y:172.4}).wait(1).to({graphics:mask_1_graphics_121,x:245.8,y:170.4}).wait(1).to({graphics:mask_1_graphics_122,x:245.9,y:168.4}).wait(1).to({graphics:mask_1_graphics_123,x:245.9,y:166.3}).wait(1).to({graphics:mask_1_graphics_124,x:246,y:164.2}).wait(1).to({graphics:mask_1_graphics_125,x:246.1,y:162.1}).wait(1).to({graphics:mask_1_graphics_126,x:246.2,y:160}).wait(1).to({graphics:mask_1_graphics_127,x:246.2,y:157.9}).wait(1).to({graphics:mask_1_graphics_128,x:246.3,y:155.8}).wait(1).to({graphics:mask_1_graphics_129,x:246.4,y:153.7}).wait(1).to({graphics:mask_1_graphics_130,x:246.4,y:151.5}).wait(1).to({graphics:mask_1_graphics_131,x:246.5,y:149.4}).wait(1).to({graphics:mask_1_graphics_132,x:246.6,y:147.2}).wait(1).to({graphics:mask_1_graphics_133,x:246.7,y:145.1}).wait(1).to({graphics:mask_1_graphics_134,x:246.7,y:142.9}).wait(1).to({graphics:mask_1_graphics_135,x:246.8,y:140.7}).wait(1).to({graphics:mask_1_graphics_136,x:246.9,y:138.6}).wait(1).to({graphics:mask_1_graphics_137,x:247,y:137.2}).wait(1).to({graphics:mask_1_graphics_138,x:247,y:139.4}).wait(1).to({graphics:mask_1_graphics_139,x:247,y:141.5}).wait(361));

	// 1
	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(25,1,1).p("A11SUQh7kpAAlZQAArAIBnzQIAnyLUAAQK+AAH3HUQARAPAQAPQAbAbAbAc");
	this.shape_103.setTransform(252.1,220.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(25,1,1).p("A07TRQi1laAAmiQAArAIBnyQIAnyLUAAQK+AAH3HTQARAPAQAQQAbAaAbAc");
	this.shape_104.setTransform(252.1,227);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(25,1,1).p("AbVBHQgZKTnmHZQoAHyrVAAQrUAAoBnyQoAnyAArBQAArAIAnyQIBnyLUAAQK+AAH3HTQAQAPAQAQQAcAbAaAb");
	this.shape_105.setTransform(274.9,273.8);

	var maskedShapeInstanceList = [this.shape_103,this.shape_104,this.shape_105];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_103}]},9).to({state:[{t:this.shape_104}]},10).to({state:[{t:this.shape_105}]},281).wait(200));

	// Base
	this.instance_4 = new lib.Symbol1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(275,274.5);
	this.instance_4.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(500));

	// Background
	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_106.setTransform(275,275,3.373,2.543);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_107.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_107},{t:this.shape_106}]}).wait(500));

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