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


(lib.U = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("AkUVxQhMhUAAiHIAFh4IihCSIi6CEIjJBkQhpAohuAAQi6AAhhhrQhhhtAAi1QAAhuA+iXICelGIGTrTICblRQBAigAAh4QAAihh9hmQh6hmicAAIiRASIhpArIhZBAQhkBkheAAQhyAAAAhkQAAhUB3hRQCChfCKg4QCMg1B4AAQCCAAB1ArQB2ArBcBUQBZBVA1BwQA2BwAACCQAACKhACqIicFoIjJF+IjJFnIicEvQhACIAABPQAABPAXAjQAaAkBXAAQCjAACwiCQCyiCCmi1IEylyIDvk8IMe3qQAZg9BKAAQAzAAApAhQAmAiAAA1IhRC4IjHGGIt5aFIg4CHIgaCUIAIArIAhASQDBAACwhKQCyhMCmhwIE3j1IFylBIBehfIBhhRIBZgiQA2AAAPAaIAPBKIgeBFIhIBeIiEChQh9CWizCcQiwCZjMB9QjMB9jYBMQjZBNjLAAQiPAAhKhVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-169.9,-147.7,339.9,295.6);


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


(lib.ar7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-5.4,-65.1,1,1,-173.8,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-143.7,guide:{path:[-5.3,-65.1,-0.8,-104,2.3,-128.4,5.3,-152.4,18.1,-173.7]}},74).to({rotation:-49.3,guide:{path:[18.1,-173.6,18.3,-174,18.5,-174.3,23.9,-183,27.9,-184.6]}},30).to({regX:0.1,regY:-0.1,scaleX:1,scaleY:1,rotation:0,guide:{path:[27.9,-184.6,30.8,-185.8,33,-183.2,35.2,-180.7,36.7,-174.3,41.7,-152.9,40.7,-147]}},30).wait(1));

	// Layer 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_104 = new cjs.Graphics().p("Ag4tsIAAhhIGXAAIAABhg");
	var mask_graphics_105 = new cjs.Graphics().p("AjLA4IAAhvIGXAAIAABvg");
	var mask_graphics_106 = new cjs.Graphics().p("AjLA/IAAh9IGXAAIAAB9g");
	var mask_graphics_107 = new cjs.Graphics().p("AjLBGIAAiLIGXAAIAACLg");
	var mask_graphics_108 = new cjs.Graphics().p("AjLBNIAAiZIGXAAIAACZg");
	var mask_graphics_109 = new cjs.Graphics().p("AjLBUIAAinIGXAAIAACng");
	var mask_graphics_110 = new cjs.Graphics().p("AjLBbIAAi1IGXAAIAAC1g");
	var mask_graphics_111 = new cjs.Graphics().p("AjLBiIAAjDIGXAAIAADDg");
	var mask_graphics_112 = new cjs.Graphics().p("AjLBpIAAjRIGXAAIAADRg");
	var mask_graphics_113 = new cjs.Graphics().p("AjLBwIAAjfIGXAAIAADfg");
	var mask_graphics_114 = new cjs.Graphics().p("AjLB3IAAjtIGXAAIAADtg");
	var mask_graphics_115 = new cjs.Graphics().p("AjLB+IAAj7IGXAAIAAD7g");
	var mask_graphics_116 = new cjs.Graphics().p("AjLCFIAAkJIGXAAIAAEJg");
	var mask_graphics_117 = new cjs.Graphics().p("AjLCMIAAkYIGXAAIAAEYg");
	var mask_graphics_118 = new cjs.Graphics().p("AjLCUIAAknIGXAAIAAEng");
	var mask_graphics_119 = new cjs.Graphics().p("AjLCbIAAk1IGXAAIAAE1g");
	var mask_graphics_120 = new cjs.Graphics().p("AjLCiIAAlDIGXAAIAAFDg");
	var mask_graphics_121 = new cjs.Graphics().p("AjLCpIAAlRIGXAAIAAFRg");
	var mask_graphics_122 = new cjs.Graphics().p("AjLCwIAAlfIGXAAIAAFfg");
	var mask_graphics_123 = new cjs.Graphics().p("AjLC3IAAltIGXAAIAAFtg");
	var mask_graphics_124 = new cjs.Graphics().p("AjLC+IAAl7IGXAAIAAF7g");
	var mask_graphics_125 = new cjs.Graphics().p("AjLDFIAAmJIGXAAIAAGJg");
	var mask_graphics_126 = new cjs.Graphics().p("AjLDMIAAmXIGXAAIAAGXg");
	var mask_graphics_127 = new cjs.Graphics().p("AjLDTIAAmlIGXAAIAAGlg");
	var mask_graphics_128 = new cjs.Graphics().p("AjLDaIAAmzIGXAAIAAGzg");
	var mask_graphics_129 = new cjs.Graphics().p("AjLDhIAAnBIGXAAIAAHBg");
	var mask_graphics_130 = new cjs.Graphics().p("AjLDoIAAnPIGXAAIAAHPg");
	var mask_graphics_131 = new cjs.Graphics().p("AjLDwIAAnfIGXAAIAAHfg");
	var mask_graphics_132 = new cjs.Graphics().p("AjLD2IAAnsIGXAAIAAHsg");
	var mask_graphics_133 = new cjs.Graphics().p("AjLD+IAAn7IGXAAIAAH7g");
	var mask_graphics_134 = new cjs.Graphics().p("Ag4l9IAApQIGXAAIAAJQg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(104).to({graphics:mask_graphics_104,x:35.1,y:-97.4}).wait(1).to({graphics:mask_graphics_105,x:49.8,y:-189.3}).wait(1).to({graphics:mask_graphics_106,x:49.8,y:-188.6}).wait(1).to({graphics:mask_graphics_107,x:49.8,y:-187.8}).wait(1).to({graphics:mask_graphics_108,x:49.8,y:-187.1}).wait(1).to({graphics:mask_graphics_109,x:49.8,y:-186.4}).wait(1).to({graphics:mask_graphics_110,x:49.8,y:-185.7}).wait(1).to({graphics:mask_graphics_111,x:49.8,y:-185}).wait(1).to({graphics:mask_graphics_112,x:49.8,y:-184.3}).wait(1).to({graphics:mask_graphics_113,x:49.8,y:-183.6}).wait(1).to({graphics:mask_graphics_114,x:49.8,y:-182.9}).wait(1).to({graphics:mask_graphics_115,x:49.8,y:-182.2}).wait(1).to({graphics:mask_graphics_116,x:49.8,y:-181.5}).wait(1).to({graphics:mask_graphics_117,x:49.8,y:-180.8}).wait(1).to({graphics:mask_graphics_118,x:49.8,y:-180.1}).wait(1).to({graphics:mask_graphics_119,x:49.8,y:-179.4}).wait(1).to({graphics:mask_graphics_120,x:49.8,y:-178.7}).wait(1).to({graphics:mask_graphics_121,x:49.8,y:-178}).wait(1).to({graphics:mask_graphics_122,x:49.8,y:-177.3}).wait(1).to({graphics:mask_graphics_123,x:49.8,y:-176.6}).wait(1).to({graphics:mask_graphics_124,x:49.8,y:-175.9}).wait(1).to({graphics:mask_graphics_125,x:49.8,y:-175.2}).wait(1).to({graphics:mask_graphics_126,x:49.8,y:-174.5}).wait(1).to({graphics:mask_graphics_127,x:49.8,y:-173.8}).wait(1).to({graphics:mask_graphics_128,x:49.8,y:-173.1}).wait(1).to({graphics:mask_graphics_129,x:49.8,y:-172.4}).wait(1).to({graphics:mask_graphics_130,x:49.8,y:-171.7}).wait(1).to({graphics:mask_graphics_131,x:49.8,y:-170.9}).wait(1).to({graphics:mask_graphics_132,x:49.8,y:-170.2}).wait(1).to({graphics:mask_graphics_133,x:49.8,y:-169.5}).wait(1).to({graphics:mask_graphics_134,x:35.1,y:-97.4}).wait(1));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AjlJWQAtmGAejzQAfj0CDjVQCEjWA1DdQA1DcgWBu");
	this.shape.setTransform(17.6,-124.9);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(104).to({_off:false},0).wait(31));

	// Layer 4 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AjLidIAAi4IGXAAIAAC4g");
	var mask_1_graphics_1 = new cjs.Graphics().p("AjLBjIAAjGIGXAAIAADGg");
	var mask_1_graphics_2 = new cjs.Graphics().p("AjLBrIAAjVIGXAAIAADVg");
	var mask_1_graphics_3 = new cjs.Graphics().p("AjLBzIAAjlIGXAAIAADlg");
	var mask_1_graphics_4 = new cjs.Graphics().p("AjLB6IAAjzIGXAAIAADzg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AjLCCIAAkDIGXAAIAAEDg");
	var mask_1_graphics_6 = new cjs.Graphics().p("AjLCJIAAkRIGXAAIAAERg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AjLCRIAAkhIGXAAIAAEhg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AjLCYIAAkvIGXAAIAAEvg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AjLCgIAAk/IGXAAIAAE/g");
	var mask_1_graphics_10 = new cjs.Graphics().p("AjLCnIAAlOIGXAAIAAFOg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AjLCvIAAldIGXAAIAAFdg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AjLC2IAAlrIGXAAIAAFrg");
	var mask_1_graphics_13 = new cjs.Graphics().p("AjLC+IAAl7IGXAAIAAF7g");
	var mask_1_graphics_14 = new cjs.Graphics().p("AjLDFIAAmJIGXAAIAAGJg");
	var mask_1_graphics_15 = new cjs.Graphics().p("AjLDNIAAmZIGXAAIAAGZg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AjLDVIAAmpIGXAAIAAGpg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AjLDcIAAm3IGXAAIAAG3g");
	var mask_1_graphics_18 = new cjs.Graphics().p("AjLDkIAAnHIGXAAIAAHHg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AjLDrIAAnVIGXAAIAAHVg");
	var mask_1_graphics_20 = new cjs.Graphics().p("AjLDzIAAnlIGXAAIAAHlg");
	var mask_1_graphics_21 = new cjs.Graphics().p("AjLD6IAAnzIGXAAIAAHzg");
	var mask_1_graphics_22 = new cjs.Graphics().p("AjLECIAAoDIGXAAIAAIDg");
	var mask_1_graphics_23 = new cjs.Graphics().p("AjLEJIAAoSIGXAAIAAISg");
	var mask_1_graphics_24 = new cjs.Graphics().p("AjLERIAAohIGXAAIAAIhg");
	var mask_1_graphics_25 = new cjs.Graphics().p("AjLEYIAAowIGXAAIAAIwg");
	var mask_1_graphics_26 = new cjs.Graphics().p("AjLEgIAAo/IGXAAIAAI/g");
	var mask_1_graphics_27 = new cjs.Graphics().p("AjLEoIAApPIGXAAIAAJPg");
	var mask_1_graphics_28 = new cjs.Graphics().p("AjLEvIAApdIGXAAIAAJdg");
	var mask_1_graphics_29 = new cjs.Graphics().p("AjLE3IAAptIGXAAIAAJtg");
	var mask_1_graphics_30 = new cjs.Graphics().p("AjLE+IAAp7IGXAAIAAJ7g");
	var mask_1_graphics_31 = new cjs.Graphics().p("AjLFGIAAqLIGXAAIAAKLg");
	var mask_1_graphics_32 = new cjs.Graphics().p("AjLFNIAAqaIGXAAIAAKag");
	var mask_1_graphics_33 = new cjs.Graphics().p("AjLFVIAAqpIGXAAIAAKpg");
	var mask_1_graphics_34 = new cjs.Graphics().p("AjLFcIAAq4IGXAAIAAK4g");
	var mask_1_graphics_35 = new cjs.Graphics().p("AjLFkIAArHIGXAAIAALHg");
	var mask_1_graphics_36 = new cjs.Graphics().p("AjLFrIAArVIGXAAIAALVg");
	var mask_1_graphics_37 = new cjs.Graphics().p("AjLFzIAArlIGXAAIAALlg");
	var mask_1_graphics_38 = new cjs.Graphics().p("AjLF7IAAr0IGXAAIAAL0g");
	var mask_1_graphics_39 = new cjs.Graphics().p("AjLGCIAAsDIGXAAIAAMDg");
	var mask_1_graphics_40 = new cjs.Graphics().p("AjLGKIAAsTIGXAAIAAMTg");
	var mask_1_graphics_41 = new cjs.Graphics().p("AjLGRIAAshIGXAAIAAMhg");
	var mask_1_graphics_42 = new cjs.Graphics().p("AjLGZIAAsxIGXAAIAAMxg");
	var mask_1_graphics_43 = new cjs.Graphics().p("AjLGgIAAs/IGXAAIAAM/g");
	var mask_1_graphics_44 = new cjs.Graphics().p("AjLGoIAAtPIGXAAIAANPg");
	var mask_1_graphics_45 = new cjs.Graphics().p("AjLGvIAAtdIGXAAIAANdg");
	var mask_1_graphics_46 = new cjs.Graphics().p("AjLG3IAAttIGXAAIAANtg");
	var mask_1_graphics_47 = new cjs.Graphics().p("AjLG+IAAt7IGXAAIAAN7g");
	var mask_1_graphics_48 = new cjs.Graphics().p("AjLHGIAAuLIGXAAIAAOLg");
	var mask_1_graphics_49 = new cjs.Graphics().p("AjLHOIAAubIGXAAIAAObg");
	var mask_1_graphics_50 = new cjs.Graphics().p("AjLHVIAAupIGXAAIAAOpg");
	var mask_1_graphics_51 = new cjs.Graphics().p("AjLHdIAAu5IGXAAIAAO5g");
	var mask_1_graphics_52 = new cjs.Graphics().p("AjLHkIAAvHIGXAAIAAPHg");
	var mask_1_graphics_53 = new cjs.Graphics().p("AjLHsIAAvWIGXAAIAAPWg");
	var mask_1_graphics_54 = new cjs.Graphics().p("AjLHzIAAvlIGXAAIAAPlg");
	var mask_1_graphics_55 = new cjs.Graphics().p("AjLH7IAAv1IGXAAIAAP1g");
	var mask_1_graphics_56 = new cjs.Graphics().p("AjLICIAAwDIGXAAIAAQDg");
	var mask_1_graphics_57 = new cjs.Graphics().p("AjLIKIAAwTIGXAAIAAQTg");
	var mask_1_graphics_58 = new cjs.Graphics().p("AjLIRIAAwhIGXAAIAAQhg");
	var mask_1_graphics_59 = new cjs.Graphics().p("AjLIZIAAwxIGXAAIAAQxg");
	var mask_1_graphics_60 = new cjs.Graphics().p("AjLIhIAAxAIGXAAIAARAg");
	var mask_1_graphics_61 = new cjs.Graphics().p("AjLIoIAAxPIGXAAIAARPg");
	var mask_1_graphics_62 = new cjs.Graphics().p("AjLIwIAAxeIGXAAIAAReg");
	var mask_1_graphics_63 = new cjs.Graphics().p("AjLI3IAAxtIGXAAIAARtg");
	var mask_1_graphics_64 = new cjs.Graphics().p("AjLI/IAAx9IGXAAIAAR9g");
	var mask_1_graphics_65 = new cjs.Graphics().p("AjLJGIAAyLIGXAAIAASLg");
	var mask_1_graphics_66 = new cjs.Graphics().p("AjLJOIAAybIGXAAIAASbg");
	var mask_1_graphics_67 = new cjs.Graphics().p("AjLJVIAAypIGXAAIAASpg");
	var mask_1_graphics_68 = new cjs.Graphics().p("AjLJdIAAy5IGXAAIAAS5g");
	var mask_1_graphics_69 = new cjs.Graphics().p("AjLJkIAAzHIGXAAIAATHg");
	var mask_1_graphics_70 = new cjs.Graphics().p("AjLJsIAAzXIGXAAIAATXg");
	var mask_1_graphics_71 = new cjs.Graphics().p("AjLJzIAAzlIGXAAIAATlg");
	var mask_1_graphics_72 = new cjs.Graphics().p("AjLJ7IAAz1IGXAAIAAT1g");
	var mask_1_graphics_73 = new cjs.Graphics().p("AjLKDIAA0FIGXAAIAAUFg");
	var mask_1_graphics_74 = new cjs.Graphics().p("AjLGQIAA0TIGXAAIAAUTg");
	var mask_1_graphics_75 = new cjs.Graphics().p("AjLKNIAA0YIGXAAIAAUYg");
	var mask_1_graphics_76 = new cjs.Graphics().p("AjLKPIAA0dIGXAAIAAUdg");
	var mask_1_graphics_77 = new cjs.Graphics().p("AjLKSIAA0iIGXAAIAAUig");
	var mask_1_graphics_78 = new cjs.Graphics().p("AjLKUIAA0nIGXAAIAAUng");
	var mask_1_graphics_79 = new cjs.Graphics().p("AjLKWIAA0rIGXAAIAAUrg");
	var mask_1_graphics_80 = new cjs.Graphics().p("AjLKZIAA0xIGXAAIAAUxg");
	var mask_1_graphics_81 = new cjs.Graphics().p("AjLKbIAA01IGXAAIAAU1g");
	var mask_1_graphics_82 = new cjs.Graphics().p("AjLKeIAA07IGXAAIAAU7g");
	var mask_1_graphics_83 = new cjs.Graphics().p("AjLKgIAA0/IGXAAIAAU/g");
	var mask_1_graphics_84 = new cjs.Graphics().p("AjLKjIAA1FIGXAAIAAVFg");
	var mask_1_graphics_85 = new cjs.Graphics().p("AjLKlIAA1JIGXAAIAAVJg");
	var mask_1_graphics_86 = new cjs.Graphics().p("AjLKoIAA1OIGXAAIAAVOg");
	var mask_1_graphics_87 = new cjs.Graphics().p("AjLKqIAA1TIGXAAIAAVTg");
	var mask_1_graphics_88 = new cjs.Graphics().p("AjLKtIAA1YIGXAAIAAVYg");
	var mask_1_graphics_89 = new cjs.Graphics().p("AjLKvIAA1dIGXAAIAAVdg");
	var mask_1_graphics_90 = new cjs.Graphics().p("AjLKxIAA1iIGXAAIAAVig");
	var mask_1_graphics_91 = new cjs.Graphics().p("AjLK0IAA1nIGXAAIAAVng");
	var mask_1_graphics_92 = new cjs.Graphics().p("AjLK2IAA1sIGXAAIAAVsg");
	var mask_1_graphics_93 = new cjs.Graphics().p("AjLK5IAA1xIGXAAIAAVxg");
	var mask_1_graphics_94 = new cjs.Graphics().p("AjLK7IAA12IGXAAIAAV2g");
	var mask_1_graphics_95 = new cjs.Graphics().p("AjLK+IAA17IGXAAIAAV7g");
	var mask_1_graphics_96 = new cjs.Graphics().p("AjLLAIAA1/IGXAAIAAV/g");
	var mask_1_graphics_97 = new cjs.Graphics().p("AjLLDIAA2FIGXAAIAAWFg");
	var mask_1_graphics_98 = new cjs.Graphics().p("AjLLFIAA2JIGXAAIAAWJg");
	var mask_1_graphics_99 = new cjs.Graphics().p("AjLLIIAA2PIGXAAIAAWPg");
	var mask_1_graphics_100 = new cjs.Graphics().p("AjLLKIAA2TIGXAAIAAWTg");
	var mask_1_graphics_101 = new cjs.Graphics().p("AjLLMIAA2YIGXAAIAAWYg");
	var mask_1_graphics_102 = new cjs.Graphics().p("AjLLPIAA2dIGXAAIAAWdg");
	var mask_1_graphics_103 = new cjs.Graphics().p("AjLLRIAA2iIGXAAIAAWig");
	var mask_1_graphics_104 = new cjs.Graphics().p("AjLHaIAA2nIGXAAIAAWng");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:9.8,y:-34.2}).wait(1).to({graphics:mask_1_graphics_1,x:9.8,y:-59.9}).wait(1).to({graphics:mask_1_graphics_2,x:9.8,y:-60.7}).wait(1).to({graphics:mask_1_graphics_3,x:9.8,y:-61.5}).wait(1).to({graphics:mask_1_graphics_4,x:9.8,y:-62.2}).wait(1).to({graphics:mask_1_graphics_5,x:9.8,y:-63}).wait(1).to({graphics:mask_1_graphics_6,x:9.8,y:-63.7}).wait(1).to({graphics:mask_1_graphics_7,x:9.8,y:-64.5}).wait(1).to({graphics:mask_1_graphics_8,x:9.8,y:-65.2}).wait(1).to({graphics:mask_1_graphics_9,x:9.8,y:-66}).wait(1).to({graphics:mask_1_graphics_10,x:9.8,y:-66.7}).wait(1).to({graphics:mask_1_graphics_11,x:9.8,y:-67.5}).wait(1).to({graphics:mask_1_graphics_12,x:9.8,y:-68.2}).wait(1).to({graphics:mask_1_graphics_13,x:9.8,y:-69}).wait(1).to({graphics:mask_1_graphics_14,x:9.8,y:-69.7}).wait(1).to({graphics:mask_1_graphics_15,x:9.8,y:-70.5}).wait(1).to({graphics:mask_1_graphics_16,x:9.8,y:-71.3}).wait(1).to({graphics:mask_1_graphics_17,x:9.8,y:-72}).wait(1).to({graphics:mask_1_graphics_18,x:9.8,y:-72.8}).wait(1).to({graphics:mask_1_graphics_19,x:9.8,y:-73.5}).wait(1).to({graphics:mask_1_graphics_20,x:9.8,y:-74.3}).wait(1).to({graphics:mask_1_graphics_21,x:9.8,y:-75}).wait(1).to({graphics:mask_1_graphics_22,x:9.8,y:-75.8}).wait(1).to({graphics:mask_1_graphics_23,x:9.8,y:-76.5}).wait(1).to({graphics:mask_1_graphics_24,x:9.8,y:-77.3}).wait(1).to({graphics:mask_1_graphics_25,x:9.8,y:-78}).wait(1).to({graphics:mask_1_graphics_26,x:9.8,y:-78.8}).wait(1).to({graphics:mask_1_graphics_27,x:9.8,y:-79.6}).wait(1).to({graphics:mask_1_graphics_28,x:9.8,y:-80.3}).wait(1).to({graphics:mask_1_graphics_29,x:9.8,y:-81.1}).wait(1).to({graphics:mask_1_graphics_30,x:9.8,y:-81.8}).wait(1).to({graphics:mask_1_graphics_31,x:9.8,y:-82.6}).wait(1).to({graphics:mask_1_graphics_32,x:9.8,y:-83.3}).wait(1).to({graphics:mask_1_graphics_33,x:9.8,y:-84.1}).wait(1).to({graphics:mask_1_graphics_34,x:9.8,y:-84.8}).wait(1).to({graphics:mask_1_graphics_35,x:9.8,y:-85.6}).wait(1).to({graphics:mask_1_graphics_36,x:9.8,y:-86.3}).wait(1).to({graphics:mask_1_graphics_37,x:9.8,y:-87.1}).wait(1).to({graphics:mask_1_graphics_38,x:9.8,y:-87.9}).wait(1).to({graphics:mask_1_graphics_39,x:9.8,y:-88.6}).wait(1).to({graphics:mask_1_graphics_40,x:9.8,y:-89.4}).wait(1).to({graphics:mask_1_graphics_41,x:9.8,y:-90.1}).wait(1).to({graphics:mask_1_graphics_42,x:9.8,y:-90.9}).wait(1).to({graphics:mask_1_graphics_43,x:9.8,y:-91.7}).wait(1).to({graphics:mask_1_graphics_44,x:9.8,y:-92.4}).wait(1).to({graphics:mask_1_graphics_45,x:9.8,y:-93.2}).wait(1).to({graphics:mask_1_graphics_46,x:9.8,y:-93.9}).wait(1).to({graphics:mask_1_graphics_47,x:9.8,y:-94.7}).wait(1).to({graphics:mask_1_graphics_48,x:9.8,y:-95.4}).wait(1).to({graphics:mask_1_graphics_49,x:9.8,y:-96.2}).wait(1).to({graphics:mask_1_graphics_50,x:9.8,y:-96.9}).wait(1).to({graphics:mask_1_graphics_51,x:9.8,y:-97.7}).wait(1).to({graphics:mask_1_graphics_52,x:9.8,y:-98.4}).wait(1).to({graphics:mask_1_graphics_53,x:9.8,y:-99.2}).wait(1).to({graphics:mask_1_graphics_54,x:9.8,y:-100}).wait(1).to({graphics:mask_1_graphics_55,x:9.8,y:-100.7}).wait(1).to({graphics:mask_1_graphics_56,x:9.8,y:-101.5}).wait(1).to({graphics:mask_1_graphics_57,x:9.8,y:-102.2}).wait(1).to({graphics:mask_1_graphics_58,x:9.8,y:-103}).wait(1).to({graphics:mask_1_graphics_59,x:9.8,y:-103.7}).wait(1).to({graphics:mask_1_graphics_60,x:9.8,y:-104.5}).wait(1).to({graphics:mask_1_graphics_61,x:9.8,y:-105.2}).wait(1).to({graphics:mask_1_graphics_62,x:9.8,y:-106}).wait(1).to({graphics:mask_1_graphics_63,x:9.8,y:-106.7}).wait(1).to({graphics:mask_1_graphics_64,x:9.8,y:-107.5}).wait(1).to({graphics:mask_1_graphics_65,x:9.8,y:-108.2}).wait(1).to({graphics:mask_1_graphics_66,x:9.8,y:-109}).wait(1).to({graphics:mask_1_graphics_67,x:9.8,y:-109.8}).wait(1).to({graphics:mask_1_graphics_68,x:9.8,y:-110.5}).wait(1).to({graphics:mask_1_graphics_69,x:9.8,y:-111.3}).wait(1).to({graphics:mask_1_graphics_70,x:9.8,y:-112}).wait(1).to({graphics:mask_1_graphics_71,x:9.8,y:-112.8}).wait(1).to({graphics:mask_1_graphics_72,x:9.8,y:-113.5}).wait(1).to({graphics:mask_1_graphics_73,x:9.8,y:-114.3}).wait(1).to({graphics:mask_1_graphics_74,x:9.8,y:-90}).wait(1).to({graphics:mask_1_graphics_75,x:9.8,y:-115.3}).wait(1).to({graphics:mask_1_graphics_76,x:9.8,y:-115.5}).wait(1).to({graphics:mask_1_graphics_77,x:9.8,y:-115.8}).wait(1).to({graphics:mask_1_graphics_78,x:9.8,y:-116}).wait(1).to({graphics:mask_1_graphics_79,x:9.8,y:-116.3}).wait(1).to({graphics:mask_1_graphics_80,x:9.8,y:-116.5}).wait(1).to({graphics:mask_1_graphics_81,x:9.8,y:-116.8}).wait(1).to({graphics:mask_1_graphics_82,x:9.8,y:-117}).wait(1).to({graphics:mask_1_graphics_83,x:9.8,y:-117.3}).wait(1).to({graphics:mask_1_graphics_84,x:9.8,y:-117.5}).wait(1).to({graphics:mask_1_graphics_85,x:9.8,y:-117.7}).wait(1).to({graphics:mask_1_graphics_86,x:9.8,y:-118}).wait(1).to({graphics:mask_1_graphics_87,x:9.8,y:-118.2}).wait(1).to({graphics:mask_1_graphics_88,x:9.8,y:-118.5}).wait(1).to({graphics:mask_1_graphics_89,x:9.8,y:-118.7}).wait(1).to({graphics:mask_1_graphics_90,x:9.8,y:-118.9}).wait(1).to({graphics:mask_1_graphics_91,x:9.8,y:-119.2}).wait(1).to({graphics:mask_1_graphics_92,x:9.8,y:-119.4}).wait(1).to({graphics:mask_1_graphics_93,x:9.8,y:-119.7}).wait(1).to({graphics:mask_1_graphics_94,x:9.8,y:-119.9}).wait(1).to({graphics:mask_1_graphics_95,x:9.8,y:-120.2}).wait(1).to({graphics:mask_1_graphics_96,x:9.8,y:-120.4}).wait(1).to({graphics:mask_1_graphics_97,x:9.8,y:-120.7}).wait(1).to({graphics:mask_1_graphics_98,x:9.8,y:-120.9}).wait(1).to({graphics:mask_1_graphics_99,x:9.8,y:-121.2}).wait(1).to({graphics:mask_1_graphics_100,x:9.8,y:-121.4}).wait(1).to({graphics:mask_1_graphics_101,x:9.8,y:-121.6}).wait(1).to({graphics:mask_1_graphics_102,x:9.8,y:-121.9}).wait(1).to({graphics:mask_1_graphics_103,x:9.8,y:-122.1}).wait(1).to({graphics:mask_1_graphics_104,x:9.8,y:-97.4}).wait(31));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AjlJWQAtmGAejzQAfj0CDjVQCEjWA1DdQA1DcgWBu");
	this.shape_1.setTransform(17.6,-124.9);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(135));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.6,-76.3,46.8,14.8);


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
(lib.WS_Cursive_U = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_710 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(710).call(this.frame_710).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(117.1,164.5,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[117.1,164.6,135.6,144.5,165.3,140.2,193.1,139.9,207.7,154.9,210.5,157.8,212.9,161.2,227.2,182.6,219.8,207.9,218.6,211.7,217,215.7,216,218.2,215,220.6,211.6,228.5,208.5,235.8,208.3,236.2,208.1,236.6,200.7,253.1,193.8,266.3,182.5,287.8,167.7,313.5,152.8,339.2,141.9,367.7,133.5,389.7,142.8,399.5,145.5,402.4,149.8,404.3,157.4,407.5,165,407.9,169.1,408.1,173,408.5]}},206).wait(15).to({startPosition:0},0).to({guide:{path:[173.3,408.5,209.9,405.2,254.6,348.7,299.3,292.2,327.5,237.1,355.6,182.1,364.8,164.3,373.7,147,376.7,140.8]}},137).wait(13).to({startPosition:0},0).to({x:294,y:295.1},75).to({guide:{path:[293.9,295.1,286,314.1,262.6,359.2,239.1,404.4,270,410,291.8,415,332.2,390.9,372.6,366.7,386.4,353.3,400.2,340,426.1,314.4]}},180).wait(16).to({x:426.6,y:314.6},0).to({regX:-1.1,guide:{path:[426.5,314.5,459.2,261.7,521,254.6,586.3,247.3,615.8,305.6,624.4,322.7,627.9,341.3]}},59).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(375.8,142.2,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},358).wait(13).to({_off:false,x:424.8,y:315.2},0).to({_off:true},255).wait(76));

	// arrow
	this.instance_1 = new lib.ar7("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(340.1,287.9,1,1,0,-135.7,44.3,-1.2,-99.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(380).to({_off:false},0).wait(331));

	// Layer 10 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_531 = new cjs.Graphics().p("EAUPAiqIAAzsIBQAAIAATsg");
	var mask_graphics_532 = new cjs.Graphics().p("AgvJ2IAAzqIBfAAIAATqg");
	var mask_graphics_533 = new cjs.Graphics().p("Ag3J2IAAzqIBvAAIAATqg");
	var mask_graphics_534 = new cjs.Graphics().p("Ag/J1IAAzpIB/AAIAATpg");
	var mask_graphics_535 = new cjs.Graphics().p("AhHJ1IAAzpICPAAIAATpg");
	var mask_graphics_536 = new cjs.Graphics().p("AhPJ1IAAzpICfAAIAATpg");
	var mask_graphics_537 = new cjs.Graphics().p("AhXJ1IAAzpICvAAIAATpg");
	var mask_graphics_538 = new cjs.Graphics().p("AhfJ1IAAzpIC/AAIAATpg");
	var mask_graphics_539 = new cjs.Graphics().p("AhnJ0IAAznIDQAAIAATng");
	var mask_graphics_540 = new cjs.Graphics().p("AhvJ0IAAznIDgAAIAATng");
	var mask_graphics_541 = new cjs.Graphics().p("Ah3J0IAAznIDvAAIAATng");
	var mask_graphics_542 = new cjs.Graphics().p("Ah/J0IAAznID/AAIAATng");
	var mask_graphics_543 = new cjs.Graphics().p("AiIJ0IAAznIERAAIAATng");
	var mask_graphics_544 = new cjs.Graphics().p("AiQJzIAAzlIEgAAIAATlg");
	var mask_graphics_545 = new cjs.Graphics().p("AiYJzIAAzlIEwAAIAATlg");
	var mask_graphics_546 = new cjs.Graphics().p("AigJzIAAzlIFBAAIAATlg");
	var mask_graphics_547 = new cjs.Graphics().p("AioJzIAAzlIFRAAIAATlg");
	var mask_graphics_548 = new cjs.Graphics().p("AiwJzIAAzkIFhAAIAATkg");
	var mask_graphics_549 = new cjs.Graphics().p("Ai4JyIAAzjIFxAAIAATjg");
	var mask_graphics_550 = new cjs.Graphics().p("AjAJyIAAzjIGBAAIAATjg");
	var mask_graphics_551 = new cjs.Graphics().p("AjIJyIAAzjIGRAAIAATjg");
	var mask_graphics_552 = new cjs.Graphics().p("AjQJyIAAzjIGhAAIAATjg");
	var mask_graphics_553 = new cjs.Graphics().p("AjYJyIAAziIGxAAIAATig");
	var mask_graphics_554 = new cjs.Graphics().p("AjgJxIAAziIHBAAIAATig");
	var mask_graphics_555 = new cjs.Graphics().p("AjoJxIAAzhIHRAAIAAThg");
	var mask_graphics_556 = new cjs.Graphics().p("AjwJxIAAzhIHhAAIAAThg");
	var mask_graphics_557 = new cjs.Graphics().p("Aj4JxIAAzhIHxAAIAAThg");
	var mask_graphics_558 = new cjs.Graphics().p("AkAJxIAAzhIIBAAIAAThg");
	var mask_graphics_559 = new cjs.Graphics().p("AkIJwIAAzgIIRAAIAATgg");
	var mask_graphics_560 = new cjs.Graphics().p("AkRJwIAAzfIIjAAIAATfg");
	var mask_graphics_561 = new cjs.Graphics().p("AkZJwIAAzfIIzAAIAATfg");
	var mask_graphics_562 = new cjs.Graphics().p("AkhJwIAAzfIJDAAIAATfg");
	var mask_graphics_563 = new cjs.Graphics().p("AkpJwIAAzfIJSAAIAATfg");
	var mask_graphics_564 = new cjs.Graphics().p("AkxJvIAAzdIJiAAIAATdg");
	var mask_graphics_565 = new cjs.Graphics().p("Ak5JwIAAzfIJzAAIAATfg");
	var mask_graphics_566 = new cjs.Graphics().p("AlBJvIAAzdIKDAAIAATdg");
	var mask_graphics_567 = new cjs.Graphics().p("AlJJvIAAzdIKTAAIAATdg");
	var mask_graphics_568 = new cjs.Graphics().p("AlQJvIAAzdIKiAAIAATdg");
	var mask_graphics_569 = new cjs.Graphics().p("AlZJuIAAzbIKzAAIAATbg");
	var mask_graphics_570 = new cjs.Graphics().p("AlhJvIAAzdILDAAIAATdg");
	var mask_graphics_571 = new cjs.Graphics().p("AlpJuIAAzbILTAAIAATbg");
	var mask_graphics_572 = new cjs.Graphics().p("AlxJuIAAzbILjAAIAATbg");
	var mask_graphics_573 = new cjs.Graphics().p("Al5JuIAAzbILzAAIAATbg");
	var mask_graphics_574 = new cjs.Graphics().p("AmBJtIAAzaIMDAAIAATag");
	var mask_graphics_575 = new cjs.Graphics().p("AmJJuIAAzbIMTAAIAATbg");
	var mask_graphics_576 = new cjs.Graphics().p("AmRJtIAAzZIMjAAIAATZg");
	var mask_graphics_577 = new cjs.Graphics().p("AmZJtIAAzZIMzAAIAATZg");
	var mask_graphics_578 = new cjs.Graphics().p("AmhJtIAAzZINDAAIAATZg");
	var mask_graphics_579 = new cjs.Graphics().p("AmpJtIAAzZINTAAIAATZg");
	var mask_graphics_580 = new cjs.Graphics().p("AmxJtIAAzYINjAAIAATYg");
	var mask_graphics_581 = new cjs.Graphics().p("Am4JsIAAzXINyAAIAATXg");
	var mask_graphics_582 = new cjs.Graphics().p("Am/JsIAAzXIN/AAIAATXg");
	var mask_graphics_583 = new cjs.Graphics().p("AnHJsIAAzXIOPAAIAATXg");
	var mask_graphics_584 = new cjs.Graphics().p("AnOJsIAAzXIOdAAIAATXg");
	var mask_graphics_585 = new cjs.Graphics().p("AnVJsIAAzWIOrAAIAATWg");
	var mask_graphics_586 = new cjs.Graphics().p("AncJsIAAzXIO5AAIAATXg");
	var mask_graphics_587 = new cjs.Graphics().p("AnjJrIAAzVIPHAAIAATVg");
	var mask_graphics_588 = new cjs.Graphics().p("AnrJrIAAzVIPXAAIAATVg");
	var mask_graphics_589 = new cjs.Graphics().p("AnyJrIAAzVIPlAAIAATVg");
	var mask_graphics_590 = new cjs.Graphics().p("An5JrIAAzVIPzAAIAATVg");
	var mask_graphics_591 = new cjs.Graphics().p("AoAJrIAAzVIQBAAIAATVg");
	var mask_graphics_592 = new cjs.Graphics().p("AoHJqIAAzTIQPAAIAATTg");
	var mask_graphics_593 = new cjs.Graphics().p("AoOJqIAAzTIQeAAIAATTg");
	var mask_graphics_594 = new cjs.Graphics().p("AoWJqIAAzTIQtAAIAATTg");
	var mask_graphics_595 = new cjs.Graphics().p("AodJqIAAzTIQ7AAIAATTg");
	var mask_graphics_596 = new cjs.Graphics().p("AokJqIAAzSIRJAAIAATSg");
	var mask_graphics_597 = new cjs.Graphics().p("AorJpIAAzRIRXAAIAATRg");
	var mask_graphics_598 = new cjs.Graphics().p("AoyJpIAAzRIRlAAIAATRg");
	var mask_graphics_599 = new cjs.Graphics().p("Ao6JpIAAzRIR1AAIAATRg");
	var mask_graphics_600 = new cjs.Graphics().p("ApBJpIAAzRISDAAIAATRg");
	var mask_graphics_601 = new cjs.Graphics().p("ApIJpIAAzQISRAAIAATQg");
	var mask_graphics_602 = new cjs.Graphics().p("ApPJoIAAzQISfAAIAATQg");
	var mask_graphics_603 = new cjs.Graphics().p("ApWJoIAAzPIStAAIAATPg");
	var mask_graphics_604 = new cjs.Graphics().p("ApdJoIAAzPIS8AAIAATPg");
	var mask_graphics_605 = new cjs.Graphics().p("AplJoIAAzPITLAAIAATPg");
	var mask_graphics_606 = new cjs.Graphics().p("ApsJoIAAzPITZAAIAATPg");
	var mask_graphics_607 = new cjs.Graphics().p("ApzJnIAAzOITnAAIAATOg");
	var mask_graphics_608 = new cjs.Graphics().p("Ap6JnIAAzNIT1AAIAATNg");
	var mask_graphics_609 = new cjs.Graphics().p("AqBJnIAAzNIUDAAIAATNg");
	var mask_graphics_610 = new cjs.Graphics().p("AqJJnIAAzNIUTAAIAATNg");
	var mask_graphics_611 = new cjs.Graphics().p("AqQJnIAAzNIUgAAIAATNg");
	var mask_graphics_612 = new cjs.Graphics().p("AqXJmIAAzLIUvAAIAATLg");
	var mask_graphics_613 = new cjs.Graphics().p("AqeJmIAAzLIU9AAIAATLg");
	var mask_graphics_614 = new cjs.Graphics().p("AqlJmIAAzLIVLAAIAATLg");
	var mask_graphics_615 = new cjs.Graphics().p("AqsJmIAAzLIVZAAIAATLg");
	var mask_graphics_616 = new cjs.Graphics().p("Aq0JmIAAzLIVoAAIAATLg");
	var mask_graphics_617 = new cjs.Graphics().p("Aq7JlIAAzJIV3AAIAATJg");
	var mask_graphics_618 = new cjs.Graphics().p("ArCJlIAAzJIWFAAIAATJg");
	var mask_graphics_619 = new cjs.Graphics().p("ArJJlIAAzJIWTAAIAATJg");
	var mask_graphics_620 = new cjs.Graphics().p("ArQJlIAAzJIWhAAIAATJg");
	var mask_graphics_621 = new cjs.Graphics().p("ArXJlIAAzJIWvAAIAATJg");
	var mask_graphics_622 = new cjs.Graphics().p("ArfJkIAAzIIW/AAIAATIg");
	var mask_graphics_623 = new cjs.Graphics().p("ArmJlIAAzJIXNAAIAATJg");
	var mask_graphics_624 = new cjs.Graphics().p("ArtJkIAAzHIXbAAIAATHg");
	var mask_graphics_625 = new cjs.Graphics().p("Ar0JkIAAzHIXpAAIAATHg");
	var mask_graphics_626 = new cjs.Graphics().p("Ar7JkIAAzHIX3AAIAATHg");
	var mask_graphics_627 = new cjs.Graphics().p("AsDJjIAAzGIYHAAIAATGg");
	var mask_graphics_628 = new cjs.Graphics().p("AsKJkIAAzGIYUAAIAATGg");
	var mask_graphics_629 = new cjs.Graphics().p("AsRJjIAAzFIYjAAIAATFg");
	var mask_graphics_630 = new cjs.Graphics().p("AsYJjIAAzFIYxAAIAATFg");
	var mask_graphics_631 = new cjs.Graphics().p("AsfJjIAAzFIY/AAIAATFg");
	var mask_graphics_632 = new cjs.Graphics().p("AsmJjIAAzFIZNAAIAATFg");
	var mask_graphics_633 = new cjs.Graphics().p("AsuJjIAAzEIZcAAIAATEg");
	var mask_graphics_634 = new cjs.Graphics().p("As+JjIAAzFIZ9AAIAATFg");
	var mask_graphics_635 = new cjs.Graphics().p("EAHoAhNIAAzFIafAAIAATFg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(531).to({graphics:mask_graphics_531,x:137.5,y:221.8}).wait(1).to({graphics:mask_graphics_532,x:271.8,y:380.4}).wait(1).to({graphics:mask_graphics_533,x:272.6,y:380.2}).wait(1).to({graphics:mask_graphics_534,x:273.4,y:380.1}).wait(1).to({graphics:mask_graphics_535,x:274.2,y:379.9}).wait(1).to({graphics:mask_graphics_536,x:275,y:379.7}).wait(1).to({graphics:mask_graphics_537,x:275.8,y:379.6}).wait(1).to({graphics:mask_graphics_538,x:276.7,y:379.4}).wait(1).to({graphics:mask_graphics_539,x:277.5,y:379.2}).wait(1).to({graphics:mask_graphics_540,x:278.3,y:379.1}).wait(1).to({graphics:mask_graphics_541,x:279.1,y:378.9}).wait(1).to({graphics:mask_graphics_542,x:279.9,y:378.8}).wait(1).to({graphics:mask_graphics_543,x:280.7,y:378.6}).wait(1).to({graphics:mask_graphics_544,x:281.5,y:378.5}).wait(1).to({graphics:mask_graphics_545,x:282.3,y:378.3}).wait(1).to({graphics:mask_graphics_546,x:283.1,y:378.1}).wait(1).to({graphics:mask_graphics_547,x:283.9,y:378}).wait(1).to({graphics:mask_graphics_548,x:284.7,y:377.8}).wait(1).to({graphics:mask_graphics_549,x:285.5,y:377.7}).wait(1).to({graphics:mask_graphics_550,x:286.3,y:377.5}).wait(1).to({graphics:mask_graphics_551,x:287.1,y:377.4}).wait(1).to({graphics:mask_graphics_552,x:288,y:377.2}).wait(1).to({graphics:mask_graphics_553,x:288.8,y:377}).wait(1).to({graphics:mask_graphics_554,x:289.6,y:376.9}).wait(1).to({graphics:mask_graphics_555,x:290.4,y:376.7}).wait(1).to({graphics:mask_graphics_556,x:291.2,y:376.6}).wait(1).to({graphics:mask_graphics_557,x:292,y:376.4}).wait(1).to({graphics:mask_graphics_558,x:292.8,y:376.2}).wait(1).to({graphics:mask_graphics_559,x:293.6,y:376.1}).wait(1).to({graphics:mask_graphics_560,x:294.4,y:375.9}).wait(1).to({graphics:mask_graphics_561,x:295.2,y:375.8}).wait(1).to({graphics:mask_graphics_562,x:296,y:375.6}).wait(1).to({graphics:mask_graphics_563,x:296.8,y:375.4}).wait(1).to({graphics:mask_graphics_564,x:297.6,y:375.3}).wait(1).to({graphics:mask_graphics_565,x:298.4,y:375.1}).wait(1).to({graphics:mask_graphics_566,x:299.2,y:374.9}).wait(1).to({graphics:mask_graphics_567,x:300,y:374.8}).wait(1).to({graphics:mask_graphics_568,x:300.9,y:374.6}).wait(1).to({graphics:mask_graphics_569,x:301.7,y:374.5}).wait(1).to({graphics:mask_graphics_570,x:302.5,y:374.3}).wait(1).to({graphics:mask_graphics_571,x:303.3,y:374.1}).wait(1).to({graphics:mask_graphics_572,x:304.1,y:374}).wait(1).to({graphics:mask_graphics_573,x:304.9,y:373.8}).wait(1).to({graphics:mask_graphics_574,x:305.7,y:373.7}).wait(1).to({graphics:mask_graphics_575,x:306.5,y:373.5}).wait(1).to({graphics:mask_graphics_576,x:307.3,y:373.3}).wait(1).to({graphics:mask_graphics_577,x:308.1,y:373.2}).wait(1).to({graphics:mask_graphics_578,x:308.9,y:373}).wait(1).to({graphics:mask_graphics_579,x:309.7,y:372.9}).wait(1).to({graphics:mask_graphics_580,x:310.5,y:372.7}).wait(1).to({graphics:mask_graphics_581,x:311.3,y:372.5}).wait(1).to({graphics:mask_graphics_582,x:312,y:372.4}).wait(1).to({graphics:mask_graphics_583,x:312.7,y:372.2}).wait(1).to({graphics:mask_graphics_584,x:313.4,y:372.1}).wait(1).to({graphics:mask_graphics_585,x:314.1,y:371.9}).wait(1).to({graphics:mask_graphics_586,x:314.8,y:371.8}).wait(1).to({graphics:mask_graphics_587,x:315.6,y:371.6}).wait(1).to({graphics:mask_graphics_588,x:316.3,y:371.4}).wait(1).to({graphics:mask_graphics_589,x:317,y:371.3}).wait(1).to({graphics:mask_graphics_590,x:317.7,y:371.1}).wait(1).to({graphics:mask_graphics_591,x:318.4,y:371}).wait(1).to({graphics:mask_graphics_592,x:319.2,y:370.8}).wait(1).to({graphics:mask_graphics_593,x:319.9,y:370.6}).wait(1).to({graphics:mask_graphics_594,x:320.6,y:370.5}).wait(1).to({graphics:mask_graphics_595,x:321.3,y:370.3}).wait(1).to({graphics:mask_graphics_596,x:322,y:370.2}).wait(1).to({graphics:mask_graphics_597,x:322.7,y:370}).wait(1).to({graphics:mask_graphics_598,x:323.5,y:369.8}).wait(1).to({graphics:mask_graphics_599,x:324.2,y:369.7}).wait(1).to({graphics:mask_graphics_600,x:324.9,y:369.5}).wait(1).to({graphics:mask_graphics_601,x:325.6,y:369.4}).wait(1).to({graphics:mask_graphics_602,x:326.3,y:369.2}).wait(1).to({graphics:mask_graphics_603,x:327,y:369}).wait(1).to({graphics:mask_graphics_604,x:327.8,y:368.9}).wait(1).to({graphics:mask_graphics_605,x:328.5,y:368.7}).wait(1).to({graphics:mask_graphics_606,x:329.2,y:368.6}).wait(1).to({graphics:mask_graphics_607,x:329.9,y:368.4}).wait(1).to({graphics:mask_graphics_608,x:330.7,y:368.2}).wait(1).to({graphics:mask_graphics_609,x:331.4,y:368.1}).wait(1).to({graphics:mask_graphics_610,x:332.1,y:367.9}).wait(1).to({graphics:mask_graphics_611,x:332.8,y:367.8}).wait(1).to({graphics:mask_graphics_612,x:333.5,y:367.6}).wait(1).to({graphics:mask_graphics_613,x:334.3,y:367.4}).wait(1).to({graphics:mask_graphics_614,x:335,y:367.3}).wait(1).to({graphics:mask_graphics_615,x:335.7,y:367.1}).wait(1).to({graphics:mask_graphics_616,x:336.4,y:367}).wait(1).to({graphics:mask_graphics_617,x:337.1,y:366.8}).wait(1).to({graphics:mask_graphics_618,x:337.8,y:366.6}).wait(1).to({graphics:mask_graphics_619,x:338.6,y:366.5}).wait(1).to({graphics:mask_graphics_620,x:339.3,y:366.3}).wait(1).to({graphics:mask_graphics_621,x:340,y:366.2}).wait(1).to({graphics:mask_graphics_622,x:340.7,y:366}).wait(1).to({graphics:mask_graphics_623,x:341.4,y:365.9}).wait(1).to({graphics:mask_graphics_624,x:342.2,y:365.7}).wait(1).to({graphics:mask_graphics_625,x:342.9,y:365.5}).wait(1).to({graphics:mask_graphics_626,x:343.6,y:365.4}).wait(1).to({graphics:mask_graphics_627,x:344.3,y:365.2}).wait(1).to({graphics:mask_graphics_628,x:345,y:365.1}).wait(1).to({graphics:mask_graphics_629,x:345.7,y:364.9}).wait(1).to({graphics:mask_graphics_630,x:346.5,y:364.7}).wait(1).to({graphics:mask_graphics_631,x:347.2,y:364.6}).wait(1).to({graphics:mask_graphics_632,x:347.9,y:364.4}).wait(1).to({graphics:mask_graphics_633,x:348.6,y:364.3}).wait(1).to({graphics:mask_graphics_634,x:350.3,y:364.1}).wait(1).to({graphics:mask_graphics_635,x:218.3,y:212.5}).wait(76));

	// Layer 8
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(20,1,1).p("AnFpCQhPC9jrHEQjqHEE0A4QDbAxGUjxQGTjxCKiGQCKiFEEkB");
	this.shape_1.setTransform(339.4,352.9);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(531).to({_off:false},0).wait(180));

	// Layer 7 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_455 = new cjs.Graphics().p("AMXSlIDqm5IJqFIIjqG6g");
	var mask_1_graphics_456 = new cjs.Graphics().p("AmuBBID0nJIJpFIIjzHJg");
	var mask_1_graphics_457 = new cjs.Graphics().p("AmzBJID9naIJpFJIj8Hag");
	var mask_1_graphics_458 = new cjs.Graphics().p("Am3BRIEFnqIJqFIIkFHrg");
	var mask_1_graphics_459 = new cjs.Graphics().p("Am7BaIEOn7IJpFIIkOH7g");
	var mask_1_graphics_460 = new cjs.Graphics().p("AnABiIEXoMIJqFJIkXIMg");
	var mask_1_graphics_461 = new cjs.Graphics().p("AnEBrIEgodIJpFJIkfIcg");
	var mask_1_graphics_462 = new cjs.Graphics().p("AnIBzIEootIJpFJIkoIsg");
	var mask_1_graphics_463 = new cjs.Graphics().p("AnNB8IEyo+IJpFIIkxI9g");
	var mask_1_graphics_464 = new cjs.Graphics().p("AnRCEIE6pPIJpFJIk5JOg");
	var mask_1_graphics_465 = new cjs.Graphics().p("AnWCNIFDpgIJqFJIlDJeg");
	var mask_1_graphics_466 = new cjs.Graphics().p("AnaCVIFLpwIJqFIIlMJvg");
	var mask_1_graphics_467 = new cjs.Graphics().p("AnfCdIFVqBIJqFJIlUKAg");
	var mask_1_graphics_468 = new cjs.Graphics().p("AnjClIFdqRIJqFJIldKQg");
	var mask_1_graphics_469 = new cjs.Graphics().p("AnoCuIFnqiIJqFIIlmKhg");
	var mask_1_graphics_470 = new cjs.Graphics().p("AnsC2IFvqzIJqFJIlvKyg");
	var mask_1_graphics_471 = new cjs.Graphics().p("AnwC+IF4rDIJpFJIl3LCg");
	var mask_1_graphics_472 = new cjs.Graphics().p("An1DHIGBrUIJqFIImBLTg");
	var mask_1_graphics_473 = new cjs.Graphics().p("An5DPIGKrlIJpFJImJLjg");
	var mask_1_graphics_474 = new cjs.Graphics().p("An+DYIGTr2IJqFJImSL0g");
	var mask_1_graphics_475 = new cjs.Graphics().p("AoCDgIGbsGIJqFIImbMFg");
	var mask_1_graphics_476 = new cjs.Graphics().p("AoHDoIGlsXIJqFJImkMWg");
	var mask_1_graphics_477 = new cjs.Graphics().p("AoLDxIGtsoIJqFJImsMmg");
	var mask_1_graphics_478 = new cjs.Graphics().p("AoQD5IG3s4IJqFIIm2M3g");
	var mask_1_graphics_479 = new cjs.Graphics().p("AoUECIG/tKIJqFJIm+NHg");
	var mask_1_graphics_480 = new cjs.Graphics().p("AoYEKIHItaIJpFJInHNYg");
	var mask_1_graphics_481 = new cjs.Graphics().p("AocESIHQtqIJpFIInPNpg");
	var mask_1_graphics_482 = new cjs.Graphics().p("AohEaIHat6IJpFJInZN4g");
	var mask_1_graphics_483 = new cjs.Graphics().p("AolEjIHiuLIJpFIInhOJg");
	var mask_1_graphics_484 = new cjs.Graphics().p("AoqErIHrucIJqFJInqOag");
	var mask_1_graphics_485 = new cjs.Graphics().p("AouE0IH0utIJpFJInzOqg");
	var mask_1_graphics_486 = new cjs.Graphics().p("AozE8IH9u9IJqFIIn8O8g");
	var mask_1_graphics_487 = new cjs.Graphics().p("Ao3FFIIGvPIJpFJIoFPMg");
	var mask_1_graphics_488 = new cjs.Graphics().p("Ao7FNIIOvfIJpFJIoNPcg");
	var mask_1_graphics_489 = new cjs.Graphics().p("ApAFVIIYvvIJpFIIoWPtg");
	var mask_1_graphics_490 = new cjs.Graphics().p("ApEFeIIgwBIJpFJIoeP+g");
	var mask_1_graphics_491 = new cjs.Graphics().p("ApJFmIIqwRIJpFJIooQOg");
	var mask_1_graphics_492 = new cjs.Graphics().p("ApNFvIIywiIJpFIIowQgg");
	var mask_1_graphics_493 = new cjs.Graphics().p("ApSF3II7wzIJqFJIo6Qvg");
	var mask_1_graphics_494 = new cjs.Graphics().p("ApWF/IJExDIJpFJIpCRAg");
	var mask_1_graphics_495 = new cjs.Graphics().p("ApbGHIJNxTIJqFIIpLRRg");
	var mask_1_graphics_496 = new cjs.Graphics().p("ApfGQIJVxlIJqFJIpURig");
	var mask_1_graphics_497 = new cjs.Graphics().p("ApjGYIJex1IJpFJIpcRyg");
	var mask_1_graphics_498 = new cjs.Graphics().p("ApoGhIJnyGIJqFIIpmSDg");
	var mask_1_graphics_499 = new cjs.Graphics().p("ApsGpIJvyXIJqFJIptSTg");
	var mask_1_graphics_500 = new cjs.Graphics().p("ApwGxIJ3ynIJrFJIp3Skg");
	var mask_1_graphics_501 = new cjs.Graphics().p("Ap1G6IKAy4IJrFIIp/S1g");
	var mask_1_graphics_502 = new cjs.Graphics().p("Ap5HCIKJzJIJrFJIqITGg");
	var mask_1_graphics_503 = new cjs.Graphics().p("Ap+HLIKSzZIJrFIIqRTVg");
	var mask_1_graphics_504 = new cjs.Graphics().p("AqCHTIKbzqIJrFJIqaTmg");
	var mask_1_graphics_505 = new cjs.Graphics().p("AqHHbIKkz6IJrFIIqiT3g");
	var mask_1_graphics_506 = new cjs.Graphics().p("AqLHkIKt0LIJqFIIqrUIg");
	var mask_1_graphics_507 = new cjs.Graphics().p("AqQHsIK20cIJrFJIq0UYg");
	var mask_1_graphics_508 = new cjs.Graphics().p("AqUH0IK/0sIJqFIIq8Upg");
	var mask_1_graphics_509 = new cjs.Graphics().p("AqYH8ILH08IJrFIIrGU5g");
	var mask_1_graphics_510 = new cjs.Graphics().p("AqdIFILQ1OIJrFJIrPVKg");
	var mask_1_graphics_511 = new cjs.Graphics().p("AqhINILZ1eIJrFIIrXVbg");
	var mask_1_graphics_512 = new cjs.Graphics().p("AqmIWILi1vIJrFIIrgVsg");
	var mask_1_graphics_513 = new cjs.Graphics().p("AqqIeILr2AIJqFJIroV8g");
	var mask_1_graphics_514 = new cjs.Graphics().p("AqvInIL02RIJrFJIryWMg");
	var mask_1_graphics_515 = new cjs.Graphics().p("AqzIvIL92hIJqFIIr6Wdg");
	var mask_1_graphics_516 = new cjs.Graphics().p("Aq4I4IMG2yIJqFIIsDWug");
	var mask_1_graphics_517 = new cjs.Graphics().p("Aq8JAIMO3DIJrFJIsMW+g");
	var mask_1_graphics_518 = new cjs.Graphics().p("ArAJIIMX3TIJqFIIsUXPg");
	var mask_1_graphics_519 = new cjs.Graphics().p("ArFJRIMg3kIJrFIIseXfg");
	var mask_1_graphics_520 = new cjs.Graphics().p("ADLbQIM14MIJrFJIs2YLg");
	var mask_1_graphics_521 = new cjs.Graphics().p("ArYJdIM14LIJ8FSIs1YLg");
	var mask_1_graphics_522 = new cjs.Graphics().p("ArhJYIM14KIKOFbIs1YKg");
	var mask_1_graphics_523 = new cjs.Graphics().p("ArpJUIM04LIKgFkIs1YLg");
	var mask_1_graphics_524 = new cjs.Graphics().p("AryJPIM04LIKxFuIs0YLg");
	var mask_1_graphics_525 = new cjs.Graphics().p("Ar7JKIM14LILCF4Is1YLg");
	var mask_1_graphics_526 = new cjs.Graphics().p("AsEJGIM14LILUGAIs1YLg");
	var mask_1_graphics_527 = new cjs.Graphics().p("AsMJBIM04LILmGKIs1YLg");
	var mask_1_graphics_528 = new cjs.Graphics().p("AsVI8IM04LIL3GUIs0YLg");
	var mask_1_graphics_529 = new cjs.Graphics().p("AseI3IM04KIMJGcIs0YLg");
	var mask_1_graphics_530 = new cjs.Graphics().p("AsnIzIM14LIMaGmIs0YLg");
	var mask_1_graphics_531 = new cjs.Graphics().p("ABqadIM14LIMsGvIs1YLg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(455).to({graphics:mask_1_graphics_455,x:164.3,y:151.8}).wait(1).to({graphics:mask_1_graphics_456,x:285.6,y:265.9}).wait(1).to({graphics:mask_1_graphics_457,x:285.2,y:266.7}).wait(1).to({graphics:mask_1_graphics_458,x:284.7,y:267.6}).wait(1).to({graphics:mask_1_graphics_459,x:284.3,y:268.4}).wait(1).to({graphics:mask_1_graphics_460,x:283.8,y:269.2}).wait(1).to({graphics:mask_1_graphics_461,x:283.4,y:270.1}).wait(1).to({graphics:mask_1_graphics_462,x:283,y:270.9}).wait(1).to({graphics:mask_1_graphics_463,x:282.5,y:271.8}).wait(1).to({graphics:mask_1_graphics_464,x:282,y:272.6}).wait(1).to({graphics:mask_1_graphics_465,x:281.6,y:273.4}).wait(1).to({graphics:mask_1_graphics_466,x:281.2,y:274.2}).wait(1).to({graphics:mask_1_graphics_467,x:280.7,y:275.1}).wait(1).to({graphics:mask_1_graphics_468,x:280.3,y:275.9}).wait(1).to({graphics:mask_1_graphics_469,x:279.8,y:276.7}).wait(1).to({graphics:mask_1_graphics_470,x:279.4,y:277.6}).wait(1).to({graphics:mask_1_graphics_471,x:278.9,y:278.4}).wait(1).to({graphics:mask_1_graphics_472,x:278.5,y:279.3}).wait(1).to({graphics:mask_1_graphics_473,x:278,y:280.1}).wait(1).to({graphics:mask_1_graphics_474,x:277.6,y:280.9}).wait(1).to({graphics:mask_1_graphics_475,x:277.2,y:281.8}).wait(1).to({graphics:mask_1_graphics_476,x:276.7,y:282.6}).wait(1).to({graphics:mask_1_graphics_477,x:276.3,y:283.4}).wait(1).to({graphics:mask_1_graphics_478,x:275.8,y:284.3}).wait(1).to({graphics:mask_1_graphics_479,x:275.4,y:285.1}).wait(1).to({graphics:mask_1_graphics_480,x:274.9,y:285.9}).wait(1).to({graphics:mask_1_graphics_481,x:274.5,y:286.8}).wait(1).to({graphics:mask_1_graphics_482,x:274,y:287.6}).wait(1).to({graphics:mask_1_graphics_483,x:273.6,y:288.5}).wait(1).to({graphics:mask_1_graphics_484,x:273.1,y:289.3}).wait(1).to({graphics:mask_1_graphics_485,x:272.7,y:290.1}).wait(1).to({graphics:mask_1_graphics_486,x:272.2,y:291}).wait(1).to({graphics:mask_1_graphics_487,x:271.8,y:291.8}).wait(1).to({graphics:mask_1_graphics_488,x:271.4,y:292.6}).wait(1).to({graphics:mask_1_graphics_489,x:270.9,y:293.5}).wait(1).to({graphics:mask_1_graphics_490,x:270.5,y:294.3}).wait(1).to({graphics:mask_1_graphics_491,x:270,y:295.1}).wait(1).to({graphics:mask_1_graphics_492,x:269.6,y:296}).wait(1).to({graphics:mask_1_graphics_493,x:269.1,y:296.8}).wait(1).to({graphics:mask_1_graphics_494,x:268.7,y:297.6}).wait(1).to({graphics:mask_1_graphics_495,x:268.2,y:298.5}).wait(1).to({graphics:mask_1_graphics_496,x:267.8,y:299.3}).wait(1).to({graphics:mask_1_graphics_497,x:267.3,y:300.1}).wait(1).to({graphics:mask_1_graphics_498,x:266.9,y:301}).wait(1).to({graphics:mask_1_graphics_499,x:266.4,y:301.8}).wait(1).to({graphics:mask_1_graphics_500,x:266,y:302.6}).wait(1).to({graphics:mask_1_graphics_501,x:265.6,y:303.5}).wait(1).to({graphics:mask_1_graphics_502,x:265.1,y:304.3}).wait(1).to({graphics:mask_1_graphics_503,x:264.7,y:305.2}).wait(1).to({graphics:mask_1_graphics_504,x:264.2,y:306}).wait(1).to({graphics:mask_1_graphics_505,x:263.8,y:306.8}).wait(1).to({graphics:mask_1_graphics_506,x:263.3,y:307.7}).wait(1).to({graphics:mask_1_graphics_507,x:262.9,y:308.5}).wait(1).to({graphics:mask_1_graphics_508,x:262.4,y:309.3}).wait(1).to({graphics:mask_1_graphics_509,x:262,y:310.2}).wait(1).to({graphics:mask_1_graphics_510,x:261.6,y:311}).wait(1).to({graphics:mask_1_graphics_511,x:261.1,y:311.8}).wait(1).to({graphics:mask_1_graphics_512,x:260.6,y:312.7}).wait(1).to({graphics:mask_1_graphics_513,x:260.2,y:313.5}).wait(1).to({graphics:mask_1_graphics_514,x:259.8,y:314.3}).wait(1).to({graphics:mask_1_graphics_515,x:259.3,y:315.2}).wait(1).to({graphics:mask_1_graphics_516,x:258.9,y:316}).wait(1).to({graphics:mask_1_graphics_517,x:258.4,y:316.8}).wait(1).to({graphics:mask_1_graphics_518,x:258,y:317.7}).wait(1).to({graphics:mask_1_graphics_519,x:257.5,y:318.5}).wait(1).to({graphics:mask_1_graphics_520,x:164.3,y:207.2}).wait(1).to({graphics:mask_1_graphics_521,x:257.4,y:321.1}).wait(1).to({graphics:mask_1_graphics_522,x:258.3,y:321.6}).wait(1).to({graphics:mask_1_graphics_523,x:259.2,y:322.1}).wait(1).to({graphics:mask_1_graphics_524,x:260,y:322.6}).wait(1).to({graphics:mask_1_graphics_525,x:260.9,y:323.1}).wait(1).to({graphics:mask_1_graphics_526,x:261.8,y:323.5}).wait(1).to({graphics:mask_1_graphics_527,x:262.7,y:324}).wait(1).to({graphics:mask_1_graphics_528,x:263.5,y:324.5}).wait(1).to({graphics:mask_1_graphics_529,x:264.4,y:325}).wait(1).to({graphics:mask_1_graphics_530,x:265.3,y:325.4}).wait(1).to({graphics:mask_1_graphics_531,x:173.9,y:212.4}).wait(180));

	// Layer 6
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(20,1,1).p("AnFpCQhPC9jrHEQjqHEE0A4QDbAxGUjxQGTjxCKiGQCKiFEEkB");
	this.shape_2.setTransform(339.4,352.9);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(455).to({_off:false},0).wait(256));

	// Layer 5 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_230 = new cjs.Graphics().p("AFxdRICai5IIAGKIibC4g");
	var mask_2_graphics_231 = new cjs.Graphics().p("AlShgICpjIIH8GIIilDJg");
	var mask_2_graphics_232 = new cjs.Graphics().p("AlZhXIC5jaIH6GIIixDag");
	var mask_2_graphics_233 = new cjs.Graphics().p("AlghQIDIjpIH5GIIi+Drg");
	var mask_2_graphics_234 = new cjs.Graphics().p("AlnhIIDYj5IH3GIIjKD7g");
	var mask_2_graphics_235 = new cjs.Graphics().p("AlthAIDmkKIH1GIIjVENg");
	var mask_2_graphics_236 = new cjs.Graphics().p("Al0g5ID2kZIHzGIIjhEdg");
	var mask_2_graphics_237 = new cjs.Graphics().p("Al6gxIEFkqIHwGIIjrEvg");
	var mask_2_graphics_238 = new cjs.Graphics().p("AmBgpIETk6IHwGJIj4E+g");
	var mask_2_graphics_239 = new cjs.Graphics().p("AmIghIEjlKIHuGJIkEFPg");
	var mask_2_graphics_240 = new cjs.Graphics().p("AmPgZIEylbIHsGJIkPFgg");
	var mask_2_graphics_241 = new cjs.Graphics().p("AmVgSIFBlqIHqGJIkbFxg");
	var mask_2_graphics_242 = new cjs.Graphics().p("AmcgKIFRl7IHoGJIknGCg");
	var mask_2_graphics_243 = new cjs.Graphics().p("AmigCIFfmLIHmGKIkyGRg");
	var mask_2_graphics_244 = new cjs.Graphics().p("AmpAFIFumaIHlGKIk+Ghg");
	var mask_2_graphics_245 = new cjs.Graphics().p("AmwAMIF+mqIHjGKIlKGzg");
	var mask_2_graphics_246 = new cjs.Graphics().p("Am3AXIGMm/IHjGKIlZHHg");
	var mask_2_graphics_247 = new cjs.Graphics().p("Am+AgIGanSIHkGKIloHbg");
	var mask_2_graphics_248 = new cjs.Graphics().p("AnGArIGpnnIHkGKIl3Hvg");
	var mask_2_graphics_249 = new cjs.Graphics().p("AnNA1IG3n7IHkGKImGIDg");
	var mask_2_graphics_250 = new cjs.Graphics().p("AnVA+IHGoNIHlGKImVIVg");
	var mask_2_graphics_251 = new cjs.Graphics().p("AncBIIHUohIHlGJImkIqg");
	var mask_2_graphics_252 = new cjs.Graphics().p("AnjBSIHjo1IHkGKImyI9g");
	var mask_2_graphics_253 = new cjs.Graphics().p("AnrBcIHxpJIHmGKInCJRg");
	var mask_2_graphics_254 = new cjs.Graphics().p("AnyBnIH/peIHmGKInRJlg");
	var mask_2_graphics_255 = new cjs.Graphics().p("An5BwIINpxIHmGKInfJ5g");
	var mask_2_graphics_256 = new cjs.Graphics().p("AoBB6IIcqFIHnGKInvKNg");
	var mask_2_graphics_257 = new cjs.Graphics().p("AoICEIIrqZIHmGKIn9Khg");
	var mask_2_graphics_258 = new cjs.Graphics().p("AoQCOII6qtIHnGKIoNK1g");
	var mask_2_graphics_259 = new cjs.Graphics().p("AoXCYIJIrBIHnGKIobLJg");
	var mask_2_graphics_260 = new cjs.Graphics().p("AoeCjIJWrVIHnGKIopLbg");
	var mask_2_graphics_261 = new cjs.Graphics().p("AomCtIJlrpIHoGJIo5Lwg");
	var mask_2_graphics_262 = new cjs.Graphics().p("AotC3IJzr+IHoGKIpHMEg");
	var mask_2_graphics_263 = new cjs.Graphics().p("Ao1DAIKCsQIHpGKIpXMXg");
	var mask_2_graphics_264 = new cjs.Graphics().p("Ao8DKIKQskIHpGKIpmMrg");
	var mask_2_graphics_265 = new cjs.Graphics().p("ApDDVIKfs5IHpGKIp1M/g");
	var mask_2_graphics_266 = new cjs.Graphics().p("ApLDeIKutMIHpGKIqDNTg");
	var mask_2_graphics_267 = new cjs.Graphics().p("ApSDoIK8tgIHpGKIqSNng");
	var mask_2_graphics_268 = new cjs.Graphics().p("ApZDyILKt0IHpGKIqgN7g");
	var mask_2_graphics_269 = new cjs.Graphics().p("AphD8ILZuIIHqGKIqwOPg");
	var mask_2_graphics_270 = new cjs.Graphics().p("ApoEGILoucIHpGKIq/Ojg");
	var mask_2_graphics_271 = new cjs.Graphics().p("ApwERIL3uwIHqGJIrOO2g");
	var mask_2_graphics_272 = new cjs.Graphics().p("Ap3EbIMFvFIHqGKIrdPKg");
	var mask_2_graphics_273 = new cjs.Graphics().p("Ap+ElIMTvZIHrGLIrtPdg");
	var mask_2_graphics_274 = new cjs.Graphics().p("AqGEuIMivrIHrGKIr7Pxg");
	var mask_2_graphics_275 = new cjs.Graphics().p("AqNE4IMwwAIHrGKIsKQHg");
	var mask_2_graphics_276 = new cjs.Graphics().p("AqVFCIM/wTIHsGJIsZQag");
	var mask_2_graphics_277 = new cjs.Graphics().p("AqcFMINNwnIHsGKIsoQtg");
	var mask_2_graphics_278 = new cjs.Graphics().p("AqjFWINbw7IHtGKIs4RBg");
	var mask_2_graphics_279 = new cjs.Graphics().p("AqrFgINrxPIHsGKItGRVg");
	var mask_2_graphics_280 = new cjs.Graphics().p("AqyFqIN5xjIHsGKItVRpg");
	var mask_2_graphics_281 = new cjs.Graphics().p("Aq5F0IOHx3IHtGKItkR9g");
	var mask_2_graphics_282 = new cjs.Graphics().p("ArBF+IOWyLIHtGKItzSRg");
	var mask_2_graphics_283 = new cjs.Graphics().p("ArIGIIOlyfIHsGKIuBSlg");
	var mask_2_graphics_284 = new cjs.Graphics().p("ArQGSIO0yyIHtGJIuRS5g");
	var mask_2_graphics_285 = new cjs.Graphics().p("ArXGcIPCzHIHtGKIufTNg");
	var mask_2_graphics_286 = new cjs.Graphics().p("AreGmIPQzbIHuGLIuvTgg");
	var mask_2_graphics_287 = new cjs.Graphics().p("ArmGwIPfzuIHuGJIu+T0g");
	var mask_2_graphics_288 = new cjs.Graphics().p("ArtG6IPt0CIHuGKIvMUHg");
	var mask_2_graphics_289 = new cjs.Graphics().p("Ar0HEIP70WIHvGKIvcUbg");
	var mask_2_graphics_290 = new cjs.Graphics().p("Ar8HOIQK0qIHvGKIvqUvg");
	var mask_2_graphics_291 = new cjs.Graphics().p("AsDHYIQY0+IHvGKIv5VDg");
	var mask_2_graphics_292 = new cjs.Graphics().p("AsLHiIQo1SIHvGKIwJVXg");
	var mask_2_graphics_293 = new cjs.Graphics().p("AsSHsIQ21mIHvGKIwXVrg");
	var mask_2_graphics_294 = new cjs.Graphics().p("AsZH2IRE16IHvGKIwmV/g");
	var mask_2_graphics_295 = new cjs.Graphics().p("AshIAIRT2OIHwGKIw2WTg");
	var mask_2_graphics_296 = new cjs.Graphics().p("AsoIKIRi2iIHvGLIxEWmg");
	var mask_2_graphics_297 = new cjs.Graphics().p("AswIUIRx21IHwGKIxUW6g");
	var mask_2_graphics_298 = new cjs.Graphics().p("As3IeIR/3JIHwGJIxiXOg");
	var mask_2_graphics_299 = new cjs.Graphics().p("As+IoISN3dIHwGKIxxXhg");
	var mask_2_graphics_300 = new cjs.Graphics().p("AtGIyISc3xIHxGKIyAX1g");
	var mask_2_graphics_301 = new cjs.Graphics().p("AtNI8ISq4FIHxGKIyPYJg");
	var mask_2_graphics_302 = new cjs.Graphics().p("AtUJGIS54ZIHwGKIydYdg");
	var mask_2_graphics_303 = new cjs.Graphics().p("AtcJQITH4tIHyGKIytYxg");
	var mask_2_graphics_304 = new cjs.Graphics().p("AtjJaITW5BIHxGKIy8ZFg");
	var mask_2_graphics_305 = new cjs.Graphics().p("AtrJkITl5VIHyGKIzLZZg");
	var mask_2_graphics_306 = new cjs.Graphics().p("AtyJuITz5pIHyGKIzaZtg");
	var mask_2_graphics_307 = new cjs.Graphics().p("At5J4IUB58IHyGKIzoaAg");
	var mask_2_graphics_308 = new cjs.Graphics().p("AuBKCIUQ6QIHzGJIz4aUg");
	var mask_2_graphics_309 = new cjs.Graphics().p("AuIKMIUf6kIHyGJI0Haog");
	var mask_2_graphics_310 = new cjs.Graphics().p("AuQKWIUu64IHzGKI0Wa7g");
	var mask_2_graphics_311 = new cjs.Graphics().p("AuXKgIU87MIHzGJI0lbQg");
	var mask_2_graphics_312 = new cjs.Graphics().p("AueKqIVK7gIH0GKI00bjg");
	var mask_2_graphics_313 = new cjs.Graphics().p("AumK0IVZ70IH0GKI1Db3g");
	var mask_2_graphics_314 = new cjs.Graphics().p("AutK+IVn8IIH0GKI1ScLg");
	var mask_2_graphics_315 = new cjs.Graphics().p("Au0LIIV18cIH1GKI1hcfg");
	var mask_2_graphics_316 = new cjs.Graphics().p("Au8LSIWE8wIH1GKI1wczg");
	var mask_2_graphics_317 = new cjs.Graphics().p("AvDLcIWT9DIH0GJI1+dHg");
	var mask_2_graphics_318 = new cjs.Graphics().p("AvLLmIWi9XIH1GJI2Odbg");
	var mask_2_graphics_319 = new cjs.Graphics().p("AvSLwIWw9rIH1GJI2cdug");
	var mask_2_graphics_320 = new cjs.Graphics().p("AvZL6IW+9/IH2GKI2seBg");
	var mask_2_graphics_321 = new cjs.Graphics().p("AvhMDIXN+SIH2GJI26eWg");
	var mask_2_graphics_322 = new cjs.Graphics().p("AvoMNIXc+mIH1GJI3Jeqg");
	var mask_2_graphics_323 = new cjs.Graphics().p("AvwMYIXr+7IH2GKI3Ze9g");
	var mask_2_graphics_324 = new cjs.Graphics().p("Av3MiIX5/PIH2GKI3nfRg");
	var mask_2_graphics_325 = new cjs.Graphics().p("Av+MsIYH/jIH2GKI32flg");
	var mask_2_graphics_326 = new cjs.Graphics().p("AwGM2IYW/3IH3GKI4Ff5g");
	var mask_2_graphics_327 = new cjs.Graphics().p("AwNNAMAYkggKIH3GJMgYUAgNg");
	var mask_2_graphics_328 = new cjs.Graphics().p("AwUNKMAYyggeIH4GJMgYkAghg");
	var mask_2_graphics_329 = new cjs.Graphics().p("AwcNUMAZBggyIH4GJMgYyAg0g");
	var mask_2_graphics_330 = new cjs.Graphics().p("AwjNeMAZQghGIH3GJMgZBAhIg");
	var mask_2_graphics_331 = new cjs.Graphics().p("AwrNoMAZfghaIH4GKMgZQAhbg");
	var mask_2_graphics_332 = new cjs.Graphics().p("AwyNxMAZtghtIH4GJMgZfAhwg");
	var mask_2_graphics_333 = new cjs.Graphics().p("Aw5N7MAZ7giBIH4GKMgZuAiDg");
	var mask_2_graphics_334 = new cjs.Graphics().p("AxBOGMAaLgiWIH4GKMgZ9AiXg");
	var mask_2_graphics_335 = new cjs.Graphics().p("AxIOQMAaZgiqIH4GJMgaMAisg");
	var mask_2_graphics_336 = new cjs.Graphics().p("AxQOaMAaogi+IH5GKMgabAi/g");
	var mask_2_graphics_337 = new cjs.Graphics().p("AxXOjMAa2gjRIH5GKMgaqAjTg");
	var mask_2_graphics_338 = new cjs.Graphics().p("AxeOtMAbEgjlIH5GKMga5Ajng");
	var mask_2_graphics_339 = new cjs.Graphics().p("AxmO3MAbTgj5IH6GKMgbIAj7g");
	var mask_2_graphics_340 = new cjs.Graphics().p("AxtPBMAbhgkMIH6GJMgbXAkOg");
	var mask_2_graphics_341 = new cjs.Graphics().p("Ax0PLMAbvgkgIH6GJMgblAkig");
	var mask_2_graphics_342 = new cjs.Graphics().p("Ax8PVMAb+gk1IH7GKMgb1Ak2g");
	var mask_2_graphics_343 = new cjs.Graphics().p("AyDPfMAcNglIIH6GJMgcDAlKg");
	var mask_2_graphics_344 = new cjs.Graphics().p("AyLPpMAccglcIH7GJMgcTAleg");
	var mask_2_graphics_345 = new cjs.Graphics().p("AySPzMAcqglwIH7GJMgciAlyg");
	var mask_2_graphics_346 = new cjs.Graphics().p("AyZP+MAc4gmFIH7GKMgcwAmFg");
	var mask_2_graphics_347 = new cjs.Graphics().p("AyhQIMAdIgmZIH7GKMgdAAmZg");
	var mask_2_graphics_348 = new cjs.Graphics().p("AyoQRMAdWgmsIH7GKMgdOAmtg");
	var mask_2_graphics_349 = new cjs.Graphics().p("AyvQbMAdkgnAIH7GKMgddAnBg");
	var mask_2_graphics_350 = new cjs.Graphics().p("Ay3QlMAdzgnUIH8GKMgdtAnVg");
	var mask_2_graphics_351 = new cjs.Graphics().p("Ay+QvMAeBgnnIH9GJMgd8Anog");
	var mask_2_graphics_352 = new cjs.Graphics().p("AzGQ5MAeQgn8IH9GKMgeLAn8g");
	var mask_2_graphics_353 = new cjs.Graphics().p("AzNRDMAeegoPIH9GJMgeZAoQg");
	var mask_2_graphics_354 = new cjs.Graphics().p("AzURNMAetgojIH9GJMgepAokg");
	var mask_2_graphics_355 = new cjs.Graphics().p("AzcRXMAe7go3IH+GJMge4Ao4g");
	var mask_2_graphics_356 = new cjs.Graphics().p("AzjRhMAfKgpLIH9GKMgfGApLg");
	var mask_2_graphics_357 = new cjs.Graphics().p("AzrRrMAfZgpfIH+GKMgfWApfg");
	var mask_2_graphics_358 = new cjs.Graphics().p("AzyR1MAfngpzIH+GJMgfkAp0g");
	var mask_2_graphics_359 = new cjs.Graphics().p("Az5R/MAf1gqHIH/GKMgf0AqHg");
	var mask_2_graphics_360 = new cjs.Graphics().p("A0BSJMAgFgqbIH+GKMggCAqbg");
	var mask_2_graphics_361 = new cjs.Graphics().p("A0ISTMAgTgquIH+GJMggRAqug");
	var mask_2_graphics_362 = new cjs.Graphics().p("A0PSdMAghgrDIH/GKMgghArCg");
	var mask_2_graphics_363 = new cjs.Graphics().p("A0XSoMAgwgrYIH/GKMggvArWg");
	var mask_2_graphics_364 = new cjs.Graphics().p("A0eSxMAg+grqIH/GJMgg+Arqg");
	var mask_2_graphics_365 = new cjs.Graphics().p("ApedIMAhNgr9IH/GJMghNAr+g");
	var mask_2_graphics_366 = new cjs.Graphics().p("A0+TaMAh9gs8IH/GKMgh8As7g");
	var mask_2_graphics_367 = new cjs.Graphics().p("AqOdIMAisgt6IIAGKMgitAt5g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(230).to({graphics:mask_2_graphics_230,x:103.5,y:226.6}).wait(1).to({graphics:mask_2_graphics_231,x:174.4,y:423.4}).wait(1).to({graphics:mask_2_graphics_232,x:175.2,y:422.5}).wait(1).to({graphics:mask_2_graphics_233,x:176,y:421.5}).wait(1).to({graphics:mask_2_graphics_234,x:176.8,y:420.5}).wait(1).to({graphics:mask_2_graphics_235,x:177.6,y:419.6}).wait(1).to({graphics:mask_2_graphics_236,x:178.4,y:418.6}).wait(1).to({graphics:mask_2_graphics_237,x:179.2,y:417.7}).wait(1).to({graphics:mask_2_graphics_238,x:180,y:416.7}).wait(1).to({graphics:mask_2_graphics_239,x:180.8,y:415.7}).wait(1).to({graphics:mask_2_graphics_240,x:181.6,y:414.8}).wait(1).to({graphics:mask_2_graphics_241,x:182.4,y:413.8}).wait(1).to({graphics:mask_2_graphics_242,x:183.1,y:412.8}).wait(1).to({graphics:mask_2_graphics_243,x:184,y:411.9}).wait(1).to({graphics:mask_2_graphics_244,x:184.7,y:410.9}).wait(1).to({graphics:mask_2_graphics_245,x:185.5,y:409.9}).wait(1).to({graphics:mask_2_graphics_246,x:186.3,y:409}).wait(1).to({graphics:mask_2_graphics_247,x:187,y:408}).wait(1).to({graphics:mask_2_graphics_248,x:187.8,y:407}).wait(1).to({graphics:mask_2_graphics_249,x:188.5,y:406}).wait(1).to({graphics:mask_2_graphics_250,x:189.2,y:405}).wait(1).to({graphics:mask_2_graphics_251,x:190,y:404}).wait(1).to({graphics:mask_2_graphics_252,x:190.7,y:403}).wait(1).to({graphics:mask_2_graphics_253,x:191.4,y:402}).wait(1).to({graphics:mask_2_graphics_254,x:192.2,y:401}).wait(1).to({graphics:mask_2_graphics_255,x:192.9,y:400.1}).wait(1).to({graphics:mask_2_graphics_256,x:193.7,y:399.1}).wait(1).to({graphics:mask_2_graphics_257,x:194.4,y:398.1}).wait(1).to({graphics:mask_2_graphics_258,x:195.1,y:397.1}).wait(1).to({graphics:mask_2_graphics_259,x:195.9,y:396.1}).wait(1).to({graphics:mask_2_graphics_260,x:196.6,y:395.1}).wait(1).to({graphics:mask_2_graphics_261,x:197.4,y:394.1}).wait(1).to({graphics:mask_2_graphics_262,x:198.1,y:393.1}).wait(1).to({graphics:mask_2_graphics_263,x:198.8,y:392.1}).wait(1).to({graphics:mask_2_graphics_264,x:199.6,y:391.1}).wait(1).to({graphics:mask_2_graphics_265,x:200.3,y:390.1}).wait(1).to({graphics:mask_2_graphics_266,x:201,y:389.2}).wait(1).to({graphics:mask_2_graphics_267,x:201.8,y:388.2}).wait(1).to({graphics:mask_2_graphics_268,x:202.5,y:387.2}).wait(1).to({graphics:mask_2_graphics_269,x:203.3,y:386.2}).wait(1).to({graphics:mask_2_graphics_270,x:204,y:385.2}).wait(1).to({graphics:mask_2_graphics_271,x:204.7,y:384.2}).wait(1).to({graphics:mask_2_graphics_272,x:205.5,y:383.2}).wait(1).to({graphics:mask_2_graphics_273,x:206.2,y:382.2}).wait(1).to({graphics:mask_2_graphics_274,x:206.9,y:381.2}).wait(1).to({graphics:mask_2_graphics_275,x:207.7,y:380.3}).wait(1).to({graphics:mask_2_graphics_276,x:208.4,y:379.3}).wait(1).to({graphics:mask_2_graphics_277,x:209.2,y:378.3}).wait(1).to({graphics:mask_2_graphics_278,x:209.9,y:377.3}).wait(1).to({graphics:mask_2_graphics_279,x:210.6,y:376.3}).wait(1).to({graphics:mask_2_graphics_280,x:211.4,y:375.3}).wait(1).to({graphics:mask_2_graphics_281,x:212.1,y:374.3}).wait(1).to({graphics:mask_2_graphics_282,x:212.9,y:373.3}).wait(1).to({graphics:mask_2_graphics_283,x:213.6,y:372.3}).wait(1).to({graphics:mask_2_graphics_284,x:214.3,y:371.4}).wait(1).to({graphics:mask_2_graphics_285,x:215.1,y:370.4}).wait(1).to({graphics:mask_2_graphics_286,x:215.8,y:369.4}).wait(1).to({graphics:mask_2_graphics_287,x:216.5,y:368.4}).wait(1).to({graphics:mask_2_graphics_288,x:217.3,y:367.4}).wait(1).to({graphics:mask_2_graphics_289,x:218,y:366.4}).wait(1).to({graphics:mask_2_graphics_290,x:218.8,y:365.4}).wait(1).to({graphics:mask_2_graphics_291,x:219.5,y:364.4}).wait(1).to({graphics:mask_2_graphics_292,x:220.2,y:363.4}).wait(1).to({graphics:mask_2_graphics_293,x:221,y:362.4}).wait(1).to({graphics:mask_2_graphics_294,x:221.7,y:361.4}).wait(1).to({graphics:mask_2_graphics_295,x:222.5,y:360.5}).wait(1).to({graphics:mask_2_graphics_296,x:223.2,y:359.5}).wait(1).to({graphics:mask_2_graphics_297,x:223.9,y:358.5}).wait(1).to({graphics:mask_2_graphics_298,x:224.7,y:357.5}).wait(1).to({graphics:mask_2_graphics_299,x:225.4,y:356.5}).wait(1).to({graphics:mask_2_graphics_300,x:226.1,y:355.5}).wait(1).to({graphics:mask_2_graphics_301,x:226.9,y:354.5}).wait(1).to({graphics:mask_2_graphics_302,x:227.6,y:353.5}).wait(1).to({graphics:mask_2_graphics_303,x:228.4,y:352.5}).wait(1).to({graphics:mask_2_graphics_304,x:229.1,y:351.5}).wait(1).to({graphics:mask_2_graphics_305,x:229.8,y:350.6}).wait(1).to({graphics:mask_2_graphics_306,x:230.6,y:349.6}).wait(1).to({graphics:mask_2_graphics_307,x:231.3,y:348.6}).wait(1).to({graphics:mask_2_graphics_308,x:232.1,y:347.6}).wait(1).to({graphics:mask_2_graphics_309,x:232.8,y:346.6}).wait(1).to({graphics:mask_2_graphics_310,x:233.5,y:345.6}).wait(1).to({graphics:mask_2_graphics_311,x:234.3,y:344.6}).wait(1).to({graphics:mask_2_graphics_312,x:235,y:343.6}).wait(1).to({graphics:mask_2_graphics_313,x:235.7,y:342.6}).wait(1).to({graphics:mask_2_graphics_314,x:236.5,y:341.6}).wait(1).to({graphics:mask_2_graphics_315,x:237.2,y:340.6}).wait(1).to({graphics:mask_2_graphics_316,x:238,y:339.7}).wait(1).to({graphics:mask_2_graphics_317,x:238.7,y:338.7}).wait(1).to({graphics:mask_2_graphics_318,x:239.4,y:337.7}).wait(1).to({graphics:mask_2_graphics_319,x:240.2,y:336.7}).wait(1).to({graphics:mask_2_graphics_320,x:240.9,y:335.7}).wait(1).to({graphics:mask_2_graphics_321,x:241.7,y:334.7}).wait(1).to({graphics:mask_2_graphics_322,x:242.4,y:333.7}).wait(1).to({graphics:mask_2_graphics_323,x:243.1,y:332.7}).wait(1).to({graphics:mask_2_graphics_324,x:243.9,y:331.7}).wait(1).to({graphics:mask_2_graphics_325,x:244.6,y:330.7}).wait(1).to({graphics:mask_2_graphics_326,x:245.3,y:329.7}).wait(1).to({graphics:mask_2_graphics_327,x:246.1,y:328.8}).wait(1).to({graphics:mask_2_graphics_328,x:246.8,y:327.8}).wait(1).to({graphics:mask_2_graphics_329,x:247.6,y:326.8}).wait(1).to({graphics:mask_2_graphics_330,x:248.3,y:325.8}).wait(1).to({graphics:mask_2_graphics_331,x:249,y:324.8}).wait(1).to({graphics:mask_2_graphics_332,x:249.8,y:323.8}).wait(1).to({graphics:mask_2_graphics_333,x:250.5,y:322.8}).wait(1).to({graphics:mask_2_graphics_334,x:251.2,y:321.8}).wait(1).to({graphics:mask_2_graphics_335,x:252,y:320.9}).wait(1).to({graphics:mask_2_graphics_336,x:252.7,y:319.9}).wait(1).to({graphics:mask_2_graphics_337,x:253.5,y:318.9}).wait(1).to({graphics:mask_2_graphics_338,x:254.2,y:317.9}).wait(1).to({graphics:mask_2_graphics_339,x:254.9,y:316.9}).wait(1).to({graphics:mask_2_graphics_340,x:255.7,y:315.9}).wait(1).to({graphics:mask_2_graphics_341,x:256.4,y:314.9}).wait(1).to({graphics:mask_2_graphics_342,x:257.2,y:313.9}).wait(1).to({graphics:mask_2_graphics_343,x:257.9,y:312.9}).wait(1).to({graphics:mask_2_graphics_344,x:258.6,y:311.9}).wait(1).to({graphics:mask_2_graphics_345,x:259.4,y:311}).wait(1).to({graphics:mask_2_graphics_346,x:260.1,y:310}).wait(1).to({graphics:mask_2_graphics_347,x:260.8,y:309}).wait(1).to({graphics:mask_2_graphics_348,x:261.6,y:308}).wait(1).to({graphics:mask_2_graphics_349,x:262.3,y:307}).wait(1).to({graphics:mask_2_graphics_350,x:263.1,y:306}).wait(1).to({graphics:mask_2_graphics_351,x:263.8,y:305}).wait(1).to({graphics:mask_2_graphics_352,x:264.5,y:304}).wait(1).to({graphics:mask_2_graphics_353,x:265.3,y:303}).wait(1).to({graphics:mask_2_graphics_354,x:266,y:302}).wait(1).to({graphics:mask_2_graphics_355,x:266.8,y:301}).wait(1).to({graphics:mask_2_graphics_356,x:267.5,y:300.1}).wait(1).to({graphics:mask_2_graphics_357,x:268.2,y:299.1}).wait(1).to({graphics:mask_2_graphics_358,x:269,y:298.1}).wait(1).to({graphics:mask_2_graphics_359,x:269.7,y:297.1}).wait(1).to({graphics:mask_2_graphics_360,x:270.4,y:296.1}).wait(1).to({graphics:mask_2_graphics_361,x:271.2,y:295.1}).wait(1).to({graphics:mask_2_graphics_362,x:271.9,y:294.1}).wait(1).to({graphics:mask_2_graphics_363,x:272.7,y:293.1}).wait(1).to({graphics:mask_2_graphics_364,x:273.4,y:292.1}).wait(1).to({graphics:mask_2_graphics_365,x:203,y:225.8}).wait(1).to({graphics:mask_2_graphics_366,x:276.6,y:288}).wait(1).to({graphics:mask_2_graphics_367,x:207.8,y:225.7}).wait(344));

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(20,1,1).p("Av5U6QFwgiG+o1QG+o0EaonQEaonBbixQBbixAdg4");
	this.shape_3.setTransform(275,274.8);
	this.shape_3._off = true;

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(230).to({_off:false},0).wait(481));

	// Layer 11
	this.instance_2 = new lib.ar4("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(173.2,83.8,1,1,0,-148,32,0.1,0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(702));

	// Layer 9 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_198 = new cjs.Graphics().p("Anxb7MATtgkDIIOEgMgTtAkDg");
	var mask_3_graphics_199 = new cjs.Graphics().p("AuIPvMAR1ggoICKjWID7CJIAKAGIENCTIgGAPMgRsAgVIiMDZg");
	var mask_3_graphics_200 = new cjs.Graphics().p("AuUPrMASAgg5ICTjAID8CKIAJAHIEQCUIgFAPMgR2AgmIiUDDg");
	var mask_3_graphics_201 = new cjs.Graphics().p("AufPoMASKghLICciqID+CMIAIAHIESCVIgDAPMgSAAg4IieCsg");
	var mask_3_graphics_202 = new cjs.Graphics().p("AuqPlMASUgheICkiSIEBCMIAHAHIEVCYIgDANMgSKAhKIilCVg");
	var mask_3_graphics_203 = new cjs.Graphics().p("Au0PhMASeghvICsh8IEDCNIAFAJIEXCYIAAANMgSUAhcIivB+g");
	var mask_3_graphics_204 = new cjs.Graphics().p("AvAPeMASpgiBIC0hmIEFCPIAFAIIEZCaIABANMgSeAhtIi3Bog");
	var mask_3_graphics_205 = new cjs.Graphics().p("AvMPaMASzgiTIC8hOIEICPIADAJIEcCbIADAMMgSpAiAIi/BQg");
	var mask_3_graphics_206 = new cjs.Graphics().p("AvYPXMAS9gilIDFg4IEKCQIADAKIEeCcIADAMMgSyAiSIjIA5g");
	var mask_3_graphics_207 = new cjs.Graphics().p("AvjPTMATHgi3IDNghIEMCSIABAKIEhCdIAFAMMgS8AiiIjRAjg");
	var mask_3_graphics_208 = new cjs.Graphics().p("AvvPQMATSgjJIDVgKIEOCSIAAALIEkCeIAGAMMgTGAi0IjaAMg");
	var mask_3_graphics_209 = new cjs.Graphics().p("Am3UDIpEk2MATcgjaIDeAMIEQCUIgBAKIElCgIAJALMgTRAjHg");
	var mask_3_graphics_210 = new cjs.Graphics().p("Am+UCIpJk4MATmgjtIDnAjIESCVIgCALIEoChIAKALMgTbAjYg");
	var mask_3_graphics_211 = new cjs.Graphics().p("AnFUBIpNk7MATwgj+IDvA5IEUCWIgDAMIEqCiIALAKMgTkAjqg");
	var mask_3_graphics_212 = new cjs.Graphics().p("AnLT/IpTk8MAT6gkQID4BQIEWCXIgEAMIEtCjIAMAKMgTuAj8g");
	var mask_3_graphics_213 = new cjs.Graphics().p("AnTT+IpXk/MAUEgkiIEABmIEZCZIgFANIEuCkIAPAKMgT5AkNg");
	var mask_3_graphics_214 = new cjs.Graphics().p("AnaT9IpclBMAUPgk0IEIB9IEbCZIgGANIFBCwMgUDAkeg");
	var mask_3_graphics_215 = new cjs.Graphics().p("ArkbCMAUaglGIItEuIgHANIFECxMgUOAkwg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(198).to({graphics:mask_3_graphics_198,x:129,y:207.5}).wait(1).to({graphics:mask_3_graphics_199,x:169.2,y:285.9}).wait(1).to({graphics:mask_3_graphics_200,x:169.8,y:286.7}).wait(1).to({graphics:mask_3_graphics_201,x:170.4,y:287.4}).wait(1).to({graphics:mask_3_graphics_202,x:170.9,y:288.2}).wait(1).to({graphics:mask_3_graphics_203,x:171.5,y:288.9}).wait(1).to({graphics:mask_3_graphics_204,x:172.1,y:289.6}).wait(1).to({graphics:mask_3_graphics_205,x:172.7,y:290.4}).wait(1).to({graphics:mask_3_graphics_206,x:173.4,y:291.1}).wait(1).to({graphics:mask_3_graphics_207,x:174,y:291.9}).wait(1).to({graphics:mask_3_graphics_208,x:174.6,y:292.6}).wait(1).to({graphics:mask_3_graphics_209,x:175.3,y:293.3}).wait(1).to({graphics:mask_3_graphics_210,x:175.9,y:294}).wait(1).to({graphics:mask_3_graphics_211,x:176.5,y:294.8}).wait(1).to({graphics:mask_3_graphics_212,x:177.2,y:295.5}).wait(1).to({graphics:mask_3_graphics_213,x:177.8,y:296.3}).wait(1).to({graphics:mask_3_graphics_214,x:178.4,y:297}).wait(1).to({graphics:mask_3_graphics_215,x:144,y:220}).wait(496));

	// Layer 23
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(20,1,1).p("AoNxHQC5jJEpgqQEVgDCSCVQAcAdAYAjQCPDVhKD+QgMAngQAoQgKAZgKAYQgiBPgfBIQgCAFgCAEQhKCkhFCFQhxDViTECQiVEBhtEdQhUDcBdBiQAbAdArASQCBA3CBgb");
	this.shape_4.setTransform(169.2,274.7);
	this.shape_4._off = true;

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(198).to({_off:false},0).wait(513));

	// Layer 4 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_110 = new cjs.Graphics().p("AnZEgIGlsCIIOEgIlzKlg");
	var mask_4_graphics_111 = new cjs.Graphics().p("AndEoIGusTIINEgIl8K2g");
	var mask_4_graphics_112 = new cjs.Graphics().p("AniEvIG3siIIOEfImGLIg");
	var mask_4_graphics_113 = new cjs.Graphics().p("AnmE3IHAszIINEgImPLZg");
	var mask_4_graphics_114 = new cjs.Graphics().p("AnrE+IHJtDIIOEgImZLqg");
	var mask_4_graphics_115 = new cjs.Graphics().p("AnvFGIHStTIINEfImiL8g");
	var mask_4_graphics_116 = new cjs.Graphics().p("An0FOIHbtkIIOEgImsMNg");
	var mask_4_graphics_117 = new cjs.Graphics().p("An4FWIHkt1IINEgIm1Meg");
	var mask_4_graphics_118 = new cjs.Graphics().p("An9FdIHtuEIIOEfIm/Mwg");
	var mask_4_graphics_119 = new cjs.Graphics().p("AoBFlIH2uVIINEgInINBg");
	var mask_4_graphics_120 = new cjs.Graphics().p("AoGFtIH/umIIOEgInSNTg");
	var mask_4_graphics_121 = new cjs.Graphics().p("AoKF1IIIu3IINEgInbNlg");
	var mask_4_graphics_122 = new cjs.Graphics().p("AoOF8IIPvGIIPEgInlN1g");
	var mask_4_graphics_123 = new cjs.Graphics().p("AoTGEIIZvXIIOEgInuOHg");
	var mask_4_graphics_124 = new cjs.Graphics().p("AoXGLIIhvnIIPEgIn4OZg");
	var mask_4_graphics_125 = new cjs.Graphics().p("AocGTIIrv3IIOEfIoBOqg");
	var mask_4_graphics_126 = new cjs.Graphics().p("AogGbIIzwIIIPEgIoLO7g");
	var mask_4_graphics_127 = new cjs.Graphics().p("AolGjII9wZIIOEgIoUPMg");
	var mask_4_graphics_128 = new cjs.Graphics().p("AopGqIJFwoIIPEfIoePeg");
	var mask_4_graphics_129 = new cjs.Graphics().p("AouGyIJPw5IIOEgIonPvg");
	var mask_4_graphics_130 = new cjs.Graphics().p("AoyG6IJXxKIIPEgIoxQBg");
	var mask_4_graphics_131 = new cjs.Graphics().p("Ao3HCIJhxaIIOEfIo5QSg");
	var mask_4_graphics_132 = new cjs.Graphics().p("Ao7HJIJpxqIIPEgIpEQjg");
	var mask_4_graphics_133 = new cjs.Graphics().p("ApAHRIJzx7IIOEgIpMQ1g");
	var mask_4_graphics_134 = new cjs.Graphics().p("ApEHZIJ7yMIIPEgIpXRHg");
	var mask_4_graphics_135 = new cjs.Graphics().p("ApJHhIKFycIIOEgIpfRXg");
	var mask_4_graphics_136 = new cjs.Graphics().p("ApNHoIKNysIIPEgIpqRpg");
	var mask_4_graphics_137 = new cjs.Graphics().p("ApSHwIKXy9IIOEgIpyR7g");
	var mask_4_graphics_138 = new cjs.Graphics().p("ApWH4IKfzNIIPEfIp9SMg");
	var mask_4_graphics_139 = new cjs.Graphics().p("ApbH/IKpzdIIOEgIqGSdg");
	var mask_4_graphics_140 = new cjs.Graphics().p("ApfIHIKxzuIIPEgIqPSug");
	var mask_4_graphics_141 = new cjs.Graphics().p("ApkIPIK6z+IIPEfIqZTAg");
	var mask_4_graphics_142 = new cjs.Graphics().p("ApoIXILD0PIIOEgIqiTRg");
	var mask_4_graphics_143 = new cjs.Graphics().p("AptIeILM0fIIPEgIqsTjg");
	var mask_4_graphics_144 = new cjs.Graphics().p("ApxImILV0wIIOEgIq1T0g");
	var mask_4_graphics_145 = new cjs.Graphics().p("Ap2ItILe0/IIPEgIq/UFg");
	var mask_4_graphics_146 = new cjs.Graphics().p("Ap6I1ILn1QIIOEgIrIUXg");
	var mask_4_graphics_147 = new cjs.Graphics().p("Ap/I9ILw1hIIPEgIrSUpg");
	var mask_4_graphics_148 = new cjs.Graphics().p("AqDJFIL51xIIOEfIrbU6g");
	var mask_4_graphics_149 = new cjs.Graphics().p("AqIJMIMC2BIIPEgIrlVLg");
	var mask_4_graphics_150 = new cjs.Graphics().p("AqMJUIML2SIIOEgIruVdg");
	var mask_4_graphics_151 = new cjs.Graphics().p("AqRJcIMU2iIIPEfIr4Vug");
	var mask_4_graphics_152 = new cjs.Graphics().p("AqVJkIMd2zIIOEgIsBV/g");
	var mask_4_graphics_153 = new cjs.Graphics().p("AqaJrIMm3DIIPEgIsLWRg");
	var mask_4_graphics_154 = new cjs.Graphics().p("AqeJzIMv3TIIOEfIsUWig");
	var mask_4_graphics_155 = new cjs.Graphics().p("AqjJ6IM43jIIPEgIseWzg");
	var mask_4_graphics_156 = new cjs.Graphics().p("AqnKCINB30IIOEgIsnXFg");
	var mask_4_graphics_157 = new cjs.Graphics().p("AqsKKINK4FIIPEgIsxXWg");
	var mask_4_graphics_158 = new cjs.Graphics().p("AqwKSINT4VIIOEgIs6Xng");
	var mask_4_graphics_159 = new cjs.Graphics().p("Aq1KZINc4lIIPEgItEX5g");
	var mask_4_graphics_160 = new cjs.Graphics().p("Aq5KhINl42IIOEgItNYKg");
	var mask_4_graphics_161 = new cjs.Graphics().p("Aq+KpINu5GIIPEfItXYcg");
	var mask_4_graphics_162 = new cjs.Graphics().p("ArCKwIN35WIIOEgItgYtg");
	var mask_4_graphics_163 = new cjs.Graphics().p("ArGK4IN/5nIIPEgItqY/g");
	var mask_4_graphics_164 = new cjs.Graphics().p("ArLLAIOJ53IIOEfItzZQg");
	var mask_4_graphics_165 = new cjs.Graphics().p("ArPLIIOR6IIIPEgIt9Zhg");
	var mask_4_graphics_166 = new cjs.Graphics().p("ArULPIOb6YIIOEgIuGZzg");
	var mask_4_graphics_167 = new cjs.Graphics().p("ArYLXIOj6pIIPEgIuQaFg");
	var mask_4_graphics_168 = new cjs.Graphics().p("ArdLfIOt65IIOEgIuZaVg");
	var mask_4_graphics_169 = new cjs.Graphics().p("ArhLmIO17JIIPEgIujang");
	var mask_4_graphics_170 = new cjs.Graphics().p("ArmLuIO/7aIIOEgIusa4g");
	var mask_4_graphics_171 = new cjs.Graphics().p("ArqL2IPH7qIIPEfIu2bKg");
	var mask_4_graphics_172 = new cjs.Graphics().p("ArvL+IPR77IIOEgIu/bbg");
	var mask_4_graphics_173 = new cjs.Graphics().p("ArzMGIPZ8MIIPEgIvKbsg");
	var mask_4_graphics_174 = new cjs.Graphics().p("Ar4MNIPj8bIIOEfIvTb+g");
	var mask_4_graphics_175 = new cjs.Graphics().p("Ar8MVIPr8sIIPEgIvccPg");
	var mask_4_graphics_176 = new cjs.Graphics().p("AsBMcIP188IIOEgIvmcgg");
	var mask_4_graphics_177 = new cjs.Graphics().p("AsFMkIP99MIIPEfIvvcyg");
	var mask_4_graphics_178 = new cjs.Graphics().p("AsKMsIQH9dIIOEgIv5dDg");
	var mask_4_graphics_179 = new cjs.Graphics().p("AsOM0IQP9uIIPEgIwCdVg");
	var mask_4_graphics_180 = new cjs.Graphics().p("AsTM7IQZ9+IIOEgIwMdng");
	var mask_4_graphics_181 = new cjs.Graphics().p("AsXNDIQh+OIIPEgIwVd3g");
	var mask_4_graphics_182 = new cjs.Graphics().p("AscNLIQq+fIIPEgIwfeJg");
	var mask_4_graphics_183 = new cjs.Graphics().p("AsgNTIQz+wIIOEgIwoebg");
	var mask_4_graphics_184 = new cjs.Graphics().p("AslNaIQ8+/IIPEfIwyesg");
	var mask_4_graphics_185 = new cjs.Graphics().p("AspNiIRF/QIIOEgIw7e9g");
	var mask_4_graphics_186 = new cjs.Graphics().p("AsuNpIRO/gIIPEgIxFfOg");
	var mask_4_graphics_187 = new cjs.Graphics().p("AsyNxIRX/wIIOEfIxOfgg");
	var mask_4_graphics_188 = new cjs.Graphics().p("As3N5MARgggBIIPEgIxYfxg");
	var mask_4_graphics_189 = new cjs.Graphics().p("As7OBMARpggSIIOEgMgRhAgDg");
	var mask_4_graphics_190 = new cjs.Graphics().p("AtAOIMARygghIIPEfMgRrAgUg");
	var mask_4_graphics_191 = new cjs.Graphics().p("AtEOQMAR7ggyIIOEgMgR0Aglg");
	var mask_4_graphics_192 = new cjs.Graphics().p("AtJOYMASEghDIIPEgMgR+Ag3g");
	var mask_4_graphics_193 = new cjs.Graphics().p("AtROnMASVghjIIPEgMgSQAhZg");
	var mask_4_graphics_194 = new cjs.Graphics().p("AtaO2MASngiDIIOEgMgSiAh7g");
	var mask_4_graphics_195 = new cjs.Graphics().p("AtjPFMAS5gijIIOEgMgS1Aidg");
	var mask_4_graphics_196 = new cjs.Graphics().p("AtsPUMATKgjDIIPEgMgTIAi+g");
	var mask_4_graphics_197 = new cjs.Graphics().p("At1PjMATcgjjIIPEgMgTbAjhg");
	var mask_4_graphics_198 = new cjs.Graphics().p("Anxb7MATtgkDIIOEgMgTtAkDg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(110).to({graphics:mask_4_graphics_110,x:210.7,y:203.7}).wait(1).to({graphics:mask_4_graphics_111,x:210.3,y:204.6}).wait(1).to({graphics:mask_4_graphics_112,x:209.8,y:205.5}).wait(1).to({graphics:mask_4_graphics_113,x:209.4,y:206.3}).wait(1).to({graphics:mask_4_graphics_114,x:208.9,y:207.2}).wait(1).to({graphics:mask_4_graphics_115,x:208.5,y:208.1}).wait(1).to({graphics:mask_4_graphics_116,x:208,y:209}).wait(1).to({graphics:mask_4_graphics_117,x:207.6,y:209.8}).wait(1).to({graphics:mask_4_graphics_118,x:207.1,y:210.7}).wait(1).to({graphics:mask_4_graphics_119,x:206.7,y:211.6}).wait(1).to({graphics:mask_4_graphics_120,x:206.2,y:212.4}).wait(1).to({graphics:mask_4_graphics_121,x:205.8,y:213.3}).wait(1).to({graphics:mask_4_graphics_122,x:205.4,y:214.2}).wait(1).to({graphics:mask_4_graphics_123,x:204.9,y:215}).wait(1).to({graphics:mask_4_graphics_124,x:204.5,y:215.9}).wait(1).to({graphics:mask_4_graphics_125,x:204,y:216.8}).wait(1).to({graphics:mask_4_graphics_126,x:203.6,y:217.7}).wait(1).to({graphics:mask_4_graphics_127,x:203.1,y:218.5}).wait(1).to({graphics:mask_4_graphics_128,x:202.7,y:219.4}).wait(1).to({graphics:mask_4_graphics_129,x:202.2,y:220.3}).wait(1).to({graphics:mask_4_graphics_130,x:201.8,y:221.1}).wait(1).to({graphics:mask_4_graphics_131,x:201.3,y:222}).wait(1).to({graphics:mask_4_graphics_132,x:200.9,y:222.9}).wait(1).to({graphics:mask_4_graphics_133,x:200.4,y:223.7}).wait(1).to({graphics:mask_4_graphics_134,x:200,y:224.6}).wait(1).to({graphics:mask_4_graphics_135,x:199.5,y:225.5}).wait(1).to({graphics:mask_4_graphics_136,x:199.1,y:226.3}).wait(1).to({graphics:mask_4_graphics_137,x:198.6,y:227.2}).wait(1).to({graphics:mask_4_graphics_138,x:198.2,y:228.1}).wait(1).to({graphics:mask_4_graphics_139,x:197.7,y:229}).wait(1).to({graphics:mask_4_graphics_140,x:197.3,y:229.8}).wait(1).to({graphics:mask_4_graphics_141,x:196.8,y:230.7}).wait(1).to({graphics:mask_4_graphics_142,x:196.4,y:231.6}).wait(1).to({graphics:mask_4_graphics_143,x:195.9,y:232.4}).wait(1).to({graphics:mask_4_graphics_144,x:195.5,y:233.3}).wait(1).to({graphics:mask_4_graphics_145,x:195,y:234.2}).wait(1).to({graphics:mask_4_graphics_146,x:194.6,y:235}).wait(1).to({graphics:mask_4_graphics_147,x:194.1,y:235.9}).wait(1).to({graphics:mask_4_graphics_148,x:193.7,y:236.8}).wait(1).to({graphics:mask_4_graphics_149,x:193.2,y:237.6}).wait(1).to({graphics:mask_4_graphics_150,x:192.8,y:238.5}).wait(1).to({graphics:mask_4_graphics_151,x:192.3,y:239.4}).wait(1).to({graphics:mask_4_graphics_152,x:191.9,y:240.3}).wait(1).to({graphics:mask_4_graphics_153,x:191.4,y:241.1}).wait(1).to({graphics:mask_4_graphics_154,x:191,y:242}).wait(1).to({graphics:mask_4_graphics_155,x:190.5,y:242.9}).wait(1).to({graphics:mask_4_graphics_156,x:190.1,y:243.7}).wait(1).to({graphics:mask_4_graphics_157,x:189.6,y:244.6}).wait(1).to({graphics:mask_4_graphics_158,x:189.2,y:245.5}).wait(1).to({graphics:mask_4_graphics_159,x:188.7,y:246.3}).wait(1).to({graphics:mask_4_graphics_160,x:188.3,y:247.2}).wait(1).to({graphics:mask_4_graphics_161,x:187.8,y:248.1}).wait(1).to({graphics:mask_4_graphics_162,x:187.4,y:249}).wait(1).to({graphics:mask_4_graphics_163,x:187,y:249.8}).wait(1).to({graphics:mask_4_graphics_164,x:186.5,y:250.7}).wait(1).to({graphics:mask_4_graphics_165,x:186.1,y:251.6}).wait(1).to({graphics:mask_4_graphics_166,x:185.6,y:252.4}).wait(1).to({graphics:mask_4_graphics_167,x:185.2,y:253.3}).wait(1).to({graphics:mask_4_graphics_168,x:184.7,y:254.2}).wait(1).to({graphics:mask_4_graphics_169,x:184.3,y:255}).wait(1).to({graphics:mask_4_graphics_170,x:183.8,y:255.9}).wait(1).to({graphics:mask_4_graphics_171,x:183.4,y:256.8}).wait(1).to({graphics:mask_4_graphics_172,x:182.9,y:257.6}).wait(1).to({graphics:mask_4_graphics_173,x:182.5,y:258.5}).wait(1).to({graphics:mask_4_graphics_174,x:182,y:259.4}).wait(1).to({graphics:mask_4_graphics_175,x:181.6,y:260.3}).wait(1).to({graphics:mask_4_graphics_176,x:181.1,y:261.1}).wait(1).to({graphics:mask_4_graphics_177,x:180.7,y:262}).wait(1).to({graphics:mask_4_graphics_178,x:180.2,y:262.9}).wait(1).to({graphics:mask_4_graphics_179,x:179.8,y:263.7}).wait(1).to({graphics:mask_4_graphics_180,x:179.3,y:264.6}).wait(1).to({graphics:mask_4_graphics_181,x:178.9,y:265.5}).wait(1).to({graphics:mask_4_graphics_182,x:178.4,y:266.3}).wait(1).to({graphics:mask_4_graphics_183,x:178,y:267.2}).wait(1).to({graphics:mask_4_graphics_184,x:177.5,y:268.1}).wait(1).to({graphics:mask_4_graphics_185,x:177.1,y:269}).wait(1).to({graphics:mask_4_graphics_186,x:176.6,y:269.8}).wait(1).to({graphics:mask_4_graphics_187,x:176.2,y:270.7}).wait(1).to({graphics:mask_4_graphics_188,x:175.7,y:271.6}).wait(1).to({graphics:mask_4_graphics_189,x:175.3,y:272.4}).wait(1).to({graphics:mask_4_graphics_190,x:174.8,y:273.3}).wait(1).to({graphics:mask_4_graphics_191,x:174.4,y:274.2}).wait(1).to({graphics:mask_4_graphics_192,x:173.9,y:275}).wait(1).to({graphics:mask_4_graphics_193,x:173.1,y:276.7}).wait(1).to({graphics:mask_4_graphics_194,x:172.2,y:278.4}).wait(1).to({graphics:mask_4_graphics_195,x:171.3,y:280.1}).wait(1).to({graphics:mask_4_graphics_196,x:170.4,y:281.8}).wait(1).to({graphics:mask_4_graphics_197,x:169.6,y:283.5}).wait(1).to({graphics:mask_4_graphics_198,x:129,y:207.5}).wait(513));

	// Layer 23
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(20,1,1).p("AoNxHQC5jJEpgqQEVgDCSCVQAcAdAYAjQCPDVhKD+QgMAngQAoQgKAZgKAYQgiBPgfBIQgCAFgCAEQhKCkhFCFQhxDViTECQiVEBhtEdQhUDcBdBiQAbAdArASQCBA3CBgb");
	this.shape_5.setTransform(169.2,274.7);
	this.shape_5._off = true;

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(110).to({_off:false},0).wait(601));

	// Layer 1 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_9 = new cjs.Graphics().p("AB2Z4QnDiijNmyQjOmyCinEQCem7GkjOMAPfAgvQjqBrjwAAQjEAAjHhHg");
	var mask_5_graphics_10 = new cjs.Graphics().p("ABrZwQnAisjEm3QjFm2CsnBQCom3GmjFMAO0AhEQjiBhjkAAQjOAAjRhPg");
	var mask_5_graphics_11 = new cjs.Graphics().p("ABfZmQm8i1i7m6Qi6m7C0m9QCymzGqi8MAOGAhXQjYBYjYAAQjaAAjbhZg");
	var mask_5_graphics_12 = new cjs.Graphics().p("ABUZdQm4i/ixm+Qiym/C/m5QC6mvGvizMANYAhqQjOBPjOAAQjlAAjkhig");
	var mask_5_graphics_13 = new cjs.Graphics().p("ABJZTQm0jIinnCQionDDHm0QDEmrGziqMAMqAh8QjFBGjCAAQjxAAjthsg");
	var mask_5_graphics_14 = new cjs.Graphics().p("AA/ZIQmwjRienGQienFDRmxQDNmmG2ihMAL7AiNQi6A+i3AAQj8AAj2h3g");
	var mask_5_graphics_15 = new cjs.Graphics().p("AA0Y9QmqjaiVnJQiUnJDamsQDWmiG5iXMALMAicQivA3isAAQkIAAj/iCg");
	var mask_5_graphics_16 = new cjs.Graphics().p("AAqYyQmmjkiKnMQiLnMDjmmQDfmeG8iOMAKdAirQikAwigAAQkVAAkHiNg");
	var mask_5_graphics_17 = new cjs.Graphics().p("AAhYmQmhjtiBnOQiBnPDsmhQDomaG/iEMAJuAi5QiaAoiVAAQkhAAkOiYg");
	var mask_5_graphics_18 = new cjs.Graphics().p("AAYYaQmcj2h3nRQh3nRD1mcQDwmVHCh6MAI+AjFQiPAiiJAAQktAAkWikg");
	var mask_5_graphics_19 = new cjs.Graphics().p("AAPYNQmXj+htnUQhtnUD+mWQD5mQHEhxMAIOAjSQiDAch+AAQk6AAkdixg");
	var mask_5_graphics_20 = new cjs.Graphics().p("AAGYAQmRkHhjnWQhjnWEHmRQEBmKHHhnMAHdAjcQh3AXhzAAQlHAAkki+g");
	var mask_5_graphics_21 = new cjs.Graphics().p("AgBXyQmNkPhYnYQhZnYEPmLQEJmFHJhdMAGtAjlQhrAThnAAQlVAAkpjMg");
	var mask_5_graphics_22 = new cjs.Graphics().p("AgJXkQmHkYhOnZQhPnaEXmFQESl/HLhUMAF7AjuQheAPhbAAQljAAkvjag");
	var mask_5_graphics_23 = new cjs.Graphics().p("AgRXWQmAkghFncQhEnbEfl/QEZl5HOhKMAFKAj2QhRAKhPAAQlxAAk2jng");
	var mask_5_graphics_24 = new cjs.Graphics().p("AgYXHQl6kog6ndQg7ndEol5QEhlyHPhAMAEZAj8QhFAHhCAAQmAAAk7j2g");
	var mask_5_graphics_25 = new cjs.Graphics().p("AgfW3Ql0kwgwndQgwneEwlzQEolsHRg2MADoAkBQg4AFg2AAQmPAAlAkGg");
	var mask_5_graphics_26 = new cjs.Graphics().p("AglWoQltk4gmnfQgmnfE3lsQExlmHRgrMAC3AkFQgrADgpAAQmfAAlEkVg");
	var mask_5_graphics_27 = new cjs.Graphics().p("AgsWXQlmk/gcnfQgbngE/llQE4lfHSgiMACFAkJIg4ABQmwAAlJkmg");
	var mask_5_graphics_28 = new cjs.Graphics().p("AgxWHQlglHgRngQgSngFHleQE/lZHTgYMABUAkLIgdABQnBAAlMk2g");
	var mask_5_graphics_29 = new cjs.Graphics().p("Ag3V2QlYlPgHngQgHngFOlXQFGlSHTgOMAAjAkNIgBAAQnTAAlQlHg");
	var mask_5_graphics_30 = new cjs.Graphics().p("AhDVlQlRlWADngQADngFVlQQFOlLHTgEMgAPAkMQnTgJlJlOg");
	var mask_5_graphics_31 = new cjs.Graphics().p("AhhVTQlJldANngQANnfFdlJQFVlDHTAGMgBBAkLQnSgTlDlWg");
	var mask_5_graphics_32 = new cjs.Graphics().p("Ah+VCQlClkAYngQAXnfFklBQFbk8HTAQMgByAkJQnSgdk7lcg");
	var mask_5_graphics_33 = new cjs.Graphics().p("AiaUwQk7lqAinfQAinfFqk5QFik1HTAaMgCkAkGQnRgnkzljg");
	var mask_5_graphics_34 = new cjs.Graphics().p("Ai3UfQkylyAsneQAsndFxkyQFoktHSAkMgDUAkCQnRgxkslpg");
	var mask_5_graphics_35 = new cjs.Graphics().p("AjSUNQkrl4A2ndQA2ncF4kqQFvklHRAuMgEGAj9QnPg8kklvg");
	var mask_5_graphics_36 = new cjs.Graphics().p("AjuT7Qkil+BAnbQBBnbF9kjQF1kdHQA4MgE3Aj3QnOhFkcl2g");
	var mask_5_graphics_37 = new cjs.Graphics().p("AkJTpQkamEBLnaQBKnZGEkaQF7kVHOBBMgFnAjwQnNhPkUl8g");
	var mask_5_graphics_38 = new cjs.Graphics().p("AkjTXQkSmKBVnYQBUnXGKkSQGBkNHNBLMgGZAjoQnJhZkNmCg");
	var mask_5_graphics_39 = new cjs.Graphics().p("Ak9TGQkJmQBenXQBfnVGOkKQGIkEHLBVMgHJAjeQnIhikEmHg");
	var mask_5_graphics_40 = new cjs.Graphics().p("AlXS0QkAmWBonUQBpnTGUkBQGNj8HJBfMgH5AjTQnFhsj9mMg");
	var mask_5_graphics_41 = new cjs.Graphics().p("AlvSiQj5mbBznSQBznRGZj4QGSjzHHBoMgIpAjIQnDh1jzmSg");
	var mask_5_graphics_42 = new cjs.Graphics().p("AmISPQjvmgB8nPQB9nOGejwQGYjqHEByMgJZAi8QnAiAjrmXg");
	var mask_5_graphics_43 = new cjs.Graphics().p("AmeR/QjnmkCGnNQCFnMGjjnQGcjjHCB7MgKEAiwQm+iIjjmcg");
	var mask_5_graphics_44 = new cjs.Graphics().p("AmzRvQjfmpCOnKQCPnJGnjgQGgjaHACDMgKvAijQm7iQjbmgg");
	var mask_5_graphics_45 = new cjs.Graphics().p("AnIRfQjXmtCYnIQCXnGGrjXQGljTG9CNMgLaAiVQm4iZjTmkg");
	var mask_5_graphics_46 = new cjs.Graphics().p("AncROQjPmxCgnEQCgnDGwjPQGojLG7CVMgMEAiHQm1iijLmog");
	var mask_5_graphics_47 = new cjs.Graphics().p("AnwQ+QjGm1ConBQCpnAG0jHQGsjCG3CeMgMuAh3QmxiqjDmsg");
	var mask_5_graphics_48 = new cjs.Graphics().p("AoEQuQi9m5Cxm+QCxm9G4i9QGvi7G1CmMgNYAhoQmuizi7mvg");
	var mask_5_graphics_49 = new cjs.Graphics().p("AoWQeQi2m9C6m6QC6m5G7i2QGzixGxCuMgOBAhWQmqi6iymzg");
	var mask_5_graphics_50 = new cjs.Graphics().p("AopQOQisnADCm3QDCm2G+isQG3iqGuC3MgOqAhFQmnjDiqm2g");
	var mask_5_graphics_51 = new cjs.Graphics().p("Ao7P+QiknDDLmzQDLmyHBikQG6ihGqC/MgPSAgyQmkjLihm5g");
	var mask_5_graphics_52 = new cjs.Graphics().p("ApMPuQicnHDTmuQDUmuHEicQG9iYGmDHMgP6AgfQmgjTiYm8g");
	var mask_5_graphics_53 = new cjs.Graphics().p("ApePeQiSnJDbmrQDcmqHHiTQHAiPGjDPMgQiAgLQmdjbiQm/g");
	var mask_5_graphics_54 = new cjs.Graphics().p("ApuPOQiKnMDkmnQDkmlHKiKQHCiHGfDXIxKf3QmYjjiHnCg");
	var mask_5_graphics_55 = new cjs.Graphics().p("Ap+O+QiBnPDsmiQDsmhHMiAQHFh/GbDfIxxfhQmTjrh/nEg");
	var mask_5_graphics_56 = new cjs.Graphics().p("AqOOuQh3nRDzmdQD0mcHPh4QHIh2GVDnIyXfLQmPjzh2nHg");
	var mask_5_graphics_57 = new cjs.Graphics().p("AqcOeQhvnTD7mYQD8mYHRhvQHKhtGRDvIy9e0QmKj7htnJg");
	var mask_5_graphics_58 = new cjs.Graphics().p("AqrOPQhmnVEEmUQEDmTHUhmQHLhkGND3IzjecQmGkChknLg");
	var mask_5_graphics_59 = new cjs.Graphics().p("Aq5N/QhcnXELmOQELmOHVhdQHOhbGHD+I0IeDQmAkJhcnNg");
	var mask_5_graphics_60 = new cjs.Graphics().p("ArGNwQhUnZETmJQETmJHXhTQHPhTGDEGI0udqQl7kRhSnOg");
	var mask_5_graphics_61 = new cjs.Graphics().p("ArTNgQhKnaEamEQEamDHZhKQHQhKF+ENI1SdQQl1kYhKnQg");
	var mask_5_graphics_62 = new cjs.Graphics().p("ArfNRQhCnbEil+QEil+HahCQHShAF4EUI11c2QlxkfhAnSg");
	var mask_5_graphics_63 = new cjs.Graphics().p("ArrNCQg4ndEpl3QEpl5Hbg5QHTg3FzEbI2ZcbQlqkmg4nTg");
	var mask_5_graphics_64 = new cjs.Graphics().p("Ar2MzQgvneEwlyQExlzHcgvQHUguFtEiI28b/QllktgunUg");
	var mask_5_graphics_65 = new cjs.Graphics().p("AsBMkQglneE3lsQE3luHdgmQHVglFoEqI3ebhQlfk0gmnUg");
	var mask_5_graphics_66 = new cjs.Graphics().p("AsLMVQgcnfE+lmQE+lnHegdQHWgcFiExI4AbEQlZk7gdnVg");
	var mask_5_graphics_67 = new cjs.Graphics().p("AsUMHQgTngFFlgQFFlhHegTQHWgTFcE3I4hamQlTlBgTnVg");
	var mask_5_graphics_68 = new cjs.Graphics().p("AsdL4QgKngFMlZQFMlbHegKQHWgKFWE+I5BaIQlNlIgKnWg");
	var mask_5_graphics_69 = new cjs.Graphics().p("AslLqQgBngFSlTQFTlUHegBQHXgBFQFEI5iZpQlGlOgBnWg");
	var mask_5_graphics_70 = new cjs.Graphics().p("AstLcQAIngFZlNQFZlNHfAIQHWAIFKFLI6BZJQlAlUAInWg");
	var mask_5_graphics_71 = new cjs.Graphics().p("As0LOQARngFglGQFflGHeARQHWARFEFRI6gYpQk5lbARnVg");
	var mask_5_graphics_72 = new cjs.Graphics().p("As7LAQAbnfFmk/QFllAHeAaQHWAbE8FXI69YHQkzlgAanVg");
	var mask_5_graphics_73 = new cjs.Graphics().p("AtBKyQAkneFsk4QFsk5HdAjQHVAkE2FcI7bXnQkslmAjnVg");
	var mask_5_graphics_74 = new cjs.Graphics().p("AtGKkQAtndFykxQFykyHcAtQHUAsEvFjI74XEQkklsAsnUg");
	var mask_5_graphics_75 = new cjs.Graphics().p("AtLKXQA3ndF3kpQF4krHbA2QHTA1EoFpI8TWiQkelyA1nTg");
	var mask_5_graphics_76 = new cjs.Graphics().p("AtPKKQA/ncF+kiQF9kkHaBAQHSA+EiFuI8wV/QkWl3A+nSg");
	var mask_5_graphics_77 = new cjs.Graphics().p("AtTJ9QBJnaGDkbQGDkcHZBIQHQBHEaF0I9KVbQkPl8BHnRg");
	var mask_5_graphics_78 = new cjs.Graphics().p("AtWJwQBSnZGIkTQGIkVHYBSQHPBQETF5I9kU3QkImCBQnPg");
	var mask_5_graphics_79 = new cjs.Graphics().p("AtYJkQBbnYGNkMQGNkMHXBaQHNBaEMF9I9+USQkAmGBZnNg");
	var mask_5_graphics_80 = new cjs.Graphics().p("AtaJXQBknVGTkEQGRkGHVBkQHMBiEEGDI+WTtQj5mLBinMg");
	var mask_5_graphics_81 = new cjs.Graphics().p("AtcJLQBunTGXj9QGXj9HTBtQHKBrD8GHI+uTIQjxmQBqnKg");
	var mask_5_graphics_82 = new cjs.Graphics().p("AtcI/QB2nRGcj1QGcj1HRB2QHIBzD0GNI/FShQjpmUBznIg");
	var mask_5_graphics_83 = new cjs.Graphics().p("AtcIzQB/nPGhjsQGgjuHPB/QHFB9DtGRI/cR6QjhmZB8nFg");
	var mask_5_graphics_84 = new cjs.Graphics().p("AtcIoQCInMGmjlQGkjlHMCHQHDCGDmGVI/yRUQjamdCFnDg");
	var mask_5_graphics_85 = new cjs.Graphics().p("AtaIVQCXnIGtjWQGrjYHICWQG+CTDZGdMggUAQSQjNmjCTm/g");
	var mask_5_graphics_86 = new cjs.Graphics().p("AtWIDQClnCGzjKQGzjKHCClQG6ChDLGkMgg0APQQi/mqChm6g");
	var mask_5_graphics_87 = new cjs.Graphics().p("AtRHyQC0m9G5i8QG5i8G9CzQG0CuC+GrMghSAONQiymwCvm0g");
	var mask_5_graphics_88 = new cjs.Graphics().p("AtKHhQDCm3G/itQG+ivG3DBQGvC8CwGxMghuANJQijm1C8mvg");
	var mask_5_graphics_89 = new cjs.Graphics().p("AtBHRQDPmxHFifQHDigGxDPQGpDKCiG2MgiIAMEQiVm6DKmpg");
	var mask_5_graphics_90 = new cjs.Graphics().p("As3HCQDdmqHJiRQHJiRGqDcQGiDXCUG7MgifAK/QiHm/DXmig");
	var mask_5_graphics_91 = new cjs.Graphics().p("AsrGzQDqmjHOiCQHNiDGjDqQGbDkCGHAMgi1AJ4Qh5nDDlmbg");
	var mask_5_graphics_92 = new cjs.Graphics().p("AseGlQD4mbHShzQHQh1GcD2QGTDzB4HDMgjIAIxQhqnGDxmUg");
	var mask_5_graphics_93 = new cjs.Graphics().p("AsPGYQEFmTHVhlQHUhlGTEDQGMD/BpHHMgjYAHqQhcnKD+mMg");
	var mask_5_graphics_94 = new cjs.Graphics().p("Ar+GMQERmLHYhWQHXhWGLEPQGDEMBbHKMgjmAGiQhOnNELmDg");
	var mask_5_graphics_95 = new cjs.Graphics().p("ArsGAQEdmBHahHQHbhIGCEcQF6EYBNHNMgjzAFZQg/nPEXl7g");
	var mask_5_graphics_96 = new cjs.Graphics().p("ArZF1QEql4Hcg4QHcg4F5EoQFyEjA+HPMgj9AERQgxnREjlyg");
	var mask_5_graphics_97 = new cjs.Graphics().p("ArEFrQE2luHdgpQHegpFwEzQFoEvAvHRMgkFADHQghnSEulog");
	var mask_5_graphics_98 = new cjs.Graphics().p("AqtFiQFBlkHegaQHggaFlE/QFeE6AhHSMgkKAB+QgTnTE6leg");
	var mask_5_graphics_99 = new cjs.Graphics().p("AqVFZQFMlZHfgLQHggLFbFKQFUFGASHTMgkNAA0QgEnTFFlVg");
	var mask_5_graphics_100 = new cjs.Graphics().p("AvWRkQAKnTFQlKQFXlPHfAEQHgAEFRFWQFJFQADHTg");
	var mask_5_graphics_101 = new cjs.Graphics().p("AvVQtQAanSFZlAQFilEHfAUQHgAUFFFgQE/FagMHTg");
	var mask_5_graphics_102 = new cjs.Graphics().p("AvSP2QAonRFkk0QFrk5HeAjQHfAjE6FqQE0FkgbHSg");
	var mask_5_graphics_103 = new cjs.Graphics().p("AvPO/QA3nQFukoQF1ktHdAyQHdAyEvF0QEoFtgqHSg");
	var mask_5_graphics_104 = new cjs.Graphics().p("AvKOJQBGnOF2kdQF/khHbBBQHcBBEiF9QEdF3g5HQg");
	var mask_5_graphics_105 = new cjs.Graphics().p("AvENTQBUnMGAkRQGHkVHZBQQHaBQEWGHQEQGAhHHOg");
	var mask_5_graphics_106 = new cjs.Graphics().p("Au9McQBjnIGIkFQGQkIHWBfQHXBeEJGQQEFGJhWHLg");
	var mask_5_graphics_107 = new cjs.Graphics().p("Au1LnQBxnGGQj4QGZj7HTBuQHTBtD9GYQD4GRhlHIg");
	var mask_5_graphics_108 = new cjs.Graphics().p("AusKxQCAnBGYjrQGfjvHQB9QHQB8DwGgQDrGYhzHFg");
	var mask_5_graphics_109 = new cjs.Graphics().p("AuhJ9QCOm+GfjdQGmjiHMCMQHMCKDiGoQDeGfiBHBg");
	var mask_5_graphics_110 = new cjs.Graphics().p("AuWJIQCcm4GmjQQGujVHHCaQHHCZDVGvQDQGmiPG9g");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_5_graphics_9,x:98.7,y:172.7}).wait(1).to({graphics:mask_5_graphics_10,x:97.6,y:172.7}).wait(1).to({graphics:mask_5_graphics_11,x:96.4,y:172.7}).wait(1).to({graphics:mask_5_graphics_12,x:95.3,y:172.7}).wait(1).to({graphics:mask_5_graphics_13,x:94.1,y:172.7}).wait(1).to({graphics:mask_5_graphics_14,x:93,y:172.7}).wait(1).to({graphics:mask_5_graphics_15,x:91.8,y:172.7}).wait(1).to({graphics:mask_5_graphics_16,x:90.6,y:172.7}).wait(1).to({graphics:mask_5_graphics_17,x:89.5,y:172.6}).wait(1).to({graphics:mask_5_graphics_18,x:88.3,y:172.6}).wait(1).to({graphics:mask_5_graphics_19,x:87.1,y:172.6}).wait(1).to({graphics:mask_5_graphics_20,x:85.9,y:172.6}).wait(1).to({graphics:mask_5_graphics_21,x:84.7,y:172.6}).wait(1).to({graphics:mask_5_graphics_22,x:83.4,y:172.6}).wait(1).to({graphics:mask_5_graphics_23,x:82.2,y:172.5}).wait(1).to({graphics:mask_5_graphics_24,x:81,y:172.5}).wait(1).to({graphics:mask_5_graphics_25,x:79.8,y:172.5}).wait(1).to({graphics:mask_5_graphics_26,x:78.6,y:172.5}).wait(1).to({graphics:mask_5_graphics_27,x:77.3,y:172.5}).wait(1).to({graphics:mask_5_graphics_28,x:76.1,y:172.5}).wait(1).to({graphics:mask_5_graphics_29,x:74.9,y:172.5}).wait(1).to({graphics:mask_5_graphics_30,x:74.4,y:172.4}).wait(1).to({graphics:mask_5_graphics_31,x:75.7,y:172.4}).wait(1).to({graphics:mask_5_graphics_32,x:76.9,y:172.3}).wait(1).to({graphics:mask_5_graphics_33,x:78.2,y:172.2}).wait(1).to({graphics:mask_5_graphics_34,x:79.4,y:172.1}).wait(1).to({graphics:mask_5_graphics_35,x:80.7,y:172}).wait(1).to({graphics:mask_5_graphics_36,x:81.9,y:171.8}).wait(1).to({graphics:mask_5_graphics_37,x:83.1,y:171.6}).wait(1).to({graphics:mask_5_graphics_38,x:84.4,y:171.4}).wait(1).to({graphics:mask_5_graphics_39,x:85.6,y:171.1}).wait(1).to({graphics:mask_5_graphics_40,x:86.8,y:170.8}).wait(1).to({graphics:mask_5_graphics_41,x:88,y:170.5}).wait(1).to({graphics:mask_5_graphics_42,x:89.2,y:170.2}).wait(1).to({graphics:mask_5_graphics_43,x:90.3,y:169.9}).wait(1).to({graphics:mask_5_graphics_44,x:91.4,y:169.5}).wait(1).to({graphics:mask_5_graphics_45,x:92.5,y:169.2}).wait(1).to({graphics:mask_5_graphics_46,x:93.6,y:168.8}).wait(1).to({graphics:mask_5_graphics_47,x:94.6,y:168.4}).wait(1).to({graphics:mask_5_graphics_48,x:95.7,y:168}).wait(1).to({graphics:mask_5_graphics_49,x:96.7,y:167.5}).wait(1).to({graphics:mask_5_graphics_50,x:97.8,y:167.1}).wait(1).to({graphics:mask_5_graphics_51,x:98.8,y:166.6}).wait(1).to({graphics:mask_5_graphics_52,x:99.8,y:166.1}).wait(1).to({graphics:mask_5_graphics_53,x:100.9,y:165.6}).wait(1).to({graphics:mask_5_graphics_54,x:101.9,y:165.1}).wait(1).to({graphics:mask_5_graphics_55,x:102.9,y:164.5}).wait(1).to({graphics:mask_5_graphics_56,x:103.8,y:164}).wait(1).to({graphics:mask_5_graphics_57,x:104.8,y:163.4}).wait(1).to({graphics:mask_5_graphics_58,x:105.8,y:162.8}).wait(1).to({graphics:mask_5_graphics_59,x:106.7,y:162.1}).wait(1).to({graphics:mask_5_graphics_60,x:107.7,y:161.5}).wait(1).to({graphics:mask_5_graphics_61,x:108.6,y:160.8}).wait(1).to({graphics:mask_5_graphics_62,x:109.5,y:160.2}).wait(1).to({graphics:mask_5_graphics_63,x:110.4,y:159.5}).wait(1).to({graphics:mask_5_graphics_64,x:111.3,y:158.8}).wait(1).to({graphics:mask_5_graphics_65,x:112.2,y:158}).wait(1).to({graphics:mask_5_graphics_66,x:113.1,y:157.3}).wait(1).to({graphics:mask_5_graphics_67,x:113.9,y:156.5}).wait(1).to({graphics:mask_5_graphics_68,x:114.7,y:155.8}).wait(1).to({graphics:mask_5_graphics_69,x:115.6,y:155}).wait(1).to({graphics:mask_5_graphics_70,x:116.4,y:154.2}).wait(1).to({graphics:mask_5_graphics_71,x:117.2,y:153.4}).wait(1).to({graphics:mask_5_graphics_72,x:117.9,y:152.5}).wait(1).to({graphics:mask_5_graphics_73,x:118.7,y:151.7}).wait(1).to({graphics:mask_5_graphics_74,x:119.4,y:150.8}).wait(1).to({graphics:mask_5_graphics_75,x:120.1,y:150}).wait(1).to({graphics:mask_5_graphics_76,x:120.9,y:149.1}).wait(1).to({graphics:mask_5_graphics_77,x:121.5,y:148.2}).wait(1).to({graphics:mask_5_graphics_78,x:122.2,y:147.3}).wait(1).to({graphics:mask_5_graphics_79,x:122.9,y:146.3}).wait(1).to({graphics:mask_5_graphics_80,x:123.5,y:145.4}).wait(1).to({graphics:mask_5_graphics_81,x:124.1,y:144.5}).wait(1).to({graphics:mask_5_graphics_82,x:124.7,y:143.5}).wait(1).to({graphics:mask_5_graphics_83,x:125.3,y:142.5}).wait(1).to({graphics:mask_5_graphics_84,x:125.9,y:141.6}).wait(1).to({graphics:mask_5_graphics_85,x:126.8,y:139.9}).wait(1).to({graphics:mask_5_graphics_86,x:127.6,y:138.3}).wait(1).to({graphics:mask_5_graphics_87,x:128.4,y:136.6}).wait(1).to({graphics:mask_5_graphics_88,x:129.1,y:134.9}).wait(1).to({graphics:mask_5_graphics_89,x:129.8,y:133.2}).wait(1).to({graphics:mask_5_graphics_90,x:130.4,y:131.5}).wait(1).to({graphics:mask_5_graphics_91,x:131,y:129.7}).wait(1).to({graphics:mask_5_graphics_92,x:131.5,y:127.9}).wait(1).to({graphics:mask_5_graphics_93,x:131.9,y:126.2}).wait(1).to({graphics:mask_5_graphics_94,x:132.3,y:124.4}).wait(1).to({graphics:mask_5_graphics_95,x:132.7,y:122.6}).wait(1).to({graphics:mask_5_graphics_96,x:133,y:120.8}).wait(1).to({graphics:mask_5_graphics_97,x:133.2,y:118.9}).wait(1).to({graphics:mask_5_graphics_98,x:133.4,y:117.1}).wait(1).to({graphics:mask_5_graphics_99,x:133.5,y:115.3}).wait(1).to({graphics:mask_5_graphics_100,x:133.5,y:114.5}).wait(1).to({graphics:mask_5_graphics_101,x:133.5,y:116.4}).wait(1).to({graphics:mask_5_graphics_102,x:133.5,y:118.2}).wait(1).to({graphics:mask_5_graphics_103,x:133.5,y:120.1}).wait(1).to({graphics:mask_5_graphics_104,x:133.6,y:121.9}).wait(1).to({graphics:mask_5_graphics_105,x:133.6,y:123.8}).wait(1).to({graphics:mask_5_graphics_106,x:133.6,y:125.6}).wait(1).to({graphics:mask_5_graphics_107,x:133.6,y:127.4}).wait(1).to({graphics:mask_5_graphics_108,x:133.6,y:129.2}).wait(1).to({graphics:mask_5_graphics_109,x:133.7,y:131}).wait(1).to({graphics:mask_5_graphics_110,x:133.6,y:132.8}).wait(601));

	// Layer 3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(20,1,1).p("AoNjuQC5jJEpgqQEVgDCSCVQAcAdAYAjQCPDVhKD9QgMAngQAoQgKAYgKAZQgjBTgiBN");
	this.shape_6.setTransform(169.6,188.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(20,1,1).p("AoNxHQC5jJEpgqQEVgDCSCVQAcAdAYAjQCPDVhKD+QgMAngQAoQgKAZgKAYQgiBPgfBIQgCAFgCAEQhKCkhFCFQhxDViTECQiVEBhtEdQhUDcBdBiQAbAdArASQCBA3CBgb");
	this.shape_7.setTransform(169.2,274.7);

	var maskedShapeInstanceList = [this.shape_6,this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6}]},9).to({state:[{t:this.shape_7}]},40).wait(662));

	// letter
	this.instance_3 = new lib.U("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(275,275);
	this.instance_3.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(711));

	// Background
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#F59E9E").ss(3,1,1).p("EAq+Aq+MhV7AAAMAAAhV7MBV7AAAg");
	this.shape_8.setTransform(275,275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F6E7E7").s().p("Egq9Aq+MAAAhV7MBV7AAAMAAABV7g");
	this.shape_9.setTransform(275,275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).wait(711));

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