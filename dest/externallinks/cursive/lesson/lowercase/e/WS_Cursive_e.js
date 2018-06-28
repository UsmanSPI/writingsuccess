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


(lib.e = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A22R6Qimh9AAjYQAAjlJv10QBbi3B1hsQCViRCrAAQDHgBCOBpQCdB1AADGQAAB1iMDIIlIF2Qk1EylxEfIgRAaQhXCIAABxQAAB8CIAAQMFAATTzaQCRhrECkKQB0hEA2AAQCNAAAACjQgIBojUDsIjUDuIlVFUQoDHAmCDhQkKCij6BTQkVBfj/AAQjbAAiWhvgAndtNQg6AAjYFiIj2G8IFRmKQETlRAAg7QAAgPgRgJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-162.9,-125.7,325.8,251.5);


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


(lib.ar2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(48.5,-50.6,1,1,65.5,0,0,0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0.1,rotation:31.8,guide:{path:[48.5,-50.4,-9.2,-28.3,-42.7,42.1]}},119).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AA1kPIBIhMICkCaIhIBMg");
	var mask_graphics_1 = new cjs.Graphics().p("Ah5giIBQhUICjCZIhQBUg");
	var mask_graphics_2 = new cjs.Graphics().p("Ah8geIBWhcICkCZIhYBcg");
	var mask_graphics_3 = new cjs.Graphics().p("AiAgaIBehkICjCZIheBkg");
	var mask_graphics_4 = new cjs.Graphics().p("AiEgWIBmhsICjCaIhmBrg");
	var mask_graphics_5 = new cjs.Graphics().p("AiIgTIBuhzICjCaIhuBzg");
	var mask_graphics_6 = new cjs.Graphics().p("AiMgPIB1h7ICkCaIh1B7g");
	var mask_graphics_7 = new cjs.Graphics().p("AiPgLIB8iDICjCaIh8CDg");
	var mask_graphics_8 = new cjs.Graphics().p("AiTgHICEiLICjCaIiECLg");
	var mask_graphics_9 = new cjs.Graphics().p("AiXgDICMiTICjCaIiLCTg");
	var mask_graphics_10 = new cjs.Graphics().p("AiaAAICSiaICjCaIiSCbg");
	var mask_graphics_11 = new cjs.Graphics().p("AieAEICaiiICjCbIiaCig");
	var mask_graphics_12 = new cjs.Graphics().p("AiiAIICiiqICjCbIiiCqg");
	var mask_graphics_13 = new cjs.Graphics().p("AilAMICniyIClCbIioCyg");
	var mask_graphics_14 = new cjs.Graphics().p("AipAQICvi6ICkCbIivC6g");
	var mask_graphics_15 = new cjs.Graphics().p("AitAVIC3jDICkCbIi3DCg");
	var mask_graphics_16 = new cjs.Graphics().p("AixAYIC/jKICkCbIi/DKg");
	var mask_graphics_17 = new cjs.Graphics().p("Ai1AcIDGjSIClCbIjGDSg");
	var mask_graphics_18 = new cjs.Graphics().p("Ai4AgIDNjaICkCbIjNDag");
	var mask_graphics_19 = new cjs.Graphics().p("Ai8AkIDVjiICkCbIjVDig");
	var mask_graphics_20 = new cjs.Graphics().p("AjAAoIDdjqICkCbIjdDqg");
	var mask_graphics_21 = new cjs.Graphics().p("AjEAsIDkjyIClCbIjlDyg");
	var mask_graphics_22 = new cjs.Graphics().p("AjHAwIDrj6ICkCbIjrD6g");
	var mask_graphics_23 = new cjs.Graphics().p("AjLA0IDzkCICkCbIjzECg");
	var mask_graphics_24 = new cjs.Graphics().p("AjPA4ID7kJICkCaIj7EJg");
	var mask_graphics_25 = new cjs.Graphics().p("AjSA8IEBkRIClCaIkCERg");
	var mask_graphics_26 = new cjs.Graphics().p("AjWBAIEJkZICkCaIkJEZg");
	var mask_graphics_27 = new cjs.Graphics().p("AjaBEIERkhICkCaIkQEhg");
	var mask_graphics_28 = new cjs.Graphics().p("AjeBIIEZkpICkCaIkYEqg");
	var mask_graphics_29 = new cjs.Graphics().p("AjiBMIEgkxIClCaIkgEyg");
	var mask_graphics_30 = new cjs.Graphics().p("AjlBQIEnk5ICkCaIknE5g");
	var mask_graphics_31 = new cjs.Graphics().p("AjpBUIEvlBICkCaIkvFBg");
	var mask_graphics_32 = new cjs.Graphics().p("AjsBYIE1lJIClCaIk3FJg");
	var mask_graphics_33 = new cjs.Graphics().p("AjwBcIE9lRICkCaIk9FRg");
	var mask_graphics_34 = new cjs.Graphics().p("Aj0BgIFFlZICkCaIlFFZg");
	var mask_graphics_35 = new cjs.Graphics().p("Aj4BjIFNlgICkCaIlNFhg");
	var mask_graphics_36 = new cjs.Graphics().p("Aj7BnIFTloIClCaIlUFpg");
	var mask_graphics_37 = new cjs.Graphics().p("Aj/BrIFblwICkCaIlbFxg");
	var mask_graphics_38 = new cjs.Graphics().p("AkDBvIFjl4ICkCaIljF5g");
	var mask_graphics_39 = new cjs.Graphics().p("AkHB0IFrmBICkCaIlrGBg");
	var mask_graphics_40 = new cjs.Graphics().p("AkLB4IFymJIClCaIlzGJg");
	var mask_graphics_41 = new cjs.Graphics().p("AkOB7IF5mQICkCaIl5GRg");
	var mask_graphics_42 = new cjs.Graphics().p("AkSB/IGBmYICkCaImBGZg");
	var mask_graphics_43 = new cjs.Graphics().p("AkWCDIGJmgICkCbImIGgg");
	var mask_graphics_44 = new cjs.Graphics().p("AkZCHIGPmoIClCbImQGog");
	var mask_graphics_45 = new cjs.Graphics().p("AkdCMIGXmxICkCbImXGwg");
	var mask_graphics_46 = new cjs.Graphics().p("AkhCQIGfm5ICkCbImfG4g");
	var mask_graphics_47 = new cjs.Graphics().p("AklCTIGnnAICkCbImmHAg");
	var mask_graphics_48 = new cjs.Graphics().p("AkoCXIGtnIIClCbImuHIg");
	var mask_graphics_49 = new cjs.Graphics().p("AksCbIG1nQICkCbIm1HQg");
	var mask_graphics_50 = new cjs.Graphics().p("AkwCfIG9nYICkCbIm9HYg");
	var mask_graphics_51 = new cjs.Graphics().p("Ak0CjIHEngIClCbInFHgg");
	var mask_graphics_52 = new cjs.Graphics().p("Ak3CnIHLnoICkCbInLHog");
	var mask_graphics_53 = new cjs.Graphics().p("Ak7CrIHTnwICkCbInTHwg");
	var mask_graphics_54 = new cjs.Graphics().p("Ak/CvIHbn4ICkCbInbH4g");
	var mask_graphics_55 = new cjs.Graphics().p("AlCCzIHhoAIClCbInjIAg");
	var mask_graphics_56 = new cjs.Graphics().p("AlGC3IHpoIICkCbInpIIg");
	var mask_graphics_57 = new cjs.Graphics().p("AlKC7IHxoQICkCbInxIQg");
	var mask_graphics_58 = new cjs.Graphics().p("AlOC/IH5oYICkCbIn5IYg");
	var mask_graphics_59 = new cjs.Graphics().p("AlSDDIIAogIClCbIoAIgg");
	var mask_graphics_60 = new cjs.Graphics().p("AlWDGIIIonICkCbIoHIog");
	var mask_graphics_61 = new cjs.Graphics().p("AlZDKIIPovICkCbIoPIvg");
	var mask_graphics_62 = new cjs.Graphics().p("AldDOIIWo3IClCbIoXI3g");
	var mask_graphics_63 = new cjs.Graphics().p("AlhDTIIeo/IClCaIoeI/g");
	var mask_graphics_64 = new cjs.Graphics().p("AlkDXIIlpHICkCaIolJHg");
	var mask_graphics_65 = new cjs.Graphics().p("AloDbIItpPICkCaIotJPg");
	var mask_graphics_66 = new cjs.Graphics().p("AlsDeII0pWIClCaIo0JXg");
	var mask_graphics_67 = new cjs.Graphics().p("AlwDiII8peIClCaIo8Jfg");
	var mask_graphics_68 = new cjs.Graphics().p("Al0DmIJEpmICkCaIpDJng");
	var mask_graphics_69 = new cjs.Graphics().p("Al3DqIJLpuICkCaIpLJvg");
	var mask_graphics_70 = new cjs.Graphics().p("Al7DvIJSp3IClCbIpTJ2g");
	var mask_graphics_71 = new cjs.Graphics().p("Al/DzIJap/ICkCbIpaJ+g");
	var mask_graphics_72 = new cjs.Graphics().p("AmCD2IJhqGICkCbIphKGg");
	var mask_graphics_73 = new cjs.Graphics().p("AmGD6IJoqOIClCbIppKOg");
	var mask_graphics_74 = new cjs.Graphics().p("AmKD+IJwqWIClCbIpxKWg");
	var mask_graphics_75 = new cjs.Graphics().p("AmNECIJ3qeICkCbIp3Keg");
	var mask_graphics_76 = new cjs.Graphics().p("AmREGIJ/qmICkCbIp/Kmg");
	var mask_graphics_77 = new cjs.Graphics().p("AmVEKIKGquIClCbIqGKug");
	var mask_graphics_78 = new cjs.Graphics().p("AmZEOIKOq2IClCbIqOK2g");
	var mask_graphics_79 = new cjs.Graphics().p("AmdESIKWq+ICkCbIqVK+g");
	var mask_graphics_80 = new cjs.Graphics().p("AmgEWIKdrGICkCbIqdLGg");
	var mask_graphics_81 = new cjs.Graphics().p("AmkEaIKkrOIClCbIqlLOg");
	var mask_graphics_82 = new cjs.Graphics().p("AmoEeIKsrWIClCbIqsLWg");
	var mask_graphics_83 = new cjs.Graphics().p("AmsEiIK0reICkCbIqzLeg");
	var mask_graphics_84 = new cjs.Graphics().p("AmvEmIK7rmICkCbIq7Lmg");
	var mask_graphics_85 = new cjs.Graphics().p("AmzEqILCruIClCbIrDLug");
	var mask_graphics_86 = new cjs.Graphics().p("Am3EuILKr2IClCbIrKL2g");
	var mask_graphics_87 = new cjs.Graphics().p("Am6EyILRr+ICkCbIrRL+g");
	var mask_graphics_88 = new cjs.Graphics().p("Am+E2ILZsGICkCbIrZMGg");
	var mask_graphics_89 = new cjs.Graphics().p("AnCE6ILgsOIClCbIrgMOg");
	var mask_graphics_90 = new cjs.Graphics().p("AnGE+ILosWICkCcIroMUg");
	var mask_graphics_91 = new cjs.Graphics().p("AnJFBILvsdICkCcIrvMcg");
	var mask_graphics_92 = new cjs.Graphics().p("AnNFGIL2smIClCcIr3Mkg");
	var mask_graphics_93 = new cjs.Graphics().p("AnRFKIL+suIClCcIr/Msg");
	var mask_graphics_94 = new cjs.Graphics().p("AnUFOIMFs2ICkCcIsFM0g");
	var mask_graphics_95 = new cjs.Graphics().p("AnYFSIMNs+ICkCcIsNM9g");
	var mask_graphics_96 = new cjs.Graphics().p("AncFWIMUtFIClCbIsVNEg");
	var mask_graphics_97 = new cjs.Graphics().p("AngFaIMctNIClCbIscNMg");
	var mask_graphics_98 = new cjs.Graphics().p("AnjFdIMjtUICkCbIsjNUg");
	var mask_graphics_99 = new cjs.Graphics().p("AnnFhIMrtcICkCbIsrNcg");
	var mask_graphics_100 = new cjs.Graphics().p("AnrFlIMytkIClCaIsyNlg");
	var mask_graphics_101 = new cjs.Graphics().p("AnvFpIM6tsIClCaIs6Ntg");
	var mask_graphics_102 = new cjs.Graphics().p("AnzFtINCt0ICkCaItBN1g");
	var mask_graphics_103 = new cjs.Graphics().p("An2FxINJt8ICkCaItJN9g");
	var mask_graphics_104 = new cjs.Graphics().p("An6F1INQuEIClCaItROFg");
	var mask_graphics_105 = new cjs.Graphics().p("An+F5INYuMIClCbItYOMg");
	var mask_graphics_106 = new cjs.Graphics().p("AoBF9INfuUICkCbItfOUg");
	var mask_graphics_107 = new cjs.Graphics().p("AoFGBINnucICkCbItnOcg");
	var mask_graphics_108 = new cjs.Graphics().p("AoJGFINuukIClCbItvOkg");
	var mask_graphics_109 = new cjs.Graphics().p("AoNGJIN2usIClCbIt2Osg");
	var mask_graphics_110 = new cjs.Graphics().p("AoQGNIN9u0ICkCbIt9O0g");
	var mask_graphics_111 = new cjs.Graphics().p("AoUGRIOEu8IClCbIuEO8g");
	var mask_graphics_112 = new cjs.Graphics().p("AoYGVIOMvEIClCbIuMPEg");
	var mask_graphics_113 = new cjs.Graphics().p("AocGZIOUvMICkCbIuTPMg");
	var mask_graphics_114 = new cjs.Graphics().p("AofGdIObvUICkCbIubPUg");
	var mask_graphics_115 = new cjs.Graphics().p("AojGhIOivcIClCbIujPcg");
	var mask_graphics_116 = new cjs.Graphics().p("AonGlIOqvkIClCbIuqPkg");
	var mask_graphics_117 = new cjs.Graphics().p("AoqGpIOxvsICkCbIuxPsg");
	var mask_graphics_118 = new cjs.Graphics().p("AouGtIO5v0ICkCbIu5P0g");
	var mask_graphics_119 = new cjs.Graphics().p("AoyGxIPAv8IClCbIvAP8g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:28.9,y:-34.8}).wait(1).to({graphics:mask_graphics_1,x:45.6,y:-57.7}).wait(1).to({graphics:mask_graphics_2,x:45.2,y:-57.3}).wait(1).to({graphics:mask_graphics_3,x:44.8,y:-56.9}).wait(1).to({graphics:mask_graphics_4,x:44.5,y:-56.5}).wait(1).to({graphics:mask_graphics_5,x:44.1,y:-56.1}).wait(1).to({graphics:mask_graphics_6,x:43.7,y:-55.7}).wait(1).to({graphics:mask_graphics_7,x:43.3,y:-55.3}).wait(1).to({graphics:mask_graphics_8,x:43,y:-54.9}).wait(1).to({graphics:mask_graphics_9,x:42.6,y:-54.5}).wait(1).to({graphics:mask_graphics_10,x:42.2,y:-54.2}).wait(1).to({graphics:mask_graphics_11,x:41.9,y:-53.8}).wait(1).to({graphics:mask_graphics_12,x:41.5,y:-53.4}).wait(1).to({graphics:mask_graphics_13,x:41.1,y:-53}).wait(1).to({graphics:mask_graphics_14,x:40.7,y:-52.6}).wait(1).to({graphics:mask_graphics_15,x:40.4,y:-52.2}).wait(1).to({graphics:mask_graphics_16,x:40,y:-51.8}).wait(1).to({graphics:mask_graphics_17,x:39.6,y:-51.4}).wait(1).to({graphics:mask_graphics_18,x:39.2,y:-51}).wait(1).to({graphics:mask_graphics_19,x:38.9,y:-50.6}).wait(1).to({graphics:mask_graphics_20,x:38.5,y:-50.2}).wait(1).to({graphics:mask_graphics_21,x:38.1,y:-49.8}).wait(1).to({graphics:mask_graphics_22,x:37.7,y:-49.4}).wait(1).to({graphics:mask_graphics_23,x:37.4,y:-49}).wait(1).to({graphics:mask_graphics_24,x:37,y:-48.6}).wait(1).to({graphics:mask_graphics_25,x:36.6,y:-48.2}).wait(1).to({graphics:mask_graphics_26,x:36.2,y:-47.8}).wait(1).to({graphics:mask_graphics_27,x:35.9,y:-47.4}).wait(1).to({graphics:mask_graphics_28,x:35.5,y:-47}).wait(1).to({graphics:mask_graphics_29,x:35.1,y:-46.6}).wait(1).to({graphics:mask_graphics_30,x:34.8,y:-46.3}).wait(1).to({graphics:mask_graphics_31,x:34.4,y:-45.9}).wait(1).to({graphics:mask_graphics_32,x:34,y:-45.5}).wait(1).to({graphics:mask_graphics_33,x:33.6,y:-45.1}).wait(1).to({graphics:mask_graphics_34,x:33.3,y:-44.7}).wait(1).to({graphics:mask_graphics_35,x:32.9,y:-44.3}).wait(1).to({graphics:mask_graphics_36,x:32.5,y:-43.9}).wait(1).to({graphics:mask_graphics_37,x:32.1,y:-43.5}).wait(1).to({graphics:mask_graphics_38,x:31.8,y:-43.1}).wait(1).to({graphics:mask_graphics_39,x:31.4,y:-42.7}).wait(1).to({graphics:mask_graphics_40,x:31,y:-42.3}).wait(1).to({graphics:mask_graphics_41,x:30.6,y:-41.9}).wait(1).to({graphics:mask_graphics_42,x:30.3,y:-41.5}).wait(1).to({graphics:mask_graphics_43,x:29.9,y:-41.1}).wait(1).to({graphics:mask_graphics_44,x:29.5,y:-40.7}).wait(1).to({graphics:mask_graphics_45,x:29.1,y:-40.3}).wait(1).to({graphics:mask_graphics_46,x:28.8,y:-39.9}).wait(1).to({graphics:mask_graphics_47,x:28.4,y:-39.5}).wait(1).to({graphics:mask_graphics_48,x:28,y:-39.1}).wait(1).to({graphics:mask_graphics_49,x:27.6,y:-38.7}).wait(1).to({graphics:mask_graphics_50,x:27.3,y:-38.4}).wait(1).to({graphics:mask_graphics_51,x:26.9,y:-38}).wait(1).to({graphics:mask_graphics_52,x:26.5,y:-37.6}).wait(1).to({graphics:mask_graphics_53,x:26.2,y:-37.2}).wait(1).to({graphics:mask_graphics_54,x:25.8,y:-36.8}).wait(1).to({graphics:mask_graphics_55,x:25.4,y:-36.4}).wait(1).to({graphics:mask_graphics_56,x:25,y:-36}).wait(1).to({graphics:mask_graphics_57,x:24.7,y:-35.6}).wait(1).to({graphics:mask_graphics_58,x:24.3,y:-35.2}).wait(1).to({graphics:mask_graphics_59,x:23.9,y:-34.8}).wait(1).to({graphics:mask_graphics_60,x:23.6,y:-34.4}).wait(1).to({graphics:mask_graphics_61,x:23.2,y:-34}).wait(1).to({graphics:mask_graphics_62,x:22.8,y:-33.6}).wait(1).to({graphics:mask_graphics_63,x:22.4,y:-33.2}).wait(1).to({graphics:mask_graphics_64,x:22.1,y:-32.8}).wait(1).to({graphics:mask_graphics_65,x:21.7,y:-32.4}).wait(1).to({graphics:mask_graphics_66,x:21.3,y:-32}).wait(1).to({graphics:mask_graphics_67,x:20.9,y:-31.6}).wait(1).to({graphics:mask_graphics_68,x:20.6,y:-31.2}).wait(1).to({graphics:mask_graphics_69,x:20.2,y:-30.8}).wait(1).to({graphics:mask_graphics_70,x:19.8,y:-30.4}).wait(1).to({graphics:mask_graphics_71,x:19.5,y:-30}).wait(1).to({graphics:mask_graphics_72,x:19.1,y:-29.6}).wait(1).to({graphics:mask_graphics_73,x:18.7,y:-29.2}).wait(1).to({graphics:mask_graphics_74,x:18.3,y:-28.8}).wait(1).to({graphics:mask_graphics_75,x:18,y:-28.5}).wait(1).to({graphics:mask_graphics_76,x:17.6,y:-28.1}).wait(1).to({graphics:mask_graphics_77,x:17.2,y:-27.7}).wait(1).to({graphics:mask_graphics_78,x:16.8,y:-27.3}).wait(1).to({graphics:mask_graphics_79,x:16.5,y:-26.9}).wait(1).to({graphics:mask_graphics_80,x:16.1,y:-26.5}).wait(1).to({graphics:mask_graphics_81,x:15.7,y:-26.1}).wait(1).to({graphics:mask_graphics_82,x:15.3,y:-25.7}).wait(1).to({graphics:mask_graphics_83,x:15,y:-25.3}).wait(1).to({graphics:mask_graphics_84,x:14.6,y:-24.9}).wait(1).to({graphics:mask_graphics_85,x:14.2,y:-24.5}).wait(1).to({graphics:mask_graphics_86,x:13.8,y:-24.1}).wait(1).to({graphics:mask_graphics_87,x:13.5,y:-23.7}).wait(1).to({graphics:mask_graphics_88,x:13.1,y:-23.3}).wait(1).to({graphics:mask_graphics_89,x:12.7,y:-22.9}).wait(1).to({graphics:mask_graphics_90,x:12.4,y:-22.5}).wait(1).to({graphics:mask_graphics_91,x:12,y:-22.1}).wait(1).to({graphics:mask_graphics_92,x:11.6,y:-21.7}).wait(1).to({graphics:mask_graphics_93,x:11.2,y:-21.3}).wait(1).to({graphics:mask_graphics_94,x:10.9,y:-20.9}).wait(1).to({graphics:mask_graphics_95,x:10.5,y:-20.5}).wait(1).to({graphics:mask_graphics_96,x:10.1,y:-20.2}).wait(1).to({graphics:mask_graphics_97,x:9.7,y:-19.8}).wait(1).to({graphics:mask_graphics_98,x:9.4,y:-19.4}).wait(1).to({graphics:mask_graphics_99,x:9,y:-19}).wait(1).to({graphics:mask_graphics_100,x:8.6,y:-18.6}).wait(1).to({graphics:mask_graphics_101,x:8.2,y:-18.2}).wait(1).to({graphics:mask_graphics_102,x:7.9,y:-17.8}).wait(1).to({graphics:mask_graphics_103,x:7.5,y:-17.4}).wait(1).to({graphics:mask_graphics_104,x:7.1,y:-17}).wait(1).to({graphics:mask_graphics_105,x:6.7,y:-16.6}).wait(1).to({graphics:mask_graphics_106,x:6.4,y:-16.2}).wait(1).to({graphics:mask_graphics_107,x:6,y:-15.8}).wait(1).to({graphics:mask_graphics_108,x:5.6,y:-15.4}).wait(1).to({graphics:mask_graphics_109,x:5.2,y:-15}).wait(1).to({graphics:mask_graphics_110,x:4.9,y:-14.6}).wait(1).to({graphics:mask_graphics_111,x:4.5,y:-14.2}).wait(1).to({graphics:mask_graphics_112,x:4.1,y:-13.8}).wait(1).to({graphics:mask_graphics_113,x:3.8,y:-13.4}).wait(1).to({graphics:mask_graphics_114,x:3.4,y:-13}).wait(1).to({graphics:mask_graphics_115,x:3,y:-12.6}).wait(1).to({graphics:mask_graphics_116,x:2.6,y:-12.3}).wait(1).to({graphics:mask_graphics_117,x:2.3,y:-11.9}).wait(1).to({graphics:mask_graphics_118,x:1.9,y:-11.5}).wait(1).to({graphics:mask_graphics_119,x:1.5,y:-11.1}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AnIHQQFQrCJBjd");
	this.shape.setTransform(2.8,-4.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34.2,-61.9,21.2,20.3);


