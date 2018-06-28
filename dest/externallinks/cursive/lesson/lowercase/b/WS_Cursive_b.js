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


(lib.b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Av4Y4QhShVAAiVQAAjNChlDIg6AYQiKAAAAiQQAAhJBnhmIHGmjILn3nQA1hqB4hXQB+hYBvAAQCbAABqCPQBgCEAAChQAACBieDlQiHC+jwECQkxFFm8GNImXM4Qg+BvAAB1QAAAvAhAAQCsAACfh7QB+hhBviqQDbk8D5nJIBeikQBGhdBMAAQBVAAAaB3IAPECIAABGQAAEoBnAAQBSAACviqIBnApQA1AnAAAjIgSAgIlFDWQiBBDhbAAQh1AAg7hsQgxhYgDieQikE/icDcQiXDki8CHQklChivAAQiWAAhShVgAGjzvImSMxIHVoBQCnjKAAhJQAAibhMAAQhVAAhJB+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113.3,-167.7,226.8,335.5);


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
	this.instance.setTransform(-27.7,19.3,1,1,-113.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-148.2,guide:{path:[-27.6,19.3,14.4,6.9,32.4,-25.8]}},74).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AiggCIA+gvIBvCTIg9Aug");
	var mask_graphics_1 = new cjs.Graphics().p("AhagvIBGg0IBvCTIhGA0g");
	var mask_graphics_2 = new cjs.Graphics().p("AhegsIBOg6IBuCSIhMA7g");
	var mask_graphics_3 = new cjs.Graphics().p("AhhgpIBUhAIBvCTIhUBAg");
	var mask_graphics_4 = new cjs.Graphics().p("AhlgmIBchGIBvCTIhcBGg");
	var mask_graphics_5 = new cjs.Graphics().p("AhogjIBjhLIBuCSIhjBLg");
	var mask_graphics_6 = new cjs.Graphics().p("AhsggIBqhRIBvCSIhqBRg");
	var mask_graphics_7 = new cjs.Graphics().p("AhwgdIBxhXIBwCSIhxBXg");
	var mask_graphics_8 = new cjs.Graphics().p("Ah0gaIB5hdIBwCTIh5Bcg");
	var mask_graphics_9 = new cjs.Graphics().p("Ah4gYICBhiIBwCTIiBBig");
	var mask_graphics_10 = new cjs.Graphics().p("Ah7gVICHhoIBwCTIiIBog");
	var mask_graphics_11 = new cjs.Graphics().p("Ah/gSICPhuIBwCTIiPBug");
	var mask_graphics_12 = new cjs.Graphics().p("AiDgPICXhzIBwCSIiXBzg");
	var mask_graphics_13 = new cjs.Graphics().p("AiHgNICfh4IBwCSIifB5g");
	var mask_graphics_14 = new cjs.Graphics().p("AiKgKIClh+IBwCSIilB/g");
	var mask_graphics_15 = new cjs.Graphics().p("AiOgHICtiEIBwCTIitCEg");
	var mask_graphics_16 = new cjs.Graphics().p("AiSgEIC1iKIBwCTIi1CKg");
	var mask_graphics_17 = new cjs.Graphics().p("AiWgBIC8iPIBxCSIi8CPg");
	var mask_graphics_18 = new cjs.Graphics().p("AiZABIDDiVIBwCUIjDCUg");
	var mask_graphics_19 = new cjs.Graphics().p("AidAEIDLiaIBwCUIjLCZg");
	var mask_graphics_20 = new cjs.Graphics().p("AihAGIDTifIBwCUIjTCfg");
	var mask_graphics_21 = new cjs.Graphics().p("AilAJIDbilIBvCUIjZClg");
	var mask_graphics_22 = new cjs.Graphics().p("AioAMIDhirIBwCUIjhCqg");
	var mask_graphics_23 = new cjs.Graphics().p("AisAPIDpixIBwCUIjpCwg");
	var mask_graphics_24 = new cjs.Graphics().p("AiwASIDxi2IBwCTIjxC2g");
	var mask_graphics_25 = new cjs.Graphics().p("AizAVID4i8IBvCTIj4C8g");
	var mask_graphics_26 = new cjs.Graphics().p("Ai3AXID/jBIBwCUIj/DBg");
	var mask_graphics_27 = new cjs.Graphics().p("Ai7AaIEHjHIBwCUIkHDHg");
	var mask_graphics_28 = new cjs.Graphics().p("Ai/AdIEPjMIBwCTIkPDNg");
	var mask_graphics_29 = new cjs.Graphics().p("AjCAgIEWjTIBvCUIkWDTg");
	var mask_graphics_30 = new cjs.Graphics().p("AjGAjIEdjYIBwCTIkdDYg");
	var mask_graphics_31 = new cjs.Graphics().p("AjKAmIEljeIBwCTIklDeg");
	var mask_graphics_32 = new cjs.Graphics().p("AjOAoIEtjjIBwCTIktDkg");
	var mask_graphics_33 = new cjs.Graphics().p("AjRArIEzjpIBwCTIkzDqg");
	var mask_graphics_34 = new cjs.Graphics().p("AjVAuIE7jvIBwCUIk7Dug");
	var mask_graphics_35 = new cjs.Graphics().p("AjZAxIFDj0IBwCTIlDD0g");
	var mask_graphics_36 = new cjs.Graphics().p("AjdA0IFKj6IBxCTIlKD6g");
	var mask_graphics_37 = new cjs.Graphics().p("AjhA2IFSj/IBxCTIlSEAg");
	var mask_graphics_38 = new cjs.Graphics().p("AjkA5IFZkFIBwCUIlZEFg");
	var mask_graphics_39 = new cjs.Graphics().p("AjoA8IFhkLIBwCUIlhELg");
	var mask_graphics_40 = new cjs.Graphics().p("AjsA/IFpkRIBwCUIlpERg");
	var mask_graphics_41 = new cjs.Graphics().p("AjwBCIFwkWIBxCTIlwEWg");
	var mask_graphics_42 = new cjs.Graphics().p("AjzBFIF3kcIBwCTIl3Ecg");
	var mask_graphics_43 = new cjs.Graphics().p("Aj3BIIF/kiIBwCTIl/Eig");
	var mask_graphics_44 = new cjs.Graphics().p("Aj7BLIGGkoIBxCTImHEog");
	var mask_graphics_45 = new cjs.Graphics().p("Aj+BNIGNktIBwCUImNEtg");
	var mask_graphics_46 = new cjs.Graphics().p("AkCBQIGVkzIBwCUImVEzg");
	var mask_graphics_47 = new cjs.Graphics().p("AkGBTIGdk4IBwCTImdE5g");
	var mask_graphics_48 = new cjs.Graphics().p("AkKBWIGlk+IBvCTImkE/g");
	var mask_graphics_49 = new cjs.Graphics().p("AkNBYIGrlDIBwCUImrFDg");
	var mask_graphics_50 = new cjs.Graphics().p("AkRBbIGzlJIBwCTImzFKg");
	var mask_graphics_51 = new cjs.Graphics().p("AkUBeIG6lPIBvCUIm6FPg");
	var mask_graphics_52 = new cjs.Graphics().p("AkYBhIHClVIBvCUInCFVg");
	var mask_graphics_53 = new cjs.Graphics().p("AkcBkIHJlbIBwCUInJFag");
	var mask_graphics_54 = new cjs.Graphics().p("AkgBnIHRlgIBwCTInRFgg");
	var mask_graphics_55 = new cjs.Graphics().p("AkkBqIHZlmIBwCTInZFmg");
	var mask_graphics_56 = new cjs.Graphics().p("AknBsIHflrIBwCUIngFrg");
	var mask_graphics_57 = new cjs.Graphics().p("AkrBvIHnlxIBwCUInnFxg");
	var mask_graphics_58 = new cjs.Graphics().p("AkvByIHvl2IBwCTInvF3g");
	var mask_graphics_59 = new cjs.Graphics().p("AkzB1IH3l8IBwCTIn3F9g");
	var mask_graphics_60 = new cjs.Graphics().p("Ak2B4IH9mCIBxCTIn/GCg");
	var mask_graphics_61 = new cjs.Graphics().p("Ak6B7IIFmIIBwCTIoFGIg");
	var mask_graphics_62 = new cjs.Graphics().p("Ak+B+IINmOIBwCUIoNGNg");
	var mask_graphics_63 = new cjs.Graphics().p("AlCCAIIUmTIBxCUIoUGTg");
	var mask_graphics_64 = new cjs.Graphics().p("AlFCDIIbmZIBwCUIobGYg");
	var mask_graphics_65 = new cjs.Graphics().p("AlJCGIIjmeIBwCTIojGeg");
	var mask_graphics_66 = new cjs.Graphics().p("AlNCJIIrmkIBwCTIorGkg");
	var mask_graphics_67 = new cjs.Graphics().p("AlRCMIIzmqIBwCTIozGqg");
	var mask_graphics_68 = new cjs.Graphics().p("AlVCOII7mvIBwCUIo6Gvg");
	var mask_graphics_69 = new cjs.Graphics().p("AlYCRIJBm1IBwCUIpBG1g");
	var mask_graphics_70 = new cjs.Graphics().p("AlcCUIJJm7IBwCUIpJG7g");
	var mask_graphics_71 = new cjs.Graphics().p("AlfCXIJQnBIBwCUIpRHBg");
	var mask_graphics_72 = new cjs.Graphics().p("AljCaIJXnGIBwCTIpXHGg");
	var mask_graphics_73 = new cjs.Graphics().p("AlnCdIJfnMIBwCTIpfHMg");
	var mask_graphics_74 = new cjs.Graphics().p("AlrCgIJnnSIBwCTIpnHSg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-16.1,y:14.4}).wait(1).to({graphics:mask_graphics_1,x:-23.1,y:18.9}).wait(1).to({graphics:mask_graphics_2,x:-22.7,y:18.6}).wait(1).to({graphics:mask_graphics_3,x:-22.4,y:18.3}).wait(1).to({graphics:mask_graphics_4,x:-22,y:18}).wait(1).to({graphics:mask_graphics_5,x:-21.6,y:17.7}).wait(1).to({graphics:mask_graphics_6,x:-21.2,y:17.4}).wait(1).to({graphics:mask_graphics_7,x:-20.8,y:17.2}).wait(1).to({graphics:mask_graphics_8,x:-20.4,y:16.9}).wait(1).to({graphics:mask_graphics_9,x:-20.1,y:16.6}).wait(1).to({graphics:mask_graphics_10,x:-19.7,y:16.3}).wait(1).to({graphics:mask_graphics_11,x:-19.3,y:16}).wait(1).to({graphics:mask_graphics_12,x:-18.9,y:15.7}).wait(1).to({graphics:mask_graphics_13,x:-18.6,y:15.4}).wait(1).to({graphics:mask_graphics_14,x:-18.2,y:15.1}).wait(1).to({graphics:mask_graphics_15,x:-17.8,y:14.8}).wait(1).to({graphics:mask_graphics_16,x:-17.4,y:14.5}).wait(1).to({graphics:mask_graphics_17,x:-17,y:14.3}).wait(1).to({graphics:mask_graphics_18,x:-16.7,y:14}).wait(1).to({graphics:mask_graphics_19,x:-16.3,y:13.7}).wait(1).to({graphics:mask_graphics_20,x:-15.9,y:13.4}).wait(1).to({graphics:mask_graphics_21,x:-15.5,y:13.1}).wait(1).to({graphics:mask_graphics_22,x:-15.2,y:12.8}).wait(1).to({graphics:mask_graphics_23,x:-14.8,y:12.5}).wait(1).to({graphics:mask_graphics_24,x:-14.4,y:12.2}).wait(1).to({graphics:mask_graphics_25,x:-14,y:11.9}).wait(1).to({graphics:mask_graphics_26,x:-13.6,y:11.6}).wait(1).to({graphics:mask_graphics_27,x:-13.2,y:11.3}).wait(1).to({graphics:mask_graphics_28,x:-12.9,y:11.1}).wait(1).to({graphics:mask_graphics_29,x:-12.5,y:10.8}).wait(1).to({graphics:mask_graphics_30,x:-12.1,y:10.5}).wait(1).to({graphics:mask_graphics_31,x:-11.7,y:10.2}).wait(1).to({graphics:mask_graphics_32,x:-11.4,y:9.9}).wait(1).to({graphics:mask_graphics_33,x:-11,y:9.6}).wait(1).to({graphics:mask_graphics_34,x:-10.6,y:9.3}).wait(1).to({graphics:mask_graphics_35,x:-10.2,y:9}).wait(1).to({graphics:mask_graphics_36,x:-9.8,y:8.7}).wait(1).to({graphics:mask_graphics_37,x:-9.4,y:8.5}).wait(1).to({graphics:mask_graphics_38,x:-9.1,y:8.2}).wait(1).to({graphics:mask_graphics_39,x:-8.7,y:7.9}).wait(1).to({graphics:mask_graphics_40,x:-8.3,y:7.6}).wait(1).to({graphics:mask_graphics_41,x:-7.9,y:7.3}).wait(1).to({graphics:mask_graphics_42,x:-7.5,y:7}).wait(1).to({graphics:mask_graphics_43,x:-7.2,y:6.7}).wait(1).to({graphics:mask_graphics_44,x:-6.8,y:6.4}).wait(1).to({graphics:mask_graphics_45,x:-6.4,y:6.1}).wait(1).to({graphics:mask_graphics_46,x:-6,y:5.8}).wait(1).to({graphics:mask_graphics_47,x:-5.7,y:5.6}).wait(1).to({graphics:mask_graphics_48,x:-5.3,y:5.3}).wait(1).to({graphics:mask_graphics_49,x:-4.9,y:5}).wait(1).to({graphics:mask_graphics_50,x:-4.5,y:4.7}).wait(1).to({graphics:mask_graphics_51,x:-4.1,y:4.4}).wait(1).to({graphics:mask_graphics_52,x:-3.7,y:4.1}).wait(1).to({graphics:mask_graphics_53,x:-3.4,y:3.8}).wait(1).to({graphics:mask_graphics_54,x:-3,y:3.5}).wait(1).to({graphics:mask_graphics_55,x:-2.6,y:3.2}).wait(1).to({graphics:mask_graphics_56,x:-2.2,y:2.9}).wait(1).to({graphics:mask_graphics_57,x:-1.9,y:2.6}).wait(1).to({graphics:mask_graphics_58,x:-1.5,y:2.4}).wait(1).to({graphics:mask_graphics_59,x:-1.1,y:2.1}).wait(1).to({graphics:mask_graphics_60,x:-0.7,y:1.8}).wait(1).to({graphics:mask_graphics_61,x:-0.3,y:1.5}).wait(1).to({graphics:mask_graphics_62,x:0,y:1.2}).wait(1).to({graphics:mask_graphics_63,x:0.4,y:0.9}).wait(1).to({graphics:mask_graphics_64,x:0.8,y:0.6}).wait(1).to({graphics:mask_graphics_65,x:1.2,y:0.3}).wait(1).to({graphics:mask_graphics_66,x:1.5,y:0}).wait(1).to({graphics:mask_graphics_67,x:1.9,y:-0.3}).wait(1).to({graphics:mask_graphics_68,x:2.3,y:-0.5}).wait(1).to({graphics:mask_graphics_69,x:2.7,y:-0.8}).wait(1).to({graphics:mask_graphics_70,x:3.1,y:-1.1}).wait(1).to({graphics:mask_graphics_71,x:3.5,y:-1.4}).wait(1).to({graphics:mask_graphics_72,x:3.8,y:-1.7}).wait(1).to({graphics:mask_graphics_73,x:4.2,y:-2}).wait(1).to({graphics:mask_graphics_74,x:4.6,y:-2.3}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AjtEeQBklxF3jJ");
	this.shape.setTransform(3.5,-4.5,1,1,-167.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.6,9.5,19.8,21);


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
(lib.WS_Cursive_b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_585 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(585).call(this.frame_585).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(178.9,342,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[179,342.1,183.9,338.6,191.3,332.2,200.2,324.9,208.5,316.8,216.5,308.9,224.5,301.1,233.2,292.7,241.9,284.4,250.4,276.3,258.6,267.9,261.4,265,264.1,262.2,296.2,229.8,335.3,187.3,374.4,144.9,342.9,122.4]}},138).wait(15).to({x:345.9,y:126.5},0).to({guide:{path:[346.1,126.5,345.4,125.3,343.9,124.1,342.3,122.7,341.4,122.5,317.5,113.1,296.3,155.2,275.1,197.2,251.5,245.7,227.9,294.4,225.1,299.7,222.3,305.1,214.1,322.3,205.8,339.4,198.4,353.3,191,367.2,184.8,383.1,178.5,399.1,179.1,407.8,179.7,416.5,182.5,422.4,185.2,428.4,197.4,428.5,209.6,428.5,234.1,414.1,258.6,399.7,280.4,357.1,302,314.9,321.7,289.4]}},240).wait(16).to({startPosition:0},0).to({guide:{path:[322.2,289.5,320.1,330,325.2,347,330.3,364,342.6,357.5,367.1,344.6,372.1,343.6]}},92).wait(16).to({x:371,y:342},0).to({guide:{path:[371,342,391.1,284.3,446.7,259.1,515.6,228.1,543.5,294.6,570.4,358.5,624.9,311.2,633.7,303.5,638.7,292.8]}},59).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(343,123.1,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},138).wait(15).to({_off:false,x:322,y:290.1},0).to({_off:true},240).wait(16).to({_off:false,x:373,y:342.1},0).to({_off:true},92).wait(76));

	// Layer 18
	this.instance_1 = new lib.ar1("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(368.2,270.2,1,1,75.9,0,0,-0.8,0.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(418).to({_off:false},0).wait(168));

	// Layer 15 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_475 = new cjs.Graphics().p("AUAeeIAApEIFoAAIAAJEg");
	var mask_graphics_476 = new cjs.Graphics().p("Ai6EiIAApDIF1AAIAAJDg");
	var mask_graphics_477 = new cjs.Graphics().p("AjBEiIAApDIGDAAIAAJDg");
	var mask_graphics_478 = new cjs.Graphics().p("AjIEiIAApDIGRAAIAAJDg");
	var mask_graphics_479 = new cjs.Graphics().p("AjOEiIAApDIGdAAIAAJDg");
	var mask_graphics_480 = new cjs.Graphics().p("AjVEiIAApDIGrAAIAAJDg");
	var mask_graphics_481 = new cjs.Graphics().p("AjcEiIAApDIG5AAIAAJDg");
	var mask_graphics_482 = new cjs.Graphics().p("AjjEiIAApDIHHAAIAAJDg");
	var mask_graphics_483 = new cjs.Graphics().p("AjqEiIAApDIHVAAIAAJDg");
	var mask_graphics_484 = new cjs.Graphics().p("AjwEiIAApDIHhAAIAAJDg");
	var mask_graphics_485 = new cjs.Graphics().p("Aj3EiIAApDIHvAAIAAJDg");
	var mask_graphics_486 = new cjs.Graphics().p("Aj+EiIAApDIH9AAIAAJDg");
	var mask_graphics_487 = new cjs.Graphics().p("AkFEiIAApDIILAAIAAJDg");
	var mask_graphics_488 = new cjs.Graphics().p("AkMEiIAApDIIZAAIAAJDg");
	var mask_graphics_489 = new cjs.Graphics().p("AkTEiIAApDIInAAIAAJDg");
	var mask_graphics_490 = new cjs.Graphics().p("AkZEiIAApDIIzAAIAAJDg");
	var mask_graphics_491 = new cjs.Graphics().p("AkgEiIAApDIJBAAIAAJDg");
	var mask_graphics_492 = new cjs.Graphics().p("AknEiIAApDIJPAAIAAJDg");
	var mask_graphics_493 = new cjs.Graphics().p("AkuEiIAApDIJdAAIAAJDg");
	var mask_graphics_494 = new cjs.Graphics().p("Ak1EiIAApDIJqAAIAAJDg");
	var mask_graphics_495 = new cjs.Graphics().p("Ak7EiIAApDIJ3AAIAAJDg");
	var mask_graphics_496 = new cjs.Graphics().p("AlCEiIAApDIKFAAIAAJDg");
	var mask_graphics_497 = new cjs.Graphics().p("AlJEiIAApDIKTAAIAAJDg");
	var mask_graphics_498 = new cjs.Graphics().p("AlQEiIAApDIKhAAIAAJDg");
	var mask_graphics_499 = new cjs.Graphics().p("AlXEiIAApDIKvAAIAAJDg");
	var mask_graphics_500 = new cjs.Graphics().p("AleEiIAApDIK8AAIAAJDg");
	var mask_graphics_501 = new cjs.Graphics().p("AlkEiIAApDILJAAIAAJDg");
	var mask_graphics_502 = new cjs.Graphics().p("AlrEiIAApDILXAAIAAJDg");
	var mask_graphics_503 = new cjs.Graphics().p("AlyEiIAApDILlAAIAAJDg");
	var mask_graphics_504 = new cjs.Graphics().p("Al5EiIAApDILzAAIAAJDg");
	var mask_graphics_505 = new cjs.Graphics().p("AmAEiIAApDIMBAAIAAJDg");
	var mask_graphics_506 = new cjs.Graphics().p("AmGEiIAApDIMNAAIAAJDg");
	var mask_graphics_507 = new cjs.Graphics().p("AmNEiIAApDIMbAAIAAJDg");
	var mask_graphics_508 = new cjs.Graphics().p("AQfeeIAApEIMqAAIAAJEg");
	var mask_graphics_509 = new cjs.Graphics().p("AmwEiIAApDINhAAIAAJDg");
	var mask_graphics_510 = new cjs.Graphics().p("APpeeIAApEIOXAAIAAJEg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(475).to({graphics:mask_graphics_475,x:164,y:195}).wait(1).to({graphics:mask_graphics_476,x:310.7,y:361}).wait(1).to({graphics:mask_graphics_477,x:311.4,y:361}).wait(1).to({graphics:mask_graphics_478,x:312.1,y:361}).wait(1).to({graphics:mask_graphics_479,x:312.7,y:361}).wait(1).to({graphics:mask_graphics_480,x:313.4,y:361}).wait(1).to({graphics:mask_graphics_481,x:314.1,y:361}).wait(1).to({graphics:mask_graphics_482,x:314.8,y:361}).wait(1).to({graphics:mask_graphics_483,x:315.5,y:361}).wait(1).to({graphics:mask_graphics_484,x:316.1,y:361}).wait(1).to({graphics:mask_graphics_485,x:316.8,y:361}).wait(1).to({graphics:mask_graphics_486,x:317.5,y:361}).wait(1).to({graphics:mask_graphics_487,x:318.2,y:361}).wait(1).to({graphics:mask_graphics_488,x:318.9,y:361}).wait(1).to({graphics:mask_graphics_489,x:319.6,y:361}).wait(1).to({graphics:mask_graphics_490,x:320.2,y:361}).wait(1).to({graphics:mask_graphics_491,x:320.9,y:361}).wait(1).to({graphics:mask_graphics_492,x:321.6,y:361}).wait(1).to({graphics:mask_graphics_493,x:322.3,y:361}).wait(1).to({graphics:mask_graphics_494,x:323,y:361}).wait(1).to({graphics:mask_graphics_495,x:323.6,y:361}).wait(1).to({graphics:mask_graphics_496,x:324.3,y:361}).wait(1).to({graphics:mask_graphics_497,x:325,y:361}).wait(1).to({graphics:mask_graphics_498,x:325.7,y:361}).wait(1).to({graphics:mask_graphics_499,x:326.4,y:361}).wait(1).to({graphics:mask_graphics_500,x:327.1,y:361}).wait(1).to({graphics:mask_graphics_501,x:327.7,y:361}).wait(1).to({graphics:mask_graphics_502,x:328.4,y:361}).wait(1).to({graphics:mask_graphics_503,x:329.1,y:361}).wait(1).to({graphics:mask_graphics_504,x:329.8,y:361}).wait(1).to({graphics:mask_graphics_505,x:330.5,y:361}).wait(1).to({graphics:mask_graphics_506,x:331.1,y:361}).wait(1).to({graphics:mask_graphics_507,x:331.8,y:361}).wait(1).to({graphics:mask_graphics_508,x:186.5,y:195}).wait(1).to({graphics:mask_graphics_509,x:335.3,y:361}).wait(1).to({graphics:mask_graphics_510,x:192,y:195}).wait(76));

	// Layer 14
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(20,1,1).p("Aj+lfQgDMcDMhpQDLhpBpgv");
	this.shape_1.setTransform(347.5,324.2);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(475).to({_off:false},0).wait(111));

	// Layer 13 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_418 = new cjs.Graphics().p("AsEWkQAAsJIlokQIlolMJABQMJAAIkIlQIlIkAAMJg");
	var mask_1_graphics_419 = new cjs.Graphics().p("AjuB8QIeorMJgJQMJgIIqIeQIsIeAJMJMg6lAArQgIsJIeorg");
	var mask_1_graphics_420 = new cjs.Graphics().p("Aj+CBQIYoxMJgSQMJgSIxIYQIyIXASMJMg6kABXQgSsJIXoxg");
	var mask_1_graphics_421 = new cjs.Graphics().p("AkMCGQIRo3MIgbQMJgcI3ISQI5IQAbMJMg6jACDQgbsJIRo3g");
	var mask_1_graphics_422 = new cjs.Graphics().p("AkbCMQILo+MIglQMIgkI9ILQI/IKAkMIMg6hACvQgksIIKo9g");
	var mask_1_graphics_423 = new cjs.Graphics().p("AkpCRQIEpEMHgtQMIguJDIFQJFICAuMIMg6fADbQgtsIIDpDg");
	var mask_1_graphics_424 = new cjs.Graphics().p("Ak3CXQH9pKMHg3QMHg2JKH9QJKH8A3MHMg6cAEHQg2sHH8pJg");
	var mask_1_graphics_425 = new cjs.Graphics().p("AlECdQH2pQMGhAQMGhAJQH3QJRH0A/MHMg6YAEzQhAsGH2pPg");
	var mask_1_graphics_426 = new cjs.Graphics().p("AlRCjQHupWMGhJQMFhJJWHwQJXHtBIMGMg6UAFfQhJsFHvpVg");
	var mask_1_graphics_427 = new cjs.Graphics().p("AleCpQHnpcMFhSQMFhSJbHpQJcHmBSMFMg6QAGLQhSsEHopbg");
	var mask_1_graphics_428 = new cjs.Graphics().p("AlrCvQHhphMDhbQMEhbJhHhQJiHfBbMEMg6LAG3QhbsDHgphg");
	var mask_1_graphics_429 = new cjs.Graphics().p("Al3C2QHZpnMDhlQMChkJnHbQJoHYBkMCMg6GAHjQhksCHZpmg");
	var mask_1_graphics_430 = new cjs.Graphics().p("AmDC8QHSpsMBhtQMChuJsHUQJtHQBtMBMg5/AIQQhtsCHRpsg");
	var mask_1_graphics_431 = new cjs.Graphics().p("AmODDQHKpyMAh2QMAh2JyHLQJzHKB2MAMg55AI7Qh3sAHLpyg");
	var mask_1_graphics_432 = new cjs.Graphics().p("AmZDKQHDp3L+h/QL/iAJ3HFQJ4HBB/L/Mg5yAJmQh/r+HDp3g");
	var mask_1_graphics_433 = new cjs.Graphics().p("AmkDSQG7p9L9iJQL9iIJ9G9QJ9G6CIL9Mg5qAKSQiJr8G8p8g");
	var mask_1_graphics_434 = new cjs.Graphics().p("AmvDZQG0qCL8iRQL7iSKBG2QKDGyCRL8Mg5iAK9QiSr7G0qBg");
	var mask_1_graphics_435 = new cjs.Graphics().p("Am5DhQGuqHL4ibQL6iaKGGuQKIGrCaL5Mg5aALpQiar5GsqGg");
	var mask_1_graphics_436 = new cjs.Graphics().p("AnDDoQGmqML3ijQL4ijKLGmQKNGjCjL4Mg5RAMUQijr3GkqMg");
	var mask_1_graphics_437 = new cjs.Graphics().p("AnMDwQGeqRL1isQL1isKRGeQKSGcCsL1Mg5IANAQisr2GdqQg");
	var mask_1_graphics_438 = new cjs.Graphics().p("AnVD4QGWqVLzi2QLzi1KWGXQKWGUC1LzMg49ANrQi1r0GVqVg");
	var mask_1_graphics_439 = new cjs.Graphics().p("AneEBQGPqbLwi+QLxi+KaGPQKcGMC+LxMg4zAOWQi+ryGNqZg");
	var mask_1_graphics_440 = new cjs.Graphics().p("AnmEJQGGqfLujHQLwjHKeGHQKgGFDHLuMg4oAPAQjHrvGGqeg");
	var mask_1_graphics_441 = new cjs.Graphics().p("AnuESQF+qkLsjQQLtjQKjF/QKkF9DQLsMg4cAPrQjQrtF+qig");
	var mask_1_graphics_442 = new cjs.Graphics().p("An2EaQF3qoLpjZQLqjYKoF3QKpF1DYLpMg4QAQWQjZrqF2qog");
	var mask_1_graphics_443 = new cjs.Graphics().p("An9EjQFuqsLnjiQLnjhKtFvQKtFtDhLnMg4DAQ/QjirnFuqsg");
	var mask_1_graphics_444 = new cjs.Graphics().p("AoEEsQFmqxLkjqQLljqKwFnQKyFlDqLkMg33ARqQjqrlFmqwg");
	var mask_1_graphics_445 = new cjs.Graphics().p("AoLE1QFfq1LhjyQLijzK0FeQK2FdDzLhMg3pASVQjzriFdq1g");
	var mask_1_graphics_446 = new cjs.Graphics().p("AoRE/QFWq5Lej8QLfj7K5FWQK6FVD7LeMg3bAS+Qj7rfFVq4g");
	var mask_1_graphics_447 = new cjs.Graphics().p("AoXFIQFOq9LbkEQLckEK9FOQK9FNEFLbMg3NAToQkErcFNq9g");
	var mask_1_graphics_448 = new cjs.Graphics().p("AocFSQFFrBLYkNQLZkNLBFHQLBFEENLYMg29AURQkNrZFFrAg");
	var mask_1_graphics_449 = new cjs.Graphics().p("AoiFcQE+rFLUkVQLWkWLEE+QLGE8EVLVMg2uAU7QkVrWE8rEg");
	var mask_1_graphics_450 = new cjs.Graphics().p("AomFmQE0rJLSkeQLSkdLIE1QLJEzEeLSMg2eAVkQkdrTE0rHg");
	var mask_1_graphics_451 = new cjs.Graphics().p("AorFwQEsrMLOkmQLQknLLEtQLNErEmLOMg2NAWNQkmrPErrLg");
	var mask_1_graphics_452 = new cjs.Graphics().p("AovF6QEkrPLKkvQLMkvLPElQLQEiEvLLMg18AW1QkvrLEjrPg");
	var mask_1_graphics_453 = new cjs.Graphics().p("AozGFQEcrTLHk3QLHk4LTEcQLTEaE4LHMg1rAXfQk3rIEarSg");
	var mask_1_graphics_454 = new cjs.Graphics().p("Ao2GPQETrWLDlAQLEk/LWETQLXESE/LDMg1ZAYHQk/rEESrWg");
	var mask_1_graphics_455 = new cjs.Graphics().p("Ao5GaQEKrZK/lIQLBlILZELQLaEIFILAMg1HAYvQlIrAEKrZg");
	var mask_1_graphics_456 = new cjs.Graphics().p("Ao8GlQECrdK7lQQK9lQLcECQLdEAFQK8Mg0zAZXQlRq9EBrbg");
	var mask_1_graphics_457 = new cjs.Graphics().p("Ao+GwQD5rfK3lZQK5lZLfD6QLgD4FYK3Mg0gAZ/QlYq5D4reg");
	var mask_1_graphics_458 = new cjs.Graphics().p("ApAG7QDwriK0lhQK0lhLiDxQLjDvFgKzMg0MAanQlhq0Dwrig");
	var mask_1_graphics_459 = new cjs.Graphics().p("ApBHGQDnrlKvlpQKwloLlDoQLlDmFpKvMgz4AbOQloqwDnrlg");
	var mask_1_graphics_460 = new cjs.Graphics().p("ApDHSQDfroKrlxQKslxLnDgQLoDdFxKrMgzjAb0QlxqrDerng");
	var mask_1_graphics_461 = new cjs.Graphics().p("ApDHdQDVrqKnl5QKnl5LqDXQLrDUF5KnMgzOAcbQl5qnDWrqg");
	var mask_1_graphics_462 = new cjs.Graphics().p("ApEHpQDNrtKimBQKjmBLtDOQLtDMGBKiMgy5AdCQmBqjDNrsg");
	var mask_1_graphics_463 = new cjs.Graphics().p("ApEH1QDErvKemJQKemJLvDFQLvDDGJKdMgyiAdoQmJqeDErug");
	var mask_1_graphics_464 = new cjs.Graphics().p("ApEIBQC8ryKYmQQKamRLxC8QLyC6GRKaMgyMAeNQmRqaC7rwg");
	var mask_1_graphics_465 = new cjs.Graphics().p("ApDINQCyr0KUmYQKVmZLzCzQL0CyGZKVMgx1AeyQmYqUCyrzg");
	var mask_1_graphics_466 = new cjs.Graphics().p("ApCIZQCpr1KPmhQKQmgL2CqQL2CoGgKQMgxdAfZQmgqQCpr1g");
	var mask_1_graphics_467 = new cjs.Graphics().p("ApBImQChr4KKmoQKLmoL3ChQL4CgGoKLMgxFAf9QmoqLCgr2g");
	var mask_1_graphics_468 = new cjs.Graphics().p("Ao/IyQCYr5KFmwQKGmwL5CZQL6CWGvKGMgwsAgiQmwqFCXr5g");
	var mask_1_graphics_469 = new cjs.Graphics().p("Ao9I/QCPr8KAm3QKAm3L7CPQL8COG3KBMgwUAhHQm3qBCOr6g");
	var mask_1_graphics_470 = new cjs.Graphics().p("Ao6JLQCFr8J7m/QJ7m/L9CGQL9CFG/J7Mgv7AhsQm/p8CGr8g");
	var mask_1_graphics_471 = new cjs.Graphics().p("Ao4JYQB9r+J1nGQJ3nHL+B+QL+B7HHJ2MgviAiQQnGp2B8r+g");
	var mask_1_graphics_472 = new cjs.Graphics().p("Ao0JlQBzsAJwnNQJxnOMAB0QL/BzHOJxMgvHAizQnOpxB0r/g");
	var mask_1_graphics_473 = new cjs.Graphics().p("AoxJyQBrsBJqnVQJrnVMBBrQMCBqHVJrMgutAjXQnVpsBqsAg");
	var mask_1_graphics_474 = new cjs.Graphics().p("AotJ/QBhsCJlncQJmncMCBiQMDBgHcJmMguSAj5QncplBhsCg");
	var mask_1_graphics_475 = new cjs.Graphics().p("AopKMQBYsDJfnkQJhnjMDBZQMDBXHkJgMgt2AkdQnkpgBYsDg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(418).to({graphics:mask_1_graphics_418,x:297.7,y:144.5}).wait(1).to({graphics:mask_1_graphics_419,x:297.7,y:145.6}).wait(1).to({graphics:mask_1_graphics_420,x:297.7,y:146.7}).wait(1).to({graphics:mask_1_graphics_421,x:297.7,y:147.8}).wait(1).to({graphics:mask_1_graphics_422,x:297.6,y:148.9}).wait(1).to({graphics:mask_1_graphics_423,x:297.6,y:150}).wait(1).to({graphics:mask_1_graphics_424,x:297.5,y:151.1}).wait(1).to({graphics:mask_1_graphics_425,x:297.4,y:152.2}).wait(1).to({graphics:mask_1_graphics_426,x:297.3,y:153.3}).wait(1).to({graphics:mask_1_graphics_427,x:297.2,y:154.4}).wait(1).to({graphics:mask_1_graphics_428,x:297.1,y:155.5}).wait(1).to({graphics:mask_1_graphics_429,x:297,y:156.6}).wait(1).to({graphics:mask_1_graphics_430,x:296.8,y:157.7}).wait(1).to({graphics:mask_1_graphics_431,x:296.7,y:158.8}).wait(1).to({graphics:mask_1_graphics_432,x:296.5,y:159.9}).wait(1).to({graphics:mask_1_graphics_433,x:296.3,y:161}).wait(1).to({graphics:mask_1_graphics_434,x:296.1,y:162.1}).wait(1).to({graphics:mask_1_graphics_435,x:295.9,y:163.2}).wait(1).to({graphics:mask_1_graphics_436,x:295.7,y:164.3}).wait(1).to({graphics:mask_1_graphics_437,x:295.5,y:165.4}).wait(1).to({graphics:mask_1_graphics_438,x:295.2,y:166.5}).wait(1).to({graphics:mask_1_graphics_439,x:295,y:167.6}).wait(1).to({graphics:mask_1_graphics_440,x:294.7,y:168.6}).wait(1).to({graphics:mask_1_graphics_441,x:294.4,y:169.7}).wait(1).to({graphics:mask_1_graphics_442,x:294.1,y:170.8}).wait(1).to({graphics:mask_1_graphics_443,x:293.8,y:171.8}).wait(1).to({graphics:mask_1_graphics_444,x:293.5,y:172.9}).wait(1).to({graphics:mask_1_graphics_445,x:293.2,y:174}).wait(1).to({graphics:mask_1_graphics_446,x:292.8,y:175}).wait(1).to({graphics:mask_1_graphics_447,x:292.5,y:176.1}).wait(1).to({graphics:mask_1_graphics_448,x:292.1,y:177.1}).wait(1).to({graphics:mask_1_graphics_449,x:291.7,y:178.2}).wait(1).to({graphics:mask_1_graphics_450,x:291.3,y:179.2}).wait(1).to({graphics:mask_1_graphics_451,x:290.9,y:180.2}).wait(1).to({graphics:mask_1_graphics_452,x:290.5,y:181.2}).wait(1).to({graphics:mask_1_graphics_453,x:290.1,y:182.3}).wait(1).to({graphics:mask_1_graphics_454,x:289.6,y:183.3}).wait(1).to({graphics:mask_1_graphics_455,x:289.2,y:184.3}).wait(1).to({graphics:mask_1_graphics_456,x:288.7,y:185.3}).wait(1).to({graphics:mask_1_graphics_457,x:288.2,y:186.3}).wait(1).to({graphics:mask_1_graphics_458,x:287.7,y:187.3}).wait(1).to({graphics:mask_1_graphics_459,x:287.2,y:188.3}).wait(1).to({graphics:mask_1_graphics_460,x:286.7,y:189.2}).wait(1).to({graphics:mask_1_graphics_461,x:286.2,y:190.2}).wait(1).to({graphics:mask_1_graphics_462,x:285.7,y:191.2}).wait(1).to({graphics:mask_1_graphics_463,x:285.1,y:192.1}).wait(1).to({graphics:mask_1_graphics_464,x:284.6,y:193.1}).wait(1).to({graphics:mask_1_graphics_465,x:284,y:194}).wait(1).to({graphics:mask_1_graphics_466,x:283.4,y:195}).wait(1).to({graphics:mask_1_graphics_467,x:282.8,y:195.9}).wait(1).to({graphics:mask_1_graphics_468,x:282.2,y:196.8}).wait(1).to({graphics:mask_1_graphics_469,x:281.6,y:197.8}).wait(1).to({graphics:mask_1_graphics_470,x:281,y:198.7}).wait(1).to({graphics:mask_1_graphics_471,x:280.4,y:199.6}).wait(1).to({graphics:mask_1_graphics_472,x:279.7,y:200.5}).wait(1).to({graphics:mask_1_graphics_473,x:279.1,y:201.4}).wait(1).to({graphics:mask_1_graphics_474,x:278.4,y:202.2}).wait(1).to({graphics:mask_1_graphics_475,x:277.7,y:203.1}).wait(111));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(20,1,1).p("Aj+lfQgDMcDMhpQDLhpBpgv");
	this.shape_2.setTransform(347.5,324.2);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(418).to({_off:false},0).wait(168));

	// Layer 17
	this.instance_2 = new lib.ar2("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(227.5,98,1,1,-2.8,0,0,0.8,-0.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(162).to({_off:false},0).wait(424));

	// Layer 12 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_317 = new cjs.Graphics().p("Ap/YQQm7p+CKr9QCKr7J/m6QJ8m7L9CKMgKcA5pQr7iKm6p+g");
	var mask_2_graphics_318 = new cjs.Graphics().p("ApeYnQnFp3B9r/QB+r+J3nEQJ1nGL+B+MgJeA5zQr+h9nEp2g");
	var mask_2_graphics_319 = new cjs.Graphics().p("Ao8Y+QnQpwBxsBQBxr/JvnPQJunQMABxMgIhA59Qr/hxnPpug");
	var mask_2_graphics_320 = new cjs.Graphics().p("AoaZUQnapoBksCQBksBJonZQJmnaMCBkMgHkA6FQsBhknZpng");
	var mask_2_graphics_321 = new cjs.Graphics().p("An3ZrQnlpgBYsEQBXsDJgnjQJenkMEBXMgGnA6NQsDhYnipeg");
	var mask_2_graphics_322 = new cjs.Graphics().p("AnUaBQnvpYBLsFQBLsEJYntQJVnuMFBLMgFoA6SQsGhLnrpWg");
	var mask_2_graphics_323 = new cjs.Graphics().p("AmxaXQn4pPA+sGQA+sGJPn2QJOn4MGA+MgErA6XQsGg9n2pPg");
	var mask_2_graphics_324 = new cjs.Graphics().p("AmNauQoCpHAxsIQAxsGJIoAQJEoCMHAxMgDtA6dQsHgyn/pFg");
	var mask_2_graphics_325 = new cjs.Graphics().p("AlpbEQoLo/AksIQAksGI/oKQI8oLMIAkMgCvA6fQsIgkoJo9g");
	var mask_2_graphics_326 = new cjs.Graphics().p("AlEbaQoVo2AYsIQAXsII2oTQIzoUMJAXMgByA6iQsIgYoSo0g");
	var mask_2_graphics_327 = new cjs.Graphics().p("AkfbwQoeotAKsJQALsHItodQIrodMIAKMgAzA6jQsJgLoborg");
	var mask_2_graphics_328 = new cjs.Graphics().p("Aj/cGQonokgCsJQgCsHIkomQIhonMJgCMAAKA6jIgGAAQsFAAoiogg");
	var mask_2_graphics_329 = new cjs.Graphics().p("Aj4cbQowoagPsJQgPsHIbovQIYowMIgOMABIA6iIgpAAQruAAoeoLg");
	var mask_2_graphics_330 = new cjs.Graphics().p("AjxcxQo5oSgcsIQgcsHISo3QIPo5MIgcMACGA6hIhNABQrXAAoan1g");
	var mask_2_graphics_331 = new cjs.Graphics().p("AjqdFQpBoIgpsHQgosGIIpAQIFpCMIgoMADDA6dQg4ADg3AAQrCAAoVnhg");
	var mask_2_graphics_332 = new cjs.Graphics().p("AjidaQpKn/g1sGQg2sGH/pIQH8pKMGg1MAECA6ZQhKAFhHAAQqtAAoQnMg");
	var mask_2_graphics_333 = new cjs.Graphics().p("AjaduQpSn1hCsGQhCsEH0pRQHypSMGhCMAE/A6VQhaAHhYAAQqZAAoKm4g");
	var mask_2_graphics_334 = new cjs.Graphics().p("AjReBQpbnrhOsEQhPsDHqpZQHppaMEhPMAF9A6PQhrAKhoAAQqFABoEmmg");
	var mask_2_graphics_335 = new cjs.Graphics().p("AjIeUQpjnghbsDQhcsCHhphQHfpiMChcMAG6A6IQh7APh4AAQpxAAn+mTg");
	var mask_2_graphics_336 = new cjs.Graphics().p("Ai/enQpqnWhpsCQhosAHXppQHVpqMAhoMAH4A6AQiMATiHAAQpfAAn3mAg");
	var mask_2_graphics_337 = new cjs.Graphics().p("Ai2e5QpxnMh1r/Qh1r/HMpwQHLpyL+h1MAI1A53QicAYiWAAQpMAAnxlug");
	var mask_2_graphics_338 = new cjs.Graphics().p("AisfLQp5nCiCr9QiBr9HCp3QHAp5L8iCMAJyA5tQirAdilAAQo7AAnplcg");
	var mask_2_graphics_339 = new cjs.Graphics().p("AihfdQqBm4iOr7QiPr7G4p+QG2qAL6iPMAKvA5iQi8AjizAAQopAAnhlKg");
	var mask_2_graphics_340 = new cjs.Graphics().p("AiXfuQqImtiar5Qibr4GsqFQGsqIL3ibMALsA5WQjLApjCAAQoYAAnZk5g");
	var mask_2_graphics_341 = new cjs.Graphics().p("AiMf+QqPmiinr2Qinr1GiqNQGgqOL1ioMAMoA5JQjZAwjRAAQoHAAnRkpg");
	var mask_2_graphics_342 = new cjs.Graphics().p("EgCBAgOQqVmXi0rzQi0rzGXqTQGWqVLyi0MANkA47QjoA3jfAAQn3AAnIkZg");
	var mask_2_graphics_343 = new cjs.Graphics().p("EgB1AgeQqcmMjBrwQjArwGMqZQGLqcLvjAMAOgA4sQj2A/jtAAQnnAAm/kKg");
	var mask_2_graphics_344 = new cjs.Graphics().p("EgBpAgtQqjmAjMrtQjNrtGBqgQF/qiLsjMMAPcA4bQkEBIj8AAQnXAAm1j7g");
	var mask_2_graphics_345 = new cjs.Graphics().p("EgBdAg8Qqpl1jZrpQjZrpF2qnQF0qoLojZMAQYA4LQkSBQkKAAQnHAAmsjsg");
	var mask_2_graphics_346 = new cjs.Graphics().p("EgBQAhLQqvlqjmrmQjlrlFrqtQFpquLkjlMARTA35QkgBZkXAAQm4AAmijdg");
	var mask_2_graphics_347 = new cjs.Graphics().p("EgBEAhZQq0lfjyrhQjxriFfqyQFdq0LhjyMASOA3mQkuBjklAAQmpAAmYjPg");
	var mask_2_graphics_348 = new cjs.Graphics().p("EgA2AhmQq7lTj9rdQj+reFUq4QFSq5Lcj+MATIA3SQk6BtkzAAQmaAAmNjCg");
	var mask_2_graphics_349 = new cjs.Graphics().p("EgApAh0QrAlIkKrZQkJrZFIq+QFGq/LYkKMAUDA2+QlHB3lBAAQmMAAmCi0g");
	var mask_2_graphics_350 = new cjs.Graphics().p("EgAbAiAQrFk8kWrUQkWrVE9rDQE6rELUkWMAU8A2oQlTCClPAAQl9AAl3iog");
	var mask_2_graphics_351 = new cjs.Graphics().p("EgANAiNQrKkxkirQQkirPExrIQEvrKLPkhMAV2A2QQlgCOldAAQlvAAlribg");
	var mask_2_graphics_352 = new cjs.Graphics().p("EAAAAiYQrOkkkurLQktrLElrNQEjrOLLkuMAWuA15QlrCalsAAQlgAAlhiQg");
	var mask_2_graphics_353 = new cjs.Graphics().p("EAATAinQrUkVk9rEQk9rFEWrSQETrVLFk9MAX4A1ZQl7Cpl/AAQlNAAlRiAg");
	var mask_2_graphics_354 = new cjs.Graphics().p("EAAnAi1QrbkFlMq+QlLq9EFrZQEEraK+lMMAZBA03QmJC6mSAAQk7AAlAhyg");
	var mask_2_graphics_355 = new cjs.Graphics().p("EAA6AjCQrfj1lbq2Qlbq2D2rfQD0rgK2lbMAaKA0VQmXDLmlAAQkpAAkwhlg");
	var mask_2_graphics_356 = new cjs.Graphics().p("EABPAjOQrljllqqvQlpquDmrjQDkrlKvlqMAbRAzwQmkDdm5AAQkWAAkfhZg");
	var mask_2_graphics_357 = new cjs.Graphics().p("EABkAjaQrqjWl4qmQl5qnDXroQDUrpKml5MAcZAzKQmyDwnMAAQkEAAkNhNg");
	var mask_2_graphics_358 = new cjs.Graphics().p("EAB5AjlQrujGmHqeQmHqeDGrtQDFruKemHMAdeAyiQm+EEngAAQjyAAj7hCg");
	var mask_2_graphics_359 = new cjs.Graphics().p("EACPAjvQryi2mVqVQmWqWC2ryQC0rxKWmVMAekAx4QnKEZn1AAQjgAAjog4g");
	var mask_2_graphics_360 = new cjs.Graphics().p("EAClAj4Qr2ilmjqNQmkqNCmr1QCkr1KNmkMAfoAxOQnVEtoLAAQjNAAjVgug");
	var mask_2_graphics_361 = new cjs.Graphics().p("EAC8AkAQr5iUmyqEQmxqECVr5QCUr4KDmxMAgrAwhQnfFDogAAQi7AAjBgmg");
	var mask_2_graphics_362 = new cjs.Graphics().p("EADTAkIQr8iEnAp7Qm/p6CFr8QCDr7J6m/MAhuAvzQnqFao2AAQinAAiugeg");
	var mask_2_graphics_363 = new cjs.Graphics().p("EADqAkOQr/hznNpxQnMpwB0r/QBzr+JwnNMAivAvFQnzFxpOAAQiTAAiagYg");
	var mask_2_graphics_364 = new cjs.Graphics().p("EAECAkUQsBhjnapmQnbpnBlsBQBisAJmnaMAjwAuUQn9GIplAAQiAAAiFgRg");
	var mask_2_graphics_365 = new cjs.Graphics().p("EAEaAkZQsDhTnnpcQnopcBUsDQBRsCJdnnMAkuAtiQoEGhp+AAQhsAAhwgMg");
	var mask_2_graphics_366 = new cjs.Graphics().p("EAEzAkdQsFhCn0pRQn0pSBDsFQBAsDJSn1MAltAswQoNG6qXAAQhXAAhagIg");
	var mask_2_graphics_367 = new cjs.Graphics().p("EAFMAkgQsGgxoBpHQoBpGAysGQAwsFJHoBMAmqAr7QoTHUqyAAQhDAAhDgFg");
	var mask_2_graphics_368 = new cjs.Graphics().p("EAFlAkiQsHggoNo8QoOo7AisHQAgsGI7oNMAnmArFQoaHurNAAQgtAAgtgCg");
	var mask_2_graphics_369 = new cjs.Graphics().p("EAF/AkkQsIgQoZowQoaowARsIQAPsGIwoaMAohAqOQogIKrqAAIgsAAg");
	var mask_2_graphics_370 = new cjs.Graphics().p("AuVcBQololAAsHQgCsHIlomMApaApWQokIlsHABIgCAAQsGAAolojg");
	var mask_2_graphics_371 = new cjs.Graphics().p("AuGcdQoxoZgRsHQgSsHIYoxMAqTAocQoYIxsGASIgxAAQrpAAofoHg");
	var mask_2_graphics_372 = new cjs.Graphics().p("At2c4Qo9oMghsHQgjsGIMo9MArKAniQoMI8sGAiQgvACgvAAQrMAAoZnsg");
	var mask_2_graphics_373 = new cjs.Graphics().p("AtmdTQpIoAgxsGQg0sFIApIMAsAAmlQoAJIsFAzQhGAEhFAAQqwAAoTnRg");
	var mask_2_graphics_374 = new cjs.Graphics().p("AtVdtQpSnzhCsFQhFsEHzpTMAs1AlpQnzJSsEBDQhcAJhaAAQqWAAoMm4g");
	var mask_2_graphics_375 = new cjs.Graphics().p("AtCeGQpdnmhTsDQhWsDHnpdMAtoAkqQnnJdsCBUQhyANhuAAQp8AAoEmfg");
	var mask_2_graphics_376 = new cjs.Graphics().p("AsvefQponZhjsCQhmsAHZpnMAuaAjqQnZJosABkQiHASiDAAQpkAAn7mGg");
	var mask_2_graphics_377 = new cjs.Graphics().p("Asbe3QpynMh0r/Qh2r+HMpyMAvKAirQnMJxr9B1QicAYiXAAQpMAAnylug");
	var mask_2_graphics_378 = new cjs.Graphics().p("AsGfOQp7m+iFr9QiHr8G/p6MAv5AhpQm+J7r7CFQixAfiqAAQo0AAnplXg");
	var mask_2_graphics_379 = new cjs.Graphics().p("ArwflQqFmxiVr5QiXr5GwqEMAwoAgmQmxKFr4CWQjFAni8AAQofAAnelBg");
	var mask_2_graphics_380 = new cjs.Graphics().p("Araf6QqOmiilr2Qinr2GiqNMAxUAfjQmjKOr1CmQjYAwjPAAQoJAAnUksg");
	var mask_2_graphics_381 = new cjs.Graphics().p("EgLCAgPQqXmUi2ryQi3ryGUqWMAx+AefQmUKXrxC2QjrA5jjAAQnzAAnIkXg");
	var mask_2_graphics_382 = new cjs.Graphics().p("EgKqAgkQqfmGjGruQjIruGGqfMAyoAdaQmGKfrtDHQj+BDj1AAQneAAm9kCg");
	var mask_2_graphics_383 = new cjs.Graphics().p("EgKRAg4Qqol4jWrqQjXrpF3qnMAzQAcTQl4KorpDXQkQBOkHAAQnKAAmwjug");
	var mask_2_graphics_384 = new cjs.Graphics().p("EgJ3AhKQqwlojmrlQjorlFpqvMAz2AbNQlpKvrkDnQkhBakaAAQm2AAmjjcg");
	var mask_2_graphics_385 = new cjs.Graphics().p("EgJcAhdQq4laj1rgQj4rgFaq2MA0aAaFQlaK3reD2QkzBnksAAQmjAAmVjJg");
	var mask_2_graphics_386 = new cjs.Graphics().p("EgJBAhuQq+lLkGraQkIraFLq+MA0+AY8QlLK/rZEGQlEB1k+AAQmPAAmIi5g");
	var mask_2_graphics_387 = new cjs.Graphics().p("EgIlAh/QrFk8kWrVQkXrUE8rEMA1gAXyQk8LGrUEWQlUCDlQAAQl9AAl5iog");
	var mask_2_graphics_388 = new cjs.Graphics().p("EgIIAiPQrMktklrOQknrOEtrLMA2AAWoQktLNrNElQlkCSljAAQlqAAlqiYg");
	var mask_2_graphics_389 = new cjs.Graphics().p("EgHqAieQrTkdk0rIQk2rIEdrRMA2eAVeQkdLTrHE0QlzChl2ABQlXAAlaiJg");
	var mask_2_graphics_390 = new cjs.Graphics().p("EgHMAisQrYkNlErBQlFrBENrYMA27AUTQkNLZrAFEQmCCxmJAAQlEAAlLh6g");
	var mask_2_graphics_391 = new cjs.Graphics().p("EgGtAi6Qrej+lSq6QlVq6D+rdMA3WATHQj9Lfq5FTQmRDCmcAAQkyAAk6hsg");
	var mask_2_graphics_392 = new cjs.Graphics().p("EgGNAjHQrjjuliqzQljqyDuriMA3wAR6QjuLkqyFiQmeDUmvAAQkgAAkphfg");
	var mask_2_graphics_393 = new cjs.Graphics().p("EgFsAjTQrpjelwqrQlyqqDeroMA4HAQuQjdLoqqFxQmrDnnEAAQkNAAkXhTg");
	var mask_2_graphics_394 = new cjs.Graphics().p("EgFLAjeQrtjOl/qjQmBqiDOrsMA4eAPgQjOLtqhF/Qm4D7nYAAQj7AAkFhIg");
	var mask_2_graphics_395 = new cjs.Graphics().p("EgEpAjpQryi+mNqbQmPqaC9rxMA4zAOTQi9LxqaGOQnEEPnsAAQjpAAjyg9g");
	var mask_2_graphics_396 = new cjs.Graphics().p("EgEHAjyQr1itmcqSQmdqRCtr2MA5GANFQitL1qRGcQnQEjoBAAQjWAAjggzg");
	var mask_2_graphics_397 = new cjs.Graphics().p("EgDkAj7Qr5idmpqJQmsqICdr5MA5XAL2QidL5qHGqQnbE4oXAAQjDAAjNgqg");
	var mask_2_graphics_398 = new cjs.Graphics().p("EgDAAkDQr8iNm4qAQm5p+CMr8MA5nAKmQiNL8p+G4QnlFPotAAQiwAAi5gig");
	var mask_2_graphics_399 = new cjs.Graphics().p("EgCcAkKQr/h8nFp2QnHp1B8r/MA50AJXQh8L/p0HFQnwFmpDAAQieAAikgbg");
	var mask_2_graphics_400 = new cjs.Graphics().p("EgB3AkQQsBhsnTpsQnUprBrsCMA6BAIIQhsMBprHTQn4F9pbAAQiLAAiPgUg");
	var mask_2_graphics_401 = new cjs.Graphics().p("EAAXAkfQsHgtoDpFQoFpDAusIMA6eADbQgtMIpDIDQoWHbq7AAQg9AAg/gEg");
	var mask_2_graphics_402 = new cjs.Graphics().p("AyMcaQoxoYgSsJMA6kgBTQARMJoYIwQoZIysJARIgwAAQrpAAofoIg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(317).to({graphics:mask_2_graphics_317,x:123.4,y:232.8}).wait(1).to({graphics:mask_2_graphics_318,x:121.8,y:233}).wait(1).to({graphics:mask_2_graphics_319,x:120.3,y:233.3}).wait(1).to({graphics:mask_2_graphics_320,x:118.8,y:233.5}).wait(1).to({graphics:mask_2_graphics_321,x:117.3,y:233.7}).wait(1).to({graphics:mask_2_graphics_322,x:115.7,y:233.8}).wait(1).to({graphics:mask_2_graphics_323,x:114.2,y:233.9}).wait(1).to({graphics:mask_2_graphics_324,x:112.6,y:234.1}).wait(1).to({graphics:mask_2_graphics_325,x:111.1,y:234.1}).wait(1).to({graphics:mask_2_graphics_326,x:109.6,y:234.2}).wait(1).to({graphics:mask_2_graphics_327,x:108,y:234.2}).wait(1).to({graphics:mask_2_graphics_328,x:107,y:234.2}).wait(1).to({graphics:mask_2_graphics_329,x:108.5,y:234.2}).wait(1).to({graphics:mask_2_graphics_330,x:110.1,y:234.2}).wait(1).to({graphics:mask_2_graphics_331,x:111.6,y:234.2}).wait(1).to({graphics:mask_2_graphics_332,x:113.2,y:234.2}).wait(1).to({graphics:mask_2_graphics_333,x:114.7,y:234.2}).wait(1).to({graphics:mask_2_graphics_334,x:116.3,y:234.2}).wait(1).to({graphics:mask_2_graphics_335,x:117.8,y:234.3}).wait(1).to({graphics:mask_2_graphics_336,x:119.4,y:234.3}).wait(1).to({graphics:mask_2_graphics_337,x:120.9,y:234.3}).wait(1).to({graphics:mask_2_graphics_338,x:122.4,y:234.3}).wait(1).to({graphics:mask_2_graphics_339,x:124,y:234.3}).wait(1).to({graphics:mask_2_graphics_340,x:125.5,y:234.3}).wait(1).to({graphics:mask_2_graphics_341,x:127,y:234.3}).wait(1).to({graphics:mask_2_graphics_342,x:128.5,y:234.3}).wait(1).to({graphics:mask_2_graphics_343,x:130,y:234.4}).wait(1).to({graphics:mask_2_graphics_344,x:131.5,y:234.4}).wait(1).to({graphics:mask_2_graphics_345,x:133,y:234.4}).wait(1).to({graphics:mask_2_graphics_346,x:134.5,y:234.4}).wait(1).to({graphics:mask_2_graphics_347,x:136,y:234.4}).wait(1).to({graphics:mask_2_graphics_348,x:137.4,y:234.4}).wait(1).to({graphics:mask_2_graphics_349,x:138.9,y:234.4}).wait(1).to({graphics:mask_2_graphics_350,x:140.3,y:234.4}).wait(1).to({graphics:mask_2_graphics_351,x:141.8,y:234.4}).wait(1).to({graphics:mask_2_graphics_352,x:143.2,y:234.4}).wait(1).to({graphics:mask_2_graphics_353,x:145.1,y:234.3}).wait(1).to({graphics:mask_2_graphics_354,x:146.9,y:234.3}).wait(1).to({graphics:mask_2_graphics_355,x:148.7,y:234.3}).wait(1).to({graphics:mask_2_graphics_356,x:150.5,y:234.3}).wait(1).to({graphics:mask_2_graphics_357,x:152.3,y:234.3}).wait(1).to({graphics:mask_2_graphics_358,x:154,y:234.3}).wait(1).to({graphics:mask_2_graphics_359,x:155.8,y:234.3}).wait(1).to({graphics:mask_2_graphics_360,x:157.5,y:234.2}).wait(1).to({graphics:mask_2_graphics_361,x:159.1,y:234.2}).wait(1).to({graphics:mask_2_graphics_362,x:160.8,y:234.2}).wait(1).to({graphics:mask_2_graphics_363,x:162.4,y:234.2}).wait(1).to({graphics:mask_2_graphics_364,x:164.1,y:234.1}).wait(1).to({graphics:mask_2_graphics_365,x:165.6,y:234.1}).wait(1).to({graphics:mask_2_graphics_366,x:167.2,y:234.1}).wait(1).to({graphics:mask_2_graphics_367,x:168.7,y:234.1}).wait(1).to({graphics:mask_2_graphics_368,x:170.2,y:234}).wait(1).to({graphics:mask_2_graphics_369,x:171.7,y:234}).wait(1).to({graphics:mask_2_graphics_370,x:173.1,y:234}).wait(1).to({graphics:mask_2_graphics_371,x:174.5,y:234}).wait(1).to({graphics:mask_2_graphics_372,x:175.9,y:234}).wait(1).to({graphics:mask_2_graphics_373,x:177.3,y:234}).wait(1).to({graphics:mask_2_graphics_374,x:178.6,y:234.1}).wait(1).to({graphics:mask_2_graphics_375,x:179.9,y:234.1}).wait(1).to({graphics:mask_2_graphics_376,x:181.1,y:234.1}).wait(1).to({graphics:mask_2_graphics_377,x:182.3,y:234.1}).wait(1).to({graphics:mask_2_graphics_378,x:183.5,y:234.1}).wait(1).to({graphics:mask_2_graphics_379,x:184.7,y:234.2}).wait(1).to({graphics:mask_2_graphics_380,x:185.8,y:234.2}).wait(1).to({graphics:mask_2_graphics_381,x:186.8,y:234.2}).wait(1).to({graphics:mask_2_graphics_382,x:187.9,y:234.2}).wait(1).to({graphics:mask_2_graphics_383,x:188.9,y:234.2}).wait(1).to({graphics:mask_2_graphics_384,x:189.8,y:234.2}).wait(1).to({graphics:mask_2_graphics_385,x:190.7,y:234.2}).wait(1).to({graphics:mask_2_graphics_386,x:191.6,y:234.3}).wait(1).to({graphics:mask_2_graphics_387,x:192.5,y:234.3}).wait(1).to({graphics:mask_2_graphics_388,x:193.3,y:234.3}).wait(1).to({graphics:mask_2_graphics_389,x:194,y:234.3}).wait(1).to({graphics:mask_2_graphics_390,x:194.7,y:234.2}).wait(1).to({graphics:mask_2_graphics_391,x:195.4,y:234.2}).wait(1).to({graphics:mask_2_graphics_392,x:196.1,y:234.2}).wait(1).to({graphics:mask_2_graphics_393,x:196.6,y:234.2}).wait(1).to({graphics:mask_2_graphics_394,x:197.2,y:234.2}).wait(1).to({graphics:mask_2_graphics_395,x:197.7,y:234.2}).wait(1).to({graphics:mask_2_graphics_396,x:198.2,y:234.1}).wait(1).to({graphics:mask_2_graphics_397,x:198.6,y:234.1}).wait(1).to({graphics:mask_2_graphics_398,x:199,y:234.1}).wait(1).to({graphics:mask_2_graphics_399,x:199.3,y:234.1}).wait(1).to({graphics:mask_2_graphics_400,x:199.7,y:234}).wait(1).to({graphics:mask_2_graphics_401,x:200.4,y:233.9}).wait(1).to({graphics:mask_2_graphics_402,x:200.6,y:233.8}).wait(184));

	// Layer 10
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(20,1,1).p("ANR21QgggegtgYQgggNgfgCQjSgRjcGaQjtG5l8OTIACgYQlxI8h0GmQh2GvGVhvQGUhvERoWQERoVCii1");
	this.shape_3.setTransform(264.2,274);
	this.shape_3._off = true;

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(317).to({_off:false},0).wait(269));

	// Layer 9 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_178 = new cjs.Graphics().p("Ah1AlIcvgWIAHJ4I8uAWg");
	var mask_3_graphics_179 = new cjs.Graphics().p("Aubk7IcvgWIAIKNI8vAWg");
	var mask_3_graphics_180 = new cjs.Graphics().p("AublGIcugWIAJKjI8vAWg");
	var mask_3_graphics_181 = new cjs.Graphics().p("AublRIcugWIAJK5I8vAWg");
	var mask_3_graphics_182 = new cjs.Graphics().p("AublcIcugWIAJLPI8vAWg");
	var mask_3_graphics_183 = new cjs.Graphics().p("AublnIcugVIAJLjI8uAXg");
	var mask_3_graphics_184 = new cjs.Graphics().p("AublxIcugWIAJL5I8uAWg");
	var mask_3_graphics_185 = new cjs.Graphics().p("Aubl7IcugWIAJMNI8uAWg");
	var mask_3_graphics_186 = new cjs.Graphics().p("AubmFIcugWIAJMhI8uAWg");
	var mask_3_graphics_187 = new cjs.Graphics().p("AucmQIcvgVIAKM1I8vAXg");
	var mask_3_graphics_188 = new cjs.Graphics().p("AucmaIcvgWIAKNLI8vAWg");
	var mask_3_graphics_189 = new cjs.Graphics().p("AucmkIcugWIALNfI8vAWg");
	var mask_3_graphics_190 = new cjs.Graphics().p("AucmvIcugVIALNzI8vAWg");
	var mask_3_graphics_191 = new cjs.Graphics().p("Aucm5IcugWIALOJI8uAWg");
	var mask_3_graphics_192 = new cjs.Graphics().p("AucnDIcugWIALOdI8uAWg");
	var mask_3_graphics_193 = new cjs.Graphics().p("AucnNIcugWIALOxI8uAWg");
	var mask_3_graphics_194 = new cjs.Graphics().p("AucnXIcugXIALPHI8uAVg");
	var mask_3_graphics_195 = new cjs.Graphics().p("AudniIcvgWIAMPbI8vAWg");
	var mask_3_graphics_196 = new cjs.Graphics().p("AudnsIcvgWIAMPvI8vAWg");
	var mask_3_graphics_197 = new cjs.Graphics().p("Audn2IcugWIANQDI8vAWg");
	var mask_3_graphics_198 = new cjs.Graphics().p("AudoAIcugXIANQZI8vAVg");
	var mask_3_graphics_199 = new cjs.Graphics().p("AudoLIcugWIANQtI8uAWg");
	var mask_3_graphics_200 = new cjs.Graphics().p("AudoVIcugWIANRBI8uAWg");
	var mask_3_graphics_201 = new cjs.Graphics().p("AudofIcugWIANRVI8uAWg");
	var mask_3_graphics_202 = new cjs.Graphics().p("AudopIcugXIANRqI8uAXg");
	var mask_3_graphics_203 = new cjs.Graphics().p("Aueo0IcvgWIAOR/I8vAWg");
	var mask_3_graphics_204 = new cjs.Graphics().p("Aueo+IcvgWIAOSTI8vAWg");
	var mask_3_graphics_205 = new cjs.Graphics().p("AuepJIcugVIAPSnI8uAWg");
	var mask_3_graphics_206 = new cjs.Graphics().p("AuepTIcugVIAPS7I8uAWg");
	var mask_3_graphics_207 = new cjs.Graphics().p("AuepdIcugWIAPTRI8uAWg");
	var mask_3_graphics_208 = new cjs.Graphics().p("AuepnIcugWIAPTlI8uAWg");
	var mask_3_graphics_209 = new cjs.Graphics().p("AuepxIcugWIAQT5I8vAWg");
	var mask_3_graphics_210 = new cjs.Graphics().p("Aufp8IcvgVIAQUOI8vAVg");
	var mask_3_graphics_211 = new cjs.Graphics().p("AufqGIcvgWIAQUjI8vAWg");
	var mask_3_graphics_212 = new cjs.Graphics().p("AufqQIcugWIARU3I8uAWg");
	var mask_3_graphics_213 = new cjs.Graphics().p("AufqaIcugWIARVLI8uAWg");
	var mask_3_graphics_214 = new cjs.Graphics().p("AufqlIcugVIARVgI8uAVg");
	var mask_3_graphics_215 = new cjs.Graphics().p("AufqvIcugWIARV1I8uAWg");
	var mask_3_graphics_216 = new cjs.Graphics().p("Aufq5IcugWIASWJI8vAWg");
	var mask_3_graphics_217 = new cjs.Graphics().p("AufrDIcugWIASWdI8vAWg");
	var mask_3_graphics_218 = new cjs.Graphics().p("AugrOIcvgVIASWxI8vAWg");
	var mask_3_graphics_219 = new cjs.Graphics().p("AugrYIcvgWIASXHI8vAWg");
	var mask_3_graphics_220 = new cjs.Graphics().p("AugriIcugWIATXbI8vAWg");
	var mask_3_graphics_221 = new cjs.Graphics().p("AugrtIcugVIATXvI8vAWg");
	var mask_3_graphics_222 = new cjs.Graphics().p("Augr3IcugVIATYDI8uAXg");
	var mask_3_graphics_223 = new cjs.Graphics().p("AugsBIcugWIATYZI8uAWg");
	var mask_3_graphics_224 = new cjs.Graphics().p("AugsLIcugWIATYtI8uAWg");
	var mask_3_graphics_225 = new cjs.Graphics().p("AugsVIcugXIATZCI8uAXg");
	var mask_3_graphics_226 = new cjs.Graphics().p("AuhsgIcvgWIAUZXI8vAWg");
	var mask_3_graphics_227 = new cjs.Graphics().p("AuhsqIcvgWIAUZrI8vAWg");
	var mask_3_graphics_228 = new cjs.Graphics().p("Auhs0IcugWIAVZ/I8vAWg");
	var mask_3_graphics_229 = new cjs.Graphics().p("Auhs+IcugXIAVaVI8vAVg");
	var mask_3_graphics_230 = new cjs.Graphics().p("AuhtJIcugWIAVapI8uAWg");
	var mask_3_graphics_231 = new cjs.Graphics().p("AuhtTIcugWIAVa9I8uAWg");
	var mask_3_graphics_232 = new cjs.Graphics().p("AuhtdIcugWIAVbRI8uAWg");
	var mask_3_graphics_233 = new cjs.Graphics().p("AuhtnIcugXIAVbnI8uAVg");
	var mask_3_graphics_234 = new cjs.Graphics().p("AuityIcvgWIAWb7I8vAWg");
	var mask_3_graphics_235 = new cjs.Graphics().p("Auit9IcvgVIAWcPI8vAWg");
	var mask_3_graphics_236 = new cjs.Graphics().p("AuiuHIcugVIAXcjI8uAWg");
	var mask_3_graphics_237 = new cjs.Graphics().p("AuiuRIcugWIAXc5I8uAVg");
	var mask_3_graphics_238 = new cjs.Graphics().p("AuiubIcugWIAXdNI8uAWg");
	var mask_3_graphics_239 = new cjs.Graphics().p("AuiumIcugVIAYdhI8vAWg");
	var mask_3_graphics_240 = new cjs.Graphics().p("AuiuwIcugVIAYd1I8vAWg");
	var mask_3_graphics_241 = new cjs.Graphics().p("Auju6IcvgWIAYeLI8vAWg");
	var mask_3_graphics_242 = new cjs.Graphics().p("AujvEIcvgWIAYefI8vAWg");
	var mask_3_graphics_243 = new cjs.Graphics().p("AujvOIcugWIAZezI8uAWg");
	var mask_3_graphics_244 = new cjs.Graphics().p("AujvZIcugVIAZfHI8uAXg");
	var mask_3_graphics_245 = new cjs.Graphics().p("AujvjIcugWIAZfdI8uAWg");
	var mask_3_graphics_246 = new cjs.Graphics().p("AujvtIcugWIAZfxI8uAWg");
	var mask_3_graphics_247 = new cjs.Graphics().p("Aujv3IcugWMAAaAgFI8vAWg");
	var mask_3_graphics_248 = new cjs.Graphics().p("AujwCIcugVMAAaAgZI8vAXg");
	var mask_3_graphics_249 = new cjs.Graphics().p("AukwMIcvgVMAAaAguI8vAVg");
	var mask_3_graphics_250 = new cjs.Graphics().p("AukwWIcvgWMAAaAhDI8vAWg");
	var mask_3_graphics_251 = new cjs.Graphics().p("AukwgIcugWMAAbAhXI8uAWg");
	var mask_3_graphics_252 = new cjs.Graphics().p("AukwrIcugVMAAbAhrI8uAWg");
	var mask_3_graphics_253 = new cjs.Graphics().p("Aukw1IcugVMAAbAiAI8uAVg");
	var mask_3_graphics_254 = new cjs.Graphics().p("Aukw/IcugWMAAbAiVI8uAWg");
	var mask_3_graphics_255 = new cjs.Graphics().p("AukxJIcugWMAAcAipI8vAWg");
	var mask_3_graphics_256 = new cjs.Graphics().p("AukxUIcugVMAAcAi9I8vAWg");
	var mask_3_graphics_257 = new cjs.Graphics().p("AulxeIcvgWMAAcAjTI8vAWg");
	var mask_3_graphics_258 = new cjs.Graphics().p("AulxoIcvgWMAAcAjnI8vAWg");
	var mask_3_graphics_259 = new cjs.Graphics().p("AulxyIcugWMAAdAj7I8vAWg");
	var mask_3_graphics_260 = new cjs.Graphics().p("Aulx8IcugXMAAdAkQI8vAXg");
	var mask_3_graphics_261 = new cjs.Graphics().p("AulyHIcugWMAAdAklI8uAWg");
	var mask_3_graphics_262 = new cjs.Graphics().p("AulyRIcugWMAAdAk5I8uAWg");
	var mask_3_graphics_263 = new cjs.Graphics().p("AulybIcugWMAAdAlNI8uAWg");
	var mask_3_graphics_264 = new cjs.Graphics().p("AumymIcvgWMAAeAliI8vAXg");
	var mask_3_graphics_265 = new cjs.Graphics().p("AumywIcvgWMAAeAl3I8vAWg");
	var mask_3_graphics_266 = new cjs.Graphics().p("Aumy7IcugVMAAfAmLI8vAWg");
	var mask_3_graphics_267 = new cjs.Graphics().p("AumzFIcugVMAAfAmfI8vAWg");
	var mask_3_graphics_268 = new cjs.Graphics().p("AumzPIcugWMAAfAm0I8uAXg");
	var mask_3_graphics_269 = new cjs.Graphics().p("AumzZIcugWMAAfAnJI8uAWg");
	var mask_3_graphics_270 = new cjs.Graphics().p("AumzkIcugVMAAfAndI8uAWg");
	var mask_3_graphics_271 = new cjs.Graphics().p("AumzuIcugVMAAfAnxI8uAWg");
	var mask_3_graphics_272 = new cjs.Graphics().p("Aunz4IcvgWMAAgAoGI8vAXg");
	var mask_3_graphics_273 = new cjs.Graphics().p("Aun0CIcvgWMAAgAobI8vAWg");
	var mask_3_graphics_274 = new cjs.Graphics().p("Aun0MIcugWMAAhAovI8uAWg");
	var mask_3_graphics_275 = new cjs.Graphics().p("Aun0XIcugVMAAhApEI8uAVg");
	var mask_3_graphics_276 = new cjs.Graphics().p("Aun0hIcugWMAAhApZI8uAWg");
	var mask_3_graphics_277 = new cjs.Graphics().p("Aun0rIcugWMAAhAptI8uAWg");
	var mask_3_graphics_278 = new cjs.Graphics().p("Aun01IcugWMAAiAqBI8vAWg");
	var mask_3_graphics_279 = new cjs.Graphics().p("Aun1AIcugVMAAiAqWI8vAVg");
	var mask_3_graphics_280 = new cjs.Graphics().p("Auo1KIcvgWMAAiAqrI8vAWg");
	var mask_3_graphics_281 = new cjs.Graphics().p("Auo1UIcvgWMAAiAq/I8vAWg");
	var mask_3_graphics_282 = new cjs.Graphics().p("Auo1fIcugVMAAjArTI8uAWg");
	var mask_3_graphics_283 = new cjs.Graphics().p("Auo1pIcugVMAAjArnI8uAWg");
	var mask_3_graphics_284 = new cjs.Graphics().p("Auo1zIcugWMAAjAr9I8uAWg");
	var mask_3_graphics_285 = new cjs.Graphics().p("Auo19IcugWMAAjAsRI8uAWg");
	var mask_3_graphics_286 = new cjs.Graphics().p("Auo2IIcugVMAAkAslI8vAWg");
	var mask_3_graphics_287 = new cjs.Graphics().p("Auo2SIcugVMAAkAs5I8vAXg");
	var mask_3_graphics_288 = new cjs.Graphics().p("Aup2cIcvgWMAAkAtPI8vAWg");
	var mask_3_graphics_289 = new cjs.Graphics().p("Aup2mIcugWMAAlAtjI8vAWg");
	var mask_3_graphics_290 = new cjs.Graphics().p("Aup2xIcugVMAAlAt3I8vAWg");
	var mask_3_graphics_291 = new cjs.Graphics().p("Aup27IcugWMAAlAuNI8uAWg");
	var mask_3_graphics_292 = new cjs.Graphics().p("Aup3FIcugWMAAlAuhI8uAWg");
	var mask_3_graphics_293 = new cjs.Graphics().p("Aup3QIcugVMAAlAu1I8uAWg");
	var mask_3_graphics_294 = new cjs.Graphics().p("Aup3aIcugVMAAlAvJI8uAWg");
	var mask_3_graphics_295 = new cjs.Graphics().p("Auq3kIcvgWMAAmAvfI8vAVg");
	var mask_3_graphics_296 = new cjs.Graphics().p("Auq3uIcvgWMAAmAvzI8vAWg");
	var mask_3_graphics_297 = new cjs.Graphics().p("Auq35IcugVMAAnAwHI8vAWg");
	var mask_3_graphics_298 = new cjs.Graphics().p("Auq4DIcugVMAAnAwbI8vAWg");
	var mask_3_graphics_299 = new cjs.Graphics().p("Auq4NIcugWMAAnAwxI8uAVg");
	var mask_3_graphics_300 = new cjs.Graphics().p("Auq4XIcugWMAAnAxFI8uAWg");
	var mask_3_graphics_301 = new cjs.Graphics().p("Auq4iIcugVMAAnAxZI8uAWg");
	var mask_3_graphics_302 = new cjs.Graphics().p("Auq4sIcugVMAAnAxtI8uAWg");
	var mask_3_graphics_303 = new cjs.Graphics().p("Aur42IcvgWMAAoAyDI8vAVg");
	var mask_3_graphics_304 = new cjs.Graphics().p("Aur5AIcvgWMAAoAyXI8vAWg");
	var mask_3_graphics_305 = new cjs.Graphics().p("Aur5LIcugVMAApAyrI8uAWg");
	var mask_3_graphics_306 = new cjs.Graphics().p("Aur5VIcugVMAApAy/I8uAWg");
	var mask_3_graphics_307 = new cjs.Graphics().p("Aur5fIcugWMAApAzVI8uAWg");
	var mask_3_graphics_308 = new cjs.Graphics().p("Aur5qIcugVMAApAzpI8uAWg");
	var mask_3_graphics_309 = new cjs.Graphics().p("Aur50IcugVMAAqAz9I8vAWg");
	var mask_3_graphics_310 = new cjs.Graphics().p("Aur5+IcugVMAAqA0RI8vAXg");
	var mask_3_graphics_311 = new cjs.Graphics().p("Aus6IIcvgWMAAqA0nI8vAWg");
	var mask_3_graphics_312 = new cjs.Graphics().p("Aus6TIcvgVMAAqA07I8vAWg");
	var mask_3_graphics_313 = new cjs.Graphics().p("Aus6dIcugVMAArA1PI8uAWg");
	var mask_3_graphics_314 = new cjs.Graphics().p("Aus6nIcugVMAArA1kI8uAWg");
	var mask_3_graphics_315 = new cjs.Graphics().p("AiG1dIcugWMAArA15I8vAWg");
	var mask_3_graphics_316 = new cjs.Graphics().p("Aut71IcugWMAAtA4BI8vAWg");
	var mask_3_graphics_317 = new cjs.Graphics().p("AiH3lIcugWMAAtA6II8uAWg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(178).to({graphics:mask_3_graphics_178,x:172.9,y:66.9}).wait(1).to({graphics:mask_3_graphics_179,x:253.5,y:102.2}).wait(1).to({graphics:mask_3_graphics_180,x:253.6,y:103.3}).wait(1).to({graphics:mask_3_graphics_181,x:253.6,y:104.4}).wait(1).to({graphics:mask_3_graphics_182,x:253.6,y:105.5}).wait(1).to({graphics:mask_3_graphics_183,x:253.6,y:106.6}).wait(1).to({graphics:mask_3_graphics_184,x:253.6,y:107.6}).wait(1).to({graphics:mask_3_graphics_185,x:253.6,y:108.6}).wait(1).to({graphics:mask_3_graphics_186,x:253.6,y:109.6}).wait(1).to({graphics:mask_3_graphics_187,x:253.6,y:110.7}).wait(1).to({graphics:mask_3_graphics_188,x:253.6,y:111.7}).wait(1).to({graphics:mask_3_graphics_189,x:253.7,y:112.7}).wait(1).to({graphics:mask_3_graphics_190,x:253.7,y:113.7}).wait(1).to({graphics:mask_3_graphics_191,x:253.7,y:114.7}).wait(1).to({graphics:mask_3_graphics_192,x:253.7,y:115.8}).wait(1).to({graphics:mask_3_graphics_193,x:253.7,y:116.8}).wait(1).to({graphics:mask_3_graphics_194,x:253.7,y:117.8}).wait(1).to({graphics:mask_3_graphics_195,x:253.7,y:118.8}).wait(1).to({graphics:mask_3_graphics_196,x:253.7,y:119.9}).wait(1).to({graphics:mask_3_graphics_197,x:253.8,y:120.9}).wait(1).to({graphics:mask_3_graphics_198,x:253.8,y:121.9}).wait(1).to({graphics:mask_3_graphics_199,x:253.8,y:122.9}).wait(1).to({graphics:mask_3_graphics_200,x:253.8,y:124}).wait(1).to({graphics:mask_3_graphics_201,x:253.8,y:125}).wait(1).to({graphics:mask_3_graphics_202,x:253.8,y:126}).wait(1).to({graphics:mask_3_graphics_203,x:253.8,y:127}).wait(1).to({graphics:mask_3_graphics_204,x:253.8,y:128.1}).wait(1).to({graphics:mask_3_graphics_205,x:253.9,y:129.1}).wait(1).to({graphics:mask_3_graphics_206,x:253.9,y:130.1}).wait(1).to({graphics:mask_3_graphics_207,x:253.9,y:131.1}).wait(1).to({graphics:mask_3_graphics_208,x:253.9,y:132.1}).wait(1).to({graphics:mask_3_graphics_209,x:253.9,y:133.1}).wait(1).to({graphics:mask_3_graphics_210,x:253.9,y:134.2}).wait(1).to({graphics:mask_3_graphics_211,x:253.9,y:135.2}).wait(1).to({graphics:mask_3_graphics_212,x:254,y:136.2}).wait(1).to({graphics:mask_3_graphics_213,x:254,y:137.2}).wait(1).to({graphics:mask_3_graphics_214,x:254,y:138.3}).wait(1).to({graphics:mask_3_graphics_215,x:254,y:139.3}).wait(1).to({graphics:mask_3_graphics_216,x:254,y:140.3}).wait(1).to({graphics:mask_3_graphics_217,x:254,y:141.3}).wait(1).to({graphics:mask_3_graphics_218,x:254,y:142.4}).wait(1).to({graphics:mask_3_graphics_219,x:254,y:143.4}).wait(1).to({graphics:mask_3_graphics_220,x:254.1,y:144.4}).wait(1).to({graphics:mask_3_graphics_221,x:254.1,y:145.4}).wait(1).to({graphics:mask_3_graphics_222,x:254.1,y:146.5}).wait(1).to({graphics:mask_3_graphics_223,x:254.1,y:147.5}).wait(1).to({graphics:mask_3_graphics_224,x:254.1,y:148.5}).wait(1).to({graphics:mask_3_graphics_225,x:254.1,y:149.5}).wait(1).to({graphics:mask_3_graphics_226,x:254.1,y:150.5}).wait(1).to({graphics:mask_3_graphics_227,x:254.1,y:151.6}).wait(1).to({graphics:mask_3_graphics_228,x:254.2,y:152.6}).wait(1).to({graphics:mask_3_graphics_229,x:254.2,y:153.6}).wait(1).to({graphics:mask_3_graphics_230,x:254.2,y:154.6}).wait(1).to({graphics:mask_3_graphics_231,x:254.2,y:155.7}).wait(1).to({graphics:mask_3_graphics_232,x:254.2,y:156.7}).wait(1).to({graphics:mask_3_graphics_233,x:254.2,y:157.7}).wait(1).to({graphics:mask_3_graphics_234,x:254.2,y:158.7}).wait(1).to({graphics:mask_3_graphics_235,x:254.2,y:159.8}).wait(1).to({graphics:mask_3_graphics_236,x:254.3,y:160.8}).wait(1).to({graphics:mask_3_graphics_237,x:254.3,y:161.8}).wait(1).to({graphics:mask_3_graphics_238,x:254.3,y:162.8}).wait(1).to({graphics:mask_3_graphics_239,x:254.3,y:163.9}).wait(1).to({graphics:mask_3_graphics_240,x:254.3,y:164.9}).wait(1).to({graphics:mask_3_graphics_241,x:254.3,y:165.9}).wait(1).to({graphics:mask_3_graphics_242,x:254.3,y:166.9}).wait(1).to({graphics:mask_3_graphics_243,x:254.4,y:167.9}).wait(1).to({graphics:mask_3_graphics_244,x:254.4,y:169}).wait(1).to({graphics:mask_3_graphics_245,x:254.4,y:170}).wait(1).to({graphics:mask_3_graphics_246,x:254.4,y:171}).wait(1).to({graphics:mask_3_graphics_247,x:254.4,y:172}).wait(1).to({graphics:mask_3_graphics_248,x:254.4,y:173.1}).wait(1).to({graphics:mask_3_graphics_249,x:254.4,y:174.1}).wait(1).to({graphics:mask_3_graphics_250,x:254.4,y:175.1}).wait(1).to({graphics:mask_3_graphics_251,x:254.5,y:176.1}).wait(1).to({graphics:mask_3_graphics_252,x:254.5,y:177.1}).wait(1).to({graphics:mask_3_graphics_253,x:254.5,y:178.2}).wait(1).to({graphics:mask_3_graphics_254,x:254.5,y:179.2}).wait(1).to({graphics:mask_3_graphics_255,x:254.5,y:180.2}).wait(1).to({graphics:mask_3_graphics_256,x:254.5,y:181.2}).wait(1).to({graphics:mask_3_graphics_257,x:254.5,y:182.2}).wait(1).to({graphics:mask_3_graphics_258,x:254.5,y:183.3}).wait(1).to({graphics:mask_3_graphics_259,x:254.6,y:184.3}).wait(1).to({graphics:mask_3_graphics_260,x:254.6,y:185.3}).wait(1).to({graphics:mask_3_graphics_261,x:254.6,y:186.3}).wait(1).to({graphics:mask_3_graphics_262,x:254.6,y:187.4}).wait(1).to({graphics:mask_3_graphics_263,x:254.6,y:188.4}).wait(1).to({graphics:mask_3_graphics_264,x:254.6,y:189.4}).wait(1).to({graphics:mask_3_graphics_265,x:254.6,y:190.4}).wait(1).to({graphics:mask_3_graphics_266,x:254.7,y:191.5}).wait(1).to({graphics:mask_3_graphics_267,x:254.7,y:192.5}).wait(1).to({graphics:mask_3_graphics_268,x:254.7,y:193.5}).wait(1).to({graphics:mask_3_graphics_269,x:254.7,y:194.5}).wait(1).to({graphics:mask_3_graphics_270,x:254.7,y:195.6}).wait(1).to({graphics:mask_3_graphics_271,x:254.7,y:196.6}).wait(1).to({graphics:mask_3_graphics_272,x:254.7,y:197.6}).wait(1).to({graphics:mask_3_graphics_273,x:254.7,y:198.6}).wait(1).to({graphics:mask_3_graphics_274,x:254.8,y:199.6}).wait(1).to({graphics:mask_3_graphics_275,x:254.8,y:200.7}).wait(1).to({graphics:mask_3_graphics_276,x:254.8,y:201.7}).wait(1).to({graphics:mask_3_graphics_277,x:254.8,y:202.7}).wait(1).to({graphics:mask_3_graphics_278,x:254.8,y:203.7}).wait(1).to({graphics:mask_3_graphics_279,x:254.8,y:204.8}).wait(1).to({graphics:mask_3_graphics_280,x:254.8,y:205.8}).wait(1).to({graphics:mask_3_graphics_281,x:254.8,y:206.8}).wait(1).to({graphics:mask_3_graphics_282,x:254.9,y:207.8}).wait(1).to({graphics:mask_3_graphics_283,x:254.9,y:208.9}).wait(1).to({graphics:mask_3_graphics_284,x:254.9,y:209.9}).wait(1).to({graphics:mask_3_graphics_285,x:254.9,y:210.9}).wait(1).to({graphics:mask_3_graphics_286,x:254.9,y:211.9}).wait(1).to({graphics:mask_3_graphics_287,x:254.9,y:213}).wait(1).to({graphics:mask_3_graphics_288,x:254.9,y:214}).wait(1).to({graphics:mask_3_graphics_289,x:255,y:215}).wait(1).to({graphics:mask_3_graphics_290,x:255,y:216}).wait(1).to({graphics:mask_3_graphics_291,x:255,y:217}).wait(1).to({graphics:mask_3_graphics_292,x:255,y:218.1}).wait(1).to({graphics:mask_3_graphics_293,x:255,y:219.1}).wait(1).to({graphics:mask_3_graphics_294,x:255,y:220.1}).wait(1).to({graphics:mask_3_graphics_295,x:255,y:221.1}).wait(1).to({graphics:mask_3_graphics_296,x:255,y:222.1}).wait(1).to({graphics:mask_3_graphics_297,x:255.1,y:223.2}).wait(1).to({graphics:mask_3_graphics_298,x:255.1,y:224.2}).wait(1).to({graphics:mask_3_graphics_299,x:255.1,y:225.2}).wait(1).to({graphics:mask_3_graphics_300,x:255.1,y:226.2}).wait(1).to({graphics:mask_3_graphics_301,x:255.1,y:227.3}).wait(1).to({graphics:mask_3_graphics_302,x:255.1,y:228.3}).wait(1).to({graphics:mask_3_graphics_303,x:255.1,y:229.3}).wait(1).to({graphics:mask_3_graphics_304,x:255.1,y:230.3}).wait(1).to({graphics:mask_3_graphics_305,x:255.2,y:231.4}).wait(1).to({graphics:mask_3_graphics_306,x:255.2,y:232.4}).wait(1).to({graphics:mask_3_graphics_307,x:255.2,y:233.4}).wait(1).to({graphics:mask_3_graphics_308,x:255.2,y:234.4}).wait(1).to({graphics:mask_3_graphics_309,x:255.2,y:235.4}).wait(1).to({graphics:mask_3_graphics_310,x:255.2,y:236.5}).wait(1).to({graphics:mask_3_graphics_311,x:255.2,y:237.5}).wait(1).to({graphics:mask_3_graphics_312,x:255.2,y:238.5}).wait(1).to({graphics:mask_3_graphics_313,x:255.3,y:239.5}).wait(1).to({graphics:mask_3_graphics_314,x:255.3,y:240.6}).wait(1).to({graphics:mask_3_graphics_315,x:174.7,y:207.6}).wait(1).to({graphics:mask_3_graphics_316,x:255.4,y:248.3}).wait(1).to({graphics:mask_3_graphics_317,x:174.8,y:221.1}).wait(269));

	// Layer 8
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(20,1,1).p("ANR2sQgggegtgYQgggMgfgDQjSgRjcGaQjtG5l8OTIACgYQlxI8h0GnQhIEHB7A9");
	this.shape_4.setTransform(264.2,273.1);
	this.shape_4._off = true;

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(178).to({_off:false},0).wait(408));

	// Layer 7 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_162 = new cjs.Graphics().p("AiaD1IAAnpIE1AAIAAHpg");
	var mask_4_graphics_163 = new cjs.Graphics().p("AikD1IAAnpIFJAAIAAHpg");
	var mask_4_graphics_164 = new cjs.Graphics().p("AiuD1IAAnpIFdAAIAAHpg");
	var mask_4_graphics_165 = new cjs.Graphics().p("Ai4D1IAAnpIFxAAIAAHpg");
	var mask_4_graphics_166 = new cjs.Graphics().p("AjCD1IAAnpIGFAAIAAHpg");
	var mask_4_graphics_167 = new cjs.Graphics().p("AjMD1IAAnpIGZAAIAAHpg");
	var mask_4_graphics_168 = new cjs.Graphics().p("AjWD1IAAnpIGtAAIAAHpg");
	var mask_4_graphics_169 = new cjs.Graphics().p("AjgD1IAAnpIHBAAIAAHpg");
	var mask_4_graphics_170 = new cjs.Graphics().p("AjqD1IAAnpIHVAAIAAHpg");
	var mask_4_graphics_171 = new cjs.Graphics().p("Aj0D1IAAnpIHpAAIAAHpg");
	var mask_4_graphics_172 = new cjs.Graphics().p("Aj+D1IAAnpIH9AAIAAHpg");
	var mask_4_graphics_173 = new cjs.Graphics().p("AkJD1IAAnpIISAAIAAHpg");
	var mask_4_graphics_174 = new cjs.Graphics().p("AkTD1IAAnpIImAAIAAHpg");
	var mask_4_graphics_175 = new cjs.Graphics().p("AkdD1IAAnpII6AAIAAHpg");
	var mask_4_graphics_176 = new cjs.Graphics().p("AkmD1IAAnpIJNAAIAAHpg");
	var mask_4_graphics_177 = new cjs.Graphics().p("AkwD1IAAnpIJhAAIAAHpg");
	var mask_4_graphics_178 = new cjs.Graphics().p("ATmLaIAAnqIJ3AAIAAHqg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(162).to({graphics:mask_4_graphics_162,x:361.5,y:121.6}).wait(1).to({graphics:mask_4_graphics_163,x:360.5,y:121.6}).wait(1).to({graphics:mask_4_graphics_164,x:359.5,y:121.6}).wait(1).to({graphics:mask_4_graphics_165,x:358.5,y:121.6}).wait(1).to({graphics:mask_4_graphics_166,x:357.5,y:121.6}).wait(1).to({graphics:mask_4_graphics_167,x:356.5,y:121.6}).wait(1).to({graphics:mask_4_graphics_168,x:355.5,y:121.6}).wait(1).to({graphics:mask_4_graphics_169,x:354.5,y:121.6}).wait(1).to({graphics:mask_4_graphics_170,x:353.5,y:121.6}).wait(1).to({graphics:mask_4_graphics_171,x:352.5,y:121.6}).wait(1).to({graphics:mask_4_graphics_172,x:351.5,y:121.6}).wait(1).to({graphics:mask_4_graphics_173,x:350.5,y:121.6}).wait(1).to({graphics:mask_4_graphics_174,x:349.5,y:121.6}).wait(1).to({graphics:mask_4_graphics_175,x:348.5,y:121.6}).wait(1).to({graphics:mask_4_graphics_176,x:347.5,y:121.6}).wait(1).to({graphics:mask_4_graphics_177,x:346.5,y:121.6}).wait(1).to({graphics:mask_4_graphics_178,x:188.5,y:73}).wait(408));

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(20,1,1).p("ANR21QgggegtgYQgggNgfgCQjSgRjcGaQjtG5l8OTIACgYQlxI8h0GmQh2GvGVhvQGUhvERoWQERoVCii1");
	this.shape_5.setTransform(264.2,274);
	this.shape_5._off = true;

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(162).to({_off:false},0).wait(424));

	// Layer 16
	this.instance_3 = new lib.ar1("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(156.3,236.4,1,1,0,0,0,-0.8,0.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).wait(577));

	// Layer 6 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_119 = new cjs.Graphics().p("AVcKMIIJkwIChEWIoIEvg");
	var mask_5_graphics_120 = new cjs.Graphics().p("AlXAIIIGkuICpEfIoJEug");
	var mask_5_graphics_121 = new cjs.Graphics().p("AlaAEIIEkwICxEqIoKEvg");
	var mask_5_graphics_122 = new cjs.Graphics().p("AldAAIIDkxIC4EyIoLExg");
	var mask_5_graphics_123 = new cjs.Graphics().p("AlggEIIBkyIDAE8IoNExg");
	var mask_5_graphics_124 = new cjs.Graphics().p("AlkgJIIAkzIDJFHIoPExg");
	var mask_5_graphics_125 = new cjs.Graphics().p("AlmgOIH+kzIDQFRIoPEyg");
	var mask_5_graphics_126 = new cjs.Graphics().p("AlqgSIH+k0IDXFaIoREzg");
	var mask_5_graphics_127 = new cjs.Graphics().p("AltgXIH8k1IDfFlIoSEzg");
	var mask_5_graphics_128 = new cjs.Graphics().p("AlvgcIH5k1IDnFvIoTE0g");
	var mask_5_graphics_129 = new cjs.Graphics().p("AlyggIH3k2IDvF4IoVE1g");
	var mask_5_graphics_130 = new cjs.Graphics().p("Al2glIH2k2ID3GCIoWE1g");
	var mask_5_graphics_131 = new cjs.Graphics().p("Al4gpIH0k4ID+GNIoXE1g");
	var mask_5_graphics_132 = new cjs.Graphics().p("Al8guIHzk4IEGGXIoYE1g");
	var mask_5_graphics_133 = new cjs.Graphics().p("Al/gzIHyk4IENGhIoZE2g");
	var mask_5_graphics_134 = new cjs.Graphics().p("AmCg3IHwk5IEVGrIoaE2g");
	var mask_5_graphics_135 = new cjs.Graphics().p("AmFg8IHuk5IEdG0IobE3g");
	var mask_5_graphics_136 = new cjs.Graphics().p("AmIhAIHsk6IElG+IodE3g");
	var mask_5_graphics_137 = new cjs.Graphics().p("AmLhFIHrk7IEsHJIoeE4g");
	var mask_5_graphics_138 = new cjs.Graphics().p("AmOhJIHpk8IE0HTIofE4g");
	var mask_5_graphics_139 = new cjs.Graphics().p("AmRhOIHok8IE7HcIohE6g");
	var mask_5_graphics_140 = new cjs.Graphics().p("AmUhTIHmk9IFDHnIohE6g");
	var mask_5_graphics_141 = new cjs.Graphics().p("AmXhYIHkk9IFLHwIoiE7g");
	var mask_5_graphics_142 = new cjs.Graphics().p("AmahcIHjk+IFSH6IokE7g");
	var mask_5_graphics_143 = new cjs.Graphics().p("AmdhhIHhk/IFaIFIolE8g");
	var mask_5_graphics_144 = new cjs.Graphics().p("AmghlIHflAIFiIPIomE8g");
	var mask_5_graphics_145 = new cjs.Graphics().p("AmjhpIHelBIFpIZIonE8g");
	var mask_5_graphics_146 = new cjs.Graphics().p("AmwiHIHzk4IFuJKIoYE1g");
	var mask_5_graphics_147 = new cjs.Graphics().p("ASMElIIIkuIFzJ7IoJEwg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(119).to({graphics:mask_5_graphics_119,x:205.4,y:92.9}).wait(1).to({graphics:mask_5_graphics_120,x:376.5,y:156.3}).wait(1).to({graphics:mask_5_graphics_121,x:376.2,y:155.7}).wait(1).to({graphics:mask_5_graphics_122,x:375.9,y:155.2}).wait(1).to({graphics:mask_5_graphics_123,x:375.6,y:154.7}).wait(1).to({graphics:mask_5_graphics_124,x:375.3,y:154.2}).wait(1).to({graphics:mask_5_graphics_125,x:375,y:153.6}).wait(1).to({graphics:mask_5_graphics_126,x:374.7,y:153.1}).wait(1).to({graphics:mask_5_graphics_127,x:374.4,y:152.6}).wait(1).to({graphics:mask_5_graphics_128,x:374.1,y:152.1}).wait(1).to({graphics:mask_5_graphics_129,x:373.8,y:151.6}).wait(1).to({graphics:mask_5_graphics_130,x:373.5,y:151}).wait(1).to({graphics:mask_5_graphics_131,x:373.2,y:150.5}).wait(1).to({graphics:mask_5_graphics_132,x:372.9,y:150}).wait(1).to({graphics:mask_5_graphics_133,x:372.6,y:149.5}).wait(1).to({graphics:mask_5_graphics_134,x:372.3,y:149}).wait(1).to({graphics:mask_5_graphics_135,x:372,y:148.4}).wait(1).to({graphics:mask_5_graphics_136,x:371.7,y:147.9}).wait(1).to({graphics:mask_5_graphics_137,x:371.4,y:147.4}).wait(1).to({graphics:mask_5_graphics_138,x:371.1,y:146.9}).wait(1).to({graphics:mask_5_graphics_139,x:370.8,y:146.4}).wait(1).to({graphics:mask_5_graphics_140,x:370.5,y:145.8}).wait(1).to({graphics:mask_5_graphics_141,x:370.1,y:145.3}).wait(1).to({graphics:mask_5_graphics_142,x:369.8,y:144.8}).wait(1).to({graphics:mask_5_graphics_143,x:369.5,y:144.3}).wait(1).to({graphics:mask_5_graphics_144,x:369.2,y:143.7}).wait(1).to({graphics:mask_5_graphics_145,x:368.9,y:143.2}).wait(1).to({graphics:mask_5_graphics_146,x:367.7,y:141.1}).wait(1).to({graphics:mask_5_graphics_147,x:205.5,y:93}).wait(439));

	// Layer 5
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(20,1,1).p("AmBKGQH5nmHkoYQHloalTi6AmMKQQAAABgBABQAGgGAGgGAmMKQQAHgHAGgGQAAABgCACAt5RNQCZhvFUlO");
	this.shape_6.setTransform(267,232.9);
	this.shape_6._off = true;

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(119).to({_off:false},0).wait(467));

	// Layer 4 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_9 = new cjs.Graphics().p("AHHXbICcibIFuFxIicCbg");
	var mask_6_graphics_10 = new cjs.Graphics().p("AkMhhICtisIFtFwIiuCrg");
	var mask_6_graphics_11 = new cjs.Graphics().p("AkUhZIC9i8IFsFvIi9C8g");
	var mask_6_graphics_12 = new cjs.Graphics().p("AkdhRIDOjMIFtFvIjODMg");
	var mask_6_graphics_13 = new cjs.Graphics().p("AklhJIDejcIFtFvIjeDcg");
	var mask_6_graphics_14 = new cjs.Graphics().p("AkthBIDujsIFtFvIjuDsg");
	var mask_6_graphics_15 = new cjs.Graphics().p("Ak1g5ID+j9IFtFwIj+D8g");
	var mask_6_graphics_16 = new cjs.Graphics().p("Ak9gxIEOkNIFtFwIkOEMg");
	var mask_6_graphics_17 = new cjs.Graphics().p("AlFgpIEekcIFtFvIkeEcg");
	var mask_6_graphics_18 = new cjs.Graphics().p("AlNghIEuktIFtFwIkvEtg");
	var mask_6_graphics_19 = new cjs.Graphics().p("AlWgZIFAk9IFtFwIlAE9g");
	var mask_6_graphics_20 = new cjs.Graphics().p("AlegRIFQlNIFtFvIlQFOg");
	var mask_6_graphics_21 = new cjs.Graphics().p("AlmgJIFgldIFtFvIlgFeg");
	var mask_6_graphics_22 = new cjs.Graphics().p("AluAAIFvluIFuFvIlvFug");
	var mask_6_graphics_23 = new cjs.Graphics().p("Al2AHIF/l9IFuFwIl/F9g");
	var mask_6_graphics_24 = new cjs.Graphics().p("Al+APIGPmNIFuFwImPGNg");
	var mask_6_graphics_25 = new cjs.Graphics().p("AmGAXIGfmdIFvFwImhGeg");
	var mask_6_graphics_26 = new cjs.Graphics().p("AmOAfIGwmtIFtFwImwGug");
	var mask_6_graphics_27 = new cjs.Graphics().p("AmXAnIHBm+IFuFxInBG+g");
	var mask_6_graphics_28 = new cjs.Graphics().p("AmfAvIHRnOIFuFxInRHOg");
	var mask_6_graphics_29 = new cjs.Graphics().p("AmnA3IHhneIFuFxInhHeg");
	var mask_6_graphics_30 = new cjs.Graphics().p("AmwA/IHznuIFtFxInxHug");
	var mask_6_graphics_31 = new cjs.Graphics().p("Am4BHIICn+IFvFxIoCH+g");
	var mask_6_graphics_32 = new cjs.Graphics().p("AnABPIIToOIFuFxIoTIOg");
	var mask_6_graphics_33 = new cjs.Graphics().p("AnIBXIIjoeIFuFxIojIeg");
	var mask_6_graphics_34 = new cjs.Graphics().p("AnQBfIIzouIFuFwIozIvg");
	var mask_6_graphics_35 = new cjs.Graphics().p("AnYBoIJDo/IFuFwIpDI/g");
	var mask_6_graphics_36 = new cjs.Graphics().p("AngBwIJTpPIFuFwIpTJPg");
	var mask_6_graphics_37 = new cjs.Graphics().p("AnpB4IJkpfIFvFwIpkJfg");
	var mask_6_graphics_38 = new cjs.Graphics().p("AnxCAIJ0pvIFvFwIp0Jvg");
	var mask_6_graphics_39 = new cjs.Graphics().p("An5CIIKFp/IFuFwIqFKAg");
	var mask_6_graphics_40 = new cjs.Graphics().p("AoBCQIKVqPIFuFwIqVKQg");
	var mask_6_graphics_41 = new cjs.Graphics().p("AoJCYIKlqgIFuFxIqlKgg");
	var mask_6_graphics_42 = new cjs.Graphics().p("AoRChIK1qxIFuFwIq1Kxg");
	var mask_6_graphics_43 = new cjs.Graphics().p("AoZCpILFrBIFuFwIrFLBg");
	var mask_6_graphics_44 = new cjs.Graphics().p("AohCxILVrRIFuFxIrVLQg");
	var mask_6_graphics_45 = new cjs.Graphics().p("AoqC5ILnrhIFtFxIrlLgg");
	var mask_6_graphics_46 = new cjs.Graphics().p("AoyDBIL3rxIFuFwIr3Lxg");
	var mask_6_graphics_47 = new cjs.Graphics().p("Ao6DJIMHsBIFuFwIsHMBg");
	var mask_6_graphics_48 = new cjs.Graphics().p("ApCDRIMXsRIFuFwIsXMRg");
	var mask_6_graphics_49 = new cjs.Graphics().p("ApKDZIMnsiIFuFxIsnMhg");
	var mask_6_graphics_50 = new cjs.Graphics().p("ApSDhIM3syIFuFxIs3Mxg");
	var mask_6_graphics_51 = new cjs.Graphics().p("ApaDpINHtBIFuFwItHNBg");
	var mask_6_graphics_52 = new cjs.Graphics().p("ApjDxINYtSIFvFxItYNSg");
	var mask_6_graphics_53 = new cjs.Graphics().p("AprD5INotiIFvFxItoNig");
	var mask_6_graphics_54 = new cjs.Graphics().p("ApzEBIN5tyIFuFxIt5Nyg");
	var mask_6_graphics_55 = new cjs.Graphics().p("Ap7EJIOJuCIFuFxIuJOCg");
	var mask_6_graphics_56 = new cjs.Graphics().p("AqDESIOZuTIFuFwIuZOTg");
	var mask_6_graphics_57 = new cjs.Graphics().p("AqLEaIOpujIFuFwIupOjg");
	var mask_6_graphics_58 = new cjs.Graphics().p("AqTEiIO5uzIFuFwIu5Ozg");
	var mask_6_graphics_59 = new cjs.Graphics().p("AqcEqIPLvDIFuFwIvKPDg");
	var mask_6_graphics_60 = new cjs.Graphics().p("AqkEyIPbvTIFtFwIvZPTg");
	var mask_6_graphics_61 = new cjs.Graphics().p("AqsE6IPrvjIFuFwIvrPjg");
	var mask_6_graphics_62 = new cjs.Graphics().p("Aq0FCIP7vzIFuFwIv7Pzg");
	var mask_6_graphics_63 = new cjs.Graphics().p("Aq8FKIQLwEIFuFxIwLQDg");
	var mask_6_graphics_64 = new cjs.Graphics().p("ArEFSIQbwUIFuFxIwbQUg");
	var mask_6_graphics_65 = new cjs.Graphics().p("ArMFaIQrwkIFuFxIwsQkg");
	var mask_6_graphics_66 = new cjs.Graphics().p("ArVFiIQ9w0IFuFxIw9Q0g");
	var mask_6_graphics_67 = new cjs.Graphics().p("ArdFqIRNxEIFuFxIxNREg");
	var mask_6_graphics_68 = new cjs.Graphics().p("ArlFyIRdxUIFuFwIxdRVg");
	var mask_6_graphics_69 = new cjs.Graphics().p("ArtF6IRtxkIFuFwIxtRlg");
	var mask_6_graphics_70 = new cjs.Graphics().p("Ar1GDIR9x1IFuFwIx9R1g");
	var mask_6_graphics_71 = new cjs.Graphics().p("Ar9GLISNyFIFuFwIyNSFg");
	var mask_6_graphics_72 = new cjs.Graphics().p("AsFGTISdyVIFvFwIyfSVg");
	var mask_6_graphics_73 = new cjs.Graphics().p("AsNGbISuylIFtFwIyuSmg");
	var mask_6_graphics_74 = new cjs.Graphics().p("AsWGjIS/y1IFuFwIy/S2g");
	var mask_6_graphics_75 = new cjs.Graphics().p("AseGrITPzGIFuFxIzPTGg");
	var mask_6_graphics_76 = new cjs.Graphics().p("AsmGzITfzWIFuFxIzfTWg");
	var mask_6_graphics_77 = new cjs.Graphics().p("AsuG7ITvzmIFuFxIzvTmg");
	var mask_6_graphics_78 = new cjs.Graphics().p("As2HDIT/z2IFuFxIz/T2g");
	var mask_6_graphics_79 = new cjs.Graphics().p("As+HLIUQ0GIFtFxI0QUGg");
	var mask_6_graphics_80 = new cjs.Graphics().p("AtGHTIUf0WIFuFwI0gUXg");
	var mask_6_graphics_81 = new cjs.Graphics().p("AtPHbIUx0mIFuFxI0xUmg");
	var mask_6_graphics_82 = new cjs.Graphics().p("AtXHjIVB02IFuFxI1BU2g");
	var mask_6_graphics_83 = new cjs.Graphics().p("AtfHsIVR1HIFuFwI1RVHg");
	var mask_6_graphics_84 = new cjs.Graphics().p("AtnH0IVh1XIFuFwI1hVXg");
	var mask_6_graphics_85 = new cjs.Graphics().p("AtvH8IVx1nIFuFwI1xVng");
	var mask_6_graphics_86 = new cjs.Graphics().p("At3IEIWB13IFvFwI2DV3g");
	var mask_6_graphics_87 = new cjs.Graphics().p("At/IMIWR2IIFvFxI2TWIg");
	var mask_6_graphics_88 = new cjs.Graphics().p("AuIIUIWj2YIFuFxI2jWYg");
	var mask_6_graphics_89 = new cjs.Graphics().p("AuQIcIWz2oIFuFxI2zWog");
	var mask_6_graphics_90 = new cjs.Graphics().p("AuYIlIXD25IFuFwI3DW5g");
	var mask_6_graphics_91 = new cjs.Graphics().p("AugItIXT3JIFuFwI3TXJg");
	var mask_6_graphics_92 = new cjs.Graphics().p("AuoI1IXj3ZIFuFwI3jXZg");
	var mask_6_graphics_93 = new cjs.Graphics().p("AuwI9IXz3pIFvFxI31Xog");
	var mask_6_graphics_94 = new cjs.Graphics().p("Au4JFIYE35IFtFwI4EX5g");
	var mask_6_graphics_95 = new cjs.Graphics().p("AvBJNIYV4JIFuFwI4VYJg");
	var mask_6_graphics_96 = new cjs.Graphics().p("AvJJVIYl4ZIFuFwI4lYZg");
	var mask_6_graphics_97 = new cjs.Graphics().p("AvRJdIY14qIFuFxI41Ypg");
	var mask_6_graphics_98 = new cjs.Graphics().p("AvZJlIZF46IFuFxI5FY5g");
	var mask_6_graphics_99 = new cjs.Graphics().p("AvhJtIZV5KIFuFxI5VZJg");
	var mask_6_graphics_100 = new cjs.Graphics().p("AvpJ1IZl5ZIFuFwI5lZZg");
	var mask_6_graphics_101 = new cjs.Graphics().p("AvyJ9IZ35qIFuFxI53Zqg");
	var mask_6_graphics_102 = new cjs.Graphics().p("Av6KFIaH56IFuFxI6HZ6g");
	var mask_6_graphics_103 = new cjs.Graphics().p("AwCKNIaX6KIFuFxI6XaKg");
	var mask_6_graphics_104 = new cjs.Graphics().p("AwKKWIan6bIFuFxI6naag");
	var mask_6_graphics_105 = new cjs.Graphics().p("AwSKeIa36rIFuFwI63arg");
	var mask_6_graphics_106 = new cjs.Graphics().p("AwbKmIbI67IFvFwI7Ia7g");
	var mask_6_graphics_107 = new cjs.Graphics().p("AwjKuIbZ7LIFtFwI7XbLg");
	var mask_6_graphics_108 = new cjs.Graphics().p("AwrK2Ibp7bIFuFwI7pbbg");
	var mask_6_graphics_109 = new cjs.Graphics().p("AwzK+Ib57sIFuFxI75bsg");
	var mask_6_graphics_110 = new cjs.Graphics().p("Aw7LGIcJ78IFuFxI8Jb8g");
	var mask_6_graphics_111 = new cjs.Graphics().p("AxDLOIcZ8MIFuFxI8ZcMg");
	var mask_6_graphics_112 = new cjs.Graphics().p("AxLLWIcp8cIFuFxI8pccg");
	var mask_6_graphics_113 = new cjs.Graphics().p("AxULeIc78sIFtFxI85csg");
	var mask_6_graphics_114 = new cjs.Graphics().p("AxcLmIdK88IFuFwI9Jc9g");
	var mask_6_graphics_115 = new cjs.Graphics().p("AxkLuIdb9MIFuFxI9bdMg");
	var mask_6_graphics_116 = new cjs.Graphics().p("AxsL2Idr9cIFuFxI9rdcg");
	var mask_6_graphics_117 = new cjs.Graphics().p("Ax0L+Id79sIFuFwI97dtg");
	var mask_6_graphics_118 = new cjs.Graphics().p("Ax8MHIeL99IFuFwI+Ld9g");
	var mask_6_graphics_119 = new cjs.Graphics().p("Am5XdIec+NIFuFwI+ceNg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_6_graphics_9,x:97.7,y:186.8}).wait(1).to({graphics:mask_6_graphics_10,x:170.2,y:346.6}).wait(1).to({graphics:mask_6_graphics_11,x:171,y:345.8}).wait(1).to({graphics:mask_6_graphics_12,x:171.8,y:345}).wait(1).to({graphics:mask_6_graphics_13,x:172.6,y:344.2}).wait(1).to({graphics:mask_6_graphics_14,x:173.5,y:343.4}).wait(1).to({graphics:mask_6_graphics_15,x:174.3,y:342.6}).wait(1).to({graphics:mask_6_graphics_16,x:175.1,y:341.8}).wait(1).to({graphics:mask_6_graphics_17,x:175.9,y:341}).wait(1).to({graphics:mask_6_graphics_18,x:176.7,y:340.1}).wait(1).to({graphics:mask_6_graphics_19,x:177.5,y:339.3}).wait(1).to({graphics:mask_6_graphics_20,x:178.3,y:338.6}).wait(1).to({graphics:mask_6_graphics_21,x:179.2,y:337.8}).wait(1).to({graphics:mask_6_graphics_22,x:180,y:336.9}).wait(1).to({graphics:mask_6_graphics_23,x:180.8,y:336.1}).wait(1).to({graphics:mask_6_graphics_24,x:181.6,y:335.3}).wait(1).to({graphics:mask_6_graphics_25,x:182.4,y:334.5}).wait(1).to({graphics:mask_6_graphics_26,x:183.2,y:333.7}).wait(1).to({graphics:mask_6_graphics_27,x:184,y:332.9}).wait(1).to({graphics:mask_6_graphics_28,x:184.8,y:332.1}).wait(1).to({graphics:mask_6_graphics_29,x:185.6,y:331.3}).wait(1).to({graphics:mask_6_graphics_30,x:186.5,y:330.5}).wait(1).to({graphics:mask_6_graphics_31,x:187.3,y:329.7}).wait(1).to({graphics:mask_6_graphics_32,x:188.1,y:328.9}).wait(1).to({graphics:mask_6_graphics_33,x:188.9,y:328.1}).wait(1).to({graphics:mask_6_graphics_34,x:189.7,y:327.3}).wait(1).to({graphics:mask_6_graphics_35,x:190.5,y:326.4}).wait(1).to({graphics:mask_6_graphics_36,x:191.3,y:325.6}).wait(1).to({graphics:mask_6_graphics_37,x:192.2,y:324.8}).wait(1).to({graphics:mask_6_graphics_38,x:193,y:324}).wait(1).to({graphics:mask_6_graphics_39,x:193.8,y:323.2}).wait(1).to({graphics:mask_6_graphics_40,x:194.6,y:322.4}).wait(1).to({graphics:mask_6_graphics_41,x:195.4,y:321.6}).wait(1).to({graphics:mask_6_graphics_42,x:196.2,y:320.8}).wait(1).to({graphics:mask_6_graphics_43,x:197,y:320}).wait(1).to({graphics:mask_6_graphics_44,x:197.8,y:319.2}).wait(1).to({graphics:mask_6_graphics_45,x:198.7,y:318.4}).wait(1).to({graphics:mask_6_graphics_46,x:199.5,y:317.6}).wait(1).to({graphics:mask_6_graphics_47,x:200.3,y:316.8}).wait(1).to({graphics:mask_6_graphics_48,x:201.1,y:316}).wait(1).to({graphics:mask_6_graphics_49,x:201.9,y:315.2}).wait(1).to({graphics:mask_6_graphics_50,x:202.7,y:314.4}).wait(1).to({graphics:mask_6_graphics_51,x:203.5,y:313.6}).wait(1).to({graphics:mask_6_graphics_52,x:204.4,y:312.7}).wait(1).to({graphics:mask_6_graphics_53,x:205.2,y:311.9}).wait(1).to({graphics:mask_6_graphics_54,x:206,y:311.1}).wait(1).to({graphics:mask_6_graphics_55,x:206.8,y:310.3}).wait(1).to({graphics:mask_6_graphics_56,x:207.6,y:309.5}).wait(1).to({graphics:mask_6_graphics_57,x:208.4,y:308.7}).wait(1).to({graphics:mask_6_graphics_58,x:209.2,y:307.9}).wait(1).to({graphics:mask_6_graphics_59,x:210.1,y:307.1}).wait(1).to({graphics:mask_6_graphics_60,x:210.9,y:306.3}).wait(1).to({graphics:mask_6_graphics_61,x:211.7,y:305.5}).wait(1).to({graphics:mask_6_graphics_62,x:212.5,y:304.7}).wait(1).to({graphics:mask_6_graphics_63,x:213.3,y:303.9}).wait(1).to({graphics:mask_6_graphics_64,x:214.1,y:303.1}).wait(1).to({graphics:mask_6_graphics_65,x:214.9,y:302.3}).wait(1).to({graphics:mask_6_graphics_66,x:215.7,y:301.5}).wait(1).to({graphics:mask_6_graphics_67,x:216.5,y:300.7}).wait(1).to({graphics:mask_6_graphics_68,x:217.4,y:299.9}).wait(1).to({graphics:mask_6_graphics_69,x:218.2,y:299.1}).wait(1).to({graphics:mask_6_graphics_70,x:219,y:298.2}).wait(1).to({graphics:mask_6_graphics_71,x:219.8,y:297.4}).wait(1).to({graphics:mask_6_graphics_72,x:220.6,y:296.6}).wait(1).to({graphics:mask_6_graphics_73,x:221.4,y:295.8}).wait(1).to({graphics:mask_6_graphics_74,x:222.2,y:295}).wait(1).to({graphics:mask_6_graphics_75,x:223.1,y:294.2}).wait(1).to({graphics:mask_6_graphics_76,x:223.9,y:293.4}).wait(1).to({graphics:mask_6_graphics_77,x:224.7,y:292.6}).wait(1).to({graphics:mask_6_graphics_78,x:225.5,y:291.8}).wait(1).to({graphics:mask_6_graphics_79,x:226.3,y:291}).wait(1).to({graphics:mask_6_graphics_80,x:227.1,y:290.2}).wait(1).to({graphics:mask_6_graphics_81,x:227.9,y:289.4}).wait(1).to({graphics:mask_6_graphics_82,x:228.7,y:288.6}).wait(1).to({graphics:mask_6_graphics_83,x:229.6,y:287.7}).wait(1).to({graphics:mask_6_graphics_84,x:230.4,y:286.9}).wait(1).to({graphics:mask_6_graphics_85,x:231.2,y:286.1}).wait(1).to({graphics:mask_6_graphics_86,x:232,y:285.3}).wait(1).to({graphics:mask_6_graphics_87,x:232.8,y:284.5}).wait(1).to({graphics:mask_6_graphics_88,x:233.6,y:283.7}).wait(1).to({graphics:mask_6_graphics_89,x:234.4,y:282.9}).wait(1).to({graphics:mask_6_graphics_90,x:235.3,y:282.1}).wait(1).to({graphics:mask_6_graphics_91,x:236.1,y:281.3}).wait(1).to({graphics:mask_6_graphics_92,x:236.9,y:280.5}).wait(1).to({graphics:mask_6_graphics_93,x:237.7,y:279.7}).wait(1).to({graphics:mask_6_graphics_94,x:238.5,y:278.9}).wait(1).to({graphics:mask_6_graphics_95,x:239.3,y:278.1}).wait(1).to({graphics:mask_6_graphics_96,x:240.1,y:277.3}).wait(1).to({graphics:mask_6_graphics_97,x:241,y:276.5}).wait(1).to({graphics:mask_6_graphics_98,x:241.8,y:275.7}).wait(1).to({graphics:mask_6_graphics_99,x:242.6,y:274.9}).wait(1).to({graphics:mask_6_graphics_100,x:243.4,y:274.1}).wait(1).to({graphics:mask_6_graphics_101,x:244.2,y:273.2}).wait(1).to({graphics:mask_6_graphics_102,x:245,y:272.4}).wait(1).to({graphics:mask_6_graphics_103,x:245.8,y:271.6}).wait(1).to({graphics:mask_6_graphics_104,x:246.6,y:270.8}).wait(1).to({graphics:mask_6_graphics_105,x:247.4,y:270}).wait(1).to({graphics:mask_6_graphics_106,x:248.3,y:269.2}).wait(1).to({graphics:mask_6_graphics_107,x:249.1,y:268.4}).wait(1).to({graphics:mask_6_graphics_108,x:249.9,y:267.6}).wait(1).to({graphics:mask_6_graphics_109,x:250.7,y:266.8}).wait(1).to({graphics:mask_6_graphics_110,x:251.5,y:266}).wait(1).to({graphics:mask_6_graphics_111,x:252.3,y:265.2}).wait(1).to({graphics:mask_6_graphics_112,x:253.1,y:264.4}).wait(1).to({graphics:mask_6_graphics_113,x:254,y:263.6}).wait(1).to({graphics:mask_6_graphics_114,x:254.8,y:262.8}).wait(1).to({graphics:mask_6_graphics_115,x:255.6,y:262}).wait(1).to({graphics:mask_6_graphics_116,x:256.4,y:261.2}).wait(1).to({graphics:mask_6_graphics_117,x:257.2,y:260.4}).wait(1).to({graphics:mask_6_graphics_118,x:258,y:259.5}).wait(1).to({graphics:mask_6_graphics_119,x:187.3,y:186.9}).wait(467));

	// Layer 2
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(20,1,1).p("AmBKGQH5nmHkoYQHloalTi6AmMKQQAAABgBABQAGgGAGgGAmMKQQAHgHAGgGQAAABgCACAt5RNQCZhvFUlO");
	this.shape_7.setTransform(267,232.9);
	this.shape_7._off = true;

	var maskedShapeInstanceList = [this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(9).to({_off:false},0).wait(577));

	// Letter
	this.instance_4 = new lib.b("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(275,275);
	this.instance_4.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(586));

	// Background
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_8.setTransform(275,275,3.373,2.543);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_9.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).wait(586));

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