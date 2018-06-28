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


(lib.T = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("AzZTbIgjgIQhcgXhTgtIgDgBIgTgKQi4hpiDilQiGimhIjRQgnhrgShqQgShkAAhlIAUhlQAEgLAIgJQAXgcAwAAQBAAAAYApQAYArAAA9QARAcAVAaQBbB0CKA2IAWAIIAAAAQCfA3CnAAIDggYIDWhCIAWgIQAQgFAIAAQAsAAAfAlQAcAjAAAnIAAABIgPA4IgwAoIhyAuIiwAmIh2ARIh4AGQgrAAgpgDQhlgHhigZIgagGIgNgEQhIgUhDgeQgqgTgogYQAYBBAfA8QAbAzAgAwQA8BaBLBKIAZAZQBYBRBxAzIACABQByAwCEAAQBmAABeg6QAkgXAjgeQA/g5A9hIIAOgSIAqg3IAjgyIANgTIAHgLIAIgMIAEgHQAhg0Ahg5QAfg1Afg4IAlhIQAcg2Aag4IGftnQBljMBniBIjZg3Ii5gWIi8AOQgmAEgjAIQgwAKgqARQhCAZg0AmIkYDzIhEAWQguAAgYghIgYhGIALg1IBVhmIA5g3QB/h4CghDQAegMAggLIA6gTQAsgNAugJQCAgcCFABIDlAVIDkAzIDfA7IDgAxICxAVICyAJQBxAABigMQBigNBUgZIABAAQA5gRA8gWQBYggBdgrIBGghIA3gSQAhAAAcAWQAIAGAHAHQAfAmAAAnIgUA1IgwAsIhwA9IgVALQhxA2h3AiIgzANIgvAKIgDAAIgpAJIhFAKQg0AIg1AEQgoADgoACQgnACgngBIlCgVIk+g7Qh/B/hxDSIkBIHIjKGmQg2Bug4BlQgvBRgxBMQgZAngaAmIgjAxQh2CjiIBtQgnAigqAYQgiASgiAOIgNAFIgUAHQhNAahSAAQhdgBhVgRg");
	this.shape.setTransform(-2036.7,-391.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2243.7,-517.5,413.9,252.1);


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
	this.shape.setTransform(0,10);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.1,3.2,22.3,13.7);


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


(lib.ar4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(-17.7,-69.9,0.998,0.998,19.3,0,0,-0.1,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:5.6,rotation:-5,guide:{path:[-17.7,-69.7,-28.4,-45.4,-22.6,-3.2]}},74).wait(1));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AiIjkICijyIBvBLIiiDyg");
	var mask_graphics_1 = new cjs.Graphics().p("AiIBYIChj5IBwBLIihD4g");
	var mask_graphics_2 = new cjs.Graphics().p("AiIBbICej/IBzBJIifEAg");
	var mask_graphics_3 = new cjs.Graphics().p("AiIBgICdkHIB0BIIidEHg");
	var mask_graphics_4 = new cjs.Graphics().p("AiIBkICbkPIB2BIIibEOg");
	var mask_graphics_5 = new cjs.Graphics().p("AiIBoICakWIB3BHIiZEWg");
	var mask_graphics_6 = new cjs.Graphics().p("AiIBtICYkeIB5BFIiXEeg");
	var mask_graphics_7 = new cjs.Graphics().p("AiIBxICWkmIB7BFIiWEmg");
	var mask_graphics_8 = new cjs.Graphics().p("AiIB1ICUktIB8BEIiTEtg");
	var mask_graphics_9 = new cjs.Graphics().p("AiHB5ICRk0IB+BDIiRE0g");
	var mask_graphics_10 = new cjs.Graphics().p("AiHB9ICQk7IB/BBIiQE8g");
	var mask_graphics_11 = new cjs.Graphics().p("AiICCICPlEICCBBIiPFEg");
	var mask_graphics_12 = new cjs.Graphics().p("AiICGICNlLICEBAIiNFLg");
	var mask_graphics_13 = new cjs.Graphics().p("AiICKICMlTICEBAIiKFTg");
	var mask_graphics_14 = new cjs.Graphics().p("AiHCPICJlbICGA+IiJFbg");
	var mask_graphics_15 = new cjs.Graphics().p("AiHCTICHliICIA+IiIFhg");
	var mask_graphics_16 = new cjs.Graphics().p("AiHCXICHlpICIA8IiGFqg");
	var mask_graphics_17 = new cjs.Graphics().p("AiHCbICFlxICKA8IiFFxg");
	var mask_graphics_18 = new cjs.Graphics().p("AiHCfICDl4ICMA7IiDF4g");
	var mask_graphics_19 = new cjs.Graphics().p("AiHCkICBmBICOA6IiBGBg");
	var mask_graphics_20 = new cjs.Graphics().p("AiHCoICAmIICPA5Ih/GIg");
	var mask_graphics_21 = new cjs.Graphics().p("AiHCsIB9mPICSA4Ih+GPg");
	var mask_graphics_22 = new cjs.Graphics().p("AiHCwIB8mXICTA3Ih8GYg");
	var mask_graphics_23 = new cjs.Graphics().p("AiHC1IB6mfICVA2Ih7Gfg");
	var mask_graphics_24 = new cjs.Graphics().p("AiHC5IB5mmICWA1Ih5Gmg");
	var mask_graphics_25 = new cjs.Graphics().p("AiHC9IB3muICYA1Ih3Gug");
	var mask_graphics_26 = new cjs.Graphics().p("AiHDBIB1m1ICaA0Ih1G1g");
	var mask_graphics_27 = new cjs.Graphics().p("AiHDFIB0m8ICbAzIhzG8g");
	var mask_graphics_28 = new cjs.Graphics().p("AiHDJIBynDICdAxIhyHFg");
	var mask_graphics_29 = new cjs.Graphics().p("AiHDOIBwnMICfAxIhwHMg");
	var mask_graphics_30 = new cjs.Graphics().p("AiHDSIBunTIChAwIhuHTg");
	var mask_graphics_31 = new cjs.Graphics().p("AiHDWIBsnbICiAwIhsHbg");
	var mask_graphics_32 = new cjs.Graphics().p("AiGDaIBqniICjAuIhqHjg");
	var mask_graphics_33 = new cjs.Graphics().p("AiGDfIBonqIClAtIhoHqg");
	var mask_graphics_34 = new cjs.Graphics().p("AiGDjIBmnxICnAsIhmHyg");
	var mask_graphics_35 = new cjs.Graphics().p("AiGDnIBln5ICoAsIhlH5g");
	var mask_graphics_36 = new cjs.Graphics().p("AiGDrIBjoAICqAqIhjIBg");
	var mask_graphics_37 = new cjs.Graphics().p("AiGDwIBhoJICsAqIhhIJg");
	var mask_graphics_38 = new cjs.Graphics().p("AiGD0IBgoQICtAqIhgIPg");
	var mask_graphics_39 = new cjs.Graphics().p("AiGD4IBeoXICvAoIheIXg");
	var mask_graphics_40 = new cjs.Graphics().p("AiGD8IBcofICxAoIhcIfg");
	var mask_graphics_41 = new cjs.Graphics().p("AiGEBIBaonICzAnIhaImg");
	var mask_graphics_42 = new cjs.Graphics().p("AiGEFIBZouIC0AmIhZIug");
	var mask_graphics_43 = new cjs.Graphics().p("AiGEJIBXo1IC2AkIhXI2g");
	var mask_graphics_44 = new cjs.Graphics().p("AiGEOIBVo+IC4AkIhVI9g");
	var mask_graphics_45 = new cjs.Graphics().p("AiGERIBTpEIC6AjIhUJEg");
	var mask_graphics_46 = new cjs.Graphics().p("AiGEWIBSpNIC7AiIhSJNg");
	var mask_graphics_47 = new cjs.Graphics().p("AiGEaIBQpUIC9AhIhQJUg");
	var mask_graphics_48 = new cjs.Graphics().p("AiGEeIBOpcIC/AhIhOJbg");
	var mask_graphics_49 = new cjs.Graphics().p("AiGEiIBMpjIDBAgIhNJjg");
	var mask_graphics_50 = new cjs.Graphics().p("AiGEmIBLpqIDCAeIhLJrg");
	var mask_graphics_51 = new cjs.Graphics().p("AiGErIBJpyIDDAdIhIJyg");
	var mask_graphics_52 = new cjs.Graphics().p("AiGEvIBIp6IDFAdIhIJ6g");
	var mask_graphics_53 = new cjs.Graphics().p("AiFEzIBFqBIDHAcIhGKBg");
	var mask_graphics_54 = new cjs.Graphics().p("AiFE3IBDqIIDIAbIhDKIg");
	var mask_graphics_55 = new cjs.Graphics().p("AiGE7IBDqQIDJAaIhBKQg");
	var mask_graphics_56 = new cjs.Graphics().p("AiFFAIA/qYIDMAZIhAKYg");
	var mask_graphics_57 = new cjs.Graphics().p("AiFFEIA+qfIDNAYIg+Kfg");
	var mask_graphics_58 = new cjs.Graphics().p("AiFFIIA8qnIDPAYIg8Kng");
	var mask_graphics_59 = new cjs.Graphics().p("AiFFNIA6qvIDRAWIg6Kvg");
	var mask_graphics_60 = new cjs.Graphics().p("AiFFRIA4q2IDTAVIg5K2g");
	var mask_graphics_61 = new cjs.Graphics().p("AiFFVIA3q9IDUAUIg3K9g");
	var mask_graphics_62 = new cjs.Graphics().p("AiFFaIA2rGIDVAUIg1LFg");
	var mask_graphics_63 = new cjs.Graphics().p("AiFFdIAzrMIDYASIgzLNg");
	var mask_graphics_64 = new cjs.Graphics().p("AiFFiIAyrVIDZASIgxLVg");
	var mask_graphics_65 = new cjs.Graphics().p("AiFFmIAwrcIDbARIgwLcg");
	var mask_graphics_66 = new cjs.Graphics().p("AiFFqIAurjIDdAQIguLjg");
	var mask_graphics_67 = new cjs.Graphics().p("AiFFvIAtrsIDeAPIgsLrg");
	var mask_graphics_68 = new cjs.Graphics().p("AiFFzIArrzIDgAOIgrLzg");
	var mask_graphics_69 = new cjs.Graphics().p("AiFF3IApr6IDiANIgpL6g");
	var mask_graphics_70 = new cjs.Graphics().p("AiFF7IAnsCIDkANIgoMCg");
	var mask_graphics_71 = new cjs.Graphics().p("AiEF/IAksJIDmALIgmMKg");
	var mask_graphics_72 = new cjs.Graphics().p("AiEGEIAjsRIDmALIgjMQg");
	var mask_graphics_73 = new cjs.Graphics().p("AiFGHIAisYIDoAKIghMYg");
	var mask_graphics_74 = new cjs.Graphics().p("AjEGLIAgsgIDqAJIggMgg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-11.2,y:-47.1}).wait(1).to({graphics:mask_graphics_1,x:-11.4,y:-77.8}).wait(1).to({graphics:mask_graphics_2,x:-11.6,y:-77.2}).wait(1).to({graphics:mask_graphics_3,x:-11.8,y:-76.8}).wait(1).to({graphics:mask_graphics_4,x:-12,y:-76.2}).wait(1).to({graphics:mask_graphics_5,x:-12.2,y:-75.7}).wait(1).to({graphics:mask_graphics_6,x:-12.4,y:-75.2}).wait(1).to({graphics:mask_graphics_7,x:-12.6,y:-74.7}).wait(1).to({graphics:mask_graphics_8,x:-12.8,y:-74.2}).wait(1).to({graphics:mask_graphics_9,x:-13,y:-73.7}).wait(1).to({graphics:mask_graphics_10,x:-13.2,y:-73.2}).wait(1).to({graphics:mask_graphics_11,x:-13.4,y:-72.7}).wait(1).to({graphics:mask_graphics_12,x:-13.6,y:-72.2}).wait(1).to({graphics:mask_graphics_13,x:-13.8,y:-71.7}).wait(1).to({graphics:mask_graphics_14,x:-14,y:-71.1}).wait(1).to({graphics:mask_graphics_15,x:-14.2,y:-70.7}).wait(1).to({graphics:mask_graphics_16,x:-14.4,y:-70.1}).wait(1).to({graphics:mask_graphics_17,x:-14.6,y:-69.6}).wait(1).to({graphics:mask_graphics_18,x:-14.8,y:-69.1}).wait(1).to({graphics:mask_graphics_19,x:-15,y:-68.6}).wait(1).to({graphics:mask_graphics_20,x:-15.2,y:-68.1}).wait(1).to({graphics:mask_graphics_21,x:-15.4,y:-67.6}).wait(1).to({graphics:mask_graphics_22,x:-15.6,y:-67.1}).wait(1).to({graphics:mask_graphics_23,x:-15.8,y:-66.6}).wait(1).to({graphics:mask_graphics_24,x:-16,y:-66.1}).wait(1).to({graphics:mask_graphics_25,x:-16.2,y:-65.6}).wait(1).to({graphics:mask_graphics_26,x:-16.4,y:-65.1}).wait(1).to({graphics:mask_graphics_27,x:-16.6,y:-64.6}).wait(1).to({graphics:mask_graphics_28,x:-16.8,y:-64}).wait(1).to({graphics:mask_graphics_29,x:-17,y:-63.5}).wait(1).to({graphics:mask_graphics_30,x:-17.2,y:-63}).wait(1).to({graphics:mask_graphics_31,x:-17.4,y:-62.5}).wait(1).to({graphics:mask_graphics_32,x:-17.6,y:-62}).wait(1).to({graphics:mask_graphics_33,x:-17.8,y:-61.5}).wait(1).to({graphics:mask_graphics_34,x:-18,y:-61}).wait(1).to({graphics:mask_graphics_35,x:-18.2,y:-60.5}).wait(1).to({graphics:mask_graphics_36,x:-18.4,y:-60}).wait(1).to({graphics:mask_graphics_37,x:-18.6,y:-59.5}).wait(1).to({graphics:mask_graphics_38,x:-18.8,y:-59}).wait(1).to({graphics:mask_graphics_39,x:-19,y:-58.5}).wait(1).to({graphics:mask_graphics_40,x:-19.2,y:-58}).wait(1).to({graphics:mask_graphics_41,x:-19.4,y:-57.4}).wait(1).to({graphics:mask_graphics_42,x:-19.6,y:-56.9}).wait(1).to({graphics:mask_graphics_43,x:-19.8,y:-56.4}).wait(1).to({graphics:mask_graphics_44,x:-20,y:-55.9}).wait(1).to({graphics:mask_graphics_45,x:-20.2,y:-55.4}).wait(1).to({graphics:mask_graphics_46,x:-20.4,y:-54.9}).wait(1).to({graphics:mask_graphics_47,x:-20.6,y:-54.4}).wait(1).to({graphics:mask_graphics_48,x:-20.8,y:-53.9}).wait(1).to({graphics:mask_graphics_49,x:-21,y:-53.4}).wait(1).to({graphics:mask_graphics_50,x:-21.2,y:-52.9}).wait(1).to({graphics:mask_graphics_51,x:-21.4,y:-52.4}).wait(1).to({graphics:mask_graphics_52,x:-21.6,y:-51.9}).wait(1).to({graphics:mask_graphics_53,x:-21.8,y:-51.3}).wait(1).to({graphics:mask_graphics_54,x:-22,y:-50.8}).wait(1).to({graphics:mask_graphics_55,x:-22.2,y:-50.3}).wait(1).to({graphics:mask_graphics_56,x:-22.4,y:-49.8}).wait(1).to({graphics:mask_graphics_57,x:-22.6,y:-49.3}).wait(1).to({graphics:mask_graphics_58,x:-22.8,y:-48.8}).wait(1).to({graphics:mask_graphics_59,x:-23,y:-48.3}).wait(1).to({graphics:mask_graphics_60,x:-23.2,y:-47.8}).wait(1).to({graphics:mask_graphics_61,x:-23.4,y:-47.3}).wait(1).to({graphics:mask_graphics_62,x:-23.6,y:-46.8}).wait(1).to({graphics:mask_graphics_63,x:-23.8,y:-46.3}).wait(1).to({graphics:mask_graphics_64,x:-24,y:-45.8}).wait(1).to({graphics:mask_graphics_65,x:-24.2,y:-45.2}).wait(1).to({graphics:mask_graphics_66,x:-24.4,y:-44.8}).wait(1).to({graphics:mask_graphics_67,x:-24.6,y:-44.2}).wait(1).to({graphics:mask_graphics_68,x:-24.8,y:-43.7}).wait(1).to({graphics:mask_graphics_69,x:-25,y:-43.2}).wait(1).to({graphics:mask_graphics_70,x:-25.2,y:-42.7}).wait(1).to({graphics:mask_graphics_71,x:-25.4,y:-42.2}).wait(1).to({graphics:mask_graphics_72,x:-25.6,y:-41.7}).wait(1).to({graphics:mask_graphics_73,x:-25.8,y:-41.2}).wait(1).to({graphics:mask_graphics_74,x:-19.7,y:-40.6}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AAeldQhfD7A5G/");
	this.shape.setTransform(-21.6,-35);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.3,-75.7,21,16.6);