(lib.ar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-27,21.4,1,1,-135);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:33.2,y:-27},89).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AiggCIA+gvIBvCTIg9Aug");
	var mask_graphics_1 = new cjs.Graphics().p("AhZgvIBEg0IBvCTIhEA0g");
	var mask_graphics_2 = new cjs.Graphics().p("AhcgtIBKg4IBvCSIhKA5g");
	var mask_graphics_3 = new cjs.Graphics().p("AhggqIBRg9IBwCSIhRA9g");
	var mask_graphics_4 = new cjs.Graphics().p("AhjgoIBYhCIBuCTIhWBCg");
	var mask_graphics_5 = new cjs.Graphics().p("AhmglIBehHIBvCSIheBHg");
	var mask_graphics_6 = new cjs.Graphics().p("AhogjIBjhLIBuCSIhjBLg");
	var mask_graphics_7 = new cjs.Graphics().p("AhsghIBqhQIBvCTIhqBQg");
	var mask_graphics_8 = new cjs.Graphics().p("AhvgeIBvhVIBwCTIhwBUg");
	var mask_graphics_9 = new cjs.Graphics().p("AhygcIB1haIBwCTIh1Bag");
	var mask_graphics_10 = new cjs.Graphics().p("Ah1gaIB7heIBwCTIh7Beg");
	var mask_graphics_11 = new cjs.Graphics().p("Ah4gXICBhjIBwCSIiBBjg");
	var mask_graphics_12 = new cjs.Graphics().p("Ah7gVICHhnIBwCSIiHBog");
	var mask_graphics_13 = new cjs.Graphics().p("Ah+gSICOhtIBvCSIiOBtg");
	var mask_graphics_14 = new cjs.Graphics().p("AiBgQICThxIBxCSIiVBxg");
	var mask_graphics_15 = new cjs.Graphics().p("AiFgOICbh1IBwCSIibB1g");
	var mask_graphics_16 = new cjs.Graphics().p("AiIgMIChh6IBwCTIihB6g");
	var mask_graphics_17 = new cjs.Graphics().p("AiLgJICnh/IBwCSIinB/g");
	var mask_graphics_18 = new cjs.Graphics().p("AiOgHICtiEIBwCTIitCEg");
	var mask_graphics_19 = new cjs.Graphics().p("AiRgFICziIIBwCSIizCJg");
	var mask_graphics_20 = new cjs.Graphics().p("AiUgCIC5iNIBwCSIi5CNg");
	var mask_graphics_21 = new cjs.Graphics().p("AiXAAIC/iSIBwCTIi/CSg");
	var mask_graphics_22 = new cjs.Graphics().p("AibACIDGiWIBxCTIjGCWg");
	var mask_graphics_23 = new cjs.Graphics().p("AieAEIDMiaIBxCTIjMCag");
	var mask_graphics_24 = new cjs.Graphics().p("AihAGIDTifIBwCUIjTCfg");
	var mask_graphics_25 = new cjs.Graphics().p("AikAJIDZikIBwCUIjZCjg");
	var mask_graphics_26 = new cjs.Graphics().p("AinALIDfipIBwCUIjfCog");
	var mask_graphics_27 = new cjs.Graphics().p("AiqAOIDliuIBwCUIjlCtg");
	var mask_graphics_28 = new cjs.Graphics().p("AitAQIDriyIBwCTIjrCyg");
	var mask_graphics_29 = new cjs.Graphics().p("AiwASIDxi3IBwCUIjxC3g");
	var mask_graphics_30 = new cjs.Graphics().p("AizAVID3i8IBwCTIj3C8g");
	var mask_graphics_31 = new cjs.Graphics().p("Ai2AXID9jAIBwCTIj9DAg");
	var mask_graphics_32 = new cjs.Graphics().p("Ai5AZIEEjEIBvCTIkEDFg");
	var mask_graphics_33 = new cjs.Graphics().p("Ai8AbIEKjJIBvCUIkKDJg");
	var mask_graphics_34 = new cjs.Graphics().p("AjAAeIERjOIBwCTIkRDOg");
	var mask_graphics_35 = new cjs.Graphics().p("AjDAgIEXjTIBwCUIkXDTg");
	var mask_graphics_36 = new cjs.Graphics().p("AjGAiIEdjXIBwCTIkdDYg");
	var mask_graphics_37 = new cjs.Graphics().p("AjJAlIEjjcIBwCTIkjDdg");
	var mask_graphics_38 = new cjs.Graphics().p("AjMAnIEpjhIBwCUIkpDhg");
	var mask_graphics_39 = new cjs.Graphics().p("AjPAqIEvjmIBwCTIkvDmg");
	var mask_graphics_40 = new cjs.Graphics().p("AjSAsIE1jrIBwCUIk1Drg");
	var mask_graphics_41 = new cjs.Graphics().p("AjWAuIE9jvIBvCUIk7Dvg");
	var mask_graphics_42 = new cjs.Graphics().p("AjZAxIFCj0IBxCTIlCD0g");
	var mask_graphics_43 = new cjs.Graphics().p("AjcAzIFJj5IBwCUIlJD4g");
	var mask_graphics_44 = new cjs.Graphics().p("AjfA1IFPj9IBwCUIlPD9g");
	var mask_graphics_45 = new cjs.Graphics().p("AjiA4IFVkCIBwCTIlVECg");
	var mask_graphics_46 = new cjs.Graphics().p("AjlA6IFbkHIBwCUIlbEHg");
	var mask_graphics_47 = new cjs.Graphics().p("AjoA8IFhkLIBwCTIlhEMg");
	var mask_graphics_48 = new cjs.Graphics().p("AjrA/IFnkQIBwCTIlnEQg");
	var mask_graphics_49 = new cjs.Graphics().p("AjvBBIFukUIBxCTIluEVg");
	var mask_graphics_50 = new cjs.Graphics().p("AjyBEIF1kaIBvCUIlzEZg");
	var mask_graphics_51 = new cjs.Graphics().p("Aj1BGIF6kfIBxCUIl7Efg");
	var mask_graphics_52 = new cjs.Graphics().p("Aj4BIIGBkjIBvCUImAEjg");
	var mask_graphics_53 = new cjs.Graphics().p("Aj7BLIGHkoIBwCTImHEog");
	var mask_graphics_54 = new cjs.Graphics().p("Aj+BNIGNksIBwCTImNEtg");
	var mask_graphics_55 = new cjs.Graphics().p("AkBBQIGTkyIBwCTImTEyg");
	var mask_graphics_56 = new cjs.Graphics().p("AkEBSIGZk2IBwCTImZE2g");
	var mask_graphics_57 = new cjs.Graphics().p("AkHBUIGfk7IBwCUImfE7g");
	var mask_graphics_58 = new cjs.Graphics().p("AkLBWIGmk/IBwCUImmE/g");
	var mask_graphics_59 = new cjs.Graphics().p("AkOBZIGtlEIBvCTImsFEg");
	var mask_graphics_60 = new cjs.Graphics().p("AkRBbIGzlJIBwCUImzFIg");
	var mask_graphics_61 = new cjs.Graphics().p("AkUBdIG5lNIBwCUIm5FNg");
	var mask_graphics_62 = new cjs.Graphics().p("AkXBgIG/lSIBwCTIm/FSg");
	var mask_graphics_63 = new cjs.Graphics().p("AkaBiIHFlXIBwCUInFFXg");
	var mask_graphics_64 = new cjs.Graphics().p("AkdBlIHLlcIBwCTInLFcg");
	var mask_graphics_65 = new cjs.Graphics().p("AkgBnIHRlgIBwCTInRFgg");
	var mask_graphics_66 = new cjs.Graphics().p("AkjBpIHXllIBwCUInXFlg");
	var mask_graphics_67 = new cjs.Graphics().p("AkmBsIHdlqIBwCUIndFpg");
	var mask_graphics_68 = new cjs.Graphics().p("AkpBuIHjlvIBxCUInlFvg");
	var mask_graphics_69 = new cjs.Graphics().p("AksBwIHplzIBxCUInrFzg");
	var mask_graphics_70 = new cjs.Graphics().p("AkwBzIHxl4IBwCTInxF4g");
	var mask_graphics_71 = new cjs.Graphics().p("AkzB1IH3l8IBwCTIn3F9g");
	var mask_graphics_72 = new cjs.Graphics().p("Ak2B4IH9mCIBwCTIn9GCg");
	var mask_graphics_73 = new cjs.Graphics().p("Ak5B6IIDmGIBwCTIoDGGg");
	var mask_graphics_74 = new cjs.Graphics().p("Ak8B8IIJmLIBwCUIoJGLg");
	var mask_graphics_75 = new cjs.Graphics().p("Ak/B/IIPmQIBwCUIoPGPg");
	var mask_graphics_76 = new cjs.Graphics().p("AlCCBIIVmUIBwCTIoVGUg");
	var mask_graphics_77 = new cjs.Graphics().p("AlGCDIIcmZIBxCUIocGZg");
	var mask_graphics_78 = new cjs.Graphics().p("AlJCFIIjmdIBvCUIohGdg");
	var mask_graphics_79 = new cjs.Graphics().p("AlMCIIIpmjIBwCUIopGig");
	var mask_graphics_80 = new cjs.Graphics().p("AlPCKIIvmnIBwCUIovGng");
	var mask_graphics_81 = new cjs.Graphics().p("AlSCNII1msIBwCTIo1Gsg");
	var mask_graphics_82 = new cjs.Graphics().p("AlVCPII7mwIBwCTIo7Gwg");
	var mask_graphics_83 = new cjs.Graphics().p("AlYCRIJBm1IBwCUIpBG1g");
	var mask_graphics_84 = new cjs.Graphics().p("AlbCUIJHm6IBwCTIpHG6g");
	var mask_graphics_85 = new cjs.Graphics().p("AleCWIJNm/IBwCUIpNG/g");
	var mask_graphics_86 = new cjs.Graphics().p("AlhCYIJTnDIBwCUIpTHDg");
	var mask_graphics_87 = new cjs.Graphics().p("AlkCbIJanIIBvCTIpaHIg");
	var mask_graphics_88 = new cjs.Graphics().p("AlnCdIJfnMIBxCTIphHNg");
	var mask_graphics_89 = new cjs.Graphics().p("AlrCgIJnnSIBwCTIpnHSg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-16.1,y:14.4}).wait(1).to({graphics:mask_graphics_1,x:-23.2,y:18.9}).wait(1).to({graphics:mask_graphics_2,x:-22.9,y:18.7}).wait(1).to({graphics:mask_graphics_3,x:-22.5,y:18.5}).wait(1).to({graphics:mask_graphics_4,x:-22.2,y:18.2}).wait(1).to({graphics:mask_graphics_5,x:-21.9,y:18}).wait(1).to({graphics:mask_graphics_6,x:-21.6,y:17.7}).wait(1).to({graphics:mask_graphics_7,x:-21.3,y:17.5}).wait(1).to({graphics:mask_graphics_8,x:-21,y:17.3}).wait(1).to({graphics:mask_graphics_9,x:-20.6,y:17}).wait(1).to({graphics:mask_graphics_10,x:-20.3,y:16.8}).wait(1).to({graphics:mask_graphics_11,x:-20,y:16.5}).wait(1).to({graphics:mask_graphics_12,x:-19.7,y:16.3}).wait(1).to({graphics:mask_graphics_13,x:-19.4,y:16.1}).wait(1).to({graphics:mask_graphics_14,x:-19.1,y:15.8}).wait(1).to({graphics:mask_graphics_15,x:-18.8,y:15.6}).wait(1).to({graphics:mask_graphics_16,x:-18.5,y:15.3}).wait(1).to({graphics:mask_graphics_17,x:-18.1,y:15.1}).wait(1).to({graphics:mask_graphics_18,x:-17.8,y:14.8}).wait(1).to({graphics:mask_graphics_19,x:-17.5,y:14.6}).wait(1).to({graphics:mask_graphics_20,x:-17.2,y:14.4}).wait(1).to({graphics:mask_graphics_21,x:-16.9,y:14.1}).wait(1).to({graphics:mask_graphics_22,x:-16.5,y:13.9}).wait(1).to({graphics:mask_graphics_23,x:-16.2,y:13.6}).wait(1).to({graphics:mask_graphics_24,x:-15.9,y:13.4}).wait(1).to({graphics:mask_graphics_25,x:-15.6,y:13.2}).wait(1).to({graphics:mask_graphics_26,x:-15.3,y:12.9}).wait(1).to({graphics:mask_graphics_27,x:-15,y:12.7}).wait(1).to({graphics:mask_graphics_28,x:-14.6,y:12.4}).wait(1).to({graphics:mask_graphics_29,x:-14.3,y:12.2}).wait(1).to({graphics:mask_graphics_30,x:-14,y:12}).wait(1).to({graphics:mask_graphics_31,x:-13.7,y:11.7}).wait(1).to({graphics:mask_graphics_32,x:-13.4,y:11.5}).wait(1).to({graphics:mask_graphics_33,x:-13.1,y:11.2}).wait(1).to({graphics:mask_graphics_34,x:-12.8,y:11}).wait(1).to({graphics:mask_graphics_35,x:-12.5,y:10.7}).wait(1).to({graphics:mask_graphics_36,x:-12.1,y:10.5}).wait(1).to({graphics:mask_graphics_37,x:-11.8,y:10.3}).wait(1).to({graphics:mask_graphics_38,x:-11.5,y:10}).wait(1).to({graphics:mask_graphics_39,x:-11.2,y:9.8}).wait(1).to({graphics:mask_graphics_40,x:-10.9,y:9.5}).wait(1).to({graphics:mask_graphics_41,x:-10.5,y:9.3}).wait(1).to({graphics:mask_graphics_42,x:-10.2,y:9}).wait(1).to({graphics:mask_graphics_43,x:-9.9,y:8.8}).wait(1).to({graphics:mask_graphics_44,x:-9.6,y:8.6}).wait(1).to({graphics:mask_graphics_45,x:-9.3,y:8.3}).wait(1).to({graphics:mask_graphics_46,x:-9,y:8.1}).wait(1).to({graphics:mask_graphics_47,x:-8.7,y:7.9}).wait(1).to({graphics:mask_graphics_48,x:-8.4,y:7.6}).wait(1).to({graphics:mask_graphics_49,x:-8,y:7.4}).wait(1).to({graphics:mask_graphics_50,x:-7.7,y:7.1}).wait(1).to({graphics:mask_graphics_51,x:-7.4,y:6.9}).wait(1).to({graphics:mask_graphics_52,x:-7.1,y:6.6}).wait(1).to({graphics:mask_graphics_53,x:-6.8,y:6.4}).wait(1).to({graphics:mask_graphics_54,x:-6.4,y:6.2}).wait(1).to({graphics:mask_graphics_55,x:-6.1,y:5.9}).wait(1).to({graphics:mask_graphics_56,x:-5.8,y:5.7}).wait(1).to({graphics:mask_graphics_57,x:-5.5,y:5.4}).wait(1).to({graphics:mask_graphics_58,x:-5.2,y:5.2}).wait(1).to({graphics:mask_graphics_59,x:-4.9,y:4.9}).wait(1).to({graphics:mask_graphics_60,x:-4.6,y:4.7}).wait(1).to({graphics:mask_graphics_61,x:-4.3,y:4.5}).wait(1).to({graphics:mask_graphics_62,x:-3.9,y:4.2}).wait(1).to({graphics:mask_graphics_63,x:-3.6,y:4}).wait(1).to({graphics:mask_graphics_64,x:-3.3,y:3.7}).wait(1).to({graphics:mask_graphics_65,x:-3,y:3.5}).wait(1).to({graphics:mask_graphics_66,x:-2.7,y:3.3}).wait(1).to({graphics:mask_graphics_67,x:-2.4,y:3}).wait(1).to({graphics:mask_graphics_68,x:-2,y:2.8}).wait(1).to({graphics:mask_graphics_69,x:-1.7,y:2.5}).wait(1).to({graphics:mask_graphics_70,x:-1.4,y:2.3}).wait(1).to({graphics:mask_graphics_71,x:-1.1,y:2.1}).wait(1).to({graphics:mask_graphics_72,x:-0.8,y:1.8}).wait(1).to({graphics:mask_graphics_73,x:-0.4,y:1.6}).wait(1).to({graphics:mask_graphics_74,x:-0.1,y:1.3}).wait(1).to({graphics:mask_graphics_75,x:0.2,y:1.1}).wait(1).to({graphics:mask_graphics_76,x:0.5,y:0.8}).wait(1).to({graphics:mask_graphics_77,x:0.8,y:0.6}).wait(1).to({graphics:mask_graphics_78,x:1.1,y:0.4}).wait(1).to({graphics:mask_graphics_79,x:1.4,y:0.1}).wait(1).to({graphics:mask_graphics_80,x:1.7,y:-0.1}).wait(1).to({graphics:mask_graphics_81,x:2.1,y:-0.4}).wait(1).to({graphics:mask_graphics_82,x:2.4,y:-0.6}).wait(1).to({graphics:mask_graphics_83,x:2.7,y:-0.8}).wait(1).to({graphics:mask_graphics_84,x:3,y:-1.1}).wait(1).to({graphics:mask_graphics_85,x:3.3,y:-1.3}).wait(1).to({graphics:mask_graphics_86,x:3.6,y:-1.6}).wait(1).to({graphics:mask_graphics_87,x:4,y:-1.8}).wait(1).to({graphics:mask_graphics_88,x:4.3,y:-2}).wait(1).to({graphics:mask_graphics_89,x:4.6,y:-2.3}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AjtEeQCxkJEqkx");
	this.shape.setTransform(3.5,-4.5,1,1,-167.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.7,9.5,22,21.7);


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
(lib.WS_Cursive_e = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_464 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(464).call(this.frame_464).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(151.8,308.2,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[151.9,308.2,218.6,256.8,240.3,224.9,262,192.9,260.6,185.2,259.3,177.5,253.6,175.5,248.3,173.6,247.2,172]}},125).wait(15).to({startPosition:0},0).to({guide:{path:[246.8,172.3,238.7,169.2,222.7,173.5,206.8,177.9,188.6,210.4,170.3,243.1,141.8,312.9,113.4,382.8,159,382.2,204.7,381.7,244.2,358.6,283.9,335.5,324.9,300.4,365.9,265.3,404.7,222.7,409.5,217.4,414.6,212.4]}},240).wait(16).to({startPosition:0},0).to({guide:{path:[416.9,212.2,407.5,141.6,475.5,146.7,493.1,148.2,509.7,156.7,555.2,179.9,598.5,164.4,614.3,158.7,621.4,142.5,628.4,126.7,634.3,110.3]}},59).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(246,172.1,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},125).wait(15).to({_off:false,x:416,y:211.1},0).to({_off:true},240).wait(76));

	// Layer 13
	this.instance_1 = new lib.ar2("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(166.9,131.1,1,1,5,0,0,0.9,-0.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(149).to({_off:false},0).wait(316));

	// Layer 11 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_267 = new cjs.Graphics().p("AHxZQICQhnIFbHqIiQBmg");
	var mask_graphics_268 = new cjs.Graphics().p("Aj/i5ICkh1IFaHoIijB1g");
	var mask_graphics_269 = new cjs.Graphics().p("AkIizIC3iCIFaHpIi3CCg");
	var mask_graphics_270 = new cjs.Graphics().p("AkSisIDKiQIFbHpIjKCQg");
	var mask_graphics_271 = new cjs.Graphics().p("AkcilIDeidIFbHoIjeCeg");
	var mask_graphics_272 = new cjs.Graphics().p("AklieIDxisIFaHpIjxCsg");
	var mask_graphics_273 = new cjs.Graphics().p("AkviXIEFi5IFaHoIkEC5g");
	var mask_graphics_274 = new cjs.Graphics().p("Ak5iQIEYjHIFbHoIkYDHg");
	var mask_graphics_275 = new cjs.Graphics().p("AlDiJIEsjVIFaHoIkrDVg");
	var mask_graphics_276 = new cjs.Graphics().p("AlMiCIE/jjIFaHoIk/Djg");
	var mask_graphics_277 = new cjs.Graphics().p("AlWh7IFTjxIFaHpIlSDwg");
	var mask_graphics_278 = new cjs.Graphics().p("Algh1IFlj+IFcHpIllD+g");
	var mask_graphics_279 = new cjs.Graphics().p("AlphuIF4kMIFbHpIl4EMg");
	var mask_graphics_280 = new cjs.Graphics().p("AlzhnIGLkaIFcHpImLEag");
	var mask_graphics_281 = new cjs.Graphics().p("Al9hgIGfknIFcHoImfEog");
	var mask_graphics_282 = new cjs.Graphics().p("AmHhZIGzk1IFbHoImyE1g");
	var mask_graphics_283 = new cjs.Graphics().p("AmQhSIHGlDIFbHoInGFDg");
	var mask_graphics_284 = new cjs.Graphics().p("AmahLIHalRIFbHoInZFRg");
	var mask_graphics_285 = new cjs.Graphics().p("AmkhEIHtlfIFcHoIntFfg");
	var mask_graphics_286 = new cjs.Graphics().p("Amtg9IIAltIFbHpIoAFsg");
	var mask_graphics_287 = new cjs.Graphics().p("Am3g3IITl6IFcHpIoTF6g");
	var mask_graphics_288 = new cjs.Graphics().p("AnBgwIInmIIFcHpIonGIg");
	var mask_graphics_289 = new cjs.Graphics().p("AnLgpII7mWIFcHpIo7GWg");
	var mask_graphics_290 = new cjs.Graphics().p("AnUgiIJOmjIFbHoIpOGkg");
	var mask_graphics_291 = new cjs.Graphics().p("AnegbIJimxIFbHoIphGxg");
	var mask_graphics_292 = new cjs.Graphics().p("AnogUIJ1m/IFcHoIp1G/g");
	var mask_graphics_293 = new cjs.Graphics().p("AnygNIKJnNIFbHoIqIHNg");
	var mask_graphics_294 = new cjs.Graphics().p("An7gGIKbnbIFcHpIqbHag");
	var mask_graphics_295 = new cjs.Graphics().p("AoFAAIKvnoIFcHoIqvHpg");
	var mask_graphics_296 = new cjs.Graphics().p("AoPAGILDn1IFcHqIrDH1g");
	var mask_graphics_297 = new cjs.Graphics().p("AoYANILWoDIFbHqIrWIDg");
	var mask_graphics_298 = new cjs.Graphics().p("AoiAUILqoQIFbHpIrpIRg");
	var mask_graphics_299 = new cjs.Graphics().p("AosAbIL9ofIFcHqIr9Ifg");
	var mask_graphics_300 = new cjs.Graphics().p("Ao2AiIMRotIFbHqIsQItg");
	var mask_graphics_301 = new cjs.Graphics().p("Ao/ApIMjo6IFcHpIsjI6g");
	var mask_graphics_302 = new cjs.Graphics().p("ApJAwIM3pIIFcHpIs3JIg");
	var mask_graphics_303 = new cjs.Graphics().p("ApTA3INLpWIFcHqItLJVg");
	var mask_graphics_304 = new cjs.Graphics().p("ApcA+INepkIFbHpIteJkg");
	var mask_graphics_305 = new cjs.Graphics().p("ApmBEINxpxIFcHqItxJxg");
	var mask_graphics_306 = new cjs.Graphics().p("ApwBLIOFp/IFcHqIuFJ/g");
	var mask_graphics_307 = new cjs.Graphics().p("Ap6BSIOZqNIFbHqIuYKNg");
	var mask_graphics_308 = new cjs.Graphics().p("AqDBZIOsqbIFbHqIusKbg");
	var mask_graphics_309 = new cjs.Graphics().p("AqNBgIO/qoIFcHpIu/Kpg");
	var mask_graphics_310 = new cjs.Graphics().p("AqXBnIPTq2IFcHpIvTK2g");
	var mask_graphics_311 = new cjs.Graphics().p("AqgBuIPmrEIFbHpIvmLEg");
	var mask_graphics_312 = new cjs.Graphics().p("AqqB1IP5rSIFcHqIv5LRg");
	var mask_graphics_313 = new cjs.Graphics().p("Aq0B8IQNrgIFcHpIwNLgg");
	var mask_graphics_314 = new cjs.Graphics().p("Aq+CCIQhrtIFcHqIwhLtg");
	var mask_graphics_315 = new cjs.Graphics().p("ArHCJIQ0r7IFbHqIw0L7g");
	var mask_graphics_316 = new cjs.Graphics().p("ArRCQIRHsJIFcHqIxHMJg");
	var mask_graphics_317 = new cjs.Graphics().p("ArbCXIRbsXIFcHqIxbMXg");
	var mask_graphics_318 = new cjs.Graphics().p("ArkCeIRuskIFbHpIxuMlg");
	var mask_graphics_319 = new cjs.Graphics().p("AruClISBsyIFcHpIyBMyg");
	var mask_graphics_320 = new cjs.Graphics().p("Ar4CsISVtAIFcHpIyVNAg");
	var mask_graphics_321 = new cjs.Graphics().p("AsCCzISptOIFcHpIypNOg");
	var mask_graphics_322 = new cjs.Graphics().p("AsLC6IS8tcIFbHqIy8Nbg");
	var mask_graphics_323 = new cjs.Graphics().p("AsVDBITPtqIFcHpIzPNqg");
	var mask_graphics_324 = new cjs.Graphics().p("AsfDHITjt3IFbHqIziN3g");
	var mask_graphics_325 = new cjs.Graphics().p("AsoDOIT2uFIFbHqIz2OFg");
	var mask_graphics_326 = new cjs.Graphics().p("AsyDVIUJuSIFcHpI0JOTg");
	var mask_graphics_327 = new cjs.Graphics().p("As8DcIUduhIFbHqI0cOhg");
	var mask_graphics_328 = new cjs.Graphics().p("AtFDjIUwuuIFbHpI0wOug");
	var mask_graphics_329 = new cjs.Graphics().p("AtPDqIVDu8IFcHpI1EO8g");
	var mask_graphics_330 = new cjs.Graphics().p("AtZDxIVXvKIFcHpI1XPKg");
	var mask_graphics_331 = new cjs.Graphics().p("AtiD4IVqvYIFbHqI1qPXg");
	var mask_graphics_332 = new cjs.Graphics().p("AtsD/IV+vmIFbHpI1+Pmg");
	var mask_graphics_333 = new cjs.Graphics().p("At2EFIWRvzIFcHqI2RPzg");
	var mask_graphics_334 = new cjs.Graphics().p("AuAEMIWlwBIFbHqI2kQBg");
	var mask_graphics_335 = new cjs.Graphics().p("AuJETIW4wOIFbHpI24QPg");
	var mask_graphics_336 = new cjs.Graphics().p("AuTEaIXLwdIFcHqI3MQdg");
	var mask_graphics_337 = new cjs.Graphics().p("AudEhIXfwqIFcHpI3fQqg");
	var mask_graphics_338 = new cjs.Graphics().p("AumEoIXyw4IFbHpI3yQ4g");
	var mask_graphics_339 = new cjs.Graphics().p("AuwEvIYGxGIFbHpI4GRGg");
	var mask_graphics_340 = new cjs.Graphics().p("Au6E2IYZxUIFcHpI4ZRUg");
	var mask_graphics_341 = new cjs.Graphics().p("AvDE9IYsxiIFbHqI4sRhg");
	var mask_graphics_342 = new cjs.Graphics().p("AvNFDIZAxvIFbHqI5ARvg");
	var mask_graphics_343 = new cjs.Graphics().p("AvXFKIZUx9IFbHqI5UR9g");
	var mask_graphics_344 = new cjs.Graphics().p("AvhFRIZnyLIFcHqI5nSLg");
	var mask_graphics_345 = new cjs.Graphics().p("AvqFYIZ6yYIFbHpI56SZg");
	var mask_graphics_346 = new cjs.Graphics().p("Av0FfIaOymIFbHpI6OSmg");
	var mask_graphics_347 = new cjs.Graphics().p("Av+FmIahy0IFcHpI6hS0g");
	var mask_graphics_348 = new cjs.Graphics().p("AwIFtIa1zCIFbHpI60TCg");
	var mask_graphics_349 = new cjs.Graphics().p("AwRF0IbIzQIFbHpI7ITQg");
	var mask_graphics_350 = new cjs.Graphics().p("AwbF7IbczeIFbHqI7cTdg");
	var mask_graphics_351 = new cjs.Graphics().p("AwlGBIbvzrIFcHqI7vTrg");
	var mask_graphics_352 = new cjs.Graphics().p("AwvGIIcDz5IFbHqI8CT5g");
	var mask_graphics_353 = new cjs.Graphics().p("Aw4GPIcV0HIFcHqI8WUHg");
	var mask_graphics_354 = new cjs.Graphics().p("AxCGWIcp0UIFcHpI8pUVg");
	var mask_graphics_355 = new cjs.Graphics().p("AxMGdIc90jIFcHqI89Ujg");
	var mask_graphics_356 = new cjs.Graphics().p("AxVGkIdQ0wIFbHpI9QUwg");
	var mask_graphics_357 = new cjs.Graphics().p("AxfGrIdk0+IFbHpI9kU+g");
	var mask_graphics_358 = new cjs.Graphics().p("AxpGyId31MIFcHqI93VLg");
	var mask_graphics_359 = new cjs.Graphics().p("AxzG5IeL1aIFbHpI+KVag");
	var mask_graphics_360 = new cjs.Graphics().p("Ax8G/Ied1nIFcHqI+eVng");
	var mask_graphics_361 = new cjs.Graphics().p("AyGHGIex11IFcHqI+xV1g");
	var mask_graphics_362 = new cjs.Graphics().p("AyQHNIfF2DIFcHqI/FWDg");
	var mask_graphics_363 = new cjs.Graphics().p("AyZHUIfY2RIFbHqI/YWRg");
	var mask_graphics_364 = new cjs.Graphics().p("AyjHbIfs2fIFbHqI/sWfg");
	var mask_graphics_365 = new cjs.Graphics().p("AytHiIf/2sIFcHpI//Wsg");
	var mask_graphics_366 = new cjs.Graphics().p("Ay3HpMAgTgW6IFbHpMggSAW6g");
	var mask_graphics_367 = new cjs.Graphics().p("AzAHwMAgmgXIIFbHqMggmAXHg");
	var mask_graphics_368 = new cjs.Graphics().p("AzKH3MAg5gXWIFcHpMgg5AXWg");
	var mask_graphics_369 = new cjs.Graphics().p("AzTH9MAhMgXjIFcHqMghNAXjg");
	var mask_graphics_370 = new cjs.Graphics().p("AzdIEMAhggXxIFbHqMghgAXxg");
	var mask_graphics_371 = new cjs.Graphics().p("AznILMAhzgX/IFcHqMgh0AX/g");
	var mask_graphics_372 = new cjs.Graphics().p("AzxISMAiHgYNIFcHqMgiHAYNg");
	var mask_graphics_373 = new cjs.Graphics().p("Az7IZMAibgYaIFbHpMgiaAYbg");
	var mask_graphics_374 = new cjs.Graphics().p("A0EIgMAiugYoIFbHpMgiuAYog");
	var mask_graphics_375 = new cjs.Graphics().p("A0OInMAjBgY2IFcHpMgjBAY2g");
	var mask_graphics_376 = new cjs.Graphics().p("A0YIuMAjVgZEIFcHpMgjVAZEg");
	var mask_graphics_377 = new cjs.Graphics().p("A0hI1MAjogZSIFbHpMgjoAZSg");
	var mask_graphics_378 = new cjs.Graphics().p("A0rI7MAj7gZfIFcHqMgj8AZfg");
	var mask_graphics_379 = new cjs.Graphics().p("A01JCMAkPgZtIFcHqMgkPAZtg");
	var mask_graphics_380 = new cjs.Graphics().p("A0/JJMAkjgZ7IFcHqMgkjAZ7g");
	var mask_graphics_381 = new cjs.Graphics().p("A1IJQMAk2gaJIFbHqMgk2AaJg");
	var mask_graphics_382 = new cjs.Graphics().p("A1SJXMAlKgaWIFbHpMglKAaXg");
	var mask_graphics_383 = new cjs.Graphics().p("A1cJeMAldgakIFcHpMgldAakg");
	var mask_graphics_384 = new cjs.Graphics().p("A1lJlMAlwgayIFbHpMglwAayg");
	var mask_graphics_385 = new cjs.Graphics().p("A1vJsMAmDgbAIFcHpMgmEAbAg");
	var mask_graphics_386 = new cjs.Graphics().p("AqSZQMAmXgbOIFbHpMgmXAbOg");
	var mask_graphics_387 = new cjs.Graphics().p("A2WKIMAnSgb4IFbHqMgnSAb3g");
	var mask_graphics_388 = new cjs.Graphics().p("A21KdMAoPgciIFbHpMgoOAcig");
	var mask_graphics_389 = new cjs.Graphics().p("ArsZQMApKgdNIFbHpMgpKAdNg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(267).to({graphics:mask_graphics_267,x:98.8,y:210.5}).wait(1).to({graphics:mask_graphics_268,x:174,y:390.7}).wait(1).to({graphics:mask_graphics_269,x:175,y:390}).wait(1).to({graphics:mask_graphics_270,x:176,y:389.3}).wait(1).to({graphics:mask_graphics_271,x:176.9,y:388.7}).wait(1).to({graphics:mask_graphics_272,x:177.9,y:388}).wait(1).to({graphics:mask_graphics_273,x:178.9,y:387.3}).wait(1).to({graphics:mask_graphics_274,x:179.8,y:386.6}).wait(1).to({graphics:mask_graphics_275,x:180.8,y:385.9}).wait(1).to({graphics:mask_graphics_276,x:181.8,y:385.2}).wait(1).to({graphics:mask_graphics_277,x:182.8,y:384.5}).wait(1).to({graphics:mask_graphics_278,x:183.7,y:383.8}).wait(1).to({graphics:mask_graphics_279,x:184.7,y:383.1}).wait(1).to({graphics:mask_graphics_280,x:185.7,y:382.5}).wait(1).to({graphics:mask_graphics_281,x:186.6,y:381.8}).wait(1).to({graphics:mask_graphics_282,x:187.6,y:381.1}).wait(1).to({graphics:mask_graphics_283,x:188.6,y:380.4}).wait(1).to({graphics:mask_graphics_284,x:189.6,y:379.7}).wait(1).to({graphics:mask_graphics_285,x:190.5,y:379}).wait(1).to({graphics:mask_graphics_286,x:191.5,y:378.3}).wait(1).to({graphics:mask_graphics_287,x:192.5,y:377.6}).wait(1).to({graphics:mask_graphics_288,x:193.4,y:376.9}).wait(1).to({graphics:mask_graphics_289,x:194.4,y:376.3}).wait(1).to({graphics:mask_graphics_290,x:195.4,y:375.6}).wait(1).to({graphics:mask_graphics_291,x:196.4,y:374.9}).wait(1).to({graphics:mask_graphics_292,x:197.3,y:374.2}).wait(1).to({graphics:mask_graphics_293,x:198.3,y:373.5}).wait(1).to({graphics:mask_graphics_294,x:199.3,y:372.8}).wait(1).to({graphics:mask_graphics_295,x:200.2,y:372.1}).wait(1).to({graphics:mask_graphics_296,x:201.2,y:371.4}).wait(1).to({graphics:mask_graphics_297,x:202.2,y:370.7}).wait(1).to({graphics:mask_graphics_298,x:203.2,y:370.1}).wait(1).to({graphics:mask_graphics_299,x:204.1,y:369.4}).wait(1).to({graphics:mask_graphics_300,x:205.1,y:368.7}).wait(1).to({graphics:mask_graphics_301,x:206.1,y:368}).wait(1).to({graphics:mask_graphics_302,x:207,y:367.3}).wait(1).to({graphics:mask_graphics_303,x:208,y:366.6}).wait(1).to({graphics:mask_graphics_304,x:209,y:365.9}).wait(1).to({graphics:mask_graphics_305,x:210,y:365.2}).wait(1).to({graphics:mask_graphics_306,x:210.9,y:364.5}).wait(1).to({graphics:mask_graphics_307,x:211.9,y:363.8}).wait(1).to({graphics:mask_graphics_308,x:212.9,y:363.2}).wait(1).to({graphics:mask_graphics_309,x:213.8,y:362.5}).wait(1).to({graphics:mask_graphics_310,x:214.8,y:361.8}).wait(1).to({graphics:mask_graphics_311,x:215.8,y:361.1}).wait(1).to({graphics:mask_graphics_312,x:216.8,y:360.4}).wait(1).to({graphics:mask_graphics_313,x:217.7,y:359.7}).wait(1).to({graphics:mask_graphics_314,x:218.7,y:359}).wait(1).to({graphics:mask_graphics_315,x:219.7,y:358.3}).wait(1).to({graphics:mask_graphics_316,x:220.6,y:357.6}).wait(1).to({graphics:mask_graphics_317,x:221.6,y:357}).wait(1).to({graphics:mask_graphics_318,x:222.6,y:356.3}).wait(1).to({graphics:mask_graphics_319,x:223.6,y:355.6}).wait(1).to({graphics:mask_graphics_320,x:224.5,y:354.9}).wait(1).to({graphics:mask_graphics_321,x:225.5,y:354.2}).wait(1).to({graphics:mask_graphics_322,x:226.5,y:353.5}).wait(1).to({graphics:mask_graphics_323,x:227.4,y:352.8}).wait(1).to({graphics:mask_graphics_324,x:228.4,y:352.1}).wait(1).to({graphics:mask_graphics_325,x:229.4,y:351.4}).wait(1).to({graphics:mask_graphics_326,x:230.4,y:350.8}).wait(1).to({graphics:mask_graphics_327,x:231.4,y:350.1}).wait(1).to({graphics:mask_graphics_328,x:232.3,y:349.4}).wait(1).to({graphics:mask_graphics_329,x:233.3,y:348.7}).wait(1).to({graphics:mask_graphics_330,x:234.3,y:348}).wait(1).to({graphics:mask_graphics_331,x:235.2,y:347.3}).wait(1).to({graphics:mask_graphics_332,x:236.2,y:346.6}).wait(1).to({graphics:mask_graphics_333,x:237.2,y:345.9}).wait(1).to({graphics:mask_graphics_334,x:238.2,y:345.2}).wait(1).to({graphics:mask_graphics_335,x:239.1,y:344.6}).wait(1).to({graphics:mask_graphics_336,x:240.1,y:343.9}).wait(1).to({graphics:mask_graphics_337,x:241.1,y:343.2}).wait(1).to({graphics:mask_graphics_338,x:242,y:342.5}).wait(1).to({graphics:mask_graphics_339,x:243,y:341.8}).wait(1).to({graphics:mask_graphics_340,x:244,y:341.1}).wait(1).to({graphics:mask_graphics_341,x:245,y:340.4}).wait(1).to({graphics:mask_graphics_342,x:245.9,y:339.7}).wait(1).to({graphics:mask_graphics_343,x:246.9,y:339}).wait(1).to({graphics:mask_graphics_344,x:247.9,y:338.4}).wait(1).to({graphics:mask_graphics_345,x:248.8,y:337.7}).wait(1).to({graphics:mask_graphics_346,x:249.8,y:337}).wait(1).to({graphics:mask_graphics_347,x:250.8,y:336.3}).wait(1).to({graphics:mask_graphics_348,x:251.8,y:335.6}).wait(1).to({graphics:mask_graphics_349,x:252.7,y:334.9}).wait(1).to({graphics:mask_graphics_350,x:253.7,y:334.2}).wait(1).to({graphics:mask_graphics_351,x:254.7,y:333.5}).wait(1).to({graphics:mask_graphics_352,x:255.7,y:332.8}).wait(1).to({graphics:mask_graphics_353,x:256.6,y:332.2}).wait(1).to({graphics:mask_graphics_354,x:257.6,y:331.5}).wait(1).to({graphics:mask_graphics_355,x:258.6,y:330.8}).wait(1).to({graphics:mask_graphics_356,x:259.5,y:330.1}).wait(1).to({graphics:mask_graphics_357,x:260.5,y:329.4}).wait(1).to({graphics:mask_graphics_358,x:261.5,y:328.7}).wait(1).to({graphics:mask_graphics_359,x:262.5,y:328}).wait(1).to({graphics:mask_graphics_360,x:263.4,y:327.3}).wait(1).to({graphics:mask_graphics_361,x:264.4,y:326.6}).wait(1).to({graphics:mask_graphics_362,x:265.4,y:325.9}).wait(1).to({graphics:mask_graphics_363,x:266.3,y:325.3}).wait(1).to({graphics:mask_graphics_364,x:267.3,y:324.6}).wait(1).to({graphics:mask_graphics_365,x:268.3,y:323.9}).wait(1).to({graphics:mask_graphics_366,x:269.3,y:323.2}).wait(1).to({graphics:mask_graphics_367,x:270.2,y:322.5}).wait(1).to({graphics:mask_graphics_368,x:271.2,y:321.8}).wait(1).to({graphics:mask_graphics_369,x:272.2,y:321.1}).wait(1).to({graphics:mask_graphics_370,x:273.1,y:320.4}).wait(1).to({graphics:mask_graphics_371,x:274.1,y:319.7}).wait(1).to({graphics:mask_graphics_372,x:275.1,y:319.1}).wait(1).to({graphics:mask_graphics_373,x:276.1,y:318.4}).wait(1).to({graphics:mask_graphics_374,x:277,y:317.7}).wait(1).to({graphics:mask_graphics_375,x:278,y:317}).wait(1).to({graphics:mask_graphics_376,x:279,y:316.3}).wait(1).to({graphics:mask_graphics_377,x:279.9,y:315.6}).wait(1).to({graphics:mask_graphics_378,x:280.9,y:314.9}).wait(1).to({graphics:mask_graphics_379,x:281.9,y:314.2}).wait(1).to({graphics:mask_graphics_380,x:282.9,y:313.5}).wait(1).to({graphics:mask_graphics_381,x:283.8,y:312.9}).wait(1).to({graphics:mask_graphics_382,x:284.8,y:312.2}).wait(1).to({graphics:mask_graphics_383,x:285.8,y:311.5}).wait(1).to({graphics:mask_graphics_384,x:286.7,y:310.8}).wait(1).to({graphics:mask_graphics_385,x:287.7,y:310.1}).wait(1).to({graphics:mask_graphics_386,x:214.4,y:210.5}).wait(1).to({graphics:mask_graphics_387,x:291.7,y:307.3}).wait(1).to({graphics:mask_graphics_388,x:294.6,y:305.2}).wait(1).to({graphics:mask_graphics_389,x:223.3,y:210.5}).wait(76));

	// 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(20,1,1).p("AkHwUQhRggiwAzQibAri+FOQi/FOkOKxQkPKyHIgIQHIgIGMjmQGMjnGalfQGaleGEmqQA3g8A6g5");
	this.shape_1.setTransform(273.2,276.7);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(267).to({_off:false},0).wait(198));

	// Layer 9 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_236 = new cjs.Graphics().p("A0xGHQClr3KOmkQKNmkL2CnQL3CkGkKNMgxSAfqQmkqNClr2g");
	var mask_1_graphics_237 = new cjs.Graphics().p("A0vGUQCbr4KJmsQKHmtL4CdQL5CaGtKJMgw5AgRQmsqICcr4g");
	var mask_1_graphics_238 = new cjs.Graphics().p("A0tGiQCSr7KDm0QKBm0L7CSQL7CRG0KDMgweAg5Qm0qDCSr5g");
	var mask_1_graphics_239 = new cjs.Graphics().p("A0rGvQCJr8J9m8QJ8m9L8CJQL9CIG8J9MgwCAhgQm9p9CIr8g");
	var mask_1_graphics_240 = new cjs.Graphics().p("A0oG9QB/r+J3nEQJ3nFL+CAQL+B9HFJ4MgvoAiHQnEp4B+r9g");
	var mask_1_graphics_241 = new cjs.Graphics().p("A0lHLQB1sAJynMQJxnMMAB1QL/B0HNJyMgvMAitQnMpxB0r/g");
	var mask_1_graphics_242 = new cjs.Graphics().p("A0hHZQBrsBJsnUQJrnVMBBtQMBBqHVJsMguwAjTQnUpsBrsAg");
	var mask_1_graphics_243 = new cjs.Graphics().p("A0dHnQBisCJmncQJlncMCBiQMCBgHdJmMguTAj5QncpmBhsBg");
	var mask_1_graphics_244 = new cjs.Graphics().p("A0YH1QBYsDJgnkQJgnkMCBZQMDBXHkJfMgt1AkfQnkpgBYsDg");
	var mask_1_graphics_245 = new cjs.Graphics().p("A0TIEQBOsFJanrQJZnsMEBPQMEBNHsJaMgtXAlDQnspaBOsDg");
	var mask_1_graphics_246 = new cjs.Graphics().p("A0OISQBFsFJTnzQJUnzMEBFQMFBDHzJTMgs5AloQnzpTBEsFg");
	var mask_1_graphics_247 = new cjs.Graphics().p("A0IIhQA7sGJNn7QJNn6MFA7QMGA5H7JNMgsbAmMQn6pNA6sFg");
	var mask_1_graphics_248 = new cjs.Graphics().p("A0CIwQAxsHJHoCQJGoCMGAxQMHAwICJHMgr7AmvQoCpGAwsGg");
	var mask_1_graphics_249 = new cjs.Graphics().p("Az7I/QAnsIJAoJQJAoKMGAoQMIAmIJJAMgrbAnTQoKpAAnsGg");
	var mask_1_graphics_250 = new cjs.Graphics().p("Az0JOQAdsII6oRQI5oQMHAdQMIAcIQI6Mgq7An2QoRo6AdsGg");
	var mask_1_graphics_251 = new cjs.Graphics().p("AzsJdQATsJIyoXQIzoYMHAUQMJASIXIzMgqbAoZQoXozATsHg");
	var mask_1_graphics_252 = new cjs.Graphics().p("AzlJsQAKsJIsoeQIsofMHAKQMIAIIfIsMgp6Ao7QofosAJsHg");
	var mask_1_graphics_253 = new cjs.Graphics().p("AzcJ7QgBsIIlomQIlomMIABQMIgCImIlMgpZApdQomolAAsIg");
	var mask_1_graphics_254 = new cjs.Graphics().p("AzUKLQgKsJIeosQIeotMIgJQMIgMItIeMgo3Ap+QotoegLsHg");
	var mask_1_graphics_255 = new cjs.Graphics().p("AzKKaQgVsIIXo0QIXozMHgTQMJgVIzIWMgoVAqfQozoXgUsHg");
	var mask_1_graphics_256 = new cjs.Graphics().p("AzBKqQgesIIQo6QIQo7MGgdQMIgfI6IQMgnyAq/Qo6oQgesGg");
	var mask_1_graphics_257 = new cjs.Graphics().p("Ay3K5QgosHIJpBQIIpBMHgmQMHgpJBIIMgnPArfQpBoIgosHg");
	var mask_1_graphics_258 = new cjs.Graphics().p("AytLJQgxsHIBpHQIBpHMGgxQMHgzJHICMgmsAr+QpHoBgysGg");
	var mask_1_graphics_259 = new cjs.Graphics().p("AyiLZQg7sGH5pOQH6pOMFg6QMGg9JOH6MgmIAseQpOn6g7sFg");
	var mask_1_graphics_260 = new cjs.Graphics().p("AyXLpQhFsFHypUQHypVMFhEQMFhGJUHyMglkAs9QpUnzhFsEg");
	var mask_1_graphics_261 = new cjs.Graphics().p("AyLL5QhPsEHqpbQHrpaMDhOQMFhQJaHrMgk/AtaQpbnqhOsEg");
	var mask_1_graphics_262 = new cjs.Graphics().p("AyAMJQhYsEHjpgQHjpgMChYQMDhaJhHjMgkaAt5QphnjhZsDg");
	var mask_1_graphics_263 = new cjs.Graphics().p("AxzMaQhjsEHbplQHcpnMBhhQMChkJnHbMgj1AuWQpnnbhisBg");
	var mask_1_graphics_264 = new cjs.Graphics().p("AxnMqQhssCHUpsQHTpsMAhrQMBhuJsHUMgjPAuyQpsnThtsAg");
	var mask_1_graphics_265 = new cjs.Graphics().p("AxZM6Qh3sAHMpyQHMpyL+h1QL/h3JzHMMgipAvOQpznLh1r/g");
	var mask_1_graphics_266 = new cjs.Graphics().p("AxMNLQiAr/HEp3QHDp5L9h+QL+iBJ4HEMgiCAvqQp5nDh/r9g");
	var mask_1_graphics_267 = new cjs.Graphics().p("Aw+NbQiKr9G8p9QG8p+L7iIQL8iKJ+G7MghcAwGQp+m8iJr7g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(236).to({graphics:mask_1_graphics_236,x:208,y:180.2}).wait(1).to({graphics:mask_1_graphics_237,x:207.4,y:181.2}).wait(1).to({graphics:mask_1_graphics_238,x:206.7,y:182.2}).wait(1).to({graphics:mask_1_graphics_239,x:206,y:183.2}).wait(1).to({graphics:mask_1_graphics_240,x:205.4,y:184.2}).wait(1).to({graphics:mask_1_graphics_241,x:204.7,y:185.1}).wait(1).to({graphics:mask_1_graphics_242,x:204,y:186.1}).wait(1).to({graphics:mask_1_graphics_243,x:203.3,y:187}).wait(1).to({graphics:mask_1_graphics_244,x:202.5,y:188}).wait(1).to({graphics:mask_1_graphics_245,x:201.8,y:188.9}).wait(1).to({graphics:mask_1_graphics_246,x:201,y:189.8}).wait(1).to({graphics:mask_1_graphics_247,x:200.3,y:190.7}).wait(1).to({graphics:mask_1_graphics_248,x:199.5,y:191.6}).wait(1).to({graphics:mask_1_graphics_249,x:198.7,y:192.5}).wait(1).to({graphics:mask_1_graphics_250,x:197.9,y:193.4}).wait(1).to({graphics:mask_1_graphics_251,x:197.1,y:194.3}).wait(1).to({graphics:mask_1_graphics_252,x:196.3,y:195.1}).wait(1).to({graphics:mask_1_graphics_253,x:195.5,y:196}).wait(1).to({graphics:mask_1_graphics_254,x:194.7,y:196.8}).wait(1).to({graphics:mask_1_graphics_255,x:193.8,y:197.6}).wait(1).to({graphics:mask_1_graphics_256,x:192.9,y:198.4}).wait(1).to({graphics:mask_1_graphics_257,x:192.1,y:199.2}).wait(1).to({graphics:mask_1_graphics_258,x:191.2,y:200}).wait(1).to({graphics:mask_1_graphics_259,x:190.3,y:200.8}).wait(1).to({graphics:mask_1_graphics_260,x:189.4,y:201.6}).wait(1).to({graphics:mask_1_graphics_261,x:188.5,y:202.3}).wait(1).to({graphics:mask_1_graphics_262,x:187.6,y:203.1}).wait(1).to({graphics:mask_1_graphics_263,x:186.7,y:203.8}).wait(1).to({graphics:mask_1_graphics_264,x:185.7,y:204.5}).wait(1).to({graphics:mask_1_graphics_265,x:184.8,y:205.2}).wait(1).to({graphics:mask_1_graphics_266,x:183.8,y:205.9}).wait(1).to({graphics:mask_1_graphics_267,x:182.9,y:206.6}).wait(198));

	// 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(20,1,1).p("AkHwUQhRggiwAzQibAri+FOQi/FOkOKxQkPKyHIgIQHIgIGMjmQGMjnGalfQGaleGEmqQA3g8A6g5");
	this.shape_2.setTransform(273.2,276.7);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(236).to({_off:false},0).wait(229));

	// 3 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_191 = new cjs.Graphics().p("AJQRGIAxhzIFACKIgyByg");
	var mask_2_graphics_192 = new cjs.Graphics().p("Ai8AAIA6iIIE/CIIg7CJg");
	var mask_2_graphics_193 = new cjs.Graphics().p("AjBALIBEieIE/CJIhECfg");
	var mask_2_graphics_194 = new cjs.Graphics().p("AjGAWIBOi0IE/CJIhOC0g");
	var mask_2_graphics_195 = new cjs.Graphics().p("AjLAhIBYjKIE/CJIhYDKg");
	var mask_2_graphics_196 = new cjs.Graphics().p("AjQAsIBijgIE/CJIhiDhg");
	var mask_2_graphics_197 = new cjs.Graphics().p("AjUA3IBqj3IE/CKIhqD3g");
	var mask_2_graphics_198 = new cjs.Graphics().p("AjZBCIB0kNIE/CKIh0ENg");
	var mask_2_graphics_199 = new cjs.Graphics().p("AjeBNIB+kjIE/CKIh+Ejg");
	var mask_2_graphics_200 = new cjs.Graphics().p("AjjBZICHk6IFACJIiHE6g");
	var mask_2_graphics_201 = new cjs.Graphics().p("AjnBjICQlPIE/CJIiQFQg");
	var mask_2_graphics_202 = new cjs.Graphics().p("AjsBvICalmIE/CJIiaFmg");
	var mask_2_graphics_203 = new cjs.Graphics().p("AjxB5ICkl7IE/CJIikF8g");
	var mask_2_graphics_204 = new cjs.Graphics().p("Aj1CFICsmSIFACJIiuGSg");
	var mask_2_graphics_205 = new cjs.Graphics().p("Aj7CQIC4moIE+CJIi2Gog");
	var mask_2_graphics_206 = new cjs.Graphics().p("Aj/CbIDAm+IE/CJIjAG+g");
	var mask_2_graphics_207 = new cjs.Graphics().p("AkECmIDKnVIE/CKIjKHVg");
	var mask_2_graphics_208 = new cjs.Graphics().p("AkJCxIDUnrIE+CKIjSHqg");
	var mask_2_graphics_209 = new cjs.Graphics().p("AkNC8IDcoBIE/CKIjcIBg");
	var mask_2_graphics_210 = new cjs.Graphics().p("AkSDHIDmoXIE/CKIjmIWg");
	var mask_2_graphics_211 = new cjs.Graphics().p("AkXDSIDwotIE/CKIjwItg");
	var mask_2_graphics_212 = new cjs.Graphics().p("AkbDdID5pDIE+CKIj5JDg");
	var mask_2_graphics_213 = new cjs.Graphics().p("AkgDoIECpZIE/CKIkCJZg");
	var mask_2_graphics_214 = new cjs.Graphics().p("AklD0IEMpwIE/CJIkMJwg");
	var mask_2_graphics_215 = new cjs.Graphics().p("AkqD/IEWqGIE/CJIkWKGg");
	var mask_2_graphics_216 = new cjs.Graphics().p("AkvEKIEgqcIE/CJIkgKcg");
	var mask_2_graphics_217 = new cjs.Graphics().p("Ak0EVIEpqyIFACJIkpKzg");
	var mask_2_graphics_218 = new cjs.Graphics().p("Ak4EgIEyrIIE/CJIkyLIg");
	var mask_2_graphics_219 = new cjs.Graphics().p("Ak9ErIE8reIE/CJIk8Lfg");
	var mask_2_graphics_220 = new cjs.Graphics().p("AlBE2IFDr0IFBCJIlEL0g");
	var mask_2_graphics_221 = new cjs.Graphics().p("AlGFBIFNsLIFACKIlNMLg");
	var mask_2_graphics_222 = new cjs.Graphics().p("AlLFMIFXshIFACKIlXMhg");
	var mask_2_graphics_223 = new cjs.Graphics().p("AlQFXIFhs3IFACKIlhM3g");
	var mask_2_graphics_224 = new cjs.Graphics().p("AlVFiIFrtNIFACJIlrNOg");
	var mask_2_graphics_225 = new cjs.Graphics().p("AlaFuIF1tkIE/CJIlzNkg");
	var mask_2_graphics_226 = new cjs.Graphics().p("AleF5IF9t6IFACJIl9N6g");
	var mask_2_graphics_227 = new cjs.Graphics().p("AljGDIGHuPIFACJImHOQg");
	var mask_2_graphics_228 = new cjs.Graphics().p("AloGPIGRumIFACJImROmg");
	var mask_2_graphics_229 = new cjs.Graphics().p("AltGaIGbu8IE/CJImZO8g");
	var mask_2_graphics_230 = new cjs.Graphics().p("AlxGlIGjvSIFACJImjPSg");
	var mask_2_graphics_231 = new cjs.Graphics().p("Al2GwIGtvpIFACKImtPpg");
	var mask_2_graphics_232 = new cjs.Graphics().p("Al7G7IG3v/IFACKIm3P+g");
	var mask_2_graphics_233 = new cjs.Graphics().p("AmAHGIHAwVIFBCKInAQVg");
	var mask_2_graphics_234 = new cjs.Graphics().p("AmEHRIHJwrIFACKInJQqg");
	var mask_2_graphics_235 = new cjs.Graphics().p("AmJHcIHTxBIFACKInTRBg");
	var mask_2_graphics_236 = new cjs.Graphics().p("AClY1IHdxXIFACJIneRYg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(191).to({graphics:mask_2_graphics_191,x:96.1,y:123.1}).wait(1).to({graphics:mask_2_graphics_192,x:173.2,y:234.8}).wait(1).to({graphics:mask_2_graphics_193,x:172.7,y:235.9}).wait(1).to({graphics:mask_2_graphics_194,x:172.3,y:237}).wait(1).to({graphics:mask_2_graphics_195,x:171.8,y:238.1}).wait(1).to({graphics:mask_2_graphics_196,x:171.3,y:239.2}).wait(1).to({graphics:mask_2_graphics_197,x:170.9,y:240.2}).wait(1).to({graphics:mask_2_graphics_198,x:170.4,y:241.3}).wait(1).to({graphics:mask_2_graphics_199,x:169.9,y:242.4}).wait(1).to({graphics:mask_2_graphics_200,x:169.5,y:243.5}).wait(1).to({graphics:mask_2_graphics_201,x:169,y:244.6}).wait(1).to({graphics:mask_2_graphics_202,x:168.5,y:245.7}).wait(1).to({graphics:mask_2_graphics_203,x:168,y:246.8}).wait(1).to({graphics:mask_2_graphics_204,x:167.6,y:247.9}).wait(1).to({graphics:mask_2_graphics_205,x:167.1,y:249}).wait(1).to({graphics:mask_2_graphics_206,x:166.6,y:250.1}).wait(1).to({graphics:mask_2_graphics_207,x:166.2,y:251.2}).wait(1).to({graphics:mask_2_graphics_208,x:165.7,y:252.3}).wait(1).to({graphics:mask_2_graphics_209,x:165.2,y:253.4}).wait(1).to({graphics:mask_2_graphics_210,x:164.8,y:254.5}).wait(1).to({graphics:mask_2_graphics_211,x:164.3,y:255.5}).wait(1).to({graphics:mask_2_graphics_212,x:163.8,y:256.6}).wait(1).to({graphics:mask_2_graphics_213,x:163.3,y:257.7}).wait(1).to({graphics:mask_2_graphics_214,x:162.9,y:258.8}).wait(1).to({graphics:mask_2_graphics_215,x:162.4,y:259.9}).wait(1).to({graphics:mask_2_graphics_216,x:161.9,y:261}).wait(1).to({graphics:mask_2_graphics_217,x:161.5,y:262.1}).wait(1).to({graphics:mask_2_graphics_218,x:161,y:263.2}).wait(1).to({graphics:mask_2_graphics_219,x:160.5,y:264.3}).wait(1).to({graphics:mask_2_graphics_220,x:160.1,y:265.4}).wait(1).to({graphics:mask_2_graphics_221,x:159.6,y:266.5}).wait(1).to({graphics:mask_2_graphics_222,x:159.1,y:267.6}).wait(1).to({graphics:mask_2_graphics_223,x:158.7,y:268.7}).wait(1).to({graphics:mask_2_graphics_224,x:158.2,y:269.8}).wait(1).to({graphics:mask_2_graphics_225,x:157.7,y:270.9}).wait(1).to({graphics:mask_2_graphics_226,x:157.2,y:272}).wait(1).to({graphics:mask_2_graphics_227,x:156.8,y:273.1}).wait(1).to({graphics:mask_2_graphics_228,x:156.3,y:274.1}).wait(1).to({graphics:mask_2_graphics_229,x:155.8,y:275.2}).wait(1).to({graphics:mask_2_graphics_230,x:155.3,y:276.3}).wait(1).to({graphics:mask_2_graphics_231,x:154.9,y:277.4}).wait(1).to({graphics:mask_2_graphics_232,x:154.4,y:278.5}).wait(1).to({graphics:mask_2_graphics_233,x:154,y:279.6}).wait(1).to({graphics:mask_2_graphics_234,x:153.5,y:280.7}).wait(1).to({graphics:mask_2_graphics_235,x:153,y:281.8}).wait(1).to({graphics:mask_2_graphics_236,x:96.2,y:172.7}).wait(229));

	// 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(20,1,1).p("AkHwUQhRggiwAzQibAri+FOQi/FOkOKxQkPKyHIgIQHIgIGMjmQGMjnGalfQGaleGEmqQA3g8A6g5");
	this.shape_3.setTransform(273.2,276.7);
	this.shape_3._off = true;

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(191).to({_off:false},0).wait(274));

	// Layer 5 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_149 = new cjs.Graphics().p("AKkpGQHUALFJFQQFQFWgFHhQgEHglXFQQlQFKnUACg");
	var mask_3_graphics_150 = new cjs.Graphics().p("AJ2pFQHTgIFXFCQFeFJAOHgQAPHhlJFdQlDFXnTAVg");
	var mask_3_graphics_151 = new cjs.Graphics().p("AJHpCQHTgaFkE0QFqE6AiHgQAiHfk7FrQk1FjnSAog");
	var mask_3_graphics_152 = new cjs.Graphics().p("AIZo8QHRgsFwElQF3EtA1HcQA1HeksF3QkmFvnQA7g");
	var mask_3_graphics_153 = new cjs.Graphics().p("AHqoyQHQhAF7EXQGCEdBJHaQBIHbkdGCQkXF8nNBNg");
	var mask_3_graphics_154 = new cjs.Graphics().p("AG8onQHNhSGGEIQGNENBcHXQBbHXkNGOQkIGGnJBgg");
	var mask_3_graphics_155 = new cjs.Graphics().p("AGPoYQHIhkGRD3QGYD9BuHTQBuHTj9GZQj3GQnGByg");
	var mask_3_graphics_156 = new cjs.Graphics().p("AFhoHQHFh2GZDnQGjDsCAHOQCBHPjsGiQjnGanBCEg");
	var mask_3_graphics_157 = new cjs.Graphics().p("AE1nzQG/iIGjDWQGrDcCTHIQCUHJjcGrQjWGjm7CWg");
	var mask_3_graphics_158 = new cjs.Graphics().p("AEJncQG5iaGrDFQG0DKClHCQCmHDjKG0QjGGrm0Cog");
	var mask_3_graphics_159 = new cjs.Graphics().p("ADdnCQGzitGzC0QG7C5C4G7QC3G8i4G7Qi0GzmuC5g");
	var mask_3_graphics_160 = new cjs.Graphics().p("ACzmmQGri+G6CiQHCCnDJGzQDKG0imHDQijG6mmDKg");
	var mask_3_graphics_161 = new cjs.Graphics().p("ACJmIQGjjPHACRQHJCUDbGrQDaGsiUHJQiRHAmdDag");
	var mask_3_graphics_162 = new cjs.Graphics().p("ABglnQGbjfHFB+QHOCCDsGiQDsGiiCHPQh/HFmUDrg");
	var mask_3_graphics_163 = new cjs.Graphics().p("AA4lEQGSjvHJBsQHUBvD8GYQD8GZhuHTQhtHKmKD7g");
	var mask_3_graphics_164 = new cjs.Graphics().p("AARkeQGIj/HNBZQHYBcEMGOQENGOhcHYQhaHOmAELg");
	var mask_3_graphics_165 = new cjs.Graphics().p("AgUj2QF8kPHRBHQHbBJEcGDQEdGDhJHbQhIHRl0Eag");
	var mask_3_graphics_166 = new cjs.Graphics().p("Ag5jLQFxkeHUA0QHdA2EsF3QErF3g1HdQg1HUlpEpg");
	var mask_3_graphics_167 = new cjs.Graphics().p("AhcifQFlktHVAiQHfAjE7FrQE6FqgiHfQgiHWldE3g");
	var mask_3_graphics_168 = new cjs.Graphics().p("Ah/hwQFZk7HWAPQHgAPFJFeQFJFegPHgQgPHWlQFFg");
	var mask_3_graphics_169 = new cjs.Graphics().p("Aigg/QFMlJHWgEQHggEFXFRQFXFQAEHgQAEHXlDFSg");
	var mask_3_graphics_170 = new cjs.Graphics().p("AjAgNQE+lVHWgYQHggXFjFDQFkFCAYHgQAXHWk1Ffg");
	var mask_3_graphics_171 = new cjs.Graphics().p("AjfAnQEwlhHUgqQHfgrFxE1QFwEzArHeQAqHVknFrg");
	var mask_3_graphics_172 = new cjs.Graphics().p("Aj9BdQEiltHSg9QHdg9F8ElQF9EkA+HcQA9HTkYF3g");
	var mask_3_graphics_173 = new cjs.Graphics().p("AkZCVQEUl4HOhQQHahQGIEVQGIEVBRHZQBQHQkJGCg");
	var mask_3_graphics_174 = new cjs.Graphics().p("Ak0DPQEFmDHLhiQHWhkGTEGQGTEEBkHWQBiHMj5GMg");
	var mask_3_graphics_175 = new cjs.Graphics().p("AlNEKQD1mNHHh1QHRh2GdD1QGeD0B2HSQB1HIjpGVg");
	var mask_3_graphics_176 = new cjs.Graphics().p("AlkFHQDkmXHCiHQHMiJGnDlQGnDjCJHMQCHHDjZGfg");
	var mask_3_graphics_177 = new cjs.Graphics().p("Al6GFQDUmgG8iZQHHibGvDTQGwDTCbHGQCZG9jIGng");
	var mask_3_graphics_178 = new cjs.Graphics().p("AmOHEQDDmpG2ipQHAiuG3DCQG4DBCuG/QCqG3i2Gvg");
	var mask_3_graphics_179 = new cjs.Graphics().p("AmgIFQCymxGui7QG5i/G/CwQG/CvC/G4QC8GvilG2g");
	var mask_3_graphics_180 = new cjs.Graphics().p("AmwJGQCgm3GmjNQGxjRHGCeQHFCdDRGwQDNGoiTG8g");
	var mask_3_graphics_181 = new cjs.Graphics().p("Am/KIQCOm9GejdQGojiHMCLQHMCLDiGnQDeGfiBHCg");
	var mask_3_graphics_182 = new cjs.Graphics().p("AnMLLQB9nCGUjvQGfjyHRB5QHRB4DzGeQDuGWhvHGg");
	var mask_3_graphics_183 = new cjs.Graphics().p("AnWMPQBqnHGKj/QGUkCHWBmQHVBlEEGUQD/GMhdHKg");
	var mask_3_graphics_184 = new cjs.Graphics().p("AnfNUQBXnMGBkOQGJkTHZBUQHZBSEUGJQEOGBhKHOg");
	var mask_3_graphics_185 = new cjs.Graphics().p("AnnOYQBFnOF2keQF+kiHcBAQHcA/EjF+QEeF3g4HQg");
	var mask_3_graphics_186 = new cjs.Graphics().p("AnsPeQAynRFrktQFxkxHeAtQHeAsEzFyQEsFqglHSg");
	var mask_3_graphics_187 = new cjs.Graphics().p("AnwQjQAgnSFek7QFklAHgAaQHgAYFBFmQE7FegTHTg");
	var mask_3_graphics_188 = new cjs.Graphics().p("AnxRpQANnUFQlIQFYlOHgAFQHhAHFPFYQFIFRABHTg");
	var mask_3_graphics_189 = new cjs.Graphics().p("AizFmQFJldHhgMQHggNFcFKQFWFDAUHUMgkOAA+QgGnTFElWg");
	var mask_3_graphics_190 = new cjs.Graphics().p("AjRFxQE8lqHfgfQHfggFqE7QFiE2AnHSMgkKACbQgYnTE1lig");
	var mask_3_graphics_191 = new cjs.Graphics().p("AjsF9QEsl2HegzQHegzF1EsQFvEnA5HRMgkBAD4QgrnREnlvg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(149).to({graphics:mask_3_graphics_149,x:180.4,y:173.6}).wait(1).to({graphics:mask_3_graphics_150,x:180.5,y:173.6}).wait(1).to({graphics:mask_3_graphics_151,x:180.5,y:173.5}).wait(1).to({graphics:mask_3_graphics_152,x:180.6,y:173.3}).wait(1).to({graphics:mask_3_graphics_153,x:180.6,y:173}).wait(1).to({graphics:mask_3_graphics_154,x:180.7,y:172.6}).wait(1).to({graphics:mask_3_graphics_155,x:180.7,y:172.1}).wait(1).to({graphics:mask_3_graphics_156,x:180.8,y:171.5}).wait(1).to({graphics:mask_3_graphics_157,x:180.8,y:170.8}).wait(1).to({graphics:mask_3_graphics_158,x:180.9,y:170.1}).wait(1).to({graphics:mask_3_graphics_159,x:180.9,y:169.2}).wait(1).to({graphics:mask_3_graphics_160,x:181,y:168.3}).wait(1).to({graphics:mask_3_graphics_161,x:181,y:167.2}).wait(1).to({graphics:mask_3_graphics_162,x:181,y:166.1}).wait(1).to({graphics:mask_3_graphics_163,x:181,y:164.9}).wait(1).to({graphics:mask_3_graphics_164,x:181.1,y:163.7}).wait(1).to({graphics:mask_3_graphics_165,x:181.1,y:162.3}).wait(1).to({graphics:mask_3_graphics_166,x:181.1,y:160.9}).wait(1).to({graphics:mask_3_graphics_167,x:181.1,y:159.4}).wait(1).to({graphics:mask_3_graphics_168,x:181.1,y:157.8}).wait(1).to({graphics:mask_3_graphics_169,x:181.2,y:156.2}).wait(1).to({graphics:mask_3_graphics_170,x:181.2,y:154.5}).wait(1).to({graphics:mask_3_graphics_171,x:181.3,y:152.7}).wait(1).to({graphics:mask_3_graphics_172,x:181.4,y:150.9}).wait(1).to({graphics:mask_3_graphics_173,x:181.4,y:149}).wait(1).to({graphics:mask_3_graphics_174,x:181.5,y:147}).wait(1).to({graphics:mask_3_graphics_175,x:181.6,y:145}).wait(1).to({graphics:mask_3_graphics_176,x:181.7,y:143}).wait(1).to({graphics:mask_3_graphics_177,x:181.7,y:140.9}).wait(1).to({graphics:mask_3_graphics_178,x:181.8,y:138.8}).wait(1).to({graphics:mask_3_graphics_179,x:181.8,y:136.6}).wait(1).to({graphics:mask_3_graphics_180,x:181.9,y:134.4}).wait(1).to({graphics:mask_3_graphics_181,x:181.9,y:132.2}).wait(1).to({graphics:mask_3_graphics_182,x:181.9,y:129.9}).wait(1).to({graphics:mask_3_graphics_183,x:182,y:127.6}).wait(1).to({graphics:mask_3_graphics_184,x:182,y:125.3}).wait(1).to({graphics:mask_3_graphics_185,x:182,y:123}).wait(1).to({graphics:mask_3_graphics_186,x:182,y:120.6}).wait(1).to({graphics:mask_3_graphics_187,x:182,y:118.3}).wait(1).to({graphics:mask_3_graphics_188,x:182.1,y:115.9}).wait(1).to({graphics:mask_3_graphics_189,x:182.1,y:116.7}).wait(1).to({graphics:mask_3_graphics_190,x:182,y:119}).wait(1).to({graphics:mask_3_graphics_191,x:181.7,y:121.3}).wait(274));

	// 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(20,1,1).p("AJGwUQhRggiwAzQibAri9FOQi/FOkOKxQkPKyHIgIQGkgHFxjF");
	this.shape_4.setTransform(188.6,276.7);
	this.shape_4._off = true;

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(149).to({_off:false},0).wait(316));

	// Layer 12
	this.instance_2 = new lib.ar1("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(73.2,315.4,1,1,0,0,0,-0.8,0.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(456));

	// Layer 4 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_115 = new cjs.Graphics().p("AATYlQm0iwi+mrMAhUgOOQCyGwiwG1QizG+m6C8QjjBhjjAAQjYAAjZhXg");
	var mask_4_graphics_116 = new cjs.Graphics().p("AAsYvQm4iljImnMAg/gPAQC7GsilG5QipHCm1DGQjtBsjwAAQjMAAjOhNg");
	var mask_4_graphics_117 = new cjs.Graphics().p("ABGY4Qm8ibjSmhMAgngPyQDGGoibG8QieHGmwDRQj3B3j9AAQi/AAjDhEg");
	var mask_4_graphics_118 = new cjs.Graphics().p("ABfZBQm/iQjbmdMAgPgQhQDPGiiQHAQiUHJmrDbQkACDkKAAQizAAi4g7g");
	var mask_4_graphics_119 = new cjs.Graphics().p("AB5ZKQnCiGjlmYIf1xRQDZGdiFHDQiJHMmmDmQkJCPkYAAQimAAisgyg");
	var mask_4_graphics_120 = new cjs.Graphics().p("ACUZRQnGh7jumSIfayBQDjGYh7HGQh9HQmhDvQkRCdkmAAQiaAAifgsg");
	var mask_4_graphics_121 = new cjs.Graphics().p("ACuZZQnIhxj4mMIe/yxQDsGThwHJQhzHSmbD5QkZCrkzAAQiOAAiTgkg");
	var mask_4_graphics_122 = new cjs.Graphics().p("ADJZfQnLhlkBmHIeizfQD2GNhlHMQhoHVmVECQkiC5lBAAQiBAAiGgeg");
	var mask_4_graphics_123 = new cjs.Graphics().p("ADkZlQnNhbkLmAIeE0MQD/GGhaHOQhdHYmOEMQkpDHlRAAQh0AAh4gYg");
	var mask_4_graphics_124 = new cjs.Graphics().p("AD/ZqQnPhPkUl6Idl06QEIGBhPHQQhSHZmIEVQkvDXlgAAQhnAAhrgTg");
	var mask_4_graphics_125 = new cjs.Graphics().p("AEaZvQnRhFkclzIdF1mQERF7hFHRQhGHbmCEfQk2DmlvAAQhaAAhdgOg");
	var mask_4_graphics_126 = new cjs.Graphics().p("AE1ZzQnSg6kllsIcj2RQEbFzg6HTQg7Hdl7EoQk8D2mAAAQhMAAhPgKg");
	var mask_4_graphics_127 = new cjs.Graphics().p("AFQZ3QnTgvkulmIcC28QEjFtgvHVQgwHel0EwQlBEHmRAAQg+AAhBgGg");
	var mask_4_graphics_128 = new cjs.Graphics().p("AFrZ5QnUgjk2lfIbf3mQErFngjHVQglHfltE5QlGEYmiAAQgxAAgygEg");
	var mask_4_graphics_129 = new cjs.Graphics().p("AGGZ7QnVgYk+lXIa74PQE0FfgZHWQgZHgllFBQlLEqm1AAQgiAAgjgCg");
	var mask_4_graphics_130 = new cjs.Graphics().p("AGiZ9QnWgOlGlPIaW43QE8FYgNHWQgPHgldFKQlPE8nIAAIgmAAg");
	var mask_4_graphics_131 = new cjs.Graphics().p("AG9Z+QnWgDlNlHIZv5fQFEFQgCHXQgDHglVFSQlTFQncAAIgHAAg");
	var mask_4_graphics_132 = new cjs.Graphics().p("AlTVHIZJ6FQFMFJAJHWQAIHglNFaQlOFangAJIgZAAQnGAAlMk3g");
	var mask_4_graphics_133 = new cjs.Graphics().p("ACJX7QnKhrj9mJIewzJQDyGQhrHKQhtHUmYD+QkdCyk7AAQiHAAiMghg");
	var mask_4_graphics_134 = new cjs.Graphics().p("Ai0U0QmjjYiVm7MAiggLBQCIG+jXGiQjcGrnKCTQi3A6iyAAQkLAAj/iEg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(115).to({graphics:mask_4_graphics_115,x:161.5,y:166}).wait(1).to({graphics:mask_4_graphics_116,x:161.4,y:166}).wait(1).to({graphics:mask_4_graphics_117,x:161.4,y:166}).wait(1).to({graphics:mask_4_graphics_118,x:161.4,y:166}).wait(1).to({graphics:mask_4_graphics_119,x:161.4,y:166}).wait(1).to({graphics:mask_4_graphics_120,x:161.3,y:166.1}).wait(1).to({graphics:mask_4_graphics_121,x:161.3,y:166.1}).wait(1).to({graphics:mask_4_graphics_122,x:161.3,y:166.1}).wait(1).to({graphics:mask_4_graphics_123,x:161.3,y:166.1}).wait(1).to({graphics:mask_4_graphics_124,x:161.2,y:166.1}).wait(1).to({graphics:mask_4_graphics_125,x:161.2,y:166.1}).wait(1).to({graphics:mask_4_graphics_126,x:161.2,y:166.1}).wait(1).to({graphics:mask_4_graphics_127,x:161.2,y:166.1}).wait(1).to({graphics:mask_4_graphics_128,x:161.1,y:166.1}).wait(1).to({graphics:mask_4_graphics_129,x:161.1,y:166.1}).wait(1).to({graphics:mask_4_graphics_130,x:161.1,y:166.1}).wait(1).to({graphics:mask_4_graphics_131,x:161.1,y:166.2}).wait(1).to({graphics:mask_4_graphics_132,x:161.1,y:166.2}).wait(1).to({graphics:mask_4_graphics_133,x:156.2,y:156.4}).wait(1).to({graphics:mask_4_graphics_134,x:151.3,y:146.4}).wait(331));

	// 2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(20,1,1).p("AoWKqQJ2n4DVkhQDUkiANhwQALhkiMhE");
	this.shape_5.setTransform(205.4,240);
	this.shape_5._off = true;

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(115).to({_off:false},0).wait(350));

	// Layer 1 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_9 = new cjs.Graphics().p("AHaWPIBghsIEWD4IhgBsg");
	var mask_5_graphics_10 = new cjs.Graphics().p("Ai/hAIBqh3IEVD4IhpB3g");
	var mask_5_graphics_11 = new cjs.Graphics().p("AjEg6IB0iCIEVD3IhzCCg");
	var mask_5_graphics_12 = new cjs.Graphics().p("AjJg1IB9iMIEWD3Ih9CNg");
	var mask_5_graphics_13 = new cjs.Graphics().p("AjOgvICHiYIEWD4IiHCXg");
	var mask_5_graphics_14 = new cjs.Graphics().p("AjTgqICRijIEVD4IiQCjg");
	var mask_5_graphics_15 = new cjs.Graphics().p("AjYgkICbiuIEVD3IiaCug");
	var mask_5_graphics_16 = new cjs.Graphics().p("AjcgfICki4IEVD3IikC4g");
	var mask_5_graphics_17 = new cjs.Graphics().p("AjhgaICtjDIEWD4IitDDg");
	var mask_5_graphics_18 = new cjs.Graphics().p("AjmgUIC3jOIEWD3Ii3DOg");
	var mask_5_graphics_19 = new cjs.Graphics().p("AjrgPIDBjZIEWD4IjBDZg");
	var mask_5_graphics_20 = new cjs.Graphics().p("AjwgJIDLjkIEWD3IjLDkg");
	var mask_5_graphics_21 = new cjs.Graphics().p("Aj1gEIDVjuIEWD3IjVDvg");
	var mask_5_graphics_22 = new cjs.Graphics().p("Aj5ABIDej5IEVD4IjeD5g");
	var mask_5_graphics_23 = new cjs.Graphics().p("Aj+AGIDokEIEVD5IjoEEg");
	var mask_5_graphics_24 = new cjs.Graphics().p("AkDALIDykOIEVD5IjxEOg");
	var mask_5_graphics_25 = new cjs.Graphics().p("AkIARID8kZIEVD4Ij7EZg");
	var mask_5_graphics_26 = new cjs.Graphics().p("AkNAWIEFkkIEWD5IkFEkg");
	var mask_5_graphics_27 = new cjs.Graphics().p("AkSAcIEPkvIEVD4IkOEvg");
	var mask_5_graphics_28 = new cjs.Graphics().p("AkXAhIEYk6IEWD5IkXE6g");
	var mask_5_graphics_29 = new cjs.Graphics().p("AkbAnIEhlFIEWD4IkhFFg");
	var mask_5_graphics_30 = new cjs.Graphics().p("AkgAsIErlPIEWD4IkrFQg");
	var mask_5_graphics_31 = new cjs.Graphics().p("AklAyIE0lbIEXD5Ik0Fag");
	var mask_5_graphics_32 = new cjs.Graphics().p("AkqA3IE+llIEXD4Ik+Flg");
	var mask_5_graphics_33 = new cjs.Graphics().p("AkvA8IFIlwIEXD5IlIFwg");
	var mask_5_graphics_34 = new cjs.Graphics().p("Ak0BCIFSl7IEXD4IlSF7g");
	var mask_5_graphics_35 = new cjs.Graphics().p("Ak5BHIFcmGIEWD5IlbGGg");
	var mask_5_graphics_36 = new cjs.Graphics().p("Ak9BNIFlmRIEWD5IllGQg");
	var mask_5_graphics_37 = new cjs.Graphics().p("AlCBSIFvmcIEWD5IlvGcg");
	var mask_5_graphics_38 = new cjs.Graphics().p("AlHBYIF5mnIEWD4Il4Gng");
	var mask_5_graphics_39 = new cjs.Graphics().p("AlMBdIGCmyIEXD5ImCGyg");
	var mask_5_graphics_40 = new cjs.Graphics().p("AlRBiIGMm8IEXD5ImMG8g");
	var mask_5_graphics_41 = new cjs.Graphics().p("AlWBoIGWnHIEWD4ImVHHg");
	var mask_5_graphics_42 = new cjs.Graphics().p("AlbBtIGgnSIEXD5ImgHSg");
	var mask_5_graphics_43 = new cjs.Graphics().p("AlfBzIGpndIEWD4ImpHdg");
	var mask_5_graphics_44 = new cjs.Graphics().p("AlkB4IGznoIEWD5ImzHog");
	var mask_5_graphics_45 = new cjs.Graphics().p("AlpB+IG8nzIEXD5Im8Hyg");
	var mask_5_graphics_46 = new cjs.Graphics().p("AluCDIHGn9IEXD4InGH+g");
	var mask_5_graphics_47 = new cjs.Graphics().p("AlzCJIHQoJIEXD4InQIJg");
	var mask_5_graphics_48 = new cjs.Graphics().p("Al4COIHaoTIEWD4InZITg");
	var mask_5_graphics_49 = new cjs.Graphics().p("Al9CTIHkoeIEWD5InjIeg");
	var mask_5_graphics_50 = new cjs.Graphics().p("AmBCZIHtopIEWD4IntIpg");
	var mask_5_graphics_51 = new cjs.Graphics().p("AmGCeIH3o0IEWD5In2I0g");
	var mask_5_graphics_52 = new cjs.Graphics().p("AmLCkIIBo/IEWD4IoAI/g");
	var mask_5_graphics_53 = new cjs.Graphics().p("AmQCpIIKpKIEXD5IoKJKg");
	var mask_5_graphics_54 = new cjs.Graphics().p("AmVCvIIUpVIEXD5IoUJUg");
	var mask_5_graphics_55 = new cjs.Graphics().p("AmaC0IIepfIEXD4IoeJgg");
	var mask_5_graphics_56 = new cjs.Graphics().p("AmeC5IInpqIEWD5IonJqg");
	var mask_5_graphics_57 = new cjs.Graphics().p("AmjC/IIxp1IEWD4IoxJ1g");
	var mask_5_graphics_58 = new cjs.Graphics().p("AmoDEII6qAIEXD5Io6KAg");
	var mask_5_graphics_59 = new cjs.Graphics().p("AmtDKIJEqLIEXD4IpEKLg");
	var mask_5_graphics_60 = new cjs.Graphics().p("AmyDPIJOqVIEXD4IpOKWg");
	var mask_5_graphics_61 = new cjs.Graphics().p("Am3DVIJYqhIEXD5IpYKgg");
	var mask_5_graphics_62 = new cjs.Graphics().p("Am7DaIJhqsIEWD5IphKsg");
	var mask_5_graphics_63 = new cjs.Graphics().p("AnADgIJqq3IEXD4IprK3g");
	var mask_5_graphics_64 = new cjs.Graphics().p("AnFDlIJ0rBIEXD4Ip1LCg");
	var mask_5_graphics_65 = new cjs.Graphics().p("AnKDqIJ+rMIEXD5Ip+LMg");
	var mask_5_graphics_66 = new cjs.Graphics().p("AnPDwIKIrXIEXD4IqILXg");
	var mask_5_graphics_67 = new cjs.Graphics().p("AnTD1IKRriIEWD5IqRLig");
	var mask_5_graphics_68 = new cjs.Graphics().p("AnYD7IKbrtIEWD4IqbLtg");
	var mask_5_graphics_69 = new cjs.Graphics().p("AndEAIKlr3IEWD4IqlL4g");
	var mask_5_graphics_70 = new cjs.Graphics().p("AniEGIKvsDIEWD5IqvMCg");
	var mask_5_graphics_71 = new cjs.Graphics().p("AnnELIK5sOIEWD5Iq5MOg");
	var mask_5_graphics_72 = new cjs.Graphics().p("AnsERILCsZIEXD4IrCMZg");
	var mask_5_graphics_73 = new cjs.Graphics().p("AnxEWILMsjIEXD4IrMMjg");
	var mask_5_graphics_74 = new cjs.Graphics().p("An1EbILVsuIEXD5IrWMug");
	var mask_5_graphics_75 = new cjs.Graphics().p("An6EhILfs5IEWD4IrfM5g");
	var mask_5_graphics_76 = new cjs.Graphics().p("An/EmILptEIEWD5IrpNEg");
	var mask_5_graphics_77 = new cjs.Graphics().p("AoEEsILytPIEXD4IrzNPg");
	var mask_5_graphics_78 = new cjs.Graphics().p("AoJExIL8tZIEXD4Ir9Nag");
	var mask_5_graphics_79 = new cjs.Graphics().p("AoOE3IMGtlIEXD5IsGNkg");
	var mask_5_graphics_80 = new cjs.Graphics().p("AoSE8IMPtwIEXD5IsQNwg");
	var mask_5_graphics_81 = new cjs.Graphics().p("AoXFBIMZt6IEWD5IsZN6g");
	var mask_5_graphics_82 = new cjs.Graphics().p("AocFHIMjuFIEWD4IsjOFg");
	var mask_5_graphics_83 = new cjs.Graphics().p("AohFMIMtuQIEWD5IstOQg");
	var mask_5_graphics_84 = new cjs.Graphics().p("AomFSIM3ubIEWD4Is3Obg");
	var mask_5_graphics_85 = new cjs.Graphics().p("AorFXINBumIEWD5ItBOmg");
	var mask_5_graphics_86 = new cjs.Graphics().p("AowFdINKuxIEXD4ItKOxg");
	var mask_5_graphics_87 = new cjs.Graphics().p("Ao0FiINTu8IEXD5ItUO8g");
	var mask_5_graphics_88 = new cjs.Graphics().p("Ao5FoINdvHIEXD5ItePGg");
	var mask_5_graphics_89 = new cjs.Graphics().p("Ao+FtINnvRIEWD4ItnPRg");
	var mask_5_graphics_90 = new cjs.Graphics().p("ApDFyINxvcIEWD5ItxPcg");
	var mask_5_graphics_91 = new cjs.Graphics().p("ApIF4IN6vnIEXD4It7Png");
	var mask_5_graphics_92 = new cjs.Graphics().p("ApNF9IOEvyIEXD5IuEPyg");
	var mask_5_graphics_93 = new cjs.Graphics().p("ApSGDIOOv9IEXD5IuOP8g");
	var mask_5_graphics_94 = new cjs.Graphics().p("ApWGIIOXwHIEWD4IuXQIg");
	var mask_5_graphics_95 = new cjs.Graphics().p("ApbGOIOhwTIEWD4IuhQTg");
	var mask_5_graphics_96 = new cjs.Graphics().p("ApgGTIOrweIEWD5IurQeg");
	var mask_5_graphics_97 = new cjs.Graphics().p("AplGYIO1woIEWD5Iu1Qog");
	var mask_5_graphics_98 = new cjs.Graphics().p("ApqGeIO+wzIEXD4Iu/Qzg");
	var mask_5_graphics_99 = new cjs.Graphics().p("ApvGjIPIw+IEXD5IvIQ+g");
	var mask_5_graphics_100 = new cjs.Graphics().p("Ap0GpIPSxJIEXD4IvSRJg");
	var mask_5_graphics_101 = new cjs.Graphics().p("Ap4GuIPbxUIEXD5IvcRUg");
	var mask_5_graphics_102 = new cjs.Graphics().p("Ap9G0IPlxfIEXD5IvmReg");
	var mask_5_graphics_103 = new cjs.Graphics().p("AqCG5IPvxpIEWD4IvvRqg");
	var mask_5_graphics_104 = new cjs.Graphics().p("AqHG/IP4x1IEXD5Iv5R0g");
	var mask_5_graphics_105 = new cjs.Graphics().p("AqMHEIQDx/IEWD4IwDR/g");
	var mask_5_graphics_106 = new cjs.Graphics().p("AqRHJIQMyKIEXD5IwMSKg");
	var mask_5_graphics_107 = new cjs.Graphics().p("AqWHPIQWyVIEXD4IwWSVg");
	var mask_5_graphics_108 = new cjs.Graphics().p("AqaHUIQfygIEWD5IwfSgg");
	var mask_5_graphics_109 = new cjs.Graphics().p("AqfHaIQpyrIEWD5IwpSqg");
	var mask_5_graphics_110 = new cjs.Graphics().p("AqkHfIQzy2IEWD5IwzS2g");
	var mask_5_graphics_111 = new cjs.Graphics().p("AqpHlIQ8zBIEXD4Iw9TBg");
	var mask_5_graphics_112 = new cjs.Graphics().p("AquHqIRGzLIEXD4IxHTMg");
	var mask_5_graphics_113 = new cjs.Graphics().p("AqzHvIRQzWIEXD5IxQTWg");
	var mask_5_graphics_114 = new cjs.Graphics().p("Aq4H1IRazhIEXD4IxaThg");
	var mask_5_graphics_115 = new cjs.Graphics().p("AgnWPIRjztIEWD4IxkTtg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_5_graphics_9,x:84.8,y:167.1}).wait(1).to({graphics:mask_5_graphics_10,x:151.4,y:315.9}).wait(1).to({graphics:mask_5_graphics_11,x:151.9,y:315.3}).wait(1).to({graphics:mask_5_graphics_12,x:152.3,y:314.8}).wait(1).to({graphics:mask_5_graphics_13,x:152.8,y:314.3}).wait(1).to({graphics:mask_5_graphics_14,x:153.3,y:313.7}).wait(1).to({graphics:mask_5_graphics_15,x:153.8,y:313.2}).wait(1).to({graphics:mask_5_graphics_16,x:154.3,y:312.6}).wait(1).to({graphics:mask_5_graphics_17,x:154.8,y:312.1}).wait(1).to({graphics:mask_5_graphics_18,x:155.3,y:311.5}).wait(1).to({graphics:mask_5_graphics_19,x:155.7,y:311}).wait(1).to({graphics:mask_5_graphics_20,x:156.2,y:310.5}).wait(1).to({graphics:mask_5_graphics_21,x:156.7,y:309.9}).wait(1).to({graphics:mask_5_graphics_22,x:157.2,y:309.4}).wait(1).to({graphics:mask_5_graphics_23,x:157.7,y:308.8}).wait(1).to({graphics:mask_5_graphics_24,x:158.2,y:308.3}).wait(1).to({graphics:mask_5_graphics_25,x:158.7,y:307.7}).wait(1).to({graphics:mask_5_graphics_26,x:159.1,y:307.2}).wait(1).to({graphics:mask_5_graphics_27,x:159.6,y:306.6}).wait(1).to({graphics:mask_5_graphics_28,x:160.1,y:306.1}).wait(1).to({graphics:mask_5_graphics_29,x:160.6,y:305.6}).wait(1).to({graphics:mask_5_graphics_30,x:161.1,y:305}).wait(1).to({graphics:mask_5_graphics_31,x:161.6,y:304.5}).wait(1).to({graphics:mask_5_graphics_32,x:162.1,y:303.9}).wait(1).to({graphics:mask_5_graphics_33,x:162.5,y:303.4}).wait(1).to({graphics:mask_5_graphics_34,x:163,y:302.8}).wait(1).to({graphics:mask_5_graphics_35,x:163.5,y:302.3}).wait(1).to({graphics:mask_5_graphics_36,x:164,y:301.8}).wait(1).to({graphics:mask_5_graphics_37,x:164.5,y:301.2}).wait(1).to({graphics:mask_5_graphics_38,x:165,y:300.7}).wait(1).to({graphics:mask_5_graphics_39,x:165.4,y:300.1}).wait(1).to({graphics:mask_5_graphics_40,x:165.9,y:299.6}).wait(1).to({graphics:mask_5_graphics_41,x:166.4,y:299}).wait(1).to({graphics:mask_5_graphics_42,x:166.9,y:298.5}).wait(1).to({graphics:mask_5_graphics_43,x:167.4,y:297.9}).wait(1).to({graphics:mask_5_graphics_44,x:167.9,y:297.4}).wait(1).to({graphics:mask_5_graphics_45,x:168.4,y:296.9}).wait(1).to({graphics:mask_5_graphics_46,x:168.8,y:296.3}).wait(1).to({graphics:mask_5_graphics_47,x:169.3,y:295.8}).wait(1).to({graphics:mask_5_graphics_48,x:169.8,y:295.2}).wait(1).to({graphics:mask_5_graphics_49,x:170.3,y:294.7}).wait(1).to({graphics:mask_5_graphics_50,x:170.8,y:294.1}).wait(1).to({graphics:mask_5_graphics_51,x:171.3,y:293.6}).wait(1).to({graphics:mask_5_graphics_52,x:171.8,y:293.1}).wait(1).to({graphics:mask_5_graphics_53,x:172.2,y:292.5}).wait(1).to({graphics:mask_5_graphics_54,x:172.7,y:292}).wait(1).to({graphics:mask_5_graphics_55,x:173.2,y:291.4}).wait(1).to({graphics:mask_5_graphics_56,x:173.7,y:290.9}).wait(1).to({graphics:mask_5_graphics_57,x:174.2,y:290.3}).wait(1).to({graphics:mask_5_graphics_58,x:174.7,y:289.8}).wait(1).to({graphics:mask_5_graphics_59,x:175.2,y:289.2}).wait(1).to({graphics:mask_5_graphics_60,x:175.6,y:288.7}).wait(1).to({graphics:mask_5_graphics_61,x:176.1,y:288.2}).wait(1).to({graphics:mask_5_graphics_62,x:176.6,y:287.6}).wait(1).to({graphics:mask_5_graphics_63,x:177.1,y:287.1}).wait(1).to({graphics:mask_5_graphics_64,x:177.6,y:286.5}).wait(1).to({graphics:mask_5_graphics_65,x:178.1,y:286}).wait(1).to({graphics:mask_5_graphics_66,x:178.6,y:285.4}).wait(1).to({graphics:mask_5_graphics_67,x:179.1,y:284.9}).wait(1).to({graphics:mask_5_graphics_68,x:179.6,y:284.3}).wait(1).to({graphics:mask_5_graphics_69,x:180,y:283.8}).wait(1).to({graphics:mask_5_graphics_70,x:180.5,y:283.3}).wait(1).to({graphics:mask_5_graphics_71,x:181,y:282.7}).wait(1).to({graphics:mask_5_graphics_72,x:181.5,y:282.2}).wait(1).to({graphics:mask_5_graphics_73,x:182,y:281.6}).wait(1).to({graphics:mask_5_graphics_74,x:182.5,y:281.1}).wait(1).to({graphics:mask_5_graphics_75,x:182.9,y:280.5}).wait(1).to({graphics:mask_5_graphics_76,x:183.4,y:280}).wait(1).to({graphics:mask_5_graphics_77,x:183.9,y:279.5}).wait(1).to({graphics:mask_5_graphics_78,x:184.4,y:278.9}).wait(1).to({graphics:mask_5_graphics_79,x:184.9,y:278.4}).wait(1).to({graphics:mask_5_graphics_80,x:185.4,y:277.8}).wait(1).to({graphics:mask_5_graphics_81,x:185.9,y:277.3}).wait(1).to({graphics:mask_5_graphics_82,x:186.3,y:276.7}).wait(1).to({graphics:mask_5_graphics_83,x:186.8,y:276.2}).wait(1).to({graphics:mask_5_graphics_84,x:187.3,y:275.6}).wait(1).to({graphics:mask_5_graphics_85,x:187.8,y:275.1}).wait(1).to({graphics:mask_5_graphics_86,x:188.3,y:274.6}).wait(1).to({graphics:mask_5_graphics_87,x:188.8,y:274}).wait(1).to({graphics:mask_5_graphics_88,x:189.3,y:273.5}).wait(1).to({graphics:mask_5_graphics_89,x:189.7,y:272.9}).wait(1).to({graphics:mask_5_graphics_90,x:190.2,y:272.4}).wait(1).to({graphics:mask_5_graphics_91,x:190.7,y:271.8}).wait(1).to({graphics:mask_5_graphics_92,x:191.2,y:271.3}).wait(1).to({graphics:mask_5_graphics_93,x:191.7,y:270.8}).wait(1).to({graphics:mask_5_graphics_94,x:192.2,y:270.2}).wait(1).to({graphics:mask_5_graphics_95,x:192.7,y:269.7}).wait(1).to({graphics:mask_5_graphics_96,x:193.1,y:269.1}).wait(1).to({graphics:mask_5_graphics_97,x:193.6,y:268.6}).wait(1).to({graphics:mask_5_graphics_98,x:194.1,y:268}).wait(1).to({graphics:mask_5_graphics_99,x:194.6,y:267.5}).wait(1).to({graphics:mask_5_graphics_100,x:195.1,y:266.9}).wait(1).to({graphics:mask_5_graphics_101,x:195.6,y:266.4}).wait(1).to({graphics:mask_5_graphics_102,x:196.1,y:265.9}).wait(1).to({graphics:mask_5_graphics_103,x:196.5,y:265.3}).wait(1).to({graphics:mask_5_graphics_104,x:197,y:264.8}).wait(1).to({graphics:mask_5_graphics_105,x:197.5,y:264.2}).wait(1).to({graphics:mask_5_graphics_106,x:198,y:263.7}).wait(1).to({graphics:mask_5_graphics_107,x:198.5,y:263.1}).wait(1).to({graphics:mask_5_graphics_108,x:199,y:262.6}).wait(1).to({graphics:mask_5_graphics_109,x:199.4,y:262.1}).wait(1).to({graphics:mask_5_graphics_110,x:199.9,y:261.5}).wait(1).to({graphics:mask_5_graphics_111,x:200.4,y:261}).wait(1).to({graphics:mask_5_graphics_112,x:200.9,y:260.4}).wait(1).to({graphics:mask_5_graphics_113,x:201.4,y:259.9}).wait(1).to({graphics:mask_5_graphics_114,x:201.9,y:259.3}).wait(1).to({graphics:mask_5_graphics_115,x:136.2,y:167.1}).wait(350));

	// 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(20,1,1).p("AoWKqQJ2n4DVkhQDUkiANhwQALhkiMhE");
	this.shape_6.setTransform(205.4,240);
	this.shape_6._off = true;

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(9).to({_off:false},0).wait(456));

	// Letter
	this.instance_3 = new lib.e("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(275,275);
	this.instance_3.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(465));

	// Background
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_7.setTransform(275,275,3.373,2.543);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_8.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).wait(465));

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