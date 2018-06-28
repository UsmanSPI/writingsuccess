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


(lib.c = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A0GRgQh/g4hchvQiqjPAAlhQAAjvBjkUQBkkSCqjuQC3j7DeiPQDzibD9AAQEfAADKCzQCqC3AADGQAACjiTAAQhEAAiFimQiDioi0AAQjdAAj7EDQjLDShyD2QhYDmAADyQAADDA3BbQBIBvC2AAQDQAADxhTQDXhIDqiLQF9jjGAljIK4qMQBPg/BHgBQCMABAACbQAABvl+GYQgIARgPAHQh7CPjMCfQncGkmZDqQkECbj2BPQkWBgj4AAQiyABiHhAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-167.6,-118.3,335.2,236.7);


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


(lib.ar4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-48.7,-31.5,1,1,-17.5,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-94.4,guide:{path:[-47.9,-29.4,-30.4,37.2,47,28.6]}},149).wait(1));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AlhCZICwlVIBHAkIixFVg");
	var mask_graphics_1 = new cjs.Graphics().p("Ah+CXICwlVIBNAoIiwFVg");
	var mask_graphics_2 = new cjs.Graphics().p("AiBCVICwlVIBTAsIivFVg");
	var mask_graphics_3 = new cjs.Graphics().p("AiECUICvlVIBaAuIivFVg");
	var mask_graphics_4 = new cjs.Graphics().p("AiICSICwlVIBhAyIiwFVg");
	var mask_graphics_5 = new cjs.Graphics().p("AiLCQICvlVIBoA2IivFVg");
	var mask_graphics_6 = new cjs.Graphics().p("AiPCOICwlVIBvA5IiwFVg");
	var mask_graphics_7 = new cjs.Graphics().p("AiSCNICwlVIB1A8IiwFVg");
	var mask_graphics_8 = new cjs.Graphics().p("AiVCLICvlVIB8BAIivFVg");
	var mask_graphics_9 = new cjs.Graphics().p("AiZCJICwlVICDBEIiwFVg");
	var mask_graphics_10 = new cjs.Graphics().p("AicCHICvlVICKBHIivFVg");
	var mask_graphics_11 = new cjs.Graphics().p("AifCGICvlVICQBKIivFVg");
	var mask_graphics_12 = new cjs.Graphics().p("AijCEICwlVICXBOIiwFVg");
	var mask_graphics_13 = new cjs.Graphics().p("AimCCICvlVICeBSIivFVg");
	var mask_graphics_14 = new cjs.Graphics().p("AiqCAICwlVIClBWIiwFVg");
	var mask_graphics_15 = new cjs.Graphics().p("AitB/ICvlVICsBYIivFVg");
	var mask_graphics_16 = new cjs.Graphics().p("AiwB9ICwlVICxBcIiwFVg");
	var mask_graphics_17 = new cjs.Graphics().p("Ai0B7ICxlVIC4BgIiwFVg");
	var mask_graphics_18 = new cjs.Graphics().p("Ai3B5ICwlVIDABjIixFVg");
	var mask_graphics_19 = new cjs.Graphics().p("Ai7B4ICxlVIDGBmIixFVg");
	var mask_graphics_20 = new cjs.Graphics().p("Ai+B2ICwlVIDNBqIiwFVg");
	var mask_graphics_21 = new cjs.Graphics().p("AjBB0ICwlVIDTBuIiwFVg");
	var mask_graphics_22 = new cjs.Graphics().p("AjFByICxlVIDaByIiwFVg");
	var mask_graphics_23 = new cjs.Graphics().p("AjIBxICwlVIDhB0IiwFVg");
	var mask_graphics_24 = new cjs.Graphics().p("AjMBvICxlVIDoB4IixFVg");
	var mask_graphics_25 = new cjs.Graphics().p("AjPBtICwlVIDvB8IiwFVg");
	var mask_graphics_26 = new cjs.Graphics().p("AjSBrICwlVID2CAIixFVg");
	var mask_graphics_27 = new cjs.Graphics().p("AjWBpICxlVID8CEIixFVg");
	var mask_graphics_28 = new cjs.Graphics().p("AjZBoICwlVIEDCGIiwFVg");
	var mask_graphics_29 = new cjs.Graphics().p("AjdBmICxlVIEKCKIixFVg");
	var mask_graphics_30 = new cjs.Graphics().p("AjgBkICwlVIERCOIiwFVg");
	var mask_graphics_31 = new cjs.Graphics().p("AjjBiICwlVIEYCRIixFVg");
	var mask_graphics_32 = new cjs.Graphics().p("AjnBhICxlVIEeCUIixFVg");
	var mask_graphics_33 = new cjs.Graphics().p("AjqBfICwlVIElCYIiwFVg");
	var mask_graphics_34 = new cjs.Graphics().p("AjuBdICxlVIEsCcIixFVg");
	var mask_graphics_35 = new cjs.Graphics().p("AjxBbICxlVIEyCgIixFVg");
	var mask_graphics_36 = new cjs.Graphics().p("Aj0BaICwlVIE5CiIiwFVg");
	var mask_graphics_37 = new cjs.Graphics().p("Aj4BYICxlVIFACmIixFVg");
	var mask_graphics_38 = new cjs.Graphics().p("Aj7BWICwlVIFHCqIiwFVg");
	var mask_graphics_39 = new cjs.Graphics().p("Aj/BUICxlVIFOCtIixFVg");
	var mask_graphics_40 = new cjs.Graphics().p("AkCBTICxlVIFUCwIixFVg");
	var mask_graphics_41 = new cjs.Graphics().p("AkFBRICwlVIFbC0IiwFVg");
	var mask_graphics_42 = new cjs.Graphics().p("AkJBPICxlVIFiC4IiwFVg");
	var mask_graphics_43 = new cjs.Graphics().p("AkMBNICwlVIFpC8IiwFVg");
	var mask_graphics_44 = new cjs.Graphics().p("AkQBMICxlVIFwC+IixFVg");
	var mask_graphics_45 = new cjs.Graphics().p("AkTBKICxlVIF2DCIixFVg");
	var mask_graphics_46 = new cjs.Graphics().p("AkWBIICwlVIF+DGIixFVg");
	var mask_graphics_47 = new cjs.Graphics().p("AkaBGICxlVIGEDJIixFVg");
	var mask_graphics_48 = new cjs.Graphics().p("AkdBFICwlVIGLDMIiwFVg");
	var mask_graphics_49 = new cjs.Graphics().p("AkhBDICxlVIGSDQIixFVg");
	var mask_graphics_50 = new cjs.Graphics().p("AkkBBICxlVIGYDUIiwFVg");
	var mask_graphics_51 = new cjs.Graphics().p("AknA/ICwlVIGgDXIixFWg");
	var mask_graphics_52 = new cjs.Graphics().p("AkrA+ICxlVIGmDaIixFVg");
	var mask_graphics_53 = new cjs.Graphics().p("AkuA8ICwlVIGtDeIiwFVg");
	var mask_graphics_54 = new cjs.Graphics().p("AkyA6ICxlVIG0DiIixFVg");
	var mask_graphics_55 = new cjs.Graphics().p("Ak1A4ICxlVIG6DmIiwFVg");
	var mask_graphics_56 = new cjs.Graphics().p("Ak4A3ICwlVIHBDoIiwFVg");
	var mask_graphics_57 = new cjs.Graphics().p("Ak8A1ICxlVIHIDsIixFVg");
	var mask_graphics_58 = new cjs.Graphics().p("Ak/AzICwlVIHPDwIiwFVg");
	var mask_graphics_59 = new cjs.Graphics().p("AlCAxICwlVIHWDzIixFVg");
	var mask_graphics_60 = new cjs.Graphics().p("AlGAwICxlVIHcD2IixFVg");
	var mask_graphics_61 = new cjs.Graphics().p("AlJAuICwlVIHjD6IiwFVg");
	var mask_graphics_62 = new cjs.Graphics().p("AlNAsICxlVIHqD+IixFVg");
	var mask_graphics_63 = new cjs.Graphics().p("AlQAqICwlVIHxECIiwFVg");
	var mask_graphics_64 = new cjs.Graphics().p("AlTApICwlVIH3EEIiwFVg");
	var mask_graphics_65 = new cjs.Graphics().p("AlXAnICxlVIH+EIIixFVg");
	var mask_graphics_66 = new cjs.Graphics().p("AlaAlICwlVIIFEMIiwFVg");
	var mask_graphics_67 = new cjs.Graphics().p("AleAjICxlVIIMEPIixFVg");
	var mask_graphics_68 = new cjs.Graphics().p("AlhAiICwlVIITESIiwFVg");
	var mask_graphics_69 = new cjs.Graphics().p("AlkAgICwlVIIZEWIiwFVg");
	var mask_graphics_70 = new cjs.Graphics().p("AloAeICxlVIIgEaIiwFVg");
	var mask_graphics_71 = new cjs.Graphics().p("AlrAcICwlVIInEeIiwFVg");
	var mask_graphics_72 = new cjs.Graphics().p("AlvAbICxlVIIuEgIixFVg");
	var mask_graphics_73 = new cjs.Graphics().p("AlyAZICwlVII1EkIiwFVg");
	var mask_graphics_74 = new cjs.Graphics().p("Al1AXICwlVII7EoIiwFVg");
	var mask_graphics_75 = new cjs.Graphics().p("Al5AVICwlVIJDEsIiwFVg");
	var mask_graphics_76 = new cjs.Graphics().p("Al9ATICxlVIJKEwIixFVg");
	var mask_graphics_77 = new cjs.Graphics().p("AmAASICwlVIJREzIiwFVg");
	var mask_graphics_78 = new cjs.Graphics().p("AmEAQICxlVIJYE2IixFVg");
	var mask_graphics_79 = new cjs.Graphics().p("AmHAOICxlVIJeE6IixFVg");
	var mask_graphics_80 = new cjs.Graphics().p("AmKAMICwlVIJlE+IiwFVg");
	var mask_graphics_81 = new cjs.Graphics().p("AmOALICxlVIJsFAIixFVg");
	var mask_graphics_82 = new cjs.Graphics().p("AmRAJICwlVIJzFEIixFVg");
	var mask_graphics_83 = new cjs.Graphics().p("AmUAHICwlVIJ5FIIiwFVg");
	var mask_graphics_84 = new cjs.Graphics().p("AmYAFICxlVIKAFMIixFVg");
	var mask_graphics_85 = new cjs.Graphics().p("AmbAEICwlVIKHFPIiwFVg");
	var mask_graphics_86 = new cjs.Graphics().p("AmfACICxlVIKOFSIixFVg");
	var mask_graphics_87 = new cjs.Graphics().p("AmiAAICwlVIKVFVIixFWg");
	var mask_graphics_88 = new cjs.Graphics().p("AmlgBICwlWIKbFZIiwFWg");
	var mask_graphics_89 = new cjs.Graphics().p("AmpgCICxlWIKiFbIixFWg");
	var mask_graphics_90 = new cjs.Graphics().p("AmsgEICwlWIKpFfIiwFWg");
	var mask_graphics_91 = new cjs.Graphics().p("AmwgGICxlWIKvFjIiwFWg");
	var mask_graphics_92 = new cjs.Graphics().p("AmzgIICwlWIK3FnIixFWg");
	var mask_graphics_93 = new cjs.Graphics().p("Am2gJICwlWIK9FqIiwFWg");
	var mask_graphics_94 = new cjs.Graphics().p("Am6gLICxlWILEFtIixFWg");
	var mask_graphics_95 = new cjs.Graphics().p("Am9gNICwlWILLFxIixFWg");
	var mask_graphics_96 = new cjs.Graphics().p("AnBgPICxlWILRF1IiwFWg");
	var mask_graphics_97 = new cjs.Graphics().p("AnEgQICwlWILZF3IiwFWg");
	var mask_graphics_98 = new cjs.Graphics().p("AnHgSICwlWILfF7IiwFWg");
	var mask_graphics_99 = new cjs.Graphics().p("AnLgUICxlWILmF/IixFWg");
	var mask_graphics_100 = new cjs.Graphics().p("AnOgWICwlWILtGDIixFWg");
	var mask_graphics_101 = new cjs.Graphics().p("AnSgXICxlWIL0GGIixFVg");
	var mask_graphics_102 = new cjs.Graphics().p("AnVgZICwlWIL7GJIiwFWg");
	var mask_graphics_103 = new cjs.Graphics().p("AnYgbICwlWIMBGNIiwFWg");
	var mask_graphics_104 = new cjs.Graphics().p("AncgdICxlWIMIGRIixFWg");
	var mask_graphics_105 = new cjs.Graphics().p("AnfgeICwlWIMPGUIiwFWg");
	var mask_graphics_106 = new cjs.Graphics().p("AnjggICxlWIMWGXIixFWg");
	var mask_graphics_107 = new cjs.Graphics().p("AnmgiICxlWIMcGbIixFWg");
	var mask_graphics_108 = new cjs.Graphics().p("AnpgkICwlWIMjGfIiwFWg");
	var mask_graphics_109 = new cjs.Graphics().p("AntglICxlWIMqGhIixFWg");
	var mask_graphics_110 = new cjs.Graphics().p("AnwgnICwlWIMxGlIiwFWg");
	var mask_graphics_111 = new cjs.Graphics().p("An0gpICxlWIM3GpIiwFWg");
	var mask_graphics_112 = new cjs.Graphics().p("An3grICxlWIM+GtIixFWg");
	var mask_graphics_113 = new cjs.Graphics().p("An6gsICwlWINFGwIiwFWg");
	var mask_graphics_114 = new cjs.Graphics().p("An+guICxlWINMGzIixFWg");
	var mask_graphics_115 = new cjs.Graphics().p("AoBgwICwlWINTG3IixFWg");
	var mask_graphics_116 = new cjs.Graphics().p("AoFgyICxlWINZG7IiwFWg");
	var mask_graphics_117 = new cjs.Graphics().p("AoIgzICxlWINgG9IixFWg");
	var mask_graphics_118 = new cjs.Graphics().p("AoLg1ICwlWINnHBIiwFWg");
	var mask_graphics_119 = new cjs.Graphics().p("AoPg3ICxlWINtHFIiwFWg");
	var mask_graphics_120 = new cjs.Graphics().p("AoSg5ICwlWIN1HJIixFWg");
	var mask_graphics_121 = new cjs.Graphics().p("AoWg6ICxlWIN8HMIixFWg");
	var mask_graphics_122 = new cjs.Graphics().p("AoZg8ICxlWIOCHPIixFWg");
	var mask_graphics_123 = new cjs.Graphics().p("Aocg+ICwlWIOJHTIiwFWg");
	var mask_graphics_124 = new cjs.Graphics().p("AoghAICxlWIOPHXIiwFWg");
	var mask_graphics_125 = new cjs.Graphics().p("AojhCICwlWIOXHbIiwFWg");
	var mask_graphics_126 = new cjs.Graphics().p("AonhDICxlWIOeHeIixFWg");
	var mask_graphics_127 = new cjs.Graphics().p("AoqhFICxlWIOkHhIixFWg");
	var mask_graphics_128 = new cjs.Graphics().p("AothHICwlWIOrHlIiwFWg");
	var mask_graphics_129 = new cjs.Graphics().p("AoxhJICxlWIOxHpIiwFWg");
	var mask_graphics_130 = new cjs.Graphics().p("Ao0hKICwlWIO5HrIiwFWg");
	var mask_graphics_131 = new cjs.Graphics().p("Ao3hMICwlWIO/HvIiwFWg");
	var mask_graphics_132 = new cjs.Graphics().p("Ao7hOICxlWIPGHzIixFWg");
	var mask_graphics_133 = new cjs.Graphics().p("Ao+hQICwlWIPNH3IiwFWg");
	var mask_graphics_134 = new cjs.Graphics().p("ApChRICxlWIPUH6IixFWg");
	var mask_graphics_135 = new cjs.Graphics().p("ApFhTICwlWIPbH9IixFWg");
	var mask_graphics_136 = new cjs.Graphics().p("ApIhVICwlWIPhIBIiwFWg");
	var mask_graphics_137 = new cjs.Graphics().p("ApMhXICxlWIPoIFIixFWg");
	var mask_graphics_138 = new cjs.Graphics().p("ApPhYICwlWIPvIHIiwFWg");
	var mask_graphics_139 = new cjs.Graphics().p("ApThaICxlWIP2ILIixFWg");
	var mask_graphics_140 = new cjs.Graphics().p("ApWhcICwlWIP9IPIixFWg");
	var mask_graphics_141 = new cjs.Graphics().p("ApZheICwlWIQDITIiwFWg");
	var mask_graphics_142 = new cjs.Graphics().p("ApdhfICxlWIQKIWIixFVg");
	var mask_graphics_143 = new cjs.Graphics().p("ApghhICwlWIQRIZIixFWg");
	var mask_graphics_144 = new cjs.Graphics().p("ApkhjICxlWIQXIdIiwFWg");
	var mask_graphics_145 = new cjs.Graphics().p("ApnhlICwlWIQfIhIixFWg");
	var mask_graphics_146 = new cjs.Graphics().p("ApqhmICwlWIQlIkIiwFWg");
	var mask_graphics_147 = new cjs.Graphics().p("ApuhoICxlWIQsInIixFWg");
	var mask_graphics_148 = new cjs.Graphics().p("ApxhqICwlWIQzIrIixFWg");
	var mask_graphics_149 = new cjs.Graphics().p("Ap1hsICxlWIQ6IvIixFWg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-35.4,y:-17.5}).wait(1).to({graphics:mask_graphics_1,x:-58.2,y:-17.3}).wait(1).to({graphics:mask_graphics_2,x:-57.8,y:-17.1}).wait(1).to({graphics:mask_graphics_3,x:-57.5,y:-16.9}).wait(1).to({graphics:mask_graphics_4,x:-57.2,y:-16.7}).wait(1).to({graphics:mask_graphics_5,x:-56.8,y:-16.6}).wait(1).to({graphics:mask_graphics_6,x:-56.5,y:-16.4}).wait(1).to({graphics:mask_graphics_7,x:-56.1,y:-16.2}).wait(1).to({graphics:mask_graphics_8,x:-55.8,y:-16}).wait(1).to({graphics:mask_graphics_9,x:-55.5,y:-15.9}).wait(1).to({graphics:mask_graphics_10,x:-55.1,y:-15.7}).wait(1).to({graphics:mask_graphics_11,x:-54.8,y:-15.5}).wait(1).to({graphics:mask_graphics_12,x:-54.4,y:-15.3}).wait(1).to({graphics:mask_graphics_13,x:-54.1,y:-15.2}).wait(1).to({graphics:mask_graphics_14,x:-53.8,y:-15}).wait(1).to({graphics:mask_graphics_15,x:-53.4,y:-14.8}).wait(1).to({graphics:mask_graphics_16,x:-53.1,y:-14.6}).wait(1).to({graphics:mask_graphics_17,x:-52.7,y:-14.5}).wait(1).to({graphics:mask_graphics_18,x:-52.4,y:-14.3}).wait(1).to({graphics:mask_graphics_19,x:-52.1,y:-14.1}).wait(1).to({graphics:mask_graphics_20,x:-51.7,y:-13.9}).wait(1).to({graphics:mask_graphics_21,x:-51.4,y:-13.8}).wait(1).to({graphics:mask_graphics_22,x:-51,y:-13.6}).wait(1).to({graphics:mask_graphics_23,x:-50.7,y:-13.4}).wait(1).to({graphics:mask_graphics_24,x:-50.4,y:-13.2}).wait(1).to({graphics:mask_graphics_25,x:-50,y:-13}).wait(1).to({graphics:mask_graphics_26,x:-49.7,y:-12.9}).wait(1).to({graphics:mask_graphics_27,x:-49.3,y:-12.7}).wait(1).to({graphics:mask_graphics_28,x:-49,y:-12.5}).wait(1).to({graphics:mask_graphics_29,x:-48.7,y:-12.3}).wait(1).to({graphics:mask_graphics_30,x:-48.3,y:-12.2}).wait(1).to({graphics:mask_graphics_31,x:-48,y:-12}).wait(1).to({graphics:mask_graphics_32,x:-47.6,y:-11.8}).wait(1).to({graphics:mask_graphics_33,x:-47.3,y:-11.6}).wait(1).to({graphics:mask_graphics_34,x:-47,y:-11.5}).wait(1).to({graphics:mask_graphics_35,x:-46.6,y:-11.3}).wait(1).to({graphics:mask_graphics_36,x:-46.3,y:-11.1}).wait(1).to({graphics:mask_graphics_37,x:-45.9,y:-10.9}).wait(1).to({graphics:mask_graphics_38,x:-45.6,y:-10.8}).wait(1).to({graphics:mask_graphics_39,x:-45.3,y:-10.6}).wait(1).to({graphics:mask_graphics_40,x:-44.9,y:-10.4}).wait(1).to({graphics:mask_graphics_41,x:-44.6,y:-10.2}).wait(1).to({graphics:mask_graphics_42,x:-44.2,y:-10.1}).wait(1).to({graphics:mask_graphics_43,x:-43.9,y:-9.9}).wait(1).to({graphics:mask_graphics_44,x:-43.6,y:-9.7}).wait(1).to({graphics:mask_graphics_45,x:-43.2,y:-9.5}).wait(1).to({graphics:mask_graphics_46,x:-42.9,y:-9.4}).wait(1).to({graphics:mask_graphics_47,x:-42.6,y:-9.2}).wait(1).to({graphics:mask_graphics_48,x:-42.2,y:-9}).wait(1).to({graphics:mask_graphics_49,x:-41.9,y:-8.8}).wait(1).to({graphics:mask_graphics_50,x:-41.5,y:-8.7}).wait(1).to({graphics:mask_graphics_51,x:-41.2,y:-8.5}).wait(1).to({graphics:mask_graphics_52,x:-40.9,y:-8.3}).wait(1).to({graphics:mask_graphics_53,x:-40.5,y:-8.1}).wait(1).to({graphics:mask_graphics_54,x:-40.2,y:-8}).wait(1).to({graphics:mask_graphics_55,x:-39.8,y:-7.8}).wait(1).to({graphics:mask_graphics_56,x:-39.5,y:-7.6}).wait(1).to({graphics:mask_graphics_57,x:-39.2,y:-7.4}).wait(1).to({graphics:mask_graphics_58,x:-38.8,y:-7.3}).wait(1).to({graphics:mask_graphics_59,x:-38.5,y:-7.1}).wait(1).to({graphics:mask_graphics_60,x:-38.1,y:-6.9}).wait(1).to({graphics:mask_graphics_61,x:-37.8,y:-6.7}).wait(1).to({graphics:mask_graphics_62,x:-37.5,y:-6.6}).wait(1).to({graphics:mask_graphics_63,x:-37.1,y:-6.4}).wait(1).to({graphics:mask_graphics_64,x:-36.8,y:-6.2}).wait(1).to({graphics:mask_graphics_65,x:-36.4,y:-6}).wait(1).to({graphics:mask_graphics_66,x:-36.1,y:-5.9}).wait(1).to({graphics:mask_graphics_67,x:-35.8,y:-5.7}).wait(1).to({graphics:mask_graphics_68,x:-35.4,y:-5.5}).wait(1).to({graphics:mask_graphics_69,x:-35.1,y:-5.3}).wait(1).to({graphics:mask_graphics_70,x:-34.7,y:-5.2}).wait(1).to({graphics:mask_graphics_71,x:-34.4,y:-5}).wait(1).to({graphics:mask_graphics_72,x:-34.1,y:-4.8}).wait(1).to({graphics:mask_graphics_73,x:-33.7,y:-4.6}).wait(1).to({graphics:mask_graphics_74,x:-33.4,y:-4.5}).wait(1).to({graphics:mask_graphics_75,x:-33.1,y:-4.3}).wait(1).to({graphics:mask_graphics_76,x:-32.7,y:-4.1}).wait(1).to({graphics:mask_graphics_77,x:-32.4,y:-3.9}).wait(1).to({graphics:mask_graphics_78,x:-32,y:-3.8}).wait(1).to({graphics:mask_graphics_79,x:-31.7,y:-3.6}).wait(1).to({graphics:mask_graphics_80,x:-31.4,y:-3.4}).wait(1).to({graphics:mask_graphics_81,x:-31,y:-3.2}).wait(1).to({graphics:mask_graphics_82,x:-30.7,y:-3.1}).wait(1).to({graphics:mask_graphics_83,x:-30.4,y:-2.9}).wait(1).to({graphics:mask_graphics_84,x:-30,y:-2.7}).wait(1).to({graphics:mask_graphics_85,x:-29.7,y:-2.5}).wait(1).to({graphics:mask_graphics_86,x:-29.3,y:-2.4}).wait(1).to({graphics:mask_graphics_87,x:-29,y:-2.2}).wait(1).to({graphics:mask_graphics_88,x:-28.7,y:-2}).wait(1).to({graphics:mask_graphics_89,x:-28.3,y:-1.8}).wait(1).to({graphics:mask_graphics_90,x:-28,y:-1.7}).wait(1).to({graphics:mask_graphics_91,x:-27.6,y:-1.5}).wait(1).to({graphics:mask_graphics_92,x:-27.3,y:-1.3}).wait(1).to({graphics:mask_graphics_93,x:-27,y:-1.1}).wait(1).to({graphics:mask_graphics_94,x:-26.6,y:-1}).wait(1).to({graphics:mask_graphics_95,x:-26.3,y:-0.8}).wait(1).to({graphics:mask_graphics_96,x:-25.9,y:-0.6}).wait(1).to({graphics:mask_graphics_97,x:-25.6,y:-0.4}).wait(1).to({graphics:mask_graphics_98,x:-25.3,y:-0.3}).wait(1).to({graphics:mask_graphics_99,x:-24.9,y:-0.1}).wait(1).to({graphics:mask_graphics_100,x:-24.6,y:0.1}).wait(1).to({graphics:mask_graphics_101,x:-24.2,y:0.3}).wait(1).to({graphics:mask_graphics_102,x:-23.9,y:0.4}).wait(1).to({graphics:mask_graphics_103,x:-23.6,y:0.6}).wait(1).to({graphics:mask_graphics_104,x:-23.2,y:0.8}).wait(1).to({graphics:mask_graphics_105,x:-22.9,y:1}).wait(1).to({graphics:mask_graphics_106,x:-22.5,y:1.1}).wait(1).to({graphics:mask_graphics_107,x:-22.2,y:1.3}).wait(1).to({graphics:mask_graphics_108,x:-21.9,y:1.5}).wait(1).to({graphics:mask_graphics_109,x:-21.5,y:1.7}).wait(1).to({graphics:mask_graphics_110,x:-21.2,y:1.8}).wait(1).to({graphics:mask_graphics_111,x:-20.8,y:2}).wait(1).to({graphics:mask_graphics_112,x:-20.5,y:2.2}).wait(1).to({graphics:mask_graphics_113,x:-20.2,y:2.4}).wait(1).to({graphics:mask_graphics_114,x:-19.8,y:2.5}).wait(1).to({graphics:mask_graphics_115,x:-19.5,y:2.7}).wait(1).to({graphics:mask_graphics_116,x:-19.1,y:2.9}).wait(1).to({graphics:mask_graphics_117,x:-18.8,y:3.1}).wait(1).to({graphics:mask_graphics_118,x:-18.5,y:3.2}).wait(1).to({graphics:mask_graphics_119,x:-18.1,y:3.4}).wait(1).to({graphics:mask_graphics_120,x:-17.8,y:3.6}).wait(1).to({graphics:mask_graphics_121,x:-17.4,y:3.8}).wait(1).to({graphics:mask_graphics_122,x:-17.1,y:3.9}).wait(1).to({graphics:mask_graphics_123,x:-16.8,y:4.1}).wait(1).to({graphics:mask_graphics_124,x:-16.4,y:4.3}).wait(1).to({graphics:mask_graphics_125,x:-16.1,y:4.5}).wait(1).to({graphics:mask_graphics_126,x:-15.7,y:4.7}).wait(1).to({graphics:mask_graphics_127,x:-15.4,y:4.8}).wait(1).to({graphics:mask_graphics_128,x:-15.1,y:5}).wait(1).to({graphics:mask_graphics_129,x:-14.7,y:5.2}).wait(1).to({graphics:mask_graphics_130,x:-14.4,y:5.4}).wait(1).to({graphics:mask_graphics_131,x:-14.1,y:5.5}).wait(1).to({graphics:mask_graphics_132,x:-13.7,y:5.7}).wait(1).to({graphics:mask_graphics_133,x:-13.4,y:5.9}).wait(1).to({graphics:mask_graphics_134,x:-13,y:6.1}).wait(1).to({graphics:mask_graphics_135,x:-12.7,y:6.2}).wait(1).to({graphics:mask_graphics_136,x:-12.4,y:6.4}).wait(1).to({graphics:mask_graphics_137,x:-12,y:6.6}).wait(1).to({graphics:mask_graphics_138,x:-11.7,y:6.8}).wait(1).to({graphics:mask_graphics_139,x:-11.3,y:6.9}).wait(1).to({graphics:mask_graphics_140,x:-11,y:7.1}).wait(1).to({graphics:mask_graphics_141,x:-10.7,y:7.3}).wait(1).to({graphics:mask_graphics_142,x:-10.3,y:7.5}).wait(1).to({graphics:mask_graphics_143,x:-10,y:7.6}).wait(1).to({graphics:mask_graphics_144,x:-9.6,y:7.8}).wait(1).to({graphics:mask_graphics_145,x:-9.3,y:8}).wait(1).to({graphics:mask_graphics_146,x:-9,y:8.2}).wait(1).to({graphics:mask_graphics_147,x:-8.6,y:8.3}).wait(1).to({graphics:mask_graphics_148,x:-8.3,y:8.5}).wait(1).to({graphics:mask_graphics_149,x:-7.9,y:8.7}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AnfkmQCwKeMPhb");

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(150));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.3,-37.3,21.2,38.8);


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
(lib.WS_Cursive_c = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_399 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(399).call(this.frame_399).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(285.5,213.1,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[285.5,213,254.6,163.7,203.1,183.9,171.3,196.3,152.5,225.2,124.4,268.5,127.3,319.5,130.1,369.2,177.2,373.7,200.5,375.8,222.4,367.2,266.1,349.9,303.4,321.2,339.8,293.1,373.4,262.1,400.6,237.1,426.4,211]}},315).wait(15).to({startPosition:0},0).to({guide:{path:[427,211,375.7,186.7,428.8,159.5,448.3,149.6,468.3,163.7,516.6,197.6,545.5,250.1,557,271.2,581.1,277.7,603.9,283.8,626.5,277.4]}},60).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(428,210.1,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},315).wait(76));

	// Layer 6
	this.instance_1 = new lib.ar4("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(212.2,259.3,1,1,109.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).wait(391));

	// Layer 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_209 = new cjs.Graphics().p("AGoZjIH6mZIGAHbIn6GZg");
	var mask_graphics_210 = new cjs.Graphics().p("AnDgZIIImmIF/HZIoHGmg");
	var mask_graphics_211 = new cjs.Graphics().p("AnLgUIIYmxIF/HZIoYGyg");
	var mask_graphics_212 = new cjs.Graphics().p("AnTgOIIpm9IF/HYIooG/g");
	var mask_graphics_213 = new cjs.Graphics().p("AncgIII6nJIF/HYIo4HLg");
	var mask_graphics_214 = new cjs.Graphics().p("AnkgCIJKnVIF/HXIpIHZg");
	var mask_graphics_215 = new cjs.Graphics().p("AnsADIJanhIF/HZIpYHkg");
	var mask_graphics_216 = new cjs.Graphics().p("An0AJIJrntIF+HYIpnHxg");
	var mask_graphics_217 = new cjs.Graphics().p("An8APIJ7n5IF+HYIp3H9g");
	var mask_graphics_218 = new cjs.Graphics().p("AoEAVIKMoFIF9HYIqHIJg");
	var mask_graphics_219 = new cjs.Graphics().p("AoMAbIKcoRIF9HXIqXIWg");
	var mask_graphics_220 = new cjs.Graphics().p("AoUAhIKtodIF8HXIqmIjg");
	var mask_graphics_221 = new cjs.Graphics().p("AocAnIK9oqIF8HXIq2Iwg");
	var mask_graphics_222 = new cjs.Graphics().p("AolAtILOo2IF9HXIrHI8g");
	var mask_graphics_223 = new cjs.Graphics().p("AotAzILepCIF9HWIrXJJg");
	var mask_graphics_224 = new cjs.Graphics().p("Ao1A5ILvpOIF8HWIrnJVg");
	var mask_graphics_225 = new cjs.Graphics().p("Ao9A/IL/paIF8HVIr3Jig");
	var mask_graphics_226 = new cjs.Graphics().p("ApFBFIMPpmIF8HVIsGJug");
	var mask_graphics_227 = new cjs.Graphics().p("ApNBLIMgpzIF7HVIsWJ8g");
	var mask_graphics_228 = new cjs.Graphics().p("ApVBRIMwp/IF7HVIsmKIg");
	var mask_graphics_229 = new cjs.Graphics().p("ApdBXINAqLIF7HUIs2KVg");
	var mask_graphics_230 = new cjs.Graphics().p("AplBdINRqXIF6HUItFKhg");
	var mask_graphics_231 = new cjs.Graphics().p("ApuBjINiqjIF7HUItWKtg");
	var mask_graphics_232 = new cjs.Graphics().p("Ap2BpINzqvIF6HTItmK6g");
	var mask_graphics_233 = new cjs.Graphics().p("Ap+BvIOCq7IF7HTIt1LHg");
	var mask_graphics_234 = new cjs.Graphics().p("AqGB1IOTrIIF6HTIuFLUg");
	var mask_graphics_235 = new cjs.Graphics().p("AqOB7IOjrUIF6HTIuVLgg");
	var mask_graphics_236 = new cjs.Graphics().p("AqWCAIO0rfIF5HSIulLtg");
	var mask_graphics_237 = new cjs.Graphics().p("AqeCGIPErrIF5HSIu1L5g");
	var mask_graphics_238 = new cjs.Graphics().p("AqmCNIPVr4IF5HRIvGMGg");
	var mask_graphics_239 = new cjs.Graphics().p("AquCSIPlsDIF4HRIvVMSg");
	var mask_graphics_240 = new cjs.Graphics().p("Aq3CYIP2sQIF5HSIvlMfg");
	var mask_graphics_241 = new cjs.Graphics().p("Aq/CfIQHsdIF4HRIv1Msg");
	var mask_graphics_242 = new cjs.Graphics().p("ArHCkIQXsoIF4HQIwFM5g");
	var mask_graphics_243 = new cjs.Graphics().p("ArPCqIQns0IF4HQIwUNFg");
	var mask_graphics_244 = new cjs.Graphics().p("ArXCxIQ3tCIF4HRIwkNRg");
	var mask_graphics_245 = new cjs.Graphics().p("ArfC2IRItMIF3HPIw0Neg");
	var mask_graphics_246 = new cjs.Graphics().p("ArnC8IRYtZIF3HPIxENsg");
	var mask_graphics_247 = new cjs.Graphics().p("ArvDCIRotlIF4HPIxUN4g");
	var mask_graphics_248 = new cjs.Graphics().p("Ar3DIIR5txIF3HPIxkOEg");
	var mask_graphics_249 = new cjs.Graphics().p("AsADOISKt9IF3HOIx0ORg");
	var mask_graphics_250 = new cjs.Graphics().p("AsIDUISbuJIF2HOIyEOdg");
	var mask_graphics_251 = new cjs.Graphics().p("AsQDaISquVIF3HNIyUOqg");
	var mask_graphics_252 = new cjs.Graphics().p("AsYDgIS7uiIF2HOIykO2g");
	var mask_graphics_253 = new cjs.Graphics().p("AsgDmITLuuIF2HNIy0PEg");
	var mask_graphics_254 = new cjs.Graphics().p("AsoDsITcu6IF1HNIzDPQg");
	var mask_graphics_255 = new cjs.Graphics().p("AswDyITsvGIF1HMIzTPdg");
	var mask_graphics_256 = new cjs.Graphics().p("As4D4IT9vSIF0HMIzjPpg");
	var mask_graphics_257 = new cjs.Graphics().p("AtAD+IUNvfIF1HNIzzP1g");
	var mask_graphics_258 = new cjs.Graphics().p("AtJEEIUevrIF1HMI0DQCg");
	var mask_graphics_259 = new cjs.Graphics().p("AtREKIUvv3IF0HLI0TQQg");
	var mask_graphics_260 = new cjs.Graphics().p("AtZEQIU/wDIF0HLI0jQcg");
	var mask_graphics_261 = new cjs.Graphics().p("AthEWIVPwPIF0HKI0yQpg");
	var mask_graphics_262 = new cjs.Graphics().p("AtpEcIVfwbIF0HKI1DQ1g");
	var mask_graphics_263 = new cjs.Graphics().p("AtxEiIVwwnIFzHKI1SRBg");
	var mask_graphics_264 = new cjs.Graphics().p("At5EoIWAwzIF0HJI1jROg");
	var mask_graphics_265 = new cjs.Graphics().p("AuBEtIWQw+IFzHII1yRbg");
	var mask_graphics_266 = new cjs.Graphics().p("AuJE0IWhxMIFyHJI2CRog");
	var mask_graphics_267 = new cjs.Graphics().p("AuSE6IWyxYIFzHJI2TR0g");
	var mask_graphics_268 = new cjs.Graphics().p("AuaFAIXDxkIFyHII2iSBg");
	var mask_graphics_269 = new cjs.Graphics().p("AuiFGIXTxwIFyHII2ySNg");
	var mask_graphics_270 = new cjs.Graphics().p("AuqFLIXjx7IFyHHI3CSag");
	var mask_graphics_271 = new cjs.Graphics().p("AuyFRIXzyIIFyHII3SSmg");
	var mask_graphics_272 = new cjs.Graphics().p("Au6FYIYEyVIFxHHI3hS0g");
	var mask_graphics_273 = new cjs.Graphics().p("AvCFdIYUygIFyHHI3yTAg");
	var mask_graphics_274 = new cjs.Graphics().p("AvKFjIYlysIFxHGI4CTNg");
	var mask_graphics_275 = new cjs.Graphics().p("AvSFqIY0y5IFxHGI4RTZg");
	var mask_graphics_276 = new cjs.Graphics().p("AvaFxIZEzHIFxHGI4hTng");
	var mask_graphics_277 = new cjs.Graphics().p("AviF3IZVzUIFxHHI4yT0g");
	var mask_graphics_278 = new cjs.Graphics().p("AvqF9IZlzgIFxHGI5CUBg");
	var mask_graphics_279 = new cjs.Graphics().p("AvyGEIZ0zuIFxHGI5RUPg");
	var mask_graphics_280 = new cjs.Graphics().p("Av6GKIaEz7IFxHHI5hUbg");
	var mask_graphics_281 = new cjs.Graphics().p("AwCGRIaU0IIFyHGI5yUpg");
	var mask_graphics_282 = new cjs.Graphics().p("AwKGXIal0UIFxHFI6CU2g");
	var mask_graphics_283 = new cjs.Graphics().p("AwSGeIa10iIFxHGI6SVDg");
	var mask_graphics_284 = new cjs.Graphics().p("AwaGkIbE0vIFxHGI6hVRg");
	var mask_graphics_285 = new cjs.Graphics().p("AwiGrIbU08IFxHFI6xVeg");
	var mask_graphics_286 = new cjs.Graphics().p("AwrGxIbl1JIFyHGI7CVrg");
	var mask_graphics_287 = new cjs.Graphics().p("AwzG3Ib11WIFyHGI7SV4g");
	var mask_graphics_288 = new cjs.Graphics().p("Aw7G+IcF1jIFyHGI7iWFg");
	var mask_graphics_289 = new cjs.Graphics().p("AxDHEIcV1wIFyHGI7yWSg");
	var mask_graphics_290 = new cjs.Graphics().p("AxLHLIcl19IFyHFI8CWgg");
	var mask_graphics_291 = new cjs.Graphics().p("AxTHRIc12KIFyHGI8SWtg");
	var mask_graphics_292 = new cjs.Graphics().p("AxbHYIdF2XIFyHFI8iW6g");
	var mask_graphics_293 = new cjs.Graphics().p("AxjHfIdV2lIFyHFI8yXIg");
	var mask_graphics_294 = new cjs.Graphics().p("AxrHlIdl2yIFyHFI9CXVg");
	var mask_graphics_295 = new cjs.Graphics().p("AxzHsId12/IFyHFI9SXig");
	var mask_graphics_296 = new cjs.Graphics().p("Ax7HxIeF3LIFyHFI9iXvg");
	var mask_graphics_297 = new cjs.Graphics().p("AyDH4IeV3YIFyHFI9yX8g");
	var mask_graphics_298 = new cjs.Graphics().p("AyLH/Iel3mIFyHFI+CYKg");
	var mask_graphics_299 = new cjs.Graphics().p("AyTIFIe13yIFyHEI+TYXg");
	var mask_graphics_300 = new cjs.Graphics().p("AybIMIfF4AIFyHFI+jYkg");
	var mask_graphics_301 = new cjs.Graphics().p("AyjISIfV4MIFyHEI+zYxg");
	var mask_graphics_302 = new cjs.Graphics().p("AyrIYIfl4ZIFyHEI/DY/g");
	var mask_graphics_303 = new cjs.Graphics().p("AyzIfIf14mIFyHDI/TZMg");
	var mask_graphics_304 = new cjs.Graphics().p("Ay7ImMAgFgY0IFyHEI/jZZg");
	var mask_graphics_305 = new cjs.Graphics().p("AzDIsMAgVgZBIFyHEI/zZng");
	var mask_graphics_306 = new cjs.Graphics().p("AzLIyMAglgZNIFyHEMggDAZzg");
	var mask_graphics_307 = new cjs.Graphics().p("AzTI5MAg1gZbIFyHFMggTAaAg");
	var mask_graphics_308 = new cjs.Graphics().p("AzbJAMAhFgZoIFyHEMggjAaNg");
	var mask_graphics_309 = new cjs.Graphics().p("AzjJGMAhVgZ1IFyHEMggzAabg");
	var mask_graphics_310 = new cjs.Graphics().p("AzrJNMAhkgaCIFzHDMghDAaog");
	var mask_graphics_311 = new cjs.Graphics().p("AzzJTMAh0gaPIFzHEMghTAa1g");
	var mask_graphics_312 = new cjs.Graphics().p("Az7JZMAiEgacIFzHEMghjAbDg");
	var mask_graphics_313 = new cjs.Graphics().p("A0DJgMAiUgapIFzHDMghzAbQg");
	var mask_graphics_314 = new cjs.Graphics().p("A0LJmMAikga2IFzHEMgiDAbdg");
	var mask_graphics_315 = new cjs.Graphics().p("A0TJtMAi0gbEIFzHEMgiTAbqg");
	var mask_graphics_316 = new cjs.Graphics().p("A0bJzMAjEgbQIFzHEMgijAb3g");
	var mask_graphics_317 = new cjs.Graphics().p("A0jJ6MAjUgbeIFzHEMgizAcFg");
	var mask_graphics_318 = new cjs.Graphics().p("A0rKAMAjkgbqIFzHDMgjDAcSg");
	var mask_graphics_319 = new cjs.Graphics().p("A0zKHMAj0gb4IFzHDMgjTAcgg");
	var mask_graphics_320 = new cjs.Graphics().p("A07KNMAkEgcEIFzHDMgjjAcsg");
	var mask_graphics_321 = new cjs.Graphics().p("A1DKTMAkUgcRIFzHDMgjzAc6g");
	var mask_graphics_322 = new cjs.Graphics().p("A1LKaMAkkgcfIFzHDMgkDAdHg");
	var mask_graphics_323 = new cjs.Graphics().p("A1qLHMAlcgdwIF5HQMglLAeCg");
	var mask_graphics_324 = new cjs.Graphics().p("AokZjMAmUge/IGAHaMgmVAfAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(209).to({graphics:mask_graphics_209,x:131.4,y:211}).wait(1).to({graphics:mask_graphics_210,x:219.1,y:377.1}).wait(1).to({graphics:mask_graphics_211,x:219.9,y:376.5}).wait(1).to({graphics:mask_graphics_212,x:220.7,y:375.9}).wait(1).to({graphics:mask_graphics_213,x:221.5,y:375.3}).wait(1).to({graphics:mask_graphics_214,x:222.3,y:374.7}).wait(1).to({graphics:mask_graphics_215,x:223.2,y:374}).wait(1).to({graphics:mask_graphics_216,x:224,y:373.4}).wait(1).to({graphics:mask_graphics_217,x:224.8,y:372.8}).wait(1).to({graphics:mask_graphics_218,x:225.6,y:372.2}).wait(1).to({graphics:mask_graphics_219,x:226.4,y:371.6}).wait(1).to({graphics:mask_graphics_220,x:227.2,y:371}).wait(1).to({graphics:mask_graphics_221,x:228,y:370.4}).wait(1).to({graphics:mask_graphics_222,x:228.8,y:369.7}).wait(1).to({graphics:mask_graphics_223,x:229.6,y:369.1}).wait(1).to({graphics:mask_graphics_224,x:230.5,y:368.5}).wait(1).to({graphics:mask_graphics_225,x:231.3,y:367.9}).wait(1).to({graphics:mask_graphics_226,x:232.1,y:367.3}).wait(1).to({graphics:mask_graphics_227,x:232.9,y:366.7}).wait(1).to({graphics:mask_graphics_228,x:233.7,y:366}).wait(1).to({graphics:mask_graphics_229,x:234.5,y:365.4}).wait(1).to({graphics:mask_graphics_230,x:235.3,y:364.8}).wait(1).to({graphics:mask_graphics_231,x:236.1,y:364.2}).wait(1).to({graphics:mask_graphics_232,x:236.9,y:363.6}).wait(1).to({graphics:mask_graphics_233,x:237.8,y:363}).wait(1).to({graphics:mask_graphics_234,x:238.6,y:362.4}).wait(1).to({graphics:mask_graphics_235,x:239.4,y:361.7}).wait(1).to({graphics:mask_graphics_236,x:240.2,y:361.1}).wait(1).to({graphics:mask_graphics_237,x:241,y:360.5}).wait(1).to({graphics:mask_graphics_238,x:241.8,y:359.9}).wait(1).to({graphics:mask_graphics_239,x:242.6,y:359.3}).wait(1).to({graphics:mask_graphics_240,x:243.4,y:358.7}).wait(1).to({graphics:mask_graphics_241,x:244.2,y:358}).wait(1).to({graphics:mask_graphics_242,x:245.1,y:357.5}).wait(1).to({graphics:mask_graphics_243,x:245.9,y:356.8}).wait(1).to({graphics:mask_graphics_244,x:246.7,y:356.2}).wait(1).to({graphics:mask_graphics_245,x:247.5,y:355.6}).wait(1).to({graphics:mask_graphics_246,x:248.3,y:355}).wait(1).to({graphics:mask_graphics_247,x:249.1,y:354.4}).wait(1).to({graphics:mask_graphics_248,x:249.9,y:353.8}).wait(1).to({graphics:mask_graphics_249,x:250.7,y:353.1}).wait(1).to({graphics:mask_graphics_250,x:251.5,y:352.5}).wait(1).to({graphics:mask_graphics_251,x:252.4,y:351.9}).wait(1).to({graphics:mask_graphics_252,x:253.2,y:351.3}).wait(1).to({graphics:mask_graphics_253,x:254,y:350.7}).wait(1).to({graphics:mask_graphics_254,x:254.8,y:350.1}).wait(1).to({graphics:mask_graphics_255,x:255.6,y:349.5}).wait(1).to({graphics:mask_graphics_256,x:256.4,y:348.8}).wait(1).to({graphics:mask_graphics_257,x:257.2,y:348.2}).wait(1).to({graphics:mask_graphics_258,x:258,y:347.6}).wait(1).to({graphics:mask_graphics_259,x:258.8,y:347}).wait(1).to({graphics:mask_graphics_260,x:259.7,y:346.4}).wait(1).to({graphics:mask_graphics_261,x:260.5,y:345.8}).wait(1).to({graphics:mask_graphics_262,x:261.3,y:345.1}).wait(1).to({graphics:mask_graphics_263,x:262.1,y:344.5}).wait(1).to({graphics:mask_graphics_264,x:262.9,y:343.9}).wait(1).to({graphics:mask_graphics_265,x:263.7,y:343.3}).wait(1).to({graphics:mask_graphics_266,x:264.5,y:342.7}).wait(1).to({graphics:mask_graphics_267,x:265.3,y:342.1}).wait(1).to({graphics:mask_graphics_268,x:266.1,y:341.5}).wait(1).to({graphics:mask_graphics_269,x:267,y:340.8}).wait(1).to({graphics:mask_graphics_270,x:267.8,y:340.2}).wait(1).to({graphics:mask_graphics_271,x:268.6,y:339.6}).wait(1).to({graphics:mask_graphics_272,x:269.4,y:339}).wait(1).to({graphics:mask_graphics_273,x:270.2,y:338.4}).wait(1).to({graphics:mask_graphics_274,x:271,y:337.8}).wait(1).to({graphics:mask_graphics_275,x:271.8,y:337.1}).wait(1).to({graphics:mask_graphics_276,x:272.6,y:336.4}).wait(1).to({graphics:mask_graphics_277,x:273.4,y:335.8}).wait(1).to({graphics:mask_graphics_278,x:274.2,y:335.1}).wait(1).to({graphics:mask_graphics_279,x:275,y:334.5}).wait(1).to({graphics:mask_graphics_280,x:275.8,y:333.8}).wait(1).to({graphics:mask_graphics_281,x:276.6,y:333.2}).wait(1).to({graphics:mask_graphics_282,x:277.4,y:332.5}).wait(1).to({graphics:mask_graphics_283,x:278.2,y:331.8}).wait(1).to({graphics:mask_graphics_284,x:279,y:331.2}).wait(1).to({graphics:mask_graphics_285,x:279.8,y:330.5}).wait(1).to({graphics:mask_graphics_286,x:280.6,y:329.9}).wait(1).to({graphics:mask_graphics_287,x:281.4,y:329.2}).wait(1).to({graphics:mask_graphics_288,x:282.2,y:328.6}).wait(1).to({graphics:mask_graphics_289,x:283,y:327.9}).wait(1).to({graphics:mask_graphics_290,x:283.8,y:327.2}).wait(1).to({graphics:mask_graphics_291,x:284.6,y:326.6}).wait(1).to({graphics:mask_graphics_292,x:285.4,y:325.9}).wait(1).to({graphics:mask_graphics_293,x:286.2,y:325.3}).wait(1).to({graphics:mask_graphics_294,x:287,y:324.6}).wait(1).to({graphics:mask_graphics_295,x:287.8,y:324}).wait(1).to({graphics:mask_graphics_296,x:288.6,y:323.3}).wait(1).to({graphics:mask_graphics_297,x:289.4,y:322.6}).wait(1).to({graphics:mask_graphics_298,x:290.2,y:322}).wait(1).to({graphics:mask_graphics_299,x:291,y:321.3}).wait(1).to({graphics:mask_graphics_300,x:291.8,y:320.7}).wait(1).to({graphics:mask_graphics_301,x:292.6,y:320}).wait(1).to({graphics:mask_graphics_302,x:293.4,y:319.4}).wait(1).to({graphics:mask_graphics_303,x:294.2,y:318.7}).wait(1).to({graphics:mask_graphics_304,x:295,y:318}).wait(1).to({graphics:mask_graphics_305,x:295.8,y:317.4}).wait(1).to({graphics:mask_graphics_306,x:296.6,y:316.7}).wait(1).to({graphics:mask_graphics_307,x:297.4,y:316.1}).wait(1).to({graphics:mask_graphics_308,x:298.2,y:315.4}).wait(1).to({graphics:mask_graphics_309,x:299,y:314.8}).wait(1).to({graphics:mask_graphics_310,x:299.9,y:314.1}).wait(1).to({graphics:mask_graphics_311,x:300.7,y:313.4}).wait(1).to({graphics:mask_graphics_312,x:301.5,y:312.8}).wait(1).to({graphics:mask_graphics_313,x:302.3,y:312.1}).wait(1).to({graphics:mask_graphics_314,x:303.1,y:311.5}).wait(1).to({graphics:mask_graphics_315,x:303.9,y:310.8}).wait(1).to({graphics:mask_graphics_316,x:304.7,y:310.2}).wait(1).to({graphics:mask_graphics_317,x:305.5,y:309.5}).wait(1).to({graphics:mask_graphics_318,x:306.3,y:308.8}).wait(1).to({graphics:mask_graphics_319,x:307.1,y:308.2}).wait(1).to({graphics:mask_graphics_320,x:307.9,y:307.5}).wait(1).to({graphics:mask_graphics_321,x:308.7,y:306.9}).wait(1).to({graphics:mask_graphics_322,x:309.4,y:306.2}).wait(1).to({graphics:mask_graphics_323,x:312.6,y:302.6}).wait(1).to({graphics:mask_graphics_324,x:228.8,y:211}).wait(76));

	// Guide: Honey bee
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(20,1,1).p("ABWprQk3n5oGDLQk+B9i8EgQkaGyAdH8QAdHyHXAtQDpAVDbhWQG2itFzkgQFskYFRk1QEXkCEKkN");
	this.shape_1.setTransform(277.4,276.1);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(209).to({_off:false},0).wait(191));

	// Layer 3 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_127 = new cjs.Graphics().p("A5bE9QEDrcK9lPQK8lQLcEEQLcEBFQK8Mg02AZSQlQq9ECrbg");
	var mask_1_graphics_128 = new cjs.Graphics().p("A5eFPQD0rhK2ldQK2lcLgD1QLiDzFdK1Mg0WAaTQldq2D0rgg");
	var mask_1_graphics_129 = new cjs.Graphics().p("A5hFiQDmrmKwlqQKvlqLkDnQLmDkFqKvMgz0AbUQlrqwDmrkg");
	var mask_1_graphics_130 = new cjs.Graphics().p("A5jF0QDYrqKol3QKpl3LoDYQLrDXF3KoMgzTAcSQl3qoDXrpg");
	var mask_1_graphics_131 = new cjs.Graphics().p("A5kGHQDKruKhmEQKhmELsDKQLvDIGEKhMgyvAdRQmEqhDIrtg");
	var mask_1_graphics_132 = new cjs.Graphics().p("A5jGbQC7ryKZmRQKZmSLxC8QLyC5GRKaMgyKAeQQmSqaC7rwg");
	var mask_1_graphics_133 = new cjs.Graphics().p("A5iGvQCsr2KSmeQKRmeL0CtQL1CrGeKRMgxkAfOQmeqRCsr0g");
	var mask_1_graphics_134 = new cjs.Graphics().p("A5gHDQCer5KJmqQKJmrL3CeQL5CcGrKKMgw9AgKQmrqJCdr3g");
	var mask_1_graphics_135 = new cjs.Graphics().p("A5dHXQCPr7KBm3QKBm3L6CPQL7COG4KBMgwVAhGQm3qBCOr6g");
	var mask_1_graphics_136 = new cjs.Graphics().p("A5YHsQB/r+J5nDQJ4nEL9CBQL+B/HDJ4MgvrAiCQnDp4CAr9g");
	var mask_1_graphics_137 = new cjs.Graphics().p("A5TIBQBxsAJvnQQJwnPL/ByQMABwHQJvMgvBAi9QnPpwBxr/g");
	var mask_1_graphics_138 = new cjs.Graphics().p("A5NIXQBisDJmnbQJnncMBBjQMCBhHcJnMguVAj2QnbpmBisBg");
	var mask_1_graphics_139 = new cjs.Graphics().p("A5GIsQBTsEJdnnQJdnnMDBUQMEBSHoJdMgtoAkvQnnpdBTsDg");
	var mask_1_graphics_140 = new cjs.Graphics().p("A4+JCQBEsFJUnzQJTnzMFBFQMFBDHzJUMgs5AlnQnzpTBEsFg");
	var mask_1_graphics_141 = new cjs.Graphics().p("A41JZQA1sHJKn+QJKn/MFA3QMHA0H+JKMgsKAmeQn+pKA1sFg");
	var mask_1_graphics_142 = new cjs.Graphics().p("A4rJvQAmsHJAoKQJAoKMGAoQMIAlIJJAMgraAnVQoJpAAmsHg");
	var mask_1_graphics_143 = new cjs.Graphics().p("A4gKGQAXsII2oVQI2oUMHAYQMIAWIUI2MgqpAoKQoVo2AYsHg");
	var mask_1_graphics_144 = new cjs.Graphics().p("A4UKdQAIsIIrogQIsofMHAJQMIAHIgIsMgp3Ao+QogosAJsHg");
	var mask_1_graphics_145 = new cjs.Graphics().p("A4IK1QgGsJIgoqQIhoqMIgGQMIgHIqIgMgpEApyQoqohgHsHg");
	var mask_1_graphics_146 = new cjs.Graphics().p("A36LMQgVsIIVo1QIWo0MHgVQMJgWI0IVMgoQAqkQo0oWgWsHg");
	var mask_1_graphics_147 = new cjs.Graphics().p("A3rLkQglsIILo+QILo/MHgkQMHglI/IKMgnbArVQo+oLglsGg");
	var mask_1_graphics_148 = new cjs.Graphics().p("A3bL8Qg0sHIApIQH/pJMGgzQMHg0JIH/MgmkAsFQpJn/gzsGg");
	var mask_1_graphics_149 = new cjs.Graphics().p("A3LMUQhDsGH1pSQH0pSMFhCQMFhDJTH0MgluAs0QpSn0hDsFg");
	var mask_1_graphics_150 = new cjs.Graphics().p("A25MtQhSsFHppbQHopcMEhRQMEhTJcHpMgk2AtjQpcnphRsDg");
	var mask_1_graphics_151 = new cjs.Graphics().p("A2nNFQhgsDHcpkQHdpmMChfQMChiJmHdMgj9AuQQpmndhgsCg");
	var mask_1_graphics_152 = new cjs.Graphics().p("A2UNeQhvsBHRpuQHRpuL/huQMBhxJuHRMgjDAu8QpunRhwsAg");
	var mask_1_graphics_153 = new cjs.Graphics().p("A1/N3Qh/r/HFp2QHFp3L9h+QL+h/J4HFMgiJAvmQp3nFh+r9g");
	var mask_1_graphics_154 = new cjs.Graphics().p("A1qORQiNr9G4p/QG5qAL7iMQL7iOKAG5MghOAwQQqAm5iMr6g");
	var mask_1_graphics_155 = new cjs.Graphics().p("A1UOqQicr6GsqHQGsqIL4ibQL4idKJGsMggRAw5QqJmsibr4g");
	var mask_1_graphics_156 = new cjs.Graphics().p("A09PEQirr3GgqQQGfqQL1ipQL1isKRGgMgfVAxgQqQmgiqr0g");
	var mask_1_graphics_157 = new cjs.Graphics().p("A0mPdQi5rzGTqXQGTqZLxi4QLyi6KYGTMgeXAyGQqYmTi5rxg");
	var mask_1_graphics_158 = new cjs.Graphics().p("A0NP3QjIrvGGqfQGGqhLujGQLujIKgGFMgdZAyrQqgmGjHrtg");
	var mask_1_graphics_159 = new cjs.Graphics().p("Az0QRQjWrrF5qnQF5qnLpjVQLrjXKnF5MgcZAzOQqol5jWrpg");
	var mask_1_graphics_160 = new cjs.Graphics().p("AzZQrQjlrnFsquQFrquLnjkQLkjlKvFsMgbaAzxQqulsjkrlg");
	var mask_1_graphics_161 = new cjs.Graphics().p("Ay+RFQjzriFeq1QFeq2LijxQLhj0K1FfMgaZA0SQq2lejyrhg");
	var mask_1_graphics_162 = new cjs.Graphics().p("AyiRfQkBrdFQq8QFRq8LdkAQLckBK8FQMgZZA0zQq8lRkArcg");
	var mask_1_graphics_163 = new cjs.Graphics().p("AyFR6QkQrZFErCQFDrCLYkOQLWkQLDFDMgYXA1RQrDlDkOrWg");
	var mask_1_graphics_164 = new cjs.Graphics().p("AxoSUQkdrTE1rIQE2rJLSkbQLRkeLJE1MgXVA1vQrIk2kdrRg");
	var mask_1_graphics_165 = new cjs.Graphics().p("AxKSuQkrrNEorOQEorOLNkqQLLksLOEoMgWSA2LQrOkokrrMg");
	var mask_1_graphics_166 = new cjs.Graphics().p("AwqTJQk5rIEZrTQEarULHk4QLFk5LVEaMgVPA2lQrUkZk4rGg");
	var mask_1_graphics_167 = new cjs.Graphics().p("AwLTkQlGrCELrYQEMraLBlFQK/lHLaELMgUMA3AQrZkMlGq/g");
	var mask_1_graphics_168 = new cjs.Graphics().p("AvqT+QlUq7D9rdQD+rfK7lTQK4lULfD9MgTIA3YQrej+lTq5g");
	var mask_1_graphics_169 = new cjs.Graphics().p("AvIUZQliq1DvriQDvrjK0lgQKyljLjDwMgSDA3uQrijvlgqyg");
	var mask_1_graphics_170 = new cjs.Graphics().p("AumUzQlvqtDhrnQDhrnKtluQKqlwLoDhMgQ+A4FQrmjhluqsg");
	var mask_1_graphics_171 = new cjs.Graphics().p("AuEVOQl8qmDTrrQDSrsKml7QKkl8LsDSMgP4A4ZQrrjTl8qkg");
	var mask_1_graphics_172 = new cjs.Graphics().p("AtgVpQmJqfDErvQDErwKemIQKcmJLwDEMgOyA4rQrvjEmIqcg");
	var mask_1_graphics_173 = new cjs.Graphics().p("As8WDQmWqXC2ryQC1r0KXmUQKUmXL0C2MgNsA49Qrzi2mVqVg");
	var mask_1_graphics_174 = new cjs.Graphics().p("AsXWeQmjqPCnr3QCnr2KPmhQKMmkL3CnMgMlA5OQr2inmiqNg");
	var mask_1_graphics_175 = new cjs.Graphics().p("ArxW4QmwqHCZr5QCYr5KGmuQKEmwL6CYMgLeA5cQr5iYmuqFg");
	var mask_1_graphics_176 = new cjs.Graphics().p("ArLXTQm8p/CKr8QCJr8J+m6QJ8m9L9CKMgKYA5qQr7iKm7p8g");
	var mask_1_graphics_177 = new cjs.Graphics().p("AqkXtQnIp1B6sAQB7r+J1nHQJ0nIL/B7MgJQA52Qr+h7nHp0g");
	var mask_1_graphics_178 = new cjs.Graphics().p("Ap9YIQnUptBssCQBssAJsnTQJqnUMCBsMgIIA6AQsBhrnTprg");
	var mask_1_graphics_179 = new cjs.Graphics().p("ApVYiQngpkBdsDQBdsDJjneQJingMDBdMgHAA6KQsDhdnfpig");
	var mask_1_graphics_180 = new cjs.Graphics().p("AosY8QnspaBOsFQBOsEJanrQJYnrMFBNMgF4A6SQsEhNnrpZg");
	var mask_1_graphics_181 = new cjs.Graphics().p("AoDZWQn3pQA/sHQA/sFJQn2QJOn4MHA/MgEwA6ZQsGg/n2pPg");
	var mask_1_graphics_182 = new cjs.Graphics().p("AnZZwQoDpHAxsHQAwsHJGoBQJEoDMIAxMgDoA6dQsIgwoApFg");
	var mask_1_graphics_183 = new cjs.Graphics().p("AmvaKQoNo9AhsIQAhsHI8oNQI6oNMJAhMgCgA6hQsIghoMo7g");
	var mask_1_graphics_184 = new cjs.Graphics().p("AmEakQoYozASsIQASsIIyoXQIwoZMJASMgBXA6kQsJgSoXoxg");
	var mask_1_graphics_185 = new cjs.Graphics().p("AlYa9QokonADsJQADsIIoojQImojMJADMgAPA6lQsJgDohong");
	var mask_1_graphics_186 = new cjs.Graphics().p("AlJbXQouodgMsJQgMsIIdotQIbouMJgMMAA5A6lIghAAQr0AAofoQg");
	var mask_1_graphics_187 = new cjs.Graphics().p("AlBbwQo5oTgbsIQgasIISo3QIQo4MIgbMACCA6iIhKACQraAAoan3g");
	var mask_1_graphics_188 = new cjs.Graphics().p("Ak4cIQpDoHgqsIQgqsHIHpBQIFpDMIgqMADKA6gQg6ADg5AAQrAAAoUnfg");
	var mask_1_graphics_189 = new cjs.Graphics().p("AkvcgQpNn8g5sHQg5sGH8pLQH6pNMHg5MAETA6bQhPAGhMAAQqoAAoOnHg");
	var mask_1_graphics_190 = new cjs.Graphics().p("Akmc3QpWnxhIsFQhIsFHxpVQHvpWMFhIMAFbA6VQhjAJhfAAQqQAAoImwg");
	var mask_1_graphics_191 = new cjs.Graphics().p("AkcdNQpfnlhXsEQhXsDHlpeQHjpgMDhWMAGkA6NQh2ANhyAAQp5AAoBmag");
	var mask_1_graphics_192 = new cjs.Graphics().p("AkRdjQppnZhmsCQhmsBHapoQHXppMBhlMAHsA6EQiJASiEAAQpjAAn5mEg");
	var mask_1_graphics_193 = new cjs.Graphics().p("AkGd5QpynNh1sAQh0sAHNpwQHMpyL/h1MAIzA57QicAXiVAAQpOAAnxlug");
	var mask_1_graphics_194 = new cjs.Graphics().p("Aj6eOQp7nBiEr+QiDr9HBp5QG/p7L9iDMAJ6A5vQitAeinAAQo5AAnolag");
	var mask_1_graphics_195 = new cjs.Graphics().p("AjveiQqDm1iSr7QiSr6G0qCQGzqDL7iSMALBA5iQjAAli4AAQokAAnglGg");
	var mask_1_graphics_196 = new cjs.Graphics().p("Ajie2QqMmoihr4Qihr5GpqJQGmqLL3ihMAMJA5UQjSAsjJAAQoQAAnWkyg");
	var mask_1_graphics_197 = new cjs.Graphics().p("AjVfJQqUmbiwr1Qivr1GbqRQGaqUL0ivMANQA5DQjjA1jaAAQn+AAnLkfg");
	var mask_1_graphics_198 = new cjs.Graphics().p("AjIfbQqbmOi/rxQi+ryGPqZQGNqbLwi+MAOWA4zQj0A9jqAAQnrAAnBkNg");
	var mask_1_graphics_199 = new cjs.Graphics().p("Ai6ftQqjmBjNruQjNrtGCqhQGAqjLtjMMAPcA4gQkFBHj7AAQnYAAm2j7g");
	var mask_1_graphics_200 = new cjs.Graphics().p("Aisf/Qqql1jcrpQjbrpF1qoQFzqqLojcMAQiA4NQkVBRkLAAQnGAAmrjpg");
	var mask_1_graphics_201 = new cjs.Graphics().p("EgCdAgQQqylnjprmQjqrlFoqvQFlqxLkjpMARnA33QkkBckcAAQm0AAmfjYg");
	var mask_1_graphics_202 = new cjs.Graphics().p("EgCOAggQq5laj3rgQj4rhFaq2QFYq3Lgj4MASsA3hQk0BnktAAQmiAAmTjIg");
	var mask_1_graphics_203 = new cjs.Graphics().p("EgB/AgvQq/lMkGrbQkGrcFNq8QFLq/LakGMATxA3KQlDBzk9AAQmRABmHi6g");
	var mask_1_graphics_204 = new cjs.Graphics().p("EgBvAg+QrFk+kUrWQkUrXE/rCQE9rFLWkUMAU0A2wQlSCAlOAAQl/AAl6iqg");
	var mask_1_graphics_205 = new cjs.Graphics().p("EgBfAhNQrLkxkirRQkirREyrIQEvrLLRkiMAV2A2WQlfCNlfAAQlvAAlsibg");
	var mask_1_graphics_206 = new cjs.Graphics().p("EgBOAhbQrRkjkwrLQkwrLEkrPQEhrQLMkwMAW5A16QluCbluAAQlfAAleiNg");
	var mask_1_graphics_207 = new cjs.Graphics().p("EgA9AhoQrWkVk+rFQk+rFEWrUQEUrWLFk+MAX8A1dQl8Cql/AAQlOAAlQiAg");
	var mask_1_graphics_208 = new cjs.Graphics().p("EgArAh0QrckGlLq/QlMq/EIrZQEFrbK/lMMAY+A0/QmIC5mRAAQk9AAlBh0g");
	var mask_1_graphics_209 = new cjs.Graphics().p("EgAZAiAQrhj4lZq5QlZq4D6reQD3rgK4lZMAZ/A0fQmVDJmiAAQksAAkyhog");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(127).to({graphics:mask_1_graphics_127,x:183.3,y:174.9}).wait(1).to({graphics:mask_1_graphics_128,x:182.5,y:176.5}).wait(1).to({graphics:mask_1_graphics_129,x:181.6,y:178.2}).wait(1).to({graphics:mask_1_graphics_130,x:180.8,y:179.7}).wait(1).to({graphics:mask_1_graphics_131,x:179.9,y:181.3}).wait(1).to({graphics:mask_1_graphics_132,x:179,y:182.9}).wait(1).to({graphics:mask_1_graphics_133,x:178,y:184.4}).wait(1).to({graphics:mask_1_graphics_134,x:177.1,y:185.9}).wait(1).to({graphics:mask_1_graphics_135,x:176.1,y:187.4}).wait(1).to({graphics:mask_1_graphics_136,x:175,y:188.9}).wait(1).to({graphics:mask_1_graphics_137,x:174,y:190.4}).wait(1).to({graphics:mask_1_graphics_138,x:172.9,y:191.8}).wait(1).to({graphics:mask_1_graphics_139,x:171.8,y:193.2}).wait(1).to({graphics:mask_1_graphics_140,x:170.6,y:194.6}).wait(1).to({graphics:mask_1_graphics_141,x:169.4,y:196}).wait(1).to({graphics:mask_1_graphics_142,x:168.3,y:197.4}).wait(1).to({graphics:mask_1_graphics_143,x:167,y:198.7}).wait(1).to({graphics:mask_1_graphics_144,x:165.8,y:200}).wait(1).to({graphics:mask_1_graphics_145,x:164.5,y:201.3}).wait(1).to({graphics:mask_1_graphics_146,x:163.2,y:202.5}).wait(1).to({graphics:mask_1_graphics_147,x:161.9,y:203.7}).wait(1).to({graphics:mask_1_graphics_148,x:160.5,y:204.9}).wait(1).to({graphics:mask_1_graphics_149,x:159.2,y:206.1}).wait(1).to({graphics:mask_1_graphics_150,x:157.8,y:207.3}).wait(1).to({graphics:mask_1_graphics_151,x:156.4,y:208.4}).wait(1).to({graphics:mask_1_graphics_152,x:154.9,y:209.5}).wait(1).to({graphics:mask_1_graphics_153,x:153.5,y:210.5}).wait(1).to({graphics:mask_1_graphics_154,x:152,y:211.6}).wait(1).to({graphics:mask_1_graphics_155,x:150.5,y:212.6}).wait(1).to({graphics:mask_1_graphics_156,x:149,y:213.6}).wait(1).to({graphics:mask_1_graphics_157,x:147.4,y:214.5}).wait(1).to({graphics:mask_1_graphics_158,x:145.9,y:215.4}).wait(1).to({graphics:mask_1_graphics_159,x:144.3,y:216.3}).wait(1).to({graphics:mask_1_graphics_160,x:142.7,y:217.2}).wait(1).to({graphics:mask_1_graphics_161,x:141.1,y:218}).wait(1).to({graphics:mask_1_graphics_162,x:139.5,y:218.8}).wait(1).to({graphics:mask_1_graphics_163,x:137.9,y:219.5}).wait(1).to({graphics:mask_1_graphics_164,x:136.2,y:220.3}).wait(1).to({graphics:mask_1_graphics_165,x:134.5,y:221}).wait(1).to({graphics:mask_1_graphics_166,x:132.9,y:221.6}).wait(1).to({graphics:mask_1_graphics_167,x:131.2,y:222.3}).wait(1).to({graphics:mask_1_graphics_168,x:129.5,y:222.9}).wait(1).to({graphics:mask_1_graphics_169,x:127.7,y:223.4}).wait(1).to({graphics:mask_1_graphics_170,x:126,y:224}).wait(1).to({graphics:mask_1_graphics_171,x:124.3,y:224.5}).wait(1).to({graphics:mask_1_graphics_172,x:122.5,y:224.9}).wait(1).to({graphics:mask_1_graphics_173,x:120.8,y:225.4}).wait(1).to({graphics:mask_1_graphics_174,x:119,y:225.8}).wait(1).to({graphics:mask_1_graphics_175,x:117.2,y:226.1}).wait(1).to({graphics:mask_1_graphics_176,x:115.5,y:226.5}).wait(1).to({graphics:mask_1_graphics_177,x:113.7,y:226.8}).wait(1).to({graphics:mask_1_graphics_178,x:111.9,y:227}).wait(1).to({graphics:mask_1_graphics_179,x:110.1,y:227.3}).wait(1).to({graphics:mask_1_graphics_180,x:108.3,y:227.4}).wait(1).to({graphics:mask_1_graphics_181,x:106.5,y:227.6}).wait(1).to({graphics:mask_1_graphics_182,x:104.7,y:227.7}).wait(1).to({graphics:mask_1_graphics_183,x:102.9,y:227.8}).wait(1).to({graphics:mask_1_graphics_184,x:101.1,y:227.9}).wait(1).to({graphics:mask_1_graphics_185,x:99.3,y:227.9}).wait(1).to({graphics:mask_1_graphics_186,x:100.3,y:227.9}).wait(1).to({graphics:mask_1_graphics_187,x:102.1,y:227.9}).wait(1).to({graphics:mask_1_graphics_188,x:103.9,y:227.9}).wait(1).to({graphics:mask_1_graphics_189,x:105.8,y:227.9}).wait(1).to({graphics:mask_1_graphics_190,x:107.6,y:227.9}).wait(1).to({graphics:mask_1_graphics_191,x:109.4,y:227.9}).wait(1).to({graphics:mask_1_graphics_192,x:111.2,y:227.9}).wait(1).to({graphics:mask_1_graphics_193,x:113,y:227.9}).wait(1).to({graphics:mask_1_graphics_194,x:114.7,y:228}).wait(1).to({graphics:mask_1_graphics_195,x:116.5,y:228}).wait(1).to({graphics:mask_1_graphics_196,x:118.3,y:228}).wait(1).to({graphics:mask_1_graphics_197,x:120.1,y:228}).wait(1).to({graphics:mask_1_graphics_198,x:121.8,y:228}).wait(1).to({graphics:mask_1_graphics_199,x:123.6,y:228}).wait(1).to({graphics:mask_1_graphics_200,x:125.3,y:228}).wait(1).to({graphics:mask_1_graphics_201,x:127,y:228}).wait(1).to({graphics:mask_1_graphics_202,x:128.8,y:228}).wait(1).to({graphics:mask_1_graphics_203,x:130.5,y:228}).wait(1).to({graphics:mask_1_graphics_204,x:132.2,y:228}).wait(1).to({graphics:mask_1_graphics_205,x:133.8,y:228}).wait(1).to({graphics:mask_1_graphics_206,x:135.5,y:228}).wait(1).to({graphics:mask_1_graphics_207,x:137.2,y:228}).wait(1).to({graphics:mask_1_graphics_208,x:138.8,y:228}).wait(1).to({graphics:mask_1_graphics_209,x:140.4,y:228}).wait(191));

	// Guide: Honey bee
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(20,1,1).p("ABWprQk3n5oGDLQk+B9i8EgQkaGyAdH8QAdHyHXAtQDpAVDbhWQG2itFzkgQFskYFRk1QEXkCEKkN");
	this.shape_2.setTransform(277.4,276.1);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(127).to({_off:false},0).wait(273));

	// Layer 1 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_9 = new cjs.Graphics().p("EgGQAiqQryi3mUqYMAyEgebQGTKXi4LyQi4LzqYGUQnHEUnyAAQjjAAjtg6g");
	var mask_2_graphics_10 = new cjs.Graphics().p("EgFnAi0Qr2immjqPMAxYgfiQGiKOinL1QinL3qPGjQnTEqoIAAQjQAAjZgwg");
	var mask_2_graphics_11 = new cjs.Graphics().p("EgE+Ai9Qr6iVmwqGMAwpggnQGxKFiWL3QiXL7qFGxQneFBoeAAQi9AAjFgng");
	var mask_2_graphics_12 = new cjs.Graphics().p("EgEUAjFQr9iEm/p8MAv5ghtQG/J8iFL7QiFL+p7G/QnpFYo1AAQipAAiwgfg");
	var mask_2_graphics_13 = new cjs.Graphics().p("EgDrAjMQsAhznNpxMAvJgixQHNJxh0L+Qh0MApxHNQnzFwpNAAQiUAAicgXg");
	var mask_2_graphics_14 = new cjs.Graphics().p("EgDBAjSQsChinbpnMAuWgjzQHbJnhjL/QhjMEpmHbQn8GIpmAAQiAAAiGgRg");
	var mask_2_graphics_15 = new cjs.Graphics().p("EgCXAjXQsEhRnppcMAtigk1QHpJchSMCQhRMFpcHpQoFGiqAAAQhrAAhvgMg");
	var mask_2_graphics_16 = new cjs.Graphics().p("EgBtAjbQsGg/n2pRMAssgl2QH2JRhAMEQhAMGpRH2QoNG9qaAAQhVAAhZgIg");
	var mask_2_graphics_17 = new cjs.Graphics().p("EgBEAjeQsGgtoEpGMAr2gm1QIDJGgvMEQgvMIpFIDQoUHYq2AAQg/AAhDgFg");
	var mask_2_graphics_18 = new cjs.Graphics().p("EgAaAjhQsHgdoQo6MAq9gnzQIQI6geMGQgdMIo6IQQobHzrSAAQgqAAgqgBg");
	var mask_2_graphics_19 = new cjs.Graphics().p("EAAPAjiQsHgLocouMAqDgowQIdIugMMGQgNMJouIdQogIPrwAAIgmAAg");
	var mask_2_graphics_20 = new cjs.Graphics().p("Az3bHMApJgpsQIpIiAFMGQAFMKoiIoQoiIpsIAEIgRAAQr8AAojobg");
	var mask_2_graphics_21 = new cjs.Graphics().p("AzZbkMAoMgqmQI1IWAXMFQAWMJoVI1QoVI1sIAWIhBABQreAAodn/g");
	var mask_2_graphics_22 = new cjs.Graphics().p("Ay6cAMAnOgreQJBIIAoMFQAoMJoJJAQoIJBsHAnQg5ADg3AAQrAAAoXnjg");
	var mask_2_graphics_23 = new cjs.Graphics().p("AybccMAmQgsWQJMH8A5MEQA5MHn7JMQn8JMsGA4QhPAGhOAAQqkAAoQnHg");
	var mask_2_graphics_24 = new cjs.Graphics().p("Ax7c3MAlQgtMQJXHuBKMDQBLMFnvJYQnuJXsEBJQhnAKhjAAQqJAAoImsg");
	var mask_2_graphics_25 = new cjs.Graphics().p("AxbdRMAkPguAQJiHgBbMBQBcMEnhJiQngJisDBbQh9APh4AAQpvAAoAmTg");
	var mask_2_graphics_26 = new cjs.Graphics().p("Aw6dqMAjMguzQJtHTBtL+QBsMCnSJsQnTJtsBBsQiSAViNAAQpWAAn3l6g");
	var mask_2_graphics_27 = new cjs.Graphics().p("AwYeDMAiIgvlQJ3HFB+L8QB+L+nFJ3QnFJ4r+B8QinAciiAAQo9AAntlhg");
	var mask_2_graphics_28 = new cjs.Graphics().p("Av2eaMAhDgwUQKBG2CPL5QCPL8m2KBQm3KBr7COQi8Aki1AAQonAAnilLg");
	var mask_2_graphics_29 = new cjs.Graphics().p("AvUeyMAf+gxEQKLGpCgL1QCgL4moKLQmoKLr4CfQjRAsjJAAQoPAAnYkzg");
	var mask_2_graphics_30 = new cjs.Graphics().p("AuxfIMAe4gxwQKUGZCwLzQCyL0maKTQmZKUr0CwQjlA2jcAAQn6AAnMkdg");
	var mask_2_graphics_31 = new cjs.Graphics().p("AuNfdMAdwgybQKcGLDCLuQDCLwmLKdQmKKcrwDBQj4BBjvAAQnkAAnAkJg");
	var mask_2_graphics_32 = new cjs.Graphics().p("AtpfyMAcngzFQKmF8DSLqQDTLrl8KlQl8KmrrDRQkLBMkCAAQnPAAmzj0g");
	var mask_2_graphics_33 = new cjs.Graphics().p("EgNEAgGMAbdgztQKuFsDjLlQDjLmlsKuQlsKurnDiQkdBYkWAAQm6AAmljgg");
	var mask_2_graphics_34 = new cjs.Graphics().p("EgMfAgZMAaTg0TQK1FdD0LfQD0LhldK2QldK2rhDyQkwBlkoAAQmlAAmYjNg");
	var mask_2_graphics_35 = new cjs.Graphics().p("EgL6AgsMAZIg05QK9FOEELaQEELblNK9QlNK+rcEDQlBByk7AAQmRABmKi7g");
	var mask_2_graphics_36 = new cjs.Graphics().p("EgLUAg9MAX8g1bQLEE+EULUQEVLVk9LEQk+LFrVETQlSCClPAAQl9AAl7iqg");
	var mask_2_graphics_37 = new cjs.Graphics().p("EgKtAhOMAWug19QLMEuEkLOQElLOkuLMQktLMrPEjQljCRlhAAQlrAAlqiZg");
	var mask_2_graphics_38 = new cjs.Graphics().p("EgKHAheMAVig2cQLSEdE0LHQE1LIkeLSQkeLSrIE0QlyChl1AAQlXAAlbiJg");
	var mask_2_graphics_39 = new cjs.Graphics().p("EgJfAhtMAUSg26QLZENFELAQFELBkNLYQkNLZrCFDQmBCymJAAQlEAAlJh6g");
	var mask_2_graphics_40 = new cjs.Graphics().p("EgI4Ah7MATEg3WQLeD9FUK5QFUK5j9LeQj9Leq6FTQmQDEmcAAQkxAAk5hsg");
	var mask_2_graphics_41 = new cjs.Graphics().p("EgIQAiJMAR0g3xQLkDtFjKwQFkKyjtLkQjsLjqyFjQmfDWmwAAQkeAAknheg");
	var mask_2_graphics_42 = new cjs.Graphics().p("EgHoAiVMAQlg4JQLoDcFyKpQF0KpjcLpQjcLoqqFyQmsDqnFAAQkLAAkVhSg");
	var mask_2_graphics_43 = new cjs.Graphics().p("EgG/AihMAPTg4gQLuDLGBKgQGDKhjMLuQjLLtqhGBQm5D+naAAQj4AAkChGg");
	var mask_2_graphics_44 = new cjs.Graphics().p("EgGXAirMAODg40QLyC6GQKYQGRKYi6LyQi6LxqZGQQnGETnvAAQjlAAjvg8g");
	var mask_2_graphics_45 = new cjs.Graphics().p("EgFuAi1MAMyg5HQL1CpGfKOQGgKPipL2QiqL2qPGeQnSEooFAAQjRAAjcgxg");
	var mask_2_graphics_46 = new cjs.Graphics().p("EgFEAi+MALfg5ZQL5CZGuKFQGuKFiYL6QiZL5qGGtQndE+obAAQi+AAjHgog");
	var mask_2_graphics_47 = new cjs.Graphics().p("EgEbAjHMAKNg5pQL8CIG8J7QG9J8iHL8QiIL8p8G8QnnFVozAAQirAAiygfg");
	var mask_2_graphics_48 = new cjs.Graphics().p("EgDxAjOMAI6g52QL/B2HKJxQHLJzh2L+Qh3L/pyHKQnxFtpLAAQiWAAidgYg");
	var mask_2_graphics_49 = new cjs.Graphics().p("EgDIAjUMAHog6CQMBBlHYJnQHZJohlMBQhlMBpoHYQn7GGpjAAQiCAAiIgSg");
	var mask_2_graphics_50 = new cjs.Graphics().p("EgCeAjZMAGUg6LQMEBTHlJcQHnJehUMDQhUMDpdHlQoDGgp9AAQhtAAhygNg");
	var mask_2_graphics_51 = new cjs.Graphics().p("EgB0AjeMAFBg6UQMFBDHzJQQH0JThDMEQhCMGpTHyQoLG5qYAAQhXAAhbgHg");
	var mask_2_graphics_52 = new cjs.Graphics().p("EgBKAjhMADtg6aQMHAxIAJGQIBJHgxMGQgyMGpHIAQoSHUq0AAQhBAAhEgEg");
	var mask_2_graphics_53 = new cjs.Graphics().p("EgAgAjjMACag6eQMHAgINI6QIOI8ggMGQggMIo8IMQoZHwrQAAQgsAAgrgCg");
	var mask_2_graphics_54 = new cjs.Graphics().p("EAAJAjlMABHg6hQMIAPIZIuQIbIvgPMIQgOMIowIZQofIMruAAIgpAAg");
	var mask_2_graphics_55 = new cjs.Graphics().p("AAm28QMIgDImIiQInIkADMHQACMIojImQoiInsIACg");
	var mask_2_graphics_56 = new cjs.Graphics().p("AgD27QMHgUIyIWQIzIWAUMHQAUMIoXIyQoVIzsIAUg");
	var mask_2_graphics_57 = new cjs.Graphics().p("Agt24QMHgmI9IJQI/IKAlMHQAmMHoLI9QoII/sIAlg");
	var mask_2_graphics_58 = new cjs.Graphics().p("AhX21QMGg2JJH8QJKH9A3MFQA2MGn9JJQn8JLsGA2g");
	var mask_2_graphics_59 = new cjs.Graphics().p("AiA2vQMDhIJUHuQJWHwBIMEQBIMFnwJUQnvJWsEBIg");
	var mask_2_graphics_60 = new cjs.Graphics().p("Aiq2pQMChZJfHhQJgHjBZMCQBaMDnjJfQnhJgsDBag");
	var mask_2_graphics_61 = new cjs.Graphics().p("AjU2gQMAhrJpHUQJrHUBrMAQBqMBnVJqQnTJrsBBqg");
	var mask_2_graphics_62 = new cjs.Graphics().p("Aj+2XQL+h8JzHGQJ2HHB7L9QB8L+nHJ0QnFJ2r/B7g");
	var mask_2_graphics_63 = new cjs.Graphics().p("Akn2MQL6iNJ+G4QJ/G4CNL6QCNL8m5J+Qm3J/r8CNg");
	var mask_2_graphics_64 = new cjs.Graphics().p("AlQ2AQL3ieKHGpQKJGrCeL2QCdL4mqKIQmpKJr4Ceg");
	var mask_2_graphics_65 = new cjs.Graphics().p("Al51yQLzivKQGaQKTGcCvLzQCuL0mcKRQmaKTr0Cug");
	var mask_2_graphics_66 = new cjs.Graphics().p("Ami1jQLvjAKaGMQKbGNC/LwQDALvmNKaQmLKbrxC/g");
	var mask_2_graphics_67 = new cjs.Graphics().p("AnL1TQLrjQKiF8QKkF+DRLsQDQLql+KjQl9KkrrDQg");
	var mask_2_graphics_68 = new cjs.Graphics().p("Anz1BQLmjhKqFtQKtFvDhLmQDgLmluKrQltKtrnDgg");
	var mask_2_graphics_69 = new cjs.Graphics().p("Aob0uQLgjyKzFeQK1FfDxLiQDxLglfK0QleK0rhDxg");
	var mask_2_graphics_70 = new cjs.Graphics().p("ApD0aQLbkCK6FPQK9FPEBLcQECLblQK7QlOK8rcEBg");
	var mask_2_graphics_71 = new cjs.Graphics().p("Apq0EQLVkSLBE+QLEFAESLWQESLVlALCQk/LDrWESg");
	var mask_2_graphics_72 = new cjs.Graphics().p("AqRztQLPkjLIEvQLLEwEiLQQEiLPkwLJQkvLKrQEig");
	var mask_2_graphics_73 = new cjs.Graphics().p("Aq4zVQLIkyLPEfQLSEfEyLJQEyLIkgLQQkfLRrJEyg");
	var mask_2_graphics_74 = new cjs.Graphics().p("Arey8QLClCLVEPQLXEQFCLCQFCLBkQLWQkPLWrBFCg");
	var mask_2_graphics_75 = new cjs.Graphics().p("AsDyhQK6lRLaD+QLdD/FSK7QFSK6kALbQj+Ldq6FSg");
	var mask_2_graphics_76 = new cjs.Graphics().p("AspyFQKzlhLgDuQLiDvFiKzQFhKyjwLhQjtLiqzFhg");
	var mask_2_graphics_77 = new cjs.Graphics().p("AtOxnQKrlxLlDeQLoDeFwKrQFxKqjfLmQjdLnqrFxg");
	var mask_2_graphics_78 = new cjs.Graphics().p("AtyxJQKil/LqDNQLtDNF/KiQGAKijOLrQjMLsqjGAg");
	var mask_2_graphics_79 = new cjs.Graphics().p("AuWwpQKamPLuC9QLxC8GPKaQGOKZi9LvQi8LxqZGOg");
	var mask_2_graphics_80 = new cjs.Graphics().p("Au5wIQKQmdLyCrQL1CsGeKQQGdKQisL0QirL0qQGdg");
	var mask_2_graphics_81 = new cjs.Graphics().p("AvcvmQKHmsL2CbQL4CbGtKHQGsKGicL3QiaL4qHGsg");
	var mask_2_graphics_82 = new cjs.Graphics().p("Av+vCQJ9m7L5CKQL8CKG6J9QG7J8iLL7QiJL7p9G6g");
	var mask_2_graphics_83 = new cjs.Graphics().p("AwgueQJznIL8B4QL/B5HIJzQHJJyh6L+Qh3L+p0HIg");
	var mask_2_graphics_84 = new cjs.Graphics().p("AxBt4QJpnXL+BoQMBBnHXJpQHWJohpMAQhmMAppHXg");
	var mask_2_graphics_85 = new cjs.Graphics().p("AxvtBQJZnqMBBPQMFBPHpJaQHqJYhQMDQhOMEpaHpg");
	var mask_2_graphics_86 = new cjs.Graphics().p("AydsIQJKn8MDA2QMHA3H8JJQH9JKg3MEQg2MGpKH9g");
	var mask_2_graphics_87 = new cjs.Graphics().p("AzJrMQI6oPMEAeQMIAeIPI5QIPI5gfMGQgdMHo5IPg");
	var mask_2_graphics_88 = new cjs.Graphics().p("AzzqPQIoogMFAFQMIAFIhIpQIhIogGMGQgFMIooIgg");
	var mask_2_graphics_89 = new cjs.Graphics().p("A0dpPQIXoyMGgTQMHgUIyIXQIyIXASMGQAVMHoXIyg");
	var mask_2_graphics_90 = new cjs.Graphics().p("A1GoNQIFpDMFgsQMGgsJDIFQJDIFArMFQAtMGoFJDg");
	var mask_2_graphics_91 = new cjs.Graphics().p("A1tnKQHypTMEhEQMEhFJTHyQJTHzBDMDQBGMEnyJTg");
	var mask_2_graphics_92 = new cjs.Graphics().p("A2TmFQHfpiMBhdQMChdJiHfQJjHfBcMBQBeMCnfJig");
	var mask_2_graphics_93 = new cjs.Graphics().p("A23k9QHLpyL+h1QL+h2JyHMQJxHLB1L+QB2L+nLJyg");
	var mask_2_graphics_94 = new cjs.Graphics().p("A3aj1QG3p/L6iOQL6iOKAG4QKAG3CML6QCPL6m3KAg");
	var mask_2_graphics_95 = new cjs.Graphics().p("A37iqQGjqOL0ilQL2imKNGjQKOGiCkL1QCnL1mjKOg");
	var mask_2_graphics_96 = new cjs.Graphics().p("A4bheQGOqbLvi9QLwi+KaGOQKbGNC8LwQC/LvmOKbg");
	var mask_2_graphics_97 = new cjs.Graphics().p("A45gRQF5qnLojVQLqjWKnF5QKmF4DVLpQDWLpl4Kng");
	var mask_2_graphics_98 = new cjs.Graphics().p("A5VA9QFjqyLhjsQLjjuKyFjQKyFjDtLhQDuLjljKyg");
	var mask_2_graphics_99 = new cjs.Graphics().p("A5vCNQFMq9LakEQLakFK+FNQK9FNEDLaQEGLalNK9g");
	var mask_2_graphics_100 = new cjs.Graphics().p("A6IDeQE2rHLRkbQLSkcLIE3QLHE2EbLRQEcLSk2LHg");
	var mask_2_graphics_101 = new cjs.Graphics().p("A6fEwQEfrQLIkyQLJkyLREfQLREgExLIQEzLIkfLRg");
	var mask_2_graphics_102 = new cjs.Graphics().p("A60GEQEIrZK+lJQLAlJLYEJQLaEIFIK+QFKK+kJLag");
	var mask_2_graphics_103 = new cjs.Graphics().p("A7HHYQDxrhKzleQK0lgLhDxQLiDyFeKzQFgKzjxLig");
	var mask_2_graphics_104 = new cjs.Graphics().p("A7ZItQDaroKnl0QKql1LoDZQLpDaF0KoQF2KojaLpg");
	var mask_2_graphics_105 = new cjs.Graphics().p("A7oKDQDCruKbmKQKdmLLvDCQLwDCGJKcQGLKbjCLwg");
	var mask_2_graphics_106 = new cjs.Graphics().p("A72LaQCqr0KPmfQKQmgL0CqQL2CqGeKPQGgKPiqL1g");
	var mask_2_graphics_107 = new cjs.Graphics().p("A8CMyQCSr7KBmyQKDm1L6CSQL6CSGzKBQG1KCiSL6g");
	var mask_2_graphics_108 = new cjs.Graphics().p("A8LOJQB5r+JznHQJ1nIL9B5QL/B6HHJzQHJJzh5L/g");
	var mask_2_graphics_109 = new cjs.Graphics().p("A8TPiQBhsDJknaQJmncMBBhQMCBhHbJlQHdJkhhMDg");
	var mask_2_graphics_110 = new cjs.Graphics().p("A8aQ7QBJsGJVntQJWnvMEBIQMFBJHvJVQHvJVhIMFg");
	var mask_2_graphics_111 = new cjs.Graphics().p("A8eSUQAwsHJFoAQJGoDMGAwQMHAwIBJGQIDJEgwMHg");
	var mask_2_graphics_112 = new cjs.Graphics().p("A8gTtQAXsII0oTQI2oUMHAXQMIAYIUI0QIUI1gXMIg");
	var mask_2_graphics_113 = new cjs.Graphics().p("Az/AWQIkomMIgBQMJgBIkIjQInIjABMJMg6jAAGQgBsJIjokg");
	var mask_2_graphics_114 = new cjs.Graphics().p("A0oAjQITo3MIgaQMHgaI2ITQI4IRAaMIMg6iAB9QgZsIIRo2g");
	var mask_2_graphics_115 = new cjs.Graphics().p("A1OAxQIApHMHgzQMGgyJHIAQJIH/AyMHMg6bADzQgzsHIApGg");
	var mask_2_graphics_116 = new cjs.Graphics().p("A1zBBQHupXMFhMQMEhLJXHuQJYHsBLMFMg6SAFqQhLsFHspWg");
	var mask_2_graphics_117 = new cjs.Graphics().p("A2UBSQHapnMDhkQMBhjJmHbQJnHYBkMCMg6FAHhQhjsDHZplg");
	var mask_2_graphics_118 = new cjs.Graphics().p("A2zBkQHGp1L/h8QL+h9J1HHQJ2HFB8L/Mg50AJWQh8r/HGp0g");
	var mask_2_graphics_119 = new cjs.Graphics().p("A3QB3QGyqDL7iUQL5iVKDGzQKEGwCVL7Mg5fALLQiVr6GyqDg");
	var mask_2_graphics_120 = new cjs.Graphics().p("A3qCMQGdqRL2isQL0itKRGeQKRGdCtL0Mg5HANBQisr2GdqQg");
	var mask_2_graphics_121 = new cjs.Graphics().p("A4CCiQGJqeLvjEQLvjFKdGJQKeGIDFLuMg4rAO0QjErvGIqdg");
	var mask_2_graphics_122 = new cjs.Graphics().p("A4XC5QFzqqLpjcQLojcKpFzQKrFyDcLoMg4LAQnQjcrpFzqpg");
	var mask_2_graphics_123 = new cjs.Graphics().p("A4qDRQFdq1Lij0QLhj0K1FeQK2FcDzLhMg3nASZQj0riFdq1g");
	var mask_2_graphics_124 = new cjs.Graphics().p("A46DrQFHrALakLQLYkLLAFHQLBFGELLZMg3AAUJQkMraFHq/g");
	var mask_2_graphics_125 = new cjs.Graphics().p("A5IEFQExrKLRkiQLQkiLJExQLLEvEiLQMg2VAV4QkirQEvrKg");
	var mask_2_graphics_126 = new cjs.Graphics().p("A5SEhQEZrULIk4QLGk5LTEaQLUEZE5LGMg1oAXmQk5rHEarTg");
	var mask_2_graphics_127 = new cjs.Graphics().p("A5bE9QEDrcK9lPQK8lQLcEEQLcEBFQK8Mg02AZSQlQq9ECrbg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_2_graphics_9,x:192.3,y:227.6}).wait(1).to({graphics:mask_2_graphics_10,x:192.3,y:227.6}).wait(1).to({graphics:mask_2_graphics_11,x:192.2,y:227.6}).wait(1).to({graphics:mask_2_graphics_12,x:192.2,y:227.6}).wait(1).to({graphics:mask_2_graphics_13,x:192.2,y:227.5}).wait(1).to({graphics:mask_2_graphics_14,x:192.1,y:227.5}).wait(1).to({graphics:mask_2_graphics_15,x:192.1,y:227.5}).wait(1).to({graphics:mask_2_graphics_16,x:192.1,y:227.5}).wait(1).to({graphics:mask_2_graphics_17,x:192,y:227.5}).wait(1).to({graphics:mask_2_graphics_18,x:192,y:227.4}).wait(1).to({graphics:mask_2_graphics_19,x:192,y:227.4}).wait(1).to({graphics:mask_2_graphics_20,x:192,y:227.4}).wait(1).to({graphics:mask_2_graphics_21,x:192,y:227.5}).wait(1).to({graphics:mask_2_graphics_22,x:192,y:227.5}).wait(1).to({graphics:mask_2_graphics_23,x:192,y:227.5}).wait(1).to({graphics:mask_2_graphics_24,x:192,y:227.5}).wait(1).to({graphics:mask_2_graphics_25,x:192,y:227.6}).wait(1).to({graphics:mask_2_graphics_26,x:192,y:227.6}).wait(1).to({graphics:mask_2_graphics_27,x:192,y:227.6}).wait(1).to({graphics:mask_2_graphics_28,x:192.1,y:227.7}).wait(1).to({graphics:mask_2_graphics_29,x:192.1,y:227.7}).wait(1).to({graphics:mask_2_graphics_30,x:192.1,y:227.7}).wait(1).to({graphics:mask_2_graphics_31,x:192.1,y:227.8}).wait(1).to({graphics:mask_2_graphics_32,x:192.1,y:227.8}).wait(1).to({graphics:mask_2_graphics_33,x:192.1,y:227.8}).wait(1).to({graphics:mask_2_graphics_34,x:192.1,y:227.8}).wait(1).to({graphics:mask_2_graphics_35,x:192.1,y:227.8}).wait(1).to({graphics:mask_2_graphics_36,x:192.1,y:227.9}).wait(1).to({graphics:mask_2_graphics_37,x:192.1,y:227.9}).wait(1).to({graphics:mask_2_graphics_38,x:192.1,y:227.9}).wait(1).to({graphics:mask_2_graphics_39,x:192.1,y:227.9}).wait(1).to({graphics:mask_2_graphics_40,x:192.1,y:227.9}).wait(1).to({graphics:mask_2_graphics_41,x:192.1,y:227.9}).wait(1).to({graphics:mask_2_graphics_42,x:192.1,y:227.9}).wait(1).to({graphics:mask_2_graphics_43,x:192,y:227.9}).wait(1).to({graphics:mask_2_graphics_44,x:192,y:227.9}).wait(1).to({graphics:mask_2_graphics_45,x:192,y:227.8}).wait(1).to({graphics:mask_2_graphics_46,x:192,y:227.8}).wait(1).to({graphics:mask_2_graphics_47,x:191.9,y:227.8}).wait(1).to({graphics:mask_2_graphics_48,x:191.9,y:227.8}).wait(1).to({graphics:mask_2_graphics_49,x:191.9,y:227.8}).wait(1).to({graphics:mask_2_graphics_50,x:191.8,y:227.8}).wait(1).to({graphics:mask_2_graphics_51,x:191.8,y:227.7}).wait(1).to({graphics:mask_2_graphics_52,x:191.8,y:227.7}).wait(1).to({graphics:mask_2_graphics_53,x:191.8,y:227.7}).wait(1).to({graphics:mask_2_graphics_54,x:191.8,y:227.7}).wait(1).to({graphics:mask_2_graphics_55,x:191.8,y:227.7}).wait(1).to({graphics:mask_2_graphics_56,x:191.8,y:227.7}).wait(1).to({graphics:mask_2_graphics_57,x:191.8,y:227.6}).wait(1).to({graphics:mask_2_graphics_58,x:191.8,y:227.5}).wait(1).to({graphics:mask_2_graphics_59,x:191.8,y:227.4}).wait(1).to({graphics:mask_2_graphics_60,x:191.8,y:227.2}).wait(1).to({graphics:mask_2_graphics_61,x:191.9,y:226.9}).wait(1).to({graphics:mask_2_graphics_62,x:191.9,y:226.6}).wait(1).to({graphics:mask_2_graphics_63,x:191.9,y:226.3}).wait(1).to({graphics:mask_2_graphics_64,x:191.9,y:225.9}).wait(1).to({graphics:mask_2_graphics_65,x:192,y:225.4}).wait(1).to({graphics:mask_2_graphics_66,x:192,y:224.9}).wait(1).to({graphics:mask_2_graphics_67,x:192,y:224.4}).wait(1).to({graphics:mask_2_graphics_68,x:192,y:223.8}).wait(1).to({graphics:mask_2_graphics_69,x:192,y:223.2}).wait(1).to({graphics:mask_2_graphics_70,x:192,y:222.5}).wait(1).to({graphics:mask_2_graphics_71,x:192,y:221.8}).wait(1).to({graphics:mask_2_graphics_72,x:192,y:221.1}).wait(1).to({graphics:mask_2_graphics_73,x:192,y:220.3}).wait(1).to({graphics:mask_2_graphics_74,x:192,y:219.4}).wait(1).to({graphics:mask_2_graphics_75,x:192,y:218.6}).wait(1).to({graphics:mask_2_graphics_76,x:192,y:217.6}).wait(1).to({graphics:mask_2_graphics_77,x:192,y:216.7}).wait(1).to({graphics:mask_2_graphics_78,x:192,y:215.7}).wait(1).to({graphics:mask_2_graphics_79,x:192,y:214.6}).wait(1).to({graphics:mask_2_graphics_80,x:192,y:213.5}).wait(1).to({graphics:mask_2_graphics_81,x:191.9,y:212.4}).wait(1).to({graphics:mask_2_graphics_82,x:191.9,y:211.2}).wait(1).to({graphics:mask_2_graphics_83,x:191.9,y:210}).wait(1).to({graphics:mask_2_graphics_84,x:191.8,y:208.8}).wait(1).to({graphics:mask_2_graphics_85,x:191.8,y:206.9}).wait(1).to({graphics:mask_2_graphics_86,x:191.8,y:205.1}).wait(1).to({graphics:mask_2_graphics_87,x:191.8,y:203.1}).wait(1).to({graphics:mask_2_graphics_88,x:191.8,y:201}).wait(1).to({graphics:mask_2_graphics_89,x:191.8,y:198.9}).wait(1).to({graphics:mask_2_graphics_90,x:191.8,y:196.8}).wait(1).to({graphics:mask_2_graphics_91,x:191.9,y:194.5}).wait(1).to({graphics:mask_2_graphics_92,x:191.9,y:192.2}).wait(1).to({graphics:mask_2_graphics_93,x:192,y:189.9}).wait(1).to({graphics:mask_2_graphics_94,x:192,y:187.5}).wait(1).to({graphics:mask_2_graphics_95,x:192.1,y:185}).wait(1).to({graphics:mask_2_graphics_96,x:192.1,y:182.5}).wait(1).to({graphics:mask_2_graphics_97,x:192.2,y:179.9}).wait(1).to({graphics:mask_2_graphics_98,x:192.2,y:177.3}).wait(1).to({graphics:mask_2_graphics_99,x:192.2,y:174.6}).wait(1).to({graphics:mask_2_graphics_100,x:192.3,y:171.9}).wait(1).to({graphics:mask_2_graphics_101,x:192.3,y:169.2}).wait(1).to({graphics:mask_2_graphics_102,x:192.3,y:166.4}).wait(1).to({graphics:mask_2_graphics_103,x:192.3,y:163.6}).wait(1).to({graphics:mask_2_graphics_104,x:192.3,y:160.8}).wait(1).to({graphics:mask_2_graphics_105,x:192.3,y:157.9}).wait(1).to({graphics:mask_2_graphics_106,x:192.3,y:155}).wait(1).to({graphics:mask_2_graphics_107,x:192.3,y:152.1}).wait(1).to({graphics:mask_2_graphics_108,x:192.2,y:149.2}).wait(1).to({graphics:mask_2_graphics_109,x:192.2,y:146.3}).wait(1).to({graphics:mask_2_graphics_110,x:192.2,y:143.3}).wait(1).to({graphics:mask_2_graphics_111,x:192.2,y:140.3}).wait(1).to({graphics:mask_2_graphics_112,x:192.2,y:137.4}).wait(1).to({graphics:mask_2_graphics_113,x:192.2,y:134.7}).wait(1).to({graphics:mask_2_graphics_114,x:192.2,y:137.7}).wait(1).to({graphics:mask_2_graphics_115,x:192,y:140.6}).wait(1).to({graphics:mask_2_graphics_116,x:191.8,y:143.6}).wait(1).to({graphics:mask_2_graphics_117,x:191.5,y:146.6}).wait(1).to({graphics:mask_2_graphics_118,x:191.1,y:149.5}).wait(1).to({graphics:mask_2_graphics_119,x:190.6,y:152.4}).wait(1).to({graphics:mask_2_graphics_120,x:190,y:155.4}).wait(1).to({graphics:mask_2_graphics_121,x:189.3,y:158.2}).wait(1).to({graphics:mask_2_graphics_122,x:188.5,y:161.1}).wait(1).to({graphics:mask_2_graphics_123,x:187.6,y:164}).wait(1).to({graphics:mask_2_graphics_124,x:186.7,y:166.8}).wait(1).to({graphics:mask_2_graphics_125,x:185.6,y:169.5}).wait(1).to({graphics:mask_2_graphics_126,x:184.5,y:172.3}).wait(1).to({graphics:mask_2_graphics_127,x:183.3,y:174.9}).wait(273));

	// Guide: Honey bee
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(20,1,1).p("AMXjRQk4n5oFDLQk/B9i7EhQjNE5goFi");
	this.shape_3.setTransform(207,235);
	this.shape_3._off = true;

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(9).to({_off:false},0).wait(391));

	// Letter
	this.instance_2 = new lib.c("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(275,275);
	this.instance_2.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(400));

	// Background
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_4.setTransform(275,275,3.373,2.543);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_5.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(400));

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