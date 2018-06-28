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


(lib.ar_triangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhuhDIABAAQAtAYBAAAQA/AAAtgYIACgBIABAAIhuCJg");
	this.shape.setTransform(0,4.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.1,-2.6,22.3,13.8);


(lib._2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("AG/ZbInXgTIl4ALIl7AWIkRAKQg7AAgrgdQgogeAAg4QAAg2BGhWICuixIF9lPIEUkCIFEkkIFFk3IEhk0IDPkfQBOiJAAhuQAAiDhThxQhWhxiOAAIiBAWIiMA4IiABLIhvBJQAAAFgCAIIgDAIQAAAIgFAGQgDACgDALIgoBzQgbA5g6AAQg+AAgogmQgogjAAg9IAbjfIBIkEIBbjaQAyhbArAAQA5AAAlAjQAmAgAAA+IgQBuIghBrIDPhWQBrgoBvAAQB+AABoAzQBpAwBLBWQBOBWArBxQAtBxAAB4QAADRhDCBQhACBiRCJI5ZYuIHzgQIIVgFIEHAFIDvAbICxA4QBGAmAAA7IgjBVQggApgxAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.5,-165.6,239.1,331.4);


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
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AAAAgIAAg/");
	this.shape_1.setTransform(0,-100.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AAAAnIAAhO");
	this.shape_2.setTransform(0,-100.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("AAAAvIAAhc");
	this.shape_3.setTransform(0,-99.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("AAAA2IAAhr");
	this.shape_4.setTransform(0,-98.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(5,1,1).p("AAAA9IAAh5");
	this.shape_5.setTransform(0,-97.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(5,1,1).p("AAABEIAAiH");
	this.shape_6.setTransform(0,-97.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(5,1,1).p("AAABLIAAiV");
	this.shape_7.setTransform(0,-96.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(5,1,1).p("AAABTIAAil");
	this.shape_8.setTransform(0,-95.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(5,1,1).p("AAABaIAAiz");
	this.shape_9.setTransform(0,-95.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(5,1,1).p("AAABhIAAjB");
	this.shape_10.setTransform(0,-94.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5,1,1).p("AAABoIAAjP");
	this.shape_11.setTransform(0,-93.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(5,1,1).p("AAABwIAAje");
	this.shape_12.setTransform(0,-92.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(5,1,1).p("AAAB3IAAjt");
	this.shape_13.setTransform(0,-92.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(5,1,1).p("AAAB+IAAj7");
	this.shape_14.setTransform(0,-91.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(5,1,1).p("AAACFIAAkJ");
	this.shape_15.setTransform(0,-90.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(5,1,1).p("AAACMIAAkX");
	this.shape_16.setTransform(0,-90);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(5,1,1).p("AAACUIAAkn");
	this.shape_17.setTransform(0,-89.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(5,1,1).p("AAACbIAAk1");
	this.shape_18.setTransform(0,-88.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(5,1,1).p("AAACiIAAlD");
	this.shape_19.setTransform(0,-87.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(5,1,1).p("AAACpIAAlR");
	this.shape_20.setTransform(0,-87.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(5,1,1).p("AAACwIAAlf");
	this.shape_21.setTransform(0,-86.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(5,1,1).p("AAAC3IAAlu");
	this.shape_22.setTransform(0,-85.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(5,1,1).p("AAAC/IAAl9");
	this.shape_23.setTransform(0,-85);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(5,1,1).p("AAADGIAAmL");
	this.shape_24.setTransform(0,-84.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(5,1,1).p("AAADNIAAmZ");
	this.shape_25.setTransform(0,-83.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(5,1,1).p("AAADVIAAmp");
	this.shape_26.setTransform(0,-82.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(5,1,1).p("AAADbIAAm2");
	this.shape_27.setTransform(0,-82.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(5,1,1).p("AAADjIAAnF");
	this.shape_28.setTransform(0,-81.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(5,1,1).p("AAADqIAAnT");
	this.shape_29.setTransform(0,-80.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(5,1,1).p("AAADxIAAnh");
	this.shape_30.setTransform(0,-79.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(5,1,1).p("AAAD5IAAnw");
	this.shape_31.setTransform(0,-79.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(5,1,1).p("AAAEAIAAn/");
	this.shape_32.setTransform(0,-78.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(5,1,1).p("AAAEHIAAoN");
	this.shape_33.setTransform(0,-77.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(5,1,1).p("AAAEOIAAob");
	this.shape_34.setTransform(0,-77);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(5,1,1).p("AAAEVIAAop");
	this.shape_35.setTransform(0,-76.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(5,1,1).p("AAAEcIAAo4");
	this.shape_36.setTransform(0,-75.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(5,1,1).p("AAAEkIAApH");
	this.shape_37.setTransform(0,-74.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(5,1,1).p("AAAErIAApV");
	this.shape_38.setTransform(0,-74.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(5,1,1).p("AAAEyIAApj");
	this.shape_39.setTransform(0,-73.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(5,1,1).p("AAAE5IAApx");
	this.shape_40.setTransform(0,-72.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(5,1,1).p("AAAFBIAAqB");
	this.shape_41.setTransform(0,-72);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(5,1,1).p("AAAFIIAAqP");
	this.shape_42.setTransform(0,-71.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(5,1,1).p("AAAFPIAAqd");
	this.shape_43.setTransform(0,-70.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(5,1,1).p("AAAFWIAAqr");
	this.shape_44.setTransform(0,-69.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(5,1,1).p("AAAFdIAAq5");
	this.shape_45.setTransform(0,-69.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(5,1,1).p("AAAFlIAArI");
	this.shape_46.setTransform(0,-68.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(5,1,1).p("AAAFsIAArX");
	this.shape_47.setTransform(0,-67.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(5,1,1).p("AAAFzIAArl");
	this.shape_48.setTransform(0,-66.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(5,1,1).p("AAAF6IAArz");
	this.shape_49.setTransform(0,-66.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(5,1,1).p("AAAGCIAAsD");
	this.shape_50.setTransform(0,-65.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(5,1,1).p("AAAGJIAAsR");
	this.shape_51.setTransform(0,-64.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(5,1,1).p("AAAGQIAAsf");
	this.shape_52.setTransform(0,-64.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(5,1,1).p("AAAGXIAAst");
	this.shape_53.setTransform(0,-63.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(5,1,1).p("AAAGeIAAs7");
	this.shape_54.setTransform(0,-62.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(5,1,1).p("AAAGmIAAtL");
	this.shape_55.setTransform(0,-61.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(5,1,1).p("AAAGtIAAtZ");
	this.shape_56.setTransform(0,-61.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(5,1,1).p("AAAG0IAAtn");
	this.shape_57.setTransform(0,-60.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(5,1,1).p("AAAG7IAAt1");
	this.shape_58.setTransform(0,-59.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(5,1,1).p("AAAnBIAAOD");
	this.shape_59.setTransform(0,-59);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).wait(1));

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0.3,-103.8,1,1,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-16.8},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.1,-106.6,22.3,13.8);


(lib.ar4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(48.3,28.2,1,1,75.8,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:186.4,guide:{path:[48.4,28.3,-64.7,41.8,-47.3,-101.6], orient:'auto'}},149).wait(1));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AB5GZIA6s5IBxAIIg6M5g");
	var mask_graphics_1 = new cjs.Graphics().p("AhbGXIA7s2IB8AIIg7M3g");
	var mask_graphics_2 = new cjs.Graphics().p("AhhGVIA6szICJAJIg6M0g");
	var mask_graphics_3 = new cjs.Graphics().p("AhnGTIA6svICVAIIg6Myg");
	var mask_graphics_4 = new cjs.Graphics().p("AhtGRIA5ssICiAJIg6Mug");
	var mask_graphics_5 = new cjs.Graphics().p("AhzGPIA4spICwAJIg7Msg");
	var mask_graphics_6 = new cjs.Graphics().p("Ah6GMIA5skIC8AJIg6Mpg");
	var mask_graphics_7 = new cjs.Graphics().p("AiAGKIA5shIDIAJIg6Mmg");
	var mask_graphics_8 = new cjs.Graphics().p("AiGGJIA4sfIDWAKIg7Mjg");
	var mask_graphics_9 = new cjs.Graphics().p("AiNGGIA5sbIDiAKIg6Mhg");
	var mask_graphics_10 = new cjs.Graphics().p("AiTGEIA4sXIDvAJIg6Mfg");
	var mask_graphics_11 = new cjs.Graphics().p("AiZGCIA4sUID7AKIg6Mbg");
	var mask_graphics_12 = new cjs.Graphics().p("AigGAIA4sRIEJAKIg7MZg");
	var mask_graphics_13 = new cjs.Graphics().p("AimF+IA4sNIEVAKIg6MWg");
	var mask_graphics_14 = new cjs.Graphics().p("AisF8IA3sKIEiAKIg6MTg");
	var mask_graphics_15 = new cjs.Graphics().p("AiyF6IA3sHIEuAKIg6MRg");
	var mask_graphics_16 = new cjs.Graphics().p("Ai4F4IA2sEIE7ALIg5MOg");
	var mask_graphics_17 = new cjs.Graphics().p("Ai+F1IA2r/IFHAKIg5MMg");
	var mask_graphics_18 = new cjs.Graphics().p("AjFFzIA2r8IFVALIg6MIg");
	var mask_graphics_19 = new cjs.Graphics().p("AjLFxIA2r5IFhALIg6MGg");
	var mask_graphics_20 = new cjs.Graphics().p("AjRFvIA1r1IFuALIg5MDg");
	var mask_graphics_21 = new cjs.Graphics().p("AjYFtIA2ryIF6ALIg5MAg");
	var mask_graphics_22 = new cjs.Graphics().p("AjeFrIA1rvIGIAMIg6L9g");
	var mask_graphics_23 = new cjs.Graphics().p("AjkFpIA1rsIGUAMIg5L7g");
	var mask_graphics_24 = new cjs.Graphics().p("AjqFnIA1roIGgAMIg5L4g");
	var mask_graphics_25 = new cjs.Graphics().p("AjxFlIA1rlIGuAMIg6L1g");
	var mask_graphics_26 = new cjs.Graphics().p("Aj3FiIA0rhIG7ANIg6Lyg");
	var mask_graphics_27 = new cjs.Graphics().p("Aj9FgIA0rdIHHAMIg5Lwg");
	var mask_graphics_28 = new cjs.Graphics().p("AkEFeIA0raIHUANIg5Lsg");
	var mask_graphics_29 = new cjs.Graphics().p("AkKFcIA0rXIHhANIg6Lqg");
	var mask_graphics_30 = new cjs.Graphics().p("AkRFbIA1rVIHtAOIg5Lng");
	var mask_graphics_31 = new cjs.Graphics().p("AkXFaIA0rSIH7ANIg6Llg");
	var mask_graphics_32 = new cjs.Graphics().p("AkeFaIA1rRIIIANIg6Lig");
	var mask_graphics_33 = new cjs.Graphics().p("AkkFYIA0rOIIVAOIg5Lfg");
	var mask_graphics_34 = new cjs.Graphics().p("AkrFXIA1rLIIiANIg6Ldg");
	var mask_graphics_35 = new cjs.Graphics().p("AkyFXIA1rKIIwAOIg6LZg");
	var mask_graphics_36 = new cjs.Graphics().p("Ak4FWIA0rIII9AOIg5LXg");
	var mask_graphics_37 = new cjs.Graphics().p("Ak/FVIA1rFIJKANIg5LVg");
	var mask_graphics_38 = new cjs.Graphics().p("AlFFUIA0rDIJXAOIg5LRg");
	var mask_graphics_39 = new cjs.Graphics().p("AlMFTIA1rBIJkAOIg5LPg");
	var mask_graphics_40 = new cjs.Graphics().p("AlTFTIA2rAIJxAPIg5LMg");
	var mask_graphics_41 = new cjs.Graphics().p("AlZFSIA1q9IJ+AOIg5LKg");
	var mask_graphics_42 = new cjs.Graphics().p("AlgFQIA2q6IKLAPIg5LGg");
	var mask_graphics_43 = new cjs.Graphics().p("AlmFQIA1q5IKZAPIg6LEg");
	var mask_graphics_44 = new cjs.Graphics().p("AltFPIA1q2IKmAPIg5LBg");
	var mask_graphics_45 = new cjs.Graphics().p("AlzFNIA2q0IKxARIg5K+g");
	var mask_graphics_46 = new cjs.Graphics().p("Al4FMIA1qyIK8ASIg5K8g");
	var mask_graphics_47 = new cjs.Graphics().p("Al+FKIA2qwILHAVIg5K4g");
	var mask_graphics_48 = new cjs.Graphics().p("AmDFIIA2quILRAXIg5K2g");
	var mask_graphics_49 = new cjs.Graphics().p("AmJFGIA2qrILdAYIg5Kzg");
	var mask_graphics_50 = new cjs.Graphics().p("AmOFFIA2qqILnAaIg4Kxg");
	var mask_graphics_51 = new cjs.Graphics().p("AmUFDIA3qnILyAbIg4Kug");
	var mask_graphics_52 = new cjs.Graphics().p("AmZFBIA3qlIL8AeIg4Krg");
	var mask_graphics_53 = new cjs.Graphics().p("AmfE/IA3qiIMIAfIg4Kog");
	var mask_graphics_54 = new cjs.Graphics().p("AmkE+IA3qhIMSAhIg4Kmg");
	var mask_graphics_55 = new cjs.Graphics().p("AmxFCIBJqnIMaApIg3Kig");
	var mask_graphics_56 = new cjs.Graphics().p("Am/FGIBbquIMkAxIg4Kgg");
	var mask_graphics_57 = new cjs.Graphics().p("AnMFKIBtq1IMsA6Ig4Kdg");
	var mask_graphics_58 = new cjs.Graphics().p("AnZFOIB+q7IM1BBIg4Kag");
	var mask_graphics_59 = new cjs.Graphics().p("AnmFRICQrBIM9BJIg4KYg");
	var mask_graphics_60 = new cjs.Graphics().p("AnzFVICirIINFBSIg3KVg");
	var mask_graphics_61 = new cjs.Graphics().p("AomFPIA4qSIQVAvIg4KSg");
	var mask_graphics_62 = new cjs.Graphics().p("AooE4IA4qeIQZAuIg5Kfg");
	var mask_graphics_63 = new cjs.Graphics().p("AoqE9IA4qpIQdAuIg5Krg");
	var mask_graphics_64 = new cjs.Graphics().p("AotFCIA5q0IQiAtIg7K4g");
	var mask_graphics_65 = new cjs.Graphics().p("AovFIIA5rAIQlAtIg6LEg");
	var mask_graphics_66 = new cjs.Graphics().p("AoxFNIA5rLIQqAtIg8LQg");
	var mask_graphics_67 = new cjs.Graphics().p("AozFSIA5rWIQuAsIg9Ldg");
	var mask_graphics_68 = new cjs.Graphics().p("Ao1FYIA5riIQyAsIg9Lpg");
	var mask_graphics_69 = new cjs.Graphics().p("Ao3FdIA5rtIQ2AsIg+L1g");
	var mask_graphics_70 = new cjs.Graphics().p("Ao6FjIA7r5IQ6ArIg/MCg");
	var mask_graphics_71 = new cjs.Graphics().p("Ao8FoIA6sEIQ/ArIhAMOg");
	var mask_graphics_72 = new cjs.Graphics().p("Ao+FuIA6sQIRDArIhBMag");
	var mask_graphics_73 = new cjs.Graphics().p("ApAFzIA6sbIRHAqIhBMng");
	var mask_graphics_74 = new cjs.Graphics().p("ApCF5IA6snIRLAqIhCMzg");
	var mask_graphics_75 = new cjs.Graphics().p("ApFF+IA8syIROAqIhCM/g");
	var mask_graphics_76 = new cjs.Graphics().p("ApHGDIA8s9IRTApIhENMg");
	var mask_graphics_77 = new cjs.Graphics().p("ApJGJIA7tJIRYApIhFNYg");
	var mask_graphics_78 = new cjs.Graphics().p("ApLGOIA7tUIRcApIhFNkg");
	var mask_graphics_79 = new cjs.Graphics().p("ApNGUIA7tgIRgAoIhGNxg");
	var mask_graphics_80 = new cjs.Graphics().p("ApQGZIA9trIRkAoIhHN9g");
	var mask_graphics_81 = new cjs.Graphics().p("ApSGfIA9t3IRnAoIhHOJg");
	var mask_graphics_82 = new cjs.Graphics().p("ApUGkIA8uCIRtAnIhIOWg");
	var mask_graphics_83 = new cjs.Graphics().p("ApWGqIA8uOIRxAnIhJOig");
	var mask_graphics_84 = new cjs.Graphics().p("ApYGvIA8uZIR1AnIhJOug");
	var mask_graphics_85 = new cjs.Graphics().p("ApaG0IA8ukIR5AmIhKO7g");
	var mask_graphics_86 = new cjs.Graphics().p("ApdG6IA9uwIR+AmIhMPHg");
	var mask_graphics_87 = new cjs.Graphics().p("ApfG/IA9u7ISBAmIhLPTg");
	var mask_graphics_88 = new cjs.Graphics().p("AphHFIA9vHISGAlIhNPgg");
	var mask_graphics_89 = new cjs.Graphics().p("ApjHKIA9vSISKAlIhNPsg");
	var mask_graphics_90 = new cjs.Graphics().p("AplHPIA9vdISOAkIhOP4g");
	var mask_graphics_91 = new cjs.Graphics().p("ApoHVIA+vpISSAkIhPQEg");
	var mask_graphics_92 = new cjs.Graphics().p("ApqHaIA/vzISWAjIhQQQg");
	var mask_graphics_93 = new cjs.Graphics().p("ApsHgIA+wAISbAjIhRQdg");
	var mask_graphics_94 = new cjs.Graphics().p("ApuHlIA+wLISfAjIhRQpg");
	var mask_graphics_95 = new cjs.Graphics().p("ApwHrIA+wWISjAiIhSQ1g");
	var mask_graphics_96 = new cjs.Graphics().p("ApyHwIA+wiISnAiIhSRCg");
	var mask_graphics_97 = new cjs.Graphics().p("Ap1H2IBAwuISrAiIhUROg");
	var mask_graphics_98 = new cjs.Graphics().p("Ap3H7IBAw4ISvAhIhURag");
	var mask_graphics_99 = new cjs.Graphics().p("Ap5IBIBAxFISzAhIhVRng");
	var mask_graphics_100 = new cjs.Graphics().p("Ap7IHIBAxRIS3AiIhWRzg");
	var mask_graphics_101 = new cjs.Graphics().p("Ap9INIBBxeIS6AkIhWR/g");
	var mask_graphics_102 = new cjs.Graphics().p("AqAITIBDxrIS+AlIhYSMg");
	var mask_graphics_103 = new cjs.Graphics().p("AqCIaIBFx5ITAAmIhYSZg");
	var mask_graphics_104 = new cjs.Graphics().p("AqEIfIBFyEITEAnIhZSkg");
	var mask_graphics_105 = new cjs.Graphics().p("AqGImIBGySITHAoIhaSxg");
	var mask_graphics_106 = new cjs.Graphics().p("AqIIsIBHyfITKAqIhaS9g");
	var mask_graphics_107 = new cjs.Graphics().p("AqKIyIBJysITNArIhcTKg");
	var mask_graphics_108 = new cjs.Graphics().p("AqNI4IBKy4ITRAsIhcTVg");
	var mask_graphics_109 = new cjs.Graphics().p("AqPI/IBMzHITTAuIhdTig");
	var mask_graphics_110 = new cjs.Graphics().p("AqRJFIBMzTITXAvIheTug");
	var mask_graphics_111 = new cjs.Graphics().p("AqTJMIBNzhITaAwIheT7g");
	var mask_graphics_112 = new cjs.Graphics().p("AqVJRIBPztITcAyIheUHg");
	var mask_graphics_113 = new cjs.Graphics().p("AqYJYIBQz7IThAzIhgUTg");
	var mask_graphics_114 = new cjs.Graphics().p("AqaJeIBR0HITkAzIhgUgg");
	var mask_graphics_115 = new cjs.Graphics().p("AqcJkIBT0UITmA1IhhUsg");
	var mask_graphics_116 = new cjs.Graphics().p("AqeJqIBT0hITqA2IhiU5g");
	var mask_graphics_117 = new cjs.Graphics().p("AqgJxIBU0vITtA4IhiVFg");
	var mask_graphics_118 = new cjs.Graphics().p("AqiJ3IBV07ITwA4IhjVRg");
	var mask_graphics_119 = new cjs.Graphics().p("AqlJ9IBX1IIT0A6IhkVdg");
	var mask_graphics_120 = new cjs.Graphics().p("AqnKDIBY1VIT3A8IhlVpg");
	var mask_graphics_121 = new cjs.Graphics().p("AqpKKIBa1jIT5A9IhmV2g");
	var mask_graphics_122 = new cjs.Graphics().p("AqrKQIBb1wIT8A+IhmWDg");
	var mask_graphics_123 = new cjs.Graphics().p("AqtKWIBb19IUABAIhnWOg");
	var mask_graphics_124 = new cjs.Graphics().p("AqwKcIBd2JIUEBAIhoWbg");
	var mask_graphics_125 = new cjs.Graphics().p("AqyKjIBe2XIUHBCIhpWng");
	var mask_graphics_126 = new cjs.Graphics().p("Aq0KpIBf2kIUKBDIhqW0g");
	var mask_graphics_127 = new cjs.Graphics().p("Aq2KvIBg2xIUNBFIhqW/g");
	var mask_graphics_128 = new cjs.Graphics().p("Aq4K1IBi29IUQBFIhsXMg");
	var mask_graphics_129 = new cjs.Graphics().p("Aq7K7IBj3KIUTBHIhrXYg");
	var mask_graphics_130 = new cjs.Graphics().p("Aq9LBIBk3XIUXBIIhtXlg");
	var mask_graphics_131 = new cjs.Graphics().p("Aq/LIIBl3lIUaBKIhtXxg");
	var mask_graphics_132 = new cjs.Graphics().p("ArBLOIBm3xIUdBKIhuX9g");
	var mask_graphics_133 = new cjs.Graphics().p("ArDLUIBn3+IUgBLIhuYKg");
	var mask_graphics_134 = new cjs.Graphics().p("ArGLbIBq4MIUjBNIhwYWg");
	var mask_graphics_135 = new cjs.Graphics().p("ArILhIBr4ZIUlBOIhwYjg");
	var mask_graphics_136 = new cjs.Graphics().p("ArKLnIBr4mIUqBQIhxYvg");
	var mask_graphics_137 = new cjs.Graphics().p("ArMLtIBs4zIUtBRIhxY7g");
	var mask_graphics_138 = new cjs.Graphics().p("ArOLzIBt4/IUwBSIhyZHg");
	var mask_graphics_139 = new cjs.Graphics().p("ArRL6IBv5NIUzBTIhyZUg");
	var mask_graphics_140 = new cjs.Graphics().p("ArTMAIBx5aIU2BVIh0Zgg");
	var mask_graphics_141 = new cjs.Graphics().p("ArVMGIBx5nIU6BWIh1Ztg");
	var mask_graphics_142 = new cjs.Graphics().p("ArXMMIBy50IU9BXIh1Z5g");
	var mask_graphics_143 = new cjs.Graphics().p("ArZMTIBz6BIVABYIh2aFg");
	var mask_graphics_144 = new cjs.Graphics().p("ArbMZIB06OIVDBaIh2aRg");
	var mask_graphics_145 = new cjs.Graphics().p("AreMfIB26bIVGBbIh3aeg");
	var mask_graphics_146 = new cjs.Graphics().p("ArgMlIB36oIVKBdIh4aqg");
	var mask_graphics_147 = new cjs.Graphics().p("AriMsIB561IVMBdIh5a2g");
	var mask_graphics_148 = new cjs.Graphics().p("ArkMyIB67CIVPBfIh5bCg");
	var mask_graphics_149 = new cjs.Graphics().p("ArmM4IB67PIVTBgIh6bPg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:29.2,y:34.6}).wait(1).to({graphics:mask_graphics_1,x:49.2,y:34.7}).wait(1).to({graphics:mask_graphics_2,x:48.5,y:34.8}).wait(1).to({graphics:mask_graphics_3,x:47.9,y:35}).wait(1).to({graphics:mask_graphics_4,x:47.3,y:35.1}).wait(1).to({graphics:mask_graphics_5,x:46.7,y:35.2}).wait(1).to({graphics:mask_graphics_6,x:46,y:35.4}).wait(1).to({graphics:mask_graphics_7,x:45.4,y:35.5}).wait(1).to({graphics:mask_graphics_8,x:44.8,y:35.6}).wait(1).to({graphics:mask_graphics_9,x:44.1,y:35.7}).wait(1).to({graphics:mask_graphics_10,x:43.5,y:35.9}).wait(1).to({graphics:mask_graphics_11,x:42.9,y:36}).wait(1).to({graphics:mask_graphics_12,x:42.3,y:36.1}).wait(1).to({graphics:mask_graphics_13,x:41.6,y:36.3}).wait(1).to({graphics:mask_graphics_14,x:41,y:36.4}).wait(1).to({graphics:mask_graphics_15,x:40.4,y:36.5}).wait(1).to({graphics:mask_graphics_16,x:39.7,y:36.6}).wait(1).to({graphics:mask_graphics_17,x:39.1,y:36.8}).wait(1).to({graphics:mask_graphics_18,x:38.5,y:36.9}).wait(1).to({graphics:mask_graphics_19,x:37.9,y:37}).wait(1).to({graphics:mask_graphics_20,x:37.2,y:37.2}).wait(1).to({graphics:mask_graphics_21,x:36.6,y:37.3}).wait(1).to({graphics:mask_graphics_22,x:36,y:37.4}).wait(1).to({graphics:mask_graphics_23,x:35.3,y:37.5}).wait(1).to({graphics:mask_graphics_24,x:34.7,y:37.7}).wait(1).to({graphics:mask_graphics_25,x:34.1,y:37.8}).wait(1).to({graphics:mask_graphics_26,x:33.5,y:37.9}).wait(1).to({graphics:mask_graphics_27,x:32.8,y:38.1}).wait(1).to({graphics:mask_graphics_28,x:32.2,y:38.2}).wait(1).to({graphics:mask_graphics_29,x:31.6,y:38.3}).wait(1).to({graphics:mask_graphics_30,x:30.9,y:38.4}).wait(1).to({graphics:mask_graphics_31,x:30.3,y:38.6}).wait(1).to({graphics:mask_graphics_32,x:29.6,y:38.7}).wait(1).to({graphics:mask_graphics_33,x:28.9,y:38.8}).wait(1).to({graphics:mask_graphics_34,x:28.3,y:39}).wait(1).to({graphics:mask_graphics_35,x:27.6,y:39.1}).wait(1).to({graphics:mask_graphics_36,x:26.9,y:39.2}).wait(1).to({graphics:mask_graphics_37,x:26.2,y:39.4}).wait(1).to({graphics:mask_graphics_38,x:25.6,y:39.5}).wait(1).to({graphics:mask_graphics_39,x:24.9,y:39.6}).wait(1).to({graphics:mask_graphics_40,x:24.2,y:39.7}).wait(1).to({graphics:mask_graphics_41,x:23.6,y:39.9}).wait(1).to({graphics:mask_graphics_42,x:22.9,y:40}).wait(1).to({graphics:mask_graphics_43,x:22.3,y:40.1}).wait(1).to({graphics:mask_graphics_44,x:21.6,y:40.3}).wait(1).to({graphics:mask_graphics_45,x:21,y:40.3}).wait(1).to({graphics:mask_graphics_46,x:20.5,y:40.4}).wait(1).to({graphics:mask_graphics_47,x:19.9,y:40.4}).wait(1).to({graphics:mask_graphics_48,x:19.4,y:40.5}).wait(1).to({graphics:mask_graphics_49,x:18.8,y:40.5}).wait(1).to({graphics:mask_graphics_50,x:18.2,y:40.6}).wait(1).to({graphics:mask_graphics_51,x:17.7,y:40.6}).wait(1).to({graphics:mask_graphics_52,x:17.1,y:40.7}).wait(1).to({graphics:mask_graphics_53,x:16.6,y:40.7}).wait(1).to({graphics:mask_graphics_54,x:16,y:40.8}).wait(1).to({graphics:mask_graphics_55,x:14.7,y:40.5}).wait(1).to({graphics:mask_graphics_56,x:13.4,y:40.3}).wait(1).to({graphics:mask_graphics_57,x:12.1,y:40}).wait(1).to({graphics:mask_graphics_58,x:10.8,y:39.7}).wait(1).to({graphics:mask_graphics_59,x:9.4,y:39.5}).wait(1).to({graphics:mask_graphics_60,x:8.1,y:39.2}).wait(1).to({graphics:mask_graphics_61,x:3.1,y:38.2}).wait(1).to({graphics:mask_graphics_62,x:3,y:40.5}).wait(1).to({graphics:mask_graphics_63,x:2.8,y:39.9}).wait(1).to({graphics:mask_graphics_64,x:2.7,y:39.3}).wait(1).to({graphics:mask_graphics_65,x:2.5,y:38.7}).wait(1).to({graphics:mask_graphics_66,x:2.4,y:38.1}).wait(1).to({graphics:mask_graphics_67,x:2.2,y:37.5}).wait(1).to({graphics:mask_graphics_68,x:2.1,y:36.9}).wait(1).to({graphics:mask_graphics_69,x:1.9,y:36.3}).wait(1).to({graphics:mask_graphics_70,x:1.8,y:35.7}).wait(1).to({graphics:mask_graphics_71,x:1.7,y:35.1}).wait(1).to({graphics:mask_graphics_72,x:1.5,y:34.5}).wait(1).to({graphics:mask_graphics_73,x:1.4,y:33.9}).wait(1).to({graphics:mask_graphics_74,x:1.2,y:33.3}).wait(1).to({graphics:mask_graphics_75,x:1.1,y:32.7}).wait(1).to({graphics:mask_graphics_76,x:1,y:32.1}).wait(1).to({graphics:mask_graphics_77,x:0.8,y:31.5}).wait(1).to({graphics:mask_graphics_78,x:0.7,y:30.9}).wait(1).to({graphics:mask_graphics_79,x:0.5,y:30.3}).wait(1).to({graphics:mask_graphics_80,x:0.4,y:29.7}).wait(1).to({graphics:mask_graphics_81,x:0.3,y:29.1}).wait(1).to({graphics:mask_graphics_82,x:0.1,y:28.5}).wait(1).to({graphics:mask_graphics_83,x:0,y:27.9}).wait(1).to({graphics:mask_graphics_84,x:-0.2,y:27.3}).wait(1).to({graphics:mask_graphics_85,x:-0.3,y:26.7}).wait(1).to({graphics:mask_graphics_86,x:-0.4,y:26.1}).wait(1).to({graphics:mask_graphics_87,x:-0.6,y:25.5}).wait(1).to({graphics:mask_graphics_88,x:-0.7,y:24.9}).wait(1).to({graphics:mask_graphics_89,x:-0.9,y:24.3}).wait(1).to({graphics:mask_graphics_90,x:-1,y:23.7}).wait(1).to({graphics:mask_graphics_91,x:-1.1,y:23.1}).wait(1).to({graphics:mask_graphics_92,x:-1.3,y:22.5}).wait(1).to({graphics:mask_graphics_93,x:-1.4,y:21.9}).wait(1).to({graphics:mask_graphics_94,x:-1.6,y:21.3}).wait(1).to({graphics:mask_graphics_95,x:-1.7,y:20.7}).wait(1).to({graphics:mask_graphics_96,x:-1.9,y:20.1}).wait(1).to({graphics:mask_graphics_97,x:-2,y:19.5}).wait(1).to({graphics:mask_graphics_98,x:-2.2,y:18.9}).wait(1).to({graphics:mask_graphics_99,x:-2.3,y:18.3}).wait(1).to({graphics:mask_graphics_100,x:-2.4,y:17.6}).wait(1).to({graphics:mask_graphics_101,x:-2.6,y:17}).wait(1).to({graphics:mask_graphics_102,x:-2.7,y:16.3}).wait(1).to({graphics:mask_graphics_103,x:-2.9,y:15.6}).wait(1).to({graphics:mask_graphics_104,x:-3,y:14.9}).wait(1).to({graphics:mask_graphics_105,x:-3.1,y:14.2}).wait(1).to({graphics:mask_graphics_106,x:-3.3,y:13.6}).wait(1).to({graphics:mask_graphics_107,x:-3.4,y:12.9}).wait(1).to({graphics:mask_graphics_108,x:-3.6,y:12.2}).wait(1).to({graphics:mask_graphics_109,x:-3.7,y:11.5}).wait(1).to({graphics:mask_graphics_110,x:-3.8,y:10.8}).wait(1).to({graphics:mask_graphics_111,x:-4,y:10.2}).wait(1).to({graphics:mask_graphics_112,x:-4.1,y:9.5}).wait(1).to({graphics:mask_graphics_113,x:-4.3,y:8.8}).wait(1).to({graphics:mask_graphics_114,x:-4.4,y:8.1}).wait(1).to({graphics:mask_graphics_115,x:-4.5,y:7.4}).wait(1).to({graphics:mask_graphics_116,x:-4.7,y:6.8}).wait(1).to({graphics:mask_graphics_117,x:-4.8,y:6.1}).wait(1).to({graphics:mask_graphics_118,x:-5,y:5.4}).wait(1).to({graphics:mask_graphics_119,x:-5.1,y:4.7}).wait(1).to({graphics:mask_graphics_120,x:-5.3,y:4.1}).wait(1).to({graphics:mask_graphics_121,x:-5.4,y:3.4}).wait(1).to({graphics:mask_graphics_122,x:-5.6,y:2.7}).wait(1).to({graphics:mask_graphics_123,x:-5.7,y:2}).wait(1).to({graphics:mask_graphics_124,x:-5.8,y:1.3}).wait(1).to({graphics:mask_graphics_125,x:-6,y:0.7}).wait(1).to({graphics:mask_graphics_126,x:-6.1,y:0}).wait(1).to({graphics:mask_graphics_127,x:-6.3,y:-0.7}).wait(1).to({graphics:mask_graphics_128,x:-6.4,y:-1.4}).wait(1).to({graphics:mask_graphics_129,x:-6.5,y:-2.1}).wait(1).to({graphics:mask_graphics_130,x:-6.7,y:-2.7}).wait(1).to({graphics:mask_graphics_131,x:-6.8,y:-3.4}).wait(1).to({graphics:mask_graphics_132,x:-7,y:-4.1}).wait(1).to({graphics:mask_graphics_133,x:-7.1,y:-4.8}).wait(1).to({graphics:mask_graphics_134,x:-7.2,y:-5.5}).wait(1).to({graphics:mask_graphics_135,x:-7.4,y:-6.1}).wait(1).to({graphics:mask_graphics_136,x:-7.5,y:-6.8}).wait(1).to({graphics:mask_graphics_137,x:-7.7,y:-7.5}).wait(1).to({graphics:mask_graphics_138,x:-7.8,y:-8.2}).wait(1).to({graphics:mask_graphics_139,x:-7.9,y:-8.8}).wait(1).to({graphics:mask_graphics_140,x:-8.1,y:-9.5}).wait(1).to({graphics:mask_graphics_141,x:-8.2,y:-10.2}).wait(1).to({graphics:mask_graphics_142,x:-8.4,y:-10.9}).wait(1).to({graphics:mask_graphics_143,x:-8.5,y:-11.6}).wait(1).to({graphics:mask_graphics_144,x:-8.7,y:-12.2}).wait(1).to({graphics:mask_graphics_145,x:-8.8,y:-12.9}).wait(1).to({graphics:mask_graphics_146,x:-8.9,y:-13.6}).wait(1).to({graphics:mask_graphics_147,x:-9.1,y:-14.3}).wait(1).to({graphics:mask_graphics_148,x:-9.2,y:-15}).wait(1).to({graphics:mask_graphics_149,x:-9.4,y:-15.6}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("Am7rhQkGZHSsiP");
	this.shape.setTransform(-0.6,-44.4);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(150));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(37.6,-7.1,16.1,45.2);


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
(lib.WS_Cursive_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_594 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(594).call(this.frame_594).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(291.1,114.8,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({guide:{path:[291.1,114.7,280.3,155,269.8,193.5]}},54).wait(14).to({x:269.8,y:193.6},0).to({guide:{path:[269.8,193.5,273,181.7,276.3,169.8]}},10).to({x:287.3,y:163.4},3).to({guide:{path:[287.2,163.4,306.2,148.9,326.7,144.2,347.2,139.6,363.4,152.1,379.5,164.6,380.6,178.4,381.7,192.2,381,203.5,380.3,214.7,371,227.7,361.6,240.8,352.7,251.1,347.4,257.3,341.5,263.4,325.7,279.6,310.1,295.6,294.5,311.5,285,320.1,275.5,328.7,266.2,337.2,215.2,383.4,164.1,429.5]}},291).wait(18).to({x:165.2,y:430.3},0).to({guide:{path:[165.2,430.1,207.9,424.4,254.8,422.3,349.9,417.8,372.6,429.6]}},106).wait(20).to({x:371.3,y:428.6},0).to({guide:{path:[371.3,428.7,411,386.4,447.2,341,484.3,294.5,503.5,342.8,506.5,350.4,506.5,359.6,506.7,425.9,569.5,445.5,595.2,453.5,628.9,443.4]}},72).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(173,426,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(6).to({_off:false},0).to({_off:true},372).wait(18).to({_off:false,x:369,y:429},0).to({_off:true},106).wait(93));

	// arrow
	this.instance_1 = new lib.ar5("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(265.4,465.1,1,1,-90,0,0,0,-1.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(396).to({_off:false},0).wait(199));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_396 = new cjs.Graphics().p("EALJAi3IAAlqIBXAAIAAFqg");
	var mask_graphics_397 = new cjs.Graphics().p("Ag1C2IAAlqIBrAAIAAFqg");
	var mask_graphics_398 = new cjs.Graphics().p("Ag/C2IAAlqIB/AAIAAFqg");
	var mask_graphics_399 = new cjs.Graphics().p("AhJC2IAAlqICTAAIAAFqg");
	var mask_graphics_400 = new cjs.Graphics().p("AhTC2IAAlqICnAAIAAFqg");
	var mask_graphics_401 = new cjs.Graphics().p("AheC2IAAlqIC9AAIAAFqg");
	var mask_graphics_402 = new cjs.Graphics().p("AhoC2IAAlqIDRAAIAAFqg");
	var mask_graphics_403 = new cjs.Graphics().p("AhyC2IAAlqIDlAAIAAFqg");
	var mask_graphics_404 = new cjs.Graphics().p("Ah8C2IAAlqID5AAIAAFqg");
	var mask_graphics_405 = new cjs.Graphics().p("AiGC2IAAlqIEOAAIAAFqg");
	var mask_graphics_406 = new cjs.Graphics().p("AiRC2IAAlqIEjAAIAAFqg");
	var mask_graphics_407 = new cjs.Graphics().p("AibC2IAAlqIE3AAIAAFqg");
	var mask_graphics_408 = new cjs.Graphics().p("AilC2IAAlqIFLAAIAAFqg");
	var mask_graphics_409 = new cjs.Graphics().p("AivC2IAAlqIFgAAIAAFqg");
	var mask_graphics_410 = new cjs.Graphics().p("Ai5C2IAAlqIF0AAIAAFqg");
	var mask_graphics_411 = new cjs.Graphics().p("AjEC2IAAlqIGJAAIAAFqg");
	var mask_graphics_412 = new cjs.Graphics().p("AjOC2IAAlqIGdAAIAAFqg");
	var mask_graphics_413 = new cjs.Graphics().p("AjYC2IAAlqIGxAAIAAFqg");
	var mask_graphics_414 = new cjs.Graphics().p("AjiC2IAAlqIHFAAIAAFqg");
	var mask_graphics_415 = new cjs.Graphics().p("AjtC2IAAlqIHbAAIAAFqg");
	var mask_graphics_416 = new cjs.Graphics().p("Aj3C2IAAlqIHvAAIAAFqg");
	var mask_graphics_417 = new cjs.Graphics().p("AkBC2IAAlqIIDAAIAAFqg");
	var mask_graphics_418 = new cjs.Graphics().p("AkLC2IAAlqIIXAAIAAFqg");
	var mask_graphics_419 = new cjs.Graphics().p("AkVC2IAAlqIIrAAIAAFqg");
	var mask_graphics_420 = new cjs.Graphics().p("AkgC2IAAlqIJBAAIAAFqg");
	var mask_graphics_421 = new cjs.Graphics().p("AkqC2IAAlqIJVAAIAAFqg");
	var mask_graphics_422 = new cjs.Graphics().p("Ak0C2IAAlqIJpAAIAAFqg");
	var mask_graphics_423 = new cjs.Graphics().p("Ak+C2IAAlqIJ9AAIAAFqg");
	var mask_graphics_424 = new cjs.Graphics().p("AlIC2IAAlqIKSAAIAAFqg");
	var mask_graphics_425 = new cjs.Graphics().p("AlTC2IAAlqIKnAAIAAFqg");
	var mask_graphics_426 = new cjs.Graphics().p("AldC2IAAlqIK7AAIAAFqg");
	var mask_graphics_427 = new cjs.Graphics().p("AlnC2IAAlqILPAAIAAFqg");
	var mask_graphics_428 = new cjs.Graphics().p("AlxC2IAAlqILjAAIAAFqg");
	var mask_graphics_429 = new cjs.Graphics().p("Al7C2IAAlqIL3AAIAAFqg");
	var mask_graphics_430 = new cjs.Graphics().p("AmGC2IAAlqIMNAAIAAFqg");
	var mask_graphics_431 = new cjs.Graphics().p("AmQC2IAAlqIMhAAIAAFqg");
	var mask_graphics_432 = new cjs.Graphics().p("AmaC2IAAlqIM1AAIAAFqg");
	var mask_graphics_433 = new cjs.Graphics().p("AmkC2IAAlqINJAAIAAFqg");
	var mask_graphics_434 = new cjs.Graphics().p("AmuC2IAAlqINdAAIAAFqg");
	var mask_graphics_435 = new cjs.Graphics().p("Am5C2IAAlqINzAAIAAFqg");
	var mask_graphics_436 = new cjs.Graphics().p("AnDC2IAAlqIOHAAIAAFqg");
	var mask_graphics_437 = new cjs.Graphics().p("AnNC2IAAlqIObAAIAAFqg");
	var mask_graphics_438 = new cjs.Graphics().p("AnXC2IAAlqIOvAAIAAFqg");
	var mask_graphics_439 = new cjs.Graphics().p("AnhC2IAAlqIPEAAIAAFqg");
	var mask_graphics_440 = new cjs.Graphics().p("AnsC2IAAlqIPZAAIAAFqg");
	var mask_graphics_441 = new cjs.Graphics().p("An2C2IAAlqIPtAAIAAFqg");
	var mask_graphics_442 = new cjs.Graphics().p("AoAC2IAAlqIQBAAIAAFqg");
	var mask_graphics_443 = new cjs.Graphics().p("AoKC2IAAlqIQVAAIAAFqg");
	var mask_graphics_444 = new cjs.Graphics().p("AoUC2IAAlqIQpAAIAAFqg");
	var mask_graphics_445 = new cjs.Graphics().p("AofC2IAAlqIQ/AAIAAFqg");
	var mask_graphics_446 = new cjs.Graphics().p("AooC2IAAlqIRSAAIAAFqg");
	var mask_graphics_447 = new cjs.Graphics().p("AoyC2IAAlqIRlAAIAAFqg");
	var mask_graphics_448 = new cjs.Graphics().p("Ao8C2IAAlqIR5AAIAAFqg");
	var mask_graphics_449 = new cjs.Graphics().p("ApFC2IAAlqISMAAIAAFqg");
	var mask_graphics_450 = new cjs.Graphics().p("ApPC2IAAlqISfAAIAAFqg");
	var mask_graphics_451 = new cjs.Graphics().p("ApZC2IAAlqISzAAIAAFqg");
	var mask_graphics_452 = new cjs.Graphics().p("ApiC2IAAlqITFAAIAAFqg");
	var mask_graphics_453 = new cjs.Graphics().p("ApsC2IAAlqITZAAIAAFqg");
	var mask_graphics_454 = new cjs.Graphics().p("Ap2C2IAAlqITtAAIAAFqg");
	var mask_graphics_455 = new cjs.Graphics().p("Ap/C2IAAlqIUAAAIAAFqg");
	var mask_graphics_456 = new cjs.Graphics().p("AqJC2IAAlqIUTAAIAAFqg");
	var mask_graphics_457 = new cjs.Graphics().p("AqTC2IAAlqIUnAAIAAFqg");
	var mask_graphics_458 = new cjs.Graphics().p("AqcC2IAAlqIU5AAIAAFqg");
	var mask_graphics_459 = new cjs.Graphics().p("AqmC2IAAlqIVNAAIAAFqg");
	var mask_graphics_460 = new cjs.Graphics().p("AqwC2IAAlqIVhAAIAAFqg");
	var mask_graphics_461 = new cjs.Graphics().p("Aq6C2IAAlqIV1AAIAAFqg");
	var mask_graphics_462 = new cjs.Graphics().p("ArDC2IAAlqIWHAAIAAFqg");
	var mask_graphics_463 = new cjs.Graphics().p("ArNC2IAAlqIWbAAIAAFqg");
	var mask_graphics_464 = new cjs.Graphics().p("ArXC2IAAlqIWvAAIAAFqg");
	var mask_graphics_465 = new cjs.Graphics().p("ArgC2IAAlqIXBAAIAAFqg");
	var mask_graphics_466 = new cjs.Graphics().p("ArqC2IAAlqIXVAAIAAFqg");
	var mask_graphics_467 = new cjs.Graphics().p("Ar0C2IAAlqIXpAAIAAFqg");
	var mask_graphics_468 = new cjs.Graphics().p("AsAC2IAAlqIYBAAIAAFqg");
	var mask_graphics_469 = new cjs.Graphics().p("AsMC2IAAlqIYZAAIAAFqg");
	var mask_graphics_470 = new cjs.Graphics().p("AsYC2IAAlqIYxAAIAAFqg");
	var mask_graphics_471 = new cjs.Graphics().p("AskC2IAAlqIZJAAIAAFqg");
	var mask_graphics_472 = new cjs.Graphics().p("AswC2IAAlqIZhAAIAAFqg");
	var mask_graphics_473 = new cjs.Graphics().p("As8C2IAAlqIZ5AAIAAFqg");
	var mask_graphics_474 = new cjs.Graphics().p("AtIC2IAAlqIaSAAIAAFqg");
	var mask_graphics_475 = new cjs.Graphics().p("AtUC2IAAlqIapAAIAAFqg");
	var mask_graphics_476 = new cjs.Graphics().p("AtgC2IAAlqIbCAAIAAFqg");
	var mask_graphics_477 = new cjs.Graphics().p("AttC2IAAlqIbbAAIAAFqg");
	var mask_graphics_478 = new cjs.Graphics().p("At5C2IAAlqIbzAAIAAFqg");
	var mask_graphics_479 = new cjs.Graphics().p("AuFC2IAAlqIcLAAIAAFqg");
	var mask_graphics_480 = new cjs.Graphics().p("AuRC2IAAlqIcjAAIAAFqg");
	var mask_graphics_481 = new cjs.Graphics().p("AudC2IAAlqIc7AAIAAFqg");
	var mask_graphics_482 = new cjs.Graphics().p("AupC2IAAlqIdTAAIAAFqg");
	var mask_graphics_483 = new cjs.Graphics().p("Au1C2IAAlqIdrAAIAAFqg");
	var mask_graphics_484 = new cjs.Graphics().p("AvBC2IAAlqIeDAAIAAFqg");
	var mask_graphics_485 = new cjs.Graphics().p("AvNC2IAAlqIebAAIAAFqg");
	var mask_graphics_486 = new cjs.Graphics().p("AvZC2IAAlqIe0AAIAAFqg");
	var mask_graphics_487 = new cjs.Graphics().p("AvlC2IAAlqIfLAAIAAFqg");
	var mask_graphics_488 = new cjs.Graphics().p("AvyC2IAAlqIflAAIAAFqg");
	var mask_graphics_489 = new cjs.Graphics().p("Av+C2IAAlqIf9AAIAAFqg");
	var mask_graphics_490 = new cjs.Graphics().p("AwKC2IAAlqMAgVAAAIAAFqg");
	var mask_graphics_491 = new cjs.Graphics().p("AwWC2IAAlqMAgtAAAIAAFqg");
	var mask_graphics_492 = new cjs.Graphics().p("AwiC2IAAlqMAhFAAAIAAFqg");
	var mask_graphics_493 = new cjs.Graphics().p("AwuC2IAAlqMAhdAAAIAAFqg");
	var mask_graphics_494 = new cjs.Graphics().p("Aw6C2IAAlqMAh1AAAIAAFqg");
	var mask_graphics_495 = new cjs.Graphics().p("AxGC2IAAlqMAiNAAAIAAFqg");
	var mask_graphics_496 = new cjs.Graphics().p("AxSC2IAAlqMAimAAAIAAFqg");
	var mask_graphics_497 = new cjs.Graphics().p("AxeC2IAAlqMAi9AAAIAAFqg");
	var mask_graphics_498 = new cjs.Graphics().p("AxrC2IAAlqMAjXAAAIAAFqg");
	var mask_graphics_499 = new cjs.Graphics().p("Ax3C2IAAlqMAjvAAAIAAFqg");
	var mask_graphics_500 = new cjs.Graphics().p("AyDC2IAAlqMAkHAAAIAAFqg");
	var mask_graphics_501 = new cjs.Graphics().p("AyPC2IAAlqMAkfAAAIAAFqg");
	var mask_graphics_502 = new cjs.Graphics().p("EgGnAi3IAAlqMAk3AAAIAAFqg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(396).to({graphics:mask_graphics_396,x:80,y:223.1}).wait(1).to({graphics:mask_graphics_397,x:156.7,y:428.2}).wait(1).to({graphics:mask_graphics_398,x:157.7,y:428.2}).wait(1).to({graphics:mask_graphics_399,x:158.7,y:428.2}).wait(1).to({graphics:mask_graphics_400,x:159.7,y:428.2}).wait(1).to({graphics:mask_graphics_401,x:160.7,y:428.2}).wait(1).to({graphics:mask_graphics_402,x:161.8,y:428.2}).wait(1).to({graphics:mask_graphics_403,x:162.8,y:428.2}).wait(1).to({graphics:mask_graphics_404,x:163.8,y:428.2}).wait(1).to({graphics:mask_graphics_405,x:164.8,y:428.2}).wait(1).to({graphics:mask_graphics_406,x:165.8,y:428.2}).wait(1).to({graphics:mask_graphics_407,x:166.9,y:428.2}).wait(1).to({graphics:mask_graphics_408,x:167.9,y:428.2}).wait(1).to({graphics:mask_graphics_409,x:168.9,y:428.2}).wait(1).to({graphics:mask_graphics_410,x:169.9,y:428.2}).wait(1).to({graphics:mask_graphics_411,x:170.9,y:428.2}).wait(1).to({graphics:mask_graphics_412,x:172,y:428.2}).wait(1).to({graphics:mask_graphics_413,x:173,y:428.2}).wait(1).to({graphics:mask_graphics_414,x:174,y:428.2}).wait(1).to({graphics:mask_graphics_415,x:175,y:428.2}).wait(1).to({graphics:mask_graphics_416,x:176,y:428.2}).wait(1).to({graphics:mask_graphics_417,x:177.1,y:428.2}).wait(1).to({graphics:mask_graphics_418,x:178.1,y:428.2}).wait(1).to({graphics:mask_graphics_419,x:179.1,y:428.2}).wait(1).to({graphics:mask_graphics_420,x:180.1,y:428.2}).wait(1).to({graphics:mask_graphics_421,x:181.1,y:428.2}).wait(1).to({graphics:mask_graphics_422,x:182.2,y:428.2}).wait(1).to({graphics:mask_graphics_423,x:183.2,y:428.2}).wait(1).to({graphics:mask_graphics_424,x:184.2,y:428.2}).wait(1).to({graphics:mask_graphics_425,x:185.2,y:428.2}).wait(1).to({graphics:mask_graphics_426,x:186.2,y:428.2}).wait(1).to({graphics:mask_graphics_427,x:187.3,y:428.2}).wait(1).to({graphics:mask_graphics_428,x:188.3,y:428.2}).wait(1).to({graphics:mask_graphics_429,x:189.3,y:428.2}).wait(1).to({graphics:mask_graphics_430,x:190.3,y:428.2}).wait(1).to({graphics:mask_graphics_431,x:191.4,y:428.2}).wait(1).to({graphics:mask_graphics_432,x:192.4,y:428.2}).wait(1).to({graphics:mask_graphics_433,x:193.4,y:428.2}).wait(1).to({graphics:mask_graphics_434,x:194.4,y:428.2}).wait(1).to({graphics:mask_graphics_435,x:195.4,y:428.2}).wait(1).to({graphics:mask_graphics_436,x:196.5,y:428.2}).wait(1).to({graphics:mask_graphics_437,x:197.5,y:428.2}).wait(1).to({graphics:mask_graphics_438,x:198.5,y:428.2}).wait(1).to({graphics:mask_graphics_439,x:199.5,y:428.2}).wait(1).to({graphics:mask_graphics_440,x:200.5,y:428.2}).wait(1).to({graphics:mask_graphics_441,x:201.6,y:428.2}).wait(1).to({graphics:mask_graphics_442,x:202.6,y:428.2}).wait(1).to({graphics:mask_graphics_443,x:203.6,y:428.2}).wait(1).to({graphics:mask_graphics_444,x:204.6,y:428.2}).wait(1).to({graphics:mask_graphics_445,x:205.6,y:428.2}).wait(1).to({graphics:mask_graphics_446,x:206.6,y:428.2}).wait(1).to({graphics:mask_graphics_447,x:207.6,y:428.2}).wait(1).to({graphics:mask_graphics_448,x:208.5,y:428.2}).wait(1).to({graphics:mask_graphics_449,x:209.5,y:428.2}).wait(1).to({graphics:mask_graphics_450,x:210.5,y:428.2}).wait(1).to({graphics:mask_graphics_451,x:211.4,y:428.2}).wait(1).to({graphics:mask_graphics_452,x:212.4,y:428.2}).wait(1).to({graphics:mask_graphics_453,x:213.4,y:428.2}).wait(1).to({graphics:mask_graphics_454,x:214.4,y:428.2}).wait(1).to({graphics:mask_graphics_455,x:215.3,y:428.2}).wait(1).to({graphics:mask_graphics_456,x:216.3,y:428.2}).wait(1).to({graphics:mask_graphics_457,x:217.3,y:428.2}).wait(1).to({graphics:mask_graphics_458,x:218.2,y:428.2}).wait(1).to({graphics:mask_graphics_459,x:219.2,y:428.2}).wait(1).to({graphics:mask_graphics_460,x:220.2,y:428.2}).wait(1).to({graphics:mask_graphics_461,x:221.1,y:428.2}).wait(1).to({graphics:mask_graphics_462,x:222.1,y:428.2}).wait(1).to({graphics:mask_graphics_463,x:223.1,y:428.2}).wait(1).to({graphics:mask_graphics_464,x:224,y:428.2}).wait(1).to({graphics:mask_graphics_465,x:225,y:428.2}).wait(1).to({graphics:mask_graphics_466,x:226,y:428.2}).wait(1).to({graphics:mask_graphics_467,x:226.9,y:428.2}).wait(1).to({graphics:mask_graphics_468,x:228.1,y:428.2}).wait(1).to({graphics:mask_graphics_469,x:229.4,y:428.2}).wait(1).to({graphics:mask_graphics_470,x:230.6,y:428.2}).wait(1).to({graphics:mask_graphics_471,x:231.8,y:428.2}).wait(1).to({graphics:mask_graphics_472,x:233,y:428.2}).wait(1).to({graphics:mask_graphics_473,x:234.2,y:428.2}).wait(1).to({graphics:mask_graphics_474,x:235.4,y:428.2}).wait(1).to({graphics:mask_graphics_475,x:236.6,y:428.2}).wait(1).to({graphics:mask_graphics_476,x:237.8,y:428.2}).wait(1).to({graphics:mask_graphics_477,x:239,y:428.2}).wait(1).to({graphics:mask_graphics_478,x:240.2,y:428.2}).wait(1).to({graphics:mask_graphics_479,x:241.4,y:428.2}).wait(1).to({graphics:mask_graphics_480,x:242.7,y:428.2}).wait(1).to({graphics:mask_graphics_481,x:243.9,y:428.2}).wait(1).to({graphics:mask_graphics_482,x:245.1,y:428.2}).wait(1).to({graphics:mask_graphics_483,x:246.3,y:428.2}).wait(1).to({graphics:mask_graphics_484,x:247.5,y:428.2}).wait(1).to({graphics:mask_graphics_485,x:248.7,y:428.2}).wait(1).to({graphics:mask_graphics_486,x:249.9,y:428.2}).wait(1).to({graphics:mask_graphics_487,x:251.1,y:428.2}).wait(1).to({graphics:mask_graphics_488,x:252.3,y:428.2}).wait(1).to({graphics:mask_graphics_489,x:253.5,y:428.2}).wait(1).to({graphics:mask_graphics_490,x:254.8,y:428.2}).wait(1).to({graphics:mask_graphics_491,x:256,y:428.2}).wait(1).to({graphics:mask_graphics_492,x:257.2,y:428.2}).wait(1).to({graphics:mask_graphics_493,x:258.4,y:428.2}).wait(1).to({graphics:mask_graphics_494,x:259.6,y:428.2}).wait(1).to({graphics:mask_graphics_495,x:260.8,y:428.2}).wait(1).to({graphics:mask_graphics_496,x:262,y:428.2}).wait(1).to({graphics:mask_graphics_497,x:263.2,y:428.2}).wait(1).to({graphics:mask_graphics_498,x:264.4,y:428.2}).wait(1).to({graphics:mask_graphics_499,x:265.6,y:428.2}).wait(1).to({graphics:mask_graphics_500,x:266.8,y:428.2}).wait(1).to({graphics:mask_graphics_501,x:268.1,y:428.2}).wait(1).to({graphics:mask_graphics_502,x:193.6,y:223.1}).wait(93));

	// Layer 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(15,1,1).p("AwLAsQGdg0HjgXQPGgtDRB4");
	this.shape_1.setTransform(267.6,429.1,0.996,1,0,0,0,-0.9,3.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1,3,true).p("AwdAQQG4g7HjgXQPGgtDaC7");
	this.shape_2.setTransform(268,429.1);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},396).wait(199));

	// Layer 11 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AZ5XQIBciJICmBwIhcCJg");
	var mask_1_graphics_208 = new cjs.Graphics().p("AiwgmICViJIDMDgIiLB/g");
	var mask_1_graphics_209 = new cjs.Graphics().p("Ai2giIChiTIDMDgIiXCKg");
	var mask_1_graphics_210 = new cjs.Graphics().p("Ai8gcICtieIDMDgIiiCVg");
	var mask_1_graphics_211 = new cjs.Graphics().p("AjCgWIC5ipIDMDgIivCfg");
	var mask_1_graphics_212 = new cjs.Graphics().p("AjIgRIDFi0IDMDgIi7Crg");
	var mask_1_graphics_213 = new cjs.Graphics().p("AjOgMIDQi+IDNDgIjHC1g");
	var mask_1_graphics_214 = new cjs.Graphics().p("AjUgHIDcjJIDNDgIjTDBg");
	var mask_1_graphics_215 = new cjs.Graphics().p("AjZgBIDnjUIDMDgIjdDLg");
	var mask_1_graphics_216 = new cjs.Graphics().p("AjfADIDzjeIDNDgIjpDXg");
	var mask_1_graphics_217 = new cjs.Graphics().p("AjlAJID/jpIDMDgIj0Dhg");
	var mask_1_graphics_218 = new cjs.Graphics().p("AjrAOIELj0IDMDhIkBDsg");
	var mask_1_graphics_219 = new cjs.Graphics().p("AjxATIEWj+IDNDhIkMD2g");
	var mask_1_graphics_220 = new cjs.Graphics().p("Aj3AZIEjkKIDMDhIkZECg");
	var mask_1_graphics_221 = new cjs.Graphics().p("Aj9AeIEvkUIDMDhIkkEMg");
	var mask_1_graphics_222 = new cjs.Graphics().p("AkDAjIE6kfIDNDhIkwEYg");
	var mask_1_graphics_223 = new cjs.Graphics().p("AkJApIFHkqIDMDhIk8Eig");
	var mask_1_graphics_224 = new cjs.Graphics().p("AkPAuIFTk1IDMDhIlIEug");
	var mask_1_graphics_225 = new cjs.Graphics().p("AkVA0IFelAIDNDhIlUE4g");
	var mask_1_graphics_226 = new cjs.Graphics().p("AkbA5IFrlLIDLDhIlfFEg");
	var mask_1_graphics_227 = new cjs.Graphics().p("AkgA+IF1lVIDMDhIlrFOg");
	var mask_1_graphics_228 = new cjs.Graphics().p("AkmBDIGBlgIDMDhIl3Fag");
	var mask_1_graphics_229 = new cjs.Graphics().p("AksBJIGNlrIDMDgImDFlg");
	var mask_1_graphics_230 = new cjs.Graphics().p("AkyBOIGZl2IDMDhImOFwg");
	var mask_1_graphics_231 = new cjs.Graphics().p("Ak4BUIGlmBIDMDhImbF6g");
	var mask_1_graphics_232 = new cjs.Graphics().p("Ak+BZIGxmMIDMDhImnGGg");
	var mask_1_graphics_233 = new cjs.Graphics().p("AlEBfIG9mXIDMDhImzGQg");
	var mask_1_graphics_234 = new cjs.Graphics().p("AlKBjIHJmgIDMDgIm/Gcg");
	var mask_1_graphics_235 = new cjs.Graphics().p("AlQBpIHVmsIDLDhInKGmg");
	var mask_1_graphics_236 = new cjs.Graphics().p("AlVBuIHgm3IDMDhInXGyg");
	var mask_1_graphics_237 = new cjs.Graphics().p("AlbB0IHsnCIDLDhIniG8g");
	var mask_1_graphics_238 = new cjs.Graphics().p("AlhB5IH4nMIDLDgInuHHg");
	var mask_1_graphics_239 = new cjs.Graphics().p("AlnB+IIEnXIDLDhIn6HSg");
	var mask_1_graphics_240 = new cjs.Graphics().p("AltCEIIQnjIDLDhIoFHdg");
	var mask_1_graphics_241 = new cjs.Graphics().p("AlzCJIIbntIDMDhIoSHog");
	var mask_1_graphics_242 = new cjs.Graphics().p("Al5CPIIon4IDLDhIodHyg");
	var mask_1_graphics_243 = new cjs.Graphics().p("Al/CUIIzoDIDMDhIoqH+g");
	var mask_1_graphics_244 = new cjs.Graphics().p("AmFCZII/oOIDMDhIo2IJg");
	var mask_1_graphics_245 = new cjs.Graphics().p("AmLCeIJMoYIDLDhIpBIUg");
	var mask_1_graphics_246 = new cjs.Graphics().p("AmRCjIJYoiIDLDhIpNIeg");
	var mask_1_graphics_247 = new cjs.Graphics().p("AmWCpIJjouIDKDhIpYIqg");
	var mask_1_graphics_248 = new cjs.Graphics().p("AmcCuIJuo5IDMDhIplI2g");
	var mask_1_graphics_249 = new cjs.Graphics().p("AmiC0IJ6pEIDLDhIpwJAg");
	var mask_1_graphics_250 = new cjs.Graphics().p("AmoC5IKGpOIDLDhIp8JKg");
	var mask_1_graphics_251 = new cjs.Graphics().p("AmuC/IKSpaIDLDhIqIJWg");
	var mask_1_graphics_252 = new cjs.Graphics().p("Am0DEIKfpkIDKDhIqUJgg");
	var mask_1_graphics_253 = new cjs.Graphics().p("Am6DJIKqpvIDLDhIqgJsg");
	var mask_1_graphics_254 = new cjs.Graphics().p("AnADPIK2p6IDLDgIqsJ3g");
	var mask_1_graphics_255 = new cjs.Graphics().p("AnGDUILCqFIDLDhIq4KCg");
	var mask_1_graphics_256 = new cjs.Graphics().p("AnLDaILNqQIDLDhIrEKMg");
	var mask_1_graphics_257 = new cjs.Graphics().p("AnRDfILZqbIDKDhIrPKYg");
	var mask_1_graphics_258 = new cjs.Graphics().p("AnXDkILlqlIDKDgIrbKjg");
	var mask_1_graphics_259 = new cjs.Graphics().p("AndDpILxqwIDKDhIrnKug");
	var mask_1_graphics_260 = new cjs.Graphics().p("AnjDvIL9q7IDKDhIryK4g");
	var mask_1_graphics_261 = new cjs.Graphics().p("AnpD0IMJrGIDKDhIr+LEg");
	var mask_1_graphics_262 = new cjs.Graphics().p("AnvD5IMVrQIDKDhIsLLOg");
	var mask_1_graphics_263 = new cjs.Graphics().p("An1D+IMhraIDKDgIsXLag");
	var mask_1_graphics_264 = new cjs.Graphics().p("An7EEIMtrmIDKDhIsjLkg");
	var mask_1_graphics_265 = new cjs.Graphics().p("AoAEKIM3ryIDLDhIsvLwg");
	var mask_1_graphics_266 = new cjs.Graphics().p("AoGEPINEr8IDJDhIs6L6g");
	var mask_1_graphics_267 = new cjs.Graphics().p("AoMEUINQsGIDJDgItFMGg");
	var mask_1_graphics_268 = new cjs.Graphics().p("AoSEZINbsRIDKDhItSMQg");
	var mask_1_graphics_269 = new cjs.Graphics().p("AoYEfINosdIDJDhItdMbg");
	var mask_1_graphics_270 = new cjs.Graphics().p("AoeEkIN0snIDJDhItpMmg");
	var mask_1_graphics_271 = new cjs.Graphics().p("AokEpIN/syIDKDhIt1Mxg");
	var mask_1_graphics_272 = new cjs.Graphics().p("AoqEvIOMs9IDJDhIuBM8g");
	var mask_1_graphics_273 = new cjs.Graphics().p("AowE0IOYtHIDJDhIuNNGg");
	var mask_1_graphics_274 = new cjs.Graphics().p("Ao2E6IOjtTIDKDhIuZNSg");
	var mask_1_graphics_275 = new cjs.Graphics().p("Ao8E/IOvteIDKDhIulNdg");
	var mask_1_graphics_276 = new cjs.Graphics().p("ApCFEIO8toIDJDhIuxNog");
	var mask_1_graphics_277 = new cjs.Graphics().p("ApHFJIPGtyIDKDgIu9Nzg");
	var mask_1_graphics_278 = new cjs.Graphics().p("ApNFPIPSt+IDJDhIvIN+g");
	var mask_1_graphics_279 = new cjs.Graphics().p("ApTFUIPeuIIDJDgIvUOJg");
	var mask_1_graphics_280 = new cjs.Graphics().p("ApZFaIPquUIDJDhIvgOUg");
	var mask_1_graphics_281 = new cjs.Graphics().p("ApfFfIP2ueIDJDgIvsOfg");
	var mask_1_graphics_282 = new cjs.Graphics().p("AplFlIQCuqIDJDhIv4Oqg");
	var mask_1_graphics_283 = new cjs.Graphics().p("AprFqIQOu0IDJDgIwEO1g");
	var mask_1_graphics_284 = new cjs.Graphics().p("ApxFvIQau/IDJDhIwQPAg");
	var mask_1_graphics_285 = new cjs.Graphics().p("Ap3F0IQmvJIDJDgIwbPLg");
	var mask_1_graphics_286 = new cjs.Graphics().p("Ap8F5IQwvUIDJDhIwnPVg");
	var mask_1_graphics_287 = new cjs.Graphics().p("AqCF/IQ9vfIDJDgIw0Phg");
	var mask_1_graphics_288 = new cjs.Graphics().p("AqIGEIRJvpIDIDgIw/Prg");
	var mask_1_graphics_289 = new cjs.Graphics().p("AqOGKIRUv1IDJDgIxLP3g");
	var mask_1_graphics_290 = new cjs.Graphics().p("AqUGPIRhwAIDIDhIxXQBg");
	var mask_1_graphics_291 = new cjs.Graphics().p("AqaGVIRswLIDJDgIxiQNg");
	var mask_1_graphics_292 = new cjs.Graphics().p("AqgGaIR4wWIDJDhIxuQYg");
	var mask_1_graphics_293 = new cjs.Graphics().p("AqmGfISEwgIDJDhIx6Qig");
	var mask_1_graphics_294 = new cjs.Graphics().p("AqsGlISQwrIDJDgIyGQug");
	var mask_1_graphics_295 = new cjs.Graphics().p("AqyGqIScw2IDJDhIySQ4g");
	var mask_1_graphics_296 = new cjs.Graphics().p("Aq4GvISoxBIDJDhIyeREg");
	var mask_1_graphics_297 = new cjs.Graphics().p("Aq9G1ISzxMIDJDhIyqROg");
	var mask_1_graphics_298 = new cjs.Graphics().p("ArDG6IS/xWIDIDgIy1Rag");
	var mask_1_graphics_299 = new cjs.Graphics().p("ArJG/ITLxhIDIDhIzBRkg");
	var mask_1_graphics_300 = new cjs.Graphics().p("ArPHFITXxtIDIDhIzNRvg");
	var mask_1_graphics_301 = new cjs.Graphics().p("ArVHKITjx3IDIDhIzZR6g");
	var mask_1_graphics_302 = new cjs.Graphics().p("ArbHPITvyBIDIDgIzlSFg");
	var mask_1_graphics_303 = new cjs.Graphics().p("ArhHVIT7yNIDIDhIzxSQg");
	var mask_1_graphics_304 = new cjs.Graphics().p("ArnHaIUHyXIDIDgIz9Sbg");
	var mask_1_graphics_305 = new cjs.Graphics().p("ArtHgIUTyjIDIDhI0JSmg");
	var mask_1_graphics_306 = new cjs.Graphics().p("AryHlIUeytIDHDgI0USxg");
	var mask_1_graphics_307 = new cjs.Graphics().p("Ar4HqIUqy4IDHDhI0gS8g");
	var mask_1_graphics_308 = new cjs.Graphics().p("Ar+HvIU2zCIDHDgI0sTHg");
	var mask_1_graphics_309 = new cjs.Graphics().p("AsEH1IVCzOIDHDhI04TSg");
	var mask_1_graphics_310 = new cjs.Graphics().p("AsKH6IVNzYIDIDgI1ETdg");
	var mask_1_graphics_311 = new cjs.Graphics().p("AsQH/IVZzjIDIDhI1QTog");
	var mask_1_graphics_312 = new cjs.Graphics().p("AsWIFIVmzuIDHDgI1cTzg");
	var mask_1_graphics_313 = new cjs.Graphics().p("AscIKIVxz5IDIDgI1oT+g");
	var mask_1_graphics_314 = new cjs.Graphics().p("AsiIQIV90EIDIDgI10UJg");
	var mask_1_graphics_315 = new cjs.Graphics().p("AsnIVIWI0OIDHDgI1+UTg");
	var mask_1_graphics_316 = new cjs.Graphics().p("AstIaIWU0ZIDIDgI2MUfg");
	var mask_1_graphics_317 = new cjs.Graphics().p("As0IgIWh0lIDHDhI2XUpg");
	var mask_1_graphics_318 = new cjs.Graphics().p("As5IlIWs0vIDHDgI2iU1g");
	var mask_1_graphics_319 = new cjs.Graphics().p("As/IrIW406IDIDgI2wU/g");
	var mask_1_graphics_320 = new cjs.Graphics().p("AtFIvIXE1EIDHDgI26VLg");
	var mask_1_graphics_321 = new cjs.Graphics().p("AtLI1IXQ1QIDHDhI3GVWg");
	var mask_1_graphics_322 = new cjs.Graphics().p("AtRI6IXc1aIDHDgI3SVhg");
	var mask_1_graphics_323 = new cjs.Graphics().p("AtXJAIXo1lIDHDgI3eVsg");
	var mask_1_graphics_324 = new cjs.Graphics().p("AtdJFIX01wIDHDgI3qV3g");
	var mask_1_graphics_325 = new cjs.Graphics().p("AtjJKIYA17IDHDhI32WCg");
	var mask_1_graphics_326 = new cjs.Graphics().p("AtpJQIYM2GIDHDhI4CWMg");
	var mask_1_graphics_327 = new cjs.Graphics().p("AtuJVIYX2QIDGDgI4NWXg");
	var mask_1_graphics_328 = new cjs.Graphics().p("At0JbIYj2cIDHDhI4aWig");
	var mask_1_graphics_329 = new cjs.Graphics().p("At6JgIYv2mIDGDgI4lWtg");
	var mask_1_graphics_330 = new cjs.Graphics().p("AuAJlIY72xIDGDgI4xW5g");
	var mask_1_graphics_331 = new cjs.Graphics().p("AuGJqIZH27IDGDgI49XDg");
	var mask_1_graphics_332 = new cjs.Graphics().p("AuMJwIZS3HIDHDhI5JXOg");
	var mask_1_graphics_333 = new cjs.Graphics().p("AuSJ1IZf3RIDGDgI5VXZg");
	var mask_1_graphics_334 = new cjs.Graphics().p("AuYJ6IZq3cIDHDgI5hXlg");
	var mask_1_graphics_335 = new cjs.Graphics().p("AueKAIZ23nIDHDgI5tXvg");
	var mask_1_graphics_336 = new cjs.Graphics().p("AujKFIaC3yIDGDgI54X7g");
	var mask_1_graphics_337 = new cjs.Graphics().p("AupKLIaN39IDGDgI6EYFg");
	var mask_1_graphics_338 = new cjs.Graphics().p("AuvKQIaZ4IIDGDgI6QYRg");
	var mask_1_graphics_339 = new cjs.Graphics().p("Au1KVIal4SIDGDgI6cYbg");
	var mask_1_graphics_340 = new cjs.Graphics().p("Au7KbIax4dIDGDgI6oYmg");
	var mask_1_graphics_341 = new cjs.Graphics().p("AvBKgIa94oIDGDgI60Yxg");
	var mask_1_graphics_342 = new cjs.Graphics().p("AvHKmIbJ40IDGDgI6/Y9g");
	var mask_1_graphics_343 = new cjs.Graphics().p("AvNKrIbW4+IDFDgI7LZHg");
	var mask_1_graphics_344 = new cjs.Graphics().p("AvTKwIbh5IIDGDgI7YZRg");
	var mask_1_graphics_345 = new cjs.Graphics().p("AvZK1Ibt5TIDGDgI7jZdg");
	var mask_1_graphics_346 = new cjs.Graphics().p("AvfK7Ib55fIDGDgI7vZog");
	var mask_1_graphics_347 = new cjs.Graphics().p("AvkLAIcE5pIDFDgI76Zzg");
	var mask_1_graphics_348 = new cjs.Graphics().p("AvqLFIcQ5zIDGDgI8HZ9g");
	var mask_1_graphics_349 = new cjs.Graphics().p("AvxLLIcd5/IDFDgI8SaJg");
	var mask_1_graphics_350 = new cjs.Graphics().p("Av2LQIco6KIDFDhI8eaTg");
	var mask_1_graphics_351 = new cjs.Graphics().p("Av8LWIc06VIDFDgI8qafg");
	var mask_1_graphics_352 = new cjs.Graphics().p("AwCLbIdA6gIDFDhI82apg");
	var mask_1_graphics_353 = new cjs.Graphics().p("AwILgIdL6qIDGDgI9Ca1g");
	var mask_1_graphics_354 = new cjs.Graphics().p("AwOLmIdY61IDFDgI9Oa/g");
	var mask_1_graphics_355 = new cjs.Graphics().p("AwULrIdk7AIDFDgI9abLg");
	var mask_1_graphics_356 = new cjs.Graphics().p("AwaLwIdv7KIDGDgI9mbVg");
	var mask_1_graphics_357 = new cjs.Graphics().p("AwfL1Id77VIDFDhI9ybgg");
	var mask_1_graphics_358 = new cjs.Graphics().p("AwmL7IeH7gIDFDgI99brg");
	var mask_1_graphics_359 = new cjs.Graphics().p("AwrMAIeS7rIDFDgI+Jb3g");
	var mask_1_graphics_360 = new cjs.Graphics().p("AwxMGIee72IDFDgI+VcBg");
	var mask_1_graphics_361 = new cjs.Graphics().p("Aw3MLIeq8BIDFDgI+hcNg");
	var mask_1_graphics_362 = new cjs.Graphics().p("Aw9MQIe28LIDFDgI+tcXg");
	var mask_1_graphics_363 = new cjs.Graphics().p("AxDMWIfC8XIDFDgI+5cjg");
	var mask_1_graphics_364 = new cjs.Graphics().p("AxJMbIfO8hIDFDgI/Fctg");
	var mask_1_graphics_365 = new cjs.Graphics().p("AxPMgIfa8sIDFDgI/Rc5g");
	var mask_1_graphics_366 = new cjs.Graphics().p("AxVMmIfm83IDFDgI/cdDg");
	var mask_1_graphics_367 = new cjs.Graphics().p("AxbMrIfy9CIDFDgI/odPg");
	var mask_1_graphics_368 = new cjs.Graphics().p("AxgMxIf99NIDFDgI/0dZg");
	var mask_1_graphics_369 = new cjs.Graphics().p("AxmM2MAgJgdYIDEDgI//dlg");
	var mask_1_graphics_370 = new cjs.Graphics().p("AxsM7MAgVgdiIDEDgMggLAdvg");
	var mask_1_graphics_371 = new cjs.Graphics().p("AxyNAMAghgdtIDEDgMggXAd7g");
	var mask_1_graphics_372 = new cjs.Graphics().p("Ax4NGMAgtgd4IDEDgMggjAeFg");
	var mask_1_graphics_373 = new cjs.Graphics().p("Ax+NLMAg5geDIDEDgMggvAeRg");
	var mask_1_graphics_374 = new cjs.Graphics().p("AyENRMAhFgeOIDEDgMgg7Aebg");
	var mask_1_graphics_375 = new cjs.Graphics().p("AyKNWMAhRgeZIDEDgMghHAeng");
	var mask_1_graphics_376 = new cjs.Graphics().p("AyQNcMAhdgekIDEDgMghTAexg");
	var mask_1_graphics_377 = new cjs.Graphics().p("AyVNhMAhogevIDEDgMghfAe8g");
	var mask_1_graphics_378 = new cjs.Graphics().p("AnIfEMAh0ge7IDFDhMghrAfIg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:191.5,y:160}).wait(208).to({graphics:mask_1_graphics_208,x:358.4,y:244.9}).wait(1).to({graphics:mask_1_graphics_209,x:357.8,y:245.4}).wait(1).to({graphics:mask_1_graphics_210,x:357.3,y:245.9}).wait(1).to({graphics:mask_1_graphics_211,x:356.7,y:246.4}).wait(1).to({graphics:mask_1_graphics_212,x:356.1,y:247}).wait(1).to({graphics:mask_1_graphics_213,x:355.6,y:247.5}).wait(1).to({graphics:mask_1_graphics_214,x:355,y:248}).wait(1).to({graphics:mask_1_graphics_215,x:354.5,y:248.5}).wait(1).to({graphics:mask_1_graphics_216,x:353.9,y:249.1}).wait(1).to({graphics:mask_1_graphics_217,x:353.3,y:249.6}).wait(1).to({graphics:mask_1_graphics_218,x:352.8,y:250.1}).wait(1).to({graphics:mask_1_graphics_219,x:352.2,y:250.6}).wait(1).to({graphics:mask_1_graphics_220,x:351.7,y:251.2}).wait(1).to({graphics:mask_1_graphics_221,x:351.1,y:251.7}).wait(1).to({graphics:mask_1_graphics_222,x:350.5,y:252.2}).wait(1).to({graphics:mask_1_graphics_223,x:349.9,y:252.7}).wait(1).to({graphics:mask_1_graphics_224,x:349.4,y:253.3}).wait(1).to({graphics:mask_1_graphics_225,x:348.8,y:253.8}).wait(1).to({graphics:mask_1_graphics_226,x:348.3,y:254.3}).wait(1).to({graphics:mask_1_graphics_227,x:347.7,y:254.9}).wait(1).to({graphics:mask_1_graphics_228,x:347.1,y:255.4}).wait(1).to({graphics:mask_1_graphics_229,x:346.6,y:255.9}).wait(1).to({graphics:mask_1_graphics_230,x:346,y:256.4}).wait(1).to({graphics:mask_1_graphics_231,x:345.5,y:257}).wait(1).to({graphics:mask_1_graphics_232,x:344.9,y:257.5}).wait(1).to({graphics:mask_1_graphics_233,x:344.3,y:258}).wait(1).to({graphics:mask_1_graphics_234,x:343.8,y:258.6}).wait(1).to({graphics:mask_1_graphics_235,x:343.2,y:259.1}).wait(1).to({graphics:mask_1_graphics_236,x:342.7,y:259.6}).wait(1).to({graphics:mask_1_graphics_237,x:342.1,y:260.1}).wait(1).to({graphics:mask_1_graphics_238,x:341.5,y:260.7}).wait(1).to({graphics:mask_1_graphics_239,x:341,y:261.2}).wait(1).to({graphics:mask_1_graphics_240,x:340.4,y:261.7}).wait(1).to({graphics:mask_1_graphics_241,x:339.9,y:262.2}).wait(1).to({graphics:mask_1_graphics_242,x:339.3,y:262.8}).wait(1).to({graphics:mask_1_graphics_243,x:338.7,y:263.3}).wait(1).to({graphics:mask_1_graphics_244,x:338.2,y:263.8}).wait(1).to({graphics:mask_1_graphics_245,x:337.6,y:264.3}).wait(1).to({graphics:mask_1_graphics_246,x:337,y:264.9}).wait(1).to({graphics:mask_1_graphics_247,x:336.5,y:265.4}).wait(1).to({graphics:mask_1_graphics_248,x:335.9,y:265.9}).wait(1).to({graphics:mask_1_graphics_249,x:335.3,y:266.4}).wait(1).to({graphics:mask_1_graphics_250,x:334.8,y:266.9}).wait(1).to({graphics:mask_1_graphics_251,x:334.2,y:267.5}).wait(1).to({graphics:mask_1_graphics_252,x:333.7,y:268}).wait(1).to({graphics:mask_1_graphics_253,x:333.1,y:268.5}).wait(1).to({graphics:mask_1_graphics_254,x:332.5,y:269.1}).wait(1).to({graphics:mask_1_graphics_255,x:332,y:269.6}).wait(1).to({graphics:mask_1_graphics_256,x:331.4,y:270.1}).wait(1).to({graphics:mask_1_graphics_257,x:330.9,y:270.6}).wait(1).to({graphics:mask_1_graphics_258,x:330.3,y:271.2}).wait(1).to({graphics:mask_1_graphics_259,x:329.7,y:271.7}).wait(1).to({graphics:mask_1_graphics_260,x:329.2,y:272.2}).wait(1).to({graphics:mask_1_graphics_261,x:328.6,y:272.8}).wait(1).to({graphics:mask_1_graphics_262,x:328,y:273.3}).wait(1).to({graphics:mask_1_graphics_263,x:327.5,y:273.8}).wait(1).to({graphics:mask_1_graphics_264,x:326.9,y:274.3}).wait(1).to({graphics:mask_1_graphics_265,x:326.4,y:274.9}).wait(1).to({graphics:mask_1_graphics_266,x:325.8,y:275.4}).wait(1).to({graphics:mask_1_graphics_267,x:325.2,y:275.9}).wait(1).to({graphics:mask_1_graphics_268,x:324.7,y:276.4}).wait(1).to({graphics:mask_1_graphics_269,x:324.1,y:277}).wait(1).to({graphics:mask_1_graphics_270,x:323.5,y:277.5}).wait(1).to({graphics:mask_1_graphics_271,x:323,y:278}).wait(1).to({graphics:mask_1_graphics_272,x:322.4,y:278.5}).wait(1).to({graphics:mask_1_graphics_273,x:321.9,y:279.1}).wait(1).to({graphics:mask_1_graphics_274,x:321.3,y:279.6}).wait(1).to({graphics:mask_1_graphics_275,x:320.7,y:280.1}).wait(1).to({graphics:mask_1_graphics_276,x:320.2,y:280.6}).wait(1).to({graphics:mask_1_graphics_277,x:319.6,y:281.2}).wait(1).to({graphics:mask_1_graphics_278,x:319.1,y:281.7}).wait(1).to({graphics:mask_1_graphics_279,x:318.5,y:282.2}).wait(1).to({graphics:mask_1_graphics_280,x:317.9,y:282.7}).wait(1).to({graphics:mask_1_graphics_281,x:317.4,y:283.3}).wait(1).to({graphics:mask_1_graphics_282,x:316.8,y:283.8}).wait(1).to({graphics:mask_1_graphics_283,x:316.2,y:284.3}).wait(1).to({graphics:mask_1_graphics_284,x:315.7,y:284.8}).wait(1).to({graphics:mask_1_graphics_285,x:315.1,y:285.4}).wait(1).to({graphics:mask_1_graphics_286,x:314.6,y:285.9}).wait(1).to({graphics:mask_1_graphics_287,x:314,y:286.4}).wait(1).to({graphics:mask_1_graphics_288,x:313.4,y:287}).wait(1).to({graphics:mask_1_graphics_289,x:312.9,y:287.5}).wait(1).to({graphics:mask_1_graphics_290,x:312.3,y:288}).wait(1).to({graphics:mask_1_graphics_291,x:311.8,y:288.5}).wait(1).to({graphics:mask_1_graphics_292,x:311.2,y:289.1}).wait(1).to({graphics:mask_1_graphics_293,x:310.6,y:289.6}).wait(1).to({graphics:mask_1_graphics_294,x:310.1,y:290.1}).wait(1).to({graphics:mask_1_graphics_295,x:309.5,y:290.6}).wait(1).to({graphics:mask_1_graphics_296,x:308.9,y:291.2}).wait(1).to({graphics:mask_1_graphics_297,x:308.4,y:291.7}).wait(1).to({graphics:mask_1_graphics_298,x:307.8,y:292.2}).wait(1).to({graphics:mask_1_graphics_299,x:307.2,y:292.7}).wait(1).to({graphics:mask_1_graphics_300,x:306.7,y:293.3}).wait(1).to({graphics:mask_1_graphics_301,x:306.1,y:293.8}).wait(1).to({graphics:mask_1_graphics_302,x:305.6,y:294.3}).wait(1).to({graphics:mask_1_graphics_303,x:305,y:294.8}).wait(1).to({graphics:mask_1_graphics_304,x:304.4,y:295.4}).wait(1).to({graphics:mask_1_graphics_305,x:303.9,y:295.9}).wait(1).to({graphics:mask_1_graphics_306,x:303.3,y:296.4}).wait(1).to({graphics:mask_1_graphics_307,x:302.8,y:296.9}).wait(1).to({graphics:mask_1_graphics_308,x:302.2,y:297.5}).wait(1).to({graphics:mask_1_graphics_309,x:301.6,y:298}).wait(1).to({graphics:mask_1_graphics_310,x:301.1,y:298.5}).wait(1).to({graphics:mask_1_graphics_311,x:300.5,y:299.1}).wait(1).to({graphics:mask_1_graphics_312,x:300,y:299.6}).wait(1).to({graphics:mask_1_graphics_313,x:299.4,y:300.1}).wait(1).to({graphics:mask_1_graphics_314,x:298.8,y:300.6}).wait(1).to({graphics:mask_1_graphics_315,x:298.3,y:301.2}).wait(1).to({graphics:mask_1_graphics_316,x:297.7,y:301.7}).wait(1).to({graphics:mask_1_graphics_317,x:297.2,y:302.2}).wait(1).to({graphics:mask_1_graphics_318,x:296.6,y:302.7}).wait(1).to({graphics:mask_1_graphics_319,x:296,y:303.3}).wait(1).to({graphics:mask_1_graphics_320,x:295.4,y:303.8}).wait(1).to({graphics:mask_1_graphics_321,x:294.9,y:304.3}).wait(1).to({graphics:mask_1_graphics_322,x:294.3,y:304.9}).wait(1).to({graphics:mask_1_graphics_323,x:293.8,y:305.4}).wait(1).to({graphics:mask_1_graphics_324,x:293.2,y:305.9}).wait(1).to({graphics:mask_1_graphics_325,x:292.6,y:306.4}).wait(1).to({graphics:mask_1_graphics_326,x:292.1,y:307}).wait(1).to({graphics:mask_1_graphics_327,x:291.5,y:307.5}).wait(1).to({graphics:mask_1_graphics_328,x:291,y:308}).wait(1).to({graphics:mask_1_graphics_329,x:290.4,y:308.5}).wait(1).to({graphics:mask_1_graphics_330,x:289.8,y:309.1}).wait(1).to({graphics:mask_1_graphics_331,x:289.3,y:309.6}).wait(1).to({graphics:mask_1_graphics_332,x:288.7,y:310.1}).wait(1).to({graphics:mask_1_graphics_333,x:288.2,y:310.6}).wait(1).to({graphics:mask_1_graphics_334,x:287.6,y:311.2}).wait(1).to({graphics:mask_1_graphics_335,x:287,y:311.7}).wait(1).to({graphics:mask_1_graphics_336,x:286.5,y:312.2}).wait(1).to({graphics:mask_1_graphics_337,x:285.9,y:312.7}).wait(1).to({graphics:mask_1_graphics_338,x:285.3,y:313.3}).wait(1).to({graphics:mask_1_graphics_339,x:284.8,y:313.8}).wait(1).to({graphics:mask_1_graphics_340,x:284.2,y:314.3}).wait(1).to({graphics:mask_1_graphics_341,x:283.7,y:314.8}).wait(1).to({graphics:mask_1_graphics_342,x:283.1,y:315.4}).wait(1).to({graphics:mask_1_graphics_343,x:282.5,y:315.9}).wait(1).to({graphics:mask_1_graphics_344,x:282,y:316.4}).wait(1).to({graphics:mask_1_graphics_345,x:281.4,y:317}).wait(1).to({graphics:mask_1_graphics_346,x:280.8,y:317.5}).wait(1).to({graphics:mask_1_graphics_347,x:280.3,y:318}).wait(1).to({graphics:mask_1_graphics_348,x:279.7,y:318.5}).wait(1).to({graphics:mask_1_graphics_349,x:279.2,y:319.1}).wait(1).to({graphics:mask_1_graphics_350,x:278.6,y:319.6}).wait(1).to({graphics:mask_1_graphics_351,x:278,y:320.1}).wait(1).to({graphics:mask_1_graphics_352,x:277.5,y:320.6}).wait(1).to({graphics:mask_1_graphics_353,x:276.9,y:321.2}).wait(1).to({graphics:mask_1_graphics_354,x:276.3,y:321.7}).wait(1).to({graphics:mask_1_graphics_355,x:275.8,y:322.2}).wait(1).to({graphics:mask_1_graphics_356,x:275.2,y:322.7}).wait(1).to({graphics:mask_1_graphics_357,x:274.7,y:323.3}).wait(1).to({graphics:mask_1_graphics_358,x:274.1,y:323.8}).wait(1).to({graphics:mask_1_graphics_359,x:273.5,y:324.3}).wait(1).to({graphics:mask_1_graphics_360,x:273,y:324.8}).wait(1).to({graphics:mask_1_graphics_361,x:272.4,y:325.4}).wait(1).to({graphics:mask_1_graphics_362,x:271.9,y:325.9}).wait(1).to({graphics:mask_1_graphics_363,x:271.3,y:326.4}).wait(1).to({graphics:mask_1_graphics_364,x:270.7,y:326.9}).wait(1).to({graphics:mask_1_graphics_365,x:270.2,y:327.5}).wait(1).to({graphics:mask_1_graphics_366,x:269.6,y:328}).wait(1).to({graphics:mask_1_graphics_367,x:269,y:328.5}).wait(1).to({graphics:mask_1_graphics_368,x:268.5,y:329}).wait(1).to({graphics:mask_1_graphics_369,x:267.9,y:329.6}).wait(1).to({graphics:mask_1_graphics_370,x:267.3,y:330.1}).wait(1).to({graphics:mask_1_graphics_371,x:266.8,y:330.6}).wait(1).to({graphics:mask_1_graphics_372,x:266.2,y:331.2}).wait(1).to({graphics:mask_1_graphics_373,x:265.7,y:331.7}).wait(1).to({graphics:mask_1_graphics_374,x:265.1,y:332.2}).wait(1).to({graphics:mask_1_graphics_375,x:264.5,y:332.7}).wait(1).to({graphics:mask_1_graphics_376,x:264,y:333.3}).wait(1).to({graphics:mask_1_graphics_377,x:263.4,y:333.8}).wait(1).to({graphics:mask_1_graphics_378,x:190.5,y:222.6}).wait(217));

	// Layer 10
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(15,1,1).p("AvJOvIQ7vlQAVgUAVgVQByhtBxhwQA/g+A+g/QCViWChivQAEgFAEgFQBMhUBEhS");
	this.shape_3.setTransform(261.5,336.3);
	this.shape_3._off = true;

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(208).to({_off:false},0).wait(387));

	// Layer 9 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_87 = new cjs.Graphics().p("ARXZrQnYhYkQmMQkQmMBYnYQBWnOF9kPIUhd3QkkDDlPAAQhuAAhzgVg");
	var mask_2_graphics_88 = new cjs.Graphics().p("ARKZmQnWhikImRQkImSBinWQBfnMGDkHIT5eSQkeC3lBAAQh5AAh/gbg");
	var mask_2_graphics_89 = new cjs.Graphics().p("AQ9ZhQnVhsj/mXQj/mXBrnUQBqnKGIj+ITQesQkXCqk0AAQiFAAiKggg");
	var mask_2_graphics_90 = new cjs.Graphics().p("AQwZcQnSh2j3mcQj2mdB1nRQBznIGNj2ISmfGQkPCdkoAAQiQAAiVglg");
	var mask_2_graphics_91 = new cjs.Graphics().p("AQjZVQnPh/jumhQjumiB/nPQB8nFGTjtIR8feQkICRkbAAQibAAihgsg");
	var mask_2_graphics_92 = new cjs.Graphics().p("AQWZPQnMiJjlmmQjlmnCInMQCGnCGXjlIRSf1QkACHkPAAQimAAisgzg");
	var mask_2_graphics_93 = new cjs.Graphics().p("AQKZIQnJiTjdmrQjcmrCSnJQCPm/GdjdMAQnAgMQj5B8kCAAQiyAAi2g6g");
	var mask_2_graphics_94 = new cjs.Graphics().p("AP+ZAQnGicjUmvQjTmwCcnGQCZm8GgjUMAP8AgiQjwBxj3AAQi8AAjBhCg");
	var mask_2_graphics_95 = new cjs.Graphics().p("APyY4QnDiljKm0QjKm0ClnDQCim5GljLMAPQAg3QjnBnjsAAQjHAAjLhKg");
	var mask_2_graphics_96 = new cjs.Graphics().p("APnYwQnAivjAm4QjBm4Cum/QCrm2GpjCMAOkAhLQjeBdjgAAQjTAAjUhSg");
	var mask_2_graphics_97 = new cjs.Graphics().p("APcYnQm8i4i4m8Qi3m8C4m7QC0myGti5MAN3AhdQjVBVjVAAQjeAAjdhcg");
	var mask_2_graphics_98 = new cjs.Graphics().p("APRYeQm4jCium/QivnADBm3QC+muGxixMANJAhwQjLBMjKAAQjoAAjnhlg");
	var mask_2_graphics_99 = new cjs.Graphics().p("APGYUQmzjLilnDQilnDDKmzQDGmqG1inMAMcAiAQjBBEi/AAQj0AAjwhvg");
	var mask_2_graphics_100 = new cjs.Graphics().p("AO8YKQmvjUicnHQibnGDTmuQDPmnG4idMALuAiQQi3A8izAAQkAAAj4h5g");
	var mask_2_graphics_101 = new cjs.Graphics().p("AOyX/QmrjdiSnJQiSnKDdmpQDYmjG7iUMALAAigQitA0ioAAQkMAAkAiEg");
	var mask_2_graphics_102 = new cjs.Graphics().p("AOoX0QmmjmiInMQiInNDlmkQDhmeG+iLMAKRAiuQiiAtidAAQkYAAkIiPg");
	var mask_2_graphics_103 = new cjs.Graphics().p("AOfXoQmhjuh/nPQh+nQDtmfQDqmZHBiCMAJjAi7QiYAniSAAQkjAAkQibg");
	var mask_2_graphics_104 = new cjs.Graphics().p("AOWXcQmcj3h1nRQh1nSD3mbQDxmUHEh4MAI0AjHQiMAhiHAAQkwAAkXing");
	var mask_2_graphics_105 = new cjs.Graphics().p("AONXQQmXkAhrnUQhrnUD/mVQD6mPHGhvMAIFAjTQiAAbh8AAQk9AAkeizg");
	var mask_2_graphics_106 = new cjs.Graphics().p("AOEXDQmRkIhhnWQhhnWEHmQQEDmKHIhlMAHVAjdQh1AWhwAAQlKAAkljAg");
	var mask_2_graphics_107 = new cjs.Graphics().p("AN8W2QmLkQhYnZQhXnYEQmKQELmEHKhcMAGlAjnQhpARhlAAQlXAAkrjNg");
	var mask_2_graphics_108 = new cjs.Graphics().p("AN0WoQmFkYhOnaQhNnaEYmEQETl/HMhSMAF1AjvQhcANhaAAQlkABkyjcg");
	var mask_2_graphics_109 = new cjs.Graphics().p("ANtWaQmAkghDncQhEnbEgl/QEbl4HOhIMAFFAj1QhQALhOAAQlyAAk3jqg");
	var mask_2_graphics_110 = new cjs.Graphics().p("ANmWMQl6kpg5ncQg6ndEol4QEjlzHPg/MAEVAj8QhDAIhCAAQmBAAk8j4g");
	var mask_2_graphics_111 = new cjs.Graphics().p("ANfV9QlzkwgwneQgvneEwlyQEqlsHQg1MADlAkBQg3AFg1AAQmQAAlBkHg");
	var mask_2_graphics_112 = new cjs.Graphics().p("ANYVuQlsk4gmnfQglnfE3lrQEylmHRgrMAC1AkFQgqADgoAAQmgAAlGkWg");
	var mask_2_graphics_113 = new cjs.Graphics().p("ANSVeQlmlAgbnfQgcnfE/llQE6lfHRgiMACFAkIIg4ACQmwAAlKkmg");
	var mask_2_graphics_114 = new cjs.Graphics().p("ANMVOQlflHgRngQgSngFHleQFAlYHTgYMABUAkKIgdABQnBAAlOk2g");
	var mask_2_graphics_115 = new cjs.Graphics().p("ANHU+QlYlPgIngQgHngFOlXQFHlSHTgOMAAkAkMIgCAAQnSAAlRlGg");
	var mask_2_graphics_116 = new cjs.Graphics().p("AM8UtQlSlWADngQADngFVlQQFOlLHTgEMgANAkMQnTgJlKlOg");
	var mask_2_graphics_117 = new cjs.Graphics().p("AMfUcQlKlcAMngQANngFclJQFVlEHTAGMgA9AkLQnTgTlDlVg");
	var mask_2_graphics_118 = new cjs.Graphics().p("AMCULQlDljAXngQAXneFjlDQFck8HSAPMgBtAkJQnTgck8lcg");
	var mask_2_graphics_119 = new cjs.Graphics().p("ALmT6Qk7lqAgnfQAhneFqk7QFik1HTAZMgCfAkHQnRgnk1lig");
	var mask_2_graphics_120 = new cjs.Graphics().p("ALKTpQk0lxArneQArndFwkzQFpkuHSAjMgDPAkDQnRgxktlog");
	var mask_2_graphics_121 = new cjs.Graphics().p("AKuTYQkrl3A1ndQA0ncF3ksQFvkmHRAsMgD/Aj+QnQg6kmlug");
	var mask_2_graphics_122 = new cjs.Graphics().p("AKTTGQkkl9A/ncQA/nbF9kjQF1keHQA2MgEwAj4QnOhEkel1g");
	var mask_2_graphics_123 = new cjs.Graphics().p("AJ3S0QkbmDBJnaQBKnaGCkbQF8kWHOBAMgFhAjxQnNhOkWl7g");
	var mask_2_graphics_124 = new cjs.Graphics().p("AJdSiQkTmJBTnZQBTnXGJkTQGCkOHNBKMgGTAjpQnLhYkNmBg");
	var mask_2_graphics_125 = new cjs.Graphics().p("AJCSRQkKmQBdnWQBenWGOkLQGHkFHMBUMgHEAjfQnIhhkGmGg");
	var mask_2_graphics_126 = new cjs.Graphics().p("AIoR/QkBmVBnnVQBonTGUkCQGNj9HJBeMgH0AjVQnHhrj9mMg");
	var mask_2_graphics_127 = new cjs.Graphics().p("AIPRtQj5maBynTQBxnRGaj5QGSj0HHBnMgIkAjKQnEh1j1mRg");
	var mask_2_graphics_128 = new cjs.Graphics().p("AH2RbQjwmgB8nPQB7nPGfjwQGXjsHFByMgJUAi9QnCh/jsmWg");
	var mask_2_graphics_129 = new cjs.Graphics().p("AHeRJQjnmlCFnMQCGnMGkjoQGcjjHCB8MgKEAiwQm/iJjjmbg");
	var mask_2_graphics_130 = new cjs.Graphics().p("AHGQ3QjempCPnKQCQnJGpjfQGgjaHACFMgK0AiiQm8iSjamgg");
	var mask_2_graphics_131 = new cjs.Graphics().p("AGvQlQjVmuCZnHQCZnFGujWQGljRG9CPMgLkAiSQm4ibjRmlg");
	var mask_2_graphics_132 = new cjs.Graphics().p("AGYQTQjMmyCjnEQCjnCGyjMQGqjIG5CYMgMSAiCQm1iljImpg");
	var mask_2_graphics_133 = new cjs.Graphics().p("AGCQBQjCm2CsnAQCtm/G2jCQGui/G2ChMgNBAhxQmxiui/mug");
	var mask_2_graphics_134 = new cjs.Graphics().p("AFsPvQi4m6C2m8QC2m7G6i5QGyi2GzCrMgNvAheQmui3i2myg");
	var mask_2_graphics_135 = new cjs.Graphics().p("AFYPeQiwm/DAm4QC/m3G/ivQG1itGvC0MgOdAhLQmpjAism1g");
	var mask_2_graphics_136 = new cjs.Graphics().p("AFDPMQimnCDJm0QDJmzHCimQG6ijGqC+MgPKAg2QmljJijm5g");
	var mask_2_graphics_137 = new cjs.Graphics().p("AEvO6QicnGDTmvQDSmuHFicQG9iaGnDHMgP3AghQmhjTiam8g");
	var mask_2_graphics_138 = new cjs.Graphics().p("AEcOpQiSnJDcmrQDbmqHJiSQG/iQGjDPMgQkAgLQmcjbiQm/g");
	var mask_2_graphics_139 = new cjs.Graphics().p("AEKOXQiJnMDlmmQDkmlHMiIQHDiGGeDYIxQfzQmXjkiGnCg");
	var mask_2_graphics_140 = new cjs.Graphics().p("AD4OFQh/nODumhQDumgHOh/QHFh8GaDhIx7fbQmTjsh8nGg");
	var mask_2_graphics_141 = new cjs.Graphics().p("ADnN0Qh1nRD3mcQD2mbHRh1QHIhyGUDqIylfCQmOj1hynIg");
	var mask_2_graphics_142 = new cjs.Graphics().p("ADWNjQhrnUEAmVQD/mXHThrQHLhoGPDyIzQepQmIj+hpnKg");
	var mask_2_graphics_143 = new cjs.Graphics().p("ADGNRQhgnWEHmPQEImRHWhhQHNhfGJD7Iz6eOQmCkGhfnNg");
	var mask_2_graphics_144 = new cjs.Graphics().p("AC3NAQhXnYERmKQEQmLHYhWQHOhVGFEDI0jdyQl9kPhVnOg");
	var mask_2_graphics_145 = new cjs.Graphics().p("ACoMvQhMnZEZmEQEZmFHZhNQHQhLF/EMI1MdVQl3kXhLnQg");
	var mask_2_graphics_146 = new cjs.Graphics().p("ACaMeQhCnbEhl+QEhl/HbhCQHShBF5EUI10c3QlxkehBnSg");
	var mask_2_graphics_147 = new cjs.Graphics().p("ACNMOQg4ndEpl3QEql5Hcg4QHTg3FzEcI2bcZQlrkng3nSg");
	var mask_2_graphics_148 = new cjs.Graphics().p("ACAL9QgtndExlyQExlyHeguQHUgtFsEkI3Bb6QlkkugunUg");
	var mask_2_graphics_149 = new cjs.Graphics().p("AB0LtQgjnfE5lqQE5lsHegjQHVgjFnErI3obaQldk2gknUg");
	var mask_2_graphics_150 = new cjs.Graphics().p("ABpLcQgZnfFBljQFBllHfgZQHVgZFgEzI4Na5QlXk9gZnWg");
	var mask_2_graphics_151 = new cjs.Graphics().p("ABfLMQgPnfFIldQFJleHfgPQHWgPFZE7I4xaXQlQlEgPnWg");
	var mask_2_graphics_152 = new cjs.Graphics().p("ABVK8QgEnfFPlWQFQlXHggEQHWgFFSFCI5VZ1QlJlMgFnWg");
	var mask_2_graphics_153 = new cjs.Graphics().p("ABLKqQAHngFYlNQFYlOHgAHQHWAHFKFKI59ZMQlBlTAHnWg");
	var mask_2_graphics_154 = new cjs.Graphics().p("ABBKYQATnfFhlFQFglFHfATQHWASFCFSI6lYjQk4lbASnWg");
	var mask_2_graphics_155 = new cjs.Graphics().p("AA5KHQAfnfFok8QFok9HfAfQHVAeE6FaI7MX4QkvliAenVg");
	var mask_2_graphics_156 = new cjs.Graphics().p("AAxJ1QArneFwkyQFwk0HeAqQHUAqExFiI7xXNQkmlrApnUg");
	var mask_2_graphics_157 = new cjs.Graphics().p("AAqJkQA3ndF4kpQF3krHdA2QHTA2EoFoI8VWhQkclxAznTg");
	var mask_2_graphics_158 = new cjs.Graphics().p("AAlJTQBCnbF/kgQF/khHbBCQHSBAEfFwI84V0QkUl4BAnSg");
	var mask_2_graphics_159 = new cjs.Graphics().p("AAgJDQBOnaGGkWQGGkYHZBOQHQBMEWF2I9aVHQkKl/BLnQg");
	var mask_2_graphics_160 = new cjs.Graphics().p("AAdIzQBZnYGNkNQGNkOHXBaQHOBXEMF9I96UYQkBmGBXnNg");
	var mask_2_graphics_161 = new cjs.Graphics().p("AAaIjQBlnVGUkDQGTkFHVBlQHLBkEDGDI+aToQj3mMBinLg");
	var mask_2_graphics_162 = new cjs.Graphics().p("AAYITQBxnSGaj5QGZj6HSBwQHKBvD5GJI+5S4QjtmSBtnJg");
	var mask_2_graphics_163 = new cjs.Graphics().p("AAYIEQB8nQGgjuQGfjwHPB8QHHB5DvGQI/WSHQjjmYB5nGg");
	var mask_2_graphics_164 = new cjs.Graphics().p("AAYH1QCInMGljlQGmjlHLCHQHECFDlGWI/yRUQjZmdCEnDg");
	var mask_2_graphics_165 = new cjs.Graphics().p("AAZHnQCTnJGrjaQGrjbHJCSQG/CQDcGcMggNAQhQjPmiCPm/g");
	var mask_2_graphics_166 = new cjs.Graphics().p("AAbHYQCfnFGwjPQGwjRHFCeQG8CcDRGgMggmAPvQjEmoCZm8g");
	var mask_2_graphics_167 = new cjs.Graphics().p("AAfHLQCpnBG1jFQG2jGHACpQG4CmDHGmMgg/AO7Qi5mtClm3g");
	var mask_2_graphics_168 = new cjs.Graphics().p("AAjG9QC0m8G6i6QG6i7G9C0QG0CxC8GqMghWAOGQivmwCwm0g");
	var mask_2_graphics_169 = new cjs.Graphics().p("AAoGwQDAm3G+iwQG/iwG3DAQGwC6CxGwMghrANRQikm1C6mvg");
	var mask_2_graphics_170 = new cjs.Graphics().p("AAuGkQDLmyHCilQHDilGzDKQGrDFCmG0Mgh/AMcQiam5DFmqg");
	var mask_2_graphics_171 = new cjs.Graphics().p("AA1GXQDVmtHHiZQHHiaGtDVQGmDPCcG5MgiSALlQiPm8DPmmg");
	var mask_2_graphics_172 = new cjs.Graphics().p("AA9GMQDgmoHKiOQHLiPGoDgQGgDZCSG8MgikAKwQiEnADZmgg");
	var mask_2_graphics_173 = new cjs.Graphics().p("ABGGAQDqmiHOiDQHOiDGjDqQGaDkCHG/Mgi0AJ5Qh5nDDjmbg");
	var mask_2_graphics_174 = new cjs.Graphics().p("ABQF1QD1mcHRh3QHQh4GdD0QGVDuB7HDMgjCAJBQhunGDtmVg");
	var mask_2_graphics_175 = new cjs.Graphics().p("ABbFrQD/mWHThsQHUhsGXD+QGPD4BwHGMgjRAIJQhinID3mPg");
	var mask_2_graphics_176 = new cjs.Graphics().p("ABnFhQEJmQHWhgQHWhhGQEHQGJEDBlHIMgjdAHSQhXnLEBmIg");
	var mask_2_graphics_177 = new cjs.Graphics().p("AB0FXQESmJHZhUQHYhVGKERQGCEMBaHLMgjoAGZQhMnNELmCg");
	var mask_2_graphics_178 = new cjs.Graphics().p("ACCFOQEcmCHahJQHbhJGCEaQF8EWBOHNMgjxAFhQhBnOEVl8g");
	var mask_2_graphics_179 = new cjs.Graphics().p("ACQFFQEml6Hcg+QHcg9F8EkQF0EfBDHOMgj5AEpQg1nQEdl1g");
	var mask_2_graphics_180 = new cjs.Graphics().p("ACgE9QEvlzHdgyQHegxF0EtQFtEoA4HQMgkAADwQgqnSEnltg");
	var mask_2_graphics_181 = new cjs.Graphics().p("ACxE2QE3lsHfgmQHegmFtE2QFmEyAsHRMgkFAC2QgenSEwllg");
	var mask_2_graphics_182 = new cjs.Graphics().p("ADCEuQFBlkHfgaQHfgaFlFAQFfE6AgHSMgkJAB9QgTnTE5leg");
	var mask_2_graphics_183 = new cjs.Graphics().p("ADUEoQFJlcHggOQHggPFdFIQFWFDAVHTMgkLABEQgHnTFBlWg");
	var mask_2_graphics_184 = new cjs.Graphics().p("AhnQ/QAHnTFLlNQFUlSHgABQHgAAFTFSQFNFNAGHTg");
	var mask_2_graphics_185 = new cjs.Graphics().p("AhmQKQAVnTFVlCQFelHHgAPQHgAOFIFdQFDFXgIHTg");
	var mask_2_graphics_186 = new cjs.Graphics().p("AhkPWQAjnSFfk4QFnk9HgAeQHfAdE+FmQE3FhgVHSg");
	var mask_2_graphics_187 = new cjs.Graphics().p("AhiOhQAxnQFpktQFxkyHeAsQHeAsEzFvQEtFqgkHSg");
	var mask_2_graphics_188 = new cjs.Graphics().p("AheNtQA/nPFxkiQF7kmHcA6QHdA6EnF5QEiFzgxHQg");
	var mask_2_graphics_189 = new cjs.Graphics().p("AhZM5QBNnNF6kWQGDkbHbBIQHaBJEcGCQEXF7hAHPg");
	var mask_2_graphics_190 = new cjs.Graphics().p("AhTMFQBanKGDkLQGLkPHZBXQHYBXEQGKQELGDhOHNg");
	var mask_2_graphics_191 = new cjs.Graphics().p("AhMLSQBnnIGLj/QGUkDHVBlQHWBlEEGSQD/GMhbHKg");
	var mask_2_graphics_192 = new cjs.Graphics().p("AhEKfQB1nEGTjzQGbj4HSB0QHSBzD4GaQDzGThpHHg");
	var mask_2_graphics_193 = new cjs.Graphics().p("Ag7JsQCDnBGZjmQGjjrHOCCQHPCBDrGhQDnGah3HEg");
	var mask_2_graphics_194 = new cjs.Graphics().p("AgxI5QCQm8GhjZQGpjfHLCQQHKCPDfGoQDaGhiFHAg");
	var mask_2_graphics_195 = new cjs.Graphics().p("AgmIHQCem3GnjNQGwjRHFCdQHGCdDSGuQDOGoiSG8g");
	var mask_2_graphics_196 = new cjs.Graphics().p("AgaHWQCrmzGti/QG2jFHBCrQHBCrDFG0QDAGuifG3g");
	var mask_2_graphics_197 = new cjs.Graphics().p("AgNGlQC4msGzi0QG8i3G7C4QG8C4C3G7QC0GzitGyg");
	var mask_2_graphics_198 = new cjs.Graphics().p("AAAF1QDGmmG4inQHBiqG2DGQG2DECqHBQCmG4i5Gtg");
	var mask_2_graphics_199 = new cjs.Graphics().p("AAPFFQDTmgG9iZQHGicGwDSQGvDSCdHGQCZG9jHGng");
	var mask_2_graphics_200 = new cjs.Graphics().p("AAfEWQDgmZHBiMQHLiOGpDfQGpDfCOHKQCMHCjTGhg");
	var mask_2_graphics_201 = new cjs.Graphics().p("AAxDoQDrmSHFh/QHPiAGiDsQGjDsCAHOQB+HGjgGag");
	var mask_2_graphics_202 = new cjs.Graphics().p("ABDC7QD3mMHJhwQHThyGbD5QGbD4ByHSQBwHJjsGTg");
	var mask_2_graphics_203 = new cjs.Graphics().p("ABWCOQEDmDHMhjQHWhkGTEFQGTEEBlHWQBiHMj4GMg");
	var mask_2_graphics_204 = new cjs.Graphics().p("ABqBjQEPl8HPhVQHYhWGLESQGLEQBXHYQBUHPkEGFg");
	var mask_2_graphics_205 = new cjs.Graphics().p("AB+A4QEbl0HRhGQHbhIGDEdQGDEcBHHbQBHHSkQF8g");
	var mask_2_graphics_206 = new cjs.Graphics().p("ACUAOQEmlrHTg4QHdg6F6EpQF6EoA5HcQA4HUkbF0g");
	var mask_2_graphics_207 = new cjs.Graphics().p("ACqgaQExljHVgqQHegrFxE0QFxEzArHeQAqHVkmFsg");
	var mask_2_graphics_208 = new cjs.Graphics().p("ADChCQE7lZHWgdQHfgcFoE/QFnE+AcHfQAcHWkxFjg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(87).to({graphics:mask_2_graphics_87,x:196.3,y:166.4}).wait(1).to({graphics:mask_2_graphics_88,x:195.3,y:166.5}).wait(1).to({graphics:mask_2_graphics_89,x:194.3,y:166.5}).wait(1).to({graphics:mask_2_graphics_90,x:193.2,y:166.5}).wait(1).to({graphics:mask_2_graphics_91,x:192.2,y:166.5}).wait(1).to({graphics:mask_2_graphics_92,x:191.1,y:166.6}).wait(1).to({graphics:mask_2_graphics_93,x:190.1,y:166.6}).wait(1).to({graphics:mask_2_graphics_94,x:189,y:166.6}).wait(1).to({graphics:mask_2_graphics_95,x:187.9,y:166.6}).wait(1).to({graphics:mask_2_graphics_96,x:186.8,y:166.6}).wait(1).to({graphics:mask_2_graphics_97,x:185.7,y:166.7}).wait(1).to({graphics:mask_2_graphics_98,x:184.5,y:166.7}).wait(1).to({graphics:mask_2_graphics_99,x:183.4,y:166.7}).wait(1).to({graphics:mask_2_graphics_100,x:182.3,y:166.7}).wait(1).to({graphics:mask_2_graphics_101,x:181.1,y:166.7}).wait(1).to({graphics:mask_2_graphics_102,x:179.9,y:166.7}).wait(1).to({graphics:mask_2_graphics_103,x:178.8,y:166.7}).wait(1).to({graphics:mask_2_graphics_104,x:177.6,y:166.7}).wait(1).to({graphics:mask_2_graphics_105,x:176.4,y:166.7}).wait(1).to({graphics:mask_2_graphics_106,x:175.2,y:166.7}).wait(1).to({graphics:mask_2_graphics_107,x:174,y:166.7}).wait(1).to({graphics:mask_2_graphics_108,x:172.8,y:166.7}).wait(1).to({graphics:mask_2_graphics_109,x:171.6,y:166.8}).wait(1).to({graphics:mask_2_graphics_110,x:170.4,y:166.8}).wait(1).to({graphics:mask_2_graphics_111,x:169.2,y:166.8}).wait(1).to({graphics:mask_2_graphics_112,x:168,y:166.8}).wait(1).to({graphics:mask_2_graphics_113,x:166.8,y:166.8}).wait(1).to({graphics:mask_2_graphics_114,x:165.6,y:166.8}).wait(1).to({graphics:mask_2_graphics_115,x:164.4,y:166.8}).wait(1).to({graphics:mask_2_graphics_116,x:163.8,y:166.8}).wait(1).to({graphics:mask_2_graphics_117,x:165,y:166.8}).wait(1).to({graphics:mask_2_graphics_118,x:166.2,y:166.7}).wait(1).to({graphics:mask_2_graphics_119,x:167.5,y:166.7}).wait(1).to({graphics:mask_2_graphics_120,x:168.7,y:166.6}).wait(1).to({graphics:mask_2_graphics_121,x:169.9,y:166.4}).wait(1).to({graphics:mask_2_graphics_122,x:171.1,y:166.3}).wait(1).to({graphics:mask_2_graphics_123,x:172.3,y:166.1}).wait(1).to({graphics:mask_2_graphics_124,x:173.6,y:165.9}).wait(1).to({graphics:mask_2_graphics_125,x:174.8,y:165.6}).wait(1).to({graphics:mask_2_graphics_126,x:176,y:165.4}).wait(1).to({graphics:mask_2_graphics_127,x:177.2,y:165.1}).wait(1).to({graphics:mask_2_graphics_128,x:178.4,y:164.8}).wait(1).to({graphics:mask_2_graphics_129,x:179.6,y:164.5}).wait(1).to({graphics:mask_2_graphics_130,x:180.8,y:164.1}).wait(1).to({graphics:mask_2_graphics_131,x:182,y:163.7}).wait(1).to({graphics:mask_2_graphics_132,x:183.1,y:163.3}).wait(1).to({graphics:mask_2_graphics_133,x:184.3,y:162.9}).wait(1).to({graphics:mask_2_graphics_134,x:185.5,y:162.4}).wait(1).to({graphics:mask_2_graphics_135,x:186.6,y:161.9}).wait(1).to({graphics:mask_2_graphics_136,x:187.7,y:161.4}).wait(1).to({graphics:mask_2_graphics_137,x:188.9,y:160.9}).wait(1).to({graphics:mask_2_graphics_138,x:190,y:160.3}).wait(1).to({graphics:mask_2_graphics_139,x:191.1,y:159.7}).wait(1).to({graphics:mask_2_graphics_140,x:192.2,y:159.1}).wait(1).to({graphics:mask_2_graphics_141,x:193.2,y:158.5}).wait(1).to({graphics:mask_2_graphics_142,x:194.3,y:157.9}).wait(1).to({graphics:mask_2_graphics_143,x:195.3,y:157.2}).wait(1).to({graphics:mask_2_graphics_144,x:196.4,y:156.5}).wait(1).to({graphics:mask_2_graphics_145,x:197.4,y:155.8}).wait(1).to({graphics:mask_2_graphics_146,x:198.4,y:155}).wait(1).to({graphics:mask_2_graphics_147,x:199.4,y:154.3}).wait(1).to({graphics:mask_2_graphics_148,x:200.3,y:153.5}).wait(1).to({graphics:mask_2_graphics_149,x:201.3,y:152.7}).wait(1).to({graphics:mask_2_graphics_150,x:202.2,y:151.9}).wait(1).to({graphics:mask_2_graphics_151,x:203.1,y:151}).wait(1).to({graphics:mask_2_graphics_152,x:204,y:150.2}).wait(1).to({graphics:mask_2_graphics_153,x:205,y:149.1}).wait(1).to({graphics:mask_2_graphics_154,x:206,y:148.1}).wait(1).to({graphics:mask_2_graphics_155,x:207,y:147}).wait(1).to({graphics:mask_2_graphics_156,x:207.9,y:146}).wait(1).to({graphics:mask_2_graphics_157,x:208.8,y:144.8}).wait(1).to({graphics:mask_2_graphics_158,x:209.7,y:143.7}).wait(1).to({graphics:mask_2_graphics_159,x:210.5,y:142.6}).wait(1).to({graphics:mask_2_graphics_160,x:211.3,y:141.4}).wait(1).to({graphics:mask_2_graphics_161,x:212.1,y:140.2}).wait(1).to({graphics:mask_2_graphics_162,x:212.9,y:139}).wait(1).to({graphics:mask_2_graphics_163,x:213.6,y:137.8}).wait(1).to({graphics:mask_2_graphics_164,x:214.3,y:136.5}).wait(1).to({graphics:mask_2_graphics_165,x:215,y:135.2}).wait(1).to({graphics:mask_2_graphics_166,x:215.6,y:134}).wait(1).to({graphics:mask_2_graphics_167,x:216.2,y:132.7}).wait(1).to({graphics:mask_2_graphics_168,x:216.8,y:131.3}).wait(1).to({graphics:mask_2_graphics_169,x:217.3,y:130}).wait(1).to({graphics:mask_2_graphics_170,x:217.8,y:128.7}).wait(1).to({graphics:mask_2_graphics_171,x:218.3,y:127.3}).wait(1).to({graphics:mask_2_graphics_172,x:218.8,y:126}).wait(1).to({graphics:mask_2_graphics_173,x:219.2,y:124.6}).wait(1).to({graphics:mask_2_graphics_174,x:219.5,y:123.2}).wait(1).to({graphics:mask_2_graphics_175,x:219.9,y:121.8}).wait(1).to({graphics:mask_2_graphics_176,x:220.2,y:120.4}).wait(1).to({graphics:mask_2_graphics_177,x:220.5,y:119}).wait(1).to({graphics:mask_2_graphics_178,x:220.7,y:117.6}).wait(1).to({graphics:mask_2_graphics_179,x:220.9,y:116.2}).wait(1).to({graphics:mask_2_graphics_180,x:221.1,y:114.8}).wait(1).to({graphics:mask_2_graphics_181,x:221.2,y:113.3}).wait(1).to({graphics:mask_2_graphics_182,x:221.3,y:111.9}).wait(1).to({graphics:mask_2_graphics_183,x:221.3,y:110.5}).wait(1).to({graphics:mask_2_graphics_184,x:221.3,y:108.8}).wait(1).to({graphics:mask_2_graphics_185,x:221.3,y:110.6}).wait(1).to({graphics:mask_2_graphics_186,x:221.3,y:112.3}).wait(1).to({graphics:mask_2_graphics_187,x:221.3,y:114.1}).wait(1).to({graphics:mask_2_graphics_188,x:221.3,y:115.8}).wait(1).to({graphics:mask_2_graphics_189,x:221.3,y:117.6}).wait(1).to({graphics:mask_2_graphics_190,x:221.3,y:119.3}).wait(1).to({graphics:mask_2_graphics_191,x:221.3,y:121}).wait(1).to({graphics:mask_2_graphics_192,x:221.3,y:122.7}).wait(1).to({graphics:mask_2_graphics_193,x:221.3,y:124.4}).wait(1).to({graphics:mask_2_graphics_194,x:221.2,y:126.1}).wait(1).to({graphics:mask_2_graphics_195,x:221.2,y:127.8}).wait(1).to({graphics:mask_2_graphics_196,x:221.2,y:129.4}).wait(1).to({graphics:mask_2_graphics_197,x:221.2,y:131}).wait(1).to({graphics:mask_2_graphics_198,x:221.2,y:132.6}).wait(1).to({graphics:mask_2_graphics_199,x:221.1,y:134.2}).wait(1).to({graphics:mask_2_graphics_200,x:221.1,y:135.8}).wait(1).to({graphics:mask_2_graphics_201,x:221.1,y:137.3}).wait(1).to({graphics:mask_2_graphics_202,x:221,y:138.8}).wait(1).to({graphics:mask_2_graphics_203,x:221,y:140.3}).wait(1).to({graphics:mask_2_graphics_204,x:220.9,y:141.8}).wait(1).to({graphics:mask_2_graphics_205,x:220.9,y:143.2}).wait(1).to({graphics:mask_2_graphics_206,x:220.8,y:144.6}).wait(1).to({graphics:mask_2_graphics_207,x:220.8,y:146}).wait(1).to({graphics:mask_2_graphics_208,x:220.8,y:147.3}).wait(387));

	// layer
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(15,1,1).p("AFgHEQAhgrAegqQANgSAMgUQASggAOgjQA0iKggi1Qgtj/inhZQimhZjEBGQjEBHjhCs");
	this.shape_4.setTransform(330.4,187.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(15,1,1).p("Aw2WdIQ7vnQAVgUAUgUQByhtBxhwQA/g+A/g/QCViVCgiwQAEgEAEgFQBqh1BZhxQAEgFAEgFQAlgwAigvQANgSAMgUQASggAOgjQA0iKggi2Qgtj/inhZQimhZjFBGQjEBHjhCs");
	this.shape_5.setTransform(272.9,286.3);

	var maskedShapeInstanceList = [this.shape_4,this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4}]},87).to({state:[{t:this.shape_5}]},53).wait(455));

	// arrow
	this.instance_2 = new lib.ar4("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(417.5,172.3,1.012,1.012,-138.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(87).to({_off:false},0).wait(508));

	// mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_6 = new cjs.Graphics().p("ATyItIBNkGIDAA4IhMEGg");
	var mask_3_graphics_7 = new cjs.Graphics().p("AiHBvIBQkUIC/A3IhQEVg");
	var mask_3_graphics_8 = new cjs.Graphics().p("AiKB2IBWkjIC+A4IhUEjg");
	var mask_3_graphics_9 = new cjs.Graphics().p("AiLB+IBZkzIC+A4IhZEzg");
	var mask_3_graphics_10 = new cjs.Graphics().p("AiOCFIBelBIC/A4IheFBg");
	var mask_3_graphics_11 = new cjs.Graphics().p("AiQCNIBilRIC/A4IhiFRg");
	var mask_3_graphics_12 = new cjs.Graphics().p("AiSCUIBmlfIC/A3IhmFgg");
	var mask_3_graphics_13 = new cjs.Graphics().p("AiUCcIBrlvIC+A4IhrFvg");
	var mask_3_graphics_14 = new cjs.Graphics().p("AiXCkIBwl/IC+A4IhuF/g");
	var mask_3_graphics_15 = new cjs.Graphics().p("AiZCrIB0mNIC/A4Ih0GNg");
	var mask_3_graphics_16 = new cjs.Graphics().p("AibCyIB4mcIC/A5Ih4Gcg");
	var mask_3_graphics_17 = new cjs.Graphics().p("AidC6IB8mrIC/A4Ih8Grg");
	var mask_3_graphics_18 = new cjs.Graphics().p("AigDCICCm7IC+A4IiAG7g");
	var mask_3_graphics_19 = new cjs.Graphics().p("AihDJICFnJIC+A4IiFHJg");
	var mask_3_graphics_20 = new cjs.Graphics().p("AikDRICKnZIC/A4IiKHZg");
	var mask_3_graphics_21 = new cjs.Graphics().p("AimDZICOnpIC/A5IiOHng");
	var mask_3_graphics_22 = new cjs.Graphics().p("AioDgICSn3IC/A4IiSH3g");
	var mask_3_graphics_23 = new cjs.Graphics().p("AiqDnICXoGIC+A5IiXIFg");
	var mask_3_graphics_24 = new cjs.Graphics().p("AitDvICcoVIC+A4IiaIVg");
	var mask_3_graphics_25 = new cjs.Graphics().p("AivD3ICgolIC/A4IigIlg");
	var mask_3_graphics_26 = new cjs.Graphics().p("AixD+ICkozIC/A4IikIzg");
	var mask_3_graphics_27 = new cjs.Graphics().p("AizEGICopDIC/A4IioJDg");
	var mask_3_graphics_28 = new cjs.Graphics().p("Ai2EOICupTIC+A5IisJSg");
	var mask_3_graphics_29 = new cjs.Graphics().p("Ai3EVICxphIC+A4IixJhg");
	var mask_3_graphics_30 = new cjs.Graphics().p("Ai6EdIC2pxIC/A4Ii2Jxg");
	var mask_3_graphics_31 = new cjs.Graphics().p("Ai8EkIC6p/IC/A4Ii6J/g");
	var mask_3_graphics_32 = new cjs.Graphics().p("Ai+EsIC+qPIC/A4Ii+KPg");
	var mask_3_graphics_33 = new cjs.Graphics().p("AjAEzIDBqdIDAA4IjBKdg");
	var mask_3_graphics_34 = new cjs.Graphics().p("AjCE7IDFqtIDAA4IjFKtg");
	var mask_3_graphics_35 = new cjs.Graphics().p("AjEFCIDJq7IDAA4IjJK7g");
	var mask_3_graphics_36 = new cjs.Graphics().p("AjHFKIDPrLIDAA4IjPLLg");
	var mask_3_graphics_37 = new cjs.Graphics().p("AjJFRIDTrZIDAA3IjTLag");
	var mask_3_graphics_38 = new cjs.Graphics().p("AjLFZIDXrpIDAA4IjXLpg");
	var mask_3_graphics_39 = new cjs.Graphics().p("AjNFhIDbr4IDAA3IjbL5g");
	var mask_3_graphics_40 = new cjs.Graphics().p("AjQFoIDgsHIDAA4IjgMHg");
	var mask_3_graphics_41 = new cjs.Graphics().p("AjSFwIDlsXIDAA4IjlMXg");
	var mask_3_graphics_42 = new cjs.Graphics().p("AjUF3IDpslIDAA4IjpMlg");
	var mask_3_graphics_43 = new cjs.Graphics().p("AjWF/IDts1IDAA4IjtM1g");
	var mask_3_graphics_44 = new cjs.Graphics().p("AjYGGIDxtDIDAA3IjxNEg");
	var mask_3_graphics_45 = new cjs.Graphics().p("AjaGOID1tTIDAA4Ij2NTg");
	var mask_3_graphics_46 = new cjs.Graphics().p("AjdGWID7tjIDAA4Ij7Njg");
	var mask_3_graphics_47 = new cjs.Graphics().p("AjfGdID/txIDAA4Ij/Nxg");
	var mask_3_graphics_48 = new cjs.Graphics().p("AjhGlIEDuBIDAA4IkDOBg");
	var mask_3_graphics_49 = new cjs.Graphics().p("AjjGsIEHuPIDAA3IkHORg");
	var mask_3_graphics_50 = new cjs.Graphics().p("AjmG0IEMufIDAA4IkLOfg");
	var mask_3_graphics_51 = new cjs.Graphics().p("AjoG8IERuuIDAA3IkROvg");
	var mask_3_graphics_52 = new cjs.Graphics().p("AjqHDIEVu9IDAA4IkVO9g");
	var mask_3_graphics_53 = new cjs.Graphics().p("AjsHLIEZvMIDAA4IkZPMg");
	var mask_3_graphics_54 = new cjs.Graphics().p("AjuHSIEdvbIDAA4IkdPbg");
	var mask_3_graphics_55 = new cjs.Graphics().p("AjwHZIEhvpIDAA4IkiPpg");
	var mask_3_graphics_56 = new cjs.Graphics().p("AjzHhIEnv5IDAA4IknP5g");
	var mask_3_graphics_57 = new cjs.Graphics().p("Aj1HpIErwJIDAA4IkrQJg");
	var mask_3_graphics_58 = new cjs.Graphics().p("Aj3HwIEvwXIDAA4IkvQXg");
	var mask_3_graphics_59 = new cjs.Graphics().p("Aj5H4IEzwnIDAA4IkzQng");
	var mask_3_graphics_60 = new cjs.Graphics().p("AQFPGIE5w2IDAA4Ik5Q2g");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(6).to({graphics:mask_3_graphics_6,x:153.5,y:61.3}).wait(1).to({graphics:mask_3_graphics_7,x:293.3,y:107.5}).wait(1).to({graphics:mask_3_graphics_8,x:293.1,y:108.2}).wait(1).to({graphics:mask_3_graphics_9,x:292.9,y:109}).wait(1).to({graphics:mask_3_graphics_10,x:292.6,y:109.7}).wait(1).to({graphics:mask_3_graphics_11,x:292.4,y:110.5}).wait(1).to({graphics:mask_3_graphics_12,x:292.2,y:111.3}).wait(1).to({graphics:mask_3_graphics_13,x:292,y:112}).wait(1).to({graphics:mask_3_graphics_14,x:291.8,y:112.8}).wait(1).to({graphics:mask_3_graphics_15,x:291.5,y:113.6}).wait(1).to({graphics:mask_3_graphics_16,x:291.3,y:114.3}).wait(1).to({graphics:mask_3_graphics_17,x:291.1,y:115.1}).wait(1).to({graphics:mask_3_graphics_18,x:290.9,y:115.8}).wait(1).to({graphics:mask_3_graphics_19,x:290.7,y:116.6}).wait(1).to({graphics:mask_3_graphics_20,x:290.4,y:117.3}).wait(1).to({graphics:mask_3_graphics_21,x:290.2,y:118.1}).wait(1).to({graphics:mask_3_graphics_22,x:290,y:118.9}).wait(1).to({graphics:mask_3_graphics_23,x:289.8,y:119.6}).wait(1).to({graphics:mask_3_graphics_24,x:289.6,y:120.4}).wait(1).to({graphics:mask_3_graphics_25,x:289.3,y:121.1}).wait(1).to({graphics:mask_3_graphics_26,x:289.1,y:121.9}).wait(1).to({graphics:mask_3_graphics_27,x:288.9,y:122.7}).wait(1).to({graphics:mask_3_graphics_28,x:288.7,y:123.4}).wait(1).to({graphics:mask_3_graphics_29,x:288.5,y:124.2}).wait(1).to({graphics:mask_3_graphics_30,x:288.2,y:124.9}).wait(1).to({graphics:mask_3_graphics_31,x:288,y:125.7}).wait(1).to({graphics:mask_3_graphics_32,x:287.8,y:126.4}).wait(1).to({graphics:mask_3_graphics_33,x:287.6,y:127.2}).wait(1).to({graphics:mask_3_graphics_34,x:287.3,y:128}).wait(1).to({graphics:mask_3_graphics_35,x:287.1,y:128.7}).wait(1).to({graphics:mask_3_graphics_36,x:286.9,y:129.5}).wait(1).to({graphics:mask_3_graphics_37,x:286.7,y:130.3}).wait(1).to({graphics:mask_3_graphics_38,x:286.5,y:131}).wait(1).to({graphics:mask_3_graphics_39,x:286.2,y:131.8}).wait(1).to({graphics:mask_3_graphics_40,x:286,y:132.5}).wait(1).to({graphics:mask_3_graphics_41,x:285.8,y:133.3}).wait(1).to({graphics:mask_3_graphics_42,x:285.6,y:134}).wait(1).to({graphics:mask_3_graphics_43,x:285.4,y:134.8}).wait(1).to({graphics:mask_3_graphics_44,x:285.1,y:135.6}).wait(1).to({graphics:mask_3_graphics_45,x:284.9,y:136.3}).wait(1).to({graphics:mask_3_graphics_46,x:284.7,y:137.1}).wait(1).to({graphics:mask_3_graphics_47,x:284.5,y:137.8}).wait(1).to({graphics:mask_3_graphics_48,x:284.3,y:138.6}).wait(1).to({graphics:mask_3_graphics_49,x:284,y:139.4}).wait(1).to({graphics:mask_3_graphics_50,x:283.8,y:140.1}).wait(1).to({graphics:mask_3_graphics_51,x:283.6,y:140.9}).wait(1).to({graphics:mask_3_graphics_52,x:283.4,y:141.6}).wait(1).to({graphics:mask_3_graphics_53,x:283.2,y:142.4}).wait(1).to({graphics:mask_3_graphics_54,x:282.9,y:143.2}).wait(1).to({graphics:mask_3_graphics_55,x:282.7,y:143.9}).wait(1).to({graphics:mask_3_graphics_56,x:282.5,y:144.7}).wait(1).to({graphics:mask_3_graphics_57,x:282.3,y:145.4}).wait(1).to({graphics:mask_3_graphics_58,x:282.1,y:146.2}).wait(1).to({graphics:mask_3_graphics_59,x:281.8,y:147}).wait(1).to({graphics:mask_3_graphics_60,x:153.4,y:102.2}).wait(535));

	// Layer 2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(15,1,1).p("ABeloIi7LR");
	this.shape_6.setTransform(280.1,155.5);
	this.shape_6._off = true;

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(6).to({_off:false},0).wait(589));

	// number
	this.instance_3 = new lib._2("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(275.9,275.1);
	this.instance_3.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(595));

	// Background
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#F59E9E").ss(3,1,1).p("EAq+Aq+MhV7AAAMAAAhV7MBV7AAAg");
	this.shape_7.setTransform(275,275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F6E7E7").s().p("Egq9Aq+MAAAhV7MBV7AAAMAAABV7g");
	this.shape_8.setTransform(275,275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).wait(595));

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