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


(lib._8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AxiZjQiZg7h4hsQh7hthDiPQhHiWAAiqQAAjkBSiwQBHiYCMiEQCwihHVkEIhskfQgniYAAiZQAAi1BQinQBJifCEh7QCDh7ClhDQCshGCyAAQElAADzBgQEFBkDBDKQG4j8AUAAQCNAAAACVQAABNhJAmI94SRIApBJQFVIOAAFpQAACqhCCeQhACYh5B1Qh1B4iYBBQieBGitAAQinAAieg9gAwfFIQieBhhMCPQhPCNAAC7QAADcCyCVQCnCNDiAAQDnAACninQCkinAAjkQAAlAlTnmgAiq1aQh1AvhbBVQheBVg1BsQg3B1AAB7QAADZBsDiIUCsSQibiJjBhEQi8hAjQAAQh3AAh1Avg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-165.6,-169.6,331.4,339.3);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-94.4,guide:{path:[-47.9,-29.4,-30.4,37.2,47,28.6]}},134).wait(1));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AlhCZICwlVIBHAkIixFVg");
	var mask_graphics_1 = new cjs.Graphics().p("Ah+CXICwlVIBNAoIivFVg");
	var mask_graphics_2 = new cjs.Graphics().p("AiCCVICwlVIBVAsIiwFVg");
	var mask_graphics_3 = new cjs.Graphics().p("AiFCTICvlVIBdAwIiwFVg");
	var mask_graphics_4 = new cjs.Graphics().p("AiJCRICvlVIBkA0IivFVg");
	var mask_graphics_5 = new cjs.Graphics().p("AiNCPICvlVIBsA4IivFVg");
	var mask_graphics_6 = new cjs.Graphics().p("AiRCNICwlVIBzA8IiwFVg");
	var mask_graphics_7 = new cjs.Graphics().p("AiVCLICwlVIB7BAIiwFVg");
	var mask_graphics_8 = new cjs.Graphics().p("AiYCJICvlVICDBEIiwFVg");
	var mask_graphics_9 = new cjs.Graphics().p("AicCHICvlVICKBHIivFVg");
	var mask_graphics_10 = new cjs.Graphics().p("AigCFICwlVICRBLIiwFVg");
	var mask_graphics_11 = new cjs.Graphics().p("AikCDICwlVICZBQIiwFVg");
	var mask_graphics_12 = new cjs.Graphics().p("AinCBICvlVICgBTIivFVg");
	var mask_graphics_13 = new cjs.Graphics().p("AirCAICvlVICoBWIivFVg");
	var mask_graphics_14 = new cjs.Graphics().p("AivB+ICwlVICvBaIiwFVg");
	var mask_graphics_15 = new cjs.Graphics().p("AizB8ICxlVIC2BeIiwFVg");
	var mask_graphics_16 = new cjs.Graphics().p("Ai3B6ICxlVIC+BiIixFVg");
	var mask_graphics_17 = new cjs.Graphics().p("Ai6B4ICwlVIDFBmIiwFVg");
	var mask_graphics_18 = new cjs.Graphics().p("Ai+B2ICwlVIDNBqIiwFVg");
	var mask_graphics_19 = new cjs.Graphics().p("AjCB0ICxlVIDUBuIixFVg");
	var mask_graphics_20 = new cjs.Graphics().p("AjGByICxlVIDcByIixFVg");
	var mask_graphics_21 = new cjs.Graphics().p("AjJBwICwlVIDkB2IixFVg");
	var mask_graphics_22 = new cjs.Graphics().p("AjNBuICwlVIDrB6IiwFVg");
	var mask_graphics_23 = new cjs.Graphics().p("AjRBsICxlVIDyB+IixFVg");
	var mask_graphics_24 = new cjs.Graphics().p("AjVBqICxlVID6CCIixFVg");
	var mask_graphics_25 = new cjs.Graphics().p("AjZBoICxlVIECCGIixFVg");
	var mask_graphics_26 = new cjs.Graphics().p("AjcBmICwlVIEJCKIiwFVg");
	var mask_graphics_27 = new cjs.Graphics().p("AjgBkICwlVIERCOIiwFVg");
	var mask_graphics_28 = new cjs.Graphics().p("AjkBiICxlVIEYCSIiwFVg");
	var mask_graphics_29 = new cjs.Graphics().p("AjoBgICxlVIEgCWIixFVg");
	var mask_graphics_30 = new cjs.Graphics().p("AjrBeICwlVIEnCZIiwFVg");
	var mask_graphics_31 = new cjs.Graphics().p("AjvBcICwlVIEvCeIiwFVg");
	var mask_graphics_32 = new cjs.Graphics().p("AjzBaICxlVIE2ChIiwFVg");
	var mask_graphics_33 = new cjs.Graphics().p("Aj3BYICxlVIE+ClIixFVg");
	var mask_graphics_34 = new cjs.Graphics().p("Aj7BXICxlVIFGCoIixFVg");
	var mask_graphics_35 = new cjs.Graphics().p("Aj+BVICwlVIFOCsIixFVg");
	var mask_graphics_36 = new cjs.Graphics().p("AkCBTICwlVIFVCwIiwFVg");
	var mask_graphics_37 = new cjs.Graphics().p("AkGBRICxlVIFcC0IixFVg");
	var mask_graphics_38 = new cjs.Graphics().p("AkKBPICxlVIFkC4IixFVg");
	var mask_graphics_39 = new cjs.Graphics().p("AkNBNICwlVIFsC8IixFVg");
	var mask_graphics_40 = new cjs.Graphics().p("AkRBLICwlVIFzDAIiwFVg");
	var mask_graphics_41 = new cjs.Graphics().p("AkVBJICxlVIF6DEIixFVg");
	var mask_graphics_42 = new cjs.Graphics().p("AkZBHICxlVIGCDIIixFVg");
	var mask_graphics_43 = new cjs.Graphics().p("AkcBFICwlVIGJDMIiwFVg");
	var mask_graphics_44 = new cjs.Graphics().p("AkgBDICwlVIGRDQIiwFVg");
	var mask_graphics_45 = new cjs.Graphics().p("AkkBBICwlVIGZDUIiwFVg");
	var mask_graphics_46 = new cjs.Graphics().p("AkoA/ICxlVIGgDYIiwFVg");
	var mask_graphics_47 = new cjs.Graphics().p("AksA9ICxlVIGoDcIixFVg");
	var mask_graphics_48 = new cjs.Graphics().p("AkvA7ICwlVIGvDgIiwFVg");
	var mask_graphics_49 = new cjs.Graphics().p("AkzA5ICwlVIG3DjIiwFVg");
	var mask_graphics_50 = new cjs.Graphics().p("Ak3A3ICxlVIG+DoIixFVg");
	var mask_graphics_51 = new cjs.Graphics().p("Ak7A1ICxlVIHGDrIixFVg");
	var mask_graphics_52 = new cjs.Graphics().p("Ak+AzICwlVIHODwIixFVg");
	var mask_graphics_53 = new cjs.Graphics().p("AlCAxICwlVIHWDzIixFVg");
	var mask_graphics_54 = new cjs.Graphics().p("AlGAvICwlVIHdD4IiwFVg");
	var mask_graphics_55 = new cjs.Graphics().p("AlKAuICxlVIHkD6IixFVg");
	var mask_graphics_56 = new cjs.Graphics().p("AlOAsICxlVIHsD+IixFVg");
	var mask_graphics_57 = new cjs.Graphics().p("AlRAqICwlVIHzECIiwFVg");
	var mask_graphics_58 = new cjs.Graphics().p("AlVAoICwlVIH7EGIiwFVg");
	var mask_graphics_59 = new cjs.Graphics().p("AlZAmICxlVIICEKIiwFVg");
	var mask_graphics_60 = new cjs.Graphics().p("AldAkICxlVIIKEOIixFVg");
	var mask_graphics_61 = new cjs.Graphics().p("AlgAiICwlVIIRESIiwFVg");
	var mask_graphics_62 = new cjs.Graphics().p("AlkAgICwlVIIZEWIiwFVg");
	var mask_graphics_63 = new cjs.Graphics().p("AloAeICwlVIIhEaIiwFVg");
	var mask_graphics_64 = new cjs.Graphics().p("AlsAcICxlVIIoEeIiwFVg");
	var mask_graphics_65 = new cjs.Graphics().p("AlwAaICxlVIIwEiIixFVg");
	var mask_graphics_66 = new cjs.Graphics().p("AlzAYICwlVII4EmIixFVg");
	var mask_graphics_67 = new cjs.Graphics().p("Al3AWICwlVII/EqIiwFVg");
	var mask_graphics_68 = new cjs.Graphics().p("Al7AUICwlVIJHEuIiwFVg");
	var mask_graphics_69 = new cjs.Graphics().p("Al/ASICwlVIJPEyIixFVg");
	var mask_graphics_70 = new cjs.Graphics().p("AmDAQICxlVIJWE2IixFVg");
	var mask_graphics_71 = new cjs.Graphics().p("AmHAOICxlVIJdE6IiwFVg");
	var mask_graphics_72 = new cjs.Graphics().p("AmLAMICxlVIJlE+IiwFVg");
	var mask_graphics_73 = new cjs.Graphics().p("AmOAKICwlVIJtFCIiwFVg");
	var mask_graphics_74 = new cjs.Graphics().p("AmSAIICwlVIJ1FGIiwFVg");
	var mask_graphics_75 = new cjs.Graphics().p("AmWAHICxlVIJ8FIIixFVg");
	var mask_graphics_76 = new cjs.Graphics().p("AmaAFICxlVIKDFNIiwFVg");
	var mask_graphics_77 = new cjs.Graphics().p("AmdADICwlVIKLFQIiwFWg");
	var mask_graphics_78 = new cjs.Graphics().p("AmhABICwlVIKTFUIixFVg");
	var mask_graphics_79 = new cjs.Graphics().p("AmlAAICxlWIKaFYIixFWg");
	var mask_graphics_80 = new cjs.Graphics().p("AmpgCICxlWIKiFbIixFWg");
	var mask_graphics_81 = new cjs.Graphics().p("AmsgEICwlWIKpFfIiwFWg");
	var mask_graphics_82 = new cjs.Graphics().p("AmwgGICwlWIKxFjIiwFWg");
	var mask_graphics_83 = new cjs.Graphics().p("Am0gIICwlWIK5FnIixFWg");
	var mask_graphics_84 = new cjs.Graphics().p("Am4gKICxlWILAFrIixFWg");
	var mask_graphics_85 = new cjs.Graphics().p("Am8gMICxlWILIFvIixFWg");
	var mask_graphics_86 = new cjs.Graphics().p("Am/gOICwlWILPFzIiwFWg");
	var mask_graphics_87 = new cjs.Graphics().p("AnDgQICwlWILXF3IiwFWg");
	var mask_graphics_88 = new cjs.Graphics().p("AnHgSICxlWILeF7IixFWg");
	var mask_graphics_89 = new cjs.Graphics().p("AnLgUICxlWILlF/IiwFWg");
	var mask_graphics_90 = new cjs.Graphics().p("AnOgWICwlWILtGDIiwFWg");
	var mask_graphics_91 = new cjs.Graphics().p("AnSgYICwlWIL1GHIiwFWg");
	var mask_graphics_92 = new cjs.Graphics().p("AnWgaICwlWIL9GLIiwFWg");
	var mask_graphics_93 = new cjs.Graphics().p("AnagcICxlWIMEGPIixFWg");
	var mask_graphics_94 = new cjs.Graphics().p("AnegeICxlWIMMGTIixFWg");
	var mask_graphics_95 = new cjs.Graphics().p("AnhggICwlWIMTGXIiwFWg");
	var mask_graphics_96 = new cjs.Graphics().p("AnlghICwlWIMbGZIixFWg");
	var mask_graphics_97 = new cjs.Graphics().p("AnpgjICxlWIMiGeIixFWg");
	var mask_graphics_98 = new cjs.Graphics().p("AntglICxlWIMqGhIixFWg");
	var mask_graphics_99 = new cjs.Graphics().p("AnwgnICwlWIMxGmIiwFWg");
	var mask_graphics_100 = new cjs.Graphics().p("An0gpICwlWIM5GpIixFXg");
	var mask_graphics_101 = new cjs.Graphics().p("An4grICwlWINBGtIixFWg");
	var mask_graphics_102 = new cjs.Graphics().p("An8gtICxlWINIGxIixFWg");
	var mask_graphics_103 = new cjs.Graphics().p("AoAgvICxlWINPG1IiwFWg");
	var mask_graphics_104 = new cjs.Graphics().p("AoDgxICwlWINXG5IiwFWg");
	var mask_graphics_105 = new cjs.Graphics().p("AoHgzICwlWINfG9IiwFWg");
	var mask_graphics_106 = new cjs.Graphics().p("AoLg1ICxlWINmHBIixFWg");
	var mask_graphics_107 = new cjs.Graphics().p("AoPg3ICxlWINtHFIiwFWg");
	var mask_graphics_108 = new cjs.Graphics().p("AoSg5ICwlWIN1HJIiwFWg");
	var mask_graphics_109 = new cjs.Graphics().p("AoWg7ICwlWIN9HNIixFWg");
	var mask_graphics_110 = new cjs.Graphics().p("Aoag9ICxlWIOEHRIixFWg");
	var mask_graphics_111 = new cjs.Graphics().p("Aoeg/ICxlWIOMHVIixFWg");
	var mask_graphics_112 = new cjs.Graphics().p("AoihBICxlWIOUHZIixFWg");
	var mask_graphics_113 = new cjs.Graphics().p("AolhDICwlWIObHdIiwFWg");
	var mask_graphics_114 = new cjs.Graphics().p("AophFICwlWIOjHhIixFWg");
	var mask_graphics_115 = new cjs.Graphics().p("AothHICxlWIOqHlIixFWg");
	var mask_graphics_116 = new cjs.Graphics().p("AoxhIICxlWIOxHoIiwFWg");
	var mask_graphics_117 = new cjs.Graphics().p("Ao0hKICwlWIO5HrIiwFWg");
	var mask_graphics_118 = new cjs.Graphics().p("Ao4hMICwlWIPBHwIiwFWg");
	var mask_graphics_119 = new cjs.Graphics().p("Ao8hOICxlWIPIHzIixFWg");
	var mask_graphics_120 = new cjs.Graphics().p("ApAhQICxlWIPQH4IixFWg");
	var mask_graphics_121 = new cjs.Graphics().p("ApEhSICxlWIPXH7IiwFWg");
	var mask_graphics_122 = new cjs.Graphics().p("ApHhUICwlWIPfH/IiwFWg");
	var mask_graphics_123 = new cjs.Graphics().p("ApLhWICwlWIPnIDIiwFWg");
	var mask_graphics_124 = new cjs.Graphics().p("ApPhYICxlWIPuIHIixFWg");
	var mask_graphics_125 = new cjs.Graphics().p("ApThaICxlWIP2ILIixFWg");
	var mask_graphics_126 = new cjs.Graphics().p("ApWhcICwlWIP9IPIiwFWg");
	var mask_graphics_127 = new cjs.Graphics().p("ApaheICwlWIQFITIixFWg");
	var mask_graphics_128 = new cjs.Graphics().p("ApehgICxlWIQMIXIixFWg");
	var mask_graphics_129 = new cjs.Graphics().p("ApihiICxlWIQUIbIixFWg");
	var mask_graphics_130 = new cjs.Graphics().p("ApmhkICxlWIQcIfIixFWg");
	var mask_graphics_131 = new cjs.Graphics().p("ApphmICwlWIQjIjIiwFWg");
	var mask_graphics_132 = new cjs.Graphics().p("ApthoICwlWIQrInIixFWg");
	var mask_graphics_133 = new cjs.Graphics().p("ApxhqICxlWIQyIrIixFWg");
	var mask_graphics_134 = new cjs.Graphics().p("Ap1hsICxlWIQ6IvIixFWg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-35.4,y:-17.5}).wait(1).to({graphics:mask_graphics_1,x:-58.1,y:-17.2}).wait(1).to({graphics:mask_graphics_2,x:-57.8,y:-17}).wait(1).to({graphics:mask_graphics_3,x:-57.4,y:-16.9}).wait(1).to({graphics:mask_graphics_4,x:-57,y:-16.7}).wait(1).to({graphics:mask_graphics_5,x:-56.6,y:-16.5}).wait(1).to({graphics:mask_graphics_6,x:-56.2,y:-16.3}).wait(1).to({graphics:mask_graphics_7,x:-55.9,y:-16.1}).wait(1).to({graphics:mask_graphics_8,x:-55.5,y:-15.9}).wait(1).to({graphics:mask_graphics_9,x:-55.1,y:-15.7}).wait(1).to({graphics:mask_graphics_10,x:-54.7,y:-15.5}).wait(1).to({graphics:mask_graphics_11,x:-54.4,y:-15.3}).wait(1).to({graphics:mask_graphics_12,x:-54,y:-15.1}).wait(1).to({graphics:mask_graphics_13,x:-53.6,y:-14.9}).wait(1).to({graphics:mask_graphics_14,x:-53.2,y:-14.7}).wait(1).to({graphics:mask_graphics_15,x:-52.8,y:-14.5}).wait(1).to({graphics:mask_graphics_16,x:-52.5,y:-14.3}).wait(1).to({graphics:mask_graphics_17,x:-52.1,y:-14.1}).wait(1).to({graphics:mask_graphics_18,x:-51.7,y:-13.9}).wait(1).to({graphics:mask_graphics_19,x:-51.3,y:-13.7}).wait(1).to({graphics:mask_graphics_20,x:-51,y:-13.5}).wait(1).to({graphics:mask_graphics_21,x:-50.6,y:-13.3}).wait(1).to({graphics:mask_graphics_22,x:-50.2,y:-13.1}).wait(1).to({graphics:mask_graphics_23,x:-49.8,y:-12.9}).wait(1).to({graphics:mask_graphics_24,x:-49.4,y:-12.8}).wait(1).to({graphics:mask_graphics_25,x:-49.1,y:-12.6}).wait(1).to({graphics:mask_graphics_26,x:-48.7,y:-12.4}).wait(1).to({graphics:mask_graphics_27,x:-48.3,y:-12.2}).wait(1).to({graphics:mask_graphics_28,x:-47.9,y:-12}).wait(1).to({graphics:mask_graphics_29,x:-47.6,y:-11.8}).wait(1).to({graphics:mask_graphics_30,x:-47.2,y:-11.6}).wait(1).to({graphics:mask_graphics_31,x:-46.8,y:-11.4}).wait(1).to({graphics:mask_graphics_32,x:-46.4,y:-11.2}).wait(1).to({graphics:mask_graphics_33,x:-46.1,y:-11}).wait(1).to({graphics:mask_graphics_34,x:-45.7,y:-10.8}).wait(1).to({graphics:mask_graphics_35,x:-45.3,y:-10.6}).wait(1).to({graphics:mask_graphics_36,x:-44.9,y:-10.4}).wait(1).to({graphics:mask_graphics_37,x:-44.5,y:-10.2}).wait(1).to({graphics:mask_graphics_38,x:-44.2,y:-10}).wait(1).to({graphics:mask_graphics_39,x:-43.8,y:-9.8}).wait(1).to({graphics:mask_graphics_40,x:-43.4,y:-9.6}).wait(1).to({graphics:mask_graphics_41,x:-43,y:-9.4}).wait(1).to({graphics:mask_graphics_42,x:-42.7,y:-9.2}).wait(1).to({graphics:mask_graphics_43,x:-42.3,y:-9}).wait(1).to({graphics:mask_graphics_44,x:-41.9,y:-8.9}).wait(1).to({graphics:mask_graphics_45,x:-41.5,y:-8.7}).wait(1).to({graphics:mask_graphics_46,x:-41.1,y:-8.5}).wait(1).to({graphics:mask_graphics_47,x:-40.8,y:-8.3}).wait(1).to({graphics:mask_graphics_48,x:-40.4,y:-8.1}).wait(1).to({graphics:mask_graphics_49,x:-40,y:-7.9}).wait(1).to({graphics:mask_graphics_50,x:-39.6,y:-7.7}).wait(1).to({graphics:mask_graphics_51,x:-39.3,y:-7.5}).wait(1).to({graphics:mask_graphics_52,x:-38.9,y:-7.3}).wait(1).to({graphics:mask_graphics_53,x:-38.5,y:-7.1}).wait(1).to({graphics:mask_graphics_54,x:-38.1,y:-6.9}).wait(1).to({graphics:mask_graphics_55,x:-37.7,y:-6.7}).wait(1).to({graphics:mask_graphics_56,x:-37.4,y:-6.5}).wait(1).to({graphics:mask_graphics_57,x:-37,y:-6.3}).wait(1).to({graphics:mask_graphics_58,x:-36.6,y:-6.1}).wait(1).to({graphics:mask_graphics_59,x:-36.2,y:-5.9}).wait(1).to({graphics:mask_graphics_60,x:-35.9,y:-5.7}).wait(1).to({graphics:mask_graphics_61,x:-35.5,y:-5.5}).wait(1).to({graphics:mask_graphics_62,x:-35.1,y:-5.3}).wait(1).to({graphics:mask_graphics_63,x:-34.7,y:-5.1}).wait(1).to({graphics:mask_graphics_64,x:-34.3,y:-4.9}).wait(1).to({graphics:mask_graphics_65,x:-34,y:-4.8}).wait(1).to({graphics:mask_graphics_66,x:-33.6,y:-4.6}).wait(1).to({graphics:mask_graphics_67,x:-33.2,y:-4.4}).wait(1).to({graphics:mask_graphics_68,x:-32.9,y:-4.2}).wait(1).to({graphics:mask_graphics_69,x:-32.5,y:-4}).wait(1).to({graphics:mask_graphics_70,x:-32.1,y:-3.8}).wait(1).to({graphics:mask_graphics_71,x:-31.7,y:-3.6}).wait(1).to({graphics:mask_graphics_72,x:-31.3,y:-3.4}).wait(1).to({graphics:mask_graphics_73,x:-31,y:-3.2}).wait(1).to({graphics:mask_graphics_74,x:-30.6,y:-3}).wait(1).to({graphics:mask_graphics_75,x:-30.2,y:-2.8}).wait(1).to({graphics:mask_graphics_76,x:-29.8,y:-2.6}).wait(1).to({graphics:mask_graphics_77,x:-29.5,y:-2.4}).wait(1).to({graphics:mask_graphics_78,x:-29.1,y:-2.2}).wait(1).to({graphics:mask_graphics_79,x:-28.7,y:-2}).wait(1).to({graphics:mask_graphics_80,x:-28.3,y:-1.9}).wait(1).to({graphics:mask_graphics_81,x:-28,y:-1.7}).wait(1).to({graphics:mask_graphics_82,x:-27.6,y:-1.5}).wait(1).to({graphics:mask_graphics_83,x:-27.2,y:-1.3}).wait(1).to({graphics:mask_graphics_84,x:-26.8,y:-1.1}).wait(1).to({graphics:mask_graphics_85,x:-26.4,y:-0.9}).wait(1).to({graphics:mask_graphics_86,x:-26.1,y:-0.7}).wait(1).to({graphics:mask_graphics_87,x:-25.7,y:-0.5}).wait(1).to({graphics:mask_graphics_88,x:-25.3,y:-0.3}).wait(1).to({graphics:mask_graphics_89,x:-24.9,y:-0.1}).wait(1).to({graphics:mask_graphics_90,x:-24.6,y:0.1}).wait(1).to({graphics:mask_graphics_91,x:-24.2,y:0.3}).wait(1).to({graphics:mask_graphics_92,x:-23.8,y:0.5}).wait(1).to({graphics:mask_graphics_93,x:-23.4,y:0.7}).wait(1).to({graphics:mask_graphics_94,x:-23,y:0.9}).wait(1).to({graphics:mask_graphics_95,x:-22.7,y:1.1}).wait(1).to({graphics:mask_graphics_96,x:-22.3,y:1.3}).wait(1).to({graphics:mask_graphics_97,x:-21.9,y:1.5}).wait(1).to({graphics:mask_graphics_98,x:-21.5,y:1.7}).wait(1).to({graphics:mask_graphics_99,x:-21.2,y:1.9}).wait(1).to({graphics:mask_graphics_100,x:-20.8,y:2.1}).wait(1).to({graphics:mask_graphics_101,x:-20.4,y:2.2}).wait(1).to({graphics:mask_graphics_102,x:-20,y:2.4}).wait(1).to({graphics:mask_graphics_103,x:-19.6,y:2.6}).wait(1).to({graphics:mask_graphics_104,x:-19.3,y:2.8}).wait(1).to({graphics:mask_graphics_105,x:-18.9,y:3}).wait(1).to({graphics:mask_graphics_106,x:-18.5,y:3.2}).wait(1).to({graphics:mask_graphics_107,x:-18.1,y:3.4}).wait(1).to({graphics:mask_graphics_108,x:-17.8,y:3.6}).wait(1).to({graphics:mask_graphics_109,x:-17.4,y:3.8}).wait(1).to({graphics:mask_graphics_110,x:-17,y:4}).wait(1).to({graphics:mask_graphics_111,x:-16.6,y:4.2}).wait(1).to({graphics:mask_graphics_112,x:-16.2,y:4.4}).wait(1).to({graphics:mask_graphics_113,x:-15.9,y:4.6}).wait(1).to({graphics:mask_graphics_114,x:-15.5,y:4.8}).wait(1).to({graphics:mask_graphics_115,x:-15.1,y:5}).wait(1).to({graphics:mask_graphics_116,x:-14.7,y:5.2}).wait(1).to({graphics:mask_graphics_117,x:-14.4,y:5.4}).wait(1).to({graphics:mask_graphics_118,x:-14,y:5.6}).wait(1).to({graphics:mask_graphics_119,x:-13.6,y:5.8}).wait(1).to({graphics:mask_graphics_120,x:-13.2,y:6}).wait(1).to({graphics:mask_graphics_121,x:-12.8,y:6.2}).wait(1).to({graphics:mask_graphics_122,x:-12.5,y:6.3}).wait(1).to({graphics:mask_graphics_123,x:-12.1,y:6.5}).wait(1).to({graphics:mask_graphics_124,x:-11.7,y:6.7}).wait(1).to({graphics:mask_graphics_125,x:-11.3,y:6.9}).wait(1).to({graphics:mask_graphics_126,x:-11,y:7.1}).wait(1).to({graphics:mask_graphics_127,x:-10.6,y:7.3}).wait(1).to({graphics:mask_graphics_128,x:-10.2,y:7.5}).wait(1).to({graphics:mask_graphics_129,x:-9.8,y:7.7}).wait(1).to({graphics:mask_graphics_130,x:-9.4,y:7.9}).wait(1).to({graphics:mask_graphics_131,x:-9.1,y:8.1}).wait(1).to({graphics:mask_graphics_132,x:-8.7,y:8.3}).wait(1).to({graphics:mask_graphics_133,x:-8.3,y:8.5}).wait(1).to({graphics:mask_graphics_134,x:-7.9,y:8.7}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AnfkmQCwKeMPhb");

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(135));

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
(lib.WS_Cursive_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_539 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(539).call(this.frame_539).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(376.1,159.8,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[376.4,159.5,329,111.5,271,120,202.8,135.9,204.2,205.5,204.8,234.4,220.8,257.8,220.9,257.9,221,258,254.7,294.3,263.2,340.3,271.7,386.3,247.8,408.3,224,430.4,185.9,428.7,147.8,427.1,133.4,399.6,119,372.1,129.5,339.1,140.1,306.1,167.9,289.8,193.8,274.5,216.3,260.5]}},319).to({guide:{path:[216.2,260.4,217.7,259.5,219.1,258.6]}},1).to({guide:{path:[219.2,258.6,322.3,196.6,425.5,134.5]}},135).wait(16).to({startPosition:0},0).to({guide:{path:[425,134,462.9,81,526.7,93.4,584.1,109.5,604.9,89.7,625.6,70,629.9,42.4]}},59).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(426.8,134.4,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},455).wait(76));

	// Layer 9
	this.instance_1 = new lib.ar4("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(328.7,103,1,1,168.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).wait(531));

	// Layer 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_328 = new cjs.Graphics().p("AMrSoICshrICRDoIisBrg");
	var mask_graphics_329 = new cjs.Graphics().p("Aikg5IC4h0ICRDoIi4Bzg");
	var mask_graphics_330 = new cjs.Graphics().p("Aisg1IDHh8ICSDnIjIB8g");
	var mask_graphics_331 = new cjs.Graphics().p("AiygxIDUiFICRDoIjUCFg");
	var mask_graphics_332 = new cjs.Graphics().p("Ai6gsIDjiOICRDnIjjCOg");
	var mask_graphics_333 = new cjs.Graphics().p("AjAgoIDwiXICRDoIjwCXg");
	var mask_graphics_334 = new cjs.Graphics().p("AjHgjID+igICRDoIj+Cfg");
	var mask_graphics_335 = new cjs.Graphics().p("AjOgfIEMioICRDnIkMCog");
	var mask_graphics_336 = new cjs.Graphics().p("AjVgbIEaixICRDoIkaCxg");
	var mask_graphics_337 = new cjs.Graphics().p("AjcgWIEoi6ICRDnIkoC6g");
	var mask_graphics_338 = new cjs.Graphics().p("AjjgSIE2jDICRDoIk2DDg");
	var mask_graphics_339 = new cjs.Graphics().p("AjqgOIFEjLICRDoIlEDLg");
	var mask_graphics_340 = new cjs.Graphics().p("AjxgKIFSjTICRDnIlSDUg");
	var mask_graphics_341 = new cjs.Graphics().p("Aj4gFIFgjcICRDnIlgDdg");
	var mask_graphics_342 = new cjs.Graphics().p("Aj/gBIFujlICRDoIluDlg");
	var mask_graphics_343 = new cjs.Graphics().p("AkGADIF8jtICRDoIl8Dtg");
	var mask_graphics_344 = new cjs.Graphics().p("AkNAHIGKj1ICRDoImKD1g");
	var mask_graphics_345 = new cjs.Graphics().p("AkUALIGYj+ICRDpImYD+g");
	var mask_graphics_346 = new cjs.Graphics().p("AkbAQIGmkHICRDoImmEHg");
	var mask_graphics_347 = new cjs.Graphics().p("AkiAUIG0kQICRDpIm0EQg");
	var mask_graphics_348 = new cjs.Graphics().p("AkpAYIHCkYICRDoInCEZg");
	var mask_graphics_349 = new cjs.Graphics().p("AkwAdIHQkiICRDpInQEhg");
	var mask_graphics_350 = new cjs.Graphics().p("Ak3AhIHekqICRDpIneEqg");
	var mask_graphics_351 = new cjs.Graphics().p("Ak+AmIHskzICRDoInsEzg");
	var mask_graphics_352 = new cjs.Graphics().p("AlFAqIH6k8ICRDpIn6E7g");
	var mask_graphics_353 = new cjs.Graphics().p("AlMAuIIIlEICRDpIoIFEg");
	var mask_graphics_354 = new cjs.Graphics().p("AlTAzIIWlNICRDoIoWFNg");
	var mask_graphics_355 = new cjs.Graphics().p("AlaA3IIklVICRDoIokFWg");
	var mask_graphics_356 = new cjs.Graphics().p("AlhA8IIylfICRDpIoyFeg");
	var mask_graphics_357 = new cjs.Graphics().p("AloBAIJAlnICRDoIpAFng");
	var mask_graphics_358 = new cjs.Graphics().p("AlvBEIJOlwICRDpIpOFwg");
	var mask_graphics_359 = new cjs.Graphics().p("Al2BIIJcl4ICRDpIpcF4g");
	var mask_graphics_360 = new cjs.Graphics().p("Al9BNIJqmBICRDoIpqGCg");
	var mask_graphics_361 = new cjs.Graphics().p("AmEBRIJ4mKICRDpIp4GKg");
	var mask_graphics_362 = new cjs.Graphics().p("AmLBVIKGmSICRDoIqGGTg");
	var mask_graphics_363 = new cjs.Graphics().p("AmSBaIKUmcICRDpIqUGbg");
	var mask_graphics_364 = new cjs.Graphics().p("AmZBeIKimkICRDpIqiGkg");
	var mask_graphics_365 = new cjs.Graphics().p("AmgBjIKwmtICRDoIqwGtg");
	var mask_graphics_366 = new cjs.Graphics().p("AmnBnIK+m1ICRDoIq+G1g");
	var mask_graphics_367 = new cjs.Graphics().p("AmtBrILKm+ICSDoIrLG/g");
	var mask_graphics_368 = new cjs.Graphics().p("Am1BwILanHICRDoIraHHg");
	var mask_graphics_369 = new cjs.Graphics().p("Am7B0ILmnQICRDpIrmHQg");
	var mask_graphics_370 = new cjs.Graphics().p("AnDB5IL2nZICRDpIr2HYg");
	var mask_graphics_371 = new cjs.Graphics().p("AnKB9IMDnhICRDoIsCHhg");
	var mask_graphics_372 = new cjs.Graphics().p("AnQCBIMRnqICRDpIsRHqg");
	var mask_graphics_373 = new cjs.Graphics().p("AnYCGIMfnzICRDoIsfHzg");
	var mask_graphics_374 = new cjs.Graphics().p("AnfCKIMun8ICRDpIsuH8g");
	var mask_graphics_375 = new cjs.Graphics().p("AnlCOIM7oEICQDpIs7IEg");
	var mask_graphics_376 = new cjs.Graphics().p("AntCTINKoNICRDoItKINg");
	var mask_graphics_377 = new cjs.Graphics().p("AnzCXINWoVICRDoItWIWg");
	var mask_graphics_378 = new cjs.Graphics().p("An6CcINlofICRDoItmIfg");
	var mask_graphics_379 = new cjs.Graphics().p("AoBCgINyonICRDoItyIng");
	var mask_graphics_380 = new cjs.Graphics().p("AoICkIOAowICSDpIuBIwg");
	var mask_graphics_381 = new cjs.Graphics().p("AoPCoIOOo4ICRDpIuOI4g");
	var mask_graphics_382 = new cjs.Graphics().p("AoXCtIOdpBICRDoIucJCg");
	var mask_graphics_383 = new cjs.Graphics().p("AodCxIOqpKICRDpIuqJKg");
	var mask_graphics_384 = new cjs.Graphics().p("AokC1IO4pSICRDoIu4JTg");
	var mask_graphics_385 = new cjs.Graphics().p("AorC6IPGpcICRDpIvGJbg");
	var mask_graphics_386 = new cjs.Graphics().p("AoyC+IPUpkICRDpIvUJkg");
	var mask_graphics_387 = new cjs.Graphics().p("Ao5DDIPiptICRDoIviJtg");
	var mask_graphics_388 = new cjs.Graphics().p("ApADHIPwp2ICRDpIvwJ1g");
	var mask_graphics_389 = new cjs.Graphics().p("ApHDLIP+p+ICRDoIv+J/g");
	var mask_graphics_390 = new cjs.Graphics().p("ApODQIQMqHICRDoIwMKHg");
	var mask_graphics_391 = new cjs.Graphics().p("ApVDUIQaqQICRDpIwaKQg");
	var mask_graphics_392 = new cjs.Graphics().p("ApcDZIQoqZICRDpIwoKYg");
	var mask_graphics_393 = new cjs.Graphics().p("ApjDdIQ2qhICRDoIw2Khg");
	var mask_graphics_394 = new cjs.Graphics().p("ApqDhIREqqICRDpIxEKqg");
	var mask_graphics_395 = new cjs.Graphics().p("ApxDlIRSqyICRDoIxSKzg");
	var mask_graphics_396 = new cjs.Graphics().p("Ap4DqIRgq7ICRDoIxgK7g");
	var mask_graphics_397 = new cjs.Graphics().p("Ap/DuIRurEICRDpIxuLEg");
	var mask_graphics_398 = new cjs.Graphics().p("AqGDzIR8rNICRDpIx8LMg");
	var mask_graphics_399 = new cjs.Graphics().p("AqND3ISKrVICRDoIyKLVg");
	var mask_graphics_400 = new cjs.Graphics().p("AqUD7ISYreICRDpIyYLeg");
	var mask_graphics_401 = new cjs.Graphics().p("AqbEAISmrnICRDoIymLng");
	var mask_graphics_402 = new cjs.Graphics().p("AqiEEIS0rwICRDpIy0Lwg");
	var mask_graphics_403 = new cjs.Graphics().p("AqpEIITCr4ICRDpIzCL4g");
	var mask_graphics_404 = new cjs.Graphics().p("AqwENITQsBICRDoIzQMBg");
	var mask_graphics_405 = new cjs.Graphics().p("Aq3ERITesJICRDoIzeMKg");
	var mask_graphics_406 = new cjs.Graphics().p("Aq+EWITssTICRDoIzsMTg");
	var mask_graphics_407 = new cjs.Graphics().p("ArFEaIT6sbICRDoIz6Mbg");
	var mask_graphics_408 = new cjs.Graphics().p("ArMEeIUHsjICRDoI0HMjg");
	var mask_graphics_409 = new cjs.Graphics().p("ArTEiIUWssICRDpI0WMsg");
	var mask_graphics_410 = new cjs.Graphics().p("ArZEnIUis1ICRDoI0jM1g");
	var mask_graphics_411 = new cjs.Graphics().p("ArhErIUys+ICRDpI0yM+g");
	var mask_graphics_412 = new cjs.Graphics().p("ArnEvIU/tGICQDoI0+NHg");
	var mask_graphics_413 = new cjs.Graphics().p("ArvE0IVOtQICRDpI1ONPg");
	var mask_graphics_414 = new cjs.Graphics().p("Ar2E4IVctYICQDpI1aNYg");
	var mask_graphics_415 = new cjs.Graphics().p("Ar8E9IVpthICRDoI1pNhg");
	var mask_graphics_416 = new cjs.Graphics().p("AsEFBIV4tqICRDpI14Npg");
	var mask_graphics_417 = new cjs.Graphics().p("AsLFGIWFtzICSDoI2GNzg");
	var mask_graphics_418 = new cjs.Graphics().p("AsSFKIWUt7ICRDoI2UN7g");
	var mask_graphics_419 = new cjs.Graphics().p("AsZFOIWhuDICRDoI2hOEg");
	var mask_graphics_420 = new cjs.Graphics().p("AsfFTIWuuNICRDpI2uOMg");
	var mask_graphics_421 = new cjs.Graphics().p("AsmFXIW8uVICRDoI28OVg");
	var mask_graphics_422 = new cjs.Graphics().p("AstFbIXKueICRDpI3KOeg");
	var mask_graphics_423 = new cjs.Graphics().p("As0FgIXYunICRDpI3YOmg");
	var mask_graphics_424 = new cjs.Graphics().p("As7FkIXmuwICRDpI3mOwg");
	var mask_graphics_425 = new cjs.Graphics().p("AtDFoIX1u4ICRDpI30O4g");
	var mask_graphics_426 = new cjs.Graphics().p("AtJFtIYCvBICRDoI4CPBg");
	var mask_graphics_427 = new cjs.Graphics().p("AtQFxIYQvKICRDpI4QPJg");
	var mask_graphics_428 = new cjs.Graphics().p("AtXF1IYevSICRDoI4ePTg");
	var mask_graphics_429 = new cjs.Graphics().p("AteF6IYsvbICRDoI4sPbg");
	var mask_graphics_430 = new cjs.Graphics().p("AtlF+IY6vjICRDoI46Pjg");
	var mask_graphics_431 = new cjs.Graphics().p("AtsGCIZIvsICRDoI5IPtg");
	var mask_graphics_432 = new cjs.Graphics().p("AtzGHIZWv1ICRDoI5WP1g");
	var mask_graphics_433 = new cjs.Graphics().p("At6GLIZkv+ICRDpI5kP+g");
	var mask_graphics_434 = new cjs.Graphics().p("AuBGQIZywHICRDpI5yQGg");
	var mask_graphics_435 = new cjs.Graphics().p("AuIGUIaAwPICRDoI6AQPg");
	var mask_graphics_436 = new cjs.Graphics().p("AuPGYIaOwYICRDpI6OQYg");
	var mask_graphics_437 = new cjs.Graphics().p("AuWGdIacwhICRDoI6cQhg");
	var mask_graphics_438 = new cjs.Graphics().p("AudGhIaqwqICRDpI6qQqg");
	var mask_graphics_439 = new cjs.Graphics().p("AukGmIa4wzICRDoI64Qzg");
	var mask_graphics_440 = new cjs.Graphics().p("AurGqIbGw7ICRDoI7GQ7g");
	var mask_graphics_441 = new cjs.Graphics().p("AuyGuIbUxDICRDoI7UREg");
	var mask_graphics_442 = new cjs.Graphics().p("Au5GzIbixNICRDoI7iRNg");
	var mask_graphics_443 = new cjs.Graphics().p("AvAG3IbwxVICRDoI7wRVg");
	var mask_graphics_444 = new cjs.Graphics().p("AvHG7Ib+xeICRDpI7+Reg");
	var mask_graphics_445 = new cjs.Graphics().p("AvOG/IcMxmICRDpI8MRmg");
	var mask_graphics_446 = new cjs.Graphics().p("AvVHEIcaxvICRDoI8aRwg");
	var mask_graphics_447 = new cjs.Graphics().p("AvcHIIcox4ICRDpI8oR4g");
	var mask_graphics_448 = new cjs.Graphics().p("AvjHNIc2yBICRDoI82SBg");
	var mask_graphics_449 = new cjs.Graphics().p("AvqHRIdEyKICRDpI9ESJg");
	var mask_graphics_450 = new cjs.Graphics().p("AvxHVIdSySICRDpI9SSSg");
	var mask_graphics_451 = new cjs.Graphics().p("Av4HaIdgybICRDoI9gSbg");
	var mask_graphics_452 = new cjs.Graphics().p("Av/HeIduykICRDpI9uSjg");
	var mask_graphics_453 = new cjs.Graphics().p("AwGHiId8ysICRDoI98Stg");
	var mask_graphics_454 = new cjs.Graphics().p("AwNHnIeKy1ICRDoI+KS1g");
	var mask_graphics_455 = new cjs.Graphics().p("AwUHrIeYy+ICRDpI+YS+g");
	var mask_graphics_456 = new cjs.Graphics().p("AwbHwIemzHICRDpI+mTGg");
	var mask_graphics_457 = new cjs.Graphics().p("AwiH0Ie0zPICRDoI+0TPg");
	var mask_graphics_458 = new cjs.Graphics().p("AwoH4IfAzYICRDpI/ATYg");
	var mask_graphics_459 = new cjs.Graphics().p("AwwH9IfQzhICRDoI/QThg");
	var mask_graphics_460 = new cjs.Graphics().p("Aw3IBIfdzpICRDoI/dTqg");
	var mask_graphics_461 = new cjs.Graphics().p("Aw+IGIfszzICRDpI/sTyg");
	var mask_graphics_462 = new cjs.Graphics().p("AgnR0If5z7ICRDoI/6T8g");
	var mask_graphics_463 = new cjs.Graphics().p("AxkIdMAg4gUiICRDpMgg4AUig");
	var mask_graphics_464 = new cjs.Graphics().p("AhmR0MAh3gVJICRDnMgh3AVLg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(328).to({graphics:mask_graphics_328,x:112.8,y:142.4}).wait(1).to({graphics:mask_graphics_329,x:210.6,y:267.4}).wait(1).to({graphics:mask_graphics_330,x:211.4,y:266.9}).wait(1).to({graphics:mask_graphics_331,x:212.2,y:266.3}).wait(1).to({graphics:mask_graphics_332,x:213.1,y:265.8}).wait(1).to({graphics:mask_graphics_333,x:213.9,y:265.3}).wait(1).to({graphics:mask_graphics_334,x:214.7,y:264.8}).wait(1).to({graphics:mask_graphics_335,x:215.5,y:264.3}).wait(1).to({graphics:mask_graphics_336,x:216.3,y:263.8}).wait(1).to({graphics:mask_graphics_337,x:217.2,y:263.3}).wait(1).to({graphics:mask_graphics_338,x:218,y:262.8}).wait(1).to({graphics:mask_graphics_339,x:218.8,y:262.2}).wait(1).to({graphics:mask_graphics_340,x:219.6,y:261.7}).wait(1).to({graphics:mask_graphics_341,x:220.5,y:261.2}).wait(1).to({graphics:mask_graphics_342,x:221.3,y:260.7}).wait(1).to({graphics:mask_graphics_343,x:222.1,y:260.2}).wait(1).to({graphics:mask_graphics_344,x:222.9,y:259.7}).wait(1).to({graphics:mask_graphics_345,x:223.8,y:259.2}).wait(1).to({graphics:mask_graphics_346,x:224.6,y:258.6}).wait(1).to({graphics:mask_graphics_347,x:225.4,y:258.1}).wait(1).to({graphics:mask_graphics_348,x:226.2,y:257.6}).wait(1).to({graphics:mask_graphics_349,x:227.1,y:257.1}).wait(1).to({graphics:mask_graphics_350,x:227.9,y:256.6}).wait(1).to({graphics:mask_graphics_351,x:228.7,y:256.1}).wait(1).to({graphics:mask_graphics_352,x:229.5,y:255.6}).wait(1).to({graphics:mask_graphics_353,x:230.3,y:255}).wait(1).to({graphics:mask_graphics_354,x:231.2,y:254.5}).wait(1).to({graphics:mask_graphics_355,x:232,y:254}).wait(1).to({graphics:mask_graphics_356,x:232.8,y:253.5}).wait(1).to({graphics:mask_graphics_357,x:233.6,y:253}).wait(1).to({graphics:mask_graphics_358,x:234.5,y:252.5}).wait(1).to({graphics:mask_graphics_359,x:235.3,y:252}).wait(1).to({graphics:mask_graphics_360,x:236.1,y:251.5}).wait(1).to({graphics:mask_graphics_361,x:236.9,y:250.9}).wait(1).to({graphics:mask_graphics_362,x:237.7,y:250.4}).wait(1).to({graphics:mask_graphics_363,x:238.6,y:249.9}).wait(1).to({graphics:mask_graphics_364,x:239.4,y:249.4}).wait(1).to({graphics:mask_graphics_365,x:240.2,y:248.9}).wait(1).to({graphics:mask_graphics_366,x:241,y:248.4}).wait(1).to({graphics:mask_graphics_367,x:241.9,y:247.9}).wait(1).to({graphics:mask_graphics_368,x:242.7,y:247.3}).wait(1).to({graphics:mask_graphics_369,x:243.5,y:246.8}).wait(1).to({graphics:mask_graphics_370,x:244.3,y:246.3}).wait(1).to({graphics:mask_graphics_371,x:245.2,y:245.8}).wait(1).to({graphics:mask_graphics_372,x:246,y:245.3}).wait(1).to({graphics:mask_graphics_373,x:246.8,y:244.8}).wait(1).to({graphics:mask_graphics_374,x:247.6,y:244.3}).wait(1).to({graphics:mask_graphics_375,x:248.5,y:243.7}).wait(1).to({graphics:mask_graphics_376,x:249.3,y:243.2}).wait(1).to({graphics:mask_graphics_377,x:250.1,y:242.7}).wait(1).to({graphics:mask_graphics_378,x:250.9,y:242.2}).wait(1).to({graphics:mask_graphics_379,x:251.7,y:241.7}).wait(1).to({graphics:mask_graphics_380,x:252.6,y:241.2}).wait(1).to({graphics:mask_graphics_381,x:253.4,y:240.7}).wait(1).to({graphics:mask_graphics_382,x:254.2,y:240.2}).wait(1).to({graphics:mask_graphics_383,x:255,y:239.6}).wait(1).to({graphics:mask_graphics_384,x:255.8,y:239.1}).wait(1).to({graphics:mask_graphics_385,x:256.7,y:238.6}).wait(1).to({graphics:mask_graphics_386,x:257.5,y:238.1}).wait(1).to({graphics:mask_graphics_387,x:258.3,y:237.6}).wait(1).to({graphics:mask_graphics_388,x:259.1,y:237.1}).wait(1).to({graphics:mask_graphics_389,x:260,y:236.6}).wait(1).to({graphics:mask_graphics_390,x:260.8,y:236}).wait(1).to({graphics:mask_graphics_391,x:261.6,y:235.5}).wait(1).to({graphics:mask_graphics_392,x:262.4,y:235}).wait(1).to({graphics:mask_graphics_393,x:263.3,y:234.5}).wait(1).to({graphics:mask_graphics_394,x:264.1,y:234}).wait(1).to({graphics:mask_graphics_395,x:264.9,y:233.5}).wait(1).to({graphics:mask_graphics_396,x:265.7,y:233}).wait(1).to({graphics:mask_graphics_397,x:266.6,y:232.5}).wait(1).to({graphics:mask_graphics_398,x:267.4,y:232}).wait(1).to({graphics:mask_graphics_399,x:268.2,y:231.4}).wait(1).to({graphics:mask_graphics_400,x:269,y:230.9}).wait(1).to({graphics:mask_graphics_401,x:269.8,y:230.4}).wait(1).to({graphics:mask_graphics_402,x:270.7,y:229.9}).wait(1).to({graphics:mask_graphics_403,x:271.5,y:229.4}).wait(1).to({graphics:mask_graphics_404,x:272.3,y:228.9}).wait(1).to({graphics:mask_graphics_405,x:273.1,y:228.4}).wait(1).to({graphics:mask_graphics_406,x:274,y:227.9}).wait(1).to({graphics:mask_graphics_407,x:274.8,y:227.3}).wait(1).to({graphics:mask_graphics_408,x:275.6,y:226.8}).wait(1).to({graphics:mask_graphics_409,x:276.4,y:226.3}).wait(1).to({graphics:mask_graphics_410,x:277.3,y:225.8}).wait(1).to({graphics:mask_graphics_411,x:278.1,y:225.3}).wait(1).to({graphics:mask_graphics_412,x:278.9,y:224.8}).wait(1).to({graphics:mask_graphics_413,x:279.7,y:224.3}).wait(1).to({graphics:mask_graphics_414,x:280.6,y:223.7}).wait(1).to({graphics:mask_graphics_415,x:281.4,y:223.2}).wait(1).to({graphics:mask_graphics_416,x:282.2,y:222.7}).wait(1).to({graphics:mask_graphics_417,x:283,y:222.2}).wait(1).to({graphics:mask_graphics_418,x:283.9,y:221.7}).wait(1).to({graphics:mask_graphics_419,x:284.7,y:221.2}).wait(1).to({graphics:mask_graphics_420,x:285.5,y:220.7}).wait(1).to({graphics:mask_graphics_421,x:286.3,y:220.1}).wait(1).to({graphics:mask_graphics_422,x:287.1,y:219.6}).wait(1).to({graphics:mask_graphics_423,x:288,y:219.1}).wait(1).to({graphics:mask_graphics_424,x:288.8,y:218.6}).wait(1).to({graphics:mask_graphics_425,x:289.6,y:218.1}).wait(1).to({graphics:mask_graphics_426,x:290.4,y:217.6}).wait(1).to({graphics:mask_graphics_427,x:291.2,y:217.1}).wait(1).to({graphics:mask_graphics_428,x:292.1,y:216.6}).wait(1).to({graphics:mask_graphics_429,x:292.9,y:216}).wait(1).to({graphics:mask_graphics_430,x:293.7,y:215.5}).wait(1).to({graphics:mask_graphics_431,x:294.5,y:215}).wait(1).to({graphics:mask_graphics_432,x:295.4,y:214.5}).wait(1).to({graphics:mask_graphics_433,x:296.2,y:214}).wait(1).to({graphics:mask_graphics_434,x:297,y:213.5}).wait(1).to({graphics:mask_graphics_435,x:297.8,y:213}).wait(1).to({graphics:mask_graphics_436,x:298.7,y:212.4}).wait(1).to({graphics:mask_graphics_437,x:299.5,y:211.9}).wait(1).to({graphics:mask_graphics_438,x:300.3,y:211.4}).wait(1).to({graphics:mask_graphics_439,x:301.1,y:210.9}).wait(1).to({graphics:mask_graphics_440,x:302,y:210.4}).wait(1).to({graphics:mask_graphics_441,x:302.8,y:209.9}).wait(1).to({graphics:mask_graphics_442,x:303.6,y:209.4}).wait(1).to({graphics:mask_graphics_443,x:304.4,y:208.8}).wait(1).to({graphics:mask_graphics_444,x:305.2,y:208.3}).wait(1).to({graphics:mask_graphics_445,x:306.1,y:207.8}).wait(1).to({graphics:mask_graphics_446,x:306.9,y:207.3}).wait(1).to({graphics:mask_graphics_447,x:307.7,y:206.8}).wait(1).to({graphics:mask_graphics_448,x:308.5,y:206.3}).wait(1).to({graphics:mask_graphics_449,x:309.4,y:205.8}).wait(1).to({graphics:mask_graphics_450,x:310.2,y:205.3}).wait(1).to({graphics:mask_graphics_451,x:311,y:204.7}).wait(1).to({graphics:mask_graphics_452,x:311.8,y:204.2}).wait(1).to({graphics:mask_graphics_453,x:312.6,y:203.7}).wait(1).to({graphics:mask_graphics_454,x:313.5,y:203.2}).wait(1).to({graphics:mask_graphics_455,x:314.3,y:202.7}).wait(1).to({graphics:mask_graphics_456,x:315.1,y:202.2}).wait(1).to({graphics:mask_graphics_457,x:315.9,y:201.7}).wait(1).to({graphics:mask_graphics_458,x:316.8,y:201.1}).wait(1).to({graphics:mask_graphics_459,x:317.6,y:200.6}).wait(1).to({graphics:mask_graphics_460,x:318.4,y:200.1}).wait(1).to({graphics:mask_graphics_461,x:319.2,y:199.6}).wait(1).to({graphics:mask_graphics_462,x:214.7,y:137.3}).wait(1).to({graphics:mask_graphics_463,x:323.2,y:197.1}).wait(1).to({graphics:mask_graphics_464,x:221,y:137.3}).wait(76));

	// Layer 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(20,1,1).p("AvoJuQHsloXltz");
	this.shape_1.setTransform(326.3,196.7);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(328).to({_off:false},0).wait(212));

	// Layer 8 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_233 = new cjs.Graphics().p("EgJQAloMAWYg2JQLOEpEpLMQEqLNkpLOQkpLOrNEpQlnCWloAAQllAAlmiUg");
	var mask_1_graphics_234 = new cjs.Graphics().p("EgJ2AlYMAXkg1oQLHE4EZLTQEbLTk5LHQk5LIrTEYQlYCHlVAAQl3AAl2ikg");
	var mask_1_graphics_235 = new cjs.Graphics().p("EgKbAlHMAYug1GQLBFIEJLXQEKLblILAQlILAraEJQlHB4lCAAQmLAAmEi1g");
	var mask_1_graphics_236 = new cjs.Graphics().p("EgLAAk1MAZ5g0iQK5FXD5LdQD6LhlYK4QlXK5rgD5Qk2BpkvAAQmfAAmSjGg");
	var mask_1_graphics_237 = new cjs.Graphics().p("EgLlAkiMAbDgz8QKxFmDpLjQDpLllmKxQlnKxrlDpQkkBckdAAQmyAAmhjZg");
	var mask_1_graphics_238 = new cjs.Graphics().p("EgMKAkPMAcNgzWQKpF2DYLoQDZLql2KpQl2KprqDYQkSBQkJAAQnHAAmvjsg");
	var mask_1_graphics_239 = new cjs.Graphics().p("EgMuAj7MAdVgytQKgGFDILsQDJLvmFKgQmFKhruDHQkABFj3AAQnbAAm8kAg");
	var mask_1_graphics_240 = new cjs.Graphics().p("EgNRAjmMAecgyDQKXGUC4LwQC4LzmUKYQmUKYryC3QjtA6jkAAQnxAAnHkVg");
	var mask_1_graphics_241 = new cjs.Graphics().p("EgN0AjQMAfigxXQKPGjCmL0QCoL3mjKOQmiKPr2CmQjZAwjRAAQoHAAnTkqg");
	var mask_1_graphics_242 = new cjs.Graphics().p("EgOWAi5MAgngwpQKFGxCWL3QCXL7mxKFQmxKGr5CVQjGAni9AAQodAAnelBg");
	var mask_1_graphics_243 = new cjs.Graphics().p("EgO4AiiMAhrgv6QJ8G/CFL6QCGL+m/J8Qm/J7r9CFQixAfiqAAQozAAnplYg");
	var mask_1_graphics_244 = new cjs.Graphics().p("EgPZAiKMAiugvKQJyHNB0L9QB1MBnNJyQnNJxr/B0QicAXiXAAQpLAAnylvg");
	var mask_1_graphics_245 = new cjs.Graphics().p("EgP6AhyMAjwguZQJoHbBjMAQBkMDnbJnQnaJnsCBjQiHARiCAAQpkAAn7mHg");
	var mask_1_graphics_246 = new cjs.Graphics().p("EgQaAhYMAkxgtlQJdHoBSMCQBTMFnoJdQnoJcsEBSQhxAMhtAAQp9AAoEmhg");
	var mask_1_graphics_247 = new cjs.Graphics().p("EgQ6Ag+MAlxgswQJSH1BBMEQBCMGn1JSQn1JRsGBBQhbAIhYAAQqXAAoMm7g");
	var mask_1_graphics_248 = new cjs.Graphics().p("EgRZAgjMAmwgr6QJGICAxMFQAwMIoCJGQoCJHsHAvQhEAEhCAAQqzAAoTnVg");
	var mask_1_graphics_249 = new cjs.Graphics().p("EgR4AgIMAnugrDQI7IPAfMFQAfMJoPI7QoPI7sHAeQgtACgsAAQrPAAoanwg");
	var mask_1_graphics_250 = new cjs.Graphics().p("AyWfrMAoqgqJQIvIbAOMGQAOMJobIvQobIwsIANIgrAAQrsAAogoNg");
	var mask_1_graphics_251 = new cjs.Graphics().p("EAB3An4QsHgCojooMApkgpPQIkIngDMGQgEMKonIjQojIfsBAAIgMAAg");
	var mask_1_graphics_252 = new cjs.Graphics().p("EABOAn3QsHgToXozMAqegoVQIXI0gUMGQgUMJo0IXQoeICriAAIg7gBg");
	var mask_1_graphics_253 = new cjs.Graphics().p("EAAkAn1QsGgkoKo/MArWgnYQILJAgmMFQglMIo/ILQoYHmrFAAQg1AAg1gDg");
	var mask_1_graphics_254 = new cjs.Graphics().p("EgAEAnzQsHg2n9pKMAsOgmaQH9JKg2MFQg3MHpKH+QoRHLqqAAQhKAAhLgFg");
	var mask_1_graphics_255 = new cjs.Graphics().p("EgAuAnvQsFhGnwpWMAtDglaQHxJUhIMEQhHMGpWHwQoJGxqPAAQhgAAhigJg");
	var mask_1_graphics_256 = new cjs.Graphics().p("EgBXAnrQsDhYnjpgMAt3gkbQHjJghYMCQhZMEpgHjQoCGYp1AAQh0AAh4gOg");
	var mask_1_graphics_257 = new cjs.Graphics().p("EgCAAnlQsBhonWprMAuqgjZQHWJqhqMAQhpMCprHVQn5F/pcAAQiJAAiNgUg");
	var mask_1_graphics_258 = new cjs.Graphics().p("EgCpAnfQr/h6nIp1MAvcgiWQHHJ0h6L9Qh7MAp1HIQnvFmpEAAQicAAijgag");
	var mask_1_graphics_259 = new cjs.Graphics().p("EgDSAnYQr8iLm6p/MAwLghTQG6J+iLL7QiML9p/G5QnlFPosAAQiwAAi4ghg");
	var mask_1_graphics_260 = new cjs.Graphics().p("EgD7AnPQr5ibmrqJMAw5ggOQGsKIicL3QidL6qIGrQnbE5oVAAQjEAAjMgrg");
	var mask_1_graphics_261 = new cjs.Graphics().p("EgEkAnGQr1ismdqSMAxngfIQGdKRitL0QitL1qSGdQnPEjoAAAQjXAAjgg0g");
	var mask_1_graphics_262 = new cjs.Graphics().p("EgFMAm8Qrxi8mPqbMAySgeCQGOKai9LwQi+LxqbGPQnDENnqAAQjqAAjzg+g");
	var mask_1_graphics_263 = new cjs.Graphics().p("EgF0AmyQrtjOmAqjMAy8gc6QF/KijOLrQjOLuqkF/Qm2D5nWAAQj8AAkGhIg");
	var mask_1_graphics_264 = new cjs.Graphics().p("EgGcAmmQrojelxqsMAzkgbxQFwKqjeLnQjfLpqsFwQmqDmnAAAQkQAAkYhVg");
	var mask_1_graphics_265 = new cjs.Graphics().p("EgHEAmaQrjjvlhqzMA0KgapQFhKzjvLhQjvLkq0FhQmcDTmsAAQkiAAkrhhg");
	var mask_1_graphics_266 = new cjs.Graphics().p("EgHrAmMQrej+lSq8MA0vgZeQFSK6j/LcQkALfq7FSQmODAmYAAQk1AAk8hvg");
	var mask_1_graphics_267 = new cjs.Graphics().p("EgISAl+QrYkOlCrDMA1SgYUQFCLCkPLWQkQLZrDFCQl/CvmFAAQlHAAlNh9g");
	var mask_1_graphics_268 = new cjs.Graphics().p("EgI5AlvQrRkekzrKMA1zgXIQEzLJkfLQQkgLSrJEzQlwCelyAAQlbAAldiMg");
	var mask_1_graphics_269 = new cjs.Graphics().p("EgJfAlfQrLkukjrQMA2TgV8QEjLQkvLJQkvLMrREjQlgCOleAAQluAAlticg");
	var mask_1_graphics_270 = new cjs.Graphics().p("EgKFAlPQrEk+kTrXMA2xgUvQETLWk+LDQlALFrWETQlQB/lMAAQmBAAl8isg");
	var mask_1_graphics_271 = new cjs.Graphics().p("EgKqAk9Qq9lNkDrdMA3OgThQEDLclOK8QlPK9rdEDQk/Bxk5AAQmUAAmLi+g");
	var mask_1_graphics_272 = new cjs.Graphics().p("EgLPAkrQq2ldjyriMA3ogSTQDzLileK0QleK2riDyQkuBkkmAAQmoAAmZjQg");
	var mask_1_graphics_273 = new cjs.Graphics().p("EgL0AkYQqtlsjjrnMA4CgREQDiLnlsKsQluKurnDiQkcBXkTAAQm9AAmnjjg");
	var mask_1_graphics_274 = new cjs.Graphics().p("EgMYAkFQqll8jSrsMA4ZgP0QDSLsl8KjQl9KmrsDSQkJBKkBAAQnRAAm0j1g");
	var mask_1_graphics_275 = new cjs.Graphics().p("EgM8AjwQqcmKjCrwMA4vgOlQDBLwmLKbQmLKdrxDCQj2A/juAAQnmAAnBkKg");
	var mask_1_graphics_276 = new cjs.Graphics().p("EgNfAjbQqUmZiwr0MA5CgNVQCwL1mZKSQmaKUr0CxQjkA1jbAAQn7AAnNkfg");
	var mask_1_graphics_277 = new cjs.Graphics().p("EgOBAjFQqLmnigr5MA5UgMDQCgL4moKJQmoKLr5CgQjPAsjIAAQoRAAnYk1g");
	var mask_1_graphics_278 = new cjs.Graphics().p("EgOjAiuQqCm1iPr8MA5kgKyQCPL7m1KAQm3KBr8CPQi8Aji0AAQooAAnilLg");
	var mask_1_graphics_279 = new cjs.Graphics().p("EgPFAiXQp3nEh/r/MA5zgJgQB+L+nEJ2QnFJ4r+B+QinAbihAAQo/AAntlig");
	var mask_1_graphics_280 = new cjs.Graphics().p("EgPmAh+QptnRhusBMA5/gIPQBuMBnSJsQnTJtsBBtQiSAViMAAQpYAAn2l7g");
	var mask_1_graphics_281 = new cjs.Graphics().p("EgQHAhlQpinfhdsDMA6KgG9QBcMDnfJiQngJjsEBcQh8APh4AAQpwAAoAmUg");
	var mask_1_graphics_282 = new cjs.Graphics().p("EgQnAhMQpYnthLsFMA6TgFrQBLMGntJWQnuJYsFBMQhmAJhjAAQqKAAoImsg");
	var mask_1_graphics_283 = new cjs.Graphics().p("EgRGAgxQpNn5g6sHMA6agEYQA6MHn6JLQn7JNsHA6QhPAGhOAAQqlAAoPnHg");
	var mask_1_graphics_284 = new cjs.Graphics().p("EgRlAgWQpCoGgpsIMA6fgDGQApMIoGJAQoIJCsIApQg4ADg4AAQrBAAoWnig");
	var mask_1_graphics_285 = new cjs.Graphics().p("AyDf6Qo2oTgYsIMA6igBzQAYMIoTI1QoVI2sIAYIhCABQreAAocn+g");
	var mask_1_graphics_286 = new cjs.Graphics().p("AyhfeQoqoggHsJMA6kgAgQAHMJogIpQohIqsIAHIgTAAQr8AAoioag");
	var mask_1_graphics_287 = new cjs.Graphics().p("EABmAn4QsHgLodotQoeorAKsJMA6kAAzQgKMIosIdQoiIUr2AAIgeAAg");
	var mask_1_graphics_288 = new cjs.Graphics().p("EAA9An2QsHgboQo5QoSo3AcsJMA6hACGQgbMIo4IQQocH4rYAAIhNgCg");
	var mask_1_graphics_289 = new cjs.Graphics().p("EAAFAnzQsGg0n+pIQoApIA0sHMA6bAD6Qg0MGpHH/QoTHRqwAAQhGAAhHgFg");
	var mask_1_graphics_290 = new cjs.Graphics().p("EgAxAnuQsFhMnspYQntpWBLsFMA6RAFsQhLMFpXHsQoIGsqLAAQhjAAhmgKg");
	var mask_1_graphics_291 = new cjs.Graphics().p("EgBnAnnQsChjnZpnQnbpmBksCMA6DAHfQhjMCpmHaQn8GIpnAAQiBAAiEgRg");
	var mask_1_graphics_292 = new cjs.Graphics().p("EgCcAneQr+h7nGp1QnIp0B8r+MA5yAJRQh7L/p0HGQnvFmpFAAQidAAiigag");
	var mask_1_graphics_293 = new cjs.Graphics().p("EgDPAnUQr7iTmyqDQm0qBCTr6MA5eALDQiTL6qBGzQnhFGokAAQi3AAjAglg");
	var mask_1_graphics_294 = new cjs.Graphics().p("EgECAnHQr1iqmeqPQmgqPCqr1MA5GAM1QiqL1qPGeQnREnoFAAQjSAAjcgyg");
	var mask_1_graphics_295 = new cjs.Graphics().p("EgEzAm6QrvjCmKqcQmLqbDBrvMA4qAOlQjBLvqbGKQnBEJnmAAQjtAAj3g/g");
	var mask_1_graphics_296 = new cjs.Graphics().p("EgFjAmqQrpjYl0qoQl3qnDYrpMA4LAQUQjYLpqnF1QmvDtnIAAQkIAAkRhPg");
	var mask_1_graphics_297 = new cjs.Graphics().p("EgGRAmZQrijwlgqyQlhqyDvriMA3pASCQjwLiqxFgQmcDSmtAAQkhAAkqhgg");
	var mask_1_graphics_298 = new cjs.Graphics().p("EgG+AmGQrakGlKq9QlMq9EGraMA3CATwQkGLaq8FKQmHC5mRAAQk8AAlChzg");
	var mask_1_graphics_299 = new cjs.Graphics().p("EgHqAlxQrRkck0rHQk2rGEcrRMA2ZAVbQkcLSrGE0QlzChl1AAQlXAAlZiIg");
	var mask_1_graphics_300 = new cjs.Graphics().p("EgIUAlbQrIkykerQQkgrQEyrHMA1tAXGQkyLIrPEeQldCLlbAAQlxAAlvieg");
	var mask_1_graphics_301 = new cjs.Graphics().p("EgI8AlEQq/lJkHrYQkKrYFJq9MA08AYvQlIK+rXEIQlGB2lAAAQmMAAmEi1g");
	var mask_1_graphics_302 = new cjs.Graphics().p("EgJ0AkgQqvlnjnrjQjqrjFnquMAz0AbBQlmKwriDnQkkBckbAAQmzAAmhjZg");
	var mask_1_graphics_303 = new cjs.Graphics().p("EgKoAj5QqfmFjHrtQjIrsGEqeMAylAdRQmEKfrrDIQj/BEj2AAQncAAm7kAg");
	var mask_1_graphics_304 = new cjs.Graphics().p("EgLZAjOQqNmhimr1Qior0GiqMMAxQAfdQmhKNr0CnQjYAvjQAAQoHAAnTkqg");
	var mask_1_graphics_305 = new cjs.Graphics().p("EgMGAihQp6m9iFr7QiHr7G+p6MAv2AhlQm+J7r6CFQixAfipAAQo0AAnolXg");
	var mask_1_graphics_306 = new cjs.Graphics().p("EgMwAhxQpmnYhjsBQhlsAHZpmMAuUAjqQnZJmr/BkQiGASiCAAQpkAAn7mHg");
	var mask_1_graphics_307 = new cjs.Graphics().p("EgNWAg/QpRn0hBsEQhEsEH0pQMAsuAlpQn0JRsDBDQhaAHhZAAQqWAAoMm4g");
	var mask_1_graphics_308 = new cjs.Graphics().p("EgN4AgJQo7oNggsGQghsFINo7MArCAnkQoNI7sFAgQgtACgtAAQrOAAoZnug");
	var mask_1_graphics_309 = new cjs.Graphics().p("EAGTAn3QsHgBojomQojolACsHQAAsGImojMApQApaQojIisEAAIgEAAg");
	var mask_1_graphics_310 = new cjs.Graphics().p("EAFfAn1QsGgjoLo9QoLo9AksGQAjsFI8oLMAnbArMQoZHprIAAQgwAAgxgCg");
	var mask_1_graphics_311 = new cjs.Graphics().p("EAEsAnvQsEhFnxpTQnypTBHsEQBEsDJTnxMAlfAs3QoLG1qSAAQhbAAhegJg");
	var mask_1_graphics_312 = new cjs.Graphics().p("EAD1AnkQsAhrnUprQnTprBsr/QBqr/JrnTMAjPAuqQn4F8pZAAQiKAAiOgUg");
	var mask_1_graphics_313 = new cjs.Graphics().p("EAC/AnVQr6iRm0qBQm1qBCSr6QCQr4KBm1MAg6AwWQniFIolAAQi2AAi9gkg");
	var mask_1_graphics_314 = new cjs.Graphics().p("EACMAnBQryi2mUqWQmVqWC3rxQC1rxKWmVMAefAx6QnJEXn0ABQjgAAjpg5g");
	var mask_1_graphics_315 = new cjs.Graphics().p("EABbAmpQrojbl0qpQlzqpDbroQDarnKplzMAcAAzWQmsDqnGAAQkKAAkThRg");
	var mask_1_graphics_316 = new cjs.Graphics().p("EAAsAmNQrcj/lSq7QlSq7EArcQD+rbK7lSMAZdA0rQmPDAmYAAQk1AAk6htg");
	var mask_1_graphics_317 = new cjs.Graphics().p("EAAAAltQrPkkkvrKQkvrLEjrNQEirPLLkvMAW1A13QltCbluAAQleAAlfiOg");
	var mask_1_graphics_318 = new cjs.Graphics().p("EgApAlIQrBlGkMrZQkLrYFHq/QFErALYkLMAULA27QlJB5lDAAQmKAAmAizg");
	var mask_1_graphics_319 = new cjs.Graphics().p("EgBQAkgQqwlpjorlQjnrkFpquQFnqvLkjoMARdA33QkjBbkZAAQm2AAmgjbg");
	var mask_1_graphics_320 = new cjs.Graphics().p("EgB1Aj0QqdmKjDrwQjDrvGLqbQGIqdLujDMAOsA4qQj5BAjwAAQnjAAm+kGg");
	var mask_1_graphics_321 = new cjs.Graphics().p("EgCWAjEQqKmridr4Qier4GrqHQGpqJL3ieMAL5A5UQjOArjFAAQoVAAnXk2g");
	var mask_1_graphics_322 = new cjs.Graphics().p("EgC1AiQQpznKh4r/Qh5r/HKpxQHJp0L+h4MAJDA51QifAZiaAAQpIAAnvlpg");
	var mask_1_graphics_323 = new cjs.Graphics().p("EgDQAhYQpdnohSsEQhSsEHopaQHnpcMDhTMAGNA6OQhwAMhsAAQqAAAoCmhg");
	var mask_1_graphics_324 = new cjs.Graphics().p("EgDpAgdQpEoFgssHQgssIIFpBQIDpEMIgsMADVA6dQg9AEg8AAQq8AAoUncg");
	var mask_1_graphics_325 = new cjs.Graphics().p("Aj+ffQoqoigGsIQgGsIIhooQIfoqMJgGMAAdA6jIgRABQr+AAohoag");
	var mask_1_graphics_326 = new cjs.Graphics().p("AleedQoOo7AgsJQAgsHI8oNQI5oOMIAgMgCbA6hQsIggoMo7g");
	var mask_1_graphics_327 = new cjs.Graphics().p("AnJdbQnxpVBGsGQBGsEJVnwQJTnyMFBGMgFTA6VQsFhGnwpUg");
	var mask_1_graphics_328 = new cjs.Graphics().p("AowcZQnUptBssCQBssAJtnSQJqnUMCBsMgILA6AQsAhsnSprg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(233).to({graphics:mask_1_graphics_233,x:200.4,y:255.6}).wait(1).to({graphics:mask_1_graphics_234,x:200.4,y:255.6}).wait(1).to({graphics:mask_1_graphics_235,x:200.4,y:255.6}).wait(1).to({graphics:mask_1_graphics_236,x:200.4,y:255.5}).wait(1).to({graphics:mask_1_graphics_237,x:200.4,y:255.5}).wait(1).to({graphics:mask_1_graphics_238,x:200.4,y:255.5}).wait(1).to({graphics:mask_1_graphics_239,x:200.4,y:255.5}).wait(1).to({graphics:mask_1_graphics_240,x:200.3,y:255.5}).wait(1).to({graphics:mask_1_graphics_241,x:200.3,y:255.4}).wait(1).to({graphics:mask_1_graphics_242,x:200.3,y:255.4}).wait(1).to({graphics:mask_1_graphics_243,x:200.3,y:255.4}).wait(1).to({graphics:mask_1_graphics_244,x:200.3,y:255.3}).wait(1).to({graphics:mask_1_graphics_245,x:200.2,y:255.3}).wait(1).to({graphics:mask_1_graphics_246,x:200.2,y:255.3}).wait(1).to({graphics:mask_1_graphics_247,x:200.2,y:255.3}).wait(1).to({graphics:mask_1_graphics_248,x:200.2,y:255.2}).wait(1).to({graphics:mask_1_graphics_249,x:200.2,y:255.2}).wait(1).to({graphics:mask_1_graphics_250,x:200.2,y:255.2}).wait(1).to({graphics:mask_1_graphics_251,x:200.2,y:255.2}).wait(1).to({graphics:mask_1_graphics_252,x:200.2,y:255.2}).wait(1).to({graphics:mask_1_graphics_253,x:200.2,y:255.2}).wait(1).to({graphics:mask_1_graphics_254,x:200.2,y:255.2}).wait(1).to({graphics:mask_1_graphics_255,x:200.2,y:255.2}).wait(1).to({graphics:mask_1_graphics_256,x:200.2,y:255.3}).wait(1).to({graphics:mask_1_graphics_257,x:200.3,y:255.3}).wait(1).to({graphics:mask_1_graphics_258,x:200.3,y:255.3}).wait(1).to({graphics:mask_1_graphics_259,x:200.3,y:255.3}).wait(1).to({graphics:mask_1_graphics_260,x:200.4,y:255.4}).wait(1).to({graphics:mask_1_graphics_261,x:200.4,y:255.4}).wait(1).to({graphics:mask_1_graphics_262,x:200.4,y:255.4}).wait(1).to({graphics:mask_1_graphics_263,x:200.4,y:255.4}).wait(1).to({graphics:mask_1_graphics_264,x:200.4,y:255.5}).wait(1).to({graphics:mask_1_graphics_265,x:200.5,y:255.5}).wait(1).to({graphics:mask_1_graphics_266,x:200.5,y:255.5}).wait(1).to({graphics:mask_1_graphics_267,x:200.5,y:255.5}).wait(1).to({graphics:mask_1_graphics_268,x:200.5,y:255.5}).wait(1).to({graphics:mask_1_graphics_269,x:200.5,y:255.5}).wait(1).to({graphics:mask_1_graphics_270,x:200.5,y:255.5}).wait(1).to({graphics:mask_1_graphics_271,x:200.5,y:255.5}).wait(1).to({graphics:mask_1_graphics_272,x:200.5,y:255.5}).wait(1).to({graphics:mask_1_graphics_273,x:200.5,y:255.5}).wait(1).to({graphics:mask_1_graphics_274,x:200.4,y:255.4}).wait(1).to({graphics:mask_1_graphics_275,x:200.4,y:255.4}).wait(1).to({graphics:mask_1_graphics_276,x:200.4,y:255.4}).wait(1).to({graphics:mask_1_graphics_277,x:200.4,y:255.4}).wait(1).to({graphics:mask_1_graphics_278,x:200.4,y:255.3}).wait(1).to({graphics:mask_1_graphics_279,x:200.3,y:255.3}).wait(1).to({graphics:mask_1_graphics_280,x:200.3,y:255.3}).wait(1).to({graphics:mask_1_graphics_281,x:200.3,y:255.3}).wait(1).to({graphics:mask_1_graphics_282,x:200.3,y:255.2}).wait(1).to({graphics:mask_1_graphics_283,x:200.3,y:255.2}).wait(1).to({graphics:mask_1_graphics_284,x:200.2,y:255.2}).wait(1).to({graphics:mask_1_graphics_285,x:200.2,y:255.2}).wait(1).to({graphics:mask_1_graphics_286,x:200.2,y:255.2}).wait(1).to({graphics:mask_1_graphics_287,x:200.2,y:255.2}).wait(1).to({graphics:mask_1_graphics_288,x:200.1,y:255.2}).wait(1).to({graphics:mask_1_graphics_289,x:200,y:255.2}).wait(1).to({graphics:mask_1_graphics_290,x:199.7,y:255.2}).wait(1).to({graphics:mask_1_graphics_291,x:199.4,y:255.2}).wait(1).to({graphics:mask_1_graphics_292,x:199,y:255.2}).wait(1).to({graphics:mask_1_graphics_293,x:198.5,y:255.3}).wait(1).to({graphics:mask_1_graphics_294,x:197.9,y:255.3}).wait(1).to({graphics:mask_1_graphics_295,x:197.2,y:255.3}).wait(1).to({graphics:mask_1_graphics_296,x:196.4,y:255.3}).wait(1).to({graphics:mask_1_graphics_297,x:195.6,y:255.3}).wait(1).to({graphics:mask_1_graphics_298,x:194.6,y:255.3}).wait(1).to({graphics:mask_1_graphics_299,x:193.6,y:255.3}).wait(1).to({graphics:mask_1_graphics_300,x:192.5,y:255.3}).wait(1).to({graphics:mask_1_graphics_301,x:191.3,y:255.3}).wait(1).to({graphics:mask_1_graphics_302,x:189.5,y:255.3}).wait(1).to({graphics:mask_1_graphics_303,x:187.5,y:255.3}).wait(1).to({graphics:mask_1_graphics_304,x:185.4,y:255.2}).wait(1).to({graphics:mask_1_graphics_305,x:183.2,y:255.2}).wait(1).to({graphics:mask_1_graphics_306,x:180.7,y:255.2}).wait(1).to({graphics:mask_1_graphics_307,x:178.2,y:255.1}).wait(1).to({graphics:mask_1_graphics_308,x:175.5,y:255.1}).wait(1).to({graphics:mask_1_graphics_309,x:172.6,y:255.1}).wait(1).to({graphics:mask_1_graphics_310,x:169.7,y:255.1}).wait(1).to({graphics:mask_1_graphics_311,x:166.6,y:255.2}).wait(1).to({graphics:mask_1_graphics_312,x:163,y:255.2}).wait(1).to({graphics:mask_1_graphics_313,x:159.3,y:255.3}).wait(1).to({graphics:mask_1_graphics_314,x:155.4,y:255.4}).wait(1).to({graphics:mask_1_graphics_315,x:151.4,y:255.4}).wait(1).to({graphics:mask_1_graphics_316,x:147.4,y:255.4}).wait(1).to({graphics:mask_1_graphics_317,x:143.2,y:255.5}).wait(1).to({graphics:mask_1_graphics_318,x:138.9,y:255.5}).wait(1).to({graphics:mask_1_graphics_319,x:134.6,y:255.5}).wait(1).to({graphics:mask_1_graphics_320,x:130.1,y:255.4}).wait(1).to({graphics:mask_1_graphics_321,x:125.7,y:255.4}).wait(1).to({graphics:mask_1_graphics_322,x:121.1,y:255.3}).wait(1).to({graphics:mask_1_graphics_323,x:116.6,y:255.3}).wait(1).to({graphics:mask_1_graphics_324,x:112,y:255.3}).wait(1).to({graphics:mask_1_graphics_325,x:107.4,y:255.3}).wait(1).to({graphics:mask_1_graphics_326,x:110.5,y:255.2}).wait(1).to({graphics:mask_1_graphics_327,x:115.1,y:254.9}).wait(1).to({graphics:mask_1_graphics_328,x:119.7,y:254.4}).wait(212));

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(20,1,1).p("ALABFQAtGVkJDQQkJDRlSgqQlTgpidkOQickOBlkuQBmkuDvijQDviiF+jCQFuIJAuGTg");
	this.shape_2.setTransform(194.1,344.1);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(233).to({_off:false},0).wait(307));

	// Layer 7 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_130 = new cjs.Graphics().p("A2VS8QiRr8G1qBQG1qDL6iQQL6iSKCG1Mgg8AwcQqCm1iRr6g");
	var mask_2_graphics_131 = new cjs.Graphics().p("A22SVQh6sAHHp0QHIp1L+h5QL/h8J1HIMgiYAvcQp1nIh6r+g");
	var mask_2_graphics_132 = new cjs.Graphics().p("A3VRvQhjsDHapnQHbpnMBhiQMChlJnHbMgjxAuYQpnnahksBg");
	var mask_2_graphics_133 = new cjs.Graphics().p("A3xRJQhNsGHtpYQHspZMEhLQMEhOJZHtMglIAtTQpZnthMsDg");
	var mask_2_graphics_134 = new cjs.Graphics().p("A4LQjQg2sHH+pJQH+pKMGg1QMGg3JKH/MgmdAsLQpKn+g1sGg");
	var mask_2_graphics_135 = new cjs.Graphics().p("A4jP+QgfsJIQo5QIPo7MHgdQMHggI7IPMgnwArBQo7oPgesHg");
	var mask_2_graphics_136 = new cjs.Graphics().p("A45PaQgHsKIgopQIgorMHgGQMIgJIrIgMgpBAp0QoqoggIsHg");
	var mask_2_graphics_137 = new cjs.Graphics().p("A5MO2QAPsJIxoaQIwoaMHARQMIAOIbIxMgqQAokQoaowAQsHg");
	var mask_2_graphics_138 = new cjs.Graphics().p("A5dOTQAnsJJAoIQJAoKMGAoQMIAmIJJAMgrbAnTQoKpAAnsGg");
	var mask_2_graphics_139 = new cjs.Graphics().p("A5sNwQA+sHJPn3QJQn4MEA/QMGA8H4JQMgskAl/Qn4pPA9sFg");
	var mask_2_graphics_140 = new cjs.Graphics().p("A54NOQBVsFJenlQJenmMDBWQMDBTHnJeMgtsAkqQnnpeBVsDg");
	var mask_2_graphics_141 = new cjs.Graphics().p("A6CMtQBssCJsnTQJsnUMABsQMBBrHUJsMguwAjSQnUptBrr/g");
	var mask_2_graphics_142 = new cjs.Graphics().p("A6JMMQCCr+J6nBQJ6nBL8CEQL9CBHCJ5MgvyAh4QnCp6CDr8g");
	var mask_2_graphics_143 = new cjs.Graphics().p("A6PLsQCar5KGmuQKHmuL4CaQL6CYGuKGMgwxAgcQmvqHCZr4g");
	var mask_2_graphics_144 = new cjs.Graphics().p("A6SLNQCwr0KUmbQKTmbLzCxQL0CvGbKSMgxtAe/QmbqUCvrzg");
	var mask_2_graphics_145 = new cjs.Graphics().p("A6SKvQDGrvKfmHQKgmHLtDHQLvDFGHKfMgynAdfQmHqfDGrug");
	var mask_2_graphics_146 = new cjs.Graphics().p("A6RKSQDdrpKqlzQKrlzLnDeQLpDbFzKqMgzeAb+QlzqrDcrng");
	var mask_2_graphics_147 = new cjs.Graphics().p("A6NJ1QDzrhK1lfQK1leLhDzQLhDxFfK1Mg0SAabQleq1Dyrhg");
	var mask_2_graphics_148 = new cjs.Graphics().p("A6HJaQEIraLAlKQK/lKLZEJQLbEHFJK/Mg1CAY3QlKq/EIrZg");
	var mask_2_graphics_149 = new cjs.Graphics().p("A5/I/QEerSLJk1QLIk0LSEeQLSEdE1LIMg1wAXSQk1rJEdrRg");
	var mask_2_graphics_150 = new cjs.Graphics().p("A50IlQEzrJLSkfQLRkgLJE0QLJEzEfLQMg2aAVrQkgrSEzrIg");
	var mask_2_graphics_151 = new cjs.Graphics().p("A5nIMQFIq/LakKQLZkKK/FJQLBFHEJLaMg3CAUCQkKraFIq/g");
	var mask_2_graphics_152 = new cjs.Graphics().p("A5YH1QFdq2Lij0QLgj0K1FeQK2FbD0LiMg3nASZQj0riFdq0g");
	var mask_2_graphics_153 = new cjs.Graphics().p("A5HHeQFyqrLojeQLojeKqFyQKsFwDdLoMg4IAQvQjeroFxqqg");
	var mask_2_graphics_154 = new cjs.Graphics().p("A40HIQGGqgLvjHQLujIKfGGQKgGEDILvMg4nAPDQjIruGFqfg");
	var mask_2_graphics_155 = new cjs.Graphics().p("A4eGzQGaqTL0iyQLzixKUGaQKUGYCxL0Mg5CANXQixr0GZqTg");
	var mask_2_graphics_156 = new cjs.Graphics().p("A4GGgQGtqIL5iaQL5ibKGGuQKIGqCbL6Mg5aALqQiar5GsqGg");
	var mask_2_graphics_157 = new cjs.Graphics().p("A3sGNQHAp6L+iEQL8iEJ6HAQJ7G+CEL+Mg5vAJ9QiEr+HAp5g");
	var mask_2_graphics_158 = new cjs.Graphics().p("A3QF7QHTpsMBhtQMAhtJsHSQJtHRBuMBMg6AAIPQhtsBHSpsg");
	var mask_2_graphics_159 = new cjs.Graphics().p("A2yFrQHlpeMEhXQMDhWJeHlQJfHjBXMEMg6OAGhQhWsEHkpeg");
	var mask_2_graphics_160 = new cjs.Graphics().p("A2SFcQH4pQMGg/QMFg/JPH2QJRH1A/MHMg6YAExQg/sGH1pPg");
	var mask_2_graphics_161 = new cjs.Graphics().p("A1vFOQIIpBMIgoQMHgoJAIHQJBIHApMIMg6gADCQgosIIHo/g");
	var mask_2_graphics_162 = new cjs.Graphics().p("A1KFBQIZoxMJgRQMIgRIwIYQIxIYASMJMg6kABSQgRsIIYowg");
	var mask_2_graphics_163 = new cjs.Graphics().p("A9SZPQAGsJIpogQIpogMIAGQMJAGIgIpQIiIogGMJg");
	var mask_2_graphics_164 = new cjs.Graphics().p("A9RX8QAdsJI4oPQI6oQMHAdQMJAdIPI5QIRI4gdMJg");
	var mask_2_graphics_165 = new cjs.Graphics().p("A9QWoQA0sHJIn+QJJn/MGA0QMHA1H/JIQH/JIg0MHg");
	var mask_2_graphics_166 = new cjs.Graphics().p("A9OVVQBLsFJXntQJYntMEBLQMGBLHsJXQHuJXhLMFg");
	var mask_2_graphics_167 = new cjs.Graphics().p("A9LUCQBisDJlnaQJnnbMBBiQMDBiHaJlQHcJlhiMDg");
	var mask_2_graphics_168 = new cjs.Graphics().p("A9ISvQB5sAJznHQJ1nJL+B5QMAB5HIJzQHJJzh5L/g");
	var mask_2_graphics_169 = new cjs.Graphics().p("A9ERwQCKr9J9m5QJ/m7L8CLQL8CKG5J+QG8J9iLL9g");
	var mask_2_graphics_170 = new cjs.Graphics().p("A9AQxQCbr6KHmqQKJmsL4CcQL5CcGrKHQGtKHicL6g");
	var mask_2_graphics_171 = new cjs.Graphics().p("A88PyQCtr2KRmbQKSmdL0CtQL2CtGcKRQGdKRitL2g");
	var mask_2_graphics_172 = new cjs.Graphics().p("A83OzQC+rxKamMQKcmOLwC+QLxC/GNKaQGOKai+Lxg");
	var mask_2_graphics_173 = new cjs.Graphics().p("A8yN1QDPrsKjl9QKll/LrDQQLtDPF9KjQGAKjjQLtg");
	var mask_2_graphics_174 = new cjs.Graphics().p("A8sM4QDgroKsltQKtlwLmDhQLoDgFuKsQFwKsjhLog");
	var mask_2_graphics_175 = new cjs.Graphics().p("A8mL6QDxriK0leQK1lfLiDxQLiDyFeK0QFgK0jxLig");
	var mask_2_graphics_176 = new cjs.Graphics().p("A8fK+QECrcK7lPQK+lQLbEDQLdECFOK8QFQK8kCLcg");
	var mask_2_graphics_177 = new cjs.Graphics().p("A8YKBQETrVLDk/QLFlALVETQLXETE+LDQFALEkTLWg");
	var mask_2_graphics_178 = new cjs.Graphics().p("A8IJFQEjrPLKkuQLMkwLPEkQLQEkEuLKQEwLKkjLQg");
	var mask_2_graphics_179 = new cjs.Graphics().p("A74IKQE0rILRkeQLSkfLJE0QLJE0EeLRQEfLRk0LJg");
	var mask_2_graphics_180 = new cjs.Graphics().p("A7mHPQFErBLXkNQLYkOLCFEQLCFEENLXQEPLXlELDg");
	var mask_2_graphics_181 = new cjs.Graphics().p("A7UGVQFUq5Ldj9QLej+K7FVQK6FUD8LdQD/LdlVK7g");
	var mask_2_graphics_182 = new cjs.Graphics().p("A7AFcQFkqyLijsQLjjsKzFkQKzFkDrLiQDtLjlkKzg");
	var mask_2_graphics_183 = new cjs.Graphics().p("A6sEjQFzqpLojbQLpjcKqF0QKqFzDbLoQDcLplzKqg");
	var mask_2_graphics_184 = new cjs.Graphics().p("A6XDrQGDqgLsjLQLujKKiGDQKhGDDKLtQDLLtmDKig");
	var mask_2_graphics_185 = new cjs.Graphics().p("A6BC0QGSqYLxi5QLyi5KZGSQKYGTC4LxQC7LxmTKZg");
	var mask_2_graphics_186 = new cjs.Graphics().p("A5qB9QGhqOL1ioQL2ioKPGiQKPGhCnL1QCpL2mhKPg");
	var mask_2_graphics_187 = new cjs.Graphics().p("A5TBIQGxqFL4iWQL6iXKFGwQKGGwCVL5QCYL6mwKFg");
	var mask_2_graphics_188 = new cjs.Graphics().p("A46ATQG/p7L7iFQL9iFJ8G/QJ7G+CEL9QCHL8m/J8g");
	var mask_2_graphics_189 = new cjs.Graphics().p("A4hghQHNpxL/hzQMAh0JxHNQJxHNBzL/QB0MAnNJxg");
	var mask_2_graphics_190 = new cjs.Graphics().p("A4HhUQHcpmMBhiQMChiJmHbQJnHbBhMCQBjMCncJmg");
	var mask_2_graphics_191 = new cjs.Graphics().p("A3siGQHppcMDhQQMFhRJbHqQJbHoBQMEQBSMFnqJbg");
	var mask_2_graphics_192 = new cjs.Graphics().p("A3Qi4QH3pQMEg+QMGg/JQH3QJQH2A+MGQBAMFn3JQg");
	var mask_2_graphics_193 = new cjs.Graphics().p("A20joQIEpEMGguQMHgtJFIFQJEIDAsMHQAvMHoFJFg");
	var mask_2_graphics_194 = new cjs.Graphics().p("A2XkYQIRo4MHgbQMIgcI5ISQI4IQAaMIQAdMIoSI4g");
	var mask_2_graphics_195 = new cjs.Graphics().p("A16lGQIfosMHgKQMIgKItIfQIsIdAJMIQAKMJoeIsg");
	var mask_2_graphics_196 = new cjs.Graphics().p("A1blzQIrogMHAIQMIAIIgIrQIgIqgJMIQgHMIorIgg");
	var mask_2_graphics_197 = new cjs.Graphics().p("A09mgQI4oTMGAaQMJAaISI3QITI2gaMIQgZMIo3ITg");
	var mask_2_graphics_198 = new cjs.Graphics().p("A0dnLQJDoGMFArQMIAsIGJDQIGJCgsMHQgrMHpDIGg");
	var mask_2_graphics_199 = new cjs.Graphics().p("Az9n2QJPn4MEA9QMHA9H4JPQH5JOg/MGQg8MGpPH4g");
	var mask_2_graphics_200 = new cjs.Graphics().p("AzdofQJbnrMCBPQMFBPHrJaQHrJZhQMFQhNMEpbHrg");
	var mask_2_graphics_201 = new cjs.Graphics().p("Ay7pHQJlndMABhQMEBgHdJlQHdJlhiMCQhfMCplHdg");
	var mask_2_graphics_202 = new cjs.Graphics().p("AyapuQJxnOL9BxQMBByHPJwQHPJvhzMAQhxMApwHPg");
	var mask_2_graphics_203 = new cjs.Graphics().p("Ax3qTQJ6nBL7CEQL/CDHAJ7QHAJ5iEL9QiCL9p7HBg");
	var mask_2_graphics_204 = new cjs.Graphics().p("AxUq4QKEmyL4CVQL7CVGyKFQGyKDiWL6QiUL6qEGyg");
	var mask_2_graphics_205 = new cjs.Graphics().p("AwxrbQKPmjL0CmQL3CmGjKPQGjKNinL2QilL3qOGjg");
	var mask_2_graphics_206 = new cjs.Graphics().p("AwNr9QKYmULwC3QL0C4GUKYQGUKWi5LyQi2LzqYGUg");
	var mask_2_graphics_207 = new cjs.Graphics().p("AvoseQKhmFLsDJQLvDJGEKgQGFKgjKLuQjHLuqhGFg");
	var mask_2_graphics_208 = new cjs.Graphics().p("AvDs9QKpl2LoDaQLqDaF1KpQF1KpjaLpQjZLpqqF1g");
	var mask_2_graphics_209 = new cjs.Graphics().p("AudtcQKxllLiDqQLlDrFmKyQFmKxjsLjQjqLlqxFlg");
	var mask_2_graphics_210 = new cjs.Graphics().p("At3t4QK5lWLdD7QLfD8FWK6QFWK4j9LeQj6Lfq6FWg");
	var mask_2_graphics_211 = new cjs.Graphics().p("AtRuUQLClGLWEMQLaENFFLBQFGLAkNLYQkLLZrCFGg");
	var mask_2_graphics_212 = new cjs.Graphics().p("AsquuQLJk2LQEcQLTEeE2LHQE1LJkdLSQkcLSrJE2g");
	var mask_2_graphics_213 = new cjs.Graphics().p("AsCvHQLPkmLKEtQLMEuElLOQEmLQkvLLQksLMrPElg");
	var mask_2_graphics_214 = new cjs.Graphics().p("ArbvfQLWkVLDE9QLFE+EVLVQEVLWk/LEQk8LFrWEVg");
	var mask_2_graphics_215 = new cjs.Graphics().p("Aqyv1QLbkEK8FNQK+FOEELbQEELclOK9QlNK9rcEEg");
	var mask_2_graphics_216 = new cjs.Graphics().p("AqKwKQLhjzK0FdQK3FeDzLhQDzLileK0QldK2riDzg");
	var mask_2_graphics_217 = new cjs.Graphics().p("AphwdQLmjjKtFtQKuFuDiLmQDiLnluKtQlsKtrnDjg");
	var mask_2_graphics_218 = new cjs.Graphics().p("Ao4wvQLsjSKjF9QKmF9DRLrQDSLsl+KkQl8KlrsDSg");
	var mask_2_graphics_219 = new cjs.Graphics().p("AoOxAQLwjAKbGLQKcGNDALwQDBLxmNKbQmMKcrwDAg");
	var mask_2_graphics_220 = new cjs.Graphics().p("AnkxPQL0ivKRGbQKUGbCvL0QCvL1mcKSQmbKTr1Cvg");
	var mask_2_graphics_221 = new cjs.Graphics().p("Am6xdQL4ieKIGqQKKGrCdL4QCeL4mrKJQmqKJr4Ceg");
	var mask_2_graphics_222 = new cjs.Graphics().p("AmQxpQL7iNJ+G5QKAG5CNL7QCML9m6J+Qm4KAr8CMg");
	var mask_2_graphics_223 = new cjs.Graphics().p("Allx0QL+h7J0HHQJ1HIB7L+QB7L/nIJ0QnHJ2r/B7g");
	var mask_2_graphics_224 = new cjs.Graphics().p("Ak7x+QMBhpJpHVQJrHWBqMBQBpMCnXJqQnUJqsCBqg");
	var mask_2_graphics_225 = new cjs.Graphics().p("AkQyGQMDhXJeHjQJhHkBXMDQBYMEnlJfQniJgsEBXg");
	var mask_2_graphics_226 = new cjs.Graphics().p("AjlyMQMFhGJTHxQJVHyBGMEQBGMGnyJUQnxJVsGBFg");
	var mask_2_graphics_227 = new cjs.Graphics().p("Ai6yRQMGg0JIH+QJJH/A0MGQA1MIoAJIQn+JJsHA0g");
	var mask_2_graphics_228 = new cjs.Graphics().p("AiQyVQMIgiI8ILQI9INAjMHQAiMIoMI8QoMI+sIAig");
	var mask_2_graphics_229 = new cjs.Graphics().p("AhlyXQMIgRIwIYQIyIaAQMIQARMJoaIwQoYIxsIARg");
	var mask_2_graphics_230 = new cjs.Graphics().p("EgA+AoNMAAEg6lQMIABIkIlQIlIngBMIQgBMIomIkQokIksHAAIgCAAg");
	var mask_2_graphics_231 = new cjs.Graphics().p("EgBpAoNMABag6kQMIASIXIyQIYIygTMIQgSMJozIXQofIGrmAAIg0AAg");
	var mask_2_graphics_232 = new cjs.Graphics().p("EgCUAoLMACvg6hQMIAlIKI9QILI+gkMIQglMIo/IKQoYHprIAAQgyAAgygCg");
	var mask_2_graphics_233 = new cjs.Graphics().p("EgC/AoIMAEEg6bQMHA2H9JJQH+JKg2MHQg2MHpLH8QoRHOqrAAQhJAAhKgGg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(130).to({graphics:mask_2_graphics_130,x:134.6,y:241.1}).wait(1).to({graphics:mask_2_graphics_131,x:136.9,y:239.5}).wait(1).to({graphics:mask_2_graphics_132,x:139.1,y:237.8}).wait(1).to({graphics:mask_2_graphics_133,x:141.4,y:236.1}).wait(1).to({graphics:mask_2_graphics_134,x:143.5,y:234.3}).wait(1).to({graphics:mask_2_graphics_135,x:145.6,y:232.4}).wait(1).to({graphics:mask_2_graphics_136,x:147.6,y:230.5}).wait(1).to({graphics:mask_2_graphics_137,x:149.6,y:228.5}).wait(1).to({graphics:mask_2_graphics_138,x:151.4,y:226.5}).wait(1).to({graphics:mask_2_graphics_139,x:153.3,y:224.4}).wait(1).to({graphics:mask_2_graphics_140,x:155,y:222.3}).wait(1).to({graphics:mask_2_graphics_141,x:156.7,y:220.1}).wait(1).to({graphics:mask_2_graphics_142,x:158.3,y:217.8}).wait(1).to({graphics:mask_2_graphics_143,x:159.8,y:215.5}).wait(1).to({graphics:mask_2_graphics_144,x:161.3,y:213.2}).wait(1).to({graphics:mask_2_graphics_145,x:162.7,y:210.8}).wait(1).to({graphics:mask_2_graphics_146,x:164,y:208.4}).wait(1).to({graphics:mask_2_graphics_147,x:165.3,y:205.9}).wait(1).to({graphics:mask_2_graphics_148,x:166.5,y:203.4}).wait(1).to({graphics:mask_2_graphics_149,x:167.6,y:200.9}).wait(1).to({graphics:mask_2_graphics_150,x:168.7,y:198.3}).wait(1).to({graphics:mask_2_graphics_151,x:169.7,y:195.7}).wait(1).to({graphics:mask_2_graphics_152,x:170.6,y:193.1}).wait(1).to({graphics:mask_2_graphics_153,x:171.5,y:190.4}).wait(1).to({graphics:mask_2_graphics_154,x:172.2,y:187.7}).wait(1).to({graphics:mask_2_graphics_155,x:172.9,y:185}).wait(1).to({graphics:mask_2_graphics_156,x:173.5,y:182.3}).wait(1).to({graphics:mask_2_graphics_157,x:174.1,y:179.6}).wait(1).to({graphics:mask_2_graphics_158,x:174.5,y:176.8}).wait(1).to({graphics:mask_2_graphics_159,x:174.9,y:174.1}).wait(1).to({graphics:mask_2_graphics_160,x:175.2,y:171.3}).wait(1).to({graphics:mask_2_graphics_161,x:175.4,y:168.5}).wait(1).to({graphics:mask_2_graphics_162,x:175.5,y:165.7}).wait(1).to({graphics:mask_2_graphics_163,x:175.5,y:164.4}).wait(1).to({graphics:mask_2_graphics_164,x:175.6,y:167.2}).wait(1).to({graphics:mask_2_graphics_165,x:175.8,y:170}).wait(1).to({graphics:mask_2_graphics_166,x:176,y:172.7}).wait(1).to({graphics:mask_2_graphics_167,x:176.3,y:175.5}).wait(1).to({graphics:mask_2_graphics_168,x:176.7,y:178.2}).wait(1).to({graphics:mask_2_graphics_169,x:177.1,y:180.4}).wait(1).to({graphics:mask_2_graphics_170,x:177.5,y:182.5}).wait(1).to({graphics:mask_2_graphics_171,x:178,y:184.6}).wait(1).to({graphics:mask_2_graphics_172,x:178.5,y:186.6}).wait(1).to({graphics:mask_2_graphics_173,x:179.1,y:188.7}).wait(1).to({graphics:mask_2_graphics_174,x:179.7,y:190.8}).wait(1).to({graphics:mask_2_graphics_175,x:180.3,y:192.8}).wait(1).to({graphics:mask_2_graphics_176,x:181,y:194.8}).wait(1).to({graphics:mask_2_graphics_177,x:181.7,y:196.8}).wait(1).to({graphics:mask_2_graphics_178,x:181.7,y:198.8}).wait(1).to({graphics:mask_2_graphics_179,x:181.7,y:200.8}).wait(1).to({graphics:mask_2_graphics_180,x:181.7,y:202.8}).wait(1).to({graphics:mask_2_graphics_181,x:181.7,y:204.7}).wait(1).to({graphics:mask_2_graphics_182,x:181.7,y:206.6}).wait(1).to({graphics:mask_2_graphics_183,x:181.7,y:208.5}).wait(1).to({graphics:mask_2_graphics_184,x:181.7,y:210.4}).wait(1).to({graphics:mask_2_graphics_185,x:181.6,y:212.2}).wait(1).to({graphics:mask_2_graphics_186,x:181.6,y:214}).wait(1).to({graphics:mask_2_graphics_187,x:181.6,y:215.8}).wait(1).to({graphics:mask_2_graphics_188,x:181.5,y:217.6}).wait(1).to({graphics:mask_2_graphics_189,x:181.5,y:219.3}).wait(1).to({graphics:mask_2_graphics_190,x:181.5,y:221}).wait(1).to({graphics:mask_2_graphics_191,x:181.5,y:222.7}).wait(1).to({graphics:mask_2_graphics_192,x:181.4,y:224.3}).wait(1).to({graphics:mask_2_graphics_193,x:181.4,y:226}).wait(1).to({graphics:mask_2_graphics_194,x:181.4,y:227.5}).wait(1).to({graphics:mask_2_graphics_195,x:181.4,y:229.1}).wait(1).to({graphics:mask_2_graphics_196,x:181.4,y:230.6}).wait(1).to({graphics:mask_2_graphics_197,x:181.4,y:232.1}).wait(1).to({graphics:mask_2_graphics_198,x:181.4,y:233.5}).wait(1).to({graphics:mask_2_graphics_199,x:181.4,y:234.9}).wait(1).to({graphics:mask_2_graphics_200,x:181.4,y:236.3}).wait(1).to({graphics:mask_2_graphics_201,x:181.5,y:237.6}).wait(1).to({graphics:mask_2_graphics_202,x:181.5,y:238.9}).wait(1).to({graphics:mask_2_graphics_203,x:181.5,y:240.2}).wait(1).to({graphics:mask_2_graphics_204,x:181.6,y:241.4}).wait(1).to({graphics:mask_2_graphics_205,x:181.6,y:242.6}).wait(1).to({graphics:mask_2_graphics_206,x:181.6,y:243.7}).wait(1).to({graphics:mask_2_graphics_207,x:181.6,y:244.8}).wait(1).to({graphics:mask_2_graphics_208,x:181.6,y:245.8}).wait(1).to({graphics:mask_2_graphics_209,x:181.7,y:246.8}).wait(1).to({graphics:mask_2_graphics_210,x:181.7,y:247.8}).wait(1).to({graphics:mask_2_graphics_211,x:181.7,y:248.7}).wait(1).to({graphics:mask_2_graphics_212,x:181.7,y:249.6}).wait(1).to({graphics:mask_2_graphics_213,x:181.7,y:250.4}).wait(1).to({graphics:mask_2_graphics_214,x:181.7,y:251.2}).wait(1).to({graphics:mask_2_graphics_215,x:181.7,y:251.9}).wait(1).to({graphics:mask_2_graphics_216,x:181.7,y:252.6}).wait(1).to({graphics:mask_2_graphics_217,x:181.6,y:253.3}).wait(1).to({graphics:mask_2_graphics_218,x:181.6,y:253.9}).wait(1).to({graphics:mask_2_graphics_219,x:181.6,y:254.4}).wait(1).to({graphics:mask_2_graphics_220,x:181.6,y:254.9}).wait(1).to({graphics:mask_2_graphics_221,x:181.6,y:255.4}).wait(1).to({graphics:mask_2_graphics_222,x:181.5,y:255.8}).wait(1).to({graphics:mask_2_graphics_223,x:181.5,y:256.2}).wait(1).to({graphics:mask_2_graphics_224,x:181.5,y:256.5}).wait(1).to({graphics:mask_2_graphics_225,x:181.5,y:256.7}).wait(1).to({graphics:mask_2_graphics_226,x:181.4,y:256.9}).wait(1).to({graphics:mask_2_graphics_227,x:181.4,y:257.1}).wait(1).to({graphics:mask_2_graphics_228,x:181.4,y:257.2}).wait(1).to({graphics:mask_2_graphics_229,x:181.4,y:257.3}).wait(1).to({graphics:mask_2_graphics_230,x:181.4,y:257.3}).wait(1).to({graphics:mask_2_graphics_231,x:181.4,y:257.3}).wait(1).to({graphics:mask_2_graphics_232,x:181.4,y:257.3}).wait(1).to({graphics:mask_2_graphics_233,x:181.4,y:257.4}).wait(307));

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(20,1,1).p("ACUtXQFtIJAuGTQAuGVkKDQQkJDRlSgqQivgVh+hS");
	this.shape_3.setTransform(208.6,344.1);
	this.shape_3._off = true;

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(130).to({_off:false},0).wait(410));

	// Layer 3 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_9 = new cjs.Graphics().p("AJ9ejQsHgaoSo4MAq0gn+QISI4gbMGQgaMJo4ISQocH4rXAAIhNgBg");
	var mask_3_graphics_10 = new cjs.Graphics().p("AK8ekQsHAAololMApcgpZQIlImAAMGQgBMJomIlQokIksFAAIgFAAg");
	var mask_3_graphics_11 = new cjs.Graphics().p("ApDWqMAoCgqwQI3ITAZMGQAaMIoTI4QoTI3sHAZIhKABQrZAAocn6g");
	var mask_3_graphics_12 = new cjs.Graphics().p("AoUXUMAmkgsFQJIIAA0MFQA0MHoAJJQn/JIsHAzQhIAFhHAAQqtAAoSnQg");
	var mask_3_graphics_13 = new cjs.Graphics().p("AnkX9MAlDgtXQJaHsBOMDQBNMEnrJaQnsJasEBMQhrALhnAAQqFAAoGmng");
	var mask_3_graphics_14 = new cjs.Graphics().p("AmzYjMAjggukQJqHXBoMAQBoMBnXJqQnXJqsCBnQiMATiHAAQpeAAn5mCg");
	var mask_3_graphics_15 = new cjs.Graphics().p("AmAZIMAh6gvvQJ6HCCBL8QCCL+nCJ5QnCJ5r+CBQisAdilAAQo6AAnqldg");
	var mask_3_graphics_16 = new cjs.Graphics().p("AlMZrMAgSgw2QKIGsCbL4QCbL4msKIQmsKIr5CbQjLApjDAAQoXAAnak6g");
	var mask_3_graphics_17 = new cjs.Graphics().p("AkXaNMAengx6QKWGWC1LyQC1LzmWKWQmXKWrzCzQjpA5jgAAQn2AAnIkZg");
	var mask_3_graphics_18 = new cjs.Graphics().p("AjhatMAc7gy7QKjGADOLrQDOLtmAKjQl/KjrtDNQkGBJj9AAQnWAAm1j5g");
	var mask_3_graphics_19 = new cjs.Graphics().p("AiqbLMAbMgz3QKwFpDnLkQDnLklpKwQloKwrmDmQkhBbkaAAQm2AAmijbg");
	var mask_3_graphics_20 = new cjs.Graphics().p("AhybnMAZcg0wQK7FSEALbQEALdlRK8QlSK7rdD/Qk8Bvk3AAQmYAAmMi/g");
	var mask_3_graphics_21 = new cjs.Graphics().p("Ag4cBMAXog1kQLHE5EYLTQEZLUk6LGQk6LHrUEXQlWCFlTAAQl6AAl1ilg");
	var mask_3_graphics_22 = new cjs.Graphics().p("AABcZMAV1g2VQLREiEwLJQExLJkhLRQkiLRrKEvQlvCdlwAAQldAAleiNg");
	var mask_3_graphics_23 = new cjs.Graphics().p("AA8cwMAUAg3CQLaEJFHK+QFJLAkJLZQkJLarAFIQmFC2mOAAQlAAAlFh2g");
	var mask_3_graphics_24 = new cjs.Graphics().p("AB4dEMASIg3rQLjDxFfKzQFgK0jwLiQjxLiq0FfQmbDSmsAAQkjAAkrhig");
	var mask_3_graphics_25 = new cjs.Graphics().p("AC0dXMAQQg4QQLqDYF3KmQF3KojXLqQjYLqqoF2QmvDvnLAAQkHAAkQhPg");
	var mask_3_graphics_26 = new cjs.Graphics().p("ADxdoMAOXg4xQLwC+GNKaQGPKbi/LwQi+LxqbGMQnDEOnqAAQjqAAj0g9g");
	var mask_3_graphics_27 = new cjs.Graphics().p("AEvd2MAMcg5NQL2ClGkKMQGkKNilL2QilL3qNGjQnUEuoMAAQjNAAjWgvg");
	var mask_3_graphics_28 = new cjs.Graphics().p("AFueDMAKfg5mQL8CLG5J9QG6J/iLL7QiLL8p/G5QnlFQouAAQiwAAi2ghg");
	var mask_3_graphics_29 = new cjs.Graphics().p("AGseOMAIjg57QMAByHOJuQHQJvhyL/QhxMBpvHNQn0F1pTAAQiRAAiXgWg");
	var mask_3_graphics_30 = new cjs.Graphics().p("AHreWMAGmg6LQMEBYHiJeQHkJghXMCQhYMEpfHiQoCGap4AAQhyAAh2gNg");
	var mask_3_graphics_31 = new cjs.Graphics().p("AIqecMAEpg6WQMGA9H3JOQH4JPg+MFQg9MGpPH2QoOHCqgAAQhSAAhUgHg");
	var mask_3_graphics_32 = new cjs.Graphics().p("AJqegMACqg6eQMIAjIKI9QIMI9gkMHQgjMIo+IKQoYHrrKAAQgwAAgxgDg");
	var mask_3_graphics_33 = new cjs.Graphics().p("AKpeiMAAsg6hQMJAJIdIqQIfIsgKMHQgJMJosIdQohIVr3AAIgaAAg");
	var mask_3_graphics_34 = new cjs.Graphics().p("AKW7/QMIgRIwIYQIxIZARMHQARMJoZIvQoYIxsIARg");
	var mask_3_graphics_35 = new cjs.Graphics().p("AJX77QMHgrJCIEQJCIGArMIQArMGoGJBQoEJDsHArg");
	var mask_3_graphics_36 = new cjs.Graphics().p("AIY70QMFhFJTHwQJUHzBFMFQBFMEnzJTQnwJTsGBGg");
	var mask_3_graphics_37 = new cjs.Graphics().p("AHZ7qQMChfJjHcQJkHeBgMDQBfMBneJjQndJksCBfg");
	var mask_3_graphics_38 = new cjs.Graphics().p("AGa7eQL/h5JyHIQJ0HJB5L/QB5L+nJJyQnIJ0r/B5g");
	var mask_3_graphics_39 = new cjs.Graphics().p("AFw7TQL8iKJ8G5QJ/G7CKL8QCKL7m7J8Qm6J+r7CKg");
	var mask_3_graphics_40 = new cjs.Graphics().p("AFH7HQL4icKGGsQKIGsCbL5QCcL3mtKHQmrKHr4Cbg");
	var mask_3_graphics_41 = new cjs.Graphics().p("AEd66QL1isKQGcQKRGeCsL1QCtL0meKQQmdKRr1Csg");
	var mask_3_graphics_42 = new cjs.Graphics().p("AD06rQLxi9KZGNQKaGPC9LxQC9LwmPKZQmNKarxC9g");
	var mask_3_graphics_43 = new cjs.Graphics().p("ADL6bQLtjOKhF+QKjGADOLtQDOLrmAKiQl+KjrsDOg");
	var mask_3_graphics_44 = new cjs.Graphics().p("ACj6KQLnjeKqFvQKsFwDfLoQDeLnlxKqQlvKrrnDfg");
	var mask_3_graphics_45 = new cjs.Graphics().p("AB753QLijvKyFgQKzFhDwLiQDvLhlhKzQlgKzriDvg");
	var mask_3_graphics_46 = new cjs.Graphics().p("ABT5jQLckAK6FRQK7FREALdQEALclSK6QlQK7rcEAg");
	var mask_3_graphics_47 = new cjs.Graphics().p("AAr5NQLXkQLBFAQLDFCEQLXQEQLVlCLCQlALCrXEQg");
	var mask_3_graphics_48 = new cjs.Graphics().p("AAE42QLQkhLIExQLKEyEhLQQEgLQkyLIQkwLJrREhg");
	var mask_3_graphics_49 = new cjs.Graphics().p("Agi4eQLJkxLOEhQLREhEwLKQExLJkiLPQkgLQrKExg");
	var mask_3_graphics_50 = new cjs.Graphics().p("AhI4FQLBlALVEQQLXERFBLDQFALCkSLWQkQLWrDFAg");
	var mask_3_graphics_51 = new cjs.Graphics().p("Ahu3qQK6lQLbEAQLdEBFQK7QFQK6kBLcQkALcq7FQg");
	var mask_3_graphics_52 = new cjs.Graphics().p("AiU3OQKzlgLgDwQLiDwFgK0QFgKyjxLhQjvLiq0Fgg");
	var mask_3_graphics_53 = new cjs.Graphics().p("Ai52xQKrlvLlDfQLoDgFvKrQFvKsjgLlQjfLnqrFvg");
	var mask_3_graphics_54 = new cjs.Graphics().p("Aje2SQKjl/LqDPQLsDPF/KjQF+KjjPLqQjOLrqjF/g");
	var mask_3_graphics_55 = new cjs.Graphics().p("AkC1zQKamNLuC9QLxC/GOKaQGNKai/LvQi8LwqbGNg");
	var mask_3_graphics_56 = new cjs.Graphics().p("Akl1SQKQmcLzCtQL1CtGcKRQGcKRiuLzQirL0qSGcg");
	var mask_3_graphics_57 = new cjs.Graphics().p("AlI0vQKGmsL3CcQL4CcGrKIQGsKIidL2QibL4qIGrg");
	var mask_3_graphics_58 = new cjs.Graphics().p("Alr0MQJ9m6L6CLQL8CLG5J+QG6J+iML6QiKL7p+G5g");
	var mask_3_graphics_59 = new cjs.Graphics().p("AmNzoQJznHL9B5QL+B6HIJ0QHIJ0h7L8Qh5L+p0HIg");
	var mask_3_graphics_60 = new cjs.Graphics().p("AmuzCQJonWL/BpQMCBoHVJqQHWJphqL/QhnMBpqHVg");
	var mask_3_graphics_61 = new cjs.Graphics().p("AnPybQJenkMBBXQMDBYHkJfQHjJehYMCQhWMCpfHkg");
	var mask_3_graphics_62 = new cjs.Graphics().p("AnwxzQJTnxMDBGQMFBGHxJTQHxJUhHMDQhFMEpTHxg");
	var mask_3_graphics_63 = new cjs.Graphics().p("AoPxKQJHn/MFA1QMGA1H+JIQH+JJg1MEQg0MFpIH/g");
	var mask_3_graphics_64 = new cjs.Graphics().p("AouwgQI8oLMFAjQMHAjILI9QIMI9glMFQgiMGo9IMg");
	var mask_3_graphics_65 = new cjs.Graphics().p("ApNv1QIxoYMFASQMIARIYIxQIYIxgTMGQgRMHoxIYg");
	var mask_3_graphics_66 = new cjs.Graphics().p("AprvJQIlokMFAAQMIAAIlIlQIkIlgCMGQABMHolIkg");
	var mask_3_graphics_67 = new cjs.Graphics().p("AqIucQIYoxMFgRQMIgRIwIZQIxIYAQMGQASMHoZIwg");
	var mask_3_graphics_68 = new cjs.Graphics().p("AqltuQIMo8MEgjQMIgiI8IMQI8ILAiMGQAjMGoLI8g");
	var mask_3_graphics_69 = new cjs.Graphics().p("Aq+tEQIApHMEgyQMGgyJHIAQJHIBAxMEQAyMGoAJGg");
	var mask_3_graphics_70 = new cjs.Graphics().p("ArXsaQH1pRMChBQMGhBJQH0QJRH0BBMEQBCMEn0JRg");
	var mask_3_graphics_71 = new cjs.Graphics().p("ArvruQHppbMBhRQMEhRJaHpQJbHoBQMCQBSMDnpJbg");
	var mask_3_graphics_72 = new cjs.Graphics().p("AsGrDQHcpkL/hgQMChgJlHcQJkHcBfMBQBiMBndJkg");
	var mask_3_graphics_73 = new cjs.Graphics().p("AsdqWQHQpuL9hvQMAhwJuHQQJuHQBuL+QBxL/nQJug");
	var mask_3_graphics_74 = new cjs.Graphics().p("As0ppQHEp3L6h+QL+h/J3HDQJ3HDB+L8QCAL9nEJ3g");
	var mask_3_graphics_75 = new cjs.Graphics().p("AtKo7QG3qAL4iOQL7iOKAG3QKAG3CNL5QCPL6m2KAg");
	var mask_3_graphics_76 = new cjs.Graphics().p("AtfoMQGqqJL1idQL4idKJGpQKJGqCcL3QCeL3mqKIg");
	var mask_3_graphics_77 = new cjs.Graphics().p("AtzndQGdqRLxisQL1itKRGdQKRGdCsLzQCtLzmdKRg");
	var mask_3_graphics_78 = new cjs.Graphics().p("AuHmtQGPqZLvi8QLxi7KZGPQKZGQC7LvQC8LwmPKZg");
	var mask_3_graphics_79 = new cjs.Graphics().p("Aual9QGCqhLqjKQLujLKhGCQKhGDDJLrQDMLsmDKhg");
	var mask_3_graphics_80 = new cjs.Graphics().p("AutlMQF1qoLmjaQLpjZKpF0QKoF1DZLoQDaLnl0Kpg");
	var mask_3_graphics_81 = new cjs.Graphics().p("Au/kaQFnqwLijoQLljpKvFnQKwFnDoLjQDpLklnKwg");
	var mask_3_graphics_82 = new cjs.Graphics().p("AvQjoQFZq3Ldj3QLgj4K3FaQK3FZD2LeQD4LflZK3g");
	var mask_3_graphics_83 = new cjs.Graphics().p("Avhi2QFMq+LYkFQLakGK+FLQK+FLEFLbQEGLYlLK+g");
	var mask_3_graphics_84 = new cjs.Graphics().p("AvwiDQE9rELSkUQLWkVLEE9QLEE+EULVQEVLTk9LEg");
	var mask_3_graphics_85 = new cjs.Graphics().p("AwAhPQEvrLLOkiQLPkjLLEvQLKEvEiLPQEkLNkvLLg");
	var mask_3_graphics_86 = new cjs.Graphics().p("AwOgbQEhrRLIkxQLJkxLQEhQLQEgEwLKQEzLHkhLRg");
	var mask_3_graphics_87 = new cjs.Graphics().p("AwcAYQETrVLBk/QLDlALWESQLWETE+LDQFBLBkTLWg");
	var mask_3_graphics_88 = new cjs.Graphics().p("AwpBNQEErbK7lNQK8lOLcEEQLbEEFNK8QFOK7kELbg");
	var mask_3_graphics_89 = new cjs.Graphics().p("Aw1CCQD1rgK1lbQK1lbLhD1QLgD0FaK2QFdK0j1Lhg");
	var mask_3_graphics_90 = new cjs.Graphics().p("AxAC3QDmrkKtlpQKvlpLlDmQLlDmFoKvQFqKtjmLlg");
	var mask_3_graphics_91 = new cjs.Graphics().p("AxLDtQDXrpKnl2QKml3LqDXQLqDXF2KoQF3KljXLqg");
	var mask_3_graphics_92 = new cjs.Graphics().p("AxVEjQDJrtKemEQKfmELuDIQLuDIGDKgQGGKejJLug");
	var mask_3_graphics_93 = new cjs.Graphics().p("AxeFZQC5rwKXmRQKXmTLyC6QLyC5GRKYQGSKWi5Lyg");
	var mask_3_graphics_94 = new cjs.Graphics().p("AxnGQQCrr0KOmfQKPmfL2CqQL1CrGeKPQGgKOiqL2g");
	var mask_3_graphics_95 = new cjs.Graphics().p("AxuHHQCbr4KGmrQKHmsL4CbQL5CbGrKHQGtKGibL4g");
	var mask_3_graphics_96 = new cjs.Graphics().p("Ax1H+QCMr6J9m5QJ+m5L8CMQL7CMG4J/QG6J8iML8g");
	var mask_3_graphics_97 = new cjs.Graphics().p("Ax8I2QB9r+J0nFQJ2nGL+B9QL+B9HFJ2QHGJzh9L+g");
	var mask_3_graphics_98 = new cjs.Graphics().p("AyBJtQBtsAJrnRQJtnSMABtQMBBtHRJtQHTJqhuMBg");
	var mask_3_graphics_99 = new cjs.Graphics().p("AyGKlQBesCJindQJinfMDBdQMDBeHdJkQHfJhheMCg");
	var mask_3_graphics_100 = new cjs.Graphics().p("AyKLdQBOsEJZnpQJZnsMEBPQMEBOHqJaQHrJXhOMFg");
	var mask_3_graphics_101 = new cjs.Graphics().p("AyNMVQA/sGJOn1QJPn3MGA/QMGA/H1JQQH3JNg/MGg");
	var mask_3_graphics_102 = new cjs.Graphics().p("AyQNNQAwsHJEoBQJFoCMHAvQMHAvIBJGQIDJEgwMGg");
	var mask_3_graphics_103 = new cjs.Graphics().p("AySOFQAgsII6oMQI7oOMHAgQMIAgINI7QIOI5ggMIg");
	var mask_3_graphics_104 = new cjs.Graphics().p("AyTO9QARsIIvoXQIxoaMHAQQMIARIYIwQIaIvgQMIg");
	var mask_3_graphics_105 = new cjs.Graphics().p("AyTP1QABsIIkojQImokMHABQMJAAIjImQIlIkgBMIg");
	var mask_3_graphics_106 = new cjs.Graphics().p("AqIkrQIbowMHgPQMIgOIvIbQIvIYAPMIMg6iABHQgPsIIaotg");
	var mask_3_graphics_107 = new cjs.Graphics().p("AqhkjQIPo6MHgeQMIgfI5IQQI6INAeMIMg6fACSQgfsIIPo4g");
	var mask_3_graphics_108 = new cjs.Graphics().p("Aq6kaQIEpFMHgtQMHguJDIEQJFICAtMHMg6cADcQgtsHICpCg");
	var mask_3_graphics_109 = new cjs.Graphics().p("ArRkQQH4pPMFg+QMGg9JOH5QJPH2A9MGMg6XAEnQg9sGH3pMg");
	var mask_3_graphics_110 = new cjs.Graphics().p("ArokGQHtpZMEhNQMEhNJYHtQJZHrBMMEMg6QAFyQhNsFHrpWg");
	var mask_3_graphics_111 = new cjs.Graphics().p("Ar9j8QHgpiMChcQMDhdJiHhQJiHfBcMCMg6IAG8QhcsDHfpgg");
	var mask_3_graphics_112 = new cjs.Graphics().p("AsSjxQHUpsMBhrQMBhsJqHVQJsHSBsMAMg5/AIHQhssBHTpqg");
	var mask_3_graphics_113 = new cjs.Graphics().p("AsljlQHHp1L+h7QL/h7J0HIQJ1HGB7L+Mg50AJRQh7r/HHpzg");
	var mask_3_graphics_114 = new cjs.Graphics().p("As4jZQG7p+L7iKQL9iLJ9G8QJ+G5CKL7Mg5nAKbQiLr8G6p8g");
	var mask_3_graphics_115 = new cjs.Graphics().p("AtJjMQGuqHL4iaQL5iZKGGuQKHGtCZL4Mg5ZALkQiZr5GtqEg");
	var mask_3_graphics_116 = new cjs.Graphics().p("Atai/QGhqQL1ipQL2ioKPGhQKPGgCpL1Mg5KAMuQipr2GgqNg");
	var mask_3_graphics_117 = new cjs.Graphics().p("AtqiyQGUqYLyi3QLyi4KXGUQKYGTC3LxMg45AN3Qi4rzGTqVg");
	var mask_3_graphics_118 = new cjs.Graphics().p("At4ikQGGqfLujHQLvjHKeGHQKgGFDHLuMg4nAO/QjHrvGGqdg");
	var mask_3_graphics_119 = new cjs.Graphics().p("AuGiVQF5qoLqjVQLrjWKmF5QKnF4DWLqMg4TAQHQjWrqF4qlg");
	var mask_3_graphics_120 = new cjs.Graphics().p("AuTiGQFsqvLljlQLnjkKtFrQKvFqDkLmMg39ARPQjlrmFqqsg");
	var mask_3_graphics_121 = new cjs.Graphics().p("Aueh3QFdq2LhjzQLij0K0FeQK2FdD0LgMg3nASXQj0rhFdq0g");
	var mask_3_graphics_122 = new cjs.Graphics().p("AuphnQFQq9LckCQLckCK8FQQK8FOEDLcMg3PATeQkCrdFOq6g");
	var mask_3_graphics_123 = new cjs.Graphics().p("AuyhWQFBrELXkRQLXkRLCFDQLDFAERLWMg21AUlQkRrYFBrAg");
	var mask_3_graphics_124 = new cjs.Graphics().p("Au7hGQE0rJLQkgQLSkfLJE0QLJEyEfLSMg2aAVpQkfrSEyrHg");
	var mask_3_graphics_125 = new cjs.Graphics().p("AvCg0QElrQLLkuQLMkuLOEmQLQEkEtLMMg1+AWvQktrMEkrNg");
	var mask_3_graphics_126 = new cjs.Graphics().p("AvJgjQEXrVLFk8QLGk8LUEXQLVEVE8LGMg1gAX0Qk8rGEVrTg");
	var mask_3_graphics_127 = new cjs.Graphics().p("AvOgRQEIrbK/lKQK/lKLZEJQLbEHFKK/Mg1BAY4QlKq/EHrZg");
	var mask_3_graphics_128 = new cjs.Graphics().p("AvSABQD5rfK5lYQK3lYLfD6QLgD4FYK4Mg0hAZ8QlYq5D5reg");
	var mask_3_graphics_129 = new cjs.Graphics().p("AvWAUQDrrkKylmQKwlmLkDrQLkDqFmKxMgz/Aa/QlmqyDqrjg");
	var mask_3_graphics_130 = new cjs.Graphics().p("AvYAnQDcrpKql0QKqlzLoDcQLpDbF0KqMgzcAcBQl0qrDbrng");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_3_graphics_9,x:257.7,y:195.6}).wait(1).to({graphics:mask_3_graphics_10,x:257.7,y:195.6}).wait(1).to({graphics:mask_3_graphics_11,x:257.7,y:195.6}).wait(1).to({graphics:mask_3_graphics_12,x:257.7,y:195.6}).wait(1).to({graphics:mask_3_graphics_13,x:257.7,y:195.6}).wait(1).to({graphics:mask_3_graphics_14,x:257.8,y:195.7}).wait(1).to({graphics:mask_3_graphics_15,x:257.8,y:195.7}).wait(1).to({graphics:mask_3_graphics_16,x:257.8,y:195.7}).wait(1).to({graphics:mask_3_graphics_17,x:257.9,y:195.8}).wait(1).to({graphics:mask_3_graphics_18,x:257.9,y:195.8}).wait(1).to({graphics:mask_3_graphics_19,x:257.9,y:195.8}).wait(1).to({graphics:mask_3_graphics_20,x:257.9,y:195.8}).wait(1).to({graphics:mask_3_graphics_21,x:258,y:195.8}).wait(1).to({graphics:mask_3_graphics_22,x:258,y:195.8}).wait(1).to({graphics:mask_3_graphics_23,x:257.9,y:195.8}).wait(1).to({graphics:mask_3_graphics_24,x:257.9,y:195.8}).wait(1).to({graphics:mask_3_graphics_25,x:257.9,y:195.8}).wait(1).to({graphics:mask_3_graphics_26,x:257.9,y:195.7}).wait(1).to({graphics:mask_3_graphics_27,x:257.8,y:195.7}).wait(1).to({graphics:mask_3_graphics_28,x:257.8,y:195.6}).wait(1).to({graphics:mask_3_graphics_29,x:257.8,y:195.6}).wait(1).to({graphics:mask_3_graphics_30,x:257.7,y:195.5}).wait(1).to({graphics:mask_3_graphics_31,x:257.7,y:195.5}).wait(1).to({graphics:mask_3_graphics_32,x:257.7,y:195.5}).wait(1).to({graphics:mask_3_graphics_33,x:257.7,y:195.4}).wait(1).to({graphics:mask_3_graphics_34,x:257.7,y:195.4}).wait(1).to({graphics:mask_3_graphics_35,x:257.7,y:195.3}).wait(1).to({graphics:mask_3_graphics_36,x:257.7,y:195.1}).wait(1).to({graphics:mask_3_graphics_37,x:257.7,y:194.7}).wait(1).to({graphics:mask_3_graphics_38,x:257.7,y:194.2}).wait(1).to({graphics:mask_3_graphics_39,x:257.8,y:193.8}).wait(1).to({graphics:mask_3_graphics_40,x:257.8,y:193.4}).wait(1).to({graphics:mask_3_graphics_41,x:257.8,y:193}).wait(1).to({graphics:mask_3_graphics_42,x:257.8,y:192.5}).wait(1).to({graphics:mask_3_graphics_43,x:257.8,y:192}).wait(1).to({graphics:mask_3_graphics_44,x:257.8,y:191.4}).wait(1).to({graphics:mask_3_graphics_45,x:257.8,y:190.7}).wait(1).to({graphics:mask_3_graphics_46,x:257.9,y:190.1}).wait(1).to({graphics:mask_3_graphics_47,x:257.9,y:189.3}).wait(1).to({graphics:mask_3_graphics_48,x:257.9,y:188.6}).wait(1).to({graphics:mask_3_graphics_49,x:257.8,y:187.8}).wait(1).to({graphics:mask_3_graphics_50,x:257.8,y:186.9}).wait(1).to({graphics:mask_3_graphics_51,x:257.8,y:186}).wait(1).to({graphics:mask_3_graphics_52,x:257.8,y:185.1}).wait(1).to({graphics:mask_3_graphics_53,x:257.8,y:184.1}).wait(1).to({graphics:mask_3_graphics_54,x:257.8,y:183.1}).wait(1).to({graphics:mask_3_graphics_55,x:257.7,y:182}).wait(1).to({graphics:mask_3_graphics_56,x:257.7,y:180.9}).wait(1).to({graphics:mask_3_graphics_57,x:257.7,y:179.8}).wait(1).to({graphics:mask_3_graphics_58,x:257.6,y:178.6}).wait(1).to({graphics:mask_3_graphics_59,x:257.6,y:177.4}).wait(1).to({graphics:mask_3_graphics_60,x:257.6,y:176.1}).wait(1).to({graphics:mask_3_graphics_61,x:257.5,y:174.9}).wait(1).to({graphics:mask_3_graphics_62,x:257.5,y:173.5}).wait(1).to({graphics:mask_3_graphics_63,x:257.5,y:172.2}).wait(1).to({graphics:mask_3_graphics_64,x:257.5,y:170.8}).wait(1).to({graphics:mask_3_graphics_65,x:257.4,y:169.3}).wait(1).to({graphics:mask_3_graphics_66,x:257.4,y:167.8}).wait(1).to({graphics:mask_3_graphics_67,x:257.4,y:166.3}).wait(1).to({graphics:mask_3_graphics_68,x:257.5,y:164.8}).wait(1).to({graphics:mask_3_graphics_69,x:257.5,y:163.4}).wait(1).to({graphics:mask_3_graphics_70,x:257.5,y:162}).wait(1).to({graphics:mask_3_graphics_71,x:257.6,y:160.6}).wait(1).to({graphics:mask_3_graphics_72,x:257.6,y:159.1}).wait(1).to({graphics:mask_3_graphics_73,x:257.6,y:157.6}).wait(1).to({graphics:mask_3_graphics_74,x:257.6,y:156.1}).wait(1).to({graphics:mask_3_graphics_75,x:257.7,y:154.6}).wait(1).to({graphics:mask_3_graphics_76,x:257.7,y:153}).wait(1).to({graphics:mask_3_graphics_77,x:257.7,y:151.4}).wait(1).to({graphics:mask_3_graphics_78,x:257.7,y:149.8}).wait(1).to({graphics:mask_3_graphics_79,x:257.7,y:148.2}).wait(1).to({graphics:mask_3_graphics_80,x:257.8,y:146.6}).wait(1).to({graphics:mask_3_graphics_81,x:257.8,y:145}).wait(1).to({graphics:mask_3_graphics_82,x:257.8,y:143.3}).wait(1).to({graphics:mask_3_graphics_83,x:257.8,y:141.6}).wait(1).to({graphics:mask_3_graphics_84,x:257.8,y:139.9}).wait(1).to({graphics:mask_3_graphics_85,x:257.8,y:138.2}).wait(1).to({graphics:mask_3_graphics_86,x:257.8,y:136.5}).wait(1).to({graphics:mask_3_graphics_87,x:257.8,y:134.7}).wait(1).to({graphics:mask_3_graphics_88,x:257.8,y:132.9}).wait(1).to({graphics:mask_3_graphics_89,x:257.8,y:131.2}).wait(1).to({graphics:mask_3_graphics_90,x:257.8,y:129.4}).wait(1).to({graphics:mask_3_graphics_91,x:257.8,y:127.6}).wait(1).to({graphics:mask_3_graphics_92,x:257.7,y:125.8}).wait(1).to({graphics:mask_3_graphics_93,x:257.7,y:124}).wait(1).to({graphics:mask_3_graphics_94,x:257.7,y:122.2}).wait(1).to({graphics:mask_3_graphics_95,x:257.7,y:120.3}).wait(1).to({graphics:mask_3_graphics_96,x:257.7,y:118.5}).wait(1).to({graphics:mask_3_graphics_97,x:257.6,y:116.6}).wait(1).to({graphics:mask_3_graphics_98,x:257.6,y:114.8}).wait(1).to({graphics:mask_3_graphics_99,x:257.6,y:112.9}).wait(1).to({graphics:mask_3_graphics_100,x:257.6,y:111.1}).wait(1).to({graphics:mask_3_graphics_101,x:257.5,y:109.2}).wait(1).to({graphics:mask_3_graphics_102,x:257.5,y:107.3}).wait(1).to({graphics:mask_3_graphics_103,x:257.5,y:105.5}).wait(1).to({graphics:mask_3_graphics_104,x:257.5,y:103.6}).wait(1).to({graphics:mask_3_graphics_105,x:257.5,y:101.7}).wait(1).to({graphics:mask_3_graphics_106,x:257.5,y:103.4}).wait(1).to({graphics:mask_3_graphics_107,x:257.4,y:105.3}).wait(1).to({graphics:mask_3_graphics_108,x:257.3,y:107.1}).wait(1).to({graphics:mask_3_graphics_109,x:257.2,y:109}).wait(1).to({graphics:mask_3_graphics_110,x:257,y:110.9}).wait(1).to({graphics:mask_3_graphics_111,x:256.8,y:112.7}).wait(1).to({graphics:mask_3_graphics_112,x:256.6,y:114.6}).wait(1).to({graphics:mask_3_graphics_113,x:256.3,y:116.5}).wait(1).to({graphics:mask_3_graphics_114,x:256,y:118.3}).wait(1).to({graphics:mask_3_graphics_115,x:255.6,y:120.1}).wait(1).to({graphics:mask_3_graphics_116,x:255.3,y:122}).wait(1).to({graphics:mask_3_graphics_117,x:254.8,y:123.8}).wait(1).to({graphics:mask_3_graphics_118,x:254.4,y:125.6}).wait(1).to({graphics:mask_3_graphics_119,x:253.9,y:127.4}).wait(1).to({graphics:mask_3_graphics_120,x:253.3,y:129.2}).wait(1).to({graphics:mask_3_graphics_121,x:252.8,y:131}).wait(1).to({graphics:mask_3_graphics_122,x:252.2,y:132.8}).wait(1).to({graphics:mask_3_graphics_123,x:251.5,y:134.6}).wait(1).to({graphics:mask_3_graphics_124,x:250.8,y:136.3}).wait(1).to({graphics:mask_3_graphics_125,x:250.1,y:138.1}).wait(1).to({graphics:mask_3_graphics_126,x:249.4,y:139.8}).wait(1).to({graphics:mask_3_graphics_127,x:248.6,y:141.5}).wait(1).to({graphics:mask_3_graphics_128,x:247.8,y:143.2}).wait(1).to({graphics:mask_3_graphics_129,x:246.9,y:144.9}).wait(1).to({graphics:mask_3_graphics_130,x:246.1,y:146.5}).wait(410));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(20,1,1).p("ANfksQncnmpbBeQoVBuhbG5QhaG3EVGa");
	this.shape_4.setTransform(290.7,190.1);
	this.shape_4._off = true;

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(9).to({_off:false},0).wait(531));

	// number
	this.instance_2 = new lib._8("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(275,275);
	this.instance_2.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(540));

	// Background
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#F59E9E").ss(3,1,1).p("EAq+Aq+MhV7AAAMAAAhV7MBV7AAAg");
	this.shape_5.setTransform(275,275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F6E7E7").s().p("Egq9Aq+MAAAhV7MBV7AAAMAAABV7g");
	this.shape_6.setTransform(275,275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(540));

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