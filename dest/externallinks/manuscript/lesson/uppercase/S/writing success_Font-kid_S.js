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
	this.shape.graphics.f("#FFFFFF").s().p("AqYaEQmMiykCj7Qg2g2AAhFQAAhEAyg0QAwg0BCAAQA4AAAwAwQDaDRFbCcQGECwFbAAQF+AADkisQD1i/AAllQAAmZp9joIp+jTQmEiRjFi7Qj/j1AAl5QAAmjFvj3QEzjSGEAAQNvAAEiINIAXBXQAABHgyAvQgzAwhBAAQhVAAgwhTQjHllq2AAQkxAAjaCaQjaCZAADnQAAGZJ9DmIJ+DWQGJCQDBC7QD/D1AAF5QAAIamAEcQk+DrnbAAQmcAAnAjKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.2,-186.9,274.6,374);


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
	this.shape.graphics.f("#000000").s().p("AjXjAIAJAFIA0AbQAaAPAcAMQAbAMAaAFQAbAGAaAAQAcACAcgHQAZgHAagOIA1gcQAagOAYgPIjaGDg");
	this.shape.setTransform(1.6,-0.8,0.562,0.562,-92.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.9,-12.4,22.5,24.3);


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
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(165.4,-80.2,1,1,-122.3,0,0,-9.9,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-10,regY:-0.1,scaleX:1,scaleY:1,rotation:-143.7,guide:{path:[165.3,-80.1,163,-87,159.7,-93.5,155.6,-101.5,149.8,-108.3,143.1,-116.2,134.1,-121.4,133.2,-121.9,132.4,-122.4], orient:'auto'}},39).to({regX:-9.9,regY:-0.2,scaleX:1,scaleY:1,rotation:-208.6,guide:{path:[132.4,-122.4,124,-127,114.7,-129.1,104.1,-131.4,93.6,-128.9,88.5,-127.7,84.3,-125.1], orient:'auto'}},35).to({regX:-10,scaleX:1,scaleY:1,rotation:-248.4,guide:{path:[84.3,-125,79.6,-122.1,76.1,-117.3,72.1,-112,70,-105.9], orient:'auto'}},16).to({scaleX:1,scaleY:1,rotation:-293.6,guide:{path:[70,-106,68.8,-102.5,68.3,-98.8,66.8,-88.1,70.5,-78.1,71.4,-75.6,72.5,-73.2], orient:'auto'}},18).to({rotation:-304.6,guide:{path:[72.5,-73.1,75.8,-65.9,80.4,-59.5,85.3,-52.7,90.6,-46.2], orient:'auto'}},22).to({regY:-0.3,rotation:-309.1,guide:{path:[90.6,-46.2,91.4,-45.2,92.2,-44.3,98.1,-37.4,104.2,-30.4,108.4,-25.4,112.8,-20.7], orient:'auto'}},25).to({regY:-0.2,scaleX:1,scaleY:1,rotation:-309.6,guide:{path:[112.9,-20.7,114.9,-18.5,117,-16.3], orient:'auto'}},6).to({regY:-0.4,scaleX:1,scaleY:1,rotation:-309.9,guide:{path:[117,-16.2,117.8,-15.3,118.7,-14.5,119.1,-14.1,119.5,-13.7], orient:'auto'}},13).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_44 = new cjs.Graphics().p("Ap3wGQHbk7ItByQIuByE6HbQE6HbhyItQhyIunaE6g");
	var mask_graphics_45 = new cjs.Graphics().p("Ap/v+QHYk9IuBtQIvBuE9HZQE+HYhuItQhtIwnZE9g");
	var mask_graphics_46 = new cjs.Graphics().p("AqHv1QHWlBIuBpQIwBqFBHWQFBHWhqIuQhpIwnXFBg");
	var mask_graphics_47 = new cjs.Graphics().p("AqPvtQHTlEIwBlQIwBmFEHUQFEHThlIvQhmIxnTFEg");
	var mask_graphics_48 = new cjs.Graphics().p("AqXvkQHRlIIwBhQIxBiFHHRQFIHShhIvQhiIxnRFIg");
	var mask_graphics_49 = new cjs.Graphics().p("AqfvbQHPlLIwBdQIyBdFLHPQFLHPheIwQhdIynPFLg");
	var mask_graphics_50 = new cjs.Graphics().p("AqnvSQHNlPIxBZQIyBaFOHMQFOHMhZIxQhZIynMFPg");
	var mask_graphics_51 = new cjs.Graphics().p("AquvJQHJlSIyBVQIyBVFSHKQFRHKhUIxQhWIznJFRg");
	var mask_graphics_52 = new cjs.Graphics().p("Aq2vAQHHlVIyBQQIzBSFVHHQFVHHhRIyQhRIznHFVg");
	var mask_graphics_53 = new cjs.Graphics().p("Aq+u3QHFlYIzBMQIzBNFYHFQFYHFhNIyQhMI0nFFYg");
	var mask_graphics_54 = new cjs.Graphics().p("ArFuuQHClbIzBIQI0BJFbHCQFbHChIIzQhJI0nCFbg");
	var mask_graphics_55 = new cjs.Graphics().p("ArOujQG+lfI0BDQI0BFFgG/QFfG/hEIyQhEI1m/Fgg");
	var mask_graphics_56 = new cjs.Graphics().p("ArXuYQG7ljI0A/QI1A/FjG8QFjG8g/IzQg+I2m8Fjg");
	var mask_graphics_57 = new cjs.Graphics().p("ArguMQG4lnI1A5QI1A7FnG4QFnG5g6I0Qg6I2m5Fng");
	var mask_graphics_58 = new cjs.Graphics().p("ArpuBQG1lqI1A0QI2A2FqG1QFrG1g1I1Qg1I2m1Frg");
	var mask_graphics_59 = new cjs.Graphics().p("Aryt1QGyluI1AvQI2AxFvGyQFuGygwI0QgwI3myFug");
	var mask_graphics_60 = new cjs.Graphics().p("Ar7tpQGvlyI1AqQI3AsFyGvQFyGugrI1QgrI3mvFyg");
	var mask_graphics_61 = new cjs.Graphics().p("AsEteQGsl1I2AlQI2AnF2GrQF2GsgmI1QgmI3msF2g");
	var mask_graphics_62 = new cjs.Graphics().p("AsMtSQGol5I2AhQI3AhF5GpQF6GoghI1QghI4mpF5g");
	var mask_graphics_63 = new cjs.Graphics().p("AsVtGQGll9I2AcQI3AdF9GlQF9GlgcI1QgcI4mlF9g");
	var mask_graphics_64 = new cjs.Graphics().p("Ases5QGimBI2AXQI3AXGBGiQGAGhgXI2QgXI4mhGBg");
	var mask_graphics_65 = new cjs.Graphics().p("AsosrQGemFI2ARQI4ASGEGeQGFGdgRI2QgSI4mdGFg");
	var mask_graphics_66 = new cjs.Graphics().p("AsxsdQGZmJI3AMQI3AMGJGZQGJGagMI2QgMI4mZGJg");
	var mask_graphics_67 = new cjs.Graphics().p("As7sOQGVmNI3AFQI3AHGNGVQGNGWgGI2QgGI4mVGNg");
	var mask_graphics_68 = new cjs.Graphics().p("AtFr/QGSmRI2gBQI4ABGRGSQGRGRgBI2QAAI4mRGRg");
	var mask_graphics_69 = new cjs.Graphics().p("AtOrxQGNmVI2gGQI4gEGVGNQGVGNAFI2QAGI4mOGVg");
	var mask_graphics_70 = new cjs.Graphics().p("AtXriQGJmZI2gLQI3gLGZGJQGZGJALI2QALI4mJGYg");
	var mask_graphics_71 = new cjs.Graphics().p("AthrTQGFmcI2gSQI3gQGdGFQGdGFARI1QAQI4mEGcg");
	var mask_graphics_72 = new cjs.Graphics().p("AtqrDQGBmhI1gXQI3gWGhGBQGgGAAXI1QAXI4mBGgg");
	var mask_graphics_73 = new cjs.Graphics().p("Atzq0QF8mkI2gdQI2gcGkF9QGlF8AcI1QAdI3l9Gkg");
	var mask_graphics_74 = new cjs.Graphics().p("At8qkQF4moI1gjQI2ghGoF4QGoF4AiI0QAiI3l4Gog");
	var mask_graphics_75 = new cjs.Graphics().p("AuJqOQFymtI0grQI2gqGtFyQGuFyAqI0QAqI2lyGtg");
	var mask_graphics_76 = new cjs.Graphics().p("AuVp3QFrmzI0gzQI0gxGzFrQGzFsAyIzQAzI1lsGzg");
	var mask_graphics_77 = new cjs.Graphics().p("AuipgQFmm4Izg7QIzg6G4FlQG4FmA6IyQA7I0lmG4g");
	var mask_graphics_78 = new cjs.Graphics().p("AuupJQFfm9IzhDQIyhCG9FfQG8FfBDIxQBCI0leG8g");
	var mask_graphics_79 = new cjs.Graphics().p("Au6oyQFZnCIxhLQIxhKHCFZQHCFYBKIxQBLIylYHCg");
	var mask_graphics_80 = new cjs.Graphics().p("AvFoaQFRnHIxhTQIwhSHGFSQHHFSBTIvQBSIxlSHHg");
	var mask_graphics_81 = new cjs.Graphics().p("AvRoCQFLnMIwhbQIuhaHLFMQHMFLBaIuQBbIvlLHMg");
	var mask_graphics_82 = new cjs.Graphics().p("AvcnqQFFnQIthjQIthiHQFEQHRFFBiIsQBjIvlFHQg");
	var mask_graphics_83 = new cjs.Graphics().p("AvnnRQE+nVIshrQIrhqHVE+QHVE+BqIqQBrItk+HVg");
	var mask_graphics_84 = new cjs.Graphics().p("Avym5QE3nZIqhzQIqhyHZE3QHaE3ByIpQBzIrk3Hag");
	var mask_graphics_85 = new cjs.Graphics().p("Av+meQEwneIph8QIoh6HdEwQHeEvB8IoQB7IpkwHeg");
	var mask_graphics_86 = new cjs.Graphics().p("AwJmDQEoniIniFQImiDHiEoQHjEpCEIlQCEInkpHjg");
	var mask_graphics_87 = new cjs.Graphics().p("AwUloQEgnnIliNQIkiLHnEhQHnEgCNIlQCMIkkhHng");
	var mask_graphics_88 = new cjs.Graphics().p("AwflMQEZnsIiiVQIiiUHsEZQHrEZCVIiQCVIikZHsg");
	var mask_graphics_89 = new cjs.Graphics().p("AwqkwQESnwIgieQIfidHwESQHwESCdIfQCeIgkSHwg");
	var mask_graphics_90 = new cjs.Graphics().p("Aw0kUQEKn0IdimQIdimH1EKQH0EKClIdQCmIekJH0g");
	var mask_graphics_91 = new cjs.Graphics().p("Aw+j4QECn4IbivQIaitH5ECQH4ECCuIbQCuIakCH4g");
	var mask_graphics_92 = new cjs.Graphics().p("AxIjbQD7n8IYi3QIXi2H9D6QH8D6C2IYQC3IYj6H8g");
	var mask_graphics_93 = new cjs.Graphics().p("AxRi+QDyoBIWi/QIUi+IBDyQIADyC+IVQC/IVjyIBg");
	var mask_graphics_94 = new cjs.Graphics().p("AxaiiQDqoDITjIQIRjHIEDrQIEDqDHISQDHISjqIEg");
	var mask_graphics_95 = new cjs.Graphics().p("AxjiEQDjoIIPjQQIOjOIIDiQIHDiDQIPQDPIPjiIHg");
	var mask_graphics_96 = new cjs.Graphics().p("AxrhnQDaoLIMjYQILjXILDaQILDaDYIMQDXIMjaILg");
	var mask_graphics_97 = new cjs.Graphics().p("AxzhKQDSoOIIjgQIIjfIPDSQIODSDgIIQDfIJjSIOg");
	var mask_graphics_98 = new cjs.Graphics().p("Ax7gsQDKoRIFjpQIFjnIRDKQISDKDnIFQDoIFjKIRg");
	var mask_graphics_99 = new cjs.Graphics().p("AyCgOQDBoVICjwQIBjvIUDCQIVDBDvIBQDwIBjBIVg");
	var mask_graphics_100 = new cjs.Graphics().p("AyJAKQC5oXH+j4QH9j3IXC5QIYC6D3H9QD4H+i5IXg");
	var mask_graphics_101 = new cjs.Graphics().p("AyQAeQCxoZH6kAQH5j/IaCxQIbCxD/H5QEAH6ixIag");
	var mask_graphics_102 = new cjs.Graphics().p("AyXAyQCpocH2kIQH2kHIcCpQIdCpEIH1QEHH2ioIdg");
	var mask_graphics_103 = new cjs.Graphics().p("AydBHQCgofHykQQHykOIfCgQIgCgEPHxQEPHyigIgg");
	var mask_graphics_104 = new cjs.Graphics().p("AyjBbQCYohHtkXQHukXIiCYQIiCYEXHtQEXHtiYIig");
	var mask_graphics_105 = new cjs.Graphics().p("AyoBwQCPokHpkfQHqkeIjCPQIlCQEeHoQEfHpiPIlg");
	var mask_graphics_106 = new cjs.Graphics().p("AytCEQCGomHlkmQHlkmImCHQInCHElHkQEnHkiHIng");
	var mask_graphics_107 = new cjs.Graphics().p("AyyCZQB+ooHgkuQHgktIoB+QIpB+EtHgQEuHfh+Ipg");
	var mask_graphics_108 = new cjs.Graphics().p("Ay3CtQB2opHbk2QHck0IqB1QIqB2E1HbQE2Hbh2Iqg");
	var mask_graphics_109 = new cjs.Graphics().p("Ay7DCQBtorHXk9QHWk8IsBtQIsBtE9HWQE9HWhtIsg");
	var mask_graphics_110 = new cjs.Graphics().p("Ay/DXQBlotHRlEQHSlEItBlQIuBkFEHRQFEHRhkIvg");
	var mask_graphics_111 = new cjs.Graphics().p("AzCDsQBbovHNlLQHNlLIuBcQIwBcFLHMQFLHMhbIvg");
	var mask_graphics_112 = new cjs.Graphics().p("AzFEBQBTowHHlTQHIlRIwBTQIxBSFSHIQFSHGhTIxg");
	var mask_graphics_113 = new cjs.Graphics().p("AzIEWQBKoyHClZQHClZIyBKQIyBLFZHBQFZHChKIyg");
	var mask_graphics_114 = new cjs.Graphics().p("AzLErQBCozG8lgQG9lgIzBCQIzBBFgG9QFhG8hCIzg");
	var mask_graphics_115 = new cjs.Graphics().p("AzNFAQA5o0G3lnQG3lnI0A5QI0A5FnG3QFnG3g4I0g");
	var mask_graphics_116 = new cjs.Graphics().p("AzPFVQAwo0GxluQGyluI1AwQI1AwFuGxQFuGxgwI2g");
	var mask_graphics_117 = new cjs.Graphics().p("AzRFqQAoo1Grl1QGtl0I1AnQI2AoF0GrQF1GsgnI1g");
	var mask_graphics_118 = new cjs.Graphics().p("AzSF/QAfo1Gll8QGnl6I2AeQI2AeF7GmQF7GngeI1g");
	var mask_graphics_119 = new cjs.Graphics().p("AzTGVQAWo2GgmCQGgmBI2AVQI3AWGBGgQGCGggVI2g");
	var mask_graphics_120 = new cjs.Graphics().p("AzUGrQANo2GZmJQGbmII2AMQI3ANGIGZQGJGbgMI2g");
	var mask_graphics_121 = new cjs.Graphics().p("AzUHCQADo3GTmPQGUmPI2ADQI4ADGPGTQGPGUgDI2g");
	var mask_graphics_122 = new cjs.Graphics().p("AtNn0QGNmWI2gGQI4gGGVGMQGWGOAGI2MgqzAAeQgGo2GNmWg");
	var mask_graphics_123 = new cjs.Graphics().p("AtdnkQGHmcI2gPQI3gQGcGGQGcGGAQI3MgqyABLQgQo3GGmcg");
	var mask_graphics_124 = new cjs.Graphics().p("AtsnUQGAmiI2gYQI3gZGiF/QGjF/AZI2MgqxAB4QgZo2F/mjg");
	var mask_graphics_125 = new cjs.Graphics().p("At6nDQF5moI1giQI3giGoF4QGpF5AiI1MgquAClQgio2F4mpg");
	var mask_graphics_126 = new cjs.Graphics().p("AuImyQFymuI1gsQI2grGuFxQGvFyArI1MgqrADRQgro1Fxmvg");
	var mask_graphics_127 = new cjs.Graphics().p("AuVmgQFqm1I0g1QI1g0G1FqQG1FqA1I0MgqoAD/Qg0o1Fqm0g");
	var mask_graphics_128 = new cjs.Graphics().p("AuimPQFjm6I0g+QIzg+G7FjQG7FjA+IzMgqjAErQg+o0Fjm6g");
	var mask_graphics_129 = new cjs.Graphics().p("Auvl9QFcnAIzhHQIyhHHAFbQHBFcBHIyMgqdAFXQhHoyFbnAg");
	var mask_graphics_130 = new cjs.Graphics().p("Au7lrQFVnGIyhQQIwhRHGFVQHHFUBQIxMgqYAGEQhQoyFUnFg");
	var mask_graphics_131 = new cjs.Graphics().p("AvGlZQFNnLIwhaQIwhZHLFMQHMFOBZIvMgqRAGwQhZowFNnLg");
	var mask_graphics_132 = new cjs.Graphics().p("AvSlHQFGnQIvhjQIuhjHQFGQHSFFBiIuMgqJAHcQhjouFFnRg");
	var mask_graphics_133 = new cjs.Graphics().p("Avck0QE+nWIthsQIshrHWE9QHXE+BsIsMgqCAIJQhsotE+nWg");
	var mask_graphics_134 = new cjs.Graphics().p("AvmkhQE2nbIrh1QIrh1HbE2QHbE2B1IqMgp4AI1Qh1orE2nbg");
	var mask_graphics_135 = new cjs.Graphics().p("AvwkOQEvngIph+QIoh+HgEuQHhEuB+IoMgpvAJhQh+opEungg");
	var mask_graphics_136 = new cjs.Graphics().p("Av5j7QEnnlIniHQImiHHlEmQHmEnCHImMgplAKMQiHonEmnlg");
	var mask_graphics_137 = new cjs.Graphics().p("AwCjnQEfnqIliQQIkiQHpEeQHrEeCQIkMgpaAK4QiQolEenpg");
	var mask_graphics_138 = new cjs.Graphics().p("AwKjUQEXnuIiiZQIiiZHuEWQHvEWCZIiMgpOALiQiZoiEWnug");
	var mask_graphics_139 = new cjs.Graphics().p("AwSjAQEPnzIgiiQIfiiHyEOQH0EOCiIfMgpBAMOQiiogENnyg");
	var mask_graphics_140 = new cjs.Graphics().p("AwZisQEHn3IdirQIcirH3EGQH4EGCrIcMgo1AM5QiqodEFn3g");
	var mask_graphics_141 = new cjs.Graphics().p("AwgiVQD8n8Iai1QIZi1H8D8QH9D9C1IZMgolANpQi0oaD8n7g");
	var mask_graphics_142 = new cjs.Graphics().p("AwniBQDzoBIWi/QIWi/IADzQICDzC/IWMgoUAOaQi/oXDzoAg");
	var mask_graphics_143 = new cjs.Graphics().p("Awuh2QDqoFITjJQIRjJIFDpQIGDqDJISMgoCAPKQjJoTDpoFg");
	var mask_graphics_144 = new cjs.Graphics().p("AwzhqQDgoKIOjSQIOjTIKDfQIKDgDTIOMgnwAP6QjSoPDfoJg");
	var mask_graphics_145 = new cjs.Graphics().p("Aw4heQDWoOILjdQIKjcINDVQIODWDdILMgncAQpQjdoLDWoNg");
	var mask_graphics_146 = new cjs.Graphics().p("Aw9hSQDNoSIGjmQIGjnIRDMQITDMDmIGMgnIARZQjmoHDLoRg");
	var mask_graphics_147 = new cjs.Graphics().p("AxAhGQDCoVICjwQICjwIVDBQIWDCDwICMgmyASHQjxoCDCoVg");
	var mask_graphics_148 = new cjs.Graphics().p("AxDg5QC4oZH+j6QH8j6IZC4QIaC4D5H+MgmcAS1Qj6n+C4oYg");
	var mask_graphics_149 = new cjs.Graphics().p("AxGgsQCvodH5kDQH4kDIbCtQIdCuEEH5MgmGATjQkDn5Ctobg");
	var mask_graphics_150 = new cjs.Graphics().p("AxHgfQCkogH0kMQHzkNIfCjQIgCkENH0MgluAUQQkMnzCjofg");
	var mask_graphics_151 = new cjs.Graphics().p("AxIgSQCaoiHvkWQHtkWIjCZQIjCZEWHvMglVAU+QkWnvCZoig");
	var mask_graphics_152 = new cjs.Graphics().p("AxIgEQCPomHqkfQHokfIlCPQImCPEfHpMgk7AVrQkfnqCPokg");
	var mask_graphics_153 = new cjs.Graphics().p("AxIAIQCFomHkkpQHkkoInCEQIpCFEoHkMgkhAWXQkonkCEopg");
	var mask_graphics_154 = new cjs.Graphics().p("AxHAWQB7opHekxQHfkyIpB7QIrB6ExHeMgkFAXCQkyneB6org");
	var mask_graphics_155 = new cjs.Graphics().p("AxFAlQBwosHZk6QHZk7IrBwQItBwE6HZMgjpAXtQk7nZBwosg");
	var mask_graphics_156 = new cjs.Graphics().p("AxDAzQBmotHTlEQHTlDItBmQIvBlFDHTMgjNAYYQlDnTBlovg");
	var mask_graphics_157 = new cjs.Graphics().p("AxABCQBcowHNlLQHMlMIvBbQIxBbFMHMMgivAZCQlMnNBaowg");
	var mask_graphics_158 = new cjs.Graphics().p("Aw8BRQBRoxHGlVQHHlUIwBQQIzBRFUHGMgiRAZrQlUnGBQoyg");
	var mask_graphics_159 = new cjs.Graphics().p("Aw4BgQBHozHAldQHAlcIyBFQI0BHFdG/MghyAaUQldnABFozg");
	var mask_graphics_160 = new cjs.Graphics().p("AwyBvQA8o0G5llQG5llIzA7QI1A8FmG5MghSAa8Qllm5A7o1g");
	var mask_graphics_161 = new cjs.Graphics().p("AwtB/QAxo1GzltQGyluI1AxQI2AxFtGyMggxAbkQltmzAwo1g");
	var mask_graphics_162 = new cjs.Graphics().p("AwrCGQAto1GvlyQGwlxI1AsQI2AsFyGvMggjAb3QlxmwAro2g");
	var mask_graphics_163 = new cjs.Graphics().p("AwoCNQAoo1Gsl2QGsl1I1AnQI4AnF1GtMggTAcIQl2msAno3g");
	var mask_graphics_164 = new cjs.Graphics().p("AwlCVQAio2Gql5QGpl5I1AiQI4AiF5GpMggEAcbQl5mpAio3g");
	var mask_graphics_165 = new cjs.Graphics().p("AwiCcQAdo2Gml9QGml9I2AdQI4AeF9GmI/1ctQl8mmAdo4g");
	var mask_graphics_166 = new cjs.Graphics().p("AwfCkQAYo3GjmBQGjmAI2AYQI5AYGAGjI/lc/QmAmiAYo4g");
	var mask_graphics_167 = new cjs.Graphics().p("AwcCrQAUo3GfmEQGgmEI2ATQI5ATGEGgI/VdRQmEmgATo4g");
	var mask_graphics_168 = new cjs.Graphics().p("AwZCzQAPo4GcmIQGcmHI3AOQI5AOGIGdI/FdiQmImcAOo4g");
	var mask_graphics_169 = new cjs.Graphics().p("AwWC6QAKo3GZmMQGZmLI3AJQI6AKGLGZI+1d0QmMmZAJo5g");
	var mask_graphics_170 = new cjs.Graphics().p("AwSDCQAFo4GWmPQGVmPI4AFQI5AEGPGWI+leGQmPmWAEo5g");
	var mask_graphics_171 = new cjs.Graphics().p("AwODKQAAo4GSmTQGSmTI4AAQI5AAGTGSI+VeXQmTmSAAo5g");
	var mask_graphics_172 = new cjs.Graphics().p("AwLDSQgEo5GOmWQGPmWI4gFQI6gGGWGPI+FeoQmWmOgGo5g");
	var mask_graphics_173 = new cjs.Graphics().p("AwHDZQgJo4GLmaQGLmZI4gLQI6gKGaGLI90e6QmamLgLo6g");
	var mask_graphics_174 = new cjs.Graphics().p("AwEDhQgPo4GImdQGImeI4gPQI6gPGdGII9jfKQmdmHgQo6g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_graphics_44,x:150.3,y:-57.6}).wait(1).to({graphics:mask_graphics_45,x:150.3,y:-57.9}).wait(1).to({graphics:mask_graphics_46,x:150.3,y:-58.1}).wait(1).to({graphics:mask_graphics_47,x:150.3,y:-58.4}).wait(1).to({graphics:mask_graphics_48,x:150.3,y:-58.7}).wait(1).to({graphics:mask_graphics_49,x:150.3,y:-59}).wait(1).to({graphics:mask_graphics_50,x:150.3,y:-59.3}).wait(1).to({graphics:mask_graphics_51,x:150.3,y:-59.6}).wait(1).to({graphics:mask_graphics_52,x:150.2,y:-59.9}).wait(1).to({graphics:mask_graphics_53,x:150.2,y:-60.1}).wait(1).to({graphics:mask_graphics_54,x:150.2,y:-60.4}).wait(1).to({graphics:mask_graphics_55,x:150.2,y:-60.8}).wait(1).to({graphics:mask_graphics_56,x:150.2,y:-61.2}).wait(1).to({graphics:mask_graphics_57,x:150.2,y:-61.5}).wait(1).to({graphics:mask_graphics_58,x:150.2,y:-61.9}).wait(1).to({graphics:mask_graphics_59,x:150.2,y:-62.3}).wait(1).to({graphics:mask_graphics_60,x:150.2,y:-62.7}).wait(1).to({graphics:mask_graphics_61,x:150.1,y:-63.1}).wait(1).to({graphics:mask_graphics_62,x:150.1,y:-63.4}).wait(1).to({graphics:mask_graphics_63,x:150.1,y:-63.8}).wait(1).to({graphics:mask_graphics_64,x:150.1,y:-64.1}).wait(1).to({graphics:mask_graphics_65,x:150,y:-64.6}).wait(1).to({graphics:mask_graphics_66,x:150,y:-65.1}).wait(1).to({graphics:mask_graphics_67,x:150,y:-65.5}).wait(1).to({graphics:mask_graphics_68,x:150,y:-66}).wait(1).to({graphics:mask_graphics_69,x:150,y:-66.5}).wait(1).to({graphics:mask_graphics_70,x:150,y:-67}).wait(1).to({graphics:mask_graphics_71,x:150,y:-67.5}).wait(1).to({graphics:mask_graphics_72,x:150,y:-68}).wait(1).to({graphics:mask_graphics_73,x:150,y:-68.5}).wait(1).to({graphics:mask_graphics_74,x:150,y:-69}).wait(1).to({graphics:mask_graphics_75,x:150,y:-69.7}).wait(1).to({graphics:mask_graphics_76,x:150,y:-70.5}).wait(1).to({graphics:mask_graphics_77,x:150,y:-71.2}).wait(1).to({graphics:mask_graphics_78,x:150.1,y:-72}).wait(1).to({graphics:mask_graphics_79,x:150.1,y:-72.8}).wait(1).to({graphics:mask_graphics_80,x:150.1,y:-73.6}).wait(1).to({graphics:mask_graphics_81,x:150.1,y:-74.4}).wait(1).to({graphics:mask_graphics_82,x:150.1,y:-75.2}).wait(1).to({graphics:mask_graphics_83,x:150.1,y:-76}).wait(1).to({graphics:mask_graphics_84,x:150.1,y:-76.8}).wait(1).to({graphics:mask_graphics_85,x:150.1,y:-77.7}).wait(1).to({graphics:mask_graphics_86,x:150.1,y:-78.6}).wait(1).to({graphics:mask_graphics_87,x:150.2,y:-79.5}).wait(1).to({graphics:mask_graphics_88,x:150.2,y:-80.4}).wait(1).to({graphics:mask_graphics_89,x:150.2,y:-81.4}).wait(1).to({graphics:mask_graphics_90,x:150.2,y:-82.3}).wait(1).to({graphics:mask_graphics_91,x:150.2,y:-83.2}).wait(1).to({graphics:mask_graphics_92,x:150.2,y:-84.2}).wait(1).to({graphics:mask_graphics_93,x:150.3,y:-85.1}).wait(1).to({graphics:mask_graphics_94,x:150.3,y:-86.1}).wait(1).to({graphics:mask_graphics_95,x:150.3,y:-87.1}).wait(1).to({graphics:mask_graphics_96,x:150.3,y:-88}).wait(1).to({graphics:mask_graphics_97,x:150.3,y:-89}).wait(1).to({graphics:mask_graphics_98,x:150.3,y:-90}).wait(1).to({graphics:mask_graphics_99,x:150.3,y:-91}).wait(1).to({graphics:mask_graphics_100,x:150.3,y:-91.5}).wait(1).to({graphics:mask_graphics_101,x:150.3,y:-91.5}).wait(1).to({graphics:mask_graphics_102,x:150.3,y:-91.5}).wait(1).to({graphics:mask_graphics_103,x:150.3,y:-91.5}).wait(1).to({graphics:mask_graphics_104,x:150.3,y:-91.5}).wait(1).to({graphics:mask_graphics_105,x:150.3,y:-91.5}).wait(1).to({graphics:mask_graphics_106,x:150.3,y:-91.5}).wait(1).to({graphics:mask_graphics_107,x:150.3,y:-91.4}).wait(1).to({graphics:mask_graphics_108,x:150.3,y:-91.4}).wait(1).to({graphics:mask_graphics_109,x:150.3,y:-91.4}).wait(1).to({graphics:mask_graphics_110,x:150.3,y:-91.4}).wait(1).to({graphics:mask_graphics_111,x:150.3,y:-91.4}).wait(1).to({graphics:mask_graphics_112,x:150.3,y:-91.4}).wait(1).to({graphics:mask_graphics_113,x:150.3,y:-91.4}).wait(1).to({graphics:mask_graphics_114,x:150.3,y:-91.4}).wait(1).to({graphics:mask_graphics_115,x:150.3,y:-91.4}).wait(1).to({graphics:mask_graphics_116,x:150.3,y:-91.3}).wait(1).to({graphics:mask_graphics_117,x:150.3,y:-91.3}).wait(1).to({graphics:mask_graphics_118,x:150.3,y:-91.3}).wait(1).to({graphics:mask_graphics_119,x:150.3,y:-91.3}).wait(1).to({graphics:mask_graphics_120,x:150.3,y:-91.3}).wait(1).to({graphics:mask_graphics_121,x:150.3,y:-91.3}).wait(1).to({graphics:mask_graphics_122,x:150.3,y:-91.3}).wait(1).to({graphics:mask_graphics_123,x:150.3,y:-91.3}).wait(1).to({graphics:mask_graphics_124,x:150.3,y:-91.3}).wait(1).to({graphics:mask_graphics_125,x:150.2,y:-91.3}).wait(1).to({graphics:mask_graphics_126,x:150.1,y:-91.3}).wait(1).to({graphics:mask_graphics_127,x:150.1,y:-91.3}).wait(1).to({graphics:mask_graphics_128,x:150,y:-91.3}).wait(1).to({graphics:mask_graphics_129,x:149.8,y:-91.3}).wait(1).to({graphics:mask_graphics_130,x:149.7,y:-91.4}).wait(1).to({graphics:mask_graphics_131,x:149.5,y:-91.4}).wait(1).to({graphics:mask_graphics_132,x:149.4,y:-91.4}).wait(1).to({graphics:mask_graphics_133,x:149.2,y:-91.4}).wait(1).to({graphics:mask_graphics_134,x:148.9,y:-91.4}).wait(1).to({graphics:mask_graphics_135,x:148.7,y:-91.4}).wait(1).to({graphics:mask_graphics_136,x:148.5,y:-91.4}).wait(1).to({graphics:mask_graphics_137,x:148.2,y:-91.5}).wait(1).to({graphics:mask_graphics_138,x:147.9,y:-91.5}).wait(1).to({graphics:mask_graphics_139,x:147.6,y:-91.5}).wait(1).to({graphics:mask_graphics_140,x:147.3,y:-91.5}).wait(1).to({graphics:mask_graphics_141,x:146.9,y:-91.5}).wait(1).to({graphics:mask_graphics_142,x:146.5,y:-91.2}).wait(1).to({graphics:mask_graphics_143,x:146,y:-90}).wait(1).to({graphics:mask_graphics_144,x:145.6,y:-88.8}).wait(1).to({graphics:mask_graphics_145,x:145.1,y:-87.6}).wait(1).to({graphics:mask_graphics_146,x:144.6,y:-86.4}).wait(1).to({graphics:mask_graphics_147,x:144.1,y:-85.3}).wait(1).to({graphics:mask_graphics_148,x:143.5,y:-84.1}).wait(1).to({graphics:mask_graphics_149,x:143,y:-83}).wait(1).to({graphics:mask_graphics_150,x:142.4,y:-81.8}).wait(1).to({graphics:mask_graphics_151,x:141.8,y:-80.7}).wait(1).to({graphics:mask_graphics_152,x:141.1,y:-79.6}).wait(1).to({graphics:mask_graphics_153,x:140.5,y:-78.5}).wait(1).to({graphics:mask_graphics_154,x:139.8,y:-77.4}).wait(1).to({graphics:mask_graphics_155,x:139.1,y:-76.3}).wait(1).to({graphics:mask_graphics_156,x:138.4,y:-75.2}).wait(1).to({graphics:mask_graphics_157,x:137.7,y:-74.2}).wait(1).to({graphics:mask_graphics_158,x:136.9,y:-73.1}).wait(1).to({graphics:mask_graphics_159,x:136.2,y:-72.1}).wait(1).to({graphics:mask_graphics_160,x:135.4,y:-71.1}).wait(1).to({graphics:mask_graphics_161,x:134.5,y:-70}).wait(1).to({graphics:mask_graphics_162,x:134.2,y:-69.6}).wait(1).to({graphics:mask_graphics_163,x:133.8,y:-69.1}).wait(1).to({graphics:mask_graphics_164,x:133.4,y:-68.7}).wait(1).to({graphics:mask_graphics_165,x:133,y:-68.2}).wait(1).to({graphics:mask_graphics_166,x:132.6,y:-67.8}).wait(1).to({graphics:mask_graphics_167,x:132.2,y:-67.3}).wait(1).to({graphics:mask_graphics_168,x:131.8,y:-66.9}).wait(1).to({graphics:mask_graphics_169,x:131.4,y:-66.5}).wait(1).to({graphics:mask_graphics_170,x:131,y:-66}).wait(1).to({graphics:mask_graphics_171,x:130.6,y:-65.6}).wait(1).to({graphics:mask_graphics_172,x:130.2,y:-65.2}).wait(1).to({graphics:mask_graphics_173,x:129.8,y:-64.8}).wait(1).to({graphics:mask_graphics_174,x:129.2,y:-64.8}).wait(1));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("ACHJ8Qg6g4g4g6QhJhNhHhSQg9hGg6hFQg+hKg5hOQg+hVglhkQglhkAPhrQAPhnA/hTQBDhaBsgaQBqgYBpAXQBmAXBbA2QBaA0BDBPQA6BEApBQQAiBBAWBF");
	this.shape.setTransform(116.6,-66.8);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(44).to({_off:false},0).wait(131));

	// Layer 7 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AinCFIDElYICLBPIjEFYg");
	var mask_1_graphics_1 = new cjs.Graphics().p("AitCCIDElZICXBWIjEFZg");
	var mask_1_graphics_2 = new cjs.Graphics().p("AizB+IDElYICjBdIjEFYg");
	var mask_1_graphics_3 = new cjs.Graphics().p("Ai5B7IDElYICvBjIjEFYg");
	var mask_1_graphics_4 = new cjs.Graphics().p("Ai/B4IDElZIC7BqIjEFZg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AjFB0IDFlZIDGByIjFFYg");
	var mask_1_graphics_6 = new cjs.Graphics().p("AjLBwIDFlYIDSB4IjFFZg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AjRBtIDFlYIDeB/IjFFYg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AjYBqIDGlZIDqCGIjFFZg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AjdBmIDFlYID2CNIjFFYg");
	var mask_1_graphics_10 = new cjs.Graphics().p("AjjBjIDFlZIECCUIjFFZg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AjqBfIDGlYIEOCaIjFFZg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AjvBcIDFlYIEaChIjFFYg");
	var mask_1_graphics_13 = new cjs.Graphics().p("Aj1BZIDFlZIEmCoIjFFZg");
	var mask_1_graphics_14 = new cjs.Graphics().p("Aj8BVIDGlZIEyCwIjFFYg");
	var mask_1_graphics_15 = new cjs.Graphics().p("AkBBRIDFlYIE+C2IjFFZg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AkHBOIDFlYIFKC9IjFFYg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AkOBLIDGlZIFXDEIjGFZg");
	var mask_1_graphics_18 = new cjs.Graphics().p("AkUBHIDGlYIFjDLIjGFYg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AkaBEIDGlZIFvDSIjGFZg");
	var mask_1_graphics_20 = new cjs.Graphics().p("AkgBBIDGlZIF7DYIjGFZg");
	var mask_1_graphics_21 = new cjs.Graphics().p("AkmA9IDGlYIGHDfIjGFYg");
	var mask_1_graphics_22 = new cjs.Graphics().p("AksA5IDGlYIGTDmIjGFZg");
	var mask_1_graphics_23 = new cjs.Graphics().p("AkyA2IDGlZIGfDuIjGFYg");
	var mask_1_graphics_24 = new cjs.Graphics().p("Ak4AyIDGlYIGrD0IjGFZg");
	var mask_1_graphics_25 = new cjs.Graphics().p("Ak+AvIDGlYIG3D7IjGFYg");
	var mask_1_graphics_26 = new cjs.Graphics().p("AlEAsIDGlZIHDECIjGFZg");
	var mask_1_graphics_27 = new cjs.Graphics().p("AlKAoIDGlYIHPEJIjGFYg");
	var mask_1_graphics_28 = new cjs.Graphics().p("AlQAlIDGlZIHbEQIjFFZg");
	var mask_1_graphics_29 = new cjs.Graphics().p("AlWAiIDGlZIHnEWIjFFZg");
	var mask_1_graphics_30 = new cjs.Graphics().p("AlcAeIDFlZIH0EeIjFFYg");
	var mask_1_graphics_31 = new cjs.Graphics().p("AliAaIDGlYIH/EkIjFFZg");
	var mask_1_graphics_32 = new cjs.Graphics().p("AloAXIDGlZIILEsIjFFYg");
	var mask_1_graphics_33 = new cjs.Graphics().p("AluAUIDFlZIIYEyIjFFZg");
	var mask_1_graphics_34 = new cjs.Graphics().p("Al0AQIDGlYIIjE5IjFFYg");
	var mask_1_graphics_35 = new cjs.Graphics().p("Al6ANIDGlZIIvFAIjFFZg");
	var mask_1_graphics_36 = new cjs.Graphics().p("AmAAJIDFlYII8FHIjFFYg");
	var mask_1_graphics_37 = new cjs.Graphics().p("AmGAGIDGlZIJHFOIjFFZg");
	var mask_1_graphics_38 = new cjs.Graphics().p("AmMADIDGlZIJTFUIjFFZg");
	var mask_1_graphics_39 = new cjs.Graphics().p("AmSAAIDFlaIJgFbIjFFZg");
	var mask_1_graphics_40 = new cjs.Graphics().p("AmYgEIDFlZIJsFhIjFFag");
	var mask_1_graphics_41 = new cjs.Graphics().p("AmegHIDFlZIJ4FoIjFFZg");
	var mask_1_graphics_42 = new cjs.Graphics().p("AmkgKIDFlaIKEFvIjFFag");
	var mask_1_graphics_43 = new cjs.Graphics().p("AmqgOIDFlZIKQF2IjFFZg");
	var mask_1_graphics_44 = new cjs.Graphics().p("AmwgRIDFlaIKcF9IjFFag");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:169.8,y:-87.7}).wait(1).to({graphics:mask_1_graphics_1,x:169.2,y:-88.1}).wait(1).to({graphics:mask_1_graphics_2,x:168.6,y:-88.4}).wait(1).to({graphics:mask_1_graphics_3,x:168,y:-88.7}).wait(1).to({graphics:mask_1_graphics_4,x:167.4,y:-89.1}).wait(1).to({graphics:mask_1_graphics_5,x:166.8,y:-89.4}).wait(1).to({graphics:mask_1_graphics_6,x:166.2,y:-89.8}).wait(1).to({graphics:mask_1_graphics_7,x:165.6,y:-90.1}).wait(1).to({graphics:mask_1_graphics_8,x:165,y:-90.5}).wait(1).to({graphics:mask_1_graphics_9,x:164.4,y:-90.8}).wait(1).to({graphics:mask_1_graphics_10,x:163.8,y:-91.2}).wait(1).to({graphics:mask_1_graphics_11,x:163.2,y:-91.5}).wait(1).to({graphics:mask_1_graphics_12,x:162.6,y:-91.8}).wait(1).to({graphics:mask_1_graphics_13,x:162,y:-92.2}).wait(1).to({graphics:mask_1_graphics_14,x:161.4,y:-92.5}).wait(1).to({graphics:mask_1_graphics_15,x:160.8,y:-92.9}).wait(1).to({graphics:mask_1_graphics_16,x:160.2,y:-93.2}).wait(1).to({graphics:mask_1_graphics_17,x:159.5,y:-93.6}).wait(1).to({graphics:mask_1_graphics_18,x:158.9,y:-93.9}).wait(1).to({graphics:mask_1_graphics_19,x:158.3,y:-94.3}).wait(1).to({graphics:mask_1_graphics_20,x:157.7,y:-94.6}).wait(1).to({graphics:mask_1_graphics_21,x:157.1,y:-94.9}).wait(1).to({graphics:mask_1_graphics_22,x:156.5,y:-95.3}).wait(1).to({graphics:mask_1_graphics_23,x:155.9,y:-95.6}).wait(1).to({graphics:mask_1_graphics_24,x:155.3,y:-96}).wait(1).to({graphics:mask_1_graphics_25,x:154.7,y:-96.3}).wait(1).to({graphics:mask_1_graphics_26,x:154.1,y:-96.7}).wait(1).to({graphics:mask_1_graphics_27,x:153.5,y:-97}).wait(1).to({graphics:mask_1_graphics_28,x:152.9,y:-97.4}).wait(1).to({graphics:mask_1_graphics_29,x:152.3,y:-97.7}).wait(1).to({graphics:mask_1_graphics_30,x:151.7,y:-98}).wait(1).to({graphics:mask_1_graphics_31,x:151.1,y:-98.4}).wait(1).to({graphics:mask_1_graphics_32,x:150.5,y:-98.7}).wait(1).to({graphics:mask_1_graphics_33,x:149.9,y:-99.1}).wait(1).to({graphics:mask_1_graphics_34,x:149.3,y:-99.4}).wait(1).to({graphics:mask_1_graphics_35,x:148.7,y:-99.8}).wait(1).to({graphics:mask_1_graphics_36,x:148.1,y:-100.1}).wait(1).to({graphics:mask_1_graphics_37,x:147.5,y:-100.5}).wait(1).to({graphics:mask_1_graphics_38,x:146.9,y:-100.8}).wait(1).to({graphics:mask_1_graphics_39,x:146.3,y:-101.1}).wait(1).to({graphics:mask_1_graphics_40,x:145.7,y:-101.5}).wait(1).to({graphics:mask_1_graphics_41,x:145.1,y:-101.8}).wait(1).to({graphics:mask_1_graphics_42,x:144.5,y:-102.2}).wait(1).to({graphics:mask_1_graphics_43,x:143.9,y:-102.5}).wait(1).to({graphics:mask_1_graphics_44,x:143.3,y:-102.9}).wait(131));

	// Layer 8
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("ACHJ8Qg6g4g4g6QhJhNhHhSQg9hGg6hFQg+hKg5hOQg+hVglhkQglhkAPhrQAPhnA/hTQBDhaBsgaQBqgYBpAXQBmAXBbA2QBaA0BDBPQA6BEApBQQAiBBAWBF");
	this.shape_1.setTransform(116.6,-66.8);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(175));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(152.5,-108.9,22.3,42.5);


