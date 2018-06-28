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


(lib._1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Av1dqQg2gvAAhAIAUhRMAcNg3oQAihbBeAAQBHAAA2AvQA5AsAABHIgUBRMgcGA3oQg2BYhbAAQg9AAg5gwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.8,-194.6,213.7,389.2);


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
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AAAAfIAAg9");
	this.shape_1.setTransform(0,-101);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AAAAkIAAhH");
	this.shape_2.setTransform(0,-100.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("AAAAqIAAhT");
	this.shape_3.setTransform(0,-99.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("AAAAwIAAhf");
	this.shape_4.setTransform(0,-99.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(5,1,1).p("AAAA1IAAhp");
	this.shape_5.setTransform(0,-98.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(5,1,1).p("AAAA7IAAh1");
	this.shape_6.setTransform(0,-98.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(5,1,1).p("AAABBIAAiB");
	this.shape_7.setTransform(0,-97.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(5,1,1).p("AAABGIAAiL");
	this.shape_8.setTransform(0,-97);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(5,1,1).p("AAABMIAAiX");
	this.shape_9.setTransform(0,-96.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(5,1,1).p("AAABSIAAij");
	this.shape_10.setTransform(0,-95.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5,1,1).p("AAABXIAAit");
	this.shape_11.setTransform(0,-95.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(5,1,1).p("AAABdIAAi5");
	this.shape_12.setTransform(0,-94.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(5,1,1).p("AAABjIAAjF");
	this.shape_13.setTransform(0,-94.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(5,1,1).p("AAABoIAAjQ");
	this.shape_14.setTransform(0,-93.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(5,1,1).p("AAABuIAAjb");
	this.shape_15.setTransform(0,-93);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(5,1,1).p("AAAB0IAAjn");
	this.shape_16.setTransform(0,-92.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(5,1,1).p("AAAB6IAAjy");
	this.shape_17.setTransform(0,-91.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(5,1,1).p("AAAB/IAAj9");
	this.shape_18.setTransform(0,-91.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(5,1,1).p("AAACFIAAkJ");
	this.shape_19.setTransform(0,-90.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(5,1,1).p("AAACKIAAkU");
	this.shape_20.setTransform(0,-90.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(5,1,1).p("AAACQIAAkf");
	this.shape_21.setTransform(0,-89.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(5,1,1).p("AAACWIAAkr");
	this.shape_22.setTransform(0,-89.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(5,1,1).p("AAACbIAAk1");
	this.shape_23.setTransform(0,-88.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(5,1,1).p("AAAChIAAlB");
	this.shape_24.setTransform(0,-87.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(5,1,1).p("AAACnIAAlN");
	this.shape_25.setTransform(0,-87.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(5,1,1).p("AAACtIAAlZ");
	this.shape_26.setTransform(0,-86.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(5,1,1).p("AAACyIAAlj");
	this.shape_27.setTransform(0,-86.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(5,1,1).p("AAAC4IAAlv");
	this.shape_28.setTransform(0,-85.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(5,1,1).p("AAAC9IAAl6");
	this.shape_29.setTransform(0,-85.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(5,1,1).p("AAADDIAAmF");
	this.shape_30.setTransform(0,-84.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(5,1,1).p("AAADJIAAmR");
	this.shape_31.setTransform(0,-84);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(5,1,1).p("AAADPIAAmc");
	this.shape_32.setTransform(0,-83.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(5,1,1).p("AAADUIAAmn");
	this.shape_33.setTransform(0,-82.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(5,1,1).p("AAADaIAAmz");
	this.shape_34.setTransform(0,-82.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(5,1,1).p("AAADgIAAm+");
	this.shape_35.setTransform(0,-81.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(5,1,1).p("AAADlIAAnJ");
	this.shape_36.setTransform(0,-81.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(5,1,1).p("AAADrIAAnV");
	this.shape_37.setTransform(0,-80.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(5,1,1).p("AAADwIAAnf");
	this.shape_38.setTransform(0,-80);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(5,1,1).p("AAAD2IAAnr");
	this.shape_39.setTransform(0,-79.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(5,1,1).p("AAAD8IAAn3");
	this.shape_40.setTransform(0,-78.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(5,1,1).p("AAAECIAAoD");
	this.shape_41.setTransform(0,-78.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(5,1,1).p("AAAEHIAAoN");
	this.shape_42.setTransform(0,-77.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(5,1,1).p("AAAENIAAoZ");
	this.shape_43.setTransform(0,-77.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(5,1,1).p("AAAESIAAok");
	this.shape_44.setTransform(0,-76.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(5,1,1).p("AAAEYIAAov");
	this.shape_45.setTransform(0,-76);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(5,1,1).p("AAAEeIAAo7");
	this.shape_46.setTransform(0,-75.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(5,1,1).p("AAAEkIAApG");
	this.shape_47.setTransform(0,-74.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(5,1,1).p("AAAEpIAApR");
	this.shape_48.setTransform(0,-74.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(5,1,1).p("AAAEvIAApd");
	this.shape_49.setTransform(0,-73.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(5,1,1).p("AAAE1IAApo");
	this.shape_50.setTransform(0,-73.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(5,1,1).p("AAAE6IAApz");
	this.shape_51.setTransform(0,-72.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(5,1,1).p("AAAFAIAAp/");
	this.shape_52.setTransform(0,-72.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(5,1,1).p("AAAFGIAAqL");
	this.shape_53.setTransform(0,-71.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(5,1,1).p("AAAFLIAAqV");
	this.shape_54.setTransform(0,-70.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(5,1,1).p("AAAFRIAAqh");
	this.shape_55.setTransform(0,-70.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(5,1,1).p("AAAFXIAAqt");
	this.shape_56.setTransform(0,-69.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(5,1,1).p("AAAFcIAAq3");
	this.shape_57.setTransform(0,-69.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(5,1,1).p("AAAFiIAArD");
	this.shape_58.setTransform(0,-68.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(5,1,1).p("AAAFnIAArO");
	this.shape_59.setTransform(0,-68.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(5,1,1).p("AAAFtIAArZ");
	this.shape_60.setTransform(0,-67.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(5,1,1).p("AAAFzIAArl");
	this.shape_61.setTransform(0,-67);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(5,1,1).p("AAAF5IAArw");
	this.shape_62.setTransform(0,-66.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(5,1,1).p("AAAF+IAAr7");
	this.shape_63.setTransform(0,-65.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(5,1,1).p("AAAGEIAAsH");
	this.shape_64.setTransform(0,-65.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(5,1,1).p("AAAGKIAAsS");
	this.shape_65.setTransform(0,-64.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(5,1,1).p("AAAGPIAAsd");
	this.shape_66.setTransform(0,-64.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(5,1,1).p("AAAGVIAAsp");
	this.shape_67.setTransform(0,-63.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(5,1,1).p("AAAGbIAAs1");
	this.shape_68.setTransform(0,-63);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(5,1,1).p("AAAGgIAAs/");
	this.shape_69.setTransform(0,-62.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(5,1,1).p("AAAGmIAAtL");
	this.shape_70.setTransform(0,-61.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(5,1,1).p("AAAGsIAAtX");
	this.shape_71.setTransform(0,-61.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(5,1,1).p("AAAGxIAAth");
	this.shape_72.setTransform(0,-60.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(5,1,1).p("AAAG3IAAtt");
	this.shape_73.setTransform(0,-60.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(5,1,1).p("AAAG9IAAt4");
	this.shape_74.setTransform(0,-59.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(5,1,1).p("AAAnBIAAOD");
	this.shape_75.setTransform(0,-59);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).wait(1));

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0.3,-103.8,1,1,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-16.8},75).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.1,-106.6,22.3,13.8);


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
(lib.WS_Cursive_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_282 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(282).call(this.frame_282).wait(2));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(365.1,97.8,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({x:188,y:449.5},170).wait(15).to({x:189.5,y:449.3},0).to({guide:{path:[189.6,449.2,202.1,441.3,216.1,428.5,227.5,417.9,240,404,256.3,385.7,274.3,361.6,318.5,302.5,339.7,291.3,361,280.1,359.3,316.8,357.7,353.6,363.1,374.1,368.5,394.6,380.8,398.8,405.6,407.4,459.9,368.4,505.5,336.5,531.3,323.3,543.5,317.1,552.9,314.1,568.7,309.1,637.9,293.8]}},89).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(188,450,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},170).wait(105));

	// arrow
	this.instance_1 = new lib.ar5("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(349.2,217.4,1,1,25.5,0,0,0,-1.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).wait(275));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_9 = new cjs.Graphics().p("AAHEXQgxgVhGgkQhGgjgwgdQgvgcACgFIDXmlQACgFAzAWQAyAWBGAjQBGAkAvAcQAwAdgCAEIjXGmIgDABQgJAAgqgTg");
	var mask_1_graphics_10 = new cjs.Graphics().p("AAGEaQgzgThGghIgwgXIgrgWIgOgIIgDgCIgGgDIgFgDIgOgHQgOgJgIgHQgHgFgCgDIgBgDIADgFIDZmrQADgGAzAVQAyAUBHAhIA8AdIAaANIAMAHIALAFIADACIACABIABABIABAAIADACIAFADIABABIADACIABABIABABIAFADIAIAFIABABIAIAEIABABIAFADIABAAIAFAFQABABAAAAQABABAAABQAAAAAAAAQAAABAAAAIgBACIAAABIgBACIgBACIgBACIgBABIgCAEIgDAEIgDAHIgGAMIjKGMQAAABAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgKAAgpgRg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AAFEeQgzgShHgfIgwgVIgrgUIgQgIIgDgCIgFgDIgGgDIgOgHIgXgQQgHgGgCgDIgBgCIADgGIDfm3QADgGAzAUQAzASBIAfIA8AbIAaAMIANAGIALAGIADABIACABIABABIABAAIADACIAFADIABABIADACIACABIABABIAFADIAIAFIABABIAIAFIABABIAFADIABAAIAGAFQAAAAABABQAAABAAAAQAAABAAAAQAAABAAAAIgBADIAAABIgBABIgBACIgBACIgBABIgCAEIgCAFIgDAHIgHANIjPGWQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAgBAAQgLAAgngPg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AAEEhQg0gQhHgdIgxgTIgsgTIgPgHIgDgCIgGgDIgGgDIgOgHQgPgKgJgHQgHgFgCgEIgBgCIADgGIDlnCQADgHAzATQA0AQBIAdIA9AZIAaALIANAGIALAFIAEACIACABIABAAIABAAIADACIAFADIABABIAEACIABABIABABIAFADIAJAFIABABIAIAFIABABIAFAEIABAAIAGAFQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAIAAABIgBACIAAABIgBABIgBACIgBACIgBACIgCAEIgDAEIgDAIIgGANIjVGgQgBACgEAAQgMAAgmgOg");
	var mask_1_graphics_13 = new cjs.Graphics().p("AADEjQg1gNhIgbIgxgRIgsgRIgQgHIgDgCIgGgDIgGgDIgPgIQgPgKgJgHQgHgGgCgDIgBgDIADgFIDqnOQAEgHAzASQA1AOBIAbIA+AWIAaAKIANAGIAMAEIADACIACABIACABIABAAIACABIAGADIABACIAEACIABABIABABIAGADIAJAFIABABIAHAFIABABIAGAEIABAAIAGAFQAAABABABQAAAAAAABQAAAAAAABQAAAAAAABIAAAAIgBADIAAABIgBABIgBACIgBACIgBACIgDAEIgCAEIgDAIIgHAOIjaGqQgBADgFAAQgNAAgkgOg");
	var mask_1_graphics_14 = new cjs.Graphics().p("AABEmQg0gLhJgZIgygPIgsgQIgQgGIgEgCIgGgDIgGgDIgPgIQgQgKgJgHQgIgGgBgEIgBgDIADgFIDwnZQADgIA0ARQA1AMBJAYIA/AVIAaAJIANAFIAMAFIAEABIACABIABABIABAAIADACIAGADIABABIAEACIABABIABABIAGADIAJAFIABABIAIAGIABABIAGADIABABIAGAFQACADgBACIAAAAIgBADIAAABIgBABIgBACIgCADIgBABIgCAEIgCAFIgEAIIgGAOIjfG1QgCACgGAAQgNAAgkgMg");
	var mask_1_graphics_15 = new cjs.Graphics().p("AAAEpQg1gJhKgXIgygOIgtgOIgQgGIgEgCIgGgDIgGgDIgQgIQgQgKgJgHQgIgGgCgEIgBgDIAEgGID1njQAEgJA0AQQA2AJBJAXIA/ASIAcAJIAMAEIANAEIADACIADABIABABIABAAIADABIAGADIABABIAEACIABABIABABIAGAEIAKAFIABABIAIAGIABABIAGAEIABAAIAFAFQADADgBACIAAABIgBACIAAACIgBABIgCACIgBADIgBABIgCAFIgCAEIgEAIIgHAOIjkHAQgCADgHAAQgOAAgigLg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AAAEsQg3gHhKgVIgygMIgugMIgRgGIgDgCIgHgDIgGgDIgQgIQgRgKgJgIQgIgGgCgEIgBgDIADgGID7nvQAFgJA0APQA2AHBKAVIBAAQIAcAHIAMAFIANADIAEACIACABIABABIABAAIAEABIAGADIABABIAEACIABABIABABIAHAEIAJAFIACABIAIAGIABABIAFAEIABAAIAGAGQADADgBACIAAABIgBADIAAABIgBABIgCADIgBACIgBABIgCAFIgDAFIgDAIIgIAPIjpHJQgBAEgJAAQgPAAgfgKg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AgBEvQg4gFhKgSIgzgLIgugLIgRgFIgEgCIgGgDIgHgDIgRgIQgRgKgJgIQgIgHgCgEIgBgDIADgGIEBn6QAFgKAzAOQA4AFBKATIBBAOIAcAGIANAEIANAEIADABIADABIABABIABAAIADABIABAAIAGADIABABIAEACIABABIACACIAGADIAAAAIAKAGIABABIAIAFIABACIAGAEIABAAIAGAGQADADgBACIAAABIgBADIAAABIgCABIgBADIgBACIgBACIgDAFIgCAFIgEAIIgHAPIjuHUQgCAEgLAAQgOAAgegJg");
	var mask_1_graphics_18 = new cjs.Graphics().p("AgCEyQg4gDhLgQIg0gJIgugJIgSgFIgDgCIgHgDIgHgDIgRgIQgRgKgKgJQgIgHgCgEIgBgDIAEgGIEGoFQAFgLAzANQA5AEBLAQQAjAHAeAEIAcAGIANADIANAEIAEABIADABIABABIABAAIAEABIAGADIACABIAEACIABACIABABIAHADIAKAGIABABIAJAGIABABIAGAFIABAAIAGAGQACADAAACIgBABIgBADIAAABIgBACIgBACIgCADIgBABIgCAFIgDAFIgEAJIgHAPIj0HeQgCAFgMAAQgPAAgcgIg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AgDE1Qg5gBhMgOIg0gHIgugIIgSgFIgEgBIgHgDIgHgDIgRgIQgSgLgKgJQgIgHgCgFIgBgCIAEgHIELoQQAGgMAzANQA6ABBLAOIBCAKIAcAFIANACIAOADIAEACIACABIACABIABAAIAEABIAGADIACABIAEACIABABIABABIAHAEIAAAAIALAGIABABIAIAGIACABIAGAFIABAAIAGAGQACADAAADIgBABIgBADIAAABIgBABIgCADIgBADIgBABIgDAFIgCAFIgEAJIgIAQIj4HoQgDAGgOAAQgPAAgagHg");
	var mask_1_graphics_20 = new cjs.Graphics().p("AgEE4Qg6ABhMgMIg0gFIgwgGIgSgFIgEgBIgHgDIgHgDIgRgIQgTgLgKgJQgIgHgCgFIgBgDIADgHIESobQAGgNAzAMQA6gBBMAMIBDAIIAcAEIAOACIANADIAEABIADABIABABIABAAIAEABIAHADIACABIAEACIABABIACABIAGAEIABAAIAKAGIABABIAJAGIABACIAGAEIACABIAGAGQACADgBADIAAABIgBADIAAABIgBACIgCACIgBADIgBACIgDAFIgCAFIgEAJIgIAQIj+HzQgDAHgQAAQgOAAgZgHg");
	var mask_1_graphics_21 = new cjs.Graphics().p("AgFE7Qg7ADhMgKIg1gDIgwgFIgTgEIgEgBIgGgDIgIgDIgSgJQgSgKgLgKQgIgHgCgFIgBgDIADgHIEXomQAHgOAzALQA7gDBNAKQAjAEAgABIAcADIAOACIAOADIAEABIACABIACABIABAAIAEABIAHADIACABIAEACIABABIACABIAHAEIALAGIABACIAJAGIABABIAGAFIABAAIAHAHQACADgBADIAAABIgBADIAAABIgBACIgCADIgBADIgBABIgDAFIgDAGIgEAJIgIAQIkDH9QgDAIgRAAQgPAAgXgGg");
	var mask_1_graphics_22 = new cjs.Graphics().p("AgGE+Qg7AGhNgIIg2gCIgwgDIgTgEIgEgBIgHgDIgHgDIgTgJQgTgLgKgJQgJgIgCgFIgBgCIAEgIIANgbIAAAAIEPoWQAHgPAzAKQA8gFBNAIQAkADAgAAIAdACIANACIAPACIAEABIACABIACABIABAAIAEABIAIADIABABIAEACIACABIABACIAHADIABAAIALAHIABABIAJAGIABACQAEACADADIABAAIAGAHQACADAAADIAAABIgCADIAAACIgBABIgBADIgCADIgBACIgDAFIgCAFIgFAKIgIAQIkIIIQgEAIgTAAQgOAAgWgFg");
	var mask_1_graphics_23 = new cjs.Graphics().p("AiRFDIg2AAIgwgCQgIAAgLgDIgFgBIgHgDIgHgDIgTgJQgUgLgKgKQgJgIgCgFIgBgCIAEgIIEio8QAHgPAzAIQA9gHBNAGQAlABAgAAIAdABIAOABIAOACIAEABIADABIACABIABAAIAEABIAHADIACABIAFACIABABIACACIAHADIAAABIALAGIACABIAJAHIABABIAHAFIABABIAGAGQACAEAAADIAAABIgCAEIAAABIgBABIgCADIgBADIgBACIgDAFIgDAGIgEAKIgIAQIkOISQgHAPg0gJQggAEgmAAQggAAgkgDg");
	var mask_1_graphics_24 = new cjs.Graphics().p("Aj6FMIgUgDIgEgCIgIgCIgHgDIgUgJQgTgLgLgLQgJgHgCgGIgBgCIADgIIEopIQAIgPAzAHQA9gIBOACQAlABAggCIAeABIAOAAIAOACIAFABIACABIACABIABAAIAFABIAHADIACABIAFACIABACIACABIAHADIAMAHIABABIAKAHIABABIAGAGIACAAIAGAHQACADAAADIAAACIgCAEIAAABIgBABIgCADIgBAEIgBABIgDAGIgDAFIgEAKIgJARIkSIcQgJARgzgKQg9AJhOgDQgdAAgZACIgxAAg");
	var mask_1_graphics_25 = new cjs.Graphics().p("AkSFTIgEgBIgIgCIgHgEIgUgJQgUgLgLgKQgJgJgCgGIgBgCIADgIIEupTQAIgQAzAHQA+gLBPABQAkgBAhgCIAegBIAOAAQAGAAAJACIAEABIADABIACABIABAAIAFAAIAHADIACABIAFADIABABIACABIAHAEIABAAIALAHIACABIAJAHIACABIAGAGIABAAQAFAEACAEQACADAAADIAAACIgCADIAAABIgBACIgCAEIgBACIgCACIgCAGIgDAFIgFALIgIARIkYInQgJAQg0gIQg9ALhOgBIg3ADIgyACIgUgDg");
	var mask_1_graphics_26 = new cjs.Graphics().p("AkVFeIgFgBIgHgDIgIgDQgLgEgKgFQgUgLgLgLQgJgJgCgGIgBgCIADgIIEzpeQAJgRAzAGQA+gNBQgBQAlgCAhgEIAegBIAOAAIAPAAIAFACIADAAIABABIACAAIAEABIABAAIAHADIACABIAFADIABABIACABIAIAEIAAAAIAMAHIACABIAJAHIABABIAHAGIABABIAHAHQACAEAAADIAAACIgCADIAAABIgBACIgCADIgBAEIgCABIgDAGIgDAGIgEAKIgJASIkdIxQgJARg0gHQg9ANhQABIg3AFIgyADQgJAAgLgCg");
	var mask_1_graphics_27 = new cjs.Graphics().p("AkZFpIgFgBIgHgDIgJgDIgUgJQgVgMgLgLQgKgIgBgHIgBgCIADgIIE4ppQAJgSA0AFQA/gPBQgDQAlgDAigFIAegCIAOgBQAHgBAJACIAEABIADABIACAAIABAAIAFABIAIADIACABIAFADIABABIACABIAIAEIABAAIAMAHIABABIAKAIIABABIAHAGIABAAQAFAEACAEQACAEAAADIAAACIgCADIAAACIgBACIgCADIgCADIgBACIgDAGIgDAGIgFAKIgJASIkiI7QgJASg0gGQg+APhQADQgdADgbAEIgyAFIgEAAIgRgCg");
	var mask_1_graphics_28 = new cjs.Graphics().p("AkdF0IgEgBIgIgDIgJgDIgVgJQgVgMgLgLQgKgJgCgGIAAgDIADgIIE+p0QAJgTA0AEQBAgRBQgFQAmgEAigGIAegDIAPgBQAGgBAJABIAFABIADABIACAAIABAAIAFABIAIADIACABIAFADIACABIACABIAHAEIABAAIAMAHIACACIAKAHIABABIAHAGIABABIAHAIQACAEAAADIAAACIgCAEIAAABIgCACIgBADIgCADIgBACIgDAGIgDAGIgFALIgJASIknJFQgKAUg0gGQg/AShRAFIg4AIIgyAGIgFABIgRgCg");
	var mask_1_graphics_29 = new cjs.Graphics().p("AkgF/IgFgBIgIgCIgIgDQgLgEgLgGQgVgMgMgLQgJgJgCgHIgBgCIADgIIFEqAQAKgUAzAEQBBgUBRgHQAmgFAigHIAfgEIAOgBQAHgCAJABIAFACIADAAIACABIABAAIAFABIAJADIACABIAFACIABACIACABIAIAEIABAAIAMAHIACACIAKAHIABABIAHAHIABAAIAHAIQADAEgBADIAAADIgCADIAAACIgBACIgCADIgBADIgCACIgDAGIgDAHIgFAKIgJATIktJPQgKAUg0gEQg/AThRAHQgeAFgbAFIgzAIIgHAAIgPgBg");
	var mask_1_graphics_30 = new cjs.Graphics().p("AkjGKIgFgBIgJgDIgIgDIgWgJQgWgMgMgMQgJgJgCgHIgBgCIADgJIFJqLQAKgUA0ACQBBgVBSgJQAmgHAjgHIAfgGIAOgBQAHgCAJABIAFABIADABIACAAIABAAIAGACIAJADIACABIAFACIABABIACABIAJAFIAAAAIANAHIACABIAKAIIABABIAHAHIABAAIAHAIQADAEgBAEIAAACIgCAEIAAABIgBACIgCAEIgCADIgBACIgDAGIgDAHIgFALIgKATIkxJZQgLAVg0gDQhAAVhSAJQgeAFgbAHIg0AJIgIABIgNgBg");
	var mask_1_graphics_31 = new cjs.Graphics().p("AknGVIgFgBIgIgDIgJgDQgMgEgLgFQgWgMgMgNQgKgJgBgHIgBgCQABgFACgEIFPqWQAKgVA0ACQBCgYBSgLQAngIAigJIAggGIAPgCQAGgBAKAAIAFABIADABIACABIABAAIAGABIAJADIACABIAFACIACABIACABIAIAFIAAAAIANAHIACACIAKAHIACACIAHAGIABABIAHAIQADAEgBAEIAAACIgCAEIAAACIgBACIgCADIgCAEIgBACIgDAGIgDAGIgFALIgKAUIk3JkQgLAVg0gCQhBAXhSALIg6ANIg0AMIgIABIgOgBg");
	var mask_1_graphics_32 = new cjs.Graphics().p("AkrGgIgFgBIgIgDIgJgDIgXgJQgXgNgMgMQgKgKgCgHIAAgCQABgFACgEIFUqhQALgWA0ABQBCgaBTgOQAngIAjgKIAggHIAPgDQAHgBAJAAIAFABIADABIADABIABAAIAGABIAIADIADABIAFACIACABIACACIAIAEIABAAIANAIIACABIAKAIIACABIAHAHIABABQAFAEACAEQADAEgBAEIAAACIgCAEIAAACIgBACIgCADIgCAEIgBACIgDAGIgEAHIgFALIgKAUIk8JuQgLAWg0gBQhCAZhTAOIg6AOIg0AOIgKABIgNgBg");
	var mask_1_graphics_33 = new cjs.Graphics().p("AkuGrIgGgBIgIgDIgJgDQgMgEgMgFQgXgNgMgNQgKgKgCgHIgBgCIAEgJIAQgiIAAAAIFKqKQALgXA0AAQBDgcBTgQQAogJAjgLIAggIIAPgDQAHgCAKABIAFAAIADABIACABIABAAIAGABIABAAIAIADIADABIAFACIACABIACACIAJAEIAAAAIAOAIIABABIALAIIABACIAIAHIABAAIAHAJQADAEgBAEIAAADIgCAEIAAABIgCACIgBAEIgCADIgCACIgDAHIgDAHIgFALIgKAUIlBJ5QgMAXg0gBQhDAbhTAQQgfAIgcAIIg0APIgMABIgLAAg");
	var mask_1_graphics_34 = new cjs.Graphics().p("AkyG2IgFgBIgJgDIgJgDIgYgJQgXgNgNgNQgKgKgCgIIgBgCQABgFADgEIFfq4QAMgXA0gBQBEgeBTgSQAogKAkgMIAggJIAPgEQAHgCAKABIAFABIADAAIADABIABAAIAGABIAJADIADABIAFACIACABIACACIAJAEIAAAAIAOAIIACACIALAIIABABIAIAHIABABQAFAEACAFQADAEgBAEIAAADIgCAEIAAABIgCACIgBAEIgCAEIgCACIgDAGIgDAHIgGAMIgKAVIlGKCQgMAYg1AAQhDAehTARQgfAJgdAJIg1ARQgFABgIAAIgKAAg");
	var mask_1_graphics_35 = new cjs.Graphics().p("Ak2HBIgFgCIgJgCIgJgDQgMgEgMgFQgYgNgNgOQgKgKgCgIIgBgCIAEgJIFlrDQAMgYA0gCQBFggBUgUQAogLAkgNIAggKIAPgEQAIgCAKAAIAFABIADAAIACABIACAAIAGABIAAAAIAJADIADABIAFACIACACIADABIAJAEIAAABIAOAIIACABIALAIIABACIAIAHIABABIAIAIQACAFAAAEIgBADIgBAEIgBABIgCADIgCADIgBAEIgBACIgEAHIgEAHIgEAMIgLAVIlLKNQgNAYg1ABQhDAghVAUIg7ATIg2ASQgGACgKAAIgIAAg");
	var mask_1_graphics_36 = new cjs.Graphics().p("Ak5HMIgFgBIgJgDIgKgDQgNgEgMgFQgYgOgNgNQgKgLgCgHIgBgDIAEgJIFrrOQAMgZA0gDQBFghBVgXQAogMAlgPIAhgKIAPgFQAHgCAKAAIAGABIADAAIACABIACAAIAGABIAKADIACABIAGACIACACIACABIAJAEIABABIAOAIIACABIALAJIABABIAIAIIABAAIAHAJQADAFAAAEIgBADIgCAEIAAACIgBACIgCAEIgCAEIgCACIgDAHIgDAHIgGAMIgKAVIlRKXQgNAZg0ACQhFAihVAWIg8AVQgcAKgaAKQgHACgKAAIgHAAg");
	var mask_1_graphics_37 = new cjs.Graphics().p("Ak8HXIgGgBIgJgDIgKgCQgNgFgMgGQgZgNgNgOQgKgKgCgIIgBgCQABgFADgFIARgkIAAAAIFfq1QANgaA0gEQBGgjBVgZQApgNAlgQIAhgLIAPgFQAHgDALAAIAFABIAEABIACAAIABAAIAHABIAAAAIAKADIACABIAGADIACABIACABIAJAFIABAAIAOAIIACACIALAIIACACQAFADADAEIABABIAHAJQADAFAAAEIgBADIgCAEIAAACIgBACIgCAEIgCAEIgCACIgDAHIgEAHIgFANIgLAVIlWKiQgNAag1ACQhFAkhVAYQggALgdAMQgdALgZALQgHACgKAAIgHAAg");
	var mask_1_graphics_38 = new cjs.Graphics().p("AlAHiIgGgBIgJgDIgKgCQgNgFgNgGQgYgNgOgOQgKgLgCgIIgBgCIAEgKIF2rkQANgbA0gEQBHgmBWgbQAogPAlgQIAigNIAPgFQAHgDALAAIAGABIADABIADAAIABAAIAHABIAKADIACABIAGADIACABIACABIAKAFIAAAAIAPAIIACACIALAJIACABIAIAIIABABIAHAJQADAFAAAEIgBADIgCAFIAAABIgCACIgBAFIgCADIgCADIgDAHIgEAHIgGAMIgLAWIlaKsQgOAbg1AEQhGAlhVAbIg+AYIg2AXQgJADgMAAIgEAAg");
	var mask_1_graphics_39 = new cjs.Graphics().p("AlEHsIgGgBIgJgCIgKgDIgagKQgZgOgOgOQgKgLgCgJIgBgCIAEgKIF7rvQANgbA1gGQBHgoBXgcQApgQAlgSIAigNIAPgGQAIgDALAAIAFABIAEAAIACABIABAAIAIABIAKADIACABIAGACIACABIACACIAKAEIABABIAPAIIACACIALAJIACABIAIAIIABABQAFAFACAEQADAFAAAEIgBAEIgCAEIAAACIgCACIgCAEIgCAEIgBADIgEAHIgDAHIgGANIgLAWIlgK2QgOAcg1AEQhGAohXAcIg+AbQgdAMgaAMQgJAEgMAAIgEgBg");
	var mask_1_graphics_40 = new cjs.Graphics().p("AlHH3IgGgBIgKgCIgKgDQgNgEgOgGQgZgOgNgPQgMgLgBgIIgBgDIAEgKIGBr6QAOgcA0gHQBIgqBXgfQApgQAngTIAhgOIAQgGQAHgEALAAIAGABIADAAIADABIABAAIAHABIABAAIAJADIADABIAGACIADACIACABIAJAFIABAAIAQAJIACABIALAJIABACIAJAIIABAAIAHAKQADAFAAAEIAAAEIgDAFIAAABIgCACIgBAFIgCAEIgCACIgEAHIgDAIIgGANIgLAWIlmLBQgOAcg1AFQhHAqhXAfQggANgeAPIg4AaQgIAEgOAAIgDgBg");
	var mask_1_graphics_41 = new cjs.Graphics().p("AlRIBIgJgCIgLgCQgNgFgNgGQgagOgOgPQgLgMgCgIIgBgCQABgGADgEIGGsGQAPgcA0gIQBJgsBYgiQApgRAmgUIAigPIAQgGQAIgEALgBIAGABIADAAIADABIABAAIAIABIAKADIACABIAHACIACACIACABIAKAFIABAAIAPAJIACABIAMAJIACACIAIAIIABABQAFAGADAEQACAFAAAFIAAADIgCAFIgBACIgBACIgCAEIgCAFIgCACIgDAHIgEAIIgGAMIgMAYIlqLKQgPAdg1AGQhIAshXAhIg/AeQgdAOgbANQgKAEgQABIgGgCg");
	var mask_1_graphics_42 = new cjs.Graphics().p("AlOINIgGgBIgKgCIgLgDIgbgKQgagOgOgQQgLgLgCgJIgBgCQABgGADgFIGMsRQAOgdA1gIQBJguBZgkQAqgTAmgUIAigQIAQgHQAIgEALAAIAGAAIAEAAIACABIACAAIAHABIABAAIAKADIACABIAHACIACACIACABIAKAFIABAAIAQAJIACACIAMAJIABACIAJAIIABABIAIAKQACAFAAAEIAAAEIgCAFIgBABIgBADIgCAEIgDAFIgBACIgEAHIgEAIIgGANIgLAYIlwLVQgPAdg1AIQhIAuhYAiQghAQgfAQIg4AdQgJAEgOAAIgDAAg");
	var mask_1_graphics_43 = new cjs.Graphics().p("AlSIYIgGgBIgKgCIgLgDQgOgEgNgGQgbgPgOgPQgMgMgBgJIgBgCQABgGADgFIGRscQAPgeA1gJQBKgwBZgmQAqgUAngWIAigRIARgHQAHgEAMAAIAGAAIADABIADAAIABAAIAIABIALADIACABIAHACIACACIADABIAKAFIABAAIAPAJIACACIAMAJIACACIAJAJIABAAIAIALQACAFAAAEIAAAEIgCAFIgBACIgBACIgDAFIgCAEIgBACIgEAIIgEAIIgGANIgMAYIl1LfQgPAeg1AJQhJAwhZAlQghAQgfARQgdAPgbAPQgJAFgPAAIgDAAg");
	var mask_1_graphics_44 = new cjs.Graphics().p("AlVIjIgHgBIgKgCIgLgDQgOgEgOgHQgbgOgOgQQgMgMgBgJIgBgCQABgFADgGIATgoIgBAAIGFr/QAPgfA1gKQBLgyBZgoQArgVAngXIAigSIARgIQAHgEAMAAIAGAAIAEABIADAAIABAAIAIABIAAAAIALADIACABIAHADIACABIADABIAKAFIABABIAQAJIACABIAMAKIACACIAJAIIABABQAFAFADAFQACAGAAAEIAAAEIgDAFIAAACIgCADIgCAEIgCAEIgBADIgEAHIgEAIIgGAOIgMAYIl6LqQgQAfg1AJQhKAyhZAnQgiARgeASQgfAQgbAQQgJAFgOAAIgDAAg");
	var mask_1_graphics_45 = new cjs.Graphics().p("AlgItIgKgCIgLgDQgOgEgOgHQgcgOgPgQQgLgMgBgKIgBgCIADgLIGdsyQAQggA1gLQBLg0BagqQArgWAngYIAjgTIARgIQAIgEAMgBIAGAAIADABIADAAIACAAIAIABIALADIACABIAHADIACABIADABIAKAFIABABIARAJIACACQAHAEAFAFIACACIAIAJIACABIAIAKQACAGAAAEIgBAFIgCAFIAAABIgCADIgCAEIgCAFIgCACIgDAIIgEAIIgHAOIgMAYIl/L0QgQAgg1AKQhLA0haApQghASgfATQgfARgbARQgKAFgRAAIgHgBg");
	var mask_1_graphics_46 = new cjs.Graphics().p("AljI4IgLgCIgLgDQgPgEgOgHQgcgOgPgRQgLgMgCgKIAAgCIADgLIGjs9QAQghA1gMQBMg2BagsQArgXAogZIAkgUIAQgJQAIgEAMgBIAGAAIAEABIADAAIABAAIAIABIABAAIALADIACABIAHADIACABIADABIALAFIABABIAQAJIACACIANAKIABACQAGAEADAFIACAAQAFAGACAFQADAGAAAEIgBAFIgCAFIAAABIgCADIgCAFIgCAEIgCADIgEAIIgEAIIgGAOIgMAYImFL/QgQAgg2ALQhLA2haAsQgiASgfAUQgfARgbASQgLAGgRAAIgGgBg");
	var mask_1_graphics_47 = new cjs.Graphics().p("AlnJDIgKgCIgLgDQgPgEgPgHQgcgOgPgRQgMgNgBgKIgBgCQABgFADgGIGotIQAQgiA2gNQBMg4BbguQArgYAogaIAkgVIARgJQAIgFAMgBIAGABIAEAAIADAAIABAAIAJABIALADIADABIAHADIACABIADACIALAFIAAAAIARAKIACABIANAKIACACIAJAJIABABQAFAGADAFQADAFgBAFIAAAFIgCAFIgBACIgBACIgDAFIgCAFIgCACIgDAIIgEAIIgHAPIgMAYImKMJQgRAhg1AMQhMA4hbAuQgiATggAVIg6AlQgLAGgRAAIgHgBg");
	var mask_1_graphics_48 = new cjs.Graphics().p("AlqJOIgLgCIgLgDQgQgEgOgHQgdgPgPgRQgMgNgBgJIgBgCQABgGADgGIAUgqIgBAAIGasqQARgiA1gNQBNg7BcgwQAsgZAogcIAkgVIARgKQAIgFAMAAIAHAAIAEAAIADAAIABAAIAJABIALADIADABIAHADIACABIADACIALAFIABAAIARAKIACACQAHAEAGAGIACACIAJAJIABABQAFAGADAFQADAFgBAFIAAAFIgCAFIgBACIgBADIgDAEIgCAFIgCADIgEAIIgEAIIgGAOIgNAaImPMTQgRAig1AMQhNA7hbAvQgjAVgfAVQgfATgcATQgLAGgSABIgGgBg");
	var mask_1_graphics_49 = new cjs.Graphics().p("AluJZIgLgCIgLgDQgQgEgPgHQgdgPgPgRQgMgNgCgKIAAgCQABgHACgFIG0tfQARgjA1gPQBOg8BcgyQAsgbApgcIAkgXIARgKQAIgEANgCIAGAAIAEABIADAAIABAAIAJABIABAAIALADIADABIAHACIACACIADACIALAEIABABIARAKIADABIAMALIACACIAJAJIACABQAFAGADAFQADAGgBAFIAAAFIgCAFIgBACIgCACIgCAGIgCAEIgCADIgEAIIgEAIIgHAPIgNAaImTMdQgSAig2AOQhNA9hcAxQgiAVggAXIg8AnQgKAHgSABIgHgBg");
	var mask_1_graphics_50 = new cjs.Graphics().p("AlyJkIgLgCIgLgDQgQgEgPgHQgegPgPgSQgMgNgCgKIAAgCQABgHACgFIG5trQASgiA1gRQBPg+Bcg0QAtgcApgdIAkgXIARgLQAIgFANgBIAHAAIAEAAIADAAIABAAIAJABIAMADIADABIAHADIACABIADABIAMAGIABABIARAKIACABIANAKIACACIAJAKIACABIAIALQADAGgBAFIAAAFIgCAFIgBACIgCADIgCAFIgCAFIgCACIgEAIIgEAJIgHAPIgNAaImZMnQgSAkg2APQhOA9hcA1QgjAVggAYQggAUgcAVQgLAHgSABIgHgBg");
	var mask_1_graphics_51 = new cjs.Graphics().p("Al1JuIgMgBIgLgDQgQgEgQgHQgdgQgQgSQgMgNgCgLIgBgBQABgHADgFIAVgsIAAAAIGqtKQASgkA1gQQBPhBBeg3QAsgcAqgfIAkgYIASgLQAIgFANgBIAHAAIADAAIADAAIACAAIAJABIAAAAIAMADIADABIAHADIADABIADACIALAFIABAAIASAKIACACQAHAFAGAGIACACIAJAJIACABIAIAMQADAGgBAFIAAAFIgCAFIgBACIgCADIgCAFIgCAFIgCADIgEAIIgFAJIgGAPIgOAaImeMyQgSAkg2APQhOBBhdA2QgjAXghAXQggAWgcAWQgLAHgSAAIgHgBg");
	var mask_1_graphics_52 = new cjs.Graphics().p("Al5J5IgLgBIgNgDQgPgEgQgIQgegPgQgTQgMgNgCgLIgBgBQABgHAEgFIHDuBQATglA1gRQBQhDBeg5QAtgeAqgfIAlgZIARgLQAIgGANgBIAHAAIAEAAIADAAIABAAIAKABIAMADIADABIAIADIACABIADACIALAFIACAAIASALIACABIANALIACACIAKAKIABABQAFAGADAGQACAGABAEIgBAGIgCAFIAAACIgDADIgCAFIgCAFIgCADIgEAIIgEAJIgHAPIgOAbImjM8QgTAlg2AQQhPBDheA4IhEAwQggAXgdAWQgKAHgTABIgHgBg");
	var mask_1_graphics_53 = new cjs.Graphics().p("Al8KEIgNgBIgLgDQgQgEgRgIQgegPgQgTQgNgOgBgKIAAgCQABgHACgFIHKuMQASgmA3gSQBQhFBeg7QAtgfAqggIAlgaIASgMQAIgGAOgBIAHAAIAEAAIADAAIABAAIAJABIABAAIAMADIADABIAIADIACABIADACIAMAFIABABIASAKIACACQAIAFAGAFIACACIAKALIAAABQAGAGADAFQACAGAAAFIAAAGIgDAGIAAABIgBADIgDAGIgDAFIgBACIgEAJIgFAJIgHAPIgNAbImpNHQgTAlg2ASQhQBEheA6QgjAZgiAZQgfAXgdAYQgLAHgUABIgGgBg");
	var mask_1_graphics_54 = new cjs.Graphics().p("AmAKQIgMgCIgMgDQgQgEgRgIQgegPgRgUQgMgNgCgLIgBgCQABgGADgGIHPuXQAUgnA2gTQBRhGBeg9QAughAqghIAmgbIASgMQAIgGANgCIAIAAIADAAIAEAAIABAAIAKABIAMADIADACIAIACIACABIAEACIALAFIABABIATAKIACACIAOALIACACIAJAKIACABQAFAHADAFQADAGAAAGIgBAFIgCAGIgBACIgCADIgCAFIgCAFIgCADIgEAJIgFAJIgHAQIgOAbImtNQQgUAng2ASQhQBGhfA9QgkAZghAbQggAXgeAYQgLAJgTAAIgHAAg");
	var mask_1_graphics_55 = new cjs.Graphics().p("AmEKbIgMgCIgMgDQgRgEgQgIQgfgQgRgTQgMgNgCgMIgBgCQABgGADgGIAWguIAAAAIG/t1QATgnA2gTQBShKBgg+QAugiAqgiIAmgcIASgMQAIgHAOgBIAHgBIAEABIADAAIACAAIAJAAIABAAIAMADIADABIAIADIADACIADABIAMAGIABAAIASALIADABIANALIACACQAGAGAEAFIACABQAFAHADAFQADAHAAAEIgBAGIgCAHIgBABIgCADIgCAGIgDAEIgBAEIgFAIIgEAKIgHAPIgOAcImzNbQgUAng2ATQhRBIhfA/QgkAagiAbQggAZgeAZQgLAIgUABIgHAAg");
	var mask_1_graphics_56 = new cjs.Graphics().p("AmIKlIgMgBIgMgDQgRgEgRgIQgfgQgRgUQgNgOgBgLIgBgCQABgGADgHIHautQAUgoA2gVQBThLBghBQAugiArgkIAmgdIASgMQAIgHAOgCIAIAAIADAAIAEABIABAAIAKAAIABAAIAMADIADABIAIADIADABIADACIAMAGIABAAIATALIACACIAOALIACACIAKAKIABACQAGAGADAGQADAGAAAFIgBAGIgCAGIgBACIgCADIgCAGIgDAFIgCADIgEAIIgFAKIgHAQIgOAcIm4NlQgUAog2AUQhSBKhgBBIhGA3QghAagdAZQgLAJgUABIgIgBg");
	var mask_1_graphics_57 = new cjs.Graphics().p("AmLKwIgNgBIgMgDQgRgEgRgIQgggQgRgUQgNgOgBgMIgBgCQABgGADgHIHgu4QAUgpA2gWQBThNBhhDQAugjAsglIAmgeIASgNQAIgHAPgCIAHAAIAEAAIADABIACAAIAKAAIANADIADABIAIADIADACIADABIAMAGIABAAIATALIADACQAIAFAGAGIACACIAKALIABABQAGAHADAGQADAGAAAFIgBAGIgCAGIgBACIgCADIgCAGIgDAFIgCADIgEAJIgFAKIgHAQIgOAcIm+NwQgUAog3AVQhSBNhgBCQglAcgiAdQghAageAbQgLAJgUABIgHgBg");
	var mask_1_graphics_58 = new cjs.Graphics().p("AmPK7IgNgBIgMgDQgRgEgRgIQghgQgRgVQgNgOgBgMIgBgCQABgGADgHIHlvDQAVgpA2gXQBUhQBihFQAugkAsgmIAngfIASgNQAIgHAOgCIAIgBIAEABIADAAIABAAIALAAIAAAAIANADIADABIAIADIADACIAEABIAMAGIABAAIATALIADACIAOAMIACACIAKALIACABQAFAHADAGQADAGAAAFIgBAHIgCAGIAAABIgDAEIgDAFIgCAGIgCADIgEAJIgFAJIgHAQIgPAdInCN6QgVApg2AWQhTBPhhBFQglAdgiAdQgiAbgdAcQgMAIgVACIgHgBg");
	var mask_1_graphics_59 = new cjs.Graphics().p("AmSLGIgOgBIgMgDQgSgEgRgIQghgQgRgVQgNgPgCgMIAAgBQABgHADgHIAXgwIAAAAIHUueQAVgqA2gYQBVhRBihIQAvglAsgnIAmggIASgOQAJgHAPgCIAIgBIAEABIADAAIABAAIALAAIANADIAEACIAHACIADACIADABIANAGIACABIATALIACACQAIAFAHAGIACACIAKALIABACQAGAGADAGQADAHAAAFIgBAHIgDAGIAAACIgCADIgCAGIgDAFIgCADIgEAJIgFAKIgIAQIgOAdInIOFQgVAqg3AWQhTBRhiBHQgkAegkAeQggAcgfAcQgLAJgVACIgHgBg");
	var mask_1_graphics_60 = new cjs.Graphics().p("AmXLRIgMgCIgNgCQgSgFgRgHQghgRgSgVQgNgOgCgNIAAgCQABgGADgHIHxvaQAVgrA2gYQBVhUBjhKQAvgmAsgoIAnggIATgPQAJgHAOgDIAIAAIAEAAIAEAAIABAAIAKABIABAAIANADIAEACIAIACIACABIAEACIANAGIABAAIATAMIADABIAOANIACABIALAMIABABQAGAHADAGQADAGAAAGIgBAHIgCAGIgBACIgCADIgCAGIgDAFIgCAEIgFAJIgFAKIgHAQIgPAdInMOOQgWArg3AYQhUBThiBJQglAfgjAfQgiAcgeAdQgLAKgWABIgIAAg");
	var mask_1_graphics_61 = new cjs.Graphics().p("AmaLcIgNgCIgNgCQgSgFgSgHQghgRgSgWQgNgPgBgMIgBgCQABgGADgHIH2vlQAWgrA3gbQBVhUBjhNQAwgnAsgpIAogiIASgOQAJgIAPgCIAIAAIAEAAIADAAIACAAIALAAIANADIAEABIAIADIADACIADACIANAFIABABIAUALIADACQAIAFAGAHIADACIAKAMIABAAQAGAIADAGQADAGAAAGIgBAHIgCAGIgBACIgCAEIgCAFIgDAFIgCADIgFAKIgEAKIgIARIgPAeInSOYQgWAsg3AZQhVBUhiBMQgmAfgjAgQghAdgfAeQgMAKgVABIgIAAg");
	var mask_1_graphics_62 = new cjs.Graphics().p("AmeLnIgNgCIgNgCQgSgFgSgHQgigSgSgVQgNgPgBgNIgBgBQABgIADgGIAYgyIgBAAIHlu+QAWgsA2gbQBXhXBjhPQAwgoAtgqIAogjIASgPQAJgIAPgCIAIgBIAEAAIAEABIABAAIALAAIABAAIANADIAEACIAIACIADABIADACIANAGIACABIAUALIADADQAIAFAGAGIACACIALAMIABACQAGAGADAGQADAIAAAFIgBAHIgCAGIgBACIgCAEIgDAFIgCAGIgCADIgFAJIgFAKIgIARIgPAfInXOiQgWAtg3AaQhWBWhjBNQglAhgkAhQgiAegfAfQgLAJgWACIgIAAg");
	var mask_1_graphics_63 = new cjs.Graphics().p("AmhLyIgOgCIgNgCQgSgFgSgHQgjgSgSgWQgNgPgCgNIAAgBQABgIADgGIAYgyIgBAAIHqvKQAXgtA2gbQBXhZBkhRQAxgpAtgrIAogjIATgRQAIgHAQgDIAIAAIAEAAIAEAAIABAAIALAAIABAAIANADIAEABIAIAEIADABIAEABIANAHIABAAIAUAMIADABIAPANIACACIALALIABACQAGAHADAHQADAGAAAGIgBAHIgCAHIgBABIgCAEIgDAGIgCAGIgCADIgFAJIgFAKIgIARIgPAfIncOtQgXAtg3AaQhWBahkBPQgmAhgkAiQgiAfgfAfQgLALgWABIgIAAg");
	var mask_1_graphics_64 = new cjs.Graphics().p("AmlL9IgOgCIgNgCQgSgFgTgHQgigSgTgWQgNgPgCgOIAAgBQAAgHAEgHIIGwGQAXgvA3gcQBYhcBkhSQAxgqAugtIAogkIATgQQAJgIAPgDIAIgBIAEABIAEAAIABAAIAMAAIAAAAIAOAEIAEABIAIACIADACIAEACIANAFIABABIAVAMIADACIAPAMIACACQAGAGAFAHIABABQAGAGADAHQADAIAAAFIgBAHIgCAGIgBADIgCADIgDAGIgDAGIgCADIgEAKIgFAKIgIASIgQAeInhO3QgXAug3AbQhXBchkBRQgmAiglAjQgiAggfAgQgMAKgWACIgIAAg");
	var mask_1_graphics_65 = new cjs.Graphics().p("AmoMIIgOgCIgOgCQgSgFgTgIQgjgRgSgXQgOgPgBgNIgBgCQABgHADgHIIMwSQAYgvA3gdQBYhdBlhVQAxgsAugtIAoglIATgRQAJgIAQgDIAIAAIAEAAIAEAAIACAAIALAAIABAAIAOADIADABIAJADIADACIADABIAOAGIABABIAVAMIADACQAIAGAHAGIACADIALAMIABABQAGAHAEAHQADAHgBAGIAAAHIgDAHIAAABIgDAEIgCAGIgDAGIgCADIgFAKIgFAKIgIASIgQAfInmPCQgYAug3AdQhYBdhkBTQgnAjgkAkQgiAgggAhQgMALgWACIgIAAg");
	var mask_1_graphics_66 = new cjs.Graphics().p("AmsMTIgOgCIgOgCQgSgFgTgIQgkgRgSgXQgOgQgCgNIAAgCQABgHADgHIAZg1IgBAAIH6voQAYgwA3geQBZhfBlhXQAygtAuguIAogmIAUgRQAIgJAQgDIAJAAIAEAAIAEAAIABAAIAMAAIAPADIADABIAJADIADACIAEACIANAGIACAAIAVAMIADACIAPANIACACQAGAGAFAGIABACQAGAHAEAHQADAHgBAGIAAAHIgDAHIAAACIgDADIgDAGIgCAGIgCAEIgFAJIgFALIgJASIgPAfInsPMQgYAwg3AdQhYBfhmBWQgmAjglAlQgiAhggAiQgMALgXACIgIAAg");
	var mask_1_graphics_67 = new cjs.Graphics().p("AmwMeIgOgCIgOgCQgTgFgTgIQgjgSgTgXQgOgQgCgNIAAgCQAAgHAEgHIIXwoQAYgwA4ggQBZhhBmhZQAyguAvgvIApgnIATgSQAJgJAQgCIAIgBIAFAAIADAAIACAAIAMAAIAAAAIAOADIAEACIAJACIADACIAEACIAOAGIABAAIAVANIADACQAJAGAGAGIADADQAGAGAFAGIABABQAGAIADAHQAEAHgBAGIAAAHIgDAHIgBACIgCAEIgDAGIgDAGIgCADIgEAKIgGALIgIASIgQAfInxPXQgYAwg3AeQhZBhhmBYQgnAkglAmQgiAighAiQgMAMgWACIgJAAg");
	var mask_1_graphics_68 = new cjs.Graphics().p("Am0MpIgNgBIgOgDQgUgEgTgJQgkgRgTgYQgOgQgBgOIgBgCQABgHADgHIIdwzQAZgxA3ggQBahkBnhbQAxgvAwgxIApgnIATgSQAJgJAQgDIAJgBIAFABIADgBIABAAIANABIAOADIAFABIAJACIADADIADABIAOAGIABABIAWAMIADACIAPANIADADIALAMIABABQAHAIACAGQADAIAAAGIAAAHIgDAHIAAACIgCAEIgEAGIgDAGIgBAEIgGAKIgEALIgJASIgQAfIn2PiQgYAwg4AfQhaBjhmBbIhNBLQgiAjghAkQgMALgXACIgJAAg");
	var mask_1_graphics_69 = new cjs.Graphics().p("Am3M0IgPgBIgOgDQgTgEgUgJQgkgSgTgYQgPgQgBgOIgBgCQACgHADgHIIiw/QAZgxA3ghQBchmBnhdQAygwAwgyIApgpIAUgSQAIgJARgDIAIgBIAFAAIAEAAIABAAIANAAIAAAAIAOADIAFACIAJADIACABIAFACIANAGIACABIAWAMIACACQAJAGAHAHIACADIAMAMIABACQAGAHAEAHQADAIAAAGIgBAHIgDAHIgBACIgCAEIgCAGIgDAHIgDADIgEAKIgGALIgJASIgQAhIn7PrQgYAxg5AgQhaBlhmBcQgoAnglAnQgkAjggAlQgMALgXADIgJAAg");
	var mask_1_graphics_70 = new cjs.Graphics().p("Am7M/IgOgBIgOgDQgVgEgTgJQglgSgTgYQgOgRgCgOIgBgBQABgIAEgHIAag3IgBAAIIPwTQAZgyA3giQBchoBohfQAygxAwgzIAqgqIAUgSQAIgKARgDIAJgBIAEAAIAFAAIABAAIAMAAIAQADIADACIAJADIAEABIAEACIAOAGIABABIAWANIADACQAJAGAHAHIADACQAGAGAFAHIABABQAHAIADAHQACAHAAAHIAAAIIgDAHIAAACIgDADIgDAHIgDAGIgCADIgFALIgFALIgJASIgQAhIoAP1QgZAzg4AgQhcBnhnBfQgnAngmAoQgkAkggAlQgNAMgXADIgJAAg");
	var mask_1_graphics_71 = new cjs.Graphics().p("Am+NKIgPgBIgPgDQgUgEgTgJQglgTgUgYQgPgRgBgOIAAgBQAAgIADgHIIuxVQAagzA3gjQBdhqBohhQAzgzAwgzIAqgrIATgTQAKgKARgDIAJgBIAEAAIAEAAIABAAIANAAIAAAAIAPADIAFACIAJADIADABIADACIAPAGIABABIAXANIADACIAQANIACADQAHAGAEAHIACABQAGAIADAHQAEAHAAAHIgBAIIgDAHIgBACIgCAEIgDAGIgDAGIgCAEIgFAKIgFALIgKATIgQAhIoFQAQgZAzg4AhQhdBqhnBgQgoAogmApQgkAlggAmQgNAMgXADIgJAAg");
	var mask_1_graphics_72 = new cjs.Graphics().p("AnCNVIgPgBIgOgDQgUgEgVgJQglgTgUgYQgOgRgCgPIgBgBQABgIAEgHIIzxgQAag0A4gkQBdhsBphjQAzg0Awg0IAqgsIAUgTQAJgKARgEIAJgBIAFAAIAEAAIABAAIANABIABAAIAPADIAEABIAJADIADABIAEACIAPAHIABAAIAXANIADACQAJAHAHAHIACACQAHAGAFAHIABACQAGAIAEAHQADAHAAAHIgBAIIgDAHIAAACIgDAEIgDAGIgDAHIgCADIgFALIgGALIgIATIgRAhIoLQKQgZA0g5AjQhcBrhoBiIhPBTQgjAmgiAmQgMANgYADIgJAAg");
	var mask_1_graphics_73 = new cjs.Graphics().p("AnGNgIgPgBIgOgDQgVgEgUgJQgmgTgUgZQgPgRgBgOIgBgCQABgIAEgHIAag5IAAAAIIfwyQAZg1A5glQBdhuBqhlQAzg1Axg2IAqgsIAUgUQAKgKARgDIAJgCIAEABIAFgBIABAAIANABIAAAAIAQADIAEABIAJADIADABIAEACIAPAHIACAAIAWANIADADQAJAGAHAHIADADQAHAGAFAHIABABQAGAIAEAIQADAHAAAHIgBAIIgDAHIgBACIgCAEIgDAHIgDAGIgCAEIgFAKIgGAMIgJATIgRAhIoPQVQgaA0g5AkQhdBthpBlQgoApgmAqQgkAogiAnQgMANgZADIgJAAg");
	var mask_1_graphics_74 = new cjs.Graphics().p("AnKNrIgOgBIgPgDQgVgEgVgKQgmgSgUgZQgPgSgBgOIgBgCQABgIAEgIIAag4IAAAAIIkw+QAag1A5gmQBehwBqhnQA0g2Axg3IAqgtIAUgVQAKgKARgDIAJgBIAFAAIAEgBIACAAIANABIAAAAIAQADIAEABIAJADIADACIAEABIAPAHIACABQAMAGALAHIADACQAJAGAHAIIADACQAGAGAGAIIABABQAGAIAEAHQADAIAAAHIgBAIIgDAHIgBACIgCAEIgDAHIgDAHIgCADIgFALIgGALIgJAUIgRAiIoVQeQgaA1g5AlQheBvhpBnQgpAqgmArQgkAogiAoQgNAOgYADIgKAAg");
	var mask_1_graphics_75 = new cjs.Graphics().p("AnNN2IgPgBIgPgDQgVgEgVgKQgngSgUgaQgPgRgBgPIgBgCQABgIADgIIJFyBQAag2A5gmQBfhzBqhpQA0g3Axg4IArguIAVgVQAJgKASgEIAJgBIAEAAIAFAAIABAAIAOAAIAQADIAEABIAJADIAEACIAEABIAPAHIABABIAXANIAEACQAJAHAHAHIADADQAGAGAFAHIACACQAGAIAEAHQADAIAAAHIgBAIIgDAIIgBACIgCAEIgDAGIgDAHIgDAEIgFAKIgFAMIgJATIgSAjIoaQpQgaA2g5AlQheBxhrBpIhPBXQglApgiApQgMANgZAEIgJAAg");
	var mask_1_graphics_76 = new cjs.Graphics().p("AnROBIgPgBIgQgDQgUgEgWgKQgngTgUgZQgPgSgBgPIgBgCQABgIADgIIJKyMQAbg3A5gnQBfh0BrhtQA1g3Ayg5IAqgvIAVgWQAKgKARgEIAKgBIAEAAIAFAAIABAAIANAAIABAAIAPADIAFABIAKADIADACIAEACIAPAGIACABIAXANIADADIARANIADADQAHAHAFAHIABABQAGAIAEAIQADAIAAAHIgBAIIgDAIIgBACIgCAEIgDAHIgEAGIgBAEIgGALIgFAMIgJATIgSAjIogQzQgaA3g5AmQhfBzhrBsIhQBYQglAqghAqQgNANgaAEIgJAAg");
	var mask_1_graphics_77 = new cjs.Graphics().p("AnUOMIgQgBIgQgDQgUgEgWgKQgngTgVgaQgPgSgCgPIAAgBQAAgJAFgIIAbg6IAAAAIIzxdQAcg4A5goQBgh2BrhvQA2g4Axg6IAsgwIAUgWQAKgLARgEIAKgBIAFAAIAEAAIABAAIAPAAIAQADIAEABIAJADIAEACIAEACIAQAGIABABIAYAOIADACQAJAGAIAIIACADIAMANIACACQAGAIAEAIQADAIAAAHIgBAIIgDAIIgBACIgCAEIgDAHIgEAHIgCAEIgFAKIgGAMIgJAUIgSAjIokQ+QgbA3g5AnQhgB2hrBtQgqAtgnAtQglArgiAqQgNAOgZAEIgJAAg");
	var mask_1_graphics_78 = new cjs.Graphics().p("AnZOXIgPgBIgPgDQgWgEgWgKQgngTgVgaQgPgSgBgQIgBgCQABgIADgIIAcg6IgBAAII6xpQAcg4A5gpQBgh5BthwQA1g6Ayg7IAsgxIAUgWQAKgLASgEIAJgBIAGAAIAEAAIABAAIAOAAIAAAAIARACIAEACIAJADIAEACIAEABIAQAHIABABIAZANIACADQAKAHAHAHIADADQAHAGAGAIIABABQAGAJADAHQAEAJAAAHIgBAIIgDAIIAAACIgDAEIgEAHIgCAHIgDAEIgFALIgGAMIgKAUIgRAjIoqRIQgbA4g6AoQhfB3hsBwQgqAugnAuQgmArgiAsQgNAOgaAEIgKAAg");
	var mask_1_graphics_79 = new cjs.Graphics().p("AncOiIgPgBIgQgDQgWgEgWgKQgogUgVgaQgPgSgBgQIgBgBQABgJADgIIJbyuQAbg5A6gqQBhh7BthyQA1g7Azg8IAsgyIAVgXQAJgLATgDIAJgCIAFAAIAFgBIABAAIAOAAIABAAIAQAEIAEABIAKADIADACIAFACIAPAGIACABIAYAOIADACQAKAHAHAIIADACQAHAHAFAIIACABQAGAIAEAJQADAHAAAHIgBAJIgDAIIAAACIgDAFIgDAHIgEAGIgCAFIgFAKIgGAMIgKAVIgRAkIovRSQgcA4g5ApQhhB6htByIhRBdQglAsgjAsQgNAPgaAEIgKAAg");
	var mask_1_graphics_80 = new cjs.Graphics().p("AngOtIgPgBIgQgDQgWgEgWgKQgogTgWgbQgPgTgCgQIAAgBQAAgJAEgIIJgy5QAcg6A6grQBih8Bth1QA2g8Azg9IAsgzIAVgXQAKgMASgEIAKgBIAFAAIAEAAIACAAIAOAAIAAAAIARACIAEACIAKADIAEACIAEABIAQAIIABABQANAGAMAIIADACQAKAGAHAIIADADIAMAOIACACQAGAJAEAHQADAIAAAHIgBAKIgDAIIgBABIgCAFIgDAHIgEAGIgCAFIgFALIgGAMIgKAUIgSAkIo0RdQgcA6g6AqQhhB7htBzIhSBgIhJBaQgMAPgbAEIgKAAg");
	var mask_1_graphics_81 = new cjs.Graphics().p("AnzO2IgQgCQgWgFgXgJQgogUgWgbQgPgTgCgQIAAgBQAAgJAEgIIAdg9IgBAAIJKyHQAcg7A6gsQBjh/Bth2QA2g9A0g/IAsgzIAVgYQAKgLATgFIAJgBIAFAAIAFAAIABAAIAPAAIAAAAIARADIAEABIAKADIAEACIAEACIAQAGIACABIAYAOIAEADQAJAGAIAIIADADQAHAHAFAIIACABQAGAJAEAIQADAIAAAHIgBAJIgDAIIgBACIgCAFIgDAHIgEAHIgCAEIgGALIgGANIgJAUIgSAkIo6RnQgcA7g6AqQhiB+htB2QgrAwgoAxQgmAtgjAuQgNAPgaAEIgKAAIgQgBg");
	var mask_1_graphics_82 = new cjs.Graphics().p("An3PBIgQgCQgXgFgWgKQgpgTgWgcQgQgTgBgQIAAgBQAAgJAEgIIJrzQQAdg7A6gtQBjiABvh5QA2g/Azg/IAtg1IAVgXQAKgMATgFIAKgBIAFAAIAEAAIACAAIAOAAIABAAIARADIAEABIAKADIAEACIAEACIAQAHIACAAIAZAPIADACQAKAHAIAIIACACQAIAHAFAIIABACQAHAJAEAIQADAIAAAHIgBAJIgDAJIgBACIgCAEIgEAHIgDAHIgCAEIgGAMIgGAMIgKAVIgSAlIo+RxQgdA7g6ArQhjCAhuB4QgqAxgpAyQgmAugjAvQgNAPgbAEIgKAAIgQgBg");
	var mask_1_graphics_83 = new cjs.Graphics().p("An7PMIgQgCQgWgFgXgKQgqgUgVgbQgQgUgCgQIAAgBQABgJADgIIJxzbQAdg8A6guQBkiCBvh7QA3hAA0hAIAtg2IAVgYQAKgMATgEIAKgCIAFAAIAFAAIABAAIAPAAIAAAAIARADIAFABIAKADIAEACIAEACIAQAHIACABQANAGAMAIIADACQAKAHAIAIIADADQAHAHAFAIIACACQAHAIADAIQAEAJgBAHIAAAKIgEAIIAAACIgDAEIgDAIIgEAHIgCAEIgFALIgHANIgJAVIgTAlIpER7QgdA8g6AsQhjCChvB6IhTBlQgmAvgkAvQgNAQgbAEIgKAAIgRgBg");
	var mask_1_graphics_84 = new cjs.Graphics().p("An+PXIgRgCQgWgFgXgKQgqgUgWgcQgQgTgCgRIAAgBQAAgJAEgIIAeg/IgBAAIJaynQAdg9A6gvQBliEBvh9QA3hBA0hBIAug3IAVgYQAKgNATgEIAKgCIAFAAIAFAAIACAAIAPAAIARADIAFABIAKADIAEACIAEACIARAHIABABIAaAOIADADQAKAHAIAIIADACQAHAHAFAIIACACQAHAJADAIQAEAJgBAHIAAAKIgEAIIAAACIgDAFIgDAHIgEAHIgCAEIgGAMIgGANIgKAVIgTAlIpISGQgeA8g6AuQhkCDhvB9IhUBmQgmAwgkAwQgNAQgcAEIgKAAIgQgBg");
	var mask_1_graphics_85 = new cjs.Graphics().p("AoCPiIgRgCQgXgFgXgKQgqgUgWgcQgRgUgBgQIAAgCQAAgJAEgIIAeg/IgBAAIJfyyQAeg+A6gvQBliHBxiAQA3hBA0hCIAug4IAVgZQAKgMAUgFIAKgCIAFAAIAFAAIABAAIAPAAIABAAIARADIAFABIAKADIAEACIAEACIARAHIACABQANAHAMAIIAEACQAKAHAHAIIADADQAIAHAFAIIACACQAHAJADAIQADAJAAAHIAAAKIgEAIIAAACIgDAFIgDAHIgEAIIgCAEIgGALIgGANIgKAVIgTAmIpOSQQgeA9g6AvQhlCGhvB+QgsA0gpA0QgmAwglAxQgNAQgcAFIgKAAIgQgBg");
	var mask_1_graphics_86 = new cjs.Graphics().p("AoGPtQgJAAgIgCQgWgFgYgKQgrgUgWgdQgRgUgBgQIgBgCQABgJAFgIIKBz8QAeg/A6gwQBniJBwiCQA3hCA2hEIAtg4IAWgaQAKgMATgFIALgCIAEAAIAGAAIABAAIAQAAIAAAAIARADIAFABIAKADIAEACIAFACIAQAHIACABIAaAPIADACQALAHAHAJIAEACIAMAQIACACQAGAIAFAJQADAJAAAHIgBAKIgEAIIAAACIgDAFIgDAIIgEAHIgCAEIgGAMIgGANIgKAVIgUAmIpTSbQgeA+g6AvQhmCIhvCAQgsA1gqA1QgmAxgkAyQgOAQgcAFIgLAAIgQgBg");
	var mask_1_graphics_87 = new cjs.Graphics().p("AoKP4QgJAAgHgCQgYgFgXgKQgsgUgXgdQgQgUgBgRIgBgCQABgJAEgIIKI0IQAeg/A6gxQBniLBxiEQA4hDA1hFIAug5IAWgaQAKgNAUgFIAKgBIAFgBIAFAAIABAAIAQAAIABAAIARADIAFABIALAEIADABIAFACIARAHIACABQAOAHALAIIAEADQAKAHAIAIIADADQAHAHAGAIIACACQAGAJAEAJQADAJAAAHIgBAKIgCAJIgBACIgDAEIgEAIIgDAHIgDAFIgFALIgHAOIgJAVIgUAnIpYSkQgfA/g6AwQhmCKhxCCIhVBsQgnAyglAyQgNARgcAFIgLAAIgRgBg");
	var mask_1_graphics_88 = new cjs.Graphics().p("AoOQDIgRgCQgYgFgXgKQgsgVgWgdQgRgUgBgRIAAgBQAAgKAEgIIAfhBIgBAAIJvzSQAfhAA6gyQBniNBziGQA3hEA2hGIAug6IAWgbQALgNATgFIAKgBIAGAAIAFgBIABAAIAQAAIAAAAIASADIAFABIALAEIADABIAFACIARAHIACABIAaAPIADADQALAHAIAIIADADQAIAIAFAIIABACQAIAJADAJQADAIABAIIgBAKIgEAJIgBACIgCAFIgDAHIgEAIIgCAEIgHAMIgGANIgKAWIgUAnIpdSvQgfA/g6AxQhnCMhxCFIhXBtQgmAzglAzQgOARgdAFIgKAAIgRgBg");
	var mask_1_graphics_89 = new cjs.Graphics().p("AoRQOQgJAAgJgCQgYgFgYgKQgrgVgXgdQgRgVgBgRIgBgBQABgKAEgIIAfhBIgBAAIJ0zdQAghBA6gzQBoiPByiIQA4hFA2hHIAvg7IAXgbQAKgNATgFIALgCIAFAAIAGgBIABAAIAPAAIABAAIASADIAFABIAKAEIAFABIAEACIARAIIACABQAOAHAMAIIAFACQAJAHAJAJIACADQAIAHAGAJIACACQAGAJAEAIQAEAJgBAIIgBAKIgCAJIgBACIgDAFIgEAIIgDAHIgDAEIgFANIgHANIgKAWIgUAnIpiS5QggBAg6AyQhoCOhxCHQgtA3gqA4QgnA0gmA0QgNARgdAFIgKAAIgRgBg");
	var mask_1_graphics_90 = new cjs.Graphics().p("AoVQZQgJAAgJgCQgYgFgYgKQgsgVgXgeQgRgUgBgSIgBgBQABgKAEgIIKY0pQAghCA6g0QBpiRBziKQA4hHA3hHIAvg8IAWgcQAKgNAUgFIALgCIAFAAIAFgBIACAAIAQAAIAAAAIASADIAFACIALADIAEABIAFACIARAIIACABIAbAPIADADQAKAHAJAIIADADQAHAIAGAIIACACQAHAKADAIQAEAJAAAIIgBAKIgEAJIAAACIgDAFIgEAIIgDAIIgDAEIgGAMIgGAOIgLAWIgTAnIpoTEQggBBg6AyQhoCQhzCJQgsA4grA5QgnA0gmA1QgNASgdAFIgLAAIgRgBg");
	var mask_1_graphics_91 = new cjs.Graphics().p("AoZQkQgJAAgJgCQgYgFgYgKQgtgVgXgeQgRgVgBgSIgBgBQABgKAEgIIKd00QAhhDA6g1QBqiTBziMQA5hIA2hJIAwg9IAWgbQAKgOAVgFIAKgCIAGAAIAFgBIABAAIAQAAIABAAIASADIAFACIALADIAEACIAFACIARAHIACABIAbAPIAEADQAKAHAIAJIADADQAIAHAGAJIABACQAIAJADAJQAEAJAAAIIgBALIgEAIIAAADIgDAEIgEAIIgDAIIgDAEIgGANIgGANIgLAXIgUAnIptTOQggBCg6AzQhpCThzCLQgtA4grA6QgnA1gmA2QgOASgdAFIgLAAIgRgBg");
	var mask_1_graphics_92 = new cjs.Graphics().p("AodQvQgJAAgJgCQgYgFgZgKQgtgWgXgeQgRgVgBgSIgBgBQABgKAEgIIAfhDIAAAAIKEz9QAghDA7g1QBqiWB0iOQA5hJA3hKIAwg+IAWgcQALgOAUgFIALgCIAFAAIAFgBIACAAIAQAAIABAAIASADIAFACIALADIAEACIAFACIASAHIACABIAbAQIADACQALAIAIAIIADADQAIAIAGAJIABACQAIAJADAJQAEAJAAAIIgBALIgEAJIAAACIgDAFIgEAIIgEAHIgCAFIgGAMIgHAOIgKAWIgUApIpzTYQggBCg7A1QhpCUh0CNIhYB0QgnA2gmA2QgOASgeAGIgLAAIgRgBg");
	var mask_1_graphics_93 = new cjs.Graphics().p("AohQ6IgSgCQgYgFgZgLQgtgVgYgeQgRgVgBgTIgBgBQABgJAEgKIKo1KQAhhDA7g3QBriXB0iRQA6hKA3hLIAwg/IAWgdQALgOAVgFIAKgCIAGAAIAFAAIACAAIAQgBIABAAIASADIAFABIALAEIAEACIAFACIASAHIACABQAPAIAMAIIAEACQALAIAIAJIADACIAOARIABACQAIAKADAIQAEAKAAAIIgBAKIgEAJIAAADIgDAFIgEAIIgEAIIgCAEIgGANIgHANIgLAXIgUAoIp3TjQghBDg7A2QhqCWh0CPQgtA6grA7QgoA4gmA3QgOASgeAFIgLABIgSgBg");
	var mask_1_graphics_94 = new cjs.Graphics().p("AolRGIgSgDQgYgEgZgLQgugWgYgfQgRgVgCgSIAAgCQABgJAEgKIKu1VQAhhEA7g4QBriZB1iTQA6hLA4hMIAwhAIAXgdQAKgOAVgGIALgCIAGAAIAFAAIACAAIAQgBIABAAIASADIAFACIALADIAFACIAEACIASAHIADABQAOAIANAIIAEADQAKAHAJAJIADADQAIAIAGAJIABACQAHAJAFAKQADAJAAAIIgBALIgEAJIgBACIgCAFIgEAIIgEAIIgCAFIgGAMIgHAOIgLAXIgVApIp8TsQghBEg6A3QhsCYh0CSQguA7grA8QgpA4glA4QgOASgeAFIgMABIgJAAIgJAAg");
	var mask_1_graphics_95 = new cjs.Graphics().p("AooRRIgSgDQgZgEgagLQgugWgYgfQgRgWgCgSIAAgBQABgKAEgKIAghEIgBAAIKV0cQAhhFA7g5QBsibB2iVQA6hMA4hNIAwhBIAXgdQALgPAUgFIAMgDIAFAAIAGAAIABAAIARgBIABAAIASADIAFACIAMADIAEACIAFACIASAIIACABQAPAHAMAJIAFACQAKAIAJAJIADADIAOARIACACQAGAJAFAJQADAKAAAIIgBALIgDAJIgBACIgDAGIgEAIIgEAIIgDAEIgFANIgHAOIgLAXIgVApIqCT3QghBFg7A3QhsCah0CUIhaB5QgpA4gmA5QgOATgfAFIgKABIgJAAIgJAAg");
	var mask_1_graphics_96 = new cjs.Graphics().p("AotRcIgSgDQgZgEgZgLQgvgWgYggQgRgWgBgSIgBgBQAAgKAEgKIAhhFIAAAAIKZ0mQAihGA7g6QBtidB2iXQA6hNA4hPIAxhBIAXgeQALgOAVgGIALgCIAFgBIAGAAIABAAIARgBIABAAIATADIAFACIAMADIAEACIAFACIASAIIACABQAPAHANAJIAEACQALAIAIAJIADADQAJAIAFAJIACACQAHAKAEAJQAEAKAAAIIgBALIgEAJIgBADIgCAFIgEAIIgEAIIgCAFIgHAMIgHAOIgLAYIgUApIqHUBQgjBGg6A4QhsCdh2CVIhaB7QgoA5gnA6QgOATgfAFIgLABIgJAAIgKAAg");
	var mask_1_graphics_97 = new cjs.Graphics().p("AowRnIgSgDQgagEgagMQgugWgZgfQgRgWgCgTIAAgBQAAgKAFgKIK/13QAihGA7g7QBuifB2iZQA7hPA5hPIAwhCIAXgeQALgPAWgGIALgCIAFgBIAGAAIABAAIASgBIAAAAIATADIAFACIAMADIAEACIAFACIATAIIACABIAcAQIAEADQALAIAJAJIADADQAIAIAGAJIABACQAIAKAEAJQADAKAAAIIgBALIgEAKIAAACIgDAFIgEAIIgEAIIgCAFIgHANIgHAOIgLAYIgVAqIqMULQgiBGg7A5QhtCfh2CXIhbB9QgoA6gnA6QgOAUgfAFIgMABIgJAAIgJAAg");
	var mask_1_graphics_98 = new cjs.Graphics().p("Ao0RxIgSgCQgagFgagLQgvgWgZggQgSgWgBgTIAAgBQAAgKAFgKILE2CQAjhHA7g8QBuiiB3iaQA8hQA4hQIAxhDIAYgfQAKgPAWgGIALgCIAGgBIAFAAIACAAIARAAIABAAIATADIAFABIAMADIAEACIAGACIASAIIACABQAPAIAOAJIAEACQAKAIAJAJIADADQAIAIAHAJIABACQAIAKAEAJQADAKAAAJIgBALIgEAKIAAACIgDAFIgEAJIgEAHIgDAFIgGANIgHAPIgLAYIgVApIqRUWQgjBHg7A6QhuChh2CZQgvA/gsA/QgpA8gnA6QgPAUgfAGIgLAAIgKABIgJgBg");
	var mask_1_graphics_99 = new cjs.Graphics().p("Ao4R8IgTgCQgZgFgbgLQgvgWgZghQgSgWgBgTIAAgBQAAgLAFgJIAhhHIgBAAIKp1GQAkhJA7g7QBvikB4idQA7hRA5hRIAyhFIAXgeQALgQAVgGIAMgDIAGAAIAFgBIACAAIARAAIABAAIATADIAFACIAMADIAEACIAGACIASAIIADABIAcAQIAEADQALAIAJAJIADAEQAIAIAHAJIABACQAIAKADAJQAEAKAAAJIgBALIgEAJIAAADIgDAFIgEAJIgEAIIgDAFIgGANIgHAOIgMAYIgVAqIqWUhQgjBHg7A8QhvCih3CcQguA/gtBAQgpA8goA8QgOAUggAGIgLAAIgJABIgKgBg");
	var mask_1_graphics_100 = new cjs.Graphics().p("Ao8SHIgTgCQgagFgagLQgwgXgZggQgSgXgBgTIAAgBQAAgLAEgJIAihHIgBAAIKv1SQAkhJA7g9QBvilB5igQA7hRA6hTIAyhFIAXgfQALgQAWgGIALgCIAGgBIAGAAIABAAQAJgBAJAAIAAAAIAUADIAFACIAMADIAFACIAFACIATAIIACABQAPAIAOAJIAEACQALAIAJAJIADAEQAIAIAGAJIACACQAIALADAJQAEAKAAAJIgBALIgEAKIgBACIgCAFIgEAJIgEAIIgDAFIgGANIgHAPIgMAYIgVArIqcUqQgjBIg7A8QhvClh4CeIhcCBQgqA9gnA9QgOAUggAGIgMAAIgJABIgKgBg");
	var mask_1_graphics_101 = new cjs.Graphics().p("ApASSIgSgCQgbgFgbgLQgvgXgaghQgSgXgBgTIAAgBQAAgLAEgJILW2kQAkhKA7g+QBwinB5iiQA8hTA6hTIAyhGIAYggQALgQAVgGIAMgCIAGgBIAFAAIACAAIASgBIAAAAIAUADIAFACIAMADIAFACIAFACIAUAIIACABIAcARIAEADQAMAIAJAJIADADQAIAIAHAKIABACQAIAKADAKQAEAKABAJIgCALIgEAKIAAACIgDAGIgFAIIgDAIIgDAFIgGAOIgHAOIgMAZIgWArIqgU0QgkBKg7A8QhwCnh4CgIhdCDQgqA+gnA9QgPAVgfAGIgNAAIgJABIgKgBg");
	var mask_1_graphics_102 = new cjs.Graphics().p("ApDSdIgUgCQgagFgbgLQgxgXgZghQgSgXgBgUIgBgBQABgLAFgJILa2vQAlhKA7g/QBxiqB6ikQA7hUA7hUIAyhHIAYghQALgPAWgHIAMgCIAGgBIAFAAIABAAIASgBIACAAIATADIAFACIANADIAEACIAGACIATAIIACABQAQAIANAJIAEADQALAIAJAJIADAEQAJAIAGAKIACACQAHAKAFAKQADAKAAAJQAAAGgBAFIgEAKIgBACIgCAGIgEAJIgFAIIgCAFIgHANIgHAPIgMAYIgVAsIqmU/QglBKg6A9QhxCph4CiQgwBDguBCQgqA+goA/QgOAUghAHIgLAAIgKABIgJgBg");
	var mask_1_graphics_103 = new cjs.Graphics().p("ApHSoQgKAAgJgCQgbgFgbgLQgxgXgagiQgSgXgBgUIgBgBQABgKAEgKIAjhJIgBAAIK/1xQAlhLA7hAQByisB6imQA8hVA6hVIAzhIIAXghQAMgQAWgHIAMgCIAGgBIAGAAIACAAIASgBIAAAAIAUADIAGACIAMADIAEACIAFACIAUAIIACABIAeASIAEACQALAIAKAKIADADQAIAJAHAJIABACQAIALADAKQAEAKAAAJQAAAGgBAFIgDAKIgBADIgEAFIgEAJIgDAIIgEAFIgGAOIgHAPIgMAYIgWAsIqrVJQgkBLg8A/QhwCqh6ClQgwBDgtBDIhTB+QgPAVggAHIgMAAIgJABIgKgBg");
	var mask_1_graphics_104 = new cjs.Graphics().p("ApLSzQgKAAgJgCQgbgFgbgLQgxgYgbghQgRgYgCgUIgBgBQABgKAFgKIAihKIAAAAILD17QAlhMA8hBQByiuB7ioQA9hWA7hXIAyhIIAYgiQAMgQAXgGIALgDIAGAAIAGgBIACAAIASgBIABAAIAUADIAFACIANADIAEACIAFACIAUAIIACACQAQAIAOAJIAEADQALAIAJAJIAEAEQAIAIAGAKIADACQAHAKAEAKQAEALgBAJIgBAMIgDAJIgBADIgDAFIgEAJIgFAJIgCAFIgHANIgHAPIgMAZIgVAsIqxVUQglBLg7BAQhyCsh6CnIheCIQgqBAgoBAQgPAVghAHIgMAAIgKABIgKgBg");
	var mask_1_graphics_105 = new cjs.Graphics().p("ApPS+QgKAAgJgCQgbgFgcgMQgxgXgagiQgTgXgBgVIAAgBQAAgKAEgKILs3RQAmhMA7hCQBziwB8iqQA9hXA7hYIAzhKIAXghQAMgRAWgGIAMgDIAHAAIAGgBIABAAIATgBIAAAAIAUADIAGACIAMADIAFACIAFACIAUAJIADABQAPAIAOAJIAFADQALAIAKAKIACADQAJAJAHAJIABADQAIAKAEAKQADAKABAKIgBAMIgFAKIAAACIgDAGIgFAJIgDAIIgDAFIgGAOIgIAPIgMAZIgXAtIq1VdQglBMg8BBQhyCvh7CoIheCKIhTCBQgOAWgiAHIgMAAIgKABIgKgBg");
	var mask_1_graphics_106 = new cjs.Graphics().p("ApSTJQgLAAgJgCQgbgFgcgMQgzgXgagiQgSgYgBgUIAAgBQAAgLAEgKIAjhLIAAAAILO2RQAmhNA8hDQBziyB9isQA9hYA7hZIA0hLIAXgiQAMgQAXgHIAMgDIAGAAIAGgBIABAAQAJgBAKABIABAAQAKAAALADIAFABQAGABAHADIAEABIAGADIAUAIIACABIAeARIAEADQALAIAKAKIAEAEQAIAIAGAKIACACQAIALAEAKQAEAKgBAKIgBAMIgDAKIgBACIgDAGIgEAJIgFAJIgDAFIgGANIgIAQIgMAZIgWAtIq6VoQgmBNg8BBQhyCxh7CrQgxBFgvBGQgrBBgoBCQgPAWgiAGIgMABIgKAAIgJAAg");
	var mask_1_graphics_107 = new cjs.Graphics().p("ApXTUQgJAAgKgCQgbgFgcgMQgzgXgbgjQgSgYgCgUIAAgBQAAgLAGgKIAjhLIgBAAILU2cQAmhOA8hEQB0i0B9iuQA9hZA8haIAzhMIAZgiQALgRAYgHIAMgDIAGAAIAFgBIACAAQAKgBAJABIABAAQAKAAALADIAFABIANAEIAEABIAGADIAUAIIACABQAQAIAPAKIAEACQAMAJAJAKIADADQAIAJAIAKIABACQAIALAEAKQAEAKAAAKIgBAMIgFAKIAAADIgDAFIgFAJIgDAJIgEAFIgGAOIgHAPIgMAaIgYAtIq+VyQgnBOg8BCQhzCzh8CtQgxBGguBHQgsBCgpBDQgOAWgiAGIgMABIgKAAIgLAAg");
	var mask_1_graphics_108 = new cjs.Graphics().p("ApaTfIgUgCQgbgFgdgMQgzgXgagjQgTgZgBgUIgBgBQABgLAEgKIL93yQAmhPA8hFQB1i2B9iwQA+hbA8haIA0hNIAYgjQAMgRAXgHIAMgDIAGAAIAGgBIACAAQAJgBAKABIABAAIAVADIAFABIANAEIAFACIAFACIAUAIIADABQAQAJAOAJIAFADQALAIAKAKIADADQAJAJAGAKIACADQAIAKAEALQAEAKAAAKIgBAMIgEAKIgBADIgDAFIgEAKIgFAIIgCAFIgHAOIgIAQIgMAaIgXAtIrDV9QgoBOg8BDQh0C1h8CvIhgCPQgrBDgpBDQgPAWgiAHIgNABIgKAAIgKAAg");
	var mask_1_graphics_109 = new cjs.Graphics().p("ApeTqIgUgCQgcgFgcgMQg0gYgagjQgTgYgBgVIgBgBQABgLAEgKIAkhNILe2wQAnhQA8hFQB2i5B9iyIB7i4IA0hNIAZgjQALgSAYgHIAMgCIAGgBIAGgBIACAAIATAAIABAAIAVADIAFABIANAEIAFACIAGACIAUAIIACABQAQAJAPAJIAEADQAMAJAKAKIADADQAJAJAGAKIACACQAIALAEALQAEAKAAAKIgBAMIgEAKIgBADIgDAGIgFAJIgEAJIgDAFIgGAOIgIAQIgMAZIgXAuIrJWHQgoBPg8BEQh1C3h9CyIhgCQQgrBEgqBEQgPAWgiAHIgNABIgKAAIgKAAg");
	var mask_1_graphics_110 = new cjs.Graphics().p("ApiT1IgUgCQgcgFgdgMQgzgYgbgjQgTgZgBgVIgBgBQAAgLAFgKIAkhNIAAAAILk27QAnhRA8hGQB2i7B+i0QA/hdA9hdIA0hOIAZgkQALgRAYgIIAMgCIAHgBIAGgBIABAAIAUAAIAAAAIAWADIAFABIANAEIAFACIAGACIAUAIIACACQARAIAPAKIAEACQAMAJAJAKIAEADQAIAJAHALIACACQAIALAEAKQAEALAAAKIgBAMIgEALIgBACIgDAGIgFAJIgEAJIgDAFIgHAPIgHAPIgNAaIgXAuIrOWSQgoBQg8BEQh2C6h9CzQgxBJgwBJIhVCJQgPAXgjAHIgMABIgKAAIgLAAg");
	var mask_1_graphics_111 = new cjs.Graphics().p("AplUAIgVgCQgcgFgdgMQg0gYgbgkQgUgZgBgVIAAgBQAAgLAGgKIAkhOIgBAAILp3GQAohRA8hHQB3i8B/i4QA+hdA+heIA0hPIAZgkQAMgSAXgHIANgDIAGgBIAHgBIABAAIATAAIABAAIAWADIAFABIAOAEIAEACIAGACIAUAJIADABQAQAIAPAKIAEADQAMAIALALIACADQAJAJAHAKIACADQAIALAEAKQAEALAAAKIgBAMIgEALIgBACIgDAGIgFAKIgEAJIgCAFIgHAOIgJAQIgMAaIgXAvIrTWbQgpBRg8BGQh3C7h9C1QgyBKgwBKQgrBFgqBGQgQAXgiAHIgNABIgKAAIgKAAg");
	var mask_1_graphics_112 = new cjs.Graphics().p("ApqULIgUgCQgcgFgegMQg0gYgbgkQgTgZgCgWIAAgBQABgLAEgKIMS4fQAphSA8hIQB4i+B/i6QA/heA+hfIA1hQIAYglQAMgSAYgHIANgDIAGgBIAGAAIABAAIAVgBIAAAAIAVADIAHABIAMAEIAGACIAFACIAVAJIADABIAfASIAFADQAMAJAJAKIAEADQAIAKAHAKIACACQAIAMAEAKQAEALAAAKIgBANIgEAKIgBADIgEAGIgDAJIgFAJIgDAFIgHAPIgIAQIgMAaIgYAvIrYWmQgpBRg9BHQh2C9h+C4IhjCVQgrBGgrBHQgPAXgjAHIgNABIgKAAIgLAAg");
	var mask_1_graphics_113 = new cjs.Graphics().p("AptUWIgVgCQgcgFgegMQg1gZgbgkQgTgZgBgWIgBgBQAAgLAFgLIMY4pQAphTA8hJQB4jACAi8QA/hfA/hgIA1hSIAZgkQALgTAZgHIAMgDIAHgBIAFAAIADAAIAUgBIAAAAIAVADIAGACIAOADIAEACIAHACIAUAJIACABQARAJAQAKIAEACQAMAJAKAKIADAEQAJAJAHALIACACQAIALAEALQAEALAAAKIgBANIgFAKIAAADIgDAGIgFAJIgEAJIgDAGIgHAOIgIAQIgNAbIgXAvIreWwQgqBSg7BIQh4C/h/C6IhiCXQgsBHgrBHQgPAYgkAHIgMABIgLAAIgKAAg");
	var mask_1_graphics_114 = new cjs.Graphics().p("ApxUhIgVgCQgdgFgegNQg1gYgbglQgTgZgCgWIAAgBQAAgLAFgLIAlhPIAAAAIL43mQAphTA9hKQB5jDCAi9QBAhhA+hhIA1hSIAaglQAMgTAYgHIAMgDIAHgBIAHgBIABAAQAKgBAKABIAAAAQAMAAALADIAFABIAOAEIAEACIAGACIAVAJIADABIAgASIAFADQALAJAKAKIAEAEQAJAJAHALIABACQAJAMAEAKQAEALAAAKIgBANIgEALIgBADIgEAGIgEAJIgFAJIgCAGIgHAOIgIAQIgNAbIgYAwIriW6QgrBTg7BJQh5DBiAC8QgyBMgwBNQgtBHgqBIQgPAYgkAIIgNABIgLAAIgKAAg");
	var mask_1_graphics_115 = new cjs.Graphics().p("Ap1UsIgVgCQgdgFgegNQg1gYgcglQgUgagBgWIAAgBQAAgLAFgLIAlhQIAAAAIL+3wQAqhUA8hLQB6jFCBi/QBAhiA+hiIA2hTIAZgmQAMgSAZgIIAMgDIAHgBIAGgBIACAAQAKgBAKABIABAAQALAAALADIAGABIANAEIAFACIAGACIAVAJIADABQARAJAPAKIAEADQANAIAKALIADADQAJAKAHAKIACADQAIALAEALQAEALAAAKIgBANQgBAFgDAGIgBADIgDAGIgFAJIgEAKIgDAFIgHAPIgIAQIgNAbIgYAwIroXFQgqBTg9BKQh4DDiAC+IhkCaIhXCSQgPAYglAIIgNABIgKAAIgLAAg");
	var mask_1_graphics_116 = new cjs.Graphics().p("Ap5U3IgVgCQgdgFgegNQg2gZgcglQgUgagBgWIAAgBQAAgLAFgLIAlhQIME37QAqhVA8hMQB6jHCCjBQBAhjA/hkIA2hTIAZgnQAMgSAZgIIANgDIAGgBIAHgBIABAAQAKgBALABIABAAQALAAALADIAGABIANAEIAFACIAGACIAVAJIADABQARAJAQAKIAEADQAMAJAKAKIAEAEQAJAJAHALIACADQAIALAEALQAEALAAAKIgBANIgEALIgBADIgDAGIgFAKIgEAJIgDAGIgHAOIgJARIgMAbIgZAwIrtXPQgqBUg9BLQh5DFiBDAIhkCcIhXCTQgQAZgkAIIgNABIgLAAIgLAAg");
	var mask_1_graphics_117 = new cjs.Graphics().p("Ap8VCIgWgCQgdgFgfgNQg2gZgcglQgUgagBgXIAAAAQAAgMAFgLIAmhRIgBAAIMJ4FQAqhWA9hNQB7jICCjEQBBhkA/hlIA2hUIAZgnQAMgTAZgIIANgDIAHgBIAGgBIACAAQAKgBALABIAAAAIAXADIAGABIANAEIAFACIAGACIAWAJIACABQASAJAPAKIAFADQAMAJAKALIAEADQAJAKAHALIACACQAIAMAEALQAEALAAAKIgBAOIgEALIgBACIgEAGIgEAKIgFAJIgDAGIgHAPIgIAQIgNAcIgYAwIryXaQgrBVg9BLQh6DHiBDDIhlCdIhYCVQgPAZglAIIgNABIgLAAIgKAAg");
	var mask_1_graphics_118 = new cjs.Graphics().p("AqAVNIgWgCQgdgFgfgNQg3gZgcgmQgUgagBgWIAAgBQAAgMAFgLIAmhRIgBAAIMP4RQAqhWA9hOQB8jKCCjGQBBhlBAhmIA2hWIAagnQAMgTAZgIIANgDIAGgBIAHAAIACAAIAUgBIABAAIAXADIAGABIANAEIAFACIAHACIAVAJIADABQARAJAQALIAEACQANAJAKALIADAEQAKAJAHALIABADQAJALAEAMQAEALAAAKIgBAOIgEALIgBACIgEAHIgEAJIgFAKIgDAFIgHAPIgIARIgNAcIgZAxIr3XjQgrBWg9BMQh7DJiCDFQgzBPgxBQQguBLgrBLQgQAagkAIIgOABIgKAAIgLAAg");
	var mask_1_graphics_119 = new cjs.Graphics().p("AqaVWQgegFgegNQg3gZgdgmQgUgbgBgWIgBgBQABgMAFgLIAmhSIAAAAIMT4bQAshXA8hOQB9jNCCjIQBChmBAhnIA2hXIAagnQAMgTAagJIAMgDIAHAAIAHgBIACAAIAUgBIABAAIAXADIAGABIAOAEIAFACIAGACIAWAJIACACQASAJAQAKIAEADQAMAJALALIADADQAKAKAHALIABADQAJALAFALQADAMABAKIgCAOIgEALIgBADIgDAGIgFAKIgEAJIgDAGIgIAPIgIARIgNAbIgZAyIr8XuQgtBWg8BNQh8DMiBDGIhmChQgtBMgsBMQgPAZgmAIIgOACIgVAAIgWgCg");
	var mask_1_graphics_120 = new cjs.Graphics().p("AqdVhQgfgFgfgNQg3gagdgmQgUgagBgXIgBgBQAAgMAGgLIAmhSIMZ4mQArhYA9hPQB9jPCDjLICDjOIA3hYIAZgoQANgTAZgIIANgEIAHAAIAHgBIABAAIAVgBIABAAIAWADIAHACIAOADIAFACIAGACIAWAJIACACQASAJAQAKIAFADQANAJAJALIAEAEQAJAKAIALIACACQAIAMAEALQAEAMAAAKQAAAHgBAHIgEALIgBADIgEAGIgEAKIgFAKIgDAFIgHAQIgJAQIgMAcIgaAyIsCX4QgrBXg9BOQh8DOiDDIIhmCjQguBNgsBNQgPAZgmAIIgNACIgWAAQgLAAgKgCg");
	var mask_1_graphics_121 = new cjs.Graphics().p("AqiVsQgegFgggNQg3gagdgmQgVgbAAgXIAAgBQAAgMAEgLIAohTIgBAAIMe4wQAshZA9hQQB+jRCEjNQBBhoBBhpIA3hYIAagoQAMgUAagIIAOgEIAHAAIAGgBIABAAIAWgBIABAAIAWADIAHACIAOADIAFACIAHADIAVAJIADABQASAJAPAKIAFADQANAKALALIADADQAJAKAIALIABADQAJAMAEALQAEAMABAKIgCAOIgFALIgBADIgCAGIgGAKIgEAKIgDAGIgHAPIgIARIgOAcIgZAyIsHYDQgtBYg9BOQh8DQiDDLIhnCkIhZCbQgRAaglAIIgOACIgWAAQgLAAgLgCg");
	var mask_1_graphics_122 = new cjs.Graphics().p("AqlV3QgfgFgggNQg4gagdgnQgUgbgBgXIgBgBQABgMAFgLIAnhUIgBAAIMj46QAthaA9hRQB/jTCEjPICDjTIA4hZIAagpQAMgUAagIIANgDIAHgBIAHgBIACAAIAVgBIABAAIAXADIAGACIAOADIAFACIAHADIAWAJIADABQASAJAPALIAFADQANAJAKALIAEAEQAJAKAIALIABADQAJAMAEALQAEALABALIgCAOIgEAMIgBACIgEAHIgEAKIgFAJIgDAGIgHAQIgJARIgNAcIgZAyIsMYNQgtBZg9BQQh+DRiEDNIhmCmIhbCdQgQAagmAIIgNACIgWAAQgMAAgKgCg");
	var mask_1_graphics_123 = new cjs.Graphics().p("AqqWCQgegFgggNQg4gagegnQgUgbgBgYIgBgBQAAgMAGgLIAnhUIMn5FQAuhbA9hSQB/jVCFjRICEjVIA4haIAagpQAMgUAagJIAOgDIAHgBIAGgBIACAAQALgBALAAIAAAAQAMABAMACIAGACIAOADIAFACIAHADIAWAJIADABQASAKAQAKIAFADQANAJAKAMIAEADQAJAKAIAMIABACQAJAMAEAMQAEALABALIgCAOIgEAMIgBADIgEAGIgEAKIgFAKIgDAGIgIAPIgIARIgOAdIgZAyIsRYYQgtBZg9BRQh/DTiEDPIhnCoIhbCeQgQAbgmAIIgOACIgWAAQgMAAgLgCg");
	var mask_1_graphics_124 = new cjs.Graphics().p("AquWNQgfgFgggNQg4gagegoQgVgbgBgYIAAgBQAAgMAGgLIAnhVIMt5QQAuhbA9hTQCAjXCFjTQBDhrBChsIA4hbIAagqQAMgUAbgJIANgDIAHgBIAHgBIACAAQAKgBAMAAIAAAAQAMABAMACIAGACIAPADIAFADIAGACIAXAJIACABQASAKARAKIAEADQANAKALALIAEAEQAJAKAIALIABADQAJAMAEAMQAEALABALIgCAOIgEAMIgBADIgEAGIgEAKIgFAKIgDAGIgIAQIgIARIgOAdIgZAzIsXYhQguBag9BSQh+DViFDSIhoCpIhbCgQgQAbgnAIIgOACIgWAAIgXgCg");
	var mask_1_graphics_125 = new cjs.Graphics().p("AqxWYQgggFgfgNQg6gbgdgnQgVgcgCgYIAAAAQABgNAEgLIAohVIAAAAIMy5bQAvhcA9hTQCAjaCHjVICFjZIA4hcIAbgqQAMgVAbgJIANgDIAHgBIAHgBIABAAQAMgBALAAIABAAQALABAMACIAHACIAOAEIAFACIAHACIAWAJIADACQASAJARALIAEADQANAJALALIADAEQAKAKAIAMIABADQAJAMAFALQADAMAAALIgBAPIgEALIgBADIgDAGIgGALIgEAKIgDAGIgHAPIgJASIgOAcIgaA0IsbYsQgvBag9BTQh/DYiGDTIhoCrQguBRguBRQgPAagoAJIgNACIgXAAIgWgCg");
	var mask_1_graphics_126 = new cjs.Graphics().p("Aq1WiQgfgEghgOQg5gagegoQgVgcgBgYIgBAAQAAgNAGgMIAohVIgBAAIM45lQAvhdA9hVQCBjbCHjXQBEhuBChuIA4hcIAbgrQAMgVAbgJIAOgDIAHgBIAHgBIABAAIAXgBIAAAAIAYADIAHACIAOADIAFACIAHADIAXAJIACACQATAJAQAKIAFAEQANAJALAMIAEADQAJAKAIAMIACADQAIAMAFAMQAEAMAAALIgBAPIgFALIgBADIgDAGIgFALIgFAKIgDAFIgIARIgIARIgOAdIgaA0IshY2QguBcg9BTQiBDaiGDVIhoCtQgvBSgtBRQgRAbgnAJIgOABIgXABIgWgDg");
	var mask_1_graphics_127 = new cjs.Graphics().p("Aq5WtQgggEgggOQg6gagegoQgWgcAAgYIgBgBQAAgNAGgMIAohWIM95wQAvhdA9hWQCCjdCHjZICHjeIA4heIAbgqQANgWAbgIIANgEIAHgBIAHgBIACAAIAWgBIABAAIAYADIAHABIAOAFIAGACIAGACIAXAJIADABQASAKARALIAFADQANAJALAMIADAEQAKAKAIAMIABADQAJAMAFAMQAEAMAAALIgBAOIgFANIgBACIgDAHIgFAKIgFAKIgDAGIgIAQIgJASIgNAdIgbA0IsmZAQguBcg+BVQiADbiHDYIhpCvQgvBSguBSQgQAcgnAJIgPABIgWABIgXgDg");
	var mask_1_graphics_128 = new cjs.Graphics().p("Aq9W4QgggEghgOQg6gagegpQgWgcgBgYIAAgBQAAgNAGgLIAohYIAAAAINC55QAwhfA9hWQCDjgCHjbQBFhwBChwIA5hfIAbgsQANgUAbgKIAOgDIAHgBIAHgBIACAAIAWgBIABAAIAYADIAHACIAOADIAGADIAGACIAXAKIADABQATAKAQAKIAFAEQAOAJAKALIAEAEQAKAKAIANIABACQAJAMAFANQAEAMAAALIgBAOIgFAMIgBAEIgEAGIgEALIgFAKIgDAFIgIAQIgJASIgOAeIgaA0IsrZKQgvBeg+BVQiBDeiHDaIhqCwIhdCmQgQAcgoAJIgOABIgXABIgXgDg");
	var mask_1_graphics_129 = new cjs.Graphics().p("ArBXDQgggEghgOQg7gagegpQgWgdgBgYIAAgBQAAgNAGgLIAohYIAAAAINI6FQAwhfA+hXQCDjiCIjdQBFhxBDhxIA5hgIAagsQANgVAbgJIAOgEIAIgBIAHgBIACAAIAWgBIABAAIAYADIAHACIAOAEIAGABIAHADIAXAJIADACQASAKASALIAEACQAOAKALAMIADAEQAKAKAHAMIACADQAKANAEAMQAEALAAAMIgCAPIgEAMIgBACIgEAHIgEALIgGAKIgCAGIgIAQIgJASIgOAdIgbA1IsvZVQgwBeg9BWQiDDgiIDcIhqCyIhdCnQgQAcgoAKIgPABIgXABIgXgDg");
	var mask_1_graphics_130 = new cjs.Graphics().p("ArFXPQghgFghgOQg6gbgggpQgVgcAAgZIgBgBQAAgNAFgLIAqhYIgBAAINO6QQAvhfA/hZQCDjkCJjfICIjlIA6hgIAbgsQANgWAbgJIAOgEIAHAAIAIgCIABAAIAXgBIABAAIAYADIAHACIAPADIAFADIAHACIAYAJIACACQATAKARALIAFADQANAJALAMIAEAFQAKAKAIAMIACACQAIANAEAMQAFAMAAAMIgBAPIgFAMIgBADIgDAHIgGAKIgEAKIgEAHIgIAQIgIASIgOAdIgbA2Is2ZeQgwBfg9BXQiDDjiIDdQg2Bag0BaIhfCpQgQAcgoAKIgPABIgXABIgXgCg");
	var mask_1_graphics_131 = new cjs.Graphics().p("ArJXaQghgFghgOQg8gbgfgqQgVgdgBgYIAAgBQAAgNAFgMIAqhYINS6aQAxhhA+hZQCEjmCJjiICJjmIA6hiIAbgsQANgWAbgJIAPgEIAHgBIAHgBIABAAQAMgBAMAAIAAAAQANABAMACIAHACIAPAEIAFACIAHACIAXAKIADABQAUAKAQALIAFADQAOAKALAMIAEAEQAKAKAHAMIACADQAJANAFAMQAEAMAAAMIgCAPIgEAMIgBADIgEAHIgEAKIgGALIgDAGIgHAQIgJASIgPAeIgbA1Is6ZqQgxBfg9BYQiEDkiJDgIhrC2QgvBVguBWQgRAcgoAKIgPABIgYABIgXgCg");
	var mask_1_graphics_132 = new cjs.Graphics().p("ArNXlQghgFghgOQg9gcgegpQgWgdgBgZIAAgBQAAgNAGgMIAphZIgBAAINZ6lQAwhhA+haQCFjoCLjkICJjoIA6hjIAbgtQANgWAcgJIAOgEIAIgBIAGgBIADAAQAKgBAMAAIABAAQANABAMACIAHACIAPAEIAFACIAHACIAYAKIADABQATAKARALIAFADQANAKALAMIAFAEQAJALAJAMIABADQAJANAEAMQAFAMAAAMIgBAPIgFAMIgBADIgDAHIgFALIgGAKIgDAGIgIARIgJASIgOAeIgbA2ItAZzQgwBhg+BYQiFDmiIDjIhsC3QgxBWguBWQgQAdgqAKIgOABIgXABIgYgCg");
	var mask_1_graphics_133 = new cjs.Graphics().p("ArRXwQghgFgigOQg8gcgfgqQgWgdgBgZIAAgBQAAgNAFgMIAqhaIAAAAINd6vQAxhiA+hbQCGjqCLjmICKjqIA6hkIAcgtQANgWAcgKIAOgEIAHgBIAHgBIACAAIAYgBIAAAAQANABAMACIAHACIAPAEIAGACIAHACIAXAKIADABQAUAKARAMIAFADQANAKAMAMIAEAEQAKAKAHAMIACADQAJANAFANQAEAMAAAMIgBAPIgFAMIgBADIgEAHIgFALIgFAKIgDAHIgIAQIgJATIgOAeIgbA2ItFZ+QgxBhg+BZQiFDpiKDkIhsC5IhfCuQgRAdgpAJIgPACIgXABIgYgCg");
	var mask_1_graphics_134 = new cjs.Graphics().p("ArVX7QghgFgigOQg9gcgfgqQgWgegBgZIAAgBQAAgNAFgMIAqhaIAAAAINj66QAxhjA+hcQCHjrCLjpICLjtIA6hkIAcguQANgWAcgKIAOgEIAIAAIAHgCIACAAIAXgBIABAAQANABAMACIAHACIAPAEIAGACIAHACIAYAKIADACQATAKARALIAGADQANAKALAMIAEAEQAKALAIAMIACADQAJANAFAMQAEANAAAMIgBAPIgFANIgBACIgEAHIgFALIgFALIgDAGIgIARIgJASIgPAfIgbA2ItKaIQgxBig+BbQiGDqiKDmQg3Bdg2BeQgwBXgvBYQgRAegpAJIgPACIgYABIgYgCg");
	var mask_1_graphics_135 = new cjs.Graphics().p("ArZYGQghgFgjgOQg9gcgfgrQgWgdgBgaIAAAAQAAgOAFgMIArhbIgBAAINo7EQAyhkA+hcQCHjuCMjrICLjvIA7hlIAcguQANgXAcgJIAPgEIAHgBIAIgCIABAAIAYgBIABAAIAZADIAHACIAQAEIAFACIAHADIAYAJIADACQAUAKARALIAFADQAOAKALANIAEAEQAKAKAIANIACADQAJANAFAMQAEANAAAMIgBAPIgFANIgBADIgEAHIgFALIgFAKIgDAHIgIAQIgJATIgPAfIgbA2ItQaTQgxBig+BcQiHDsiLDpIhtC8IhgCxQgQAegqAJIgPACIgYABQgMAAgMgCg");
	var mask_1_graphics_136 = new cjs.Graphics().p("ArdYRQghgFgjgPQg9gbgggsQgWgdgBgaIAAAAQgBgOAHgMIAqhbIgBAAINu7PQAyhlA+hdQCIjwCMjtICNjxIA6hmIAcgvQANgWAdgKIAPgEIAHgBIAHgCIACAAIAYgBIABAAIAaADIAHACIAPAEIAFACIAIADIAXAJIAEACQATAKASALIAFAEQAOAKALAMIAEAEQAKALAJAMIABADQAKANAEANQAEANAAALIgBAQQgCAGgDAHIgBADIgDAHIgGALIgFALIgDAGIgIARIgKATIgOAeIgbA3ItVadQgyBjg/BdQiGDuiMDrIhtC+IhhCyQgQAegrAKIgOACIgZABQgMAAgMgCg");
	var mask_1_graphics_137 = new cjs.Graphics().p("ArhYcQghgFgkgPQg9gcgggrQgWgegBgaIgBAAQAAgOAHgMIAqhcIAAAAINy7aQAzhlA+heQCJjyCMjvQBHh5BGh6IA7hnIAcgvQANgXAdgKIAQgEIAHgBIAHgBIACAAQAMgCAMAAIAAAAIAaADIAHACIAQAEIAFACIAHADIAZAKIADABQAUAKARAMIAGADQANAKAMAMIAEAEQAKALAIANIACADQAJANAFANQAEANAAALIgBAQQgCAGgDAHIgBADIgEAHIgFALIgFALIgDAGIgIARIgJATIgQAfIgbA4ItaanQgzBkg+BdQiHDwiMDtIhvDAQgwBagwBaQgRAegqAKIgPACIgYABQgNAAgMgCg");
	var mask_1_graphics_138 = new cjs.Graphics().p("ArlYnQgigFgjgPQg+gcgggsQgWgdgBgbIAAAAQgBgOAGgMIArhdIN47kQAzhlA+hgQCJj0CNjxICOj1IA8hoIAcgwQANgXAdgKIAPgEIAHgBIAIgBIACAAQALgCANAAIABAAIAZADIAHACIAQAEIAGACIAHADIAYAKIAEABQATAKASAMIAFADQAOALALAMIAFAEQAKALAIANIACADQAJANAFANQAEANABALQgBAJgBAIIgFAMIgBADIgEAHIgFAMIgFAKIgEAHIgIARIgJATIgPAfIgcA4ItfaxQgyBlg/BeQiIDyiNDvIhuDCIhiC2QgQAegrAKIgPACIgZABQgMAAgMgCg");
	var mask_1_graphics_139 = new cjs.Graphics().p("ArpYyQgigFgkgPQg+gcgggsQgXgeAAgaIAAgBQAAgOAFgMIArhdIAAAAIN97vQAzhmA/hhQCKj2COjzICOj4IA8hoIAcgwQANgYAegKIAOgEIAHgBIAJgBIABAAQAMgCANAAIAAAAIAaADIAIACIAPAEIAGACIAHADIAZAKIADABQAUALARALIAGAEQAOAKAMAMIADAEQALAMAIAMIACADQAJAOAFANQAEANAAALQAAAJgBAIIgFANIgBACIgEAIIgFALIgFALIgDAGIgJARIgJAUIgPAfIgcA4Itla8QgzBlg+BfQiID1iODxIhvDDQgyBbgvBcQgSAfgqAKIgQACIgZABQgLAAgNgCg");
	var mask_1_graphics_140 = new cjs.Graphics().p("ArtY9QgigFgkgPQg+gcghgtQgXgeAAgaIgBgBQAAgOAGgMIAsheIgBAAIOD75QA0hnA+hiQCLj4COj1QBIh9BHh9IA8hqIAcgwQAOgXAdgLIAPgEIAHgBIAIgBIACAAQAMgCANABIAAAAQANAAANADIAIABIAPAEIAGACIAHADIAZAKIADACQAUAKASAMIAGADQAOAKALANIAFAEQAKALAIANIACADQAJANAFANQAEANABAMQAAAJgCAIIgFANIgBADIgEAHIgFALIgFALIgEAHIgIARIgJATIgPAgIgdA4ItpbGQgzBmg/BgQiJD3iODzIhwDFIhiC5QgRAfgrAKIgPACIgZABQgMAAgNgCg");
	var mask_1_graphics_141 = new cjs.Graphics().p("ArxZHQgigEgkgPQg/gdghgtQgXgegBgbIAAAAQAAgOAGgNIAsheIgBAAIOI8EQA1hoA+hiQCLj6CPj4ICQj8IA8hqIAdgxQANgYAdgKIAQgEIAHgBIAIgCIABAAIAZgBIABAAQANABANACIAIACIAQAEIAFACIAIADIAZAKIADABQAUALASALIAFAEQAOAKAMANIAEAEQALALAIANIACADQAJAOAFANQAEANABAMQAAAIgCAIIgFANIgBADIgEAIIgFALIgFALIgEAHIgIARIgKATIgPAgIgcA5ItvbQQg0Bng+BhQiKD4iOD2IhxDGIhiC7QgRAfgrALIgQACIgZABIgZgDg");
	var mask_1_graphics_142 = new cjs.Graphics().p("Ar1ZSQgjgEgkgPQg/gdghgtQgXgfgBgbIAAAAQAAgOAGgNIAsheION8PQA0hpA/hjQCMj8CQj6ICPj+IA9hrIAdgxQANgYAegLIAPgEIAIgBIAHgCIACAAIAZgBIABAAQANABANACIAIACIAQAEIAFACIAIADIAZAKIADABQAUALATAMIAFADQAOALAMAMIAEAEQALAMAIANIACADQAJAOAFANQAEANABAMQAAAIgCAJIgFANIgBADIgEAHIgFALIgGAMIgDAGIgIASIgKATIgPAgIgdA5ItzbbQg1Bng+BiQiLD7iPD3IhxDIIhiC8QgSAggrALIgQACIgZABIgZgDg");
	var mask_1_graphics_143 = new cjs.Graphics().p("Ar4ZdQgkgEgkgQQhAgcghguQgXgeAAgbIgBgBQAAgOAGgNIAshfIAAAAIOT8ZQA0hqBAhkQCMj+CQj8ICQkAIA9hsIAdgyQAOgYAdgLIAQgEIAIgBIAHgBIACAAQAMgCANAAIABAAQANABAOACIAHACQAIABAIADIAGACIAHADIAaAKIADACQAUAKASAMIAGADQAOALAMANIAEAEQAKALAJANIACAEQAJANAFANQAEAOABAMQAAAIgCAJQgBAGgEAHIgBADIgEAHIgFAMIgGALIgDAHIgIARIgKAUIgQAgIgcA5It4blQg2Bpg+BiQiMD9iPD5IhxDKIhkC+QgRAggsALIgPACIgZABIgZgDg");
	var mask_1_graphics_144 = new cjs.Graphics().p("Ar9ZoQgjgEglgQQg/gdgigtQgXgfAAgbIgBgBQAAgOAGgNIAthfIgBAAIOY8kQA1hrBAhlQCMkACRj+ICRkCIA9huIAegyQANgYAegLIAPgEIAIgBQAEgBAEAAIABAAQANgCANAAIAAAAQAOABAOACIAHACQAHABAJADIAGACIAHADIAaAKIADACQAUAKATAMIAFAEQAPAKALANIAFAEQALAMAIANIACADQAKAOAEANQAFAOAAAMQAAAIgCAJQgCAGgDAHIgBADIgEAIIgGALIgEALIgEAHIgJASIgJATIgQAhIgdA5It9bwQg1Bpg/BjQiMD/iRD8IhxDLQgzBggwBgQgSAggsALIgQACIgaABIgZgDg");
	var mask_1_graphics_145 = new cjs.Graphics().p("AsAZzQgkgEglgQQhAgdgiguQgXgfgBgbIAAgBQAAgOAGgNIAthgIgBAAIOe8vQA1hrBAhmQCNkCCRkAICSkEIA+hvIAdgyQANgZAfgKQAGgDAJgCIAHgBQAEgBAEAAIACAAQAMgCANAAIABAAIAbADIAIACIAQAEIAGACIAHADIAaAKIAEACQAUALATAMIAFADQAPALAMANIADAEQAMALAIAOIABADQAKAOAFANQAFAOAAAMQAAAIgCAJQgCAGgDAHIgBADIgEAIIgFALIgGAMIgDAGIgJASIgJAUIgQAhIgdA6IuDb5Qg2Bqg+BlQiNEAiRD+IhyDNIhkDBQgRAhgtAKIgPADIgaABIgZgDg");
	var mask_1_graphics_146 = new cjs.Graphics().p("AsEZ+QgkgEglgQQhBgdgiguQgXgggBgbQAAgPAGgNIAthhIAAAAIOi85QA2hsA/hmQCPkFCSkCICSkHIA+hvIAdgzQAOgYAegLIAQgFIAHgBIAIgBIACAAQAMgCAOAAIAAAAIAcADIAHACIAQAEIAGACIAIADIAaAKIADACQAVALASAMIAGADQAOALAMANIAFAEQAKAMAJANIACAEQAJANAFAOQAFANAAANIgCARQgBAGgEAHIgBAEQgCADgCAEIgFAMIgGALIgDAHIgJASIgJAUIgQAgIgdA7IuJcEQg1Bqg/BmQiOECiREAIhzDPIhkDDQgSAggsALIgQADIgaABQgNgBgMgCg");
	var mask_1_graphics_147 = new cjs.Graphics().p("AsIaJQgkgEglgQQhBgdgjgvQgXgfgBgcIAAAAQAAgPAGgNIAthhIAAAAIOo9EQA3hsA+hoQCQkHCSkEICTkJIA+hwIAegzQANgZAfgLIAQgFIAHgBIAIgBIACAAQAMgCANAAIABAAIAbADIAIACIARAEIAGADIAIACIAaALIADABQAUALATAMIAGAEQAOAKANANIADAFQALAMAJANIACADQAKAOAEAOQAFANAAANQAAAJgBAIQgCAHgEAHIgBADIgDAHIgGAMIgGAMIgDAGIgJASIgJAUIgQAhIgdA7IuOcOQg3Brg+BnQiPEEiREDIhzDQIhlDEQgSAhgsALIgRADIgaABQgMgBgNgCg");
	var mask_1_graphics_148 = new cjs.Graphics().p("AsMaUQgkgEglgQQhCgegjguQgXgggBgcIAAAAQAAgPAGgNIAthiIAAAAIOt9OQA3htA/hpQCQkJCTkGICUkLIA+hxIAdg0QAOgZAfgLIAQgFIAIgBIAIgBIACAAQAMgCAOABIABAAQANAAAOADIAIABIAQAEIAGADIAHACIAbALIADABQAVALATANIAFADQAPALAMANIAFAEQALAMAIAOIACADQAJAOAGAOQAEANAAANQAAAJgCAIQgBAHgDAHIgCADIgEAIIgGALIgFAMIgEAHIgIASIgKAUIgPAhIgeA7IuTcZQg2BshABnQiOEHiTEEIhzDSIhmDGQgRAhgtALIgRACIgZACIgagDg");
	var mask_1_graphics_149 = new cjs.Graphics().p("AsRafQgkgEglgQQhCgegigvQgYgggBgcIAAAAQAAgPAGgNIAuhiIOx9ZQA4huA/hqQCRkLCUkIICTkNIA/hyIAdg0QAOgaAfgLQAIgDAIgBIAIgCIAJgBIABAAQANgCANABIABAAQAOAAANADIAIABIARAEIAGADIAHACIAbALIAEACQAUAKATANIAGADQAPALAMANIAEAFQALAMAJANIACAEQAJAOAFANQAFAOAAANQAAAJgBAIQgCAHgDAHIgCADIgEAIIgFAMIgGALIgDAHIgJASIgKAVIgQAhIgdA7IuZcjQg2BthABoQiPEJiTEGIh0DUIhlDHQgTAigtALIgQACIgbACIgagDg");
	var mask_1_graphics_150 = new cjs.Graphics().p("AsUaqQgkgEgmgQQhDgegigwQgYgggBgcQAAgPAGgOIAuhjIAAAAIO39jQA4hvBAhqQCRkNCUkKICVkQIA+hyIAeg1QAOgaAfgLIAQgFIAIgBQAEgBAEAAIACAAQANgCANABIABAAQAOAAAOACIAHACIARAFIAGABIAIADIAaALQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAVAKATANIAGAEQAPAKAMANIAEAFQALAMAJAOIACADQAKAOAFAOQAEAOAAAMIgBASIgFAOIgCADIgEAIIgFAMIgGALIgDAHIgJASIgKAVIgQAhIgeA9IudcsQg3BuhABpQiQEKiTEJIh1DWIhmDJQgSAhgtAMIgRACIgaABIgagCg");
	var mask_1_graphics_151 = new cjs.Graphics().p("AsYa1QglgEgmgQQhDgfgigvQgYghgBgbIAAgBQAAgPAGgOIAuhjIAAAAIO99uQA4hvBAhsQCRkPCVkMICVkSIBAh0IAdg1QAOgZAfgMIARgEIAIgBIAIgCIACAAQAMgCAOAAIABAAQAOABAOADIAHACQAJABAIACIAGADIAIADIAbAKIADABQAWALATANIAFADQAPALANAOIAEAEQALAMAJAOIACAEQAKAOAEAOQAFANAAAOQAAAIgBAKIgGANIgBAEIgEAHIgFANIgGALIgEAHIgIASIgKAUIgRAiIgeA9Iuic3Qg3BuhABqQiRENiTELIh1DXQg0BlgzBlQgSAiguAMIgQACIgbABQgNAAgNgCg");
	var mask_1_graphics_152 = new cjs.Graphics().p("AscbAQglgEgmgQQhEgegigxQgYgggBgdIAAAAQAAgPAGgOIAuhkIAAAAIPC94QA5hwBAhtQCSkQCVkPICWkUIBAh1IAdg1QAOgaAggLIAQgGIAIgBIAIgBIACAAQANgCAOABIABAAQAOAAAOACIAHACIASAFIAGACQAEABADABIAbALIAEACQAVALATAMIAGAEQAPALAMAOIAFAEQALAMAJAOIACADQAJAPAFANQAFAOAAANIgBASIgGAOIgBADIgEAIIgGANIgFAMIgEAHIgJASIgKAUIgQAiIgeA8IundCQg5Bvg/BrQiREPiVENIh1DZIhnDMQgSAigvAMIgQACQgNABgOAAQgNAAgNgCg");
	var mask_1_graphics_153 = new cjs.Graphics().p("AsgbLQglgEgngQQhDgfgjgwQgZghAAgdIAAAAQgBgOAHgPIAuhkIPI+EQA5hwA/huQCTkSCWkRICXkWIBAh2IAeg1QAOgbAfgMIARgEIAIgBIAIgCIACAAQANgCAOAAIAAAAQAPABAOADIAHABIASAEIAGADIAIACIAaALQABAAAAABQABAAAAAAQABAAAAAAQAAABABAAQAWALATANIAGADQAPAMAMANIAFAFQALAMAJAOIABADQAKAPAFANQAFAOAAANIgBASIgGAPIgBADIgEAIIgGAMIgFAMIgEAHIgJASIgKAVIgQAiIgfA9IusdMQg5Bwg/BrQiSESiVEOIh2DbIhoDOQgSAiguAMIgRACQgNABgOAAQgNAAgNgCg");
	var mask_1_graphics_154 = new cjs.Graphics().p("AskbWQglgEgngQQhEgfgjgxQgYgggBgeIgBAAQAAgPAHgOIAvhkIgBAAIPN+OQA5hzBBhtQCUkWCWkSICXkZIBAh2IAeg2QAOgbAggLIAQgFIAJgCIAIgBIABAAQAOgBANAAIABAAIAdACIAHADIASADIAGADIAIADIAbALIADABQAXALATANIAFADQAPAMANAOIAFAEQALAMAIAOIACAEQAKAPAGAOQAEAOAAANIgBASIgFAOIgCADIgEAIIgGAMIgFAMIgEAHIgJATIgKAUIgRAjIgeA9IuxdXQg5BwhABsQiTEUiVEQIh3DdIhnDPQgTAjguAMIgRACQgNABgOAAQgOAAgNgCg");
	var mask_1_graphics_155 = new cjs.Graphics().p("AsobhQglgEgngQQhFgfgjgxQgYghgCgdIAAgBQABgOAFgOIAwhmIgBAAIPT+ZQA5hyBBhwQCUkWCXkWICYkaIBAh3IAeg2QAPgbAfgMIARgFIAIgBIAIgCIACAAQANgBAOAAIABAAIAdADIAHABIASAFIAGACIAIADIAbAKIAEADQAVAKAUANIAGAEQAPALANAOIAEAFQAMAMAIAOIADADQAJAPAFAOQAFAOABANQgBAKgBAJIgGAOIgBADIgEAIIgFANIgHALIgDAIIgJATIgKAUIgRAjIgfA+Iu2dgQg6Bxg/BuQiUEUiWEUIh3DeIhoDRQgSAjgvAMIgRACQgOABgOAAQgNAAgNgCg");
	var mask_1_graphics_156 = new cjs.Graphics().p("AssbsQglgFgogQQhEgfgkgxQgYghgBgdIAAgBQgBgPAHgOIAvhmIAAAAIPY+jQA6hzBAhwQCVkaCXkXICZkcIBAh4IAfg3QAOgbAggMIARgFIAIgBQAEgCAEAAIACAAQANgCAOABIABAAQAPAAAOADIAIABIARAFIAHACIAIADIAbALQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAWAMAUAMIAGAEQAPALANAOIAEAFQAMAMAJAOIACAEQAKAPAFAOQAEAOABANQAAAKgCAJIgFAOIgCADIgEAIIgGANIgFAMIgEAHIgJATIgKAVIgRAiIgfA+Iu8drQg5ByhABvQiUEXiXEVIh3DgQg1Bpg0BpQgSAjgwANIgRACQgNABgOAAQgNAAgOgCg");
	var mask_1_graphics_157 = new cjs.Graphics().p("Aswb3QgmgFgngQQhFgfgkgxQgZgiAAgdQgBgQAHgOIAwhnIgBAAIPd+tQA6h0BBhxQCVkbCYkaICakeIBAh5IAfg4QAOgbAggMIARgFIAIgBIAJgCIACAAQANgCAOABIABAAQAOAAAPADIAIABIARAFIAHACIAIADIAbALIAEABQAWAMAUANIAGADQAPAMANAOIAEAEQAMANAJAOIACADQAKAPAFAPQAEAOABANQAAAKgCAJQgCAHgDAHIgCADIgEAIIgGANIgGAMIgDAHIgJATIgLAVIgQAjIgfA+IvBd2Qg6ByhABwQiVEZiXEXIh4DhIhpDVQgTAjgvANIgRACQgOABgOAAQgNAAgOgCg");
	var mask_1_graphics_158 = new cjs.Graphics().p("As0cCQgmgFgogQQhFgfgkgyQgZghAAgeIgBAAQAAgQAHgOIAwhnIgBAAIPj+5QA6h0BBhyQCWkdCYkcICakgIBBh7IAfg4QAOgbAhgMIARgFIAIgBIAIgCIACAAQAOgBAOAAIABAAQAOAAAPADIAIACQAJABAJADIAGACIAIADIAcALIADACQAWALAUANIAGAEQAQALAMAOIAFAFQALAMAKAPIABADQALAPAFAOQAEAPABANQAAAKgCAJQgCAHgEAHIgBAEIgEAIIgGAMIgGANIgDAHIgJATIgLAVIgRAjIgfA/IvGd/Qg7Bzg/BxQiWEbiXEZIh5DjIhqDWQgSAkgwAMIgRADQgOABgOAAQgNAAgOgCg");
	var mask_1_graphics_159 = new cjs.Graphics().p("As4cNQgmgFgogQQhGgfgkgyQgZgigBgeIAAAAQAAgQAGgOIAxhoIgBAAIPo/DQA7h1BBhzQCXkfCZkeICakjIBBh7IAfg4QAPgbAggNIARgFIAIgBIAJgCIACAAQANgBAPAAIABAAQAOAAAPADIAIACIASAEIAGACIAIADIAcALIADACQAXALAUANIAGAEQAPALANAOIAFAFQALANAJAOIACAEQAKAPAGAOQAEAPABANQAAAKgCAJQgCAHgEAIIgBADIgEAIIgGANIgGAMIgEAHIgJATIgKAWIgRAjIgfA/IvMeKQg7B0hABxQiWEdiYEcIh5DkIhqDYQgSAkgxAMIgRADQgOABgOAAQgNAAgOgCg");
	var mask_1_graphics_160 = new cjs.Graphics().p("As8cYQgmgFgpgQQhGgggkgyQgZgigBgeIAAAAQAAgQAGgOIAxhoIgBAAIPt/OQA8h2BAh0QCYkhCakgICbklIBBh8IAfg5QAPgbAhgMQAIgEAJgCIAIgBIAJgCIABAAQAOgBAPAAIAAAAQAPAAAPADIAIACIASAEIAGACIAIADIAcALIAEACQAWALAUAOIAGADQAQAMANAOIAFAFQALAMAJAPIACADQAKAPAGAPQAEAPABANQAAAKgCAJQgCAHgEAIIgBADIgEAIIgGANIgGAMIgEAIIgJATIgKAVIgRAkIggA/IvReUQg7B1hAByQiXEfiYEeIh6DmIhqDZQgTAlgwAMIgSADQgNABgPAAQgNAAgOgCg");
	var mask_1_graphics_161 = new cjs.Graphics().p("AtAcjQgngFgogQQhHgggkgyQgZgjgBgeQAAgQAGgOIAxhpIAAAAIPy/YQA8h3BAh1QCZkjCakiICcknIBBh9IAfg5QAPgcAhgMIARgGIAIgBIAJgCIACAAQAOgBAOAAIABAAQAPAAAPADIAIACIASAEIAGACIAIADIAdALIADACQAXAMAUANIAGAEQAQALANAOIAEAFQAMANAJAOIACAEQAKAPAGAPQAEAPABANQAAAKgCAJIgGAPIgBADIgEAJIgGAMIgGANIgEAHIgJATIgLAWIgRAkIggA/IvVeeQg8B2hABzQiXEhiaEgIh6DoIhqDbQgTAlgxAMIgRADQgOABgOAAQgOAAgOgCg");
	var mask_1_graphics_162 = new cjs.Graphics().p("AtEcuQgngFgpgQQhHgggkgzQgZgigBgfQAAgPAHgPIAwhpIAAAAIP3/jQA9h4BAh1QCZkmCbkkICdkpIBCh+IAfg6QAPgcAhgMQAIgDAJgCIAJgCQAEgBAEAAIACAAQANgCAPAAIABAAQAPAAAPADIAIACIASAEIAGACIAJADIAcALIAEACQAXAMAUANIAGAEQAQAMAMAOIAGAFQALAMAKAPIABAEQAKAPAGAPQAEAPABANQAAAKgCAJIgFAPIgCADIgEAJIgGANIgGAMIgEAIIgJATIgLAWIgRAjIggBAIvbepQg8B2hAB0QiYEkiaEiIh7DpIhqDdQgTAlgyAMIgRADQgNABgPAAQgOAAgOgCg");
	var mask_1_graphics_163 = new cjs.Graphics().p("AtIc5QgngFgpgQQhHggglgzQgZgjgBgeIAAgBQAAgPAGgPIAyhqIgBAAIP9/uQA9h4BBh2QCZkoCckmICdkrIBCh/IAfg6QAPgcAhgNQAIgDAKgCIAIgCIAJgBIACAAQAOgCAOAAIABAAIAeADIAIACIASAEIAHADQAEAAAEACIAdAMIADABQAXAMAVAOIAGADQAQAMANAOIAEAFQAMANAJAPIACADQALAQAFAPQAFAOAAAOQAAAKgCAKIgFAOIgCAEQgCADgCAFIgGANIgGANIgEAHIgJAUIgLAVIgRAkIggBBIvgeyQg9B4hAB0IkzJKIh7DrIhsDeQgTAlgxANIgRADQgOABgPAAQgOAAgOgCg");
	var mask_1_graphics_164 = new cjs.Graphics().p("AtMdEQgngFgpgQQhIggglg0QgZgjgBgeIAAgBQAAgPAGgPIAyhrIQC/4QA9h5BBh3IE2pTICektQAghAAig/IAgg7QAOgcAigNIARgFIAJgCIAIgBIACAAQAOgCAPAAIABAAIAeADIAIACIATAEIAGADIAJACIAcAMIAEACQAXALAUAOIAGAEQAQALANAPIAFAEQAMAOAJAOIACAEQALAQAFAOQAFAPAAAOQAAAKgCAKIgFAPIgCADIgEAIIgGANIgGANIgEAHIgJAUIgLAWIgRAkIghBBIvle9Qg9B4hAB2QiZEnibEmIh8DtIhsDgQgTAlgxANIgSADQgOABgPAAQgOAAgOgCg");
	var mask_1_graphics_165 = new cjs.Graphics().p("AtQdPQgngFgqgRQhIggglg0QgZgjgBgfQAAgQAGgOIAyhsIAAAAMAQHggCQA+h6BBh5IE3pWICekvIBDiBIAgg7QAOgcAigNIASgGIAIgBIAJgCIACAAQAOgBAPAAIABAAQAPAAAPADIAIABIATAFIAGACIAJADIAcALIAEACQAXAMAVAOIAGADQAQAMANAPIAFAEQAMAOAJAPIACADQALAQAFAPQAFAPAAAOQAAAKgCAJIgFAPIgCAEIgEAIIgGANIgGANIgEAHIgKAUIgKAWIgSAlIggBAIvrfIQg9B5hAB2QiaEqicEoIh8DvIhsDhQgTAmgyANIgSACIgdACIgcgCg");
	var mask_1_graphics_166 = new cjs.Graphics().p("AtUdaQgogFgpgRQhIgggmg0QgagkAAgfQgBgQAHgOIAyhsIAAAAMAQNggOQA+h6BBh5QCbkuCdktICfkyIBDiBIAgg7QAPgdAigNIARgFIAJgCIAJgCIACAAQAOgBAPAAIABAAQAPAAAPADIAIACQAJABAKADIAGACIAJADIAdAMIADABQAYAMAUAOIAHAEQAQAMANAOIAFAFQAMANAJAPIACAEQALAQAFAPQAFAPAAAOQAAAKgCAJQgCAIgEAIIgBADIgEAIIgGAOIgGAMIgEAIIgKAUIgLAWIgRAkIghBCIvvfRQg+B6hAB3Ik3JWIh9DxIhsDiQgUAmgyAOIgSACIgcACQgPAAgOgCg");
	var mask_1_graphics_167 = new cjs.Graphics().p("AtXdlQgogFgqgRQhJghglg0QgagjgBgfIAAgBQAAgQAGgOIAzhtIgBAAMAQTggYQA+h7BBh6IE6pfICfk0IBEiCIAgg8QAOgdAjgNQAIgDAJgCIAJgCIAJgCIACAAQAOgBAPAAIABAAQAPAAAPADIAJACIASAEIAHACIAJADIAdAMIADACQAYALAUAOIAHAEQAQAMANAPIAFAEQAMAOAJAPIACAEQALAPAFAPQAFAQAAAOIgBAUQgCAHgEAIIgCADIgEAJIgGANIgGANIgEAHIgJAUIgLAXIgSAkIghBCIv1fcQg9B6hBB4QibEuidEtIh9DyIhtDkQgTAmgzAOIgSACIgdACQgOAAgOgCg");
	var mask_1_graphics_168 = new cjs.Graphics().p("AtbdwQgogFgqgRQhKghglg0QgagkgBgfQAAgRAGgPIAzhtIAAAAMAQXggiQA/h8BBh7IE7pjICgk2IBEiDIAgg8QAPgeAigNIASgFIAIgCIAJgBIACAAQAPgCAPAAIABAAQAPAAAPADIAJACIASAEIAHACIAJADIAdAMIAEACQAXAMAVAOIAGADQARAMANAPIAFAFQAMANAJAPIACAEQALAQAFAPQAFAQAAAOQAAAKgBAKIgGAPIgCADIgEAJIgGANIgGANIgEAIIgKAUIgLAWIgRAlIghBCIv6fmQg+B7hBB6Ik5JeIh+D0IhuDmQgTAmgyAOIgTACIgdACIgcgCg");
	var mask_1_graphics_169 = new cjs.Graphics().p("Atfd7QgpgFgqgRQhJghgmg1QgbgkAAgfQgBgRAHgPIAzhtIAAAAMAQdggtQA/h9BBh8QCdk0CfkzIChk4IBEiEIAgg9QAPgdAigOIASgFIAJgCIAJgBIACAAQAOgCAQAAIAAAAQAQAAAPADIAJACIATAEIAGADIAJACIAdAMQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABQAYAMAVAOIAGAEQAQAMAOAPIAFAEQAMAOAJAPIACAEQALAQAFAPQAFAPAAAPIgBAUIgGAPIgCAEQgCADgCAFIgGAOIgGANIgEAHIgKAUIgLAXIgSAlIghBCIv/fxQg/B7hAB7Ik7JiIh+D2IhuDnQgTAngzAOIgSACIgeACIgcgCg");
	var mask_1_graphics_170 = new cjs.Graphics().p("AtjeGQgpgFgqgRQhKghgmg1QgbgkAAggQgBgRAHgPIAzhuIAAAAMAQigg3QA/h+BCh9IE9prICik6IBEiFIAgg+QAPgdAjgNIASgGIAIgBIAKgCIACAAQAOgCAPAAIABAAQAQAAAPADIAJACIATAEIAGADIAJADIAdALIAEACQAYAMAVAOIAGAEQARAMANAPIAFAFQAMANAKAQIACAEQALAPAFAQQAFAPAAAPIgBAUQgCAHgEAIIgCAEIgEAIIgGAOIgHANIgDAIIgKAUIgLAXIgSAlIghBCIwFf7Qg/B9hBB7QidE0ieEzIh/D3IhuDpQgUAngzAOIgSACIgdACQgPAAgOgCg");
	var mask_1_graphics_171 = new cjs.Graphics().p("AtneRQgpgFgrgRQhKghgng2QgagkAAggQgBgRAHgPIAzhuIAAAAMAQoghDQA/h+BCh+IE+pvICjk9IBEiGIAgg9QAPgeAjgNQAJgEAJgCIAJgBIAJgCIACAAQAPgCAPAAIABAAQAQAAAPADIAJACIATAEIAHADIAIADIAeALIAEACQAXAMAWAOIAGAEQARAMANAPIAFAFQAMAOAKAPIACAEQALAQAFAQQAFAPAAAPQAAAKgCAKQgBAHgEAJIgCADIgEAJIgGANIgHANIgEAIIgJAUIgMAXIgRAmIgiBDMgQJAgFQhAB9hBB8Ik8JrIh/D5IhvDqQgUAogzANIgTADIgdACQgPAAgOgCg");
	var mask_1_graphics_172 = new cjs.Graphics().p("AtrecQgpgFgrgRQhLgigmg1QgaglgBggQgBgQAHgQIA0hvIAAAAMAQsghNQBBh/BBh+IFAp0ICjk/IBFiHIAgg+QAPgeAjgNIASgGIAJgBIAJgCIACAAQAPgCAPAAIABAAQAQAAAQADIAIACIATAEIAHADIAJADIAeALIAEACQAXANAWAOIAGAEQARAMANAPIAFAFQANANAJAQIACAEQALAQAFAQQAFAPABAPQAAAKgCAKIgGAQIgBADIgFAJIgGAOIgGANIgEAIIgKAUIgLAXIgSAlIgiBEMgQPAgPQg/B+hBB9Ik+JvIiAD7IhvDsQgUAog0ANIgSADIgeACQgOAAgPgCg");
	var mask_1_graphics_173 = new cjs.Graphics().p("AtvenQgpgFgrgRQhLgigng2QgbglAAggQgBgRAHgPIA0hwIAAAAMAQyghXQBAiABCh/IFBp5ICklAIBFiIIAgg+QAPgeAkgOQAIgEAKgCIAJgCIAJgBIACAAQAOgCAQAAIABAAQAQAAAPADIAJABIATAFIAHADIAJACIAeANIAEACQAYAMAVAOIAHADQAQANAOAPIAFAFQAMAOAKAPIACAFQALAPAFAQQAFAQABAOQAAALgCAKIgGAPIgBAEIgFAJIgGANIgHAOIgEAIIgJAUIgMAYIgSAlIgiBDMgQTAgbQhAB+hCB+Ik/J0IiAD8IhwDtQgTAog0AOIgTADIgeACQgOAAgPgCg");
	var mask_1_graphics_174 = new cjs.Graphics().p("AtzeyQgqgFgrgSQhLghgng2QgbgmAAggQgBgQAHgQIA0hwIAAAAMAQ3ghiICDkCIFCp8ICklCIBGiJIAgg/QAQgeAjgOQAIgDAKgDIAJgBIAJgCIACAAQAPgCAQAAIABAAQAQABAPACIAJACIATAEIAHADIAJADIAeALIAEACQAYANAWAOIAGAEQARANAOAPIAFAEQAMAOAKAQIACAEQALAQAFAQQAFAQABAOQAAALgCAKQgCAHgEAJIgCAEIgEAIIgGAOIgHAOIgEAHIgKAVIgLAXIgSAmIgiBEMgQZAgkQhACAhCB+IlAJ3IiBD+IhwDwQgUAog0AOIgTADIgeACQgOAAgPgCg");
	var mask_1_graphics_175 = new cjs.Graphics().p("At3e9QgqgFgrgSQhMghgng3QgbglAAghIAAAAQgBgRAHgPIA0hxIAAAAMAQ9ghtICDkCIFDqBICllFIBGiKIAgg+QAQgfAjgOQAJgDAKgDIAJgBIAJgCIACAAQAPgCAQAAIABAAQAQAAAPADIAJACIAUAFIAGACIAJADIAfAMIAEABQAYANAWAPIAGADQARAMAOAQIAFAFQAMAOAKAPIACAFQALAQAFAQQAFAQABAPQAAAKgCAKIgGAQIgCADIgEAJIgGAPIgHAMIgEAIIgKAVIgLAXIgTAnIgiBEMgQeAgvIiCD/IlBJ8IiBD/IhxDyQgUAog0AOIgTADIgeACQgPAAgPgCg");
	var mask_1_graphics_176 = new cjs.Graphics().p("At7fIQgqgFgsgSQhMgigng2QgbgmgBghQAAgQAHgQIA1hxIgBAAMARCgh4ICEkEIFFqFICllHIBGiKIAhhAQAPgfAkgNIASgHIAJgBIAKgCIACAAQAPgCAPAAIABAAQAQABAQACIAJACIAUAEIAHADIAJADIAeAMIAEACQAYANAWAOIAHADQARANANAPIAFAGQANAOAKAPIACAEQALARAFAPQAFAQABAPQAAALgCALQgCAHgEAJIgCADIgEAJIgHANIgGAOIgEAIIgKAVIgLAYIgTAlIgiBGMgQkAg4IiCEBIlDKAIiBECIhxDyQgUAog1APIgTADIgeACQgPAAgPgCg");
	var mask_1_graphics_177 = new cjs.Graphics().p("AvVe8QhNgigng3QgbglgBgiQAAgQAHgQIA1hyIgBAAMAa4g1aIBGiMIAhhAQAQgfAjgOIATgGIAJgBIAJgCIACAAQAQgCAQAAQAQABAQACIAJACIAUAEIAHADIAJADIAeAMIAEACQAZAMAWAPIAGAEQARANAOAPIAFAFQANAOAKAQIACAEQALAQAFARQAGAQAAAOQAAALgCAKQgCAIgEAIIgCAEIgEAJIgHAOIgGANIgEAIIgKAWIgMAXIgSAnIgjBEMgZxAzOIhyD0QgTAog2APIgTADIgeACQg4AAg8gZg");
	var mask_1_graphics_178 = new cjs.Graphics().p("AuIf0QgsgCgtgSIgbgLQg6gdghgrQgLgOgIgOQgWgoAJgiIAAgBQADgQAIgQIAohVIgBAAMAbwg2xIBIiNIAPgeQAJgSANgPQAVgZAngKIAAAAIASgDIAJgBIAJgBIACAAQAQAAARACQAQACAQAEIAKADIATAGIAGADIAHACIAdAOIAEACQAYAOAVARIAFAEQARAPANARIADAFIADACQAJAOAHAOIACAEQAJASACARQACAQgCAPIgCAIIgEAMIgGAPIgCADIgEAJIgHANIgGANIgEAIIgKAVIgNAYIgSAnIgkBGMgaOAzsIh0D3QgGAMgHALQgXAhgxAMIgJABIgTADIgUABIgKgBg");
	var mask_1_graphics_179 = new cjs.Graphics().p("AwIf8QhNgjglg7Qgmg8AXgxIA4h2IgBAAMAd0g6YQAYgwBGgHQBFgHBLAmQBKAmAjA8QAkA8gYAwMgcoA4DIh3D7QgXAxhIALQgRADgSAAQg2AAg6gag");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_1_graphics_9,x:380,y:60}).wait(1).to({graphics:mask_1_graphics_10,x:379.5,y:61.2}).wait(1).to({graphics:mask_1_graphics_11,x:378.9,y:62.3}).wait(1).to({graphics:mask_1_graphics_12,x:378.3,y:63.5}).wait(1).to({graphics:mask_1_graphics_13,x:377.8,y:64.7}).wait(1).to({graphics:mask_1_graphics_14,x:377.2,y:65.8}).wait(1).to({graphics:mask_1_graphics_15,x:376.7,y:67}).wait(1).to({graphics:mask_1_graphics_16,x:376.1,y:68.2}).wait(1).to({graphics:mask_1_graphics_17,x:375.6,y:69.3}).wait(1).to({graphics:mask_1_graphics_18,x:375,y:70.5}).wait(1).to({graphics:mask_1_graphics_19,x:374.4,y:71.7}).wait(1).to({graphics:mask_1_graphics_20,x:373.9,y:72.8}).wait(1).to({graphics:mask_1_graphics_21,x:373.3,y:74}).wait(1).to({graphics:mask_1_graphics_22,x:372.7,y:75.1}).wait(1).to({graphics:mask_1_graphics_23,x:372.2,y:76.3}).wait(1).to({graphics:mask_1_graphics_24,x:371.6,y:77.5}).wait(1).to({graphics:mask_1_graphics_25,x:371.1,y:78.7}).wait(1).to({graphics:mask_1_graphics_26,x:370.5,y:79.8}).wait(1).to({graphics:mask_1_graphics_27,x:370,y:81}).wait(1).to({graphics:mask_1_graphics_28,x:369.4,y:82.1}).wait(1).to({graphics:mask_1_graphics_29,x:368.8,y:83.2}).wait(1).to({graphics:mask_1_graphics_30,x:368.3,y:84.4}).wait(1).to({graphics:mask_1_graphics_31,x:367.7,y:85.6}).wait(1).to({graphics:mask_1_graphics_32,x:367.2,y:86.7}).wait(1).to({graphics:mask_1_graphics_33,x:366.6,y:87.9}).wait(1).to({graphics:mask_1_graphics_34,x:366.1,y:89}).wait(1).to({graphics:mask_1_graphics_35,x:365.5,y:90.2}).wait(1).to({graphics:mask_1_graphics_36,x:364.9,y:91.3}).wait(1).to({graphics:mask_1_graphics_37,x:364.4,y:92.5}).wait(1).to({graphics:mask_1_graphics_38,x:363.8,y:93.6}).wait(1).to({graphics:mask_1_graphics_39,x:363.3,y:94.8}).wait(1).to({graphics:mask_1_graphics_40,x:362.7,y:96}).wait(1).to({graphics:mask_1_graphics_41,x:362.1,y:97.1}).wait(1).to({graphics:mask_1_graphics_42,x:361.6,y:98.3}).wait(1).to({graphics:mask_1_graphics_43,x:361,y:99.4}).wait(1).to({graphics:mask_1_graphics_44,x:360.5,y:100.6}).wait(1).to({graphics:mask_1_graphics_45,x:359.9,y:101.7}).wait(1).to({graphics:mask_1_graphics_46,x:359.4,y:102.9}).wait(1).to({graphics:mask_1_graphics_47,x:358.8,y:104}).wait(1).to({graphics:mask_1_graphics_48,x:358.2,y:105.2}).wait(1).to({graphics:mask_1_graphics_49,x:357.7,y:106.4}).wait(1).to({graphics:mask_1_graphics_50,x:357.1,y:107.5}).wait(1).to({graphics:mask_1_graphics_51,x:356.6,y:108.7}).wait(1).to({graphics:mask_1_graphics_52,x:356,y:109.8}).wait(1).to({graphics:mask_1_graphics_53,x:355.5,y:111}).wait(1).to({graphics:mask_1_graphics_54,x:354.9,y:112.1}).wait(1).to({graphics:mask_1_graphics_55,x:354.3,y:113.3}).wait(1).to({graphics:mask_1_graphics_56,x:353.8,y:114.4}).wait(1).to({graphics:mask_1_graphics_57,x:353.2,y:115.6}).wait(1).to({graphics:mask_1_graphics_58,x:352.7,y:116.7}).wait(1).to({graphics:mask_1_graphics_59,x:352.1,y:117.9}).wait(1).to({graphics:mask_1_graphics_60,x:351.6,y:119.1}).wait(1).to({graphics:mask_1_graphics_61,x:351,y:120.2}).wait(1).to({graphics:mask_1_graphics_62,x:350.4,y:121.4}).wait(1).to({graphics:mask_1_graphics_63,x:349.9,y:122.5}).wait(1).to({graphics:mask_1_graphics_64,x:349.3,y:123.7}).wait(1).to({graphics:mask_1_graphics_65,x:348.7,y:124.8}).wait(1).to({graphics:mask_1_graphics_66,x:348.2,y:126}).wait(1).to({graphics:mask_1_graphics_67,x:347.6,y:127.1}).wait(1).to({graphics:mask_1_graphics_68,x:347.1,y:128.3}).wait(1).to({graphics:mask_1_graphics_69,x:346.5,y:129.4}).wait(1).to({graphics:mask_1_graphics_70,x:346,y:130.6}).wait(1).to({graphics:mask_1_graphics_71,x:345.4,y:131.7}).wait(1).to({graphics:mask_1_graphics_72,x:344.8,y:132.9}).wait(1).to({graphics:mask_1_graphics_73,x:344.3,y:134}).wait(1).to({graphics:mask_1_graphics_74,x:343.7,y:135.2}).wait(1).to({graphics:mask_1_graphics_75,x:343.2,y:136.3}).wait(1).to({graphics:mask_1_graphics_76,x:342.6,y:137.5}).wait(1).to({graphics:mask_1_graphics_77,x:342.1,y:138.6}).wait(1).to({graphics:mask_1_graphics_78,x:341.5,y:139.8}).wait(1).to({graphics:mask_1_graphics_79,x:340.9,y:141}).wait(1).to({graphics:mask_1_graphics_80,x:340.4,y:142.1}).wait(1).to({graphics:mask_1_graphics_81,x:339.8,y:143.3}).wait(1).to({graphics:mask_1_graphics_82,x:339.3,y:144.4}).wait(1).to({graphics:mask_1_graphics_83,x:338.7,y:145.6}).wait(1).to({graphics:mask_1_graphics_84,x:338.1,y:146.7}).wait(1).to({graphics:mask_1_graphics_85,x:337.6,y:147.9}).wait(1).to({graphics:mask_1_graphics_86,x:337,y:149}).wait(1).to({graphics:mask_1_graphics_87,x:336.5,y:150.2}).wait(1).to({graphics:mask_1_graphics_88,x:335.9,y:151.3}).wait(1).to({graphics:mask_1_graphics_89,x:335.4,y:152.5}).wait(1).to({graphics:mask_1_graphics_90,x:334.8,y:153.6}).wait(1).to({graphics:mask_1_graphics_91,x:334.2,y:154.8}).wait(1).to({graphics:mask_1_graphics_92,x:333.7,y:155.9}).wait(1).to({graphics:mask_1_graphics_93,x:333.1,y:157.1}).wait(1).to({graphics:mask_1_graphics_94,x:332.6,y:158.2}).wait(1).to({graphics:mask_1_graphics_95,x:332,y:159.4}).wait(1).to({graphics:mask_1_graphics_96,x:331.5,y:160.5}).wait(1).to({graphics:mask_1_graphics_97,x:330.9,y:161.7}).wait(1).to({graphics:mask_1_graphics_98,x:330.3,y:162.9}).wait(1).to({graphics:mask_1_graphics_99,x:329.8,y:164}).wait(1).to({graphics:mask_1_graphics_100,x:329.2,y:165.2}).wait(1).to({graphics:mask_1_graphics_101,x:328.7,y:166.3}).wait(1).to({graphics:mask_1_graphics_102,x:328.1,y:167.5}).wait(1).to({graphics:mask_1_graphics_103,x:327.6,y:168.6}).wait(1).to({graphics:mask_1_graphics_104,x:327,y:169.8}).wait(1).to({graphics:mask_1_graphics_105,x:326.4,y:170.9}).wait(1).to({graphics:mask_1_graphics_106,x:325.9,y:172.1}).wait(1).to({graphics:mask_1_graphics_107,x:325.3,y:173.2}).wait(1).to({graphics:mask_1_graphics_108,x:324.7,y:174.4}).wait(1).to({graphics:mask_1_graphics_109,x:324.2,y:175.5}).wait(1).to({graphics:mask_1_graphics_110,x:323.6,y:176.7}).wait(1).to({graphics:mask_1_graphics_111,x:323.1,y:177.8}).wait(1).to({graphics:mask_1_graphics_112,x:322.5,y:179}).wait(1).to({graphics:mask_1_graphics_113,x:322,y:180.1}).wait(1).to({graphics:mask_1_graphics_114,x:321.4,y:181.3}).wait(1).to({graphics:mask_1_graphics_115,x:320.8,y:182.5}).wait(1).to({graphics:mask_1_graphics_116,x:320.3,y:183.6}).wait(1).to({graphics:mask_1_graphics_117,x:319.7,y:184.8}).wait(1).to({graphics:mask_1_graphics_118,x:319.2,y:185.9}).wait(1).to({graphics:mask_1_graphics_119,x:318.6,y:187.1}).wait(1).to({graphics:mask_1_graphics_120,x:318.1,y:188.2}).wait(1).to({graphics:mask_1_graphics_121,x:317.5,y:189.4}).wait(1).to({graphics:mask_1_graphics_122,x:316.9,y:190.5}).wait(1).to({graphics:mask_1_graphics_123,x:316.4,y:191.7}).wait(1).to({graphics:mask_1_graphics_124,x:315.8,y:192.8}).wait(1).to({graphics:mask_1_graphics_125,x:315.3,y:194}).wait(1).to({graphics:mask_1_graphics_126,x:314.7,y:195.2}).wait(1).to({graphics:mask_1_graphics_127,x:314.1,y:196.3}).wait(1).to({graphics:mask_1_graphics_128,x:313.6,y:197.5}).wait(1).to({graphics:mask_1_graphics_129,x:313,y:198.6}).wait(1).to({graphics:mask_1_graphics_130,x:312.5,y:199.8}).wait(1).to({graphics:mask_1_graphics_131,x:311.9,y:200.9}).wait(1).to({graphics:mask_1_graphics_132,x:311.4,y:202.1}).wait(1).to({graphics:mask_1_graphics_133,x:310.8,y:203.2}).wait(1).to({graphics:mask_1_graphics_134,x:310.2,y:204.4}).wait(1).to({graphics:mask_1_graphics_135,x:309.7,y:205.5}).wait(1).to({graphics:mask_1_graphics_136,x:309.1,y:206.7}).wait(1).to({graphics:mask_1_graphics_137,x:308.6,y:207.8}).wait(1).to({graphics:mask_1_graphics_138,x:308,y:209}).wait(1).to({graphics:mask_1_graphics_139,x:307.5,y:210.1}).wait(1).to({graphics:mask_1_graphics_140,x:306.9,y:211.3}).wait(1).to({graphics:mask_1_graphics_141,x:306.3,y:212.5}).wait(1).to({graphics:mask_1_graphics_142,x:305.8,y:213.6}).wait(1).to({graphics:mask_1_graphics_143,x:305.2,y:214.8}).wait(1).to({graphics:mask_1_graphics_144,x:304.7,y:215.9}).wait(1).to({graphics:mask_1_graphics_145,x:304.1,y:217.1}).wait(1).to({graphics:mask_1_graphics_146,x:303.5,y:218.2}).wait(1).to({graphics:mask_1_graphics_147,x:303,y:219.4}).wait(1).to({graphics:mask_1_graphics_148,x:302.4,y:220.5}).wait(1).to({graphics:mask_1_graphics_149,x:301.9,y:221.7}).wait(1).to({graphics:mask_1_graphics_150,x:301.3,y:222.9}).wait(1).to({graphics:mask_1_graphics_151,x:300.7,y:224}).wait(1).to({graphics:mask_1_graphics_152,x:300.2,y:225.2}).wait(1).to({graphics:mask_1_graphics_153,x:299.6,y:226.3}).wait(1).to({graphics:mask_1_graphics_154,x:299.1,y:227.5}).wait(1).to({graphics:mask_1_graphics_155,x:298.5,y:228.6}).wait(1).to({graphics:mask_1_graphics_156,x:297.9,y:229.8}).wait(1).to({graphics:mask_1_graphics_157,x:297.4,y:230.9}).wait(1).to({graphics:mask_1_graphics_158,x:296.8,y:232.1}).wait(1).to({graphics:mask_1_graphics_159,x:296.3,y:233.2}).wait(1).to({graphics:mask_1_graphics_160,x:295.7,y:234.4}).wait(1).to({graphics:mask_1_graphics_161,x:295.2,y:235.5}).wait(1).to({graphics:mask_1_graphics_162,x:294.6,y:236.7}).wait(1).to({graphics:mask_1_graphics_163,x:294,y:237.8}).wait(1).to({graphics:mask_1_graphics_164,x:293.5,y:239}).wait(1).to({graphics:mask_1_graphics_165,x:292.9,y:240.2}).wait(1).to({graphics:mask_1_graphics_166,x:292.4,y:241.3}).wait(1).to({graphics:mask_1_graphics_167,x:291.8,y:242.5}).wait(1).to({graphics:mask_1_graphics_168,x:291.2,y:243.6}).wait(1).to({graphics:mask_1_graphics_169,x:290.7,y:244.8}).wait(1).to({graphics:mask_1_graphics_170,x:290.1,y:245.9}).wait(1).to({graphics:mask_1_graphics_171,x:289.6,y:247.1}).wait(1).to({graphics:mask_1_graphics_172,x:289,y:248.2}).wait(1).to({graphics:mask_1_graphics_173,x:288.4,y:249.4}).wait(1).to({graphics:mask_1_graphics_174,x:287.9,y:250.6}).wait(1).to({graphics:mask_1_graphics_175,x:287.3,y:251.7}).wait(1).to({graphics:mask_1_graphics_176,x:286.8,y:252.9}).wait(1).to({graphics:mask_1_graphics_177,x:286.2,y:254}).wait(1).to({graphics:mask_1_graphics_178,x:283.9,y:257.3}).wait(1).to({graphics:mask_1_graphics_179,x:281.4,y:260.5}).wait(105));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(20,1,1).p("At3bmMAbvg3L");
	this.shape_1.setTransform(276.8,273.4);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(9).to({_off:false},0).wait(275));

	// number
	this.instance_2 = new lib._1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(275,275);
	this.instance_2.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(284));

	// Background
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#F59E9E").ss(3,1,1).p("EAq+Aq+MhV7AAAMAAAhV7MBV7AAAg");
	this.shape_2.setTransform(275,275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F6E7E7").s().p("Egq9Aq+MAAAhV7MBV7AAAMAAABV7g");
	this.shape_3.setTransform(275,275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(284));

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