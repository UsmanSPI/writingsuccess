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


(lib.P = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A38XsQM+6IDQmdIAmhDQkaDwktC7QlCDLk6B3Ig+AGQiJAAAAiPQAAhPBVgvIG0jYQF4jOF6k/IFllOQCni2BUiYQA3hsBMAAQCZAAAACPIAAAYIEqh1QCugyCYAAQDZAACyA9QCwA+B+B1QB+B4BECqQBDCyAADcQAADKhYC8QhRCqiZCbQiKCGi5B1QimBni/BOQkIBqimAAQkUAAkGg6QkvhEi4iDIqiUuQgpBVhPAAQicAAAAiYgAHRzvQjhBjivCKIoJP8QCKB6EfA9QDnAyDzAAQBpAADehVQFAh+DejMQCFh4BGiEQBPiTAAiYQgBikguh7Qgsh4hYhPQhYhPh9gmQh7gmiiAAQi+AAkGB1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-187.5,-166.8,375,333.7);


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
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AAAAcIAAg4");
	this.shape_1.setTransform(0,-101.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AAAAgIAAg/");
	this.shape_2.setTransform(0,-100.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("AAAAkIAAhH");
	this.shape_3.setTransform(0,-100.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("AAAAnIAAhN");
	this.shape_4.setTransform(0,-100.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(5,1,1).p("AAAArIAAhV");
	this.shape_5.setTransform(0,-99.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(5,1,1).p("AAAAvIAAhc");
	this.shape_6.setTransform(0,-99.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(5,1,1).p("AAAAyIAAhj");
	this.shape_7.setTransform(0,-99);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(5,1,1).p("AAAA1IAAhq");
	this.shape_8.setTransform(0,-98.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(5,1,1).p("AAAA5IAAhx");
	this.shape_9.setTransform(0,-98.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(5,1,1).p("AAAA9IAAh5");
	this.shape_10.setTransform(0,-98);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5,1,1).p("AAABAIAAh/");
	this.shape_11.setTransform(0,-97.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(5,1,1).p("AAABEIAAiH");
	this.shape_12.setTransform(0,-97.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(5,1,1).p("AAABIIAAiO");
	this.shape_13.setTransform(0,-96.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(5,1,1).p("AAABLIAAiV");
	this.shape_14.setTransform(0,-96.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(5,1,1).p("AAABOIAAic");
	this.shape_15.setTransform(0,-96.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(5,1,1).p("AAABSIAAij");
	this.shape_16.setTransform(0,-95.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(5,1,1).p("AAABWIAAir");
	this.shape_17.setTransform(0,-95.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(5,1,1).p("AAABZIAAix");
	this.shape_18.setTransform(0,-95.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(5,1,1).p("AAABdIAAi5");
	this.shape_19.setTransform(0,-94.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(5,1,1).p("AAABhIAAjA");
	this.shape_20.setTransform(0,-94.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(5,1,1).p("AAABkIAAjH");
	this.shape_21.setTransform(0,-94);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(5,1,1).p("AAABnIAAjO");
	this.shape_22.setTransform(0,-93.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(5,1,1).p("AAABrIAAjV");
	this.shape_23.setTransform(0,-93.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(5,1,1).p("AAABvIAAjd");
	this.shape_24.setTransform(0,-93);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(5,1,1).p("AAAByIAAjj");
	this.shape_25.setTransform(0,-92.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(5,1,1).p("AAAB2IAAjr");
	this.shape_26.setTransform(0,-92.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(5,1,1).p("AAAB6IAAjy");
	this.shape_27.setTransform(0,-91.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(5,1,1).p("AAAB9IAAj5");
	this.shape_28.setTransform(0,-91.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(5,1,1).p("AAACBIAAkB");
	this.shape_29.setTransform(0,-91.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(5,1,1).p("AAACEIAAkH");
	this.shape_30.setTransform(0,-90.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(5,1,1).p("AAACIIAAkP");
	this.shape_31.setTransform(0,-90.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(5,1,1).p("AAACLIAAkV");
	this.shape_32.setTransform(0,-90.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(5,1,1).p("AAACPIAAkd");
	this.shape_33.setTransform(0,-89.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(5,1,1).p("AAACTIAAkk");
	this.shape_34.setTransform(0,-89.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(5,1,1).p("AAACWIAAkr");
	this.shape_35.setTransform(0,-89);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(5,1,1).p("AAACaIAAkz");
	this.shape_36.setTransform(0,-88.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(5,1,1).p("AAACdIAAk5");
	this.shape_37.setTransform(0,-88.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(5,1,1).p("AAAChIAAlB");
	this.shape_38.setTransform(0,-88);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(5,1,1).p("AAACkIAAlH");
	this.shape_39.setTransform(0,-87.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(5,1,1).p("AAACoIAAlP");
	this.shape_40.setTransform(0,-87.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(5,1,1).p("AAACsIAAlW");
	this.shape_41.setTransform(0,-86.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(5,1,1).p("AAACvIAAld");
	this.shape_42.setTransform(0,-86.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(5,1,1).p("AAACzIAAll");
	this.shape_43.setTransform(0,-86.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(5,1,1).p("AAAC2IAAlr");
	this.shape_44.setTransform(0,-85.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(5,1,1).p("AAAC6IAAlz");
	this.shape_45.setTransform(0,-85.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(5,1,1).p("AAAC9IAAl6");
	this.shape_46.setTransform(0,-85.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(5,1,1).p("AAADBIAAmB");
	this.shape_47.setTransform(0,-84.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(5,1,1).p("AAADFIAAmI");
	this.shape_48.setTransform(0,-84.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(5,1,1).p("AAADIIAAmP");
	this.shape_49.setTransform(0,-84);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(5,1,1).p("AAADMIAAmX");
	this.shape_50.setTransform(0,-83.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(5,1,1).p("AAADPIAAmd");
	this.shape_51.setTransform(0,-83.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(5,1,1).p("AAADTIAAml");
	this.shape_52.setTransform(0,-83);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(5,1,1).p("AAADWIAAms");
	this.shape_53.setTransform(0,-82.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(5,1,1).p("AAADaIAAmz");
	this.shape_54.setTransform(0,-82.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(5,1,1).p("AAADeIAAm6");
	this.shape_55.setTransform(0,-81.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(5,1,1).p("AAADhIAAnB");
	this.shape_56.setTransform(0,-81.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(5,1,1).p("AAADlIAAnJ");
	this.shape_57.setTransform(0,-81.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(5,1,1).p("AAADoIAAnP");
	this.shape_58.setTransform(0,-80.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(5,1,1).p("AAADsIAAnX");
	this.shape_59.setTransform(0,-80.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(5,1,1).p("AAADvIAAne");
	this.shape_60.setTransform(0,-80.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(5,1,1).p("AAADzIAAnl");
	this.shape_61.setTransform(0,-79.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(5,1,1).p("AAAD3IAAns");
	this.shape_62.setTransform(0,-79.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(5,1,1).p("AAAD6IAAnz");
	this.shape_63.setTransform(0,-79);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(5,1,1).p("AAAD+IAAn7");
	this.shape_64.setTransform(0,-78.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(5,1,1).p("AAAEBIAAoB");
	this.shape_65.setTransform(0,-78.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(5,1,1).p("AAAEFIAAoJ");
	this.shape_66.setTransform(0,-78);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(5,1,1).p("AAAEIIAAoQ");
	this.shape_67.setTransform(0,-77.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(5,1,1).p("AAAEMIAAoX");
	this.shape_68.setTransform(0,-77.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(5,1,1).p("AAAEQIAAoe");
	this.shape_69.setTransform(0,-76.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(5,1,1).p("AAAETIAAol");
	this.shape_70.setTransform(0,-76.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(5,1,1).p("AAAEXIAAot");
	this.shape_71.setTransform(0,-76.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(5,1,1).p("AAAEaIAAoz");
	this.shape_72.setTransform(0,-75.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(5,1,1).p("AAAEeIAAo7");
	this.shape_73.setTransform(0,-75.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(5,1,1).p("AAAEhIAApC");
	this.shape_74.setTransform(0,-75.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(5,1,1).p("AAAElIAApJ");
	this.shape_75.setTransform(0,-74.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(5,1,1).p("AAAEpIAApQ");
	this.shape_76.setTransform(0,-74.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(5,1,1).p("AAAEsIAApX");
	this.shape_77.setTransform(0,-74);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(5,1,1).p("AAAEwIAApf");
	this.shape_78.setTransform(0,-73.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(5,1,1).p("AAAEzIAApl");
	this.shape_79.setTransform(0,-73.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(5,1,1).p("AAAE3IAApt");
	this.shape_80.setTransform(0,-72.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(5,1,1).p("AAAE6IAAp0");
	this.shape_81.setTransform(0,-72.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(5,1,1).p("AAAE+IAAp7");
	this.shape_82.setTransform(0,-72.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(5,1,1).p("AAAFCIAAqC");
	this.shape_83.setTransform(0,-71.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(5,1,1).p("AAAFFIAAqJ");
	this.shape_84.setTransform(0,-71.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(5,1,1).p("AAAFJIAAqR");
	this.shape_85.setTransform(0,-71.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(5,1,1).p("AAAFMIAAqX");
	this.shape_86.setTransform(0,-70.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(5,1,1).p("AAAFQIAAqf");
	this.shape_87.setTransform(0,-70.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(5,1,1).p("AAAFTIAAqm");
	this.shape_88.setTransform(0,-70.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(5,1,1).p("AAAFXIAAqt");
	this.shape_89.setTransform(0,-69.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(5,1,1).p("AAAFbIAAq0");
	this.shape_90.setTransform(0,-69.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(5,1,1).p("AAAFeIAAq7");
	this.shape_91.setTransform(0,-69);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(5,1,1).p("AAAFiIAArD");
	this.shape_92.setTransform(0,-68.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(5,1,1).p("AAAFlIAArJ");
	this.shape_93.setTransform(0,-68.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(5,1,1).p("AAAFpIAArR");
	this.shape_94.setTransform(0,-67.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(5,1,1).p("AAAFsIAArY");
	this.shape_95.setTransform(0,-67.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(5,1,1).p("AAAFwIAArf");
	this.shape_96.setTransform(0,-67.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(5,1,1).p("AAAF0IAArn");
	this.shape_97.setTransform(0,-66.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(5,1,1).p("AAAF3IAArt");
	this.shape_98.setTransform(0,-66.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(5,1,1).p("AAAF7IAAr1");
	this.shape_99.setTransform(0,-66.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(5,1,1).p("AAAF+IAAr7");
	this.shape_100.setTransform(0,-65.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(5,1,1).p("AAAGCIAAsD");
	this.shape_101.setTransform(0,-65.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(5,1,1).p("AAAGFIAAsK");
	this.shape_102.setTransform(0,-65.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(5,1,1).p("AAAGJIAAsR");
	this.shape_103.setTransform(0,-64.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(5,1,1).p("AAAGNIAAsZ");
	this.shape_104.setTransform(0,-64.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(5,1,1).p("AAAGQIAAsf");
	this.shape_105.setTransform(0,-64);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(5,1,1).p("AAAGUIAAsn");
	this.shape_106.setTransform(0,-63.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(5,1,1).p("AAAGXIAAst");
	this.shape_107.setTransform(0,-63.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(5,1,1).p("AAAGbIAAs1");
	this.shape_108.setTransform(0,-62.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(5,1,1).p("AAAGeIAAs8");
	this.shape_109.setTransform(0,-62.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(5,1,1).p("AAAGiIAAtD");
	this.shape_110.setTransform(0,-62.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(5,1,1).p("AAAGmIAAtL");
	this.shape_111.setTransform(0,-61.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(5,1,1).p("AAAGpIAAtR");
	this.shape_112.setTransform(0,-61.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(5,1,1).p("AAAGtIAAtZ");
	this.shape_113.setTransform(0,-61.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(5,1,1).p("AAAGxIAAth");
	this.shape_114.setTransform(0,-60.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(5,1,1).p("AAAG0IAAtn");
	this.shape_115.setTransform(0,-60.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(5,1,1).p("AAAG3IAAtu");
	this.shape_116.setTransform(0,-60.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(5,1,1).p("AAAG7IAAt1");
	this.shape_117.setTransform(0,-59.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(5,1,1).p("AAAG/IAAt9");
	this.shape_118.setTransform(0,-59.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(5,1,1).p("AAAnBIAAOD");
	this.shape_119.setTransform(0,-59);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).wait(1));

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0.3,-103.8,1,1,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-16.8},119).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.1,-106.6,22.3,13.8);


(lib.ar4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-43.2,-12,1,1,3,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-153.7,guide:{path:[-43.1,-12,-45.5,9.4,-32.8,27.1,-19.1,46.5,4.3,50.5,27.6,54.6,47,40.8,59.6,31.9,65.7,19,66,18.3,66.4,17.5]}},134).wait(1));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A9HHkQB+r+J1nEQJ4nGL9B+QL/B+HEJ3QHGJ1h9L+g");
	var mask_graphics_1 = new cjs.Graphics().p("A9KIhQBtsBJsnSQJtnTMABtQMCBtHRJtQHUJqhtMCg");
	var mask_graphics_2 = new cjs.Graphics().p("A9MJeQBcsDJhnfQJjnhMCBcQMEBcHfJiQHhJhhcMDg");
	var mask_graphics_3 = new cjs.Graphics().p("A9OKbQBLsFJWntQJZnuMEBLQMFBLHtJYQHuJWhLMGg");
	var mask_graphics_4 = new cjs.Graphics().p("A9QLYQA6sGJMn6QJNn7MGA6QMHA6H6JNQH7JLg6MHg");
	var mask_graphics_5 = new cjs.Graphics().p("A9RMVQApsIJBoFQJCoIMHApQMHApIHJCQIII/gpMIg");
	var mask_graphics_6 = new cjs.Graphics().p("A9RNSQAYsII1oSQI2oVMIAYQMIAZITI2QIVI0gZMJg");
	var mask_graphics_7 = new cjs.Graphics().p("A9SOQQAHsJIpoeQIrohMIAHQMJAHIfIrQIhIogHMJg");
	var mask_graphics_8 = new cjs.Graphics().p("A0+l+QIeosMJgKQMIgKIrIeQItIdAKMIMg6lAAwQgKsIIeorg");
	var mask_graphics_9 = new cjs.Graphics().p("A1al0QISo5MJgbQMHgbI3ITQI4IQAbMIMg6iACCQgbsIIRo2g");
	var mask_graphics_10 = new cjs.Graphics().p("A11lqQIGpEMIgsQMGgsJDIGQJEIDAsMIMg6fADUQgssIIEpBg");
	var mask_graphics_11 = new cjs.Graphics().p("A2OlgQH5pPMGg9QMGg9JNH5QJPH4A9MFMg6ZAEmQg9sGH4pNg");
	var mask_graphics_12 = new cjs.Graphics().p("A2mlUQHspaMFhOQMEhOJYHsQJaHqBOMEMg6SAF4QhOsFHrpXg");
	var mask_graphics_13 = new cjs.Graphics().p("A29lJQHepkMDhfQMChfJjHfQJlHdBfMCMg6JAHKQhfsEHepig");
	var mask_graphics_14 = new cjs.Graphics().p("A3Tk8QHRpvMBhwQL/hvJuHRQJvHQBvMAMg59AIaQhwsBHQpsg");
	var mask_graphics_15 = new cjs.Graphics().p("A3okvQHDp5L+iAQL+iBJ3HEQJ5HCCAL9Mg5xAJsQiAr/HCp2g");
	var mask_graphics_16 = new cjs.Graphics().p("A38khQG2qDL7iRQL6iRKBG2QKDGzCRL7Mg5jAK8QiRr7G0qAg");
	var mask_graphics_17 = new cjs.Graphics().p("A4OkTQGnqML4iiQL3ihKKGnQKMGmCiL2Mg5SAMNQiir3GmqKg");
	var mask_graphics_18 = new cjs.Graphics().p("A4fkEQGZqVL0iyQLzizKUGZQKUGYCzLzMg5AANdQizr0GYqTg");
	var mask_graphics_19 = new cjs.Graphics().p("A4vj0QGKqeLwjDQLvjDKdGKQKdGJDDLvMg4sAOtQjDrwGJqbg");
	var mask_graphics_20 = new cjs.Graphics().p("A4+jkQF7qnLsjTQLqjUKmF8QKmF6DTLrMg4XAP8QjTrsF6qjg");
	var mask_graphics_21 = new cjs.Graphics().p("A5MjUQFtquLnjkQLljkKtFtQKvFrDjLmMg4AARLQjjrnFrqsg");
	var mask_graphics_22 = new cjs.Graphics().p("A5YjDQFdq2Lij0QLgj0K1FeQK2FcD0LgMg3nASZQj0rhFdq0g");
	var mask_graphics_23 = new cjs.Graphics().p("A5jixQFOq+LckEQLbkEK8FPQK+FMEELcMg3NATmQkErcFOq7g");
	var mask_graphics_24 = new cjs.Graphics().p("A5tifQE+rFLWkUQLWkULDE/QLFE9EULXMg2wAUyQkUrWE+rCg");
	var mask_graphics_25 = new cjs.Graphics().p("A52iNQEvrLLQkkQLPkkLKEwQLLEtEkLQMg2SAV/QkjrQEurJg");
	var mask_graphics_26 = new cjs.Graphics().p("A5+h6QEfrSLKkzQLIk0LREgQLSEeEzLJMg1yAXLQkzrJEerQg");
	var mask_graphics_27 = new cjs.Graphics().p("A6EhmQEPrZLDlCQLBlDLXEQQLYEOFDLCMg1RAYWQlDrDEPrVg");
	var mask_graphics_28 = new cjs.Graphics().p("A6KhSQEAreK7lTQK7lSLcEAQLeD+FSK7Mg0uAZgQlSq7D+rbg");
	var mask_graphics_29 = new cjs.Graphics().p("A6Og+QDwrjKzliQK0lhLhDwQLjDtFiK0Mg0KAapQlhqzDurhg");
	var mask_graphics_30 = new cjs.Graphics().p("A6QgpQDfroKrlxQKslxLnDgQLnDeFxKrMgzjAbyQlxqrDfrmg");
	var mask_graphics_31 = new cjs.Graphics().p("A6SgUQDPrtKjl/QKkmALrDQQLsDNGAKjMgy7Ac6QmAqjDOrrg");
	var mask_graphics_32 = new cjs.Graphics().p("A6SABQC+rwKbmPQKbmOLvC/QLxC9GOKbMgySAeBQmOqbC+rwg");
	var mask_graphics_33 = new cjs.Graphics().p("A6RAXQCtr0KTmdQKSmdLzCvQL1CsGcKSMgxnAfHQmcqSCtr0g");
	var mask_graphics_34 = new cjs.Graphics().p("A6PAuQCdr4KJmrQKJmrL3CeQL4CbGrKJMgw7AgMQmrqJCdr3g");
	var mask_graphics_35 = new cjs.Graphics().p("A6MBFQCNr8J/m5QJ/m5L7CNQL7CMG5J/MgwNAhQQm5qACMr6g");
	var mask_graphics_36 = new cjs.Graphics().p("A6HBcQB8r+J1nHQJ2nHL9B8QL+B7HHJ1MgvdAiTQnHp1B7r+g");
	var mask_graphics_37 = new cjs.Graphics().p("A6BB0QBrsBJrnUQJsnVL/BsQMBBpHVJsMgutAjUQnVprBrsAg");
	var mask_graphics_38 = new cjs.Graphics().p("A56CMQBasDJhniQJhniMCBbQMDBZHiJhMgt6AkVQnjphBasCg");
	var mask_graphics_39 = new cjs.Graphics().p("A5yClQBJsFJXnvQJWnvMEBKQMFBHHvJXMgtHAlVQnvpWBIsEg");
	var mask_graphics_40 = new cjs.Graphics().p("A5oC+QA4sGJLn8QJMn9MFA5QMGA3H8JLMgsRAmUQn9pLA4sFg");
	var mask_graphics_41 = new cjs.Graphics().p("A5dDXQAnsHJAoJQJAoJMGAoQMIAmIJJAMgrcAnSQoJpAAnsHg");
	var mask_graphics_42 = new cjs.Graphics().p("A5RDxQAWsII1oVQI0oWMHAXQMIAVIWI1MgqkAoOQoWo1AWsHg");
	var mask_graphics_43 = new cjs.Graphics().p("A5DELQAFsIIpohQIooiMHAGQMJAEIhIoMgpqApJQoiopAFsHg");
	var mask_graphics_44 = new cjs.Graphics().p("A40EmQgMsIIcouQIdotMHgLQMIgNIuIcMgoxAqDQotodgMsHg");
	var mask_graphics_45 = new cjs.Graphics().p("A4kFBQgdsIIQo5QIQo5MHgcQMHgeI6IQMgn1Aq7Qo5oQgdsHg");
	var mask_graphics_46 = new cjs.Graphics().p("A4TFcQgusGIEpFQIDpFMGgtQMHgvJFIEMgm4AryQpFoEgusGg");
	var mask_graphics_47 = new cjs.Graphics().p("A4AF4Qg/sGH2pPQH3pQMFg+QMFhAJQH3Mgl6AsnQpQn2g+sFg");
	var mask_graphics_48 = new cjs.Graphics().p("A3tGUQhQsEHqpbQHqpbMDhOQMEhRJbHqMgk7AtcQpbnqhQsDg");
	var mask_graphics_49 = new cjs.Graphics().p("A3YGwQhgsCHcplQHcpmMChfQMChiJlHdMgj7AuPQplndhhsBg");
	var mask_graphics_50 = new cjs.Graphics().p("A3BHNQhysAHPpwQHPpvL/hxQL/hyJwHPMgi5AvAQpwnOhxr/g");
	var mask_graphics_51 = new cjs.Graphics().p("A2qHqQiDr+HCp5QHBp6L8iBQL9iDJ5HBMgh2AvxQp6nBiCr8g");
	var mask_graphics_52 = new cjs.Graphics().p("A2SIHQiTr7GzqDQGzqDL6iSQL6iUKDGzMggzAwgQqEmziTr5g");
	var mask_graphics_53 = new cjs.Graphics().p("A14IkQikr3GlqNQGlqML2ijQL2ilKNGlMgfvAxNQqNmlijr1g");
	var mask_graphics_54 = new cjs.Graphics().p("A1dJBQi1rzGXqWQGWqVLyi0QLzi1KWGXMgeqAx4QqVmWi0ryg");
	var mask_graphics_55 = new cjs.Graphics().p("A1CJfQjFrvGIqfQGJqeLujEQLujGKeGIMgdjAyjQqemIjFrtg");
	var mask_graphics_56 = new cjs.Graphics().p("A0lJ8QjVrqF5qnQF5qnLrjUQLpjWKnF5MgccAzMQqnl6jVrpg");
	var mask_graphics_57 = new cjs.Graphics().p("A0HKaQjlrmFqqvQFqqvLmjkQLkjmKvFqMgbUAzyQqvlqjlrkg");
	var mask_graphics_58 = new cjs.Graphics().p("AzoK4Qj2rhFbq2QFcq3Lgj1QLfj2K3FbMgaLA0YQq3lbj1rfg");
	var mask_graphics_59 = new cjs.Graphics().p("AzILWQkGrbFMq+QFMq+LbkFQLZkHK+FMMgZAA08Qq+lMkGrZg");
	var mask_graphics_60 = new cjs.Graphics().p("AynL0QkWrWE9rEQE8rGLVkUQLUkXLFE9MgX2A1eQrGk9kVrTg");
	var mask_graphics_61 = new cjs.Graphics().p("AyFMSQkmrQEtrLQEtrMLPkkQLNknLMEtMgWrA1/QrMktklrNg");
	var mask_graphics_62 = new cjs.Graphics().p("AxiMwQk1rJEdrSQEdrSLIk0QLHk2LSEdMgVfA2eQrSkdk1rHg");
	var mask_graphics_63 = new cjs.Graphics().p("Aw+NOQlFrCENrYQENrYLClEQK/lFLZENMgUSA27QrZkNlErAg");
	var mask_graphics_64 = new cjs.Graphics().p("AwZNsQlUq7D9rdQD9reK6lTQK4lVLeD9MgTGA3XQrdj+lTq4g");
	var mask_graphics_65 = new cjs.Graphics().p("AvzOKQlkqzDtrjQDtrjKzliQKwlkLkDtMgR4A3wQrjjtliqxg");
	var mask_graphics_66 = new cjs.Graphics().p("AvNOoQlyqrDcroQDdroKrlxQKolzLpDcMgQqA4JQrnjdlyqpg");
	var mask_graphics_67 = new cjs.Graphics().p("AulPGQmCqjDNrsQDMrtKjmAQKgmCLtDMMgPbA4fQrsjMmAqhg");
	var mask_graphics_68 = new cjs.Graphics().p("At9PkQmQqaC8rxQC8rxKamPQKYmQLxC8MgOLA4zQrxi8mPqYg");
	var mask_graphics_69 = new cjs.Graphics().p("AtTQCQmfqRCrr1QCsr1KRmdQKOmfL2CrMgM8A5HQr0ismdqPg");
	var mask_graphics_70 = new cjs.Graphics().p("AsmQiQmuqHCar4QCZr5KHmtQKFmuL5CZMgLlA5ZQr4iZmtqGg");
	var mask_graphics_71 = new cjs.Graphics().p("Ar3RDQm9p9CHr8QCHr8J9m8QJ6m+L9CHMgKNA5qQr8iHm8p7g");
	var mask_graphics_72 = new cjs.Graphics().p("ArHRjQnNpyB1r/QB1r/JynLQJwnNL/B1MgI1A54Qr+h1nLpwg");
	var mask_graphics_73 = new cjs.Graphics().p("AqXSDQnbpnBjsBQBjsCJmnaQJlnbMCBjMgHdA6EQsBhinapmg");
	var mask_graphics_74 = new cjs.Graphics().p("AplSjQnqpbBRsEQBQsEJbnoQJZnqMFBRMgGFA6PQsDhRnopag");
	var mask_graphics_75 = new cjs.Graphics().p("AozTDQn4pPA+sFQA/sHJPn2QJNn4MGA+MgErA6YQsFg/n3pOg");
	var mask_graphics_76 = new cjs.Graphics().p("AoATjQoFpDArsHQAssHJEoEQJBoGMHAsMgDTA6dQsHgsoEpCg");
	var mask_graphics_77 = new cjs.Graphics().p("AnLUDQoUo3AasHQAZsJI3oRQI0oUMJAZMgB6A6iQsIgaoRo1g");
	var mask_graphics_78 = new cjs.Graphics().p("AmWUjQohorAHsHQAHsJIqofQIoohMIAHMgAhA6jQsIgHoeoog");
	var mask_graphics_79 = new cjs.Graphics().p("Al9VCQotodgMsJQgMsIIeosQIaotMJgMMAA4A6jIghAAQrzAAogoQg");
	var mask_graphics_80 = new cjs.Graphics().p("AlyVgQo7oQgesIQgesHIQo5QINo6MIgfMACSA6hQgqACgqAAQrTAAoZnyg");
	var mask_graphics_81 = new cjs.Graphics().p("AlnV8QpHoCgxsHQgwsGICpFQIBpHMGgxMADqA6cQhDAFhCAAQq0AAoSnVg");
	var mask_graphics_82 = new cjs.Graphics().p("AlcWXQpSn0hDsFQhDsFH0pSQHzpSMEhDMAFDA6VQhbAIhZAAQqYAAoKm4g");
	var mask_graphics_83 = new cjs.Graphics().p("AlPWxQpfnmhVsEQhVsDHmpdQHkpeMDhVMAGcA6NQh0AMhwAAQp7AAoBmcg");
	var mask_graphics_84 = new cjs.Graphics().p("AlCXKQpqnYhnsBQhosBHXppQHWppMBhoMAH0A6CQiLATiGAAQpgAAn4mBg");
	var mask_graphics_85 = new cjs.Graphics().p("Ak0XhQp1nJh6r/Qh6r+HJpzQHHp1L+h6MAJMA51QiiAaibAAQpGAAnulng");
	var mask_graphics_86 = new cjs.Graphics().p("AklX2QqAm5iMr8QiMr7G6p+QG4p/L7iMMAKkA5mQi5AhixAAQosAAnjlOg");
	var mask_graphics_87 = new cjs.Graphics().p("AkWYLQqKmqier5Qier3GqqJQGpqJL3ieMAL8A5VQjPAqjGAAQoTAAnYk1g");
	var mask_graphics_88 = new cjs.Graphics().p("AkGYeQqUmbiwr0Qiwr0GbqSQGZqULziwMANTA5CQjkA1jbAAQn8AAnLkeg");
	var mask_graphics_89 = new cjs.Graphics().p("Aj1YvQqemLjCrwQjCrvGLqcQGKqdLvjCMAOpA4tQj5BAjvAAQnlAAm+kIg");
	var mask_graphics_90 = new cjs.Graphics().p("AjkY/Qqml6jUrsQjUrqF7qlQF5qmLqjUMAP/A4VQkMBMkEAAQnOAAmxjyg");
	var mask_graphics_91 = new cjs.Graphics().p("AjSZOQqvlqjmrmQjlrmFrquQFpqvLljlMARUA38QkgBZkYAAQm4AAmjjdg");
	var mask_graphics_92 = new cjs.Graphics().p("Ai/ZbQq4laj3rgQj3rfFaq3QFZq3Lfj3MASpA3gQkzBnksAAQmjAAmTjJg");
	var mask_graphics_93 = new cjs.Graphics().p("AisZnQrAlJkJraQkIraFKq+QFIrALakIMAT8A3DQlFB2lBAAQmNAAmEi2g");
	var mask_graphics_94 = new cjs.Graphics().p("AiYZyQrIk5karUQkarSE6rHQE3rHLUkaMAVPA2lQlXCGlVAAQl5AAlzikg");
	var mask_graphics_95 = new cjs.Graphics().p("AiEZ7QrPkokrrNQkrrMEprNQEmrOLNkrMAWiA2DQlpCWlpAAQlkAAljiSg");
	var mask_graphics_96 = new cjs.Graphics().p("AhvaCQrWkWk8rGQk7rEEXrUQEVrVLFk8MAX0A1fQl5Col+AAQlPAAlSiCg");
	var mask_graphics_97 = new cjs.Graphics().p("AhZaJQrdkGlMq9QlNq+EGraQEErbK+lNMAZEA06QmJC7mTAAQk7AAk/hyg");
	var mask_graphics_98 = new cjs.Graphics().p("AhDaNQrjjzldq2Qldq2D0rgQDzrhK1ldMAaVA0TQmZDOmoAAQkmAAkthkg");
	var mask_graphics_99 = new cjs.Graphics().p("AgtaRQrojiltquQluqtDjrlQDhrnKtluMAbkAzrQmoDim9AAQkTAAkahWg");
	var mask_graphics_100 = new cjs.Graphics().p("AgWaTQrtjRl+qkQl9qlDRrqQDPrsKkl+MAcyAzAQm2D3nTAAQj/AAkGhJg");
	var mask_graphics_101 = new cjs.Graphics().p("AABaTQrxi+mOqcQmOqbDArvQC9rxKbmOMAd/AyTQnDEOnqAAQjqAAjzg+g");
	var mask_graphics_102 = new cjs.Graphics().p("AAZaSQr1ismeqSQmdqSCtrzQCrr1KSmeMAfLAxlQnQEkoBAAQjWAAjegzg");
	var mask_graphics_103 = new cjs.Graphics().p("AAxaQQr4ibmuqHQmtqICcr3QCZr5KImtMAgWAw0QndE7oZAAQjBAAjJgog");
	var mask_graphics_104 = new cjs.Graphics().p("ABKaMQr8iJm8p9Qm9p9CKr7QCHr8J9m9MAhgAwCQnoFVoyAAQisAAizggg");
	var mask_graphics_105 = new cjs.Graphics().p("ABkaGQr/h2nMpyQnLpzB3r+QB1r/JynLMAioAvOQnyFtpLAAQiXAAicgYg");
	var mask_graphics_106 = new cjs.Graphics().p("AB+Z/QsChjnapoQnapnBlsBQBisCJonaMAjvAuZQn8GIpmAAQiBAAiFgSg");
	var mask_graphics_107 = new cjs.Graphics().p("ACYZ3QsEhRnopcQnppcBTsDQBQsEJcnpMAk1AtiQoGGjqAAAQhrAAhugMg");
	var mask_graphics_108 = new cjs.Graphics().p("ACzZtQsFg/n3pQQn3pQBAsFQA+sFJQn3MAl6AsoQoOG/qdAAQhUAAhWgHg");
	var mask_graphics_109 = new cjs.Graphics().p("ADPZiQsHgtoFpEQoFpEAusGQAssHJEoFMAm9ArvQoWHcq6AAQg9AAg9gEg");
	var mask_graphics_110 = new cjs.Graphics().p("ADrZVQsIgaoTo4QoSo3AbsHQAasII3oSMAn/AqyQodH5rZAAIhIgBg");
	var mask_graphics_111 = new cjs.Graphics().p("AEHZHQsIgIogorQogorAJsHQAHsIIrogMAo/Ap1QojIYr5AAIgWAAg");
	var mask_graphics_112 = new cjs.Graphics().p("AwRQkQotoegJsHQgMsIIeotMAp+Ao2QoeIssHALIgeAAQr1AAoioTg");
	var mask_graphics_113 = new cjs.Graphics().p("AwAQyQo6oQgcsHQgesIIRo5MAq7An1QoQI6sHAdQgoABgoAAQrVAAocn1g");
	var mask_graphics_114 = new cjs.Graphics().p("AvuRAQpGoDgusGQgxsHIDpGMAr3AmzQoCJGsGAwQhCAEhAAAQq2AAoVnXg");
	var mask_graphics_115 = new cjs.Graphics().p("AvbRMQpRn1hBsFQhDsFH1pSMAsxAlwQn1JSsEBBQhaAIhYAAQqZAAoNm6g");
	var mask_graphics_116 = new cjs.Graphics().p("AvGRWQpenmhTsDQhVsDHmpeMAtrAkrQnnJesDBUQhyAMhuAAQp9AAoEmfg");
	var mask_graphics_117 = new cjs.Graphics().p("AuwRgQpqnYhlsAQhosCHYppMAuiAjlQnYJpsBBnQiJASiFAAQpiAAn6mEg");
	var mask_graphics_118 = new cjs.Graphics().p("AuaRpQp0nJh4r+Qh5r/HJp0MAvWAidQnJJ0r+B5QigAZibAAQpHAAnxlpg");
	var mask_graphics_119 = new cjs.Graphics().p("AuCRwQp/m6iKr7QiMr8G6p+MAwKAhUQm6J/r6CLQi4AhivAAQouAAnmlQg");
	var mask_graphics_120 = new cjs.Graphics().p("AtpR2QqJmricr3Qifr4GrqJMAw8AgLQmrKJr3CdQjNAqjFAAQoVAAnak4g");
	var mask_graphics_121 = new cjs.Graphics().p("AtQR7QqTmbiur0Qiwr0GbqTMAxtAfAQmcKTrzCvQjiA1jaAAQn9AAnPkhg");
	var mask_graphics_122 = new cjs.Graphics().p("As1R/QqcmLjArxQjDruGMqdMAyaAd0QmLKdrvDAQj3BAjuAAQnnAAnBkKg");
	var mask_graphics_123 = new cjs.Graphics().p("AsZSCQqml8jSrrQjUrqF8qmMAzHAcnQl8KmrqDSQkLBMkDAAQnPAAm0j0g");
	var mask_graphics_124 = new cjs.Graphics().p("Ar8SEQqvlsjkrmQjlrlFrquMAzyAbYQlsKvrlDkQkfBYkXAAQm5AAmljeg");
	var mask_graphics_125 = new cjs.Graphics().p("ArfSEQq3lbj1rhQj3rfFbq3MA0aAaKQlbK3rfD1QkzBnkrAAQmjAAmXjLg");
	var mask_graphics_126 = new cjs.Graphics().p("ArASDQrAlKkGrbQkJrZFLq/MA1BAY5QlLLArZEHQlFB1k/AAQmOAAmHi4g");
	var mask_graphics_127 = new cjs.Graphics().p("AqhSBQrHk5kYrUQkZrTE5rHMA1mAXoQk5LHrTEZQlXCFlUAAQl5AAl3img");
	var mask_graphics_128 = new cjs.Graphics().p("AqBR+QrOkokprOQkrrLEprOMA2JAWWQkpLOrMEqQloCVloAAQllAAlmiUg");
	var mask_graphics_129 = new cjs.Graphics().p("ApgR6QrVkXk5rGQk8rEEXrVMA2qAVDQkXLVrFE6Ql5Cnl9AAQlQAAlViDg");
	var mask_graphics_130 = new cjs.Graphics().p("Ao+R1QrbkGlLq/QlMq8EGrcMA3JATwQkGLcq9FLQmJC6mSAAQk8AAlDh0g");
	var mask_graphics_131 = new cjs.Graphics().p("AobRvQrhj1lcq3Qldq0D1rhMA3mAScQj1Lhq1FbQmYDNmnAAQkoAAkwhkg");
	var mask_graphics_132 = new cjs.Graphics().p("An3RnQrnjjlsquQluqsDjrnMA4CARIQjjLmqtFsQmnDhm9AAQkTAAkdhXg");
	var mask_graphics_133 = new cjs.Graphics().p("AnTReQrsjRl8qlQl+qjDRrsMA4bAPyQjSLrqjF8Qm2D2nTAAQj/AAkJhKg");
	var mask_graphics_134 = new cjs.Graphics().p("AmuRUQrxi/mMqcQmOqaDArxMA4xAOcQi/LwqbGNQnDEMnpAAQjrAAj1g/g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:18.9,y:-77.2}).wait(1).to({graphics:mask_graphics_1,x:18.5,y:-79.2}).wait(1).to({graphics:mask_graphics_2,x:18.2,y:-81.2}).wait(1).to({graphics:mask_graphics_3,x:18,y:-83.3}).wait(1).to({graphics:mask_graphics_4,x:17.8,y:-85.3}).wait(1).to({graphics:mask_graphics_5,x:17.7,y:-87.4}).wait(1).to({graphics:mask_graphics_6,x:17.6,y:-89.4}).wait(1).to({graphics:mask_graphics_7,x:17.5,y:-91.5}).wait(1).to({graphics:mask_graphics_8,x:17.5,y:-91.1}).wait(1).to({graphics:mask_graphics_9,x:17.4,y:-89.1}).wait(1).to({graphics:mask_graphics_10,x:17.3,y:-87.1}).wait(1).to({graphics:mask_graphics_11,x:17.2,y:-85.1}).wait(1).to({graphics:mask_graphics_12,x:17,y:-83.1}).wait(1).to({graphics:mask_graphics_13,x:16.7,y:-81.1}).wait(1).to({graphics:mask_graphics_14,x:16.4,y:-79.1}).wait(1).to({graphics:mask_graphics_15,x:16.1,y:-77.1}).wait(1).to({graphics:mask_graphics_16,x:15.7,y:-75.1}).wait(1).to({graphics:mask_graphics_17,x:15.2,y:-73.1}).wait(1).to({graphics:mask_graphics_18,x:14.7,y:-71.2}).wait(1).to({graphics:mask_graphics_19,x:14.2,y:-69.2}).wait(1).to({graphics:mask_graphics_20,x:13.7,y:-67.2}).wait(1).to({graphics:mask_graphics_21,x:13.1,y:-65.3}).wait(1).to({graphics:mask_graphics_22,x:12.4,y:-63.4}).wait(1).to({graphics:mask_graphics_23,x:11.7,y:-61.5}).wait(1).to({graphics:mask_graphics_24,x:11,y:-59.5}).wait(1).to({graphics:mask_graphics_25,x:10.3,y:-57.7}).wait(1).to({graphics:mask_graphics_26,x:9.5,y:-55.8}).wait(1).to({graphics:mask_graphics_27,x:8.6,y:-53.9}).wait(1).to({graphics:mask_graphics_28,x:7.7,y:-52}).wait(1).to({graphics:mask_graphics_29,x:6.8,y:-50.2}).wait(1).to({graphics:mask_graphics_30,x:5.9,y:-48.4}).wait(1).to({graphics:mask_graphics_31,x:4.9,y:-46.6}).wait(1).to({graphics:mask_graphics_32,x:3.9,y:-44.8}).wait(1).to({graphics:mask_graphics_33,x:2.8,y:-43}).wait(1).to({graphics:mask_graphics_34,x:1.7,y:-41.3}).wait(1).to({graphics:mask_graphics_35,x:0.6,y:-39.6}).wait(1).to({graphics:mask_graphics_36,x:-0.6,y:-37.9}).wait(1).to({graphics:mask_graphics_37,x:-1.8,y:-36.2}).wait(1).to({graphics:mask_graphics_38,x:-3,y:-34.6}).wait(1).to({graphics:mask_graphics_39,x:-4.3,y:-33}).wait(1).to({graphics:mask_graphics_40,x:-5.6,y:-31.4}).wait(1).to({graphics:mask_graphics_41,x:-7,y:-29.9}).wait(1).to({graphics:mask_graphics_42,x:-8.4,y:-28.3}).wait(1).to({graphics:mask_graphics_43,x:-9.8,y:-26.9}).wait(1).to({graphics:mask_graphics_44,x:-11.3,y:-25.4}).wait(1).to({graphics:mask_graphics_45,x:-12.8,y:-24}).wait(1).to({graphics:mask_graphics_46,x:-14.3,y:-22.7}).wait(1).to({graphics:mask_graphics_47,x:-15.9,y:-21.4}).wait(1).to({graphics:mask_graphics_48,x:-17.5,y:-20.1}).wait(1).to({graphics:mask_graphics_49,x:-19.2,y:-18.9}).wait(1).to({graphics:mask_graphics_50,x:-20.8,y:-17.6}).wait(1).to({graphics:mask_graphics_51,x:-22.5,y:-16.5}).wait(1).to({graphics:mask_graphics_52,x:-24.2,y:-15.3}).wait(1).to({graphics:mask_graphics_53,x:-26,y:-14.2}).wait(1).to({graphics:mask_graphics_54,x:-27.8,y:-13.2}).wait(1).to({graphics:mask_graphics_55,x:-29.6,y:-12.2}).wait(1).to({graphics:mask_graphics_56,x:-31.4,y:-11.2}).wait(1).to({graphics:mask_graphics_57,x:-33.2,y:-10.2}).wait(1).to({graphics:mask_graphics_58,x:-35.1,y:-9.3}).wait(1).to({graphics:mask_graphics_59,x:-36.9,y:-8.4}).wait(1).to({graphics:mask_graphics_60,x:-38.8,y:-7.6}).wait(1).to({graphics:mask_graphics_61,x:-40.7,y:-6.8}).wait(1).to({graphics:mask_graphics_62,x:-42.6,y:-6}).wait(1).to({graphics:mask_graphics_63,x:-44.6,y:-5.3}).wait(1).to({graphics:mask_graphics_64,x:-46.5,y:-4.6}).wait(1).to({graphics:mask_graphics_65,x:-48.4,y:-3.9}).wait(1).to({graphics:mask_graphics_66,x:-50.4,y:-3.3}).wait(1).to({graphics:mask_graphics_67,x:-52.4,y:-2.7}).wait(1).to({graphics:mask_graphics_68,x:-54.4,y:-2.2}).wait(1).to({graphics:mask_graphics_69,x:-56.4,y:-1.7}).wait(1).to({graphics:mask_graphics_70,x:-58.6,y:-1.2}).wait(1).to({graphics:mask_graphics_71,x:-60.8,y:-0.8}).wait(1).to({graphics:mask_graphics_72,x:-63,y:-0.4}).wait(1).to({graphics:mask_graphics_73,x:-65.2,y:-0.1}).wait(1).to({graphics:mask_graphics_74,x:-67.4,y:0.2}).wait(1).to({graphics:mask_graphics_75,x:-69.6,y:0.5}).wait(1).to({graphics:mask_graphics_76,x:-71.8,y:0.6}).wait(1).to({graphics:mask_graphics_77,x:-74,y:0.8}).wait(1).to({graphics:mask_graphics_78,x:-76.3,y:0.8}).wait(1).to({graphics:mask_graphics_79,x:-75.7,y:0.8}).wait(1).to({graphics:mask_graphics_80,x:-73.5,y:0.9}).wait(1).to({graphics:mask_graphics_81,x:-71.3,y:1}).wait(1).to({graphics:mask_graphics_82,x:-69.1,y:1.2}).wait(1).to({graphics:mask_graphics_83,x:-67,y:1.5}).wait(1).to({graphics:mask_graphics_84,x:-64.8,y:1.8}).wait(1).to({graphics:mask_graphics_85,x:-62.6,y:2.1}).wait(1).to({graphics:mask_graphics_86,x:-60.5,y:2.5}).wait(1).to({graphics:mask_graphics_87,x:-58.4,y:3}).wait(1).to({graphics:mask_graphics_88,x:-56.2,y:3.5}).wait(1).to({graphics:mask_graphics_89,x:-54.1,y:4.1}).wait(1).to({graphics:mask_graphics_90,x:-52,y:4.7}).wait(1).to({graphics:mask_graphics_91,x:-49.9,y:5.4}).wait(1).to({graphics:mask_graphics_92,x:-47.8,y:6.1}).wait(1).to({graphics:mask_graphics_93,x:-45.7,y:6.8}).wait(1).to({graphics:mask_graphics_94,x:-43.6,y:7.6}).wait(1).to({graphics:mask_graphics_95,x:-41.6,y:8.5}).wait(1).to({graphics:mask_graphics_96,x:-39.6,y:9.3}).wait(1).to({graphics:mask_graphics_97,x:-37.6,y:10.3}).wait(1).to({graphics:mask_graphics_98,x:-35.6,y:11.3}).wait(1).to({graphics:mask_graphics_99,x:-33.6,y:12.3}).wait(1).to({graphics:mask_graphics_100,x:-31.6,y:13.4}).wait(1).to({graphics:mask_graphics_101,x:-29.7,y:14.5}).wait(1).to({graphics:mask_graphics_102,x:-27.8,y:15.6}).wait(1).to({graphics:mask_graphics_103,x:-25.9,y:16.8}).wait(1).to({graphics:mask_graphics_104,x:-24,y:18}).wait(1).to({graphics:mask_graphics_105,x:-22.2,y:19.3}).wait(1).to({graphics:mask_graphics_106,x:-20.4,y:20.7}).wait(1).to({graphics:mask_graphics_107,x:-18.6,y:22}).wait(1).to({graphics:mask_graphics_108,x:-16.9,y:23.4}).wait(1).to({graphics:mask_graphics_109,x:-15.2,y:24.9}).wait(1).to({graphics:mask_graphics_110,x:-13.6,y:26.4}).wait(1).to({graphics:mask_graphics_111,x:-12,y:27.9}).wait(1).to({graphics:mask_graphics_112,x:-10.4,y:29.5}).wait(1).to({graphics:mask_graphics_113,x:-8.9,y:31.2}).wait(1).to({graphics:mask_graphics_114,x:-7.4,y:32.8}).wait(1).to({graphics:mask_graphics_115,x:-6,y:34.6}).wait(1).to({graphics:mask_graphics_116,x:-4.6,y:36.3}).wait(1).to({graphics:mask_graphics_117,x:-3.3,y:38.1}).wait(1).to({graphics:mask_graphics_118,x:-2,y:39.9}).wait(1).to({graphics:mask_graphics_119,x:-0.7,y:41.8}).wait(1).to({graphics:mask_graphics_120,x:0.5,y:43.7}).wait(1).to({graphics:mask_graphics_121,x:1.6,y:45.6}).wait(1).to({graphics:mask_graphics_122,x:2.8,y:47.6}).wait(1).to({graphics:mask_graphics_123,x:3.9,y:49.5}).wait(1).to({graphics:mask_graphics_124,x:4.9,y:51.5}).wait(1).to({graphics:mask_graphics_125,x:5.9,y:53.5}).wait(1).to({graphics:mask_graphics_126,x:6.8,y:55.6}).wait(1).to({graphics:mask_graphics_127,x:7.8,y:57.6}).wait(1).to({graphics:mask_graphics_128,x:8.6,y:59.7}).wait(1).to({graphics:mask_graphics_129,x:9.4,y:61.8}).wait(1).to({graphics:mask_graphics_130,x:10.2,y:63.9}).wait(1).to({graphics:mask_graphics_131,x:11,y:66}).wait(1).to({graphics:mask_graphics_132,x:11.6,y:68.1}).wait(1).to({graphics:mask_graphics_133,x:12.3,y:70.2}).wait(1).to({graphics:mask_graphics_134,x:13,y:72.3}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AokkoQgJC+BzCgQCJDCDqAoQDpApDCiKQB+hZA9iBQADgIAEgI");
	this.shape.setTransform(11.4,21.7);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(135));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.3,-15.3,123.2,47.2);


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
(lib.WS_Cursive_P = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_570 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(570).call(this.frame_570).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(102.9,273.1,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[103.2,273.3,129.3,261.9,153.6,247.4,178,233,201.1,215.5,224.2,198,243.4,181,254.1,171.5,263.4,162.3]}},95).to({x:289.8,y:123.3},15).wait(15).to({y:124},0).to({x:136.1,y:426.2},135).wait(16).to({x:276.8,y:152.2},0).to({guide:{path:[276.8,152.5,294.2,141.1,329.4,128.5,364.8,115.9,404,130.2,443.2,144.5,449.6,180.5,456.1,216.6,426,253.3,395.9,290.1,347,305.4,298,320.7,261.5,306.2,225.3,292,210.9,279]}},210).wait(10).to({x:217.1,y:270.2},0).to({guide:{path:[217.6,270.6,257.7,227.7,321.8,189.6,386.2,151.5,437.7,200.5,489.2,249.6,538.5,283.4,582.8,313.8,635,315.1]}},65).wait(1));

	// Dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(290,123.1,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},110).wait(15).to({_off:false,x:136,y:428},0).to({_off:true},135).wait(16).to({_off:false,x:210.6,y:279.5},0).to({_off:true},210).wait(76));

	// Layer 11
	this.instance_1 = new lib.ar4("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(351,195,1,1,0,-125.3,54.7,0.1,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(285).to({_off:false},0).wait(286));

	// Layer 8 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_404 = new cjs.Graphics().p("AtDjvQF9qkLpjQQLrjRKkF9QKkF9DQLqQDRLql9Kkg");
	var mask_graphics_405 = new cjs.Graphics().p("Askk+QGTqXLvi4QLyi4KXGSQKXGTC3LwQC5LxmSKXg");
	var mask_graphics_406 = new cjs.Graphics().p("AsDmLQGoqJL0igQL4igKKGoQKJGoCfL2QChL2moKKg");
	var mask_graphics_407 = new cjs.Graphics().p("ArhnWQG9p8L5iHQL8iHJ8G9QJ8G8CGL7QCIL7m9J8g");
	var mask_graphics_408 = new cjs.Graphics().p("Aq9ogQHRptL9huQMBhuJtHRQJtHRBtL+QBvL/nRJtg");
	var mask_graphics_409 = new cjs.Graphics().p("AqXpoQHkpdMBhWQMDhVJeHlQJdHlBVMBQBWMDnlJdg");
	var mask_graphics_410 = new cjs.Graphics().p("ApwquQH4pOMDg8QMFg8JOH4QJNH4A8MEQA9MFn4JNg");
	var mask_graphics_411 = new cjs.Graphics().p("ApIryQILo9MEgjQMIgkI9ILQI9IMAiMFQAkMGoLI9g");
	var mask_graphics_412 = new cjs.Graphics().p("Aoes1QIdorMFgKQMIgKIsIdQIsIdAJMGQALMIoeIrg");
	var mask_graphics_413 = new cjs.Graphics().p("Anzt1QIuoaMGAPQMIAPIaIwQIZIvgQMGQgOMHovIZg");
	var mask_graphics_414 = new cjs.Graphics().p("AnHuzQI/oHMFAoQMHAoIIJAQIHJAgpMGQgnMGpAIHg");
	var mask_graphics_415 = new cjs.Graphics().p("AmavvQJQn0MDBBQMGBBH0JRQH1JRhDMDQhAMFpRH0g");
	var mask_graphics_416 = new cjs.Graphics().p("AlrwoQJfnhMBBaQMDBaHhJhQHhJghbMBQhZMCphHhg");
	var mask_graphics_417 = new cjs.Graphics().p("Ak7xgQJunNL+BzQMABzHNJwQHNJwh1L+QhyL+pwHNg");
	var mask_graphics_418 = new cjs.Graphics().p("AkLyVQJ+m4L5CLQL8CNG4J+QG5J/iNL5QiLL6p+G5g");
	var mask_graphics_419 = new cjs.Graphics().p("AjYzHQKLmkL0CkQL3ClGkKNQGjKMilL0QikL2qMGkg");
	var mask_graphics_420 = new cjs.Graphics().p("Ailz3QKYmPLvC9QLxC9GOKaQGOKZi+LvQi8LwqZGPg");
	var mask_graphics_421 = new cjs.Graphics().p("Ahx0lQKll4LoDVQLrDVF4KmQF5KmjXLpQjULpqmF5g");
	var mask_graphics_422 = new cjs.Graphics().p("Ag81QQKxliLhDtQLjDuFiKyQFjKxjvLhQjsLjqyFig");
	var mask_graphics_423 = new cjs.Graphics().p("AgG14QK9lMLYEFQLbEFFMK+QFMK8kGLZQkELaq+FMg");
	var mask_graphics_424 = new cjs.Graphics().p("AAx2eQLHk1LQEdQLSEdE1LHQE1LHkeLQQkbLSrIE1g");
	var mask_graphics_425 = new cjs.Graphics().p("ABp3BQLRkdLGEzQLJE0EdLSQEeLQk1LHQkzLIrREdg");
	var mask_graphics_426 = new cjs.Graphics().p("ACh3hQLakGK9FKQK+FLEGLaQEGLalMK8QlKK+raEGg");
	var mask_graphics_427 = new cjs.Graphics().p("ADb3+QLijvKxFhQKzFiDuLiQDvLhljKyQlgKyriDvg");
	var mask_graphics_428 = new cjs.Graphics().p("AEV4ZQLqjWKlF3QKnF4DWLpQDXLpl5KlQl2KnrqDWg");
	var mask_graphics_429 = new cjs.Graphics().p("AFQ4xQLwi+KZGNQKaGOC+LwQC+LvmOKZQmMKarwC+g");
	var mask_graphics_430 = new cjs.Graphics().p("AGL5GQL2ilKMGiQKNGjCmL2QClL1mjKLQmiKNr2Cmg");
	var mask_graphics_431 = new cjs.Graphics().p("AHH5YQL7iNJ+G3QJ/G4CNL7QCNL6m5J+Qm2J/r7CNg");
	var mask_graphics_432 = new cjs.Graphics().p("AID5nQL/h0JvHLQJxHNB0L/QB0L+nMJvQnLJxr/B0g");
	var mask_graphics_433 = new cjs.Graphics().p("AJA5zQMChbJgHfQJiHgBbMDQBbMBnhJgQnfJisCBbg");
	var mask_graphics_434 = new cjs.Graphics().p("AJ959QMFhCJQHzQJRH0BCMEQBCMFn0JQQnyJSsFBCg");
	var mask_graphics_435 = new cjs.Graphics().p("AK56DQMHgpJAIGQJBIHApMFQApMHoHJAQoGJBsHApg");
	var mask_graphics_436 = new cjs.Graphics().p("AL26GQMIgQIuIYQIwIZAQMHQAQMHoZIvQoYIwsIAQg");
	var mask_graphics_437 = new cjs.Graphics().p("EAMGAgYMAAtg6fQMIAJIcIqQIfIsgKMGQgJMIorIdQohIVr3AAIgaAAg");
	var mask_graphics_438 = new cjs.Graphics().p("EALKAgWMAClg6bQMHAiILI7QIMI9giMGQgjMHo8IKQoYHsrMAAQgvAAgvgCg");
	var mask_graphics_439 = new cjs.Graphics().p("EAKNAgSMAEfg6UQMFA7H4JMQH5JNg7MFQg8MFpNH4QoOHEqiAAQhQAAhRgGg");
	var mask_graphics_440 = new cjs.Graphics().p("EAJQAgMMAGYg6JQMDBVHlJbQHlJehUMCQhVMDpdHkQoCGep8AAQhvAAhygMg");
	var mask_graphics_441 = new cjs.Graphics().p("EAIUAgEMAIQg56QMABuHQJrQHSJthtL/QhtMAptHQQn2F5pXABQiMAAiSgVg");
	var mask_graphics_442 = new cjs.Graphics().p("AHXf6MAKIg5nQL8CHG9J6QG9J7iGL7QiGL8p7G8QnoFXo0AAQiqAAixgfg");
	var mask_graphics_443 = new cjs.Graphics().p("AGcfuMAL/g5QQL3CfGoKIQGoKKifL2QifL3qJGoQnYE1oSAAQjHAAjOgrg");
	var mask_graphics_444 = new cjs.Graphics().p("AFgfgMAN1g41QLyC4GSKVQGUKXi4LxQi3LxqXGSQnHEWnyAAQjjAAjrg5g");
	var mask_graphics_445 = new cjs.Graphics().p("AE3fVMAPHg4fQLuDIGDKeQGEKgjILsQjJLuqfGDQm7EAncAAQj2AAj/hEg");
	var mask_graphics_446 = new cjs.Graphics().p("AEOfJMAQZg4IQLoDZF0KnQF1KpjZLnQjZLpqoFzQmuDsnHAAQkJAAkShQg");
	var mask_graphics_447 = new cjs.Graphics().p("ADle9MARqg3wQLkDqFkKvQFmKwjqLjQjrLkqwFkQmfDYmzAAQkcAAklhcg");
	var mask_graphics_448 = new cjs.Graphics().p("AC9evMAS7g3UQLdD6FVK3QFWK4j7LeQj7Ldq4FVQmRDFmeAAQkvAAk3hqg");
	var mask_graphics_449 = new cjs.Graphics().p("ACVehMAUKg24QLYELFFK+QFGK/kLLYQkLLYrAFFQmCCzmKAAQlDAAlIh4g");
	var mask_graphics_450 = new cjs.Graphics().p("ABueSMAVZg2aQLSEcE1LFQE1LGkbLSQkcLRrHE1QlyCil3AAQlVAAlZiHg");
	var mask_graphics_451 = new cjs.Graphics().p("ABHeCMAWng16QLLEsElLMQEmLNksLLQksLLrOEkQliCSljAAQlpAAlpiXg");
	var mask_graphics_452 = new cjs.Graphics().p("AAgdxMAX1g1YQLEE8EVLTQEVLTk8LEQk8LErUEUQlSCClPAAQl9AAl5iog");
	var mask_graphics_453 = new cjs.Graphics().p("AgFdfMAZBg00QK8FMEELZQEFLZlMK8QlMK9rZEDQlCB0k7AAQmRAAmHi6g");
	var mask_graphics_454 = new cjs.Graphics().p("AgrdMMAaNg0OQK1FcDzLeQD1LflcK1QlcK0rfDzQkwBlkoAAQmlAAmWjMg");
	var mask_graphics_455 = new cjs.Graphics().p("AhQc5MAbYgznQKtFrDiLjQDkLllrKsQlsKtrkDiQkeBYkVAAQm5AAmkjfg");
	var mask_graphics_456 = new cjs.Graphics().p("Ah1clMAcigy/QKkF7DSLoQDTLpl6KlQl7KkrqDRQkKBMkDAAQnOAAmxjzg");
	var mask_graphics_457 = new cjs.Graphics().p("AiZcQMAdrgyUQKcGKDBLsQDBLumJKbQmKKcruDAQj4BAjvABQnjAAm+kIg");
	var mask_graphics_458 = new cjs.Graphics().p("Ai9b6MAe0gxoQKSGZCwLxQCxLymZKSQmZKSryCvQjkA2jbAAQn6AAnKkdg");
	var mask_graphics_459 = new cjs.Graphics().p("AjgbkMAf7gw7QKIGoCfL0QCgL2moKJQmnKJr2CeQjQAsjIAAQoPAAnWkzg");
	var mask_graphics_460 = new cjs.Graphics().p("AkDbMMAhBgwLQJ/G2COL4QCOL5m2J/Qm2J/r5CNQi7Aji0AAQonAAnhlKg");
	var mask_graphics_461 = new cjs.Graphics().p("Akla0MAiGgvaQJ1HEB8L7QB9L8nEJ1QnEJ1r8B8QimAbigAAQo/AAnrlig");
	var mask_graphics_462 = new cjs.Graphics().p("AlHabMAjKgunQJrHSBrL9QBsL/nTJqQnSJrr/BqQiQAViMAAQpXAAn1l7g");
	var mask_graphics_463 = new cjs.Graphics().p("AloaCMAkNgt0QJgHgBaMAQBaMAngJgQnhJgsABZQh7AOh2AAQpxAAn+mTg");
	var mask_graphics_464 = new cjs.Graphics().p("AmIZnMAlOgs/QJVHuBIMBQBJMDnuJVQntJUsDBIQhkAKhhAAQqLAAoGmug");
	var mask_graphics_465 = new cjs.Graphics().p("AmjZQMAmFgsRQJLH5A6MCQA6MFn5JLQn5JLsEA5QhRAGhPAAQqhAAoNnEg");
	var mask_graphics_466 = new cjs.Graphics().p("Am9Y5MAm5griQJCIEArMCQAsMGoEJCQoEJBsFArQg9ADg9AAQq5AAoSnbg");
	var mask_graphics_467 = new cjs.Graphics().p("AnXYhMAnugqzQI3IPAdMEQAdMGoPI4QoPI4sFAbQgqACgpAAQrRAAoYnzg");
	var mask_graphics_468 = new cjs.Graphics().p("AnxYJMAohgqDQIuIaAOMEQAPMHoaIuQoaItsFANIgrABQrrAAodoLg");
	var mask_graphics_469 = new cjs.Graphics().p("EAMeAgUQsGAAoiokMApUgpRQIjIkAAMEQgBMHokIkQoiIisEAAIgEAAg");
	var mask_graphics_470 = new cjs.Graphics().p("EAL7AgTQsFgOoZouMAqFgofQIaIugPMEQgPMHovIZQoeIKrpAAIgtgBg");
	var mask_graphics_471 = new cjs.Graphics().p("EALYAgSQsFgcoPo5MAq3gnsQIOI5gdMDQgeMHo4IOQoaHyrQAAQgqAAgqgCg");
	var mask_graphics_472 = new cjs.Graphics().p("EAK0AgQQsEgroDpCMArlgm4QIEJDgsMCQgsMGpDIEQoTHaq4AAQg9AAg/gEg");
	var mask_graphics_473 = new cjs.Graphics().p("EAKRAgOQsDg6n5pMMAsVgmCQH4JLg6MCQg7MFpMH5QoOHDqgAAQhQAAhSgGg");
	var mask_graphics_474 = new cjs.Graphics().p("EAJtAgLQsBhJnupVMAtCglNQHuJWhJMAQhKMEpVHuQoIGsqJAAQhiAAhmgJg");
	var mask_graphics_475 = new cjs.Graphics().p("EAJKAgHQsAhXnipfMAtugkWQHjJfhYL/QhYMDpfHiQoAGXp0AAQh0AAh4gOg");
	var mask_graphics_476 = new cjs.Graphics().p("EAInAgCQr/hlnWpoMAuagjeQHXJnhnL+QhmMBpoHWQn5GCpeAAQiGAAiKgTg");
	var mask_graphics_477 = new cjs.Graphics().p("AIEf9Qr9h0nLpxMAvFgilQHLJwh1L8Qh1L+pwHLQnxFtpKAAQiXAAicgYg");
	var mask_graphics_478 = new cjs.Graphics().p("AHhf3Qr7iCm/p5MAvvghtQG/J5iDL5QiEL8p5G/QnpFZo1AAQioAAiugeg");
	var mask_graphics_479 = new cjs.Graphics().p("AG+fwQr4iQmzqCMAwXggyQGzKBiSL3QiSL5qBGzQngFGoiAAQi4AAjAgmg");
	var mask_graphics_480 = new cjs.Graphics().p("AGbfpQr1ifmnqKMAw+gf3QGnKJigL0QigL3qKGnQnWEyoPAAQjJAAjRgtg");
	var mask_graphics_481 = new cjs.Graphics().p("AF4fhQryitmaqSMAxkge8QGbKSivLwQiuL0qSGaQnMEgn9AAQjZAAjig1g");
	var mask_graphics_482 = new cjs.Graphics().p("AFWfZQrvi8mOqZMAyJgeAQGPKZi9LtQi9LxqZGOQnDENnpAAQjqAAjyg9g");
	var mask_graphics_483 = new cjs.Graphics().p("AEzfQQrrjKmBqhMAytgdDQGCKhjLLpQjLLtqhGBQm4D8nXAAQj6AAkDhGg");
	var mask_graphics_484 = new cjs.Graphics().p("AERfGQrnjYl1qoMAzRgcFQF0KnjZLmQjZLpqoF0QmtDsnGAAQkKAAkShRg");
	var mask_graphics_485 = new cjs.Graphics().p("ADve8QrjjmlnqvMAzxgbIQFoKujnLjQjnLkqvFoQmhDbm1AAQkaAAkihbg");
	var mask_graphics_486 = new cjs.Graphics().p("ADNexQrej0lbq2MA0SgaIQFbK0j1LeQj1Lgq1FbQmWDLmkAAQkqAAkxhmg");
	var mask_graphics_487 = new cjs.Graphics().p("ACselQrakClNq8MA0xgZJQFOK7kDLZQkDLcq8FNQmKC8mTAAQk6AAk/hyg");
	var mask_graphics_488 = new cjs.Graphics().p("ACLeZQrVkQlArCMA1PgYJQFALBkQLVQkRLWrCFAQl9CtmCAAQlKAAlOh+g");
	var mask_graphics_489 = new cjs.Graphics().p("ABqeMQrQkdkzrIMA1sgXJQEzLHkeLPQkeLSrJEyQlvCflyAAQlaAAlciLg");
	var mask_graphics_490 = new cjs.Graphics().p("ABJd/QrKkrkmrOMA2IgWHQEmLNksLJQksLMrOElQljCRlhAAQlrAAlpiYg");
	var mask_graphics_491 = new cjs.Graphics().p("AAodxQrEk5kYrTMA2igVGQEYLTk5LEQk6LFrTEYQlVCElRAAQl7AAl3img");
	var mask_graphics_492 = new cjs.Graphics().p("AAIdiQq+lFkKrZMA27gUEQEKLYlGK+QlHLArZEKQlGB3lCAAQmLAAmEi1g");
	var mask_graphics_493 = new cjs.Graphics().p("AgXdTQq5lTj8rdMA3TgTBQD8LclTK4QlVK5rdD9Qk4BrkxAAQmdAAmPjEg");
	var mask_graphics_494 = new cjs.Graphics().p("Ag2dDQqzlgjuriMA3pgR+QDvLhlhKxQlhKzriDvQkqBgkhAAQmtAAmbjUg");
	var mask_graphics_495 = new cjs.Graphics().p("AhWczQqrltjhrmMA3/gQ7QDhLmluKqQlvKsrmDhQkaBVkRAAQm/AAmnjkg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(404).to({graphics:mask_graphics_404,x:267.2,y:159.8}).wait(1).to({graphics:mask_graphics_405,x:267.2,y:162.4}).wait(1).to({graphics:mask_graphics_406,x:267.1,y:165}).wait(1).to({graphics:mask_graphics_407,x:267.1,y:167.5}).wait(1).to({graphics:mask_graphics_408,x:267,y:169.9}).wait(1).to({graphics:mask_graphics_409,x:267,y:172.3}).wait(1).to({graphics:mask_graphics_410,x:266.9,y:174.6}).wait(1).to({graphics:mask_graphics_411,x:266.9,y:176.9}).wait(1).to({graphics:mask_graphics_412,x:266.9,y:179.1}).wait(1).to({graphics:mask_graphics_413,x:266.9,y:181.2}).wait(1).to({graphics:mask_graphics_414,x:266.9,y:183.3}).wait(1).to({graphics:mask_graphics_415,x:266.9,y:185.3}).wait(1).to({graphics:mask_graphics_416,x:266.9,y:187.2}).wait(1).to({graphics:mask_graphics_417,x:267,y:189}).wait(1).to({graphics:mask_graphics_418,x:267,y:190.8}).wait(1).to({graphics:mask_graphics_419,x:267,y:192.5}).wait(1).to({graphics:mask_graphics_420,x:267.1,y:194.1}).wait(1).to({graphics:mask_graphics_421,x:267.1,y:195.6}).wait(1).to({graphics:mask_graphics_422,x:267.1,y:197}).wait(1).to({graphics:mask_graphics_423,x:267.1,y:198.3}).wait(1).to({graphics:mask_graphics_424,x:267.1,y:199.6}).wait(1).to({graphics:mask_graphics_425,x:267.1,y:200.7}).wait(1).to({graphics:mask_graphics_426,x:267.1,y:201.8}).wait(1).to({graphics:mask_graphics_427,x:267.1,y:202.8}).wait(1).to({graphics:mask_graphics_428,x:267.1,y:203.6}).wait(1).to({graphics:mask_graphics_429,x:267.1,y:204.4}).wait(1).to({graphics:mask_graphics_430,x:267,y:205.1}).wait(1).to({graphics:mask_graphics_431,x:267,y:205.7}).wait(1).to({graphics:mask_graphics_432,x:267,y:206.2}).wait(1).to({graphics:mask_graphics_433,x:266.9,y:206.6}).wait(1).to({graphics:mask_graphics_434,x:266.9,y:206.9}).wait(1).to({graphics:mask_graphics_435,x:266.9,y:207.1}).wait(1).to({graphics:mask_graphics_436,x:266.9,y:207.2}).wait(1).to({graphics:mask_graphics_437,x:266.9,y:207.2}).wait(1).to({graphics:mask_graphics_438,x:266.9,y:207.2}).wait(1).to({graphics:mask_graphics_439,x:266.9,y:207.2}).wait(1).to({graphics:mask_graphics_440,x:266.9,y:207.2}).wait(1).to({graphics:mask_graphics_441,x:267,y:207.3}).wait(1).to({graphics:mask_graphics_442,x:267,y:207.3}).wait(1).to({graphics:mask_graphics_443,x:267.1,y:207.3}).wait(1).to({graphics:mask_graphics_444,x:267.1,y:207.3}).wait(1).to({graphics:mask_graphics_445,x:267.1,y:207.3}).wait(1).to({graphics:mask_graphics_446,x:267.1,y:207.3}).wait(1).to({graphics:mask_graphics_447,x:267.1,y:207.3}).wait(1).to({graphics:mask_graphics_448,x:267.1,y:207.3}).wait(1).to({graphics:mask_graphics_449,x:267.1,y:207.3}).wait(1).to({graphics:mask_graphics_450,x:267.1,y:207.3}).wait(1).to({graphics:mask_graphics_451,x:267.1,y:207.3}).wait(1).to({graphics:mask_graphics_452,x:267.1,y:207.3}).wait(1).to({graphics:mask_graphics_453,x:267.1,y:207.3}).wait(1).to({graphics:mask_graphics_454,x:267.1,y:207.2}).wait(1).to({graphics:mask_graphics_455,x:267.1,y:207.2}).wait(1).to({graphics:mask_graphics_456,x:267.1,y:207.2}).wait(1).to({graphics:mask_graphics_457,x:267.1,y:207.2}).wait(1).to({graphics:mask_graphics_458,x:267,y:207.1}).wait(1).to({graphics:mask_graphics_459,x:267,y:207.1}).wait(1).to({graphics:mask_graphics_460,x:267,y:207}).wait(1).to({graphics:mask_graphics_461,x:267,y:207}).wait(1).to({graphics:mask_graphics_462,x:266.9,y:207}).wait(1).to({graphics:mask_graphics_463,x:266.9,y:206.9}).wait(1).to({graphics:mask_graphics_464,x:266.9,y:206.9}).wait(1).to({graphics:mask_graphics_465,x:266.9,y:206.8}).wait(1).to({graphics:mask_graphics_466,x:266.9,y:206.8}).wait(1).to({graphics:mask_graphics_467,x:266.9,y:206.8}).wait(1).to({graphics:mask_graphics_468,x:266.9,y:206.8}).wait(1).to({graphics:mask_graphics_469,x:266.9,y:206.8}).wait(1).to({graphics:mask_graphics_470,x:266.9,y:206.8}).wait(1).to({graphics:mask_graphics_471,x:266.9,y:206.8}).wait(1).to({graphics:mask_graphics_472,x:266.9,y:206.8}).wait(1).to({graphics:mask_graphics_473,x:267,y:206.8}).wait(1).to({graphics:mask_graphics_474,x:267,y:206.8}).wait(1).to({graphics:mask_graphics_475,x:267,y:206.9}).wait(1).to({graphics:mask_graphics_476,x:267.1,y:206.9}).wait(1).to({graphics:mask_graphics_477,x:267.1,y:206.9}).wait(1).to({graphics:mask_graphics_478,x:267.1,y:206.9}).wait(1).to({graphics:mask_graphics_479,x:267.2,y:207}).wait(1).to({graphics:mask_graphics_480,x:267.2,y:207}).wait(1).to({graphics:mask_graphics_481,x:267.2,y:207}).wait(1).to({graphics:mask_graphics_482,x:267.3,y:207}).wait(1).to({graphics:mask_graphics_483,x:267.3,y:207}).wait(1).to({graphics:mask_graphics_484,x:267.3,y:207.1}).wait(1).to({graphics:mask_graphics_485,x:267.3,y:207.1}).wait(1).to({graphics:mask_graphics_486,x:267.4,y:207.1}).wait(1).to({graphics:mask_graphics_487,x:267.4,y:207.1}).wait(1).to({graphics:mask_graphics_488,x:267.4,y:207.1}).wait(1).to({graphics:mask_graphics_489,x:267.4,y:207.1}).wait(1).to({graphics:mask_graphics_490,x:267.4,y:207.1}).wait(1).to({graphics:mask_graphics_491,x:267.4,y:207.1}).wait(1).to({graphics:mask_graphics_492,x:267.5,y:207.1}).wait(1).to({graphics:mask_graphics_493,x:267.5,y:207.1}).wait(1).to({graphics:mask_graphics_494,x:267.5,y:207.1}).wait(1).to({graphics:mask_graphics_495,x:267.4,y:207.1}).wait(76));

	// Layer 7
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(20,1,1).p("ApBpSQCFhBCDhGQCAhFCGg0QCIg1CPgdQCGgcCIARQCIAQB+A4QCBA5BgBaQBfBaA0CQQA0CQgJCUQgKCUglBuQgmBuhdCJQhdCIhhBJQhhBJh7BVQh8BWiFA2QiFA2iPApQiNApiWAAQiTAAiRgcQiLgYiFgyQiNg0h4hZQg9gtg0g4");
	this.shape_1.setTransform(331.2,218.2);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(404).to({_off:false},0).wait(167));

	// Layer 6 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_285 = new cjs.Graphics().p("AjIZHQpKn/gzsGQg2sGH+pJMAsJAmfQn+JKsGA1QhJAFhHAAQquAAoSnPg");
	var mask_1_graphics_286 = new cjs.Graphics().p("AjcYnQo8oNggsIQgisHIOo8MArIAnoQoNI8sHAhQguACgtAAQrPAAoanvg");
	var mask_1_graphics_287 = new cjs.Graphics().p("AjuYGQovocgMsIQgOsHIcovMAqHAouQocIusHANIglABQryAAogoQg");
	var mask_1_graphics_288 = new cjs.Graphics().p("EAQqAgWQsKgHoforQohoqAIsIQAGsHIrohMApCApyQojIar7AAIgTAAg");
	var mask_1_graphics_289 = new cjs.Graphics().p("EAQLAgVQsJgboRo4QoSo4AcsIQAasHI4oSMAn9Aq1QodH4rYAAIhKgBg");
	var mask_1_graphics_290 = new cjs.Graphics().p("EAPtAgSQsIgvoDpFQoDpGAwsGQAusGJGoEMAm1Ar2QoVHYq3AAQg/AAhAgEg");
	var mask_1_graphics_291 = new cjs.Graphics().p("EAPPAgPQsHhDnzpTQn0pSBEsGQBCsEJSn0MAltAs0QoNG5qXAAQhYAAhbgHg");
	var mask_1_graphics_292 = new cjs.Graphics().p("EAOyAgKQsFhXnjpfQnlpfBYsDQBVsDJfnlMAkiAtyQoDGbp5AAQhxAAh0gNg");
	var mask_1_graphics_293 = new cjs.Graphics().p("EAOVAgEQsChrnUpsQnVprBssAQBpsBJrnVMAjWAutQn5F+pbAAQiJAAiOgTg");
	var mask_1_graphics_294 = new cjs.Graphics().p("AN5f8Qr/h+nEp4QnFp3CAr9QB9r+J2nEMAiJAvlQnuFjpAAAQigAAimgcg");
	var mask_1_graphics_295 = new cjs.Graphics().p("ANdfzQr7iSm0qCQm0qDCTr5QCRr7KBm0MAg6AwdQniFHokAAQi3AAi/glg");
	var mask_1_graphics_296 = new cjs.Graphics().p("ANCfqQr3immjqOQmkqNCnr2QCkr2KNmkMAfpAxSQnVEtoLAAQjNAAjWgug");
	var mask_1_graphics_297 = new cjs.Graphics().p("AMoffQrzi6mSqYQmTqYC6rxQC4ryKXmSMAeYAyEQnIEVnxAAQjkAAjsg6g");
	var mask_1_graphics_298 = new cjs.Graphics().p("AMOfSQrujMmBqiQmBqjDNrrQDLrtKimCMAdEAy2Qm5D8nZAAQj6AAkChHg");
	var mask_1_graphics_299 = new cjs.Graphics().p("AL0fFQrojglvqsQlwqsDhrmQDernKrlwMAbwAzkQmqDlnBAAQkPAAkZhUg");
	var mask_1_graphics_300 = new cjs.Graphics().p("ALce2Qrhjylfq1Qleq2D0rgQDxrhK0lfMAaaA0RQmZDPmpAAQkmAAkthjg");
	var mask_1_graphics_301 = new cjs.Graphics().p("ALEenQrbkGlMq+QlMq+EGrZQEErbK9lNMAZEA07QmJC7mSAAQk8AAlBhzg");
	var mask_1_graphics_302 = new cjs.Graphics().p("AKteWQrUkYk6rHQk6rGEZrSQEXrVLFk6MAXsA1kQl4Cml7AAQlSAAlUiEg");
	var mask_1_graphics_303 = new cjs.Graphics().p("AKWeEQrMkrkorOQknrOErrLQEprNLOknMAWTA2JQlmCTllAAQloAAlniWg");
	var mask_1_graphics_304 = new cjs.Graphics().p("AKBdxQrFk9kVrVQkVrWE+rDQE6rFLWkVMAU5A2sQlSCClPAAQl+AAl5ipg");
	var mask_1_graphics_305 = new cjs.Graphics().p("AJrddQq8lPkCrcQkCrdFPq6QFNq9LdkCMATfA3NQk/Bxk5AAQmVAAmLi9g");
	var mask_1_graphics_306 = new cjs.Graphics().p("AJXdIQqzlhjvrjQjwrjFiqxQFfq0LijvMASEA3sQkrBhkjAAQmsAAmbjSg");
	var mask_1_graphics_307 = new cjs.Graphics().p("AJEcyQqqlzjdrpQjcrnFzqqQFxqqLojcMAQoA4IQkWBTkNAAQnEAAmqjog");
	var mask_1_graphics_308 = new cjs.Graphics().p("AIxcbQqgmFjJruQjKrtGFqfQGCqhLujJMAPLA4jQkABFj4AAQncAAm5j/g");
	var mask_1_graphics_309 = new cjs.Graphics().p("AIfcCQqWmVi2rzQi2ryGWqVQGTqXLzi2MANuA47QjrA4jhAAQn0AAnIkXg");
	var mask_1_graphics_310 = new cjs.Graphics().p("AINbpQqLmmiir4Qiir2GmqLQGkqLL4ijMAMPA5QQjTAtjLAAQoOAAnWkwg");
	var mask_1_graphics_311 = new cjs.Graphics().p("AH9bPQqAm3iPr7QiPr7G3p/QG1qBL8iPMAKxA5jQi8Aji0AAQopAAnilKg");
	var mask_1_graphics_312 = new cjs.Graphics().p("AHta0Qp0nIh7r/Qh7r9HGp0QHGp2L/h7MAJSA50QikAaidAAQpEAAnullg");
	var mask_1_graphics_313 = new cjs.Graphics().p("AHeaXQponXhnsCQhosAHXpoQHWpqMBhnMAHzA6BQiLATiFAAQphAAn5mCg");
	var mask_1_graphics_314 = new cjs.Graphics().p("AHRZ6QpdnnhTsEQhUsDHnpcQHlpdMEhTMAGTA6MQhxAMhuAAQp9AAoDmeg");
	var mask_1_graphics_315 = new cjs.Graphics().p("AHDZcQpPn3hAsGQg/sFH1pPQH1pQMGhAMAEzA6WQhXAHhVAAQqcAAoNm8g");
	var mask_1_graphics_316 = new cjs.Graphics().p("AG3Y8QpCoFgssHQgssHIFpCQIEpDMHgrMADTA6cQg8ADg8AAQq8AAoVncg");
	var mask_1_graphics_317 = new cjs.Graphics().p("AGsYcQo1oUgYsIQgYsHIUo1QITo2MIgXMAByA6gIhCABQreAAocn8g");
	var mask_1_graphics_318 = new cjs.Graphics().p("AGhX7QonojgEsIQgDsIIhomQIhooMJgEMAASA6iIgLAAQsBAAojodg");
	var mask_1_graphics_319 = new cjs.Graphics().p("AFwXZQoYoxAQsIQAQsHIwoZQIvoZMIAQMgBOA6hQsJgQoYovg");
	var mask_1_graphics_320 = new cjs.Graphics().p("AE3W2QoKo+AksHQAlsHI9oJQI9oMMHAlMgCvA6dQsHgkoKo9g");
	var mask_1_graphics_321 = new cjs.Graphics().p("AD/WUQn7pMA4sGQA4sFJLn7QJKn8MGA4MgEPA6YQsGg4n7pKg");
	var mask_1_graphics_322 = new cjs.Graphics().p("ADIVxQnspYBMsFQBMsDJYnsQJXntMEBMMgFvA6QQsEhMnspXg");
	var mask_1_graphics_323 = new cjs.Graphics().p("ACSVOQncpkBgsCQBgsCJjncQJkndMCBgMgHPA6EQsChfncpkg");
	var mask_1_graphics_324 = new cjs.Graphics().p("ABdUrQnMpwB0r/QBzsAJwnMQJvnNMAB0MgIuA53QsAhznMpwg");
	var mask_1_graphics_325 = new cjs.Graphics().p("AApUIQm8p8CIr8QCHr8J7m8QJ7m9L9CHMgKNA5oQr9iHm8p7g");
	var mask_1_graphics_326 = new cjs.Graphics().p("AgITlQmtqICbr3QCbr5KGmrQKHmtL4CbMgLrA5WQr5ibmqqGg");
	var mask_1_graphics_327 = new cjs.Graphics().p("Ag6TCQmcqTCvrzQCur0KRmbQKRmcL1CvMgNKA5BQr0iumaqRg");
	var mask_1_graphics_328 = new cjs.Graphics().p("AhqSeQmLqcDCrvQDCrwKbmJQKcmLLvDCMgOnA4qQrwjBmIqcg");
	var mask_1_graphics_329 = new cjs.Graphics().p("AiaR7Ql5qnDVrpQDVrqKml4QKll6LqDVMgQEA4RQrqjVl4qlg");
	var mask_1_graphics_330 = new cjs.Graphics().p("AjIRYQlnqxDorjQDorlKvlmQKvloLkDoMgRgA31Qrljolmqug");
	var mask_1_graphics_331 = new cjs.Graphics().p("Aj0Q0QlWq5D7rdQD7rfK4lUQK4lXLeD8MgS8A3XQrej7lUq4g");
	var mask_1_graphics_332 = new cjs.Graphics().p("AkgQRQlDrCEOrWQENrYLBlDQLAlELYEOMgUXA23QrYkOlCrAg");
	var mask_1_graphics_333 = new cjs.Graphics().p("AlKPuQkxrKEgrQQEhrQLIkwQLJkyLQEgMgVwA2UQrQkgkxrIg");
	var mask_1_graphics_334 = new cjs.Graphics().p("AlyPKQkfrREzrIQEzrJLQkeQLQkfLJEzMgXKA1vQrIkzkerQg");
	var mask_1_graphics_335 = new cjs.Graphics().p("AmVOrQkPrXFDrBQFDrCLXkNQLWkQLCFDMgYXA1NQrBlDkOrWg");
	var mask_1_graphics_336 = new cjs.Graphics().p("Am2ONQj/reFTq5QFTq7Lcj9QLcj/K7FTMgZjA0pQq5lSj+rcg");
	var mask_1_graphics_337 = new cjs.Graphics().p("AnWNuQjurjFiqxQFiqzLijsQLijvKzFiMgavA0EQqxlijtrig");
	var mask_1_graphics_338 = new cjs.Graphics().p("An2NQQjdroFyqqQFxqqLojcQLnjeKqFyMgb5AzcQqplyjdrmg");
	var mask_1_graphics_339 = new cjs.Graphics().p("AoUMyQjMrtGBqhQGAqiLtjLQLsjOKiGCMgdDAyzQqhmBjMrrg");
	var mask_1_graphics_340 = new cjs.Graphics().p("AowMUQi8ryGQqYQGPqZLxi6QLxi9KZGRMgeLAyJQqZmRi6rvg");
	var mask_1_graphics_341 = new cjs.Graphics().p("ApML2Qirr2GfqPQGeqQL1ipQL1irKQGfMgfTAxdQqPmfiqr0g");
	var mask_1_graphics_342 = new cjs.Graphics().p("ApnLYQiZr4GtqHQGtqGL5iYQL4ibKGGuMggZAwvQqGmtiZr4g");
	var mask_1_graphics_343 = new cjs.Graphics().p("AqAK7QiIr8G8p9QG7p8L8iHQL7iJJ9G8MghgAv/Qp7m8iIr6g");
	var mask_1_graphics_344 = new cjs.Graphics().p("AqYKeQh3r/HKpzQHJpyL/h2QL+h4JzHKMgikAvPQpynKh2r9g");
	var mask_1_graphics_345 = new cjs.Graphics().p("AqvKBQhmsBHYppQHXpoMChkQMAhnJpHYMgjoAudQpnnYhlsAg");
	var mask_1_graphics_346 = new cjs.Graphics().p("ArFJkQhUsDHmpeQHlpdMDhTQMDhWJdHmMgkoAtpQpenmhUsCg");
	var mask_1_graphics_347 = new cjs.Graphics().p("AraJHQhDsFH0pSQHypSMFhCQMFhEJSHzMglpAs0QpTn0hDsEg");
	var mask_1_graphics_348 = new cjs.Graphics().p("ArtIrQgxsGIApHQIApHMGgxQMGgyJHIAMgmpAr9QpHoBgysFg");
	var mask_1_graphics_349 = new cjs.Graphics().p("Ar/IPQggsHIOo7QIMo8MIgfQMHghI7IOMgnoArEQo8oOggsGg");
	var mask_1_graphics_350 = new cjs.Graphics().p("AsPH0QgPsIIaowQIaovMHgOQMIgPIvIaMgolAqLQowobgOsGg");
	var mask_1_graphics_351 = new cjs.Graphics().p("AsfHYQADsIInojQIlojMIAEQMIABIjInMgpiApQQojonADsHg");
	var mask_1_graphics_352 = new cjs.Graphics().p("AstG9QAUsHIzoXQIyoXMIAWQMHATIXIzMgqdAoTQoWozAUsHg");
	var mask_1_graphics_353 = new cjs.Graphics().p("As6GjQAmsHI+oKQI+oKMHAnQMHAkIKI/MgrWAnVQoKo+AmsGg");
	var mask_1_graphics_354 = new cjs.Graphics().p("AtGGIQA3sGJLn8QJJn9MGA4QMGA2H9JKMgsOAmXQn8pLA2sFg");
	var mask_1_graphics_355 = new cjs.Graphics().p("AtQFuQBIsEJWnwQJVnvMFBJQMEBIHwJVMgtFAlXQnvpWBIsEg");
	var mask_1_graphics_356 = new cjs.Graphics().p("AtZFVQBasDJhniQJgniMCBbQMDBZHiJhMgt6AkUQnhpgBZsCg");
	var mask_1_graphics_357 = new cjs.Graphics().p("AthE8QBssBJrnUQJrnUMABsQMBBqHUJsMgutAjSQnUpsBqr/g");
	var mask_1_graphics_358 = new cjs.Graphics().p("AtnEjQB8r+J2nGQJ1nGL+B9QL+B7HGJ2MgvfAiPQnGp2B8r9g");
	var mask_1_graphics_359 = new cjs.Graphics().p("AtsELQCOr7KAm4QJ/m4L6CPQL7CMG4KAMgwPAhKQm4qACNr6g");
	var mask_1_graphics_360 = new cjs.Graphics().p("AtwDzQCfr4KKmpQKImpL4CfQL4CeGpKKMgw/AgDQmpqJCer3g");
	var mask_1_graphics_361 = new cjs.Graphics().p("AtyDcQCwr0KTmbQKSmaLzCwQL1CvGaKTMgxsAe9QmbqTCwrzg");
	var mask_1_graphics_362 = new cjs.Graphics().p("AtzDFQDBrwKcmMQKbmLLvDBQLwDAGMKcMgyYAd1QmMqcDBrvg");
	var mask_1_graphics_363 = new cjs.Graphics().p("AtzCuQDSrrKkl8QKll9LqDSQLsDRF9KlMgzCAcsQl9qlDRrrg");
	var mask_1_graphics_364 = new cjs.Graphics().p("AtxCYQDirmKsltQKuluLmDkQLmDhFuKtMgzrAbiQltqtDirmg");
	var mask_1_graphics_365 = new cjs.Graphics().p("AtvCDQDzrhK1leQK1leLhD0QLiDyFdK1Mg0RAaXQleq1Dyrgg");
	var mask_1_graphics_366 = new cjs.Graphics().p("AtqBuQEDrbK8lPQK9lOLcEEQLbEDFPK9Mg03AZMQlOq9EDrbg");
	var mask_1_graphics_367 = new cjs.Graphics().p("AtlBaQEUrWLEk+QLEk/LVEVQLWETE+LEMg1aAYAQk+rFETrUg");
	var mask_1_graphics_368 = new cjs.Graphics().p("AteBGQEkrPLLkvQLLkuLPElQLPEjEvLKMg18AWzQkvrLEkrOg");
	var mask_1_graphics_369 = new cjs.Graphics().p("AtWAyQE1rILRkeQLSkeLIE1QLIEzEfLRMg2cAVlQkerSEzrIg");
	var mask_1_graphics_370 = new cjs.Graphics().p("AtMAgQFErCLXkOQLZkOLBFFQLBFDEOLYMg26AUWQkOrYFErAg");
	var mask_1_graphics_371 = new cjs.Graphics().p("AtCANQFVq6Ldj9QLej+K5FVQK7FTD9LdMg3WATHQj+reFTq5g");
	var mask_1_graphics_372 = new cjs.Graphics().p("As2gDQFkqzLjjtQLkjtKxFkQKzFiDtLjMg3yAR3QjsrjFiqwg");
	var mask_1_graphics_373 = new cjs.Graphics().p("AsogVQFzqqLojdQLpjcKpF0QKrFyDcLoMg4KAQmQjcrpFyqog");
	var mask_1_graphics_374 = new cjs.Graphics().p("AsaglQGDqiLtjMQLtjLKhGDQKiGBDMLsMg4iAPWQjLruGBqfg");
	var mask_1_graphics_375 = new cjs.Graphics().p("AsKg1QGSqaLxi6QLyi7KYGSQKZGQC7LyMg43AOEQi6ryGQqXg");
	var mask_1_graphics_376 = new cjs.Graphics().p("Ar4hEQGgqRL1ipQL2iqKPGhQKQGfCqL1Mg5KAMyQiqr2GgqNg");
	var mask_1_graphics_377 = new cjs.Graphics().p("ArmhTQGvqHL5iYQL6iZKFGwQKGGtCZL5Mg5cALgQiYr6GuqEg");
	var mask_1_graphics_378 = new cjs.Graphics().p("ArShhQG9p9L8iIQL9iHJ8G+QJ9G8CHL8Mg5rAKNQiIr9G9p6g");
	var mask_1_graphics_379 = new cjs.Graphics().p("Aq9hvQHLpzL/h2QMAh2JyHMQJyHLB2L+Mg55AI6Qh2sAHLpwg");
	var mask_1_graphics_380 = new cjs.Graphics().p("Aqnh8QHapoMBhlQMChlJnHaQJoHYBlMCMg6FAHmQhlsCHZpmg");
	var mask_1_graphics_381 = new cjs.Graphics().p("AqQiIQHopdMDhUQMFhTJcHnQJdHlBUMFMg6PAGSQhUsEHmpbg");
	var mask_1_graphics_382 = new cjs.Graphics().p("Ap3iTQH1pTMFhCQMGhCJRH1QJSHzBCMGMg6XAE/QhCsHH0pPg");
	var mask_1_graphics_383 = new cjs.Graphics().p("ApeieQICpHMHgxQMHgxJGIDQJHH/AwMIMg6dADrQgxsIIBpEg");
	var mask_1_graphics_384 = new cjs.Graphics().p("Ao9irQISo4MIgcQMIgbI3ISQI5IPAbMJMg6iACEQgbsJIQo2g");
	var mask_1_graphics_385 = new cjs.Graphics().p("Aoai2QIhoqMIgGQMJgGIpIhQIqIfAGMJMg6kAAdQgHsJIgong");
	var mask_1_graphics_386 = new cjs.Graphics().p("AwzQ8QAPsJIvoYQIvobMJAPQMIAQIaIwQIaIugPMIg");
	var mask_1_graphics_387 = new cjs.Graphics().p("AwxPvQAksII9oJQI+oLMIAlQMIAkIKI/QILI8glMIg");
	var mask_1_graphics_388 = new cjs.Graphics().p("AwuOiQA5sHJMn4QJMn8MGA6QMHA6H5JNQH7JKg5MHg");
	var mask_1_graphics_389 = new cjs.Graphics().p("AwqNVQBPsEJZnpQJZnrMFBPQMFBPHpJbQHrJYhPMEg");
	var mask_1_graphics_390 = new cjs.Graphics().p("AwkMJQBksCJmnYQJnnaMCBkQMCBkHYJnQHbJmhlMCg");
	var mask_1_graphics_391 = new cjs.Graphics().p("AwdK8QB5r+JznHQJznJL/B5QL/B5HIJ0QHJJyh5L/g");
	var mask_1_graphics_392 = new cjs.Graphics().p("AwVJwQCPr6J+m2QKAm4L7COQL8CPG2KAQG4J+iPL7g");
	var mask_1_graphics_393 = new cjs.Graphics().p("AwLIlQCjr2KLmlQKLmmL3CjQL4CjGkKNQGmKKijL3g");
	var mask_1_graphics_394 = new cjs.Graphics().p("Av/HaQC3rxKWmTQKXmULyC4QLyC4GTKXQGUKVi4Lzg");
	var mask_1_graphics_395 = new cjs.Graphics().p("AvzGPQDNrsKgmAQKimBLtDMQLtDNF/KiQGCKgjMLsg");
	var mask_1_graphics_396 = new cjs.Graphics().p("AvlFFQDhrmKrltQKslvLnDhQLnDhFtKsQFvKqjhLng");
	var mask_1_graphics_397 = new cjs.Graphics().p("AvVD8QD1rfK1lbQK1lcLgD1QLhD1FaK1QFcK1j1Lhg");
	var mask_1_graphics_398 = new cjs.Graphics().p("AvECzQEJrYK9lIQK/lILaEJQLZEJFHK+QFJK+kJLag");
	var mask_1_graphics_399 = new cjs.Graphics().p("AuyBrQEdrQLFk1QLJk1LSEdQLREdE0LHQE2LHkdLSg");
	var mask_1_graphics_400 = new cjs.Graphics().p("AueAkQEwrJLOkgQLQkiLKExQLKExEgLPQEiLPkxLJg");
	var mask_1_graphics_401 = new cjs.Graphics().p("AuJghQFErBLVkNQLYkOLBFFQLBFEEMLWQEOLXlELBg");
	var mask_1_graphics_402 = new cjs.Graphics().p("AtzhnQFXq3Lcj5QLgj6K3FYQK4FXD4LdQD6LelXK4g");
	var mask_1_graphics_403 = new cjs.Graphics().p("AtbirQFqquLijlQLmjlKuFqQKuFqDkLkQDmLllqKug");
	var mask_1_graphics_404 = new cjs.Graphics().p("AtDjvQF9qkLpjQQLrjRKkF9QKkF9DQLqQDRLql9Kkg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(285).to({graphics:mask_1_graphics_285,x:244.4,y:207}).wait(1).to({graphics:mask_1_graphics_286,x:242.8,y:207}).wait(1).to({graphics:mask_1_graphics_287,x:241.2,y:207}).wait(1).to({graphics:mask_1_graphics_288,x:239.5,y:207}).wait(1).to({graphics:mask_1_graphics_289,x:237.8,y:207}).wait(1).to({graphics:mask_1_graphics_290,x:236,y:207}).wait(1).to({graphics:mask_1_graphics_291,x:234.2,y:207}).wait(1).to({graphics:mask_1_graphics_292,x:232.3,y:207.1}).wait(1).to({graphics:mask_1_graphics_293,x:230.4,y:207.1}).wait(1).to({graphics:mask_1_graphics_294,x:228.5,y:207.2}).wait(1).to({graphics:mask_1_graphics_295,x:226.5,y:207.2}).wait(1).to({graphics:mask_1_graphics_296,x:224.5,y:207.2}).wait(1).to({graphics:mask_1_graphics_297,x:222.5,y:207.3}).wait(1).to({graphics:mask_1_graphics_298,x:220.4,y:207.3}).wait(1).to({graphics:mask_1_graphics_299,x:218.3,y:207.3}).wait(1).to({graphics:mask_1_graphics_300,x:216.1,y:207.3}).wait(1).to({graphics:mask_1_graphics_301,x:214,y:207.4}).wait(1).to({graphics:mask_1_graphics_302,x:211.8,y:207.4}).wait(1).to({graphics:mask_1_graphics_303,x:209.6,y:207.4}).wait(1).to({graphics:mask_1_graphics_304,x:207.3,y:207.4}).wait(1).to({graphics:mask_1_graphics_305,x:205.1,y:207.4}).wait(1).to({graphics:mask_1_graphics_306,x:202.8,y:207.4}).wait(1).to({graphics:mask_1_graphics_307,x:200.5,y:207.4}).wait(1).to({graphics:mask_1_graphics_308,x:198.2,y:207.4}).wait(1).to({graphics:mask_1_graphics_309,x:195.9,y:207.3}).wait(1).to({graphics:mask_1_graphics_310,x:193.5,y:207.3}).wait(1).to({graphics:mask_1_graphics_311,x:191.2,y:207.3}).wait(1).to({graphics:mask_1_graphics_312,x:188.8,y:207.3}).wait(1).to({graphics:mask_1_graphics_313,x:186.4,y:207.3}).wait(1).to({graphics:mask_1_graphics_314,x:184,y:207.2}).wait(1).to({graphics:mask_1_graphics_315,x:181.6,y:207.2}).wait(1).to({graphics:mask_1_graphics_316,x:179.2,y:207.2}).wait(1).to({graphics:mask_1_graphics_317,x:176.8,y:207.2}).wait(1).to({graphics:mask_1_graphics_318,x:174.4,y:207.2}).wait(1).to({graphics:mask_1_graphics_319,x:175.9,y:207.2}).wait(1).to({graphics:mask_1_graphics_320,x:178.3,y:207.1}).wait(1).to({graphics:mask_1_graphics_321,x:180.7,y:207}).wait(1).to({graphics:mask_1_graphics_322,x:183.1,y:206.8}).wait(1).to({graphics:mask_1_graphics_323,x:185.5,y:206.5}).wait(1).to({graphics:mask_1_graphics_324,x:187.9,y:206.2}).wait(1).to({graphics:mask_1_graphics_325,x:190.3,y:205.8}).wait(1).to({graphics:mask_1_graphics_326,x:192.6,y:205.4}).wait(1).to({graphics:mask_1_graphics_327,x:195,y:204.9}).wait(1).to({graphics:mask_1_graphics_328,x:197.3,y:204.3}).wait(1).to({graphics:mask_1_graphics_329,x:199.6,y:203.7}).wait(1).to({graphics:mask_1_graphics_330,x:201.9,y:203}).wait(1).to({graphics:mask_1_graphics_331,x:204.2,y:202.3}).wait(1).to({graphics:mask_1_graphics_332,x:206.5,y:201.5}).wait(1).to({graphics:mask_1_graphics_333,x:208.7,y:200.6}).wait(1).to({graphics:mask_1_graphics_334,x:211,y:199.7}).wait(1).to({graphics:mask_1_graphics_335,x:212.9,y:198.8}).wait(1).to({graphics:mask_1_graphics_336,x:214.8,y:197.9}).wait(1).to({graphics:mask_1_graphics_337,x:216.7,y:197}).wait(1).to({graphics:mask_1_graphics_338,x:218.5,y:196}).wait(1).to({graphics:mask_1_graphics_339,x:220.4,y:195}).wait(1).to({graphics:mask_1_graphics_340,x:222.2,y:194}).wait(1).to({graphics:mask_1_graphics_341,x:224,y:192.9}).wait(1).to({graphics:mask_1_graphics_342,x:225.7,y:191.7}).wait(1).to({graphics:mask_1_graphics_343,x:227.5,y:190.5}).wait(1).to({graphics:mask_1_graphics_344,x:229.2,y:189.3}).wait(1).to({graphics:mask_1_graphics_345,x:230.9,y:188.1}).wait(1).to({graphics:mask_1_graphics_346,x:232.5,y:186.8}).wait(1).to({graphics:mask_1_graphics_347,x:234.1,y:185.5}).wait(1).to({graphics:mask_1_graphics_348,x:235.7,y:184.1}).wait(1).to({graphics:mask_1_graphics_349,x:237.3,y:182.7}).wait(1).to({graphics:mask_1_graphics_350,x:238.8,y:181.3}).wait(1).to({graphics:mask_1_graphics_351,x:240.3,y:179.8}).wait(1).to({graphics:mask_1_graphics_352,x:241.8,y:178.3}).wait(1).to({graphics:mask_1_graphics_353,x:243.2,y:176.7}).wait(1).to({graphics:mask_1_graphics_354,x:244.6,y:175.2}).wait(1).to({graphics:mask_1_graphics_355,x:246,y:173.6}).wait(1).to({graphics:mask_1_graphics_356,x:247.3,y:171.9}).wait(1).to({graphics:mask_1_graphics_357,x:248.6,y:170.3}).wait(1).to({graphics:mask_1_graphics_358,x:249.8,y:168.6}).wait(1).to({graphics:mask_1_graphics_359,x:251,y:166.9}).wait(1).to({graphics:mask_1_graphics_360,x:252.2,y:165.1}).wait(1).to({graphics:mask_1_graphics_361,x:253.3,y:163.4}).wait(1).to({graphics:mask_1_graphics_362,x:254.4,y:161.6}).wait(1).to({graphics:mask_1_graphics_363,x:255.5,y:159.8}).wait(1).to({graphics:mask_1_graphics_364,x:256.5,y:157.9}).wait(1).to({graphics:mask_1_graphics_365,x:257.4,y:156}).wait(1).to({graphics:mask_1_graphics_366,x:258.4,y:154.2}).wait(1).to({graphics:mask_1_graphics_367,x:259.2,y:152.3}).wait(1).to({graphics:mask_1_graphics_368,x:260.1,y:150.3}).wait(1).to({graphics:mask_1_graphics_369,x:260.9,y:148.4}).wait(1).to({graphics:mask_1_graphics_370,x:261.6,y:146.4}).wait(1).to({graphics:mask_1_graphics_371,x:262.3,y:144.4}).wait(1).to({graphics:mask_1_graphics_372,x:263,y:142.4}).wait(1).to({graphics:mask_1_graphics_373,x:263.6,y:140.4}).wait(1).to({graphics:mask_1_graphics_374,x:264.2,y:138.4}).wait(1).to({graphics:mask_1_graphics_375,x:264.7,y:136.4}).wait(1).to({graphics:mask_1_graphics_376,x:265.2,y:134.3}).wait(1).to({graphics:mask_1_graphics_377,x:265.6,y:132.3}).wait(1).to({graphics:mask_1_graphics_378,x:266,y:130.2}).wait(1).to({graphics:mask_1_graphics_379,x:266.3,y:128.1}).wait(1).to({graphics:mask_1_graphics_380,x:266.6,y:126}).wait(1).to({graphics:mask_1_graphics_381,x:266.9,y:123.9}).wait(1).to({graphics:mask_1_graphics_382,x:267,y:121.9}).wait(1).to({graphics:mask_1_graphics_383,x:267.1,y:119.8}).wait(1).to({graphics:mask_1_graphics_384,x:267.2,y:117.2}).wait(1).to({graphics:mask_1_graphics_385,x:267.3,y:114.6}).wait(1).to({graphics:mask_1_graphics_386,x:267.3,y:115.7}).wait(1).to({graphics:mask_1_graphics_387,x:267.3,y:118.3}).wait(1).to({graphics:mask_1_graphics_388,x:267.3,y:120.9}).wait(1).to({graphics:mask_1_graphics_389,x:267.3,y:123.4}).wait(1).to({graphics:mask_1_graphics_390,x:267.3,y:126}).wait(1).to({graphics:mask_1_graphics_391,x:267.3,y:128.5}).wait(1).to({graphics:mask_1_graphics_392,x:267.3,y:131}).wait(1).to({graphics:mask_1_graphics_393,x:267.3,y:133.6}).wait(1).to({graphics:mask_1_graphics_394,x:267.3,y:136.1}).wait(1).to({graphics:mask_1_graphics_395,x:267.4,y:138.5}).wait(1).to({graphics:mask_1_graphics_396,x:267.4,y:141}).wait(1).to({graphics:mask_1_graphics_397,x:267.4,y:143.5}).wait(1).to({graphics:mask_1_graphics_398,x:267.4,y:145.9}).wait(1).to({graphics:mask_1_graphics_399,x:267.3,y:148.3}).wait(1).to({graphics:mask_1_graphics_400,x:267.3,y:150.6}).wait(1).to({graphics:mask_1_graphics_401,x:267.3,y:153}).wait(1).to({graphics:mask_1_graphics_402,x:267.3,y:155.3}).wait(1).to({graphics:mask_1_graphics_403,x:267.2,y:157.6}).wait(1).to({graphics:mask_1_graphics_404,x:267.2,y:159.8}).wait(167));

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(20,1,1).p("AtsljQCFhBCDhGQCAhFCGg0QCJg1CPgdQCFgcCIARQCIAQB+A4QCBA5BfBZQBgBaA0CRQA0CQgJCTQgKCUglBuQgmBvhdCIQhEBlhHBB");
	this.shape_2.setTransform(361.1,194.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(20,1,1).p("ApBpSQCFhBCDhGQCAhFCGg0QCIg1CPgdQCGgcCIARQCIAQB+A4QCBA5BgBaQBfBaA0CQQA0CQgJCUQgKCUglBuQgmBuhdCJQhdCIhhBJQhhBJh7BVQh8BWiFA2QiFA2iPApQiNApiWAAQiTAAiRgcQiLgYiFgyQiNg0h4hZQg9gtg0g4");
	this.shape_3.setTransform(331.2,218.2);

	var maskedShapeInstanceList = [this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2}]},285).to({state:[{t:this.shape_3}]},98).wait(188));

	// Layer 10
	this.instance_2 = new lib.ar5("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(63,389.7,1,1,33.7,0,0,0.1,-1.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(134).to({_off:false},0).wait(437));

	// Layer 5 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_134 = new cjs.Graphics().p("AlsJ7IAApEId1AAIAAJEg");
	var mask_2_graphics_135 = new cjs.Graphics().p("Au6EtIAApZId1AAIAAJZg");
	var mask_2_graphics_136 = new cjs.Graphics().p("Au6E5IAApxId1AAIAAJxg");
	var mask_2_graphics_137 = new cjs.Graphics().p("Au6FDIAAqGId1AAIAAKGg");
	var mask_2_graphics_138 = new cjs.Graphics().p("Au6FPIAAqdId1AAIAAKdg");
	var mask_2_graphics_139 = new cjs.Graphics().p("Au6FaIAAqzId1AAIAAKzg");
	var mask_2_graphics_140 = new cjs.Graphics().p("Au6FlIAArJId1AAIAALJg");
	var mask_2_graphics_141 = new cjs.Graphics().p("Au6FwIAArgId1AAIAALgg");
	var mask_2_graphics_142 = new cjs.Graphics().p("Au6F7IAAr2Id1AAIAAL2g");
	var mask_2_graphics_143 = new cjs.Graphics().p("Au6GHIAAsNId1AAIAAMNg");
	var mask_2_graphics_144 = new cjs.Graphics().p("Au6GSIAAsjId1AAIAAMjg");
	var mask_2_graphics_145 = new cjs.Graphics().p("Au6GdIAAs5Id1AAIAAM5g");
	var mask_2_graphics_146 = new cjs.Graphics().p("Au6GoIAAtPId1AAIAANPg");
	var mask_2_graphics_147 = new cjs.Graphics().p("Au6GzIAAtlId1AAIAANlg");
	var mask_2_graphics_148 = new cjs.Graphics().p("Au6G/IAAt8Id1AAIAAN8g");
	var mask_2_graphics_149 = new cjs.Graphics().p("Au6HKIAAuTId1AAIAAOTg");
	var mask_2_graphics_150 = new cjs.Graphics().p("Au6HVIAAupId1AAIAAOpg");
	var mask_2_graphics_151 = new cjs.Graphics().p("Au6HgIAAu/Id1AAIAAO/g");
	var mask_2_graphics_152 = new cjs.Graphics().p("Au6HrIAAvVId1AAIAAPVg");
	var mask_2_graphics_153 = new cjs.Graphics().p("Au6H2IAAvrId1AAIAAPrg");
	var mask_2_graphics_154 = new cjs.Graphics().p("Au6ICIAAwDId1AAIAAQDg");
	var mask_2_graphics_155 = new cjs.Graphics().p("Au6INIAAwZId1AAIAAQZg");
	var mask_2_graphics_156 = new cjs.Graphics().p("Au6IYIAAwvId1AAIAAQvg");
	var mask_2_graphics_157 = new cjs.Graphics().p("Au6IjIAAxFId1AAIAARFg");
	var mask_2_graphics_158 = new cjs.Graphics().p("Au6IvIAAxcId1AAIAARcg");
	var mask_2_graphics_159 = new cjs.Graphics().p("Au6I6IAAxzId1AAIAARzg");
	var mask_2_graphics_160 = new cjs.Graphics().p("Au6JFIAAyJId1AAIAASJg");
	var mask_2_graphics_161 = new cjs.Graphics().p("Au6JQIAAyfId1AAIAASfg");
	var mask_2_graphics_162 = new cjs.Graphics().p("Au6JcIAAy2Id1AAIAAS2g");
	var mask_2_graphics_163 = new cjs.Graphics().p("Au6JmIAAzLId1AAIAATLg");
	var mask_2_graphics_164 = new cjs.Graphics().p("Au6JxIAAziId1AAIAATig");
	var mask_2_graphics_165 = new cjs.Graphics().p("Au6J9IAAz5Id1AAIAAT5g");
	var mask_2_graphics_166 = new cjs.Graphics().p("Au6KIIAA0PId1AAIAAUPg");
	var mask_2_graphics_167 = new cjs.Graphics().p("Au6KTIAA0lId1AAIAAUlg");
	var mask_2_graphics_168 = new cjs.Graphics().p("Au6KeIAA07Id1AAIAAU7g");
	var mask_2_graphics_169 = new cjs.Graphics().p("Au6KqIAA1TId1AAIAAVTg");
	var mask_2_graphics_170 = new cjs.Graphics().p("Au6K1IAA1pId1AAIAAVpg");
	var mask_2_graphics_171 = new cjs.Graphics().p("Au6LAIAA1/Id1AAIAAV/g");
	var mask_2_graphics_172 = new cjs.Graphics().p("Au6LLIAA2VId1AAIAAWVg");
	var mask_2_graphics_173 = new cjs.Graphics().p("Au6LWIAA2rId1AAIAAWrg");
	var mask_2_graphics_174 = new cjs.Graphics().p("Au6LhIAA3CId1AAIAAXCg");
	var mask_2_graphics_175 = new cjs.Graphics().p("Au6LtIAA3ZId1AAIAAXZg");
	var mask_2_graphics_176 = new cjs.Graphics().p("Au6L4IAA3vId1AAIAAXvg");
	var mask_2_graphics_177 = new cjs.Graphics().p("Au6MDIAA4FId1AAIAAYFg");
	var mask_2_graphics_178 = new cjs.Graphics().p("Au6MOIAA4bId1AAIAAYbg");
	var mask_2_graphics_179 = new cjs.Graphics().p("Au6MaIAA4zId1AAIAAYzg");
	var mask_2_graphics_180 = new cjs.Graphics().p("Au6MlIAA5JId1AAIAAZJg");
	var mask_2_graphics_181 = new cjs.Graphics().p("Au6MwIAA5fId1AAIAAZfg");
	var mask_2_graphics_182 = new cjs.Graphics().p("Au6M7IAA51Id1AAIAAZ1g");
	var mask_2_graphics_183 = new cjs.Graphics().p("Au6NGIAA6LId1AAIAAaLg");
	var mask_2_graphics_184 = new cjs.Graphics().p("Au6NRIAA6hId1AAIAAahg");
	var mask_2_graphics_185 = new cjs.Graphics().p("Au6NcIAA63Id1AAIAAa3g");
	var mask_2_graphics_186 = new cjs.Graphics().p("Au6NoIAA7PId1AAIAAbPg");
	var mask_2_graphics_187 = new cjs.Graphics().p("Au6NzIAA7lId1AAIAAblg");
	var mask_2_graphics_188 = new cjs.Graphics().p("Au6N+IAA77Id1AAIAAb7g");
	var mask_2_graphics_189 = new cjs.Graphics().p("Au6OJIAA8RId1AAIAAcRg");
	var mask_2_graphics_190 = new cjs.Graphics().p("Au6OUIAA8nId1AAIAAcng");
	var mask_2_graphics_191 = new cjs.Graphics().p("Au6OgIAA8/Id1AAIAAc/g");
	var mask_2_graphics_192 = new cjs.Graphics().p("Au6OrIAA9VId1AAIAAdVg");
	var mask_2_graphics_193 = new cjs.Graphics().p("Au6O2IAA9rId1AAIAAdrg");
	var mask_2_graphics_194 = new cjs.Graphics().p("Au6PBIAA+BId1AAIAAeBg");
	var mask_2_graphics_195 = new cjs.Graphics().p("Au6PNIAA+YId1AAIAAeYg");
	var mask_2_graphics_196 = new cjs.Graphics().p("Au6PYIAA+vId1AAIAAevg");
	var mask_2_graphics_197 = new cjs.Graphics().p("Au6PjIAA/FId1AAIAAfFg");
	var mask_2_graphics_198 = new cjs.Graphics().p("Au6PuIAA/bId1AAIAAfbg");
	var mask_2_graphics_199 = new cjs.Graphics().p("Au6P5IAA/xId1AAIAAfxg");
	var mask_2_graphics_200 = new cjs.Graphics().p("Au6QEMAAAggHId1AAMAAAAgHg");
	var mask_2_graphics_201 = new cjs.Graphics().p("Au6QPMAAAggeId1AAMAAAAgeg");
	var mask_2_graphics_202 = new cjs.Graphics().p("Au6QbMAAAgg1Id1AAMAAAAg1g");
	var mask_2_graphics_203 = new cjs.Graphics().p("Au6QmMAAAghLId1AAMAAAAhLg");
	var mask_2_graphics_204 = new cjs.Graphics().p("Au6QxMAAAghhId1AAMAAAAhhg");
	var mask_2_graphics_205 = new cjs.Graphics().p("Au6Q8MAAAgh3Id1AAMAAAAh3g");
	var mask_2_graphics_206 = new cjs.Graphics().p("Au6RIMAAAgiPId1AAMAAAAiPg");
	var mask_2_graphics_207 = new cjs.Graphics().p("Au6RTMAAAgilId1AAMAAAAilg");
	var mask_2_graphics_208 = new cjs.Graphics().p("Au6ReMAAAgi7Id1AAMAAAAi7g");
	var mask_2_graphics_209 = new cjs.Graphics().p("Au6RpMAAAgjRId1AAMAAAAjRg");
	var mask_2_graphics_210 = new cjs.Graphics().p("Au6R0MAAAgjnId1AAMAAAAjng");
	var mask_2_graphics_211 = new cjs.Graphics().p("Au6R/MAAAgj+Id1AAMAAAAj+g");
	var mask_2_graphics_212 = new cjs.Graphics().p("Au6SLMAAAgkVId1AAMAAAAkVg");
	var mask_2_graphics_213 = new cjs.Graphics().p("Au6SWMAAAgkrId1AAMAAAAkrg");
	var mask_2_graphics_214 = new cjs.Graphics().p("Au6ShMAAAglBId1AAMAAAAlBg");
	var mask_2_graphics_215 = new cjs.Graphics().p("Au6SsMAAAglXId1AAMAAAAlXg");
	var mask_2_graphics_216 = new cjs.Graphics().p("Au6S4MAAAglvId1AAMAAAAlvg");
	var mask_2_graphics_217 = new cjs.Graphics().p("Au6TDMAAAgmFId1AAMAAAAmFg");
	var mask_2_graphics_218 = new cjs.Graphics().p("Au6TOMAAAgmbId1AAMAAAAmbg");
	var mask_2_graphics_219 = new cjs.Graphics().p("Au6TZMAAAgmxId1AAMAAAAmxg");
	var mask_2_graphics_220 = new cjs.Graphics().p("Au6TkMAAAgnHId1AAMAAAAnHg");
	var mask_2_graphics_221 = new cjs.Graphics().p("Au6TvMAAAgndId1AAMAAAAndg");
	var mask_2_graphics_222 = new cjs.Graphics().p("Au6T6MAAAgnzId1AAMAAAAnzg");
	var mask_2_graphics_223 = new cjs.Graphics().p("Au6UGMAAAgoKId1AAMAAAAoKg");
	var mask_2_graphics_224 = new cjs.Graphics().p("Au6URMAAAgohId1AAMAAAAohg");
	var mask_2_graphics_225 = new cjs.Graphics().p("Au6UcMAAAgo3Id1AAMAAAAo3g");
	var mask_2_graphics_226 = new cjs.Graphics().p("Au6UnMAAAgpNId1AAMAAAApNg");
	var mask_2_graphics_227 = new cjs.Graphics().p("Au6UzMAAAgpkId1AAMAAAApkg");
	var mask_2_graphics_228 = new cjs.Graphics().p("Au6U+MAAAgp7Id1AAMAAAAp7g");
	var mask_2_graphics_229 = new cjs.Graphics().p("Au6VJMAAAgqRId1AAMAAAAqRg");
	var mask_2_graphics_230 = new cjs.Graphics().p("Au6VUMAAAgqnId1AAMAAAAqng");
	var mask_2_graphics_231 = new cjs.Graphics().p("Au6VfMAAAgq9Id1AAMAAAAq9g");
	var mask_2_graphics_232 = new cjs.Graphics().p("Au6VrMAAAgrUId1AAMAAAArUg");
	var mask_2_graphics_233 = new cjs.Graphics().p("Au6V2MAAAgrrId1AAMAAAArrg");
	var mask_2_graphics_234 = new cjs.Graphics().p("Au6WBMAAAgsBId1AAMAAAAsBg");
	var mask_2_graphics_235 = new cjs.Graphics().p("Au6WMMAAAgsXId1AAMAAAAsXg");
	var mask_2_graphics_236 = new cjs.Graphics().p("Au6WXMAAAgstId1AAMAAAAstg");
	var mask_2_graphics_237 = new cjs.Graphics().p("Au6WiMAAAgtDId1AAMAAAAtDg");
	var mask_2_graphics_238 = new cjs.Graphics().p("Au6WtMAAAgtZId1AAMAAAAtZg");
	var mask_2_graphics_239 = new cjs.Graphics().p("Au6W5MAAAgtxId1AAMAAAAtxg");
	var mask_2_graphics_240 = new cjs.Graphics().p("Au6XEMAAAguHId1AAMAAAAuHg");
	var mask_2_graphics_241 = new cjs.Graphics().p("Au6XPMAAAgudId1AAMAAAAudg");
	var mask_2_graphics_242 = new cjs.Graphics().p("Au6XaMAAAguzId1AAMAAAAuzg");
	var mask_2_graphics_243 = new cjs.Graphics().p("Au6XmMAAAgvLId1AAMAAAAvLg");
	var mask_2_graphics_244 = new cjs.Graphics().p("Au6XwMAAAgvgId1AAMAAAAvgg");
	var mask_2_graphics_245 = new cjs.Graphics().p("Au6X8MAAAgv3Id1AAMAAAAv3g");
	var mask_2_graphics_246 = new cjs.Graphics().p("Au6YHMAAAgwNId1AAMAAAAwNg");
	var mask_2_graphics_247 = new cjs.Graphics().p("Au6YSMAAAgwjId1AAMAAAAwjg");
	var mask_2_graphics_248 = new cjs.Graphics().p("Au6YdMAAAgw6Id1AAMAAAAw6g");
	var mask_2_graphics_249 = new cjs.Graphics().p("Au6YpMAAAgxRId1AAMAAAAxRg");
	var mask_2_graphics_250 = new cjs.Graphics().p("Au6Y0MAAAgxnId1AAMAAAAxng");
	var mask_2_graphics_251 = new cjs.Graphics().p("Au6Y/MAAAgx9Id1AAMAAAAx9g");
	var mask_2_graphics_252 = new cjs.Graphics().p("Au6ZKMAAAgyTId1AAMAAAAyTg");
	var mask_2_graphics_253 = new cjs.Graphics().p("Au6ZWMAAAgyrId1AAMAAAAyrg");
	var mask_2_graphics_254 = new cjs.Graphics().p("Au6ZgMAAAgzAId1AAMAAAAzAg");
	var mask_2_graphics_255 = new cjs.Graphics().p("Au6ZsMAAAgzXId1AAMAAAAzXg");
	var mask_2_graphics_256 = new cjs.Graphics().p("Au6Z3MAAAgztId1AAMAAAAztg");
	var mask_2_graphics_257 = new cjs.Graphics().p("Au6aCMAAAg0DId1AAMAAAA0Dg");
	var mask_2_graphics_258 = new cjs.Graphics().p("Au6aNMAAAg0ZId1AAMAAAA0Zg");
	var mask_2_graphics_259 = new cjs.Graphics().p("Au6aYMAAAg0vId1AAMAAAA0vg");
	var mask_2_graphics_260 = new cjs.Graphics().p("Au6akMAAAg1HId1AAMAAAA1Hg");
	var mask_2_graphics_261 = new cjs.Graphics().p("Au6avMAAAg1dId1AAMAAAA1dg");
	var mask_2_graphics_262 = new cjs.Graphics().p("Au6a6MAAAg1zId1AAMAAAA1zg");
	var mask_2_graphics_263 = new cjs.Graphics().p("Au6bFMAAAg2JId1AAMAAAA2Jg");
	var mask_2_graphics_264 = new cjs.Graphics().p("Au6bQMAAAg2fId1AAMAAAA2fg");
	var mask_2_graphics_265 = new cjs.Graphics().p("Au6bbMAAAg22Id1AAMAAAA22g");
	var mask_2_graphics_266 = new cjs.Graphics().p("EgFsAhBMAAAg3MId1AAMAAAA3Mg");
	var mask_2_graphics_267 = new cjs.Graphics().p("Au6cCMAAAg4DId1AAMAAAA4Dg");
	var mask_2_graphics_268 = new cjs.Graphics().p("Au6cdMAAAg45Id1AAMAAAA45g");
	var mask_2_graphics_269 = new cjs.Graphics().p("EgFsAiRMAAAg5tId1AAMAAAA5tg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(134).to({graphics:mask_2_graphics_134,x:154.5,y:63.5}).wait(1).to({graphics:mask_2_graphics_135,x:213.6,y:99.1}).wait(1).to({graphics:mask_2_graphics_136,x:213.6,y:100.2}).wait(1).to({graphics:mask_2_graphics_137,x:213.6,y:101.3}).wait(1).to({graphics:mask_2_graphics_138,x:213.6,y:102.4}).wait(1).to({graphics:mask_2_graphics_139,x:213.6,y:103.6}).wait(1).to({graphics:mask_2_graphics_140,x:213.6,y:104.7}).wait(1).to({graphics:mask_2_graphics_141,x:213.6,y:105.8}).wait(1).to({graphics:mask_2_graphics_142,x:213.6,y:106.9}).wait(1).to({graphics:mask_2_graphics_143,x:213.6,y:108}).wait(1).to({graphics:mask_2_graphics_144,x:213.6,y:109.2}).wait(1).to({graphics:mask_2_graphics_145,x:213.6,y:110.3}).wait(1).to({graphics:mask_2_graphics_146,x:213.6,y:111.4}).wait(1).to({graphics:mask_2_graphics_147,x:213.6,y:112.5}).wait(1).to({graphics:mask_2_graphics_148,x:213.6,y:113.7}).wait(1).to({graphics:mask_2_graphics_149,x:213.6,y:114.8}).wait(1).to({graphics:mask_2_graphics_150,x:213.6,y:115.9}).wait(1).to({graphics:mask_2_graphics_151,x:213.6,y:117}).wait(1).to({graphics:mask_2_graphics_152,x:213.6,y:118.1}).wait(1).to({graphics:mask_2_graphics_153,x:213.6,y:119.3}).wait(1).to({graphics:mask_2_graphics_154,x:213.6,y:120.4}).wait(1).to({graphics:mask_2_graphics_155,x:213.6,y:121.5}).wait(1).to({graphics:mask_2_graphics_156,x:213.6,y:122.6}).wait(1).to({graphics:mask_2_graphics_157,x:213.6,y:123.7}).wait(1).to({graphics:mask_2_graphics_158,x:213.6,y:124.9}).wait(1).to({graphics:mask_2_graphics_159,x:213.6,y:126}).wait(1).to({graphics:mask_2_graphics_160,x:213.6,y:127.1}).wait(1).to({graphics:mask_2_graphics_161,x:213.6,y:128.2}).wait(1).to({graphics:mask_2_graphics_162,x:213.6,y:129.4}).wait(1).to({graphics:mask_2_graphics_163,x:213.6,y:130.5}).wait(1).to({graphics:mask_2_graphics_164,x:213.6,y:131.6}).wait(1).to({graphics:mask_2_graphics_165,x:213.6,y:132.7}).wait(1).to({graphics:mask_2_graphics_166,x:213.6,y:133.9}).wait(1).to({graphics:mask_2_graphics_167,x:213.6,y:135}).wait(1).to({graphics:mask_2_graphics_168,x:213.6,y:136.1}).wait(1).to({graphics:mask_2_graphics_169,x:213.6,y:137.2}).wait(1).to({graphics:mask_2_graphics_170,x:213.6,y:138.3}).wait(1).to({graphics:mask_2_graphics_171,x:213.6,y:139.5}).wait(1).to({graphics:mask_2_graphics_172,x:213.6,y:140.6}).wait(1).to({graphics:mask_2_graphics_173,x:213.6,y:141.7}).wait(1).to({graphics:mask_2_graphics_174,x:213.6,y:142.8}).wait(1).to({graphics:mask_2_graphics_175,x:213.6,y:143.9}).wait(1).to({graphics:mask_2_graphics_176,x:213.6,y:145.1}).wait(1).to({graphics:mask_2_graphics_177,x:213.6,y:146.2}).wait(1).to({graphics:mask_2_graphics_178,x:213.6,y:147.3}).wait(1).to({graphics:mask_2_graphics_179,x:213.6,y:148.4}).wait(1).to({graphics:mask_2_graphics_180,x:213.6,y:149.5}).wait(1).to({graphics:mask_2_graphics_181,x:213.6,y:150.7}).wait(1).to({graphics:mask_2_graphics_182,x:213.6,y:151.8}).wait(1).to({graphics:mask_2_graphics_183,x:213.6,y:152.9}).wait(1).to({graphics:mask_2_graphics_184,x:213.6,y:154}).wait(1).to({graphics:mask_2_graphics_185,x:213.6,y:155.2}).wait(1).to({graphics:mask_2_graphics_186,x:213.6,y:156.3}).wait(1).to({graphics:mask_2_graphics_187,x:213.6,y:157.4}).wait(1).to({graphics:mask_2_graphics_188,x:213.6,y:158.5}).wait(1).to({graphics:mask_2_graphics_189,x:213.6,y:159.6}).wait(1).to({graphics:mask_2_graphics_190,x:213.6,y:160.8}).wait(1).to({graphics:mask_2_graphics_191,x:213.6,y:161.9}).wait(1).to({graphics:mask_2_graphics_192,x:213.6,y:163}).wait(1).to({graphics:mask_2_graphics_193,x:213.6,y:164.1}).wait(1).to({graphics:mask_2_graphics_194,x:213.6,y:165.2}).wait(1).to({graphics:mask_2_graphics_195,x:213.6,y:166.4}).wait(1).to({graphics:mask_2_graphics_196,x:213.6,y:167.5}).wait(1).to({graphics:mask_2_graphics_197,x:213.6,y:168.6}).wait(1).to({graphics:mask_2_graphics_198,x:213.6,y:169.7}).wait(1).to({graphics:mask_2_graphics_199,x:213.6,y:170.8}).wait(1).to({graphics:mask_2_graphics_200,x:213.6,y:172}).wait(1).to({graphics:mask_2_graphics_201,x:213.6,y:173.1}).wait(1).to({graphics:mask_2_graphics_202,x:213.6,y:174.2}).wait(1).to({graphics:mask_2_graphics_203,x:213.6,y:175.3}).wait(1).to({graphics:mask_2_graphics_204,x:213.6,y:176.5}).wait(1).to({graphics:mask_2_graphics_205,x:213.6,y:177.6}).wait(1).to({graphics:mask_2_graphics_206,x:213.6,y:178.7}).wait(1).to({graphics:mask_2_graphics_207,x:213.6,y:179.8}).wait(1).to({graphics:mask_2_graphics_208,x:213.6,y:180.9}).wait(1).to({graphics:mask_2_graphics_209,x:213.6,y:182.1}).wait(1).to({graphics:mask_2_graphics_210,x:213.6,y:183.2}).wait(1).to({graphics:mask_2_graphics_211,x:213.6,y:184.3}).wait(1).to({graphics:mask_2_graphics_212,x:213.6,y:185.4}).wait(1).to({graphics:mask_2_graphics_213,x:213.6,y:186.5}).wait(1).to({graphics:mask_2_graphics_214,x:213.6,y:187.7}).wait(1).to({graphics:mask_2_graphics_215,x:213.6,y:188.8}).wait(1).to({graphics:mask_2_graphics_216,x:213.6,y:189.9}).wait(1).to({graphics:mask_2_graphics_217,x:213.6,y:191}).wait(1).to({graphics:mask_2_graphics_218,x:213.6,y:192.1}).wait(1).to({graphics:mask_2_graphics_219,x:213.6,y:193.3}).wait(1).to({graphics:mask_2_graphics_220,x:213.6,y:194.4}).wait(1).to({graphics:mask_2_graphics_221,x:213.6,y:195.5}).wait(1).to({graphics:mask_2_graphics_222,x:213.6,y:196.7}).wait(1).to({graphics:mask_2_graphics_223,x:213.6,y:197.8}).wait(1).to({graphics:mask_2_graphics_224,x:213.6,y:198.9}).wait(1).to({graphics:mask_2_graphics_225,x:213.6,y:200}).wait(1).to({graphics:mask_2_graphics_226,x:213.6,y:201.1}).wait(1).to({graphics:mask_2_graphics_227,x:213.6,y:202.3}).wait(1).to({graphics:mask_2_graphics_228,x:213.6,y:203.4}).wait(1).to({graphics:mask_2_graphics_229,x:213.6,y:204.5}).wait(1).to({graphics:mask_2_graphics_230,x:213.6,y:205.6}).wait(1).to({graphics:mask_2_graphics_231,x:213.6,y:206.7}).wait(1).to({graphics:mask_2_graphics_232,x:213.6,y:207.9}).wait(1).to({graphics:mask_2_graphics_233,x:213.6,y:209}).wait(1).to({graphics:mask_2_graphics_234,x:213.6,y:210.1}).wait(1).to({graphics:mask_2_graphics_235,x:213.6,y:211.2}).wait(1).to({graphics:mask_2_graphics_236,x:213.6,y:212.3}).wait(1).to({graphics:mask_2_graphics_237,x:213.6,y:213.5}).wait(1).to({graphics:mask_2_graphics_238,x:213.6,y:214.6}).wait(1).to({graphics:mask_2_graphics_239,x:213.6,y:215.7}).wait(1).to({graphics:mask_2_graphics_240,x:213.6,y:216.8}).wait(1).to({graphics:mask_2_graphics_241,x:213.6,y:218}).wait(1).to({graphics:mask_2_graphics_242,x:213.6,y:219.1}).wait(1).to({graphics:mask_2_graphics_243,x:213.6,y:220.2}).wait(1).to({graphics:mask_2_graphics_244,x:213.6,y:221.3}).wait(1).to({graphics:mask_2_graphics_245,x:213.6,y:222.4}).wait(1).to({graphics:mask_2_graphics_246,x:213.6,y:223.6}).wait(1).to({graphics:mask_2_graphics_247,x:213.6,y:224.7}).wait(1).to({graphics:mask_2_graphics_248,x:213.6,y:225.8}).wait(1).to({graphics:mask_2_graphics_249,x:213.6,y:226.9}).wait(1).to({graphics:mask_2_graphics_250,x:213.6,y:228}).wait(1).to({graphics:mask_2_graphics_251,x:213.6,y:229.2}).wait(1).to({graphics:mask_2_graphics_252,x:213.6,y:230.3}).wait(1).to({graphics:mask_2_graphics_253,x:213.6,y:231.4}).wait(1).to({graphics:mask_2_graphics_254,x:213.6,y:232.5}).wait(1).to({graphics:mask_2_graphics_255,x:213.6,y:233.6}).wait(1).to({graphics:mask_2_graphics_256,x:213.6,y:234.8}).wait(1).to({graphics:mask_2_graphics_257,x:213.6,y:235.9}).wait(1).to({graphics:mask_2_graphics_258,x:213.6,y:237}).wait(1).to({graphics:mask_2_graphics_259,x:213.6,y:238.1}).wait(1).to({graphics:mask_2_graphics_260,x:213.6,y:239.3}).wait(1).to({graphics:mask_2_graphics_261,x:213.6,y:240.4}).wait(1).to({graphics:mask_2_graphics_262,x:213.6,y:241.5}).wait(1).to({graphics:mask_2_graphics_263,x:213.6,y:242.6}).wait(1).to({graphics:mask_2_graphics_264,x:213.6,y:243.7}).wait(1).to({graphics:mask_2_graphics_265,x:213.6,y:244.9}).wait(1).to({graphics:mask_2_graphics_266,x:154.5,y:211.3}).wait(1).to({graphics:mask_2_graphics_267,x:213.6,y:248.7}).wait(1).to({graphics:mask_2_graphics_268,x:213.6,y:251.3}).wait(1).to({graphics:mask_2_graphics_269,x:154.5,y:219.3}).wait(302));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(20,1,1).p("AMA3wIjuHWMgURAoL");
	this.shape_4.setTransform(213.3,275.2);
	this.shape_4._off = true;

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(134).to({_off:false},0).wait(437));

	// Layer 9
	this.instance_3 = new lib.ar1("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(115.9,147.7,1,1,7.5,0,0,-0.7,0.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).wait(562));

	// Layer 3 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_9 = new cjs.Graphics().p("ACsRfICHhfIEdGVIiHBfg");
	var mask_3_graphics_10 = new cjs.Graphics().p("AjZiUICYhrIEbGTIiXBsg");
	var mask_3_graphics_11 = new cjs.Graphics().p("AjiiOICph3IEcGTIipB4g");
	var mask_3_graphics_12 = new cjs.Graphics().p("AjqiIIC6iDIEbGTIi5CEg");
	var mask_3_graphics_13 = new cjs.Graphics().p("AjziCIDLiOIEcGSIjKCPg");
	var mask_3_graphics_14 = new cjs.Graphics().p("Aj7h9IDciZIEbGSIjbCbg");
	var mask_3_graphics_15 = new cjs.Graphics().p("AkDh3IDsilIEcGRIjsCog");
	var mask_3_graphics_16 = new cjs.Graphics().p("AkMhxID+ixIEbGRIj8C0g");
	var mask_3_graphics_17 = new cjs.Graphics().p("AkUhrIEOi8IEbGPIkNDBg");
	var mask_3_graphics_18 = new cjs.Graphics().p("AkchlIEejJIEbGQIkdDNg");
	var mask_3_graphics_19 = new cjs.Graphics().p("AklhgIEwjTIEbGPIktDYg");
	var mask_3_graphics_20 = new cjs.Graphics().p("AkthaIFAjfIEbGPIk9Dkg");
	var mask_3_graphics_21 = new cjs.Graphics().p("Ak1hUIFRjrIEbGPIlODwg");
	var mask_3_graphics_22 = new cjs.Graphics().p("Ak+hOIFij3IEbGPIlfD8g");
	var mask_3_graphics_23 = new cjs.Graphics().p("AlGhIIFzkCIEaGNIlvEJg");
	var mask_3_graphics_24 = new cjs.Graphics().p("AlOhDIGDkNIEaGNIl/EUg");
	var mask_3_graphics_25 = new cjs.Graphics().p("AlXg9IGVkZIEaGNImREgg");
	var mask_3_graphics_26 = new cjs.Graphics().p("Alfg4IGmkkIEZGNImhEsg");
	var mask_3_graphics_27 = new cjs.Graphics().p("AlogyIG3kwIEaGMImzE5g");
	var mask_3_graphics_28 = new cjs.Graphics().p("AlwgsIHIk7IEZGLInDFFg");
	var mask_3_graphics_29 = new cjs.Graphics().p("Al4gmIHZlIIEZGMInUFRg");
	var mask_3_graphics_30 = new cjs.Graphics().p("AmBggIHqlTIEZGLInlFcg");
	var mask_3_graphics_31 = new cjs.Graphics().p("AmJgbIH6leIEZGKIn1Fpg");
	var mask_3_graphics_32 = new cjs.Graphics().p("AmRgVIILlqIEYGLIoFF0g");
	var mask_3_graphics_33 = new cjs.Graphics().p("AmagPIIdl2IEYGKIoXGBg");
	var mask_3_graphics_34 = new cjs.Graphics().p("AmigJIItmBIEYGKIonGMg");
	var mask_3_graphics_35 = new cjs.Graphics().p("AmqgEII+mMIEYGKIo4GXg");
	var mask_3_graphics_36 = new cjs.Graphics().p("AmzABIJPmXIEYGKIpJGjg");
	var mask_3_graphics_37 = new cjs.Graphics().p("Am7AHIJgmjIEXGJIpZGwg");
	var mask_3_graphics_38 = new cjs.Graphics().p("AnEANIJymvIEXGJIpqG8g");
	var mask_3_graphics_39 = new cjs.Graphics().p("AnMATIKDm7IEWGJIp7HIg");
	var mask_3_graphics_40 = new cjs.Graphics().p("AnUAZIKTnHIEWGJIqLHUg");
	var mask_3_graphics_41 = new cjs.Graphics().p("AndAeIKknRIEXGHIqcHgg");
	var mask_3_graphics_42 = new cjs.Graphics().p("AnlAkIK1ndIEWGHIqtHsg");
	var mask_3_graphics_43 = new cjs.Graphics().p("AntApILGnoIEWGHIq+H4g");
	var mask_3_graphics_44 = new cjs.Graphics().p("An2AvILXn0IEWGHIrOIEg");
	var mask_3_graphics_45 = new cjs.Graphics().p("An+A1ILon/IEVGGIrfIQg");
	var mask_3_graphics_46 = new cjs.Graphics().p("AoGA7IL5oMIEUGHIrvIcg");
	var mask_3_graphics_47 = new cjs.Graphics().p("AoPBBIMKoXIEVGFIsAIog");
	var mask_3_graphics_48 = new cjs.Graphics().p("AoXBGIMaoiIEVGFIsRI0g");
	var mask_3_graphics_49 = new cjs.Graphics().p("AofBMIMrouIEVGFIsiJAg");
	var mask_3_graphics_50 = new cjs.Graphics().p("AooBSIM9o6IEUGFIszJMg");
	var mask_3_graphics_51 = new cjs.Graphics().p("AowBYINNpFIEUGDItDJZg");
	var mask_3_graphics_52 = new cjs.Graphics().p("Ao5BdINfpQIEUGDItUJkg");
	var mask_3_graphics_53 = new cjs.Graphics().p("ApBBjINvpcIEUGDItlJwg");
	var mask_3_graphics_54 = new cjs.Graphics().p("ApJBpIOApoIETGCIt1J9g");
	var mask_3_graphics_55 = new cjs.Graphics().p("ApSBvIOSp0IETGCIuGKJg");
	var mask_3_graphics_56 = new cjs.Graphics().p("ApaB0IOjp/IESGCIuXKVg");
	var mask_3_graphics_57 = new cjs.Graphics().p("ApiB7IOyqLIEUGBIunKgg");
	var mask_3_graphics_58 = new cjs.Graphics().p("AprCAIPEqWIETGBIu4Ksg");
	var mask_3_graphics_59 = new cjs.Graphics().p("ApzCGIPVqiIESGBIvIK4g");
	var mask_3_graphics_60 = new cjs.Graphics().p("Ap7CMIPmqtIERF/IvYLEg");
	var mask_3_graphics_61 = new cjs.Graphics().p("AqECSIP3q6IESGAIvqLQg");
	var mask_3_graphics_62 = new cjs.Graphics().p("AqMCXIQIrEIERF/Iv6Lcg");
	var mask_3_graphics_63 = new cjs.Graphics().p("AqUCdIQZrQIERF/IwLLog");
	var mask_3_graphics_64 = new cjs.Graphics().p("AqdCjIQqrcIERF+IwcL1g");
	var mask_3_graphics_65 = new cjs.Graphics().p("AqlCpIQ7roIEQF+IwsMBg");
	var mask_3_graphics_66 = new cjs.Graphics().p("AquCvIRMrzIERF9Iw+MMg");
	var mask_3_graphics_67 = new cjs.Graphics().p("Aq2C0IRdr+IEQF9IxOMYg");
	var mask_3_graphics_68 = new cjs.Graphics().p("Aq+C6IRtsKIEQF9IxeMkg");
	var mask_3_graphics_69 = new cjs.Graphics().p("ArHDAIR/sWIEQF9IxwMwg");
	var mask_3_graphics_70 = new cjs.Graphics().p("ArPDGISPsiIEQF8IyAM9g");
	var mask_3_graphics_71 = new cjs.Graphics().p("ArXDLISgstIEQF8IyRNJg");
	var mask_3_graphics_72 = new cjs.Graphics().p("ArgDRISys5IEPF8IyiNUg");
	var mask_3_graphics_73 = new cjs.Graphics().p("AroDXITCtEIEPF7IyyNgg");
	var mask_3_graphics_74 = new cjs.Graphics().p("ArwDcITStPIEPF6IzCNtg");
	var mask_3_graphics_75 = new cjs.Graphics().p("Ar5DiITktbIEPF6IzUN5g");
	var mask_3_graphics_76 = new cjs.Graphics().p("AsBDoIT1tnIEOF6IzkOFg");
	var mask_3_graphics_77 = new cjs.Graphics().p("AsJDuIUGtyIEOF5Iz1OQg");
	var mask_3_graphics_78 = new cjs.Graphics().p("AsSD0IUXt/IEOF5I0GOdg");
	var mask_3_graphics_79 = new cjs.Graphics().p("AsaD6IUouKIENF4I0WOpg");
	var mask_3_graphics_80 = new cjs.Graphics().p("AsjD/IU5uVIEOF4I0nO1g");
	var mask_3_graphics_81 = new cjs.Graphics().p("AsrEFIVKuhIENF4I04PBg");
	var mask_3_graphics_82 = new cjs.Graphics().p("AszELIVbutIEMF4I1IPNg");
	var mask_3_graphics_83 = new cjs.Graphics().p("As8ERIVsu4IENF3I1ZPYg");
	var mask_3_graphics_84 = new cjs.Graphics().p("AtEEWIV9vDIEMF2I1qPlg");
	var mask_3_graphics_85 = new cjs.Graphics().p("AtMEcIWNvPIENF2I17Pxg");
	var mask_3_graphics_86 = new cjs.Graphics().p("AtVEiIWfvbIEMF2I2LP9g");
	var mask_3_graphics_87 = new cjs.Graphics().p("AtdEoIWvvnIEMF1I2cQKg");
	var mask_3_graphics_88 = new cjs.Graphics().p("AtlEuIXAvzIELF1I2sQVg");
	var mask_3_graphics_89 = new cjs.Graphics().p("AtuE0IXRv/IEMF1I2+Qhg");
	var mask_3_graphics_90 = new cjs.Graphics().p("At2E5IXiwJIELF0I3OQtg");
	var mask_3_graphics_91 = new cjs.Graphics().p("At+E+IXzwUIELFzI3fQ6g");
	var mask_3_graphics_92 = new cjs.Graphics().p("AuHFEIYEwgIELF0I3wRFg");
	var mask_3_graphics_93 = new cjs.Graphics().p("AuPFKIYVwsIEKFzI4ARSg");
	var mask_3_graphics_94 = new cjs.Graphics().p("AuYFQIYmw3IELFyI4RRdg");
	var mask_3_graphics_95 = new cjs.Graphics().p("AugFWIY3xDIEKFyI4hRpg");
	var mask_3_graphics_96 = new cjs.Graphics().p("AuoFcIZIxPIEJFyI4xR1g");
	var mask_3_graphics_97 = new cjs.Graphics().p("AuxFhIZZxaIEKFxI5DSCg");
	var mask_3_graphics_98 = new cjs.Graphics().p("Au5FnIZqxmIEJFxI5TSOg");
	var mask_3_graphics_99 = new cjs.Graphics().p("AvBFtIZ6xyIEKFxI5kSag");
	var mask_3_graphics_100 = new cjs.Graphics().p("AvKFzIaMx9IEJFwI51Slg");
	var mask_3_graphics_101 = new cjs.Graphics().p("AvSF4IacyIIEJFvI6FSyg");
	var mask_3_graphics_102 = new cjs.Graphics().p("AvaF+IatyUIEIFvI6VS+g");
	var mask_3_graphics_103 = new cjs.Graphics().p("AvjGEIa+ygIEJFvI6nTKg");
	var mask_3_graphics_104 = new cjs.Graphics().p("AvrGKIbPysIEIFvI63TWg");
	var mask_3_graphics_105 = new cjs.Graphics().p("Av5GXIbpzGIEKFxI7TTug");
	var mask_3_graphics_106 = new cjs.Graphics().p("AwHGlIcEzhIELFzI7vUGg");
	var mask_3_graphics_107 = new cjs.Graphics().p("AwUGzIcdz8IEMF1I8KUeg");
	var mask_3_graphics_108 = new cjs.Graphics().p("AwiHAIc40XIENF5I8mU2g");
	var mask_3_graphics_109 = new cjs.Graphics().p("AwwHNIdS0xIEPF8I9CVNg");
	var mask_3_graphics_110 = new cjs.Graphics().p("Aw+HbIds1MIERF+I9eVlg");
	var mask_3_graphics_111 = new cjs.Graphics().p("AxLHpIeG1oIERGBI95V9g");
	var mask_3_graphics_112 = new cjs.Graphics().p("AxaH2Ieh2CIEUGDI+WWVg");
	var mask_3_graphics_113 = new cjs.Graphics().p("AxnIDIe72cIEUGFI+xWug");
	var mask_3_graphics_114 = new cjs.Graphics().p("Ax1IRIfV23IEWGHI/MXGg");
	var mask_3_graphics_115 = new cjs.Graphics().p("AyDIfIfv3SIEYGKI/oXdg");
	var mask_3_graphics_116 = new cjs.Graphics().p("AyRIsMAgJgXtIEZGOMggEAX0g");
	var mask_3_graphics_117 = new cjs.Graphics().p("AyeI6MAgjgYIIEaGQMggfAYNg");
	var mask_3_graphics_118 = new cjs.Graphics().p("AysJHMAg9gYiIEcGSMgg7AYlg");
	var mask_3_graphics_119 = new cjs.Graphics().p("As8RfMAhXgY9IEdGVMghWAY9g");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_3_graphics_9,x:59.2,y:152.4}).wait(1).to({graphics:mask_3_graphics_10,x:98.3,y:279.2}).wait(1).to({graphics:mask_3_graphics_11,x:99.1,y:278.6}).wait(1).to({graphics:mask_3_graphics_12,x:99.9,y:278.1}).wait(1).to({graphics:mask_3_graphics_13,x:100.8,y:277.5}).wait(1).to({graphics:mask_3_graphics_14,x:101.6,y:276.9}).wait(1).to({graphics:mask_3_graphics_15,x:102.5,y:276.3}).wait(1).to({graphics:mask_3_graphics_16,x:103.3,y:275.7}).wait(1).to({graphics:mask_3_graphics_17,x:104.1,y:275.2}).wait(1).to({graphics:mask_3_graphics_18,x:105,y:274.6}).wait(1).to({graphics:mask_3_graphics_19,x:105.8,y:274}).wait(1).to({graphics:mask_3_graphics_20,x:106.6,y:273.4}).wait(1).to({graphics:mask_3_graphics_21,x:107.5,y:272.8}).wait(1).to({graphics:mask_3_graphics_22,x:108.3,y:272.2}).wait(1).to({graphics:mask_3_graphics_23,x:109.1,y:271.7}).wait(1).to({graphics:mask_3_graphics_24,x:110,y:271.1}).wait(1).to({graphics:mask_3_graphics_25,x:110.8,y:270.5}).wait(1).to({graphics:mask_3_graphics_26,x:111.6,y:269.9}).wait(1).to({graphics:mask_3_graphics_27,x:112.5,y:269.3}).wait(1).to({graphics:mask_3_graphics_28,x:113.3,y:268.8}).wait(1).to({graphics:mask_3_graphics_29,x:114.2,y:268.2}).wait(1).to({graphics:mask_3_graphics_30,x:115,y:267.6}).wait(1).to({graphics:mask_3_graphics_31,x:115.8,y:267}).wait(1).to({graphics:mask_3_graphics_32,x:116.7,y:266.4}).wait(1).to({graphics:mask_3_graphics_33,x:117.5,y:265.8}).wait(1).to({graphics:mask_3_graphics_34,x:118.3,y:265.3}).wait(1).to({graphics:mask_3_graphics_35,x:119.2,y:264.7}).wait(1).to({graphics:mask_3_graphics_36,x:120,y:264.1}).wait(1).to({graphics:mask_3_graphics_37,x:120.8,y:263.5}).wait(1).to({graphics:mask_3_graphics_38,x:121.7,y:262.9}).wait(1).to({graphics:mask_3_graphics_39,x:122.5,y:262.3}).wait(1).to({graphics:mask_3_graphics_40,x:123.3,y:261.8}).wait(1).to({graphics:mask_3_graphics_41,x:124.2,y:261.2}).wait(1).to({graphics:mask_3_graphics_42,x:125,y:260.6}).wait(1).to({graphics:mask_3_graphics_43,x:125.9,y:260}).wait(1).to({graphics:mask_3_graphics_44,x:126.7,y:259.4}).wait(1).to({graphics:mask_3_graphics_45,x:127.5,y:258.9}).wait(1).to({graphics:mask_3_graphics_46,x:128.4,y:258.3}).wait(1).to({graphics:mask_3_graphics_47,x:129.2,y:257.7}).wait(1).to({graphics:mask_3_graphics_48,x:130,y:257.1}).wait(1).to({graphics:mask_3_graphics_49,x:130.9,y:256.5}).wait(1).to({graphics:mask_3_graphics_50,x:131.7,y:255.9}).wait(1).to({graphics:mask_3_graphics_51,x:132.5,y:255.4}).wait(1).to({graphics:mask_3_graphics_52,x:133.4,y:254.8}).wait(1).to({graphics:mask_3_graphics_53,x:134.2,y:254.2}).wait(1).to({graphics:mask_3_graphics_54,x:135,y:253.6}).wait(1).to({graphics:mask_3_graphics_55,x:135.9,y:253}).wait(1).to({graphics:mask_3_graphics_56,x:136.7,y:252.5}).wait(1).to({graphics:mask_3_graphics_57,x:137.6,y:251.8}).wait(1).to({graphics:mask_3_graphics_58,x:138.4,y:251.3}).wait(1).to({graphics:mask_3_graphics_59,x:139.2,y:250.7}).wait(1).to({graphics:mask_3_graphics_60,x:140.1,y:250.1}).wait(1).to({graphics:mask_3_graphics_61,x:140.9,y:249.5}).wait(1).to({graphics:mask_3_graphics_62,x:141.7,y:248.9}).wait(1).to({graphics:mask_3_graphics_63,x:142.6,y:248.4}).wait(1).to({graphics:mask_3_graphics_64,x:143.4,y:247.8}).wait(1).to({graphics:mask_3_graphics_65,x:144.2,y:247.2}).wait(1).to({graphics:mask_3_graphics_66,x:145.1,y:246.6}).wait(1).to({graphics:mask_3_graphics_67,x:145.9,y:246}).wait(1).to({graphics:mask_3_graphics_68,x:146.7,y:245.4}).wait(1).to({graphics:mask_3_graphics_69,x:147.6,y:244.9}).wait(1).to({graphics:mask_3_graphics_70,x:148.4,y:244.3}).wait(1).to({graphics:mask_3_graphics_71,x:149.3,y:243.7}).wait(1).to({graphics:mask_3_graphics_72,x:150.1,y:243.1}).wait(1).to({graphics:mask_3_graphics_73,x:150.9,y:242.5}).wait(1).to({graphics:mask_3_graphics_74,x:151.8,y:242}).wait(1).to({graphics:mask_3_graphics_75,x:152.6,y:241.4}).wait(1).to({graphics:mask_3_graphics_76,x:153.4,y:240.8}).wait(1).to({graphics:mask_3_graphics_77,x:154.3,y:240.2}).wait(1).to({graphics:mask_3_graphics_78,x:155.1,y:239.6}).wait(1).to({graphics:mask_3_graphics_79,x:155.9,y:239}).wait(1).to({graphics:mask_3_graphics_80,x:156.8,y:238.5}).wait(1).to({graphics:mask_3_graphics_81,x:157.6,y:237.9}).wait(1).to({graphics:mask_3_graphics_82,x:158.4,y:237.3}).wait(1).to({graphics:mask_3_graphics_83,x:159.3,y:236.7}).wait(1).to({graphics:mask_3_graphics_84,x:160.1,y:236.1}).wait(1).to({graphics:mask_3_graphics_85,x:161,y:235.5}).wait(1).to({graphics:mask_3_graphics_86,x:161.8,y:235}).wait(1).to({graphics:mask_3_graphics_87,x:162.6,y:234.4}).wait(1).to({graphics:mask_3_graphics_88,x:163.5,y:233.8}).wait(1).to({graphics:mask_3_graphics_89,x:164.3,y:233.2}).wait(1).to({graphics:mask_3_graphics_90,x:165.1,y:232.6}).wait(1).to({graphics:mask_3_graphics_91,x:166,y:232.1}).wait(1).to({graphics:mask_3_graphics_92,x:166.8,y:231.5}).wait(1).to({graphics:mask_3_graphics_93,x:167.6,y:230.9}).wait(1).to({graphics:mask_3_graphics_94,x:168.5,y:230.3}).wait(1).to({graphics:mask_3_graphics_95,x:169.3,y:229.7}).wait(1).to({graphics:mask_3_graphics_96,x:170.2,y:229.1}).wait(1).to({graphics:mask_3_graphics_97,x:171,y:228.6}).wait(1).to({graphics:mask_3_graphics_98,x:171.8,y:228}).wait(1).to({graphics:mask_3_graphics_99,x:172.7,y:227.4}).wait(1).to({graphics:mask_3_graphics_100,x:173.5,y:226.8}).wait(1).to({graphics:mask_3_graphics_101,x:174.3,y:226.2}).wait(1).to({graphics:mask_3_graphics_102,x:175.2,y:225.7}).wait(1).to({graphics:mask_3_graphics_103,x:176,y:225.1}).wait(1).to({graphics:mask_3_graphics_104,x:176.8,y:224.5}).wait(1).to({graphics:mask_3_graphics_105,x:178.2,y:223.2}).wait(1).to({graphics:mask_3_graphics_106,x:179.6,y:221.8}).wait(1).to({graphics:mask_3_graphics_107,x:181,y:220.5}).wait(1).to({graphics:mask_3_graphics_108,x:182.3,y:219.2}).wait(1).to({graphics:mask_3_graphics_109,x:183.7,y:217.9}).wait(1).to({graphics:mask_3_graphics_110,x:185.1,y:216.5}).wait(1).to({graphics:mask_3_graphics_111,x:186.5,y:215.2}).wait(1).to({graphics:mask_3_graphics_112,x:187.8,y:213.9}).wait(1).to({graphics:mask_3_graphics_113,x:189.2,y:212.6}).wait(1).to({graphics:mask_3_graphics_114,x:190.6,y:211.3}).wait(1).to({graphics:mask_3_graphics_115,x:191.9,y:209.9}).wait(1).to({graphics:mask_3_graphics_116,x:193.3,y:208.6}).wait(1).to({graphics:mask_3_graphics_117,x:194.7,y:207.3}).wait(1).to({graphics:mask_3_graphics_118,x:196.1,y:206}).wait(1).to({graphics:mask_3_graphics_119,x:159.2,y:152.4}).wait(452));

	// Layer 2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(20,1,1).p("AupLxQM+lfOWuHIB/j7");
	this.shape_5.setTransform(196.3,198.3);
	this.shape_5._off = true;

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(9).to({_off:false},0).wait(562));

	// Letter
	this.instance_4 = new lib.P("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(275,275);
	this.instance_4.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(571));

	// Background
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_6.setTransform(275,275,3.373,2.543);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_7.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).wait(571));

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