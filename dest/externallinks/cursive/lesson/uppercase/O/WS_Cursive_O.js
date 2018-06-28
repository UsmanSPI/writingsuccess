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
	this.shape.graphics.f("#FFFFFF").s().p("A0RVKQi2hUiCiWQiDiUhDjGQhDjHAAjiQAAibAhihIBhk4QBUjLELlqIDxjnQCEhoCPhKQCUhMCbgpQCggpCgAAQCUAACGAnQCHAmB1BKQB1BJBeBrQBeBrBCCHQDgAADHhcQCWhHCYiHIDcjOQBnheA9AAQBzAAAAB3QAAAugfAhQkxFLi/ByQiWBaibA1QiiA1imALQAZBoABCbQAACbgiCjIhhE4QjLGPiRCoIjyDoQiDBoiPBKQiTBMiYApQihAoigAAQjoAAi/hTgAosxcIj5BrQjuCCi7DjQi6DahrEJQhrEKAAEBQAACtAzCYQAzCZBgBzQBkB1CJA/QCSBDCvAAQCHAACGgkQCAgkB8hFQDyiBDDjlQC/jgBtkLQBwkPAAkEQAAiYgmh7IkYhPQiZg/iNh/QiqicgGiGQiEAFiEAogAE+t+Qibi1jBgwQAjBCB4BHIDBBcIAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-187.5,-143.7,375,287.5);


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


(lib.ar4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-48.7,-31.5,1,1,-17.5,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-94.4,guide:{path:[-47.9,-29.4,-30.4,37.2,47,28.6]}},89).wait(1));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AlhCZICwlVIBHAkIixFVg");
	var mask_graphics_1 = new cjs.Graphics().p("AiACWICwlVIBRAqIiwFVg");
	var mask_graphics_2 = new cjs.Graphics().p("AiFCTICvlVIBdAwIiwFVg");
	var mask_graphics_3 = new cjs.Graphics().p("AiLCQICvlVIBoA2IivFVg");
	var mask_graphics_4 = new cjs.Graphics().p("AiRCNICwlVIBzA8IiwFVg");
	var mask_graphics_5 = new cjs.Graphics().p("AiXCKICwlVIB/BCIiwFVg");
	var mask_graphics_6 = new cjs.Graphics().p("AicCHICvlVICKBIIivFVg");
	var mask_graphics_7 = new cjs.Graphics().p("AiiCEICwlVICVBOIivFVg");
	var mask_graphics_8 = new cjs.Graphics().p("AioCBICwlVIChBTIiwFVg");
	var mask_graphics_9 = new cjs.Graphics().p("AitB+ICvlVICtBZIiwFWg");
	var mask_graphics_10 = new cjs.Graphics().p("AizB7ICxlVIC2BgIiwFVg");
	var mask_graphics_11 = new cjs.Graphics().p("Ai5B5ICxlVIDCBkIixFVg");
	var mask_graphics_12 = new cjs.Graphics().p("Ai+B2ICwlVIDNBqIiwFVg");
	var mask_graphics_13 = new cjs.Graphics().p("AjEBzICwlVIDZBwIiwFVg");
	var mask_graphics_14 = new cjs.Graphics().p("AjKBwICxlVIDkB2IixFVg");
	var mask_graphics_15 = new cjs.Graphics().p("AjPBtICwlVIDvB8IiwFVg");
	var mask_graphics_16 = new cjs.Graphics().p("AjVBqICwlVID7CCIiwFVg");
	var mask_graphics_17 = new cjs.Graphics().p("AjbBnICxlVIEGCIIiwFVg");
	var mask_graphics_18 = new cjs.Graphics().p("AjgBkICwlVIESCOIixFVg");
	var mask_graphics_19 = new cjs.Graphics().p("AjmBhICwlVIEdCUIiwFVg");
	var mask_graphics_20 = new cjs.Graphics().p("AjsBeICxlVIEoCaIixFVg");
	var mask_graphics_21 = new cjs.Graphics().p("AjyBbICxlVIE0CgIixFVg");
	var mask_graphics_22 = new cjs.Graphics().p("Aj3BYICwlVIE/CmIiwFVg");
	var mask_graphics_23 = new cjs.Graphics().p("Aj9BVICxlVIFKCrIixFVg");
	var mask_graphics_24 = new cjs.Graphics().p("AkDBSICxlVIFWCyIixFVg");
	var mask_graphics_25 = new cjs.Graphics().p("AkIBPICwlVIFiC3IixFVg");
	var mask_graphics_26 = new cjs.Graphics().p("AkOBMICxlVIFsC9IiwFVg");
	var mask_graphics_27 = new cjs.Graphics().p("AkUBKICxlVIF4DCIixFVg");
	var mask_graphics_28 = new cjs.Graphics().p("AkZBHICwlVIGEDIIixFVg");
	var mask_graphics_29 = new cjs.Graphics().p("AkfBEICxlVIGODOIiwFVg");
	var mask_graphics_30 = new cjs.Graphics().p("AklBBICxlVIGaDUIixFVg");
	var mask_graphics_31 = new cjs.Graphics().p("AkqA+ICwlVIGlDaIiwFVg");
	var mask_graphics_32 = new cjs.Graphics().p("AkwA7ICwlVIGxDgIiwFVg");
	var mask_graphics_33 = new cjs.Graphics().p("Ak2A4ICxlVIG8DmIixFVg");
	var mask_graphics_34 = new cjs.Graphics().p("Ak7A1ICwlVIHHDsIiwFVg");
	var mask_graphics_35 = new cjs.Graphics().p("AlBAyICwlVIHTDyIiwFVg");
	var mask_graphics_36 = new cjs.Graphics().p("AlHAvICxlVIHeD4IiwFVg");
	var mask_graphics_37 = new cjs.Graphics().p("AlMAsICwlVIHqD+IixFVg");
	var mask_graphics_38 = new cjs.Graphics().p("AlSApICwlVIH1EEIiwFVg");
	var mask_graphics_39 = new cjs.Graphics().p("AlYAmICxlVIIAEKIixFVg");
	var mask_graphics_40 = new cjs.Graphics().p("AleAjICxlVIIMEPIixFVg");
	var mask_graphics_41 = new cjs.Graphics().p("AljAgICwlVIIXEWIiwFVg");
	var mask_graphics_42 = new cjs.Graphics().p("AlpAdICxlVIIiEcIixFVg");
	var mask_graphics_43 = new cjs.Graphics().p("AlvAbICxlVIIuEgIixFVg");
	var mask_graphics_44 = new cjs.Graphics().p("Al0AYICwlVII6EmIixFVg");
	var mask_graphics_45 = new cjs.Graphics().p("Al6AVICwlVIJFEsIiwFVg");
	var mask_graphics_46 = new cjs.Graphics().p("AmAASICwlVIJREzIiwFVg");
	var mask_graphics_47 = new cjs.Graphics().p("AmGAPICxlVIJcE4IixFVg");
	var mask_graphics_48 = new cjs.Graphics().p("AmMAMICxlVIJnE+IiwFVg");
	var mask_graphics_49 = new cjs.Graphics().p("AmRAJICwlVIJzFEIixFVg");
	var mask_graphics_50 = new cjs.Graphics().p("AmXAGICxlVIJ+FKIixFVg");
	var mask_graphics_51 = new cjs.Graphics().p("AmdADICxlVIKJFQIiwFVg");
	var mask_graphics_52 = new cjs.Graphics().p("AmiAAICwlVIKVFVIiwFWg");
	var mask_graphics_53 = new cjs.Graphics().p("AmogCICxlWIKgFbIixFWg");
	var mask_graphics_54 = new cjs.Graphics().p("AmugFICxlWIKsFhIixFWg");
	var mask_graphics_55 = new cjs.Graphics().p("AmzgIICwlWIK3FnIiwFWg");
	var mask_graphics_56 = new cjs.Graphics().p("Am5gLICwlWILDFtIixFWg");
	var mask_graphics_57 = new cjs.Graphics().p("Am/gOICxlWILOFzIixFWg");
	var mask_graphics_58 = new cjs.Graphics().p("AnEgRICwlWILZF5IiwFWg");
	var mask_graphics_59 = new cjs.Graphics().p("AnKgTICwlWILlF9IixFWg");
	var mask_graphics_60 = new cjs.Graphics().p("AnQgWICxlWILwGEIixFWg");
	var mask_graphics_61 = new cjs.Graphics().p("AnVgZICwlWIL7GJIiwFWg");
	var mask_graphics_62 = new cjs.Graphics().p("AnbgcICwlWIMHGPIiwFWg");
	var mask_graphics_63 = new cjs.Graphics().p("AnhgfICxlWIMSGVIixFWg");
	var mask_graphics_64 = new cjs.Graphics().p("AnmgiICwlWIMdGbIiwFWg");
	var mask_graphics_65 = new cjs.Graphics().p("AnsglICwlWIMpGhIiwFWg");
	var mask_graphics_66 = new cjs.Graphics().p("AnygoICxlWIM0GnIixFWg");
	var mask_graphics_67 = new cjs.Graphics().p("An4grICxlWIM/GtIiwFWg");
	var mask_graphics_68 = new cjs.Graphics().p("An9guICwlWINLGzIixFWg");
	var mask_graphics_69 = new cjs.Graphics().p("AoDgxICxlWINWG5IixFWg");
	var mask_graphics_70 = new cjs.Graphics().p("AoJg0ICxlWINhG/IiwFWg");
	var mask_graphics_71 = new cjs.Graphics().p("AoOg3ICwlWINtHFIiwFWg");
	var mask_graphics_72 = new cjs.Graphics().p("AoUg6ICxlWIN4HLIixFWg");
	var mask_graphics_73 = new cjs.Graphics().p("Aoag9ICxlWIOEHRIixFWg");
	var mask_graphics_74 = new cjs.Graphics().p("AofhAICwlWIOPHXIiwFWg");
	var mask_graphics_75 = new cjs.Graphics().p("AolhCICwlWIObHcIixFWg");
	var mask_graphics_76 = new cjs.Graphics().p("AorhFICxlWIOmHhIixFWg");
	var mask_graphics_77 = new cjs.Graphics().p("AowhIICwlWIOxHoIiwFWg");
	var mask_graphics_78 = new cjs.Graphics().p("Ao2hLICwlWIO9HuIixFWg");
	var mask_graphics_79 = new cjs.Graphics().p("Ao8hOICxlWIPIHzIixFWg");
	var mask_graphics_80 = new cjs.Graphics().p("ApBhRICwlWIPTH5IiwFWg");
	var mask_graphics_81 = new cjs.Graphics().p("ApHhUICwlWIPfH/IiwFWg");
	var mask_graphics_82 = new cjs.Graphics().p("ApNhXICxlWIPqIFIixFWg");
	var mask_graphics_83 = new cjs.Graphics().p("ApThaICxlWIP2ILIixFWg");
	var mask_graphics_84 = new cjs.Graphics().p("ApYhdICwlWIQBIRIiwFWg");
	var mask_graphics_85 = new cjs.Graphics().p("ApehgICxlWIQMIXIixFWg");
	var mask_graphics_86 = new cjs.Graphics().p("ApkhjICxlWIQXIdIiwFWg");
	var mask_graphics_87 = new cjs.Graphics().p("ApphmICwlWIQjIjIiwFWg");
	var mask_graphics_88 = new cjs.Graphics().p("ApvhpICxlWIQuIpIixFWg");
	var mask_graphics_89 = new cjs.Graphics().p("Ap1hsICxlWIQ6IvIixFWg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-35.4,y:-17.5}).wait(1).to({graphics:mask_graphics_1,x:-57.9,y:-17.1}).wait(1).to({graphics:mask_graphics_2,x:-57.4,y:-16.8}).wait(1).to({graphics:mask_graphics_3,x:-56.8,y:-16.6}).wait(1).to({graphics:mask_graphics_4,x:-56.2,y:-16.3}).wait(1).to({graphics:mask_graphics_5,x:-55.7,y:-16}).wait(1).to({graphics:mask_graphics_6,x:-55.1,y:-15.7}).wait(1).to({graphics:mask_graphics_7,x:-54.5,y:-15.4}).wait(1).to({graphics:mask_graphics_8,x:-54,y:-15.1}).wait(1).to({graphics:mask_graphics_9,x:-53.4,y:-14.8}).wait(1).to({graphics:mask_graphics_10,x:-52.8,y:-14.5}).wait(1).to({graphics:mask_graphics_11,x:-52.3,y:-14.2}).wait(1).to({graphics:mask_graphics_12,x:-51.7,y:-13.9}).wait(1).to({graphics:mask_graphics_13,x:-51.1,y:-13.6}).wait(1).to({graphics:mask_graphics_14,x:-50.6,y:-13.3}).wait(1).to({graphics:mask_graphics_15,x:-50,y:-13}).wait(1).to({graphics:mask_graphics_16,x:-49.4,y:-12.7}).wait(1).to({graphics:mask_graphics_17,x:-48.8,y:-12.4}).wait(1).to({graphics:mask_graphics_18,x:-48.3,y:-12.1}).wait(1).to({graphics:mask_graphics_19,x:-47.7,y:-11.9}).wait(1).to({graphics:mask_graphics_20,x:-47.1,y:-11.6}).wait(1).to({graphics:mask_graphics_21,x:-46.6,y:-11.3}).wait(1).to({graphics:mask_graphics_22,x:-46,y:-11}).wait(1).to({graphics:mask_graphics_23,x:-45.4,y:-10.7}).wait(1).to({graphics:mask_graphics_24,x:-44.9,y:-10.4}).wait(1).to({graphics:mask_graphics_25,x:-44.3,y:-10.1}).wait(1).to({graphics:mask_graphics_26,x:-43.7,y:-9.8}).wait(1).to({graphics:mask_graphics_27,x:-43.2,y:-9.5}).wait(1).to({graphics:mask_graphics_28,x:-42.6,y:-9.2}).wait(1).to({graphics:mask_graphics_29,x:-42,y:-8.9}).wait(1).to({graphics:mask_graphics_30,x:-41.5,y:-8.6}).wait(1).to({graphics:mask_graphics_31,x:-40.9,y:-8.3}).wait(1).to({graphics:mask_graphics_32,x:-40.3,y:-8}).wait(1).to({graphics:mask_graphics_33,x:-39.8,y:-7.7}).wait(1).to({graphics:mask_graphics_34,x:-39.2,y:-7.4}).wait(1).to({graphics:mask_graphics_35,x:-38.6,y:-7.2}).wait(1).to({graphics:mask_graphics_36,x:-38,y:-6.9}).wait(1).to({graphics:mask_graphics_37,x:-37.5,y:-6.6}).wait(1).to({graphics:mask_graphics_38,x:-36.9,y:-6.3}).wait(1).to({graphics:mask_graphics_39,x:-36.3,y:-6}).wait(1).to({graphics:mask_graphics_40,x:-35.8,y:-5.7}).wait(1).to({graphics:mask_graphics_41,x:-35.2,y:-5.4}).wait(1).to({graphics:mask_graphics_42,x:-34.6,y:-5.1}).wait(1).to({graphics:mask_graphics_43,x:-34.1,y:-4.8}).wait(1).to({graphics:mask_graphics_44,x:-33.5,y:-4.5}).wait(1).to({graphics:mask_graphics_45,x:-33,y:-4.2}).wait(1).to({graphics:mask_graphics_46,x:-32.4,y:-3.9}).wait(1).to({graphics:mask_graphics_47,x:-31.8,y:-3.7}).wait(1).to({graphics:mask_graphics_48,x:-31.2,y:-3.4}).wait(1).to({graphics:mask_graphics_49,x:-30.7,y:-3.1}).wait(1).to({graphics:mask_graphics_50,x:-30.1,y:-2.8}).wait(1).to({graphics:mask_graphics_51,x:-29.5,y:-2.5}).wait(1).to({graphics:mask_graphics_52,x:-29,y:-2.2}).wait(1).to({graphics:mask_graphics_53,x:-28.4,y:-1.9}).wait(1).to({graphics:mask_graphics_54,x:-27.8,y:-1.6}).wait(1).to({graphics:mask_graphics_55,x:-27.3,y:-1.3}).wait(1).to({graphics:mask_graphics_56,x:-26.7,y:-1}).wait(1).to({graphics:mask_graphics_57,x:-26.1,y:-0.7}).wait(1).to({graphics:mask_graphics_58,x:-25.6,y:-0.4}).wait(1).to({graphics:mask_graphics_59,x:-25,y:-0.1}).wait(1).to({graphics:mask_graphics_60,x:-24.4,y:0.2}).wait(1).to({graphics:mask_graphics_61,x:-23.9,y:0.5}).wait(1).to({graphics:mask_graphics_62,x:-23.3,y:0.8}).wait(1).to({graphics:mask_graphics_63,x:-22.7,y:1}).wait(1).to({graphics:mask_graphics_64,x:-22.2,y:1.3}).wait(1).to({graphics:mask_graphics_65,x:-21.6,y:1.6}).wait(1).to({graphics:mask_graphics_66,x:-21,y:1.9}).wait(1).to({graphics:mask_graphics_67,x:-20.4,y:2.2}).wait(1).to({graphics:mask_graphics_68,x:-19.9,y:2.5}).wait(1).to({graphics:mask_graphics_69,x:-19.3,y:2.8}).wait(1).to({graphics:mask_graphics_70,x:-18.7,y:3.1}).wait(1).to({graphics:mask_graphics_71,x:-18.2,y:3.4}).wait(1).to({graphics:mask_graphics_72,x:-17.6,y:3.7}).wait(1).to({graphics:mask_graphics_73,x:-17,y:4}).wait(1).to({graphics:mask_graphics_74,x:-16.5,y:4.3}).wait(1).to({graphics:mask_graphics_75,x:-15.9,y:4.6}).wait(1).to({graphics:mask_graphics_76,x:-15.3,y:4.9}).wait(1).to({graphics:mask_graphics_77,x:-14.8,y:5.2}).wait(1).to({graphics:mask_graphics_78,x:-14.2,y:5.5}).wait(1).to({graphics:mask_graphics_79,x:-13.6,y:5.7}).wait(1).to({graphics:mask_graphics_80,x:-13.1,y:6}).wait(1).to({graphics:mask_graphics_81,x:-12.5,y:6.3}).wait(1).to({graphics:mask_graphics_82,x:-11.9,y:6.6}).wait(1).to({graphics:mask_graphics_83,x:-11.3,y:6.9}).wait(1).to({graphics:mask_graphics_84,x:-10.8,y:7.2}).wait(1).to({graphics:mask_graphics_85,x:-10.2,y:7.5}).wait(1).to({graphics:mask_graphics_86,x:-9.6,y:7.8}).wait(1).to({graphics:mask_graphics_87,x:-9.1,y:8.1}).wait(1).to({graphics:mask_graphics_88,x:-8.5,y:8.4}).wait(1).to({graphics:mask_graphics_89,x:-7.9,y:8.7}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AnfkmQCwKeMPhb");

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.3,-37.3,21.2,38.8);


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
(lib.WS_Cursive_O = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_554 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(554).call(this.frame_554).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(241.9,145.5,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[241.9,145.6,210.9,146.1,180,166.2,127.4,200.5,105.8,268.5,84.2,336.5,124.4,379.6,164.6,422.7,223.9,398.7,283.4,374.7,313.9,321.3,330,298.6,334.4,238.1,338.7,177.5,285.7,154.7,264.9,145.8,244.2,145.6]}},311).wait(14).to({startPosition:0},0).to({guide:{path:[243,146.4,289.1,212.4,347,204.5,404.5,196.6,446.7,147]}},140).wait(15).to({startPosition:0},0).to({guide:{path:[447.5,147.6,452.5,137.8,458.9,125.9,466.1,112.5,479.5,105.7,492.8,99.1,506.7,104.2,520,109.2,532.3,116.3,544.6,123.5,557.3,129.8,570,136.3,583.9,139.7,598.2,142.9,611.2,136.4,620.1,132.1,628.2,125.5]}},65).wait(1));

	// Layer 8
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(237.5,147.7,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},311).wait(14).to({_off:false,x:447.5,y:145.7},0).to({_off:true},140).wait(81));

	// Layer 11
	this.instance_1 = new lib.ar2("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(421.2,228.4,1,1,-162.3,0,0,0.7,-0.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(334).to({_off:false},0).wait(221));

	// Layer 9 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_334 = new cjs.Graphics().p("Arok9QHSpuMAhvQMBhvJtHSQJvHRBuMAMg5+AIWQhvsBHQpsg");
	var mask_graphics_335 = new cjs.Graphics().p("Ar8kwQHFp4L9h/QL/h/J3HFQJ4HDB+L+Mg5yAJkQh/r/HDp1g");
	var mask_graphics_336 = new cjs.Graphics().p("AsPkjQG3qBL7iPQL8iPKAG3QKBG2CPL6Mg5lAKzQiPr8G2p/g");
	var mask_graphics_337 = new cjs.Graphics().p("AshkVQGqqLL3ifQL5ifKJGqQKKGoCfL4Mg5VAL/Qifr4GoqIg");
	var mask_graphics_338 = new cjs.Graphics().p("AsykHQGcqTL0ivQL1ivKSGcQKTGaCvL0Mg5EANNQivr1GaqRg");
	var mask_graphics_339 = new cjs.Graphics().p("AtBj4QGNqcLxi/QLxi/KaGOQKcGNC/LwMg4yAOZQi/rxGNqZg");
	var mask_graphics_340 = new cjs.Graphics().p("AtQjpQGAqkLsjPQLtjOKiGAQKkF+DPLsMg4eAPlQjPrtF/qhg");
	var mask_graphics_341 = new cjs.Graphics().p("AtejZQFyqsLnjfQLpjeKqFyQKsFwDeLnMg4IAQxQjeroFwqpg");
	var mask_graphics_342 = new cjs.Graphics().p("AtqjJQFjq0LjjuQLjjuKyFkQKzFhDuLjMg3wAR8QjurjFiqxg");
	var mask_graphics_343 = new cjs.Graphics().p("At1i4QFUq7Ldj+QLfj9K5FUQK7FTD9LeMg3XATHQj9reFTq4g");
	var mask_graphics_344 = new cjs.Graphics().p("At/inQFFrCLYkNQLZkNLAFGQLCFEENLZMg29AURQkNrZFFq/g");
	var mask_graphics_345 = new cjs.Graphics().p("AuIiWQE2rILSkcQLTkcLIE3QLIE1EcLTMg2hAVaQkcrTE2rGg");
	var mask_graphics_346 = new cjs.Graphics().p("AuQiEQEnrPLMkrQLNkrLOEoQLOEmErLNMg2CAWjQksrNEnrMg");
	var mask_graphics_347 = new cjs.Graphics().p("AuXhxQEZrVLFk6QLGk7LUEZQLUEXE7LHMg1kAXrQk6rGEXrSg");
	var mask_graphics_348 = new cjs.Graphics().p("AucheQEJrbK+lJQLAlJLZEJQLaEIFJLAMg1CAYzQlJq/EIrYg");
	var mask_graphics_349 = new cjs.Graphics().p("AuhhLQD6rgK3lYQK5lYLfD7QLfD4FYK4Mg0hAZ7QlXq5D4rdg");
	var mask_graphics_350 = new cjs.Graphics().p("Aukg3QDqrlKxlnQKwlmLkDrQLlDoFmKxMgz9AbBQlmqxDprig");
	var mask_graphics_351 = new cjs.Graphics().p("AumgjQDarqKql1QKol0LpDbQLpDZF1KpMgzYAcGQl1qpDarng");
	var mask_graphics_352 = new cjs.Graphics().p("AungOQDLrvKhmDQKhmDLtDMQLtDJGDKhMgyxAdLQmDqhDKrrg");
	var mask_graphics_353 = new cjs.Graphics().p("AumAGQC6ryKZmRQKYmRLyC8QLxC5GRKZMgyJAePQmRqZC7rwg");
	var mask_graphics_354 = new cjs.Graphics().p("AulAbQCrr1KQmfQKQmfL1CsQL1CpGfKRMgxfAfSQmfqRCqr0g");
	var mask_graphics_355 = new cjs.Graphics().p("AuiAxQCar5KImsQKHmtL4CbQL5CaGsKIMgw0AgUQmtqICbr3g");
	var mask_graphics_356 = new cjs.Graphics().p("AufBHQCLr8J/m6QJ9m6L7CLQL8CKG6J+MgwIAhWQm6p+CKr7g");
	var mask_graphics_357 = new cjs.Graphics().p("AuaBeQB7r/J1nHQJ0nIL+B8QL+B5HIJ1MgvbAiWQnHp1B6r9g");
	var mask_graphics_358 = new cjs.Graphics().p("AuUB0QBrsAJrnVQJqnVMBBsQMBBpHUJrMgurAjVQnVprBqsAg");
	var mask_graphics_359 = new cjs.Graphics().p("AuNCMQBbsDJhniQJgnhMDBbQMDBZHhJhMgt7AkUQnipiBasBg");
	var mask_graphics_360 = new cjs.Graphics().p("AuECjQBKsEJXnvQJWnuMEBLQMFBJHuJXMgtKAlRQnupXBKsEg");
	var mask_graphics_361 = new cjs.Graphics().p("At7C7QA6sGJMn6QJMn7MGA7QMGA4H6JNMgsWAmNQn7pNA5sFg");
	var mask_graphics_362 = new cjs.Graphics().p("AtwDUQApsHJCoHQJBoHMGAqQMHAoIHJCMgriAnIQoHpBApsGg");
	var mask_graphics_363 = new cjs.Graphics().p("AtkDsQAZsHI2oTQI2oTMHAaQMIAYITI2MgqtAoCQoTo2AZsHg");
	var mask_graphics_364 = new cjs.Graphics().p("AtXEGQAIsIIsofQIqofMIAKQMIAHIfIrMgp3Ao8QofosAJsGg");
	var mask_graphics_365 = new cjs.Graphics().p("AtJEfQgIsIIgoqQIeorMIgGQMIgJIrIgMgo/ApzQoroggHsHg");
	var mask_graphics_366 = new cjs.Graphics().p("As6E5QgYsIIUo2QITo1MHgXQMIgZI2IUMgoHAqpQo1oUgYsGg");
	var mask_graphics_367 = new cjs.Graphics().p("AsqFTQgosHIIpBQIHpBMGgnQMHgpJBIIMgnMArfQpBoIgosGg");
	var mask_graphics_368 = new cjs.Graphics().p("AsZFtQg4sFH7pMQH7pMMGg3QMGg6JLH8MgmRAsTQpLn8g5sFg");
	var mask_graphics_369 = new cjs.Graphics().p("AsGGIQhJsEHvpWQHupXMFhHQMEhKJWHvMglUAtGQpWnvhJsEg");
	var mask_graphics_370 = new cjs.Graphics().p("ArzGjQhZsDHjpgQHhpgMDhYQMDhaJgHiMgkXAt3QphnihZsCg");
	var mask_graphics_371 = new cjs.Graphics().p("AreG/QhpsBHVprQHVpqMBhoQMAhqJrHVMgjZAuoQprnWhpr/g");
	var mask_graphics_372 = new cjs.Graphics().p("ArIHaQh6r+HJp0QHHp1L+h4QL/h6J0HIMgibAvXQpznJh5r9g");
	var mask_graphics_373 = new cjs.Graphics().p("AqxH2QiKr8G7p9QG6p+L8iIQL7iLJ+G7MghbAwEQp8m7iJr6g");
	var mask_graphics_374 = new cjs.Graphics().p("AqaISQiZr5GtqHQGtqGL4iZQL5iaKGGtMggZAwxQqFmuiar3g");
	var mask_graphics_375 = new cjs.Graphics().p("AqBIuQipr1GfqQQGfqQL2ioQL0iqKQGfMgfXAxcQqPmgipr0g");
	var mask_graphics_376 = new cjs.Graphics().p("ApnJKQi6rxGSqZQGRqYLyi4QLxi6KYGRMgeUAyFQqXmSi5rwg");
	var mask_graphics_377 = new cjs.Graphics().p("ApMJmQjJrtGDqhQGEqgLtjIQLtjKKgGEMgdQAysQqfmEjJrsg");
	var mask_graphics_378 = new cjs.Graphics().p("AowKDQjZrpF1qpQF2qoLojYQLpjaKoF2MgcLAzTQqol1jYrog");
	var mask_graphics_379 = new cjs.Graphics().p("AoTKfQjprkFnqwQFnqwLkjoQLkjpKwFnMgbGAz5Qqvlojorjg");
	var mask_graphics_380 = new cjs.Graphics().p("An1K8Qj5rfFZq4QFZq3Lej3QLfj5K3FZMgZ/A0cQq3lZj3reg");
	var mask_graphics_381 = new cjs.Graphics().p("AnXLZQkHraFKq/QFKq+LZkHQLZkIK/FKMgY5A0+Qq+lKkHrYg");
	var mask_graphics_382 = new cjs.Graphics().p("Am3L1QkXrUE7rFQE7rFLUkWQLTkYLGE7MgXxA1fQrFk7kWrTg");
	var mask_graphics_383 = new cjs.Graphics().p("AmWMSQkmrPEsrKQEsrMLNklQLOknLMEsMgWpA1+QrLksklrNg");
	var mask_graphics_384 = new cjs.Graphics().p("Al0MvQk2rIEdrRQEdrSLHk0QLHk2LSEdMgVfA2cQrRkdk0rHg");
	var mask_graphics_385 = new cjs.Graphics().p("AlSNMQlErCEOrXQENrYLBlCQLAlFLYEOMgUWA24QrXkOlDrAg");
	var mask_graphics_386 = new cjs.Graphics().p("AkuNpQlTq7D+rcQD+reK6lRQK5lULeD/MgTMA3SQrdj+lRq5g");
	var mask_graphics_387 = new cjs.Graphics().p("AkKOGQliq0DvrhQDvrjKylgQKyliLjDvMgSBA3rQrijvlgqxg");
	var mask_graphics_388 = new cjs.Graphics().p("AjlOjQlwqsDfrnQDgrnKqlvQKrlwLnDfMgQ1A4DQrojfluqqg");
	var mask_graphics_389 = new cjs.Graphics().p("Ai/PAQl+qkDQrrQDPrsKjl9QKil/LsDQMgPqA4YQrsjPl8qig");
	var mask_graphics_390 = new cjs.Graphics().p("AiYPcQmMqbC/rwQDArwKbmLQKamMLwC/MgOdA4tQrxjAmKqag");
	var mask_graphics_391 = new cjs.Graphics().p("AhwP5QmbqTCwrzQCwr0KSmZQKSmbL0CwMgNRA5AQr0iwmYqSg");
	var mask_graphics_392 = new cjs.Graphics().p("AhIQWQmoqLCgr2QCgr4KJmmQKJmpL4CgMgMEA5RQr4igmmqJg");
	var mask_graphics_393 = new cjs.Graphics().p("AgeQyQm2qBCQr6QCQr6KAm0QKAm2L6CPMgK2A5gQr7iQmzqAg");
	var mask_graphics_394 = new cjs.Graphics().p("AALRPQnDp4CAr8QCAr+J3nCQJ3nDL9CAMgJpA5tQr+iAnBp2g");
	var mask_graphics_395 = new cjs.Graphics().p("AA1RsQnPpvBwr/QBwsAJtnPQJtnQMABwMgIcA55QsAhwnPpsg");
	var mask_graphics_396 = new cjs.Graphics().p("ABhSIQndpkBgsCQBgsCJjncQJjndMCBfMgHNA6EQsChfncpjg");
	var mask_graphics_397 = new cjs.Graphics().p("ACNSkQnppaBPsDQBQsEJZnoQJZnrMEBQMgF/A6MQsEhPnppZg");
	var mask_graphics_398 = new cjs.Graphics().p("AC6TBQn2pQA/sFQA/sFJPn1QJPn3MFA/MgEwA6UQsGg/n1pOg");
	var mask_graphics_399 = new cjs.Graphics().p("ADnTdQoCpFAvsGQAvsHJEoBQJEoDMGAvMgDiA6ZQsGgvoCpDg");
	var mask_graphics_400 = new cjs.Graphics().p("AEZT7QoPo5AdsHQAesHI4oPQI4oQMHAeMgCNA6dQsHgdoPo4g");
	var mask_graphics_401 = new cjs.Graphics().p("AFMUZQocotALsHQAMsIIsobQIsodMIAMMgA4A6fQsIgLobosg");
	var mask_graphics_402 = new cjs.Graphics().p("AFwU3QooohgGsIQgGsHIgonQIfoqMIgGMAAdA6gIgRABQr9AAoioag");
	var mask_graphics_403 = new cjs.Graphics().p("AF6VUQo1oUgXsIQgYsGITo0QITo2MIgXMABxA6eIhBABQreAAocn8g");
	var mask_graphics_404 = new cjs.Graphics().p("AGEVwQpBoHgpsHQgpsGIGpAQIGpBMHgpMADGA6aQg5ADg4AAQrAAAoVnfg");
	var mask_graphics_405 = new cjs.Graphics().p("AGPWKQpMn6g7sFQg7sFH5pMQH5pMMFg7MAEcA6VQhRAGhPAAQqjAAoOnEg");
	var mask_graphics_406 = new cjs.Graphics().p("AGaWjQpXnshNsEQhMsDHspXQHrpYMEhNMAFwA6OQhoAKhlAAQqIABoGmqg");
	var mask_graphics_407 = new cjs.Graphics().p("AGmW7QpinehesDQhesBHepiQHdpjMDhdMAHEA6EQh/APh6AAQptAAn+mPg");
	var mask_graphics_408 = new cjs.Graphics().p("AGzXSQptnRhvsAQhwr+HQptQHQpuL/hvMAIZA55QiVAWiPAAQpUAAn0l2g");
	var mask_graphics_409 = new cjs.Graphics().p("AHAXoQp3nDiBr9QiAr8HBp3QHBp4L+iBMAJsA5sQiqAdikAAQo8AAnqldg");
	var mask_graphics_410 = new cjs.Graphics().p("AHOX8QqBm0iSr6QiSr5G0qBQGyqCL6iSMALAA5dQjAAki3AAQokAAnglFg");
	var mask_graphics_411 = new cjs.Graphics().p("AHdYPQqLmmikr2Qijr2GmqKQGjqML2ijMAMUA5MQjVAtjLAAQoNAAnUkug");
	var mask_graphics_412 = new cjs.Graphics().p("AHsYgQqVmWi0rzQi0rxGXqUQGUqWLyi0MANmA45QjoA4jfAAQn3AAnIkZg");
	var mask_graphics_413 = new cjs.Graphics().p("AH8YxQqemIjFruQjFrtGHqdQGFqfLujFMAO5A4lQj8BCjzAAQngAAm8kDg");
	var mask_graphics_414 = new cjs.Graphics().p("AIMZAQqml4jWrqQjXrpF5qlQF1qnLqjWMAQKA4NQkPBOkGAAQnLAAmvjug");
	var mask_graphics_415 = new cjs.Graphics().p("AIdZOQqulpjnrkQjorkFpquQFmqvLljnMARbA31QkhBakaAAQm1AAmijag");
	var mask_graphics_416 = new cjs.Graphics().p("AIvZaQq3lZj4rfQj3reFZq2QFWq3Lfj4MAStA3bQk0BoktAAQmhAAmTjIg");
	var mask_graphics_417 = new cjs.Graphics().p("AJBZlQq+lIkJraQkIrYFJq+QFHq/LZkIMAT9A2/QlGB2lAAAQmNAAmEi2g");
	var mask_graphics_418 = new cjs.Graphics().p("AJUZvQrGk4kYrUQkZrSE5rFQE4rGLSkZMAVLA2iQlWCFlTAAQl5AAl1ilg");
	var mask_graphics_419 = new cjs.Graphics().p("AJnZ4QrMkpkprMQkqrMEqrMQEnrMLMkqMAWaA2CQlnCVlnAAQllAAlliUg");
	var mask_graphics_420 = new cjs.Graphics().p("AJ7aAQrTkZk5rGQk6rEEZrTQEXrTLFk5MAXpA1gQl3Cll7AAQlSAAlUiDg");
	var mask_graphics_421 = new cjs.Graphics().p("AKPaGQrZkIlJq/QlJq+EIrYQEHrZK9lJMAY2A08QmHC3mOAAQk+AAlEh0g");
	var mask_graphics_422 = new cjs.Graphics().p("AKkaKQrej3laq3QlZq2D4reQD2rfK2lZMAaCA0YQmVDJmjAAQkrAAkyhng");
	var mask_graphics_423 = new cjs.Graphics().p("AK6aOQrkjnlpquQlpqvDnrjQDlrkKulpMAbOAzxQmkDcm3AAQkXAAkghZg");
	var mask_graphics_424 = new cjs.Graphics().p("ALQaQQrpjWl5qmQl4qmDWroQDVrqKll4MAcYAzJQmxDwnMAAQkEAAkNhNg");
	var mask_graphics_425 = new cjs.Graphics().p("ALmaRQrtjFmIqdQmIqeDGrtQDDruKdmHMAdiAyeQm+EFniAAQjxAAj6hBg");
	var mask_graphics_426 = new cjs.Graphics().p("AL9aQQrzizmWqVQmWqUC0rxQCyryKUmXMAerAxzQnLEan3AAQjdAAjng3g");
	var mask_graphics_427 = new cjs.Graphics().p("AMVaPQr3ijmlqLQmlqLCjr1QChr2KKmmMAfzAxGQnXExoNAAQjKAAjSgtg");
	var mask_graphics_428 = new cjs.Graphics().p("AMtaMQr7iSmzqBQm0qBCSr5QCQr5KAm1MAg5AwXQnhFIolAAQi2AAi9gkg");
	var mask_graphics_429 = new cjs.Graphics().p("ANFaHQr+iAnBp3QnDp3CBr8QB+r8J2nDMAiAAvmQntFfo8AAQiiAAiogcg");
	var mask_graphics_430 = new cjs.Graphics().p("ANZaDQsAhynNpvQnOpvByr+QBxr/JunOMAi2Au+Qn0FzpQAAQiRAAiXgWg");
	var mask_graphics_431 = new cjs.Graphics().p("ANtZ9QsChknYpmQnapnBlr/QBisBJnnZMAjsAuUQn8GHpkAAQiBAAiFgRg");
	var mask_graphics_432 = new cjs.Graphics().p("AOBZ3QsDhWnkpeQnkpdBWsCQBVsCJdnlMAkiAtrQoCGcp6AAQhvAAh0gNg");
	var mask_graphics_433 = new cjs.Graphics().p("AOWZwQsFhInvpVQnvpUBIsDQBHsEJVnwMAlXAtAQoKGxqPAAQheAAhhgJg");
	var mask_graphics_434 = new cjs.Graphics().p("AOrZoQsGg6n6pLQn6pMA6sEQA5sFJLn7MAmMAsUQoQHHqlAAQhNAAhOgGg");
	var mask_graphics_435 = new cjs.Graphics().p("APAZfQsHgroEpDQoFpCAssFQAqsGJDoFMAm/ArmQoWHdq8AAQg6AAg8gDg");
	var mask_graphics_436 = new cjs.Graphics().p("APWZVQsIgdoPo5QoPo5AesFQAcsHI5oQMAnxAq5QobH0rTAAQgoAAgogCg");
	var mask_graphics_437 = new cjs.Graphics().p("APrZLQsIgPoZowQoaovAQsGQAOsHIvoaMAokAqKQogILrsAAIgqAAg");
	var mask_graphics_438 = new cjs.Graphics().p("AQBY/QsIgBojolQokolACsHQgBsHImokMApUApaQolIjsEAAIgDAAg");
	var mask_graphics_439 = new cjs.Graphics().p("AkeQsQouocgMsGQgPsHIbouMAqFAopQobIusHANIglABQrwAAogoOg");
	var mask_graphics_440 = new cjs.Graphics().p("AkRRDQo4oRgasGQgdsHIRo3MAq0An3QoRI4sGAbIhNACQrXAAobn3g");
	var mask_graphics_441 = new cjs.Graphics().p("AkDRaQpCoGgosGQgrsGIGpBMAriAnFQoGJBsGAqQg5ADg5AAQrAAAoVngg");
	var mask_graphics_442 = new cjs.Graphics().p("Aj1RwQpLn7g3sFQg5sFH8pLMAsPAmSQn7JLsFA3QhNAGhLAAQqoAAoQnKg");
	var mask_graphics_443 = new cjs.Graphics().p("AjmSGQpUnxhFsDQhHsEHxpUMAs7AldQnxJUsDBGQhfAJhdAAQqTAAoJm0g");
	var mask_graphics_444 = new cjs.Graphics().p("AjXScQpdnmhTsCQhVsDHmpdMAtnAkpQnmJdsCBUQhyAMhuAAQp9AAoDmeg");
	var mask_graphics_445 = new cjs.Graphics().p("AjGSxQpmnbhhsBQhksBHbplMAuSAjzQnbJmsABiQiEAQiAAAQpoAAn7mJg");
	var mask_graphics_446 = new cjs.Graphics().p("Ai2TFQpunPhvr/Qhxr/HPpvMAu7Ai9QnQJvr+BwQiWAWiQAAQpUAAn0l2g");
	var mask_graphics_447 = new cjs.Graphics().p("AikTZQp3nEh9r9Qh/r8HEp3MAvjAiFQnEJ3r8B+QioAcigAAQpAAAnslig");
	var mask_graphics_448 = new cjs.Graphics().p("AiSTtQp/m5iLr7QiNr6G4p+MAwLAhNQm5J/r5CMQi5AiixAAQotAAnjlOg");
	var mask_graphics_449 = new cjs.Graphics().p("AiAUAQqHmtiZr5Qibr3GtqGMAwyAgVQmtKHr3CZQjKApjBAAQoaAAnbk7g");
	var mask_graphics_450 = new cjs.Graphics().p("AhsUSQqPmhinr1Qipr0GhqPMAxXAfcQmhKOr0CoQjaAwjSAAQoHAAnRkpg");
	var mask_graphics_451 = new cjs.Graphics().p("AhYUkQqXmVi0ryQi3rxGVqWMAx7AehQmVKXrxC1QjqA5jhAAQn2AAnHkYg");
	var mask_graphics_452 = new cjs.Graphics().p("AhEU1QqemIjCrvQjEruGIqdMAyfAdnQmJKdruDEQj6BBjxAAQnjAAm+kHg");
	var mask_graphics_453 = new cjs.Graphics().p("AgvVGQqll8jQrrQjSrqF9qlMAzAAcsQl8KlrqDRQkKBKkAAAQnTAAmzj2g");
	var mask_graphics_454 = new cjs.Graphics().p("AgZVXQqslwjeroQjfrmFwqrMAzhAbwQlwKrrmDfQkZBUkQAAQnBAAmojlg");
	var mask_graphics_455 = new cjs.Graphics().p("AgDVnQqylkjsrjQjtriFkqyMA0BAa0QljKyriDsQkoBekfAAQmxAAmdjVg");
	var mask_graphics_456 = new cjs.Graphics().p("AATV2Qq4lXj5rfQj6rdFXq5MA0gAZ3QlXK4rdD6Qk3BpkvAAQmgAAmSjGg");
	var mask_graphics_457 = new cjs.Graphics().p("AAqWFQq+lLkGraQkIrYFKq/MA0+AY5QlKK/rZEGQlEB1k/AAQmPAAmHi3g");
	var mask_graphics_458 = new cjs.Graphics().p("ABCWTQrEk9kTrWQkWrTE+rFMA1bAX7Qk+LErUEUQlSCBlOAAQmAAAl6ipg");
	var mask_graphics_459 = new cjs.Graphics().p("ABaWhQrJkxkhrQQkirOEwrLMA12AW8QkwLLrPEhQlfCNlfAAQlvAAluibg");
	var mask_graphics_460 = new cjs.Graphics().p("ABzWuQrPkkktrKQkwrJEjrQMA2RAV9QkjLPrKEvQltCaluAAQlfAAlhiOg");
	var mask_graphics_461 = new cjs.Graphics().p("ACNW6QrUkWk7rFQk9rDEWrVMA2qAU9QkWLVrEE7Ql5Col+AAQlQAAlTiCg");
	var mask_graphics_462 = new cjs.Graphics().p("ACnXGQrZkIlIrAQlKq9EJraMA3CAT9QkJLaq+FIQmGC2mOAAQlAAAlFh2g");
	var mask_graphics_463 = new cjs.Graphics().p("ADBXSQrej8lUq5QlXq3D8rfMA3ZAS9Qj8Leq4FVQmSDFmeAAQkxAAk3hqg");
	var mask_graphics_464 = new cjs.Graphics().p("ADcXdQrijulhqzQljqxDtrjMA3vAR7QjuLjqxFiQmeDUmvAAQkhAAkphfg");
	var mask_graphics_465 = new cjs.Graphics().p("AD4XnQrnjgluqtQlvqqDgroMA4DAQ7QjgLnqrFuQmpDknAAAQkRAAkahVg");
	var mask_graphics_466 = new cjs.Graphics().p("AETXxQrqjTl6qmQl8qjDSrsMA4XAP5QjTLrqkF7Qm0D0nRAAQkCAAkLhLg");
	var mask_graphics_467 = new cjs.Graphics().p("AEwX6QrujFmHqfQmIqcDFrwMA4oAO3QjFLvqdGHQm+EFniAAQjzAAj7hCg");
	var mask_graphics_468 = new cjs.Graphics().p("AFNYCQryi3mTqXQmUqXC3rxMA46AN0Qi4LzqWGTQnIEWn0AAQjjAAjrg6g");
	var mask_graphics_469 = new cjs.Graphics().p("AFqYKQr1ipmfqQQmgqPCpr1MA5JAMyQipL2qPGfQnSEooGAAQjSAAjcgyg");
	var mask_graphics_470 = new cjs.Graphics().p("AGIYSQr4icmrqIQmsqHCbr4MA5YALuQicL5qHGrQnbE6oYAAQjDAAjLgpg");
	var mask_graphics_471 = new cjs.Graphics().p("AGmYYQr7iNm2qBQm5p/COr7MA5lAKsQiOL7p/G3QnkFNorAAQizAAi6gjg");
	var mask_graphics_472 = new cjs.Graphics().p("AIAYoQsChlnXpoQnapnBlsCMA6FAHpQhmMCpnHYQn7GFplAAQiDAAiHgSg");
	var mask_graphics_473 = new cjs.Graphics().p("AJcYzQsFg8n4pPQn5pNA9sGMA6ZAElQg9MFpNH4QoQHDqiAAQhRAAhTgHg");
	var mask_graphics_474 = new cjs.Graphics().p("AK8Y5QsHgUoXozQoXoyATsIMA6kABfQgTMIoyIWQogIFrmAAIg3gBg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(334).to({graphics:mask_graphics_334,x:261.3,y:52.3}).wait(1).to({graphics:mask_graphics_335,x:261,y:54.2}).wait(1).to({graphics:mask_graphics_336,x:260.7,y:56.2}).wait(1).to({graphics:mask_graphics_337,x:260.3,y:58.1}).wait(1).to({graphics:mask_graphics_338,x:259.9,y:60}).wait(1).to({graphics:mask_graphics_339,x:259.5,y:61.9}).wait(1).to({graphics:mask_graphics_340,x:259,y:63.7}).wait(1).to({graphics:mask_graphics_341,x:258.4,y:65.6}).wait(1).to({graphics:mask_graphics_342,x:257.8,y:67.5}).wait(1).to({graphics:mask_graphics_343,x:257.2,y:69.3}).wait(1).to({graphics:mask_graphics_344,x:256.6,y:71.2}).wait(1).to({graphics:mask_graphics_345,x:255.9,y:73}).wait(1).to({graphics:mask_graphics_346,x:255.1,y:74.8}).wait(1).to({graphics:mask_graphics_347,x:254.4,y:76.6}).wait(1).to({graphics:mask_graphics_348,x:253.5,y:78.4}).wait(1).to({graphics:mask_graphics_349,x:252.7,y:80.2}).wait(1).to({graphics:mask_graphics_350,x:251.8,y:82}).wait(1).to({graphics:mask_graphics_351,x:250.9,y:83.7}).wait(1).to({graphics:mask_graphics_352,x:249.9,y:85.5}).wait(1).to({graphics:mask_graphics_353,x:248.9,y:87.2}).wait(1).to({graphics:mask_graphics_354,x:247.9,y:88.9}).wait(1).to({graphics:mask_graphics_355,x:246.8,y:90.5}).wait(1).to({graphics:mask_graphics_356,x:245.7,y:92.2}).wait(1).to({graphics:mask_graphics_357,x:244.6,y:93.8}).wait(1).to({graphics:mask_graphics_358,x:243.4,y:95.4}).wait(1).to({graphics:mask_graphics_359,x:242.2,y:97}).wait(1).to({graphics:mask_graphics_360,x:241,y:98.5}).wait(1).to({graphics:mask_graphics_361,x:239.7,y:100.1}).wait(1).to({graphics:mask_graphics_362,x:238.4,y:101.5}).wait(1).to({graphics:mask_graphics_363,x:237.1,y:103}).wait(1).to({graphics:mask_graphics_364,x:235.8,y:104.4}).wait(1).to({graphics:mask_graphics_365,x:234.4,y:105.8}).wait(1).to({graphics:mask_graphics_366,x:233,y:107.1}).wait(1).to({graphics:mask_graphics_367,x:231.5,y:108.5}).wait(1).to({graphics:mask_graphics_368,x:230,y:109.7}).wait(1).to({graphics:mask_graphics_369,x:228.5,y:111}).wait(1).to({graphics:mask_graphics_370,x:227,y:112.2}).wait(1).to({graphics:mask_graphics_371,x:225.5,y:113.3}).wait(1).to({graphics:mask_graphics_372,x:223.9,y:114.5}).wait(1).to({graphics:mask_graphics_373,x:222.3,y:115.6}).wait(1).to({graphics:mask_graphics_374,x:220.6,y:116.6}).wait(1).to({graphics:mask_graphics_375,x:219,y:117.7}).wait(1).to({graphics:mask_graphics_376,x:217.3,y:118.7}).wait(1).to({graphics:mask_graphics_377,x:215.6,y:119.6}).wait(1).to({graphics:mask_graphics_378,x:213.9,y:120.6}).wait(1).to({graphics:mask_graphics_379,x:212.2,y:121.5}).wait(1).to({graphics:mask_graphics_380,x:210.4,y:122.3}).wait(1).to({graphics:mask_graphics_381,x:208.7,y:123.2}).wait(1).to({graphics:mask_graphics_382,x:206.9,y:124}).wait(1).to({graphics:mask_graphics_383,x:205.1,y:124.7}).wait(1).to({graphics:mask_graphics_384,x:203.2,y:125.5}).wait(1).to({graphics:mask_graphics_385,x:201.4,y:126.1}).wait(1).to({graphics:mask_graphics_386,x:199.6,y:126.8}).wait(1).to({graphics:mask_graphics_387,x:197.7,y:127.4}).wait(1).to({graphics:mask_graphics_388,x:195.8,y:128}).wait(1).to({graphics:mask_graphics_389,x:193.9,y:128.5}).wait(1).to({graphics:mask_graphics_390,x:192,y:129.1}).wait(1).to({graphics:mask_graphics_391,x:190.1,y:129.5}).wait(1).to({graphics:mask_graphics_392,x:188.2,y:130}).wait(1).to({graphics:mask_graphics_393,x:186.2,y:130.3}).wait(1).to({graphics:mask_graphics_394,x:184.3,y:130.7}).wait(1).to({graphics:mask_graphics_395,x:182.4,y:131}).wait(1).to({graphics:mask_graphics_396,x:180.4,y:131.3}).wait(1).to({graphics:mask_graphics_397,x:178.5,y:131.5}).wait(1).to({graphics:mask_graphics_398,x:176.5,y:131.7}).wait(1).to({graphics:mask_graphics_399,x:174.5,y:131.8}).wait(1).to({graphics:mask_graphics_400,x:172.4,y:131.9}).wait(1).to({graphics:mask_graphics_401,x:170.3,y:132}).wait(1).to({graphics:mask_graphics_402,x:169.6,y:132}).wait(1).to({graphics:mask_graphics_403,x:171.7,y:132}).wait(1).to({graphics:mask_graphics_404,x:173.8,y:132.1}).wait(1).to({graphics:mask_graphics_405,x:176,y:132.2}).wait(1).to({graphics:mask_graphics_406,x:178.1,y:132.4}).wait(1).to({graphics:mask_graphics_407,x:180.2,y:132.6}).wait(1).to({graphics:mask_graphics_408,x:182.3,y:132.9}).wait(1).to({graphics:mask_graphics_409,x:184.4,y:133.3}).wait(1).to({graphics:mask_graphics_410,x:186.5,y:133.7}).wait(1).to({graphics:mask_graphics_411,x:188.6,y:134.1}).wait(1).to({graphics:mask_graphics_412,x:190.6,y:134.6}).wait(1).to({graphics:mask_graphics_413,x:192.7,y:135.1}).wait(1).to({graphics:mask_graphics_414,x:194.7,y:135.6}).wait(1).to({graphics:mask_graphics_415,x:196.7,y:136.3}).wait(1).to({graphics:mask_graphics_416,x:198.8,y:136.9}).wait(1).to({graphics:mask_graphics_417,x:200.8,y:137.6}).wait(1).to({graphics:mask_graphics_418,x:202.7,y:138.3}).wait(1).to({graphics:mask_graphics_419,x:204.7,y:139.1}).wait(1).to({graphics:mask_graphics_420,x:206.7,y:139.9}).wait(1).to({graphics:mask_graphics_421,x:208.6,y:140.8}).wait(1).to({graphics:mask_graphics_422,x:210.5,y:141.7}).wait(1).to({graphics:mask_graphics_423,x:212.4,y:142.6}).wait(1).to({graphics:mask_graphics_424,x:214.2,y:143.6}).wait(1).to({graphics:mask_graphics_425,x:216.1,y:144.6}).wait(1).to({graphics:mask_graphics_426,x:217.9,y:145.7}).wait(1).to({graphics:mask_graphics_427,x:219.7,y:146.8}).wait(1).to({graphics:mask_graphics_428,x:221.4,y:147.9}).wait(1).to({graphics:mask_graphics_429,x:223.2,y:149.1}).wait(1).to({graphics:mask_graphics_430,x:224.5,y:150.1}).wait(1).to({graphics:mask_graphics_431,x:225.9,y:151.1}).wait(1).to({graphics:mask_graphics_432,x:227.2,y:152.1}).wait(1).to({graphics:mask_graphics_433,x:228.6,y:153.2}).wait(1).to({graphics:mask_graphics_434,x:229.9,y:154.2}).wait(1).to({graphics:mask_graphics_435,x:231.2,y:155.3}).wait(1).to({graphics:mask_graphics_436,x:232.4,y:156.5}).wait(1).to({graphics:mask_graphics_437,x:233.7,y:157.6}).wait(1).to({graphics:mask_graphics_438,x:234.9,y:158.8}).wait(1).to({graphics:mask_graphics_439,x:236.1,y:159.4}).wait(1).to({graphics:mask_graphics_440,x:237.3,y:159.4}).wait(1).to({graphics:mask_graphics_441,x:238.4,y:159.4}).wait(1).to({graphics:mask_graphics_442,x:239.5,y:159.4}).wait(1).to({graphics:mask_graphics_443,x:240.6,y:159.4}).wait(1).to({graphics:mask_graphics_444,x:241.7,y:159.4}).wait(1).to({graphics:mask_graphics_445,x:242.8,y:159.4}).wait(1).to({graphics:mask_graphics_446,x:243.8,y:159.5}).wait(1).to({graphics:mask_graphics_447,x:244.8,y:159.5}).wait(1).to({graphics:mask_graphics_448,x:245.8,y:159.5}).wait(1).to({graphics:mask_graphics_449,x:246.8,y:159.5}).wait(1).to({graphics:mask_graphics_450,x:247.7,y:159.5}).wait(1).to({graphics:mask_graphics_451,x:248.6,y:159.6}).wait(1).to({graphics:mask_graphics_452,x:249.5,y:159.6}).wait(1).to({graphics:mask_graphics_453,x:250.3,y:159.6}).wait(1).to({graphics:mask_graphics_454,x:251.1,y:159.6}).wait(1).to({graphics:mask_graphics_455,x:251.9,y:159.6}).wait(1).to({graphics:mask_graphics_456,x:252.7,y:159.6}).wait(1).to({graphics:mask_graphics_457,x:253.4,y:159.6}).wait(1).to({graphics:mask_graphics_458,x:254.2,y:159.6}).wait(1).to({graphics:mask_graphics_459,x:254.8,y:159.6}).wait(1).to({graphics:mask_graphics_460,x:255.5,y:159.6}).wait(1).to({graphics:mask_graphics_461,x:256.1,y:159.6}).wait(1).to({graphics:mask_graphics_462,x:256.7,y:159.6}).wait(1).to({graphics:mask_graphics_463,x:257.3,y:159.6}).wait(1).to({graphics:mask_graphics_464,x:257.8,y:159.6}).wait(1).to({graphics:mask_graphics_465,x:258.3,y:159.6}).wait(1).to({graphics:mask_graphics_466,x:258.8,y:159.6}).wait(1).to({graphics:mask_graphics_467,x:259.2,y:159.6}).wait(1).to({graphics:mask_graphics_468,x:259.7,y:159.6}).wait(1).to({graphics:mask_graphics_469,x:260,y:159.6}).wait(1).to({graphics:mask_graphics_470,x:260.4,y:159.5}).wait(1).to({graphics:mask_graphics_471,x:260.7,y:159.5}).wait(1).to({graphics:mask_graphics_472,x:261.5,y:159.4}).wait(1).to({graphics:mask_graphics_473,x:262,y:159.4}).wait(1).to({graphics:mask_graphics_474,x:262.2,y:159.4}).wait(81));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(20,1,1).p("AQBklQmVHypQBQQpPBQnNqI");
	this.shape_1.setTransform(345.5,174.8);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(334).to({_off:false},0).wait(221));

	// Layer 10
	this.instance_2 = new lib.ar4("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(163,84,1,1,129.8,0,0,-0.1,-0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(546));

	// Layer 12
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(20,1,1).p("APDG7QhCB3hUBrQhTBqhiBlQhiBlh6BMQh6BMiBA8QiAA7iYAiQh7AWipgDQiHgLh9hBQh+hBhmhlQhlhkhHh8QhDh3gdiGQgdiFAHiGQAHiTAkiPQAhiHA5iEQA5iDBMh/QBLiABUhtQBUhtBuhfQBthgCGhJQCGhJCCgzQCAgzCMgMQCLgLCQAbQCQAbCCBHQB/BFBfBqQBfBqArCIQAqCIAQB4QAPB4gEB/QgEB+g2CtQg2Cug3B9QgZA6gkAyg");
	this.shape_2.setTransform(217.7,277);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(320).to({_off:false},0).wait(235));

	// Layer 7 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_291 = new cjs.Graphics().p("EgKzAg1MAeGgyQQKaGQC9LvQC9LymPKaQmPKbryC8QjyA9jqAAQnqAAnEkPg");
	var mask_1_graphics_292 = new cjs.Graphics().p("EgKWAhHMAdLgyzQKiGDDKLrQDLLvmDKiQmDKhruDKQkCBGj5AAQnZAAm6j9g");
	var mask_1_graphics_293 = new cjs.Graphics().p("EgJ4AhXMAcPgzUQKpF2DYLpQDYLql2KoQl3KprqDYQkRBPkJAAQnIAAmvjtg");
	var mask_1_graphics_294 = new cjs.Graphics().p("EgJaAhoMAbSgz1QKwFpDmLlQDmLmlqKvQlqKwrmDlQkhBakYAAQm3AAmkjdg");
	var mask_1_graphics_295 = new cjs.Graphics().p("EgI7Ah3MAaVg0UQK2FdDzLgQD0LhldK2QleK2rhDzQkwBlkoAAQmmAAmYjOg");
	var mask_1_graphics_296 = new cjs.Graphics().p("EgIcAiHMAZXg0zQK8FQEBLcQEBLclQK9QlRK8rdEAQk+Bwk3AAQmWAAmMi+g");
	var mask_1_graphics_297 = new cjs.Graphics().p("EgH9AiVMAYYg1QQLDFDEOLXQEPLYlELCQlDLDrZENQlLB8lIAAQmFAAmAiwg");
	var mask_1_graphics_298 = new cjs.Graphics().p("EgHeAijMAXag1sQLIE2EcLSQEcLTk3LIQk2LIrTEbQlaCIlXAAQl1AAl0iig");
	var mask_1_graphics_299 = new cjs.Graphics().p("EgG+AixMAWag2IQLOEqEpLMQEpLOkpLNQkqLOrOEoQlmCVlnAAQlmAAlmiUg");
	var mask_1_graphics_300 = new cjs.Graphics().p("EgGeAi+MAVag2hQLTEcE2LHQE3LHkdLUQkcLTrIE1Ql0Cil3AAQlVAAlZiHg");
	var mask_1_graphics_301 = new cjs.Graphics().p("EgF+AjKMAUag26QLYEPFDLBQFELCkPLZQkPLYrDFCQmACwmHAAQlGAAlLh7g");
	var mask_1_graphics_302 = new cjs.Graphics().p("EgFeAjWMATag3RQLdEBFPK7QFRK8kCLdQkBLdq8FPQmNC/mXAAQk2AAk+hvg");
	var mask_1_graphics_303 = new cjs.Graphics().p("EgE9AjhMASYg3nQLiD0FcK1QFeK1j0LiQj0Liq2FbQmZDOmoAAQkmAAkvhkg");
	var mask_1_graphics_304 = new cjs.Graphics().p("EgEcAjsMARXg38QLmDmFpKuQFqKvjnLmQjmLmqwFpQmkDdm4AAQkYAAkfhZg");
	var mask_1_graphics_305 = new cjs.Graphics().p("EgD7Aj2MAQVg4QQLqDZF1KnQF3KojZLrQjZLqqoF1QmvDtnKAAQkIAAkQhPg");
	var mask_1_graphics_306 = new cjs.Graphics().p("EgDaAj/MAPTg4iQLuDLGCKgQGDKijLLuQjLLuqiGBQm6D+naAAQj5AAkBhGg");
	var mask_1_graphics_307 = new cjs.Graphics().p("EgC5AkIMAORg40QLxC+GOKZQGQKai9LyQi+LxqaGOQnEEPnsAAQjpAAjyg9g");
	var mask_1_graphics_308 = new cjs.Graphics().p("EgCXAkRMANNg5EQL1CvGbKSQGbKSivL1QiwL1qTGaQnOEhn+AAQjZAAjhg0g");
	var mask_1_graphics_309 = new cjs.Graphics().p("EgB1AkYMAMKg5TQL4CiGmKKQGoKLiiL4QihL4qMGmQnXEzoQAAQjKAAjQgtg");
	var mask_1_graphics_310 = new cjs.Graphics().p("EgBTAkgMALGg5hQL7CTGzKDQGzKDiUL7QiTL6qEGyQngFGojAAQi5AAjAglg");
	var mask_1_graphics_311 = new cjs.Graphics().p("EgAxAkmMAKDg5tQL9CFG+J7QG/J7iFL9QiGL9p7G+QnpFZo2AAQipAAivgfg");
	var mask_1_graphics_312 = new cjs.Graphics().p("EgAPAksMAI/g54QMAB3HJJyQHLJzh3L/Qh4MApzHJQnxFtpKAAQiZAAidgZg");
	var mask_1_graphics_313 = new cjs.Graphics().p("EAASAkxMAH8g6CQMCBpHVJqQHWJrhpMBQhpMBprHVQn5GApeABQiIAAiNgUg");
	var mask_1_graphics_314 = new cjs.Graphics().p("EAA0Ak2MAG4g6LQMEBbHgJhQHiJihcMDQhbMDpiHgQoAGVpzAAQh3AAh7gOg");
	var mask_1_graphics_315 = new cjs.Graphics().p("EABXAk6MAFzg6TQMFBNHsJYQHsJahNMEQhNMFpZHrQoHGqqIAAQhmAAhogKg");
	var mask_1_graphics_316 = new cjs.Graphics().p("EAB5Ak9MAEvg6YQMHA+H2JPQH3JQg+MGQg/MGpQH2QoOHAqeAAQhUAAhWgHg");
	var mask_1_graphics_317 = new cjs.Graphics().p("EACcAlAMADqg6eQMHAxIBJFQIDJHgxMHQgwMHpHIBQoUHWq1AAQhBAAhDgEg");
	var mask_1_graphics_318 = new cjs.Graphics().p("EAC+AlCMACmg6hQMIAiILI8QINI9giMIQgiMIo+ILQoYHtrNAAQgvAAgwgCg");
	var mask_1_graphics_319 = new cjs.Graphics().p("EADhAlDMABgg6jQMJAUIWIyQIXI0gUMHQgUMJozIWQoeIErmAAIg3gBg");
	var mask_1_graphics_320 = new cjs.Graphics().p("EAEDAlEMAAcg6lQMJAGIgIoQIiIqgGMIQgGMJoqIgQoiIcr/AAIgQAAg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(291).to({graphics:mask_1_graphics_291,x:215.1,y:237.2}).wait(1).to({graphics:mask_1_graphics_292,x:215.1,y:237.2}).wait(1).to({graphics:mask_1_graphics_293,x:215.1,y:237.2}).wait(1).to({graphics:mask_1_graphics_294,x:215.1,y:237.3}).wait(1).to({graphics:mask_1_graphics_295,x:215.1,y:237.3}).wait(1).to({graphics:mask_1_graphics_296,x:215.1,y:237.3}).wait(1).to({graphics:mask_1_graphics_297,x:215.1,y:237.3}).wait(1).to({graphics:mask_1_graphics_298,x:215.1,y:237.3}).wait(1).to({graphics:mask_1_graphics_299,x:215.1,y:237.3}).wait(1).to({graphics:mask_1_graphics_300,x:215.1,y:237.3}).wait(1).to({graphics:mask_1_graphics_301,x:215.1,y:237.3}).wait(1).to({graphics:mask_1_graphics_302,x:215.1,y:237.3}).wait(1).to({graphics:mask_1_graphics_303,x:215.1,y:237.3}).wait(1).to({graphics:mask_1_graphics_304,x:215.1,y:237.3}).wait(1).to({graphics:mask_1_graphics_305,x:215.1,y:237.3}).wait(1).to({graphics:mask_1_graphics_306,x:215.1,y:237.3}).wait(1).to({graphics:mask_1_graphics_307,x:215,y:237.3}).wait(1).to({graphics:mask_1_graphics_308,x:215,y:237.3}).wait(1).to({graphics:mask_1_graphics_309,x:215,y:237.3}).wait(1).to({graphics:mask_1_graphics_310,x:215,y:237.3}).wait(1).to({graphics:mask_1_graphics_311,x:215,y:237.3}).wait(1).to({graphics:mask_1_graphics_312,x:214.9,y:237.3}).wait(1).to({graphics:mask_1_graphics_313,x:214.9,y:237.3}).wait(1).to({graphics:mask_1_graphics_314,x:214.9,y:237.2}).wait(1).to({graphics:mask_1_graphics_315,x:214.9,y:237.2}).wait(1).to({graphics:mask_1_graphics_316,x:214.9,y:237.2}).wait(1).to({graphics:mask_1_graphics_317,x:214.8,y:237.2}).wait(1).to({graphics:mask_1_graphics_318,x:214.8,y:237.2}).wait(1).to({graphics:mask_1_graphics_319,x:214.8,y:237.2}).wait(1).to({graphics:mask_1_graphics_320,x:214.8,y:237.2}).wait(235));

	// Layer 6
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(20,1,1).p("APDG7QhCB3hUBrQhTBqhiBlQhiBlh6BMQh6BMiBA8QiAA7iYAiQh7AWipgDQiHgLh9hBQh+hBhmhlQhlhkhHh8QhDh3gdiGQgdiFAHiGQAHiTAkiPQAhiHA5iEQA5iDBMh/QBLiABUhtQBUhtBuhfQBthgCGhJQCGhJCCgzQCAgzCMgMQCLgLCQAbQCQAbCCBHQB/BFBfBqQBfBqArCIQAqCIAQB4QAPB4gEB/QgEB+g2CtQg2Cug3B9QgZA6gkAyg");
	this.shape_3.setTransform(217.7,277);
	this.shape_3._off = true;

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(291).to({_off:false},0).wait(264));

	// Layer 5 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_159 = new cjs.Graphics().p("AwMRwQjXrrF4qnQF4qoLpjWQLqjXKoF4MgcWAzQQqol4jWrpg");
	var mask_2_graphics_160 = new cjs.Graphics().p("AvwSMQjmrmFpqvQFqqwLljlQLljnKwFqMgbRAz1Qqwlpjmrlg");
	var mask_2_graphics_161 = new cjs.Graphics().p("AvSSoQj2rhFbq2QFbq3Lgj1QLgj2K3FbMgaLA0ZQq3lbj1rgg");
	var mask_2_graphics_162 = new cjs.Graphics().p("Au0TFQkFrcFNq+QFMq+LbkDQLbkGK+FMMgZGA08Qq9lNkFrag");
	var mask_2_graphics_163 = new cjs.Graphics().p("AuUThQkVrWE+rEQE+rFLVkTQLVkVLFE+MgX/A1cQrEk+kTrVg");
	var mask_2_graphics_164 = new cjs.Graphics().p("At0T+QkkrREwrKQEvrLLPkjQLPkkLLEvMgW3A17QrKkvkjrOg");
	var mask_2_graphics_165 = new cjs.Graphics().p("AtTUaQkyrKEgrRQEgrRLJkxQLJkzLREgMgVvA2ZQrQkgkyrJg");
	var mask_2_graphics_166 = new cjs.Graphics().p("AsxU3QlBrEERrWQERrXLClAQLDlCLXERMgUmA21QrWkRlBrCg");
	var mask_2_graphics_167 = new cjs.Graphics().p("AsOVUQlQq9ECrcQECrdK7lPQK8lQLdECMgTdA3PQrbkBlQq7g");
	var mask_2_graphics_168 = new cjs.Graphics().p("ArqVwQleq1DyrhQDzriK0leQK0lfLiDzMgSSA3pQrhjzleq0g");
	var mask_2_graphics_169 = new cjs.Graphics().p("ArFWNQltquDjrmQDjrnKtlrQKtluLmDjMgRHA4AQrmjjlsqsg");
	var mask_2_graphics_170 = new cjs.Graphics().p("AqfWqQl8qnDUrrQDTrrKll5QKll8LsDUMgP9A4WQrqjUl6qkg");
	var mask_2_graphics_171 = new cjs.Graphics().p("Ap5XGQmJqeDErwQDDruKdmIQKdmKLwDEMgOxA4rQrvjEmIqdg");
	var mask_2_graphics_172 = new cjs.Graphics().p("ApSXjQmXqWC0rzQC0rzKVmWQKUmXL0C0MgNlA49Qrzi0mWqUg");
	var mask_2_graphics_173 = new cjs.Graphics().p("AoqYAQmlqOClr3QCkr2KMmjQKMmlL3CkMgMZA5PQr2ilmkqLg");
	var mask_2_graphics_174 = new cjs.Graphics().p("AoBYcQmyqECUr6QCUr6KEmxQKCmyL7CUMgLMA5eQr6iUmxqDg");
	var mask_2_graphics_175 = new cjs.Graphics().p("AnYY5Qm/p7CEr9QCFr9J7m+QJ4nAL+CFMgKAA5sQr8iFm/p5g");
	var mask_2_graphics_176 = new cjs.Graphics().p("AmtZVQnNpxB0sAQB1r/JxnLQJvnNMAB0MgIyA55QsAh1nKpwg");
	var mask_2_graphics_177 = new cjs.Graphics().p("AmCZyQnapoBksCQBlsBJnnYQJmnaMCBkMgHlA6EQsChlnXpmg");
	var mask_2_graphics_178 = new cjs.Graphics().p("AlXaOQnmpeBUsEQBUsDJenlQJcnmMEBUMgGXA6NQsEhVnlpcg");
	var mask_2_graphics_179 = new cjs.Graphics().p("AkqaqQnzpTBEsGQBEsEJTnyQJSnzMFBEMgFJA6VQsGhFnwpSg");
	var mask_2_graphics_180 = new cjs.Graphics().p("Aj9bHQoApKA0sGQA0sGJJn+QJHn/MHA0MgD8A6aQsGg0n9pHg");
	var mask_2_graphics_181 = new cjs.Graphics().p("AjQbiQoLo+AksHQAksHI+oKQI7oMMIAkMgCtA6fQsIgkoJo9g");
	var mask_2_graphics_182 = new cjs.Graphics().p("Aiib+QoXozAUsIQAUsHIzoWQIwoXMJATMgBfA6iQsJgUoVoyg");
	var mask_2_graphics_183 = new cjs.Graphics().p("AhzcaQojooAEsIQADsIIoohQImojMIADMgARA6jQsIgEohomg");
	var mask_2_graphics_184 = new cjs.Graphics().p("Ahic1QouocgNsIQgNsIIdosQIZovMJgMMAA9A6hIgkABQrxAAofoPg");
	var mask_2_graphics_185 = new cjs.Graphics().p("AhZdQQo5oRgdsHQgdsHIQo4QIOo6MIgcMACMA6fIhQACQrWAAoZn0g");
	var mask_2_graphics_186 = new cjs.Graphics().p("AhQdqQpEoEgtsIQgtsGIFpCQICpFMHgtMADZA6cQg+AEg9AAQq6AAoUnag");
	var mask_2_graphics_187 = new cjs.Graphics().p("AhGeDQpOn4g+sGQg9sFH4pNQH2pPMGg9MAEoA6WQhUAHhSAAQqgAAoNnBg");
	var mask_2_graphics_188 = new cjs.Graphics().p("Ag7ecQpZnshOsEQhNsEHspXQHppaMFhNMAF1A6PQhpALhmAAQqHAAoFmog");
	var mask_2_graphics_189 = new cjs.Graphics().p("Agwe0QpjnfhesDQhdsBHfpiQHdpjMDheMAHDA6HQh+APh6AAQpvAAn9mQg");
	var mask_2_graphics_190 = new cjs.Graphics().p("AgkfMQptnThusAQhtsAHSprQHQptMAhuMAIRA58QiTAViNAAQpXAAn0l4g");
	var mask_2_graphics_191 = new cjs.Graphics().p("AgYfiQp3nFh9r+Qh+r+HGp0QHDp3L9h9MAJeA5wQimAbigAAQpBAAnrlig");
	var mask_2_graphics_192 = new cjs.Graphics().p("AgLf5QqAm4iOr8QiNr7G4p+QG2p/L7iOMAKqA5jQi6AiiyAAQoqAAnilLg");
	var mask_2_graphics_193 = new cjs.Graphics().p("EAABAgOQqImqidr5Qier4GrqGQGpqJL3ieMAL4A5UQjOAqjFAAQoUAAnZk2g");
	var mask_2_graphics_194 = new cjs.Graphics().p("EAAPAgjQqRmditr1Qitr0GdqQQGbqRL0itMANEA5CQjgA0jYAAQn/AAnOkig");
	var mask_2_graphics_195 = new cjs.Graphics().p("EAAdAg3QqZmPi9rxQi9rxGQqYQGNqaLwi9MAOQA4xQjzA9jpAAQnrAAnDkOg");
	var mask_2_graphics_196 = new cjs.Graphics().p("EAAsAhKQqhmBjNrsQjMrtGBqgQGAqiLrjNMAPcA4dQkFBHj7AAQnXAAm3j7g");
	var mask_2_graphics_197 = new cjs.Graphics().p("EAA8AhdQqqlzjcroQjcroFzqoQFyqqLnjcMAQmA4HQkVBSkNAAQnEAAmqjog");
	var mask_2_graphics_198 = new cjs.Graphics().p("EABLAhvQqwlkjsrkQjsrjFlqwQFjqxLjjsMARxA3wQknBekeAAQmxAAmejWg");
	var mask_2_graphics_199 = new cjs.Graphics().p("EABcAiAQq4lWj7reQj7reFWq3QFVq5Ldj7MAS8A3YQk4BqkwAAQmeAAmQjFg");
	var mask_2_graphics_200 = new cjs.Graphics().p("EABtAiRQq/lHkLrZQkKrZFIq+QFGrALYkKMAUFA29QlIB4lCAAQmLAAmCi0g");
	var mask_2_graphics_201 = new cjs.Graphics().p("EAB+AihQrGk5kZrTQkarTE6rFQE3rGLSkZMAVOA2hQlXCGlUAAQl4AAl1ikg");
	var mask_2_graphics_202 = new cjs.Graphics().p("EACQAiwQrMkqkprNQkorNEqrLQEprMLMkpMAWWA2FQlmCUlmAAQlmAAlmiVg");
	var mask_2_graphics_203 = new cjs.Graphics().p("EACiAi/QrSkbk3rHQk4rHEcrRQEZrSLGk3MAXeA1lQl1Ckl4AAQlUAAlXiGg");
	var mask_2_graphics_204 = new cjs.Graphics().p("EAC1AjMQrYkLlGrAQlGrBEMrWQEKrZK/lGMAYmA1GQmDCzmLAAQlCAAlHh4g");
	var mask_2_graphics_205 = new cjs.Graphics().p("EADQAjfQrgj2laq3Qlbq2D3reQD0rgK2lbMAaJA0WQmXDLmkAAQkqAAkwhlg");
	var mask_2_graphics_206 = new cjs.Graphics().p("EADsAjvQrmjglvqrQlwqsDhrlQDfrnKslvMAbqAzjQmpDkm/AAQkQAAkZhVg");
	var mask_2_graphics_207 = new cjs.Graphics().p("EAEJAj/QrtjKmDqhQmDqgDLrtQDIrsKhmDMAdLAytQm6D/nbAAQj3AAkAhFg");
	var mask_2_graphics_208 = new cjs.Graphics().p("EAEnAkMQrzizmWqVQmXqVC0ryQCzryKUmXMAerAx1QnLEan3AAQjeAAjmg3g");
	var mask_2_graphics_209 = new cjs.Graphics().p("EAFGAkZQr4iemqqIQmqqJCer3QCcr3KImqMAgIAw5QnaE4oUAAQjEAAjMgqg");
	var mask_2_graphics_210 = new cjs.Graphics().p("EAFlAkjQr8iHm9p7Qm9p8CHr7QCGr7J7m9MAhkAv6QnoFWozAAQiqAAixgfg");
	var mask_2_graphics_211 = new cjs.Graphics().p("EAGFAksQr/hwnQpuQnQpuBxsAQBvr+JunQMAi+Au6Qn2F2pTAAQiPAAiVgWg");
	var mask_2_graphics_212 = new cjs.Graphics().p("EAGmAk0QsChanipgQnjpgBbsCQBYsCJgniMAkVAt3QoBGWp0ABQh0AAh4gOg");
	var mask_2_graphics_213 = new cjs.Graphics().p("EAHIAk5QsFhCn0pSQn0pSBEsEQBBsEJSn0MAlrAsxQoMG5qXAAQhYAAhagIg");
	var mask_2_graphics_214 = new cjs.Graphics().p("EAHqAk9QsHgroFpDQoFpDAtsGQAqsFJDoFMAm/AroQoWHdq8AAQg6AAg8gEg");
	var mask_2_graphics_215 = new cjs.Graphics().p("EAINAlAQsIgVoWozQoWozAWsHQATsHI0oWMAoQAqdQoeIDriAAIg5gBg");
	var mask_2_graphics_216 = new cjs.Graphics().p("Ar+cgQomokgCsHQgDsHIjomMApgApQQojImsHACIgGAAQsEAAokogg");
	var mask_2_graphics_217 = new cjs.Graphics().p("ArpdGQo3oTgYsHQgasGISo2MAqtAoAQoTI2sGAZIhGABQrbAAocn6g");
	var mask_2_graphics_218 = new cjs.Graphics().p("ArTdrQpGoCgvsGQgxsFIBpGMAr3AmuQoBJGsFAwQhDAFhBAAQq0AAoUnWg");
	var mask_2_graphics_219 = new cjs.Graphics().p("Aq7ePQpVnxhGsEQhIsDHwpVMAs/AlaQnwJVsDBHQhhAJheAAQqQAAoKmyg");
	var mask_2_graphics_220 = new cjs.Graphics().p("AqiexQpjnehdsCQhfsBHfpjMAuFAkEQnfJjsBBeQh+APh6AAQpuAAn/mQg");
	var mask_2_graphics_221 = new cjs.Graphics().p("AqHfSQpxnMhzr/Qh2r/HMpwMAvIAisQnMJxr+B1QibAXiVAAQpNAAnzlvg");
	var mask_2_graphics_222 = new cjs.Graphics().p("ApqfyQp+m6iKr7QiMr7G5p9MAwIAhSQm5J+r6CLQi3AhixAAQosAAnmlPg");
	var mask_2_graphics_223 = new cjs.Graphics().p("EgJLAgQQqLmmihr3Qijr2GnqLMAxGAf2QmnKLr1CiQjTAtjKAAQoOAAnXkyg");
	var mask_2_graphics_224 = new cjs.Graphics().p("EgIrAgtQqYmTi3rxQi5ryGTqWMAyBAeYQmTKXrwC4QjtA6jkAAQnxAAnHkVg");
	var mask_2_graphics_225 = new cjs.Graphics().p("EgIKAhJQqjl/jNrsQjPrsF/qiMAy5Ac5Ql/KjrrDOQkGBIj9AAQnVAAm3j5g");
	var mask_2_graphics_226 = new cjs.Graphics().p("EgHmAhkQqvlsjjrlQjlrlFrqtMAzuAbXQlrKurkDkQkfBYkWAAQm5AAmljeg");
	var mask_2_graphics_227 = new cjs.Graphics().p("EgHCAh9Qq4lXj5rfQj8reFXq3MA0hAZ1QlXK4rdD6Qk2BpkwAAQmeABmTjGg");
	var mask_2_graphics_228 = new cjs.Graphics().p("EgGcAiUQrClCkPrXQkQrWFBrBMA1RAYQQlCLDrWEPQlNB9lJAAQmEAAl/ivg");
	var mask_2_graphics_229 = new cjs.Graphics().p("EgF0AiqQrMktkkrOQkmrOEtrLMA19AWsQktLLrOElQljCRliAAQlqAAlqiZg");
	var mask_2_graphics_230 = new cjs.Graphics().p("EgFLAi/QrVkYk5rFQk7rFEYrTMA2mAVEQkYLUrEE6Ql4Cnl8AAQlSAAlTiEg");
	var mask_2_graphics_231 = new cjs.Graphics().p("EgEhAjSQrckClOq8QlQq7ECrbMA3MATcQkCLcq6FPQmMC9mWAAQk5AAk9hwg");
	var mask_2_graphics_232 = new cjs.Graphics().p("EgD2AjkQrjjsljqyQlkqxDsrjMA3wAR0QjsLjqxFjQmfDWmwAAQkgAAkmheg");
	var mask_2_graphics_233 = new cjs.Graphics().p("EgDJAj0QrqjWl3qnQl4qnDWrpMA4QAQKQjWLqqmF3QmxDwnMAAQkGAAkOhOg");
	var mask_2_graphics_234 = new cjs.Graphics().p("EgCbAkDQrwjAmLqcQmMqbDArwMA4tAOgQjALwqaGLQnCELnoAAQjtAAj1g/g");
	var mask_2_graphics_235 = new cjs.Graphics().p("EgBsAkQQr1iqmeqQQmgqOCpr2MA5IAM0QiqL2qPGeQnSEnoFAAQjTAAjbgxg");
	var mask_2_graphics_236 = new cjs.Graphics().p("EgA7AkcQr6iUmyqDQmzqCCTr7MA5eALIQiTL6qCGyQnhFFojAAQi5AAjAglg");
	var mask_2_graphics_237 = new cjs.Graphics().p("EgAKAkmQr+h9nEp2QnGp1B9r/MA5xAJbQh9L+p1HFQnuFkpCAAQifAAilgbg");
	var mask_2_graphics_238 = new cjs.Graphics().p("EAAoAkuQsBhmnWppQnZpnBmsCMA6CAHuQhmMBpoHXQn7GEpiAAQiEAAiJgSg");
	var mask_2_graphics_239 = new cjs.Graphics().p("EABcAk1QsEhPnppbQnqpZBPsEMA6PAF/QhPMEpZHpQoHGmqEAAQhpAAhrgLg");
	var mask_2_graphics_240 = new cjs.Graphics().p("EACQAk6QsFg4n7pMQn8pLA5sGMA6YAERQg4MGpLH7QoRHJqoAAQhLAAhOgGg");
	var mask_2_graphics_241 = new cjs.Graphics().p("EADGAk+QsHgioMo9QoNo7AisHMA6fACiQgiMHo7IMQoaHurOAAQguAAgugCg");
	var mask_2_graphics_242 = new cjs.Graphics().p("EAD8Ak/QsHgLodosQodosAKsIMA6iAAzQgKMJosIcQoiITr1AAIgeAAg");
	var mask_2_graphics_243 = new cjs.Graphics().p("AwGcqQosoegJsIMA6igAtQAJMJodIqQofIssIAJIgaAAQr3AAohoVg");
	var mask_2_graphics_244 = new cjs.Graphics().p("AvjdLQo5oPgesIMA6ggCNQAdMIoPI4QoQI5sIAeQgpABgoAAQrUAAoan0g");
	var mask_2_graphics_245 = new cjs.Graphics().p("Au/drQpHoAgxsHMA6agDtQAxMHoAJFQoBJHsHAxQhEAEhCAAQqzAAoSnUg");
	var mask_2_graphics_246 = new cjs.Graphics().p("AubeKQpUnxhFsFMA6TgFNQBFMFnxJSQnyJUsFBFQheAJhcAAQqTAAoKm2g");
	var mask_2_graphics_247 = new cjs.Graphics().p("At2eoQpgnhhZsDMA6IgGtQBZMDnhJfQnjJgsDBZQh4AOh0AAQp0AAoBmYg");
	var mask_2_graphics_248 = new cjs.Graphics().p("AtQfFQpsnRhtsBMA58gIMQBtMAnSJrQnTJtsABtQiRAUiMAAQpYAAn2l7g");
	var mask_2_graphics_249 = new cjs.Graphics().p("AspfhQp5nBiAr9MA5tgJsQCBL+nCJ2QnDJ5r9CAQiqAcijAAQo7AAnrlfg");
	var mask_2_graphics_250 = new cjs.Graphics().p("AsCf8QqEmwiUr6MA5cgLKQCUL5mxKCQmyKEr6CUQjCAmi5AAQohAAnflFg");
	var mask_2_graphics_251 = new cjs.Graphics().p("EgLaAgXQqPmhinr1MA5IgMpQCnL2mgKNQmiKPr1CnQjZAwjQAAQoHAAnSkqg");
	var mask_2_graphics_252 = new cjs.Graphics().p("EgKyAgwQqYmPi7ryMA4ygOGQC6LxmPKYQmRKZrxC7QjvA7jnAAQntAAnFkRg");
	var mask_2_graphics_253 = new cjs.Graphics().p("EgKIAhIQqjl+jOrsMA4ZgPiQDOLrl+KhQl/KjrsDOQkGBIj8AAQnVAAm2j5g");
	var mask_2_graphics_254 = new cjs.Graphics().p("EgJeAhfQqtltjhrmMA3+gQ/QDiLmltKrQluKsrnDiQkaBWkSAAQm9AAmnjjg");
	var mask_2_graphics_255 = new cjs.Graphics().p("EgI0Ah1Qq1lbj0rgMA3ggSaQD1LflbK0QldK2rgD0QkvBlkoAAQmmAAmXjNg");
	var mask_2_graphics_256 = new cjs.Graphics().p("EgIJAiKQq+lJkHraMA3BgT1QEHLZlJK8QlKK/raEHQlDB1k+AAQmOAAmHi4g");
	var mask_2_graphics_257 = new cjs.Graphics().p("EgHmAiaQrFk7kWrUMA2ngU9QEWLTk7LEQk8LFrUEWQlTCClPAAQl8AAl5iog");
	var mask_2_graphics_258 = new cjs.Graphics().p("EgHDAipQrLksklrOMA2KgWEQElLNksLJQktLMrPElQlhCQlhAAQlrAAlqiZg");
	var mask_2_graphics_259 = new cjs.Graphics().p("EgGgAi3QrQkdk0rIMA1tgXLQEzLIkeLPQkeLRrIE0QlxCflyAAQlZAAlciLg");
	var mask_2_graphics_260 = new cjs.Graphics().p("EgF8AjFQrWkOlCrCMA1NgYQQFCLAkPLVQkQLXrBFCQl/CvmEAAQlHAAlNh9g");
	var mask_2_graphics_261 = new cjs.Graphics().p("EgFYAjSQrcj/lQq7MA0tgZWQFQK6kALbQkBLcq7FQQmMC/mWAAQk2AAk9hwg");
	var mask_2_graphics_262 = new cjs.Graphics().p("EgEzAjfQrhjxlfqzMA0LgabQFeKzjxLfQjxLiq0FeQmZDQmpAAQkkAAkthjg");
	var mask_2_graphics_263 = new cjs.Graphics().p("EgEPAjqQrljhltqsMAzngbfQFtKsjiLkQjjLmqsFtQmmDhm7AAQkUAAkchYg");
	var mask_2_graphics_264 = new cjs.Graphics().p("EgDqAj1QrqjRl6qlMAzCgciQF6KkjSLpQjTLqqlF7QmyDynPAAQkCAAkLhMg");
	var mask_2_graphics_265 = new cjs.Graphics().p("EgDFAkAQrujDmIqdMAycgdkQGIKcjDLtQjELvqdGIQm+EFnhAAQjxAAj6hBg");
	var mask_2_graphics_266 = new cjs.Graphics().p("EgCfAkJQryizmWqVMAx0gemQGWKUi0LxQi0LzqVGWQnJEYn1AAQjgAAjng4g");
	var mask_2_graphics_267 = new cjs.Graphics().p("EgB6AkSQr1ikmkqMMAxMgfnQGjKMikL0QilL2qMGjQnUEtoJAAQjOAAjWgvg");
	var mask_2_graphics_268 = new cjs.Graphics().p("EgBUAkaQr5iUmwqEMAwhggmQGxKCiVL4QiWL5qDGxQneFBoeAAQi8AAjDgng");
	var mask_2_graphics_269 = new cjs.Graphics().p("EgAuAkhQr8iEm9p7MAv2ghmQG9J6iFL6QiGL9p7G9QnnFWozAAQiqAAiwgfg");
	var mask_2_graphics_270 = new cjs.Graphics().p("EgAIAkoQr+h1nLpyMAvJgijQHLJwh2L9Qh2L/pxHKQnxFspJAAQiYAAicgYg");
	var mask_2_graphics_271 = new cjs.Graphics().p("EAAdAktQr/hlnYpoMAucgjhQHXJohmL+QhnMBpnHYQn6GCpfAAQiFAAiKgTg");
	var mask_2_graphics_272 = new cjs.Graphics().p("EABDAkyQsBhVnkpeMAtsgkdQHkJehWMAQhXMDpeHjQoBGap3AAQhyAAh2gOg");
	var mask_2_graphics_273 = new cjs.Graphics().p("EABpAk3QsChGnwpUMAs7glZQHwJUhGMCQhHMEpUHwQoJGyqOAAQhfAAhigJg");
	var mask_2_graphics_274 = new cjs.Graphics().p("EACQAk6QsEg2n8pKMAsKgmTQH8JKg3MDQg3MGpKH8QoQHJqnAAQhLAAhMgFg");
	var mask_2_graphics_275 = new cjs.Graphics().p("EAC2Ak8QsFgmoIo/MArXgnMQIII/gnMEQgnMHo/IIQoWHirBAAQg3AAg3gDg");
	var mask_2_graphics_276 = new cjs.Graphics().p("EADcAk+QsFgWoUo0MAqjgoFQIUI1gXMEQgXMHo1IUQocH8rbAAIhEgBg");
	var mask_2_graphics_277 = new cjs.Graphics().p("EAEDAk/QsGgGofoqMApugo7QIfIpgHMFQgIMIopIfQohIWr4AAIgXAAg");
	var mask_2_graphics_278 = new cjs.Graphics().p("AwHcqMAo3gpxQIrIeAIMEQAJMIofIqQoeIqsGAIIgbAAQr1AAogoVg");
	var mask_2_graphics_279 = new cjs.Graphics().p("AvvdCMAoHgqhQI0IUAWMEQAXMIoUI0QoUI0sHAVIhBABQrcAAocn9g");
	var mask_2_graphics_280 = new cjs.Graphics().p("AvXdZMAnWgrQQI+IKAkMEQAlMHoKI+QoKI+sHAjQgzADgzAAQrFAAoXnng");
	var mask_2_graphics_281 = new cjs.Graphics().p("Au/dvMAmlgr9QJHIAAyMDQAzMHoAJHQoAJHsFAxQhHAFhFAAQquAAoSnRg");
	var mask_2_graphics_282 = new cjs.Graphics().p("AumeFMAlygspQJQH1BAMCQBBMGn1JQQn1JQsFBAQhZAHhXAAQqYAAoMm7g");
	var mask_2_graphics_283 = new cjs.Graphics().p("AuMebMAk+gtWQJZHrBOMBQBPMFnrJZQnqJZsEBOQhrALhoAAQqDAAoFmmg");
	var mask_2_graphics_284 = new cjs.Graphics().p("AtyewMAkJguAQJiHfBcMAQBdMDngJiQnfJjsCBbQh+APh5AAQpuAAn+mRg");
	var mask_2_graphics_285 = new cjs.Graphics().p("AtYfEMAjUgupQJrHUBqL+QBqMCnUJqQnVJrsABpQiPAUiKAAQpaAAn3l9g");
	var mask_2_graphics_286 = new cjs.Graphics().p("As+fYMAiegvSQJ0HJB4L8QB4MAnJJzQnKJzr+B3QihAaiaAAQpGAAnwlqg");
	var mask_2_graphics_287 = new cjs.Graphics().p("AsjfsMAhogv7QJ7G/CGL6QCGL9m+J7Qm+J8r8CFQiyAfiqAAQozAAnolWg");
	var mask_2_graphics_288 = new cjs.Graphics().p("AsIf/MAgwgwhQKEGyCUL4QCUL7mzKDQmzKEr6CTQjCAmi6AAQogAAnglEg");
	var mask_2_graphics_289 = new cjs.Graphics().p("EgLsAgSMAf4gxIQKLGnCiL1QChL5mnKLQmmKMr4CgQjSAtjLAAQoOAAnWkxg");
	var mask_2_graphics_290 = new cjs.Graphics().p("EgLQAgkMAe/gxsQKTGbCvLyQCwL1mcKTQmbKUr0CuQjjA1jaAAQn8AAnNkgg");
	var mask_2_graphics_291 = new cjs.Graphics().p("EgKzAg1MAeGgyQQKaGQC9LvQC9LymPKaQmPKbryC8QjyA9jqAAQnqAAnEkPg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(159).to({graphics:mask_2_graphics_159,x:167.2,y:225.7}).wait(1).to({graphics:mask_2_graphics_160,x:165.5,y:226.6}).wait(1).to({graphics:mask_2_graphics_161,x:163.7,y:227.5}).wait(1).to({graphics:mask_2_graphics_162,x:162,y:228.4}).wait(1).to({graphics:mask_2_graphics_163,x:160.2,y:229.2}).wait(1).to({graphics:mask_2_graphics_164,x:158.4,y:229.9}).wait(1).to({graphics:mask_2_graphics_165,x:156.6,y:230.7}).wait(1).to({graphics:mask_2_graphics_166,x:154.8,y:231.4}).wait(1).to({graphics:mask_2_graphics_167,x:153,y:232}).wait(1).to({graphics:mask_2_graphics_168,x:151.1,y:232.7}).wait(1).to({graphics:mask_2_graphics_169,x:149.2,y:233.2}).wait(1).to({graphics:mask_2_graphics_170,x:147.4,y:233.8}).wait(1).to({graphics:mask_2_graphics_171,x:145.5,y:234.3}).wait(1).to({graphics:mask_2_graphics_172,x:143.6,y:234.7}).wait(1).to({graphics:mask_2_graphics_173,x:141.7,y:235.2}).wait(1).to({graphics:mask_2_graphics_174,x:139.8,y:235.5}).wait(1).to({graphics:mask_2_graphics_175,x:137.9,y:235.9}).wait(1).to({graphics:mask_2_graphics_176,x:135.9,y:236.2}).wait(1).to({graphics:mask_2_graphics_177,x:134,y:236.5}).wait(1).to({graphics:mask_2_graphics_178,x:132.1,y:236.7}).wait(1).to({graphics:mask_2_graphics_179,x:130.1,y:236.9}).wait(1).to({graphics:mask_2_graphics_180,x:128.2,y:237}).wait(1).to({graphics:mask_2_graphics_181,x:126.2,y:237.1}).wait(1).to({graphics:mask_2_graphics_182,x:124.3,y:237.2}).wait(1).to({graphics:mask_2_graphics_183,x:122.3,y:237.2}).wait(1).to({graphics:mask_2_graphics_184,x:123.4,y:237.2}).wait(1).to({graphics:mask_2_graphics_185,x:125.4,y:237.2}).wait(1).to({graphics:mask_2_graphics_186,x:127.3,y:237.2}).wait(1).to({graphics:mask_2_graphics_187,x:129.3,y:237.2}).wait(1).to({graphics:mask_2_graphics_188,x:131.2,y:237.2}).wait(1).to({graphics:mask_2_graphics_189,x:133.2,y:237.2}).wait(1).to({graphics:mask_2_graphics_190,x:135.1,y:237.2}).wait(1).to({graphics:mask_2_graphics_191,x:137,y:237.2}).wait(1).to({graphics:mask_2_graphics_192,x:138.9,y:237.2}).wait(1).to({graphics:mask_2_graphics_193,x:140.9,y:237.2}).wait(1).to({graphics:mask_2_graphics_194,x:142.8,y:237.3}).wait(1).to({graphics:mask_2_graphics_195,x:144.7,y:237.3}).wait(1).to({graphics:mask_2_graphics_196,x:146.6,y:237.3}).wait(1).to({graphics:mask_2_graphics_197,x:148.4,y:237.3}).wait(1).to({graphics:mask_2_graphics_198,x:150.3,y:237.3}).wait(1).to({graphics:mask_2_graphics_199,x:152.2,y:237.3}).wait(1).to({graphics:mask_2_graphics_200,x:154,y:237.3}).wait(1).to({graphics:mask_2_graphics_201,x:155.8,y:237.3}).wait(1).to({graphics:mask_2_graphics_202,x:157.6,y:237.3}).wait(1).to({graphics:mask_2_graphics_203,x:159.4,y:237.3}).wait(1).to({graphics:mask_2_graphics_204,x:161.2,y:237.2}).wait(1).to({graphics:mask_2_graphics_205,x:163.7,y:237.2}).wait(1).to({graphics:mask_2_graphics_206,x:166.1,y:237.2}).wait(1).to({graphics:mask_2_graphics_207,x:168.5,y:237.2}).wait(1).to({graphics:mask_2_graphics_208,x:170.9,y:237.1}).wait(1).to({graphics:mask_2_graphics_209,x:173.2,y:237.1}).wait(1).to({graphics:mask_2_graphics_210,x:175.5,y:237}).wait(1).to({graphics:mask_2_graphics_211,x:177.8,y:237}).wait(1).to({graphics:mask_2_graphics_212,x:179.9,y:237}).wait(1).to({graphics:mask_2_graphics_213,x:182.1,y:236.9}).wait(1).to({graphics:mask_2_graphics_214,x:184.2,y:236.9}).wait(1).to({graphics:mask_2_graphics_215,x:186.2,y:236.9}).wait(1).to({graphics:mask_2_graphics_216,x:188.2,y:236.8}).wait(1).to({graphics:mask_2_graphics_217,x:190.1,y:236.8}).wait(1).to({graphics:mask_2_graphics_218,x:191.9,y:236.9}).wait(1).to({graphics:mask_2_graphics_219,x:193.7,y:236.9}).wait(1).to({graphics:mask_2_graphics_220,x:195.5,y:236.9}).wait(1).to({graphics:mask_2_graphics_221,x:197.1,y:236.9}).wait(1).to({graphics:mask_2_graphics_222,x:198.7,y:236.9}).wait(1).to({graphics:mask_2_graphics_223,x:200.3,y:237}).wait(1).to({graphics:mask_2_graphics_224,x:201.7,y:237}).wait(1).to({graphics:mask_2_graphics_225,x:203.1,y:237}).wait(1).to({graphics:mask_2_graphics_226,x:204.4,y:237}).wait(1).to({graphics:mask_2_graphics_227,x:205.7,y:237.1}).wait(1).to({graphics:mask_2_graphics_228,x:206.9,y:237.1}).wait(1).to({graphics:mask_2_graphics_229,x:208,y:237.1}).wait(1).to({graphics:mask_2_graphics_230,x:209,y:237.1}).wait(1).to({graphics:mask_2_graphics_231,x:209.9,y:237}).wait(1).to({graphics:mask_2_graphics_232,x:210.8,y:237}).wait(1).to({graphics:mask_2_graphics_233,x:211.6,y:237}).wait(1).to({graphics:mask_2_graphics_234,x:212.3,y:237}).wait(1).to({graphics:mask_2_graphics_235,x:213,y:236.9}).wait(1).to({graphics:mask_2_graphics_236,x:213.5,y:236.9}).wait(1).to({graphics:mask_2_graphics_237,x:214,y:236.9}).wait(1).to({graphics:mask_2_graphics_238,x:214.4,y:236.8}).wait(1).to({graphics:mask_2_graphics_239,x:214.7,y:236.8}).wait(1).to({graphics:mask_2_graphics_240,x:214.9,y:236.8}).wait(1).to({graphics:mask_2_graphics_241,x:215.1,y:236.8}).wait(1).to({graphics:mask_2_graphics_242,x:215.1,y:236.7}).wait(1).to({graphics:mask_2_graphics_243,x:215.1,y:236.7}).wait(1).to({graphics:mask_2_graphics_244,x:215.1,y:236.7}).wait(1).to({graphics:mask_2_graphics_245,x:215.1,y:236.7}).wait(1).to({graphics:mask_2_graphics_246,x:215.1,y:236.8}).wait(1).to({graphics:mask_2_graphics_247,x:215.1,y:236.8}).wait(1).to({graphics:mask_2_graphics_248,x:215.2,y:236.8}).wait(1).to({graphics:mask_2_graphics_249,x:215.2,y:236.8}).wait(1).to({graphics:mask_2_graphics_250,x:215.2,y:236.9}).wait(1).to({graphics:mask_2_graphics_251,x:215.2,y:236.9}).wait(1).to({graphics:mask_2_graphics_252,x:215.2,y:236.9}).wait(1).to({graphics:mask_2_graphics_253,x:215.2,y:236.9}).wait(1).to({graphics:mask_2_graphics_254,x:215.2,y:237}).wait(1).to({graphics:mask_2_graphics_255,x:215.2,y:237}).wait(1).to({graphics:mask_2_graphics_256,x:215.2,y:237}).wait(1).to({graphics:mask_2_graphics_257,x:215.2,y:237}).wait(1).to({graphics:mask_2_graphics_258,x:215.2,y:237}).wait(1).to({graphics:mask_2_graphics_259,x:215.2,y:237}).wait(1).to({graphics:mask_2_graphics_260,x:215.2,y:237}).wait(1).to({graphics:mask_2_graphics_261,x:215.2,y:237}).wait(1).to({graphics:mask_2_graphics_262,x:215.1,y:237}).wait(1).to({graphics:mask_2_graphics_263,x:215.1,y:237}).wait(1).to({graphics:mask_2_graphics_264,x:215.1,y:236.9}).wait(1).to({graphics:mask_2_graphics_265,x:215.1,y:236.9}).wait(1).to({graphics:mask_2_graphics_266,x:215,y:236.9}).wait(1).to({graphics:mask_2_graphics_267,x:215,y:236.9}).wait(1).to({graphics:mask_2_graphics_268,x:215,y:236.9}).wait(1).to({graphics:mask_2_graphics_269,x:215,y:236.8}).wait(1).to({graphics:mask_2_graphics_270,x:214.9,y:236.8}).wait(1).to({graphics:mask_2_graphics_271,x:214.9,y:236.8}).wait(1).to({graphics:mask_2_graphics_272,x:214.9,y:236.8}).wait(1).to({graphics:mask_2_graphics_273,x:214.8,y:236.8}).wait(1).to({graphics:mask_2_graphics_274,x:214.8,y:236.7}).wait(1).to({graphics:mask_2_graphics_275,x:214.8,y:236.7}).wait(1).to({graphics:mask_2_graphics_276,x:214.8,y:236.7}).wait(1).to({graphics:mask_2_graphics_277,x:214.8,y:236.7}).wait(1).to({graphics:mask_2_graphics_278,x:214.7,y:236.7}).wait(1).to({graphics:mask_2_graphics_279,x:214.7,y:236.7}).wait(1).to({graphics:mask_2_graphics_280,x:214.7,y:236.8}).wait(1).to({graphics:mask_2_graphics_281,x:214.8,y:236.8}).wait(1).to({graphics:mask_2_graphics_282,x:214.8,y:236.8}).wait(1).to({graphics:mask_2_graphics_283,x:214.8,y:236.9}).wait(1).to({graphics:mask_2_graphics_284,x:214.8,y:236.9}).wait(1).to({graphics:mask_2_graphics_285,x:214.8,y:236.9}).wait(1).to({graphics:mask_2_graphics_286,x:214.9,y:237}).wait(1).to({graphics:mask_2_graphics_287,x:214.9,y:237}).wait(1).to({graphics:mask_2_graphics_288,x:214.9,y:237.1}).wait(1).to({graphics:mask_2_graphics_289,x:214.9,y:237.1}).wait(1).to({graphics:mask_2_graphics_290,x:215,y:237.2}).wait(1).to({graphics:mask_2_graphics_291,x:215.1,y:237.2}).wait(264));

	// Layer 4
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(20,1,1).p("ASinXQAIBcgDBfQgEB+g2CtQg2Cug3B9QgZA6gkAyQhCB3hUBrQhTBrhiBlQhiBlh6BMQh6BLiBA8QiAA7iYAiQh7AXipgEQiHgLh9hBQh+hBhmhlQhlhkhHh8QhDh3gdiGQgdiFAHiGQAHiTAkiPQAhiHA5iDQA5iEBMh/QBLh/BUhtQBUhuBuhfQBthgCGhJQCGhJCCgzQAigOAigK");
	this.shape_4.setTransform(217.7,279.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(20,1,1).p("AKNzZQA3AVA2AdQB/BFBfBqQBfBqArCIQAqCIAQB4QAPB5gEB+QgEB+g2CtQg2Cug3B9QgZA6gkAyQhCB4hUBqQhTBrhiBlQhiBlh6BMQh6BMiBA7QiAA7iYAiQh7AXipgEQiHgLh9hBQh+hBhmhlQhlhkhHh8QhDh3gdiGQgdiFAHiGQAHiTAkiPQAhiHA5iDQA5iEBMh/QBLh/BUhtQBUhtBuhgQBthgCGhJQCGhJCCgzQBVgiBbgR");
	this.shape_5.setTransform(217.7,277.8);

	var maskedShapeInstanceList = [this.shape_4,this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4}]},159).to({state:[{t:this.shape_5}]},22).wait(374));

	// Layer 3 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_9 = new cjs.Graphics().p("AES1hQMJAAIkIlQImIlAAMIQAAMJomIlQokIlsJAAg");
	var mask_3_graphics_10 = new cjs.Graphics().p("ADv1gQMJgOIuIaQIwIbAPMIQAOMJocIuQoaIwsIAOg");
	var mask_3_graphics_11 = new cjs.Graphics().p("ADM1fQMJgcI4IPQI6IRAcMIQAdMIoRI4QoPI6sJAdg");
	var mask_3_graphics_12 = new cjs.Graphics().p("ACp1cQMIgrJCIFQJEIGArMHQArMIoHJCQoEJDsIArg");
	var mask_3_graphics_13 = new cjs.Graphics().p("ACH1ZQMHg5JLH6QJNH8A5MFQA6MHn8JMQn6JMsHA6g");
	var mask_3_graphics_14 = new cjs.Graphics().p("ABk1UQMGhIJUHvQJWHxBIMEQBIMGnwJVQnvJWsGBIg");
	var mask_3_graphics_15 = new cjs.Graphics().p("ABB1PQMEhWJeHkQJfHlBXMEQBWMEnmJeQnkJfsEBWg");
	var mask_3_graphics_16 = new cjs.Graphics().p("AAe1IQMDhlJmHZQJpHaBkMBQBlMDnaJmQnZJosCBlg");
	var mask_3_graphics_17 = new cjs.Graphics().p("AgD1BQL/hzJvHNQJxHPBzL/QBzMBnPJvQnNJxsABzg");
	var mask_3_graphics_18 = new cjs.Graphics().p("Agm05QL+iBJ3HCQJ6HDCAL9QCBL+nDJ4QnBJ5r+CBg");
	var mask_3_graphics_19 = new cjs.Graphics().p("AhI0wQL7iPJ/G2QKCG3CPL7QCPL7m3KAQm1KCr8CPg");
	var mask_3_graphics_20 = new cjs.Graphics().p("Ahq0lQL4ieKHGqQKKGrCdL4QCeL5msKIQmpKJr5Ceg");
	var mask_3_graphics_21 = new cjs.Graphics().p("AiM0aQL0isKQGeQKRGfCsL1QCrL2mfKQQmeKRr1Crg");
	var mask_3_graphics_22 = new cjs.Graphics().p("Aiu0OQLxi6KXGSQKZGTC6LxQC5LzmTKXQmRKZrzC5g");
	var mask_3_graphics_23 = new cjs.Graphics().p("AjQ0BQLujIKeGGQKhGGDHLuQDHLvmGKfQmFKgrvDHg");
	var mask_3_graphics_24 = new cjs.Graphics().p("AjyzzQLqjWKmF5QKnF6DVLqQDWLrl6KmQl5KnrrDVg");
	var mask_3_graphics_25 = new cjs.Graphics().p("AkTzlQLmjjKsFtQKvFtDjLnQDjLmluKtQlsKtrnDjg");
	var mask_3_graphics_26 = new cjs.Graphics().p("Ak0zVQLhjxKzFgQK1FgDxLjQDxLhlhK0QlfK1rjDwg");
	var mask_3_graphics_27 = new cjs.Graphics().p("AlVzEQLdj+K5FSQK7FTD/LeQD+LelUK6QlSK6reD/g");
	var mask_3_graphics_28 = new cjs.Graphics().p("Al2yyQLYkMLAFFQLBFGEMLaQEMLYlHLAQlFLBrZEMg");
	var mask_3_graphics_29 = new cjs.Graphics().p("AmXygQLTkZLGE4QLHE5EaLUQEZLUk6LGQk3LGrVEag");
	var mask_3_graphics_30 = new cjs.Graphics().p("Am3yNQLOkmLLErQLNEsEnLPQEnLNktLMQkrLNrOEng");
	var mask_3_graphics_31 = new cjs.Graphics().p("AnXx4QLIk0LREeQLSEeE0LJQE1LJkgLRQkdLSrJE0g");
	var mask_3_graphics_32 = new cjs.Graphics().p("An3xjQLDlBLWEQQLXERFBLEQFCLCkSLXQkQLXrDFBg");
	var mask_3_graphics_33 = new cjs.Graphics().p("AoWxNQK8lOLbEDQLdEDFOK+QFOK8kELbQkDLcq9FPg");
	var mask_3_graphics_34 = new cjs.Graphics().p("Ao1w2QK2lbLfD1QLiD2FbK3QFbK2j3LgQj0Lhq3Fbg");
	var mask_3_graphics_35 = new cjs.Graphics().p("ApUweQKwloLjDnQLmDpFoKwQFoKwjpLkQjnLlqwFog");
	var mask_3_graphics_36 = new cjs.Graphics().p("ApywGQKol0LoDaQLqDaF1KqQF1KojcLpQjZLpqqF1g");
	var mask_3_graphics_37 = new cjs.Graphics().p("AqQvsQKhmBLsDMQLuDMGBKjQGBKijNLsQjLLtqjGCg");
	var mask_3_graphics_38 = new cjs.Graphics().p("AquvSQKbmOLvC/QLxC/GOKbQGOKajALwQi+LxqbGOg");
	var mask_3_graphics_39 = new cjs.Graphics().p("ArMu3QKUmaLyCxQL1CwGaKUQGaKTiyL0QivL0qUGag");
	var mask_3_graphics_40 = new cjs.Graphics().p("ArpubQKMmmL1CiQL4CjGnKMQGmKLikL3QihL4qMGmg");
	var mask_3_graphics_41 = new cjs.Graphics().p("AsFt+QKEmyL4CUQL7CVGyKEQGyKDiWL6QiTL6qEGyg");
	var mask_3_graphics_42 = new cjs.Graphics().p("AsitgQJ8m+L7CGQL9CGG+J8QG+J7iHL9QiFL8p8G+g");
	var mask_3_graphics_43 = new cjs.Graphics().p("As+tCQJ0nKL9B4QMAB5HJJzQHKJzh5L/Qh3L/p0HJg");
	var mask_3_graphics_44 = new cjs.Graphics().p("AtZsjQJrnVL/BqQMCBqHVJrQHVJqhrMBQhoMBpsHVg");
	var mask_3_graphics_45 = new cjs.Graphics().p("At1sDQJjngMABbQMEBcHhJiQHhJhhdMDQhbMDpiHgg");
	var mask_3_graphics_46 = new cjs.Graphics().p("AuPriQJZnsMCBNQMGBOHrJZQHsJYhOMEQhMMFpZHsg");
	var mask_3_graphics_47 = new cjs.Graphics().p("AuqrBQJQn3MEA/QMGA/H3JQQH3JPhAMGQg+MGpQH3g");
	var mask_3_graphics_48 = new cjs.Graphics().p("AvEqfQJHoBMEAwQMIAxICJGQICJGgyMHQgvMGpHICg");
	var mask_3_graphics_49 = new cjs.Graphics().p("Avdp8QI8oMMGAiQMIAiINI9QIMI8gjMIQghMHo9INg");
	var mask_3_graphics_50 = new cjs.Graphics().p("Av3pYQIzoXMGAUQMJAUIXIzQIXIygVMIQgSMIozIXg");
	var mask_3_graphics_51 = new cjs.Graphics().p("AwQo0QIqohMGAFQMJAGIhIpQIiIogHMIQgEMIopIig");
	var mask_3_graphics_52 = new cjs.Graphics().p("AwooPQIforMGgJQMJgJIsIfQIrIfAIMHQAKMIofIsg");
	var mask_3_graphics_53 = new cjs.Graphics().p("AxAnpQIUo2MGgXQMJgXI2IUQI1IVAWMHQAZMIoVI1g");
	var mask_3_graphics_54 = new cjs.Graphics().p("AxYnDQIKo/MFgmQMJglI/IKQI/IKAlMGQAnMHoKI/g");
	var mask_3_graphics_55 = new cjs.Graphics().p("AxvmcQH/pJMFg0QMHg0JJIAQJJH/AzMFQA1MHn/JIg");
	var mask_3_graphics_56 = new cjs.Graphics().p("AyGl0QH1pSMDhDQMGhCJSH0QJTH0BBMFQBDMFn0JSg");
	var mask_3_graphics_57 = new cjs.Graphics().p("AyclMQHppbMChRQMFhRJcHpQJbHqBQMDQBRMEnpJbg");
	var mask_3_graphics_58 = new cjs.Graphics().p("AyykjQHepkMBhfQMDhfJkHdQJlHeBdMCQBgMCndJkg");
	var mask_3_graphics_59 = new cjs.Graphics().p("AzHj6QHTptL+htQMBhtJtHSQJuHTBsL/QBuMAnSJug");
	var mask_3_graphics_60 = new cjs.Graphics().p("AzcjQQHHp1L9h8QL/h7J1HHQJ2HHB6L9QB9L+nHJ2g");
	var mask_3_graphics_61 = new cjs.Graphics().p("AzwilQG7p+L7iKQL8iJJ+G7QJ+G7CIL7QCLL8m7J9g");
	var mask_3_graphics_62 = new cjs.Graphics().p("A0Eh6QGwqGL4iYQL5iYKGGwQKGGvCXL4QCYL5mvKGg");
	var mask_3_graphics_63 = new cjs.Graphics().p("A0XhOQGjqOL2imQL2imKOGjQKOGjCkL2QCnL2mjKOg");
	var mask_3_graphics_64 = new cjs.Graphics().p("A0pgiQGXqWLyizQLzi0KVGWQKWGXCzLzQC0LymXKWg");
	var mask_3_graphics_65 = new cjs.Graphics().p("A07AJQGKqcLvjBQLvjCKdGKQKdGLDBLvQDDLvmLKdg");
	var mask_3_graphics_66 = new cjs.Graphics().p("A1NA3QF+qkLrjPQLsjQKkF+QKkF+DPLrQDRLsl/Kkg");
	var mask_3_graphics_67 = new cjs.Graphics().p("A1eBkQFyqqLnjdQLnjeKsFyQKrFxDcLnQDfLolyKrg");
	var mask_3_graphics_68 = new cjs.Graphics().p("A1uCSQFlqxLijqQLkjsKyFlQKyFlDqLjQDsLjllKyg");
	var mask_3_graphics_69 = new cjs.Graphics().p("A1+DBQFYq3Lej5QLfj5K5FYQK4FYD4LeQD6LflYK4g");
	var mask_3_graphics_70 = new cjs.Graphics().p("A2NDwQFLq+LakGQLakHK+FLQK/FLEGLaQEHLalLK/g");
	var mask_3_graphics_71 = new cjs.Graphics().p("A2bEfQE+rDLUkUQLVkULFE+QLFE+ETLUQEVLVk+LFg");
	var mask_3_graphics_72 = new cjs.Graphics().p("A2pFPQExrJLPkhQLQkiLKExQLKEwEhLQQEiLQkwLKg");
	var mask_3_graphics_73 = new cjs.Graphics().p("A22F/QEjrPLKkuQLKkvLQEjQLQEkEuLKQEvLKkjLQg");
	var mask_3_graphics_74 = new cjs.Graphics().p("A3DGwQEWrVLEk7QLFk8LVEWQLVEWE7LEQE9LFkWLVg");
	var mask_3_graphics_75 = new cjs.Graphics().p("A3PHgQEIrZK+lIQK/lKLaEJQLbEJFIK+QFKK+kJLbg");
	var mask_3_graphics_76 = new cjs.Graphics().p("A3aISQD7reK3lWQK5lWLfD7QLfD7FVK4QFXK4j7Lfg");
	var mask_3_graphics_77 = new cjs.Graphics().p("A3lJDQDtriKxljQKzljLjDtQLjDuFiKxQFkKyjtLkg");
	var mask_3_graphics_78 = new cjs.Graphics().p("A3vJ1QDfrnKrlvQKrlwLoDgQLoDfFuKrQFxKrjgLog");
	var mask_3_graphics_79 = new cjs.Graphics().p("A35KnQDSrrKkl7QKkl9LsDSQLsDSF7KkQF9KkjSLrg");
	var mask_3_graphics_80 = new cjs.Graphics().p("A4CLZQDEruKdmIQKemJLvDDQLvDEGIKdQGJKdjELwg");
	var mask_3_graphics_81 = new cjs.Graphics().p("A4KMMQC2rzKVmUQKXmVLyC2QLzC2GUKVQGWKWi2Lzg");
	var mask_3_graphics_82 = new cjs.Graphics().p("A4RM/QCor3KNmfQKPmiL2CoQL2CoGgKOQGiKOioL2g");
	var mask_3_graphics_83 = new cjs.Graphics().p("A4YNyQCar6KFmrQKImuL4CaQL5CaGsKGQGuKGiZL5g");
	var mask_3_graphics_84 = new cjs.Graphics().p("A4fOlQCMr8J+m4QJ/m5L7CLQL8CMG4J+QG6J+iML8g");
	var mask_3_graphics_85 = new cjs.Graphics().p("A4kPYQB9r+J1nEQJ3nFL+B+QL+B9HEJ2QHGJ1h+L/g");
	var mask_3_graphics_86 = new cjs.Graphics().p("A4pQGQBxsAJunOQJvnQL/BxQMBBxHOJuQHQJuhxMAg");
	var mask_3_graphics_87 = new cjs.Graphics().p("A4tQ0QBksCJmnYQJonaMBBkQMCBkHZJnQHaJmhkMCg");
	var mask_3_graphics_88 = new cjs.Graphics().p("A4xRjQBYsEJeniQJfnkMDBXQMEBXHjJfQHkJehXMEg");
	var mask_3_graphics_89 = new cjs.Graphics().p("A40SRQBLsFJWnsQJXnuMEBKQMGBLHsJWQHvJWhLMFg");
	var mask_3_graphics_90 = new cjs.Graphics().p("A42TAQA9sHJOn1QJQn5MFA+QMGA+H3JOQH4JOg+MGg");
	var mask_3_graphics_91 = new cjs.Graphics().p("A44TuQAxsHJFoAQJHoBMGAwQMHAxIAJGQICJFgwMHg");
	var mask_3_graphics_92 = new cjs.Graphics().p("A46UdQAksII9oKQI+oLMHAkQMIAkIKI9QILI9gjMIg");
	var mask_3_graphics_93 = new cjs.Graphics().p("A47VLQAXsII0oUQI2oUMHAXQMIAXIUI1QIVI0gXMIg");
	var mask_3_graphics_94 = new cjs.Graphics().p("A47V6QAKsJIrocQIsoeMIAKQMJAKIcIsQIfIrgKMJg");
	var mask_3_graphics_95 = new cjs.Graphics().p("AwcBzQIjomMIgDQMJgDImIjQInIiADMIMg6jAAOQgDsJIiomg");
	var mask_3_graphics_96 = new cjs.Graphics().p("AwyB6QIbowMHgPQMJgQIvIZQIwIZAQMJMg6jABLQgPsIIYovg");
	var mask_3_graphics_97 = new cjs.Graphics().p("AxGCBQIQo4MIgdQMIgcI4IQQI5IPAcMIMg6gACKQgdsIIQo4g");
	var mask_3_graphics_98 = new cjs.Graphics().p("AxbCIQIIpBMGgpQMIgpJAIHQJCIFAqMIMg6eADHQgqsHIGpBg");
	var mask_3_graphics_99 = new cjs.Graphics().p("AxuCQQH9pJMGg3QMHg2JJH+QJLH7A2MHMg6aAEGQg3sHH9pJg");
	var mask_3_graphics_100 = new cjs.Graphics().p("AyBCYQH0pSMEhDQMGhDJSH0QJTHyBDMFMg6WAFFQhDsGHzpSg");
	var mask_3_graphics_101 = new cjs.Graphics().p("AyUChQHrpaMDhQQMFhQJZHqQJbHnBQMFMg6PAGCQhQsFHopZg");
	var mask_3_graphics_102 = new cjs.Graphics().p("AylCqQHgpiMChdQMDhdJiHgQJjHeBdMDMg6JAG/QhdsDHfphg");
	var mask_3_graphics_103 = new cjs.Graphics().p("Ay2CzQHWpqMAhqQMChpJpHWQJrHTBqMBMg6BAH+QhqsCHVppg");
	var mask_3_graphics_104 = new cjs.Graphics().p("AzGC9QHLpyL/h3QL/h2JyHMQJyHJB3L/Mg54AI7Qh3r/HLpxg");
	var mask_3_graphics_105 = new cjs.Graphics().p("AzWDGQHBp5L9iDQL9iDJ5HBQJ6G/CDL9Mg5uAJ5QiDr+HAp5g");
	var mask_3_graphics_106 = new cjs.Graphics().p("AzlDRQG2qBL8iQQL6iQKAG3QKCG0CPL7Mg5iAK2QiQr7G1qAg");
	var mask_3_graphics_107 = new cjs.Graphics().p("AzzDbQGrqIL5icQL4icKHGrQKJGqCdL4Mg5XALzQidr5GrqHg");
	var mask_3_graphics_108 = new cjs.Graphics().p("A0BDmQGhqPL2ipQL1ipKPGhQKPGfCpL2Mg5KAMvQipr2GgqOg");
	var mask_3_graphics_109 = new cjs.Graphics().p("A0ODxQGWqVLzi2QLzi2KVGXQKWGTC2LzMg48ANtQi2r0GVqVg");
	var mask_3_graphics_110 = new cjs.Graphics().p("A0aD9QGLqdLwjCQLvjCKcGMQKdGJDCLvMg4tAOpQjCrwGKqcg");
	var mask_3_graphics_111 = new cjs.Graphics().p("A0lEJQF/qjLtjPQLsjOKiGAQKkF+DOLsMg4dAPlQjOrtF/qig");
	var mask_3_graphics_112 = new cjs.Graphics().p("A0wEVQF0qpLpjbQLpjbKoF1QKqFzDbLoMg4MAQhQjbrqF0qog");
	var mask_3_graphics_113 = new cjs.Graphics().p("A06EiQFpqwLljnQLljnKvFpQKvFoDoLkMg36ARcQjnrlFoqug");
	var mask_3_graphics_114 = new cjs.Graphics().p("A1EEuQFeq1LhjzQLhj0K1FeQK1FcD0LhMg3nASXQjzrhFcq1g");
	var mask_3_graphics_115 = new cjs.Graphics().p("A1ME8QFSq7LdkAQLckAK7FTQK7FQEALdMg3TATSQkArdFSq6g");
	var mask_3_graphics_116 = new cjs.Graphics().p("A1UFJQFGrALZkMQLYkMLAFHQLBFFEMLYMg2+AUNQkMraFGq/g");
	var mask_3_graphics_117 = new cjs.Graphics().p("A1cFXQE7rGLUkYQLUkYLFE7QLGE6EYLTMg2oAVHQkYrUE6rFg");
	var mask_3_graphics_118 = new cjs.Graphics().p("A1iFlQEurLLQkkQLPkkLLEwQLLEtEkLPMg2RAWBQkkrQEurKg");
	var mask_3_graphics_119 = new cjs.Graphics().p("A1oFzQEjrQLLkvQLJkwLQEjQLQEiEwLKMg15AW6QkwrLEirPg");
	var mask_3_graphics_120 = new cjs.Graphics().p("A1tGCQEWrVLGk7QLFk8LUEYQLVEVE8LFMg1hAXzQk7rGEWrTg");
	var mask_3_graphics_121 = new cjs.Graphics().p("A1yGRQELrZLAlIQLAlHLZEMQLZEJFHK/Mg1GAYsQlIrAEKrYg");
	var mask_3_graphics_122 = new cjs.Graphics().p("A12GgQD/rdK7lTQK6lTLdD/QLeD9FTK6Mg0sAZkQlTq7D9rcg");
	var mask_3_graphics_123 = new cjs.Graphics().p("A14GwQDyriK1leQK0lfLhDzQLiDxFfK0Mg0RAacQleq1Dyrgg");
	var mask_3_graphics_124 = new cjs.Graphics().p("A17G/QDmrlKwlqQKulqLlDnQLmDlFqKuMgz0AbTQlqqvDlrlg");
	var mask_3_graphics_125 = new cjs.Graphics().p("A18HPQDZrpKql1QKol1LpDaQLpDZF1KoMgzWAcKQl2qpDarpg");
	var mask_3_graphics_126 = new cjs.Graphics().p("A19HgQDNrtKjmAQKimBLsDOQLtDMGBKiMgy4AdAQmBqjDNrrg");
	var mask_3_graphics_127 = new cjs.Graphics().p("A19HwQDBrwKcmLQKcmMLvDCQLwC/GMKcMgyZAd2QmMqdDBrvg");
	var mask_3_graphics_128 = new cjs.Graphics().p("A19IBQC1rzKWmXQKUmWLzC1QLzCzGXKWMgx5AeqQmXqWC0ryg");
	var mask_3_graphics_129 = new cjs.Graphics().p("A17ISQCor2KOmhQKOmiL2CpQL2CmGiKPMgxYAffQmiqPCor1g");
	var mask_3_graphics_130 = new cjs.Graphics().p("A15IkQCbr5KImsQKHmtL4CcQL5CaGtKIMgw2AgTQmtqICbr3g");
	var mask_3_graphics_131 = new cjs.Graphics().p("A12I1QCOr7KBm3QKAm3L6CPQL8CNG3KBMgwTAhHQm4qBCPr6g");
	var mask_3_graphics_132 = new cjs.Graphics().p("A1zJHQCCr9J5nCQJ5nCL9CDQL9CAHCJ6MgvwAh6QnBp6CBr8g");
	var mask_3_graphics_133 = new cjs.Graphics().p("A1vJZQB1r/JynMQJynNL+B2QMAB0HMJyMgvLAisQnNpxB1r/g");
	var mask_3_graphics_134 = new cjs.Graphics().p("A1qJsQBpsCJqnWQJqnXMABpQMBBnHXJrMgumAjeQnXpqBosAg");
	var mask_3_graphics_135 = new cjs.Graphics().p("A1kJ+QBbsDJjnhQJingMCBcQMDBaHgJjMguAAkPQngpiBbsCg");
	var mask_3_graphics_136 = new cjs.Graphics().p("A1eKRQBPsEJanrQJanrMDBPQMFBOHrJaMgtZAlAQnrpaBOsDg");
	var mask_3_graphics_137 = new cjs.Graphics().p("A1XKkQBCsGJSn1QJSn0MEBDQMGBAH1JSMgsyAlwQn0pSBBsEg");
	var mask_3_graphics_138 = new cjs.Graphics().p("A1PK3QA1sHJKn+QJJn/MGA2QMGA0H/JKMgsJAmfQn/pKA1sFg");
	var mask_3_graphics_139 = new cjs.Graphics().p("A1GLKQAosHJBoIQJBoIMGApQMHAnIIJBMgrfAnOQoIpBAosHg");
	var mask_3_graphics_140 = new cjs.Graphics().p("A09LeQAbsII4oSQI5oRMGAcQMIAaISI4Mgq2An8QoRo4AbsHg");
	var mask_3_graphics_141 = new cjs.Graphics().p("A0zLyQAOsJIwobQIvobMHAQQMIANIbIvMgqLAopQobovAPsHg");
	var mask_3_graphics_142 = new cjs.Graphics().p("A0pMGQACsJImokQInokMHACQMIABIlImMgpgApVQokomABsHg");
	var mask_3_graphics_143 = new cjs.Graphics().p("A0dMaQgMsJIdotQIeotMHgLQMIgMItIdMgozAqBQotodgLsHg");
	var mask_3_graphics_144 = new cjs.Graphics().p("A0RMuQgZsJIUo1QIUo2MHgYQMIgZI2IUMgoGAqsQo2oUgYsHg");
	var mask_3_graphics_145 = new cjs.Graphics().p("A0FNDQglsJILo+QIKo/MHgkQMHgmI/IKMgnZArWQo/oKglsGg");
	var mask_3_graphics_146 = new cjs.Graphics().p("Az3NXQgysHIApHQIBpIMGgxQMHgzJHIBMgmqAsAQpHoBgysGg");
	var mask_3_graphics_147 = new cjs.Graphics().p("AzpNsQg/sHH3pPQH3pQMFg+QMGhAJQH3Mgl7AspQpQn3g/sFg");
	var mask_3_graphics_148 = new cjs.Graphics().p("AzaOBQhMsGHtpXQHtpYMEhLQMEhNJZHuMglMAtQQpYnthLsEg");
	var mask_3_graphics_149 = new cjs.Graphics().p("AzLOWQhZsEHkpgQHjpgMChXQMDhaJhHjMgkbAt4QphnkhYsCg");
	var mask_3_graphics_150 = new cjs.Graphics().p("Ay7OrQhlsCHZpoQHZpoMBhkQMBhnJoHZMgjpAueQppnZhlsBg");
	var mask_3_graphics_151 = new cjs.Graphics().p("AyqPBQhysBHOpvQHPpwL/hxQMAh0JwHPMgi4AvDQpwnOhyr/g");
	var mask_3_graphics_152 = new cjs.Graphics().p("AyZPWQh/r/HFp2QHEp4L9h+QL+iAJ4HFMgiGAvoQp4nFh/r9g");
	var mask_3_graphics_153 = new cjs.Graphics().p("AyHPsQiLr9G6p+QG5p/L7iKQL8iNJ/G6MghTAwLQp/m5iMr7g");
	var mask_3_graphics_154 = new cjs.Graphics().p("Ax0QCQiYr7GvqFQGvqGL5iXQL5iaKGGvMgggAwvQqGmviYr4g");
	var mask_3_graphics_155 = new cjs.Graphics().p("AxgQYQilr4GkqNQGkqNL2ikQL3ilKNGkMgfrAxRQqOmlikr1g");
	var mask_3_graphics_156 = new cjs.Graphics().p("AxMQuQiyr1GZqUQGaqULziwQL0izKUGaMge3AxyQqUmaixryg");
	var mask_3_graphics_157 = new cjs.Graphics().p("Aw4REQi+ryGPqaQGOqbLwi9QLxi/KbGPMgeCAySQqbmOi+rwg");
	var mask_3_graphics_158 = new cjs.Graphics().p("AwiRaQjLrvGDqgQGEqiLsjJQLujLKhGDMgdMAyyQqhmEjKrsg");
	var mask_3_graphics_159 = new cjs.Graphics().p("AwMRwQjXrrF4qnQF4qoLpjWQLqjXKoF4MgcWAzQQqol4jWrpg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_3_graphics_9,x:214.9,y:237.2}).wait(1).to({graphics:mask_3_graphics_10,x:214.9,y:237.2}).wait(1).to({graphics:mask_3_graphics_11,x:214.9,y:237.2}).wait(1).to({graphics:mask_3_graphics_12,x:214.9,y:237.1}).wait(1).to({graphics:mask_3_graphics_13,x:214.9,y:237}).wait(1).to({graphics:mask_3_graphics_14,x:214.9,y:236.9}).wait(1).to({graphics:mask_3_graphics_15,x:215,y:236.7}).wait(1).to({graphics:mask_3_graphics_16,x:215,y:236.5}).wait(1).to({graphics:mask_3_graphics_17,x:215,y:236.3}).wait(1).to({graphics:mask_3_graphics_18,x:215,y:236}).wait(1).to({graphics:mask_3_graphics_19,x:215,y:235.7}).wait(1).to({graphics:mask_3_graphics_20,x:215.1,y:235.4}).wait(1).to({graphics:mask_3_graphics_21,x:215.1,y:235}).wait(1).to({graphics:mask_3_graphics_22,x:215.1,y:234.6}).wait(1).to({graphics:mask_3_graphics_23,x:215.1,y:234.2}).wait(1).to({graphics:mask_3_graphics_24,x:215.1,y:233.7}).wait(1).to({graphics:mask_3_graphics_25,x:215.1,y:233.2}).wait(1).to({graphics:mask_3_graphics_26,x:215.2,y:232.7}).wait(1).to({graphics:mask_3_graphics_27,x:215.2,y:232.2}).wait(1).to({graphics:mask_3_graphics_28,x:215.2,y:231.6}).wait(1).to({graphics:mask_3_graphics_29,x:215.2,y:231}).wait(1).to({graphics:mask_3_graphics_30,x:215.2,y:230.4}).wait(1).to({graphics:mask_3_graphics_31,x:215.2,y:229.7}).wait(1).to({graphics:mask_3_graphics_32,x:215.2,y:229}).wait(1).to({graphics:mask_3_graphics_33,x:215.2,y:228.3}).wait(1).to({graphics:mask_3_graphics_34,x:215.2,y:227.5}).wait(1).to({graphics:mask_3_graphics_35,x:215.2,y:226.7}).wait(1).to({graphics:mask_3_graphics_36,x:215.2,y:225.9}).wait(1).to({graphics:mask_3_graphics_37,x:215.1,y:225.1}).wait(1).to({graphics:mask_3_graphics_38,x:215.1,y:224.2}).wait(1).to({graphics:mask_3_graphics_39,x:215.1,y:223.3}).wait(1).to({graphics:mask_3_graphics_40,x:215.1,y:222.4}).wait(1).to({graphics:mask_3_graphics_41,x:215.1,y:221.4}).wait(1).to({graphics:mask_3_graphics_42,x:215.1,y:220.4}).wait(1).to({graphics:mask_3_graphics_43,x:215,y:219.4}).wait(1).to({graphics:mask_3_graphics_44,x:215,y:218.4}).wait(1).to({graphics:mask_3_graphics_45,x:215,y:217.3}).wait(1).to({graphics:mask_3_graphics_46,x:215,y:216.3}).wait(1).to({graphics:mask_3_graphics_47,x:215,y:215.1}).wait(1).to({graphics:mask_3_graphics_48,x:214.9,y:214}).wait(1).to({graphics:mask_3_graphics_49,x:214.9,y:212.9}).wait(1).to({graphics:mask_3_graphics_50,x:214.9,y:211.7}).wait(1).to({graphics:mask_3_graphics_51,x:214.9,y:210.5}).wait(1).to({graphics:mask_3_graphics_52,x:214.9,y:209.3}).wait(1).to({graphics:mask_3_graphics_53,x:214.9,y:208}).wait(1).to({graphics:mask_3_graphics_54,x:215,y:206.7}).wait(1).to({graphics:mask_3_graphics_55,x:215,y:205.4}).wait(1).to({graphics:mask_3_graphics_56,x:215,y:204.1}).wait(1).to({graphics:mask_3_graphics_57,x:215,y:202.8}).wait(1).to({graphics:mask_3_graphics_58,x:215.1,y:201.4}).wait(1).to({graphics:mask_3_graphics_59,x:215.1,y:200.1}).wait(1).to({graphics:mask_3_graphics_60,x:215.1,y:198.7}).wait(1).to({graphics:mask_3_graphics_61,x:215.1,y:197.2}).wait(1).to({graphics:mask_3_graphics_62,x:215.2,y:195.8}).wait(1).to({graphics:mask_3_graphics_63,x:215.2,y:194.4}).wait(1).to({graphics:mask_3_graphics_64,x:215.2,y:192.9}).wait(1).to({graphics:mask_3_graphics_65,x:215.2,y:191.4}).wait(1).to({graphics:mask_3_graphics_66,x:215.3,y:189.9}).wait(1).to({graphics:mask_3_graphics_67,x:215.3,y:188.4}).wait(1).to({graphics:mask_3_graphics_68,x:215.3,y:186.9}).wait(1).to({graphics:mask_3_graphics_69,x:215.3,y:185.3}).wait(1).to({graphics:mask_3_graphics_70,x:215.3,y:183.8}).wait(1).to({graphics:mask_3_graphics_71,x:215.3,y:182.2}).wait(1).to({graphics:mask_3_graphics_72,x:215.4,y:180.6}).wait(1).to({graphics:mask_3_graphics_73,x:215.4,y:179}).wait(1).to({graphics:mask_3_graphics_74,x:215.4,y:177.4}).wait(1).to({graphics:mask_3_graphics_75,x:215.4,y:175.8}).wait(1).to({graphics:mask_3_graphics_76,x:215.4,y:174.1}).wait(1).to({graphics:mask_3_graphics_77,x:215.4,y:172.5}).wait(1).to({graphics:mask_3_graphics_78,x:215.4,y:170.8}).wait(1).to({graphics:mask_3_graphics_79,x:215.4,y:169.1}).wait(1).to({graphics:mask_3_graphics_80,x:215.3,y:167.5}).wait(1).to({graphics:mask_3_graphics_81,x:215.3,y:165.8}).wait(1).to({graphics:mask_3_graphics_82,x:215.3,y:164.1}).wait(1).to({graphics:mask_3_graphics_83,x:215.3,y:162.4}).wait(1).to({graphics:mask_3_graphics_84,x:215.3,y:160.7}).wait(1).to({graphics:mask_3_graphics_85,x:215.3,y:159}).wait(1).to({graphics:mask_3_graphics_86,x:215.2,y:157.4}).wait(1).to({graphics:mask_3_graphics_87,x:215.2,y:155.9}).wait(1).to({graphics:mask_3_graphics_88,x:215.2,y:154.4}).wait(1).to({graphics:mask_3_graphics_89,x:215.2,y:152.8}).wait(1).to({graphics:mask_3_graphics_90,x:215.2,y:151.3}).wait(1).to({graphics:mask_3_graphics_91,x:215.2,y:149.7}).wait(1).to({graphics:mask_3_graphics_92,x:215.2,y:148.2}).wait(1).to({graphics:mask_3_graphics_93,x:215.2,y:146.6}).wait(1).to({graphics:mask_3_graphics_94,x:215.2,y:145.1}).wait(1).to({graphics:mask_3_graphics_95,x:215.2,y:144.2}).wait(1).to({graphics:mask_3_graphics_96,x:215.2,y:145.7}).wait(1).to({graphics:mask_3_graphics_97,x:215.1,y:147.3}).wait(1).to({graphics:mask_3_graphics_98,x:215.1,y:148.8}).wait(1).to({graphics:mask_3_graphics_99,x:215,y:150.4}).wait(1).to({graphics:mask_3_graphics_100,x:214.9,y:152}).wait(1).to({graphics:mask_3_graphics_101,x:214.7,y:153.5}).wait(1).to({graphics:mask_3_graphics_102,x:214.6,y:155}).wait(1).to({graphics:mask_3_graphics_103,x:214.4,y:156.6}).wait(1).to({graphics:mask_3_graphics_104,x:214.2,y:158.1}).wait(1).to({graphics:mask_3_graphics_105,x:213.9,y:159.7}).wait(1).to({graphics:mask_3_graphics_106,x:213.6,y:161.2}).wait(1).to({graphics:mask_3_graphics_107,x:213.4,y:162.7}).wait(1).to({graphics:mask_3_graphics_108,x:213,y:164.2}).wait(1).to({graphics:mask_3_graphics_109,x:212.7,y:165.8}).wait(1).to({graphics:mask_3_graphics_110,x:212.3,y:167.3}).wait(1).to({graphics:mask_3_graphics_111,x:211.9,y:168.8}).wait(1).to({graphics:mask_3_graphics_112,x:211.5,y:170.3}).wait(1).to({graphics:mask_3_graphics_113,x:211.1,y:171.7}).wait(1).to({graphics:mask_3_graphics_114,x:210.6,y:173.2}).wait(1).to({graphics:mask_3_graphics_115,x:210.1,y:174.7}).wait(1).to({graphics:mask_3_graphics_116,x:209.6,y:176.2}).wait(1).to({graphics:mask_3_graphics_117,x:209,y:177.6}).wait(1).to({graphics:mask_3_graphics_118,x:208.5,y:179.1}).wait(1).to({graphics:mask_3_graphics_119,x:207.9,y:180.5}).wait(1).to({graphics:mask_3_graphics_120,x:207.3,y:181.9}).wait(1).to({graphics:mask_3_graphics_121,x:206.6,y:183.3}).wait(1).to({graphics:mask_3_graphics_122,x:206,y:184.7}).wait(1).to({graphics:mask_3_graphics_123,x:205.3,y:186.1}).wait(1).to({graphics:mask_3_graphics_124,x:204.6,y:187.5}).wait(1).to({graphics:mask_3_graphics_125,x:203.8,y:188.9}).wait(1).to({graphics:mask_3_graphics_126,x:203.1,y:190.2}).wait(1).to({graphics:mask_3_graphics_127,x:202.3,y:191.6}).wait(1).to({graphics:mask_3_graphics_128,x:201.5,y:192.9}).wait(1).to({graphics:mask_3_graphics_129,x:200.7,y:194.2}).wait(1).to({graphics:mask_3_graphics_130,x:199.9,y:195.5}).wait(1).to({graphics:mask_3_graphics_131,x:199,y:196.8}).wait(1).to({graphics:mask_3_graphics_132,x:198.1,y:198.1}).wait(1).to({graphics:mask_3_graphics_133,x:197.2,y:199.3}).wait(1).to({graphics:mask_3_graphics_134,x:196.3,y:200.6}).wait(1).to({graphics:mask_3_graphics_135,x:195.3,y:201.8}).wait(1).to({graphics:mask_3_graphics_136,x:194.4,y:203}).wait(1).to({graphics:mask_3_graphics_137,x:193.4,y:204.2}).wait(1).to({graphics:mask_3_graphics_138,x:192.4,y:205.4}).wait(1).to({graphics:mask_3_graphics_139,x:191.3,y:206.6}).wait(1).to({graphics:mask_3_graphics_140,x:190.3,y:207.7}).wait(1).to({graphics:mask_3_graphics_141,x:189.2,y:208.8}).wait(1).to({graphics:mask_3_graphics_142,x:188.2,y:209.9}).wait(1).to({graphics:mask_3_graphics_143,x:187,y:211}).wait(1).to({graphics:mask_3_graphics_144,x:185.9,y:212.1}).wait(1).to({graphics:mask_3_graphics_145,x:184.8,y:213.1}).wait(1).to({graphics:mask_3_graphics_146,x:183.6,y:214.2}).wait(1).to({graphics:mask_3_graphics_147,x:182.5,y:215.2}).wait(1).to({graphics:mask_3_graphics_148,x:181.3,y:216.2}).wait(1).to({graphics:mask_3_graphics_149,x:180.1,y:217.2}).wait(1).to({graphics:mask_3_graphics_150,x:178.8,y:218.1}).wait(1).to({graphics:mask_3_graphics_151,x:177.6,y:219}).wait(1).to({graphics:mask_3_graphics_152,x:176.4,y:220}).wait(1).to({graphics:mask_3_graphics_153,x:175.1,y:220.8}).wait(1).to({graphics:mask_3_graphics_154,x:173.8,y:221.7}).wait(1).to({graphics:mask_3_graphics_155,x:172.5,y:222.6}).wait(1).to({graphics:mask_3_graphics_156,x:171.2,y:223.4}).wait(1).to({graphics:mask_3_graphics_157,x:169.9,y:224.2}).wait(1).to({graphics:mask_3_graphics_158,x:168.5,y:225}).wait(1).to({graphics:mask_3_graphics_159,x:167.2,y:225.7}).wait(396));

	// Layer 2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(20,1,1).p("AJLTAQhkAnhxAZQh6AXiqgEQiGgLh9hBQh+hBhmhlQhlhkhHh8QhDh3gdiGQgdiFAHiGQAHiTAkiPQAiiHA4iDQA5iEBMh/QBMh/BUhtQBThuBuhfQBshgCGhJQCHhJCBgzQCBgzCKgL");
	this.shape_6.setTransform(168.3,277.2);
	this.shape_6._off = true;

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(9).to({_off:false},0).wait(546));

	// Letter
	this.instance_3 = new lib.Symbol1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(275,275);
	this.instance_3.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(555));

	// Background
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_7.setTransform(275,275,3.373,2.543);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_8.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).wait(555));

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