(lib.honeyflap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.honeybee();
	this.instance.parent = this;
	this.instance.setTransform(22.8,-143.7,0.422,0.422,0,0,0,-37.1,64.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMB8QgPgBgOgFIgSgIIgBgBIgBgBIgCAAIgBgBIgBgBIgCgBIgBAAIgBgBIgBgBIgBgBIgBgBIgBAAIgBgBIgBgBIgBgBIgBAAIgBgBIgBgBIgBgBIgBgBIgBgBIgBAAIgBgBIgBgBIgBgBIgBgBIAAAAIgBgBIgBgBIgBgBIAAgBIgBgBIgBAAIgBgBIAAgBIgBgBIgBgBIgBgBIAAgBIgBAAIgBgBIAAgBIgBgBIgBgBIAAgBIgBAAIAAgBIgBgBIAAgBIgBgBIgBgBIAAgBIgBgBIAAAAIgBgBIAAgBIgBgBIAAgBIgBgBIgBgCIgBgBIgBgCIAAgBIAAgBIgBgBIAAgBIgBAAIAAgBIgBgBIAAgBIAAgBIgBgBIAAgBIAAgBIgBgBIAAgBIAAAAIgBgBIAAgBIAAgBIgBgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAAAIgBgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAgCIgBgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIgBgBIAAgBIABgBIgBAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIgBAAIABgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIABgBIABgBIAAgBIAAgBIABgBIAAgBIABgBIABgBIAAgBIABgBIAAgBIABgBIABgBIABgBIAAgCIABgBIABgBIAAgBIABgBIABgBIABgBIABgBIAAgBIABgBIABgBIABgBIABgBIABgBIADgEIANgLQAGgGAIgEIAOgHIAQgGIAPgDIAPgBQAHAAAIABIARADQAHABAHADIAQAHIAEADIABAAIABABIACABIABABIABAAIABABIABABIABABIABABIABAAIABABIABABIABABIACAAIAAABIABABIABABIABABIABABIABAAIABABIABABIABABIAAABIABABIABAAIABABIABABIAAABIABABIABAAIABABIAAABIABABIABABIAAABIABABIABAAIAAABIABABIABABIAAABIABABIABABIAAAAIABABIABABIAAABIAAABIABABIABABIAAAAIABABIAAABIABABIAAABIABABIAAABIABABIAAAAIAAABIABABIAAABIABABIAAABIABABIAAABIAAABIABAAIAAABIABABIAAABIAAABIABABIAAABIAAABIABABIAAABIAAAAIABABIAAABIAAABIAAABIABABIAAABIAAABIABABIAAABIAAABIAAAAIAAABIABABIAAABIAAABIAAABIAAABIABABIAAABIAAABIAAABIAAABIAAAAIABABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIABABIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIgBABIABABIgBABIAAAAIAAABIAAABIAAABIAAABIAAABIAAABIgBABIAAABIAAABIAAABIAAABIgBABIAAABIAAABIAAABIgBABIAAABIAAABIAAABIgBABIAAABIAAABIAAABIgBABIAAABIAAABIgBABIAAABIgBABIAAABIAAABIgBABIAAABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIgBABIAAACIgBABIgBABIgBABIAAABIgBABIgBABIAAABIgBABIgBABIgBABIgBABIAAABIgBABIgBABIgBABIgBACIgBABIgBABIgBABIgBABIgBABIgBABIgBABIgCABIgJAJQgSANgWAHQgRAFgSAAIgNgBg");
	this.shape.setTransform(22.4,-142.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-215.3,105.5,85);


// stage content:
(lib.writingsuccess_Fontkid_S = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_625 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(625).call(this.frame_625).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(377.8,145.1,0.999,0.999,0,-8.5,171.5,22.4,-144);
	this.instance._off = true;

	this.instance_1 = new lib.honeybee();
	this.instance_1.parent = this;
	this.instance_1.setTransform(149.7,380,0.421,0.421,0,-8.5,171.5,-37.1,64.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({scaleX:1,scaleY:1,skewX:-8.3,skewY:171.7,guide:{path:[377.4,145.5,365.3,130.1,353.1,121.2,342.9,113.8,328.6,108.2]}},36).to({guide:{path:[328.5,108.2,325.3,106.9,321.9,105.7,291.9,95.6,265.7,98.8,239.8,101.9,214.3,118.4]}},54).to({regX:22.3,regY:-143.9,guide:{path:[214.3,118.3,213.6,118.8,212.8,119.3,191.3,133.6,185.2,156.3,179.1,179,191.1,200.8,193.3,204.8,196,208.5]}},60).to({guide:{path:[196,208.6,208.9,226.5,232.8,238.9,243.5,244.4,254.8,247.5]}},57).to({regX:22.2,scaleX:1,scaleY:1,guide:{path:[254.8,247.5,255.6,247.7,256.4,247.9,268.6,251.1,285.3,258.1,296,262.6,307.8,266.9]}},39).to({regY:-143.8,guide:{path:[307.8,266.8,314.4,269.2,321.3,271.6,337.1,277.1,347.2,281.9,372.8,294.3,385.5,314.3,397.1,332.7,397.9,351]}},80).to({guide:{path:[397.8,351,398.9,374.6,382.1,398.1,367.9,417.9,346.4,428.8]}},60).to({regY:-143.7,scaleX:1,scaleY:1,guide:{path:[346.3,428.9,341.9,431.1,337.2,433,308.5,444.3,276.3,438.5,256.8,435.1,238.1,428.6]}},55).to({regX:22.4,regY:-144,scaleX:1,scaleY:1,skewX:-8.5,skewY:171.5,guide:{path:[238.2,428.6,193.7,413.2,153.2,381]}},60).to({_off:true},11).wait(105));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(521).to({_off:false},0).to({guide:{path:[150.1,379.8,210.5,361.1,239.4,417.1,244,426.2,242.2,437.3,233.4,492.1,269.9,522,309.3,554.4,344.5,589.7,355.8,601,360.7,617.5,377.3,673.3,404.3,724.7,423.5,761.1,439.5,797.3]}},104).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(150.8,379.7,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},501).wait(116));

	// ar
	this.instance_2 = new lib.ar2("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(296.8,193.5,1,1,-29.7,0,0,116.2,-60.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(617));

	// Layer 7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_450 = new cjs.Graphics().p("EAOeAjrIFnptIBHAqIlmJtg");
	var mask_graphics_451 = new cjs.Graphics().p("AjeEdIFlpsIBYAzIllJsg");
	var mask_graphics_452 = new cjs.Graphics().p("AjnEYIFmpsIBpA8IlmJsg");
	var mask_graphics_453 = new cjs.Graphics().p("AjvEUIFmpsIB5BFIlmJsg");
	var mask_graphics_454 = new cjs.Graphics().p("Aj3EPIFlpsICKBOIllJsg");
	var mask_graphics_455 = new cjs.Graphics().p("Aj/ELIFlpsICbBXIlmJsg");
	var mask_graphics_456 = new cjs.Graphics().p("AkIEHIFmpsICrBgIlmJsg");
	var mask_graphics_457 = new cjs.Graphics().p("AkQECIFmpsIC7BpIlmJsg");
	var mask_graphics_458 = new cjs.Graphics().p("AkYD9IFlpsIDMBzIllJsg");
	var mask_graphics_459 = new cjs.Graphics().p("AkgD5IFlpsIDcB7IllJsg");
	var mask_graphics_460 = new cjs.Graphics().p("AkpD0IFmpsIDtCFIlmJsg");
	var mask_graphics_461 = new cjs.Graphics().p("AkxDwIFlpsID+CNIllJsg");
	var mask_graphics_462 = new cjs.Graphics().p("Ak5DrIFlpsIEOCXIllJsg");
	var mask_graphics_463 = new cjs.Graphics().p("AlCDnIFmpsIEfCfIlmJsg");
	var mask_graphics_464 = new cjs.Graphics().p("AlKDiIFmpsIEvCpIlmJsg");
	var mask_graphics_465 = new cjs.Graphics().p("AlSDdIFlpsIFACzIllJsg");
	var mask_graphics_466 = new cjs.Graphics().p("AlaDZIFlpsIFRC7IlmJsg");
	var mask_graphics_467 = new cjs.Graphics().p("AljDUIFmpsIFhDEIlmJtg");
	var mask_graphics_468 = new cjs.Graphics().p("AlrDQIFnpsIFwDNIlmJsg");
	var mask_graphics_469 = new cjs.Graphics().p("AlzDLIFmpsIGBDXIlmJsg");
	var mask_graphics_470 = new cjs.Graphics().p("Al8DHIFnpsIGSDfIlnJsg");
	var mask_graphics_471 = new cjs.Graphics().p("AmEDCIFnpsIGiDpIlnJsg");
	var mask_graphics_472 = new cjs.Graphics().p("AmMC+IFnpsIGyDxIlnJsg");
	var mask_graphics_473 = new cjs.Graphics().p("AmUC5IFmpsIHED7IlnJsg");
	var mask_graphics_474 = new cjs.Graphics().p("AmdC1IFnpsIHUEDIlnJsg");
	var mask_graphics_475 = new cjs.Graphics().p("AmlCwIFmpsIHlENIlnJsg");
	var mask_graphics_476 = new cjs.Graphics().p("AmtCsIFmpsIH1EVIlmJsg");
	var mask_graphics_477 = new cjs.Graphics().p("Am1CnIFmpsIIFEfIlmJsg");
	var mask_graphics_478 = new cjs.Graphics().p("Am+CiIFnpsIIWEpIlnJsg");
	var mask_graphics_479 = new cjs.Graphics().p("AnGCeIFmpsIInExIlmJsg");
	var mask_graphics_480 = new cjs.Graphics().p("AnPCZIFnpsII3E7IlmJsg");
	var mask_graphics_481 = new cjs.Graphics().p("AnWCVIFmpsIJIFDIlnJsg");
	var mask_graphics_482 = new cjs.Graphics().p("AnfCQIFmpsIJZFNIlnJsg");
	var mask_graphics_483 = new cjs.Graphics().p("AnnCMIFmpsIJpFVIlmJsg");
	var mask_graphics_484 = new cjs.Graphics().p("AnwCHIFnpsIJ6FfIlnJsg");
	var mask_graphics_485 = new cjs.Graphics().p("An4CDIFnpsIKKFoIlnJsg");
	var mask_graphics_486 = new cjs.Graphics().p("AoAB+IFmpsIKbFxIlmJsg");
	var mask_graphics_487 = new cjs.Graphics().p("AoIB5IFmpsIKrF7IlmJsg");
	var mask_graphics_488 = new cjs.Graphics().p("AoRB1IFnpsIK8GDIlnJsg");
	var mask_graphics_489 = new cjs.Graphics().p("AoZBwIFnpsILMGMIlmJsg");
	var mask_graphics_490 = new cjs.Graphics().p("AohBsIFmpsILdGVIlnJsg");
	var mask_graphics_491 = new cjs.Graphics().p("AoqBnIFnpsILtGfIlmJsg");
	var mask_graphics_492 = new cjs.Graphics().p("AoyBjIFnpsIL+GnIlnJsg");
	var mask_graphics_493 = new cjs.Graphics().p("Ao6BeIFnpsIMOGxIlnJsg");
	var mask_graphics_494 = new cjs.Graphics().p("ApCBZIFmpsIMfG6IlmJsg");
	var mask_graphics_495 = new cjs.Graphics().p("ApLBVIFnpsIMwHDIlnJsg");
	var mask_graphics_496 = new cjs.Graphics().p("ApTBQIFnpsINAHNIlnJsg");
	var mask_graphics_497 = new cjs.Graphics().p("ApbBMIFmpsINRHVIlmJsg");
	var mask_graphics_498 = new cjs.Graphics().p("ApjBIIFmpsINiHeIlnJsg");
	var mask_graphics_499 = new cjs.Graphics().p("ApsBDIFnpsINxHnIlmJsg");
	var mask_graphics_500 = new cjs.Graphics().p("Ap0A+IFnpsIOCHxIlnJsg");
	var mask_graphics_501 = new cjs.Graphics().p("Ap8A6IFmpsIOTH5IlmJsg");
	var mask_graphics_502 = new cjs.Graphics().p("AqEA1IFmpsIOjIDIlmJsg");
	var mask_graphics_503 = new cjs.Graphics().p("AqNAxIFmpsIO1IMIlnJsg");
	var mask_graphics_504 = new cjs.Graphics().p("AqVAsIFmpsIPFIVIlnJsg");
	var mask_graphics_505 = new cjs.Graphics().p("AqdAoIFmpsIPVIeIlmJsg");
	var mask_graphics_506 = new cjs.Graphics().p("AqmAjIFnpsIPmInIlnJsg");
	var mask_graphics_507 = new cjs.Graphics().p("AquAfIFmptIP3IwIlnJsg");
	var mask_graphics_508 = new cjs.Graphics().p("Aq2AaIFmpsIQHI5IlmJsg");
	var mask_graphics_509 = new cjs.Graphics().p("Aq+AVIFmpsIQXJDIlmJsg");
	var mask_graphics_510 = new cjs.Graphics().p("AhJbFIFmpsIQsJNIlmJtg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(450).to({graphics:mask_graphics_450,x:135.6,y:232.5}).wait(1).to({graphics:mask_graphics_451,x:249,y:431.4}).wait(1).to({graphics:mask_graphics_452,x:248.1,y:430.9}).wait(1).to({graphics:mask_graphics_453,x:247.3,y:430.5}).wait(1).to({graphics:mask_graphics_454,x:246.5,y:430}).wait(1).to({graphics:mask_graphics_455,x:245.6,y:429.5}).wait(1).to({graphics:mask_graphics_456,x:244.8,y:429.1}).wait(1).to({graphics:mask_graphics_457,x:243.9,y:428.6}).wait(1).to({graphics:mask_graphics_458,x:243.1,y:428.1}).wait(1).to({graphics:mask_graphics_459,x:242.3,y:427.7}).wait(1).to({graphics:mask_graphics_460,x:241.4,y:427.2}).wait(1).to({graphics:mask_graphics_461,x:240.6,y:426.8}).wait(1).to({graphics:mask_graphics_462,x:239.7,y:426.3}).wait(1).to({graphics:mask_graphics_463,x:238.9,y:425.8}).wait(1).to({graphics:mask_graphics_464,x:238.1,y:425.4}).wait(1).to({graphics:mask_graphics_465,x:237.2,y:424.9}).wait(1).to({graphics:mask_graphics_466,x:236.4,y:424.5}).wait(1).to({graphics:mask_graphics_467,x:235.5,y:424}).wait(1).to({graphics:mask_graphics_468,x:234.7,y:423.5}).wait(1).to({graphics:mask_graphics_469,x:233.9,y:423.1}).wait(1).to({graphics:mask_graphics_470,x:233,y:422.6}).wait(1).to({graphics:mask_graphics_471,x:232.2,y:422.2}).wait(1).to({graphics:mask_graphics_472,x:231.4,y:421.7}).wait(1).to({graphics:mask_graphics_473,x:230.5,y:421.2}).wait(1).to({graphics:mask_graphics_474,x:229.7,y:420.8}).wait(1).to({graphics:mask_graphics_475,x:228.9,y:420.3}).wait(1).to({graphics:mask_graphics_476,x:228,y:419.9}).wait(1).to({graphics:mask_graphics_477,x:227.2,y:419.4}).wait(1).to({graphics:mask_graphics_478,x:226.3,y:418.9}).wait(1).to({graphics:mask_graphics_479,x:225.5,y:418.5}).wait(1).to({graphics:mask_graphics_480,x:224.7,y:418}).wait(1).to({graphics:mask_graphics_481,x:223.8,y:417.5}).wait(1).to({graphics:mask_graphics_482,x:223,y:417.1}).wait(1).to({graphics:mask_graphics_483,x:222.1,y:416.6}).wait(1).to({graphics:mask_graphics_484,x:221.3,y:416.2}).wait(1).to({graphics:mask_graphics_485,x:220.4,y:415.7}).wait(1).to({graphics:mask_graphics_486,x:219.6,y:415.3}).wait(1).to({graphics:mask_graphics_487,x:218.8,y:414.8}).wait(1).to({graphics:mask_graphics_488,x:217.9,y:414.3}).wait(1).to({graphics:mask_graphics_489,x:217.1,y:413.9}).wait(1).to({graphics:mask_graphics_490,x:216.3,y:413.4}).wait(1).to({graphics:mask_graphics_491,x:215.4,y:412.9}).wait(1).to({graphics:mask_graphics_492,x:214.6,y:412.5}).wait(1).to({graphics:mask_graphics_493,x:213.8,y:412}).wait(1).to({graphics:mask_graphics_494,x:212.9,y:411.6}).wait(1).to({graphics:mask_graphics_495,x:212.1,y:411.1}).wait(1).to({graphics:mask_graphics_496,x:211.2,y:410.6}).wait(1).to({graphics:mask_graphics_497,x:210.4,y:410.2}).wait(1).to({graphics:mask_graphics_498,x:209.6,y:409.7}).wait(1).to({graphics:mask_graphics_499,x:208.7,y:409.2}).wait(1).to({graphics:mask_graphics_500,x:207.9,y:408.8}).wait(1).to({graphics:mask_graphics_501,x:207,y:408.3}).wait(1).to({graphics:mask_graphics_502,x:206.2,y:407.9}).wait(1).to({graphics:mask_graphics_503,x:205.4,y:407.4}).wait(1).to({graphics:mask_graphics_504,x:204.5,y:407}).wait(1).to({graphics:mask_graphics_505,x:203.7,y:406.5}).wait(1).to({graphics:mask_graphics_506,x:202.8,y:406}).wait(1).to({graphics:mask_graphics_507,x:202,y:405.6}).wait(1).to({graphics:mask_graphics_508,x:201.2,y:405.1}).wait(1).to({graphics:mask_graphics_509,x:200.3,y:404.6}).wait(1).to({graphics:mask_graphics_510,x:135.3,y:232.3}).wait(116));

	// 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(25,1,1).p("Ay6R7QInGtKPB1QFCA6EfhyQEVhuCrjuQEqmikImkQh/jIkAh8Qhlgwieg3QjChAhrglQj1hUg6gVQimg9hyg7QkhiWiAjnQh4jaA9jjQA9jjDXiPQEHitEKghQEGggErBmQC6BAB+BbQB8BaB7Ce");
	this.shape_1.setTransform(276.8,269.2);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(450).to({_off:false},0).wait(176));

	// Layer 5 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_255 = new cjs.Graphics().p("A4WSUQiOuEIYrhQIXrhODiPQOEiPLiIXMgoZA3oQrhoXiQuEg");
	var mask_1_graphics_256 = new cjs.Graphics().p("A4lSBQiCuGIgrZQIgrbOEiEQOHiELbIgMgpEA3IQrbogiFuGg");
	var mask_1_graphics_257 = new cjs.Graphics().p("A4zRvQh4uIIprTQIqrUOFh4QOJh5LUIpMgpwA2nQrUoph5uHg");
	var mask_1_graphics_258 = new cjs.Graphics().p("A5BRcQhtuJIyrMQIzrNOGhuQOKhtLNIyMgqaA2GQrNoyhuuJg");
	var mask_1_graphics_259 = new cjs.Graphics().p("A5PRKQhhuKI7rGQI7rGOIhiQOLhjLGI7MgrEA1lQrHo7hjuKg");
	var mask_1_graphics_260 = new cjs.Graphics().p("A5cQ3QhXuLJEq+QJEq/OJhXQOMhYK/JEMgruA1CQq/pEhYuLg");
	var mask_1_graphics_261 = new cjs.Graphics().p("A5pQlQhLuMJMq3QJMq4OLhMQONhMK4JMMgsYA0fQq4pMhNuMg");
	var mask_1_graphics_262 = new cjs.Graphics().p("A51QTQhAuNJUqwQJVqwOLhBQOOhCKxJVMgtBAz9QqwpVhCuNg");
	var mask_1_graphics_263 = new cjs.Graphics().p("A6BQBQg1uOJdqoQJdqpOMg2QOPg2KpJdMgtpAzZQqqpdg2uOg");
	var mask_1_graphics_264 = new cjs.Graphics().p("A6NPvQgpuPJlqgQJmqiOMgrQOPgqKiJlMguSAy1QqhpmgsuOg");
	var mask_1_graphics_265 = new cjs.Graphics().p("A6YPdQgeuPJuqZQJtqaONggQOQgfKaJuMgu5AyQQqapughuPg");
	var mask_1_graphics_266 = new cjs.Graphics().p("A6iPLQgUuPJ2qRQJ2qTOOgUQOPgUKTJ2MgvhAxqQqSp2gVuPg");
	var mask_1_graphics_267 = new cjs.Graphics().p("A6sO6QgIuQJ9qJQJ+qLOOgJQOQgJKLJ+MgwIAxFQqLp+gJuPg");
	var mask_1_graphics_268 = new cjs.Graphics().p("A62OoQADuPKGqCQKGqDONACQOQADKDKFMgwuAwfQqCqGABuPg");
	var mask_1_graphics_269 = new cjs.Graphics().p("A6/OXQAOuPKOp6QKNp7OOANQOQAOJ7KNMgxUAv5Qp7qOANuPg");
	var mask_1_graphics_270 = new cjs.Graphics().p("A7IOGQAZuOKWpzQKVpzOOAZQOPAYJzKWMgx5AvRQpzqVAYuPg");
	var mask_1_graphics_271 = new cjs.Graphics().p("A7QN0QAkuNKdprQKepqOMAjQOQAkJqKdMgyeAuqQpqqdAjuPg");
	var mask_1_graphics_272 = new cjs.Graphics().p("A7YNjQAwuNKkpiQKlpiOMAvQOPAvJiKkMgzCAuCQpiqlAuuOg");
	var mask_1_graphics_273 = new cjs.Graphics().p("A7gNSQA7uMKtpaQKspaOLA6QOPA7JZKsMgzmAtZQpaqsA5uOg");
	var mask_1_graphics_274 = new cjs.Graphics().p("A7nNCQBHuMKzpRQK0pSOKBGQOOBFJRKzMg0KAsxQpRq0BEuMg");
	var mask_1_graphics_275 = new cjs.Graphics().p("A7tMxQBRuLK7pIQK7pJOKBQQOMBRJJK6Mg0tAsHQpJq6BQuMg");
	var mask_1_graphics_276 = new cjs.Graphics().p("A7zMhQBcuKLCpAQLCpAOJBbQOLBcJBLCMg1QArdQpArCBbuKg");
	var mask_1_graphics_277 = new cjs.Graphics().p("A75MQQBouILJo4QLJo3OHBnQOLBmI3LJMg1xAq0Qo4rJBmuKg");
	var mask_1_graphics_278 = new cjs.Graphics().p("A7+MAQBzuHLQovQLPouOHBxQOJByIuLQMg2SAqJQovrQBxuIg");
	var mask_1_graphics_279 = new cjs.Graphics().p("A8DLwQB+uGLXolQLXomOEB9QOIB9ImLWMg20ApeQomrWB8uHg");
	var mask_1_graphics_280 = new cjs.Graphics().p("A8HLgQCJuELeodQLdodODCIQOGCJIdLdMg3UAoyQodrdCHuFg");
	var mask_1_graphics_281 = new cjs.Graphics().p("A8KLQQCUuCLjoUQLkoTOCCTQOECTIULkMg30AoGQoUrjCTuEg");
	var mask_1_graphics_282 = new cjs.Graphics().p("A8OLBQCfuBLroKQLqoLOACeQOCCeIKLrMg4TAnaQoKrqCduBg");
	var mask_1_graphics_283 = new cjs.Graphics().p("A8RKxQCrt+LwoBQLxoCN+CpQOACqIBLwMg4yAmuQoBrwCouAg");
	var mask_1_graphics_284 = new cjs.Graphics().p("A8TKiQC1t8L3n4QL3n4N7C0QN/C0H4L3Mg5QAmBQn4r3Czt9g");
	var mask_1_graphics_285 = new cjs.Graphics().p("A8VKTQDAt6L9nvQL9nvN6C/QN7DAHvL9Mg5tAlUQnvr9C+t7g");
	var mask_1_graphics_286 = new cjs.Graphics().p("A8WKEQDLt4MDnlQMDnlN3DKQN5DKHlMDMg6KAkmQnmsDDKt4g");
	var mask_1_graphics_287 = new cjs.Graphics().p("A8XJ1QDWt1MJncQMJnbN0DUQN3DWHbMIMg6nAj5QnbsJDUt2g");
	var mask_1_graphics_288 = new cjs.Graphics().p("A8YJmQDhtyMPnSQMPnSNxDfQN0DhHSMNMg7DAjLQnSsODft0g");
	var mask_1_graphics_289 = new cjs.Graphics().p("A8YJYQDstwMUnIQMVnJNuDrQNyDrHIMTMg7eAidQnJsVDqtwg");
	var mask_1_graphics_290 = new cjs.Graphics().p("A8XJJQD2tsMam/QMZm+NtD1QNuD2G/MYMg75AhuQm/saD1tug");
	var mask_1_graphics_291 = new cjs.Graphics().p("A8WI7QEBtpMfm1QMfm1NpEAQNrEBG1MeMg8TAg+Qm1sfEAtrg");
	var mask_1_graphics_292 = new cjs.Graphics().p("A8VItQEMtmMlmrQMjmrNnELQNoELGrMkMg8tAgOQmrskEKtog");
	var mask_1_graphics_293 = new cjs.Graphics().p("A8TIfQEWtiMqmhQMpmiNjEWQNlEWGhMpMg9GAfeQmhsqEVtkg");
	var mask_1_graphics_294 = new cjs.Graphics().p("A8RISQEhtfMvmXQMumYNgEgQNhEhGXMuMg9eAeuQmXsvEftgg");
	var mask_1_graphics_295 = new cjs.Graphics().p("A8OIEQEstbM0mNQMzmNNcEqQNdErGNMzMg92Ad+QmNs0Eqtdg");
	var mask_1_graphics_296 = new cjs.Graphics().p("A8LH3QE3tYM4mDQM4mDNYE1QNaE2GDM4Mg+OAdNQmDs5E1tZg");
	var mask_1_graphics_297 = new cjs.Graphics().p("A8HHqQFBtUM9l5QM9l5NUFAQNWFAF5M9Mg+lAccQl4s+E/tVg");
	var mask_1_graphics_298 = new cjs.Graphics().p("A8DHdQFLtQNCluQNBlvNRFKQNRFLFvNBMg+6AbqQlvtCFKtRg");
	var mask_1_graphics_299 = new cjs.Graphics().p("A7+HQQFVtLNHllQNFlkNMFVQNOFVFkNFMg/PAa5QlktGFUtOg");
	var mask_1_graphics_300 = new cjs.Graphics().p("A75HEQFgtINLlaQNJlaNIFfQNKFgFaNJMg/lAaHQlatKFftJg");
	var mask_1_graphics_301 = new cjs.Graphics().p("A70G3QFrtCNPlQQNNlQNEFpQNFFqFQNOMg/5AZVQlQtPFptFg");
	var mask_1_graphics_302 = new cjs.Graphics().p("A7uGrQF1s+NTlFQNSlFM/FzQNAF0FGNSMhANAYiQlFtTFztAg");
	var mask_1_graphics_303 = new cjs.Graphics().p("A7nGfQF/s5NWk7QNWk7M7F+QM8F+E6NWMhAfAXwQk7tXF+s8g");
	var mask_1_graphics_304 = new cjs.Graphics().p("A7gGUQGJs1NakxQNakwM2GIQM3GIEwNaMhAyAW9QkwtbGIs2g");
	var mask_1_graphics_305 = new cjs.Graphics().p("A7ZGIQGTswNekmQNeklMwGSQMzGSElNdMhBDAWKQklteGRsyg");
	var mask_1_graphics_306 = new cjs.Graphics().p("A7RF9QGdsrNikbQNhkbMrGcQMuGcEbNhMhBVAVWQkbthGcstg");
	var mask_1_graphics_307 = new cjs.Graphics().p("A7JFyQGnsmNlkRQNlkQMmGmQMoGmERNlMhBlAUiQkQtlGlsng");
	var mask_1_graphics_308 = new cjs.Graphics().p("A7AFnQGxshNokGQNokFMhGvQMjGxEGNnMhB1ATwQkFtpGvsig");
	var mask_1_graphics_309 = new cjs.Graphics().p("A63FcQG7sbNrj7QNrj7McG5QMeG7D6NqMhCDAS8Qj7tsG5sdg");
	var mask_1_graphics_310 = new cjs.Graphics().p("A6tFRQHEsVNvjwQNujxMWHEQMYHEDwNtMhCSASIQjwtvHDsYg");
	var mask_1_graphics_311 = new cjs.Graphics().p("A6jFHQHOsQNxjlQNxjmMRHNQMSHNDmNyMhChARTQjltyHNsSg");
	var mask_1_graphics_312 = new cjs.Graphics().p("A6ZE9QHYsKN0jbQN0jaMLHWQMMHXDbN0MhCuAQeQjat0HWsMg");
	var mask_1_graphics_313 = new cjs.Graphics().p("A6OEzQHisEN3jQQN1jPMGHgQMHHfDPN3MhC6APqQjQt3HgsGg");
	var mask_1_graphics_314 = new cjs.Graphics().p("A6CEpQHqr+N6jFQN4jEMAHpQMAHqDFN5MhDGAO1QjFt5HqsBg");
	var mask_1_graphics_315 = new cjs.Graphics().p("A52EgQH0r5N7i5QN7i6L6HzQL6HzC6N8MhDSAOAQi5t8Hzr6g");
	var mask_1_graphics_316 = new cjs.Graphics().p("A5qEXQH9rzN+iuQN9ivLzH8QL1H8CuN+MhDcANMQiut+H8r0g");
	var mask_1_graphics_317 = new cjs.Graphics().p("A5dEOQIGrsOAikQN/ikLtIGQLuIFCkOAMhDmAMWQikuAIGrtg");
	var mask_1_graphics_318 = new cjs.Graphics().p("A5QEFQIQrmOCiYQOBiZLmIPQLoIOCYOCMhDvALhQiZuCIPrng");
	var mask_1_graphics_319 = new cjs.Graphics().p("A5DD8QIZrfOEiNQODiOLgIYQLhIXCNOEMhD4AKsQiNuEIXrhg");
	var mask_1_graphics_320 = new cjs.Graphics().p("A41D0QIirYOGiDQOEiCLZIgQLbIhCCOFMhEAAJ2QiCuFIgrag");
	var mask_1_graphics_321 = new cjs.Graphics().p("A4mDsQIrrSOHh3QOGh4LSIqQLUIqB3OGMhEHAJBQh4uHIqrTg");
	var mask_1_graphics_322 = new cjs.Graphics().p("A4XDkQI0rLOIhsQOHhsLMIyQLNIyBsOJMhEOAILQhsuJIyrMg");
	var mask_1_graphics_323 = new cjs.Graphics().p("A4IDcQI9rEOJhhQOJhhLEI7QLGI7BhOKMhEUAHVQhhuJI7rGg");
	var mask_1_graphics_324 = new cjs.Graphics().p("A34DVQJFq9OLhWQOKhWK9JEQK/JEBWOKMhEaAGgQhWuLJEq+g");
	var mask_1_graphics_325 = new cjs.Graphics().p("A3oDNQJOq1OMhLQOKhLK3JNQK3JMBLOMMhEeAFpQhLuLJMq4g");
	var mask_1_graphics_326 = new cjs.Graphics().p("A3XDGQJWquOLg/QONhAKvJVQKwJVBAOMMhEiAE0QhAuNJVqwg");
	var mask_1_graphics_327 = new cjs.Graphics().p("A3GC/QJeqmONg1QONg0KnJcQKpJeA1OOMhEmAD9Qg1uNJeqpg");
	var mask_1_graphics_328 = new cjs.Graphics().p("A21C5QJnqfONgqQOOgpKgJlQKhJmAqOOMhEpADIQgpuOJlqhg");
	var mask_1_graphics_329 = new cjs.Graphics().p("A2jCzQJvqYONgeQOPgeKYJtQKaJvAeOOMhErACRQgeuOJuqZg");
	var mask_1_graphics_330 = new cjs.Graphics().p("A2RCsQJ3qPOOgTQOPgTKQJ1QKSJ3ATOOMhEsABcQgTuPJ2qSg");
	var mask_1_graphics_331 = new cjs.Graphics().p("A1+CnQJ/qIOOgIQOPgIKJJ9QKKJ/AIOPMhEtAAlQgIuOJ+qKg");
	var mask_1_graphics_332 = new cjs.Graphics().p("A/0aqQADuPKGqCQKHqAOOADQOPAEKBKEQKCKHgDOPg");
	var mask_1_graphics_333 = new cjs.Graphics().p("A/0aBQAOuOKOp7QKPp4OOAPQOOAOJ6KNQJ6KPgPOPg");
	var mask_1_graphics_334 = new cjs.Graphics().p("A/0ZZQAauPKWpyQKWpwOOAaQOOAaJxKUQJyKXgZOOg");
	var mask_1_graphics_335 = new cjs.Graphics().p("A/zYwQAluOKepqQKepoONAlQOOAlJpKcQJqKeglOOg");
	var mask_1_graphics_336 = new cjs.Graphics().p("A/xYJQAvuNKkpiQKmpgOMAvQOOAwJhKjQJiKmgwONg");
	var mask_1_graphics_337 = new cjs.Graphics().p("A/wXjQA6uNKrpZQKtpZOMA6QOMA6JaKqQJaKtg6ONg");
	var mask_1_graphics_338 = new cjs.Graphics().p("A/uW9QBEuMKzpRQKzpROLBEQOMBFJRKxQJSKzhEOMg");
	var mask_1_graphics_339 = new cjs.Graphics().p("A/sWXQBPuLK5pJQK6pJOKBPQOLBPJKK4QJKK6hPOLg");
	var mask_1_graphics_340 = new cjs.Graphics().p("A/qVxQBauKK/pBQLBpBOJBaQOLBZJBK/QJCLBhaOKg");
	var mask_1_graphics_341 = new cjs.Graphics().p("A/nVLQBkuJLGo5QLIo5OIBlQOJBkI5LFQI5LHhkOJg");
	var mask_1_graphics_342 = new cjs.Graphics().p("A/kUlQBuuILNowQLOoxOHBvQOIBvIwLLQIyLOhvOIg");
	var mask_1_graphics_343 = new cjs.Graphics().p("A/hT/QB5uGLTopQLVonOFB5QOHB5IoLSQIpLUh5OHg");
	var mask_1_graphics_344 = new cjs.Graphics().p("A/eTZQCEuFLZofQLbogOECEQOFCDIgLZQIhLaiEOFg");
	var mask_1_graphics_345 = new cjs.Graphics().p("A/aSzQCOuDLgoXQLhoXOCCOQOECOIXLfQIYLhiOODg");
	var mask_1_graphics_346 = new cjs.Graphics().p("A/WSOQCYuCLmoPQLooOOACYQOCCZIPLlQIPLniYOCg");
	var mask_1_graphics_347 = new cjs.Graphics().p("A/SRoQCjuALsoGQLtoFN/CiQOACjIGLrQIHLtijOAg");
	var mask_1_graphics_348 = new cjs.Graphics().p("A/NRDQCtt+Lyn+QLzn9N9CuQN+CtH9LxQH+LzitN+g");
	var mask_1_graphics_349 = new cjs.Graphics().p("A/IQdQC3t8L4n0QL5n0N7C3QN8C4H0L2QH2L5i4N8g");
	var mask_1_graphics_350 = new cjs.Graphics().p("A/DP4QDCt6L+nrQL+nsN5DCQN5DCHsL8QHtL/jCN6g");
	var mask_1_graphics_351 = new cjs.Graphics().p("A+9PSQDMt3MDniQMEnjN3DMQN3DMHiMCQHkMFjMN3g");
	var mask_1_graphics_352 = new cjs.Graphics().p("A+4OtQDXt0MJnaQMJnaN0DXQN1DWHaMIQHaMKjWN0g");
	var mask_1_graphics_353 = new cjs.Graphics().p("A+yOIQDhtyMOnRQMQnQNxDhQNyDgHRMNQHRMQjgNyg");
	var mask_1_graphics_354 = new cjs.Graphics().p("A+rNjQDrtuMTnJQMVnHNuDrQNwDrHHMSQHJMVjrNvg");
	var mask_1_graphics_355 = new cjs.Graphics().p("A+kM+QD1trMYnAQMam+NsD1QNtD1G+MYQG/Maj1Nsg");
	var mask_1_graphics_356 = new cjs.Graphics().p("A+dMaQD/tpMem2QMem1NpD/QNqD/G1MdQG2Mfj/Nqg");
	var mask_1_graphics_357 = new cjs.Graphics().p("A+WL1QEJtmMjmtQMkmrNmEJQNmEJGsMiQGtMkkJNng");
	var mask_1_graphics_358 = new cjs.Graphics().p("A+PLRQEUtjMomkQMomiNjEUQNjETGjMnQGjMpkTNjg");
	var mask_1_graphics_359 = new cjs.Graphics().p("A+HKsQEetfMsmaQMumZNfEdQNgEeGaMrQGZMukdNgg");
	var mask_1_graphics_360 = new cjs.Graphics().p("A9/KIQEotcMxmRQMxmPNdEoQNdEnGQMwQGQMyknNdg");
	var mask_1_graphics_361 = new cjs.Graphics().p("A92JkQExtYM2mIQM2mFNZExQNaExGGM1QGHM3kyNZg");
	var mask_1_graphics_362 = new cjs.Graphics().p("A9uJAQE8tVM6l9QM6l8NWE7QNWE7F9M5QF9M7k7NWg");
	var mask_1_graphics_363 = new cjs.Graphics().p("A9lIcQFGtRM+l0QM/lyNSFFQNSFFFzM9QF0NAlFNSg");
	var mask_1_graphics_364 = new cjs.Graphics().p("A9bH5QFPtNNDlrQNClpNPFPQNOFPFpNCQFqNElPNOg");
	var mask_1_graphics_365 = new cjs.Graphics().p("A9SHVQFZtJNHlgQNHlgNKFZQNLFZFfNFQFhNJlZNKg");
	var mask_1_graphics_366 = new cjs.Graphics().p("A9IGyQFjtFNLlXQNLlVNGFiQNGFjFWNJQFWNMliNHg");
	var mask_1_graphics_367 = new cjs.Graphics().p("A8+GPQFstBNPlNQNPlLNCFsQNCFsFMNNQFNNQlsNCg");
	var mask_1_graphics_368 = new cjs.Graphics().p("A8zFsQF1s8NTlEQNTlBM+F1QM9F2FDNRQFCNUl1M+g");
	var mask_1_graphics_369 = new cjs.Graphics().p("A8oFKQF/s5NWk5QNWk4M6F/QM5GAE4NVQE5NXl/M6g");
	var mask_1_graphics_370 = new cjs.Graphics().p("A8eEnQGJs0NakvQNakuM1GJQM1GJEuNYQEvNbmJM1g");
	var mask_1_graphics_371 = new cjs.Graphics().p("A8SEFQGSsvNekmQNdkkMwGTQMwGSElNcQElNemTMxg");
	var mask_1_graphics_372 = new cjs.Graphics().p("A8HDjQGcsrNhkbQNgkaMsGcQMrGbEbNgQEbNimcMrg");
	var mask_1_graphics_373 = new cjs.Graphics().p("A77DBQGlsmNkkRQNkkQMmGlQMnGlEQNjQERNlmlMmg");
	var mask_1_graphics_374 = new cjs.Graphics().p("A7vCfQGvshNnkHQNmkGMiGvQMiGuEGNmQEHNomvMhg");
	var mask_1_graphics_375 = new cjs.Graphics().p("A7iB9QG3sbNqj9QNqj8McG4QMdG4D8NoQD9Nrm4Mdg");
	var mask_1_graphics_376 = new cjs.Graphics().p("A7WBcQHBsWNtjzQNsjyMYHBQMXHBDyNrQDzNunBMYg");
	var mask_1_graphics_377 = new cjs.Graphics().p("A7JA7QHKsRNwjpQNvjnMSHKQMSHKDoNuQDoNxnKMSg");
	var mask_1_graphics_378 = new cjs.Graphics().p("A68AaQHTsLNzjfQNxjdMNHTQMNHTDeNxQDeNznTMNg");
	var mask_1_graphics_379 = new cjs.Graphics().p("A6ugFQHcsIN0jUQN1jTMHHcQMHHcDUN0QDUN1ncMIg");
	var mask_1_graphics_380 = new cjs.Graphics().p("A6hgmQHlsBN3jLQN3jIMCHlQMBHlDKN2QDJN4nlMBg");
	var mask_1_graphics_381 = new cjs.Graphics().p("A6ThGQHur8N6jAQN4i+L8HuQL8HuC/N4QDAN6nuL8g");
	var mask_1_graphics_382 = new cjs.Graphics().p("A6FhmQH3r2N8i1QN7i0L2H2QL2H3C1N6QC1N9n3L2g");
	var mask_1_graphics_383 = new cjs.Graphics().p("A52iFQH/rxN+irQN9ipLwH/QLwIACrN8QCqN+n/Lwg");
	var mask_1_graphics_384 = new cjs.Graphics().p("A5oilQIJrqN/ihQN/ifLqIIQLrIICfN+QChOBoJLqg");
	var mask_1_graphics_385 = new cjs.Graphics().p("A5ZjEQIRrkOBiXQOBiULkIQQLkIRCWOAQCWOCoRLkg");
	var mask_1_graphics_386 = new cjs.Graphics().p("A5KjjQIareODiMQOCiKLeIZQLeIZCLOCQCLOEoZLeg");
	var mask_1_graphics_387 = new cjs.Graphics().p("A46kCQIirXOEiCQOEiALYIiQLXIiCBODQCBOFoiLYg");
	var mask_1_graphics_388 = new cjs.Graphics().p("A4rkgQIrrROFh3QOGh2LRIqQLRIrB3OEQB2OHoqLRg");
	var mask_1_graphics_389 = new cjs.Graphics().p("A4bk+QIzrLOHhsQOGhrLLIyQLLIzBsOFQBsOIozLLg");
	var mask_1_graphics_390 = new cjs.Graphics().p("A4LlcQI7rEOIhiQOIhhLEI7QLFI7BhOGQBhOKo6LEg");
	var mask_1_graphics_391 = new cjs.Graphics().p("A36l5QJCq+OKhYQOJhVK9JCQK+JDBXOIQBXOKpDK+g");
	var mask_1_graphics_392 = new cjs.Graphics().p("A3qmXQJLq2OKhOQOKhLK3JLQK3JLBMOIQBMOMpKK3g");
	var mask_1_graphics_393 = new cjs.Graphics().p("A3Zm0QJTqwOKhCQOLhBKwJTQKwJTBCOJQBCOMpTKwg");
	var mask_1_graphics_394 = new cjs.Graphics().p("A3InQQJbqpOLg4QOMg3KpJbQKpJbA3OKQA3ONpbKpg");
	var mask_1_graphics_395 = new cjs.Graphics().p("A23ntQJjqiOLgtQONgsKiJiQKiJjAsOLQAtONpiKig");
	var mask_1_graphics_396 = new cjs.Graphics().p("A2coZQJvqWOMgeQONgbKXJvQKXJuAcOMQAdOOpvKXg");
	var mask_1_graphics_397 = new cjs.Graphics().p("A2BpEQJ7qLONgNQONgLKMJ7QKLJ5AMONQAMOPp6KLg");
	var mask_1_graphics_398 = new cjs.Graphics().p("A1lpuQKGqAONAEQOOAFKAKGQKAKGgFONQgEOOqGKAg");
	var mask_1_graphics_399 = new cjs.Graphics().p("A1JqXQKSp1ONAUQONAWJ0KSQJ1KRgVOMQgVOPqSJ0g");
	var mask_1_graphics_400 = new cjs.Graphics().p("A0srAQKdpoOMAkQONAmJoKdQJpKcglOMQgmOOqdJpg");
	var mask_1_graphics_401 = new cjs.Graphics().p("A0ProQKopcOMA1QOMA2JcKoQJcKng1OMQg2ONqoJcg");
	var mask_1_graphics_402 = new cjs.Graphics().p("AzxsPQKzpQOKBFQOLBHJQKzQJQKyhGOKQhGOMqzJQg");
	var mask_1_graphics_403 = new cjs.Graphics().p("AzTs1QK9pEOJBWQOKBXJDK9QJDK9hWOJQhWOKq9JEg");
	var mask_1_graphics_404 = new cjs.Graphics().p("Ay1tbQLIo3OHBmQOIBoI3LIQI2LGhmOIQhnOJrHI2g");
	var mask_1_graphics_405 = new cjs.Graphics().p("AyWuAQLSopOFB2QOGB4IqLSQIqLRh3OFQh3OHrSIpg");
	var mask_1_graphics_406 = new cjs.Graphics().p("Ax2ujQLbodODCGQOECIIdLcQIcLbiHODQiHOFrcIcg");
	var mask_1_graphics_407 = new cjs.Graphics().p("AxXvGQLmoQOACXQOBCYIQLmQIPLkiXOBQiYOCrlIPg");
	var mask_1_graphics_408 = new cjs.Graphics().p("Aw2voQLuoCN+CmQN+CpICLvQICLuinN9QioOArvIBg");
	var mask_1_graphics_409 = new cjs.Graphics().p("AwWwKQL4n0N7C3QN7C4H0L5QH0L3i3N6Qi4N8r4H1g");
	var mask_1_graphics_410 = new cjs.Graphics().p("Av1wqQMBnmN3DGQN4DJHmMBQHnMAjIN3QjIN5sAHmg");
	var mask_1_graphics_411 = new cjs.Graphics().p("AvUxJQMKnZNzDXQN0DZHZMJQHZMJjYNzQjYN1sJHZg");
	var mask_1_graphics_412 = new cjs.Graphics().p("AuyxoQMSnKNwDmQNwDpHKMSQHLMRjoNvQjoNxsRHLg");
	var mask_1_graphics_413 = new cjs.Graphics().p("AuQyFQMbm9NrD3QNrD4G9MbQG8MZj3NrQj4NtsaG8g");
	var mask_1_graphics_414 = new cjs.Graphics().p("AttyiQMimuNnEGQNnEJGuMiQGtMhkGNmQkINosiGug");
	var mask_1_graphics_415 = new cjs.Graphics().p("AtKy+QMpmfNiEWQNiEYGgMpQGfMpkWNiQkXNjsqGgg");
	var mask_1_graphics_416 = new cjs.Graphics().p("AsnzZQMwmQNeElQNdEoGRMxQGQMwkmNdQknNesxGRg");
	var mask_1_graphics_417 = new cjs.Graphics().p("AsDzyQM3mCNYE1QNYE3GCM4QGCM3k2NXQk2NZs5GCg");
	var mask_1_graphics_418 = new cjs.Graphics().p("Arf0LQM+lzNSFEQNSFHFzM/QFzM+lFNRQlGNTs/Fzg");
	var mask_1_graphics_419 = new cjs.Graphics().p("Aq70jQNElkNNFUQNMFVFkNGQFkNFlUNLQlVNNtGFkg");
	var mask_1_graphics_420 = new cjs.Graphics().p("AqX06QNLlVNHFjQNFFlFVNMQFVNLljNFQllNHtMFVg");
	var mask_1_graphics_421 = new cjs.Graphics().p("Apy1QQNRlFNAFyQM/F0FGNSQFFNRlyM+QlzNBtSFFg");
	var mask_1_graphics_422 = new cjs.Graphics().p("ApN1lQNXk2M5GBQM4GDE3NYQE2NXmCM4QmCM5tYE2g");
	var mask_1_graphics_423 = new cjs.Graphics().p("Aon14QNcknMyGQQMxGREnNeQEnNcmRMxQmRMytdEng");
	var mask_1_graphics_424 = new cjs.Graphics().p("AoC2LQNikXMqGeQMqGgEYNjQEXNhmfMqQmgMrtiEXg");
	var mask_1_graphics_425 = new cjs.Graphics().p("Anc2dQNnkIMjGuQMiGuEINnQEHNnmtMiQmvMktnEHg");
	var mask_1_graphics_426 = new cjs.Graphics().p("Am22uQNrj4McG8QMaG9D4NrQD4Nsm8MaQm9MctsD4g");
	var mask_1_graphics_427 = new cjs.Graphics().p("AmP2+QNvjoMTHKQMTHMDoNvQDoNxnLMSQnLMTtwDog");
	var mask_1_graphics_428 = new cjs.Graphics().p("Alp3MQN0jYMLHYQMJHZDZN0QDYN0nZMKQnZMLt0DYg");
	var mask_1_graphics_429 = new cjs.Graphics().p("AlC3aQN3jIMCHmQMCHnDIN4QDIN4nmMBQnnMCt5DJg");
	var mask_1_graphics_430 = new cjs.Graphics().p("Akb3nQN7i4L5H0QL4H1C4N7QC5N8n0L4Qn1L6t8C4g");
	var mask_1_graphics_431 = new cjs.Graphics().p("Aj03yQN+ioLwIBQLvIDCoN+QCoN/oBLvQoDLxt/Cog");
	var mask_1_graphics_432 = new cjs.Graphics().p("AjN39QOBiYLnIPQLmIRCYOBQCXOCoPLlQoQLnuCCYg");
	var mask_1_graphics_433 = new cjs.Graphics().p("Ail4GQODiILdIcQLdIeCHOEQCIOEodLcQodLeuFCHg");
	var mask_1_graphics_434 = new cjs.Graphics().p("Ah+4PQOGh3LTIpQLTIrB3OGQB3OHopLSQorLUuHB3g");
	var mask_1_graphics_435 = new cjs.Graphics().p("AhW4WQOIhnLJI2QLII4BnOIQBnOJo2LIQo4LKuJBng");
	var mask_1_graphics_436 = new cjs.Graphics().p("Agv4cQOKhXK/JDQK+JFBXOJQBWOLpDK+QpEK/uLBXg");
	var mask_1_graphics_437 = new cjs.Graphics().p("AgH4iQOLhGK0JQQK0JRBGOLQBHOMpQK0QpRK0uMBGg");
	var mask_1_graphics_438 = new cjs.Graphics().p("AAg4mQONg2KqJcQKoJeA2OMQA2ONpcKpQpeKquNA2g");
	var mask_1_graphics_439 = new cjs.Graphics().p("ABH4pQOOgmKfJpQKeJqAlONQAmOOppKeQppKeuOAmg");
	var mask_1_graphics_440 = new cjs.Graphics().p("ABv4rQOPgVKTJ0QKTJ2AVOOQAVOOp1KTQp1KTuPAWg");
	var mask_1_graphics_441 = new cjs.Graphics().p("ACX4sQOPgFKIKBQKHKBAEOOQAFOPqAKHQqCKIuOAFg");
	var mask_1_graphics_442 = new cjs.Graphics().p("EACGAsCMAA4hEuQOPAMJ9KMQJ7KNgMOOQgLOPqMJ7QqCJxt5AAIghAAg");
	var mask_1_graphics_443 = new cjs.Graphics().p("EABeAsBMACIhEsQOOAcJxKXQJvKZgcONQgcOPqXJvQp8JWtdAAIhOgBg");
	var mask_1_graphics_444 = new cjs.Graphics().p("EAA2Ar/MADXhEpQOOAtJlKiQJjKkgsONQgtOOqiJjQp2I7tBAAQg9AAg+gDg");
	var mask_1_graphics_445 = new cjs.Graphics().p("EAAOAr9MAEnhElQONA9JYKuQJXKug9OMQg9ONqtJXQpvIhsnAAQhSAAhUgFg");
	var mask_1_graphics_446 = new cjs.Graphics().p("EgAYAr6MAF0hEfQOMBNJMK4QJKK6hNOKQhNOMq4JLQppIIsMAAQhnAAhogJg");
	var mask_1_graphics_447 = new cjs.Graphics().p("EgBAAr2MAHDhEYQOLBeI/LDQI+LDheOKQhdOKrDI+QphHvrzAAQh7AAh+gNg");
	var mask_1_graphics_448 = new cjs.Graphics().p("EgBoArxMAIShEPQOJBuIyLNQIyLOhuOIQhuOIrNIyQpZHWrbAAQiPAAiTgSg");
	var mask_1_graphics_449 = new cjs.Graphics().p("EgCPArsMAJhhEFQOGB+IlLXQIlLYh/OGQh+OGrXIlQpQG+rDAAQijABingYg");
	var mask_1_graphics_450 = new cjs.Graphics().p("EgC4ArlMAKwhD5QOECPIYLhQIXLhiPOEQiOOErhIXQpHGnqsAAQi2AAi8geg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(255).to({graphics:mask_1_graphics_255,x:190.8,y:260.7}).wait(1).to({graphics:mask_1_graphics_256,x:191.9,y:259.9}).wait(1).to({graphics:mask_1_graphics_257,x:193,y:259.1}).wait(1).to({graphics:mask_1_graphics_258,x:194,y:258.3}).wait(1).to({graphics:mask_1_graphics_259,x:195.1,y:257.5}).wait(1).to({graphics:mask_1_graphics_260,x:196.1,y:256.6}).wait(1).to({graphics:mask_1_graphics_261,x:197.2,y:255.7}).wait(1).to({graphics:mask_1_graphics_262,x:198.2,y:254.9}).wait(1).to({graphics:mask_1_graphics_263,x:199.2,y:254}).wait(1).to({graphics:mask_1_graphics_264,x:200.2,y:253.1}).wait(1).to({graphics:mask_1_graphics_265,x:201.2,y:252.2}).wait(1).to({graphics:mask_1_graphics_266,x:202.2,y:251.2}).wait(1).to({graphics:mask_1_graphics_267,x:203.2,y:250.3}).wait(1).to({graphics:mask_1_graphics_268,x:204.1,y:249.3}).wait(1).to({graphics:mask_1_graphics_269,x:205.1,y:248.4}).wait(1).to({graphics:mask_1_graphics_270,x:206,y:247.4}).wait(1).to({graphics:mask_1_graphics_271,x:206.9,y:246.4}).wait(1).to({graphics:mask_1_graphics_272,x:207.8,y:245.4}).wait(1).to({graphics:mask_1_graphics_273,x:208.7,y:244.4}).wait(1).to({graphics:mask_1_graphics_274,x:209.6,y:243.4}).wait(1).to({graphics:mask_1_graphics_275,x:210.5,y:242.3}).wait(1).to({graphics:mask_1_graphics_276,x:211.4,y:241.3}).wait(1).to({graphics:mask_1_graphics_277,x:212.2,y:240.3}).wait(1).to({graphics:mask_1_graphics_278,x:213,y:239.2}).wait(1).to({graphics:mask_1_graphics_279,x:213.9,y:238.1}).wait(1).to({graphics:mask_1_graphics_280,x:214.7,y:237}).wait(1).to({graphics:mask_1_graphics_281,x:215.5,y:235.9}).wait(1).to({graphics:mask_1_graphics_282,x:216.2,y:234.8}).wait(1).to({graphics:mask_1_graphics_283,x:217,y:233.7}).wait(1).to({graphics:mask_1_graphics_284,x:217.8,y:232.6}).wait(1).to({graphics:mask_1_graphics_285,x:218.5,y:231.5}).wait(1).to({graphics:mask_1_graphics_286,x:219.2,y:230.3}).wait(1).to({graphics:mask_1_graphics_287,x:219.9,y:229.2}).wait(1).to({graphics:mask_1_graphics_288,x:220.6,y:228}).wait(1).to({graphics:mask_1_graphics_289,x:221.3,y:226.9}).wait(1).to({graphics:mask_1_graphics_290,x:222,y:225.7}).wait(1).to({graphics:mask_1_graphics_291,x:222.6,y:224.5}).wait(1).to({graphics:mask_1_graphics_292,x:223.3,y:223.3}).wait(1).to({graphics:mask_1_graphics_293,x:223.9,y:222.1}).wait(1).to({graphics:mask_1_graphics_294,x:224.5,y:220.9}).wait(1).to({graphics:mask_1_graphics_295,x:225.1,y:219.7}).wait(1).to({graphics:mask_1_graphics_296,x:225.7,y:218.5}).wait(1).to({graphics:mask_1_graphics_297,x:226.3,y:217.3}).wait(1).to({graphics:mask_1_graphics_298,x:226.8,y:216}).wait(1).to({graphics:mask_1_graphics_299,x:227.3,y:214.8}).wait(1).to({graphics:mask_1_graphics_300,x:227.9,y:213.5}).wait(1).to({graphics:mask_1_graphics_301,x:228.4,y:212.3}).wait(1).to({graphics:mask_1_graphics_302,x:228.9,y:211}).wait(1).to({graphics:mask_1_graphics_303,x:229.3,y:209.8}).wait(1).to({graphics:mask_1_graphics_304,x:229.8,y:208.5}).wait(1).to({graphics:mask_1_graphics_305,x:230.2,y:207.2}).wait(1).to({graphics:mask_1_graphics_306,x:230.7,y:205.9}).wait(1).to({graphics:mask_1_graphics_307,x:231.1,y:204.6}).wait(1).to({graphics:mask_1_graphics_308,x:231.5,y:203.4}).wait(1).to({graphics:mask_1_graphics_309,x:231.8,y:202.1}).wait(1).to({graphics:mask_1_graphics_310,x:232.2,y:200.8}).wait(1).to({graphics:mask_1_graphics_311,x:232.6,y:199.5}).wait(1).to({graphics:mask_1_graphics_312,x:232.9,y:198.1}).wait(1).to({graphics:mask_1_graphics_313,x:233.2,y:196.8}).wait(1).to({graphics:mask_1_graphics_314,x:233.5,y:195.5}).wait(1).to({graphics:mask_1_graphics_315,x:233.8,y:194.2}).wait(1).to({graphics:mask_1_graphics_316,x:234,y:192.9}).wait(1).to({graphics:mask_1_graphics_317,x:234.3,y:191.5}).wait(1).to({graphics:mask_1_graphics_318,x:234.5,y:190.2}).wait(1).to({graphics:mask_1_graphics_319,x:234.7,y:188.9}).wait(1).to({graphics:mask_1_graphics_320,x:234.9,y:187.5}).wait(1).to({graphics:mask_1_graphics_321,x:235.1,y:186.2}).wait(1).to({graphics:mask_1_graphics_322,x:235.3,y:184.9}).wait(1).to({graphics:mask_1_graphics_323,x:235.4,y:183.5}).wait(1).to({graphics:mask_1_graphics_324,x:235.6,y:182.2}).wait(1).to({graphics:mask_1_graphics_325,x:235.7,y:180.8}).wait(1).to({graphics:mask_1_graphics_326,x:235.8,y:179.5}).wait(1).to({graphics:mask_1_graphics_327,x:235.9,y:178.1}).wait(1).to({graphics:mask_1_graphics_328,x:236,y:176.8}).wait(1).to({graphics:mask_1_graphics_329,x:236,y:175.4}).wait(1).to({graphics:mask_1_graphics_330,x:236,y:174.1}).wait(1).to({graphics:mask_1_graphics_331,x:236.1,y:172.7}).wait(1).to({graphics:mask_1_graphics_332,x:236.1,y:172.2}).wait(1).to({graphics:mask_1_graphics_333,x:236.1,y:173.6}).wait(1).to({graphics:mask_1_graphics_334,x:236.1,y:174.9}).wait(1).to({graphics:mask_1_graphics_335,x:236.1,y:176.2}).wait(1).to({graphics:mask_1_graphics_336,x:236.1,y:177.5}).wait(1).to({graphics:mask_1_graphics_337,x:236.1,y:178.8}).wait(1).to({graphics:mask_1_graphics_338,x:236.1,y:180}).wait(1).to({graphics:mask_1_graphics_339,x:236.1,y:181.3}).wait(1).to({graphics:mask_1_graphics_340,x:236.1,y:182.6}).wait(1).to({graphics:mask_1_graphics_341,x:236.1,y:183.8}).wait(1).to({graphics:mask_1_graphics_342,x:236.1,y:185.1}).wait(1).to({graphics:mask_1_graphics_343,x:236.2,y:186.4}).wait(1).to({graphics:mask_1_graphics_344,x:236.2,y:187.6}).wait(1).to({graphics:mask_1_graphics_345,x:236.2,y:188.9}).wait(1).to({graphics:mask_1_graphics_346,x:236.2,y:190.2}).wait(1).to({graphics:mask_1_graphics_347,x:236.2,y:191.4}).wait(1).to({graphics:mask_1_graphics_348,x:236.2,y:192.7}).wait(1).to({graphics:mask_1_graphics_349,x:236.2,y:193.9}).wait(1).to({graphics:mask_1_graphics_350,x:236.2,y:195.2}).wait(1).to({graphics:mask_1_graphics_351,x:236.3,y:196.4}).wait(1).to({graphics:mask_1_graphics_352,x:236.3,y:197.6}).wait(1).to({graphics:mask_1_graphics_353,x:236.3,y:198.9}).wait(1).to({graphics:mask_1_graphics_354,x:236.3,y:200.1}).wait(1).to({graphics:mask_1_graphics_355,x:236.3,y:201.3}).wait(1).to({graphics:mask_1_graphics_356,x:236.3,y:202.6}).wait(1).to({graphics:mask_1_graphics_357,x:236.3,y:203.8}).wait(1).to({graphics:mask_1_graphics_358,x:236.3,y:205}).wait(1).to({graphics:mask_1_graphics_359,x:236.3,y:206.2}).wait(1).to({graphics:mask_1_graphics_360,x:236.3,y:207.4}).wait(1).to({graphics:mask_1_graphics_361,x:236.3,y:208.6}).wait(1).to({graphics:mask_1_graphics_362,x:236.3,y:209.8}).wait(1).to({graphics:mask_1_graphics_363,x:236.3,y:211}).wait(1).to({graphics:mask_1_graphics_364,x:236.3,y:212.2}).wait(1).to({graphics:mask_1_graphics_365,x:236.3,y:213.4}).wait(1).to({graphics:mask_1_graphics_366,x:236.3,y:214.6}).wait(1).to({graphics:mask_1_graphics_367,x:236.3,y:215.7}).wait(1).to({graphics:mask_1_graphics_368,x:236.3,y:216.9}).wait(1).to({graphics:mask_1_graphics_369,x:236.3,y:218.1}).wait(1).to({graphics:mask_1_graphics_370,x:236.3,y:219.2}).wait(1).to({graphics:mask_1_graphics_371,x:236.3,y:220.4}).wait(1).to({graphics:mask_1_graphics_372,x:236.3,y:221.5}).wait(1).to({graphics:mask_1_graphics_373,x:236.3,y:222.6}).wait(1).to({graphics:mask_1_graphics_374,x:236.3,y:223.7}).wait(1).to({graphics:mask_1_graphics_375,x:236.3,y:224.9}).wait(1).to({graphics:mask_1_graphics_376,x:236.2,y:226}).wait(1).to({graphics:mask_1_graphics_377,x:236.2,y:227.1}).wait(1).to({graphics:mask_1_graphics_378,x:236.2,y:228.2}).wait(1).to({graphics:mask_1_graphics_379,x:236.2,y:229.3}).wait(1).to({graphics:mask_1_graphics_380,x:236.2,y:230.3}).wait(1).to({graphics:mask_1_graphics_381,x:236.2,y:231.4}).wait(1).to({graphics:mask_1_graphics_382,x:236.1,y:232.5}).wait(1).to({graphics:mask_1_graphics_383,x:236.1,y:233.5}).wait(1).to({graphics:mask_1_graphics_384,x:236.1,y:234.6}).wait(1).to({graphics:mask_1_graphics_385,x:236.1,y:235.6}).wait(1).to({graphics:mask_1_graphics_386,x:236.1,y:236.7}).wait(1).to({graphics:mask_1_graphics_387,x:236.1,y:237.7}).wait(1).to({graphics:mask_1_graphics_388,x:236,y:238.7}).wait(1).to({graphics:mask_1_graphics_389,x:236,y:239.7}).wait(1).to({graphics:mask_1_graphics_390,x:236,y:240.7}).wait(1).to({graphics:mask_1_graphics_391,x:236,y:241.7}).wait(1).to({graphics:mask_1_graphics_392,x:236,y:242.7}).wait(1).to({graphics:mask_1_graphics_393,x:236,y:243.6}).wait(1).to({graphics:mask_1_graphics_394,x:235.9,y:244.6}).wait(1).to({graphics:mask_1_graphics_395,x:236,y:245.5}).wait(1).to({graphics:mask_1_graphics_396,x:235.9,y:247}).wait(1).to({graphics:mask_1_graphics_397,x:235.9,y:248.4}).wait(1).to({graphics:mask_1_graphics_398,x:236,y:249.8}).wait(1).to({graphics:mask_1_graphics_399,x:236,y:251.2}).wait(1).to({graphics:mask_1_graphics_400,x:236,y:252.6}).wait(1).to({graphics:mask_1_graphics_401,x:236,y:253.9}).wait(1).to({graphics:mask_1_graphics_402,x:236,y:255.2}).wait(1).to({graphics:mask_1_graphics_403,x:236,y:256.5}).wait(1).to({graphics:mask_1_graphics_404,x:236.1,y:257.7}).wait(1).to({graphics:mask_1_graphics_405,x:236.1,y:258.9}).wait(1).to({graphics:mask_1_graphics_406,x:236.1,y:260.1}).wait(1).to({graphics:mask_1_graphics_407,x:236.2,y:261.3}).wait(1).to({graphics:mask_1_graphics_408,x:236.2,y:262.4}).wait(1).to({graphics:mask_1_graphics_409,x:236.2,y:263.6}).wait(1).to({graphics:mask_1_graphics_410,x:236.2,y:264.6}).wait(1).to({graphics:mask_1_graphics_411,x:236.3,y:265.7}).wait(1).to({graphics:mask_1_graphics_412,x:236.3,y:266.7}).wait(1).to({graphics:mask_1_graphics_413,x:236.3,y:267.7}).wait(1).to({graphics:mask_1_graphics_414,x:236.3,y:268.6}).wait(1).to({graphics:mask_1_graphics_415,x:236.3,y:269.6}).wait(1).to({graphics:mask_1_graphics_416,x:236.4,y:270.5}).wait(1).to({graphics:mask_1_graphics_417,x:236.4,y:271.3}).wait(1).to({graphics:mask_1_graphics_418,x:236.4,y:272.1}).wait(1).to({graphics:mask_1_graphics_419,x:236.4,y:272.9}).wait(1).to({graphics:mask_1_graphics_420,x:236.4,y:273.7}).wait(1).to({graphics:mask_1_graphics_421,x:236.4,y:274.4}).wait(1).to({graphics:mask_1_graphics_422,x:236.4,y:275.1}).wait(1).to({graphics:mask_1_graphics_423,x:236.4,y:275.8}).wait(1).to({graphics:mask_1_graphics_424,x:236.4,y:276.4}).wait(1).to({graphics:mask_1_graphics_425,x:236.4,y:277}).wait(1).to({graphics:mask_1_graphics_426,x:236.4,y:277.6}).wait(1).to({graphics:mask_1_graphics_427,x:236.4,y:278.1}).wait(1).to({graphics:mask_1_graphics_428,x:236.3,y:278.6}).wait(1).to({graphics:mask_1_graphics_429,x:236.3,y:279.1}).wait(1).to({graphics:mask_1_graphics_430,x:236.3,y:279.5}).wait(1).to({graphics:mask_1_graphics_431,x:236.3,y:279.9}).wait(1).to({graphics:mask_1_graphics_432,x:236.3,y:280.2}).wait(1).to({graphics:mask_1_graphics_433,x:236.2,y:280.5}).wait(1).to({graphics:mask_1_graphics_434,x:236.2,y:280.8}).wait(1).to({graphics:mask_1_graphics_435,x:236.2,y:281.1}).wait(1).to({graphics:mask_1_graphics_436,x:236.2,y:281.3}).wait(1).to({graphics:mask_1_graphics_437,x:236.2,y:281.4}).wait(1).to({graphics:mask_1_graphics_438,x:236.2,y:281.6}).wait(1).to({graphics:mask_1_graphics_439,x:236.1,y:281.7}).wait(1).to({graphics:mask_1_graphics_440,x:236.1,y:281.8}).wait(1).to({graphics:mask_1_graphics_441,x:236.1,y:281.8}).wait(1).to({graphics:mask_1_graphics_442,x:236.1,y:281.8}).wait(1).to({graphics:mask_1_graphics_443,x:236.2,y:281.8}).wait(1).to({graphics:mask_1_graphics_444,x:236.2,y:281.8}).wait(1).to({graphics:mask_1_graphics_445,x:236.2,y:281.8}).wait(1).to({graphics:mask_1_graphics_446,x:236.2,y:281.9}).wait(1).to({graphics:mask_1_graphics_447,x:236.2,y:281.9}).wait(1).to({graphics:mask_1_graphics_448,x:236.3,y:281.9}).wait(1).to({graphics:mask_1_graphics_449,x:236.3,y:282}).wait(1).to({graphics:mask_1_graphics_450,x:236.2,y:281.9}).wait(176));

	// 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(25,1,1).p("AQmU8QAzkCijkCQh/jJkAh7Qhlgxieg3QjChBhrgkQj1hUg6gWQimg9hyg7QkhiViAjmQh4jaA9jkQA9jiDXiPQEHiuEKggQEGggErBlQC6BAB+BbQB8BaB7Cf");
	this.shape_2.setTransform(290.5,232);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(25,1,1).p("AzWRQQJfHYKPB1QFCA6EfhyQEWhuCqjuQErmikJmkQh+jIkAh8Qhlgwieg3QjChAhrglQj1hUg7gVQimg9hxg7QkiiWh/jnQh5jaA9jjQA9jjDYiPQEGitELghQEFggEsBmQC6BAB+BbQB8BaB7Ce");
	this.shape_3.setTransform(273.9,269.2);

	var maskedShapeInstanceList = [this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2}]},255).to({state:[{t:this.shape_3}]},80).wait(291));

	// Layer 9 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_175 = new cjs.Graphics().p("ADcOAIE2oZIJlFiIk2IYg");
	var mask_2_graphics_176 = new cjs.Graphics().p("AnSBZIE2oZIJvFoIk2IZg");
	var mask_2_graphics_177 = new cjs.Graphics().p("AnXBVIE2oYIJ5FvIk2IYg");
	var mask_2_graphics_178 = new cjs.Graphics().p("AndBSIE2oYIKFF1Ik2IYg");
	var mask_2_graphics_179 = new cjs.Graphics().p("AnjBPIE3oYIKQF7Ik3IYg");
	var mask_2_graphics_180 = new cjs.Graphics().p("AnoBMIE2oZIKbGCIk2IZg");
	var mask_2_graphics_181 = new cjs.Graphics().p("AnuBIIE2oYIKnGJIk2IYg");
	var mask_2_graphics_182 = new cjs.Graphics().p("An0BFIE3oYIKyGPIk3IYg");
	var mask_2_graphics_183 = new cjs.Graphics().p("An5BCIE2oYIK9GVIk2IYg");
	var mask_2_graphics_184 = new cjs.Graphics().p("An/A/IE2oZILJGdIk2IYg");
	var mask_2_graphics_185 = new cjs.Graphics().p("AoEA7IE2oYILTGjIk2IYg");
	var mask_2_graphics_186 = new cjs.Graphics().p("AoKA4IE2oYILfGpIk2IYg");
	var mask_2_graphics_187 = new cjs.Graphics().p("AoPA1IE2oYILpGvIk2IYg");
	var mask_2_graphics_188 = new cjs.Graphics().p("AoVAyIE2oZIL1G3Ik2IYg");
	var mask_2_graphics_189 = new cjs.Graphics().p("AobAuIE2oYIMBG9Ik2IYg");
	var mask_2_graphics_190 = new cjs.Graphics().p("AogArIE2oYIMLHDIk2IYg");
	var mask_2_graphics_191 = new cjs.Graphics().p("AomAoIE2oYIMXHJIk2IYg");
	var mask_2_graphics_192 = new cjs.Graphics().p("AosAlIE2oZIMjHRIk3IXg");
	var mask_2_graphics_193 = new cjs.Graphics().p("AoxAhIE2oYIMtHXIk2IYg");
	var mask_2_graphics_194 = new cjs.Graphics().p("Ao3AeIE2oYIM5HdIk2IYg");
	var mask_2_graphics_195 = new cjs.Graphics().p("Ao9AbIE2oYINEHjIk1IYg");
	var mask_2_graphics_196 = new cjs.Graphics().p("ApCAYIE2oYINPHpIk2IYg");
	var mask_2_graphics_197 = new cjs.Graphics().p("ApIAUIE2oXINbHwIk2IYg");
	var mask_2_graphics_198 = new cjs.Graphics().p("ApNARIE2oYINlH3Ik2IYg");
	var mask_2_graphics_199 = new cjs.Graphics().p("ApTAOIE2oYINxH9Ik2IYg");
	var mask_2_graphics_200 = new cjs.Graphics().p("ApZALIE2oYIN9IDIk3IYg");
	var mask_2_graphics_201 = new cjs.Graphics().p("ApeAHIE2oXIOHIKIk2IXg");
	var mask_2_graphics_202 = new cjs.Graphics().p("ApkAEIE2oYIOTIRIk2IYg");
	var mask_2_graphics_203 = new cjs.Graphics().p("ApqABIE2oYIOeIXIk1IYg");
	var mask_2_graphics_204 = new cjs.Graphics().p("ApvgBIE2oZIOpIcIk2IZg");
	var mask_2_graphics_205 = new cjs.Graphics().p("Ap0gFIE1oYIO0IjIk1IYg");
	var mask_2_graphics_206 = new cjs.Graphics().p("Ap6gIIE2oZIO/IqIk2IZg");
	var mask_2_graphics_207 = new cjs.Graphics().p("AqAgLIE2oZIPLIwIk2IZg");
	var mask_2_graphics_208 = new cjs.Graphics().p("AqFgOIE1oZIPWI2Ik1IZg");
	var mask_2_graphics_209 = new cjs.Graphics().p("AqLgSIE2oYIPhI9Ik2IYg");
	var mask_2_graphics_210 = new cjs.Graphics().p("AqRgVIE2oZIPtJEIk2IZg");
	var mask_2_graphics_211 = new cjs.Graphics().p("AqWgYIE2oZIP3JKIk2IZg");
	var mask_2_graphics_212 = new cjs.Graphics().p("AqcgbIE2oZIQDJQIk2IZg");
	var mask_2_graphics_213 = new cjs.Graphics().p("AqhgfIE1oYIQOJWIk1IZg");
	var mask_2_graphics_214 = new cjs.Graphics().p("AqngiIE2oZIQZJeIk2IZg");
	var mask_2_graphics_215 = new cjs.Graphics().p("AqtglIE2oZIQlJkIk2IZg");
	var mask_2_graphics_216 = new cjs.Graphics().p("AqygoIE1oZIQwJqIk1IZg");
	var mask_2_graphics_217 = new cjs.Graphics().p("Aq4gsIE2oYIQ7JwIk2IZg");
	var mask_2_graphics_218 = new cjs.Graphics().p("Aq+gvIE2oZIRHJ4Ik2IZg");
	var mask_2_graphics_219 = new cjs.Graphics().p("ArDgyIE1oZIRTJ+Ik2IZg");
	var mask_2_graphics_220 = new cjs.Graphics().p("ArJg1IE2oZIRdKEIk2IZg");
	var mask_2_graphics_221 = new cjs.Graphics().p("ArPg5IE2oYIRpKKIk2Iag");
	var mask_2_graphics_222 = new cjs.Graphics().p("ArUg8IE2oZIRzKSIk2IZg");
	var mask_2_graphics_223 = new cjs.Graphics().p("Arag/IE2oZIR/KYIk2IZg");
	var mask_2_graphics_224 = new cjs.Graphics().p("ArfhCIE1oZISKKeIk1IZg");
	var mask_2_graphics_225 = new cjs.Graphics().p("ArlhGIE2oYISVKkIk2Iag");
	var mask_2_graphics_226 = new cjs.Graphics().p("ArrhJIE3oZISfKsIk1IZg");
	var mask_2_graphics_227 = new cjs.Graphics().p("ArwhMIE2oZISrKyIk2IZg");
	var mask_2_graphics_228 = new cjs.Graphics().p("Ar2hPIE2oZIS3K4Ik2IZg");
	var mask_2_graphics_229 = new cjs.Graphics().p("Ar8hTIE3oYITCK/Ik2IZg");
	var mask_2_graphics_230 = new cjs.Graphics().p("AsBhWIE2oZITNLGIk2IZg");
	var mask_2_graphics_231 = new cjs.Graphics().p("AsHhZIE2oZITZLMIk2IZg");
	var mask_2_graphics_232 = new cjs.Graphics().p("AsNhcIE3oZITkLSIk3IZg");
	var mask_2_graphics_233 = new cjs.Graphics().p("AsShgIE2oYITvLZIk2IZg");
	var mask_2_graphics_234 = new cjs.Graphics().p("AsYhjIE2oZIT7LgIk2IZg");
	var mask_2_graphics_235 = new cjs.Graphics().p("AsdhmIE2oZIUFLmIk2IZg");
	var mask_2_graphics_236 = new cjs.Graphics().p("AsjhpIE2oZIURLsIk2IZg");
	var mask_2_graphics_237 = new cjs.Graphics().p("AsphsIE3oZIUcLyIk2IZg");
	var mask_2_graphics_238 = new cjs.Graphics().p("AsuhwIE2oZIUnL5Ik2Iag");
	var mask_2_graphics_239 = new cjs.Graphics().p("As0hzIE2oZIUzMAIk2IZg");
	var mask_2_graphics_240 = new cjs.Graphics().p("As6h2IE3oZIU+MGIk3IZg");
	var mask_2_graphics_241 = new cjs.Graphics().p("As/h5IE2oZIVJMMIk2IZg");
	var mask_2_graphics_242 = new cjs.Graphics().p("AtFh9IE2oZIVVMUIk2IZg");
	var mask_2_graphics_243 = new cjs.Graphics().p("AtLiAIE3oZIVgMaIk3IZg");
	var mask_2_graphics_244 = new cjs.Graphics().p("AtQiDIE2oZIVrMgIk2IZg");
	var mask_2_graphics_245 = new cjs.Graphics().p("AtViGIE1oZIV3MmIk3IZg");
	var mask_2_graphics_246 = new cjs.Graphics().p("AtbiKIE2oZIWBMuIk2IYg");
	var mask_2_graphics_247 = new cjs.Graphics().p("AthiNIE2oZIWNM0Ik2IZg");
	var mask_2_graphics_248 = new cjs.Graphics().p("AtmiQIE2oZIWXM6Ik2IZg");
	var mask_2_graphics_249 = new cjs.Graphics().p("AtsiTIE2oZIWjNAIk2IZg");
	var mask_2_graphics_250 = new cjs.Graphics().p("AtxiXIE1oZIWvNIIk3IYg");
	var mask_2_graphics_251 = new cjs.Graphics().p("At3iaIE2oZIW5NOIk2IZg");
	var mask_2_graphics_252 = new cjs.Graphics().p("At9idIE2oZIXFNUIk2IZg");
	var mask_2_graphics_253 = new cjs.Graphics().p("AuCigIE1oZIXRNaIk3IZg");
	var mask_2_graphics_254 = new cjs.Graphics().p("AuIikIE2oZIXbNiIk2IYg");
	var mask_2_graphics_255 = new cjs.Graphics().p("AjjJ9IE1oZIXnNpIk2IZg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(175).to({graphics:mask_2_graphics_175,x:114.3,y:124.9}).wait(1).to({graphics:mask_2_graphics_176,x:183,y:205.7}).wait(1).to({graphics:mask_2_graphics_177,x:183.5,y:206}).wait(1).to({graphics:mask_2_graphics_178,x:184.1,y:206.4}).wait(1).to({graphics:mask_2_graphics_179,x:184.7,y:206.7}).wait(1).to({graphics:mask_2_graphics_180,x:185.2,y:207}).wait(1).to({graphics:mask_2_graphics_181,x:185.8,y:207.3}).wait(1).to({graphics:mask_2_graphics_182,x:186.4,y:207.7}).wait(1).to({graphics:mask_2_graphics_183,x:186.9,y:208}).wait(1).to({graphics:mask_2_graphics_184,x:187.5,y:208.3}).wait(1).to({graphics:mask_2_graphics_185,x:188.1,y:208.6}).wait(1).to({graphics:mask_2_graphics_186,x:188.6,y:209}).wait(1).to({graphics:mask_2_graphics_187,x:189.2,y:209.3}).wait(1).to({graphics:mask_2_graphics_188,x:189.8,y:209.6}).wait(1).to({graphics:mask_2_graphics_189,x:190.3,y:209.9}).wait(1).to({graphics:mask_2_graphics_190,x:190.9,y:210.3}).wait(1).to({graphics:mask_2_graphics_191,x:191.5,y:210.6}).wait(1).to({graphics:mask_2_graphics_192,x:192,y:210.9}).wait(1).to({graphics:mask_2_graphics_193,x:192.6,y:211.2}).wait(1).to({graphics:mask_2_graphics_194,x:193.1,y:211.6}).wait(1).to({graphics:mask_2_graphics_195,x:193.7,y:211.9}).wait(1).to({graphics:mask_2_graphics_196,x:194.3,y:212.2}).wait(1).to({graphics:mask_2_graphics_197,x:194.8,y:212.6}).wait(1).to({graphics:mask_2_graphics_198,x:195.4,y:212.9}).wait(1).to({graphics:mask_2_graphics_199,x:196,y:213.2}).wait(1).to({graphics:mask_2_graphics_200,x:196.5,y:213.5}).wait(1).to({graphics:mask_2_graphics_201,x:197.1,y:213.9}).wait(1).to({graphics:mask_2_graphics_202,x:197.7,y:214.2}).wait(1).to({graphics:mask_2_graphics_203,x:198.2,y:214.5}).wait(1).to({graphics:mask_2_graphics_204,x:198.8,y:214.8}).wait(1).to({graphics:mask_2_graphics_205,x:199.4,y:215.2}).wait(1).to({graphics:mask_2_graphics_206,x:199.9,y:215.5}).wait(1).to({graphics:mask_2_graphics_207,x:200.5,y:215.8}).wait(1).to({graphics:mask_2_graphics_208,x:201.1,y:216.1}).wait(1).to({graphics:mask_2_graphics_209,x:201.6,y:216.5}).wait(1).to({graphics:mask_2_graphics_210,x:202.2,y:216.8}).wait(1).to({graphics:mask_2_graphics_211,x:202.7,y:217.1}).wait(1).to({graphics:mask_2_graphics_212,x:203.3,y:217.4}).wait(1).to({graphics:mask_2_graphics_213,x:203.9,y:217.8}).wait(1).to({graphics:mask_2_graphics_214,x:204.4,y:218.1}).wait(1).to({graphics:mask_2_graphics_215,x:205,y:218.4}).wait(1).to({graphics:mask_2_graphics_216,x:205.6,y:218.7}).wait(1).to({graphics:mask_2_graphics_217,x:206.1,y:219.1}).wait(1).to({graphics:mask_2_graphics_218,x:206.7,y:219.4}).wait(1).to({graphics:mask_2_graphics_219,x:207.3,y:219.7}).wait(1).to({graphics:mask_2_graphics_220,x:207.8,y:220}).wait(1).to({graphics:mask_2_graphics_221,x:208.4,y:220.4}).wait(1).to({graphics:mask_2_graphics_222,x:208.9,y:220.7}).wait(1).to({graphics:mask_2_graphics_223,x:209.5,y:221}).wait(1).to({graphics:mask_2_graphics_224,x:210.1,y:221.3}).wait(1).to({graphics:mask_2_graphics_225,x:210.7,y:221.7}).wait(1).to({graphics:mask_2_graphics_226,x:211.2,y:222}).wait(1).to({graphics:mask_2_graphics_227,x:211.8,y:222.3}).wait(1).to({graphics:mask_2_graphics_228,x:212.3,y:222.6}).wait(1).to({graphics:mask_2_graphics_229,x:212.9,y:223}).wait(1).to({graphics:mask_2_graphics_230,x:213.5,y:223.3}).wait(1).to({graphics:mask_2_graphics_231,x:214,y:223.6}).wait(1).to({graphics:mask_2_graphics_232,x:214.6,y:223.9}).wait(1).to({graphics:mask_2_graphics_233,x:215.2,y:224.3}).wait(1).to({graphics:mask_2_graphics_234,x:215.7,y:224.6}).wait(1).to({graphics:mask_2_graphics_235,x:216.3,y:224.9}).wait(1).to({graphics:mask_2_graphics_236,x:216.9,y:225.3}).wait(1).to({graphics:mask_2_graphics_237,x:217.4,y:225.6}).wait(1).to({graphics:mask_2_graphics_238,x:218,y:225.9}).wait(1).to({graphics:mask_2_graphics_239,x:218.5,y:226.2}).wait(1).to({graphics:mask_2_graphics_240,x:219.1,y:226.6}).wait(1).to({graphics:mask_2_graphics_241,x:219.7,y:226.9}).wait(1).to({graphics:mask_2_graphics_242,x:220.2,y:227.2}).wait(1).to({graphics:mask_2_graphics_243,x:220.8,y:227.5}).wait(1).to({graphics:mask_2_graphics_244,x:221.4,y:227.9}).wait(1).to({graphics:mask_2_graphics_245,x:222,y:228.2}).wait(1).to({graphics:mask_2_graphics_246,x:222.5,y:228.5}).wait(1).to({graphics:mask_2_graphics_247,x:223.1,y:228.8}).wait(1).to({graphics:mask_2_graphics_248,x:223.6,y:229.2}).wait(1).to({graphics:mask_2_graphics_249,x:224.2,y:229.5}).wait(1).to({graphics:mask_2_graphics_250,x:224.8,y:229.8}).wait(1).to({graphics:mask_2_graphics_251,x:225.3,y:230.1}).wait(1).to({graphics:mask_2_graphics_252,x:225.9,y:230.5}).wait(1).to({graphics:mask_2_graphics_253,x:226.5,y:230.8}).wait(1).to({graphics:mask_2_graphics_254,x:227,y:231.1}).wait(1).to({graphics:mask_2_graphics_255,x:159.3,y:151}).wait(371));

	// 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(25,1,1).p("ACcM6QgagJgWgIQj1hUg7gVQimg9hxg7QkiiWh/jnQh5jZA9jjQA9jjDYiPQEGitELghQEFggEsBmQC6BAB+BbQB8BaB7Ce");
	this.shape_4.setTransform(280.4,180.5);
	this.shape_4._off = true;

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(175).to({_off:false},0).wait(451));

	// Layer 3 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_9 = new cjs.Graphics().p("Am8fkMAfdg9HQMqGhEXNjQEVNjmhMrQmhMqtjEWQlcBvlTAAQn6AAnlj6g");
	var mask_3_graphics_10 = new cjs.Graphics().p("AmgfyMAekg9kQMwGWEkNfQEhNfmVMwQmVMxtfEiQlqB5lgAAQnsAAnajsg");
	var mask_3_graphics_11 = new cjs.Graphics().p("EgGEAgAMAdsg+AQM2GKEvNbQEuNbmJM2QmKM2tbEuQl2CElvAAQndAAnPjeg");
	var mask_3_graphics_12 = new cjs.Graphics().p("EgFnAgOMAcyg+bQM8F+E8NWQE6NXl+M7Ql9M8tXE7QmDCOl+AAQnNAAnEjQg");
	var mask_3_graphics_13 = new cjs.Graphics().p("EgFKAgbMAb4g+1QNBFyFINSQFHNSlyNAQlyNBtRFHQmQCamMAAQm/ABm4jEg");
	var mask_3_graphics_14 = new cjs.Graphics().p("EgEtAgnMAa+g/OQNGFmFVNNQFTNNlmNGQlmNGtNFUQmcCmmbAAQmwAAmsi4g");
	var mask_3_graphics_15 = new cjs.Graphics().p("EgEQAgzMAaEg/mQNLFaFhNIQFfNIlaNLQlaNLtHFgQmpCympAAQmhAAmhisg");
	var mask_3_graphics_16 = new cjs.Graphics().p("EgDyAg/MAZJg/+QNQFOFsNDQFrNDlNNQQlONQtCFrQm1C+m4AAQmSABmUigg");
	var mask_3_graphics_17 = new cjs.Graphics().p("EgDVAhLMAYOhAVQNVFBF4M+QF3M/lBNTQlBNVs9F4QnBDKnGAAQmEAAmIiTg");
	var mask_3_graphics_18 = new cjs.Graphics().p("EgC3AhWMAXThArQNZE1GEM5QGDM5k1NYQk1NZs4GDQnLDYnWAAQl1AAl7iIg");
	var mask_3_graphics_19 = new cjs.Graphics().p("EgCZAhgMAWXhA/QNdEoGRMzQGOMzkoNdQkpNdsyGQQnXDlnkAAQlnAAluh+g");
	var mask_3_graphics_20 = new cjs.Graphics().p("EgB7AhqMAVbhBTQNiEcGcMtQGaMtkcNhQkcNistGbQnhDzn0AAQlZAAlgh0g");
	var mask_3_graphics_21 = new cjs.Graphics().p("EgBdAh0MAUfhBnQNmEQGnMnQGmMnkPNlQkQNmsmGmQnsECoDAAQlLAAlThqg");
	var mask_3_graphics_22 = new cjs.Graphics().p("EgA+Ah9MATihB5QNpEEGzMgQGyMhkDNpQkDNpsgGyQn3ERoSAAQk8AAlFhhg");
	var mask_3_graphics_23 = new cjs.Graphics().p("EgAgAiGMASmhCKQNtD2G+MbQG9Mbj2NsQj3NtsZG9QoBEgoiAAQkuAAk3hYg");
	var mask_3_graphics_24 = new cjs.Graphics().p("EgABAiPMARohCbQNxDqHKMTQHIMVjqNvQjpNxsUHJQoKEvoyAAQkfAAkphPg");
	var mask_3_graphics_25 = new cjs.Graphics().p("EAAdAiXMAQshCrQN0DdHVMNQHUMOjeNzQjdN0sMHUQoUE/pCAAQkRAAkbhHg");
	var mask_3_graphics_26 = new cjs.Graphics().p("EAA8AieMAPuhC5QN3DQHhMGQHfMHjRN2QjQN3sGHfQodFPpTAAQkCAAkMg/g");
	var mask_3_graphics_27 = new cjs.Graphics().p("EABbAilMAOxhDHQN5DEHsL/QHqMAjEN5QjDN5r/HrQomFfpjAAQj0AAj9g4g");
	var mask_3_graphics_28 = new cjs.Graphics().p("EAB6AisMANzhDUQN8C3H3L4QH1L4i3N8Qi3N8r4H2QouFwp0AAQjlAAjugxg");
	var mask_3_graphics_29 = new cjs.Graphics().p("EACZAizMAM1hDhQN/CqIBLwQIALyiqN+QiqN/rwIAQo2GCqGAAQjWAAjfgqg");
	var mask_3_graphics_30 = new cjs.Graphics().p("EAC5Ai4MAL2hDsQOBCdINLqQIKLqidOAQidOBrpILQo+GUqYAAQjGAAjPglg");
	var mask_3_graphics_31 = new cjs.Graphics().p("EADYAi+MAK4hD3QOECRIWLhQIWLjiQOCQiROErhIVQpGGlqpAAQi4AAi/geg");
	var mask_3_graphics_32 = new cjs.Graphics().p("EAD4AjDMAJ5hEAQOFCDIiLaQIgLbiDOEQiEOGrZIgQpNG3q8AAQipAAiugZg");
	var mask_3_graphics_33 = new cjs.Graphics().p("EAEXAjHMAI7hEIQOHB2IsLSQIqLTh2OGQh2OHrSIrQpUHKrPAAQiYAAifgVg");
	var mask_3_graphics_34 = new cjs.Graphics().p("EAE3AjLMAH8hEQQOJBpI2LKQI0LLhpOIQhpOJrKI1QpaHdriAAQiJAAiOgRg");
	var mask_3_graphics_35 = new cjs.Graphics().p("EAFWAjPMAG+hEXQOKBcJALCQI/LChcOKQhcOKrCI/QphHxr1AAQh6AAh9gNg");
	var mask_3_graphics_36 = new cjs.Graphics().p("EAF2AjSMAF+hEdQOMBPJKK6QJJK6hPOKQhPOMq5JJQpoIEsJAAQhpAAhsgJg");
	var mask_3_graphics_37 = new cjs.Graphics().p("EAGWAjVMAE/hEiQOMBCJVKxQJTKxhCOMQhDOMqwJTQptIZseAAQhZAAhagGg");
	var mask_3_graphics_38 = new cjs.Graphics().p("EAG2AjXMAEAhEmQONA1JeKoQJdKpg1OMQg1OOqoJdQpyIts0AAQhHAAhJgEg");
	var mask_3_graphics_39 = new cjs.Graphics().p("EAHVAjZMADBhEpQOOAoJoKfQJmKggoONQgnOOqgJnQp3JCtJAAQg2AAg4gCg");
	var mask_3_graphics_40 = new cjs.Graphics().p("EAH1AjaMACChErQOOAbJxKWQJxKXgbOOQgbOOqWJwQp8JYtfAAIhLgBg");
	var mask_3_graphics_41 = new cjs.Graphics().p("EAIVAjbMABChEtQOPAOJ7KNQJ5KOgOOOQgNOPqNJ5QqBJut2AAIgmAAg");
	var mask_3_graphics_42 = new cjs.Graphics().p("EAI0AjbMAAEhEtQOOABKEKEQKDKFAAONQgBOPqEKDQqEKEuOAAIgCAAg");
	var mask_3_graphics_43 = new cjs.Graphics().p("EAIYghSQOOgMKOJ6QKMJ8AMOOQANOPp7KMQp7KNuPANg");
	var mask_3_graphics_44 = new cjs.Graphics().p("EAH4ghRQOPgZKWJxQKVJyAaOOQAZOOpxKVQpyKXuOAZg");
	var mask_3_graphics_45 = new cjs.Graphics().p("EAHZghPQONgnKgJoQKeJpAnOOQAmONpnKeQppKfuOAng");
	var mask_3_graphics_46 = new cjs.Graphics().p("EAG5ghMQONg0KoJeQKnJfA0ONQA0OMpeKnQpfKouNA0g");
	var mask_3_graphics_47 = new cjs.Graphics().p("EAGZghJQONhBKwJUQKwJVBBOMQBBOMpUKvQpWKxuMBBg");
	var mask_3_graphics_48 = new cjs.Graphics().p("EAF6ghGQOLhNK5JKQK4JLBOOLQBOOKpKK5QpLK5uLBOg");
	var mask_3_graphics_49 = new cjs.Graphics().p("EAFaghBQOKhbLCJAQLAJBBbOKQBbOJpALBQpBLBuKBbg");
	var mask_3_graphics_50 = new cjs.Graphics().p("EAE6gg8QOJhoLKI2QLJI3BnOIQBoOIo1LJQo3LKuJBog");
	var mask_3_graphics_51 = new cjs.Graphics().p("EAEbgg2QOHh1LSIrQLQItB1OHQB1OGorLRQotLSuGB1g");
	var mask_3_graphics_52 = new cjs.Graphics().p("EAD7ggwQOGiCLZIhQLZIjCCOFQCCOEohLZQoiLauFCBg");
	var mask_3_graphics_53 = new cjs.Graphics().p("EADcggoQODiPLiIWQLgIYCPODQCPOCoXLhQoXLhuDCPg");
	var mask_3_graphics_54 = new cjs.Graphics().p("EAC9gghQOBibLpILQLoINCcOBQCbOBoLLnQoNLquBCbg");
	var mask_3_graphics_55 = new cjs.Graphics().p("EACdggYQN/ipLxIBQLvICCpN/QCoN+oBLvQoCLxt+Cpg");
	var mask_3_graphics_56 = new cjs.Graphics().p("EAB+ggPQN8i1L4H2QL3H3C1N8QC2N7n2L3Qn3L4t8C2g");
	var mask_3_graphics_57 = new cjs.Graphics().p("EABfggFQN6jCL+HrQL+HsDDN6QDCN4nrL+QnsL/t6DCg");
	var mask_3_graphics_58 = new cjs.Graphics().p("ABA/7QN3jPMGHgQMFHiDPN2QDPN2ngMFQnhMGt3DPg");
	var mask_3_graphics_59 = new cjs.Graphics().p("AAh/vQN0jcMMHVQMMHWDcNzQDcNznVMLQnWMNtzDcg");
	var mask_3_graphics_60 = new cjs.Graphics().p("AAD/kQNwjoMTHJQMTHLDoNxQDoNvnJMSQnLMUtwDog");
	var mask_3_graphics_61 = new cjs.Graphics().p("Agb/XQNsj1MZG+QMZG/D2NtQD1Nsm/MZQm/MatsD1g");
	var mask_3_graphics_62 = new cjs.Graphics().p("Ag6/KQNpkCMgGzQMfG0ECNpQEBNomyMfQm0MhtpECg");
	var mask_3_graphics_63 = new cjs.Graphics().p("AhY+8QNkkOMnGnQMlGoEONmQEPNkmoMlQmoMntlEOg");
	var mask_3_graphics_64 = new cjs.Graphics().p("Ah2+uQNgkaMtGbQMrGdEbNhQEaNhmbMrQmdMtthEag");
	var mask_3_graphics_65 = new cjs.Graphics().p("AiU+eQNckoMyGQQMxGREoNdQEnNdmQMxQmRMytdEng");
	var mask_3_graphics_66 = new cjs.Graphics().p("Aiy+PQNYkzM4GEQM3GFEzNZQE0NYmFM2QmEM5tZEzg");
	var mask_3_graphics_67 = new cjs.Graphics().p("AjQ9+QNUlAM9F4QM8F5FANVQFANTl4M8Ql5M+tVE/g");
	var mask_3_graphics_68 = new cjs.Graphics().p("Ajt9tQNOlMNDFsQNCFtFMNQQFMNOltNCQltNDtPFMg");
	var mask_3_graphics_69 = new cjs.Graphics().p("AkK9cQNJlYNIFgQNHFiFYNKQFYNKlgNHQlhNItLFYg");
	var mask_3_graphics_70 = new cjs.Graphics().p("Ako9JQNFlkNNFTQNMFWFkNFQFkNFlUNMQlVNNtGFkg");
	var mask_3_graphics_71 = new cjs.Graphics().p("AlE82QM/lxNRFIQNRFJFwNBQFwM/lINQQlINStBFxg");
	var mask_3_graphics_72 = new cjs.Graphics().p("Alh8jQM6l8NWE7QNVE9F8M7QF8M6k7NVQk9NXs7F8g");
	var mask_3_graphics_73 = new cjs.Graphics().p("Al+8PQM1mINaEvQNaExGIM2QGIM0kwNZQkwNbs1GIg");
	var mask_3_graphics_74 = new cjs.Graphics().p("Ama76QMvmUNeEjQNeEkGUMwQGUMvkjNdQkkNgsvGTg");
	var mask_3_graphics_75 = new cjs.Graphics().p("Am27kQMpmgNiEWQNjEYGfMqQGgMqkXNhQkXNjsqGfg");
	var mask_3_graphics_76 = new cjs.Graphics().p("AnS7OQMjmrNmEJQNnEMGrMjQGrMkkLNlQkKNnskGrg");
	var mask_3_graphics_77 = new cjs.Graphics().p("Anu64QMdm2NqD9QNqD/G3MdQG2Mej9NoQj/NrsdG2g");
	var mask_3_graphics_78 = new cjs.Graphics().p("AoJ6hQMWnCNuDxQNtDyHCMXQHCMXjxNsQjxNvsXHCg");
	var mask_3_graphics_79 = new cjs.Graphics().p("Aok6JQMPnNNyDkQNwDlHOMRQHNMQjkNwQjlNysRHNg");
	var mask_3_graphics_80 = new cjs.Graphics().p("Ao/5xQMJnYN0DXQN0DZHZMKQHYMKjYNyQjYN1sJHZg");
	var mask_3_graphics_81 = new cjs.Graphics().p("Apa5YQMCnjN4DKQN3DMHjMDQHkMDjLN2QjLN4sDHjg");
	var mask_3_graphics_82 = new cjs.Graphics().p("Ap04+QL7nvN6C+QN6C/HuL8QHvL8i+N4Qi/N7r7Hvg");
	var mask_3_graphics_83 = new cjs.Graphics().p("AqO4kQLzn5N9CwQN9CzH5L1QH6L0iyN7QixN+r1H5g");
	var mask_3_graphics_84 = new cjs.Graphics().p("Aqo4JQLsoFN/CkQN/CmIFLtQIELuikN9QilOAruIEg");
	var mask_3_graphics_85 = new cjs.Graphics().p("ArC3uQLloPOBCXQOCCZIPLlQIPLmiYOAQiYOCrlIPg");
	var mask_3_graphics_86 = new cjs.Graphics().p("Arb3SQLdoaODCKQOECMIZLeQIaLeiLOCQiLOEreIag");
	var mask_3_graphics_87 = new cjs.Graphics().p("Ar022QLWokOEB9QOGB/IkLWQIkLXh+ODQh+OGrWIkg");
	var mask_3_graphics_88 = new cjs.Graphics().p("AsN2ZQLOovOGBxQOHBxIvLPQIuLOhwOFQhxOIrPIvg");
	var mask_3_graphics_89 = new cjs.Graphics().p("Asm18QLGo4OIBjQOJBlI4LGQI5LGhkOHQhkOJrGI5g");
	var mask_3_graphics_90 = new cjs.Graphics().p("As+1eQK+pDOJBXQOKBXJDK+QJDK+hXOIQhXOLq+JDg");
	var mask_3_graphics_91 = new cjs.Graphics().p("AtW0/QK1pNOLBJQOKBLJOK1QJNK2hKOJQhKOMq2JNg");
	var mask_3_graphics_92 = new cjs.Graphics().p("Atu0gQKtpXOLA8QOMA+JXKtQJXKtg9OKQg9ONqtJXg");
	var mask_3_graphics_93 = new cjs.Graphics().p("AuF0BQKkpgOMAvQOMAwJhKlQJhKkgwOLQgwONqkJhg");
	var mask_3_graphics_94 = new cjs.Graphics().p("AuczhQKbpqOMAiQOOAkJqKbQJqKbgiOMQgjOOqbJqg");
	var mask_3_graphics_95 = new cjs.Graphics().p("AuzzAQKSp0ONAVQOOAWJzKTQJ0KSgVOMQgWOPqSJ0g");
	var mask_3_graphics_96 = new cjs.Graphics().p("AvKyfQKJp9ONAHQOOAKJ+KJQJ9KKgJOMQgIOOqJJ+g");
	var mask_3_graphics_97 = new cjs.Graphics().p("Avgx+QKAqGONgFQOOgEKGKAQKHKAAEOMQAFOPqAKGg");
	var mask_3_graphics_98 = new cjs.Graphics().p("Av2xcQJ2qPONgTQOOgQKQJ2QKPJ3ASOMQASOPp3KPg");
	var mask_3_graphics_99 = new cjs.Graphics().p("AwMw6QJtqYOMggQOOgeKYJuQKZJtAfOLQAfOPpuKYg");
	var mask_3_graphics_100 = new cjs.Graphics().p("AwZwlQJnqeOMgnQONgmKeJoQKeJnAnOLQAnOOpoKeg");
	var mask_3_graphics_101 = new cjs.Graphics().p("AwmwQQJhqjOMgvQONguKjJiQKkJiAuOKQAvOOpiKjg");
	var mask_3_graphics_102 = new cjs.Graphics().p("Awzv6QJcqpOLg3QOMg1KpJbQKpJcA2OKQA2OOpbKog");
	var mask_3_graphics_103 = new cjs.Graphics().p("AxAvlQJWquOLg/QOMg9KuJWQKtJWA/OKQA+OMpWKug");
	var mask_3_graphics_104 = new cjs.Graphics().p("AxMvPQJQqzOKhHQOLhFKzJQQKzJPBGOKQBGOMpPKzg");
	var mask_3_graphics_105 = new cjs.Graphics().p("AxZu5QJKq4OKhPQOKhNK4JJQK5JKBOOJQBOOMpKK4g");
	var mask_3_graphics_106 = new cjs.Graphics().p("AxlujQJEq+OJhWQOKhVK9JEQK9JDBWOIQBWOLpEK9g");
	var mask_3_graphics_107 = new cjs.Graphics().p("AxxuNQI9rCOIhfQOKhdLCI+QLCI+BeOHQBeOKo+LCg");
	var mask_3_graphics_108 = new cjs.Graphics().p("Ax9t3QI3rHOHhnQOJhkLHI3QLHI4BmOGQBlOJo3LHg");
	var mask_3_graphics_109 = new cjs.Graphics().p("AyJthQIxrMOGhuQOIhsLMIxQLMIxBtOGQBuOIoxLMg");
	var mask_3_graphics_110 = new cjs.Graphics().p("AyVtKQIrrROFh2QOHh0LRIrQLRIrB1OEQB1OIorLQg");
	var mask_3_graphics_111 = new cjs.Graphics().p("AyhszQIlrWOEh+QOGh8LVIlQLWIlB9ODQB9OGokLWg");
	var mask_3_graphics_112 = new cjs.Graphics().p("AyssdQIeraODiGQOFiELaIfQLbIeCEODQCFOFoeLag");
	var mask_3_graphics_113 = new cjs.Graphics().p("Ay4sGQIYrfOCiNQOEiMLfIYQLfIYCMOCQCNOEoYLfg");
	var mask_3_graphics_114 = new cjs.Graphics().p("AzDruQISrkOAiVQOCiULkISQLkISCUOAQCVOCoSLkg");
	var mask_3_graphics_115 = new cjs.Graphics().p("AzOrXQILroN/idQOBicLoIMQLpILCcN/QCcOBoLLog");
	var mask_3_graphics_116 = new cjs.Graphics().p("AzZrAQIFrsN+ilQN/ijLtIEQLtIFCjN+QClOAoFLsg");
	var mask_3_graphics_117 = new cjs.Graphics().p("AzkqoQH+rxN9itQN+irLxH/QLxH+CsN8QCsN+n+Lxg");
	var mask_3_graphics_118 = new cjs.Graphics().p("AzvqQQH4r2N7i0QN8izL2H4QL2H4CzN6QC0N9n4L2g");
	var mask_3_graphics_119 = new cjs.Graphics().p("Az5p4QHxr6N5i9QN7i6L6HxQL6HxC7N5QC8N8nyL6g");
	var mask_3_graphics_120 = new cjs.Graphics().p("A0EphQHrr+N3jEQN5jCL/HrQL+HrDDN3QDDN5nqL/g");
	var mask_3_graphics_121 = new cjs.Graphics().p("A0OpIQHksDN2jLQN3jKMDHkQMCHkDLN1QDLN4nkMDg");
	var mask_3_graphics_122 = new cjs.Graphics().p("A0YowQHdsHN0jTQN2jRMGHdQMHHdDSN0QDTN2ndMGg");
	var mask_3_graphics_123 = new cjs.Graphics().p("A0ioYQHWsLNyjaQN0jaMLHXQMLHWDaNyQDaN1nWMKg");
	var mask_3_graphics_124 = new cjs.Graphics().p("A0sn/QHPsPNxjjQNyjgMOHPQMPHQDiNwQDiNynQMPg");
	var mask_3_graphics_125 = new cjs.Graphics().p("A02nnQHJsSNujrQNwjoMTHJQMTHJDpNuQDqNwnJMTg");
	var mask_3_graphics_126 = new cjs.Graphics().p("A1AnOQHCsXNujxQNtjwMWHCQMXHCDxNrQDxNvnCMXg");
	var mask_3_graphics_127 = new cjs.Graphics().p("A1Jm1QG7sbNrj5QNrj4MbG8QMaG7D5NpQD5Ntm7Mag");
	var mask_3_graphics_128 = new cjs.Graphics().p("A1TmcQG1seNpkBQNokAMfG1QMeG0EANnQEBNrm0Meg");
	var mask_3_graphics_129 = new cjs.Graphics().p("A1cmDQGusiNmkIQNnkHMiGtQMiGtEINmQEINnmtMjg");
	var mask_3_graphics_130 = new cjs.Graphics().p("A1llpQGnsmNkkQQNkkPMmGmQMmGnEPNjQEQNlmmMmg");
	var mask_3_graphics_131 = new cjs.Graphics().p("A1ulQQGgsqNikXQNikWMpGfQMqGfEWNiQEYNimgMqg");
	var mask_3_graphics_132 = new cjs.Graphics().p("A12k3QGYstNgkfQNfkdMtGYQMtGYEfNfQEeNgmYMtg");
	var mask_3_graphics_133 = new cjs.Graphics().p("A1/kdQGRsxNekmQNcklMxGRQMxGRElNdQEnNdmSMxg");
	var mask_3_graphics_134 = new cjs.Graphics().p("A2HkDQGKs0NbkuQNaktM0GKQM0GKEtNaQEuNbmKM0g");
	var mask_3_graphics_135 = new cjs.Graphics().p("A2PjpQGDs4NYk2QNXkzM4GDQM3GDE1NXQE1NYmDM4g");
	var mask_3_graphics_136 = new cjs.Graphics().p("A2XjQQF7s6NWk9QNUk8M7F8QM7F8E8NVQE9NVl8M7g");
	var mask_3_graphics_137 = new cjs.Graphics().p("A2fi2QF0s+NTlEQNSlDM+F1QM+F1FDNSQFENSl0M+g");
	var mask_3_graphics_138 = new cjs.Graphics().p("A2nibQFttCNQlLQNPlLNBFuQNCFtFLNQQFLNPluNCg");
	var mask_3_graphics_139 = new cjs.Graphics().p("A2viBQFmtFNNlTQNMlRNFFmQNFFmFSNNQFSNMlmNFg");
	var mask_3_graphics_140 = new cjs.Graphics().p("A22hnQFftHNJlbQNKlZNHFfQNIFfFZNKQFaNJlfNIg");
	var mask_3_graphics_141 = new cjs.Graphics().p("A2+hMQFYtLNHliQNGlgNLFYQNKFYFhNGQFhNHlXNKg");
	var mask_3_graphics_142 = new cjs.Graphics().p("A3FgyQFRtNNDlpQNEloNNFRQNOFQFoNDQFoNElQNNg");
	var mask_3_graphics_143 = new cjs.Graphics().p("A3MgXQFJtRNBlwQNAluNQFJQNRFJFvNAQFwNAlJNQg");
	var mask_3_graphics_144 = new cjs.Graphics().p("A3SACQFBtSM9l3QM9l2NUFCQNTFBF2M9QF3M9lBNUg");
	var mask_3_graphics_145 = new cjs.Graphics().p("A3ZAdQE6tVM6l+QM6l9NWE6QNWE6F9M6QF/M6k7NWg");
	var mask_3_graphics_146 = new cjs.Graphics().p("A3gA4QEztYM3mFQM2mFNZEzQNZEzGEM2QGGM3kzNZg");
	var mask_3_graphics_147 = new cjs.Graphics().p("A3mBTQErtaM0mNQMzmLNbErQNbErGMMzQGNMzksNcg");
	var mask_3_graphics_148 = new cjs.Graphics().p("A3sBuQEktdMwmUQMvmSNeEkQNeEkGTMvQGTMwkjNeg");
	var mask_3_graphics_149 = new cjs.Graphics().p("A3yCJQEctfMtmbQMrmaNhEdQNhEcGZMsQGbMskcNhg");
	var mask_3_graphics_150 = new cjs.Graphics().p("A34CkQEVtiMpmiQMomgNjEVQNjEVGhMoQGiMpkVNjg");
	var mask_3_graphics_151 = new cjs.Graphics().p("A3+DAQEOtlMlmpQMkmnNmENQNlEOGoMkQGpMlkONlg");
	var mask_3_graphics_152 = new cjs.Graphics().p("A4DDbQEGtnMhmwQMhmuNoEGQNnEGGvMgQGwMikGNng");
	var mask_3_graphics_153 = new cjs.Graphics().p("A4ID2QD+toMdm3QMem2NpD+QNqD/G2MdQG3Mdj+Nqg");
	var mask_3_graphics_154 = new cjs.Graphics().p("A4OESQD3trMam+QMZm8NsD2QNsD3G9MZQG+Maj3Nsg");
	var mask_3_graphics_155 = new cjs.Graphics().p("A4TEtQDvttMWnEQMWnENuDvQNuDwHEMVQHEMWjvNug");
	var mask_3_graphics_156 = new cjs.Graphics().p("A4YFJQDotvMSnMQMRnKNxDoQNwDnHKMSQHMMRjoNxg");
	var mask_3_graphics_157 = new cjs.Graphics().p("A4cFlQDgtxMNnTQMOnRNyDgQNyDgHSMNQHSMOjgNyg");
	var mask_3_graphics_158 = new cjs.Graphics().p("A4hGAQDYtzMKnZQMKnXN0DYQN0DYHYMJQHZMKjYN0g");
	var mask_3_graphics_159 = new cjs.Graphics().p("A4lGcQDQt1MGngQMFneN2DRQN2DQHfMFQHfMGjQN2g");
	var mask_3_graphics_160 = new cjs.Graphics().p("A4oGtQDMt2MDnkQMDniN3DMQN3DLHjMDQHjMDjLN3g");
	var mask_3_graphics_161 = new cjs.Graphics().p("A4qG/QDHt3MAnoQMAnnN4DHQN4DHHnMAQHoMAjHN4g");
	var mask_3_graphics_162 = new cjs.Graphics().p("A4tHQQDCt4L+nsQL+nrN5DCQN5DCHrL+QHsL+jCN5g");
	var mask_3_graphics_163 = new cjs.Graphics().p("A4vHhQC9t5L7nwQL7nvN7C+QN6C9HvL7QHwL7i+N6g");
	var mask_3_graphics_164 = new cjs.Graphics().p("A4xHzQC4t6L5n1QL4nzN7C5QN7C5HzL4QH1L4i5N7g");
	var mask_3_graphics_165 = new cjs.Graphics().p("A4zIEQCzt7L2n4QL2n3N8CzQN8C0H3L2QH4L1i0N8g");
	var mask_3_graphics_166 = new cjs.Graphics().p("A42IVQCvt8Lzn8QLzn7N9CvQN9CvH8LzQH8LzivN9g");
	var mask_3_graphics_167 = new cjs.Graphics().p("A44InQCrt9LwoBQLwn/N+CrQN+CqH/LwQIALwiqN+g");
	var mask_3_graphics_168 = new cjs.Graphics().p("A46I4QCmt+LtoEQLtoDN/ClQN/CmIDLtQIFLtimN/g");
	var mask_3_graphics_169 = new cjs.Graphics().p("A48JJQCht+LroJQLqoHOAChQN/ChIILqQIILrihN/g");
	var mask_3_graphics_170 = new cjs.Graphics().p("A4+JbQCcuALooMQLooLOACcQOBCcILLnQIMLoicOBg");
	var mask_3_graphics_171 = new cjs.Graphics().p("A4/JsQCXuALloQQLloPOBCXQOBCXIPLlQIRLliXOBg");
	var mask_3_graphics_172 = new cjs.Graphics().p("A5BJ+QCSuBLioUQLioTOCCSQOCCSIULiQIULiiTOCg");
	var mask_3_graphics_173 = new cjs.Graphics().p("A5DKPQCOuBLfoZQLfoXODCOQODCNIXLfQIYLgiOOCg");
	var mask_3_graphics_174 = new cjs.Graphics().p("A5EKhQCIuDLcocQLeobOCCJQOECJIbLcQIcLciJODg");
	var mask_3_graphics_175 = new cjs.Graphics().p("A5GKyQCEuDLZogQLaofOECEQOECEIfLZQIgLaiEOEg");
	var mask_3_graphics_176 = new cjs.Graphics().p("A5ILEQB/uELXokQLXojOEB/QOFB/IjLXQIkLWh/OFg");
	var mask_3_graphics_177 = new cjs.Graphics().p("A5JLVQB6uELUooQLUomOFB6QOFB6InLTQIoLUh7OFg");
	var mask_3_graphics_178 = new cjs.Graphics().p("A5KLnQB1uFLQosQLSoqOFB1QOGB1IrLRQIrLQh1OGg");
	var mask_3_graphics_179 = new cjs.Graphics().p("A5ML4QBxuFLNowQLPouOFBwQOHBxIvLNQIvLOhwOGg");
	var mask_3_graphics_180 = new cjs.Graphics().p("A5NMKQBsuGLKo0QLMoyOGBsQOHBsIyLKQI0LKhsOIg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_3_graphics_9,x:276.8,y:227}).wait(1).to({graphics:mask_3_graphics_10,x:276.8,y:227}).wait(1).to({graphics:mask_3_graphics_11,x:276.8,y:227}).wait(1).to({graphics:mask_3_graphics_12,x:276.9,y:227}).wait(1).to({graphics:mask_3_graphics_13,x:276.9,y:227.1}).wait(1).to({graphics:mask_3_graphics_14,x:276.9,y:227.1}).wait(1).to({graphics:mask_3_graphics_15,x:276.9,y:227.1}).wait(1).to({graphics:mask_3_graphics_16,x:276.8,y:227}).wait(1).to({graphics:mask_3_graphics_17,x:276.8,y:227}).wait(1).to({graphics:mask_3_graphics_18,x:276.8,y:227}).wait(1).to({graphics:mask_3_graphics_19,x:276.8,y:227}).wait(1).to({graphics:mask_3_graphics_20,x:276.8,y:227}).wait(1).to({graphics:mask_3_graphics_21,x:276.8,y:227}).wait(1).to({graphics:mask_3_graphics_22,x:276.8,y:227}).wait(1).to({graphics:mask_3_graphics_23,x:276.8,y:227}).wait(1).to({graphics:mask_3_graphics_24,x:276.8,y:227}).wait(1).to({graphics:mask_3_graphics_25,x:276.7,y:227}).wait(1).to({graphics:mask_3_graphics_26,x:276.7,y:226.9}).wait(1).to({graphics:mask_3_graphics_27,x:276.7,y:226.9}).wait(1).to({graphics:mask_3_graphics_28,x:276.7,y:226.9}).wait(1).to({graphics:mask_3_graphics_29,x:276.7,y:226.9}).wait(1).to({graphics:mask_3_graphics_30,x:276.6,y:226.9}).wait(1).to({graphics:mask_3_graphics_31,x:276.6,y:226.8}).wait(1).to({graphics:mask_3_graphics_32,x:276.6,y:226.8}).wait(1).to({graphics:mask_3_graphics_33,x:276.6,y:226.8}).wait(1).to({graphics:mask_3_graphics_34,x:276.6,y:226.8}).wait(1).to({graphics:mask_3_graphics_35,x:276.6,y:226.8}).wait(1).to({graphics:mask_3_graphics_36,x:276.5,y:226.7}).wait(1).to({graphics:mask_3_graphics_37,x:276.5,y:226.7}).wait(1).to({graphics:mask_3_graphics_38,x:276.5,y:226.7}).wait(1).to({graphics:mask_3_graphics_39,x:276.5,y:226.7}).wait(1).to({graphics:mask_3_graphics_40,x:276.5,y:226.7}).wait(1).to({graphics:mask_3_graphics_41,x:276.5,y:226.7}).wait(1).to({graphics:mask_3_graphics_42,x:276.5,y:226.7}).wait(1).to({graphics:mask_3_graphics_43,x:276.5,y:226.7}).wait(1).to({graphics:mask_3_graphics_44,x:276.5,y:226.6}).wait(1).to({graphics:mask_3_graphics_45,x:276.5,y:226.6}).wait(1).to({graphics:mask_3_graphics_46,x:276.5,y:226.5}).wait(1).to({graphics:mask_3_graphics_47,x:276.5,y:226.4}).wait(1).to({graphics:mask_3_graphics_48,x:276.5,y:226.3}).wait(1).to({graphics:mask_3_graphics_49,x:276.5,y:226.1}).wait(1).to({graphics:mask_3_graphics_50,x:276.6,y:226}).wait(1).to({graphics:mask_3_graphics_51,x:276.6,y:225.8}).wait(1).to({graphics:mask_3_graphics_52,x:276.6,y:225.5}).wait(1).to({graphics:mask_3_graphics_53,x:276.6,y:225.3}).wait(1).to({graphics:mask_3_graphics_54,x:276.6,y:225}).wait(1).to({graphics:mask_3_graphics_55,x:276.6,y:224.8}).wait(1).to({graphics:mask_3_graphics_56,x:276.7,y:224.5}).wait(1).to({graphics:mask_3_graphics_57,x:276.7,y:224.1}).wait(1).to({graphics:mask_3_graphics_58,x:276.7,y:223.8}).wait(1).to({graphics:mask_3_graphics_59,x:276.7,y:223.4}).wait(1).to({graphics:mask_3_graphics_60,x:276.7,y:223}).wait(1).to({graphics:mask_3_graphics_61,x:276.7,y:222.6}).wait(1).to({graphics:mask_3_graphics_62,x:276.8,y:222.2}).wait(1).to({graphics:mask_3_graphics_63,x:276.8,y:221.7}).wait(1).to({graphics:mask_3_graphics_64,x:276.8,y:221.2}).wait(1).to({graphics:mask_3_graphics_65,x:276.8,y:220.7}).wait(1).to({graphics:mask_3_graphics_66,x:276.8,y:220.2}).wait(1).to({graphics:mask_3_graphics_67,x:276.8,y:219.6}).wait(1).to({graphics:mask_3_graphics_68,x:276.8,y:219.1}).wait(1).to({graphics:mask_3_graphics_69,x:276.8,y:218.5}).wait(1).to({graphics:mask_3_graphics_70,x:276.8,y:217.9}).wait(1).to({graphics:mask_3_graphics_71,x:276.8,y:217.3}).wait(1).to({graphics:mask_3_graphics_72,x:276.8,y:216.6}).wait(1).to({graphics:mask_3_graphics_73,x:276.8,y:215.9}).wait(1).to({graphics:mask_3_graphics_74,x:276.8,y:215.2}).wait(1).to({graphics:mask_3_graphics_75,x:276.8,y:214.5}).wait(1).to({graphics:mask_3_graphics_76,x:276.8,y:213.8}).wait(1).to({graphics:mask_3_graphics_77,x:276.8,y:213}).wait(1).to({graphics:mask_3_graphics_78,x:276.7,y:212.3}).wait(1).to({graphics:mask_3_graphics_79,x:276.7,y:211.5}).wait(1).to({graphics:mask_3_graphics_80,x:276.7,y:210.7}).wait(1).to({graphics:mask_3_graphics_81,x:276.7,y:209.8}).wait(1).to({graphics:mask_3_graphics_82,x:276.7,y:209}).wait(1).to({graphics:mask_3_graphics_83,x:276.7,y:208.1}).wait(1).to({graphics:mask_3_graphics_84,x:276.6,y:207.2}).wait(1).to({graphics:mask_3_graphics_85,x:276.6,y:206.3}).wait(1).to({graphics:mask_3_graphics_86,x:276.6,y:205.4}).wait(1).to({graphics:mask_3_graphics_87,x:276.6,y:204.4}).wait(1).to({graphics:mask_3_graphics_88,x:276.6,y:203.5}).wait(1).to({graphics:mask_3_graphics_89,x:276.5,y:202.5}).wait(1).to({graphics:mask_3_graphics_90,x:276.5,y:201.5}).wait(1).to({graphics:mask_3_graphics_91,x:276.5,y:200.5}).wait(1).to({graphics:mask_3_graphics_92,x:276.5,y:199.5}).wait(1).to({graphics:mask_3_graphics_93,x:276.5,y:198.4}).wait(1).to({graphics:mask_3_graphics_94,x:276.5,y:197.3}).wait(1).to({graphics:mask_3_graphics_95,x:276.5,y:196.3}).wait(1).to({graphics:mask_3_graphics_96,x:276.4,y:195.2}).wait(1).to({graphics:mask_3_graphics_97,x:276.4,y:194}).wait(1).to({graphics:mask_3_graphics_98,x:276.4,y:192.9}).wait(1).to({graphics:mask_3_graphics_99,x:276.4,y:191.7}).wait(1).to({graphics:mask_3_graphics_100,x:276.4,y:191}).wait(1).to({graphics:mask_3_graphics_101,x:276.4,y:190.3}).wait(1).to({graphics:mask_3_graphics_102,x:276.4,y:189.6}).wait(1).to({graphics:mask_3_graphics_103,x:276.4,y:188.9}).wait(1).to({graphics:mask_3_graphics_104,x:276.5,y:188.2}).wait(1).to({graphics:mask_3_graphics_105,x:276.5,y:187.5}).wait(1).to({graphics:mask_3_graphics_106,x:276.5,y:186.7}).wait(1).to({graphics:mask_3_graphics_107,x:276.5,y:186}).wait(1).to({graphics:mask_3_graphics_108,x:276.5,y:185.2}).wait(1).to({graphics:mask_3_graphics_109,x:276.5,y:184.5}).wait(1).to({graphics:mask_3_graphics_110,x:276.5,y:183.7}).wait(1).to({graphics:mask_3_graphics_111,x:276.5,y:183}).wait(1).to({graphics:mask_3_graphics_112,x:276.6,y:182.2}).wait(1).to({graphics:mask_3_graphics_113,x:276.6,y:181.5}).wait(1).to({graphics:mask_3_graphics_114,x:276.6,y:180.7}).wait(1).to({graphics:mask_3_graphics_115,x:276.6,y:179.9}).wait(1).to({graphics:mask_3_graphics_116,x:276.6,y:179.1}).wait(1).to({graphics:mask_3_graphics_117,x:276.6,y:178.3}).wait(1).to({graphics:mask_3_graphics_118,x:276.6,y:177.6}).wait(1).to({graphics:mask_3_graphics_119,x:276.6,y:176.8}).wait(1).to({graphics:mask_3_graphics_120,x:276.7,y:176}).wait(1).to({graphics:mask_3_graphics_121,x:276.7,y:175.2}).wait(1).to({graphics:mask_3_graphics_122,x:276.7,y:174.3}).wait(1).to({graphics:mask_3_graphics_123,x:276.7,y:173.5}).wait(1).to({graphics:mask_3_graphics_124,x:276.7,y:172.7}).wait(1).to({graphics:mask_3_graphics_125,x:276.7,y:171.9}).wait(1).to({graphics:mask_3_graphics_126,x:276.7,y:171.1}).wait(1).to({graphics:mask_3_graphics_127,x:276.7,y:170.2}).wait(1).to({graphics:mask_3_graphics_128,x:276.7,y:169.4}).wait(1).to({graphics:mask_3_graphics_129,x:276.8,y:168.6}).wait(1).to({graphics:mask_3_graphics_130,x:276.8,y:167.7}).wait(1).to({graphics:mask_3_graphics_131,x:276.8,y:166.9}).wait(1).to({graphics:mask_3_graphics_132,x:276.8,y:166}).wait(1).to({graphics:mask_3_graphics_133,x:276.8,y:165.2}).wait(1).to({graphics:mask_3_graphics_134,x:276.8,y:164.3}).wait(1).to({graphics:mask_3_graphics_135,x:276.8,y:163.5}).wait(1).to({graphics:mask_3_graphics_136,x:276.8,y:162.6}).wait(1).to({graphics:mask_3_graphics_137,x:276.8,y:161.7}).wait(1).to({graphics:mask_3_graphics_138,x:276.8,y:160.9}).wait(1).to({graphics:mask_3_graphics_139,x:276.8,y:160}).wait(1).to({graphics:mask_3_graphics_140,x:276.8,y:159.1}).wait(1).to({graphics:mask_3_graphics_141,x:276.8,y:158.2}).wait(1).to({graphics:mask_3_graphics_142,x:276.8,y:157.3}).wait(1).to({graphics:mask_3_graphics_143,x:276.8,y:156.4}).wait(1).to({graphics:mask_3_graphics_144,x:276.8,y:155.6}).wait(1).to({graphics:mask_3_graphics_145,x:276.8,y:154.7}).wait(1).to({graphics:mask_3_graphics_146,x:276.8,y:153.8}).wait(1).to({graphics:mask_3_graphics_147,x:276.8,y:152.9}).wait(1).to({graphics:mask_3_graphics_148,x:276.8,y:152}).wait(1).to({graphics:mask_3_graphics_149,x:276.8,y:151.1}).wait(1).to({graphics:mask_3_graphics_150,x:276.8,y:150.2}).wait(1).to({graphics:mask_3_graphics_151,x:276.8,y:149.2}).wait(1).to({graphics:mask_3_graphics_152,x:276.8,y:148.3}).wait(1).to({graphics:mask_3_graphics_153,x:276.8,y:147.4}).wait(1).to({graphics:mask_3_graphics_154,x:276.8,y:146.5}).wait(1).to({graphics:mask_3_graphics_155,x:276.8,y:145.6}).wait(1).to({graphics:mask_3_graphics_156,x:276.8,y:144.7}).wait(1).to({graphics:mask_3_graphics_157,x:276.8,y:143.7}).wait(1).to({graphics:mask_3_graphics_158,x:276.7,y:142.8}).wait(1).to({graphics:mask_3_graphics_159,x:276.7,y:141.9}).wait(1).to({graphics:mask_3_graphics_160,x:276.7,y:141.3}).wait(1).to({graphics:mask_3_graphics_161,x:276.7,y:140.7}).wait(1).to({graphics:mask_3_graphics_162,x:276.7,y:140.2}).wait(1).to({graphics:mask_3_graphics_163,x:276.7,y:139.6}).wait(1).to({graphics:mask_3_graphics_164,x:276.7,y:139}).wait(1).to({graphics:mask_3_graphics_165,x:276.7,y:138.4}).wait(1).to({graphics:mask_3_graphics_166,x:276.7,y:137.9}).wait(1).to({graphics:mask_3_graphics_167,x:276.6,y:137.3}).wait(1).to({graphics:mask_3_graphics_168,x:276.6,y:136.7}).wait(1).to({graphics:mask_3_graphics_169,x:276.6,y:136.1}).wait(1).to({graphics:mask_3_graphics_170,x:276.6,y:135.6}).wait(1).to({graphics:mask_3_graphics_171,x:276.6,y:135}).wait(1).to({graphics:mask_3_graphics_172,x:276.6,y:134.4}).wait(1).to({graphics:mask_3_graphics_173,x:276.6,y:133.8}).wait(1).to({graphics:mask_3_graphics_174,x:276.6,y:133.2}).wait(1).to({graphics:mask_3_graphics_175,x:276.6,y:132.7}).wait(1).to({graphics:mask_3_graphics_176,x:276.6,y:132.1}).wait(1).to({graphics:mask_3_graphics_177,x:276.6,y:131.5}).wait(1).to({graphics:mask_3_graphics_178,x:276.5,y:130.9}).wait(1).to({graphics:mask_3_graphics_179,x:276.5,y:130.3}).wait(1).to({graphics:mask_3_graphics_180,x:276.5,y:129.8}).wait(446));

	// 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(25,1,1).p("ACcM6QgagJgWgIQj1hUg7gVQimg9hxg7QkiiWh/jnQh5jZA9jjQA9jjDYiPQEGitELghQEFggEsBmQC6BAB+BbQB8BaB7Ce");
	this.shape_5.setTransform(280.4,180.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(25,1,1).p("AkIaEQA+AOA9ALQFCA6EfhyQEVhuCrjuQEqmikImkQh/jIkAh8Qhlgwieg3QjChAhrglQj1hUg6gVQimg9hyg7QkhiWiAjnQh4jaA9jjQA9jjDXiPQEHitEKghQEGggErBmQC6BAB+BbQB8BaB7Ce");
	this.shape_6.setTransform(290.5,269.2);

	var maskedShapeInstanceList = [this.shape_5,this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5}]},9).to({state:[{t:this.shape_6}]},246).wait(371));

	// Base
	this.instance_3 = new lib.Symbol1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(275.1,269.5);
	this.instance_3.alpha = 0.5;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).wait(617));

	// Background
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_7.setTransform(275,275,3.373,2.543);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_8.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).wait(626));

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