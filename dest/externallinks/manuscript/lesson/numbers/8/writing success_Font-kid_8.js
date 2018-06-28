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
	this.shape.graphics.f("#FFFFFF").s().p("AtKb5QmRlKgBn8QABlSCrkiQCHjxF/j6IgMgXQo2mtAAmiQAAmvFAk3QFDk3HKAAIA3AFIDdgHQHLBNENEdIBqCZIAzAqIgQAQQC4FJhRFKQheF1mYD9QiiBkAhAbQCSB6CUB5QFtEgAAG4QgBJelpFQQlDEpn1AAQoIAAl9k5gAqvGZQimEEAAEWQAAFoErDqQEPDTFWAAQFJAADYjRQD9jxAAm7QAAl1mtjxIlXiXIi5AAQl8ALjPEwgAgf7VQkkAAjTDMQjQDMAAErQAAE1GxESIC6B0IBfAiQEBgSEFilQEXisA8kPQA9kLi2kPIg+gsQi8jpm/AAIgqABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124.4,-209.7,248.9,419.6);


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
	this.instance.setTransform(-98.8,-190.3,1,1,68.8,0,0,0.3,-17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.4,scaleX:1,scaleY:1,rotation:-12.8,guide:{path:[-98.6,-190.2,-122.7,-183.6,-139,-166.3,-163.3,-140.6,-163.3,-104.3,-163.3,-99.9,-162.9,-95.6]}},59).wait(1));

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AtV2PQJShnHsFbQHuFbBnJTQBoJRlbHuQlaHupRBog");
	var mask_graphics_1 = new cjs.Graphics().p("Atq2EQJPh3H2FNQH3FNB5JQQB4JOlNH4QlMH3pOB4g");
	var mask_graphics_2 = new cjs.Graphics().p("At+12QJLiIH/E/QIBE/CJJLQCJJLk/IBQk+IApLCJg");
	var mask_graphics_3 = new cjs.Graphics().p("AuS1nQJHiZIIExQIJEwCaJIQCZJGkwIKQkwIJpGCZg");
	var mask_graphics_4 = new cjs.Graphics().p("Aum1XQJDioIQEhQIREiCqJDQCqJCkiISQkhIRpBCqg");
	var mask_graphics_5 = new cjs.Graphics().p("Au61EQI+i5IYESQIZETC6I+QC7I9kTIaQkSIZo9C6g");
	var mask_graphics_6 = new cjs.Graphics().p("AvN0wQI4jKIgEEQIgEEDLI4QDKI4kEIhQkCIgo5DKg");
	var mask_graphics_7 = new cjs.Graphics().p("Avg0bQIyjZInD0QInD0DaIzQDaIxjzIpQj0InoyDag");
	var mask_graphics_8 = new cjs.Graphics().p("Avz0EQIsjpItDlQIuDkDqItQDqIrjlIvQjjIuosDpg");
	var mask_graphics_9 = new cjs.Graphics().p("AwGzsQIlj4I0DVQI0DVD6IlQD5IljVI1QjUI0olD5g");
	var mask_graphics_10 = new cjs.Graphics().p("AwYzRQIekII5DFQI6DFEJIeQEIIejEI6QjEI6oeEIg");
	var mask_graphics_11 = new cjs.Graphics().p("Awry2QIXkXI+C1QJAC1EYIWQEXIXi0I/Qi0JAoWEXg");
	var mask_graphics_12 = new cjs.Graphics().p("Aw8yZQIOklJDCkQJFClEmIOQEnIPikJEQikJEoOEmg");
	var mask_graphics_13 = new cjs.Graphics().p("AxOx6QIGk1JICVQJICUE2IGQE1IGiUJIQiTJJoGE1g");
	var mask_graphics_14 = new cjs.Graphics().p("AxfxaQH9lDJMCEQJMCDFEH9QFEH9iEJNQiDJMn9FEg");
	var mask_graphics_15 = new cjs.Graphics().p("Axww5QH0lRJQBzQJPBzFSH0QFSH0hzJQQhyJPn0FSg");
	var mask_graphics_16 = new cjs.Graphics().p("AyBwWQHrlfJSBjQJTBiFfHqQFgHqhiJTQhiJTnpFfg");
	var mask_graphics_17 = new cjs.Graphics().p("AyRvyQHglsJWBRQJVBSFtHgQFtHghRJVQhRJWngFtg");
	var mask_graphics_18 = new cjs.Graphics().p("AyhvMQHWl6JXBBQJXBBF7HVQF7HWhBJXQhAJXnVF7g");
	var mask_graphics_19 = new cjs.Graphics().p("AywulQHLmHJZAwQJYAwGIHLQGIHKgwJZQgvJZnLGHg");
	var mask_graphics_20 = new cjs.Graphics().p("Ay/t9QG/mTJaAfQJaAfGUG/QGVHAgfJaQgeJanAGUg");
	var mask_graphics_21 = new cjs.Graphics().p("AzOtcQG0mfJbAOQJaAOGhG0QGgG0gNJaQgOJbm0Ggg");
	var mask_graphics_22 = new cjs.Graphics().p("Azds/QGpmsJagDQJbgCGtGoQGsGoAEJaQADJbmoGtg");
	var mask_graphics_23 = new cjs.Graphics().p("AzrshQGcm4JbgUQJagTG4GbQG5GcAUJbQAUJambG4g");
	var mask_graphics_24 = new cjs.Graphics().p("Az5sDQGQnDJZglQJagkHEGPQHEGPAlJaQAlJZmPHEg");
	var mask_graphics_25 = new cjs.Graphics().p("A0GrkQGCnOJZg1QJYg2HPGDQHPGCA2JYQA2JYmCHPg");
	var mask_graphics_26 = new cjs.Graphics().p("A0TrEQF1nZJXhGQJWhGHaF1QHZF1BHJXQBHJWl1HZg");
	var mask_graphics_27 = new cjs.Graphics().p("A0gqjQFonjJUhXQJUhXHkFnQHkFoBYJVQBYJUloHjg");
	var mask_graphics_28 = new cjs.Graphics().p("A0sqCQFantJShnQJRhoHuFaQHuFaBoJSQBpJRlaHtg");
	var mask_graphics_29 = new cjs.Graphics().p("A04pgQFMn2JPh5QJOh4H3FMQH4FMB5JPQB5JNlMH4g");
	var mask_graphics_30 = new cjs.Graphics().p("A1Do9QE+oAJLiJQJKiJIBE+QIAE+CKJLQCJJKk9IAg");
	var mask_graphics_31 = new cjs.Graphics().p("A1OoaQEwoIJGiZQJHiaIJEvQIJEwCaJHQCaJGkvIIg");
	var mask_graphics_32 = new cjs.Graphics().p("A1Yn2QEhoRJCipQJCiqIREgQISEhCqJDQCqJBkgIRg");
	var mask_graphics_33 = new cjs.Graphics().p("A1inSQESoYI9i6QI9i6IZERQIaESC6I+QC7I8kSIZg");
	var mask_graphics_34 = new cjs.Graphics().p("A1rmtQEDogI4jKQI3jKIhEDQIhECDKI4QDLI3kDIgg");
	var mask_graphics_35 = new cjs.Graphics().p("A10mIQD0onIyjZQIyjaInDzQIoDyDaIzQDbIwjzIog");
	var mask_graphics_36 = new cjs.Graphics().p("A18liQDkouIsjpQIsjqItDkQIvDjDqIsQDqIqjjIug");
	var mask_graphics_37 = new cjs.Graphics().p("A2Dk8QDUo0Ilj5QIlj5I0DUQI0DTD6ImQD6IjjUI0g");
	var mask_graphics_38 = new cjs.Graphics().p("A2KkVQDEo6IekIQIekJI5DEQI6DDEKIeQEIIdjDI6g");
	var mask_graphics_39 = new cjs.Graphics().p("A2QjvQC0o+IWkYQIWkXI/CzQI/C0EZIWQEXIUizJAg");
	var mask_graphics_40 = new cjs.Graphics().p("A2WjIQCkpDIOkmQIOknJECjQJECkEnIOQEnIMijJEg");
	var mask_graphics_41 = new cjs.Graphics().p("A2bigQCUpIIFk1QIGk1JICTQJICSE2IGQE1IFiTJHg");
	var mask_graphics_42 = new cjs.Graphics().p("A2fh5QCDpMH8lDQH9lDJMCCQJMCCFEH9QFEH8iCJLg");
	var mask_graphics_43 = new cjs.Graphics().p("A2jhRQBypPH0lSQHzlRJPBxQJQByFSH0QFSHyhyJPg");
	var mask_graphics_44 = new cjs.Graphics().p("A2mgpQBhpSHqlfQHqlgJSBhQJTBhFgHqQFgHphiJSg");
	var mask_graphics_45 = new cjs.Graphics().p("A2pgBQBRpUHfltQHgluJVBRQJVBQFuHgQFtHfhQJUg");
	var mask_graphics_46 = new cjs.Graphics().p("A2rAnQBApWHVl6QHVl7JXBAQJXA/F7HWQF7HUhAJWg");
	var mask_graphics_47 = new cjs.Graphics().p("A2tBPQAwpXHKmHQHKmIJYAvQJZAuGIHLQGIHJgvJYg");
	var mask_graphics_48 = new cjs.Graphics().p("A2uB4QAfpZG+mUQHAmUJZAeQJaAeGVG/QGUG+geJZg");
	var mask_graphics_49 = new cjs.Graphics().p("A2vChQAOpZGzmhQG0mgJaAMQJaANGiG0QGgGzgNJZg");
	var mask_graphics_50 = new cjs.Graphics().p("AwKs8QGnmtJbgEQJagEGtGoQGtGnAEJZMgtfAASQgDpZGomsg");
	var mask_graphics_51 = new cjs.Graphics().p("AwmsfQGbm4JbgVQJZgVG5GcQG5GaAUJZMgtcABkQgVpYGcm5g");
	var mask_graphics_52 = new cjs.Graphics().p("AxBsAQGQnEJZgmQJZgmHEGPQHEGPAlJYMgtYAC1QglpYGOnDg");
	var mask_graphics_53 = new cjs.Graphics().p("AxZrhQGCnPJYg2QJXg3HQGCQHOGBA3JXMgtSAEHQg2pWGCnPg");
	var mask_graphics_54 = new cjs.Graphics().p("AxxrBQF1nZJXhIQJVhHHaF0QHaF1BHJVMgtKAFYQhGpVF0nZg");
	var mask_graphics_55 = new cjs.Graphics().p("AyHqgQFonkJUhYQJThZHlFoQHjFnBZJTMgs/AGpQhYpTFnnjg");
	var mask_graphics_56 = new cjs.Graphics().p("Aybp/QFantJRhpQJRhpHuFZQHuFZBoJRMgsxAH6QhopQFZnug");
	var mask_graphics_57 = new cjs.Graphics().p("AyupdQFMn3JOh5QJOh6H3FMQH3FLB6JNMgsjAJKQh4pNFLn3g");
	var mask_graphics_58 = new cjs.Graphics().p("Ay/o6QE+oAJKiKQJKiLIAE+QIBE9CKJKMgsRAKZQiJpJE9oAg");
	var mask_graphics_59 = new cjs.Graphics().p("AzPoWQEvoJJHibQJFibIKEvQIIEuCbJHMgr9ALoQiapFEvoIg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-33.3,y:-108.1}).wait(1).to({graphics:mask_graphics_1,x:-35.3,y:-108.5}).wait(1).to({graphics:mask_graphics_2,x:-37.2,y:-109}).wait(1).to({graphics:mask_graphics_3,x:-39.2,y:-109.5}).wait(1).to({graphics:mask_graphics_4,x:-41.2,y:-110}).wait(1).to({graphics:mask_graphics_5,x:-43.1,y:-110.7}).wait(1).to({graphics:mask_graphics_6,x:-45,y:-111.3}).wait(1).to({graphics:mask_graphics_7,x:-47,y:-112}).wait(1).to({graphics:mask_graphics_8,x:-48.9,y:-112.8}).wait(1).to({graphics:mask_graphics_9,x:-50.7,y:-113.6}).wait(1).to({graphics:mask_graphics_10,x:-52.6,y:-114.5}).wait(1).to({graphics:mask_graphics_11,x:-54.5,y:-115.4}).wait(1).to({graphics:mask_graphics_12,x:-56.3,y:-116.4}).wait(1).to({graphics:mask_graphics_13,x:-58.1,y:-117.4}).wait(1).to({graphics:mask_graphics_14,x:-59.8,y:-118.4}).wait(1).to({graphics:mask_graphics_15,x:-61.6,y:-119.5}).wait(1).to({graphics:mask_graphics_16,x:-63.3,y:-120.7}).wait(1).to({graphics:mask_graphics_17,x:-65,y:-121.8}).wait(1).to({graphics:mask_graphics_18,x:-66.6,y:-123.1}).wait(1).to({graphics:mask_graphics_19,x:-68.2,y:-124.4}).wait(1).to({graphics:mask_graphics_20,x:-69.8,y:-125.7}).wait(1).to({graphics:mask_graphics_21,x:-71.3,y:-126.3}).wait(1).to({graphics:mask_graphics_22,x:-72.8,y:-126.3}).wait(1).to({graphics:mask_graphics_23,x:-74.2,y:-126.3}).wait(1).to({graphics:mask_graphics_24,x:-75.5,y:-126.3}).wait(1).to({graphics:mask_graphics_25,x:-76.9,y:-126.3}).wait(1).to({graphics:mask_graphics_26,x:-78.1,y:-126.3}).wait(1).to({graphics:mask_graphics_27,x:-79.3,y:-126.3}).wait(1).to({graphics:mask_graphics_28,x:-80.5,y:-126.3}).wait(1).to({graphics:mask_graphics_29,x:-81.7,y:-126.4}).wait(1).to({graphics:mask_graphics_30,x:-82.7,y:-126.4}).wait(1).to({graphics:mask_graphics_31,x:-83.8,y:-126.4}).wait(1).to({graphics:mask_graphics_32,x:-84.8,y:-126.4}).wait(1).to({graphics:mask_graphics_33,x:-85.7,y:-126.4}).wait(1).to({graphics:mask_graphics_34,x:-86.6,y:-126.4}).wait(1).to({graphics:mask_graphics_35,x:-87.5,y:-126.4}).wait(1).to({graphics:mask_graphics_36,x:-88.3,y:-126.4}).wait(1).to({graphics:mask_graphics_37,x:-89,y:-126.4}).wait(1).to({graphics:mask_graphics_38,x:-89.7,y:-126.4}).wait(1).to({graphics:mask_graphics_39,x:-90.4,y:-126.4}).wait(1).to({graphics:mask_graphics_40,x:-91,y:-126.4}).wait(1).to({graphics:mask_graphics_41,x:-91.5,y:-126.4}).wait(1).to({graphics:mask_graphics_42,x:-92,y:-126.4}).wait(1).to({graphics:mask_graphics_43,x:-92.5,y:-126.3}).wait(1).to({graphics:mask_graphics_44,x:-92.9,y:-126.3}).wait(1).to({graphics:mask_graphics_45,x:-93.2,y:-126.3}).wait(1).to({graphics:mask_graphics_46,x:-93.5,y:-126.2}).wait(1).to({graphics:mask_graphics_47,x:-93.7,y:-126.2}).wait(1).to({graphics:mask_graphics_48,x:-93.8,y:-126.2}).wait(1).to({graphics:mask_graphics_49,x:-93.9,y:-126.2}).wait(1).to({graphics:mask_graphics_50,x:-94,y:-126.2}).wait(1).to({graphics:mask_graphics_51,x:-94,y:-126.2}).wait(1).to({graphics:mask_graphics_52,x:-94.1,y:-126.2}).wait(1).to({graphics:mask_graphics_53,x:-94.3,y:-126.2}).wait(1).to({graphics:mask_graphics_54,x:-94.5,y:-126.2}).wait(1).to({graphics:mask_graphics_55,x:-94.8,y:-126.3}).wait(1).to({graphics:mask_graphics_56,x:-95.2,y:-126.3}).wait(1).to({graphics:mask_graphics_57,x:-95.6,y:-126.3}).wait(1).to({graphics:mask_graphics_58,x:-96.1,y:-126.3}).wait(1).to({graphics:mask_graphics_59,x:-96.6,y:-126.3}).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AkVH9QgQhVAAhcQAAlqDykBQCYiiDBg7");
	this.shape.setTransform(-134,-137.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-165.9,-201.5,71.6,117.3);


