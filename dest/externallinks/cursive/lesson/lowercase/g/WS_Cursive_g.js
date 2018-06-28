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
	this.shape.graphics.f("#FFFFFF").s().p("A36X5QhMhgAAiZQAAitBsi1QBeieCtinQDQjIHGk2ICEhdQAmg1BSjhQoEGTkCAAQi7AAheiUQhPh+AAjIQAAjkCqjzQCcjcEHjBQD5izEWhvQEZhtDZAAQGuBGAACEQnGOehJB+QCPhhEuibQFli+DljQQAsgjEIjxQA0gpA4AAQBeAAAABzQAAAuhzCWIihC1QmoFdj2CKQowEzhyBXIgcAYQi8CHhYCSIj/H+QiYE/hsCtQhZCHhvBMQiBBbiMAAQiTAAhShqgAxRN1IiYDWQg+B4AABmIASAYQDkAAFXsjQjuC2iJChgAjlzrQjhBVjQCQQjgCViACqQiTC8gDCsIgGBBQAAB4BPAAQEOAANNsjQBlhyBrjwIAQgSIhVgGQikAAjkBYg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160.7,-163.4,321.4,327);


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


(lib.ar5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AAAgYIAAAx");
	this.shape.setTransform(0,-101.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AAAAfIAAg9");
	this.shape_1.setTransform(0,-101);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AAAAlIAAhI");
	this.shape_2.setTransform(0,-100.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("AAAAqIAAhT");
	this.shape_3.setTransform(0,-99.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("AAAAwIAAhf");
	this.shape_4.setTransform(0,-99.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(5,1,1).p("AAAA2IAAhr");
	this.shape_5.setTransform(0,-98.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(5,1,1).p("AAAA7IAAh2");
	this.shape_6.setTransform(0,-98.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(5,1,1).p("AAABBIAAiB");
	this.shape_7.setTransform(0,-97.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(5,1,1).p("AAABHIAAiN");
	this.shape_8.setTransform(0,-96.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(5,1,1).p("AAABNIAAiZ");
	this.shape_9.setTransform(0,-96.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(5,1,1).p("AAABTIAAil");
	this.shape_10.setTransform(0,-95.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5,1,1).p("AAABYIAAiv");
	this.shape_11.setTransform(0,-95.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(5,1,1).p("AAABeIAAi7");
	this.shape_12.setTransform(0,-94.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(5,1,1).p("AAABkIAAjH");
	this.shape_13.setTransform(0,-94.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(5,1,1).p("AAABpIAAjR");
	this.shape_14.setTransform(0,-93.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(5,1,1).p("AAABvIAAjd");
	this.shape_15.setTransform(0,-92.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(5,1,1).p("AAAB1IAAjp");
	this.shape_16.setTransform(0,-92.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(5,1,1).p("AAAB7IAAj1");
	this.shape_17.setTransform(0,-91.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(5,1,1).p("AAACAIAAkA");
	this.shape_18.setTransform(0,-91.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(5,1,1).p("AAACGIAAkL");
	this.shape_19.setTransform(0,-90.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(5,1,1).p("AAACMIAAkX");
	this.shape_20.setTransform(0,-90);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(5,1,1).p("AAACSIAAkj");
	this.shape_21.setTransform(0,-89.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(5,1,1).p("AAACYIAAku");
	this.shape_22.setTransform(0,-88.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(5,1,1).p("AAACdIAAk5");
	this.shape_23.setTransform(0,-88.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(5,1,1).p("AAACjIAAlF");
	this.shape_24.setTransform(0,-87.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(5,1,1).p("AAACpIAAlR");
	this.shape_25.setTransform(0,-87.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(5,1,1).p("AAACuIAAlc");
	this.shape_26.setTransform(0,-86.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(5,1,1).p("AAAC0IAAln");
	this.shape_27.setTransform(0,-86);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(5,1,1).p("AAAC6IAAlz");
	this.shape_28.setTransform(0,-85.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(5,1,1).p("AAADAIAAl/");
	this.shape_29.setTransform(0,-84.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(5,1,1).p("AAADGIAAmL");
	this.shape_30.setTransform(0,-84.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(5,1,1).p("AAADLIAAmV");
	this.shape_31.setTransform(0,-83.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(5,1,1).p("AAADRIAAmh");
	this.shape_32.setTransform(0,-83.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(5,1,1).p("AAADXIAAmt");
	this.shape_33.setTransform(0,-82.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(5,1,1).p("AAADcIAAm3");
	this.shape_34.setTransform(0,-82);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(5,1,1).p("AAADiIAAnD");
	this.shape_35.setTransform(0,-81.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(5,1,1).p("AAADoIAAnP");
	this.shape_36.setTransform(0,-80.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(5,1,1).p("AAADuIAAnb");
	this.shape_37.setTransform(0,-80.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(5,1,1).p("AAADzIAAnl");
	this.shape_38.setTransform(0,-79.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(5,1,1).p("AAAD5IAAnx");
	this.shape_39.setTransform(0,-79.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(5,1,1).p("AAAD/IAAn9");
	this.shape_40.setTransform(0,-78.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(5,1,1).p("AAAEFIAAoJ");
	this.shape_41.setTransform(0,-78);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(5,1,1).p("AAAEKIAAoT");
	this.shape_42.setTransform(0,-77.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(5,1,1).p("AAAEQIAAof");
	this.shape_43.setTransform(0,-76.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(5,1,1).p("AAAEWIAAor");
	this.shape_44.setTransform(0,-76.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(5,1,1).p("AAAEcIAAo2");
	this.shape_45.setTransform(0,-75.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(5,1,1).p("AAAEhIAApB");
	this.shape_46.setTransform(0,-75.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(5,1,1).p("AAAEnIAApN");
	this.shape_47.setTransform(0,-74.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(5,1,1).p("AAAEtIAApZ");
	this.shape_48.setTransform(0,-74);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(5,1,1).p("AAAEzIAApk");
	this.shape_49.setTransform(0,-73.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(5,1,1).p("AAAE4IAApv");
	this.shape_50.setTransform(0,-72.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(5,1,1).p("AAAE+IAAp7");
	this.shape_51.setTransform(0,-72.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(5,1,1).p("AAAFEIAAqH");
	this.shape_52.setTransform(0,-71.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(5,1,1).p("AAAFJIAAqS");
	this.shape_53.setTransform(0,-71.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(5,1,1).p("AAAFPIAAqd");
	this.shape_54.setTransform(0,-70.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(5,1,1).p("AAAFVIAAqp");
	this.shape_55.setTransform(0,-69.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(5,1,1).p("AAAFbIAAq1");
	this.shape_56.setTransform(0,-69.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(5,1,1).p("AAAFhIAArB");
	this.shape_57.setTransform(0,-68.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(5,1,1).p("AAAFmIAArL");
	this.shape_58.setTransform(0,-68.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(5,1,1).p("AAAFsIAArX");
	this.shape_59.setTransform(0,-67.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(5,1,1).p("AAAFyIAArj");
	this.shape_60.setTransform(0,-67.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(5,1,1).p("AAAF4IAArv");
	this.shape_61.setTransform(0,-66.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(5,1,1).p("AAAF9IAAr5");
	this.shape_62.setTransform(0,-65.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(5,1,1).p("AAAGDIAAsF");
	this.shape_63.setTransform(0,-65.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(5,1,1).p("AAAGJIAAsR");
	this.shape_64.setTransform(0,-64.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(5,1,1).p("AAAGPIAAsc");
	this.shape_65.setTransform(0,-64.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(5,1,1).p("AAAGUIAAsn");
	this.shape_66.setTransform(0,-63.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(5,1,1).p("AAAGaIAAsz");
	this.shape_67.setTransform(0,-63);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(5,1,1).p("AAAGgIAAs/");
	this.shape_68.setTransform(0,-62.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(5,1,1).p("AAAGmIAAtL");
	this.shape_69.setTransform(0,-61.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(5,1,1).p("AAAGrIAAtV");
	this.shape_70.setTransform(0,-61.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(5,1,1).p("AAAGxIAAth");
	this.shape_71.setTransform(0,-60.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(5,1,1).p("AAAG3IAAtt");
	this.shape_72.setTransform(0,-60.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(5,1,1).p("AAAG9IAAt4");
	this.shape_73.setTransform(0,-59.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(5,1,1).p("AAAnBIAAOD");
	this.shape_74.setTransform(0,-59);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).wait(1));

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0.3,-103.8,1,1,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-16.8},74).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.1,-106.6,22.3,13.8);


(lib.ar4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-48.7,-31.5,1,1,-17.5,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-94.4,guide:{path:[-47.9,-29.4,-30.4,37.2,47,28.6]}},119).wait(1));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AlhCZICwlVIBHAkIixFVg");
	var mask_graphics_1 = new cjs.Graphics().p("Ah+CXICvlVIBOAoIivFVg");
	var mask_graphics_2 = new cjs.Graphics().p("AiDCUICwlVIBXAtIiwFVg");
	var mask_graphics_3 = new cjs.Graphics().p("AiHCSICwlVIBfAyIivFVg");
	var mask_graphics_4 = new cjs.Graphics().p("AiLCQICvlVIBoA2IivFVg");
	var mask_graphics_5 = new cjs.Graphics().p("AiPCOICvlVIBxA6IiwFVg");
	var mask_graphics_6 = new cjs.Graphics().p("AiUCMICwlVIB5A+IiwFVg");
	var mask_graphics_7 = new cjs.Graphics().p("AiYCJICwlVICBBEIivFVg");
	var mask_graphics_8 = new cjs.Graphics().p("AicCHICvlVICKBHIivFVg");
	var mask_graphics_9 = new cjs.Graphics().p("AigCFICvlVICTBMIiwFVg");
	var mask_graphics_10 = new cjs.Graphics().p("AilCDICwlVICbBQIiwFVg");
	var mask_graphics_11 = new cjs.Graphics().p("AipCBICwlVICjBUIiwFVg");
	var mask_graphics_12 = new cjs.Graphics().p("AitB/ICvlVICsBYIivFVg");
	var mask_graphics_13 = new cjs.Graphics().p("AixB8ICwlVICzBdIiwFVg");
	var mask_graphics_14 = new cjs.Graphics().p("Ai2B6ICxlVIC8BiIixFVg");
	var mask_graphics_15 = new cjs.Graphics().p("Ai6B4ICxlVIDEBmIixFVg");
	var mask_graphics_16 = new cjs.Graphics().p("Ai+B2ICwlVIDNBqIiwFVg");
	var mask_graphics_17 = new cjs.Graphics().p("AjCB0ICwlVIDVBuIiwFVg");
	var mask_graphics_18 = new cjs.Graphics().p("AjHBxICxlVIDeB0IixFVg");
	var mask_graphics_19 = new cjs.Graphics().p("AjLBvICxlVIDmB4IixFVg");
	var mask_graphics_20 = new cjs.Graphics().p("AjPBtICwlVIDvB8IiwFVg");
	var mask_graphics_21 = new cjs.Graphics().p("AjTBrICwlVID3CAIiwFVg");
	var mask_graphics_22 = new cjs.Graphics().p("AjYBpICxlVIEACEIixFVg");
	var mask_graphics_23 = new cjs.Graphics().p("AjcBmICxlVIEICJIiwFVg");
	var mask_graphics_24 = new cjs.Graphics().p("AjgBkICwlVIERCOIiwFVg");
	var mask_graphics_25 = new cjs.Graphics().p("AjkBiICwlVIEaCSIixFVg");
	var mask_graphics_26 = new cjs.Graphics().p("AjpBgICxlVIEiCWIixFVg");
	var mask_graphics_27 = new cjs.Graphics().p("AjtBeICxlVIEqCaIiwFVg");
	var mask_graphics_28 = new cjs.Graphics().p("AjxBbICwlVIEzCgIiwFVg");
	var mask_graphics_29 = new cjs.Graphics().p("Aj1BZICwlVIE8CkIixFVg");
	var mask_graphics_30 = new cjs.Graphics().p("Aj6BXICxlVIFECoIixFVg");
	var mask_graphics_31 = new cjs.Graphics().p("Aj+BVICxlVIFMCsIixFVg");
	var mask_graphics_32 = new cjs.Graphics().p("AkCBTICwlVIFVCwIiwFVg");
	var mask_graphics_33 = new cjs.Graphics().p("AkGBQICwlVIFdC1IiwFVg");
	var mask_graphics_34 = new cjs.Graphics().p("AkLBOICxlVIFmC6IixFVg");
	var mask_graphics_35 = new cjs.Graphics().p("AkPBMICxlVIFuC+IixFVg");
	var mask_graphics_36 = new cjs.Graphics().p("AkTBKICwlVIF3DCIiwFVg");
	var mask_graphics_37 = new cjs.Graphics().p("AkXBIICwlVIF/DGIiwFVg");
	var mask_graphics_38 = new cjs.Graphics().p("AkcBFICxlVIGIDMIixFVg");
	var mask_graphics_39 = new cjs.Graphics().p("AkgBDICxlVIGQDQIiwFVg");
	var mask_graphics_40 = new cjs.Graphics().p("AkkBBICwlVIGZDUIiwFVg");
	var mask_graphics_41 = new cjs.Graphics().p("AkoA/ICwlVIGiDYIixFVg");
	var mask_graphics_42 = new cjs.Graphics().p("AktA9ICxlVIGqDcIixFVg");
	var mask_graphics_43 = new cjs.Graphics().p("AkxA6ICxlVIGyDhIiwFVg");
	var mask_graphics_44 = new cjs.Graphics().p("Ak1A4ICwlVIG7DmIiwFVg");
	var mask_graphics_45 = new cjs.Graphics().p("Ak5A2ICwlVIHEDqIixFVg");
	var mask_graphics_46 = new cjs.Graphics().p("Ak+A0ICxlVIHMDuIixFVg");
	var mask_graphics_47 = new cjs.Graphics().p("AlCAyICxlVIHUDyIixFVg");
	var mask_graphics_48 = new cjs.Graphics().p("AlGAvICwlVIHdD4IiwFVg");
	var mask_graphics_49 = new cjs.Graphics().p("AlKAtICwlVIHlD8IiwFVg");
	var mask_graphics_50 = new cjs.Graphics().p("AlPArICxlVIHuEAIixFVg");
	var mask_graphics_51 = new cjs.Graphics().p("AlTApICxlVIH2EEIixFVg");
	var mask_graphics_52 = new cjs.Graphics().p("AlXAnICwlVIH/EIIiwFVg");
	var mask_graphics_53 = new cjs.Graphics().p("AlbAkICwlVIIHENIiwFWg");
	var mask_graphics_54 = new cjs.Graphics().p("AlgAiICxlVIIQESIixFVg");
	var mask_graphics_55 = new cjs.Graphics().p("AlkAgICxlVIIYEWIixFVg");
	var mask_graphics_56 = new cjs.Graphics().p("AloAeICwlVIIhEaIiwFVg");
	var mask_graphics_57 = new cjs.Graphics().p("AlsAcICwlVIIqEeIixFVg");
	var mask_graphics_58 = new cjs.Graphics().p("AlxAZICxlVIIyEjIixFVg");
	var mask_graphics_59 = new cjs.Graphics().p("Al1AXICwlVII7EoIiwFVg");
	var mask_graphics_60 = new cjs.Graphics().p("Al6AVICxlVIJDEsIiwFVg");
	var mask_graphics_61 = new cjs.Graphics().p("Al+ATICwlVIJNEwIixFVg");
	var mask_graphics_62 = new cjs.Graphics().p("AmCARICwlVIJVE1IiwFVg");
	var mask_graphics_63 = new cjs.Graphics().p("AmHAOICxlVIJdE6IiwFVg");
	var mask_graphics_64 = new cjs.Graphics().p("AmLAMICxlVIJmE+IixFVg");
	var mask_graphics_65 = new cjs.Graphics().p("AmPAKICwlVIJvFCIixFVg");
	var mask_graphics_66 = new cjs.Graphics().p("AmTAIICwlVIJ3FGIiwFVg");
	var mask_graphics_67 = new cjs.Graphics().p("AmYAGICxlVIKAFKIixFVg");
	var mask_graphics_68 = new cjs.Graphics().p("AmcADICxlVIKIFQIixFVg");
	var mask_graphics_69 = new cjs.Graphics().p("AmgABICwlVIKRFUIiwFVg");
	var mask_graphics_70 = new cjs.Graphics().p("AmkAAICwlWIKZFXIiwFWg");
	var mask_graphics_71 = new cjs.Graphics().p("AmpgCICxlWIKiFbIixFWg");
	var mask_graphics_72 = new cjs.Graphics().p("AmtgEICxlWIKqFgIixFWg");
	var mask_graphics_73 = new cjs.Graphics().p("AmxgHICwlWIKzFlIiwFWg");
	var mask_graphics_74 = new cjs.Graphics().p("Am1gJICwlWIK7FpIiwFWg");
	var mask_graphics_75 = new cjs.Graphics().p("Am6gLICxlWILEFtIixFWg");
	var mask_graphics_76 = new cjs.Graphics().p("Am+gNICxlWILMFxIixFWg");
	var mask_graphics_77 = new cjs.Graphics().p("AnCgPICwlWILVF1IixFWg");
	var mask_graphics_78 = new cjs.Graphics().p("AnGgSICwlWILdF7IiwFWg");
	var mask_graphics_79 = new cjs.Graphics().p("AnLgUICxlWILlF/IiwFWg");
	var mask_graphics_80 = new cjs.Graphics().p("AnPgWICxlWILuGDIixFWg");
	var mask_graphics_81 = new cjs.Graphics().p("AnTgYICwlWIL3GHIixFWg");
	var mask_graphics_82 = new cjs.Graphics().p("AnXgaICwlWIL/GMIiwFWg");
	var mask_graphics_83 = new cjs.Graphics().p("AncgdICxlWIMHGRIiwFWg");
	var mask_graphics_84 = new cjs.Graphics().p("AnggfICxlWIMQGVIixFWg");
	var mask_graphics_85 = new cjs.Graphics().p("AnkghICwlWIMZGZIiwFWg");
	var mask_graphics_86 = new cjs.Graphics().p("AnogjICwlWIMhGdIiwFWg");
	var mask_graphics_87 = new cjs.Graphics().p("AntglICxlWIMqGhIixFWg");
	var mask_graphics_88 = new cjs.Graphics().p("AnxgoICxlWIMyGnIixFWg");
	var mask_graphics_89 = new cjs.Graphics().p("An1gqICwlWIM7GrIiwFWg");
	var mask_graphics_90 = new cjs.Graphics().p("An5gsICwlWINDGvIiwFWg");
	var mask_graphics_91 = new cjs.Graphics().p("An+guICxlWINMGzIixFWg");
	var mask_graphics_92 = new cjs.Graphics().p("AoCgwICxlWINUG4IixFWg");
	var mask_graphics_93 = new cjs.Graphics().p("AoGgyICwlWINdG7IixFWg");
	var mask_graphics_94 = new cjs.Graphics().p("AoKg1ICwlWINlHBIiwFWg");
	var mask_graphics_95 = new cjs.Graphics().p("AoPg3ICxlWINtHFIiwFWg");
	var mask_graphics_96 = new cjs.Graphics().p("AoTg5ICxlWIN2HJIixFWg");
	var mask_graphics_97 = new cjs.Graphics().p("AoXg7ICwlWIN/HNIixFWg");
	var mask_graphics_98 = new cjs.Graphics().p("Aobg9ICwlWIOHHRIiwFWg");
	var mask_graphics_99 = new cjs.Graphics().p("AoghAICxlWIOPHXIiwFWg");
	var mask_graphics_100 = new cjs.Graphics().p("AokhCICxlWIOYHbIixFWg");
	var mask_graphics_101 = new cjs.Graphics().p("AoohEICwlWIOhHfIixFWg");
	var mask_graphics_102 = new cjs.Graphics().p("AoshGICwlWIOpHjIiwFWg");
	var mask_graphics_103 = new cjs.Graphics().p("AoxhIICxlWIOxHoIiwFWg");
	var mask_graphics_104 = new cjs.Graphics().p("Ao1hLICxlWIO6HtIixFWg");
	var mask_graphics_105 = new cjs.Graphics().p("Ao5hNICwlWIPDHxIiwFWg");
	var mask_graphics_106 = new cjs.Graphics().p("Ao9hPICwlWIPLH1IiwFWg");
	var mask_graphics_107 = new cjs.Graphics().p("ApChRICxlWIPUH6IixFWg");
	var mask_graphics_108 = new cjs.Graphics().p("ApGhTICxlWIPcH9IixFWg");
	var mask_graphics_109 = new cjs.Graphics().p("ApKhWICwlWIPlIDIiwFWg");
	var mask_graphics_110 = new cjs.Graphics().p("ApOhYICwlWIPtIHIiwFWg");
	var mask_graphics_111 = new cjs.Graphics().p("ApThaICxlWIP2ILIixFWg");
	var mask_graphics_112 = new cjs.Graphics().p("ApXhcICxlWIP+IPIixFWg");
	var mask_graphics_113 = new cjs.Graphics().p("ApbheICwlWIQHIUIixFWg");
	var mask_graphics_114 = new cjs.Graphics().p("ApfhhICwlWIQPIZIiwFWg");
	var mask_graphics_115 = new cjs.Graphics().p("ApkhjICxlWIQXIdIiwFWg");
	var mask_graphics_116 = new cjs.Graphics().p("ApohlICxlWIQgIhIixFWg");
	var mask_graphics_117 = new cjs.Graphics().p("ApshnICwlWIQpIlIixFWg");
	var mask_graphics_118 = new cjs.Graphics().p("ApwhpICwlWIQxIpIiwFWg");
	var mask_graphics_119 = new cjs.Graphics().p("Ap1hsICxlWIQ6IvIixFWg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-35.4,y:-17.5}).wait(1).to({graphics:mask_graphics_1,x:-58.1,y:-17.2}).wait(1).to({graphics:mask_graphics_2,x:-57.7,y:-17}).wait(1).to({graphics:mask_graphics_3,x:-57.2,y:-16.8}).wait(1).to({graphics:mask_graphics_4,x:-56.8,y:-16.6}).wait(1).to({graphics:mask_graphics_5,x:-56.4,y:-16.3}).wait(1).to({graphics:mask_graphics_6,x:-56,y:-16.1}).wait(1).to({graphics:mask_graphics_7,x:-55.5,y:-15.9}).wait(1).to({graphics:mask_graphics_8,x:-55.1,y:-15.7}).wait(1).to({graphics:mask_graphics_9,x:-54.7,y:-15.5}).wait(1).to({graphics:mask_graphics_10,x:-54.3,y:-15.2}).wait(1).to({graphics:mask_graphics_11,x:-53.8,y:-15}).wait(1).to({graphics:mask_graphics_12,x:-53.4,y:-14.8}).wait(1).to({graphics:mask_graphics_13,x:-53,y:-14.6}).wait(1).to({graphics:mask_graphics_14,x:-52.6,y:-14.4}).wait(1).to({graphics:mask_graphics_15,x:-52.1,y:-14.1}).wait(1).to({graphics:mask_graphics_16,x:-51.7,y:-13.9}).wait(1).to({graphics:mask_graphics_17,x:-51.3,y:-13.7}).wait(1).to({graphics:mask_graphics_18,x:-50.9,y:-13.5}).wait(1).to({graphics:mask_graphics_19,x:-50.4,y:-13.3}).wait(1).to({graphics:mask_graphics_20,x:-50,y:-13}).wait(1).to({graphics:mask_graphics_21,x:-49.6,y:-12.8}).wait(1).to({graphics:mask_graphics_22,x:-49.2,y:-12.6}).wait(1).to({graphics:mask_graphics_23,x:-48.7,y:-12.4}).wait(1).to({graphics:mask_graphics_24,x:-48.3,y:-12.2}).wait(1).to({graphics:mask_graphics_25,x:-47.9,y:-11.9}).wait(1).to({graphics:mask_graphics_26,x:-47.5,y:-11.7}).wait(1).to({graphics:mask_graphics_27,x:-47,y:-11.5}).wait(1).to({graphics:mask_graphics_28,x:-46.6,y:-11.3}).wait(1).to({graphics:mask_graphics_29,x:-46.2,y:-11.1}).wait(1).to({graphics:mask_graphics_30,x:-45.8,y:-10.8}).wait(1).to({graphics:mask_graphics_31,x:-45.3,y:-10.6}).wait(1).to({graphics:mask_graphics_32,x:-44.9,y:-10.4}).wait(1).to({graphics:mask_graphics_33,x:-44.5,y:-10.2}).wait(1).to({graphics:mask_graphics_34,x:-44.1,y:-10}).wait(1).to({graphics:mask_graphics_35,x:-43.6,y:-9.7}).wait(1).to({graphics:mask_graphics_36,x:-43.2,y:-9.5}).wait(1).to({graphics:mask_graphics_37,x:-42.8,y:-9.3}).wait(1).to({graphics:mask_graphics_38,x:-42.4,y:-9.1}).wait(1).to({graphics:mask_graphics_39,x:-41.9,y:-8.9}).wait(1).to({graphics:mask_graphics_40,x:-41.5,y:-8.6}).wait(1).to({graphics:mask_graphics_41,x:-41.1,y:-8.4}).wait(1).to({graphics:mask_graphics_42,x:-40.7,y:-8.2}).wait(1).to({graphics:mask_graphics_43,x:-40.2,y:-8}).wait(1).to({graphics:mask_graphics_44,x:-39.8,y:-7.8}).wait(1).to({graphics:mask_graphics_45,x:-39.4,y:-7.5}).wait(1).to({graphics:mask_graphics_46,x:-39,y:-7.3}).wait(1).to({graphics:mask_graphics_47,x:-38.5,y:-7.1}).wait(1).to({graphics:mask_graphics_48,x:-38.1,y:-6.9}).wait(1).to({graphics:mask_graphics_49,x:-37.7,y:-6.7}).wait(1).to({graphics:mask_graphics_50,x:-37.3,y:-6.5}).wait(1).to({graphics:mask_graphics_51,x:-36.8,y:-6.2}).wait(1).to({graphics:mask_graphics_52,x:-36.4,y:-6}).wait(1).to({graphics:mask_graphics_53,x:-36,y:-5.8}).wait(1).to({graphics:mask_graphics_54,x:-35.6,y:-5.6}).wait(1).to({graphics:mask_graphics_55,x:-35.1,y:-5.4}).wait(1).to({graphics:mask_graphics_56,x:-34.7,y:-5.1}).wait(1).to({graphics:mask_graphics_57,x:-34.3,y:-4.9}).wait(1).to({graphics:mask_graphics_58,x:-33.9,y:-4.7}).wait(1).to({graphics:mask_graphics_59,x:-33.4,y:-4.5}).wait(1).to({graphics:mask_graphics_60,x:-33,y:-4.3}).wait(1).to({graphics:mask_graphics_61,x:-32.6,y:-4.1}).wait(1).to({graphics:mask_graphics_62,x:-32.2,y:-3.8}).wait(1).to({graphics:mask_graphics_63,x:-31.7,y:-3.6}).wait(1).to({graphics:mask_graphics_64,x:-31.3,y:-3.4}).wait(1).to({graphics:mask_graphics_65,x:-30.9,y:-3.2}).wait(1).to({graphics:mask_graphics_66,x:-30.5,y:-3}).wait(1).to({graphics:mask_graphics_67,x:-30,y:-2.7}).wait(1).to({graphics:mask_graphics_68,x:-29.6,y:-2.5}).wait(1).to({graphics:mask_graphics_69,x:-29.2,y:-2.3}).wait(1).to({graphics:mask_graphics_70,x:-28.8,y:-2.1}).wait(1).to({graphics:mask_graphics_71,x:-28.3,y:-1.9}).wait(1).to({graphics:mask_graphics_72,x:-27.9,y:-1.6}).wait(1).to({graphics:mask_graphics_73,x:-27.5,y:-1.4}).wait(1).to({graphics:mask_graphics_74,x:-27.1,y:-1.2}).wait(1).to({graphics:mask_graphics_75,x:-26.6,y:-1}).wait(1).to({graphics:mask_graphics_76,x:-26.2,y:-0.8}).wait(1).to({graphics:mask_graphics_77,x:-25.8,y:-0.5}).wait(1).to({graphics:mask_graphics_78,x:-25.4,y:-0.3}).wait(1).to({graphics:mask_graphics_79,x:-24.9,y:-0.1}).wait(1).to({graphics:mask_graphics_80,x:-24.5,y:0.1}).wait(1).to({graphics:mask_graphics_81,x:-24.1,y:0.3}).wait(1).to({graphics:mask_graphics_82,x:-23.7,y:0.6}).wait(1).to({graphics:mask_graphics_83,x:-23.2,y:0.8}).wait(1).to({graphics:mask_graphics_84,x:-22.8,y:1}).wait(1).to({graphics:mask_graphics_85,x:-22.4,y:1.2}).wait(1).to({graphics:mask_graphics_86,x:-22,y:1.4}).wait(1).to({graphics:mask_graphics_87,x:-21.5,y:1.7}).wait(1).to({graphics:mask_graphics_88,x:-21.1,y:1.9}).wait(1).to({graphics:mask_graphics_89,x:-20.7,y:2.1}).wait(1).to({graphics:mask_graphics_90,x:-20.3,y:2.3}).wait(1).to({graphics:mask_graphics_91,x:-19.8,y:2.5}).wait(1).to({graphics:mask_graphics_92,x:-19.4,y:2.8}).wait(1).to({graphics:mask_graphics_93,x:-19,y:3}).wait(1).to({graphics:mask_graphics_94,x:-18.6,y:3.2}).wait(1).to({graphics:mask_graphics_95,x:-18.1,y:3.4}).wait(1).to({graphics:mask_graphics_96,x:-17.7,y:3.6}).wait(1).to({graphics:mask_graphics_97,x:-17.3,y:3.9}).wait(1).to({graphics:mask_graphics_98,x:-16.9,y:4.1}).wait(1).to({graphics:mask_graphics_99,x:-16.4,y:4.3}).wait(1).to({graphics:mask_graphics_100,x:-16,y:4.5}).wait(1).to({graphics:mask_graphics_101,x:-15.6,y:4.7}).wait(1).to({graphics:mask_graphics_102,x:-15.2,y:5}).wait(1).to({graphics:mask_graphics_103,x:-14.7,y:5.2}).wait(1).to({graphics:mask_graphics_104,x:-14.3,y:5.4}).wait(1).to({graphics:mask_graphics_105,x:-13.9,y:5.6}).wait(1).to({graphics:mask_graphics_106,x:-13.5,y:5.8}).wait(1).to({graphics:mask_graphics_107,x:-13,y:6.1}).wait(1).to({graphics:mask_graphics_108,x:-12.6,y:6.3}).wait(1).to({graphics:mask_graphics_109,x:-12.2,y:6.5}).wait(1).to({graphics:mask_graphics_110,x:-11.8,y:6.7}).wait(1).to({graphics:mask_graphics_111,x:-11.3,y:6.9}).wait(1).to({graphics:mask_graphics_112,x:-10.9,y:7.1}).wait(1).to({graphics:mask_graphics_113,x:-10.5,y:7.4}).wait(1).to({graphics:mask_graphics_114,x:-10.1,y:7.6}).wait(1).to({graphics:mask_graphics_115,x:-9.6,y:7.8}).wait(1).to({graphics:mask_graphics_116,x:-9.2,y:8}).wait(1).to({graphics:mask_graphics_117,x:-8.8,y:8.2}).wait(1).to({graphics:mask_graphics_118,x:-8.4,y:8.5}).wait(1).to({graphics:mask_graphics_119,x:-7.9,y:8.7}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AnfkmQCwKeMPhb");

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.3,-37.3,21.2,38.8);


(lib.ar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-26,18.1,1,1,-105.3,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,regY:0,rotation:-150.2,guide:{path:[-25.9,18.2,17.1,5.8,33.1,-26.9]}},89).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AimABIBKg2IBvCSIhJA4g");
	var mask_graphics_1 = new cjs.Graphics().p("AhfgqIBQg9IBvCSIhQA9g");
	var mask_graphics_2 = new cjs.Graphics().p("AhigoIBWhCIBvCTIhWBBg");
	var mask_graphics_3 = new cjs.Graphics().p("AhlgmIBchGIBwCTIheBGg");
	var mask_graphics_4 = new cjs.Graphics().p("AhogjIBjhLIBuCSIhjBLg");
	var mask_graphics_5 = new cjs.Graphics().p("AhsghIBqhQIBvCTIhqBQg");
	var mask_graphics_6 = new cjs.Graphics().p("AhvgfIBvhUIBwCSIhwBVg");
	var mask_graphics_7 = new cjs.Graphics().p("AhygcIB1hZIBwCSIh1BZg");
	var mask_graphics_8 = new cjs.Graphics().p("Ah1gaIB7heIBwCTIh7Beg");
	var mask_graphics_9 = new cjs.Graphics().p("Ah4gXICBhjIBwCSIiBBjg");
	var mask_graphics_10 = new cjs.Graphics().p("Ah7gVICHhnIBwCSIiHBog");
	var mask_graphics_11 = new cjs.Graphics().p("Ah+gTICOhsIBvCTIiOBsg");
	var mask_graphics_12 = new cjs.Graphics().p("AiBgQICThxIBxCSIiVBxg");
	var mask_graphics_13 = new cjs.Graphics().p("AiFgOICbh2IBwCTIibB2g");
	var mask_graphics_14 = new cjs.Graphics().p("AiIgLIChh7IBwCSIihB7g");
	var mask_graphics_15 = new cjs.Graphics().p("AiLgJICnh/IBwCSIinB/g");
	var mask_graphics_16 = new cjs.Graphics().p("AiOgHICtiEIBwCTIitCEg");
	var mask_graphics_17 = new cjs.Graphics().p("AiRgEICziJIBwCTIizCIg");
	var mask_graphics_18 = new cjs.Graphics().p("AiUgCIC5iOIBwCTIi5COg");
	var mask_graphics_19 = new cjs.Graphics().p("AiXAAIC/iSIBxCTIjBCSg");
	var mask_graphics_20 = new cjs.Graphics().p("AiaACIDFiWIBwCTIjGCWg");
	var mask_graphics_21 = new cjs.Graphics().p("AieAEIDNibIBwCUIjNCbg");
	var mask_graphics_22 = new cjs.Graphics().p("AihAHIDTigIBwCTIjTCgg");
	var mask_graphics_23 = new cjs.Graphics().p("AikAJIDZikIBwCTIjZClg");
	var mask_graphics_24 = new cjs.Graphics().p("AinALIDfipIBwCUIjfCpg");
	var mask_graphics_25 = new cjs.Graphics().p("AiqAOIDliuIBwCTIjlCug");
	var mask_graphics_26 = new cjs.Graphics().p("AitAQIDrizIBwCUIjrCzg");
	var mask_graphics_27 = new cjs.Graphics().p("AiwASIDyi3IBvCUIjyC3g");
	var mask_graphics_28 = new cjs.Graphics().p("AizAUID4i7IBwCUIj5C7g");
	var mask_graphics_29 = new cjs.Graphics().p("Ai3AXID/jBIBwCUIj/DAg");
	var mask_graphics_30 = new cjs.Graphics().p("Ai6AZIEFjFIBwCTIkFDGg");
	var mask_graphics_31 = new cjs.Graphics().p("Ai9AcIELjKIBwCTIkLDKg");
	var mask_graphics_32 = new cjs.Graphics().p("AjAAeIERjPIBwCUIkRDPg");
	var mask_graphics_33 = new cjs.Graphics().p("AjDAgIEXjTIBwCUIkXDTg");
	var mask_graphics_34 = new cjs.Graphics().p("AjGAjIEejZIBvCUIkeDYg");
	var mask_graphics_35 = new cjs.Graphics().p("AjJAlIEjjdIBxCUIklDdg");
	var mask_graphics_36 = new cjs.Graphics().p("AjNAoIErjiIBwCTIkrDig");
	var mask_graphics_37 = new cjs.Graphics().p("AjQAqIExjmIBwCTIkxDmg");
	var mask_graphics_38 = new cjs.Graphics().p("AjTAsIE3jrIBwCTIk3Dsg");
	var mask_graphics_39 = new cjs.Graphics().p("AjWAvIE9jwIBwCTIk9Dwg");
	var mask_graphics_40 = new cjs.Graphics().p("AjZAxIFDj1IBwCUIlDD1g");
	var mask_graphics_41 = new cjs.Graphics().p("AjcA0IFJj6IBwCTIlJD6g");
	var mask_graphics_42 = new cjs.Graphics().p("AjfA2IFPj/IBxCUIlRD+g");
	var mask_graphics_43 = new cjs.Graphics().p("AjiA4IFVkDIBwCUIlWEDg");
	var mask_graphics_44 = new cjs.Graphics().p("AjmA7IFdkIIBwCTIldEIg");
	var mask_graphics_45 = new cjs.Graphics().p("AjpA9IFjkNIBwCUIljEMg");
	var mask_graphics_46 = new cjs.Graphics().p("AjsA/IFpkRIBwCUIlpERg");
	var mask_graphics_47 = new cjs.Graphics().p("AjvBCIFvkWIBwCTIlvEWg");
	var mask_graphics_48 = new cjs.Graphics().p("AjzBEIF2kaIBwCTIl1Eag");
	var mask_graphics_49 = new cjs.Graphics().p("Aj2BHIF9kgIBvCUIl7Efg");
	var mask_graphics_50 = new cjs.Graphics().p("Aj5BJIGDklIBwCUImDEkg");
	var mask_graphics_51 = new cjs.Graphics().p("Aj8BLIGJkpIBwCUImJEpg");
	var mask_graphics_52 = new cjs.Graphics().p("Aj/BOIGPkuIBwCTImPEug");
	var mask_graphics_53 = new cjs.Graphics().p("AkCBQIGVkyIBwCTImVEyg");
	var mask_graphics_54 = new cjs.Graphics().p("AkFBTIGbk4IBwCTImbE4g");
	var mask_graphics_55 = new cjs.Graphics().p("AkIBVIGhk8IBwCTImhE8g");
	var mask_graphics_56 = new cjs.Graphics().p("AkMBXIGplBIBwCUImoFBg");
	var mask_graphics_57 = new cjs.Graphics().p("AkPBaIGulGIBxCUImuFFg");
	var mask_graphics_58 = new cjs.Graphics().p("AkSBcIG1lLIBwCUIm1FKg");
	var mask_graphics_59 = new cjs.Graphics().p("AkVBeIG7lPIBwCUIm7FPg");
	var mask_graphics_60 = new cjs.Graphics().p("AkYBhIHBlUIBwCTInBFUg");
	var mask_graphics_61 = new cjs.Graphics().p("AkbBjIHHlZIBwCUInHFZg");
	var mask_graphics_62 = new cjs.Graphics().p("AkeBmIHNleIBwCTInNFeg");
	var mask_graphics_63 = new cjs.Graphics().p("AkiBoIHUliIBxCTInUFig");
	var mask_graphics_64 = new cjs.Graphics().p("AklBqIHalmIBxCTInaFng");
	var mask_graphics_65 = new cjs.Graphics().p("AkoBsIHhlrIBwCUInhFrg");
	var mask_graphics_66 = new cjs.Graphics().p("AkrBvIHnlwIBwCTInnFwg");
	var mask_graphics_67 = new cjs.Graphics().p("AkuBxIHtl1IBwCUIntF1g");
	var mask_graphics_68 = new cjs.Graphics().p("AkxBzIHzl5IBwCTInzF6g");
	var mask_graphics_69 = new cjs.Graphics().p("Ak0B2IH5l+IBwCTIn5F/g");
	var mask_graphics_70 = new cjs.Graphics().p("Ak3B4IH/mDIBwCTIn/GEg");
	var mask_graphics_71 = new cjs.Graphics().p("Ak7B7IIGmIIBwCTIoFGIg");
	var mask_graphics_72 = new cjs.Graphics().p("Ak+B9IINmNIBvCUIoLGNg");
	var mask_graphics_73 = new cjs.Graphics().p("AlBB/IITmRIBwCUIoTGRg");
	var mask_graphics_74 = new cjs.Graphics().p("AlECCIIZmXIBwCUIoZGXg");
	var mask_graphics_75 = new cjs.Graphics().p("AlHCEIIfmbIBwCUIofGbg");
	var mask_graphics_76 = new cjs.Graphics().p("AlKCHIIlmgIBwCTIolGgg");
	var mask_graphics_77 = new cjs.Graphics().p("AlNCJIIrmkIBwCTIorGlg");
	var mask_graphics_78 = new cjs.Graphics().p("AlQCLIIxmpIBwCTIoxGqg");
	var mask_graphics_79 = new cjs.Graphics().p("AlUCOII5muIBvCTIo3Gug");
	var mask_graphics_80 = new cjs.Graphics().p("AlXCQII+mzIBxCUIo+Gzg");
	var mask_graphics_81 = new cjs.Graphics().p("AlaCSIJFm3IBwCUIpFG3g");
	var mask_graphics_82 = new cjs.Graphics().p("AldCVIJLm8IBwCTIpLG8g");
	var mask_graphics_83 = new cjs.Graphics().p("AlgCXIJRnBIBwCUIpRHBg");
	var mask_graphics_84 = new cjs.Graphics().p("AljCZIJXnFIBwCTIpXHGg");
	var mask_graphics_85 = new cjs.Graphics().p("AlmCcIJdnKIBwCTIpdHKg");
	var mask_graphics_86 = new cjs.Graphics().p("AlpCeIJjnPIBwCUIpjHPg");
	var mask_graphics_87 = new cjs.Graphics().p("AltChIJqnUIBxCTIpqHUg");
	var mask_graphics_88 = new cjs.Graphics().p("AlwCjIJxnZIBvCUIpvHYg");
	var mask_graphics_89 = new cjs.Graphics().p("AlzCmIJ3neIBwCTIp3Heg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-16.7,y:14.9}).wait(1).to({graphics:mask_graphics_1,x:-23.8,y:19.4}).wait(1).to({graphics:mask_graphics_2,x:-23.5,y:19.2}).wait(1).to({graphics:mask_graphics_3,x:-23.1,y:18.9}).wait(1).to({graphics:mask_graphics_4,x:-22.8,y:18.7}).wait(1).to({graphics:mask_graphics_5,x:-22.5,y:18.4}).wait(1).to({graphics:mask_graphics_6,x:-22.2,y:18.2}).wait(1).to({graphics:mask_graphics_7,x:-21.9,y:18}).wait(1).to({graphics:mask_graphics_8,x:-21.6,y:17.7}).wait(1).to({graphics:mask_graphics_9,x:-21.3,y:17.5}).wait(1).to({graphics:mask_graphics_10,x:-21,y:17.2}).wait(1).to({graphics:mask_graphics_11,x:-20.6,y:17}).wait(1).to({graphics:mask_graphics_12,x:-20.3,y:16.7}).wait(1).to({graphics:mask_graphics_13,x:-20,y:16.5}).wait(1).to({graphics:mask_graphics_14,x:-19.7,y:16.3}).wait(1).to({graphics:mask_graphics_15,x:-19.4,y:16}).wait(1).to({graphics:mask_graphics_16,x:-19.1,y:15.8}).wait(1).to({graphics:mask_graphics_17,x:-18.8,y:15.6}).wait(1).to({graphics:mask_graphics_18,x:-18.5,y:15.3}).wait(1).to({graphics:mask_graphics_19,x:-18.1,y:15.1}).wait(1).to({graphics:mask_graphics_20,x:-17.8,y:14.8}).wait(1).to({graphics:mask_graphics_21,x:-17.5,y:14.6}).wait(1).to({graphics:mask_graphics_22,x:-17.2,y:14.4}).wait(1).to({graphics:mask_graphics_23,x:-16.9,y:14.1}).wait(1).to({graphics:mask_graphics_24,x:-16.6,y:13.9}).wait(1).to({graphics:mask_graphics_25,x:-16.3,y:13.6}).wait(1).to({graphics:mask_graphics_26,x:-16,y:13.4}).wait(1).to({graphics:mask_graphics_27,x:-15.6,y:13.1}).wait(1).to({graphics:mask_graphics_28,x:-15.3,y:12.9}).wait(1).to({graphics:mask_graphics_29,x:-15,y:12.7}).wait(1).to({graphics:mask_graphics_30,x:-14.7,y:12.4}).wait(1).to({graphics:mask_graphics_31,x:-14.4,y:12.2}).wait(1).to({graphics:mask_graphics_32,x:-14.1,y:11.9}).wait(1).to({graphics:mask_graphics_33,x:-13.8,y:11.7}).wait(1).to({graphics:mask_graphics_34,x:-13.4,y:11.5}).wait(1).to({graphics:mask_graphics_35,x:-13.1,y:11.2}).wait(1).to({graphics:mask_graphics_36,x:-12.8,y:11}).wait(1).to({graphics:mask_graphics_37,x:-12.5,y:10.8}).wait(1).to({graphics:mask_graphics_38,x:-12.2,y:10.5}).wait(1).to({graphics:mask_graphics_39,x:-11.9,y:10.3}).wait(1).to({graphics:mask_graphics_40,x:-11.6,y:10}).wait(1).to({graphics:mask_graphics_41,x:-11.3,y:9.8}).wait(1).to({graphics:mask_graphics_42,x:-10.9,y:9.6}).wait(1).to({graphics:mask_graphics_43,x:-10.6,y:9.3}).wait(1).to({graphics:mask_graphics_44,x:-10.3,y:9.1}).wait(1).to({graphics:mask_graphics_45,x:-10,y:8.8}).wait(1).to({graphics:mask_graphics_46,x:-9.7,y:8.6}).wait(1).to({graphics:mask_graphics_47,x:-9.4,y:8.3}).wait(1).to({graphics:mask_graphics_48,x:-9.1,y:8.1}).wait(1).to({graphics:mask_graphics_49,x:-8.8,y:7.9}).wait(1).to({graphics:mask_graphics_50,x:-8.5,y:7.6}).wait(1).to({graphics:mask_graphics_51,x:-8.2,y:7.4}).wait(1).to({graphics:mask_graphics_52,x:-7.8,y:7.1}).wait(1).to({graphics:mask_graphics_53,x:-7.5,y:6.9}).wait(1).to({graphics:mask_graphics_54,x:-7.2,y:6.7}).wait(1).to({graphics:mask_graphics_55,x:-6.9,y:6.4}).wait(1).to({graphics:mask_graphics_56,x:-6.6,y:6.2}).wait(1).to({graphics:mask_graphics_57,x:-6.3,y:6}).wait(1).to({graphics:mask_graphics_58,x:-6,y:5.7}).wait(1).to({graphics:mask_graphics_59,x:-5.7,y:5.5}).wait(1).to({graphics:mask_graphics_60,x:-5.3,y:5.2}).wait(1).to({graphics:mask_graphics_61,x:-5,y:5}).wait(1).to({graphics:mask_graphics_62,x:-4.7,y:4.8}).wait(1).to({graphics:mask_graphics_63,x:-4.4,y:4.5}).wait(1).to({graphics:mask_graphics_64,x:-4.1,y:4.3}).wait(1).to({graphics:mask_graphics_65,x:-3.8,y:4}).wait(1).to({graphics:mask_graphics_66,x:-3.5,y:3.8}).wait(1).to({graphics:mask_graphics_67,x:-3.1,y:3.5}).wait(1).to({graphics:mask_graphics_68,x:-2.8,y:3.3}).wait(1).to({graphics:mask_graphics_69,x:-2.5,y:3.1}).wait(1).to({graphics:mask_graphics_70,x:-2.2,y:2.8}).wait(1).to({graphics:mask_graphics_71,x:-1.9,y:2.6}).wait(1).to({graphics:mask_graphics_72,x:-1.6,y:2.3}).wait(1).to({graphics:mask_graphics_73,x:-1.3,y:2.1}).wait(1).to({graphics:mask_graphics_74,x:-1,y:1.9}).wait(1).to({graphics:mask_graphics_75,x:-0.6,y:1.6}).wait(1).to({graphics:mask_graphics_76,x:-0.3,y:1.4}).wait(1).to({graphics:mask_graphics_77,x:0,y:1.2}).wait(1).to({graphics:mask_graphics_78,x:0.3,y:0.9}).wait(1).to({graphics:mask_graphics_79,x:0.6,y:0.7}).wait(1).to({graphics:mask_graphics_80,x:0.9,y:0.4}).wait(1).to({graphics:mask_graphics_81,x:1.2,y:0.2}).wait(1).to({graphics:mask_graphics_82,x:1.5,y:-0.1}).wait(1).to({graphics:mask_graphics_83,x:1.9,y:-0.3}).wait(1).to({graphics:mask_graphics_84,x:2.2,y:-0.5}).wait(1).to({graphics:mask_graphics_85,x:2.5,y:-0.8}).wait(1).to({graphics:mask_graphics_86,x:2.8,y:-1}).wait(1).to({graphics:mask_graphics_87,x:3.1,y:-1.3}).wait(1).to({graphics:mask_graphics_88,x:3.4,y:-1.5}).wait(1).to({graphics:mask_graphics_89,x:3.7,y:-1.7}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AjtEeQBTljGIjX");
	this.shape.setTransform(3.5,-4.5,1,1,-167.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.3,8.2,16.6,21.4);


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
(lib.WS_Cursive_g = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_742 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(742).call(this.frame_742).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(312.1,130);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[312,130,307.2,128,301.6,127,273.6,122.5,247.5,133.6,220.1,145.3,197.3,159.8,174.4,174.3,155.9,202.6,137.2,230.8,146.7,257.4,156.2,283.9,183.5,270.3,211,256.6,230.5,240,250,223.3,267.6,203.5,285.2,183.8,297.8,160.5,305.7,145.7,312.8,130.4]}},240).wait(15).to({startPosition:0},0).to({guide:{path:[312.9,130.5,291,180.9,277.9,207.9,264.7,234.9,257.5,250.8,250.3,266.7,246.8,274.7,238.8,292.7,228.5,314.1,214.5,343.3,199.6,369,184.8,394.5,165.9,417.1,154.6,430.8,138.6,426.5,138.5,426.4,138.3,426.4]}},150).wait(15).to({startPosition:0},0).to({guide:{path:[138.2,426.4,111,406.8,148,365.4,185.1,324,221.5,297.8,258,271.6,299.6,248.1,341.3,224.5,379.5,196,398.8,181.5,421,156.8]}},235).wait(13).to({x:414.1,y:163.8},0).to({guide:{path:[414,163.7,360.7,198.2,322.6,215,284.4,232,253.4,233.6,222.4,235.3,206.5,212.4,189,183.1,177.2,172.7,165.3,162.3,147.2,158.2,129,154.2,105.7,166,82.4,177.9,31.2,198.5,-19.9,219.1,-42.7,212.4,-64.5,206,-85.8,182]}},65).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(312,130,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},240).wait(15).to({_off:false,x:137,y:421},0).to({_off:true},150).wait(15).to({_off:false,x:420,y:157},0).to({_off:true},235).wait(79));

	// Layer 18
	this.instance_1 = new lib.ar4("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(92.3,374.7,1,1,0,138.7,-41.3,0.1,-0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(429).to({_off:false},0).wait(314));

	// Layer 15 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_455 = new cjs.Graphics().p("ACaVWIAigdIJpLSIghAdg");
	var mask_graphics_456 = new cjs.Graphics().p("AlLlUIAvgoIJoLRIgvAog");
	var mask_graphics_457 = new cjs.Graphics().p("AlSlPIA8gyIJpLRIg8Ayg");
	var mask_graphics_458 = new cjs.Graphics().p("AlYlJIBJg+IJoLRIhJA+g");
	var mask_graphics_459 = new cjs.Graphics().p("AlflDIBXhKIJoLRIhWBKg");
	var mask_graphics_460 = new cjs.Graphics().p("Almk+IBkhUIJpLQIhkBVg");
	var mask_graphics_461 = new cjs.Graphics().p("Alsk4IBxhgIJoLRIhxBgg");
	var mask_graphics_462 = new cjs.Graphics().p("AlzkyIB+hsIJpLRIh+Bsg");
	var mask_graphics_463 = new cjs.Graphics().p("Al5ktICLh3IJpLRIiMB3g");
	var mask_graphics_464 = new cjs.Graphics().p("AmAknICZiCIJoLRIiZCCg");
	var mask_graphics_465 = new cjs.Graphics().p("AmHkhICmiOIJpLRIimCOg");
	var mask_graphics_466 = new cjs.Graphics().p("AmNkcICziZIJoLRIizCZg");
	var mask_graphics_467 = new cjs.Graphics().p("AmUkWIDBikIJoLRIjACkg");
	var mask_graphics_468 = new cjs.Graphics().p("AmbkQIDOiwIJpLRIjOCwg");
	var mask_graphics_469 = new cjs.Graphics().p("AmhkLIDbi7IJoLSIjbC6g");
	var mask_graphics_470 = new cjs.Graphics().p("AmokFIDojGIJpLRIjoDGg");
	var mask_graphics_471 = new cjs.Graphics().p("Amuj/ID1jSIJpLRIj2DSg");
	var mask_graphics_472 = new cjs.Graphics().p("Am1j6IEDjcIJoLRIkDDcg");
	var mask_graphics_473 = new cjs.Graphics().p("Am8j0IEQjoIJpLRIkQDog");
	var mask_graphics_474 = new cjs.Graphics().p("AnCjuIEdj0IJpLRIkeD0g");
	var mask_graphics_475 = new cjs.Graphics().p("AnJjoIEqkAIJpLRIkqEAg");
	var mask_graphics_476 = new cjs.Graphics().p("AnQjjIE4kKIJpLRIk4EKg");
	var mask_graphics_477 = new cjs.Graphics().p("AnWjdIFFkWIJoLRIlFEWg");
	var mask_graphics_478 = new cjs.Graphics().p("AndjXIFTkiIJoLRIlSEig");
	var mask_graphics_479 = new cjs.Graphics().p("AnjjSIFfksIJoLRIlfEsg");
	var mask_graphics_480 = new cjs.Graphics().p("AnqjMIFtk4IJoLRIltE4g");
	var mask_graphics_481 = new cjs.Graphics().p("AnxjGIF6lEIJpLRIl6FEg");
	var mask_graphics_482 = new cjs.Graphics().p("An3jBIGHlOIJpLRImIFOg");
	var mask_graphics_483 = new cjs.Graphics().p("An+i7IGUlaIJpLRImUFag");
	var mask_graphics_484 = new cjs.Graphics().p("AoFi1IGilmIJpLRImiFmg");
	var mask_graphics_485 = new cjs.Graphics().p("AoLiwIGvlwIJoLRImvFwg");
	var mask_graphics_486 = new cjs.Graphics().p("AoSiqIG9l8IJoLRIm8F8g");
	var mask_graphics_487 = new cjs.Graphics().p("AoYikIHJmIIJoLRInJGIg");
	var mask_graphics_488 = new cjs.Graphics().p("AofifIHXmSIJoLRInXGSg");
	var mask_graphics_489 = new cjs.Graphics().p("AomiZIHkmeIJpLRInkGeg");
	var mask_graphics_490 = new cjs.Graphics().p("AosiTIHxmqIJpLRInyGqg");
	var mask_graphics_491 = new cjs.Graphics().p("AoziOIH/m0IJoLRIn+G0g");
	var mask_graphics_492 = new cjs.Graphics().p("Ao6iIIIMnAIJpLRIoMHAg");
	var mask_graphics_493 = new cjs.Graphics().p("ApAiCIIZnMIJoLRIoZHMg");
	var mask_graphics_494 = new cjs.Graphics().p("ApHh9IImnWIJpLRIomHWg");
	var mask_graphics_495 = new cjs.Graphics().p("ApNh3IIzniIJpLRIo0Hig");
	var mask_graphics_496 = new cjs.Graphics().p("ApUhxIJBnuIJoLRIpBHug");
	var mask_graphics_497 = new cjs.Graphics().p("ApbhsIJOn4IJpLRIpOH4g");
	var mask_graphics_498 = new cjs.Graphics().p("AphhmIJboEIJoLRIpbIEg");
	var mask_graphics_499 = new cjs.Graphics().p("ApohgIJooQIJpLRIpoIQg");
	var mask_graphics_500 = new cjs.Graphics().p("ApvhbIJ1oaIJqLRIp1Iag");
	var mask_graphics_501 = new cjs.Graphics().p("Ap1hVIKComIJpLRIqCImg");
	var mask_graphics_502 = new cjs.Graphics().p("Ap8hPIKPoyIJqLRIqPIyg");
	var mask_graphics_503 = new cjs.Graphics().p("AqChKIKco8IJqLRIqdI8g");
	var mask_graphics_504 = new cjs.Graphics().p("AqJhEIKqpIIJpLRIqqJIg");
	var mask_graphics_505 = new cjs.Graphics().p("AqQg+IK3pUIJqLRIq3JUg");
	var mask_graphics_506 = new cjs.Graphics().p("AqWg5ILEpeIJpLRIrEJeg");
	var mask_graphics_507 = new cjs.Graphics().p("AqdgzILRpqIJqLRIrRJqg");
	var mask_graphics_508 = new cjs.Graphics().p("AqkgtILfp2IJqLRIrfJ2g");
	var mask_graphics_509 = new cjs.Graphics().p("AqqgoILsqAIJpLRIrsKAg");
	var mask_graphics_510 = new cjs.Graphics().p("AqxgiIL6qMIJpLRIr5KMg");
	var mask_graphics_511 = new cjs.Graphics().p("Aq3gcIMGqYIJpLRIsGKYg");
	var mask_graphics_512 = new cjs.Graphics().p("Aq+gXIMUqjIJpLRIsUKjg");
	var mask_graphics_513 = new cjs.Graphics().p("ArFgRIMhquIJqLRIshKug");
	var mask_graphics_514 = new cjs.Graphics().p("ArLgLIMuq6IJqLRIsvK6g");
	var mask_graphics_515 = new cjs.Graphics().p("ArSgGIM7rFIJqLSIs7LEg");
	var mask_graphics_516 = new cjs.Graphics().p("ArZAAINJrQIJqLRItJLQg");
	var mask_graphics_517 = new cjs.Graphics().p("ArfAFINWrbIJpLSItWLbg");
	var mask_graphics_518 = new cjs.Graphics().p("ArmAKINkrlIJpLSItjLlg");
	var mask_graphics_519 = new cjs.Graphics().p("ArsAQINwrxIJpLSItwLxg");
	var mask_graphics_520 = new cjs.Graphics().p("ArzAWIN+r9IJpLSIt+L9g");
	var mask_graphics_521 = new cjs.Graphics().p("Ar6AbIOLsHIJqLRIuLMIg");
	var mask_graphics_522 = new cjs.Graphics().p("AsAAhIOYsTIJqLSIuZMTg");
	var mask_graphics_523 = new cjs.Graphics().p("AsHAnIOmsfIJpLSIumMfg");
	var mask_graphics_524 = new cjs.Graphics().p("AsOAsIOzsqIJqLSIuzMqg");
	var mask_graphics_525 = new cjs.Graphics().p("AsUAyIPAs1IJpLSIvAM1g");
	var mask_graphics_526 = new cjs.Graphics().p("AsbA4IPNtBIJqLSIvNNBg");
	var mask_graphics_527 = new cjs.Graphics().p("AsiA9IPbtMIJqLTIvbNLg");
	var mask_graphics_528 = new cjs.Graphics().p("AsoBDIPotXIJpLSIvoNXg");
	var mask_graphics_529 = new cjs.Graphics().p("AsvBJIP2tjIJpLSIv1Njg");
	var mask_graphics_530 = new cjs.Graphics().p("As1BOIQCttIJpLSIwCNtg");
	var mask_graphics_531 = new cjs.Graphics().p("As8BUIQQt5IJpLSIwQN5g");
	var mask_graphics_532 = new cjs.Graphics().p("AtDBaIQduFIJqLSIwdOFg");
	var mask_graphics_533 = new cjs.Graphics().p("AtJBfIQquPIJqLRIwrOQg");
	var mask_graphics_534 = new cjs.Graphics().p("AtQBlIQ3ubIJqLSIw3Obg");
	var mask_graphics_535 = new cjs.Graphics().p("AtXBrIRFunIJqLSIxFOng");
	var mask_graphics_536 = new cjs.Graphics().p("AtdBwIRSuyIJpLSIxSOyg");
	var mask_graphics_537 = new cjs.Graphics().p("AtkB2IRgu9IJpLSIxfO9g");
	var mask_graphics_538 = new cjs.Graphics().p("AtqB8IRsvJIJpLSIxsPJg");
	var mask_graphics_539 = new cjs.Graphics().p("AtxCBIR6vUIJpLSIx6PUg");
	var mask_graphics_540 = new cjs.Graphics().p("At4CHISHvfIJqLSIyHPfg");
	var mask_graphics_541 = new cjs.Graphics().p("At+CNISUvrIJqLSIyVPrg");
	var mask_graphics_542 = new cjs.Graphics().p("AuFCSIShv2IJqLTIyhP1g");
	var mask_graphics_543 = new cjs.Graphics().p("AuMCYISvwBIJqLSIyvQBg");
	var mask_graphics_544 = new cjs.Graphics().p("AuSCeIS8wNIJpLSIy8QNg");
	var mask_graphics_545 = new cjs.Graphics().p("AuZCjITJwXIJqLSIzJQXg");
	var mask_graphics_546 = new cjs.Graphics().p("AufCpITWwjIJpLSIzWQjg");
	var mask_graphics_547 = new cjs.Graphics().p("AumCvITkwvIJpLSIzkQvg");
	var mask_graphics_548 = new cjs.Graphics().p("AutC0ITxw5IJqLRIzxQ6g");
	var mask_graphics_549 = new cjs.Graphics().p("AuzC6IT+xFIJpLSIz+RFg");
	var mask_graphics_550 = new cjs.Graphics().p("Au6DAIUMxRIJpLSI0LRRg");
	var mask_graphics_551 = new cjs.Graphics().p("AvBDFIUZxcIJqLSI0ZRcg");
	var mask_graphics_552 = new cjs.Graphics().p("AvHDLIUmxnIJpLSI0mRng");
	var mask_graphics_553 = new cjs.Graphics().p("AvODRIUzxzIJqLSI0zRzg");
	var mask_graphics_554 = new cjs.Graphics().p("AvUDWIVAx+IJqLTI1BR9g");
	var mask_graphics_555 = new cjs.Graphics().p("AvbDcIVOyJIJpLSI1OSJg");
	var mask_graphics_556 = new cjs.Graphics().p("AviDiIVbyVIJqLSI1bSVg");
	var mask_graphics_557 = new cjs.Graphics().p("AvoDnIVoyfIJpLSI1oSfg");
	var mask_graphics_558 = new cjs.Graphics().p("AvvDtIV2yrIJpLSI11Srg");
	var mask_graphics_559 = new cjs.Graphics().p("Av2DzIWDy3IJqLSI2DS3g");
	var mask_graphics_560 = new cjs.Graphics().p("Av8D4IWQzBIJpLRI2QTCg");
	var mask_graphics_561 = new cjs.Graphics().p("AwDD+IWdzNIJqLSI2dTNg");
	var mask_graphics_562 = new cjs.Graphics().p("AwJEEIWqzZIJqLSI2rTZg");
	var mask_graphics_563 = new cjs.Graphics().p("AwQEJIW4zjIJpLRI24Tkg");
	var mask_graphics_564 = new cjs.Graphics().p("AwXEPIXFzvIJqLSI3FTvg");
	var mask_graphics_565 = new cjs.Graphics().p("AwdEVIXSz7IJpLSI3ST7g");
	var mask_graphics_566 = new cjs.Graphics().p("AwkEaIXf0GIJqLSI3fUGg");
	var mask_graphics_567 = new cjs.Graphics().p("AwrEgIXt0RIJqLSI3tURg");
	var mask_graphics_568 = new cjs.Graphics().p("AwxEmIX60dIJpLSI36Udg");
	var mask_graphics_569 = new cjs.Graphics().p("Aw4ErIYI0oIJpLTI4HUng");
	var mask_graphics_570 = new cjs.Graphics().p("Aw+ExIYU0zIJpLSI4UUzg");
	var mask_graphics_571 = new cjs.Graphics().p("AxFE3IYi0/IJpLSI4iU/g");
	var mask_graphics_572 = new cjs.Graphics().p("AxME8IYv1JIJqLSI4vVJg");
	var mask_graphics_573 = new cjs.Graphics().p("AxSFCIY81VIJqLSI49VVg");
	var mask_graphics_574 = new cjs.Graphics().p("AxZFIIZJ1hIJqLSI5JVhg");
	var mask_graphics_575 = new cjs.Graphics().p("AxgFNIZX1rIJqLRI5XVsg");
	var mask_graphics_576 = new cjs.Graphics().p("AxmFTIZk13IJpLSI5kV3g");
	var mask_graphics_577 = new cjs.Graphics().p("AxtFZIZy2DIJpLSI5xWDg");
	var mask_graphics_578 = new cjs.Graphics().p("AxzFeIZ+2OIJpLSI5+WOg");
	var mask_graphics_579 = new cjs.Graphics().p("Ax6FkIaM2ZIJpLSI6MWZg");
	var mask_graphics_580 = new cjs.Graphics().p("AyBFqIaZ2lIJqLSI6ZWlg");
	var mask_graphics_581 = new cjs.Graphics().p("AyHFvIam2wIJqLTI6nWvg");
	var mask_graphics_582 = new cjs.Graphics().p("AyOF1Ia027IJpLSI6zW7g");
	var mask_graphics_583 = new cjs.Graphics().p("AyVF7IbB3HIJqLSI7BXHg");
	var mask_graphics_584 = new cjs.Graphics().p("AybGAIbO3RIJpLSI7OXRg");
	var mask_graphics_585 = new cjs.Graphics().p("AyiGGIbb3dIJqLSI7bXdg");
	var mask_graphics_586 = new cjs.Graphics().p("AyoGMIbo3pIJqLSI7pXpg");
	var mask_graphics_587 = new cjs.Graphics().p("AyvGRIb23zIJpLRI72X0g");
	var mask_graphics_588 = new cjs.Graphics().p("Ay2GXIcD3/IJqLSI8DX/g");
	var mask_graphics_589 = new cjs.Graphics().p("Ay8GdIcQ4LIJpLSI8QYLg");
	var mask_graphics_590 = new cjs.Graphics().p("AzDGiIce4WIJpLSI8dYWg");
	var mask_graphics_591 = new cjs.Graphics().p("AzKGoIcr4hIJqLSI8rYhg");
	var mask_graphics_592 = new cjs.Graphics().p("AzQGuIc44tIJpLSI84Ytg");
	var mask_graphics_593 = new cjs.Graphics().p("AzXGzIdF44IJqLSI9FY4g");
	var mask_graphics_594 = new cjs.Graphics().p("AzdG5IdS5DIJqLSI9TZDg");
	var mask_graphics_595 = new cjs.Graphics().p("AzkG/Idg5PIJpLSI9gZPg");
	var mask_graphics_596 = new cjs.Graphics().p("AzrHEIdt5aIJqLTI9tZZg");
	var mask_graphics_597 = new cjs.Graphics().p("AzxHKId65lIJpLSI96Zlg");
	var mask_graphics_598 = new cjs.Graphics().p("Az4HQIeI5xIJpLSI+IZxg");
	var mask_graphics_599 = new cjs.Graphics().p("Az/HVIeV57IJqLSI+VZ7g");
	var mask_graphics_600 = new cjs.Graphics().p("A0FHbIei6HIJqLSI+jaHg");
	var mask_graphics_601 = new cjs.Graphics().p("A0MHhIew6TIJpLSI+vaTg");
	var mask_graphics_602 = new cjs.Graphics().p("A0THmIe96dIJqLRI+9aeg");
	var mask_graphics_603 = new cjs.Graphics().p("A0ZHsIfK6pIJpLSI/Kapg");
	var mask_graphics_604 = new cjs.Graphics().p("A0gHyIfX61IJqLSI/Xa1g");
	var mask_graphics_605 = new cjs.Graphics().p("A0mH3Ifk7AIJqLSI/lbAg");
	var mask_graphics_606 = new cjs.Graphics().p("A0tH9Ify7LIJpLSI/ybLg");
	var mask_graphics_607 = new cjs.Graphics().p("A00IDIf/7XIJqLSI//bXg");
	var mask_graphics_608 = new cjs.Graphics().p("A06IJMAgMgbjIJpLSMggMAbjg");
	var mask_graphics_609 = new cjs.Graphics().p("A1BIOMAgagbtIJpLSMggZAbtg");
	var mask_graphics_610 = new cjs.Graphics().p("A1IIUMAgngb5IJqLSMggnAb5g");
	var mask_graphics_611 = new cjs.Graphics().p("A1OIZMAg0gcDIJpLSMgg0AcDg");
	var mask_graphics_612 = new cjs.Graphics().p("A1VIfMAhBgcPIJqLSMghBAcPg");
	var mask_graphics_613 = new cjs.Graphics().p("A1bIlMAhOgcbIJqLSMghPAcbg");
	var mask_graphics_614 = new cjs.Graphics().p("A1iIrMAhcgcnIJpLSMghcAcng");
	var mask_graphics_615 = new cjs.Graphics().p("A1pIwMAhpgcxIJqLSMghpAcxg");
	var mask_graphics_616 = new cjs.Graphics().p("A1vI2MAh2gc9IJpLSMgh2Ac9g");
	var mask_graphics_617 = new cjs.Graphics().p("A12I8MAiDgdJIJqLSMgiDAdJg");
	var mask_graphics_618 = new cjs.Graphics().p("A19JBMAiRgdTIJqLSMgiRAdTg");
	var mask_graphics_619 = new cjs.Graphics().p("A2DJHMAiegdfIJpLSMgieAdfg");
	var mask_graphics_620 = new cjs.Graphics().p("A2KJNMAisgdrIJpLSMgirAdrg");
	var mask_graphics_621 = new cjs.Graphics().p("A2QJSMAi4gd1IJpLSMgi4Ad1g");
	var mask_graphics_622 = new cjs.Graphics().p("A2XJYMAjGgeBIJpLSMgjGAeBg");
	var mask_graphics_623 = new cjs.Graphics().p("A2eJeMAjTgeNIJqLSMgjTAeNg");
	var mask_graphics_624 = new cjs.Graphics().p("A2kJjMAjggeXIJqLSMgjhAeXg");
	var mask_graphics_625 = new cjs.Graphics().p("A2rJpMAjtgejIJqLSMgjtAejg");
	var mask_graphics_626 = new cjs.Graphics().p("A2yJvMAj7gevIJqLSMgj7Aevg");
	var mask_graphics_627 = new cjs.Graphics().p("A24J0MAkIge5IJpLSMgkIAe5g");
	var mask_graphics_628 = new cjs.Graphics().p("A2/J6MAkWgfFIJpLSMgkVAfFg");
	var mask_graphics_629 = new cjs.Graphics().p("A3FKAMAkigfRIJpLSMgkiAfRg");
	var mask_graphics_630 = new cjs.Graphics().p("A3MKFMAkwgfbIJpLSMgkwAfbg");
	var mask_graphics_631 = new cjs.Graphics().p("A3TKLMAk9gfnIJqLSMgk9Afng");
	var mask_graphics_632 = new cjs.Graphics().p("A3ZKRMAlKgfzIJqLSMglLAfzg");
	var mask_graphics_633 = new cjs.Graphics().p("A3gKWMAlYgf9IJpLSMglXAf9g");
	var mask_graphics_634 = new cjs.Graphics().p("A3nKcMAllggJIJqLSMgllAgJg");
	var mask_graphics_635 = new cjs.Graphics().p("A3tKiMAlyggVIJpLSMglyAgVg");
	var mask_graphics_636 = new cjs.Graphics().p("A30KnMAl/ggfIJqLSMgl/Agfg");
	var mask_graphics_637 = new cjs.Graphics().p("A36KtMAmMggrIJpLSMgmMAgrg");
	var mask_graphics_638 = new cjs.Graphics().p("A4BKzMAmagg3IJpLSMgmaAg3g");
	var mask_graphics_639 = new cjs.Graphics().p("A4IK4MAmnghBIJqLSMgmnAhBg");
	var mask_graphics_640 = new cjs.Graphics().p("A4OK+MAm0ghNIJpLSMgm0AhNg");
	var mask_graphics_641 = new cjs.Graphics().p("A4VLEMAnCghZIJpLSMgnBAhZg");
	var mask_graphics_642 = new cjs.Graphics().p("A4cLJMAnPghjIJqLSMgnPAhjg");
	var mask_graphics_643 = new cjs.Graphics().p("A4iLPMAncghvIJpLSMgncAhvg");
	var mask_graphics_644 = new cjs.Graphics().p("A4pLVMAnpgh7IJqLSMgnpAh7g");
	var mask_graphics_645 = new cjs.Graphics().p("A4vLaMAn2giFIJqLSMgn3AiFg");
	var mask_graphics_646 = new cjs.Graphics().p("A42LgMAoEgiRIJpLSMgoEAiRg");
	var mask_graphics_647 = new cjs.Graphics().p("A49LmMAoRgidIJqLSMgoRAidg");
	var mask_graphics_648 = new cjs.Graphics().p("A5DLrMAoeginIJpLRMgoeAiog");
	var mask_graphics_649 = new cjs.Graphics().p("A5KLxMAosgizIJpLSMgorAizg");
	var mask_graphics_650 = new cjs.Graphics().p("A5RL3MAo5gi/IJqLSMgo5Ai/g");
	var mask_graphics_651 = new cjs.Graphics().p("A5XL8MApGgjKIJpLSMgpGAjKg");
	var mask_graphics_652 = new cjs.Graphics().p("A5eMCMApTgjVIJqLSMgpTAjVg");
	var mask_graphics_653 = new cjs.Graphics().p("A5kMIMApggjhIJqLSMgphAjhg");
	var mask_graphics_654 = new cjs.Graphics().p("A5rMNMApugjsIJpLTMgpuAjrg");
	var mask_graphics_655 = new cjs.Graphics().p("A5yMTMAp7gj3IJqLSMgp7Aj3g");
	var mask_graphics_656 = new cjs.Graphics().p("A54MZMAqIgkDIJqLSMgqJAkDg");
	var mask_graphics_657 = new cjs.Graphics().p("A5/MeMAqVgkNIJqLSMgqVAkNg");
	var mask_graphics_658 = new cjs.Graphics().p("A6GMkMAqjgkZIJqLSMgqjAkZg");
	var mask_graphics_659 = new cjs.Graphics().p("A6MMqMAqwgklIJpLSMgqwAklg");
	var mask_graphics_660 = new cjs.Graphics().p("A6TMvMAq+gkvIJpLRMgq9Akwg");
	var mask_graphics_661 = new cjs.Graphics().p("A6ZM1MArKgk7IJpLSMgrKAk7g");
	var mask_graphics_662 = new cjs.Graphics().p("AzAVWMArYglHIJpLSMgrYAlHg");
	var mask_graphics_663 = new cjs.Graphics().p("A6/NVMAsWgl7IJpLSMgsVAl7g");
	var mask_graphics_664 = new cjs.Graphics().p("Az+VWMAtTgmwIJqLSMgtTAmwg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(455).to({graphics:mask_graphics_455,x:80.5,y:208.8}).wait(1).to({graphics:mask_graphics_456,x:129.2,y:379.5}).wait(1).to({graphics:mask_graphics_457,x:129.9,y:378.9}).wait(1).to({graphics:mask_graphics_458,x:130.6,y:378.3}).wait(1).to({graphics:mask_graphics_459,x:131.2,y:377.8}).wait(1).to({graphics:mask_graphics_460,x:131.9,y:377.2}).wait(1).to({graphics:mask_graphics_461,x:132.5,y:376.6}).wait(1).to({graphics:mask_graphics_462,x:133.2,y:376.1}).wait(1).to({graphics:mask_graphics_463,x:133.9,y:375.5}).wait(1).to({graphics:mask_graphics_464,x:134.5,y:374.9}).wait(1).to({graphics:mask_graphics_465,x:135.2,y:374.4}).wait(1).to({graphics:mask_graphics_466,x:135.9,y:373.8}).wait(1).to({graphics:mask_graphics_467,x:136.5,y:373.2}).wait(1).to({graphics:mask_graphics_468,x:137.2,y:372.7}).wait(1).to({graphics:mask_graphics_469,x:137.8,y:372.1}).wait(1).to({graphics:mask_graphics_470,x:138.5,y:371.5}).wait(1).to({graphics:mask_graphics_471,x:139.2,y:371}).wait(1).to({graphics:mask_graphics_472,x:139.8,y:370.4}).wait(1).to({graphics:mask_graphics_473,x:140.5,y:369.8}).wait(1).to({graphics:mask_graphics_474,x:141.2,y:369.3}).wait(1).to({graphics:mask_graphics_475,x:141.8,y:368.7}).wait(1).to({graphics:mask_graphics_476,x:142.5,y:368.1}).wait(1).to({graphics:mask_graphics_477,x:143.1,y:367.6}).wait(1).to({graphics:mask_graphics_478,x:143.8,y:367}).wait(1).to({graphics:mask_graphics_479,x:144.5,y:366.4}).wait(1).to({graphics:mask_graphics_480,x:145.1,y:365.9}).wait(1).to({graphics:mask_graphics_481,x:145.8,y:365.3}).wait(1).to({graphics:mask_graphics_482,x:146.5,y:364.7}).wait(1).to({graphics:mask_graphics_483,x:147.1,y:364.2}).wait(1).to({graphics:mask_graphics_484,x:147.8,y:363.6}).wait(1).to({graphics:mask_graphics_485,x:148.4,y:363}).wait(1).to({graphics:mask_graphics_486,x:149.1,y:362.5}).wait(1).to({graphics:mask_graphics_487,x:149.8,y:361.9}).wait(1).to({graphics:mask_graphics_488,x:150.4,y:361.3}).wait(1).to({graphics:mask_graphics_489,x:151.1,y:360.8}).wait(1).to({graphics:mask_graphics_490,x:151.8,y:360.2}).wait(1).to({graphics:mask_graphics_491,x:152.4,y:359.6}).wait(1).to({graphics:mask_graphics_492,x:153.1,y:359.1}).wait(1).to({graphics:mask_graphics_493,x:153.7,y:358.5}).wait(1).to({graphics:mask_graphics_494,x:154.4,y:357.9}).wait(1).to({graphics:mask_graphics_495,x:155.1,y:357.4}).wait(1).to({graphics:mask_graphics_496,x:155.7,y:356.8}).wait(1).to({graphics:mask_graphics_497,x:156.4,y:356.2}).wait(1).to({graphics:mask_graphics_498,x:157.1,y:355.7}).wait(1).to({graphics:mask_graphics_499,x:157.7,y:355.1}).wait(1).to({graphics:mask_graphics_500,x:158.4,y:354.5}).wait(1).to({graphics:mask_graphics_501,x:159,y:354}).wait(1).to({graphics:mask_graphics_502,x:159.7,y:353.4}).wait(1).to({graphics:mask_graphics_503,x:160.4,y:352.8}).wait(1).to({graphics:mask_graphics_504,x:161,y:352.3}).wait(1).to({graphics:mask_graphics_505,x:161.7,y:351.7}).wait(1).to({graphics:mask_graphics_506,x:162.4,y:351.1}).wait(1).to({graphics:mask_graphics_507,x:163,y:350.6}).wait(1).to({graphics:mask_graphics_508,x:163.7,y:350}).wait(1).to({graphics:mask_graphics_509,x:164.3,y:349.4}).wait(1).to({graphics:mask_graphics_510,x:165,y:348.9}).wait(1).to({graphics:mask_graphics_511,x:165.7,y:348.3}).wait(1).to({graphics:mask_graphics_512,x:166.3,y:347.7}).wait(1).to({graphics:mask_graphics_513,x:167,y:347.2}).wait(1).to({graphics:mask_graphics_514,x:167.7,y:346.6}).wait(1).to({graphics:mask_graphics_515,x:168.3,y:346}).wait(1).to({graphics:mask_graphics_516,x:169,y:345.5}).wait(1).to({graphics:mask_graphics_517,x:169.6,y:344.9}).wait(1).to({graphics:mask_graphics_518,x:170.3,y:344.3}).wait(1).to({graphics:mask_graphics_519,x:171,y:343.8}).wait(1).to({graphics:mask_graphics_520,x:171.6,y:343.2}).wait(1).to({graphics:mask_graphics_521,x:172.3,y:342.6}).wait(1).to({graphics:mask_graphics_522,x:173,y:342.1}).wait(1).to({graphics:mask_graphics_523,x:173.6,y:341.5}).wait(1).to({graphics:mask_graphics_524,x:174.3,y:340.9}).wait(1).to({graphics:mask_graphics_525,x:175,y:340.4}).wait(1).to({graphics:mask_graphics_526,x:175.6,y:339.8}).wait(1).to({graphics:mask_graphics_527,x:176.3,y:339.2}).wait(1).to({graphics:mask_graphics_528,x:176.9,y:338.7}).wait(1).to({graphics:mask_graphics_529,x:177.6,y:338.1}).wait(1).to({graphics:mask_graphics_530,x:178.3,y:337.5}).wait(1).to({graphics:mask_graphics_531,x:178.9,y:337}).wait(1).to({graphics:mask_graphics_532,x:179.6,y:336.4}).wait(1).to({graphics:mask_graphics_533,x:180.3,y:335.8}).wait(1).to({graphics:mask_graphics_534,x:180.9,y:335.3}).wait(1).to({graphics:mask_graphics_535,x:181.6,y:334.7}).wait(1).to({graphics:mask_graphics_536,x:182.2,y:334.1}).wait(1).to({graphics:mask_graphics_537,x:182.9,y:333.6}).wait(1).to({graphics:mask_graphics_538,x:183.6,y:333}).wait(1).to({graphics:mask_graphics_539,x:184.2,y:332.4}).wait(1).to({graphics:mask_graphics_540,x:184.9,y:331.9}).wait(1).to({graphics:mask_graphics_541,x:185.6,y:331.3}).wait(1).to({graphics:mask_graphics_542,x:186.2,y:330.7}).wait(1).to({graphics:mask_graphics_543,x:186.9,y:330.1}).wait(1).to({graphics:mask_graphics_544,x:187.5,y:329.6}).wait(1).to({graphics:mask_graphics_545,x:188.2,y:329}).wait(1).to({graphics:mask_graphics_546,x:188.9,y:328.4}).wait(1).to({graphics:mask_graphics_547,x:189.5,y:327.9}).wait(1).to({graphics:mask_graphics_548,x:190.2,y:327.3}).wait(1).to({graphics:mask_graphics_549,x:190.9,y:326.7}).wait(1).to({graphics:mask_graphics_550,x:191.5,y:326.2}).wait(1).to({graphics:mask_graphics_551,x:192.2,y:325.6}).wait(1).to({graphics:mask_graphics_552,x:192.8,y:325}).wait(1).to({graphics:mask_graphics_553,x:193.5,y:324.5}).wait(1).to({graphics:mask_graphics_554,x:194.2,y:323.9}).wait(1).to({graphics:mask_graphics_555,x:194.8,y:323.3}).wait(1).to({graphics:mask_graphics_556,x:195.5,y:322.8}).wait(1).to({graphics:mask_graphics_557,x:196.2,y:322.2}).wait(1).to({graphics:mask_graphics_558,x:196.8,y:321.6}).wait(1).to({graphics:mask_graphics_559,x:197.5,y:321.1}).wait(1).to({graphics:mask_graphics_560,x:198.1,y:320.5}).wait(1).to({graphics:mask_graphics_561,x:198.8,y:319.9}).wait(1).to({graphics:mask_graphics_562,x:199.5,y:319.4}).wait(1).to({graphics:mask_graphics_563,x:200.1,y:318.8}).wait(1).to({graphics:mask_graphics_564,x:200.8,y:318.2}).wait(1).to({graphics:mask_graphics_565,x:201.5,y:317.7}).wait(1).to({graphics:mask_graphics_566,x:202.1,y:317.1}).wait(1).to({graphics:mask_graphics_567,x:202.8,y:316.5}).wait(1).to({graphics:mask_graphics_568,x:203.4,y:316}).wait(1).to({graphics:mask_graphics_569,x:204.1,y:315.4}).wait(1).to({graphics:mask_graphics_570,x:204.8,y:314.8}).wait(1).to({graphics:mask_graphics_571,x:205.4,y:314.3}).wait(1).to({graphics:mask_graphics_572,x:206.1,y:313.7}).wait(1).to({graphics:mask_graphics_573,x:206.8,y:313.1}).wait(1).to({graphics:mask_graphics_574,x:207.4,y:312.6}).wait(1).to({graphics:mask_graphics_575,x:208.1,y:312}).wait(1).to({graphics:mask_graphics_576,x:208.7,y:311.4}).wait(1).to({graphics:mask_graphics_577,x:209.4,y:310.9}).wait(1).to({graphics:mask_graphics_578,x:210.1,y:310.3}).wait(1).to({graphics:mask_graphics_579,x:210.7,y:309.7}).wait(1).to({graphics:mask_graphics_580,x:211.4,y:309.2}).wait(1).to({graphics:mask_graphics_581,x:212.1,y:308.6}).wait(1).to({graphics:mask_graphics_582,x:212.7,y:308}).wait(1).to({graphics:mask_graphics_583,x:213.4,y:307.5}).wait(1).to({graphics:mask_graphics_584,x:214,y:306.9}).wait(1).to({graphics:mask_graphics_585,x:214.7,y:306.3}).wait(1).to({graphics:mask_graphics_586,x:215.4,y:305.8}).wait(1).to({graphics:mask_graphics_587,x:216,y:305.2}).wait(1).to({graphics:mask_graphics_588,x:216.7,y:304.6}).wait(1).to({graphics:mask_graphics_589,x:217.4,y:304.1}).wait(1).to({graphics:mask_graphics_590,x:218,y:303.5}).wait(1).to({graphics:mask_graphics_591,x:218.7,y:302.9}).wait(1).to({graphics:mask_graphics_592,x:219.3,y:302.4}).wait(1).to({graphics:mask_graphics_593,x:220,y:301.8}).wait(1).to({graphics:mask_graphics_594,x:220.7,y:301.2}).wait(1).to({graphics:mask_graphics_595,x:221.3,y:300.7}).wait(1).to({graphics:mask_graphics_596,x:222,y:300.1}).wait(1).to({graphics:mask_graphics_597,x:222.7,y:299.5}).wait(1).to({graphics:mask_graphics_598,x:223.3,y:299}).wait(1).to({graphics:mask_graphics_599,x:224,y:298.4}).wait(1).to({graphics:mask_graphics_600,x:224.7,y:297.8}).wait(1).to({graphics:mask_graphics_601,x:225.3,y:297.3}).wait(1).to({graphics:mask_graphics_602,x:226,y:296.7}).wait(1).to({graphics:mask_graphics_603,x:226.6,y:296.1}).wait(1).to({graphics:mask_graphics_604,x:227.3,y:295.6}).wait(1).to({graphics:mask_graphics_605,x:228,y:295}).wait(1).to({graphics:mask_graphics_606,x:228.6,y:294.4}).wait(1).to({graphics:mask_graphics_607,x:229.3,y:293.9}).wait(1).to({graphics:mask_graphics_608,x:230,y:293.3}).wait(1).to({graphics:mask_graphics_609,x:230.6,y:292.7}).wait(1).to({graphics:mask_graphics_610,x:231.3,y:292.2}).wait(1).to({graphics:mask_graphics_611,x:231.9,y:291.6}).wait(1).to({graphics:mask_graphics_612,x:232.6,y:291}).wait(1).to({graphics:mask_graphics_613,x:233.3,y:290.5}).wait(1).to({graphics:mask_graphics_614,x:233.9,y:289.9}).wait(1).to({graphics:mask_graphics_615,x:234.6,y:289.3}).wait(1).to({graphics:mask_graphics_616,x:235.3,y:288.8}).wait(1).to({graphics:mask_graphics_617,x:235.9,y:288.2}).wait(1).to({graphics:mask_graphics_618,x:236.6,y:287.6}).wait(1).to({graphics:mask_graphics_619,x:237.2,y:287.1}).wait(1).to({graphics:mask_graphics_620,x:237.9,y:286.5}).wait(1).to({graphics:mask_graphics_621,x:238.6,y:285.9}).wait(1).to({graphics:mask_graphics_622,x:239.2,y:285.4}).wait(1).to({graphics:mask_graphics_623,x:239.9,y:284.8}).wait(1).to({graphics:mask_graphics_624,x:240.6,y:284.2}).wait(1).to({graphics:mask_graphics_625,x:241.2,y:283.7}).wait(1).to({graphics:mask_graphics_626,x:241.9,y:283.1}).wait(1).to({graphics:mask_graphics_627,x:242.5,y:282.5}).wait(1).to({graphics:mask_graphics_628,x:243.2,y:282}).wait(1).to({graphics:mask_graphics_629,x:243.9,y:281.4}).wait(1).to({graphics:mask_graphics_630,x:244.5,y:280.8}).wait(1).to({graphics:mask_graphics_631,x:245.2,y:280.3}).wait(1).to({graphics:mask_graphics_632,x:245.9,y:279.7}).wait(1).to({graphics:mask_graphics_633,x:246.5,y:279.1}).wait(1).to({graphics:mask_graphics_634,x:247.2,y:278.6}).wait(1).to({graphics:mask_graphics_635,x:247.8,y:278}).wait(1).to({graphics:mask_graphics_636,x:248.5,y:277.4}).wait(1).to({graphics:mask_graphics_637,x:249.2,y:276.9}).wait(1).to({graphics:mask_graphics_638,x:249.8,y:276.3}).wait(1).to({graphics:mask_graphics_639,x:250.5,y:275.7}).wait(1).to({graphics:mask_graphics_640,x:251.2,y:275.2}).wait(1).to({graphics:mask_graphics_641,x:251.8,y:274.6}).wait(1).to({graphics:mask_graphics_642,x:252.5,y:274}).wait(1).to({graphics:mask_graphics_643,x:253.1,y:273.5}).wait(1).to({graphics:mask_graphics_644,x:253.8,y:272.9}).wait(1).to({graphics:mask_graphics_645,x:254.5,y:272.3}).wait(1).to({graphics:mask_graphics_646,x:255.1,y:271.8}).wait(1).to({graphics:mask_graphics_647,x:255.8,y:271.2}).wait(1).to({graphics:mask_graphics_648,x:256.5,y:270.6}).wait(1).to({graphics:mask_graphics_649,x:257.1,y:270.1}).wait(1).to({graphics:mask_graphics_650,x:257.8,y:269.5}).wait(1).to({graphics:mask_graphics_651,x:258.4,y:268.9}).wait(1).to({graphics:mask_graphics_652,x:259.1,y:268.4}).wait(1).to({graphics:mask_graphics_653,x:259.8,y:267.8}).wait(1).to({graphics:mask_graphics_654,x:260.4,y:267.2}).wait(1).to({graphics:mask_graphics_655,x:261.1,y:266.7}).wait(1).to({graphics:mask_graphics_656,x:261.8,y:266.1}).wait(1).to({graphics:mask_graphics_657,x:262.4,y:265.5}).wait(1).to({graphics:mask_graphics_658,x:263.1,y:265}).wait(1).to({graphics:mask_graphics_659,x:263.7,y:264.4}).wait(1).to({graphics:mask_graphics_660,x:264.4,y:263.8}).wait(1).to({graphics:mask_graphics_661,x:265.1,y:263.3}).wait(1).to({graphics:mask_graphics_662,x:217.7,y:208.8}).wait(1).to({graphics:mask_graphics_663,x:268.8,y:260.1}).wait(1).to({graphics:mask_graphics_664,x:223.9,y:208.8}).wait(79));

	// 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(20,1,1).p("A01U6QkpihFZmOQFZmNFej+QFej9I5lfQI6lfC0iGQC0iFDVjz");
	this.shape_1.setTransform(274.1,289.3);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(455).to({_off:false},0).wait(288));

	// Layer 13 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_429 = new cjs.Graphics().p("EAAxAiEIL6wjQDTCcArEFQArELieDcQidDbkLArQg6AKg3AAQjEAAioh1g");
	var mask_1_graphics_430 = new cjs.Graphics().p("EAAcAh0IMkwDQDNClAgEHQAgEMimDVQinDVkMAgQgsAGgqAAQjUAAiuiFg");
	var mask_1_graphics_431 = new cjs.Graphics().p("EAAHAhjINOvhQDGCuAVEIQAVENivDOQivDNkNAWQgeACgdAAQjkAAi0iVg");
	var mask_1_graphics_432 = new cjs.Graphics().p("EgAMAhSIN1u+QC/C2AKEIQAKEOi3DHQi4DGkOAKIgdABQj2AAi4img");
	var mask_1_graphics_433 = new cjs.Graphics().p("EAGlAj4QkJgBi7i3IObuZQC3C9AAEJQgBEOjAC/Qi/C+kNAAIgBAAg");
	var mask_1_graphics_434 = new cjs.Graphics().p("EAGKAj3QkIgLi0jAIPBtxQCuDEgLEIQgMEOjHC3Qi7Csj6AAIgggBg");
	var mask_1_graphics_435 = new cjs.Graphics().p("EAFwAj1QkIgWisjHIPktJQCnDLgWEIQgXENjPCvQi3CajnAAQgeAAgfgDg");
	var mask_1_graphics_436 = new cjs.Graphics().p("EAFVAjyQkHghijjNIQGsgQCeDSghEGQgiEMjWCmQixCKjXAAQgsAAgtgGg");
	var mask_1_graphics_437 = new cjs.Graphics().p("EAE7AjuQkFgsibjUIQlr1QCWDZgsEEQgtELjcCdQirB6jIAAQg4AAg7gKg");
	var mask_1_graphics_438 = new cjs.Graphics().p("EAEgAjpQkDg3iSjaIRErJQCMDfg2EDQg4EIjiCUQikBri5AAQhFAAhJgPg");
	var mask_1_graphics_439 = new cjs.Graphics().p("EAEHAjjQkBhCiJjgIRgqbQCDDkhBEAQhCEGjpCLQicBdirAAQhSAAhUgVg");
	var mask_1_graphics_440 = new cjs.Graphics().p("EADtAjbQj9hLiBjmIR7ptQB5DphLD+QhNEDjuCBQiUBQidAAQheAAhhgdg");
	var mask_1_graphics_441 = new cjs.Graphics().p("EADUAjTQj6hWh3jqISTo+QBwDuhWD6QhYEAjyB3QiMBEiQAAQhqAAhsglg");
	var mask_1_graphics_442 = new cjs.Graphics().p("EAC7AjKQj2hghtjwISpoNQBmDzhgD2QhiD8j3BtQiDA5iDAAQh2AAh3gug");
	var mask_1_graphics_443 = new cjs.Graphics().p("EACiAi/QjxhqhkjzIS+ncQBcD2hqDzQhsD3j8BjQh4Avh3AAQiCAAiCg5g");
	var mask_1_graphics_444 = new cjs.Graphics().p("EACKAi0Qjth0haj3ITRmqQBSD6h0DuQh2DzkABYQhtAmhrAAQiPAAiLhEg");
	var mask_1_graphics_445 = new cjs.Graphics().p("EABYAiZQjiiJhDj+ITxk7QA8EAiJDiQiLDokGBBQhUAVhRAAQirAAieheg");
	var mask_1_graphics_446 = new cjs.Graphics().p("EAApAh5QjVibgtkEIUIjLQAlEEibDWQifDbkLAqQg4AJg2AAQjLAAith+g");
	var mask_1_graphics_447 = new cjs.Graphics().p("EgACAhWQjHiugWkGIUUhaQAPEHiuDIQiyDLkNATQgaABgZAAQjuAAi4igg");
	var mask_1_graphics_448 = new cjs.Graphics().p("EAGeAj2QkOgFi6jDQi4i+ABkHIUYAZQgJEGi/C4Qi9C2kFAAIgPAAg");
	var mask_1_graphics_449 = new cjs.Graphics().p("EAFoAjyQkNgdiojSQimjOAYkGIUQCLQggEGjOCmQi0CQjeAAQgmAAgngEg");
	var mask_1_graphics_450 = new cjs.Graphics().p("EAE1AjpQkKg0iVjgQiTjcAvkDIT/D9Qg3EBjcCTQimBwi9AAQhCAAhEgOg");
	var mask_1_graphics_451 = new cjs.Graphics().p("EAEFAjcQkEhMiBjsQh/jpBFj9ITkFsQhND7joCAQiWBSifAAQhcAAhfgbg");
	var mask_1_graphics_452 = new cjs.Graphics().p("EADZAjJQj7hihtj3QhrjyBcj3IS/HZQhjD0jyBqQiCA6iEAAQh2AAh3gvg");
	var mask_1_graphics_453 = new cjs.Graphics().p("EACxAiyQjyh3hWkAQhVj7BxjtISQJBQh3Dqj7BVQhrAlhqAAQiRAAiMhGg");
	var mask_1_graphics_454 = new cjs.Graphics().p("EACNAiXQjmiMhAkHQg+kBCFjjIRaKmQiMDfkBA/QhSAUhPAAQiuAAifhhg");
	var mask_1_graphics_455 = new cjs.Graphics().p("EABuAh4QjZihgokLQgokFCZjXIQZMGQieDRkGAoQg2AIg0AAQjNAAiuh/g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(429).to({graphics:mask_1_graphics_429,x:107.4,y:229.7}).wait(1).to({graphics:mask_1_graphics_430,x:107.4,y:229.7}).wait(1).to({graphics:mask_1_graphics_431,x:107.4,y:229.6}).wait(1).to({graphics:mask_1_graphics_432,x:107.5,y:229.6}).wait(1).to({graphics:mask_1_graphics_433,x:107.5,y:229.6}).wait(1).to({graphics:mask_1_graphics_434,x:107.5,y:229.6}).wait(1).to({graphics:mask_1_graphics_435,x:107.5,y:229.6}).wait(1).to({graphics:mask_1_graphics_436,x:107.6,y:229.6}).wait(1).to({graphics:mask_1_graphics_437,x:107.6,y:229.6}).wait(1).to({graphics:mask_1_graphics_438,x:107.6,y:229.6}).wait(1).to({graphics:mask_1_graphics_439,x:107.7,y:229.6}).wait(1).to({graphics:mask_1_graphics_440,x:107.7,y:229.6}).wait(1).to({graphics:mask_1_graphics_441,x:107.7,y:229.6}).wait(1).to({graphics:mask_1_graphics_442,x:107.8,y:229.6}).wait(1).to({graphics:mask_1_graphics_443,x:107.8,y:229.6}).wait(1).to({graphics:mask_1_graphics_444,x:107.8,y:229.6}).wait(1).to({graphics:mask_1_graphics_445,x:107.8,y:229.5}).wait(1).to({graphics:mask_1_graphics_446,x:107.8,y:229.5}).wait(1).to({graphics:mask_1_graphics_447,x:107.8,y:229.4}).wait(1).to({graphics:mask_1_graphics_448,x:107.9,y:229.4}).wait(1).to({graphics:mask_1_graphics_449,x:107.7,y:229.4}).wait(1).to({graphics:mask_1_graphics_450,x:107.3,y:229.5}).wait(1).to({graphics:mask_1_graphics_451,x:106.6,y:229.5}).wait(1).to({graphics:mask_1_graphics_452,x:105.7,y:229.6}).wait(1).to({graphics:mask_1_graphics_453,x:104.5,y:229.6}).wait(1).to({graphics:mask_1_graphics_454,x:103.2,y:229.6}).wait(1).to({graphics:mask_1_graphics_455,x:101.5,y:229.5}).wait(288));

	// 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(20,1,1).p("A0SUSQkpihFZmOQFZmNFej+QFej9I5lfQI6lfC0iGQC0iFCPij");
	this.shape_2.setTransform(270.6,293.3);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(429).to({_off:false},0).wait(314));

	// Layer 17
	this.instance_2 = new lib.ar5("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(342.7,174.7,1,1,29.3,0,0,0.1,-1.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(264).to({_off:false},0).wait(479));

	// Layer 11 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_401 = new cjs.Graphics().p("AiFVCQCqjIEHgaQENgZDRCsQDQCsAaEMQAZEIikDNg");
	var mask_2_graphics_402 = new cjs.Graphics().p("AhkULQC4i7EJgFQEOgGDDC7QDDC7AGEOQAFEJizDBg");
	var mask_2_graphics_403 = new cjs.Graphics().p("AhATYQDFisEJAOQENAOC1DKQC0DJgOEOQgPEIjBCyg");
	var mask_2_graphics_404 = new cjs.Graphics().p("AgaSpQDRidEHAiQEMAjClDWQClDWgjEMQgiEHjOCjg");
	var mask_2_graphics_405 = new cjs.Graphics().p("AAMR/QDeiNEEA1QEIA3CVDiQCUDig3EIQg1EEjaCTg");
	var mask_2_graphics_406 = new cjs.Graphics().p("AA2RZQDoh8D/BIQEDBLCEDsQCDDthLEDQhJD/jkCDg");
	var mask_2_graphics_407 = new cjs.Graphics().p("ABiQ4QDxhrD4BcQD9BeBxD1QByD2heD9QhcD4jtByg");
	var mask_2_graphics_408 = new cjs.Graphics().p("ACQQcQD3hZDxBuQD2BxBeD9QBfD9hxD2QhuDxj1Bfg");
	var mask_2_graphics_409 = new cjs.Graphics().p("AC+QFQD+hGDoCAQDtCCBLEEQBLEEiDDsQh/Doj8BNg");
	var mask_2_graphics_410 = new cjs.Graphics().p("ADuPzQEDgyDdCQQDiCUA4EJQA3EIiUDiQiQDekBA6g");
	var mask_2_graphics_411 = new cjs.Graphics().p("AEfPnQEFgfDSChQDXCkAjEMQAkEMikDWQihDTkFAmg");
	var mask_2_graphics_412 = new cjs.Graphics().p("AFQPfQEHgLDFCwQDKC1APENQAPEOi0DKQiwDFkGATg");
	var mask_2_graphics_413 = new cjs.Graphics().p("EAEWAjwIC+0LQEDAqCeDUQChDZgnEMQgnELjZChQiuCCjPAAQgtAAgvgGg");
	var mask_2_graphics_414 = new cjs.Graphics().p("EACVAjQIG+zKQD2BeBwDvQByD1hcD+QhdD+j0BzQiIA/iKAAQhrAAhsgmg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(401).to({graphics:mask_2_graphics_401,x:101.5,y:217.6}).wait(1).to({graphics:mask_2_graphics_402,x:101.5,y:219.5}).wait(1).to({graphics:mask_2_graphics_403,x:101.5,y:221.1}).wait(1).to({graphics:mask_2_graphics_404,x:101.5,y:222.7}).wait(1).to({graphics:mask_2_graphics_405,x:101.5,y:224.1}).wait(1).to({graphics:mask_2_graphics_406,x:101.5,y:225.4}).wait(1).to({graphics:mask_2_graphics_407,x:101.5,y:226.5}).wait(1).to({graphics:mask_2_graphics_408,x:101.5,y:227.4}).wait(1).to({graphics:mask_2_graphics_409,x:101.5,y:228.2}).wait(1).to({graphics:mask_2_graphics_410,x:101.5,y:228.8}).wait(1).to({graphics:mask_2_graphics_411,x:101.5,y:229.2}).wait(1).to({graphics:mask_2_graphics_412,x:101.4,y:229.4}).wait(1).to({graphics:mask_2_graphics_413,x:101.5,y:229.4}).wait(1).to({graphics:mask_2_graphics_414,x:101.6,y:229.4}).wait(329));

	// 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(20,1,1).p("AN+26QjcH5iEEPQiDEOhICfQhICfg6BnQg5Boh6ETQh5ETiUEEQiUEEh5CNQh5CMhpAKQhpAKg2hB");
	this.shape_3.setTransform(223.6,277);
	this.shape_3._off = true;

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(401).to({_off:false},0).wait(342));

	// Layer 9 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_264 = new cjs.Graphics().p("ANrHBIAfhWIL2EPIgfBWg");
	var mask_3_graphics_265 = new cjs.Graphics().p("AmNhRIAmhsIL1EPIgmBsg");
	var mask_3_graphics_266 = new cjs.Graphics().p("AmRhGIAuiBIL1EOIguCBg");
	var mask_3_graphics_267 = new cjs.Graphics().p("AmVg7IA2iXIL1EOIg2CYg");
	var mask_3_graphics_268 = new cjs.Graphics().p("AmZgwIA+itIL1EOIg+Ctg");
	var mask_3_graphics_269 = new cjs.Graphics().p("AmdglIBGjDIL1EOIhGDDg");
	var mask_3_graphics_270 = new cjs.Graphics().p("AmhgbIBOjYIL1EPIhODYg");
	var mask_3_graphics_271 = new cjs.Graphics().p("AmlgQIBVjtIL2EOIhVDtg");
	var mask_3_graphics_272 = new cjs.Graphics().p("AmpgFIBdkDIL2EOIhdEEg");
	var mask_3_graphics_273 = new cjs.Graphics().p("AmsAFIBkkYIL1EPIhkEYg");
	var mask_3_graphics_274 = new cjs.Graphics().p("AmxAQIBtkuIL1EPIhsEug");
	var mask_3_graphics_275 = new cjs.Graphics().p("Am0AaIB0lDIL1EQIh0FDg");
	var mask_3_graphics_276 = new cjs.Graphics().p("Am4AlIB8lYIL1EPIh8FYg");
	var mask_3_graphics_277 = new cjs.Graphics().p("Am8AwICEluIL1EPIiEFvg");
	var mask_3_graphics_278 = new cjs.Graphics().p("AnAA7ICLmEIL2EPIiLGEg");
	var mask_3_graphics_279 = new cjs.Graphics().p("AnEBGICTmaIL2EPIiTGag");
	var mask_3_graphics_280 = new cjs.Graphics().p("AnHBQICamvIL1EQIiaGvg");
	var mask_3_graphics_281 = new cjs.Graphics().p("AnMBbICjnEIL1EPIiiHEg");
	var mask_3_graphics_282 = new cjs.Graphics().p("AnPBmICqnaIL1EPIiqHbg");
	var mask_3_graphics_283 = new cjs.Graphics().p("AnTBxICynwIL1EPIiyHwg");
	var mask_3_graphics_284 = new cjs.Graphics().p("AnXB8IC6oGIL1EPIi6IGg");
	var mask_3_graphics_285 = new cjs.Graphics().p("AnbCGIDCobIL1EQIjCIbg");
	var mask_3_graphics_286 = new cjs.Graphics().p("AnfCRIDJowIL2EPIjJIwg");
	var mask_3_graphics_287 = new cjs.Graphics().p("AnjCcIDRpGIL2EPIjRJGg");
	var mask_3_graphics_288 = new cjs.Graphics().p("AnnCnIDZpcIL1EPIjYJcg");
	var mask_3_graphics_289 = new cjs.Graphics().p("AnqCyIDgpyIL1EPIjgJyg");
	var mask_3_graphics_290 = new cjs.Graphics().p("AnuC8IDoqHIL1EQIjoKHg");
	var mask_3_graphics_291 = new cjs.Graphics().p("AnyDHIDwqcIL1EPIjwKcg");
	var mask_3_graphics_292 = new cjs.Graphics().p("An2DSID4qyIL1EPIj4Kyg");
	var mask_3_graphics_293 = new cjs.Graphics().p("An6DdID/rIIL2EPIj/LIg");
	var mask_3_graphics_294 = new cjs.Graphics().p("An+DoIEHreIL2EPIkHLeg");
	var mask_3_graphics_295 = new cjs.Graphics().p("AoCDyIEPrzIL1EQIkOLzg");
	var mask_3_graphics_296 = new cjs.Graphics().p("AoGD9IEXsIIL1EPIkWMIg");
	var mask_3_graphics_297 = new cjs.Graphics().p("AoJEIIEeseIL1EPIkeMeg");
	var mask_3_graphics_298 = new cjs.Graphics().p("AoNETIEms0IL1EPIkmM0g");
	var mask_3_graphics_299 = new cjs.Graphics().p("AoREeIEutKIL1EPIkuNKg");
	var mask_3_graphics_300 = new cjs.Graphics().p("AoVEoIE2tfIL1EQIk2Nfg");
	var mask_3_graphics_301 = new cjs.Graphics().p("AoZEzIE9t0IL2EPIk9N0g");
	var mask_3_graphics_302 = new cjs.Graphics().p("AocE+IFEuKIL1EPIlEOLg");
	var mask_3_graphics_303 = new cjs.Graphics().p("AohFJIFNugIL1EPIlMOgg");
	var mask_3_graphics_304 = new cjs.Graphics().p("AokFUIFUu2IL1EPIlUO2g");
	var mask_3_graphics_305 = new cjs.Graphics().p("AooFeIFcvLIL1EQIlcPLg");
	var mask_3_graphics_306 = new cjs.Graphics().p("AosFpIFkvgIL1EPIlkPgg");
	var mask_3_graphics_307 = new cjs.Graphics().p("AowF0IFsv2IL1EPIlsP3g");
	var mask_3_graphics_308 = new cjs.Graphics().p("Ao0F/IFzwMIL2EPIlzQMg");
	var mask_3_graphics_309 = new cjs.Graphics().p("Ao4GKIF7wiIL2EPIl7Qig");
	var mask_3_graphics_310 = new cjs.Graphics().p("Ao8GUIGDw3IL1EQImCQ3g");
	var mask_3_graphics_311 = new cjs.Graphics().p("ApAGfIGLxMIL1EPImKRMg");
	var mask_3_graphics_312 = new cjs.Graphics().p("ApDGqIGSxiIL1EPImSRjg");
	var mask_3_graphics_313 = new cjs.Graphics().p("ApHG1IGax4IL1EPImaR4g");
	var mask_3_graphics_314 = new cjs.Graphics().p("ApLHAIGiyOIL1EPImiSOg");
	var mask_3_graphics_315 = new cjs.Graphics().p("ApPHKIGpyjIL2EQImpSjg");
	var mask_3_graphics_316 = new cjs.Graphics().p("ApTHVIGxy4IL2EPImxS4g");
	var mask_3_graphics_317 = new cjs.Graphics().p("ApXHgIG5zOIL1EPIm4TOg");
	var mask_3_graphics_318 = new cjs.Graphics().p("ApbHrIHBzkIL1EPInATkg");
	var mask_3_graphics_319 = new cjs.Graphics().p("ApeH2IHIz6IL1EPInIT6g");
	var mask_3_graphics_320 = new cjs.Graphics().p("ApiIAIHQ0PIL1EQInQUPg");
	var mask_3_graphics_321 = new cjs.Graphics().p("ApmILIHY0kIL1EPInYUkg");
	var mask_3_graphics_322 = new cjs.Graphics().p("ApqIWIHg06IL1EPInfU6g");
	var mask_3_graphics_323 = new cjs.Graphics().p("ApuIhIHn1QIL2EPInnVQg");
	var mask_3_graphics_324 = new cjs.Graphics().p("ApyIsIHv1mIL2EPInvVmg");
	var mask_3_graphics_325 = new cjs.Graphics().p("Ap2I2IH317IL1EQIn2V7g");
	var mask_3_graphics_326 = new cjs.Graphics().p("Ap6JBIH/2QIL1EPIn+WQg");
	var mask_3_graphics_327 = new cjs.Graphics().p("Ap9JMIIG2mIL1EPIoGWmg");
	var mask_3_graphics_328 = new cjs.Graphics().p("AqBJXIIO28IL1EPIoOW8g");
	var mask_3_graphics_329 = new cjs.Graphics().p("AqFJiIIW3SIL1EPIoVXSg");
	var mask_3_graphics_330 = new cjs.Graphics().p("AqJJsIId3nIL2EQIodXng");
	var mask_3_graphics_331 = new cjs.Graphics().p("AqNJ3IIl38IL2EPIolX8g");
	var mask_3_graphics_332 = new cjs.Graphics().p("AqRKCIIt4SIL1EPIosYSg");
	var mask_3_graphics_333 = new cjs.Graphics().p("AqVKNII14oIL2EPIo1Yog");
	var mask_3_graphics_334 = new cjs.Graphics().p("AqYKYII84+IL2EPIo9Y+g");
	var mask_3_graphics_335 = new cjs.Graphics().p("AqdKiIJF5TIL2EQIpFZTg");
	var mask_3_graphics_336 = new cjs.Graphics().p("AqgKtIJM5oIL1EPIpMZog");
	var mask_3_graphics_337 = new cjs.Graphics().p("AqkK4IJU5+IL1EPIpUZ+g");
	var mask_3_graphics_338 = new cjs.Graphics().p("AqoLDIJb6UIL2EPIpcaUg");
	var mask_3_graphics_339 = new cjs.Graphics().p("AqsLOIJj6qIL2EPIpjaqg");
	var mask_3_graphics_340 = new cjs.Graphics().p("AqwLYIJr6/IL2EQIpra/g");
	var mask_3_graphics_341 = new cjs.Graphics().p("Aq0LjIJz7UIL2EPIpzbUg");
	var mask_3_graphics_342 = new cjs.Graphics().p("Aq4LuIJ77qIL2EPIp7bqg");
	var mask_3_graphics_343 = new cjs.Graphics().p("Aq7L5IKC8AIL1EPIqCcAg");
	var mask_3_graphics_344 = new cjs.Graphics().p("Aq/MEIKK8WIL1EPIqKcWg");
	var mask_3_graphics_345 = new cjs.Graphics().p("ArDMOIKR8rIL2EQIqScrg");
	var mask_3_graphics_346 = new cjs.Graphics().p("ArHMZIKZ9AIL2EPIqadAg");
	var mask_3_graphics_347 = new cjs.Graphics().p("ArLMkIKh9WIL2EPIqhdWg");
	var mask_3_graphics_348 = new cjs.Graphics().p("ArPMvIKp9sIL2EPIqpdsg");
	var mask_3_graphics_349 = new cjs.Graphics().p("ArTM6IKx+CIL2EPIqxeCg");
	var mask_3_graphics_350 = new cjs.Graphics().p("ArXNEIK5+XIL2EQIq5eXg");
	var mask_3_graphics_351 = new cjs.Graphics().p("AraNPILA+sIL1EPIrAesg");
	var mask_3_graphics_352 = new cjs.Graphics().p("AreNaILH/CIL2EPIrIfCg");
	var mask_3_graphics_353 = new cjs.Graphics().p("AriNkILP/XIL2EPIrQfYg");
	var mask_3_graphics_354 = new cjs.Graphics().p("ArmNwILX/uIL2EPIrXfug");
	var mask_3_graphics_355 = new cjs.Graphics().p("ArqN6MALfggDIL2EQMgLfAgDg");
	var mask_3_graphics_356 = new cjs.Graphics().p("AruOFMALnggYIL2EPMgLnAgYg");
	var mask_3_graphics_357 = new cjs.Graphics().p("AryOQMALvgguIL2EPMgLvAgug");
	var mask_3_graphics_358 = new cjs.Graphics().p("Ar1OaMAL1ghDIL2EPMgL2AhEg");
	var mask_3_graphics_359 = new cjs.Graphics().p("Ar5OmMAL9ghaIL2EPMgL9Ahag");
	var mask_3_graphics_360 = new cjs.Graphics().p("Ar9OwMAMEghvIL3EQMgMFAhvg");
	var mask_3_graphics_361 = new cjs.Graphics().p("AsBO7MAMMgiEIL3EPMgMMAiEg");
	var mask_3_graphics_362 = new cjs.Graphics().p("AsFPGMAMUgiaIL3EPMgMUAiag");
	var mask_3_graphics_363 = new cjs.Graphics().p("AsJPQMAMcgivIL3EPMgMcAiwg");
	var mask_3_graphics_364 = new cjs.Graphics().p("AsNPcMAMkgjGIL3EPMgMkAjGg");
	var mask_3_graphics_365 = new cjs.Graphics().p("AsQPmMAMrgjbIL2EQMgMrAjbg");
	var mask_3_graphics_366 = new cjs.Graphics().p("AsUPxMAMzgjwIL2EPMgMzAjwg");
	var mask_3_graphics_367 = new cjs.Graphics().p("AsYP8MAM6gkGIL3EPMgM7AkGg");
	var mask_3_graphics_368 = new cjs.Graphics().p("AscQHMANCgkcIL3EPMgNCAkcg");
	var mask_3_graphics_369 = new cjs.Graphics().p("AsgQSMANKgkyIL3EPMgNKAkyg");
	var mask_3_graphics_370 = new cjs.Graphics().p("AskQcMANSglHIL3EQMgNSAlHg");
	var mask_3_graphics_371 = new cjs.Graphics().p("AsoQnMANaglcIL3EPMgNaAlcg");
	var mask_3_graphics_372 = new cjs.Graphics().p("AssQyMANiglyIL3EPMgNiAlyg");
	var mask_3_graphics_373 = new cjs.Graphics().p("AsvQ9MANpgmIIL2EPMgNpAmIg");
	var mask_3_graphics_374 = new cjs.Graphics().p("AszRIMANxgmeIL2EPMgNxAmeg");
	var mask_3_graphics_375 = new cjs.Graphics().p("As3RSMAN4gmzIL3EQMgN4Amzg");
	var mask_3_graphics_376 = new cjs.Graphics().p("As7RdMAOAgnIIL3EPMgOAAnIg");
	var mask_3_graphics_377 = new cjs.Graphics().p("As/RoMAOIgneIL3EPMgOIAneg");
	var mask_3_graphics_378 = new cjs.Graphics().p("AtDRzMAOQgn0IL3EPMgOQAn0g");
	var mask_3_graphics_379 = new cjs.Graphics().p("AtHR+MAOYgoKIL3EPMgOYAoKg");
	var mask_3_graphics_380 = new cjs.Graphics().p("AtKSIMAOfgofIL2EQMgOfAofg");
	var mask_3_graphics_381 = new cjs.Graphics().p("AtOSTMAOngo0IL2EPMgOnAo0g");
	var mask_3_graphics_382 = new cjs.Graphics().p("AtSSeMAOugpKIL3EPMgOuApKg");
	var mask_3_graphics_383 = new cjs.Graphics().p("AtWSoMAO2gpfIL3EPMgO2Apgg");
	var mask_3_graphics_384 = new cjs.Graphics().p("AtaS0MAO+gp2IL3EPMgO+Ap2g");
	var mask_3_graphics_385 = new cjs.Graphics().p("AteS+MAPGgqLIL3EQMgPGAqLg");
	var mask_3_graphics_386 = new cjs.Graphics().p("AtiTJMAPOgqgIL3EPMgPOAqgg");
	var mask_3_graphics_387 = new cjs.Graphics().p("AtmTUMAPWgq2IL3EPMgPWAq2g");
	var mask_3_graphics_388 = new cjs.Graphics().p("AtpTeMAPdgrLIL2EPMgPdArMg");
	var mask_3_graphics_389 = new cjs.Graphics().p("AttTqMAPkgriIL3EPMgPkArig");
	var mask_3_graphics_390 = new cjs.Graphics().p("AtxT0MAPsgr3IL3EQMgPsAr3g");
	var mask_3_graphics_391 = new cjs.Graphics().p("At1T/MAP0gsMIL3EPMgP0AsMg");
	var mask_3_graphics_392 = new cjs.Graphics().p("At5UKMAP8gsiIL3EPMgP8Asig");
	var mask_3_graphics_393 = new cjs.Graphics().p("At9UUMAQEgs3IL3EPMgQEAs4g");
	var mask_3_graphics_394 = new cjs.Graphics().p("AuBUgMAQMgtOIL3EPMgQMAtOg");
	var mask_3_graphics_395 = new cjs.Graphics().p("AuEUqMAQTgtjIL2EQMgQTAtjg");
	var mask_3_graphics_396 = new cjs.Graphics().p("AuIU1MAQbgt4IL2EPMgQbAt4g");
	var mask_3_graphics_397 = new cjs.Graphics().p("AuMVAMAQiguOIL3EPMgQiAuOg");
	var mask_3_graphics_398 = new cjs.Graphics().p("AuQVKMAQqgujIL3EPMgQqAukg");
	var mask_3_graphics_399 = new cjs.Graphics().p("AuUVWMAQygu6IL3EPMgQyAu6g");
	var mask_3_graphics_400 = new cjs.Graphics().p("AuYVgMAQ6gvPIL3EQMgQ6AvPg");
	var mask_3_graphics_401 = new cjs.Graphics().p("Ai3eIMARBgvkIL2EPMgRCAvlg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(264).to({graphics:mask_3_graphics_264,x:166.4,y:72}).wait(1).to({graphics:mask_3_graphics_265,x:293,y:127.2}).wait(1).to({graphics:mask_3_graphics_266,x:292.6,y:128.3}).wait(1).to({graphics:mask_3_graphics_267,x:292.2,y:129.4}).wait(1).to({graphics:mask_3_graphics_268,x:291.8,y:130.5}).wait(1).to({graphics:mask_3_graphics_269,x:291.5,y:131.6}).wait(1).to({graphics:mask_3_graphics_270,x:291.1,y:132.6}).wait(1).to({graphics:mask_3_graphics_271,x:290.7,y:133.7}).wait(1).to({graphics:mask_3_graphics_272,x:290.3,y:134.8}).wait(1).to({graphics:mask_3_graphics_273,x:289.9,y:135.9}).wait(1).to({graphics:mask_3_graphics_274,x:289.5,y:137}).wait(1).to({graphics:mask_3_graphics_275,x:289.1,y:138}).wait(1).to({graphics:mask_3_graphics_276,x:288.7,y:139.1}).wait(1).to({graphics:mask_3_graphics_277,x:288.4,y:140.2}).wait(1).to({graphics:mask_3_graphics_278,x:288,y:141.3}).wait(1).to({graphics:mask_3_graphics_279,x:287.6,y:142.4}).wait(1).to({graphics:mask_3_graphics_280,x:287.2,y:143.4}).wait(1).to({graphics:mask_3_graphics_281,x:286.8,y:144.5}).wait(1).to({graphics:mask_3_graphics_282,x:286.4,y:145.6}).wait(1).to({graphics:mask_3_graphics_283,x:286,y:146.7}).wait(1).to({graphics:mask_3_graphics_284,x:285.7,y:147.8}).wait(1).to({graphics:mask_3_graphics_285,x:285.3,y:148.8}).wait(1).to({graphics:mask_3_graphics_286,x:284.9,y:149.9}).wait(1).to({graphics:mask_3_graphics_287,x:284.5,y:151}).wait(1).to({graphics:mask_3_graphics_288,x:284.1,y:152.1}).wait(1).to({graphics:mask_3_graphics_289,x:283.7,y:153.2}).wait(1).to({graphics:mask_3_graphics_290,x:283.3,y:154.2}).wait(1).to({graphics:mask_3_graphics_291,x:283,y:155.3}).wait(1).to({graphics:mask_3_graphics_292,x:282.6,y:156.4}).wait(1).to({graphics:mask_3_graphics_293,x:282.2,y:157.5}).wait(1).to({graphics:mask_3_graphics_294,x:281.8,y:158.6}).wait(1).to({graphics:mask_3_graphics_295,x:281.4,y:159.6}).wait(1).to({graphics:mask_3_graphics_296,x:281,y:160.7}).wait(1).to({graphics:mask_3_graphics_297,x:280.6,y:161.8}).wait(1).to({graphics:mask_3_graphics_298,x:280.2,y:162.9}).wait(1).to({graphics:mask_3_graphics_299,x:279.9,y:164}).wait(1).to({graphics:mask_3_graphics_300,x:279.5,y:165}).wait(1).to({graphics:mask_3_graphics_301,x:279.1,y:166.1}).wait(1).to({graphics:mask_3_graphics_302,x:278.7,y:167.2}).wait(1).to({graphics:mask_3_graphics_303,x:278.3,y:168.3}).wait(1).to({graphics:mask_3_graphics_304,x:277.9,y:169.4}).wait(1).to({graphics:mask_3_graphics_305,x:277.5,y:170.4}).wait(1).to({graphics:mask_3_graphics_306,x:277.2,y:171.5}).wait(1).to({graphics:mask_3_graphics_307,x:276.8,y:172.6}).wait(1).to({graphics:mask_3_graphics_308,x:276.4,y:173.7}).wait(1).to({graphics:mask_3_graphics_309,x:276,y:174.8}).wait(1).to({graphics:mask_3_graphics_310,x:275.6,y:175.8}).wait(1).to({graphics:mask_3_graphics_311,x:275.2,y:176.9}).wait(1).to({graphics:mask_3_graphics_312,x:274.8,y:178}).wait(1).to({graphics:mask_3_graphics_313,x:274.4,y:179.1}).wait(1).to({graphics:mask_3_graphics_314,x:274.1,y:180.2}).wait(1).to({graphics:mask_3_graphics_315,x:273.7,y:181.2}).wait(1).to({graphics:mask_3_graphics_316,x:273.3,y:182.3}).wait(1).to({graphics:mask_3_graphics_317,x:272.9,y:183.4}).wait(1).to({graphics:mask_3_graphics_318,x:272.5,y:184.5}).wait(1).to({graphics:mask_3_graphics_319,x:272.1,y:185.6}).wait(1).to({graphics:mask_3_graphics_320,x:271.7,y:186.6}).wait(1).to({graphics:mask_3_graphics_321,x:271.4,y:187.7}).wait(1).to({graphics:mask_3_graphics_322,x:271,y:188.8}).wait(1).to({graphics:mask_3_graphics_323,x:270.6,y:189.9}).wait(1).to({graphics:mask_3_graphics_324,x:270.2,y:191}).wait(1).to({graphics:mask_3_graphics_325,x:269.8,y:192}).wait(1).to({graphics:mask_3_graphics_326,x:269.4,y:193.1}).wait(1).to({graphics:mask_3_graphics_327,x:269,y:194.2}).wait(1).to({graphics:mask_3_graphics_328,x:268.7,y:195.3}).wait(1).to({graphics:mask_3_graphics_329,x:268.3,y:196.4}).wait(1).to({graphics:mask_3_graphics_330,x:267.9,y:197.4}).wait(1).to({graphics:mask_3_graphics_331,x:267.5,y:198.5}).wait(1).to({graphics:mask_3_graphics_332,x:267.1,y:199.6}).wait(1).to({graphics:mask_3_graphics_333,x:266.7,y:200.7}).wait(1).to({graphics:mask_3_graphics_334,x:266.4,y:201.8}).wait(1).to({graphics:mask_3_graphics_335,x:266,y:202.8}).wait(1).to({graphics:mask_3_graphics_336,x:265.6,y:203.9}).wait(1).to({graphics:mask_3_graphics_337,x:265.2,y:205}).wait(1).to({graphics:mask_3_graphics_338,x:264.8,y:206.1}).wait(1).to({graphics:mask_3_graphics_339,x:264.4,y:207.2}).wait(1).to({graphics:mask_3_graphics_340,x:264,y:208.2}).wait(1).to({graphics:mask_3_graphics_341,x:263.7,y:209.3}).wait(1).to({graphics:mask_3_graphics_342,x:263.3,y:210.4}).wait(1).to({graphics:mask_3_graphics_343,x:262.9,y:211.5}).wait(1).to({graphics:mask_3_graphics_344,x:262.5,y:212.6}).wait(1).to({graphics:mask_3_graphics_345,x:262.1,y:213.6}).wait(1).to({graphics:mask_3_graphics_346,x:261.7,y:214.7}).wait(1).to({graphics:mask_3_graphics_347,x:261.3,y:215.8}).wait(1).to({graphics:mask_3_graphics_348,x:260.9,y:216.9}).wait(1).to({graphics:mask_3_graphics_349,x:260.6,y:218}).wait(1).to({graphics:mask_3_graphics_350,x:260.2,y:219}).wait(1).to({graphics:mask_3_graphics_351,x:259.8,y:220.1}).wait(1).to({graphics:mask_3_graphics_352,x:259.4,y:221.2}).wait(1).to({graphics:mask_3_graphics_353,x:259,y:222.3}).wait(1).to({graphics:mask_3_graphics_354,x:258.6,y:223.4}).wait(1).to({graphics:mask_3_graphics_355,x:258.2,y:224.4}).wait(1).to({graphics:mask_3_graphics_356,x:257.9,y:225.5}).wait(1).to({graphics:mask_3_graphics_357,x:257.5,y:226.6}).wait(1).to({graphics:mask_3_graphics_358,x:257.1,y:227.7}).wait(1).to({graphics:mask_3_graphics_359,x:256.7,y:228.8}).wait(1).to({graphics:mask_3_graphics_360,x:256.3,y:229.8}).wait(1).to({graphics:mask_3_graphics_361,x:255.9,y:230.9}).wait(1).to({graphics:mask_3_graphics_362,x:255.5,y:232}).wait(1).to({graphics:mask_3_graphics_363,x:255.1,y:233.1}).wait(1).to({graphics:mask_3_graphics_364,x:254.8,y:234.2}).wait(1).to({graphics:mask_3_graphics_365,x:254.4,y:235.2}).wait(1).to({graphics:mask_3_graphics_366,x:254,y:236.3}).wait(1).to({graphics:mask_3_graphics_367,x:253.6,y:237.4}).wait(1).to({graphics:mask_3_graphics_368,x:253.2,y:238.5}).wait(1).to({graphics:mask_3_graphics_369,x:252.8,y:239.6}).wait(1).to({graphics:mask_3_graphics_370,x:252.4,y:240.6}).wait(1).to({graphics:mask_3_graphics_371,x:252.1,y:241.7}).wait(1).to({graphics:mask_3_graphics_372,x:251.7,y:242.8}).wait(1).to({graphics:mask_3_graphics_373,x:251.3,y:243.9}).wait(1).to({graphics:mask_3_graphics_374,x:250.9,y:245}).wait(1).to({graphics:mask_3_graphics_375,x:250.5,y:246}).wait(1).to({graphics:mask_3_graphics_376,x:250.1,y:247.1}).wait(1).to({graphics:mask_3_graphics_377,x:249.7,y:248.2}).wait(1).to({graphics:mask_3_graphics_378,x:249.4,y:249.3}).wait(1).to({graphics:mask_3_graphics_379,x:249,y:250.4}).wait(1).to({graphics:mask_3_graphics_380,x:248.6,y:251.4}).wait(1).to({graphics:mask_3_graphics_381,x:248.2,y:252.5}).wait(1).to({graphics:mask_3_graphics_382,x:247.8,y:253.6}).wait(1).to({graphics:mask_3_graphics_383,x:247.4,y:254.7}).wait(1).to({graphics:mask_3_graphics_384,x:247,y:255.8}).wait(1).to({graphics:mask_3_graphics_385,x:246.6,y:256.8}).wait(1).to({graphics:mask_3_graphics_386,x:246.3,y:257.9}).wait(1).to({graphics:mask_3_graphics_387,x:245.9,y:259}).wait(1).to({graphics:mask_3_graphics_388,x:245.5,y:260.1}).wait(1).to({graphics:mask_3_graphics_389,x:245.1,y:261.2}).wait(1).to({graphics:mask_3_graphics_390,x:244.7,y:262.2}).wait(1).to({graphics:mask_3_graphics_391,x:244.3,y:263.3}).wait(1).to({graphics:mask_3_graphics_392,x:243.9,y:264.4}).wait(1).to({graphics:mask_3_graphics_393,x:243.6,y:265.5}).wait(1).to({graphics:mask_3_graphics_394,x:243.2,y:266.6}).wait(1).to({graphics:mask_3_graphics_395,x:242.8,y:267.6}).wait(1).to({graphics:mask_3_graphics_396,x:242.4,y:268.7}).wait(1).to({graphics:mask_3_graphics_397,x:242,y:269.8}).wait(1).to({graphics:mask_3_graphics_398,x:241.6,y:270.9}).wait(1).to({graphics:mask_3_graphics_399,x:241.2,y:272}).wait(1).to({graphics:mask_3_graphics_400,x:240.8,y:273}).wait(1).to({graphics:mask_3_graphics_401,x:166.4,y:220}).wait(342));

	// 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(20,1,1).p("AN+26QjcH5iEEPQiDEOhICfQhICfg6BnQg5Boh6ETQh5ETiUEEQiUEEh5CNQh5CMhpAKQhpAKg2hB");
	this.shape_4.setTransform(223.6,277);
	this.shape_4._off = true;

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(264).to({_off:false},0).wait(479));

	// Layer 16
	this.instance_3 = new lib.ar1("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(237.4,177.1,1,1,-175.3,0,0,-0.8,0.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).wait(734));

	// Layer 4 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_139 = new cjs.Graphics().p("AFzRgIBrhyIISH3IhrBxg");
	var mask_4_graphics_140 = new cjs.Graphics().p("AlEi7IB4h/IIRH2Ih4B/g");
	var mask_4_graphics_141 = new cjs.Graphics().p("AlLi0ICGiNIIRH2IiGCNg");
	var mask_4_graphics_142 = new cjs.Graphics().p("AlRitICTibIIQH2IiSCag");
	var mask_4_graphics_143 = new cjs.Graphics().p("AlYimICgipIIRH2IigCog");
	var mask_4_graphics_144 = new cjs.Graphics().p("AleifICti2IIQH1IisC2g");
	var mask_4_graphics_145 = new cjs.Graphics().p("AlliYIC6jEIIRH2Ii6DDg");
	var mask_4_graphics_146 = new cjs.Graphics().p("AlriRIDHjSIIQH1IjGDSg");
	var mask_4_graphics_147 = new cjs.Graphics().p("AlyiLIDUjfIIRH2IjUDfg");
	var mask_4_graphics_148 = new cjs.Graphics().p("Al4iEIDhjtIIQH2IjgDtg");
	var mask_4_graphics_149 = new cjs.Graphics().p("Al/h9IDuj7IIQH2IjtD6g");
	var mask_4_graphics_150 = new cjs.Graphics().p("AmFh2ID7kIIIQH1Ij6EIg");
	var mask_4_graphics_151 = new cjs.Graphics().p("AmMhvIEIkWIIQH1IkHEWg");
	var mask_4_graphics_152 = new cjs.Graphics().p("AmShoIEUkkIIRH1IkUEkg");
	var mask_4_graphics_153 = new cjs.Graphics().p("AmZhhIEikyIIQH2IkhExg");
	var mask_4_graphics_154 = new cjs.Graphics().p("AmfhbIEuk/IIRH2IkuE/g");
	var mask_4_graphics_155 = new cjs.Graphics().p("AmmhUIE8lNIIQH2Ik7FMg");
	var mask_4_graphics_156 = new cjs.Graphics().p("AmshNIFIlaIIRH1IlIFag");
	var mask_4_graphics_157 = new cjs.Graphics().p("AmzhGIFWloIIRH1IlWFog");
	var mask_4_graphics_158 = new cjs.Graphics().p("Am5g/IFil2IIRH1IliF2g");
	var mask_4_graphics_159 = new cjs.Graphics().p("AnAg4IFwmEIIRH1IlwGEg");
	var mask_4_graphics_160 = new cjs.Graphics().p("AnGgyIF8mRIIRH2Il8GRg");
	var mask_4_graphics_161 = new cjs.Graphics().p("AnNgrIGKmfIIRH2ImKGfg");
	var mask_4_graphics_162 = new cjs.Graphics().p("AnTgkIGXmsIIQH1ImWGsg");
	var mask_4_graphics_163 = new cjs.Graphics().p("AnagdIGkm7IIRH2ImkG6g");
	var mask_4_graphics_164 = new cjs.Graphics().p("AnggWIGxnIIIQH1ImwHIg");
	var mask_4_graphics_165 = new cjs.Graphics().p("AnngPIG+nWIIRH1Im+HWg");
	var mask_4_graphics_166 = new cjs.Graphics().p("AntgIIHLnkIIQH2InKHjg");
	var mask_4_graphics_167 = new cjs.Graphics().p("AnzgCIHXnxIIQH2InXHxg");
	var mask_4_graphics_168 = new cjs.Graphics().p("An6AEIHkn+IIRH3InkH+g");
	var mask_4_graphics_169 = new cjs.Graphics().p("AoAALIHxoLIIQH2InxILg");
	var mask_4_graphics_170 = new cjs.Graphics().p("AoHASIH+oZIIRH2In+IZg");
	var mask_4_graphics_171 = new cjs.Graphics().p("AoNAZIILonIIQH2IoLIng");
	var mask_4_graphics_172 = new cjs.Graphics().p("AoUAgIIXo1IISH3IoXI0g");
	var mask_4_graphics_173 = new cjs.Graphics().p("AoaAnIIkpDIIRH2IokJDg");
	var mask_4_graphics_174 = new cjs.Graphics().p("AohAtIIxpQIISH3IoxJQg");
	var mask_4_graphics_175 = new cjs.Graphics().p("AonA0II+pdIIRH2Io+Jdg");
	var mask_4_graphics_176 = new cjs.Graphics().p("AouA7IJLpsIISH3IpLJrg");
	var mask_4_graphics_177 = new cjs.Graphics().p("Ao0BCIJYp5IIRH2IpYJ5g");
	var mask_4_graphics_178 = new cjs.Graphics().p("Ao7BJIJlqHIISH2IplKHg");
	var mask_4_graphics_179 = new cjs.Graphics().p("ApBBQIJyqVIIRH2IpyKVg");
	var mask_4_graphics_180 = new cjs.Graphics().p("ApIBWIJ/qiIISH3Ip/Kig");
	var mask_4_graphics_181 = new cjs.Graphics().p("ApOBdIKMqwIIRH3IqMKwg");
	var mask_4_graphics_182 = new cjs.Graphics().p("ApVBkIKZq+IISH3IqZK9g");
	var mask_4_graphics_183 = new cjs.Graphics().p("ApbBrIKmrLIIRH2IqmLLg");
	var mask_4_graphics_184 = new cjs.Graphics().p("ApiByIKzrZIISH2IqzLZg");
	var mask_4_graphics_185 = new cjs.Graphics().p("ApoB5ILArnIIRH3IrALmg");
	var mask_4_graphics_186 = new cjs.Graphics().p("ApvCAILNr1IISH2IrNL1g");
	var mask_4_graphics_187 = new cjs.Graphics().p("Ap1CGILasCIIRH3IraMCg");
	var mask_4_graphics_188 = new cjs.Graphics().p("Ap8CNILnsQIISH3IrnMQg");
	var mask_4_graphics_189 = new cjs.Graphics().p("AqCCUIL0seIIRH3Ir0Mdg");
	var mask_4_graphics_190 = new cjs.Graphics().p("AqJCbIMBsrIISH2IsBMrg");
	var mask_4_graphics_191 = new cjs.Graphics().p("AqPCiIMOs5IIRH2IsOM5g");
	var mask_4_graphics_192 = new cjs.Graphics().p("AqWCpIMbtHIISH2IsbNHg");
	var mask_4_graphics_193 = new cjs.Graphics().p("AqcCvIMotUIIRH3IsoNUg");
	var mask_4_graphics_194 = new cjs.Graphics().p("AqjC2IM2tiIIRH3Is1Nig");
	var mask_4_graphics_195 = new cjs.Graphics().p("AqpC9INCtwIIRH3ItCNvg");
	var mask_4_graphics_196 = new cjs.Graphics().p("AqwDEINPt9IISH2ItPN9g");
	var mask_4_graphics_197 = new cjs.Graphics().p("Aq2DLINcuLIIRH2ItcOLg");
	var mask_4_graphics_198 = new cjs.Graphics().p("Aq9DSINpuZIISH2ItpOZg");
	var mask_4_graphics_199 = new cjs.Graphics().p("ArDDZIN2unIIRH3It2Omg");
	var mask_4_graphics_200 = new cjs.Graphics().p("ArKDfIODu0IISH3IuDO0g");
	var mask_4_graphics_201 = new cjs.Graphics().p("ArQDmIOQvCIIRH3IuQPCg");
	var mask_4_graphics_202 = new cjs.Graphics().p("ArXDtIOdvPIISH2IudPPg");
	var mask_4_graphics_203 = new cjs.Graphics().p("ArdD0IOqvdIISH2IurPdg");
	var mask_4_graphics_204 = new cjs.Graphics().p("ArkD7IO3vrIISH2Iu3Prg");
	var mask_4_graphics_205 = new cjs.Graphics().p("ArqECIPEv5IISH2IvFP5g");
	var mask_4_graphics_206 = new cjs.Graphics().p("ArxEJIPSwHIIRH3IvRQGg");
	var mask_4_graphics_207 = new cjs.Graphics().p("Ar3EPIPewUIISH3IvfQUg");
	var mask_4_graphics_208 = new cjs.Graphics().p("Ar+EWIPswhIIRH2IvrQhg");
	var mask_4_graphics_209 = new cjs.Graphics().p("AsEEdIP4wwIISH3Iv5Qvg");
	var mask_4_graphics_210 = new cjs.Graphics().p("AsLEkIQGw9IIRH2IwFQ9g");
	var mask_4_graphics_211 = new cjs.Graphics().p("AsRErIQSxLIIRH2IwSRLg");
	var mask_4_graphics_212 = new cjs.Graphics().p("AsYEyIQgxZIIRH3IwfRYg");
	var mask_4_graphics_213 = new cjs.Graphics().p("AseE4IQsxmIIRH3IwsRmg");
	var mask_4_graphics_214 = new cjs.Graphics().p("AslE/IQ5x0IISH3Iw5R0g");
	var mask_4_graphics_215 = new cjs.Graphics().p("AsrFGIRGyBIIRH2IxGSBg");
	var mask_4_graphics_216 = new cjs.Graphics().p("AsyFNIRTyQIISH3IxTSPg");
	var mask_4_graphics_217 = new cjs.Graphics().p("As4FUIRgydIIRH2IxgSdg");
	var mask_4_graphics_218 = new cjs.Graphics().p("As/FbIRtyrIISH3IxtSqg");
	var mask_4_graphics_219 = new cjs.Graphics().p("AtFFiIR6y5IIRH2Ix6S5g");
	var mask_4_graphics_220 = new cjs.Graphics().p("AtMFoISHzGIISH3IyHTGg");
	var mask_4_graphics_221 = new cjs.Graphics().p("AtSFvISUzUIIRH3IyUTUg");
	var mask_4_graphics_222 = new cjs.Graphics().p("AtZF2IShziIISH3IyhThg");
	var mask_4_graphics_223 = new cjs.Graphics().p("AtfF9ISuzvIIRH2IyuTvg");
	var mask_4_graphics_224 = new cjs.Graphics().p("AtmGEIS7z9IISH2Iy7T9g");
	var mask_4_graphics_225 = new cjs.Graphics().p("AtsGLITI0LIIRH3IzIUKg");
	var mask_4_graphics_226 = new cjs.Graphics().p("AtzGSITV0ZIISH2IzVUZg");
	var mask_4_graphics_227 = new cjs.Graphics().p("At5GYITi0mIIRH3IziUmg");
	var mask_4_graphics_228 = new cjs.Graphics().p("AuAGfITv00IISH3IzvUzg");
	var mask_4_graphics_229 = new cjs.Graphics().p("AuGGmIT81BIIRH2Iz8VBg");
	var mask_4_graphics_230 = new cjs.Graphics().p("AuNGtIUJ1PIISH2I0JVPg");
	var mask_4_graphics_231 = new cjs.Graphics().p("AuTG0IUW1dIIRH2I0WVdg");
	var mask_4_graphics_232 = new cjs.Graphics().p("AuaG7IUj1rIISH2I0jVrg");
	var mask_4_graphics_233 = new cjs.Graphics().p("AugHBIUw14IIRH3I0wV4g");
	var mask_4_graphics_234 = new cjs.Graphics().p("AunHIIU92GIISH3I09WGg");
	var mask_4_graphics_235 = new cjs.Graphics().p("AutHPIVK2UIIRH3I1KWTg");
	var mask_4_graphics_236 = new cjs.Graphics().p("Au0HWIVX2hIISH2I1XWhg");
	var mask_4_graphics_237 = new cjs.Graphics().p("Au6HdIVk2vIIRH2I1kWvg");
	var mask_4_graphics_238 = new cjs.Graphics().p("AvBHkIVx29IISH2I1xW9g");
	var mask_4_graphics_239 = new cjs.Graphics().p("AvHHrIV+3LIIRH3I1+XKg");
	var mask_4_graphics_240 = new cjs.Graphics().p("AvOHxIWL3YIISH3I2LXYg");
	var mask_4_graphics_241 = new cjs.Graphics().p("AvUH4IWY3mIIRH3I2YXmg");
	var mask_4_graphics_242 = new cjs.Graphics().p("AvbH/IWl3zIISH2I2lXzg");
	var mask_4_graphics_243 = new cjs.Graphics().p("AvhIGIWy4BIIRH2I2yYBg");
	var mask_4_graphics_244 = new cjs.Graphics().p("AvoINIW/4PIISH2I2/YPg");
	var mask_4_graphics_245 = new cjs.Graphics().p("AvuIUIXM4dIIRH3I3MYcg");
	var mask_4_graphics_246 = new cjs.Graphics().p("Av1IbIXZ4rIISH2I3ZYrg");
	var mask_4_graphics_247 = new cjs.Graphics().p("AlKRgIXm44IISH1I3nY5g");
	var mask_4_graphics_248 = new cjs.Graphics().p("AwWI+IYc5yIIRH3I4cZyg");
	var mask_4_graphics_249 = new cjs.Graphics().p("AmBRgIZU6rIIRH2I5Uasg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(139).to({graphics:mask_4_graphics_139,x:100.8,y:162.2}).wait(1).to({graphics:mask_4_graphics_140,x:170.4,y:293}).wait(1).to({graphics:mask_4_graphics_141,x:171.1,y:292.3}).wait(1).to({graphics:mask_4_graphics_142,x:171.7,y:291.6}).wait(1).to({graphics:mask_4_graphics_143,x:172.4,y:290.9}).wait(1).to({graphics:mask_4_graphics_144,x:173,y:290.2}).wait(1).to({graphics:mask_4_graphics_145,x:173.7,y:289.6}).wait(1).to({graphics:mask_4_graphics_146,x:174.3,y:288.9}).wait(1).to({graphics:mask_4_graphics_147,x:175,y:288.2}).wait(1).to({graphics:mask_4_graphics_148,x:175.6,y:287.5}).wait(1).to({graphics:mask_4_graphics_149,x:176.3,y:286.8}).wait(1).to({graphics:mask_4_graphics_150,x:176.9,y:286.1}).wait(1).to({graphics:mask_4_graphics_151,x:177.6,y:285.4}).wait(1).to({graphics:mask_4_graphics_152,x:178.2,y:284.8}).wait(1).to({graphics:mask_4_graphics_153,x:178.9,y:284.1}).wait(1).to({graphics:mask_4_graphics_154,x:179.5,y:283.4}).wait(1).to({graphics:mask_4_graphics_155,x:180.2,y:282.7}).wait(1).to({graphics:mask_4_graphics_156,x:180.8,y:282}).wait(1).to({graphics:mask_4_graphics_157,x:181.5,y:281.3}).wait(1).to({graphics:mask_4_graphics_158,x:182.1,y:280.6}).wait(1).to({graphics:mask_4_graphics_159,x:182.8,y:280}).wait(1).to({graphics:mask_4_graphics_160,x:183.4,y:279.3}).wait(1).to({graphics:mask_4_graphics_161,x:184.1,y:278.6}).wait(1).to({graphics:mask_4_graphics_162,x:184.7,y:277.9}).wait(1).to({graphics:mask_4_graphics_163,x:185.4,y:277.2}).wait(1).to({graphics:mask_4_graphics_164,x:186,y:276.5}).wait(1).to({graphics:mask_4_graphics_165,x:186.7,y:275.9}).wait(1).to({graphics:mask_4_graphics_166,x:187.3,y:275.2}).wait(1).to({graphics:mask_4_graphics_167,x:187.9,y:274.5}).wait(1).to({graphics:mask_4_graphics_168,x:188.6,y:273.8}).wait(1).to({graphics:mask_4_graphics_169,x:189.2,y:273.1}).wait(1).to({graphics:mask_4_graphics_170,x:189.9,y:272.4}).wait(1).to({graphics:mask_4_graphics_171,x:190.5,y:271.7}).wait(1).to({graphics:mask_4_graphics_172,x:191.2,y:271.1}).wait(1).to({graphics:mask_4_graphics_173,x:191.8,y:270.4}).wait(1).to({graphics:mask_4_graphics_174,x:192.5,y:269.7}).wait(1).to({graphics:mask_4_graphics_175,x:193.1,y:269}).wait(1).to({graphics:mask_4_graphics_176,x:193.8,y:268.3}).wait(1).to({graphics:mask_4_graphics_177,x:194.4,y:267.6}).wait(1).to({graphics:mask_4_graphics_178,x:195.1,y:266.9}).wait(1).to({graphics:mask_4_graphics_179,x:195.7,y:266.3}).wait(1).to({graphics:mask_4_graphics_180,x:196.4,y:265.6}).wait(1).to({graphics:mask_4_graphics_181,x:197,y:264.9}).wait(1).to({graphics:mask_4_graphics_182,x:197.7,y:264.2}).wait(1).to({graphics:mask_4_graphics_183,x:198.3,y:263.5}).wait(1).to({graphics:mask_4_graphics_184,x:199,y:262.8}).wait(1).to({graphics:mask_4_graphics_185,x:199.6,y:262.2}).wait(1).to({graphics:mask_4_graphics_186,x:200.3,y:261.5}).wait(1).to({graphics:mask_4_graphics_187,x:200.9,y:260.8}).wait(1).to({graphics:mask_4_graphics_188,x:201.6,y:260.1}).wait(1).to({graphics:mask_4_graphics_189,x:202.2,y:259.4}).wait(1).to({graphics:mask_4_graphics_190,x:202.9,y:258.7}).wait(1).to({graphics:mask_4_graphics_191,x:203.5,y:258}).wait(1).to({graphics:mask_4_graphics_192,x:204.2,y:257.4}).wait(1).to({graphics:mask_4_graphics_193,x:204.8,y:256.7}).wait(1).to({graphics:mask_4_graphics_194,x:205.5,y:256}).wait(1).to({graphics:mask_4_graphics_195,x:206.1,y:255.3}).wait(1).to({graphics:mask_4_graphics_196,x:206.8,y:254.6}).wait(1).to({graphics:mask_4_graphics_197,x:207.4,y:253.9}).wait(1).to({graphics:mask_4_graphics_198,x:208.1,y:253.3}).wait(1).to({graphics:mask_4_graphics_199,x:208.7,y:252.6}).wait(1).to({graphics:mask_4_graphics_200,x:209.4,y:251.9}).wait(1).to({graphics:mask_4_graphics_201,x:210,y:251.2}).wait(1).to({graphics:mask_4_graphics_202,x:210.7,y:250.5}).wait(1).to({graphics:mask_4_graphics_203,x:211.3,y:249.8}).wait(1).to({graphics:mask_4_graphics_204,x:212,y:249.1}).wait(1).to({graphics:mask_4_graphics_205,x:212.6,y:248.5}).wait(1).to({graphics:mask_4_graphics_206,x:213.3,y:247.8}).wait(1).to({graphics:mask_4_graphics_207,x:213.9,y:247.1}).wait(1).to({graphics:mask_4_graphics_208,x:214.6,y:246.4}).wait(1).to({graphics:mask_4_graphics_209,x:215.2,y:245.7}).wait(1).to({graphics:mask_4_graphics_210,x:215.9,y:245}).wait(1).to({graphics:mask_4_graphics_211,x:216.5,y:244.3}).wait(1).to({graphics:mask_4_graphics_212,x:217.2,y:243.7}).wait(1).to({graphics:mask_4_graphics_213,x:217.8,y:243}).wait(1).to({graphics:mask_4_graphics_214,x:218.5,y:242.3}).wait(1).to({graphics:mask_4_graphics_215,x:219.1,y:241.6}).wait(1).to({graphics:mask_4_graphics_216,x:219.8,y:240.9}).wait(1).to({graphics:mask_4_graphics_217,x:220.4,y:240.2}).wait(1).to({graphics:mask_4_graphics_218,x:221.1,y:239.6}).wait(1).to({graphics:mask_4_graphics_219,x:221.7,y:238.9}).wait(1).to({graphics:mask_4_graphics_220,x:222.4,y:238.2}).wait(1).to({graphics:mask_4_graphics_221,x:223,y:237.5}).wait(1).to({graphics:mask_4_graphics_222,x:223.6,y:236.8}).wait(1).to({graphics:mask_4_graphics_223,x:224.3,y:236.1}).wait(1).to({graphics:mask_4_graphics_224,x:224.9,y:235.4}).wait(1).to({graphics:mask_4_graphics_225,x:225.6,y:234.8}).wait(1).to({graphics:mask_4_graphics_226,x:226.2,y:234.1}).wait(1).to({graphics:mask_4_graphics_227,x:226.9,y:233.4}).wait(1).to({graphics:mask_4_graphics_228,x:227.5,y:232.7}).wait(1).to({graphics:mask_4_graphics_229,x:228.2,y:232}).wait(1).to({graphics:mask_4_graphics_230,x:228.8,y:231.3}).wait(1).to({graphics:mask_4_graphics_231,x:229.5,y:230.6}).wait(1).to({graphics:mask_4_graphics_232,x:230.1,y:230}).wait(1).to({graphics:mask_4_graphics_233,x:230.8,y:229.3}).wait(1).to({graphics:mask_4_graphics_234,x:231.4,y:228.6}).wait(1).to({graphics:mask_4_graphics_235,x:232.1,y:227.9}).wait(1).to({graphics:mask_4_graphics_236,x:232.7,y:227.2}).wait(1).to({graphics:mask_4_graphics_237,x:233.4,y:226.5}).wait(1).to({graphics:mask_4_graphics_238,x:234,y:225.9}).wait(1).to({graphics:mask_4_graphics_239,x:234.7,y:225.2}).wait(1).to({graphics:mask_4_graphics_240,x:235.3,y:224.5}).wait(1).to({graphics:mask_4_graphics_241,x:236,y:223.8}).wait(1).to({graphics:mask_4_graphics_242,x:236.6,y:223.1}).wait(1).to({graphics:mask_4_graphics_243,x:237.3,y:222.4}).wait(1).to({graphics:mask_4_graphics_244,x:237.9,y:221.7}).wait(1).to({graphics:mask_4_graphics_245,x:238.6,y:221.1}).wait(1).to({graphics:mask_4_graphics_246,x:239.2,y:220.4}).wait(1).to({graphics:mask_4_graphics_247,x:171,y:162.2}).wait(1).to({graphics:mask_4_graphics_248,x:242.6,y:216.9}).wait(1).to({graphics:mask_4_graphics_249,x:176.4,y:162.3}).wait(494));

	// Layer 2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(20,1,1).p("ANIq+QgwgVg5gJQkZgukEBwQkRB1jlCRQjkCSi6EZQi7EaBfEKQBfEKESiJQESiIDDinQDDinCwjFQCwjFB9joQBQiVBHia");
	this.shape_5.setTransform(228.2,200.3);
	this.shape_5._off = true;

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(139).to({_off:false},0).wait(604));

	// Layer 7 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_130 = new cjs.Graphics().p("Ao3GkQBZn9GnkpQGmkpH9BZQH9BYEqGnI/5WbQkqmoBZn8g");
	var mask_5_graphics_131 = new cjs.Graphics().p("Ao0GxQBPn+GikxQGhkxH+BQQH/BPExGhI/fXAQkxmiBQn+g");
	var mask_5_graphics_132 = new cjs.Graphics().p("AoxG/QBGoAGck5QGbk5IABHQIABFE5GcI/DXlQk5mcBGn/g");
	var mask_5_graphics_133 = new cjs.Graphics().p("AotHMQA8oBGXlAQGVlBIBA+QICA8FAGWI+nYJQlBmWA9oBg");
	var mask_5_graphics_134 = new cjs.Graphics().p("AopHaQAzoCGRlIQGPlIIDA0QICAzFIGQI+LYtQlImQAzoCg");
	var mask_5_graphics_135 = new cjs.Graphics().p("AokHoQAqoDGKlPQGKlQIDArQIEApFPGKI9uZRQlQmKAqoDg");
	var mask_5_graphics_136 = new cjs.Graphics().p("AoeH2QAgoEGElWQGDlXIFAhQIEAgFWGEI9QZ0QlWmEAgoEg");
	var mask_5_graphics_137 = new cjs.Graphics().p("AoYIFQAXoFF+leQF8ldIFAXQIFAWFeF+I8yaXQlel+AXoEg");
	var mask_5_graphics_138 = new cjs.Graphics().p("AoRITQANoGF3lkQF3lkIFAOQIFAMFlF4I8Ta4Qlll3AOoFg");
	var mask_5_graphics_139 = new cjs.Graphics().p("AoKIiQAEoGFxlrQFvlsIGAFQIGADFrFxI7zbaQlslxAEoFg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(130).to({graphics:mask_5_graphics_130,x:168.3,y:135.2}).wait(1).to({graphics:mask_5_graphics_131,x:167.6,y:136.1}).wait(1).to({graphics:mask_5_graphics_132,x:166.9,y:137}).wait(1).to({graphics:mask_5_graphics_133,x:166.2,y:137.9}).wait(1).to({graphics:mask_5_graphics_134,x:165.5,y:138.8}).wait(1).to({graphics:mask_5_graphics_135,x:164.8,y:139.7}).wait(1).to({graphics:mask_5_graphics_136,x:164,y:140.6}).wait(1).to({graphics:mask_5_graphics_137,x:163.3,y:141.5}).wait(1).to({graphics:mask_5_graphics_138,x:162.5,y:142.3}).wait(1).to({graphics:mask_5_graphics_139,x:161.7,y:143.2}).wait(604));

	// Layer 5
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(20,1,1).p("ANMq+QgxgVg5gJQkYgukFBwQkRB1jkCRQjlCSi6EZQi6EaBeEKQALAeANAYQBBB/B9gGQATgBAVgE");
	this.shape_6.setTransform(227.8,200.3);
	this.shape_6._off = true;

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(130).to({_off:false},0).wait(613));

	// Layer 1 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_9 = new cjs.Graphics().p("AHUZKQoDgelYmDIdN56QFYGDgfIDQgfIFmEFYQliE7nQAAQgqAAgsgDg");
	var mask_6_graphics_10 = new cjs.Graphics().p("AHtZMQoEgUlgl9Ict6eQFfF8gVIEQgVIGl8FfQlnFLngAAIg7gBg");
	var mask_6_graphics_11 = new cjs.Graphics().p("AIFZMQoFgJlml2IcL7CQFmF2gKIDQgLIHl2FmQlqFcnxAAIgggBg");
	var mask_6_graphics_12 = new cjs.Graphics().p("AIeZNQoGAAltlvIbp7lQFuFvgBIEQAAIGlvFuQluFtoDAAIgDAAg");
	var mask_6_graphics_13 = new cjs.Graphics().p("AlDTwIbF8IQF1FoAKIEQAJIGlnF1QlnF1oGAJIgdAAQnzAAlpldg");
	var mask_6_graphics_14 = new cjs.Graphics().p("AkyUAIai8oQF8FgAUIDQAUIGlgF8QlgF8oGATIg4ABQniAAlmlNg");
	var mask_6_graphics_15 = new cjs.Graphics().p("AkgURIZ+9KQGDFZAeIDQAeIFlZGDQlYGCoFAeQgqACgqAAQnQAAljk8g");
	var mask_6_graphics_16 = new cjs.Graphics().p("AkNUhIZY9qQGKFRAoICQAoIFlRGJQlRGKoEAnQg4AEg2AAQnAAAleksg");
	var mask_6_graphics_17 = new cjs.Graphics().p("Aj7UwIY0+JQGQFJAyICQAyIDlJGQQlJGQoEAyQhFAGhCAAQmxAAlakdg");
	var mask_6_graphics_18 = new cjs.Graphics().p("AjoVAIYN+oQGXFBA8IAQA8IDlBGWQlBGXoCA7QhSAKhQAAQmhAAlVkOg");
	var mask_6_graphics_19 = new cjs.Graphics().p("AjVVPIXn/HQGcE6BGH/QBHIBk5GdQk6GcoABGQhfANhbAAQmTAAlQj/g");
	var mask_6_graphics_20 = new cjs.Graphics().p("AjBVdIW//jQGjExBQH9QBQIAkxGjQkxGjn/BPQhsARhnAAQmEAAlKjxg");
	var mask_6_graphics_21 = new cjs.Graphics().p("AitVrMAWXggAQGoEpBbH8QBaH+kpGpQkpGon9BaQh4AVhzAAQl2AAlEjjg");
	var mask_6_graphics_22 = new cjs.Graphics().p("AiZV5MAVvggcQGuEhBkH6QBkH8kgGvQkhGun8BjQiDAbh+AAQlqAAk9jWg");
	var mask_6_graphics_23 = new cjs.Graphics().p("AiFWGMAVGgg2QG0EYBuH4QBuH6kYG0QkYG0n6BtQiPAgiKAAQlcAAk3jJg");
	var mask_6_graphics_24 = new cjs.Graphics().p("AhwWTMAUcghQQG5EPB4H2QB4H4kPG5QkPG5n4B4QibAliVAAQlPAAkwi8g");
	var mask_6_graphics_25 = new cjs.Graphics().p("AhcWgMATzghqQG+EHCCHzQCCH2kHG+QkGG/n1CBQinArigAAQlCAAkqivg");
	var mask_6_graphics_26 = new cjs.Graphics().p("AhHWsMATJgiCQHDD+CLHwQCMHzj+HEQj9HDnzCLQixAyisAAQk2AAkiijg");
	var mask_6_graphics_27 = new cjs.Graphics().p("AgxW4MASdgiaQHID1CVHuQCWHwj1HIQj1HJnwCUQi8A5i2AAQkqAAkaiXg");
	var mask_6_graphics_28 = new cjs.Graphics().p("AgcXDMARygiwQHNDsCfHrQCfHtjsHNQjsHNnsCeQjHBBjCAAQkeAAkSiNg");
	var mask_6_graphics_29 = new cjs.Graphics().p("AgGXOMARGgjGQHSDjCoHoQCpHpjjHSQjjHRnpCoQjRBJjNAAQkSAAkKiCg");
	var mask_6_graphics_30 = new cjs.Graphics().p("AAPXYMAQbgjbQHWDaCyHlQCyHmjZHWQjaHWnmCxQjbBRjYAAQkHAAkCh4g");
	var mask_6_graphics_31 = new cjs.Graphics().p("AAmXiMAPugjvQHaDRC7HhQC8HijQHaQjRHaniC7QjlBajjAAQj7AAj5hug");
	var mask_6_graphics_32 = new cjs.Graphics().p("AA8XsMAPBgkCQHeDHDFHeQDFHejHHeQjHHenfDEQjuBjjuAAQjwAAjwhkg");
	var mask_6_graphics_33 = new cjs.Graphics().p("ABTX1MAOTgkVQHiC+DOHaQDPHai+HiQi9HinbDOQj4Bsj5AAQjlAAjmhbg");
	var mask_6_graphics_34 = new cjs.Graphics().p("ABqX+MANmgkmQHlC0DXHWQDYHWi0HlQi0HmnXDXQkAB2kFAAQjaAAjchSg");
	var mask_6_graphics_35 = new cjs.Graphics().p("ACBYHMAM4gk3QHoCqDhHSQDhHSiqHpQirHonTDhQkJCAkQAAQjPAAjShJg");
	var mask_6_graphics_36 = new cjs.Graphics().p("ACYYOMAMJglGQHtChDpHNQDrHNiiHsQihHtnODpQkRCLkcAAQjEAAjIhCg");
	var mask_6_graphics_37 = new cjs.Graphics().p("ACvYWMALbglVQHvCXDzHIQDzHJiXHvQiYHwnJDyQkZCWkpAAQi4AAi+g6g");
	var mask_6_graphics_38 = new cjs.Graphics().p("ADHYdMAKsgljQHyCOD7HDQD9HEiOHyQiOHynED7QkiCik0AAQitAAizgzg");
	var mask_6_graphics_39 = new cjs.Graphics().p("ADfYkMAJ8glwQH1CEEEG+QEFG/iEH0QiDH1nAEEQkpCulAAAQiiAAiogsg");
	var mask_6_graphics_40 = new cjs.Graphics().p("AD2YqMAJOgl8QH3B6ENG5QEOG6h6H3Qh7H3m6ENQkwC6lNAAQiXAAidgmg");
	var mask_6_graphics_41 = new cjs.Graphics().p("AEOYwMAIegmIQH5BxEWG0QEWG0hwH5QhwH6m1EVQk3DHlaAAQiLAAiSggg");
	var mask_6_graphics_42 = new cjs.Graphics().p("AEmY1MAHugmRQH8BmEeGuQEfGvhnH8QhmH7mvEeQk+DUlnAAQiAAAiGgbg");
	var mask_6_graphics_43 = new cjs.Graphics().p("AE/Y6MAG9gmbQH+BdEmGoQEnGphcH+QhcH9mqEnQlEDhl1AAQh0AAh5gWg");
	var mask_6_graphics_44 = new cjs.Graphics().p("AFXY+MAGNgmjQH/BSEvGjQEvGjhSIAQhSH/mkEuQlKDvmCAAQhpAAhtgRg");
	var mask_6_graphics_45 = new cjs.Graphics().p("AGDZEMAE2gmvQICBBE9GXQE+GZhAIBQhBICmZE9QlTEJmdAAQhTAAhWgLg");
	var mask_6_graphics_46 = new cjs.Graphics().p("AGuZJMADfgm4QIEAuFLGNQFNGNgvIDQguIEmNFLQlcEkm4AAQg+AAg/gGg");
	var mask_6_graphics_47 = new cjs.Graphics().p("AHbZNMACHgm/QIFAcFZGBQFaGCgcIEQgcIFmCFZQlkFAnVAAQgmAAgmgCg");
	var mask_6_graphics_48 = new cjs.Graphics().p("AIHZPMAAvgnCQIFAKFnF0QFnF1gKIFQgJIGl2FmQlqFen0AAIgbAAg");
	var mask_6_graphics_49 = new cjs.Graphics().p("AIKtzQIGgIFzFnQF0FpAIIEQAJIGloFzQloF0oFAJg");
	var mask_6_graphics_50 = new cjs.Graphics().p("AHetwQIFgbGAFaQGAFbAbIEQAaIFlbGAQlaGBoFAag");
	var mask_6_graphics_51 = new cjs.Graphics().p("AGytrQIEgtGLFMQGNFNAtIDQAsIElNGLQlMGNoEAtg");
	var mask_6_graphics_52 = new cjs.Graphics().p("AGGtkQICg/GXE+QGYE/A/IBQA/IClAGXQk+GYoBA/g");
	var mask_6_graphics_53 = new cjs.Graphics().p("AFatbQH/hRGiEwQGjEwBRH+QBRIAkwGiQkwGjn/BRg");
	var mask_6_graphics_54 = new cjs.Graphics().p("AEvtPQH8hjGsEhQGuEhBiH7QBjH8khGtQkhGtn8Bjg");
	var mask_6_graphics_55 = new cjs.Graphics().p("AEEtBQH4h1G2ERQG3ETB1H3QB1H4kTG3QkRG3n4B0g");
	var mask_6_graphics_56 = new cjs.Graphics().p("ADZsxQH0iHG/ECQHBEDCGHzQCGH0kCG/QkCHBn0CGg");
	var mask_6_graphics_57 = new cjs.Graphics().p("ACusfQHviYHIDyQHKDzCYHuQCYHvjzHIQjyHJnvCYg");
	var mask_6_graphics_58 = new cjs.Graphics().p("ACFsKQHpipHQDiQHSDiCpHpQCpHojjHRQjhHRnpCpg");
	var mask_6_graphics_59 = new cjs.Graphics().p("ABbrzQHji6HYDRQHaDSC6HiQC6HijSHZQjRHZnjC6g");
	var mask_6_graphics_60 = new cjs.Graphics().p("AAzraQHcjLHfDAQHgDBDLHcQDLHbjBHgQjAHgncDLg");
	var mask_6_graphics_61 = new cjs.Graphics().p("AALq/QHUjcHmCwQHnCwDbHUQDcHUiwHmQivHmnVDcg");
	var mask_6_graphics_62 = new cjs.Graphics().p("AgbqiQHLjsHsCeQHsCfDsHNQDsHLifHsQieHsnMDsg");
	var mask_6_graphics_63 = new cjs.Graphics().p("AhCqDQHDj8HxCNQHyCOD8HDQD8HDiOHxQiNHynDD8g");
	var mask_6_graphics_64 = new cjs.Graphics().p("AhnphQG5kMH2B7QH2B8EMG7QEMG5h9H2Qh6H2m7EMg");
	var mask_6_graphics_65 = new cjs.Graphics().p("AiMo+QGwkbH5BpQH7BqEbGxQEbGwhrH6QhpH6mxEbg");
	var mask_6_graphics_66 = new cjs.Graphics().p("AiwoZQGmkqH8BYQH+BYEqGnQErGlhZH9QhXH+mnEqg");
	var mask_6_graphics_67 = new cjs.Graphics().p("AjTnyQGbk5H/BGQIBBGE5GcQE5GbhHIAQhFIAmcE5g");
	var mask_6_graphics_68 = new cjs.Graphics().p("Aj1nJQGPlHICA0QIDA0FHGRQFHGPg0ICQg0IDmQFHg");
	var mask_6_graphics_69 = new cjs.Graphics().p("AkWmeQGElVIDAiQIEAhFVGFQFVGEgjIEQghIEmFFVg");
	var mask_6_graphics_70 = new cjs.Graphics().p("Ak2lyQF3liIEAPQIFAQFjF5QFiF3gQIFQgPIEl5Fjg");
	var mask_6_graphics_71 = new cjs.Graphics().p("AlWlEQFrlvIEgDQIGgCFvFsQFwFrABIEQAEIFlsFwg");
	var mask_6_graphics_72 = new cjs.Graphics().p("Al0kUQFfl8ICgVQIFgUF8FeQF8FeAUIFQAWIElfF8g");
	var mask_6_graphics_73 = new cjs.Graphics().p("AmRjjQFRmIIBgmQIEgnGIFRQGJFRAmICQAnIDlRGJg");
	var mask_6_graphics_74 = new cjs.Graphics().p("AmtiwQFDmTH/g5QIDg5GTFDQGUFDA4IBQA6IBlDGUg");
	var mask_6_graphics_75 = new cjs.Graphics().p("AnAiNQE6mbH+hFQIBhFGbE6QGbE5BFH/QBFIAk5Gbg");
	var mask_6_graphics_76 = new cjs.Graphics().p("AnShpQEwmjH9hRQH/hRGiEwQGjEwBQH9QBSH+kwGjg");
	var mask_6_graphics_77 = new cjs.Graphics().p("AnjhFQEmmqH7hdQH9hdGpEmQGqEmBcH7QBeH8kmGqg");
	var mask_6_graphics_78 = new cjs.Graphics().p("AnzghQEbmwH5hpQH6hpGxEcQGwEbBoH5QBqH6kcGxg");
	var mask_6_graphics_79 = new cjs.Graphics().p("AoDADQERm1H2h1QH4h1G3ERQG3ESB0H2QB2H3kSG3g");
	var mask_6_graphics_80 = new cjs.Graphics().p("AoTApQEHm8HziBQH1iBG+EHQG9EHCAH0QCBH0kHG+g");
	var mask_6_graphics_81 = new cjs.Graphics().p("AoiBPQD9nCHwiMQHyiNHDD9QHDD8CMHxQCNHxj8HDg");
	var mask_6_graphics_82 = new cjs.Graphics().p("AowB2QDynIHsiYQHviYHJDxQHJDyCYHtQCZHujyHJg");
	var mask_6_graphics_83 = new cjs.Graphics().p("Ao9CeQDnnOHoikQHrikHPDnQHPDnCjHpQCkHqjnHPg");
	var mask_6_graphics_84 = new cjs.Graphics().p("ApKDFQDcnTHkivQHniwHUDcQHVDcCuHmQCwHmjcHUg");
	var mask_6_graphics_85 = new cjs.Graphics().p("ApWDtQDRnYHgi6QHii7HaDRQHZDRC6HhQC7HhjRHag");
	var mask_6_graphics_86 = new cjs.Graphics().p("ApiEWQDGndHcjGQHejGHeDGQHeDFDFHdQDHHdjGHeg");
	var mask_6_graphics_87 = new cjs.Graphics().p("AptE/QC7niHXjRQHZjRHiC6QHjC7DRHYQDSHYi7Hjg");
	var mask_6_graphics_88 = new cjs.Graphics().p("Ap3FoQCvnlHSjdQHUjcHnCvQHnCvDcHTQDdHTivHng");
	var mask_6_graphics_89 = new cjs.Graphics().p("AqBGSQCknqHOjnQHNjnHrCjQHrCkDnHNQDoHOikHrg");
	var mask_6_graphics_90 = new cjs.Graphics().p("AqJG8QCXntHJjyQHIjzHuCYQHvCYDyHIQDyHIiYHvg");
	var mask_6_graphics_91 = new cjs.Graphics().p("AqSHmQCNnxHCj8QHCj9HyCMQHyCMD9HCQD9HDiMHyg");
	var mask_6_graphics_92 = new cjs.Graphics().p("AqZIRQCAn1G8kGQG9kIH1CAQH1CBEHG8QEIG9iAH1g");
	var mask_6_graphics_93 = new cjs.Graphics().p("AqgI8QB1n4G2kRQG2kSH4B1QH4B0ERG2QETG2h1H4g");
	var mask_6_graphics_94 = new cjs.Graphics().p("AqmJnQBpn7GvkaQGwkdH6BpQH7BoEcGwQEcGvhoH7g");
	var mask_6_graphics_95 = new cjs.Graphics().p("AqrKTQBcn+GpkkQGpknH9BdQH9BcElGpQEnGphcH9g");
	var mask_6_graphics_96 = new cjs.Graphics().p("AqwK+QBQn/GikvQGikwH/BQQH/BREwGhQEwGihQH/g");
	var mask_6_graphics_97 = new cjs.Graphics().p("Aq0LqQBEoBGbk5QGak6IBBEQIBBFE5GaQE7GbhFIBg");
	var mask_6_graphics_98 = new cjs.Graphics().p("Aq4MWQA5oDGTlCQGTlEICA4QICA5FDGTQFFGTg5ICg");
	var mask_6_graphics_99 = new cjs.Graphics().p("Aq6NCQAsoEGLlMQGLlNIEAsQIEAtFMGLQFOGLgtIDg");
	var mask_6_graphics_100 = new cjs.Graphics().p("Aq8NuQAgoFGDlWQGDlVIFAgQIEAgFWGDQFXGDggIFg");
	var mask_6_graphics_101 = new cjs.Graphics().p("Aq+OaQAUoGF7leQF7lfIGAUQIFAUFeF7QFgF7gUIFg");
	var mask_6_graphics_102 = new cjs.Graphics().p("Aq+PGQAHoGFzlnQFzloIFAIQIGAIFnFyQFpFzgIIFg");
	var mask_6_graphics_103 = new cjs.Graphics().p("AlZBxQFqlwIGgEQIFgFFxFqQFxFqAFIGMgnBAAVQgFoFFqlxg");
	var mask_6_graphics_104 = new cjs.Graphics().p("AltB4QFil5IFgQQIFgRF5FhQF6FiAQIFMgnAABQQgQoFFhl5g");
	var mask_6_graphics_105 = new cjs.Graphics().p("AmAB/QFZmBIEgdQIFgdGBFZQGCFYAdIFMgm+ACLQgcoFFYmBg");
	var mask_6_graphics_106 = new cjs.Graphics().p("AmSCGQFQmJIDgpQIEgpGJFRQGKFOApIEMgm6ADFQgpoEFQmJg");
	var mask_6_graphics_107 = new cjs.Graphics().p("AmkCOQFHmRICg1QIDg1GRFHQGSFFA1IDMgm1AEAQg1oDFGmRg");
	var mask_6_graphics_108 = new cjs.Graphics().p("Am0CXQE9mZIAhBQIChBGYE9QGaE7BBICMgmtAE7QhCoCE9mYg");
	var mask_6_graphics_109 = new cjs.Graphics().p("AnECgQEzmgH/hOQIAhNGgE0QGhExBNIAMgmlAF1QhOoAEzmfg");
	var mask_6_graphics_110 = new cjs.Graphics().p("AnTCpQEqmnH9hZQH+haGnEqQGoEnBZH+MgmcAGwQhan+Epmng");
	var mask_6_graphics_111 = new cjs.Graphics().p("AnhCzQEgmuH6hmQH8hlGuEgQGvEdBlH8MgmRAHpQhln7Eemug");
	var mask_6_graphics_112 = new cjs.Graphics().p("AnuC9QEWm1H4hxQH5hxG1EVQG1EUBxH5MgmFAIjQhxn6EUm0g");
	var mask_6_graphics_113 = new cjs.Graphics().p("An6DIQELm7H2h9QH2h+G7ELQG8EJB9H3Mgl4AJcQh9n2EKm7g");
	var mask_6_graphics_114 = new cjs.Graphics().p("AoFDTQEBnBHyiJQHziJHBEAQHCEACJHyMgloAKVQiJnzD/nBg");
	var mask_6_graphics_115 = new cjs.Graphics().p("AoPDeQD2nHHviUQHwiVHHD2QHID1CUHuMglYALOQiVnwD1nHg");
	var mask_6_graphics_116 = new cjs.Graphics().p("AoYDqQDrnMHrihQHsigHNDrQHODqCgHrMglHAMGQignsDqnNg");
	var mask_6_graphics_117 = new cjs.Graphics().p("AohD3QDgnSHoisQHoisHTDgQHTDfCsHnMgk1AM+QisnoDfnSg");
	var mask_6_graphics_118 = new cjs.Graphics().p("AooEEQDVnYHji3QHli4HXDWQHYDUC4HjMgkhAN1Qi3nkDUnXg");
	var mask_6_graphics_119 = new cjs.Graphics().p("AouERQDJncHfjDQHgjDHdDKQHdDJDCHfMgkLAOsQjCngDJncg");
	var mask_6_graphics_120 = new cjs.Graphics().p("Ao0EfQC/nhHajOQHbjOHhC+QHiC+DOHaMgj0APiQjOnbC9ngg");
	var mask_6_graphics_121 = new cjs.Graphics().p("Ao4EtQCznmHVjZQHWjZHmCzQHmCyDZHVMgjcAQZQjanWCznlg");
	var mask_6_graphics_122 = new cjs.Graphics().p("Ao8E7QConpHQjlQHRjkHpCoQHqCnDlHQMgjDARNQjlnRCnnpg");
	var mask_6_graphics_123 = new cjs.Graphics().p("Ao+FKQCcntHKjwQHMjvHtCdQHuCbDvHKMgioASCQjvnLCbntg");
	var mask_6_graphics_124 = new cjs.Graphics().p("ApAFZQCQnxHFj6QHGj6HxCRQHxCPD6HFMgiNAS2Qj6nGCQnwg");
	var mask_6_graphics_125 = new cjs.Graphics().p("ApAFlQCHn0HAkCQHBkCH0CIQHzCGECHAMgh1ATdQkCnACGnzg");
	var mask_6_graphics_126 = new cjs.Graphics().p("Ao/FxQB+n1G8kLQG7kKH2B/QH2B9EKG7MghfAUEQkKm8B+n1g");
	var mask_6_graphics_127 = new cjs.Graphics().p("Ao+F9QB1n3G3kSQG2kSH4B1QH4B0ESG2MghGAUrQkSm3B0n4g");
	var mask_6_graphics_128 = new cjs.Graphics().p("Ao8GKQBrn5GykaQGxkaH6BsQH6BrEaGxMggtAVQQkamyBrn5g");
	var mask_6_graphics_129 = new cjs.Graphics().p("Ao6GXQBjn7GskiQGskiH7BjQH8BiEhGsMggTAV1QkimsBin7g");
	var mask_6_graphics_130 = new cjs.Graphics().p("Ao3GkQBZn9GnkpQGmkpH9BZQH9BYEqGnI/5WbQkqmoBZn8g");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_6_graphics_9,x:179.3,y:161.3}).wait(1).to({graphics:mask_6_graphics_10,x:179.3,y:161.3}).wait(1).to({graphics:mask_6_graphics_11,x:179.3,y:161.3}).wait(1).to({graphics:mask_6_graphics_12,x:179.3,y:161.3}).wait(1).to({graphics:mask_6_graphics_13,x:179.3,y:161.3}).wait(1).to({graphics:mask_6_graphics_14,x:179.3,y:161.3}).wait(1).to({graphics:mask_6_graphics_15,x:179.3,y:161.3}).wait(1).to({graphics:mask_6_graphics_16,x:179.3,y:161.3}).wait(1).to({graphics:mask_6_graphics_17,x:179.3,y:161.3}).wait(1).to({graphics:mask_6_graphics_18,x:179.3,y:161.4}).wait(1).to({graphics:mask_6_graphics_19,x:179.3,y:161.4}).wait(1).to({graphics:mask_6_graphics_20,x:179.4,y:161.4}).wait(1).to({graphics:mask_6_graphics_21,x:179.4,y:161.4}).wait(1).to({graphics:mask_6_graphics_22,x:179.4,y:161.5}).wait(1).to({graphics:mask_6_graphics_23,x:179.4,y:161.5}).wait(1).to({graphics:mask_6_graphics_24,x:179.4,y:161.5}).wait(1).to({graphics:mask_6_graphics_25,x:179.4,y:161.5}).wait(1).to({graphics:mask_6_graphics_26,x:179.4,y:161.5}).wait(1).to({graphics:mask_6_graphics_27,x:179.4,y:161.5}).wait(1).to({graphics:mask_6_graphics_28,x:179.4,y:161.6}).wait(1).to({graphics:mask_6_graphics_29,x:179.4,y:161.6}).wait(1).to({graphics:mask_6_graphics_30,x:179.4,y:161.6}).wait(1).to({graphics:mask_6_graphics_31,x:179.4,y:161.6}).wait(1).to({graphics:mask_6_graphics_32,x:179.4,y:161.6}).wait(1).to({graphics:mask_6_graphics_33,x:179.4,y:161.6}).wait(1).to({graphics:mask_6_graphics_34,x:179.4,y:161.6}).wait(1).to({graphics:mask_6_graphics_35,x:179.4,y:161.6}).wait(1).to({graphics:mask_6_graphics_36,x:179.4,y:161.6}).wait(1).to({graphics:mask_6_graphics_37,x:179.4,y:161.6}).wait(1).to({graphics:mask_6_graphics_38,x:179.4,y:161.6}).wait(1).to({graphics:mask_6_graphics_39,x:179.4,y:161.6}).wait(1).to({graphics:mask_6_graphics_40,x:179.4,y:161.6}).wait(1).to({graphics:mask_6_graphics_41,x:179.3,y:161.6}).wait(1).to({graphics:mask_6_graphics_42,x:179.3,y:161.6}).wait(1).to({graphics:mask_6_graphics_43,x:179.3,y:161.6}).wait(1).to({graphics:mask_6_graphics_44,x:179.3,y:161.5}).wait(1).to({graphics:mask_6_graphics_45,x:179.2,y:161.5}).wait(1).to({graphics:mask_6_graphics_46,x:179.2,y:161.5}).wait(1).to({graphics:mask_6_graphics_47,x:179.2,y:161.5}).wait(1).to({graphics:mask_6_graphics_48,x:179.2,y:161.5}).wait(1).to({graphics:mask_6_graphics_49,x:179.2,y:161.5}).wait(1).to({graphics:mask_6_graphics_50,x:179.2,y:161.4}).wait(1).to({graphics:mask_6_graphics_51,x:179.2,y:161.3}).wait(1).to({graphics:mask_6_graphics_52,x:179.2,y:161.1}).wait(1).to({graphics:mask_6_graphics_53,x:179.2,y:160.8}).wait(1).to({graphics:mask_6_graphics_54,x:179.3,y:160.4}).wait(1).to({graphics:mask_6_graphics_55,x:179.3,y:159.9}).wait(1).to({graphics:mask_6_graphics_56,x:179.3,y:159.4}).wait(1).to({graphics:mask_6_graphics_57,x:179.3,y:158.8}).wait(1).to({graphics:mask_6_graphics_58,x:179.3,y:158.1}).wait(1).to({graphics:mask_6_graphics_59,x:179.3,y:157.4}).wait(1).to({graphics:mask_6_graphics_60,x:179.3,y:156.6}).wait(1).to({graphics:mask_6_graphics_61,x:179.3,y:155.7}).wait(1).to({graphics:mask_6_graphics_62,x:179.3,y:154.7}).wait(1).to({graphics:mask_6_graphics_63,x:179.3,y:153.7}).wait(1).to({graphics:mask_6_graphics_64,x:179.3,y:152.6}).wait(1).to({graphics:mask_6_graphics_65,x:179.3,y:151.4}).wait(1).to({graphics:mask_6_graphics_66,x:179.2,y:150.2}).wait(1).to({graphics:mask_6_graphics_67,x:179.2,y:148.9}).wait(1).to({graphics:mask_6_graphics_68,x:179.2,y:147.6}).wait(1).to({graphics:mask_6_graphics_69,x:179.2,y:146.2}).wait(1).to({graphics:mask_6_graphics_70,x:179.1,y:144.7}).wait(1).to({graphics:mask_6_graphics_71,x:179.1,y:143.2}).wait(1).to({graphics:mask_6_graphics_72,x:179.2,y:141.6}).wait(1).to({graphics:mask_6_graphics_73,x:179.2,y:140}).wait(1).to({graphics:mask_6_graphics_74,x:179.2,y:138.3}).wait(1).to({graphics:mask_6_graphics_75,x:179.2,y:137.1}).wait(1).to({graphics:mask_6_graphics_76,x:179.3,y:136}).wait(1).to({graphics:mask_6_graphics_77,x:179.3,y:134.8}).wait(1).to({graphics:mask_6_graphics_78,x:179.3,y:133.6}).wait(1).to({graphics:mask_6_graphics_79,x:179.3,y:132.3}).wait(1).to({graphics:mask_6_graphics_80,x:179.4,y:131.1}).wait(1).to({graphics:mask_6_graphics_81,x:179.4,y:129.8}).wait(1).to({graphics:mask_6_graphics_82,x:179.4,y:128.5}).wait(1).to({graphics:mask_6_graphics_83,x:179.4,y:127.2}).wait(1).to({graphics:mask_6_graphics_84,x:179.4,y:125.9}).wait(1).to({graphics:mask_6_graphics_85,x:179.5,y:124.6}).wait(1).to({graphics:mask_6_graphics_86,x:179.5,y:123.2}).wait(1).to({graphics:mask_6_graphics_87,x:179.5,y:121.9}).wait(1).to({graphics:mask_6_graphics_88,x:179.5,y:120.5}).wait(1).to({graphics:mask_6_graphics_89,x:179.5,y:119.1}).wait(1).to({graphics:mask_6_graphics_90,x:179.5,y:117.7}).wait(1).to({graphics:mask_6_graphics_91,x:179.5,y:116.3}).wait(1).to({graphics:mask_6_graphics_92,x:179.5,y:114.9}).wait(1).to({graphics:mask_6_graphics_93,x:179.5,y:113.4}).wait(1).to({graphics:mask_6_graphics_94,x:179.5,y:112}).wait(1).to({graphics:mask_6_graphics_95,x:179.5,y:110.6}).wait(1).to({graphics:mask_6_graphics_96,x:179.5,y:109.1}).wait(1).to({graphics:mask_6_graphics_97,x:179.5,y:107.7}).wait(1).to({graphics:mask_6_graphics_98,x:179.4,y:106.2}).wait(1).to({graphics:mask_6_graphics_99,x:179.4,y:104.7}).wait(1).to({graphics:mask_6_graphics_100,x:179.4,y:103.3}).wait(1).to({graphics:mask_6_graphics_101,x:179.4,y:101.8}).wait(1).to({graphics:mask_6_graphics_102,x:179.4,y:100.3}).wait(1).to({graphics:mask_6_graphics_103,x:179.5,y:99.9}).wait(1).to({graphics:mask_6_graphics_104,x:179.4,y:101.4}).wait(1).to({graphics:mask_6_graphics_105,x:179.4,y:102.9}).wait(1).to({graphics:mask_6_graphics_106,x:179.3,y:104.3}).wait(1).to({graphics:mask_6_graphics_107,x:179.2,y:105.8}).wait(1).to({graphics:mask_6_graphics_108,x:179,y:107.3}).wait(1).to({graphics:mask_6_graphics_109,x:178.8,y:108.7}).wait(1).to({graphics:mask_6_graphics_110,x:178.6,y:110.2}).wait(1).to({graphics:mask_6_graphics_111,x:178.3,y:111.6}).wait(1).to({graphics:mask_6_graphics_112,x:178,y:113.1}).wait(1).to({graphics:mask_6_graphics_113,x:177.7,y:114.5}).wait(1).to({graphics:mask_6_graphics_114,x:177.3,y:115.9}).wait(1).to({graphics:mask_6_graphics_115,x:176.9,y:117.3}).wait(1).to({graphics:mask_6_graphics_116,x:176.5,y:118.7}).wait(1).to({graphics:mask_6_graphics_117,x:176.1,y:120.1}).wait(1).to({graphics:mask_6_graphics_118,x:175.6,y:121.5}).wait(1).to({graphics:mask_6_graphics_119,x:175,y:122.9}).wait(1).to({graphics:mask_6_graphics_120,x:174.5,y:124.2}).wait(1).to({graphics:mask_6_graphics_121,x:173.9,y:125.6}).wait(1).to({graphics:mask_6_graphics_122,x:173.3,y:126.9}).wait(1).to({graphics:mask_6_graphics_123,x:172.6,y:128.2}).wait(1).to({graphics:mask_6_graphics_124,x:171.9,y:129.5}).wait(1).to({graphics:mask_6_graphics_125,x:171.3,y:130.5}).wait(1).to({graphics:mask_6_graphics_126,x:170.8,y:131.4}).wait(1).to({graphics:mask_6_graphics_127,x:170.2,y:132.4}).wait(1).to({graphics:mask_6_graphics_128,x:169.6,y:133.3}).wait(1).to({graphics:mask_6_graphics_129,x:168.9,y:134.2}).wait(1).to({graphics:mask_6_graphics_130,x:168.3,y:135.2}).wait(613));

	// Layer 6
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(20,1,1).p("ANMpQQgxgVg5gKQkYgtkFBvQkRB2jkCRQjlCRi6EaQirEDBBD1");
	this.shape_7.setTransform(227.8,189.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(20,1,1).p("ANMq+QgxgVg5gJQkYgukFBwQkRB1jkCRQjlCSi6EZQi6EaBeEKQALAeANAYQBBB/B9gGQATgBAVgE");
	this.shape_8.setTransform(227.8,200.3);

	var maskedShapeInstanceList = [this.shape_7,this.shape_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7}]},9).to({state:[{t:this.shape_8}]},35).wait(699));

	// Letter
	this.instance_4 = new lib.Symbol1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(275,275);
	this.instance_4.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(743));

	// Background
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_9.setTransform(275,275,3.373,2.543);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_10.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9}]}).wait(743));

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