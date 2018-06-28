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
	this.shape.graphics.f("#FFFFFF").s().p("A9kMhQhjhJAAiSQAAizDKmPIAAgcQh4AAAAh4QAAgvECkuICejQQCBibA+AAQBsAAAABvQAAAykaJfQkZIlAABnQAABABkAAQEWAAMMsWIAjgdQCeieA7hvQCXk0AbgjQAvg7A3AAQB3AAAAB1QAAA+kmHpQkrH9AACkQAACKCkAAQGcAANg0DQBTiDA3AAQBGAAAyChQAmDeA7CNQBgDiCWAAQBbAAB1hzQByhyAsAAQB+AAAAB4QAAB7jNB3Qi1Bqh1AAQhnAAhYg4QhJgyhBhZQhbiHhDjrQi7Erj6EWQjwENkWDfQijCbj5AAQiwAAhvheQh7hjgBizIAVihQpwIhkWAAQiSAAhZg+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-199.2,-86.2,398.4,172.6);


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
	this.instance.setTransform(-46.9,23.9,1,1,9.7,0,0,-0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:-139.2,guide:{path:[-47,24,-55.6,83.2,-26.7,58.8,-15.2,49.1,-5.3,37.6], orient:'auto'}},75).to({scaleX:1,scaleY:1,rotation:-151.9,guide:{path:[-5.1,37.6,10,20.1,21.3,-1.4,39.9,-37,49.4,-50.5], orient:'auto'}},59).wait(1));

	// Layer 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_78 = new cjs.Graphics().p("AkwDIIAAh4IJhAAIAAB4g");
	var mask_graphics_79 = new cjs.Graphics().p("AkwBDIAAiFIJhAAIAACFg");
	var mask_graphics_80 = new cjs.Graphics().p("AkwBKIAAiTIJhAAIAACTg");
	var mask_graphics_81 = new cjs.Graphics().p("AkwBRIAAihIJhAAIAAChg");
	var mask_graphics_82 = new cjs.Graphics().p("AkwBZIAAixIJhAAIAACxg");
	var mask_graphics_83 = new cjs.Graphics().p("AkwBgIAAi+IJhAAIAAC+g");
	var mask_graphics_84 = new cjs.Graphics().p("AkwBnIAAjNIJhAAIAADNg");
	var mask_graphics_85 = new cjs.Graphics().p("AkwBuIAAjbIJhAAIAADbg");
	var mask_graphics_86 = new cjs.Graphics().p("AkwB1IAAjpIJhAAIAADpg");
	var mask_graphics_87 = new cjs.Graphics().p("AkwB8IAAj3IJhAAIAAD3g");
	var mask_graphics_88 = new cjs.Graphics().p("AkwCDIAAkFIJhAAIAAEFg");
	var mask_graphics_89 = new cjs.Graphics().p("AkwCKIAAkTIJhAAIAAETg");
	var mask_graphics_90 = new cjs.Graphics().p("AkwCRIAAkhIJhAAIAAEhg");
	var mask_graphics_91 = new cjs.Graphics().p("AkwCZIAAkxIJhAAIAAExg");
	var mask_graphics_92 = new cjs.Graphics().p("AkwCgIAAk/IJhAAIAAE/g");
	var mask_graphics_93 = new cjs.Graphics().p("AkwCnIAAlNIJhAAIAAFNg");
	var mask_graphics_94 = new cjs.Graphics().p("AkwCuIAAlbIJhAAIAAFbg");
	var mask_graphics_95 = new cjs.Graphics().p("AkwC1IAAlpIJhAAIAAFpg");
	var mask_graphics_96 = new cjs.Graphics().p("AkwC8IAAl3IJhAAIAAF3g");
	var mask_graphics_97 = new cjs.Graphics().p("AkwDDIAAmFIJhAAIAAGFg");
	var mask_graphics_98 = new cjs.Graphics().p("AkwDKIAAmTIJhAAIAAGTg");
	var mask_graphics_99 = new cjs.Graphics().p("AkwDRIAAmhIJhAAIAAGhg");
	var mask_graphics_100 = new cjs.Graphics().p("AkwDZIAAmwIJhAAIAAGwg");
	var mask_graphics_101 = new cjs.Graphics().p("AkwDgIAAm/IJhAAIAAG/g");
	var mask_graphics_102 = new cjs.Graphics().p("AkwDnIAAnNIJhAAIAAHNg");
	var mask_graphics_103 = new cjs.Graphics().p("AkwDuIAAnbIJhAAIAAHbg");
	var mask_graphics_104 = new cjs.Graphics().p("AkwD1IAAnpIJhAAIAAHpg");
	var mask_graphics_105 = new cjs.Graphics().p("AkwD8IAAn3IJhAAIAAH3g");
	var mask_graphics_106 = new cjs.Graphics().p("AkwEDIAAoFIJhAAIAAIFg");
	var mask_graphics_107 = new cjs.Graphics().p("AkwEKIAAoTIJhAAIAAITg");
	var mask_graphics_108 = new cjs.Graphics().p("AkwERIAAohIJhAAIAAIhg");
	var mask_graphics_109 = new cjs.Graphics().p("AkwEYIAAovIJhAAIAAIvg");
	var mask_graphics_110 = new cjs.Graphics().p("AkwEfIAAo9IJhAAIAAI9g");
	var mask_graphics_111 = new cjs.Graphics().p("AkwEmIAApLIJhAAIAAJLg");
	var mask_graphics_112 = new cjs.Graphics().p("AkwEtIAApaIJhAAIAAJag");
	var mask_graphics_113 = new cjs.Graphics().p("AkwE1IAAppIJhAAIAAJpg");
	var mask_graphics_114 = new cjs.Graphics().p("AkwE8IAAp3IJhAAIAAJ3g");
	var mask_graphics_115 = new cjs.Graphics().p("AkwFDIAAqFIJhAAIAAKFg");
	var mask_graphics_116 = new cjs.Graphics().p("AkwFKIAAqTIJhAAIAAKTg");
	var mask_graphics_117 = new cjs.Graphics().p("AkwFRIAAqhIJhAAIAAKhg");
	var mask_graphics_118 = new cjs.Graphics().p("AkwFYIAAqvIJhAAIAAKvg");
	var mask_graphics_119 = new cjs.Graphics().p("AkwFfIAAq9IJhAAIAAK9g");
	var mask_graphics_120 = new cjs.Graphics().p("AkwFmIAArLIJhAAIAALLg");
	var mask_graphics_121 = new cjs.Graphics().p("AkwFtIAAraIJhAAIAALag");
	var mask_graphics_122 = new cjs.Graphics().p("AkwF1IAArpIJhAAIAALpg");
	var mask_graphics_123 = new cjs.Graphics().p("AkwF8IAAr3IJhAAIAAL3g");
	var mask_graphics_124 = new cjs.Graphics().p("AkwGDIAAsFIJhAAIAAMFg");
	var mask_graphics_125 = new cjs.Graphics().p("AkwGKIAAsTIJhAAIAAMTg");
	var mask_graphics_126 = new cjs.Graphics().p("AkwGRIAAshIJhAAIAAMhg");
	var mask_graphics_127 = new cjs.Graphics().p("AkwGYIAAsvIJhAAIAAMvg");
	var mask_graphics_128 = new cjs.Graphics().p("AkwGfIAAs9IJhAAIAAM9g");
	var mask_graphics_129 = new cjs.Graphics().p("AkwGmIAAtMIJhAAIAANMg");
	var mask_graphics_130 = new cjs.Graphics().p("AkwGtIAAtZIJhAAIAANZg");
	var mask_graphics_131 = new cjs.Graphics().p("AkwG1IAAtpIJhAAIAANpg");
	var mask_graphics_132 = new cjs.Graphics().p("AkwG8IAAt3IJhAAIAAN3g");
	var mask_graphics_133 = new cjs.Graphics().p("AkwHVIAAupIJhAAIAAOpg");
	var mask_graphics_134 = new cjs.Graphics().p("AkwHvIAAvdIJhAAIAAPdg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(78).to({graphics:mask_graphics_78,x:28.3,y:20}).wait(1).to({graphics:mask_graphics_79,x:28.3,y:33.3}).wait(1).to({graphics:mask_graphics_80,x:28.3,y:32.5}).wait(1).to({graphics:mask_graphics_81,x:28.3,y:31.8}).wait(1).to({graphics:mask_graphics_82,x:28.3,y:31.1}).wait(1).to({graphics:mask_graphics_83,x:28.3,y:30.4}).wait(1).to({graphics:mask_graphics_84,x:28.3,y:29.7}).wait(1).to({graphics:mask_graphics_85,x:28.3,y:29}).wait(1).to({graphics:mask_graphics_86,x:28.3,y:28.3}).wait(1).to({graphics:mask_graphics_87,x:28.3,y:27.6}).wait(1).to({graphics:mask_graphics_88,x:28.3,y:26.9}).wait(1).to({graphics:mask_graphics_89,x:28.3,y:26.1}).wait(1).to({graphics:mask_graphics_90,x:28.3,y:25.4}).wait(1).to({graphics:mask_graphics_91,x:28.3,y:24.7}).wait(1).to({graphics:mask_graphics_92,x:28.3,y:24}).wait(1).to({graphics:mask_graphics_93,x:28.3,y:23.3}).wait(1).to({graphics:mask_graphics_94,x:28.3,y:22.6}).wait(1).to({graphics:mask_graphics_95,x:28.3,y:21.9}).wait(1).to({graphics:mask_graphics_96,x:28.3,y:21.2}).wait(1).to({graphics:mask_graphics_97,x:28.3,y:20.5}).wait(1).to({graphics:mask_graphics_98,x:28.3,y:19.7}).wait(1).to({graphics:mask_graphics_99,x:28.3,y:19}).wait(1).to({graphics:mask_graphics_100,x:28.3,y:18.3}).wait(1).to({graphics:mask_graphics_101,x:28.3,y:17.6}).wait(1).to({graphics:mask_graphics_102,x:28.3,y:16.9}).wait(1).to({graphics:mask_graphics_103,x:28.3,y:16.2}).wait(1).to({graphics:mask_graphics_104,x:28.3,y:15.5}).wait(1).to({graphics:mask_graphics_105,x:28.3,y:14.8}).wait(1).to({graphics:mask_graphics_106,x:28.3,y:14}).wait(1).to({graphics:mask_graphics_107,x:28.3,y:13.3}).wait(1).to({graphics:mask_graphics_108,x:28.3,y:12.6}).wait(1).to({graphics:mask_graphics_109,x:28.3,y:11.9}).wait(1).to({graphics:mask_graphics_110,x:28.3,y:11.2}).wait(1).to({graphics:mask_graphics_111,x:28.3,y:10.5}).wait(1).to({graphics:mask_graphics_112,x:28.3,y:9.8}).wait(1).to({graphics:mask_graphics_113,x:28.3,y:9}).wait(1).to({graphics:mask_graphics_114,x:28.3,y:8.3}).wait(1).to({graphics:mask_graphics_115,x:28.3,y:7.6}).wait(1).to({graphics:mask_graphics_116,x:28.3,y:6.9}).wait(1).to({graphics:mask_graphics_117,x:28.3,y:6.2}).wait(1).to({graphics:mask_graphics_118,x:28.3,y:5.5}).wait(1).to({graphics:mask_graphics_119,x:28.3,y:4.8}).wait(1).to({graphics:mask_graphics_120,x:28.3,y:4.1}).wait(1).to({graphics:mask_graphics_121,x:28.3,y:3.4}).wait(1).to({graphics:mask_graphics_122,x:28.3,y:2.6}).wait(1).to({graphics:mask_graphics_123,x:28.3,y:1.9}).wait(1).to({graphics:mask_graphics_124,x:28.3,y:1.2}).wait(1).to({graphics:mask_graphics_125,x:28.3,y:0.5}).wait(1).to({graphics:mask_graphics_126,x:28.3,y:-0.2}).wait(1).to({graphics:mask_graphics_127,x:28.3,y:-0.9}).wait(1).to({graphics:mask_graphics_128,x:28.3,y:-1.6}).wait(1).to({graphics:mask_graphics_129,x:28.3,y:-2.3}).wait(1).to({graphics:mask_graphics_130,x:28.3,y:-3}).wait(1).to({graphics:mask_graphics_131,x:28.3,y:-3.8}).wait(1).to({graphics:mask_graphics_132,x:28.3,y:-4.5}).wait(1).to({graphics:mask_graphics_133,x:28.3,y:-7}).wait(1).to({graphics:mask_graphics_134,x:28.3,y:-9.6}).wait(1));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AnOCVQhpJJErjSQEqjTHMt8");
	this.shape.setTransform(-0.9,8);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(78).to({_off:false},0).wait(57));

	// Layer 3 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("Ao+goQBmj6D6hoQD4hpD6BnQD1BkBpDxIyyH3Qhjj0Blj0g");
	var mask_1_graphics_1 = new cjs.Graphics().p("ApCgdQBej9D1hyQD0hxD+BdQD4BcByDtIyfIiQhrjwBbj4g");
	var mask_1_graphics_2 = new cjs.Graphics().p("ApEgRQBUkBDxh6QDxh6EABUQD7BSB6DpIyKJNQhzjtBSj6g");
	var mask_1_graphics_3 = new cjs.Graphics().p("ApGgFQBLkEDtiDQDsiCEDBKQD+BJCDDlIx1J2Qh8joBJj9g");
	var mask_1_graphics_4 = new cjs.Graphics().p("ApGAGQBCkFDniLQDoiLEFBBQEBBACKDfIxcKfQiEjjA/kBg");
	var mask_1_graphics_5 = new cjs.Graphics().p("ApFATQA4kHDjiUQDiiTEHA3QEDA3CTDaIxELHQiMjeA2kDg");
	var mask_1_graphics_6 = new cjs.Graphics().p("ApCAgQAukJDdicQDdibEIAuQEFAtCbDVIwpLuQiUjZAtkFg");
	var mask_1_graphics_7 = new cjs.Graphics().p("Ao/AuQAlkLDXijQDXikEKAlQEGAjCiDPIwMMUQicjTAjkGg");
	var mask_1_graphics_8 = new cjs.Graphics().p("Ao6A7QAbkLDRirQDRirELAaQEHAaCqDJIvwM5QijjNAakIg");
	var mask_1_graphics_9 = new cjs.Graphics().p("Ao0BKQARkNDKiyQDLizEMARQEIARCxDCIvRNdQirjHARkIg");
	var mask_1_graphics_10 = new cjs.Graphics().p("AotBYQAHkMDEi6QDEi6ENAHQEIAHC4C8IuxOAQiyjBAHkJg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AolBnQgCkMC9jBQC9jBEMgCQEJgDC+C1IuQOhQi4i6gDkJg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AocB3QgMkNC2jHQC2jIENgMQEIgMDECuIttPCQi/i0gNkIg");
	var mask_1_graphics_13 = new cjs.Graphics().p("AoRCGQgWkLCvjOQCujOEMgWQEIgWDKCnItJPhQjGitgWkIg");
	var mask_1_graphics_14 = new cjs.Graphics().p("AoFCWQggkLCnjUQCnjTELggQEHgfDQCfIslP+QjMilgfkHg");
	var mask_1_graphics_15 = new cjs.Graphics().p("An4CnQgqkKCgjaQCfjaEJgpQEGgpDWCYIsAQbQjRiegpkFg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AnqC3QgzkICXjfQCXjgEIgzQEDgyDcCQIrZQ2QjXiXgykDg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AnhDCQg5kHCSjjQCSjjEHg5QECg4DfCLIrARGQjbiRg4kCg");
	var mask_1_graphics_18 = new cjs.Graphics().p("AnXDMQg/kFCNjmQCMjmEFhAQEBg+DjCGIqnRWQjeiMg+kBg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AnODXQhFkECHjpQCHjqEFhFQD+hEDlCBIqMRlQjhiHhEj/g");
	var mask_1_graphics_20 = new cjs.Graphics().p("AnKDiQhLkCCCjtQCCjsEDhMQD8hKDoB8IpyR0QjkiBhKj+g");
	var mask_1_graphics_21 = new cjs.Graphics().p("AnFDtQhSkBB9jvQB8jwEBhRQD7hQDrB2IpXSDQjoh8hPj8g");
	var mask_1_graphics_22 = new cjs.Graphics().p("AnBD4QhXj/B3jyQB3jyD/hYQD5hVDuBwIo9SRQjqh3hWj6g");
	var mask_1_graphics_23 = new cjs.Graphics().p("Am7EDQhdj+Bxj0QBxj1D9hdQD3hbDwBqIohSeQjthyhbj3g");
	var mask_1_graphics_24 = new cjs.Graphics().p("Am2ENQhjj7Bsj2QBrj4D7hjQD1hhDzBlIoGSqQjwhshhj2g");
	var mask_1_graphics_25 = new cjs.Graphics().p("AmwEYQhpj4Bmj5QBmj7D5hoQDyhnD1BfInqS2Qjyhmhnj0g");
	var mask_1_graphics_26 = new cjs.Graphics().p("AmqEjQhuj2Bgj7QBgj9D2huQDwhtD3BaInOTBQj0hhhtjxg");
	var mask_1_graphics_27 = new cjs.Graphics().p("AmjEuQh0jzBaj+QBaj+Dzh1QDuhyD5BVImyTLQj2hbhyjvg");
	var mask_1_graphics_28 = new cjs.Graphics().p("AmdE5Qh5jxBUj/QBUkBDxh6QDrh3D7BOImWTWQj4hWh4jsg");
	var mask_1_graphics_29 = new cjs.Graphics().p("AmWFEQh/juBOkBQBPkDDuh/QDoh9D8BJIl4TeQj7hQh9jpg");
	var mask_1_graphics_30 = new cjs.Graphics().p("AmOFPQiFjrBIkDQBJkEDqiFQDmiCD+BCIlcTnQj8hKiCjmg");
	var mask_1_graphics_31 = new cjs.Graphics().p("AmHFaQiKjoBCkFQBDkGDniKQDjiHD/A8Ik+TvQj+hEiIjjg");
	var mask_1_graphics_32 = new cjs.Graphics().p("Al/FlQiPjlA8kGQA8kHDliQQDfiNEBA3IkjT2Qj+g+iNjgg");
	var mask_1_graphics_33 = new cjs.Graphics().p("Al2FwQiVjhA2kIQA2kJDhiVQDciRECAwIkFT9QkAg4iRjdg");
	var mask_1_graphics_34 = new cjs.Graphics().p("AluF7QiajeAwkJQAwkKDeiaQDYiXEDArIjnUCQkBgyiXjZg");
	var mask_1_graphics_35 = new cjs.Graphics().p("AllGGQifjbApkKQAqkKDaifQDWicEDAkIjJUIQkCgticjVg");
	var mask_1_graphics_36 = new cjs.Graphics().p("AldGRQikjXAkkLQAjkMDXikQDSihEEAfIisUMQkDgnihjRg");
	var mask_1_graphics_37 = new cjs.Graphics().p("AlTGbQipjSAdkMQAdkMDTipQDOimEFAYIiNUQQkEghimjOg");
	var mask_1_graphics_38 = new cjs.Graphics().p("AlJGmQiujOAXkNQAXkNDOiuQDLiqEFASIhvUTQkFgbiqjKg");
	var mask_1_graphics_39 = new cjs.Graphics().p("Ak/GxQizjLARkMQAQkODLiyQDGiwEGANIhRUUQkFgUivjGg");
	var mask_1_graphics_40 = new cjs.Graphics().p("Ak1G8Qi3jHAKkMQAKkODGi4QDDi0EFAHIgyUWQkFgOi0jCg");
	var mask_1_graphics_41 = new cjs.Graphics().p("AkqHGQi8jCAEkNQAEkODBi8QC+i4EGAAIgTUXQkGgIi4i+g");
	var mask_1_graphics_42 = new cjs.Graphics().p("AkgHRQjAi+gCkOQgCkNC9jAQC5i9EGgGIALUXQkGgCi9i5g");
	var mask_1_graphics_43 = new cjs.Graphics().p("AkUHbQjFi5gJkOQgIkNC4jEQC1jBEGgNIApUWIgMABQj+AAi8ixg");
	var mask_1_graphics_44 = new cjs.Graphics().p("AkJHlQjJi0gPkOQgPkNC0jJQCxjFEFgSIBIUUIgeABQjzAAi6img");
	var mask_1_graphics_45 = new cjs.Graphics().p("Aj9HuQjOivgVkNQgVkNCvjNQCsjJEFgYIBmUSIguABQjpAAi3icg");
	var mask_1_graphics_46 = new cjs.Graphics().p("AjxH3QjSirgbkMQgckMCrjRQCnjNEEgfICEUQQgfADgfAAQjfAAi0iTg");
	var mask_1_graphics_47 = new cjs.Graphics().p("AjlH/QjVilgikMQgikLCljVQCjjREDglICjUMQgoAFgmAAQjWAAixiKg");
	var mask_1_graphics_48 = new cjs.Graphics().p("AjZIHQjZiggokLQgokKCgjZQCejVECgrIDBUIQgwAHguAAQjMAAiuiBg");
	var mask_1_graphics_49 = new cjs.Graphics().p("AjMIPQjdicgukKQgukJCbjcQCYjZEBgwIDfUDQg3AIg1AAQjEAAiqh3g");
	var mask_1_graphics_50 = new cjs.Graphics().p("AjAIWQjgiXg0kIQg1kICWjgQCTjcEAg3ID+T9Qg/AMg9AAQi7AAinhvg");
	var mask_1_graphics_51 = new cjs.Graphics().p("AizIcQjjiRg7kHQg7kHCRjjQCOjfD/g9IEbT3QhHAOhDAAQi0AAiihng");
	var mask_1_graphics_52 = new cjs.Graphics().p("AimIiQjmiLhBkGQhBkFCLjnQCJjjD9hCIE5TvQhOAShLAAQirAAiehfg");
	var mask_1_graphics_53 = new cjs.Graphics().p("AiYIoQjqiGhHkFQhHkDCGjqQCDjmD9hIIFVToQhVAVhSAAQikAAiYhXg");
	var mask_1_graphics_54 = new cjs.Graphics().p("AiLItQjtiBhNkCQhNkCCBjtQB9jpD7hOIFyTfQhbAahZAAQicAAiUhQg");
	var mask_1_graphics_55 = new cjs.Graphics().p("Ah9IyQjwh7hTkBQhTkAB7jwQB4jrD5hVIGPTXQhiAehgAAQiVAAiOhJg");
	var mask_1_graphics_56 = new cjs.Graphics().p("AhvI2Qjzh2hZj+QhZj+B1jzQBzjuD2haIGtTMQhpAjhmAAQiOAAiJhCg");
	var mask_1_graphics_57 = new cjs.Graphics().p("AhhI5Qj2hvhfj9Qhfj7Bwj2QBtjxD1hgIHJTDQhvAohuAAQiHAAiDg9g");
	var mask_1_graphics_58 = new cjs.Graphics().p("AhEJAQj6hkhsj3Qhrj3Bkj7QBhj2DvhrIIFSqQh8Azh8AAQh4AAh4gvg");
	var mask_1_graphics_59 = new cjs.Graphics().p("AgmJEQj/hXh3jyQh3jzBXj+QBVj6Dqh3II+SPQiHBAiMAAQhpAAhrgkg");
	var mask_1_graphics_60 = new cjs.Graphics().p("AgHJGQkEhLiCjsQiDjsBKkCQBJj+DkiDIJ2RzQiSBOibAAQhaAAhdgbg");
	var mask_1_graphics_61 = new cjs.Graphics().p("AALJGQkGg+iOjlQiOjmA9kFQA9kCDdiNIKtRSQibBdisAAQhMAAhPgSg");
	var mask_1_graphics_62 = new cjs.Graphics().p("AAcJEQkIgxiZjeQiajeAxkJQAwkEDWiYILjQvQilBui9AAQg9AAhAgLg");
	var mask_1_graphics_63 = new cjs.Graphics().p("AAvI/QkLgkikjWQikjWAkkLQAjkGDOijIMXQKQitCBjPAAQguAAgvgHg");
	var mask_1_graphics_64 = new cjs.Graphics().p("ABCI5QkMgXivjOQiujOAWkMQAWkIDHisINIPiQizCTjjAAQgeAAgegCg");
	var mask_1_graphics_65 = new cjs.Graphics().p("ABVIwQkNgKi4jFQi4jFAJkNQAJkIC+i2IN4O3Qi5Coj5AAIgZAAg");
	var mask_1_graphics_66 = new cjs.Graphics().p("AllFtQjCi9gEkMQgEkJC1i/IOmOLQi6C6kIAEIgLAAQkGAAi+i4g");
	var mask_1_graphics_67 = new cjs.Graphics().p("AlZF2QjKiygRkMQgRkICrjIIPRNcQixDDkHARIgvABQjwAAi5ijg");
	var mask_1_graphics_68 = new cjs.Graphics().p("AlKF+QjUiogekLQgekHChjQIP7MrQinDMkHAdQgpAFgnAAQjbAAiziPg");
	var mask_1_graphics_69 = new cjs.Graphics().p("Ak7GFQjbiegrkKQgrkFCXjXIQhL4QidDTkFArQg5AJg3AAQjJAAish7g");
	var mask_1_graphics_70 = new cjs.Graphics().p("AkpGJQjjiTg4kHQg4kDCMjeIRFLEQiSDakDA4QhJAPhGAAQi3AAijhqg");
	var mask_1_graphics_71 = new cjs.Graphics().p("AkXGMQjpiIhFkEQhEj/CAjmIRnKOQiHDhkABEQhYAYhVAAQimAAibhag");
	var mask_1_graphics_72 = new cjs.Graphics().p("AkCGNQjwh8hSkBQhRj7B2jsISFJWQh8Doj8BQQhmAhhkAAQiWAAiQhLg");
	var mask_1_graphics_73 = new cjs.Graphics().p("AjtGMQj2hwhej9Qhdj3BqjwIShIcQhwDuj4BcQh0ArhyAAQiGAAiGg9g");
	var mask_1_graphics_74 = new cjs.Graphics().p("AjWGKQj7hkhrj4QhojyBdj2IS7HiQhlDzjzBpQiAA3iBAAQh4AAh5gxg");
	var mask_1_graphics_75 = new cjs.Graphics().p("Ai+GGQkAhXh2jzQh1jtBSj6ITRGnQhZD3juB0QiLBFiQAAQhpAAhtgmg");
	var mask_1_graphics_76 = new cjs.Graphics().p("AilGMQkDhLiDjtQiAjmBGj+ITkFqQhND6jnCAQiXBTifAAQhbAAhfgbg");
	var mask_1_graphics_77 = new cjs.Graphics().p("AiKGUQkHg+iOjmQiLjgA4kBIT1EsQhAD+jhCLQigBjiwAAQhMAAhQgTg");
	var mask_1_graphics_78 = new cjs.Graphics().p("AhvGaQkKgyiZjeQiWjZAtkEIUBDuQgzEBjaCWQipB0jBAAQg9AAhBgMg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:-35.8,y:0.7}).wait(1).to({graphics:mask_1_graphics_1,x:-36.2,y:1.8}).wait(1).to({graphics:mask_1_graphics_2,x:-36.7,y:2.9}).wait(1).to({graphics:mask_1_graphics_3,x:-37.2,y:4}).wait(1).to({graphics:mask_1_graphics_4,x:-37.8,y:5.1}).wait(1).to({graphics:mask_1_graphics_5,x:-38.4,y:6.1}).wait(1).to({graphics:mask_1_graphics_6,x:-39,y:7.1}).wait(1).to({graphics:mask_1_graphics_7,x:-39.6,y:8.1}).wait(1).to({graphics:mask_1_graphics_8,x:-40.3,y:9.1}).wait(1).to({graphics:mask_1_graphics_9,x:-41,y:10}).wait(1).to({graphics:mask_1_graphics_10,x:-41.8,y:10.9}).wait(1).to({graphics:mask_1_graphics_11,x:-42.6,y:11.8}).wait(1).to({graphics:mask_1_graphics_12,x:-43.4,y:12.7}).wait(1).to({graphics:mask_1_graphics_13,x:-44.2,y:13.4}).wait(1).to({graphics:mask_1_graphics_14,x:-45.1,y:14.2}).wait(1).to({graphics:mask_1_graphics_15,x:-46,y:14.9}).wait(1).to({graphics:mask_1_graphics_16,x:-47,y:15.6}).wait(1).to({graphics:mask_1_graphics_17,x:-47.6,y:16}).wait(1).to({graphics:mask_1_graphics_18,x:-48.2,y:16.4}).wait(1).to({graphics:mask_1_graphics_19,x:-48.7,y:16.7}).wait(1).to({graphics:mask_1_graphics_20,x:-48.7,y:17.1}).wait(1).to({graphics:mask_1_graphics_21,x:-48.6,y:17.4}).wait(1).to({graphics:mask_1_graphics_22,x:-48.6,y:17.8}).wait(1).to({graphics:mask_1_graphics_23,x:-48.6,y:18.1}).wait(1).to({graphics:mask_1_graphics_24,x:-48.6,y:18.4}).wait(1).to({graphics:mask_1_graphics_25,x:-48.6,y:18.7}).wait(1).to({graphics:mask_1_graphics_26,x:-48.6,y:19}).wait(1).to({graphics:mask_1_graphics_27,x:-48.6,y:19.2}).wait(1).to({graphics:mask_1_graphics_28,x:-48.6,y:19.5}).wait(1).to({graphics:mask_1_graphics_29,x:-48.5,y:19.7}).wait(1).to({graphics:mask_1_graphics_30,x:-48.5,y:19.9}).wait(1).to({graphics:mask_1_graphics_31,x:-48.5,y:20.1}).wait(1).to({graphics:mask_1_graphics_32,x:-48.5,y:20.3}).wait(1).to({graphics:mask_1_graphics_33,x:-48.5,y:20.4}).wait(1).to({graphics:mask_1_graphics_34,x:-48.4,y:20.6}).wait(1).to({graphics:mask_1_graphics_35,x:-48.4,y:20.7}).wait(1).to({graphics:mask_1_graphics_36,x:-48.4,y:20.7}).wait(1).to({graphics:mask_1_graphics_37,x:-48.4,y:20.8}).wait(1).to({graphics:mask_1_graphics_38,x:-48.4,y:20.8}).wait(1).to({graphics:mask_1_graphics_39,x:-48.4,y:20.9}).wait(1).to({graphics:mask_1_graphics_40,x:-48.4,y:20.9}).wait(1).to({graphics:mask_1_graphics_41,x:-48.3,y:21}).wait(1).to({graphics:mask_1_graphics_42,x:-48.3,y:21}).wait(1).to({graphics:mask_1_graphics_43,x:-48.3,y:21}).wait(1).to({graphics:mask_1_graphics_44,x:-48.3,y:21}).wait(1).to({graphics:mask_1_graphics_45,x:-48.3,y:21}).wait(1).to({graphics:mask_1_graphics_46,x:-48.3,y:21.1}).wait(1).to({graphics:mask_1_graphics_47,x:-48.3,y:21.2}).wait(1).to({graphics:mask_1_graphics_48,x:-48.3,y:21.3}).wait(1).to({graphics:mask_1_graphics_49,x:-48.3,y:21.4}).wait(1).to({graphics:mask_1_graphics_50,x:-48.3,y:21.6}).wait(1).to({graphics:mask_1_graphics_51,x:-48.3,y:21.7}).wait(1).to({graphics:mask_1_graphics_52,x:-48.3,y:21.9}).wait(1).to({graphics:mask_1_graphics_53,x:-48.3,y:22.1}).wait(1).to({graphics:mask_1_graphics_54,x:-48.3,y:22.3}).wait(1).to({graphics:mask_1_graphics_55,x:-48.3,y:22.5}).wait(1).to({graphics:mask_1_graphics_56,x:-48.3,y:22.7}).wait(1).to({graphics:mask_1_graphics_57,x:-48.2,y:23}).wait(1).to({graphics:mask_1_graphics_58,x:-48.2,y:23.5}).wait(1).to({graphics:mask_1_graphics_59,x:-48.2,y:24.1}).wait(1).to({graphics:mask_1_graphics_60,x:-48.2,y:24.8}).wait(1).to({graphics:mask_1_graphics_61,x:-47,y:25.6}).wait(1).to({graphics:mask_1_graphics_62,x:-45.6,y:26.4}).wait(1).to({graphics:mask_1_graphics_63,x:-44.3,y:27.2}).wait(1).to({graphics:mask_1_graphics_64,x:-43,y:28.2}).wait(1).to({graphics:mask_1_graphics_65,x:-41.7,y:29.2}).wait(1).to({graphics:mask_1_graphics_66,x:-40.6,y:30.2}).wait(1).to({graphics:mask_1_graphics_67,x:-39.5,y:31.4}).wait(1).to({graphics:mask_1_graphics_68,x:-38.4,y:32.5}).wait(1).to({graphics:mask_1_graphics_69,x:-37.5,y:33.8}).wait(1).to({graphics:mask_1_graphics_70,x:-36.6,y:35}).wait(1).to({graphics:mask_1_graphics_71,x:-35.7,y:36.4}).wait(1).to({graphics:mask_1_graphics_72,x:-35,y:37.7}).wait(1).to({graphics:mask_1_graphics_73,x:-34.3,y:39.1}).wait(1).to({graphics:mask_1_graphics_74,x:-33.6,y:40.5}).wait(1).to({graphics:mask_1_graphics_75,x:-33.1,y:42}).wait(1).to({graphics:mask_1_graphics_76,x:-32.6,y:42.3}).wait(1).to({graphics:mask_1_graphics_77,x:-32.2,y:42.3}).wait(1).to({graphics:mask_1_graphics_78,x:-31.7,y:42.2}).wait(57));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AkBjLQhpJIErjSQCYhtDFkf");
	this.shape_1.setTransform(-21.4,43.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AnOCVQhpJJErjSQEqjTHMt8");
	this.shape_2.setTransform(-0.9,8);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},29).wait(106));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.2,18.2,67,27.3);


