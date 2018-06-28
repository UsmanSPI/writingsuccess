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
	this.shape.graphics.f("#FFFFFF").s().p("Av5SbQiHhvAAjEQAAh4BtjWQAAgJAFgMQg0AsgyAAQhBAAAAhsQAAifCQibQETkvA1hKIkCAAQiVAAAAiPQAAiQCVAAIGmAAIDCmjQCylXBYAAQCYAAAACQQkQI7gXAvIEAAAQCQAAAACQQAACPiQAAImQAAQnJMfAAE8QAAB+B+AAQC8AAHGjnQE4i5D2jnIDZjTIErkSQA9gvA7AAQBhAAAAByQAABCkuFOQmyGpkoC/QjsCYjWBVQjtBhi2AAQjEAAh+htg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120.5,-128.7,241.2,257.6);


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


(lib.ar6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-64.4,22.3,1,1,-3.5,0,0,-0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:-72.5,guide:{path:[-64.4,22.5,-62.2,42.7,-57.5,53.5,-52.8,64.3,-45.5,65.7]}},31).to({rotation:-139.2,guide:{path:[-45.6,65.7,-38,67.2,-27.5,58.2,-16.1,48.2,-6.1,36.9]}},36).to({regX:-0.3,scaleX:1,scaleY:1,rotation:-144.6,guide:{path:[-6,36.9,8.5,20.3,19.8,0.8]}},25).to({regX:-0.2,scaleX:1,scaleY:1,rotation:-151.9,guide:{path:[19.9,0.7,21.1,-1.3,22.2,-3.4,41.7,-38.9,49.4,-50.5]}},27).wait(1));

	// Layer 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_74 = new cjs.Graphics().p("AkwDIIAAh4IJhAAIAAB4g");
	var mask_graphics_75 = new cjs.Graphics().p("AkwBFIAAiJIJhAAIAACJg");
	var mask_graphics_76 = new cjs.Graphics().p("AkwBOIAAibIJhAAIAACbg");
	var mask_graphics_77 = new cjs.Graphics().p("AkwBXIAAitIJhAAIAACtg");
	var mask_graphics_78 = new cjs.Graphics().p("AkwBgIAAi/IJhAAIAAC/g");
	var mask_graphics_79 = new cjs.Graphics().p("AkwBpIAAjRIJhAAIAADRg");
	var mask_graphics_80 = new cjs.Graphics().p("AkwByIAAjiIJhAAIAADig");
	var mask_graphics_81 = new cjs.Graphics().p("AkwB7IAAj0IJhAAIAAD0g");
	var mask_graphics_82 = new cjs.Graphics().p("AkwCEIAAkGIJhAAIAAEGg");
	var mask_graphics_83 = new cjs.Graphics().p("AkwCMIAAkXIJhAAIAAEXg");
	var mask_graphics_84 = new cjs.Graphics().p("AkwCVIAAkpIJhAAIAAEpg");
	var mask_graphics_85 = new cjs.Graphics().p("AkwCeIAAk7IJhAAIAAE7g");
	var mask_graphics_86 = new cjs.Graphics().p("AkwCnIAAlNIJhAAIAAFNg");
	var mask_graphics_87 = new cjs.Graphics().p("AkwCwIAAlfIJhAAIAAFfg");
	var mask_graphics_88 = new cjs.Graphics().p("AkwC5IAAlxIJhAAIAAFxg");
	var mask_graphics_89 = new cjs.Graphics().p("AkwDCIAAmDIJhAAIAAGDg");
	var mask_graphics_90 = new cjs.Graphics().p("AkwDLIAAmVIJhAAIAAGVg");
	var mask_graphics_91 = new cjs.Graphics().p("AkwDUIAAmnIJhAAIAAGng");
	var mask_graphics_92 = new cjs.Graphics().p("AkwDdIAAm5IJhAAIAAG5g");
	var mask_graphics_93 = new cjs.Graphics().p("AkwDmIAAnLIJhAAIAAHLg");
	var mask_graphics_94 = new cjs.Graphics().p("AkwDvIAAncIJhAAIAAHcg");
	var mask_graphics_95 = new cjs.Graphics().p("AkwD4IAAnuIJhAAIAAHug");
	var mask_graphics_96 = new cjs.Graphics().p("AkwEAIAAn/IJhAAIAAH/g");
	var mask_graphics_97 = new cjs.Graphics().p("AkwEJIAAoRIJhAAIAAIRg");
	var mask_graphics_98 = new cjs.Graphics().p("AkwESIAAojIJhAAIAAIjg");
	var mask_graphics_99 = new cjs.Graphics().p("AkwEbIAAo1IJhAAIAAI1g");
	var mask_graphics_100 = new cjs.Graphics().p("AkwEkIAApHIJhAAIAAJHg");
	var mask_graphics_101 = new cjs.Graphics().p("AkwEtIAApZIJhAAIAAJZg");
	var mask_graphics_102 = new cjs.Graphics().p("AkwE2IAAprIJhAAIAAJrg");
	var mask_graphics_103 = new cjs.Graphics().p("AkwE/IAAp9IJhAAIAAJ9g");
	var mask_graphics_104 = new cjs.Graphics().p("AkwFIIAAqPIJhAAIAAKPg");
	var mask_graphics_105 = new cjs.Graphics().p("AkwFQIAAqfIJhAAIAAKfg");
	var mask_graphics_106 = new cjs.Graphics().p("AkwFZIAAqxIJhAAIAAKxg");
	var mask_graphics_107 = new cjs.Graphics().p("AkwFiIAArDIJhAAIAALDg");
	var mask_graphics_108 = new cjs.Graphics().p("AkwFrIAArVIJhAAIAALVg");
	var mask_graphics_109 = new cjs.Graphics().p("AkwF0IAArnIJhAAIAALng");
	var mask_graphics_110 = new cjs.Graphics().p("AkwF9IAAr5IJhAAIAAL5g");
	var mask_graphics_111 = new cjs.Graphics().p("AkwGGIAAsLIJhAAIAAMLg");
	var mask_graphics_112 = new cjs.Graphics().p("AkwGPIAAsdIJhAAIAAMdg");
	var mask_graphics_113 = new cjs.Graphics().p("AkwGYIAAsvIJhAAIAAMvg");
	var mask_graphics_114 = new cjs.Graphics().p("AkwGhIAAtBIJhAAIAANBg");
	var mask_graphics_115 = new cjs.Graphics().p("AkwGqIAAtTIJhAAIAANTg");
	var mask_graphics_116 = new cjs.Graphics().p("AkwGzIAAtlIJhAAIAANlg");
	var mask_graphics_117 = new cjs.Graphics().p("AkwG8IAAt3IJhAAIAAN3g");
	var mask_graphics_118 = new cjs.Graphics().p("AkwHVIAAupIJhAAIAAOpg");
	var mask_graphics_119 = new cjs.Graphics().p("AkwHvIAAvdIJhAAIAAPdg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(74).to({graphics:mask_graphics_74,x:28.3,y:20}).wait(1).to({graphics:mask_graphics_75,x:28.3,y:33.1}).wait(1).to({graphics:mask_graphics_76,x:28.3,y:32.2}).wait(1).to({graphics:mask_graphics_77,x:28.3,y:31.3}).wait(1).to({graphics:mask_graphics_78,x:28.3,y:30.4}).wait(1).to({graphics:mask_graphics_79,x:28.3,y:29.5}).wait(1).to({graphics:mask_graphics_80,x:28.3,y:28.6}).wait(1).to({graphics:mask_graphics_81,x:28.3,y:27.7}).wait(1).to({graphics:mask_graphics_82,x:28.3,y:26.8}).wait(1).to({graphics:mask_graphics_83,x:28.3,y:25.9}).wait(1).to({graphics:mask_graphics_84,x:28.3,y:25}).wait(1).to({graphics:mask_graphics_85,x:28.3,y:24.1}).wait(1).to({graphics:mask_graphics_86,x:28.3,y:23.2}).wait(1).to({graphics:mask_graphics_87,x:28.3,y:22.4}).wait(1).to({graphics:mask_graphics_88,x:28.3,y:21.5}).wait(1).to({graphics:mask_graphics_89,x:28.3,y:20.6}).wait(1).to({graphics:mask_graphics_90,x:28.3,y:19.7}).wait(1).to({graphics:mask_graphics_91,x:28.3,y:18.8}).wait(1).to({graphics:mask_graphics_92,x:28.3,y:17.9}).wait(1).to({graphics:mask_graphics_93,x:28.3,y:17}).wait(1).to({graphics:mask_graphics_94,x:28.3,y:16.1}).wait(1).to({graphics:mask_graphics_95,x:28.3,y:15.2}).wait(1).to({graphics:mask_graphics_96,x:28.3,y:14.3}).wait(1).to({graphics:mask_graphics_97,x:28.3,y:13.4}).wait(1).to({graphics:mask_graphics_98,x:28.3,y:12.5}).wait(1).to({graphics:mask_graphics_99,x:28.3,y:11.6}).wait(1).to({graphics:mask_graphics_100,x:28.3,y:10.7}).wait(1).to({graphics:mask_graphics_101,x:28.3,y:9.8}).wait(1).to({graphics:mask_graphics_102,x:28.3,y:8.9}).wait(1).to({graphics:mask_graphics_103,x:28.3,y:8}).wait(1).to({graphics:mask_graphics_104,x:28.3,y:7.1}).wait(1).to({graphics:mask_graphics_105,x:28.3,y:6.3}).wait(1).to({graphics:mask_graphics_106,x:28.3,y:5.4}).wait(1).to({graphics:mask_graphics_107,x:28.3,y:4.5}).wait(1).to({graphics:mask_graphics_108,x:28.3,y:3.6}).wait(1).to({graphics:mask_graphics_109,x:28.3,y:2.7}).wait(1).to({graphics:mask_graphics_110,x:28.3,y:1.8}).wait(1).to({graphics:mask_graphics_111,x:28.3,y:0.9}).wait(1).to({graphics:mask_graphics_112,x:28.3,y:0}).wait(1).to({graphics:mask_graphics_113,x:28.3,y:-0.9}).wait(1).to({graphics:mask_graphics_114,x:28.3,y:-1.8}).wait(1).to({graphics:mask_graphics_115,x:28.3,y:-2.7}).wait(1).to({graphics:mask_graphics_116,x:28.3,y:-3.6}).wait(1).to({graphics:mask_graphics_117,x:28.3,y:-4.5}).wait(1).to({graphics:mask_graphics_118,x:28.3,y:-7}).wait(1).to({graphics:mask_graphics_119,x:28.3,y:-9.6}).wait(1));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("Ao5CgQBBJlEukEQEtkFDDliQDElkBQiD");
	this.shape.setTransform(-7.3,6.9);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(74).to({_off:false},0).wait(46));

	// Layer 3 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AoWhdQCWjgEKg1QEIg1DgCWQDcCTA4EAIz/D/QgwkDCTjbg");
	var mask_1_graphics_1 = new cjs.Graphics().p("AoghUQCOjmEHg/QEGg/DmCOQDhCLBBD+Iz0EuQg5kBCKjgg");
	var mask_1_graphics_2 = new cjs.Graphics().p("AophLQCFjrEEhJQEEhIDrCFQDnCCBKD7IzoFeQhDj+CCjmg");
	var mask_1_graphics_3 = new cjs.Graphics().p("AoxhBQB8jwEChSQEAhSDwB8QDsB5BTD5IzaGMQhMj8B5jqg");
	var mask_1_graphics_4 = new cjs.Graphics().p("Ao3g3QBzj0D+hcQD9hcD1BzQDvBxBdD2IzKG6QhWj5Bxjvg");
	var mask_1_graphics_5 = new cjs.Graphics().p("Ao9gsQBqj5D7hlQD5hlD5BqQD0BoBmDyIy5HnQhfj1Bnjzg");
	var mask_1_graphics_6 = new cjs.Graphics().p("ApBghQBhj8D2huQD2hvD8BhQD4BeBvDvIymITQhojxBej3g");
	var mask_1_graphics_7 = new cjs.Graphics().p("ApEgVQBXkADzh3QDyh4D/BXQD7BVB3DrIyRI/QhxjtBVj6g");
	var mask_1_graphics_8 = new cjs.Graphics().p("ApFgJQBNkDDuiAQDuiAEBBNQD+BMCADlIx6JrQh6jpBMj9g");
	var mask_1_graphics_9 = new cjs.Graphics().p("ApGADQBEkFDpiJQDoiJEFBDQEABDCJDgIxjKWQiCjlBCkAg");
	var mask_1_graphics_10 = new cjs.Graphics().p("ApFAQQA6kHDjiSQDkiREHA5QECA5CRDbIxJK/QiLjfA5kDg");
	var mask_1_graphics_11 = new cjs.Graphics().p("ApDAeQAwkJDeibQDeiaEJAwQEEAvCZDWIwuLnQiTjaAvkEg");
	var mask_1_graphics_12 = new cjs.Graphics().p("ApAAsQAmkLDYiiQDYijELAmQEGAlChDQIwSMPQibjUAlkGg");
	var mask_1_graphics_13 = new cjs.Graphics().p("Ao7A6QAckMDSiqQDRirEMAcQEHAcCpDJIv0M2QiijPAbkHg");
	var mask_1_graphics_14 = new cjs.Graphics().p("Ao1BJQASkNDLiyQDLiyENASQEIARCwDDIvUNbQirjIASkIg");
	var mask_1_graphics_15 = new cjs.Graphics().p("AouBYQAIkNDEi6QDFi5ENAHQEIAIC4C8Iu0N/QiyjCAIkIg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AomBnQgCkNC9jBQC+jAENgDQEJgCC+C2IuSOhQi4i7gDkJg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AocB3QgMkNC2jIQC2jHENgNQEIgMDFCvItuPCQjAi0gMkIg");
	var mask_1_graphics_18 = new cjs.Graphics().p("AoRCHQgWkMCujOQCvjPEMgWQEHgWDMCnItKPjQjGitgWkIg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AoFCYQggkLCmjVQCnjVELggQEHggDRCfIsjQCQjNimggkGg");
	var mask_1_graphics_20 = new cjs.Graphics().p("An4CpQgqkKCfjbQCejbEKgqQEFgqDYCXIr9QfQjTidgqkFg");
	var mask_1_graphics_21 = new cjs.Graphics().p("AnpC6Qg0kJCWjgQCWjhEIg0QEEgzDdCPIrVQ7QjZiWgzkDg");
	var mask_1_graphics_22 = new cjs.Graphics().p("AnZDLQg/kGCOjmQCOjmEGg+QECg9DhCGIqrRVQjeiNg9kBg");
	var mask_1_graphics_23 = new cjs.Graphics().p("AnNDcQhIkDCFjrQCGjsEEhIQD+hGDnB+IqCRuQjjiFhHj/g");
	var mask_1_graphics_24 = new cjs.Graphics().p("AnGDtQhRkAB8jwQB9jwEBhSQD7hQDrB2IpXSFQjnh8hRj9g");
	var mask_1_graphics_25 = new cjs.Graphics().p("Am9D/Qhcj+B0j0QBzj0D+hbQD4haDwBtIosSbQjsh0hZj5g");
	var mask_1_graphics_26 = new cjs.Graphics().p("Am0ERQhlj7Bqj4QBqj4D7hlQD0hiD0BjIn/SvQjxhrhij1g");
	var mask_1_graphics_27 = new cjs.Graphics().p("AmrEiQhuj3Bhj7QBhj8D2huQDxhsD3BbInSTBQj0hihsjyg");
	var mask_1_graphics_28 = new cjs.Graphics().p("AmgE0Qh3jzBXj+QBXkADzh3QDsh1D6BRImkTSQj3hZh1jtg");
	var mask_1_graphics_29 = new cjs.Graphics().p("AmVFGQiAjuBOkCQBNkDDuiAQDoh9D9BHIl2ThQj6hQh+jog");
	var mask_1_graphics_30 = new cjs.Graphics().p("AmJFXQiJjpBEkEQBEkGDpiIQDjiHD/A/IlHTtQj9hGiGjkg");
	var mask_1_graphics_31 = new cjs.Graphics().p("Al+FmQiQjkA7kHQA8kHDkiQQDeiOECA2IkfT4Qj/g+iNjgg");
	var mask_1_graphics_32 = new cjs.Graphics().p("AlzF2QiXjgAzkIQAzkKDfiXQDaiVEDAuIj2UAQkAg2iVjag");
	var mask_1_graphics_33 = new cjs.Graphics().p("AlmGFQifjbAqkKQArkLDaieQDWicEDAmIjMUHQkCgtibjWg");
	var mask_1_graphics_34 = new cjs.Graphics().p("AlaGUQiljWAhkLQAikMDVilQDRijEFAdIijUNQkDglijjQg");
	var mask_1_graphics_35 = new cjs.Graphics().p("AlMGjQitjQAZkMQAZkNDQisQDMipEFAUIh5URQkEgcipjLg");
	var mask_1_graphics_36 = new cjs.Graphics().p("Ak/GyQizjLARkMQAQkODKizQDGivEGAMIhPUUQkFgUiwjFg");
	var mask_1_graphics_37 = new cjs.Graphics().p("AkwHAQi6jEAIkNQAIkODEi5QDAi2EGAEIglUWQkGgMi1jAg");
	var mask_1_graphics_38 = new cjs.Graphics().p("AkhHPQjAi+gBkOQgBkNC+jAQC6i8EGgFIAFUXQkGgDi7i6g");
	var mask_1_graphics_39 = new cjs.Graphics().p("AkSHdQjGi4gKkOQgJkNC3jFQC0jCEGgNIAvUVIgQAAQj7AAi8iug");
	var mask_1_graphics_40 = new cjs.Graphics().p("AkCHqQjMixgSkOQgTkMCxjLQCujIEFgWIBaUUIgoABQjtAAi4ihg");
	var mask_1_graphics_41 = new cjs.Graphics().p("AjyH3QjRirgbkNQgbkLCqjRQCnjNEEgfICEUQQgfADgfAAQjfAAi1iTg");
	var mask_1_graphics_42 = new cjs.Graphics().p("AjhICQjWikgkkLQgkkLCjjWQChjTEDgmICtUKQgqAFgpAAQjTAAiwiGg");
	var mask_1_graphics_43 = new cjs.Graphics().p("AjQINQjbidgtkKQgskKCcjbQCajYEBgvIDXUFQg1AIgzAAQjHAAirh6g");
	var mask_1_graphics_44 = new cjs.Graphics().p("Ai+IWQjhiVg1kJQg1kICWjgQCSjcEAg4IEAT9QhAAMg9AAQi6AAimhvg");
	var mask_1_graphics_45 = new cjs.Graphics().p("AisIfQjmiOg9kHQg+kGCOjlQCMjhD+g/IEpTzQhKAQhHAAQivAAighjg");
	var mask_1_graphics_46 = new cjs.Graphics().p("AiaInQjqiHhGkEQhGkECHjqQCEjlD9hIIFRTpQhUAWhRAAQikAAiahZg");
	var mask_1_graphics_47 = new cjs.Graphics().p("AiHIuQjuh/hPkCQhOkCB/jtQB9jqD6hQIF5TeQhdAbhaAAQibAAiShPg");
	var mask_1_graphics_48 = new cjs.Graphics().p("Ah1I0Qjxh3hXkAQhXj+B4jyQB1jtD3hYIGhTQQhmAhhkAAQiQAAiMhFg");
	var mask_1_graphics_49 = new cjs.Graphics().p("AhhI5Qj2hvhfj9Qhfj7Bwj2QBtjxD1hgIHJTDQhvAohuAAQiHAAiDg9g");
	var mask_1_graphics_50 = new cjs.Graphics().p("AhII/Qj6hmhqj4Qhpj4Blj6QBkj1DwhpIH7SuQh6Axh6AAQh6AAh5gxg");
	var mask_1_graphics_51 = new cjs.Graphics().p("AgvJDQj+hbh0j0Qhzj0Bbj9QBZj5Dsh0IIsSZQiEA8iHAAQhtAAhvgog");
	var mask_1_graphics_52 = new cjs.Graphics().p("AgWJFQkBhQh+jvQh9jvBQkBQBPj8Dnh+IJcSBQiNBIiUAAQhhAAhkggg");
	var mask_1_graphics_53 = new cjs.Graphics().p("AAAJGQkEhGiHjqQiHjpBGkEQBFj/DhiHIKLRnQiWBUihAAQhVAAhZgYg");
	var mask_1_graphics_54 = new cjs.Graphics().p("AAOJGQkGg8iQjkQiRjkA7kGQA6kCDciQIK4RMQieBhiuAAQhKAAhMgRg");
	var mask_1_graphics_55 = new cjs.Graphics().p("AAdJEQkIgxiajeQiajeAwkIQAvkEDWiZILlQuQilBvi9AAQg9AAg/gLg");
	var mask_1_graphics_56 = new cjs.Graphics().p("AAsJAQkKglijjYQiijXAlkKQAkkGDPiiIMRQPQisB+jMAAQgwAAgygHg");
	var mask_1_graphics_57 = new cjs.Graphics().p("AA8I7QkLgbisjQQirjRAakLQAZkHDJiqIM7PtQiyCOjdAAQgiAAgkgDg");
	var mask_1_graphics_58 = new cjs.Graphics().p("ABNI0QkNgPi0jKQi0jJAPkMQAPkIDBiyINkPKQi3CfjvAAIgogBg");
	var mask_1_graphics_59 = new cjs.Graphics().p("ABdIsQkNgEi8jCQi8jCAEkNQAEkIC6i6IOLOmQi7CxkCAAIgLAAg");
	var mask_1_graphics_60 = new cjs.Graphics().p("AliFvQjEi6gHkMQgHkJCyjBIOwOAQi3C8kIAHIgUAAQkAAAi9izg");
	var mask_1_graphics_61 = new cjs.Graphics().p("AlYF3QjLiygSkMQgSkICqjIIPVNYQiwDEkIASQgZABgYAAQjuAAi5ihg");
	var mask_1_graphics_62 = new cjs.Graphics().p("AlMF+QjSipgdkMQgdkHChjPIP4MvQioDLkHAdQgnAEgmAAQjdAAi0iQg");
	var mask_1_graphics_63 = new cjs.Graphics().p("Ak/GDQjZiggokKQgokGCZjVIQYMFQifDRkFAnQg2AIgzAAQjNAAiuiAg");
	var mask_1_graphics_64 = new cjs.Graphics().p("AkxGHQjfiXgzkIQgzkECQjcIQ3LaQiWDXkEAzQhCANhBAAQi9AAiohyg");
	var mask_1_graphics_65 = new cjs.Graphics().p("AkhGKQjmiNg+kGQg9kCCHjhIRUKsQiNDekCA9QhPAShNAAQivAAighjg");
	var mask_1_graphics_66 = new cjs.Graphics().p("AkRGMQjsiEhIkEQhIj+B+jnIRvJ+QiEDkj/BHQhcAahZAAQihAAiYhWg");
	var mask_1_graphics_67 = new cjs.Graphics().p("AkAGNQjxh7hTkAQhSj7B0jsISJJPQh7Doj7BSQhoAihmAAQiUAAiPhJg");
	var mask_1_graphics_68 = new cjs.Graphics().p("AjuGMQj1hwhej9Qhcj3BqjxISgIfQhxDtj4BcQhzArhyAAQiHAAiGg+g");
	var mask_1_graphics_69 = new cjs.Graphics().p("AjbGLQj6hnhoj5QhmjzBgj1IS2HuQhoDyjzBmQh+A1h+AAQh7AAh8gzg");
	var mask_1_graphics_70 = new cjs.Graphics().p("AjHGIQj+hchyj1QhwjuBWj5ITJG8QhdD1jwBxQiIA/iKAAQhuAAhygpg");
	var mask_1_graphics_71 = new cjs.Graphics().p("AiyGHQkChRh8jwQh6jqBMj8ITaGKQhTD4jqB6QiRBLiYAAQhiAAhmggg");
	var mask_1_graphics_72 = new cjs.Graphics().p("AicGPQkFhHiGjrQiEjlBBj+ITqFWQhID8jmCDQiZBYilAAQhWAAhagYg");
	var mask_1_graphics_73 = new cjs.Graphics().p("AiGGVQkHg8iQjlQiNjfA3kBIT3EiQg/D+jgCNQihBmiyAAQhKAAhOgSg");
	var mask_1_graphics_74 = new cjs.Graphics().p("AhvGaQkKgyiZjeQiWjZAtkEIUBDuQgzEBjaCWQipB0jBAAQg9AAhBgMg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:-33.9,y:-5.7}).wait(1).to({graphics:mask_1_graphics_1,x:-34.2,y:-4.5}).wait(1).to({graphics:mask_1_graphics_2,x:-34.5,y:-3.3}).wait(1).to({graphics:mask_1_graphics_3,x:-34.8,y:-2.1}).wait(1).to({graphics:mask_1_graphics_4,x:-35.2,y:-0.9}).wait(1).to({graphics:mask_1_graphics_5,x:-35.6,y:0.3}).wait(1).to({graphics:mask_1_graphics_6,x:-36.1,y:1.4}).wait(1).to({graphics:mask_1_graphics_7,x:-36.5,y:2.5}).wait(1).to({graphics:mask_1_graphics_8,x:-37.1,y:3.7}).wait(1).to({graphics:mask_1_graphics_9,x:-37.6,y:4.8}).wait(1).to({graphics:mask_1_graphics_10,x:-38.2,y:5.8}).wait(1).to({graphics:mask_1_graphics_11,x:-38.8,y:6.9}).wait(1).to({graphics:mask_1_graphics_12,x:-39.5,y:7.9}).wait(1).to({graphics:mask_1_graphics_13,x:-40.2,y:8.9}).wait(1).to({graphics:mask_1_graphics_14,x:-40.9,y:9.9}).wait(1).to({graphics:mask_1_graphics_15,x:-41.7,y:10.8}).wait(1).to({graphics:mask_1_graphics_16,x:-42.5,y:11.7}).wait(1).to({graphics:mask_1_graphics_17,x:-43.4,y:12.5}).wait(1).to({graphics:mask_1_graphics_18,x:-44.3,y:13.3}).wait(1).to({graphics:mask_1_graphics_19,x:-45.2,y:14.1}).wait(1).to({graphics:mask_1_graphics_20,x:-46.1,y:14.8}).wait(1).to({graphics:mask_1_graphics_21,x:-47.1,y:15.5}).wait(1).to({graphics:mask_1_graphics_22,x:-48.1,y:16.2}).wait(1).to({graphics:mask_1_graphics_23,x:-48.7,y:16.8}).wait(1).to({graphics:mask_1_graphics_24,x:-48.7,y:17.4}).wait(1).to({graphics:mask_1_graphics_25,x:-48.7,y:17.9}).wait(1).to({graphics:mask_1_graphics_26,x:-48.6,y:18.4}).wait(1).to({graphics:mask_1_graphics_27,x:-48.6,y:18.9}).wait(1).to({graphics:mask_1_graphics_28,x:-48.6,y:19.3}).wait(1).to({graphics:mask_1_graphics_29,x:-48.6,y:19.7}).wait(1).to({graphics:mask_1_graphics_30,x:-48.6,y:19.9}).wait(1).to({graphics:mask_1_graphics_31,x:-48.5,y:20.1}).wait(1).to({graphics:mask_1_graphics_32,x:-48.5,y:20.4}).wait(1).to({graphics:mask_1_graphics_33,x:-48.5,y:20.6}).wait(1).to({graphics:mask_1_graphics_34,x:-48.4,y:20.7}).wait(1).to({graphics:mask_1_graphics_35,x:-48.4,y:20.8}).wait(1).to({graphics:mask_1_graphics_36,x:-48.4,y:20.9}).wait(1).to({graphics:mask_1_graphics_37,x:-48.3,y:21}).wait(1).to({graphics:mask_1_graphics_38,x:-48.3,y:21}).wait(1).to({graphics:mask_1_graphics_39,x:-48.3,y:21}).wait(1).to({graphics:mask_1_graphics_40,x:-48.3,y:21}).wait(1).to({graphics:mask_1_graphics_41,x:-48.3,y:21.1}).wait(1).to({graphics:mask_1_graphics_42,x:-48.3,y:21.3}).wait(1).to({graphics:mask_1_graphics_43,x:-48.3,y:21.4}).wait(1).to({graphics:mask_1_graphics_44,x:-48.3,y:21.6}).wait(1).to({graphics:mask_1_graphics_45,x:-48.3,y:21.8}).wait(1).to({graphics:mask_1_graphics_46,x:-48.3,y:22.1}).wait(1).to({graphics:mask_1_graphics_47,x:-48.3,y:22.4}).wait(1).to({graphics:mask_1_graphics_48,x:-48.3,y:22.7}).wait(1).to({graphics:mask_1_graphics_49,x:-48.2,y:23}).wait(1).to({graphics:mask_1_graphics_50,x:-48.2,y:23.4}).wait(1).to({graphics:mask_1_graphics_51,x:-48.2,y:23.9}).wait(1).to({graphics:mask_1_graphics_52,x:-48.2,y:24.5}).wait(1).to({graphics:mask_1_graphics_53,x:-47.9,y:25.1}).wait(1).to({graphics:mask_1_graphics_54,x:-46.7,y:25.7}).wait(1).to({graphics:mask_1_graphics_55,x:-45.5,y:26.4}).wait(1).to({graphics:mask_1_graphics_56,x:-44.4,y:27.1}).wait(1).to({graphics:mask_1_graphics_57,x:-43.3,y:27.9}).wait(1).to({graphics:mask_1_graphics_58,x:-42.3,y:28.7}).wait(1).to({graphics:mask_1_graphics_59,x:-41.3,y:29.6}).wait(1).to({graphics:mask_1_graphics_60,x:-40.3,y:30.5}).wait(1).to({graphics:mask_1_graphics_61,x:-39.4,y:31.4}).wait(1).to({graphics:mask_1_graphics_62,x:-38.5,y:32.4}).wait(1).to({graphics:mask_1_graphics_63,x:-37.7,y:33.5}).wait(1).to({graphics:mask_1_graphics_64,x:-36.9,y:34.5}).wait(1).to({graphics:mask_1_graphics_65,x:-36.2,y:35.6}).wait(1).to({graphics:mask_1_graphics_66,x:-35.5,y:36.7}).wait(1).to({graphics:mask_1_graphics_67,x:-34.9,y:37.9}).wait(1).to({graphics:mask_1_graphics_68,x:-34.3,y:39.1}).wait(1).to({graphics:mask_1_graphics_69,x:-33.8,y:40.2}).wait(1).to({graphics:mask_1_graphics_70,x:-33.3,y:41.4}).wait(1).to({graphics:mask_1_graphics_71,x:-32.8,y:42.3}).wait(1).to({graphics:mask_1_graphics_72,x:-32.4,y:42.3}).wait(1).to({graphics:mask_1_graphics_73,x:-32.1,y:42.3}).wait(1).to({graphics:mask_1_graphics_74,x:-31.7,y:42.2}).wait(46));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AifjWQA7IzEEiv");
	this.shape_1.setTransform(-48.3,44.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("Alwi4QBAJkEvkEQDTi2Cfjm");
	this.shape_2.setTransform(-27.4,41.4);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},28).wait(92));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.5,19.1,45.8,14.5);


