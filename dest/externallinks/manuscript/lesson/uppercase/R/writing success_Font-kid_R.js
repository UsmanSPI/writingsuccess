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
	this.shape.graphics.f("#FFFFFF").s().p("AQKcQMghpgaIIgQgCIgEYUQAACeitAAQisAAAAikMAAAg0+QAAiqC1AAIcdAAQHCAEEOFEQD3ElAAGbQAAGOjxEPQkOEznRAAIxdAAId2W1QAnA0AAA3QAABHgzA0Qg0A2hLAAQhLAAg2hFgAxz33IgDUkIZtAAQElAACsjGQCci4AAkRQAAkPici5QisjJkngEInZgFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148.4,-187.7,297,375.4);


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


(lib.ar3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(13.8,-47.9,1,1,-5,0,0,0.3,-15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:30.9,y:157.7},124).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AgBgSIADAl");
	this.shape.setTransform(13.6,-40.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AgCgbIAFA3");
	this.shape_1.setTransform(13.7,-39.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AgDgjIAHBH");
	this.shape_2.setTransform(13.7,-38.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("AgEgsIAJBZ");
	this.shape_3.setTransform(13.8,-37.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("AgFg1IAKBq");
	this.shape_4.setTransform(13.8,-37.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(5,1,1).p("AgGg9IANB7");
	this.shape_5.setTransform(13.9,-36.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(5,1,1).p("AgGhFIAOCM");
	this.shape_6.setTransform(13.9,-35.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(5,1,1).p("AgHhOIAQCd");
	this.shape_7.setTransform(14,-34.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(5,1,1).p("AgIhXIARCv");
	this.shape_8.setTransform(14,-33.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(5,1,1).p("AgKhfIAUC/");
	this.shape_9.setTransform(14.1,-33.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(5,1,1).p("AgLhoIAXDR");
	this.shape_10.setTransform(14.1,-32.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5,1,1).p("AgLhwIAYDh");
	this.shape_11.setTransform(14.2,-31.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(5,1,1).p("AgMh4IAZDx");
	this.shape_12.setTransform(14.2,-30.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(5,1,1).p("AgNiBIAbED");
	this.shape_13.setTransform(14.2,-29.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(5,1,1).p("AgOiKIAdEV");
	this.shape_14.setTransform(14.3,-29);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(5,1,1).p("AgPiSIAfEl");
	this.shape_15.setTransform(14.3,-28.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(5,1,1).p("AgQibIAhE3");
	this.shape_16.setTransform(14.4,-27.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(5,1,1).p("AgRijIAjFH");
	this.shape_17.setTransform(14.4,-26.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(5,1,1).p("AgSisIAlFZ");
	this.shape_18.setTransform(14.5,-25.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(5,1,1).p("AgTi0IAnFp");
	this.shape_19.setTransform(14.5,-24.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(5,1,1).p("AgUi9IApF7");
	this.shape_20.setTransform(14.6,-24.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(5,1,1).p("AgVjFIArGL");
	this.shape_21.setTransform(14.6,-23.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(5,1,1).p("AgWjOIAtGd");
	this.shape_22.setTransform(14.7,-22.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(5,1,1).p("AgXjWIAvGt");
	this.shape_23.setTransform(14.7,-21.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(5,1,1).p("AgYjfIAxG+");
	this.shape_24.setTransform(14.8,-20.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(5,1,1).p("AgZjnIAzHP");
	this.shape_25.setTransform(14.8,-20.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(5,1,1).p("AgajvIA1Hg");
	this.shape_26.setTransform(14.9,-19.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(5,1,1).p("Agbj4IA3Hx");
	this.shape_27.setTransform(14.9,-18.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(5,1,1).p("AgbkBIA4ID");
	this.shape_28.setTransform(15,-17.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(5,1,1).p("AgckJIA5IT");
	this.shape_29.setTransform(15,-16.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(5,1,1).p("AgekSIA9Il");
	this.shape_30.setTransform(15.1,-16);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(5,1,1).p("AgfkaIA/I1");
	this.shape_31.setTransform(15.1,-15.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(5,1,1).p("AgfkjIBAJH");
	this.shape_32.setTransform(15.2,-14.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(5,1,1).p("AghkrIBDJX");
	this.shape_33.setTransform(15.2,-13.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(5,1,1).p("Aghk0IBDJp");
	this.shape_34.setTransform(15.3,-12.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(5,1,1).p("Agik8IBFJ5");
	this.shape_35.setTransform(15.3,-11.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(5,1,1).p("AgjlFIBHKL");
	this.shape_36.setTransform(15.3,-11.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(5,1,1).p("AgklNIBJKb");
	this.shape_37.setTransform(15.4,-10.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(5,1,1).p("AgllWIBLKt");
	this.shape_38.setTransform(15.4,-9.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(5,1,1).p("AgmleIBNK9");
	this.shape_39.setTransform(15.5,-8.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(5,1,1).p("AgnlnIBPLP");
	this.shape_40.setTransform(15.5,-7.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(5,1,1).p("AgolvIBRLf");
	this.shape_41.setTransform(15.6,-7.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(5,1,1).p("Agpl4IBTLx");
	this.shape_42.setTransform(15.6,-6.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(5,1,1).p("AgqmAIBVMB");
	this.shape_43.setTransform(15.7,-5.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(5,1,1).p("AgrmJIBXMT");
	this.shape_44.setTransform(15.7,-4.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(5,1,1).p("AgsmRIBZMj");
	this.shape_45.setTransform(15.8,-3.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(5,1,1).p("AgtmaIBbM1");
	this.shape_46.setTransform(15.8,-3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(5,1,1).p("AgumiIBdNF");
	this.shape_47.setTransform(15.9,-2.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(5,1,1).p("AgvmrIBfNX");
	this.shape_48.setTransform(15.9,-1.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(5,1,1).p("AgwmzIBhNn");
	this.shape_49.setTransform(16,-0.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(5,1,1).p("Agxm8IBjN5");
	this.shape_50.setTransform(16,0.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(5,1,1).p("AgynEIBlOJ");
	this.shape_51.setTransform(16,1.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(5,1,1).p("AgznNIBnOb");
	this.shape_52.setTransform(16.1,1.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(5,1,1).p("Ag0nVIBpOr");
	this.shape_53.setTransform(16.1,2.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(5,1,1).p("Ag1neIBrO9");
	this.shape_54.setTransform(16.2,3.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(5,1,1).p("Ag2nmIBtPN");
	this.shape_55.setTransform(16.2,4.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(5,1,1).p("Ag3nvIBvPf");
	this.shape_56.setTransform(16.3,5.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(5,1,1).p("Ag4n3IBxPv");
	this.shape_57.setTransform(16.3,5.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(5,1,1).p("Ag5oAIBzQB");
	this.shape_58.setTransform(16.4,6.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(5,1,1).p("Ag5oIIB0QR");
	this.shape_59.setTransform(16.4,7.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(5,1,1).p("Ag6oRIB1Qj");
	this.shape_60.setTransform(16.5,8.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(5,1,1).p("Ag8oZIB5Qz");
	this.shape_61.setTransform(16.5,9.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(5,1,1).p("Ag8oiIB5RF");
	this.shape_62.setTransform(16.6,10);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(5,1,1).p("Ag9oqIB7RV");
	this.shape_63.setTransform(16.6,10.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(5,1,1).p("Ag+ozIB9Rn");
	this.shape_64.setTransform(16.7,11.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(5,1,1).p("Ag/o7IB/R3");
	this.shape_65.setTransform(16.7,12.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(5,1,1).p("AhApEICBSJ");
	this.shape_66.setTransform(16.8,13.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(5,1,1).p("AhBpMICDSZ");
	this.shape_67.setTransform(16.8,14.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(5,1,1).p("AhCpVICFSr");
	this.shape_68.setTransform(16.9,14.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(5,1,1).p("AhDpdICHS7");
	this.shape_69.setTransform(16.9,15.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(5,1,1).p("AhEpmICJTN");
	this.shape_70.setTransform(17,16.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(5,1,1).p("AhFpuICLTd");
	this.shape_71.setTransform(17,17.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(5,1,1).p("AhGp3ICNTv");
	this.shape_72.setTransform(17.1,18.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(5,1,1).p("AhHp/ICPT/");
	this.shape_73.setTransform(17.1,18.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(5,1,1).p("AhIqIICRUR");
	this.shape_74.setTransform(17.1,19.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(5,1,1).p("AhJqQICTUh");
	this.shape_75.setTransform(17.2,20.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(5,1,1).p("AhKqZICVUz");
	this.shape_76.setTransform(17.2,21.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(5,1,1).p("AhLqiICXVF");
	this.shape_77.setTransform(17.3,22.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(5,1,1).p("AhMqqICZVV");
	this.shape_78.setTransform(17.3,23);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(5,1,1).p("AhNqyICbVl");
	this.shape_79.setTransform(17.4,23.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(5,1,1).p("AhOq7ICdV3");
	this.shape_80.setTransform(17.4,24.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(5,1,1).p("AhPrEICfWJ");
	this.shape_81.setTransform(17.5,25.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(5,1,1).p("AhQrMIChWZ");
	this.shape_82.setTransform(17.5,26.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(5,1,1).p("AhRrUICiWp");
	this.shape_83.setTransform(17.6,27.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(5,1,1).p("AhSrdIClW7");
	this.shape_84.setTransform(17.6,27.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(5,1,1).p("AhSrmICmXN");
	this.shape_85.setTransform(17.7,28.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(5,1,1).p("AhUruICpXd");
	this.shape_86.setTransform(17.7,29.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(5,1,1).p("AhVr2ICrXt");
	this.shape_87.setTransform(17.8,30.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(5,1,1).p("AhWr/ICsX/");
	this.shape_88.setTransform(17.8,31.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(5,1,1).p("AhXsIICvYR");
	this.shape_89.setTransform(17.9,32);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(5,1,1).p("AhXsQICvYh");
	this.shape_90.setTransform(17.9,32.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(5,1,1).p("AhYsYICxYx");
	this.shape_91.setTransform(17.9,33.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(5,1,1).p("AhZshICzZD");
	this.shape_92.setTransform(18,34.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(5,1,1).p("AhasqIC1ZV");
	this.shape_93.setTransform(18,35.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(5,1,1).p("AhbsyIC3Zl");
	this.shape_94.setTransform(18.1,36);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(5,1,1).p("Ahcs6IC5Z1");
	this.shape_95.setTransform(18.1,36.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(5,1,1).p("AhdtDIC7aH");
	this.shape_96.setTransform(18.2,37.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(5,1,1).p("AhetMIC9aZ");
	this.shape_97.setTransform(18.2,38.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(5,1,1).p("AhftUIC/ap");
	this.shape_98.setTransform(18.3,39.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(5,1,1).p("AhgtcIDBa5");
	this.shape_99.setTransform(18.3,40.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(5,1,1).p("AhhtlIDDbL");
	this.shape_100.setTransform(18.4,40.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(5,1,1).p("AhituIDFbd");
	this.shape_101.setTransform(18.4,41.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(5,1,1).p("Ahjt2IDHbt");
	this.shape_102.setTransform(18.5,42.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(5,1,1).p("Ahkt+IDJb9");
	this.shape_103.setTransform(18.5,43.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(5,1,1).p("AhluHIDLcP");
	this.shape_104.setTransform(18.6,44.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(5,1,1).p("AhmuQIDNch");
	this.shape_105.setTransform(18.6,45);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(5,1,1).p("AhmuYIDOcx");
	this.shape_106.setTransform(18.7,45.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(5,1,1).p("AhougIDRdB");
	this.shape_107.setTransform(18.7,46.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(5,1,1).p("AhpupIDTdT");
	this.shape_108.setTransform(18.8,47.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(5,1,1).p("AhquyIDUdl");
	this.shape_109.setTransform(18.8,48.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(5,1,1).p("Ahru6IDXd1");
	this.shape_110.setTransform(18.9,49);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(5,1,1).p("AhrvDIDYeH");
	this.shape_111.setTransform(18.9,49.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(5,1,1).p("AhtvLIDbeX");
	this.shape_112.setTransform(19,50.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(5,1,1).p("AhtvUIDbep");
	this.shape_113.setTransform(19,51.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(5,1,1).p("AhuvcIDde5");
	this.shape_114.setTransform(19,52.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(5,1,1).p("AhvvlIDffL");
	this.shape_115.setTransform(19.1,53.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(5,1,1).p("AhwvtIDhfb");
	this.shape_116.setTransform(19.1,53.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(5,1,1).p("Ahxv2IDjft");
	this.shape_117.setTransform(19.2,54.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(5,1,1).p("Ahyv+IDlf9");
	this.shape_118.setTransform(19.2,55.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(5,1,1).p("AhzwHMADnAgP");
	this.shape_119.setTransform(19.3,56.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(5,1,1).p("Ah0wPMADpAgf");
	this.shape_120.setTransform(19.3,57.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(5,1,1).p("Ah1wYMADrAgx");
	this.shape_121.setTransform(19.4,58);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(5,1,1).p("Ah2wgMADtAhB");
	this.shape_122.setTransform(19.4,58.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(5,1,1).p("Ah3wpMADvAhT");
	this.shape_123.setTransform(19.5,59.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(5,1,1).p("Ah4wxMADxAhj");
	this.shape_124.setTransform(19.5,60.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,-50.6,24.3,22.9);


(lib.ar2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-71.6,-51.2,1,1,-90,0,0,0.4,-17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.5,scaleX:1,scaleY:1,rotation:-88.8,guide:{path:[-71.6,-50.9,-22.3,-51,26.9,-51]}},49).to({regX:0.6,rotation:-7.5,guide:{path:[27.1,-51,28.8,-51.1,30.5,-51.2,30.8,-51.2,31.1,-51.2,49.4,-51.2,62.4,-37.7,70.4,-29.3,73.5,-19]}},22).to({scaleX:1,scaleY:1,rotation:33.8,guide:{path:[73.4,-19,75.3,-12.4,75.3,-5.1,75.3,3.9,72.8,11.3]}},11).to({regY:-17.5,rotation:64.5,guide:{path:[72.7,11.4,69.9,19.5,63.9,25.7,61.7,27.8,59.7,29.7]}},10).to({regX:0.7,rotation:77.2,guide:{path:[59.7,29.6,55.8,33,52.2,35.3]}},5).to({regX:0.4,regY:-17.4,scaleX:1,scaleY:1,rotation:90,guide:{path:[52.2,35.3,47.7,38.1,43.5,39.1]}},7).wait(1));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_44 = new cjs.Graphics().p("AiPHsQjMjMAAkgQAAkfDMjMQDLjMEgAAIAAVvQkgAAjLjMg");
	var mask_graphics_45 = new cjs.Graphics().p("Ai6HSQjBjWAPkfQAPkgDWjBQDVjBEgAPIhIVuQkggPjAjXg");
	var mask_graphics_46 = new cjs.Graphics().p("AjkG4Qi1jgAekdQAekfDgi2QDfi1EfAeIiRVoQkegei2jhg");
	var mask_graphics_47 = new cjs.Graphics().p("AkMGeQipjpAtkcQAtkdDpipQDoiqEdAtIjZVeQkcgtiqjpg");
	var mask_graphics_48 = new cjs.Graphics().p("AkyGEQidjyA8kZQA7kaDyieQDxidEaA8IkhVRQkZg7idjyg");
	var mask_graphics_49 = new cjs.Graphics().p("AlWFpQiRj5BLkWQBKkWD5iRQD5iQEXBKIlnVAQkWhKiQj6g");
	var mask_graphics_50 = new cjs.Graphics().p("Al5FPQiDkBBZkRQBYkTEBiDQEAiDESBZImsUrQkShYiDkBg");
	var mask_graphics_51 = new cjs.Graphics().p("AmaE0Qh1kHBnkMQBnkOEHh2QEGh1ENBnInwUTQkNhnh2kHg");
	var mask_graphics_52 = new cjs.Graphics().p("Am4EZQhokNB1kGQB1kIEMhoQENhnEHB0IozT4QkIh0hnkOg");
	var mask_graphics_53 = new cjs.Graphics().p("AnVD/QhakRCDkBQCCkBEShaQERhaECCDIp1TZQkBiDhakSg");
	var mask_graphics_54 = new cjs.Graphics().p("AnwDlQhLkWCQj6QCQj6EWhLQEVhLD6CQIq0S2Qj6iQhMkWg");
	var mask_graphics_55 = new cjs.Graphics().p("AoIDLQg8kZCcjyQCdjzEZg8QEag9DyCdIrzSQQjyicg9kag");
	var mask_graphics_56 = new cjs.Graphics().p("AoeCxQgtkcCojpQCpjqEcguQEdguDpCpIsuRoQjqipgukdg");
	var mask_graphics_57 = new cjs.Graphics().p("AoxCYQgfkeC1jgQC1jhEdgfQEfgfDhC1ItpQ8Qjgi1gfkfg");
	var mask_graphics_58 = new cjs.Graphics().p("ApCB/QgQkfDAjWQDBjXEfgQQEggQDWDAIufQNQjXjBgQkgg");
	var mask_graphics_59 = new cjs.Graphics().p("ApQBnQgBkfDLjMQDLjNEggBQEggBDMDMIvUPaQjNjLAAkhg");
	var mask_graphics_60 = new cjs.Graphics().p("ApcBQQAOkfDWjBQDVjCEfAOQEgAODCDWIwHOmQjBjWAOkgg");
	var mask_graphics_61 = new cjs.Graphics().p("AplA6QAdkeDgi2QDfi2EeAdQEfAdC2DfIw2NvQi2jfAdkfg");
	var mask_graphics_62 = new cjs.Graphics().p("AprAkQAskbDoirQDpiqEcAsQEdAsCqDpIxiM1QiqjoAskeg");
	var mask_graphics_63 = new cjs.Graphics().p("ApvAQQA7kZDxieQDxieEaA6QEaA7CeDyIyML6QiejyA7kag");
	var mask_graphics_64 = new cjs.Graphics().p("ApwgDQBKkXD5iRQD5iREWBJQEWBKCSD5IyyK8QiRj5BJkWg");
	var mask_graphics_65 = new cjs.Graphics().p("ApugWQBYkSEAiEQEAiEESBYQETBYCEEAIzVJ8QiEkABYkSg");
	var mask_graphics_66 = new cjs.Graphics().p("ApqgoQBmkNEHh2QEGh3ENBmQEOBmB3EHIz1I7Qh2kHBmkNg");
	var mask_graphics_67 = new cjs.Graphics().p("Apjg4QB0kIEMhpQEMhoEIBzQEIB1BpEMI0RH4QhpkMB1kHg");
	var mask_graphics_68 = new cjs.Graphics().p("ApahIQCBkCEShaQERhbECCCQEBCCBbERI0pG0QhbkRCCkBg");
	var mask_graphics_69 = new cjs.Graphics().p("ApOhXQCOj6EXhMQEVhMD6COQD7CPBMEWI0+FvQhMkWCPj6g");
	var mask_graphics_70 = new cjs.Graphics().p("ApAhlQCcjyEZg+QEZg9DzCcQDyCcA+EYI1QEpQg9kaCcjyg");
	var mask_graphics_71 = new cjs.Graphics().p("AovhxQCojqEcgvQEcguDqCoQDqCoAvEbI1dDiQgvkdCpjpg");
	var mask_graphics_72 = new cjs.Graphics().p("Aoch8QC0jhEfggQEdggDiC0QDhC1AfEdI1nCaQgfkfC0jgg");
	var mask_graphics_73 = new cjs.Graphics().p("AoGiGQC/jXEggRQEfgRDYDAQDXC/AREfI1tBRQgRkfDAjXg");
	var mask_graphics_74 = new cjs.Graphics().p("AnuiOQDKjNEhgCQEfgCDNDLQDNDJACEhI1vAIQgCkgDLjMg");
	var mask_graphics_75 = new cjs.Graphics().p("Aq3EsQANkgDWjBQDVjDEfAOQEgANDCDVQDCDUgNEgg");
	var mask_graphics_76 = new cjs.Graphics().p("Aq2D2QAdkeDfi3QDei3EeAcQEfAdC3DeQC3DegcEfg");
	var mask_graphics_77 = new cjs.Graphics().p("Aq0DAQArkcDpirQDoirEcArQEdArCrDoQCrDogrEdg");
	var mask_graphics_78 = new cjs.Graphics().p("AqxCLQA6kaDxifQDxieEZA6QEbA6CfDwQCeDwg6Ebg");
	var mask_graphics_79 = new cjs.Graphics().p("AqtBWQBJkWD5iSQD4iSEWBJQEXBICTD5QCRD4hIEXg");
	var mask_graphics_80 = new cjs.Graphics().p("AqoAiQBXkSEAiFQEAiFESBXQETBXCFEAQCFD/hYETg");
	var mask_graphics_81 = new cjs.Graphics().p("AqigRQBlkOEHh3QEGh3ENBlQEOBlB4EHQB3EFhlEOg");
	var mask_graphics_82 = new cjs.Graphics().p("AqbhDQBzkIENhqQEMhpEHBzQEIBzBqEMQBpEMhzEIg");
	var mask_graphics_83 = new cjs.Graphics().p("AqUh1QCBkBEShcQEQhbECCBQECCBBcERQBbERiBECg");
	var mask_graphics_84 = new cjs.Graphics().p("AqLilQCOj7EWhNQEVhMD7COQD7COBNEWQBNEViOD7g");
	var mask_graphics_85 = new cjs.Graphics().p("AqBjUQCbjzEZg+QEZg+DzCbQDzCbA/EYQA+EaibDzg");
	var mask_graphics_86 = new cjs.Graphics().p("Ap3kBQCnjrEdgvQEbgwDrCoQDrCnAwEcQAvEcioDrg");
	var mask_graphics_87 = new cjs.Graphics().p("ApsktQC0jhEeghQEeghDhC0QDiCzAhEeQAgEeizDig");
	var mask_graphics_88 = new cjs.Graphics().p("ApglXQC/jYEggRQEfgSDYC/QDYC/ASEfQAREgi/DYg");
	var mask_graphics_89 = new cjs.Graphics().p("ApUl/QDKjNEhgDQEfgDDODKQDODKADEgQACEgjKDOg");
	var mask_graphics_90 = new cjs.Graphics().p("ApHmkQDVjDEgAMQEfANDDDUQDDDUgMEgQgNEgjUDDg");
	var mask_graphics_91 = new cjs.Graphics().p("Ao5nIQDei4EgAcQEdAbC4DfQC4DegbEeQgcEfjeC4g");
	var mask_graphics_92 = new cjs.Graphics().p("AornpQDoisEdAqQEcArCsDnQCsDogqEcQgrEdjnCsg");
	var mask_graphics_93 = new cjs.Graphics().p("AocoIQDwigEbA5QEZA5CgDxQCfDwg5EaQg5EajwCgg");
	var mask_graphics_94 = new cjs.Graphics().p("AoNolQD4iTEXBIQEXBICSD4QCTD4hHEXQhIEXj5CTg");
	var mask_graphics_95 = new cjs.Graphics().p("An9o/QD/iGETBWQESBXCGD/QCGEAhWESQhXETj/CGg");
	var mask_graphics_96 = new cjs.Graphics().p("AntpXQEGh4EOBkQEOBlB4EGQB4EFhkEOQhlEPkGB4g");
	var mask_graphics_97 = new cjs.Graphics().p("AncptQEMhqEIBzQEIByBqEMQBqELhyEJQhyEJkMBqg");
	var mask_graphics_98 = new cjs.Graphics().p("AnAp/QERhdECCBQECCABcERQBcEQiAEDQiAECkQBcg");
	var mask_graphics_99 = new cjs.Graphics().p("AmdqQQEVhND7CNQD7CNBOEWQBOEViOD7QiND7kVBOg");
	var mask_graphics_100 = new cjs.Graphics().p("Al6qdQEZg/DzCaQD0CaA/EaQA/EYiaD0QibDzkYA/g");
	var mask_graphics_101 = new cjs.Graphics().p("AlWqoQEcgwDrCnQDrCmAwEdQAwEbimDrQinDrkbAxg");
	var mask_graphics_102 = new cjs.Graphics().p("AkyqwQEeghDiCzQDiCyAhEfQAiEdizDiQizDjkdAhg");
	var mask_graphics_103 = new cjs.Graphics().p("AkOq1QEfgSDZC+QDYC+ATEgQASEfi+DZQi+DYkfATg");
	var mask_graphics_104 = new cjs.Graphics().p("Ajpq3QEfgEDPDKQDODJADEgQAEEgjJDOQjKDPkfADg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_graphics_44,x:-10.3,y:0.8}).wait(1).to({graphics:mask_graphics_45,x:-8.5,y:0.7}).wait(1).to({graphics:mask_graphics_46,x:-6.7,y:0.5}).wait(1).to({graphics:mask_graphics_47,x:-4.9,y:0.3}).wait(1).to({graphics:mask_graphics_48,x:-3.1,y:-0.1}).wait(1).to({graphics:mask_graphics_49,x:-1.4,y:-0.5}).wait(1).to({graphics:mask_graphics_50,x:0.3,y:-1}).wait(1).to({graphics:mask_graphics_51,x:2,y:-1.6}).wait(1).to({graphics:mask_graphics_52,x:3.7,y:-2.3}).wait(1).to({graphics:mask_graphics_53,x:5.4,y:-3.1}).wait(1).to({graphics:mask_graphics_54,x:7,y:-3.9}).wait(1).to({graphics:mask_graphics_55,x:8.5,y:-4.9}).wait(1).to({graphics:mask_graphics_56,x:10.1,y:-5.9}).wait(1).to({graphics:mask_graphics_57,x:11.5,y:-7}).wait(1).to({graphics:mask_graphics_58,x:12.9,y:-8.1}).wait(1).to({graphics:mask_graphics_59,x:14.2,y:-9.4}).wait(1).to({graphics:mask_graphics_60,x:15.5,y:-10.7}).wait(1).to({graphics:mask_graphics_61,x:16.7,y:-12.1}).wait(1).to({graphics:mask_graphics_62,x:17.7,y:-13.5}).wait(1).to({graphics:mask_graphics_63,x:18.8,y:-15}).wait(1).to({graphics:mask_graphics_64,x:19.7,y:-16.6}).wait(1).to({graphics:mask_graphics_65,x:20.5,y:-18.2}).wait(1).to({graphics:mask_graphics_66,x:21.3,y:-19.8}).wait(1).to({graphics:mask_graphics_67,x:22,y:-21.5}).wait(1).to({graphics:mask_graphics_68,x:22.6,y:-23.2}).wait(1).to({graphics:mask_graphics_69,x:23.2,y:-24.9}).wait(1).to({graphics:mask_graphics_70,x:23.6,y:-26.7}).wait(1).to({graphics:mask_graphics_71,x:24,y:-28.4}).wait(1).to({graphics:mask_graphics_72,x:24.3,y:-30.2}).wait(1).to({graphics:mask_graphics_73,x:24.4,y:-32}).wait(1).to({graphics:mask_graphics_74,x:24.5,y:-33.8}).wait(1).to({graphics:mask_graphics_75,x:24.5,y:-32.4}).wait(1).to({graphics:mask_graphics_76,x:24.7,y:-30.6}).wait(1).to({graphics:mask_graphics_77,x:24.9,y:-28.8}).wait(1).to({graphics:mask_graphics_78,x:25.3,y:-27.1}).wait(1).to({graphics:mask_graphics_79,x:25.7,y:-25.3}).wait(1).to({graphics:mask_graphics_80,x:26.2,y:-23.6}).wait(1).to({graphics:mask_graphics_81,x:26.8,y:-21.9}).wait(1).to({graphics:mask_graphics_82,x:27.5,y:-20.2}).wait(1).to({graphics:mask_graphics_83,x:28.3,y:-18.6}).wait(1).to({graphics:mask_graphics_84,x:29.1,y:-16.9}).wait(1).to({graphics:mask_graphics_85,x:30,y:-15.4}).wait(1).to({graphics:mask_graphics_86,x:31,y:-13.8}).wait(1).to({graphics:mask_graphics_87,x:32.1,y:-12.4}).wait(1).to({graphics:mask_graphics_88,x:33.2,y:-11}).wait(1).to({graphics:mask_graphics_89,x:34.5,y:-9.6}).wait(1).to({graphics:mask_graphics_90,x:35.8,y:-8.4}).wait(1).to({graphics:mask_graphics_91,x:37.2,y:-7.2}).wait(1).to({graphics:mask_graphics_92,x:38.6,y:-6.1}).wait(1).to({graphics:mask_graphics_93,x:40.1,y:-5.1}).wait(1).to({graphics:mask_graphics_94,x:41.7,y:-4.1}).wait(1).to({graphics:mask_graphics_95,x:43.3,y:-3.3}).wait(1).to({graphics:mask_graphics_96,x:44.9,y:-2.5}).wait(1).to({graphics:mask_graphics_97,x:46.6,y:-1.8}).wait(1).to({graphics:mask_graphics_98,x:47.1,y:-1.1}).wait(1).to({graphics:mask_graphics_99,x:47.1,y:-0.6}).wait(1).to({graphics:mask_graphics_100,x:47.1,y:-0.1}).wait(1).to({graphics:mask_graphics_101,x:47.1,y:0.2}).wait(1).to({graphics:mask_graphics_102,x:47.1,y:0.5}).wait(1).to({graphics:mask_graphics_103,x:47.1,y:0.7}).wait(1).to({graphics:mask_graphics_104,x:47,y:0.8}).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("Aq0nJIOnAAQACAAAEAAQC4AACCCHQCCCHAAC+QAAC/iCCGQhoBriIAX");
	this.shape.setTransform(6.1,-5.4);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(44).to({_off:false},0).wait(61));

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AgeAyIAAhjIA9AAIAABjg");
	var mask_1_graphics_1 = new cjs.Graphics().p("AgoAyIAAhjIBRAAIAABjg");
	var mask_1_graphics_2 = new cjs.Graphics().p("AgyAyIAAhjIBlAAIAABjg");
	var mask_1_graphics_3 = new cjs.Graphics().p("Ag9AyIAAhjIB7AAIAABjg");
	var mask_1_graphics_4 = new cjs.Graphics().p("AhHAyIAAhjICPAAIAABjg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AhRAyIAAhjICjAAIAABjg");
	var mask_1_graphics_6 = new cjs.Graphics().p("AhbAyIAAhjIC3AAIAABjg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AhlAyIAAhjIDMAAIAABjg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AhwAyIAAhjIDhAAIAABjg");
	var mask_1_graphics_9 = new cjs.Graphics().p("Ah6AyIAAhjID1AAIAABjg");
	var mask_1_graphics_10 = new cjs.Graphics().p("AiEAyIAAhjIEJAAIAABjg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AiOAyIAAhjIEdAAIAABjg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AiYAyIAAhjIExAAIAABjg");
	var mask_1_graphics_13 = new cjs.Graphics().p("AijAyIAAhjIFHAAIAABjg");
	var mask_1_graphics_14 = new cjs.Graphics().p("AitAyIAAhjIFbAAIAABjg");
	var mask_1_graphics_15 = new cjs.Graphics().p("Ai3AyIAAhjIFvAAIAABjg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AjBAyIAAhjIGDAAIAABjg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AjLAyIAAhjIGXAAIAABjg");
	var mask_1_graphics_18 = new cjs.Graphics().p("AjWAyIAAhjIGtAAIAABjg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AjgAyIAAhjIHBAAIAABjg");
	var mask_1_graphics_20 = new cjs.Graphics().p("AjqAyIAAhjIHVAAIAABjg");
	var mask_1_graphics_21 = new cjs.Graphics().p("Aj0AyIAAhjIHpAAIAABjg");
	var mask_1_graphics_22 = new cjs.Graphics().p("Aj/AyIAAhjIH/AAIAABjg");
	var mask_1_graphics_23 = new cjs.Graphics().p("AkJAyIAAhjIITAAIAABjg");
	var mask_1_graphics_24 = new cjs.Graphics().p("AkTAyIAAhjIInAAIAABjg");
	var mask_1_graphics_25 = new cjs.Graphics().p("AkdAyIAAhjII7AAIAABjg");
	var mask_1_graphics_26 = new cjs.Graphics().p("AknAyIAAhjIJQAAIAABjg");
	var mask_1_graphics_27 = new cjs.Graphics().p("AkyAyIAAhjIJlAAIAABjg");
	var mask_1_graphics_28 = new cjs.Graphics().p("Ak8AyIAAhjIJ5AAIAABjg");
	var mask_1_graphics_29 = new cjs.Graphics().p("AlGAyIAAhjIKNAAIAABjg");
	var mask_1_graphics_30 = new cjs.Graphics().p("AlQAyIAAhjIKhAAIAABjg");
	var mask_1_graphics_31 = new cjs.Graphics().p("AlaAyIAAhjIK1AAIAABjg");
	var mask_1_graphics_32 = new cjs.Graphics().p("AllAyIAAhjILLAAIAABjg");
	var mask_1_graphics_33 = new cjs.Graphics().p("AlvAyIAAhjILfAAIAABjg");
	var mask_1_graphics_34 = new cjs.Graphics().p("Al5AyIAAhjILzAAIAABjg");
	var mask_1_graphics_35 = new cjs.Graphics().p("AmDAyIAAhjIMHAAIAABjg");
	var mask_1_graphics_36 = new cjs.Graphics().p("AmNAyIAAhjIMbAAIAABjg");
	var mask_1_graphics_37 = new cjs.Graphics().p("AmYAyIAAhjIMxAAIAABjg");
	var mask_1_graphics_38 = new cjs.Graphics().p("AmiAyIAAhjINFAAIAABjg");
	var mask_1_graphics_39 = new cjs.Graphics().p("AmsAyIAAhjINZAAIAABjg");
	var mask_1_graphics_40 = new cjs.Graphics().p("Am2AyIAAhjINuAAIAABjg");
	var mask_1_graphics_41 = new cjs.Graphics().p("AnAAyIAAhjIOCAAIAABjg");
	var mask_1_graphics_42 = new cjs.Graphics().p("AnLAyIAAhjIOXAAIAABjg");
	var mask_1_graphics_43 = new cjs.Graphics().p("AnVAyIAAhjIOrAAIAABjg");
	var mask_1_graphics_44 = new cjs.Graphics().p("AnfAyIAAhjIO/AAIAABjg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:-68.5,y:-51.8}).wait(1).to({graphics:mask_1_graphics_1,x:-67.5,y:-51.8}).wait(1).to({graphics:mask_1_graphics_2,x:-66.5,y:-51.8}).wait(1).to({graphics:mask_1_graphics_3,x:-65.5,y:-51.8}).wait(1).to({graphics:mask_1_graphics_4,x:-64.5,y:-51.8}).wait(1).to({graphics:mask_1_graphics_5,x:-63.4,y:-51.8}).wait(1).to({graphics:mask_1_graphics_6,x:-62.4,y:-51.8}).wait(1).to({graphics:mask_1_graphics_7,x:-61.4,y:-51.8}).wait(1).to({graphics:mask_1_graphics_8,x:-60.4,y:-51.8}).wait(1).to({graphics:mask_1_graphics_9,x:-59.3,y:-51.8}).wait(1).to({graphics:mask_1_graphics_10,x:-58.3,y:-51.8}).wait(1).to({graphics:mask_1_graphics_11,x:-57.3,y:-51.8}).wait(1).to({graphics:mask_1_graphics_12,x:-56.3,y:-51.8}).wait(1).to({graphics:mask_1_graphics_13,x:-55.3,y:-51.8}).wait(1).to({graphics:mask_1_graphics_14,x:-54.2,y:-51.8}).wait(1).to({graphics:mask_1_graphics_15,x:-53.2,y:-51.8}).wait(1).to({graphics:mask_1_graphics_16,x:-52.2,y:-51.8}).wait(1).to({graphics:mask_1_graphics_17,x:-51.2,y:-51.8}).wait(1).to({graphics:mask_1_graphics_18,x:-50.2,y:-51.8}).wait(1).to({graphics:mask_1_graphics_19,x:-49.1,y:-51.8}).wait(1).to({graphics:mask_1_graphics_20,x:-48.1,y:-51.8}).wait(1).to({graphics:mask_1_graphics_21,x:-47.1,y:-51.8}).wait(1).to({graphics:mask_1_graphics_22,x:-46.1,y:-51.8}).wait(1).to({graphics:mask_1_graphics_23,x:-45.1,y:-51.8}).wait(1).to({graphics:mask_1_graphics_24,x:-44,y:-51.8}).wait(1).to({graphics:mask_1_graphics_25,x:-43,y:-51.8}).wait(1).to({graphics:mask_1_graphics_26,x:-42,y:-51.8}).wait(1).to({graphics:mask_1_graphics_27,x:-41,y:-51.8}).wait(1).to({graphics:mask_1_graphics_28,x:-39.9,y:-51.8}).wait(1).to({graphics:mask_1_graphics_29,x:-38.9,y:-51.8}).wait(1).to({graphics:mask_1_graphics_30,x:-37.9,y:-51.8}).wait(1).to({graphics:mask_1_graphics_31,x:-36.9,y:-51.8}).wait(1).to({graphics:mask_1_graphics_32,x:-35.9,y:-51.8}).wait(1).to({graphics:mask_1_graphics_33,x:-34.8,y:-51.8}).wait(1).to({graphics:mask_1_graphics_34,x:-33.8,y:-51.8}).wait(1).to({graphics:mask_1_graphics_35,x:-32.8,y:-51.8}).wait(1).to({graphics:mask_1_graphics_36,x:-31.8,y:-51.8}).wait(1).to({graphics:mask_1_graphics_37,x:-30.8,y:-51.8}).wait(1).to({graphics:mask_1_graphics_38,x:-29.7,y:-51.8}).wait(1).to({graphics:mask_1_graphics_39,x:-28.7,y:-51.8}).wait(1).to({graphics:mask_1_graphics_40,x:-27.7,y:-51.8}).wait(1).to({graphics:mask_1_graphics_41,x:-26.7,y:-51.8}).wait(1).to({graphics:mask_1_graphics_42,x:-25.7,y:-51.8}).wait(1).to({graphics:mask_1_graphics_43,x:-24.6,y:-51.8}).wait(1).to({graphics:mask_1_graphics_44,x:-23.6,y:-51.8}).wait(61));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("Aq0nJIOnAAQACAAAEAAQC4AACCCHQCCCHAAC+QAAC/iCCGQhoBriIAX");
	this.shape_1.setTransform(6.1,-5.4);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(105));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.6,-63.3,21.9,24.3);


(lib.ar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,-146.7,1,1,0,0,0,0.1,-4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:174.6},124).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AAAgVIAAAr");
	this.shape.setTransform(-0.2,-151.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AAAAKIAAgT");
	this.shape_1.setTransform(-0.2,-150.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AAAgBIAAAD");
	this.shape_2.setTransform(-0.2,-148.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("AAAgNIAAAb");
	this.shape_3.setTransform(-0.2,-147.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("AAAgaIAAA1");
	this.shape_4.setTransform(-0.2,-146.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(5,1,1).p("AAAgmIAABN");
	this.shape_5.setTransform(-0.2,-144.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(5,1,1).p("AAAgzIAABm");
	this.shape_6.setTransform(-0.2,-143.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(5,1,1).p("AAAg+IAAB9");
	this.shape_7.setTransform(-0.2,-142.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(5,1,1).p("AAAhLIAACX");
	this.shape_8.setTransform(-0.2,-140.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(5,1,1).p("AAAhXIAACv");
	this.shape_9.setTransform(-0.2,-139.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(5,1,1).p("AAAhjIAADI");
	this.shape_10.setTransform(-0.2,-138);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5,1,1).p("AAAhwIAADh");
	this.shape_11.setTransform(-0.2,-136.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(5,1,1).p("AAAh8IAAD5");
	this.shape_12.setTransform(-0.2,-135.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(5,1,1).p("AAAiIIAAER");
	this.shape_13.setTransform(-0.2,-134);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(5,1,1).p("AAAiVIAAEr");
	this.shape_14.setTransform(-0.2,-132.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(5,1,1).p("AAAihIAAFD");
	this.shape_15.setTransform(-0.2,-131.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(5,1,1).p("AAAitIAAFb");
	this.shape_16.setTransform(-0.1,-129.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(5,1,1).p("AAAi5IAAF0");
	this.shape_17.setTransform(-0.1,-128.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(5,1,1).p("AAAjGIAAGN");
	this.shape_18.setTransform(-0.1,-127.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(5,1,1).p("AAAjSIAAGl");
	this.shape_19.setTransform(-0.1,-125.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(5,1,1).p("AAAjeIAAG9");
	this.shape_20.setTransform(-0.1,-124.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(5,1,1).p("AAAjqIAAHV");
	this.shape_21.setTransform(-0.1,-123.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(5,1,1).p("AAAj3IAAHv");
	this.shape_22.setTransform(-0.1,-121.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(5,1,1).p("AAAkDIAAIH");
	this.shape_23.setTransform(-0.1,-120.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(5,1,1).p("AAAkQIAAIh");
	this.shape_24.setTransform(-0.1,-119.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(5,1,1).p("AAAkcIAAI5");
	this.shape_25.setTransform(-0.1,-117.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(5,1,1).p("AAAkoIAAJR");
	this.shape_26.setTransform(-0.1,-116.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(5,1,1).p("AAAk0IAAJp");
	this.shape_27.setTransform(-0.1,-115);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(5,1,1).p("AAAlBIAAKC");
	this.shape_28.setTransform(-0.1,-113.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(5,1,1).p("AAAlNIAAKb");
	this.shape_29.setTransform(-0.1,-112.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(5,1,1).p("AAAlZIAAKz");
	this.shape_30.setTransform(-0.1,-111);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(5,1,1).p("AAAllIAALL");
	this.shape_31.setTransform(-0.1,-109.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(5,1,1).p("AAAlyIAALl");
	this.shape_32.setTransform(-0.1,-108.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(5,1,1).p("AAAl+IAAL9");
	this.shape_33.setTransform(-0.1,-106.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(5,1,1).p("AAAmKIAAMV");
	this.shape_34.setTransform(-0.1,-105.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(5,1,1).p("AAAmXIAAMv");
	this.shape_35.setTransform(-0.1,-104.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(5,1,1).p("AAAmjIAANH");
	this.shape_36.setTransform(-0.1,-102.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(5,1,1).p("AAAmvIAANf");
	this.shape_37.setTransform(-0.1,-101.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(5,1,1).p("AAAm7IAAN4");
	this.shape_38.setTransform(-0.1,-100.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(5,1,1).p("AAAnIIAAOR");
	this.shape_39.setTransform(-0.1,-98.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(5,1,1).p("AAAnUIAAOp");
	this.shape_40.setTransform(-0.1,-97.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(5,1,1).p("AAAngIAAPB");
	this.shape_41.setTransform(-0.1,-96.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(5,1,1).p("AAAnsIAAPa");
	this.shape_42.setTransform(-0.1,-94.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(5,1,1).p("AAAn5IAAPz");
	this.shape_43.setTransform(-0.1,-93.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(5,1,1).p("AAAoFIAAQL");
	this.shape_44.setTransform(-0.1,-92);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(5,1,1).p("AAAoSIAAQl");
	this.shape_45.setTransform(-0.1,-90.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(5,1,1).p("AAAoeIAAQ9");
	this.shape_46.setTransform(-0.1,-89.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(5,1,1).p("AAAoqIAARV");
	this.shape_47.setTransform(-0.1,-88);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(5,1,1).p("AAAo2IAARt");
	this.shape_48.setTransform(-0.1,-86.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(5,1,1).p("AAApDIAASH");
	this.shape_49.setTransform(-0.1,-85.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(5,1,1).p("AAApPIAASf");
	this.shape_50.setTransform(-0.1,-83.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(5,1,1).p("AAApbIAAS3");
	this.shape_51.setTransform(-0.1,-82.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(5,1,1).p("AAApnIAATP");
	this.shape_52.setTransform(-0.1,-81.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(5,1,1).p("AAAp0IAATp");
	this.shape_53.setTransform(-0.1,-79.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(5,1,1).p("AAAqAIAAUB");
	this.shape_54.setTransform(-0.1,-78.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(5,1,1).p("AAAqMIAAUZ");
	this.shape_55.setTransform(-0.1,-77.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(5,1,1).p("AAAqZIAAUz");
	this.shape_56.setTransform(-0.1,-75.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(5,1,1).p("AAAqlIAAVL");
	this.shape_57.setTransform(-0.1,-74.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(5,1,1).p("AAAqxIAAVj");
	this.shape_58.setTransform(-0.1,-73.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(5,1,1).p("AAAq+IAAV9");
	this.shape_59.setTransform(-0.1,-71.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(5,1,1).p("AAArKIAAWU");
	this.shape_60.setTransform(-0.1,-70.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(5,1,1).p("AAArWIAAWt");
	this.shape_61.setTransform(-0.1,-69);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(5,1,1).p("AAAriIAAXF");
	this.shape_62.setTransform(-0.1,-67.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(5,1,1).p("AAAruIAAXd");
	this.shape_63.setTransform(-0.1,-66.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(5,1,1).p("AAAr7IAAX3");
	this.shape_64.setTransform(-0.1,-65);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(5,1,1).p("AAAsHIAAYP");
	this.shape_65.setTransform(-0.1,-63.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(5,1,1).p("AAAsTIAAYn");
	this.shape_66.setTransform(-0.1,-62.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(5,1,1).p("AAAsgIAAZA");
	this.shape_67.setTransform(-0.1,-60.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(5,1,1).p("AAAssIAAZZ");
	this.shape_68.setTransform(-0.1,-59.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(5,1,1).p("AAAs4IAAZx");
	this.shape_69.setTransform(-0.1,-58.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(5,1,1).p("AAAtEIAAaJ");
	this.shape_70.setTransform(-0.1,-56.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(5,1,1).p("AAAtQIAAah");
	this.shape_71.setTransform(-0.1,-55.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(5,1,1).p("AAAtdIAAa7");
	this.shape_72.setTransform(-0.1,-54.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(5,1,1).p("AAAtpIAAbT");
	this.shape_73.setTransform(-0.1,-52.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(5,1,1).p("AAAt2IAAbt");
	this.shape_74.setTransform(-0.1,-51.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(5,1,1).p("AAAuCIAAcF");
	this.shape_75.setTransform(-0.1,-50.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(5,1,1).p("AAAuOIAAcd");
	this.shape_76.setTransform(-0.1,-48.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(5,1,1).p("AAAuaIAAc1");
	this.shape_77.setTransform(-0.1,-47.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(5,1,1).p("AAAunIAAdP");
	this.shape_78.setTransform(0,-46);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(5,1,1).p("AAAuzIAAdn");
	this.shape_79.setTransform(0,-44.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(5,1,1).p("AAAu/IAAd/");
	this.shape_80.setTransform(0,-43.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(5,1,1).p("AAAvLIAAeX");
	this.shape_81.setTransform(0,-42);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(5,1,1).p("AAAvYIAAex");
	this.shape_82.setTransform(0,-40.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(5,1,1).p("AAAvkIAAfJ");
	this.shape_83.setTransform(0,-39.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(5,1,1).p("AAAvwIAAfh");
	this.shape_84.setTransform(0,-37.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(5,1,1).p("AAAv8IAAf5");
	this.shape_85.setTransform(0,-36.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(5,1,1).p("AAAwJMAAAAgT");
	this.shape_86.setTransform(0,-35.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(5,1,1).p("AAAwVMAAAAgr");
	this.shape_87.setTransform(0,-33.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(5,1,1).p("AAAwiMAAAAhF");
	this.shape_88.setTransform(0,-32.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(5,1,1).p("AAAwuMAAAAhd");
	this.shape_89.setTransform(0,-31.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(5,1,1).p("AAAw6MAAAAh1");
	this.shape_90.setTransform(0,-29.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(5,1,1).p("AAAxGMAAAAiN");
	this.shape_91.setTransform(0,-28.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(5,1,1).p("AAAxTMAAAAin");
	this.shape_92.setTransform(0,-27.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(5,1,1).p("AAAxfMAAAAi/");
	this.shape_93.setTransform(0,-25.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(5,1,1).p("AAAxrMAAAAjX");
	this.shape_94.setTransform(0,-24.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(5,1,1).p("AAAx4MAAAAjx");
	this.shape_95.setTransform(0,-23);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(5,1,1).p("AAAyEMAAAAkJ");
	this.shape_96.setTransform(0,-21.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(5,1,1).p("AAAyQMAAAAkh");
	this.shape_97.setTransform(0,-20.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(5,1,1).p("AAAycMAAAAk5");
	this.shape_98.setTransform(0,-19);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(5,1,1).p("AAAypMAAAAlT");
	this.shape_99.setTransform(0,-17.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(5,1,1).p("AAAy1MAAAAlr");
	this.shape_100.setTransform(0,-16.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(5,1,1).p("AAAzBMAAAAmD");
	this.shape_101.setTransform(0,-14.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(5,1,1).p("AAAzNMAAAAmb");
	this.shape_102.setTransform(0,-13.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(5,1,1).p("AAAzaMAAAAm1");
	this.shape_103.setTransform(0,-12.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(5,1,1).p("AAAzmMAAAAnN");
	this.shape_104.setTransform(0,-10.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(5,1,1).p("AAAzyMAAAAnl");
	this.shape_105.setTransform(0,-9.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(5,1,1).p("AAAz/MAAAAn/");
	this.shape_106.setTransform(0,-8.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(5,1,1).p("AAA0LMAAAAoX");
	this.shape_107.setTransform(0,-6.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(5,1,1).p("AAA0XMAAAAov");
	this.shape_108.setTransform(0,-5.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(5,1,1).p("AAA0kMAAAApI");
	this.shape_109.setTransform(0,-4.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(5,1,1).p("AAA0wMAAAAph");
	this.shape_110.setTransform(0,-2.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(5,1,1).p("AAA08MAAAAp5");
	this.shape_111.setTransform(0,-1.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(5,1,1).p("AAA1IMAAAAqR");

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(5,1,1).p("AAA1VMAAAAqr");
	this.shape_113.setTransform(0,1.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(5,1,1).p("AAA1hMAAAArD");
	this.shape_114.setTransform(0,2.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(5,1,1).p("AAA1tMAAAArb");
	this.shape_115.setTransform(0,4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(5,1,1).p("AAA15MAAAArz");
	this.shape_116.setTransform(0,5.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(5,1,1).p("AAA2GMAAAAsN");
	this.shape_117.setTransform(0,6.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(5,1,1).p("AAA2SMAAAAsl");
	this.shape_118.setTransform(0,8.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(5,1,1).p("AAA2eMAAAAs9");
	this.shape_119.setTransform(0,9.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(5,1,1).p("AAA2qMAAAAtV");
	this.shape_120.setTransform(0,10.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(5,1,1).p("AAA23MAAAAtv");
	this.shape_121.setTransform(0,12.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(5,1,1).p("AAA3DMAAAAuH");
	this.shape_122.setTransform(0,13.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(5,1,1).p("AAA3PMAAAAuf");
	this.shape_123.setTransform(0,14.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(5,1,1).p("AAAXdMAAAgu5");
	this.shape_124.setTransform(0,16.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.9,-160.1,24.3,21.8);


(lib.honeyflap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.honeybee();
	this.instance.parent = this;
	this.instance.setTransform(22.7,-143.7,0.422,0.422,0,0,0,-37.2,64.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNB8QgMgBgNgEIgMgFIgBAAIgCgBIgCgBIgBgBIgBAAIgCgBIgBgBIgBgBIgCAAIgBgBIgBgBIgCgBIAAAAIgCgBIgBgBIgBgBIgBgBIgBAAIgBgBIgCgBIAAgBIgBAAIgBgBIgBgBIgCgBIAAgBIgBgBIgBAAIgBgBIgBgBIAAgBIgBgBIgBAAIgBgBIgBgBIgBgBIgBgBIAAgBIgBAAIgBgBIAAgBIgBgBIgBgBIAAgBIgBgBIgBAAIAAgBIgBgBIgBgBIgBgBIAAgBIgBAAIAAgBIgBgBIgBgBIAAgBIAAgBIgBgBIgBgBIAAAAIAAgBIgBgBIgBgBIgBgBIAAgBIgBgCIgBgBIgBgCIAAgBIgBgBIAAgBIAAgBIAAAAIgBgBIAAgBIgBgBIAAgBIAAgBIgBgBIAAgBIAAgBIgBAAIgBgBIAAgBIAAgBIgBgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIAAAAIgBgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIgBgBIAAgCIAAgCIAAgBIgBgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIgBgBIABgBIgBgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIABgBIgBgBIABgBIgBgBIABgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIABgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIABgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIABgBIAAgBIABgBIAAgBIABgBIABgBIABgBIAAgBIABgBIABgBIAAgBIABgBIAAgCIABgBIAAgBIABgBIABgBIABgBIABgBIABgBIABgBIABgBIABgBIAAgBIABgBIABgBIADgEIANgLQAGgGAIgEIAOgHIAQgGIAOgDIASgBIAKAAIAFABIATAEIAMAEIADABIADACIAEABIABABIACABIABAAIABABIABABIACABIABAAIACABIABABIAAABIACAAIABABIABABIABABIACABIABAAIAAABIABABIABABIABABIABAAIACABIAAABIACABIABABIAAAAIABABIABABIAAABIABABIABABIABAAIABABIABABIABABIABABIAAAAIABABIAAABIABABIAAABIABABIABABIABAAIABABIAAABIABABIABABIAAABIABABIAAAAIABABIAAABIABABIAAABIABABIAAABIABAAIAAABIACABIAAABIAAABIABABIAAABIABABIAAAAIABABIAAABIABABIAAABIAAABIAAABIABABIAAABIABAAIAAABIAAABIABABIAAABIAAABIABABIABABIAAABIAAABIABAAIAAABIAAABIABABIAAABIAAABIAAABIAAABIABABIAAABIAAABIAAAAIAAABIAAABIABABIAAABIAAABIAAABIAAABIABABIAAABIAAABIAAABIAAABIABAAIgBABIABABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIABABIgBABIABABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIgBABIABABIgBABIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIgBABIAAABIAAABIAAABIAAABIAAABIgBABIAAABIAAABIAAABIgBABIAAABIAAABIAAABIAAABIAAABIgBABIAAABIAAABIAAABIgBABIAAABIAAABIgBABIAAABIAAABIgBABIgBABIAAABIgBABIAAABIgBABIAAABIAAABIgBABIAAABIAAABIgBABIAAABIgBABIAAABIgBABIgBABIAAABIgBABIgBABIgBACIAAABIgBABIgBABIAAABIgBABIAAABIgBABIgBABIgBABIAAABIgCABIgBABIAAABIgBABIgBACIgBABIgBABIgBABIAAABIgDACIgEAFIgGAEIgEAEIgEACIgDADIgCABIgRAIQgUAJgXABIgFAAIgOgBg");
	this.shape.setTransform(22.4,-143.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-215.3,105.5,84.2);


// stage content:
(lib.writingsuccess_Fontkid_R = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_724 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(724).call(this.frame_724).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(156.3,98.1,0.999,0.999,0,-8.5,171.5,22.4,-144);
	this.instance._off = true;

	this.instance_1 = new lib.honeybee();
	this.instance_1.parent = this;
	this.instance_1.setTransform(403.6,444.2,0.421,0.421,-21.5,0,0,-37.2,64.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({y:443.9},140).wait(11).to({rotation:-21.5,skewX:0,skewY:0,x:157.3,y:97.8},0).to({scaleX:1,scaleY:1,guide:{path:[157.3,97.7,240.7,97.7,324,97.7,331.9,98.1,339.3,99.3]}},99).to({scaleX:1,scaleY:1,guide:{path:[339.4,99.5,367.9,104.3,389.5,123.1,418.9,148.3,418.9,184.1,418.9,219.8,389.5,245.1,365.4,266.1,332.8,269.7]}},120).to({scaleX:1,scaleY:1,guide:{path:[332.7,269.7,329.7,270,326.5,270.2,322.8,270.5,318.9,270.5,314.6,270.5,310.3,270,233.3,270,156.2,270]}},100).wait(11).to({x:186.2,y:272},0).to({x:403.2,y:444},140).to({_off:true},18).wait(77));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(648).to({_off:false},0).to({regY:64.5,rotation:-43.3,guide:{path:[403.1,443.9,381.9,431.5,358.5,423.9,336.3,416.8,313.8,423,293.9,428.5,280.2,444.4,266.7,459.9,252,474.2,234.6,491.2,216.2,506.6,197.8,521.9,173.9,519.8,148.9,517.9,126.3,506.9,104,496,79.8,490.4,64.9,486.8,50.1,491.4,29.4,497.9,8.2,503.1,-16.9,509.4,-40.5,501.7,-45.4,500,-50.7,499.5,-59.3,498.2,-61.4,507,-66.3,528,-77.4,545.8,-79,548.4,-82.2,548.9]}},76).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(156.5,438.3,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},140).wait(11).to({_off:false,x:157.1,y:271},0).to({_off:true},319).wait(11).to({_off:false,x:403,y:443.5},0).to({_off:true},140).wait(95));

	// ar3
	this.instance_2 = new lib.ar3("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(216,369,1,1,-45);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(490).to({_off:false},0).wait(235));

	// ar2
	this.instance_3 = new lib.ar2("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(305,184.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(160).to({_off:false},0).wait(565));

	// ar1
	this.instance_4 = new lib.ar1("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(57.5,248.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).wait(716));

	// 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(25,1,1).p("AgWgRIAtAj");
	this.shape_1.setTransform(184.6,273.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(25,1,1).p("AgegXIA9Av");
	this.shape_2.setTransform(185.3,273.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(25,1,1).p("AglgdIBLA7");
	this.shape_3.setTransform(186.1,274.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(25,1,1).p("AgtgjIBbBH");
	this.shape_4.setTransform(186.9,275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(25,1,1).p("Ag1gpIBrBT");
	this.shape_5.setTransform(187.6,275.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(25,1,1).p("Ag8gvIB5Bf");
	this.shape_6.setTransform(188.4,276.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(25,1,1).p("AhEg1ICJBr");
	this.shape_7.setTransform(189.2,276.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(25,1,1).p("AhMg7ICZB2");
	this.shape_8.setTransform(189.9,277.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(25,1,1).p("AhThBICnCD");
	this.shape_9.setTransform(190.7,278);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(25,1,1).p("AhbhGIC3CN");
	this.shape_10.setTransform(191.4,278.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(25,1,1).p("AhihMIDFCZ");
	this.shape_11.setTransform(192.2,279.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(25,1,1).p("AhqhSIDVCl");
	this.shape_12.setTransform(193,279.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(25,1,1).p("AhxhYIDkCx");
	this.shape_13.setTransform(193.7,280.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(25,1,1).p("Ah5heIDzC9");
	this.shape_14.setTransform(194.5,280.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(25,1,1).p("AiBhkIEDDJ");
	this.shape_15.setTransform(195.2,281.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(25,1,1).p("AiJhqIETDV");
	this.shape_16.setTransform(196,282.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(25,1,1).p("AiQhwIEhDh");
	this.shape_17.setTransform(196.8,282.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(25,1,1).p("AiYh2IExDt");
	this.shape_18.setTransform(197.5,283.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(25,1,1).p("Aifh8IE/D5");
	this.shape_19.setTransform(198.3,283.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(25,1,1).p("AiniCIFPEF");
	this.shape_20.setTransform(199,284.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(25,1,1).p("AiviHIFeEQ");
	this.shape_21.setTransform(199.8,285.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(25,1,1).p("Ai2iOIFtEd");
	this.shape_22.setTransform(200.6,285.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(25,1,1).p("Ai+iUIF9Ep");
	this.shape_23.setTransform(201.3,286.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(25,1,1).p("AjFiZIGLEz");
	this.shape_24.setTransform(202.1,286.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(25,1,1).p("AjNifIGbE/");
	this.shape_25.setTransform(202.9,287.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(25,1,1).p("AjUilIGpFL");
	this.shape_26.setTransform(203.6,288);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(25,1,1).p("AjcirIG5FX");
	this.shape_27.setTransform(204.4,288.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(25,1,1).p("AjkixIHJFj");
	this.shape_28.setTransform(205.1,289.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(25,1,1).p("Ajri3IHXFv");
	this.shape_29.setTransform(205.9,289.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(25,1,1).p("Ajzi9IHnF7");
	this.shape_30.setTransform(206.7,290.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(25,1,1).p("Aj7jDIH3GH");
	this.shape_31.setTransform(207.4,291);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(25,1,1).p("AkCjJIIFGT");
	this.shape_32.setTransform(208.2,291.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(25,1,1).p("AkKjPIIVGf");
	this.shape_33.setTransform(208.9,292.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(25,1,1).p("AkRjVIIkGr");
	this.shape_34.setTransform(209.7,292.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(25,1,1).p("AkZjbIIzG2");
	this.shape_35.setTransform(210.5,293.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(25,1,1).p("AkhjhIJDHD");
	this.shape_36.setTransform(211.2,294);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(25,1,1).p("AkojmIJRHO");
	this.shape_37.setTransform(212,294.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(25,1,1).p("AkwjsIJhHZ");
	this.shape_38.setTransform(212.7,295.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(25,1,1).p("Ak4jyIJxHl");
	this.shape_39.setTransform(213.5,295.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(25,1,1).p("Ak/j4IJ/Hx");
	this.shape_40.setTransform(214.3,296.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(25,1,1).p("AlHj+IKPH9");
	this.shape_41.setTransform(215,296.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(25,1,1).p("AlOkEIKdIJ");
	this.shape_42.setTransform(215.8,297.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(25,1,1).p("AlWkKIKtIV");
	this.shape_43.setTransform(216.6,298.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(25,1,1).p("AlekQIK8Ih");
	this.shape_44.setTransform(217.3,298.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(25,1,1).p("AllkWILLIt");
	this.shape_45.setTransform(218.1,299.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(25,1,1).p("AltkcILbI5");
	this.shape_46.setTransform(218.8,299.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(25,1,1).p("Al0kiILpJF");
	this.shape_47.setTransform(219.6,300.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(25,1,1).p("Al8koIL5JR");
	this.shape_48.setTransform(220.4,301.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(25,1,1).p("AmDkuIMHJd");
	this.shape_49.setTransform(221.1,301.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(25,1,1).p("AmLk0IMXJp");
	this.shape_50.setTransform(221.9,302.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(25,1,1).p("AmTk6IMnJ0");
	this.shape_51.setTransform(222.6,302.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(25,1,1).p("Ambk/IM3J/");
	this.shape_52.setTransform(223.4,303.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(25,1,1).p("AmilFINFKL");
	this.shape_53.setTransform(224.2,304);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(25,1,1).p("AmqlLINVKX");
	this.shape_54.setTransform(224.9,304.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(25,1,1).p("AmxlRINjKj");
	this.shape_55.setTransform(225.7,305.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(25,1,1).p("Am5lXINzKv");
	this.shape_56.setTransform(226.4,305.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(25,1,1).p("AnAldIOBK7");
	this.shape_57.setTransform(227.2,306.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(25,1,1).p("AnIljIORLH");
	this.shape_58.setTransform(228,307);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(25,1,1).p("AnQlpIOhLT");
	this.shape_59.setTransform(228.7,307.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(25,1,1).p("AnXlvIOvLf");
	this.shape_60.setTransform(229.5,308.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(25,1,1).p("Anfl1IO/Lr");
	this.shape_61.setTransform(230.3,308.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(25,1,1).p("Annl7IPPL3");
	this.shape_62.setTransform(231,309.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(25,1,1).p("AnumBIPdMD");
	this.shape_63.setTransform(231.8,310);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(25,1,1).p("An2mGIPtMO");
	this.shape_64.setTransform(232.5,310.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(25,1,1).p("An9mNIP7Mb");
	this.shape_65.setTransform(233.3,311.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(25,1,1).p("AoFmSIQLMl");
	this.shape_66.setTransform(234.1,311.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(25,1,1).p("AoNmYIQbMx");
	this.shape_67.setTransform(234.8,312.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(25,1,1).p("AoUmeIQpM9");
	this.shape_68.setTransform(235.6,312.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(25,1,1).p("AocmkIQ5NJ");
	this.shape_69.setTransform(236.3,313.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(25,1,1).p("AokmqIRJNV");
	this.shape_70.setTransform(237.1,314.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(25,1,1).p("AormwIRXNh");
	this.shape_71.setTransform(237.9,314.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(25,1,1).p("Aozm2IRnNt");
	this.shape_72.setTransform(238.6,315.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(25,1,1).p("Ao6m8IR1N5");
	this.shape_73.setTransform(239.4,315.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(25,1,1).p("ApCnCISFOF");
	this.shape_74.setTransform(240.1,316.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(25,1,1).p("ApKnIISVOR");
	this.shape_75.setTransform(240.9,317.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(25,1,1).p("ApRnOISjOd");
	this.shape_76.setTransform(241.7,317.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(25,1,1).p("ApZnUISzOp");
	this.shape_77.setTransform(242.4,318.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(25,1,1).p("ApgnaITBO0");
	this.shape_78.setTransform(243.2,318.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(25,1,1).p("ApongITRPB");
	this.shape_79.setTransform(244,319.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(25,1,1).p("ApvnlITfPL");
	this.shape_80.setTransform(244.7,320);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(25,1,1).p("Ap3nrITvPX");
	this.shape_81.setTransform(245.5,320.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(25,1,1).p("Ap/nxIT/Pj");
	this.shape_82.setTransform(246.2,321.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(25,1,1).p("AqGn3IUNPv");
	this.shape_83.setTransform(247,321.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(25,1,1).p("AqOn9IUdP7");
	this.shape_84.setTransform(247.8,322.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(25,1,1).p("AqWoDIUtQH");
	this.shape_85.setTransform(248.5,323);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(25,1,1).p("AqdoJIU7QT");
	this.shape_86.setTransform(249.3,323.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(25,1,1).p("AqloPIVLQf");
	this.shape_87.setTransform(250,324.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(25,1,1).p("AqtoVIVbQr");
	this.shape_88.setTransform(250.8,324.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(25,1,1).p("Aq0obIVpQ3");
	this.shape_89.setTransform(251.6,325.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(25,1,1).p("Aq8ohIV5RD");
	this.shape_90.setTransform(252.3,326);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(25,1,1).p("ArDomIWHRO");
	this.shape_91.setTransform(253.1,326.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(25,1,1).p("ArLotIWXRb");
	this.shape_92.setTransform(253.8,327.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(25,1,1).p("ArTozIWnRn");
	this.shape_93.setTransform(254.6,327.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(25,1,1).p("Arao4IW1Rx");
	this.shape_94.setTransform(255.4,328.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(25,1,1).p("Ario+IXFR9");
	this.shape_95.setTransform(256.1,328.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(25,1,1).p("ArppEIXTSJ");
	this.shape_96.setTransform(256.9,329.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(25,1,1).p("ArxpKIXjSV");
	this.shape_97.setTransform(257.7,330.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(25,1,1).p("Ar4pQIXySh");
	this.shape_98.setTransform(258.4,330.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(25,1,1).p("AsApWIYBSt");
	this.shape_99.setTransform(259.2,331.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(25,1,1).p("AsIpcIYRS5");
	this.shape_100.setTransform(259.9,331.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(25,1,1).p("AsPpiIYfTF");
	this.shape_101.setTransform(260.7,332.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(25,1,1).p("AsXpoIYvTR");
	this.shape_102.setTransform(261.5,333.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(25,1,1).p("AsepuIY9Td");
	this.shape_103.setTransform(262.2,333.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(25,1,1).p("Asmp0IZNTp");
	this.shape_104.setTransform(263,334.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(25,1,1).p("Asup6IZdT0");
	this.shape_105.setTransform(263.7,334.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(25,1,1).p("As2qAIZtUB");
	this.shape_106.setTransform(264.5,335.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(25,1,1).p("As9qFIZ7UM");
	this.shape_107.setTransform(265.3,336.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(25,1,1).p("AtFqLIaLUX");
	this.shape_108.setTransform(266,336.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(25,1,1).p("AtMqRIaZUj");
	this.shape_109.setTransform(266.8,337.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(25,1,1).p("AtUqXIapUv");
	this.shape_110.setTransform(267.5,337.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(25,1,1).p("AtcqdIa5U7");
	this.shape_111.setTransform(268.3,338.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(25,1,1).p("AtjqjIbHVH");
	this.shape_112.setTransform(269.1,339);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(25,1,1).p("AtrqpIbXVT");
	this.shape_113.setTransform(269.8,339.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(25,1,1).p("AtyqvIblVf");
	this.shape_114.setTransform(270.6,340.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(25,1,1).p("At6q1Ib1Vr");
	this.shape_115.setTransform(271.3,340.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(25,1,1).p("AuCq7IcEV3");
	this.shape_116.setTransform(272.1,341.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(25,1,1).p("AuJrBIcTWD");
	this.shape_117.setTransform(272.9,342);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(25,1,1).p("AuRrHIcjWP");
	this.shape_118.setTransform(273.6,342.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(25,1,1).p("AuYrNIcxWb");
	this.shape_119.setTransform(274.4,343.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(25,1,1).p("AugrTIdBWn");
	this.shape_120.setTransform(275.2,343.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(25,1,1).p("AunrZIdQWy");
	this.shape_121.setTransform(275.9,344.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(25,1,1).p("AuvreIdfW9");
	this.shape_122.setTransform(276.7,344.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(25,1,1).p("Au3rkIdvXJ");
	this.shape_123.setTransform(277.4,345.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(25,1,1).p("Au+rqId9XV");
	this.shape_124.setTransform(278.2,346.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(25,1,1).p("AvGrwIeNXh");
	this.shape_125.setTransform(279,346.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(25,1,1).p("AvNr2IebXt");
	this.shape_126.setTransform(279.7,347.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(25,1,1).p("AvVr8IerX5");
	this.shape_127.setTransform(280.5,347.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(25,1,1).p("AvdsCIe7YF");
	this.shape_128.setTransform(281.2,348.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(25,1,1).p("AvlsIIfLYR");
	this.shape_129.setTransform(282,349.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(25,1,1).p("AvssOIfZYd");
	this.shape_130.setTransform(282.8,349.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").ss(25,1,1).p("Av0sUIfpYp");
	this.shape_131.setTransform(283.5,350.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(25,1,1).p("Av7saIf3Y1");
	this.shape_132.setTransform(284.3,350.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(25,1,1).p("AwDsgMAgHAZB");
	this.shape_133.setTransform(285,351.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(25,1,1).p("AwLslMAgXAZM");
	this.shape_134.setTransform(285.8,352.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#000000").ss(25,1,1).p("AwSssMAglAZZ");
	this.shape_135.setTransform(286.6,352.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#000000").ss(25,1,1).p("AwasxMAg1AZj");
	this.shape_136.setTransform(287.3,353.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#000000").ss(25,1,1).p("Awhs3MAhDAZv");
	this.shape_137.setTransform(288.1,353.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").ss(25,1,1).p("Awps9MAhTAZ7");
	this.shape_138.setTransform(288.9,354.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#000000").ss(25,1,1).p("AwxtDMAhiAaH");
	this.shape_139.setTransform(289.6,355);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").ss(25,1,1).p("Aw4tJMAhxAaT");
	this.shape_140.setTransform(290.4,355.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#000000").ss(25,1,1).p("AxAtPMAiBAaf");
	this.shape_141.setTransform(291.1,356.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},490).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).wait(95));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_259 = new cjs.Graphics().p("AMmSeQlulsgCoDQgCoDFqltQFslvIDgCMAALAm4IgHAAQn/AAlslog");
	var mask_graphics_260 = new cjs.Graphics().p("AMESGQlkl0ALoEQALoCF1lkQF0llIEALMgA3Am4QoDgLlll1g");
	var mask_graphics_261 = new cjs.Graphics().p("ALdRvQlal+AZoDQAZoCF9laQF+lbIDAZMgB4Am1QoDgYlbl+g");
	var mask_graphics_262 = new cjs.Graphics().p("AK4RYQlRmHAnoCQAmoBGGlQQGHlRICAmMgC5AmxQoCgmlQmGg");
	var mask_graphics_263 = new cjs.Graphics().p("AKSRAQlFmPAzoBQA0oAGPlGQGQlGIAAzMgD5AmsQoBg0lHmPg");
	var mask_graphics_264 = new cjs.Graphics().p("AJuQpQk7mYBBoAQBBn+GXk7QGYk8IABBMgE7AmkQn/hBk8mXg");
	var mask_graphics_265 = new cjs.Graphics().p("AJKQRQkwmgBOn+QBPn8GfkxQGgkxH+BPMgF7AmbQn+hPkxmfg");
	var mask_graphics_266 = new cjs.Graphics().p("AInP5QklmoBcn7QBbn6GokmQGokmH7BcMgG7AmQQn8hckmmng");
	var mask_graphics_267 = new cjs.Graphics().p("AIFPhQkamvBpn5QBpn4GvkaQGvkbH5BpMgH7AmEQn5hpkbmvg");
	var mask_graphics_268 = new cjs.Graphics().p("AHkPJQkPm3B2n1QB2n1G2kPQG3kQH2B3MgI7Al1Qn2h2kPm2g");
	var mask_graphics_269 = new cjs.Graphics().p("AHDOxQkDm+CDnyQCDnyG9kDQG+kEHzCDMgJ6AlmQnziDkEm9g");
	var mask_graphics_270 = new cjs.Graphics().p("AGjOZQj3nECQnuQCQnvHEj4QHEj4HvCQMgK5AlVQnuiQj5nEg");
	var mask_graphics_271 = new cjs.Graphics().p("AGEOBQjrnLCdnqQCdnqHKjsQHLjsHrCdMgL3AlBQnridjtnKg");
	var mask_graphics_272 = new cjs.Graphics().p("AFmNpQjfnRCqnlQCqnnHQjgQHRjgHmCqMgM1AktQnmiqjhnQg");
	var mask_graphics_273 = new cjs.Graphics().p("AFJNRQjTnWC3nhQC3niHVjUQHXjUHiC3MgNzAkXQnii3jUnWg");
	var mask_graphics_274 = new cjs.Graphics().p("AEtM5QjHncDEncQDDndHbjHQHcjHHdDDMgOvAj/QndjEjInbg");
	var mask_graphics_275 = new cjs.Graphics().p("AESMhQi6ngDPnXQDQnYHgi7QHhi7HYDQMgPrAjlQnYjPi7nhg");
	var mask_graphics_276 = new cjs.Graphics().p("AD4MJQiunlDcnRQDcnSHliuQHmivHSDcMgQmAjKQnTjbiunmg");
	var mask_graphics_277 = new cjs.Graphics().p("ADfLyQihnqDonLQDonNHpihQHqihHMDoMgRgAitQnNjoihnpg");
	var mask_graphics_278 = new cjs.Graphics().p("ADGLaQiUnuD0nFQD0nGHuiUQHuiVHGD0MgSbAiQQnGj0iVnug");
	var mask_graphics_279 = new cjs.Graphics().p("ACvLDQiHnyEAm+QEAnAHxiHQHyiIG/EAMgTTAhwQnAkAiInxg");
	var mask_graphics_280 = new cjs.Graphics().p("ACZKsQh6n1ELm4QEMm5H0h6QH2h7G4EMMgUMAhPQm4kMh7n0g");
	var mask_graphics_281 = new cjs.Graphics().p("ACEKUQhtn4EXmwQEXmyH3htQH4htGyEXMgVDAgsQmxkXhun4g");
	var mask_graphics_282 = new cjs.Graphics().p("ABwJ9Qhgn6EimpQEjmqH6hgQH7hhGqEjMgV6AgIQmqkihgn7g");
	var mask_graphics_283 = new cjs.Graphics().p("ABdJnQhTn9EumiQEtmiH8hTQH+hTGiEuI2vfjQmikuhTn8g");
	var mask_graphics_284 = new cjs.Graphics().p("ABLJQQhFn/E4mZQE4maH+hGQIAhFGaE4I3je8Qmak4hGn/g");
	var mask_graphics_285 = new cjs.Graphics().p("AA6I6Qg3oBFCmRQFDmSIAg4QIBg4GSFDI4WeUQmSlDg5oAg");
	var mask_graphics_286 = new cjs.Graphics().p("AAqIkQgqoCFNmIQFOmKIBgqQICgrGJFNI5IdrQmKlOgroBg");
	var mask_graphics_287 = new cjs.Graphics().p("AAcIOQgcoDFXl/QFXmBICgdQIDgdGBFXI56dAQmBlXgdoDg");
	var mask_graphics_288 = new cjs.Graphics().p("AAOH4QgOoCFhl3QFhl4IDgPQIDgQF4FhI6qcUQl3lhgRoEg");
	var mask_graphics_289 = new cjs.Graphics().p("AACHjQgCoCFrlvQFrluIDgCQIFgCFuFrI7ZbnQlulrgDoEg");
	var mask_graphics_290 = new cjs.Graphics().p("AgIHOQALoCF0llQF1lkIDALQIEALFkF1I8Ga4Qlkl0ALoEg");
	var mask_graphics_291 = new cjs.Graphics().p("AgSG5QAYoBF+lbQF+lbICAZQIEAZFaF+I8zaIQlZl+AYoDg");
	var mask_graphics_292 = new cjs.Graphics().p("AgbGlQAmoBGHlQQGGlRICAmQICAnFRGGI9eZYQlQmHAmoCg");
	var mask_graphics_293 = new cjs.Graphics().p("AgiGRQAzoAGPlGQGPlGIBA0QIBAzFGGQI+HYlQlGmPA0oBg");
	var mask_graphics_294 = new cjs.Graphics().p("AgpF+QBBn/GYk7QGXk8H/BBQIABBE8GYI+xXzQk6mYBAn/g");
	var mask_graphics_295 = new cjs.Graphics().p("AguFqQBOn8GgkxQGgkxH9BPQH+BOEwGgI/XW/QkwmgBOn+g");
	var mask_graphics_296 = new cjs.Graphics().p("AgyFXQBbn6GokmQGnklH7BbQH8BcEmGoI/+WJQkkmnBbn8g");
	var mask_graphics_297 = new cjs.Graphics().p("Ag1FFQBpn4GvkaQGvkbH4BpQH5BpEbGvMggiAVUQkamvBpn5g");
	var mask_graphics_298 = new cjs.Graphics().p("Ag3EzQB2n1G2kPQG3kPH1B2QH3B2EPG2MghFAUdQkOm2B1n2g");
	var mask_graphics_299 = new cjs.Graphics().p("Ag3EhQCDnxG9kEQG9kEHyCEQH0CDEDG9MghmATlQkDm9CDnzg");
	var mask_graphics_300 = new cjs.Graphics().p("Ag2EQQCPnuHEj4QHEj4HvCRQHvCQD4HDMgiGAStQj3nECQnvg");
	var mask_graphics_301 = new cjs.Graphics().p("Ag0D/QCcnqHLjsQHKjsHqCdQHsCeDsHJMgilAR0QjrnLCdnrg");
	var mask_graphics_302 = new cjs.Graphics().p("AgxDvQCpnmHQjgQHRjfHmCpQHnCrDgHPMgjCAQ5QjfnQCqnng");
	var mask_graphics_303 = new cjs.Graphics().p("AgtDfQC2nhHWjUQHWjTHiC2QHiC3DUHVMgjdAP+QjTnWC2nig");
	var mask_graphics_304 = new cjs.Graphics().p("AgoDQQDDncHcjIQHbjHHdDDQHdDEDHHaMgj2APCQjInbDDndg");
	var mask_graphics_305 = new cjs.Graphics().p("AghDBQDPnXHhi7QHgi6HYDPQHYDQC7HfMgkQAOGQi6ngDPnYg");
	var mask_graphics_306 = new cjs.Graphics().p("AgZCyQDbnRHliuQHmiuHRDcQHTDcCuHkMgkmANJQiunlDcnTg");
	var mask_graphics_307 = new cjs.Graphics().p("AgQCkQDnnLHqihQHqihHLDnQHNDpCiHoMgk8AMMQihnqDonNg");
	var mask_graphics_308 = new cjs.Graphics().p("AgGCXQD0nFHtiUQHuiVHFD0QHHD0CVHtMglPALNQiVnuD0nGg");
	var mask_graphics_309 = new cjs.Graphics().p("AAECKQEBm+HxiIQHxiHHAEAQHAEACHHwMglhAKOQiHnxD+nAg");
	var mask_graphics_310 = new cjs.Graphics().p("AARB+QEMm3H0h7QH1h6G5ELQG5EMB6HzMglxAJQQh6n1EKm5g");
	var mask_graphics_311 = new cjs.Graphics().p("AAeByQEYmwH4htQH3huGyEXQGxEWBuH4MgmAAIQQhtn4EVmyg");
	var mask_graphics_312 = new cjs.Graphics().p("AAtBnQEjmpH6hgQH7hgGpEiQGrEhBgH7MgmNAHQQhgn7Ehmqg");
	var mask_graphics_313 = new cjs.Graphics().p("AA9BcQEumhH9hSQH8hTGiEtQGjEsBTH9MgmYAGQQhTn9Esmjg");
	var mask_graphics_314 = new cjs.Graphics().p("ABOBSQE5mZH+hFQH/hGGaE4QGbE4BFH+MgmhAFQQhGn/E3mbg");
	var mask_graphics_315 = new cjs.Graphics().p("ABgBJQFDmRIBg4QIAg4GSFCQGSFCA4IBMgmpAEPQg4oBFBmSg");
	var mask_graphics_316 = new cjs.Graphics().p("ABzBAQFOmIICgrQIBgqGJFMQGKFNArIBMgmwADOQgqoBFLmKg");
	var mask_graphics_317 = new cjs.Graphics().p("ACIA4QFXmAIDgdQIDgdGAFXQGBFXAdICMgm0ACNQgdoDFWmAg");
	var mask_graphics_318 = new cjs.Graphics().p("ACdAwQFil2IDgQQIDgQF3FhQF4FhAQIDMgm3ABMQgQoDFgl4g");
	var mask_graphics_319 = new cjs.Graphics().p("ACzApQFsltIDgCQIEgCFtFpQFvFsACIDMgm4AALQgCoEFplug");
	var mask_graphics_320 = new cjs.Graphics().p("Ai0NvQALoDF0llQF0ljIEALQIDALFkFzQFlF1gLIEg");
	var mask_graphics_321 = new cjs.Graphics().p("AizM+QAZoDF8laQF+laIDAZQIDAZFaF8QFbF+gZIDg");
	var mask_graphics_322 = new cjs.Graphics().p("AixMNQAmoCGGlQQGHlQICAnQICAmFQGFQFRGHgnICg");
	var mask_graphics_323 = new cjs.Graphics().p("AiuLdQAzoBGOlGQGQlFIBAzQIBA0FGGOQFGGQg0IAg");
	var mask_graphics_324 = new cjs.Graphics().p("AirKsQBBn/GXk7QGYk7H/BBQH/BBE8GWQE8GYhBIAg");
	var mask_graphics_325 = new cjs.Graphics().p("AimJ8QBOn+GfkwQGgkwH9BOQH+BPEwGeQExGghOH+g");
	var mask_graphics_326 = new cjs.Graphics().p("AihJMQBcn8GmklQGoklH7BcQH7BbEmGnQEmGohcH7g");
	var mask_graphics_327 = new cjs.Graphics().p("AibIcQBpn5GukaQGvkaH5BpQH5BpEaGuQEbGvhpH5g");
	var mask_graphics_328 = new cjs.Graphics().p("AiUHsQB2n1G1kPQG3kPH2B2QH1B2EPG1QEQG3h2H2g");
	var mask_graphics_329 = new cjs.Graphics().p("AiNG8QCEnxG8kEQG9kDHzCDQHyCDEEG8QEEG+iDHzg");
	var mask_graphics_330 = new cjs.Graphics().p("AiEGNQCPntHEj5QHEj3HvCQQHvCQD4HDQD4HEiQHvg");
	var mask_graphics_331 = new cjs.Graphics().p("Ah7FfQCdnqHKjtQHKjrHrCdQHrCdDsHJQDsHLidHrg");
	var mask_graphics_332 = new cjs.Graphics().p("AhwEwQCpnlHQjhQHQjfHnCqQHnCqDfHPQDhHRiqHmg");
	var mask_graphics_333 = new cjs.Graphics().p("AhlECQC1nhHWjUQHXjTHiC3QHiC2DTHVQDUHXi3Hig");
	var mask_graphics_334 = new cjs.Graphics().p("AhZDVQDCncHbjIQHcjHHdDEQHdDDDHHaQDIHcjEHdg");
	var mask_graphics_335 = new cjs.Graphics().p("AhNCoQDPnXHgi7QHhi6HYDPQHYDQC6HfQC7HhjPHYg");
	var mask_graphics_336 = new cjs.Graphics().p("Ag/B8QDbnSHliuQHliuHTDcQHSDcCuHkQCuHljcHTg");
	var mask_graphics_337 = new cjs.Graphics().p("AgxBQQDnnMHqihQHqihHMDoQHMDoCiHoQChHqjoHMg");
	var mask_graphics_338 = new cjs.Graphics().p("AghAkQDznFHtiVQHuiUHGD0QHGD0CUHtQCVHuj0HGg");
	var mask_graphics_339 = new cjs.Graphics().p("AgSgFQD/nAHyiIQHxiHHAEAQG/EACIHwQCHHykAG/g");
	var mask_graphics_340 = new cjs.Graphics().p("AgBgwQELm4H0h7QH1h6G5ELQG5EMB6HzQB7H1kMG5g");
	var mask_graphics_341 = new cjs.Graphics().p("AAQhZQEXmxH3huQH4htGyEXQGxEXBtH2QBuH4kXGyg");
	var mask_graphics_342 = new cjs.Graphics().p("AAiiCQEimqH6hgQH7hgGqEiQGqEiBgH6QBgH6kiGrg");
	var mask_graphics_343 = new cjs.Graphics().p("AA1iqQEtmiH9hTQH9hTGiEuQGiEtBTH7QBTH+ktGig");
	var mask_graphics_344 = new cjs.Graphics().p("ABIjRQE4maH/hGQH/hFGaE4QGbE4BFH9QBGIAk4Gag");
	var mask_graphics_345 = new cjs.Graphics().p("ABdj3QFCmSIBg5QIAg4GSFDQGSFDA4H/QA4IBlCGSg");
	var mask_graphics_346 = new cjs.Graphics().p("ABxkdQFOmKIBgrQICgqGJFNQGKFNArIBQAqIClNGJg");
	var mask_graphics_347 = new cjs.Graphics().p("ACHlCQFXmBIDgdQIDgdGAFXQGBFYAdIBQAdIDlXGBg");
	var mask_graphics_348 = new cjs.Graphics().p("ACdlmQFhl3IEgRQIDgPF3FhQF4FiAPICQAQIDlhF4g");
	var mask_graphics_349 = new cjs.Graphics().p("AC0mJQFrluIDgDQIEgCFuFrQFuFrACICQACIElrFug");
	var mask_graphics_350 = new cjs.Graphics().p("ADLmrQF0llIEALQIDAMFlF0QFkF1gLICQgMIEl0Fkg");
	var mask_graphics_351 = new cjs.Graphics().p("ADjnNQF9laIDAYQIDAZFbF+QFaF9gYICQgZIEl+Fag");
	var mask_graphics_352 = new cjs.Graphics().p("AD7ntQGGlRIDAmQICAnFQGHQFRGFgnICQgmICmGFRg");
	var mask_graphics_353 = new cjs.Graphics().p("AEUoNQGPlGIBA0QIBA0FGGPQFGGOg0IBQgzIBmQFGg");
	var mask_graphics_354 = new cjs.Graphics().p("AEtorQGYk7H/BAQH/BCE8GXQE8GXhBH/QhCIAmXE7g");
	var mask_graphics_355 = new cjs.Graphics().p("AFHpIQGgkxH9BOQH+BPEwGgQExGehOH+QhPH+mfEwg");
	var mask_graphics_356 = new cjs.Graphics().p("AFhplQGoklH7BbQH7BcEmGoQEmGmhcH7QhcH8mnEmg");
	var mask_graphics_357 = new cjs.Graphics().p("AF8qAQGvkbH5BpQH5BqEaGvQEbGuhpH4QhpH5mvEbg");
	var mask_graphics_358 = new cjs.Graphics().p("AGXqaQG3kPH2B1QH1B3EPG2QEQG2h2H1Qh3H3m2EPg");
	var mask_graphics_359 = new cjs.Graphics().p("AGzqzQG9kEHzCDQHyCEEEG9QEEG8iDHyQiEHzm9EEg");
	var mask_graphics_360 = new cjs.Graphics().p("AHPrLQHEj4HvCQQHvCQD4HEQD4HDiQHvQiRHvnED4g");
	var mask_graphics_361 = new cjs.Graphics().p("AHsriQHKjsHrCcQHrCeDsHLQDsHJidHqQidHsnLDsg");
	var mask_graphics_362 = new cjs.Graphics().p("AIJr4QHQjgHnCqQHnCqDgHQQDfHQipHmQirHnnQDgg");
	var mask_graphics_363 = new cjs.Graphics().p("AImsNQHWjTHjC2QHiC3DTHWQDUHVi3HiQi2HinWDUg");
	var mask_graphics_364 = new cjs.Graphics().p("AJEsgQHcjIHdDDQHdDEDHHbQDIHbjEHdQjDHdnbDHg");
	var mask_graphics_365 = new cjs.Graphics().p("AJjszQHgi6HYDPQHYDQC6HhQC7HfjPHYQjQHYnhC7g");
	var mask_graphics_366 = new cjs.Graphics().p("AKBtEQHliuHTDcQHSDcCuHlQCuHljcHRQjcHTnlCug");
	var mask_graphics_367 = new cjs.Graphics().p("AKgtUQHqihHMDoQHMDoCiHqQChHpjoHLQjoHNnqCig");
	var mask_graphics_368 = new cjs.Graphics().p("AK/tiQHuiVHGD0QHGD1CUHtQCVHtj0HFQj0HHnuCVg");
	var mask_graphics_369 = new cjs.Graphics().p("ALftwQHxiHHAD/QG/EBCIHxQCHHwkAHAQkAHAnxCHg");
	var mask_graphics_370 = new cjs.Graphics().p("AL+t8QH1h6G5ELQG4EMB7HzQB6H1kLG5QkMG5n0B6g");
	var mask_graphics_371 = new cjs.Graphics().p("AMeuHQH4htGyEWQGxEYBtH3QBuH3kXGyQkXGxn4Bug");
	var mask_graphics_372 = new cjs.Graphics().p("AM+uRQH7hgGqEiQGqEjBgH5QBgH7kiGpQkiGrn7Bgg");
	var mask_graphics_373 = new cjs.Graphics().p("ANfuZQH8hTGjEtQGiEuBTH8QBTH8ktGiQkuGjn9BTg");
	var mask_graphics_374 = new cjs.Graphics().p("AN/ugQH/hGGaE4QGaE5BGH9QBFH/k3GaQk5Gbn/BFg");
	var mask_graphics_375 = new cjs.Graphics().p("AOgumQIAg4GSFCQGSFDA4IAQA4IAlCGSQlDGSoBA4g");
	var mask_graphics_376 = new cjs.Graphics().p("APAurQICgqGKFMQGJFOAqIBQArIBlNGJQlNGKoCArg");
	var mask_graphics_377 = new cjs.Graphics().p("APhuuQICgdGBFXQGBFXAdICQAdIDlXGAQlYGBoCAdg");
	var mask_graphics_378 = new cjs.Graphics().p("AQBuwQIEgQF3FhQF4FiAPICQAQIDlhF3QliF4oDAQg");
	var mask_graphics_379 = new cjs.Graphics().p("AQiuxQIDgCFvFqQFuFsACICQACIElrFtQlrFvoDACg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(259).to({graphics:mask_graphics_259,x:168.8,y:154.2}).wait(1).to({graphics:mask_graphics_260,x:169.9,y:154.2}).wait(1).to({graphics:mask_graphics_261,x:171.5,y:154.1}).wait(1).to({graphics:mask_graphics_262,x:173.1,y:154}).wait(1).to({graphics:mask_graphics_263,x:174.7,y:153.9}).wait(1).to({graphics:mask_graphics_264,x:176.4,y:153.7}).wait(1).to({graphics:mask_graphics_265,x:178,y:153.5}).wait(1).to({graphics:mask_graphics_266,x:179.6,y:153.2}).wait(1).to({graphics:mask_graphics_267,x:181.2,y:152.9}).wait(1).to({graphics:mask_graphics_268,x:182.8,y:152.5}).wait(1).to({graphics:mask_graphics_269,x:184.4,y:152.1}).wait(1).to({graphics:mask_graphics_270,x:185.9,y:151.7}).wait(1).to({graphics:mask_graphics_271,x:187.5,y:151.2}).wait(1).to({graphics:mask_graphics_272,x:189,y:150.7}).wait(1).to({graphics:mask_graphics_273,x:190.6,y:150.2}).wait(1).to({graphics:mask_graphics_274,x:192.1,y:149.6}).wait(1).to({graphics:mask_graphics_275,x:193.6,y:148.9}).wait(1).to({graphics:mask_graphics_276,x:195.1,y:148.2}).wait(1).to({graphics:mask_graphics_277,x:196.5,y:147.5}).wait(1).to({graphics:mask_graphics_278,x:198,y:146.8}).wait(1).to({graphics:mask_graphics_279,x:199.4,y:146}).wait(1).to({graphics:mask_graphics_280,x:200.8,y:145.2}).wait(1).to({graphics:mask_graphics_281,x:202.2,y:144.3}).wait(1).to({graphics:mask_graphics_282,x:203.6,y:143.4}).wait(1).to({graphics:mask_graphics_283,x:204.9,y:142.5}).wait(1).to({graphics:mask_graphics_284,x:206.2,y:141.5}).wait(1).to({graphics:mask_graphics_285,x:207.5,y:140.5}).wait(1).to({graphics:mask_graphics_286,x:208.7,y:139.5}).wait(1).to({graphics:mask_graphics_287,x:210,y:138.4}).wait(1).to({graphics:mask_graphics_288,x:211.2,y:137.3}).wait(1).to({graphics:mask_graphics_289,x:212.4,y:136.2}).wait(1).to({graphics:mask_graphics_290,x:213.5,y:135}).wait(1).to({graphics:mask_graphics_291,x:214.6,y:133.8}).wait(1).to({graphics:mask_graphics_292,x:215.7,y:132.6}).wait(1).to({graphics:mask_graphics_293,x:216.7,y:131.3}).wait(1).to({graphics:mask_graphics_294,x:217.8,y:130.1}).wait(1).to({graphics:mask_graphics_295,x:218.7,y:128.8}).wait(1).to({graphics:mask_graphics_296,x:219.7,y:127.4}).wait(1).to({graphics:mask_graphics_297,x:220.6,y:126.1}).wait(1).to({graphics:mask_graphics_298,x:221.5,y:124.7}).wait(1).to({graphics:mask_graphics_299,x:222.3,y:123.3}).wait(1).to({graphics:mask_graphics_300,x:223.1,y:121.9}).wait(1).to({graphics:mask_graphics_301,x:223.9,y:120.5}).wait(1).to({graphics:mask_graphics_302,x:224.6,y:119}).wait(1).to({graphics:mask_graphics_303,x:225.3,y:117.5}).wait(1).to({graphics:mask_graphics_304,x:225.9,y:116}).wait(1).to({graphics:mask_graphics_305,x:226.6,y:114.5}).wait(1).to({graphics:mask_graphics_306,x:227.1,y:113}).wait(1).to({graphics:mask_graphics_307,x:227.7,y:111.5}).wait(1).to({graphics:mask_graphics_308,x:228.2,y:109.9}).wait(1).to({graphics:mask_graphics_309,x:228.6,y:108.3}).wait(1).to({graphics:mask_graphics_310,x:229,y:106.8}).wait(1).to({graphics:mask_graphics_311,x:229.4,y:105.2}).wait(1).to({graphics:mask_graphics_312,x:229.7,y:103.6}).wait(1).to({graphics:mask_graphics_313,x:230,y:102}).wait(1).to({graphics:mask_graphics_314,x:230.2,y:100.4}).wait(1).to({graphics:mask_graphics_315,x:230.4,y:98.8}).wait(1).to({graphics:mask_graphics_316,x:230.6,y:97.1}).wait(1).to({graphics:mask_graphics_317,x:230.7,y:95.5}).wait(1).to({graphics:mask_graphics_318,x:230.8,y:93.9}).wait(1).to({graphics:mask_graphics_319,x:230.8,y:92.3}).wait(1).to({graphics:mask_graphics_320,x:230.8,y:93.4}).wait(1).to({graphics:mask_graphics_321,x:230.8,y:95}).wait(1).to({graphics:mask_graphics_322,x:230.8,y:96.6}).wait(1).to({graphics:mask_graphics_323,x:230.8,y:98.2}).wait(1).to({graphics:mask_graphics_324,x:230.9,y:99.9}).wait(1).to({graphics:mask_graphics_325,x:230.9,y:101.5}).wait(1).to({graphics:mask_graphics_326,x:230.9,y:103.1}).wait(1).to({graphics:mask_graphics_327,x:230.9,y:104.7}).wait(1).to({graphics:mask_graphics_328,x:230.9,y:106.3}).wait(1).to({graphics:mask_graphics_329,x:231,y:107.9}).wait(1).to({graphics:mask_graphics_330,x:231,y:109.4}).wait(1).to({graphics:mask_graphics_331,x:231,y:111}).wait(1).to({graphics:mask_graphics_332,x:231,y:112.5}).wait(1).to({graphics:mask_graphics_333,x:231,y:114.1}).wait(1).to({graphics:mask_graphics_334,x:231,y:115.6}).wait(1).to({graphics:mask_graphics_335,x:231,y:117.1}).wait(1).to({graphics:mask_graphics_336,x:231,y:118.6}).wait(1).to({graphics:mask_graphics_337,x:231,y:120}).wait(1).to({graphics:mask_graphics_338,x:231,y:121.5}).wait(1).to({graphics:mask_graphics_339,x:231,y:122.9}).wait(1).to({graphics:mask_graphics_340,x:230.9,y:124.3}).wait(1).to({graphics:mask_graphics_341,x:230.9,y:125.7}).wait(1).to({graphics:mask_graphics_342,x:230.9,y:127.1}).wait(1).to({graphics:mask_graphics_343,x:230.9,y:128.4}).wait(1).to({graphics:mask_graphics_344,x:230.9,y:129.7}).wait(1).to({graphics:mask_graphics_345,x:230.9,y:131}).wait(1).to({graphics:mask_graphics_346,x:230.8,y:132.2}).wait(1).to({graphics:mask_graphics_347,x:230.8,y:133.5}).wait(1).to({graphics:mask_graphics_348,x:230.8,y:134.7}).wait(1).to({graphics:mask_graphics_349,x:230.8,y:135.8}).wait(1).to({graphics:mask_graphics_350,x:230.8,y:137}).wait(1).to({graphics:mask_graphics_351,x:230.8,y:138.1}).wait(1).to({graphics:mask_graphics_352,x:230.8,y:139.2}).wait(1).to({graphics:mask_graphics_353,x:230.8,y:140.2}).wait(1).to({graphics:mask_graphics_354,x:230.9,y:141.2}).wait(1).to({graphics:mask_graphics_355,x:230.9,y:142.2}).wait(1).to({graphics:mask_graphics_356,x:230.9,y:143.2}).wait(1).to({graphics:mask_graphics_357,x:230.9,y:144.1}).wait(1).to({graphics:mask_graphics_358,x:230.9,y:145}).wait(1).to({graphics:mask_graphics_359,x:231,y:145.8}).wait(1).to({graphics:mask_graphics_360,x:231,y:146.6}).wait(1).to({graphics:mask_graphics_361,x:231,y:147.4}).wait(1).to({graphics:mask_graphics_362,x:231,y:148.1}).wait(1).to({graphics:mask_graphics_363,x:231,y:148.8}).wait(1).to({graphics:mask_graphics_364,x:231,y:149.4}).wait(1).to({graphics:mask_graphics_365,x:231,y:150.1}).wait(1).to({graphics:mask_graphics_366,x:231,y:150.6}).wait(1).to({graphics:mask_graphics_367,x:231,y:151.2}).wait(1).to({graphics:mask_graphics_368,x:231,y:151.7}).wait(1).to({graphics:mask_graphics_369,x:231,y:152.1}).wait(1).to({graphics:mask_graphics_370,x:230.9,y:152.5}).wait(1).to({graphics:mask_graphics_371,x:230.9,y:152.9}).wait(1).to({graphics:mask_graphics_372,x:230.9,y:153.2}).wait(1).to({graphics:mask_graphics_373,x:230.9,y:153.5}).wait(1).to({graphics:mask_graphics_374,x:230.9,y:153.7}).wait(1).to({graphics:mask_graphics_375,x:230.8,y:153.9}).wait(1).to({graphics:mask_graphics_376,x:230.8,y:154.1}).wait(1).to({graphics:mask_graphics_377,x:230.8,y:154.2}).wait(1).to({graphics:mask_graphics_378,x:230.8,y:154.3}).wait(1).to({graphics:mask_graphics_379,x:230.8,y:154.3}).wait(346));

	// 2
	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#000000").ss(25,1,1).p("A0csJIaFAAQF9AQESDuQElD+AAFnQAAFoklD+QguAogxAi");
	this.shape_142.setTransform(288,175.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#000000").ss(25,1,1).p("A0ctjIaFAAQF9APESDuQElD/AAFnQAAFnklD+QkJDoltAVQglACgnAAQgrAAgrgDI2qAA");
	this.shape_143.setTransform(288,184.9);

	var maskedShapeInstanceList = [this.shape_142,this.shape_143];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_142}]},259).to({state:[{t:this.shape_143}]},61).wait(405));

	// Layer 1 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_160 = new cjs.Graphics().p("AiBDdIAAm5IEDAAIAAG5g");
	var mask_1_graphics_161 = new cjs.Graphics().p("AiKDdIAAm5IEVAAIAAG5g");
	var mask_1_graphics_162 = new cjs.Graphics().p("AiTDdIAAm5IEnAAIAAG5g");
	var mask_1_graphics_163 = new cjs.Graphics().p("AicDdIAAm5IE5AAIAAG5g");
	var mask_1_graphics_164 = new cjs.Graphics().p("AilDdIAAm5IFLAAIAAG5g");
	var mask_1_graphics_165 = new cjs.Graphics().p("AiuDdIAAm5IFdAAIAAG5g");
	var mask_1_graphics_166 = new cjs.Graphics().p("Ai3DdIAAm5IFvAAIAAG5g");
	var mask_1_graphics_167 = new cjs.Graphics().p("AjADdIAAm5IGBAAIAAG5g");
	var mask_1_graphics_168 = new cjs.Graphics().p("AjJDdIAAm5IGTAAIAAG5g");
	var mask_1_graphics_169 = new cjs.Graphics().p("AjSDdIAAm5IGlAAIAAG5g");
	var mask_1_graphics_170 = new cjs.Graphics().p("AjbDdIAAm5IG4AAIAAG5g");
	var mask_1_graphics_171 = new cjs.Graphics().p("AjkDdIAAm5IHKAAIAAG5g");
	var mask_1_graphics_172 = new cjs.Graphics().p("AjtDdIAAm5IHcAAIAAG5g");
	var mask_1_graphics_173 = new cjs.Graphics().p("Aj2DdIAAm5IHuAAIAAG5g");
	var mask_1_graphics_174 = new cjs.Graphics().p("Aj/DdIAAm5IIAAAIAAG5g");
	var mask_1_graphics_175 = new cjs.Graphics().p("AkIDdIAAm5IISAAIAAG5g");
	var mask_1_graphics_176 = new cjs.Graphics().p("AkRDdIAAm5IIkAAIAAG5g");
	var mask_1_graphics_177 = new cjs.Graphics().p("AkbDdIAAm5II3AAIAAG5g");
	var mask_1_graphics_178 = new cjs.Graphics().p("AkkDdIAAm5IJJAAIAAG5g");
	var mask_1_graphics_179 = new cjs.Graphics().p("AktDdIAAm5IJbAAIAAG5g");
	var mask_1_graphics_180 = new cjs.Graphics().p("Ak2DdIAAm5IJtAAIAAG5g");
	var mask_1_graphics_181 = new cjs.Graphics().p("Ak/DdIAAm5IJ/AAIAAG5g");
	var mask_1_graphics_182 = new cjs.Graphics().p("AlIDdIAAm5IKRAAIAAG5g");
	var mask_1_graphics_183 = new cjs.Graphics().p("AlRDdIAAm5IKjAAIAAG5g");
	var mask_1_graphics_184 = new cjs.Graphics().p("AlaDdIAAm5IK1AAIAAG5g");
	var mask_1_graphics_185 = new cjs.Graphics().p("AljDdIAAm5ILHAAIAAG5g");
	var mask_1_graphics_186 = new cjs.Graphics().p("AlsDdIAAm5ILZAAIAAG5g");
	var mask_1_graphics_187 = new cjs.Graphics().p("Al1DdIAAm5ILrAAIAAG5g");
	var mask_1_graphics_188 = new cjs.Graphics().p("Al+DdIAAm5IL9AAIAAG5g");
	var mask_1_graphics_189 = new cjs.Graphics().p("AmHDdIAAm5IMPAAIAAG5g");
	var mask_1_graphics_190 = new cjs.Graphics().p("AmQDdIAAm5IMhAAIAAG5g");
	var mask_1_graphics_191 = new cjs.Graphics().p("AmZDdIAAm5IMzAAIAAG5g");
	var mask_1_graphics_192 = new cjs.Graphics().p("AmiDdIAAm5INFAAIAAG5g");
	var mask_1_graphics_193 = new cjs.Graphics().p("AmrDdIAAm5INXAAIAAG5g");
	var mask_1_graphics_194 = new cjs.Graphics().p("Am0DdIAAm5INpAAIAAG5g");
	var mask_1_graphics_195 = new cjs.Graphics().p("Am9DdIAAm5IN7AAIAAG5g");
	var mask_1_graphics_196 = new cjs.Graphics().p("AnGDdIAAm5IONAAIAAG5g");
	var mask_1_graphics_197 = new cjs.Graphics().p("AnPDdIAAm5IOfAAIAAG5g");
	var mask_1_graphics_198 = new cjs.Graphics().p("AnYDdIAAm5IOxAAIAAG5g");
	var mask_1_graphics_199 = new cjs.Graphics().p("AnhDdIAAm5IPEAAIAAG5g");
	var mask_1_graphics_200 = new cjs.Graphics().p("AnqDdIAAm5IPWAAIAAG5g");
	var mask_1_graphics_201 = new cjs.Graphics().p("AnzDdIAAm5IPnAAIAAG5g");
	var mask_1_graphics_202 = new cjs.Graphics().p("An8DdIAAm5IP5AAIAAG5g");
	var mask_1_graphics_203 = new cjs.Graphics().p("AoGDdIAAm5IQNAAIAAG5g");
	var mask_1_graphics_204 = new cjs.Graphics().p("AoPDdIAAm5IQfAAIAAG5g");
	var mask_1_graphics_205 = new cjs.Graphics().p("AoYDdIAAm5IQxAAIAAG5g");
	var mask_1_graphics_206 = new cjs.Graphics().p("AohDdIAAm5IRDAAIAAG5g");
	var mask_1_graphics_207 = new cjs.Graphics().p("AoqDdIAAm5IRVAAIAAG5g");
	var mask_1_graphics_208 = new cjs.Graphics().p("AozDdIAAm5IRnAAIAAG5g");
	var mask_1_graphics_209 = new cjs.Graphics().p("Ao8DdIAAm5IR5AAIAAG5g");
	var mask_1_graphics_210 = new cjs.Graphics().p("ApFDdIAAm5ISLAAIAAG5g");
	var mask_1_graphics_211 = new cjs.Graphics().p("ApODdIAAm5ISdAAIAAG5g");
	var mask_1_graphics_212 = new cjs.Graphics().p("ApXDdIAAm5ISvAAIAAG5g");
	var mask_1_graphics_213 = new cjs.Graphics().p("ApgDdIAAm5ITBAAIAAG5g");
	var mask_1_graphics_214 = new cjs.Graphics().p("AppDdIAAm5ITTAAIAAG5g");
	var mask_1_graphics_215 = new cjs.Graphics().p("ApyDdIAAm5ITlAAIAAG5g");
	var mask_1_graphics_216 = new cjs.Graphics().p("Ap7DdIAAm5IT3AAIAAG5g");
	var mask_1_graphics_217 = new cjs.Graphics().p("AqEDdIAAm5IUJAAIAAG5g");
	var mask_1_graphics_218 = new cjs.Graphics().p("AqNDdIAAm5IUbAAIAAG5g");
	var mask_1_graphics_219 = new cjs.Graphics().p("AqWDdIAAm5IUtAAIAAG5g");
	var mask_1_graphics_220 = new cjs.Graphics().p("AqfDdIAAm5IU/AAIAAG5g");
	var mask_1_graphics_221 = new cjs.Graphics().p("AqoDdIAAm5IVRAAIAAG5g");
	var mask_1_graphics_222 = new cjs.Graphics().p("AqxDdIAAm5IVjAAIAAG5g");
	var mask_1_graphics_223 = new cjs.Graphics().p("Aq6DdIAAm5IV1AAIAAG5g");
	var mask_1_graphics_224 = new cjs.Graphics().p("ArDDdIAAm5IWHAAIAAG5g");
	var mask_1_graphics_225 = new cjs.Graphics().p("ArMDdIAAm5IWZAAIAAG5g");
	var mask_1_graphics_226 = new cjs.Graphics().p("ArVDdIAAm5IWrAAIAAG5g");
	var mask_1_graphics_227 = new cjs.Graphics().p("AreDdIAAm5IW9AAIAAG5g");
	var mask_1_graphics_228 = new cjs.Graphics().p("ArnDdIAAm5IXPAAIAAG5g");
	var mask_1_graphics_229 = new cjs.Graphics().p("ArwDdIAAm5IXhAAIAAG5g");
	var mask_1_graphics_230 = new cjs.Graphics().p("Ar6DdIAAm5IX1AAIAAG5g");
	var mask_1_graphics_231 = new cjs.Graphics().p("AsDDdIAAm5IYHAAIAAG5g");
	var mask_1_graphics_232 = new cjs.Graphics().p("AsMDdIAAm5IYZAAIAAG5g");
	var mask_1_graphics_233 = new cjs.Graphics().p("AsVDdIAAm5IYrAAIAAG5g");
	var mask_1_graphics_234 = new cjs.Graphics().p("AseDdIAAm5IY9AAIAAG5g");
	var mask_1_graphics_235 = new cjs.Graphics().p("AsnDdIAAm5IZPAAIAAG5g");
	var mask_1_graphics_236 = new cjs.Graphics().p("AswDdIAAm5IZhAAIAAG5g");
	var mask_1_graphics_237 = new cjs.Graphics().p("As5DdIAAm5IZzAAIAAG5g");
	var mask_1_graphics_238 = new cjs.Graphics().p("AtCDdIAAm5IaFAAIAAG5g");
	var mask_1_graphics_239 = new cjs.Graphics().p("AtLDdIAAm5IaXAAIAAG5g");
	var mask_1_graphics_240 = new cjs.Graphics().p("AtUDdIAAm5IapAAIAAG5g");
	var mask_1_graphics_241 = new cjs.Graphics().p("AtdDdIAAm5Ia7AAIAAG5g");
	var mask_1_graphics_242 = new cjs.Graphics().p("AtmDdIAAm5IbNAAIAAG5g");
	var mask_1_graphics_243 = new cjs.Graphics().p("AtvDdIAAm5IbfAAIAAG5g");
	var mask_1_graphics_244 = new cjs.Graphics().p("At4DdIAAm5IbxAAIAAG5g");
	var mask_1_graphics_245 = new cjs.Graphics().p("AuBDdIAAm5IcDAAIAAG5g");
	var mask_1_graphics_246 = new cjs.Graphics().p("AuKDdIAAm5IcVAAIAAG5g");
	var mask_1_graphics_247 = new cjs.Graphics().p("AuTDdIAAm5IcnAAIAAG5g");
	var mask_1_graphics_248 = new cjs.Graphics().p("AucDdIAAm5Ic5AAIAAG5g");
	var mask_1_graphics_249 = new cjs.Graphics().p("AulDdIAAm5IdLAAIAAG5g");
	var mask_1_graphics_250 = new cjs.Graphics().p("AuuDdIAAm5IddAAIAAG5g");
	var mask_1_graphics_251 = new cjs.Graphics().p("Au3DdIAAm5IdvAAIAAG5g");
	var mask_1_graphics_252 = new cjs.Graphics().p("AvADdIAAm5IeBAAIAAG5g");
	var mask_1_graphics_253 = new cjs.Graphics().p("AvJDdIAAm5IeTAAIAAG5g");
	var mask_1_graphics_254 = new cjs.Graphics().p("AvSDdIAAm5IelAAIAAG5g");
	var mask_1_graphics_255 = new cjs.Graphics().p("AvbDdIAAm5Ie3AAIAAG5g");
	var mask_1_graphics_256 = new cjs.Graphics().p("AvlDdIAAm5IfLAAIAAG5g");
	var mask_1_graphics_257 = new cjs.Graphics().p("AvuDdIAAm5IfdAAIAAG5g");
	var mask_1_graphics_258 = new cjs.Graphics().p("Av3DdIAAm5IfvAAIAAG5g");
	var mask_1_graphics_259 = new cjs.Graphics().p("AwADdIAAm5MAgBAAAIAAG5g");
	var mask_1_graphics_379 = new cjs.Graphics().p("APZQvIAAm6IAyAAIAAG6gAwKp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_380 = new cjs.Graphics().p("APGQvIAAm6IBFAAIAAG6gAwKp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_381 = new cjs.Graphics().p("AO0QvIAAm6IBXAAIAAG6gAwJp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_382 = new cjs.Graphics().p("AOhQvIAAm6IBqAAIAAG6gAwJp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_383 = new cjs.Graphics().p("AOPQvIAAm6IB7AAIAAG6gAwJp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_384 = new cjs.Graphics().p("AN8QvIAAm6ICOAAIAAG6gAwJp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_385 = new cjs.Graphics().p("ANpQvIAAm6IChAAIAAG6gAwJp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_386 = new cjs.Graphics().p("ANWQvIAAm6IC0AAIAAG6gAwJp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_387 = new cjs.Graphics().p("ANDQvIAAm6IDHAAIAAG6gAwJp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_388 = new cjs.Graphics().p("AMxQvIAAm6IDZAAIAAG6gAwJp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_389 = new cjs.Graphics().p("AMeQvIAAm6IDsAAIAAG6gAwJp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_390 = new cjs.Graphics().p("AMLQvIAAm6ID/AAIAAG6gAwJp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_391 = new cjs.Graphics().p("AL5QvIAAm6IEQAAIAAG6gAwIp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_392 = new cjs.Graphics().p("ALmQvIAAm6IEjAAIAAG6gAwIp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_393 = new cjs.Graphics().p("ALUQvIAAm6IE1AAIAAG6gAwIp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_394 = new cjs.Graphics().p("ALBQvIAAm6IFIAAIAAG6gAwIp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_395 = new cjs.Graphics().p("AKuQvIAAm6IFbAAIAAG6gAwIp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_396 = new cjs.Graphics().p("AKbQvIAAm6IFuAAIAAG6gAwIp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_397 = new cjs.Graphics().p("AKIQvIAAm6IGBAAIAAG6gAwIp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_398 = new cjs.Graphics().p("AJ2QvIAAm6IGTAAIAAG6gAwIp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_399 = new cjs.Graphics().p("AJjQvIAAm6IGmAAIAAG6gAwIp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_400 = new cjs.Graphics().p("AJQQvIAAm6IG5AAIAAG6gAwIp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_401 = new cjs.Graphics().p("AI+QvIAAm6IHKAAIAAG6gAwHp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_402 = new cjs.Graphics().p("AIrQvIAAm6IHdAAIAAG6gAwHp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_403 = new cjs.Graphics().p("AIZQvIAAm6IHvAAIAAG6gAwHp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_404 = new cjs.Graphics().p("AIGQvIAAm6IICAAIAAG6gAwHp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_405 = new cjs.Graphics().p("AHzQvIAAm6IIVAAIAAG6gAwHp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_406 = new cjs.Graphics().p("AHgQvIAAm6IIoAAIAAG6gAwHp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_407 = new cjs.Graphics().p("AHNQvIAAm6II7AAIAAG6gAwHp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_408 = new cjs.Graphics().p("AG7QvIAAm6IJNAAIAAG6gAwHp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_409 = new cjs.Graphics().p("AGoQvIAAm6IJgAAIAAG6gAwHp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_410 = new cjs.Graphics().p("AGVQvIAAm6IJzAAIAAG6gAwHp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_411 = new cjs.Graphics().p("AGDQvIAAm6IKEAAIAAG6gAwGp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_412 = new cjs.Graphics().p("AFwQvIAAm6IKXAAIAAG6gAwGp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_413 = new cjs.Graphics().p("AFeQvIAAm6IKpAAIAAG6gAwGp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_414 = new cjs.Graphics().p("AFLQvIAAm6IK8AAIAAG6gAwGp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_415 = new cjs.Graphics().p("AE4QvIAAm6ILPAAIAAG6gAwGp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_416 = new cjs.Graphics().p("AElQvIAAm6ILiAAIAAG6gAwGp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_417 = new cjs.Graphics().p("AESQvIAAm6IL1AAIAAG6gAwGp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_418 = new cjs.Graphics().p("AEAQvIAAm6IMHAAIAAG6gAwGp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_419 = new cjs.Graphics().p("ADtQvIAAm6IMaAAIAAG6gAwGp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_420 = new cjs.Graphics().p("ADaQvIAAm6IMtAAIAAG6gAwGp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_421 = new cjs.Graphics().p("ADIQvIAAm6IM/AAIAAG6gAwFp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_422 = new cjs.Graphics().p("AC1QvIAAm6INSAAIAAG6gAwFp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_423 = new cjs.Graphics().p("ACjQvIAAm6INjAAIAAG6gAwFp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_424 = new cjs.Graphics().p("ACQQvIAAm6IN2AAIAAG6gAwFp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_425 = new cjs.Graphics().p("AB9QvIAAm6IOJAAIAAG6gAwFp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_426 = new cjs.Graphics().p("ABrQvIAAm6IObAAIAAG6gAwFp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_427 = new cjs.Graphics().p("ABXQvIAAm6IOvAAIAAG6gAwFp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_428 = new cjs.Graphics().p("ABFQvIAAm6IPBAAIAAG6gAwFp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_429 = new cjs.Graphics().p("AAyQvIAAm6IPUAAIAAG6gAwFp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_430 = new cjs.Graphics().p("AAfQvIAAm6IPnAAIAAG6gAwFp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_431 = new cjs.Graphics().p("AANQvIAAm6IP5AAIAAG6gAwEp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_432 = new cjs.Graphics().p("AgFQvIAAm6IQLAAIAAG6gAwEp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_433 = new cjs.Graphics().p("AgXQvIAAm6IQcAAIAAG6gAwEp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_434 = new cjs.Graphics().p("AgqQvIAAm6IQvAAIAAG6gAwEp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_435 = new cjs.Graphics().p("Ag9QvIAAm6IRCAAIAAG6gAwEp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_436 = new cjs.Graphics().p("AhPQvIAAm6IRUAAIAAG6gAwEp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_437 = new cjs.Graphics().p("AhiQvIAAm6IRnAAIAAG6gAwEp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_438 = new cjs.Graphics().p("Ah1QvIAAm6IR6AAIAAG6gAwEp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_439 = new cjs.Graphics().p("AiIQvIAAm6ISNAAIAAG6gAwEp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_440 = new cjs.Graphics().p("AibQvIAAm6ISgAAIAAG6gAwEp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_441 = new cjs.Graphics().p("AitQvIAAm6ISxAAIAAG6gAwDp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_442 = new cjs.Graphics().p("AjAQvIAAm6ITEAAIAAG6gAwDp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_443 = new cjs.Graphics().p("AjSQvIAAm6ITWAAIAAG6gAwDp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_444 = new cjs.Graphics().p("AjlQvIAAm6ITpAAIAAG6gAwDp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_445 = new cjs.Graphics().p("Aj4QvIAAm6IT8AAIAAG6gAwDp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_446 = new cjs.Graphics().p("AkKQvIAAm6IUOAAIAAG6gAwDp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_447 = new cjs.Graphics().p("AkdQvIAAm6IUhAAIAAG6gAwDp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_448 = new cjs.Graphics().p("AkwQvIAAm6IU0AAIAAG6gAwDp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_449 = new cjs.Graphics().p("AlDQvIAAm6IVHAAIAAG6gAwDp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_450 = new cjs.Graphics().p("AlWQvIAAm6IVaAAIAAG6gAwDp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_451 = new cjs.Graphics().p("AloQvIAAm6IVrAAIAAG6gAwCp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_452 = new cjs.Graphics().p("Al7QvIAAm6IV+AAIAAG6gAwCp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_453 = new cjs.Graphics().p("AmNQvIAAm6IWQAAIAAG6gAwCp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_454 = new cjs.Graphics().p("AmgQvIAAm6IWjAAIAAG6gAwCp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_455 = new cjs.Graphics().p("AmzQvIAAm6IW2AAIAAG6gAwCp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_456 = new cjs.Graphics().p("AnFQvIAAm6IXIAAIAAG6gAwCp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_457 = new cjs.Graphics().p("AnYQvIAAm6IXbAAIAAG6gAwCp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_458 = new cjs.Graphics().p("AnrQvIAAm6IXuAAIAAG6gAwCp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_459 = new cjs.Graphics().p("An+QvIAAm6IYBAAIAAG6gAwCp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_460 = new cjs.Graphics().p("AoRQvIAAm6IYUAAIAAG6gAwCp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_461 = new cjs.Graphics().p("AojQvIAAm6IYmAAIAAG6gAwBp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_462 = new cjs.Graphics().p("Ao2QvIAAm6IY5AAIAAG6gAwBp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_463 = new cjs.Graphics().p("ApIQvIAAm6IZKAAIAAG6gAwBp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_464 = new cjs.Graphics().p("ApbQvIAAm6IZdAAIAAG6gAwBp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_465 = new cjs.Graphics().p("ApuQvIAAm6IZwAAIAAG6gAwBp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_466 = new cjs.Graphics().p("AqBQvIAAm6IaDAAIAAG6gAwBp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_467 = new cjs.Graphics().p("AqTQvIAAm6IaVAAIAAG6gAwBp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_468 = new cjs.Graphics().p("AqmQvIAAm6IaoAAIAAG6gAwBp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_469 = new cjs.Graphics().p("Aq5QvIAAm6Ia7AAIAAG6gAwBp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_470 = new cjs.Graphics().p("ArMQvIAAm6IbOAAIAAG6gAwBp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_471 = new cjs.Graphics().p("AreQvIAAm6IbgAAIAAG6gAwAp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_472 = new cjs.Graphics().p("ArxQvIAAm6IbzAAIAAG6gAwAp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_473 = new cjs.Graphics().p("AsDQvIAAm6IcEAAIAAG6gAwAp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_474 = new cjs.Graphics().p("AsWQvIAAm6IcXAAIAAG6gAwAp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_475 = new cjs.Graphics().p("AspQvIAAm6IcqAAIAAG6gAwAp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_476 = new cjs.Graphics().p("As8QvIAAm6Ic9AAIAAG6gAwAp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_477 = new cjs.Graphics().p("AtPQvIAAm6IdQAAIAAG6gAwAp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_478 = new cjs.Graphics().p("AthQvIAAm6IdiAAIAAG6gAwAp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_479 = new cjs.Graphics().p("At0QvIAAm6Id1AAIAAG6gAwAp0IAAm6MAgBAAAIAAG6g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(160).to({graphics:mask_1_graphics_160,x:146,y:99.1}).wait(1).to({graphics:mask_1_graphics_161,x:146.9,y:99.1}).wait(1).to({graphics:mask_1_graphics_162,x:147.8,y:99.1}).wait(1).to({graphics:mask_1_graphics_163,x:148.7,y:99.1}).wait(1).to({graphics:mask_1_graphics_164,x:149.6,y:99.1}).wait(1).to({graphics:mask_1_graphics_165,x:150.5,y:99.1}).wait(1).to({graphics:mask_1_graphics_166,x:151.4,y:99.1}).wait(1).to({graphics:mask_1_graphics_167,x:152.3,y:99.1}).wait(1).to({graphics:mask_1_graphics_168,x:153.2,y:99.1}).wait(1).to({graphics:mask_1_graphics_169,x:154.1,y:99.1}).wait(1).to({graphics:mask_1_graphics_170,x:155.1,y:99.1}).wait(1).to({graphics:mask_1_graphics_171,x:156,y:99.1}).wait(1).to({graphics:mask_1_graphics_172,x:156.9,y:99.1}).wait(1).to({graphics:mask_1_graphics_173,x:157.8,y:99.1}).wait(1).to({graphics:mask_1_graphics_174,x:158.7,y:99.1}).wait(1).to({graphics:mask_1_graphics_175,x:159.6,y:99.1}).wait(1).to({graphics:mask_1_graphics_176,x:160.5,y:99.1}).wait(1).to({graphics:mask_1_graphics_177,x:161.4,y:99.1}).wait(1).to({graphics:mask_1_graphics_178,x:162.3,y:99.1}).wait(1).to({graphics:mask_1_graphics_179,x:163.2,y:99.1}).wait(1).to({graphics:mask_1_graphics_180,x:164.1,y:99.1}).wait(1).to({graphics:mask_1_graphics_181,x:165,y:99.1}).wait(1).to({graphics:mask_1_graphics_182,x:165.9,y:99.1}).wait(1).to({graphics:mask_1_graphics_183,x:166.8,y:99.1}).wait(1).to({graphics:mask_1_graphics_184,x:167.7,y:99.1}).wait(1).to({graphics:mask_1_graphics_185,x:168.6,y:99.1}).wait(1).to({graphics:mask_1_graphics_186,x:169.5,y:99.1}).wait(1).to({graphics:mask_1_graphics_187,x:170.4,y:99.1}).wait(1).to({graphics:mask_1_graphics_188,x:171.3,y:99.1}).wait(1).to({graphics:mask_1_graphics_189,x:172.2,y:99.1}).wait(1).to({graphics:mask_1_graphics_190,x:173.1,y:99.1}).wait(1).to({graphics:mask_1_graphics_191,x:174,y:99.1}).wait(1).to({graphics:mask_1_graphics_192,x:174.9,y:99.1}).wait(1).to({graphics:mask_1_graphics_193,x:175.8,y:99.1}).wait(1).to({graphics:mask_1_graphics_194,x:176.7,y:99.1}).wait(1).to({graphics:mask_1_graphics_195,x:177.6,y:99.1}).wait(1).to({graphics:mask_1_graphics_196,x:178.5,y:99.1}).wait(1).to({graphics:mask_1_graphics_197,x:179.5,y:99.1}).wait(1).to({graphics:mask_1_graphics_198,x:180.4,y:99.1}).wait(1).to({graphics:mask_1_graphics_199,x:181.3,y:99.1}).wait(1).to({graphics:mask_1_graphics_200,x:182.2,y:99.1}).wait(1).to({graphics:mask_1_graphics_201,x:183.1,y:99.1}).wait(1).to({graphics:mask_1_graphics_202,x:184,y:99.1}).wait(1).to({graphics:mask_1_graphics_203,x:184.9,y:99.1}).wait(1).to({graphics:mask_1_graphics_204,x:185.8,y:99.1}).wait(1).to({graphics:mask_1_graphics_205,x:186.7,y:99.1}).wait(1).to({graphics:mask_1_graphics_206,x:187.6,y:99.1}).wait(1).to({graphics:mask_1_graphics_207,x:188.5,y:99.1}).wait(1).to({graphics:mask_1_graphics_208,x:189.4,y:99.1}).wait(1).to({graphics:mask_1_graphics_209,x:190.3,y:99.1}).wait(1).to({graphics:mask_1_graphics_210,x:191.2,y:99.1}).wait(1).to({graphics:mask_1_graphics_211,x:192.1,y:99.1}).wait(1).to({graphics:mask_1_graphics_212,x:193,y:99.1}).wait(1).to({graphics:mask_1_graphics_213,x:193.9,y:99.1}).wait(1).to({graphics:mask_1_graphics_214,x:194.8,y:99.1}).wait(1).to({graphics:mask_1_graphics_215,x:195.7,y:99.1}).wait(1).to({graphics:mask_1_graphics_216,x:196.6,y:99.1}).wait(1).to({graphics:mask_1_graphics_217,x:197.5,y:99.1}).wait(1).to({graphics:mask_1_graphics_218,x:198.4,y:99.1}).wait(1).to({graphics:mask_1_graphics_219,x:199.3,y:99.1}).wait(1).to({graphics:mask_1_graphics_220,x:200.2,y:99.1}).wait(1).to({graphics:mask_1_graphics_221,x:201.1,y:99.1}).wait(1).to({graphics:mask_1_graphics_222,x:202,y:99.1}).wait(1).to({graphics:mask_1_graphics_223,x:203,y:99.1}).wait(1).to({graphics:mask_1_graphics_224,x:203.9,y:99.1}).wait(1).to({graphics:mask_1_graphics_225,x:204.8,y:99.1}).wait(1).to({graphics:mask_1_graphics_226,x:205.7,y:99.1}).wait(1).to({graphics:mask_1_graphics_227,x:206.6,y:99.1}).wait(1).to({graphics:mask_1_graphics_228,x:207.5,y:99.1}).wait(1).to({graphics:mask_1_graphics_229,x:208.4,y:99.1}).wait(1).to({graphics:mask_1_graphics_230,x:209.3,y:99.1}).wait(1).to({graphics:mask_1_graphics_231,x:210.2,y:99.1}).wait(1).to({graphics:mask_1_graphics_232,x:211.1,y:99.1}).wait(1).to({graphics:mask_1_graphics_233,x:212,y:99.1}).wait(1).to({graphics:mask_1_graphics_234,x:212.9,y:99.1}).wait(1).to({graphics:mask_1_graphics_235,x:213.8,y:99.1}).wait(1).to({graphics:mask_1_graphics_236,x:214.7,y:99.1}).wait(1).to({graphics:mask_1_graphics_237,x:215.6,y:99.1}).wait(1).to({graphics:mask_1_graphics_238,x:216.5,y:99.1}).wait(1).to({graphics:mask_1_graphics_239,x:217.4,y:99.1}).wait(1).to({graphics:mask_1_graphics_240,x:218.3,y:99.1}).wait(1).to({graphics:mask_1_graphics_241,x:219.2,y:99.1}).wait(1).to({graphics:mask_1_graphics_242,x:220.1,y:99.1}).wait(1).to({graphics:mask_1_graphics_243,x:221,y:99.1}).wait(1).to({graphics:mask_1_graphics_244,x:221.9,y:99.1}).wait(1).to({graphics:mask_1_graphics_245,x:222.8,y:99.1}).wait(1).to({graphics:mask_1_graphics_246,x:223.7,y:99.1}).wait(1).to({graphics:mask_1_graphics_247,x:224.6,y:99.1}).wait(1).to({graphics:mask_1_graphics_248,x:225.5,y:99.1}).wait(1).to({graphics:mask_1_graphics_249,x:226.4,y:99.1}).wait(1).to({graphics:mask_1_graphics_250,x:227.4,y:99.1}).wait(1).to({graphics:mask_1_graphics_251,x:228.3,y:99.1}).wait(1).to({graphics:mask_1_graphics_252,x:229.2,y:99.1}).wait(1).to({graphics:mask_1_graphics_253,x:230.1,y:99.1}).wait(1).to({graphics:mask_1_graphics_254,x:231,y:99.1}).wait(1).to({graphics:mask_1_graphics_255,x:231.9,y:99.1}).wait(1).to({graphics:mask_1_graphics_256,x:232.8,y:99.1}).wait(1).to({graphics:mask_1_graphics_257,x:233.7,y:99.1}).wait(1).to({graphics:mask_1_graphics_258,x:234.6,y:99.1}).wait(1).to({graphics:mask_1_graphics_259,x:235.5,y:99.1}).wait(120).to({graphics:mask_1_graphics_379,x:236.5,y:184.1}).wait(1).to({graphics:mask_1_graphics_380,x:236.5,y:184.1}).wait(1).to({graphics:mask_1_graphics_381,x:236.5,y:184.1}).wait(1).to({graphics:mask_1_graphics_382,x:236.5,y:184.1}).wait(1).to({graphics:mask_1_graphics_383,x:236.4,y:184.1}).wait(1).to({graphics:mask_1_graphics_384,x:236.4,y:184.1}).wait(1).to({graphics:mask_1_graphics_385,x:236.4,y:184.1}).wait(1).to({graphics:mask_1_graphics_386,x:236.4,y:184.1}).wait(1).to({graphics:mask_1_graphics_387,x:236.4,y:184.1}).wait(1).to({graphics:mask_1_graphics_388,x:236.4,y:184.1}).wait(1).to({graphics:mask_1_graphics_389,x:236.4,y:184.1}).wait(1).to({graphics:mask_1_graphics_390,x:236.4,y:184.1}).wait(1).to({graphics:mask_1_graphics_391,x:236.4,y:184.1}).wait(1).to({graphics:mask_1_graphics_392,x:236.4,y:184.1}).wait(1).to({graphics:mask_1_graphics_393,x:236.3,y:184.1}).wait(1).to({graphics:mask_1_graphics_394,x:236.3,y:184.1}).wait(1).to({graphics:mask_1_graphics_395,x:236.3,y:184.1}).wait(1).to({graphics:mask_1_graphics_396,x:236.3,y:184.1}).wait(1).to({graphics:mask_1_graphics_397,x:236.3,y:184.1}).wait(1).to({graphics:mask_1_graphics_398,x:236.3,y:184.1}).wait(1).to({graphics:mask_1_graphics_399,x:236.3,y:184.1}).wait(1).to({graphics:mask_1_graphics_400,x:236.3,y:184.1}).wait(1).to({graphics:mask_1_graphics_401,x:236.3,y:184.1}).wait(1).to({graphics:mask_1_graphics_402,x:236.3,y:184.1}).wait(1).to({graphics:mask_1_graphics_403,x:236.2,y:184.1}).wait(1).to({graphics:mask_1_graphics_404,x:236.2,y:184.1}).wait(1).to({graphics:mask_1_graphics_405,x:236.2,y:184.1}).wait(1).to({graphics:mask_1_graphics_406,x:236.2,y:184.1}).wait(1).to({graphics:mask_1_graphics_407,x:236.2,y:184.1}).wait(1).to({graphics:mask_1_graphics_408,x:236.2,y:184.1}).wait(1).to({graphics:mask_1_graphics_409,x:236.2,y:184.1}).wait(1).to({graphics:mask_1_graphics_410,x:236.2,y:184.1}).wait(1).to({graphics:mask_1_graphics_411,x:236.2,y:184.1}).wait(1).to({graphics:mask_1_graphics_412,x:236.2,y:184.1}).wait(1).to({graphics:mask_1_graphics_413,x:236.1,y:184.1}).wait(1).to({graphics:mask_1_graphics_414,x:236.1,y:184.1}).wait(1).to({graphics:mask_1_graphics_415,x:236.1,y:184.1}).wait(1).to({graphics:mask_1_graphics_416,x:236.1,y:184.1}).wait(1).to({graphics:mask_1_graphics_417,x:236.1,y:184.1}).wait(1).to({graphics:mask_1_graphics_418,x:236.1,y:184.1}).wait(1).to({graphics:mask_1_graphics_419,x:236.1,y:184.1}).wait(1).to({graphics:mask_1_graphics_420,x:236.1,y:184.1}).wait(1).to({graphics:mask_1_graphics_421,x:236.1,y:184.1}).wait(1).to({graphics:mask_1_graphics_422,x:236.1,y:184.1}).wait(1).to({graphics:mask_1_graphics_423,x:236,y:184.1}).wait(1).to({graphics:mask_1_graphics_424,x:236,y:184.1}).wait(1).to({graphics:mask_1_graphics_425,x:236,y:184.1}).wait(1).to({graphics:mask_1_graphics_426,x:236,y:184.1}).wait(1).to({graphics:mask_1_graphics_427,x:236,y:184.1}).wait(1).to({graphics:mask_1_graphics_428,x:236,y:184.1}).wait(1).to({graphics:mask_1_graphics_429,x:236,y:184.1}).wait(1).to({graphics:mask_1_graphics_430,x:236,y:184.1}).wait(1).to({graphics:mask_1_graphics_431,x:236,y:184.1}).wait(1).to({graphics:mask_1_graphics_432,x:236,y:184.1}).wait(1).to({graphics:mask_1_graphics_433,x:235.9,y:184.1}).wait(1).to({graphics:mask_1_graphics_434,x:235.9,y:184.1}).wait(1).to({graphics:mask_1_graphics_435,x:235.9,y:184.1}).wait(1).to({graphics:mask_1_graphics_436,x:235.9,y:184.1}).wait(1).to({graphics:mask_1_graphics_437,x:235.9,y:184.1}).wait(1).to({graphics:mask_1_graphics_438,x:235.9,y:184.1}).wait(1).to({graphics:mask_1_graphics_439,x:235.9,y:184.1}).wait(1).to({graphics:mask_1_graphics_440,x:235.9,y:184.1}).wait(1).to({graphics:mask_1_graphics_441,x:235.9,y:184.1}).wait(1).to({graphics:mask_1_graphics_442,x:235.9,y:184.1}).wait(1).to({graphics:mask_1_graphics_443,x:235.8,y:184.1}).wait(1).to({graphics:mask_1_graphics_444,x:235.8,y:184.1}).wait(1).to({graphics:mask_1_graphics_445,x:235.8,y:184.1}).wait(1).to({graphics:mask_1_graphics_446,x:235.8,y:184.1}).wait(1).to({graphics:mask_1_graphics_447,x:235.8,y:184.1}).wait(1).to({graphics:mask_1_graphics_448,x:235.8,y:184.1}).wait(1).to({graphics:mask_1_graphics_449,x:235.8,y:184.1}).wait(1).to({graphics:mask_1_graphics_450,x:235.8,y:184.1}).wait(1).to({graphics:mask_1_graphics_451,x:235.8,y:184.1}).wait(1).to({graphics:mask_1_graphics_452,x:235.8,y:184.1}).wait(1).to({graphics:mask_1_graphics_453,x:235.7,y:184.1}).wait(1).to({graphics:mask_1_graphics_454,x:235.7,y:184.1}).wait(1).to({graphics:mask_1_graphics_455,x:235.7,y:184.1}).wait(1).to({graphics:mask_1_graphics_456,x:235.7,y:184.1}).wait(1).to({graphics:mask_1_graphics_457,x:235.7,y:184.1}).wait(1).to({graphics:mask_1_graphics_458,x:235.7,y:184.1}).wait(1).to({graphics:mask_1_graphics_459,x:235.7,y:184.1}).wait(1).to({graphics:mask_1_graphics_460,x:235.7,y:184.1}).wait(1).to({graphics:mask_1_graphics_461,x:235.7,y:184.1}).wait(1).to({graphics:mask_1_graphics_462,x:235.7,y:184.1}).wait(1).to({graphics:mask_1_graphics_463,x:235.6,y:184.1}).wait(1).to({graphics:mask_1_graphics_464,x:235.6,y:184.1}).wait(1).to({graphics:mask_1_graphics_465,x:235.6,y:184.1}).wait(1).to({graphics:mask_1_graphics_466,x:235.6,y:184.1}).wait(1).to({graphics:mask_1_graphics_467,x:235.6,y:184.1}).wait(1).to({graphics:mask_1_graphics_468,x:235.6,y:184.1}).wait(1).to({graphics:mask_1_graphics_469,x:235.6,y:184.1}).wait(1).to({graphics:mask_1_graphics_470,x:235.6,y:184.1}).wait(1).to({graphics:mask_1_graphics_471,x:235.6,y:184.1}).wait(1).to({graphics:mask_1_graphics_472,x:235.6,y:184.1}).wait(1).to({graphics:mask_1_graphics_473,x:235.5,y:184.1}).wait(1).to({graphics:mask_1_graphics_474,x:235.5,y:184.1}).wait(1).to({graphics:mask_1_graphics_475,x:235.5,y:184.1}).wait(1).to({graphics:mask_1_graphics_476,x:235.5,y:184.1}).wait(1).to({graphics:mask_1_graphics_477,x:235.5,y:184.1}).wait(1).to({graphics:mask_1_graphics_478,x:235.5,y:184.1}).wait(1).to({graphics:mask_1_graphics_479,x:235.5,y:184.1}).wait(246));

	// 2
	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#000000").ss(25,1,1).p("A0ctjIaFAAQF9APESDuQElD/AAFnQAAFnklD+QkJDoltAVQglACgnAAQgrAAgrgDI2qAA");
	this.shape_144.setTransform(288,184.9);
	this.shape_144._off = true;

	var maskedShapeInstanceList = [this.shape_144];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_144).wait(160).to({_off:false},0).wait(565));

	// 1
	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#000000").ss(25,1,1).p("AAAgPIAAAg");
	this.shape_145.setTransform(156.3,99.7);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#000000").ss(25,1,1).p("AAAAdIAAg5");
	this.shape_146.setTransform(156.3,100.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#000000").ss(25,1,1).p("AAAApIAAhR");
	this.shape_147.setTransform(156.3,102.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#000000").ss(25,1,1).p("AAAA1IAAhp");
	this.shape_148.setTransform(156.3,103.4);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#000000").ss(25,1,1).p("AAABCIAAiC");
	this.shape_149.setTransform(156.3,104.6);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#000000").ss(25,1,1).p("AAABOIAAib");
	this.shape_150.setTransform(156.3,105.8);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#000000").ss(25,1,1).p("AAABaIAAiz");
	this.shape_151.setTransform(156.3,107.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#000000").ss(25,1,1).p("AAABmIAAjL");
	this.shape_152.setTransform(156.3,108.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#000000").ss(25,1,1).p("AAAByIAAjj");
	this.shape_153.setTransform(156.3,109.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#000000").ss(25,1,1).p("AAAB/IAAj8");
	this.shape_154.setTransform(156.3,110.7);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#000000").ss(25,1,1).p("AAACLIAAkV");
	this.shape_155.setTransform(156.3,111.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#000000").ss(25,1,1).p("AAACXIAAkt");
	this.shape_156.setTransform(156.3,113.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#000000").ss(25,1,1).p("AAACjIAAlF");
	this.shape_157.setTransform(156.3,114.4);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#000000").ss(25,1,1).p("AAACwIAAle");
	this.shape_158.setTransform(156.3,115.6);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#000000").ss(25,1,1).p("AAAC8IAAl3");
	this.shape_159.setTransform(156.3,116.8);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#000000").ss(25,1,1).p("AAADIIAAmP");
	this.shape_160.setTransform(156.3,118.1);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#000000").ss(25,1,1).p("AAADUIAAmn");
	this.shape_161.setTransform(156.3,119.3);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#000000").ss(25,1,1).p("AAADgIAAnA");
	this.shape_162.setTransform(156.3,120.5);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#000000").ss(25,1,1).p("AAADtIAAnZ");
	this.shape_163.setTransform(156.3,121.7);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#000000").ss(25,1,1).p("AAAD5IAAnx");
	this.shape_164.setTransform(156.3,123);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#000000").ss(25,1,1).p("AAAEFIAAoJ");
	this.shape_165.setTransform(156.3,124.2);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#000000").ss(25,1,1).p("AAAERIAAoi");
	this.shape_166.setTransform(156.3,125.4);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#000000").ss(25,1,1).p("AAAEeIAAo7");
	this.shape_167.setTransform(156.3,126.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#000000").ss(25,1,1).p("AAAEqIAApT");
	this.shape_168.setTransform(156.3,127.9);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#000000").ss(25,1,1).p("AAAE2IAApr");
	this.shape_169.setTransform(156.3,129.1);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#000000").ss(25,1,1).p("AAAFCIAAqD");
	this.shape_170.setTransform(156.3,130.3);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#000000").ss(25,1,1).p("AAAFOIAAqc");
	this.shape_171.setTransform(156.3,131.5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#000000").ss(25,1,1).p("AAAFbIAAq1");
	this.shape_172.setTransform(156.3,132.7);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#000000").ss(25,1,1).p("AAAFnIAArN");
	this.shape_173.setTransform(156.3,134);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#000000").ss(25,1,1).p("AAAFzIAArl");
	this.shape_174.setTransform(156.3,135.2);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#000000").ss(25,1,1).p("AAAF/IAAr+");
	this.shape_175.setTransform(156.3,136.4);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#000000").ss(25,1,1).p("AAAGMIAAsX");
	this.shape_176.setTransform(156.3,137.6);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#000000").ss(25,1,1).p("AAAGYIAAsv");
	this.shape_177.setTransform(156.3,138.9);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#000000").ss(25,1,1).p("AAAGkIAAtH");
	this.shape_178.setTransform(156.3,140.1);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#000000").ss(25,1,1).p("AAAGxIAAth");
	this.shape_179.setTransform(156.3,141.3);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#000000").ss(25,1,1).p("AAAG9IAAt5");
	this.shape_180.setTransform(156.3,142.5);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#000000").ss(25,1,1).p("AAAHJIAAuR");
	this.shape_181.setTransform(156.3,143.8);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#000000").ss(25,1,1).p("AAAHVIAAup");
	this.shape_182.setTransform(156.3,145);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#000000").ss(25,1,1).p("AAAHiIAAvC");
	this.shape_183.setTransform(156.3,146.2);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#000000").ss(25,1,1).p("AAAHtIAAva");
	this.shape_184.setTransform(156.3,147.4);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#000000").ss(25,1,1).p("AAAH6IAAvz");
	this.shape_185.setTransform(156.3,148.6);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#000000").ss(25,1,1).p("AAAIGIAAwL");
	this.shape_186.setTransform(156.3,149.9);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#000000").ss(25,1,1).p("AAAISIAAwj");
	this.shape_187.setTransform(156.3,151.1);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#000000").ss(25,1,1).p("AAAIfIAAw9");
	this.shape_188.setTransform(156.3,152.3);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#000000").ss(25,1,1).p("AAAIrIAAxV");
	this.shape_189.setTransform(156.3,153.5);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#000000").ss(25,1,1).p("AAAI3IAAxt");
	this.shape_190.setTransform(156.3,154.8);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#000000").ss(25,1,1).p("AAAJDIAAyF");
	this.shape_191.setTransform(156.3,156);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#000000").ss(25,1,1).p("AAAJQIAAye");
	this.shape_192.setTransform(156.3,157.2);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#000000").ss(25,1,1).p("AAAJcIAAy3");
	this.shape_193.setTransform(156.3,158.4);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#000000").ss(25,1,1).p("AAAJoIAAzP");
	this.shape_194.setTransform(156.3,159.7);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#000000").ss(25,1,1).p("AAAJ0IAAzn");
	this.shape_195.setTransform(156.3,160.9);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#000000").ss(25,1,1).p("AAAKBIAA0B");
	this.shape_196.setTransform(156.3,162.1);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#000000").ss(25,1,1).p("AAAKNIAA0Z");
	this.shape_197.setTransform(156.3,163.3);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#000000").ss(25,1,1).p("AAAKZIAA0x");
	this.shape_198.setTransform(156.3,164.6);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#000000").ss(25,1,1).p("AAAKlIAA1J");
	this.shape_199.setTransform(156.3,165.8);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#000000").ss(25,1,1).p("AAAKxIAA1h");
	this.shape_200.setTransform(156.3,167);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#000000").ss(25,1,1).p("AAAK+IAA16");
	this.shape_201.setTransform(156.3,168.2);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#000000").ss(25,1,1).p("AAALKIAA2T");
	this.shape_202.setTransform(156.3,169.4);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#000000").ss(25,1,1).p("AAALWIAA2r");
	this.shape_203.setTransform(156.3,170.7);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#000000").ss(25,1,1).p("AAALiIAA3D");
	this.shape_204.setTransform(156.3,171.9);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#000000").ss(25,1,1).p("AAALvIAA3d");
	this.shape_205.setTransform(156.3,173.1);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#000000").ss(25,1,1).p("AAAL7IAA31");
	this.shape_206.setTransform(156.3,174.3);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#000000").ss(25,1,1).p("AAAMHIAA4N");
	this.shape_207.setTransform(156.3,175.6);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#000000").ss(25,1,1).p("AAAMTIAA4l");
	this.shape_208.setTransform(156.3,176.8);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#000000").ss(25,1,1).p("AAAMfIAA4+");
	this.shape_209.setTransform(156.3,178);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#000000").ss(25,1,1).p("AAAMsIAA5X");
	this.shape_210.setTransform(156.3,179.2);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#000000").ss(25,1,1).p("AAAM4IAA5v");
	this.shape_211.setTransform(156.3,180.5);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#000000").ss(25,1,1).p("AAANEIAA6H");
	this.shape_212.setTransform(156.3,181.7);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#000000").ss(25,1,1).p("AAANRIAA6h");
	this.shape_213.setTransform(156.3,182.9);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#000000").ss(25,1,1).p("AAANdIAA65");
	this.shape_214.setTransform(156.3,184.1);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#000000").ss(25,1,1).p("AAANpIAA7R");
	this.shape_215.setTransform(156.3,185.4);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#000000").ss(25,1,1).p("AAAN1IAA7p");
	this.shape_216.setTransform(156.3,186.6);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#000000").ss(25,1,1).p("AAAOBIAA8B");
	this.shape_217.setTransform(156.3,187.8);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#000000").ss(25,1,1).p("AAAONIAA8a");
	this.shape_218.setTransform(156.3,189);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#000000").ss(25,1,1).p("AAAOaIAA8z");
	this.shape_219.setTransform(156.3,190.2);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#000000").ss(25,1,1).p("AAAOmIAA9L");
	this.shape_220.setTransform(156.3,191.5);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#000000").ss(25,1,1).p("AAAOyIAA9j");
	this.shape_221.setTransform(156.3,192.7);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#000000").ss(25,1,1).p("AAAO/IAA99");
	this.shape_222.setTransform(156.3,193.9);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#000000").ss(25,1,1).p("AAAPLIAA+V");
	this.shape_223.setTransform(156.3,195.1);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#000000").ss(25,1,1).p("AAAPXIAA+t");
	this.shape_224.setTransform(156.3,196.4);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#000000").ss(25,1,1).p("AAAPjIAA/F");
	this.shape_225.setTransform(156.3,197.6);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#000000").ss(25,1,1).p("AAAPwIAA/f");
	this.shape_226.setTransform(156.3,198.8);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#000000").ss(25,1,1).p("AAAP8IAA/3");
	this.shape_227.setTransform(156.3,200);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#000000").ss(25,1,1).p("AAAQIMAAAggP");
	this.shape_228.setTransform(156.3,201.3);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#000000").ss(25,1,1).p("AAAQUMAAAggn");
	this.shape_229.setTransform(156.3,202.5);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#000000").ss(25,1,1).p("AAAQhMAAAghB");
	this.shape_230.setTransform(156.3,203.7);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#000000").ss(25,1,1).p("AAAQtMAAAghZ");
	this.shape_231.setTransform(156.3,204.9);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#000000").ss(25,1,1).p("AAAQ5MAAAghx");
	this.shape_232.setTransform(156.3,206.1);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#000000").ss(25,1,1).p("AAARFMAAAgiJ");
	this.shape_233.setTransform(156.3,207.4);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#000000").ss(25,1,1).p("AAARRMAAAgih");
	this.shape_234.setTransform(156.3,208.6);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#000000").ss(25,1,1).p("AAAReMAAAgi7");
	this.shape_235.setTransform(156.3,209.8);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#000000").ss(25,1,1).p("AAARqMAAAgjT");
	this.shape_236.setTransform(156.3,211);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#000000").ss(25,1,1).p("AAAR2MAAAgjr");
	this.shape_237.setTransform(156.3,212.3);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#000000").ss(25,1,1).p("AAASCMAAAgkD");
	this.shape_238.setTransform(156.3,213.5);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#000000").ss(25,1,1).p("AAASPMAAAgkd");
	this.shape_239.setTransform(156.3,214.7);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#000000").ss(25,1,1).p("AAASbMAAAgk1");
	this.shape_240.setTransform(156.3,215.9);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#000000").ss(25,1,1).p("AAASnMAAAglN");
	this.shape_241.setTransform(156.3,217.2);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#000000").ss(25,1,1).p("AAASzMAAAgll");
	this.shape_242.setTransform(156.3,218.4);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#000000").ss(25,1,1).p("AAAS/MAAAgl+");
	this.shape_243.setTransform(156.3,219.6);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#000000").ss(25,1,1).p("AAATMMAAAgmX");
	this.shape_244.setTransform(156.3,220.8);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("#000000").ss(25,1,1).p("AAATYMAAAgmv");
	this.shape_245.setTransform(156.3,222.1);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#000000").ss(25,1,1).p("AAATkMAAAgnH");
	this.shape_246.setTransform(156.3,223.3);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("#000000").ss(25,1,1).p("AAATwMAAAgnf");
	this.shape_247.setTransform(156.3,224.5);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#000000").ss(25,1,1).p("AAAT9MAAAgn5");
	this.shape_248.setTransform(156.3,225.7);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#000000").ss(25,1,1).p("AAAUJMAAAgoR");
	this.shape_249.setTransform(156.3,226.9);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#000000").ss(25,1,1).p("AAAUVMAAAgop");
	this.shape_250.setTransform(156.3,228.2);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#000000").ss(25,1,1).p("AAAUhMAAAgpB");
	this.shape_251.setTransform(156.3,229.4);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#000000").ss(25,1,1).p("AAAUtMAAAgpa");
	this.shape_252.setTransform(156.3,230.6);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#000000").ss(25,1,1).p("AAAU6MAAAgpz");
	this.shape_253.setTransform(156.3,231.8);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#000000").ss(25,1,1).p("AAAVGMAAAgqL");
	this.shape_254.setTransform(156.3,233.1);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("#000000").ss(25,1,1).p("AAAVSMAAAgqj");
	this.shape_255.setTransform(156.3,234.3);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#000000").ss(25,1,1).p("AAAVfMAAAgq9");
	this.shape_256.setTransform(156.3,235.5);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("#000000").ss(25,1,1).p("AAAVrMAAAgrV");
	this.shape_257.setTransform(156.3,236.7);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#000000").ss(25,1,1).p("AAAV3MAAAgrt");
	this.shape_258.setTransform(156.3,238);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("#000000").ss(25,1,1).p("AAAWDMAAAgsF");
	this.shape_259.setTransform(156.3,239.2);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#000000").ss(25,1,1).p("AAAWQMAAAgsf");
	this.shape_260.setTransform(156.3,240.4);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("#000000").ss(25,1,1).p("AAAWcMAAAgs3");
	this.shape_261.setTransform(156.3,241.6);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#000000").ss(25,1,1).p("AAAWoMAAAgtP");
	this.shape_262.setTransform(156.3,242.8);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#000000").ss(25,1,1).p("AAAW0MAAAgtn");
	this.shape_263.setTransform(156.3,244.1);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#000000").ss(25,1,1).p("AAAXAMAAAgt/");
	this.shape_264.setTransform(156.3,245.3);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("#000000").ss(25,1,1).p("AAAXNMAAAguZ");
	this.shape_265.setTransform(156.3,246.5);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#000000").ss(25,1,1).p("AAAXZMAAAgux");
	this.shape_266.setTransform(156.3,247.7);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("#000000").ss(25,1,1).p("AAAXlMAAAgvJ");
	this.shape_267.setTransform(156.3,249);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#000000").ss(25,1,1).p("AAAXxMAAAgvh");
	this.shape_268.setTransform(156.3,250.2);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#000000").ss(25,1,1).p("AAAX+MAAAgv7");
	this.shape_269.setTransform(156.3,251.4);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#000000").ss(25,1,1).p("AAAYKMAAAgwT");
	this.shape_270.setTransform(156.3,252.6);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("#000000").ss(25,1,1).p("AAAYWMAAAgwr");
	this.shape_271.setTransform(156.3,253.9);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#000000").ss(25,1,1).p("AAAYiMAAAgxD");
	this.shape_272.setTransform(156.3,255.1);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("#000000").ss(25,1,1).p("AAAYvMAAAgxd");
	this.shape_273.setTransform(156.3,256.3);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#000000").ss(25,1,1).p("AAAY7MAAAgx1");
	this.shape_274.setTransform(156.3,257.5);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("#000000").ss(25,1,1).p("AAAZHMAAAgyN");
	this.shape_275.setTransform(156.3,258.8);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#000000").ss(25,1,1).p("AAAZTMAAAgyl");
	this.shape_276.setTransform(156.3,260);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f().s("#000000").ss(25,1,1).p("AAAZgMAAAgy+");
	this.shape_277.setTransform(156.3,261.2);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#000000").ss(25,1,1).p("AAAZsMAAAgzW");
	this.shape_278.setTransform(156.3,262.4);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f().s("#000000").ss(25,1,1).p("AAAZ4MAAAgzv");
	this.shape_279.setTransform(156.3,263.6);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#000000").ss(25,1,1).p("AAAaEMAAAg0H");
	this.shape_280.setTransform(156.3,264.9);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f().s("#000000").ss(25,1,1).p("AAAaQMAAAg0f");
	this.shape_281.setTransform(156.3,266.1);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("#000000").ss(25,1,1).p("AAAadMAAAg05");
	this.shape_282.setTransform(156.3,267.3);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f().s("#000000").ss(25,1,1).p("AAAapMAAAg1R");
	this.shape_283.setTransform(156.3,268.5);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("#000000").ss(25,1,1).p("AAAa1MAAAg1p");
	this.shape_284.setTransform(156.3,269.8);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f().s("#000000").ss(25,1,1).p("AAA7AMAAAA2B");
	this.shape_285.setTransform(156.3,271);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_145}]},9).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).to({state:[{t:this.shape_273}]},1).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_282}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).wait(576));

	// Base
	this.instance_5 = new lib.Symbol1("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(286.4,272.3);
	this.instance_5.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(725));

	// Background
	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_286.setTransform(275,275,3.373,2.543);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_287.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_287},{t:this.shape_286}]}).wait(725));

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