(lib.ar2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(15.4,-54,1,1,95.7,0,0,0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0.1,rotation:6.4,guide:{path:[15.3,-54,-33.2,-51.7,-37.7,-2]}},59).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AkKqLQEHADC6C7QC/DAAAENQAAEOi/C/Qi6C8kHADg");
	var mask_graphics_1 = new cjs.Graphics().p("AkeqLQEHgEDAC1QDFC5AIEOQAIENi4DFQi2DBkFAMg");
	var mask_graphics_2 = new cjs.Graphics().p("AkzqKQEHgMDGCvQDKCzARENQARENizDLQivDGkFAVg");
	var mask_graphics_3 = new cjs.Graphics().p("AlHqHQEGgVDLCoQDQCtAZENQAaEMitDQQioDMkFAdg");
	var mask_graphics_4 = new cjs.Graphics().p("AlcqEQEGgdDQCiQDVCmAiEMQAiELimDWQiiDRkEAkg");
	var mask_graphics_5 = new cjs.Graphics().p("AlwqAQEEglDVCcQDbCfAqELQAqEKifDaQicDWkCAtg");
	var mask_graphics_6 = new cjs.Graphics().p("Al9p7QEDgtDaCVQDfCYAzEKQAyEIiYDfQiVDbkBA1g");
	var mask_graphics_7 = new cjs.Graphics().p("AmHp0QEBg2DfCOQDkCRA6EIQA7EHiRDkQiODfj/A9g");
	var mask_graphics_8 = new cjs.Graphics().p("AmRptQD/g+DjCHQDpCKBCEGQBDEFiJDoQiHDkj9BFg");
	var mask_graphics_9 = new cjs.Graphics().p("AmbplQD9hGDnCAQDtCCBLEEQBLEDiCDsQiADoj7BNg");
	var mask_graphics_10 = new cjs.Graphics().p("AmlpdQD7hNDrB4QDwB8BUEBQBTEAh7DwQh5Dsj4BVg");
	var mask_graphics_11 = new cjs.Graphics().p("AmvpTQD5hVDuBxQD1B0BbD+QBbD9hzD1QhxDvj3Bcg");
	var mask_graphics_12 = new cjs.Graphics().p("Am5pIQD2hdDyBpQD4BsBjD8QBjD6hrD4QhqDzjzBkg");
	var mask_graphics_13 = new cjs.Graphics().p("AnCo9QDzhkD1BhQD7BlBrD4QBrD3hkD7QhiD2jwBsg");
	var mask_graphics_14 = new cjs.Graphics().p("AnMowQDwhsD4BaQD+BcBzD0QBzD0hcD+QhbD5jsBzg");
	var mask_graphics_15 = new cjs.Graphics().p("AnVojQDth0D6BSQEBBVB6DxQB6DxhTD/QhTD8jpB7g");
	var mask_graphics_16 = new cjs.Graphics().p("AneoVQDph7D9BKQEDBMCCDuQCCDthMECQhLD+jlCCg");
	var mask_graphics_17 = new cjs.Graphics().p("AnnoGQDliCEABCQEFBECJDpQCJDphEEEQhCEBjhCIg");
	var mask_graphics_18 = new cjs.Graphics().p("Anvn2QDgiKECA7QEHA7CQDlQCQDkg7EHQg6ECjdCQg");
	var mask_graphics_19 = new cjs.Graphics().p("An4nmQDciQEEAyQEIAzCYDgQCXDggzEIQgyEEjYCXg");
	var mask_graphics_20 = new cjs.Graphics().p("AoAnVQDXiXEGAqQEJArCfDbQCeDcgrEJQgqEGjTCdg");
	var mask_graphics_21 = new cjs.Graphics().p("AoInDQDSidEHAhQELAjClDWQClDWgjELQgiEHjNCjg");
	var mask_graphics_22 = new cjs.Graphics().p("AoQmwQDNikEIAaQEMAaCrDRQCsDQgaEMQgaEIjICqg");
	var mask_graphics_23 = new cjs.Graphics().p("AoYmcQDIirEIASQENASCyDLQCyDLgRENQgSEIjDCwg");
	var mask_graphics_24 = new cjs.Graphics().p("AogmIQDDiwEJAIQENAKC4DGQC5DFgKENQgJEJi9C2g");
	var mask_graphics_25 = new cjs.Graphics().p("AonlzQC9i2EJAAQENABC/DAQC+DAgBENQgBEJi4C8g");
	var mask_graphics_26 = new cjs.Graphics().p("AouldQC3i8EJgIQENgHDEC5QDFC6AHENQAIEJiyDBg");
	var mask_graphics_27 = new cjs.Graphics().p("Ao2lGQCyjDEIgPQENgQDKCzQDKC0AQEMQAQEIisDIg");
	var mask_graphics_28 = new cjs.Graphics().p("Ao8kvQCrjIEHgYQENgYDPCtQDQCtAYEMQAYEHilDNg");
	var mask_graphics_29 = new cjs.Graphics().p("ApDkXQCljNEHghQELggDVCmQDVCnAhELQAgEGifDSg");
	var mask_graphics_30 = new cjs.Graphics().p("ApJj/QCejSEGgpQEKgpDaCgQDaCgApEKQAoEFiYDXg");
	var mask_graphics_31 = new cjs.Graphics().p("ApQjmQCYjXEEgxQEJgxDfCZQDfCZAxEIQAxEEiRDcg");
	var mask_graphics_32 = new cjs.Graphics().p("ApWjMQCSjcECg5QEHg5DkCRQDjCSA6EHQA5EDiLDfg");
	var mask_graphics_33 = new cjs.Graphics().p("ApbiyQCKjgEAhBQEGhCDoCKQDoCLBCEFQBBEBiEDjg");
	var mask_graphics_34 = new cjs.Graphics().p("AphiYQCEjkD+hJQEDhKDsCDQDsCDBLEEQBID+h8Dog");
	var mask_graphics_35 = new cjs.Graphics().p("Apmh9QB8joD8hRQEBhSDwB8QDwB8BTEBQBQD7h1Dsg");
	var mask_graphics_36 = new cjs.Graphics().p("ApqhhQB0jsD6hZQD9haD0B0QD0B0BbD/QBYD4htDvg");
	var mask_graphics_37 = new cjs.Graphics().p("ApvhGQBtjvD3hgQD8hjD2BtQD4BsBiD8QBgD2hmDyg");
	var mask_graphics_38 = new cjs.Graphics().p("ApzgqQBmjyDzhoQD5hqD5BkQD7BlBqD5QBoDyheD2g");
	var mask_graphics_39 = new cjs.Graphics().p("Ap3gNQBej2DwhvQD1hyD9BdQD+BdByD0QBvDwhWD4g");
	var mask_graphics_40 = new cjs.Graphics().p("Ap6APQBWj4Dsh3QDyh5EABVQEABUB6DyQB3DrhPD7g");
	var mask_graphics_41 = new cjs.Graphics().p("Ap9AsQBOj6Dph/QDtiAECBMQEDBNCBDtQB/DohHD9g");
	var mask_graphics_42 = new cjs.Graphics().p("AqABJQBGj8DliGQDpiIEFBFQEFBECIDpQCGDkg/D/g");
	var mask_graphics_43 = new cjs.Graphics().p("AqDBnQA/j/DgiMQDliQEHA9QEHA8CPDlQCNDfg3EBg");
	var mask_graphics_44 = new cjs.Graphics().p("AqFCDQA3kADbiUQDhiXEIA0QEJA1CXDgQCTDbgvECg");
	var mask_graphics_45 = new cjs.Graphics().p("AqHCXQAvkCDXibQDbidEKAsQELAsCdDbQCbDWgnEEg");
	var mask_graphics_46 = new cjs.Graphics().p("AqICrQAmkDDSiiQDXikELAkQEMAjCkDWQChDSgfEFg");
	var mask_graphics_47 = new cjs.Graphics().p("AqJC/QAekEDMioQDSirEMAbQENAbCrDRQCnDMgWEGg");
	var mask_graphics_48 = new cjs.Graphics().p("AqKDTQAWkFDHiuQDMixENASQENATCyDMQCuDGgPEHg");
	var mask_graphics_49 = new cjs.Graphics().p("AqLDoQAOkGDCi0QDGi4ENAKQEOAKC4DGQC0DCgGEHg");
	var mask_graphics_50 = new cjs.Graphics().p("AqLD8QAFkGC8i6QDBi+ENACQEOABC+DBQC6C8ACEGg");
	var mask_graphics_51 = new cjs.Graphics().p("AnYi2QC7jDEOgHQENgHDEC6QDAC3AKEGI0XAgQgDkHC2i/g");
	var mask_graphics_52 = new cjs.Graphics().p("AnlimQC0jKEOgPQENgPDKC0QDFCwATEFI0WBKQgLkHCwjEg");
	var mask_graphics_53 = new cjs.Graphics().p("AnxiXQCujPENgYQEMgXDPCtQDLCrAbEEI0TByQgTkGCqjKg");
	var mask_graphics_54 = new cjs.Graphics().p("An9iHQCojUEMggQELggDVCnQDQCjAjEEI0PCbQgbkGCjjPg");
	var mask_graphics_55 = new cjs.Graphics().p("AoHh3QCgjZELgoQELgpDZCgQDVCdArEDI0JDDQgjkFCdjUg");
	var mask_graphics_56 = new cjs.Graphics().p("AoRhmQCZjeEKgxQEJgxDeCaQDaCWA0EBI0DDrQgrkDCWjZg");
	var mask_graphics_57 = new cjs.Graphics().p("AoahZQCSjjEIg5QEIg5DjCSQDeCQA8D/Iz7ETQg0kCCQjdg");
	var mask_graphics_58 = new cjs.Graphics().p("AojhSQCMjnEGhCQEFhBDoCLQDjCJBDD9IzxE7Qg8kACIjig");
	var mask_graphics_59 = new cjs.Graphics().p("AoqhKQCEjsEEhJQEDhKDsCEQDnCCBLD7IzmFiQhEj+CBjmg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:37.4,y:-12.8}).wait(1).to({graphics:mask_graphics_1,x:37.4,y:-12.8}).wait(1).to({graphics:mask_graphics_2,x:37.4,y:-12.8}).wait(1).to({graphics:mask_graphics_3,x:37.5,y:-12.9}).wait(1).to({graphics:mask_graphics_4,x:37.5,y:-13}).wait(1).to({graphics:mask_graphics_5,x:37.5,y:-13.2}).wait(1).to({graphics:mask_graphics_6,x:36.8,y:-13.3}).wait(1).to({graphics:mask_graphics_7,x:35.8,y:-13.5}).wait(1).to({graphics:mask_graphics_8,x:34.8,y:-13.8}).wait(1).to({graphics:mask_graphics_9,x:33.8,y:-14}).wait(1).to({graphics:mask_graphics_10,x:32.9,y:-14.3}).wait(1).to({graphics:mask_graphics_11,x:31.9,y:-14.7}).wait(1).to({graphics:mask_graphics_12,x:31,y:-15}).wait(1).to({graphics:mask_graphics_13,x:30,y:-15.4}).wait(1).to({graphics:mask_graphics_14,x:29.1,y:-15.8}).wait(1).to({graphics:mask_graphics_15,x:28.2,y:-16.2}).wait(1).to({graphics:mask_graphics_16,x:27.3,y:-16.7}).wait(1).to({graphics:mask_graphics_17,x:26.4,y:-17.2}).wait(1).to({graphics:mask_graphics_18,x:25.5,y:-17.7}).wait(1).to({graphics:mask_graphics_19,x:24.6,y:-18.2}).wait(1).to({graphics:mask_graphics_20,x:23.8,y:-18.8}).wait(1).to({graphics:mask_graphics_21,x:23,y:-19.4}).wait(1).to({graphics:mask_graphics_22,x:22.2,y:-20}).wait(1).to({graphics:mask_graphics_23,x:21.4,y:-20.6}).wait(1).to({graphics:mask_graphics_24,x:20.6,y:-21.3}).wait(1).to({graphics:mask_graphics_25,x:19.9,y:-22}).wait(1).to({graphics:mask_graphics_26,x:19.2,y:-22.7}).wait(1).to({graphics:mask_graphics_27,x:18.5,y:-23.5}).wait(1).to({graphics:mask_graphics_28,x:17.8,y:-24.2}).wait(1).to({graphics:mask_graphics_29,x:17.2,y:-25}).wait(1).to({graphics:mask_graphics_30,x:16.6,y:-25.9}).wait(1).to({graphics:mask_graphics_31,x:16.1,y:-26.7}).wait(1).to({graphics:mask_graphics_32,x:15.5,y:-27.6}).wait(1).to({graphics:mask_graphics_33,x:15,y:-28.4}).wait(1).to({graphics:mask_graphics_34,x:14.5,y:-29.3}).wait(1).to({graphics:mask_graphics_35,x:14,y:-30.2}).wait(1).to({graphics:mask_graphics_36,x:13.6,y:-31.1}).wait(1).to({graphics:mask_graphics_37,x:13.2,y:-32}).wait(1).to({graphics:mask_graphics_38,x:12.8,y:-33}).wait(1).to({graphics:mask_graphics_39,x:12.4,y:-33.9}).wait(1).to({graphics:mask_graphics_40,x:12.1,y:-34.9}).wait(1).to({graphics:mask_graphics_41,x:11.8,y:-35.8}).wait(1).to({graphics:mask_graphics_42,x:11.5,y:-36.8}).wait(1).to({graphics:mask_graphics_43,x:11.3,y:-37.8}).wait(1).to({graphics:mask_graphics_44,x:11.1,y:-38.6}).wait(1).to({graphics:mask_graphics_45,x:10.9,y:-38.6}).wait(1).to({graphics:mask_graphics_46,x:10.7,y:-38.6}).wait(1).to({graphics:mask_graphics_47,x:10.6,y:-38.5}).wait(1).to({graphics:mask_graphics_48,x:10.5,y:-38.5}).wait(1).to({graphics:mask_graphics_49,x:10.5,y:-38.5}).wait(1).to({graphics:mask_graphics_50,x:10.5,y:-38.5}).wait(1).to({graphics:mask_graphics_51,x:10.5,y:-38.5}).wait(1).to({graphics:mask_graphics_52,x:10.4,y:-38.5}).wait(1).to({graphics:mask_graphics_53,x:10.4,y:-38.5}).wait(1).to({graphics:mask_graphics_54,x:10.3,y:-38.5}).wait(1).to({graphics:mask_graphics_55,x:10.1,y:-38.6}).wait(1).to({graphics:mask_graphics_56,x:9.9,y:-38.6}).wait(1).to({graphics:mask_graphics_57,x:9.7,y:-38.2}).wait(1).to({graphics:mask_graphics_58,x:9.5,y:-37.2}).wait(1).to({graphics:mask_graphics_59,x:9.2,y:-36.1}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AkKEcQAZogH8gX");
	this.shape.setTransform(-11.4,-25.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.3,-65.1,14.7,70.4);