(lib.ar5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AAAgUIAAAp");
	this.shape.setTransform(0,-59);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AAAAYIAAgw");
	this.shape_1.setTransform(0,-58.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AAAAcIAAg3");
	this.shape_2.setTransform(0,-58.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("AAAAgIAAg/");
	this.shape_3.setTransform(0,-57.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("AAAAjIAAhF");
	this.shape_4.setTransform(0,-57.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(5,1,1).p("AAAAnIAAhN");
	this.shape_5.setTransform(0,-57.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(5,1,1).p("AAAArIAAhV");
	this.shape_6.setTransform(0,-56.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(5,1,1).p("AAAAuIAAhb");
	this.shape_7.setTransform(0,-56.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(5,1,1).p("AAAAyIAAhj");
	this.shape_8.setTransform(0,-56.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(5,1,1).p("AAAA2IAAhq");
	this.shape_9.setTransform(0,-55.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(5,1,1).p("AAAA5IAAhx");
	this.shape_10.setTransform(0,-55.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5,1,1).p("AAAA9IAAh5");
	this.shape_11.setTransform(0,-55);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(5,1,1).p("AAABAIAAiA");
	this.shape_12.setTransform(0,-54.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(5,1,1).p("AAABEIAAiH");
	this.shape_13.setTransform(0,-54.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(5,1,1).p("AAABIIAAiP");
	this.shape_14.setTransform(0,-53.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(5,1,1).p("AAABLIAAiV");
	this.shape_15.setTransform(0,-53.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(5,1,1).p("AAABPIAAid");
	this.shape_16.setTransform(0,-53.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(5,1,1).p("AAABTIAAil");
	this.shape_17.setTransform(0,-52.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(5,1,1).p("AAABWIAAir");
	this.shape_18.setTransform(0,-52.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(5,1,1).p("AAABaIAAiz");
	this.shape_19.setTransform(0,-52.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(5,1,1).p("AAABeIAAi6");
	this.shape_20.setTransform(0,-51.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(5,1,1).p("AAABhIAAjB");
	this.shape_21.setTransform(0,-51.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(5,1,1).p("AAABlIAAjJ");
	this.shape_22.setTransform(0,-51);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(5,1,1).p("AAABoIAAjP");
	this.shape_23.setTransform(0,-50.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(5,1,1).p("AAABsIAAjX");
	this.shape_24.setTransform(0,-50.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(5,1,1).p("AAABwIAAjf");
	this.shape_25.setTransform(0,-49.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(5,1,1).p("AAABzIAAjl");
	this.shape_26.setTransform(0,-49.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(5,1,1).p("AAAB3IAAjt");
	this.shape_27.setTransform(0,-49.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(5,1,1).p("AAAB7IAAj1");
	this.shape_28.setTransform(0,-48.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(5,1,1).p("AAAB+IAAj7");
	this.shape_29.setTransform(0,-48.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(5,1,1).p("AAACCIAAkD");
	this.shape_30.setTransform(0,-48.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(5,1,1).p("AAACGIAAkK");
	this.shape_31.setTransform(0,-47.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(5,1,1).p("AAACJIAAkR");
	this.shape_32.setTransform(0,-47.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(5,1,1).p("AAACNIAAkZ");
	this.shape_33.setTransform(0,-47);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(5,1,1).p("AAACQIAAkf");
	this.shape_34.setTransform(0,-46.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(5,1,1).p("AAACUIAAkn");
	this.shape_35.setTransform(0,-46.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(5,1,1).p("AAACYIAAkv");
	this.shape_36.setTransform(0,-45.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(5,1,1).p("AAACbIAAk1");
	this.shape_37.setTransform(0,-45.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(5,1,1).p("AAACfIAAk9");
	this.shape_38.setTransform(0,-45.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(5,1,1).p("AAACiIAAlE");
	this.shape_39.setTransform(0,-44.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(5,1,1).p("AAACmIAAlL");
	this.shape_40.setTransform(0,-44.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(5,1,1).p("AAACqIAAlT");
	this.shape_41.setTransform(0,-44.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(5,1,1).p("AAACuIAAla");
	this.shape_42.setTransform(0,-43.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(5,1,1).p("AAACxIAAlh");
	this.shape_43.setTransform(0,-43.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(5,1,1).p("AAAC1IAAlp");
	this.shape_44.setTransform(0,-43);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(5,1,1).p("AAAC4IAAlv");
	this.shape_45.setTransform(0,-42.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(5,1,1).p("AAAC8IAAl3");
	this.shape_46.setTransform(0,-42.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(5,1,1).p("AAADAIAAl/");
	this.shape_47.setTransform(0,-41.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(5,1,1).p("AAADDIAAmF");
	this.shape_48.setTransform(0,-41.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(5,1,1).p("AAADHIAAmN");
	this.shape_49.setTransform(0,-41.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(5,1,1).p("AAADKIAAmU");
	this.shape_50.setTransform(0,-40.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(5,1,1).p("AAADOIAAmb");
	this.shape_51.setTransform(0,-40.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(5,1,1).p("AAADSIAAmj");
	this.shape_52.setTransform(0,-40.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(5,1,1).p("AAADWIAAmq");
	this.shape_53.setTransform(0,-39.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(5,1,1).p("AAADZIAAmx");
	this.shape_54.setTransform(0,-39.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(5,1,1).p("AAADdIAAm5");
	this.shape_55.setTransform(0,-39);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(5,1,1).p("AAADgIAAm/");
	this.shape_56.setTransform(0,-38.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(5,1,1).p("AAADkIAAnH");
	this.shape_57.setTransform(0,-38.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(5,1,1).p("AAADoIAAnP");
	this.shape_58.setTransform(0,-37.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(5,1,1).p("AAAjqIAAHV");
	this.shape_59.setTransform(0,-37.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).wait(1));

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0.3,-60.8,1,1,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-16.8},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.1,-63.6,22.3,13.8);


(lib.ar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-1.8,-0.9,1,1,-123.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-135,x:33.2,y:-27},44).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AhWgxIA+gvIBvCSIg+Avg");
	var mask_graphics_1 = new cjs.Graphics().p("AhaguIBFg1IBwCSIhFA1g");
	var mask_graphics_2 = new cjs.Graphics().p("AhdgsIBMg6IBvCTIhMA6g");
	var mask_graphics_3 = new cjs.Graphics().p("AhhgpIBTg/IBwCSIhTA/g");
	var mask_graphics_4 = new cjs.Graphics().p("AhkgnIBahEIBvCTIhaBEg");
	var mask_graphics_5 = new cjs.Graphics().p("AhogkIBhhKIBvCTIhgBKg");
	var mask_graphics_6 = new cjs.Graphics().p("AhrgiIBohOIBvCSIhoBPg");
	var mask_graphics_7 = new cjs.Graphics().p("AhugfIBuhUIBwCTIhwBUg");
	var mask_graphics_8 = new cjs.Graphics().p("AhygcIB1haIBwCTIh1BZg");
	var mask_graphics_9 = new cjs.Graphics().p("Ah2gZIB9hfIBvCSIh8Bfg");
	var mask_graphics_10 = new cjs.Graphics().p("Ah5gXICDhkIBwCTIiDBkg");
	var mask_graphics_11 = new cjs.Graphics().p("Ah8gUICJhpIBxCSIiLBpg");
	var mask_graphics_12 = new cjs.Graphics().p("AiAgRICRhvIBwCSIiRBvg");
	var mask_graphics_13 = new cjs.Graphics().p("AiDgPICYh0IBvCTIiYB0g");
	var mask_graphics_14 = new cjs.Graphics().p("AiHgMICfh5IBwCSIifB6g");
	var mask_graphics_15 = new cjs.Graphics().p("AiLgKICnh+IBvCTIilB+g");
	var mask_graphics_16 = new cjs.Graphics().p("AiOgHICtiEIBwCTIitCEg");
	var mask_graphics_17 = new cjs.Graphics().p("AiRgEIC0iJIBvCSIi0CJg");
	var mask_graphics_18 = new cjs.Graphics().p("AiVgBIC7iPIBwCSIi7CPg");
	var mask_graphics_19 = new cjs.Graphics().p("AiZAAIDDiSIBvCSIjBCUg");
	var mask_graphics_20 = new cjs.Graphics().p("AicADIDJiYIBwCTIjJCYg");
	var mask_graphics_21 = new cjs.Graphics().p("AigAGIDRieIBvCUIjPCdg");
	var mask_graphics_22 = new cjs.Graphics().p("AijAIIDXijIBwCUIjXCjg");
	var mask_graphics_23 = new cjs.Graphics().p("AinALIDfioIBvCTIjeCog");
	var mask_graphics_24 = new cjs.Graphics().p("AiqANIDlitIBwCTIjlCug");
	var mask_graphics_25 = new cjs.Graphics().p("AiuAQIDsizIBxCUIjsCzg");
	var mask_graphics_26 = new cjs.Graphics().p("AixATIDzi4IBwCUIjzC3g");
	var mask_graphics_27 = new cjs.Graphics().p("Ai0AVID6i9IBvCUIj6C9g");
	var mask_graphics_28 = new cjs.Graphics().p("Ai4AYIEBjDIBwCUIkBDDg");
	var mask_graphics_29 = new cjs.Graphics().p("Ai7AbIEHjIIBxCTIkJDIg");
	var mask_graphics_30 = new cjs.Graphics().p("Ai/AdIEPjNIBwCUIkPDNg");
	var mask_graphics_31 = new cjs.Graphics().p("AjCAgIEWjTIBvCUIkWDSg");
	var mask_graphics_32 = new cjs.Graphics().p("AjGAjIEdjYIBwCTIkdDYg");
	var mask_graphics_33 = new cjs.Graphics().p("AjJAlIEjjdIBxCUIklDdg");
	var mask_graphics_34 = new cjs.Graphics().p("AjNAoIErjjIBwCUIkrDig");
	var mask_graphics_35 = new cjs.Graphics().p("AjRArIEyjoIBxCTIkyDog");
	var mask_graphics_36 = new cjs.Graphics().p("AjUAtIE5jtIBwCUIk5Dtg");
	var mask_graphics_37 = new cjs.Graphics().p("AjYAwIFAjzIBxCUIlADyg");
	var mask_graphics_38 = new cjs.Graphics().p("AjbAzIFHj4IBwCTIlHD4g");
	var mask_graphics_39 = new cjs.Graphics().p("AjfA1IFOj9IBxCUIlOD9g");
	var mask_graphics_40 = new cjs.Graphics().p("AjiA4IFVkCIBwCTIlVEDg");
	var mask_graphics_41 = new cjs.Graphics().p("AjmA6IFckHIBwCTIlbEIg");
	var mask_graphics_42 = new cjs.Graphics().p("AjpA9IFjkNIBwCUIljENg");
	var mask_graphics_43 = new cjs.Graphics().p("AjsBAIFpkSIBxCTIlrESg");
	var mask_graphics_44 = new cjs.Graphics().p("AjwBCIFxkXIBwCUIlxEXg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-1.3,y:0.6}).wait(1).to({graphics:mask_graphics_1,x:-0.9,y:0.3}).wait(1).to({graphics:mask_graphics_2,x:-0.4,y:0}).wait(1).to({graphics:mask_graphics_3,x:0,y:-0.3}).wait(1).to({graphics:mask_graphics_4,x:0.4,y:-0.5}).wait(1).to({graphics:mask_graphics_5,x:0.8,y:-0.8}).wait(1).to({graphics:mask_graphics_6,x:1.2,y:-1.1}).wait(1).to({graphics:mask_graphics_7,x:1.6,y:-1.4}).wait(1).to({graphics:mask_graphics_8,x:2,y:-1.6}).wait(1).to({graphics:mask_graphics_9,x:2.4,y:-1.9}).wait(1).to({graphics:mask_graphics_10,x:2.9,y:-2.2}).wait(1).to({graphics:mask_graphics_11,x:3.3,y:-2.5}).wait(1).to({graphics:mask_graphics_12,x:3.7,y:-2.7}).wait(1).to({graphics:mask_graphics_13,x:4.1,y:-3}).wait(1).to({graphics:mask_graphics_14,x:4.5,y:-3.3}).wait(1).to({graphics:mask_graphics_15,x:4.9,y:-3.6}).wait(1).to({graphics:mask_graphics_16,x:5.3,y:-3.9}).wait(1).to({graphics:mask_graphics_17,x:5.7,y:-4.1}).wait(1).to({graphics:mask_graphics_18,x:6.1,y:-4.4}).wait(1).to({graphics:mask_graphics_19,x:6.6,y:-4.7}).wait(1).to({graphics:mask_graphics_20,x:7,y:-5}).wait(1).to({graphics:mask_graphics_21,x:7.4,y:-5.2}).wait(1).to({graphics:mask_graphics_22,x:7.8,y:-5.5}).wait(1).to({graphics:mask_graphics_23,x:8.2,y:-5.8}).wait(1).to({graphics:mask_graphics_24,x:8.6,y:-6.1}).wait(1).to({graphics:mask_graphics_25,x:9,y:-6.4}).wait(1).to({graphics:mask_graphics_26,x:9.5,y:-6.6}).wait(1).to({graphics:mask_graphics_27,x:9.9,y:-6.9}).wait(1).to({graphics:mask_graphics_28,x:10.3,y:-7.2}).wait(1).to({graphics:mask_graphics_29,x:10.7,y:-7.5}).wait(1).to({graphics:mask_graphics_30,x:11.1,y:-7.8}).wait(1).to({graphics:mask_graphics_31,x:11.5,y:-8}).wait(1).to({graphics:mask_graphics_32,x:11.9,y:-8.3}).wait(1).to({graphics:mask_graphics_33,x:12.3,y:-8.6}).wait(1).to({graphics:mask_graphics_34,x:12.7,y:-8.8}).wait(1).to({graphics:mask_graphics_35,x:13.2,y:-9.1}).wait(1).to({graphics:mask_graphics_36,x:13.6,y:-9.4}).wait(1).to({graphics:mask_graphics_37,x:14,y:-9.7}).wait(1).to({graphics:mask_graphics_38,x:14.4,y:-10}).wait(1).to({graphics:mask_graphics_39,x:14.8,y:-10.3}).wait(1).to({graphics:mask_graphics_40,x:15.2,y:-10.5}).wait(1).to({graphics:mask_graphics_41,x:15.6,y:-10.8}).wait(1).to({graphics:mask_graphics_42,x:16,y:-11.1}).wait(1).to({graphics:mask_graphics_43,x:16.5,y:-11.4}).wait(1).to({graphics:mask_graphics_44,x:16.9,y:-11.7}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AiGCeQBaimCziW");
	this.shape.setTransform(16.4,-14.6,1,1,-167.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.2,-9.1,17.6,18.9);


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
(lib.WS_Cursive_t = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_533 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(533).call(this.frame_533).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(170.6,308.8,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[170.7,308.8,196.5,284.4,220.3,245.5,244.2,206.2,262.7,162.2]}},135).wait(15).to({startPosition:0},0).to({guide:{path:[262.7,162.2,234.9,218.5,224.1,237.9,213.2,257.3,202.9,283.3,192.7,309.3,182.4,334.1,172,358.9,177.1,373.3,182.2,387.7,199,388.7,219.4,391.3,242.1,382.2,263,373.6,281.6,360.5,299.9,347.6,317,333.2,334,318.8,345.8,307.6,357.7,296.3,383.6,270.3]}},226).wait(15).to({x:175.4,y:236.6},0).to({x:275.4},59).wait(15).to({startPosition:0},0).to({guide:{path:[275.6,236.5,301,170.4,368.6,200.5,423.1,224.8,478.2,247.4,537.3,271.8,591,237.5,615,222.3,631.2,201.1]}},59).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(263,161.1,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},135).wait(15).to({_off:false,x:383,y:271.1},0).to({_off:true},226).wait(15).to({_off:false,x:277,y:236.1},0).to({_off:true},59).wait(75));

	// Layer 13
	this.instance_1 = new lib.ar5("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(250.7,155.5,1,1,-90,0,0,0,-1.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(400).to({_off:false},0).wait(134));

	// Layer 10 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_400 = new cjs.Graphics().p("AKjTcIAAjzIDKAAIAADzg");
	var mask_graphics_401 = new cjs.Graphics().p("AhtB5IAAjxIDbAAIAADxg");
	var mask_graphics_402 = new cjs.Graphics().p("Ah1B5IAAjxIDrAAIAADxg");
	var mask_graphics_403 = new cjs.Graphics().p("Ah+B5IAAjxID9AAIAADxg");
	var mask_graphics_404 = new cjs.Graphics().p("AiHB5IAAjxIEPAAIAADxg");
	var mask_graphics_405 = new cjs.Graphics().p("AiPB5IAAjxIEfAAIAADxg");
	var mask_graphics_406 = new cjs.Graphics().p("AiYB5IAAjxIExAAIAADxg");
	var mask_graphics_407 = new cjs.Graphics().p("AigB5IAAjxIFBAAIAADxg");
	var mask_graphics_408 = new cjs.Graphics().p("AipB5IAAjxIFTAAIAADxg");
	var mask_graphics_409 = new cjs.Graphics().p("AiyB5IAAjxIFlAAIAADxg");
	var mask_graphics_410 = new cjs.Graphics().p("Ai6B5IAAjxIF1AAIAADxg");
	var mask_graphics_411 = new cjs.Graphics().p("AjDB5IAAjxIGHAAIAADxg");
	var mask_graphics_412 = new cjs.Graphics().p("AjMB5IAAjxIGZAAIAADxg");
	var mask_graphics_413 = new cjs.Graphics().p("AjUB5IAAjxIGpAAIAADxg");
	var mask_graphics_414 = new cjs.Graphics().p("AjdB5IAAjxIG7AAIAADxg");
	var mask_graphics_415 = new cjs.Graphics().p("AjmB5IAAjxIHNAAIAADxg");
	var mask_graphics_416 = new cjs.Graphics().p("AjuB5IAAjxIHdAAIAADxg");
	var mask_graphics_417 = new cjs.Graphics().p("Aj3B5IAAjxIHvAAIAADxg");
	var mask_graphics_418 = new cjs.Graphics().p("Aj/B5IAAjxIH/AAIAADxg");
	var mask_graphics_419 = new cjs.Graphics().p("AkIB5IAAjxIIRAAIAADxg");
	var mask_graphics_420 = new cjs.Graphics().p("AkRB5IAAjxIIjAAIAADxg");
	var mask_graphics_421 = new cjs.Graphics().p("AkZB5IAAjxIIzAAIAADxg");
	var mask_graphics_422 = new cjs.Graphics().p("AkiB5IAAjxIJFAAIAADxg");
	var mask_graphics_423 = new cjs.Graphics().p("AkrB5IAAjxIJXAAIAADxg");
	var mask_graphics_424 = new cjs.Graphics().p("AkzB5IAAjxIJnAAIAADxg");
	var mask_graphics_425 = new cjs.Graphics().p("Ak8B5IAAjxIJ5AAIAADxg");
	var mask_graphics_426 = new cjs.Graphics().p("AlFB5IAAjxIKKAAIAADxg");
	var mask_graphics_427 = new cjs.Graphics().p("AlNB5IAAjxIKbAAIAADxg");
	var mask_graphics_428 = new cjs.Graphics().p("AlWB5IAAjxIKtAAIAADxg");
	var mask_graphics_429 = new cjs.Graphics().p("AleB5IAAjxIK9AAIAADxg");
	var mask_graphics_430 = new cjs.Graphics().p("AlnB5IAAjxILPAAIAADxg");
	var mask_graphics_431 = new cjs.Graphics().p("AlwB5IAAjxILhAAIAADxg");
	var mask_graphics_432 = new cjs.Graphics().p("Al4B5IAAjxILxAAIAADxg");
	var mask_graphics_433 = new cjs.Graphics().p("AmBB5IAAjxIMDAAIAADxg");
	var mask_graphics_434 = new cjs.Graphics().p("AmJB5IAAjxIMTAAIAADxg");
	var mask_graphics_435 = new cjs.Graphics().p("AmSB5IAAjxIMlAAIAADxg");
	var mask_graphics_436 = new cjs.Graphics().p("AmbB5IAAjxIM3AAIAADxg");
	var mask_graphics_437 = new cjs.Graphics().p("AmjB5IAAjxINHAAIAADxg");
	var mask_graphics_438 = new cjs.Graphics().p("AmsB5IAAjxINZAAIAADxg");
	var mask_graphics_439 = new cjs.Graphics().p("Am1B5IAAjxINrAAIAADxg");
	var mask_graphics_440 = new cjs.Graphics().p("Am9B5IAAjxIN7AAIAADxg");
	var mask_graphics_441 = new cjs.Graphics().p("AnGB5IAAjxIONAAIAADxg");
	var mask_graphics_442 = new cjs.Graphics().p("AnPB5IAAjxIOfAAIAADxg");
	var mask_graphics_443 = new cjs.Graphics().p("AnXB5IAAjxIOvAAIAADxg");
	var mask_graphics_444 = new cjs.Graphics().p("AngB5IAAjxIPBAAIAADxg");
	var mask_graphics_445 = new cjs.Graphics().p("AnpB5IAAjxIPTAAIAADxg");
	var mask_graphics_446 = new cjs.Graphics().p("AnxB5IAAjxIPjAAIAADxg");
	var mask_graphics_447 = new cjs.Graphics().p("An6B5IAAjxIP1AAIAADxg");
	var mask_graphics_448 = new cjs.Graphics().p("AoDB5IAAjxIQHAAIAADxg");
	var mask_graphics_449 = new cjs.Graphics().p("AoLB5IAAjxIQXAAIAADxg");
	var mask_graphics_450 = new cjs.Graphics().p("AoUB5IAAjxIQpAAIAADxg");
	var mask_graphics_451 = new cjs.Graphics().p("AodB5IAAjxIQ6AAIAADxg");
	var mask_graphics_452 = new cjs.Graphics().p("AolB5IAAjxIRLAAIAADxg");
	var mask_graphics_453 = new cjs.Graphics().p("AotB5IAAjxIRcAAIAADxg");
	var mask_graphics_454 = new cjs.Graphics().p("Ao2B5IAAjxIRtAAIAADxg");
	var mask_graphics_455 = new cjs.Graphics().p("Ao/B5IAAjxIR/AAIAADxg");
	var mask_graphics_456 = new cjs.Graphics().p("ApHB5IAAjxISQAAIAADxg");
	var mask_graphics_457 = new cjs.Graphics().p("AC4TbIAAjyISiAAIAADyg");
	var mask_graphics_458 = new cjs.Graphics().p("ApuB5IAAjxITdAAIAADxg");
	var mask_graphics_459 = new cjs.Graphics().p("AB8TcIAAjzIUZAAIAADzg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(400).to({graphics:mask_graphics_400,x:87.7,y:124.4}).wait(1).to({graphics:mask_graphics_401,x:166.1,y:236.6}).wait(1).to({graphics:mask_graphics_402,x:167,y:236.6}).wait(1).to({graphics:mask_graphics_403,x:167.9,y:236.6}).wait(1).to({graphics:mask_graphics_404,x:168.7,y:236.6}).wait(1).to({graphics:mask_graphics_405,x:169.6,y:236.6}).wait(1).to({graphics:mask_graphics_406,x:170.5,y:236.6}).wait(1).to({graphics:mask_graphics_407,x:171.3,y:236.6}).wait(1).to({graphics:mask_graphics_408,x:172.2,y:236.6}).wait(1).to({graphics:mask_graphics_409,x:173.1,y:236.6}).wait(1).to({graphics:mask_graphics_410,x:173.9,y:236.6}).wait(1).to({graphics:mask_graphics_411,x:174.8,y:236.6}).wait(1).to({graphics:mask_graphics_412,x:175.7,y:236.6}).wait(1).to({graphics:mask_graphics_413,x:176.5,y:236.6}).wait(1).to({graphics:mask_graphics_414,x:177.4,y:236.6}).wait(1).to({graphics:mask_graphics_415,x:178.3,y:236.6}).wait(1).to({graphics:mask_graphics_416,x:179.1,y:236.6}).wait(1).to({graphics:mask_graphics_417,x:180,y:236.6}).wait(1).to({graphics:mask_graphics_418,x:180.9,y:236.6}).wait(1).to({graphics:mask_graphics_419,x:181.8,y:236.6}).wait(1).to({graphics:mask_graphics_420,x:182.6,y:236.6}).wait(1).to({graphics:mask_graphics_421,x:183.5,y:236.6}).wait(1).to({graphics:mask_graphics_422,x:184.4,y:236.6}).wait(1).to({graphics:mask_graphics_423,x:185.2,y:236.6}).wait(1).to({graphics:mask_graphics_424,x:186.1,y:236.6}).wait(1).to({graphics:mask_graphics_425,x:187,y:236.6}).wait(1).to({graphics:mask_graphics_426,x:187.8,y:236.6}).wait(1).to({graphics:mask_graphics_427,x:188.7,y:236.6}).wait(1).to({graphics:mask_graphics_428,x:189.6,y:236.6}).wait(1).to({graphics:mask_graphics_429,x:190.4,y:236.6}).wait(1).to({graphics:mask_graphics_430,x:191.3,y:236.6}).wait(1).to({graphics:mask_graphics_431,x:192.2,y:236.6}).wait(1).to({graphics:mask_graphics_432,x:193,y:236.6}).wait(1).to({graphics:mask_graphics_433,x:193.9,y:236.6}).wait(1).to({graphics:mask_graphics_434,x:194.8,y:236.6}).wait(1).to({graphics:mask_graphics_435,x:195.6,y:236.6}).wait(1).to({graphics:mask_graphics_436,x:196.5,y:236.6}).wait(1).to({graphics:mask_graphics_437,x:197.4,y:236.6}).wait(1).to({graphics:mask_graphics_438,x:198.2,y:236.6}).wait(1).to({graphics:mask_graphics_439,x:199.1,y:236.6}).wait(1).to({graphics:mask_graphics_440,x:200,y:236.6}).wait(1).to({graphics:mask_graphics_441,x:200.9,y:236.6}).wait(1).to({graphics:mask_graphics_442,x:201.7,y:236.6}).wait(1).to({graphics:mask_graphics_443,x:202.6,y:236.6}).wait(1).to({graphics:mask_graphics_444,x:203.5,y:236.6}).wait(1).to({graphics:mask_graphics_445,x:204.3,y:236.6}).wait(1).to({graphics:mask_graphics_446,x:205.2,y:236.6}).wait(1).to({graphics:mask_graphics_447,x:206.1,y:236.6}).wait(1).to({graphics:mask_graphics_448,x:206.9,y:236.6}).wait(1).to({graphics:mask_graphics_449,x:207.8,y:236.6}).wait(1).to({graphics:mask_graphics_450,x:208.7,y:236.6}).wait(1).to({graphics:mask_graphics_451,x:209.5,y:236.6}).wait(1).to({graphics:mask_graphics_452,x:210.4,y:236.6}).wait(1).to({graphics:mask_graphics_453,x:211.3,y:236.6}).wait(1).to({graphics:mask_graphics_454,x:212.1,y:236.6}).wait(1).to({graphics:mask_graphics_455,x:213,y:236.6}).wait(1).to({graphics:mask_graphics_456,x:213.9,y:236.6}).wait(1).to({graphics:mask_graphics_457,x:137,y:124.4}).wait(1).to({graphics:mask_graphics_458,x:217.7,y:236.6}).wait(1).to({graphics:mask_graphics_459,x:142.9,y:124.4}).wait(75));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(20,1,1).p("AnxAAIPjAA");
	this.shape_1.setTransform(225.3,236.5);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(400).to({_off:false},0).wait(134));

	// Layer 12
	this.instance_2 = new lib.ar6("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(292.7,288.4,1,1,16.5,0,0,-1.2,1.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(159).to({_off:false},0).wait(375));

	// Layer 9 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_292 = new cjs.Graphics().p("AMwYrIDegwIB0IfIjeAvg");
	var mask_1_graphics_293 = new cjs.Graphics().p("AiyjwIDug7IB3IcIjuA7g");
	var mask_1_graphics_294 = new cjs.Graphics().p("Ai8jpID/hIIB6IbIkABIg");
	var mask_1_graphics_295 = new cjs.Graphics().p("AjGjiIERhVIB8IaIkRBVg");
	var mask_1_graphics_296 = new cjs.Graphics().p("AjRjcIEjhgICAIYIkjBhg");
	var mask_1_graphics_297 = new cjs.Graphics().p("AjajUIEzhvICDIZIk1Btg");
	var mask_1_graphics_298 = new cjs.Graphics().p("AjljOIFGh6ICEIXIlFB6g");
	var mask_1_graphics_299 = new cjs.Graphics().p("AjvjHIFXiHICIIWIlXCHg");
	var mask_1_graphics_300 = new cjs.Graphics().p("Aj5jAIFoiUICLIVIloCUg");
	var mask_1_graphics_301 = new cjs.Graphics().p("AkDi6IF6ifICNIUIl6Cfg");
	var mask_1_graphics_302 = new cjs.Graphics().p("AkNizIGLisICQITImLCsg");
	var mask_1_graphics_303 = new cjs.Graphics().p("AkXisIGci5ICTISImcC5g");
	var mask_1_graphics_304 = new cjs.Graphics().p("AkhilIGujFICVIRImtDFg");
	var mask_1_graphics_305 = new cjs.Graphics().p("AkrieIG/jTICYIQIm+DTg");
	var mask_1_graphics_306 = new cjs.Graphics().p("Ak1iYIHQjeICbIPInQDeg");
	var mask_1_graphics_307 = new cjs.Graphics().p("AlAiRIHijrICfIOInjDrg");
	var mask_1_graphics_308 = new cjs.Graphics().p("AlKiLIH0j2IChIMIn0D3g");
	var mask_1_graphics_309 = new cjs.Graphics().p("AlUiEIIFkDICkIMIoFEDg");
	var mask_1_graphics_310 = new cjs.Graphics().p("Aleh9IIWkQICnILIoWEQg");
	var mask_1_graphics_311 = new cjs.Graphics().p("Aloh2IIokdICpIKIonEdg");
	var mask_1_graphics_312 = new cjs.Graphics().p("AlyhvII5kpICsIJIo5Epg");
	var mask_1_graphics_313 = new cjs.Graphics().p("Al8hpIJKk1ICvIIIpKE1g");
	var mask_1_graphics_314 = new cjs.Graphics().p("AmGhiIJblCICyIHIpbFCg");
	var mask_1_graphics_315 = new cjs.Graphics().p("AmQhbIJtlPIC0IGIpsFPg");
	var mask_1_graphics_316 = new cjs.Graphics().p("AmahVIJ+laIC3IEIp+Fcg");
	var mask_1_graphics_317 = new cjs.Graphics().p("AmkhOIKPlnIC6IEIqPFng");
	var mask_1_graphics_318 = new cjs.Graphics().p("AmuhHIKhl0IC9IDIqhF0g");
	var mask_1_graphics_319 = new cjs.Graphics().p("Am5hAIKzmBIDAICIqzGBg");
	var mask_1_graphics_320 = new cjs.Graphics().p("AnDg6ILEmMIDDIBIrEGMg");
	var mask_1_graphics_321 = new cjs.Graphics().p("AnNgzILVmZIDGIAIrVGZg");
	var mask_1_graphics_322 = new cjs.Graphics().p("AnXgsILmmmIDJH/IrmGmg");
	var mask_1_graphics_323 = new cjs.Graphics().p("AnhgmIL4myIDLH/Ir4Gxg");
	var mask_1_graphics_324 = new cjs.Graphics().p("AnrgfIMJm+IDOH8IsJG/g");
	var mask_1_graphics_325 = new cjs.Graphics().p("An1gYIManLIDRH8IsbHLg");
	var mask_1_graphics_326 = new cjs.Graphics().p("An/gRIMsnYIDTH7IssHYg");
	var mask_1_graphics_327 = new cjs.Graphics().p("AoKgKIM+nlIDWH6Is9Hlg");
	var mask_1_graphics_328 = new cjs.Graphics().p("AoTgEINPnwIDYH5ItOHwg");
	var mask_1_graphics_329 = new cjs.Graphics().p("AoeACINhn8IDcH5ItgH8g");
	var mask_1_graphics_330 = new cjs.Graphics().p("AooAJINyoJIDfH4ItyIJg");
	var mask_1_graphics_331 = new cjs.Graphics().p("AoyAQIOEoWIDhH3IuDIVg");
	var mask_1_graphics_332 = new cjs.Graphics().p("Ao8AWIOVohIDkH2IuUIhg");
	var mask_1_graphics_333 = new cjs.Graphics().p("ApGAdIOmouIDnH1IulIug");
	var mask_1_graphics_334 = new cjs.Graphics().p("ApQAkIO4o7IDpH0Iu3I7g");
	var mask_1_graphics_335 = new cjs.Graphics().p("ApaArIPJpHIDsHyIvIJHg");
	var mask_1_graphics_336 = new cjs.Graphics().p("AplAxIPbpTIDvHyIvZJTg");
	var mask_1_graphics_337 = new cjs.Graphics().p("ApuA4IPrpgIDyHxIvrJgg");
	var mask_1_graphics_338 = new cjs.Graphics().p("AFMZUIP9ptID2HwIv+Jtg");
	var mask_1_graphics_339 = new cjs.Graphics().p("AqCBHIQOp8ID3HvIwOJ8g");
	var mask_1_graphics_340 = new cjs.Graphics().p("AqLBOIQfqJID4HuIweKJg");
	var mask_1_graphics_341 = new cjs.Graphics().p("AqUBWIQvqYID7HtIwwKYg");
	var mask_1_graphics_342 = new cjs.Graphics().p("AqeBdIRBqlID8HsIxBKlg");
	var mask_1_graphics_343 = new cjs.Graphics().p("AqnBlIRSq0ID9HrIxRK0g");
	var mask_1_graphics_344 = new cjs.Graphics().p("AqwBtIRirDID/HrIxiLCg");
	var mask_1_graphics_345 = new cjs.Graphics().p("Aq6B1IR0rRIEBHpIx0LQg");
	var mask_1_graphics_346 = new cjs.Graphics().p("ArDB8ISFrfIECHoIyELfg");
	var mask_1_graphics_347 = new cjs.Graphics().p("ArMCEISVruIEEHoIyVLtg");
	var mask_1_graphics_348 = new cjs.Graphics().p("ArWCLISnr7IEFHmIymL8g");
	var mask_1_graphics_349 = new cjs.Graphics().p("ArfCTIS4sKIEHHlIy3MKg");
	var mask_1_graphics_350 = new cjs.Graphics().p("AroCaITIsYIEJHkIzIMZg");
	var mask_1_graphics_351 = new cjs.Graphics().p("AryCiITZsmIEMHiIzZMog");
	var mask_1_graphics_352 = new cjs.Graphics().p("Ar7CqITqs1IENHiIzqM1g");
	var mask_1_graphics_353 = new cjs.Graphics().p("AsECxIT7tDIEOHhIz7NEg");
	var mask_1_graphics_354 = new cjs.Graphics().p("AsNC5IULtSIEQHhI0LNSg");
	var mask_1_graphics_355 = new cjs.Graphics().p("AsXDBIUdtgIESHfI0dNgg");
	var mask_1_graphics_356 = new cjs.Graphics().p("AsgDIIUutuIETHfI0uNug");
	var mask_1_graphics_357 = new cjs.Graphics().p("AsqDQIU/t9IEVHeI0+N8g");
	var mask_1_graphics_358 = new cjs.Graphics().p("AsyDXIVPuKIEXHcI1QOLg");
	var mask_1_graphics_359 = new cjs.Graphics().p("As8DfIVguZIEZHcI1hOZg");
	var mask_1_graphics_360 = new cjs.Graphics().p("AtFDmIVxunIEaHbI1xOog");
	var mask_1_graphics_361 = new cjs.Graphics().p("AtODvIWCu2IEbHaI2CO1g");
	var mask_1_graphics_362 = new cjs.Graphics().p("AtYD2IWUvEIEdHZI2TPEg");
	var mask_1_graphics_363 = new cjs.Graphics().p("AthD+IWkvTIEfHZI2kPSg");
	var mask_1_graphics_364 = new cjs.Graphics().p("AtqEFIW1vgIEgHXI21Pgg");
	var mask_1_graphics_365 = new cjs.Graphics().p("At0ENIXGvvIEjHWI3GPvg");
	var mask_1_graphics_366 = new cjs.Graphics().p("At9EUIXXv9IEkHWI3XP8g");
	var mask_1_graphics_367 = new cjs.Graphics().p("AuGEcIXowLIElHUI3oQLg");
	var mask_1_graphics_368 = new cjs.Graphics().p("AuQEkIX5waIEoHTI35Qag");
	var mask_1_graphics_369 = new cjs.Graphics().p("AuZEsIYKwpIEpHSI4KQpg");
	var mask_1_graphics_370 = new cjs.Graphics().p("AuiEzIYbw2IEqHRI4aQ2g");
	var mask_1_graphics_371 = new cjs.Graphics().p("AusE7IYsxFIEsHQI4rRFg");
	var mask_1_graphics_372 = new cjs.Graphics().p("Au1FCIY9xTIEuHPI49RUg");
	var mask_1_graphics_373 = new cjs.Graphics().p("Au+FKIZNxhIEwHOI5NRhg");
	var mask_1_graphics_374 = new cjs.Graphics().p("AvIFSIZfxwIExHNI5eRwg");
	var mask_1_graphics_375 = new cjs.Graphics().p("AvRFaIZwx+IEzHMI5wR+g");
	var mask_1_graphics_376 = new cjs.Graphics().p("AvaFhIaByMIE0HLI6ASMg");
	var mask_1_graphics_377 = new cjs.Graphics().p("AvkFoIaSyaIE3HKI6SSbg");
	var mask_1_graphics_378 = new cjs.Graphics().p("AvsFwIahyoIE4HJI6iSog");
	var mask_1_graphics_379 = new cjs.Graphics().p("Av2F4Iazy4IE6HJI6zS3g");
	var mask_1_graphics_380 = new cjs.Graphics().p("Av/GAIbEzGIE7HHI7ETGg");
	var mask_1_graphics_381 = new cjs.Graphics().p("AwJGHIbWzUIE9HHI7VTUg");
	var mask_1_graphics_382 = new cjs.Graphics().p("AwSGPIbmziIE/HFI7mTig");
	var mask_1_graphics_383 = new cjs.Graphics().p("AhpZ7Ib2zxIFBHEI74Txg");
	var mask_1_graphics_384 = new cjs.Graphics().p("Aw1GpIcr0WIFAHFI8rUVg");
	var mask_1_graphics_385 = new cjs.Graphics().p("AieZ7Idg07IFBHEI9hU7g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(292).to({graphics:mask_1_graphics_292,x:115.4,y:212.1}).wait(1).to({graphics:mask_1_graphics_293,x:214.8,y:394.2}).wait(1).to({graphics:mask_1_graphics_294,x:215.8,y:393.5}).wait(1).to({graphics:mask_1_graphics_295,x:216.7,y:393}).wait(1).to({graphics:mask_1_graphics_296,x:217.6,y:392.4}).wait(1).to({graphics:mask_1_graphics_297,x:218.5,y:391.8}).wait(1).to({graphics:mask_1_graphics_298,x:219.5,y:391.2}).wait(1).to({graphics:mask_1_graphics_299,x:220.4,y:390.6}).wait(1).to({graphics:mask_1_graphics_300,x:221.3,y:390}).wait(1).to({graphics:mask_1_graphics_301,x:222.2,y:389.4}).wait(1).to({graphics:mask_1_graphics_302,x:223.2,y:388.8}).wait(1).to({graphics:mask_1_graphics_303,x:224.1,y:388.2}).wait(1).to({graphics:mask_1_graphics_304,x:225,y:387.6}).wait(1).to({graphics:mask_1_graphics_305,x:225.9,y:387}).wait(1).to({graphics:mask_1_graphics_306,x:226.8,y:386.4}).wait(1).to({graphics:mask_1_graphics_307,x:227.8,y:385.8}).wait(1).to({graphics:mask_1_graphics_308,x:228.7,y:385.2}).wait(1).to({graphics:mask_1_graphics_309,x:229.6,y:384.6}).wait(1).to({graphics:mask_1_graphics_310,x:230.5,y:384}).wait(1).to({graphics:mask_1_graphics_311,x:231.4,y:383.4}).wait(1).to({graphics:mask_1_graphics_312,x:232.4,y:382.9}).wait(1).to({graphics:mask_1_graphics_313,x:233.3,y:382.2}).wait(1).to({graphics:mask_1_graphics_314,x:234.2,y:381.7}).wait(1).to({graphics:mask_1_graphics_315,x:235.1,y:381.1}).wait(1).to({graphics:mask_1_graphics_316,x:236.1,y:380.5}).wait(1).to({graphics:mask_1_graphics_317,x:237,y:379.9}).wait(1).to({graphics:mask_1_graphics_318,x:237.9,y:379.3}).wait(1).to({graphics:mask_1_graphics_319,x:238.8,y:378.7}).wait(1).to({graphics:mask_1_graphics_320,x:239.7,y:378.1}).wait(1).to({graphics:mask_1_graphics_321,x:240.7,y:377.5}).wait(1).to({graphics:mask_1_graphics_322,x:241.6,y:376.9}).wait(1).to({graphics:mask_1_graphics_323,x:242.5,y:376.3}).wait(1).to({graphics:mask_1_graphics_324,x:243.4,y:375.7}).wait(1).to({graphics:mask_1_graphics_325,x:244.4,y:375.1}).wait(1).to({graphics:mask_1_graphics_326,x:245.3,y:374.5}).wait(1).to({graphics:mask_1_graphics_327,x:246.2,y:373.9}).wait(1).to({graphics:mask_1_graphics_328,x:247.1,y:373.3}).wait(1).to({graphics:mask_1_graphics_329,x:248.1,y:372.7}).wait(1).to({graphics:mask_1_graphics_330,x:249,y:372.1}).wait(1).to({graphics:mask_1_graphics_331,x:249.9,y:371.6}).wait(1).to({graphics:mask_1_graphics_332,x:250.8,y:370.9}).wait(1).to({graphics:mask_1_graphics_333,x:251.8,y:370.4}).wait(1).to({graphics:mask_1_graphics_334,x:252.7,y:369.8}).wait(1).to({graphics:mask_1_graphics_335,x:253.6,y:369.2}).wait(1).to({graphics:mask_1_graphics_336,x:254.5,y:368.6}).wait(1).to({graphics:mask_1_graphics_337,x:255.4,y:368}).wait(1).to({graphics:mask_1_graphics_338,x:159.9,y:211.6}).wait(1).to({graphics:mask_1_graphics_339,x:257.2,y:366.7}).wait(1).to({graphics:mask_1_graphics_340,x:258.1,y:366}).wait(1).to({graphics:mask_1_graphics_341,x:258.9,y:365.3}).wait(1).to({graphics:mask_1_graphics_342,x:259.7,y:364.6}).wait(1).to({graphics:mask_1_graphics_343,x:260.6,y:363.9}).wait(1).to({graphics:mask_1_graphics_344,x:261.4,y:363.2}).wait(1).to({graphics:mask_1_graphics_345,x:262.3,y:362.6}).wait(1).to({graphics:mask_1_graphics_346,x:263.1,y:361.9}).wait(1).to({graphics:mask_1_graphics_347,x:264,y:361.2}).wait(1).to({graphics:mask_1_graphics_348,x:264.8,y:360.5}).wait(1).to({graphics:mask_1_graphics_349,x:265.7,y:359.8}).wait(1).to({graphics:mask_1_graphics_350,x:266.5,y:359.1}).wait(1).to({graphics:mask_1_graphics_351,x:267.4,y:358.5}).wait(1).to({graphics:mask_1_graphics_352,x:268.2,y:357.7}).wait(1).to({graphics:mask_1_graphics_353,x:269,y:357.1}).wait(1).to({graphics:mask_1_graphics_354,x:269.9,y:356.4}).wait(1).to({graphics:mask_1_graphics_355,x:270.7,y:355.7}).wait(1).to({graphics:mask_1_graphics_356,x:271.6,y:355}).wait(1).to({graphics:mask_1_graphics_357,x:272.4,y:354.3}).wait(1).to({graphics:mask_1_graphics_358,x:273.3,y:353.6}).wait(1).to({graphics:mask_1_graphics_359,x:274.1,y:352.9}).wait(1).to({graphics:mask_1_graphics_360,x:274.9,y:352.3}).wait(1).to({graphics:mask_1_graphics_361,x:275.8,y:351.5}).wait(1).to({graphics:mask_1_graphics_362,x:276.6,y:350.9}).wait(1).to({graphics:mask_1_graphics_363,x:277.5,y:350.2}).wait(1).to({graphics:mask_1_graphics_364,x:278.3,y:349.5}).wait(1).to({graphics:mask_1_graphics_365,x:279.2,y:348.8}).wait(1).to({graphics:mask_1_graphics_366,x:280,y:348.1}).wait(1).to({graphics:mask_1_graphics_367,x:280.9,y:347.4}).wait(1).to({graphics:mask_1_graphics_368,x:281.7,y:346.7}).wait(1).to({graphics:mask_1_graphics_369,x:282.6,y:346.1}).wait(1).to({graphics:mask_1_graphics_370,x:283.4,y:345.3}).wait(1).to({graphics:mask_1_graphics_371,x:284.3,y:344.7}).wait(1).to({graphics:mask_1_graphics_372,x:285.1,y:344}).wait(1).to({graphics:mask_1_graphics_373,x:285.9,y:343.3}).wait(1).to({graphics:mask_1_graphics_374,x:286.8,y:342.6}).wait(1).to({graphics:mask_1_graphics_375,x:287.6,y:341.9}).wait(1).to({graphics:mask_1_graphics_376,x:288.5,y:341.2}).wait(1).to({graphics:mask_1_graphics_377,x:289.3,y:340.6}).wait(1).to({graphics:mask_1_graphics_378,x:290.2,y:339.9}).wait(1).to({graphics:mask_1_graphics_379,x:291,y:339.2}).wait(1).to({graphics:mask_1_graphics_380,x:291.8,y:338.5}).wait(1).to({graphics:mask_1_graphics_381,x:292.7,y:337.8}).wait(1).to({graphics:mask_1_graphics_382,x:293.5,y:337.1}).wait(1).to({graphics:mask_1_graphics_383,x:199.8,y:211.1}).wait(1).to({graphics:mask_1_graphics_384,x:297,y:334.6}).wait(1).to({graphics:mask_1_graphics_385,x:205.1,y:211.1}).wait(149));

	// Layer 8
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(20,1,1).p("AlhuvQhWC0htDCQhsDChnEFQhnEDhtD3QhtD4A4CRQA4CQCqAJQDLAbDjhcQDShVC5iEQC3iACqiQQCqiQB3hxQB2hxEBkG");
	this.shape_2.setTransform(278.9,294.8);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(292).to({_off:false},0).wait(242));

	// Layer 7 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_259 = new cjs.Graphics().p("ACoU2QCgjbELgqQELgqDaCfQDWCcAtEDI0JDLQglkECbjWg");
	var mask_2_graphics_260 = new cjs.Graphics().p("ACZVBQCTjjEJg4QEIg4DjCUQDeCQA6EBIz9EOQgykCCQjeg");
	var mask_2_graphics_261 = new cjs.Graphics().p("ACLVNQCIjqEFhFQEFhGDqCHQDlCFBID9IztFRQhAkACEjlg");
	var mask_2_graphics_262 = new cjs.Graphics().p("ACAVbQB8jxEBhTQEBhUDwB7QDsB5BVD5IzZGSQhOj7B4jsg");
	var mask_2_graphics_263 = new cjs.Graphics().p("AB4VpQBuj2D9hhQD8hhD3BuQDyBsBhD0IzCHTQhbj3Bsjyg");
	var mask_2_graphics_264 = new cjs.Graphics().p("AByV5QBhj8D3huQD3huD8BhQD3BfBvDvIypISQhnjyBfj3g");
	var mask_2_graphics_265 = new cjs.Graphics().p("ABuWJQBUkBDxh6QDxh7EBBUQD8BSB6DpIyKJPQh0jsBRj8g");
	var mask_2_graphics_266 = new cjs.Graphics().p("ABtWbQBHkFDqiHQDqiHEFBGQEABFCGDiIxqKLQiAjlBEkAg");
	var mask_2_graphics_267 = new cjs.Graphics().p("ABvWtQA4kIDjiTQDjiTEIA4QEDA3CSDbIxGLGQiMjfA3kDg");
	var mask_2_graphics_268 = new cjs.Graphics().p("ABzXAQAqkKDbifQDbifELArQEFApCeDTIwgL+QiYjXAqkGg");
	var mask_2_graphics_269 = new cjs.Graphics().p("AB5XUQAdkMDSiqQDSiqENAcQEHAcCoDKIv2M1QijjPAckIg");
	var mask_2_graphics_270 = new cjs.Graphics().p("ACCXpQAOkODJi0QDJi1EOAOQEIAOCzDBIvKNpQitjHAOkIg");
	var mask_2_graphics_271 = new cjs.Graphics().p("ACNX/QABkPC/i/QC/i/EOAAQEJABC8C3IubOaQi3i9AAkIg");
	var mask_2_graphics_272 = new cjs.Graphics().p("ACbYVQgOkOC1jJQC1jJEOgOQEIgODGCuItpPJQjBizgOkIg");
	var mask_2_graphics_273 = new cjs.Graphics().p("ACrYrQgckNCqjSQCqjSENgcQEHgbDPCiIs1P2QjKipgckHg");
	var mask_2_graphics_274 = new cjs.Graphics().p("AC9ZCQgqkLCfjaQCfjbELgqQEGgpDXCXIsAQfQjSidgqkGg");
	var mask_2_graphics_275 = new cjs.Graphics().p("ADSZaQg4kJCTjiQCUjjEIg4QEDg3DfCMIrHRGQjbiTg3kCg");
	var mask_2_graphics_276 = new cjs.Graphics().p("ADpZxQhGkFCHjqQCIjqEEhGQEAhEDmCAIqNRqQjiiHhEkAg");
	var mask_2_graphics_277 = new cjs.Graphics().p("AECaKQhTkCB6jwQB7jxEBhTQD8hSDsB0IpRSKQjoh7hSj7g");
	var mask_2_graphics_278 = new cjs.Graphics().p("AEdaiQhhj8Buj3QBuj3D8hhQD4hfDyBoIoTSoQjvhvhfj3g");
	var mask_2_graphics_279 = new cjs.Graphics().p("AE6a6Qhuj3Bhj8QBhj8D3huQDyhsD3BbInUTCQj0hihsjyg");
	var mask_2_graphics_280 = new cjs.Graphics().p("AFZbTQh6jxBTkBQBUkBDwh6QDsh5D8BOImUTZQj5hVh4jsg");
	var mask_2_graphics_281 = new cjs.Graphics().p("AF6bsQiHjqBGkFQBGkGDqiHQDliED/BAIlSTtQj9hIiEjlg");
	var mask_2_graphics_282 = new cjs.Graphics().p("AGdcEQiTjiA4kJQA4kIDjiTQDeiQECAzIkQT8QkAg7iQjeg");
	var mask_2_graphics_283 = new cjs.Graphics().p("AHBcdQifjbArkLQAqkLDaifQDXibEEAlIjMUJQkDgticjWg");
	var mask_2_graphics_284 = new cjs.Graphics().p("AHnc1QiqjSAckNQAckNDSiqQDOimEGAYIiIURQkGgfimjOg");
	var mask_2_graphics_285 = new cjs.Graphics().p("AIOdNQi1jJAOkOQAPkODIi0QDFixEHAJIhEUXQkHgRixjFg");
	var mask_2_graphics_286 = new cjs.Graphics().p("AI3dlQi/i/AAkPQAAkOC/i/QC7i7EHgEIAAUZQkHgEi7i7g");
	var mask_2_graphics_287 = new cjs.Graphics().p("AI+d8QjIi1gOkOQgPkOC1jIQCxjFEHgSIBEUXIgcABQj1AAi7iog");
	var mask_2_graphics_288 = new cjs.Graphics().p("AJHeSQjSiqgckNQgckNCqjSQCnjOEFgfICIUSQggADggAAQjfAAi1iSg");
	var mask_2_graphics_289 = new cjs.Graphics().p("AJSemQjbifgqkLQgrkLCfjaQCcjWEDgtIDMUIQgyAHgxAAQjLAAish9g");
	var mask_2_graphics_290 = new cjs.Graphics().p("AJde5QjjiTg4kJQg4kICTjjQCQjeEBg6IEPT8QhEANhBAAQi3AAikhqg");
	var mask_2_graphics_291 = new cjs.Graphics().p("AJpfKQjqiHhGkFQhGkFCHjqQCFjlD9hIIFSTsQhUAVhRAAQimAAiahZg");
	var mask_2_graphics_292 = new cjs.Graphics().p("AJ2faQjwh7hUkBQhTkBB6jwQB4jsD5hVIGUTZQhjAehgAAQiVAAiQhJg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(259).to({graphics:mask_2_graphics_259,x:133.9,y:180.8}).wait(1).to({graphics:mask_2_graphics_260,x:133.6,y:182.5}).wait(1).to({graphics:mask_2_graphics_261,x:133.2,y:184.2}).wait(1).to({graphics:mask_2_graphics_262,x:132.7,y:185.8}).wait(1).to({graphics:mask_2_graphics_263,x:132.1,y:187.4}).wait(1).to({graphics:mask_2_graphics_264,x:131.5,y:189}).wait(1).to({graphics:mask_2_graphics_265,x:130.7,y:190.5}).wait(1).to({graphics:mask_2_graphics_266,x:129.9,y:192}).wait(1).to({graphics:mask_2_graphics_267,x:129,y:193.5}).wait(1).to({graphics:mask_2_graphics_268,x:128.1,y:194.9}).wait(1).to({graphics:mask_2_graphics_269,x:127,y:196.3}).wait(1).to({graphics:mask_2_graphics_270,x:125.9,y:197.6}).wait(1).to({graphics:mask_2_graphics_271,x:124.7,y:198.8}).wait(1).to({graphics:mask_2_graphics_272,x:123.5,y:200}).wait(1).to({graphics:mask_2_graphics_273,x:122.2,y:201.1}).wait(1).to({graphics:mask_2_graphics_274,x:120.9,y:202.1}).wait(1).to({graphics:mask_2_graphics_275,x:119.5,y:203.1}).wait(1).to({graphics:mask_2_graphics_276,x:118,y:204}).wait(1).to({graphics:mask_2_graphics_277,x:116.5,y:204.8}).wait(1).to({graphics:mask_2_graphics_278,x:115,y:205.6}).wait(1).to({graphics:mask_2_graphics_279,x:113.4,y:206.2}).wait(1).to({graphics:mask_2_graphics_280,x:111.8,y:206.8}).wait(1).to({graphics:mask_2_graphics_281,x:110.1,y:207.3}).wait(1).to({graphics:mask_2_graphics_282,x:108.5,y:207.7}).wait(1).to({graphics:mask_2_graphics_283,x:106.8,y:208}).wait(1).to({graphics:mask_2_graphics_284,x:105.1,y:208.2}).wait(1).to({graphics:mask_2_graphics_285,x:103.4,y:208.3}).wait(1).to({graphics:mask_2_graphics_286,x:101.7,y:208.4}).wait(1).to({graphics:mask_2_graphics_287,x:103.4,y:208.4}).wait(1).to({graphics:mask_2_graphics_288,x:105.1,y:208.4}).wait(1).to({graphics:mask_2_graphics_289,x:106.8,y:208.3}).wait(1).to({graphics:mask_2_graphics_290,x:108.5,y:208.3}).wait(1).to({graphics:mask_2_graphics_291,x:110.2,y:208.3}).wait(1).to({graphics:mask_2_graphics_292,x:111.8,y:208.3}).wait(242));

	// Layer 6
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(20,1,1).p("Ak4uvQhWC0htDCQhsDChnEFQhnEDhtD3QhtD4A4CRQA4CQCqAJQDLAbDjhcQDShVC5iEQC3iACqiQQCqiQB3hxQB2hxCviv");
	this.shape_3.setTransform(274.8,294.8);
	this.shape_3._off = true;

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(259).to({_off:false},0).wait(275));

	// Layer 4 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_159 = new cjs.Graphics().p("ANRJZIA4hzIJSEeIg3Bzg");
	var mask_3_graphics_160 = new cjs.Graphics().p("AlJhLIBBiFIJSEcIhBCFg");
	var mask_3_graphics_161 = new cjs.Graphics().p("AlNhCIBJiYIJSEdIhKCYg");
	var mask_3_graphics_162 = new cjs.Graphics().p("AlRg5IBSiqIJREdIhSCqg");
	var mask_3_graphics_163 = new cjs.Graphics().p("AlWgvIBbi9IJSEcIhbC9g");
	var mask_3_graphics_164 = new cjs.Graphics().p("AlagmIBkjQIJREdIhkDQg");
	var mask_3_graphics_165 = new cjs.Graphics().p("AlfgdIBtjiIJSEdIhtDig");
	var mask_3_graphics_166 = new cjs.Graphics().p("AljgTIB2j1IJREcIh2D1g");
	var mask_3_graphics_167 = new cjs.Graphics().p("AlogKIB/kHIJSEcIh/EIg");
	var mask_3_graphics_168 = new cjs.Graphics().p("AlsgBICHkaIJSEdIiIEag");
	var mask_3_graphics_169 = new cjs.Graphics().p("AlwAIICQksIJSEeIiRErg");
	var mask_3_graphics_170 = new cjs.Graphics().p("Al1ARICZk+IJSEdIiaE/g");
	var mask_3_graphics_171 = new cjs.Graphics().p("Al5AaICilRIJSEeIijFRg");
	var mask_3_graphics_172 = new cjs.Graphics().p("Al+AkICrlkIJSEeIisFjg");
	var mask_3_graphics_173 = new cjs.Graphics().p("AmCAtIC0l2IJREdIi0F2g");
	var mask_3_graphics_174 = new cjs.Graphics().p("AmHA2IC9mIIJSEdIi9GIg");
	var mask_3_graphics_175 = new cjs.Graphics().p("AmLA/IDGmbIJREeIjGGbg");
	var mask_3_graphics_176 = new cjs.Graphics().p("AmQBIIDPmtIJSEeIjPGtg");
	var mask_3_graphics_177 = new cjs.Graphics().p("AmUBSIDYnAIJREdIjYHAg");
	var mask_3_graphics_178 = new cjs.Graphics().p("AmZBbIDhnTIJSEeIjhHTg");
	var mask_3_graphics_179 = new cjs.Graphics().p("AmdBkIDpnlIJSEeIjqHlg");
	var mask_3_graphics_180 = new cjs.Graphics().p("AmhBuIDyn4IJSEdIjzH4g");
	var mask_3_graphics_181 = new cjs.Graphics().p("AmmB3ID7oKIJSEdIj8ILg");
	var mask_3_graphics_182 = new cjs.Graphics().p("AmqCAIEEodIJSEeIkFIdg");
	var mask_3_graphics_183 = new cjs.Graphics().p("AmvCJIENovIJSEeIkOIvg");
	var mask_3_graphics_184 = new cjs.Graphics().p("Am0CTIEXpCIJREdIkWJDg");
	var mask_3_graphics_185 = new cjs.Graphics().p("Am4CcIEgpVIJREeIkfJVg");
	var mask_3_graphics_186 = new cjs.Graphics().p("Am9CmIEppoIJREeIkoJng");
	var mask_3_graphics_187 = new cjs.Graphics().p("AnBCvIEyp6IJREdIkxJ6g");
	var mask_3_graphics_188 = new cjs.Graphics().p("AnGC4IE7qMIJREdIk6KNg");
	var mask_3_graphics_189 = new cjs.Graphics().p("AnKDBIFEqfIJREeIlDKfg");
	var mask_3_graphics_190 = new cjs.Graphics().p("AnODLIFMqyIJREeIlMKxg");
	var mask_3_graphics_191 = new cjs.Graphics().p("AnTDUIFVrEIJSEdIlVLEg");
	var mask_3_graphics_192 = new cjs.Graphics().p("AnXDdIFerXIJREeIleLXg");
	var mask_3_graphics_193 = new cjs.Graphics().p("AncDmIFnrpIJSEeIlnLpg");
	var mask_3_graphics_194 = new cjs.Graphics().p("AngDwIFwr8IJREdIlwL8g");
	var mask_3_graphics_195 = new cjs.Graphics().p("AnlD5IF5sOIJSEdIl5MOg");
	var mask_3_graphics_196 = new cjs.Graphics().p("AnpECIGCshIJREeImBMhg");
	var mask_3_graphics_197 = new cjs.Graphics().p("AnuELIGLszIJREeImKMzg");
	var mask_3_graphics_198 = new cjs.Graphics().p("AnyEVIGUtGIJREdImTNGg");
	var mask_3_graphics_199 = new cjs.Graphics().p("An3EeIGdtZIJREeImcNZg");
	var mask_3_graphics_200 = new cjs.Graphics().p("An7EoIGmtsIJREeImlNrg");
	var mask_3_graphics_201 = new cjs.Graphics().p("An/ExIGut+IJREdImuN+g");
	var mask_3_graphics_202 = new cjs.Graphics().p("AoEE6IG3uQIJSEdIm3ORg");
	var mask_3_graphics_203 = new cjs.Graphics().p("AoIFDIHAujIJREeInAOjg");
	var mask_3_graphics_204 = new cjs.Graphics().p("AoNFNIHJu2IJSEeInJO1g");
	var mask_3_graphics_205 = new cjs.Graphics().p("AoRFWIHSvIIJREdInSPIg");
	var mask_3_graphics_206 = new cjs.Graphics().p("AoWFfIHbvbIJSEeInbPbg");
	var mask_3_graphics_207 = new cjs.Graphics().p("AoaFpIHkvuIJREeInjPtg");
	var mask_3_graphics_208 = new cjs.Graphics().p("AofFyIHtwAIJREdInsQAg");
	var mask_3_graphics_209 = new cjs.Graphics().p("AojF7IH2wSIJREdIn1QSg");
	var mask_3_graphics_210 = new cjs.Graphics().p("AooGEIH/wlIJREeIn+Qlg");
	var mask_3_graphics_211 = new cjs.Graphics().p("AosGNIIIw3IJREeIoIQ3g");
	var mask_3_graphics_212 = new cjs.Graphics().p("AowGXIIQxKIJREdIoQRKg");
	var mask_3_graphics_213 = new cjs.Graphics().p("Ao1GgIIZxdIJSEeIoZRcg");
	var mask_3_graphics_214 = new cjs.Graphics().p("Ao5GpIIixvIJREeIoiRvg");
	var mask_3_graphics_215 = new cjs.Graphics().p("Ao+GyIIryBIJSEdIorSCg");
	var mask_3_graphics_216 = new cjs.Graphics().p("ApCG8II0yUIJREdIo0SUg");
	var mask_3_graphics_217 = new cjs.Graphics().p("ApHHFII9ynIJSEeIo9Smg");
	var mask_3_graphics_218 = new cjs.Graphics().p("ApLHOIJGy5IJREeIpGS5g");
	var mask_3_graphics_219 = new cjs.Graphics().p("ApPHXIJOzLIJREdIpOTMg");
	var mask_3_graphics_220 = new cjs.Graphics().p("ApUHhIJXzfIJSEeIpXTfg");
	var mask_3_graphics_221 = new cjs.Graphics().p("ApYHqIJfzxIJSEeIpfTxg");
	var mask_3_graphics_222 = new cjs.Graphics().p("ApdHzIJp0DIJSEdIppUEg");
	var mask_3_graphics_223 = new cjs.Graphics().p("AphH9IJx0WIJSEdIpxUWg");
	var mask_3_graphics_224 = new cjs.Graphics().p("ApmIGIJ60pIJTEeIp6Upg");
	var mask_3_graphics_225 = new cjs.Graphics().p("ApqIPIKD07IJSEeIqDU7g");
	var mask_3_graphics_226 = new cjs.Graphics().p("ApvIZIKM1OIJTEdIqMVOg");
	var mask_3_graphics_227 = new cjs.Graphics().p("ApzIiIKV1gIJSEdIqVVgg");
	var mask_3_graphics_228 = new cjs.Graphics().p("Ap4IrIKe1zIJTEeIqeVzg");
	var mask_3_graphics_229 = new cjs.Graphics().p("Ap8I1IKn2GIJSEdIqnWGg");
	var mask_3_graphics_230 = new cjs.Graphics().p("AqAI+IKv2YIJSEdIqvWYg");
	var mask_3_graphics_231 = new cjs.Graphics().p("AqFJHIK52rIJSEeIq5Wqg");
	var mask_3_graphics_232 = new cjs.Graphics().p("AqJJQILB29IJSEeIrBW9g");
	var mask_3_graphics_233 = new cjs.Graphics().p("AqOJZILL3PIJSEdIrLXQg");
	var mask_3_graphics_234 = new cjs.Graphics().p("AqTJjILU3jIJTEeIrUXig");
	var mask_3_graphics_235 = new cjs.Graphics().p("AqXJsILc31IJTEeIrcX1g");
	var mask_3_graphics_236 = new cjs.Graphics().p("AqcJ1ILm4HIJTEdIrmYIg");
	var mask_3_graphics_237 = new cjs.Graphics().p("AqgJ/ILu4aIJTEdIruYag");
	var mask_3_graphics_238 = new cjs.Graphics().p("AqlKIIL44tIJTEeIr4Ytg");
	var mask_3_graphics_239 = new cjs.Graphics().p("AqpKRIMA4/IJTEeIsAY/g");
	var mask_3_graphics_240 = new cjs.Graphics().p("AqtKbIMJ5SIJSEdIsJZSg");
	var mask_3_graphics_241 = new cjs.Graphics().p("AqyKkIMS5lIJTEeIsSZlg");
	var mask_3_graphics_242 = new cjs.Graphics().p("Aq2KtIMb53IJSEeIsbZ3g");
	var mask_3_graphics_243 = new cjs.Graphics().p("Aq7K3IMk6KIJTEdIskaKg");
	var mask_3_graphics_244 = new cjs.Graphics().p("Aq/LAIMt6cIJSEdIstacg");
	var mask_3_graphics_245 = new cjs.Graphics().p("ArELJIM26vIJTEeIs2aug");
	var mask_3_graphics_246 = new cjs.Graphics().p("ArILSIM+7BIJTEeIs+bBg");
	var mask_3_graphics_247 = new cjs.Graphics().p("ArNLbINI7TIJTEdItIbUg");
	var mask_3_graphics_248 = new cjs.Graphics().p("ArRLlINQ7mIJTEdItQbmg");
	var mask_3_graphics_249 = new cjs.Graphics().p("ArWLuINa75IJTEeItab5g");
	var mask_3_graphics_250 = new cjs.Graphics().p("AraL3INi8LIJTEdIticMg");
	var mask_3_graphics_251 = new cjs.Graphics().p("AreMBINr8eIJSEdItrceg");
	var mask_3_graphics_252 = new cjs.Graphics().p("ArjMKIN08xIJTEeIt0cxg");
	var mask_3_graphics_253 = new cjs.Graphics().p("ArnMTIN99DIJSEeIt9dDg");
	var mask_3_graphics_254 = new cjs.Graphics().p("ArsMcIOG9VIJTEdIuGdWg");
	var mask_3_graphics_255 = new cjs.Graphics().p("ArwMmIOP9oIJSEdIuPdog");
	var mask_3_graphics_256 = new cjs.Graphics().p("Ar1MvIOY97IJTEeIuYd7g");
	var mask_3_graphics_257 = new cjs.Graphics().p("Ar5M5IOg+OIJTEdIuheOg");
	var mask_3_graphics_258 = new cjs.Graphics().p("Ar+NCIOq+gIJTEdIuqegg");
	var mask_3_graphics_259 = new cjs.Graphics().p("AgqX6IOz+yIJTEdIu0ezg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(159).to({graphics:mask_3_graphics_159,x:149.9,y:88.7}).wait(1).to({graphics:mask_3_graphics_160,x:266.9,y:158.4}).wait(1).to({graphics:mask_3_graphics_161,x:266.5,y:159.3}).wait(1).to({graphics:mask_3_graphics_162,x:266,y:160.2}).wait(1).to({graphics:mask_3_graphics_163,x:265.6,y:161.2}).wait(1).to({graphics:mask_3_graphics_164,x:265.1,y:162.1}).wait(1).to({graphics:mask_3_graphics_165,x:264.7,y:163}).wait(1).to({graphics:mask_3_graphics_166,x:264.2,y:163.9}).wait(1).to({graphics:mask_3_graphics_167,x:263.8,y:164.9}).wait(1).to({graphics:mask_3_graphics_168,x:263.4,y:165.8}).wait(1).to({graphics:mask_3_graphics_169,x:262.9,y:166.7}).wait(1).to({graphics:mask_3_graphics_170,x:262.5,y:167.7}).wait(1).to({graphics:mask_3_graphics_171,x:262,y:168.6}).wait(1).to({graphics:mask_3_graphics_172,x:261.6,y:169.5}).wait(1).to({graphics:mask_3_graphics_173,x:261.1,y:170.4}).wait(1).to({graphics:mask_3_graphics_174,x:260.7,y:171.4}).wait(1).to({graphics:mask_3_graphics_175,x:260.2,y:172.3}).wait(1).to({graphics:mask_3_graphics_176,x:259.8,y:173.2}).wait(1).to({graphics:mask_3_graphics_177,x:259.3,y:174.1}).wait(1).to({graphics:mask_3_graphics_178,x:258.9,y:175.1}).wait(1).to({graphics:mask_3_graphics_179,x:258.5,y:176}).wait(1).to({graphics:mask_3_graphics_180,x:258,y:176.9}).wait(1).to({graphics:mask_3_graphics_181,x:257.6,y:177.9}).wait(1).to({graphics:mask_3_graphics_182,x:257.1,y:178.8}).wait(1).to({graphics:mask_3_graphics_183,x:256.7,y:179.7}).wait(1).to({graphics:mask_3_graphics_184,x:256.3,y:180.7}).wait(1).to({graphics:mask_3_graphics_185,x:255.8,y:181.6}).wait(1).to({graphics:mask_3_graphics_186,x:255.4,y:182.5}).wait(1).to({graphics:mask_3_graphics_187,x:254.9,y:183.4}).wait(1).to({graphics:mask_3_graphics_188,x:254.5,y:184.4}).wait(1).to({graphics:mask_3_graphics_189,x:254,y:185.3}).wait(1).to({graphics:mask_3_graphics_190,x:253.6,y:186.2}).wait(1).to({graphics:mask_3_graphics_191,x:253.1,y:187.2}).wait(1).to({graphics:mask_3_graphics_192,x:252.7,y:188.1}).wait(1).to({graphics:mask_3_graphics_193,x:252.2,y:189}).wait(1).to({graphics:mask_3_graphics_194,x:251.8,y:189.9}).wait(1).to({graphics:mask_3_graphics_195,x:251.3,y:190.9}).wait(1).to({graphics:mask_3_graphics_196,x:250.9,y:191.8}).wait(1).to({graphics:mask_3_graphics_197,x:250.5,y:192.7}).wait(1).to({graphics:mask_3_graphics_198,x:250,y:193.6}).wait(1).to({graphics:mask_3_graphics_199,x:249.6,y:194.6}).wait(1).to({graphics:mask_3_graphics_200,x:249.1,y:195.5}).wait(1).to({graphics:mask_3_graphics_201,x:248.7,y:196.4}).wait(1).to({graphics:mask_3_graphics_202,x:248.2,y:197.4}).wait(1).to({graphics:mask_3_graphics_203,x:247.8,y:198.3}).wait(1).to({graphics:mask_3_graphics_204,x:247.3,y:199.2}).wait(1).to({graphics:mask_3_graphics_205,x:246.9,y:200.1}).wait(1).to({graphics:mask_3_graphics_206,x:246.4,y:201.1}).wait(1).to({graphics:mask_3_graphics_207,x:246,y:202}).wait(1).to({graphics:mask_3_graphics_208,x:245.6,y:202.9}).wait(1).to({graphics:mask_3_graphics_209,x:245.1,y:203.9}).wait(1).to({graphics:mask_3_graphics_210,x:244.7,y:204.8}).wait(1).to({graphics:mask_3_graphics_211,x:244.2,y:205.7}).wait(1).to({graphics:mask_3_graphics_212,x:243.8,y:206.7}).wait(1).to({graphics:mask_3_graphics_213,x:243.3,y:207.6}).wait(1).to({graphics:mask_3_graphics_214,x:242.9,y:208.5}).wait(1).to({graphics:mask_3_graphics_215,x:242.4,y:209.5}).wait(1).to({graphics:mask_3_graphics_216,x:242,y:210.4}).wait(1).to({graphics:mask_3_graphics_217,x:241.5,y:211.3}).wait(1).to({graphics:mask_3_graphics_218,x:241.1,y:212.2}).wait(1).to({graphics:mask_3_graphics_219,x:240.7,y:213.2}).wait(1).to({graphics:mask_3_graphics_220,x:240.2,y:214.1}).wait(1).to({graphics:mask_3_graphics_221,x:239.8,y:215}).wait(1).to({graphics:mask_3_graphics_222,x:239.3,y:216}).wait(1).to({graphics:mask_3_graphics_223,x:238.9,y:216.9}).wait(1).to({graphics:mask_3_graphics_224,x:238.4,y:217.8}).wait(1).to({graphics:mask_3_graphics_225,x:238,y:218.7}).wait(1).to({graphics:mask_3_graphics_226,x:237.5,y:219.7}).wait(1).to({graphics:mask_3_graphics_227,x:237.1,y:220.6}).wait(1).to({graphics:mask_3_graphics_228,x:236.6,y:221.5}).wait(1).to({graphics:mask_3_graphics_229,x:236.2,y:222.5}).wait(1).to({graphics:mask_3_graphics_230,x:235.8,y:223.4}).wait(1).to({graphics:mask_3_graphics_231,x:235.3,y:224.3}).wait(1).to({graphics:mask_3_graphics_232,x:234.9,y:225.2}).wait(1).to({graphics:mask_3_graphics_233,x:234.4,y:226.2}).wait(1).to({graphics:mask_3_graphics_234,x:234,y:227.1}).wait(1).to({graphics:mask_3_graphics_235,x:233.6,y:228}).wait(1).to({graphics:mask_3_graphics_236,x:233.1,y:229}).wait(1).to({graphics:mask_3_graphics_237,x:232.7,y:229.9}).wait(1).to({graphics:mask_3_graphics_238,x:232.2,y:230.8}).wait(1).to({graphics:mask_3_graphics_239,x:231.8,y:231.7}).wait(1).to({graphics:mask_3_graphics_240,x:231.3,y:232.7}).wait(1).to({graphics:mask_3_graphics_241,x:230.9,y:233.6}).wait(1).to({graphics:mask_3_graphics_242,x:230.4,y:234.5}).wait(1).to({graphics:mask_3_graphics_243,x:230,y:235.5}).wait(1).to({graphics:mask_3_graphics_244,x:229.5,y:236.4}).wait(1).to({graphics:mask_3_graphics_245,x:229.1,y:237.3}).wait(1).to({graphics:mask_3_graphics_246,x:228.7,y:238.2}).wait(1).to({graphics:mask_3_graphics_247,x:228.2,y:239.2}).wait(1).to({graphics:mask_3_graphics_248,x:227.8,y:240.1}).wait(1).to({graphics:mask_3_graphics_249,x:227.3,y:241}).wait(1).to({graphics:mask_3_graphics_250,x:226.9,y:242}).wait(1).to({graphics:mask_3_graphics_251,x:226.4,y:242.9}).wait(1).to({graphics:mask_3_graphics_252,x:226,y:243.8}).wait(1).to({graphics:mask_3_graphics_253,x:225.5,y:244.7}).wait(1).to({graphics:mask_3_graphics_254,x:225.1,y:245.7}).wait(1).to({graphics:mask_3_graphics_255,x:224.6,y:246.6}).wait(1).to({graphics:mask_3_graphics_256,x:224.2,y:247.5}).wait(1).to({graphics:mask_3_graphics_257,x:223.8,y:248.5}).wait(1).to({graphics:mask_3_graphics_258,x:223.3,y:249.4}).wait(1).to({graphics:mask_3_graphics_259,x:150,y:181.6}).wait(275));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(20,1,1).p("Ak4uvQhWC0htDCQhsDChnEFQhnEDhtD3QhtD4A4CRQA4CQCqAJQDLAbDjhcQDShVC5iEQC3iACqiQQCqiQB3hxQB2hxCviv");
	this.shape_4.setTransform(274.8,294.8);
	this.shape_4._off = true;

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(159).to({_off:false},0).wait(375));

	// Layer 11
	this.instance_3 = new lib.ar1("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(102.2,292.4,1,1,-11.7,0,0,-0.8,0.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).wait(525));

	// Layer 5 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_9 = new cjs.Graphics().p("AIlWxIBYiCIElDGIhYCCg");
	var mask_4_graphics_10 = new cjs.Graphics().p("AjBgcIBfiMIEkDFIhfCMg");
	var mask_4_graphics_11 = new cjs.Graphics().p("AjFgWIBmiYIElDFIhnCYg");
	var mask_4_graphics_12 = new cjs.Graphics().p("AjJgRIBuiiIEkDFIhtCig");
	var mask_4_graphics_13 = new cjs.Graphics().p("AjMgMIB1itIEkDFIh1Ctg");
	var mask_4_graphics_14 = new cjs.Graphics().p("AjQgGIB8i4IElDFIh8C4g");
	var mask_4_graphics_15 = new cjs.Graphics().p("AjTgBICDjCIEkDFIiDDCg");
	var mask_4_graphics_16 = new cjs.Graphics().p("AjXADICKjLIElDGIiKDLg");
	var mask_4_graphics_17 = new cjs.Graphics().p("AjaAJICRjXIEkDGIiRDXg");
	var mask_4_graphics_18 = new cjs.Graphics().p("AjeAOICZjhIEkDGIiZDhg");
	var mask_4_graphics_19 = new cjs.Graphics().p("AjiATICgjrIElDGIigDrg");
	var mask_4_graphics_20 = new cjs.Graphics().p("AjlAYICmj1IElDGIinD1g");
	var mask_4_graphics_21 = new cjs.Graphics().p("AjpAeICukBIEkDGIitEBg");
	var mask_4_graphics_22 = new cjs.Graphics().p("AjsAjIC1kLIEkDGIi1ELg");
	var mask_4_graphics_23 = new cjs.Graphics().p("AjwAoIC8kWIElDGIi8EWg");
	var mask_4_graphics_24 = new cjs.Graphics().p("AjzAuIDDkhIEkDGIjDEhg");
	var mask_4_graphics_25 = new cjs.Graphics().p("Aj3AzIDKkrIElDGIjLErg");
	var mask_4_graphics_26 = new cjs.Graphics().p("Aj7A4IDSk1IEkDGIjRE1g");
	var mask_4_graphics_27 = new cjs.Graphics().p("Aj+A+IDZlBIEkDGIjZFBg");
	var mask_4_graphics_28 = new cjs.Graphics().p("AkCBDIDglLIElDGIjgFLg");
	var mask_4_graphics_29 = new cjs.Graphics().p("AkFBIIDnlWIEkDGIjnFWg");
	var mask_4_graphics_30 = new cjs.Graphics().p("AkJBOIDulhIElDGIjuFhg");
	var mask_4_graphics_31 = new cjs.Graphics().p("AkMBTID1lrIEkDGIj1Frg");
	var mask_4_graphics_32 = new cjs.Graphics().p("AkQBYID9l1IEkDGIj9F1g");
	var mask_4_graphics_33 = new cjs.Graphics().p("AkUBdIEEl/IElDGIkEF/g");
	var mask_4_graphics_34 = new cjs.Graphics().p("AkXBjIELmLIEkDGIkLGLg");
	var mask_4_graphics_35 = new cjs.Graphics().p("AkbBoIESmVIElDGIkSGVg");
	var mask_4_graphics_36 = new cjs.Graphics().p("AkeBtIEZmgIElDHIkaGfg");
	var mask_4_graphics_37 = new cjs.Graphics().p("AkiBzIEgmrIElDGIkgGrg");
	var mask_4_graphics_38 = new cjs.Graphics().p("AklB4IEmm1IElDGIkmG1g");
	var mask_4_graphics_39 = new cjs.Graphics().p("AkpB9IEunAIElDGIkuHAg");
	var mask_4_graphics_40 = new cjs.Graphics().p("AktCDIE1nLIEmDGIk1HLg");
	var mask_4_graphics_41 = new cjs.Graphics().p("AkwCIIE8nVIElDGIk8HVg");
	var mask_4_graphics_42 = new cjs.Graphics().p("Ak0CNIFDnfIEmDGIlDHfg");
	var mask_4_graphics_43 = new cjs.Graphics().p("Ak3CTIFKnrIElDGIlKHrg");
	var mask_4_graphics_44 = new cjs.Graphics().p("Ak7CYIFSn1IElDGIlRH1g");
	var mask_4_graphics_45 = new cjs.Graphics().p("Ak+CeIFYoAIEmDGIlZIAg");
	var mask_4_graphics_46 = new cjs.Graphics().p("AlCCjIFgoLIElDGIlgILg");
	var mask_4_graphics_47 = new cjs.Graphics().p("AlGCoIFnoVIEmDGIlnIVg");
	var mask_4_graphics_48 = new cjs.Graphics().p("AlJCuIFuohIElDGIluIhg");
	var mask_4_graphics_49 = new cjs.Graphics().p("AlNCzIF1orIEmDGIl1Irg");
	var mask_4_graphics_50 = new cjs.Graphics().p("AlQC4IF8o1IEmDGIl9I1g");
	var mask_4_graphics_51 = new cjs.Graphics().p("AlUC9IGDo/IEmDGImDI/g");
	var mask_4_graphics_52 = new cjs.Graphics().p("AlXDDIGKpLIElDGImKJLg");
	var mask_4_graphics_53 = new cjs.Graphics().p("AlbDIIGSpVIElDGImSJVg");
	var mask_4_graphics_54 = new cjs.Graphics().p("AlfDNIGZpfIEmDGImZJfg");
	var mask_4_graphics_55 = new cjs.Graphics().p("AliDTIGgprIElDGImgJrg");
	var mask_4_graphics_56 = new cjs.Graphics().p("AlmDYIGnp1IEmDGImnJ1g");
	var mask_4_graphics_57 = new cjs.Graphics().p("AlpDdIGup/IElDGImuJ/g");
	var mask_4_graphics_58 = new cjs.Graphics().p("AltDjIG1qKIEmDGIm1KKg");
	var mask_4_graphics_59 = new cjs.Graphics().p("AlwDoIG8qVIEmDGIm9KVg");
	var mask_4_graphics_60 = new cjs.Graphics().p("Al0DtIHEqfIElDGInEKfg");
	var mask_4_graphics_61 = new cjs.Graphics().p("Al4DzIHLqrIEmDGInLKrg");
	var mask_4_graphics_62 = new cjs.Graphics().p("Al7D4IHSq1IElDGInSK1g");
	var mask_4_graphics_63 = new cjs.Graphics().p("Al/D9IHZq/IEmDGInZK/g");
	var mask_4_graphics_64 = new cjs.Graphics().p("AmCECIHgrJIEmDGInhLJg");
	var mask_4_graphics_65 = new cjs.Graphics().p("AmGEIIHorVIElDGInnLVg");
	var mask_4_graphics_66 = new cjs.Graphics().p("AmJENIHurfIElDGInuLfg");
	var mask_4_graphics_67 = new cjs.Graphics().p("AmNESIH2rpIElDGIn2Lpg");
	var mask_4_graphics_68 = new cjs.Graphics().p("AmREYIH9r0IEmDGIn9L0g");
	var mask_4_graphics_69 = new cjs.Graphics().p("AmUEdIIEr/IElDGIoEL/g");
	var mask_4_graphics_70 = new cjs.Graphics().p("AmYEiIILsJIEmDGIoLMJg");
	var mask_4_graphics_71 = new cjs.Graphics().p("AmbEoIISsVIElDGIoSMVg");
	var mask_4_graphics_72 = new cjs.Graphics().p("AmfEtIIZsfIEmDGIoZMfg");
	var mask_4_graphics_73 = new cjs.Graphics().p("AmiEyIIgspIElDGIogMpg");
	var mask_4_graphics_74 = new cjs.Graphics().p("AmmE4IIos0IElDGIooM0g");
	var mask_4_graphics_75 = new cjs.Graphics().p("AmqE9IIvs/IEmDGIovM/g");
	var mask_4_graphics_76 = new cjs.Graphics().p("AmuFCII3tJIEmDGIo3NJg");
	var mask_4_graphics_77 = new cjs.Graphics().p("AmxFHII+tTIElDGIo+NTg");
	var mask_4_graphics_78 = new cjs.Graphics().p("Am1FNIJFtfIEmDGIpFNfg");
	var mask_4_graphics_79 = new cjs.Graphics().p("Am4FSIJMtpIElDGIpMNpg");
	var mask_4_graphics_80 = new cjs.Graphics().p("Am8FXIJTtzIEmDGIpTNzg");
	var mask_4_graphics_81 = new cjs.Graphics().p("AnAFdIJbt/IEmDGIpbN/g");
	var mask_4_graphics_82 = new cjs.Graphics().p("AnDFiIJiuJIElDGIpiOJg");
	var mask_4_graphics_83 = new cjs.Graphics().p("AnHFnIJpuTIElDGIpoOTg");
	var mask_4_graphics_84 = new cjs.Graphics().p("AnKFtIJvueIEmDGIpwOeg");
	var mask_4_graphics_85 = new cjs.Graphics().p("AnOFyIJ3upIEmDGIp3Opg");
	var mask_4_graphics_86 = new cjs.Graphics().p("AnRF3IJ+uzIElDGIp+Ozg");
	var mask_4_graphics_87 = new cjs.Graphics().p("AnVF9IKFu/IEmDGIqFO/g");
	var mask_4_graphics_88 = new cjs.Graphics().p("AnZGCIKNvJIElDGIqMPJg");
	var mask_4_graphics_89 = new cjs.Graphics().p("AncGHIKTvTIEmDGIqUPTg");
	var mask_4_graphics_90 = new cjs.Graphics().p("AngGMIKbvdIElDGIqaPdg");
	var mask_4_graphics_91 = new cjs.Graphics().p("AnjGSIKivpIElDGIqiPpg");
	var mask_4_graphics_92 = new cjs.Graphics().p("AnnGXIKpvzIEmDGIqpPzg");
	var mask_4_graphics_93 = new cjs.Graphics().p("AnqGcIKwv9IElDGIqwP9g");
	var mask_4_graphics_94 = new cjs.Graphics().p("AnuGiIK3wJIEmDGIq3QJg");
	var mask_4_graphics_95 = new cjs.Graphics().p("AnyGnIK/wTIElDGIq+QTg");
	var mask_4_graphics_96 = new cjs.Graphics().p("An1GsILGwdIElDGIrGQdg");
	var mask_4_graphics_97 = new cjs.Graphics().p("An5GyILNwoIEmDGIrNQog");
	var mask_4_graphics_98 = new cjs.Graphics().p("An8G3ILTwzIEmDGIrUQzg");
	var mask_4_graphics_99 = new cjs.Graphics().p("AoAG8ILbw9IEmDGIrbQ9g");
	var mask_4_graphics_100 = new cjs.Graphics().p("AoDHCILixJIElDGIriRJg");
	var mask_4_graphics_101 = new cjs.Graphics().p("AoHHHILpxTIEmDGIrpRTg");
	var mask_4_graphics_102 = new cjs.Graphics().p("AoLHMILxxdIEmDGIrxRdg");
	var mask_4_graphics_103 = new cjs.Graphics().p("AoOHRIL3xnIEmDGIr4Rng");
	var mask_4_graphics_104 = new cjs.Graphics().p("AoSHXIL/xzIElDGIr+Rzg");
	var mask_4_graphics_105 = new cjs.Graphics().p("AoVHcIMGx9IElDGIsGR9g");
	var mask_4_graphics_106 = new cjs.Graphics().p("AoZHhIMNyHIEmDGIsNSHg");
	var mask_4_graphics_107 = new cjs.Graphics().p("AocHnIMUySIElDGIsUSSg");
	var mask_4_graphics_108 = new cjs.Graphics().p("AogHsIMbydIEmDGIsbSdg");
	var mask_4_graphics_109 = new cjs.Graphics().p("AokHxIMjynIElDGIsiSng");
	var mask_4_graphics_110 = new cjs.Graphics().p("AonH3IMqyzIElDGIsqSzg");
	var mask_4_graphics_111 = new cjs.Graphics().p("AorH8IMxy9IEmDGIsxS9g");
	var mask_4_graphics_112 = new cjs.Graphics().p("AouIBIM3zHIEmDGIs4THg");
	var mask_4_graphics_113 = new cjs.Graphics().p("AoyIGIM/zSIEmDGIs/TSg");
	var mask_4_graphics_114 = new cjs.Graphics().p("Ao1IMINGzdIElDGItGTdg");
	var mask_4_graphics_115 = new cjs.Graphics().p("Ao5IRINNznIEmDGItNTng");
	var mask_4_graphics_116 = new cjs.Graphics().p("Ao9IWINVzxIEmDGItVTxg");
	var mask_4_graphics_117 = new cjs.Graphics().p("ApAIcINbz9IEmDGItcT9g");
	var mask_4_graphics_118 = new cjs.Graphics().p("ApEIhINj0HIElDGItiUHg");
	var mask_4_graphics_119 = new cjs.Graphics().p("ApHImINq0SIElDGItqUSg");
	var mask_4_graphics_120 = new cjs.Graphics().p("ApLIsINx0dIEmDGItxUdg");
	var mask_4_graphics_121 = new cjs.Graphics().p("ApOIxIN40nIElDGIt4Ung");
	var mask_4_graphics_122 = new cjs.Graphics().p("ApSI2IOA0xIElDGIt/Uxg");
	var mask_4_graphics_123 = new cjs.Graphics().p("ApWI8IOH09IEmDGIuHU9g");
	var mask_4_graphics_124 = new cjs.Graphics().p("ApZJBIOO1HIElDGIuOVHg");
	var mask_4_graphics_125 = new cjs.Graphics().p("ApdJGIOV1RIEmDGIuVVRg");
	var mask_4_graphics_126 = new cjs.Graphics().p("ApgJLIOc1bIElDGIucVbg");
	var mask_4_graphics_127 = new cjs.Graphics().p("ApkJRIOk1nIElDGIujVng");
	var mask_4_graphics_128 = new cjs.Graphics().p("ApnJWIOq1xIEmDGIurVxg");
	var mask_4_graphics_129 = new cjs.Graphics().p("AprJbIOx18IEmDGIuxV8g");
	var mask_4_graphics_130 = new cjs.Graphics().p("ApvJhIO52HIEmDGIu5WHg");
	var mask_4_graphics_131 = new cjs.Graphics().p("ApyJmIPA2RIElDGIvAWRg");
	var mask_4_graphics_132 = new cjs.Graphics().p("Ap2JrIPH2bIEmDGIvHWbg");
	var mask_4_graphics_133 = new cjs.Graphics().p("Ap5JxIPO2nIElDGIvOWng");
	var mask_4_graphics_134 = new cjs.Graphics().p("Ap9J2IPV2xIEmDGIvVWxg");
	var mask_4_graphics_135 = new cjs.Graphics().p("AqAJ7IPc27IElDGIvcW7g");
	var mask_4_graphics_136 = new cjs.Graphics().p("AqEKBIPk3HIElDGIvjXHg");
	var mask_4_graphics_137 = new cjs.Graphics().p("AqIKGIPr3RIEmDGIvrXRg");
	var mask_4_graphics_138 = new cjs.Graphics().p("AqLKLIPy3bIElDGIvyXbg");
	var mask_4_graphics_139 = new cjs.Graphics().p("AqPKQIP53lIEmDGIv5Xlg");
	var mask_4_graphics_140 = new cjs.Graphics().p("AqSKWIQA3xIElDGIwAXxg");
	var mask_4_graphics_141 = new cjs.Graphics().p("AqWKbIQI37IElDGIwHX7g");
	var mask_4_graphics_142 = new cjs.Graphics().p("ABIWyIQQ4GIElDFIwPYHg");
	var mask_4_graphics_143 = new cjs.Graphics().p("AqvLAIQ55FIEmDGIw6ZFg");
	var mask_4_graphics_144 = new cjs.Graphics().p("AAeWyIRl6GIEmDGIxmaGg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_4_graphics_9,x:93,y:165.5}).wait(1).to({graphics:mask_4_graphics_10,x:167.3,y:314.1}).wait(1).to({graphics:mask_4_graphics_11,x:167.7,y:313.6}).wait(1).to({graphics:mask_4_graphics_12,x:168.1,y:313}).wait(1).to({graphics:mask_4_graphics_13,x:168.4,y:312.5}).wait(1).to({graphics:mask_4_graphics_14,x:168.8,y:312}).wait(1).to({graphics:mask_4_graphics_15,x:169.1,y:311.5}).wait(1).to({graphics:mask_4_graphics_16,x:169.5,y:310.9}).wait(1).to({graphics:mask_4_graphics_17,x:169.8,y:310.4}).wait(1).to({graphics:mask_4_graphics_18,x:170.2,y:309.9}).wait(1).to({graphics:mask_4_graphics_19,x:170.6,y:309.3}).wait(1).to({graphics:mask_4_graphics_20,x:170.9,y:308.8}).wait(1).to({graphics:mask_4_graphics_21,x:171.3,y:308.3}).wait(1).to({graphics:mask_4_graphics_22,x:171.6,y:307.7}).wait(1).to({graphics:mask_4_graphics_23,x:172,y:307.2}).wait(1).to({graphics:mask_4_graphics_24,x:172.3,y:306.7}).wait(1).to({graphics:mask_4_graphics_25,x:172.7,y:306.1}).wait(1).to({graphics:mask_4_graphics_26,x:173.1,y:305.6}).wait(1).to({graphics:mask_4_graphics_27,x:173.4,y:305.1}).wait(1).to({graphics:mask_4_graphics_28,x:173.8,y:304.6}).wait(1).to({graphics:mask_4_graphics_29,x:174.1,y:304}).wait(1).to({graphics:mask_4_graphics_30,x:174.5,y:303.5}).wait(1).to({graphics:mask_4_graphics_31,x:174.8,y:303}).wait(1).to({graphics:mask_4_graphics_32,x:175.2,y:302.4}).wait(1).to({graphics:mask_4_graphics_33,x:175.5,y:301.9}).wait(1).to({graphics:mask_4_graphics_34,x:175.9,y:301.4}).wait(1).to({graphics:mask_4_graphics_35,x:176.2,y:300.8}).wait(1).to({graphics:mask_4_graphics_36,x:176.6,y:300.3}).wait(1).to({graphics:mask_4_graphics_37,x:177,y:299.8}).wait(1).to({graphics:mask_4_graphics_38,x:177.3,y:299.2}).wait(1).to({graphics:mask_4_graphics_39,x:177.7,y:298.7}).wait(1).to({graphics:mask_4_graphics_40,x:178,y:298.2}).wait(1).to({graphics:mask_4_graphics_41,x:178.4,y:297.7}).wait(1).to({graphics:mask_4_graphics_42,x:178.7,y:297.1}).wait(1).to({graphics:mask_4_graphics_43,x:179.1,y:296.6}).wait(1).to({graphics:mask_4_graphics_44,x:179.5,y:296.1}).wait(1).to({graphics:mask_4_graphics_45,x:179.8,y:295.6}).wait(1).to({graphics:mask_4_graphics_46,x:180.2,y:295}).wait(1).to({graphics:mask_4_graphics_47,x:180.5,y:294.5}).wait(1).to({graphics:mask_4_graphics_48,x:180.9,y:294}).wait(1).to({graphics:mask_4_graphics_49,x:181.2,y:293.4}).wait(1).to({graphics:mask_4_graphics_50,x:181.6,y:292.9}).wait(1).to({graphics:mask_4_graphics_51,x:182,y:292.4}).wait(1).to({graphics:mask_4_graphics_52,x:182.3,y:291.8}).wait(1).to({graphics:mask_4_graphics_53,x:182.7,y:291.3}).wait(1).to({graphics:mask_4_graphics_54,x:183,y:290.8}).wait(1).to({graphics:mask_4_graphics_55,x:183.4,y:290.3}).wait(1).to({graphics:mask_4_graphics_56,x:183.7,y:289.7}).wait(1).to({graphics:mask_4_graphics_57,x:184.1,y:289.2}).wait(1).to({graphics:mask_4_graphics_58,x:184.5,y:288.7}).wait(1).to({graphics:mask_4_graphics_59,x:184.8,y:288.1}).wait(1).to({graphics:mask_4_graphics_60,x:185.2,y:287.6}).wait(1).to({graphics:mask_4_graphics_61,x:185.5,y:287.1}).wait(1).to({graphics:mask_4_graphics_62,x:185.9,y:286.5}).wait(1).to({graphics:mask_4_graphics_63,x:186.2,y:286}).wait(1).to({graphics:mask_4_graphics_64,x:186.6,y:285.5}).wait(1).to({graphics:mask_4_graphics_65,x:187,y:284.9}).wait(1).to({graphics:mask_4_graphics_66,x:187.3,y:284.4}).wait(1).to({graphics:mask_4_graphics_67,x:187.7,y:283.9}).wait(1).to({graphics:mask_4_graphics_68,x:188,y:283.4}).wait(1).to({graphics:mask_4_graphics_69,x:188.4,y:282.8}).wait(1).to({graphics:mask_4_graphics_70,x:188.7,y:282.3}).wait(1).to({graphics:mask_4_graphics_71,x:189.1,y:281.8}).wait(1).to({graphics:mask_4_graphics_72,x:189.5,y:281.2}).wait(1).to({graphics:mask_4_graphics_73,x:189.8,y:280.7}).wait(1).to({graphics:mask_4_graphics_74,x:190.2,y:280.2}).wait(1).to({graphics:mask_4_graphics_75,x:190.5,y:279.6}).wait(1).to({graphics:mask_4_graphics_76,x:190.9,y:279.1}).wait(1).to({graphics:mask_4_graphics_77,x:191.2,y:278.6}).wait(1).to({graphics:mask_4_graphics_78,x:191.6,y:278}).wait(1).to({graphics:mask_4_graphics_79,x:191.9,y:277.5}).wait(1).to({graphics:mask_4_graphics_80,x:192.3,y:277}).wait(1).to({graphics:mask_4_graphics_81,x:192.7,y:276.5}).wait(1).to({graphics:mask_4_graphics_82,x:193,y:275.9}).wait(1).to({graphics:mask_4_graphics_83,x:193.4,y:275.4}).wait(1).to({graphics:mask_4_graphics_84,x:193.7,y:274.9}).wait(1).to({graphics:mask_4_graphics_85,x:194.1,y:274.3}).wait(1).to({graphics:mask_4_graphics_86,x:194.4,y:273.8}).wait(1).to({graphics:mask_4_graphics_87,x:194.8,y:273.3}).wait(1).to({graphics:mask_4_graphics_88,x:195.2,y:272.7}).wait(1).to({graphics:mask_4_graphics_89,x:195.5,y:272.2}).wait(1).to({graphics:mask_4_graphics_90,x:195.9,y:271.7}).wait(1).to({graphics:mask_4_graphics_91,x:196.2,y:271.1}).wait(1).to({graphics:mask_4_graphics_92,x:196.6,y:270.6}).wait(1).to({graphics:mask_4_graphics_93,x:196.9,y:270.1}).wait(1).to({graphics:mask_4_graphics_94,x:197.3,y:269.6}).wait(1).to({graphics:mask_4_graphics_95,x:197.7,y:269}).wait(1).to({graphics:mask_4_graphics_96,x:198,y:268.5}).wait(1).to({graphics:mask_4_graphics_97,x:198.4,y:268}).wait(1).to({graphics:mask_4_graphics_98,x:198.7,y:267.4}).wait(1).to({graphics:mask_4_graphics_99,x:199.1,y:266.9}).wait(1).to({graphics:mask_4_graphics_100,x:199.4,y:266.4}).wait(1).to({graphics:mask_4_graphics_101,x:199.8,y:265.8}).wait(1).to({graphics:mask_4_graphics_102,x:200.2,y:265.3}).wait(1).to({graphics:mask_4_graphics_103,x:200.5,y:264.8}).wait(1).to({graphics:mask_4_graphics_104,x:200.9,y:264.3}).wait(1).to({graphics:mask_4_graphics_105,x:201.2,y:263.7}).wait(1).to({graphics:mask_4_graphics_106,x:201.6,y:263.2}).wait(1).to({graphics:mask_4_graphics_107,x:201.9,y:262.7}).wait(1).to({graphics:mask_4_graphics_108,x:202.3,y:262.1}).wait(1).to({graphics:mask_4_graphics_109,x:202.7,y:261.6}).wait(1).to({graphics:mask_4_graphics_110,x:203,y:261.1}).wait(1).to({graphics:mask_4_graphics_111,x:203.4,y:260.6}).wait(1).to({graphics:mask_4_graphics_112,x:203.7,y:260}).wait(1).to({graphics:mask_4_graphics_113,x:204.1,y:259.5}).wait(1).to({graphics:mask_4_graphics_114,x:204.4,y:259}).wait(1).to({graphics:mask_4_graphics_115,x:204.8,y:258.4}).wait(1).to({graphics:mask_4_graphics_116,x:205.2,y:257.9}).wait(1).to({graphics:mask_4_graphics_117,x:205.5,y:257.4}).wait(1).to({graphics:mask_4_graphics_118,x:205.9,y:256.8}).wait(1).to({graphics:mask_4_graphics_119,x:206.2,y:256.3}).wait(1).to({graphics:mask_4_graphics_120,x:206.6,y:255.8}).wait(1).to({graphics:mask_4_graphics_121,x:206.9,y:255.3}).wait(1).to({graphics:mask_4_graphics_122,x:207.3,y:254.7}).wait(1).to({graphics:mask_4_graphics_123,x:207.6,y:254.2}).wait(1).to({graphics:mask_4_graphics_124,x:208,y:253.7}).wait(1).to({graphics:mask_4_graphics_125,x:208.3,y:253.1}).wait(1).to({graphics:mask_4_graphics_126,x:208.7,y:252.6}).wait(1).to({graphics:mask_4_graphics_127,x:209.1,y:252.1}).wait(1).to({graphics:mask_4_graphics_128,x:209.4,y:251.5}).wait(1).to({graphics:mask_4_graphics_129,x:209.8,y:251}).wait(1).to({graphics:mask_4_graphics_130,x:210.1,y:250.5}).wait(1).to({graphics:mask_4_graphics_131,x:210.5,y:249.9}).wait(1).to({graphics:mask_4_graphics_132,x:210.8,y:249.4}).wait(1).to({graphics:mask_4_graphics_133,x:211.2,y:248.9}).wait(1).to({graphics:mask_4_graphics_134,x:211.6,y:248.4}).wait(1).to({graphics:mask_4_graphics_135,x:211.9,y:247.8}).wait(1).to({graphics:mask_4_graphics_136,x:212.3,y:247.3}).wait(1).to({graphics:mask_4_graphics_137,x:212.6,y:246.8}).wait(1).to({graphics:mask_4_graphics_138,x:213,y:246.2}).wait(1).to({graphics:mask_4_graphics_139,x:213.3,y:245.7}).wait(1).to({graphics:mask_4_graphics_140,x:213.7,y:245.2}).wait(1).to({graphics:mask_4_graphics_141,x:214.1,y:244.6}).wait(1).to({graphics:mask_4_graphics_142,x:140.5,y:165.6}).wait(1).to({graphics:mask_4_graphics_143,x:216.6,y:240.9}).wait(1).to({graphics:mask_4_graphics_144,x:144.9,y:165.6}).wait(390));

	// Layer 2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(20,1,1).p("AnQLkQEIj6DrmYQDsmYDCmd");
	this.shape_5.setTransform(216.5,235.5);
	this.shape_5._off = true;

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(9).to({_off:false},0).wait(525));

	// Letter
	this.instance_4 = new lib.Symbol1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(275,275);
	this.instance_4.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(534));

	// Background
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_6.setTransform(275,275,3.373,2.543);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_7.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).wait(534));

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