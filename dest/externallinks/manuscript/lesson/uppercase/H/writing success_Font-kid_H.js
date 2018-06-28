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


(lib.triangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjXjAIAJAFIA0AbQAaAPAcAMQAbAMAaAFQAbAGAaAAQAcACAcgHQAZgHAagOIA1gcQAagOAYgPIjaGDg");
	this.shape.setTransform(0.4,-6.5,0.563,0.563);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.7,-17.4,24.3,21.8);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AR1axIAA3+MgjsAAAIAAX+QAACsiwAAQiwAAAAisMAAAg1kQAAipCuAAQCyAAAACpIAAYDMAjsAAAIAA4DQAAipCyAAQCxAAAACpMAAAA1kQAACsixAAQiyAAAAisg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.6,-188.4,299.2,376.9);


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

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AAZAAIgxAA");
	this.shape.setTransform(-1.4,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AgkAAIBJAA");
	this.shape_1.setTransform(-0.2,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AgvAAIBfAA");
	this.shape_2.setTransform(1,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("Ag6AAIB1AA");
	this.shape_3.setTransform(2.2,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("AhFAAICLAA");
	this.shape_4.setTransform(3.4,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(5,1,1).p("AhRAAICiAA");
	this.shape_5.setTransform(4.6,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(5,1,1).p("AhcAAIC5AA");
	this.shape_6.setTransform(5.7,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(5,1,1).p("AhnAAIDPAA");
	this.shape_7.setTransform(6.9,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(5,1,1).p("AhyAAIDlAA");
	this.shape_8.setTransform(8,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(5,1,1).p("Ah8AAID5AA");
	this.shape_9.setTransform(9.2,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(5,1,1).p("AiHAAIEPAA");
	this.shape_10.setTransform(10.3,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5,1,1).p("AiSAAIElAA");
	this.shape_11.setTransform(11.4,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(5,1,1).p("AidAAIE7AA");
	this.shape_12.setTransform(12.6,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(5,1,1).p("AinAAIFPAA");
	this.shape_13.setTransform(13.7,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(5,1,1).p("AiyAAIFlAA");
	this.shape_14.setTransform(14.8,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(5,1,1).p("Ai8AAIF5AA");
	this.shape_15.setTransform(15.9,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(5,1,1).p("AjGAAIGNAA");
	this.shape_16.setTransform(16.9,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(5,1,1).p("AjRAAIGjAA");
	this.shape_17.setTransform(18,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(5,1,1).p("AjbAAIG3AA");
	this.shape_18.setTransform(19.1,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(5,1,1).p("AjlAAIHLAA");
	this.shape_19.setTransform(20.2,0);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(5,1,1).p("AjvAAIHfAA");
	this.shape_20.setTransform(21.2,0);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(5,1,1).p("Aj5AAIHzAA");
	this.shape_21.setTransform(22.3,0);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(5,1,1).p("AkCAAIIFAA");
	this.shape_22.setTransform(23.3,0);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(5,1,1).p("AkMAAIIZAA");
	this.shape_23.setTransform(24.3,0);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(5,1,1).p("AkWAAIItAA");
	this.shape_24.setTransform(25.3,0);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(5,1,1).p("AkgAAIJBAA");
	this.shape_25.setTransform(26.4,0);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(5,1,1).p("AkpAAIJTAA");
	this.shape_26.setTransform(27.4,0);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(5,1,1).p("AkzAAIJnAA");
	this.shape_27.setTransform(28.4,0);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(5,1,1).p("Ak8AAIJ5AA");
	this.shape_28.setTransform(29.3,0);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(5,1,1).p("AlFAAIKLAA");
	this.shape_29.setTransform(30.3,0);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(5,1,1).p("AlOAAIKdAA");
	this.shape_30.setTransform(31.3,0);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(5,1,1).p("AlYAAIKxAA");
	this.shape_31.setTransform(32.3,0);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(5,1,1).p("AlgAAILCAA");
	this.shape_32.setTransform(33.2,0);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(5,1,1).p("AlqAAILVAA");
	this.shape_33.setTransform(34.2,0);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(5,1,1).p("AlzAAILnAA");
	this.shape_34.setTransform(35.1,0);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(5,1,1).p("Al8AAIL5AA");
	this.shape_35.setTransform(36,0);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(5,1,1).p("AmEAAIMJAA");
	this.shape_36.setTransform(36.9,0);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(5,1,1).p("AmNAAIMbAA");
	this.shape_37.setTransform(37.8,0);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(5,1,1).p("AmWAAIMtAA");
	this.shape_38.setTransform(38.8,0);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(5,1,1).p("AmeAAIM9AA");
	this.shape_39.setTransform(39.7,0);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(5,1,1).p("AmmAAINNAA");
	this.shape_40.setTransform(40.5,0);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(5,1,1).p("AmvAAINfAA");
	this.shape_41.setTransform(41.4,0);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(5,1,1).p("Am3AAINvAA");
	this.shape_42.setTransform(42.3,0);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(5,1,1).p("Am/AAIN/AA");
	this.shape_43.setTransform(43.2,0);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(5,1,1).p("AnIAAIORAA");
	this.shape_44.setTransform(44,0);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(5,1,1).p("AnQAAIOgAA");
	this.shape_45.setTransform(44.9,0);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(5,1,1).p("AnYAAIOxAA");
	this.shape_46.setTransform(45.7,0);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(5,1,1).p("AnfAAIO/AA");
	this.shape_47.setTransform(46.5,0);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(5,1,1).p("AnnAAIPPAA");
	this.shape_48.setTransform(47.4,0);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(5,1,1).p("AnvAAIPfAA");
	this.shape_49.setTransform(48.2,0);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(5,1,1).p("An2AAIPuAA");
	this.shape_50.setTransform(49,0);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(5,1,1).p("An+AAIP9AA");
	this.shape_51.setTransform(49.8,0);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(5,1,1).p("AoGAAIQNAA");
	this.shape_52.setTransform(50.6,0);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(5,1,1).p("AoNAAIQbAA");
	this.shape_53.setTransform(51.4,0);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(5,1,1).p("AoUAAIQpAA");
	this.shape_54.setTransform(52.1,0);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(5,1,1).p("AocAAIQ5AA");
	this.shape_55.setTransform(52.9,0);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(5,1,1).p("AojAAIRHAA");
	this.shape_56.setTransform(53.7,0);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(5,1,1).p("AoqAAIRVAA");
	this.shape_57.setTransform(54.4,0);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(5,1,1).p("AoxAAIRjAA");
	this.shape_58.setTransform(55.2,0);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(5,1,1).p("Ao4AAIRxAA");
	this.shape_59.setTransform(55.9,0);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(5,1,1).p("Ao/AAIR/AA");
	this.shape_60.setTransform(56.6,0);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(5,1,1).p("ApGAAISNAA");
	this.shape_61.setTransform(57.3,0);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(5,1,1).p("ApNAAISbAA");
	this.shape_62.setTransform(58,0);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(5,1,1).p("ApTAAISnAA");
	this.shape_63.setTransform(58.7,0);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(5,1,1).p("ApaAAIS1AA");
	this.shape_64.setTransform(59.4,0);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(5,1,1).p("ApgAAITBAA");
	this.shape_65.setTransform(60.1,0);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(5,1,1).p("ApnAAITPAA");
	this.shape_66.setTransform(60.8,0);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(5,1,1).p("AptAAITbAA");
	this.shape_67.setTransform(61.5,0);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(5,1,1).p("ApzAAITnAA");
	this.shape_68.setTransform(62.1,0);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(5,1,1).p("Ap6AAIT1AA");
	this.shape_69.setTransform(62.8,0);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(5,1,1).p("AqAAAIUBAA");
	this.shape_70.setTransform(63.4,0);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(5,1,1).p("AqGAAIUNAA");
	this.shape_71.setTransform(64,0);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(5,1,1).p("AqMAAIUZAA");
	this.shape_72.setTransform(64.7,0);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(5,1,1).p("AqSAAIUlAA");
	this.shape_73.setTransform(65.3,0);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(5,1,1).p("AqXAAIUwAA");
	this.shape_74.setTransform(65.9,0);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(5,1,1).p("AqdAAIU7AA");
	this.shape_75.setTransform(66.5,0);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(5,1,1).p("AqjAAIVHAA");
	this.shape_76.setTransform(67.1,0);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(5,1,1).p("AqpAAIVSAA");
	this.shape_77.setTransform(67.7,0);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(5,1,1).p("AquAAIVdAA");
	this.shape_78.setTransform(68.3,0);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(5,1,1).p("AqzAAIVnAA");
	this.shape_79.setTransform(68.8,0);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(5,1,1).p("Aq5AAIVzAA");
	this.shape_80.setTransform(69.4,0);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(5,1,1).p("Aq+AAIV9AA");
	this.shape_81.setTransform(70,0);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(5,1,1).p("ArDAAIWHAA");
	this.shape_82.setTransform(70.5,0);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(5,1,1).p("ArIAAIWRAA");
	this.shape_83.setTransform(71,0);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(5,1,1).p("ArNAAIWbAA");
	this.shape_84.setTransform(71.6,0);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(5,1,1).p("ArSAAIWlAA");
	this.shape_85.setTransform(72.1,0);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(5,1,1).p("ArXAAIWvAA");
	this.shape_86.setTransform(72.6,0);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(5,1,1).p("ArcAAIW5AA");
	this.shape_87.setTransform(73.1,0);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(5,1,1).p("ArhAAIXDAA");
	this.shape_88.setTransform(73.6,0);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(5,1,1).p("ArlAAIXLAA");
	this.shape_89.setTransform(74.1,0);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(5,1,1).p("ArqAAIXVAA");
	this.shape_90.setTransform(74.6,0);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(5,1,1).p("AruAAIXdAA");
	this.shape_91.setTransform(75.1,0);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(5,1,1).p("ArzAAIXnAA");
	this.shape_92.setTransform(75.5,0);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(5,1,1).p("Ar3AAIXvAA");
	this.shape_93.setTransform(76,0);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(5,1,1).p("Ar7AAIX3AA");
	this.shape_94.setTransform(76.4,0);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(5,1,1).p("AsAAAIYBAA");
	this.shape_95.setTransform(76.9,0);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(5,1,1).p("AsEAAIYJAA");
	this.shape_96.setTransform(77.3,0);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(5,1,1).p("AsIAAIYRAA");
	this.shape_97.setTransform(77.7,0);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(5,1,1).p("AsMAAIYZAA");
	this.shape_98.setTransform(78.2,0);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(5,1,1).p("AMRAAI4hAA");
	this.shape_99.setTransform(78.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).wait(1));

	// Layer 1
	this.instance = new lib.triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1.1,0,1,1,-90,0,0,0.4,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:161.1},99,cjs.Ease.get(0.5)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.8,-12.1,21.9,24.3);


(lib.ar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,-96.7,1,1,0,0,0,0.1,-4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,regY:0,y:213.5},149,cjs.Ease.get(0.5)).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AAAgVIAAAr");
	this.shape.setTransform(-0.2,-101.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AAAAmIAAhL");
	this.shape_1.setTransform(-0.2,-100.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AAAA1IAAhp");
	this.shape_2.setTransform(-0.2,-98.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("AAABEIAAiH");
	this.shape_3.setTransform(-0.2,-97.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("AAABTIAAim");
	this.shape_4.setTransform(-0.2,-95.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(5,1,1).p("AAABiIAAjE");
	this.shape_5.setTransform(-0.2,-94.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(5,1,1).p("AAAByIAAjj");
	this.shape_6.setTransform(-0.2,-92.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(5,1,1).p("AAACBIAAkA");
	this.shape_7.setTransform(-0.2,-91.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(5,1,1).p("AAACQIAAkf");
	this.shape_8.setTransform(-0.2,-89.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(5,1,1).p("AAACeIAAk7");
	this.shape_9.setTransform(-0.2,-88.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(5,1,1).p("AAACtIAAlZ");
	this.shape_10.setTransform(-0.2,-86.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5,1,1).p("AAAC8IAAl3");
	this.shape_11.setTransform(-0.2,-85.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(5,1,1).p("AAADLIAAmV");
	this.shape_12.setTransform(-0.2,-83.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(5,1,1).p("AAADZIAAmx");
	this.shape_13.setTransform(-0.1,-82.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(5,1,1).p("AAADoIAAnP");
	this.shape_14.setTransform(-0.1,-81.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(5,1,1).p("AAAD2IAAnr");
	this.shape_15.setTransform(-0.1,-79.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(5,1,1).p("AAAEFIAAoJ");
	this.shape_16.setTransform(-0.1,-78.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(5,1,1).p("AAAETIAAol");
	this.shape_17.setTransform(-0.1,-76.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(5,1,1).p("AAAEhIAApB");
	this.shape_18.setTransform(-0.1,-75.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(5,1,1).p("AAAEwIAApe");
	this.shape_19.setTransform(-0.1,-74);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(5,1,1).p("AAAE+IAAp7");
	this.shape_20.setTransform(-0.1,-72.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(5,1,1).p("AAAFMIAAqX");
	this.shape_21.setTransform(-0.1,-71.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(5,1,1).p("AAAFZIAAqx");
	this.shape_22.setTransform(-0.1,-69.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(5,1,1).p("AAAFnIAArN");
	this.shape_23.setTransform(-0.1,-68.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(5,1,1).p("AAAF1IAArp");
	this.shape_24.setTransform(-0.1,-67.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(5,1,1).p("AAAGDIAAsF");
	this.shape_25.setTransform(-0.1,-65.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(5,1,1).p("AAAGRIAAsh");
	this.shape_26.setTransform(-0.1,-64.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(5,1,1).p("AAAGeIAAs7");
	this.shape_27.setTransform(-0.1,-63.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(5,1,1).p("AAAGsIAAtX");
	this.shape_28.setTransform(-0.1,-61.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(5,1,1).p("AAAG5IAAtx");
	this.shape_29.setTransform(-0.1,-60.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(5,1,1).p("AAAHHIAAuN");
	this.shape_30.setTransform(-0.1,-59.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(5,1,1).p("AAAHUIAAun");
	this.shape_31.setTransform(-0.1,-57.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(5,1,1).p("AAAHhIAAvB");
	this.shape_32.setTransform(-0.1,-56.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(5,1,1).p("AAAHvIAAvc");
	this.shape_33.setTransform(-0.1,-55.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(5,1,1).p("AAAH8IAAv3");
	this.shape_34.setTransform(-0.1,-54);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(5,1,1).p("AAAIJIAAwR");
	this.shape_35.setTransform(-0.1,-52.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(5,1,1).p("AAAIWIAAwr");
	this.shape_36.setTransform(-0.1,-51.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(5,1,1).p("AAAIjIAAxF");
	this.shape_37.setTransform(-0.1,-50.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(5,1,1).p("AAAIvIAAxd");
	this.shape_38.setTransform(-0.1,-49);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(5,1,1).p("AAAI8IAAx3");
	this.shape_39.setTransform(-0.1,-47.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(5,1,1).p("AAAJJIAAyR");
	this.shape_40.setTransform(-0.1,-46.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(5,1,1).p("AAAJWIAAyr");
	this.shape_41.setTransform(-0.1,-45.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(5,1,1).p("AAAJiIAAzD");
	this.shape_42.setTransform(-0.1,-44);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(5,1,1).p("AAAJvIAAzd");
	this.shape_43.setTransform(-0.1,-42.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(5,1,1).p("AAAJ7IAAz1");
	this.shape_44.setTransform(-0.1,-41.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(5,1,1).p("AAAKIIAA0P");
	this.shape_45.setTransform(-0.1,-40.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(5,1,1).p("AAAKUIAA0n");
	this.shape_46.setTransform(-0.1,-39.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(5,1,1).p("AAAKgIAA0/");
	this.shape_47.setTransform(-0.1,-37.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(5,1,1).p("AAAKsIAA1X");
	this.shape_48.setTransform(-0.1,-36.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(5,1,1).p("AAAK4IAA1v");
	this.shape_49.setTransform(-0.1,-35.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(5,1,1).p("AAALFIAA2J");
	this.shape_50.setTransform(-0.1,-34.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(5,1,1).p("AAALQIAA2f");
	this.shape_51.setTransform(-0.1,-33.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(5,1,1).p("AAALcIAA23");
	this.shape_52.setTransform(-0.1,-32.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(5,1,1).p("AAALoIAA3P");
	this.shape_53.setTransform(-0.1,-30.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(5,1,1).p("AAAL0IAA3n");
	this.shape_54.setTransform(-0.1,-29.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(5,1,1).p("AAAMAIAA3/");
	this.shape_55.setTransform(-0.1,-28.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(5,1,1).p("AAAMLIAA4V");
	this.shape_56.setTransform(-0.1,-27.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(5,1,1).p("AAAMXIAA4t");
	this.shape_57.setTransform(-0.1,-26.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(5,1,1).p("AAAMiIAA5D");
	this.shape_58.setTransform(-0.1,-25.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(5,1,1).p("AAAMuIAA5b");
	this.shape_59.setTransform(-0.1,-24.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(5,1,1).p("AAAM5IAA5x");
	this.shape_60.setTransform(-0.1,-23);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(5,1,1).p("AAANEIAA6H");
	this.shape_61.setTransform(-0.1,-21.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(5,1,1).p("AAANPIAA6d");
	this.shape_62.setTransform(-0.1,-20.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(5,1,1).p("AAANbIAA61");
	this.shape_63.setTransform(-0.1,-19.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(5,1,1).p("AAANlIAA7J");
	this.shape_64.setTransform(-0.1,-18.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(5,1,1).p("AAANxIAA7h");
	this.shape_65.setTransform(-0.1,-17.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(5,1,1).p("AAAN7IAA71");
	this.shape_66.setTransform(-0.1,-16.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(5,1,1).p("AAAOGIAA8L");
	this.shape_67.setTransform(-0.1,-15.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(5,1,1).p("AAAORIAA8h");
	this.shape_68.setTransform(-0.1,-14.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(5,1,1).p("AAAOcIAA83");
	this.shape_69.setTransform(-0.1,-13.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(5,1,1).p("AAAOnIAA9N");
	this.shape_70.setTransform(-0.1,-12.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(5,1,1).p("AAAOxIAA9h");
	this.shape_71.setTransform(-0.1,-11.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(5,1,1).p("AAAO8IAA93");
	this.shape_72.setTransform(-0.1,-10.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(5,1,1).p("AAAPGIAA+L");
	this.shape_73.setTransform(-0.1,-9.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(5,1,1).p("AAAPQIAA+f");
	this.shape_74.setTransform(-0.1,-8.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(5,1,1).p("AAAPbIAA+1");
	this.shape_75.setTransform(0,-7.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(5,1,1).p("AAAPlIAA/J");
	this.shape_76.setTransform(0,-6.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(5,1,1).p("AAAPvIAA/d");
	this.shape_77.setTransform(0,-5.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(5,1,1).p("AAAP5IAA/x");
	this.shape_78.setTransform(0,-4.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(5,1,1).p("AAAQDMAAAggF");
	this.shape_79.setTransform(0,-3.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(5,1,1).p("AAAQNMAAAggZ");
	this.shape_80.setTransform(0,-2.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(5,1,1).p("AAAQXMAAAggt");
	this.shape_81.setTransform(0,-1.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(5,1,1).p("AAAQhMAAAghB");
	this.shape_82.setTransform(0,-0.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(5,1,1).p("AAAQrMAAAghV");
	this.shape_83.setTransform(0,0.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(5,1,1).p("AAAQ0MAAAghn");
	this.shape_84.setTransform(0,1.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(5,1,1).p("AAAQ+MAAAgh7");
	this.shape_85.setTransform(0,2.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(5,1,1).p("AAARIMAAAgiP");
	this.shape_86.setTransform(0,3.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(5,1,1).p("AAARRMAAAgih");
	this.shape_87.setTransform(0,4.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(5,1,1).p("AAARaMAAAgiz");
	this.shape_88.setTransform(0,5.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(5,1,1).p("AAARkMAAAgjH");
	this.shape_89.setTransform(0,6.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(5,1,1).p("AAARtMAAAgjZ");
	this.shape_90.setTransform(0,7.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(5,1,1).p("AAAR2MAAAgjr");
	this.shape_91.setTransform(0,8.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(5,1,1).p("AAAR/MAAAgj9");
	this.shape_92.setTransform(0,9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(5,1,1).p("AAASIMAAAgkP");
	this.shape_93.setTransform(0,9.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(5,1,1).p("AAASRMAAAgkh");
	this.shape_94.setTransform(0,10.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(5,1,1).p("AAASaMAAAgkz");
	this.shape_95.setTransform(0,11.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(5,1,1).p("AAASjMAAAglF");
	this.shape_96.setTransform(0,12.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(5,1,1).p("AAASsMAAAglX");
	this.shape_97.setTransform(0,13.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(5,1,1).p("AAAS0MAAAgln");
	this.shape_98.setTransform(0,14.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(5,1,1).p("AAAS9MAAAgl5");
	this.shape_99.setTransform(0,15);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(5,1,1).p("AAATGMAAAgmL");
	this.shape_100.setTransform(0,15.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(5,1,1).p("AAATOMAAAgmb");
	this.shape_101.setTransform(0,16.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(5,1,1).p("AAATXMAAAgmt");
	this.shape_102.setTransform(0,17.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(5,1,1).p("AAATfMAAAgm9");
	this.shape_103.setTransform(0,18.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(5,1,1).p("AAATnMAAAgnN");
	this.shape_104.setTransform(0,19.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(5,1,1).p("AAATwMAAAgnf");
	this.shape_105.setTransform(0,20);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(5,1,1).p("AAAT4MAAAgnv");
	this.shape_106.setTransform(0,20.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(5,1,1).p("AAAUAMAAAgn/");
	this.shape_107.setTransform(0,21.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(5,1,1).p("AAAUIMAAAgoP");
	this.shape_108.setTransform(0,22.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(5,1,1).p("AAAUQMAAAgof");
	this.shape_109.setTransform(0,23.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(5,1,1).p("AAAUYMAAAgov");
	this.shape_110.setTransform(0,23.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(5,1,1).p("AAAUgMAAAgo/");
	this.shape_111.setTransform(0,24.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(5,1,1).p("AAAUnMAAAgpN");
	this.shape_112.setTransform(0,25.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(5,1,1).p("AAAUvMAAAgpd");
	this.shape_113.setTransform(0,26.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(5,1,1).p("AAAU3MAAAgpt");
	this.shape_114.setTransform(0,26.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(5,1,1).p("AAAU+MAAAgp7");
	this.shape_115.setTransform(0,27.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(5,1,1).p("AAAVFMAAAgqJ");
	this.shape_116.setTransform(0,28.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(5,1,1).p("AAAVNMAAAgqZ");
	this.shape_117.setTransform(0,29.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(5,1,1).p("AAAVUMAAAgqn");
	this.shape_118.setTransform(0,29.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(5,1,1).p("AAAVbMAAAgq1");
	this.shape_119.setTransform(0,30.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(5,1,1).p("AAAVjMAAAgrF");
	this.shape_120.setTransform(0,31.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(5,1,1).p("AAAVqMAAAgrT");
	this.shape_121.setTransform(0,31.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(5,1,1).p("AAAVxMAAAgrh");
	this.shape_122.setTransform(0,32.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(5,1,1).p("AAAV4MAAAgrv");
	this.shape_123.setTransform(0,33.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(5,1,1).p("AAAV/MAAAgr9");
	this.shape_124.setTransform(0,34);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(5,1,1).p("AAAWGMAAAgsL");
	this.shape_125.setTransform(0,34.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(5,1,1).p("AAAWMMAAAgsX");
	this.shape_126.setTransform(0,35.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(5,1,1).p("AAAWTMAAAgsl");
	this.shape_127.setTransform(0,36);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(5,1,1).p("AAAWaMAAAgsz");
	this.shape_128.setTransform(0,36.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(5,1,1).p("AAAWgMAAAgs/");
	this.shape_129.setTransform(0,37.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(5,1,1).p("AAAWnMAAAgtN");
	this.shape_130.setTransform(0,37.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").ss(5,1,1).p("AAAWtMAAAgtZ");
	this.shape_131.setTransform(0,38.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(5,1,1).p("AAAW0MAAAgtn");
	this.shape_132.setTransform(0,39.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(5,1,1).p("AAAW6MAAAgtz");
	this.shape_133.setTransform(0,39.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(5,1,1).p("AAAXAMAAAgt/");
	this.shape_134.setTransform(0,40.4);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#000000").ss(5,1,1).p("AAAXGMAAAguL");
	this.shape_135.setTransform(0,41);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#000000").ss(5,1,1).p("AAAXMMAAAguX");
	this.shape_136.setTransform(0,41.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#000000").ss(5,1,1).p("AAAXSMAAAguj");
	this.shape_137.setTransform(0,42.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").ss(5,1,1).p("AAAXYMAAAguv");
	this.shape_138.setTransform(0,42.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#000000").ss(5,1,1).p("AAAXeMAAAgu7");
	this.shape_139.setTransform(0,43.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").ss(5,1,1).p("AAAXkMAAAgvH");
	this.shape_140.setTransform(0,43.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#000000").ss(5,1,1).p("AAAXqMAAAgvT");
	this.shape_141.setTransform(0,44.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#000000").ss(5,1,1).p("AAAXvMAAAgvd");
	this.shape_142.setTransform(0,45);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#000000").ss(5,1,1).p("AAAX1MAAAgvp");
	this.shape_143.setTransform(0,45.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#000000").ss(5,1,1).p("AAAX7MAAAgv1");
	this.shape_144.setTransform(0,46.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#000000").ss(5,1,1).p("AAAYAMAAAgv/");
	this.shape_145.setTransform(0,46.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#000000").ss(5,1,1).p("AAAYFMAAAgwJ");
	this.shape_146.setTransform(0,47.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#000000").ss(5,1,1).p("AAAYLMAAAgwV");
	this.shape_147.setTransform(0,47.7);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#000000").ss(5,1,1).p("AAAYQMAAAgwf");
	this.shape_148.setTransform(0,48.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#000000").ss(5,1,1).p("AAA4UMAAAAwp");
	this.shape_149.setTransform(0,48.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.9,-110.1,24.3,21.8);


(lib.honeyflap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.honeybee();
	this.instance.parent = this;
	this.instance.setTransform(38.4,-170.9,0.422,0.422,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-215.3,105.5,81.8);


// stage content:
(lib.writingsuccess_Fontkid_H = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_519 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(519).call(this.frame_519).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(142.3,104.6,0.999,0.999,0,-8.5,171.5,22.4,-144);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({y:444.6},150).wait(10).to({rotation:8.5,skewX:0,skewY:0,x:406.4,y:104.6},0).to({y:446.6},150).wait(10).to({rotation:-21.5,x:143.3,y:275.3},0).to({x:406.3},120).wait(9).to({startPosition:0},0).to({regY:-143.8,rotation:-43.3,guide:{path:[406.4,275.4,444.9,177.6,473.2,278.3,501.6,379,451.3,462.1,401,545.1,294.6,512.1,188.4,479,165.9,489.2,143.5,499.5,95.5,570.1,47.5,640.8,38.1,649]}},61).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(142.6,447.6,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},150).wait(10).to({_off:false,x:406.6},0).to({_off:true},150).wait(10).to({_off:false,x:405.8,y:274.5},0).to({_off:true},120).wait(71));

	// ar3
	this.instance_1 = new lib.ar2("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(217.3,327,1,1,0,0,0,46.1,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(329).to({_off:false},0).wait(191));

	// ar2
	this.instance_2 = new lib.ar1("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(508.8,224.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(169).to({_off:false},0).wait(351));

	// ar1
	this.instance_3 = new lib.ar1("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(38.8,224.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).wait(511));

	// 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(25,1,1).p("AgRAAIAjAA");
	this.shape_1.setTransform(145.2,275.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(25,1,1).p("AgcAAIA5AA");
	this.shape_2.setTransform(146.3,275.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(25,1,1).p("AgnAAIBPAA");
	this.shape_3.setTransform(147.3,275.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(25,1,1).p("AgyAAIBlAA");
	this.shape_4.setTransform(148.4,275.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(25,1,1).p("Ag9AAIB7AA");
	this.shape_5.setTransform(149.5,275.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(25,1,1).p("AhIAAICRAA");
	this.shape_6.setTransform(150.6,275.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(25,1,1).p("AhSAAIClAA");
	this.shape_7.setTransform(151.6,275.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(25,1,1).p("AhdAAIC7AA");
	this.shape_8.setTransform(152.7,275.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(25,1,1).p("AhoAAIDRAA");
	this.shape_9.setTransform(153.8,275.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(25,1,1).p("AhzAAIDnAA");
	this.shape_10.setTransform(154.9,275.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(25,1,1).p("Ah+AAID9AA");
	this.shape_11.setTransform(155.9,275.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(25,1,1).p("AiJAAIETAA");
	this.shape_12.setTransform(157,275.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(25,1,1).p("AiTAAIEnAA");
	this.shape_13.setTransform(158.1,275.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(25,1,1).p("AieAAIE9AA");
	this.shape_14.setTransform(159.2,275.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(25,1,1).p("AipAAIFTAA");
	this.shape_15.setTransform(160.3,275.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(25,1,1).p("Ai0AAIFpAA");
	this.shape_16.setTransform(161.3,275.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(25,1,1).p("Ai/AAIF/AA");
	this.shape_17.setTransform(162.4,275.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(25,1,1).p("AjKAAIGVAA");
	this.shape_18.setTransform(163.5,275.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(25,1,1).p("AjVAAIGqAA");
	this.shape_19.setTransform(164.6,275.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(25,1,1).p("AjfAAIG/AA");
	this.shape_20.setTransform(165.6,275.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(25,1,1).p("AjqAAIHVAA");
	this.shape_21.setTransform(166.7,275.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(25,1,1).p("Aj1AAIHrAA");
	this.shape_22.setTransform(167.8,275.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(25,1,1).p("AkAAAIIBAA");
	this.shape_23.setTransform(168.9,275.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(25,1,1).p("AkLAAIIXAA");
	this.shape_24.setTransform(169.9,275.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(25,1,1).p("AkVAAIIrAA");
	this.shape_25.setTransform(171,275.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(25,1,1).p("AkhAAIJCAA");
	this.shape_26.setTransform(172.1,275.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(25,1,1).p("AkrAAIJXAA");
	this.shape_27.setTransform(173.2,275.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(25,1,1).p("Ak2AAIJtAA");
	this.shape_28.setTransform(174.2,275.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(25,1,1).p("AlBAAIKDAA");
	this.shape_29.setTransform(175.3,275.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(25,1,1).p("AlMAAIKZAA");
	this.shape_30.setTransform(176.4,275.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(25,1,1).p("AlXAAIKvAA");
	this.shape_31.setTransform(177.5,275.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(25,1,1).p("AliAAILEAA");
	this.shape_32.setTransform(178.6,275.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(25,1,1).p("AlsAAILZAA");
	this.shape_33.setTransform(179.6,275.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(25,1,1).p("Al3AAILvAA");
	this.shape_34.setTransform(180.7,275.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(25,1,1).p("AmCAAIMFAA");
	this.shape_35.setTransform(181.8,275.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(25,1,1).p("AmNAAIMbAA");
	this.shape_36.setTransform(182.9,275.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(25,1,1).p("AmYAAIMxAA");
	this.shape_37.setTransform(183.9,275.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(25,1,1).p("AmiAAINFAA");
	this.shape_38.setTransform(185,275.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(25,1,1).p("AmuAAINcAA");
	this.shape_39.setTransform(186.1,275.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(25,1,1).p("Am4AAINxAA");
	this.shape_40.setTransform(187.2,275.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(25,1,1).p("AnDAAIOHAA");
	this.shape_41.setTransform(188.2,275.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(25,1,1).p("AnOAAIOdAA");
	this.shape_42.setTransform(189.3,275.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(25,1,1).p("AnZAAIOzAA");
	this.shape_43.setTransform(190.4,275.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(25,1,1).p("AnkAAIPJAA");
	this.shape_44.setTransform(191.5,275.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(25,1,1).p("AnvAAIPeAA");
	this.shape_45.setTransform(192.6,275.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(25,1,1).p("An5AAIPzAA");
	this.shape_46.setTransform(193.6,275.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(25,1,1).p("AoEAAIQJAA");
	this.shape_47.setTransform(194.7,275.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(25,1,1).p("AoPAAIQfAA");
	this.shape_48.setTransform(195.8,275.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(25,1,1).p("AoaAAIQ1AA");
	this.shape_49.setTransform(196.9,275.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(25,1,1).p("AolAAIRLAA");
	this.shape_50.setTransform(197.9,275.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(25,1,1).p("AowAAIRhAA");
	this.shape_51.setTransform(199,275.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(25,1,1).p("Ao7AAIR2AA");
	this.shape_52.setTransform(200.1,275.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(25,1,1).p("ApFAAISMAA");
	this.shape_53.setTransform(201.2,275.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(25,1,1).p("ApQAAIShAA");
	this.shape_54.setTransform(202.2,275.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(25,1,1).p("ApbAAIS3AA");
	this.shape_55.setTransform(203.3,275.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(25,1,1).p("ApmAAITNAA");
	this.shape_56.setTransform(204.4,275.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(25,1,1).p("ApxAAITjAA");
	this.shape_57.setTransform(205.5,275.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(25,1,1).p("Ap8AAIT5AA");
	this.shape_58.setTransform(206.5,275.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(25,1,1).p("AqHAAIUPAA");
	this.shape_59.setTransform(207.6,275.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(25,1,1).p("AqRAAIUjAA");
	this.shape_60.setTransform(208.7,275.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(25,1,1).p("AqcAAIU5AA");
	this.shape_61.setTransform(209.8,275.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(25,1,1).p("AqnAAIVPAA");
	this.shape_62.setTransform(210.9,275.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(25,1,1).p("AqyAAIVlAA");
	this.shape_63.setTransform(211.9,275.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(25,1,1).p("Aq9AAIV6AA");
	this.shape_64.setTransform(213,275.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(25,1,1).p("ArIAAIWRAA");
	this.shape_65.setTransform(214.1,275.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(25,1,1).p("ArTAAIWnAA");
	this.shape_66.setTransform(215.2,275.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(25,1,1).p("ArdAAIW7AA");
	this.shape_67.setTransform(216.2,275.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(25,1,1).p("AroAAIXRAA");
	this.shape_68.setTransform(217.3,275.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(25,1,1).p("ArzAAIXnAA");
	this.shape_69.setTransform(218.4,275.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(25,1,1).p("Ar+AAIX9AA");
	this.shape_70.setTransform(219.5,275.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(25,1,1).p("AsJAAIYTAA");
	this.shape_71.setTransform(220.5,275.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(25,1,1).p("AsUAAIYpAA");
	this.shape_72.setTransform(221.6,275.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(25,1,1).p("AseAAIY9AA");
	this.shape_73.setTransform(222.7,275.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(25,1,1).p("AspAAIZTAA");
	this.shape_74.setTransform(223.8,275.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(25,1,1).p("As0AAIZpAA");
	this.shape_75.setTransform(224.9,275.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(25,1,1).p("As/AAIZ/AA");
	this.shape_76.setTransform(225.9,275.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(25,1,1).p("AtKAAIaVAA");
	this.shape_77.setTransform(227,275.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(25,1,1).p("AtVAAIarAA");
	this.shape_78.setTransform(228.1,275.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(25,1,1).p("AtgAAIbBAA");
	this.shape_79.setTransform(229.2,275.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(25,1,1).p("AtqAAIbVAA");
	this.shape_80.setTransform(230.2,275.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(25,1,1).p("At1AAIbrAA");
	this.shape_81.setTransform(231.3,275.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(25,1,1).p("AuAAAIcBAA");
	this.shape_82.setTransform(232.4,275.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(25,1,1).p("AuLAAIcXAA");
	this.shape_83.setTransform(233.4,275.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(25,1,1).p("AuWAAIctAA");
	this.shape_84.setTransform(234.5,275.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(25,1,1).p("AuhAAIdCAA");
	this.shape_85.setTransform(235.6,275.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(25,1,1).p("AurAAIdXAA");
	this.shape_86.setTransform(236.7,275.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(25,1,1).p("Au2AAIdtAA");
	this.shape_87.setTransform(237.8,275.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(25,1,1).p("AvBAAIeDAA");
	this.shape_88.setTransform(238.8,275.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(25,1,1).p("AvMAAIeZAA");
	this.shape_89.setTransform(239.9,275.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(25,1,1).p("AvXAAIevAA");
	this.shape_90.setTransform(241,275.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(25,1,1).p("AviAAIfEAA");
	this.shape_91.setTransform(242.1,275.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(25,1,1).p("AvsAAIfZAA");
	this.shape_92.setTransform(243.1,275.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(25,1,1).p("Av3AAIfvAA");
	this.shape_93.setTransform(244.2,275.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(25,1,1).p("AwCAAMAgFAAA");
	this.shape_94.setTransform(245.3,275.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(25,1,1).p("AwNAAMAgbAAA");
	this.shape_95.setTransform(246.4,275.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(25,1,1).p("AwYAAMAgxAAA");
	this.shape_96.setTransform(247.4,275.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(25,1,1).p("AwjAAMAhHAAA");
	this.shape_97.setTransform(248.5,275.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(25,1,1).p("AwtAAMAhbAAA");
	this.shape_98.setTransform(249.6,275.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(25,1,1).p("Aw4AAMAhxAAA");
	this.shape_99.setTransform(250.7,275.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(25,1,1).p("AxDAAMAiHAAA");
	this.shape_100.setTransform(251.8,275.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(25,1,1).p("AxOAAMAidAAA");
	this.shape_101.setTransform(252.8,275.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(25,1,1).p("AxZAAMAizAAA");
	this.shape_102.setTransform(253.9,275.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(25,1,1).p("AxkAAMAjJAAA");
	this.shape_103.setTransform(255,275.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(25,1,1).p("AxvAAMAjfAAA");
	this.shape_104.setTransform(256.1,275.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(25,1,1).p("Ax5AAMAjzAAA");
	this.shape_105.setTransform(257.1,275.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(25,1,1).p("AyEAAMAkJAAA");
	this.shape_106.setTransform(258.2,275.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(25,1,1).p("AyPAAMAkfAAA");
	this.shape_107.setTransform(259.3,275.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(25,1,1).p("AyaAAMAk1AAA");
	this.shape_108.setTransform(260.4,275.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(25,1,1).p("AylAAMAlLAAA");
	this.shape_109.setTransform(261.4,275.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(25,1,1).p("AywAAMAlhAAA");
	this.shape_110.setTransform(262.5,275.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(25,1,1).p("Ay7AAMAl2AAA");
	this.shape_111.setTransform(263.6,275.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(25,1,1).p("AzFAAMAmMAAA");
	this.shape_112.setTransform(264.7,275.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(25,1,1).p("AzQAAMAmhAAA");
	this.shape_113.setTransform(265.7,275.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(25,1,1).p("AzbAAMAm3AAA");
	this.shape_114.setTransform(266.8,275.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(25,1,1).p("AzmAAMAnNAAA");
	this.shape_115.setTransform(267.9,275.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(25,1,1).p("AzxAAMAnjAAA");
	this.shape_116.setTransform(269,275.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(25,1,1).p("Az8AAMAn4AAA");
	this.shape_117.setTransform(270.1,275.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(25,1,1).p("A0HAAMAoPAAA");
	this.shape_118.setTransform(271.1,275.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(25,1,1).p("A0SAAMAolAAA");
	this.shape_119.setTransform(272.2,275.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(25,1,1).p("A0cAAMAo5AAA");
	this.shape_120.setTransform(273.3,275.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(25,1,1).p("A0nAAMApPAAA");
	this.shape_121.setTransform(274.4,275.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},329).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).wait(71));

	// 2
	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(25,1,1).p("AAAgVIAAAr");
	this.shape_122.setTransform(406.4,106.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(25,1,1).p("AAAAiIAAhC");
	this.shape_123.setTransform(406.4,108);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(25,1,1).p("AAAAtIAAhZ");
	this.shape_124.setTransform(406.4,109.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(25,1,1).p("AAAA4IAAhv");
	this.shape_125.setTransform(406.4,110.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(25,1,1).p("AAABDIAAiF");
	this.shape_126.setTransform(406.4,111.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(25,1,1).p("AAABOIAAic");
	this.shape_127.setTransform(406.4,112.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(25,1,1).p("AAABaIAAiz");
	this.shape_128.setTransform(406.4,113.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(25,1,1).p("AAABlIAAjJ");
	this.shape_129.setTransform(406.4,114.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(25,1,1).p("AAABwIAAjf");
	this.shape_130.setTransform(406.4,115.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").ss(25,1,1).p("AAAB7IAAj1");
	this.shape_131.setTransform(406.4,116.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(25,1,1).p("AAACHIAAkN");
	this.shape_132.setTransform(406.4,118.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(25,1,1).p("AAACSIAAkj");
	this.shape_133.setTransform(406.4,119.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(25,1,1).p("AAACdIAAk5");
	this.shape_134.setTransform(406.4,120.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#000000").ss(25,1,1).p("AAACoIAAlP");
	this.shape_135.setTransform(406.4,121.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#000000").ss(25,1,1).p("AAAC0IAAln");
	this.shape_136.setTransform(406.4,122.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#000000").ss(25,1,1).p("AAAC/IAAl9");
	this.shape_137.setTransform(406.4,123.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").ss(25,1,1).p("AAADKIAAmT");
	this.shape_138.setTransform(406.4,124.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#000000").ss(25,1,1).p("AAADVIAAmp");
	this.shape_139.setTransform(406.4,125.9);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").ss(25,1,1).p("AAADhIAAnB");
	this.shape_140.setTransform(406.4,127.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#000000").ss(25,1,1).p("AAADsIAAnX");
	this.shape_141.setTransform(406.4,128.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#000000").ss(25,1,1).p("AAAD3IAAnt");
	this.shape_142.setTransform(406.4,129.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#000000").ss(25,1,1).p("AAAECIAAoD");
	this.shape_143.setTransform(406.4,130.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#000000").ss(25,1,1).p("AAAENIAAoZ");
	this.shape_144.setTransform(406.4,131.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#000000").ss(25,1,1).p("AAAEZIAAow");
	this.shape_145.setTransform(406.4,132.7);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#000000").ss(25,1,1).p("AAAEkIAApH");
	this.shape_146.setTransform(406.4,133.8);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#000000").ss(25,1,1).p("AAAEvIAApd");
	this.shape_147.setTransform(406.4,134.9);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#000000").ss(25,1,1).p("AAAE6IAApz");
	this.shape_148.setTransform(406.4,136);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#000000").ss(25,1,1).p("AAAFGIAAqK");
	this.shape_149.setTransform(406.4,137.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#000000").ss(25,1,1).p("AAAFRIAAqh");
	this.shape_150.setTransform(406.4,138.3);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#000000").ss(25,1,1).p("AAAFcIAAq3");
	this.shape_151.setTransform(406.4,139.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#000000").ss(25,1,1).p("AAAFnIAArN");
	this.shape_152.setTransform(406.4,140.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#000000").ss(25,1,1).p("AAAFzIAArk");
	this.shape_153.setTransform(406.4,141.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#000000").ss(25,1,1).p("AAAF+IAAr7");
	this.shape_154.setTransform(406.4,142.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#000000").ss(25,1,1).p("AAAGJIAAsR");
	this.shape_155.setTransform(406.4,143.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#000000").ss(25,1,1).p("AAAGUIAAsn");
	this.shape_156.setTransform(406.4,145);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#000000").ss(25,1,1).p("AAAGfIAAs9");
	this.shape_157.setTransform(406.4,146.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#000000").ss(25,1,1).p("AAAGrIAAtV");
	this.shape_158.setTransform(406.4,147.3);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#000000").ss(25,1,1).p("AAAG2IAAtr");
	this.shape_159.setTransform(406.4,148.4);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#000000").ss(25,1,1).p("AAAHBIAAuB");
	this.shape_160.setTransform(406.4,149.5);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#000000").ss(25,1,1).p("AAAHMIAAuX");
	this.shape_161.setTransform(406.4,150.6);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#000000").ss(25,1,1).p("AAAHYIAAuv");
	this.shape_162.setTransform(406.4,151.8);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#000000").ss(25,1,1).p("AAAHjIAAvF");
	this.shape_163.setTransform(406.4,152.9);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#000000").ss(25,1,1).p("AAAHuIAAvb");
	this.shape_164.setTransform(406.4,154);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#000000").ss(25,1,1).p("AAAH5IAAvx");
	this.shape_165.setTransform(406.4,155.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#000000").ss(25,1,1).p("AAAIFIAAwJ");
	this.shape_166.setTransform(406.4,156.3);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#000000").ss(25,1,1).p("AAAIQIAAwf");
	this.shape_167.setTransform(406.4,157.4);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#000000").ss(25,1,1).p("AAAIbIAAw1");
	this.shape_168.setTransform(406.4,158.5);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#000000").ss(25,1,1).p("AAAImIAAxL");
	this.shape_169.setTransform(406.4,159.6);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#000000").ss(25,1,1).p("AAAIyIAAxj");
	this.shape_170.setTransform(406.4,160.8);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#000000").ss(25,1,1).p("AAAI9IAAx5");
	this.shape_171.setTransform(406.4,161.9);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#000000").ss(25,1,1).p("AAAJIIAAyP");
	this.shape_172.setTransform(406.4,163);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#000000").ss(25,1,1).p("AAAJTIAAyl");
	this.shape_173.setTransform(406.4,164.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#000000").ss(25,1,1).p("AAAJeIAAy7");
	this.shape_174.setTransform(406.4,165.2);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#000000").ss(25,1,1).p("AAAJqIAAzT");
	this.shape_175.setTransform(406.4,166.4);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#000000").ss(25,1,1).p("AAAJ1IAAzp");
	this.shape_176.setTransform(406.4,167.5);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#000000").ss(25,1,1).p("AAAKAIAAz/");
	this.shape_177.setTransform(406.4,168.6);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#000000").ss(25,1,1).p("AAAKLIAA0V");
	this.shape_178.setTransform(406.4,169.7);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#000000").ss(25,1,1).p("AAAKXIAA0t");
	this.shape_179.setTransform(406.4,170.9);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#000000").ss(25,1,1).p("AAAKiIAA1D");
	this.shape_180.setTransform(406.4,172);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#000000").ss(25,1,1).p("AAAKtIAA1Z");
	this.shape_181.setTransform(406.4,173.1);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#000000").ss(25,1,1).p("AAAK4IAA1v");
	this.shape_182.setTransform(406.4,174.2);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#000000").ss(25,1,1).p("AAALDIAA2F");
	this.shape_183.setTransform(406.4,175.3);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#000000").ss(25,1,1).p("AAALPIAA2d");
	this.shape_184.setTransform(406.4,176.5);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#000000").ss(25,1,1).p("AAALaIAA2z");
	this.shape_185.setTransform(406.4,177.6);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#000000").ss(25,1,1).p("AAALlIAA3J");
	this.shape_186.setTransform(406.4,178.7);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#000000").ss(25,1,1).p("AAALwIAA3f");
	this.shape_187.setTransform(406.4,179.8);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#000000").ss(25,1,1).p("AAAL8IAA33");
	this.shape_188.setTransform(406.4,181);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#000000").ss(25,1,1).p("AAAMHIAA4N");
	this.shape_189.setTransform(406.4,182.1);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#000000").ss(25,1,1).p("AAAMSIAA4j");
	this.shape_190.setTransform(406.4,183.2);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#000000").ss(25,1,1).p("AAAMdIAA45");
	this.shape_191.setTransform(406.4,184.3);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#000000").ss(25,1,1).p("AAAMpIAA5R");
	this.shape_192.setTransform(406.4,185.5);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#000000").ss(25,1,1).p("AAAM0IAA5n");
	this.shape_193.setTransform(406.4,186.6);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#000000").ss(25,1,1).p("AAAM/IAA59");
	this.shape_194.setTransform(406.4,187.7);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#000000").ss(25,1,1).p("AAANKIAA6T");
	this.shape_195.setTransform(406.4,188.8);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#000000").ss(25,1,1).p("AAANWIAA6r");
	this.shape_196.setTransform(406.4,190);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#000000").ss(25,1,1).p("AAANhIAA7B");
	this.shape_197.setTransform(406.4,191.1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#000000").ss(25,1,1).p("AAANsIAA7X");
	this.shape_198.setTransform(406.4,192.2);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#000000").ss(25,1,1).p("AAAN3IAA7t");
	this.shape_199.setTransform(406.4,193.3);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#000000").ss(25,1,1).p("AAAOCIAA8D");
	this.shape_200.setTransform(406.4,194.4);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#000000").ss(25,1,1).p("AAAONIAA8a");
	this.shape_201.setTransform(406.4,195.6);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#000000").ss(25,1,1).p("AAAOZIAA8x");
	this.shape_202.setTransform(406.4,196.7);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#000000").ss(25,1,1).p("AAAOkIAA9H");
	this.shape_203.setTransform(406.4,197.8);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#000000").ss(25,1,1).p("AAAOvIAA9d");
	this.shape_204.setTransform(406.4,198.9);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#000000").ss(25,1,1).p("AAAO6IAA90");
	this.shape_205.setTransform(406.4,200.1);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#000000").ss(25,1,1).p("AAAPGIAA+L");
	this.shape_206.setTransform(406.4,201.2);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#000000").ss(25,1,1).p("AAAPRIAA+h");
	this.shape_207.setTransform(406.4,202.3);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#000000").ss(25,1,1).p("AAAPcIAA+3");
	this.shape_208.setTransform(406.4,203.4);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#000000").ss(25,1,1).p("AAAPnIAA/O");
	this.shape_209.setTransform(406.4,204.6);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#000000").ss(25,1,1).p("AAAPzIAA/l");
	this.shape_210.setTransform(406.4,205.7);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#000000").ss(25,1,1).p("AAAP+IAA/7");
	this.shape_211.setTransform(406.4,206.8);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#000000").ss(25,1,1).p("AAAQJMAAAggR");
	this.shape_212.setTransform(406.4,207.9);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#000000").ss(25,1,1).p("AAAQUMAAAggn");
	this.shape_213.setTransform(406.4,209);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#000000").ss(25,1,1).p("AAAQgMAAAgg+");
	this.shape_214.setTransform(406.4,210.2);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#000000").ss(25,1,1).p("AAAQrMAAAghV");
	this.shape_215.setTransform(406.4,211.3);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#000000").ss(25,1,1).p("AAAQ2MAAAghr");
	this.shape_216.setTransform(406.4,212.4);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#000000").ss(25,1,1).p("AAARBMAAAgiB");
	this.shape_217.setTransform(406.4,213.5);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#000000").ss(25,1,1).p("AAARNMAAAgiY");
	this.shape_218.setTransform(406.4,214.7);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#000000").ss(25,1,1).p("AAARYMAAAgiv");
	this.shape_219.setTransform(406.4,215.8);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#000000").ss(25,1,1).p("AAARjMAAAgjF");
	this.shape_220.setTransform(406.4,216.9);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#000000").ss(25,1,1).p("AAARuMAAAgjb");
	this.shape_221.setTransform(406.4,218);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#000000").ss(25,1,1).p("AAAR6MAAAgjy");
	this.shape_222.setTransform(406.4,219.2);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#000000").ss(25,1,1).p("AAASFMAAAgkJ");
	this.shape_223.setTransform(406.4,220.3);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#000000").ss(25,1,1).p("AAASQMAAAgkf");
	this.shape_224.setTransform(406.4,221.4);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#000000").ss(25,1,1).p("AAASbMAAAgk1");
	this.shape_225.setTransform(406.4,222.5);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#000000").ss(25,1,1).p("AAASmMAAAglL");
	this.shape_226.setTransform(406.4,223.6);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#000000").ss(25,1,1).p("AAASxMAAAgli");
	this.shape_227.setTransform(406.4,224.8);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#000000").ss(25,1,1).p("AAAS9MAAAgl5");
	this.shape_228.setTransform(406.4,225.9);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#000000").ss(25,1,1).p("AAATIMAAAgmP");
	this.shape_229.setTransform(406.4,227);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#000000").ss(25,1,1).p("AAATTMAAAgml");
	this.shape_230.setTransform(406.4,228.1);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#000000").ss(25,1,1).p("AAATeMAAAgm8");
	this.shape_231.setTransform(406.4,229.3);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#000000").ss(25,1,1).p("AAATqMAAAgnT");
	this.shape_232.setTransform(406.4,230.4);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#000000").ss(25,1,1).p("AAAT1MAAAgnp");
	this.shape_233.setTransform(406.4,231.5);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#000000").ss(25,1,1).p("AAAUAMAAAgn/");
	this.shape_234.setTransform(406.4,232.6);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#000000").ss(25,1,1).p("AAAULMAAAgoW");
	this.shape_235.setTransform(406.4,233.8);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#000000").ss(25,1,1).p("AAAUXMAAAgot");
	this.shape_236.setTransform(406.4,234.9);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#000000").ss(25,1,1).p("AAAUiMAAAgpD");
	this.shape_237.setTransform(406.4,236);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#000000").ss(25,1,1).p("AAAUtMAAAgpZ");
	this.shape_238.setTransform(406.4,237.1);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#000000").ss(25,1,1).p("AAAU4MAAAgpv");
	this.shape_239.setTransform(406.4,238.2);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#000000").ss(25,1,1).p("AAAVEMAAAgqH");
	this.shape_240.setTransform(406.4,239.4);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#000000").ss(25,1,1).p("AAAVPMAAAgqd");
	this.shape_241.setTransform(406.4,240.5);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#000000").ss(25,1,1).p("AAAVaMAAAgqz");
	this.shape_242.setTransform(406.4,241.6);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#000000").ss(25,1,1).p("AAAVlMAAAgrJ");
	this.shape_243.setTransform(406.4,242.7);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#000000").ss(25,1,1).p("AAAVxMAAAgrh");
	this.shape_244.setTransform(406.4,243.9);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("#000000").ss(25,1,1).p("AAAV8MAAAgr3");
	this.shape_245.setTransform(406.4,245);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#000000").ss(25,1,1).p("AAAWHMAAAgsN");
	this.shape_246.setTransform(406.4,246.1);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("#000000").ss(25,1,1).p("AAAWSMAAAgsj");
	this.shape_247.setTransform(406.4,247.2);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#000000").ss(25,1,1).p("AAAWeMAAAgs7");
	this.shape_248.setTransform(406.4,248.4);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#000000").ss(25,1,1).p("AAAWpMAAAgtR");
	this.shape_249.setTransform(406.4,249.5);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#000000").ss(25,1,1).p("AAAW0MAAAgtn");
	this.shape_250.setTransform(406.4,250.6);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#000000").ss(25,1,1).p("AAAW/MAAAgt9");
	this.shape_251.setTransform(406.4,251.7);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#000000").ss(25,1,1).p("AAAXKMAAAguT");
	this.shape_252.setTransform(406.4,252.8);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#000000").ss(25,1,1).p("AAAXWMAAAgur");
	this.shape_253.setTransform(406.4,254);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#000000").ss(25,1,1).p("AAAXhMAAAgvB");
	this.shape_254.setTransform(406.4,255.1);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("#000000").ss(25,1,1).p("AAAXsMAAAgvX");
	this.shape_255.setTransform(406.4,256.2);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#000000").ss(25,1,1).p("AAAX3MAAAgvt");
	this.shape_256.setTransform(406.4,257.3);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("#000000").ss(25,1,1).p("AAAYDMAAAgwF");
	this.shape_257.setTransform(406.4,258.5);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#000000").ss(25,1,1).p("AAAYOMAAAgwb");
	this.shape_258.setTransform(406.4,259.6);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("#000000").ss(25,1,1).p("AAAYZMAAAgwx");
	this.shape_259.setTransform(406.4,260.7);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#000000").ss(25,1,1).p("AAAYkMAAAgxH");
	this.shape_260.setTransform(406.4,261.8);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("#000000").ss(25,1,1).p("AAAYwMAAAgxf");
	this.shape_261.setTransform(406.4,263);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#000000").ss(25,1,1).p("AAAY7MAAAgx1");
	this.shape_262.setTransform(406.4,264.1);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#000000").ss(25,1,1).p("AAAZGMAAAgyL");
	this.shape_263.setTransform(406.4,265.2);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#000000").ss(25,1,1).p("AAAZRMAAAgyh");
	this.shape_264.setTransform(406.4,266.3);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("#000000").ss(25,1,1).p("AAAZdMAAAgy5");
	this.shape_265.setTransform(406.4,267.5);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#000000").ss(25,1,1).p("AAAZoMAAAgzP");
	this.shape_266.setTransform(406.4,268.6);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("#000000").ss(25,1,1).p("AAAZzMAAAgzl");
	this.shape_267.setTransform(406.4,269.7);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#000000").ss(25,1,1).p("AAAZ+MAAAgz7");
	this.shape_268.setTransform(406.4,270.8);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#000000").ss(25,1,1).p("AAAaJMAAAg0R");
	this.shape_269.setTransform(406.4,271.9);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#000000").ss(25,1,1).p("AAAaVMAAAg0p");
	this.shape_270.setTransform(406.4,273.1);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("#000000").ss(25,1,1).p("AAAagMAAAg0/");
	this.shape_271.setTransform(406.4,274.2);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#000000").ss(25,1,1).p("AAA6qMAAAA1V");
	this.shape_272.setTransform(406.4,275.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_122}]},169).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).wait(201));

	// 1
	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("#000000").ss(25,1,1).p("AAAgQIAAAh");
	this.shape_273.setTransform(142.4,106.3);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#000000").ss(25,1,1).p("AAAAdIAAg4");
	this.shape_274.setTransform(142.4,107.5);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("#000000").ss(25,1,1).p("AAAAoIAAhP");
	this.shape_275.setTransform(142.4,108.6);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#000000").ss(25,1,1).p("AAAAzIAAhl");
	this.shape_276.setTransform(142.4,109.7);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f().s("#000000").ss(25,1,1).p("AAAA+IAAh7");
	this.shape_277.setTransform(142.4,110.8);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#000000").ss(25,1,1).p("AAABJIAAiS");
	this.shape_278.setTransform(142.4,112);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f().s("#000000").ss(25,1,1).p("AAABVIAAip");
	this.shape_279.setTransform(142.4,113.1);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#000000").ss(25,1,1).p("AAABgIAAi/");
	this.shape_280.setTransform(142.4,114.2);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f().s("#000000").ss(25,1,1).p("AAABrIAAjV");
	this.shape_281.setTransform(142.4,115.3);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("#000000").ss(25,1,1).p("AAAB3IAAjt");
	this.shape_282.setTransform(142.4,116.5);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f().s("#000000").ss(25,1,1).p("AAACCIAAkD");
	this.shape_283.setTransform(142.4,117.6);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("#000000").ss(25,1,1).p("AAACNIAAkZ");
	this.shape_284.setTransform(142.4,118.7);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f().s("#000000").ss(25,1,1).p("AAACZIAAkx");
	this.shape_285.setTransform(142.4,119.9);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("#000000").ss(25,1,1).p("AAACkIAAlH");
	this.shape_286.setTransform(142.4,121);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f().s("#000000").ss(25,1,1).p("AAACvIAAld");
	this.shape_287.setTransform(142.4,122.1);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("#000000").ss(25,1,1).p("AAAC6IAAlz");
	this.shape_288.setTransform(142.4,123.2);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f().s("#000000").ss(25,1,1).p("AAADGIAAmL");
	this.shape_289.setTransform(142.4,124.4);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f().s("#000000").ss(25,1,1).p("AAADRIAAmh");
	this.shape_290.setTransform(142.4,125.5);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f().s("#000000").ss(25,1,1).p("AAADcIAAm3");
	this.shape_291.setTransform(142.4,126.6);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f().s("#000000").ss(25,1,1).p("AAADnIAAnN");
	this.shape_292.setTransform(142.4,127.7);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f().s("#000000").ss(25,1,1).p("AAADzIAAnl");
	this.shape_293.setTransform(142.4,128.9);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("#000000").ss(25,1,1).p("AAAD+IAAn7");
	this.shape_294.setTransform(142.4,130);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f().s("#000000").ss(25,1,1).p("AAAEJIAAoR");
	this.shape_295.setTransform(142.4,131.1);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f().s("#000000").ss(25,1,1).p("AAAEUIAAon");
	this.shape_296.setTransform(142.4,132.2);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f().s("#000000").ss(25,1,1).p("AAAEgIAAo/");
	this.shape_297.setTransform(142.4,133.4);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f().s("#000000").ss(25,1,1).p("AAAErIAApV");
	this.shape_298.setTransform(142.4,134.5);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f().s("#000000").ss(25,1,1).p("AAAE2IAApr");
	this.shape_299.setTransform(142.4,135.6);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f().s("#000000").ss(25,1,1).p("AAAFCIAAqD");
	this.shape_300.setTransform(142.4,136.8);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f().s("#000000").ss(25,1,1).p("AAAFNIAAqZ");
	this.shape_301.setTransform(142.4,137.9);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f().s("#000000").ss(25,1,1).p("AAAFYIAAqv");
	this.shape_302.setTransform(142.4,139);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f().s("#000000").ss(25,1,1).p("AAAFjIAArF");
	this.shape_303.setTransform(142.4,140.1);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f().s("#000000").ss(25,1,1).p("AAAFvIAArd");
	this.shape_304.setTransform(142.4,141.3);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f().s("#000000").ss(25,1,1).p("AAAF6IAArz");
	this.shape_305.setTransform(142.4,142.4);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f().s("#000000").ss(25,1,1).p("AAAGFIAAsJ");
	this.shape_306.setTransform(142.4,143.5);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f().s("#000000").ss(25,1,1).p("AAAGQIAAsf");
	this.shape_307.setTransform(142.4,144.6);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f().s("#000000").ss(25,1,1).p("AAAGcIAAs3");
	this.shape_308.setTransform(142.4,145.8);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f().s("#000000").ss(25,1,1).p("AAAGnIAAtN");
	this.shape_309.setTransform(142.4,146.9);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f().s("#000000").ss(25,1,1).p("AAAGyIAAtj");
	this.shape_310.setTransform(142.4,148);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f().s("#000000").ss(25,1,1).p("AAAG9IAAt5");
	this.shape_311.setTransform(142.4,149.1);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f().s("#000000").ss(25,1,1).p("AAAHJIAAuR");
	this.shape_312.setTransform(142.4,150.3);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f().s("#000000").ss(25,1,1).p("AAAHUIAAun");
	this.shape_313.setTransform(142.4,151.4);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f().s("#000000").ss(25,1,1).p("AAAHfIAAu9");
	this.shape_314.setTransform(142.4,152.5);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f().s("#000000").ss(25,1,1).p("AAAHrIAAvU");
	this.shape_315.setTransform(142.4,153.7);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f().s("#000000").ss(25,1,1).p("AAAH2IAAvr");
	this.shape_316.setTransform(142.4,154.8);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f().s("#000000").ss(25,1,1).p("AAAIBIAAwB");
	this.shape_317.setTransform(142.4,155.9);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f().s("#000000").ss(25,1,1).p("AAAIMIAAwX");
	this.shape_318.setTransform(142.4,157);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f().s("#000000").ss(25,1,1).p("AAAIYIAAwu");
	this.shape_319.setTransform(142.4,158.2);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f().s("#000000").ss(25,1,1).p("AAAIjIAAxF");
	this.shape_320.setTransform(142.4,159.3);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f().s("#000000").ss(25,1,1).p("AAAIuIAAxb");
	this.shape_321.setTransform(142.4,160.4);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f().s("#000000").ss(25,1,1).p("AAAI5IAAxx");
	this.shape_322.setTransform(142.4,161.5);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f().s("#000000").ss(25,1,1).p("AAAJFIAAyI");
	this.shape_323.setTransform(142.4,162.7);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f().s("#000000").ss(25,1,1).p("AAAJQIAAyf");
	this.shape_324.setTransform(142.4,163.8);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f().s("#000000").ss(25,1,1).p("AAAJbIAAy1");
	this.shape_325.setTransform(142.4,164.9);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f().s("#000000").ss(25,1,1).p("AAAJmIAAzL");
	this.shape_326.setTransform(142.4,166);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f().s("#000000").ss(25,1,1).p("AAAJyIAAzi");
	this.shape_327.setTransform(142.4,167.2);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f().s("#000000").ss(25,1,1).p("AAAJ9IAAz5");
	this.shape_328.setTransform(142.4,168.3);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f().s("#000000").ss(25,1,1).p("AAAKIIAA0P");
	this.shape_329.setTransform(142.4,169.4);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f().s("#000000").ss(25,1,1).p("AAAKTIAA0l");
	this.shape_330.setTransform(142.4,170.5);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f().s("#000000").ss(25,1,1).p("AAAKfIAA09");
	this.shape_331.setTransform(142.4,171.7);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f().s("#000000").ss(25,1,1).p("AAAKqIAA1T");
	this.shape_332.setTransform(142.4,172.8);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f().s("#000000").ss(25,1,1).p("AAAK1IAA1p");
	this.shape_333.setTransform(142.4,173.9);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f().s("#000000").ss(25,1,1).p("AAALAIAA2A");
	this.shape_334.setTransform(142.4,175.1);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f().s("#000000").ss(25,1,1).p("AAALMIAA2X");
	this.shape_335.setTransform(142.4,176.2);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f().s("#000000").ss(25,1,1).p("AAALXIAA2t");
	this.shape_336.setTransform(142.4,177.3);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f().s("#000000").ss(25,1,1).p("AAALiIAA3D");
	this.shape_337.setTransform(142.4,178.4);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f().s("#000000").ss(25,1,1).p("AAALtIAA3a");
	this.shape_338.setTransform(142.4,179.6);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f().s("#000000").ss(25,1,1).p("AAAL5IAA3x");
	this.shape_339.setTransform(142.4,180.7);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f().s("#000000").ss(25,1,1).p("AAAMEIAA4H");
	this.shape_340.setTransform(142.4,181.8);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f().s("#000000").ss(25,1,1).p("AAAMPIAA4d");
	this.shape_341.setTransform(142.4,182.9);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f().s("#000000").ss(25,1,1).p("AAAMaIAA40");
	this.shape_342.setTransform(142.4,184.1);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f().s("#000000").ss(25,1,1).p("AAAMmIAA5L");
	this.shape_343.setTransform(142.4,185.2);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f().s("#000000").ss(25,1,1).p("AAAMxIAA5h");
	this.shape_344.setTransform(142.4,186.3);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f().s("#000000").ss(25,1,1).p("AAAM8IAA53");
	this.shape_345.setTransform(142.4,187.4);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f().s("#000000").ss(25,1,1).p("AAANHIAA6O");
	this.shape_346.setTransform(142.4,188.6);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f().s("#000000").ss(25,1,1).p("AAANTIAA6l");
	this.shape_347.setTransform(142.4,189.7);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f().s("#000000").ss(25,1,1).p("AAANeIAA67");
	this.shape_348.setTransform(142.4,190.8);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f().s("#000000").ss(25,1,1).p("AAANqIAA7T");
	this.shape_349.setTransform(142.4,192);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f().s("#000000").ss(25,1,1).p("AAAN1IAA7p");
	this.shape_350.setTransform(142.4,193.1);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f().s("#000000").ss(25,1,1).p("AAAOAIAA7/");
	this.shape_351.setTransform(142.4,194.2);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f().s("#000000").ss(25,1,1).p("AAAOLIAA8V");
	this.shape_352.setTransform(142.4,195.3);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f().s("#000000").ss(25,1,1).p("AAAOXIAA8t");
	this.shape_353.setTransform(142.4,196.5);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f().s("#000000").ss(25,1,1).p("AAAOiIAA9D");
	this.shape_354.setTransform(142.4,197.6);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f().s("#000000").ss(25,1,1).p("AAAOtIAA9Z");
	this.shape_355.setTransform(142.4,198.7);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f().s("#000000").ss(25,1,1).p("AAAO4IAA9v");
	this.shape_356.setTransform(142.4,199.8);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f().s("#000000").ss(25,1,1).p("AAAPEIAA+H");
	this.shape_357.setTransform(142.4,201);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f().s("#000000").ss(25,1,1).p("AAAPPIAA+d");
	this.shape_358.setTransform(142.4,202.1);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f().s("#000000").ss(25,1,1).p("AAAPaIAA+z");
	this.shape_359.setTransform(142.4,203.2);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f().s("#000000").ss(25,1,1).p("AAAPlIAA/J");
	this.shape_360.setTransform(142.4,204.3);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f().s("#000000").ss(25,1,1).p("AAAPxIAA/h");
	this.shape_361.setTransform(142.4,205.5);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f().s("#000000").ss(25,1,1).p("AAAP8IAA/3");
	this.shape_362.setTransform(142.4,206.6);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f().s("#000000").ss(25,1,1).p("AAAQHMAAAggN");
	this.shape_363.setTransform(142.4,207.7);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f().s("#000000").ss(25,1,1).p("AAAQTMAAAggl");
	this.shape_364.setTransform(142.4,208.9);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f().s("#000000").ss(25,1,1).p("AAAQeMAAAgg7");
	this.shape_365.setTransform(142.4,210);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f().s("#000000").ss(25,1,1).p("AAAQpMAAAghR");
	this.shape_366.setTransform(142.4,211.1);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f().s("#000000").ss(25,1,1).p("AAAQ0MAAAghn");
	this.shape_367.setTransform(142.4,212.2);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f().s("#000000").ss(25,1,1).p("AAARAMAAAgh/");
	this.shape_368.setTransform(142.4,213.4);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f().s("#000000").ss(25,1,1).p("AAARLMAAAgiV");
	this.shape_369.setTransform(142.4,214.5);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f().s("#000000").ss(25,1,1).p("AAARWMAAAgir");
	this.shape_370.setTransform(142.4,215.6);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f().s("#000000").ss(25,1,1).p("AAARhMAAAgjB");
	this.shape_371.setTransform(142.4,216.7);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f().s("#000000").ss(25,1,1).p("AAARtMAAAgjZ");
	this.shape_372.setTransform(142.4,217.9);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f().s("#000000").ss(25,1,1).p("AAAR4MAAAgjv");
	this.shape_373.setTransform(142.4,219);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f().s("#000000").ss(25,1,1).p("AAASDMAAAgkF");
	this.shape_374.setTransform(142.4,220.1);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f().s("#000000").ss(25,1,1).p("AAASOMAAAgkb");
	this.shape_375.setTransform(142.4,221.2);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f().s("#000000").ss(25,1,1).p("AAASaMAAAgkz");
	this.shape_376.setTransform(142.4,222.4);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f().s("#000000").ss(25,1,1).p("AAASlMAAAglJ");
	this.shape_377.setTransform(142.4,223.5);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f().s("#000000").ss(25,1,1).p("AAASwMAAAglf");
	this.shape_378.setTransform(142.4,224.6);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f().s("#000000").ss(25,1,1).p("AAAS7MAAAgl1");
	this.shape_379.setTransform(142.4,225.7);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f().s("#000000").ss(25,1,1).p("AAATHMAAAgmN");
	this.shape_380.setTransform(142.4,226.9);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f().s("#000000").ss(25,1,1).p("AAATSMAAAgmj");
	this.shape_381.setTransform(142.4,228);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f().s("#000000").ss(25,1,1).p("AAATdMAAAgm5");
	this.shape_382.setTransform(142.4,229.1);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f().s("#000000").ss(25,1,1).p("AAAToMAAAgnQ");
	this.shape_383.setTransform(142.4,230.3);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f().s("#000000").ss(25,1,1).p("AAAT0MAAAgnn");
	this.shape_384.setTransform(142.4,231.4);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f().s("#000000").ss(25,1,1).p("AAAT/MAAAgn9");
	this.shape_385.setTransform(142.4,232.5);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f().s("#000000").ss(25,1,1).p("AAAUKMAAAgoT");
	this.shape_386.setTransform(142.4,233.6);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f().s("#000000").ss(25,1,1).p("AAAUVMAAAgoq");
	this.shape_387.setTransform(142.4,234.8);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f().s("#000000").ss(25,1,1).p("AAAUhMAAAgpB");
	this.shape_388.setTransform(142.4,235.9);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f().s("#000000").ss(25,1,1).p("AAAUsMAAAgpX");
	this.shape_389.setTransform(142.4,237);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f().s("#000000").ss(25,1,1).p("AAAU3MAAAgpt");
	this.shape_390.setTransform(142.4,238.1);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f().s("#000000").ss(25,1,1).p("AAAVCMAAAgqE");
	this.shape_391.setTransform(142.4,239.3);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f().s("#000000").ss(25,1,1).p("AAAVOMAAAgqb");
	this.shape_392.setTransform(142.4,240.4);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f().s("#000000").ss(25,1,1).p("AAAVZMAAAgqx");
	this.shape_393.setTransform(142.4,241.5);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f().s("#000000").ss(25,1,1).p("AAAVkMAAAgrH");
	this.shape_394.setTransform(142.4,242.6);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f().s("#000000").ss(25,1,1).p("AAAVvMAAAgre");
	this.shape_395.setTransform(142.4,243.8);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f().s("#000000").ss(25,1,1).p("AAAV7MAAAgr1");
	this.shape_396.setTransform(142.4,244.9);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f().s("#000000").ss(25,1,1).p("AAAWGMAAAgsL");
	this.shape_397.setTransform(142.4,246);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f().s("#000000").ss(25,1,1).p("AAAWRMAAAgsh");
	this.shape_398.setTransform(142.4,247.1);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f().s("#000000").ss(25,1,1).p("AAAWdMAAAgs5");
	this.shape_399.setTransform(142.4,248.3);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f().s("#000000").ss(25,1,1).p("AAAWoMAAAgtP");
	this.shape_400.setTransform(142.4,249.4);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f().s("#000000").ss(25,1,1).p("AAAWzMAAAgtl");
	this.shape_401.setTransform(142.4,250.5);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f().s("#000000").ss(25,1,1).p("AAAW/MAAAgt8");
	this.shape_402.setTransform(142.4,251.7);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f().s("#000000").ss(25,1,1).p("AAAXKMAAAguT");
	this.shape_403.setTransform(142.4,252.8);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f().s("#000000").ss(25,1,1).p("AAAXVMAAAgup");
	this.shape_404.setTransform(142.4,253.9);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f().s("#000000").ss(25,1,1).p("AAAXgMAAAgu/");
	this.shape_405.setTransform(142.4,255);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f().s("#000000").ss(25,1,1).p("AAAXsMAAAgvW");
	this.shape_406.setTransform(142.4,256.2);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f().s("#000000").ss(25,1,1).p("AAAX3MAAAgvt");
	this.shape_407.setTransform(142.4,257.3);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f().s("#000000").ss(25,1,1).p("AAAYCMAAAgwD");
	this.shape_408.setTransform(142.4,258.4);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f().s("#000000").ss(25,1,1).p("AAAYNMAAAgwZ");
	this.shape_409.setTransform(142.4,259.5);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f().s("#000000").ss(25,1,1).p("AAAYZMAAAgww");
	this.shape_410.setTransform(142.4,260.7);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f().s("#000000").ss(25,1,1).p("AAAYkMAAAgxH");
	this.shape_411.setTransform(142.4,261.8);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f().s("#000000").ss(25,1,1).p("AAAYvMAAAgxd");
	this.shape_412.setTransform(142.4,262.9);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f().s("#000000").ss(25,1,1).p("AAAY6MAAAgxz");
	this.shape_413.setTransform(142.4,264);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f().s("#000000").ss(25,1,1).p("AAAZGMAAAgyK");
	this.shape_414.setTransform(142.4,265.2);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f().s("#000000").ss(25,1,1).p("AAAZRMAAAgyh");
	this.shape_415.setTransform(142.4,266.3);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f().s("#000000").ss(25,1,1).p("AAAZcMAAAgy3");
	this.shape_416.setTransform(142.4,267.4);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f().s("#000000").ss(25,1,1).p("AAAZoMAAAgzP");
	this.shape_417.setTransform(142.4,268.6);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f().s("#000000").ss(25,1,1).p("AAAZzMAAAgzl");
	this.shape_418.setTransform(142.4,269.7);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f().s("#000000").ss(25,1,1).p("AAAZ+MAAAgz7");
	this.shape_419.setTransform(142.4,270.8);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f().s("#000000").ss(25,1,1).p("AAAaJMAAAg0R");
	this.shape_420.setTransform(142.4,271.9);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f().s("#000000").ss(25,1,1).p("AAAaVMAAAg0p");
	this.shape_421.setTransform(142.4,273.1);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f().s("#000000").ss(25,1,1).p("AAAagMAAAg0/");
	this.shape_422.setTransform(142.4,274.2);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f().s("#000000").ss(25,1,1).p("AAA6qMAAAA1V");
	this.shape_423.setTransform(142.4,275.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_273}]},9).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_282}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_289}]},1).to({state:[{t:this.shape_290}]},1).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_293}]},1).to({state:[{t:this.shape_294}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_299}]},1).to({state:[{t:this.shape_300}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_304}]},1).to({state:[{t:this.shape_305}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_308}]},1).to({state:[{t:this.shape_309}]},1).to({state:[{t:this.shape_310}]},1).to({state:[{t:this.shape_311}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_313}]},1).to({state:[{t:this.shape_314}]},1).to({state:[{t:this.shape_315}]},1).to({state:[{t:this.shape_316}]},1).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_352}]},1).to({state:[{t:this.shape_353}]},1).to({state:[{t:this.shape_354}]},1).to({state:[{t:this.shape_355}]},1).to({state:[{t:this.shape_356}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_358}]},1).to({state:[{t:this.shape_359}]},1).to({state:[{t:this.shape_360}]},1).to({state:[{t:this.shape_361}]},1).to({state:[{t:this.shape_362}]},1).to({state:[{t:this.shape_363}]},1).to({state:[{t:this.shape_364}]},1).to({state:[{t:this.shape_365}]},1).to({state:[{t:this.shape_366}]},1).to({state:[{t:this.shape_367}]},1).to({state:[{t:this.shape_368}]},1).to({state:[{t:this.shape_369}]},1).to({state:[{t:this.shape_370}]},1).to({state:[{t:this.shape_371}]},1).to({state:[{t:this.shape_372}]},1).to({state:[{t:this.shape_373}]},1).to({state:[{t:this.shape_374}]},1).to({state:[{t:this.shape_375}]},1).to({state:[{t:this.shape_376}]},1).to({state:[{t:this.shape_377}]},1).to({state:[{t:this.shape_378}]},1).to({state:[{t:this.shape_379}]},1).to({state:[{t:this.shape_380}]},1).to({state:[{t:this.shape_381}]},1).to({state:[{t:this.shape_382}]},1).to({state:[{t:this.shape_383}]},1).to({state:[{t:this.shape_384}]},1).to({state:[{t:this.shape_385}]},1).to({state:[{t:this.shape_386}]},1).to({state:[{t:this.shape_387}]},1).to({state:[{t:this.shape_388}]},1).to({state:[{t:this.shape_389}]},1).to({state:[{t:this.shape_390}]},1).to({state:[{t:this.shape_391}]},1).to({state:[{t:this.shape_392}]},1).to({state:[{t:this.shape_393}]},1).to({state:[{t:this.shape_394}]},1).to({state:[{t:this.shape_395}]},1).to({state:[{t:this.shape_396}]},1).to({state:[{t:this.shape_397}]},1).to({state:[{t:this.shape_398}]},1).to({state:[{t:this.shape_399}]},1).to({state:[{t:this.shape_400}]},1).to({state:[{t:this.shape_401}]},1).to({state:[{t:this.shape_402}]},1).to({state:[{t:this.shape_403}]},1).to({state:[{t:this.shape_404}]},1).to({state:[{t:this.shape_405}]},1).to({state:[{t:this.shape_406}]},1).to({state:[{t:this.shape_407}]},1).to({state:[{t:this.shape_408}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_410}]},1).to({state:[{t:this.shape_411}]},1).to({state:[{t:this.shape_412}]},1).to({state:[{t:this.shape_413}]},1).to({state:[{t:this.shape_414}]},1).to({state:[{t:this.shape_415}]},1).to({state:[{t:this.shape_416}]},1).to({state:[{t:this.shape_417}]},1).to({state:[{t:this.shape_418}]},1).to({state:[{t:this.shape_419}]},1).to({state:[{t:this.shape_420}]},1).to({state:[{t:this.shape_421}]},1).to({state:[{t:this.shape_422}]},1).to({state:[{t:this.shape_423}]},1).wait(361));

	// Base
	this.instance_4 = new lib.Symbol1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(275,275);
	this.instance_4.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(520));

	// Background
	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_424.setTransform(275,275,3.373,2.543);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_425.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_425},{t:this.shape_424}]}).wait(520));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(273.5,234.3,553,735);
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