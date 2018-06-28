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


(lib.j = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A1XfeQh4hPAAiYQAAi8CHjcQBvi+DTjWQD8kBHsl6IEToyQhVApgRAAQhPAAAAhnQAAiVCkiwID7kfICejHQB7iQBAAAQCNAAAACTQnJPVhJCSQEuijHsnYQBshbC/jHQA9gvA1AAQBmAAAABzQAABDknFIQh2CSihCKIk8DvQnAEZjYCiIonR0QhACMhbBjQifCoisAAQihAAhnhEgAu6UNIikDiQhGB4AABeQAAA9BVABQB1gBBvjwIErpwQj5DciBCPgALF8wQAAhkBJhHQBKhFBggBQBHABA0A0QA1A1AABDQAABehMBHQhMBFhkAAQinAAAAimg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148.8,-208.1,297.7,416.3);


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
	this.shape.setTransform(-0.3,-67.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AAAASIAAgk");
	this.shape_1.setTransform(-0.3,-67.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AAAANIAAgZ");
	this.shape_2.setTransform(-0.3,-66.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("AAAAGIAAgL");
	this.shape_3.setTransform(-0.3,-66);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("AAAgFIAAAM");
	this.shape_4.setTransform(-0.3,-64.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(5,1,1).p("AAAgMIAAAZ");
	this.shape_5.setTransform(-0.3,-64.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(5,1,1).p("AAAgSIAAAl");
	this.shape_6.setTransform(-0.3,-63.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(5,1,1).p("AAAgfIAAA/");
	this.shape_7.setTransform(-0.3,-62.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(5,1,1).p("AAAglIAABL");
	this.shape_8.setTransform(-0.3,-62.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(5,1,1).p("AAAgrIAABX");
	this.shape_9.setTransform(-0.3,-61.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(5,1,1).p("AAAgyIAABl");
	this.shape_10.setTransform(-0.2,-61.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5,1,1).p("AAAg4IAABx");
	this.shape_11.setTransform(-0.2,-60.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(5,1,1).p("AAAg+IAAB+");
	this.shape_12.setTransform(-0.2,-60);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(5,1,1).p("AAAhFIAACL");
	this.shape_13.setTransform(-0.2,-59.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(5,1,1).p("AAAhLIAACX");
	this.shape_14.setTransform(-0.2,-58.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(5,1,1).p("AAAhRIAACj");
	this.shape_15.setTransform(-0.2,-58.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(5,1,1).p("AAAhYIAACx");
	this.shape_16.setTransform(-0.2,-57.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(5,1,1).p("AAAheIABC9");
	this.shape_17.setTransform(-0.2,-57.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(5,1,1).p("AAAhkIABDJ");
	this.shape_18.setTransform(-0.2,-56.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(5,1,1).p("AAAhrIABDX");
	this.shape_19.setTransform(-0.2,-56.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(5,1,1).p("AAAhxIABDj");
	this.shape_20.setTransform(-0.2,-55.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(5,1,1).p("AAAh3IABDv");
	this.shape_21.setTransform(-0.2,-55.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(5,1,1).p("AAAh+IABD8");
	this.shape_22.setTransform(-0.2,-54.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(5,1,1).p("AAAiEIABEJ");
	this.shape_23.setTransform(-0.2,-54);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(5,1,1).p("AAAiKIABEV");
	this.shape_24.setTransform(-0.2,-53.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(5,1,1).p("AAAiQIABEi");
	this.shape_25.setTransform(-0.2,-52.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(5,1,1).p("AAAiXIABEv");
	this.shape_26.setTransform(-0.2,-52.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(5,1,1).p("AAAidIABE7");
	this.shape_27.setTransform(-0.2,-51.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(5,1,1).p("AAAijIABFH");
	this.shape_28.setTransform(-0.2,-51.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(5,1,1).p("AAAiqIABFV");
	this.shape_29.setTransform(-0.2,-50.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(5,1,1).p("AAAiwIABFh");
	this.shape_30.setTransform(-0.2,-50.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(5,1,1).p("AAAi2IABFt");
	this.shape_31.setTransform(-0.2,-49.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(5,1,1).p("AAAi9IABF6");
	this.shape_32.setTransform(-0.2,-49.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(5,1,1).p("AAAjDIABGH");
	this.shape_33.setTransform(-0.2,-48.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(5,1,1).p("AAAjJIABGT");
	this.shape_34.setTransform(-0.2,-48);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(5,1,1).p("AAAjPIABGg");
	this.shape_35.setTransform(-0.2,-47.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(5,1,1).p("AAAjWIABGt");
	this.shape_36.setTransform(-0.2,-46.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(5,1,1).p("AAAjcIABG5");
	this.shape_37.setTransform(-0.2,-46.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(5,1,1).p("AAAjjIABHG");
	this.shape_38.setTransform(-0.2,-45.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(5,1,1).p("AgBjoIACHS");
	this.shape_39.setTransform(-0.1,-45.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(5,1,1).p("AgBjvIACHf");
	this.shape_40.setTransform(-0.1,-44.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(5,1,1).p("AgBj1IACHr");
	this.shape_41.setTransform(-0.1,-44.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(5,1,1).p("AgBj8IACH5");
	this.shape_42.setTransform(-0.1,-43.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(5,1,1).p("AgBkCIACIF");
	this.shape_43.setTransform(-0.1,-43.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(5,1,1).p("AgBkIIACIR");
	this.shape_44.setTransform(-0.1,-42.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(5,1,1).p("AgBkPIACIf");
	this.shape_45.setTransform(-0.1,-42);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(5,1,1).p("AgBkVIADIr");
	this.shape_46.setTransform(-0.1,-41.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(5,1,1).p("AgBkbIADI3");
	this.shape_47.setTransform(-0.1,-40.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(5,1,1).p("AgBkiIADJF");
	this.shape_48.setTransform(-0.1,-40.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(5,1,1).p("AgBkoIADJR");
	this.shape_49.setTransform(-0.1,-39.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(5,1,1).p("AgBkuIADJd");
	this.shape_50.setTransform(-0.1,-39.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(5,1,1).p("AgBk1IADJr");
	this.shape_51.setTransform(-0.1,-38.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(5,1,1).p("AgBk7IADJ3");
	this.shape_52.setTransform(-0.1,-38.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(5,1,1).p("AgBlBIADKD");
	this.shape_53.setTransform(-0.1,-37.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(5,1,1).p("AgBlHIADKP");
	this.shape_54.setTransform(-0.1,-37.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(5,1,1).p("AgBlOIADKd");
	this.shape_55.setTransform(-0.1,-36.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(5,1,1).p("AgBlUIADKp");
	this.shape_56.setTransform(-0.1,-36);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(5,1,1).p("AgBlaIADK1");
	this.shape_57.setTransform(-0.1,-35.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{y:-67.6}}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape,p:{y:-63.3}}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).wait(1));

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,-69.9,1,1,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:0.3,y:-5.9},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.4,-72.7,22.3,13.8);


(lib.ar4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-48.7,-31.5,1,1,-17.5,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-94.4,guide:{path:[-47.9,-29.4,-30.4,37.2,47,28.6]}},104).wait(1));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AlhCZICwlVIBHAkIixFVg");
	var mask_graphics_1 = new cjs.Graphics().p("Ah/CWICwlVIBPAqIiwFVg");
	var mask_graphics_2 = new cjs.Graphics().p("AiECUICwlVIBZAuIiwFVg");
	var mask_graphics_3 = new cjs.Graphics().p("AiJCRICwlVIBjA0IiwFVg");
	var mask_graphics_4 = new cjs.Graphics().p("AiOCPICwlVIBtA4IiwFVg");
	var mask_graphics_5 = new cjs.Graphics().p("AiSCMICvlVIB3A+IiwFVg");
	var mask_graphics_6 = new cjs.Graphics().p("AiXCKICvlVICBBCIiwFVg");
	var mask_graphics_7 = new cjs.Graphics().p("AicCHICvlVICKBHIivFVg");
	var mask_graphics_8 = new cjs.Graphics().p("AihCFICvlVICUBMIivFVg");
	var mask_graphics_9 = new cjs.Graphics().p("AimCCICwlVICdBSIivFVg");
	var mask_graphics_10 = new cjs.Graphics().p("AirCAICwlVICnBWIivFVg");
	var mask_graphics_11 = new cjs.Graphics().p("AiwB9ICwlVICxBcIixFVg");
	var mask_graphics_12 = new cjs.Graphics().p("Ai1B7ICxlVIC6BgIixFVg");
	var mask_graphics_13 = new cjs.Graphics().p("Ai5B4ICwlVIDDBmIiwFVg");
	var mask_graphics_14 = new cjs.Graphics().p("Ai+B2ICwlVIDNBqIiwFVg");
	var mask_graphics_15 = new cjs.Graphics().p("AjDBzICwlVIDXBwIiwFVg");
	var mask_graphics_16 = new cjs.Graphics().p("AjIBxICxlVIDgB0IixFVg");
	var mask_graphics_17 = new cjs.Graphics().p("AjNBuICxlVIDqB6IixFVg");
	var mask_graphics_18 = new cjs.Graphics().p("AjSBsICxlVID0B+IixFVg");
	var mask_graphics_19 = new cjs.Graphics().p("AjXBpICxlVID+CEIixFVg");
	var mask_graphics_20 = new cjs.Graphics().p("AjbBnICwlVIEICIIixFVg");
	var mask_graphics_21 = new cjs.Graphics().p("AjgBkICwlVIESCOIixFVg");
	var mask_graphics_22 = new cjs.Graphics().p("AjlBiICwlVIEbCSIiwFVg");
	var mask_graphics_23 = new cjs.Graphics().p("AjqBfICwlVIElCYIiwFVg");
	var mask_graphics_24 = new cjs.Graphics().p("AjvBdICxlVIEuCcIixFVg");
	var mask_graphics_25 = new cjs.Graphics().p("Aj0BaICxlVIE4CiIixFVg");
	var mask_graphics_26 = new cjs.Graphics().p("Aj5BXICxlVIFCCoIixFVg");
	var mask_graphics_27 = new cjs.Graphics().p("Aj9BVICwlVIFLCsIiwFVg");
	var mask_graphics_28 = new cjs.Graphics().p("AkCBSICwlVIFVCyIiwFVg");
	var mask_graphics_29 = new cjs.Graphics().p("AkHBQICwlVIFfC2IiwFVg");
	var mask_graphics_30 = new cjs.Graphics().p("AkMBNICwlVIFpC8IiwFVg");
	var mask_graphics_31 = new cjs.Graphics().p("AkRBLICxlVIFyDAIiwFVg");
	var mask_graphics_32 = new cjs.Graphics().p("AkWBIICxlVIF8DFIiwFVg");
	var mask_graphics_33 = new cjs.Graphics().p("AkbBGICxlVIGGDKIixFVg");
	var mask_graphics_34 = new cjs.Graphics().p("AkgBDICxlVIGQDPIixFVg");
	var mask_graphics_35 = new cjs.Graphics().p("AkkBBICwlVIGZDUIiwFVg");
	var mask_graphics_36 = new cjs.Graphics().p("AkpA+ICwlVIGjDZIiwFVg");
	var mask_graphics_37 = new cjs.Graphics().p("AkuA8ICwlVIGtDeIiwFVg");
	var mask_graphics_38 = new cjs.Graphics().p("AkzA5ICwlVIG3DjIiwFVg");
	var mask_graphics_39 = new cjs.Graphics().p("Ak4A3ICxlVIHADoIixFVg");
	var mask_graphics_40 = new cjs.Graphics().p("Ak9A0ICxlVIHKDtIixFVg");
	var mask_graphics_41 = new cjs.Graphics().p("AlCAyICxlVIHUDyIixFVg");
	var mask_graphics_42 = new cjs.Graphics().p("AlGAvICwlVIHeD4IixFVg");
	var mask_graphics_43 = new cjs.Graphics().p("AlLAtICwlVIHoD8IixFVg");
	var mask_graphics_44 = new cjs.Graphics().p("AlQAqICwlVIHxECIiwFVg");
	var mask_graphics_45 = new cjs.Graphics().p("AlVAoICwlVIH7EGIiwFVg");
	var mask_graphics_46 = new cjs.Graphics().p("AlaAlICxlVIIEEMIiwFVg");
	var mask_graphics_47 = new cjs.Graphics().p("AlfAjICxlVIIOEQIiwFVg");
	var mask_graphics_48 = new cjs.Graphics().p("AlkAgICxlVIIYEWIixFVg");
	var mask_graphics_49 = new cjs.Graphics().p("AlpAeICxlVIIiEaIixFVg");
	var mask_graphics_50 = new cjs.Graphics().p("AltAbICwlVIIrEgIiwFVg");
	var mask_graphics_51 = new cjs.Graphics().p("AlyAZICwlVII1EkIiwFVg");
	var mask_graphics_52 = new cjs.Graphics().p("Al3AWICwlVII/EqIiwFVg");
	var mask_graphics_53 = new cjs.Graphics().p("Al8AUICwlVIJJEuIiwFVg");
	var mask_graphics_54 = new cjs.Graphics().p("AmBARICwlVIJTE0IiwFVg");
	var mask_graphics_55 = new cjs.Graphics().p("AmGAPICwlVIJdE4IixFVg");
	var mask_graphics_56 = new cjs.Graphics().p("AmLAMICwlVIJnE+IixFVg");
	var mask_graphics_57 = new cjs.Graphics().p("AmQAKICxlVIJwFCIixFVg");
	var mask_graphics_58 = new cjs.Graphics().p("AmVAHICxlVIJ6FIIixFVg");
	var mask_graphics_59 = new cjs.Graphics().p("AmaAFICxlVIKDFNIiwFVg");
	var mask_graphics_60 = new cjs.Graphics().p("AmfACICxlVIKOFSIixFVg");
	var mask_graphics_61 = new cjs.Graphics().p("AmjAAICwlWIKXFXIiwFWg");
	var mask_graphics_62 = new cjs.Graphics().p("AmogCICwlWIKhFbIiwFWg");
	var mask_graphics_63 = new cjs.Graphics().p("AmtgFICwlWIKrFhIiwFWg");
	var mask_graphics_64 = new cjs.Graphics().p("AmygHICwlWIK1FlIiwFWg");
	var mask_graphics_65 = new cjs.Graphics().p("Am3gKICxlWIK+FrIixFWg");
	var mask_graphics_66 = new cjs.Graphics().p("Am8gMICxlWILIFvIixFWg");
	var mask_graphics_67 = new cjs.Graphics().p("AnBgPICxlWILRF1IiwFWg");
	var mask_graphics_68 = new cjs.Graphics().p("AnFgRICwlWILbF5IiwFWg");
	var mask_graphics_69 = new cjs.Graphics().p("AnKgUICwlWILlF/IiwFWg");
	var mask_graphics_70 = new cjs.Graphics().p("AnPgWICwlWILvGDIixFWg");
	var mask_graphics_71 = new cjs.Graphics().p("AnUgZICwlWIL5GJIixFWg");
	var mask_graphics_72 = new cjs.Graphics().p("AnZgbICxlWIMCGNIixFWg");
	var mask_graphics_73 = new cjs.Graphics().p("AnegeICxlWIMMGTIixFWg");
	var mask_graphics_74 = new cjs.Graphics().p("AnjggICxlWIMWGXIixFWg");
	var mask_graphics_75 = new cjs.Graphics().p("AnogjICxlWIMgGdIixFWg");
	var mask_graphics_76 = new cjs.Graphics().p("AnsglICwlWIMpGhIiwFWg");
	var mask_graphics_77 = new cjs.Graphics().p("AnxgoICwlWIMzGnIiwFWg");
	var mask_graphics_78 = new cjs.Graphics().p("An2gqICwlWIM9GrIiwFWg");
	var mask_graphics_79 = new cjs.Graphics().p("An7gtICxlWINGGxIixFWg");
	var mask_graphics_80 = new cjs.Graphics().p("AoAgvICxlWINQG1IixFWg");
	var mask_graphics_81 = new cjs.Graphics().p("AoFgyICxlWINZG7IiwFWg");
	var mask_graphics_82 = new cjs.Graphics().p("AoKg0ICxlWINjG/IiwFWg");
	var mask_graphics_83 = new cjs.Graphics().p("AoOg3ICwlWINtHFIiwFWg");
	var mask_graphics_84 = new cjs.Graphics().p("AoTg5ICwlWIN3HKIiwFWg");
	var mask_graphics_85 = new cjs.Graphics().p("AoYg8ICwlWIOBHPIixFWg");
	var mask_graphics_86 = new cjs.Graphics().p("Aodg+ICwlWIOLHUIiwFWg");
	var mask_graphics_87 = new cjs.Graphics().p("AoihBICxlWIOUHZIixFWg");
	var mask_graphics_88 = new cjs.Graphics().p("AonhDICxlWIOeHeIixFWg");
	var mask_graphics_89 = new cjs.Graphics().p("AoshGICxlWIOoHjIixFWg");
	var mask_graphics_90 = new cjs.Graphics().p("AoxhIICxlWIOxHoIiwFWg");
	var mask_graphics_91 = new cjs.Graphics().p("Ao1hLICwlWIO7HtIiwFWg");
	var mask_graphics_92 = new cjs.Graphics().p("Ao6hNICwlWIPFHxIixFXg");
	var mask_graphics_93 = new cjs.Graphics().p("Ao/hQICwlWIPPH3IixFWg");
	var mask_graphics_94 = new cjs.Graphics().p("ApEhSICxlWIPYH7IixFWg");
	var mask_graphics_95 = new cjs.Graphics().p("ApJhVICxlWIPiIBIixFWg");
	var mask_graphics_96 = new cjs.Graphics().p("ApOhYICxlWIPrIHIiwFWg");
	var mask_graphics_97 = new cjs.Graphics().p("ApThaICxlWIP2ILIixFWg");
	var mask_graphics_98 = new cjs.Graphics().p("ApXhdICwlWIP/IRIiwFWg");
	var mask_graphics_99 = new cjs.Graphics().p("ApchfICwlWIQJIVIiwFWg");
	var mask_graphics_100 = new cjs.Graphics().p("AphhiICwlWIQTIbIiwFWg");
	var mask_graphics_101 = new cjs.Graphics().p("ApmhkICwlWIQdIfIiwFWg");
	var mask_graphics_102 = new cjs.Graphics().p("AprhnICxlWIQmIlIixFWg");
	var mask_graphics_103 = new cjs.Graphics().p("ApwhpICxlWIQwIpIixFWg");
	var mask_graphics_104 = new cjs.Graphics().p("Ap1hsICxlWIQ6IvIixFWg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-35.4,y:-17.5}).wait(1).to({graphics:mask_graphics_1,x:-58,y:-17.2}).wait(1).to({graphics:mask_graphics_2,x:-57.5,y:-16.9}).wait(1).to({graphics:mask_graphics_3,x:-57.1,y:-16.7}).wait(1).to({graphics:mask_graphics_4,x:-56.6,y:-16.4}).wait(1).to({graphics:mask_graphics_5,x:-56.1,y:-16.2}).wait(1).to({graphics:mask_graphics_6,x:-55.6,y:-15.9}).wait(1).to({graphics:mask_graphics_7,x:-55.1,y:-15.7}).wait(1).to({graphics:mask_graphics_8,x:-54.6,y:-15.4}).wait(1).to({graphics:mask_graphics_9,x:-54.1,y:-15.2}).wait(1).to({graphics:mask_graphics_10,x:-53.6,y:-14.9}).wait(1).to({graphics:mask_graphics_11,x:-53.2,y:-14.7}).wait(1).to({graphics:mask_graphics_12,x:-52.7,y:-14.4}).wait(1).to({graphics:mask_graphics_13,x:-52.2,y:-14.2}).wait(1).to({graphics:mask_graphics_14,x:-51.7,y:-13.9}).wait(1).to({graphics:mask_graphics_15,x:-51.2,y:-13.7}).wait(1).to({graphics:mask_graphics_16,x:-50.7,y:-13.4}).wait(1).to({graphics:mask_graphics_17,x:-50.2,y:-13.2}).wait(1).to({graphics:mask_graphics_18,x:-49.8,y:-12.9}).wait(1).to({graphics:mask_graphics_19,x:-49.3,y:-12.7}).wait(1).to({graphics:mask_graphics_20,x:-48.8,y:-12.4}).wait(1).to({graphics:mask_graphics_21,x:-48.3,y:-12.2}).wait(1).to({graphics:mask_graphics_22,x:-47.8,y:-11.9}).wait(1).to({graphics:mask_graphics_23,x:-47.3,y:-11.7}).wait(1).to({graphics:mask_graphics_24,x:-46.8,y:-11.4}).wait(1).to({graphics:mask_graphics_25,x:-46.3,y:-11.2}).wait(1).to({graphics:mask_graphics_26,x:-45.9,y:-10.9}).wait(1).to({graphics:mask_graphics_27,x:-45.4,y:-10.6}).wait(1).to({graphics:mask_graphics_28,x:-44.9,y:-10.4}).wait(1).to({graphics:mask_graphics_29,x:-44.4,y:-10.1}).wait(1).to({graphics:mask_graphics_30,x:-43.9,y:-9.9}).wait(1).to({graphics:mask_graphics_31,x:-43.4,y:-9.6}).wait(1).to({graphics:mask_graphics_32,x:-42.9,y:-9.4}).wait(1).to({graphics:mask_graphics_33,x:-42.5,y:-9.1}).wait(1).to({graphics:mask_graphics_34,x:-42,y:-8.9}).wait(1).to({graphics:mask_graphics_35,x:-41.5,y:-8.6}).wait(1).to({graphics:mask_graphics_36,x:-41,y:-8.4}).wait(1).to({graphics:mask_graphics_37,x:-40.5,y:-8.1}).wait(1).to({graphics:mask_graphics_38,x:-40,y:-7.9}).wait(1).to({graphics:mask_graphics_39,x:-39.5,y:-7.6}).wait(1).to({graphics:mask_graphics_40,x:-39.1,y:-7.4}).wait(1).to({graphics:mask_graphics_41,x:-38.6,y:-7.1}).wait(1).to({graphics:mask_graphics_42,x:-38.1,y:-6.9}).wait(1).to({graphics:mask_graphics_43,x:-37.6,y:-6.6}).wait(1).to({graphics:mask_graphics_44,x:-37.1,y:-6.4}).wait(1).to({graphics:mask_graphics_45,x:-36.6,y:-6.1}).wait(1).to({graphics:mask_graphics_46,x:-36.1,y:-5.9}).wait(1).to({graphics:mask_graphics_47,x:-35.6,y:-5.6}).wait(1).to({graphics:mask_graphics_48,x:-35.2,y:-5.4}).wait(1).to({graphics:mask_graphics_49,x:-34.7,y:-5.1}).wait(1).to({graphics:mask_graphics_50,x:-34.2,y:-4.9}).wait(1).to({graphics:mask_graphics_51,x:-33.7,y:-4.6}).wait(1).to({graphics:mask_graphics_52,x:-33.2,y:-4.4}).wait(1).to({graphics:mask_graphics_53,x:-32.8,y:-4.1}).wait(1).to({graphics:mask_graphics_54,x:-32.3,y:-3.9}).wait(1).to({graphics:mask_graphics_55,x:-31.8,y:-3.6}).wait(1).to({graphics:mask_graphics_56,x:-31.3,y:-3.4}).wait(1).to({graphics:mask_graphics_57,x:-30.8,y:-3.1}).wait(1).to({graphics:mask_graphics_58,x:-30.3,y:-2.9}).wait(1).to({graphics:mask_graphics_59,x:-29.8,y:-2.6}).wait(1).to({graphics:mask_graphics_60,x:-29.3,y:-2.4}).wait(1).to({graphics:mask_graphics_61,x:-28.9,y:-2.1}).wait(1).to({graphics:mask_graphics_62,x:-28.4,y:-1.9}).wait(1).to({graphics:mask_graphics_63,x:-27.9,y:-1.6}).wait(1).to({graphics:mask_graphics_64,x:-27.4,y:-1.4}).wait(1).to({graphics:mask_graphics_65,x:-26.9,y:-1.1}).wait(1).to({graphics:mask_graphics_66,x:-26.4,y:-0.9}).wait(1).to({graphics:mask_graphics_67,x:-25.9,y:-0.6}).wait(1).to({graphics:mask_graphics_68,x:-25.5,y:-0.4}).wait(1).to({graphics:mask_graphics_69,x:-25,y:-0.1}).wait(1).to({graphics:mask_graphics_70,x:-24.5,y:0.1}).wait(1).to({graphics:mask_graphics_71,x:-24,y:0.4}).wait(1).to({graphics:mask_graphics_72,x:-23.5,y:0.6}).wait(1).to({graphics:mask_graphics_73,x:-23,y:0.9}).wait(1).to({graphics:mask_graphics_74,x:-22.5,y:1.1}).wait(1).to({graphics:mask_graphics_75,x:-22,y:1.4}).wait(1).to({graphics:mask_graphics_76,x:-21.6,y:1.6}).wait(1).to({graphics:mask_graphics_77,x:-21.1,y:1.9}).wait(1).to({graphics:mask_graphics_78,x:-20.6,y:2.2}).wait(1).to({graphics:mask_graphics_79,x:-20.1,y:2.4}).wait(1).to({graphics:mask_graphics_80,x:-19.6,y:2.7}).wait(1).to({graphics:mask_graphics_81,x:-19.1,y:2.9}).wait(1).to({graphics:mask_graphics_82,x:-18.6,y:3.2}).wait(1).to({graphics:mask_graphics_83,x:-18.2,y:3.4}).wait(1).to({graphics:mask_graphics_84,x:-17.7,y:3.7}).wait(1).to({graphics:mask_graphics_85,x:-17.2,y:3.9}).wait(1).to({graphics:mask_graphics_86,x:-16.7,y:4.2}).wait(1).to({graphics:mask_graphics_87,x:-16.2,y:4.4}).wait(1).to({graphics:mask_graphics_88,x:-15.7,y:4.7}).wait(1).to({graphics:mask_graphics_89,x:-15.2,y:4.9}).wait(1).to({graphics:mask_graphics_90,x:-14.7,y:5.2}).wait(1).to({graphics:mask_graphics_91,x:-14.3,y:5.4}).wait(1).to({graphics:mask_graphics_92,x:-13.8,y:5.7}).wait(1).to({graphics:mask_graphics_93,x:-13.3,y:5.9}).wait(1).to({graphics:mask_graphics_94,x:-12.8,y:6.2}).wait(1).to({graphics:mask_graphics_95,x:-12.3,y:6.4}).wait(1).to({graphics:mask_graphics_96,x:-11.8,y:6.7}).wait(1).to({graphics:mask_graphics_97,x:-11.3,y:6.9}).wait(1).to({graphics:mask_graphics_98,x:-10.9,y:7.2}).wait(1).to({graphics:mask_graphics_99,x:-10.4,y:7.4}).wait(1).to({graphics:mask_graphics_100,x:-9.9,y:7.7}).wait(1).to({graphics:mask_graphics_101,x:-9.4,y:7.9}).wait(1).to({graphics:mask_graphics_102,x:-8.9,y:8.2}).wait(1).to({graphics:mask_graphics_103,x:-8.4,y:8.4}).wait(1).to({graphics:mask_graphics_104,x:-7.9,y:8.7}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AnfkmQCwKeMPhb");

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(105));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.3,-37.3,21.2,38.8);


(lib.ar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-20.3,14.1,1,1,-127.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-135,guide:{path:[-20.3,14,9.9,-5.2,33.3,-26.8]}},74).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AiRgYIA+gvIBvCTIg9Avg");
	var mask_graphics_1 = new cjs.Graphics().p("AhaguIBGg1IBvCSIhGA1g");
	var mask_graphics_2 = new cjs.Graphics().p("AhdgsIBMg6IBvCTIhMA6g");
	var mask_graphics_3 = new cjs.Graphics().p("AhhgpIBUhAIBvCTIhUBAg");
	var mask_graphics_4 = new cjs.Graphics().p("AhlgmIBchFIBvCSIhcBGg");
	var mask_graphics_5 = new cjs.Graphics().p("AhogjIBihLIBvCSIhiBLg");
	var mask_graphics_6 = new cjs.Graphics().p("AhsggIBqhRIBvCSIhqBRg");
	var mask_graphics_7 = new cjs.Graphics().p("AhwgeIBxhWIBwCTIhxBWg");
	var mask_graphics_8 = new cjs.Graphics().p("AhzgbIB3hcIBwCTIh3Bcg");
	var mask_graphics_9 = new cjs.Graphics().p("Ah3gYIB/hhIBwCSIh/Bhg");
	var mask_graphics_10 = new cjs.Graphics().p("Ah7gVICHhnIBwCTIiHBmg");
	var mask_graphics_11 = new cjs.Graphics().p("Ah+gTICNhsIBwCTIiNBsg");
	var mask_graphics_12 = new cjs.Graphics().p("AiCgQICVhyIBwCTIiVByg");
	var mask_graphics_13 = new cjs.Graphics().p("AiFgNICbh3IBxCSIidB3g");
	var mask_graphics_14 = new cjs.Graphics().p("AiJgLICjh8IBwCTIijB8g");
	var mask_graphics_15 = new cjs.Graphics().p("AiNgIICriCIBwCTIirCCg");
	var mask_graphics_16 = new cjs.Graphics().p("AiQgFICyiHIBwCSIizCHg");
	var mask_graphics_17 = new cjs.Graphics().p("AiUgCIC5iNIBwCSIi5CNg");
	var mask_graphics_18 = new cjs.Graphics().p("AiYAAIDBiSIBwCSIjBCTg");
	var mask_graphics_19 = new cjs.Graphics().p("AibACIDHiXIBwCUIjICXg");
	var mask_graphics_20 = new cjs.Graphics().p("AifAFIDPidIBwCUIjPCdg");
	var mask_graphics_21 = new cjs.Graphics().p("AijAIIDXiiIBwCTIjXCig");
	var mask_graphics_22 = new cjs.Graphics().p("AimALIDdioIBxCTIjfCog");
	var mask_graphics_23 = new cjs.Graphics().p("AiqANIDlitIBwCTIjlCug");
	var mask_graphics_24 = new cjs.Graphics().p("AiuAQIDtizIBwCUIjtCzg");
	var mask_graphics_25 = new cjs.Graphics().p("AixATID0i5IBvCUIj0C4g");
	var mask_graphics_26 = new cjs.Graphics().p("Ai1AWID7i+IBwCTIj7C+g");
	var mask_graphics_27 = new cjs.Graphics().p("Ai5AZIEDjEIBwCTIkDDEg");
	var mask_graphics_28 = new cjs.Graphics().p("Ai8AbIEJjJIBxCTIkLDKg");
	var mask_graphics_29 = new cjs.Graphics().p("AjAAeIERjPIBwCUIkRDPg");
	var mask_graphics_30 = new cjs.Graphics().p("AjEAhIEZjVIBwCUIkZDUg");
	var mask_graphics_31 = new cjs.Graphics().p("AjHAkIEgjaIBvCTIkgDag");
	var mask_graphics_32 = new cjs.Graphics().p("AjLAmIEnjfIBwCUIknDfg");
	var mask_graphics_33 = new cjs.Graphics().p("AjPApIEvjlIBwCUIkvDlg");
	var mask_graphics_34 = new cjs.Graphics().p("AjSAsIE1jrIBxCUIk3Drg");
	var mask_graphics_35 = new cjs.Graphics().p("AjWAvIE9jxIBwCUIk9Dwg");
	var mask_graphics_36 = new cjs.Graphics().p("AjaAyIFFj2IBwCTIlFD2g");
	var mask_graphics_37 = new cjs.Graphics().p("AjdA0IFLj7IBwCUIlLD7g");
	var mask_graphics_38 = new cjs.Graphics().p("AjhA3IFTkAIBwCTIlTEBg");
	var mask_graphics_39 = new cjs.Graphics().p("AjlA6IFbkGIBvCTIlZEGg");
	var mask_graphics_40 = new cjs.Graphics().p("AjoA9IFhkMIBwCTIlhEMg");
	var mask_graphics_41 = new cjs.Graphics().p("AjsBAIFpkSIBwCUIlpERg");
	var mask_graphics_42 = new cjs.Graphics().p("AjwBCIFwkXIBxCUIlwEXg");
	var mask_graphics_43 = new cjs.Graphics().p("AjzBFIF3kcIBwCTIl3Edg");
	var mask_graphics_44 = new cjs.Graphics().p("Aj3BIIF/kiIBwCTIl/Eig");
	var mask_graphics_45 = new cjs.Graphics().p("Aj7BLIGHkoIBvCTImFEog");
	var mask_graphics_46 = new cjs.Graphics().p("Aj+BNIGNktIBwCUImNEtg");
	var mask_graphics_47 = new cjs.Graphics().p("AkCBQIGVkzIBwCUImVEzg");
	var mask_graphics_48 = new cjs.Graphics().p("AkGBTIGck4IBxCTImcE4g");
	var mask_graphics_49 = new cjs.Graphics().p("AkJBWIGjk+IBwCTImjE+g");
	var mask_graphics_50 = new cjs.Graphics().p("AkNBZIGrlEIBwCTImrFEg");
	var mask_graphics_51 = new cjs.Graphics().p("AkRBbIGzlJIBvCUImxFJg");
	var mask_graphics_52 = new cjs.Graphics().p("AkUBeIG5lPIBwCUIm5FPg");
	var mask_graphics_53 = new cjs.Graphics().p("AkYBhIHBlUIBwCTInBFUg");
	var mask_graphics_54 = new cjs.Graphics().p("AkcBkIHIlaIBwCUInHFZg");
	var mask_graphics_55 = new cjs.Graphics().p("AkfBmIHPlfIBwCUInPFfg");
	var mask_graphics_56 = new cjs.Graphics().p("AkjBpIHXllIBwCUInXFlg");
	var mask_graphics_57 = new cjs.Graphics().p("AknBsIHflqIBwCTInfFrg");
	var mask_graphics_58 = new cjs.Graphics().p("AkqBvIHllwIBwCTInlFwg");
	var mask_graphics_59 = new cjs.Graphics().p("AkuByIHtl2IBwCUIntF1g");
	var mask_graphics_60 = new cjs.Graphics().p("AkyB0IH1l7IBwCUIn1F7g");
	var mask_graphics_61 = new cjs.Graphics().p("Ak1B3IH7mBIBwCUIn7GBg");
	var mask_graphics_62 = new cjs.Graphics().p("Ak5B5IIDmFIBwCTIoDGGg");
	var mask_graphics_63 = new cjs.Graphics().p("Ak8B8IIKmLIBvCUIoKGLg");
	var mask_graphics_64 = new cjs.Graphics().p("AlAB/IIRmRIBwCUIoRGRg");
	var mask_graphics_65 = new cjs.Graphics().p("AlECCIIZmXIBwCUIoZGWg");
	var mask_graphics_66 = new cjs.Graphics().p("AlHCFIIfmcIBxCTIohGcg");
	var mask_graphics_67 = new cjs.Graphics().p("AlLCHIInmhIBwCTIonGig");
	var mask_graphics_68 = new cjs.Graphics().p("AlPCKIIvmnIBwCUIovGng");
	var mask_graphics_69 = new cjs.Graphics().p("AlSCNII2mtIBvCUIo2Gsg");
	var mask_graphics_70 = new cjs.Graphics().p("AlWCQII9myIBwCTIo9Gyg");
	var mask_graphics_71 = new cjs.Graphics().p("AlaCTIJFm4IBwCTIpFG4g");
	var mask_graphics_72 = new cjs.Graphics().p("AldCVIJLm9IBxCTIpNG+g");
	var mask_graphics_73 = new cjs.Graphics().p("AlhCYIJTnDIBwCUIpTHDg");
	var mask_graphics_74 = new cjs.Graphics().p("AllCbIJbnIIBwCTIpbHIg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-14.6,y:12.3}).wait(1).to({graphics:mask_graphics_1,x:-20.1,y:14.6}).wait(1).to({graphics:mask_graphics_2,x:-19.7,y:14.3}).wait(1).to({graphics:mask_graphics_3,x:-19.3,y:14}).wait(1).to({graphics:mask_graphics_4,x:-19,y:13.7}).wait(1).to({graphics:mask_graphics_5,x:-18.6,y:13.4}).wait(1).to({graphics:mask_graphics_6,x:-18.2,y:13.2}).wait(1).to({graphics:mask_graphics_7,x:-17.9,y:12.9}).wait(1).to({graphics:mask_graphics_8,x:-17.5,y:12.6}).wait(1).to({graphics:mask_graphics_9,x:-17.1,y:12.3}).wait(1).to({graphics:mask_graphics_10,x:-16.8,y:12.1}).wait(1).to({graphics:mask_graphics_11,x:-16.4,y:11.8}).wait(1).to({graphics:mask_graphics_12,x:-16,y:11.5}).wait(1).to({graphics:mask_graphics_13,x:-15.6,y:11.2}).wait(1).to({graphics:mask_graphics_14,x:-15.3,y:10.9}).wait(1).to({graphics:mask_graphics_15,x:-14.9,y:10.6}).wait(1).to({graphics:mask_graphics_16,x:-14.5,y:10.4}).wait(1).to({graphics:mask_graphics_17,x:-14.2,y:10.1}).wait(1).to({graphics:mask_graphics_18,x:-13.8,y:9.8}).wait(1).to({graphics:mask_graphics_19,x:-13.4,y:9.5}).wait(1).to({graphics:mask_graphics_20,x:-13.1,y:9.2}).wait(1).to({graphics:mask_graphics_21,x:-12.7,y:9}).wait(1).to({graphics:mask_graphics_22,x:-12.3,y:8.7}).wait(1).to({graphics:mask_graphics_23,x:-12,y:8.4}).wait(1).to({graphics:mask_graphics_24,x:-11.6,y:8.1}).wait(1).to({graphics:mask_graphics_25,x:-11.2,y:7.9}).wait(1).to({graphics:mask_graphics_26,x:-10.9,y:7.6}).wait(1).to({graphics:mask_graphics_27,x:-10.5,y:7.3}).wait(1).to({graphics:mask_graphics_28,x:-10.1,y:7}).wait(1).to({graphics:mask_graphics_29,x:-9.8,y:6.7}).wait(1).to({graphics:mask_graphics_30,x:-9.4,y:6.5}).wait(1).to({graphics:mask_graphics_31,x:-9,y:6.2}).wait(1).to({graphics:mask_graphics_32,x:-8.7,y:5.9}).wait(1).to({graphics:mask_graphics_33,x:-8.3,y:5.6}).wait(1).to({graphics:mask_graphics_34,x:-7.9,y:5.3}).wait(1).to({graphics:mask_graphics_35,x:-7.6,y:5.1}).wait(1).to({graphics:mask_graphics_36,x:-7.2,y:4.8}).wait(1).to({graphics:mask_graphics_37,x:-6.8,y:4.5}).wait(1).to({graphics:mask_graphics_38,x:-6.4,y:4.2}).wait(1).to({graphics:mask_graphics_39,x:-6.1,y:3.9}).wait(1).to({graphics:mask_graphics_40,x:-5.7,y:3.7}).wait(1).to({graphics:mask_graphics_41,x:-5.3,y:3.4}).wait(1).to({graphics:mask_graphics_42,x:-5,y:3.1}).wait(1).to({graphics:mask_graphics_43,x:-4.6,y:2.8}).wait(1).to({graphics:mask_graphics_44,x:-4.2,y:2.5}).wait(1).to({graphics:mask_graphics_45,x:-3.9,y:2.3}).wait(1).to({graphics:mask_graphics_46,x:-3.5,y:2}).wait(1).to({graphics:mask_graphics_47,x:-3.1,y:1.7}).wait(1).to({graphics:mask_graphics_48,x:-2.8,y:1.4}).wait(1).to({graphics:mask_graphics_49,x:-2.4,y:1.1}).wait(1).to({graphics:mask_graphics_50,x:-2,y:0.9}).wait(1).to({graphics:mask_graphics_51,x:-1.7,y:0.6}).wait(1).to({graphics:mask_graphics_52,x:-1.3,y:0.3}).wait(1).to({graphics:mask_graphics_53,x:-0.9,y:0}).wait(1).to({graphics:mask_graphics_54,x:-0.6,y:-0.2}).wait(1).to({graphics:mask_graphics_55,x:-0.2,y:-0.5}).wait(1).to({graphics:mask_graphics_56,x:0.2,y:-0.8}).wait(1).to({graphics:mask_graphics_57,x:0.5,y:-1.1}).wait(1).to({graphics:mask_graphics_58,x:0.9,y:-1.4}).wait(1).to({graphics:mask_graphics_59,x:1.3,y:-1.6}).wait(1).to({graphics:mask_graphics_60,x:1.6,y:-1.9}).wait(1).to({graphics:mask_graphics_61,x:2,y:-2.2}).wait(1).to({graphics:mask_graphics_62,x:2.4,y:-2.5}).wait(1).to({graphics:mask_graphics_63,x:2.8,y:-2.8}).wait(1).to({graphics:mask_graphics_64,x:3.1,y:-3.1}).wait(1).to({graphics:mask_graphics_65,x:3.5,y:-3.3}).wait(1).to({graphics:mask_graphics_66,x:3.9,y:-3.6}).wait(1).to({graphics:mask_graphics_67,x:4.2,y:-3.9}).wait(1).to({graphics:mask_graphics_68,x:4.6,y:-4.2}).wait(1).to({graphics:mask_graphics_69,x:5,y:-4.4}).wait(1).to({graphics:mask_graphics_70,x:5.3,y:-4.7}).wait(1).to({graphics:mask_graphics_71,x:5.7,y:-5}).wait(1).to({graphics:mask_graphics_72,x:6.1,y:-5.3}).wait(1).to({graphics:mask_graphics_73,x:6.4,y:-5.6}).wait(1).to({graphics:mask_graphics_74,x:6.8,y:-5.8}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AjVECQCxkHD7j9");
	this.shape.setTransform(6.4,-6.6,1,1,-167.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.1,5.1,17.7,19.5);


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
(lib.WS_Cursive_j = function(mode,startPosition,loop) {
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
	this.instance.setTransform(268.6,238.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[268.7,238.4,303.6,208.7,331.9,163.2,332.5,162.3,333.1,161.1]}},90).wait(16).to({startPosition:0},0).to({guide:{path:[333.2,161.2,314.7,202.3,294.4,242,275.2,279.8,257.5,318.1,237.6,361,220.8,400.4,204,439.8,189.3,456.5,174.7,473,156.4,470.1]}},179).wait(15).to({startPosition:0},0).to({guide:{path:[156.4,470.2,118.7,445.9,166,398.4,213.2,350.9,261.9,317.2,310.6,283.5,354.6,246.7,383.5,222.7,407.8,196.3]}},180).wait(16).to({x:365.4,y:85.4},0).wait(15).to({startPosition:0},0).to({guide:{path:[365,85.1,308.4,116.4,251.1,83,207.7,62.3,170.9,92.9,134.2,123.5,113.3,148.1,70.7,198,10.4,176.3,-47.3,155.6,-77.2,100.1,-78.8,97.2,-80.5,94.4]}},65).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(333.8,161.1,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},90).wait(16).to({_off:false,x:155.8,y:469},0).to({_off:true},179).wait(15).to({_off:false,x:408.8,y:195},0).wait(180).to({x:364.8,y:85},0).to({_off:true},16).wait(81));

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgUB6IgUgFIgPgHIgPgHIgIgIIgHgHIgIgIIgHgHIgFgIIgDgHIgFgIIgCgHIgDgIIAAgHIgCgIIAAgHIAAgIIgDgGIADgIIAAgHIAAgIIACgHIADgIIACgHIADgIIAFgHIAFgIIAFgHIAHgIIAIgHIAHgIIANgHIAPgIIAMgFIANgCIAVgCIAAgBIAXADIARAFIASAHIAMAIIAKAHIAIAIIAHAHIAFAIIAFAHIADAIIAFAHIACAIIADAHIACAIIADAHIAAAIIAAAHIAAAHIAAAHIAAAIIgDAHIAAAIIgCAHIgFAIIgDAHIgFAIIgCAHIgFAIIgIAHIgHAIIgKAHIgKAIIgQAHIgMAFIgMACIgXADIgVgDg");
	this.shape_1.setTransform(364.6,85.8);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(506).to({_off:false},0).wait(80));

	// Layer 15
	this.instance_1 = new lib.ar4("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(128.1,418.5,1,1,0,136.4,-43.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(309).to({_off:false},0).wait(277));

	// Layer 12 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_327 = new cjs.Graphics().p("AD1dEIBbhdIIKH8IhbBdg");
	var mask_graphics_328 = new cjs.Graphics().p("Ak5jGIBqhtIIJH6IhqBtg");
	var mask_graphics_329 = new cjs.Graphics().p("AlBi/IB6h8IIJH7Ih6B8g");
	var mask_graphics_330 = new cjs.Graphics().p("AlIi3ICIiMIIJH7IiJCMg");
	var mask_graphics_331 = new cjs.Graphics().p("AlQivICYicIIJH7IiYCcg");
	var mask_graphics_332 = new cjs.Graphics().p("AlXinICmisIIJH7IimCsg");
	var mask_graphics_333 = new cjs.Graphics().p("AlfifIC2i8IIJH7Ii2C8g");
	var mask_graphics_334 = new cjs.Graphics().p("AlniXIDGjMIIJH7IjGDMg");
	var mask_graphics_335 = new cjs.Graphics().p("AlviPIDWjcIIJH7IjWDcg");
	var mask_graphics_336 = new cjs.Graphics().p("Al2iIIDkjrIIJH8IjkDrg");
	var mask_graphics_337 = new cjs.Graphics().p("Al+iAID0j6IIJH7Ij0D6g");
	var mask_graphics_338 = new cjs.Graphics().p("AmGh4IEEkKIIJH7IkEEKg");
	var mask_graphics_339 = new cjs.Graphics().p("AmNhwIESkaIIJH7IkSEag");
	var mask_graphics_340 = new cjs.Graphics().p("AmVhoIEikqIIJH7IkiEqg");
	var mask_graphics_341 = new cjs.Graphics().p("AmdhgIEyk6IIJH7IkyE6g");
	var mask_graphics_342 = new cjs.Graphics().p("AmlhYIFClKIIJH7IlCFKg");
	var mask_graphics_343 = new cjs.Graphics().p("AmshRIFQlYIIJH6IlQFag");
	var mask_graphics_344 = new cjs.Graphics().p("AmzhJIFflpIIJH7IlfFqg");
	var mask_graphics_345 = new cjs.Graphics().p("Am7hBIFul5IIJH8IluF5g");
	var mask_graphics_346 = new cjs.Graphics().p("AnDg5IF+mIIIJH7Il+GIg");
	var mask_graphics_347 = new cjs.Graphics().p("AnLgxIGOmYIIJH7ImOGYg");
	var mask_graphics_348 = new cjs.Graphics().p("AnSgpIGdmoIIJH7ImdGog");
	var mask_graphics_349 = new cjs.Graphics().p("AnaghIGsm4IIJH7ImsG4g");
	var mask_graphics_350 = new cjs.Graphics().p("AnigZIG7nIIIJH7Im7HIg");
	var mask_graphics_351 = new cjs.Graphics().p("AnpgRIHKnYIIJH7InKHYg");
	var mask_graphics_352 = new cjs.Graphics().p("AnxgJIHanoIIJH8InaHmg");
	var mask_graphics_353 = new cjs.Graphics().p("An5gBIHqn3IIJH6InqH3g");
	var mask_graphics_354 = new cjs.Graphics().p("AoBAGIH5oGIIJH7In5IGg");
	var mask_graphics_355 = new cjs.Graphics().p("AoIANIIIoVIIJH8IoIIVg");
	var mask_graphics_356 = new cjs.Graphics().p("AoPAVIIVolIIKH8IoVIlg");
	var mask_graphics_357 = new cjs.Graphics().p("AoXAdIIlo1IIKH8IolI1g");
	var mask_graphics_358 = new cjs.Graphics().p("AofAlII1pFIIKH8Io1JFg");
	var mask_graphics_359 = new cjs.Graphics().p("AonAtIJFpVIIKH8IpFJVg");
	var mask_graphics_360 = new cjs.Graphics().p("AouA1IJTplIIKH8IpTJlg");
	var mask_graphics_361 = new cjs.Graphics().p("Ao2A9IJjp1IIKH8IpjJ1g");
	var mask_graphics_362 = new cjs.Graphics().p("Ao+BEIJzqEIIKH9IpzKDg");
	var mask_graphics_363 = new cjs.Graphics().p("ApFBMIKBqTIIKH8IqBKTg");
	var mask_graphics_364 = new cjs.Graphics().p("ApNBUIKRqjIIKH8IqRKjg");
	var mask_graphics_365 = new cjs.Graphics().p("ApVBcIKhqzIIKH8IqhKzg");
	var mask_graphics_366 = new cjs.Graphics().p("ApdBkIKxrDIIKH8IqxLDg");
	var mask_graphics_367 = new cjs.Graphics().p("ApkBsIK/rTIIKH8Iq/LTg");
	var mask_graphics_368 = new cjs.Graphics().p("ApsB0ILPrjIIKH8IrPLjg");
	var mask_graphics_369 = new cjs.Graphics().p("ApzB8ILdrzIIKH8IrdLyg");
	var mask_graphics_370 = new cjs.Graphics().p("Ap7CEILtsDIIKH9IrtMBg");
	var mask_graphics_371 = new cjs.Graphics().p("AqDCLIL9sRIIKH8Ir9MRg");
	var mask_graphics_372 = new cjs.Graphics().p("AqKCTIMMshIIKH8IsMMhg");
	var mask_graphics_373 = new cjs.Graphics().p("AqSCbIMbsxIIKH8IsbMxg");
	var mask_graphics_374 = new cjs.Graphics().p("AqaCjIMrtBIIKH8IsrNBg");
	var mask_graphics_375 = new cjs.Graphics().p("AqiCrIM6tRIIKH8Is6NRg");
	var mask_graphics_376 = new cjs.Graphics().p("AqpCzINJthIIKH8ItJNhg");
	var mask_graphics_377 = new cjs.Graphics().p("AqxC7INZtxIIKH8ItZNxg");
	var mask_graphics_378 = new cjs.Graphics().p("Aq5DCINot/IIKH7ItoOBg");
	var mask_graphics_379 = new cjs.Graphics().p("ArADKIN3uPIIKH7It3ORg");
	var mask_graphics_380 = new cjs.Graphics().p("ArIDSIOHugIIKH9IuHOgg");
	var mask_graphics_381 = new cjs.Graphics().p("ArQDaIOWuvIIKH8IuWOvg");
	var mask_graphics_382 = new cjs.Graphics().p("ArXDiIOlu/IIKH8IulO/g");
	var mask_graphics_383 = new cjs.Graphics().p("ArfDqIO1vPIIKH8Iu1PPg");
	var mask_graphics_384 = new cjs.Graphics().p("ArnDyIPEvfIIKH8IvEPfg");
	var mask_graphics_385 = new cjs.Graphics().p("AruD6IPTvvIIKH8IvTPvg");
	var mask_graphics_386 = new cjs.Graphics().p("Ar2ECIPjv/IIKH8IvjP/g");
	var mask_graphics_387 = new cjs.Graphics().p("Ar9EKIPywPIIKH8IvyQPg");
	var mask_graphics_388 = new cjs.Graphics().p("AsFERIQBwdIIKH8IwBQdg");
	var mask_graphics_389 = new cjs.Graphics().p("AsNEZIQRwtIIKH8IwRQtg");
	var mask_graphics_390 = new cjs.Graphics().p("AsUEhIQfw9IIKH8IwfQ9g");
	var mask_graphics_391 = new cjs.Graphics().p("AscEpIQvxNIIKH8IwvRNg");
	var mask_graphics_392 = new cjs.Graphics().p("AskExIQ/xdIIKH8Iw/Rdg");
	var mask_graphics_393 = new cjs.Graphics().p("AssE5IRPxtIIKH8IxPRtg");
	var mask_graphics_394 = new cjs.Graphics().p("AszFBIRdx9IIKH8IxdR9g");
	var mask_graphics_395 = new cjs.Graphics().p("As7FJIRtyNIIKH9IxtSLg");
	var mask_graphics_396 = new cjs.Graphics().p("AtDFRIR9ydIIKH9Ix9Sbg");
	var mask_graphics_397 = new cjs.Graphics().p("AtKFZISLysIIKH7IyLSsg");
	var mask_graphics_398 = new cjs.Graphics().p("AtSFgISby7IIKH8IybS7g");
	var mask_graphics_399 = new cjs.Graphics().p("AtZFoISpzLIIKH8IypTLg");
	var mask_graphics_400 = new cjs.Graphics().p("AthFwIS5zbIIKH8Iy5Tbg");
	var mask_graphics_401 = new cjs.Graphics().p("AtpF4ITJzrIIKH8IzJTrg");
	var mask_graphics_402 = new cjs.Graphics().p("AtwGAITYz7IIKH8IzYT7g");
	var mask_graphics_403 = new cjs.Graphics().p("At4GIITn0LIIKH8IznULg");
	var mask_graphics_404 = new cjs.Graphics().p("AuAGPIT30ZIIKH7Iz3Ubg");
	var mask_graphics_405 = new cjs.Graphics().p("AuIGXIUG0qIIKH9I0GUqg");
	var mask_graphics_406 = new cjs.Graphics().p("AuPGfIUV06IIKH9I0VU6g");
	var mask_graphics_407 = new cjs.Graphics().p("AuXGnIUl1JIIKH8I0lVJg");
	var mask_graphics_408 = new cjs.Graphics().p("AufGvIU01ZIIKH8I00VZg");
	var mask_graphics_409 = new cjs.Graphics().p("AumG3IVD1pIIKH8I1DVpg");
	var mask_graphics_410 = new cjs.Graphics().p("AuuG/IVT15IIKH8I1TV5g");
	var mask_graphics_411 = new cjs.Graphics().p("Au1HHIVh2JIIKH8I1hWJg");
	var mask_graphics_412 = new cjs.Graphics().p("Au9HPIVx2ZIIKH8I1xWZg");
	var mask_graphics_413 = new cjs.Graphics().p("AvFHXIWB2pIIKH8I2BWpg");
	var mask_graphics_414 = new cjs.Graphics().p("AvMHeIWP23IIKH8I2PW3g");
	var mask_graphics_415 = new cjs.Graphics().p("AvUHmIWf3HIIKH8I2fXHg");
	var mask_graphics_416 = new cjs.Graphics().p("AvcHuIWv3XIIKH8I2vXXg");
	var mask_graphics_417 = new cjs.Graphics().p("AvkH2IW/3nIIKH8I2/Xng");
	var mask_graphics_418 = new cjs.Graphics().p("AvrH+IXN33IIKH8I3NX3g");
	var mask_graphics_419 = new cjs.Graphics().p("AvzIGIXd4HIIKH8I3dYHg");
	var mask_graphics_420 = new cjs.Graphics().p("Av7IOIXt4XIIKH8I3tYXg");
	var mask_graphics_421 = new cjs.Graphics().p("AwCIVIX74mIIKH9I37Ymg");
	var mask_graphics_422 = new cjs.Graphics().p("AwKIdIYL41IIKH7I4LY3g");
	var mask_graphics_423 = new cjs.Graphics().p("AwRIlIYa5FIIKH7I4aZHg");
	var mask_graphics_424 = new cjs.Graphics().p("AwZItIYp5VIIKH8I4pZVg");
	var mask_graphics_425 = new cjs.Graphics().p("AwhI1IY55lIIKH8I45Zlg");
	var mask_graphics_426 = new cjs.Graphics().p("AwpI9IZJ51IIKH8I5JZ1g");
	var mask_graphics_427 = new cjs.Graphics().p("AwwJFIZX6FIIKH8I5XaFg");
	var mask_graphics_428 = new cjs.Graphics().p("Aw4JNIZn6VIIKH8I5naVg");
	var mask_graphics_429 = new cjs.Graphics().p("AxAJVIZ26lIIKH8I52alg");
	var mask_graphics_430 = new cjs.Graphics().p("AxHJdIaF61IIKH9I6Fazg");
	var mask_graphics_431 = new cjs.Graphics().p("AxPJlIaV7FIIKH9I6VbDg");
	var mask_graphics_432 = new cjs.Graphics().p("AxXJtIal7UIIKH7I6lbUg");
	var mask_graphics_433 = new cjs.Graphics().p("AxeJ0Iaz7jIIKH8I6zbjg");
	var mask_graphics_434 = new cjs.Graphics().p("AxmJ8IbD7zIIKH8I7Dbzg");
	var mask_graphics_435 = new cjs.Graphics().p("AxtKEIbR8DIIKH8I7ScDg");
	var mask_graphics_436 = new cjs.Graphics().p("Ax1KMIbh8TIIKH8I7hcTg");
	var mask_graphics_437 = new cjs.Graphics().p("Ax9KUIbx8jIIKH8I7xcjg");
	var mask_graphics_438 = new cjs.Graphics().p("AyFKcIcB8zIIKH8I8Bczg");
	var mask_graphics_439 = new cjs.Graphics().p("AyMKkIcP9DIIKH8I8PdDg");
	var mask_graphics_440 = new cjs.Graphics().p("AyUKrIcf9RIIKH8I8fdRg");
	var mask_graphics_441 = new cjs.Graphics().p("AybKzIcu9hIIKH8I8udhg");
	var mask_graphics_442 = new cjs.Graphics().p("AyjK7Ic99xIIKH8I89dxg");
	var mask_graphics_443 = new cjs.Graphics().p("AyrLDIdN+BIIKH8I9NeBg");
	var mask_graphics_444 = new cjs.Graphics().p("AyzLLIdd+RIIKH8I9deRg");
	var mask_graphics_445 = new cjs.Graphics().p("Ay6LTIds+hIIKH8I9sehg");
	var mask_graphics_446 = new cjs.Graphics().p("AzCLbId7+xIIKH8I97exg");
	var mask_graphics_447 = new cjs.Graphics().p("AzKLiIeL+/IIKH7I+LfBg");
	var mask_graphics_448 = new cjs.Graphics().p("AzRLqIeZ/PIIKH7I+ZfRg");
	var mask_graphics_449 = new cjs.Graphics().p("AzZLyIep/gIIKH9I+pfgg");
	var mask_graphics_450 = new cjs.Graphics().p("AzhL6Ie5/vIIKH8I+5fvg");
	var mask_graphics_451 = new cjs.Graphics().p("AzpMCIfJ//IIKH8I/Jf/g");
	var mask_graphics_452 = new cjs.Graphics().p("AzwMKMAfXggPIIKH8MgfXAgPg");
	var mask_graphics_453 = new cjs.Graphics().p("Az4MSMAfnggfIIKH8MgfnAgfg");
	var mask_graphics_454 = new cjs.Graphics().p("Az/MaMAf1ggvIIKH8Mgf1Agvg");
	var mask_graphics_455 = new cjs.Graphics().p("A0HMiMAgFgg/IIKH8MggFAg/g");
	var mask_graphics_456 = new cjs.Graphics().p("A0PMqMAgVghPIIKH9MggVAhNg");
	var mask_graphics_457 = new cjs.Graphics().p("A0WMyMAgjgheIIKH7MggjAheg");
	var mask_graphics_458 = new cjs.Graphics().p("A0eM6MAgzghuIIKH7MggzAhug");
	var mask_graphics_459 = new cjs.Graphics().p("A0mNBMAhDgh9IIKH8MghDAh9g");
	var mask_graphics_460 = new cjs.Graphics().p("A0tNJMAhRgiNIIKH8MghRAiNg");
	var mask_graphics_461 = new cjs.Graphics().p("A01NRMAhhgidIIKH8MghhAidg");
	var mask_graphics_462 = new cjs.Graphics().p("A09NZMAhxgitIIKH8MghxAitg");
	var mask_graphics_463 = new cjs.Graphics().p("A1FNhMAiAgi9IIKH8MgiAAi9g");
	var mask_graphics_464 = new cjs.Graphics().p("A1MNpMAiPgjNIIKH8MgiPAjNg");
	var mask_graphics_465 = new cjs.Graphics().p("A1UNxMAifgjdIIKH9MgifAjcg");
	var mask_graphics_466 = new cjs.Graphics().p("A1bN4MAitgjrIIKH8MgitAjrg");
	var mask_graphics_467 = new cjs.Graphics().p("A1jOAMAi9gj7IIKH8Mgi9Aj7g");
	var mask_graphics_468 = new cjs.Graphics().p("A1rOIMAjNgkLIIKH8MgjNAkLg");
	var mask_graphics_469 = new cjs.Graphics().p("A1yOQMAjcgkbIIKH8MgjcAkbg");
	var mask_graphics_470 = new cjs.Graphics().p("A16OYMAjrgkrIIKH8MgjrAkrg");
	var mask_graphics_471 = new cjs.Graphics().p("A2COgMAj7gk7IIKH8Mgj7Ak7g");
	var mask_graphics_472 = new cjs.Graphics().p("A2JOoMAkJglLIIKH8MgkJAlLg");
	var mask_graphics_473 = new cjs.Graphics().p("A2ROvMAkZglZIIKH7MgkZAlag");
	var mask_graphics_474 = new cjs.Graphics().p("A2ZO3MAkpglqIIKH9MgkpAlpg");
	var mask_graphics_475 = new cjs.Graphics().p("A2hO/MAk5gl6IIKH9Mgk5Al5g");
	var mask_graphics_476 = new cjs.Graphics().p("A2oPHMAlHgmJIIKH8MglHAmJg");
	var mask_graphics_477 = new cjs.Graphics().p("A2wPPMAlXgmZIIKH8MglXAmZg");
	var mask_graphics_478 = new cjs.Graphics().p("A23PXMAllgmpIIKH8MgllAmpg");
	var mask_graphics_479 = new cjs.Graphics().p("A2/PfMAl1gm5IIKH8Mgl1Am5g");
	var mask_graphics_480 = new cjs.Graphics().p("A3HPnMAmFgnJIIKH8MgmFAnJg");
	var mask_graphics_481 = new cjs.Graphics().p("A3OPvMAmTgnZIIKH8MgmTAnZg");
	var mask_graphics_482 = new cjs.Graphics().p("A3WP3MAmjgnpIIKH8MgmjAnpg");
	var mask_graphics_483 = new cjs.Graphics().p("A3eP+MAmzgn3IIKH7MgmzAn5g");
	var mask_graphics_484 = new cjs.Graphics().p("A3lQGMAnBgoHIIKH8MgnBAoHg");
	var mask_graphics_485 = new cjs.Graphics().p("A3tQOMAnRgoXIIKH8MgnRAoXg");
	var mask_graphics_486 = new cjs.Graphics().p("A31QWMAnhgonIIKH8MgnhAong");
	var mask_graphics_487 = new cjs.Graphics().p("AvPc+MAnwgo3IIKH8MgnwAo3g");
	var mask_graphics_488 = new cjs.Graphics().p("A4cQ/MAowgp5IIKH8MgowAp5g");
	var mask_graphics_489 = new cjs.Graphics().p("AwZdJMApwgq6IIKH8MgpwAq6g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(327).to({graphics:mask_graphics_327,x:85.8,y:236.8}).wait(1).to({graphics:mask_graphics_328,x:141.7,y:442.8}).wait(1).to({graphics:mask_graphics_329,x:142.4,y:442}).wait(1).to({graphics:mask_graphics_330,x:143.2,y:441.2}).wait(1).to({graphics:mask_graphics_331,x:144,y:440.4}).wait(1).to({graphics:mask_graphics_332,x:144.8,y:439.6}).wait(1).to({graphics:mask_graphics_333,x:145.5,y:438.8}).wait(1).to({graphics:mask_graphics_334,x:146.3,y:438}).wait(1).to({graphics:mask_graphics_335,x:147.1,y:437.2}).wait(1).to({graphics:mask_graphics_336,x:147.9,y:436.4}).wait(1).to({graphics:mask_graphics_337,x:148.6,y:435.6}).wait(1).to({graphics:mask_graphics_338,x:149.4,y:434.8}).wait(1).to({graphics:mask_graphics_339,x:150.2,y:434}).wait(1).to({graphics:mask_graphics_340,x:151,y:433.2}).wait(1).to({graphics:mask_graphics_341,x:151.7,y:432.4}).wait(1).to({graphics:mask_graphics_342,x:152.5,y:431.6}).wait(1).to({graphics:mask_graphics_343,x:153.3,y:430.8}).wait(1).to({graphics:mask_graphics_344,x:154.1,y:430}).wait(1).to({graphics:mask_graphics_345,x:154.8,y:429.2}).wait(1).to({graphics:mask_graphics_346,x:155.6,y:428.4}).wait(1).to({graphics:mask_graphics_347,x:156.4,y:427.6}).wait(1).to({graphics:mask_graphics_348,x:157.2,y:426.8}).wait(1).to({graphics:mask_graphics_349,x:158,y:426.1}).wait(1).to({graphics:mask_graphics_350,x:158.7,y:425.2}).wait(1).to({graphics:mask_graphics_351,x:159.5,y:424.4}).wait(1).to({graphics:mask_graphics_352,x:160.3,y:423.7}).wait(1).to({graphics:mask_graphics_353,x:161,y:422.9}).wait(1).to({graphics:mask_graphics_354,x:161.8,y:422.1}).wait(1).to({graphics:mask_graphics_355,x:162.6,y:421.3}).wait(1).to({graphics:mask_graphics_356,x:163.4,y:420.5}).wait(1).to({graphics:mask_graphics_357,x:164.1,y:419.7}).wait(1).to({graphics:mask_graphics_358,x:164.9,y:418.9}).wait(1).to({graphics:mask_graphics_359,x:165.7,y:418.1}).wait(1).to({graphics:mask_graphics_360,x:166.5,y:417.3}).wait(1).to({graphics:mask_graphics_361,x:167.3,y:416.5}).wait(1).to({graphics:mask_graphics_362,x:168,y:415.7}).wait(1).to({graphics:mask_graphics_363,x:168.8,y:414.9}).wait(1).to({graphics:mask_graphics_364,x:169.6,y:414.1}).wait(1).to({graphics:mask_graphics_365,x:170.3,y:413.3}).wait(1).to({graphics:mask_graphics_366,x:171.1,y:412.5}).wait(1).to({graphics:mask_graphics_367,x:171.9,y:411.7}).wait(1).to({graphics:mask_graphics_368,x:172.7,y:410.9}).wait(1).to({graphics:mask_graphics_369,x:173.4,y:410.1}).wait(1).to({graphics:mask_graphics_370,x:174.2,y:409.3}).wait(1).to({graphics:mask_graphics_371,x:175,y:408.5}).wait(1).to({graphics:mask_graphics_372,x:175.8,y:407.7}).wait(1).to({graphics:mask_graphics_373,x:176.5,y:406.9}).wait(1).to({graphics:mask_graphics_374,x:177.3,y:406.1}).wait(1).to({graphics:mask_graphics_375,x:178.1,y:405.3}).wait(1).to({graphics:mask_graphics_376,x:178.9,y:404.5}).wait(1).to({graphics:mask_graphics_377,x:179.6,y:403.7}).wait(1).to({graphics:mask_graphics_378,x:180.4,y:403}).wait(1).to({graphics:mask_graphics_379,x:181.2,y:402.2}).wait(1).to({graphics:mask_graphics_380,x:182,y:401.4}).wait(1).to({graphics:mask_graphics_381,x:182.8,y:400.6}).wait(1).to({graphics:mask_graphics_382,x:183.5,y:399.8}).wait(1).to({graphics:mask_graphics_383,x:184.3,y:399}).wait(1).to({graphics:mask_graphics_384,x:185.1,y:398.2}).wait(1).to({graphics:mask_graphics_385,x:185.8,y:397.4}).wait(1).to({graphics:mask_graphics_386,x:186.6,y:396.6}).wait(1).to({graphics:mask_graphics_387,x:187.4,y:395.8}).wait(1).to({graphics:mask_graphics_388,x:188.2,y:395}).wait(1).to({graphics:mask_graphics_389,x:188.9,y:394.2}).wait(1).to({graphics:mask_graphics_390,x:189.7,y:393.4}).wait(1).to({graphics:mask_graphics_391,x:190.5,y:392.6}).wait(1).to({graphics:mask_graphics_392,x:191.3,y:391.8}).wait(1).to({graphics:mask_graphics_393,x:192.1,y:391}).wait(1).to({graphics:mask_graphics_394,x:192.8,y:390.2}).wait(1).to({graphics:mask_graphics_395,x:193.6,y:389.4}).wait(1).to({graphics:mask_graphics_396,x:194.4,y:388.6}).wait(1).to({graphics:mask_graphics_397,x:195.1,y:387.8}).wait(1).to({graphics:mask_graphics_398,x:195.9,y:387}).wait(1).to({graphics:mask_graphics_399,x:196.7,y:386.2}).wait(1).to({graphics:mask_graphics_400,x:197.5,y:385.4}).wait(1).to({graphics:mask_graphics_401,x:198.2,y:384.6}).wait(1).to({graphics:mask_graphics_402,x:199,y:383.8}).wait(1).to({graphics:mask_graphics_403,x:199.8,y:383}).wait(1).to({graphics:mask_graphics_404,x:200.6,y:382.3}).wait(1).to({graphics:mask_graphics_405,x:201.4,y:381.5}).wait(1).to({graphics:mask_graphics_406,x:202.1,y:380.7}).wait(1).to({graphics:mask_graphics_407,x:202.9,y:379.9}).wait(1).to({graphics:mask_graphics_408,x:203.7,y:379.1}).wait(1).to({graphics:mask_graphics_409,x:204.4,y:378.3}).wait(1).to({graphics:mask_graphics_410,x:205.2,y:377.5}).wait(1).to({graphics:mask_graphics_411,x:206,y:376.7}).wait(1).to({graphics:mask_graphics_412,x:206.8,y:375.9}).wait(1).to({graphics:mask_graphics_413,x:207.6,y:375.1}).wait(1).to({graphics:mask_graphics_414,x:208.3,y:374.3}).wait(1).to({graphics:mask_graphics_415,x:209.1,y:373.5}).wait(1).to({graphics:mask_graphics_416,x:209.9,y:372.7}).wait(1).to({graphics:mask_graphics_417,x:210.7,y:371.9}).wait(1).to({graphics:mask_graphics_418,x:211.4,y:371.1}).wait(1).to({graphics:mask_graphics_419,x:212.2,y:370.3}).wait(1).to({graphics:mask_graphics_420,x:213,y:369.5}).wait(1).to({graphics:mask_graphics_421,x:213.7,y:368.7}).wait(1).to({graphics:mask_graphics_422,x:214.5,y:367.9}).wait(1).to({graphics:mask_graphics_423,x:215.3,y:367.1}).wait(1).to({graphics:mask_graphics_424,x:216.1,y:366.3}).wait(1).to({graphics:mask_graphics_425,x:216.9,y:365.5}).wait(1).to({graphics:mask_graphics_426,x:217.6,y:364.7}).wait(1).to({graphics:mask_graphics_427,x:218.4,y:363.9}).wait(1).to({graphics:mask_graphics_428,x:219.2,y:363.1}).wait(1).to({graphics:mask_graphics_429,x:220,y:362.3}).wait(1).to({graphics:mask_graphics_430,x:220.7,y:361.6}).wait(1).to({graphics:mask_graphics_431,x:221.5,y:360.8}).wait(1).to({graphics:mask_graphics_432,x:222.3,y:360}).wait(1).to({graphics:mask_graphics_433,x:223,y:359.1}).wait(1).to({graphics:mask_graphics_434,x:223.8,y:358.4}).wait(1).to({graphics:mask_graphics_435,x:224.6,y:357.6}).wait(1).to({graphics:mask_graphics_436,x:225.4,y:356.8}).wait(1).to({graphics:mask_graphics_437,x:226.2,y:356}).wait(1).to({graphics:mask_graphics_438,x:226.9,y:355.2}).wait(1).to({graphics:mask_graphics_439,x:227.7,y:354.4}).wait(1).to({graphics:mask_graphics_440,x:228.5,y:353.6}).wait(1).to({graphics:mask_graphics_441,x:229.3,y:352.8}).wait(1).to({graphics:mask_graphics_442,x:230,y:352}).wait(1).to({graphics:mask_graphics_443,x:230.8,y:351.2}).wait(1).to({graphics:mask_graphics_444,x:231.6,y:350.4}).wait(1).to({graphics:mask_graphics_445,x:232.4,y:349.6}).wait(1).to({graphics:mask_graphics_446,x:233.1,y:348.8}).wait(1).to({graphics:mask_graphics_447,x:233.9,y:348}).wait(1).to({graphics:mask_graphics_448,x:234.7,y:347.2}).wait(1).to({graphics:mask_graphics_449,x:235.5,y:346.4}).wait(1).to({graphics:mask_graphics_450,x:236.2,y:345.6}).wait(1).to({graphics:mask_graphics_451,x:237,y:344.8}).wait(1).to({graphics:mask_graphics_452,x:237.8,y:344}).wait(1).to({graphics:mask_graphics_453,x:238.5,y:343.2}).wait(1).to({graphics:mask_graphics_454,x:239.3,y:342.4}).wait(1).to({graphics:mask_graphics_455,x:240.1,y:341.6}).wait(1).to({graphics:mask_graphics_456,x:240.9,y:340.9}).wait(1).to({graphics:mask_graphics_457,x:241.7,y:340.1}).wait(1).to({graphics:mask_graphics_458,x:242.4,y:339.3}).wait(1).to({graphics:mask_graphics_459,x:243.2,y:338.4}).wait(1).to({graphics:mask_graphics_460,x:244,y:337.7}).wait(1).to({graphics:mask_graphics_461,x:244.8,y:336.9}).wait(1).to({graphics:mask_graphics_462,x:245.5,y:336.1}).wait(1).to({graphics:mask_graphics_463,x:246.3,y:335.3}).wait(1).to({graphics:mask_graphics_464,x:247.1,y:334.5}).wait(1).to({graphics:mask_graphics_465,x:247.8,y:333.7}).wait(1).to({graphics:mask_graphics_466,x:248.6,y:332.9}).wait(1).to({graphics:mask_graphics_467,x:249.4,y:332.1}).wait(1).to({graphics:mask_graphics_468,x:250.2,y:331.3}).wait(1).to({graphics:mask_graphics_469,x:251,y:330.5}).wait(1).to({graphics:mask_graphics_470,x:251.7,y:329.7}).wait(1).to({graphics:mask_graphics_471,x:252.5,y:328.9}).wait(1).to({graphics:mask_graphics_472,x:253.3,y:328.1}).wait(1).to({graphics:mask_graphics_473,x:254.1,y:327.3}).wait(1).to({graphics:mask_graphics_474,x:254.8,y:326.5}).wait(1).to({graphics:mask_graphics_475,x:255.6,y:325.7}).wait(1).to({graphics:mask_graphics_476,x:256.4,y:324.9}).wait(1).to({graphics:mask_graphics_477,x:257.2,y:324.1}).wait(1).to({graphics:mask_graphics_478,x:257.9,y:323.3}).wait(1).to({graphics:mask_graphics_479,x:258.7,y:322.5}).wait(1).to({graphics:mask_graphics_480,x:259.5,y:321.7}).wait(1).to({graphics:mask_graphics_481,x:260.3,y:320.9}).wait(1).to({graphics:mask_graphics_482,x:261,y:320.1}).wait(1).to({graphics:mask_graphics_483,x:261.8,y:319.4}).wait(1).to({graphics:mask_graphics_484,x:262.6,y:318.5}).wait(1).to({graphics:mask_graphics_485,x:263.4,y:317.7}).wait(1).to({graphics:mask_graphics_486,x:264.1,y:317}).wait(1).to({graphics:mask_graphics_487,x:209.1,y:236.2}).wait(1).to({graphics:mask_graphics_488,x:267.1,y:314}).wait(1).to({graphics:mask_graphics_489,x:214.5,y:237.3}).wait(97));

	// Layer 11
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(20,1,1).p("AyiVfQl2jwILoNQIKoNHxlCQHvlDE8j9QE8j+Dqkz");
	this.shape_2.setTransform(274.7,332.5);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(327).to({_off:false},0).wait(259));

	// Layer 10 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_309 = new cjs.Graphics().p("EADjAl6IJ/xyQDjCEBID+QBJEEiEDsQiEDskEBJQhdAahaAAQidAAiThPg");
	var mask_1_graphics_310 = new cjs.Graphics().p("EADDAlnILAxLQDbCRA5EDQA6EHiSDkQiSDkkIA5QhLARhIAAQixAAiehig");
	var mask_1_graphics_311 = new cjs.Graphics().p("EACjAlRIL/wfQDTCeApEFQArELigDbQieDakLAqQg4AJg2AAQjGAAiph3g");
	var mask_1_graphics_312 = new cjs.Graphics().p("EACFAk6IM8vwQDICqAbEHQAaENisDRQirDRkNAaQgkAEgjAAQjdAAixiOg");
	var mask_1_graphics_313 = new cjs.Graphics().p("EABoAkiIN2u+QC+C1ALEJQAKEOi3DGQi4DGkOALIgdAAQj3AAi4ilg");
	var mask_1_graphics_314 = new cjs.Graphics().p("EAIOAnHQkJgFi5i7IOtuIQCzDAgFEJQgFEOjDC7Qi9C2kFAAIgPAAg");
	var mask_1_graphics_315 = new cjs.Graphics().p("EAHoAnFQkIgViujGIPgtPQCoDLgUEIQgWENjNCwQi3CcjqAAQgdAAgdgCg");
	var mask_1_graphics_316 = new cjs.Graphics().p("EAHCAnAQkHgkiijPIQRsUQCcDUgkEHQgmELjXCjQiwCFjSAAQgvAAgygHg");
	var mask_1_graphics_317 = new cjs.Graphics().p("EAGcAm5QkEgziVjZIQ9rVQCPDdg0EEQg1EJjgCWQinBvi8AAQhCAAhFgOg");
	var mask_1_graphics_318 = new cjs.Graphics().p("EAF3AmwQkBhDiHjgIRlqUQCBDlhCEAQhFEFjpCJQibBbioAAQhUAAhXgXg");
	var mask_1_graphics_319 = new cjs.Graphics().p("EAFSAmlQj8hSh6joISKpQQB0DshSD8QhTEBjxB6QiQBJiUAAQhmAAhogig");
	var mask_1_graphics_320 = new cjs.Graphics().p("EAEuAmYQj3hghsjwISroLQBmDzhhD3QhiD7j4BtQiBA4iDAAQh3AAh4gvg");
	var mask_1_graphics_321 = new cjs.Graphics().p("EAELAmJQjxhvhdj1ITHnEQBXD4huDxQhxD1j+BeQhzAqhxAAQiJAAiGg+g");
	var mask_1_graphics_322 = new cjs.Graphics().p("EADpAl4Qjph9hQj7ITgl6QBJD9h9DpQh/DvkDBOQhjAehfAAQibAAiUhPg");
	var mask_1_graphics_323 = new cjs.Graphics().p("EADIAllQjhiLhBj+IT0kxQA5EBiKDiQiNDmkHA/QhRAUhOAAQiuAAighig");
	var mask_1_graphics_324 = new cjs.Graphics().p("EACpAlQQjZiXgykDIUEjlQAqEEiXDZQibDekKAvQg+ALg8AAQjEAAiph2g");
	var mask_1_graphics_325 = new cjs.Graphics().p("EACKAk5QjPikgjkEIUPiaQAbEGijDQQioDUkMAgQgrAFgpAAQjaAAiziNg");
	var mask_1_graphics_326 = new cjs.Graphics().p("EABuAkhQjGiwgTkGIUWhNQALEHiwDGQizDKkOAQIgrABQjzAAi5ilg");
	var mask_1_graphics_327 = new cjs.Graphics().p("EABSAkHQi7i8gEkHIUYAAQgEEHi7C8Qi/C/kOAAQkOAAi/i/g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(309).to({graphics:mask_1_graphics_309,x:119.1,y:250.5}).wait(1).to({graphics:mask_1_graphics_310,x:119.1,y:250.5}).wait(1).to({graphics:mask_1_graphics_311,x:119.1,y:250.4}).wait(1).to({graphics:mask_1_graphics_312,x:119.1,y:250.4}).wait(1).to({graphics:mask_1_graphics_313,x:119.1,y:250.3}).wait(1).to({graphics:mask_1_graphics_314,x:119.2,y:250.3}).wait(1).to({graphics:mask_1_graphics_315,x:119.2,y:250.3}).wait(1).to({graphics:mask_1_graphics_316,x:119.2,y:250.3}).wait(1).to({graphics:mask_1_graphics_317,x:119.3,y:250.3}).wait(1).to({graphics:mask_1_graphics_318,x:119.3,y:250.3}).wait(1).to({graphics:mask_1_graphics_319,x:119.4,y:250.3}).wait(1).to({graphics:mask_1_graphics_320,x:119.4,y:250.3}).wait(1).to({graphics:mask_1_graphics_321,x:119.4,y:250.3}).wait(1).to({graphics:mask_1_graphics_322,x:119.5,y:250.3}).wait(1).to({graphics:mask_1_graphics_323,x:119.5,y:250.3}).wait(1).to({graphics:mask_1_graphics_324,x:119.5,y:250.2}).wait(1).to({graphics:mask_1_graphics_325,x:119.5,y:250.2}).wait(1).to({graphics:mask_1_graphics_326,x:119.5,y:250.2}).wait(1).to({graphics:mask_1_graphics_327,x:119.5,y:250.2}).wait(259));

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(20,1,1).p("AyiVfQl2jwILoNQIKoNHxlCQHvlDE8j9QE8j+Dqkz");
	this.shape_3.setTransform(274.7,332.5);
	this.shape_3._off = true;

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(309).to({_off:false},0).wait(277));

	// Layer 14
	this.instance_2 = new lib.ar5("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(335.1,231.4,1,1,27.8,0,0,0.1,-1.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(115).to({_off:false},0).wait(471));

	// Layer 9 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_274 = new cjs.Graphics().p("EgDmAiZQANkGDBi1QDFi4EOAJQEOAJC4DGQC1DCgFEHg");
	var mask_2_graphics_275 = new cjs.Graphics().p("EgDjAhVQAfkFDNinQDSiqENAcQEMAdCqDRQCnDPgXEFg");
	var mask_2_graphics_276 = new cjs.Graphics().p("EgDdAgSQAykDDYiYQDdibEKAvQEKAvCbDdQCYDZgpEEg");
	var mask_2_graphics_277 = new cjs.Graphics().p("AjTfPQBDj+DiiJQDoiLEGBBQEGBBCLDoQCJDjg8EAg");
	var mask_2_graphics_278 = new cjs.Graphics().p("AjGeNQBVj5Dqh4QDxh7EBBTQEBBUB7DwQB4DthND7g");
	var mask_2_graphics_279 = new cjs.Graphics().p("Ai3dNQBnjyDyhoQD5hqD7BlQD6BlBqD5QBnD0heD1g");
	var mask_2_graphics_280 = new cjs.Graphics().p("AikcPQB3jrD5hXQEAhYDzB3QDzB2BYD/QBWD7hwDug");
	var mask_2_graphics_281 = new cjs.Graphics().p("AiObSQCHjiD/hFQEFhGDqCIQDqCGBGEFQBFEAiADmg");
	var mask_2_graphics_282 = new cjs.Graphics().p("Ah1aYQCVjYEEgzQEJgzDgCXQDgCXA0EJQAzEEiQDcg");
	var mask_2_graphics_283 = new cjs.Graphics().p("AhaZhQCkjNEHghQEMghDVCnQDVCmAhEMQAhEHifDSg");
	var mask_2_graphics_284 = new cjs.Graphics().p("Ag8YtQCyjBEIgPQEOgODJC1QDJC1AOENQAOEJitDGg");
	var mask_2_graphics_285 = new cjs.Graphics().p("AgcX7QC/izEIAEQEPAEC8DDQC7DCgEEOQgFEJi6C6g");
	var mask_2_graphics_286 = new cjs.Graphics().p("AAFXOQDMimEHAWQEOAYCuDPQCtDOgXENQgXEJjHCsg");
	var mask_2_graphics_287 = new cjs.Graphics().p("AApWkQDXiYEFApQELAqCfDbQCfDagqELQgpEGjTCeg");
	var mask_2_graphics_288 = new cjs.Graphics().p("ABOV9QDhiIECA7QEIA9CPDlQCPDlg8EHQg8EDjcCPg");
	var mask_2_graphics_289 = new cjs.Graphics().p("AB2VbQDqh4D9BNQECBPCADuQB+DvhOECQhOD+jmB/g");
	var mask_2_graphics_290 = new cjs.Graphics().p("ACfU9QDxhnD4BeQD8BhBuD3QBuD2hgD8QhfD4jvBvg");
	var mask_2_graphics_291 = new cjs.Graphics().p("ADJUkQD4hXDxBwQD0BxBdD/QBdD9hyD1QhwDwj2Beg");
	var mask_2_graphics_292 = new cjs.Graphics().p("AD0UOQD+hEDoB/QDsCDBLEEQBLEEiDDsQiADoj8BNg");
	var mask_2_graphics_293 = new cjs.Graphics().p("AGCTqQEHgMDGCvQDLC0AQEOQAQENizDKQiwDHkGAUg");
	var mask_2_graphics_294 = new cjs.Graphics().p("EAFBAn5IDQ0IQEDAuCbDWQCeDbgrELQgrELjbCeQisB9jKAAQgyAAgzgIg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(274).to({graphics:mask_2_graphics_274,x:107.3,y:224.7}).wait(1).to({graphics:mask_2_graphics_275,x:107.3,y:226.9}).wait(1).to({graphics:mask_2_graphics_276,x:107.2,y:229.2}).wait(1).to({graphics:mask_2_graphics_277,x:107.2,y:231.4}).wait(1).to({graphics:mask_2_graphics_278,x:107.2,y:233.6}).wait(1).to({graphics:mask_2_graphics_279,x:107.2,y:235.7}).wait(1).to({graphics:mask_2_graphics_280,x:107.1,y:237.8}).wait(1).to({graphics:mask_2_graphics_281,x:107.1,y:239.8}).wait(1).to({graphics:mask_2_graphics_282,x:107,y:241.7}).wait(1).to({graphics:mask_2_graphics_283,x:107,y:243.6}).wait(1).to({graphics:mask_2_graphics_284,x:106.9,y:245.3}).wait(1).to({graphics:mask_2_graphics_285,x:106.9,y:247}).wait(1).to({graphics:mask_2_graphics_286,x:106.9,y:248.5}).wait(1).to({graphics:mask_2_graphics_287,x:106.9,y:249.9}).wait(1).to({graphics:mask_2_graphics_288,x:106.9,y:251.2}).wait(1).to({graphics:mask_2_graphics_289,x:106.9,y:252.3}).wait(1).to({graphics:mask_2_graphics_290,x:106.9,y:253.3}).wait(1).to({graphics:mask_2_graphics_291,x:106.9,y:254.1}).wait(1).to({graphics:mask_2_graphics_292,x:106.8,y:254.9}).wait(1).to({graphics:mask_2_graphics_293,x:106.7,y:256.1}).wait(1).to({graphics:mask_2_graphics_294,x:106.8,y:256.1}).wait(292));

	// Layer 8
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(20,1,1).p("AN64IQi/GZjNGRQjAF6jFGSQjEGTixGGQiyGGhtCiQhtCijhgI");
	this.shape_4.setTransform(245,315.5);
	this.shape_4._off = true;

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(274).to({_off:false},0).wait(312));

	// Layer 7 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_115 = new cjs.Graphics().p("AwFMiIAArQMAztAAAIAALQg");
	var mask_3_graphics_116 = new cjs.Graphics().p("A52FxIAArhMAztAAAIAALhg");
	var mask_3_graphics_117 = new cjs.Graphics().p("A52F6IAAr0MAztAAAIAAL0g");
	var mask_3_graphics_118 = new cjs.Graphics().p("A52GEIAAsHMAztAAAIAAMHg");
	var mask_3_graphics_119 = new cjs.Graphics().p("A52GNIAAsZMAztAAAIAAMZg");
	var mask_3_graphics_120 = new cjs.Graphics().p("A52GWIAAsrMAztAAAIAAMrg");
	var mask_3_graphics_121 = new cjs.Graphics().p("A52GgIAAs/MAztAAAIAAM/g");
	var mask_3_graphics_122 = new cjs.Graphics().p("A52GpIAAtRMAztAAAIAANRg");
	var mask_3_graphics_123 = new cjs.Graphics().p("A52GyIAAtjMAztAAAIAANjg");
	var mask_3_graphics_124 = new cjs.Graphics().p("A52G7IAAt1MAztAAAIAAN1g");
	var mask_3_graphics_125 = new cjs.Graphics().p("A52HEIAAuHMAztAAAIAAOHg");
	var mask_3_graphics_126 = new cjs.Graphics().p("A52HOIAAubMAztAAAIAAObg");
	var mask_3_graphics_127 = new cjs.Graphics().p("A52HXIAAutMAztAAAIAAOtg");
	var mask_3_graphics_128 = new cjs.Graphics().p("A52HgIAAu/MAztAAAIAAO/g");
	var mask_3_graphics_129 = new cjs.Graphics().p("A52HpIAAvRMAztAAAIAAPRg");
	var mask_3_graphics_130 = new cjs.Graphics().p("A52HyIAAvkMAztAAAIAAPkg");
	var mask_3_graphics_131 = new cjs.Graphics().p("A52H8IAAv3MAztAAAIAAP3g");
	var mask_3_graphics_132 = new cjs.Graphics().p("A52IFIAAwJMAztAAAIAAQJg");
	var mask_3_graphics_133 = new cjs.Graphics().p("A52IOIAAwbMAztAAAIAAQbg");
	var mask_3_graphics_134 = new cjs.Graphics().p("A52IXIAAwuMAztAAAIAAQug");
	var mask_3_graphics_135 = new cjs.Graphics().p("A52IhIAAxBMAztAAAIAARBg");
	var mask_3_graphics_136 = new cjs.Graphics().p("A52IqIAAxTMAztAAAIAARTg");
	var mask_3_graphics_137 = new cjs.Graphics().p("A52IzIAAxlMAztAAAIAARlg");
	var mask_3_graphics_138 = new cjs.Graphics().p("A52I9IAAx5MAztAAAIAAR5g");
	var mask_3_graphics_139 = new cjs.Graphics().p("A52JGIAAyLMAztAAAIAASLg");
	var mask_3_graphics_140 = new cjs.Graphics().p("A52JPIAAydMAztAAAIAASdg");
	var mask_3_graphics_141 = new cjs.Graphics().p("A52JYIAAyvMAztAAAIAASvg");
	var mask_3_graphics_142 = new cjs.Graphics().p("A52JhIAAzBMAztAAAIAATBg");
	var mask_3_graphics_143 = new cjs.Graphics().p("A52JrIAAzVMAztAAAIAATVg");
	var mask_3_graphics_144 = new cjs.Graphics().p("A52J0IAAznMAztAAAIAATng");
	var mask_3_graphics_145 = new cjs.Graphics().p("A52J9IAAz5MAztAAAIAAT5g");
	var mask_3_graphics_146 = new cjs.Graphics().p("A52KGIAA0LMAztAAAIAAULg");
	var mask_3_graphics_147 = new cjs.Graphics().p("A52KPIAA0eMAztAAAIAAUeg");
	var mask_3_graphics_148 = new cjs.Graphics().p("A52KZIAA0xMAztAAAIAAUxg");
	var mask_3_graphics_149 = new cjs.Graphics().p("A52KiIAA1DMAztAAAIAAVDg");
	var mask_3_graphics_150 = new cjs.Graphics().p("A52KrIAA1VMAztAAAIAAVVg");
	var mask_3_graphics_151 = new cjs.Graphics().p("A52K0IAA1oMAztAAAIAAVog");
	var mask_3_graphics_152 = new cjs.Graphics().p("A52K+IAA17MAztAAAIAAV7g");
	var mask_3_graphics_153 = new cjs.Graphics().p("A52LHIAA2NMAztAAAIAAWNg");
	var mask_3_graphics_154 = new cjs.Graphics().p("A52LQIAA2fMAztAAAIAAWfg");
	var mask_3_graphics_155 = new cjs.Graphics().p("A52LZIAA2yMAztAAAIAAWyg");
	var mask_3_graphics_156 = new cjs.Graphics().p("A52LjIAA3FMAztAAAIAAXFg");
	var mask_3_graphics_157 = new cjs.Graphics().p("A52LsIAA3XMAztAAAIAAXXg");
	var mask_3_graphics_158 = new cjs.Graphics().p("A52L1IAA3pMAztAAAIAAXpg");
	var mask_3_graphics_159 = new cjs.Graphics().p("A52L+IAA37MAztAAAIAAX7g");
	var mask_3_graphics_160 = new cjs.Graphics().p("A52MIIAA4PMAztAAAIAAYPg");
	var mask_3_graphics_161 = new cjs.Graphics().p("A52MRIAA4hMAztAAAIAAYhg");
	var mask_3_graphics_162 = new cjs.Graphics().p("A52MaIAA4zMAztAAAIAAYzg");
	var mask_3_graphics_163 = new cjs.Graphics().p("A52MjIAA5FMAztAAAIAAZFg");
	var mask_3_graphics_164 = new cjs.Graphics().p("A52MtIAA5ZMAztAAAIAAZZg");
	var mask_3_graphics_165 = new cjs.Graphics().p("A52M2IAA5rMAztAAAIAAZrg");
	var mask_3_graphics_166 = new cjs.Graphics().p("A52M/IAA59MAztAAAIAAZ9g");
	var mask_3_graphics_167 = new cjs.Graphics().p("A52NIIAA6PMAztAAAIAAaPg");
	var mask_3_graphics_168 = new cjs.Graphics().p("A52NRIAA6iMAztAAAIAAaig");
	var mask_3_graphics_169 = new cjs.Graphics().p("A52NbIAA61MAztAAAIAAa1g");
	var mask_3_graphics_170 = new cjs.Graphics().p("A52NkIAA7HMAztAAAIAAbHg");
	var mask_3_graphics_171 = new cjs.Graphics().p("A52NtIAA7ZMAztAAAIAAbZg");
	var mask_3_graphics_172 = new cjs.Graphics().p("A52N2IAA7sMAztAAAIAAbsg");
	var mask_3_graphics_173 = new cjs.Graphics().p("A52OAIAA7/MAztAAAIAAb/g");
	var mask_3_graphics_174 = new cjs.Graphics().p("A52OJIAA8RMAztAAAIAAcRg");
	var mask_3_graphics_175 = new cjs.Graphics().p("A52OSIAA8jMAztAAAIAAcjg");
	var mask_3_graphics_176 = new cjs.Graphics().p("A52OcIAA83MAztAAAIAAc3g");
	var mask_3_graphics_177 = new cjs.Graphics().p("A52OlIAA9JMAztAAAIAAdJg");
	var mask_3_graphics_178 = new cjs.Graphics().p("A52OuIAA9bMAztAAAIAAdbg");
	var mask_3_graphics_179 = new cjs.Graphics().p("A52O3IAA9tMAztAAAIAAdtg");
	var mask_3_graphics_180 = new cjs.Graphics().p("A52PAIAA9/MAztAAAIAAd/g");
	var mask_3_graphics_181 = new cjs.Graphics().p("A52PKIAA+TMAztAAAIAAeTg");
	var mask_3_graphics_182 = new cjs.Graphics().p("A52PTIAA+lMAztAAAIAAelg");
	var mask_3_graphics_183 = new cjs.Graphics().p("A52PcIAA+3MAztAAAIAAe3g");
	var mask_3_graphics_184 = new cjs.Graphics().p("A52PlIAA/JMAztAAAIAAfJg");
	var mask_3_graphics_185 = new cjs.Graphics().p("A52PuIAA/cMAztAAAIAAfcg");
	var mask_3_graphics_186 = new cjs.Graphics().p("A52P4IAA/vMAztAAAIAAfvg");
	var mask_3_graphics_187 = new cjs.Graphics().p("A52QBMAAAggBMAztAAAMAAAAgBg");
	var mask_3_graphics_188 = new cjs.Graphics().p("A52QKMAAAggTMAztAAAMAAAAgTg");
	var mask_3_graphics_189 = new cjs.Graphics().p("A52QTMAAAggmMAztAAAMAAAAgmg");
	var mask_3_graphics_190 = new cjs.Graphics().p("A52QdMAAAgg5MAztAAAMAAAAg5g");
	var mask_3_graphics_191 = new cjs.Graphics().p("A52QmMAAAghLMAztAAAMAAAAhLg");
	var mask_3_graphics_192 = new cjs.Graphics().p("A52QvMAAAghdMAztAAAMAAAAhdg");
	var mask_3_graphics_193 = new cjs.Graphics().p("A52Q4MAAAghwMAztAAAMAAAAhwg");
	var mask_3_graphics_194 = new cjs.Graphics().p("A52RBMAAAgiCMAztAAAMAAAAiCg");
	var mask_3_graphics_195 = new cjs.Graphics().p("A52RLMAAAgiVMAztAAAMAAAAiVg");
	var mask_3_graphics_196 = new cjs.Graphics().p("A52RUMAAAginMAztAAAMAAAAing");
	var mask_3_graphics_197 = new cjs.Graphics().p("A52RdMAAAgi5MAztAAAMAAAAi5g");
	var mask_3_graphics_198 = new cjs.Graphics().p("A52RnMAAAgjNMAztAAAMAAAAjNg");
	var mask_3_graphics_199 = new cjs.Graphics().p("A52RwMAAAgjfMAztAAAMAAAAjfg");
	var mask_3_graphics_200 = new cjs.Graphics().p("A52R5MAAAgjxMAztAAAMAAAAjxg");
	var mask_3_graphics_201 = new cjs.Graphics().p("A52SCMAAAgkDMAztAAAMAAAAkDg");
	var mask_3_graphics_202 = new cjs.Graphics().p("A52SMMAAAgkXMAztAAAMAAAAkXg");
	var mask_3_graphics_203 = new cjs.Graphics().p("A52SVMAAAgkpMAztAAAMAAAAkpg");
	var mask_3_graphics_204 = new cjs.Graphics().p("A52SeMAAAgk7MAztAAAMAAAAk7g");
	var mask_3_graphics_205 = new cjs.Graphics().p("A52SnMAAAglNMAztAAAMAAAAlNg");
	var mask_3_graphics_206 = new cjs.Graphics().p("A52SwMAAAglgMAztAAAMAAAAlgg");
	var mask_3_graphics_207 = new cjs.Graphics().p("A52S6MAAAglzMAztAAAMAAAAlzg");
	var mask_3_graphics_208 = new cjs.Graphics().p("A52TDMAAAgmFMAztAAAMAAAAmFg");
	var mask_3_graphics_209 = new cjs.Graphics().p("A52TMMAAAgmXMAztAAAMAAAAmXg");
	var mask_3_graphics_210 = new cjs.Graphics().p("A52TVMAAAgmqMAztAAAMAAAAmqg");
	var mask_3_graphics_211 = new cjs.Graphics().p("A52TeMAAAgm8MAztAAAMAAAAm8g");
	var mask_3_graphics_212 = new cjs.Graphics().p("A52ToMAAAgnPMAztAAAMAAAAnPg");
	var mask_3_graphics_213 = new cjs.Graphics().p("A52TxMAAAgnhMAztAAAMAAAAnhg");
	var mask_3_graphics_214 = new cjs.Graphics().p("A52T6MAAAgnzMAztAAAMAAAAnzg");
	var mask_3_graphics_215 = new cjs.Graphics().p("A52UEMAAAgoHMAztAAAMAAAAoHg");
	var mask_3_graphics_216 = new cjs.Graphics().p("A52UNMAAAgoZMAztAAAMAAAAoZg");
	var mask_3_graphics_217 = new cjs.Graphics().p("A52UWMAAAgorMAztAAAMAAAAorg");
	var mask_3_graphics_218 = new cjs.Graphics().p("A52UfMAAAgo9MAztAAAMAAAAo9g");
	var mask_3_graphics_219 = new cjs.Graphics().p("A52UpMAAAgpRMAztAAAMAAAApRg");
	var mask_3_graphics_220 = new cjs.Graphics().p("A52UyMAAAgpjMAztAAAMAAAApjg");
	var mask_3_graphics_221 = new cjs.Graphics().p("A52U7MAAAgp1MAztAAAMAAAAp1g");
	var mask_3_graphics_222 = new cjs.Graphics().p("A52VEMAAAgqHMAztAAAMAAAAqHg");
	var mask_3_graphics_223 = new cjs.Graphics().p("A52VOMAAAgqbMAztAAAMAAAAqbg");
	var mask_3_graphics_224 = new cjs.Graphics().p("A52VXMAAAgqtMAztAAAMAAAAqtg");
	var mask_3_graphics_225 = new cjs.Graphics().p("A52VgMAAAgq/MAztAAAMAAAAq/g");
	var mask_3_graphics_226 = new cjs.Graphics().p("A52VpMAAAgrRMAztAAAMAAAArRg");
	var mask_3_graphics_227 = new cjs.Graphics().p("A52VyMAAAgrkMAztAAAMAAAArkg");
	var mask_3_graphics_228 = new cjs.Graphics().p("A52V8MAAAgr3MAztAAAMAAAAr3g");
	var mask_3_graphics_229 = new cjs.Graphics().p("A52WFMAAAgsJMAztAAAMAAAAsJg");
	var mask_3_graphics_230 = new cjs.Graphics().p("A52WOMAAAgsbMAztAAAMAAAAsbg");
	var mask_3_graphics_231 = new cjs.Graphics().p("A52WXMAAAgstMAztAAAMAAAAstg");
	var mask_3_graphics_232 = new cjs.Graphics().p("A52WgMAAAgtAMAztAAAMAAAAtAg");
	var mask_3_graphics_233 = new cjs.Graphics().p("A52WqMAAAgtTMAztAAAMAAAAtTg");
	var mask_3_graphics_234 = new cjs.Graphics().p("A52WzMAAAgtlMAztAAAMAAAAtlg");
	var mask_3_graphics_235 = new cjs.Graphics().p("A52W8MAAAgt3MAztAAAMAAAAt3g");
	var mask_3_graphics_236 = new cjs.Graphics().p("A52XGMAAAguLMAztAAAMAAAAuLg");
	var mask_3_graphics_237 = new cjs.Graphics().p("A52XPMAAAgudMAztAAAMAAAAudg");
	var mask_3_graphics_238 = new cjs.Graphics().p("A52XYMAAAguvMAztAAAMAAAAuvg");
	var mask_3_graphics_239 = new cjs.Graphics().p("A52XhMAAAgvBMAztAAAMAAAAvBg");
	var mask_3_graphics_240 = new cjs.Graphics().p("A52XrMAAAgvVMAztAAAMAAAAvVg");
	var mask_3_graphics_241 = new cjs.Graphics().p("A52X0MAAAgvnMAztAAAMAAAAvng");
	var mask_3_graphics_242 = new cjs.Graphics().p("A52X9MAAAgv5MAztAAAMAAAAv5g");
	var mask_3_graphics_243 = new cjs.Graphics().p("A52YGMAAAgwLMAztAAAMAAAAwLg");
	var mask_3_graphics_244 = new cjs.Graphics().p("A52YPMAAAgweMAztAAAMAAAAweg");
	var mask_3_graphics_245 = new cjs.Graphics().p("A52YZMAAAgwxMAztAAAMAAAAwxg");
	var mask_3_graphics_246 = new cjs.Graphics().p("A52YiMAAAgxDMAztAAAMAAAAxDg");
	var mask_3_graphics_247 = new cjs.Graphics().p("A52YrMAAAgxVMAztAAAMAAAAxVg");
	var mask_3_graphics_248 = new cjs.Graphics().p("A52Y0MAAAgxnMAztAAAMAAAAxng");
	var mask_3_graphics_249 = new cjs.Graphics().p("A52Y9MAAAgx6MAztAAAMAAAAx6g");
	var mask_3_graphics_250 = new cjs.Graphics().p("A52ZHMAAAgyNMAztAAAMAAAAyNg");
	var mask_3_graphics_251 = new cjs.Graphics().p("A52ZQMAAAgyfMAztAAAMAAAAyfg");
	var mask_3_graphics_252 = new cjs.Graphics().p("A52ZZMAAAgyxMAztAAAMAAAAyxg");
	var mask_3_graphics_253 = new cjs.Graphics().p("A52ZjMAAAgzFMAztAAAMAAAAzFg");
	var mask_3_graphics_254 = new cjs.Graphics().p("A52ZsMAAAgzXMAztAAAMAAAAzXg");
	var mask_3_graphics_255 = new cjs.Graphics().p("A52Z1MAAAgzpMAztAAAMAAAAzpg");
	var mask_3_graphics_256 = new cjs.Graphics().p("A52Z+MAAAgz7MAztAAAMAAAAz7g");
	var mask_3_graphics_257 = new cjs.Graphics().p("A52aIMAAAg0PMAztAAAMAAAA0Pg");
	var mask_3_graphics_258 = new cjs.Graphics().p("A52aRMAAAg0hMAztAAAMAAAA0hg");
	var mask_3_graphics_259 = new cjs.Graphics().p("A52aaMAAAg0zMAztAAAMAAAA0zg");
	var mask_3_graphics_260 = new cjs.Graphics().p("A52ajMAAAg1FMAztAAAMAAAA1Fg");
	var mask_3_graphics_261 = new cjs.Graphics().p("A52asMAAAg1YMAztAAAMAAAA1Yg");
	var mask_3_graphics_262 = new cjs.Graphics().p("A52a2MAAAg1rMAztAAAMAAAA1rg");
	var mask_3_graphics_263 = new cjs.Graphics().p("A52a/MAAAg19MAztAAAMAAAA19g");
	var mask_3_graphics_264 = new cjs.Graphics().p("A52bIMAAAg2PMAztAAAMAAAA2Pg");
	var mask_3_graphics_265 = new cjs.Graphics().p("A52bRMAAAg2hMAztAAAMAAAA2hg");
	var mask_3_graphics_266 = new cjs.Graphics().p("A52baMAAAg20MAztAAAMAAAA20g");
	var mask_3_graphics_267 = new cjs.Graphics().p("A52bkMAAAg3HMAztAAAMAAAA3Hg");
	var mask_3_graphics_268 = new cjs.Graphics().p("A52btMAAAg3ZMAztAAAMAAAA3Zg");
	var mask_3_graphics_269 = new cjs.Graphics().p("A52b2MAAAg3rMAztAAAMAAAA3rg");
	var mask_3_graphics_270 = new cjs.Graphics().p("A52b/MAAAg3+MAztAAAMAAAA3+g");
	var mask_3_graphics_271 = new cjs.Graphics().p("A52cJMAAAg4RMAztAAAMAAAA4Rg");
	var mask_3_graphics_272 = new cjs.Graphics().p("EgQFAjNMAAAg4jMAztAAAMAAAA4jg");
	var mask_3_graphics_273 = new cjs.Graphics().p("A52cSMAAAg4jMAztAAAMAAAA4jg");
	var mask_3_graphics_274 = new cjs.Graphics().p("EgQFAjNMAAAg4jMAztAAAMAAAA4jg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(115).to({graphics:mask_3_graphics_115,x:228,y:80.3}).wait(1).to({graphics:mask_3_graphics_116,x:290.5,y:125.4}).wait(1).to({graphics:mask_3_graphics_117,x:290.5,y:126.4}).wait(1).to({graphics:mask_3_graphics_118,x:290.5,y:127.3}).wait(1).to({graphics:mask_3_graphics_119,x:290.5,y:128.2}).wait(1).to({graphics:mask_3_graphics_120,x:290.5,y:129.1}).wait(1).to({graphics:mask_3_graphics_121,x:290.5,y:130.1}).wait(1).to({graphics:mask_3_graphics_122,x:290.5,y:131}).wait(1).to({graphics:mask_3_graphics_123,x:290.5,y:131.9}).wait(1).to({graphics:mask_3_graphics_124,x:290.5,y:132.8}).wait(1).to({graphics:mask_3_graphics_125,x:290.5,y:133.7}).wait(1).to({graphics:mask_3_graphics_126,x:290.5,y:134.7}).wait(1).to({graphics:mask_3_graphics_127,x:290.5,y:135.6}).wait(1).to({graphics:mask_3_graphics_128,x:290.5,y:136.5}).wait(1).to({graphics:mask_3_graphics_129,x:290.5,y:137.4}).wait(1).to({graphics:mask_3_graphics_130,x:290.5,y:138.4}).wait(1).to({graphics:mask_3_graphics_131,x:290.5,y:139.3}).wait(1).to({graphics:mask_3_graphics_132,x:290.5,y:140.2}).wait(1).to({graphics:mask_3_graphics_133,x:290.5,y:141.1}).wait(1).to({graphics:mask_3_graphics_134,x:290.5,y:142.1}).wait(1).to({graphics:mask_3_graphics_135,x:290.5,y:143}).wait(1).to({graphics:mask_3_graphics_136,x:290.5,y:143.9}).wait(1).to({graphics:mask_3_graphics_137,x:290.5,y:144.8}).wait(1).to({graphics:mask_3_graphics_138,x:290.5,y:145.8}).wait(1).to({graphics:mask_3_graphics_139,x:290.5,y:146.7}).wait(1).to({graphics:mask_3_graphics_140,x:290.5,y:147.6}).wait(1).to({graphics:mask_3_graphics_141,x:290.5,y:148.5}).wait(1).to({graphics:mask_3_graphics_142,x:290.5,y:149.4}).wait(1).to({graphics:mask_3_graphics_143,x:290.5,y:150.4}).wait(1).to({graphics:mask_3_graphics_144,x:290.5,y:151.3}).wait(1).to({graphics:mask_3_graphics_145,x:290.5,y:152.2}).wait(1).to({graphics:mask_3_graphics_146,x:290.5,y:153.1}).wait(1).to({graphics:mask_3_graphics_147,x:290.5,y:154.1}).wait(1).to({graphics:mask_3_graphics_148,x:290.5,y:155}).wait(1).to({graphics:mask_3_graphics_149,x:290.5,y:155.9}).wait(1).to({graphics:mask_3_graphics_150,x:290.5,y:156.8}).wait(1).to({graphics:mask_3_graphics_151,x:290.5,y:157.8}).wait(1).to({graphics:mask_3_graphics_152,x:290.5,y:158.7}).wait(1).to({graphics:mask_3_graphics_153,x:290.5,y:159.6}).wait(1).to({graphics:mask_3_graphics_154,x:290.5,y:160.5}).wait(1).to({graphics:mask_3_graphics_155,x:290.5,y:161.5}).wait(1).to({graphics:mask_3_graphics_156,x:290.5,y:162.4}).wait(1).to({graphics:mask_3_graphics_157,x:290.5,y:163.3}).wait(1).to({graphics:mask_3_graphics_158,x:290.5,y:164.2}).wait(1).to({graphics:mask_3_graphics_159,x:290.5,y:165.1}).wait(1).to({graphics:mask_3_graphics_160,x:290.5,y:166.1}).wait(1).to({graphics:mask_3_graphics_161,x:290.5,y:167}).wait(1).to({graphics:mask_3_graphics_162,x:290.5,y:167.9}).wait(1).to({graphics:mask_3_graphics_163,x:290.5,y:168.8}).wait(1).to({graphics:mask_3_graphics_164,x:290.5,y:169.8}).wait(1).to({graphics:mask_3_graphics_165,x:290.5,y:170.7}).wait(1).to({graphics:mask_3_graphics_166,x:290.5,y:171.6}).wait(1).to({graphics:mask_3_graphics_167,x:290.5,y:172.5}).wait(1).to({graphics:mask_3_graphics_168,x:290.5,y:173.5}).wait(1).to({graphics:mask_3_graphics_169,x:290.5,y:174.4}).wait(1).to({graphics:mask_3_graphics_170,x:290.5,y:175.3}).wait(1).to({graphics:mask_3_graphics_171,x:290.5,y:176.2}).wait(1).to({graphics:mask_3_graphics_172,x:290.5,y:177.2}).wait(1).to({graphics:mask_3_graphics_173,x:290.5,y:178.1}).wait(1).to({graphics:mask_3_graphics_174,x:290.5,y:179}).wait(1).to({graphics:mask_3_graphics_175,x:290.5,y:179.9}).wait(1).to({graphics:mask_3_graphics_176,x:290.5,y:180.9}).wait(1).to({graphics:mask_3_graphics_177,x:290.5,y:181.8}).wait(1).to({graphics:mask_3_graphics_178,x:290.5,y:182.7}).wait(1).to({graphics:mask_3_graphics_179,x:290.5,y:183.6}).wait(1).to({graphics:mask_3_graphics_180,x:290.5,y:184.5}).wait(1).to({graphics:mask_3_graphics_181,x:290.5,y:185.5}).wait(1).to({graphics:mask_3_graphics_182,x:290.5,y:186.4}).wait(1).to({graphics:mask_3_graphics_183,x:290.5,y:187.3}).wait(1).to({graphics:mask_3_graphics_184,x:290.5,y:188.2}).wait(1).to({graphics:mask_3_graphics_185,x:290.5,y:189.2}).wait(1).to({graphics:mask_3_graphics_186,x:290.5,y:190.1}).wait(1).to({graphics:mask_3_graphics_187,x:290.5,y:191}).wait(1).to({graphics:mask_3_graphics_188,x:290.5,y:191.9}).wait(1).to({graphics:mask_3_graphics_189,x:290.5,y:192.9}).wait(1).to({graphics:mask_3_graphics_190,x:290.5,y:193.8}).wait(1).to({graphics:mask_3_graphics_191,x:290.5,y:194.7}).wait(1).to({graphics:mask_3_graphics_192,x:290.5,y:195.6}).wait(1).to({graphics:mask_3_graphics_193,x:290.5,y:196.6}).wait(1).to({graphics:mask_3_graphics_194,x:290.5,y:197.5}).wait(1).to({graphics:mask_3_graphics_195,x:290.5,y:198.4}).wait(1).to({graphics:mask_3_graphics_196,x:290.5,y:199.3}).wait(1).to({graphics:mask_3_graphics_197,x:290.5,y:200.2}).wait(1).to({graphics:mask_3_graphics_198,x:290.5,y:201.2}).wait(1).to({graphics:mask_3_graphics_199,x:290.5,y:202.1}).wait(1).to({graphics:mask_3_graphics_200,x:290.5,y:203}).wait(1).to({graphics:mask_3_graphics_201,x:290.5,y:203.9}).wait(1).to({graphics:mask_3_graphics_202,x:290.5,y:204.9}).wait(1).to({graphics:mask_3_graphics_203,x:290.5,y:205.8}).wait(1).to({graphics:mask_3_graphics_204,x:290.5,y:206.7}).wait(1).to({graphics:mask_3_graphics_205,x:290.5,y:207.6}).wait(1).to({graphics:mask_3_graphics_206,x:290.5,y:208.6}).wait(1).to({graphics:mask_3_graphics_207,x:290.5,y:209.5}).wait(1).to({graphics:mask_3_graphics_208,x:290.5,y:210.4}).wait(1).to({graphics:mask_3_graphics_209,x:290.5,y:211.3}).wait(1).to({graphics:mask_3_graphics_210,x:290.5,y:212.3}).wait(1).to({graphics:mask_3_graphics_211,x:290.5,y:213.2}).wait(1).to({graphics:mask_3_graphics_212,x:290.5,y:214.1}).wait(1).to({graphics:mask_3_graphics_213,x:290.5,y:215}).wait(1).to({graphics:mask_3_graphics_214,x:290.5,y:215.9}).wait(1).to({graphics:mask_3_graphics_215,x:290.5,y:216.9}).wait(1).to({graphics:mask_3_graphics_216,x:290.5,y:217.8}).wait(1).to({graphics:mask_3_graphics_217,x:290.5,y:218.7}).wait(1).to({graphics:mask_3_graphics_218,x:290.5,y:219.6}).wait(1).to({graphics:mask_3_graphics_219,x:290.5,y:220.6}).wait(1).to({graphics:mask_3_graphics_220,x:290.5,y:221.5}).wait(1).to({graphics:mask_3_graphics_221,x:290.5,y:222.4}).wait(1).to({graphics:mask_3_graphics_222,x:290.5,y:223.3}).wait(1).to({graphics:mask_3_graphics_223,x:290.5,y:224.3}).wait(1).to({graphics:mask_3_graphics_224,x:290.5,y:225.2}).wait(1).to({graphics:mask_3_graphics_225,x:290.5,y:226.1}).wait(1).to({graphics:mask_3_graphics_226,x:290.5,y:227}).wait(1).to({graphics:mask_3_graphics_227,x:290.5,y:228}).wait(1).to({graphics:mask_3_graphics_228,x:290.5,y:228.9}).wait(1).to({graphics:mask_3_graphics_229,x:290.5,y:229.8}).wait(1).to({graphics:mask_3_graphics_230,x:290.5,y:230.7}).wait(1).to({graphics:mask_3_graphics_231,x:290.5,y:231.6}).wait(1).to({graphics:mask_3_graphics_232,x:290.5,y:232.6}).wait(1).to({graphics:mask_3_graphics_233,x:290.5,y:233.5}).wait(1).to({graphics:mask_3_graphics_234,x:290.5,y:234.4}).wait(1).to({graphics:mask_3_graphics_235,x:290.5,y:235.3}).wait(1).to({graphics:mask_3_graphics_236,x:290.5,y:236.3}).wait(1).to({graphics:mask_3_graphics_237,x:290.5,y:237.2}).wait(1).to({graphics:mask_3_graphics_238,x:290.5,y:238.1}).wait(1).to({graphics:mask_3_graphics_239,x:290.5,y:239}).wait(1).to({graphics:mask_3_graphics_240,x:290.5,y:240}).wait(1).to({graphics:mask_3_graphics_241,x:290.5,y:240.9}).wait(1).to({graphics:mask_3_graphics_242,x:290.5,y:241.8}).wait(1).to({graphics:mask_3_graphics_243,x:290.5,y:242.7}).wait(1).to({graphics:mask_3_graphics_244,x:290.5,y:243.7}).wait(1).to({graphics:mask_3_graphics_245,x:290.5,y:244.6}).wait(1).to({graphics:mask_3_graphics_246,x:290.5,y:245.5}).wait(1).to({graphics:mask_3_graphics_247,x:290.5,y:246.4}).wait(1).to({graphics:mask_3_graphics_248,x:290.5,y:247.3}).wait(1).to({graphics:mask_3_graphics_249,x:290.5,y:248.3}).wait(1).to({graphics:mask_3_graphics_250,x:290.5,y:249.2}).wait(1).to({graphics:mask_3_graphics_251,x:290.5,y:250.1}).wait(1).to({graphics:mask_3_graphics_252,x:290.5,y:251}).wait(1).to({graphics:mask_3_graphics_253,x:290.5,y:252}).wait(1).to({graphics:mask_3_graphics_254,x:290.5,y:252.9}).wait(1).to({graphics:mask_3_graphics_255,x:290.5,y:253.8}).wait(1).to({graphics:mask_3_graphics_256,x:290.5,y:254.7}).wait(1).to({graphics:mask_3_graphics_257,x:290.5,y:255.7}).wait(1).to({graphics:mask_3_graphics_258,x:290.5,y:256.6}).wait(1).to({graphics:mask_3_graphics_259,x:290.5,y:257.5}).wait(1).to({graphics:mask_3_graphics_260,x:290.5,y:258.4}).wait(1).to({graphics:mask_3_graphics_261,x:290.5,y:259.4}).wait(1).to({graphics:mask_3_graphics_262,x:290.5,y:260.3}).wait(1).to({graphics:mask_3_graphics_263,x:290.5,y:261.2}).wait(1).to({graphics:mask_3_graphics_264,x:290.5,y:262.1}).wait(1).to({graphics:mask_3_graphics_265,x:290.5,y:263}).wait(1).to({graphics:mask_3_graphics_266,x:290.5,y:264}).wait(1).to({graphics:mask_3_graphics_267,x:290.5,y:264.9}).wait(1).to({graphics:mask_3_graphics_268,x:290.5,y:265.8}).wait(1).to({graphics:mask_3_graphics_269,x:290.5,y:266.7}).wait(1).to({graphics:mask_3_graphics_270,x:290.5,y:267.7}).wait(1).to({graphics:mask_3_graphics_271,x:290.5,y:268.6}).wait(1).to({graphics:mask_3_graphics_272,x:228,y:225.3}).wait(1).to({graphics:mask_3_graphics_273,x:290.5,y:269.5}).wait(1).to({graphics:mask_3_graphics_274,x:228,y:225.3}).wait(312));

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(20,1,1).p("AN64IQi/GZjNGRQjAF6jFGSQjEGTixGGQiyGGhtCiQhtCijhgI");
	this.shape_5.setTransform(245,315.5);
	this.shape_5._off = true;

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(115).to({_off:false},0).wait(471));

	// Layer 13
	this.instance_3 = new lib.ar1("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(228.5,169.8,1,1,-3.7,0,0,-0.7,0.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).wait(577));

	// Layer 6 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_9 = new cjs.Graphics().p("AMMUKIAAjwIOYAAIAADwg");
	var mask_4_graphics_10 = new cjs.Graphics().p("AnLB8IAAj3IOXAAIAAD3g");
	var mask_4_graphics_11 = new cjs.Graphics().p("AnMCBIAAkBIOZAAIAAEBg");
	var mask_4_graphics_12 = new cjs.Graphics().p("AnNCFIAAkJIObAAIAAEJg");
	var mask_4_graphics_13 = new cjs.Graphics().p("AnNCJIAAkRIObAAIAAERg");
	var mask_4_graphics_14 = new cjs.Graphics().p("AnOCNIAAkZIOdAAIAAEZg");
	var mask_4_graphics_15 = new cjs.Graphics().p("AnOCRIAAkhIOeAAIAAEhg");
	var mask_4_graphics_16 = new cjs.Graphics().p("AnPCWIAAkrIOfAAIAAErg");
	var mask_4_graphics_17 = new cjs.Graphics().p("AnPCaIAAkzIOgAAIAAEzg");
	var mask_4_graphics_18 = new cjs.Graphics().p("AnQCeIAAk7IOhAAIAAE7g");
	var mask_4_graphics_19 = new cjs.Graphics().p("AnRCiIAAlDIOjAAIAAFDg");
	var mask_4_graphics_20 = new cjs.Graphics().p("AnRCmIAAlLIOjAAIAAFLg");
	var mask_4_graphics_21 = new cjs.Graphics().p("AnSCrIAAlUIOlAAIAAFUg");
	var mask_4_graphics_22 = new cjs.Graphics().p("AnSCvIAAldIOmAAIAAFdg");
	var mask_4_graphics_23 = new cjs.Graphics().p("AnTCzIAAllIOnAAIAAFlg");
	var mask_4_graphics_24 = new cjs.Graphics().p("AnTC3IAAltIOoAAIAAFtg");
	var mask_4_graphics_25 = new cjs.Graphics().p("AnUC7IAAl1IOpAAIAAF1g");
	var mask_4_graphics_26 = new cjs.Graphics().p("AnVDAIAAl/IOrAAIAAF/g");
	var mask_4_graphics_27 = new cjs.Graphics().p("AnVDEIAAmHIOrAAIAAGHg");
	var mask_4_graphics_28 = new cjs.Graphics().p("AnWDIIAAmPIOtAAIAAGPg");
	var mask_4_graphics_29 = new cjs.Graphics().p("AnWDMIAAmXIOtAAIAAGXg");
	var mask_4_graphics_30 = new cjs.Graphics().p("AnXDQIAAmfIOvAAIAAGfg");
	var mask_4_graphics_31 = new cjs.Graphics().p("AnXDVIAAmpIOwAAIAAGpg");
	var mask_4_graphics_32 = new cjs.Graphics().p("AnYDZIAAmxIOxAAIAAGxg");
	var mask_4_graphics_33 = new cjs.Graphics().p("AnZDdIAAm5IOzAAIAAG5g");
	var mask_4_graphics_34 = new cjs.Graphics().p("AnZDhIAAnBIOzAAIAAHBg");
	var mask_4_graphics_35 = new cjs.Graphics().p("AnaDmIAAnKIO1AAIAAHKg");
	var mask_4_graphics_36 = new cjs.Graphics().p("AnaDqIAAnSIO1AAIAAHSg");
	var mask_4_graphics_37 = new cjs.Graphics().p("AnbDuIAAnbIO3AAIAAHbg");
	var mask_4_graphics_38 = new cjs.Graphics().p("AnbDyIAAnjIO4AAIAAHjg");
	var mask_4_graphics_39 = new cjs.Graphics().p("AncD2IAAnrIO5AAIAAHrg");
	var mask_4_graphics_40 = new cjs.Graphics().p("AndD7IAAn1IO7AAIAAH1g");
	var mask_4_graphics_41 = new cjs.Graphics().p("AndD/IAAn9IO7AAIAAH9g");
	var mask_4_graphics_42 = new cjs.Graphics().p("AneEDIAAoFIO9AAIAAIFg");
	var mask_4_graphics_43 = new cjs.Graphics().p("AneEHIAAoNIO9AAIAAINg");
	var mask_4_graphics_44 = new cjs.Graphics().p("AnfELIAAoVIO/AAIAAIVg");
	var mask_4_graphics_45 = new cjs.Graphics().p("AnfEQIAAofIO/AAIAAIfg");
	var mask_4_graphics_46 = new cjs.Graphics().p("AngEUIAAonIPBAAIAAIng");
	var mask_4_graphics_47 = new cjs.Graphics().p("AnhEYIAAovIPDAAIAAIvg");
	var mask_4_graphics_48 = new cjs.Graphics().p("AnhEcIAAo3IPDAAIAAI3g");
	var mask_4_graphics_49 = new cjs.Graphics().p("AniEgIAAo/IPFAAIAAI/g");
	var mask_4_graphics_50 = new cjs.Graphics().p("AniElIAApIIPFAAIAAJIg");
	var mask_4_graphics_51 = new cjs.Graphics().p("AnjEpIAApRIPHAAIAAJRg");
	var mask_4_graphics_52 = new cjs.Graphics().p("AnjEtIAApZIPHAAIAAJZg");
	var mask_4_graphics_53 = new cjs.Graphics().p("AnlExIAAphIPKAAIAAJhg");
	var mask_4_graphics_54 = new cjs.Graphics().p("AnlE1IAApqIPLAAIAAJqg");
	var mask_4_graphics_55 = new cjs.Graphics().p("AnmE6IAApzIPMAAIAAJzg");
	var mask_4_graphics_56 = new cjs.Graphics().p("AnmE+IAAp7IPNAAIAAJ7g");
	var mask_4_graphics_57 = new cjs.Graphics().p("AnnFCIAAqDIPPAAIAAKDg");
	var mask_4_graphics_58 = new cjs.Graphics().p("AnnFGIAAqLIPPAAIAAKLg");
	var mask_4_graphics_59 = new cjs.Graphics().p("AnoFKIAAqTIPRAAIAAKTg");
	var mask_4_graphics_60 = new cjs.Graphics().p("AnpFPIAAqdIPTAAIAAKdg");
	var mask_4_graphics_61 = new cjs.Graphics().p("AnpFTIAAqlIPTAAIAAKlg");
	var mask_4_graphics_62 = new cjs.Graphics().p("AnqFXIAAqtIPUAAIAAKtg");
	var mask_4_graphics_63 = new cjs.Graphics().p("AnqFbIAAq1IPVAAIAAK1g");
	var mask_4_graphics_64 = new cjs.Graphics().p("AnrFgIAAq/IPXAAIAAK/g");
	var mask_4_graphics_65 = new cjs.Graphics().p("AnrFkIAArHIPXAAIAALHg");
	var mask_4_graphics_66 = new cjs.Graphics().p("AnsFoIAArPIPZAAIAALPg");
	var mask_4_graphics_67 = new cjs.Graphics().p("AntFsIAArXIPbAAIAALXg");
	var mask_4_graphics_68 = new cjs.Graphics().p("AntFwIAArgIPbAAIAALgg");
	var mask_4_graphics_69 = new cjs.Graphics().p("AnuF1IAArpIPcAAIAALpg");
	var mask_4_graphics_70 = new cjs.Graphics().p("AnuF5IAArxIPdAAIAALxg");
	var mask_4_graphics_71 = new cjs.Graphics().p("AnvF9IAAr5IPfAAIAAL5g");
	var mask_4_graphics_72 = new cjs.Graphics().p("AnvGBIAAsBIPfAAIAAMBg");
	var mask_4_graphics_73 = new cjs.Graphics().p("AnwGFIAAsJIPhAAIAAMJg");
	var mask_4_graphics_74 = new cjs.Graphics().p("AnxGKIAAsTIPjAAIAAMTg");
	var mask_4_graphics_75 = new cjs.Graphics().p("AnxGOIAAsbIPjAAIAAMbg");
	var mask_4_graphics_76 = new cjs.Graphics().p("AnyGSIAAsjIPlAAIAAMjg");
	var mask_4_graphics_77 = new cjs.Graphics().p("AnyGWIAAsrIPlAAIAAMrg");
	var mask_4_graphics_78 = new cjs.Graphics().p("AnzGaIAAs0IPnAAIAAM0g");
	var mask_4_graphics_79 = new cjs.Graphics().p("AnzGfIAAs9IPnAAIAAM9g");
	var mask_4_graphics_80 = new cjs.Graphics().p("An0GjIAAtFIPpAAIAANFg");
	var mask_4_graphics_81 = new cjs.Graphics().p("An1GnIAAtNIPrAAIAANNg");
	var mask_4_graphics_82 = new cjs.Graphics().p("An1GrIAAtVIPrAAIAANVg");
	var mask_4_graphics_83 = new cjs.Graphics().p("An2GvIAAteIPtAAIAANeg");
	var mask_4_graphics_84 = new cjs.Graphics().p("An2G0IAAtnIPtAAIAANng");
	var mask_4_graphics_85 = new cjs.Graphics().p("An3G4IAAtvIPvAAIAANvg");
	var mask_4_graphics_86 = new cjs.Graphics().p("An3G8IAAt3IPvAAIAAN3g");
	var mask_4_graphics_87 = new cjs.Graphics().p("An4HAIAAt/IPxAAIAAN/g");
	var mask_4_graphics_88 = new cjs.Graphics().p("An5HEIAAuHIPyAAIAAOHg");
	var mask_4_graphics_89 = new cjs.Graphics().p("An5HJIAAuRIPzAAIAAORg");
	var mask_4_graphics_90 = new cjs.Graphics().p("An6HNIAAuZIP1AAIAAOZg");
	var mask_4_graphics_91 = new cjs.Graphics().p("An6HRIAAuhIP1AAIAAOhg");
	var mask_4_graphics_92 = new cjs.Graphics().p("An7HVIAAupIP3AAIAAOpg");
	var mask_4_graphics_93 = new cjs.Graphics().p("An7HaIAAuzIP3AAIAAOzg");
	var mask_4_graphics_94 = new cjs.Graphics().p("An8HeIAAu7IP5AAIAAO7g");
	var mask_4_graphics_95 = new cjs.Graphics().p("An9HiIAAvDIP6AAIAAPDg");
	var mask_4_graphics_96 = new cjs.Graphics().p("ALaUKIAAvMIP8AAIAAPMg");
	var mask_4_graphics_97 = new cjs.Graphics().p("An9H5IAAvxIP7AAIAAPxg");
	var mask_4_graphics_98 = new cjs.Graphics().p("An9IMIAAwXIP7AAIAAQXg");
	var mask_4_graphics_99 = new cjs.Graphics().p("ALaULIAAw8IP8AAIAAQ8g");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_4_graphics_9,x:170,y:129}).wait(1).to({graphics:mask_4_graphics_10,x:294.2,y:245.6}).wait(1).to({graphics:mask_4_graphics_11,x:294.2,y:245.2}).wait(1).to({graphics:mask_4_graphics_12,x:294.3,y:244.8}).wait(1).to({graphics:mask_4_graphics_13,x:294.3,y:244.3}).wait(1).to({graphics:mask_4_graphics_14,x:294.4,y:243.9}).wait(1).to({graphics:mask_4_graphics_15,x:294.5,y:243.5}).wait(1).to({graphics:mask_4_graphics_16,x:294.5,y:243.1}).wait(1).to({graphics:mask_4_graphics_17,x:294.6,y:242.6}).wait(1).to({graphics:mask_4_graphics_18,x:294.6,y:242.2}).wait(1).to({graphics:mask_4_graphics_19,x:294.7,y:241.8}).wait(1).to({graphics:mask_4_graphics_20,x:294.7,y:241.4}).wait(1).to({graphics:mask_4_graphics_21,x:294.8,y:241}).wait(1).to({graphics:mask_4_graphics_22,x:294.9,y:240.5}).wait(1).to({graphics:mask_4_graphics_23,x:294.9,y:240.1}).wait(1).to({graphics:mask_4_graphics_24,x:295,y:239.7}).wait(1).to({graphics:mask_4_graphics_25,x:295,y:239.3}).wait(1).to({graphics:mask_4_graphics_26,x:295.1,y:238.9}).wait(1).to({graphics:mask_4_graphics_27,x:295.1,y:238.4}).wait(1).to({graphics:mask_4_graphics_28,x:295.2,y:238}).wait(1).to({graphics:mask_4_graphics_29,x:295.3,y:237.6}).wait(1).to({graphics:mask_4_graphics_30,x:295.3,y:237.2}).wait(1).to({graphics:mask_4_graphics_31,x:295.4,y:236.8}).wait(1).to({graphics:mask_4_graphics_32,x:295.4,y:236.3}).wait(1).to({graphics:mask_4_graphics_33,x:295.5,y:235.9}).wait(1).to({graphics:mask_4_graphics_34,x:295.5,y:235.5}).wait(1).to({graphics:mask_4_graphics_35,x:295.6,y:235.1}).wait(1).to({graphics:mask_4_graphics_36,x:295.7,y:234.7}).wait(1).to({graphics:mask_4_graphics_37,x:295.7,y:234.2}).wait(1).to({graphics:mask_4_graphics_38,x:295.8,y:233.8}).wait(1).to({graphics:mask_4_graphics_39,x:295.8,y:233.4}).wait(1).to({graphics:mask_4_graphics_40,x:295.9,y:233}).wait(1).to({graphics:mask_4_graphics_41,x:295.9,y:232.6}).wait(1).to({graphics:mask_4_graphics_42,x:296,y:232.1}).wait(1).to({graphics:mask_4_graphics_43,x:296.1,y:231.7}).wait(1).to({graphics:mask_4_graphics_44,x:296.1,y:231.3}).wait(1).to({graphics:mask_4_graphics_45,x:296.2,y:230.9}).wait(1).to({graphics:mask_4_graphics_46,x:296.2,y:230.4}).wait(1).to({graphics:mask_4_graphics_47,x:296.3,y:230}).wait(1).to({graphics:mask_4_graphics_48,x:296.3,y:229.6}).wait(1).to({graphics:mask_4_graphics_49,x:296.4,y:229.2}).wait(1).to({graphics:mask_4_graphics_50,x:296.5,y:228.8}).wait(1).to({graphics:mask_4_graphics_51,x:296.5,y:228.3}).wait(1).to({graphics:mask_4_graphics_52,x:296.6,y:227.9}).wait(1).to({graphics:mask_4_graphics_53,x:296.6,y:227.5}).wait(1).to({graphics:mask_4_graphics_54,x:296.7,y:227.1}).wait(1).to({graphics:mask_4_graphics_55,x:296.7,y:226.7}).wait(1).to({graphics:mask_4_graphics_56,x:296.8,y:226.3}).wait(1).to({graphics:mask_4_graphics_57,x:296.8,y:225.8}).wait(1).to({graphics:mask_4_graphics_58,x:296.9,y:225.4}).wait(1).to({graphics:mask_4_graphics_59,x:296.9,y:225}).wait(1).to({graphics:mask_4_graphics_60,x:297,y:224.6}).wait(1).to({graphics:mask_4_graphics_61,x:297.1,y:224.2}).wait(1).to({graphics:mask_4_graphics_62,x:297.1,y:223.7}).wait(1).to({graphics:mask_4_graphics_63,x:297.2,y:223.3}).wait(1).to({graphics:mask_4_graphics_64,x:297.2,y:222.9}).wait(1).to({graphics:mask_4_graphics_65,x:297.3,y:222.5}).wait(1).to({graphics:mask_4_graphics_66,x:297.3,y:222.1}).wait(1).to({graphics:mask_4_graphics_67,x:297.4,y:221.6}).wait(1).to({graphics:mask_4_graphics_68,x:297.5,y:221.2}).wait(1).to({graphics:mask_4_graphics_69,x:297.5,y:220.8}).wait(1).to({graphics:mask_4_graphics_70,x:297.6,y:220.4}).wait(1).to({graphics:mask_4_graphics_71,x:297.6,y:220}).wait(1).to({graphics:mask_4_graphics_72,x:297.7,y:219.5}).wait(1).to({graphics:mask_4_graphics_73,x:297.7,y:219.1}).wait(1).to({graphics:mask_4_graphics_74,x:297.8,y:218.7}).wait(1).to({graphics:mask_4_graphics_75,x:297.9,y:218.3}).wait(1).to({graphics:mask_4_graphics_76,x:297.9,y:217.9}).wait(1).to({graphics:mask_4_graphics_77,x:298,y:217.4}).wait(1).to({graphics:mask_4_graphics_78,x:298,y:217}).wait(1).to({graphics:mask_4_graphics_79,x:298.1,y:216.6}).wait(1).to({graphics:mask_4_graphics_80,x:298.1,y:216.2}).wait(1).to({graphics:mask_4_graphics_81,x:298.2,y:215.7}).wait(1).to({graphics:mask_4_graphics_82,x:298.3,y:215.3}).wait(1).to({graphics:mask_4_graphics_83,x:298.3,y:214.9}).wait(1).to({graphics:mask_4_graphics_84,x:298.4,y:214.5}).wait(1).to({graphics:mask_4_graphics_85,x:298.4,y:214.1}).wait(1).to({graphics:mask_4_graphics_86,x:298.5,y:213.6}).wait(1).to({graphics:mask_4_graphics_87,x:298.5,y:213.2}).wait(1).to({graphics:mask_4_graphics_88,x:298.6,y:212.8}).wait(1).to({graphics:mask_4_graphics_89,x:298.7,y:212.4}).wait(1).to({graphics:mask_4_graphics_90,x:298.7,y:212}).wait(1).to({graphics:mask_4_graphics_91,x:298.8,y:211.5}).wait(1).to({graphics:mask_4_graphics_92,x:298.8,y:211.1}).wait(1).to({graphics:mask_4_graphics_93,x:298.9,y:210.7}).wait(1).to({graphics:mask_4_graphics_94,x:298.9,y:210.3}).wait(1).to({graphics:mask_4_graphics_95,x:299,y:209.9}).wait(1).to({graphics:mask_4_graphics_96,x:175,y:129}).wait(1).to({graphics:mask_4_graphics_97,x:299.1,y:207.6}).wait(1).to({graphics:mask_4_graphics_98,x:299.1,y:205.8}).wait(1).to({graphics:mask_4_graphics_99,x:175,y:129.1}).wait(487));

	// Layer 2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(20,1,1).p("Ak+F5QF9lWEAmb");
	this.shape_6.setTransform(299.6,201.4);
	this.shape_6._off = true;

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(9).to({_off:false},0).wait(577));

	// Letter
	this.instance_4 = new lib.j("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(275,275);
	this.instance_4.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(586));

	// Background
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_7.setTransform(275,275,3.373,2.543);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_8.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).wait(586));

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