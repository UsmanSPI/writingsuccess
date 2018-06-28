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


(lib.F = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A5oUIQjIhsiZjDQiWi5hTjoQhQjoAAjoQAAioBzAAQB8AAAACjQBnCjDDBTQCuBKDWAAQDfAAEJhkIA0gPQBzAAAAB8QAABAhHAuQhdA5jDAiIktAfQimAAiXgnQidgniDhOQAwCEBMBzQBRB6BkBYQBpBhB6A0QCEA1COAAQB5AAB9hVQBwhOB2iaQCSjBEGoXIp2AAQhlAAABhkQAAiKCGAAILGAAID9oZQCLkUB1iSIgmgKQkQhHiKAAIjSAPQiqAWiPBdQhmBBiXCaQhKBMg9AAQhpAAABhzQgBg2AxgzIB7iBQCjiaDjhTQDXhODvAAQDIAAEzBQQGVBsBfARQDmAiCmAAQDtAADKg6QCpgvDyh3IA9gUQAuAAAnAnQAiAnAAAvQAABLjIBkQi3BbjSAuQjIAqjZAAQnagojwgzQh/CEiND7IkBIBIJ8AAQBoAAAABpQABA1gtAnQgpApg4AAIrLAAQk4KFi3DyQiQC+iVBkQimBuitAAQjwAAjXh1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-230.7,-140.5,461.4,281.1);


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
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AAAAeIAAg7");
	this.shape_1.setTransform(0,-101);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AAAAkIAAhH");
	this.shape_2.setTransform(0,-100.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("AAAApIAAhR");
	this.shape_3.setTransform(0,-99.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("AAAAvIAAhd");
	this.shape_4.setTransform(0,-99.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(5,1,1).p("AAAA0IAAhn");
	this.shape_5.setTransform(0,-98.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(5,1,1).p("AAAA6IAAhz");
	this.shape_6.setTransform(0,-98.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(5,1,1).p("AAAA/IAAh9");
	this.shape_7.setTransform(0,-97.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(5,1,1).p("AAABEIAAiI");
	this.shape_8.setTransform(0,-97.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(5,1,1).p("AAABKIAAiT");
	this.shape_9.setTransform(0,-96.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(5,1,1).p("AAABPIAAie");
	this.shape_10.setTransform(0,-96.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5,1,1).p("AAABVIAAip");
	this.shape_11.setTransform(0,-95.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(5,1,1).p("AAABaIAAiz");
	this.shape_12.setTransform(0,-95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(5,1,1).p("AAABgIAAi/");
	this.shape_13.setTransform(0,-94.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(5,1,1).p("AAABlIAAjJ");
	this.shape_14.setTransform(0,-93.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(5,1,1).p("AAABrIAAjV");
	this.shape_15.setTransform(0,-93.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(5,1,1).p("AAABwIAAjf");
	this.shape_16.setTransform(0,-92.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(5,1,1).p("AAAB2IAAjr");
	this.shape_17.setTransform(0,-92.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(5,1,1).p("AAAB7IAAj1");
	this.shape_18.setTransform(0,-91.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(5,1,1).p("AAACAIAAkA");
	this.shape_19.setTransform(0,-91.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(5,1,1).p("AAACGIAAkL");
	this.shape_20.setTransform(0,-90.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(5,1,1).p("AAACLIAAkW");
	this.shape_21.setTransform(0,-90.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(5,1,1).p("AAACRIAAkh");
	this.shape_22.setTransform(0,-89.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(5,1,1).p("AAACWIAAkr");
	this.shape_23.setTransform(0,-89);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(5,1,1).p("AAACcIAAk3");
	this.shape_24.setTransform(0,-88.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(5,1,1).p("AAAChIAAlB");
	this.shape_25.setTransform(0,-87.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(5,1,1).p("AAACnIAAlN");
	this.shape_26.setTransform(0,-87.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(5,1,1).p("AAACsIAAlX");
	this.shape_27.setTransform(0,-86.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(5,1,1).p("AAACyIAAlj");
	this.shape_28.setTransform(0,-86.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(5,1,1).p("AAAC3IAAlt");
	this.shape_29.setTransform(0,-85.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(5,1,1).p("AAAC8IAAl4");
	this.shape_30.setTransform(0,-85.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(5,1,1).p("AAADCIAAmD");
	this.shape_31.setTransform(0,-84.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(5,1,1).p("AAADHIAAmN");
	this.shape_32.setTransform(0,-84.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(5,1,1).p("AAADNIAAmZ");
	this.shape_33.setTransform(0,-83.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(5,1,1).p("AAADSIAAmj");
	this.shape_34.setTransform(0,-83);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(5,1,1).p("AAADYIAAmv");
	this.shape_35.setTransform(0,-82.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(5,1,1).p("AAADdIAAm5");
	this.shape_36.setTransform(0,-81.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(5,1,1).p("AAADjIAAnE");
	this.shape_37.setTransform(0,-81.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(5,1,1).p("AAADoIAAnP");
	this.shape_38.setTransform(0,-80.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(5,1,1).p("AAADuIAAnb");
	this.shape_39.setTransform(0,-80.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(5,1,1).p("AAADzIAAnl");
	this.shape_40.setTransform(0,-79.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(5,1,1).p("AAAD5IAAnw");
	this.shape_41.setTransform(0,-79.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(5,1,1).p("AAAD+IAAn7");
	this.shape_42.setTransform(0,-78.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(5,1,1).p("AAAEDIAAoF");
	this.shape_43.setTransform(0,-78.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(5,1,1).p("AAAEJIAAoR");
	this.shape_44.setTransform(0,-77.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(5,1,1).p("AAAEOIAAob");
	this.shape_45.setTransform(0,-77);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(5,1,1).p("AAAEUIAAon");
	this.shape_46.setTransform(0,-76.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(5,1,1).p("AAAEZIAAox");
	this.shape_47.setTransform(0,-75.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(5,1,1).p("AAAEfIAAo8");
	this.shape_48.setTransform(0,-75.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(5,1,1).p("AAAEkIAApH");
	this.shape_49.setTransform(0,-74.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(5,1,1).p("AAAEqIAApT");
	this.shape_50.setTransform(0,-74.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(5,1,1).p("AAAEvIAApd");
	this.shape_51.setTransform(0,-73.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(5,1,1).p("AAAE0IAApn");
	this.shape_52.setTransform(0,-73.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(5,1,1).p("AAAE6IAApz");
	this.shape_53.setTransform(0,-72.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(5,1,1).p("AAAE/IAAp9");
	this.shape_54.setTransform(0,-72.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(5,1,1).p("AAAFFIAAqJ");
	this.shape_55.setTransform(0,-71.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(5,1,1).p("AAAFKIAAqT");
	this.shape_56.setTransform(0,-71);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(5,1,1).p("AAAFQIAAqf");
	this.shape_57.setTransform(0,-70.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(5,1,1).p("AAAFVIAAqp");
	this.shape_58.setTransform(0,-69.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(5,1,1).p("AAAlZIAAK0");
	this.shape_59.setTransform(0,-69.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).wait(1));

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0.3,-103.8,1,1,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-36.7},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.1,-106.6,22.3,13.8);


(lib.ar2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(48.5,-50.6,1,1,65.5,0,0,0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0.1,rotation:31.8,guide:{path:[48.5,-50.4,-9.2,-28.3,-42.7,42.1]}},59).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AA1kPIBIhMICkCaIhIBMg");
	var mask_graphics_1 = new cjs.Graphics().p("Ah8geIBWhcICkCZIhYBcg");
	var mask_graphics_2 = new cjs.Graphics().p("AiEgWIBmhsICjCZIhmBsg");
	var mask_graphics_3 = new cjs.Graphics().p("AiMgOIB1h8ICkCZIh1B8g");
	var mask_graphics_4 = new cjs.Graphics().p("AiTgGICEiMICjCZIiECMg");
	var mask_graphics_5 = new cjs.Graphics().p("AibABICUibICjCaIiUCbg");
	var mask_graphics_6 = new cjs.Graphics().p("AiiAJICiirICjCaIiiCrg");
	var mask_graphics_7 = new cjs.Graphics().p("AiqARICxi7ICkCaIixC7g");
	var mask_graphics_8 = new cjs.Graphics().p("AixAZIC/jLICkCbIi/DKg");
	var mask_graphics_9 = new cjs.Graphics().p("Ai5AhIDPjbICkCbIjPDag");
	var mask_graphics_10 = new cjs.Graphics().p("AjAApIDdjrIClCaIjeDrg");
	var mask_graphics_11 = new cjs.Graphics().p("AjIAxIDtj7ICkCaIjtD8g");
	var mask_graphics_12 = new cjs.Graphics().p("AjQA4ID8kKIClCaIj8EMg");
	var mask_graphics_13 = new cjs.Graphics().p("AjXBAIELkaICkCaIkLEbg");
	var mask_graphics_14 = new cjs.Graphics().p("AjeBJIEZkrIClCaIkbErg");
	var mask_graphics_15 = new cjs.Graphics().p("AjmBRIEpk7ICkCaIkpE8g");
	var mask_graphics_16 = new cjs.Graphics().p("AjtBZIE3lLIClCaIk4FLg");
	var mask_graphics_17 = new cjs.Graphics().p("Aj1BhIFHlbICkCaIlHFbg");
	var mask_graphics_18 = new cjs.Graphics().p("Aj9BpIFXlrICkCaIlWFrg");
	var mask_graphics_19 = new cjs.Graphics().p("AkEBxIFll7ICkCaIllF7g");
	var mask_graphics_20 = new cjs.Graphics().p("AkMB5IF1mLICkCaIl1GLg");
	var mask_graphics_21 = new cjs.Graphics().p("AkTCBIGDmbICkCaImDGbg");
	var mask_graphics_22 = new cjs.Graphics().p("AkbCJIGTmrICkCaImTGrg");
	var mask_graphics_23 = new cjs.Graphics().p("AkiCRIGhm8IClCbImiG8g");
	var mask_graphics_24 = new cjs.Graphics().p("AkqCZIGxnMICkCbImxHLg");
	var mask_graphics_25 = new cjs.Graphics().p("AkxChIG/ncIClCbInAHbg");
	var mask_graphics_26 = new cjs.Graphics().p("Ak5CpIHPnsICkCbInPHsg");
	var mask_graphics_27 = new cjs.Graphics().p("AlBCxIHen8IClCbInfH8g");
	var mask_graphics_28 = new cjs.Graphics().p("AlIC5IHtoMICkCbIntILg");
	var mask_graphics_29 = new cjs.Graphics().p("AlPDBIH7ocIClCbIn9Ibg");
	var mask_graphics_30 = new cjs.Graphics().p("AlXDJIILosICkCbIoLIsg");
	var mask_graphics_31 = new cjs.Graphics().p("AlfDRIIao8IClCbIoaI8g");
	var mask_graphics_32 = new cjs.Graphics().p("AlnDYIIqpLICkCbIopJMg");
	var mask_graphics_33 = new cjs.Graphics().p("AluDgII4pbIClCbIo5Jbg");
	var mask_graphics_34 = new cjs.Graphics().p("Al2DpIJIpsICkCbIpIJrg");
	var mask_graphics_35 = new cjs.Graphics().p("Al9DxIJWp8IClCbIpXJ8g");
	var mask_graphics_36 = new cjs.Graphics().p("AmED4IJlqLICkCbIplKMg");
	var mask_graphics_37 = new cjs.Graphics().p("AmMEBIJ1qcICkCbIp1Kcg");
	var mask_graphics_38 = new cjs.Graphics().p("AmUEJIKEqsIClCbIqEKsg");
	var mask_graphics_39 = new cjs.Graphics().p("AmbERIKTq8ICkCbIqTK8g");
	var mask_graphics_40 = new cjs.Graphics().p("AmjEZIKirMIClCbIqiLMg");
	var mask_graphics_41 = new cjs.Graphics().p("AmqEhIKxrcICkCbIqxLcg");
	var mask_graphics_42 = new cjs.Graphics().p("AmyEpILArsIClCbIrBLsg");
	var mask_graphics_43 = new cjs.Graphics().p("Am5ExILPr8ICkCbIrPL8g");
	var mask_graphics_44 = new cjs.Graphics().p("AnBE5ILesMIClCcIrfMKg");
	var mask_graphics_45 = new cjs.Graphics().p("AnIFBILtscICkCcIrtMag");
	var mask_graphics_46 = new cjs.Graphics().p("AnQFJIL8ssIClCcIr8Mrg");
	var mask_graphics_47 = new cjs.Graphics().p("AnYFRIMMs8ICkCcIsLM7g");
	var mask_graphics_48 = new cjs.Graphics().p("AnfFZIMatMIClCcIsbNKg");
	var mask_graphics_49 = new cjs.Graphics().p("AnmFhIMptcICkCcIsqNag");
	var mask_graphics_50 = new cjs.Graphics().p("AnuFpIM5tsICkCbIs5Nrg");
	var mask_graphics_51 = new cjs.Graphics().p("An2FxINIt8IClCbItIN8g");
	var mask_graphics_52 = new cjs.Graphics().p("An9F5INXuMICkCbItXOMg");
	var mask_graphics_53 = new cjs.Graphics().p("AoFGBINmucIClCbItmOcg");
	var mask_graphics_54 = new cjs.Graphics().p("AoMGJIN1usICkCbIt1Osg");
	var mask_graphics_55 = new cjs.Graphics().p("AoUGRIOEu8IClCbIuEO8g");
	var mask_graphics_56 = new cjs.Graphics().p("AocGZIOUvMICkCbIuTPMg");
	var mask_graphics_57 = new cjs.Graphics().p("AojGhIOivcIClCbIujPcg");
	var mask_graphics_58 = new cjs.Graphics().p("AoqGpIOxvsICkCbIuxPsg");
	var mask_graphics_59 = new cjs.Graphics().p("AoyGxIPAv8IClCbIvAP8g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:28.9,y:-34.8}).wait(1).to({graphics:mask_graphics_1,x:45.2,y:-57.3}).wait(1).to({graphics:mask_graphics_2,x:44.5,y:-56.5}).wait(1).to({graphics:mask_graphics_3,x:43.7,y:-55.7}).wait(1).to({graphics:mask_graphics_4,x:42.9,y:-54.9}).wait(1).to({graphics:mask_graphics_5,x:42.2,y:-54.1}).wait(1).to({graphics:mask_graphics_6,x:41.4,y:-53.3}).wait(1).to({graphics:mask_graphics_7,x:40.7,y:-52.5}).wait(1).to({graphics:mask_graphics_8,x:39.9,y:-51.7}).wait(1).to({graphics:mask_graphics_9,x:39.2,y:-50.9}).wait(1).to({graphics:mask_graphics_10,x:38.4,y:-50.1}).wait(1).to({graphics:mask_graphics_11,x:37.7,y:-49.3}).wait(1).to({graphics:mask_graphics_12,x:36.9,y:-48.5}).wait(1).to({graphics:mask_graphics_13,x:36.2,y:-47.7}).wait(1).to({graphics:mask_graphics_14,x:35.4,y:-46.9}).wait(1).to({graphics:mask_graphics_15,x:34.7,y:-46.1}).wait(1).to({graphics:mask_graphics_16,x:33.9,y:-45.4}).wait(1).to({graphics:mask_graphics_17,x:33.1,y:-44.6}).wait(1).to({graphics:mask_graphics_18,x:32.4,y:-43.8}).wait(1).to({graphics:mask_graphics_19,x:31.6,y:-43}).wait(1).to({graphics:mask_graphics_20,x:30.9,y:-42.2}).wait(1).to({graphics:mask_graphics_21,x:30.1,y:-41.4}).wait(1).to({graphics:mask_graphics_22,x:29.4,y:-40.6}).wait(1).to({graphics:mask_graphics_23,x:28.6,y:-39.8}).wait(1).to({graphics:mask_graphics_24,x:27.9,y:-39}).wait(1).to({graphics:mask_graphics_25,x:27.1,y:-38.2}).wait(1).to({graphics:mask_graphics_26,x:26.4,y:-37.4}).wait(1).to({graphics:mask_graphics_27,x:25.6,y:-36.6}).wait(1).to({graphics:mask_graphics_28,x:24.9,y:-35.8}).wait(1).to({graphics:mask_graphics_29,x:24.1,y:-35}).wait(1).to({graphics:mask_graphics_30,x:23.4,y:-34.2}).wait(1).to({graphics:mask_graphics_31,x:22.6,y:-33.4}).wait(1).to({graphics:mask_graphics_32,x:21.9,y:-32.6}).wait(1).to({graphics:mask_graphics_33,x:21.1,y:-31.8}).wait(1).to({graphics:mask_graphics_34,x:20.4,y:-31}).wait(1).to({graphics:mask_graphics_35,x:19.6,y:-30.2}).wait(1).to({graphics:mask_graphics_36,x:18.9,y:-29.4}).wait(1).to({graphics:mask_graphics_37,x:18.1,y:-28.6}).wait(1).to({graphics:mask_graphics_38,x:17.3,y:-27.8}).wait(1).to({graphics:mask_graphics_39,x:16.6,y:-27}).wait(1).to({graphics:mask_graphics_40,x:15.8,y:-26.2}).wait(1).to({graphics:mask_graphics_41,x:15.1,y:-25.4}).wait(1).to({graphics:mask_graphics_42,x:14.3,y:-24.6}).wait(1).to({graphics:mask_graphics_43,x:13.6,y:-23.8}).wait(1).to({graphics:mask_graphics_44,x:12.8,y:-23}).wait(1).to({graphics:mask_graphics_45,x:12.1,y:-22.2}).wait(1).to({graphics:mask_graphics_46,x:11.3,y:-21.4}).wait(1).to({graphics:mask_graphics_47,x:10.6,y:-20.6}).wait(1).to({graphics:mask_graphics_48,x:9.8,y:-19.8}).wait(1).to({graphics:mask_graphics_49,x:9.1,y:-19}).wait(1).to({graphics:mask_graphics_50,x:8.3,y:-18.2}).wait(1).to({graphics:mask_graphics_51,x:7.5,y:-17.4}).wait(1).to({graphics:mask_graphics_52,x:6.8,y:-16.7}).wait(1).to({graphics:mask_graphics_53,x:6,y:-15.9}).wait(1).to({graphics:mask_graphics_54,x:5.3,y:-15.1}).wait(1).to({graphics:mask_graphics_55,x:4.5,y:-14.3}).wait(1).to({graphics:mask_graphics_56,x:3.8,y:-13.5}).wait(1).to({graphics:mask_graphics_57,x:3,y:-12.7}).wait(1).to({graphics:mask_graphics_58,x:2.3,y:-11.9}).wait(1).to({graphics:mask_graphics_59,x:1.5,y:-11.1}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AnIHQQFQrCJBjd");
	this.shape.setTransform(2.8,-4.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34.2,-61.9,21.2,20.3);


(lib.ar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-26.5,14.6,1,1,-112);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-135,guide:{path:[-26.5,14.6,2.3,4.7,33,-27]}},89).wait(1));

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
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AjyEMQDml5D/ie");
	this.shape.setTransform(3.4,-6.3,1,1,-167.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.1,5.3,18.3,20.7);


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
(lib.WS_Cursive_F = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_636 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(636).call(this.frame_636).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(172.9,189.1,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[173,189.1,220.1,133.3,282.2,148.5,333.8,159.2,385.3,169.8,437.5,176.6,491.6,147.5]}},120).wait(11).to({skewY:0,x:325.3,y:158.6},0).to({guide:{path:[324.9,158.4,272.3,256,219.8,353.5,219.8,353.6,219.8,353.6,180.7,419.1,135,401,89.1,383,73,346.9,57,310.9,54.7,284.8]}},180).wait(16).to({startPosition:0},0).to({guide:{path:[54.7,284.9,97.2,351.5,188.5,318.5]}},89).wait(16).to({x:184,y:274.7},0).to({x:341.5},118).wait(12).to({startPosition:0},0).to({guide:{path:[341.8,274.4,261.8,195.3,124.5,278.2,-12.4,360.7,-77.7,248.5]}},65).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(492.8,146.9,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},120).wait(11).to({_off:false,x:54.8,y:283.9},0).to({_off:true},180).wait(16).to({_off:false,x:189.8,y:318.9},0).to({_off:true},89).wait(16).to({_off:false,x:340.8,y:274.9},0).to({_off:true},118).wait(78));

	// Layer 12
	this.instance_1 = new lib.ar2("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(194.2,75.4,1,1,0,-69.4,110.6,0.8,-0.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).wait(628));

	// Layer 11
	this.instance_2 = new lib.ar5("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(217.6,214.6,1,1,-90,0,0,0,-66.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(441).to({_off:false},0).wait(196));

	// Layer 9
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(20,1,1).p("AgMAAIAZAA");
	this.shape_1.setTransform(185.1,275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(20,1,1).p("AgSAAIAlAA");
	this.shape_2.setTransform(185.7,275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(20,1,1).p("AgZAAIAzAA");
	this.shape_3.setTransform(186.4,275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(20,1,1).p("AgfAAIA/AA");
	this.shape_4.setTransform(187,275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(20,1,1).p("AgmAAIBNAA");
	this.shape_5.setTransform(187.7,275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(20,1,1).p("AgtAAIBaAA");
	this.shape_6.setTransform(188.4,275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(20,1,1).p("AgzAAIBnAA");
	this.shape_7.setTransform(189,275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(20,1,1).p("Ag5AAIBzAA");
	this.shape_8.setTransform(189.7,275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(20,1,1).p("AhAAAICBAA");
	this.shape_9.setTransform(190.3,275);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(20,1,1).p("AhHAAICPAA");
	this.shape_10.setTransform(191,275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(20,1,1).p("AhNAAICbAA");
	this.shape_11.setTransform(191.6,275);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(20,1,1).p("AhUAAICpAA");
	this.shape_12.setTransform(192.3,275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(20,1,1).p("AhaAAIC2AA");
	this.shape_13.setTransform(193,275);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(20,1,1).p("AhhAAIDDAA");
	this.shape_14.setTransform(193.6,275);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(20,1,1).p("AhoAAIDRAA");
	this.shape_15.setTransform(194.3,275);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(20,1,1).p("AhuAAIDdAA");
	this.shape_16.setTransform(194.9,275);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(20,1,1).p("Ah1AAIDrAA");
	this.shape_17.setTransform(195.6,275);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(20,1,1).p("Ah7AAID3AA");
	this.shape_18.setTransform(196.3,275);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(20,1,1).p("AiCAAIEFAA");
	this.shape_19.setTransform(196.9,275);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(20,1,1).p("AiJAAIETAA");
	this.shape_20.setTransform(197.6,275);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(20,1,1).p("AiPAAIEfAA");
	this.shape_21.setTransform(198.2,275);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(20,1,1).p("AiWAAIEtAA");
	this.shape_22.setTransform(198.9,275);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(20,1,1).p("AidAAIE7AA");
	this.shape_23.setTransform(199.6,275);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(20,1,1).p("AijAAIFHAA");
	this.shape_24.setTransform(200.2,275);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(20,1,1).p("AiqAAIFUAA");
	this.shape_25.setTransform(200.9,275);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(20,1,1).p("AiwAAIFhAA");
	this.shape_26.setTransform(201.5,275);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(20,1,1).p("Ai3AAIFvAA");
	this.shape_27.setTransform(202.2,275);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(20,1,1).p("Ai9AAIF7AA");
	this.shape_28.setTransform(202.8,275);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(20,1,1).p("AjEAAIGJAA");
	this.shape_29.setTransform(203.5,275);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(20,1,1).p("AjKAAIGVAA");
	this.shape_30.setTransform(204.2,275);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(20,1,1).p("AjRAAIGjAA");
	this.shape_31.setTransform(204.8,275);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(20,1,1).p("AjYAAIGxAA");
	this.shape_32.setTransform(205.5,275);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(20,1,1).p("AjeAAIG9AA");
	this.shape_33.setTransform(206.1,275);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(20,1,1).p("AjlAAIHLAA");
	this.shape_34.setTransform(206.8,275);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(20,1,1).p("AjrAAIHYAA");
	this.shape_35.setTransform(207.5,275);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(20,1,1).p("AjyAAIHlAA");
	this.shape_36.setTransform(208.1,275);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(20,1,1).p("Aj5AAIHzAA");
	this.shape_37.setTransform(208.8,275);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(20,1,1).p("Aj/AAIH/AA");
	this.shape_38.setTransform(209.4,275);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(20,1,1).p("AkGAAIINAA");
	this.shape_39.setTransform(210.1,275);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(20,1,1).p("AkMAAIIZAA");
	this.shape_40.setTransform(210.8,275);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(20,1,1).p("AkTAAIInAA");
	this.shape_41.setTransform(211.4,275);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(20,1,1).p("AkaAAII1AA");
	this.shape_42.setTransform(212.1,275);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(20,1,1).p("AkgAAIJBAA");
	this.shape_43.setTransform(212.7,275);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(20,1,1).p("AknAAIJPAA");
	this.shape_44.setTransform(213.4,275);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(20,1,1).p("AktAAIJbAA");
	this.shape_45.setTransform(214,275);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(20,1,1).p("Ak0AAIJpAA");
	this.shape_46.setTransform(214.7,275);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(20,1,1).p("Ak6AAIJ2AA");
	this.shape_47.setTransform(215.4,275);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(20,1,1).p("AlBAAIKDAA");
	this.shape_48.setTransform(216,275);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(20,1,1).p("AlIAAIKRAA");
	this.shape_49.setTransform(216.7,275);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(20,1,1).p("AlOAAIKdAA");
	this.shape_50.setTransform(217.3,275);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(20,1,1).p("AlVAAIKrAA");
	this.shape_51.setTransform(218,275);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(20,1,1).p("AlbAAIK3AA");
	this.shape_52.setTransform(218.7,275);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(20,1,1).p("AliAAILFAA");
	this.shape_53.setTransform(219.3,275);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(20,1,1).p("AlpAAILTAA");
	this.shape_54.setTransform(220,275);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(20,1,1).p("AlvAAILfAA");
	this.shape_55.setTransform(220.6,275);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(20,1,1).p("Al2AAILtAA");
	this.shape_56.setTransform(221.3,275);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(20,1,1).p("Al8AAIL5AA");
	this.shape_57.setTransform(221.9,275);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(20,1,1).p("AmDAAIMHAA");
	this.shape_58.setTransform(222.6,275);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(20,1,1).p("AmJAAIMTAA");
	this.shape_59.setTransform(223.3,275);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(20,1,1).p("AmQAAIMhAA");
	this.shape_60.setTransform(223.9,275);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(20,1,1).p("AmXAAIMvAA");
	this.shape_61.setTransform(224.6,275);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(20,1,1).p("AmdAAIM7AA");
	this.shape_62.setTransform(225.2,275);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(20,1,1).p("AmkAAINJAA");
	this.shape_63.setTransform(225.9,275);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(20,1,1).p("AmrAAINXAA");
	this.shape_64.setTransform(226.6,275);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(20,1,1).p("AmxAAINjAA");
	this.shape_65.setTransform(227.2,275);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(20,1,1).p("Am4AAINxAA");
	this.shape_66.setTransform(227.9,275);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(20,1,1).p("Am+AAIN9AA");
	this.shape_67.setTransform(228.5,275);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(20,1,1).p("AnFAAIOLAA");
	this.shape_68.setTransform(229.2,275);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(20,1,1).p("AnLAAIOXAA");
	this.shape_69.setTransform(229.9,275);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(20,1,1).p("AnSAAIOlAA");
	this.shape_70.setTransform(230.5,275);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(20,1,1).p("AnYAAIOxAA");
	this.shape_71.setTransform(231.2,275);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(20,1,1).p("AnfAAIO/AA");
	this.shape_72.setTransform(231.8,275);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(20,1,1).p("AnmAAIPNAA");
	this.shape_73.setTransform(232.5,275);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(20,1,1).p("AnsAAIPZAA");
	this.shape_74.setTransform(233.1,275);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(20,1,1).p("AnzAAIPnAA");
	this.shape_75.setTransform(233.8,275);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(20,1,1).p("An6AAIP1AA");
	this.shape_76.setTransform(234.5,275);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(20,1,1).p("AoAAAIQBAA");
	this.shape_77.setTransform(235.1,275);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(20,1,1).p("AoHAAIQPAA");
	this.shape_78.setTransform(235.8,275);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(20,1,1).p("AoNAAIQbAA");
	this.shape_79.setTransform(236.4,275);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(20,1,1).p("AoUAAIQpAA");
	this.shape_80.setTransform(237.1,275);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(20,1,1).p("AoaAAIQ1AA");
	this.shape_81.setTransform(237.8,275);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(20,1,1).p("AohAAIRDAA");
	this.shape_82.setTransform(238.4,275);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(20,1,1).p("AooAAIRRAA");
	this.shape_83.setTransform(239.1,275);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(20,1,1).p("AouAAIRdAA");
	this.shape_84.setTransform(239.7,275);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(20,1,1).p("Ao1AAIRrAA");
	this.shape_85.setTransform(240.4,275);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(20,1,1).p("Ao8AAIR5AA");
	this.shape_86.setTransform(241.1,275);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(20,1,1).p("ApCAAISFAA");
	this.shape_87.setTransform(241.7,275);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(20,1,1).p("ApIAAISRAA");
	this.shape_88.setTransform(242.4,275);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(20,1,1).p("ApPAAISfAA");
	this.shape_89.setTransform(243,275);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(20,1,1).p("ApWAAIStAA");
	this.shape_90.setTransform(243.7,275);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(20,1,1).p("ApcAAIS5AA");
	this.shape_91.setTransform(244.3,275);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(20,1,1).p("ApjAAITHAA");
	this.shape_92.setTransform(245,275);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(20,1,1).p("ApqAAITVAA");
	this.shape_93.setTransform(245.7,275);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(20,1,1).p("ApwAAIThAA");
	this.shape_94.setTransform(246.3,275);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(20,1,1).p("Ap3AAITvAA");
	this.shape_95.setTransform(247,275);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(20,1,1).p("Ap9AAIT7AA");
	this.shape_96.setTransform(247.6,275);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(20,1,1).p("AqEAAIUJAA");
	this.shape_97.setTransform(248.3,275);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(20,1,1).p("AqLAAIUXAA");
	this.shape_98.setTransform(249,275);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(20,1,1).p("AqRAAIUjAA");
	this.shape_99.setTransform(249.6,275);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(20,1,1).p("AqXAAIUvAA");
	this.shape_100.setTransform(250.3,275);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(20,1,1).p("AqeAAIU9AA");
	this.shape_101.setTransform(250.9,275);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(20,1,1).p("AqlAAIVLAA");
	this.shape_102.setTransform(251.6,275);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(20,1,1).p("AqrAAIVXAA");
	this.shape_103.setTransform(252.2,275);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(20,1,1).p("AqyAAIVlAA");
	this.shape_104.setTransform(252.9,275);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(20,1,1).p("Aq5AAIVzAA");
	this.shape_105.setTransform(253.6,275);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(20,1,1).p("Aq/AAIV/AA");
	this.shape_106.setTransform(254.2,275);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(20,1,1).p("ArGAAIWNAA");
	this.shape_107.setTransform(254.9,275);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(20,1,1).p("ArMAAIWZAA");
	this.shape_108.setTransform(255.5,275);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(20,1,1).p("ArTAAIWnAA");
	this.shape_109.setTransform(256.2,275);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(20,1,1).p("AraAAIW0AA");
	this.shape_110.setTransform(256.9,275);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(20,1,1).p("ArgAAIXBAA");
	this.shape_111.setTransform(257.5,275);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(20,1,1).p("ArnAAIXPAA");
	this.shape_112.setTransform(258.2,275);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(20,1,1).p("ArtAAIXbAA");
	this.shape_113.setTransform(258.8,275);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(20,1,1).p("Ar0AAIXpAA");
	this.shape_114.setTransform(259.5,275);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(20,1,1).p("Ar6AAIX2AA");
	this.shape_115.setTransform(260.2,275);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(20,1,1).p("AsBAAIYDAA");
	this.shape_116.setTransform(260.8,275);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(20,1,1).p("AsIAAIYQAA");
	this.shape_117.setTransform(261.5,275);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(20,1,1).p("AsOAAIYdAA");
	this.shape_118.setTransform(262.1,275);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(20,1,1).p("AsVAAIYrAA");
	this.shape_119.setTransform(262.8,275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},441).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).wait(78));

	// Layer 18
	this.instance_3 = new lib.ar1("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(107.1,248,1,1,52.2,0,0,-0.7,0.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(336).to({_off:false},0).wait(301));

	// Layer 8 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_336 = new cjs.Graphics().p("ABhauIAAq1ICxAAIAAK1g");
	var mask_graphics_337 = new cjs.Graphics().p("AhdFaIAAqzIC7AAIAAKzg");
	var mask_graphics_338 = new cjs.Graphics().p("AhjFaIAAqzIDHAAIAAKzg");
	var mask_graphics_339 = new cjs.Graphics().p("AhpFaIAAqzIDTAAIAAKzg");
	var mask_graphics_340 = new cjs.Graphics().p("AhvFaIAAqzIDfAAIAAKzg");
	var mask_graphics_341 = new cjs.Graphics().p("Ah1FaIAAqzIDrAAIAAKzg");
	var mask_graphics_342 = new cjs.Graphics().p("Ah7FaIAAqzID3AAIAAKzg");
	var mask_graphics_343 = new cjs.Graphics().p("AiAFaIAAqzIEBAAIAAKzg");
	var mask_graphics_344 = new cjs.Graphics().p("AiGFaIAAqzIENAAIAAKzg");
	var mask_graphics_345 = new cjs.Graphics().p("AiMFaIAAqzIEZAAIAAKzg");
	var mask_graphics_346 = new cjs.Graphics().p("AiRFaIAAqzIEjAAIAAKzg");
	var mask_graphics_347 = new cjs.Graphics().p("AiXFaIAAqzIEwAAIAAKzg");
	var mask_graphics_348 = new cjs.Graphics().p("AidFaIAAqzIE7AAIAAKzg");
	var mask_graphics_349 = new cjs.Graphics().p("AijFaIAAqzIFHAAIAAKzg");
	var mask_graphics_350 = new cjs.Graphics().p("AipFaIAAqzIFTAAIAAKzg");
	var mask_graphics_351 = new cjs.Graphics().p("AivFaIAAqzIFfAAIAAKzg");
	var mask_graphics_352 = new cjs.Graphics().p("Ai0FaIAAqzIFpAAIAAKzg");
	var mask_graphics_353 = new cjs.Graphics().p("Ai6FaIAAqzIF1AAIAAKzg");
	var mask_graphics_354 = new cjs.Graphics().p("AjAFaIAAqzIGBAAIAAKzg");
	var mask_graphics_355 = new cjs.Graphics().p("AjGFaIAAqzIGNAAIAAKzg");
	var mask_graphics_356 = new cjs.Graphics().p("AjMFaIAAqzIGZAAIAAKzg");
	var mask_graphics_357 = new cjs.Graphics().p("AjSFaIAAqzIGkAAIAAKzg");
	var mask_graphics_358 = new cjs.Graphics().p("AjXFaIAAqzIGvAAIAAKzg");
	var mask_graphics_359 = new cjs.Graphics().p("AjdFaIAAqzIG7AAIAAKzg");
	var mask_graphics_360 = new cjs.Graphics().p("AjjFaIAAqzIHHAAIAAKzg");
	var mask_graphics_361 = new cjs.Graphics().p("AjpFaIAAqzIHTAAIAAKzg");
	var mask_graphics_362 = new cjs.Graphics().p("AjvFaIAAqzIHfAAIAAKzg");
	var mask_graphics_363 = new cjs.Graphics().p("Ag7auIAAq1IHqAAIAAK1g");
	var mask_graphics_364 = new cjs.Graphics().p("Aj9FaIAAqzIH7AAIAAKzg");
	var mask_graphics_365 = new cjs.Graphics().p("AkFFaIAAqzIIKAAIAAKzg");
	var mask_graphics_366 = new cjs.Graphics().p("AkNFaIAAqzIIaAAIAAKzg");
	var mask_graphics_367 = new cjs.Graphics().p("AkVFaIAAqzIIrAAIAAKzg");
	var mask_graphics_368 = new cjs.Graphics().p("AkdFaIAAqzII7AAIAAKzg");
	var mask_graphics_369 = new cjs.Graphics().p("AkkFaIAAqzIJJAAIAAKzg");
	var mask_graphics_370 = new cjs.Graphics().p("AksFaIAAqzIJZAAIAAKzg");
	var mask_graphics_371 = new cjs.Graphics().p("Ak0FaIAAqzIJpAAIAAKzg");
	var mask_graphics_372 = new cjs.Graphics().p("Ak8FaIAAqzIJ5AAIAAKzg");
	var mask_graphics_373 = new cjs.Graphics().p("AlEFaIAAqzIKJAAIAAKzg");
	var mask_graphics_374 = new cjs.Graphics().p("AlMFaIAAqzIKZAAIAAKzg");
	var mask_graphics_375 = new cjs.Graphics().p("AlUFaIAAqzIKpAAIAAKzg");
	var mask_graphics_376 = new cjs.Graphics().p("AlcFaIAAqzIK5AAIAAKzg");
	var mask_graphics_377 = new cjs.Graphics().p("AlkFaIAAqzILJAAIAAKzg");
	var mask_graphics_378 = new cjs.Graphics().p("AlsFaIAAqzILZAAIAAKzg");
	var mask_graphics_379 = new cjs.Graphics().p("Al0FaIAAqzILpAAIAAKzg");
	var mask_graphics_380 = new cjs.Graphics().p("Al8FaIAAqzIL5AAIAAKzg");
	var mask_graphics_381 = new cjs.Graphics().p("AmEFaIAAqzIMJAAIAAKzg");
	var mask_graphics_382 = new cjs.Graphics().p("AmMFaIAAqzIMZAAIAAKzg");
	var mask_graphics_383 = new cjs.Graphics().p("AmUFaIAAqzIMpAAIAAKzg");
	var mask_graphics_384 = new cjs.Graphics().p("AmcFaIAAqzIM5AAIAAKzg");
	var mask_graphics_385 = new cjs.Graphics().p("AjqauIAAq1INJAAIAAK1g");
	var mask_graphics_386 = new cjs.Graphics().p("AmuFaIAAqzINdAAIAAKzg");
	var mask_graphics_387 = new cjs.Graphics().p("Am4FaIAAqzINxAAIAAKzg");
	var mask_graphics_388 = new cjs.Graphics().p("AnCFaIAAqzIOEAAIAAKzg");
	var mask_graphics_389 = new cjs.Graphics().p("AnMFaIAAqzIOZAAIAAKzg");
	var mask_graphics_390 = new cjs.Graphics().p("AnVFaIAAqzIOrAAIAAKzg");
	var mask_graphics_391 = new cjs.Graphics().p("AnfFaIAAqzIO/AAIAAKzg");
	var mask_graphics_392 = new cjs.Graphics().p("AnpFaIAAqzIPTAAIAAKzg");
	var mask_graphics_393 = new cjs.Graphics().p("AnzFaIAAqzIPnAAIAAKzg");
	var mask_graphics_394 = new cjs.Graphics().p("An9FaIAAqzIP7AAIAAKzg");
	var mask_graphics_395 = new cjs.Graphics().p("AoGFaIAAqzIQNAAIAAKzg");
	var mask_graphics_396 = new cjs.Graphics().p("AoQFaIAAqzIQhAAIAAKzg");
	var mask_graphics_397 = new cjs.Graphics().p("AoaFaIAAqzIQ1AAIAAKzg");
	var mask_graphics_398 = new cjs.Graphics().p("AokFaIAAqzIRJAAIAAKzg");
	var mask_graphics_399 = new cjs.Graphics().p("AouFaIAAqzIRdAAIAAKzg");
	var mask_graphics_400 = new cjs.Graphics().p("Ao4FaIAAqzIRxAAIAAKzg");
	var mask_graphics_401 = new cjs.Graphics().p("ApCFaIAAqzISFAAIAAKzg");
	var mask_graphics_402 = new cjs.Graphics().p("ApMFaIAAqzISYAAIAAKzg");
	var mask_graphics_403 = new cjs.Graphics().p("ApVFaIAAqzISrAAIAAKzg");
	var mask_graphics_404 = new cjs.Graphics().p("ApfFaIAAqzIS/AAIAAKzg");
	var mask_graphics_405 = new cjs.Graphics().p("AppFaIAAqzITTAAIAAKzg");
	var mask_graphics_406 = new cjs.Graphics().p("ApzFaIAAqzITnAAIAAKzg");
	var mask_graphics_407 = new cjs.Graphics().p("Ap9FaIAAqzIT7AAIAAKzg");
	var mask_graphics_408 = new cjs.Graphics().p("AqHFaIAAqzIUOAAIAAKzg");
	var mask_graphics_409 = new cjs.Graphics().p("AqRFaIAAqzIUjAAIAAKzg");
	var mask_graphics_410 = new cjs.Graphics().p("AqaFaIAAqzIU1AAIAAKzg");
	var mask_graphics_411 = new cjs.Graphics().p("AqkFaIAAqzIVJAAIAAKzg");
	var mask_graphics_412 = new cjs.Graphics().p("AquFaIAAqzIVdAAIAAKzg");
	var mask_graphics_413 = new cjs.Graphics().p("Aq4FaIAAqzIVxAAIAAKzg");
	var mask_graphics_414 = new cjs.Graphics().p("ArCFaIAAqzIWFAAIAAKzg");
	var mask_graphics_415 = new cjs.Graphics().p("ArMFaIAAqzIWYAAIAAKzg");
	var mask_graphics_416 = new cjs.Graphics().p("ArVFaIAAqzIWrAAIAAKzg");
	var mask_graphics_417 = new cjs.Graphics().p("ArfFaIAAqzIW/AAIAAKzg");
	var mask_graphics_418 = new cjs.Graphics().p("ArpFaIAAqzIXTAAIAAKzg");
	var mask_graphics_419 = new cjs.Graphics().p("ArzFaIAAqzIXnAAIAAKzg");
	var mask_graphics_420 = new cjs.Graphics().p("Ar9FaIAAqzIX7AAIAAKzg");
	var mask_graphics_421 = new cjs.Graphics().p("AsGFaIAAqzIYOAAIAAKzg");
	var mask_graphics_422 = new cjs.Graphics().p("AsQFaIAAqzIYhAAIAAKzg");
	var mask_graphics_423 = new cjs.Graphics().p("AsaFaIAAqzIY1AAIAAKzg");
	var mask_graphics_424 = new cjs.Graphics().p("AskFaIAAqzIZJAAIAAKzg");
	var mask_graphics_425 = new cjs.Graphics().p("AsuFaIAAqzIZdAAIAAKzg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(336).to({graphics:mask_graphics_336,x:27.4,y:171}).wait(1).to({graphics:mask_graphics_337,x:46.4,y:307.3}).wait(1).to({graphics:mask_graphics_338,x:47,y:307.3}).wait(1).to({graphics:mask_graphics_339,x:47.6,y:307.3}).wait(1).to({graphics:mask_graphics_340,x:48.2,y:307.3}).wait(1).to({graphics:mask_graphics_341,x:48.8,y:307.3}).wait(1).to({graphics:mask_graphics_342,x:49.4,y:307.3}).wait(1).to({graphics:mask_graphics_343,x:50,y:307.3}).wait(1).to({graphics:mask_graphics_344,x:50.6,y:307.3}).wait(1).to({graphics:mask_graphics_345,x:51.1,y:307.3}).wait(1).to({graphics:mask_graphics_346,x:51.7,y:307.3}).wait(1).to({graphics:mask_graphics_347,x:52.3,y:307.3}).wait(1).to({graphics:mask_graphics_348,x:52.9,y:307.3}).wait(1).to({graphics:mask_graphics_349,x:53.5,y:307.3}).wait(1).to({graphics:mask_graphics_350,x:54.1,y:307.3}).wait(1).to({graphics:mask_graphics_351,x:54.6,y:307.3}).wait(1).to({graphics:mask_graphics_352,x:55.2,y:307.3}).wait(1).to({graphics:mask_graphics_353,x:55.8,y:307.3}).wait(1).to({graphics:mask_graphics_354,x:56.4,y:307.3}).wait(1).to({graphics:mask_graphics_355,x:57,y:307.3}).wait(1).to({graphics:mask_graphics_356,x:57.6,y:307.3}).wait(1).to({graphics:mask_graphics_357,x:58.2,y:307.3}).wait(1).to({graphics:mask_graphics_358,x:58.7,y:307.3}).wait(1).to({graphics:mask_graphics_359,x:59.3,y:307.3}).wait(1).to({graphics:mask_graphics_360,x:59.9,y:307.3}).wait(1).to({graphics:mask_graphics_361,x:60.5,y:307.3}).wait(1).to({graphics:mask_graphics_362,x:61.1,y:307.3}).wait(1).to({graphics:mask_graphics_363,x:43.1,y:171}).wait(1).to({graphics:mask_graphics_364,x:62.5,y:307.3}).wait(1).to({graphics:mask_graphics_365,x:63.3,y:307.3}).wait(1).to({graphics:mask_graphics_366,x:64.1,y:307.3}).wait(1).to({graphics:mask_graphics_367,x:64.9,y:307.3}).wait(1).to({graphics:mask_graphics_368,x:65.7,y:307.3}).wait(1).to({graphics:mask_graphics_369,x:66.5,y:307.3}).wait(1).to({graphics:mask_graphics_370,x:67.3,y:307.3}).wait(1).to({graphics:mask_graphics_371,x:68.1,y:307.3}).wait(1).to({graphics:mask_graphics_372,x:68.9,y:307.3}).wait(1).to({graphics:mask_graphics_373,x:69.7,y:307.3}).wait(1).to({graphics:mask_graphics_374,x:70.5,y:307.3}).wait(1).to({graphics:mask_graphics_375,x:71.3,y:307.3}).wait(1).to({graphics:mask_graphics_376,x:72.1,y:307.3}).wait(1).to({graphics:mask_graphics_377,x:72.9,y:307.3}).wait(1).to({graphics:mask_graphics_378,x:73.7,y:307.3}).wait(1).to({graphics:mask_graphics_379,x:74.5,y:307.3}).wait(1).to({graphics:mask_graphics_380,x:75.3,y:307.3}).wait(1).to({graphics:mask_graphics_381,x:76.1,y:307.3}).wait(1).to({graphics:mask_graphics_382,x:76.9,y:307.3}).wait(1).to({graphics:mask_graphics_383,x:77.7,y:307.3}).wait(1).to({graphics:mask_graphics_384,x:78.5,y:307.3}).wait(1).to({graphics:mask_graphics_385,x:60.7,y:171}).wait(1).to({graphics:mask_graphics_386,x:80.3,y:307.3}).wait(1).to({graphics:mask_graphics_387,x:81.3,y:307.3}).wait(1).to({graphics:mask_graphics_388,x:82.3,y:307.3}).wait(1).to({graphics:mask_graphics_389,x:83.3,y:307.3}).wait(1).to({graphics:mask_graphics_390,x:84.3,y:307.3}).wait(1).to({graphics:mask_graphics_391,x:85.3,y:307.3}).wait(1).to({graphics:mask_graphics_392,x:86.3,y:307.3}).wait(1).to({graphics:mask_graphics_393,x:87.2,y:307.3}).wait(1).to({graphics:mask_graphics_394,x:88.2,y:307.3}).wait(1).to({graphics:mask_graphics_395,x:89.2,y:307.3}).wait(1).to({graphics:mask_graphics_396,x:90.2,y:307.3}).wait(1).to({graphics:mask_graphics_397,x:91.2,y:307.3}).wait(1).to({graphics:mask_graphics_398,x:92.2,y:307.3}).wait(1).to({graphics:mask_graphics_399,x:93.2,y:307.3}).wait(1).to({graphics:mask_graphics_400,x:94.2,y:307.3}).wait(1).to({graphics:mask_graphics_401,x:95.2,y:307.3}).wait(1).to({graphics:mask_graphics_402,x:96.2,y:307.3}).wait(1).to({graphics:mask_graphics_403,x:97.1,y:307.3}).wait(1).to({graphics:mask_graphics_404,x:98.1,y:307.3}).wait(1).to({graphics:mask_graphics_405,x:99.1,y:307.3}).wait(1).to({graphics:mask_graphics_406,x:100.1,y:307.3}).wait(1).to({graphics:mask_graphics_407,x:101.1,y:307.3}).wait(1).to({graphics:mask_graphics_408,x:102.1,y:307.3}).wait(1).to({graphics:mask_graphics_409,x:103.1,y:307.3}).wait(1).to({graphics:mask_graphics_410,x:104.1,y:307.3}).wait(1).to({graphics:mask_graphics_411,x:105.1,y:307.3}).wait(1).to({graphics:mask_graphics_412,x:106.1,y:307.3}).wait(1).to({graphics:mask_graphics_413,x:107,y:307.3}).wait(1).to({graphics:mask_graphics_414,x:108,y:307.3}).wait(1).to({graphics:mask_graphics_415,x:109,y:307.3}).wait(1).to({graphics:mask_graphics_416,x:110,y:307.3}).wait(1).to({graphics:mask_graphics_417,x:111,y:307.3}).wait(1).to({graphics:mask_graphics_418,x:112,y:307.3}).wait(1).to({graphics:mask_graphics_419,x:113,y:307.3}).wait(1).to({graphics:mask_graphics_420,x:114,y:307.3}).wait(1).to({graphics:mask_graphics_421,x:115,y:307.3}).wait(1).to({graphics:mask_graphics_422,x:116,y:307.3}).wait(1).to({graphics:mask_graphics_423,x:116.9,y:307.3}).wait(1).to({graphics:mask_graphics_424,x:117.9,y:307.3}).wait(1).to({graphics:mask_graphics_425,x:118.9,y:307.3}).wait(212));

	// Layer 7
	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(20,1,1).p("AqijfQFbKOPqkv");
	this.shape_120.setTransform(122.4,306.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(20,1,1).p("AVIzRIwdehIgBABQmFKPnLi0QnLi1iglpQiglpgWkM");
	this.shape_121.setTransform(189.9,281.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(20,1,1).p("A5ADVQGJn0K+BaIQGDUQIKBEIqkn");
	this.shape_122.setTransform(332.9,168.3);

	var maskedShapeInstanceList = [this.shape_120,this.shape_121,this.shape_122];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_122},{t:this.shape_121},{t:this.shape_120}]},336).wait(301));

	// Layer 10
	this.instance_4 = new lib.ar5("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(333,279.8,1,1,28,0,0,0.1,-1.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(140).to({_off:false},0).wait(497));

	// Layer 6 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_254 = new cjs.Graphics().p("AiGw8QMIAAIlIkQIlIlAAMJQAAMJolIkQolImsIAAg");
	var mask_1_graphics_255 = new cjs.Graphics().p("EgDVApnMACfg6hQMHAhINI7QIOI7ghMJQghMIo9IMQoZHvrOAAQgtAAgugCg");
	var mask_1_graphics_256 = new cjs.Graphics().p("EgEkApiMAE8g6XQMHBCHzJRQH1JRhCMGQhBMGpTH0QoMG7qYAAQhYAAhZgIg");
	var mask_1_graphics_257 = new cjs.Graphics().p("EgF0ApZMAHbg6GQMDBjHaJlQHbJmhiMDQhjMCpnHaQn8GKpnAAQh/AAiFgRg");
	var mask_1_graphics_258 = new cjs.Graphics().p("EgHDApNMAJ5g5uQL9CDHAJ5QHBJ6iDL9QiEL+p6G/QnqFco4AAQimAAiugeg");
	var mask_1_graphics_259 = new cjs.Graphics().p("EgIRAo9MAMVg5PQL3CkGkKLQGmKMikL3QijL3qNGkQnWEwoMAAQjMAAjUgug");
	var mask_1_graphics_260 = new cjs.Graphics().p("EgJeAorMAOvg4rQLwDEGIKcQGJKdjELwQjDLwqeGHQm/EHniAAQjxAAj5hAg");
	var mask_1_graphics_261 = new cjs.Graphics().p("EgKrAoVMARIg3/QLnDjFrKtQFtKtjjLmQjkLnquFrQmmDhm6AAQkVAAkdhXg");
	var mask_1_graphics_262 = new cjs.Graphics().p("EgL2An8MATfg3NQLcEDFOK7QFPK8kCLcQkDLcq9FOQmLC9mUAAQk5AAk+hwg");
	var mask_1_graphics_263 = new cjs.Graphics().p("EgNBAnfMAV0g2UQLREiEwLHQExLLkhLQQkiLRrKEvQluCdlvAAQldAAlfiNg");
	var mask_1_graphics_264 = new cjs.Graphics().p("EgOJAnAMAYGg1VQLDFAESLUQESLWlALEQk/LDrWERQlQB/lKAAQmCAAl8isg");
	var mask_1_graphics_265 = new cjs.Graphics().p("EgPRAmeMAaWg0QQK1FdDzLfQDzLileK1QldK1rhDyQkvBkkmAAQmnAAmZjOg");
	var mask_1_graphics_266 = new cjs.Graphics().p("EgQWAl6MAcigzGQKlF6DTLpQDULrl6KmQl7KlrrDTQkMBMkCAAQnOAAmyjyg");
	var mask_1_graphics_267 = new cjs.Graphics().p("EgRaAlSMAergx1QKVGXCzLwQC0L0mXKVQmXKVrzCyQjoA4jeAAQn2AAnKkag");
	var mask_1_graphics_268 = new cjs.Graphics().p("EgScAknMAgwgweQKDGyCTL4QCUL6mzKDQmyKDr6CTQjCAli5AAQohAAnflEg");
	var mask_1_graphics_269 = new cjs.Graphics().p("EgTcAj6MAiygvCQJwHNByL9QBzMAnNJwQnNJwsAByQiYAXiVAAQpOAAnylxg");
	var mask_1_graphics_270 = new cjs.Graphics().p("EgUaAjKMAkvgthQJcHoBSMAQBSMFnnJbQnoJcsDBRQhvAMhtAAQp+AAoDmgg");
	var mask_1_graphics_271 = new cjs.Graphics().p("EgVWAiYMAmogr7QJHIBAxMDQAyMHoBJHQoAJGsFAxQhGAEhDAAQqxAAoSnSg");
	var mask_1_graphics_272 = new cjs.Graphics().p("EgWQAhiMAodgqOQIwIYARMFQAQMJoYIwQoZIwsGAPIgxABQroAAoeoIg");
	var mask_1_graphics_273 = new cjs.Graphics().p("EgCoApqQsIgQoYowMAqNgoeQIZIvgQMGQgQMIowIZQofIIrnAAIgwAAg");
	var mask_1_graphics_274 = new cjs.Graphics().p("EgD4ApmQsGgwoApGMAr5gmpQIBJFgyMFQgxMGpGIBQoSHTqwAAQhEAAhFgFg");
	var mask_1_graphics_275 = new cjs.Graphics().p("EgFHApfQsDhRnnpcMAtfgkvQHoJahSMCQhSMEpcHnQoDGhp9AAQhtAAhwgMg");
	var mask_1_graphics_276 = new cjs.Graphics().p("EgGBApXQsAhpnVpqMAuogjTQHUJphqL/QhqMBpqHUQn4F9pZAAQiJAAiPgUg");
	var mask_1_graphics_277 = new cjs.Graphics().p("EgG8ApOQr8iBnBp5MAvugh0QHAJ3iCL8QiCL9p5HBQnqFbo3AAQimAAitgeg");
	var mask_1_graphics_278 = new cjs.Graphics().p("EgH2ApDQr4iZmsqGMAwvggUQGtKFiaL3QiaL5qGGsQnbE7oXAAQjCAAjKgpg");
	var mask_1_graphics_279 = new cjs.Graphics().p("EgIvAo2QrziwmYqUMAxvgexQGYKSixLyQiyL0qUGYQnLEcn4AAQjdAAjlg3g");
	var mask_1_graphics_280 = new cjs.Graphics().p("EgJkAooQrtjImEqhMAysgdMQGDKfjJLsQjJLtqhGEQm5D+naAAQj4AAkAhFg");
	var mask_1_graphics_281 = new cjs.Graphics().p("EgKPAoYQrmjgluqsMAzkgbmQFvKrjhLlQjhLnqsFuQmnDjm9AAQkSAAkbhWg");
	var mask_1_graphics_282 = new cjs.Graphics().p("EgK5AoGQrgj3lYq3MA0bgZ+QFYK2j3LeQj4Lfq4FZQmTDImgAAQkuAAkzhog");
	var mask_1_graphics_283 = new cjs.Graphics().p("EgLkAnyQrXkNlDrCMA1NgYWQFDLCkOLWQkPLYrCFCQl/CwmFAAQlHAAlMh9g");
	var mask_1_graphics_284 = new cjs.Graphics().p("EgMPAndQrOkkktrMMA19gWqQEsLMklLNQklLPrMEsQlqCYlpAAQliAAljiSg");
	var mask_1_graphics_285 = new cjs.Graphics().p("EgM6AnGQrFk6kWrVMA2pgU9QEWLUk8LEQk8LFrUEWQlTCClOAAQl+AAl5ipg");
	var mask_1_graphics_286 = new cjs.Graphics().p("EgNlAmuQq7lRj/rdMA3RgTPQD/LdlRK5QlSK7rdD/Qk7Buk0AAQmZAAmOjBg");
	var mask_1_graphics_287 = new cjs.Graphics().p("EgOQAmUQqwlnjorkMA32gRgQDoLklnKvQloKwrlDoQkiBbkZAAQm1AAmijbg");
	var mask_1_graphics_288 = new cjs.Graphics().p("EgO7Al4Qqll8jQrrMA4XgPwQDRLsl8KjQl+KlrrDQQkJBKj+AAQnTAAm0j3g");
	var mask_1_graphics_289 = new cjs.Graphics().p("EgPmAlbQqYmRi6ryMA42gN+QC5LymRKXQmSKYryC6QjuA6jjAAQnxAAnGkUg");
	var mask_1_graphics_290 = new cjs.Graphics().p("EgQRAk9QqLmmiir3MA5QgMMQCiL3mmKKQmnKMr3ChQjSAtjJAAQoQAAnWkyg");
	var mask_1_graphics_291 = new cjs.Graphics().p("EgQ8AkcQp+m5iJr9MA5ngKYQCJL8m6J8Qm7J+r8CKQi1AhitAAQowAAnmlTg");
	var mask_1_graphics_292 = new cjs.Graphics().p("EgRmAj7QpwnOhysAMA56gIlQByMAnOJvQnPJvsAByQiXAXiRAAQpSAAnzl0g");
	var mask_1_graphics_293 = new cjs.Graphics().p("EgSRAjYQphnhhZsEMA6JgGwQBaMDnhJgQniJhsEBZQh5AOhzAAQp1AAoBmWg");
	var mask_1_graphics_294 = new cjs.Graphics().p("EgS7AizQpSn0hBsGMA6WgE8QBBMGn0JRQn1JRsGBCQhZAHhWAAQqaAAoMm7g");
	var mask_1_graphics_295 = new cjs.Graphics().p("EgTlAiNQpCoGgpsIMA6egDHQApMIoGJAQoIJCsHApQg5ADg3AAQrBAAoWnhg");
	var mask_1_graphics_296 = new cjs.Graphics().p("EgUPAhlQoxoYgRsIMA6jgBSQARMJoZIwQoZIxsJARIguAAQrqAAofoJg");
	var mask_1_graphics_297 = new cjs.Graphics().p("EgARApuQsJgHoeorQohopAIsJMA6jAAkQgHMJopIfQokIZr7AAIgUgBg");
	var mask_1_graphics_298 = new cjs.Graphics().p("EgBLAptQsIggoNo7QoPo6AgsJMA6hACaQggMIo6INQobHxrRAAQgrAAgsgCg");
	var mask_1_graphics_299 = new cjs.Graphics().p("EgCEApqQsGg4n7pMQn9pLA4sGMA6bAEOQg4MHpLH7QoRHKqpAAQhLAAhNgFg");
	var mask_1_graphics_300 = new cjs.Graphics().p("EgC7ApkQsFhQnopbQnqpaBQsFMA6QAGDQhQMFpaHpQoGGlqEAAQhoAAhtgMg");
	var mask_1_graphics_301 = new cjs.Graphics().p("EgDqApeQsChlnYpoQnapnBlsCMA6FAHnQhlMCpnHZQn8GGplAAQiBAAiIgSg");
	var mask_1_graphics_302 = new cjs.Graphics().p("EgEXApXQsAh5nHp1QnKp0B6r/MA53AJKQh6MApzHIQnxFppHAAQiaAAihgag");
	var mask_1_graphics_303 = new cjs.Graphics().p("EgFEApOQr8iOm3qAQm4qACOr8MA5mAKuQiOL7p/G3QnlFNorAAQiyAAi6gjg");
	var mask_1_graphics_304 = new cjs.Graphics().p("EgFwApEQr4iimlqMQmnqLCir4MA5SAMQQiiL3qLGmQnXExoQAAQjJAAjTgtg");
	var mask_1_graphics_305 = new cjs.Graphics().p("EgGbAo5Qrzi3mUqXQmWqWC3rzMA48ANxQi3LzqWGUQnJEYn1AAQjhAAjqg5g");
	var mask_1_graphics_306 = new cjs.Graphics().p("EgHFAotQrujLmCqiQmEqhDLruMA4jAPTQjLLuqgGCQm7D+nbAAQj4AAkBhFg");
	var mask_1_graphics_307 = new cjs.Graphics().p("EgHuAofQrpjflvqsQlyqqDfrpMA4HAQzQjfLoqqFwQmrDmnCAAQkOAAkYhTg");
	var mask_1_graphics_308 = new cjs.Graphics().p("EgIXAoQQrijzldq1Qlfq1DyriMA3qASSQjzLjq0FdQmaDQmqAAQklAAkuhjg");
	var mask_1_graphics_309 = new cjs.Graphics().p("EgI+An/QrbkGlLq+QlMq+EGrbMA3JATxQkGLbq9FLQmJC6mSAAQk8AAlDh0g");
	var mask_1_graphics_310 = new cjs.Graphics().p("EgJkAnuQrUkak4rHQk5rGEZrUMA2mAVPQkZLUrGE4Ql3Cll6AAQlTAAlXiFg");
	var mask_1_graphics_311 = new cjs.Graphics().p("EgKJAnbQrMktklrPQknrOEtrMMA2BAWrQktLNrOElQlkCRljAAQlqAAlqiYg");
	var mask_1_graphics_312 = new cjs.Graphics().p("EgKtAnHQrElAkRrWQkUrWFArEMA1ZAYHQlALFrWERQlQB/lLAAQmCAAl9isg");
	var mask_1_graphics_313 = new cjs.Graphics().p("EgLQAmyQq7lSj+reQkArdFTq6MA0uAZhQlTK7rcD/Qk8Btk1AAQmZAAmPjBg");
	var mask_1_graphics_314 = new cjs.Graphics().p("EgLyAmcQqxlljrrkQjsrkFlqxMA0CAa7QlmKyrjDrQkmBdkeAAQmyAAmgjXg");
	var mask_1_graphics_315 = new cjs.Graphics().p("EgMSAmFQqol4jXrqQjYrqF4qnMAzSAcUQl4KorpDXQkQBOkIAAQnKAAmwjug");
	var mask_1_graphics_316 = new cjs.Graphics().p("EgMxAlsQqemJjDrwQjErvGKqdMAygAdqQmKKeruDDQj6BBjwAAQnkAAm/kHg");
	var mask_1_graphics_317 = new cjs.Graphics().p("EgNQAlTQqTmciur0Qiwr1GbqSMAxtAfBQmcKTrzCvQjiA0jaAAQn9AAnPkgg");
	var mask_1_graphics_318 = new cjs.Graphics().p("EgNtAk4QqHmtiar5Qicr5GtqGMAw2AgUQmtKIr4CbQjKApjCAAQoZAAnck7g");
	var mask_1_graphics_319 = new cjs.Graphics().p("EgOIAkcQp8m+iGr9QiHr8G+p8MAv9AhoQm+J8r7CGQiyAgiqAAQo0AAnplXg");
	var mask_1_graphics_320 = new cjs.Graphics().p("EgOjAkAQpwnPhxsAQhzsAHPpvMAvDAi4QnOJxr/BxQiYAXiTAAQpRAAn1lzg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(254).to({graphics:mask_1_graphics_254,x:174,y:266.5}).wait(1).to({graphics:mask_1_graphics_255,x:174.1,y:266.5}).wait(1).to({graphics:mask_1_graphics_256,x:174.1,y:266.6}).wait(1).to({graphics:mask_1_graphics_257,x:174.2,y:266.6}).wait(1).to({graphics:mask_1_graphics_258,x:174.2,y:266.7}).wait(1).to({graphics:mask_1_graphics_259,x:174.3,y:266.7}).wait(1).to({graphics:mask_1_graphics_260,x:174.3,y:266.7}).wait(1).to({graphics:mask_1_graphics_261,x:174.4,y:266.8}).wait(1).to({graphics:mask_1_graphics_262,x:174.4,y:266.8}).wait(1).to({graphics:mask_1_graphics_263,x:174.4,y:266.8}).wait(1).to({graphics:mask_1_graphics_264,x:174.5,y:266.8}).wait(1).to({graphics:mask_1_graphics_265,x:174.4,y:266.8}).wait(1).to({graphics:mask_1_graphics_266,x:174.4,y:266.8}).wait(1).to({graphics:mask_1_graphics_267,x:174.4,y:266.8}).wait(1).to({graphics:mask_1_graphics_268,x:174.4,y:266.7}).wait(1).to({graphics:mask_1_graphics_269,x:174.3,y:266.7}).wait(1).to({graphics:mask_1_graphics_270,x:174.3,y:266.6}).wait(1).to({graphics:mask_1_graphics_271,x:174.3,y:266.6}).wait(1).to({graphics:mask_1_graphics_272,x:174.2,y:266.6}).wait(1).to({graphics:mask_1_graphics_273,x:174.2,y:266.6}).wait(1).to({graphics:mask_1_graphics_274,x:174.3,y:266.7}).wait(1).to({graphics:mask_1_graphics_275,x:174.3,y:266.7}).wait(1).to({graphics:mask_1_graphics_276,x:174.4,y:266.7}).wait(1).to({graphics:mask_1_graphics_277,x:174.4,y:266.8}).wait(1).to({graphics:mask_1_graphics_278,x:174.5,y:266.8}).wait(1).to({graphics:mask_1_graphics_279,x:174.5,y:266.9}).wait(1).to({graphics:mask_1_graphics_280,x:174.2,y:266.9}).wait(1).to({graphics:mask_1_graphics_281,x:172.8,y:267}).wait(1).to({graphics:mask_1_graphics_282,x:171.5,y:267}).wait(1).to({graphics:mask_1_graphics_283,x:170.2,y:267.1}).wait(1).to({graphics:mask_1_graphics_284,x:169.1,y:267.1}).wait(1).to({graphics:mask_1_graphics_285,x:168,y:267.1}).wait(1).to({graphics:mask_1_graphics_286,x:167,y:267.1}).wait(1).to({graphics:mask_1_graphics_287,x:166.1,y:267.1}).wait(1).to({graphics:mask_1_graphics_288,x:165.2,y:267.1}).wait(1).to({graphics:mask_1_graphics_289,x:164.4,y:267.1}).wait(1).to({graphics:mask_1_graphics_290,x:163.8,y:267.1}).wait(1).to({graphics:mask_1_graphics_291,x:163.2,y:267.1}).wait(1).to({graphics:mask_1_graphics_292,x:162.7,y:267.1}).wait(1).to({graphics:mask_1_graphics_293,x:162.2,y:267}).wait(1).to({graphics:mask_1_graphics_294,x:161.9,y:267}).wait(1).to({graphics:mask_1_graphics_295,x:161.7,y:267}).wait(1).to({graphics:mask_1_graphics_296,x:161.6,y:267}).wait(1).to({graphics:mask_1_graphics_297,x:161.5,y:267.1}).wait(1).to({graphics:mask_1_graphics_298,x:161.4,y:267.1}).wait(1).to({graphics:mask_1_graphics_299,x:161.2,y:267.1}).wait(1).to({graphics:mask_1_graphics_300,x:160.8,y:267.2}).wait(1).to({graphics:mask_1_graphics_301,x:160.5,y:267.2}).wait(1).to({graphics:mask_1_graphics_302,x:160.1,y:267.3}).wait(1).to({graphics:mask_1_graphics_303,x:159.6,y:267.3}).wait(1).to({graphics:mask_1_graphics_304,x:159.1,y:267.3}).wait(1).to({graphics:mask_1_graphics_305,x:158.5,y:267.4}).wait(1).to({graphics:mask_1_graphics_306,x:157.8,y:267.4}).wait(1).to({graphics:mask_1_graphics_307,x:157.1,y:267.4}).wait(1).to({graphics:mask_1_graphics_308,x:156.3,y:267.5}).wait(1).to({graphics:mask_1_graphics_309,x:155.5,y:267.5}).wait(1).to({graphics:mask_1_graphics_310,x:154.6,y:267.5}).wait(1).to({graphics:mask_1_graphics_311,x:153.7,y:267.5}).wait(1).to({graphics:mask_1_graphics_312,x:152.6,y:267.5}).wait(1).to({graphics:mask_1_graphics_313,x:151.6,y:267.5}).wait(1).to({graphics:mask_1_graphics_314,x:150.5,y:267.5}).wait(1).to({graphics:mask_1_graphics_315,x:149.3,y:267.5}).wait(1).to({graphics:mask_1_graphics_316,x:148,y:267.5}).wait(1).to({graphics:mask_1_graphics_317,x:146.8,y:267.5}).wait(1).to({graphics:mask_1_graphics_318,x:145.4,y:267.5}).wait(1).to({graphics:mask_1_graphics_319,x:144,y:267.5}).wait(1).to({graphics:mask_1_graphics_320,x:142.6,y:267.5}).wait(317));

	// Layer 5
	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(20,1,1).p("AVIzRIwdehIgBABQmFKPnLi0QnLi1iglpQiglpgWkM");
	this.shape_123.setTransform(189.9,281.5);
	this.shape_123._off = true;

	var maskedShapeInstanceList = [this.shape_123];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_123).wait(254).to({_off:false},0).wait(383));

	// Layer 4 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_140 = new cjs.Graphics().p("AFwMWIAAjrIVQAAIAADrg");
	var mask_2_graphics_141 = new cjs.Graphics().p("AqnCCIAAkDIVPAAIAAEDg");
	var mask_2_graphics_142 = new cjs.Graphics().p("AqnCNIAAkZIVPAAIAAEZg");
	var mask_2_graphics_143 = new cjs.Graphics().p("AqnCZIAAkxIVPAAIAAExg");
	var mask_2_graphics_144 = new cjs.Graphics().p("AqnCmIAAlKIVPAAIAAFKg");
	var mask_2_graphics_145 = new cjs.Graphics().p("AqnCxIAAlhIVPAAIAAFhg");
	var mask_2_graphics_146 = new cjs.Graphics().p("AqnC9IAAl5IVPAAIAAF5g");
	var mask_2_graphics_147 = new cjs.Graphics().p("AqnDJIAAmRIVPAAIAAGRg");
	var mask_2_graphics_148 = new cjs.Graphics().p("AqnDVIAAmpIVPAAIAAGpg");
	var mask_2_graphics_149 = new cjs.Graphics().p("AqnDhIAAnBIVPAAIAAHBg");
	var mask_2_graphics_150 = new cjs.Graphics().p("AqnDtIAAnZIVPAAIAAHZg");
	var mask_2_graphics_151 = new cjs.Graphics().p("AqnD5IAAnxIVPAAIAAHxg");
	var mask_2_graphics_152 = new cjs.Graphics().p("AqnEFIAAoJIVPAAIAAIJg");
	var mask_2_graphics_153 = new cjs.Graphics().p("AqnERIAAohIVPAAIAAIhg");
	var mask_2_graphics_154 = new cjs.Graphics().p("AqnEdIAAo5IVPAAIAAI5g");
	var mask_2_graphics_155 = new cjs.Graphics().p("AqnEpIAApQIVPAAIAAJQg");
	var mask_2_graphics_156 = new cjs.Graphics().p("AqnE1IAApoIVPAAIAAJog");
	var mask_2_graphics_157 = new cjs.Graphics().p("AqnFAIAAp/IVPAAIAAJ/g");
	var mask_2_graphics_158 = new cjs.Graphics().p("AqnFMIAAqXIVPAAIAAKXg");
	var mask_2_graphics_159 = new cjs.Graphics().p("AqnFYIAAqvIVPAAIAAKvg");
	var mask_2_graphics_160 = new cjs.Graphics().p("AqnFkIAArHIVPAAIAALHg");
	var mask_2_graphics_161 = new cjs.Graphics().p("AqnFwIAArfIVPAAIAALfg");
	var mask_2_graphics_162 = new cjs.Graphics().p("AqnF8IAAr3IVPAAIAAL3g");
	var mask_2_graphics_163 = new cjs.Graphics().p("AqnGIIAAsPIVPAAIAAMPg");
	var mask_2_graphics_164 = new cjs.Graphics().p("AqnGUIAAsnIVPAAIAAMng");
	var mask_2_graphics_165 = new cjs.Graphics().p("AqnGgIAAs/IVPAAIAAM/g");
	var mask_2_graphics_166 = new cjs.Graphics().p("AqnGsIAAtXIVPAAIAANXg");
	var mask_2_graphics_167 = new cjs.Graphics().p("AqnG4IAAtvIVPAAIAANvg");
	var mask_2_graphics_168 = new cjs.Graphics().p("AqnHEIAAuHIVPAAIAAOHg");
	var mask_2_graphics_169 = new cjs.Graphics().p("AqnHQIAAufIVPAAIAAOfg");
	var mask_2_graphics_170 = new cjs.Graphics().p("AqnHbIAAu2IVPAAIAAO2g");
	var mask_2_graphics_171 = new cjs.Graphics().p("AqnHoIAAvPIVPAAIAAPPg");
	var mask_2_graphics_172 = new cjs.Graphics().p("AqnHzIAAvmIVPAAIAAPmg");
	var mask_2_graphics_173 = new cjs.Graphics().p("AqnH/IAAv9IVPAAIAAP9g");
	var mask_2_graphics_174 = new cjs.Graphics().p("AqnILIAAwVIVPAAIAAQVg");
	var mask_2_graphics_175 = new cjs.Graphics().p("AqnIXIAAwtIVPAAIAAQtg");
	var mask_2_graphics_176 = new cjs.Graphics().p("AqnIjIAAxFIVPAAIAARFg");
	var mask_2_graphics_177 = new cjs.Graphics().p("AqnIvIAAxdIVPAAIAARdg");
	var mask_2_graphics_178 = new cjs.Graphics().p("AqnI7IAAx1IVPAAIAAR1g");
	var mask_2_graphics_179 = new cjs.Graphics().p("AqnJHIAAyNIVPAAIAASNg");
	var mask_2_graphics_180 = new cjs.Graphics().p("AqnJTIAAylIVPAAIAASlg");
	var mask_2_graphics_181 = new cjs.Graphics().p("AqnJfIAAy9IVPAAIAAS9g");
	var mask_2_graphics_182 = new cjs.Graphics().p("AqnJrIAAzVIVPAAIAATVg");
	var mask_2_graphics_183 = new cjs.Graphics().p("AqnJ3IAAztIVPAAIAATtg");
	var mask_2_graphics_184 = new cjs.Graphics().p("AqnKCIAA0EIVPAAIAAUEg");
	var mask_2_graphics_185 = new cjs.Graphics().p("AqnKPIAA0dIVPAAIAAUdg");
	var mask_2_graphics_186 = new cjs.Graphics().p("AqnKaIAA0zIVPAAIAAUzg");
	var mask_2_graphics_187 = new cjs.Graphics().p("AqnKmIAA1LIVPAAIAAVLg");
	var mask_2_graphics_188 = new cjs.Graphics().p("AqnKyIAA1jIVPAAIAAVjg");
	var mask_2_graphics_189 = new cjs.Graphics().p("AqnK+IAA17IVPAAIAAV7g");
	var mask_2_graphics_190 = new cjs.Graphics().p("AqnLKIAA2TIVPAAIAAWTg");
	var mask_2_graphics_191 = new cjs.Graphics().p("AqnLWIAA2rIVPAAIAAWrg");
	var mask_2_graphics_192 = new cjs.Graphics().p("AqnLjIAA3FIVPAAIAAXFg");
	var mask_2_graphics_193 = new cjs.Graphics().p("AqnLuIAA3cIVPAAIAAXcg");
	var mask_2_graphics_194 = new cjs.Graphics().p("AqnL7IAA31IVPAAIAAX1g");
	var mask_2_graphics_195 = new cjs.Graphics().p("AqnMHIAA4NIVPAAIAAYNg");
	var mask_2_graphics_196 = new cjs.Graphics().p("AqnMTIAA4lIVPAAIAAYlg");
	var mask_2_graphics_197 = new cjs.Graphics().p("AqnMfIAA4+IVPAAIAAY+g");
	var mask_2_graphics_198 = new cjs.Graphics().p("AqnMsIAA5XIVPAAIAAZXg");
	var mask_2_graphics_199 = new cjs.Graphics().p("AqnM4IAA5vIVPAAIAAZvg");
	var mask_2_graphics_200 = new cjs.Graphics().p("AqnNEIAA6HIVPAAIAAaHg");
	var mask_2_graphics_201 = new cjs.Graphics().p("AqnNQIAA6fIVPAAIAAafg");
	var mask_2_graphics_202 = new cjs.Graphics().p("AqnNdIAA65IVPAAIAAa5g");
	var mask_2_graphics_203 = new cjs.Graphics().p("AqnNpIAA7RIVPAAIAAbRg");
	var mask_2_graphics_204 = new cjs.Graphics().p("AqnN1IAA7pIVPAAIAAbpg");
	var mask_2_graphics_205 = new cjs.Graphics().p("AqnOBIAA8BIVPAAIAAcBg");
	var mask_2_graphics_206 = new cjs.Graphics().p("AqnONIAA8ZIVPAAIAAcZg");
	var mask_2_graphics_207 = new cjs.Graphics().p("AqnOZIAA8yIVPAAIAAcyg");
	var mask_2_graphics_208 = new cjs.Graphics().p("AqnOmIAA9LIVPAAIAAdLg");
	var mask_2_graphics_209 = new cjs.Graphics().p("AqnOyIAA9jIVPAAIAAdjg");
	var mask_2_graphics_210 = new cjs.Graphics().p("AqnO+IAA97IVPAAIAAd7g");
	var mask_2_graphics_211 = new cjs.Graphics().p("AqnPLIAA+UIVPAAIAAeUg");
	var mask_2_graphics_212 = new cjs.Graphics().p("AqnPXIAA+tIVPAAIAAetg");
	var mask_2_graphics_213 = new cjs.Graphics().p("AqnPjIAA/FIVPAAIAAfFg");
	var mask_2_graphics_214 = new cjs.Graphics().p("AqnPvIAA/dIVPAAIAAfdg");
	var mask_2_graphics_215 = new cjs.Graphics().p("AqnP7IAA/1IVPAAIAAf1g");
	var mask_2_graphics_216 = new cjs.Graphics().p("AqnQHMAAAggNIVPAAMAAAAgNg");
	var mask_2_graphics_217 = new cjs.Graphics().p("AqnQUMAAAggnIVPAAMAAAAgng");
	var mask_2_graphics_218 = new cjs.Graphics().p("AqnQgMAAAgg/IVPAAMAAAAg/g");
	var mask_2_graphics_219 = new cjs.Graphics().p("AqnQsMAAAghXIVPAAMAAAAhXg");
	var mask_2_graphics_220 = new cjs.Graphics().p("AqnQ4MAAAghvIVPAAMAAAAhvg");
	var mask_2_graphics_221 = new cjs.Graphics().p("AqnRFMAAAgiJIVPAAMAAAAiJg");
	var mask_2_graphics_222 = new cjs.Graphics().p("AqnRRMAAAgihIVPAAMAAAAihg");
	var mask_2_graphics_223 = new cjs.Graphics().p("AqnRdMAAAgi5IVPAAMAAAAi5g");
	var mask_2_graphics_224 = new cjs.Graphics().p("AqnRpMAAAgjRIVPAAMAAAAjRg");
	var mask_2_graphics_225 = new cjs.Graphics().p("AqnR2MAAAgjqIVPAAMAAAAjqg");
	var mask_2_graphics_226 = new cjs.Graphics().p("AqnSCMAAAgkDIVPAAMAAAAkDg");
	var mask_2_graphics_227 = new cjs.Graphics().p("AqnSOMAAAgkbIVPAAMAAAAkbg");
	var mask_2_graphics_228 = new cjs.Graphics().p("AqnSaMAAAgkzIVPAAMAAAAkzg");
	var mask_2_graphics_229 = new cjs.Graphics().p("AqnSmMAAAglLIVPAAMAAAAlLg");
	var mask_2_graphics_230 = new cjs.Graphics().p("AFwdTMAAAglkIVQAAMAAAAlkg");
	var mask_2_graphics_231 = new cjs.Graphics().p("EAFwAg+MAAAgs6IVQAAMAAAAs6g");
	var mask_2_graphics_232 = new cjs.Graphics().p("AqyWdMAAAgs5IVlAAMAAAAs5g");
	var mask_2_graphics_233 = new cjs.Graphics().p("Aq8WdMAAAgs5IV6AAMAAAAs5g");
	var mask_2_graphics_234 = new cjs.Graphics().p("ArHWdMAAAgs5IWPAAMAAAAs5g");
	var mask_2_graphics_235 = new cjs.Graphics().p("ArSWdMAAAgs5IWlAAMAAAAs5g");
	var mask_2_graphics_236 = new cjs.Graphics().p("ArcWdMAAAgs5IW5AAMAAAAs5g");
	var mask_2_graphics_237 = new cjs.Graphics().p("ArnWdMAAAgs5IXPAAMAAAAs5g");
	var mask_2_graphics_238 = new cjs.Graphics().p("AryWdMAAAgs5IXlAAMAAAAs5g");
	var mask_2_graphics_239 = new cjs.Graphics().p("Ar9WdMAAAgs5IX6AAMAAAAs5g");
	var mask_2_graphics_240 = new cjs.Graphics().p("AsHWdMAAAgs5IYPAAMAAAAs5g");
	var mask_2_graphics_241 = new cjs.Graphics().p("AsSWdMAAAgs5IYlAAMAAAAs5g");
	var mask_2_graphics_242 = new cjs.Graphics().p("AscWdMAAAgs5IY5AAMAAAAs5g");
	var mask_2_graphics_243 = new cjs.Graphics().p("AsnWdMAAAgs5IZPAAMAAAAs5g");
	var mask_2_graphics_244 = new cjs.Graphics().p("AsyWdMAAAgs5IZkAAMAAAAs5g");
	var mask_2_graphics_245 = new cjs.Graphics().p("As8WdMAAAgs5IZ5AAMAAAAs5g");
	var mask_2_graphics_246 = new cjs.Graphics().p("AtHWdMAAAgs5IaPAAMAAAAs5g");
	var mask_2_graphics_247 = new cjs.Graphics().p("AtSWdMAAAgs5IakAAMAAAAs5g");
	var mask_2_graphics_248 = new cjs.Graphics().p("AtcWdMAAAgs5Ia5AAMAAAAs5g");
	var mask_2_graphics_249 = new cjs.Graphics().p("AtnWdMAAAgs5IbPAAMAAAAs5g");
	var mask_2_graphics_250 = new cjs.Graphics().p("AtxWdMAAAgs5IbkAAMAAAAs5g");
	var mask_2_graphics_251 = new cjs.Graphics().p("At8WdMAAAgs5Ib5AAMAAAAs5g");
	var mask_2_graphics_252 = new cjs.Graphics().p("AuHWdMAAAgs5IcPAAMAAAAs5g");
	var mask_2_graphics_253 = new cjs.Graphics().p("AuSWdMAAAgs5IclAAMAAAAs5g");
	var mask_2_graphics_254 = new cjs.Graphics().p("EgB4Ag+MAAAgs6Ic5AAMAAAAs6g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(140).to({graphics:mask_2_graphics_140,x:172.8,y:79}).wait(1).to({graphics:mask_2_graphics_141,x:277.6,y:147.5}).wait(1).to({graphics:mask_2_graphics_142,x:277.6,y:148.7}).wait(1).to({graphics:mask_2_graphics_143,x:277.6,y:149.9}).wait(1).to({graphics:mask_2_graphics_144,x:277.6,y:151.1}).wait(1).to({graphics:mask_2_graphics_145,x:277.6,y:152.3}).wait(1).to({graphics:mask_2_graphics_146,x:277.6,y:153.5}).wait(1).to({graphics:mask_2_graphics_147,x:277.6,y:154.7}).wait(1).to({graphics:mask_2_graphics_148,x:277.6,y:155.9}).wait(1).to({graphics:mask_2_graphics_149,x:277.6,y:157.1}).wait(1).to({graphics:mask_2_graphics_150,x:277.6,y:158.3}).wait(1).to({graphics:mask_2_graphics_151,x:277.6,y:159.4}).wait(1).to({graphics:mask_2_graphics_152,x:277.6,y:160.6}).wait(1).to({graphics:mask_2_graphics_153,x:277.6,y:161.8}).wait(1).to({graphics:mask_2_graphics_154,x:277.6,y:163}).wait(1).to({graphics:mask_2_graphics_155,x:277.6,y:164.2}).wait(1).to({graphics:mask_2_graphics_156,x:277.6,y:165.4}).wait(1).to({graphics:mask_2_graphics_157,x:277.6,y:166.6}).wait(1).to({graphics:mask_2_graphics_158,x:277.6,y:167.8}).wait(1).to({graphics:mask_2_graphics_159,x:277.6,y:169}).wait(1).to({graphics:mask_2_graphics_160,x:277.6,y:170.2}).wait(1).to({graphics:mask_2_graphics_161,x:277.6,y:171.4}).wait(1).to({graphics:mask_2_graphics_162,x:277.6,y:172.6}).wait(1).to({graphics:mask_2_graphics_163,x:277.6,y:173.8}).wait(1).to({graphics:mask_2_graphics_164,x:277.6,y:174.9}).wait(1).to({graphics:mask_2_graphics_165,x:277.6,y:176.1}).wait(1).to({graphics:mask_2_graphics_166,x:277.6,y:177.3}).wait(1).to({graphics:mask_2_graphics_167,x:277.6,y:178.5}).wait(1).to({graphics:mask_2_graphics_168,x:277.6,y:179.7}).wait(1).to({graphics:mask_2_graphics_169,x:277.6,y:180.9}).wait(1).to({graphics:mask_2_graphics_170,x:277.6,y:182.1}).wait(1).to({graphics:mask_2_graphics_171,x:277.6,y:183.3}).wait(1).to({graphics:mask_2_graphics_172,x:277.6,y:184.5}).wait(1).to({graphics:mask_2_graphics_173,x:277.6,y:185.6}).wait(1).to({graphics:mask_2_graphics_174,x:277.6,y:186.8}).wait(1).to({graphics:mask_2_graphics_175,x:277.6,y:188}).wait(1).to({graphics:mask_2_graphics_176,x:277.6,y:189.2}).wait(1).to({graphics:mask_2_graphics_177,x:277.6,y:190.4}).wait(1).to({graphics:mask_2_graphics_178,x:277.6,y:191.6}).wait(1).to({graphics:mask_2_graphics_179,x:277.6,y:192.8}).wait(1).to({graphics:mask_2_graphics_180,x:277.6,y:194}).wait(1).to({graphics:mask_2_graphics_181,x:277.6,y:195.2}).wait(1).to({graphics:mask_2_graphics_182,x:277.6,y:196.4}).wait(1).to({graphics:mask_2_graphics_183,x:277.6,y:197.6}).wait(1).to({graphics:mask_2_graphics_184,x:277.6,y:198.8}).wait(1).to({graphics:mask_2_graphics_185,x:277.6,y:200}).wait(1).to({graphics:mask_2_graphics_186,x:277.6,y:201.1}).wait(1).to({graphics:mask_2_graphics_187,x:277.6,y:202.3}).wait(1).to({graphics:mask_2_graphics_188,x:277.6,y:203.5}).wait(1).to({graphics:mask_2_graphics_189,x:277.6,y:204.7}).wait(1).to({graphics:mask_2_graphics_190,x:277.6,y:205.9}).wait(1).to({graphics:mask_2_graphics_191,x:277.6,y:207.1}).wait(1).to({graphics:mask_2_graphics_192,x:277.6,y:208.4}).wait(1).to({graphics:mask_2_graphics_193,x:277.6,y:209.6}).wait(1).to({graphics:mask_2_graphics_194,x:277.6,y:210.8}).wait(1).to({graphics:mask_2_graphics_195,x:277.6,y:212}).wait(1).to({graphics:mask_2_graphics_196,x:277.6,y:213.2}).wait(1).to({graphics:mask_2_graphics_197,x:277.6,y:214.5}).wait(1).to({graphics:mask_2_graphics_198,x:277.6,y:215.7}).wait(1).to({graphics:mask_2_graphics_199,x:277.6,y:216.9}).wait(1).to({graphics:mask_2_graphics_200,x:277.6,y:218.1}).wait(1).to({graphics:mask_2_graphics_201,x:277.6,y:219.3}).wait(1).to({graphics:mask_2_graphics_202,x:277.6,y:220.6}).wait(1).to({graphics:mask_2_graphics_203,x:277.6,y:221.8}).wait(1).to({graphics:mask_2_graphics_204,x:277.6,y:223}).wait(1).to({graphics:mask_2_graphics_205,x:277.6,y:224.2}).wait(1).to({graphics:mask_2_graphics_206,x:277.6,y:225.4}).wait(1).to({graphics:mask_2_graphics_207,x:277.6,y:226.7}).wait(1).to({graphics:mask_2_graphics_208,x:277.6,y:227.9}).wait(1).to({graphics:mask_2_graphics_209,x:277.6,y:229.1}).wait(1).to({graphics:mask_2_graphics_210,x:277.6,y:230.3}).wait(1).to({graphics:mask_2_graphics_211,x:277.6,y:231.5}).wait(1).to({graphics:mask_2_graphics_212,x:277.6,y:232.7}).wait(1).to({graphics:mask_2_graphics_213,x:277.6,y:234}).wait(1).to({graphics:mask_2_graphics_214,x:277.6,y:235.2}).wait(1).to({graphics:mask_2_graphics_215,x:277.6,y:236.4}).wait(1).to({graphics:mask_2_graphics_216,x:277.6,y:237.6}).wait(1).to({graphics:mask_2_graphics_217,x:277.6,y:238.8}).wait(1).to({graphics:mask_2_graphics_218,x:277.6,y:240.1}).wait(1).to({graphics:mask_2_graphics_219,x:277.6,y:241.3}).wait(1).to({graphics:mask_2_graphics_220,x:277.6,y:242.5}).wait(1).to({graphics:mask_2_graphics_221,x:277.6,y:243.7}).wait(1).to({graphics:mask_2_graphics_222,x:277.6,y:244.9}).wait(1).to({graphics:mask_2_graphics_223,x:277.6,y:246.2}).wait(1).to({graphics:mask_2_graphics_224,x:277.6,y:247.4}).wait(1).to({graphics:mask_2_graphics_225,x:277.6,y:248.6}).wait(1).to({graphics:mask_2_graphics_226,x:277.6,y:249.8}).wait(1).to({graphics:mask_2_graphics_227,x:277.6,y:251.1}).wait(1).to({graphics:mask_2_graphics_228,x:277.6,y:252.3}).wait(1).to({graphics:mask_2_graphics_229,x:277.6,y:253.5}).wait(1).to({graphics:mask_2_graphics_230,x:172.8,y:187.5}).wait(1).to({graphics:mask_2_graphics_231,x:172.8,y:211}).wait(1).to({graphics:mask_2_graphics_232,x:276.6,y:278.3}).wait(1).to({graphics:mask_2_graphics_233,x:275.5,y:278.3}).wait(1).to({graphics:mask_2_graphics_234,x:274.5,y:278.3}).wait(1).to({graphics:mask_2_graphics_235,x:273.4,y:278.3}).wait(1).to({graphics:mask_2_graphics_236,x:272.3,y:278.3}).wait(1).to({graphics:mask_2_graphics_237,x:271.3,y:278.3}).wait(1).to({graphics:mask_2_graphics_238,x:270.2,y:278.3}).wait(1).to({graphics:mask_2_graphics_239,x:269.2,y:278.3}).wait(1).to({graphics:mask_2_graphics_240,x:268.1,y:278.3}).wait(1).to({graphics:mask_2_graphics_241,x:267,y:278.3}).wait(1).to({graphics:mask_2_graphics_242,x:266,y:278.3}).wait(1).to({graphics:mask_2_graphics_243,x:264.9,y:278.3}).wait(1).to({graphics:mask_2_graphics_244,x:263.9,y:278.3}).wait(1).to({graphics:mask_2_graphics_245,x:262.8,y:278.3}).wait(1).to({graphics:mask_2_graphics_246,x:261.7,y:278.3}).wait(1).to({graphics:mask_2_graphics_247,x:260.7,y:278.3}).wait(1).to({graphics:mask_2_graphics_248,x:259.6,y:278.3}).wait(1).to({graphics:mask_2_graphics_249,x:258.6,y:278.3}).wait(1).to({graphics:mask_2_graphics_250,x:257.5,y:278.3}).wait(1).to({graphics:mask_2_graphics_251,x:256.4,y:278.3}).wait(1).to({graphics:mask_2_graphics_252,x:255.4,y:278.3}).wait(1).to({graphics:mask_2_graphics_253,x:254.3,y:278.3}).wait(1).to({graphics:mask_2_graphics_254,x:172.9,y:211}).wait(383));

	// Layer 3
	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(20,1,1).p("AVIzRIwdehIgBABQmFKPnLi0QnLi1iglpQiglpgWkM");
	this.shape_124.setTransform(189.9,281.5);
	this.shape_124._off = true;

	var maskedShapeInstanceList = [this.shape_124];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_124).wait(140).to({_off:false},0).wait(497));

	// Layer 1 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_9 = new cjs.Graphics().p("AK8SFIAAxTIClAAIAARTg");
	var mask_3_graphics_10 = new cjs.Graphics().p("AhdIqIAAxTIC7AAIAARTg");
	var mask_3_graphics_11 = new cjs.Graphics().p("AhpIqIAAxTIDTAAIAARTg");
	var mask_3_graphics_12 = new cjs.Graphics().p("Ah0IqIAAxTIDpAAIAARTg");
	var mask_3_graphics_13 = new cjs.Graphics().p("Ah/IqIAAxTID/AAIAARTg");
	var mask_3_graphics_14 = new cjs.Graphics().p("AiLIqIAAxTIEXAAIAARTg");
	var mask_3_graphics_15 = new cjs.Graphics().p("AiWIqIAAxTIEtAAIAARTg");
	var mask_3_graphics_16 = new cjs.Graphics().p("AiiIqIAAxTIFEAAIAARTg");
	var mask_3_graphics_17 = new cjs.Graphics().p("AitIqIAAxTIFbAAIAARTg");
	var mask_3_graphics_18 = new cjs.Graphics().p("Ai4IqIAAxTIFxAAIAARTg");
	var mask_3_graphics_19 = new cjs.Graphics().p("AjEIqIAAxTIGJAAIAARTg");
	var mask_3_graphics_20 = new cjs.Graphics().p("AjPIqIAAxTIGfAAIAARTg");
	var mask_3_graphics_21 = new cjs.Graphics().p("AjaIqIAAxTIG1AAIAARTg");
	var mask_3_graphics_22 = new cjs.Graphics().p("AjmIqIAAxTIHNAAIAARTg");
	var mask_3_graphics_23 = new cjs.Graphics().p("AjxIqIAAxTIHjAAIAARTg");
	var mask_3_graphics_24 = new cjs.Graphics().p("Aj9IqIAAxTIH7AAIAARTg");
	var mask_3_graphics_25 = new cjs.Graphics().p("AkIIqIAAxTIIRAAIAARTg");
	var mask_3_graphics_26 = new cjs.Graphics().p("AkTIqIAAxTIInAAIAARTg");
	var mask_3_graphics_27 = new cjs.Graphics().p("AkfIqIAAxTII+AAIAARTg");
	var mask_3_graphics_28 = new cjs.Graphics().p("AkqIqIAAxTIJVAAIAARTg");
	var mask_3_graphics_29 = new cjs.Graphics().p("Ak1IqIAAxTIJrAAIAARTg");
	var mask_3_graphics_30 = new cjs.Graphics().p("AlBIqIAAxTIKDAAIAARTg");
	var mask_3_graphics_31 = new cjs.Graphics().p("AlMIqIAAxTIKZAAIAARTg");
	var mask_3_graphics_32 = new cjs.Graphics().p("AlYIqIAAxTIKxAAIAARTg");
	var mask_3_graphics_33 = new cjs.Graphics().p("AljIqIAAxTILHAAIAARTg");
	var mask_3_graphics_34 = new cjs.Graphics().p("AluIqIAAxTILdAAIAARTg");
	var mask_3_graphics_35 = new cjs.Graphics().p("Al8IqIAAxTIL5AAIAARTg");
	var mask_3_graphics_36 = new cjs.Graphics().p("AmKIqIAAxTIMVAAIAARTg");
	var mask_3_graphics_37 = new cjs.Graphics().p("AmYIqIAAxTIMxAAIAARTg");
	var mask_3_graphics_38 = new cjs.Graphics().p("AmmIqIAAxTINMAAIAARTg");
	var mask_3_graphics_39 = new cjs.Graphics().p("AmzIqIAAxTINnAAIAARTg");
	var mask_3_graphics_40 = new cjs.Graphics().p("AnBIqIAAxTIODAAIAARTg");
	var mask_3_graphics_41 = new cjs.Graphics().p("AnPIqIAAxTIOfAAIAARTg");
	var mask_3_graphics_42 = new cjs.Graphics().p("AndIqIAAxTIO7AAIAARTg");
	var mask_3_graphics_43 = new cjs.Graphics().p("AnrIqIAAxTIPXAAIAARTg");
	var mask_3_graphics_44 = new cjs.Graphics().p("An4IqIAAxTIPxAAIAARTg");
	var mask_3_graphics_45 = new cjs.Graphics().p("AoGIqIAAxTIQNAAIAARTg");
	var mask_3_graphics_46 = new cjs.Graphics().p("AoUIqIAAxTIQpAAIAARTg");
	var mask_3_graphics_47 = new cjs.Graphics().p("AoiIqIAAxTIRFAAIAARTg");
	var mask_3_graphics_48 = new cjs.Graphics().p("AowIqIAAxTIRhAAIAARTg");
	var mask_3_graphics_49 = new cjs.Graphics().p("Ao9IqIAAxTIR7AAIAARTg");
	var mask_3_graphics_50 = new cjs.Graphics().p("ApLIqIAAxTISXAAIAARTg");
	var mask_3_graphics_51 = new cjs.Graphics().p("ApZIqIAAxTISzAAIAARTg");
	var mask_3_graphics_52 = new cjs.Graphics().p("ApnIqIAAxTITPAAIAARTg");
	var mask_3_graphics_53 = new cjs.Graphics().p("Ap1IqIAAxTITqAAIAARTg");
	var mask_3_graphics_54 = new cjs.Graphics().p("AqCIqIAAxTIUFAAIAARTg");
	var mask_3_graphics_55 = new cjs.Graphics().p("AqQIqIAAxTIUhAAIAARTg");
	var mask_3_graphics_56 = new cjs.Graphics().p("AqeIqIAAxTIU9AAIAARTg");
	var mask_3_graphics_57 = new cjs.Graphics().p("AqsIqIAAxTIVZAAIAARTg");
	var mask_3_graphics_58 = new cjs.Graphics().p("Aq6IqIAAxTIV1AAIAARTg");
	var mask_3_graphics_59 = new cjs.Graphics().p("ArIIqIAAxTIWRAAIAARTg");
	var mask_3_graphics_60 = new cjs.Graphics().p("ArVIqIAAxTIWrAAIAARTg");
	var mask_3_graphics_61 = new cjs.Graphics().p("ArjIqIAAxTIXHAAIAARTg");
	var mask_3_graphics_62 = new cjs.Graphics().p("ArxIqIAAxTIXjAAIAARTg");
	var mask_3_graphics_63 = new cjs.Graphics().p("Ar/IqIAAxTIX/AAIAARTg");
	var mask_3_graphics_64 = new cjs.Graphics().p("AsNIqIAAxTIYbAAIAARTg");
	var mask_3_graphics_65 = new cjs.Graphics().p("AsaIqIAAxTIY2AAIAARTg");
	var mask_3_graphics_66 = new cjs.Graphics().p("AsoIqIAAxTIZRAAIAARTg");
	var mask_3_graphics_67 = new cjs.Graphics().p("As2IqIAAxTIZtAAIAARTg");
	var mask_3_graphics_68 = new cjs.Graphics().p("AtEIqIAAxTIaJAAIAARTg");
	var mask_3_graphics_69 = new cjs.Graphics().p("AtSIqIAAxTIalAAIAARTg");
	var mask_3_graphics_70 = new cjs.Graphics().p("AtfIqIAAxTIbAAAIAARTg");
	var mask_3_graphics_71 = new cjs.Graphics().p("AttIqIAAxTIbbAAIAARTg");
	var mask_3_graphics_72 = new cjs.Graphics().p("At7IqIAAxTIb3AAIAARTg");
	var mask_3_graphics_73 = new cjs.Graphics().p("AuJIqIAAxTIcTAAIAARTg");
	var mask_3_graphics_74 = new cjs.Graphics().p("AuXIqIAAxTIcvAAIAARTg");
	var mask_3_graphics_75 = new cjs.Graphics().p("AukIqIAAxTIdJAAIAARTg");
	var mask_3_graphics_76 = new cjs.Graphics().p("AuyIqIAAxTIdlAAIAARTg");
	var mask_3_graphics_77 = new cjs.Graphics().p("AvAIqIAAxTIeBAAIAARTg");
	var mask_3_graphics_78 = new cjs.Graphics().p("AvOIqIAAxTIedAAIAARTg");
	var mask_3_graphics_79 = new cjs.Graphics().p("AvcIqIAAxTIe5AAIAARTg");
	var mask_3_graphics_80 = new cjs.Graphics().p("AvpIqIAAxTIfUAAIAARTg");
	var mask_3_graphics_81 = new cjs.Graphics().p("Av3IqIAAxTIfvAAIAARTg");
	var mask_3_graphics_82 = new cjs.Graphics().p("AwFIqIAAxTMAgLAAAIAARTg");
	var mask_3_graphics_83 = new cjs.Graphics().p("AwTIqIAAxTMAgnAAAIAARTg");
	var mask_3_graphics_84 = new cjs.Graphics().p("AwhIqIAAxTMAhDAAAIAARTg");
	var mask_3_graphics_85 = new cjs.Graphics().p("AwwIqIAAxTMAhhAAAIAARTg");
	var mask_3_graphics_86 = new cjs.Graphics().p("Aw/IqIAAxTMAh/AAAIAARTg");
	var mask_3_graphics_87 = new cjs.Graphics().p("AxOIqIAAxTMAidAAAIAARTg");
	var mask_3_graphics_88 = new cjs.Graphics().p("AxdIqIAAxTMAi7AAAIAARTg");
	var mask_3_graphics_89 = new cjs.Graphics().p("AxsIqIAAxTMAjZAAAIAARTg");
	var mask_3_graphics_90 = new cjs.Graphics().p("Ax7IqIAAxTMAj3AAAIAARTg");
	var mask_3_graphics_91 = new cjs.Graphics().p("AyKIqIAAxTMAkVAAAIAARTg");
	var mask_3_graphics_92 = new cjs.Graphics().p("AyZIqIAAxTMAkzAAAIAARTg");
	var mask_3_graphics_93 = new cjs.Graphics().p("AyoIqIAAxTMAlRAAAIAARTg");
	var mask_3_graphics_94 = new cjs.Graphics().p("Ay3IqIAAxTMAlvAAAIAARTg");
	var mask_3_graphics_95 = new cjs.Graphics().p("AzGIqIAAxTMAmOAAAIAARTg");
	var mask_3_graphics_96 = new cjs.Graphics().p("AzWIqIAAxTMAmtAAAIAARTg");
	var mask_3_graphics_97 = new cjs.Graphics().p("AzlIqIAAxTMAnLAAAIAARTg");
	var mask_3_graphics_98 = new cjs.Graphics().p("Az0IqIAAxTMAnpAAAIAARTg");
	var mask_3_graphics_99 = new cjs.Graphics().p("A0DIqIAAxTMAoHAAAIAARTg");
	var mask_3_graphics_100 = new cjs.Graphics().p("A0SIqIAAxTMAolAAAIAARTg");
	var mask_3_graphics_101 = new cjs.Graphics().p("A0hIqIAAxTMApDAAAIAARTg");
	var mask_3_graphics_102 = new cjs.Graphics().p("A0wIqIAAxTMAphAAAIAARTg");
	var mask_3_graphics_103 = new cjs.Graphics().p("A0/IqIAAxTMAp/AAAIAARTg");
	var mask_3_graphics_104 = new cjs.Graphics().p("A1OIqIAAxTMAqdAAAIAARTg");
	var mask_3_graphics_105 = new cjs.Graphics().p("A1dIqIAAxTMAq7AAAIAARTg");
	var mask_3_graphics_106 = new cjs.Graphics().p("A1sIqIAAxTMArZAAAIAARTg");
	var mask_3_graphics_107 = new cjs.Graphics().p("A18IqIAAxTMAr4AAAIAARTg");
	var mask_3_graphics_108 = new cjs.Graphics().p("A2LIqIAAxTMAsXAAAIAARTg");
	var mask_3_graphics_109 = new cjs.Graphics().p("A2aIqIAAxTMAs1AAAIAARTg");
	var mask_3_graphics_110 = new cjs.Graphics().p("A2pIqIAAxTMAtSAAAIAARTg");
	var mask_3_graphics_111 = new cjs.Graphics().p("A24IqIAAxTMAtxAAAIAARTg");
	var mask_3_graphics_112 = new cjs.Graphics().p("A3HIqIAAxTMAuPAAAIAARTg");
	var mask_3_graphics_113 = new cjs.Graphics().p("A3WIqIAAxTMAutAAAIAARTg");
	var mask_3_graphics_114 = new cjs.Graphics().p("A3lIqIAAxTMAvLAAAIAARTg");
	var mask_3_graphics_115 = new cjs.Graphics().p("A30IqIAAxTMAvpAAAIAARTg");
	var mask_3_graphics_116 = new cjs.Graphics().p("A4DIqIAAxTMAwHAAAIAARTg");
	var mask_3_graphics_117 = new cjs.Graphics().p("A4SIqIAAxTMAwlAAAIAARTg");
	var mask_3_graphics_118 = new cjs.Graphics().p("A4hIqIAAxTMAxDAAAIAARTg");
	var mask_3_graphics_119 = new cjs.Graphics().p("A4wIqIAAxTMAxhAAAIAARTg");
	var mask_3_graphics_120 = new cjs.Graphics().p("A4/IqIAAxTMAx/AAAIAARTg");
	var mask_3_graphics_121 = new cjs.Graphics().p("A5OIqIAAxTMAyeAAAIAARTg");
	var mask_3_graphics_122 = new cjs.Graphics().p("A5dIqIAAxTMAy7AAAIAARTg");
	var mask_3_graphics_123 = new cjs.Graphics().p("A5tIqIAAxTMAzbAAAIAARTg");
	var mask_3_graphics_124 = new cjs.Graphics().p("A58IqIAAxTMAz5AAAIAARTg");
	var mask_3_graphics_125 = new cjs.Graphics().p("A6LIqIAAxTMA0XAAAIAARTg");
	var mask_3_graphics_126 = new cjs.Graphics().p("A6aIqIAAxTMA01AAAIAARTg");
	var mask_3_graphics_127 = new cjs.Graphics().p("A6pIqIAAxTMA1TAAAIAARTg");
	var mask_3_graphics_128 = new cjs.Graphics().p("A64IqIAAxTMA1xAAAIAARTg");
	var mask_3_graphics_129 = new cjs.Graphics().p("Au6SFIAAxTMA2QAAAIAARTg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_3_graphics_9,x:86.5,y:115.7}).wait(1).to({graphics:mask_3_graphics_10,x:165.9,y:176.1}).wait(1).to({graphics:mask_3_graphics_11,x:167,y:176.1}).wait(1).to({graphics:mask_3_graphics_12,x:168.2,y:176.1}).wait(1).to({graphics:mask_3_graphics_13,x:169.3,y:176.1}).wait(1).to({graphics:mask_3_graphics_14,x:170.4,y:176.1}).wait(1).to({graphics:mask_3_graphics_15,x:171.6,y:176.1}).wait(1).to({graphics:mask_3_graphics_16,x:172.7,y:176.1}).wait(1).to({graphics:mask_3_graphics_17,x:173.8,y:176.1}).wait(1).to({graphics:mask_3_graphics_18,x:175,y:176.1}).wait(1).to({graphics:mask_3_graphics_19,x:176.1,y:176.1}).wait(1).to({graphics:mask_3_graphics_20,x:177.3,y:176.1}).wait(1).to({graphics:mask_3_graphics_21,x:178.4,y:176.1}).wait(1).to({graphics:mask_3_graphics_22,x:179.5,y:176.1}).wait(1).to({graphics:mask_3_graphics_23,x:180.7,y:176.1}).wait(1).to({graphics:mask_3_graphics_24,x:181.8,y:176.1}).wait(1).to({graphics:mask_3_graphics_25,x:182.9,y:176.1}).wait(1).to({graphics:mask_3_graphics_26,x:184.1,y:176.1}).wait(1).to({graphics:mask_3_graphics_27,x:185.2,y:176.1}).wait(1).to({graphics:mask_3_graphics_28,x:186.4,y:176.1}).wait(1).to({graphics:mask_3_graphics_29,x:187.5,y:176.1}).wait(1).to({graphics:mask_3_graphics_30,x:188.6,y:176.1}).wait(1).to({graphics:mask_3_graphics_31,x:189.8,y:176.1}).wait(1).to({graphics:mask_3_graphics_32,x:190.9,y:176.1}).wait(1).to({graphics:mask_3_graphics_33,x:192,y:176.1}).wait(1).to({graphics:mask_3_graphics_34,x:193.2,y:176.1}).wait(1).to({graphics:mask_3_graphics_35,x:194.6,y:176.1}).wait(1).to({graphics:mask_3_graphics_36,x:195.9,y:176.1}).wait(1).to({graphics:mask_3_graphics_37,x:197.3,y:176.1}).wait(1).to({graphics:mask_3_graphics_38,x:198.7,y:176.1}).wait(1).to({graphics:mask_3_graphics_39,x:200.1,y:176.1}).wait(1).to({graphics:mask_3_graphics_40,x:201.5,y:176.1}).wait(1).to({graphics:mask_3_graphics_41,x:202.9,y:176.1}).wait(1).to({graphics:mask_3_graphics_42,x:204.2,y:176.1}).wait(1).to({graphics:mask_3_graphics_43,x:205.6,y:176.1}).wait(1).to({graphics:mask_3_graphics_44,x:207,y:176.1}).wait(1).to({graphics:mask_3_graphics_45,x:208.4,y:176.1}).wait(1).to({graphics:mask_3_graphics_46,x:209.8,y:176.1}).wait(1).to({graphics:mask_3_graphics_47,x:211.1,y:176.1}).wait(1).to({graphics:mask_3_graphics_48,x:212.5,y:176.1}).wait(1).to({graphics:mask_3_graphics_49,x:213.9,y:176.1}).wait(1).to({graphics:mask_3_graphics_50,x:215.3,y:176.1}).wait(1).to({graphics:mask_3_graphics_51,x:216.7,y:176.1}).wait(1).to({graphics:mask_3_graphics_52,x:218,y:176.1}).wait(1).to({graphics:mask_3_graphics_53,x:219.4,y:176.1}).wait(1).to({graphics:mask_3_graphics_54,x:220.8,y:176.1}).wait(1).to({graphics:mask_3_graphics_55,x:222.2,y:176.1}).wait(1).to({graphics:mask_3_graphics_56,x:223.6,y:176.1}).wait(1).to({graphics:mask_3_graphics_57,x:224.9,y:176.1}).wait(1).to({graphics:mask_3_graphics_58,x:226.3,y:176.1}).wait(1).to({graphics:mask_3_graphics_59,x:227.7,y:176.1}).wait(1).to({graphics:mask_3_graphics_60,x:229.1,y:176.1}).wait(1).to({graphics:mask_3_graphics_61,x:230.4,y:176.1}).wait(1).to({graphics:mask_3_graphics_62,x:231.8,y:176.1}).wait(1).to({graphics:mask_3_graphics_63,x:233.2,y:176.1}).wait(1).to({graphics:mask_3_graphics_64,x:234.6,y:176.1}).wait(1).to({graphics:mask_3_graphics_65,x:236,y:176.1}).wait(1).to({graphics:mask_3_graphics_66,x:237.3,y:176.1}).wait(1).to({graphics:mask_3_graphics_67,x:238.7,y:176.1}).wait(1).to({graphics:mask_3_graphics_68,x:240.1,y:176.1}).wait(1).to({graphics:mask_3_graphics_69,x:241.5,y:176.1}).wait(1).to({graphics:mask_3_graphics_70,x:242.9,y:176.1}).wait(1).to({graphics:mask_3_graphics_71,x:244.2,y:176.1}).wait(1).to({graphics:mask_3_graphics_72,x:245.6,y:176.1}).wait(1).to({graphics:mask_3_graphics_73,x:247,y:176.1}).wait(1).to({graphics:mask_3_graphics_74,x:248.4,y:176.1}).wait(1).to({graphics:mask_3_graphics_75,x:249.8,y:176.1}).wait(1).to({graphics:mask_3_graphics_76,x:251.1,y:176.1}).wait(1).to({graphics:mask_3_graphics_77,x:252.5,y:176.1}).wait(1).to({graphics:mask_3_graphics_78,x:253.9,y:176.1}).wait(1).to({graphics:mask_3_graphics_79,x:255.3,y:176.1}).wait(1).to({graphics:mask_3_graphics_80,x:256.7,y:176.1}).wait(1).to({graphics:mask_3_graphics_81,x:258,y:176.1}).wait(1).to({graphics:mask_3_graphics_82,x:259.4,y:176.1}).wait(1).to({graphics:mask_3_graphics_83,x:260.8,y:176.1}).wait(1).to({graphics:mask_3_graphics_84,x:262.2,y:176.1}).wait(1).to({graphics:mask_3_graphics_85,x:263.7,y:176.1}).wait(1).to({graphics:mask_3_graphics_86,x:265.2,y:176.1}).wait(1).to({graphics:mask_3_graphics_87,x:266.7,y:176.1}).wait(1).to({graphics:mask_3_graphics_88,x:268.2,y:176.1}).wait(1).to({graphics:mask_3_graphics_89,x:269.7,y:176.1}).wait(1).to({graphics:mask_3_graphics_90,x:271.2,y:176.1}).wait(1).to({graphics:mask_3_graphics_91,x:272.7,y:176.1}).wait(1).to({graphics:mask_3_graphics_92,x:274.2,y:176.1}).wait(1).to({graphics:mask_3_graphics_93,x:275.7,y:176.1}).wait(1).to({graphics:mask_3_graphics_94,x:277.2,y:176.1}).wait(1).to({graphics:mask_3_graphics_95,x:278.8,y:176.1}).wait(1).to({graphics:mask_3_graphics_96,x:280.2,y:176.1}).wait(1).to({graphics:mask_3_graphics_97,x:281.7,y:176.1}).wait(1).to({graphics:mask_3_graphics_98,x:283.2,y:176.1}).wait(1).to({graphics:mask_3_graphics_99,x:284.8,y:176.1}).wait(1).to({graphics:mask_3_graphics_100,x:286.3,y:176.1}).wait(1).to({graphics:mask_3_graphics_101,x:287.8,y:176.1}).wait(1).to({graphics:mask_3_graphics_102,x:289.3,y:176.1}).wait(1).to({graphics:mask_3_graphics_103,x:290.8,y:176.1}).wait(1).to({graphics:mask_3_graphics_104,x:292.3,y:176.1}).wait(1).to({graphics:mask_3_graphics_105,x:293.8,y:176.1}).wait(1).to({graphics:mask_3_graphics_106,x:295.3,y:176.1}).wait(1).to({graphics:mask_3_graphics_107,x:296.8,y:176.1}).wait(1).to({graphics:mask_3_graphics_108,x:298.3,y:176.1}).wait(1).to({graphics:mask_3_graphics_109,x:299.8,y:176.1}).wait(1).to({graphics:mask_3_graphics_110,x:301.3,y:176.1}).wait(1).to({graphics:mask_3_graphics_111,x:302.8,y:176.1}).wait(1).to({graphics:mask_3_graphics_112,x:304.3,y:176.1}).wait(1).to({graphics:mask_3_graphics_113,x:305.8,y:176.1}).wait(1).to({graphics:mask_3_graphics_114,x:307.3,y:176.1}).wait(1).to({graphics:mask_3_graphics_115,x:308.9,y:176.1}).wait(1).to({graphics:mask_3_graphics_116,x:310.4,y:176.1}).wait(1).to({graphics:mask_3_graphics_117,x:311.9,y:176.1}).wait(1).to({graphics:mask_3_graphics_118,x:313.3,y:176.1}).wait(1).to({graphics:mask_3_graphics_119,x:314.9,y:176.1}).wait(1).to({graphics:mask_3_graphics_120,x:316.4,y:176.1}).wait(1).to({graphics:mask_3_graphics_121,x:317.9,y:176.1}).wait(1).to({graphics:mask_3_graphics_122,x:319.4,y:176.1}).wait(1).to({graphics:mask_3_graphics_123,x:320.9,y:176.1}).wait(1).to({graphics:mask_3_graphics_124,x:322.4,y:176.1}).wait(1).to({graphics:mask_3_graphics_125,x:323.9,y:176.1}).wait(1).to({graphics:mask_3_graphics_126,x:325.4,y:176.1}).wait(1).to({graphics:mask_3_graphics_127,x:326.9,y:176.1}).wait(1).to({graphics:mask_3_graphics_128,x:328.4,y:176.1}).wait(1).to({graphics:mask_3_graphics_129,x:251.8,y:115.7}).wait(508));

	// Layer 2
	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(20,1,1).p("A5ADVQGJn0K+BaIQGDUQIKBEIqkn");
	this.shape_125.setTransform(332.9,168.3);
	this.shape_125._off = true;

	var maskedShapeInstanceList = [this.shape_125];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_125).wait(9).to({_off:false},0).wait(628));

	// Letter
	this.instance_5 = new lib.F("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(275,275);
	this.instance_5.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(637));

	// Background
	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_126.setTransform(275,275,3.373,2.543);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_127.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_127},{t:this.shape_126}]}).wait(637));

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