(lib.ar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-27,21.4,1,1,-135);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:33.2,y:-27},44).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AiggCIA+gvIBvCTIg9Aug");
	var mask_graphics_1 = new cjs.Graphics().p("AhcgtIBKg4IBvCSIhKA5g");
	var mask_graphics_2 = new cjs.Graphics().p("AhjgoIBYhCIBvCSIhYBDg");
	var mask_graphics_3 = new cjs.Graphics().p("AhpgjIBkhLIBvCSIhkBMg");
	var mask_graphics_4 = new cjs.Graphics().p("AhvgeIBvhVIBwCSIhwBVg");
	var mask_graphics_5 = new cjs.Graphics().p("Ah1gZIB8hfIBvCTIh8Beg");
	var mask_graphics_6 = new cjs.Graphics().p("Ah8gUICJhpIBwCSIiJBpg");
	var mask_graphics_7 = new cjs.Graphics().p("AiCgQICVhxIBwCSIiVBxg");
	var mask_graphics_8 = new cjs.Graphics().p("AiIgLICih7IBvCSIiiB7g");
	var mask_graphics_9 = new cjs.Graphics().p("AiPgGICviFIBvCSIitCFg");
	var mask_graphics_10 = new cjs.Graphics().p("AiVgCIC7iOIBwCTIi7COg");
	var mask_graphics_11 = new cjs.Graphics().p("AibACIDHiXIBwCUIjHCXg");
	var mask_graphics_12 = new cjs.Graphics().p("AiiAHIDUihIBwCUIjTCgg");
	var mask_graphics_13 = new cjs.Graphics().p("AioAMIDhiqIBwCTIjhCqg");
	var mask_graphics_14 = new cjs.Graphics().p("AiuARIDti0IBwCUIjtCzg");
	var mask_graphics_15 = new cjs.Graphics().p("Ai0AVID5i9IBwCUIj5C9g");
	var mask_graphics_16 = new cjs.Graphics().p("Ai6AaIEFjHIBxCUIkHDHg");
	var mask_graphics_17 = new cjs.Graphics().p("AjBAfIETjQIBwCTIkTDQg");
	var mask_graphics_18 = new cjs.Graphics().p("AjHAjIEfjZIBwCTIkfDag");
	var mask_graphics_19 = new cjs.Graphics().p("AjNAoIErjjIBxCTIktDkg");
	var mask_graphics_20 = new cjs.Graphics().p("AjUAtIE5jsIBwCTIk5Dsg");
	var mask_graphics_21 = new cjs.Graphics().p("AjaAyIFFj2IBwCTIlFD2g");
	var mask_graphics_22 = new cjs.Graphics().p("AjhA2IFSj/IBxCTIlSEAg");
	var mask_graphics_23 = new cjs.Graphics().p("AjnA7IFfkJIBwCTIlfEKg");
	var mask_graphics_24 = new cjs.Graphics().p("AjtBAIFrkTIBwCUIlrETg");
	var mask_graphics_25 = new cjs.Graphics().p("AjzBFIF3kcIBwCTIl3Ecg");
	var mask_graphics_26 = new cjs.Graphics().p("Aj6BKIGEkmIBxCTImFEmg");
	var mask_graphics_27 = new cjs.Graphics().p("AkABPIGRkwIBwCTImREwg");
	var mask_graphics_28 = new cjs.Graphics().p("AkGBTIGdk5IBwCUImdE5g");
	var mask_graphics_29 = new cjs.Graphics().p("AkNBYIGqlCIBxCTImrFCg");
	var mask_graphics_30 = new cjs.Graphics().p("AkTBdIG3lMIBwCTIm3FMg");
	var mask_graphics_31 = new cjs.Graphics().p("AkZBhIHDlVIBwCUInDFVg");
	var mask_graphics_32 = new cjs.Graphics().p("AkfBmIHPlfIBwCUInPFfg");
	var mask_graphics_33 = new cjs.Graphics().p("AklBrIHclpIBwCUIndFpg");
	var mask_graphics_34 = new cjs.Graphics().p("AksBwIHplyIBwCTInpFyg");
	var mask_graphics_35 = new cjs.Graphics().p("AkyB1IH1l8IBwCUIn1F7g");
	var mask_graphics_36 = new cjs.Graphics().p("Ak4B6IIBmGIBwCUIoBGFg");
	var mask_graphics_37 = new cjs.Graphics().p("Ak/B+IIPmPIBwCUIoPGPg");
	var mask_graphics_38 = new cjs.Graphics().p("AlFCDIIbmYIBwCTIobGYg");
	var mask_graphics_39 = new cjs.Graphics().p("AlLCIIInmiIBwCTIonGig");
	var mask_graphics_40 = new cjs.Graphics().p("AlSCMII1mrIBwCTIo1Gsg");
	var mask_graphics_41 = new cjs.Graphics().p("AlYCRIJBm1IBwCUIpBG1g");
	var mask_graphics_42 = new cjs.Graphics().p("AleCWIJNm+IBwCTIpNG+g");
	var mask_graphics_43 = new cjs.Graphics().p("AlkCbIJanIIBvCTIpaHIg");
	var mask_graphics_44 = new cjs.Graphics().p("AlrCgIJnnSIBwCTIpnHSg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-16.1,y:14.4}).wait(1).to({graphics:mask_graphics_1,x:-22.9,y:18.7}).wait(1).to({graphics:mask_graphics_2,x:-22.2,y:18.2}).wait(1).to({graphics:mask_graphics_3,x:-21.6,y:17.7}).wait(1).to({graphics:mask_graphics_4,x:-20.9,y:17.2}).wait(1).to({graphics:mask_graphics_5,x:-20.3,y:16.8}).wait(1).to({graphics:mask_graphics_6,x:-19.7,y:16.3}).wait(1).to({graphics:mask_graphics_7,x:-19,y:15.8}).wait(1).to({graphics:mask_graphics_8,x:-18.4,y:15.3}).wait(1).to({graphics:mask_graphics_9,x:-17.7,y:14.8}).wait(1).to({graphics:mask_graphics_10,x:-17.1,y:14.3}).wait(1).to({graphics:mask_graphics_11,x:-16.5,y:13.8}).wait(1).to({graphics:mask_graphics_12,x:-15.8,y:13.3}).wait(1).to({graphics:mask_graphics_13,x:-15.2,y:12.8}).wait(1).to({graphics:mask_graphics_14,x:-14.5,y:12.4}).wait(1).to({graphics:mask_graphics_15,x:-13.9,y:11.9}).wait(1).to({graphics:mask_graphics_16,x:-13.3,y:11.4}).wait(1).to({graphics:mask_graphics_17,x:-12.6,y:10.9}).wait(1).to({graphics:mask_graphics_18,x:-12,y:10.4}).wait(1).to({graphics:mask_graphics_19,x:-11.4,y:9.9}).wait(1).to({graphics:mask_graphics_20,x:-10.7,y:9.4}).wait(1).to({graphics:mask_graphics_21,x:-10.1,y:8.9}).wait(1).to({graphics:mask_graphics_22,x:-9.4,y:8.5}).wait(1).to({graphics:mask_graphics_23,x:-8.8,y:8}).wait(1).to({graphics:mask_graphics_24,x:-8.2,y:7.5}).wait(1).to({graphics:mask_graphics_25,x:-7.5,y:7}).wait(1).to({graphics:mask_graphics_26,x:-6.9,y:6.5}).wait(1).to({graphics:mask_graphics_27,x:-6.3,y:6}).wait(1).to({graphics:mask_graphics_28,x:-5.6,y:5.5}).wait(1).to({graphics:mask_graphics_29,x:-5,y:5}).wait(1).to({graphics:mask_graphics_30,x:-4.4,y:4.5}).wait(1).to({graphics:mask_graphics_31,x:-3.7,y:4.1}).wait(1).to({graphics:mask_graphics_32,x:-3.1,y:3.6}).wait(1).to({graphics:mask_graphics_33,x:-2.4,y:3.1}).wait(1).to({graphics:mask_graphics_34,x:-1.8,y:2.6}).wait(1).to({graphics:mask_graphics_35,x:-1.2,y:2.1}).wait(1).to({graphics:mask_graphics_36,x:-0.5,y:1.6}).wait(1).to({graphics:mask_graphics_37,x:0.1,y:1.1}).wait(1).to({graphics:mask_graphics_38,x:0.8,y:0.6}).wait(1).to({graphics:mask_graphics_39,x:1.4,y:0.1}).wait(1).to({graphics:mask_graphics_40,x:2,y:-0.3}).wait(1).to({graphics:mask_graphics_41,x:2.7,y:-0.8}).wait(1).to({graphics:mask_graphics_42,x:3.3,y:-1.3}).wait(1).to({graphics:mask_graphics_43,x:4,y:-1.8}).wait(1).to({graphics:mask_graphics_44,x:4.6,y:-2.3}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AjtEeQCxkJEqkx");
	this.shape.setTransform(3.5,-4.5,1,1,-167.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(45));

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
(lib.WS_Cursive_w = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_589 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(589).call(this.frame_589).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(98.4,260.1,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({x:142.8,y:203},65).wait(16).to({startPosition:0},0).to({guide:{path:[143.1,203.1,139.4,213.8,134.7,224,129.9,234.6,124.4,244.7,118.8,254.7,113.9,264.5,109,274.3,104.7,284,100.4,293.7,96.5,303.3,92.2,313.7,89.1,324,86.6,332.3,88.9,340.5,91,347.7,103,349.9,108.3,350.9,113.3,349.3,130.5,344.1,144,336.1,156.9,328.5,168.2,320.1,179.4,311.8,187.9,302.2,196.4,292.5,206.1,284,215.7,275.4,223.4,267.5,231.1,259.6,238.8,250.8,246.4,242.1,252.8,232.2,259.1,222.3,262.4,215,265.4,208.3,266.9,203.1]}},154).wait(15).to({startPosition:0},0).to({guide:{path:[266.4,203,261.5,211.3,254.6,222.7,247.6,234.4,240,246.1,232.3,257.7,227.1,270.3,222,283,215.9,296.8,209.8,310.7,210.2,325.3,210.5,339.9,223,344.7,227.9,346.6,237.8,347.9,247.7,349.2,260.4,342.5,273,335.9,282.5,327.9,292,319.9,302.4,308.6,312.8,297.3,322.1,286.5,331.4,275.7,338,267.4,344.6,259.1,351.2,248.8,357.7,238.4,364.8,228.5,371.7,218.9,374.9,212.8]}},135).wait(15).to({startPosition:0},0).to({guide:{path:[374.3,212.8,377,219.4,380.2,225.6,383.4,232,391,253,398.5,274,412.5,279.6,426.4,285.2,441.5,277.1,456.3,269,461.8,261.4]}},105).wait(16).to({startPosition:0},0).to({guide:{path:[462.3,261.5,474.1,196.9,524.1,210.2,574.6,223.8,602.8,188.5,630.8,153.5,631.3,135.9]}},59).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(144,202.1,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},65).wait(16).to({_off:false,x:268},0).to({_off:true},154).wait(15).to({_off:false,x:375,y:212.1},0).to({_off:true},135).wait(15).to({_off:false,x:460.7,y:262},0).to({_off:true},105).wait(76));

	// Layer 38
	this.instance_1 = new lib.ar2("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(454.5,143,1,1,-125.4,0,0,0.8,-0.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(409).to({_off:false},0).wait(181));

	// Layer 34 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_409 = new cjs.Graphics().p("AkTHlQh/r+HDp4QHDp4L+h/QL+iAJ4HDMgiEAvqQp3nDiAr9g");
	var mask_graphics_410 = new cjs.Graphics().p("AkJHxQiGr9G9p8QG+p8L9iGQL8iHJ8G+MghoAv9Qp7m+iHr7g");
	var mask_graphics_411 = new cjs.Graphics().p("Aj/H9QiNr8G3qAQG4qAL8iMQL7iPKAG5MghMAwQQp/m4iOr6g");
	var mask_graphics_412 = new cjs.Graphics().p("Aj0IJQiVr6GyqFQGyqEL6iTQL6iVKEGyMggwAwkQqDmziUr4g");
	var mask_graphics_413 = new cjs.Graphics().p("AjqIVQibr5GsqIQGsqIL5iaQL4icKIGtMggUAw2QqHmtibr3g");
	var mask_graphics_414 = new cjs.Graphics().p("AjfIhQiir4GlqLQGnqML3ihQL3ijKMGnMgf4AxIQqKmmiir2g");
	var mask_graphics_415 = new cjs.Graphics().p("AjUItQipr2GgqQQGgqPL2ioQL1ipKQGgMgfbAxbQqPmhior0g");
	var mask_graphics_416 = new cjs.Graphics().p("AjJI5Qiwr0GaqUQGbqTL0iuQL0ixKTGbMge/AxsQqSmaivrzg");
	var mask_graphics_417 = new cjs.Graphics().p("Ai+JFQi2rzGTqWQGVqXLzi2QLyi3KXGVMgeiAx+QqWmVi2rxg");
	var mask_graphics_418 = new cjs.Graphics().p("AiyJRQi+rxGOqaQGPqbLxi8QLwi+KaGPMgeEAyPQqbmOi7rwg");
	var mask_graphics_419 = new cjs.Graphics().p("AinJdQjErvGIqeQGIqeLwjDQLujFKeGJMgdnAyhQqemJjDrug");
	var mask_graphics_420 = new cjs.Graphics().p("AibJpQjLrtGCqhQGCqiLujKQLsjLKiGCMgdKAyyQqimDjJrsg");
	var mask_graphics_421 = new cjs.Graphics().p("AiPJ1QjSrrF8qlQF8qlLsjQQLrjTKlF9MgctAzCQqll8jQrrg");
	var mask_graphics_422 = new cjs.Graphics().p("AiDKCQjYrqF1qoQF2qoLqjXQLpjaKoF3MgcPAzSQqol2jXrog");
	var mask_graphics_423 = new cjs.Graphics().p("Ah2KOQjgrnFwqsQFwqsLnjeQLnjfKsFwMgbxAziQqslwjdrmg");
	var mask_graphics_424 = new cjs.Graphics().p("AhqKaQjmrlFpqvQFqqvLmjkQLkjnKvFqMgbTAzyQqvlqjkrkg");
	var mask_graphics_425 = new cjs.Graphics().p("AhdKmQjtrjFjqyQFkqyLjjrQLjjtKyFjMga1A0CQqylkjrrig");
	var mask_graphics_426 = new cjs.Graphics().p("AhQKzQj0rhFdq1QFdq2LijyQLgj0K1FeMgaXA0RQq1lejxrfg");
	var mask_graphics_427 = new cjs.Graphics().p("AhDK/Qj6rfFWq4QFXq4Lfj5QLej6K5FXMgZ5A0gQq4lYj4rdg");
	var mask_graphics_428 = new cjs.Graphics().p("Ag2LLQkArcFPq7QFRq8Ldj/QLckBK7FRMgZaA0uQq7lRj/rbg");
	var mask_graphics_429 = new cjs.Graphics().p("AgpLXQkHrZFKq/QFKq+LbkGQLZkIK/FLMgY8A09Qq+lLkGrZg");
	var mask_graphics_430 = new cjs.Graphics().p("AgbLkQkOrZFErAQFErBLYkNQLXkOLBFEMgYdA1LQrBlEkMrWg");
	var mask_graphics_431 = new cjs.Graphics().p("AgNLwQkUrWE8rDQE+rELVkTQLVkVLEE+MgX+A1ZQrEk+kSrUg");
	var mask_graphics_432 = new cjs.Graphics().p("AAAL8QkarTE2rGQE4rHLTkZQLSkcLGE4MgXeA1mQrHk3karSg");
	var mask_graphics_433 = new cjs.Graphics().p("AAOMJQkgrREwrJQExrJLQkgQLPkiLKExMgXAA10QrKkxkgrPg");
	var mask_graphics_434 = new cjs.Graphics().p("AAcMVQknrOEqrLQEqrNLOkmQLNkoLMEqMgWgA2BQrNkrknrMg");
	var mask_graphics_435 = new cjs.Graphics().p("AArMiQkurMEjrOQEkrPLLktQLKkvLPEkMgWBA2OQrPkkktrJg");
	var mask_graphics_436 = new cjs.Graphics().p("AA5MuQk0rJEdrQQEdrSLIkzQLHk1LSEdMgViA2aQrRkek0rGg");
	var mask_graphics_437 = new cjs.Graphics().p("ABFM4Qk5rHEXrSQEZrULFk4QLFk6LUEYMgVJA2jQrUkYk4rEg");
	var mask_graphics_438 = new cjs.Graphics().p("ABQNBQk9rEESrUQETrWLDk9QLDk/LWETMgUwA2tQrWkUk+rCg");
	var mask_graphics_439 = new cjs.Graphics().p("ABcNLQlDrCENrWQEOrYLClCQLAlELXEOMgUWA22QrYkOlDrAg");
	var mask_graphics_440 = new cjs.Graphics().p("ABoNVQlIrAEIrYQEJrZK/lIQK+lJLZEJMgT+A2/QrZkJlIq9g");
	var mask_graphics_441 = new cjs.Graphics().p("AB0NfQlNq9EDrbQEErbK8lMQK8lOLbEDMgTlA3IQrbkDlNq7g");
	var mask_graphics_442 = new cjs.Graphics().p("ACANoQlRq6D9rcQD+rdK7lSQK5lTLdD/MgTMA3QQrdj+lSq5g");
	var mask_graphics_443 = new cjs.Graphics().p("ACNNyQlXq4D4reQD5rfK4lWQK3lYLeD5MgSyA3ZQrfj5lWq2g");
	var mask_graphics_444 = new cjs.Graphics().p("ACZN8Qlcq2DzrfQD0rhK1lbQK1ldLgD0MgSZA3iQrhj0lbq0g");
	var mask_graphics_445 = new cjs.Graphics().p("AClOGQlgq0DurhQDuriKzlgQKyliLiDvMgSAA3pQrijulhqxg");
	var mask_graphics_446 = new cjs.Graphics().p("ACyOPQllqwDorjQDprkKxllQKvlnLkDqMgRnA3xQrkjpllqvg");
	var mask_graphics_447 = new cjs.Graphics().p("AC+OZQlqquDjrlQDlrlKtlqQKtlrLlDkMgRNA35Qrljklrqsg");
	var mask_graphics_448 = new cjs.Graphics().p("ADLOjQlvqsDermQDfrnKrluQKqlxLnDfMgQ0A4BQrnjflvqpg");
	var mask_graphics_449 = new cjs.Graphics().p("ADYOsQl0qoDZroQDZrpKplzQKnl1LpDZMgQaA4JQrpjal0qng");
	var mask_graphics_450 = new cjs.Graphics().p("ADlO2Ql5qmDUrpQDUrqKll4QKll7LqDVMgQAA4QQrqjVl5qkg");
	var mask_graphics_451 = new cjs.Graphics().p("ADyPAQl+qjDOrrQDPrsKjl9QKil/LsDPMgPnA4XQrsjPl9qhg");
	var mask_graphics_452 = new cjs.Graphics().p("AD/PKQmCqhDIrsQDKrtKgmCQKfmELtDKMgPNA4eQrtjKmCqeg");
	var mask_graphics_453 = new cjs.Graphics().p("AEMPTQmHqeDErtQDEruKdmHQKdmILuDEMgOzA4lQrvjFmHqcg");
	var mask_graphics_454 = new cjs.Graphics().p("AEaPdQmMqbC+rvQC/rwKamLQKamNLwC/MgOaA4rQrwi/mLqZg");
	var mask_graphics_455 = new cjs.Graphics().p("AEnPnQmRqYC5rxQC6rxKXmQQKXmSLxC6MgN/A4yQryi6mQqWg");
	var mask_graphics_456 = new cjs.Graphics().p("AE0PwQmVqVCzrxQC1rzKVmUQKTmXLzC0MgNmA44Qryi0mWqUg");
	var mask_graphics_457 = new cjs.Graphics().p("AFCP6QmaqSCurzQCvrzKSmaQKRmbL0CvMgNMA49Qr0iumaqRg");
	var mask_graphics_458 = new cjs.Graphics().p("AFVQIQmgqPCmr0QCor1KNmgQKNmiL2CnMgMoA5GQr2inmgqMg");
	var mask_graphics_459 = new cjs.Graphics().p("AFoQVQmnqKCfr2QCgr3KKmmQKJmpL3CgMgMEA5OQr3igmnqIg");
	var mask_graphics_460 = new cjs.Graphics().p("AF7QjQmtqGCXr4QCZr5KGmsQKEmvL5CZMgLgA5VQr5iYmtqEg");
	var mask_graphics_461 = new cjs.Graphics().p("AGOQwQmzqCCQr5QCRr6KBmzQKBm1L6CRMgK8A5dQr6iRm0qAg");
	var mask_graphics_462 = new cjs.Graphics().p("AGiQ+Qm6p+CJr6QCJr8J9m5QJ8m8L8CKMgKYA5kQr7iKm6p7g");
	var mask_graphics_463 = new cjs.Graphics().p("AG2RLQnBp5CBr8QCCr9J5nAQJ4nBL9CCMgJ0A5qQr8iCnAp3g");
	var mask_graphics_464 = new cjs.Graphics().p("AHJRYQnHp0B6r9QB7r/J0nGQJznHL/B6MgJPA5xQr+h7nHpzg");
	var mask_graphics_465 = new cjs.Graphics().p("AHdRmQnNpwBzr/QByr/JwnMQJvnOMABzMgIrA52Qr/hznNpug");
	var mask_graphics_466 = new cjs.Graphics().p("AHyRzQnUprBrsAQBrsAJsnTQJqnUMBBrMgIGA59QsBhsnSpqg");
	var mask_graphics_467 = new cjs.Graphics().p("AIGSBQnapnBksBQBjsCJnnYQJmnaMBBkMgHhA6BQsChknYplg");
	var mask_graphics_468 = new cjs.Graphics().p("AIaSOQngpiBcsCQBdsDJineQJhngMCBcMgG8A6GQsDhcnfphg");
	var mask_graphics_469 = new cjs.Graphics().p("AIvSbQnmpdBUsDQBVsDJenlQJcnmMDBVMgGYA6KQsDhVnlpcg");
	var mask_graphics_470 = new cjs.Graphics().p("AJESpQnspZBNsEQBNsEJYnqQJYnsMEBMMgFzA6PQsFhNnqpXg");
	var mask_graphics_471 = new cjs.Graphics().p("AJZS2QnypUBFsEQBFsFJUnxQJTnyMFBGMgFPA6SQsFhGnwpSg");
	var mask_graphics_472 = new cjs.Graphics().p("AJtTDQn4pPA+sFQA+sFJPn3QJOn4MFA+MgEqA6WQsFg+n3pOg");
	var mask_graphics_473 = new cjs.Graphics().p("AKDTRQn9pKA1sFQA2sHJKn8QJIn+MHA2MgEEA6YQsGg2n9pIg");
	var mask_graphics_474 = new cjs.Graphics().p("AKaTfQoEpFAusGQAusGJEoDQJDoEMHAuMgDdA6bQsHguoCpDg");
	var mask_graphics_475 = new cjs.Graphics().p("AKxTtQoKo/AlsHQAmsHI/oIQI+oKMHAlMgC2A6dQsHgloIo+g");
	var mask_graphics_476 = new cjs.Graphics().p("ALHT7QoPo6AdsHQAesII6oOQI4oQMIAeMgCQA6fQsHgeoPo4g");
	var mask_graphics_477 = new cjs.Graphics().p("ALeUIQoVo0AVsHQAWsII0oUQIzoWMIAWMgBoA6gQsIgWoVozg");
	var mask_graphics_478 = new cjs.Graphics().p("AL1UWQobovAOsHQANsIIvoaQItobMIANMgBBA6hQsJgOoaotg");
	var mask_graphics_479 = new cjs.Graphics().p("AMNUkQoiopAGsIQAGsIIpogQIoohMIAGMgAbA6hQsJgFofoog");
	var mask_graphics_480 = new cjs.Graphics().p("AMeUyQonokgCsIQgCsHIjomQIionMIgCMAAMA6hIgHAAQsEAAojofg");
	var mask_graphics_481 = new cjs.Graphics().p("AMiU/QosoegLsIQgKsHIeorQIcotMIgKMAAzA6hIgeAAQr1AAohoSg");
	var mask_graphics_482 = new cjs.Graphics().p("AMnVMQoyoYgTsIQgSsHIYowQIWozMIgSMABZA6gIgzABQrnAAoeoFg");
	var mask_graphics_483 = new cjs.Graphics().p("AMrVZQo3oSgbsIQgasHISo2QIQo3MIgbMACAA6gIhJABQraAAobn4g");
	var mask_graphics_484 = new cjs.Graphics().p("AMwVmQo9oMgjsIQgisGIMo8QILo9MHgiMACnA6dQgwACgvAAQrMAAoYnqg");
	var mask_graphics_485 = new cjs.Graphics().p("AM0VyQpCoGgrsHQgqsGIGpBQIFpDMHgqMADNA6cQg6ADg6AAQq+AAoWneg");
	var mask_graphics_486 = new cjs.Graphics().p("AM5V/QpHoBgzsGQgzsGIBpGQH/pIMGgzMAD0A6aQhGAFhEAAQqxAAoSnRg");
	var mask_graphics_487 = new cjs.Graphics().p("AM+WLQpNn7g6sGQg7sFH7pLQH4pNMGg7MAEbA6XQhRAGhOAAQqkAAoPnEg");
	var mask_graphics_488 = new cjs.Graphics().p("ANDWWQpSn0hCsFQhDsFH0pRQHzpSMFhCMAFCA6TQhbAIhZAAQqYAAoLm4g");
	var mask_graphics_489 = new cjs.Graphics().p("ANJWiQpYnuhKsFQhLsEHupWQHtpXMEhKMAFoA6QQhlAJhjAAQqLABoHmsg");
	var mask_graphics_490 = new cjs.Graphics().p("ANOWtQpcnohTsEQhSsDHnpbQHnpcMEhTMAGOA6NQhwAMhsAAQp/AAoEmgg");
	var mask_graphics_491 = new cjs.Graphics().p("ANUW4QpinihasDQhbsCHipgQHgphMDhbMAG1A6IQh7APh2AAQpzAAn/mUg");
	var mask_graphics_492 = new cjs.Graphics().p("ANaXCQpnnbhisCQhjsBHbplQHapmMChjMAHbA6EQiEARiAAAQpnAAn7mJg");
	var mask_graphics_493 = new cjs.Graphics().p("ANeXLQpqnWhpsBQhpsAHWppQHUprMBhpMAH7A5/QiNAUiHAAQpeAAn4l/g");
	var mask_graphics_494 = new cjs.Graphics().p("ANjXUQpunRhwsAQhwr/HRpuQHPpuMAhwMAIbA57QiVAWiQAAQpUAAn0l1g");
	var mask_graphics_495 = new cjs.Graphics().p("ANoXcQpynLh3r/Qh2r/HLpxQHKpyL/h3MAI7A52QidAZiYAAQpKAAnxlsg");
	var mask_graphics_496 = new cjs.Graphics().p("ANtXkQp2nGh9r+Qh8r9HFp1QHEp3L+h9MAJbA5yQilAbigAAQpBAAntljg");
	var mask_graphics_497 = new cjs.Graphics().p("ANyXsQp6nAiEr9QiCr8G/p6QG/p6L9iEMAJ7A5tQiuAeinAAQo4AAnplag");
	var mask_graphics_498 = new cjs.Graphics().p("AN4X0Qp/m7iKr8QiJr7G6p9QG5p+L8iKMAKbA5mQi2AhivAAQouAAnllQg");
	var mask_graphics_499 = new cjs.Graphics().p("AN9X8QqCm2iRr7QiQr5G1qBQGzqCL7iRMAK7A5hQi+Aki2AAQomAAnhlHg");
	var mask_graphics_500 = new cjs.Graphics().p("AOCYDQqGmwiXr5QiXr5GwqEQGuqGL5iYMALbA5bQjGAoi+AAQodAAndk/g");
	var mask_graphics_501 = new cjs.Graphics().p("AOIYKQqKmqier4Qidr3GqqJQGoqJL5ieMAL6A5UQjOArjGAAQoUAAnYk2g");
	var mask_graphics_502 = new cjs.Graphics().p("AOOYRQqOmkikr3Qikr2GkqMQGjqNL3ilMAMaA5OQjWAvjNAAQoLAAnUkug");
	var mask_graphics_503 = new cjs.Graphics().p("AOTYYQqRmeirr2Qiqr1GeqPQGeqRL1irMAM6A5HQjeAyjUAAQoDAAnQklg");
	var mask_graphics_504 = new cjs.Graphics().p("AOZYfQqVmZixr0QixrzGZqTQGXqVL0ixMANaA5AQjlA1jdAAQn6AAnLkcg");
	var mask_graphics_505 = new cjs.Graphics().p("AOfYmQqYmUi5ryQi3ryGTqXQGSqYLzi4MAN5A45QjtA6jkAAQnyAAnGkUg");
	var mask_graphics_506 = new cjs.Graphics().p("AOlYsQqcmOi/rxQi9rwGNqaQGMqbLxi/MAOZA4xQj1A+jrAAQnpAAnCkMg");
	var mask_graphics_507 = new cjs.Graphics().p("AOrYyQqfmIjFrvQjFruGIqeQGGqfLwjFMAO4A4pQj8BCjzAAQnhAAm9kEg");
	var mask_graphics_508 = new cjs.Graphics().p("AOxY4QqimCjMruQjLrsGCqhQGBqiLtjMMAPXA4hQkDBGj6AAQnZAAm4j8g");
	var mask_graphics_509 = new cjs.Graphics().p("AO3Y+Qqml8jSrsQjRrrF8qlQF7qlLsjSMAP2A4YQkKBLkCAAQnRAAmzj0g");
	var mask_graphics_510 = new cjs.Graphics().p("AO+ZEQqpl3jZrqQjYrpF2qoQF1qoLqjZMAQWA4QQkSBPkJAAQnIAAmujsg");
	var mask_graphics_511 = new cjs.Graphics().p("APEZJQqslxjfroQjfrnFxqrQFvqsLojfMAQ1A4HQkZBUkQAAQnBAAmpjlg");
	var mask_graphics_512 = new cjs.Graphics().p("APLZOQqvlqjmrnQjkrlFqquQFpqvLmjmMARUA3+QkgBZkYAAQm4AAmkjeg");
	var mask_graphics_513 = new cjs.Graphics().p("APzZpQrBlIkKraQkJrZFHrAQFHrALakKMAUFA3CQlIB3lCAAQmMAAmDi0g");
	var mask_graphics_514 = new cjs.Graphics().p("AQdZ9QrQklkurLQktrLEkrPQEjrQLMkuMAWzA19QltCaltAAQlgAAlhiPg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(409).to({graphics:mask_graphics_409,x:266.4,y:127.4}).wait(1).to({graphics:mask_graphics_410,x:265.7,y:127.9}).wait(1).to({graphics:mask_graphics_411,x:265,y:128.4}).wait(1).to({graphics:mask_graphics_412,x:264.3,y:128.9}).wait(1).to({graphics:mask_graphics_413,x:263.6,y:129.3}).wait(1).to({graphics:mask_graphics_414,x:262.9,y:129.8}).wait(1).to({graphics:mask_graphics_415,x:262.2,y:130.3}).wait(1).to({graphics:mask_graphics_416,x:261.5,y:130.7}).wait(1).to({graphics:mask_graphics_417,x:260.8,y:131.1}).wait(1).to({graphics:mask_graphics_418,x:260,y:131.6}).wait(1).to({graphics:mask_graphics_419,x:259.3,y:132}).wait(1).to({graphics:mask_graphics_420,x:258.6,y:132.4}).wait(1).to({graphics:mask_graphics_421,x:257.8,y:132.8}).wait(1).to({graphics:mask_graphics_422,x:257.1,y:133.2}).wait(1).to({graphics:mask_graphics_423,x:256.4,y:133.6}).wait(1).to({graphics:mask_graphics_424,x:255.6,y:134}).wait(1).to({graphics:mask_graphics_425,x:254.9,y:134.4}).wait(1).to({graphics:mask_graphics_426,x:254.1,y:134.8}).wait(1).to({graphics:mask_graphics_427,x:253.4,y:135.2}).wait(1).to({graphics:mask_graphics_428,x:252.6,y:135.6}).wait(1).to({graphics:mask_graphics_429,x:251.9,y:135.9}).wait(1).to({graphics:mask_graphics_430,x:251.1,y:136.3}).wait(1).to({graphics:mask_graphics_431,x:250.3,y:136.6}).wait(1).to({graphics:mask_graphics_432,x:249.5,y:137}).wait(1).to({graphics:mask_graphics_433,x:248.8,y:137.3}).wait(1).to({graphics:mask_graphics_434,x:248,y:137.6}).wait(1).to({graphics:mask_graphics_435,x:247.2,y:138}).wait(1).to({graphics:mask_graphics_436,x:246.4,y:138.3}).wait(1).to({graphics:mask_graphics_437,x:245.8,y:138.6}).wait(1).to({graphics:mask_graphics_438,x:245.2,y:138.8}).wait(1).to({graphics:mask_graphics_439,x:244.5,y:139}).wait(1).to({graphics:mask_graphics_440,x:243.9,y:139.3}).wait(1).to({graphics:mask_graphics_441,x:243.3,y:139.5}).wait(1).to({graphics:mask_graphics_442,x:242.7,y:139.7}).wait(1).to({graphics:mask_graphics_443,x:242,y:140}).wait(1).to({graphics:mask_graphics_444,x:241.4,y:140.2}).wait(1).to({graphics:mask_graphics_445,x:240.8,y:140.4}).wait(1).to({graphics:mask_graphics_446,x:240.2,y:140.6}).wait(1).to({graphics:mask_graphics_447,x:239.5,y:140.8}).wait(1).to({graphics:mask_graphics_448,x:238.9,y:141}).wait(1).to({graphics:mask_graphics_449,x:238.3,y:141.2}).wait(1).to({graphics:mask_graphics_450,x:237.6,y:141.4}).wait(1).to({graphics:mask_graphics_451,x:237,y:141.6}).wait(1).to({graphics:mask_graphics_452,x:236.3,y:141.8}).wait(1).to({graphics:mask_graphics_453,x:235.7,y:142}).wait(1).to({graphics:mask_graphics_454,x:235.1,y:142.1}).wait(1).to({graphics:mask_graphics_455,x:234.4,y:142.3}).wait(1).to({graphics:mask_graphics_456,x:233.8,y:142.5}).wait(1).to({graphics:mask_graphics_457,x:233.2,y:142.6}).wait(1).to({graphics:mask_graphics_458,x:232.3,y:142.9}).wait(1).to({graphics:mask_graphics_459,x:231.4,y:143.1}).wait(1).to({graphics:mask_graphics_460,x:230.5,y:143.3}).wait(1).to({graphics:mask_graphics_461,x:229.6,y:143.5}).wait(1).to({graphics:mask_graphics_462,x:228.7,y:143.6}).wait(1).to({graphics:mask_graphics_463,x:227.8,y:143.8}).wait(1).to({graphics:mask_graphics_464,x:226.9,y:144}).wait(1).to({graphics:mask_graphics_465,x:226,y:144.1}).wait(1).to({graphics:mask_graphics_466,x:225.1,y:144.3}).wait(1).to({graphics:mask_graphics_467,x:224.1,y:144.4}).wait(1).to({graphics:mask_graphics_468,x:223.2,y:144.5}).wait(1).to({graphics:mask_graphics_469,x:222.3,y:144.7}).wait(1).to({graphics:mask_graphics_470,x:221.4,y:144.8}).wait(1).to({graphics:mask_graphics_471,x:220.5,y:144.9}).wait(1).to({graphics:mask_graphics_472,x:219.5,y:144.9}).wait(1).to({graphics:mask_graphics_473,x:218.6,y:145}).wait(1).to({graphics:mask_graphics_474,x:217.6,y:145.1}).wait(1).to({graphics:mask_graphics_475,x:216.6,y:145.2}).wait(1).to({graphics:mask_graphics_476,x:215.7,y:145.3}).wait(1).to({graphics:mask_graphics_477,x:214.7,y:145.3}).wait(1).to({graphics:mask_graphics_478,x:213.7,y:145.3}).wait(1).to({graphics:mask_graphics_479,x:212.8,y:145.4}).wait(1).to({graphics:mask_graphics_480,x:212.4,y:145.4}).wait(1).to({graphics:mask_graphics_481,x:213.4,y:145.4}).wait(1).to({graphics:mask_graphics_482,x:214.3,y:145.4}).wait(1).to({graphics:mask_graphics_483,x:215.3,y:145.5}).wait(1).to({graphics:mask_graphics_484,x:216.3,y:145.5}).wait(1).to({graphics:mask_graphics_485,x:217.3,y:145.6}).wait(1).to({graphics:mask_graphics_486,x:218.2,y:145.7}).wait(1).to({graphics:mask_graphics_487,x:219.2,y:145.8}).wait(1).to({graphics:mask_graphics_488,x:220.2,y:145.9}).wait(1).to({graphics:mask_graphics_489,x:221.1,y:146}).wait(1).to({graphics:mask_graphics_490,x:222.1,y:146.1}).wait(1).to({graphics:mask_graphics_491,x:223.1,y:146.2}).wait(1).to({graphics:mask_graphics_492,x:224,y:146.3}).wait(1).to({graphics:mask_graphics_493,x:224.8,y:146.4}).wait(1).to({graphics:mask_graphics_494,x:225.6,y:146.5}).wait(1).to({graphics:mask_graphics_495,x:226.4,y:146.6}).wait(1).to({graphics:mask_graphics_496,x:227.2,y:146.8}).wait(1).to({graphics:mask_graphics_497,x:228,y:146.9}).wait(1).to({graphics:mask_graphics_498,x:228.8,y:147.1}).wait(1).to({graphics:mask_graphics_499,x:229.6,y:147.2}).wait(1).to({graphics:mask_graphics_500,x:230.4,y:147.4}).wait(1).to({graphics:mask_graphics_501,x:231.2,y:147.6}).wait(1).to({graphics:mask_graphics_502,x:232,y:147.7}).wait(1).to({graphics:mask_graphics_503,x:232.8,y:147.9}).wait(1).to({graphics:mask_graphics_504,x:233.6,y:148.1}).wait(1).to({graphics:mask_graphics_505,x:234.4,y:148.3}).wait(1).to({graphics:mask_graphics_506,x:235.2,y:148.5}).wait(1).to({graphics:mask_graphics_507,x:236,y:148.7}).wait(1).to({graphics:mask_graphics_508,x:236.7,y:148.9}).wait(1).to({graphics:mask_graphics_509,x:237.5,y:149.1}).wait(1).to({graphics:mask_graphics_510,x:238.3,y:149.4}).wait(1).to({graphics:mask_graphics_511,x:239.1,y:149.6}).wait(1).to({graphics:mask_graphics_512,x:239.9,y:149.9}).wait(1).to({graphics:mask_graphics_513,x:244.4,y:151.4}).wait(1).to({graphics:mask_graphics_514,x:248.8,y:153.1}).wait(76));

	// Layer 33
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(20,1,1).p("Amsl7QAXA+AaBkQAaBjBLDRQBLDSCMA4QCLA4CWhRQCXhSA0hL");
	this.shape_1.setTransform(418.9,243.9);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(409).to({_off:false},0).wait(181));

	// Layer 37
	this.instance_2 = new lib.ar6("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(294,251.4,1,1,1.5,0,0,-1,1.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(259).to({_off:false},0).wait(331));

	// Layer 32 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_337 = new cjs.Graphics().p("AQEWtIBPhUIFcFKIhPBUg");
	var mask_1_graphics_338 = new cjs.Graphics().p("AjehwIBihoIFbFJIhiBog");
	var mask_1_graphics_339 = new cjs.Graphics().p("AjohmIB1h8IFcFJIh1B8g");
	var mask_1_graphics_340 = new cjs.Graphics().p("AjxhcICIiQIFbFJIiICQg");
	var mask_1_graphics_341 = new cjs.Graphics().p("Aj7hSICbikIFbFJIiaCkg");
	var mask_1_graphics_342 = new cjs.Graphics().p("AkEhIICti4IFcFJIitC4g");
	var mask_1_graphics_343 = new cjs.Graphics().p("AkOg+IDBjMIFcFJIjBDMg");
	var mask_1_graphics_344 = new cjs.Graphics().p("AkXg0IDTjgIFcFJIjTDgg");
	var mask_1_graphics_345 = new cjs.Graphics().p("AkhgqIDnj0IFcFJIjnD0g");
	var mask_1_graphics_346 = new cjs.Graphics().p("AkqggID6kIIFbFJIj5EIg");
	var mask_1_graphics_347 = new cjs.Graphics().p("AkzgXIEMkbIFbFKIkMEag");
	var mask_1_graphics_348 = new cjs.Graphics().p("Ak9gNIEfkuIFcFIIkfEvg");
	var mask_1_graphics_349 = new cjs.Graphics().p("AlGgDIEylCIFbFIIkyFDg");
	var mask_1_graphics_350 = new cjs.Graphics().p("AlQAGIFFlWIFcFKIlFFWg");
	var mask_1_graphics_351 = new cjs.Graphics().p("AlZARIFYlrIFbFKIlYFrg");
	var mask_1_graphics_352 = new cjs.Graphics().p("AljAbIFql/IFdFKIlqF/g");
	var mask_1_graphics_353 = new cjs.Graphics().p("AlsAlIF8mTIFdFKIl8GTg");
	var mask_1_graphics_354 = new cjs.Graphics().p("Al2AvIGQmnIFdFKImQGng");
	var mask_1_graphics_355 = new cjs.Graphics().p("Al/A5IGjm7IFcFKImiG7g");
	var mask_1_graphics_356 = new cjs.Graphics().p("AmJBDIG2nPIFdFKIm2HPg");
	var mask_1_graphics_357 = new cjs.Graphics().p("AmSBNIHJnjIFcFKInIHjg");
	var mask_1_graphics_358 = new cjs.Graphics().p("AmcBXIHcn3IFcFKInbH3g");
	var mask_1_graphics_359 = new cjs.Graphics().p("AmlBhIHuoLIFdFKInuILg");
	var mask_1_graphics_360 = new cjs.Graphics().p("AmuBrIIBofIFcFKIoBIfg");
	var mask_1_graphics_361 = new cjs.Graphics().p("Am4B1IIUozIFdFKIoUIzg");
	var mask_1_graphics_362 = new cjs.Graphics().p("AnBB/IInpHIFcFKIonJHg");
	var mask_1_graphics_363 = new cjs.Graphics().p("AnLCJII6pbIFdFKIo6Jbg");
	var mask_1_graphics_364 = new cjs.Graphics().p("AnUCTIJNpvIFcFKIpNJvg");
	var mask_1_graphics_365 = new cjs.Graphics().p("AneCcIJgqBIFdFJIpgKDg");
	var mask_1_graphics_366 = new cjs.Graphics().p("AnnCmIJzqWIFcFLIpzKWg");
	var mask_1_graphics_367 = new cjs.Graphics().p("AnxCwIKGqqIFdFLIqGKqg");
	var mask_1_graphics_368 = new cjs.Graphics().p("An6C6IKZq9IFcFKIqZK+g");
	var mask_1_graphics_369 = new cjs.Graphics().p("AoEDEIKsrRIFdFJIqsLTg");
	var mask_1_graphics_370 = new cjs.Graphics().p("AoNDOIK/rmIFcFKIq/Lng");
	var mask_1_graphics_371 = new cjs.Graphics().p("AoWDYILRr6IFdFLIrSL6g");
	var mask_1_graphics_372 = new cjs.Graphics().p("AogDiILlsNIFcFKIrlMOg");
	var mask_1_graphics_373 = new cjs.Graphics().p("AopDsIL3shIFcFJIr3Mjg");
	var mask_1_graphics_374 = new cjs.Graphics().p("AozD2IMKs1IFdFJIsLM3g");
	var mask_1_graphics_375 = new cjs.Graphics().p("Ao8EAIMdtKIFcFLIsdNKg");
	var mask_1_graphics_376 = new cjs.Graphics().p("ApGEKIMwteIFdFLIsxNeg");
	var mask_1_graphics_377 = new cjs.Graphics().p("ApPEUINDtxIFcFKItDNyg");
	var mask_1_graphics_378 = new cjs.Graphics().p("ApZEeINWuFIFdFJItWOHg");
	var mask_1_graphics_379 = new cjs.Graphics().p("ApiEpINpubIFcFKItpObg");
	var mask_1_graphics_380 = new cjs.Graphics().p("ApsEzIN8uvIFdFKIt8Ovg");
	var mask_1_graphics_381 = new cjs.Graphics().p("Ap1E9IOPvDIFcFKIuPPDg");
	var mask_1_graphics_382 = new cjs.Graphics().p("Ap/FHIOivXIFdFKIuiPXg");
	var mask_1_graphics_383 = new cjs.Graphics().p("AqIFRIO1vrIFcFLIu1Ppg");
	var mask_1_graphics_384 = new cjs.Graphics().p("AqRFbIPHv+IFcFKIvHP9g");
	var mask_1_graphics_385 = new cjs.Graphics().p("AqbFlIPawSIFdFJIvbQSg");
	var mask_1_graphics_386 = new cjs.Graphics().p("AqkFvIPtwnIFcFKIvtQmg");
	var mask_1_graphics_387 = new cjs.Graphics().p("AquF5IQAw7IFdFLIwBQ5g");
	var mask_1_graphics_388 = new cjs.Graphics().p("Aq3GDIQTxOIFdFKIwURNg");
	var mask_1_graphics_389 = new cjs.Graphics().p("ArBGNIQmxiIFdFJIwmRig");
	var mask_1_graphics_390 = new cjs.Graphics().p("ArKGXIQ5x2IFcFJIw5R2g");
	var mask_1_graphics_391 = new cjs.Graphics().p("ArUGhIRMyLIFdFLIxMSJg");
	var mask_1_graphics_392 = new cjs.Graphics().p("AH7WtIRgyfIFdFKIxgSfg");
	var mask_1_graphics_393 = new cjs.Graphics().p("Ar4HHISVzXIFcFKIyVTXg");
	var mask_1_graphics_394 = new cjs.Graphics().p("AHFWtITM0RIFdFKIzMURg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(337).to({graphics:mask_1_graphics_337,x:145.5,y:178.3}).wait(1).to({graphics:mask_1_graphics_338,x:270.7,y:334.8}).wait(1).to({graphics:mask_1_graphics_339,x:271.6,y:333.8}).wait(1).to({graphics:mask_1_graphics_340,x:272.6,y:332.8}).wait(1).to({graphics:mask_1_graphics_341,x:273.5,y:331.8}).wait(1).to({graphics:mask_1_graphics_342,x:274.5,y:330.8}).wait(1).to({graphics:mask_1_graphics_343,x:275.4,y:329.8}).wait(1).to({graphics:mask_1_graphics_344,x:276.4,y:328.8}).wait(1).to({graphics:mask_1_graphics_345,x:277.3,y:327.8}).wait(1).to({graphics:mask_1_graphics_346,x:278.3,y:326.8}).wait(1).to({graphics:mask_1_graphics_347,x:279.2,y:325.9}).wait(1).to({graphics:mask_1_graphics_348,x:280.1,y:324.9}).wait(1).to({graphics:mask_1_graphics_349,x:281.1,y:323.9}).wait(1).to({graphics:mask_1_graphics_350,x:282,y:322.9}).wait(1).to({graphics:mask_1_graphics_351,x:283,y:321.9}).wait(1).to({graphics:mask_1_graphics_352,x:283.9,y:320.9}).wait(1).to({graphics:mask_1_graphics_353,x:284.9,y:319.9}).wait(1).to({graphics:mask_1_graphics_354,x:285.8,y:318.9}).wait(1).to({graphics:mask_1_graphics_355,x:286.8,y:317.9}).wait(1).to({graphics:mask_1_graphics_356,x:287.7,y:316.9}).wait(1).to({graphics:mask_1_graphics_357,x:288.7,y:315.9}).wait(1).to({graphics:mask_1_graphics_358,x:289.6,y:314.9}).wait(1).to({graphics:mask_1_graphics_359,x:290.5,y:313.9}).wait(1).to({graphics:mask_1_graphics_360,x:291.5,y:312.9}).wait(1).to({graphics:mask_1_graphics_361,x:292.4,y:311.9}).wait(1).to({graphics:mask_1_graphics_362,x:293.4,y:310.9}).wait(1).to({graphics:mask_1_graphics_363,x:294.3,y:309.9}).wait(1).to({graphics:mask_1_graphics_364,x:295.3,y:308.9}).wait(1).to({graphics:mask_1_graphics_365,x:296.2,y:307.9}).wait(1).to({graphics:mask_1_graphics_366,x:297.1,y:306.9}).wait(1).to({graphics:mask_1_graphics_367,x:298.1,y:305.9}).wait(1).to({graphics:mask_1_graphics_368,x:299,y:304.9}).wait(1).to({graphics:mask_1_graphics_369,x:300,y:303.9}).wait(1).to({graphics:mask_1_graphics_370,x:300.9,y:302.9}).wait(1).to({graphics:mask_1_graphics_371,x:301.9,y:301.9}).wait(1).to({graphics:mask_1_graphics_372,x:302.8,y:300.9}).wait(1).to({graphics:mask_1_graphics_373,x:303.8,y:299.9}).wait(1).to({graphics:mask_1_graphics_374,x:304.7,y:298.9}).wait(1).to({graphics:mask_1_graphics_375,x:305.7,y:297.9}).wait(1).to({graphics:mask_1_graphics_376,x:306.6,y:296.9}).wait(1).to({graphics:mask_1_graphics_377,x:307.5,y:295.9}).wait(1).to({graphics:mask_1_graphics_378,x:308.5,y:294.9}).wait(1).to({graphics:mask_1_graphics_379,x:309.4,y:293.9}).wait(1).to({graphics:mask_1_graphics_380,x:310.4,y:292.9}).wait(1).to({graphics:mask_1_graphics_381,x:311.3,y:291.9}).wait(1).to({graphics:mask_1_graphics_382,x:312.3,y:290.9}).wait(1).to({graphics:mask_1_graphics_383,x:313.2,y:290}).wait(1).to({graphics:mask_1_graphics_384,x:314.2,y:289}).wait(1).to({graphics:mask_1_graphics_385,x:315.1,y:288}).wait(1).to({graphics:mask_1_graphics_386,x:316.1,y:287}).wait(1).to({graphics:mask_1_graphics_387,x:317,y:286}).wait(1).to({graphics:mask_1_graphics_388,x:318,y:285}).wait(1).to({graphics:mask_1_graphics_389,x:318.9,y:284}).wait(1).to({graphics:mask_1_graphics_390,x:319.8,y:283}).wait(1).to({graphics:mask_1_graphics_391,x:320.8,y:282}).wait(1).to({graphics:mask_1_graphics_392,x:197.6,y:178.3}).wait(1).to({graphics:mask_1_graphics_393,x:324.5,y:278.1}).wait(1).to({graphics:mask_1_graphics_394,x:203,y:178.3}).wait(196));

	// Layer 31
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(20,1,1).p("ApLjsQgsB0gVAvQhDCTg+CKQg+CLAUBwQATBxBAArQA/AqBtAPQBtAPBpguQBqguBlhVQBlhWB+iBQB+iCBdhsQBdhqBChTQBChTBChoQBBhoBHhjQBIhjAfg+");
	this.shape_2.setTransform(292.2,280.4);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(337).to({_off:false},0).wait(253));

	// Layer 30 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_316 = new cjs.Graphics().p("AGqVfQgukLCcjcQCbjdEKgvQEFgtDaCVIrwQqQjViagtkFg");
	var mask_2_graphics_317 = new cjs.Graphics().p("AHEV8Qg+kHCNjnQCNjmEHg/QEBg+DjCHIqrRYQjeiNg+kBg");
	var mask_2_graphics_318 = new cjs.Graphics().p("AHiWZQhPkCB+jvQB+jvEChQQD+hODqB4IpiSBQjnh+hOj9g");
	var mask_2_graphics_319 = new cjs.Graphics().p("AIDW3Qhgj9Bvj3QBvj2D8hgQD4heDxBpIoXSlQjuhvhej3g");
	var mask_2_graphics_320 = new cjs.Graphics().p("AImXVQhvj3Bfj9QBfj9D2hvQDxhuD4BZInLTGQj1hhhujwg");
	var mask_2_graphics_321 = new cjs.Graphics().p("AJNXzQh/jvBPkDQBOkCDvh/QDqh9D8BJIl8TgQj7hQh8jpg");
	var mask_2_graphics_322 = new cjs.Graphics().p("AJ2YRQiOjnA+kHQA/kHDliNQDiiMEBA5IktT2Qj/hAiLjhg");
	var mask_2_graphics_323 = new cjs.Graphics().p("AKiYuQidjcAukLQAtkKDdicQDYiZEDAoIjbUGQkCgwiZjYg");
	var mask_2_graphics_324 = new cjs.Graphics().p("ALQZMQiqjSAckNQAckNDSiqQDOimEGAYIiJURQkFgfimjOg");
	var mask_2_graphics_325 = new cjs.Graphics().p("AMAZpQi3jHALkOQALkODHi3QDDizEHAHIg2UYQkHgPizjDg");
	var mask_2_graphics_326 = new cjs.Graphics().p("AMjaGQjDi7gGkOQgGkOC7jEQC3i/EHgKIAdUZIgGAAQkDAAi+i1g");
	var mask_2_graphics_327 = new cjs.Graphics().p("AMuahQjPiugXkNQgXkOCujOQCrjLEFgaIBwUUQgaACgZAAQjoAAi2iag");
	var mask_2_graphics_328 = new cjs.Graphics().p("AM6a6QjZiggokMQgokLCgjZQCdjVEEgrIDCUKQgwAHguAAQjOAAiuiBg");
	var mask_2_graphics_329 = new cjs.Graphics().p("ANIbRQjjiSg5kJQg5kICSjjQCQjeEAg8IETT8QhEANhCAAQi3AAijhpg");
	var mask_2_graphics_330 = new cjs.Graphics().p("ANYbmQjsiEhKkEQhKkECEjsQCBjnD8hLIFkTnQhYAXhVAAQihAAiXhUg");
	var mask_2_graphics_331 = new cjs.Graphics().p("ANpb5Qj0h1haj/Qhaj/B0jzQByjvD3hcIGzTOQhqAkhoAAQiNAAiJhBg");
	var mask_2_graphics_332 = new cjs.Graphics().p("AN7cJQj6hlhqj5Qhqj4Bkj7QBjj2DwhqIIBSvQh7Azh7AAQh5AAh7gxg");
	var mask_2_graphics_333 = new cjs.Graphics().p("AOQcXQkBhVh6jyQh5jxBUkAQBTj8Dph6IJMSNQiKBDiPAAQhmAAhpgig");
	var mask_2_graphics_334 = new cjs.Graphics().p("AOlciQkFhEiJjpQiJjqBEkFQBDkADhiIIKURlQiXBWijAAQhUAAhXgXg");
	var mask_2_graphics_335 = new cjs.Graphics().p("AO8crQkJg0iYjgQiXjfAzkKQAzkEDYiWILaQ5QijBri5AAQhBAAhDgNg");
	var mask_2_graphics_336 = new cjs.Graphics().p("APUcxQkMgiiljWQiljWAikMQAikHDNijIMeQIQiuCCjRAAQgsAAgugGg");
	var mask_2_graphics_337 = new cjs.Graphics().p("APtc1QkOgSiyjLQizjKASkOQARkIDDixINdPUQi2CbjrAAIgvgBg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(316).to({graphics:mask_2_graphics_316,x:143.6,y:179}).wait(1).to({graphics:mask_2_graphics_317,x:141.9,y:180.2}).wait(1).to({graphics:mask_2_graphics_318,x:140.1,y:181.2}).wait(1).to({graphics:mask_2_graphics_319,x:138.2,y:182.1}).wait(1).to({graphics:mask_2_graphics_320,x:136.4,y:183}).wait(1).to({graphics:mask_2_graphics_321,x:134.4,y:183.6}).wait(1).to({graphics:mask_2_graphics_322,x:132.5,y:184.2}).wait(1).to({graphics:mask_2_graphics_323,x:130.4,y:184.6}).wait(1).to({graphics:mask_2_graphics_324,x:128.4,y:184.9}).wait(1).to({graphics:mask_2_graphics_325,x:126.4,y:185.1}).wait(1).to({graphics:mask_2_graphics_326,x:125.8,y:185.1}).wait(1).to({graphics:mask_2_graphics_327,x:127.9,y:185.1}).wait(1).to({graphics:mask_2_graphics_328,x:130,y:185.1}).wait(1).to({graphics:mask_2_graphics_329,x:132,y:185}).wait(1).to({graphics:mask_2_graphics_330,x:134.1,y:185}).wait(1).to({graphics:mask_2_graphics_331,x:136.1,y:185}).wait(1).to({graphics:mask_2_graphics_332,x:138.1,y:185}).wait(1).to({graphics:mask_2_graphics_333,x:140,y:184.9}).wait(1).to({graphics:mask_2_graphics_334,x:141.8,y:184.9}).wait(1).to({graphics:mask_2_graphics_335,x:143.6,y:184.8}).wait(1).to({graphics:mask_2_graphics_336,x:145.3,y:184.7}).wait(1).to({graphics:mask_2_graphics_337,x:146.9,y:184.6}).wait(253));

	// Layer 29
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(20,1,1).p("ApLjsQgsB0gVAvQhDCTg+CKQg+CLAUBwQATBxBAArQA/AqBtAPQBtAPBpguQBqguBlhVQBlhWB+iBQB+iCBdhsQBdhqBChTQBChTBChoQBBhoBHhjQBIhjAfg+");
	this.shape_3.setTransform(292.2,280.4);
	this.shape_3._off = true;

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(316).to({_off:false},0).wait(274));

	// Layer 28 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_283 = new cjs.Graphics().p("AvHDkQFuqtLljhQLojiKtFtQKuFuDgLmQDjLnluKtg");
	var mask_3_graphics_284 = new cjs.Graphics().p("AveEnQFbq2Lfj1QLhj2K3FbQK3FbD1LgQD3LglcK3g");
	var mask_3_graphics_285 = new cjs.Graphics().p("Av0FsQFIrALYkJQLakJLAFIQLAFIEJLZQEKLZlILBg");
	var mask_3_graphics_286 = new cjs.Graphics().p("AwJGxQE1rILRkcQLTkeLIE2QLJE1EcLRQEeLSk2LJg");
	var mask_3_graphics_287 = new cjs.Graphics().p("AwcH3QEirQLJkwQLKkwLREiQLQEiEwLJQExLKkiLRg");
	var mask_3_graphics_288 = new cjs.Graphics().p("AwvI+QEPrYLBlDQLBlDLZEOQLYEPFCLBQFELBkOLYg");
	var mask_3_graphics_289 = new cjs.Graphics().p("AxAKFQD7reK4lWQK5lXLfD7QLfD7FWK4QFXK5j7Lfg");
	var mask_3_graphics_290 = new cjs.Graphics().p("AxPLNQDnrlKuloQKwlpLlDnQLmDnFoKvQFpKujnLmg");
	var mask_3_graphics_291 = new cjs.Graphics().p("AxdMWQDTrsKkl5QKll8LsDTQLsDTF6KlQF8KkjTLsg");
	var mask_3_graphics_292 = new cjs.Graphics().p("AxqNfQC/rxKamMQKamNLxC+QLxC/GNKbQGOKai/Lxg");
	var mask_3_graphics_293 = new cjs.Graphics().p("Ax1OpQCqr2KPmdQKQmgL2CqQL1CrGfKPQGfKQiqL1g");
	var mask_3_graphics_294 = new cjs.Graphics().p("AyAPzQCWr6KEmvQKEmxL7CWQL6CWGvKEQGyKEiWL6g");
	var mask_3_graphics_295 = new cjs.Graphics().p("AyIQ+QCBr+J4nAQJ4nDL+CCQL+CBHBJ5QHCJ4iBL9g");
	var mask_3_graphics_296 = new cjs.Graphics().p("AyQSJQBtsBJsnRQJsnTMBBsQMBBtHRJsQHUJshtMBg");
	var mask_3_graphics_297 = new cjs.Graphics().p("AyWTUQBYsEJfnhQJfnkMEBYQMEBYHiJfQHkJfhZMEg");
	var mask_3_graphics_298 = new cjs.Graphics().p("AyaUOQBIsFJVnvQJVnvMFBIQMFBHHvJVQHxJVhIMFg");
	var mask_3_graphics_299 = new cjs.Graphics().p("AydVJQA4sGJKn8QJKn8MHA4QMHA4H7JKQH9JKg4MHg");
	var mask_3_graphics_300 = new cjs.Graphics().p("AyfWEQAnsHI/oIQJAoIMIAnQMHAoIII/QIJI/gnMIg");
	var mask_3_graphics_301 = new cjs.Graphics().p("AyhXAQAXsJI0oTQI2oUMHAXQMJAXITI0QIVI0gXMJg");
	var mask_3_graphics_302 = new cjs.Graphics().p("AyhX7QAGsJIpofQIqogMIAHQMJAGIfIqQIhIogHMJg");
	var mask_3_graphics_303 = new cjs.Graphics().p("AqODrQIforMIgKQMIgJIrIdQItIeAJMIMg6jAAvQgKsJIdorg");
	var mask_3_graphics_304 = new cjs.Graphics().p("AqpD0QITo3MIgZQMIgaI2ISQI4IRAaMIMg6iAB9QgasIIRo2g");
	var mask_3_graphics_305 = new cjs.Graphics().p("ArCD+QIHpCMGgqQMIgrJBIGQJDIGAqMHMg6fADMQgqsHIGpBg");
	var mask_3_graphics_306 = new cjs.Graphics().p("ArbEIQH7pNMFg6QMHg7JMH6QJNH5A7MHMg6aAEaQg6sHH5pLg");
	var mask_3_graphics_307 = new cjs.Graphics().p("ArzESQHupXMFhKQMFhLJWHtQJYHtBLMFMg6TAFpQhLsFHtpXg");
	var mask_3_graphics_308 = new cjs.Graphics().p("AsJEdQHhphMChbQMEhbJhHiQJiHfBbMDMg6LAG4QhbsEHhphg");
	var mask_3_graphics_309 = new cjs.Graphics().p("AsfEpQHUprMBhrQMBhrJrHUQJsHSBrMCMg6AAIFQhrsBHTprg");
	var mask_3_graphics_310 = new cjs.Graphics().p("As0E2QHIp1L+h8QL/h7J0HIQJ2HEB7L/Mg50AJUQh8r/HGp0g");
	var mask_3_graphics_311 = new cjs.Graphics().p("AtHFCQG6p+L7iLQL9iMJ+G6QJ/G4CLL8Mg5nAKhQiMr8G5p+g");
	var mask_3_graphics_312 = new cjs.Graphics().p("AtZFQQGsqIL4ibQL6icKHGtQKIGqCbL5Mg5YALvQicr5GsqHg");
	var mask_3_graphics_313 = new cjs.Graphics().p("AtrFeQGfqRL1irQL2irKQGfQKRGcCrL2Mg5IAM7Qirr2GdqPg");
	var mask_3_graphics_314 = new cjs.Graphics().p("At7FsQGRqZLxi7QLyi7KZGRQKZGOC8LyMg42AOIQi8ryGQqYg");
	var mask_3_graphics_315 = new cjs.Graphics().p("AuKF7QGDqhLtjLQLujLKhGDQKiGADLLuMg4jAPVQjLruGCqhg");
	var mask_3_graphics_316 = new cjs.Graphics().p("AuYGLQF1qqLojaQLqjbKpF1QKqFyDaLqMg4NAQgQjarqFzqog");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(283).to({graphics:mask_3_graphics_283,x:256.6,y:199.3}).wait(1).to({graphics:mask_3_graphics_284,x:256.6,y:197.1}).wait(1).to({graphics:mask_3_graphics_285,x:256.6,y:194.9}).wait(1).to({graphics:mask_3_graphics_286,x:256.6,y:192.6}).wait(1).to({graphics:mask_3_graphics_287,x:256.6,y:190.3}).wait(1).to({graphics:mask_3_graphics_288,x:256.6,y:187.9}).wait(1).to({graphics:mask_3_graphics_289,x:256.6,y:185.6}).wait(1).to({graphics:mask_3_graphics_290,x:256.6,y:183.2}).wait(1).to({graphics:mask_3_graphics_291,x:256.5,y:180.8}).wait(1).to({graphics:mask_3_graphics_292,x:256.5,y:178.4}).wait(1).to({graphics:mask_3_graphics_293,x:256.5,y:175.9}).wait(1).to({graphics:mask_3_graphics_294,x:256.4,y:173.5}).wait(1).to({graphics:mask_3_graphics_295,x:256.4,y:171}).wait(1).to({graphics:mask_3_graphics_296,x:256.3,y:168.6}).wait(1).to({graphics:mask_3_graphics_297,x:256.3,y:166.1}).wait(1).to({graphics:mask_3_graphics_298,x:256.3,y:164.1}).wait(1).to({graphics:mask_3_graphics_299,x:256.3,y:162.2}).wait(1).to({graphics:mask_3_graphics_300,x:256.2,y:160.2}).wait(1).to({graphics:mask_3_graphics_301,x:256.2,y:158.3}).wait(1).to({graphics:mask_3_graphics_302,x:256.2,y:156.3}).wait(1).to({graphics:mask_3_graphics_303,x:256.2,y:156.7}).wait(1).to({graphics:mask_3_graphics_304,x:256.2,y:158.6}).wait(1).to({graphics:mask_3_graphics_305,x:256.1,y:160.6}).wait(1).to({graphics:mask_3_graphics_306,x:256,y:162.6}).wait(1).to({graphics:mask_3_graphics_307,x:255.8,y:164.6}).wait(1).to({graphics:mask_3_graphics_308,x:255.6,y:166.6}).wait(1).to({graphics:mask_3_graphics_309,x:255.3,y:168.5}).wait(1).to({graphics:mask_3_graphics_310,x:255,y:170.5}).wait(1).to({graphics:mask_3_graphics_311,x:254.7,y:172.4}).wait(1).to({graphics:mask_3_graphics_312,x:254.3,y:174.4}).wait(1).to({graphics:mask_3_graphics_313,x:253.9,y:176.3}).wait(1).to({graphics:mask_3_graphics_314,x:253.5,y:178.2}).wait(1).to({graphics:mask_3_graphics_315,x:253,y:180.2}).wait(1).to({graphics:mask_3_graphics_316,x:252.4,y:182.1}).wait(274));

	// Layer 17
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(20,1,1).p("AgpnJQgsB0gVAuQhDCVg+CKQg/CJAUBxQAUBxA/AqQA/ArBuAPQBsAOBpguQAvgUAugc");
	this.shape_4.setTransform(237.6,302.5);
	this.shape_4._off = true;

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(283).to({_off:false},0).wait(307));

	// Layer 36
	this.instance_3 = new lib.ar6("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(181,250.7,1,1,4.6,0,0,-1.1,1.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(90).to({_off:false},0).wait(500));

	// Layer 27 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_173 = new cjs.Graphics().p("AGsYSIBmhuIEXEBIhmBvg");
	var mask_4_graphics_174 = new cjs.Graphics().p("AjGg/IB3iBIEWEAIh3CBg");
	var mask_4_graphics_175 = new cjs.Graphics().p("AjPg2ICJiTIEWEAIiJCUg");
	var mask_4_graphics_176 = new cjs.Graphics().p("AjXgtICZimIEWEBIiZCmg");
	var mask_4_graphics_177 = new cjs.Graphics().p("AjggjICri5IEWEAIirC5g");
	var mask_4_graphics_178 = new cjs.Graphics().p("AjogaIC7jMIEWEBIi7DMg");
	var mask_4_graphics_179 = new cjs.Graphics().p("AjxgRIDNjeIEWEBIjNDeg");
	var mask_4_graphics_180 = new cjs.Graphics().p("Aj6gIIDejwIEWEAIjeDxg");
	var mask_4_graphics_181 = new cjs.Graphics().p("AkCABIDvkCIEWEBIjvECg");
	var mask_4_graphics_182 = new cjs.Graphics().p("AkLAKIEBkVIEWECIkBEVg");
	var mask_4_graphics_183 = new cjs.Graphics().p("AkTATIERknIEWECIkREng");
	var mask_4_graphics_184 = new cjs.Graphics().p("AkcAcIEik5IEXEBIkiE6g");
	var mask_4_graphics_185 = new cjs.Graphics().p("AkkAmIEylMIEXEBIkyFNg");
	var mask_4_graphics_186 = new cjs.Graphics().p("AktAvIFElfIEXECIlEFfg");
	var mask_4_graphics_187 = new cjs.Graphics().p("Ak2A4IFVlxIEXECIlVFxg");
	var mask_4_graphics_188 = new cjs.Graphics().p("Ak+BCIFmmEIEXEBIlmGEg");
	var mask_4_graphics_189 = new cjs.Graphics().p("AlHBLIF3mWIEXEBIl3GXg");
	var mask_4_graphics_190 = new cjs.Graphics().p("AlPBUIGImpIEXECImIGpg");
	var mask_4_graphics_191 = new cjs.Graphics().p("AlYBdIGam7IEXECImaG7g");
	var mask_4_graphics_192 = new cjs.Graphics().p("AlgBnIGqnOIEXEBImqHOg");
	var mask_4_graphics_193 = new cjs.Graphics().p("AlpBwIG8nhIEXECIm8Hhg");
	var mask_4_graphics_194 = new cjs.Graphics().p("AlyB5IHOnzIEXEBInOH0g");
	var mask_4_graphics_195 = new cjs.Graphics().p("Al6CDIHeoGIEXEBIneIGg");
	var mask_4_graphics_196 = new cjs.Graphics().p("AmDCMIHwoZIEXECInwIZg");
	var mask_4_graphics_197 = new cjs.Graphics().p("AmLCVIIAorIEXECIoAIrg");
	var mask_4_graphics_198 = new cjs.Graphics().p("AmUCeIISo9IEXEBIoSI+g");
	var mask_4_graphics_199 = new cjs.Graphics().p("AmcCoIIipQIEXEBIoiJQg");
	var mask_4_graphics_200 = new cjs.Graphics().p("AmlCxII0pjIEXECIo0Jjg");
	var mask_4_graphics_201 = new cjs.Graphics().p("AmuC6IJFp1IEXECIpFJ1g");
	var mask_4_graphics_202 = new cjs.Graphics().p("Am2DEIJWqIIEXEBIpWKIg");
	var mask_4_graphics_203 = new cjs.Graphics().p("Am/DNIJoqaIEXEBIpoKbg");
	var mask_4_graphics_204 = new cjs.Graphics().p("AnHDWIJ4qtIEXECIp4Ktg");
	var mask_4_graphics_205 = new cjs.Graphics().p("AnQDfIKKq/IEXECIqKK/g");
	var mask_4_graphics_206 = new cjs.Graphics().p("AnYDpIKarSIEXEBIqaLSg");
	var mask_4_graphics_207 = new cjs.Graphics().p("AnhDyIKsrkIEXEBIqsLlg");
	var mask_4_graphics_208 = new cjs.Graphics().p("AnqD8IK9r4IEXEBIq9L4g");
	var mask_4_graphics_209 = new cjs.Graphics().p("AnyEFILOsKIEXEBIrOMKg");
	var mask_4_graphics_210 = new cjs.Graphics().p("An7EOILfsdIEXECIrfMdg");
	var mask_4_graphics_211 = new cjs.Graphics().p("AoDEYILwswIEXECIrwMvg");
	var mask_4_graphics_212 = new cjs.Graphics().p("AoMEhIMCtCIEXEBIsCNCg");
	var mask_4_graphics_213 = new cjs.Graphics().p("AoUEqIMStUIEXEBIsSNUg");
	var mask_4_graphics_214 = new cjs.Graphics().p("AodEzIMktnIEXECIskNng");
	var mask_4_graphics_215 = new cjs.Graphics().p("AomE9IM2t6IEXECIs2N5g");
	var mask_4_graphics_216 = new cjs.Graphics().p("AouFGINGuNIEXECItGOMg");
	var mask_4_graphics_217 = new cjs.Graphics().p("Ao3FPINYufIEXECItYOfg");
	var mask_4_graphics_218 = new cjs.Graphics().p("Ao/FZINouyIEXEBItoOyg");
	var mask_4_graphics_219 = new cjs.Graphics().p("ApIFiIN6vEIEXEBIt6PEg");
	var mask_4_graphics_220 = new cjs.Graphics().p("ApQFrIOKvXIEXECIuKPWg");
	var mask_4_graphics_221 = new cjs.Graphics().p("ApZF0IOcvpIEXECIucPpg");
	var mask_4_graphics_222 = new cjs.Graphics().p("AphF+IOsv8IEXEBIusP8g");
	var mask_4_graphics_223 = new cjs.Graphics().p("ApqGHIO+wPIEXECIu+QOg");
	var mask_4_graphics_224 = new cjs.Graphics().p("ApzGQIPQwhIEXECIvQQhg");
	var mask_4_graphics_225 = new cjs.Graphics().p("Ap7GaIPgw0IEXEBIvgQ0g");
	var mask_4_graphics_226 = new cjs.Graphics().p("AqEGjIPyxGIEXEBIvyRGg");
	var mask_4_graphics_227 = new cjs.Graphics().p("AqMGsIQCxYIEXEBIwCRYg");
	var mask_4_graphics_228 = new cjs.Graphics().p("AqVG1IQUxrIEXECIwURrg");
	var mask_4_graphics_229 = new cjs.Graphics().p("AqdG/IQkx+IEXECIwkR9g");
	var mask_4_graphics_230 = new cjs.Graphics().p("AqmHIIQ2yQIEXEBIw2SQg");
	var mask_4_graphics_231 = new cjs.Graphics().p("AqvHRIRHyjIEXECIxHSjg");
	var mask_4_graphics_232 = new cjs.Graphics().p("Aq3HbIRYy2IEXECIxYS1g");
	var mask_4_graphics_233 = new cjs.Graphics().p("ArAHkIRqzIIEXEBIxqTIg");
	var mask_4_graphics_234 = new cjs.Graphics().p("ArIHtIR6zbIEXECIx6Tag");
	var mask_4_graphics_235 = new cjs.Graphics().p("ArRH2ISMztIEXECIyMTtg");
	var mask_4_graphics_236 = new cjs.Graphics().p("ArZIAISc0AIEXEBIycUAg");
	var mask_4_graphics_237 = new cjs.Graphics().p("AriIJISu0SIEXEBIyuUSg");
	var mask_4_graphics_238 = new cjs.Graphics().p("ArrISITA0lIEXECIzAUkg");
	var mask_4_graphics_239 = new cjs.Graphics().p("ArzIcITQ04IEXEBIzQU4g");
	var mask_4_graphics_240 = new cjs.Graphics().p("Ar8IlITh1KIEXEBIzhVKg");
	var mask_4_graphics_241 = new cjs.Graphics().p("AsEIuITy1cIEXEBIzyVcg");
	var mask_4_graphics_242 = new cjs.Graphics().p("AijYSIUE1wIEXECI0EVwg");
	var mask_4_graphics_243 = new cjs.Graphics().p("AstJaIVE21IEXECI1EW1g");
	var mask_4_graphics_244 = new cjs.Graphics().p("AjkYSIWF38IEXECI2GX8g");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(173).to({graphics:mask_4_graphics_173,x:80.9,y:181.2}).wait(1).to({graphics:mask_4_graphics_174,x:143.6,y:343}).wait(1).to({graphics:mask_4_graphics_175,x:144.5,y:342.1}).wait(1).to({graphics:mask_4_graphics_176,x:145.3,y:341.1}).wait(1).to({graphics:mask_4_graphics_177,x:146.2,y:340.2}).wait(1).to({graphics:mask_4_graphics_178,x:147,y:339.3}).wait(1).to({graphics:mask_4_graphics_179,x:147.9,y:338.3}).wait(1).to({graphics:mask_4_graphics_180,x:148.8,y:337.4}).wait(1).to({graphics:mask_4_graphics_181,x:149.6,y:336.5}).wait(1).to({graphics:mask_4_graphics_182,x:150.5,y:335.6}).wait(1).to({graphics:mask_4_graphics_183,x:151.3,y:334.6}).wait(1).to({graphics:mask_4_graphics_184,x:152.2,y:333.7}).wait(1).to({graphics:mask_4_graphics_185,x:153,y:332.8}).wait(1).to({graphics:mask_4_graphics_186,x:153.9,y:331.8}).wait(1).to({graphics:mask_4_graphics_187,x:154.8,y:330.9}).wait(1).to({graphics:mask_4_graphics_188,x:155.6,y:330}).wait(1).to({graphics:mask_4_graphics_189,x:156.5,y:329.1}).wait(1).to({graphics:mask_4_graphics_190,x:157.3,y:328.1}).wait(1).to({graphics:mask_4_graphics_191,x:158.2,y:327.2}).wait(1).to({graphics:mask_4_graphics_192,x:159,y:326.3}).wait(1).to({graphics:mask_4_graphics_193,x:159.9,y:325.3}).wait(1).to({graphics:mask_4_graphics_194,x:160.8,y:324.4}).wait(1).to({graphics:mask_4_graphics_195,x:161.6,y:323.5}).wait(1).to({graphics:mask_4_graphics_196,x:162.5,y:322.6}).wait(1).to({graphics:mask_4_graphics_197,x:163.3,y:321.6}).wait(1).to({graphics:mask_4_graphics_198,x:164.2,y:320.7}).wait(1).to({graphics:mask_4_graphics_199,x:165,y:319.8}).wait(1).to({graphics:mask_4_graphics_200,x:165.9,y:318.8}).wait(1).to({graphics:mask_4_graphics_201,x:166.8,y:317.9}).wait(1).to({graphics:mask_4_graphics_202,x:167.6,y:317}).wait(1).to({graphics:mask_4_graphics_203,x:168.5,y:316.1}).wait(1).to({graphics:mask_4_graphics_204,x:169.3,y:315.1}).wait(1).to({graphics:mask_4_graphics_205,x:170.2,y:314.2}).wait(1).to({graphics:mask_4_graphics_206,x:171,y:313.3}).wait(1).to({graphics:mask_4_graphics_207,x:171.9,y:312.4}).wait(1).to({graphics:mask_4_graphics_208,x:172.8,y:311.4}).wait(1).to({graphics:mask_4_graphics_209,x:173.6,y:310.5}).wait(1).to({graphics:mask_4_graphics_210,x:174.5,y:309.6}).wait(1).to({graphics:mask_4_graphics_211,x:175.3,y:308.7}).wait(1).to({graphics:mask_4_graphics_212,x:176.2,y:307.7}).wait(1).to({graphics:mask_4_graphics_213,x:177,y:306.8}).wait(1).to({graphics:mask_4_graphics_214,x:177.9,y:305.9}).wait(1).to({graphics:mask_4_graphics_215,x:178.8,y:305}).wait(1).to({graphics:mask_4_graphics_216,x:179.6,y:304}).wait(1).to({graphics:mask_4_graphics_217,x:180.5,y:303.1}).wait(1).to({graphics:mask_4_graphics_218,x:181.3,y:302.2}).wait(1).to({graphics:mask_4_graphics_219,x:182.2,y:301.2}).wait(1).to({graphics:mask_4_graphics_220,x:183,y:300.3}).wait(1).to({graphics:mask_4_graphics_221,x:183.9,y:299.4}).wait(1).to({graphics:mask_4_graphics_222,x:184.7,y:298.5}).wait(1).to({graphics:mask_4_graphics_223,x:185.6,y:297.5}).wait(1).to({graphics:mask_4_graphics_224,x:186.5,y:296.6}).wait(1).to({graphics:mask_4_graphics_225,x:187.3,y:295.7}).wait(1).to({graphics:mask_4_graphics_226,x:188.2,y:294.7}).wait(1).to({graphics:mask_4_graphics_227,x:189,y:293.8}).wait(1).to({graphics:mask_4_graphics_228,x:189.9,y:292.9}).wait(1).to({graphics:mask_4_graphics_229,x:190.7,y:292}).wait(1).to({graphics:mask_4_graphics_230,x:191.6,y:291}).wait(1).to({graphics:mask_4_graphics_231,x:192.5,y:290.1}).wait(1).to({graphics:mask_4_graphics_232,x:193.3,y:289.2}).wait(1).to({graphics:mask_4_graphics_233,x:194.2,y:288.2}).wait(1).to({graphics:mask_4_graphics_234,x:195,y:287.3}).wait(1).to({graphics:mask_4_graphics_235,x:195.9,y:286.4}).wait(1).to({graphics:mask_4_graphics_236,x:196.7,y:285.5}).wait(1).to({graphics:mask_4_graphics_237,x:197.6,y:284.5}).wait(1).to({graphics:mask_4_graphics_238,x:198.5,y:283.6}).wait(1).to({graphics:mask_4_graphics_239,x:199.3,y:282.7}).wait(1).to({graphics:mask_4_graphics_240,x:200.2,y:281.7}).wait(1).to({graphics:mask_4_graphics_241,x:201,y:280.8}).wait(1).to({graphics:mask_4_graphics_242,x:140,y:181.2}).wait(1).to({graphics:mask_4_graphics_243,x:205,y:276.4}).wait(1).to({graphics:mask_4_graphics_244,x:146.4,y:181.2}).wait(346));

	// Layer 26
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(20,1,1).p("AlVrcQgRBLglBJQgkBJgmBHQglBHgmBHQgmBIgmBHQgnBKghBKQgjBPggBPQggBPgoBVQgoBVgUBQQgUBRAhBRQAhBSCjAJQCggUBTgwQAngWArgcAldJiQH0luD4kKQD4kKD9m4");
	this.shape_5.setTransform(177.5,275.7);
	this.shape_5._off = true;

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(173).to({_off:false},0).wait(417));

	// Layer 25 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_143 = new cjs.Graphics().p("Ai8SZQC9i/EPgBQEOAAC/C+QC8C7AFEHI0YADQADkHC7i8g");
	var mask_5_graphics_144 = new cjs.Graphics().p("AjdSmQCujOENgWQENgXDOCvQDKCrAZEGI0TBrQgRkGCrjKg");
	var mask_5_graphics_145 = new cjs.Graphics().p("Aj5S1QCejbEJgsQELgrDbCdQDXCbAuEDI0GDSQgnkECbjXg");
	var mask_5_graphics_146 = new cjs.Graphics().p("AkQTHQCMjoEGhAQEGhBDnCMQDjCJBCD/IzyE3Qg7kACJjig");
	var mask_5_graphics_147 = new cjs.Graphics().p("AkhTbQB5jyEAhVQEAhVDyB5QDsB3BXD4IzVGbQhPj6B2jtg");
	var mask_5_graphics_148 = new cjs.Graphics().p("AksTyQBmj7D3hpQD5hpD6BlQD2BkBqDwIywH9Qhjj0Bjj1g");
	var mask_5_graphics_149 = new cjs.Graphics().p("AkyULQBSkCDuh9QDwh8ECBRQD8BPB9DoIyEJaQh2jrBPj8g");
	var mask_5_graphics_150 = new cjs.Graphics().p("AkyUmQA9kHDliQQDkiPEHA8QECA8CPDcIxQK1QiJjhA7kCg");
	var mask_5_graphics_151 = new cjs.Graphics().p("AksVDQAokLDZihQDYihELAnQEFAnCgDQIwVMKQiajVAmkGg");
	var mask_5_graphics_152 = new cjs.Graphics().p("AkgViQASkNDLiyQDLiyENASQEIARCwDEIvUNaQiqjIARkIg");
	var mask_5_graphics_153 = new cjs.Graphics().p("AkPWDQgDkOC8jCQC8jBEOgEQEIgDC/C0IuNOmQi5i6gEkIg");
	var mask_5_graphics_154 = new cjs.Graphics().p("Aj4WlQgZkNCtjQQCrjQENgZQEHgYDNCkItAPsQjHirgZkHg");
	var mask_5_graphics_155 = new cjs.Graphics().p("AjcXIQgukLCbjcQCbjdEKguQEEguDaCUIrvQrQjTibgukEg");
	var mask_5_graphics_156 = new cjs.Graphics().p("Ai7XsQhDkGCKjpQCIjoEFhDQEBhCDkCCIqXRjQjgiJhCkAg");
	var mask_5_graphics_157 = new cjs.Graphics().p("AiUYQQhYj/B2jzQB2jzD/hYQD6hWDuBwIo8SUQjph3hWj6g");
	var mask_5_graphics_158 = new cjs.Graphics().p("AhgY9Qhwj2Bfj9QBej9D1hwQDwhtD4BYInITFQj1hfhtjxg");
	var mask_5_graphics_159 = new cjs.Graphics().p("AgkZrQiIjqBGkFQBFkFDpiHQDliFD/BAIlQTsQj9hHiDjlg");
	var mask_5_graphics_160 = new cjs.Graphics().p("AAcaYQicjbAskLQAskKDaieQDXiaEEAnIjUUHQkDgviajXg");
	var mask_5_graphics_161 = new cjs.Graphics().p("ABibFQiwjLASkOQASkNDKiyQDHiuEHAOIhXUUQkGgVivjHg");
	var mask_5_graphics_162 = new cjs.Graphics().p("ACabxQjDi5gIkOQgIkOC4jFQC1jBEHgLIAnUXIgMAAQj/AAi9ixg");
	var mask_5_graphics_163 = new cjs.Graphics().p("ACrcZQjVilgikMQgikMCkjWQCijREFglICkUOQgoAEgnAAQjWAAixiJg");
	var mask_5_graphics_164 = new cjs.Graphics().p("AC/c9QjjiRg8kHQg8kHCQjlQCMjgD/g+IEhT4QhIAPhFAAQiyAAiihlg");
	var mask_5_graphics_165 = new cjs.Graphics().p("ADXdbQjwh6hVkAQhVkAB5jyQB2jsD4hXIGbTWQhlAghiAAQiTAAiOhHg");
	var mask_5_graphics_166 = new cjs.Graphics().p("ADzd0Qj7hihtj3Qhtj3Bhj7QBfj3DuhuIIQSoQh+A2h/AAQh1AAh3gug");
	var mask_5_graphics_167 = new cjs.Graphics().p("AETeIQkFhJiDjrQiFjsBIkEQBHj/DiiEIKBRvQiTBRieAAQhZAAhbgZg");
	var mask_5_graphics_168 = new cjs.Graphics().p("AE1eVQkKgviajdQibjeAvkJQAukFDUiaILsQtQimBwi/AAQg7AAg+gLg");
	var mask_5_graphics_169 = new cjs.Graphics().p("AFaedQkNgVivjNQivjOAVkNQAUkIDGiuINOPgQi0CWjlAAQgcAAgdgDg");
	var mask_5_graphics_170 = new cjs.Graphics().p("AhOboQjDi7gFkOQgFkJC0jAIOqOJQi5C7kJAFIgNAAQkGAAi8i3g");
	var mask_5_graphics_171 = new cjs.Graphics().p("Ag0cRQjUingfkNQgfkHChjQIP9MqQimDMkHAeQgqAFgoAAQjbAAiyiOg");
	var mask_5_graphics_172 = new cjs.Graphics().p("AgUc2QjjiTg5kIQg4kDCLjfIRILEQiSDbkDA3QhKAQhHAAQi3AAiihpg");
	var mask_5_graphics_173 = new cjs.Graphics().p("AARdUQjvh8hSkBQhRj8B1jsISHJXQh8Doj8BQQhnAhhkAAQiXAAiQhLg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(143).to({graphics:mask_5_graphics_143,x:92.6,y:162.8}).wait(1).to({graphics:mask_5_graphics_144,x:92.4,y:165.4}).wait(1).to({graphics:mask_5_graphics_145,x:92.1,y:168}).wait(1).to({graphics:mask_5_graphics_146,x:91.6,y:170.5}).wait(1).to({graphics:mask_5_graphics_147,x:90.9,y:173}).wait(1).to({graphics:mask_5_graphics_148,x:90,y:175.5}).wait(1).to({graphics:mask_5_graphics_149,x:88.9,y:177.8}).wait(1).to({graphics:mask_5_graphics_150,x:87.6,y:180.1}).wait(1).to({graphics:mask_5_graphics_151,x:86.1,y:182.2}).wait(1).to({graphics:mask_5_graphics_152,x:84.5,y:184.2}).wait(1).to({graphics:mask_5_graphics_153,x:82.7,y:186.1}).wait(1).to({graphics:mask_5_graphics_154,x:80.8,y:187.9}).wait(1).to({graphics:mask_5_graphics_155,x:78.8,y:189.5}).wait(1).to({graphics:mask_5_graphics_156,x:76.6,y:190.9}).wait(1).to({graphics:mask_5_graphics_157,x:74.3,y:192.1}).wait(1).to({graphics:mask_5_graphics_158,x:71.4,y:193.3}).wait(1).to({graphics:mask_5_graphics_159,x:68.4,y:194.3}).wait(1).to({graphics:mask_5_graphics_160,x:65.3,y:195}).wait(1).to({graphics:mask_5_graphics_161,x:62.2,y:195.3}).wait(1).to({graphics:mask_5_graphics_162,x:61,y:195.4}).wait(1).to({graphics:mask_5_graphics_163,x:64.1,y:195.4}).wait(1).to({graphics:mask_5_graphics_164,x:67.2,y:195.4}).wait(1).to({graphics:mask_5_graphics_165,x:70.3,y:195.4}).wait(1).to({graphics:mask_5_graphics_166,x:73.2,y:195.4}).wait(1).to({graphics:mask_5_graphics_167,x:76,y:195.3}).wait(1).to({graphics:mask_5_graphics_168,x:78.7,y:195.2}).wait(1).to({graphics:mask_5_graphics_169,x:81.2,y:195.2}).wait(1).to({graphics:mask_5_graphics_170,x:83.5,y:195.1}).wait(1).to({graphics:mask_5_graphics_171,x:85.6,y:195.1}).wait(1).to({graphics:mask_5_graphics_172,x:87.4,y:195.1}).wait(1).to({graphics:mask_5_graphics_173,x:89.1,y:195.1}).wait(417));

	// Layer 24
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(20,1,1).p("AEXrcQgRBLglBJQgkBJgmBHQglBHgmBHQgmBIgmBHQgmBKghBKQgjBPggBPQggBPgoBVQgoBVgUBQQgUBRAhBRQAhBSCjAJQCfgUBTgwQAngWArgc");
	this.shape_6.setTransform(115.4,275.7);
	this.shape_6._off = true;

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(143).to({_off:false},0).wait(447));

	// Layer 23 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_90 = new cjs.Graphics().p("AHkOpIBNixIDyBqIhOCwg");
	var mask_6_graphics_91 = new cjs.Graphics().p("AikAvIBYjHIDxBqIhYDHg");
	var mask_6_graphics_92 = new cjs.Graphics().p("AipA7IBijfIDxBrIhiDeg");
	var mask_6_graphics_93 = new cjs.Graphics().p("AiuBGIBsj1IDxBqIhsD1g");
	var mask_6_graphics_94 = new cjs.Graphics().p("AizBRIB2kMIDxBrIh2EMg");
	var mask_6_graphics_95 = new cjs.Graphics().p("Ai4BdICAkjIDxBqIiAEjg");
	var mask_6_graphics_96 = new cjs.Graphics().p("Ai9BoICKk6IDxBrIiKE6g");
	var mask_6_graphics_97 = new cjs.Graphics().p("AjCB0ICUlRIDxBqIiUFRg");
	var mask_6_graphics_98 = new cjs.Graphics().p("AjHB/ICfloIDwBrIieFng");
	var mask_6_graphics_99 = new cjs.Graphics().p("AjMCLICpl/IDwBqIioF/g");
	var mask_6_graphics_100 = new cjs.Graphics().p("AjRCWICzmWIDwBrIiyGVg");
	var mask_6_graphics_101 = new cjs.Graphics().p("AjWCiIC9mtIDwBqIi9Gtg");
	var mask_6_graphics_102 = new cjs.Graphics().p("AjbCuIDHnFIDwBrIjHHDg");
	var mask_6_graphics_103 = new cjs.Graphics().p("AjgC5IDRnbIDwBqIjRHbg");
	var mask_6_graphics_104 = new cjs.Graphics().p("AjlDEIDbnxIDwBqIjbHxg");
	var mask_6_graphics_105 = new cjs.Graphics().p("AjqDQIDloJIDwBqIjlIJg");
	var mask_6_graphics_106 = new cjs.Graphics().p("AjvDbIDvofIDwBqIjvIfg");
	var mask_6_graphics_107 = new cjs.Graphics().p("Aj0DnID4o3IDxBqIj4I3g");
	var mask_6_graphics_108 = new cjs.Graphics().p("Aj5DyIECpNIDxBqIkCJNg");
	var mask_6_graphics_109 = new cjs.Graphics().p("Aj/D+IENplIDyBqIkNJlg");
	var mask_6_graphics_110 = new cjs.Graphics().p("AkEEJIEXp7IDyBqIkXJ7g");
	var mask_6_graphics_111 = new cjs.Graphics().p("AkIEVIEgqTIDyBqIkhKTg");
	var mask_6_graphics_112 = new cjs.Graphics().p("AkNEgIEqqpIDyBqIkrKpg");
	var mask_6_graphics_113 = new cjs.Graphics().p("AkSEsIE0rBIDyBqIk1LBg");
	var mask_6_graphics_114 = new cjs.Graphics().p("AkYE3IE/rXIDyBqIk/LXg");
	var mask_6_graphics_115 = new cjs.Graphics().p("AkdFDIFJrvIDyBqIlJLvg");
	var mask_6_graphics_116 = new cjs.Graphics().p("AkiFOIFTsFIDyBqIlTMFg");
	var mask_6_graphics_117 = new cjs.Graphics().p("AknFZIFdsbIDyBqIldMbg");
	var mask_6_graphics_118 = new cjs.Graphics().p("AksFlIFnszIDyBqIlnMzg");
	var mask_6_graphics_119 = new cjs.Graphics().p("AkxFwIFxtJIDyBqIlxNJg");
	var mask_6_graphics_120 = new cjs.Graphics().p("Ak2F8IF8thIDxBqIl8Nhg");
	var mask_6_graphics_121 = new cjs.Graphics().p("Ak7GIIGGt4IDxBqImFN3g");
	var mask_6_graphics_122 = new cjs.Graphics().p("AlAGTIGQuPIDxBqImPOPg");
	var mask_6_graphics_123 = new cjs.Graphics().p("AlFGfIGaumIDxBqImZOlg");
	var mask_6_graphics_124 = new cjs.Graphics().p("AlKGqIGku9IDxBqImjO9g");
	var mask_6_graphics_125 = new cjs.Graphics().p("AlPG2IGuvUIDxBqImuPUg");
	var mask_6_graphics_126 = new cjs.Graphics().p("AlUHBIG4vrIDxBqIm4Prg");
	var mask_6_graphics_127 = new cjs.Graphics().p("AlZHNIHCwCIDxBqInCQCg");
	var mask_6_graphics_128 = new cjs.Graphics().p("AleHYIHMwZIDxBqInMQZg");
	var mask_6_graphics_129 = new cjs.Graphics().p("AljHjIHWwvIDxBqInWQwg");
	var mask_6_graphics_130 = new cjs.Graphics().p("AloHvIHgxHIDyBqInhRHg");
	var mask_6_graphics_131 = new cjs.Graphics().p("AluH6IHrxdIDyBqInrRdg");
	var mask_6_graphics_132 = new cjs.Graphics().p("AlzIGIH1x1IDyBqIn1R1g");
	var mask_6_graphics_133 = new cjs.Graphics().p("Al4IRIH/yLIDyBqIn/SLg");
	var mask_6_graphics_134 = new cjs.Graphics().p("Al9IdIIJyjIDyBqIoJSjg");
	var mask_6_graphics_135 = new cjs.Graphics().p("AmCIoIITy5IDyBqIoTS5g");
	var mask_6_graphics_136 = new cjs.Graphics().p("AmHI0IIdzRIDyBqIodTRg");
	var mask_6_graphics_137 = new cjs.Graphics().p("AmMI/IInznIDyBqIonTng");
	var mask_6_graphics_138 = new cjs.Graphics().p("AmRJLIIxz/IDyBqIoxT/g");
	var mask_6_graphics_139 = new cjs.Graphics().p("AmWJWII70VIDyBqIo7UVg");
	var mask_6_graphics_140 = new cjs.Graphics().p("AmbJiIJF0tIDyBqIpFUtg");
	var mask_6_graphics_141 = new cjs.Graphics().p("AmgJtIJQ1DIDxBqIpPVDg");
	var mask_6_graphics_142 = new cjs.Graphics().p("AmlJ5IJa1bIDxBqIpaVbg");
	var mask_6_graphics_143 = new cjs.Graphics().p("AgyYJIJj1yIDyBqIpkVyg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(90).to({graphics:mask_6_graphics_90,x:80.3,y:104.2}).wait(1).to({graphics:mask_6_graphics_91,x:144.1,y:195.5}).wait(1).to({graphics:mask_6_graphics_92,x:143.6,y:196.7}).wait(1).to({graphics:mask_6_graphics_93,x:143.1,y:197.8}).wait(1).to({graphics:mask_6_graphics_94,x:142.6,y:199}).wait(1).to({graphics:mask_6_graphics_95,x:142.1,y:200.1}).wait(1).to({graphics:mask_6_graphics_96,x:141.6,y:201.3}).wait(1).to({graphics:mask_6_graphics_97,x:141.1,y:202.4}).wait(1).to({graphics:mask_6_graphics_98,x:140.6,y:203.6}).wait(1).to({graphics:mask_6_graphics_99,x:140.1,y:204.7}).wait(1).to({graphics:mask_6_graphics_100,x:139.6,y:205.9}).wait(1).to({graphics:mask_6_graphics_101,x:139.1,y:207}).wait(1).to({graphics:mask_6_graphics_102,x:138.6,y:208.2}).wait(1).to({graphics:mask_6_graphics_103,x:138.1,y:209.3}).wait(1).to({graphics:mask_6_graphics_104,x:137.5,y:210.4}).wait(1).to({graphics:mask_6_graphics_105,x:137,y:211.6}).wait(1).to({graphics:mask_6_graphics_106,x:136.5,y:212.7}).wait(1).to({graphics:mask_6_graphics_107,x:136,y:213.9}).wait(1).to({graphics:mask_6_graphics_108,x:135.5,y:215}).wait(1).to({graphics:mask_6_graphics_109,x:135,y:216.2}).wait(1).to({graphics:mask_6_graphics_110,x:134.5,y:217.3}).wait(1).to({graphics:mask_6_graphics_111,x:134,y:218.5}).wait(1).to({graphics:mask_6_graphics_112,x:133.5,y:219.6}).wait(1).to({graphics:mask_6_graphics_113,x:133,y:220.8}).wait(1).to({graphics:mask_6_graphics_114,x:132.5,y:221.9}).wait(1).to({graphics:mask_6_graphics_115,x:132,y:223.1}).wait(1).to({graphics:mask_6_graphics_116,x:131.5,y:224.2}).wait(1).to({graphics:mask_6_graphics_117,x:131,y:225.4}).wait(1).to({graphics:mask_6_graphics_118,x:130.5,y:226.6}).wait(1).to({graphics:mask_6_graphics_119,x:130,y:227.7}).wait(1).to({graphics:mask_6_graphics_120,x:129.5,y:228.9}).wait(1).to({graphics:mask_6_graphics_121,x:129,y:230}).wait(1).to({graphics:mask_6_graphics_122,x:128.5,y:231.2}).wait(1).to({graphics:mask_6_graphics_123,x:128,y:232.3}).wait(1).to({graphics:mask_6_graphics_124,x:127.5,y:233.5}).wait(1).to({graphics:mask_6_graphics_125,x:126.9,y:234.6}).wait(1).to({graphics:mask_6_graphics_126,x:126.4,y:235.8}).wait(1).to({graphics:mask_6_graphics_127,x:125.9,y:236.9}).wait(1).to({graphics:mask_6_graphics_128,x:125.4,y:238.1}).wait(1).to({graphics:mask_6_graphics_129,x:124.9,y:239.2}).wait(1).to({graphics:mask_6_graphics_130,x:124.4,y:240.3}).wait(1).to({graphics:mask_6_graphics_131,x:123.9,y:241.5}).wait(1).to({graphics:mask_6_graphics_132,x:123.4,y:242.6}).wait(1).to({graphics:mask_6_graphics_133,x:122.9,y:243.8}).wait(1).to({graphics:mask_6_graphics_134,x:122.4,y:244.9}).wait(1).to({graphics:mask_6_graphics_135,x:121.9,y:246.1}).wait(1).to({graphics:mask_6_graphics_136,x:121.4,y:247.2}).wait(1).to({graphics:mask_6_graphics_137,x:120.9,y:248.4}).wait(1).to({graphics:mask_6_graphics_138,x:120.4,y:249.5}).wait(1).to({graphics:mask_6_graphics_139,x:119.9,y:250.7}).wait(1).to({graphics:mask_6_graphics_140,x:119.4,y:251.8}).wait(1).to({graphics:mask_6_graphics_141,x:118.9,y:253}).wait(1).to({graphics:mask_6_graphics_142,x:118.4,y:254.1}).wait(1).to({graphics:mask_6_graphics_143,x:80.3,y:165.1}).wait(447));

	// Layer 22
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(20,1,1).p("AEXrcQgRBLglBJQgkBJgmBHQglBHgmBHQgmBIgmBHQgmBKghBKQgjBPggBPQggBPgoBVQgoBVgUBQQgUBRAhBRQAhBSCjAJQCfgUBTgwQAngWArgc");
	this.shape_7.setTransform(115.4,275.7);
	this.shape_7._off = true;

	var maskedShapeInstanceList = [this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(90).to({_off:false},0).wait(500));

	// Layer 35
	this.instance_4 = new lib.ar1("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(53.2,158.4,1,1,-8.2,0,0,-0.8,0.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).wait(581));

	// Layer 21 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_9 = new cjs.Graphics().p("ADXTtIB1icIDQCbIh1Ccg");
	var mask_7_graphics_10 = new cjs.Graphics().p("AikAFIB7ikIDPCbIh8Ckg");
	var mask_7_graphics_11 = new cjs.Graphics().p("AioAJICCisIDPCbIiCCsg");
	var mask_7_graphics_12 = new cjs.Graphics().p("AirAOICJi2IDOCbIiJC2g");
	var mask_7_graphics_13 = new cjs.Graphics().p("AivATICQjAIDPCbIiQDAg");
	var mask_7_graphics_14 = new cjs.Graphics().p("AiyAXICWjIIDPCbIiXDIg");
	var mask_7_graphics_15 = new cjs.Graphics().p("Ai1AcICdjSIDOCbIidDSg");
	var mask_7_graphics_16 = new cjs.Graphics().p("Ai5AhICkjbIDPCbIikDag");
	var mask_7_graphics_17 = new cjs.Graphics().p("Ai8AlICrjkIDOCbIirDkg");
	var mask_7_graphics_18 = new cjs.Graphics().p("AjAApICyjsIDPCbIiyDsg");
	var mask_7_graphics_19 = new cjs.Graphics().p("AjDAuIC5j2IDOCbIi5D2g");
	var mask_7_graphics_20 = new cjs.Graphics().p("AjGAzIC/j/IDOCbIi/D+g");
	var mask_7_graphics_21 = new cjs.Graphics().p("AjKA3IDGkIIDPCbIjHEIg");
	var mask_7_graphics_22 = new cjs.Graphics().p("AjNA8IDNkSIDOCbIjNESg");
	var mask_7_graphics_23 = new cjs.Graphics().p("AjRBAIDTkaIDQCbIjTEag");
	var mask_7_graphics_24 = new cjs.Graphics().p("AjUBFIDakkIDPCbIjaEkg");
	var mask_7_graphics_25 = new cjs.Graphics().p("AjXBKIDgkuIDPCcIjgEsg");
	var mask_7_graphics_26 = new cjs.Graphics().p("AjbBOIDnk2IDQCbIjoE2g");
	var mask_7_graphics_27 = new cjs.Graphics().p("AjeBTIDulAIDPCcIjuE+g");
	var mask_7_graphics_28 = new cjs.Graphics().p("AjiBXID1lIIDQCbIj1FIg");
	var mask_7_graphics_29 = new cjs.Graphics().p("AjlBbID8lRIDPCcIj8FQg");
	var mask_7_graphics_30 = new cjs.Graphics().p("AjoBgIEClaIDQCbIkDFag");
	var mask_7_graphics_31 = new cjs.Graphics().p("AjsBlIEKlkIDPCbIkKFkg");
	var mask_7_graphics_32 = new cjs.Graphics().p("AjvBpIEQlsIDPCbIkQFsg");
	var mask_7_graphics_33 = new cjs.Graphics().p("AjzBuIEXl2IDQCbIkXF2g");
	var mask_7_graphics_34 = new cjs.Graphics().p("Aj2ByIEel/IDPCcIkeF+g");
	var mask_7_graphics_35 = new cjs.Graphics().p("Aj6B3IElmIIDQCbIklGIg");
	var mask_7_graphics_36 = new cjs.Graphics().p("Aj9B7IEsmRIDPCcIksGQg");
	var mask_7_graphics_37 = new cjs.Graphics().p("AkACAIEymaIDPCbIkyGag");
	var mask_7_graphics_38 = new cjs.Graphics().p("AkECFIE5mkIDQCcIk5Gig");
	var mask_7_graphics_39 = new cjs.Graphics().p("AkHCJIFAmsIDPCbIlAGsg");
	var mask_7_graphics_40 = new cjs.Graphics().p("AkLCOIFHm2IDQCbIlHG2g");
	var mask_7_graphics_41 = new cjs.Graphics().p("AkOCTIFOm/IDPCaIlOHAg");
	var mask_7_graphics_42 = new cjs.Graphics().p("AkRCXIFUnIIDQCbIlVHIg");
	var mask_7_graphics_43 = new cjs.Graphics().p("AkVCcIFbnSIDQCbIlcHSg");
	var mask_7_graphics_44 = new cjs.Graphics().p("AkYCgIFinaIDPCbIliHag");
	var mask_7_graphics_45 = new cjs.Graphics().p("AkcClIFpnkIDQCbIlpHkg");
	var mask_7_graphics_46 = new cjs.Graphics().p("AkfCpIFvnsIDQCbIlwHsg");
	var mask_7_graphics_47 = new cjs.Graphics().p("AkiCuIF2n2IDQCbIl3H2g");
	var mask_7_graphics_48 = new cjs.Graphics().p("AkmCzIF+n/IDPCbIl+H/g");
	var mask_7_graphics_49 = new cjs.Graphics().p("AkpC3IGEoIIDPCbImEIIg");
	var mask_7_graphics_50 = new cjs.Graphics().p("AktC8IGLoRIDQCbImLIRg");
	var mask_7_graphics_51 = new cjs.Graphics().p("AkwDAIGSoaIDPCbImSIag");
	var mask_7_graphics_52 = new cjs.Graphics().p("AkzDFIGYokIDPCbImYIkg");
	var mask_7_graphics_53 = new cjs.Graphics().p("Ak3DJIGgosIDPCbImgIsg");
	var mask_7_graphics_54 = new cjs.Graphics().p("Ak6DOIGmo2IDPCbImmI2g");
	var mask_7_graphics_55 = new cjs.Graphics().p("Ak+DSIGto+IDQCbImtI+g");
	var mask_7_graphics_56 = new cjs.Graphics().p("AlBDXIG0pIIDPCbIm0JIg");
	var mask_7_graphics_57 = new cjs.Graphics().p("AlEDcIG6pRIDPCbIm6JRg");
	var mask_7_graphics_58 = new cjs.Graphics().p("AlIDgIHBpaIDQCbInCJag");
	var mask_7_graphics_59 = new cjs.Graphics().p("AlLDlIHIpjIDQCbInJJjg");
	var mask_7_graphics_60 = new cjs.Graphics().p("AlPDpIHPpsIDQCbInPJsg");
	var mask_7_graphics_61 = new cjs.Graphics().p("AlSDuIHWp2IDPCbInWJ2g");
	var mask_7_graphics_62 = new cjs.Graphics().p("AlWDyIHdp+IDQCbIndJ+g");
	var mask_7_graphics_63 = new cjs.Graphics().p("AlZD3IHjqIIDQCbInkKIg");
	var mask_7_graphics_64 = new cjs.Graphics().p("AlcD7IHqqQIDQCbInrKQg");
	var mask_7_graphics_65 = new cjs.Graphics().p("AlgEAIHyqaIDPCbInyKag");
	var mask_7_graphics_66 = new cjs.Graphics().p("AljEFIH4qkIDPCcIn4Kjg");
	var mask_7_graphics_67 = new cjs.Graphics().p("AlnEJIH/qsIDQCbIn/Ksg");
	var mask_7_graphics_68 = new cjs.Graphics().p("AlqEOIIFq2IDQCcIoGK1g");
	var mask_7_graphics_69 = new cjs.Graphics().p("AltESIIMq+IDPCbIoMK+g");
	var mask_7_graphics_70 = new cjs.Graphics().p("AlxEXIIUrIIDPCbIoULIg");
	var mask_7_graphics_71 = new cjs.Graphics().p("Al0EbIIarQIDPCbIoaLQg");
	var mask_7_graphics_72 = new cjs.Graphics().p("AABTtIIiraIDPCbIoiLag");
	var mask_7_graphics_73 = new cjs.Graphics().p("AmME7IJJsQIDQCcIpJMPg");
	var mask_7_graphics_74 = new cjs.Graphics().p("AgmTuIJxtGIDPCbIpyNGg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_7_graphics_9,x:54,y:141.6}).wait(1).to({graphics:mask_7_graphics_10,x:92.1,y:267.3}).wait(1).to({graphics:mask_7_graphics_11,x:92.4,y:266.8}).wait(1).to({graphics:mask_7_graphics_12,x:92.7,y:266.3}).wait(1).to({graphics:mask_7_graphics_13,x:93.1,y:265.9}).wait(1).to({graphics:mask_7_graphics_14,x:93.4,y:265.4}).wait(1).to({graphics:mask_7_graphics_15,x:93.8,y:265}).wait(1).to({graphics:mask_7_graphics_16,x:94.1,y:264.5}).wait(1).to({graphics:mask_7_graphics_17,x:94.4,y:264.1}).wait(1).to({graphics:mask_7_graphics_18,x:94.8,y:263.6}).wait(1).to({graphics:mask_7_graphics_19,x:95.1,y:263.2}).wait(1).to({graphics:mask_7_graphics_20,x:95.5,y:262.7}).wait(1).to({graphics:mask_7_graphics_21,x:95.8,y:262.2}).wait(1).to({graphics:mask_7_graphics_22,x:96.1,y:261.8}).wait(1).to({graphics:mask_7_graphics_23,x:96.5,y:261.3}).wait(1).to({graphics:mask_7_graphics_24,x:96.8,y:260.9}).wait(1).to({graphics:mask_7_graphics_25,x:97.2,y:260.4}).wait(1).to({graphics:mask_7_graphics_26,x:97.5,y:260}).wait(1).to({graphics:mask_7_graphics_27,x:97.8,y:259.5}).wait(1).to({graphics:mask_7_graphics_28,x:98.2,y:259.1}).wait(1).to({graphics:mask_7_graphics_29,x:98.5,y:258.6}).wait(1).to({graphics:mask_7_graphics_30,x:98.9,y:258.1}).wait(1).to({graphics:mask_7_graphics_31,x:99.2,y:257.7}).wait(1).to({graphics:mask_7_graphics_32,x:99.6,y:257.2}).wait(1).to({graphics:mask_7_graphics_33,x:99.9,y:256.8}).wait(1).to({graphics:mask_7_graphics_34,x:100.2,y:256.3}).wait(1).to({graphics:mask_7_graphics_35,x:100.6,y:255.9}).wait(1).to({graphics:mask_7_graphics_36,x:100.9,y:255.4}).wait(1).to({graphics:mask_7_graphics_37,x:101.3,y:255}).wait(1).to({graphics:mask_7_graphics_38,x:101.6,y:254.5}).wait(1).to({graphics:mask_7_graphics_39,x:101.9,y:254}).wait(1).to({graphics:mask_7_graphics_40,x:102.3,y:253.6}).wait(1).to({graphics:mask_7_graphics_41,x:102.6,y:253.2}).wait(1).to({graphics:mask_7_graphics_42,x:103,y:252.7}).wait(1).to({graphics:mask_7_graphics_43,x:103.3,y:252.2}).wait(1).to({graphics:mask_7_graphics_44,x:103.6,y:251.8}).wait(1).to({graphics:mask_7_graphics_45,x:104,y:251.3}).wait(1).to({graphics:mask_7_graphics_46,x:104.3,y:250.9}).wait(1).to({graphics:mask_7_graphics_47,x:104.7,y:250.4}).wait(1).to({graphics:mask_7_graphics_48,x:105,y:250}).wait(1).to({graphics:mask_7_graphics_49,x:105.3,y:249.5}).wait(1).to({graphics:mask_7_graphics_50,x:105.7,y:249.1}).wait(1).to({graphics:mask_7_graphics_51,x:106,y:248.6}).wait(1).to({graphics:mask_7_graphics_52,x:106.4,y:248.1}).wait(1).to({graphics:mask_7_graphics_53,x:106.7,y:247.7}).wait(1).to({graphics:mask_7_graphics_54,x:107.1,y:247.2}).wait(1).to({graphics:mask_7_graphics_55,x:107.4,y:246.8}).wait(1).to({graphics:mask_7_graphics_56,x:107.7,y:246.3}).wait(1).to({graphics:mask_7_graphics_57,x:108.1,y:245.9}).wait(1).to({graphics:mask_7_graphics_58,x:108.4,y:245.4}).wait(1).to({graphics:mask_7_graphics_59,x:108.8,y:245}).wait(1).to({graphics:mask_7_graphics_60,x:109.1,y:244.5}).wait(1).to({graphics:mask_7_graphics_61,x:109.4,y:244}).wait(1).to({graphics:mask_7_graphics_62,x:109.8,y:243.6}).wait(1).to({graphics:mask_7_graphics_63,x:110.1,y:243.1}).wait(1).to({graphics:mask_7_graphics_64,x:110.5,y:242.7}).wait(1).to({graphics:mask_7_graphics_65,x:110.8,y:242.2}).wait(1).to({graphics:mask_7_graphics_66,x:111.1,y:241.8}).wait(1).to({graphics:mask_7_graphics_67,x:111.5,y:241.3}).wait(1).to({graphics:mask_7_graphics_68,x:111.8,y:240.9}).wait(1).to({graphics:mask_7_graphics_69,x:112.2,y:240.4}).wait(1).to({graphics:mask_7_graphics_70,x:112.5,y:239.9}).wait(1).to({graphics:mask_7_graphics_71,x:112.8,y:239.5}).wait(1).to({graphics:mask_7_graphics_72,x:75.4,y:141.6}).wait(1).to({graphics:mask_7_graphics_73,x:115.2,y:236.4}).wait(1).to({graphics:mask_7_graphics_74,x:79.4,y:141.7}).wait(516));

	// Layer 20
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(20,1,1).p("AjgEiIHBpD");
	this.shape_8.setTransform(120.6,232);
	this.shape_8._off = true;

	var maskedShapeInstanceList = [this.shape_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(9).to({_off:false},0).wait(581));

	// Letter
	this.instance_5 = new lib.Symbol1("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(275,275);
	this.instance_5.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(590));

	// Background
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_9.setTransform(275,275,3.373,2.543);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_10.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9}]}).wait(590));

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