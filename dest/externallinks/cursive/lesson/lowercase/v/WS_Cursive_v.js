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
	this.shape.graphics.f("#FFFFFF").s().p("Au0KPQAAjNDhmyICfk+QBGiwAAiEQiEAAinBYQh+BHikCAQloEggSAAQh4AAAAiEQAAgSAbgvQCmjHE9jEIEwibQChg+B2AAQByAABABAQA+BBAABvQAACQhJCyIihE8QjrGRABCwQFFhMNCy2IA0hGQA1hEBPAAQBYAAAgByIAGAkQAyDwA6CHQBhDbCKAAQBSAAByhsQByhtAmAAQCKAAAAB+QAABtjNB0Qi1BqhkAAQhkAAhYhEQhPg6hDhsQhning9j2QuCUlnPAAQi5AAAAi+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-158.2,-84.5,316.4,169.1);


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


(lib.ar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-27.1,18.6,1,1,-117.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-151.7,guide:{path:[-27,18.5,15.9,0.2,33.1,-27]}},44).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AiggCIA+gvIBvCTIg9Aug");
	var mask_graphics_1 = new cjs.Graphics().p("AhcgtIBKg4IBvCSIhLA5g");
	var mask_graphics_2 = new cjs.Graphics().p("AhjgnIBYhDIBvCSIhYBDg");
	var mask_graphics_3 = new cjs.Graphics().p("AhqgiIBlhNIBwCTIhlBMg");
	var mask_graphics_4 = new cjs.Graphics().p("AhwgeIBxhWIBwCTIhxBWg");
	var mask_graphics_5 = new cjs.Graphics().p("Ah2gZIB+hgIBvCTIh+Bgg");
	var mask_graphics_6 = new cjs.Graphics().p("Ah9gUICLhqIBwCTIiLBqg");
	var mask_graphics_7 = new cjs.Graphics().p("AiDgPICXhzIBwCSIiXBzg");
	var mask_graphics_8 = new cjs.Graphics().p("AiKgKIClh+IBwCTIilB+g");
	var mask_graphics_9 = new cjs.Graphics().p("AiQgFICxiIIBwCTIixCIg");
	var mask_graphics_10 = new cjs.Graphics().p("AiXAAIC/iRIBwCSIi/CRg");
	var mask_graphics_11 = new cjs.Graphics().p("AidAEIDLiaIBwCTIjLCag");
	var mask_graphics_12 = new cjs.Graphics().p("AikAJIDZikIBwCTIjZCkg");
	var mask_graphics_13 = new cjs.Graphics().p("AiqANIDlitIBwCTIjlCug");
	var mask_graphics_14 = new cjs.Graphics().p("AiwASIDyi3IBvCUIjyC3g");
	var mask_graphics_15 = new cjs.Graphics().p("Ai3AXID/jBIBwCUIj/DBg");
	var mask_graphics_16 = new cjs.Graphics().p("Ai+AcIEMjLIBxCUIkMDLg");
	var mask_graphics_17 = new cjs.Graphics().p("AjEAhIEZjVIBwCUIkZDVg");
	var mask_graphics_18 = new cjs.Graphics().p("AjLAmIEnjfIBwCUIknDfg");
	var mask_graphics_19 = new cjs.Graphics().p("AjRArIEzjpIBwCUIkzDog");
	var mask_graphics_20 = new cjs.Graphics().p("AjXAwIE/jyIBxCTIlBDzg");
	var mask_graphics_21 = new cjs.Graphics().p("AjeA1IFNj9IBwCUIlND9g");
	var mask_graphics_22 = new cjs.Graphics().p("AjlA6IFbkGIBwCTIlbEHg");
	var mask_graphics_23 = new cjs.Graphics().p("AjrA/IFnkQIBwCTIlnEQg");
	var mask_graphics_24 = new cjs.Graphics().p("AjyBEIF1kaIBvCTIlzEag");
	var mask_graphics_25 = new cjs.Graphics().p("Aj4BJIGBkkIBwCTImBEkg");
	var mask_graphics_26 = new cjs.Graphics().p("Aj+BNIGNktIBwCTImNEug");
	var mask_graphics_27 = new cjs.Graphics().p("AkFBSIGbk3IBwCUImbE3g");
	var mask_graphics_28 = new cjs.Graphics().p("AkLBYIGnlCIBwCTImoFCg");
	var mask_graphics_29 = new cjs.Graphics().p("AkSBcIG1lLIBwCUIm1FLg");
	var mask_graphics_30 = new cjs.Graphics().p("AkZBhIHClVIBxCUInCFVg");
	var mask_graphics_31 = new cjs.Graphics().p("AkfBmIHPlfIBwCUInPFfg");
	var mask_graphics_32 = new cjs.Graphics().p("AklBrIHbloIBwCTInbFog");
	var mask_graphics_33 = new cjs.Graphics().p("AksBwIHplyIBwCTInpFyg");
	var mask_graphics_34 = new cjs.Graphics().p("AkyB1IH1l9IBwCUIn1F9g");
	var mask_graphics_35 = new cjs.Graphics().p("Ak5B6IIDmGIBwCTIoDGGg");
	var mask_graphics_36 = new cjs.Graphics().p("Ak/B/IIPmQIBwCUIoPGPg");
	var mask_graphics_37 = new cjs.Graphics().p("AlGCEIIdmaIBwCTIodGag");
	var mask_graphics_38 = new cjs.Graphics().p("AlMCIIIpmjIBwCTIopGkg");
	var mask_graphics_39 = new cjs.Graphics().p("AlTCNII2mtIBxCUIo2Gtg");
	var mask_graphics_40 = new cjs.Graphics().p("AlZCSIJDm3IBwCTIpDG4g");
	var mask_graphics_41 = new cjs.Graphics().p("AlfCXIJQnBIBvCUIpQHBg");
	var mask_graphics_42 = new cjs.Graphics().p("AlmCcIJdnLIBwCUIpdHLg");
	var mask_graphics_43 = new cjs.Graphics().p("AltChIJqnVIBxCUIpqHVg");
	var mask_graphics_44 = new cjs.Graphics().p("AlzCmIJ3neIBwCTIp3Heg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-16.1,y:14.4}).wait(1).to({graphics:mask_graphics_1,x:-22.9,y:18.7}).wait(1).to({graphics:mask_graphics_2,x:-22.2,y:18.2}).wait(1).to({graphics:mask_graphics_3,x:-21.6,y:17.8}).wait(1).to({graphics:mask_graphics_4,x:-21,y:17.3}).wait(1).to({graphics:mask_graphics_5,x:-20.4,y:16.8}).wait(1).to({graphics:mask_graphics_6,x:-19.8,y:16.3}).wait(1).to({graphics:mask_graphics_7,x:-19.2,y:15.9}).wait(1).to({graphics:mask_graphics_8,x:-18.5,y:15.4}).wait(1).to({graphics:mask_graphics_9,x:-17.9,y:14.9}).wait(1).to({graphics:mask_graphics_10,x:-17.3,y:14.4}).wait(1).to({graphics:mask_graphics_11,x:-16.7,y:14}).wait(1).to({graphics:mask_graphics_12,x:-16.1,y:13.5}).wait(1).to({graphics:mask_graphics_13,x:-15.5,y:13}).wait(1).to({graphics:mask_graphics_14,x:-14.8,y:12.6}).wait(1).to({graphics:mask_graphics_15,x:-14.2,y:12.1}).wait(1).to({graphics:mask_graphics_16,x:-13.6,y:11.6}).wait(1).to({graphics:mask_graphics_17,x:-13,y:11.1}).wait(1).to({graphics:mask_graphics_18,x:-12.4,y:10.6}).wait(1).to({graphics:mask_graphics_19,x:-11.7,y:10.2}).wait(1).to({graphics:mask_graphics_20,x:-11.1,y:9.7}).wait(1).to({graphics:mask_graphics_21,x:-10.5,y:9.2}).wait(1).to({graphics:mask_graphics_22,x:-9.9,y:8.8}).wait(1).to({graphics:mask_graphics_23,x:-9.3,y:8.3}).wait(1).to({graphics:mask_graphics_24,x:-8.6,y:7.8}).wait(1).to({graphics:mask_graphics_25,x:-8,y:7.3}).wait(1).to({graphics:mask_graphics_26,x:-7.4,y:6.9}).wait(1).to({graphics:mask_graphics_27,x:-6.8,y:6.4}).wait(1).to({graphics:mask_graphics_28,x:-6.2,y:5.9}).wait(1).to({graphics:mask_graphics_29,x:-5.6,y:5.4}).wait(1).to({graphics:mask_graphics_30,x:-4.9,y:4.9}).wait(1).to({graphics:mask_graphics_31,x:-4.3,y:4.5}).wait(1).to({graphics:mask_graphics_32,x:-3.7,y:4}).wait(1).to({graphics:mask_graphics_33,x:-3.1,y:3.5}).wait(1).to({graphics:mask_graphics_34,x:-2.5,y:3.1}).wait(1).to({graphics:mask_graphics_35,x:-1.9,y:2.6}).wait(1).to({graphics:mask_graphics_36,x:-1.2,y:2.1}).wait(1).to({graphics:mask_graphics_37,x:-0.6,y:1.6}).wait(1).to({graphics:mask_graphics_38,x:0,y:1.2}).wait(1).to({graphics:mask_graphics_39,x:0.6,y:0.7}).wait(1).to({graphics:mask_graphics_40,x:1.2,y:0.2}).wait(1).to({graphics:mask_graphics_41,x:1.9,y:-0.3}).wait(1).to({graphics:mask_graphics_42,x:2.5,y:-0.7}).wait(1).to({graphics:mask_graphics_43,x:3.1,y:-1.2}).wait(1).to({graphics:mask_graphics_44,x:3.7,y:-1.7}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AjtEeQBrkwFwkK");
	this.shape.setTransform(3.5,-4.5,1,1,-167.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.5,9.5,19.7,20.2);


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
(lib.WS_Cursive_v = function(mode,startPosition,loop) {
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
	this.instance.setTransform(132.2,255.3,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[132.3,255.3,182.9,207.5,216.4,204.1,250,200.6,233.6,235.3,217.2,270,206.8,291.7,196.4,313.5,191.3,329.7,186.2,345.8,198.6,347.5,211.1,349.2,232.1,334.2,253.1,319.3,333.6,208.4]}},285).wait(16).to({x:334.3,y:210},0).to({guide:{path:[334.3,210,339.3,212.2,342.6,225.3,345.9,238.4,354.6,257.4,363.3,276.5,375.2,279.4,387.1,282.4,395.1,278.3,403,274.2,406.8,271.5,410.6,268.9,421.7,258.6]}},124).wait(15).to({startPosition:0},0).to({guide:{path:[421.5,258.4,428.2,236,450.6,217.8,477.7,195.9,496.1,226.2,511.9,252.2,534.8,271.4,559.6,292.3,590.1,284.2,606.4,279.8,615.7,265.4,620.7,257.6,625.8,249.4]}},65).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(334,210.1,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},285).wait(16).to({_off:false,x:421.7,y:258.6},0).to({_off:true},124).wait(81));

	// Layer 22
	this.instance_1 = new lib.ar1("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(389.4,184.2,1,1,64.9,0,0,-0.7,0.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(310).to({_off:false},0).wait(205));

	// Layer 21 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_310 = new cjs.Graphics().p("AqaBdQB7r/J0nHQJ2nHL+B8QL/B6HHJ1MgvdAiVQnHp2B7r9g");
	var mask_graphics_311 = new cjs.Graphics().p("AqXBpQBysAJwnOQJwnPL/B0QMABxHPJwMgvEAi3QnOpwByr/g");
	var mask_graphics_312 = new cjs.Graphics().p("AqUB2QBqsBJqnWQJrnWMBBrQMBBoHWJrMguqAjaQnWprBpsAg");
	var mask_graphics_313 = new cjs.Graphics().p("AqQCDQBhsDJkncQJmndMCBhQMCBgHdJlMguQAj8QncplBgsBg");
	var mask_graphics_314 = new cjs.Graphics().p("AqMCPQBYsDJfnkQJgnjMDBYQMEBXHjJgMgt1AkdQnjpfBXsDg");
	var mask_graphics_315 = new cjs.Graphics().p("AqHCcQBPsEJZnrQJanqMFBQQMEBNHqJbMgtZAk/QnrpbBPsDg");
	var mask_graphics_316 = new cjs.Graphics().p("AqCCpQBGsFJTnxQJVnyMFBHQMFBFHyJVMgs/AlgQnxpVBGsEg");
	var mask_graphics_317 = new cjs.Graphics().p("Ap9C2QA9sGJOn4QJPn4MFA+QMGA8H5JPMgsjAmBQn4pPA9sFg");
	var mask_graphics_318 = new cjs.Graphics().p("Ap4DDQA1sGJIn/QJJn/MGA1QMHAzH/JJMgsHAmiQn/pJA0sGg");
	var mask_graphics_319 = new cjs.Graphics().p("ApyDRQAssHJDoGQJCoGMHAtQMHAqIFJDMgrpAnCQoGpDArsGg");
	var mask_graphics_320 = new cjs.Graphics().p("AprDeQAisHI9oNQI8oMMHAkQMIAhIMI9MgrNAniQoMo9AjsHg");
	var mask_graphics_321 = new cjs.Graphics().p("AplDsQAasII3oTQI2oTMHAbQMIAYITI3MgqwAoBQoSo3AZsGg");
	var mask_graphics_322 = new cjs.Graphics().p("ApeD5QARsIIwoZQIwoZMIASQMIAPIZIxMgqRAogQoaoxARsHg");
	var mask_graphics_323 = new cjs.Graphics().p("ApXEHQAIsIIrogQIpofMIAIQMIAHIgIrMgp0Ao/QogorAIsHg");
	var mask_graphics_324 = new cjs.Graphics().p("ApPEVQgBsIIkomQIjomMIAAQMIgCImIkMgpVApdQomokgBsHg");
	var mask_graphics_325 = new cjs.Graphics().p("ApHEjQgKsIIdosQIdotMIgJQMIgLItIeMgo3Ap8QosoegKsHg");
	var mask_graphics_326 = new cjs.Graphics().p("Ao/ExQgTsIIXoyQIXozMIgSQMHgUIzIYMgoZAqZQoxoXgTsHg");
	var mask_graphics_327 = new cjs.Graphics().p("Ao3E/QgcsHIRo5QIQo4MIgbQMHgdI5IRMgn5Aq3Qo4oRgcsHg");
	var mask_graphics_328 = new cjs.Graphics().p("AouFOQglsIILo+QIJo/MHgjQMHgmI/IKMgnZArUQo+oKglsGg");
	var mask_graphics_329 = new cjs.Graphics().p("AolFcQgtsHIEpEQICpFMHgsQMGgvJFIEMgm5ArwQpEoEgusFg");
	var mask_graphics_330 = new cjs.Graphics().p("AobFqQg3sGH9pKQH9pKMGg2QMGg3JKH9MgmZAsMQpJn9g3sFg");
	var mask_graphics_331 = new cjs.Graphics().p("AoRF5QhAsFH3pRQH1pQMFg+QMGhBJQH3Mgl5AsoQpPn2g/sEg");
	var mask_graphics_332 = new cjs.Graphics().p("AoHGIQhIsFHvpWQHvpWMEhHQMFhJJVHvMglXAtEQpVnvhIsDg");
	var mask_graphics_333 = new cjs.Graphics().p("An8GWQhSsDHppcQHnpbMEhQQMEhTJbHpMgk2AtfQpanohRsDg");
	var mask_graphics_334 = new cjs.Graphics().p("AnyGlQhasDHiphQHgphMDhZQMDhbJhHiMgkVAt6QpgnhhasCg");
	var mask_graphics_335 = new cjs.Graphics().p("AnmG0QhjsCHapmQHapnMBhhQMChkJmHaMgjyAuVQpmnbhisAg");
	var mask_graphics_336 = new cjs.Graphics().p("AnbHDQhssBHUprQHSpsMBhrQMAhtJsHUMgjRAuuQpqnThsr/g");
	var mask_graphics_337 = new cjs.Graphics().p("AnPHSQh1r/HNpxQHLpyL/hzQL/h2JxHNMgiuAvIQpwnMh0r+g");
	var mask_graphics_338 = new cjs.Graphics().p("AnDHhQh9r+HFp2QHEp3L9h8QL+h+J2HFMgiLAvhQp1nFh9r8g");
	var mask_graphics_339 = new cjs.Graphics().p("Am3HwQiGr8G+p8QG9p7L8iFQL8iHJ7G9MghnAv7Qp7m+iGr7g");
	var mask_graphics_340 = new cjs.Graphics().p("AmqH/QiPr6G3qBQG1qBL7iNQL6iQKAG2MghEAwTQp/m3iPr5g");
	var mask_graphics_341 = new cjs.Graphics().p("AmdIOQiYr4GwqGQGuqGL4iWQL5iZKGGvMgghAwrQqEmviYr4g");
	var mask_graphics_342 = new cjs.Graphics().p("AmPIeQihr3GoqLQGmqKL3igQL3ihKLGoMgf9AxCQqJmoigr1g");
	var mask_graphics_343 = new cjs.Graphics().p("AmCItQipr1GgqPQGfqQL1ioQL1iqKPGhMgfYAxZQqOmgipr0g");
	var mask_graphics_344 = new cjs.Graphics().p("Al0I8QiyrzGZqUQGXqUL0iwQLyizKUGZMgezAxwQqTmZiyryg");
	var mask_graphics_345 = new cjs.Graphics().p("AllJMQi7rxGRqZQGQqYLxi6QLxi7KYGRMgePAyGQqXmRi6rvg");
	var mask_graphics_346 = new cjs.Graphics().p("AlXJbQjDrvGJqdQGIqdLvjCQLvjEKdGKMgdqAycQqcmJjDrug");
	var mask_graphics_347 = new cjs.Graphics().p("AlIJqQjMrsGCqhQGAqiLtjKQLsjNKiGCMgdFAyxQqhmBjLrsg");
	var mask_graphics_348 = new cjs.Graphics().p("Ak5J6QjUrqF6qmQF4qmLrjTQLpjVKmF6MgcfAzHQqll6jUrpg");
	var mask_graphics_349 = new cjs.Graphics().p("AkpKKQjdroFyqqQFxqqLnjcQLojeKqFyMgb6AzcQqplyjcrmg");
	var mask_graphics_350 = new cjs.Graphics().p("AkaKZQjlrlFqquQFpquLljlQLljmKuFqMgbTAzwQqulqjlrkg");
	var mask_graphics_351 = new cjs.Graphics().p("AkJKpQjuriFiqzQFhqyLijtQLijvKzFjMgauA0DQqxlijtrhg");
	var mask_graphics_352 = new cjs.Graphics().p("Aj5K4Qj3rfFbq2QFZq3Lgj1QLfj3K2FaMgaHA0XQq1laj2rfg");
	var mask_graphics_353 = new cjs.Graphics().p("AjoLIQj/rcFSq7QFRq6Ldj+QLcj/K6FSMgZgA0qQq6lTj9rbg");
	var mask_graphics_354 = new cjs.Graphics().p("AjYLYQkHraFKq+QFKq+LZkGQLZkIK/FKMgY6A08Qq+lKkGrYg");
	var mask_graphics_355 = new cjs.Graphics().p("AjGLnQkQrXFCrBQFBrCLXkOQLWkQLCFCMgYTA1OQrBlCkOrWg");
	var mask_graphics_356 = new cjs.Graphics().p("Ai1L3QkYrUE6rFQE5rFLUkXQLTkYLFE6MgXrA1fQrGk6kWrSg");
	var mask_graphics_357 = new cjs.Graphics().p("AijMHQkgrREyrIQEwrJLRkfQLPkhLJEyMgXEA1wQrJkxkerPg");
	var mask_graphics_358 = new cjs.Graphics().p("AiRMWQkorNEprMQEprMLNknQLMkpLMEpMgWcA2CQrMkqknrMg");
	var mask_graphics_359 = new cjs.Graphics().p("Ah/MmQkwrKEhrPQEgrQLKkvQLIkxLQEhMgV0A2SQrQkikvrIg");
	var mask_graphics_360 = new cjs.Graphics().p("AhsM2Qk5rHEZrSQEYrTLGk3QLFk6LTEZMgVMA2hQrTkZk3rEg");
	var mask_graphics_361 = new cjs.Graphics().p("AhZNGQlBrDERrVQEPrXLDk/QLBlCLWERMgUkA2wQrWkQk/rBg");
	var mask_graphics_362 = new cjs.Graphics().p("AhJNTQlIrAEKrYQEJrZK/lGQK+lILZEJMgUCA29QrZkJlGq+g");
	var mask_graphics_363 = new cjs.Graphics().p("Ag5NgQlOq8ECrbQECrbK8lNQK7lPLbECMgTgA3JQrbkClNq7g");
	var mask_graphics_364 = new cjs.Graphics().p("AgoNuQlWq6D8rdQD6reK5lTQK4lWLeD7MgS+A3VQrej7lTq3g");
	var mask_graphics_365 = new cjs.Graphics().p("AgYN7Qlcq2D1rfQDzrhK1laQK1ldLgD0MgSbA3hQrhj0laq0g");
	var mask_graphics_366 = new cjs.Graphics().p("AgHOIQljqyDuriQDsrjKylhQKxljLjDtMgR5A3sQrjjtlhqxg");
	var mask_graphics_367 = new cjs.Graphics().p("AAJOWQloqwDmrkQDlrkKulpQKulpLlDmMgRWA33Qrljmlpqtg");
	var mask_graphics_368 = new cjs.Graphics().p("AAaOjQlvqsDfrmQDernKrlvQKqlwLnDfMgQzA4BQrojflvqpg");
	var mask_graphics_369 = new cjs.Graphics().p("AAsOwQl2qoDYroQDWrpKol2QKml3LqDYMgQRA4MQrqjYl1qmg");
	var mask_graphics_370 = new cjs.Graphics().p("AA9O9Ql8qkDQrqQDQrsKkl7QKjl+LrDQMgPuA4WQrsjQl8qjg");
	var mask_graphics_371 = new cjs.Graphics().p("ABPPLQmDqhDJrsQDIruKhmCQKfmELtDJMgPLA4gQrtjKmDqeg");
	var mask_graphics_372 = new cjs.Graphics().p("ABhPYQmKqdDCruQDBrvKdmJQKbmLLvDCMgOoA4pQrvjCmJqbg");
	var mask_graphics_373 = new cjs.Graphics().p("ABzPlQmQqZC7rwQC5rxKZmPQKXmRLyC6MgOFA4yQryi7mPqXg");
	var mask_graphics_374 = new cjs.Graphics().p("ACFPzQmWqWCzrxQCzrzKUmWQKUmYLzC0MgNiA46QrzizmWqTg");
	var mask_graphics_375 = new cjs.Graphics().p("ACXQAQmcqRCsr0QCrr1KRmcQKPmeL1CsMgM+A5DQr1ismdqPg");
	var mask_graphics_376 = new cjs.Graphics().p("ACqQNQmjqNClr1QCjr3KNmiQKMmkL2CkMgMbA5LQr2ilmjqLg");
	var mask_graphics_377 = new cjs.Graphics().p("AC9QaQmqqJCer3QCcr3KJmpQKHmrL4CeMgL3A5SQr4iempqHg");
	var mask_graphics_378 = new cjs.Graphics().p("ADQQnQmwqECWr5QCVr5KFmvQKDmxL5CWMgLUA5aQr5iWmvqEg");
	var mask_graphics_379 = new cjs.Graphics().p("ADjQ1Qm2qBCPr6QCNr7KBm1QJ/m3L6CPMgKwA5gQr7iOm1p/g");
	var mask_graphics_380 = new cjs.Graphics().p("AD2RCQm8p9CHr7QCGr8J9m7QJ6m+L9CIMgKNA5nQr8iIm8p6g");
	var mask_graphics_381 = new cjs.Graphics().p("AEJRPQnCp4CAr8QB/r+J4nBQJ2nEL+CAMgJpA5tQr+iAnCp2g");
	var mask_graphics_382 = new cjs.Graphics().p("AEdRcQnIpzB4r+QB3r/J0nHQJynKL/B5MgJGA5zQr+h5nIpyg");
	var mask_graphics_383 = new cjs.Graphics().p("AEwRpQnOpvBxr/QBwr/JvnOQJunQMABxMgIiA55QsAhxnOpug");
	var mask_graphics_384 = new cjs.Graphics().p("AFER2QnUpqBqsAQBosBJrnUQJpnVMBBpMgH+A5+QsBhqnUppg");
	var mask_graphics_385 = new cjs.Graphics().p("AFYSEQnapnBisAQBhsCJmnaQJlncMCBjMgHaA6CQsChinapkg");
	var mask_graphics_386 = new cjs.Graphics().p("AFsSRQngpiBbsCQBasCJhngQJgniMDBbMgG2A6HQsDhangpgg");
	var mask_graphics_387 = new cjs.Graphics().p("AGBSeQnmpdBTsDQBSsDJdnmQJbnnMEBTMgGSA6LQsDhTnmpbg");
	var mask_graphics_388 = new cjs.Graphics().p("AGVSrQnspYBMsEQBLsEJYnsQJWntMFBMMgFuA6PQsEhMnspWg");
	var mask_graphics_389 = new cjs.Graphics().p("AGqS4QnypTBEsFQBEsFJTnxQJSnzMFBEMgFKA6TQsFhEnxpSg");
	var mask_graphics_390 = new cjs.Graphics().p("AG/TFQn4pPA8sEQA9sGJOn3QJNn5MGA9MgEmA6VQsFg8n3pNg");
	var mask_graphics_391 = new cjs.Graphics().p("AHTTSQn9pKA1sFQA1sGJJn9QJIn+MHA1MgEBA6YQsHg1n9pIg");
	var mask_graphics_392 = new cjs.Graphics().p("AHoTfQoCpFAssGQAusGJFoDQJDoEMHAuMgDdA6bQsHguoDpDg");
	var mask_graphics_393 = new cjs.Graphics().p("AH+TsQoJpAAlsGQAnsHI/oIQI+oKMIAnMgC5A6cQsHgmoIo+g");
	var mask_graphics_394 = new cjs.Graphics().p("AITT5QoPo7AfsGQAesII7oNQI5oQMHAfMgCUA6eQsIgeoNo5g");
	var mask_graphics_395 = new cjs.Graphics().p("AIoUGQoUo2AXsHQAXsHI2oTQI0oVMHAXMgBwA6gQsIgXoTo0g");
	var mask_graphics_396 = new cjs.Graphics().p("AI+UTQoaoxAQsHQAPsIIxoYQIuoaMIAPMgBMA6hQsIgQoYoug");
	var mask_graphics_397 = new cjs.Graphics().p("AJUUfQogorAIsHQAJsIIroeQIpofMIAIMgAnA6hQsJgIodoqg");
	var mask_graphics_398 = new cjs.Graphics().p("AJpUsQokolAAsIQABsIImojQIkolMIABMgADA6hQsIgBokokg");
	var mask_graphics_399 = new cjs.Graphics().p("AJvU5QoqoggHsJQgHsHIhooQIfoqMIgHMAAhA6hIgTAAQr8AAoioYg");
	var mask_graphics_400 = new cjs.Graphics().p("AJzVGQovobgPsIQgOsHIbouQIZowMIgOMABGA6hIgpAAQruAAofoLg");
	var mask_graphics_401 = new cjs.Graphics().p("AJ3VSQo0oVgXsIQgWsHIVozQIUo1MIgWMABrA6gIg+ABQrgAAodn/g");
	var mask_graphics_402 = new cjs.Graphics().p("AJ8VfQo6oQgesHQgesHIPo5QIOo6MIgeMACRA6fQgqACgpAAQrUAAoZnyg");
	var mask_graphics_403 = new cjs.Graphics().p("AKAVrQo/oKgmsHQgksHIJo9QIIpAMHglMAC2A6dQg0ACg0AAQrGAAoXnlg");
	var mask_graphics_404 = new cjs.Graphics().p("AKFV3QpFoEgtsHQgssGIDpDQICpEMHguMADbA6bQg+AEg+AAQq5AAoUnZg");
	var mask_graphics_405 = new cjs.Graphics().p("AKJWCQpJn+g1sGQg0sGH9pIQH9pJMGg1MAEBA6YQhJAFhIAAQqtAAoRnNg");
	var mask_graphics_406 = new cjs.Graphics().p("AKOWOQpOn5g9sGQg8sEH4pNQH3pPMGg9MAElA6WQhTAHhSAAQqgAAoOnBg");
	var mask_graphics_407 = new cjs.Graphics().p("AKTWZQpTnzhEsFQhEsEHxpSQHypTMFhFMAFKA6TQhdAIhbAAQqVAAoKm1g");
	var mask_graphics_408 = new cjs.Graphics().p("AKYWkQpYnthLsEQhMsEHrpXQHrpYMFhMMAFwA6PQhoAKhlAAQqIAAoHmpg");
	var mask_graphics_409 = new cjs.Graphics().p("AKdWuQpdnmhTsEQhTsCHlpcQHlpdMEhUMAGVA6LQhyAMhuAAQp9AAoDmeg");
	var mask_graphics_410 = new cjs.Graphics().p("AKjW5QpinhhbsCQhbsCHfphQHgpiMChbMAG6A6HQh8AOh3AAQpxAAn/mSg");
	var mask_graphics_411 = new cjs.Graphics().p("AKoXDQpnnahisCQhjsBHaplQHZpnMChjMAHeA6CQiFARiBAAQpmAAn7mHg");
	var mask_graphics_412 = new cjs.Graphics().p("AKuXNQpsnUhpsBQhrsAHTpqQHTprMBhrMAIDA59QiPAUiJAAQpbAAn3l8g");
	var mask_graphics_413 = new cjs.Graphics().p("AK0XXQpxnPhxr/Qhyr/HNpuQHNpwL/hzMAIpA54QiZAXiTAAQpQAAnylxg");
	var mask_graphics_414 = new cjs.Graphics().p("AK5XgQp0nIh5r+Qh6r+HHpzQHGp0L/h7MAJNA5zQiiAaicAAQpFAAnvlng");
	var mask_graphics_415 = new cjs.Graphics().p("AK/XpQp5nBiAr+QiCr8HBp3QHAp5L9iCMAJyA5sQisAdilAAQo6AAnqlcg");
	var mask_graphics_416 = new cjs.Graphics().p("ALGXyQp+m7iIr8QiKr7G7p8QG6p9L8iKMAKWA5mQi1AhiuAAQovAAnllSg");
	var mask_graphics_417 = new cjs.Graphics().p("ALMX7QqCm1iQr6QiRr6G0qAQG0qCL6iRMAK7A5fQi+Aki2AAQomAAnglHg");
	var mask_graphics_418 = new cjs.Graphics().p("ALSYDQqGmuiYr5QiYr4GuqFQGtqGL5iYMALgA5XQjIAoi/AAQobAAnck9g");
	var mask_graphics_419 = new cjs.Graphics().p("ALZYMQqLmoifr4Qigr2GnqJQGnqLL3igMAMFA5RQjRAsjIAAQoRAAnWkzg");
	var mask_graphics_420 = new cjs.Graphics().p("ALfYUQqPmiimr2Qior0GhqOQGgqOL2ioMAMpA5JQjaAwjQAAQoHAAnSkpg");
	var mask_graphics_421 = new cjs.Graphics().p("ALmYbQqTmbiur0QivrzGaqRQGaqTL0ivMANNA5AQjiA1jaAAQn9AAnMkgg");
	var mask_graphics_422 = new cjs.Graphics().p("ALtYjQqXmVi2ryQi3rxGUqVQGTqXLzi3MANxA44QjrA5jiAAQnzAAnHkWg");
	var mask_graphics_423 = new cjs.Graphics().p("AL0YqQqbmOi9rwQi/rvGOqaQGMqaLxi+MAOVA4uQj0A9jqAAQnqAAnBkMg");
	var mask_graphics_424 = new cjs.Graphics().p("AL7YxQqfmHjFruQjFruGGqdQGGqfLujFMAO6A4lQj8BCjzAAQngAAm8kDg");
	var mask_graphics_425 = new cjs.Graphics().p("AMCY4QqjmAjMrtQjNrrGAqiQF/qiLsjNMAPeA4bQkFBIj7AAQnXAAm2j6g");
	var mask_graphics_426 = new cjs.Graphics().p("AMJY/Qqml6jUrrQjUrpF5qlQF4qmLrjUMAQBA4RQkNBMkEAAQnNAAmxjwg");
	var mask_graphics_427 = new cjs.Graphics().p("AMQZFQqqlzjbroQjbroFyqoQFyqqLojcMAQlA4HQkWBSkMAAQnEAAmrjog");
	var mask_graphics_428 = new cjs.Graphics().p("AMYZLQqulsjirmQjjrlFrqtQFrqtLmjjMARJA38QkeBXkVAAQm6AAmljfg");
	var mask_graphics_429 = new cjs.Graphics().p("AMgZRQqylmjprjQjrrjFmqwQFjqxLjjrMARtA3xQkmBekdAAQmyAAmejXg");
	var mask_graphics_430 = new cjs.Graphics().p("AMnZWQq1lejxriQjyrgFfqzQFcq1LijyMASQA3mQkuBjkmAAQmoAAmZjPg");
	var mask_graphics_431 = new cjs.Graphics().p("AMvZbQq4lXj4rfQj6reFYq3QFVq4Lfj5MASzA3aQk1BpkuAAQmgAAmSjHg");
	var mask_graphics_432 = new cjs.Graphics().p("AM3ZhQq8lRj/rcQkBrcFRq6QFOq7LdkBMATWA3OQk9Bvk3AAQmXAAmLi+g");
	var mask_graphics_433 = new cjs.Graphics().p("AN0Z/QrTkdk1rIQk1rHEdrSQEbrSLIk1MAXWA1sQl0Chl1AAQlXAAlZiIg");
	var mask_graphics_434 = new cjs.Graphics().p("AO2ahQrmjolnqwQlpqwDorkQDnrlKvlpMAbNAz5QmkDbm3AAQkZAAkhhag");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(310).to({graphics:mask_graphics_310,x:270.3,y:130.2}).wait(1).to({graphics:mask_graphics_311,x:269.7,y:131}).wait(1).to({graphics:mask_graphics_312,x:269.1,y:131.9}).wait(1).to({graphics:mask_graphics_313,x:268.4,y:132.8}).wait(1).to({graphics:mask_graphics_314,x:267.7,y:133.7}).wait(1).to({graphics:mask_graphics_315,x:267,y:134.5}).wait(1).to({graphics:mask_graphics_316,x:266.4,y:135.4}).wait(1).to({graphics:mask_graphics_317,x:265.7,y:136.2}).wait(1).to({graphics:mask_graphics_318,x:265,y:137}).wait(1).to({graphics:mask_graphics_319,x:264.2,y:137.8}).wait(1).to({graphics:mask_graphics_320,x:263.5,y:138.6}).wait(1).to({graphics:mask_graphics_321,x:262.8,y:139.4}).wait(1).to({graphics:mask_graphics_322,x:262,y:140.2}).wait(1).to({graphics:mask_graphics_323,x:261.3,y:141}).wait(1).to({graphics:mask_graphics_324,x:260.5,y:141.8}).wait(1).to({graphics:mask_graphics_325,x:259.8,y:142.5}).wait(1).to({graphics:mask_graphics_326,x:259,y:143.3}).wait(1).to({graphics:mask_graphics_327,x:258.2,y:144}).wait(1).to({graphics:mask_graphics_328,x:257.4,y:144.7}).wait(1).to({graphics:mask_graphics_329,x:256.6,y:145.5}).wait(1).to({graphics:mask_graphics_330,x:255.8,y:146.2}).wait(1).to({graphics:mask_graphics_331,x:255,y:146.9}).wait(1).to({graphics:mask_graphics_332,x:254.1,y:147.5}).wait(1).to({graphics:mask_graphics_333,x:253.3,y:148.2}).wait(1).to({graphics:mask_graphics_334,x:252.5,y:148.9}).wait(1).to({graphics:mask_graphics_335,x:251.6,y:149.5}).wait(1).to({graphics:mask_graphics_336,x:250.8,y:150.2}).wait(1).to({graphics:mask_graphics_337,x:249.9,y:150.8}).wait(1).to({graphics:mask_graphics_338,x:249,y:151.4}).wait(1).to({graphics:mask_graphics_339,x:248.1,y:152}).wait(1).to({graphics:mask_graphics_340,x:247.2,y:152.6}).wait(1).to({graphics:mask_graphics_341,x:246.4,y:153.2}).wait(1).to({graphics:mask_graphics_342,x:245.5,y:153.8}).wait(1).to({graphics:mask_graphics_343,x:244.5,y:154.4}).wait(1).to({graphics:mask_graphics_344,x:243.6,y:154.9}).wait(1).to({graphics:mask_graphics_345,x:242.7,y:155.5}).wait(1).to({graphics:mask_graphics_346,x:241.8,y:156}).wait(1).to({graphics:mask_graphics_347,x:240.9,y:156.6}).wait(1).to({graphics:mask_graphics_348,x:239.9,y:157.1}).wait(1).to({graphics:mask_graphics_349,x:239,y:157.6}).wait(1).to({graphics:mask_graphics_350,x:238,y:158.1}).wait(1).to({graphics:mask_graphics_351,x:237.1,y:158.6}).wait(1).to({graphics:mask_graphics_352,x:236.1,y:159.1}).wait(1).to({graphics:mask_graphics_353,x:235.1,y:159.5}).wait(1).to({graphics:mask_graphics_354,x:234.2,y:160}).wait(1).to({graphics:mask_graphics_355,x:233.2,y:160.4}).wait(1).to({graphics:mask_graphics_356,x:232.2,y:160.9}).wait(1).to({graphics:mask_graphics_357,x:231.2,y:161.3}).wait(1).to({graphics:mask_graphics_358,x:230.2,y:161.7}).wait(1).to({graphics:mask_graphics_359,x:229.2,y:162.1}).wait(1).to({graphics:mask_graphics_360,x:228.2,y:162.5}).wait(1).to({graphics:mask_graphics_361,x:227.2,y:162.8}).wait(1).to({graphics:mask_graphics_362,x:226.4,y:163.2}).wait(1).to({graphics:mask_graphics_363,x:225.5,y:163.5}).wait(1).to({graphics:mask_graphics_364,x:224.7,y:163.8}).wait(1).to({graphics:mask_graphics_365,x:223.8,y:164.1}).wait(1).to({graphics:mask_graphics_366,x:223,y:164.4}).wait(1).to({graphics:mask_graphics_367,x:222.1,y:164.6}).wait(1).to({graphics:mask_graphics_368,x:221.2,y:164.9}).wait(1).to({graphics:mask_graphics_369,x:220.4,y:165.2}).wait(1).to({graphics:mask_graphics_370,x:219.5,y:165.4}).wait(1).to({graphics:mask_graphics_371,x:218.6,y:165.7}).wait(1).to({graphics:mask_graphics_372,x:217.7,y:165.9}).wait(1).to({graphics:mask_graphics_373,x:216.9,y:166.2}).wait(1).to({graphics:mask_graphics_374,x:216,y:166.4}).wait(1).to({graphics:mask_graphics_375,x:215.1,y:166.6}).wait(1).to({graphics:mask_graphics_376,x:214.2,y:166.8}).wait(1).to({graphics:mask_graphics_377,x:213.3,y:167}).wait(1).to({graphics:mask_graphics_378,x:212.4,y:167.2}).wait(1).to({graphics:mask_graphics_379,x:211.5,y:167.4}).wait(1).to({graphics:mask_graphics_380,x:210.7,y:167.6}).wait(1).to({graphics:mask_graphics_381,x:209.8,y:167.7}).wait(1).to({graphics:mask_graphics_382,x:208.9,y:167.9}).wait(1).to({graphics:mask_graphics_383,x:208,y:168.1}).wait(1).to({graphics:mask_graphics_384,x:207.1,y:168.2}).wait(1).to({graphics:mask_graphics_385,x:206.2,y:168.3}).wait(1).to({graphics:mask_graphics_386,x:205.3,y:168.5}).wait(1).to({graphics:mask_graphics_387,x:204.4,y:168.6}).wait(1).to({graphics:mask_graphics_388,x:203.5,y:168.7}).wait(1).to({graphics:mask_graphics_389,x:202.6,y:168.8}).wait(1).to({graphics:mask_graphics_390,x:201.7,y:168.9}).wait(1).to({graphics:mask_graphics_391,x:200.8,y:168.9}).wait(1).to({graphics:mask_graphics_392,x:199.9,y:169}).wait(1).to({graphics:mask_graphics_393,x:199,y:169.1}).wait(1).to({graphics:mask_graphics_394,x:198,y:169.1}).wait(1).to({graphics:mask_graphics_395,x:197.1,y:169.2}).wait(1).to({graphics:mask_graphics_396,x:196.2,y:169.2}).wait(1).to({graphics:mask_graphics_397,x:195.3,y:169.2}).wait(1).to({graphics:mask_graphics_398,x:194.4,y:169.2}).wait(1).to({graphics:mask_graphics_399,x:195.2,y:169.3}).wait(1).to({graphics:mask_graphics_400,x:196.1,y:169.3}).wait(1).to({graphics:mask_graphics_401,x:197,y:169.3}).wait(1).to({graphics:mask_graphics_402,x:198,y:169.4}).wait(1).to({graphics:mask_graphics_403,x:198.9,y:169.4}).wait(1).to({graphics:mask_graphics_404,x:199.8,y:169.5}).wait(1).to({graphics:mask_graphics_405,x:200.8,y:169.6}).wait(1).to({graphics:mask_graphics_406,x:201.7,y:169.6}).wait(1).to({graphics:mask_graphics_407,x:202.6,y:169.7}).wait(1).to({graphics:mask_graphics_408,x:203.6,y:169.8}).wait(1).to({graphics:mask_graphics_409,x:204.5,y:169.9}).wait(1).to({graphics:mask_graphics_410,x:205.4,y:170.1}).wait(1).to({graphics:mask_graphics_411,x:206.3,y:170.2}).wait(1).to({graphics:mask_graphics_412,x:207.2,y:170.3}).wait(1).to({graphics:mask_graphics_413,x:208.2,y:170.5}).wait(1).to({graphics:mask_graphics_414,x:209.1,y:170.6}).wait(1).to({graphics:mask_graphics_415,x:210,y:170.8}).wait(1).to({graphics:mask_graphics_416,x:210.9,y:171}).wait(1).to({graphics:mask_graphics_417,x:211.8,y:171.2}).wait(1).to({graphics:mask_graphics_418,x:212.8,y:171.4}).wait(1).to({graphics:mask_graphics_419,x:213.7,y:171.6}).wait(1).to({graphics:mask_graphics_420,x:214.6,y:171.8}).wait(1).to({graphics:mask_graphics_421,x:215.5,y:172}).wait(1).to({graphics:mask_graphics_422,x:216.4,y:172.2}).wait(1).to({graphics:mask_graphics_423,x:217.3,y:172.5}).wait(1).to({graphics:mask_graphics_424,x:218.2,y:172.7}).wait(1).to({graphics:mask_graphics_425,x:219.1,y:173}).wait(1).to({graphics:mask_graphics_426,x:220,y:173.3}).wait(1).to({graphics:mask_graphics_427,x:220.9,y:173.5}).wait(1).to({graphics:mask_graphics_428,x:221.8,y:173.8}).wait(1).to({graphics:mask_graphics_429,x:222.7,y:174.1}).wait(1).to({graphics:mask_graphics_430,x:223.6,y:174.4}).wait(1).to({graphics:mask_graphics_431,x:224.4,y:174.7}).wait(1).to({graphics:mask_graphics_432,x:225.3,y:174.9}).wait(1).to({graphics:mask_graphics_433,x:231.6,y:177.4}).wait(1).to({graphics:mask_graphics_434,x:237.9,y:178.7}).wait(81));

	// Layer 16
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(20,1,1).p("Am9lcQA8gdAlChQAlChBUC2QBVC2B3AeQB3AfBRgiQBRgiAngbQAmgaBvhq");
	this.shape_1.setTransform(377.1,243.9);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(310).to({_off:false},0).wait(205));

	// Layer 15
	this.instance_2 = new lib.ar1("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(121.3,174.9,1,1,0,111.1,-68.9,-0.8,0.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(506));

	// Layer 7 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_194 = new cjs.Graphics().p("AMXYKIBLhdIFLEMIhLBdg");
	var mask_1_graphics_195 = new cjs.Graphics().p("AjQhQIBWhqIFLELIhXBqg");
	var mask_1_graphics_196 = new cjs.Graphics().p("AjVhJIBhh4IFLELIhiB4g");
	var mask_1_graphics_197 = new cjs.Graphics().p("AjbhCIBsiGIFLELIhsCGg");
	var mask_1_graphics_198 = new cjs.Graphics().p("Ajgg7IB3iTIFKEKIh3CUg");
	var mask_1_graphics_199 = new cjs.Graphics().p("Ajmg1ICCigIFLELIiCCgg");
	var mask_1_graphics_200 = new cjs.Graphics().p("AjrguICNiuIFKELIiNCug");
	var mask_1_graphics_201 = new cjs.Graphics().p("AjxgnICYi8IFLELIiYC8g");
	var mask_1_graphics_202 = new cjs.Graphics().p("Aj2ggICjjJIFKEKIijDKg");
	var mask_1_graphics_203 = new cjs.Graphics().p("Aj7gaICtjWIFLELIiuDWg");
	var mask_1_graphics_204 = new cjs.Graphics().p("AkBgTIC5jkIFKELIi5Dkg");
	var mask_1_graphics_205 = new cjs.Graphics().p("AkGgMIDDjyIFKELIjDDyg");
	var mask_1_graphics_206 = new cjs.Graphics().p("AkMgFIDOj/IFLEKIjPEAg");
	var mask_1_graphics_207 = new cjs.Graphics().p("AkRAAIDZkLIFLELIjaEMg");
	var mask_1_graphics_208 = new cjs.Graphics().p("AkXAHIDkkZIFLEMIjkEZg");
	var mask_1_graphics_209 = new cjs.Graphics().p("AkcAOIDvknIFKENIjvEmg");
	var mask_1_graphics_210 = new cjs.Graphics().p("AkiAUID6kzIFLEMIj6Ezg");
	var mask_1_graphics_211 = new cjs.Graphics().p("AknAbIEFlBIFKEMIkFFBg");
	var mask_1_graphics_212 = new cjs.Graphics().p("AktAiIEQlPIFLEMIkQFPg");
	var mask_1_graphics_213 = new cjs.Graphics().p("AkyApIEbldIFKENIkbFcg");
	var mask_1_graphics_214 = new cjs.Graphics().p("Ak3AvIEllpIFKEMIklFpg");
	var mask_1_graphics_215 = new cjs.Graphics().p("Ak9A2IEwl3IFLEMIkxF3g");
	var mask_1_graphics_216 = new cjs.Graphics().p("AlCA9IE7mFIFLEMIk8GFg");
	var mask_1_graphics_217 = new cjs.Graphics().p("AlIBEIFHmTIFKENIlHGSg");
	var mask_1_graphics_218 = new cjs.Graphics().p("AlNBKIFQmfIFLEMIlQGfg");
	var mask_1_graphics_219 = new cjs.Graphics().p("AlTBRIFbmtIFMEMIlbGtg");
	var mask_1_graphics_220 = new cjs.Graphics().p("AlYBYIFmm7IFLEMIlmG7g");
	var mask_1_graphics_221 = new cjs.Graphics().p("AleBfIFxnJIFMENIlxHIg");
	var mask_1_graphics_222 = new cjs.Graphics().p("AljBlIF8nVIFLEMIl8HVg");
	var mask_1_graphics_223 = new cjs.Graphics().p("AlpBsIGHnjIFMEMImHHjg");
	var mask_1_graphics_224 = new cjs.Graphics().p("AluBzIGRnxIFMEMImSHxg");
	var mask_1_graphics_225 = new cjs.Graphics().p("AlzB6IGcn/IFMENImdH+g");
	var mask_1_graphics_226 = new cjs.Graphics().p("Al5CAIGooLIFLEMImoILg");
	var mask_1_graphics_227 = new cjs.Graphics().p("Al+CHIGyoZIFLEMImyIZg");
	var mask_1_graphics_228 = new cjs.Graphics().p("AmECOIG9onIFMEMIm+Ing");
	var mask_1_graphics_229 = new cjs.Graphics().p("AmJCVIHIo1IFMENInJI0g");
	var mask_1_graphics_230 = new cjs.Graphics().p("AmPCbIHTpBIFMEMInTJBg");
	var mask_1_graphics_231 = new cjs.Graphics().p("AmUCiIHepPIFLEMIneJPg");
	var mask_1_graphics_232 = new cjs.Graphics().p("AmaCpIHppcIFMELInpJdg");
	var mask_1_graphics_233 = new cjs.Graphics().p("AmfCvIH0ppIFLEMIn0Jpg");
	var mask_1_graphics_234 = new cjs.Graphics().p("AmlC2IH/p3IFMEMIn/J3g");
	var mask_1_graphics_235 = new cjs.Graphics().p("AmqC9IIJqFIFMEMIoKKFg");
	var mask_1_graphics_236 = new cjs.Graphics().p("AmvDEIIUqSIFLELIoUKTg");
	var mask_1_graphics_237 = new cjs.Graphics().p("Am1DKIIgqfIFLEMIogKfg");
	var mask_1_graphics_238 = new cjs.Graphics().p("Am6DRIIqqtIFLEMIoqKtg");
	var mask_1_graphics_239 = new cjs.Graphics().p("AnADYII1q7IFMEMIo2K7g");
	var mask_1_graphics_240 = new cjs.Graphics().p("AnFDfIJArIIFMELIpBLJg");
	var mask_1_graphics_241 = new cjs.Graphics().p("AnLDlIJLrVIFMEMIpLLVg");
	var mask_1_graphics_242 = new cjs.Graphics().p("AnQDsIJWrjIFLEMIpWLjg");
	var mask_1_graphics_243 = new cjs.Graphics().p("AnWDzIJhrxIFLEMIpgLxg");
	var mask_1_graphics_244 = new cjs.Graphics().p("AnbD5IJsr9IFLEMIprL9g");
	var mask_1_graphics_245 = new cjs.Graphics().p("AnhEAIJ3sLIFLEMIp2MLg");
	var mask_1_graphics_246 = new cjs.Graphics().p("AnmEHIKBsZIFMEMIqBMZg");
	var mask_1_graphics_247 = new cjs.Graphics().p("AnrENIKMslIFLELIqMMmg");
	var mask_1_graphics_248 = new cjs.Graphics().p("AnxEUIKXszIFMEMIqXMzg");
	var mask_1_graphics_249 = new cjs.Graphics().p("An2EbIKitBIFLEMIqiNBg");
	var mask_1_graphics_250 = new cjs.Graphics().p("An8EiIKttPIFMEMIqtNPg");
	var mask_1_graphics_251 = new cjs.Graphics().p("AoBEoIK4tbIFLELIq4Ncg");
	var mask_1_graphics_252 = new cjs.Graphics().p("AoHEvILDtpIFMEMIrDNpg");
	var mask_1_graphics_253 = new cjs.Graphics().p("AoME2ILOt3IFLEMIrNN3g");
	var mask_1_graphics_254 = new cjs.Graphics().p("AoSE9ILZuFIFLEMIrYOFg");
	var mask_1_graphics_255 = new cjs.Graphics().p("AoXFDILjuRIFMELIrjOSg");
	var mask_1_graphics_256 = new cjs.Graphics().p("AodFKILvufIFMEMIrvOfg");
	var mask_1_graphics_257 = new cjs.Graphics().p("AoiFRIL5utIFMEMIr5Otg");
	var mask_1_graphics_258 = new cjs.Graphics().p("AonFXIMEu6IFLEMIsEO6g");
	var mask_1_graphics_259 = new cjs.Graphics().p("AotFeIMPvHIFMEMIsPPHg");
	var mask_1_graphics_260 = new cjs.Graphics().p("AoyFlIMavVIFLEMIsaPVg");
	var mask_1_graphics_261 = new cjs.Graphics().p("Ao4FsIMlvjIFMEMIslPjg");
	var mask_1_graphics_262 = new cjs.Graphics().p("Ao9FyIMwvwIFLEMIswPwg");
	var mask_1_graphics_263 = new cjs.Graphics().p("ApDF5IM7v9IFLEMIs6P9g");
	var mask_1_graphics_264 = new cjs.Graphics().p("ApIGAINFwLIFMEMItFQLg");
	var mask_1_graphics_265 = new cjs.Graphics().p("ApOGHINRwZIFMEMItRQZg");
	var mask_1_graphics_266 = new cjs.Graphics().p("ApTGNINcwmIFLEMItbQmg");
	var mask_1_graphics_267 = new cjs.Graphics().p("ApZGUINnwzIFLEMItmQzg");
	var mask_1_graphics_268 = new cjs.Graphics().p("ApeGbINxxBIFMEMItxRBg");
	var mask_1_graphics_269 = new cjs.Graphics().p("ApjGiIN8xPIFLEMIt8RPg");
	var mask_1_graphics_270 = new cjs.Graphics().p("AppGoIOHxcIFMENIuHRbg");
	var mask_1_graphics_271 = new cjs.Graphics().p("ApuGvIOSxpIFLEMIuSRpg");
	var mask_1_graphics_272 = new cjs.Graphics().p("Ap0G2IOdx3IFMEMIudR3g");
	var mask_1_graphics_273 = new cjs.Graphics().p("Ap5G9IOoyFIFLEMIunSFg");
	var mask_1_graphics_274 = new cjs.Graphics().p("Ap/HDIOzySIFMEMIuzSSg");
	var mask_1_graphics_275 = new cjs.Graphics().p("AqEHKIO9yfIFMEMIu9Sfg");
	var mask_1_graphics_276 = new cjs.Graphics().p("AqKHRIPJytIFLEMIvIStg");
	var mask_1_graphics_277 = new cjs.Graphics().p("AqPHYIPUy7IFLEMIvTS7g");
	var mask_1_graphics_278 = new cjs.Graphics().p("AqVHeIPfzIIFLENIveTHg");
	var mask_1_graphics_279 = new cjs.Graphics().p("AqaHlIPpzVIFMEMIvpTVg");
	var mask_1_graphics_280 = new cjs.Graphics().p("AqfHsIP0zjIFLEMIv0Tjg");
	var mask_1_graphics_281 = new cjs.Graphics().p("AqlHyIP/zvIFMEMIv/Tvg");
	var mask_1_graphics_282 = new cjs.Graphics().p("AqqH5IQKz9IFLEMIwKT9g");
	var mask_1_graphics_283 = new cjs.Graphics().p("AqwIAIQV0LIFMEMIwVULg");
	var mask_1_graphics_284 = new cjs.Graphics().p("Aq1IHIQf0ZIFMEMIwfUZg");
	var mask_1_graphics_285 = new cjs.Graphics().p("Aq7INIQr0lIFMEMIwrUlg");
	var mask_1_graphics_286 = new cjs.Graphics().p("ArAIUIQ20zIFLEMIw1Uzg");
	var mask_1_graphics_287 = new cjs.Graphics().p("ArGIbIRB1BIFLEMIxAVBg");
	var mask_1_graphics_288 = new cjs.Graphics().p("ArLIiIRL1PIFMEMIxLVPg");
	var mask_1_graphics_289 = new cjs.Graphics().p("ArRIoIRX1bIFMEMIxXVbg");
	var mask_1_graphics_290 = new cjs.Graphics().p("ArWIvIRh1pIFMEMIxhVpg");
	var mask_1_graphics_291 = new cjs.Graphics().p("ArbI2IRs13IFLEMIxsV3g");
	var mask_1_graphics_292 = new cjs.Graphics().p("AEAYKIR52GIFLENIx4WFg");
	var mask_1_graphics_293 = new cjs.Graphics().p("Ar3JYISk28IFLENIykW7g");
	var mask_1_graphics_294 = new cjs.Graphics().p("ADUYKITS31IFLENIzSX0g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(194).to({graphics:mask_1_graphics_194,x:119.7,y:181.4}).wait(1).to({graphics:mask_1_graphics_195,x:219.7,y:344.1}).wait(1).to({graphics:mask_1_graphics_196,x:220.3,y:343.5}).wait(1).to({graphics:mask_1_graphics_197,x:220.8,y:342.8}).wait(1).to({graphics:mask_1_graphics_198,x:221.3,y:342.1}).wait(1).to({graphics:mask_1_graphics_199,x:221.9,y:341.4}).wait(1).to({graphics:mask_1_graphics_200,x:222.4,y:340.8}).wait(1).to({graphics:mask_1_graphics_201,x:223,y:340.1}).wait(1).to({graphics:mask_1_graphics_202,x:223.5,y:339.4}).wait(1).to({graphics:mask_1_graphics_203,x:224.1,y:338.7}).wait(1).to({graphics:mask_1_graphics_204,x:224.6,y:338.1}).wait(1).to({graphics:mask_1_graphics_205,x:225.2,y:337.4}).wait(1).to({graphics:mask_1_graphics_206,x:225.7,y:336.7}).wait(1).to({graphics:mask_1_graphics_207,x:226.3,y:336.1}).wait(1).to({graphics:mask_1_graphics_208,x:226.8,y:335.4}).wait(1).to({graphics:mask_1_graphics_209,x:227.3,y:334.7}).wait(1).to({graphics:mask_1_graphics_210,x:227.9,y:334}).wait(1).to({graphics:mask_1_graphics_211,x:228.4,y:333.4}).wait(1).to({graphics:mask_1_graphics_212,x:229,y:332.7}).wait(1).to({graphics:mask_1_graphics_213,x:229.5,y:332}).wait(1).to({graphics:mask_1_graphics_214,x:230.1,y:331.3}).wait(1).to({graphics:mask_1_graphics_215,x:230.6,y:330.7}).wait(1).to({graphics:mask_1_graphics_216,x:231.2,y:330}).wait(1).to({graphics:mask_1_graphics_217,x:231.7,y:329.3}).wait(1).to({graphics:mask_1_graphics_218,x:232.3,y:328.6}).wait(1).to({graphics:mask_1_graphics_219,x:232.8,y:328}).wait(1).to({graphics:mask_1_graphics_220,x:233.3,y:327.3}).wait(1).to({graphics:mask_1_graphics_221,x:233.9,y:326.6}).wait(1).to({graphics:mask_1_graphics_222,x:234.4,y:325.9}).wait(1).to({graphics:mask_1_graphics_223,x:235,y:325.3}).wait(1).to({graphics:mask_1_graphics_224,x:235.5,y:324.6}).wait(1).to({graphics:mask_1_graphics_225,x:236.1,y:323.9}).wait(1).to({graphics:mask_1_graphics_226,x:236.6,y:323.2}).wait(1).to({graphics:mask_1_graphics_227,x:237.2,y:322.6}).wait(1).to({graphics:mask_1_graphics_228,x:237.7,y:321.9}).wait(1).to({graphics:mask_1_graphics_229,x:238.3,y:321.2}).wait(1).to({graphics:mask_1_graphics_230,x:238.8,y:320.5}).wait(1).to({graphics:mask_1_graphics_231,x:239.3,y:319.9}).wait(1).to({graphics:mask_1_graphics_232,x:239.9,y:319.2}).wait(1).to({graphics:mask_1_graphics_233,x:240.4,y:318.5}).wait(1).to({graphics:mask_1_graphics_234,x:241,y:317.9}).wait(1).to({graphics:mask_1_graphics_235,x:241.5,y:317.2}).wait(1).to({graphics:mask_1_graphics_236,x:242.1,y:316.5}).wait(1).to({graphics:mask_1_graphics_237,x:242.6,y:315.8}).wait(1).to({graphics:mask_1_graphics_238,x:243.2,y:315.2}).wait(1).to({graphics:mask_1_graphics_239,x:243.7,y:314.5}).wait(1).to({graphics:mask_1_graphics_240,x:244.3,y:313.8}).wait(1).to({graphics:mask_1_graphics_241,x:244.8,y:313.1}).wait(1).to({graphics:mask_1_graphics_242,x:245.3,y:312.5}).wait(1).to({graphics:mask_1_graphics_243,x:245.9,y:311.8}).wait(1).to({graphics:mask_1_graphics_244,x:246.5,y:311.1}).wait(1).to({graphics:mask_1_graphics_245,x:247,y:310.4}).wait(1).to({graphics:mask_1_graphics_246,x:247.5,y:309.7}).wait(1).to({graphics:mask_1_graphics_247,x:248.1,y:309.1}).wait(1).to({graphics:mask_1_graphics_248,x:248.6,y:308.4}).wait(1).to({graphics:mask_1_graphics_249,x:249.2,y:307.7}).wait(1).to({graphics:mask_1_graphics_250,x:249.7,y:307}).wait(1).to({graphics:mask_1_graphics_251,x:250.3,y:306.4}).wait(1).to({graphics:mask_1_graphics_252,x:250.8,y:305.7}).wait(1).to({graphics:mask_1_graphics_253,x:251.4,y:305}).wait(1).to({graphics:mask_1_graphics_254,x:251.9,y:304.3}).wait(1).to({graphics:mask_1_graphics_255,x:252.5,y:303.7}).wait(1).to({graphics:mask_1_graphics_256,x:253,y:303}).wait(1).to({graphics:mask_1_graphics_257,x:253.5,y:302.3}).wait(1).to({graphics:mask_1_graphics_258,x:254.1,y:301.7}).wait(1).to({graphics:mask_1_graphics_259,x:254.6,y:301}).wait(1).to({graphics:mask_1_graphics_260,x:255.2,y:300.3}).wait(1).to({graphics:mask_1_graphics_261,x:255.7,y:299.6}).wait(1).to({graphics:mask_1_graphics_262,x:256.3,y:299}).wait(1).to({graphics:mask_1_graphics_263,x:256.8,y:298.3}).wait(1).to({graphics:mask_1_graphics_264,x:257.4,y:297.6}).wait(1).to({graphics:mask_1_graphics_265,x:257.9,y:296.9}).wait(1).to({graphics:mask_1_graphics_266,x:258.5,y:296.3}).wait(1).to({graphics:mask_1_graphics_267,x:259,y:295.6}).wait(1).to({graphics:mask_1_graphics_268,x:259.5,y:294.9}).wait(1).to({graphics:mask_1_graphics_269,x:260.1,y:294.2}).wait(1).to({graphics:mask_1_graphics_270,x:260.6,y:293.6}).wait(1).to({graphics:mask_1_graphics_271,x:261.2,y:292.9}).wait(1).to({graphics:mask_1_graphics_272,x:261.7,y:292.2}).wait(1).to({graphics:mask_1_graphics_273,x:262.3,y:291.5}).wait(1).to({graphics:mask_1_graphics_274,x:262.8,y:290.9}).wait(1).to({graphics:mask_1_graphics_275,x:263.4,y:290.2}).wait(1).to({graphics:mask_1_graphics_276,x:263.9,y:289.5}).wait(1).to({graphics:mask_1_graphics_277,x:264.5,y:288.8}).wait(1).to({graphics:mask_1_graphics_278,x:265,y:288.2}).wait(1).to({graphics:mask_1_graphics_279,x:265.5,y:287.5}).wait(1).to({graphics:mask_1_graphics_280,x:266.1,y:286.8}).wait(1).to({graphics:mask_1_graphics_281,x:266.6,y:286.2}).wait(1).to({graphics:mask_1_graphics_282,x:267.2,y:285.5}).wait(1).to({graphics:mask_1_graphics_283,x:267.7,y:284.8}).wait(1).to({graphics:mask_1_graphics_284,x:268.3,y:284.1}).wait(1).to({graphics:mask_1_graphics_285,x:268.8,y:283.5}).wait(1).to({graphics:mask_1_graphics_286,x:269.4,y:282.8}).wait(1).to({graphics:mask_1_graphics_287,x:269.9,y:282.1}).wait(1).to({graphics:mask_1_graphics_288,x:270.5,y:281.4}).wait(1).to({graphics:mask_1_graphics_289,x:271,y:280.8}).wait(1).to({graphics:mask_1_graphics_290,x:271.5,y:280.1}).wait(1).to({graphics:mask_1_graphics_291,x:272.1,y:279.4}).wait(1).to({graphics:mask_1_graphics_292,x:173.2,y:181.4}).wait(1).to({graphics:mask_1_graphics_293,x:274.9,y:276}).wait(1).to({graphics:mask_1_graphics_294,x:177.7,y:181.4}).wait(221));

	// Layer 6
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(20,1,1).p("AvujDQIBnUFNg0QFMg0iZFkQiYFkhwDZQhvDagzCiQgzCiB8ARQB8AQDSiVQDSiWMdxS");
	this.shape_2.setTransform(232.1,275.5);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(194).to({_off:false},0).wait(321));

	// Layer 20 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_161 = new cjs.Graphics().p("ADtSsQCOjmEHg+QEHg/DlCOQDiCLBAD/Iz1EtQg5kACLjig");
	var mask_2_graphics_162 = new cjs.Graphics().p("ADkS1QCGjrEFhIQEEhHDrCFQDmCDBKD9IzqFaQhCj/CCjmg");
	var mask_2_graphics_163 = new cjs.Graphics().p("ADdS+QB+jvEBhRQEChRDvB9QDrB7BSD6IzcGGQhLj9B6jqg");
	var mask_2_graphics_164 = new cjs.Graphics().p("ADXTHQB1jzD/haQD+haD0B1QDvByBbD3IzOGxQhUj5Byjvg");
	var mask_2_graphics_165 = new cjs.Graphics().p("ADSTRQBsj3D8hjQD7hiD3BsQDzBpBkD0Iy+HcQhdj2Bqjzg");
	var mask_2_graphics_166 = new cjs.Graphics().p("ADOTcQBjj7D4hsQD4hrD7BjQD2BhBsDwIysIHQhljzBhj2g");
	var mask_2_graphics_167 = new cjs.Graphics().p("ADLTnQBbj/Dzh0QD0h0D/BaQD5BZB1DsIyaIwQhtjvBYj5g");
	var mask_2_graphics_168 = new cjs.Graphics().p("ADJTyQBSkBDvh9QDwh8EBBRQD9BPB8DoIyEJZQh2jrBPj8g");
	var mask_2_graphics_169 = new cjs.Graphics().p("ADJT+QBIkEDriFQDriFEEBIQD/BHCFDjIxvKBQh+jmBHj/g");
	var mask_2_graphics_170 = new cjs.Graphics().p("ADJUKQA/kHDniNQDmiNEGA/QEBA+CNDeIxXKpQiGjiA9kBg");
	var mask_2_graphics_171 = new cjs.Graphics().p("ADLUXQA2kJDhiVQDhiVEIA2QEEA0CUDZIw/LQQiOjdA1kDg");
	var mask_2_graphics_172 = new cjs.Graphics().p("ADOUjQAskKDcidQDcidEKAtQEFArCbDUIwkL1QiWjYAskFg");
	var mask_2_graphics_173 = new cjs.Graphics().p("ADSUxQAjkMDWikQDWilELAjQEGAiCkDOIwKMaQidjSAjkGg");
	var mask_2_graphics_174 = new cjs.Graphics().p("ADWU+QAakMDQisQDQisENAZQEHAZCqDIIvsM+QikjNAYkHg");
	var mask_2_graphics_175 = new cjs.Graphics().p("ADdVMQAQkNDKizQDKizENAQQEIAQCxDBIvPNhQirjHAQkIg");
	var mask_2_graphics_176 = new cjs.Graphics().p("ADkVaQAHkNDDi6QDDi7EOAHQEIAHC4C7IuvOCQizjBAHkIg");
	var mask_2_graphics_177 = new cjs.Graphics().p("ADsVpQgDkOC9jBQC9jBENgCQEJgDC+C1IuPOiQi5i6gDkIg");
	var mask_2_graphics_178 = new cjs.Graphics().p("AD8WBQgTkNCyjLQCxjMENgSQEIgSDICpItYPWQjDivgSkIg");
	var mask_2_graphics_179 = new cjs.Graphics().p("AEOWaQgikMCmjVQCljVELgiQEHghDSCeIseQFQjOikghkGg");
	var mask_2_graphics_180 = new cjs.Graphics().p("AEjW0QgxkKCZjeQCZjfEJgxQEEgwDaCRIrhQyQjWiYgxkDg");
	var mask_2_graphics_181 = new cjs.Graphics().p("AE7XOQhAkGCMjnQCLjnEGhBQEBg/DjCFIqjRbQjeiMhAkAg");
	var mask_2_graphics_182 = new cjs.Graphics().p("AFWXoQhQkCB/juQB+jvEChQQD8hODqB4IphSAQjmh+hOj9g");
	var mask_2_graphics_183 = new cjs.Graphics().p("AFzYDQhej9Bwj2QBwj1D9heQD4hdDwBqIodShQjuhxhcj3g");
	var mask_2_graphics_184 = new cjs.Graphics().p("AGTYeQhtj3Bij8QBij8D3hsQDyhrD2BcInYS/Qj0hjhqjyg");
	var mask_2_graphics_185 = new cjs.Graphics().p("AG1Y5Qh7jxBTkAQBTkBDxh7QDrh4D7BNImRTYQj5hVh4jrg");
	var mask_2_graphics_186 = new cjs.Graphics().p("AHZZUQiJjpBFkFQBEkGDpiIQDkiGD/A/IlJTtQj9hGiGjkg");
	var mask_2_graphics_187 = new cjs.Graphics().p("AH/ZvQiVjhA1kJQA1kIDgiWQDciTEDAwIkAT/QkBg4iTjcg");
	var mask_2_graphics_188 = new cjs.Graphics().p("AInaKQiijYAmkLQAlkMDYiiQDTifEFAhIi2ULQkDgpigjTg");
	var mask_2_graphics_189 = new cjs.Graphics().p("AJSalQivjOAWkOQAWkNDOiuQDKirEHARIhsUUQkFgairjJg");
	var mask_2_graphics_190 = new cjs.Graphics().p("AJ9a/Qi6jEAHkOQAHkODDi6QDAi2EHACIggUYQkHgKi3jAg");
	var mask_2_graphics_191 = new cjs.Graphics().p("AKVbZQjFi5gJkOQgJkOC5jFQC1jBEGgNIAsUYIgOAAQj+AAi9iwg");
	var mask_2_graphics_192 = new cjs.Graphics().p("AKfbyQjQitgYkOQgZkNCtjPQCpjMEGgbIB2UTQgcACgbAAQjkAAi2iXg");
	var mask_2_graphics_193 = new cjs.Graphics().p("AKpcIQjZiggokMQgokLChjZQCdjVEEgrIDBUKQgwAHguAAQjOAAiuiBg");
	var mask_2_graphics_194 = new cjs.Graphics().p("AK2cdQjiiUg4kJQg3kICUjiQCRjeEAg5IEMT9QhDANhAAAQi5AAikhsg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(161).to({graphics:mask_2_graphics_161,x:142.4,y:167.8}).wait(1).to({graphics:mask_2_graphics_162,x:142.2,y:169}).wait(1).to({graphics:mask_2_graphics_163,x:141.8,y:170.1}).wait(1).to({graphics:mask_2_graphics_164,x:141.5,y:171.1}).wait(1).to({graphics:mask_2_graphics_165,x:141.1,y:172.2}).wait(1).to({graphics:mask_2_graphics_166,x:140.6,y:173.3}).wait(1).to({graphics:mask_2_graphics_167,x:140.2,y:174.3}).wait(1).to({graphics:mask_2_graphics_168,x:139.6,y:175.3}).wait(1).to({graphics:mask_2_graphics_169,x:139.1,y:176.3}).wait(1).to({graphics:mask_2_graphics_170,x:138.5,y:177.3}).wait(1).to({graphics:mask_2_graphics_171,x:137.9,y:178.3}).wait(1).to({graphics:mask_2_graphics_172,x:137.2,y:179.2}).wait(1).to({graphics:mask_2_graphics_173,x:136.6,y:180.1}).wait(1).to({graphics:mask_2_graphics_174,x:135.8,y:181}).wait(1).to({graphics:mask_2_graphics_175,x:135.1,y:181.9}).wait(1).to({graphics:mask_2_graphics_176,x:134.3,y:182.7}).wait(1).to({graphics:mask_2_graphics_177,x:133.5,y:183.5}).wait(1).to({graphics:mask_2_graphics_178,x:132.1,y:184.8}).wait(1).to({graphics:mask_2_graphics_179,x:130.7,y:186}).wait(1).to({graphics:mask_2_graphics_180,x:129.1,y:187.1}).wait(1).to({graphics:mask_2_graphics_181,x:127.6,y:188.2}).wait(1).to({graphics:mask_2_graphics_182,x:125.9,y:189.1}).wait(1).to({graphics:mask_2_graphics_183,x:124.2,y:189.9}).wait(1).to({graphics:mask_2_graphics_184,x:122.5,y:190.7}).wait(1).to({graphics:mask_2_graphics_185,x:120.7,y:191.3}).wait(1).to({graphics:mask_2_graphics_186,x:118.9,y:191.8}).wait(1).to({graphics:mask_2_graphics_187,x:117.1,y:192.3}).wait(1).to({graphics:mask_2_graphics_188,x:115.2,y:192.6}).wait(1).to({graphics:mask_2_graphics_189,x:113.4,y:192.8}).wait(1).to({graphics:mask_2_graphics_190,x:111.5,y:192.9}).wait(1).to({graphics:mask_2_graphics_191,x:111.8,y:192.9}).wait(1).to({graphics:mask_2_graphics_192,x:113.6,y:192.9}).wait(1).to({graphics:mask_2_graphics_193,x:115.5,y:192.9}).wait(1).to({graphics:mask_2_graphics_194,x:117.4,y:192.9}).wait(321));

	// Layer 19
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(20,1,1).p("AobjDQICnUFMg0QFNg0iZFkQiZFkhwDZQhwDagzCiQgzCiB9ARQB8AQDSiVQAegWArgp");
	this.shape_3.setTransform(185.4,275.5);
	this.shape_3._off = true;

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(161).to({_off:false},0).wait(354));

	// Layer 18 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_99 = new cjs.Graphics().p("APUQ/IBEiPIDZBoIhECPg");
	var mask_3_graphics_100 = new cjs.Graphics().p("AiRAbIBLidIDYBoIhLCdg");
	var mask_3_graphics_101 = new cjs.Graphics().p("AiVAjIBSisIDZBnIhSCsg");
	var mask_3_graphics_102 = new cjs.Graphics().p("AiYAqIBZi7IDYBoIhZC7g");
	var mask_3_graphics_103 = new cjs.Graphics().p("AicAxIBgjJIDZBoIhgDJg");
	var mask_3_graphics_104 = new cjs.Graphics().p("AifA5IBnjYIDYBnIhnDYg");
	var mask_3_graphics_105 = new cjs.Graphics().p("AijBAIBujnIDZBoIhuDmg");
	var mask_3_graphics_106 = new cjs.Graphics().p("AinBHIB2j1IDZBnIh2D2g");
	var mask_3_graphics_107 = new cjs.Graphics().p("AiqBPIB9kFIDYBoIh9EFg");
	var mask_3_graphics_108 = new cjs.Graphics().p("AitBWICDkTIDZBoIiEETg");
	var mask_3_graphics_109 = new cjs.Graphics().p("AixBeICLkiIDYBnIiKEig");
	var mask_3_graphics_110 = new cjs.Graphics().p("Ai1BlICSkxIDZBoIiSExg");
	var mask_3_graphics_111 = new cjs.Graphics().p("Ai4BsICZk/IDYBnIiZFAg");
	var mask_3_graphics_112 = new cjs.Graphics().p("Ai7B0ICflPIDZBoIigFOg");
	var mask_3_graphics_113 = new cjs.Graphics().p("Ai/B7ICnldIDYBoIimFdg");
	var mask_3_graphics_114 = new cjs.Graphics().p("AjDCDICulsIDZBnIiuFsg");
	var mask_3_graphics_115 = new cjs.Graphics().p("AjGCKIC1l6IDYBnIi1F6g");
	var mask_3_graphics_116 = new cjs.Graphics().p("AjJCRIC7mJIDZBoIi8GJg");
	var mask_3_graphics_117 = new cjs.Graphics().p("AjNCZIDDmYIDYBoIjCGXg");
	var mask_3_graphics_118 = new cjs.Graphics().p("AjRCgIDKmmIDZBnIjKGmg");
	var mask_3_graphics_119 = new cjs.Graphics().p("AjUCnIDRm1IDYBoIjRG1g");
	var mask_3_graphics_120 = new cjs.Graphics().p("AjYCvIDYnEIDZBnIjYHEg");
	var mask_3_graphics_121 = new cjs.Graphics().p("AjbC2IDenTIDZBoIjeHTg");
	var mask_3_graphics_122 = new cjs.Graphics().p("AjfC+IDlniIDaBoIjlHhg");
	var mask_3_graphics_123 = new cjs.Graphics().p("AjiDFIDsnwIDZBnIjsHxg");
	var mask_3_graphics_124 = new cjs.Graphics().p("AjmDMIDzn/IDaBoIjzH/g");
	var mask_3_graphics_125 = new cjs.Graphics().p("AjpDUID6oOIDZBnIj6IOg");
	var mask_3_graphics_126 = new cjs.Graphics().p("AjtDbIEBodIDaBoIkBIdg");
	var mask_3_graphics_127 = new cjs.Graphics().p("AjwDiIEIorIDZBoIkIIrg");
	var mask_3_graphics_128 = new cjs.Graphics().p("Aj0DqIEPo6IDaBnIkPI7g");
	var mask_3_graphics_129 = new cjs.Graphics().p("Aj3DxIEWpJIDZBoIkWJJg");
	var mask_3_graphics_130 = new cjs.Graphics().p("Aj7D5IEepYIDZBnIkdJYg");
	var mask_3_graphics_131 = new cjs.Graphics().p("Aj/EAIElpnIDaBoIklJng");
	var mask_3_graphics_132 = new cjs.Graphics().p("AkCEHIEsp1IDZBoIksJ1g");
	var mask_3_graphics_133 = new cjs.Graphics().p("AkGEPIEzqEIDaBnIkzKEg");
	var mask_3_graphics_134 = new cjs.Graphics().p("AkJEWIE6qTIDZBoIk6KTg");
	var mask_3_graphics_135 = new cjs.Graphics().p("AkNEeIFBqiIDaBnIlBKig");
	var mask_3_graphics_136 = new cjs.Graphics().p("AkQElIFIqwIDZBnIlIKxg");
	var mask_3_graphics_137 = new cjs.Graphics().p("AkUEtIFPrAIDaBoIlPK/g");
	var mask_3_graphics_138 = new cjs.Graphics().p("AkXE0IFWrOIDZBnIlWLOg");
	var mask_3_graphics_139 = new cjs.Graphics().p("AkbE7IFdrdIDaBoIldLdg");
	var mask_3_graphics_140 = new cjs.Graphics().p("AkeFDIFkrsIDZBnIlkLsg");
	var mask_3_graphics_141 = new cjs.Graphics().p("AkiFKIFrr6IDaBnIlrL6g");
	var mask_3_graphics_142 = new cjs.Graphics().p("AklFSIFysKIDZBoIlyMJg");
	var mask_3_graphics_143 = new cjs.Graphics().p("AkpFZIF6sYIDZBnIl5MYg");
	var mask_3_graphics_144 = new cjs.Graphics().p("AktFgIGBsnIDZBoImAMng");
	var mask_3_graphics_145 = new cjs.Graphics().p("AkwFoIGIs2IDZBnImIM2g");
	var mask_3_graphics_146 = new cjs.Graphics().p("AkzFvIGOtEIDZBnImONEg");
	var mask_3_graphics_147 = new cjs.Graphics().p("Ak3F2IGWtTIDZBoImVNTg");
	var mask_3_graphics_148 = new cjs.Graphics().p("Ak7F9IGdthIDZBnImcNig");
	var mask_3_graphics_149 = new cjs.Graphics().p("Ak+GFIGktxIDZBoImjNxg");
	var mask_3_graphics_150 = new cjs.Graphics().p("AlBGMIGqt/IDZBnImqOAg");
	var mask_3_graphics_151 = new cjs.Graphics().p("AlFGUIGyuOIDZBnImyOOg");
	var mask_3_graphics_152 = new cjs.Graphics().p("AlJGbIG5udIDZBoIm4Odg");
	var mask_3_graphics_153 = new cjs.Graphics().p("AlMGiIHAurIDZBnIm/Osg");
	var mask_3_graphics_154 = new cjs.Graphics().p("AlQGqIHHu7IDZBoInGO6g");
	var mask_3_graphics_155 = new cjs.Graphics().p("AlTGyIHOvKIDZBnInOPKg");
	var mask_3_graphics_156 = new cjs.Graphics().p("AlXG5IHVvYIDaBnInVPYg");
	var mask_3_graphics_157 = new cjs.Graphics().p("AlaHAIHcvnIDZBoIncPng");
	var mask_3_graphics_158 = new cjs.Graphics().p("AleHIIHjv2IDaBnInjP2g");
	var mask_3_graphics_159 = new cjs.Graphics().p("AlhHPIHqwFIDZBoInqQEg");
	var mask_3_graphics_160 = new cjs.Graphics().p("AllHWIHxwTIDaBoInxQTg");
	var mask_3_graphics_161 = new cjs.Graphics().p("AIfYKIH5wjIDZBnIn5Qjg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(99).to({graphics:mask_3_graphics_99,x:126.5,y:119.1}).wait(1).to({graphics:mask_3_graphics_100,x:238.4,y:226.6}).wait(1).to({graphics:mask_3_graphics_101,x:238.1,y:227.3}).wait(1).to({graphics:mask_3_graphics_102,x:237.7,y:228.1}).wait(1).to({graphics:mask_3_graphics_103,x:237.4,y:228.8}).wait(1).to({graphics:mask_3_graphics_104,x:237,y:229.5}).wait(1).to({graphics:mask_3_graphics_105,x:236.7,y:230.3}).wait(1).to({graphics:mask_3_graphics_106,x:236.3,y:231}).wait(1).to({graphics:mask_3_graphics_107,x:236,y:231.8}).wait(1).to({graphics:mask_3_graphics_108,x:235.6,y:232.5}).wait(1).to({graphics:mask_3_graphics_109,x:235.3,y:233.2}).wait(1).to({graphics:mask_3_graphics_110,x:234.9,y:234}).wait(1).to({graphics:mask_3_graphics_111,x:234.6,y:234.7}).wait(1).to({graphics:mask_3_graphics_112,x:234.2,y:235.5}).wait(1).to({graphics:mask_3_graphics_113,x:233.9,y:236.2}).wait(1).to({graphics:mask_3_graphics_114,x:233.5,y:236.9}).wait(1).to({graphics:mask_3_graphics_115,x:233.2,y:237.7}).wait(1).to({graphics:mask_3_graphics_116,x:232.8,y:238.4}).wait(1).to({graphics:mask_3_graphics_117,x:232.5,y:239.2}).wait(1).to({graphics:mask_3_graphics_118,x:232.1,y:239.9}).wait(1).to({graphics:mask_3_graphics_119,x:231.7,y:240.7}).wait(1).to({graphics:mask_3_graphics_120,x:231.4,y:241.4}).wait(1).to({graphics:mask_3_graphics_121,x:231,y:242.1}).wait(1).to({graphics:mask_3_graphics_122,x:230.7,y:242.9}).wait(1).to({graphics:mask_3_graphics_123,x:230.3,y:243.6}).wait(1).to({graphics:mask_3_graphics_124,x:230,y:244.4}).wait(1).to({graphics:mask_3_graphics_125,x:229.6,y:245.1}).wait(1).to({graphics:mask_3_graphics_126,x:229.3,y:245.8}).wait(1).to({graphics:mask_3_graphics_127,x:228.9,y:246.6}).wait(1).to({graphics:mask_3_graphics_128,x:228.6,y:247.3}).wait(1).to({graphics:mask_3_graphics_129,x:228.2,y:248}).wait(1).to({graphics:mask_3_graphics_130,x:227.9,y:248.8}).wait(1).to({graphics:mask_3_graphics_131,x:227.5,y:249.5}).wait(1).to({graphics:mask_3_graphics_132,x:227.2,y:250.3}).wait(1).to({graphics:mask_3_graphics_133,x:226.8,y:251}).wait(1).to({graphics:mask_3_graphics_134,x:226.5,y:251.7}).wait(1).to({graphics:mask_3_graphics_135,x:226.1,y:252.5}).wait(1).to({graphics:mask_3_graphics_136,x:225.8,y:253.2}).wait(1).to({graphics:mask_3_graphics_137,x:225.4,y:254}).wait(1).to({graphics:mask_3_graphics_138,x:225.1,y:254.7}).wait(1).to({graphics:mask_3_graphics_139,x:224.7,y:255.4}).wait(1).to({graphics:mask_3_graphics_140,x:224.4,y:256.2}).wait(1).to({graphics:mask_3_graphics_141,x:224,y:256.9}).wait(1).to({graphics:mask_3_graphics_142,x:223.7,y:257.7}).wait(1).to({graphics:mask_3_graphics_143,x:223.3,y:258.4}).wait(1).to({graphics:mask_3_graphics_144,x:223,y:259.1}).wait(1).to({graphics:mask_3_graphics_145,x:222.6,y:259.9}).wait(1).to({graphics:mask_3_graphics_146,x:222.3,y:260.6}).wait(1).to({graphics:mask_3_graphics_147,x:221.9,y:261.4}).wait(1).to({graphics:mask_3_graphics_148,x:221.6,y:262.1}).wait(1).to({graphics:mask_3_graphics_149,x:221.2,y:262.9}).wait(1).to({graphics:mask_3_graphics_150,x:220.9,y:263.6}).wait(1).to({graphics:mask_3_graphics_151,x:220.5,y:264.3}).wait(1).to({graphics:mask_3_graphics_152,x:220.2,y:265.1}).wait(1).to({graphics:mask_3_graphics_153,x:219.8,y:265.8}).wait(1).to({graphics:mask_3_graphics_154,x:219.5,y:266.6}).wait(1).to({graphics:mask_3_graphics_155,x:219.1,y:267.3}).wait(1).to({graphics:mask_3_graphics_156,x:218.7,y:268}).wait(1).to({graphics:mask_3_graphics_157,x:218.4,y:268.8}).wait(1).to({graphics:mask_3_graphics_158,x:218,y:269.5}).wait(1).to({graphics:mask_3_graphics_159,x:217.7,y:270.3}).wait(1).to({graphics:mask_3_graphics_160,x:217.3,y:271}).wait(1).to({graphics:mask_3_graphics_161,x:126.5,y:164.9}).wait(354));

	// Layer 17
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(20,1,1).p("AvujDQIBnUFNg0QFMg0iZFkQiYFkhwDZQhvDagzCiQgzCiB8ARQB8AQDSiVQDSiWMdxS");
	this.shape_4.setTransform(232.1,275.5);
	this.shape_4._off = true;

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(99).to({_off:false},0).wait(416));

	// Layer 5 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_71 = new cjs.Graphics().p("AB/OkQgKkOC4jGQC3jHEOgKQEJgKDDCwIt3O9Qi+i2gKkIg");
	var mask_4_graphics_72 = new cjs.Graphics().p("AB3OXQgCkOC+jBQC+jAEOgCQEIgCC+C2IuTOhQi5i7gCkJg");
	var mask_4_graphics_73 = new cjs.Graphics().p("ABwOLQAHkPDDi6QDDi7EOAGQEJAHC4C7IuvOFQizjBAGkIg");
	var mask_4_graphics_74 = new cjs.Graphics().p("ABqN+QAPkNDJi1QDJi1ENAPQEIAOCzDBIvKNoQitjHAOkIg");
	var mask_4_graphics_75 = new cjs.Graphics().p("ABlNyQAWkNDPiuQDOivENAXQEIAWCtDGIvkNKQinjLAWkIg");
	var mask_4_graphics_76 = new cjs.Graphics().p("ABgNmQAfkMDUioQDTioEMAfQEHAeCnDLIv9MrQihjQAekHg");
	var mask_4_graphics_77 = new cjs.Graphics().p("ABdNbQAnkLDYiiQDZihELAmQEGAmCgDRIwVMMQiajVAmkGg");
	var mask_4_graphics_78 = new cjs.Graphics().p("ABaNQQAvkKDdibQDdibEKAvQEFAuCaDVIwtLsQiTjaAukEg");
	var mask_4_graphics_79 = new cjs.Graphics().p("ABYNFQA3kJDiiUQDiiUEIA3QEDA2CTDZIxCLLQiNjeA2kCg");
	var mask_4_graphics_80 = new cjs.Graphics().p("ABWM6QBAkHDmiNQDmiNEGA/QECA+CMDeIxXKpQiGjiA9kBg");
	var mask_4_graphics_81 = new cjs.Graphics().p("ABWMvQBHkEDriGQDqiGEEBGQEABGCFDiIxrKHQh/jmBFj/g");
	var mask_4_graphics_82 = new cjs.Graphics().p("ABXMlQBPkCDuh/QDuh/ECBPQD9BNB/DmIx+JlQh4jqBNj9g");
	var mask_4_graphics_83 = new cjs.Graphics().p("ABYMbQBXj/Dyh4QDyh4D/BXQD7BVB4DqIyRJBQhxjtBVj7g");
	var mask_4_graphics_84 = new cjs.Graphics().p("ABaMSQBfj9D1hwQD2hxD8BfQD4BcBxDtIyhIeQhpjwBbj4g");
	var mask_4_graphics_85 = new cjs.Graphics().p("ABdMJQBmj6D5hpQD5hpD6BmQD0BkBqDwIyxH6Qhhj0Bij0g");
	var mask_4_graphics_86 = new cjs.Graphics().p("ABiL9QBwj2D9heQD9hfD1BwQDxBtBgD1IzFHJQhXj4Bsjwg");
	var mask_4_graphics_87 = new cjs.Graphics().p("ABpLyQB6jxEAhVQEAhUDxB5QDsB3BWD5IzWGXQhNj6B2jsg");
	var mask_4_graphics_88 = new cjs.Graphics().p("ABxLnQCDjsEEhKQEDhKDsCDQDnCABMD8IzlFmQhEj+CAjng");
	var mask_4_graphics_89 = new cjs.Graphics().p("AB6LdQCNjmEGhAQEHhADmCNQDiCJBCD/IzzEzQg5kACIjig");
	var mask_4_graphics_90 = new cjs.Graphics().p("ACFLUQCWjhEIg1QEJg1DhCWQDcCSA3EBIz+EBQgvkDCSjcg");
	var mask_4_graphics_91 = new cjs.Graphics().p("ACRLLQCfjaEKgrQELgqDbCeQDWCcAtEDI0IDNQgkkFCajWg");
	var mask_4_graphics_92 = new cjs.Graphics().p("ACeLDQCojUEMgfQEMggDUCnQDQCkAjEEI0PCaQgakGCijQg");
	var mask_4_graphics_93 = new cjs.Graphics().p("ACtK8QCwjNENgVQEOgVDNCwQDJCsAYEFI0UBmQgQkHCrjJg");
	var mask_4_graphics_94 = new cjs.Graphics().p("AC9K2QC4jGEOgKQEOgLDGC4QDCC0AOEGI0XAyQgGkHCzjCg");
	var mask_4_graphics_95 = new cjs.Graphics().p("AAPRwQAFkHC7i7QDAi+EOAAQEOABC+DAQC7C7ADEHg");
	var mask_4_graphics_96 = new cjs.Graphics().p("AAQRJQAPkHDDizQDHi3EOAMQEOALC2DHQCzDDgHEHg");
	var mask_4_graphics_97 = new cjs.Graphics().p("AASQiQAZkGDKirQDOivENAWQEOAXCuDOQCrDKgREGg");
	var mask_4_graphics_98 = new cjs.Graphics().p("AAUP6QAkkEDRijQDVimEMAhQEMAhCmDVQCjDRgcEFg");
	var mask_4_graphics_99 = new cjs.Graphics().p("AAYPUQAukDDXibQDcidELAsQEKAsCeDbQCaDXgnEEg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(71).to({graphics:mask_4_graphics_71,x:121.4,y:137.8}).wait(1).to({graphics:mask_4_graphics_72,x:122.1,y:137.1}).wait(1).to({graphics:mask_4_graphics_73,x:122.8,y:136.4}).wait(1).to({graphics:mask_4_graphics_74,x:123.5,y:135.7}).wait(1).to({graphics:mask_4_graphics_75,x:124.2,y:134.9}).wait(1).to({graphics:mask_4_graphics_76,x:124.8,y:134.1}).wait(1).to({graphics:mask_4_graphics_77,x:125.4,y:133.4}).wait(1).to({graphics:mask_4_graphics_78,x:126,y:132.6}).wait(1).to({graphics:mask_4_graphics_79,x:126.5,y:131.7}).wait(1).to({graphics:mask_4_graphics_80,x:127,y:130.9}).wait(1).to({graphics:mask_4_graphics_81,x:127.5,y:130}).wait(1).to({graphics:mask_4_graphics_82,x:128,y:129.2}).wait(1).to({graphics:mask_4_graphics_83,x:128.5,y:128.3}).wait(1).to({graphics:mask_4_graphics_84,x:128.9,y:127.4}).wait(1).to({graphics:mask_4_graphics_85,x:129.3,y:126.5}).wait(1).to({graphics:mask_4_graphics_86,x:129.8,y:125.3}).wait(1).to({graphics:mask_4_graphics_87,x:130.2,y:124}).wait(1).to({graphics:mask_4_graphics_88,x:130.6,y:122.8}).wait(1).to({graphics:mask_4_graphics_89,x:131,y:121.5}).wait(1).to({graphics:mask_4_graphics_90,x:131.2,y:120.3}).wait(1).to({graphics:mask_4_graphics_91,x:131.5,y:119}).wait(1).to({graphics:mask_4_graphics_92,x:131.7,y:117.7}).wait(1).to({graphics:mask_4_graphics_93,x:131.8,y:116.4}).wait(1).to({graphics:mask_4_graphics_94,x:131.9,y:115.1}).wait(1).to({graphics:mask_4_graphics_95,x:131.9,y:113.9}).wait(1).to({graphics:mask_4_graphics_96,x:131.9,y:115.2}).wait(1).to({graphics:mask_4_graphics_97,x:131.9,y:116.5}).wait(1).to({graphics:mask_4_graphics_98,x:131.9,y:117.8}).wait(1).to({graphics:mask_4_graphics_99,x:131.9,y:119.1}).wait(416));

	// Layer 4
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(20,1,1).p("AvujDQIBnUFNg0QFMg0iZFkQiYFkhwDZQhvDagzCiQgzCiB8ARQB8AQDSiVQDSiWMdxS");
	this.shape_5.setTransform(232.1,275.5);
	this.shape_5._off = true;

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(71).to({_off:false},0).wait(444));

	// Layer 3 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_9 = new cjs.Graphics().p("EgOJAh5Qo4oSgasIQgbsIISo3MAq0An/QoTI3sGAbIhKABQraAAocn5g");
	var mask_5_graphics_10 = new cjs.Graphics().p("EgOVAhjQovocgMsIQgPsIIcouMAqIAotQocIvsIANIglAAQrwAAohoPg");
	var mask_5_graphics_11 = new cjs.Graphics().p("EAGNApyQsJAAololQolomABsIQgBsJImokMApZApbQolIlsHAAIAAAAg");
	var mask_5_graphics_12 = new cjs.Graphics().p("EAF4ApyQsIgOocovQocouAPsJQAMsHIvobMAosAqIQohIOrvAAIgmAAg");
	var mask_5_graphics_13 = new cjs.Graphics().p("EAFjApxQsIgboSo4QoRo4AcsIQAZsHI5oSMAn8Aq1QodH4rXAAIhLgBg");
	var mask_5_graphics_14 = new cjs.Graphics().p("EAFPApwQsHgpoIpBQoIpBApsHQAnsGJBoIMAnNArgQoYHirBAAQg2AAg4gCg");
	var mask_5_graphics_15 = new cjs.Graphics().p("EAE7ApuQsHg2n+pKQn+pKA3sGQA1sGJKn+MAmcAsLQoSHOqsAAQhIAAhJgFg");
	var mask_5_graphics_16 = new cjs.Graphics().p("EAEnAprQsFhDn0pTQn0pSBEsGQBCsEJTn0MAlrAs1QoNG5qWAAQhZAAhbgIg");
	var mask_5_graphics_17 = new cjs.Graphics().p("EAETApoQsEhRnppbQnqpbBSsEQBPsDJbnpMAk5AteQoGGkqCAAQhpAAhtgLg");
	var mask_5_graphics_18 = new cjs.Graphics().p("EAEAApkQsDhenfpjQnfpkBfsCQBdsBJjnfMAkHAuFQoAGRpuAAQh6AAh9gPg");
	var mask_5_graphics_19 = new cjs.Graphics().p("EADtApgQsBhrnUpsQnVprBssBQBqsAJsnUMAjTAutQn5F9pbAAQiJAAiOgTg");
	var mask_5_graphics_20 = new cjs.Graphics().p("EADaApbQr/h5nKpzQnJp0B5r+QB3r+J0nJMAifAvTQnxFrpIAAQiZAAifgZg");
	var mask_5_graphics_21 = new cjs.Graphics().p("EADHApVQr8iFm/p7Qm/p8CHr8QCEr8J7m+MAhrAv5QnqFYo1AAQipAAivgfg");
	var mask_5_graphics_22 = new cjs.Graphics().p("EAC1ApPQr6iSm0qDQm0qDCUr6QCRr5KDm0MAg1AweQnhFGojAAQi4AAi/glg");
	var mask_5_graphics_23 = new cjs.Graphics().p("EACiApJQr3igmoqKQmpqKChr3QCer3KKmoMAgAAxBQnZE0oSAAQjHAAjPgrg");
	var mask_5_graphics_24 = new cjs.Graphics().p("EACRApCQr1itmdqRQmdqSCtr0QCsr0KRmdMAfJAxkQnQEkoAAAQjWAAjegzg");
	var mask_5_graphics_25 = new cjs.Graphics().p("EAB/Ao6Qrxi6mSqYQmSqYC7rxQC4rxKZmSMAeSAyGQnHETnwAAQjlAAjtg7g");
	var mask_5_graphics_26 = new cjs.Graphics().p("EABuAoyQrujHmHqfQmGqfDIruQDFrtKfmGMAdbAymQm9EDngAAQjzAAj8hDg");
	var mask_5_graphics_27 = new cjs.Graphics().p("EABcAopQrqjTl7qmQl6qmDUrqQDTrqKml6MAciAzGQmzDznPAAQkDAAkLhMg");
	var mask_5_graphics_28 = new cjs.Graphics().p("EABMAogQrnjglvqsQlvqtDirmQDfrmKslvMAbpAzlQmoDkm/AAQkRAAkZhVg");
	var mask_5_graphics_29 = new cjs.Graphics().p("EAA7AoXQrijuljqyQljqyDurjQDsriKyljMAawA0DQmeDVmvAAQkgAAknheg");
	var mask_5_graphics_30 = new cjs.Graphics().p("EAArAoMQrej6lXq4QlXq4D6reQD5reK4lXMAZ3A0gQmUDGmfAAQkuAAk1hpg");
	var mask_5_graphics_31 = new cjs.Graphics().p("EAAbAoCQrakHlLq+QlLq+EIraQEFrZK+lLMAY8A08QmIC5mQAAQk9AAlCh0g");
	var mask_5_graphics_32 = new cjs.Graphics().p("EAAMAn3QrWkUk+rDQk/rEEUrVQERrULEk/MAYBA1WQl8CsmBAAQlLAAlPh/g");
	var mask_5_graphics_33 = new cjs.Graphics().p("EgADAnrQrRkgkzrJQkyrJEgrQQEerQLKkyMAXGA1wQlxCflyAAQlaAAlbiLg");
	var mask_5_graphics_34 = new cjs.Graphics().p("EgASAnfQrMkskmrOQkmrPEsrKQErrLLOkmMAWLA2JQlkCSljAAQlpAAloiXg");
	var mask_5_graphics_35 = new cjs.Graphics().p("EgAgAnSQrHk5karTQkarTE5rFQE3rGLSkZMAVQA2hQlXCFlVAAQl4AAlzijg");
	var mask_5_graphics_36 = new cjs.Graphics().p("EgAqAnJQrDlBkRrWQkSrWFBrCQFArCLVkRMAUnA2wQlPB+lKAAQmDAAl7isg");
	var mask_5_graphics_37 = new cjs.Graphics().p("EgA0AnAQq/lJkJrZQkJraFKq+QFHq+LZkJMAT+A3AQlGB2lBAAQmMAAmEi1g");
	var mask_5_graphics_38 = new cjs.Graphics().p("EgA9Am3Qq8lRkArdQkArdFRq5QFQq7LckAMATUA3PQk9Buk2AAQmXAAmLi+g");
	var mask_5_graphics_39 = new cjs.Graphics().p("EgBGAmtQq4lZj4rgQj3rfFZq1QFYq4Lfj3MASrA3dQk0BnksAAQmiAAmSjIg");
	var mask_5_graphics_40 = new cjs.Graphics().p("EgBQAmjQqzlhjvriQjvrjFhqxQFgqzLijvMASCA3rQkrBgkiAAQmtAAmajSg");
	var mask_5_graphics_41 = new cjs.Graphics().p("EgBZAmaQqvlqjnrlQjmrlFqqtQFoqvLkjnMARYA34QkhBakZAAQm2AAmijbg");
	var mask_5_graphics_42 = new cjs.Graphics().p("EgBhAmPQqslxjeroQjdroFxqoQFwqrLnjeMAQvA4FQkYBTkPAAQnBAAmojmg");
	var mask_5_graphics_43 = new cjs.Graphics().p("EgBqAmFQqnl5jVrrQjVrqF5qlQF4qmLqjVMAQEA4RQkOBNkEAAQnNAAmvjwg");
	var mask_5_graphics_44 = new cjs.Graphics().p("EgBzAl6QqimBjNrtQjMrtGCqgQF/qiLsjMMAPbA4dQkEBHj7AAQnYAAm2j7g");
	var mask_5_graphics_45 = new cjs.Graphics().p("EgB7AlwQqemJjErwQjDrvGJqbQGIqeLujEMAOwA4pQj6BBjxAAQniAAm9kFg");
	var mask_5_graphics_46 = new cjs.Graphics().p("EgCDAllQqamRi7ryQi6rxGRqXQGPqZLxi7MAOGA40QjwA7jnAAQnuAAnDkQg");
	var mask_5_graphics_47 = new cjs.Graphics().p("EgCLAlZQqVmYiyr0Qiyr0GZqSQGXqULziyMANbA4+QjmA2jdAAQn5AAnJkcg");
	var mask_5_graphics_48 = new cjs.Graphics().p("EgCTAlOQqQmgipr2Qiqr2GhqNQGfqQL1ipMAMwA5IQjbAxjTAAQoFAAnPkng");
	var mask_5_graphics_49 = new cjs.Graphics().p("EgCbAlCQqLmoigr3Qihr4GoqIQGnqLL3ihMAMGA5SQjRAsjJAAQoQAAnWkzg");
	var mask_5_graphics_50 = new cjs.Graphics().p("EgCjAk3QqGmwiXr6QiYr5GwqEQGuqFL5iYMALbA5aQjGAoi/AAQocAAnck+g");
	var mask_5_graphics_51 = new cjs.Graphics().p("EgCqAkqQqBm3iPr7QiOr7G3p/QG2qAL6iPMAKwA5jQi7Aji0AAQopAAnhlLg");
	var mask_5_graphics_52 = new cjs.Graphics().p("EgCxAkeQp8m+iGr9QiGr9G/p5QG9p8L8iGMAKGA5rQixAfiqAAQo1AAnmlXg");
	var mask_5_graphics_53 = new cjs.Graphics().p("EgC4AkSQp3nGh9r/Qh9r+HHp0QHEp2L+h9MAJaA5yQimAbifAAQpBAAnsljg");
	var mask_5_graphics_54 = new cjs.Graphics().p("EgC/AkFQpynNhzsAQh0sAHNpvQHMpxL/h0MAIvA55QiaAYiVAAQpOAAnxlwg");
	var mask_5_graphics_55 = new cjs.Graphics().p("EgDGAj4QpsnUhrsCQhrsBHVppQHTpsMAhrMAIEA6AQiPATiKAAQpbAAn2l8g");
	var mask_5_graphics_56 = new cjs.Graphics().p("EgDNAjrQpmnchisCQhisDHcpjQHapnMChiMAHYA6GQiDAQiAAAQpoAAn7mJg");
	var mask_5_graphics_57 = new cjs.Graphics().p("EgDTAjeQphnjhZsEQhZsDHjpfQHipgMChZMAGuA6KQh5AOh0AAQp2AAn/mWg");
	var mask_5_graphics_58 = new cjs.Graphics().p("EgDZAjQQpbnqhQsEQhQsFHqpZQHppaMDhQMAGCA6PQhtALhpAAQqDAAoEmkg");
	var mask_5_graphics_59 = new cjs.Graphics().p("EgDfAjCQpWnxhHsFQhGsFHxpTQHupWMGhGMAFWA6TQhhAJheAAQqRAAoImyg");
	var mask_5_graphics_60 = new cjs.Graphics().p("EgDlAi1QpQn4g+sHQg9sGH4pNQH1pPMGg+MAErA6XQhVAHhTAAQqfAAoMm/g");
	var mask_5_graphics_61 = new cjs.Graphics().p("EgDrAimQpKn+g0sHQg1sHH/pHQH8pKMHg1MAD/A6bQhJAFhHAAQquAAoQnOg");
	var mask_5_graphics_62 = new cjs.Graphics().p("EgDwAiYQpEoGgssHQgssIIGpBQIDpDMIgsMADTA6eQg8ADg8AAQq9AAoTncg");
	var mask_5_graphics_63 = new cjs.Graphics().p("EgD2AiKQo9oNgjsIQgjsIINo7QIKo+MIgiMACnA6gQgwACgwAAQrLAAoYnqg");
	var mask_5_graphics_64 = new cjs.Graphics().p("EgD7Ah7Qo3oTgasJQgasIITo1QIRo3MIgaMAB8A6iIhHABQrbAAobn5g");
	var mask_5_graphics_65 = new cjs.Graphics().p("EgEAAhsQoxoagRsJQgQsIIZovQIYoxMIgRMABQA6jIguABQrrAAoeoIg");
	var mask_5_graphics_66 = new cjs.Graphics().p("EgEFAhdQorohgHsIQgIsJIgopQIeorMJgHMAAkA6kIgVAAQr7AAohoXg");
	var mask_5_graphics_67 = new cjs.Graphics().p("EgENAhNQolomACsJQABsJInoiQIkolMJACMgAHA6kQsJgBoiomg");
	var mask_5_graphics_68 = new cjs.Graphics().p("EgEnAg+QofotALsJQALsIItodQIqoeMJALMgAzA6kQsJgLoborg");
	var mask_5_graphics_69 = new cjs.Graphics().p("EgFCAguQoXozATsJQAUsHIzoXQIxoXMJATMgBfA6kQsIgUoWoyg");
	var mask_5_graphics_70 = new cjs.Graphics().p("EgFcAgfQoRo6AdsIQAdsII5oPQI4oRMIAcMgCLA6jQsIgdoPo4g");
	var mask_5_graphics_71 = new cjs.Graphics().p("EgF2AgPQoKpAAmsIQAmsHI/oJQI+oKMIAmMgC3A6gQsIgmoIo+g");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_5_graphics_9,x:174.4,y:267.4}).wait(1).to({graphics:mask_5_graphics_10,x:173.3,y:267.4}).wait(1).to({graphics:mask_5_graphics_11,x:172.1,y:267.4}).wait(1).to({graphics:mask_5_graphics_12,x:171,y:267.4}).wait(1).to({graphics:mask_5_graphics_13,x:169.8,y:267.4}).wait(1).to({graphics:mask_5_graphics_14,x:168.6,y:267.4}).wait(1).to({graphics:mask_5_graphics_15,x:167.4,y:267.5}).wait(1).to({graphics:mask_5_graphics_16,x:166.2,y:267.5}).wait(1).to({graphics:mask_5_graphics_17,x:164.9,y:267.5}).wait(1).to({graphics:mask_5_graphics_18,x:163.7,y:267.5}).wait(1).to({graphics:mask_5_graphics_19,x:162.4,y:267.5}).wait(1).to({graphics:mask_5_graphics_20,x:161.1,y:267.6}).wait(1).to({graphics:mask_5_graphics_21,x:159.8,y:267.6}).wait(1).to({graphics:mask_5_graphics_22,x:158.4,y:267.6}).wait(1).to({graphics:mask_5_graphics_23,x:157.1,y:267.6}).wait(1).to({graphics:mask_5_graphics_24,x:155.7,y:267.7}).wait(1).to({graphics:mask_5_graphics_25,x:154.4,y:267.7}).wait(1).to({graphics:mask_5_graphics_26,x:153,y:267.7}).wait(1).to({graphics:mask_5_graphics_27,x:151.6,y:267.7}).wait(1).to({graphics:mask_5_graphics_28,x:150.1,y:267.7}).wait(1).to({graphics:mask_5_graphics_29,x:148.7,y:267.7}).wait(1).to({graphics:mask_5_graphics_30,x:147.3,y:267.7}).wait(1).to({graphics:mask_5_graphics_31,x:145.8,y:267.8}).wait(1).to({graphics:mask_5_graphics_32,x:144.3,y:267.8}).wait(1).to({graphics:mask_5_graphics_33,x:142.9,y:267.8}).wait(1).to({graphics:mask_5_graphics_34,x:141.4,y:267.8}).wait(1).to({graphics:mask_5_graphics_35,x:139.9,y:267.7}).wait(1).to({graphics:mask_5_graphics_36,x:138.9,y:267.7}).wait(1).to({graphics:mask_5_graphics_37,x:137.9,y:267.7}).wait(1).to({graphics:mask_5_graphics_38,x:136.8,y:267.7}).wait(1).to({graphics:mask_5_graphics_39,x:135.8,y:267.7}).wait(1).to({graphics:mask_5_graphics_40,x:134.8,y:267.7}).wait(1).to({graphics:mask_5_graphics_41,x:133.7,y:267.7}).wait(1).to({graphics:mask_5_graphics_42,x:132.7,y:267.7}).wait(1).to({graphics:mask_5_graphics_43,x:131.6,y:267.7}).wait(1).to({graphics:mask_5_graphics_44,x:130.6,y:267.7}).wait(1).to({graphics:mask_5_graphics_45,x:129.5,y:267.7}).wait(1).to({graphics:mask_5_graphics_46,x:128.5,y:267.7}).wait(1).to({graphics:mask_5_graphics_47,x:127.4,y:267.7}).wait(1).to({graphics:mask_5_graphics_48,x:126.3,y:267.7}).wait(1).to({graphics:mask_5_graphics_49,x:125.3,y:267.7}).wait(1).to({graphics:mask_5_graphics_50,x:124.2,y:267.7}).wait(1).to({graphics:mask_5_graphics_51,x:123.1,y:267.7}).wait(1).to({graphics:mask_5_graphics_52,x:122.1,y:267.7}).wait(1).to({graphics:mask_5_graphics_53,x:121,y:267.7}).wait(1).to({graphics:mask_5_graphics_54,x:119.9,y:267.7}).wait(1).to({graphics:mask_5_graphics_55,x:118.8,y:267.6}).wait(1).to({graphics:mask_5_graphics_56,x:117.7,y:267.6}).wait(1).to({graphics:mask_5_graphics_57,x:116.7,y:267.6}).wait(1).to({graphics:mask_5_graphics_58,x:115.6,y:267.6}).wait(1).to({graphics:mask_5_graphics_59,x:114.5,y:267.6}).wait(1).to({graphics:mask_5_graphics_60,x:113.4,y:267.6}).wait(1).to({graphics:mask_5_graphics_61,x:112.3,y:267.6}).wait(1).to({graphics:mask_5_graphics_62,x:111.2,y:267.6}).wait(1).to({graphics:mask_5_graphics_63,x:110.1,y:267.6}).wait(1).to({graphics:mask_5_graphics_64,x:109,y:267.6}).wait(1).to({graphics:mask_5_graphics_65,x:107.9,y:267.6}).wait(1).to({graphics:mask_5_graphics_66,x:106.8,y:267.6}).wait(1).to({graphics:mask_5_graphics_67,x:106.1,y:267.6}).wait(1).to({graphics:mask_5_graphics_68,x:107.2,y:267.6}).wait(1).to({graphics:mask_5_graphics_69,x:108.3,y:267.6}).wait(1).to({graphics:mask_5_graphics_70,x:109.4,y:267.6}).wait(1).to({graphics:mask_5_graphics_71,x:110.5,y:267.5}).wait(444));

	// Layer 2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(20,1,1).p("AoYEHQIBnTFMg0QETgrg4Dr");
	this.shape_6.setTransform(185.1,229.6);
	this.shape_6._off = true;

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(9).to({_off:false},0).wait(506));

	// Letter
	this.instance_3 = new lib.Symbol1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(275,275);
	this.instance_3.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(515));

	// Background
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_7.setTransform(275,275,3.373,2.543);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_8.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).wait(515));

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