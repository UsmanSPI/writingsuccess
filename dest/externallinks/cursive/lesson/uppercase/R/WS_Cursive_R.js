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


(lib.R = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A6xX5UAAAgBBAQuggzQkeDxkkC3QlKDTkzBxIg+AHQiQgBAAiPQAAiuINisQFtjJFCkQQE+kJEGlGIBchzQBViEBBAAQCMgBABCRIAAAXIE1h2QCugyCWABQDdgBC1A+QCzA7B/B5QB/B5BDCsQBEC0AADeQAADOhYC+QhSCriaCaQiKCJi9B0QioBnjDBPQkJBrioAAIlkgYIASE3IgXGJQAACuDNAAQCtAADShQQC3hGDLiCQD+ijGQl0QDtj8BMg6QBWgwAjAAQBhAAAABzQAAAqkVFUQh7CZjHCpQjLCxjgCOQj0CdjeBVQj3BijAAAQkIgBh/h+Qh/iAAAkGIAYmQIgYlKQj9hNh/heIqmU6QgvBVhQAAQiQAAAAiZgAElz9QjjBkiyCOIl8L7QB1ApBiCTQBPB2AwCfQCmAkD7AAQBkAADghWQFKiCDhjOQCBh5BHiDQBPiTAAiZQAAimguh8Qgth5hYhQQhZhPh/gnQh7gmijAAQi/AAkEBzgAn5BOQg7hmg9gHIgGAZIB+BUIAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-206.5,-168.2,413,336.5);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:-139.2,guide:{path:[-64.4,22.5,-57.7,84.2,-27.6,58.2,-16,48.2,-6.1,36.9]}},59).to({scaleX:1,scaleY:1,rotation:-151.9,guide:{path:[-5.9,36.9,10.2,18.6,22.2,-3.4,41.7,-38.9,49.4,-50.5]}},60).wait(1));

	// Layer 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_59 = new cjs.Graphics().p("AkuAQIAxhsIIsD5IgxBtg");
	var mask_graphics_60 = new cjs.Graphics().p("Akyg+IA6h9IIrD6Ig6B9g");
	var mask_graphics_61 = new cjs.Graphics().p("Ak2g3IBCiLIIqD6IhBCLg");
	var mask_graphics_62 = new cjs.Graphics().p("Ak5gwIBJiaIIqD6IhJCbg");
	var mask_graphics_63 = new cjs.Graphics().p("Ak9goIBRiqIIqD7IhRCqg");
	var mask_graphics_64 = new cjs.Graphics().p("AlBghIBai5IIpD8IhaC5g");
	var mask_graphics_65 = new cjs.Graphics().p("AlFgaIBhjIIIqD+IhhDHg");
	var mask_graphics_66 = new cjs.Graphics().p("AlJgTIBqjWIIpD9IhqDWg");
	var mask_graphics_67 = new cjs.Graphics().p("AlNgLIByjmIIpD+IhyDlg");
	var mask_graphics_68 = new cjs.Graphics().p("AlQgEIB5j1IIpD/Ih6D0g");
	var mask_graphics_69 = new cjs.Graphics().p("AlVACICCkDIIoEAIiBEDg");
	var mask_graphics_70 = new cjs.Graphics().p("AlYAJICKkSIInEBIiKERg");
	var mask_graphics_71 = new cjs.Graphics().p("AlcAQICRkgIIoEBIiSEgg");
	var mask_graphics_72 = new cjs.Graphics().p("AlgAXICakvIInECIiZEvg");
	var mask_graphics_73 = new cjs.Graphics().p("AlkAeICik+IInECIiiE/g");
	var mask_graphics_74 = new cjs.Graphics().p("AloAlICqlNIInEDIiqFNg");
	var mask_graphics_75 = new cjs.Graphics().p("AlrAtICxlcIInEDIiyFcg");
	var mask_graphics_76 = new cjs.Graphics().p("AlwA0IC6lrIImEDIi5Fsg");
	var mask_graphics_77 = new cjs.Graphics().p("AlzA8IDBl7IImEFIjBF6g");
	var mask_graphics_78 = new cjs.Graphics().p("Al3BDIDJmKIImEGIjKGJg");
	var mask_graphics_79 = new cjs.Graphics().p("Al7BKIDSmYIIlEGIjSGXg");
	var mask_graphics_80 = new cjs.Graphics().p("Al/BRIDamnIIlEGIjaGng");
	var mask_graphics_81 = new cjs.Graphics().p("AmDBYIDim2IIlEHIjiG2g");
	var mask_graphics_82 = new cjs.Graphics().p("AmHBfIDqnFIIlEIIjqHFg");
	var mask_graphics_83 = new cjs.Graphics().p("AmLBnIDynUIIlEHIjyHUg");
	var mask_graphics_84 = new cjs.Graphics().p("AmOBuID5njIIkEIIj5Hjg");
	var mask_graphics_85 = new cjs.Graphics().p("AmSB1IECnyIIjEJIkBHyg");
	var mask_graphics_86 = new cjs.Graphics().p("AmWB8IEKoBIIjEKIkKIBg");
	var mask_graphics_87 = new cjs.Graphics().p("AmaCEIERoQIIkEJIkSIQg");
	var mask_graphics_88 = new cjs.Graphics().p("AmeCKIEaoeIIjEKIkaIgg");
	var mask_graphics_89 = new cjs.Graphics().p("AmiCRIEiotIIjEMIkiIug");
	var mask_graphics_90 = new cjs.Graphics().p("AmmCZIEqo9IIiEMIkpI9g");
	var mask_graphics_91 = new cjs.Graphics().p("AmpCgIExpMIIjENIkyJMg");
	var mask_graphics_92 = new cjs.Graphics().p("AmuCnIE6pbIIjEOIk6Jbg");
	var mask_graphics_93 = new cjs.Graphics().p("AmxCvIFBprIIiEOIlCJrg");
	var mask_graphics_94 = new cjs.Graphics().p("Am1C2IFKp5IIhEOIlJJ5g");
	var mask_graphics_95 = new cjs.Graphics().p("Am5C9IFSqIIIhEPIlSKIg");
	var mask_graphics_96 = new cjs.Graphics().p("Am9DEIFaqXIIhEQIlaKXg");
	var mask_graphics_97 = new cjs.Graphics().p("AnADLIFhqmIIgEQIlhKng");
	var mask_graphics_98 = new cjs.Graphics().p("AnFDSIFqq0IIhEQIlqK1g");
	var mask_graphics_99 = new cjs.Graphics().p("AnJDaIFzrEIIfERIlyLEg");
	var mask_graphics_100 = new cjs.Graphics().p("AnMDhIF5rTIIgETIl6LSg");
	var mask_graphics_101 = new cjs.Graphics().p("AnQDoIGCriIIfETImCLig");
	var mask_graphics_102 = new cjs.Graphics().p("AnUDvIGKrxIIfEUImKLxg");
	var mask_graphics_103 = new cjs.Graphics().p("AnYD3IGSsAIIfEUImSL/g");
	var mask_graphics_104 = new cjs.Graphics().p("AncD+IGasPIIfEUImaMPg");
	var mask_graphics_105 = new cjs.Graphics().p("AngEFIGiseIIfEVImiMeg");
	var mask_graphics_106 = new cjs.Graphics().p("AnjEMIGpssIIeEVImpMtg");
	var mask_graphics_107 = new cjs.Graphics().p("AnnETIGys7IIdEWImyM7g");
	var mask_graphics_108 = new cjs.Graphics().p("AnrEaIG6tKIIdEWIm6NLg");
	var mask_graphics_109 = new cjs.Graphics().p("AnvEiIHCtaIIdEXInCNag");
	var mask_graphics_110 = new cjs.Graphics().p("AnzEpIHKtpIIdEYInKNpg");
	var mask_graphics_111 = new cjs.Graphics().p("An3EwIHSt4IIdEZInSN3g");
	var mask_graphics_112 = new cjs.Graphics().p("An7E3IHauGIIdEZInaOGg");
	var mask_graphics_113 = new cjs.Graphics().p("An/E+IHiuVIIcEaInhOVg");
	var mask_graphics_114 = new cjs.Graphics().p("AoCFFIHpukIIcEaInpOlg");
	var mask_graphics_115 = new cjs.Graphics().p("AoGFNIHyu0IIbEbInyO0g");
	var mask_graphics_116 = new cjs.Graphics().p("AoKFUIH6vCIIbEbIn6PCg");
	var mask_graphics_117 = new cjs.Graphics().p("AoOFbIICvRIIbEcIoCPRg");
	var mask_graphics_118 = new cjs.Graphics().p("AoYFuIIWv3IIbEcIoWP3g");
	var mask_graphics_119 = new cjs.Graphics().p("AoiGBIIpwdIIcEcIopQdg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(59).to({graphics:mask_graphics_59,x:-16.5,y:26.6}).wait(1).to({graphics:mask_graphics_60,x:-16.2,y:34.5}).wait(1).to({graphics:mask_graphics_61,x:-15.8,y:33.7}).wait(1).to({graphics:mask_graphics_62,x:-15.5,y:33}).wait(1).to({graphics:mask_graphics_63,x:-15.1,y:32.2}).wait(1).to({graphics:mask_graphics_64,x:-14.7,y:31.4}).wait(1).to({graphics:mask_graphics_65,x:-14.4,y:30.6}).wait(1).to({graphics:mask_graphics_66,x:-14.1,y:29.8}).wait(1).to({graphics:mask_graphics_67,x:-13.7,y:29.1}).wait(1).to({graphics:mask_graphics_68,x:-13.3,y:28.3}).wait(1).to({graphics:mask_graphics_69,x:-13,y:27.5}).wait(1).to({graphics:mask_graphics_70,x:-12.6,y:26.8}).wait(1).to({graphics:mask_graphics_71,x:-12.3,y:26}).wait(1).to({graphics:mask_graphics_72,x:-11.9,y:25.2}).wait(1).to({graphics:mask_graphics_73,x:-11.6,y:24.4}).wait(1).to({graphics:mask_graphics_74,x:-11.2,y:23.7}).wait(1).to({graphics:mask_graphics_75,x:-10.9,y:22.9}).wait(1).to({graphics:mask_graphics_76,x:-10.5,y:22.1}).wait(1).to({graphics:mask_graphics_77,x:-10.2,y:21.3}).wait(1).to({graphics:mask_graphics_78,x:-9.8,y:20.5}).wait(1).to({graphics:mask_graphics_79,x:-9.5,y:19.8}).wait(1).to({graphics:mask_graphics_80,x:-9.1,y:19}).wait(1).to({graphics:mask_graphics_81,x:-8.8,y:18.2}).wait(1).to({graphics:mask_graphics_82,x:-8.4,y:17.4}).wait(1).to({graphics:mask_graphics_83,x:-8.1,y:16.7}).wait(1).to({graphics:mask_graphics_84,x:-7.7,y:15.9}).wait(1).to({graphics:mask_graphics_85,x:-7.4,y:15.1}).wait(1).to({graphics:mask_graphics_86,x:-7,y:14.3}).wait(1).to({graphics:mask_graphics_87,x:-6.6,y:13.6}).wait(1).to({graphics:mask_graphics_88,x:-6.3,y:12.8}).wait(1).to({graphics:mask_graphics_89,x:-6,y:12}).wait(1).to({graphics:mask_graphics_90,x:-5.6,y:11.2}).wait(1).to({graphics:mask_graphics_91,x:-5.2,y:10.5}).wait(1).to({graphics:mask_graphics_92,x:-4.9,y:9.7}).wait(1).to({graphics:mask_graphics_93,x:-4.5,y:8.9}).wait(1).to({graphics:mask_graphics_94,x:-4.2,y:8.1}).wait(1).to({graphics:mask_graphics_95,x:-3.8,y:7.4}).wait(1).to({graphics:mask_graphics_96,x:-3.5,y:6.6}).wait(1).to({graphics:mask_graphics_97,x:-3.1,y:5.8}).wait(1).to({graphics:mask_graphics_98,x:-2.8,y:5}).wait(1).to({graphics:mask_graphics_99,x:-2.4,y:4.3}).wait(1).to({graphics:mask_graphics_100,x:-2.1,y:3.5}).wait(1).to({graphics:mask_graphics_101,x:-1.7,y:2.7}).wait(1).to({graphics:mask_graphics_102,x:-1.4,y:1.9}).wait(1).to({graphics:mask_graphics_103,x:-1,y:1.1}).wait(1).to({graphics:mask_graphics_104,x:-0.7,y:0.4}).wait(1).to({graphics:mask_graphics_105,x:-0.3,y:-0.4}).wait(1).to({graphics:mask_graphics_106,x:0,y:-1.2}).wait(1).to({graphics:mask_graphics_107,x:0.4,y:-2}).wait(1).to({graphics:mask_graphics_108,x:0.7,y:-2.7}).wait(1).to({graphics:mask_graphics_109,x:1.1,y:-3.5}).wait(1).to({graphics:mask_graphics_110,x:1.5,y:-4.3}).wait(1).to({graphics:mask_graphics_111,x:1.8,y:-5}).wait(1).to({graphics:mask_graphics_112,x:2.1,y:-5.8}).wait(1).to({graphics:mask_graphics_113,x:2.5,y:-6.6}).wait(1).to({graphics:mask_graphics_114,x:2.9,y:-7.4}).wait(1).to({graphics:mask_graphics_115,x:3.2,y:-8.2}).wait(1).to({graphics:mask_graphics_116,x:3.6,y:-8.9}).wait(1).to({graphics:mask_graphics_117,x:3.9,y:-9.7}).wait(1).to({graphics:mask_graphics_118,x:4.9,y:-11.6}).wait(1).to({graphics:mask_graphics_119,x:5.9,y:-13.5}).wait(1));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("Ao5CgQBBJlEukEQEtkFDDliQDElkBQiD");
	this.shape.setTransform(-7.3,6.9);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(59).to({_off:false},0).wait(61));

	// Layer 3 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("Au2imQELmPHYheQHWheGPELQGIEFBiHIMgjiAHGQhVnMEFmHg");
	var mask_1_graphics_1 = new cjs.Graphics().p("AvIiWQD7mZHThwQHThwGZD7QGRD2B0HEMgjPAIdQhmnJD2mQg");
	var mask_1_graphics_2 = new cjs.Graphics().p("AvZiFQDsmiHOiCQHOiCGiDrQGbDmCFG/Mgi4AJ0Qh4nEDmmag");
	var mask_1_graphics_3 = new cjs.Graphics().p("AvnhzQDbmrHJiUQHJiUGrDbQGjDWCWG6MgieALJQiJm/DWmig");
	var mask_1_graphics_4 = new cjs.Graphics().p("AvzhfQDLm0HDilQHCimGzDKQGsDGCnG1MgiBAMdQiam6DFmpg");
	var mask_1_graphics_5 = new cjs.Graphics().p("Av8hLQC5m8G9i2QG7i3G7C5QGyC2C4GuMghgANwQirmzC1mxg");
	var mask_1_graphics_6 = new cjs.Graphics().p("AwEg2QCpnCG1jIQG0jIHCCoQG5ClDIGmMgg9APDQi8mtCkm3g");
	var mask_1_graphics_7 = new cjs.Graphics().p("AwIghQCWnIGtjYQGtjYHHCWQG/CTDZGfMggWAQTQjMmlCTm+g");
	var mask_1_graphics_8 = new cjs.Graphics().p("AwLgKQCFnOGkjoQGljpHMCFQHECBDpGWI/sRjQjdmdCCnDg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AwLANQBznSGbj5QGbj4HRByQHJBxD4GMI+/SwQjsmUBwnIg");
	var mask_1_graphics_10 = new cjs.Graphics().p("AwJAlQBhnWGRkIQGRkJHVBhQHOBfEHGCI+QT8Qj7mKBenNg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AwEA+QBOnZGHkYQGHkXHYBOQHRBNEVF4I9cVFQkLmABNnQg");
	var mask_1_graphics_12 = new cjs.Graphics().p("Av9BYQA8ncF8kmQF7knHbA8QHTA7EkFtI8mWNQkal1A7nTg");
	var mask_1_graphics_13 = new cjs.Graphics().p("Av0BzQAqneFwk1QFwk1HdApQHVApEyFiI7vXSQknlqAonUg");
	var mask_1_graphics_14 = new cjs.Graphics().p("AvoCOQAXnfFklDQFklDHeAXQHWAXFAFVI60YWQk1leAWnWg");
	var mask_1_graphics_15 = new cjs.Graphics().p("AvaCqQAFnfFXlRQFXlQHfAEQHWAFFNFJI52ZXQlDlTAEnWg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AvJDHQgOnfFKleQFKldHegOQHXgOFZE8I43aWQlPlGgOnWg");
	var mask_1_graphics_17 = new cjs.Graphics().p("Au2DkQggneE8lqQE8lqHeggQHVggFlEuI30bSQlck4ggnWg");
	var mask_1_graphics_18 = new cjs.Graphics().p("AugEDQgzndEul2QEtl2HdgzQHUgyFwEgI2wcMQlnkrgynTg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AuJEhQhFnaEfmBQEfmBHahGQHShEF7ESI1odCQlzkchFnSg");
	var mask_1_graphics_20 = new cjs.Graphics().p("AtvFAQhXnXEQmMQEQmMHXhYQHPhWGFEDI0gd3Ql9kOhXnPg");
	var mask_1_graphics_21 = new cjs.Graphics().p("AtSFgQhqnUEBmWQEAmWHThqQHLhoGPD0IzVeoQmHj/honLg");
	var mask_1_graphics_22 = new cjs.Graphics().p("As0GAQh8nPDxmgQDwmgHPh8QHHh5GYDkIyIfWQmRjwh6nGg");
	var mask_1_graphics_23 = new cjs.Graphics().p("AsUGgQiNnKDgmpQDhmpHKiNQHBiLGgDUMgQ5AgBQmbjgiLnBg");
	var mask_1_graphics_24 = new cjs.Graphics().p("ArxHAQifnEDPmxQDQmxHFigQG7icGoDEMgPpAgqQmjjQicm8g");
	var mask_1_graphics_25 = new cjs.Graphics().p("ArNHgQiwm+C+m4QC/m5G/iwQG0iuGwC0MgOYAhPQmrjAitm2g");
	var mask_1_graphics_26 = new cjs.Graphics().p("AqnIBQjBm4Ctm/QCum/G3jCQGui+G2CjMgNFAhwQmyivi+mug");
	var mask_1_graphics_27 = new cjs.Graphics().p("Ap/IhQjSmvCcnGQCcnGGwjSQGljPG9CSMgLzAiPQm2iejPmng");
	var mask_1_graphics_28 = new cjs.Graphics().p("ApVJCQjjmnCLnLQCKnMGnjjQGejfHBCBMgKdAiqQm8iNjfmeg");
	var mask_1_graphics_29 = new cjs.Graphics().p("Ao8JiQjzmeB5nQQB5nRGdjzQGVjuHGBvMgJHAjDQnBh8jvmWg");
	var mask_1_graphics_30 = new cjs.Graphics().p("AokKDQkDmVBnnUQBmnVGUkDQGLj+HKBdMgHvAjYQnGhrj+mLg");
	var mask_1_graphics_31 = new cjs.Graphics().p("AoLKjQkTmLBVnXQBUnZGKkSQGBkNHNBLMgGYAjpQnJhZkNmBg");
	var mask_1_graphics_32 = new cjs.Graphics().p("AnxLDQkhmABCnaQBCncF/khQF2kbHQA5MgFAAj3QnMhIkcl2g");
	var mask_1_graphics_33 = new cjs.Graphics().p("AnVLiQkwlzAwndQAvneF0kvQFrkqHRAoMgDmAkAQnQg1kplsg");
	var mask_1_graphics_34 = new cjs.Graphics().p("Am4MCQk+loAdneQAdnfFok+QFfk3HSAVMgCNAkIQnRgjk3lgg");
	var mask_1_graphics_35 = new cjs.Graphics().p("AmaMhQlLlbAKnfQALnfFblMQFUlFHSAEMgA0AkLQnSgRlFlUg");
	var mask_1_graphics_36 = new cjs.Graphics().p("Al6NAQlZlOgHngQgIneFNlZQFHlSHSgOMAAlAkLIgCAAQnQAAlRlGg");
	var mask_1_graphics_37 = new cjs.Graphics().p("AlZNdQlllAganfQgbneFAllQE6leHRghMAB+AkIIg0ABQmxAAlKkog");
	var mask_1_graphics_38 = new cjs.Graphics().p("Ak3N4QlxkygtneQgsndEylxQErlpHQgzMADXAkBQgzAEgxAAQmVAAlBkLg");
	var mask_1_graphics_39 = new cjs.Graphics().p("AkROSQl+kjhAnbQhAnbEil9QEdl2HNhFMAE2Aj2QhMAJhKAAQl3AAk3jug");
	var mask_1_graphics_40 = new cjs.Graphics().p("AjrOqQmJkUhTnYQhUnXETmJQENmBHKhYMAGTAjnQhkAQhhAAQlbAAktjSg");
	var mask_1_graphics_41 = new cjs.Graphics().p("AjDO/QmUkDhnnVQhmnTECmUQD9mLHGhrMAHwAjUQh7AZh3AAQlCAAkgi4g");
	var mask_1_graphics_42 = new cjs.Graphics().p("AiaPRQmejyh6nQQh6nPDymdQDsmWHBh9MAJMAi9QiRAkiNAAQkpAAkSigg");
	var mask_1_graphics_43 = new cjs.Graphics().p("Ah5PhQmojhiNnKQiMnKDgmnQDcmfG7iQMAKoAikQinAxijAAQkRAAkDiKg");
	var mask_1_graphics_44 = new cjs.Graphics().p("AhlPuQmxjPifnEQignDDPmxQDLmnG2iiMAMAAiGQi7A/i4AAQj6AAjzh1g");
	var mask_1_graphics_45 = new cjs.Graphics().p("AhQP5Qm5i9iym+Qixm8C9m4QC5mwGvizMANZAhkQjPBPjNAAQjlAAjhhhg");
	var mask_1_graphics_46 = new cjs.Graphics().p("Ag7QBQm/irjEm2QjEm0CrnAQCnm3GnjEMAOxAg/QjhBgjkAAQjOAAjQhPg");
	var mask_1_graphics_47 = new cjs.Graphics().p("AgkQHQnGiZjWmtQjVmtCYnGQCWm9GejWMAQGAgXQjyB0j6AAQi5AAi8g/g");
	var mask_1_graphics_48 = new cjs.Graphics().p("AgMQJQnMiGjnmkQjnmkCGnLQCDnDGVjmIRafqQkCCJkRAAQijAAiogxg");
	var mask_1_graphics_49 = new cjs.Graphics().p("AAMQKQnQhzj4mbQj4maBznQQBwnIGMj3ISse7QkRCgkqAAQiNAAiTgkg");
	var mask_1_graphics_50 = new cjs.Graphics().p("AA2QFQnXhUkSmKQkTmJBUnWQBSnPF7kQIUsdoQknDHlSAAQhqAAhugTg");
	var mask_1_graphics_51 = new cjs.Graphics().p("ABiP5Qncg1krl2Qksl3A1nbQA0nTFokpIWlcOQk4Dzl/AAQhFAAhHgIg");
	var mask_1_graphics_52 = new cjs.Graphics().p("ACQPmQnegVlEliQlDliAVneQAVnWFUlAIYZasQlHEjmxAAIg6gCg");
	var mask_1_graphics_53 = new cjs.Graphics().p("Ap4KKQlblMgKneQgKnWE+lWIaHZCQlIFMnWALIgbAAQnNAAlQlDg");
	var mask_1_graphics_54 = new cjs.Graphics().p("ApaKgQlvk0gqndQgonVEnlqIbtXSQkyFhnUApQg4AFg3AAQmZAAlFkRg");
	var mask_1_graphics_55 = new cjs.Graphics().p("Ao2KxQmDkchInZQhInREPl9IdLVaQkaF0nQBIQhhAPhcAAQlrAAk1jig");
	var mask_1_graphics_56 = new cjs.Graphics().p("AoMK8QmVkChonUQhmnLD1mOIeiTdQkBGGnLBmQiGAeiBAAQlAAAkhi4g");
	var mask_1_graphics_57 = new cjs.Graphics().p("AnfLBQmljniGnMQiEnDDbmdIfwRaQjnGWnDCEQiqAxikAAQkZAAkLiSg");
	var mask_1_graphics_58 = new cjs.Graphics().p("AmsLBQm0jLiknDQihm5C/mqMAg1APSQjMGlm6ChQjJBJjHAAQj1AAjwhwg");
	var mask_1_graphics_59 = new cjs.Graphics().p("Al2K8QnAiujBm3Qi+muCim2MAhyANGQiwGxmuC+QjoBmjqAAQjRAAjUhSg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:-34.3,y:-25.7}).wait(1).to({graphics:mask_1_graphics_1,x:-34.8,y:-23.5}).wait(1).to({graphics:mask_1_graphics_2,x:-35.3,y:-21.3}).wait(1).to({graphics:mask_1_graphics_3,x:-36,y:-19.2}).wait(1).to({graphics:mask_1_graphics_4,x:-36.7,y:-17}).wait(1).to({graphics:mask_1_graphics_5,x:-37.4,y:-14.9}).wait(1).to({graphics:mask_1_graphics_6,x:-38.3,y:-12.9}).wait(1).to({graphics:mask_1_graphics_7,x:-39.2,y:-10.8}).wait(1).to({graphics:mask_1_graphics_8,x:-40.2,y:-8.8}).wait(1).to({graphics:mask_1_graphics_9,x:-41.2,y:-6.8}).wait(1).to({graphics:mask_1_graphics_10,x:-42.3,y:-4.9}).wait(1).to({graphics:mask_1_graphics_11,x:-43.5,y:-3}).wait(1).to({graphics:mask_1_graphics_12,x:-44.8,y:-1.2}).wait(1).to({graphics:mask_1_graphics_13,x:-46.1,y:0.6}).wait(1).to({graphics:mask_1_graphics_14,x:-47.5,y:2.3}).wait(1).to({graphics:mask_1_graphics_15,x:-49,y:4}).wait(1).to({graphics:mask_1_graphics_16,x:-50.6,y:5.5}).wait(1).to({graphics:mask_1_graphics_17,x:-52.2,y:7}).wait(1).to({graphics:mask_1_graphics_18,x:-53.9,y:8.4}).wait(1).to({graphics:mask_1_graphics_19,x:-55.6,y:9.8}).wait(1).to({graphics:mask_1_graphics_20,x:-57.4,y:11}).wait(1).to({graphics:mask_1_graphics_21,x:-59.3,y:12.2}).wait(1).to({graphics:mask_1_graphics_22,x:-61.1,y:13.4}).wait(1).to({graphics:mask_1_graphics_23,x:-63.1,y:14.4}).wait(1).to({graphics:mask_1_graphics_24,x:-65,y:15.4}).wait(1).to({graphics:mask_1_graphics_25,x:-67,y:16.3}).wait(1).to({graphics:mask_1_graphics_26,x:-69.1,y:17.1}).wait(1).to({graphics:mask_1_graphics_27,x:-71.1,y:17.9}).wait(1).to({graphics:mask_1_graphics_28,x:-73.2,y:18.6}).wait(1).to({graphics:mask_1_graphics_29,x:-73.5,y:19.1}).wait(1).to({graphics:mask_1_graphics_30,x:-73.5,y:19.6}).wait(1).to({graphics:mask_1_graphics_31,x:-73.4,y:20}).wait(1).to({graphics:mask_1_graphics_32,x:-73.3,y:20.4}).wait(1).to({graphics:mask_1_graphics_33,x:-73.3,y:20.7}).wait(1).to({graphics:mask_1_graphics_34,x:-73.2,y:20.9}).wait(1).to({graphics:mask_1_graphics_35,x:-73.2,y:20.9}).wait(1).to({graphics:mask_1_graphics_36,x:-73.2,y:21}).wait(1).to({graphics:mask_1_graphics_37,x:-73.1,y:21}).wait(1).to({graphics:mask_1_graphics_38,x:-73.1,y:21.1}).wait(1).to({graphics:mask_1_graphics_39,x:-73.2,y:21.4}).wait(1).to({graphics:mask_1_graphics_40,x:-73.2,y:21.8}).wait(1).to({graphics:mask_1_graphics_41,x:-73.2,y:22.2}).wait(1).to({graphics:mask_1_graphics_42,x:-73.2,y:22.7}).wait(1).to({graphics:mask_1_graphics_43,x:-72.4,y:23.4}).wait(1).to({graphics:mask_1_graphics_44,x:-70.1,y:24.1}).wait(1).to({graphics:mask_1_graphics_45,x:-67.9,y:24.9}).wait(1).to({graphics:mask_1_graphics_46,x:-65.7,y:25.7}).wait(1).to({graphics:mask_1_graphics_47,x:-63.5,y:26.7}).wait(1).to({graphics:mask_1_graphics_48,x:-61.4,y:27.7}).wait(1).to({graphics:mask_1_graphics_49,x:-59.2,y:28.8}).wait(1).to({graphics:mask_1_graphics_50,x:-55.9,y:30.7}).wait(1).to({graphics:mask_1_graphics_51,x:-52.8,y:32.8}).wait(1).to({graphics:mask_1_graphics_52,x:-49.9,y:35.2}).wait(1).to({graphics:mask_1_graphics_53,x:-47.2,y:37.7}).wait(1).to({graphics:mask_1_graphics_54,x:-44.6,y:40.5}).wait(1).to({graphics:mask_1_graphics_55,x:-42.3,y:43.4}).wait(1).to({graphics:mask_1_graphics_56,x:-40.2,y:46.5}).wait(1).to({graphics:mask_1_graphics_57,x:-38.4,y:49.7}).wait(1).to({graphics:mask_1_graphics_58,x:-36.7,y:53.1}).wait(1).to({graphics:mask_1_graphics_59,x:-35.1,y:56.4}).wait(61));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},30).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.5,19.1,45.8,23.7);


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
	var mask_graphics_3 = new cjs.Graphics().p("A9OKbQBLsFJWnsQJZnvMEBLQMFBLHtJYQHuJWhLMFg");
	var mask_graphics_4 = new cjs.Graphics().p("A9QLYQA6sGJMn6QJNn7MGA6QMHA6H5JNQH8JLg6MHg");
	var mask_graphics_5 = new cjs.Graphics().p("A9RMVQApsIJBoFQJCoIMHApQMHApIHJCQIII/gpMIg");
	var mask_graphics_6 = new cjs.Graphics().p("A9RNSQAYsII1oSQI2oVMIAZQMIAYITI2QIUI0gYMJg");
	var mask_graphics_7 = new cjs.Graphics().p("A9SOQQAHsJIpoeQIrohMIAHQMJAHIfIrQIhIogHMJg");
	var mask_graphics_8 = new cjs.Graphics().p("A0+l+QIeosMJgKQMIgKIrIeQItIdAKMIMg6lAAwQgKsIIeorg");
	var mask_graphics_9 = new cjs.Graphics().p("A1al0QISo5MJgbQMHgbI3ITQI4IQAbMIMg6iACCQgbsIIRo2g");
	var mask_graphics_10 = new cjs.Graphics().p("A11lqQIGpEMIgsQMGgsJDIGQJEIDAsMIMg6fADUQgssIIEpBg");
	var mask_graphics_11 = new cjs.Graphics().p("A2OlgQH5pPMGg9QMGg9JNH5QJPH4A9MFMg6ZAEmQg9sGH4pNg");
	var mask_graphics_12 = new cjs.Graphics().p("A2mlUQHrpaMFhOQMEhOJZHsQJaHqBOMEMg6SAF4QhOsFHrpXg");
	var mask_graphics_13 = new cjs.Graphics().p("A29lJQHepkMDhfQMChfJjHfQJlHdBfMCMg6JAHKQhfsEHepig");
	var mask_graphics_14 = new cjs.Graphics().p("A3Tk8QHRpvMBhwQL/hvJuHRQJvHQBvL/Mg59AIbQhwsBHQpsg");
	var mask_graphics_15 = new cjs.Graphics().p("A3okvQHDp5L+iAQL+iBJ3HEQJ5HCCAL9Mg5xAJsQiAr/HCp2g");
	var mask_graphics_16 = new cjs.Graphics().p("A38khQG2qDL7iRQL6iRKBG2QKDGzCRL7Mg5jAK8QiRr7G0qAg");
	var mask_graphics_17 = new cjs.Graphics().p("A4OkTQGnqML4iiQL3ihKKGnQKMGmCiL2Mg5SAMNQiir3GmqKg");
	var mask_graphics_18 = new cjs.Graphics().p("A4fkEQGZqVL0iyQLzizKTGZQKVGYCzLzMg5AANdQizr0GYqTg");
	var mask_graphics_19 = new cjs.Graphics().p("A4vj0QGKqeLwjDQLvjDKdGKQKdGJDDLvMg4sAOtQjDrwGJqbg");
	var mask_graphics_20 = new cjs.Graphics().p("A4+jkQF7qnLsjTQLqjUKlF8QKnF6DTLrMg4XAP8QjTrsF6qjg");
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
	var mask_graphics_36 = new cjs.Graphics().p("A6HBcQB8r+J1nHQJ2nHL9B9QL+B6HHJ1MgvdAiTQnHp1B7r+g");
	var mask_graphics_37 = new cjs.Graphics().p("A6BB0QBrsBJrnUQJsnVL/BsQMBBpHVJsMgutAjUQnVprBrsAg");
	var mask_graphics_38 = new cjs.Graphics().p("A56CMQBasDJhniQJhniMCBbQMDBZHiJhMgt6AkVQnjphBasCg");
	var mask_graphics_39 = new cjs.Graphics().p("A5yClQBJsFJXnvQJWnvMEBKQMFBHHvJXMgtHAlVQnvpWBIsEg");
	var mask_graphics_40 = new cjs.Graphics().p("A5oC+QA4sGJLn8QJMn9MFA5QMGA3H8JLMgsRAmUQn9pLA4sFg");
	var mask_graphics_41 = new cjs.Graphics().p("A5dDXQAnsHJAoJQJAoJMGAoQMIAmIJJAMgrcAnSQoJpAAnsHg");
	var mask_graphics_42 = new cjs.Graphics().p("A5RDxQAWsII1oVQI0oWMHAXQMIAVIWI1MgqkAoOQoWo1AWsHg");
	var mask_graphics_43 = new cjs.Graphics().p("A5DELQAFsIIpohQIooiMHAGQMIAEIiIoMgpqApJQoiopAFsHg");
	var mask_graphics_44 = new cjs.Graphics().p("A40EmQgMsIIcouQIdotMHgLQMIgNIuIcMgoxAqDQotodgMsHg");
	var mask_graphics_45 = new cjs.Graphics().p("A4kFBQgdsIIQo5QIQo5MHgcQMHgeI6IQMgn1Aq7Qo5oQgdsHg");
	var mask_graphics_46 = new cjs.Graphics().p("A4TFcQgusGIEpFQIDpFMGgtQMHgvJFIEMgm4AryQpFoEgusGg");
	var mask_graphics_47 = new cjs.Graphics().p("A4AF4Qg/sFH2pQQH3pQMFg+QMFhAJQH3Mgl6AsnQpQn2g+sFg");
	var mask_graphics_48 = new cjs.Graphics().p("A3tGUQhQsEHqpbQHqpbMDhOQMEhRJbHqMgk7AtcQpbnqhQsDg");
	var mask_graphics_49 = new cjs.Graphics().p("A3YGwQhgsCHcplQHcpmMChfQMChiJlHdMgj7AuPQplndhhsBg");
	var mask_graphics_50 = new cjs.Graphics().p("A3BHNQhysAHPpwQHPpvL/hxQL/hyJwHPMgi5AvAQpwnOhxr/g");
	var mask_graphics_51 = new cjs.Graphics().p("A2qHqQiDr9HCp6QHBp6L8iBQL9iDJ5HBMgh2AvxQp6nBiCr8g");
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
	var mask_graphics_80 = new cjs.Graphics().p("AlyVgQo7oQgesIQgesHIQo5QINo6MIgfMACRA6hQgpACgqAAQrTAAoZnyg");
	var mask_graphics_81 = new cjs.Graphics().p("AlnV8QpHoCgxsHQgwsGICpFQIBpHMGgxMADqA6cQhDAFhCAAQq0AAoSnVg");
	var mask_graphics_82 = new cjs.Graphics().p("AlcWXQpSn0hDsFQhDsFH0pSQHzpSMEhDMAFDA6VQhbAIhZAAQqYAAoKm4g");
	var mask_graphics_83 = new cjs.Graphics().p("AlPWxQpfnmhVsEQhVsDHmpdQHkpeMDhVMAGcA6MQh0ANhwAAQp7AAoBmcg");
	var mask_graphics_84 = new cjs.Graphics().p("AlCXKQpqnYhnsBQhosBHXppQHWppMBhoMAH0A6CQiLATiGAAQpgAAn4mBg");
	var mask_graphics_85 = new cjs.Graphics().p("Ak0XhQp1nJh6r/Qh6r+HJpzQHHp1L+h6MAJMA51QiiAaibAAQpGAAnulng");
	var mask_graphics_86 = new cjs.Graphics().p("AklX2QqAm5iMr8QiMr7G6p+QG4p/L7iMMAKkA5mQi5AhixAAQosAAnjlOg");
	var mask_graphics_87 = new cjs.Graphics().p("AkWYLQqKmqier5Qier3GqqJQGpqJL3ieMAL8A5VQjPAqjGAAQoTAAnYk1g");
	var mask_graphics_88 = new cjs.Graphics().p("AkGYeQqUmbiwr0Qiwr0GbqSQGZqULziwMANTA5CQjkA1jbAAQn8AAnLkeg");
	var mask_graphics_89 = new cjs.Graphics().p("Aj1YvQqemLjCrwQjCrvGLqcQGKqdLvjCMAOpA4tQj5BAjvAAQnlAAm+kIg");
	var mask_graphics_90 = new cjs.Graphics().p("AjkY/Qqml6jUrsQjUrqF7qlQF5qmLqjUMAP/A4VQkMBMkEAAQnOAAmxjyg");
	var mask_graphics_91 = new cjs.Graphics().p("AjSZOQqvlqjmrnQjlrlFrquQFpqvLljlMARUA38QkgBZkYAAQm4AAmjjdg");
	var mask_graphics_92 = new cjs.Graphics().p("Ai/ZbQq4laj3rgQj3rfFaq3QFZq3Lfj3MASpA3gQkzBnksAAQmjAAmTjJg");
	var mask_graphics_93 = new cjs.Graphics().p("AisZnQrAlJkJraQkIraFKq+QFIrALakIMAT8A3DQlFB2lBAAQmNAAmEi2g");
	var mask_graphics_94 = new cjs.Graphics().p("AiYZyQrIk5karUQkarSE6rHQE3rHLUkaMAVPA2lQlXCGlVAAQl5AAlzikg");
	var mask_graphics_95 = new cjs.Graphics().p("AiEZ7QrPkokrrNQkrrMEprNQEmrOLNkrMAWiA2DQlpCWlpAAQlkAAljiSg");
	var mask_graphics_96 = new cjs.Graphics().p("AhvaCQrWkWk8rGQk7rEEXrUQEVrVLFk8MAX0A1fQl5Col+AAQlPAAlSiCg");
	var mask_graphics_97 = new cjs.Graphics().p("AhZaJQrckGlNq9QlNq+EGraQEErbK+lNMAZEA06QmJC7mTAAQk7AAk/hyg");
	var mask_graphics_98 = new cjs.Graphics().p("AhDaNQrijzleq2Qldq2D0rgQDzrhK1ldMAaVA0TQmZDOmoAAQkmAAkthkg");
	var mask_graphics_99 = new cjs.Graphics().p("AgtaRQrojiltquQluqtDjrlQDhrnKtluMAbkAzrQmoDim9AAQkTAAkahWg");
	var mask_graphics_100 = new cjs.Graphics().p("AgWaTQrtjRl+qkQl9qlDRrqQDPrsKkl+MAcyAzAQm2D3nTAAQj/AAkGhJg");
	var mask_graphics_101 = new cjs.Graphics().p("AABaTQrxi+mOqcQmOqbDArvQC9rxKbmOMAd/AyTQnDEOnqAAQjqAAjzg+g");
	var mask_graphics_102 = new cjs.Graphics().p("AAZaSQr1ismeqSQmdqSCtrzQCrr1KSmeMAfLAxlQnQEkoCAAQjVAAjegzg");
	var mask_graphics_103 = new cjs.Graphics().p("AAxaQQr4ibmuqHQmtqICcr3QCZr5KImtMAgWAw0QndE7oZAAQjBAAjJgog");
	var mask_graphics_104 = new cjs.Graphics().p("ABKaMQr8iJm8p9Qm9p9CKr7QCHr8J9m9MAhgAwCQnoFVoyAAQisAAizggg");
	var mask_graphics_105 = new cjs.Graphics().p("ABkaGQr/h2nMpyQnLpzB3r+QB1r/JynLMAioAvOQnyFtpLAAQiXAAicgYg");
	var mask_graphics_106 = new cjs.Graphics().p("AB+Z/QsChjnapoQnapnBlsBQBisCJonaMAjvAuZQn8GIpmAAQiBAAiFgSg");
	var mask_graphics_107 = new cjs.Graphics().p("ACYZ3QsEhRnopcQnppcBTsDQBQsEJcnpMAk1AtiQoGGjqAAAQhrAAhugMg");
	var mask_graphics_108 = new cjs.Graphics().p("ACzZtQsFg/n3pQQn3pQBAsFQA+sFJQn3MAl6AsoQoOG/qdAAQhUAAhWgHg");
	var mask_graphics_109 = new cjs.Graphics().p("ADPZiQsHgtoFpEQoFpEAusGQAssHJEoFMAm9ArvQoWHbq6ABQg9AAg9gEg");
	var mask_graphics_110 = new cjs.Graphics().p("ADrZVQsIgaoTo4QoSo3AbsHQAasII3oSMAn/AqyQodH5rZAAIhIgBg");
	var mask_graphics_111 = new cjs.Graphics().p("AEHZHQsIgIogorQogorAJsHQAHsIIrogMAo/Ap1QojIYr5AAIgWAAg");
	var mask_graphics_112 = new cjs.Graphics().p("AwRQkQotoegJsHQgMsIIeotMAp+Ao2QoeIssHALIgeAAQr1AAoioTg");
	var mask_graphics_113 = new cjs.Graphics().p("AwAQyQo6oQgcsHQgesIIRo5MAq7An1QoQI6sHAdQgoABgoAAQrVAAocn1g");
	var mask_graphics_114 = new cjs.Graphics().p("AvuRAQpGoDgusGQgxsHIDpGMAr3AmzQoCJGsGAwQhCAEhAAAQq2AAoVnXg");
	var mask_graphics_115 = new cjs.Graphics().p("AvbRMQpRn1hBsFQhDsFH1pSMAsxAlwQn1JSsEBBQhaAIhYAAQqZAAoNm6g");
	var mask_graphics_116 = new cjs.Graphics().p("AvGRWQpenmhTsDQhVsDHmpeMAtrAkrQnnJesDBUQhyAMhuAAQp9AAoEmfg");
	var mask_graphics_117 = new cjs.Graphics().p("AuwRgQppnYhmsAQhosCHYppMAuiAjlQnYJpsBBmQiJATiFAAQpiAAn6mEg");
	var mask_graphics_118 = new cjs.Graphics().p("AuaRpQp0nJh4r+Qh5r/HJp0MAvWAidQnJJ0r+B5QigAZibAAQpHAAnxlpg");
	var mask_graphics_119 = new cjs.Graphics().p("AuCRwQp/m6iKr7QiMr8G6p+MAwKAhUQm6J/r6CLQi4AhivAAQouAAnmlQg");
	var mask_graphics_120 = new cjs.Graphics().p("AtpR2QqJmricr3Qifr4GrqJMAw8AgLQmrKJr3CdQjNAqjFAAQoVAAnak4g");
	var mask_graphics_121 = new cjs.Graphics().p("AtQR7QqTmbiur0Qiwr0GcqTMAxrAfAQmbKTrzCvQjiA1jaAAQn9AAnPkhg");
	var mask_graphics_122 = new cjs.Graphics().p("As1R/QqcmLjArxQjCruGLqdMAyaAd0QmLKdrvDAQj3BAjuAAQnnAAnBkKg");
	var mask_graphics_123 = new cjs.Graphics().p("AsZSCQqml8jSrrQjUrqF8qmMAzHAcnQl8KmrqDSQkLBMkDAAQnPAAm0j0g");
	var mask_graphics_124 = new cjs.Graphics().p("Ar8SDQqvlrjkrmQjlrlFrquMAzyAbYQlsKvrlDkQkfBYkXAAQm5AAmljfg");
	var mask_graphics_125 = new cjs.Graphics().p("ArfSEQq3lbj1rhQj3rfFbq3MA0aAaKQlbK3rfD1QkzBnkqAAQmkAAmXjLg");
	var mask_graphics_126 = new cjs.Graphics().p("ArASDQrAlKkGrbQkJrZFLq/MA1BAY5QlLLArZEHQlFB1k/AAQmOAAmHi4g");
	var mask_graphics_127 = new cjs.Graphics().p("AqhSBQrHk5kYrUQkZrTE5rHMA1mAXoQk5LHrTEZQlXCFlUAAQl5AAl3img");
	var mask_graphics_128 = new cjs.Graphics().p("AqBR+QrOkokprOQkrrLEprOMA2JAWWQkpLOrMEqQloCVloAAQllAAlmiUg");
	var mask_graphics_129 = new cjs.Graphics().p("ApgR6QrVkXk5rGQk8rEEXrVMA2qAVDQkXLVrFE6Ql5Cnl9AAQlQAAlViDg");
	var mask_graphics_130 = new cjs.Graphics().p("Ao+R1QrbkGlLq/QlMq8EGrcMA3JATwQkGLcq9FLQmJC6mSAAQk8AAlDh0g");
	var mask_graphics_131 = new cjs.Graphics().p("AobRvQrhj1lcq3Qldq0D1rhMA3mAScQj1Lhq1FbQmYDNmnAAQkoAAkwhkg");
	var mask_graphics_132 = new cjs.Graphics().p("An3RnQrnjjlsquQluqsDjrnMA4CARIQjjLmqtFsQmnDhm9AAQkTAAkdhXg");
	var mask_graphics_133 = new cjs.Graphics().p("AnTReQrsjRl8qlQl+qjDRrsMA4bAPyQjSLrqjF8Qm2D2nTAAQj/AAkJhKg");
	var mask_graphics_134 = new cjs.Graphics().p("AmuRUQrxi/mMqcQmNqaC/rxMA4xAOcQi/LwqbGNQnDEMnpAAQjrAAj1g/g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:18.9,y:-77.2}).wait(1).to({graphics:mask_graphics_1,x:18.5,y:-79.2}).wait(1).to({graphics:mask_graphics_2,x:18.2,y:-81.2}).wait(1).to({graphics:mask_graphics_3,x:18,y:-83.3}).wait(1).to({graphics:mask_graphics_4,x:17.8,y:-85.3}).wait(1).to({graphics:mask_graphics_5,x:17.7,y:-87.4}).wait(1).to({graphics:mask_graphics_6,x:17.6,y:-89.4}).wait(1).to({graphics:mask_graphics_7,x:17.5,y:-91.5}).wait(1).to({graphics:mask_graphics_8,x:17.5,y:-91.1}).wait(1).to({graphics:mask_graphics_9,x:17.4,y:-89.1}).wait(1).to({graphics:mask_graphics_10,x:17.3,y:-87.1}).wait(1).to({graphics:mask_graphics_11,x:17.2,y:-85.1}).wait(1).to({graphics:mask_graphics_12,x:17,y:-83.1}).wait(1).to({graphics:mask_graphics_13,x:16.7,y:-81.1}).wait(1).to({graphics:mask_graphics_14,x:16.4,y:-79.1}).wait(1).to({graphics:mask_graphics_15,x:16.1,y:-77.1}).wait(1).to({graphics:mask_graphics_16,x:15.7,y:-75.1}).wait(1).to({graphics:mask_graphics_17,x:15.2,y:-73.1}).wait(1).to({graphics:mask_graphics_18,x:14.7,y:-71.1}).wait(1).to({graphics:mask_graphics_19,x:14.2,y:-69.2}).wait(1).to({graphics:mask_graphics_20,x:13.7,y:-67.2}).wait(1).to({graphics:mask_graphics_21,x:13.1,y:-65.3}).wait(1).to({graphics:mask_graphics_22,x:12.4,y:-63.4}).wait(1).to({graphics:mask_graphics_23,x:11.7,y:-61.5}).wait(1).to({graphics:mask_graphics_24,x:11,y:-59.5}).wait(1).to({graphics:mask_graphics_25,x:10.3,y:-57.7}).wait(1).to({graphics:mask_graphics_26,x:9.5,y:-55.8}).wait(1).to({graphics:mask_graphics_27,x:8.6,y:-53.9}).wait(1).to({graphics:mask_graphics_28,x:7.7,y:-52}).wait(1).to({graphics:mask_graphics_29,x:6.8,y:-50.2}).wait(1).to({graphics:mask_graphics_30,x:5.9,y:-48.4}).wait(1).to({graphics:mask_graphics_31,x:4.9,y:-46.6}).wait(1).to({graphics:mask_graphics_32,x:3.9,y:-44.8}).wait(1).to({graphics:mask_graphics_33,x:2.8,y:-43}).wait(1).to({graphics:mask_graphics_34,x:1.7,y:-41.3}).wait(1).to({graphics:mask_graphics_35,x:0.6,y:-39.6}).wait(1).to({graphics:mask_graphics_36,x:-0.6,y:-37.9}).wait(1).to({graphics:mask_graphics_37,x:-1.8,y:-36.2}).wait(1).to({graphics:mask_graphics_38,x:-3,y:-34.6}).wait(1).to({graphics:mask_graphics_39,x:-4.3,y:-33}).wait(1).to({graphics:mask_graphics_40,x:-5.6,y:-31.4}).wait(1).to({graphics:mask_graphics_41,x:-7,y:-29.9}).wait(1).to({graphics:mask_graphics_42,x:-8.4,y:-28.3}).wait(1).to({graphics:mask_graphics_43,x:-9.8,y:-26.9}).wait(1).to({graphics:mask_graphics_44,x:-11.3,y:-25.4}).wait(1).to({graphics:mask_graphics_45,x:-12.8,y:-24}).wait(1).to({graphics:mask_graphics_46,x:-14.3,y:-22.7}).wait(1).to({graphics:mask_graphics_47,x:-15.9,y:-21.4}).wait(1).to({graphics:mask_graphics_48,x:-17.5,y:-20.1}).wait(1).to({graphics:mask_graphics_49,x:-19.2,y:-18.9}).wait(1).to({graphics:mask_graphics_50,x:-20.8,y:-17.6}).wait(1).to({graphics:mask_graphics_51,x:-22.5,y:-16.5}).wait(1).to({graphics:mask_graphics_52,x:-24.2,y:-15.3}).wait(1).to({graphics:mask_graphics_53,x:-26,y:-14.2}).wait(1).to({graphics:mask_graphics_54,x:-27.8,y:-13.2}).wait(1).to({graphics:mask_graphics_55,x:-29.6,y:-12.2}).wait(1).to({graphics:mask_graphics_56,x:-31.4,y:-11.2}).wait(1).to({graphics:mask_graphics_57,x:-33.2,y:-10.2}).wait(1).to({graphics:mask_graphics_58,x:-35.1,y:-9.3}).wait(1).to({graphics:mask_graphics_59,x:-36.9,y:-8.4}).wait(1).to({graphics:mask_graphics_60,x:-38.8,y:-7.6}).wait(1).to({graphics:mask_graphics_61,x:-40.7,y:-6.8}).wait(1).to({graphics:mask_graphics_62,x:-42.6,y:-6}).wait(1).to({graphics:mask_graphics_63,x:-44.6,y:-5.3}).wait(1).to({graphics:mask_graphics_64,x:-46.5,y:-4.6}).wait(1).to({graphics:mask_graphics_65,x:-48.4,y:-3.9}).wait(1).to({graphics:mask_graphics_66,x:-50.4,y:-3.3}).wait(1).to({graphics:mask_graphics_67,x:-52.4,y:-2.7}).wait(1).to({graphics:mask_graphics_68,x:-54.4,y:-2.2}).wait(1).to({graphics:mask_graphics_69,x:-56.4,y:-1.7}).wait(1).to({graphics:mask_graphics_70,x:-58.6,y:-1.2}).wait(1).to({graphics:mask_graphics_71,x:-60.8,y:-0.8}).wait(1).to({graphics:mask_graphics_72,x:-63,y:-0.4}).wait(1).to({graphics:mask_graphics_73,x:-65.2,y:-0.1}).wait(1).to({graphics:mask_graphics_74,x:-67.4,y:0.2}).wait(1).to({graphics:mask_graphics_75,x:-69.6,y:0.5}).wait(1).to({graphics:mask_graphics_76,x:-71.8,y:0.6}).wait(1).to({graphics:mask_graphics_77,x:-74,y:0.8}).wait(1).to({graphics:mask_graphics_78,x:-76.3,y:0.8}).wait(1).to({graphics:mask_graphics_79,x:-75.7,y:0.8}).wait(1).to({graphics:mask_graphics_80,x:-73.5,y:0.9}).wait(1).to({graphics:mask_graphics_81,x:-71.3,y:1}).wait(1).to({graphics:mask_graphics_82,x:-69.1,y:1.2}).wait(1).to({graphics:mask_graphics_83,x:-67,y:1.5}).wait(1).to({graphics:mask_graphics_84,x:-64.8,y:1.8}).wait(1).to({graphics:mask_graphics_85,x:-62.6,y:2.1}).wait(1).to({graphics:mask_graphics_86,x:-60.5,y:2.5}).wait(1).to({graphics:mask_graphics_87,x:-58.4,y:3}).wait(1).to({graphics:mask_graphics_88,x:-56.2,y:3.5}).wait(1).to({graphics:mask_graphics_89,x:-54.1,y:4.1}).wait(1).to({graphics:mask_graphics_90,x:-52,y:4.7}).wait(1).to({graphics:mask_graphics_91,x:-49.9,y:5.4}).wait(1).to({graphics:mask_graphics_92,x:-47.8,y:6.1}).wait(1).to({graphics:mask_graphics_93,x:-45.7,y:6.8}).wait(1).to({graphics:mask_graphics_94,x:-43.6,y:7.6}).wait(1).to({graphics:mask_graphics_95,x:-41.6,y:8.5}).wait(1).to({graphics:mask_graphics_96,x:-39.6,y:9.3}).wait(1).to({graphics:mask_graphics_97,x:-37.6,y:10.3}).wait(1).to({graphics:mask_graphics_98,x:-35.6,y:11.3}).wait(1).to({graphics:mask_graphics_99,x:-33.6,y:12.3}).wait(1).to({graphics:mask_graphics_100,x:-31.6,y:13.4}).wait(1).to({graphics:mask_graphics_101,x:-29.7,y:14.5}).wait(1).to({graphics:mask_graphics_102,x:-27.8,y:15.6}).wait(1).to({graphics:mask_graphics_103,x:-25.9,y:16.8}).wait(1).to({graphics:mask_graphics_104,x:-24,y:18}).wait(1).to({graphics:mask_graphics_105,x:-22.2,y:19.3}).wait(1).to({graphics:mask_graphics_106,x:-20.4,y:20.7}).wait(1).to({graphics:mask_graphics_107,x:-18.6,y:22}).wait(1).to({graphics:mask_graphics_108,x:-16.9,y:23.4}).wait(1).to({graphics:mask_graphics_109,x:-15.2,y:24.9}).wait(1).to({graphics:mask_graphics_110,x:-13.6,y:26.4}).wait(1).to({graphics:mask_graphics_111,x:-12,y:27.9}).wait(1).to({graphics:mask_graphics_112,x:-10.4,y:29.5}).wait(1).to({graphics:mask_graphics_113,x:-8.9,y:31.2}).wait(1).to({graphics:mask_graphics_114,x:-7.4,y:32.8}).wait(1).to({graphics:mask_graphics_115,x:-6,y:34.6}).wait(1).to({graphics:mask_graphics_116,x:-4.6,y:36.3}).wait(1).to({graphics:mask_graphics_117,x:-3.3,y:38.1}).wait(1).to({graphics:mask_graphics_118,x:-2,y:39.9}).wait(1).to({graphics:mask_graphics_119,x:-0.7,y:41.8}).wait(1).to({graphics:mask_graphics_120,x:0.5,y:43.7}).wait(1).to({graphics:mask_graphics_121,x:1.6,y:45.6}).wait(1).to({graphics:mask_graphics_122,x:2.8,y:47.6}).wait(1).to({graphics:mask_graphics_123,x:3.9,y:49.5}).wait(1).to({graphics:mask_graphics_124,x:4.9,y:51.5}).wait(1).to({graphics:mask_graphics_125,x:5.9,y:53.5}).wait(1).to({graphics:mask_graphics_126,x:6.8,y:55.6}).wait(1).to({graphics:mask_graphics_127,x:7.8,y:57.6}).wait(1).to({graphics:mask_graphics_128,x:8.6,y:59.7}).wait(1).to({graphics:mask_graphics_129,x:9.4,y:61.8}).wait(1).to({graphics:mask_graphics_130,x:10.2,y:63.9}).wait(1).to({graphics:mask_graphics_131,x:11,y:66}).wait(1).to({graphics:mask_graphics_132,x:11.6,y:68.1}).wait(1).to({graphics:mask_graphics_133,x:12.3,y:70.2}).wait(1).to({graphics:mask_graphics_134,x:13,y:72.3}).wait(1));

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
(lib.WS_Cursive_R = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_820 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(820).call(this.frame_820).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(102.9,273.1,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[103.1,273.3,129.2,261.9,153.5,247.4,178,233,201,215.5,224.1,198,243.3,181,262.4,164,276.9,148.1]}},101).to({x:289.8,y:124},9).wait(15).to({startPosition:0},0).to({x:136.1,y:426.2},135).wait(16).to({x:274.1,y:152.2},0).to({guide:{path:[274,152.3,291,139.8,315.9,131.7,364.8,115.9,404,130.2,443.2,144.5,449.6,180.5,456.1,216.6,426,253.3,395.9,290.1,347,305.9,298,321.8,258.9,307.5,226.1,295.5,217.2,270.2]}},210).wait(15).to({startPosition:0},0).to({guide:{path:[217.2,270.2,220.5,256.8,229.3,258.5,277.9,273.6,269.3,352.5,265,391.9,272.2,411.3,279.4,430.8,298.1,430.3,335.4,429.2,374.8,407.4,414.2,385.5,440,358.4,465.7,331.4,479.6,315.9]}},229).wait(16).to({startPosition:0},0).to({guide:{path:[481,315,516.5,247.6,571.6,312,585.8,328.6,607.2,327.8,623.4,327.4,634.9,315.1]}},65).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(290,123.2,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},110).wait(15).to({_off:false,x:136.2,y:425.9},0).to({_off:true},135).wait(16).to({_off:false,x:216.2,y:268.4},0).to({_off:true},210).wait(15).to({_off:false,x:480.2,y:316.4},0).to({_off:true},229).wait(82));

	// Layer 15
	this.instance_1 = new lib.ar6("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(371.7,342.3,1,1,22.2,0,0,-1.1,1.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(510).to({_off:false},0).wait(311));

	// Layer 12 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_510 = new cjs.Graphics().p("AMxSBIDti3IB0CWIjsC4g");
	var mask_graphics_511 = new cjs.Graphics().p("AiyALIDqi1IB7CgIjpC1g");
	var mask_graphics_512 = new cjs.Graphics().p("Ai1AGIDoizICDCoIjoCzg");
	var mask_graphics_513 = new cjs.Graphics().p("Ai3AAIDlixICKCxIjlCyg");
	var mask_graphics_514 = new cjs.Graphics().p("Ai6gEIDjixICSC6IjkCxg");
	var mask_graphics_515 = new cjs.Graphics().p("Ai9gJIDjivICXDCIjhCvg");
	var mask_graphics_516 = new cjs.Graphics().p("Ai/gOIDgitICfDKIjgCug");
	var mask_graphics_517 = new cjs.Graphics().p("AjCgUIDeirICnDUIjeCrg");
	var mask_graphics_518 = new cjs.Graphics().p("AjFgZIDdiqICtDdIjbCqg");
	var mask_graphics_519 = new cjs.Graphics().p("AjHgeIDaioIC1DlIjaCog");
	var mask_graphics_520 = new cjs.Graphics().p("AjOgkIDdirIDAD1IjdCqg");
	var mask_graphics_521 = new cjs.Graphics().p("AjVgqIDgitIDLEDIjgCsg");
	var mask_graphics_522 = new cjs.Graphics().p("AjcgwIDjivIDWEQIjjCwg");
	var mask_graphics_523 = new cjs.Graphics().p("Ajjg2IDliyIDiEgIjmCxg");
	var mask_graphics_524 = new cjs.Graphics().p("Ajqg8IDpi0IDrEtIjoC0g");
	var mask_graphics_525 = new cjs.Graphics().p("AjxhCIDti2ID2E8IjsC1g");
	var mask_graphics_526 = new cjs.Graphics().p("Aj4hIIDvi5IECFLIjvC3g");
	var mask_graphics_527 = new cjs.Graphics().p("Aj/hOIDyi7IENFYIjyC7g");
	var mask_graphics_528 = new cjs.Graphics().p("AkFhUID0i9IEXFnIj0C8g");
	var mask_graphics_529 = new cjs.Graphics().p("AkMhbID3i+IEjF1Ij4C/g");
	var mask_graphics_530 = new cjs.Graphics().p("AkThgID6jCIEtGEIj6DBg");
	var mask_graphics_531 = new cjs.Graphics().p("AkahmID9jEIE4GSIj9DDg");
	var mask_graphics_532 = new cjs.Graphics().p("AkhhtIEAjGIFDGhIkADFg");
	var mask_graphics_533 = new cjs.Graphics().p("AkohzIEDjIIFOGvIkDDIg");
	var mask_graphics_534 = new cjs.Graphics().p("Akvh4IEFjLIFaG9IkFDKg");
	var mask_graphics_535 = new cjs.Graphics().p("Ak2h/IEJjMIFkHLIkJDMg");
	var mask_graphics_536 = new cjs.Graphics().p("Ak9iFIELjPIFwHaIkMDPg");
	var mask_graphics_537 = new cjs.Graphics().p("AlEiLIEOjRIF7HoIkPDRg");
	var mask_graphics_538 = new cjs.Graphics().p("AlLiRIERjTIGGH2IkRDTg");
	var mask_graphics_539 = new cjs.Graphics().p("AlSiXIEUjVIGRIEIkUDVg");
	var mask_graphics_540 = new cjs.Graphics().p("AlZidIEXjYIGcITIkXDXg");
	var mask_graphics_541 = new cjs.Graphics().p("AlgijIEajaIGnIhIkaDag");
	var mask_graphics_542 = new cjs.Graphics().p("AlnipIEdjcIGyIvIkdDcg");
	var mask_graphics_543 = new cjs.Graphics().p("AluivIEgjfIG9I+IkgDfg");
	var mask_graphics_544 = new cjs.Graphics().p("Al1i1IEijhIHIJMIkiDhg");
	var mask_graphics_545 = new cjs.Graphics().p("Al8i7IEmjjIHTJaIkmDjg");
	var mask_graphics_546 = new cjs.Graphics().p("AmDjBIEojlIHeJoIkoDlg");
	var mask_graphics_547 = new cjs.Graphics().p("AmJjHIEqjnIHpJ3IkqDmg");
	var mask_graphics_548 = new cjs.Graphics().p("AmQjOIEtjpIH0KFIktDqg");
	var mask_graphics_549 = new cjs.Graphics().p("AmXjTIEwjsIH/KTIkwDsg");
	var mask_graphics_550 = new cjs.Graphics().p("AmejaIEzjtIIKKiIkzDtg");
	var mask_graphics_551 = new cjs.Graphics().p("AmljfIE2jxIIVKwIk2Dxg");
	var mask_graphics_552 = new cjs.Graphics().p("AmsjlIE5jzIIgK/Ik5Dyg");
	var mask_graphics_553 = new cjs.Graphics().p("AmzjrIE8j1IIrLMIk8D2g");
	var mask_graphics_554 = new cjs.Graphics().p("Am6jyIE/j3II2LbIk/D4g");
	var mask_graphics_555 = new cjs.Graphics().p("AIfNXIFCj5IJCLqIlBD5g");
	var mask_graphics_556 = new cjs.Graphics().p("AJdY2IAAsWINIAAIAAMWg");
	var mask_graphics_557 = new cjs.Graphics().p("AmjGUIAAsnINHAAIAAMng");
	var mask_graphics_558 = new cjs.Graphics().p("AmjGdIAAs5INHAAIAAM5g");
	var mask_graphics_559 = new cjs.Graphics().p("AmjGmIAAtLINHAAIAANLg");
	var mask_graphics_560 = new cjs.Graphics().p("AmjGvIAAtdINHAAIAANdg");
	var mask_graphics_561 = new cjs.Graphics().p("AmjG4IAAtvINHAAIAANvg");
	var mask_graphics_562 = new cjs.Graphics().p("AmjHBIAAuBINHAAIAAOBg");
	var mask_graphics_563 = new cjs.Graphics().p("AmjHKIAAuTINHAAIAAOTg");
	var mask_graphics_564 = new cjs.Graphics().p("AmjHTIAAulINHAAIAAOlg");
	var mask_graphics_565 = new cjs.Graphics().p("AmjHcIAAu3INHAAIAAO3g");
	var mask_graphics_566 = new cjs.Graphics().p("AmjHlIAAvJINHAAIAAPJg");
	var mask_graphics_567 = new cjs.Graphics().p("AmjHuIAAvbINHAAIAAPbg");
	var mask_graphics_568 = new cjs.Graphics().p("AmjH3IAAvtINHAAIAAPtg");
	var mask_graphics_569 = new cjs.Graphics().p("AmjIAIAAv/INHAAIAAP/g");
	var mask_graphics_570 = new cjs.Graphics().p("AmjIJIAAwRINHAAIAAQRg");
	var mask_graphics_571 = new cjs.Graphics().p("AmjISIAAwjINHAAIAAQjg");
	var mask_graphics_572 = new cjs.Graphics().p("AmjIbIAAw1INHAAIAAQ1g");
	var mask_graphics_573 = new cjs.Graphics().p("AmjIjIAAxFINHAAIAARFg");
	var mask_graphics_574 = new cjs.Graphics().p("AmjIsIAAxXINHAAIAARXg");
	var mask_graphics_575 = new cjs.Graphics().p("AmjI1IAAxpINHAAIAARpg");
	var mask_graphics_576 = new cjs.Graphics().p("AmjI+IAAx7INHAAIAAR7g");
	var mask_graphics_577 = new cjs.Graphics().p("AmjJHIAAyNINHAAIAASNg");
	var mask_graphics_578 = new cjs.Graphics().p("AmjJQIAAyfINHAAIAASfg");
	var mask_graphics_579 = new cjs.Graphics().p("AmjJZIAAyxINHAAIAASxg");
	var mask_graphics_580 = new cjs.Graphics().p("AmjJiIAAzDINHAAIAATDg");
	var mask_graphics_581 = new cjs.Graphics().p("AmjJrIAAzVINHAAIAATVg");
	var mask_graphics_582 = new cjs.Graphics().p("AmjJ0IAAznINHAAIAATng");
	var mask_graphics_583 = new cjs.Graphics().p("AmjJ9IAAz5INHAAIAAT5g");
	var mask_graphics_584 = new cjs.Graphics().p("AmjKGIAA0LINHAAIAAULg");
	var mask_graphics_585 = new cjs.Graphics().p("AmjKPIAA0dINHAAIAAUdg");
	var mask_graphics_586 = new cjs.Graphics().p("AmjKYIAA0vINHAAIAAUvg");
	var mask_graphics_587 = new cjs.Graphics().p("AmjKhIAA1BINHAAIAAVBg");
	var mask_graphics_588 = new cjs.Graphics().p("AmjKqIAA1TINHAAIAAVTg");
	var mask_graphics_589 = new cjs.Graphics().p("AmjKzIAA1lINHAAIAAVlg");
	var mask_graphics_590 = new cjs.Graphics().p("AmjK8IAA13INHAAIAAV3g");
	var mask_graphics_591 = new cjs.Graphics().p("AmjLFIAA2JINHAAIAAWJg");
	var mask_graphics_592 = new cjs.Graphics().p("AmjLOIAA2bINHAAIAAWbg");
	var mask_graphics_593 = new cjs.Graphics().p("AmjLXIAA2tINHAAIAAWtg");
	var mask_graphics_594 = new cjs.Graphics().p("AmjLgIAA2/INHAAIAAW/g");
	var mask_graphics_595 = new cjs.Graphics().p("AmjLpIAA3RINHAAIAAXRg");
	var mask_graphics_596 = new cjs.Graphics().p("AmjLyIAA3jINHAAIAAXjg");
	var mask_graphics_597 = new cjs.Graphics().p("AmjL7IAA31INHAAIAAX1g");
	var mask_graphics_598 = new cjs.Graphics().p("AmjMEIAA4HINHAAIAAYHg");
	var mask_graphics_599 = new cjs.Graphics().p("AmjMNIAA4ZINHAAIAAYZg");
	var mask_graphics_600 = new cjs.Graphics().p("AmjMVIAA4pINHAAIAAYpg");
	var mask_graphics_601 = new cjs.Graphics().p("AmjMeIAA47INHAAIAAY7g");
	var mask_graphics_602 = new cjs.Graphics().p("AmjMnIAA5NINHAAIAAZNg");
	var mask_graphics_603 = new cjs.Graphics().p("AmjMwIAA5fINHAAIAAZfg");
	var mask_graphics_604 = new cjs.Graphics().p("AmjM5IAA5xINHAAIAAZxg");
	var mask_graphics_605 = new cjs.Graphics().p("AmjNCIAA6DINHAAIAAaDg");
	var mask_graphics_606 = new cjs.Graphics().p("AmjNLIAA6VINHAAIAAaVg");
	var mask_graphics_607 = new cjs.Graphics().p("AmjNUIAA6nINHAAIAAang");
	var mask_graphics_608 = new cjs.Graphics().p("AmjNdIAA65INHAAIAAa5g");
	var mask_graphics_609 = new cjs.Graphics().p("EAJdAgRIAA7MINIAAIAAbMg");
	var mask_graphics_610 = new cjs.Graphics().p("AmeOAIAA7/IM9AAIAAb/g");
	var mask_graphics_611 = new cjs.Graphics().p("AmZOZIAA8xIMzAAIAAcxg");
	var mask_graphics_612 = new cjs.Graphics().p("AmUOzIAA9lIMpAAIAAdlg");
	var mask_graphics_613 = new cjs.Graphics().p("AmPPMIAA+XIMfAAIAAeXg");
	var mask_graphics_614 = new cjs.Graphics().p("AmKPmIAA/LIMVAAIAAfLg");
	var mask_graphics_615 = new cjs.Graphics().p("AmNPqIAA/TIMbAAIAAfTg");
	var mask_graphics_616 = new cjs.Graphics().p("AmQPtIAA/ZIMhAAIAAfZg");
	var mask_graphics_617 = new cjs.Graphics().p("AmTPxIAA/hIMnAAIAAfhg");
	var mask_graphics_618 = new cjs.Graphics().p("AmWP1IAA/pIMtAAIAAfpg");
	var mask_graphics_619 = new cjs.Graphics().p("AmaP5IAA/xIM1AAIAAfxg");
	var mask_graphics_620 = new cjs.Graphics().p("AmdP9IAA/5IM7AAIAAf5g");
	var mask_graphics_621 = new cjs.Graphics().p("AmgQAIAA//INBAAIAAf/g");
	var mask_graphics_622 = new cjs.Graphics().p("EAJdAiwMAAAggIINIAAMAAAAgIg");
	var mask_graphics_623 = new cjs.Graphics().p("AmtQEMAAAggHINbAAMAAAAgHg");
	var mask_graphics_624 = new cjs.Graphics().p("Am2QEMAAAggHINtAAMAAAAgHg");
	var mask_graphics_625 = new cjs.Graphics().p("AnAQEMAAAggHIOAAAMAAAAgHg");
	var mask_graphics_626 = new cjs.Graphics().p("AnJQEMAAAggHIOTAAMAAAAgHg");
	var mask_graphics_627 = new cjs.Graphics().p("AnSQEMAAAggHIOlAAMAAAAgHg");
	var mask_graphics_628 = new cjs.Graphics().p("AncQEMAAAggHIO5AAMAAAAgHg");
	var mask_graphics_629 = new cjs.Graphics().p("AnlQEMAAAggHIPLAAMAAAAgHg");
	var mask_graphics_630 = new cjs.Graphics().p("AnvQEMAAAggHIPfAAMAAAAgHg");
	var mask_graphics_631 = new cjs.Graphics().p("An4QEMAAAggHIPxAAMAAAAgHg");
	var mask_graphics_632 = new cjs.Graphics().p("AoBQEMAAAggHIQDAAMAAAAgHg");
	var mask_graphics_633 = new cjs.Graphics().p("AoLQEMAAAggHIQXAAMAAAAgHg");
	var mask_graphics_634 = new cjs.Graphics().p("AoUQEMAAAggHIQpAAMAAAAgHg");
	var mask_graphics_635 = new cjs.Graphics().p("AoeQEMAAAggHIQ9AAMAAAAgHg");
	var mask_graphics_636 = new cjs.Graphics().p("AonQEMAAAggHIRPAAMAAAAgHg");
	var mask_graphics_637 = new cjs.Graphics().p("AoxQEMAAAggHIRjAAMAAAAgHg");
	var mask_graphics_638 = new cjs.Graphics().p("Ao6QEMAAAggHIR1AAMAAAAgHg");
	var mask_graphics_639 = new cjs.Graphics().p("ApDQEMAAAggHISIAAMAAAAgHg");
	var mask_graphics_640 = new cjs.Graphics().p("ApNQEMAAAggHISbAAMAAAAgHg");
	var mask_graphics_641 = new cjs.Graphics().p("ApWQEMAAAggHIStAAMAAAAgHg");
	var mask_graphics_642 = new cjs.Graphics().p("ApgQEMAAAggHITBAAMAAAAgHg");
	var mask_graphics_643 = new cjs.Graphics().p("AppQEMAAAggHITTAAMAAAAgHg");
	var mask_graphics_644 = new cjs.Graphics().p("ApzQEMAAAggHITnAAMAAAAgHg");
	var mask_graphics_645 = new cjs.Graphics().p("Ap8QEMAAAggHIT5AAMAAAAgHg");
	var mask_graphics_646 = new cjs.Graphics().p("AqGQEMAAAggHIUNAAMAAAAgHg");
	var mask_graphics_647 = new cjs.Graphics().p("AqPQEMAAAggHIUfAAMAAAAgHg");
	var mask_graphics_648 = new cjs.Graphics().p("AqZQEMAAAggHIUyAAMAAAAgHg");
	var mask_graphics_649 = new cjs.Graphics().p("AqiQEMAAAggHIVFAAMAAAAgHg");
	var mask_graphics_650 = new cjs.Graphics().p("AqsQEMAAAggHIVZAAMAAAAgHg");
	var mask_graphics_651 = new cjs.Graphics().p("Aq1QEMAAAggHIVrAAMAAAAgHg");
	var mask_graphics_652 = new cjs.Graphics().p("Aq+QEMAAAggHIV9AAMAAAAgHg");
	var mask_graphics_653 = new cjs.Graphics().p("ArIQEMAAAggHIWRAAMAAAAgHg");
	var mask_graphics_654 = new cjs.Graphics().p("ArRQEMAAAggHIWjAAMAAAAgHg");
	var mask_graphics_655 = new cjs.Graphics().p("ArbQEMAAAggHIW3AAMAAAAgHg");
	var mask_graphics_656 = new cjs.Graphics().p("ArkQEMAAAggHIXJAAMAAAAgHg");
	var mask_graphics_657 = new cjs.Graphics().p("AruQEMAAAggHIXdAAMAAAAgHg");
	var mask_graphics_658 = new cjs.Graphics().p("Ar3QEMAAAggHIXvAAMAAAAgHg");
	var mask_graphics_659 = new cjs.Graphics().p("AsBQEMAAAggHIYCAAMAAAAgHg");
	var mask_graphics_660 = new cjs.Graphics().p("AsKQEMAAAggHIYVAAMAAAAgHg");
	var mask_graphics_661 = new cjs.Graphics().p("AsUQEMAAAggHIYpAAMAAAAgHg");
	var mask_graphics_662 = new cjs.Graphics().p("AsdQEMAAAggHIY7AAMAAAAgHg");
	var mask_graphics_663 = new cjs.Graphics().p("AsnQEMAAAggHIZPAAMAAAAgHg");
	var mask_graphics_664 = new cjs.Graphics().p("AswQEMAAAggHIZhAAMAAAAgHg");
	var mask_graphics_665 = new cjs.Graphics().p("As5QEMAAAggHIZzAAMAAAAgHg");
	var mask_graphics_666 = new cjs.Graphics().p("AtDQEMAAAggHIaHAAMAAAAgHg");
	var mask_graphics_667 = new cjs.Graphics().p("AtMQEMAAAggHIaZAAMAAAAgHg");
	var mask_graphics_668 = new cjs.Graphics().p("AtWQEMAAAggHIatAAMAAAAgHg");
	var mask_graphics_669 = new cjs.Graphics().p("AtfQEMAAAggHIa/AAMAAAAgHg");
	var mask_graphics_670 = new cjs.Graphics().p("AtpQEMAAAggHIbSAAMAAAAgHg");
	var mask_graphics_671 = new cjs.Graphics().p("AtyQEMAAAggHIblAAMAAAAgHg");
	var mask_graphics_672 = new cjs.Graphics().p("At7QEMAAAggHIb3AAMAAAAgHg");
	var mask_graphics_673 = new cjs.Graphics().p("AuFQEMAAAggHIcLAAMAAAAgHg");
	var mask_graphics_674 = new cjs.Graphics().p("EABzAiwMAAAggIIceAAMAAAAgIg");
	var mask_graphics_675 = new cjs.Graphics().p("AuWQEMAAAggHIctAAMAAAAgHg");
	var mask_graphics_676 = new cjs.Graphics().p("AueQEMAAAggHIc9AAMAAAAgHg");
	var mask_graphics_677 = new cjs.Graphics().p("AumQEMAAAggHIdNAAMAAAAgHg");
	var mask_graphics_678 = new cjs.Graphics().p("AuuQEMAAAggHIddAAMAAAAgHg");
	var mask_graphics_679 = new cjs.Graphics().p("Au2QEMAAAggHIdtAAMAAAAgHg");
	var mask_graphics_680 = new cjs.Graphics().p("Au+QEMAAAggHId9AAMAAAAgHg");
	var mask_graphics_681 = new cjs.Graphics().p("AvGQEMAAAggHIeNAAMAAAAgHg");
	var mask_graphics_682 = new cjs.Graphics().p("AvOQEMAAAggHIedAAMAAAAgHg");
	var mask_graphics_683 = new cjs.Graphics().p("AvWQEMAAAggHIetAAMAAAAgHg");
	var mask_graphics_684 = new cjs.Graphics().p("AveQEMAAAggHIe9AAMAAAAgHg");
	var mask_graphics_685 = new cjs.Graphics().p("AvmQEMAAAggHIfNAAMAAAAgHg");
	var mask_graphics_686 = new cjs.Graphics().p("AvuQEMAAAggHIfdAAMAAAAgHg");
	var mask_graphics_687 = new cjs.Graphics().p("Av2QEMAAAggHIftAAMAAAAgHg");
	var mask_graphics_688 = new cjs.Graphics().p("Av+QEMAAAggHIf9AAMAAAAgHg");
	var mask_graphics_689 = new cjs.Graphics().p("AwGQEMAAAggHMAgNAAAMAAAAgHg");
	var mask_graphics_690 = new cjs.Graphics().p("AwOQEMAAAggHMAgdAAAMAAAAgHg");
	var mask_graphics_691 = new cjs.Graphics().p("AwWQEMAAAggHMAgtAAAMAAAAgHg");
	var mask_graphics_692 = new cjs.Graphics().p("AweQEMAAAggHMAg8AAAMAAAAgHg");
	var mask_graphics_693 = new cjs.Graphics().p("AwmQEMAAAggHMAhMAAAMAAAAgHg");
	var mask_graphics_694 = new cjs.Graphics().p("AwuQEMAAAggHMAhcAAAMAAAAgHg");
	var mask_graphics_695 = new cjs.Graphics().p("Aw2QEMAAAggHMAhtAAAMAAAAgHg");
	var mask_graphics_696 = new cjs.Graphics().p("Aw+QEMAAAggHMAh9AAAMAAAAgHg");
	var mask_graphics_697 = new cjs.Graphics().p("AxGQEMAAAggHMAiMAAAMAAAAgHg");
	var mask_graphics_698 = new cjs.Graphics().p("AxOQEMAAAggHMAicAAAMAAAAgHg");
	var mask_graphics_699 = new cjs.Graphics().p("AxVQEMAAAggHMAirAAAMAAAAgHg");
	var mask_graphics_700 = new cjs.Graphics().p("AxdQEMAAAggHMAi7AAAMAAAAgHg");
	var mask_graphics_701 = new cjs.Graphics().p("AxlQEMAAAggHMAjLAAAMAAAAgHg");
	var mask_graphics_702 = new cjs.Graphics().p("AxtQEMAAAggHMAjbAAAMAAAAgHg");
	var mask_graphics_703 = new cjs.Graphics().p("Ax1QEMAAAggHMAjrAAAMAAAAgHg");
	var mask_graphics_704 = new cjs.Graphics().p("Ax9QEMAAAggHMAj7AAAMAAAAgHg");
	var mask_graphics_705 = new cjs.Graphics().p("AyFQEMAAAggHMAkLAAAMAAAAgHg");
	var mask_graphics_706 = new cjs.Graphics().p("EgCKAiwMAAAggIMAkbAAAMAAAAgIg");
	var mask_graphics_707 = new cjs.Graphics().p("AyUQEMAAAggHMAkpAAAMAAAAgHg");
	var mask_graphics_708 = new cjs.Graphics().p("AyaQEMAAAggHMAk2AAAMAAAAgHg");
	var mask_graphics_709 = new cjs.Graphics().p("AyhQEMAAAggHMAlDAAAMAAAAgHg");
	var mask_graphics_710 = new cjs.Graphics().p("AyoQEMAAAggHMAlRAAAMAAAAgHg");
	var mask_graphics_711 = new cjs.Graphics().p("AyuQEMAAAggHMAldAAAMAAAAgHg");
	var mask_graphics_712 = new cjs.Graphics().p("Ay1QEMAAAggHMAlrAAAMAAAAgHg");
	var mask_graphics_713 = new cjs.Graphics().p("Ay8QEMAAAggHMAl5AAAMAAAAgHg");
	var mask_graphics_714 = new cjs.Graphics().p("AzCQEMAAAggHMAmGAAAMAAAAgHg");
	var mask_graphics_715 = new cjs.Graphics().p("AzJQEMAAAggHMAmTAAAMAAAAgHg");
	var mask_graphics_716 = new cjs.Graphics().p("AzQQEMAAAggHMAmhAAAMAAAAgHg");
	var mask_graphics_717 = new cjs.Graphics().p("AzXQEMAAAggHMAmvAAAMAAAAgHg");
	var mask_graphics_718 = new cjs.Graphics().p("AzdQEMAAAggHMAm8AAAMAAAAgHg");
	var mask_graphics_719 = new cjs.Graphics().p("AzkQEMAAAggHMAnJAAAMAAAAgHg");
	var mask_graphics_720 = new cjs.Graphics().p("AzrQEMAAAggHMAnXAAAMAAAAgHg");
	var mask_graphics_721 = new cjs.Graphics().p("AzxQEMAAAggHMAnjAAAMAAAAgHg");
	var mask_graphics_722 = new cjs.Graphics().p("Az4QEMAAAggHMAnxAAAMAAAAgHg");
	var mask_graphics_723 = new cjs.Graphics().p("Az/QEMAAAggHMAn/AAAMAAAAgHg");
	var mask_graphics_724 = new cjs.Graphics().p("A0GQEMAAAggHMAoMAAAMAAAAgHg");
	var mask_graphics_725 = new cjs.Graphics().p("A0MQEMAAAggHMAoZAAAMAAAAgHg");
	var mask_graphics_726 = new cjs.Graphics().p("A0TQEMAAAggHMAonAAAMAAAAgHg");
	var mask_graphics_727 = new cjs.Graphics().p("A0aQEMAAAggHMAo1AAAMAAAAgHg");
	var mask_graphics_728 = new cjs.Graphics().p("A0gQEMAAAggHMApBAAAMAAAAgHg");
	var mask_graphics_729 = new cjs.Graphics().p("A0nQEMAAAggHMApPAAAMAAAAgHg");
	var mask_graphics_730 = new cjs.Graphics().p("A0uQEMAAAggHMApcAAAMAAAAgHg");
	var mask_graphics_731 = new cjs.Graphics().p("A00QEMAAAggHMAppAAAMAAAAgHg");
	var mask_graphics_732 = new cjs.Graphics().p("A07QEMAAAggHMAp3AAAMAAAAgHg");
	var mask_graphics_733 = new cjs.Graphics().p("A1CQEMAAAggHMAqFAAAMAAAAgHg");
	var mask_graphics_734 = new cjs.Graphics().p("A1JQEMAAAggHMAqTAAAMAAAAgHg");
	var mask_graphics_735 = new cjs.Graphics().p("A1PQEMAAAggHMAqfAAAMAAAAgHg");
	var mask_graphics_736 = new cjs.Graphics().p("A1WQEMAAAggHMAqtAAAMAAAAgHg");
	var mask_graphics_737 = new cjs.Graphics().p("EgFaAiwMAAAggIMAq6AAAMAAAAgIg");
	var mask_graphics_738 = new cjs.Graphics().p("A15QEMAAAggHMArzAAAMAAAAgHg");
	var mask_graphics_739 = new cjs.Graphics().p("EgGSAiwMAAAggIMAsrAAAMAAAAgIg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(510).to({graphics:mask_graphics_510,x:117,y:130.4}).wait(1).to({graphics:mask_graphics_511,x:216.7,y:244.3}).wait(1).to({graphics:mask_graphics_512,x:216.9,y:244.5}).wait(1).to({graphics:mask_graphics_513,x:217.2,y:244.7}).wait(1).to({graphics:mask_graphics_514,x:217.5,y:244.9}).wait(1).to({graphics:mask_graphics_515,x:217.7,y:245.2}).wait(1).to({graphics:mask_graphics_516,x:218,y:245.4}).wait(1).to({graphics:mask_graphics_517,x:218.2,y:245.6}).wait(1).to({graphics:mask_graphics_518,x:218.5,y:245.8}).wait(1).to({graphics:mask_graphics_519,x:218.8,y:246}).wait(1).to({graphics:mask_graphics_520,x:219.5,y:246.7}).wait(1).to({graphics:mask_graphics_521,x:220.1,y:247.4}).wait(1).to({graphics:mask_graphics_522,x:220.8,y:248.1}).wait(1).to({graphics:mask_graphics_523,x:221.5,y:248.7}).wait(1).to({graphics:mask_graphics_524,x:222.2,y:249.4}).wait(1).to({graphics:mask_graphics_525,x:222.9,y:250.1}).wait(1).to({graphics:mask_graphics_526,x:223.6,y:250.8}).wait(1).to({graphics:mask_graphics_527,x:224.3,y:251.5}).wait(1).to({graphics:mask_graphics_528,x:225,y:252.1}).wait(1).to({graphics:mask_graphics_529,x:225.7,y:252.8}).wait(1).to({graphics:mask_graphics_530,x:226.4,y:253.5}).wait(1).to({graphics:mask_graphics_531,x:227,y:254.2}).wait(1).to({graphics:mask_graphics_532,x:227.7,y:254.9}).wait(1).to({graphics:mask_graphics_533,x:228.4,y:255.5}).wait(1).to({graphics:mask_graphics_534,x:229.1,y:256.2}).wait(1).to({graphics:mask_graphics_535,x:229.8,y:256.9}).wait(1).to({graphics:mask_graphics_536,x:230.5,y:257.6}).wait(1).to({graphics:mask_graphics_537,x:231.2,y:258.3}).wait(1).to({graphics:mask_graphics_538,x:231.9,y:259}).wait(1).to({graphics:mask_graphics_539,x:232.6,y:259.6}).wait(1).to({graphics:mask_graphics_540,x:233.3,y:260.3}).wait(1).to({graphics:mask_graphics_541,x:233.9,y:261}).wait(1).to({graphics:mask_graphics_542,x:234.6,y:261.7}).wait(1).to({graphics:mask_graphics_543,x:235.3,y:262.4}).wait(1).to({graphics:mask_graphics_544,x:236,y:263}).wait(1).to({graphics:mask_graphics_545,x:236.7,y:263.7}).wait(1).to({graphics:mask_graphics_546,x:237.4,y:264.4}).wait(1).to({graphics:mask_graphics_547,x:238.1,y:265.1}).wait(1).to({graphics:mask_graphics_548,x:238.8,y:265.8}).wait(1).to({graphics:mask_graphics_549,x:239.5,y:266.4}).wait(1).to({graphics:mask_graphics_550,x:240.2,y:267.1}).wait(1).to({graphics:mask_graphics_551,x:240.8,y:267.8}).wait(1).to({graphics:mask_graphics_552,x:241.5,y:268.5}).wait(1).to({graphics:mask_graphics_553,x:242.2,y:269.2}).wait(1).to({graphics:mask_graphics_554,x:242.9,y:269.8}).wait(1).to({graphics:mask_graphics_555,x:144.3,y:160.1}).wait(1).to({graphics:mask_graphics_556,x:144.5,y:159}).wait(1).to({graphics:mask_graphics_557,x:247.1,y:279.5}).wait(1).to({graphics:mask_graphics_558,x:247.1,y:280.4}).wait(1).to({graphics:mask_graphics_559,x:247.1,y:281.3}).wait(1).to({graphics:mask_graphics_560,x:247.1,y:282.1}).wait(1).to({graphics:mask_graphics_561,x:247.1,y:283}).wait(1).to({graphics:mask_graphics_562,x:247.1,y:283.9}).wait(1).to({graphics:mask_graphics_563,x:247.1,y:284.8}).wait(1).to({graphics:mask_graphics_564,x:247.1,y:285.7}).wait(1).to({graphics:mask_graphics_565,x:247.1,y:286.6}).wait(1).to({graphics:mask_graphics_566,x:247.1,y:287.5}).wait(1).to({graphics:mask_graphics_567,x:247.1,y:288.4}).wait(1).to({graphics:mask_graphics_568,x:247.1,y:289.3}).wait(1).to({graphics:mask_graphics_569,x:247.1,y:290.2}).wait(1).to({graphics:mask_graphics_570,x:247.1,y:291.1}).wait(1).to({graphics:mask_graphics_571,x:247.1,y:292}).wait(1).to({graphics:mask_graphics_572,x:247.1,y:292.9}).wait(1).to({graphics:mask_graphics_573,x:247.1,y:293.8}).wait(1).to({graphics:mask_graphics_574,x:247.1,y:294.7}).wait(1).to({graphics:mask_graphics_575,x:247.1,y:295.6}).wait(1).to({graphics:mask_graphics_576,x:247.1,y:296.5}).wait(1).to({graphics:mask_graphics_577,x:247.1,y:297.4}).wait(1).to({graphics:mask_graphics_578,x:247.1,y:298.3}).wait(1).to({graphics:mask_graphics_579,x:247.1,y:299.2}).wait(1).to({graphics:mask_graphics_580,x:247.1,y:300.1}).wait(1).to({graphics:mask_graphics_581,x:247.1,y:301}).wait(1).to({graphics:mask_graphics_582,x:247.1,y:301.9}).wait(1).to({graphics:mask_graphics_583,x:247.1,y:302.8}).wait(1).to({graphics:mask_graphics_584,x:247.1,y:303.7}).wait(1).to({graphics:mask_graphics_585,x:247.1,y:304.6}).wait(1).to({graphics:mask_graphics_586,x:247.1,y:305.4}).wait(1).to({graphics:mask_graphics_587,x:247.1,y:306.3}).wait(1).to({graphics:mask_graphics_588,x:247.1,y:307.2}).wait(1).to({graphics:mask_graphics_589,x:247.1,y:308.1}).wait(1).to({graphics:mask_graphics_590,x:247.1,y:309}).wait(1).to({graphics:mask_graphics_591,x:247.1,y:309.9}).wait(1).to({graphics:mask_graphics_592,x:247.1,y:310.8}).wait(1).to({graphics:mask_graphics_593,x:247.1,y:311.7}).wait(1).to({graphics:mask_graphics_594,x:247.1,y:312.6}).wait(1).to({graphics:mask_graphics_595,x:247.1,y:313.5}).wait(1).to({graphics:mask_graphics_596,x:247.1,y:314.4}).wait(1).to({graphics:mask_graphics_597,x:247.1,y:315.3}).wait(1).to({graphics:mask_graphics_598,x:247.1,y:316.2}).wait(1).to({graphics:mask_graphics_599,x:247.1,y:317.1}).wait(1).to({graphics:mask_graphics_600,x:247.1,y:318}).wait(1).to({graphics:mask_graphics_601,x:247.1,y:318.9}).wait(1).to({graphics:mask_graphics_602,x:247.1,y:319.8}).wait(1).to({graphics:mask_graphics_603,x:247.1,y:320.7}).wait(1).to({graphics:mask_graphics_604,x:247.1,y:321.6}).wait(1).to({graphics:mask_graphics_605,x:247.1,y:322.5}).wait(1).to({graphics:mask_graphics_606,x:247.1,y:323.4}).wait(1).to({graphics:mask_graphics_607,x:247.1,y:324.3}).wait(1).to({graphics:mask_graphics_608,x:247.1,y:325.2}).wait(1).to({graphics:mask_graphics_609,x:144.5,y:206.5}).wait(1).to({graphics:mask_graphics_610,x:246.6,y:328.6}).wait(1).to({graphics:mask_graphics_611,x:246.1,y:331.2}).wait(1).to({graphics:mask_graphics_612,x:245.6,y:333.8}).wait(1).to({graphics:mask_graphics_613,x:245.1,y:336.4}).wait(1).to({graphics:mask_graphics_614,x:244.6,y:338.9}).wait(1).to({graphics:mask_graphics_615,x:244.9,y:339.3}).wait(1).to({graphics:mask_graphics_616,x:245.2,y:339.7}).wait(1).to({graphics:mask_graphics_617,x:245.5,y:340.1}).wait(1).to({graphics:mask_graphics_618,x:245.9,y:340.5}).wait(1).to({graphics:mask_graphics_619,x:246.1,y:340.8}).wait(1).to({graphics:mask_graphics_620,x:246.4,y:341.2}).wait(1).to({graphics:mask_graphics_621,x:246.8,y:341.6}).wait(1).to({graphics:mask_graphics_622,x:144.5,y:222.4}).wait(1).to({graphics:mask_graphics_623,x:248,y:342}).wait(1).to({graphics:mask_graphics_624,x:249,y:342}).wait(1).to({graphics:mask_graphics_625,x:249.9,y:342}).wait(1).to({graphics:mask_graphics_626,x:250.8,y:342}).wait(1).to({graphics:mask_graphics_627,x:251.8,y:342}).wait(1).to({graphics:mask_graphics_628,x:252.7,y:342}).wait(1).to({graphics:mask_graphics_629,x:253.7,y:342}).wait(1).to({graphics:mask_graphics_630,x:254.6,y:342}).wait(1).to({graphics:mask_graphics_631,x:255.6,y:342}).wait(1).to({graphics:mask_graphics_632,x:256.5,y:342}).wait(1).to({graphics:mask_graphics_633,x:257.5,y:342}).wait(1).to({graphics:mask_graphics_634,x:258.4,y:342}).wait(1).to({graphics:mask_graphics_635,x:259.4,y:342}).wait(1).to({graphics:mask_graphics_636,x:260.3,y:342}).wait(1).to({graphics:mask_graphics_637,x:261.3,y:342}).wait(1).to({graphics:mask_graphics_638,x:262.2,y:342}).wait(1).to({graphics:mask_graphics_639,x:263.2,y:342}).wait(1).to({graphics:mask_graphics_640,x:264.1,y:342}).wait(1).to({graphics:mask_graphics_641,x:265.1,y:342}).wait(1).to({graphics:mask_graphics_642,x:266,y:342}).wait(1).to({graphics:mask_graphics_643,x:267,y:342}).wait(1).to({graphics:mask_graphics_644,x:267.9,y:342}).wait(1).to({graphics:mask_graphics_645,x:268.8,y:342}).wait(1).to({graphics:mask_graphics_646,x:269.8,y:342}).wait(1).to({graphics:mask_graphics_647,x:270.7,y:342}).wait(1).to({graphics:mask_graphics_648,x:271.7,y:342}).wait(1).to({graphics:mask_graphics_649,x:272.7,y:342}).wait(1).to({graphics:mask_graphics_650,x:273.6,y:342}).wait(1).to({graphics:mask_graphics_651,x:274.6,y:342}).wait(1).to({graphics:mask_graphics_652,x:275.5,y:342}).wait(1).to({graphics:mask_graphics_653,x:276.4,y:342}).wait(1).to({graphics:mask_graphics_654,x:277.4,y:342}).wait(1).to({graphics:mask_graphics_655,x:278.3,y:342}).wait(1).to({graphics:mask_graphics_656,x:279.3,y:342}).wait(1).to({graphics:mask_graphics_657,x:280.2,y:342}).wait(1).to({graphics:mask_graphics_658,x:281.2,y:342}).wait(1).to({graphics:mask_graphics_659,x:282.1,y:342}).wait(1).to({graphics:mask_graphics_660,x:283.1,y:342}).wait(1).to({graphics:mask_graphics_661,x:284,y:342}).wait(1).to({graphics:mask_graphics_662,x:285,y:342}).wait(1).to({graphics:mask_graphics_663,x:285.9,y:342}).wait(1).to({graphics:mask_graphics_664,x:286.9,y:342}).wait(1).to({graphics:mask_graphics_665,x:287.8,y:342}).wait(1).to({graphics:mask_graphics_666,x:288.8,y:342}).wait(1).to({graphics:mask_graphics_667,x:289.7,y:342}).wait(1).to({graphics:mask_graphics_668,x:290.7,y:342}).wait(1).to({graphics:mask_graphics_669,x:291.6,y:342}).wait(1).to({graphics:mask_graphics_670,x:292.6,y:342}).wait(1).to({graphics:mask_graphics_671,x:293.5,y:342}).wait(1).to({graphics:mask_graphics_672,x:294.4,y:342}).wait(1).to({graphics:mask_graphics_673,x:295.4,y:342}).wait(1).to({graphics:mask_graphics_674,x:193.7,y:222.4}).wait(1).to({graphics:mask_graphics_675,x:297.1,y:342}).wait(1).to({graphics:mask_graphics_676,x:297.9,y:342}).wait(1).to({graphics:mask_graphics_677,x:298.7,y:342}).wait(1).to({graphics:mask_graphics_678,x:299.5,y:342}).wait(1).to({graphics:mask_graphics_679,x:300.3,y:342}).wait(1).to({graphics:mask_graphics_680,x:301.2,y:342}).wait(1).to({graphics:mask_graphics_681,x:302,y:342}).wait(1).to({graphics:mask_graphics_682,x:302.8,y:342}).wait(1).to({graphics:mask_graphics_683,x:303.5,y:342}).wait(1).to({graphics:mask_graphics_684,x:304.3,y:342}).wait(1).to({graphics:mask_graphics_685,x:305.1,y:342}).wait(1).to({graphics:mask_graphics_686,x:305.9,y:342}).wait(1).to({graphics:mask_graphics_687,x:306.7,y:342}).wait(1).to({graphics:mask_graphics_688,x:307.5,y:342}).wait(1).to({graphics:mask_graphics_689,x:308.3,y:342}).wait(1).to({graphics:mask_graphics_690,x:309.2,y:342}).wait(1).to({graphics:mask_graphics_691,x:310,y:342}).wait(1).to({graphics:mask_graphics_692,x:310.8,y:342}).wait(1).to({graphics:mask_graphics_693,x:311.6,y:342}).wait(1).to({graphics:mask_graphics_694,x:312.4,y:342}).wait(1).to({graphics:mask_graphics_695,x:313.2,y:342}).wait(1).to({graphics:mask_graphics_696,x:314,y:342}).wait(1).to({graphics:mask_graphics_697,x:314.8,y:342}).wait(1).to({graphics:mask_graphics_698,x:315.6,y:342}).wait(1).to({graphics:mask_graphics_699,x:316.3,y:342}).wait(1).to({graphics:mask_graphics_700,x:317.1,y:342}).wait(1).to({graphics:mask_graphics_701,x:318,y:342}).wait(1).to({graphics:mask_graphics_702,x:318.8,y:342}).wait(1).to({graphics:mask_graphics_703,x:319.6,y:342}).wait(1).to({graphics:mask_graphics_704,x:320.4,y:342}).wait(1).to({graphics:mask_graphics_705,x:321.2,y:342}).wait(1).to({graphics:mask_graphics_706,x:219.3,y:222.4}).wait(1).to({graphics:mask_graphics_707,x:322.6,y:342}).wait(1).to({graphics:mask_graphics_708,x:323.3,y:342}).wait(1).to({graphics:mask_graphics_709,x:324,y:342}).wait(1).to({graphics:mask_graphics_710,x:324.6,y:342}).wait(1).to({graphics:mask_graphics_711,x:325.3,y:342}).wait(1).to({graphics:mask_graphics_712,x:326,y:342}).wait(1).to({graphics:mask_graphics_713,x:326.7,y:342}).wait(1).to({graphics:mask_graphics_714,x:327.3,y:342}).wait(1).to({graphics:mask_graphics_715,x:328,y:342}).wait(1).to({graphics:mask_graphics_716,x:328.7,y:342}).wait(1).to({graphics:mask_graphics_717,x:329.3,y:342}).wait(1).to({graphics:mask_graphics_718,x:330,y:342}).wait(1).to({graphics:mask_graphics_719,x:330.7,y:342}).wait(1).to({graphics:mask_graphics_720,x:331.3,y:342}).wait(1).to({graphics:mask_graphics_721,x:332,y:342}).wait(1).to({graphics:mask_graphics_722,x:332.7,y:342}).wait(1).to({graphics:mask_graphics_723,x:333.4,y:342}).wait(1).to({graphics:mask_graphics_724,x:334.1,y:342}).wait(1).to({graphics:mask_graphics_725,x:334.7,y:342}).wait(1).to({graphics:mask_graphics_726,x:335.4,y:342}).wait(1).to({graphics:mask_graphics_727,x:336.1,y:342}).wait(1).to({graphics:mask_graphics_728,x:336.7,y:342}).wait(1).to({graphics:mask_graphics_729,x:337.4,y:342}).wait(1).to({graphics:mask_graphics_730,x:338.1,y:342}).wait(1).to({graphics:mask_graphics_731,x:338.7,y:342}).wait(1).to({graphics:mask_graphics_732,x:339.4,y:342}).wait(1).to({graphics:mask_graphics_733,x:340.1,y:342}).wait(1).to({graphics:mask_graphics_734,x:340.8,y:342}).wait(1).to({graphics:mask_graphics_735,x:341.4,y:342}).wait(1).to({graphics:mask_graphics_736,x:342.1,y:342}).wait(1).to({graphics:mask_graphics_737,x:240,y:222.4}).wait(1).to({graphics:mask_graphics_738,x:345.6,y:342}).wait(1).to({graphics:mask_graphics_739,x:245.7,y:222.4}).wait(82));

	// Layer 13
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(20,1,1).p("A0hrbQAhiMBaASQHOChg8MCQg9MEE/AGQE/AGGhjSQGjjSETkcQETkcCLib");
	this.shape_1.setTransform(348.4,343.9);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(510).to({_off:false},0).wait(311));

	// Layer 11
	this.instance_2 = new lib.ar4("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(344.4,199,1,1,0,-132.6,47.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(285).to({_off:false},0).wait(536));

	// Layer 8 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_404 = new cjs.Graphics().p("AtDjvQF9qkLpjQQLrjRKkF9QKkF9DQLqQDRLql9Kkg");
	var mask_1_graphics_405 = new cjs.Graphics().p("Askk+QGTqXLvi4QLyi4KXGSQKXGTC3LwQC5LxmSKXg");
	var mask_1_graphics_406 = new cjs.Graphics().p("AsDmLQGoqJL0igQL4igKKGoQKJGoCfL2QChL2moKKg");
	var mask_1_graphics_407 = new cjs.Graphics().p("ArhnWQG9p8L5iHQL8iHJ8G9QJ8G8CGL7QCIL7m9J8g");
	var mask_1_graphics_408 = new cjs.Graphics().p("Aq9ogQHRptL9huQMBhuJtHRQJtHRBtL+QBvL/nRJtg");
	var mask_1_graphics_409 = new cjs.Graphics().p("AqXpoQHkpdMBhWQMDhVJeHlQJdHlBVMBQBWMDnlJdg");
	var mask_1_graphics_410 = new cjs.Graphics().p("ApwquQH4pOMDg8QMFg8JOH4QJNH4A8MEQA9MFn4JNg");
	var mask_1_graphics_411 = new cjs.Graphics().p("ApIryQILo9MEgjQMIgkI9ILQI9IMAiMFQAkMGoLI9g");
	var mask_1_graphics_412 = new cjs.Graphics().p("Aoes1QIdorMFgKQMIgKIsIdQIsIdAJMGQALMIoeIrg");
	var mask_1_graphics_413 = new cjs.Graphics().p("Anzt1QIuoaMGAPQMIAPIaIwQIZIvgQMGQgOMHovIZg");
	var mask_1_graphics_414 = new cjs.Graphics().p("AnHuzQI/oHMFAoQMHAoIIJAQIHJAgpMGQgnMGpAIHg");
	var mask_1_graphics_415 = new cjs.Graphics().p("AmavvQJQn0MDBBQMGBBH0JRQH1JRhDMDQhAMFpRH0g");
	var mask_1_graphics_416 = new cjs.Graphics().p("AlrwoQJfnhMBBaQMDBaHhJhQHhJghbMBQhZMCphHhg");
	var mask_1_graphics_417 = new cjs.Graphics().p("Ak7xgQJunNL+BzQMABzHNJwQHNJwh1L+QhyL+pwHNg");
	var mask_1_graphics_418 = new cjs.Graphics().p("AkLyVQJ+m4L5CLQL8CNG4J+QG5J/iNL5QiLL6p+G5g");
	var mask_1_graphics_419 = new cjs.Graphics().p("AjYzHQKLmkL0CkQL3ClGkKNQGjKMilL0QikL2qMGkg");
	var mask_1_graphics_420 = new cjs.Graphics().p("Ailz3QKYmPLvC9QLxC9GOKaQGOKZi+LvQi8LwqZGPg");
	var mask_1_graphics_421 = new cjs.Graphics().p("Ahx0lQKll4LoDVQLrDVF4KmQF5KmjXLpQjULpqmF5g");
	var mask_1_graphics_422 = new cjs.Graphics().p("Ag81QQKxliLhDtQLjDuFiKyQFjKxjvLhQjsLjqyFig");
	var mask_1_graphics_423 = new cjs.Graphics().p("AgG14QK9lMLYEFQLbEFFMK+QFMK8kGLZQkELaq+FMg");
	var mask_1_graphics_424 = new cjs.Graphics().p("AAx2eQLHk1LQEdQLSEdE1LHQE1LHkeLQQkbLSrIE1g");
	var mask_1_graphics_425 = new cjs.Graphics().p("ABp3BQLRkdLGEzQLJE0EdLSQEeLQk1LHQkzLIrREdg");
	var mask_1_graphics_426 = new cjs.Graphics().p("ACh3hQLakGK9FKQK+FLEGLaQEGLalMK8QlKK+raEGg");
	var mask_1_graphics_427 = new cjs.Graphics().p("ADb3+QLijvKxFhQKzFiDuLiQDvLhljKyQlgKyriDvg");
	var mask_1_graphics_428 = new cjs.Graphics().p("AEV4ZQLqjWKlF3QKnF4DWLpQDXLpl5KlQl2KnrqDWg");
	var mask_1_graphics_429 = new cjs.Graphics().p("AFQ4xQLwi+KZGNQKaGOC+LwQC+LvmOKZQmMKarwC+g");
	var mask_1_graphics_430 = new cjs.Graphics().p("AGL5GQL2ilKMGiQKNGjCmL2QClL1mjKLQmiKNr2Cmg");
	var mask_1_graphics_431 = new cjs.Graphics().p("AHH5YQL7iNJ+G3QJ/G4CNL7QCNL6m5J+Qm2J/r7CNg");
	var mask_1_graphics_432 = new cjs.Graphics().p("AID5nQL/h0JvHLQJxHNB0L/QB0L+nMJvQnLJxr/B0g");
	var mask_1_graphics_433 = new cjs.Graphics().p("AJA5zQMChbJgHfQJiHgBbMDQBbMBnhJgQnfJisCBbg");
	var mask_1_graphics_434 = new cjs.Graphics().p("AJ959QMFhCJQHzQJRH0BCMEQBCMFn0JQQnyJSsFBCg");
	var mask_1_graphics_435 = new cjs.Graphics().p("AK56DQMHgpJAIGQJBIHApMFQApMHoHJAQoGJBsHApg");
	var mask_1_graphics_436 = new cjs.Graphics().p("AL26GQMIgQIuIYQIwIZAQMHQAQMHoZIvQoYIwsIAQg");
	var mask_1_graphics_437 = new cjs.Graphics().p("EAMGAgYMAAtg6fQMIAJIcIqQIfIsgKMGQgJMIorIdQohIVr3AAIgaAAg");
	var mask_1_graphics_438 = new cjs.Graphics().p("EALKAgWMAClg6bQMHAiILI7QIMI9giMGQgjMHo8IKQoYHsrMAAQgvAAgvgCg");
	var mask_1_graphics_439 = new cjs.Graphics().p("EAKNAgSMAEfg6UQMFA7H4JMQH5JNg7MFQg8MFpNH4QoOHEqiAAQhQAAhRgGg");
	var mask_1_graphics_440 = new cjs.Graphics().p("EAJQAgMMAGYg6JQMDBVHlJbQHlJehUMCQhVMDpdHkQoCGep8AAQhvAAhygMg");
	var mask_1_graphics_441 = new cjs.Graphics().p("EAIUAgEMAIQg56QMABuHQJrQHSJthtL/QhtMAptHQQn2F5pXABQiMAAiSgVg");
	var mask_1_graphics_442 = new cjs.Graphics().p("AHXf6MAKIg5nQL8CHG9J6QG9J7iGL7QiGL8p7G8QnoFXo0AAQiqAAixgfg");
	var mask_1_graphics_443 = new cjs.Graphics().p("AGcfuMAL/g5QQL3CfGoKIQGoKKifL2QifL3qJGoQnYE1oSAAQjHAAjOgrg");
	var mask_1_graphics_444 = new cjs.Graphics().p("AFgfgMAN1g41QLyC4GSKVQGUKXi4LxQi3LxqXGSQnHEWnyAAQjjAAjrg5g");
	var mask_1_graphics_445 = new cjs.Graphics().p("AE3fVMAPHg4fQLuDIGDKeQGEKgjILsQjJLuqfGDQm7EAncAAQj2AAj/hEg");
	var mask_1_graphics_446 = new cjs.Graphics().p("AEOfJMAQZg4IQLoDZF0KnQF1KpjZLnQjZLpqoFzQmuDsnHAAQkJAAkShQg");
	var mask_1_graphics_447 = new cjs.Graphics().p("ADle9MARqg3wQLkDqFkKvQFmKwjqLjQjrLkqwFkQmfDYmzAAQkcAAklhcg");
	var mask_1_graphics_448 = new cjs.Graphics().p("AC9evMAS7g3UQLdD6FVK3QFWK4j7LeQj7Ldq4FVQmRDFmeAAQkvAAk3hqg");
	var mask_1_graphics_449 = new cjs.Graphics().p("ACVehMAUKg24QLYELFFK+QFGK/kLLYQkLLYrAFFQmCCzmKAAQlDAAlIh4g");
	var mask_1_graphics_450 = new cjs.Graphics().p("ABueSMAVZg2aQLSEcE1LFQE1LGkbLSQkcLRrHE1QlyCil3AAQlVAAlZiHg");
	var mask_1_graphics_451 = new cjs.Graphics().p("ABHeCMAWng16QLLEsElLMQEmLNksLLQksLLrOEkQliCSljAAQlpAAlpiXg");
	var mask_1_graphics_452 = new cjs.Graphics().p("AAgdxMAX1g1YQLEE8EVLTQEVLTk8LEQk8LErUEUQlSCClPAAQl9AAl5iog");
	var mask_1_graphics_453 = new cjs.Graphics().p("AgFdfMAZBg00QK8FMEELZQEFLZlMK8QlMK9rZEDQlCB0k7AAQmRAAmHi6g");
	var mask_1_graphics_454 = new cjs.Graphics().p("AgrdMMAaNg0OQK1FcDzLeQD1LflcK1QlcK0rfDzQkwBlkoAAQmlAAmWjMg");
	var mask_1_graphics_455 = new cjs.Graphics().p("AhQc5MAbYgznQKtFrDiLjQDkLllrKsQlsKtrkDiQkeBYkVAAQm5AAmkjfg");
	var mask_1_graphics_456 = new cjs.Graphics().p("Ah1clMAcigy/QKkF7DSLoQDTLpl6KlQl7KkrqDRQkKBMkDAAQnOAAmxjzg");
	var mask_1_graphics_457 = new cjs.Graphics().p("AiZcQMAdrgyUQKcGKDBLsQDBLumJKbQmKKcruDAQj4BAjvABQnjAAm+kIg");
	var mask_1_graphics_458 = new cjs.Graphics().p("Ai9b6MAe0gxoQKSGZCwLxQCxLymZKSQmZKSryCvQjkA2jbAAQn6AAnKkdg");
	var mask_1_graphics_459 = new cjs.Graphics().p("AjgbkMAf7gw7QKIGoCfL0QCgL2moKJQmnKJr2CeQjQAsjIAAQoPAAnWkzg");
	var mask_1_graphics_460 = new cjs.Graphics().p("AkDbMMAhBgwLQJ/G2COL4QCOL5m2J/Qm2J/r5CNQi7Aji0AAQonAAnhlKg");
	var mask_1_graphics_461 = new cjs.Graphics().p("Akla0MAiGgvaQJ1HEB8L7QB9L8nEJ1QnEJ1r8B8QimAbigAAQo/AAnrlig");
	var mask_1_graphics_462 = new cjs.Graphics().p("AlHabMAjKgunQJrHSBrL9QBsL/nTJqQnSJrr/BqQiQAViMAAQpXAAn1l7g");
	var mask_1_graphics_463 = new cjs.Graphics().p("AloaCMAkNgt0QJgHgBaMAQBaMAngJgQnhJgsABZQh7AOh2AAQpxAAn+mTg");
	var mask_1_graphics_464 = new cjs.Graphics().p("AmIZnMAlOgs/QJVHuBIMBQBJMDnuJVQntJUsDBIQhkAKhhAAQqLAAoGmug");
	var mask_1_graphics_465 = new cjs.Graphics().p("AmjZQMAmFgsRQJLH5A6MCQA6MFn5JLQn5JLsEA5QhRAGhPAAQqhAAoNnEg");
	var mask_1_graphics_466 = new cjs.Graphics().p("Am9Y5MAm5griQJCIEArMCQAsMGoEJCQoEJBsFArQg9ADg9AAQq5AAoSnbg");
	var mask_1_graphics_467 = new cjs.Graphics().p("AnXYhMAnugqzQI3IPAdMEQAdMGoPI4QoPI4sFAbQgqACgpAAQrRAAoYnzg");
	var mask_1_graphics_468 = new cjs.Graphics().p("AnxYJMAohgqDQIuIaAOMEQAPMHoaIuQoaItsFANIgrABQrrAAodoLg");
	var mask_1_graphics_469 = new cjs.Graphics().p("EAMeAgUQsGAAoiokMApUgpRQIjIkAAMEQgBMHokIkQoiIisEAAIgEAAg");
	var mask_1_graphics_470 = new cjs.Graphics().p("EAL7AgTQsFgOoZouMAqFgofQIaIugPMEQgPMHovIZQoeIKrpAAIgtgBg");
	var mask_1_graphics_471 = new cjs.Graphics().p("EALYAgSQsFgcoPo5MAq3gnsQIOI5gdMDQgeMHo4IOQoaHyrQAAQgqAAgqgCg");
	var mask_1_graphics_472 = new cjs.Graphics().p("EAK0AgQQsEgroDpCMArlgm4QIEJDgsMCQgsMGpDIEQoTHaq4AAQg9AAg/gEg");
	var mask_1_graphics_473 = new cjs.Graphics().p("EAKRAgOQsDg6n5pMMAsVgmCQH4JLg6MCQg7MFpMH5QoOHDqgAAQhQAAhSgGg");
	var mask_1_graphics_474 = new cjs.Graphics().p("EAJtAgLQsBhJnupVMAtCglNQHuJWhJMAQhKMEpVHuQoIGsqJAAQhiAAhmgJg");
	var mask_1_graphics_475 = new cjs.Graphics().p("EAJKAgHQsAhXnipfMAtugkWQHjJfhYL/QhYMDpfHiQoAGXp0AAQh0AAh4gOg");
	var mask_1_graphics_476 = new cjs.Graphics().p("EAInAgCQr/hlnWpoMAuagjeQHXJnhnL+QhmMBpoHWQn5GCpeAAQiGAAiKgTg");
	var mask_1_graphics_477 = new cjs.Graphics().p("AIEf9Qr9h0nLpxMAvFgilQHLJwh1L8Qh1L+pwHLQnxFtpKAAQiXAAicgYg");
	var mask_1_graphics_478 = new cjs.Graphics().p("AHhf3Qr7iCm/p5MAvvghtQG/J5iDL5QiEL8p5G/QnpFZo1AAQioAAiugeg");
	var mask_1_graphics_479 = new cjs.Graphics().p("AG+fwQr4iQmzqCMAwXggyQGzKBiSL3QiSL5qBGzQngFGoiAAQi4AAjAgmg");
	var mask_1_graphics_480 = new cjs.Graphics().p("AGbfpQr1ifmnqKMAw+gf3QGnKJigL0QigL3qKGnQnWEyoPAAQjJAAjRgtg");
	var mask_1_graphics_481 = new cjs.Graphics().p("AF4fhQryitmaqSMAxkge8QGbKSivLwQiuL0qSGaQnMEgn9AAQjZAAjig1g");
	var mask_1_graphics_482 = new cjs.Graphics().p("AFWfZQrvi8mOqZMAyJgeAQGPKZi9LtQi9LxqZGOQnDENnpAAQjqAAjyg9g");
	var mask_1_graphics_483 = new cjs.Graphics().p("AEzfQQrrjKmBqhMAytgdDQGCKhjLLpQjLLtqhGBQm4D8nXAAQj6AAkDhGg");
	var mask_1_graphics_484 = new cjs.Graphics().p("AERfGQrnjYl1qoMAzRgcFQF0KnjZLmQjZLpqoF0QmtDsnGAAQkKAAkShRg");
	var mask_1_graphics_485 = new cjs.Graphics().p("ADve8QrjjmlnqvMAzxgbIQFoKujnLjQjnLkqvFoQmhDbm1AAQkaAAkihbg");
	var mask_1_graphics_486 = new cjs.Graphics().p("ADNexQrej0lbq2MA0SgaIQFbK0j1LeQj1Lgq1FbQmWDLmkAAQkqAAkxhmg");
	var mask_1_graphics_487 = new cjs.Graphics().p("ACselQrakClNq8MA0xgZJQFOK7kDLZQkDLcq8FNQmKC8mTAAQk6AAk/hyg");
	var mask_1_graphics_488 = new cjs.Graphics().p("ACLeZQrVkQlArCMA1PgYJQFALBkQLVQkRLWrCFAQl9CtmCAAQlKAAlOh+g");
	var mask_1_graphics_489 = new cjs.Graphics().p("ABqeMQrQkdkzrIMA1sgXJQEzLHkeLPQkeLSrJEyQlvCflyAAQlaAAlciLg");
	var mask_1_graphics_490 = new cjs.Graphics().p("ABJd/QrKkrkmrOMA2IgWHQEmLNksLJQksLMrOElQljCRlhAAQlrAAlpiYg");
	var mask_1_graphics_491 = new cjs.Graphics().p("AAodxQrEk5kYrTMA2igVGQEYLTk5LEQk6LFrTEYQlVCElRAAQl7AAl3img");
	var mask_1_graphics_492 = new cjs.Graphics().p("AAIdiQq+lFkKrZMA27gUEQEKLYlGK+QlHLArZEKQlGB3lCAAQmLAAmEi1g");
	var mask_1_graphics_493 = new cjs.Graphics().p("AgXdTQq5lTj8rdMA3TgTBQD8LclTK4QlVK5rdD9Qk4BrkxAAQmdAAmPjEg");
	var mask_1_graphics_494 = new cjs.Graphics().p("Ag2dDQqzlgjuriMA3pgR+QDvLhlhKxQlhKzriDvQkqBgkhAAQmtAAmbjUg");
	var mask_1_graphics_495 = new cjs.Graphics().p("AhWczQqrltjhrmMA3/gQ7QDhLmluKqQlvKsrmDhQkaBVkRAAQm/AAmnjkg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(404).to({graphics:mask_1_graphics_404,x:267.2,y:159.8}).wait(1).to({graphics:mask_1_graphics_405,x:267.2,y:162.4}).wait(1).to({graphics:mask_1_graphics_406,x:267.1,y:165}).wait(1).to({graphics:mask_1_graphics_407,x:267.1,y:167.5}).wait(1).to({graphics:mask_1_graphics_408,x:267,y:169.9}).wait(1).to({graphics:mask_1_graphics_409,x:267,y:172.3}).wait(1).to({graphics:mask_1_graphics_410,x:266.9,y:174.6}).wait(1).to({graphics:mask_1_graphics_411,x:266.9,y:176.9}).wait(1).to({graphics:mask_1_graphics_412,x:266.9,y:179.1}).wait(1).to({graphics:mask_1_graphics_413,x:266.9,y:181.2}).wait(1).to({graphics:mask_1_graphics_414,x:266.9,y:183.3}).wait(1).to({graphics:mask_1_graphics_415,x:266.9,y:185.3}).wait(1).to({graphics:mask_1_graphics_416,x:266.9,y:187.2}).wait(1).to({graphics:mask_1_graphics_417,x:267,y:189}).wait(1).to({graphics:mask_1_graphics_418,x:267,y:190.8}).wait(1).to({graphics:mask_1_graphics_419,x:267,y:192.5}).wait(1).to({graphics:mask_1_graphics_420,x:267.1,y:194.1}).wait(1).to({graphics:mask_1_graphics_421,x:267.1,y:195.6}).wait(1).to({graphics:mask_1_graphics_422,x:267.1,y:197}).wait(1).to({graphics:mask_1_graphics_423,x:267.1,y:198.3}).wait(1).to({graphics:mask_1_graphics_424,x:267.1,y:199.6}).wait(1).to({graphics:mask_1_graphics_425,x:267.1,y:200.7}).wait(1).to({graphics:mask_1_graphics_426,x:267.1,y:201.8}).wait(1).to({graphics:mask_1_graphics_427,x:267.1,y:202.8}).wait(1).to({graphics:mask_1_graphics_428,x:267.1,y:203.6}).wait(1).to({graphics:mask_1_graphics_429,x:267.1,y:204.4}).wait(1).to({graphics:mask_1_graphics_430,x:267,y:205.1}).wait(1).to({graphics:mask_1_graphics_431,x:267,y:205.7}).wait(1).to({graphics:mask_1_graphics_432,x:267,y:206.2}).wait(1).to({graphics:mask_1_graphics_433,x:266.9,y:206.6}).wait(1).to({graphics:mask_1_graphics_434,x:266.9,y:206.9}).wait(1).to({graphics:mask_1_graphics_435,x:266.9,y:207.1}).wait(1).to({graphics:mask_1_graphics_436,x:266.9,y:207.2}).wait(1).to({graphics:mask_1_graphics_437,x:266.9,y:207.2}).wait(1).to({graphics:mask_1_graphics_438,x:266.9,y:207.2}).wait(1).to({graphics:mask_1_graphics_439,x:266.9,y:207.2}).wait(1).to({graphics:mask_1_graphics_440,x:266.9,y:207.2}).wait(1).to({graphics:mask_1_graphics_441,x:267,y:207.3}).wait(1).to({graphics:mask_1_graphics_442,x:267,y:207.3}).wait(1).to({graphics:mask_1_graphics_443,x:267.1,y:207.3}).wait(1).to({graphics:mask_1_graphics_444,x:267.1,y:207.3}).wait(1).to({graphics:mask_1_graphics_445,x:267.1,y:207.3}).wait(1).to({graphics:mask_1_graphics_446,x:267.1,y:207.3}).wait(1).to({graphics:mask_1_graphics_447,x:267.1,y:207.3}).wait(1).to({graphics:mask_1_graphics_448,x:267.1,y:207.3}).wait(1).to({graphics:mask_1_graphics_449,x:267.1,y:207.3}).wait(1).to({graphics:mask_1_graphics_450,x:267.1,y:207.3}).wait(1).to({graphics:mask_1_graphics_451,x:267.1,y:207.3}).wait(1).to({graphics:mask_1_graphics_452,x:267.1,y:207.3}).wait(1).to({graphics:mask_1_graphics_453,x:267.1,y:207.3}).wait(1).to({graphics:mask_1_graphics_454,x:267.1,y:207.2}).wait(1).to({graphics:mask_1_graphics_455,x:267.1,y:207.2}).wait(1).to({graphics:mask_1_graphics_456,x:267.1,y:207.2}).wait(1).to({graphics:mask_1_graphics_457,x:267.1,y:207.2}).wait(1).to({graphics:mask_1_graphics_458,x:267,y:207.1}).wait(1).to({graphics:mask_1_graphics_459,x:267,y:207.1}).wait(1).to({graphics:mask_1_graphics_460,x:267,y:207}).wait(1).to({graphics:mask_1_graphics_461,x:267,y:207}).wait(1).to({graphics:mask_1_graphics_462,x:266.9,y:207}).wait(1).to({graphics:mask_1_graphics_463,x:266.9,y:206.9}).wait(1).to({graphics:mask_1_graphics_464,x:266.9,y:206.9}).wait(1).to({graphics:mask_1_graphics_465,x:266.9,y:206.8}).wait(1).to({graphics:mask_1_graphics_466,x:266.9,y:206.8}).wait(1).to({graphics:mask_1_graphics_467,x:266.9,y:206.8}).wait(1).to({graphics:mask_1_graphics_468,x:266.9,y:206.8}).wait(1).to({graphics:mask_1_graphics_469,x:266.9,y:206.8}).wait(1).to({graphics:mask_1_graphics_470,x:266.9,y:206.8}).wait(1).to({graphics:mask_1_graphics_471,x:266.9,y:206.8}).wait(1).to({graphics:mask_1_graphics_472,x:266.9,y:206.8}).wait(1).to({graphics:mask_1_graphics_473,x:267,y:206.8}).wait(1).to({graphics:mask_1_graphics_474,x:267,y:206.8}).wait(1).to({graphics:mask_1_graphics_475,x:267,y:206.9}).wait(1).to({graphics:mask_1_graphics_476,x:267.1,y:206.9}).wait(1).to({graphics:mask_1_graphics_477,x:267.1,y:206.9}).wait(1).to({graphics:mask_1_graphics_478,x:267.1,y:206.9}).wait(1).to({graphics:mask_1_graphics_479,x:267.2,y:207}).wait(1).to({graphics:mask_1_graphics_480,x:267.2,y:207}).wait(1).to({graphics:mask_1_graphics_481,x:267.2,y:207}).wait(1).to({graphics:mask_1_graphics_482,x:267.3,y:207}).wait(1).to({graphics:mask_1_graphics_483,x:267.3,y:207}).wait(1).to({graphics:mask_1_graphics_484,x:267.3,y:207.1}).wait(1).to({graphics:mask_1_graphics_485,x:267.3,y:207.1}).wait(1).to({graphics:mask_1_graphics_486,x:267.4,y:207.1}).wait(1).to({graphics:mask_1_graphics_487,x:267.4,y:207.1}).wait(1).to({graphics:mask_1_graphics_488,x:267.4,y:207.1}).wait(1).to({graphics:mask_1_graphics_489,x:267.4,y:207.1}).wait(1).to({graphics:mask_1_graphics_490,x:267.4,y:207.1}).wait(1).to({graphics:mask_1_graphics_491,x:267.4,y:207.1}).wait(1).to({graphics:mask_1_graphics_492,x:267.5,y:207.1}).wait(1).to({graphics:mask_1_graphics_493,x:267.5,y:207.1}).wait(1).to({graphics:mask_1_graphics_494,x:267.5,y:207.1}).wait(1).to({graphics:mask_1_graphics_495,x:267.4,y:207.1}).wait(326));

	// Layer 7
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(20,1,1).p("ApVqYQCrh+D5hRQHpieGHCPQGICPBBFpQBAFpktFuQksFwnqCeQnoCfmIiPQlTh8hUkL");
	this.shape_2.setTransform(333.7,218.8);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(404).to({_off:false},0).wait(417));

	// Layer 6 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_285 = new cjs.Graphics().p("EAQzAgWQsJgBokomQolomACsIQgBsHImolMApZApcQomIlsGAAIgCAAg");
	var mask_2_graphics_286 = new cjs.Graphics().p("EAQWAgVQsJgToWozQoYozAVsIQASsIIzoXMAoXAqcQofIFrlAAIg2gBg");
	var mask_2_graphics_287 = new cjs.Graphics().p("EAP5AgTQsIgmoJpAQoJpAAnsHQAlsGJAoKMAnVAraQoZHmrFAAQg0AAg1gDg");
	var mask_2_graphics_288 = new cjs.Graphics().p("EAPdAgRQsHg6n7pMQn7pMA6sHQA4sFJNn7MAmQAsWQoRHIqmAAQhNAAhOgFg");
	var mask_2_graphics_289 = new cjs.Graphics().p("EAPBAgNQsGhNnrpYQntpZBNsEQBLsEJYntMAlKAtRQoIGsqJAAQhkAAhngKg");
	var mask_2_graphics_290 = new cjs.Graphics().p("EAOmAgHQsEhfndpkQnepkBgsCQBdsCJkneMAkDAuKQn/GPpsAAQh7AAh/gQg");
	var mask_2_graphics_291 = new cjs.Graphics().p("EAOLAgBQsBhynOpvQnQpwBzr/QBwsAJvnPMAi7AvBQn1F0pRAAQiSAAiWgWg");
	var mask_2_graphics_292 = new cjs.Graphics().p("ANwf6Qr+iFm/p6Qm/p7CFr8QCDr9J6nAMAhxAv3QnqFao4AAQinAAiugeg");
	var mask_2_graphics_293 = new cjs.Graphics().p("ANWfxQr6iXmwqFQmwqGCYr4QCWr6KEmwMAgmAwqQnfFBoeAAQi8AAjFgng");
	var mask_2_graphics_294 = new cjs.Graphics().p("AM9foQr3iqmfqPQmhqQCqr1QCpr1KOmhMAfaAxcQnSEooGAAQjSAAjagwg");
	var mask_2_graphics_295 = new cjs.Graphics().p("AMkfdQryi8mQqZQmQqaC8rwQC7ryKZmQMAeMAyMQnGERnuAAQjmAAjwg8g");
	var mask_2_graphics_296 = new cjs.Graphics().p("AMMfRQrujOl/qjQmAqjDPrrQDMrtKjmAMAc9Ay6Qm4D6nWAAQj8AAkEhIg");
	var mask_2_graphics_297 = new cjs.Graphics().p("AL0fFQrojglvqtQlvqsDgrmQDfroKslvMAbtAzmQmpDknAAAQkRAAkYhUg");
	var mask_2_graphics_298 = new cjs.Graphics().p("ALde3Qrijylfq1Qleq1DyrhQDxrhK0lfMAadA0QQmaDPmqAAQklAAkshig");
	var mask_2_graphics_299 = new cjs.Graphics().p("ALGeoQrbkElOq9QlOq+EFraQECrbK9lOMAZLA04QmLC8mUAAQk6AAk/hyg");
	var mask_2_graphics_300 = new cjs.Graphics().p("AKweYQrVkVk9rGQk8rFEWrTQEVrVLEk9MAX4A1eQl6Cpl/AAQlOAAlSiCg");
	var mask_2_graphics_301 = new cjs.Graphics().p("AKbeIQrOkoksrMQkrrNEorMQEmrPLMkrMAWkA2CQlpCXlpAAQlkAAljiSg");
	var mask_2_graphics_302 = new cjs.Graphics().p("AKGd2QrHk5kZrTQkarUE5rFQE3rHLTkaMAVQA2kQlXCGlVAAQl4AAl1ikg");
	var mask_2_graphics_303 = new cjs.Graphics().p("AJydjQq/lJkIrbQkIraFKq9QFIrALakIMAT7A3EQlFB2lAAAQmOAAmFi3g");
	var mask_2_graphics_304 = new cjs.Graphics().p("AJedQQq2lbj2rhQj3rgFcq1QFYq3Lhj2MASkA3hQkyBnkrAAQmkAAmVjKg");
	var mask_2_graphics_305 = new cjs.Graphics().p("AJLc7QqtlrjlrnQjkrmFsqsQFqqvLmjkMAROA3+QkfBYkWAAQm6AAmljfg");
	var mask_2_graphics_306 = new cjs.Graphics().p("AI5cmQqkl9jSrrQjTrrF9qkQF6qlLrjSMAP3A4XQkLBLkBAAQnRAAmzj0g");
	var mask_2_graphics_307 = new cjs.Graphics().p("AIocPQqbmMjArxQjArvGNqbQGKqcLxjAMAOeA4vQj2A/jtAAQnnAAnBkLg");
	var mask_2_graphics_308 = new cjs.Graphics().p("AIXb4QqRmdiur1Qitr0GdqRQGaqSL1itMANGA5EQjhAzjYAAQn/AAnOkhg");
	var mask_2_graphics_309 = new cjs.Graphics().p("AIHbgQqHmtibr5Qibr4GtqGQGqqIL5ibMALsA5XQjKApjDAAQoYAAnak5g");
	var mask_2_graphics_310 = new cjs.Graphics().p("AH4bGQp9m8iIr8QiJr8G8p8QG7p9L8iIMAKTA5oQi0AgitAAQoxAAnmlTg");
	var mask_2_graphics_311 = new cjs.Graphics().p("AHpasQpxnLh2sAQh2r+HLpxQHKpzL/h1MAI6A53QidAYiYAAQpLAAnxltg");
	var mask_2_graphics_312 = new cjs.Graphics().p("AHcaRQpnnahjsDQhjsBHaplQHZpnMChjMAHfA6DQiFASiBAAQpmAAn7mIg");
	var mask_2_graphics_313 = new cjs.Graphics().p("AHOZ1QpanphQsEQhRsEHppaQHopbMEhQMAGEA6OQhtALhqAAQqCAAoFmjg");
	var mask_2_graphics_314 = new cjs.Graphics().p("AHCZZQpOn4g+sGQg+sFH4pOQH2pPMGg+MAEqA6XQhVAGhSAAQqgAAoNm/g");
	var mask_2_graphics_315 = new cjs.Graphics().p("AG3Y7QpCoGgrsHQgrsHIFpBQIFpDMHgrMADPA6dQg7ADg6AAQq+AAoVndg");
	var mask_2_graphics_316 = new cjs.Graphics().p("AGsYcQo1oUgYsIQgYsHITo0QISo2MJgYMABzA6gIhCABQreAAocn8g");
	var mask_2_graphics_317 = new cjs.Graphics().p("AGiX9QoooigFsIQgFsHIgooQIgopMJgFMAAZA6iIgPAAQr/AAoiobg");
	var mask_2_graphics_318 = new cjs.Graphics().p("AF3XdQoaovAOsIQANsIIuoaQIuobMIAOMgBCA6hQsJgOoaotg");
	var mask_2_graphics_319 = new cjs.Graphics().p("AFBW9QoMo8AgsIQAhsHI7oMQI6oOMIAhMgCeA6fQsHghoNo6g");
	var mask_2_graphics_320 = new cjs.Graphics().p("AEMWcQn+pIAzsHQAzsGJIn+QJHoAMGA0MgD4A6ZQsHgzn+pHg");
	var mask_2_graphics_321 = new cjs.Graphics().p("ADYV7QnwpUBGsGQBGsEJUnwQJTnxMFBGMgFTA6TQsFhHnwpTg");
	var mask_2_graphics_322 = new cjs.Graphics().p("AClVaQnipgBZsCQBZsEJfnhQJgnjMDBZMgGuA6JQsDhZnhpfg");
	var mask_2_graphics_323 = new cjs.Graphics().p("AByU5QnTpsBssAQBssAJrnTQJrnTMABrMgIIA5+QsAhsnTprg");
	var mask_2_graphics_324 = new cjs.Graphics().p("ABBUYQnEp3B/r9QB+r+J2nDQJ2nFL+B/MgJiA5vQr+h+nDp2g");
	var mask_2_graphics_325 = new cjs.Graphics().p("AAQT3Qm0qCCRr6QCRr6KBm0QKBm1L6CRMgK8A5fQr6iRm0qAg");
	var mask_2_graphics_326 = new cjs.Graphics().p("AgeTWQmmqNCkr2QCjr3KMmjQKLmmL3CkMgMVA5NQr3ikmjqKg");
	var mask_2_graphics_327 = new cjs.Graphics().p("AhNS0QmVqWC2ryQC2rzKVmTQKVmWLzC2MgNuA45Qrzi2mTqVg");
	var mask_2_graphics_328 = new cjs.Graphics().p("Ah6STQmFqgDIrtQDIruKfmEQKfmFLuDIMgPGA4iQrujImDqeg");
	var mask_2_graphics_329 = new cjs.Graphics().p("AimRxQl1qpDaroQDbrpKolzQKol1LpDbMgQeA4JQrpjalyqog");
	var mask_2_graphics_330 = new cjs.Graphics().p("AjSRQQljqyDsrjQDsrjKxliQKxllLjDtMgR0A3vQrkjtliqwg");
	var mask_2_graphics_331 = new cjs.Graphics().p("Aj7QvQlTq7D+rcQD+reK5lRQK6lULdD/MgTLA3SQrdj/lRq4g");
	var mask_2_graphics_332 = new cjs.Graphics().p("AkkQNQlCrDEQrVQEQrXLBlBQLClCLWEQMgUgA2zQrXkQlArBg");
	var mask_2_graphics_333 = new cjs.Graphics().p("AlMPsQkwrKEhrQQEirQLJkvQLJkxLQEiMgV2A2SQrPkikwrIg");
	var mask_2_graphics_334 = new cjs.Graphics().p("AlyPKQkfrREzrIQEzrJLQkeQLQkfLJEzMgXKA1vQrIkzkerQg");
	var mask_2_graphics_335 = new cjs.Graphics().p("AmVOrQkPrXFDrBQFDrCLXkNQLWkQLCFDMgYXA1NQrBlDkOrWg");
	var mask_2_graphics_336 = new cjs.Graphics().p("Am2ONQj/reFTq5QFTq7Lcj9QLcj/K7FTMgZjA0pQq5lSj+rcg");
	var mask_2_graphics_337 = new cjs.Graphics().p("AnWNuQjurjFiqxQFiqzLijsQLijvKzFiMgavA0EQqxlijtrig");
	var mask_2_graphics_338 = new cjs.Graphics().p("An2NQQjdroFyqqQFxqqLojcQLnjeKqFyMgb5AzcQqplyjdrmg");
	var mask_2_graphics_339 = new cjs.Graphics().p("AoUMyQjMrtGBqhQGAqiLtjLQLsjOKiGCMgdDAyzQqhmBjMrrg");
	var mask_2_graphics_340 = new cjs.Graphics().p("AowMUQi8ryGQqYQGPqZLxi6QLxi9KZGRMgeLAyJQqZmRi6rvg");
	var mask_2_graphics_341 = new cjs.Graphics().p("ApML2Qirr2GfqPQGeqQL1ipQL1irKQGfMgfTAxdQqPmfiqr0g");
	var mask_2_graphics_342 = new cjs.Graphics().p("ApnLYQiZr4GtqHQGtqGL5iYQL4ibKGGuMggZAwvQqGmtiZr4g");
	var mask_2_graphics_343 = new cjs.Graphics().p("AqAK7QiIr8G8p9QG7p8L8iHQL7iJJ9G8MghgAv/Qp7m8iIr6g");
	var mask_2_graphics_344 = new cjs.Graphics().p("AqYKeQh3r/HKpzQHJpyL/h2QL+h4JzHKMgikAvPQpynKh2r9g");
	var mask_2_graphics_345 = new cjs.Graphics().p("AqvKBQhmsBHYppQHXpoMChkQMAhnJpHYMgjoAudQpnnYhlsAg");
	var mask_2_graphics_346 = new cjs.Graphics().p("ArFJkQhUsDHmpeQHlpdMDhTQMDhWJdHmMgkoAtpQpenmhUsCg");
	var mask_2_graphics_347 = new cjs.Graphics().p("AraJHQhDsFH0pSQHypSMFhCQMFhEJSHzMglpAs0QpTn0hDsEg");
	var mask_2_graphics_348 = new cjs.Graphics().p("ArtIrQgxsGIApHQIApHMGgxQMGgyJHIAMgmpAr9QpHoBgysFg");
	var mask_2_graphics_349 = new cjs.Graphics().p("Ar/IPQggsHIOo7QIMo8MIgfQMHghI7IOMgnoArEQo8oOggsGg");
	var mask_2_graphics_350 = new cjs.Graphics().p("AsPH0QgPsIIaowQIaovMHgOQMIgPIvIaMgolAqLQowobgOsGg");
	var mask_2_graphics_351 = new cjs.Graphics().p("AsfHYQADsIInojQIlojMIAEQMIABIjInMgpiApQQojonADsHg");
	var mask_2_graphics_352 = new cjs.Graphics().p("AstG9QAUsHIzoXQIyoXMIAWQMHATIXIzMgqdAoTQoWozAUsHg");
	var mask_2_graphics_353 = new cjs.Graphics().p("As6GjQAmsHI+oKQI+oKMHAnQMHAkIKI/MgrWAnVQoKo+AmsGg");
	var mask_2_graphics_354 = new cjs.Graphics().p("AtGGIQA3sGJLn8QJJn9MGA4QMGA2H9JKMgsOAmXQn8pLA2sFg");
	var mask_2_graphics_355 = new cjs.Graphics().p("AtQFuQBIsEJWnwQJVnvMFBJQMEBIHwJVMgtFAlXQnvpWBIsEg");
	var mask_2_graphics_356 = new cjs.Graphics().p("AtZFVQBasDJhniQJgniMCBbQMDBZHiJhMgt6AkUQnhpgBZsCg");
	var mask_2_graphics_357 = new cjs.Graphics().p("AthE8QBssBJrnUQJrnUMABsQMBBqHUJsMgutAjSQnUpsBqr/g");
	var mask_2_graphics_358 = new cjs.Graphics().p("AtnEjQB8r+J2nGQJ1nGL+B9QL+B7HGJ2MgvfAiPQnGp2B8r9g");
	var mask_2_graphics_359 = new cjs.Graphics().p("AtsELQCOr7KAm4QJ/m4L6CPQL7CMG4KAMgwPAhKQm4qACNr6g");
	var mask_2_graphics_360 = new cjs.Graphics().p("AtwDzQCfr4KKmpQKImpL4CfQL4CeGpKKMgw/AgDQmpqJCer3g");
	var mask_2_graphics_361 = new cjs.Graphics().p("AtyDcQCwr0KTmbQKSmaLzCwQL1CvGaKTMgxsAe9QmbqTCwrzg");
	var mask_2_graphics_362 = new cjs.Graphics().p("AtzDFQDBrwKcmMQKbmLLvDBQLwDAGMKcMgyYAd1QmMqcDBrvg");
	var mask_2_graphics_363 = new cjs.Graphics().p("AtzCuQDSrrKkl8QKll9LqDSQLsDRF9KlMgzCAcsQl9qlDRrrg");
	var mask_2_graphics_364 = new cjs.Graphics().p("AtxCYQDirmKsltQKuluLmDkQLmDhFuKtMgzrAbiQltqtDirmg");
	var mask_2_graphics_365 = new cjs.Graphics().p("AtvCDQDzrhK1leQK1leLhD0QLiDyFdK1Mg0RAaXQleq1Dyrgg");
	var mask_2_graphics_366 = new cjs.Graphics().p("AtqBuQEDrbK8lPQK9lOLcEEQLbEDFPK9Mg03AZMQlOq9EDrbg");
	var mask_2_graphics_367 = new cjs.Graphics().p("AtlBaQEUrWLEk+QLEk/LVEVQLWETE+LEMg1aAYAQk+rFETrUg");
	var mask_2_graphics_368 = new cjs.Graphics().p("AteBGQEkrPLLkvQLLkuLPElQLPEjEvLKMg18AWzQkvrLEkrOg");
	var mask_2_graphics_369 = new cjs.Graphics().p("AtWAyQE1rILRkeQLSkeLIE1QLIEzEfLRMg2cAVlQkerSEzrIg");
	var mask_2_graphics_370 = new cjs.Graphics().p("AtMAgQFErCLXkOQLZkOLBFFQLBFDEOLYMg26AUWQkOrYFErAg");
	var mask_2_graphics_371 = new cjs.Graphics().p("AtCANQFVq6Ldj9QLej+K5FVQK7FTD9LdMg3WATHQj+reFTq5g");
	var mask_2_graphics_372 = new cjs.Graphics().p("As2gDQFkqzLjjtQLkjtKxFkQKzFiDtLjMg3yAR3QjsrjFiqwg");
	var mask_2_graphics_373 = new cjs.Graphics().p("AsogVQFzqqLojdQLpjcKpF0QKrFyDcLoMg4KAQmQjcrpFyqog");
	var mask_2_graphics_374 = new cjs.Graphics().p("AsaglQGDqiLtjMQLtjLKhGDQKiGBDMLsMg4iAPWQjLruGBqfg");
	var mask_2_graphics_375 = new cjs.Graphics().p("AsKg1QGSqaLxi6QLyi7KYGSQKZGQC7LyMg43AOEQi6ryGQqXg");
	var mask_2_graphics_376 = new cjs.Graphics().p("Ar4hEQGgqRL1ipQL2iqKPGhQKQGfCqL1Mg5KAMyQiqr2GgqNg");
	var mask_2_graphics_377 = new cjs.Graphics().p("ArmhTQGvqHL5iYQL6iZKFGwQKGGtCZL5Mg5cALgQiYr6GuqEg");
	var mask_2_graphics_378 = new cjs.Graphics().p("ArShhQG9p9L8iIQL9iHJ8G+QJ9G8CHL8Mg5rAKNQiIr9G9p6g");
	var mask_2_graphics_379 = new cjs.Graphics().p("Aq9hvQHLpzL/h2QMAh2JyHMQJyHLB2L+Mg55AI6Qh2sAHLpwg");
	var mask_2_graphics_380 = new cjs.Graphics().p("Aqnh8QHapoMBhlQMChlJnHaQJoHYBlMCMg6FAHmQhlsCHZpmg");
	var mask_2_graphics_381 = new cjs.Graphics().p("AqQiIQHopdMDhUQMFhTJcHnQJdHlBUMFMg6PAGSQhUsEHmpbg");
	var mask_2_graphics_382 = new cjs.Graphics().p("Ap3iTQH1pTMFhCQMGhCJRH1QJSHzBCMGMg6XAE/QhCsHH0pPg");
	var mask_2_graphics_383 = new cjs.Graphics().p("ApeieQICpHMHgxQMHgxJGIDQJHH/AwMIMg6dADrQgxsIIBpEg");
	var mask_2_graphics_384 = new cjs.Graphics().p("Ao9irQISo4MIgcQMIgbI3ISQI5IPAbMJMg6iACEQgbsJIQo2g");
	var mask_2_graphics_385 = new cjs.Graphics().p("Aoai2QIhoqMIgGQMJgGIpIhQIqIfAGMJMg6kAAdQgHsJIgong");
	var mask_2_graphics_386 = new cjs.Graphics().p("AwzQ8QAPsJIvoYQIvobMJAPQMIAQIaIwQIaIugPMIg");
	var mask_2_graphics_387 = new cjs.Graphics().p("AwxPvQAksII9oJQI+oLMIAlQMIAkIKI/QILI8glMIg");
	var mask_2_graphics_388 = new cjs.Graphics().p("AwuOiQA5sHJMn4QJMn8MGA6QMHA6H5JNQH7JKg5MHg");
	var mask_2_graphics_389 = new cjs.Graphics().p("AwqNVQBPsEJZnpQJZnrMFBPQMFBPHpJbQHrJYhPMEg");
	var mask_2_graphics_390 = new cjs.Graphics().p("AwkMJQBksCJmnYQJnnaMCBkQMCBkHYJnQHbJmhlMCg");
	var mask_2_graphics_391 = new cjs.Graphics().p("AwdK8QB5r+JznHQJznJL/B5QL/B5HIJ0QHJJyh5L/g");
	var mask_2_graphics_392 = new cjs.Graphics().p("AwVJwQCPr6J+m2QKAm4L7COQL8CPG2KAQG4J+iPL7g");
	var mask_2_graphics_393 = new cjs.Graphics().p("AwLIlQCjr2KLmlQKLmmL3CjQL4CjGkKNQGmKKijL3g");
	var mask_2_graphics_394 = new cjs.Graphics().p("Av/HaQC3rxKWmTQKXmULyC4QLyC4GTKXQGUKVi4Lzg");
	var mask_2_graphics_395 = new cjs.Graphics().p("AvzGPQDNrsKgmAQKimBLtDMQLtDNF/KiQGCKgjMLsg");
	var mask_2_graphics_396 = new cjs.Graphics().p("AvlFFQDhrmKrltQKslvLnDhQLnDhFtKsQFvKqjhLng");
	var mask_2_graphics_397 = new cjs.Graphics().p("AvVD8QD1rfK1lbQK1lcLgD1QLhD1FaK1QFcK1j1Lhg");
	var mask_2_graphics_398 = new cjs.Graphics().p("AvECzQEJrYK9lIQK/lILaEJQLZEJFHK+QFJK+kJLag");
	var mask_2_graphics_399 = new cjs.Graphics().p("AuyBrQEdrQLFk1QLJk1LSEdQLREdE0LHQE2LHkdLSg");
	var mask_2_graphics_400 = new cjs.Graphics().p("AueAkQEwrJLOkgQLQkiLKExQLKExEgLPQEiLPkxLJg");
	var mask_2_graphics_401 = new cjs.Graphics().p("AuJghQFErBLVkNQLYkOLBFFQLBFEEMLWQEOLXlELBg");
	var mask_2_graphics_402 = new cjs.Graphics().p("AtzhnQFXq3Lcj5QLgj6K3FYQK4FXD4LdQD6LelXK4g");
	var mask_2_graphics_403 = new cjs.Graphics().p("AtbirQFqquLijlQLmjlKuFqQKuFqDkLkQDmLllqKug");
	var mask_2_graphics_404 = new cjs.Graphics().p("AtDjvQF9qkLpjQQLrjRKkF9QKkF9DQLqQDRLql9Kkg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(285).to({graphics:mask_2_graphics_285,x:240.1,y:207}).wait(1).to({graphics:mask_2_graphics_286,x:238.4,y:207}).wait(1).to({graphics:mask_2_graphics_287,x:236.8,y:207}).wait(1).to({graphics:mask_2_graphics_288,x:235.1,y:207}).wait(1).to({graphics:mask_2_graphics_289,x:233.3,y:207.1}).wait(1).to({graphics:mask_2_graphics_290,x:231.5,y:207.1}).wait(1).to({graphics:mask_2_graphics_291,x:229.7,y:207.1}).wait(1).to({graphics:mask_2_graphics_292,x:227.9,y:207.2}).wait(1).to({graphics:mask_2_graphics_293,x:226,y:207.2}).wait(1).to({graphics:mask_2_graphics_294,x:224.1,y:207.2}).wait(1).to({graphics:mask_2_graphics_295,x:222.2,y:207.3}).wait(1).to({graphics:mask_2_graphics_296,x:220.2,y:207.3}).wait(1).to({graphics:mask_2_graphics_297,x:218.2,y:207.3}).wait(1).to({graphics:mask_2_graphics_298,x:216.2,y:207.3}).wait(1).to({graphics:mask_2_graphics_299,x:214.2,y:207.4}).wait(1).to({graphics:mask_2_graphics_300,x:212.1,y:207.4}).wait(1).to({graphics:mask_2_graphics_301,x:210,y:207.4}).wait(1).to({graphics:mask_2_graphics_302,x:207.9,y:207.4}).wait(1).to({graphics:mask_2_graphics_303,x:205.8,y:207.4}).wait(1).to({graphics:mask_2_graphics_304,x:203.6,y:207.4}).wait(1).to({graphics:mask_2_graphics_305,x:201.5,y:207.4}).wait(1).to({graphics:mask_2_graphics_306,x:199.3,y:207.4}).wait(1).to({graphics:mask_2_graphics_307,x:197.1,y:207.4}).wait(1).to({graphics:mask_2_graphics_308,x:194.9,y:207.3}).wait(1).to({graphics:mask_2_graphics_309,x:192.6,y:207.3}).wait(1).to({graphics:mask_2_graphics_310,x:190.4,y:207.3}).wait(1).to({graphics:mask_2_graphics_311,x:188.2,y:207.3}).wait(1).to({graphics:mask_2_graphics_312,x:185.9,y:207.3}).wait(1).to({graphics:mask_2_graphics_313,x:183.6,y:207.2}).wait(1).to({graphics:mask_2_graphics_314,x:181.4,y:207.2}).wait(1).to({graphics:mask_2_graphics_315,x:179.1,y:207.2}).wait(1).to({graphics:mask_2_graphics_316,x:176.8,y:207.2}).wait(1).to({graphics:mask_2_graphics_317,x:174.6,y:207.2}).wait(1).to({graphics:mask_2_graphics_318,x:175.6,y:207.2}).wait(1).to({graphics:mask_2_graphics_319,x:177.9,y:207.2}).wait(1).to({graphics:mask_2_graphics_320,x:180.1,y:207}).wait(1).to({graphics:mask_2_graphics_321,x:182.4,y:206.9}).wait(1).to({graphics:mask_2_graphics_322,x:184.7,y:206.6}).wait(1).to({graphics:mask_2_graphics_323,x:186.9,y:206.4}).wait(1).to({graphics:mask_2_graphics_324,x:189.2,y:206}).wait(1).to({graphics:mask_2_graphics_325,x:191.4,y:205.6}).wait(1).to({graphics:mask_2_graphics_326,x:193.7,y:205.2}).wait(1).to({graphics:mask_2_graphics_327,x:195.9,y:204.7}).wait(1).to({graphics:mask_2_graphics_328,x:198.1,y:204.1}).wait(1).to({graphics:mask_2_graphics_329,x:200.3,y:203.5}).wait(1).to({graphics:mask_2_graphics_330,x:202.4,y:202.9}).wait(1).to({graphics:mask_2_graphics_331,x:204.6,y:202.2}).wait(1).to({graphics:mask_2_graphics_332,x:206.7,y:201.4}).wait(1).to({graphics:mask_2_graphics_333,x:208.9,y:200.6}).wait(1).to({graphics:mask_2_graphics_334,x:211,y:199.7}).wait(1).to({graphics:mask_2_graphics_335,x:212.9,y:198.8}).wait(1).to({graphics:mask_2_graphics_336,x:214.8,y:197.9}).wait(1).to({graphics:mask_2_graphics_337,x:216.7,y:197}).wait(1).to({graphics:mask_2_graphics_338,x:218.5,y:196}).wait(1).to({graphics:mask_2_graphics_339,x:220.4,y:195}).wait(1).to({graphics:mask_2_graphics_340,x:222.2,y:194}).wait(1).to({graphics:mask_2_graphics_341,x:224,y:192.9}).wait(1).to({graphics:mask_2_graphics_342,x:225.7,y:191.7}).wait(1).to({graphics:mask_2_graphics_343,x:227.5,y:190.5}).wait(1).to({graphics:mask_2_graphics_344,x:229.2,y:189.3}).wait(1).to({graphics:mask_2_graphics_345,x:230.9,y:188.1}).wait(1).to({graphics:mask_2_graphics_346,x:232.5,y:186.8}).wait(1).to({graphics:mask_2_graphics_347,x:234.1,y:185.5}).wait(1).to({graphics:mask_2_graphics_348,x:235.7,y:184.1}).wait(1).to({graphics:mask_2_graphics_349,x:237.3,y:182.7}).wait(1).to({graphics:mask_2_graphics_350,x:238.8,y:181.3}).wait(1).to({graphics:mask_2_graphics_351,x:240.3,y:179.8}).wait(1).to({graphics:mask_2_graphics_352,x:241.8,y:178.3}).wait(1).to({graphics:mask_2_graphics_353,x:243.2,y:176.7}).wait(1).to({graphics:mask_2_graphics_354,x:244.6,y:175.2}).wait(1).to({graphics:mask_2_graphics_355,x:246,y:173.6}).wait(1).to({graphics:mask_2_graphics_356,x:247.3,y:171.9}).wait(1).to({graphics:mask_2_graphics_357,x:248.6,y:170.3}).wait(1).to({graphics:mask_2_graphics_358,x:249.8,y:168.6}).wait(1).to({graphics:mask_2_graphics_359,x:251,y:166.9}).wait(1).to({graphics:mask_2_graphics_360,x:252.2,y:165.1}).wait(1).to({graphics:mask_2_graphics_361,x:253.3,y:163.4}).wait(1).to({graphics:mask_2_graphics_362,x:254.4,y:161.6}).wait(1).to({graphics:mask_2_graphics_363,x:255.5,y:159.8}).wait(1).to({graphics:mask_2_graphics_364,x:256.5,y:157.9}).wait(1).to({graphics:mask_2_graphics_365,x:257.4,y:156}).wait(1).to({graphics:mask_2_graphics_366,x:258.4,y:154.2}).wait(1).to({graphics:mask_2_graphics_367,x:259.2,y:152.3}).wait(1).to({graphics:mask_2_graphics_368,x:260.1,y:150.3}).wait(1).to({graphics:mask_2_graphics_369,x:260.9,y:148.4}).wait(1).to({graphics:mask_2_graphics_370,x:261.6,y:146.4}).wait(1).to({graphics:mask_2_graphics_371,x:262.3,y:144.4}).wait(1).to({graphics:mask_2_graphics_372,x:263,y:142.4}).wait(1).to({graphics:mask_2_graphics_373,x:263.6,y:140.4}).wait(1).to({graphics:mask_2_graphics_374,x:264.2,y:138.4}).wait(1).to({graphics:mask_2_graphics_375,x:264.7,y:136.4}).wait(1).to({graphics:mask_2_graphics_376,x:265.2,y:134.3}).wait(1).to({graphics:mask_2_graphics_377,x:265.6,y:132.3}).wait(1).to({graphics:mask_2_graphics_378,x:266,y:130.2}).wait(1).to({graphics:mask_2_graphics_379,x:266.3,y:128.1}).wait(1).to({graphics:mask_2_graphics_380,x:266.6,y:126}).wait(1).to({graphics:mask_2_graphics_381,x:266.9,y:123.9}).wait(1).to({graphics:mask_2_graphics_382,x:267,y:121.9}).wait(1).to({graphics:mask_2_graphics_383,x:267.1,y:119.8}).wait(1).to({graphics:mask_2_graphics_384,x:267.2,y:117.2}).wait(1).to({graphics:mask_2_graphics_385,x:267.3,y:114.6}).wait(1).to({graphics:mask_2_graphics_386,x:267.3,y:115.7}).wait(1).to({graphics:mask_2_graphics_387,x:267.3,y:118.3}).wait(1).to({graphics:mask_2_graphics_388,x:267.3,y:120.9}).wait(1).to({graphics:mask_2_graphics_389,x:267.3,y:123.4}).wait(1).to({graphics:mask_2_graphics_390,x:267.3,y:126}).wait(1).to({graphics:mask_2_graphics_391,x:267.3,y:128.5}).wait(1).to({graphics:mask_2_graphics_392,x:267.3,y:131}).wait(1).to({graphics:mask_2_graphics_393,x:267.3,y:133.6}).wait(1).to({graphics:mask_2_graphics_394,x:267.3,y:136.1}).wait(1).to({graphics:mask_2_graphics_395,x:267.4,y:138.5}).wait(1).to({graphics:mask_2_graphics_396,x:267.4,y:141}).wait(1).to({graphics:mask_2_graphics_397,x:267.4,y:143.5}).wait(1).to({graphics:mask_2_graphics_398,x:267.4,y:145.9}).wait(1).to({graphics:mask_2_graphics_399,x:267.3,y:148.3}).wait(1).to({graphics:mask_2_graphics_400,x:267.3,y:150.6}).wait(1).to({graphics:mask_2_graphics_401,x:267.3,y:153}).wait(1).to({graphics:mask_2_graphics_402,x:267.3,y:155.3}).wait(1).to({graphics:mask_2_graphics_403,x:267.2,y:157.6}).wait(1).to({graphics:mask_2_graphics_404,x:267.2,y:159.8}).wait(417));

	// Layer 4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(20,1,1).p("AtzmJQCqh9D6hRQHoifGICPQGICPBAFpQBBFoktFwQgcAigeAg");
	this.shape_3.setTransform(362.3,191.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(20,1,1).p("ApVqYQCrh+D5hRQHpieGHCPQGICPBBFpQBAFpktFuQksFwnqCeQnoCfmIiPQlTh8hUkL");
	this.shape_4.setTransform(333.7,218.8);

	var maskedShapeInstanceList = [this.shape_3,this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3}]},285).to({state:[{t:this.shape_4}]},98).wait(438));

	// Layer 10
	this.instance_3 = new lib.ar5("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(63,389.7,1,1,33.7,0,0,0.1,-1.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(134).to({_off:false},0).wait(687));

	// Layer 5 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_134 = new cjs.Graphics().p("AlsJ7IAApEId1AAIAAJEg");
	var mask_3_graphics_135 = new cjs.Graphics().p("Au6EtIAApZId1AAIAAJZg");
	var mask_3_graphics_136 = new cjs.Graphics().p("Au6E5IAApxId1AAIAAJxg");
	var mask_3_graphics_137 = new cjs.Graphics().p("Au6FDIAAqGId1AAIAAKGg");
	var mask_3_graphics_138 = new cjs.Graphics().p("Au6FPIAAqdId1AAIAAKdg");
	var mask_3_graphics_139 = new cjs.Graphics().p("Au6FaIAAqzId1AAIAAKzg");
	var mask_3_graphics_140 = new cjs.Graphics().p("Au6FlIAArJId1AAIAALJg");
	var mask_3_graphics_141 = new cjs.Graphics().p("Au6FwIAArgId1AAIAALgg");
	var mask_3_graphics_142 = new cjs.Graphics().p("Au6F7IAAr2Id1AAIAAL2g");
	var mask_3_graphics_143 = new cjs.Graphics().p("Au6GHIAAsNId1AAIAAMNg");
	var mask_3_graphics_144 = new cjs.Graphics().p("Au6GSIAAsjId1AAIAAMjg");
	var mask_3_graphics_145 = new cjs.Graphics().p("Au6GdIAAs5Id1AAIAAM5g");
	var mask_3_graphics_146 = new cjs.Graphics().p("Au6GoIAAtPId1AAIAANPg");
	var mask_3_graphics_147 = new cjs.Graphics().p("Au6GzIAAtlId1AAIAANlg");
	var mask_3_graphics_148 = new cjs.Graphics().p("Au6G/IAAt8Id1AAIAAN8g");
	var mask_3_graphics_149 = new cjs.Graphics().p("Au6HKIAAuTId1AAIAAOTg");
	var mask_3_graphics_150 = new cjs.Graphics().p("Au6HVIAAupId1AAIAAOpg");
	var mask_3_graphics_151 = new cjs.Graphics().p("Au6HgIAAu/Id1AAIAAO/g");
	var mask_3_graphics_152 = new cjs.Graphics().p("Au6HrIAAvVId1AAIAAPVg");
	var mask_3_graphics_153 = new cjs.Graphics().p("Au6H2IAAvrId1AAIAAPrg");
	var mask_3_graphics_154 = new cjs.Graphics().p("Au6ICIAAwDId1AAIAAQDg");
	var mask_3_graphics_155 = new cjs.Graphics().p("Au6INIAAwZId1AAIAAQZg");
	var mask_3_graphics_156 = new cjs.Graphics().p("Au6IYIAAwvId1AAIAAQvg");
	var mask_3_graphics_157 = new cjs.Graphics().p("Au6IjIAAxFId1AAIAARFg");
	var mask_3_graphics_158 = new cjs.Graphics().p("Au6IvIAAxcId1AAIAARcg");
	var mask_3_graphics_159 = new cjs.Graphics().p("Au6I6IAAxzId1AAIAARzg");
	var mask_3_graphics_160 = new cjs.Graphics().p("Au6JFIAAyJId1AAIAASJg");
	var mask_3_graphics_161 = new cjs.Graphics().p("Au6JQIAAyfId1AAIAASfg");
	var mask_3_graphics_162 = new cjs.Graphics().p("Au6JcIAAy2Id1AAIAAS2g");
	var mask_3_graphics_163 = new cjs.Graphics().p("Au6JmIAAzLId1AAIAATLg");
	var mask_3_graphics_164 = new cjs.Graphics().p("Au6JxIAAziId1AAIAATig");
	var mask_3_graphics_165 = new cjs.Graphics().p("Au6J9IAAz5Id1AAIAAT5g");
	var mask_3_graphics_166 = new cjs.Graphics().p("Au6KIIAA0PId1AAIAAUPg");
	var mask_3_graphics_167 = new cjs.Graphics().p("Au6KTIAA0lId1AAIAAUlg");
	var mask_3_graphics_168 = new cjs.Graphics().p("Au6KeIAA07Id1AAIAAU7g");
	var mask_3_graphics_169 = new cjs.Graphics().p("Au6KqIAA1TId1AAIAAVTg");
	var mask_3_graphics_170 = new cjs.Graphics().p("Au6K1IAA1pId1AAIAAVpg");
	var mask_3_graphics_171 = new cjs.Graphics().p("Au6LAIAA1/Id1AAIAAV/g");
	var mask_3_graphics_172 = new cjs.Graphics().p("Au6LLIAA2VId1AAIAAWVg");
	var mask_3_graphics_173 = new cjs.Graphics().p("Au6LWIAA2rId1AAIAAWrg");
	var mask_3_graphics_174 = new cjs.Graphics().p("Au6LhIAA3CId1AAIAAXCg");
	var mask_3_graphics_175 = new cjs.Graphics().p("Au6LtIAA3ZId1AAIAAXZg");
	var mask_3_graphics_176 = new cjs.Graphics().p("Au6L4IAA3vId1AAIAAXvg");
	var mask_3_graphics_177 = new cjs.Graphics().p("Au6MDIAA4FId1AAIAAYFg");
	var mask_3_graphics_178 = new cjs.Graphics().p("Au6MOIAA4bId1AAIAAYbg");
	var mask_3_graphics_179 = new cjs.Graphics().p("Au6MaIAA4zId1AAIAAYzg");
	var mask_3_graphics_180 = new cjs.Graphics().p("Au6MlIAA5JId1AAIAAZJg");
	var mask_3_graphics_181 = new cjs.Graphics().p("Au6MwIAA5fId1AAIAAZfg");
	var mask_3_graphics_182 = new cjs.Graphics().p("Au6M7IAA51Id1AAIAAZ1g");
	var mask_3_graphics_183 = new cjs.Graphics().p("Au6NGIAA6LId1AAIAAaLg");
	var mask_3_graphics_184 = new cjs.Graphics().p("Au6NRIAA6hId1AAIAAahg");
	var mask_3_graphics_185 = new cjs.Graphics().p("Au6NcIAA63Id1AAIAAa3g");
	var mask_3_graphics_186 = new cjs.Graphics().p("Au6NoIAA7PId1AAIAAbPg");
	var mask_3_graphics_187 = new cjs.Graphics().p("Au6NzIAA7lId1AAIAAblg");
	var mask_3_graphics_188 = new cjs.Graphics().p("Au6N+IAA77Id1AAIAAb7g");
	var mask_3_graphics_189 = new cjs.Graphics().p("Au6OJIAA8RId1AAIAAcRg");
	var mask_3_graphics_190 = new cjs.Graphics().p("Au6OUIAA8nId1AAIAAcng");
	var mask_3_graphics_191 = new cjs.Graphics().p("Au6OgIAA8/Id1AAIAAc/g");
	var mask_3_graphics_192 = new cjs.Graphics().p("Au6OrIAA9VId1AAIAAdVg");
	var mask_3_graphics_193 = new cjs.Graphics().p("Au6O2IAA9rId1AAIAAdrg");
	var mask_3_graphics_194 = new cjs.Graphics().p("Au6PBIAA+BId1AAIAAeBg");
	var mask_3_graphics_195 = new cjs.Graphics().p("Au6PNIAA+YId1AAIAAeYg");
	var mask_3_graphics_196 = new cjs.Graphics().p("Au6PYIAA+vId1AAIAAevg");
	var mask_3_graphics_197 = new cjs.Graphics().p("Au6PjIAA/FId1AAIAAfFg");
	var mask_3_graphics_198 = new cjs.Graphics().p("Au6PuIAA/bId1AAIAAfbg");
	var mask_3_graphics_199 = new cjs.Graphics().p("Au6P5IAA/xId1AAIAAfxg");
	var mask_3_graphics_200 = new cjs.Graphics().p("Au6QEMAAAggHId1AAMAAAAgHg");
	var mask_3_graphics_201 = new cjs.Graphics().p("Au6QPMAAAggeId1AAMAAAAgeg");
	var mask_3_graphics_202 = new cjs.Graphics().p("Au6QbMAAAgg1Id1AAMAAAAg1g");
	var mask_3_graphics_203 = new cjs.Graphics().p("Au6QmMAAAghLId1AAMAAAAhLg");
	var mask_3_graphics_204 = new cjs.Graphics().p("Au6QxMAAAghhId1AAMAAAAhhg");
	var mask_3_graphics_205 = new cjs.Graphics().p("Au6Q8MAAAgh3Id1AAMAAAAh3g");
	var mask_3_graphics_206 = new cjs.Graphics().p("Au6RIMAAAgiPId1AAMAAAAiPg");
	var mask_3_graphics_207 = new cjs.Graphics().p("Au6RTMAAAgilId1AAMAAAAilg");
	var mask_3_graphics_208 = new cjs.Graphics().p("Au6ReMAAAgi7Id1AAMAAAAi7g");
	var mask_3_graphics_209 = new cjs.Graphics().p("Au6RpMAAAgjRId1AAMAAAAjRg");
	var mask_3_graphics_210 = new cjs.Graphics().p("Au6R0MAAAgjnId1AAMAAAAjng");
	var mask_3_graphics_211 = new cjs.Graphics().p("Au6R/MAAAgj+Id1AAMAAAAj+g");
	var mask_3_graphics_212 = new cjs.Graphics().p("Au6SLMAAAgkVId1AAMAAAAkVg");
	var mask_3_graphics_213 = new cjs.Graphics().p("Au6SWMAAAgkrId1AAMAAAAkrg");
	var mask_3_graphics_214 = new cjs.Graphics().p("Au6ShMAAAglBId1AAMAAAAlBg");
	var mask_3_graphics_215 = new cjs.Graphics().p("Au6SsMAAAglXId1AAMAAAAlXg");
	var mask_3_graphics_216 = new cjs.Graphics().p("Au6S4MAAAglvId1AAMAAAAlvg");
	var mask_3_graphics_217 = new cjs.Graphics().p("Au6TDMAAAgmFId1AAMAAAAmFg");
	var mask_3_graphics_218 = new cjs.Graphics().p("Au6TOMAAAgmbId1AAMAAAAmbg");
	var mask_3_graphics_219 = new cjs.Graphics().p("Au6TZMAAAgmxId1AAMAAAAmxg");
	var mask_3_graphics_220 = new cjs.Graphics().p("Au6TkMAAAgnHId1AAMAAAAnHg");
	var mask_3_graphics_221 = new cjs.Graphics().p("Au6TvMAAAgndId1AAMAAAAndg");
	var mask_3_graphics_222 = new cjs.Graphics().p("Au6T6MAAAgnzId1AAMAAAAnzg");
	var mask_3_graphics_223 = new cjs.Graphics().p("Au6UGMAAAgoKId1AAMAAAAoKg");
	var mask_3_graphics_224 = new cjs.Graphics().p("Au6URMAAAgohId1AAMAAAAohg");
	var mask_3_graphics_225 = new cjs.Graphics().p("Au6UcMAAAgo3Id1AAMAAAAo3g");
	var mask_3_graphics_226 = new cjs.Graphics().p("Au6UnMAAAgpNId1AAMAAAApNg");
	var mask_3_graphics_227 = new cjs.Graphics().p("Au6UzMAAAgpkId1AAMAAAApkg");
	var mask_3_graphics_228 = new cjs.Graphics().p("Au6U+MAAAgp7Id1AAMAAAAp7g");
	var mask_3_graphics_229 = new cjs.Graphics().p("Au6VJMAAAgqRId1AAMAAAAqRg");
	var mask_3_graphics_230 = new cjs.Graphics().p("Au6VUMAAAgqnId1AAMAAAAqng");
	var mask_3_graphics_231 = new cjs.Graphics().p("Au6VfMAAAgq9Id1AAMAAAAq9g");
	var mask_3_graphics_232 = new cjs.Graphics().p("Au6VrMAAAgrUId1AAMAAAArUg");
	var mask_3_graphics_233 = new cjs.Graphics().p("Au6V2MAAAgrrId1AAMAAAArrg");
	var mask_3_graphics_234 = new cjs.Graphics().p("Au6WBMAAAgsBId1AAMAAAAsBg");
	var mask_3_graphics_235 = new cjs.Graphics().p("Au6WMMAAAgsXId1AAMAAAAsXg");
	var mask_3_graphics_236 = new cjs.Graphics().p("Au6WXMAAAgstId1AAMAAAAstg");
	var mask_3_graphics_237 = new cjs.Graphics().p("Au6WiMAAAgtDId1AAMAAAAtDg");
	var mask_3_graphics_238 = new cjs.Graphics().p("Au6WtMAAAgtZId1AAMAAAAtZg");
	var mask_3_graphics_239 = new cjs.Graphics().p("Au6W5MAAAgtxId1AAMAAAAtxg");
	var mask_3_graphics_240 = new cjs.Graphics().p("Au6XEMAAAguHId1AAMAAAAuHg");
	var mask_3_graphics_241 = new cjs.Graphics().p("Au6XPMAAAgudId1AAMAAAAudg");
	var mask_3_graphics_242 = new cjs.Graphics().p("Au6XaMAAAguzId1AAMAAAAuzg");
	var mask_3_graphics_243 = new cjs.Graphics().p("Au6XmMAAAgvLId1AAMAAAAvLg");
	var mask_3_graphics_244 = new cjs.Graphics().p("Au6XwMAAAgvgId1AAMAAAAvgg");
	var mask_3_graphics_245 = new cjs.Graphics().p("Au6X8MAAAgv3Id1AAMAAAAv3g");
	var mask_3_graphics_246 = new cjs.Graphics().p("Au6YHMAAAgwNId1AAMAAAAwNg");
	var mask_3_graphics_247 = new cjs.Graphics().p("Au6YSMAAAgwjId1AAMAAAAwjg");
	var mask_3_graphics_248 = new cjs.Graphics().p("Au6YdMAAAgw6Id1AAMAAAAw6g");
	var mask_3_graphics_249 = new cjs.Graphics().p("Au6YpMAAAgxRId1AAMAAAAxRg");
	var mask_3_graphics_250 = new cjs.Graphics().p("Au6Y0MAAAgxnId1AAMAAAAxng");
	var mask_3_graphics_251 = new cjs.Graphics().p("Au6Y/MAAAgx9Id1AAMAAAAx9g");
	var mask_3_graphics_252 = new cjs.Graphics().p("Au6ZKMAAAgyTId1AAMAAAAyTg");
	var mask_3_graphics_253 = new cjs.Graphics().p("Au6ZWMAAAgyrId1AAMAAAAyrg");
	var mask_3_graphics_254 = new cjs.Graphics().p("Au6ZgMAAAgzAId1AAMAAAAzAg");
	var mask_3_graphics_255 = new cjs.Graphics().p("Au6ZsMAAAgzXId1AAMAAAAzXg");
	var mask_3_graphics_256 = new cjs.Graphics().p("Au6Z3MAAAgztId1AAMAAAAztg");
	var mask_3_graphics_257 = new cjs.Graphics().p("Au6aCMAAAg0DId1AAMAAAA0Dg");
	var mask_3_graphics_258 = new cjs.Graphics().p("Au6aNMAAAg0ZId1AAMAAAA0Zg");
	var mask_3_graphics_259 = new cjs.Graphics().p("Au6aYMAAAg0vId1AAMAAAA0vg");
	var mask_3_graphics_260 = new cjs.Graphics().p("Au6akMAAAg1HId1AAMAAAA1Hg");
	var mask_3_graphics_261 = new cjs.Graphics().p("Au6avMAAAg1dId1AAMAAAA1dg");
	var mask_3_graphics_262 = new cjs.Graphics().p("Au6a6MAAAg1zId1AAMAAAA1zg");
	var mask_3_graphics_263 = new cjs.Graphics().p("Au6bFMAAAg2JId1AAMAAAA2Jg");
	var mask_3_graphics_264 = new cjs.Graphics().p("Au6bQMAAAg2fId1AAMAAAA2fg");
	var mask_3_graphics_265 = new cjs.Graphics().p("Au6bbMAAAg22Id1AAMAAAA22g");
	var mask_3_graphics_266 = new cjs.Graphics().p("EgFsAhBMAAAg3MId1AAMAAAA3Mg");
	var mask_3_graphics_267 = new cjs.Graphics().p("Au6cCMAAAg4DId1AAMAAAA4Dg");
	var mask_3_graphics_268 = new cjs.Graphics().p("Au6cdMAAAg45Id1AAMAAAA45g");
	var mask_3_graphics_269 = new cjs.Graphics().p("EgFsAiRMAAAg5tId1AAMAAAA5tg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(134).to({graphics:mask_3_graphics_134,x:154.5,y:63.5}).wait(1).to({graphics:mask_3_graphics_135,x:213.6,y:99.1}).wait(1).to({graphics:mask_3_graphics_136,x:213.6,y:100.2}).wait(1).to({graphics:mask_3_graphics_137,x:213.6,y:101.3}).wait(1).to({graphics:mask_3_graphics_138,x:213.6,y:102.4}).wait(1).to({graphics:mask_3_graphics_139,x:213.6,y:103.6}).wait(1).to({graphics:mask_3_graphics_140,x:213.6,y:104.7}).wait(1).to({graphics:mask_3_graphics_141,x:213.6,y:105.8}).wait(1).to({graphics:mask_3_graphics_142,x:213.6,y:106.9}).wait(1).to({graphics:mask_3_graphics_143,x:213.6,y:108}).wait(1).to({graphics:mask_3_graphics_144,x:213.6,y:109.2}).wait(1).to({graphics:mask_3_graphics_145,x:213.6,y:110.3}).wait(1).to({graphics:mask_3_graphics_146,x:213.6,y:111.4}).wait(1).to({graphics:mask_3_graphics_147,x:213.6,y:112.5}).wait(1).to({graphics:mask_3_graphics_148,x:213.6,y:113.7}).wait(1).to({graphics:mask_3_graphics_149,x:213.6,y:114.8}).wait(1).to({graphics:mask_3_graphics_150,x:213.6,y:115.9}).wait(1).to({graphics:mask_3_graphics_151,x:213.6,y:117}).wait(1).to({graphics:mask_3_graphics_152,x:213.6,y:118.1}).wait(1).to({graphics:mask_3_graphics_153,x:213.6,y:119.3}).wait(1).to({graphics:mask_3_graphics_154,x:213.6,y:120.4}).wait(1).to({graphics:mask_3_graphics_155,x:213.6,y:121.5}).wait(1).to({graphics:mask_3_graphics_156,x:213.6,y:122.6}).wait(1).to({graphics:mask_3_graphics_157,x:213.6,y:123.7}).wait(1).to({graphics:mask_3_graphics_158,x:213.6,y:124.9}).wait(1).to({graphics:mask_3_graphics_159,x:213.6,y:126}).wait(1).to({graphics:mask_3_graphics_160,x:213.6,y:127.1}).wait(1).to({graphics:mask_3_graphics_161,x:213.6,y:128.2}).wait(1).to({graphics:mask_3_graphics_162,x:213.6,y:129.4}).wait(1).to({graphics:mask_3_graphics_163,x:213.6,y:130.5}).wait(1).to({graphics:mask_3_graphics_164,x:213.6,y:131.6}).wait(1).to({graphics:mask_3_graphics_165,x:213.6,y:132.7}).wait(1).to({graphics:mask_3_graphics_166,x:213.6,y:133.9}).wait(1).to({graphics:mask_3_graphics_167,x:213.6,y:135}).wait(1).to({graphics:mask_3_graphics_168,x:213.6,y:136.1}).wait(1).to({graphics:mask_3_graphics_169,x:213.6,y:137.2}).wait(1).to({graphics:mask_3_graphics_170,x:213.6,y:138.3}).wait(1).to({graphics:mask_3_graphics_171,x:213.6,y:139.5}).wait(1).to({graphics:mask_3_graphics_172,x:213.6,y:140.6}).wait(1).to({graphics:mask_3_graphics_173,x:213.6,y:141.7}).wait(1).to({graphics:mask_3_graphics_174,x:213.6,y:142.8}).wait(1).to({graphics:mask_3_graphics_175,x:213.6,y:143.9}).wait(1).to({graphics:mask_3_graphics_176,x:213.6,y:145.1}).wait(1).to({graphics:mask_3_graphics_177,x:213.6,y:146.2}).wait(1).to({graphics:mask_3_graphics_178,x:213.6,y:147.3}).wait(1).to({graphics:mask_3_graphics_179,x:213.6,y:148.4}).wait(1).to({graphics:mask_3_graphics_180,x:213.6,y:149.5}).wait(1).to({graphics:mask_3_graphics_181,x:213.6,y:150.7}).wait(1).to({graphics:mask_3_graphics_182,x:213.6,y:151.8}).wait(1).to({graphics:mask_3_graphics_183,x:213.6,y:152.9}).wait(1).to({graphics:mask_3_graphics_184,x:213.6,y:154}).wait(1).to({graphics:mask_3_graphics_185,x:213.6,y:155.2}).wait(1).to({graphics:mask_3_graphics_186,x:213.6,y:156.3}).wait(1).to({graphics:mask_3_graphics_187,x:213.6,y:157.4}).wait(1).to({graphics:mask_3_graphics_188,x:213.6,y:158.5}).wait(1).to({graphics:mask_3_graphics_189,x:213.6,y:159.6}).wait(1).to({graphics:mask_3_graphics_190,x:213.6,y:160.8}).wait(1).to({graphics:mask_3_graphics_191,x:213.6,y:161.9}).wait(1).to({graphics:mask_3_graphics_192,x:213.6,y:163}).wait(1).to({graphics:mask_3_graphics_193,x:213.6,y:164.1}).wait(1).to({graphics:mask_3_graphics_194,x:213.6,y:165.2}).wait(1).to({graphics:mask_3_graphics_195,x:213.6,y:166.4}).wait(1).to({graphics:mask_3_graphics_196,x:213.6,y:167.5}).wait(1).to({graphics:mask_3_graphics_197,x:213.6,y:168.6}).wait(1).to({graphics:mask_3_graphics_198,x:213.6,y:169.7}).wait(1).to({graphics:mask_3_graphics_199,x:213.6,y:170.8}).wait(1).to({graphics:mask_3_graphics_200,x:213.6,y:172}).wait(1).to({graphics:mask_3_graphics_201,x:213.6,y:173.1}).wait(1).to({graphics:mask_3_graphics_202,x:213.6,y:174.2}).wait(1).to({graphics:mask_3_graphics_203,x:213.6,y:175.3}).wait(1).to({graphics:mask_3_graphics_204,x:213.6,y:176.5}).wait(1).to({graphics:mask_3_graphics_205,x:213.6,y:177.6}).wait(1).to({graphics:mask_3_graphics_206,x:213.6,y:178.7}).wait(1).to({graphics:mask_3_graphics_207,x:213.6,y:179.8}).wait(1).to({graphics:mask_3_graphics_208,x:213.6,y:180.9}).wait(1).to({graphics:mask_3_graphics_209,x:213.6,y:182.1}).wait(1).to({graphics:mask_3_graphics_210,x:213.6,y:183.2}).wait(1).to({graphics:mask_3_graphics_211,x:213.6,y:184.3}).wait(1).to({graphics:mask_3_graphics_212,x:213.6,y:185.4}).wait(1).to({graphics:mask_3_graphics_213,x:213.6,y:186.5}).wait(1).to({graphics:mask_3_graphics_214,x:213.6,y:187.7}).wait(1).to({graphics:mask_3_graphics_215,x:213.6,y:188.8}).wait(1).to({graphics:mask_3_graphics_216,x:213.6,y:189.9}).wait(1).to({graphics:mask_3_graphics_217,x:213.6,y:191}).wait(1).to({graphics:mask_3_graphics_218,x:213.6,y:192.1}).wait(1).to({graphics:mask_3_graphics_219,x:213.6,y:193.3}).wait(1).to({graphics:mask_3_graphics_220,x:213.6,y:194.4}).wait(1).to({graphics:mask_3_graphics_221,x:213.6,y:195.5}).wait(1).to({graphics:mask_3_graphics_222,x:213.6,y:196.7}).wait(1).to({graphics:mask_3_graphics_223,x:213.6,y:197.8}).wait(1).to({graphics:mask_3_graphics_224,x:213.6,y:198.9}).wait(1).to({graphics:mask_3_graphics_225,x:213.6,y:200}).wait(1).to({graphics:mask_3_graphics_226,x:213.6,y:201.1}).wait(1).to({graphics:mask_3_graphics_227,x:213.6,y:202.3}).wait(1).to({graphics:mask_3_graphics_228,x:213.6,y:203.4}).wait(1).to({graphics:mask_3_graphics_229,x:213.6,y:204.5}).wait(1).to({graphics:mask_3_graphics_230,x:213.6,y:205.6}).wait(1).to({graphics:mask_3_graphics_231,x:213.6,y:206.7}).wait(1).to({graphics:mask_3_graphics_232,x:213.6,y:207.9}).wait(1).to({graphics:mask_3_graphics_233,x:213.6,y:209}).wait(1).to({graphics:mask_3_graphics_234,x:213.6,y:210.1}).wait(1).to({graphics:mask_3_graphics_235,x:213.6,y:211.2}).wait(1).to({graphics:mask_3_graphics_236,x:213.6,y:212.3}).wait(1).to({graphics:mask_3_graphics_237,x:213.6,y:213.5}).wait(1).to({graphics:mask_3_graphics_238,x:213.6,y:214.6}).wait(1).to({graphics:mask_3_graphics_239,x:213.6,y:215.7}).wait(1).to({graphics:mask_3_graphics_240,x:213.6,y:216.8}).wait(1).to({graphics:mask_3_graphics_241,x:213.6,y:218}).wait(1).to({graphics:mask_3_graphics_242,x:213.6,y:219.1}).wait(1).to({graphics:mask_3_graphics_243,x:213.6,y:220.2}).wait(1).to({graphics:mask_3_graphics_244,x:213.6,y:221.3}).wait(1).to({graphics:mask_3_graphics_245,x:213.6,y:222.4}).wait(1).to({graphics:mask_3_graphics_246,x:213.6,y:223.6}).wait(1).to({graphics:mask_3_graphics_247,x:213.6,y:224.7}).wait(1).to({graphics:mask_3_graphics_248,x:213.6,y:225.8}).wait(1).to({graphics:mask_3_graphics_249,x:213.6,y:226.9}).wait(1).to({graphics:mask_3_graphics_250,x:213.6,y:228}).wait(1).to({graphics:mask_3_graphics_251,x:213.6,y:229.2}).wait(1).to({graphics:mask_3_graphics_252,x:213.6,y:230.3}).wait(1).to({graphics:mask_3_graphics_253,x:213.6,y:231.4}).wait(1).to({graphics:mask_3_graphics_254,x:213.6,y:232.5}).wait(1).to({graphics:mask_3_graphics_255,x:213.6,y:233.6}).wait(1).to({graphics:mask_3_graphics_256,x:213.6,y:234.8}).wait(1).to({graphics:mask_3_graphics_257,x:213.6,y:235.9}).wait(1).to({graphics:mask_3_graphics_258,x:213.6,y:237}).wait(1).to({graphics:mask_3_graphics_259,x:213.6,y:238.1}).wait(1).to({graphics:mask_3_graphics_260,x:213.6,y:239.3}).wait(1).to({graphics:mask_3_graphics_261,x:213.6,y:240.4}).wait(1).to({graphics:mask_3_graphics_262,x:213.6,y:241.5}).wait(1).to({graphics:mask_3_graphics_263,x:213.6,y:242.6}).wait(1).to({graphics:mask_3_graphics_264,x:213.6,y:243.7}).wait(1).to({graphics:mask_3_graphics_265,x:213.6,y:244.9}).wait(1).to({graphics:mask_3_graphics_266,x:154.5,y:211.3}).wait(1).to({graphics:mask_3_graphics_267,x:213.6,y:248.7}).wait(1).to({graphics:mask_3_graphics_268,x:213.6,y:251.3}).wait(1).to({graphics:mask_3_graphics_269,x:154.5,y:219.3}).wait(552));

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(20,1,1).p("AMA3wMgX/Avh");
	this.shape_5.setTransform(213.3,275.2);
	this.shape_5._off = true;

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(134).to({_off:false},0).wait(687));

	// Layer 9
	this.instance_4 = new lib.ar1("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(115.9,147.7,1,1,7.5,0,0,-0.7,0.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).wait(812));

	// Layer 3 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_9 = new cjs.Graphics().p("ACsRfICHhfIEdGVIiHBfg");
	var mask_4_graphics_10 = new cjs.Graphics().p("AjaiTICZhsIEcGTIiYBsg");
	var mask_4_graphics_11 = new cjs.Graphics().p("AjiiMICqh6IEbGUIipB5g");
	var mask_4_graphics_12 = new cjs.Graphics().p("AjriGIC7iGIEcGUIi7CFg");
	var mask_4_graphics_13 = new cjs.Graphics().p("Aj0iAIDNiSIEcGUIjNCRg");
	var mask_4_graphics_14 = new cjs.Graphics().p("Aj8h6IDeieIEbGUIjeCdg");
	var mask_4_graphics_15 = new cjs.Graphics().p("AkFhzIDwirIEbGUIjwCpg");
	var mask_4_graphics_16 = new cjs.Graphics().p("AkNhsIEAi5IEcGUIkCC3g");
	var mask_4_graphics_17 = new cjs.Graphics().p("AkWhmIESjFIEbGUIkSDDg");
	var mask_4_graphics_18 = new cjs.Graphics().p("AkfhgIEjjRIEcGUIkjDPg");
	var mask_4_graphics_19 = new cjs.Graphics().p("AknhZIE0jeIEbGUIk0Dbg");
	var mask_4_graphics_20 = new cjs.Graphics().p("AkwhSIFGjrIEbGUIlGDog");
	var mask_4_graphics_21 = new cjs.Graphics().p("Ak4hMIFWj4IEcGVIlYD0g");
	var mask_4_graphics_22 = new cjs.Graphics().p("AlBhFIFokFIEbGVIloEAg");
	var mask_4_graphics_23 = new cjs.Graphics().p("AlKg/IF6kRIEbGUIl6ENg");
	var mask_4_graphics_24 = new cjs.Graphics().p("AlSg5IGLkdIEaGUImLEZg");
	var mask_4_graphics_25 = new cjs.Graphics().p("AlbgyIGckrIEbGVImdEmg");
	var mask_4_graphics_26 = new cjs.Graphics().p("AljgsIGtk3IEaGVImuEyg");
	var mask_4_graphics_27 = new cjs.Graphics().p("AlsglIG/lEIEaGVInAE+g");
	var mask_4_graphics_28 = new cjs.Graphics().p("Al1gfIHRlQIEaGVInRFKg");
	var mask_4_graphics_29 = new cjs.Graphics().p("Al9gYIHhleIEaGWIniFXg");
	var mask_4_graphics_30 = new cjs.Graphics().p("AmGgSIHzlqIEaGWIn0Fjg");
	var mask_4_graphics_31 = new cjs.Graphics().p("AmOgLIIEl3IEaGVIoGFwg");
	var mask_4_graphics_32 = new cjs.Graphics().p("AmXgFIIWmDIEZGVIoXF8g");
	var mask_4_graphics_33 = new cjs.Graphics().p("AmgAAIIomOIEZGVIopGIg");
	var mask_4_graphics_34 = new cjs.Graphics().p("AmoAHII4mbIEZGVIo5GVg");
	var mask_4_graphics_35 = new cjs.Graphics().p("AmxANIJKmoIEZGXIpMGgg");
	var mask_4_graphics_36 = new cjs.Graphics().p("Am5AUIJbm1IEYGWIpcGtg");
	var mask_4_graphics_37 = new cjs.Graphics().p("AnCAaIJtnBIEYGXIpuG4g");
	var mask_4_graphics_38 = new cjs.Graphics().p("AnLAhIJ+nPIEZGXIqAHGg");
	var mask_4_graphics_39 = new cjs.Graphics().p("AnTAnIKPnbIEYGXIqQHSg");
	var mask_4_graphics_40 = new cjs.Graphics().p("AncAuIKhnoIEYGXIqjHeg");
	var mask_4_graphics_41 = new cjs.Graphics().p("AnkA0IKyn0IEYGXIq0Hqg");
	var mask_4_graphics_42 = new cjs.Graphics().p("AntA7ILDoBIEYGXIrFH2g");
	var mask_4_graphics_43 = new cjs.Graphics().p("An2BBILVoOIEYGXIrXIEg");
	var mask_4_graphics_44 = new cjs.Graphics().p("An+BIILmobIEYGXIrpIQg");
	var mask_4_graphics_45 = new cjs.Graphics().p("AoHBOIL4onIEXGXIr6Icg");
	var mask_4_graphics_46 = new cjs.Graphics().p("AoPBVIMJo0IEWGXIsKIog");
	var mask_4_graphics_47 = new cjs.Graphics().p("AoYBbIMapAIEXGXIscI1g");
	var mask_4_graphics_48 = new cjs.Graphics().p("AohBiIMspOIEXGYIsuJBg");
	var mask_4_graphics_49 = new cjs.Graphics().p("AopBoIM9paIEWGYIs/JNg");
	var mask_4_graphics_50 = new cjs.Graphics().p("AoyBuINPpmIEWGYItRJZg");
	var mask_4_graphics_51 = new cjs.Graphics().p("Ao6B1INfpzIEXGXItiJmg");
	var mask_4_graphics_52 = new cjs.Graphics().p("ApDB7INxp/IEWGXItzJzg");
	var mask_4_graphics_53 = new cjs.Graphics().p("ApMCCIODqNIEWGYIuFJ/g");
	var mask_4_graphics_54 = new cjs.Graphics().p("ApUCIIOUqZIEWGYIuXKLg");
	var mask_4_graphics_55 = new cjs.Graphics().p("ApdCPIOmqmIEVGYIuoKXg");
	var mask_4_graphics_56 = new cjs.Graphics().p("ApmCVIO3qzIEWGZIu6Kkg");
	var mask_4_graphics_57 = new cjs.Graphics().p("ApuCcIPIrAIEVGZIvKKwg");
	var mask_4_graphics_58 = new cjs.Graphics().p("Ap3CiIParMIEVGYIvcK9g");
	var mask_4_graphics_59 = new cjs.Graphics().p("Ap/CpIPrrZIEUGYIvtLJg");
	var mask_4_graphics_60 = new cjs.Graphics().p("AqICvIP9rlIEUGYIv/LVg");
	var mask_4_graphics_61 = new cjs.Graphics().p("AqRC2IQOryIEVGYIwRLhg");
	var mask_4_graphics_62 = new cjs.Graphics().p("AqZC8IQfr/IEUGZIwiLtg");
	var mask_4_graphics_63 = new cjs.Graphics().p("AqiDDIQxsMIEUGZIwzL6g");
	var mask_4_graphics_64 = new cjs.Graphics().p("AqqDJIRBsYIEVGZIxGMGg");
	var mask_4_graphics_65 = new cjs.Graphics().p("AqzDQIRUslIETGZIxWMSg");
	var mask_4_graphics_66 = new cjs.Graphics().p("Aq8DWIRlsxIEUGYIxoMfg");
	var mask_4_graphics_67 = new cjs.Graphics().p("ArEDdIR2s/IETGZIx5Msg");
	var mask_4_graphics_68 = new cjs.Graphics().p("ArNDjISItLIETGaIyKM3g");
	var mask_4_graphics_69 = new cjs.Graphics().p("ArVDpISZtXIESGZIycNEg");
	var mask_4_graphics_70 = new cjs.Graphics().p("AreDwISqtkIETGZIytNQg");
	var mask_4_graphics_71 = new cjs.Graphics().p("ArnD2IS8twIETGZIy/Ncg");
	var mask_4_graphics_72 = new cjs.Graphics().p("ArvD9ITNt+IESGaIzQNpg");
	var mask_4_graphics_73 = new cjs.Graphics().p("Ar4EDITeuKIETGZIziN2g");
	var mask_4_graphics_74 = new cjs.Graphics().p("AsAEKITvuXIETGZIz0OCg");
	var mask_4_graphics_75 = new cjs.Graphics().p("AsJEQIUCukIERGbI0EONg");
	var mask_4_graphics_76 = new cjs.Graphics().p("AsSEXIUTuxIESGaI0WObg");
	var mask_4_graphics_77 = new cjs.Graphics().p("AsaEdIUku9IERGaI0nOng");
	var mask_4_graphics_78 = new cjs.Graphics().p("AsjEkIU2vKIERGZI05O0g");
	var mask_4_graphics_79 = new cjs.Graphics().p("AsrEqIVGvWIERGaI1JO/g");
	var mask_4_graphics_80 = new cjs.Graphics().p("As0EwIVYvjIERGaI1cPMg");
	var mask_4_graphics_81 = new cjs.Graphics().p("As9E3IVqvwIERGaI1tPZg");
	var mask_4_graphics_82 = new cjs.Graphics().p("AtFE+IV7v9IEQGaI1+Plg");
	var mask_4_graphics_83 = new cjs.Graphics().p("AtOFEIWMwJIERGaI2QPxg");
	var mask_4_graphics_84 = new cjs.Graphics().p("AtWFKIWewVIEQGaI2hP9g");
	var mask_4_graphics_85 = new cjs.Graphics().p("AtfFRIWvwjIEQGbI2zQKg");
	var mask_4_graphics_86 = new cjs.Graphics().p("AtoFYIXBwwIEQGbI3EQWg");
	var mask_4_graphics_87 = new cjs.Graphics().p("AtwFeIXSw8IEPGbI3VQig");
	var mask_4_graphics_88 = new cjs.Graphics().p("At5FkIXkxIIEPGaI3nQvg");
	var mask_4_graphics_89 = new cjs.Graphics().p("AuBFqIX0xVIEQGbI35Q7g");
	var mask_4_graphics_90 = new cjs.Graphics().p("AuKFxIYGxiIEPGbI4KRIg");
	var mask_4_graphics_91 = new cjs.Graphics().p("AuTF4IYYxvIEPGbI4cRUg");
	var mask_4_graphics_92 = new cjs.Graphics().p("AubF+IYpx7IEOGbI4sRgg");
	var mask_4_graphics_93 = new cjs.Graphics().p("AukGEIY7yIIEOGbI4+Rtg");
	var mask_4_graphics_94 = new cjs.Graphics().p("AusGLIZLyVIEOGcI5PR5g");
	var mask_4_graphics_95 = new cjs.Graphics().p("Au1GRIZdyhIEOGcI5hSFg");
	var mask_4_graphics_96 = new cjs.Graphics().p("Au+GYIZvyuIEOGbI5zSSg");
	var mask_4_graphics_97 = new cjs.Graphics().p("AvGGeIaAy6IEOGbI6FSeg");
	var mask_4_graphics_98 = new cjs.Graphics().p("AvPGlIaRzHIEOGbI6VSqg");
	var mask_4_graphics_99 = new cjs.Graphics().p("AvXGrIaizUIEOGcI6nS3g");
	var mask_4_graphics_100 = new cjs.Graphics().p("AvgGxIa0zgIENGbI64TEg");
	var mask_4_graphics_101 = new cjs.Graphics().p("AvpG4IbGztIENGcI7KTPg");
	var mask_4_graphics_102 = new cjs.Graphics().p("AvxG/IbXz6IEMGcI7bTbg");
	var mask_4_graphics_103 = new cjs.Graphics().p("Av6HFIbp0HIEMGcI7sTpg");
	var mask_4_graphics_104 = new cjs.Graphics().p("AwDHLIb60TIENGcI7+T1g");
	var mask_4_graphics_105 = new cjs.Graphics().p("AwLHSIcL0gIEMGcI8PUBg");
	var mask_4_graphics_106 = new cjs.Graphics().p("AwUHYIcd0sIEMGcI8hUNg");
	var mask_4_graphics_107 = new cjs.Graphics().p("AwcHfIct06IENGdI8zUZg");
	var mask_4_graphics_108 = new cjs.Graphics().p("AwlHlIc/1GIEMGcI9DUng");
	var mask_4_graphics_109 = new cjs.Graphics().p("AwuHsIdR1TIEMGdI9WUyg");
	var mask_4_graphics_110 = new cjs.Graphics().p("Aw2HyIdh1fIEMGcI9mU/g");
	var mask_4_graphics_111 = new cjs.Graphics().p("AxIH+IeD16IEOGcI+HVdg");
	var mask_4_graphics_112 = new cjs.Graphics().p("AxZIKIek2UIEPGbI+nV6g");
	var mask_4_graphics_113 = new cjs.Graphics().p("AxrIWIfF2vIESGaI/IWZg");
	var mask_4_graphics_114 = new cjs.Graphics().p("Ax8IhIfm3IIETGZI/oW2g");
	var mask_4_graphics_115 = new cjs.Graphics().p("AyOItMAgHgXjIEWGZMggKAXUg");
	var mask_4_graphics_116 = new cjs.Graphics().p("AygI5MAgpgX9IEYGXMggrAXyg");
	var mask_4_graphics_117 = new cjs.Graphics().p("AyxJFMAhKgYYIEZGXMghKAYQg");
	var mask_4_graphics_118 = new cjs.Graphics().p("AzDJQMAhrgYxIEbGWMghqAYtg");
	var mask_4_graphics_119 = new cjs.Graphics().p("AtWRfMAiLgZMIEeGVMgiMAZMg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_4_graphics_9,x:59.2,y:152.4}).wait(1).to({graphics:mask_4_graphics_10,x:98.3,y:279.2}).wait(1).to({graphics:mask_4_graphics_11,x:99.2,y:278.6}).wait(1).to({graphics:mask_4_graphics_12,x:100,y:277.9}).wait(1).to({graphics:mask_4_graphics_13,x:100.9,y:277.3}).wait(1).to({graphics:mask_4_graphics_14,x:101.7,y:276.7}).wait(1).to({graphics:mask_4_graphics_15,x:102.6,y:276.1}).wait(1).to({graphics:mask_4_graphics_16,x:103.5,y:275.5}).wait(1).to({graphics:mask_4_graphics_17,x:104.3,y:274.8}).wait(1).to({graphics:mask_4_graphics_18,x:105.2,y:274.2}).wait(1).to({graphics:mask_4_graphics_19,x:106,y:273.6}).wait(1).to({graphics:mask_4_graphics_20,x:106.9,y:273}).wait(1).to({graphics:mask_4_graphics_21,x:107.8,y:272.3}).wait(1).to({graphics:mask_4_graphics_22,x:108.6,y:271.7}).wait(1).to({graphics:mask_4_graphics_23,x:109.5,y:271.1}).wait(1).to({graphics:mask_4_graphics_24,x:110.3,y:270.5}).wait(1).to({graphics:mask_4_graphics_25,x:111.2,y:269.9}).wait(1).to({graphics:mask_4_graphics_26,x:112.1,y:269.2}).wait(1).to({graphics:mask_4_graphics_27,x:112.9,y:268.6}).wait(1).to({graphics:mask_4_graphics_28,x:113.8,y:268}).wait(1).to({graphics:mask_4_graphics_29,x:114.6,y:267.4}).wait(1).to({graphics:mask_4_graphics_30,x:115.5,y:266.7}).wait(1).to({graphics:mask_4_graphics_31,x:116.4,y:266.1}).wait(1).to({graphics:mask_4_graphics_32,x:117.2,y:265.5}).wait(1).to({graphics:mask_4_graphics_33,x:118.1,y:264.9}).wait(1).to({graphics:mask_4_graphics_34,x:118.9,y:264.3}).wait(1).to({graphics:mask_4_graphics_35,x:119.8,y:263.6}).wait(1).to({graphics:mask_4_graphics_36,x:120.7,y:263}).wait(1).to({graphics:mask_4_graphics_37,x:121.5,y:262.4}).wait(1).to({graphics:mask_4_graphics_38,x:122.4,y:261.8}).wait(1).to({graphics:mask_4_graphics_39,x:123.2,y:261.1}).wait(1).to({graphics:mask_4_graphics_40,x:124.1,y:260.5}).wait(1).to({graphics:mask_4_graphics_41,x:125,y:259.9}).wait(1).to({graphics:mask_4_graphics_42,x:125.8,y:259.3}).wait(1).to({graphics:mask_4_graphics_43,x:126.7,y:258.7}).wait(1).to({graphics:mask_4_graphics_44,x:127.6,y:258}).wait(1).to({graphics:mask_4_graphics_45,x:128.4,y:257.4}).wait(1).to({graphics:mask_4_graphics_46,x:129.3,y:256.8}).wait(1).to({graphics:mask_4_graphics_47,x:130.1,y:256.2}).wait(1).to({graphics:mask_4_graphics_48,x:131,y:255.5}).wait(1).to({graphics:mask_4_graphics_49,x:131.9,y:254.9}).wait(1).to({graphics:mask_4_graphics_50,x:132.7,y:254.3}).wait(1).to({graphics:mask_4_graphics_51,x:133.6,y:253.7}).wait(1).to({graphics:mask_4_graphics_52,x:134.4,y:253.1}).wait(1).to({graphics:mask_4_graphics_53,x:135.3,y:252.4}).wait(1).to({graphics:mask_4_graphics_54,x:136.2,y:251.8}).wait(1).to({graphics:mask_4_graphics_55,x:137,y:251.2}).wait(1).to({graphics:mask_4_graphics_56,x:137.9,y:250.6}).wait(1).to({graphics:mask_4_graphics_57,x:138.7,y:249.9}).wait(1).to({graphics:mask_4_graphics_58,x:139.6,y:249.3}).wait(1).to({graphics:mask_4_graphics_59,x:140.5,y:248.7}).wait(1).to({graphics:mask_4_graphics_60,x:141.3,y:248.1}).wait(1).to({graphics:mask_4_graphics_61,x:142.2,y:247.4}).wait(1).to({graphics:mask_4_graphics_62,x:143,y:246.8}).wait(1).to({graphics:mask_4_graphics_63,x:143.9,y:246.2}).wait(1).to({graphics:mask_4_graphics_64,x:144.8,y:245.6}).wait(1).to({graphics:mask_4_graphics_65,x:145.6,y:244.9}).wait(1).to({graphics:mask_4_graphics_66,x:146.5,y:244.3}).wait(1).to({graphics:mask_4_graphics_67,x:147.3,y:243.7}).wait(1).to({graphics:mask_4_graphics_68,x:148.2,y:243.1}).wait(1).to({graphics:mask_4_graphics_69,x:149.1,y:242.5}).wait(1).to({graphics:mask_4_graphics_70,x:149.9,y:241.8}).wait(1).to({graphics:mask_4_graphics_71,x:150.8,y:241.2}).wait(1).to({graphics:mask_4_graphics_72,x:151.6,y:240.6}).wait(1).to({graphics:mask_4_graphics_73,x:152.5,y:240}).wait(1).to({graphics:mask_4_graphics_74,x:153.4,y:239.3}).wait(1).to({graphics:mask_4_graphics_75,x:154.2,y:238.7}).wait(1).to({graphics:mask_4_graphics_76,x:155.1,y:238.1}).wait(1).to({graphics:mask_4_graphics_77,x:155.9,y:237.5}).wait(1).to({graphics:mask_4_graphics_78,x:156.8,y:236.9}).wait(1).to({graphics:mask_4_graphics_79,x:157.7,y:236.2}).wait(1).to({graphics:mask_4_graphics_80,x:158.5,y:235.6}).wait(1).to({graphics:mask_4_graphics_81,x:159.4,y:235}).wait(1).to({graphics:mask_4_graphics_82,x:160.2,y:234.4}).wait(1).to({graphics:mask_4_graphics_83,x:161.1,y:233.7}).wait(1).to({graphics:mask_4_graphics_84,x:162,y:233.1}).wait(1).to({graphics:mask_4_graphics_85,x:162.8,y:232.5}).wait(1).to({graphics:mask_4_graphics_86,x:163.7,y:231.9}).wait(1).to({graphics:mask_4_graphics_87,x:164.5,y:231.2}).wait(1).to({graphics:mask_4_graphics_88,x:165.4,y:230.6}).wait(1).to({graphics:mask_4_graphics_89,x:166.3,y:230}).wait(1).to({graphics:mask_4_graphics_90,x:167.1,y:229.4}).wait(1).to({graphics:mask_4_graphics_91,x:168,y:228.8}).wait(1).to({graphics:mask_4_graphics_92,x:168.8,y:228.1}).wait(1).to({graphics:mask_4_graphics_93,x:169.7,y:227.5}).wait(1).to({graphics:mask_4_graphics_94,x:170.6,y:226.9}).wait(1).to({graphics:mask_4_graphics_95,x:171.4,y:226.3}).wait(1).to({graphics:mask_4_graphics_96,x:172.3,y:225.6}).wait(1).to({graphics:mask_4_graphics_97,x:173.2,y:225}).wait(1).to({graphics:mask_4_graphics_98,x:174,y:224.4}).wait(1).to({graphics:mask_4_graphics_99,x:174.9,y:223.8}).wait(1).to({graphics:mask_4_graphics_100,x:175.7,y:223.2}).wait(1).to({graphics:mask_4_graphics_101,x:176.6,y:222.5}).wait(1).to({graphics:mask_4_graphics_102,x:177.5,y:221.9}).wait(1).to({graphics:mask_4_graphics_103,x:178.3,y:221.3}).wait(1).to({graphics:mask_4_graphics_104,x:179.2,y:220.7}).wait(1).to({graphics:mask_4_graphics_105,x:180,y:220}).wait(1).to({graphics:mask_4_graphics_106,x:180.9,y:219.4}).wait(1).to({graphics:mask_4_graphics_107,x:181.8,y:218.8}).wait(1).to({graphics:mask_4_graphics_108,x:182.6,y:218.2}).wait(1).to({graphics:mask_4_graphics_109,x:183.5,y:217.6}).wait(1).to({graphics:mask_4_graphics_110,x:184.3,y:216.9}).wait(1).to({graphics:mask_4_graphics_111,x:186.1,y:215.5}).wait(1).to({graphics:mask_4_graphics_112,x:187.8,y:214}).wait(1).to({graphics:mask_4_graphics_113,x:189.6,y:212.6}).wait(1).to({graphics:mask_4_graphics_114,x:191.3,y:211.1}).wait(1).to({graphics:mask_4_graphics_115,x:193.1,y:209.7}).wait(1).to({graphics:mask_4_graphics_116,x:194.8,y:208.2}).wait(1).to({graphics:mask_4_graphics_117,x:196.6,y:206.8}).wait(1).to({graphics:mask_4_graphics_118,x:198.3,y:205.3}).wait(1).to({graphics:mask_4_graphics_119,x:161.9,y:152.4}).wait(702));

	// Layer 2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(20,1,1).p("AupLxQM+lfOWuHIB/j7");
	this.shape_6.setTransform(196.3,198.3);
	this.shape_6._off = true;

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(9).to({_off:false},0).wait(812));

	// Letter
	this.instance_5 = new lib.R("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(293.4,276.5);
	this.instance_5.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(821));

	// Background
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_7.setTransform(275,275,3.373,2.543);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_8.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).wait(821));

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