(lib.honeyflap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.honeybee();
	this.instance.parent = this;
	this.instance.setTransform(22.6,-144.1,0.422,0.422,0,0,0,-37.5,63.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIB9IgQgCIgNgEIgPgGIgFgDIgDgBIgDgCIgCgBIgDgCIgCgBIgCgCIgCgBIgCgCIgCgCIgCgBIgBgCIgDgBIgCgCIgCgCIgBgBIgBgCIgCgCIgBgBIgCgCIgCgCIgBgCIgBgBIgBgCIgBgCIgCgBIgBgCIgBgCIgBgCIgBgBIgBgCIgBgCIgBgCIAAgBIgBgCIgCgCIgBgCIAAgBIgBgCIgBgCIAAgCIAAgCIgBgBIgBgCIAAgCIgBgCIAAgCIgBgBIAAgCIAAgCIgBgCIAAgCIgBgCIAAgCIgBgBIAAgCIAAgCIAAgCIAAgCIgBgCIAAgCIAAgCIAAgBIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIABgCIgBgCIABgCIAAgCIAAgBIABgCIAAgCIAAgCIABgCIABgCIAAgCIAAgCIABgCIABgCIAAgCIABgCIABgCIAAgCIABgCIABgCIABgCIAAgCIABgCIACgCIABgCIABgCIAAgCIACgDIABgCIACgCIACgCIABgCIABgCIACgCIABgCIACgDIADgCIABgCIACgCIAHgHIANgJIAIgFIAMgGIAHgDIAMgEIAMgCIALgBIAJAAIAJAAIAHABIAKACIAKADIADABIAEACIADABIAEABIACACIAEABIACACIADABIACACIADABIACACIACABIACACIADACIACABIABACIACABIABACIADACIACABIABACIABACIACABIACACIABACIACABIAAACIACACIABACIABABIACACIABACIABACIABABIABACIABACIAAABIABACIABACIACACIABACIAAABIABACIABACIABACIAAABIABACIAAACIABACIAAACIABABIAAACIABACIABACIAAACIABACIAAACIAAABIAAACIABACIAAACIAAACIABACIAAACIAAABIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAABIAAACIgBACIAAACIAAACIAAACIAAACIgBACIAAACIgBACIAAACIgBACIAAACIgBACIgBACIAAACIgBACIAAACIgBACIgBACIAAACIgBACIgBACIgBACIgCACIAAACIgBACIgCACIgBACIgBACIgBACIgCADIgCACIgBACIgCACIgBACIgCACIgCACIgCADIgCACIgCACIgDACIgDADIgFAEIgDADIgEACIgIAFIgNAGIgFACIgHADIgSAEIgLABIgHAAIgIAAg");
	this.shape.setTransform(22.3,-143.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-215.3,105.5,83.9);


// stage content:
(lib.writingsuccess_Fontkid_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_438 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(438).call(this.frame_438).wait(2));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(286.3,95,0.999,0.999,0,-8.5,171.5,22.4,-144);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[286.3,95.1,281.9,95.7,260.2,96.4,238.4,97.1,207.5,121.8,176.7,146.5,179.5,181.3,182.3,216.1,209.4,241,236.7,265.7,259.3,272.1,277.9,277.3,283.6,278.9,314.5,287.1,338,304.3,362.2,322,373,349.9,383.6,377.4,375,405.7,366.5,433.9,345.9,454.9,324.8,476.3,295.2,480.6,265.9,485.1,238.3,474.3,210.6,463.5,191.4,441,173.3,419.8,170.8,391.9,168.2,362.5,181.1,336.1,194.4,308.8,219.7,291.8,234.9,281.5,252.2,278.3]}},240).to({scaleX:1,scaleY:1,skewX:-8.3,skewY:171.7,guide:{path:[252.2,278.1,294.8,274.2,316.3,263.4,337.9,252.5,358.1,230.3,378.4,208,378.1,176.7,377.9,145.3,350.7,123.1,323.5,100.8,300.1,98.3,293.6,97.5,288.7,97]}},121).wait(9).to({startPosition:0},0).to({scaleX:1,scaleY:1,skewX:-8.5,skewY:171.5,guide:{path:[288.8,96.9,308.1,88.6,326.8,79.1,366.4,58.9,392,92,433.3,145.7,496.8,109,536,86.4,566.7,52.6,617.7,-3.7,659.9,59.2]}},60).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(286.4,95.1,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},361).wait(70));

	// Layer 26
	this.instance_1 = new lib.ar1("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(270.2,435.5,1,1,0,17,-163);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100).to({_off:false},0).wait(340));

	// Layer 16
	this.instance_2 = new lib.ar1("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(253.6,230.1,1,1,0,0,0,0.1,0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(431));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_349 = new cjs.Graphics().p("AkYT4MAdighnQG9GHAnJQQAmJQmIG9QmHG+pQAmQg2ADg0AAQoPAAmUlkg");
	var mask_graphics_350 = new cjs.Graphics().p("Aj5UTMAckgicQHIF6A3JOQA3JPl6HIQl7HJpOA2QhMAHhKAAQn0AAmNlJg");
	var mask_graphics_351 = new cjs.Graphics().p("AjZUsMAbkgjPQHTFtBHJMQBIJNltHTQluHTpMBHQhiANheAAQnbAAmEkxg");
	var mask_graphics_352 = new cjs.Graphics().p("Ai5VEMAajgkAQHdFgBZJKQBYJKlfHdQlhHepKBYQh3AShyAAQnDAAl7kZg");
	var mask_graphics_353 = new cjs.Graphics().p("AiYVcMAZggkwQHnFSBqJIQBpJHlSHnQlSHnpIBpQiLAZiGAAQmrAAlykBg");
	var mask_graphics_354 = new cjs.Graphics().p("Ah2VyMAYcgldQHxFEB6JFQB6JDlEHwQlFHxpEB5QifAiiaAAQmUAAlnjrg");
	var mask_graphics_355 = new cjs.Graphics().p("AhUWIMAXYgmJQH5E2CKJBQCLI/k2H6Qk2H5pACKQizArisAAQl/AAlcjVg");
	var mask_graphics_356 = new cjs.Graphics().p("AgxWcMAWRgmyQICEnCbI9QCbI7knICQkoIDo8CaQjFA1i/AAQlqAAlQjBg");
	var mask_graphics_357 = new cjs.Graphics().p("AgNWwMAVKgnaQIKEZCrI4QCrI2kZIKQkYILo4CqQjYBCjRAAQlVAAlDiug");
	var mask_graphics_358 = new cjs.Graphics().p("AAWXCMAUCgn+QISEJC7IzQC7IxkJISQkJISozC7QjpBOjkAAQlCAAk2icg");
	var mask_graphics_359 = new cjs.Graphics().p("AA7XUMAS5goiQIZD6DLItQDLIsj6IZQj7IaosDKQj7Bcj2AAQkuAAkoiKg");
	var mask_graphics_360 = new cjs.Graphics().p("ABhXkMARtgpDQIgDrDbInQDbImjrIgQjrIgomDaQkLBrkJAAQkbAAkYh6g");
	var mask_graphics_361 = new cjs.Graphics().p("ACGX0MAQjgpiQImDbDrIgQDqIgjbImQjbInogDqQkbB6kbAAQkIAAkKhqg");
	var mask_graphics_362 = new cjs.Graphics().p("ACsYCMAPXgp/QIsDLD6IaQD6IYjMItQjLItoZD5QkpCKkvAAQj1AAj6hbg");
	var mask_graphics_363 = new cjs.Graphics().p("ADbYSMAN5gqfQIzC4ENIRQEMIPi4IzQi5I0oQELQk6CglGAAQjfAAjlhLg");
	var mask_graphics_364 = new cjs.Graphics().p("AEKYhMAMcgq9QI5ClEeIHQEeIHilI5QikI5oHEdQlLC3leAAQjJAAjPg8g");
	var mask_graphics_365 = new cjs.Graphics().p("AE5YuMAK9grXQI/CREwH+QEwH9iRI9QiSI/n9EvQlZDPl3AAQiyAAi6gvg");
	var mask_graphics_366 = new cjs.Graphics().p("AFpY6MAJegruQJDB9FBHzQFBHyh9JDQh9JDnzFBQlnDomRAAQicAAiigjg");
	var mask_graphics_367 = new cjs.Graphics().p("AGaZDMAH9gsBQJHBqFSHnQFTHnhqJHQhpJInoFRQl0ECmrAAQiFAAiKgZg");
	var mask_graphics_368 = new cjs.Graphics().p("AHKZMMAGdgsSQJKBWFjHbQFjHchWJJQhVJMnbFhQmAEfnIAAQhtAAhygQg");
	var mask_graphics_369 = new cjs.Graphics().p("AH7ZSMAE7gseQJNBBFzHPQFzHQhBJMQhBJOnPFyQmKE8nmAAQhVAAhYgKg");
	var mask_graphics_370 = new cjs.Graphics().p("AIsZXMADZgsnQJQAtGCHCQGDHCgtJOQgtJQnCGCQmUFboEAAQg8AAg+gFg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(349).to({graphics:mask_graphics_349,x:209.7,y:162.8}).wait(1).to({graphics:mask_graphics_350,x:209.7,y:162.8}).wait(1).to({graphics:mask_graphics_351,x:209.7,y:162.9}).wait(1).to({graphics:mask_graphics_352,x:209.8,y:162.9}).wait(1).to({graphics:mask_graphics_353,x:209.8,y:162.9}).wait(1).to({graphics:mask_graphics_354,x:209.8,y:162.9}).wait(1).to({graphics:mask_graphics_355,x:209.8,y:162.9}).wait(1).to({graphics:mask_graphics_356,x:209.8,y:162.9}).wait(1).to({graphics:mask_graphics_357,x:209.9,y:163}).wait(1).to({graphics:mask_graphics_358,x:209.9,y:163}).wait(1).to({graphics:mask_graphics_359,x:209.9,y:163}).wait(1).to({graphics:mask_graphics_360,x:209.9,y:163}).wait(1).to({graphics:mask_graphics_361,x:209.9,y:163}).wait(1).to({graphics:mask_graphics_362,x:209.9,y:162.9}).wait(1).to({graphics:mask_graphics_363,x:209.9,y:162.9}).wait(1).to({graphics:mask_graphics_364,x:209.9,y:162.9}).wait(1).to({graphics:mask_graphics_365,x:209.8,y:162.9}).wait(1).to({graphics:mask_graphics_366,x:209.8,y:162.9}).wait(1).to({graphics:mask_graphics_367,x:209.8,y:162.8}).wait(1).to({graphics:mask_graphics_368,x:209.8,y:162.8}).wait(1).to({graphics:mask_graphics_369,x:209.8,y:162.8}).wait(1).to({graphics:mask_graphics_370,x:209.8,y:162.8}).wait(70));

	// 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(25,1,1).p("AiHimQgOgEgPgEQjdhAkJjvQkRj2gYlcQgYlbEckHQEPj7GIgCQAKAAAKAAQAEAAAEAAIAJAAQAGABB8AIQB8AIEMBhQB5A6BhBXQEWD2AEE5QAEE5jLDeQjKDejYBtQidBQkNAqAiHimQoVCXklImQhkDvAXEFQAZEWC3DVQDADgEVBtQETBrElgsQEogsDTjWQDNjRBWkaQBWkchrkSQhskYjxixQjQiXmziHQg9gThCgTg");
	this.shape_1.setTransform(274.5,288.5);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(349).to({_off:false},0).wait(91));

	// Mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_249 = new cjs.Graphics().p("AgdOzQkun/CTo9QCTo/H9kuQH/kvI+CTMgLGArWQo+iTkun+g");
	var mask_1_graphics_250 = new cjs.Graphics().p("AAJPPQk7n2CDpCQCEpCH1k7QH2k9JDCDMgJ8ArpQpCiEk8n2g");
	var mask_1_graphics_251 = new cjs.Graphics().p("AAwPrQlInuB0pEQB0pGHslJQHulKJGB0MgIxAr5QpFh0lKnug");
	var mask_1_graphics_252 = new cjs.Graphics().p("ABZQHQlWnlBlpHQBkpJHklVQHllYJIBlMgHlAsGQpJhklWnlg");
	var mask_1_graphics_253 = new cjs.Graphics().p("ACCQjQlinbBVpKQBVpMHaliQHblkJLBVMgGaAsSQpLhVljnbg");
	var mask_1_graphics_254 = new cjs.Graphics().p("ACsQ/QlunSBFpNQBFpMHQlvQHSlxJNBFMgFOAsdQpNhFlwnSg");
	var mask_1_graphics_255 = new cjs.Graphics().p("ADYRbQl8nIA2pPQA1pOHHl7QHHl9JPA1MgECAslQpOg2l8nHg");
	var mask_1_graphics_256 = new cjs.Graphics().p("AEDR2QmHm9AmpQQAlpPG9mHQG9mKJQAmMgC2AsqQpPglmJm+g");
	var mask_1_graphics_257 = new cjs.Graphics().p("AEwSSQmTmzAWpRQAWpQGxmTQGzmVJRAWMgBpAsuQpRgWmUmyg");
	var mask_1_graphics_258 = new cjs.Graphics().p("AFeStQmfmoAGpRQAGpQGnmfQGomgJRAGMgAdAswQpRgGmfmog");
	var mask_1_graphics_259 = new cjs.Graphics().p("AF0TIQmqmdgKpRQgJpQGbmqQGdmrJQgKMAAwAsvIgbABQo/AAmhmTg");
	var mask_1_graphics_260 = new cjs.Graphics().p("AF9TiQm1mRgZpQQgapQGQm1QGRm2JQgaMAB9AstQgkACgjAAQokAAmbl5g");
	var mask_1_graphics_261 = new cjs.Graphics().p("AGGT7Qm/mFgppPQgqpPGEm/QGFnBJQgqMADJAspQg5AEg4AAQoKAAmVlgg");
	var mask_1_graphics_262 = new cjs.Graphics().p("AGQUUQnJl5g5pOQg6pOF4nJQF5nLJPg6MAEVAsjQhOAHhMAAQnxAAmOlHg");
	var mask_1_graphics_263 = new cjs.Graphics().p("AGbUsQnTlthJpMQhJpMFsnUQFsnVJNhJMAFhAsaQhjAMheAAQnaAAmGkvg");
	var mask_1_graphics_264 = new cjs.Graphics().p("AGnVDQndlghZpLQhZpKFfncQFgnfJLhZMAGtAsQQh2AShyAAQnDAAl9kZg");
	var mask_1_graphics_265 = new cjs.Graphics().p("AGzVZQnmlUhppHQhopHFSnmQFTnoJIhpMAH5AsDQiKAZiEAAQmtAAl0kDg");
	var mask_1_graphics_266 = new cjs.Graphics().p("AHAVuQnvlGh4pFQh4pEFFnvQFGnxJFh4MAJDAr1QicAgiWAAQmYAAlqjug");
	var mask_1_graphics_267 = new cjs.Graphics().p("AHNWCQn3k4iIpCQiHpAE5n4QE3n5JCiIMAKOArlQiuAoioAAQmEAAlgjag");
	var mask_1_graphics_268 = new cjs.Graphics().p("AHcWWQoAkriXo+QiXo9Esn/QEpoCI+iXMALZArSQjBAzi5AAQlwAAlUjHg");
	var mask_1_graphics_269 = new cjs.Graphics().p("AHqWpQoHkeimo5Qimo6EdoGQEcoJI6imMAMiAq9QjRA9jLAAQldAAlJi0g");
	var mask_1_graphics_270 = new cjs.Graphics().p("AH6W6QoPkPi1o1Qi2o1EQoNQEOoRI1i1MANrAqmQjiBJjcAAQlKAAk8ijg");
	var mask_1_graphics_271 = new cjs.Graphics().p("AIKXLQoWkBjEovQjFowECoVQEAoYIvjEMAO0AqOQjyBVjtAAQk4AAkviSg");
	var mask_1_graphics_272 = new cjs.Graphics().p("AIbXbQodjyjToqQjTorDzocQDxoeIqjTMAP8Ap0QkBBij/AAQkmAAkhiCg");
	var mask_1_graphics_273 = new cjs.Graphics().p("AIsXrQokjljhokQjiolDlohQDjolIkjiMARDApYQkRBwkQAAQkUAAkThyg");
	var mask_1_graphics_274 = new cjs.Graphics().p("AI+X5QoqjWjvoeQjxoeDWooQDVorIdjwMASKAo6QkfB/kjAAQkCAAkEhkg");
	var mask_1_graphics_275 = new cjs.Graphics().p("AJQYGQovjGj+oYQj/oYDHotQDHowIWj/MATPAoaQktCPk0AAQjxAAj1hXg");
	var mask_1_graphics_276 = new cjs.Graphics().p("AJjYTQo0i4kMoQQkNoRC4ozQC3o1IQkNMAUTAn4Qk6CglHAAQjfAAjlhKg");
	var mask_1_graphics_277 = new cjs.Graphics().p("AJ3YeQo5iokaoJQkboKCpo3QCoo6IIkbMAVXAnVQlGCxlaAAQjOAAjUg/g");
	var mask_1_graphics_278 = new cjs.Graphics().p("AKLYpQo9iZkooCQkpoBCao8QCYo+IBkpMAWaAmvQlTDElsAAQi9AAjDg0g");
	var mask_1_graphics_279 = new cjs.Graphics().p("AKgYyQpBiJk2n6Qk2n5CKpAQCJpCH4k2MAXcAmIQleDXmAAAQirAAixgrg");
	var mask_1_graphics_280 = new cjs.Graphics().p("AK1Y7QpFh6lCnxQlFnxB7pDQB6pGHwlDMAYcAlfQloDrmVAAQiZAAifgig");
	var mask_1_graphics_281 = new cjs.Graphics().p("ALLZDQpIhrlQnoQlRnoBrpGQBqpJHnlRMAZcAk1QlyD/mqAAQiHAAiMgZg");
	var mask_1_graphics_282 = new cjs.Graphics().p("ALhZJQpLhblcnfQlfnfBcpIQBbpLHeleMAaaAkIQl8EVm/AAQh1AAh5gTg");
	var mask_1_graphics_283 = new cjs.Graphics().p("AL3ZPQpMhLlqnWQlrnVBNpMQBKpNHVlqMAbXAjaQmEEsnWAAQhiAAhmgNg");
	var mask_1_graphics_284 = new cjs.Graphics().p("AMOZUQpOg8l2nMQl3nLA8pOQA7pOHLl3MAcTAiqQmMFEnuAAQhOAAhSgIg");
	var mask_1_graphics_285 = new cjs.Graphics().p("AMmZXQpQgsmCnBQmDnCAspPQAspPHBmDMAdNAh5QmUFcoGAAQg7AAg8gFg");
	var mask_1_graphics_286 = new cjs.Graphics().p("AM+ZaQpRgcmOm3QmPm3AdpQQAbpRG3mPMAeGAhHQmaF1ogAAQgmAAgngCg");
	var mask_1_graphics_287 = new cjs.Graphics().p("ANWZbQpRgMmamsQmbmsANpRQAMpRGsmaMAe+AgSQmfGOo8AAIgiAAg");
	var mask_1_graphics_288 = new cjs.Graphics().p("AiIS+QmmmhgDpRQgEpRGhmmIf1fdQmhGmpRADIgKAAQpLABmimeg");
	var mask_1_graphics_289 = new cjs.Graphics().p("Ah5TZQmxmWgTpQQgUpRGVmxMAgqAemQmVGwpRAUIg2ABQovAAmcmDg");
	var mask_1_graphics_290 = new cjs.Graphics().p("AhqTyQm8mKgipPQgkpQGKm8MAhdAdtQmKG8pQAjQgxADgvAAQoVAAmWlqg");
	var mask_1_graphics_291 = new cjs.Graphics().p("AhZULQnHl+gypOQg0pPF+nGMAiPAczQl9HGpPAzQhGAGhEAAQn7AAmPlRg");
	var mask_1_graphics_292 = new cjs.Graphics().p("AhIUjQnQlxhCpNQhEpOFynQMAjAAb4QlyHQpNBDQhbAKhXAAQnjAAmIk5g");
	var mask_1_graphics_293 = new cjs.Graphics().p("Ag1U7QnalmhSpLQhTpLFlnaMAjuAa8QllHZpLBTQhvAPhqAAQnMAAl/khg");
	var mask_1_graphics_294 = new cjs.Graphics().p("AgiVRQnjlYhipJQhjpJFZnjMAkcAZ+QlYHjpKBiQiCAWh9AAQm1AAl3kMg");
	var mask_1_graphics_295 = new cjs.Graphics().p("AgNVnQntlMhxpGQhypGFLnsMAlIAY/QlMHspGByQiVAdiPAAQmgAAltj2g");
	var mask_1_graphics_296 = new cjs.Graphics().p("AAHV7Qn0k+iApCQiCpDE+n1MAlxAX/Qk+H1pDCBQinAlihAAQmMAAlkjig");
	var mask_1_graphics_297 = new cjs.Graphics().p("AAeWPQn8kwiQo/QiSpAEwn8MAmaAW9QkwH9pACRQi5AuizAAQl3AAlZjOg");
	var mask_1_graphics_298 = new cjs.Graphics().p("AA1WiQoEkjifo7Qiho8EjoDMAnAAV7QkjIFo7CgQjLA5jEAAQlkAAlOi8g");
	var mask_1_graphics_299 = new cjs.Graphics().p("ABOW0QoMkViuo2Qixo4EVoLMAnlAU4QkVINo3CvQjcBEjVAAQlRAAlBiqg");
	var mask_1_graphics_300 = new cjs.Graphics().p("ABnXGQoTkHi9oyQjAoyEHoTMAoIAT0QkHIUoyC+QjsBQjnAAQk/AAk0iYg");
	var mask_1_graphics_301 = new cjs.Graphics().p("ACBXWQoZj4jNotQjOotD4oaMAopASvQj5IbosDNQj8Bdj4AAQktAAkniIg");
	var mask_1_graphics_302 = new cjs.Graphics().p("ACdXmQohjqjbonQjdooDqogMApIARqQjqIgonDcQkMBrkJAAQkbAAkYh4g");
	var mask_1_graphics_303 = new cjs.Graphics().p("AC5X0QonjbjpohQjsohDbomMAplAQiQjbInohDrQkaB5kbAAQkJAAkKhqg");
	var mask_1_graphics_304 = new cjs.Graphics().p("ADWYCQosjNj5oaQj6obDNorMAqAAPbQjNIsoaD5QkoCJktAAQj4AAj6hcg");
	var mask_1_graphics_305 = new cjs.Graphics().p("ADzYPQoxi+kGoTQkJoUC+oxMAqZAOTQi9IxoUEIQk1CZlAAAQjmAAjrhPg");
	var mask_1_graphics_306 = new cjs.Graphics().p("AESYbQo2ivkVoMQkWoNCuo2MAqxANKQiuI3oNEWQlCCqlSAAQjUAAjbhDg");
	var mask_1_graphics_307 = new cjs.Graphics().p("AExYmQo6igkjoEQkkoGCfo6MArHAMBQigI7oFEjQlOC9llAAQjDAAjKg4g");
	var mask_1_graphics_308 = new cjs.Graphics().p("AFRYwQo+iQkxn9Qkyn9CQo/MAraAK3QiQI/n8ExQlaDQl5AAQixAAi5gug");
	var mask_1_graphics_309 = new cjs.Graphics().p("AFyY5QpCiBk+n0Qk/n1CApCMArsAJsQiBJDn0E+QllDkmMAAQigAAinglg");
	var mask_1_graphics_310 = new cjs.Graphics().p("AGUZBQpGhxlLnsQlNnsBxpFMAr8AIhQhxJGnsFMQlvD3mhAAQiOAAiUgcg");
	var mask_1_graphics_311 = new cjs.Graphics().p("AG2ZIQpIhilYnjQlanjBhpHMAsJAHVQhhJJnjFZQl5ENm2AAQh8AAiBgVg");
	var mask_1_graphics_312 = new cjs.Graphics().p("AHZZOQpLhSlknZQlnnaBSpKMAsUAGKQhSJLnZFmQmCEjnMAAQhqAAhtgPg");
	var mask_1_graphics_313 = new cjs.Graphics().p("AH9ZTQpNhClxnQQl0nQBCpNMAsfAE/QhDJNnPFzQmKE6nkAAQhWAAhZgKg");
	var mask_1_graphics_314 = new cjs.Graphics().p("AIhZXQpOgzl+nFQl/nGAypPMAslADzQgyJPnGF/QmRFSn8AAQhCAAhFgGg");
	var mask_1_graphics_315 = new cjs.Graphics().p("AJGZaQpQgjmJm7QmMm8AjpQMAsrACnQgjJQm7GLQmYFqoVAAQgvAAgvgCg");
	var mask_1_graphics_316 = new cjs.Graphics().p("AJrZbQpRgSmUmxQmXmwASpRMAsvABaQgTJRmxGWQmdGEowAAIg0gBg");
	var mask_1_graphics_317 = new cjs.Graphics().p("AKRZcQpRgDmgmlQmjmmADpRMAswAAOQgDJRmlGiQmjGepMAAIgIAAg");
	var mask_1_graphics_318 = new cjs.Graphics().p("AlFTPQmumbgMpRMAsvgA+QANJRmbGsQmaGtpRANIgkAAQo6AAmemNg");
	var mask_1_graphics_319 = new cjs.Graphics().p("AkpTpQm4mPgdpQMAssgCMQAdJRmPG3QmOG4pRAcQgoACgnAAQofAAmYlzg");
	var mask_1_graphics_320 = new cjs.Graphics().p("AkMUCQnDmDgtpPMAsogDYQAsJPmCHCQmDHCpQAtQg9AFg7AAQoGAAmRlbg");
	var mask_1_graphics_321 = new cjs.Graphics().p("AjvUaQnNl3g9pNMAshgEkQA9JOl3HMQl3HMpOA8QhSAJhPAAQntAAmKlDg");
	var mask_1_graphics_322 = new cjs.Graphics().p("AjRUyQnXlrhNpMMAsZgFvQBMJMlqHWQlrHWpMBMQhmANhjAAQnVAAmCkrg");
	var mask_1_graphics_323 = new cjs.Graphics().p("AizVIQngldhcpKMAsNgG6QBcJIleHgQldHfpKBcQh6ATh1AAQm/AAl6kVg");
	var mask_1_graphics_324 = new cjs.Graphics().p("AiUVeQnqlQhrpHMAsAgIGQBsJGlRHoQlQHppIBsQiNAaiHAAQmpAAlxkAg");
	var mask_1_graphics_325 = new cjs.Graphics().p("Ah0VzQnzlDh7pEMArygJRQB7JDlEHxQlDHypEB7QigAiiaAAQmUAAlmjrg");
	var mask_1_graphics_326 = new cjs.Graphics().p("AhUWHQn7k1iLpBMArhgKcQCLJAk2H6Qk3H6pACKQiyArirAAQmAAAlcjXg");
	var mask_1_graphics_327 = new cjs.Graphics().p("Ag0WbQoDkoiZo9MArOgLmQCZI8koICQkpICo8CaQjEA0i9AAQlsAAlRjDg");
	var mask_1_graphics_328 = new cjs.Graphics().p("AgSWtQoLkaipo4MAq5gMwQCpI3kbIKQkaIKo5CpQjUA/jPAAQlYAAlFixg");
	var mask_1_graphics_329 = new cjs.Graphics().p("AAPW/QoSkMi4o0MAqjgN5QC4IzkNIRQkMIRo0C5QjmBKjfAAQlGAAk5ifg");
	var mask_1_graphics_330 = new cjs.Graphics().p("AAxXQQoYj+jHovMAqJgPBQDHIuj+IYQj+IYovDHQj1BYjxAAQk0AAksiPg");
	var mask_1_graphics_331 = new cjs.Graphics().p("ABUXgQofjwjWopMApvgQJQDWIojwIfQjwIfopDWQkFBlkCAAQkiAAkeh/g");
	var mask_1_graphics_332 = new cjs.Graphics().p("AB3XvQoljhjlokMApTgRPQDkIijhIlQjiIlojDkQkTB0kUAAQkQAAkQhwg");
	var mask_1_graphics_333 = new cjs.Graphics().p("ACaX9QoqjTj0ocMAo0gSWQD0IcjTIqQjTIrodDzQkhCDkmAAQj+AAkChig");
	var mask_1_graphics_334 = new cjs.Graphics().p("AC+YKQowjEkBoWMAoTgTbQECIVjEIwQjEIxoWEBQkvCTk4AAQjtAAjyhVg");
	var mask_1_graphics_335 = new cjs.Graphics().p("ADjYWQo1i0kQoPMAnxgUgQEQIOi1I1Qi0I2oPEPQk9CjlKAAQjcAAjhhIg");
	var mask_1_graphics_336 = new cjs.Graphics().p("AEIYhQo6ilkeoHMAnOgVkQEdIHilI6QimI6oHEdQlJC1ldAAQjKAAjRg9g");
	var mask_1_graphics_337 = new cjs.Graphics().p("AEtYsQo+iWksoAMAmogWmQErIAiWI9QiWI+oAEsQlVDHlwAAQi5AAi/gyg");
	var mask_1_graphics_338 = new cjs.Graphics().p("AFSY1QpCiGk5n4MAmAgXnQE5H3iGJBQiHJCn4E5QlgDbmDAAQioAAiugpg");
	var mask_1_graphics_339 = new cjs.Graphics().p("AF4Y9QpGh2lGnvMAlXgYoQFGHvh3JEQh3JFnvFHQlrDvmYAAQiWAAibghg");
	var mask_1_graphics_340 = new cjs.Graphics().p("AGdZFQpIhnlTnnMAksgZnQFTHnhoJHQhnJInnFUQl0EDmtAAQiDAAiKgYg");
	var mask_1_graphics_341 = new cjs.Graphics().p("AHDZLQpKhXlhndMAkAgalQFgHchYJKQhYJLndFgQl+EanCAAQhyAAh2gSg");
	var mask_1_graphics_342 = new cjs.Graphics().p("AHqZRQpNhIltnUMAjRgbiQFtHUhJJMQhIJNnUFtQmFEwnaAAQheAAhigMg");
	var mask_1_graphics_343 = new cjs.Graphics().p("AIQZVQpPg4l5nJMAihgceQF5HJg4JOQg5JPnJF5QmOFInxAAQhLAAhOgIg");
	var mask_1_graphics_344 = new cjs.Graphics().p("AI2ZYQpQgomFm/MAhwgdYQGFG/gpJPQgpJQm/GFQmUFgoKAAQg4AAg5gEg");
	var mask_1_graphics_345 = new cjs.Graphics().p("AJcZbQpRgZmQm0MAg8geSQGSG1gaJQQgZJRm0GRQmbF5okAAQgjAAgkgBg");
	var mask_1_graphics_346 = new cjs.Graphics().p("AKDZcQpSgJmcmpMAgIgfJQGdGpgJJRQgKJRmpGdQmhGTo+AAIgcAAg");
	var mask_1_graphics_347 = new cjs.Graphics().p("AlQTFIfS//QGoGeAHJRQAGJRmeGoQmfGopRAGIgUAAQpFAAmgmXg");
	var mask_1_graphics_348 = new cjs.Graphics().p("Ak0TfMAebgg0QGyGTAXJQQAWJRmTGzQmTGzpRAWIhAABQopAAmal9g");
	var mask_1_graphics_349 = new cjs.Graphics().p("AkYT4MAdighnQG9GHAnJQQAmJQmIG9QmHG+pQAmQg2ADg0AAQoPAAmUlkg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(249).to({graphics:mask_1_graphics_249,x:155.7,y:160.4}).wait(1).to({graphics:mask_1_graphics_250,x:153.9,y:160.9}).wait(1).to({graphics:mask_1_graphics_251,x:152,y:161.3}).wait(1).to({graphics:mask_1_graphics_252,x:150.1,y:161.6}).wait(1).to({graphics:mask_1_graphics_253,x:148.2,y:161.9}).wait(1).to({graphics:mask_1_graphics_254,x:146.3,y:162.2}).wait(1).to({graphics:mask_1_graphics_255,x:144.4,y:162.4}).wait(1).to({graphics:mask_1_graphics_256,x:142.5,y:162.5}).wait(1).to({graphics:mask_1_graphics_257,x:140.6,y:162.6}).wait(1).to({graphics:mask_1_graphics_258,x:138.7,y:162.7}).wait(1).to({graphics:mask_1_graphics_259,x:139.1,y:162.7}).wait(1).to({graphics:mask_1_graphics_260,x:141.1,y:162.7}).wait(1).to({graphics:mask_1_graphics_261,x:143,y:162.7}).wait(1).to({graphics:mask_1_graphics_262,x:144.9,y:162.7}).wait(1).to({graphics:mask_1_graphics_263,x:146.8,y:162.7}).wait(1).to({graphics:mask_1_graphics_264,x:148.7,y:162.8}).wait(1).to({graphics:mask_1_graphics_265,x:150.6,y:162.8}).wait(1).to({graphics:mask_1_graphics_266,x:152.4,y:162.8}).wait(1).to({graphics:mask_1_graphics_267,x:154.3,y:162.8}).wait(1).to({graphics:mask_1_graphics_268,x:156.2,y:162.9}).wait(1).to({graphics:mask_1_graphics_269,x:158,y:162.9}).wait(1).to({graphics:mask_1_graphics_270,x:159.8,y:162.9}).wait(1).to({graphics:mask_1_graphics_271,x:161.6,y:162.9}).wait(1).to({graphics:mask_1_graphics_272,x:163.4,y:162.9}).wait(1).to({graphics:mask_1_graphics_273,x:165.2,y:162.9}).wait(1).to({graphics:mask_1_graphics_274,x:167,y:162.9}).wait(1).to({graphics:mask_1_graphics_275,x:168.7,y:162.9}).wait(1).to({graphics:mask_1_graphics_276,x:170.4,y:162.9}).wait(1).to({graphics:mask_1_graphics_277,x:172.1,y:162.9}).wait(1).to({graphics:mask_1_graphics_278,x:173.8,y:162.9}).wait(1).to({graphics:mask_1_graphics_279,x:175.4,y:162.9}).wait(1).to({graphics:mask_1_graphics_280,x:177,y:162.9}).wait(1).to({graphics:mask_1_graphics_281,x:178.6,y:162.8}).wait(1).to({graphics:mask_1_graphics_282,x:180.2,y:162.8}).wait(1).to({graphics:mask_1_graphics_283,x:181.7,y:162.8}).wait(1).to({graphics:mask_1_graphics_284,x:183.2,y:162.8}).wait(1).to({graphics:mask_1_graphics_285,x:184.7,y:162.8}).wait(1).to({graphics:mask_1_graphics_286,x:186.1,y:162.8}).wait(1).to({graphics:mask_1_graphics_287,x:187.5,y:162.7}).wait(1).to({graphics:mask_1_graphics_288,x:188.9,y:162.7}).wait(1).to({graphics:mask_1_graphics_289,x:190.2,y:162.8}).wait(1).to({graphics:mask_1_graphics_290,x:191.5,y:162.8}).wait(1).to({graphics:mask_1_graphics_291,x:192.7,y:162.8}).wait(1).to({graphics:mask_1_graphics_292,x:194,y:162.8}).wait(1).to({graphics:mask_1_graphics_293,x:195.1,y:162.8}).wait(1).to({graphics:mask_1_graphics_294,x:196.3,y:162.9}).wait(1).to({graphics:mask_1_graphics_295,x:197.4,y:162.9}).wait(1).to({graphics:mask_1_graphics_296,x:198.4,y:162.9}).wait(1).to({graphics:mask_1_graphics_297,x:199.4,y:162.9}).wait(1).to({graphics:mask_1_graphics_298,x:200.4,y:163}).wait(1).to({graphics:mask_1_graphics_299,x:201.3,y:163}).wait(1).to({graphics:mask_1_graphics_300,x:202.2,y:163}).wait(1).to({graphics:mask_1_graphics_301,x:203,y:163}).wait(1).to({graphics:mask_1_graphics_302,x:203.8,y:163}).wait(1).to({graphics:mask_1_graphics_303,x:204.5,y:163}).wait(1).to({graphics:mask_1_graphics_304,x:205.2,y:163}).wait(1).to({graphics:mask_1_graphics_305,x:205.8,y:163}).wait(1).to({graphics:mask_1_graphics_306,x:206.4,y:163}).wait(1).to({graphics:mask_1_graphics_307,x:207,y:163}).wait(1).to({graphics:mask_1_graphics_308,x:207.4,y:163}).wait(1).to({graphics:mask_1_graphics_309,x:207.9,y:163}).wait(1).to({graphics:mask_1_graphics_310,x:208.3,y:162.9}).wait(1).to({graphics:mask_1_graphics_311,x:208.6,y:162.9}).wait(1).to({graphics:mask_1_graphics_312,x:208.9,y:162.9}).wait(1).to({graphics:mask_1_graphics_313,x:209.2,y:162.9}).wait(1).to({graphics:mask_1_graphics_314,x:209.3,y:162.9}).wait(1).to({graphics:mask_1_graphics_315,x:209.5,y:162.8}).wait(1).to({graphics:mask_1_graphics_316,x:209.6,y:162.8}).wait(1).to({graphics:mask_1_graphics_317,x:209.6,y:162.8}).wait(1).to({graphics:mask_1_graphics_318,x:209.6,y:162.8}).wait(1).to({graphics:mask_1_graphics_319,x:209.6,y:162.8}).wait(1).to({graphics:mask_1_graphics_320,x:209.6,y:162.9}).wait(1).to({graphics:mask_1_graphics_321,x:209.7,y:162.9}).wait(1).to({graphics:mask_1_graphics_322,x:209.7,y:162.9}).wait(1).to({graphics:mask_1_graphics_323,x:209.7,y:162.9}).wait(1).to({graphics:mask_1_graphics_324,x:209.7,y:163}).wait(1).to({graphics:mask_1_graphics_325,x:209.8,y:163}).wait(1).to({graphics:mask_1_graphics_326,x:209.8,y:163}).wait(1).to({graphics:mask_1_graphics_327,x:209.8,y:163}).wait(1).to({graphics:mask_1_graphics_328,x:209.8,y:163}).wait(1).to({graphics:mask_1_graphics_329,x:209.8,y:163}).wait(1).to({graphics:mask_1_graphics_330,x:209.9,y:163.1}).wait(1).to({graphics:mask_1_graphics_331,x:209.9,y:163.1}).wait(1).to({graphics:mask_1_graphics_332,x:209.9,y:163.1}).wait(1).to({graphics:mask_1_graphics_333,x:209.9,y:163.1}).wait(1).to({graphics:mask_1_graphics_334,x:209.9,y:163.1}).wait(1).to({graphics:mask_1_graphics_335,x:209.9,y:163}).wait(1).to({graphics:mask_1_graphics_336,x:209.8,y:163}).wait(1).to({graphics:mask_1_graphics_337,x:209.8,y:163}).wait(1).to({graphics:mask_1_graphics_338,x:209.8,y:163}).wait(1).to({graphics:mask_1_graphics_339,x:209.8,y:163}).wait(1).to({graphics:mask_1_graphics_340,x:209.8,y:162.9}).wait(1).to({graphics:mask_1_graphics_341,x:209.8,y:162.9}).wait(1).to({graphics:mask_1_graphics_342,x:209.7,y:162.9}).wait(1).to({graphics:mask_1_graphics_343,x:209.7,y:162.9}).wait(1).to({graphics:mask_1_graphics_344,x:209.7,y:162.8}).wait(1).to({graphics:mask_1_graphics_345,x:209.7,y:162.8}).wait(1).to({graphics:mask_1_graphics_346,x:209.7,y:162.8}).wait(1).to({graphics:mask_1_graphics_347,x:209.7,y:162.8}).wait(1).to({graphics:mask_1_graphics_348,x:209.7,y:162.8}).wait(1).to({graphics:mask_1_graphics_349,x:209.7,y:162.8}).wait(91));

	// 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(25,1,1).p("AIX8cQB5A6BhBXQEWD2AEE5QAEE5jLDeQjKDejYBtQidBQkNAqQg9gThCgTQoVCXklImQhkDvAXEFQAZEWC3DVQDADgEVBtQETBrElgsQEogsDTjWQDNjRBWkaQBWkchrkSQhskYjxixQjQiXmziHAiHimQgOgEgPgEQjdhAkJjvQkRj2gYlcQgYlbEckHQEPj7GIgCQAKAAAKAAQAEAAAEAAIAJAAQAHABAHAA");
	this.shape_2.setTransform(274.5,288.5);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(249).to({_off:false},0).wait(191));

	// Mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_223 = new cjs.Graphics().p("EAFKAm3QpCiBk+n1Qk/n1CBpDMArsAJwQiBJCn1E/QllDimMAAQigAAinglg");
	var mask_2_graphics_224 = new cjs.Graphics().p("EAEUAmnQo8ibknoCQkpoDCbo8MArNALrQibI9oCEnQlSDClrAAQi+AAjEg1g");
	var mask_2_graphics_225 = new cjs.Graphics().p("EADfAmVQo0i0kQoPQkRoQC0o1MAqpANmQi0I1oQERQk9CklLAAQjbAAjhhIg");
	var mask_2_graphics_226 = new cjs.Graphics().p("EACtAmAQosjNj3obQj6obDNosMAp/APfQjNIsobD5QknCIksAAQj4AAj8hdg");
	var mask_2_graphics_227 = new cjs.Graphics().p("EAB9AlpQoijmjfolQjhomDlojMApRARWQjmIjolDgQkQBvkPAAQkVAAkVh0g");
	var mask_2_graphics_228 = new cjs.Graphics().p("EABQAlPQoXj/jHouQjIovD9oYMAodATLQj+IXovDIQj2BYjyAAQkzAAksiOg");
	var mask_2_graphics_229 = new cjs.Graphics().p("EAAlAkyQoLkWiuo2Qivo4EVoMMAnjAU9QkVIMo4CuQjaBEjVAAQlSAAlCirg");
	var mask_2_graphics_230 = new cjs.Graphics().p("EgACAkTQoAktiUo+QiWo/Etn/MAmlAWtQktH/o+CVQi/Axi3AAQlyAAlVjJg");
	var mask_2_graphics_231 = new cjs.Graphics().p("EgAoAjyQnxlEh7pEQh8pFFEnxMAlhAYaQlDHxpFB7QigAiiaAAQmUAAlnjqg");
	var mask_2_graphics_232 = new cjs.Graphics().p("EgBKAjOQnjlZhgpJQhipKFZniMAkZAaDQlZHipKBhQiAAWh8AAQm3AAl3kOg");
	var mask_2_graphics_233 = new cjs.Graphics().p("EgBqAioQnTluhGpNQhIpOFunSMAjNAbpQlvHTpNBHQhfALhdAAQndAAmFkzg");
	var mask_2_graphics_234 = new cjs.Graphics().p("EgCIAiAQnCmDgrpPQgupRGDnBMAh7AdMQmCHCpQAsQg9AFg8AAQoFAAmTlbg");
	var mask_2_graphics_235 = new cjs.Graphics().p("EgCiAhWQmwmXgRpRQgTpSGWmvMAgmAerQmWGwpSASIgyABQoxAAmdmFg");
	var mask_2_graphics_236 = new cjs.Graphics().p("EAM1AnaQpSgImcmpQmemqAJpRQAIpSGpmdMAfMAgGQmgGVpDAAIgXAAg");
	var mask_2_graphics_237 = new cjs.Graphics().p("EAMMAnYQpQgjmJm7QmKm8AjpQQAipRG7mKMAdvAheQmXFqoVAAQgvAAgxgDg");
	var mask_2_graphics_238 = new cjs.Graphics().p("EALlAnSQpOg9l1nMQl2nNA+pOQA8pPHNl0MAcNAivQmMFBnrAAQhRAAhTgJg");
	var mask_2_graphics_239 = new cjs.Graphics().p("EAK/AnKQpLhYlgncQlhndBYpKQBXpMHblgMAapAj9Ql9EbnFAAQhxAAh0gRg");
	var mask_2_graphics_240 = new cjs.Graphics().p("EAKaAm/QpHhylKnsQlLnsBypGQBxpHHrlKMAZAAlHQluD3mgAAQiPAAiVgdg");
	var mask_2_graphics_241 = new cjs.Graphics().p("EAJ2AmxQpAiMk0n6Qk2n7CMpAQCLpBH5k0MAXVAmMQlcDVl/AAQisAAi0grg");
	var mask_2_graphics_242 = new cjs.Graphics().p("EAJUAmgQo6ilkdoIQkeoHClo6QClo7IGkdMAVnAnNQlKC1ldAAQjKAAjRg8g");
	var mask_2_graphics_243 = new cjs.Graphics().p("EAI0AmNQoyi/kGoTQkHoVC/oxQC+ozISkGMAT1AoIQk0CYk+AAQjnAAjshPg");
	var mask_2_graphics_244 = new cjs.Graphics().p("EAIVAl3QopjYjuofQjvofDXooQDXoqIejuMASBAo+QkdB+kgAAQkEAAkGhmg");
	var mask_2_graphics_245 = new cjs.Graphics().p("EAH3AleQoejwjWopQjXopDwoeQDvofIpjWMAQLApuQkFBmkDAAQkhAAkfh/g");
	var mask_2_graphics_246 = new cjs.Graphics().p("EAHbAlDQoSkIi+oyQi9oyEIoTQEGoTIyi+MAOTAqaQjrBPjmAAQk/AAk2iZg");
	var mask_2_graphics_247 = new cjs.Graphics().p("EAHBAkmQoGkgiko5Qilo7EgoGQEeoII5ikMAMZArBQjPA7jJAAQleAAlLi2g");
	var mask_2_graphics_248 = new cjs.Graphics().p("EAGpAkGQn5k2iLpBQiLpBE3n5QE0n6JBiLMAKdArhQiyArirAAQl/AAlejWg");
	var mask_2_graphics_249 = new cjs.Graphics().p("EAGSAjjQnqlMhxpGQhxpHFMnrQFMnrJGhxMAIgAr8QiTAciOAAQmiABlvj5g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(223).to({graphics:mask_2_graphics_223,x:204,y:252.4}).wait(1).to({graphics:mask_2_graphics_224,x:203.2,y:252.4}).wait(1).to({graphics:mask_2_graphics_225,x:202.3,y:252.5}).wait(1).to({graphics:mask_2_graphics_226,x:201.2,y:252.5}).wait(1).to({graphics:mask_2_graphics_227,x:200.1,y:252.5}).wait(1).to({graphics:mask_2_graphics_228,x:198.8,y:252.5}).wait(1).to({graphics:mask_2_graphics_229,x:197.3,y:252.5}).wait(1).to({graphics:mask_2_graphics_230,x:195.8,y:252.4}).wait(1).to({graphics:mask_2_graphics_231,x:194.1,y:252.4}).wait(1).to({graphics:mask_2_graphics_232,x:192.3,y:252.4}).wait(1).to({graphics:mask_2_graphics_233,x:190.4,y:252.3}).wait(1).to({graphics:mask_2_graphics_234,x:188.3,y:252.3}).wait(1).to({graphics:mask_2_graphics_235,x:186.2,y:252.3}).wait(1).to({graphics:mask_2_graphics_236,x:183.9,y:252.2}).wait(1).to({graphics:mask_2_graphics_237,x:181.6,y:252.3}).wait(1).to({graphics:mask_2_graphics_238,x:179.2,y:252.3}).wait(1).to({graphics:mask_2_graphics_239,x:176.6,y:252.3}).wait(1).to({graphics:mask_2_graphics_240,x:174,y:252.4}).wait(1).to({graphics:mask_2_graphics_241,x:171.3,y:252.4}).wait(1).to({graphics:mask_2_graphics_242,x:168.6,y:252.4}).wait(1).to({graphics:mask_2_graphics_243,x:165.7,y:252.4}).wait(1).to({graphics:mask_2_graphics_244,x:162.8,y:252.5}).wait(1).to({graphics:mask_2_graphics_245,x:159.9,y:252.5}).wait(1).to({graphics:mask_2_graphics_246,x:156.9,y:252.4}).wait(1).to({graphics:mask_2_graphics_247,x:153.8,y:252.4}).wait(1).to({graphics:mask_2_graphics_248,x:150.7,y:252.4}).wait(1).to({graphics:mask_2_graphics_249,x:147.6,y:252.3}).wait(191));

	// 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(25,1,1).p("AiHimQoVCXklImQhkDvAXEFQAZEWC3DVQDADgEVBtQETBrElgsQEogsDTjWQDNjRBWkaQBWkchrkSQhskYjxixQjtiroViZQgOgEgPgEQjdhAkJjvQkRj2gYlcQgYlbEckHQEPj7GIgCQATAAASAAQA5ACA3AF");
	this.shape_3.setTransform(274.5,288.5);
	this.shape_3._off = true;

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(223).to({_off:false},0).wait(217));

	// Mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_161 = new cjs.Graphics().p("ACEjVQIujMIaD7QIaD5DMIuQDLIuj6IZQj7IcotDLg");
	var mask_3_graphics_162 = new cjs.Graphics().p("ACzjuQI0i4ISENQIREMC4I1QC4I0kNIRQkNISo0C4g");
	var mask_3_graphics_163 = new cjs.Graphics().p("ADikDQI7ilIHEfQIIEfClI6QCkI6kfIHQkfIJo6Clg");
	var mask_3_graphics_164 = new cjs.Graphics().p("AESkXQJAiQH+ExQH9EwCRI/QCRJAkxH9QkxH+pACRg");
	var mask_3_graphics_165 = new cjs.Graphics().p("AFDknQJEh9HzFCQHzFCB8JEQB9JElCHyQlCH0pFB9g");
	var mask_3_graphics_166 = new cjs.Graphics().p("AF0k2QJIhoHnFTQHoFSBoJJQBpJIlUHnQlTHopIBpg");
	var mask_3_graphics_167 = new cjs.Graphics().p("AGllBQJLhVHcFkQHbFjBUJLQBVJMlkHbQlkHcpLBVg");
	var mask_3_graphics_168 = new cjs.Graphics().p("AHWlLQJOhAHPF0QHPF0BAJNQBAJPl0HOQl0HQpOBAg");
	var mask_3_graphics_169 = new cjs.Graphics().p("AIIlRQJPgsHCGDQHCGEAsJQQArJQmEHBQmDHCpQAsg");
	var mask_3_graphics_170 = new cjs.Graphics().p("AI5lVQJRgYG0GSQG0GUAYJRQAXJRmTGzQmUG1pQAXg");
	var mask_3_graphics_171 = new cjs.Graphics().p("AJrlXQJRgDGmGhQGmGiADJSQACJRmiGlQmhGnpSADg");
	var mask_3_graphics_172 = new cjs.Graphics().p("EAJHAnaMABVgswQJRARGXGwQGYGwgSJRQgSJSmwGWQmeGHoyAAIgxgBg");
	var mask_3_graphics_173 = new cjs.Graphics().p("EAIVAnYMAC4gssQJRAmGIG9QGIG+gnJQQgmJRm+GHQmWFmoQAAQg0AAg0gDg");
	var mask_3_graphics_174 = new cjs.Graphics().p("EAHjAnUMAEbgskQJPA6F4HLQF5HLg7JOQg6JPnMF4QmNFGnwAAQhNAAhQgHg");
	var mask_3_graphics_175 = new cjs.Graphics().p("EAGyAnOMAF9gsZQJMBPFpHXQFoHYhPJMQhPJNnYFnQmDEpnSAAQhmAAhpgOg");
	var mask_3_graphics_176 = new cjs.Graphics().p("EAGBAnGMAHfgsKQJJBkFYHjQFYHkhkJJQhjJJnkFXQl4EMm1AAQh+AAiCgWg");
	var mask_3_graphics_177 = new cjs.Graphics().p("EAFQAm9MAJAgr4QJFB4FHHuQFHHwh3JFQh3JGnwFGQlsDwmZAAQiVAAibgfg");
	var mask_3_graphics_178 = new cjs.Graphics().p("EAEfAmyMAKhgriQJBCLE2H6QE1H7iLJAQiMJCn6E0QleDXl/AAQisAAizgrg");
	var mask_3_graphics_179 = new cjs.Graphics().p("EADvAmlMAMBgrJQI7CfEkIEQEkIFifI8QifI8oFEjQlPC+lmAAQjDAAjJg4g");
	var mask_3_graphics_180 = new cjs.Graphics().p("EADAAmXMANfgqtQI2CzESIOQESIPizI1QizI3oPERQk/CmlOAAQjZAAjehGg");
	var mask_3_graphics_181 = new cjs.Graphics().p("EACQAmHMAO+gqNQIvDGEAIXQD/IYjGIvQjGIwoYD+QkvCRk1AAQjwAAj0hWg");
	var mask_3_graphics_182 = new cjs.Graphics().p("EABiAl1MAQagpqQIoDZDtIgQDtIgjZIoQjaIpogDsQkdB8keAAQkGAAkIhog");
	var mask_3_graphics_183 = new cjs.Graphics().p("EAA0AljMAR2gpFQIgDrDaIpQDaIojsIgQjtIhooDZQkKBpkHAAQkdAAkbh6g");
	var mask_3_graphics_184 = new cjs.Graphics().p("EAAHAlOMATQgobQIYD+DGIvQDHIwj/IXQj/IZovDFQj2BYjxAAQk0AAktiPg");
	var mask_3_graphics_185 = new cjs.Graphics().p("EgAkAk4MAUngnvQIPEQCzI2QC0I2kSIPQkRIPo2CyQjhBIjbAAQlLAAk9ilg");
	var mask_3_graphics_186 = new cjs.Graphics().p("EgBPAkhMAV+gnAQIFEiCfI8QCgI8kjIFQkkIFo7CfQjLA5jFAAQlkAAlMi8g");
	var mask_3_graphics_187 = new cjs.Graphics().p("EgB6AkIMAXUgmOQH6E0CMJBQCMJBk1H7Qk1H6pACMQi1AsiuAAQl+AAlbjVg");
	var mask_3_graphics_188 = new cjs.Graphics().p("EgCjAjuMAYnglZQHvFFB4JGQB4JFlGHwQlHHwpEB3QieAgiXAAQmXAAlpjug");
	var mask_3_graphics_189 = new cjs.Graphics().p("EgDMAjTMAZ5gkiQHkFWBkJKQBjJJlXHkQlXHkpJBjQiFAXh/AAQmzAAl2kJg");
	var mask_3_graphics_190 = new cjs.Graphics().p("EgDzAi2MAbIgjnQHYFmBPJNQBQJMloHYQloHYpLBPQhsAPhnAAQnQAAmBkmg");
	var mask_3_graphics_191 = new cjs.Graphics().p("EgEaAiXMAcWgipQHLF2A7JPQA7JPl3HLQl4HMpOA6QhSAIhOAAQnvAAmLlEg");
	var mask_3_graphics_192 = new cjs.Graphics().p("EgE/Ah4MAdhghrQG+GHAnJRQAmJQmHG+QmHG+pQAmQg3AEg1AAQoOAAmUljg");
	var mask_3_graphics_193 = new cjs.Graphics().p("EgFkAhXMAerggoQGwGWASJRQASJSmWGwQmXGxpQARIg1ABQoxAAmcmEg");
	var mask_3_graphics_194 = new cjs.Graphics().p("EAJsAnbQpSgCmhmlIfx/jQGiGlgCJSQgCJSmlGiQmjGfpMAAIgIAAg");
	var mask_3_graphics_195 = new cjs.Graphics().p("EAI7AnaQpRgWmTm0MAg1gebQGTGzgWJRQgXJSmzGTQmcF9ooAAIhAgBg");
	var mask_3_graphics_196 = new cjs.Graphics().p("EAIJAnXQpQgrmEnBMAh4gdRQGEHAgrJQQgsJRnAGDQmUFdoGAAQg7AAg8gEg");
	var mask_3_graphics_197 = new cjs.Graphics().p("EAHYAnSQpPg/l0nOMAi3gcGQF1HOhAJOQhAJPnOF0QmKE9nnAAQhUAAhWgJg");
	var mask_3_graphics_198 = new cjs.Graphics().p("EAGmAnMQpLhUlknaMAjzga4QFkHbhUJLQhTJMnbFkQmAEgnJAAQhsAAhxgQg");
	var mask_3_graphics_199 = new cjs.Graphics().p("EAF1AnDQpIhnlUnnMAkugZnQFTHmhoJJQhoJInmFUQl1EDmsAAQiEAAiKgZg");
	var mask_3_graphics_200 = new cjs.Graphics().p("EAFEAm6QpEh8lCnyMAlkgYVQFDHxh9JFQh8JEnyFDQlnDomSAAQibAAiigig");
	var mask_3_graphics_201 = new cjs.Graphics().p("EAEUAmuQpAiQkxn8MAmZgXCQExH9iQJAQiQJAn9ExQlZDPl4AAQiyAAi5gvg");
	var mask_3_graphics_202 = new cjs.Graphics().p("EADkAmhQo7ijkfoHMAnLgVsQEfIHikI6QikI7oHEfQlLC3leAAQjJAAjPg8g");
	var mask_3_graphics_203 = new cjs.Graphics().p("EAC0AmSQo0i3kNoQMAn5gUVQENIRi4I0Qi3I1oRENQk6CglHAAQjfAAjlhLg");
	var mask_3_graphics_204 = new cjs.Graphics().p("EACFAmCQotjKj7oaMAokgS7QD7IZjLIuQjLIuoaD7QkpCKkvAAQj1AAj6hbg");
	var mask_3_graphics_205 = new cjs.Graphics().p("EABXAlwQomjdjooiMApMgRhQDoIijeImQjeInoiDoQkXB2kYAAQkMAAkNhtg");
	var mask_3_graphics_206 = new cjs.Graphics().p("EAAqAldQofjwjVoqMApygQFQDVIpjxIfQjxIeoqDVQkEBkkBAAQkjAAkfiAg");
	var mask_3_graphics_207 = new cjs.Graphics().p("EgACAlIQoXkDjCowMAqUgOpQDBIxkDIWQkEIWowDBQjwBTjrAAQk6AAkwiVg");
	var mask_3_graphics_208 = new cjs.Graphics().p("EgAuAkyQoOkViuo3MAqygNLQCuI3kVINQkWIMo3CvQjbBDjUAAQlSAAlBirg");
	var mask_3_graphics_209 = new cjs.Graphics().p("EgBZAkbQoEkoiao8MArNgLsQCbI9koICQkoIDo8CbQjFA1i+AAQlrAAlQjCg");
	var mask_3_graphics_210 = new cjs.Graphics().p("EgCDAkBQn5k5iHpBMArlgKMQCHJCk5H4Qk6H4pBCHQiuApinAAQmFAAlejcg");
	var mask_3_graphics_211 = new cjs.Graphics().p("EgCtAjnQnulKhypGMAr6gIrQBzJGlLHtQlKHtpGBzQiWAdiRAAQmeAAltj1g");
	var mask_3_graphics_212 = new cjs.Graphics().p("EgDVAjLQnilbhfpKMAsMgHJQBfJJlcHiQlbHhpKBfQh9AUh5AAQm7AAl4kRg");
	var mask_3_graphics_213 = new cjs.Graphics().p("EgD8AiuQnWlshLpMMAsagFoQBLJNlsHVQlsHVpMBKQhkANhhAAQnYAAmDkug");
	var mask_3_graphics_214 = new cjs.Graphics().p("EgEiAiPQnKl8g2pOMAslgEFQA2JOl8HIQl8HJpOA2QhKAGhHAAQn3AAmNlMg");
	var mask_3_graphics_215 = new cjs.Graphics().p("EgFIAhvQm8mLghpQMAssgCjQAhJQmLG7QmLG7pQAiQgvACgtAAQoYAAmWlsg");
	var mask_3_graphics_216 = new cjs.Graphics().p("EgFsAhOQmumbgNpRMAswgA/QANJRmaGtQmbGspRAOIgkAAQo6AAmemNg");
	var mask_3_graphics_217 = new cjs.Graphics().p("EAJfAnbQpRgHmdmpQmfmpAHpRMAswAAjQgHJRmpGfQmiGXpEAAIgUAAg");
	var mask_3_graphics_218 = new cjs.Graphics().p("EAIuAnZQpQgbmOm3QmRm3AcpQMAstACFQgcJRm2GPQmbF2ogAAQgmAAgngCg");
	var mask_3_graphics_219 = new cjs.Graphics().p("EAH/AnWQpPgwl/nEQmBnFAwpPMAsnADpQgxJPnEGAQmSFVoAAAQhAAAhBgFg");
	var mask_3_graphics_220 = new cjs.Graphics().p("EAHQAnRQpNhFlvnRQlynRBFpNMAsdAFLQhEJNnSFwQmIE3ngAAQhaAAhcgLg");
	var mask_3_graphics_221 = new cjs.Graphics().p("EAGiAnKQpKhZlfneQlhndBZpLMAsQAGtQhZJLneFgQl9EZnDAAQhyAAh2gSg");
	var mask_3_graphics_222 = new cjs.Graphics().p("EAF1AnBQpGhtlOnpQlRnqBtpHMAsAAIPQhtJHnqFPQlyD9mmAAQiKAAiPgbg");
	var mask_3_graphics_223 = new cjs.Graphics().p("EAFKAm3QpCiBk+n1Qk/n1CBpDMArsAJwQiBJCn1E/QllDimMAAQigAAinglg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(161).to({graphics:mask_3_graphics_161,x:206.1,y:247.9}).wait(1).to({graphics:mask_3_graphics_162,x:206.1,y:248.7}).wait(1).to({graphics:mask_3_graphics_163,x:206.1,y:249.5}).wait(1).to({graphics:mask_3_graphics_164,x:206.1,y:250.1}).wait(1).to({graphics:mask_3_graphics_165,x:206,y:250.7}).wait(1).to({graphics:mask_3_graphics_166,x:206,y:251.2}).wait(1).to({graphics:mask_3_graphics_167,x:206,y:251.6}).wait(1).to({graphics:mask_3_graphics_168,x:205.9,y:251.9}).wait(1).to({graphics:mask_3_graphics_169,x:205.9,y:252.1}).wait(1).to({graphics:mask_3_graphics_170,x:205.9,y:252.2}).wait(1).to({graphics:mask_3_graphics_171,x:205.9,y:252.3}).wait(1).to({graphics:mask_3_graphics_172,x:205.9,y:252.3}).wait(1).to({graphics:mask_3_graphics_173,x:205.9,y:252.3}).wait(1).to({graphics:mask_3_graphics_174,x:205.9,y:252.3}).wait(1).to({graphics:mask_3_graphics_175,x:205.9,y:252.4}).wait(1).to({graphics:mask_3_graphics_176,x:206,y:252.4}).wait(1).to({graphics:mask_3_graphics_177,x:206,y:252.4}).wait(1).to({graphics:mask_3_graphics_178,x:206,y:252.5}).wait(1).to({graphics:mask_3_graphics_179,x:206,y:252.5}).wait(1).to({graphics:mask_3_graphics_180,x:206,y:252.5}).wait(1).to({graphics:mask_3_graphics_181,x:206.1,y:252.5}).wait(1).to({graphics:mask_3_graphics_182,x:206.1,y:252.5}).wait(1).to({graphics:mask_3_graphics_183,x:206.1,y:252.5}).wait(1).to({graphics:mask_3_graphics_184,x:206,y:252.5}).wait(1).to({graphics:mask_3_graphics_185,x:206,y:252.5}).wait(1).to({graphics:mask_3_graphics_186,x:206,y:252.5}).wait(1).to({graphics:mask_3_graphics_187,x:206,y:252.5}).wait(1).to({graphics:mask_3_graphics_188,x:205.9,y:252.4}).wait(1).to({graphics:mask_3_graphics_189,x:205.9,y:252.4}).wait(1).to({graphics:mask_3_graphics_190,x:205.9,y:252.4}).wait(1).to({graphics:mask_3_graphics_191,x:205.8,y:252.3}).wait(1).to({graphics:mask_3_graphics_192,x:205.8,y:252.3}).wait(1).to({graphics:mask_3_graphics_193,x:205.8,y:252.3}).wait(1).to({graphics:mask_3_graphics_194,x:205.8,y:252.3}).wait(1).to({graphics:mask_3_graphics_195,x:205.8,y:252.3}).wait(1).to({graphics:mask_3_graphics_196,x:205.8,y:252.3}).wait(1).to({graphics:mask_3_graphics_197,x:205.8,y:252.3}).wait(1).to({graphics:mask_3_graphics_198,x:205.8,y:252.4}).wait(1).to({graphics:mask_3_graphics_199,x:205.9,y:252.4}).wait(1).to({graphics:mask_3_graphics_200,x:205.9,y:252.4}).wait(1).to({graphics:mask_3_graphics_201,x:205.9,y:252.5}).wait(1).to({graphics:mask_3_graphics_202,x:205.9,y:252.5}).wait(1).to({graphics:mask_3_graphics_203,x:206,y:252.5}).wait(1).to({graphics:mask_3_graphics_204,x:206,y:252.5}).wait(1).to({graphics:mask_3_graphics_205,x:206,y:252.5}).wait(1).to({graphics:mask_3_graphics_206,x:206,y:252.5}).wait(1).to({graphics:mask_3_graphics_207,x:205.9,y:252.5}).wait(1).to({graphics:mask_3_graphics_208,x:205.9,y:252.5}).wait(1).to({graphics:mask_3_graphics_209,x:205.9,y:252.5}).wait(1).to({graphics:mask_3_graphics_210,x:205.9,y:252.5}).wait(1).to({graphics:mask_3_graphics_211,x:205.8,y:252.4}).wait(1).to({graphics:mask_3_graphics_212,x:205.8,y:252.4}).wait(1).to({graphics:mask_3_graphics_213,x:205.8,y:252.4}).wait(1).to({graphics:mask_3_graphics_214,x:205.7,y:252.3}).wait(1).to({graphics:mask_3_graphics_215,x:205.7,y:252.3}).wait(1).to({graphics:mask_3_graphics_216,x:205.7,y:252.3}).wait(1).to({graphics:mask_3_graphics_217,x:205.7,y:252.3}).wait(1).to({graphics:mask_3_graphics_218,x:205.6,y:252.3}).wait(1).to({graphics:mask_3_graphics_219,x:205.5,y:252.3}).wait(1).to({graphics:mask_3_graphics_220,x:205.2,y:252.4}).wait(1).to({graphics:mask_3_graphics_221,x:204.9,y:252.4}).wait(1).to({graphics:mask_3_graphics_222,x:204.5,y:252.4}).wait(1).to({graphics:mask_3_graphics_223,x:204,y:252.4}).wait(217));

	// 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(25,1,1).p("AvBIXQhkDvAXEFQAZEWC3DVQDADgEVBtQETBrElgsQEogsDTjWQDNjRBWkaQBWkchrkSQhskYjxixQj0iworicQjdhAkJjvQkRj2gYlcQgYlbEckHQEPj7GIgCQATAAASAAQA5ACA3AF");
	this.shape_4.setTransform(274.5,288.5);
	this.shape_4._off = true;

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(161).to({_off:false},0).wait(279));

	// Mask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_79 = new cjs.Graphics().p("EAHqAlSQoZj7jMotQjLouD6oaQD6oaItjMMAPXAqFQj6Bbj2AAQkvAAkpiKg");
	var mask_4_graphics_80 = new cjs.Graphics().p("EAHPAk2QoOkSiyo2Qizo2ESoOQERoPI2izMANfAqtQjfBHjZAAQlOAAk/img");
	var mask_4_graphics_81 = new cjs.Graphics().p("EAG2AkYQoBkpiao9QiZo+EpoBQEooDI9iZMALmArQQjEA1i8AAQltAAlTjEg");
	var mask_4_graphics_82 = new cjs.Graphics().p("EAGfAj3Qn0k/iApDQiApEFAn0QE+n1JDiAMAJrArvQimAkifAAQmOAAlljkg");
	var mask_4_graphics_83 = new cjs.Graphics().p("EAGKAjUQnmlVhmpIQhnpJFVnlQFVnmJIhnMAHvAsHQiHAYiCAAQmwAAl1kHg");
	var mask_4_graphics_84 = new cjs.Graphics().p("EAF2AivQnWlqhMpMQhNpNFpnVQFqnXJNhNMAFyAsaQhnANhjAAQnVAAmEkrg");
	var mask_4_graphics_85 = new cjs.Graphics().p("EAFkAiIQnFl+gzpPQgypQF9nFQF/nGJPgzMAD1AsnQhGAGhDAAQn8AAmRlSg");
	var mask_4_graphics_86 = new cjs.Graphics().p("EAFUAhfQmzmSgZpRQgYpRGRm0QGSm1JQgZMAB3AsvIhEACQomAAmcl7g");
	var mask_4_graphics_87 = new cjs.Graphics().p("EAFDAgzQmimlACpRQABpSGkmiQGlmiJRABMgAHAsxQpSgBmimlg");
	var mask_4_graphics_88 = new cjs.Graphics().p("EAD4AgGQmPm3AcpRQAcpRG1mOQG3mQJRAcMgCGAsuQpRgcmPm3g");
	var mask_4_graphics_89 = new cjs.Graphics().p("ACvfZQl7nJA2pOQA2pQHHl5QHIl9JOA1MgEDAslQpPg1l8nIg");
	var mask_4_graphics_90 = new cjs.Graphics().p("ABoerQlmnZBQpLQBPpNHYllQHYlpJMBQMgGCAsXQpLhQlonYg");
	var mask_4_graphics_91 = new cjs.Graphics().p("AAkd9QlRnoBppIQBqpIHnlQQHnlUJIBqMgH+AsDQpIhqlSnng");
	var mask_4_graphics_92 = new cjs.Graphics().p("AgddOQk8n2CDpCQCDpDH1k7QH3k9JCCDMgJ6ArpQpCiDk8n2g");
	var mask_4_graphics_93 = new cjs.Graphics().p("AhccgQkmoECdo8QCdo8ICkkQIEknI8CcMgL1ArLQo8idkloDg");
	var mask_4_graphics_94 = new cjs.Graphics().p("AiYbxQkPoQC2o0QC1o1IPkNQIQkQI1C1MgNtAqnQo1i2kOoQg");
	var mask_4_graphics_95 = new cjs.Graphics().p("AjRbDQj4ocDPosQDOosIaj2QIcj4IsDOMgPlAp9QosjOj2obg");
	var mask_4_graphics_96 = new cjs.Graphics().p("AkHaUQjgolDnojQDmoiIljeQImjgIiDmMgRaApPQohjnjfomg");
	var mask_4_graphics_97 = new cjs.Graphics().p("Ak7ZmQjHovD/oXQD+oYIujFQIvjIIYD+MgTNAobQoWj/jIovg");
	var mask_4_graphics_98 = new cjs.Graphics().p("AlqY5Qivo4EWoLQEVoMI3itQI3ivIMEVMgU9AniQoLkViuo3g");
	var mask_4_graphics_99 = new cjs.Graphics().p("AmXYLQiVo+Esn/QEsn/I+iUQI/iWH/EtMgWsAmkQn+ksiVo/g");
	var mask_4_graphics_100 = new cjs.Graphics().p("AnAXfQh8pFFDnxQFCnxJDh7QJFh8HyFCMgYXAliQnxlCh7pEg");
	var mask_4_graphics_101 = new cjs.Graphics().p("AnmWyQhipJFYniQFYniJIhiQJKhiHjFXMgaAAkcQnhlZhipJg");
	var mask_4_graphics_102 = new cjs.Graphics().p("AoIWHQhIpNFtnTQFsnSJNhIQJNhJHTFtMgbkAjQQnSlthIpNg");
	var mask_4_graphics_103 = new cjs.Graphics().p("AonVcQgupPGBnDQGBnCJPgtQJQgvHCGBMgdEAiAQnDmCgupPg");
	var mask_4_graphics_104 = new cjs.Graphics().p("ApCUyQgUpRGVmxQGUmwJQgTQJSgVGxGUMgejAgsQmxmVgUpRg");
	var mask_4_graphics_105 = new cjs.Graphics().p("ApZUJQAGpRGomfQGnmeJQAHQJSAGGeGmI/8fUQmfmoAGpRg");
	var mask_4_graphics_106 = new cjs.Graphics().p("ApsThQAgpQG5mMQG5mLJPAhQJRAgGMG4MghTAd4QmMm6AhpQg");
	var mask_4_graphics_107 = new cjs.Graphics().p("Ap8S6QA7pOHKl4QHJl3JOA7QJPA6F4HJMgilAcYQl4nLA6pOg");
	var mask_4_graphics_108 = new cjs.Graphics().p("AqISUQBVpLHaljQHaliJKBVQJMBSFjHbMgjzAa0QljnbBUpLg");
	var mask_4_graphics_109 = new cjs.Graphics().p("AqPRwQBupHHplOQHplNJGBvQJHBsFOHqMgk8AZNQlOnpBvpHg");
	var mask_4_graphics_110 = new cjs.Graphics().p("AqTRNQCHpCH4k4QH3k3JACHQJDCHE4H4MgmBAXkQk4n4CIpBg");
	var mask_4_graphics_111 = new cjs.Graphics().p("AqUQrQCho7IEkhQIGkhI6CgQI7ChEiIFMgnBAV2QkhoECgo7g");
	var mask_4_graphics_112 = new cjs.Graphics().p("AqQQKQC6ozIQkKQISkKIyC6QI0C5EKIRMgn7AUIQkLoSC6ozg");
	var mask_4_graphics_113 = new cjs.Graphics().p("AqIPsQDSorIcjzQIdjyIpDSQIrDSDzIdMgoyASVQjzocDToqg");
	var mask_4_graphics_114 = new cjs.Graphics().p("Ap9POQDrogImjbQInjaIfDqQIiDqDaInMgpiAQhQjbomDqohg");
	var mask_4_graphics_115 = new cjs.Graphics().p("AptOyQECoVIvjCQIwjDIUEDQIXECDCIvMgqOAOsQjDowEDoWg");
	var mask_4_graphics_116 = new cjs.Graphics().p("ApaOYQEaoJI2iqQI4ipIJEaQILEZCpI4Mgq1AMzQiqo4EaoKg");
	var mask_4_graphics_117 = new cjs.Graphics().p("ApDOAQEwn9I+iQQI/iQH7EwQH+EwCQI/MgrWAK5QiQo+Ewn9g");
	var mask_4_graphics_118 = new cjs.Graphics().p("AooNpQFGnuJDh3QJFh3HuFGQHwFHB2JEMgryAI+Qh3pEFHnvg");
	var mask_4_graphics_119 = new cjs.Graphics().p("AoKNVQFcngJHheQJKhdHfFcQHhFcBdJJMgsJAHCQhdpJFcnfg");
	var mask_4_graphics_120 = new cjs.Graphics().p("AnxNGQFsnUJKhKQJNhJHTFsQHVFrBJJMMgsWAFkQhKpMFsnUg");
	var mask_4_graphics_121 = new cjs.Graphics().p("AnWM4QF8nHJMg2QJPg2HGF7QHJF7A2JOMgshAEFQg2pOF7nIg");
	var mask_4_graphics_122 = new cjs.Graphics().p("Am4MsQGKm7JOgiQJQgiG6GKQG7GKAjJQMgsoAClQgipPGKm7g");
	var mask_4_graphics_123 = new cjs.Graphics().p("AmZMhQGZmtJPgPQJRgPGsGZQGuGZAPJQMgssABGQgPpQGZmtg");
	var mask_4_graphics_124 = new cjs.Graphics().p("Askb6QAGpRGmmfQGmmgJRAGQJQAFGfGnQGgGngFJQg");
	var mask_4_graphics_125 = new cjs.Graphics().p("AsjayQAZpQG1mRQGzmRJQAZQJRAZGQG1QGSG0gZJQg");
	var mask_4_graphics_126 = new cjs.Graphics().p("AsgZqQAtpOHCmDQHAmCJPAtQJPAtGBHBQGDHCgsJPg");
	var mask_4_graphics_127 = new cjs.Graphics().p("AscYjQBBpNHOlzQHNlzJNBBQJNBAFyHOQF0HPhAJNg");
	var mask_4_graphics_128 = new cjs.Graphics().p("AsWXcQBUpKHblkQHZljJKBUQJLBUFjHaQFkHbhUJKg");
	var mask_4_graphics_129 = new cjs.Graphics().p("AsPWVQBopHHmlTQHllUJHBoQJIBoFSHlQFVHnhoJHg");
	var mask_4_graphics_130 = new cjs.Graphics().p("AsGVPQB7pEHxlDQHwlDJEB8QJEB7FCHxQFEHxh7JDg");
	var mask_4_graphics_131 = new cjs.Graphics().p("Ar7UJQCOo/H8kyQH6kyI/COQJACOExH8QEzH8iOI/g");
	var mask_4_graphics_132 = new cjs.Graphics().p("ArvTEQCho6IGkhQIEkhI6ChQI7CiEgIFQEiIGiiI6g");
	var mask_4_graphics_133 = new cjs.Graphics().p("AriR/QC1o0IPkQQIOkPI0C0QI0C1EPIOQERIPi1I1g");
	var mask_4_graphics_134 = new cjs.Graphics().p("ArSQ7QDHouIWj+QIYj+IuDIQIuDHD9IXQD/IYjHIug");
	var mask_4_graphics_135 = new cjs.Graphics().p("ArCP4QDaonIfjsQIgjrInDZQInDaDrIfQDtIhjaIng");
	var mask_4_graphics_136 = new cjs.Graphics().p("AqvO2QDsogImjZQIojZIfDrQIgDsDYInQDbIojsIgg");
	var mask_4_graphics_137 = new cjs.Graphics().p("AqcN1QD+oYIujHQIujGIXD9QIYD+DGIuQDIIvj+IYg");
	var mask_4_graphics_138 = new cjs.Graphics().p("AqGM0QEQoOIzi0QI1i0IOEPQIPEQC0I0QC1I2kQIOg");
	var mask_4_graphics_139 = new cjs.Graphics().p("ApvL1QEhoFI5ihQI7igIFEgQIFEhChI6QCiI7khIFg");
	var mask_4_graphics_140 = new cjs.Graphics().p("ApXK3QEyn7I/iOQI/iNH7ExQH8EyCNI/QCPJBkyH7g");
	var mask_4_graphics_141 = new cjs.Graphics().p("Ao9J6QFDnwJDh7QJEh6HwFCQHxFDB6JEQB8JElDHxg");
	var mask_4_graphics_142 = new cjs.Graphics().p("AoiI/QFTnlJHhnQJIhnHlFSQHmFUBnJHQBoJIlTHmg");
	var mask_4_graphics_143 = new cjs.Graphics().p("AoGIFQFjnaJKhTQJLhUHaFjQHbFjBTJLQBUJLljHag");
	var mask_4_graphics_144 = new cjs.Graphics().p("AnoHMQFznMJMhBQJNhAHOFyQHPFzA/JNQBBJOlzHOg");
	var mask_4_graphics_145 = new cjs.Graphics().p("AnKGVQGDnAJOgsQJPgtHBGBQHCGDAsJOQAtJQmCHBg");
	var mask_4_graphics_146 = new cjs.Graphics().p("AmqFgQGRmzJQgZQJQgZG0GQQG1GRAYJQQAZJRmRG0g");
	var mask_4_graphics_147 = new cjs.Graphics().p("AmJEsQGfmmJRgFQJRgFGmGfQGnGfAEJRQAGJRmgGng");
	var mask_4_graphics_148 = new cjs.Graphics().p("AlnD6QGtmYJQAPQJRAPGZGsQGYGugPJQQgOJRmuGYg");
	var mask_4_graphics_149 = new cjs.Graphics().p("AlEDJQG6mIJQAiQJQAjGKG6QGKG7gkJPQgiJQm6GKg");
	var mask_4_graphics_150 = new cjs.Graphics().p("AkiCdQHGl6JOA1QJPA1F8HGQF8HHg2JOQg1JPnGF8g");
	var mask_4_graphics_151 = new cjs.Graphics().p("AkABzQHSltJNBIQJMBIFuHRQFtHThIJMQhHJOnTFtg");
	var mask_4_graphics_152 = new cjs.Graphics().p("AjcBKQHdleJKBaQJKBbFfHdQFfHehbJJQhaJLneFfg");
	var mask_4_graphics_153 = new cjs.Graphics().p("Ai4AiQHolOJHBtQJHBsFQHoQFPHphtJHQhsJInpFPg");
	var mask_4_graphics_154 = new cjs.Graphics().p("AiTgCQHylAJEB/QJDB/FAHyQFAH0h/JCQh+JFn0FAg");
	var mask_4_graphics_155 = new cjs.Graphics().p("AhtgmQH8kwI/CRQJACREwH8QEwH+iSI+QiQJBn9Ewg");
	var mask_4_graphics_156 = new cjs.Graphics().p("AhHhIQIGkgI6CjQI7CjEgIGQEgIHijI6QijI7oGEgg");
	var mask_4_graphics_157 = new cjs.Graphics().p("AgfhoQIOkQI1C1QI2C1EPIPQEQIQi1I0Qi1I2oPEQg");
	var mask_4_graphics_158 = new cjs.Graphics().p("AAIiGQIXj/IwDHQIvDFD/IYQD/IYjHIvQjGIwoYD/g");
	var mask_4_graphics_159 = new cjs.Graphics().p("AAwiiQIgjuIpDYQIpDXDuIfQDuIgjZIoQjXIqogDug");
	var mask_4_graphics_160 = new cjs.Graphics().p("ABai9QInjdIiDqQIiDoDcInQDdInjqIhQjpIjomDdg");
	var mask_4_graphics_161 = new cjs.Graphics().p("ACEjVQIujMIaD7QIaD5DMIuQDLIuj6IZQj7IcotDLg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(79).to({graphics:mask_4_graphics_79,x:158.6,y:252.4}).wait(1).to({graphics:mask_4_graphics_80,x:155.6,y:252.4}).wait(1).to({graphics:mask_4_graphics_81,x:152.6,y:252.4}).wait(1).to({graphics:mask_4_graphics_82,x:149.5,y:252.3}).wait(1).to({graphics:mask_4_graphics_83,x:146.4,y:252.3}).wait(1).to({graphics:mask_4_graphics_84,x:143.3,y:252.2}).wait(1).to({graphics:mask_4_graphics_85,x:140.2,y:252.2}).wait(1).to({graphics:mask_4_graphics_86,x:137,y:252.2}).wait(1).to({graphics:mask_4_graphics_87,x:134.2,y:252.1}).wait(1).to({graphics:mask_4_graphics_88,x:137.4,y:252.1}).wait(1).to({graphics:mask_4_graphics_89,x:140.5,y:251.8}).wait(1).to({graphics:mask_4_graphics_90,x:143.7,y:251.5}).wait(1).to({graphics:mask_4_graphics_91,x:146.8,y:251}).wait(1).to({graphics:mask_4_graphics_92,x:149.9,y:250.3}).wait(1).to({graphics:mask_4_graphics_93,x:153,y:249.6}).wait(1).to({graphics:mask_4_graphics_94,x:156,y:248.7}).wait(1).to({graphics:mask_4_graphics_95,x:159,y:247.6}).wait(1).to({graphics:mask_4_graphics_96,x:161.9,y:246.5}).wait(1).to({graphics:mask_4_graphics_97,x:164.8,y:245.2}).wait(1).to({graphics:mask_4_graphics_98,x:167.6,y:243.7}).wait(1).to({graphics:mask_4_graphics_99,x:170.4,y:242.2}).wait(1).to({graphics:mask_4_graphics_100,x:173.1,y:240.5}).wait(1).to({graphics:mask_4_graphics_101,x:175.7,y:238.8}).wait(1).to({graphics:mask_4_graphics_102,x:178.2,y:236.9}).wait(1).to({graphics:mask_4_graphics_103,x:180.6,y:234.9}).wait(1).to({graphics:mask_4_graphics_104,x:183,y:232.8}).wait(1).to({graphics:mask_4_graphics_105,x:185.2,y:230.6}).wait(1).to({graphics:mask_4_graphics_106,x:187.4,y:228.3}).wait(1).to({graphics:mask_4_graphics_107,x:189.5,y:225.9}).wait(1).to({graphics:mask_4_graphics_108,x:191.4,y:223.4}).wait(1).to({graphics:mask_4_graphics_109,x:193.2,y:220.8}).wait(1).to({graphics:mask_4_graphics_110,x:195,y:218.2}).wait(1).to({graphics:mask_4_graphics_111,x:196.6,y:215.4}).wait(1).to({graphics:mask_4_graphics_112,x:198,y:212.7}).wait(1).to({graphics:mask_4_graphics_113,x:199.4,y:209.8}).wait(1).to({graphics:mask_4_graphics_114,x:200.6,y:206.9}).wait(1).to({graphics:mask_4_graphics_115,x:201.7,y:204}).wait(1).to({graphics:mask_4_graphics_116,x:202.7,y:201}).wait(1).to({graphics:mask_4_graphics_117,x:203.5,y:197.9}).wait(1).to({graphics:mask_4_graphics_118,x:204.2,y:194.8}).wait(1).to({graphics:mask_4_graphics_119,x:204.8,y:191.7}).wait(1).to({graphics:mask_4_graphics_120,x:205.1,y:189.4}).wait(1).to({graphics:mask_4_graphics_121,x:205.4,y:187}).wait(1).to({graphics:mask_4_graphics_122,x:205.6,y:184.6}).wait(1).to({graphics:mask_4_graphics_123,x:205.7,y:182.2}).wait(1).to({graphics:mask_4_graphics_124,x:205.7,y:181.1}).wait(1).to({graphics:mask_4_graphics_125,x:205.7,y:183.5}).wait(1).to({graphics:mask_4_graphics_126,x:205.7,y:185.9}).wait(1).to({graphics:mask_4_graphics_127,x:205.8,y:188.3}).wait(1).to({graphics:mask_4_graphics_128,x:205.8,y:190.6}).wait(1).to({graphics:mask_4_graphics_129,x:205.8,y:193}).wait(1).to({graphics:mask_4_graphics_130,x:205.8,y:195.3}).wait(1).to({graphics:mask_4_graphics_131,x:205.9,y:197.7}).wait(1).to({graphics:mask_4_graphics_132,x:205.9,y:200}).wait(1).to({graphics:mask_4_graphics_133,x:205.9,y:202.3}).wait(1).to({graphics:mask_4_graphics_134,x:205.9,y:204.5}).wait(1).to({graphics:mask_4_graphics_135,x:205.9,y:206.8}).wait(1).to({graphics:mask_4_graphics_136,x:205.9,y:209}).wait(1).to({graphics:mask_4_graphics_137,x:205.9,y:211.2}).wait(1).to({graphics:mask_4_graphics_138,x:205.9,y:213.3}).wait(1).to({graphics:mask_4_graphics_139,x:205.9,y:215.4}).wait(1).to({graphics:mask_4_graphics_140,x:205.9,y:217.5}).wait(1).to({graphics:mask_4_graphics_141,x:205.9,y:219.5}).wait(1).to({graphics:mask_4_graphics_142,x:205.8,y:221.5}).wait(1).to({graphics:mask_4_graphics_143,x:205.8,y:223.4}).wait(1).to({graphics:mask_4_graphics_144,x:205.8,y:225.3}).wait(1).to({graphics:mask_4_graphics_145,x:205.7,y:227.1}).wait(1).to({graphics:mask_4_graphics_146,x:205.7,y:228.9}).wait(1).to({graphics:mask_4_graphics_147,x:205.7,y:230.7}).wait(1).to({graphics:mask_4_graphics_148,x:205.7,y:232.3}).wait(1).to({graphics:mask_4_graphics_149,x:205.7,y:234}).wait(1).to({graphics:mask_4_graphics_150,x:205.8,y:235.5}).wait(1).to({graphics:mask_4_graphics_151,x:205.8,y:236.9}).wait(1).to({graphics:mask_4_graphics_152,x:205.8,y:238.3}).wait(1).to({graphics:mask_4_graphics_153,x:205.9,y:239.6}).wait(1).to({graphics:mask_4_graphics_154,x:205.9,y:240.9}).wait(1).to({graphics:mask_4_graphics_155,x:206,y:242.1}).wait(1).to({graphics:mask_4_graphics_156,x:206,y:243.2}).wait(1).to({graphics:mask_4_graphics_157,x:206,y:244.3}).wait(1).to({graphics:mask_4_graphics_158,x:206,y:245.3}).wait(1).to({graphics:mask_4_graphics_159,x:206.1,y:246.2}).wait(1).to({graphics:mask_4_graphics_160,x:206.1,y:247.1}).wait(1).to({graphics:mask_4_graphics_161,x:206.1,y:247.9}).wait(279));

	// 2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(25,1,1).p("AG2ddQB9hBBohpQDNjSBWkaQBWkbhrkTQhskXjxixQj0ixoricQjdg/kJjvQkRj2gYlcQgXlcEckHQEPj7GHgCQATAAATABQA4ABA3AF");
	this.shape_5.setTransform(279.2,283.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(25,1,1).p("AvBIXQhkDvAXEFQAZEWC3DVQDADgEVBtQETBrElgsQEogsDTjWQDNjRBWkaQBWkchrkSQhskYjxixQj0iworicQjdhAkJjvQkRj2gYlcQgYlbEckHQEPj7GIgCQATAAASAAQA5ACA3AF");
	this.shape_6.setTransform(274.5,288.5);

	var maskedShapeInstanceList = [this.shape_5,this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5}]},79).to({state:[{t:this.shape_6}]},70).wait(291));

	// Mask (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_9 = new cjs.Graphics().p("AHLYvMAGCgsYQJMBQFnHYQFoHZhQJLQhPJNnZFmQmDEonRAAQhmAAhrgPg");
	var mask_5_graphics_10 = new cjs.Graphics().p("AIMY3MAEBgsnQJPA1F8HIQF9HIg1JOQg1JPnIF8QmQFPn5AAQhGAAhIgGg");
	var mask_5_graphics_11 = new cjs.Graphics().p("AJNY7MAB/gsvQJRAaGRG2QGRG2gaJQQgbJSm2GQQmbF5okAAQgjAAglgCg");
	var mask_5_graphics_12 = new cjs.Graphics().p("AKLz1QJSgBGkGkQGlGjAAJRQABJRmkGkQmjGlpSABg");
	var mask_5_graphics_13 = new cjs.Graphics().p("AJKzzQJRgbG3GQQG3GQAbJPQAcJSmQG2QmQG4pRAbg");
	var mask_5_graphics_14 = new cjs.Graphics().p("AIJzsQJPg2HJF7QHIF8A3JOQA2JPl8HIQl8HJpOA3g");
	var mask_5_graphics_15 = new cjs.Graphics().p("AHJzhQJLhRHaFnQHZFmBRJMQBRJMlnHYQlmHapMBRg");
	var mask_5_graphics_16 = new cjs.Graphics().p("AGIzRQJIhsHpFRQHpFRBrJHQBsJHlRHoQlRHqpIBsg");
	var mask_5_graphics_17 = new cjs.Graphics().p("AFIy9QJCiGH4E6QH4E6CGJCQCFJCk6H3Qk6H4pCCGg");
	var mask_5_graphics_18 = new cjs.Graphics().p("AEJylQI8igIFEjQIFEjCgI8QCgI7kjIEQkjIGo8Cgg");
	var mask_5_graphics_19 = new cjs.Graphics().p("ADLyJQIzi5ISELQISEMC6IzQC6IzkMIRQkLITo0C6g");
	var mask_5_graphics_20 = new cjs.Graphics().p("ACOxoQIqjTIeDzQIdDzDTIrQDTIqjzIcQjzIforDTg");
	var mask_5_graphics_21 = new cjs.Graphics().p("ABSxEQIgjrIoDaQIoDbDsIgQDsIgjbInQjaIpohDrg");
	var mask_5_graphics_22 = new cjs.Graphics().p("AAXwbQIVkEIxDBQIyDCEEIVQEEIUjCIxQjAIyoWEEg");
	var mask_5_graphics_23 = new cjs.Graphics().p("AghvuQIHkcI6CoQI5CnEcIJQEcIIioI5QinI6oJEcg");
	var mask_5_graphics_24 = new cjs.Graphics().p("AhZu9QH6k0JACOQJBCOEzH7QE0H7iPI/QiNJCn7Ezg");
	var mask_5_graphics_25 = new cjs.Graphics().p("AiQuJQHslKJHBzQJGB0FKHtQFKHth0JEQhzJHntFKg");
	var mask_5_graphics_26 = new cjs.Graphics().p("AjEtRQHclgJLBZQJLBZFgHdQFgHehaJJQhYJMndFgg");
	var mask_5_graphics_27 = new cjs.Graphics().p("Aj3sWQHMl1JOA/QJOA+F2HNQF1HNg/JNQg+JPnNF1g");
	var mask_5_graphics_28 = new cjs.Graphics().p("AkorXQG7mJJQAjQJQAkGKG7QGKG8gkJPQgjJRm8GKg");
	var mask_5_graphics_29 = new cjs.Graphics().p("AlXqUQGomdJRAIQJSAJGdGpQGeGqgKJPQgIJTmpGdg");
	var mask_5_graphics_30 = new cjs.Graphics().p("AmFpPQGWmwJRgSQJRgSGwGWQGwGWASJQQATJSmXGwg");
	var mask_5_graphics_31 = new cjs.Graphics().p("AmwoGQGCnCJPgtQJPguHCGDQHCGCAtJOQAuJQmDHCg");
	var mask_5_graphics_32 = new cjs.Graphics().p("Anam7QFunTJMhIQJNhIHTFuQHTFtBHJMQBJJNluHTg");
	var mask_5_graphics_33 = new cjs.Graphics().p("AoBltQFYnjJIhjQJJhiHjFYQHkFYBhJIQBjJJlXHjg");
	var mask_5_graphics_34 = new cjs.Graphics().p("AolkdQFBnyJDh8QJEh9HyFBQHzFCB8JDQB9JElBHyg");
	var mask_5_graphics_35 = new cjs.Graphics().p("ApIjKQEroAI9iXQI+iXIAErQIAErCWI8QCYI/krIAg");
	var mask_5_graphics_36 = new cjs.Graphics().p("Apnh1QEToNI1iwQI3ixINETQINEUCwI1QCxI2kTINg");
	var mask_5_graphics_37 = new cjs.Graphics().p("AqEgdQD7oZItjKQItjLIZD8QIaD7DJIsQDLIuj7IZg");
	var mask_5_graphics_38 = new cjs.Graphics().p("AqcAwQDmohIkjhQIljgIjDmQIjDlDfIkQDhIljlIjg");
	var mask_5_graphics_39 = new cjs.Graphics().p("AqxCBQDPorIbj2QIcj2IrDPQIsDQD1IaQD4IcjQIrg");
	var mask_5_graphics_40 = new cjs.Graphics().p("ArEDSQC5oyIQkMQISkMIzC5QI0C5ELIQQEMISi5Izg");
	var mask_5_graphics_41 = new cjs.Graphics().p("ArVEkQCjo5IGkhQIFkgI6CiQI7CiEgIGQEiIFijI7g");
	var mask_5_graphics_42 = new cjs.Graphics().p("ArjF4QCLo/H6k2QH6k1JACLQJBCLE0H6QE2H6iLJAg");
	var mask_5_graphics_43 = new cjs.Graphics().p("ArvHMQB0pEHtlKQHtlJJFB0QJGBzFIHuQFLHsh0JGg");
	var mask_5_graphics_44 = new cjs.Graphics().p("Ar5IhQBcpJHgldQHfldJKBdQJKBcFcHgQFeHfhdJJg");
	var mask_5_graphics_45 = new cjs.Graphics().p("AsAJ3QBEpNHSlvQHQlwJNBEQJNBFFvHSQFxHQhEJNg");
	var mask_5_graphics_46 = new cjs.Graphics().p("AsGLMQAtpPHDmBQHBmDJPAtQJQAuGBHCQGEHBgtJPg");
	var mask_5_graphics_47 = new cjs.Graphics().p("AsJMjQAVpRGzmTQGxmUJRAVQJRAVGTGzQGVGxgVJRg");
	var mask_5_graphics_48 = new cjs.Graphics().p("AlqiCQGgmmJRgCQJSgDGkGiQGmGhADJRMgswAAMQgCpRGimkg");
	var mask_5_graphics_49 = new cjs.Graphics().p("AmRh2QGQm1JQgbQJQgaG1GRQG3GPAaJRMgstAB/QgapRGRm1g");
	var mask_5_graphics_50 = new cjs.Graphics().p("Am2hnQF/nGJOgyQJPgyHFF/QHGF+AyJOMgslADyQgypPF+nEg");
	var mask_5_graphics_51 = new cjs.Graphics().p("AnXhXQFsnVJMhJQJNhKHTFsQHWFrBKJNMgsaAFkQhKpMFsnUg");
	var mask_5_graphics_52 = new cjs.Graphics().p("An1hFQFZnjJIhiQJJhhHiFZQHkFZBhJIMgsJAHWQhhpJFZnhg");
	var mask_5_graphics_53 = new cjs.Graphics().p("AoQgyQFFnxJEh4QJFh5HvFGQHxFFB5JDMgr0AJIQh5pFFGnvg");
	var mask_5_graphics_54 = new cjs.Graphics().p("AopgeQEyn9I+iQQJAiQH8EyQH+ExCQI+MgrbAK4QiQpAExn8g");
	var mask_5_graphics_55 = new cjs.Graphics().p("Ao+gHQEdoJI4inQI6inIHEdQIKEcCnI4Mgq8AMmQino5EcoHg");
	var mask_5_graphics_56 = new cjs.Graphics().p("ApQAPQEIoTIxi9QIyi+ITEIQIVEHC+IxMgqaAOUQi+oyEHoUg");
	var mask_5_graphics_57 = new cjs.Graphics().p("ApeAoQDxodIpjUQIrjUIdDyQIfDxDUIpMgpzAQBQjUoqDyoeg");
	var mask_5_graphics_58 = new cjs.Graphics().p("ApqBCQDcomIgjqQIhjqInDcQIoDbDqIgMgpIARsQjqohDcoog");
	var mask_5_graphics_59 = new cjs.Graphics().p("ApyBeQDFovIWkAQIYkAIvDGQIwDGEAIXMgoYATTQkAoXDGowg");
	var mask_5_graphics_60 = new cjs.Graphics().p("Ap4B7QCvo2IMkVQINkWI2CwQI4CuEVINMgnkAU6QkWoNCvo3g");
	var mask_5_graphics_61 = new cjs.Graphics().p("Ap5CZQCYo9H/kqQICkqI9CZQI+CXEqIBMgmtAWfQkqoBCZo+g");
	var mask_5_graphics_62 = new cjs.Graphics().p("Ap4C4QCBpCH0k+QH0k/JDCBQJECBE+H0MglxAYBQk+n0CBpEg");
	var mask_5_graphics_63 = new cjs.Graphics().p("Ap0DZQBqpHHnlTQHnlSJHBqQJJBpFTHnMgkyAZhQlSnnBppIg");
	var mask_5_graphics_64 = new cjs.Graphics().p("ApsD6QBSpLHZllQHZlmJLBTQJNBRFmHZMgjuAa/QlmnaBSpMg");
	var mask_5_graphics_65 = new cjs.Graphics().p("AphEdQA6pOHLl4QHKl5JOA7QJQA6F4HKMginAcZQl4nKA6pPg");
	var mask_5_graphics_66 = new cjs.Graphics().p("ApTFAQAjpPG7mLQG6mKJQAjQJSAiGKG7MghcAdwQmKm7AipRg");
	var mask_5_graphics_67 = new cjs.Graphics().p("ApCFlQALpRGrmcQGrmcJQALQJTAKGcGrMggOAfFQmcmrAKpRg");
	var mask_5_graphics_68 = new cjs.Graphics().p("AotGKQgNpRGamsQGZmtJRgNQJTgOGsGaMge8AgXQmtmbgNpRg");
	var mask_5_graphics_69 = new cjs.Graphics().p("AoVGwQglpQGIm9QGIm9JQgkQJRgmG9GJMgdoAhkQm9mIgkpRg");
	var mask_5_graphics_70 = new cjs.Graphics().p("An7HXQg9pOF3nMQF2nNJOg8QJPg9HMF2MgcRAivQnLl3g9pOg");
	var mask_5_graphics_71 = new cjs.Graphics().p("AndH+QhVpLFknbQFjnbJLhUQJNhVHbFkMga3Aj1QnaljhUpMg");
	var mask_5_graphics_72 = new cjs.Graphics().p("Am8ImQhspHFQnpQFPnpJIhrQJIhtHpFQMgZZAk5QnolQhrpIg");
	var mask_5_graphics_73 = new cjs.Graphics().p("AmZJPQiDpEE8n1QE8n2JCiCQJEiEH2E8MgX5Al4Qn1k8iDpDg");
	var mask_5_graphics_74 = new cjs.Graphics().p("AlyJ4Qibo+EooBQEnoDI9iZQI+icICEoMgWWAm0QoBkoiao9g");
	var mask_5_graphics_75 = new cjs.Graphics().p("AlJKhQiyo3EUoNQESoOI2iwQI3iyIOETMgUxAnrQoNkTixo3g");
	var mask_5_graphics_76 = new cjs.Graphics().p("AkdLLQjIovD+oYQD9oZIujHQIwjJIYD+MgTKAofQoXj+jIovg");
	var mask_5_graphics_77 = new cjs.Graphics().p("AjuL1QjfonDoohQDoojImjdQInjfIiDoMgRhApOQohjpjeomg");
	var mask_5_graphics_78 = new cjs.Graphics().p("Ai9MfQj0odDSoqQDSosIcjzQIdj1IsDRMgP3Ap5QorjSjzodg");
	var mask_5_graphics_79 = new cjs.Graphics().p("AiKNJQkJoTC7oyQC8o0IRkJQIUkKIzC7MgOKAqgQozi8kJoTg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_5_graphics_9,x:208.7,y:159.8}).wait(1).to({graphics:mask_5_graphics_10,x:208.7,y:159.7}).wait(1).to({graphics:mask_5_graphics_11,x:208.6,y:159.7}).wait(1).to({graphics:mask_5_graphics_12,x:208.6,y:159.7}).wait(1).to({graphics:mask_5_graphics_13,x:208.6,y:159.6}).wait(1).to({graphics:mask_5_graphics_14,x:208.6,y:159.4}).wait(1).to({graphics:mask_5_graphics_15,x:208.7,y:159}).wait(1).to({graphics:mask_5_graphics_16,x:208.7,y:158.5}).wait(1).to({graphics:mask_5_graphics_17,x:208.7,y:157.8}).wait(1).to({graphics:mask_5_graphics_18,x:208.8,y:157}).wait(1).to({graphics:mask_5_graphics_19,x:208.8,y:156.1}).wait(1).to({graphics:mask_5_graphics_20,x:208.8,y:155}).wait(1).to({graphics:mask_5_graphics_21,x:208.8,y:153.7}).wait(1).to({graphics:mask_5_graphics_22,x:208.8,y:152.4}).wait(1).to({graphics:mask_5_graphics_23,x:208.8,y:150.9}).wait(1).to({graphics:mask_5_graphics_24,x:208.7,y:149.3}).wait(1).to({graphics:mask_5_graphics_25,x:208.7,y:147.5}).wait(1).to({graphics:mask_5_graphics_26,x:208.6,y:145.7}).wait(1).to({graphics:mask_5_graphics_27,x:208.6,y:143.7}).wait(1).to({graphics:mask_5_graphics_28,x:208.6,y:141.6}).wait(1).to({graphics:mask_5_graphics_29,x:208.5,y:139.4}).wait(1).to({graphics:mask_5_graphics_30,x:208.5,y:137.1}).wait(1).to({graphics:mask_5_graphics_31,x:208.6,y:134.6}).wait(1).to({graphics:mask_5_graphics_32,x:208.6,y:132.1}).wait(1).to({graphics:mask_5_graphics_33,x:208.6,y:129.5}).wait(1).to({graphics:mask_5_graphics_34,x:208.7,y:126.8}).wait(1).to({graphics:mask_5_graphics_35,x:208.7,y:124.1}).wait(1).to({graphics:mask_5_graphics_36,x:208.7,y:121.2}).wait(1).to({graphics:mask_5_graphics_37,x:208.8,y:118.3}).wait(1).to({graphics:mask_5_graphics_38,x:208.8,y:115.7}).wait(1).to({graphics:mask_5_graphics_39,x:208.8,y:113}).wait(1).to({graphics:mask_5_graphics_40,x:208.8,y:110.3}).wait(1).to({graphics:mask_5_graphics_41,x:208.8,y:107.6}).wait(1).to({graphics:mask_5_graphics_42,x:208.7,y:104.8}).wait(1).to({graphics:mask_5_graphics_43,x:208.7,y:102}).wait(1).to({graphics:mask_5_graphics_44,x:208.7,y:99.1}).wait(1).to({graphics:mask_5_graphics_45,x:208.6,y:96.3}).wait(1).to({graphics:mask_5_graphics_46,x:208.6,y:93.4}).wait(1).to({graphics:mask_5_graphics_47,x:208.6,y:90.6}).wait(1).to({graphics:mask_5_graphics_48,x:208.6,y:88.3}).wait(1).to({graphics:mask_5_graphics_49,x:208.5,y:91.2}).wait(1).to({graphics:mask_5_graphics_50,x:208.3,y:94}).wait(1).to({graphics:mask_5_graphics_51,x:208.1,y:96.9}).wait(1).to({graphics:mask_5_graphics_52,x:207.6,y:99.7}).wait(1).to({graphics:mask_5_graphics_53,x:207.1,y:102.6}).wait(1).to({graphics:mask_5_graphics_54,x:206.5,y:105.4}).wait(1).to({graphics:mask_5_graphics_55,x:205.7,y:108.1}).wait(1).to({graphics:mask_5_graphics_56,x:204.9,y:110.9}).wait(1).to({graphics:mask_5_graphics_57,x:203.9,y:113.6}).wait(1).to({graphics:mask_5_graphics_58,x:202.8,y:116.3}).wait(1).to({graphics:mask_5_graphics_59,x:201.6,y:118.9}).wait(1).to({graphics:mask_5_graphics_60,x:200.3,y:121.5}).wait(1).to({graphics:mask_5_graphics_61,x:198.9,y:124}).wait(1).to({graphics:mask_5_graphics_62,x:197.4,y:126.4}).wait(1).to({graphics:mask_5_graphics_63,x:195.9,y:128.8}).wait(1).to({graphics:mask_5_graphics_64,x:194.2,y:131.2}).wait(1).to({graphics:mask_5_graphics_65,x:192.4,y:133.4}).wait(1).to({graphics:mask_5_graphics_66,x:190.5,y:135.6}).wait(1).to({graphics:mask_5_graphics_67,x:188.6,y:137.7}).wait(1).to({graphics:mask_5_graphics_68,x:186.5,y:139.8}).wait(1).to({graphics:mask_5_graphics_69,x:184.4,y:141.7}).wait(1).to({graphics:mask_5_graphics_70,x:182.2,y:143.6}).wait(1).to({graphics:mask_5_graphics_71,x:180,y:145.3}).wait(1).to({graphics:mask_5_graphics_72,x:177.6,y:147}).wait(1).to({graphics:mask_5_graphics_73,x:175.2,y:148.6}).wait(1).to({graphics:mask_5_graphics_74,x:172.7,y:150.1}).wait(1).to({graphics:mask_5_graphics_75,x:170.2,y:151.5}).wait(1).to({graphics:mask_5_graphics_76,x:167.6,y:152.8}).wait(1).to({graphics:mask_5_graphics_77,x:165,y:154}).wait(1).to({graphics:mask_5_graphics_78,x:162.4,y:155}).wait(1).to({graphics:mask_5_graphics_79,x:159.6,y:156}).wait(361));

	// 2
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(25,1,1).p("AieL7QgngggpglQkRj2gXlbQgYlbEckHQEPj7GGgCQATAAATAAQA6ACA2AF");
	this.shape_7.setTransform(233.3,171.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(25,1,1).p("AD4NwQjehAkIjuQkRj3gXlaQgYlcEckHQEPj7GGgCQATAAATABQA6ABA2AF");
	this.shape_8.setTransform(233.3,182.9);

	var maskedShapeInstanceList = [this.shape_7,this.shape_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7}]},9).to({state:[{t:this.shape_8}]},11).wait(420));

	// Base
	this.instance_3 = new lib.Symbol1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(273.3,288.2);
	this.instance_3.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(440));

	// Background
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_9.setTransform(275,275,3.373,2.543);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_10.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9}]}).wait(440));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(273.5,214.3,553,811.5);
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