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


(lib.a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlgKPQhKhIAAiJIAJhnQnGF/j3AAQiYAAhchrQhYhnAAijQAAiUC2k5QB1ilCUh3QCQh2CshKQCmhIC/gkQC2ghDOAAQD/AAgBBiQAABFhPCSIivEnQj+GhAACJQAAA0AyAAQCYAACshDQCXg7CohuQDsieErkhIDyjtQA5gmApAAQBPAAAABdQAAA/jtEEIjNDDQkUD5j9CQQihBYiUAwQilA3iYAAQiGAAhIhHgAkznLQiRAciHA6QiIA8h1BYQh3BbheB4QijEIAAB1QAAB6BiAAQEYAAIRo6IDJjfQAOgOBUiqQiXAAiSAdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-145.1,-72.6,290.2,145.3);


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
	this.instance.setTransform(-5.6,-7.1,1,1,26.7,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-132.4,guide:{path:[-5.6,-7,-68.3,127.6,48.2,28.7], orient:'auto'}},89).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_43 = new cjs.Graphics().p("AiUDlIAVgPICbDaIgVAPg");
	var mask_graphics_44 = new cjs.Graphics().p("AhfhfIAlgaICaDZIglAag");
	var mask_graphics_45 = new cjs.Graphics().p("AhnhZIA1gmICaDZIg1Amg");
	var mask_graphics_46 = new cjs.Graphics().p("AhvhUIBEgwICbDZIhEAwg");
	var mask_graphics_47 = new cjs.Graphics().p("Ah3hOIBUg8ICaDZIhTA8g");
	var mask_graphics_48 = new cjs.Graphics().p("Ah+hJIBjhHICaDZIhjBHg");
	var mask_graphics_49 = new cjs.Graphics().p("AiGhDIBzhSICaDZIhzBSg");
	var mask_graphics_50 = new cjs.Graphics().p("AiOg+ICChcICbDYIiCBdg");
	var mask_graphics_51 = new cjs.Graphics().p("AiWg4ICShoICbDZIiSBog");
	var mask_graphics_52 = new cjs.Graphics().p("AidgzICghzICbDaIigByg");
	var mask_graphics_53 = new cjs.Graphics().p("AilgtICwh+ICbDZIiwB+g");
	var mask_graphics_54 = new cjs.Graphics().p("AitgoIC/iIICcDYIi/CJg");
	var mask_graphics_55 = new cjs.Graphics().p("Ai0giIDOiUICbDZIjOCUg");
	var mask_graphics_56 = new cjs.Graphics().p("Ai8gdIDeifICbDaIjeCeg");
	var mask_graphics_57 = new cjs.Graphics().p("AjEgXIDtiqICcDZIjtCqg");
	var mask_graphics_58 = new cjs.Graphics().p("AjMgRID9i2ICcDZIj9C2g");
	var mask_graphics_59 = new cjs.Graphics().p("AjTgMIEMjAICbDZIkMDAg");
	var mask_graphics_60 = new cjs.Graphics().p("AjbgGIEcjMICbDZIkcDMg");
	var mask_graphics_61 = new cjs.Graphics().p("AjjgBIErjWICcDZIkrDWg");
	var mask_graphics_62 = new cjs.Graphics().p("AjrAEIE7jhICcDaIk7Dhg");
	var mask_graphics_63 = new cjs.Graphics().p("AjyAJIFKjrICbDaIlKDrg");
	var mask_graphics_64 = new cjs.Graphics().p("Aj6APIFZj3ICcDaIlaD3g");
	var mask_graphics_65 = new cjs.Graphics().p("AkCAUIFpkBICcDaIlpEBg");
	var mask_graphics_66 = new cjs.Graphics().p("AkJAaIF4kNICbDaIl4ENg");
	var mask_graphics_67 = new cjs.Graphics().p("AkRAfIGHkXICcDaImHEXg");
	var mask_graphics_68 = new cjs.Graphics().p("AkZAlIGXkjICcDaImXEjg");
	var mask_graphics_69 = new cjs.Graphics().p("AkhAqIGnktICbDaImmEtg");
	var mask_graphics_70 = new cjs.Graphics().p("AkoAwIG2k5ICbDaIm2E5g");
	var mask_graphics_71 = new cjs.Graphics().p("AkwA1IHGlDICbDaInFFDg");
	var mask_graphics_72 = new cjs.Graphics().p("Ak4A7IHVlPICcDaInVFPg");
	var mask_graphics_73 = new cjs.Graphics().p("AlABAIHllZICbDaInkFZg");
	var mask_graphics_74 = new cjs.Graphics().p("AlHBGIH0llICbDaIn0Flg");
	var mask_graphics_75 = new cjs.Graphics().p("AlPBLIIElvICbDaIoDFvg");
	var mask_graphics_76 = new cjs.Graphics().p("AlXBRIITl7ICcDaIoTF7g");
	var mask_graphics_77 = new cjs.Graphics().p("AlfBXIIjmHICbDaIoiGHg");
	var mask_graphics_78 = new cjs.Graphics().p("AlmBcIIxmRICcDaIoxGRg");
	var mask_graphics_79 = new cjs.Graphics().p("AluBiIJBmcICcDaIpBGcg");
	var mask_graphics_80 = new cjs.Graphics().p("Al2BnIJRmnICbDaIpQGng");
	var mask_graphics_81 = new cjs.Graphics().p("Al9BtIJgmzICbDaIpgGzg");
	var mask_graphics_82 = new cjs.Graphics().p("AmFByIJwm9ICbDaIpvG9g");
	var mask_graphics_83 = new cjs.Graphics().p("AmNB4IJ/nIICcDZIp/HJg");
	var mask_graphics_84 = new cjs.Graphics().p("AmVB9IKPnTICbDaIqOHTg");
	var mask_graphics_85 = new cjs.Graphics().p("AmcCDIKenfICbDaIqeHfg");
	var mask_graphics_86 = new cjs.Graphics().p("AmkCIIKunpICbDaIqtHpg");
	var mask_graphics_87 = new cjs.Graphics().p("AmsCOIK9n1ICcDaIq9H1g");
	var mask_graphics_88 = new cjs.Graphics().p("Am0CTILNn/ICbDaIrMH/g");
	var mask_graphics_89 = new cjs.Graphics().p("Am7DlILcoLICbDaIrcILg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(43).to({graphics:mask_graphics_43,x:-14.9,y:44.7}).wait(1).to({graphics:mask_graphics_44,x:-20.1,y:77.2}).wait(1).to({graphics:mask_graphics_45,x:-19.3,y:76.6}).wait(1).to({graphics:mask_graphics_46,x:-18.6,y:76.1}).wait(1).to({graphics:mask_graphics_47,x:-17.8,y:75.5}).wait(1).to({graphics:mask_graphics_48,x:-17,y:75}).wait(1).to({graphics:mask_graphics_49,x:-16.2,y:74.4}).wait(1).to({graphics:mask_graphics_50,x:-15.5,y:73.9}).wait(1).to({graphics:mask_graphics_51,x:-14.7,y:73.3}).wait(1).to({graphics:mask_graphics_52,x:-13.9,y:72.8}).wait(1).to({graphics:mask_graphics_53,x:-13.1,y:72.2}).wait(1).to({graphics:mask_graphics_54,x:-12.4,y:71.7}).wait(1).to({graphics:mask_graphics_55,x:-11.6,y:71.1}).wait(1).to({graphics:mask_graphics_56,x:-10.8,y:70.6}).wait(1).to({graphics:mask_graphics_57,x:-10.1,y:70}).wait(1).to({graphics:mask_graphics_58,x:-9.3,y:69.4}).wait(1).to({graphics:mask_graphics_59,x:-8.5,y:68.9}).wait(1).to({graphics:mask_graphics_60,x:-7.7,y:68.3}).wait(1).to({graphics:mask_graphics_61,x:-7,y:67.8}).wait(1).to({graphics:mask_graphics_62,x:-6.2,y:67.2}).wait(1).to({graphics:mask_graphics_63,x:-5.4,y:66.7}).wait(1).to({graphics:mask_graphics_64,x:-4.6,y:66.1}).wait(1).to({graphics:mask_graphics_65,x:-3.9,y:65.6}).wait(1).to({graphics:mask_graphics_66,x:-3.1,y:65}).wait(1).to({graphics:mask_graphics_67,x:-2.3,y:64.4}).wait(1).to({graphics:mask_graphics_68,x:-1.5,y:63.9}).wait(1).to({graphics:mask_graphics_69,x:-0.7,y:63.3}).wait(1).to({graphics:mask_graphics_70,x:0,y:62.8}).wait(1).to({graphics:mask_graphics_71,x:0.8,y:62.2}).wait(1).to({graphics:mask_graphics_72,x:1.6,y:61.7}).wait(1).to({graphics:mask_graphics_73,x:2.4,y:61.1}).wait(1).to({graphics:mask_graphics_74,x:3.1,y:60.6}).wait(1).to({graphics:mask_graphics_75,x:3.9,y:60}).wait(1).to({graphics:mask_graphics_76,x:4.7,y:59.5}).wait(1).to({graphics:mask_graphics_77,x:5.5,y:58.9}).wait(1).to({graphics:mask_graphics_78,x:6.2,y:58.4}).wait(1).to({graphics:mask_graphics_79,x:7,y:57.8}).wait(1).to({graphics:mask_graphics_80,x:7.8,y:57.3}).wait(1).to({graphics:mask_graphics_81,x:8.5,y:56.7}).wait(1).to({graphics:mask_graphics_82,x:9.3,y:56.2}).wait(1).to({graphics:mask_graphics_83,x:10.1,y:55.6}).wait(1).to({graphics:mask_graphics_84,x:10.9,y:55.1}).wait(1).to({graphics:mask_graphics_85,x:11.6,y:54.5}).wait(1).to({graphics:mask_graphics_86,x:12.4,y:53.9}).wait(1).to({graphics:mask_graphics_87,x:13.2,y:53.4}).wait(1).to({graphics:mask_graphics_88,x:14,y:52.8}).wait(1).to({graphics:mask_graphics_89,x:14.7,y:44.7}).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AihmAQpuU7SKve");
	this.shape.setTransform(10.1,32.1);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(43).to({_off:false},0).wait(47));

	// Layer 4 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AiHgcIAihBIDtB6IgiBBg");
	var mask_1_graphics_1 = new cjs.Graphics().p("AiLgUIAqhSIDtB7IgqBSg");
	var mask_1_graphics_2 = new cjs.Graphics().p("AiPgLIAyhjIDuB6IgzBjg");
	var mask_1_graphics_3 = new cjs.Graphics().p("AiUgDIA8hzIDtB6Ig8Bzg");
	var mask_1_graphics_4 = new cjs.Graphics().p("AiYAFIBEiEIDtB8IhECCg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AicANIBMiUIDuB7IhOCUg");
	var mask_1_graphics_6 = new cjs.Graphics().p("AihAVIBWikIDtB7IhWCkg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AilAdIBei1IDtB8IheC1g");
	var mask_1_graphics_8 = new cjs.Graphics().p("AipAmIBmjGIDtB7IhmDGg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AiuAuIBwjWIDtB7IhwDWg");
	var mask_1_graphics_10 = new cjs.Graphics().p("AiyA3IB4joIDtB8Ih4Dng");
	var mask_1_graphics_11 = new cjs.Graphics().p("Ai2A/ICAj4IDtB7IiAD4g");
	var mask_1_graphics_12 = new cjs.Graphics().p("Ai7BHICJkIIDuB7IiKEIg");
	var mask_1_graphics_13 = new cjs.Graphics().p("Ai/BPICSkYIDtB7IiSEYg");
	var mask_1_graphics_14 = new cjs.Graphics().p("AjDBYICakqIDtB7IiaEqg");
	var mask_1_graphics_15 = new cjs.Graphics().p("AjIBgICjk6IDuB7IijE6g");
	var mask_1_graphics_16 = new cjs.Graphics().p("AjMBoICslKIDtB7IisFKg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AjQBxIC0lcIDtB8Ii0Fag");
	var mask_1_graphics_18 = new cjs.Graphics().p("AjUB5IC8lsIDtB7Ii8Fsg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AjZCBIDGl8IDtB7IjGF8g");
	var mask_1_graphics_20 = new cjs.Graphics().p("AjdCJIDOmNIDtB8IjOGMg");
	var mask_1_graphics_21 = new cjs.Graphics().p("AjhCSIDWmeIDtB7IjWGeg");
	var mask_1_graphics_22 = new cjs.Graphics().p("AjlCaIDemuIDtB7IjeGug");
	var mask_1_graphics_23 = new cjs.Graphics().p("AjqCiIDom+IDsB7IjnG+g");
	var mask_1_graphics_24 = new cjs.Graphics().p("AjuCqIDvnOIDuB6IjvHQg");
	var mask_1_graphics_25 = new cjs.Graphics().p("AjyCzID3ngIDuB7Ij3Hgg");
	var mask_1_graphics_26 = new cjs.Graphics().p("Aj3C7IEBnwIDtB7Ij/Hwg");
	var mask_1_graphics_27 = new cjs.Graphics().p("Aj7DEIEJoBIDuB6IkJIBg");
	var mask_1_graphics_28 = new cjs.Graphics().p("Aj/DMIERoSIDuB7IkRISg");
	var mask_1_graphics_29 = new cjs.Graphics().p("AkDDUIEZoiIDuB7IkZIig");
	var mask_1_graphics_30 = new cjs.Graphics().p("AkIDcIEjoyIDuB6IkjIzg");
	var mask_1_graphics_31 = new cjs.Graphics().p("AkMDlIErpEIDuB7IkrJEg");
	var mask_1_graphics_32 = new cjs.Graphics().p("AkQDtIEzpUIDuB7IkzJUg");
	var mask_1_graphics_33 = new cjs.Graphics().p("AkVD1IE9pkIDtB7Ik7Jkg");
	var mask_1_graphics_34 = new cjs.Graphics().p("AkZD+IFFp2IDuB7IlFJ2g");
	var mask_1_graphics_35 = new cjs.Graphics().p("AkdEGIFNqGIDuB7IlNKGg");
	var mask_1_graphics_36 = new cjs.Graphics().p("AkhEOIFWqWIDtB7IlWKWg");
	var mask_1_graphics_37 = new cjs.Graphics().p("AkmEWIFfqmIDuB6IlfKog");
	var mask_1_graphics_38 = new cjs.Graphics().p("AkqEfIFnq4IDuB7IlnK4g");
	var mask_1_graphics_39 = new cjs.Graphics().p("AkuEnIFvrIIDuB7IlvLIg");
	var mask_1_graphics_40 = new cjs.Graphics().p("AkyEwIF4rZIDtB6Il4LZg");
	var mask_1_graphics_41 = new cjs.Graphics().p("Ak3E4IGBrqIDuB7ImBLqg");
	var mask_1_graphics_42 = new cjs.Graphics().p("Ak7FAIGJr6IDuB7ImJL6g");
	var mask_1_graphics_43 = new cjs.Graphics().p("AlAFIIGTsLIDuB8ImTMLg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:-1.7,y:-8}).wait(1).to({graphics:mask_1_graphics_1,x:-2.2,y:-7.2}).wait(1).to({graphics:mask_1_graphics_2,x:-2.6,y:-6.3}).wait(1).to({graphics:mask_1_graphics_3,x:-3,y:-5.5}).wait(1).to({graphics:mask_1_graphics_4,x:-3.5,y:-4.7}).wait(1).to({graphics:mask_1_graphics_5,x:-3.9,y:-3.9}).wait(1).to({graphics:mask_1_graphics_6,x:-4.3,y:-3}).wait(1).to({graphics:mask_1_graphics_7,x:-4.7,y:-2.2}).wait(1).to({graphics:mask_1_graphics_8,x:-5.2,y:-1.4}).wait(1).to({graphics:mask_1_graphics_9,x:-5.6,y:-0.5}).wait(1).to({graphics:mask_1_graphics_10,x:-6,y:0.3}).wait(1).to({graphics:mask_1_graphics_11,x:-6.5,y:1.1}).wait(1).to({graphics:mask_1_graphics_12,x:-6.9,y:2}).wait(1).to({graphics:mask_1_graphics_13,x:-7.3,y:2.8}).wait(1).to({graphics:mask_1_graphics_14,x:-7.8,y:3.6}).wait(1).to({graphics:mask_1_graphics_15,x:-8.2,y:4.5}).wait(1).to({graphics:mask_1_graphics_16,x:-8.6,y:5.3}).wait(1).to({graphics:mask_1_graphics_17,x:-9,y:6.1}).wait(1).to({graphics:mask_1_graphics_18,x:-9.5,y:7}).wait(1).to({graphics:mask_1_graphics_19,x:-9.9,y:7.8}).wait(1).to({graphics:mask_1_graphics_20,x:-10.3,y:8.6}).wait(1).to({graphics:mask_1_graphics_21,x:-10.8,y:9.4}).wait(1).to({graphics:mask_1_graphics_22,x:-11.2,y:10.3}).wait(1).to({graphics:mask_1_graphics_23,x:-11.6,y:11.1}).wait(1).to({graphics:mask_1_graphics_24,x:-12.1,y:12}).wait(1).to({graphics:mask_1_graphics_25,x:-12.5,y:12.8}).wait(1).to({graphics:mask_1_graphics_26,x:-12.9,y:13.6}).wait(1).to({graphics:mask_1_graphics_27,x:-13.4,y:14.5}).wait(1).to({graphics:mask_1_graphics_28,x:-13.8,y:15.3}).wait(1).to({graphics:mask_1_graphics_29,x:-14.2,y:16.1}).wait(1).to({graphics:mask_1_graphics_30,x:-14.7,y:17}).wait(1).to({graphics:mask_1_graphics_31,x:-15.1,y:17.8}).wait(1).to({graphics:mask_1_graphics_32,x:-15.5,y:18.6}).wait(1).to({graphics:mask_1_graphics_33,x:-15.9,y:19.4}).wait(1).to({graphics:mask_1_graphics_34,x:-16.4,y:20.3}).wait(1).to({graphics:mask_1_graphics_35,x:-16.8,y:21.1}).wait(1).to({graphics:mask_1_graphics_36,x:-17.2,y:21.9}).wait(1).to({graphics:mask_1_graphics_37,x:-17.7,y:22.8}).wait(1).to({graphics:mask_1_graphics_38,x:-18.1,y:23.6}).wait(1).to({graphics:mask_1_graphics_39,x:-18.5,y:24.4}).wait(1).to({graphics:mask_1_graphics_40,x:-18.9,y:25.3}).wait(1).to({graphics:mask_1_graphics_41,x:-19.4,y:26.1}).wait(1).to({graphics:mask_1_graphics_42,x:-19.8,y:26.9}).wait(1).to({graphics:mask_1_graphics_43,x:-20.3,y:27.8}).wait(47));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AihmAQpuU7SKve");
	this.shape_1.setTransform(10.1,32.1);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.3,-14.6,27.2,17.3);


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
(lib.WS_Cursive_a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_440 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(440).call(this.frame_440).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(293.4,214,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[293.4,214,257.8,215.8,226.5,223.2,195,230.6,170,259.7,145,288.9,142.4,312.3,139.7,335.7,168.4,334.6,197.1,333.5,240.3,290,283.4,246.4,294.1,217.1]}},201).wait(15).to({skewY:0,x:295.8,y:212.6},0).to({guide:{path:[295.8,212.6,280.3,236.6,253.9,292.3,227.5,348,275.9,333.5,324.3,318.9,350.8,296.7,377.1,274.6,406.8,240.9]}},135).wait(15).to({x:406.7,y:240.9},0).to({guide:{path:[406.7,240.9,347,216.6,291.9,250.6,241,282.1,183.6,298.3,122.8,315.6,71.6,277.6,20,239.3,-36.9,268,-53.6,276.3,-79.1,294.9]}},65).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(293,214.6,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},201).wait(15).to({_off:false,x:409,y:239.1},0).to({_off:true},135).wait(81));

	// Layer 18
	this.instance_1 = new lib.ar4("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(338.4,235.9,1,1,0,0,0,7.1,36);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(225).to({_off:false},0).wait(216));

	// Layer 16 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_293 = new cjs.Graphics().p("AMfS/ICfiEIJTLKIifCEg");
	var mask_graphics_294 = new cjs.Graphics().p("AmCkaICyiUIJTLJIiyCUg");
	var mask_graphics_295 = new cjs.Graphics().p("AmLkSIDFilIJSLKIjFCkg");
	var mask_graphics_296 = new cjs.Graphics().p("AmVkKIDZi1IJSLKIjYC1g");
	var mask_graphics_297 = new cjs.Graphics().p("AmfkCIDsjFIJTLKIjsDFg");
	var mask_graphics_298 = new cjs.Graphics().p("Ampj6IEAjVIJTLKIkADVg");
	var mask_graphics_299 = new cjs.Graphics().p("AmyjyIESjlIJTLKIkSDlg");
	var mask_graphics_300 = new cjs.Graphics().p("Am8jqIEmj1IJTLKIknD1g");
	var mask_graphics_301 = new cjs.Graphics().p("AnGjhIE6kGIJTLJIk6EGg");
	var mask_graphics_302 = new cjs.Graphics().p("AnPjaIFNkVIJSLKIlNEVg");
	var mask_graphics_303 = new cjs.Graphics().p("AnZjRIFhkmIJSLJIlgEmg");
	var mask_graphics_304 = new cjs.Graphics().p("AnjjJIF0k2IJTLJIl0E2g");
	var mask_graphics_305 = new cjs.Graphics().p("AntjBIGIlGIJTLJImIFHg");
	var mask_graphics_306 = new cjs.Graphics().p("An2i5IGblWIJSLJImbFWg");
	var mask_graphics_307 = new cjs.Graphics().p("AoAixIGulnIJTLKImuFmg");
	var mask_graphics_308 = new cjs.Graphics().p("AoKipIHCl3IJSLKInBF3g");
	var mask_graphics_309 = new cjs.Graphics().p("AoTihIHVmHIJSLKInVGHg");
	var mask_graphics_310 = new cjs.Graphics().p("AodiZIHomXIJTLKInpGXg");
	var mask_graphics_311 = new cjs.Graphics().p("AomiRIH7mnIJSLKIn7Gng");
	var mask_graphics_312 = new cjs.Graphics().p("AowiJIIPm3IJSLKIoPG3g");
	var mask_graphics_313 = new cjs.Graphics().p("Ao6iAIIjnIIJSLJIojHIg");
	var mask_graphics_314 = new cjs.Graphics().p("ApEh5II3nXIJSLJIo2HYg");
	var mask_graphics_315 = new cjs.Graphics().p("ApOhwIJKnoIJTLJIpKHog");
	var mask_graphics_316 = new cjs.Graphics().p("ApXhoIJcn4IJTLJIpcH4g");
	var mask_graphics_317 = new cjs.Graphics().p("AphhgIJvoIIJULJIpwIIg");
	var mask_graphics_318 = new cjs.Graphics().p("AprhYIKDoYIJULJIqDIZg");
	var mask_graphics_319 = new cjs.Graphics().p("Ap0hQIKWopIJTLKIqWIog");
	var mask_graphics_320 = new cjs.Graphics().p("Ap+hIIKqo5IJTLKIqqI5g");
	var mask_graphics_321 = new cjs.Graphics().p("AqIhAIK9pJIJULKIq9JJg");
	var mask_graphics_322 = new cjs.Graphics().p("AqRg4ILQpZIJTLKIrQJZg");
	var mask_graphics_323 = new cjs.Graphics().p("AqbgwILkppIJTLKIrjJpg");
	var mask_graphics_324 = new cjs.Graphics().p("AqlgnIL3p6IJULKIr3J5g");
	var mask_graphics_325 = new cjs.Graphics().p("AqvggIMLqJIJULJIsLKKg");
	var mask_graphics_326 = new cjs.Graphics().p("Aq4gXIMeqaIJTLJIseKag");
	var mask_graphics_327 = new cjs.Graphics().p("ArCgPIMxqqIJULJIsyKqg");
	var mask_graphics_328 = new cjs.Graphics().p("ArMgHINFq7IJULKItFK6g");
	var mask_graphics_329 = new cjs.Graphics().p("ArVAAINYrJIJTLJItYLLg");
	var mask_graphics_330 = new cjs.Graphics().p("ArfAIINsrZIJTLKItsLZg");
	var mask_graphics_331 = new cjs.Graphics().p("ArpAQIN/rqIJULLIt/Lqg");
	var mask_graphics_332 = new cjs.Graphics().p("ArzAYIOTr6IJULLIuTL6g");
	var mask_graphics_333 = new cjs.Graphics().p("Ar8AhIOmsLIJTLKIumMLg");
	var mask_graphics_334 = new cjs.Graphics().p("AsGAoIO6saIJTLKIu5Mbg");
	var mask_graphics_335 = new cjs.Graphics().p("AsQAwIPNsqIJULLIvNMqg");
	var mask_graphics_336 = new cjs.Graphics().p("AsZA5IPgs7IJTLKIvgM7g");
	var mask_graphics_337 = new cjs.Graphics().p("AsjBBIPztLIJULKIv0NLg");
	var mask_graphics_338 = new cjs.Graphics().p("AstBJIQHtbIJULKIwHNbg");
	var mask_graphics_339 = new cjs.Graphics().p("As2BRIQatsIJTLLIwaNrg");
	var mask_graphics_340 = new cjs.Graphics().p("AtABZIQut8IJTLLIwuN8g");
	var mask_graphics_341 = new cjs.Graphics().p("AtKBhIRCuMIJTLLIxBOMg");
	var mask_graphics_342 = new cjs.Graphics().p("AtUBpIRVucIJULLIxVOcg");
	var mask_graphics_343 = new cjs.Graphics().p("AtdBxIRousIJTLLIxoOsg");
	var mask_graphics_344 = new cjs.Graphics().p("AtnB5IR7u8IJULLIx8O8g");
	var mask_graphics_345 = new cjs.Graphics().p("AtxCBISPvMIJULLIyPPMg");
	var mask_graphics_346 = new cjs.Graphics().p("At7CKISjvdIJULKIyjPdg");
	var mask_graphics_347 = new cjs.Graphics().p("AuECRIS1vsIJULLIy2Psg");
	var mask_graphics_348 = new cjs.Graphics().p("AuOCaITJv9IJULLIzJP8g");
	var mask_graphics_349 = new cjs.Graphics().p("AuXCiITcwNIJTLKIzcQNg");
	var mask_graphics_350 = new cjs.Graphics().p("AuhCqITwwdIJTLKIzwQdg");
	var mask_graphics_351 = new cjs.Graphics().p("AurCyIUDwtIJULKI0DQug");
	var mask_graphics_352 = new cjs.Graphics().p("Au0C6IUWw+IJULLI0XQ9g");
	var mask_graphics_353 = new cjs.Graphics().p("Au+DCIUqxNIJTLKI0qROg");
	var mask_graphics_354 = new cjs.Graphics().p("AvIDKIU+xeIJTLLI0+Reg");
	var mask_graphics_355 = new cjs.Graphics().p("AvSDSIVRxuIJULLI1RRug");
	var mask_graphics_356 = new cjs.Graphics().p("AvbDaIVkx+IJTLLI1kR+g");
	var mask_graphics_357 = new cjs.Graphics().p("AvlDjIV4yPIJTLKI14SPg");
	var mask_graphics_358 = new cjs.Graphics().p("AvvDqIWLyeIJULKI2MSfg");
	var mask_graphics_359 = new cjs.Graphics().p("Av4DzIWeyvIJTLKI2eSvg");
	var mask_graphics_360 = new cjs.Graphics().p("ACqSuIWzy/IJTLJI2zTAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(293).to({graphics:mask_graphics_293,x:155.3,y:192.9}).wait(1).to({graphics:mask_graphics_294,x:273.9,y:342.7}).wait(1).to({graphics:mask_graphics_295,x:274.9,y:341.8}).wait(1).to({graphics:mask_graphics_296,x:276,y:341}).wait(1).to({graphics:mask_graphics_297,x:277,y:340.1}).wait(1).to({graphics:mask_graphics_298,x:278,y:339.2}).wait(1).to({graphics:mask_graphics_299,x:279.1,y:338.4}).wait(1).to({graphics:mask_graphics_300,x:280.1,y:337.5}).wait(1).to({graphics:mask_graphics_301,x:281.1,y:336.7}).wait(1).to({graphics:mask_graphics_302,x:282.2,y:335.8}).wait(1).to({graphics:mask_graphics_303,x:283.2,y:334.9}).wait(1).to({graphics:mask_graphics_304,x:284.2,y:334.1}).wait(1).to({graphics:mask_graphics_305,x:285.3,y:333.2}).wait(1).to({graphics:mask_graphics_306,x:286.3,y:332.4}).wait(1).to({graphics:mask_graphics_307,x:287.3,y:331.5}).wait(1).to({graphics:mask_graphics_308,x:288.4,y:330.6}).wait(1).to({graphics:mask_graphics_309,x:289.4,y:329.8}).wait(1).to({graphics:mask_graphics_310,x:290.4,y:328.9}).wait(1).to({graphics:mask_graphics_311,x:291.5,y:328}).wait(1).to({graphics:mask_graphics_312,x:292.5,y:327.2}).wait(1).to({graphics:mask_graphics_313,x:293.5,y:326.3}).wait(1).to({graphics:mask_graphics_314,x:294.6,y:325.5}).wait(1).to({graphics:mask_graphics_315,x:295.6,y:324.6}).wait(1).to({graphics:mask_graphics_316,x:296.6,y:323.7}).wait(1).to({graphics:mask_graphics_317,x:297.7,y:322.9}).wait(1).to({graphics:mask_graphics_318,x:298.7,y:322}).wait(1).to({graphics:mask_graphics_319,x:299.7,y:321.2}).wait(1).to({graphics:mask_graphics_320,x:300.8,y:320.3}).wait(1).to({graphics:mask_graphics_321,x:301.8,y:319.4}).wait(1).to({graphics:mask_graphics_322,x:302.8,y:318.6}).wait(1).to({graphics:mask_graphics_323,x:303.9,y:317.7}).wait(1).to({graphics:mask_graphics_324,x:304.9,y:316.9}).wait(1).to({graphics:mask_graphics_325,x:305.9,y:316}).wait(1).to({graphics:mask_graphics_326,x:306.9,y:315.1}).wait(1).to({graphics:mask_graphics_327,x:308,y:314.3}).wait(1).to({graphics:mask_graphics_328,x:309,y:313.4}).wait(1).to({graphics:mask_graphics_329,x:310.1,y:312.6}).wait(1).to({graphics:mask_graphics_330,x:311.1,y:311.7}).wait(1).to({graphics:mask_graphics_331,x:312.1,y:310.8}).wait(1).to({graphics:mask_graphics_332,x:313.2,y:310}).wait(1).to({graphics:mask_graphics_333,x:314.2,y:309.1}).wait(1).to({graphics:mask_graphics_334,x:315.2,y:308.3}).wait(1).to({graphics:mask_graphics_335,x:316.3,y:307.4}).wait(1).to({graphics:mask_graphics_336,x:317.3,y:306.5}).wait(1).to({graphics:mask_graphics_337,x:318.3,y:305.7}).wait(1).to({graphics:mask_graphics_338,x:319.3,y:304.8}).wait(1).to({graphics:mask_graphics_339,x:320.4,y:304}).wait(1).to({graphics:mask_graphics_340,x:321.4,y:303.1}).wait(1).to({graphics:mask_graphics_341,x:322.5,y:302.2}).wait(1).to({graphics:mask_graphics_342,x:323.5,y:301.4}).wait(1).to({graphics:mask_graphics_343,x:324.5,y:300.5}).wait(1).to({graphics:mask_graphics_344,x:325.6,y:299.6}).wait(1).to({graphics:mask_graphics_345,x:326.6,y:298.8}).wait(1).to({graphics:mask_graphics_346,x:327.6,y:297.9}).wait(1).to({graphics:mask_graphics_347,x:328.7,y:297.1}).wait(1).to({graphics:mask_graphics_348,x:329.7,y:296.2}).wait(1).to({graphics:mask_graphics_349,x:330.7,y:295.3}).wait(1).to({graphics:mask_graphics_350,x:331.7,y:294.5}).wait(1).to({graphics:mask_graphics_351,x:332.8,y:293.6}).wait(1).to({graphics:mask_graphics_352,x:333.8,y:292.8}).wait(1).to({graphics:mask_graphics_353,x:334.8,y:291.9}).wait(1).to({graphics:mask_graphics_354,x:335.9,y:291}).wait(1).to({graphics:mask_graphics_355,x:336.9,y:290.2}).wait(1).to({graphics:mask_graphics_356,x:338,y:289.3}).wait(1).to({graphics:mask_graphics_357,x:339,y:288.5}).wait(1).to({graphics:mask_graphics_358,x:340,y:287.6}).wait(1).to({graphics:mask_graphics_359,x:341.1,y:286.7}).wait(1).to({graphics:mask_graphics_360,x:222.4,y:191.2}).wait(81));

	// Layer 13
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(20,1,1).p("AqUHUQFJhjDniNQBmg/BThHQERjoEvlJ");
	this.shape_1.setTransform(342.6,286.1);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(293).to({_off:false},0).wait(148));

	// Layer 12 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_270 = new cjs.Graphics().p("AF1YFQAHkHC9i5QDCi9EOADQEOADC9DCQC5C9ABEHg");
	var mask_1_graphics_271 = new cjs.Graphics().p("AIWRZQCxjMEOgTQENgUDMCxQDICuAXEGI0VBcQgPkGCtjIg");
	var mask_1_graphics_272 = new cjs.Graphics().p("AH4RoQCgjaELgpQELgqDaCgQDWCcAsEEI0JDHQglkECcjWg");
	var mask_1_graphics_273 = new cjs.Graphics().p("AHgR6QCOjmEGg/QEHhADmCNQDiCLBCD+Iz1EyQg6kBCKjig");
	var mask_1_graphics_274 = new cjs.Graphics().p("AHOSPQB6jxEBhVQEAhUDyB5QDsB3BWD5IzXGZQhPj7B3jtg");
	var mask_1_graphics_275 = new cjs.Graphics().p("AHCSnQBmj7D5hpQD4hqD7BlQD1BkBrDwIyxH+Qhkj0Bjj1g");
	var mask_1_graphics_276 = new cjs.Graphics().p("AG9TBQBQkCDvh+QDvh+ECBRQD9BOB+DnIyDJfQh3jqBPj9g");
	var mask_1_graphics_277 = new cjs.Graphics().p("AG9TdQA7kHDkiRQDkiSEIA7QECA6CQDbIxMK9QiKjgA5kDg");
	var mask_1_graphics_278 = new cjs.Graphics().p("AHET8QAlkMDXijQDXikEMAlQEGAkCiDPIwPMVQicjUAkkGg");
	var mask_1_graphics_279 = new cjs.Graphics().p("AHQUcQAPkODJi0QDJi1EOAPQEIAOCzDBIvLNoQitjGAOkJg");
	var mask_1_graphics_280 = new cjs.Graphics().p("AHjU+QgHkOC5jEQC5jFEOgIQEJgIDCCyIt/O1Qi9i3gIkJg");
	var mask_1_graphics_281 = new cjs.Graphics().p("AH8ViQgekNCpjTQCojTENgeQEHgeDQChIsuP8QjLingekHg");
	var mask_1_graphics_282 = new cjs.Graphics().p("AIaWHQg0kKCXjgQCXjhEJg0QEDgzDdCPIrXQ8QjYiWg0kDg");
	var mask_1_graphics_283 = new cjs.Graphics().p("AI/WsQhKkECDjsQCEjsEEhKQD+hIDoB8Ip7R0QjkiDhIj/g");
	var mask_1_graphics_284 = new cjs.Graphics().p("AJoXSQhfj9Bwj2QBvj2D9hfQD4hdDxBpIobSkQjuhwhdj4g");
	var mask_1_graphics_285 = new cjs.Graphics().p("AKWX5Qhzj0Bbj/QBbj+D0h0QDvhxD5BVIm3TMQj2hchyjvg");
	var mask_1_graphics_286 = new cjs.Graphics().p("ALJYgQiHjqBGkFQBFkFDqiHQDliFD/BAIlQTsQj9hHiFjlg");
	var mask_1_graphics_287 = new cjs.Graphics().p("AMBZHQiajeAvkKQAwkKDeiaQDZiXEEAqIjnUEQkCgyiXjZg");
	var mask_1_graphics_288 = new cjs.Graphics().p("AM8ZtQisjQAakNQAakNDQisQDMipEGAVIh8UTQkFgdipjMg");
	var mask_1_graphics_289 = new cjs.Graphics().p("AN7aTQi8jBADkPQADkODCi8QC9i5EHgBIgQUZQkHgHi5i+g");
	var mask_1_graphics_290 = new cjs.Graphics().p("AOQa4QjMiygTkNQgTkOCxjMQCujIEGgWIBbUVIgoACQjuAAi4igg");
	var mask_1_graphics_291 = new cjs.Graphics().p("AOfbZQjaiggpkMQgpkLCgjZQCcjWEDgsIDHUKQgxAGgvAAQjNAAith+g");
	var mask_1_graphics_292 = new cjs.Graphics().p("AOxb2QjmiOg/kGQg/kHCNjmQCKjiD/hBIEwT0QhLARhJAAQivAAifhhg");
	var mask_1_graphics_293 = new cjs.Graphics().p("APGcPQjxh6hVkAQhUkBB5jxQB4jtD4hVIGYTXQhjAfhiAAQiUAAiOhIg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(270).to({graphics:mask_1_graphics_270,x:167.8,y:155.6}).wait(1).to({graphics:mask_1_graphics_271,x:167.7,y:157.5}).wait(1).to({graphics:mask_1_graphics_272,x:167.4,y:160.2}).wait(1).to({graphics:mask_1_graphics_273,x:166.9,y:162.9}).wait(1).to({graphics:mask_1_graphics_274,x:166.1,y:165.5}).wait(1).to({graphics:mask_1_graphics_275,x:165.2,y:168}).wait(1).to({graphics:mask_1_graphics_276,x:164,y:170.4}).wait(1).to({graphics:mask_1_graphics_277,x:162.6,y:172.8}).wait(1).to({graphics:mask_1_graphics_278,x:161.1,y:175}).wait(1).to({graphics:mask_1_graphics_279,x:159.4,y:177.1}).wait(1).to({graphics:mask_1_graphics_280,x:157.5,y:179}).wait(1).to({graphics:mask_1_graphics_281,x:155.5,y:180.8}).wait(1).to({graphics:mask_1_graphics_282,x:153.3,y:182.4}).wait(1).to({graphics:mask_1_graphics_283,x:151,y:183.8}).wait(1).to({graphics:mask_1_graphics_284,x:148.6,y:185}).wait(1).to({graphics:mask_1_graphics_285,x:146.1,y:186}).wait(1).to({graphics:mask_1_graphics_286,x:143.5,y:186.8}).wait(1).to({graphics:mask_1_graphics_287,x:140.9,y:187.4}).wait(1).to({graphics:mask_1_graphics_288,x:138.2,y:187.8}).wait(1).to({graphics:mask_1_graphics_289,x:135.5,y:188}).wait(1).to({graphics:mask_1_graphics_290,x:137.4,y:188}).wait(1).to({graphics:mask_1_graphics_291,x:140.1,y:187.9}).wait(1).to({graphics:mask_1_graphics_292,x:142.7,y:187.9}).wait(1).to({graphics:mask_1_graphics_293,x:145.3,y:187.9}).wait(148));

	// Layer 11
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(20,1,1).p("ADXpcQh2DVkOIqQkPIsHfiQQB+glBvgs");
	this.shape_2.setTransform(272.3,275.5);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(270).to({_off:false},0).wait(171));

	// Layer 4 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_225 = new cjs.Graphics().p("ARCOQIBrjkIGuDKIhrDkg");
	var mask_2_graphics_226 = new cjs.Graphics().p("AkRAYIB2j5IGtDKIh2D5g");
	var mask_2_graphics_227 = new cjs.Graphics().p("AkWAjICAkPIGtDKIiAEPg");
	var mask_2_graphics_228 = new cjs.Graphics().p("AkbAuICLklIGsDKIiLElg");
	var mask_2_graphics_229 = new cjs.Graphics().p("AkgA5ICVk7IGsDKIiVE7g");
	var mask_2_graphics_230 = new cjs.Graphics().p("AklBEICflRIGsDKIifFRg");
	var mask_2_graphics_231 = new cjs.Graphics().p("AkrBPICqlnIGtDKIiqFng");
	var mask_2_graphics_232 = new cjs.Graphics().p("AkwBaIC0l9IGtDKIi0F9g");
	var mask_2_graphics_233 = new cjs.Graphics().p("Ak1BlIC/mTIGsDKIi/GTg");
	var mask_2_graphics_234 = new cjs.Graphics().p("Ak6BwIDJmpIGsDKIjJGpg");
	var mask_2_graphics_235 = new cjs.Graphics().p("Ak/B7IDTm/IGsDKIjTG/g");
	var mask_2_graphics_236 = new cjs.Graphics().p("AlECGIDdnVIGtDKIjeHVg");
	var mask_2_graphics_237 = new cjs.Graphics().p("AlJCRIDnnrIGtDKIjoHrg");
	var mask_2_graphics_238 = new cjs.Graphics().p("AlPCcIDyoBIGtDKIjyIBg");
	var mask_2_graphics_239 = new cjs.Graphics().p("AlUCnID9oXIGsDKIj9IXg");
	var mask_2_graphics_240 = new cjs.Graphics().p("AlZCyIEHotIGsDKIkHItg");
	var mask_2_graphics_241 = new cjs.Graphics().p("AleC9IERpDIGsDKIkRJDg");
	var mask_2_graphics_242 = new cjs.Graphics().p("AljDIIEbpZIGtDKIkcJZg");
	var mask_2_graphics_243 = new cjs.Graphics().p("AloDTIElpvIGtDKIkmJvg");
	var mask_2_graphics_244 = new cjs.Graphics().p("AluDeIEwqFIGtDKIkwKFg");
	var mask_2_graphics_245 = new cjs.Graphics().p("AlzDpIE7qbIGsDKIk6Kbg");
	var mask_2_graphics_246 = new cjs.Graphics().p("Al4D0IFFqxIGsDKIlFKxg");
	var mask_2_graphics_247 = new cjs.Graphics().p("Al9D/IFPrHIGsDKIlPLHg");
	var mask_2_graphics_248 = new cjs.Graphics().p("AmCEJIFZrcIGtDLIlaLcg");
	var mask_2_graphics_249 = new cjs.Graphics().p("AmIEUIFkryIGtDLIlkLyg");
	var mask_2_graphics_250 = new cjs.Graphics().p("AmNEfIFusIIGtDLIluMIg");
	var mask_2_graphics_251 = new cjs.Graphics().p("AmSEqIF5seIGsDLIl4Meg");
	var mask_2_graphics_252 = new cjs.Graphics().p("AmXE1IGDs0IGsDLImDM0g");
	var mask_2_graphics_253 = new cjs.Graphics().p("AmcFAIGNtKIGsDLImNNKg");
	var mask_2_graphics_254 = new cjs.Graphics().p("AmiFLIGYtgIGtDLImYNgg");
	var mask_2_graphics_255 = new cjs.Graphics().p("AmnFWIGit2IGtDLImiN2g");
	var mask_2_graphics_256 = new cjs.Graphics().p("AmsFhIGsuMIGtDLImsOMg");
	var mask_2_graphics_257 = new cjs.Graphics().p("AmxFsIG2uiIGtDLIm1Oig");
	var mask_2_graphics_258 = new cjs.Graphics().p("Am2F3IHAu4IGtDLInAO4g");
	var mask_2_graphics_259 = new cjs.Graphics().p("Am7GCIHKvOIGtDLInKPOg");
	var mask_2_graphics_260 = new cjs.Graphics().p("AnBGNIHVvkIGuDLInVPkg");
	var mask_2_graphics_261 = new cjs.Graphics().p("AnGGYIHfv6IGuDLInfP6g");
	var mask_2_graphics_262 = new cjs.Graphics().p("AnLGjIHpwQIGuDLInpQQg");
	var mask_2_graphics_263 = new cjs.Graphics().p("AnQGuIH0wmIGtDLInzQmg");
	var mask_2_graphics_264 = new cjs.Graphics().p("AnVG5IH+w8IGtDLIn+Q8g");
	var mask_2_graphics_265 = new cjs.Graphics().p("AnbHEIIJxSIGuDLIoJRSg");
	var mask_2_graphics_266 = new cjs.Graphics().p("AngHPIITxoIGuDLIoTRog");
	var mask_2_graphics_267 = new cjs.Graphics().p("AnlHaIIdx+IGuDLIodR+g");
	var mask_2_graphics_268 = new cjs.Graphics().p("AnqHlIIoyUIGtDLIooSUg");
	var mask_2_graphics_269 = new cjs.Graphics().p("AnvHwIIyyqIGtDLIoxSqg");
	var mask_2_graphics_270 = new cjs.Graphics().p("AJwV+II9zBIGuDLIo9TBg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(225).to({graphics:mask_2_graphics_225,x:162.7,y:111.4}).wait(1).to({graphics:mask_2_graphics_226,x:298,y:202.4}).wait(1).to({graphics:mask_2_graphics_227,x:297.5,y:203.5}).wait(1).to({graphics:mask_2_graphics_228,x:297,y:204.6}).wait(1).to({graphics:mask_2_graphics_229,x:296.4,y:205.7}).wait(1).to({graphics:mask_2_graphics_230,x:295.9,y:206.8}).wait(1).to({graphics:mask_2_graphics_231,x:295.4,y:207.9}).wait(1).to({graphics:mask_2_graphics_232,x:294.9,y:209}).wait(1).to({graphics:mask_2_graphics_233,x:294.4,y:210.1}).wait(1).to({graphics:mask_2_graphics_234,x:293.9,y:211.2}).wait(1).to({graphics:mask_2_graphics_235,x:293.3,y:212.3}).wait(1).to({graphics:mask_2_graphics_236,x:292.8,y:213.4}).wait(1).to({graphics:mask_2_graphics_237,x:292.3,y:214.5}).wait(1).to({graphics:mask_2_graphics_238,x:291.8,y:215.6}).wait(1).to({graphics:mask_2_graphics_239,x:291.3,y:216.7}).wait(1).to({graphics:mask_2_graphics_240,x:290.8,y:217.8}).wait(1).to({graphics:mask_2_graphics_241,x:290.2,y:218.9}).wait(1).to({graphics:mask_2_graphics_242,x:289.7,y:220}).wait(1).to({graphics:mask_2_graphics_243,x:289.2,y:221.1}).wait(1).to({graphics:mask_2_graphics_244,x:288.7,y:222.2}).wait(1).to({graphics:mask_2_graphics_245,x:288.2,y:223.3}).wait(1).to({graphics:mask_2_graphics_246,x:287.7,y:224.4}).wait(1).to({graphics:mask_2_graphics_247,x:287.1,y:225.5}).wait(1).to({graphics:mask_2_graphics_248,x:286.6,y:226.6}).wait(1).to({graphics:mask_2_graphics_249,x:286.1,y:227.7}).wait(1).to({graphics:mask_2_graphics_250,x:285.6,y:228.8}).wait(1).to({graphics:mask_2_graphics_251,x:285.1,y:229.9}).wait(1).to({graphics:mask_2_graphics_252,x:284.5,y:231}).wait(1).to({graphics:mask_2_graphics_253,x:284,y:232.1}).wait(1).to({graphics:mask_2_graphics_254,x:283.5,y:233.2}).wait(1).to({graphics:mask_2_graphics_255,x:283,y:234.3}).wait(1).to({graphics:mask_2_graphics_256,x:282.5,y:235.4}).wait(1).to({graphics:mask_2_graphics_257,x:282,y:236.5}).wait(1).to({graphics:mask_2_graphics_258,x:281.4,y:237.6}).wait(1).to({graphics:mask_2_graphics_259,x:280.9,y:238.7}).wait(1).to({graphics:mask_2_graphics_260,x:280.4,y:239.8}).wait(1).to({graphics:mask_2_graphics_261,x:279.9,y:240.9}).wait(1).to({graphics:mask_2_graphics_262,x:279.4,y:242}).wait(1).to({graphics:mask_2_graphics_263,x:278.9,y:243.1}).wait(1).to({graphics:mask_2_graphics_264,x:278.3,y:244.2}).wait(1).to({graphics:mask_2_graphics_265,x:277.8,y:245.3}).wait(1).to({graphics:mask_2_graphics_266,x:277.3,y:246.4}).wait(1).to({graphics:mask_2_graphics_267,x:276.8,y:247.5}).wait(1).to({graphics:mask_2_graphics_268,x:276.3,y:248.6}).wait(1).to({graphics:mask_2_graphics_269,x:275.8,y:249.7}).wait(1).to({graphics:mask_2_graphics_270,x:162.7,y:160.9}).wait(171));

	// Layer 5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(20,1,1).p("AlLpcQh1DVkPIqQkQIsHhiQQHgiPEQjpQERjnEvlJ");
	this.shape_3.setTransform(326.9,275.5);
	this.shape_3._off = true;

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(225).to({_off:false},0).wait(216));

	// Layer 17
	this.instance_2 = new lib.ar1("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(212.5,259.8,1,1,177,0,0,-0.8,0.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(432));

	// Layer 10 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_141 = new cjs.Graphics().p("ABpWyIG4nlIJZIiIm4Hlg");
	var mask_3_graphics_142 = new cjs.Graphics().p("AoPgVIHHn1IJYIgInGH1g");
	var mask_3_graphics_143 = new cjs.Graphics().p("AoXgOIHWoEIJYIgInUIGg");
	var mask_3_graphics_144 = new cjs.Graphics().p("AoegGIHloUIJYIfInjIXg");
	var mask_3_graphics_145 = new cjs.Graphics().p("AolABIH0okIJXIhInyImg");
	var mask_3_graphics_146 = new cjs.Graphics().p("AotAJIIDo0IJYIhIoBI2g");
	var mask_3_graphics_147 = new cjs.Graphics().p("Ao0ARIISpEIJXIhIoPJGg");
	var mask_3_graphics_148 = new cjs.Graphics().p("Ao7AZIIhpUIJWIhIodJWg");
	var mask_3_graphics_149 = new cjs.Graphics().p("ApDAhIIwpkIJXIgIosJng");
	var mask_3_graphics_150 = new cjs.Graphics().p("ApKApII/p0IJWIgIo6J3g");
	var mask_3_graphics_151 = new cjs.Graphics().p("ApSAxIJPqEIJVIgIpJKHg");
	var mask_3_graphics_152 = new cjs.Graphics().p("ApZA5IJdqVIJWIgIpXKZg");
	var mask_3_graphics_153 = new cjs.Graphics().p("ApgBAIJsqkIJVIgIpkKpg");
	var mask_3_graphics_154 = new cjs.Graphics().p("ApoBIIJ7q0IJWIgIpzK5g");
	var mask_3_graphics_155 = new cjs.Graphics().p("ApvBQIKKrEIJVIfIqCLKg");
	var mask_3_graphics_156 = new cjs.Graphics().p("Ap3BYIKZrUIJWIfIqQLag");
	var mask_3_graphics_157 = new cjs.Graphics().p("Ap+BgIKorkIJVIfIqfLqg");
	var mask_3_graphics_158 = new cjs.Graphics().p("AqFBoIK3r0IJUIfIqtL6g");
	var mask_3_graphics_159 = new cjs.Graphics().p("AqNBwILGsEIJVIeIq8MLg");
	var mask_3_graphics_160 = new cjs.Graphics().p("AqUB4ILVsUIJUIeIrLMbg");
	var mask_3_graphics_161 = new cjs.Graphics().p("AqbB/ILksjIJTIdIrYMsg");
	var mask_3_graphics_162 = new cjs.Graphics().p("AqjCIILzs1IJUIfIroM8g");
	var mask_3_graphics_163 = new cjs.Graphics().p("AqqCPIMCtEIJTIeIr2NNg");
	var mask_3_graphics_164 = new cjs.Graphics().p("AqxCXIMRtUIJSIeIsENdg");
	var mask_3_graphics_165 = new cjs.Graphics().p("Aq5CgIMgtlIJTIeIsTNtg");
	var mask_3_graphics_166 = new cjs.Graphics().p("ArACnIMvt0IJSIdIshN+g");
	var mask_3_graphics_167 = new cjs.Graphics().p("ArICvIM/uEIJSIdIswOOg");
	var mask_3_graphics_168 = new cjs.Graphics().p("ArPC3INNuUIJSIdIs+Oeg");
	var mask_3_graphics_169 = new cjs.Graphics().p("ArWC/INcukIJRIdItMOug");
	var mask_3_graphics_170 = new cjs.Graphics().p("AreDHINsu0IJRIdItcO+g");
	var mask_3_graphics_171 = new cjs.Graphics().p("ArlDPIN6vEIJRIcItpPPg");
	var mask_3_graphics_172 = new cjs.Graphics().p("ArsDXIOJvVIJQIdIt4Pgg");
	var mask_3_graphics_173 = new cjs.Graphics().p("Ar0DeIOYvkIJRIdIuHPwg");
	var mask_3_graphics_174 = new cjs.Graphics().p("Ar7DmIOnv0IJQIcIuUQBg");
	var mask_3_graphics_175 = new cjs.Graphics().p("AsCDuIO3wEIJOIcIuiQRg");
	var mask_3_graphics_176 = new cjs.Graphics().p("AsKD2IPGwUIJPIcIuyQhg");
	var mask_3_graphics_177 = new cjs.Graphics().p("AsRD+IPVwlIJOIcIvAQzg");
	var mask_3_graphics_178 = new cjs.Graphics().p("AsZEFIPkwzIJPIbIvPRDg");
	var mask_3_graphics_179 = new cjs.Graphics().p("AsgEOIPzxFIJOIcIvdRTg");
	var mask_3_graphics_180 = new cjs.Graphics().p("AsnEWIQBxVIJPIcIvsRjg");
	var mask_3_graphics_181 = new cjs.Graphics().p("AsvEdIQRxkIJOIbIv6R0g");
	var mask_3_graphics_182 = new cjs.Graphics().p("As2EmIQgx1IJNIbIwISEg");
	var mask_3_graphics_183 = new cjs.Graphics().p("As9EtIQuyEIJNIaIwWSVg");
	var mask_3_graphics_184 = new cjs.Graphics().p("AtFE1IQ+yUIJNIbIwlSkg");
	var mask_3_graphics_185 = new cjs.Graphics().p("AtME9IRNykIJMIaIw0S1g");
	var mask_3_graphics_186 = new cjs.Graphics().p("AtTFFIRby0IJMIaIxCTFg");
	var mask_3_graphics_187 = new cjs.Graphics().p("AtbFNIRrzFIJMIbIxRTWg");
	var mask_3_graphics_188 = new cjs.Graphics().p("AtiFUIR6zTIJLIZIxfTng");
	var mask_3_graphics_189 = new cjs.Graphics().p("AtqFdISJzlIJMIaIxuT3g");
	var mask_3_graphics_190 = new cjs.Graphics().p("AtxFlISYz1IJLIaIx8UHg");
	var mask_3_graphics_191 = new cjs.Graphics().p("At4FsISm0EIJMIaIyMUXg");
	var mask_3_graphics_192 = new cjs.Graphics().p("AuAF1IS20VIJLIaIyaUng");
	var mask_3_graphics_193 = new cjs.Graphics().p("AuHF9ITF0lIJKIZIyoU4g");
	var mask_3_graphics_194 = new cjs.Graphics().p("AuOGEITT00IJKIZIy2VIg");
	var mask_3_graphics_195 = new cjs.Graphics().p("AuWGMITj1EIJKIZIzFVYg");
	var mask_3_graphics_196 = new cjs.Graphics().p("AudGUITy1UIJJIYIzTVpg");
	var mask_3_graphics_197 = new cjs.Graphics().p("AulGcIUC1lIJJIZIziV6g");
	var mask_3_graphics_198 = new cjs.Graphics().p("AusGkIUR11IJIIZIzwWKg");
	var mask_3_graphics_199 = new cjs.Graphics().p("Au0GsIUg2FIJIIYIz+Wbg");
	var mask_3_graphics_200 = new cjs.Graphics().p("Au7G0IUv2VIJIIYI0OWrg");
	var mask_3_graphics_201 = new cjs.Graphics().p("AvCG7IU+2kIJHIYI0bW7g");
	var mask_3_graphics_202 = new cjs.Graphics().p("AvKHDIVN20IJIIYI0rXLg");
	var mask_3_graphics_203 = new cjs.Graphics().p("AvRHLIVc3EIJHIXI04Xcg");
	var mask_3_graphics_204 = new cjs.Graphics().p("AvZHTIVs3VIJGIYI1HXsg");
	var mask_3_graphics_205 = new cjs.Graphics().p("AvgHbIV63kIJHIXI1WX8g");
	var mask_3_graphics_206 = new cjs.Graphics().p("AvnHjIWJ31IJGIYI1kYNg");
	var mask_3_graphics_207 = new cjs.Graphics().p("AvuHqIWX4EIJGIXI1yYeg");
	var mask_3_graphics_208 = new cjs.Graphics().p("Av8H/IWs4nIJMIaI2SY3g");
	var mask_3_graphics_209 = new cjs.Graphics().p("AwIISIW+5JIJTIeI2yZRg");
	var mask_3_graphics_210 = new cjs.Graphics().p("AmlWzIXS5sIJaIhI3TZtg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(141).to({graphics:mask_3_graphics_141,x:114.6,y:200.4}).wait(1).to({graphics:mask_3_graphics_142,x:177.9,y:348.4}).wait(1).to({graphics:mask_3_graphics_143,x:178.7,y:347.6}).wait(1).to({graphics:mask_3_graphics_144,x:179.4,y:346.8}).wait(1).to({graphics:mask_3_graphics_145,x:180.1,y:346}).wait(1).to({graphics:mask_3_graphics_146,x:180.9,y:345.2}).wait(1).to({graphics:mask_3_graphics_147,x:181.6,y:344.4}).wait(1).to({graphics:mask_3_graphics_148,x:182.3,y:343.6}).wait(1).to({graphics:mask_3_graphics_149,x:183.1,y:342.8}).wait(1).to({graphics:mask_3_graphics_150,x:183.8,y:341.9}).wait(1).to({graphics:mask_3_graphics_151,x:184.6,y:341.1}).wait(1).to({graphics:mask_3_graphics_152,x:185.3,y:340.3}).wait(1).to({graphics:mask_3_graphics_153,x:186,y:339.5}).wait(1).to({graphics:mask_3_graphics_154,x:186.7,y:338.7}).wait(1).to({graphics:mask_3_graphics_155,x:187.5,y:337.9}).wait(1).to({graphics:mask_3_graphics_156,x:188.2,y:337.1}).wait(1).to({graphics:mask_3_graphics_157,x:188.9,y:336.3}).wait(1).to({graphics:mask_3_graphics_158,x:189.7,y:335.5}).wait(1).to({graphics:mask_3_graphics_159,x:190.4,y:334.7}).wait(1).to({graphics:mask_3_graphics_160,x:191.2,y:333.9}).wait(1).to({graphics:mask_3_graphics_161,x:191.9,y:333.1}).wait(1).to({graphics:mask_3_graphics_162,x:192.6,y:332.2}).wait(1).to({graphics:mask_3_graphics_163,x:193.4,y:331.4}).wait(1).to({graphics:mask_3_graphics_164,x:194.1,y:330.6}).wait(1).to({graphics:mask_3_graphics_165,x:194.8,y:329.8}).wait(1).to({graphics:mask_3_graphics_166,x:195.6,y:329}).wait(1).to({graphics:mask_3_graphics_167,x:196.3,y:328.2}).wait(1).to({graphics:mask_3_graphics_168,x:197,y:327.4}).wait(1).to({graphics:mask_3_graphics_169,x:197.8,y:326.6}).wait(1).to({graphics:mask_3_graphics_170,x:198.5,y:325.8}).wait(1).to({graphics:mask_3_graphics_171,x:199.3,y:325}).wait(1).to({graphics:mask_3_graphics_172,x:200,y:324.1}).wait(1).to({graphics:mask_3_graphics_173,x:200.7,y:323.3}).wait(1).to({graphics:mask_3_graphics_174,x:201.5,y:322.6}).wait(1).to({graphics:mask_3_graphics_175,x:202.2,y:321.7}).wait(1).to({graphics:mask_3_graphics_176,x:202.9,y:320.9}).wait(1).to({graphics:mask_3_graphics_177,x:203.6,y:320.1}).wait(1).to({graphics:mask_3_graphics_178,x:204.4,y:319.3}).wait(1).to({graphics:mask_3_graphics_179,x:205.1,y:318.5}).wait(1).to({graphics:mask_3_graphics_180,x:205.9,y:317.7}).wait(1).to({graphics:mask_3_graphics_181,x:206.6,y:316.9}).wait(1).to({graphics:mask_3_graphics_182,x:207.3,y:316.1}).wait(1).to({graphics:mask_3_graphics_183,x:208.1,y:315.3}).wait(1).to({graphics:mask_3_graphics_184,x:208.8,y:314.4}).wait(1).to({graphics:mask_3_graphics_185,x:209.5,y:313.6}).wait(1).to({graphics:mask_3_graphics_186,x:210.3,y:312.8}).wait(1).to({graphics:mask_3_graphics_187,x:211,y:312}).wait(1).to({graphics:mask_3_graphics_188,x:211.7,y:311.2}).wait(1).to({graphics:mask_3_graphics_189,x:212.5,y:310.4}).wait(1).to({graphics:mask_3_graphics_190,x:213.2,y:309.6}).wait(1).to({graphics:mask_3_graphics_191,x:214,y:308.8}).wait(1).to({graphics:mask_3_graphics_192,x:214.7,y:308}).wait(1).to({graphics:mask_3_graphics_193,x:215.4,y:307.2}).wait(1).to({graphics:mask_3_graphics_194,x:216.2,y:306.3}).wait(1).to({graphics:mask_3_graphics_195,x:216.9,y:305.5}).wait(1).to({graphics:mask_3_graphics_196,x:217.6,y:304.7}).wait(1).to({graphics:mask_3_graphics_197,x:218.3,y:303.9}).wait(1).to({graphics:mask_3_graphics_198,x:219.1,y:303.1}).wait(1).to({graphics:mask_3_graphics_199,x:219.8,y:302.3}).wait(1).to({graphics:mask_3_graphics_200,x:220.6,y:301.5}).wait(1).to({graphics:mask_3_graphics_201,x:221.3,y:300.7}).wait(1).to({graphics:mask_3_graphics_202,x:222,y:299.9}).wait(1).to({graphics:mask_3_graphics_203,x:222.8,y:299.1}).wait(1).to({graphics:mask_3_graphics_204,x:223.5,y:298.3}).wait(1).to({graphics:mask_3_graphics_205,x:224.2,y:297.5}).wait(1).to({graphics:mask_3_graphics_206,x:225,y:296.6}).wait(1).to({graphics:mask_3_graphics_207,x:225.7,y:295.8}).wait(1).to({graphics:mask_3_graphics_208,x:227,y:294.4}).wait(1).to({graphics:mask_3_graphics_209,x:228.3,y:292.9}).wait(1).to({graphics:mask_3_graphics_210,x:167.1,y:200.5}).wait(231));

	// Layer 9
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(20,1,1).p("ALzpbQmAgBlMBeQlKBdjdEMQjeELgVD4QgVD5EPgLQEPgLG4m3QG4m2Bvk0");
	this.shape_4.setTransform(218.4,274.4);
	this.shape_4._off = true;

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(141).to({_off:false},0).wait(300));

	// Layer 8 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_113 = new cjs.Graphics().p("A0wJQQgysHIBpIQIBpHMGgxQMGg0JIIBMgmqAsAQpIoBgysFg");
	var mask_4_graphics_114 = new cjs.Graphics().p("A0jJiQg+sGH5pPQH4pPMFg8QMGg/JPH4MgmBAskQpPn4g9sFg");
	var mask_4_graphics_115 = new cjs.Graphics().p("A0WJ1QhJsFHvpXQHwpWMEhIQMFhKJWHwMglWAtHQpXnvhIsEg");
	var mask_4_graphics_116 = new cjs.Graphics().p("A0JKHQhUsDHnpeQHmpeMDhTQMEhVJeHnMgksAtqQpennhUsDg");
	var mask_4_graphics_117 = new cjs.Graphics().p("Az7KaQhfsCHdplQHeplMCheQMChhJlHeMgkBAuMQpkndhgsCg");
	var mask_4_graphics_118 = new cjs.Graphics().p("AzsKtQhrsBHVpsQHUprMAhqQMBhsJsHVMgjVAuuQpsnVhqsAg");
	var mask_4_graphics_119 = new cjs.Graphics().p("AzdLAQh2r/HLpzQHMpyL+h1QMAh3JyHLMgipAvPQpynMh2r+g");
	var mask_4_graphics_120 = new cjs.Graphics().p("AzNLTQiCr9HCp6QHDp5L8iAQL+iCJ5HCMgh8AvvQp5nCiBr9g");
	var mask_4_graphics_121 = new cjs.Graphics().p("Ay9LmQiNr7G5qAQG5qAL7iLQL7iNKAG5MghPAwOQqAm5iMr7g");
	var mask_4_graphics_122 = new cjs.Graphics().p("AytL6QiYr6GwqGQGvqGL5iXQL5iYKGGvMgghAwtQqGmviYr4g");
	var mask_4_graphics_123 = new cjs.Graphics().p("AycMNQijr4GmqLQGmqNL3ihQL3ikKMGmMgf0AxLQqMmmijr2g");
	var mask_4_graphics_124 = new cjs.Graphics().p("AyKMgQiur1GcqSQGdqSLzitQL1ivKSGdMgfFAxoQqSmciur0g");
	var mask_4_graphics_125 = new cjs.Graphics().p("Ax4M0Qi5rzGTqXQGSqZLyi4QLxi6KZGTMgeXAyGQqYmTi5rxg");
	var mask_4_graphics_126 = new cjs.Graphics().p("AxlNIQjErxGIqdQGJqeLvjDQLvjFKeGJMgdnAyiQqemJjErug");
	var mask_4_graphics_127 = new cjs.Graphics().p("AxSNbQjPrtF/qjQF/qkLrjOQLsjQKkF/Mgc3Ay9Qqkl/jPrrg");
	var mask_4_graphics_128 = new cjs.Graphics().p("Aw+NvQjbrqF1qpQF1qpLpjZQLpjbKpF1MgcHAzYQqql1jZrog");
	var mask_4_graphics_129 = new cjs.Graphics().p("AwqODQjmrnFrquQFrqvLmjkQLljlKvFrMgbXAzyQqvlrjkrlg");
	var mask_4_graphics_130 = new cjs.Graphics().p("AwWOXQjwrkFhqzQFhq0LijvQLijwK0FhMgamA0LQq0lhjwrhg");
	var mask_4_graphics_131 = new cjs.Graphics().p("AwBOrQj7rgFXq4QFXq6Lej5QLej8K5FXMgZ0A0kQq6lXj6rdg");
	var mask_4_graphics_132 = new cjs.Graphics().p("AvrO/QkGrcFNq+QFMq+LakEQLbkGK+FMMgZDA08Qq+lMkFrag");
	var mask_4_graphics_133 = new cjs.Graphics().p("AvVPTQkRrYFDrCQFCrDLWkPQLXkRLDFCMgYSA1TQrDlCkPrWg");
	var mask_4_graphics_134 = new cjs.Graphics().p("Au/PnQkbrUE4rHQE4rILSkZQLTkcLHE4MgXgA1pQrHk3karSg");
	var mask_4_graphics_135 = new cjs.Graphics().p("AuoP7QklrQEtrLQEtrMLOkkQLPkmLMEtMgWuA1/QrLktklrOg");
	var mask_4_graphics_136 = new cjs.Graphics().p("AuRQPQkwrLEjrQQEjrQLKkvQLJkxLREjMgV7A2UQrPkjkwrJg");
	var mask_4_graphics_137 = new cjs.Graphics().p("At5QjQk6rHEYrTQEYrVLFk5QLGk7LUEYMgVHA2oQrUkYk6rFg");
	var mask_4_graphics_138 = new cjs.Graphics().p("AtgQ3QlFrCENrXQENrZLBlEQLBlFLYENMgUUA28QrXkNlErBg");
	var mask_4_graphics_139 = new cjs.Graphics().p("AtIRMQlPq+EDrbQECrdK8lOQK8lPLcECMgTgA3PQrbkDlPq7g");
	var mask_4_graphics_140 = new cjs.Graphics().p("AsvRgQlZq5D4rfQD4rgK2lYQK3laLgD4MgSsA3gQrfj4lZq2g");
	var mask_4_graphics_141 = new cjs.Graphics().p("AsWR0QljqzDtrjQDtrkKyliQKxlkLkDtMgR4A3xQrjjtljqxg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(113).to({graphics:mask_4_graphics_113,x:178,y:187.8}).wait(1).to({graphics:mask_4_graphics_114,x:177,y:188.7}).wait(1).to({graphics:mask_4_graphics_115,x:175.9,y:189.6}).wait(1).to({graphics:mask_4_graphics_116,x:174.9,y:190.5}).wait(1).to({graphics:mask_4_graphics_117,x:173.8,y:191.3}).wait(1).to({graphics:mask_4_graphics_118,x:172.7,y:192.2}).wait(1).to({graphics:mask_4_graphics_119,x:171.6,y:193}).wait(1).to({graphics:mask_4_graphics_120,x:170.5,y:193.8}).wait(1).to({graphics:mask_4_graphics_121,x:169.4,y:194.6}).wait(1).to({graphics:mask_4_graphics_122,x:168.2,y:195.3}).wait(1).to({graphics:mask_4_graphics_123,x:167.1,y:196.1}).wait(1).to({graphics:mask_4_graphics_124,x:165.9,y:196.8}).wait(1).to({graphics:mask_4_graphics_125,x:164.8,y:197.6}).wait(1).to({graphics:mask_4_graphics_126,x:163.6,y:198.3}).wait(1).to({graphics:mask_4_graphics_127,x:162.4,y:198.9}).wait(1).to({graphics:mask_4_graphics_128,x:161.2,y:199.6}).wait(1).to({graphics:mask_4_graphics_129,x:160,y:200.3}).wait(1).to({graphics:mask_4_graphics_130,x:158.8,y:200.9}).wait(1).to({graphics:mask_4_graphics_131,x:157.5,y:201.5}).wait(1).to({graphics:mask_4_graphics_132,x:156.3,y:202.1}).wait(1).to({graphics:mask_4_graphics_133,x:155.1,y:202.7}).wait(1).to({graphics:mask_4_graphics_134,x:153.8,y:203.2}).wait(1).to({graphics:mask_4_graphics_135,x:152.6,y:203.8}).wait(1).to({graphics:mask_4_graphics_136,x:151.3,y:204.3}).wait(1).to({graphics:mask_4_graphics_137,x:150,y:204.8}).wait(1).to({graphics:mask_4_graphics_138,x:148.7,y:205.3}).wait(1).to({graphics:mask_4_graphics_139,x:147.4,y:205.8}).wait(1).to({graphics:mask_4_graphics_140,x:146.2,y:206.2}).wait(1).to({graphics:mask_4_graphics_141,x:144.8,y:206.6}).wait(300));

	// Layer 7
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(20,1,1).p("ALzpbQmAgBlMBeQlKBdjdEMQjeELgVD4QgVD5EPgLQEPgLG4m3QG4m2Bvk0");
	this.shape_5.setTransform(218.4,274.4);
	this.shape_5._off = true;

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(113).to({_off:false},0).wait(328));

	// Layer 6 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_9 = new cjs.Graphics().p("EAE4AjxMAF5g6SQMFBPHqJYQHsJahOMFQhOMFpbHqQoGGoqHAAQhmAAhqgLg");
	var mask_5_graphics_10 = new cjs.Graphics().p("EAF1Aj3MAD/g6cQMHA1H+JIQH/JKg1MGQg1MHpKH+QoRHPquAAQhHAAhJgFg");
	var mask_5_graphics_11 = new cjs.Graphics().p("EAGyAj6MACGg6iQMIAcIQI3QISI5gcMHQgbMJo5IQQobH3rYABIhNgCg");
	var mask_5_graphics_12 = new cjs.Graphics().p("EAHwAj7MAALg6jQMIACIjImQIkIngCMIQgDMIonIjQojIhsFAAIgGAAg");
	var mask_5_graphics_13 = new cjs.Graphics().p("AG+2nQMIgXI0IUQI2IVAXMHQAXMIoVI0QoUI2sIAXg");
	var mask_5_graphics_14 = new cjs.Graphics().p("AGB2iQMHgwJFIAQJGIDAxMGQAwMHoCJFQoBJGsHAxg");
	var mask_5_graphics_15 = new cjs.Graphics().p("AFD2aQMFhKJWHtQJXHvBJMEQBKMFnvJWQntJXsFBJg");
	var mask_5_graphics_16 = new cjs.Graphics().p("AEH2QQMChjJlHaQJmHbBjMBQBjMCnbJlQnaJnsCBjg");
	var mask_5_graphics_17 = new cjs.Graphics().p("ADK2CQL+h8J0HFQJ2HHB8L9QB8L/nHJ0QnFJ2r/B7g");
	var mask_5_graphics_18 = new cjs.Graphics().p("ACO1yQL5iVKDGxQKEGyCVL5QCVL6mzKCQmwKEr6CVg");
	var mask_5_graphics_19 = new cjs.Graphics().p("ABS1eQL0iuKQGcQKSGcCuL0QCtL0mdKRQmbKRr0Cug");
	var mask_5_graphics_20 = new cjs.Graphics().p("AAW1IQLvjGKdGGQKfGGDGLvQDGLtmHKeQmGKeruDGg");
	var mask_5_graphics_21 = new cjs.Graphics().p("Agk0vQLnjeKpFvQKsFxDeLnQDeLnlxKqQlvKrroDeg");
	var mask_5_graphics_22 = new cjs.Graphics().p("Ahe0TQLfj2K1FZQK3FaD2LgQD3LelbK2QlZK2rfD3g");
	var mask_5_graphics_23 = new cjs.Graphics().p("AiXz0QLWkOLAFCQLBFDEPLYQEOLWlELAQlCLBrXEPg");
	var mask_5_graphics_24 = new cjs.Graphics().p("AjQzSQLNkmLKErQLMEsElLOQEmLNksLKQkrLMrOElg");
	var mask_5_graphics_25 = new cjs.Graphics().p("AkIyuQLDk9LTEUQLVEUE9LEQE9LDkVLUQkTLUrEE9g");
	var mask_5_graphics_26 = new cjs.Graphics().p("Ak/yHQK4lULcD8QLeD9FUK5QFTK4j9LdQj7Ldq5FTg");
	var mask_5_graphics_27 = new cjs.Graphics().p("Al1xdQKtlqLjDkQLmDkFqKuQFrKsjmLkQjjLlquFrg");
	var mask_5_graphics_28 = new cjs.Graphics().p("AmqwwQKhmBLqDMQLsDMGBKhQGAKhjNLrQjLLrqhGBg");
	var mask_5_graphics_29 = new cjs.Graphics().p("AnewBQKUmXLwC0QLzCzGWKVQGWKTi0LxQizLyqUGWg");
	var mask_5_graphics_30 = new cjs.Graphics().p("AoQvQQKFmrL2CaQL4CbGsKHQGrKGicL2QiZL3qHGsg");
	var mask_5_graphics_31 = new cjs.Graphics().p("ApCucQJ3nAL7CCQL8CCHBJ4QHAJ3iDL8QiBL7p4HBg");
	var mask_5_graphics_32 = new cjs.Graphics().p("Apit5QJunOL9ByQL/ByHOJvQHNJuhzL+QhxL+puHNg");
	var mask_5_graphics_33 = new cjs.Graphics().p("AqBtWQJlnaL/BiQMBBiHaJkQHbJkhjMBQhhMAplHag");
	var mask_5_graphics_34 = new cjs.Graphics().p("AqfsxQJbnnMABRQMDBSHnJbQHoJahTMCQhRMCpbHng");
	var mask_5_graphics_35 = new cjs.Graphics().p("Aq9sMQJQnzMCBBQMFBCH0JQQHzJQhCMDQhBMEpQH0g");
	var mask_5_graphics_36 = new cjs.Graphics().p("ArbrlQJGoAMDAxQMGAxIAJGQIAJFgyMFQgwMFpGIAg");
	var mask_5_graphics_37 = new cjs.Graphics().p("Ar4q+QI7oMMEAhQMHAhIMI7QIMI7giMFQggMGo7IMg");
	var mask_5_graphics_38 = new cjs.Graphics().p("AsUqWQIwoYMEARQMHARIZIwQIYIwgSMFQgQMHowIYg");
	var mask_5_graphics_39 = new cjs.Graphics().p("AswptQIkojMFAAQMHABIkIlQIkIkgCMGQABMGolIkg");
	var mask_5_graphics_40 = new cjs.Graphics().p("AtMpDQIZovMFgPQMHgQIvIZQIvIZAPMGQARMGoZIvg");
	var mask_5_graphics_41 = new cjs.Graphics().p("AtnoYQINo6MEggQMHggI6INQI7IOAfMFQAhMGoOI6g");
	var mask_5_graphics_42 = new cjs.Graphics().p("AuBnsQIBpFMDgwQMGgwJFIBQJFIBAvMEQAyMFoBJFg");
	var mask_5_graphics_43 = new cjs.Graphics().p("Aubm/QH1pQMBhAQMGhBJPH1QJQH1A/MDQBCMEn1JQg");
	var mask_5_graphics_44 = new cjs.Graphics().p("Au1mSQHppaMAhRQMEhQJaHoQJaHoBQMCQBRMCnoJag");
	var mask_5_graphics_45 = new cjs.Graphics().p("AvNlkQHbpkL/hhQMChhJkHcQJkHbBgMAQBiMBncJkg");
	var mask_5_graphics_46 = new cjs.Graphics().p("Avlk1QHOpuL9hxQL/hxJuHPQJvHOBvL+QByL+nOJvg");
	var mask_5_graphics_47 = new cjs.Graphics().p("Av9kGQHCp3L6iBQL9iBJ4HCQJ3HBCAL7QCCL8nCJ4g");
	var mask_5_graphics_48 = new cjs.Graphics().p("AwTjVQG0qBL3iRQL6iRKBG0QKBG0CQL5QCSL5m0KBg");
	var mask_5_graphics_49 = new cjs.Graphics().p("AwpikQGmqKL0ihQL3ihKKGnQKKGmCgL2QCiL1mnKKg");
	var mask_5_graphics_50 = new cjs.Graphics().p("Aw/hyQGZqTLxixQLzixKTGZQKTGZCvLyQCyLymZKTg");
	var mask_5_graphics_51 = new cjs.Graphics().p("AxThAQGLqbLsjBQLwjAKbGLQKbGLDALuQDBLumLKbg");
	var mask_5_graphics_52 = new cjs.Graphics().p("AxngNQF9qkLpjPQLrjRKjF9QKjF9DPLqQDSLql9Kjg");
	var mask_5_graphics_53 = new cjs.Graphics().p("Ax6AlQFuqqLljfQLmjgKrFuQKsFvDeLlQDhLmlvKrg");
	var mask_5_graphics_54 = new cjs.Graphics().p("AyNBaQFhqyLgjvQLhjwKyFhQKzFgDvLgQDwLhlgKzg");
	var mask_5_graphics_55 = new cjs.Graphics().p("AyeCOQFRq5Lbj+QLcj/K6FSQK6FRD+LcQEALblSK6g");
	var mask_5_graphics_56 = new cjs.Graphics().p("AyvDEQFDrALVkOQLXkOLBFDQLBFDENLVQEPLWlDLBg");
	var mask_5_graphics_57 = new cjs.Graphics().p("Ay/D5QE0rGLQkdQLQkeLIE1QLHE0EdLQQEeLQk0LHg");
	var mask_5_graphics_58 = new cjs.Graphics().p("AzOEwQElrNLJksQLLktLOElQLOEmErLJQEtLKklLOg");
	var mask_5_graphics_59 = new cjs.Graphics().p("AzdFnQEWrULDk6QLEk8LUEWQLUEWE6LEQE8LDkWLUg");
	var mask_5_graphics_60 = new cjs.Graphics().p("AzqGeQEGrZK9lJQK9lLLZEHQLaEHFJK8QFLK9kHLag");
	var mask_5_graphics_61 = new cjs.Graphics().p("Az3HVQD3reK1lYQK2lZLfD4QLgD3FXK2QFaK1j4Lfg");
	var mask_5_graphics_62 = new cjs.Graphics().p("A0DINQDorjKtlmQKvloLkDoQLkDoFnKuQFoKvjoLkg");
	var mask_5_graphics_63 = new cjs.Graphics().p("A0PJGQDZroKml1QKnl2LpDYQLpDZF0KmQF2KnjYLpg");
	var mask_5_graphics_64 = new cjs.Graphics().p("A0ZJ+QDIrsKemDQKgmELtDJQLtDIGDKfQGEKfjJLtg");
	var mask_5_graphics_65 = new cjs.Graphics().p("A0gKkQC+rvKZmNQKamNLwC/QLwC+GMKZQGNKai+Lwg");
	var mask_5_graphics_66 = new cjs.Graphics().p("A0mLJQC0ryKTmVQKVmWLyC0QLzC0GVKUQGWKUi0Lyg");
	var mask_5_graphics_67 = new cjs.Graphics().p("A0sLuQCqr0KOmeQKOmfL1CpQL1CqGeKOQGgKPiqL1g");
	var mask_5_graphics_68 = new cjs.Graphics().p("A0xMUQCfr3KImmQKJmpL3CfQL4CgGnKIQGoKJifL3g");
	var mask_5_graphics_69 = new cjs.Graphics().p("A02M6QCVr6KCmvQKDmxL5CVQL6CVGwKDQGxKCiVL5g");
	var mask_5_graphics_70 = new cjs.Graphics().p("A07NgQCLr8J8m4QJ9m6L7CLQL8CKG4J9QG7J9iLL7g");
	var mask_5_graphics_71 = new cjs.Graphics().p("A0/OFQCAr9J2nAQJ3nDL9CAQL9CAHCJ3QHDJ2iAL9g");
	var mask_5_graphics_72 = new cjs.Graphics().p("A1DOrQB1r+JwnKQJxnLL/B1QL/B2HKJwQHMJxh2L/g");
	var mask_5_graphics_73 = new cjs.Graphics().p("A1HPSQBrsBJqnSQJrnUMABrQMABrHTJqQHUJqhrMBg");
	var mask_5_graphics_74 = new cjs.Graphics().p("A1KP4QBgsCJknaQJkndMBBhQMCBgHbJkQHdJjhhMCg");
	var mask_5_graphics_75 = new cjs.Graphics().p("A1NQeQBWsDJcnjQJfnlMCBWQMDBWHkJdQHlJdhWMDg");
	var mask_5_graphics_76 = new cjs.Graphics().p("A1QREQBMsEJWnrQJXntMEBLQMEBMHsJWQHtJWhLMFg");
	var mask_5_graphics_77 = new cjs.Graphics().p("A1SRrQBBsGJPnzQJRn1MEBBQMFBAH0JQQH2JQhBMFg");
	var mask_5_graphics_78 = new cjs.Graphics().p("A1USRQA2sGJJn7QJKn+MFA2QMGA3H8JIQH9JJg2MGg");
	var mask_5_graphics_79 = new cjs.Graphics().p("A1WS3QAssGJBoDQJDoGMGAsQMHArIEJCQIFJBgrMHg");
	var mask_5_graphics_80 = new cjs.Graphics().p("A1XTeQAhsII6oKQI8oOMHAhQMHAhIMI7QINI6ghMHg");
	var mask_5_graphics_81 = new cjs.Graphics().p("A1YUEQAWsHI0oTQI0oVMHAWQMIAWITI0QIWIzgXMIg");
	var mask_5_graphics_82 = new cjs.Graphics().p("A1YUrQALsIIsocQItobMHALQMIAMIcIsQIdIsgMMIg");
	var mask_5_graphics_83 = new cjs.Graphics().p("A1ZVRQABsIIlojQIlojMIABQMIABIjIkQIkIlgBMIg");
	var mask_5_graphics_84 = new cjs.Graphics().p("AtFAuQIeorMHgKQMIgJIrIdQIsIdAJMIMg6hAAuQgJsIIdoqg");
	var mask_5_graphics_85 = new cjs.Graphics().p("AtXA0QIXozMHgUQMHgVIyIXQI0IUAUMIMg6gABiQgUsIIVoxg");
	var mask_5_graphics_86 = new cjs.Graphics().p("AtoA5QIPo5MGgfQMIgfI5IPQI7IMAfMIMg6fACVQgfsHIOo6g");
	var mask_5_graphics_87 = new cjs.Graphics().p("At5BAQIHpBMGgqQMHgqJBIIQJBIEAqMHMg6cADJQgqsHIGpAg");
	var mask_5_graphics_88 = new cjs.Graphics().p("AuJBGQH/pIMFg0QMHg0JHH/QJJH8A0MHMg6ZAD8Qg0sHH+pHg");
	var mask_5_graphics_89 = new cjs.Graphics().p("AuZBMQH3pOMFg/QMFg/JPH3QJQH1A+MFMg6VAEwQg/sGH2pPg");
	var mask_5_graphics_90 = new cjs.Graphics().p("AupBTQHvpVMEhKQMFhJJVHvQJXHsBJMFMg6RAFiQhJsEHtpWg");
	var mask_5_graphics_91 = new cjs.Graphics().p("Au4BaQHnpcMDhUQMEhUJcHnQJdHkBUMEMg6MAGVQhUsEHlpcg");
	var mask_5_graphics_92 = new cjs.Graphics().p("AvGBiQHepjMChfQMChfJjHfQJkHcBfMCMg6HAHJQhesDHdpig");
	var mask_5_graphics_93 = new cjs.Graphics().p("AvUBpQHWppMAhpQMBhqJpHWQJrHUBpMBMg6AAH8QhpsCHVppg");
	var mask_5_graphics_94 = new cjs.Graphics().p("AviBxQHNpwL/h0QMAhzJwHNQJxHLBzMAMg54AIuQh0r/HMpwg");
	var mask_5_graphics_95 = new cjs.Graphics().p("AvvB5QHFp2L9h+QL+h/J2HFQJ3HDB+L+Mg5wAJhQh/r+HEp2g");
	var mask_5_graphics_96 = new cjs.Graphics().p("Av8CBQG8p8L8iJQL8iJJ8G9QJ9G5CJL9Mg5oAKUQiJr9G7p8g");
	var mask_5_graphics_97 = new cjs.Graphics().p("AwICKQGzqDL6iTQL6iTKCG0QKEGwCTL7Mg5fALGQiTr6GyqCg");
	var mask_5_graphics_98 = new cjs.Graphics().p("AwUCTQGrqJL3idQL4ieKIGrQKKGoCdL4Mg5UAL5Qier4GpqIg");
	var mask_5_graphics_99 = new cjs.Graphics().p("AwfCcQGhqPL2ioQL2ioKOGiQKPGgCoL1Mg5KAMrQipr2GhqNg");
	var mask_5_graphics_100 = new cjs.Graphics().p("AwqClQGZqULyizQL0iyKUGZQKUGXCzLzMg4/ANdQiyr0GXqTg");
	var mask_5_graphics_101 = new cjs.Graphics().p("Aw0CuQGPqZLwi9QLyi9KZGQQKaGOC9LwMg4zAOPQi9rxGPqZg");
	var mask_5_graphics_102 = new cjs.Graphics().p("Aw+C4QGGqfLujHQLujHKfGGQKgGFDHLuMg4mAPBQjIrvGGqeg");
	var mask_5_graphics_103 = new cjs.Graphics().p("AxIDCQF9qkLrjSQLsjRKkF9QKlF8DRLrMg4YAPyQjSrsF8qjg");
	var mask_5_graphics_104 = new cjs.Graphics().p("AxRDMQF0qqLojbQLpjcKpF0QKqFzDcLoMg4LAQkQjbrpFyqpg");
	var mask_5_graphics_105 = new cjs.Graphics().p("AxZDWQFqquLmjmQLljmKuFrQKvFpDmLlMg38ARVQjmrmFqqug");
	var mask_5_graphics_106 = new cjs.Graphics().p("AxhDhQFhq0LijwQLijwKzFiQK0FfDwLiMg3sASGQjwrjFgqyg");
	var mask_5_graphics_107 = new cjs.Graphics().p("AxpDsQFYq5Lfj6QLfj6K3FYQK5FWD6LeMg3cAS3Qj6rfFWq3g");
	var mask_5_graphics_108 = new cjs.Graphics().p("AxwD2QFOq8LckFQLbkEK9FOQK9FNEELbMg3LAToQkFrcFNq9g");
	var mask_5_graphics_109 = new cjs.Graphics().p("Ax2ECQFErCLYkOQLYkOLBFEQLCFDEOLYMg26AUYQkPrZFErAg");
	var mask_5_graphics_110 = new cjs.Graphics().p("Ax8ENQE6rGLVkYQLTkYLGE7QLGE5EYLTMg2oAVJQkYrVE6rFg");
	var mask_5_graphics_111 = new cjs.Graphics().p("AyCEZQExrLLQkiQLQkiLKEyQLLEvEiLQMg2WAV4QkirREwrJg");
	var mask_5_graphics_112 = new cjs.Graphics().p("AyHEkQEnrOLMksQLMksLOEoQLPElEsLMMg2CAWnQksrMEmrOg");
	var mask_5_graphics_113 = new cjs.Graphics().p("AyLEwQEdrSLIk2QLIk2LSEeQLTEbE1LIMg1uAXXQk1rJEcrRg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_5_graphics_9,x:237.6,y:230}).wait(1).to({graphics:mask_5_graphics_10,x:237.6,y:230}).wait(1).to({graphics:mask_5_graphics_11,x:237.6,y:230}).wait(1).to({graphics:mask_5_graphics_12,x:237.6,y:229.9}).wait(1).to({graphics:mask_5_graphics_13,x:237.6,y:229.9}).wait(1).to({graphics:mask_5_graphics_14,x:237.6,y:229.8}).wait(1).to({graphics:mask_5_graphics_15,x:237.6,y:229.5}).wait(1).to({graphics:mask_5_graphics_16,x:237.6,y:229.2}).wait(1).to({graphics:mask_5_graphics_17,x:237.6,y:228.7}).wait(1).to({graphics:mask_5_graphics_18,x:237.7,y:228.2}).wait(1).to({graphics:mask_5_graphics_19,x:237.7,y:227.6}).wait(1).to({graphics:mask_5_graphics_20,x:237.7,y:226.8}).wait(1).to({graphics:mask_5_graphics_21,x:237.7,y:226}).wait(1).to({graphics:mask_5_graphics_22,x:237.8,y:225.1}).wait(1).to({graphics:mask_5_graphics_23,x:237.8,y:224.1}).wait(1).to({graphics:mask_5_graphics_24,x:237.8,y:222.9}).wait(1).to({graphics:mask_5_graphics_25,x:237.7,y:221.7}).wait(1).to({graphics:mask_5_graphics_26,x:237.7,y:220.4}).wait(1).to({graphics:mask_5_graphics_27,x:237.7,y:219.1}).wait(1).to({graphics:mask_5_graphics_28,x:237.7,y:217.6}).wait(1).to({graphics:mask_5_graphics_29,x:237.6,y:216}).wait(1).to({graphics:mask_5_graphics_30,x:237.6,y:214.4}).wait(1).to({graphics:mask_5_graphics_31,x:237.5,y:212.7}).wait(1).to({graphics:mask_5_graphics_32,x:237.5,y:211.5}).wait(1).to({graphics:mask_5_graphics_33,x:237.5,y:210.3}).wait(1).to({graphics:mask_5_graphics_34,x:237.5,y:209.1}).wait(1).to({graphics:mask_5_graphics_35,x:237.5,y:207.9}).wait(1).to({graphics:mask_5_graphics_36,x:237.4,y:206.6}).wait(1).to({graphics:mask_5_graphics_37,x:237.4,y:205.3}).wait(1).to({graphics:mask_5_graphics_38,x:237.4,y:204}).wait(1).to({graphics:mask_5_graphics_39,x:237.4,y:202.6}).wait(1).to({graphics:mask_5_graphics_40,x:237.4,y:201.2}).wait(1).to({graphics:mask_5_graphics_41,x:237.5,y:199.8}).wait(1).to({graphics:mask_5_graphics_42,x:237.5,y:198.3}).wait(1).to({graphics:mask_5_graphics_43,x:237.5,y:196.9}).wait(1).to({graphics:mask_5_graphics_44,x:237.5,y:195.3}).wait(1).to({graphics:mask_5_graphics_45,x:237.6,y:193.8}).wait(1).to({graphics:mask_5_graphics_46,x:237.6,y:192.3}).wait(1).to({graphics:mask_5_graphics_47,x:237.6,y:190.7}).wait(1).to({graphics:mask_5_graphics_48,x:237.6,y:189.1}).wait(1).to({graphics:mask_5_graphics_49,x:237.7,y:187.4}).wait(1).to({graphics:mask_5_graphics_50,x:237.7,y:185.8}).wait(1).to({graphics:mask_5_graphics_51,x:237.7,y:184.1}).wait(1).to({graphics:mask_5_graphics_52,x:237.8,y:182.4}).wait(1).to({graphics:mask_5_graphics_53,x:237.8,y:180.7}).wait(1).to({graphics:mask_5_graphics_54,x:237.8,y:179}).wait(1).to({graphics:mask_5_graphics_55,x:237.8,y:177.2}).wait(1).to({graphics:mask_5_graphics_56,x:237.8,y:175.4}).wait(1).to({graphics:mask_5_graphics_57,x:237.8,y:173.6}).wait(1).to({graphics:mask_5_graphics_58,x:237.8,y:171.8}).wait(1).to({graphics:mask_5_graphics_59,x:237.9,y:170}).wait(1).to({graphics:mask_5_graphics_60,x:237.9,y:168.2}).wait(1).to({graphics:mask_5_graphics_61,x:237.9,y:166.3}).wait(1).to({graphics:mask_5_graphics_62,x:237.8,y:164.5}).wait(1).to({graphics:mask_5_graphics_63,x:237.8,y:162.6}).wait(1).to({graphics:mask_5_graphics_64,x:237.8,y:160.7}).wait(1).to({graphics:mask_5_graphics_65,x:237.8,y:159.5}).wait(1).to({graphics:mask_5_graphics_66,x:237.8,y:158.2}).wait(1).to({graphics:mask_5_graphics_67,x:237.8,y:157}).wait(1).to({graphics:mask_5_graphics_68,x:237.7,y:155.7}).wait(1).to({graphics:mask_5_graphics_69,x:237.7,y:154.4}).wait(1).to({graphics:mask_5_graphics_70,x:237.7,y:153.2}).wait(1).to({graphics:mask_5_graphics_71,x:237.7,y:151.9}).wait(1).to({graphics:mask_5_graphics_72,x:237.7,y:150.7}).wait(1).to({graphics:mask_5_graphics_73,x:237.7,y:149.4}).wait(1).to({graphics:mask_5_graphics_74,x:237.7,y:148.1}).wait(1).to({graphics:mask_5_graphics_75,x:237.7,y:146.8}).wait(1).to({graphics:mask_5_graphics_76,x:237.7,y:145.6}).wait(1).to({graphics:mask_5_graphics_77,x:237.6,y:144.3}).wait(1).to({graphics:mask_5_graphics_78,x:237.6,y:143}).wait(1).to({graphics:mask_5_graphics_79,x:237.6,y:141.7}).wait(1).to({graphics:mask_5_graphics_80,x:237.6,y:140.4}).wait(1).to({graphics:mask_5_graphics_81,x:237.6,y:139.2}).wait(1).to({graphics:mask_5_graphics_82,x:237.6,y:137.9}).wait(1).to({graphics:mask_5_graphics_83,x:237.6,y:136.6}).wait(1).to({graphics:mask_5_graphics_84,x:237.6,y:137.6}).wait(1).to({graphics:mask_5_graphics_85,x:237.6,y:138.9}).wait(1).to({graphics:mask_5_graphics_86,x:237.6,y:140.2}).wait(1).to({graphics:mask_5_graphics_87,x:237.5,y:141.5}).wait(1).to({graphics:mask_5_graphics_88,x:237.4,y:142.8}).wait(1).to({graphics:mask_5_graphics_89,x:237.3,y:144.1}).wait(1).to({graphics:mask_5_graphics_90,x:237.2,y:145.3}).wait(1).to({graphics:mask_5_graphics_91,x:237.1,y:146.6}).wait(1).to({graphics:mask_5_graphics_92,x:237,y:147.9}).wait(1).to({graphics:mask_5_graphics_93,x:236.8,y:149.2}).wait(1).to({graphics:mask_5_graphics_94,x:236.6,y:150.4}).wait(1).to({graphics:mask_5_graphics_95,x:236.4,y:151.7}).wait(1).to({graphics:mask_5_graphics_96,x:236.2,y:153}).wait(1).to({graphics:mask_5_graphics_97,x:236,y:154.2}).wait(1).to({graphics:mask_5_graphics_98,x:235.7,y:155.5}).wait(1).to({graphics:mask_5_graphics_99,x:235.5,y:156.7}).wait(1).to({graphics:mask_5_graphics_100,x:235.2,y:158}).wait(1).to({graphics:mask_5_graphics_101,x:234.9,y:159.2}).wait(1).to({graphics:mask_5_graphics_102,x:234.6,y:160.5}).wait(1).to({graphics:mask_5_graphics_103,x:234.2,y:161.7}).wait(1).to({graphics:mask_5_graphics_104,x:233.9,y:163}).wait(1).to({graphics:mask_5_graphics_105,x:233.5,y:164.2}).wait(1).to({graphics:mask_5_graphics_106,x:233.1,y:165.4}).wait(1).to({graphics:mask_5_graphics_107,x:232.7,y:166.6}).wait(1).to({graphics:mask_5_graphics_108,x:232.3,y:167.9}).wait(1).to({graphics:mask_5_graphics_109,x:231.9,y:169.1}).wait(1).to({graphics:mask_5_graphics_110,x:231.4,y:170.3}).wait(1).to({graphics:mask_5_graphics_111,x:231,y:171.5}).wait(1).to({graphics:mask_5_graphics_112,x:230.5,y:172.6}).wait(1).to({graphics:mask_5_graphics_113,x:230,y:173.8}).wait(328));

	// Layer 3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(20,1,1).p("AL0oYQmAgBlMBeQlKBdjdEMQjeEKgVD5QgFA8AMAt");
	this.shape_6.setTransform(218.3,267.7);
	this.shape_6._off = true;

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(9).to({_off:false},0).wait(432));

	// Letter
	this.instance_3 = new lib.a("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(275,275);
	this.instance_3.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(441));

	// Background
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_7.setTransform(275,275,3.373,2.543);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_8.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).wait(441));

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