(lib.ar3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(65.3,-90.1,1,1,19.7,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.3,regY:0.2,rotation:43.4,guide:{path:[66.1,-89.6,43.3,-28,12.9,16.2]}},83).wait(1));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ABZmiIBBhiIDyCfIhBBjg");
	var mask_graphics_1 = new cjs.Graphics().p("AibgWIBGhyIDxCfIhGByg");
	var mask_graphics_2 = new cjs.Graphics().p("AiegNIBLiCIDyCeIhLCBg");
	var mask_graphics_3 = new cjs.Graphics().p("AiggFIBPiSIDyCeIhQCRg");
	var mask_graphics_4 = new cjs.Graphics().p("AijACIBVigIDyCdIhVCgg");
	var mask_graphics_5 = new cjs.Graphics().p("AilAKIBaivIDxCcIhZCwg");
	var mask_graphics_6 = new cjs.Graphics().p("AioASIBfi/IDyCcIhfC/g");
	var mask_graphics_7 = new cjs.Graphics().p("AiqAaIBjjOIDyCbIhjDOg");
	var mask_graphics_8 = new cjs.Graphics().p("AitAiIBpjeIDyCbIhpDeg");
	var mask_graphics_9 = new cjs.Graphics().p("AivAqIBtjtIDyCaIhtDug");
	var mask_graphics_10 = new cjs.Graphics().p("AiyAyIBzj9IDyCaIhzD9g");
	var mask_graphics_11 = new cjs.Graphics().p("Ai0A6IB3kMIDzCZIh4EMg");
	var mask_graphics_12 = new cjs.Graphics().p("Ai3BCIB9kcIDyCZIh8Ecg");
	var mask_graphics_13 = new cjs.Graphics().p("Ai5BKICBkrIDyCYIiBErg");
	var mask_graphics_14 = new cjs.Graphics().p("Ai8BSICGk7IDzCXIiGE7g");
	var mask_graphics_15 = new cjs.Graphics().p("Ai+BbICLlLIDyCWIiLFLg");
	var mask_graphics_16 = new cjs.Graphics().p("AjBBjICQlaIDzCVIiQFbg");
	var mask_graphics_17 = new cjs.Graphics().p("AjEBrICWlqIDyCVIiVFqg");
	var mask_graphics_18 = new cjs.Graphics().p("AjGBzICal6IDzCVIiaF6g");
	var mask_graphics_19 = new cjs.Graphics().p("AjJB7ICgmJIDzCUIigGJg");
	var mask_graphics_20 = new cjs.Graphics().p("AjLCDICkmYIDzCTIikGYg");
	var mask_graphics_21 = new cjs.Graphics().p("AjNCLIComoIDzCTIioGog");
	var mask_graphics_22 = new cjs.Graphics().p("AjQCTICum3IDzCSIiuG3g");
	var mask_graphics_23 = new cjs.Graphics().p("AjTCbICznHIDzCSIiyHHg");
	var mask_graphics_24 = new cjs.Graphics().p("AjVCjIC4nWIDzCQIi3HXg");
	var mask_graphics_25 = new cjs.Graphics().p("AjXCrIC8nmIDzCQIi8Hmg");
	var mask_graphics_26 = new cjs.Graphics().p("AjaCzIDBn1ID0CPIjCH2g");
	var mask_graphics_27 = new cjs.Graphics().p("AjcC8IDGoGID0CPIjHIGg");
	var mask_graphics_28 = new cjs.Graphics().p("AjfDEIDLoVID0COIjMIVg");
	var mask_graphics_29 = new cjs.Graphics().p("AjiDMIDRolID0COIjRIlg");
	var mask_graphics_30 = new cjs.Graphics().p("AjkDUIDVo0ID0CNIjVI0g");
	var mask_graphics_31 = new cjs.Graphics().p("AjmDcIDapDIDzCMIjZJDg");
	var mask_graphics_32 = new cjs.Graphics().p("AjpDkIDfpTID0CMIjfJTg");
	var mask_graphics_33 = new cjs.Graphics().p("AjsDtIDkpjID1CLIjkJig");
	var mask_graphics_34 = new cjs.Graphics().p("AjuD1IDppzID0CLIjpJyg");
	var mask_graphics_35 = new cjs.Graphics().p("AjxD8IDuqBID1CJIjvKCg");
	var mask_graphics_36 = new cjs.Graphics().p("AjzEFIDzqRID0CJIjzKQg");
	var mask_graphics_37 = new cjs.Graphics().p("Aj2ENID3qhID2CIIj3Khg");
	var mask_graphics_38 = new cjs.Graphics().p("Aj4EUID8qwID1CIIj8Kwg");
	var mask_graphics_39 = new cjs.Graphics().p("Aj7EdIEBrAID1CHIkALAg");
	var mask_graphics_40 = new cjs.Graphics().p("Aj9ElIEFrPID2CGIkFLQg");
	var mask_graphics_41 = new cjs.Graphics().p("AkAEtIELrfID1CGIkKLfg");
	var mask_graphics_42 = new cjs.Graphics().p("AkCE1IEPruID2CFIkPLug");
	var mask_graphics_43 = new cjs.Graphics().p("AkFE9IEVr+ID2CFIkUL+g");
	var mask_graphics_44 = new cjs.Graphics().p("AkHFFIEZsNID2CDIkZMOg");
	var mask_graphics_45 = new cjs.Graphics().p("AkKFOIEeseID3CEIkeMdg");
	var mask_graphics_46 = new cjs.Graphics().p("AkMFWIEjstID2CCIkiMtg");
	var mask_graphics_47 = new cjs.Graphics().p("AkOFeIEns9ID2CCIknM9g");
	var mask_graphics_48 = new cjs.Graphics().p("AkRFmIEttMID2CBIksNMg");
	var mask_graphics_49 = new cjs.Graphics().p("AkUFuIEytcID3CBIkyNbg");
	var mask_graphics_50 = new cjs.Graphics().p("AkWF2IE3trID2CAIk2Nrg");
	var mask_graphics_51 = new cjs.Graphics().p("AkZF+IE8t7ID3CAIk8N7g");
	var mask_graphics_52 = new cjs.Graphics().p("AkbGGIFAuKID3B/IlAOKg");
	var mask_graphics_53 = new cjs.Graphics().p("AkeGOIFGuZID3B+IlGOZg");
	var mask_graphics_54 = new cjs.Graphics().p("AkgGWIFKupID3B+IlKOpg");
	var mask_graphics_55 = new cjs.Graphics().p("AkjGeIFQu4ID3B8IlPO5g");
	var mask_graphics_56 = new cjs.Graphics().p("AklGmIFUvHID3B8IlUPHg");
	var mask_graphics_57 = new cjs.Graphics().p("AkoGvIFavYID3B8IlZPXg");
	var mask_graphics_58 = new cjs.Graphics().p("AkqG3IFevoID3B7IlePog");
	var mask_graphics_59 = new cjs.Graphics().p("AktG/IFjv3ID4B6IljP3g");
	var mask_graphics_60 = new cjs.Graphics().p("AkvHHIFowGID3B5IloQHg");
	var mask_graphics_61 = new cjs.Graphics().p("AkyHPIFtwWID4B5IltQWg");
	var mask_graphics_62 = new cjs.Graphics().p("Ak1HXIFzwlID3B4IlxQlg");
	var mask_graphics_63 = new cjs.Graphics().p("Ak3HfIF3w1ID4B4Il3Q1g");
	var mask_graphics_64 = new cjs.Graphics().p("Ak5HnIF7xEID4B2Il7RGg");
	var mask_graphics_65 = new cjs.Graphics().p("Ak8HvIGBxUID4B3ImBRUg");
	var mask_graphics_66 = new cjs.Graphics().p("Ak+H3IGFxjID4B2ImFRjg");
	var mask_graphics_67 = new cjs.Graphics().p("AlBH/IGLxzID4B1ImLR0g");
	var mask_graphics_68 = new cjs.Graphics().p("AlEIHIGQyCID4B1ImPSCg");
	var mask_graphics_69 = new cjs.Graphics().p("AlGIQIGVyTID4B0ImVSTg");
	var mask_graphics_70 = new cjs.Graphics().p("AlJIYIGayiID4BzImZSig");
	var mask_graphics_71 = new cjs.Graphics().p("AlLIgIGeyyID5BzImeSyg");
	var mask_graphics_72 = new cjs.Graphics().p("AlNIoIGjzBID4ByImjTBg");
	var mask_graphics_73 = new cjs.Graphics().p("AlQIwIGozQID5BxImoTQg");
	var mask_graphics_74 = new cjs.Graphics().p("AlTI4IGuzgID4BxImsTgg");
	var mask_graphics_75 = new cjs.Graphics().p("AlVJAIGyzwID5BxImyTvg");
	var mask_graphics_76 = new cjs.Graphics().p("AlXJJIG30AID4BwIm3T/g");
	var mask_graphics_77 = new cjs.Graphics().p("AlaJQIG80OID5BvIm8UOg");
	var mask_graphics_78 = new cjs.Graphics().p("AlcJYIHA0eID5BuInBUfg");
	var mask_graphics_79 = new cjs.Graphics().p("AlfJhIHG0uID5BuInGUtg");
	var mask_graphics_80 = new cjs.Graphics().p("AlhJoIHL08ID5BsInLU9g");
	var mask_graphics_81 = new cjs.Graphics().p("AlkJxIHQ1NID5BsInPVNg");
	var mask_graphics_82 = new cjs.Graphics().p("AlmJ5IHU1dID5BsInUVdg");
	var mask_graphics_83 = new cjs.Graphics().p("AlpKBIHa1sID5BrInZVsg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:39.6,y:-51.7}).wait(1).to({graphics:mask_graphics_1,x:63.6,y:-89.9}).wait(1).to({graphics:mask_graphics_2,x:63.3,y:-89.3}).wait(1).to({graphics:mask_graphics_3,x:63,y:-88.7}).wait(1).to({graphics:mask_graphics_4,x:62.7,y:-88}).wait(1).to({graphics:mask_graphics_5,x:62.3,y:-87.4}).wait(1).to({graphics:mask_graphics_6,x:62,y:-86.7}).wait(1).to({graphics:mask_graphics_7,x:61.7,y:-86.1}).wait(1).to({graphics:mask_graphics_8,x:61.4,y:-85.5}).wait(1).to({graphics:mask_graphics_9,x:61.1,y:-84.8}).wait(1).to({graphics:mask_graphics_10,x:60.8,y:-84.2}).wait(1).to({graphics:mask_graphics_11,x:60.5,y:-83.6}).wait(1).to({graphics:mask_graphics_12,x:60.2,y:-82.9}).wait(1).to({graphics:mask_graphics_13,x:59.9,y:-82.3}).wait(1).to({graphics:mask_graphics_14,x:59.6,y:-81.6}).wait(1).to({graphics:mask_graphics_15,x:59.3,y:-81}).wait(1).to({graphics:mask_graphics_16,x:59,y:-80.4}).wait(1).to({graphics:mask_graphics_17,x:58.7,y:-79.7}).wait(1).to({graphics:mask_graphics_18,x:58.4,y:-79.1}).wait(1).to({graphics:mask_graphics_19,x:58.1,y:-78.5}).wait(1).to({graphics:mask_graphics_20,x:57.8,y:-77.8}).wait(1).to({graphics:mask_graphics_21,x:57.4,y:-77.2}).wait(1).to({graphics:mask_graphics_22,x:57.1,y:-76.6}).wait(1).to({graphics:mask_graphics_23,x:56.8,y:-75.9}).wait(1).to({graphics:mask_graphics_24,x:56.5,y:-75.3}).wait(1).to({graphics:mask_graphics_25,x:56.2,y:-74.6}).wait(1).to({graphics:mask_graphics_26,x:55.9,y:-74}).wait(1).to({graphics:mask_graphics_27,x:55.6,y:-73.4}).wait(1).to({graphics:mask_graphics_28,x:55.3,y:-72.7}).wait(1).to({graphics:mask_graphics_29,x:55,y:-72.1}).wait(1).to({graphics:mask_graphics_30,x:54.7,y:-71.4}).wait(1).to({graphics:mask_graphics_31,x:54.4,y:-70.8}).wait(1).to({graphics:mask_graphics_32,x:54.1,y:-70.2}).wait(1).to({graphics:mask_graphics_33,x:53.8,y:-69.6}).wait(1).to({graphics:mask_graphics_34,x:53.5,y:-68.9}).wait(1).to({graphics:mask_graphics_35,x:53.2,y:-68.3}).wait(1).to({graphics:mask_graphics_36,x:52.8,y:-67.6}).wait(1).to({graphics:mask_graphics_37,x:52.5,y:-67}).wait(1).to({graphics:mask_graphics_38,x:52.2,y:-66.3}).wait(1).to({graphics:mask_graphics_39,x:51.9,y:-65.7}).wait(1).to({graphics:mask_graphics_40,x:51.6,y:-65.1}).wait(1).to({graphics:mask_graphics_41,x:51.3,y:-64.4}).wait(1).to({graphics:mask_graphics_42,x:51,y:-63.8}).wait(1).to({graphics:mask_graphics_43,x:50.7,y:-63.2}).wait(1).to({graphics:mask_graphics_44,x:50.4,y:-62.5}).wait(1).to({graphics:mask_graphics_45,x:50.1,y:-61.9}).wait(1).to({graphics:mask_graphics_46,x:49.8,y:-61.3}).wait(1).to({graphics:mask_graphics_47,x:49.5,y:-60.6}).wait(1).to({graphics:mask_graphics_48,x:49.1,y:-60}).wait(1).to({graphics:mask_graphics_49,x:48.8,y:-59.3}).wait(1).to({graphics:mask_graphics_50,x:48.5,y:-58.7}).wait(1).to({graphics:mask_graphics_51,x:48.2,y:-58.1}).wait(1).to({graphics:mask_graphics_52,x:47.9,y:-57.4}).wait(1).to({graphics:mask_graphics_53,x:47.6,y:-56.8}).wait(1).to({graphics:mask_graphics_54,x:47.3,y:-56.2}).wait(1).to({graphics:mask_graphics_55,x:47,y:-55.5}).wait(1).to({graphics:mask_graphics_56,x:46.7,y:-54.9}).wait(1).to({graphics:mask_graphics_57,x:46.4,y:-54.3}).wait(1).to({graphics:mask_graphics_58,x:46.1,y:-53.6}).wait(1).to({graphics:mask_graphics_59,x:45.8,y:-53}).wait(1).to({graphics:mask_graphics_60,x:45.5,y:-52.3}).wait(1).to({graphics:mask_graphics_61,x:45.2,y:-51.7}).wait(1).to({graphics:mask_graphics_62,x:44.9,y:-51.1}).wait(1).to({graphics:mask_graphics_63,x:44.5,y:-50.4}).wait(1).to({graphics:mask_graphics_64,x:44.2,y:-49.8}).wait(1).to({graphics:mask_graphics_65,x:43.9,y:-49.2}).wait(1).to({graphics:mask_graphics_66,x:43.6,y:-48.5}).wait(1).to({graphics:mask_graphics_67,x:43.3,y:-47.9}).wait(1).to({graphics:mask_graphics_68,x:43,y:-47.2}).wait(1).to({graphics:mask_graphics_69,x:42.7,y:-46.6}).wait(1).to({graphics:mask_graphics_70,x:42.4,y:-46}).wait(1).to({graphics:mask_graphics_71,x:42.1,y:-45.3}).wait(1).to({graphics:mask_graphics_72,x:41.8,y:-44.7}).wait(1).to({graphics:mask_graphics_73,x:41.5,y:-44.1}).wait(1).to({graphics:mask_graphics_74,x:41.2,y:-43.4}).wait(1).to({graphics:mask_graphics_75,x:40.9,y:-42.8}).wait(1).to({graphics:mask_graphics_76,x:40.6,y:-42.2}).wait(1).to({graphics:mask_graphics_77,x:40.3,y:-41.5}).wait(1).to({graphics:mask_graphics_78,x:40,y:-40.9}).wait(1).to({graphics:mask_graphics_79,x:39.6,y:-40.2}).wait(1).to({graphics:mask_graphics_80,x:39.3,y:-39.6}).wait(1).to({graphics:mask_graphics_81,x:39,y:-39}).wait(1).to({graphics:mask_graphics_82,x:38.7,y:-38.3}).wait(1).to({graphics:mask_graphics_83,x:38.4,y:-37.7}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AELoIQjIIxlNHg");
	this.shape.setTransform(36.7,-32.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(84));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(48.5,-91,26.1,16.7);


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
(lib.WS_Cursive_T = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_630 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(630).call(this.frame_630).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(310.9,180.4,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[310.9,180.5,277.6,248.2,231,341.8,224,355.4,201.6,375.2,179.3,395,151.1,388.4,122.8,381.9,105.2,357.4,87.7,332.9,85.9,318.7,84.2,304.6,80.1,280]}},231).wait(13).to({x:80.9,y:282.5},0).to({guide:{path:[80.9,282.5,82.2,286.4,83.8,290.1,86,295.1,89.4,299.5,92.8,304,97,307.6,101.3,311.4,106.4,314,111.2,316.5,116.3,318.1,121.7,319.8,127.1,320.9,132.5,322.1,138.1,322.7,144,323.6,149.6,323.5,155.1,323.4,160.5,322.7,166.3,322.4,172.1,321.4,178,320.3,183.5,319.1,188.9,318,194.1,315.8,195.9,315.1,197.6,314.4]}},123).wait(16).to({x:180.1,y:197.9},0).to({guide:{path:[180.2,197.9,184.7,194.3,189.5,189.6,189.5,189.6,189.5,189.6,200.8,178.6,215.6,171.2,222.4,167.8,229.5,165.3,272.4,150.7,328.7,169.6,357.1,179.1,381.8,181.6,414.5,185,441,176.4,455.5,171.6,466.4,163.7,471.2,160.2,473.3,156.3]}},179).wait(13).to({startPosition:0},0).to({guide:{path:[474.5,156.8,471.2,92.7,524.6,57.3,570.7,26.7,635,56.5]}},46).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(79.3,280.9,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},231).wait(13).to({_off:false,x:199.6,y:314.3},0).to({_off:true},123).wait(16).to({_off:false,x:470.3,y:159.5},0).to({_off:true},178).wait(61));

	// arrow
	this.instance_1 = new lib.ar4("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(149.9,112.6,1,1,0,-93.6,86.4,-18.9,-61.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(392).to({_off:false},0).wait(239));

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_392 = new cjs.Graphics().p("A6PRTIAArBMA0fAAHIAALBg");
	var mask_graphics_393 = new cjs.Graphics().p("A6PRTIAArBMA0fAAHIAALBg");
	var mask_graphics_394 = new cjs.Graphics().p("A6PRTIAArBMA0fAAGIAALBg");
	var mask_graphics_395 = new cjs.Graphics().p("A6PRSIAArAMA0fAAGIAALBg");
	var mask_graphics_396 = new cjs.Graphics().p("A6PRSIAArBMA0fAAHIAALBg");
	var mask_graphics_397 = new cjs.Graphics().p("A6PRSIAArBMA0eAAHIABLBg");
	var mask_graphics_398 = new cjs.Graphics().p("A6PRSIAArBMA0eAAGIABLBg");
	var mask_graphics_399 = new cjs.Graphics().p("A6PRRIAArAMA0eAAGIABLBg");
	var mask_graphics_400 = new cjs.Graphics().p("A6PRRIAArBMA0eAAHIABLBg");
	var mask_graphics_401 = new cjs.Graphics().p("A6PRRIAArBMA0eAAGIABLBg");
	var mask_graphics_402 = new cjs.Graphics().p("A6PRRIAArBMA0eAAGIABLBg");
	var mask_graphics_403 = new cjs.Graphics().p("A6PRQIAArAMA0eAAGIABLBg");
	var mask_graphics_404 = new cjs.Graphics().p("A6PRQIAArBMA0eAAHIABLBg");
	var mask_graphics_405 = new cjs.Graphics().p("A6PRQIAArBMA0eAAGIABLBg");
	var mask_graphics_406 = new cjs.Graphics().p("A6PRQIAArBMA0eAAGIABLBg");
	var mask_graphics_407 = new cjs.Graphics().p("A6PRPIAArAMA0eAAGIABLBg");
	var mask_graphics_408 = new cjs.Graphics().p("A6PRPIAArBMA0eAAGIABLBg");
	var mask_graphics_409 = new cjs.Graphics().p("A6PRPIAArBMA0eAAGIABLBg");
	var mask_graphics_410 = new cjs.Graphics().p("A6PRPIAArBMA0eAAGIABLBg");
	var mask_graphics_411 = new cjs.Graphics().p("A6OROIgBrAMA0eAAGIABLBg");
	var mask_graphics_412 = new cjs.Graphics().p("A6OROIgBrAMA0eAAFIABLBg");
	var mask_graphics_413 = new cjs.Graphics().p("A6OROIgBrBMA0eAAGIABLBg");
	var mask_graphics_414 = new cjs.Graphics().p("A6OROIgBrBMA0eAAGIABLBg");
	var mask_graphics_415 = new cjs.Graphics().p("A6ORNIgBrAMA0eAAGIABLAg");
	var mask_graphics_416 = new cjs.Graphics().p("A6ORNIgBrAMA0eAAFIABLBg");
	var mask_graphics_417 = new cjs.Graphics().p("A6ORNIgBrBMA0eAAGIABLBg");
	var mask_graphics_418 = new cjs.Graphics().p("A6ORNIgBrBMA0eAAGIABLBg");
	var mask_graphics_419 = new cjs.Graphics().p("A6ORMIgBrAMA0eAAFIABLBg");
	var mask_graphics_420 = new cjs.Graphics().p("A6ORMIgBrAMA0eAAFIABLBg");
	var mask_graphics_421 = new cjs.Graphics().p("A6ORMIgBrBMA0eAAGIABLBg");
	var mask_graphics_422 = new cjs.Graphics().p("A6ORMIgBrBMA0eAAGIABLAg");
	var mask_graphics_423 = new cjs.Graphics().p("A6ORLIgBrAMA0eAAFIABLBg");
	var mask_graphics_424 = new cjs.Graphics().p("A6ORLIgBrAMA0eAAFIABLBg");
	var mask_graphics_425 = new cjs.Graphics().p("A6ORLIgBrBMA0eAAGIABLBg");
	var mask_graphics_426 = new cjs.Graphics().p("A6ORLIgBrBMA0eAAGIABLAg");
	var mask_graphics_427 = new cjs.Graphics().p("A6ORKIgBrAMA0eAAFIABLBg");
	var mask_graphics_428 = new cjs.Graphics().p("A6ORKIAArAMA0dAAFIAALBg");
	var mask_graphics_429 = new cjs.Graphics().p("A6ORKIAArAMA0dAAFIAALAg");
	var mask_graphics_430 = new cjs.Graphics().p("A6ORKIAArBMA0dAAFIAALBg");
	var mask_graphics_431 = new cjs.Graphics().p("A6ORJIAArAMA0dAAFIAALBg");
	var mask_graphics_432 = new cjs.Graphics().p("A6ORJIAArAMA0cAAFIABLBg");
	var mask_graphics_433 = new cjs.Graphics().p("A6ORJIAArAMA0cAAFIABLAg");
	var mask_graphics_434 = new cjs.Graphics().p("A6ORJIAArBMA0cAAFIABLBg");
	var mask_graphics_435 = new cjs.Graphics().p("A6ORIIAArAMA0cAAFIABLBg");
	var mask_graphics_436 = new cjs.Graphics().p("A6ORIIAArAMA0cAAFIABLAg");
	var mask_graphics_437 = new cjs.Graphics().p("A6ORIIAArAMA0cAAEIABLBg");
	var mask_graphics_438 = new cjs.Graphics().p("A6ORIIAArBMA0cAAFIABLBg");
	var mask_graphics_439 = new cjs.Graphics().p("A6ORIIAArBMA0cAAFIABLBg");
	var mask_graphics_440 = new cjs.Graphics().p("A6ORHIAArAMA0cAAFIABLAg");
	var mask_graphics_441 = new cjs.Graphics().p("A6ORHIAArAMA0cAAEIABLBg");
	var mask_graphics_442 = new cjs.Graphics().p("A6ORHIAArBMA0cAAFIABLBg");
	var mask_graphics_443 = new cjs.Graphics().p("A6ORHIAArBMA0cAAFIABLAg");
	var mask_graphics_444 = new cjs.Graphics().p("A6ORGIAArAMA0cAAFIABLAg");
	var mask_graphics_445 = new cjs.Graphics().p("A6ORGIAArAMA0cAAEIABLBg");
	var mask_graphics_446 = new cjs.Graphics().p("A6NRGIgBrAMA0cAAEIABLBg");
	var mask_graphics_447 = new cjs.Graphics().p("A6NRGIgBrBMA0cAAFIABLAg");
	var mask_graphics_448 = new cjs.Graphics().p("A6NRFIgBrAMA0cAAEIABLBg");
	var mask_graphics_449 = new cjs.Graphics().p("A6NRFIgBrAMA0cAAEIABLBg");
	var mask_graphics_450 = new cjs.Graphics().p("A6NRFIgBrAMA0cAAEIABLAg");
	var mask_graphics_451 = new cjs.Graphics().p("A6NRFIgBrBMA0cAAFIABLAg");
	var mask_graphics_452 = new cjs.Graphics().p("A6NREIgBrAMA0cAAEIABLBg");
	var mask_graphics_453 = new cjs.Graphics().p("A6NREIgBrAMA0cAAEIABLBg");
	var mask_graphics_454 = new cjs.Graphics().p("A6NREIgBrAMA0cAAEIABLAg");
	var mask_graphics_455 = new cjs.Graphics().p("A6NREIgBrBMA0cAAFIABLAg");
	var mask_graphics_456 = new cjs.Graphics().p("A6NRDIgBrAMA0cAAEIABLBg");
	var mask_graphics_457 = new cjs.Graphics().p("A6NRDIgBrAMA0cAAEIABLAg");
	var mask_graphics_458 = new cjs.Graphics().p("A6NRDIgBrAMA0cAAEIABLAg");
	var mask_graphics_459 = new cjs.Graphics().p("A6NRDIgBrBMA0cAAEIABLBg");
	var mask_graphics_460 = new cjs.Graphics().p("A6NRCIgBrAMA0cAAEIABLAg");
	var mask_graphics_461 = new cjs.Graphics().p("A6NRCIgBrAMA0cAAEIABLAg");
	var mask_graphics_462 = new cjs.Graphics().p("A6NRCIgBrAMA0cAAEIABLAg");
	var mask_graphics_463 = new cjs.Graphics().p("A6NRCIgBrAMA0cAADIABLBg");
	var mask_graphics_464 = new cjs.Graphics().p("A6NRBIgBrAMA0cAAEIABLAg");
	var mask_graphics_465 = new cjs.Graphics().p("A6NRBIgBrAMA0cAAEIABLAg");
	var mask_graphics_466 = new cjs.Graphics().p("A6NRBIgBrAMA0cAADIABLBg");
	var mask_graphics_467 = new cjs.Graphics().p("A6NRBIgBrAMA0bAADIACLBg");
	var mask_graphics_468 = new cjs.Graphics().p("A6NRAIgBrAMA0bAAEIACLAg");
	var mask_graphics_469 = new cjs.Graphics().p("A6NRAIgBrAMA0bAAEIACLAg");
	var mask_graphics_470 = new cjs.Graphics().p("A6NRAIgBrAMA0bAADIACLBg");
	var mask_graphics_471 = new cjs.Graphics().p("A6NRAIgBrAMA0bAADIACLAg");
	var mask_graphics_472 = new cjs.Graphics().p("A6NQ/IgBrAMA0bAAEIACLAg");
	var mask_graphics_473 = new cjs.Graphics().p("A6NQ/IgBrAMA0bAAEIACLAg");
	var mask_graphics_474 = new cjs.Graphics().p("A6NQ/IgBrAMA0bAADIACLAg");
	var mask_graphics_475 = new cjs.Graphics().p("A6NQ/IgBrAMA0bAADIACLAg");
	var mask_graphics_476 = new cjs.Graphics().p("A6NQ+IgBrAMA0bAAEIACLAg");
	var mask_graphics_477 = new cjs.Graphics().p("A6NQ+IgBrAMA0bAADIABLBg");
	var mask_graphics_478 = new cjs.Graphics().p("A6NQ+IAArAMA0aAADIABLAg");
	var mask_graphics_479 = new cjs.Graphics().p("A6NQ+IAArAMA0aAADIABLAg");
	var mask_graphics_480 = new cjs.Graphics().p("A6MQ9IgBq/MA0aAADIABLAg");
	var mask_graphics_481 = new cjs.Graphics().p("A6MQ9IgBrAMA0aAADIABLAg");
	var mask_graphics_482 = new cjs.Graphics().p("A6MQ9IgBrAMA0aAADIABLAg");
	var mask_graphics_483 = new cjs.Graphics().p("A6MQ9IgBrAMA0aAADIABLAg");
	var mask_graphics_484 = new cjs.Graphics().p("A6MQ8IgBq/MA0aAADIABLAg");
	var mask_graphics_485 = new cjs.Graphics().p("A6MQ8IgBrAMA0aAADIABLAg");
	var mask_graphics_486 = new cjs.Graphics().p("A6MQ8IgBrAMA0aAADIABLAg");
	var mask_graphics_487 = new cjs.Graphics().p("A6HQ8IgBrAMA0aAADIACLAg");
	var mask_graphics_488 = new cjs.Graphics().p("A5/Q7IgBq/MA0aAACIACLAg");
	var mask_graphics_489 = new cjs.Graphics().p("A53Q7IgBrAMA0bAADIABLAg");
	var mask_graphics_490 = new cjs.Graphics().p("A5uQ7IgBrAMA0aAADIABLAg");
	var mask_graphics_491 = new cjs.Graphics().p("A5mQ7IgBrAMA0aAADIABLAg");
	var mask_graphics_492 = new cjs.Graphics().p("A5eQ6IgBq/MA0aAACIACLAg");
	var mask_graphics_493 = new cjs.Graphics().p("A5WQ6IgBrAMA0aAADIACLAg");
	var mask_graphics_494 = new cjs.Graphics().p("A5NQ6IgBrAMA0ZAADIACLAg");
	var mask_graphics_495 = new cjs.Graphics().p("A5FQ6IgBrAMA0aAACIABLAg");
	var mask_graphics_496 = new cjs.Graphics().p("A49Q5IgBq/MA0aAACIABLAg");
	var mask_graphics_497 = new cjs.Graphics().p("A41Q5IgBq/MA0aAACIABLAg");
	var mask_graphics_498 = new cjs.Graphics().p("A4sQ5IgBrAMA0ZAADIACLAg");
	var mask_graphics_499 = new cjs.Graphics().p("A4lQ5IgBrAMA0aAACIABLAg");
	var mask_graphics_500 = new cjs.Graphics().p("A4cQ4IgBrAMA0aAADIABLAg");
	var mask_graphics_501 = new cjs.Graphics().p("A4TQ4IgBrAMA0aAADIABLAg");
	var mask_graphics_502 = new cjs.Graphics().p("A4KQ4IgBrAMA0ZAACIACLAg");
	var mask_graphics_503 = new cjs.Graphics().p("A4CQ3IgBrAMA0aAADIACLAg");
	var mask_graphics_504 = new cjs.Graphics().p("A35Q3IgBrAMA0aAADIABLAg");
	var mask_graphics_505 = new cjs.Graphics().p("A3wQ3IgBrAMA0aAACIABLAg");
	var mask_graphics_506 = new cjs.Graphics().p("A3oQ2IgBrAMA0bAADIABLAg");
	var mask_graphics_507 = new cjs.Graphics().p("A3fQ2IgBrAMA0aAADIACLAg");
	var mask_graphics_508 = new cjs.Graphics().p("A3WQ2IgBrAMA0aAADIACLAg");
	var mask_graphics_509 = new cjs.Graphics().p("A3NQ1IgBrAMA0aAADIABLAg");
	var mask_graphics_510 = new cjs.Graphics().p("A3FQ1IgBrAMA0bAADIABLAg");
	var mask_graphics_511 = new cjs.Graphics().p("A28Q1IgBrAMA0bAADIABLAg");
	var mask_graphics_512 = new cjs.Graphics().p("A2zQ0IgBrAMA0aAADIACLBg");
	var mask_graphics_513 = new cjs.Graphics().p("A2rQ0IAArAMA0aAADIABLAg");
	var mask_graphics_514 = new cjs.Graphics().p("A2iQ0IgBrAMA0bAADIABLAg");
	var mask_graphics_515 = new cjs.Graphics().p("A2ZQzIgBrAMA0bAAEIABLAg");
	var mask_graphics_516 = new cjs.Graphics().p("A2QQzIgBrAMA0bAADIABLAg");
	var mask_graphics_517 = new cjs.Graphics().p("A2IQzIgBrAMA0bAADIACLAg");
	var mask_graphics_518 = new cjs.Graphics().p("A1/QyIgBrAMA0bAAEIABLAg");
	var mask_graphics_519 = new cjs.Graphics().p("A12QyIgBrAMA0bAADIABLBg");
	var mask_graphics_520 = new cjs.Graphics().p("A1uQyIAArAMA0bAADIABLAg");
	var mask_graphics_521 = new cjs.Graphics().p("A1lQxIgBrAMA0cAAEIABLAg");
	var mask_graphics_522 = new cjs.Graphics().p("A1cQxIgBrAMA0bAAEIACLAg");
	var mask_graphics_523 = new cjs.Graphics().p("A1TQxIgBrAMA0bAADIABLBg");
	var mask_graphics_524 = new cjs.Graphics().p("A1LQwIAArAMA0bAAEIABLAg");
	var mask_graphics_525 = new cjs.Graphics().p("A1CQwIgBrAMA0cAAEIABLAg");
	var mask_graphics_526 = new cjs.Graphics().p("A05QwIgBrAMA0cAADIABLBg");
	var mask_graphics_527 = new cjs.Graphics().p("A0xQvIAArAMA0bAAEIACLBg");
	var mask_graphics_528 = new cjs.Graphics().p("A0oQvIgBrAMA0cAAEIABLAg");
	var mask_graphics_529 = new cjs.Graphics().p("A0fQvIgBrBMA0cAAFIABLAg");
	var mask_graphics_530 = new cjs.Graphics().p("A0WQuIgBrAMA0cAAEIABLBg");
	var mask_graphics_531 = new cjs.Graphics().p("A0OQuIAArAMA0cAAEIABLAg");
	var mask_graphics_532 = new cjs.Graphics().p("A0FQuIgBrBMA0cAAFIABLAg");
	var mask_graphics_533 = new cjs.Graphics().p("Az8QtIgBrAMA0cAAEIABLBg");
	var mask_graphics_534 = new cjs.Graphics().p("Az0QtIAArAMA0cAAEIABLBg");
	var mask_graphics_535 = new cjs.Graphics().p("AzrQtIAArBMA0cAAFIABLAg");
	var mask_graphics_536 = new cjs.Graphics().p("AziQsIgBrAMA0dAAFIABLAg");
	var mask_graphics_537 = new cjs.Graphics().p("AzZQsIgBrAMA0cAAEIABLBg");
	var mask_graphics_538 = new cjs.Graphics().p("AzRQsIAArBMA0cAAFIABLBg");
	var mask_graphics_539 = new cjs.Graphics().p("AzIQrIgBrAMA0dAAFIABLAg");
	var mask_graphics_540 = new cjs.Graphics().p("Ay/QrIgBrAMA0dAAEIABLBg");
	var mask_graphics_541 = new cjs.Graphics().p("Ay3QrIAArBMA0dAAFIABLBg");
	var mask_graphics_542 = new cjs.Graphics().p("AyuQqIAArAMA0cAAFIABLAg");
	var mask_graphics_543 = new cjs.Graphics().p("AylQqIgBrAMA0dAAFIABLAg");
	var mask_graphics_544 = new cjs.Graphics().p("AycQqIgBrBMA0dAAFIABLBg");
	var mask_graphics_545 = new cjs.Graphics().p("AyUQpIAArAMA0dAAFIABLBg");
	var mask_graphics_546 = new cjs.Graphics().p("AyLQpIAArAMA0dAAFIAALAg");
	var mask_graphics_547 = new cjs.Graphics().p("AyCQpIgBrBMA0dAAFIABLBg");
	var mask_graphics_548 = new cjs.Graphics().p("Ax6QoIAArAMA0dAAFIABLBg");
	var mask_graphics_549 = new cjs.Graphics().p("AxxQoIAArAMA0dAAFIABLBg");
	var mask_graphics_550 = new cjs.Graphics().p("AxoQoIgBrBMA0eAAGIABLAg");
	var mask_graphics_551 = new cjs.Graphics().p("AxfQnIgBrAMA0eAAFIAALBg");
	var mask_graphics_552 = new cjs.Graphics().p("AxXQnIAArAMA0dAAFIABLBg");
	var mask_graphics_553 = new cjs.Graphics().p("AxOQnIAArBMA0dAAGIABLBg");
	var mask_graphics_554 = new cjs.Graphics().p("AxFQmIgBrAMA0eAAFIABLBg");
	var mask_graphics_555 = new cjs.Graphics().p("Aw9QmIAArAMA0eAAFIABLBg");
	var mask_graphics_556 = new cjs.Graphics().p("Aw0QmIAArBMA0eAAGIAALBg");
	var mask_graphics_557 = new cjs.Graphics().p("AwrQlIAArAMA0dAAGIABLAg");
	var mask_graphics_558 = new cjs.Graphics().p("AwiQlIgBrBMA0eAAGIABLBg");
	var mask_graphics_559 = new cjs.Graphics().p("AwaQlIAArBMA0eAAGIABLBg");
	var mask_graphics_560 = new cjs.Graphics().p("AwRQkIAArAMA0eAAGIAALBg");
	var mask_graphics_561 = new cjs.Graphics().p("AwIQkIgBrBMA0fAAGIAALBg");
	var mask_graphics_562 = new cjs.Graphics().p("AwAQkIAArBMA0eAAGIABLBg");
	var mask_graphics_563 = new cjs.Graphics().p("Av3QjIAArAMA0eAAGIABLBg");
	var mask_graphics_564 = new cjs.Graphics().p("AvuQjIAArBMA0eAAHIABLBg");
	var mask_graphics_565 = new cjs.Graphics().p("AvlQjIgBrBMA0fAAGIAALBg");
	var mask_graphics_566 = new cjs.Graphics().p("AvdQiIAArAMA0fAAGIAALBg");
	var mask_graphics_567 = new cjs.Graphics().p("AvUQiIAArBMA0eAAHIABLBg");
	var mask_graphics_568 = new cjs.Graphics().p("AvLQiIAArBMA0eAAGIABLBg");
	var mask_graphics_569 = new cjs.Graphics().p("AvDQhIAArAMA0fAAGIABLBg");
	var mask_graphics_570 = new cjs.Graphics().p("Au6QhIAArBMA0fAAHIAALBg");
	var mask_graphics_571 = new cjs.Graphics().p("AuxQhIAArBMA0fAAHIABLBg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(392).to({graphics:mask_graphics_392,x:13.1,y:111.4}).wait(1).to({graphics:mask_graphics_393,x:14.7,y:111.4}).wait(1).to({graphics:mask_graphics_394,x:16.4,y:111.3}).wait(1).to({graphics:mask_graphics_395,x:18,y:111.3}).wait(1).to({graphics:mask_graphics_396,x:19.6,y:111.3}).wait(1).to({graphics:mask_graphics_397,x:21.3,y:111.3}).wait(1).to({graphics:mask_graphics_398,x:22.9,y:111.2}).wait(1).to({graphics:mask_graphics_399,x:24.6,y:111.2}).wait(1).to({graphics:mask_graphics_400,x:26.2,y:111.2}).wait(1).to({graphics:mask_graphics_401,x:27.8,y:111.1}).wait(1).to({graphics:mask_graphics_402,x:29.5,y:111.1}).wait(1).to({graphics:mask_graphics_403,x:31.1,y:111.1}).wait(1).to({graphics:mask_graphics_404,x:32.8,y:111.1}).wait(1).to({graphics:mask_graphics_405,x:34.4,y:111}).wait(1).to({graphics:mask_graphics_406,x:36,y:111}).wait(1).to({graphics:mask_graphics_407,x:37.7,y:111}).wait(1).to({graphics:mask_graphics_408,x:39.3,y:110.9}).wait(1).to({graphics:mask_graphics_409,x:41,y:110.9}).wait(1).to({graphics:mask_graphics_410,x:42.6,y:110.9}).wait(1).to({graphics:mask_graphics_411,x:44.2,y:110.9}).wait(1).to({graphics:mask_graphics_412,x:45.9,y:110.8}).wait(1).to({graphics:mask_graphics_413,x:47.5,y:110.8}).wait(1).to({graphics:mask_graphics_414,x:49.2,y:110.8}).wait(1).to({graphics:mask_graphics_415,x:50.8,y:110.7}).wait(1).to({graphics:mask_graphics_416,x:52.4,y:110.7}).wait(1).to({graphics:mask_graphics_417,x:54.1,y:110.7}).wait(1).to({graphics:mask_graphics_418,x:55.7,y:110.7}).wait(1).to({graphics:mask_graphics_419,x:57.4,y:110.6}).wait(1).to({graphics:mask_graphics_420,x:59,y:110.6}).wait(1).to({graphics:mask_graphics_421,x:60.6,y:110.6}).wait(1).to({graphics:mask_graphics_422,x:62.3,y:110.5}).wait(1).to({graphics:mask_graphics_423,x:63.9,y:110.5}).wait(1).to({graphics:mask_graphics_424,x:65.6,y:110.5}).wait(1).to({graphics:mask_graphics_425,x:67.2,y:110.5}).wait(1).to({graphics:mask_graphics_426,x:68.8,y:110.4}).wait(1).to({graphics:mask_graphics_427,x:70.5,y:110.4}).wait(1).to({graphics:mask_graphics_428,x:72.1,y:110.4}).wait(1).to({graphics:mask_graphics_429,x:73.8,y:110.3}).wait(1).to({graphics:mask_graphics_430,x:75.4,y:110.3}).wait(1).to({graphics:mask_graphics_431,x:77,y:110.3}).wait(1).to({graphics:mask_graphics_432,x:78.7,y:110.3}).wait(1).to({graphics:mask_graphics_433,x:80.3,y:110.2}).wait(1).to({graphics:mask_graphics_434,x:82,y:110.2}).wait(1).to({graphics:mask_graphics_435,x:83.6,y:110.2}).wait(1).to({graphics:mask_graphics_436,x:85.2,y:110.1}).wait(1).to({graphics:mask_graphics_437,x:86.9,y:110.1}).wait(1).to({graphics:mask_graphics_438,x:88.5,y:110.1}).wait(1).to({graphics:mask_graphics_439,x:90.2,y:110.1}).wait(1).to({graphics:mask_graphics_440,x:91.8,y:110}).wait(1).to({graphics:mask_graphics_441,x:93.4,y:110}).wait(1).to({graphics:mask_graphics_442,x:95.1,y:110}).wait(1).to({graphics:mask_graphics_443,x:96.7,y:109.9}).wait(1).to({graphics:mask_graphics_444,x:98.4,y:109.9}).wait(1).to({graphics:mask_graphics_445,x:100,y:109.9}).wait(1).to({graphics:mask_graphics_446,x:101.6,y:109.9}).wait(1).to({graphics:mask_graphics_447,x:103.3,y:109.8}).wait(1).to({graphics:mask_graphics_448,x:104.9,y:109.8}).wait(1).to({graphics:mask_graphics_449,x:106.6,y:109.8}).wait(1).to({graphics:mask_graphics_450,x:108.2,y:109.7}).wait(1).to({graphics:mask_graphics_451,x:109.8,y:109.7}).wait(1).to({graphics:mask_graphics_452,x:111.5,y:109.7}).wait(1).to({graphics:mask_graphics_453,x:113.1,y:109.7}).wait(1).to({graphics:mask_graphics_454,x:114.8,y:109.6}).wait(1).to({graphics:mask_graphics_455,x:116.4,y:109.6}).wait(1).to({graphics:mask_graphics_456,x:118,y:109.6}).wait(1).to({graphics:mask_graphics_457,x:119.7,y:109.5}).wait(1).to({graphics:mask_graphics_458,x:121.3,y:109.5}).wait(1).to({graphics:mask_graphics_459,x:123,y:109.5}).wait(1).to({graphics:mask_graphics_460,x:124.6,y:109.5}).wait(1).to({graphics:mask_graphics_461,x:126.2,y:109.4}).wait(1).to({graphics:mask_graphics_462,x:127.9,y:109.4}).wait(1).to({graphics:mask_graphics_463,x:129.5,y:109.4}).wait(1).to({graphics:mask_graphics_464,x:131.2,y:109.3}).wait(1).to({graphics:mask_graphics_465,x:132.8,y:109.3}).wait(1).to({graphics:mask_graphics_466,x:134.4,y:109.3}).wait(1).to({graphics:mask_graphics_467,x:136.1,y:109.2}).wait(1).to({graphics:mask_graphics_468,x:137.7,y:109.2}).wait(1).to({graphics:mask_graphics_469,x:139.4,y:109.2}).wait(1).to({graphics:mask_graphics_470,x:141,y:109.2}).wait(1).to({graphics:mask_graphics_471,x:142.6,y:109.1}).wait(1).to({graphics:mask_graphics_472,x:144.3,y:109.1}).wait(1).to({graphics:mask_graphics_473,x:145.9,y:109.1}).wait(1).to({graphics:mask_graphics_474,x:147.6,y:109}).wait(1).to({graphics:mask_graphics_475,x:149.2,y:109}).wait(1).to({graphics:mask_graphics_476,x:150.8,y:109}).wait(1).to({graphics:mask_graphics_477,x:152.5,y:109}).wait(1).to({graphics:mask_graphics_478,x:154.1,y:108.9}).wait(1).to({graphics:mask_graphics_479,x:155.8,y:108.9}).wait(1).to({graphics:mask_graphics_480,x:157.4,y:108.9}).wait(1).to({graphics:mask_graphics_481,x:159,y:108.8}).wait(1).to({graphics:mask_graphics_482,x:160.7,y:108.8}).wait(1).to({graphics:mask_graphics_483,x:162.3,y:108.8}).wait(1).to({graphics:mask_graphics_484,x:164,y:108.8}).wait(1).to({graphics:mask_graphics_485,x:165.6,y:108.7}).wait(1).to({graphics:mask_graphics_486,x:167.2,y:108.7}).wait(1).to({graphics:mask_graphics_487,x:168.4,y:108.7}).wait(1).to({graphics:mask_graphics_488,x:169.2,y:108.6}).wait(1).to({graphics:mask_graphics_489,x:170,y:108.6}).wait(1).to({graphics:mask_graphics_490,x:170.8,y:108.6}).wait(1).to({graphics:mask_graphics_491,x:171.6,y:108.6}).wait(1).to({graphics:mask_graphics_492,x:172.5,y:108.5}).wait(1).to({graphics:mask_graphics_493,x:173.3,y:108.5}).wait(1).to({graphics:mask_graphics_494,x:174.1,y:108.5}).wait(1).to({graphics:mask_graphics_495,x:174.9,y:108.4}).wait(1).to({graphics:mask_graphics_496,x:175.7,y:108.4}).wait(1).to({graphics:mask_graphics_497,x:176.5,y:108.4}).wait(1).to({graphics:mask_graphics_498,x:177.4,y:108.4}).wait(1).to({graphics:mask_graphics_499,x:178.1,y:108.3}).wait(1).to({graphics:mask_graphics_500,x:179,y:108.3}).wait(1).to({graphics:mask_graphics_501,x:179.9,y:108.3}).wait(1).to({graphics:mask_graphics_502,x:180.8,y:108.2}).wait(1).to({graphics:mask_graphics_503,x:181.7,y:108.2}).wait(1).to({graphics:mask_graphics_504,x:182.5,y:108.2}).wait(1).to({graphics:mask_graphics_505,x:183.4,y:108.1}).wait(1).to({graphics:mask_graphics_506,x:184.3,y:108.1}).wait(1).to({graphics:mask_graphics_507,x:185.2,y:108.1}).wait(1).to({graphics:mask_graphics_508,x:186.1,y:108.1}).wait(1).to({graphics:mask_graphics_509,x:186.9,y:108}).wait(1).to({graphics:mask_graphics_510,x:187.8,y:108}).wait(1).to({graphics:mask_graphics_511,x:188.7,y:108}).wait(1).to({graphics:mask_graphics_512,x:189.6,y:108}).wait(1).to({graphics:mask_graphics_513,x:190.4,y:107.9}).wait(1).to({graphics:mask_graphics_514,x:191.3,y:107.9}).wait(1).to({graphics:mask_graphics_515,x:192.2,y:107.9}).wait(1).to({graphics:mask_graphics_516,x:193.1,y:107.9}).wait(1).to({graphics:mask_graphics_517,x:194,y:107.8}).wait(1).to({graphics:mask_graphics_518,x:194.8,y:107.8}).wait(1).to({graphics:mask_graphics_519,x:195.7,y:107.8}).wait(1).to({graphics:mask_graphics_520,x:196.6,y:107.7}).wait(1).to({graphics:mask_graphics_521,x:197.5,y:107.7}).wait(1).to({graphics:mask_graphics_522,x:198.4,y:107.7}).wait(1).to({graphics:mask_graphics_523,x:199.2,y:107.7}).wait(1).to({graphics:mask_graphics_524,x:200.1,y:107.6}).wait(1).to({graphics:mask_graphics_525,x:201,y:107.6}).wait(1).to({graphics:mask_graphics_526,x:201.9,y:107.6}).wait(1).to({graphics:mask_graphics_527,x:202.8,y:107.6}).wait(1).to({graphics:mask_graphics_528,x:203.6,y:107.5}).wait(1).to({graphics:mask_graphics_529,x:204.5,y:107.5}).wait(1).to({graphics:mask_graphics_530,x:205.4,y:107.5}).wait(1).to({graphics:mask_graphics_531,x:206.3,y:107.4}).wait(1).to({graphics:mask_graphics_532,x:207.1,y:107.4}).wait(1).to({graphics:mask_graphics_533,x:208,y:107.4}).wait(1).to({graphics:mask_graphics_534,x:208.9,y:107.4}).wait(1).to({graphics:mask_graphics_535,x:209.8,y:107.3}).wait(1).to({graphics:mask_graphics_536,x:210.7,y:107.3}).wait(1).to({graphics:mask_graphics_537,x:211.5,y:107.3}).wait(1).to({graphics:mask_graphics_538,x:212.4,y:107.3}).wait(1).to({graphics:mask_graphics_539,x:213.3,y:107.2}).wait(1).to({graphics:mask_graphics_540,x:214.2,y:107.2}).wait(1).to({graphics:mask_graphics_541,x:215.1,y:107.2}).wait(1).to({graphics:mask_graphics_542,x:215.9,y:107.1}).wait(1).to({graphics:mask_graphics_543,x:216.8,y:107.1}).wait(1).to({graphics:mask_graphics_544,x:217.7,y:107.1}).wait(1).to({graphics:mask_graphics_545,x:218.6,y:107.1}).wait(1).to({graphics:mask_graphics_546,x:219.4,y:107}).wait(1).to({graphics:mask_graphics_547,x:220.3,y:107}).wait(1).to({graphics:mask_graphics_548,x:221.2,y:107}).wait(1).to({graphics:mask_graphics_549,x:222.1,y:107}).wait(1).to({graphics:mask_graphics_550,x:223,y:106.9}).wait(1).to({graphics:mask_graphics_551,x:223.8,y:106.9}).wait(1).to({graphics:mask_graphics_552,x:224.7,y:106.9}).wait(1).to({graphics:mask_graphics_553,x:225.6,y:106.9}).wait(1).to({graphics:mask_graphics_554,x:226.5,y:106.8}).wait(1).to({graphics:mask_graphics_555,x:227.4,y:106.8}).wait(1).to({graphics:mask_graphics_556,x:228.2,y:106.8}).wait(1).to({graphics:mask_graphics_557,x:229.1,y:106.7}).wait(1).to({graphics:mask_graphics_558,x:230,y:106.7}).wait(1).to({graphics:mask_graphics_559,x:230.9,y:106.7}).wait(1).to({graphics:mask_graphics_560,x:231.7,y:106.7}).wait(1).to({graphics:mask_graphics_561,x:232.6,y:106.6}).wait(1).to({graphics:mask_graphics_562,x:233.5,y:106.6}).wait(1).to({graphics:mask_graphics_563,x:234.4,y:106.6}).wait(1).to({graphics:mask_graphics_564,x:235.3,y:106.6}).wait(1).to({graphics:mask_graphics_565,x:236.1,y:106.5}).wait(1).to({graphics:mask_graphics_566,x:237,y:106.5}).wait(1).to({graphics:mask_graphics_567,x:237.9,y:106.5}).wait(1).to({graphics:mask_graphics_568,x:238.8,y:106.4}).wait(1).to({graphics:mask_graphics_569,x:239.7,y:106.4}).wait(1).to({graphics:mask_graphics_570,x:240.5,y:106.4}).wait(1).to({graphics:mask_graphics_571,x:241.5,y:106.4}).wait(60));

	// Layer 16
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(15,1,1).p("A25DUQAagoA4g3QBxhvCUhJQHbjsKRDcQKSDbHRiXQCRgvBshQQA3gnAZge");
	this.shape_1.setTransform(324.6,179.2);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(392).to({_off:false},0).wait(239));

	// Layer 2
	this.instance_2 = new lib.ar4("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(136,242.5,1,1,-82.5,0,0,-19.4,-51.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(253).to({_off:false},0).wait(378));

	// Layer 13 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_253 = new cjs.Graphics().p("A6NDFQDzriK2leQK2leLgD1QLiDxFdK2Mg0TAaXQleq1Dzrgg");
	var mask_1_graphics_254 = new cjs.Graphics().p("A6PDRQDqrlKylnQKxlmLjDrQLlDoFmKyMgz+AbBQlmqyDprig");
	var mask_1_graphics_255 = new cjs.Graphics().p("A6QDdQDgroKtlvQKtlvLmDiQLnDfFvKtMgzoAbqQlvqtDhrlg");
	var mask_1_graphics_256 = new cjs.Graphics().p("A6SDpQDYrqKol4QKol4LpDZQLqDWF4KoMgzSAcUQl3qpDWrog");
	var mask_1_graphics_257 = new cjs.Graphics().p("A6SD1QDOrtKjmAQKkmALrDQQLtDMGAKjMgy7Ac9QmAqjDOrsg");
	var mask_1_graphics_258 = new cjs.Graphics().p("A6TECQDFrwKfmIQKemILuDFQLvDEGJKeMgyjAdlQmJqeDErug");
	var mask_1_graphics_259 = new cjs.Graphics().p("A6SEPQC7ryKamRQKZmRLwC9QLyC5GRKaMgyLAeNQmRqZC7rwg");
	var mask_1_graphics_260 = new cjs.Graphics().p("A6SEcQCyr1KVmZQKUmZLyCzQL0CwGZKVMgxyAe1QmZqUCxryg");
	var mask_1_graphics_261 = new cjs.Graphics().p("A6REpQCpr3KPmhQKPmhL1CpQL2CnGhKPMgxZAfdQmiqPCor0g");
	var mask_1_graphics_262 = new cjs.Graphics().p("A6QE2QCfr5KKmpQKKmqL3ChQL4CdGqKKMgxBAgEQmpqKCer2g");
	var mask_1_graphics_263 = new cjs.Graphics().p("A6OFDQCWr6KEmyQKFmxL4CWQL6CUGyKFMgwmAgrQmyqFCVr4g");
	var mask_1_graphics_264 = new cjs.Graphics().p("A6MFQQCMr8J/m5QJ/m6L7CNQL8CLG5J/MgwMAhSQm5p/CLr7g");
	var mask_1_graphics_265 = new cjs.Graphics().p("A6JFeQCCr+J6nBQJ5nCL8CEQL+CAHBJ6MgvwAh4QnCp5CCr8g");
	var mask_1_graphics_266 = new cjs.Graphics().p("A6GFsQB4sAJ0nJQJ0nJL+B6QL/B3HJJ0MgvVAieQnKp0B5r9g");
	var mask_1_graphics_267 = new cjs.Graphics().p("A6DF6QBvsBJunRQJunSL/BxQMBBtHRJuMgu5AjFQnSpvBvr+g");
	var mask_1_graphics_268 = new cjs.Graphics().p("A5/GIQBlsCJpnZQJonZMABmQMCBkHZJoMgudAjqQnZpoBlsAg");
	var mask_1_graphics_269 = new cjs.Graphics().p("A57GWQBcsEJingQJinhMCBdQMDBaHhJjMguBAkOQngpiBbsBg");
	var mask_1_graphics_270 = new cjs.Graphics().p("A52GkQBSsEJcnpQJcnoMDBUQMEBQHoJcMgtjAk0QnopdBSsCg");
	var mask_1_graphics_271 = new cjs.Graphics().p("A5xGyQBIsFJWnwQJWnvMEBJQMFBHHwJWMgtGAlYQnwpWBJsEg");
	var mask_1_graphics_272 = new cjs.Graphics().p("A5sHBQA/sGJQn4QJPn3MFBAQMGA+H3JPMgsnAl8Qn3pQA+sEg");
	var mask_1_graphics_273 = new cjs.Graphics().p("A5mHPQA1sGJJn/QJKn+MFA2QMHAzH+JKMgsIAmfQn/pKA1sFg");
	var mask_1_graphics_274 = new cjs.Graphics().p("A5gHeQArsHJEoGQJDoGMFAtQMHAqIGJDMgrpAnCQoGpDArsGg");
	var mask_1_graphics_275 = new cjs.Graphics().p("A5ZHtQAhsII9oNQI8oNMHAjQMHAgINI9MgrKAnkQoNo8AisGg");
	var mask_1_graphics_276 = new cjs.Graphics().p("A5SH8QAYsII2oVQI2oUMGAaQMIAWIUI2MgqqAoHQoUo2AYsGg");
	var mask_1_graphics_277 = new cjs.Graphics().p("A5LILQAPsJIvobQIvobMHAQQMIANIbIvMgqKAopQobowAOsGg");
	var mask_1_graphics_278 = new cjs.Graphics().p("A5DIaQAFsJIooiQIpoiMHAGQMIADIiIpMgppApKQoiooAEsHg");
	var mask_1_graphics_279 = new cjs.Graphics().p("A46IpQgGsIIiopQIhopMHgEQMJgHIoIiMgpHAprQopohgFsHg");
	var mask_1_graphics_280 = new cjs.Graphics().p("A4yI5QgPsJIbovQIaowMHgOQMIgQIwIbMgomAqMQowobgPsGg");
	var mask_1_graphics_281 = new cjs.Graphics().p("A4oJIQgZsIITo2QIUo3MHgXQMHgaI3ITMgoFAqtQo2oUgYsGg");
	var mask_1_graphics_282 = new cjs.Graphics().p("A4fJYQgisIIMo9QIMo9MHghQMHgkI9INMgniArMQo9oNgisFg");
	var mask_1_graphics_283 = new cjs.Graphics().p("A4VJnQgssHIFpDQIFpEMGgrQMHgtJDIFMgm/ArsQpDoFgssGg");
	var mask_1_graphics_284 = new cjs.Graphics().p("A4LJ3Qg1sHH+pKQH9pJMGg1QMGg3JKH+MgmcAsLQpKn+g2sFg");
	var mask_1_graphics_285 = new cjs.Graphics().p("A4AKHQg/sGH2pQQH3pQMEg+QMGhBJQH2Mgl4AspQpQn2hAsEg");
	var mask_1_graphics_286 = new cjs.Graphics().p("A31KXQhJsFHvpXQHvpWMEhIQMFhKJWHvMglUAtHQpXnvhJsDg");
	var mask_1_graphics_287 = new cjs.Graphics().p("A3pKnQhTsEHopdQHnpcMDhSQMDhUJdHoMgkwAtkQpcnnhTsCg");
	var mask_1_graphics_288 = new cjs.Graphics().p("A3dK3QhcsDHfpjQHgpiMChbQMCheJjHgMgkLAuCQpjnghcsBg");
	var mask_1_graphics_289 = new cjs.Graphics().p("A3RLHQhmsCHYpoQHZppMAhkQMBhoJpHZMgjmAueQppnYhmsAg");
	var mask_1_graphics_290 = new cjs.Graphics().p("A3ELXQhwsAHRpvQHQpuL/huQMAhxJvHQMgjBAu7QpvnQhvr/g");
	var mask_1_graphics_291 = new cjs.Graphics().p("A23LoQh5r/HJp0QHIp1L+h3QL+h7J0HJMgibAvWQp0nIh5r9g");
	var mask_1_graphics_292 = new cjs.Graphics().p("A2pL4QiDr9HBp6QHAp6L8iBQL9iEJ6HAMgh1AvyQp6nBiCr7g");
	var mask_1_graphics_293 = new cjs.Graphics().p("A2bMIQiNr8G5p/QG5p/L6iLQL7iNJ/G4MghOAwNQp/m5iMr6g");
	var mask_1_graphics_294 = new cjs.Graphics().p("A2NMZQiWr7GxqEQGwqEL5iVQL5iXKFGxMggoAwnQqFmxiVr4g");
	var mask_1_graphics_295 = new cjs.Graphics().p("A1/MqQifr5GoqJQGpqLL3ieQL3igKKGoMggAAxBQqLmoifr2g");
	var mask_1_graphics_296 = new cjs.Graphics().p("A1wM6Qipr3GhqOQGgqPL1ioQL1iqKPGhMgfZAxaQqPmhipr0g");
	var mask_1_graphics_297 = new cjs.Graphics().p("A1gNLQizr1GYqTQGZqVLyixQLzizKVGYMgeyAxzQqUmYiyryg");
	var mask_1_graphics_298 = new cjs.Graphics().p("A1RNcQi8rzGQqYQGQqaLxi6QLwi9KaGQMgeKAyLQqZmQi8rvg");
	var mask_1_graphics_299 = new cjs.Graphics().p("A1BNtQjFrwGIqeQGHqeLvjEQLtjHKfGIMgdhAyjQqfmHjFrtg");
	var mask_1_graphics_300 = new cjs.Graphics().p("A0wN9QjPrtF/qiQF/qkLtjNQLqjQKkGAMgc5Ay6Qqjl/jOrrg");
	var mask_1_graphics_301 = new cjs.Graphics().p("A0fOOQjZrqF3qnQF3qpLqjWQLnjZKoF3MgcPAzRQqol3jXrog");
	var mask_1_graphics_302 = new cjs.Graphics().p("A0OOfQjiroFuqrQFvqtLmjgQLmjiKsFuMgbmAzoQqtlvjgrlg");
	var mask_1_graphics_303 = new cjs.Graphics().p("Az9OwQjrrlFmqwQFlqxLljpQLijsKxFmMga9Az9Qqxlljqrjg");
	var mask_1_graphics_304 = new cjs.Graphics().p("AzrPBQj0riFdq0QFdq2LhjyQLfj1K2FdMgaTA0TQq2ldjzrgg");
	var mask_1_graphics_305 = new cjs.Graphics().p("AzZPSQj9reFUq5QFUq6Lej8QLcj+K6FUMgZpA0oQq6lUj8rdg");
	var mask_1_graphics_306 = new cjs.Graphics().p("AzHPkQkGrcFLq9QFMq+LbkFQLYkHK/FLMgY/A08Qq+lLkGrZg");
	var mask_1_graphics_307 = new cjs.Graphics().p("Ay0P1QkPrYFCrCQFDrCLXkOQLWkQLCFDMgYUA1PQrClDkPrVg");
	var mask_1_graphics_308 = new cjs.Graphics().p("AyhQGQkYrVE5rFQE6rGLUkXQLSkZLGE5MgXpA1jQrGk6kYrSg");
	var mask_1_graphics_309 = new cjs.Graphics().p("AyNQXQkirRExrJQExrKLQkgQLPkiLKExMgW/A11QrKkxkgrPg");
	var mask_1_graphics_310 = new cjs.Graphics().p("Ax6QoQkqrNEorNQEnrOLNkoQLLksLOEoMgWTA2HQrOkokqrLg");
	var mask_1_graphics_311 = new cjs.Graphics().p("AxmQ6QkzrKEfrQQEfrSLJkyQLGk0LSEfMgVoA2ZQrRkfkzrHg");
	var mask_1_graphics_312 = new cjs.Graphics().p("AxRRLQk9rGEWrUQEWrVLFk6QLDk9LVEVMgU8A2qQrVkWk7rDg");
	var mask_1_graphics_313 = new cjs.Graphics().p("Aw9RcQlFrBENrYQEMrYLClEQK/lGLYENMgUQA26QrZkMlErAg");
	var mask_1_graphics_314 = new cjs.Graphics().p("AwoRuQlOq+EErbQEDrbK9lNQK7lOLcEDMgTlA3LQrbkElNq7g");
	var mask_1_graphics_315 = new cjs.Graphics().p("AwTR/QlWq5D6reQD7rfK4lVQK3lYLfD7MgS5A3ZQrej6lWq3g");
	var mask_1_graphics_316 = new cjs.Graphics().p("Av9SQQlgq1DyrhQDxriK0ldQKzlgLiDxMgSNA3oQrhjxleqzg");
	var mask_1_graphics_317 = new cjs.Graphics().p("AvnSiQloqxDorkQDorlKwlmQKtlpLlDoMgRgA33Qrjjolnqug");
	var mask_1_graphics_318 = new cjs.Graphics().p("AvRSzQlxqsDfrnQDfrnKrlvQKplyLoDfMgQzA4EQrnjelvqqg");
	var mask_1_graphics_319 = new cjs.Graphics().p("Au7TEQl5qnDVrpQDWrrKnl3QKkl6LrDVMgQGA4SQrqjWl4qlg");
	var mask_1_graphics_320 = new cjs.Graphics().p("AukTWQmCqjDMrsQDMrtKjmAQKfmCLtDMMgPZA4eQrsjMmAqgg");
	var mask_1_graphics_321 = new cjs.Graphics().p("AuNTnQmKqeDDruQDCrwKemIQKamKLwDCMgOsA4qQrujDmJqbg");
	var mask_1_graphics_322 = new cjs.Graphics().p("At2T5QmSqZC5rxQC5ryKZmQQKVmTLyC5MgN+A41Qrxi5mRqWg");
	var mask_1_graphics_323 = new cjs.Graphics().p("AteUKQmbqUCwrzQCwr0KTmZQKRmbL0CwMgNRA5AQrziwmZqRg");
	var mask_1_graphics_324 = new cjs.Graphics().p("AtGUbQmjqOCmr2QCmr2KOmhQKMmjL2CmMgMjA5LQr1inmhqMg");
	var mask_1_graphics_325 = new cjs.Graphics().p("AsuUsQmrqJCdr3QCcr4KJmpQKGmsL5CdMgL1A5UQr4idmpqHg");
	var mask_1_graphics_326 = new cjs.Graphics().p("AsWU+QmzqECTr5QCUr6KDmxQKBm0L6CTMgLHA5eQr5iUmyqBg");
	var mask_1_graphics_327 = new cjs.Graphics().p("Ar9VPQm7p+CJr7QCKr8J+m5QJ7m8L8CKMgKZA5mQr7iKm5p8g");
	var mask_1_graphics_328 = new cjs.Graphics().p("ArkVgQnDp4CAr9QCAr+J4nBQJ2nDL+CAMgJrA5uQr9iAnBp3g");
	var mask_1_graphics_329 = new cjs.Graphics().p("ArLVyQnLpzB2r/QB3r/JznJQJwnLL/B3MgI9A51Qr+h3nJpwg");
	var mask_1_graphics_330 = new cjs.Graphics().p("AqyWDQnTptBtsBQBusAJsnQQJrnTMABtMgIOA58QsAhtnRprg");
	var mask_1_graphics_331 = new cjs.Graphics().p("AqYWUQnbpnBksCQBjsBJnnZQJlnaMBBjMgHfA6CQsBhjnZplg");
	var mask_1_graphics_332 = new cjs.Graphics().p("Ap+WlQniphBZsDQBasCJhngQJfnjMDBaMgGyA6IQsChangpfg");
	var mask_1_graphics_333 = new cjs.Graphics().p("ApkW2QnqpbBQsEQBRsDJbnoQJYnqMEBQMgGDA6NQsDhQnopZg");
	var mask_1_graphics_334 = new cjs.Graphics().p("ApKXHQnxpVBHsFQBGsEJVnvQJSnyMFBHMgFUA6RQsEhGnwpTg");
	var mask_1_graphics_335 = new cjs.Graphics().p("AovXYQn5pPA9sFQA9sFJPn3QJLn5MGA9MgElA6WQsFg9n3pNg");
	var mask_1_graphics_336 = new cjs.Graphics().p("AoUXpQoApIAzsHQAzsFJJn+QJFoAMGAzMgD2A6YQsGgzn+pGg");
	var mask_1_graphics_337 = new cjs.Graphics().p("An5X6QoHpCApsHQAqsGJCoFQI/oIMHAqMgDIA6bQsHgpoFpAg");
	var mask_1_graphics_338 = new cjs.Graphics().p("AndYLQoPo8AgsHQAgsHI7oMQI4oOMIAfMgCZA6eQsIggoLo5g");
	var mask_1_graphics_339 = new cjs.Graphics().p("AnCYcQoVo1AWsIQAWsHI1oTQIxoWMIAWMgBqA6fQsIgWoToyg");
	var mask_1_graphics_340 = new cjs.Graphics().p("AmmYsQocouAMsIQAMsHIuoaQIrodMIANMgA7A6gQsIgNoaosg");
	var mask_1_graphics_341 = new cjs.Graphics().p("AmKY9QojonACsIQADsHInoiQIlojMIACMgANA6hQsIgDoholg");
	var mask_1_graphics_342 = new cjs.Graphics().p("Al+ZOQorohgHsIQgHsHIgooQIeoqMIgHMAAiA6gIgUAAQr7AAogoXg");
	var mask_1_graphics_343 = new cjs.Graphics().p("Al5ZeQoxoZgRsIQgRsHIaovQIWoxMIgRMABRA6gIgvAAQrqAAodoHg");
	var mask_1_graphics_344 = new cjs.Graphics().p("Al0ZuQo4oSgasIQgbsGITo2QIPo4MIgaMAB/A6eIhJABQrZAAoan3g");
	var mask_1_graphics_345 = new cjs.Graphics().p("AluZ+Qo/oLgksHQgksHILo8QIIo+MIgkMACuA6cQgyACgyAAQrIABoWnog");
	var mask_1_graphics_346 = new cjs.Graphics().p("AlpaOQpEoEgusHQgusGIEpCQICpFMGguMADdA6aQhAAEg+AAQq4AAoTnYg");
	var mask_1_graphics_347 = new cjs.Graphics().p("AliadQpMn8g3sHQg4sFH9pJQH7pLMFg3MAEMA6WQhNAGhKAAQqpAAoOnJg");
	var mask_1_graphics_348 = new cjs.Graphics().p("AlcasQpSn1hBsFQhBsEH1pQQHzpRMFhCMAE6A6UQhZAHhXAAQqZAAoKm6g");
	var mask_1_graphics_349 = new cjs.Graphics().p("AlWa7QpXnthLsFQhLsDHupWQHrpYMEhKMAFpA6OQhmAKhjAAQqKAAoGmrg");
	var mask_1_graphics_350 = new cjs.Graphics().p("AlPbKQpenmhUsEQhVsCHmpcQHlpdMChVMAGYA6KQhzAMhuAAQp8ABoBmdg");
	var mask_1_graphics_351 = new cjs.Graphics().p("AlIbZQpknfhesCQhesCHepiQHdpjMBheMAHHA6EQh/AQh7AAQptAAn8mOg");
	var mask_1_graphics_352 = new cjs.Graphics().p("AlBbnQpqnXhosBQhnsAHXpoQHVpqMAhnMAH0A5+QiLATiGAAQpfAAn3mAg");
	var mask_1_graphics_353 = new cjs.Graphics().p("Ak6b1QpvnPhysAQhxr/HPptQHNpwL/hxMAIjA54QiXAWiSAAQpRAAnylyg");
	var mask_1_graphics_354 = new cjs.Graphics().p("AkycDQp2nIh7r+Qh7r9HIpzQHFp2L9h6MAJSA5wQikAaidAAQpDAAnslkg");
	var mask_1_graphics_355 = new cjs.Graphics().p("AkrcQQp7m/iEr9QiFr7HAp5QG9p7L8iFMAKAA5pQiwAfioAAQo2AAnnlYg");
	var mask_1_graphics_356 = new cjs.Graphics().p("AkjcdQqAm3iOr7QiPr6G4p+QG2qAL5iPMAKuA5hQi7AjizAAQopAAnhlLg");
	var mask_1_graphics_357 = new cjs.Graphics().p("AkbcqQqGmviXr5QiYr4GwqEQGtqFL4iYMALcA5YQjHAni+AAQocAAnbk+g");
	var mask_1_graphics_358 = new cjs.Graphics().p("AkTc3QqLmnihr3Qihr2GoqJQGlqLL2ihMAMJA5OQjRAsjKAAQoPAAnVkxg");
	var mask_1_graphics_359 = new cjs.Graphics().p("AkKdEQqRmfiqr1Qirr0GgqPQGdqQL0iqMAM3A5EQjdAyjUAAQoDAAnOklg");
	var mask_1_graphics_360 = new cjs.Graphics().p("AkCdQQqVmXi0ryQi0ryGXqUQGVqVLyi0MANkA45QjoA4jfAAQn2AAnIkZg");
	var mask_1_graphics_361 = new cjs.Graphics().p("Aj5dcQqamOi+rxQi9rvGPqZQGMqaLwi+MAOSA4vQjzA9jqAAQnqAAnBkNg");
	var mask_1_graphics_362 = new cjs.Graphics().p("AjwdoQqfmGjHruQjHruGHqdQGEqfLtjHMAO/A4jQj9BDj1AAQneAAm6kBg");
	var mask_1_graphics_363 = new cjs.Graphics().p("Ajnd0Qqkl+jQrrQjRrsF/qhQF7qkLrjRMAPtA4XQkJBJj/AAQnSAAmzj1g");
	var mask_1_graphics_364 = new cjs.Graphics().p("Ajdd/Qqql1jZrpQjarpF2qmQFzqpLojZMAQaA4JQkTBRkKAAQnGAAmrjrg");
	var mask_1_graphics_365 = new cjs.Graphics().p("AjUeKQqultjirmQjjrlFtqrQFrqtLljjMARGA38QkdBXkUAAQm7AAmkjgg");
	var mask_1_graphics_366 = new cjs.Graphics().p("AjKeVQqylkjtrjQjsrjFlqwQFiqxLijsMAR0A3uQkoBekfAAQmvAAmcjVg");
	var mask_1_graphics_367 = new cjs.Graphics().p("AjAegQq3lcj1rgQj2rgFcq0QFaq2Lfj1MASgA3fQkyBmkpAAQmkAAmUjKg");
	var mask_1_graphics_368 = new cjs.Graphics().p("Ai2eqQq7lTj/rdQj+rdFTq4QFRq6Lcj+MATMA3QQk7Btk1AAQmYAAmMjAg");
	var mask_1_graphics_369 = new cjs.Graphics().p("Aise0Qq/lKkIraQkIrZFLq8QFIq/LakHMAT3A3AQlFB1k/AAQmOAAmDi2g");
	var mask_1_graphics_370 = new cjs.Graphics().p("Aiie9QrDlBkRrWQkRrXFCrAQE/rCLXkRMAUjA2wQlOB+lKAAQmDAAl7itg");
	var mask_1_graphics_371 = new cjs.Graphics().p("AiAfbQrQklktrLQkurLEmrMQEjrPLLkuMAWuA16QlsCZlsAAQlgAAlfiPg");
	var mask_1_graphics_372 = new cjs.Graphics().p("Ahcf2QrbkHlKq/QlKq/EIrYQEGraK/lKMAY3A0+QmHC4mPAAQk+AAlBh1g");
	var mask_1_graphics_373 = new cjs.Graphics().p("EgA3AgPQrljqlmqxQlmqxDrrjQDprkKxlmMAa+Az9QmhDYmzAAQkcAAkihcg");
	var mask_1_graphics_374 = new cjs.Graphics().p("EgARAglQrujNmBqiQmBqjDOrrQDLrtKimBMAdCAy2Qm5D7nYAAQj6AAkChGg");
	var mask_1_graphics_375 = new cjs.Graphics().p("EAAWAg4Qr0ivmcqSQmcqTCwrzQCtr1KSmbMAfDAxpQnPEhn/AAQjXABjhg0g");
	var mask_1_graphics_376 = new cjs.Graphics().p("EABAAhJQr7iRm2qBQm2qCCRr6QCPr7KBm2MAhBAwYQnjFKonAAQi1AAi8gjg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(253).to({graphics:mask_1_graphics_253,x:152.7,y:162.6}).wait(1).to({graphics:mask_1_graphics_254,x:152.1,y:163.7}).wait(1).to({graphics:mask_1_graphics_255,x:151.6,y:164.7}).wait(1).to({graphics:mask_1_graphics_256,x:151,y:165.8}).wait(1).to({graphics:mask_1_graphics_257,x:150.4,y:166.8}).wait(1).to({graphics:mask_1_graphics_258,x:149.8,y:167.8}).wait(1).to({graphics:mask_1_graphics_259,x:149.2,y:168.8}).wait(1).to({graphics:mask_1_graphics_260,x:148.6,y:169.8}).wait(1).to({graphics:mask_1_graphics_261,x:148,y:170.8}).wait(1).to({graphics:mask_1_graphics_262,x:147.3,y:171.8}).wait(1).to({graphics:mask_1_graphics_263,x:146.7,y:172.8}).wait(1).to({graphics:mask_1_graphics_264,x:146,y:173.8}).wait(1).to({graphics:mask_1_graphics_265,x:145.4,y:174.7}).wait(1).to({graphics:mask_1_graphics_266,x:144.7,y:175.7}).wait(1).to({graphics:mask_1_graphics_267,x:144,y:176.7}).wait(1).to({graphics:mask_1_graphics_268,x:143.3,y:177.6}).wait(1).to({graphics:mask_1_graphics_269,x:142.6,y:178.5}).wait(1).to({graphics:mask_1_graphics_270,x:141.8,y:179.5}).wait(1).to({graphics:mask_1_graphics_271,x:141.1,y:180.4}).wait(1).to({graphics:mask_1_graphics_272,x:140.3,y:181.3}).wait(1).to({graphics:mask_1_graphics_273,x:139.6,y:182.2}).wait(1).to({graphics:mask_1_graphics_274,x:138.8,y:183.1}).wait(1).to({graphics:mask_1_graphics_275,x:138,y:183.9}).wait(1).to({graphics:mask_1_graphics_276,x:137.2,y:184.8}).wait(1).to({graphics:mask_1_graphics_277,x:136.4,y:185.7}).wait(1).to({graphics:mask_1_graphics_278,x:135.6,y:186.5}).wait(1).to({graphics:mask_1_graphics_279,x:134.7,y:187.3}).wait(1).to({graphics:mask_1_graphics_280,x:133.9,y:188.2}).wait(1).to({graphics:mask_1_graphics_281,x:133,y:189}).wait(1).to({graphics:mask_1_graphics_282,x:132.2,y:189.8}).wait(1).to({graphics:mask_1_graphics_283,x:131.3,y:190.6}).wait(1).to({graphics:mask_1_graphics_284,x:130.4,y:191.4}).wait(1).to({graphics:mask_1_graphics_285,x:129.5,y:192.1}).wait(1).to({graphics:mask_1_graphics_286,x:128.5,y:192.9}).wait(1).to({graphics:mask_1_graphics_287,x:127.6,y:193.6}).wait(1).to({graphics:mask_1_graphics_288,x:126.7,y:194.4}).wait(1).to({graphics:mask_1_graphics_289,x:125.7,y:195.1}).wait(1).to({graphics:mask_1_graphics_290,x:124.8,y:195.8}).wait(1).to({graphics:mask_1_graphics_291,x:123.8,y:196.5}).wait(1).to({graphics:mask_1_graphics_292,x:122.8,y:197.2}).wait(1).to({graphics:mask_1_graphics_293,x:121.9,y:197.9}).wait(1).to({graphics:mask_1_graphics_294,x:120.9,y:198.6}).wait(1).to({graphics:mask_1_graphics_295,x:119.9,y:199.2}).wait(1).to({graphics:mask_1_graphics_296,x:118.9,y:199.9}).wait(1).to({graphics:mask_1_graphics_297,x:117.9,y:200.5}).wait(1).to({graphics:mask_1_graphics_298,x:116.8,y:201.1}).wait(1).to({graphics:mask_1_graphics_299,x:115.8,y:201.7}).wait(1).to({graphics:mask_1_graphics_300,x:114.8,y:202.3}).wait(1).to({graphics:mask_1_graphics_301,x:113.8,y:202.9}).wait(1).to({graphics:mask_1_graphics_302,x:112.7,y:203.5}).wait(1).to({graphics:mask_1_graphics_303,x:111.7,y:204}).wait(1).to({graphics:mask_1_graphics_304,x:110.6,y:204.6}).wait(1).to({graphics:mask_1_graphics_305,x:109.6,y:205.1}).wait(1).to({graphics:mask_1_graphics_306,x:108.5,y:205.6}).wait(1).to({graphics:mask_1_graphics_307,x:107.4,y:206.1}).wait(1).to({graphics:mask_1_graphics_308,x:106.3,y:206.6}).wait(1).to({graphics:mask_1_graphics_309,x:105.3,y:207.1}).wait(1).to({graphics:mask_1_graphics_310,x:104.2,y:207.5}).wait(1).to({graphics:mask_1_graphics_311,x:103.1,y:208}).wait(1).to({graphics:mask_1_graphics_312,x:102,y:208.4}).wait(1).to({graphics:mask_1_graphics_313,x:100.9,y:208.8}).wait(1).to({graphics:mask_1_graphics_314,x:99.8,y:209.2}).wait(1).to({graphics:mask_1_graphics_315,x:98.7,y:209.6}).wait(1).to({graphics:mask_1_graphics_316,x:97.6,y:210}).wait(1).to({graphics:mask_1_graphics_317,x:96.5,y:210.4}).wait(1).to({graphics:mask_1_graphics_318,x:95.4,y:210.7}).wait(1).to({graphics:mask_1_graphics_319,x:94.3,y:211.1}).wait(1).to({graphics:mask_1_graphics_320,x:93.2,y:211.4}).wait(1).to({graphics:mask_1_graphics_321,x:92,y:211.7}).wait(1).to({graphics:mask_1_graphics_322,x:90.9,y:212}).wait(1).to({graphics:mask_1_graphics_323,x:89.8,y:212.3}).wait(1).to({graphics:mask_1_graphics_324,x:88.7,y:212.6}).wait(1).to({graphics:mask_1_graphics_325,x:87.5,y:212.8}).wait(1).to({graphics:mask_1_graphics_326,x:86.4,y:213.1}).wait(1).to({graphics:mask_1_graphics_327,x:85.3,y:213.3}).wait(1).to({graphics:mask_1_graphics_328,x:84.1,y:213.5}).wait(1).to({graphics:mask_1_graphics_329,x:83,y:213.7}).wait(1).to({graphics:mask_1_graphics_330,x:81.9,y:213.9}).wait(1).to({graphics:mask_1_graphics_331,x:80.7,y:214}).wait(1).to({graphics:mask_1_graphics_332,x:79.6,y:214.2}).wait(1).to({graphics:mask_1_graphics_333,x:78.4,y:214.3}).wait(1).to({graphics:mask_1_graphics_334,x:77.3,y:214.4}).wait(1).to({graphics:mask_1_graphics_335,x:76.1,y:214.6}).wait(1).to({graphics:mask_1_graphics_336,x:75,y:214.6}).wait(1).to({graphics:mask_1_graphics_337,x:73.8,y:214.7}).wait(1).to({graphics:mask_1_graphics_338,x:72.7,y:214.8}).wait(1).to({graphics:mask_1_graphics_339,x:71.5,y:214.8}).wait(1).to({graphics:mask_1_graphics_340,x:70.3,y:214.9}).wait(1).to({graphics:mask_1_graphics_341,x:69.2,y:214.9}).wait(1).to({graphics:mask_1_graphics_342,x:69.7,y:214.9}).wait(1).to({graphics:mask_1_graphics_343,x:70.9,y:214.9}).wait(1).to({graphics:mask_1_graphics_344,x:72.1,y:214.9}).wait(1).to({graphics:mask_1_graphics_345,x:73.2,y:214.9}).wait(1).to({graphics:mask_1_graphics_346,x:74.4,y:215}).wait(1).to({graphics:mask_1_graphics_347,x:75.6,y:215}).wait(1).to({graphics:mask_1_graphics_348,x:76.7,y:215}).wait(1).to({graphics:mask_1_graphics_349,x:77.9,y:215}).wait(1).to({graphics:mask_1_graphics_350,x:79.1,y:215}).wait(1).to({graphics:mask_1_graphics_351,x:80.2,y:215.1}).wait(1).to({graphics:mask_1_graphics_352,x:81.4,y:215.1}).wait(1).to({graphics:mask_1_graphics_353,x:82.5,y:215.1}).wait(1).to({graphics:mask_1_graphics_354,x:83.7,y:215.1}).wait(1).to({graphics:mask_1_graphics_355,x:84.8,y:215.2}).wait(1).to({graphics:mask_1_graphics_356,x:86,y:215.2}).wait(1).to({graphics:mask_1_graphics_357,x:87.1,y:215.2}).wait(1).to({graphics:mask_1_graphics_358,x:88.3,y:215.2}).wait(1).to({graphics:mask_1_graphics_359,x:89.4,y:215.3}).wait(1).to({graphics:mask_1_graphics_360,x:90.6,y:215.3}).wait(1).to({graphics:mask_1_graphics_361,x:91.7,y:215.3}).wait(1).to({graphics:mask_1_graphics_362,x:92.8,y:215.3}).wait(1).to({graphics:mask_1_graphics_363,x:94,y:215.3}).wait(1).to({graphics:mask_1_graphics_364,x:95.1,y:215.4}).wait(1).to({graphics:mask_1_graphics_365,x:96.2,y:215.4}).wait(1).to({graphics:mask_1_graphics_366,x:97.3,y:215.4}).wait(1).to({graphics:mask_1_graphics_367,x:98.5,y:215.4}).wait(1).to({graphics:mask_1_graphics_368,x:99.6,y:215.4}).wait(1).to({graphics:mask_1_graphics_369,x:100.7,y:215.4}).wait(1).to({graphics:mask_1_graphics_370,x:101.8,y:215.4}).wait(1).to({graphics:mask_1_graphics_371,x:105.2,y:215.4}).wait(1).to({graphics:mask_1_graphics_372,x:108.7,y:215.5}).wait(1).to({graphics:mask_1_graphics_373,x:112.1,y:215.5}).wait(1).to({graphics:mask_1_graphics_374,x:115.4,y:215.5}).wait(1).to({graphics:mask_1_graphics_375,x:118.7,y:215.5}).wait(1).to({graphics:mask_1_graphics_376,x:121.9,y:215.6}).wait(255));

	// layer
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(15,1,1).p("AqbjgQExKPQGks");
	this.shape_2.setTransform(146.4,305.1,0.899,0.966,0,0,0,6.7,4.1);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(253).to({_off:false},0).wait(378));

	// arrow
	this.instance_3 = new lib.ar3("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(282.8,296.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).wait(622));

	// Layer 10 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_224 = new cjs.Graphics().p("EgIPAi/Qr2iimlqMMAxKgfsQGlKLikL0QikL3qMGlQnUEuoJAAQjOAAjVgvg");
	var mask_2_graphics_225 = new cjs.Graphics().p("EgJJAiwQrxi6mPqaMAyJgeHQGPKYi7LvQi8LyqZGPQnEEQnqAAQjpAAjxg9g");
	var mask_2_graphics_226 = new cjs.Graphics().p("EgJ3AifQrqjSl6qmMAzFgchQF6KljTLpQjULrqmF6QmxDynNAAQkDAAkNhMg");
	var mask_2_graphics_227 = new cjs.Graphics().p("EgKiAiMQrjjqllqxMAz+ga4QFkKwjqLiQjsLkqxFlQmeDWmwAAQkeAAknheg");
	var mask_2_graphics_228 = new cjs.Graphics().p("EgLNAh3QrckBlOq8MA0ygZOQFPK7kCLaQkDLdq8FPQmKC8mTAAQk6AAk/hyg");
	var mask_2_graphics_229 = new cjs.Graphics().p("EgL4AhhQrUkYk4rGMA1lgXjQE4LGkZLRQkaLUrHE5Ql1Ckl3AAQlUAAlXiHg");
	var mask_2_graphics_230 = new cjs.Graphics().p("EgMkAhJQrKkvkirQMA2TgV1QEiLQkwLIQkxLLrQEhQleCNlcAAQlwAAluidg");
	var mask_2_graphics_231 = new cjs.Graphics().p("EgNQAgwQrAlGkKrZMA29gUGQELLYlGK/QlHLBrZEKQlHB4lBAAQmMAAmEi1g");
	var mask_2_graphics_232 = new cjs.Graphics().p("EgN7AgVQq2lcjzrhMA3lgSWQDzLglcK0QldK2riDzQkuBkkmAAQmoAAmYjOg");
	var mask_2_graphics_233 = new cjs.Graphics().p("Aunf4QqqlyjcroMA4JgQlQDcLolyKoQl0KrroDcQkVBSkLAAQnFAAmsjqg");
	var mask_2_graphics_234 = new cjs.Graphics().p("AvSfZQqfmHjErvMA4pgOyQDFLumIKdQmJKervDFQj6BBjwAAQnjAAm+kHg");
	var mask_2_graphics_235 = new cjs.Graphics().p("Av+e6QqRmditr1MA5GgM/QCsL1mcKPQmeKSr2CtQjeAyjVAAQoBAAnQkkg");
	var mask_2_graphics_236 = new cjs.Graphics().p("AwpeYQqFmxiUr6MA5fgLMQCUL7mxKCQmzKFr6CUQjCAmi5AAQoiAAnflFg");
	var mask_2_graphics_237 = new cjs.Graphics().p("AxVd1Qp2nFh8r/MA50gJWQB8L/nFJ0QnHJ2r/B8QikAbidAAQpDAAnvlmg");
	var mask_2_graphics_238 = new cjs.Graphics().p("AyAdQQpnnYhksDMA6GgHhQBjMDnZJlQnbJosCBkQiGARiAAAQpmAAn8mJg");
	var mask_2_graphics_239 = new cjs.Graphics().p("AyrcqQpYnshLsFMA6TgFrQBLMFnsJXQnuJYsGBMQhmAJhiAAQqLAAoImtg");
	var mask_2_graphics_240 = new cjs.Graphics().p("AzVcDQpJn/gysHMA6dgD1QAyMIn/JGQoBJJsHAyQhGAFhDAAQqyAAoSnTg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(224).to({graphics:mask_2_graphics_224,x:174.3,y:228.6}).wait(1).to({graphics:mask_2_graphics_225,x:174.4,y:228.5}).wait(1).to({graphics:mask_2_graphics_226,x:173.2,y:228.3}).wait(1).to({graphics:mask_2_graphics_227,x:171.9,y:228.2}).wait(1).to({graphics:mask_2_graphics_228,x:170.7,y:228.1}).wait(1).to({graphics:mask_2_graphics_229,x:169.5,y:228}).wait(1).to({graphics:mask_2_graphics_230,x:168.4,y:227.8}).wait(1).to({graphics:mask_2_graphics_231,x:167.4,y:227.7}).wait(1).to({graphics:mask_2_graphics_232,x:166.4,y:227.5}).wait(1).to({graphics:mask_2_graphics_233,x:165.6,y:227.4}).wait(1).to({graphics:mask_2_graphics_234,x:164.8,y:227.2}).wait(1).to({graphics:mask_2_graphics_235,x:164.1,y:227}).wait(1).to({graphics:mask_2_graphics_236,x:163.6,y:226.9}).wait(1).to({graphics:mask_2_graphics_237,x:163.1,y:226.7}).wait(1).to({graphics:mask_2_graphics_238,x:162.6,y:226.5}).wait(1).to({graphics:mask_2_graphics_239,x:162.3,y:226.3}).wait(1).to({graphics:mask_2_graphics_240,x:162.2,y:226.2}).wait(391));

	// Layer 8
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(15,1,1).p("ASGwmQgPAggPAgQgPAhgPAfQgPAggPAhQgQAggPAgQgQAggQAhQgPAggQAhQgQAggQAhQgPAggQAhQgPAfgPAeQgOAegPAfQgPAfgPAeQgPAfgPAfQgPAfgPAfQgPAfgPAeQgPAfgPAfQgQAegPAfQgQAfgPAeQgQAegPAfQgQAfgQAfQgQAggRAfQgQAfgQAgQgRAfgQAfQgRAfgRAeQgRAggRAfQgRAegRAfQgRAfgSAeAwJInQgGgNgGgNQgQgggNgiQgOgigLgjQgLgigJgkQgKgkgHgjQgHglgEgkQgFgmgDglQgCgmAAgnQgBglABgnAluQlQgigFgigHQgjgHgigLQgjgNghgQQgkgQghgUQgjgTgggXQgggVgegYQgdgXgcgZQgbgagZgaQgZgbgXgdQgWgdgVgeQgUgegSgfQgLgTgKgUAFCJWQgTAkgVAjQgTAjgXAgQgVAggZAdQgYAdgaAaQgaAagdAXQgbAXgeAUQgeAUgfASQggARgiAOQghAPgjAJQghALgiAFQgiAGgiAE");
	this.shape_3.setTransform(195.9,283.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF0000").ss(15,1,1).p("AFjj4IgUAhAkdD5QgjgBgiAA");
	this.shape_4.setTransform(194.6,364.8);

	var maskedShapeInstanceList = [this.shape_3,this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},224).wait(407));

	// Layer 7 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_9 = new cjs.Graphics().p("A6DIWQBvsBJvnRQJunRMABxQMABuHRJvMgu8AjCQnRpuBwr/g");
	var mask_3_graphics_10 = new cjs.Graphics().p("A6HIGQB6sAJ1nIQJ1nIL9B7QL/B5HJJ0MgvaAiaQnJp1B6r9g");
	var mask_3_graphics_11 = new cjs.Graphics().p("A6KH2QCEr+J7nAQJ7m/L8CFQL9CDHAJ7Mgv3AhwQnAp7CEr7g");
	var mask_3_graphics_12 = new cjs.Graphics().p("A6NHmQCPr8KBm3QKBm3L6CQQL7COG4KBMgwVAhGQm3qBCOr6g");
	var mask_3_graphics_13 = new cjs.Graphics().p("A6PHWQCar5KGmvQKHmuL4CbQL5CXGvKHMgwxAgcQmvqHCZr4g");
	var mask_3_graphics_14 = new cjs.Graphics().p("A6QHHQCjr4KNmlQKNmmL1ClQL3CiGmKNMgxNAfxQmlqNCjr1g");
	var mask_3_graphics_15 = new cjs.Graphics().p("A6SG3QCur1KTmcQKSmdLzCvQL1CsGdKTMgxoAfGQmdqSCtr0g");
	var mask_3_graphics_16 = new cjs.Graphics().p("A6SGoQC4ryKYmUQKYmTLwC5QLzC2GUKYMgyDAebQmUqYC4rxg");
	var mask_3_graphics_17 = new cjs.Graphics().p("A6SGZQDCrwKdmKQKdmLLvDEQLwDAGKKeMgydAdvQmKqdDCrvg");
	var mask_3_graphics_18 = new cjs.Graphics().p("A6SGLQDMruKjmBQKimBLsDNQLtDLGCKiMgy3AdEQmBqjDMrrg");
	var mask_3_graphics_19 = new cjs.Graphics().p("A6RF8QDWrqKol5QKol4LoDYQLrDVF4KoMgzPAcWQl4qnDWrpg");
	var mask_3_graphics_20 = new cjs.Graphics().p("A6QFuQDhroKslvQKtlvLmDiQLnDfFvKsMgznAbrQlvqtDgrlg");
	var mask_3_graphics_21 = new cjs.Graphics().p("A6PFfQDrrkKylmQKyllLiDsQLkDpFmKwMgz/Aa/QlmqyDqrjg");
	var mask_3_graphics_22 = new cjs.Graphics().p("A6MFRQD1rhK2lcQK2lcLgD2QLhDzFcK1Mg0WAaRQlcq2D0rgg");
	var mask_3_graphics_23 = new cjs.Graphics().p("A6KFDQD/rdK7lTQK7lTLcEAQLeD9FTK6Mg0tAZjQlTq7D+rcg");
	var mask_3_graphics_24 = new cjs.Graphics().p("A6HE2QEJraLAlKQK+lJLaEKQLaEHFJK/Mg1CAY1QlKrAEIrYg");
	var mask_3_graphics_25 = new cjs.Graphics().p("A6DEoQETrWLElAQLDk/LVETQLXERE/LDMg1XAYHQlArEESrVg");
	var mask_3_graphics_26 = new cjs.Graphics().p("A5/EbQEdrTLIk2QLHk2LSEeQLSEbE3LHMg1tAXYQk2rIEcrRg");
	var mask_3_graphics_27 = new cjs.Graphics().p("A57EOQEnrPLMksQLLksLOEnQLPEkEsLMMg2AAWpQksrMElrNg");
	var mask_3_graphics_28 = new cjs.Graphics().p("A52EBQExrLLQkiQLPkjLKExQLLEuEiLQMg2TAV6QkjrQEvrJg");
	var mask_3_graphics_29 = new cjs.Graphics().p("A5wD0QE6rGLUkZQLTkZLFE7QLHE4EZLTMg2mAVLQkZrUE5rFg");
	var mask_3_graphics_30 = new cjs.Graphics().p("A5qDoQFDrCLYkPQLXkPLBFEQLCFCEPLWMg24AUcQkPrYFDrAg");
	var mask_3_graphics_31 = new cjs.Graphics().p("A5kDbQFNq9LckFQLakFK9FOQK+FLEFLaMg3KATsQkFrcFMq8g");
	var mask_3_graphics_32 = new cjs.Graphics().p("A5dDPQFWq5Lfj7QLej7K4FXQK6FVD7LeMg3aAS8Qj7rfFVq4g");
	var mask_3_graphics_33 = new cjs.Graphics().p("A5WDDQFgq0LijxQLijxKzFhQK1FeDxLhMg3qASLQjxriFeqzg");
	var mask_3_graphics_34 = new cjs.Graphics().p("A5OC4QFpqwLmjnQLkjnKvFqQKvFoDnLkMg35ARbQjnrlFoqug");
	var mask_3_graphics_35 = new cjs.Graphics().p("A5GCsQFzqqLojdQLojdKpFzQKrFxDdLnMg4IAQrQjdrpFxqpg");
	var mask_3_graphics_36 = new cjs.Graphics().p("A49ChQF8qlLrjTQLqjTKlF8QKlF6DTLrMg4WAP5QjTrrF7qkg");
	var mask_3_graphics_37 = new cjs.Graphics().p("A40CWQGFqgLujJQLtjIKfGFQKhGDDJLtMg4kAPJQjJruGEqfg");
	var mask_3_graphics_38 = new cjs.Graphics().p("A4rCLQGOqbLxi+QLwi/KaGPQKbGMC/LwMg4xAOXQi+rxGMqZg");
	var mask_3_graphics_39 = new cjs.Graphics().p("A4hCAQGYqVLzi0QLyi0KUGXQKWGVC0LzMg48ANmQi0r0GVqUg");
	var mask_3_graphics_40 = new cjs.Graphics().p("A4WB2QGgqQL2iqQL0ipKPGgQKQGeCqL1Mg5IAM0Qiqr2GfqOg");
	var mask_3_graphics_41 = new cjs.Graphics().p("A4LBsQGpqKL4igQL2ifKJGpQKLGnCgL3Mg5TAMCQigr4GoqIg");
	var mask_3_graphics_42 = new cjs.Graphics().p("A4ABiQGyqEL6iVQL5iWKDGyQKFGvCVL6Mg5dALRQiVr6GwqDg");
	var mask_3_graphics_43 = new cjs.Graphics().p("A30BYQG6p+L8iLQL7iLJ9G7QJ/G3CLL8Mg5mAKfQiLr8G5p9g");
	var mask_3_graphics_44 = new cjs.Graphics().p("A3oBPQHDp4L+iBQL9iBJ3HEQJ5HACAL+Mg5uAJsQiBr+HBp2g");
	var mask_3_graphics_45 = new cjs.Graphics().p("A3bBFQHMpxL/h3QL+h2JxHMQJzHJB2L/Mg53AI6Qh2r/HKpxg");
	var mask_3_graphics_46 = new cjs.Graphics().p("A3OA8QHUprMBhsQMAhsJrHVQJsHRBsMAMg5+AIJQhssBHSprg");
	var mask_3_graphics_47 = new cjs.Graphics().p("A3AA0QHcpmMChhQMChhJkHcQJmHaBhMCMg6EAHWQhisDHbpjg");
	var mask_3_graphics_48 = new cjs.Graphics().p("A2yArQHlpfMDhXQMDhWJdHkQJgHiBWMEMg6KAGjQhXsEHjpdg");
	var mask_3_graphics_49 = new cjs.Graphics().p("A2kAjQHtpYMFhNQMDhMJXHtQJZHqBNMEMg6QAFxQhNsFHrpWg");
	var mask_3_graphics_50 = new cjs.Graphics().p("A2VAaQH1pRMGhCQMEhCJRH2QJSHxBCMGMg6VAE+QhCsGHzpQg");
	var mask_3_graphics_51 = new cjs.Graphics().p("A2FATQH9pLMGg3QMFg4JKH+QJLH5A3MHMg6YAELQg3sGH7pJg");
	var mask_3_graphics_52 = new cjs.Graphics().p("A11ALQIEpDMIgtQMGgtJCIFQJEICAtMHMg6bADYQgtsHIDpCg");
	var mask_3_graphics_53 = new cjs.Graphics().p("A1lADQINo8MHgiQMHgjI7INQI9IKAjMHMg6eACmQgjsHILo8g");
	var mask_3_graphics_54 = new cjs.Graphics().p("A1UgDQIUo2MIgYQMHgXI0IUQI2IRAYMIMg6gABzQgYsIITozg");
	var mask_3_graphics_55 = new cjs.Graphics().p("A1DgKQIcouMIgOQMHgNItIcQIvIZANMIMg6hABAQgNsIIaosg");
	var mask_3_graphics_56 = new cjs.Graphics().p("A0xgQQIjooMIgDQMIgCIlIjQInIhADMIMg6hAANQgDsIIiokg");
	var mask_3_graphics_57 = new cjs.Graphics().p("A9QT8QAIsJIpodQIqofMIAHQMIAIIeIrQIgIogIMIg");
	var mask_3_graphics_58 = new cjs.Graphics().p("A9QTVQASsIIxoWQIyoYMHASQMIASIWIzQIZIvgTMIg");
	var mask_3_graphics_59 = new cjs.Graphics().p("A9PSkQAfsHI5oMQI7oPMHAfQMHAfINI7QIPI5gfMHg");
	var mask_3_graphics_60 = new cjs.Graphics().p("A9PR0QAssHJCoCQJEoFMGAsQMHAsIDJDQIGJCgtMHg");
	var mask_3_graphics_61 = new cjs.Graphics().p("A9OREQA5sGJLn5QJMn7MFA5QMGA5H6JLQH7JLg5MGg");
	var mask_3_graphics_62 = new cjs.Graphics().p("A9NQUQBGsFJTnvQJVnxMEBGQMFBGHvJTQHyJThGMFg");
	var mask_3_graphics_63 = new cjs.Graphics().p("A9LPkQBTsEJanlQJdnnMDBTQMEBTHmJcQHnJbhTMDg");
	var mask_3_graphics_64 = new cjs.Graphics().p("A9KO0QBgsCJjnbQJlndMBBgQMDBgHbJjQHeJjhgMDg");
	var mask_3_graphics_65 = new cjs.Graphics().p("A9IOEQBtsAJrnRQJtnTL/BtQMBBtHRJrQHTJrhtMBg");
	var mask_3_graphics_66 = new cjs.Graphics().p("A9GNVQB6r/JynGQJ1nJL+B6QL+B5HHJ0QHJJzh6L+g");
	var mask_3_graphics_67 = new cjs.Graphics().p("A9DMlQCGr9J6m7QJ8m+L8CGQL8CHG8J7QG/J6iHL8g");
	var mask_3_graphics_68 = new cjs.Graphics().p("A9BL1QCTr5KCmxQKDm0L5CTQL6CTGyKDQG0KBiUL6g");
	var mask_3_graphics_69 = new cjs.Graphics().p("A8+LGQCgr2KJmnQKKmpL3CgQL3CgGnKJQGpKJigL3g");
	var mask_3_graphics_70 = new cjs.Graphics().p("A86KXQCsr0KPmcQKSmdL0CsQL1CtGbKQQGeKQisL0g");
	var mask_3_graphics_71 = new cjs.Graphics().p("A83JoQC5rxKWmRQKZmSLxC5QLxC5GRKXQGTKXi5Lxg");
	var mask_3_graphics_72 = new cjs.Graphics().p("A8zI5QDFrtKdmGQKfmILuDGQLuDGGGKdQGIKejGLug");
	var mask_3_graphics_73 = new cjs.Graphics().p("A8vILQDSrqKjl7QKml8LqDSQLrDSF6KkQF9KkjSLrg");
	var mask_3_graphics_74 = new cjs.Graphics().p("A8rHcQDfrmKplwQKslwLmDeQLoDfFvKqQFxKqjfLog");
	var mask_3_graphics_75 = new cjs.Graphics().p("A8nGuQDrrjKwlkQKyllLjDrQLjDrFkKxQFlKwjrLjg");
	var mask_3_graphics_76 = new cjs.Graphics().p("A8iGAQD4reK1lZQK4laLeD4QLgD3FYK2QFaK2j3Lgg");
	var mask_3_graphics_77 = new cjs.Graphics().p("A8dFTQEErbK7lNQK9lOLbEEQLbEEFMK7QFPK8kELbg");
	var mask_3_graphics_78 = new cjs.Graphics().p("A8XElQEPrWLBlBQLDlCLWEQQLXEPFALCQFDLBkQLXg");
	var mask_3_graphics_79 = new cjs.Graphics().p("A8SD4QEcrRLGk2QLIk2LREcQLTEcE0LGQE3LHkcLSg");
	var mask_3_graphics_80 = new cjs.Graphics().p("A8MDLQEorMLLkqQLNkqLMEoQLOEoEpLLQErLMkoLNg");
	var mask_3_graphics_81 = new cjs.Graphics().p("A8GCfQE0rILQkdQLSkfLHE0QLJE0EcLQQEfLRkzLIg");
	var mask_3_graphics_82 = new cjs.Graphics().p("A7/ByQE/rCLVkRQLWkSLDE/QLDFAEQLVQETLVk/LDg");
	var mask_3_graphics_83 = new cjs.Graphics().p("A75BGQFMq8LYkGQLbkGK9FMQK+FLEELaQEHLZlLK+g");
	var mask_3_graphics_84 = new cjs.Graphics().p("A7yAbQFXq3Ldj5QLfj6K4FXQK4FXD4LeQD7LelXK4g");
	var mask_3_graphics_85 = new cjs.Graphics().p("A7rgPQFjqzLhjsQLjjuKyFjQKyFjDsLhQDuLiliKyg");
	var mask_3_graphics_86 = new cjs.Graphics().p("A7jg6QFuqtLljgQLmjhKsFuQKtFuDfLmQDiLmluKsg");
	var mask_3_graphics_87 = new cjs.Graphics().p("A7chlQF6qmLojUQLrjUKmF5QKmF6DSLpQDWLpl5Kmg");
	var mask_3_graphics_88 = new cjs.Graphics().p("A7UiPQGFqgLsjHQLujIKfGFQKgGFDGLsQDJLtmFKgg");
	var mask_3_graphics_89 = new cjs.Graphics().p("A7Mi5QGQqZLwi7QLwi7KZGQQKZGQC6LwQC9LwmQKZg");
	var mask_3_graphics_90 = new cjs.Graphics().p("A7DjiQGbqSLyivQL0ivKSGbQKSGcCuLyQCwL0mcKSg");
	var mask_3_graphics_91 = new cjs.Graphics().p("A60kLQGmqLL1iiQL2iiKMGmQKLGmCgL1QCkL2mmKMg");
	var mask_3_graphics_92 = new cjs.Graphics().p("A6jk0QGxqEL3iVQL6iVKEGxQKEGwCUL5QCWL4mxKEg");
	var mask_3_graphics_93 = new cjs.Graphics().p("A6SlcQG8p8L6iJQL8iJJ8G8QJ9G7CHL7QCKL7m7J9g");
	var mask_3_graphics_94 = new cjs.Graphics().p("A5/mDQHGp2L8h7QL+h8J1HGQJ1HGB7L9QB9L9nGJ1g");
	var mask_3_graphics_95 = new cjs.Graphics().p("A5tmqQHRpuL+hvQL/hvJuHRQJuHQBtL/QBxL/nRJug");
	var mask_3_graphics_96 = new cjs.Graphics().p("A5anRQHbpmMAhiQMBhiJmHbQJmHbBgMAQBkMBnbJmg");
	var mask_3_graphics_97 = new cjs.Graphics().p("A5Hn3QHlpeMChVQMDhWJdHlQJeHlBUMCQBXMDnlJeg");
	var mask_3_graphics_98 = new cjs.Graphics().p("A4zodQHvpWMDhIQMEhIJWHvQJVHvBHMDQBKMEnvJVg");
	var mask_3_graphics_99 = new cjs.Graphics().p("A4fpCQH5pOMEg7QMFg7JNH5QJOH5A6MEQA8MFn5JNg");
	var mask_3_graphics_100 = new cjs.Graphics().p("A4KpnQICpFMFguQMGgvJFIDQJFIDAtMFQAwMGoDJEg");
	var mask_3_graphics_101 = new cjs.Graphics().p("A32qLQINo8MFgiQMHghI8IMQI8IMAgMGQAjMHoMI8g");
	var mask_3_graphics_102 = new cjs.Graphics().p("A3gqvQIVozMGgVQMIgUIzIVQIzIWATMGQAWMIoWIzg");
	var mask_3_graphics_103 = new cjs.Graphics().p("A3LrSQIfoqMGgIQMIgIIqIgQIqIfAGMGQAKMHogIrg");
	var mask_3_graphics_104 = new cjs.Graphics().p("A21r1QIoohMGAGQMIAFIhIoQIhIpgHMGQgEMHooIhg");
	var mask_3_graphics_105 = new cjs.Graphics().p("A2fsXQIyoXMFASQMIASIXIxQIYIygUMGQgQMHoyIYg");
	var mask_3_graphics_106 = new cjs.Graphics().p("A2Is4QI6oOMFAfQMHAfIOI6QIPI6ghMGQgeMHo6IOg");
	var mask_3_graphics_107 = new cjs.Graphics().p("A1ytZQJDoFMFAsQMHAsIEJDQIFJDguMFQgrMHpCIEg");
	var mask_3_graphics_108 = new cjs.Graphics().p("A1at5QJLn7MEA5QMGA5H6JLQH7JMg6MEQg4MFpLH7g");
	var mask_3_graphics_109 = new cjs.Graphics().p("A1DuZQJUnxMCBGQMFBGHxJUQHxJUhHMDQhFMEpUHxg");
	var mask_3_graphics_110 = new cjs.Graphics().p("A0ru4QJcnnMABSQMFBTHnJdQHmJchUMBQhRMDpcHng");
	var mask_3_graphics_111 = new cjs.Graphics().p("A0TvXQJkndL/BgQMDBgHdJkQHcJkhhMAQheMCpkHdg");
	var mask_3_graphics_112 = new cjs.Graphics().p("Az7v1QJsnSL+BsQMBBtHSJsQHSJshtL/QhsL/psHTg");
	var mask_3_graphics_113 = new cjs.Graphics().p("AziwSQJ0nIL7B5QL/B6HIJzQHIJ0h7L9Qh3L+p0HIg");
	var mask_3_graphics_114 = new cjs.Graphics().p("AzJwvQJ7m9L5CGQL9CGG+J7QG9J7iHL7QiFL8p7G9g");
	var mask_3_graphics_115 = new cjs.Graphics().p("AywxLQKDmyL3CSQL6CTGzKDQGzKCiUL5QiSL5qCGzg");
	var mask_3_graphics_116 = new cjs.Graphics().p("AyWxmQKKmoL0CfQL4CgGoKKQGoKJihL2QieL3qKGog");
	var mask_3_graphics_117 = new cjs.Graphics().p("Ax8yBQKRmdLxCsQL1CtGeKRQGdKPiuL0QirL0qRGdg");
	var mask_3_graphics_118 = new cjs.Graphics().p("AxiybQKYmSLuC5QLzC5GSKYQGSKWi7LxQi3LxqYGSg");
	var mask_3_graphics_119 = new cjs.Graphics().p("AxHy0QKemHLrDFQLvDGGHKeQGHKdjHLuQjELuqeGHg");
	var mask_3_graphics_120 = new cjs.Graphics().p("AwtzNQKll7LoDRQLsDSF7KlQF8KkjTLqQjRLqqkF8g");
	var mask_3_graphics_121 = new cjs.Graphics().p("AwSzlQKrlwLlDeQLoDfFwKrQFwKpjfLnQjdLnqrFwg");
	var mask_3_graphics_122 = new cjs.Graphics().p("Av2z8QKxllLgDrQLkDrFlKxQFlKvjsLjQjpLjqxFlg");
	var mask_3_graphics_123 = new cjs.Graphics().p("Avb0TQK3lZLdD3QLgD3FZK3QFZK2j4LeQj2Lfq2Fag");
	var mask_3_graphics_124 = new cjs.Graphics().p("Au/0oQK9lOLYEDQLcEDFNK9QFOK7kFLaQkBLcq9FNg");
	var mask_3_graphics_125 = new cjs.Graphics().p("Auj0+QLClBLUEOQLYEQFBLCQFCLBkRLWQkOLXrCFBg");
	var mask_3_graphics_126 = new cjs.Graphics().p("AuG1SQLHk2LPEbQLTEcE2LHQE2LGkdLRQkaLSrHE2g");
	var mask_3_graphics_127 = new cjs.Graphics().p("Atq1mQLMkqLLEnQLOEoEqLMQEqLMkpLMQkmLNrMEqg");
	var mask_3_graphics_128 = new cjs.Graphics().p("AtN15QLRkeLFEzQLJE0EeLRQEeLQk0LHQkyLIrSEeg");
	var mask_3_graphics_129 = new cjs.Graphics().p("As62GQLUkWLCE7QLGE8EWLUQEWLTk9LEQk6LFrUEWg");
	var mask_3_graphics_130 = new cjs.Graphics().p("Asn2SQLXkOK/FDQLCFDEOLXQEOLXlELAQlCLBrXEOg");
	var mask_3_graphics_131 = new cjs.Graphics().p("AsU2eQLakGK7FKQK/FMEGLaQEGLZlMK8QlKK+raEGg");
	var mask_3_graphics_132 = new cjs.Graphics().p("AsB2pQLdj+K4FRQK6FTD+LdQD+LclTK5QlRK6rdD+g");
	var mask_3_graphics_133 = new cjs.Graphics().p("Art21QLgj2KzFaQK3FbD2LfQD2LflbK1QlZK2rgD2g");
	var mask_3_graphics_134 = new cjs.Graphics().p("Ara2/QLijuKwFhQKzFiDuLiQDuLiljKxQlgKyrjDug");
	var mask_3_graphics_135 = new cjs.Graphics().p("ArG3KQLkjmKsFpQKvFpDmLlQDmLklqKuQloKurlDmg");
	var mask_3_graphics_136 = new cjs.Graphics().p("Aqz3UQLnjeKoFwQKrFxDeLoQDeLmlyKpQlwKrrnDeg");
	var mask_3_graphics_137 = new cjs.Graphics().p("Aqf3eQLpjWKkF4QKnF4DWLqQDVLpl5KlQl3KnrqDVg");
	var mask_3_graphics_138 = new cjs.Graphics().p("AqL3oQLrjNKgF/QKjGADNLsQDOLrmBKhQl/KirsDOg");
	var mask_3_graphics_139 = new cjs.Graphics().p("Ap43xQLujFKcGGQKeGHDFLvQDGLtmJKdQmFKervDFg");
	var mask_3_graphics_140 = new cjs.Graphics().p("Apk36QLwi9KYGNQKaGPC9LxQC8LvmPKZQmNKZrxC9g");
	var mask_3_graphics_141 = new cjs.Graphics().p("ApQ4DQLyi1KTGVQKWGXC0LyQC1LxmXKUQmUKWrzC0g");
	var mask_3_graphics_142 = new cjs.Graphics().p("Ao84LQL0itKOGcQKSGeCsL0QCsL0meKPQmbKRr1Csg");
	var mask_3_graphics_143 = new cjs.Graphics().p("Aoo4TQL1ikKLGjQKMGlCkL2QCkL1mlKLQmjKMr2Ckg");
	var mask_3_graphics_144 = new cjs.Graphics().p("AoU4bQL3icKGGrQKIGsCcL3QCbL3msKHQmqKHr4Ccg");
	var mask_3_graphics_145 = new cjs.Graphics().p("AoA4iQL5iUKBGyQKDGzCTL5QCUL5m0KBQmxKDr5CTg");
	var mask_3_graphics_146 = new cjs.Graphics().p("Anr4pQL6iLJ8G4QJ+G6CLL7QCLL6m6J9Qm4J+r8CLg");
	var mask_3_graphics_147 = new cjs.Graphics().p("AnX4wQL7iDJ4HAQJ5HBCDL8QCCL8nBJ4Qm/J5r9CCg");
	var mask_3_graphics_148 = new cjs.Graphics().p("AnD43QL9h6JyHHQJ1HIB6L+QB6L9nIJyQnGJ1r+B6g");
	var mask_3_graphics_149 = new cjs.Graphics().p("Amv49QL/hxJtHNQJwHPBxL/QByL+nPJuQnNJvsAByg");
	var mask_3_graphics_150 = new cjs.Graphics().p("Ama5CQL/hpJoHUQJrHVBpMBQBpL/nWJpQnTJqsBBpg");
	var mask_3_graphics_151 = new cjs.Graphics().p("AmG5IQMBhgJjHaQJlHdBhMAQBgMCncJjQnbJlsBBhg");
	var mask_3_graphics_152 = new cjs.Graphics().p("Aly5NQMChYJeHhQJgHkBYMBQBYMDnjJeQnhJgsDBYg");
	var mask_3_graphics_153 = new cjs.Graphics().p("Ald5RQMChQJZHoQJaHqBQMCQBQMEnqJYQnoJbsDBQg");
	var mask_3_graphics_154 = new cjs.Graphics().p("AlJ5WQMEhHJTHvQJVHwBHMDQBHMFnwJTQnuJVsFBHg");
	var mask_3_graphics_155 = new cjs.Graphics().p("Ak05aQMEg+JNH1QJQH2A/MFQA/MFn3JNQn1JQsEA/g");
	var mask_3_graphics_156 = new cjs.Graphics().p("Akg5dQMFg3JIH8QJKH9A2MFQA3MGn+JIQn7JKsFA2g");
	var mask_3_graphics_157 = new cjs.Graphics().p("AkM5hQMGgtJCIBQJFIEAuMFQAtMHoDJCQoCJFsFAug");
	var mask_3_graphics_158 = new cjs.Graphics().p("Aj35kQMGglI8IIQI/IKAmMGQAlMHoKI9QoII+sGAmg");
	var mask_3_graphics_159 = new cjs.Graphics().p("Ajj5mQMGgdI3IOQI6IRAcMGQAdMHoQI3QoPI5sGAdg");
	var mask_3_graphics_160 = new cjs.Graphics().p("AjO5pQMGgUIxIVQI0IWAUMHQAUMHoWIxQoVI0sGAUg");
	var mask_3_graphics_161 = new cjs.Graphics().p("Ai65qQMHgMIrIaQItIdAMMHQAMMHodIsQoaItsHAMg");
	var mask_3_graphics_162 = new cjs.Graphics().p("Ail5sQMGgDImIgQInIjADMHQAEMHojImQohInsHADg");
	var mask_3_graphics_163 = new cjs.Graphics().p("EgCqAgxMAAZg6eQMHAFIfInQIhIogFMHQgFMIopIfQohIcr+AAIgOAAg");
	var mask_3_graphics_164 = new cjs.Graphics().p("EgC/AgvMABCg6eQMHAOIZItQIbIvgNMGQgOMIovIZQofIOruAAIgmgBg");
	var mask_3_graphics_165 = new cjs.Graphics().p("EgDUAguMABsg6dQMGAWITIyQIVI1gWMGQgWMIo1ITQocH/rfAAIg+AAg");
	var mask_3_graphics_166 = new cjs.Graphics().p("EgDpAgrMACVg6bQMGAfINI4QIPI6gfMHQgfMHo6IMQoZHyrRAAQgqAAgrgCg");
	var mask_3_graphics_167 = new cjs.Graphics().p("EgD9AgpMAC9g6aQMGAoIHI+QIIJAgnMGQgnMGpAIHQoWHkrCAAQg2AAg2gDg");
	var mask_3_graphics_168 = new cjs.Graphics().p("EgESAgmMADng6XQMFAwIAJEQICJGgvMFQgwMGpGIAQoTHXq0AAQhAAAhCgFg");
	var mask_3_graphics_169 = new cjs.Graphics().p("EgEnAgkMAEQg6VQMFA4H6JKQH7JLg4MFQg4MFpMH6QoPHJqmAAQhMAAhNgFg");
	var mask_3_graphics_170 = new cjs.Graphics().p("EgE8AghMAE5g6SQMEBBH0JPQH1JRhBMEQhBMFpRHzQoLG8qZAAQhWAAhZgHg");
	var mask_3_graphics_171 = new cjs.Graphics().p("EgFQAgdMAFhg6NQMEBJHtJUQHuJXhJMDQhJMEpXHtQoHGvqMAAQhhAAhjgKg");
	var mask_3_graphics_172 = new cjs.Graphics().p("EgFlAgaMAGKg6KQMDBSHmJaQHoJchRMCQhSMDpcHmQoDGjp/AAQhrAAhvgMg");
	var mask_3_graphics_173 = new cjs.Graphics().p("EgF6AgWMAGzg6FQMCBaHgJfQHhJihaMBQhaMCphHgQn/GVpzAAQh1AAh6gOg");
	var mask_3_graphics_174 = new cjs.Graphics().p("EgGOAgSMAHbg6AQMBBjHZJkQHbJnhjMAQhiMBpmHZQn8GJplAAQiAAAiEgRg");
	var mask_3_graphics_175 = new cjs.Graphics().p("EgGjAgOMAIEg57QMABsHTJpQHUJshsL/QhrMAprHSQn3F9pZAAQiKAAiPgUg");
	var mask_3_graphics_176 = new cjs.Graphics().p("EgG3AgJMAIsg50QL/B0HMJuQHNJxh0L+QhzL/pxHLQnyFxpNAAQiUAAiZgYg");
	var mask_3_graphics_177 = new cjs.Graphics().p("EgHMAgFMAJVg5uQL+B8HFJzQHGJ2h8L8Qh8L+p2HEQntFlpBAAQieAAikgag");
	var mask_3_graphics_178 = new cjs.Graphics().p("EgHhAgAMAJ+g5nQL9CEG9J4QG/J7iEL7QiEL8p7G+QnoFZo2AAQinAAivgeg");
	var mask_3_graphics_179 = new cjs.Graphics().p("An1f7MAKmg5gQL7CNG3J9QG4J/iNL6QiNL7p/G2QnjFOoqAAQixAAi5gig");
	var mask_3_graphics_180 = new cjs.Graphics().p("AoKf2MALPg5ZQL5CVGwKCQGxKFiVL4QiVL5qEGvQneFDofAAQi7AAjDgmg");
	var mask_3_graphics_181 = new cjs.Graphics().p("AoefwMAL3g5QQL4CdGoKHQGqKJidL2QieL4qIGoQnZE3oTAAQjFAAjNgqg");
	var mask_3_graphics_182 = new cjs.Graphics().p("AoyfqMAMfg5HQL2ClGhKMQGjKNimL1QimL2qNGhQnTEsoIAAQjPAAjWgvg");
	var mask_3_graphics_183 = new cjs.Graphics().p("ApHfkMANIg4+QL0CuGaKQQGcKSivLzQiuLzqRGaQnOEin9AAQjYAAjhg0g");
	var mask_3_graphics_184 = new cjs.Graphics().p("ApbfeMANwg41QLxC2GTKVQGVKWi2LxQi3LyqWGTQnIEXnyAAQjiAAjqg5g");
	var mask_3_graphics_185 = new cjs.Graphics().p("ApvfYMAOXg4sQLwC/GMKZQGNKbi/LvQi+LwqbGLQnCEMnoABQjqAAj0g+g");
	var mask_3_graphics_186 = new cjs.Graphics().p("AqDfRMAO/g4hQLuDHGEKdQGGKgjHLsQjHLuqfGEQm7ECneAAQj0AAj9hDg");
	var mask_3_graphics_187 = new cjs.Graphics().p("AqXfKMAPng4WQLrDPF9KiQF+KjjPLrQjPLrqjF8Qm1D5nTAAQj+AAkGhJg");
	var mask_3_graphics_188 = new cjs.Graphics().p("AqrfDMAQOg4LQLpDYF2KlQF3KojXLoQjYLpqnF1QmvDvnJAAQkHAAkPhPg");
	var mask_3_graphics_189 = new cjs.Graphics().p("Aq/e8MAQ2g3/QLmDfFvKqQFvKsjgLlQjfLnqrFtQmpDlm+AAQkQAAkZhUg");
	var mask_3_graphics_190 = new cjs.Graphics().p("ArTe1MARdg30QLkDoFnKtQFoKvjoLkQjnLlqwFmQmhDbm1AAQkZAAkihag");
	var mask_3_graphics_191 = new cjs.Graphics().p("ArnetMASFg3nQLhDwFfKxQFhKzjwLiQjwLhqzFfQmbDSmrAAQkiAAkrhhg");
	var mask_3_graphics_192 = new cjs.Graphics().p("Ar6elMASrg3aQLfD4FXK1QFZK3j4LfQj4Lfq3FXQmUDJmgAAQksAAkzhog");
	var mask_3_graphics_193 = new cjs.Graphics().p("AsOedMATSg3MQLcEAFQK4QFRK7kALcQkALcq6FPQmNDAmXAAQk1AAk8hug");
	var mask_3_graphics_194 = new cjs.Graphics().p("AsheVMAT4g2/QLaEIFIK9QFJK+kILZQkILZq+FIQmGC3mNAAQk+AAlEh1g");
	var mask_3_graphics_195 = new cjs.Graphics().p("As1eMMAUgg2wQLWEQFALAQFCLBkQLXQkQLWrCFAQl+CvmEAAQlHAAlNh9g");
	var mask_3_graphics_196 = new cjs.Graphics().p("AtIeEMAVGg2iQLTEYE5LDQE5LFkXLUQkYLTrGE4Ql2Cml6AAQlSAAlUiDg");
	var mask_3_graphics_197 = new cjs.Graphics().p("Atbd7MAVsg2TQLQEgExLHQEyLIkgLQQkgLRrJEwQlvCelwAAQlbAAlciLg");
	var mask_3_graphics_198 = new cjs.Graphics().p("AtvdyMAWTg2EQLMEoEqLKQEqLMkoLNQkoLNrMEoQlnCXlnAAQlkAAlliTg");
	var mask_3_graphics_199 = new cjs.Graphics().p("AuCdoMAW4g1zQLKEwEhLNQEjLPkwLKQkwLJrPEhQlfCOleAAQltAAltibg");
	var mask_3_graphics_200 = new cjs.Graphics().p("AuVdfMAXeg1jQLGE3EaLRQEaLSk3LGQk4LHrSEYQlYCHlUAAQl3AAl0ijg");
	var mask_3_graphics_201 = new cjs.Graphics().p("AundVMAYDg1SQLDE/ERLUQESLVk/LDQk/LDrVEQQlQCAlKAAQmBAAl7isg");
	var mask_3_graphics_202 = new cjs.Graphics().p("Au6dLMAYog1BQLAFHEJLXQELLYlHK/QlHK/rZEJQlHB4lBAAQmKAAmDi0g");
	var mask_3_graphics_203 = new cjs.Graphics().p("AvNdBMAZOg0vQK8FOEBLaQECLblOK7QlPK8rbEBQk/Bxk4AAQmUAAmKi9g");
	var mask_3_graphics_204 = new cjs.Graphics().p("Avfc3MAZyg0eQK4FXD6LcQD6LelWK4QlWK4reD4Qk3BqkuAAQmeAAmRjFg");
	var mask_3_graphics_205 = new cjs.Graphics().p("AvycsMAaXg0LQK0FeDyLfQDyLgleK0QleK0rgDxQkuBkklAAQmoAAmYjPg");
	var mask_3_graphics_206 = new cjs.Graphics().p("AwDciMAa5gz6QKwFlDqLhQDrLjlkKxQllKwrjDpQkmBekdAAQmwAAmfjXg");
	var mask_3_graphics_207 = new cjs.Graphics().p("AwTcYMAbZgzoQKtFrDjLkQDjLllrKtQlsKtrlDhQkdBZkVAAQm5AAmljgg");
	var mask_3_graphics_208 = new cjs.Graphics().p("AwjcOMAb6gzWQKpFyDbLlQDcLolyKpQlyKprnDaQkWBTkMAAQnDAAmqjog");
	var mask_3_graphics_209 = new cjs.Graphics().p("AwzcEMAcagzEQKlF5DULnQDVLql5KlQl5KlrpDTQkOBOkDAAQnMAAmwjxg");
	var mask_3_graphics_210 = new cjs.Graphics().p("AxDb6MAc6gyyQKiF/DMLqQDNLrl/KiQmAKhrrDMQkFBIj7AAQnVAAm2j5g");
	var mask_3_graphics_211 = new cjs.Graphics().p("AxTbvMAdagyfQKeGGDFLsQDGLtmGKeQmHKdrtDFQj9BDjyAAQnfAAm7kDg");
	var mask_3_graphics_212 = new cjs.Graphics().p("AxjbkMAd6gyMQKaGNC9LuQC/LvmNKZQmNKarvC9Qj0A+jqAAQnoAAnBkMg");
	var mask_3_graphics_213 = new cjs.Graphics().p("AxzbaMAeagx5QKWGTC2LwQC3LwmUKWQmTKWrxC1QjrA6jiAAQnxAAnHkVg");
	var mask_3_graphics_214 = new cjs.Graphics().p("AyCbPMAe5gxlQKRGaCvLxQCvLymZKSQmaKRrzCuQjjA1jZAAQn7AAnLkeg");
	var mask_3_graphics_215 = new cjs.Graphics().p("AySbDMAfYgxQQKOGgCnLzQCoL0mgKNQmhKOr0CmQjaAxjQAAQoFAAnRkpg");
	var mask_3_graphics_216 = new cjs.Graphics().p("Ayha4MAf3gw8QKJGnCgL0QCgL1mmKKQmnKJr2CeQjRAtjIAAQoOAAnWkyg");
	var mask_3_graphics_217 = new cjs.Graphics().p("AyxatMAgXgwoQKFGtCYL2QCYL3mtKFQmtKFr3CXQjIApjAAAQoYAAnbk8g");
	var mask_3_graphics_218 = new cjs.Graphics().p("AzAahMAg1gwTQKBG0CQL3QCRL4mzKBQm0KBr4CPQi+Ali4AAQoiAAnglGg");
	var mask_3_graphics_219 = new cjs.Graphics().p("AzPaVMAhTgv9QJ8G6CKL4QCJL6m6J8Qm5J8r6CIQi1AiivAAQotAAnklRg");
	var mask_3_graphics_220 = new cjs.Graphics().p("AzeaJMAhxgvnQJ4HACCL5QCCL7nAJ4QnAJ4r7CAQisAeimAAQo3AAnplbg");
	var mask_3_graphics_221 = new cjs.Graphics().p("AztZ9MAiQgvSQJzHHB6L6QB6L9nGJzQnGJzr9B5QiiAaidAAQpCAAntllg");
	var mask_3_graphics_222 = new cjs.Graphics().p("Az8ZxMAiugu8QJuHNBzL8QByL9nMJvQnMJur+ByQiZAXiUAAQpMAAnylwg");
	var mask_3_graphics_223 = new cjs.Graphics().p("A0KZlMAjKgumQJqHTBrL9QBrL+nSJqQnTJqr+BqQiQAUiLAAQpXAAn1l6g");
	var mask_3_graphics_224 = new cjs.Graphics().p("A0ZZYMAjoguPQJlHZBjL+QBkL/nZJmQnYJlsABiQiGASiCAAQpiAAn5mGg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_3_graphics_9,x:144.3,y:192.3}).wait(1).to({graphics:mask_3_graphics_10,x:145,y:191.2}).wait(1).to({graphics:mask_3_graphics_11,x:145.7,y:190}).wait(1).to({graphics:mask_3_graphics_12,x:146.3,y:188.9}).wait(1).to({graphics:mask_3_graphics_13,x:147,y:187.7}).wait(1).to({graphics:mask_3_graphics_14,x:147.6,y:186.5}).wait(1).to({graphics:mask_3_graphics_15,x:148.2,y:185.3}).wait(1).to({graphics:mask_3_graphics_16,x:148.8,y:184.1}).wait(1).to({graphics:mask_3_graphics_17,x:149.4,y:182.9}).wait(1).to({graphics:mask_3_graphics_18,x:150,y:181.7}).wait(1).to({graphics:mask_3_graphics_19,x:150.5,y:180.4}).wait(1).to({graphics:mask_3_graphics_20,x:151.1,y:179.2}).wait(1).to({graphics:mask_3_graphics_21,x:151.6,y:178}).wait(1).to({graphics:mask_3_graphics_22,x:152.1,y:176.7}).wait(1).to({graphics:mask_3_graphics_23,x:152.7,y:175.4}).wait(1).to({graphics:mask_3_graphics_24,x:153.1,y:174.2}).wait(1).to({graphics:mask_3_graphics_25,x:153.6,y:172.9}).wait(1).to({graphics:mask_3_graphics_26,x:154.1,y:171.6}).wait(1).to({graphics:mask_3_graphics_27,x:154.5,y:170.3}).wait(1).to({graphics:mask_3_graphics_28,x:155,y:169}).wait(1).to({graphics:mask_3_graphics_29,x:155.4,y:167.7}).wait(1).to({graphics:mask_3_graphics_30,x:155.8,y:166.4}).wait(1).to({graphics:mask_3_graphics_31,x:156.2,y:165.1}).wait(1).to({graphics:mask_3_graphics_32,x:156.5,y:163.8}).wait(1).to({graphics:mask_3_graphics_33,x:156.9,y:162.4}).wait(1).to({graphics:mask_3_graphics_34,x:157.2,y:161.1}).wait(1).to({graphics:mask_3_graphics_35,x:157.6,y:159.8}).wait(1).to({graphics:mask_3_graphics_36,x:157.9,y:158.4}).wait(1).to({graphics:mask_3_graphics_37,x:158.2,y:157.1}).wait(1).to({graphics:mask_3_graphics_38,x:158.5,y:155.7}).wait(1).to({graphics:mask_3_graphics_39,x:158.7,y:154.4}).wait(1).to({graphics:mask_3_graphics_40,x:159,y:153}).wait(1).to({graphics:mask_3_graphics_41,x:159.2,y:151.6}).wait(1).to({graphics:mask_3_graphics_42,x:159.4,y:150.3}).wait(1).to({graphics:mask_3_graphics_43,x:159.6,y:148.9}).wait(1).to({graphics:mask_3_graphics_44,x:159.8,y:147.5}).wait(1).to({graphics:mask_3_graphics_45,x:160,y:146.1}).wait(1).to({graphics:mask_3_graphics_46,x:160.1,y:144.8}).wait(1).to({graphics:mask_3_graphics_47,x:160.2,y:143.4}).wait(1).to({graphics:mask_3_graphics_48,x:160.4,y:142}).wait(1).to({graphics:mask_3_graphics_49,x:160.5,y:140.6}).wait(1).to({graphics:mask_3_graphics_50,x:160.5,y:139.2}).wait(1).to({graphics:mask_3_graphics_51,x:160.6,y:137.8}).wait(1).to({graphics:mask_3_graphics_52,x:160.6,y:136.4}).wait(1).to({graphics:mask_3_graphics_53,x:160.6,y:135}).wait(1).to({graphics:mask_3_graphics_54,x:160.6,y:133.6}).wait(1).to({graphics:mask_3_graphics_55,x:160.6,y:132.2}).wait(1).to({graphics:mask_3_graphics_56,x:160.6,y:130.8}).wait(1).to({graphics:mask_3_graphics_57,x:160.5,y:131.3}).wait(1).to({graphics:mask_3_graphics_58,x:160.4,y:132.5}).wait(1).to({graphics:mask_3_graphics_59,x:160.4,y:133.9}).wait(1).to({graphics:mask_3_graphics_60,x:160.4,y:135.4}).wait(1).to({graphics:mask_3_graphics_61,x:160.5,y:136.8}).wait(1).to({graphics:mask_3_graphics_62,x:160.6,y:138.2}).wait(1).to({graphics:mask_3_graphics_63,x:160.7,y:139.6}).wait(1).to({graphics:mask_3_graphics_64,x:160.8,y:141.1}).wait(1).to({graphics:mask_3_graphics_65,x:161,y:142.5}).wait(1).to({graphics:mask_3_graphics_66,x:161.2,y:143.9}).wait(1).to({graphics:mask_3_graphics_67,x:161.4,y:145.3}).wait(1).to({graphics:mask_3_graphics_68,x:161.6,y:146.7}).wait(1).to({graphics:mask_3_graphics_69,x:161.9,y:148.1}).wait(1).to({graphics:mask_3_graphics_70,x:162.2,y:149.5}).wait(1).to({graphics:mask_3_graphics_71,x:162.5,y:150.9}).wait(1).to({graphics:mask_3_graphics_72,x:162.8,y:152.3}).wait(1).to({graphics:mask_3_graphics_73,x:163.2,y:153.7}).wait(1).to({graphics:mask_3_graphics_74,x:163.6,y:155.1}).wait(1).to({graphics:mask_3_graphics_75,x:164,y:156.4}).wait(1).to({graphics:mask_3_graphics_76,x:164.4,y:157.8}).wait(1).to({graphics:mask_3_graphics_77,x:164.9,y:159.1}).wait(1).to({graphics:mask_3_graphics_78,x:165.4,y:160.5}).wait(1).to({graphics:mask_3_graphics_79,x:165.9,y:161.8}).wait(1).to({graphics:mask_3_graphics_80,x:166.4,y:163.1}).wait(1).to({graphics:mask_3_graphics_81,x:167,y:164.4}).wait(1).to({graphics:mask_3_graphics_82,x:167.5,y:165.7}).wait(1).to({graphics:mask_3_graphics_83,x:168.1,y:167}).wait(1).to({graphics:mask_3_graphics_84,x:168.7,y:168.3}).wait(1).to({graphics:mask_3_graphics_85,x:169.4,y:169.5}).wait(1).to({graphics:mask_3_graphics_86,x:170,y:170.8}).wait(1).to({graphics:mask_3_graphics_87,x:170.7,y:172}).wait(1).to({graphics:mask_3_graphics_88,x:171.4,y:173.3}).wait(1).to({graphics:mask_3_graphics_89,x:172.1,y:174.5}).wait(1).to({graphics:mask_3_graphics_90,x:172.9,y:175.7}).wait(1).to({graphics:mask_3_graphics_91,x:173,y:176.9}).wait(1).to({graphics:mask_3_graphics_92,x:173,y:178}).wait(1).to({graphics:mask_3_graphics_93,x:172.9,y:179.2}).wait(1).to({graphics:mask_3_graphics_94,x:172.9,y:180.3}).wait(1).to({graphics:mask_3_graphics_95,x:172.8,y:181.5}).wait(1).to({graphics:mask_3_graphics_96,x:172.8,y:182.6}).wait(1).to({graphics:mask_3_graphics_97,x:172.7,y:183.7}).wait(1).to({graphics:mask_3_graphics_98,x:172.7,y:184.7}).wait(1).to({graphics:mask_3_graphics_99,x:172.6,y:185.8}).wait(1).to({graphics:mask_3_graphics_100,x:172.6,y:186.8}).wait(1).to({graphics:mask_3_graphics_101,x:172.5,y:187.9}).wait(1).to({graphics:mask_3_graphics_102,x:172.5,y:188.9}).wait(1).to({graphics:mask_3_graphics_103,x:172.5,y:189.9}).wait(1).to({graphics:mask_3_graphics_104,x:172.4,y:190.8}).wait(1).to({graphics:mask_3_graphics_105,x:172.4,y:191.8}).wait(1).to({graphics:mask_3_graphics_106,x:172.4,y:192.7}).wait(1).to({graphics:mask_3_graphics_107,x:172.4,y:193.6}).wait(1).to({graphics:mask_3_graphics_108,x:172.4,y:194.5}).wait(1).to({graphics:mask_3_graphics_109,x:172.4,y:195.4}).wait(1).to({graphics:mask_3_graphics_110,x:172.4,y:196.2}).wait(1).to({graphics:mask_3_graphics_111,x:172.4,y:197.1}).wait(1).to({graphics:mask_3_graphics_112,x:172.4,y:197.9}).wait(1).to({graphics:mask_3_graphics_113,x:172.4,y:198.7}).wait(1).to({graphics:mask_3_graphics_114,x:172.3,y:199.4}).wait(1).to({graphics:mask_3_graphics_115,x:172.3,y:200.2}).wait(1).to({graphics:mask_3_graphics_116,x:172.3,y:200.9}).wait(1).to({graphics:mask_3_graphics_117,x:172.3,y:201.6}).wait(1).to({graphics:mask_3_graphics_118,x:172.3,y:202.3}).wait(1).to({graphics:mask_3_graphics_119,x:172.3,y:203}).wait(1).to({graphics:mask_3_graphics_120,x:172.3,y:203.6}).wait(1).to({graphics:mask_3_graphics_121,x:172.3,y:204.2}).wait(1).to({graphics:mask_3_graphics_122,x:172.3,y:204.8}).wait(1).to({graphics:mask_3_graphics_123,x:172.3,y:205.4}).wait(1).to({graphics:mask_3_graphics_124,x:172.3,y:205.9}).wait(1).to({graphics:mask_3_graphics_125,x:172.3,y:206.4}).wait(1).to({graphics:mask_3_graphics_126,x:172.2,y:206.9}).wait(1).to({graphics:mask_3_graphics_127,x:172.2,y:207.4}).wait(1).to({graphics:mask_3_graphics_128,x:172.2,y:207.8}).wait(1).to({graphics:mask_3_graphics_129,x:172.2,y:208.1}).wait(1).to({graphics:mask_3_graphics_130,x:172.2,y:208.3}).wait(1).to({graphics:mask_3_graphics_131,x:172.1,y:208.5}).wait(1).to({graphics:mask_3_graphics_132,x:172.1,y:208.7}).wait(1).to({graphics:mask_3_graphics_133,x:172.1,y:208.9}).wait(1).to({graphics:mask_3_graphics_134,x:172.1,y:209.1}).wait(1).to({graphics:mask_3_graphics_135,x:172,y:209.3}).wait(1).to({graphics:mask_3_graphics_136,x:172,y:209.5}).wait(1).to({graphics:mask_3_graphics_137,x:172,y:209.6}).wait(1).to({graphics:mask_3_graphics_138,x:172,y:209.8}).wait(1).to({graphics:mask_3_graphics_139,x:171.9,y:209.9}).wait(1).to({graphics:mask_3_graphics_140,x:171.9,y:210}).wait(1).to({graphics:mask_3_graphics_141,x:171.9,y:210.1}).wait(1).to({graphics:mask_3_graphics_142,x:171.9,y:210.2}).wait(1).to({graphics:mask_3_graphics_143,x:171.8,y:210.3}).wait(1).to({graphics:mask_3_graphics_144,x:171.8,y:210.4}).wait(1).to({graphics:mask_3_graphics_145,x:171.8,y:210.4}).wait(1).to({graphics:mask_3_graphics_146,x:171.7,y:210.5}).wait(1).to({graphics:mask_3_graphics_147,x:171.7,y:210.5}).wait(1).to({graphics:mask_3_graphics_148,x:171.7,y:210.6}).wait(1).to({graphics:mask_3_graphics_149,x:171.6,y:210.6}).wait(1).to({graphics:mask_3_graphics_150,x:171.6,y:210.6}).wait(1).to({graphics:mask_3_graphics_151,x:171.6,y:210.6}).wait(1).to({graphics:mask_3_graphics_152,x:171.6,y:210.6}).wait(1).to({graphics:mask_3_graphics_153,x:171.5,y:210.6}).wait(1).to({graphics:mask_3_graphics_154,x:171.5,y:210.5}).wait(1).to({graphics:mask_3_graphics_155,x:171.5,y:210.5}).wait(1).to({graphics:mask_3_graphics_156,x:171.5,y:210.4}).wait(1).to({graphics:mask_3_graphics_157,x:171.4,y:210.4}).wait(1).to({graphics:mask_3_graphics_158,x:171.4,y:210.3}).wait(1).to({graphics:mask_3_graphics_159,x:171.4,y:210.2}).wait(1).to({graphics:mask_3_graphics_160,x:171.4,y:210.1}).wait(1).to({graphics:mask_3_graphics_161,x:171.3,y:210}).wait(1).to({graphics:mask_3_graphics_162,x:171.3,y:209.8}).wait(1).to({graphics:mask_3_graphics_163,x:171.3,y:209.7}).wait(1).to({graphics:mask_3_graphics_164,x:171.3,y:209.6}).wait(1).to({graphics:mask_3_graphics_165,x:171.3,y:209.4}).wait(1).to({graphics:mask_3_graphics_166,x:171.3,y:209.3}).wait(1).to({graphics:mask_3_graphics_167,x:171.3,y:209.2}).wait(1).to({graphics:mask_3_graphics_168,x:171.3,y:209.1}).wait(1).to({graphics:mask_3_graphics_169,x:171.3,y:208.9}).wait(1).to({graphics:mask_3_graphics_170,x:171.2,y:208.8}).wait(1).to({graphics:mask_3_graphics_171,x:171.2,y:208.7}).wait(1).to({graphics:mask_3_graphics_172,x:171.2,y:208.6}).wait(1).to({graphics:mask_3_graphics_173,x:171.2,y:208.4}).wait(1).to({graphics:mask_3_graphics_174,x:171.2,y:208.3}).wait(1).to({graphics:mask_3_graphics_175,x:171.2,y:208.2}).wait(1).to({graphics:mask_3_graphics_176,x:171.2,y:208.1}).wait(1).to({graphics:mask_3_graphics_177,x:171.2,y:207.9}).wait(1).to({graphics:mask_3_graphics_178,x:171.2,y:207.8}).wait(1).to({graphics:mask_3_graphics_179,x:171.2,y:207.7}).wait(1).to({graphics:mask_3_graphics_180,x:171.2,y:207.6}).wait(1).to({graphics:mask_3_graphics_181,x:171.2,y:207.4}).wait(1).to({graphics:mask_3_graphics_182,x:171.2,y:207.3}).wait(1).to({graphics:mask_3_graphics_183,x:171.2,y:207.2}).wait(1).to({graphics:mask_3_graphics_184,x:171.2,y:207.1}).wait(1).to({graphics:mask_3_graphics_185,x:171.2,y:207}).wait(1).to({graphics:mask_3_graphics_186,x:171.2,y:206.8}).wait(1).to({graphics:mask_3_graphics_187,x:171.2,y:206.7}).wait(1).to({graphics:mask_3_graphics_188,x:171.2,y:206.6}).wait(1).to({graphics:mask_3_graphics_189,x:171.2,y:206.4}).wait(1).to({graphics:mask_3_graphics_190,x:171.2,y:206.3}).wait(1).to({graphics:mask_3_graphics_191,x:171.2,y:206.2}).wait(1).to({graphics:mask_3_graphics_192,x:171.2,y:206.1}).wait(1).to({graphics:mask_3_graphics_193,x:171.2,y:205.9}).wait(1).to({graphics:mask_3_graphics_194,x:171.2,y:205.8}).wait(1).to({graphics:mask_3_graphics_195,x:171.2,y:205.7}).wait(1).to({graphics:mask_3_graphics_196,x:171.2,y:205.5}).wait(1).to({graphics:mask_3_graphics_197,x:171.1,y:205.4}).wait(1).to({graphics:mask_3_graphics_198,x:171.1,y:205.3}).wait(1).to({graphics:mask_3_graphics_199,x:171.1,y:205.1}).wait(1).to({graphics:mask_3_graphics_200,x:171.1,y:205}).wait(1).to({graphics:mask_3_graphics_201,x:171.1,y:204.9}).wait(1).to({graphics:mask_3_graphics_202,x:171.1,y:204.7}).wait(1).to({graphics:mask_3_graphics_203,x:171.1,y:204.6}).wait(1).to({graphics:mask_3_graphics_204,x:171,y:204.4}).wait(1).to({graphics:mask_3_graphics_205,x:171,y:204.3}).wait(1).to({graphics:mask_3_graphics_206,x:171,y:204.1}).wait(1).to({graphics:mask_3_graphics_207,x:170.9,y:204}).wait(1).to({graphics:mask_3_graphics_208,x:170.9,y:203.8}).wait(1).to({graphics:mask_3_graphics_209,x:170.9,y:203.7}).wait(1).to({graphics:mask_3_graphics_210,x:170.9,y:203.5}).wait(1).to({graphics:mask_3_graphics_211,x:170.8,y:203.4}).wait(1).to({graphics:mask_3_graphics_212,x:170.8,y:203.2}).wait(1).to({graphics:mask_3_graphics_213,x:170.8,y:203.1}).wait(1).to({graphics:mask_3_graphics_214,x:170.8,y:202.9}).wait(1).to({graphics:mask_3_graphics_215,x:170.7,y:202.8}).wait(1).to({graphics:mask_3_graphics_216,x:170.7,y:202.6}).wait(1).to({graphics:mask_3_graphics_217,x:170.7,y:202.5}).wait(1).to({graphics:mask_3_graphics_218,x:170.7,y:202.3}).wait(1).to({graphics:mask_3_graphics_219,x:170.6,y:202.2}).wait(1).to({graphics:mask_3_graphics_220,x:170.6,y:202}).wait(1).to({graphics:mask_3_graphics_221,x:170.6,y:201.8}).wait(1).to({graphics:mask_3_graphics_222,x:170.5,y:201.7}).wait(1).to({graphics:mask_3_graphics_223,x:170.5,y:201.5}).wait(1).to({graphics:mask_3_graphics_224,x:170.4,y:201.4}).wait(407));

	// Layer 11
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(15,1,1).p("ARGwmQgPAggPAgQgPAhgQAfQgPAggPAhQgPAggQAgQgPAggQAhQgQAggPAhQgQAggQAhQgQAggPAhQgPAfgPAeQgPAegPAfQgPAfgPAeQgOAfgPAfQgPAfgPAfQgQAfgPAeQgPAfgPAfQgPAegQAfQgPAfgQAeQgPAegQAfQgQAfgQAfQgQAggQAfQgQAfgRAgQgQAfgRAfQgRAfgRAeQgQAggRAfQgRAegSAfQgRAfgRAeIgUAiQgTAkgVAjQgUAjgWAgQgWAggYAdQgYAdgbAaQgaAagcAXQgbAXgeAUQgeAUggASQggARgiAOQghAPgiAJQghALgjAFQghAGgiAEQgjgBgigBQgigFghgHQgjgHgigLQgjgNgigQQgjgQgigUQgigTgggXQgggVgegYQgegXgbgZQgcgagZgaQgZgbgWgdQgXgdgUgeQgVgegSgfQgLgTgKgU");
	this.shape_5.setTransform(202.9,283);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(15,1,1).p("ASGwmQgPAggPAgQgPAhgPAfQgPAggPAhQgQAggPAgQgQAggQAhQgPAggQAhQgQAggQAhQgPAggQAhQgPAfgPAeQgOAegPAfQgPAfgPAeQgPAfgPAfQgPAfgPAfQgPAfgPAeQgPAfgPAfQgQAegPAfQgQAfgPAeQgQAegPAfQgQAfgQAfQgQAggRAfQgQAfgQAgQgRAfgQAfQgRAfgRAeQgRAggRAfQgRAegRAfQgRAfgSAeIgUAiQgTAkgVAjQgTAjgXAgQgVAggZAdQgYAdgaAaQgaAagdAXQgbAXgeAUQgeAUgfASQggARgiAOQghAPgjAJQghALgiAFQgiAGgiAEQgigBgigBQgigFgigHQgjgHgigLQgjgNghgQQgkgQghgUQgjgTgggXQgggVgegYQgdgXgcgZQgbgagZgaQgZgbgXgdQgWgdgVgeQgUgegSgfQgLgTgKgUAwJInQgGgNgGgNQgQgggNgiQgOgigLgjQgLgigJgkQgKgkgHgjQgHglgEgkQgFgmgDglQgCgmAAgnQgBglABgn");
	this.shape_6.setTransform(195.9,283.5);

	var maskedShapeInstanceList = [this.shape_5,this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5}]},9).to({state:[{t:this.shape_6}]},80).wait(542));

	// Letter
	this.instance_4 = new lib.T("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(2311.8,666.5);
	this.instance_4.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(631));

	// Background
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#F59E9E").ss(3,1,1).p("EAq+Aq+MhV7AAAMAAAhV7MBV7AAAg");
	this.shape_7.setTransform(275,275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F6E7E7").s().p("Egq9Aq+MAAAhV7MBV7AAAMAAABV7g");
	this.shape_8.setTransform(275,275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).wait(631));

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