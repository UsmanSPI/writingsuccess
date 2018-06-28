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


(lib._4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApEX9QgsgmAAgzIARhHIKHyrIogAbIomApIgbAAQgxAAgmghQgjgiAAg4IAVhOINR4MQAihEBOABQA2gBApAmQAsAkAAA2IgQBFIrdUtIIAgeIH3gOIMB2CQAihEBOABQAygBAtAmQAsAkAAA2IgWBFIq5UHIDwgGICjAGICRAVIBnA0QApAgAAAxQAAA4ghAnQgdApg3AAIl1gTIlUgLIrQUwQgmBGhKAAQg2AAgpgmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120.4,-157.1,240.8,314.3);


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
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AAAAeIAAg7");
	this.shape_1.setTransform(0,-101.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AAAAiIAAhE");
	this.shape_2.setTransform(0,-100.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("AAAAnIAAhN");
	this.shape_3.setTransform(0,-100.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("AAAAsIAAhX");
	this.shape_4.setTransform(0,-99.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(5,1,1).p("AAAAxIAAhh");
	this.shape_5.setTransform(0,-99.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(5,1,1).p("AAAA2IAAhr");
	this.shape_6.setTransform(0,-98.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(5,1,1).p("AAAA6IAAh0");
	this.shape_7.setTransform(0,-98.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(5,1,1).p("AAAA/IAAh9");
	this.shape_8.setTransform(0,-97.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(5,1,1).p("AAABEIAAiH");
	this.shape_9.setTransform(0,-97.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(5,1,1).p("AAABJIAAiR");
	this.shape_10.setTransform(0,-96.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5,1,1).p("AAABOIAAib");
	this.shape_11.setTransform(0,-96.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(5,1,1).p("AAABSIAAij");
	this.shape_12.setTransform(0,-95.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(5,1,1).p("AAABXIAAit");
	this.shape_13.setTransform(0,-95.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(5,1,1).p("AAABcIAAi3");
	this.shape_14.setTransform(0,-94.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(5,1,1).p("AAABhIAAjB");
	this.shape_15.setTransform(0,-94.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(5,1,1).p("AAABmIAAjK");
	this.shape_16.setTransform(0,-93.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(5,1,1).p("AAABqIAAjT");
	this.shape_17.setTransform(0,-93.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(5,1,1).p("AAABvIAAjd");
	this.shape_18.setTransform(0,-92.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(5,1,1).p("AAAB0IAAjn");
	this.shape_19.setTransform(0,-92.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(5,1,1).p("AAAB4IAAjv");
	this.shape_20.setTransform(0,-92);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(5,1,1).p("AAAB9IAAj5");
	this.shape_21.setTransform(0,-91.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(5,1,1).p("AAACCIAAkD");
	this.shape_22.setTransform(0,-91);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(5,1,1).p("AAACHIAAkN");
	this.shape_23.setTransform(0,-90.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(5,1,1).p("AAACMIAAkX");
	this.shape_24.setTransform(0,-90.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(5,1,1).p("AAACQIAAkg");
	this.shape_25.setTransform(0,-89.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(5,1,1).p("AAACVIAAkp");
	this.shape_26.setTransform(0,-89.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(5,1,1).p("AAACaIAAkz");
	this.shape_27.setTransform(0,-88.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(5,1,1).p("AAACfIAAk9");
	this.shape_28.setTransform(0,-88.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(5,1,1).p("AAACjIAAlG");
	this.shape_29.setTransform(0,-87.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(5,1,1).p("AAACoIAAlP");
	this.shape_30.setTransform(0,-87.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(5,1,1).p("AAACtIAAlZ");
	this.shape_31.setTransform(0,-86.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(5,1,1).p("AAACyIAAlj");
	this.shape_32.setTransform(0,-86.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(5,1,1).p("AAAC3IAAlt");
	this.shape_33.setTransform(0,-85.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(5,1,1).p("AAAC8IAAl3");
	this.shape_34.setTransform(0,-85.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(5,1,1).p("AAADAIAAl/");
	this.shape_35.setTransform(0,-84.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(5,1,1).p("AAADFIAAmJ");
	this.shape_36.setTransform(0,-84.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(5,1,1).p("AAADKIAAmT");
	this.shape_37.setTransform(0,-83.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(5,1,1).p("AAADPIAAmc");
	this.shape_38.setTransform(0,-83.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(5,1,1).p("AAADTIAAml");
	this.shape_39.setTransform(0,-82.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(5,1,1).p("AAADYIAAmv");
	this.shape_40.setTransform(0,-82.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(5,1,1).p("AAADdIAAm5");
	this.shape_41.setTransform(0,-81.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(5,1,1).p("AAADiIAAnD");
	this.shape_42.setTransform(0,-81.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(5,1,1).p("AAADmIAAnL");
	this.shape_43.setTransform(0,-81);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(5,1,1).p("AAADrIAAnV");
	this.shape_44.setTransform(0,-80.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(5,1,1).p("AAADwIAAnf");
	this.shape_45.setTransform(0,-80);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(5,1,1).p("AAAD1IAAnp");
	this.shape_46.setTransform(0,-79.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(5,1,1).p("AAAD5IAAny");
	this.shape_47.setTransform(0,-79.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(5,1,1).p("AAAD+IAAn7");
	this.shape_48.setTransform(0,-78.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(5,1,1).p("AAAEDIAAoF");
	this.shape_49.setTransform(0,-78.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(5,1,1).p("AAAEIIAAoP");
	this.shape_50.setTransform(0,-77.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(5,1,1).p("AAAENIAAoZ");
	this.shape_51.setTransform(0,-77.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(5,1,1).p("AAAESIAAoi");
	this.shape_52.setTransform(0,-76.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(5,1,1).p("AAAEWIAAor");
	this.shape_53.setTransform(0,-76.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(5,1,1).p("AAAEbIAAo1");
	this.shape_54.setTransform(0,-75.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(5,1,1).p("AAAEgIAAo/");
	this.shape_55.setTransform(0,-75.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(5,1,1).p("AAAElIAApJ");
	this.shape_56.setTransform(0,-74.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(5,1,1).p("AAAEpIAApR");
	this.shape_57.setTransform(0,-74.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(5,1,1).p("AAAEuIAApb");
	this.shape_58.setTransform(0,-73.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(5,1,1).p("AAAEzIAApl");
	this.shape_59.setTransform(0,-73.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(5,1,1).p("AAAE4IAApv");
	this.shape_60.setTransform(0,-72.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(5,1,1).p("AAAE9IAAp4");
	this.shape_61.setTransform(0,-72.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(5,1,1).p("AAAFBIAAqB");
	this.shape_62.setTransform(0,-71.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(5,1,1).p("AAAFGIAAqL");
	this.shape_63.setTransform(0,-71.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(5,1,1).p("AAAFLIAAqV");
	this.shape_64.setTransform(0,-71);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(5,1,1).p("AAAFQIAAqf");
	this.shape_65.setTransform(0,-70.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(5,1,1).p("AAAFUIAAqn");
	this.shape_66.setTransform(0,-70);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(5,1,1).p("AAAFZIAAqx");
	this.shape_67.setTransform(0,-69.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(5,1,1).p("AAAFeIAAq7");
	this.shape_68.setTransform(0,-69);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(5,1,1).p("AAAFjIAArF");
	this.shape_69.setTransform(0,-68.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(5,1,1).p("AAAFnIAArO");
	this.shape_70.setTransform(0,-68.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(5,1,1).p("AAAFsIAArX");
	this.shape_71.setTransform(0,-67.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(5,1,1).p("AAAFxIAArh");
	this.shape_72.setTransform(0,-67.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(5,1,1).p("AAAF2IAArr");
	this.shape_73.setTransform(0,-66.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(5,1,1).p("AAAF7IAAr0");
	this.shape_74.setTransform(0,-66.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(5,1,1).p("AAAF/IAAr9");
	this.shape_75.setTransform(0,-65.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(5,1,1).p("AAAGEIAAsH");
	this.shape_76.setTransform(0,-65.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(5,1,1).p("AAAGJIAAsR");
	this.shape_77.setTransform(0,-64.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(5,1,1).p("AAAGOIAAsb");
	this.shape_78.setTransform(0,-64.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(5,1,1).p("AAAGTIAAsl");
	this.shape_79.setTransform(0,-63.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(5,1,1).p("AAAGXIAAst");
	this.shape_80.setTransform(0,-63.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(5,1,1).p("AAAGcIAAs3");
	this.shape_81.setTransform(0,-62.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(5,1,1).p("AAAGhIAAtB");
	this.shape_82.setTransform(0,-62.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(5,1,1).p("AAAGmIAAtL");
	this.shape_83.setTransform(0,-61.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(5,1,1).p("AAAGqIAAtT");
	this.shape_84.setTransform(0,-61.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(5,1,1).p("AAAGvIAAtd");
	this.shape_85.setTransform(0,-60.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(5,1,1).p("AAAG0IAAtn");
	this.shape_86.setTransform(0,-60.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(5,1,1).p("AAAG5IAAtx");
	this.shape_87.setTransform(0,-60);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(5,1,1).p("AAAG+IAAt7");
	this.shape_88.setTransform(0,-59.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(5,1,1).p("AAAnBIAAOD");
	this.shape_89.setTransform(0,-59);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).wait(1));

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0.3,-103.8,1,1,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-16.8},89).wait(1));

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
(lib.WS_Cursive_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_780 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(780).call(this.frame_780).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(253.9,129.2,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[253.8,129.3,213.7,204.7,173.6,280.1]}},170).wait(23).to({x:174.8,y:281.2},0).to({guide:{path:[174.9,281.2,282,277,383.8,283.5]}},195).wait(18).to({x:379.1,y:131.1},0).to({guide:{path:[379.1,131.2,301.1,275.8,223.2,420.5]}},202).wait(20).to({x:250,y:430},0).to({guide:{path:[250.1,430,288.6,421.7,322,485.9,338.5,517.6,350.3,528.7,362.1,539.8,369.2,530.4,369.3,530.1,369.5,529.9,441.9,413.7,477.4,393.6,511.4,374.4,629.5,443.8]}},143).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(173.7,284,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},170).wait(23).to({_off:false,x:375.7,y:283},0).to({_off:true},195).wait(18).to({_off:false,x:224.7,y:419},0).to({_off:true},202).wait(164));

	// arrow copy 2
	this.instance_1 = new lib.ar5("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(363.9,248.6,1,1,25.4,0,0,-0.1,-1.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(415).to({_off:false},0).wait(366));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_415 = new cjs.Graphics().p("AkfAaIB4jqIHHDOIhsDTg");
	var mask_graphics_416 = new cjs.Graphics().p("AkjAhIB/j4IHIDOIhzDhg");
	var mask_graphics_417 = new cjs.Graphics().p("AknApICHkHIHIDOIh7Dvg");
	var mask_graphics_418 = new cjs.Graphics().p("AkqAwICOkVIHHDOIiCD9g");
	var mask_graphics_419 = new cjs.Graphics().p("AkuA3ICVkkIHIDOIiKEMg");
	var mask_graphics_420 = new cjs.Graphics().p("AkyA+ICdkyIHHDOIiREbg");
	var mask_graphics_421 = new cjs.Graphics().p("Ak1BFICklAIHHDOIiYEpg");
	var mask_graphics_422 = new cjs.Graphics().p("Ak5BMICrlOIHIDOIigE3g");
	var mask_graphics_423 = new cjs.Graphics().p("Ak8BUICyleIHHDPIimFGg");
	var mask_graphics_424 = new cjs.Graphics().p("AlABbIC6lsIHHDOIiuFVg");
	var mask_graphics_425 = new cjs.Graphics().p("AlEBhIDBl5IHIDOIi2Fjg");
	var mask_graphics_426 = new cjs.Graphics().p("AlIBpIDJmIIHHDNIi9Fzg");
	var mask_graphics_427 = new cjs.Graphics().p("AlLBwIDPmXIHIDPIjFGAg");
	var mask_graphics_428 = new cjs.Graphics().p("AlOB3IDWmlIHHDPIjLGOg");
	var mask_graphics_429 = new cjs.Graphics().p("AlSB/IDem0IHHDOIjSGdg");
	var mask_graphics_430 = new cjs.Graphics().p("AlWCGIDlnCIHIDOIjaGrg");
	var mask_graphics_431 = new cjs.Graphics().p("AlZCMIDsnQIHHDOIjhG7g");
	var mask_graphics_432 = new cjs.Graphics().p("AleCUID1nfIHHDOIjpHJg");
	var mask_graphics_433 = new cjs.Graphics().p("AlhCbID7ntIHIDOIjxHXg");
	var mask_graphics_434 = new cjs.Graphics().p("AllCiIEDn7IHIDOIj4Hlg");
	var mask_graphics_435 = new cjs.Graphics().p("AloCpIEKoKIHHDPIj/H0g");
	var mask_graphics_436 = new cjs.Graphics().p("AlsCwIERoYIHIDOIkGIDg");
	var mask_graphics_437 = new cjs.Graphics().p("AlvC4IEYonIHIDOIkOIRg");
	var mask_graphics_438 = new cjs.Graphics().p("AlzC+IEgo1IHHDOIkVIhg");
	var mask_graphics_439 = new cjs.Graphics().p("Al3DGIEnpEIHIDPIkdIug");
	var mask_graphics_440 = new cjs.Graphics().p("Al7DNIEvpSIHIDOIklI9g");
	var mask_graphics_441 = new cjs.Graphics().p("Al+DUIE2pgIHHDOIkrJLg");
	var mask_graphics_442 = new cjs.Graphics().p("AmCDbIE9puIHIDOIkzJZg");
	var mask_graphics_443 = new cjs.Graphics().p("AmFDiIFEp9IHHDOIk6Jpg");
	var mask_graphics_444 = new cjs.Graphics().p("AmJDpIFMqLIHHDPIlBJ2g");
	var mask_graphics_445 = new cjs.Graphics().p("AmNDwIFTqZIHIDOIlJKFg");
	var mask_graphics_446 = new cjs.Graphics().p("AmQD4IFaqpIHHDPIlQKUg");
	var mask_graphics_447 = new cjs.Graphics().p("AmUD/IFiq3IHHDPIlXKig");
	var mask_graphics_448 = new cjs.Graphics().p("AmYEGIFprFIHIDOIlfKxg");
	var mask_graphics_449 = new cjs.Graphics().p("AmbENIFwrTIHHDOIlmK/g");
	var mask_graphics_450 = new cjs.Graphics().p("AmfEUIF3riIHIDOIluLOg");
	var mask_graphics_451 = new cjs.Graphics().p("AmjEbIF/rwIHIDPIl1Lcg");
	var mask_graphics_452 = new cjs.Graphics().p("AmmEjIGGr/IHHDOIl8Lrg");
	var mask_graphics_453 = new cjs.Graphics().p("AmqEqIGNsNIHIDOImEL6g");
	var mask_graphics_454 = new cjs.Graphics().p("AmuExIGVscIHIDPImLMIg");
	var mask_graphics_455 = new cjs.Graphics().p("AmxE4IGcsqIHHDPImSMWg");
	var mask_graphics_456 = new cjs.Graphics().p("Am1E/IGks4IHHDOImaMlg");
	var mask_graphics_457 = new cjs.Graphics().p("Am5FGIGrtHIHIDPImiMzg");
	var mask_graphics_458 = new cjs.Graphics().p("Am8FNIGytVIHHDPImoNCg");
	var mask_graphics_459 = new cjs.Graphics().p("AnAFUIG6tjIHHDOImwNRg");
	var mask_graphics_460 = new cjs.Graphics().p("AnDFbIHAtxIHHDOIm2Nfg");
	var mask_graphics_461 = new cjs.Graphics().p("AnHFiIHHt/IHIDOIm+Ntg");
	var mask_graphics_462 = new cjs.Graphics().p("AnLFqIHPuPIHIDPInGN8g");
	var mask_graphics_463 = new cjs.Graphics().p("AnPFxIHWudIHIDPInNOKg");
	var mask_graphics_464 = new cjs.Graphics().p("AnSF4IHdurIHIDOInUOZg");
	var mask_graphics_465 = new cjs.Graphics().p("AnWF/IHku5IHJDOInbOog");
	var mask_graphics_466 = new cjs.Graphics().p("AnZGGIHrvIIHIDPIniO2g");
	var mask_graphics_467 = new cjs.Graphics().p("AndGNIHyvWIHJDPInpPEg");
	var mask_graphics_468 = new cjs.Graphics().p("AnhGUIH6vkIHJDOInxPTg");
	var mask_graphics_469 = new cjs.Graphics().p("AnkGbIIBvyIHIDOIn4Phg");
	var mask_graphics_470 = new cjs.Graphics().p("AnoGjIIIwCIHJDPIoAPwg");
	var mask_graphics_471 = new cjs.Graphics().p("AnsGqIIQwQIHJDOIoIP/g");
	var mask_graphics_472 = new cjs.Graphics().p("AnvGxIIXweIHIDOIoOQNg");
	var mask_graphics_473 = new cjs.Graphics().p("AnzG4IIewtIHJDPIoWQcg");
	var mask_graphics_474 = new cjs.Graphics().p("An3G/IImw7IHJDPIoeQqg");
	var mask_graphics_475 = new cjs.Graphics().p("An6HGIItxJIHIDPIokQ4g");
	var mask_graphics_476 = new cjs.Graphics().p("An+HOII0xZIHJDPIosRIg");
	var mask_graphics_477 = new cjs.Graphics().p("AoCHVII8xmIHJDOIo0RWg");
	var mask_graphics_478 = new cjs.Graphics().p("AoFHbIJDx0IHIDOIo6Rlg");
	var mask_graphics_479 = new cjs.Graphics().p("AoJHjIJKyDIHJDPIpCRyg");
	var mask_graphics_480 = new cjs.Graphics().p("AoNHqIJSySIHIDPIpJSBg");
	var mask_graphics_481 = new cjs.Graphics().p("AoQHxIJZygIHIDPIpQSQg");
	var mask_graphics_482 = new cjs.Graphics().p("AoUH5IJgyvIHJDPIpYSeg");
	var mask_graphics_483 = new cjs.Graphics().p("AoXH/IJny8IHIDOIpfStg");
	var mask_graphics_484 = new cjs.Graphics().p("AobIHIJuzLIHJDOIpnS7g");
	var mask_graphics_485 = new cjs.Graphics().p("AofIOIJ2zaIHJDPIpuTKg");
	var mask_graphics_486 = new cjs.Graphics().p("AojIVIJ+zoIHJDPIp2TYg");
	var mask_graphics_487 = new cjs.Graphics().p("AomIcIKEz2IHJDPIp9Tmg");
	var mask_graphics_488 = new cjs.Graphics().p("AoqIjIKM0FIHJDPIqET1g");
	var mask_graphics_489 = new cjs.Graphics().p("AotIqIKT0TIHJDPIqNUEg");
	var mask_graphics_490 = new cjs.Graphics().p("AoxIxIKa0hIHJDOIqTUTg");
	var mask_graphics_491 = new cjs.Graphics().p("Ao1I4IKi0vIHJDOIqaUhg");
	var mask_graphics_492 = new cjs.Graphics().p("Ao5I/IKq0+IHJDPIqiUwg");
	var mask_graphics_493 = new cjs.Graphics().p("Ao8JHIKx1NIHIDPIqpU+g");
	var mask_graphics_494 = new cjs.Graphics().p("Ao/JOIK31bIHJDPIqxVMg");
	var mask_graphics_495 = new cjs.Graphics().p("ApDJVIK/1pIHIDOIq4Vbg");
	var mask_graphics_496 = new cjs.Graphics().p("ApHJdILH15IHIDPIq/Vpg");
	var mask_graphics_497 = new cjs.Graphics().p("ApKJjILN2GIHJDPIrHV4g");
	var mask_graphics_498 = new cjs.Graphics().p("ApOJqILV2UIHIDPIrOWGg");
	var mask_graphics_499 = new cjs.Graphics().p("ApSJyILc2jIHJDPIrVWUg");
	var mask_graphics_500 = new cjs.Graphics().p("ApWJ5ILk2xIHIDOIrcWjg");
	var mask_graphics_501 = new cjs.Graphics().p("ApZKAILr3AIHIDPIrkWyg");
	var mask_graphics_502 = new cjs.Graphics().p("ApdKHILy3OIHJDPIrsXAg");
	var mask_graphics_503 = new cjs.Graphics().p("ApgKOIL53dIHIDPIryXQg");
	var mask_graphics_504 = new cjs.Graphics().p("ApkKVIMB3rIHIDPIr6Xeg");
	var mask_graphics_505 = new cjs.Graphics().p("ApoKdIMI36IHJDPIsCXsg");
	var mask_graphics_506 = new cjs.Graphics().p("AprKjIMP4HIHIDPIsIX6g");
	var mask_graphics_507 = new cjs.Graphics().p("ApvKrIMX4WIHIDPIsQYIg");
	var mask_graphics_508 = new cjs.Graphics().p("ApzKyIMe4lIHJDPIsYYYg");
	var mask_graphics_509 = new cjs.Graphics().p("Ap2K5IMl4zIHIDPIseYmg");
	var mask_graphics_510 = new cjs.Graphics().p("Ap6LAIMt5BIHIDPIsmY0g");
	var mask_graphics_511 = new cjs.Graphics().p("Ap+LHIM05QIHJDPIsuZDg");
	var mask_graphics_512 = new cjs.Graphics().p("AqBLOIM75eIHIDPIs0ZSg");
	var mask_graphics_513 = new cjs.Graphics().p("AqFLVIND5sIHIDPIs9Zgg");
	var mask_graphics_514 = new cjs.Graphics().p("AqJLdINK57IHIDPItDZug");
	var mask_graphics_515 = new cjs.Graphics().p("AqMLjINR6JIHIDPItLZ9g");
	var mask_graphics_516 = new cjs.Graphics().p("AqQLrINZ6YIHIDPItSaMg");
	var mask_graphics_517 = new cjs.Graphics().p("AqTLyINf6mIHIDPItZaag");
	var mask_graphics_518 = new cjs.Graphics().p("AqXL5INn60IHIDPIthaog");
	var mask_graphics_519 = new cjs.Graphics().p("AqbMAINu7DIHJDPItoa4g");
	var mask_graphics_520 = new cjs.Graphics().p("AqfMHIN27RIHIDPItwbGg");
	var mask_graphics_521 = new cjs.Graphics().p("AqiMOIN87fIHJDPIt3bUg");
	var mask_graphics_522 = new cjs.Graphics().p("AqmMWIOE7uIHJDPIt+big");
	var mask_graphics_523 = new cjs.Graphics().p("AqqMdIOM79IHIDQIuFbxg");
	var mask_graphics_524 = new cjs.Graphics().p("AqtMkIOS8LIHJDPIuNcAg");
	var mask_graphics_525 = new cjs.Graphics().p("AqwMrIOZ8ZIHIDPIuUcOg");
	var mask_graphics_526 = new cjs.Graphics().p("Aq0MyIOh8nIHIDPIucccg");
	var mask_graphics_527 = new cjs.Graphics().p("Aq4M5IOo82IHJDPIujcrg");
	var mask_graphics_528 = new cjs.Graphics().p("Aq8NBIOw9FIHJDPIurc6g");
	var mask_graphics_529 = new cjs.Graphics().p("Aq/NIIO39TIHIDPIuydIg");
	var mask_graphics_530 = new cjs.Graphics().p("ArDNPIO+9hIHJDPIu5dXg");
	var mask_graphics_531 = new cjs.Graphics().p("ArGNWIPF9wIHJDPIvBdmg");
	var mask_graphics_532 = new cjs.Graphics().p("ArKNdIPN9+IHIDQIvIdzg");
	var mask_graphics_533 = new cjs.Graphics().p("ArONkIPV+MIHIDPIvQeCg");
	var mask_graphics_534 = new cjs.Graphics().p("ArSNrIPc+aIHJDPIvXeQg");
	var mask_graphics_535 = new cjs.Graphics().p("ArVNyIPj+pIHIDQIveefg");
	var mask_graphics_536 = new cjs.Graphics().p("ArZN5IPq+3IHJDPIvmeug");
	var mask_graphics_537 = new cjs.Graphics().p("ArcOBIPx/GIHJDPIvte8g");
	var mask_graphics_538 = new cjs.Graphics().p("ArgOHIP5/TIHIDPIv0fKg");
	var mask_graphics_539 = new cjs.Graphics().p("ArkOPIQA/jIHJDQIv8fZg");
	var mask_graphics_540 = new cjs.Graphics().p("ArnOWIQH/xIHIDPIwCfog");
	var mask_graphics_541 = new cjs.Graphics().p("ArrOdIQP//IHIDPIwKf2g");
	var mask_graphics_542 = new cjs.Graphics().p("ArvOkMAQWggNIHJDPMgQSAgFg");
	var mask_graphics_543 = new cjs.Graphics().p("AryOrMAQdggcIHIDPMgQYAgUg");
	var mask_graphics_544 = new cjs.Graphics().p("Ar2OyMAQkggqIHJDQMgQhAghg");
	var mask_graphics_545 = new cjs.Graphics().p("Ar6O5MAQsgg4IHJDPMgQoAgwg");
	var mask_graphics_546 = new cjs.Graphics().p("Ar9PBMAQzghHIHIDPMgQvAg+g");
	var mask_graphics_547 = new cjs.Graphics().p("AsBPIMAQ6ghWIHJDPMgQ2AhOg");
	var mask_graphics_548 = new cjs.Graphics().p("AsFPPMARCghkIHJDPMgQ+Ahcg");
	var mask_graphics_549 = new cjs.Graphics().p("AsIPWMARJghyIHIDPMgRFAhqg");
	var mask_graphics_550 = new cjs.Graphics().p("AsMPdMARRgiBIHIDPMgRNAh6g");
	var mask_graphics_551 = new cjs.Graphics().p("AsQPkMARYgiPIHJDQMgRVAiHg");
	var mask_graphics_552 = new cjs.Graphics().p("AsTPsMARfgieIHIDPMgRbAiWg");
	var mask_graphics_553 = new cjs.Graphics().p("AsXPzMARngisIHIDPMgRiAilg");
	var mask_graphics_554 = new cjs.Graphics().p("AsaP6MARtgi6IHIDPMgRpAiyg");
	var mask_graphics_555 = new cjs.Graphics().p("AseQBMAR1gjJIHIDPMgRxAjCg");
	var mask_graphics_556 = new cjs.Graphics().p("AsiQIMAR9gjXIHIDQMgR5AjPg");
	var mask_graphics_557 = new cjs.Graphics().p("AsmQPMASEgjmIHIDQMgSAAjfg");
	var mask_graphics_558 = new cjs.Graphics().p("AspQWMASLgj0IHIDQMgSHAjtg");
	var mask_graphics_559 = new cjs.Graphics().p("AstQdMASTgkCIHIDPMgSPAj8g");
	var mask_graphics_560 = new cjs.Graphics().p("AswQlMASZgkRIHIDPMgSVAkKg");
	var mask_graphics_561 = new cjs.Graphics().p("As0QsMASggkfIHJDPMgSdAkYg");
	var mask_graphics_562 = new cjs.Graphics().p("As4QzMASogkuIHJDQMgSlAkng");
	var mask_graphics_563 = new cjs.Graphics().p("As8Q6MASwgk8IHIDQMgSsAk1g");
	var mask_graphics_564 = new cjs.Graphics().p("As/RBMAS2glKIHJDPMgS0AlEg");
	var mask_graphics_565 = new cjs.Graphics().p("AtDRIMAS+glYIHJDPMgS7AlSg");
	var mask_graphics_566 = new cjs.Graphics().p("AtGRQMATFgloIHIDQMgTCAlhg");
	var mask_graphics_567 = new cjs.Graphics().p("AtKRWMATMgl1IHJDPMgTJAlwg");
	var mask_graphics_568 = new cjs.Graphics().p("AtORdMATUgmDIHJDPMgTRAl+g");
	var mask_graphics_569 = new cjs.Graphics().p("AtRRlMATbgmTIHIDQMgTYAmNg");
	var mask_graphics_570 = new cjs.Graphics().p("AtVRsMATigmhIHJDQMgTgAmbg");
	var mask_graphics_571 = new cjs.Graphics().p("AtZRzMATqgmvIHJDPMgTnAmqg");
	var mask_graphics_572 = new cjs.Graphics().p("AtcR6MATxgm9IHIDPMgTuAm4g");
	var mask_graphics_573 = new cjs.Graphics().p("AtgSBMAT4gnMIHJDQMgT2AnHg");
	var mask_graphics_574 = new cjs.Graphics().p("AtkSIMAUAgnaIHIDQMgT9AnVg");
	var mask_graphics_575 = new cjs.Graphics().p("AtnSQMAUHgnpIHIDQMgUEAnjg");
	var mask_graphics_576 = new cjs.Graphics().p("AtrSXMAUOgn3IHJDPMgUMAnyg");
	var mask_graphics_577 = new cjs.Graphics().p("AtuSeMAUVgoFIHIDPMgUTAoAg");
	var mask_graphics_578 = new cjs.Graphics().p("AtySlMAUdgoUIHIDPMgUaAoQg");
	var mask_graphics_579 = new cjs.Graphics().p("At2SsMAUkgoiIHJDQMgUiAodg");
	var mask_graphics_580 = new cjs.Graphics().p("At6SzMAUsgoxIHJDQMgUqAotg");
	var mask_graphics_581 = new cjs.Graphics().p("At9S6MAUygo+IHJDPMgUxAo6g");
	var mask_graphics_582 = new cjs.Graphics().p("AuBTCMAU6gpOIHJDQMgU4ApJg");
	var mask_graphics_583 = new cjs.Graphics().p("AuETIMAVBgpbIHJDPMgVAApYg");
	var mask_graphics_584 = new cjs.Graphics().p("AuITQMAVIgpqIHJDPMgVGApmg");
	var mask_graphics_585 = new cjs.Graphics().p("AuLTXMAVPgp5IHJDQMgVOAp1g");
	var mask_graphics_586 = new cjs.Graphics().p("AuQTeMAVYgqHIHJDQMgVWAqDg");
	var mask_graphics_587 = new cjs.Graphics().p("AuTTlMAVegqVIHJDQMgVdAqRg");
	var mask_graphics_588 = new cjs.Graphics().p("AuXTsMAVmgqkIHJDQMgVlAqhg");
	var mask_graphics_589 = new cjs.Graphics().p("AubTzMAVugqyIHJDQMgVsAqvg");
	var mask_graphics_590 = new cjs.Graphics().p("AueT6MAV1grAIHIDPMgVzAq+g");
	var mask_graphics_591 = new cjs.Graphics().p("AuhUCMAV7grPIHJDQMgV6ArLg");
	var mask_graphics_592 = new cjs.Graphics().p("AulUIMAWDgrdIHIDQMgWBArag");
	var mask_graphics_593 = new cjs.Graphics().p("AupUQMAWLgrsIHIDQMgWJArpg");
	var mask_graphics_594 = new cjs.Graphics().p("AutUXMAWSgr6IHIDQMgWQAr3g");
	var mask_graphics_595 = new cjs.Graphics().p("AuwUeMAWZgsIIHIDPMgWXAsGg");
	var mask_graphics_596 = new cjs.Graphics().p("Au0UmMAWggsYIHJDQMgWfAsVg");
	var mask_graphics_597 = new cjs.Graphics().p("Au3UsMAWngslIHIDQMgWlAsjg");
	var mask_graphics_598 = new cjs.Graphics().p("Au7U0MAWvgs0IHIDQMgWuAsxg");
	var mask_graphics_599 = new cjs.Graphics().p("Au/U7MAW2gtCIHJDQMgW1As/g");
	var mask_graphics_600 = new cjs.Graphics().p("AvCVCMAW9gtRIHIDQMgW8AtPg");
	var mask_graphics_601 = new cjs.Graphics().p("AvGVJMAXFgtfIHIDQMgXEAtdg");
	var mask_graphics_602 = new cjs.Graphics().p("AvKVQMAXMgttIHJDPMgXLAtsg");
	var mask_graphics_603 = new cjs.Graphics().p("AvNVXMAXTgt7IHIDQMgXSAt5g");
	var mask_graphics_604 = new cjs.Graphics().p("AvRVeMAXbguKIHIDQMgXaAuIg");
	var mask_graphics_605 = new cjs.Graphics().p("AvVVmMAXiguZIHJDQMgXhAuXg");
	var mask_graphics_606 = new cjs.Graphics().p("AvYVtMAXpgunIHIDQMgXoAulg");
	var mask_graphics_607 = new cjs.Graphics().p("AvcV0MAXxgu1IHIDQMgXwAu0g");
	var mask_graphics_608 = new cjs.Graphics().p("AvgV7MAX4gvEIHJDQMgX4AvDg");
	var mask_graphics_609 = new cjs.Graphics().p("AvjWCMAX/gvSIHIDQMgX+AvRg");
	var mask_graphics_610 = new cjs.Graphics().p("AvnWJMAYHgvgIHIDQMgYGAvfg");
	var mask_graphics_611 = new cjs.Graphics().p("AvrWQMAYOgvuIHIDQMgYNAvtg");
	var mask_graphics_612 = new cjs.Graphics().p("AvuWXMAYVgv9IHIDQMgYUAv9g");
	var mask_graphics_613 = new cjs.Graphics().p("AvyWeMAYdgwLIHIDQMgYcAwLg");
	var mask_graphics_614 = new cjs.Graphics().p("Av1WmMAYjgwaIHIDQMgYjAwZg");
	var mask_graphics_615 = new cjs.Graphics().p("Av5WsMAYqgwoIHJDRMgYqAwng");
	var mask_graphics_616 = new cjs.Graphics().p("Av9W0MAYygw3IHJDQMgYyAw3g");
	var mask_graphics_617 = new cjs.Graphics().p("AwBW7MAY6gxFIHIDQMgY5AxFg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(415).to({graphics:mask_graphics_415,x:376.3,y:119.2}).wait(1).to({graphics:mask_graphics_416,x:375.9,y:119.9}).wait(1).to({graphics:mask_graphics_417,x:375.5,y:120.7}).wait(1).to({graphics:mask_graphics_418,x:375.1,y:121.4}).wait(1).to({graphics:mask_graphics_419,x:374.7,y:122.2}).wait(1).to({graphics:mask_graphics_420,x:374.3,y:122.9}).wait(1).to({graphics:mask_graphics_421,x:373.9,y:123.7}).wait(1).to({graphics:mask_graphics_422,x:373.5,y:124.4}).wait(1).to({graphics:mask_graphics_423,x:373.1,y:125.2}).wait(1).to({graphics:mask_graphics_424,x:372.7,y:125.9}).wait(1).to({graphics:mask_graphics_425,x:372.3,y:126.7}).wait(1).to({graphics:mask_graphics_426,x:371.9,y:127.5}).wait(1).to({graphics:mask_graphics_427,x:371.5,y:128.2}).wait(1).to({graphics:mask_graphics_428,x:371.1,y:129}).wait(1).to({graphics:mask_graphics_429,x:370.7,y:129.7}).wait(1).to({graphics:mask_graphics_430,x:370.3,y:130.5}).wait(1).to({graphics:mask_graphics_431,x:369.9,y:131.2}).wait(1).to({graphics:mask_graphics_432,x:369.5,y:132}).wait(1).to({graphics:mask_graphics_433,x:369.1,y:132.7}).wait(1).to({graphics:mask_graphics_434,x:368.7,y:133.5}).wait(1).to({graphics:mask_graphics_435,x:368.3,y:134.2}).wait(1).to({graphics:mask_graphics_436,x:367.9,y:135}).wait(1).to({graphics:mask_graphics_437,x:367.5,y:135.7}).wait(1).to({graphics:mask_graphics_438,x:367.1,y:136.5}).wait(1).to({graphics:mask_graphics_439,x:366.7,y:137.2}).wait(1).to({graphics:mask_graphics_440,x:366.3,y:138}).wait(1).to({graphics:mask_graphics_441,x:365.9,y:138.8}).wait(1).to({graphics:mask_graphics_442,x:365.5,y:139.5}).wait(1).to({graphics:mask_graphics_443,x:365.1,y:140.3}).wait(1).to({graphics:mask_graphics_444,x:364.7,y:141}).wait(1).to({graphics:mask_graphics_445,x:364.3,y:141.8}).wait(1).to({graphics:mask_graphics_446,x:363.9,y:142.5}).wait(1).to({graphics:mask_graphics_447,x:363.5,y:143.3}).wait(1).to({graphics:mask_graphics_448,x:363.1,y:144}).wait(1).to({graphics:mask_graphics_449,x:362.7,y:144.8}).wait(1).to({graphics:mask_graphics_450,x:362.4,y:145.6}).wait(1).to({graphics:mask_graphics_451,x:361.9,y:146.3}).wait(1).to({graphics:mask_graphics_452,x:361.5,y:147.1}).wait(1).to({graphics:mask_graphics_453,x:361.2,y:147.8}).wait(1).to({graphics:mask_graphics_454,x:360.8,y:148.6}).wait(1).to({graphics:mask_graphics_455,x:360.3,y:149.3}).wait(1).to({graphics:mask_graphics_456,x:360,y:150.1}).wait(1).to({graphics:mask_graphics_457,x:359.6,y:150.8}).wait(1).to({graphics:mask_graphics_458,x:359.1,y:151.6}).wait(1).to({graphics:mask_graphics_459,x:358.8,y:152.3}).wait(1).to({graphics:mask_graphics_460,x:358.4,y:153.1}).wait(1).to({graphics:mask_graphics_461,x:358,y:153.9}).wait(1).to({graphics:mask_graphics_462,x:357.6,y:154.6}).wait(1).to({graphics:mask_graphics_463,x:357.2,y:155.4}).wait(1).to({graphics:mask_graphics_464,x:356.8,y:156.1}).wait(1).to({graphics:mask_graphics_465,x:356.4,y:156.9}).wait(1).to({graphics:mask_graphics_466,x:356,y:157.6}).wait(1).to({graphics:mask_graphics_467,x:355.6,y:158.4}).wait(1).to({graphics:mask_graphics_468,x:355.2,y:159.1}).wait(1).to({graphics:mask_graphics_469,x:354.8,y:159.9}).wait(1).to({graphics:mask_graphics_470,x:354.4,y:160.6}).wait(1).to({graphics:mask_graphics_471,x:354,y:161.4}).wait(1).to({graphics:mask_graphics_472,x:353.6,y:162.1}).wait(1).to({graphics:mask_graphics_473,x:353.2,y:162.9}).wait(1).to({graphics:mask_graphics_474,x:352.8,y:163.6}).wait(1).to({graphics:mask_graphics_475,x:352.4,y:164.4}).wait(1).to({graphics:mask_graphics_476,x:352,y:165.2}).wait(1).to({graphics:mask_graphics_477,x:351.6,y:165.9}).wait(1).to({graphics:mask_graphics_478,x:351.2,y:166.7}).wait(1).to({graphics:mask_graphics_479,x:350.8,y:167.4}).wait(1).to({graphics:mask_graphics_480,x:350.4,y:168.2}).wait(1).to({graphics:mask_graphics_481,x:350,y:168.9}).wait(1).to({graphics:mask_graphics_482,x:349.6,y:169.7}).wait(1).to({graphics:mask_graphics_483,x:349.2,y:170.4}).wait(1).to({graphics:mask_graphics_484,x:348.8,y:171.2}).wait(1).to({graphics:mask_graphics_485,x:348.4,y:171.9}).wait(1).to({graphics:mask_graphics_486,x:348,y:172.7}).wait(1).to({graphics:mask_graphics_487,x:347.6,y:173.4}).wait(1).to({graphics:mask_graphics_488,x:347.2,y:174.2}).wait(1).to({graphics:mask_graphics_489,x:346.8,y:174.9}).wait(1).to({graphics:mask_graphics_490,x:346.4,y:175.7}).wait(1).to({graphics:mask_graphics_491,x:346,y:176.5}).wait(1).to({graphics:mask_graphics_492,x:345.6,y:177.2}).wait(1).to({graphics:mask_graphics_493,x:345.2,y:178}).wait(1).to({graphics:mask_graphics_494,x:344.8,y:178.7}).wait(1).to({graphics:mask_graphics_495,x:344.4,y:179.5}).wait(1).to({graphics:mask_graphics_496,x:344,y:180.2}).wait(1).to({graphics:mask_graphics_497,x:343.6,y:181}).wait(1).to({graphics:mask_graphics_498,x:343.2,y:181.7}).wait(1).to({graphics:mask_graphics_499,x:342.8,y:182.5}).wait(1).to({graphics:mask_graphics_500,x:342.4,y:183.3}).wait(1).to({graphics:mask_graphics_501,x:342,y:184}).wait(1).to({graphics:mask_graphics_502,x:341.6,y:184.8}).wait(1).to({graphics:mask_graphics_503,x:341.2,y:185.5}).wait(1).to({graphics:mask_graphics_504,x:340.8,y:186.3}).wait(1).to({graphics:mask_graphics_505,x:340.4,y:187}).wait(1).to({graphics:mask_graphics_506,x:340,y:187.8}).wait(1).to({graphics:mask_graphics_507,x:339.6,y:188.5}).wait(1).to({graphics:mask_graphics_508,x:339.2,y:189.3}).wait(1).to({graphics:mask_graphics_509,x:338.8,y:190}).wait(1).to({graphics:mask_graphics_510,x:338.5,y:190.8}).wait(1).to({graphics:mask_graphics_511,x:338,y:191.6}).wait(1).to({graphics:mask_graphics_512,x:337.6,y:192.3}).wait(1).to({graphics:mask_graphics_513,x:337.3,y:193.1}).wait(1).to({graphics:mask_graphics_514,x:336.9,y:193.8}).wait(1).to({graphics:mask_graphics_515,x:336.4,y:194.6}).wait(1).to({graphics:mask_graphics_516,x:336.1,y:195.3}).wait(1).to({graphics:mask_graphics_517,x:335.7,y:196.1}).wait(1).to({graphics:mask_graphics_518,x:335.2,y:196.8}).wait(1).to({graphics:mask_graphics_519,x:334.8,y:197.6}).wait(1).to({graphics:mask_graphics_520,x:334.5,y:198.3}).wait(1).to({graphics:mask_graphics_521,x:334.1,y:199.1}).wait(1).to({graphics:mask_graphics_522,x:333.6,y:199.8}).wait(1).to({graphics:mask_graphics_523,x:333.3,y:200.6}).wait(1).to({graphics:mask_graphics_524,x:332.9,y:201.3}).wait(1).to({graphics:mask_graphics_525,x:332.5,y:202.1}).wait(1).to({graphics:mask_graphics_526,x:332.1,y:202.8}).wait(1).to({graphics:mask_graphics_527,x:331.7,y:203.6}).wait(1).to({graphics:mask_graphics_528,x:331.3,y:204.4}).wait(1).to({graphics:mask_graphics_529,x:330.9,y:205.1}).wait(1).to({graphics:mask_graphics_530,x:330.5,y:205.9}).wait(1).to({graphics:mask_graphics_531,x:330.1,y:206.6}).wait(1).to({graphics:mask_graphics_532,x:329.7,y:207.4}).wait(1).to({graphics:mask_graphics_533,x:329.3,y:208.1}).wait(1).to({graphics:mask_graphics_534,x:328.9,y:208.9}).wait(1).to({graphics:mask_graphics_535,x:328.5,y:209.6}).wait(1).to({graphics:mask_graphics_536,x:328.1,y:210.4}).wait(1).to({graphics:mask_graphics_537,x:327.7,y:211.1}).wait(1).to({graphics:mask_graphics_538,x:327.3,y:211.9}).wait(1).to({graphics:mask_graphics_539,x:326.9,y:212.6}).wait(1).to({graphics:mask_graphics_540,x:326.5,y:213.4}).wait(1).to({graphics:mask_graphics_541,x:326.1,y:214.1}).wait(1).to({graphics:mask_graphics_542,x:325.7,y:214.9}).wait(1).to({graphics:mask_graphics_543,x:325.3,y:215.7}).wait(1).to({graphics:mask_graphics_544,x:324.9,y:216.4}).wait(1).to({graphics:mask_graphics_545,x:324.5,y:217.2}).wait(1).to({graphics:mask_graphics_546,x:324.1,y:217.9}).wait(1).to({graphics:mask_graphics_547,x:323.7,y:218.7}).wait(1).to({graphics:mask_graphics_548,x:323.3,y:219.4}).wait(1).to({graphics:mask_graphics_549,x:322.9,y:220.2}).wait(1).to({graphics:mask_graphics_550,x:322.5,y:221}).wait(1).to({graphics:mask_graphics_551,x:322.1,y:221.7}).wait(1).to({graphics:mask_graphics_552,x:321.7,y:222.5}).wait(1).to({graphics:mask_graphics_553,x:321.3,y:223.2}).wait(1).to({graphics:mask_graphics_554,x:320.9,y:224}).wait(1).to({graphics:mask_graphics_555,x:320.5,y:224.7}).wait(1).to({graphics:mask_graphics_556,x:320.1,y:225.5}).wait(1).to({graphics:mask_graphics_557,x:319.7,y:226.2}).wait(1).to({graphics:mask_graphics_558,x:319.3,y:227}).wait(1).to({graphics:mask_graphics_559,x:318.9,y:227.7}).wait(1).to({graphics:mask_graphics_560,x:318.5,y:228.5}).wait(1).to({graphics:mask_graphics_561,x:318.1,y:229.2}).wait(1).to({graphics:mask_graphics_562,x:317.7,y:230}).wait(1).to({graphics:mask_graphics_563,x:317.3,y:230.8}).wait(1).to({graphics:mask_graphics_564,x:316.9,y:231.5}).wait(1).to({graphics:mask_graphics_565,x:316.5,y:232.3}).wait(1).to({graphics:mask_graphics_566,x:316.1,y:233}).wait(1).to({graphics:mask_graphics_567,x:315.7,y:233.8}).wait(1).to({graphics:mask_graphics_568,x:315.3,y:234.5}).wait(1).to({graphics:mask_graphics_569,x:314.9,y:235.3}).wait(1).to({graphics:mask_graphics_570,x:314.5,y:236}).wait(1).to({graphics:mask_graphics_571,x:314.1,y:236.8}).wait(1).to({graphics:mask_graphics_572,x:313.7,y:237.5}).wait(1).to({graphics:mask_graphics_573,x:313.3,y:238.3}).wait(1).to({graphics:mask_graphics_574,x:313,y:239}).wait(1).to({graphics:mask_graphics_575,x:312.5,y:239.8}).wait(1).to({graphics:mask_graphics_576,x:312.1,y:240.5}).wait(1).to({graphics:mask_graphics_577,x:311.8,y:241.3}).wait(1).to({graphics:mask_graphics_578,x:311.3,y:242.1}).wait(1).to({graphics:mask_graphics_579,x:310.9,y:242.8}).wait(1).to({graphics:mask_graphics_580,x:310.6,y:243.6}).wait(1).to({graphics:mask_graphics_581,x:310.2,y:244.3}).wait(1).to({graphics:mask_graphics_582,x:309.7,y:245.1}).wait(1).to({graphics:mask_graphics_583,x:309.4,y:245.8}).wait(1).to({graphics:mask_graphics_584,x:309,y:246.6}).wait(1).to({graphics:mask_graphics_585,x:308.6,y:247.3}).wait(1).to({graphics:mask_graphics_586,x:308.2,y:248.1}).wait(1).to({graphics:mask_graphics_587,x:307.8,y:248.8}).wait(1).to({graphics:mask_graphics_588,x:307.4,y:249.6}).wait(1).to({graphics:mask_graphics_589,x:307,y:250.3}).wait(1).to({graphics:mask_graphics_590,x:306.6,y:251.1}).wait(1).to({graphics:mask_graphics_591,x:306.2,y:251.8}).wait(1).to({graphics:mask_graphics_592,x:305.8,y:252.6}).wait(1).to({graphics:mask_graphics_593,x:305.4,y:253.4}).wait(1).to({graphics:mask_graphics_594,x:305,y:254.1}).wait(1).to({graphics:mask_graphics_595,x:304.6,y:254.9}).wait(1).to({graphics:mask_graphics_596,x:304.2,y:255.6}).wait(1).to({graphics:mask_graphics_597,x:303.8,y:256.4}).wait(1).to({graphics:mask_graphics_598,x:303.4,y:257.1}).wait(1).to({graphics:mask_graphics_599,x:303,y:257.9}).wait(1).to({graphics:mask_graphics_600,x:302.6,y:258.6}).wait(1).to({graphics:mask_graphics_601,x:302.2,y:259.4}).wait(1).to({graphics:mask_graphics_602,x:301.8,y:260.2}).wait(1).to({graphics:mask_graphics_603,x:301.4,y:260.9}).wait(1).to({graphics:mask_graphics_604,x:301,y:261.7}).wait(1).to({graphics:mask_graphics_605,x:300.6,y:262.4}).wait(1).to({graphics:mask_graphics_606,x:300.2,y:263.2}).wait(1).to({graphics:mask_graphics_607,x:299.8,y:263.9}).wait(1).to({graphics:mask_graphics_608,x:299.4,y:264.7}).wait(1).to({graphics:mask_graphics_609,x:299,y:265.4}).wait(1).to({graphics:mask_graphics_610,x:298.6,y:266.2}).wait(1).to({graphics:mask_graphics_611,x:298.2,y:266.9}).wait(1).to({graphics:mask_graphics_612,x:297.8,y:267.7}).wait(1).to({graphics:mask_graphics_613,x:297.4,y:268.5}).wait(1).to({graphics:mask_graphics_614,x:297,y:269.2}).wait(1).to({graphics:mask_graphics_615,x:296.6,y:270}).wait(1).to({graphics:mask_graphics_616,x:296.2,y:270.7}).wait(1).to({graphics:mask_graphics_617,x:295.8,y:271.5}).wait(164));

	// Layer 7
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(20,1,1).p("AMM2nMgYXAtP");
	this.shape_1.setTransform(301.7,275.6);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(415).to({_off:false},0).wait(366));

	// arrow
	this.instance_2 = new lib.ar5("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(246.6,323.6,1,1,-90.4,0,0,-0.1,-1.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(202).to({_off:false},0).wait(579));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_202 = new cjs.Graphics().p("AjcCrQgNg2gMhNQgNhNgFg2QgFg3AFgCIHThLQAGgBAMA3QAMA2ANBNQAMBMAFA4QAGA3gGABInTBKIgBAAQgEAAgMg1g");
	var mask_1_graphics_203 = new cjs.Graphics().p("AjeCrQgNg2gOhMQgKg9gHgvIgCgXQgFg4AFgCIHYhKQAGgBANA2QANA2AOBNIAQBrIADAYQAFAzgFAFInZBKIAAAAQgFAAgNg0g");
	var mask_1_graphics_204 = new cjs.Graphics().p("AjfCrQgOg2gOhMQgMg8gHgvIgDgYQgEg3AEgDIHehKQAGgBANA3QAOA1APBMIASBrIADAYQAFAzgFAGIneBKIgBAAQgFAAgNg0g");
	var mask_1_graphics_205 = new cjs.Graphics().p("AjgCrQgPg2gQhLQgMg8gIgvIgDgYQgEg4AEgCIHjhKQAHgBANA2QAPA1AQBMIAUBqIACAZQAFAzgEAGInkBJIAAAAQgGAAgNgzg");
	var mask_1_graphics_206 = new cjs.Graphics().p("AjhCqQgQg0gRhMIgWhqIgCgYQgFg4AFgDIHohKQAHgBANA2QARA1AQBLIAWBqIACAZQAFAzgEAHInpBJIAAAAQgGAAgOg0g");
	var mask_1_graphics_207 = new cjs.Graphics().p("AjiCqQgRg0gRhLQgPg8gJguIgDgYQgEg4AEgEIHthJQAIgBAOA1QARA0ASBMIAXBpIACAZQAFA0gFAHIntBIIgBAAQgGAAgOgzg");
	var mask_1_graphics_208 = new cjs.Graphics().p("AjjCqQgSg0gThLIgZhpIgDgZQgEg4AEgEIHyhJQAIgBAOA2QATAzASBLIAZBpIACAZQAFA0gEAIInzBIIAAAAQgHAAgOgzg");
	var mask_1_graphics_209 = new cjs.Graphics().p("AjkCqQgUg0gThKIgbhpIgDgZQgEg4AEgFIH4hIQAIgBAOA1QAUAzATBLIAaBoIADAaQAFAzgFAJIn3BHIAAAAQgIAAgOgyg");
	var mask_1_graphics_210 = new cjs.Graphics().p("AjlCqQgVg0gUhKIgdhoIgCgZQgEg5AEgFIH8hIQAJgBAPA1QAUAzAVBLIAbBnIADAaQAFA0gFAJIn9BHIAAAAQgIAAgOgyg");
	var mask_1_graphics_211 = new cjs.Graphics().p("AjnCpQgVg0gVhJIgfhnIgCgZQgEg5AEgGIIBhHQAJgCAQA1QAVAzAVBKIAeBnIACAaQAFA0gEAJIoCBIIAAAAQgIAAgQgzg");
	var mask_1_graphics_212 = new cjs.Graphics().p("AjoCpQgWgzgWhKIgghmIgDgZQgEg5AEgHIIHhHQAJgBAQA0QAWAzAXBJIAfBnIACAaQAFA1gEAJIoHBHIgBAAQgIAAgQgyg");
	var mask_1_graphics_213 = new cjs.Graphics().p("AjpCpQgXgzgXhJIgihmIgCgaQgEg5AEgHIILhHQAKAAAQA0QAXAyAYBJIAhBmIACAbQAFA0gEAKIoNBHIAAAAQgJAAgQgyg");
	var mask_1_graphics_214 = new cjs.Graphics().p("AjqCoQgYgygYhJIgkhlIgCgaQgEg6AEgGIIRhHQAKgBAQA0QAYAyAZBIIAiBmIADAbQAEA0gEALIoRBGIgBAAQgJAAgQgyg");
	var mask_1_graphics_215 = new cjs.Graphics().p("AjrCoQgZgygZhIIglhlIgDgbQgEg5AEgIIIWhGQALgBARA0QAZAxAZBJQAUA4AQAtIADAbQAEA1gEALIoWBFIgBABQgJAAgRgyg");
	var mask_1_graphics_216 = new cjs.Graphics().p("AjsCoQgagygahIIgnhkIgDgbQgEg6AEgIIIbhFQALgBARAzQAaAxAbBIQAUA4ASAsIACAcQAFA1gFALIobBGIgBAAQgJAAgRgxg");
	var mask_1_graphics_217 = new cjs.Graphics().p("AjtCoQgbgygbhHIgphkIgCgbQgEg6AEgJIIghFQALgBASAzQAbAxAbBIQAVA4ATArIACAcQAFA2gFALIogBFIgBABQgKAAgRgxg");
	var mask_1_graphics_218 = new cjs.Graphics().p("AjuCoQgcgygchHQgXg4gTgrIgDgbQgEg6AEgKIIlhEQAMgBASAyQAcAxAcBHQAXA4ATArIACAcQAEA2gEAMIolBFIgBAAQgKAAgSgwg");
	var mask_1_graphics_219 = new cjs.Graphics().p("AjvCnQgdgxgdhGQgYg4gUgrIgCgbQgFg7AFgJIIqhFQAMgBASAyQAdAxAdBHQAXA3AUArIACAdQAFA2gEAMIorBEIgBABQgLAAgRgxg");
	var mask_1_graphics_220 = new cjs.Graphics().p("AjxCnQgegxgehGQgZg3gUgrIgCgcQgFg6AFgKIIvhEQAMgBATAyQAeAwAeBGQAYA3AUArIADAdQAEA2gEANIowBEIAAAAQgMAAgSgwg");
	var mask_1_graphics_221 = new cjs.Graphics().p("AjyCnQgfgxgfhFQgZg3gWgrIgCgcQgEg7AEgKII0hEQANgBATAyQAfAwAfBGQAZA3AVAqIADAdQAEA3gEANIo1BDIgBABQgLAAgTgwg");
	var mask_1_graphics_222 = new cjs.Graphics().p("AjzCnQgggxgghFQgag3gXgqIgCgcQgEg7AEgLII5hDQAOgBATAxQAgAwAgBGQAaA2AWAqIACAdQAFA3gEAOIo7BDIAAAAQgMAAgTgvg");
	var mask_1_graphics_223 = new cjs.Graphics().p("Aj0CmQghgwghhEQgbg3gXgqIgCgcQgEg8AEgLII+hDQAOgBAUAxQAgAwAhBFQAbA2AXAqIACAeQAFA2gEAPIpABCIgBABQgMAAgTgwg");
	var mask_1_graphics_224 = new cjs.Graphics().p("Aj1CmQgigwgihEQgcg2gYgqIgCgcQgEg8AEgMIJDhCQAOgBAUAwQAiAwAiBFQAbA1AYAqIADAeQAEA3gEAPIpEBCIgBAAQgNAAgTgvg");
	var mask_1_graphics_225 = new cjs.Graphics().p("Aj2CmQgjgwgjhDQgdg2gZgqIgCgdQgEg7AEgNIJJhCQAOgBAVAxQAiAvAjBEQAcA1AZAqIADAeQAEA3gEAQIpKBBIgBABQgMAAgUgvg");
	var mask_1_graphics_226 = new cjs.Graphics().p("Aj3CmQgkgvgkhEQgdg1gagqIgCgdQgEg8AEgNIJNhBQAPgBAVAwQAkAvAkBEQAdA1AZApIACAeQAFA4gEAQIpPBBIgBAAQgNAAgUgug");
	var mask_1_graphics_227 = new cjs.Graphics().p("Aj4CmQglgvglhDQgfg1gagpIgCgeQgEg8AEgNIJShCQAQAAAVAwQAlAuAkBEQAeA0AbAqIACAeQAEA4gEAQIpTBBIgBAAQgOAAgUgug");
	var mask_1_graphics_228 = new cjs.Graphics().p("Aj5CmQgmgvgmhDQgfg0gcgpIgCgeQgEg8AEgOIJYhBQAQgBAVAwQAmAuAmBDQAeA1AcApIACAeQAEA4gEARIpZBAIgBAAQgOAAgUgtg");
	var mask_1_graphics_229 = new cjs.Graphics().p("Aj7ClQgngugmhDQggg0gdgpIgCgeQgEg8AEgOIJdhBQAQgBAWAvQAnAvAnBCQAfA0AcApIACAfQAFA4gEARIpeBBIgBAAQgOAAgWgug");
	var mask_1_graphics_230 = new cjs.Graphics().p("Aj8ClQgngugohCQghg1gdgoIgCgeQgEg8AEgPIJihBQAQAAAXAvQAnAuAoBCQAgA0AdAoIACAfQAFA5gEARIpjBAIgBABQgPAAgWgug");
	var mask_1_graphics_231 = new cjs.Graphics().p("Aj9ClQgpgugohCQgig0gegoIgCgeQgEg9AEgPIJnhAQARgBAXAvQAoAtApBCQAhA0AeAoIACAgQAEA4gEASIpoBAIgBAAQgPAAgWgtg");
	var mask_1_graphics_232 = new cjs.Graphics().p("Aj+ClQgqgugphBQgjg1gfgnIgCgeQgEg9AEgQIJshAQASAAAXAuQApAtAqBCQAiA0AfAnIACAgQAEA5gEASIptA/IgBABQgQAAgWgtg");
	var mask_1_graphics_233 = new cjs.Graphics().p("Aj/CkQgrgtgrhBQgjg0gggnIgCgeQgEg+AEgQIJyg/QARgBAYAuQAqAtArBCQAiAzAgAnIACAgQAEA5gDATIpzA/IAAAAQgRAAgWgtg");
	var mask_1_graphics_234 = new cjs.Graphics().p("AkACkQgsgtgrhAQglg0gggnIgCgfQgEg9AEgRIJ2g/QATAAAXAuQArAsAsBBQAjAzAhAnIACAgQAEA6gEATIp3A+IgBABQgQAAgXgtg");
	var mask_1_graphics_235 = new cjs.Graphics().p("AkCCkQgsgtgthAQglgzghgnIgCgfQgEg+AEgRIJ7g+QATgBAYAuQAsAsAtBBQAkAzAhAmIACAhQAFA5gEAUIp9A+IAAAAQgRAAgYgsg");
	var mask_1_graphics_236 = new cjs.Graphics().p("AkCCkQgugtgug/QglgzgjgnIgCgfQgDg+ADgSIKBg+QATAAAYAtQAuAsAtBAQAlAzAiAmIACAhQAFA6gEAUIqCA9IgBABQgRAAgXgsg");
	var mask_1_graphics_237 = new cjs.Graphics().p("AkDCkQgvgtgug/QgngzgjgmIgCgfQgEg+AEgTIKGg9QATgBAZAtQAuAsAuBAQAmAyAjAmIACAhQAEA6gDAVIqHA9IgBAAQgRAAgYgrg");
	var mask_1_graphics_238 = new cjs.Graphics().p("AkFCjQgvgsgwg+QgngzgkgmIgCggQgEg+AEgSIKLg+QAUAAAZAsQAvAsAvA/QAnAyAkAmIACAhQAEA6gEAWIqMA8IAAABQgSAAgZgsg");
	var mask_1_graphics_239 = new cjs.Graphics().p("AkGCjQgwgrgxg/QgogyglgmIgCggQgDg+ADgTIKQg9QAVgBAZAtQAwArAwA/QAoAyAlAlIACAiQAEA6gEAVIqRA9IgBAAQgSAAgZgrg");
	var mask_1_graphics_240 = new cjs.Graphics().p("AkHCjQgxgrgyg+QgpgygmgmIgCggQgDg/ADgTIKVg9QAVAAAaAsQAxArAxA+QApAyAlAlIACAiQAEA6gDAWIqWA8IgCABQgTAAgYgrg");
	var mask_1_graphics_241 = new cjs.Graphics().p("AkICjQgygrgzg+QgqgygmglIgCggQgEg/AEgUIKag8QAVgBAaAsQAyArAzA+QApAxAmAlIACAiQAEA7gDAWIqcA8IgBAAQgTAAgZgqg");
	var mask_1_graphics_242 = new cjs.Graphics().p("AkJCjQg0grgzg9QgrgygnglIgCggQgEg/AEgVIKfg8QAWAAAaArQAzArAzA9QAqAxAoAlIACAiQAEA7gEAXIqgA7IgBABQgUAAgZgqg");
	var mask_1_graphics_243 = new cjs.Graphics().p("AkKCiQg1gqg0g9QgsgxgogkIgCgiQgDg/ADgVIKlg7QAWgBAbArQAzArA1A9QAqAxApAkIACAjQADA7gDAXIqlA7IgCAAQgUAAgZgqg");
	var mask_1_graphics_244 = new cjs.Graphics().p("AkLCiQg1gqg2g9QgsgwgpgkIgCgiQgEg/AEgWIKpg7QAXAAAbArQA1AqA1A8QAsAxApAkIABAjQAEA7gDAYIqrA6IgBABQgUAAgagqg");
	var mask_1_graphics_245 = new cjs.Graphics().p("AkNCiQg2gqg2g8QgtgwgqgkIgCgiQgEhAAEgWIKug6QAXgBAcArQA2AqA2A8QAsAwAqAkIACAjQAEA8gEAYIqvA6IgCAAQgUAAgbgpg");
	var mask_1_graphics_246 = new cjs.Graphics().p("AkNCiQg4gqg3g8QgugwgrgjIgCgiQgDhAADgXIK0g6QAXAAAcAqQA3AqA3A8QAtAvArAkIACAjQAEA8gEAZIq0A5IgCABQgVAAgagpg");
	var mask_1_graphics_247 = new cjs.Graphics().p("AkPCiQg4gqg4g7QgvgwgsgjIgCgiQgDhBADgXIK5g5QAYgBAcAqQA4ApA4A8QAuAvArAkIACAkQAEA8gDAZIq6A5IgBAAQgVAAgcgog");
	var mask_1_graphics_248 = new cjs.Graphics().p("AkQChQg5gpg6g7QgvgvgtgjIgCgjQgDhAADgXIK+g6QAYAAAdAqQA5AoA5A8QAvAvAsAjIACAkQAEA8gEAaIq/A5IgBAAQgVAAgcgpg");
	var mask_1_graphics_249 = new cjs.Graphics().p("AkRChQg6gpg6g6QgxgvgtgjIgCgjQgDhAADgYILDg5QAYgBAdAqQA6AoA6A7QAwAvAtAjIACAkQAEA9gEAaIrEA4IgBAAQgWAAgcgog");
	var mask_1_graphics_250 = new cjs.Graphics().p("AkSChQg7gpg7g6QgygugugjIgCgjQgDhBADgYILIg5QAZAAAeApQA6AoA7A7QAxAuAuAjIACAkQADA9gDAaIrJA5IgCAAQgWAAgcgog");
	var mask_1_graphics_251 = new cjs.Graphics().p("AkTChQg8gpg9g5QgygvgvgiIgBgjQgEhBAEgZILNg4QAZgBAeApQA7AoA8A6QAxAuAvAjIACAlQAEA8gEAbIrOA4IgBAAQgXAAgcgng");
	var mask_1_graphics_252 = new cjs.Graphics().p("AkUChQg9gpg+g5QgygugxgiIgBgkQgEhBAEgZILSg4QAagBAdApQA9AoA9A6QAzAuAvAiIACAlQAEA9gEAbIrTA4IgBAAQgYAAgcgng");
	var mask_1_graphics_253 = new cjs.Graphics().p("AkWCgQg+gng+g5Qg0gugwgiIgCgkQgDhBADgaILXg3QAagBAfApQA9AnA+A5QAzAuAxAiIABAlQAEA9gDAcIrZA3IgBAAQgXAAgegng");
	var mask_1_graphics_254 = new cjs.Graphics().p("AkXCgQg/gng/g5Qg0gtgygiIgBgkQgEhBAEgbILcg3QAagBAfApQA/AnA+A5QA0AtAyAiIABAlQAEA+gDAcIreA3IgBAAQgYAAgegng");
	var mask_1_graphics_255 = new cjs.Graphics().p("AkYCgQhAgnhAg4Qg1gugzghIgBgkQgEhCAEgbILhg2QAbgBAfAoQA/AnBAA4QA1AtAyAiIACAmQAEA9gEAdIriA2IgBAAQgZAAgegmg");
	var mask_1_graphics_256 = new cjs.Graphics().p("AkZCgQhBgnhBg4Qg2gtgzghIgCgkQgDhCADgcILng2QAbgBAfAoQBBAnBAA4QA2AsAzAiIACAmQADA+gDAdIroA2IgBAAQgZAAgegmg");
	var mask_1_graphics_257 = new cjs.Graphics().p("AkaCgQhCgnhCg3Qg3gtg0ghIgCglQgDhCADgbILsg2QAbgBAgAnQBCAnBBA4QA3AsA0AhIABAmQAEA+gDAeIrtA1IgBAAQgZAAgfglg");
	var mask_1_graphics_258 = new cjs.Graphics().p("AkbCfQhDgmhDg3Qg4gsg1ghIgBglQgEhCAEgcILwg2QAcgBAhAoQBCAmBCA3QA4AsA0AhIACAmQAEA/gDAeIryA1IgCAAQgZAAgfgmg");
	var mask_1_graphics_259 = new cjs.Graphics().p("AkcCfQhEgmhEg3Qg5grg2ghIgBglQgEhDAEgcIL1g1QAdgBAhAnQBDAmBDA3QA4ArA2AhIACAnQADA+gDAfIr3A0IgBAAQgaAAgfglg");
	var mask_1_graphics_260 = new cjs.Graphics().p("AkdCfQhFgmhFg2Qg6gsg2ggIgCglQgDhDADgdIL7g1QAdgBAhAnQBEAmBFA2QA4ArA3AhIACAnQADA/gDAfIr8A0IgCAAQgaAAgfglg");
	var mask_1_graphics_261 = new cjs.Graphics().p("AkfCfQhGgmhFg2Qg7grg3ggIgCglQgDhDADgeIMAg0QAdgBAiAmQBFAmBFA2QA6ArA3AgIACAnQAEA/gEAfIsBA0IgBAAQgaAAghgkg");
	var mask_1_graphics_262 = new cjs.Graphics().p("AkgCfQhGgmhHg1Qg7grg5ggIgBgmQgDhDADgeIMFg0QAdgBAiAnQBGAlBHA1QA6ArA4AgIACAnQADBAgDAfIsGA0IgCAAQgbAAgggkg");
	var mask_1_graphics_263 = new cjs.Graphics().p("AkhCeQhHglhIg1Qg8gqg5ggIgCgmQgDhDADgfIMKgzQAegBAjAmQBHAkBHA2QA7AqA5AgIACAoQADA/gDAgIsLAzIgDAAQgbAAgggkg");
	var mask_1_graphics_264 = new cjs.Graphics().p("AkiCeQhJglhIg0Qg9gqg6ggIgCgmQgDhEADgfIMPgzQAfgBAiAmQBIAkBJA1QA8AqA6AgIABAoQAEBAgDAgIsRAzIgCAAQgbAAghgkg");
	var mask_1_graphics_265 = new cjs.Graphics().p("AkjCdQhKgkhJg0Qg+gqg7gfIgBgnQgDhDADggIMUgzQAfgBAjAmQBJAkBJA0QA9AqA7AfIABApQAEBAgDAhIsWAyIgCABQgcAAghglg");
	var mask_1_graphics_266 = new cjs.Graphics().p("AkkCdQhLgkhLgzQg+gqg8gfIgBgnQgDhDADghIMZgyQAfgBAkAlQBKAkBKA0QA+AqA7AeIACApQADBAgDAiIsbAyIgBAAQgdAAghgkg");
	var mask_1_graphics_267 = new cjs.Graphics().p("AklCdQhMgjhLg0QhAgqg8geIgCgnQgDhEADghIMfgyQAfAAAkAkQBLAkBLAzQA/AqA8AeIACAqQADA/gDAjIsgAxIgCABQgcAAgigkg");
	var mask_1_graphics_268 = new cjs.Graphics().p("AkmCdQhNgkhNgyQhAgqg9geIgCgnQgDhFADghIMkgxQAggBAkAkQBMAkBMAzQA/ApA+AeIABAqQADBAgCAjIsmAxIgBAAQgdAAgigjg");
	var mask_1_graphics_269 = new cjs.Graphics().p("AknCdQhOgkhOgyQhBgpg+geIgBgoQgDhEADgiIMogwQAhgCAkAlQBNAjBNAyQBAApA+AeIACAqQADBAgDAkIsqAwIgBABQgeAAgigjg");
	var mask_1_graphics_270 = new cjs.Graphics().p("AkoCcQhPgjhPgxQhBgphAgfIgBgnQgDhEADgjIMugwQAggBAlAkQBOAjBOAyQBCApA+AeIACApQADBBgDAkIsvAwIgCAAQgdAAgjgjg");
	var mask_1_graphics_271 = new cjs.Graphics().p("AkqCcQhPgihQgyQhCgohAgfIgCgnQgDhFADgiIMzgwQAhgCAmAkQBOAjBPAyQBCAnBAAfIACApQADBBgDAlIs1AvIgBABQgeAAgkgjg");
	var mask_1_graphics_272 = new cjs.Graphics().p("AkrCcQhQgihRgxQhDgohBgfIgBgnQgDhGADgiIM4gwQAhgBAmAkQBQAhBQAzQBCAnBBAeIABApQAEBCgDAkIs6AwIgCAAQgeAAgkgig");
	var mask_1_graphics_273 = new cjs.Graphics().p("AksCcQhRgihSgxQhEgnhCgfIgBgnQgDhGADgjIM9gvQAigBAmAjQBQAiBRAxQBEAnBBAeIACAqQADBBgDAlIs+AwIgCAAQgfAAgkgig");
	var mask_1_graphics_274 = new cjs.Graphics().p("AktCcQhTgihSgxQhFgnhDgeIgBgnQgDhGADgkINCgvQAigBAnAjQBRAiBSAxQBFAmBCAeIABAqQAEBCgDAlItEAvIgCAAQgfAAgkghg");
	var mask_1_graphics_275 = new cjs.Graphics().p("AkuCbQhUghhTgwQhGgnhDgeIgCgnQgChHACgkINIguQAigBAnAiQBTAiBSAwQBGAnBDAdIABAqQADBCgCAmItJAvIgCAAQggAAgkgig");
	var mask_1_graphics_276 = new cjs.Graphics().p("AkvCcQhVgihUgwQhHgmhEgdIgBgpQgDhGADgkINMgvQAjgBAnAiQBUAiBUAwQBGAmBEAdIABArQADBCgCAmItOAuIgCAAQghAAgkggg");
	var mask_1_graphics_277 = new cjs.Graphics().p("AkwCcQhWgihVgvQhIgmhFgdIgBgpQgDhGADglINRgvQAkAAAnAiQBVAhBUAvQBHAmBFAdIACArQADBDgDAmItTAuIgCAAQggAAglggg");
	var mask_1_graphics_278 = new cjs.Graphics().p("AkxCbQhXghhWgvQhIglhGgdIgCgpQgChHACglINXguQAkgBAoAiQBVAhBWAvQBIAlBFAdIACArQADBDgDAnItYAtIgCAAQghAAglggg");
	var mask_1_graphics_279 = new cjs.Graphics().p("AkzCbQhXghhXguQhKgmhGgcIgCgpQgChHACgmINcguQAkAAApAhQBWAhBXAuQBIAmBHAcIABAsQADBCgDAoItdAtIgCAAQghAAgmggg");
	var mask_1_graphics_280 = new cjs.Graphics().p("Ak0CbQhYgghYgvQhKglhIgcIgBgqQgDhGADgnINhgtQAkgBApAhQBXAgBYAvQBJAlBIAcIABAsQADBDgDAoItiAsIgCAAQgiAAgmgfg");
	var mask_1_graphics_281 = new cjs.Graphics().p("Ak1CbQhZgghZguQhLglhIgcIgCgqQgChHACgnINmgtQAlAAApAhQBZAfBYAuQBKAlBIAcIACAsQADBDgDApItnAsIgDAAQghAAgngfg");
	var mask_1_graphics_282 = new cjs.Graphics().p("Ak2CaQhagfhaguQhMglhJgcIgCgpQgChHACgoINrgtQAmAAApAhQBZAfBaAuQBLAkBJAcIABAsQADBEgCApIttArIgBABQgiAAgoggg");
	var mask_1_graphics_283 = new cjs.Graphics().p("Ak3CaQhbgfhbguQhNgjhKgdIgBgpQgDhIADgoINwgsQAmgBAqAhQBaAfBaAtQBMAlBKAbIABAsQADBEgCApItyAsIgCAAQgiAAgogfg");
	var mask_1_graphics_284 = new cjs.Graphics().p("Ak4CaQhcgghdgsQhNgkhLgcIgBgpQgDhJADgoIN1gsQAmAAAqAgQBcAfBbAtQBNAjBKAcIACAsQADBEgDAqIt3ArIgBABQgjAAgogfg");
	var mask_1_graphics_285 = new cjs.Graphics().p("Ak6CaQhdgfhdgsQhOgkhMgbIgBgrQgDhHADgqIN6grQAnAAAqAfQBcAfBdAsQBNAkBMAbIABAtQADBEgCAqIt8ArIgBAAQgkAAgpgeg");
	var mask_1_graphics_286 = new cjs.Graphics().p("Ak6CaQhfgfhegsQhPgkhMgaIgBgrQgDhIADgqIN/grQAnAAArAgQBdAeBdAsQBOAjBNAbIABAtQADBFgCAqIuCAqIgBABQgkAAgogeg");
	var mask_1_graphics_287 = new cjs.Graphics().p("Ak7CaQhfgfhggrQhQgkhNgaIgBgrQgDhIADgrIOEgqQAnAAAsAfQBeAeBeArQBPAjBNAbIACAtQACBFgCArIuGAqIgBAAQglAAgogdg");
	var mask_1_graphics_288 = new cjs.Graphics().p("Ak9CZQhggehggrQhQgjhPgbIgBgrQgChIACgrIOKgqQAnAAAsAfQBfAdBfAsQBQAiBOAbIACAtQACBFgCAsIuLApIgDABQgkAAgpgeg");
	var mask_1_graphics_289 = new cjs.Graphics().p("Ak+CZQhhgehhgrQhRgihPgbIgBgrQgDhJADgrIOOgpQAogBAsAfQBgAdBgArQBRAiBPAbIACAuQACBFgCArIuRAqIgCAAQglAAgpgdg");
	var mask_1_graphics_290 = new cjs.Graphics().p("Ak/CYQhigdhigqQhSgihQgbIgBgrQgDhJADgrIOTgqQApAAAsAeQBhAdBhArQBSAiBQAaIABAuQADBFgDAsIuVApIgDABQglAAgpgeg");
	var mask_1_graphics_291 = new cjs.Graphics().p("AlACYQhjgdhjgqQhTgihRgaIgBgrQgChJACgsIOZgpQApgBAtAeQBhAdBjAqQBSAiBRAaIABAuQADBGgDAsIuaApIgDAAQglAAgqgdg");
	var mask_1_graphics_292 = new cjs.Graphics().p("AlBCYQhkgdhkgqQhUghhSgZIgBgtQgChJACgsIOegpQApAAAtAdQBjAdBjAqQBUAhBRAaIABAuQADBGgCAtIugAoIgDABQglAAgqgdg");
	var mask_1_graphics_293 = new cjs.Graphics().p("AlCCYQhlgdhlgpQhVghhSgZIgBgtQgDhJADgtIOjgoQApgBAuAeQBkAcBkApQBUAhBSAaIABAvQADBFgCAuIulAoIgDAAQgmAAgqgcg");
	var mask_1_graphics_294 = new cjs.Graphics().p("AlECYQhmgdhlgpQhWgghTgZIgBgtQgDhKADgtIOogoQAqAAAuAdQBkAcBlApQBVAhBTAZIACAvQACBGgCAuIuqAnIgCABQgnAAgrgcg");
	var mask_1_graphics_295 = new cjs.Graphics().p("AlECXQhngchngoQhXghhUgYIgBgtQgChKACguIOtgnQArgBAuAdQBmAcBmApQBVAgBUAZIACAvQACBGgCAvIuvAnIgDAAQgnAAgqgcg");
	var mask_1_graphics_296 = new cjs.Graphics().p("AlFCXQhpgchngoQhXgghWgYIgBgtQgChLACguIOzgnQArAAAuAcQBnAcBmAoQBYAgBUAZIACAvQACBHgCAvIu1AmIgCABQgoAAgqgcg");
	var mask_1_graphics_297 = new cjs.Graphics().p("AlHCXQhpgchognQhYgghWgYIgBguQgDhKADgvIO3gmQArgBAvAcQBoAcBoAoQBXAfBWAZIABAwQADBGgDAwIu5AmIgDAAQgnAAgsgbg");
	var mask_1_graphics_298 = new cjs.Graphics().p("AlICXQhpgchqgnQhagfhWgYIgBguQgDhKADgwIO9gmQArAAAwAcQBoAbBpAnQBYAfBWAZIACAwQACBHgCAwIu+AlIgDABQgoAAgsgbg");
	var mask_1_graphics_299 = new cjs.Graphics().p("AlJCXQhrgchrgmQhZgfhYgYIgBguQgChLACgwIPCglQAsgBAwAcQBpAbBqAnQBZAfBXAYIACAwQACBHgCAxIvEAlIgDAAQgoAAgsgag");
	var mask_1_graphics_300 = new cjs.Graphics().p("AlKCWQhsgahrgnQhbgfhYgXIgBguQgChLACgwIPGgmQAtAAAwAbQBqAbBrAmQBaAfBYAXIABAxQADBIgCAwIvJAmIgBAAQgqAAgtgbg");
	var mask_1_graphics_301 = new cjs.Graphics().p("AlLCWQhtgahtgmQhbgfhZgXIgBgvQgChLACgwIPLglQAugBAwAbQBrAbBsAmQBbAeBZAXIABAyQACBHgCAxIvNAlIgCAAQgqAAgtgag");
	var mask_1_graphics_302 = new cjs.Graphics().p("AlMCWQhugahugmQhcgehZgXIgCgvQgChLACgxIPRglQAuAAAwAbQBtAaBsAlQBcAeBaAXIABAyQACBIgCAxIvTAlIgCAAQgpAAgugag");
	var mask_1_graphics_303 = new cjs.Graphics().p("AlOCWQhugahvglQhdgehagXIgCgvQgChLACgyIPWgkQAugBAxAbQBtAaBuAlQBcAeBbAWIABAyQADBIgCAyIvYAkIgCAAQgqAAgvgZg");
	var mask_1_graphics_304 = new cjs.Graphics().p("AlPCWQhvgahwglQhdgdhcgXIgBgvQgChMACgyIPbgkQAuAAAxAaQBvAZBuAlQBeAeBbAWIABAyQADBJgDAyIvcAkIgCAAQgrAAgvgZg");
	var mask_1_graphics_305 = new cjs.Graphics().p("AlQCVQhwgZhxgkQhfgehcgWIgBgvQgChMACgzIPggjQAvgBAxAaQBwAZBvAlQBeAdBdAWIABAzQACBIgCAzIviAjIgCAAQgrAAgvgZg");
	var mask_1_graphics_306 = new cjs.Graphics().p("AlRCVQhxgZhygkQhfgdhdgWIgCgwQgChMACgzIPlgjQAwAAAyAZQBwAZBwAlQBfAcBdAWIACAzQACBJgCAzIvnAjIgCAAQgsAAgvgZg");
	var mask_1_graphics_307 = new cjs.Graphics().p("AlSCVQhzgZhygjQhggdhegWIgBgwQgChMACg0IPqgiQAvgBAzAaQBxAYBxAkQBgAcBeAWIABAzQADBJgDA0IvrAiIgCAAQgsAAgwgYg");
	var mask_1_graphics_308 = new cjs.Graphics().p("AlTCVQh0gZhzgjQhhgchfgWIgBgwQgChNACg0IPvgiQAwAAAzAZQByAYByAkQBhAcBfAVIABAzQACBJgCA1IvxAiIgCAAQgsAAgwgYg");
	var mask_1_graphics_309 = new cjs.Graphics().p("AlUCVQh0gZh1gjQhigchfgVIgCgwQgChNACg1IP1ghQAwgBAzAZQBzAYB0AjQBhAcBgAVIABA0QACBJgCA1Iv2AhIgCAAQgtAAgwgXg");
	var mask_1_graphics_310 = new cjs.Graphics().p("AlVCUQh2gYh1giQhjgchggVIgCgxQgChMACg1IP6giQAxAAAzAYQB0AYB1AjQBiAbBgAVIABA0QADBJgCA2Iv8AhIgCAAQgtAAgwgYg");
	var mask_1_graphics_311 = new cjs.Graphics().p("AlWCUQh3gYh2giQhkgbhhgVIgBgxQgChNACg1IP+ghQAygBA0AYQB1AYB1AiQBjAbBhAVIABA0QADBKgCA1IwBAhIgCAAQgtAAgxgXg");
	var mask_1_graphics_312 = new cjs.Graphics().p("AlYCUQh3gYh3ghQhlgbhigVIgBgxQgChNACg2IQEghQAxAAA0AYQB2AXB3AiQBjAbBjAUIABA0QACBKgCA2IwGAhIgDAAQgtAAgxgXg");
	var mask_1_graphics_313 = new cjs.Graphics().p("AlZCUQh4gXh4giQhlgahjgVIgCgxQgBhOABg2IQJggQAygBA1AYQB3AXB3AhQBlAbBjAUIABA1QACBKgCA2IwLAgIgEAAQgtAAgxgWg");
	var mask_1_graphics_314 = new cjs.Graphics().p("AlaCUQh5gXh6ghQhlgbhkgUIgCgxQgBhOABg3IQOggQAzAAA1AXQB4AXB4AhQBlAaBkAUIABA1QACBKgCA3IwQAgIgEAAQgtAAgxgWg");
	var mask_1_graphics_315 = new cjs.Graphics().p("AlbCTQh6gWh6ghQhngahlgUIgBgyQgChNACg4IQTgfQAzgBA1AXQB5AXB5AgQBmAaBlAUIABA1QACBLgCA3IwVAfIgEAAQguAAgxgWg");
	var mask_1_graphics_316 = new cjs.Graphics().p("AlcCTQh7gWh8ggQhngahmgUIgBgyQgChOACg4IQYgfQAzAAA2AXQB6AWB6AgQBnAZBmAUIABA1QACBLgCA4IwaAfIgEAAQgvAAgxgWg");
	var mask_1_graphics_317 = new cjs.Graphics().p("AldCTQh9gWh8ggQhogZhngUIAAgyQgChOACg5IQcgeQA0gBA2AXQB7AWB7AfQBoAaBmATIABA2QACBLgCA4IwfAeIgEAAQgvAAgxgVg");
	var mask_1_graphics_318 = new cjs.Graphics().p("AleCTQh+gXh9geQhpgZhngUIgBgzQgChOACg5IQigeQA0gBA2AWQB8AWB8AgQBpAYBnAUIABA1QACBMgCA5IwkAeIgCAAQgwAAgzgVg");
	var mask_1_graphics_319 = new cjs.Graphics().p("AlfCTQh/gWh+gfQhqgZhogTIgBgzQgChPACg5IQngdQA1gBA3AWQB8AVB9AfQBqAZBoATIABA2QACBLgCA6IwpAdIgDABQgwAAgzgVg");
	var mask_1_graphics_320 = new cjs.Graphics().p("AlhCSQh/gVh/geQhrgZhpgTIgBgzQgChPACg6IQsgdQA1gBA3AWQB+AVB+AfQBqAYBpATIABA2QACBMgBA6IwvAdIgCAAQgxAAg0gVg");
	var mask_1_graphics_321 = new cjs.Graphics().p("AliCSQiAgViAgeQhsgYhpgTIgBg0QgChOACg7IQxgcQA1gBA4AVQB+AVB/AfQBrAYBqASIABA3QACBLgBA7Iw0AdIgDAAQgxAAg0gVg");
	var mask_1_graphics_322 = new cjs.Graphics().p("AljCSQiBgViBgeQhtgYhqgSIgBg1QgChNACg8IQ3gcQA1AAA4AUQCAAVB/AeQBtAYBqASIABA3QACBLgCA7Iw5AdIgCAAQgxAAg1gUg");
	var mask_1_graphics_323 = new cjs.Graphics().p("AlkCSQiCgViCgdQhtgYhsgSIgBg0QgChPACg8IQ8gcQA2AAA4AVQCBAUCAAeQBtAXBsASIABA3QACBMgCA7Iw+AdIgDAAQgxAAg1gUg");
	var mask_1_graphics_324 = new cjs.Graphics().p("AllCSQiDgViDgdQhugXhsgRIgBg2QgDhOADg8IRAgcQA2AAA5AUQCBAUCDAdQBtAXBtASIAAA3QACBNgCA7IxCAcIgDAAQgyAAg1gTg");
	var mask_1_graphics_325 = new cjs.Graphics().p("AlmCRQiEgUiEgcQhvgXhtgRIgBg2QgChPACg8IRFgcQA3AAA5AUQCDAUCCAdQBvAXBtARIABA4QACBMgCA8IxIAcIgCAAQgyAAg2gUg");
	var mask_1_graphics_326 = new cjs.Graphics().p("AlnCRQiFgUiGgcQhvgWhugRIgBg2QgBhPABg9IRLgbQA3AAA5AUQCEATCDAcQBwAXBuARIABA4QACBNgCA8IxNAbIgDAAQgyAAg2gTg");
	var mask_1_graphics_327 = new cjs.Graphics().p("AloCRQiGgTiGgcQhxgWhvgRIgBg2QgBhPABg+IRQgbQA4AAA6AUQCEATCEAcQBxAWBvARIABA5QABBMgBA9IxTAbIgCAAQg0AAg1gTg");
	var mask_1_graphics_328 = new cjs.Graphics().p("AlpCRQiHgTiHgcQhygWhvgQIgBg2QgChQACg+IRVgaQA4AAA6ATQCFATCGAbQBxAWBwARIAAA5QACBNgBA9IxYAaIgDAAQgzAAg2gSg");
	var mask_1_graphics_329 = new cjs.Graphics().p("AlrCRQiIgTiIgbQhygWhwgQIgBg3QgChPACg+IRagbQA4AAA7ATQCGATCHAbQBxAVBxARIABA6QACBMgCA+IxdAaIgCAAQg0AAg3gSg");
	var mask_1_graphics_330 = new cjs.Graphics().p("AlsCQQiJgSiIgbQhzgVhygQIgBg3QgBhQABg+IRggaQA4AAA7ASQCHATCIAbQBzAVBxAQIABA6QACBNgCA+IxiAZIgDAAQg0AAg3gSg");
	var mask_1_graphics_331 = new cjs.Graphics().p("AltCQQiKgSiKgaQh0gVhygQIgBg3QgBhQABg/IRlgaQA5AAA7ATQCIASCJAaQBzAVByAQIABA6QACBNgCA/IxmAZIgDAAQg1AAg3gSg");
	var mask_1_graphics_332 = new cjs.Graphics().p("AluCQQiLgSiLgaQh0gUhzgQIgBg3QgChRACg/IRpgZQA6AAA7ASQCKASCJAaQB0AUBzAQIABA6QACBOgCA/IxsAYIgDAAQg0AAg4gRg");
	var mask_1_graphics_333 = new cjs.Graphics().p("AlvCQQiMgSiMgZQh1gVh0gPIgBg3QgChRAChAIRugZQA7AAA7ASQCLASCKAZQB1AUB0AQIABA7QACBNgCA/IxxAZIgDAAQg1AAg4gRg");
	var mask_1_graphics_334 = new cjs.Graphics().p("AlwCQQiNgSiNgZQh2gUh1gPIgBg4QgBhQABhBIR0gYQA6AAA9ARQCLASCLAZQB2AUB1APIABA7QABBOgBA/Ix2AYIgDAAQg2AAg4gQg");
	var mask_1_graphics_335 = new cjs.Graphics().p("AlxCPQiOgRiOgYQh3gVh1gOIgBg4QgChRAChBIR4gYQA7AAA9ASQCMARCMAYQB3ATB2AQIABA7QABBNgBBBIx8AYQg3AAg6gRg");
	var mask_1_graphics_336 = new cjs.Graphics().p("AlyCPQiPgRiPgYQh4gTh2gPIgBg4QgChRAChCIR+gXQA7gBA9ASQCNAQCNAYQB4AUB2APIABA7QACBOgCBBIyAAXQg4AAg6gQg");
	var mask_1_graphics_337 = new cjs.Graphics().p("AlzCOQiQgQiQgYQh5gTh3gPIgBg4QgBhRABhCISDgXQA8AAA9AQQCOARCOAYQB5ATB3AOIABA8QACBOgCBCIyFAXIgEAAQg2AAg5gRg");
	var mask_1_graphics_338 = new cjs.Graphics().p("Al1COQiQgQiRgXQh6gTh4gPIgBg4QgBhSABhCISIgXQA8AAA+ARQCPAQCPAXQB5ATB5AOIAAA8QACBPgBBCIyLAWIgDABQg3AAg6gRg");
	var mask_1_graphics_339 = new cjs.Graphics().p("Al2COQiRgQiSgXQh6gSh5gPIgBg4QgBhSABhDISNgWQA8AAA/AQQCPAQCQAXQB7ASB5AOIAAA9QACBOgBBCIyQAXIgEAAQg3AAg6gQg");
	var mask_1_graphics_340 = new cjs.Graphics().p("Al3COQiTgQiSgWQh7gTh6gOIgBg4QgBhSABhEISSgWQA9AAA+AQQCRAQCRAWQB7ASB6AOIABA9QABBPgBBCIyVAWIgDABQg4AAg6gQg");
	var mask_1_graphics_341 = new cjs.Graphics().p("Al4COQiUgQiTgWQh8gSh7gNIgBg6QgBhSABhEISYgVQA9AAA/APQCSAQCSAWQB7ASB7ANIABA9QABBPgBBDIyaAWIgEAAQg4AAg6gPg");
	var mask_1_graphics_342 = new cjs.Graphics().p("Al5CNQiVgPiUgWQh9gRh8gNIgBg6QgBhSABhFISdgVQA9AABAAQQCSAPCTAVQB9ASB7ANIABA9QACBQgCBDIyfAVIgDABQg5AAg6gQg");
	var mask_1_graphics_343 = new cjs.Graphics().p("Al6CNQiWgPiVgVQh+gRh8gNIgBg6QgBhTABhEIShgVQA+AABAAPQCUAPCUAVQB9ARB8ANIABA+QACBPgCBEIykAVIgEAAQg4AAg7gPg");
	var mask_1_graphics_344 = new cjs.Graphics().p("Al7CNQiXgPiXgVQh+gQh9gNIgBg6QgBhTABhFISngVQA+AABAAPQCVAPCVAVQB+AQB9ANIABA+QABBQgBBEIyqAUIgDABQg5AAg7gPg");
	var mask_1_graphics_345 = new cjs.Graphics().p("Al8CNQiYgPiXgUQiAgRh+gMIgBg7QgBhTABhFISsgUQA/AABAAOQCWAOCWAVQB/ARB+AMIABA+QABBQgBBFIyvAUIgEAAQg5AAg7gOg");
	var mask_1_graphics_346 = new cjs.Graphics().p("Al9CNQiZgPiYgUQiAgQiAgMIgBg7QgBhTABhGISygUQA+AABCAOQCWAOCWAVQCAAQCAAMIABA+QABBRgBBFIy0ATIgEABQg6AAg7gOg");
	var mask_1_graphics_347 = new cjs.Graphics().p("Al/CMQiZgNiagUQiBgQh/gMIgBg7QgBhTABhHIS2gTQA/AABCAOQCXANCYAUQCAAQCAAMIABA/QABBQgBBGIy5ATIgEAAQg5AAg9gOg");
	var mask_1_graphics_348 = new cjs.Graphics().p("AmACMQiagNiagUQiCgPiBgMIgBg7QgBhUABhHIS7gTQBAAABCAOQCYANCZAUQCCAPCAAMIABA/QABBRgBBGIy+ASIgEABQg6AAg9gOg");
	var mask_1_graphics_349 = new cjs.Graphics().p("AmBCMQibgNicgTQiCgPiCgMIAAg7QgChUAChIITAgSQBAAABCAOQCZANCaASQCCAQCCALIAAA/QACBRgCBHIzCASIgFAAQg6AAg9gNg");
	var mask_1_graphics_350 = new cjs.Graphics().p("AmCCMQicgNidgTQiDgPiCgLIgBg7QgBhUABhJITFgSQBBAABCAOQCbANCaASQCDAPCDALIAAA/QABBRgBBHIzIASIgEABQg7AAg9gNg");
	var mask_1_graphics_351 = new cjs.Graphics().p("AmDCMQiegNidgSQiEgOiDgMIgBg8QgBhUABhJITKgRQBBAABDANQCbANCcARQCEAPCDALIABBAQABBRgBBHIzNASIgFAAQg7AAg9gMg");
	var mask_1_graphics_352 = new cjs.Graphics().p("AmFCMQidgNifgRQiFgPiEgLIAAg8QgBhUABhJITPgRQBBgBBDANQCcAMCdASQCFAOCEALIABBAQABBSgBBHIzTARIgEABQg8AAg+gMg");
	var mask_1_graphics_353 = new cjs.Graphics().p("AmGCLQifgMifgRQiGgOiFgLIAAg8QgBhVABhJITUgRQBCgBBDANQCeAMCdARQCGAOCFALIAABAQABBSgBBIIzXARQg+AAhBgMg");
	var mask_1_graphics_354 = new cjs.Graphics().p("AmHCLQiggMiggRQiHgOiFgKIgBg8QgBhVABhKITagRQBCAABEAMQCdAMCfARQCGAOCGAKIABBAQABBSgBBJIzdARQg+AAhBgMg");
	var mask_1_graphics_355 = new cjs.Graphics().p("AmICLQihgMihgQQiIgOiGgKIgBg9QgBhVABhKITfgQQBCgBBFAMQCfAMCfARQCHANCHAKIABBBQABBSgBBJIziAQQg/AAhBgLg");
	var mask_1_graphics_356 = new cjs.Graphics().p("AmJCLQiigMiigQQiIgNiIgKIAAg9QgBhVABhLITjgQQBDAABFAMQCgALCgAQQCJANCHAKIAABBQACBSgBBKIznAQQg/AAhCgLg");
	var mask_1_graphics_357 = new cjs.Graphics().p("AmKCKQijgLijgQQiKgMiIgKIAAg9QgBhWABhLITogPQBEgBBFAMQChALChAQQCJAMCIAKIABBBIAACdIzsAPQg/AAhCgLg");
	var mask_1_graphics_358 = new cjs.Graphics().p("AmLCKQikgLikgPQiKgMiJgKIgBg9QgBhWABhMITugPQBEAABFALQCiALCiAPQCKAMCJAKIABBBQABBTgBBLIzxAPQhAAAhCgLg");
	var mask_1_graphics_359 = new cjs.Graphics().p("AmMCKQimgLilgPQiKgMiKgJIgBg+QgBhVABhNITzgOQBEgBBHALQCjALCjAPQCKAMCKAJIABBCQABBTgBBLIz3AOQg/AAhDgKg");
	var mask_1_graphics_360 = new cjs.Graphics().p("AmNCKQimgLimgOQiMgMiLgJIAAg+QgBhWABhNIT4gOQBEAABGAKQCkALClAOQCLAMCLAJIAABCQABBTgBBMIz7AOQhBAAhCgKg");
	var mask_1_graphics_361 = new cjs.Graphics().p("AmOCKQiogKingPQiMgLiMgJIAAg+QgBhWABhOIT9gNQBFgBBHALQCkAJClAPQCNALCMAJIAABCQABBUgBBLI0AAOIgGAAQg/AAg/gJg");
	var mask_1_graphics_362 = new cjs.Graphics().p("AmQCJQiogJiogOQiNgLiMgJIgBg+QgBhXABhNIUCgOQBGAABHAKQCmAJCmAOQCNALCMAJIABBCQABBUgBBMI0GAOIgGAAQg+AAhBgKg");
	var mask_1_graphics_363 = new cjs.Graphics().p("AmRCJQiogJipgOQiPgLiNgIIAAg+QgBhXABhOIUHgNQBGgBBHAKQCnAJCnAOQCOALCNAIIABBDIAACgI0LANIgGAAQg/AAhBgJg");
	var mask_1_graphics_364 = new cjs.Graphics().p("AmSCJQiqgJiqgNQiPgLiOgIIAAg/QgBhWABhPIUMgNQBGAABIAJQCoAJCoANQCOALCPAIIAABDIAAChI0PANIgHAAQg/AAhBgJg");
	var mask_1_graphics_365 = new cjs.Graphics().p("AmTCJQirgJirgNQiPgKiPgIIgBg/IAAimIUSgMQBGgBBIAJQCpAJCpANQCQAKCPAIIAABDIAACiI0VAMIgHAAQg/AAhBgIg");
	var mask_1_graphics_366 = new cjs.Graphics().p("AmUCJQisgJisgMQiQgKiQgIIgBg/IAAinIUXgMQBHAABIAJQCqAICqAMQCQAKCQAIIAABDQABBVgBBOI0ZAMIgIAAQg/AAhBgIg");
	var mask_1_graphics_367 = new cjs.Graphics().p("AmVCIQitgIitgMQiRgJiRgIIAAg/IAAioIUcgLQBHgBBJAJQCqAICrAMIEiARIAABEQABBUgBBPI0eALIgIAAQhAAAhBgIg");
	var mask_1_graphics_368 = new cjs.Graphics().p("AmWCIQiugIiugLQiSgKiSgHIAAhAIAAioIUhgLQBIAABIAIQCsAICsAMQCSAJCRAHIABBEQABBVgBBPI0kALIgIAAQhAAAhBgIg");
	var mask_1_graphics_369 = new cjs.Graphics().p("AmXCIQivgIivgLQiTgJiSgHIgBhAIAAipIUmgKQBJgBBJAIQCsAICtALIElAQIABBEIAAClI0pAKIgIAAQhAAAhCgHg");
	var mask_1_graphics_370 = new cjs.Graphics().p("AmYCIQiwgIiwgKQiUgJiTgHIAAhAIAAiqIUrgKQBIAABKAIQCuAHCtALQCUAICTAHIABBEIAACmI0vAKIgIAAQhBAAhBgHg");
	var mask_1_graphics_371 = new cjs.Graphics().p("AmaCIQiwgIixgKQiVgIiUgHIAAhAIAAiqIUwgKQBJgBBKAIQCvAHCuAKIEpAPIAABFIAACmI0zAKQhFAAhHgHg");
	var mask_1_graphics_372 = new cjs.Graphics().p("AmbCHQiygHixgJIkqgPIgBhAIAAirIU2gKQBJAABKAHQCvAHCwAKQCVAICVAGIABBFIAACmI04AKQhGAAhHgHg");
	var mask_1_graphics_373 = new cjs.Graphics().p("AmcCHQizgHiygJQiXgIiVgFIgBhCIAAirIU7gKQBKAABKAHQCxAHCwAJQCWAICWAGIABBFIAACnI0+AKQhGAAhHgHg");
	var mask_1_graphics_374 = new cjs.Graphics().p("AmdCHQizgGi0gKIkugMIAAhCIAAisIU/gJQBLAABLAGQCxAHCyAJQCXAHCWAGIAABFIABCoI1DAJQhGAAhIgGg");
	var mask_1_graphics_375 = new cjs.Graphics().p("AmeCHQi0gGi1gJQiYgHiXgFIgBhCIAAitIVFgJQBKAABMAHQCyAGCzAIIEvANIAABGIAACoI1IAJQhGAAhIgGg");
	var mask_1_graphics_376 = new cjs.Graphics().p("AmfCHQi2gGi1gJIkxgLIgBhCIAAiuIVKgIQBLAABMAGQCzAGC0AIQCYAHCZAFIAABGIAACpI1NAIQhHAAhIgFg");
	var mask_1_graphics_377 = new cjs.Graphics().p("AmgCGQi3gFi2gIIkzgLIgBhCIAAivIVQgIQBLAABMAGQC0AFC0AIIE0AMIAABGIAACqI1SAIQhIAAhIgGg");
	var mask_1_graphics_378 = new cjs.Graphics().p("AmhCGQi4gFi3gIIk1gKIAAhDIAAivIVUgHQBMAABMAFQC1AFC2AIIE0ALIAABGIAACrI1XAHQhHAAhJgFg");
	var mask_1_graphics_379 = new cjs.Graphics().p("AmjCGQi4gFi5gHIk2gKIAAhDIAAiwIVZgHQBMAABNAFQC2AFC3AIIE2AKIAABHIAACrI1cAHQhIAAhKgFg");
	var mask_1_graphics_380 = new cjs.Graphics().p("AmkCGIlzgMIk3gJIgBhDIAAixIVegGQBNAABNAFQC4AEC3AHIE3AKIABBHIAACsI1hAGQhJAAhKgEg");
	var mask_1_graphics_381 = new cjs.Graphics().p("AmlCFQi6gEi7gGIk5gJIAAhDIAAixIVjgHQBNAABNAFQC4AEC5AHIE5AJIAABHIAACtI1mAGQhJAAhKgFg");
	var mask_1_graphics_382 = new cjs.Graphics().p("AmmCFQi7gEi8gGQidgFiegDIAAhEIAAixIVogGQBOAABOAEQC5AEC5AGIE7AJIAABHIAACuI1rAFQhKAAhKgEg");
	var mask_1_graphics_383 = new cjs.Graphics().p("AmnCFQi9gEi8gFIk9gIIAAhEIAAiyIVtgGQBOAABPAEQC6AEC6AGIE8AIIABBIIAACuI1xAFQhKAAhKgEg");
	var mask_1_graphics_384 = new cjs.Graphics().p("AmoCFQi+gEi9gFIk+gHIAAhEIAAizIVygFQBOAABPADIF2AJIE+AHIAABJIAACuI11AFQhKAAhLgDg");
	var mask_1_graphics_385 = new cjs.Graphics().p("AmpCFIl9gIIlAgHIAAhEIAAi0IV3gFQBPAABPAEQC8ADC8AFQCgAECgACIAABJIAACvI17AFIgSAAQhBAAhCgDg");
	var mask_1_graphics_386 = new cjs.Graphics().p("AmqCEIl/gHIlCgGIAAhEIAAi1IV9gEQBPAABPADQC9ADC9AEIFCAGIAABJIAACwI2AAEIgTAAQhBAAhCgDg");
	var mask_1_graphics_387 = new cjs.Graphics().p("AmsCEQjAgCjAgEIlDgGIAAhFIAAi1IWBgEQBQAABPADIF8AHIFDAFIAABKIAACwI2FAEIgVAAQhAAAhCgDg");
	var mask_1_graphics_388 = new cjs.Graphics().p("AmtCEImCgGIlFgFIAAhFIAAi2IWGgDQBQAABQACIF+AGIFFAFIAABKIAACxI2KADIgZAAQg/AAhAgCg");
	var mask_1_graphics_389 = new cjs.Graphics().p("AmuCEQjCgDjCgDIlHgEIAAhFIAAi3IWMgDQBQAABRACIF/AGIFHAEIAABKIAACxI2PAEQhMAAhNgCg");
	var mask_1_graphics_390 = new cjs.Graphics().p("AmvCEImGgGIlJgDIAAhFIAAi4IWRgDQBRAABRACIGBAFIFJAEIAABKIAACyI2VAEQhMAAhNgCg");
	var mask_1_graphics_391 = new cjs.Graphics().p("AmwCDImJgEIlKgDIAAhGIAAi4IWWgCICjABIGDAFIFKADIAABKIAACzI2ZADQhMAAhOgCg");
	var mask_1_graphics_392 = new cjs.Graphics().p("AmxCDImLgEIlLgCIAAhGIAAi5IWbgCQBRABBSABIGFAEIFMACIAABKIAAC0I2eADQhOAAhNgCg");
	var mask_1_graphics_393 = new cjs.Graphics().p("AmyCDImMgDIlOgCIAAhGIAAi6IWggBICkABIGIADIFNACIAABLIAAC0I2kACIibgBg");
	var mask_1_graphics_394 = new cjs.Graphics().p("AmzCCImOgCIlQgBIAAhHIAAi6IWlgBIClABIGJADIFPABIAABLIAAC1I2oACIicgCg");
	var mask_1_graphics_395 = new cjs.Graphics().p("Am0CCImRgBIlQgBIAAhHIAAi6IWqgBICmAAIGLACIFQABIAABLIAAC2I2tABIidgBg");
	var mask_1_graphics_396 = new cjs.Graphics().p("Am2CCImRgBIlTAAIAAhHIAAi7IWwgBIClABIGOABIFSAAIAABLIAAC3I2zAAIieAAg");
	var mask_1_graphics_397 = new cjs.Graphics().p("AmjW6IAAkEMAk/AAAIAAEEg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(202).to({graphics:mask_1_graphics_202,x:149.7,y:280.1}).wait(1).to({graphics:mask_1_graphics_203,x:150.4,y:280.1}).wait(1).to({graphics:mask_1_graphics_204,x:151,y:280.1}).wait(1).to({graphics:mask_1_graphics_205,x:151.6,y:280.1}).wait(1).to({graphics:mask_1_graphics_206,x:152.2,y:280.1}).wait(1).to({graphics:mask_1_graphics_207,x:152.8,y:280.1}).wait(1).to({graphics:mask_1_graphics_208,x:153.5,y:280.1}).wait(1).to({graphics:mask_1_graphics_209,x:154.1,y:280.1}).wait(1).to({graphics:mask_1_graphics_210,x:154.7,y:280.1}).wait(1).to({graphics:mask_1_graphics_211,x:155.4,y:280.2}).wait(1).to({graphics:mask_1_graphics_212,x:156,y:280.2}).wait(1).to({graphics:mask_1_graphics_213,x:156.6,y:280.2}).wait(1).to({graphics:mask_1_graphics_214,x:157.2,y:280.2}).wait(1).to({graphics:mask_1_graphics_215,x:157.8,y:280.2}).wait(1).to({graphics:mask_1_graphics_216,x:158.5,y:280.2}).wait(1).to({graphics:mask_1_graphics_217,x:159.1,y:280.2}).wait(1).to({graphics:mask_1_graphics_218,x:159.7,y:280.2}).wait(1).to({graphics:mask_1_graphics_219,x:160.3,y:280.2}).wait(1).to({graphics:mask_1_graphics_220,x:161,y:280.2}).wait(1).to({graphics:mask_1_graphics_221,x:161.6,y:280.2}).wait(1).to({graphics:mask_1_graphics_222,x:162.2,y:280.2}).wait(1).to({graphics:mask_1_graphics_223,x:162.8,y:280.2}).wait(1).to({graphics:mask_1_graphics_224,x:163.5,y:280.2}).wait(1).to({graphics:mask_1_graphics_225,x:164.1,y:280.2}).wait(1).to({graphics:mask_1_graphics_226,x:164.7,y:280.2}).wait(1).to({graphics:mask_1_graphics_227,x:165.3,y:280.1}).wait(1).to({graphics:mask_1_graphics_228,x:165.9,y:280.1}).wait(1).to({graphics:mask_1_graphics_229,x:166.6,y:280.2}).wait(1).to({graphics:mask_1_graphics_230,x:167.2,y:280.2}).wait(1).to({graphics:mask_1_graphics_231,x:167.8,y:280.2}).wait(1).to({graphics:mask_1_graphics_232,x:168.4,y:280.2}).wait(1).to({graphics:mask_1_graphics_233,x:169.1,y:280.2}).wait(1).to({graphics:mask_1_graphics_234,x:169.7,y:280.2}).wait(1).to({graphics:mask_1_graphics_235,x:170.3,y:280.2}).wait(1).to({graphics:mask_1_graphics_236,x:170.9,y:280.2}).wait(1).to({graphics:mask_1_graphics_237,x:171.5,y:280.2}).wait(1).to({graphics:mask_1_graphics_238,x:172.2,y:280.2}).wait(1).to({graphics:mask_1_graphics_239,x:172.8,y:280.2}).wait(1).to({graphics:mask_1_graphics_240,x:173.4,y:280.2}).wait(1).to({graphics:mask_1_graphics_241,x:174,y:280.2}).wait(1).to({graphics:mask_1_graphics_242,x:174.7,y:280.2}).wait(1).to({graphics:mask_1_graphics_243,x:175.3,y:280.2}).wait(1).to({graphics:mask_1_graphics_244,x:175.9,y:280.2}).wait(1).to({graphics:mask_1_graphics_245,x:176.5,y:280.2}).wait(1).to({graphics:mask_1_graphics_246,x:177.1,y:280.2}).wait(1).to({graphics:mask_1_graphics_247,x:177.8,y:280.2}).wait(1).to({graphics:mask_1_graphics_248,x:178.4,y:280.2}).wait(1).to({graphics:mask_1_graphics_249,x:179,y:280.2}).wait(1).to({graphics:mask_1_graphics_250,x:179.6,y:280.2}).wait(1).to({graphics:mask_1_graphics_251,x:180.3,y:280.2}).wait(1).to({graphics:mask_1_graphics_252,x:180.9,y:280.2}).wait(1).to({graphics:mask_1_graphics_253,x:181.5,y:280.2}).wait(1).to({graphics:mask_1_graphics_254,x:182.1,y:280.2}).wait(1).to({graphics:mask_1_graphics_255,x:182.8,y:280.2}).wait(1).to({graphics:mask_1_graphics_256,x:183.4,y:280.2}).wait(1).to({graphics:mask_1_graphics_257,x:184,y:280.2}).wait(1).to({graphics:mask_1_graphics_258,x:184.6,y:280.2}).wait(1).to({graphics:mask_1_graphics_259,x:185.3,y:280.2}).wait(1).to({graphics:mask_1_graphics_260,x:185.9,y:280.2}).wait(1).to({graphics:mask_1_graphics_261,x:186.5,y:280.2}).wait(1).to({graphics:mask_1_graphics_262,x:187.1,y:280.2}).wait(1).to({graphics:mask_1_graphics_263,x:187.7,y:280.2}).wait(1).to({graphics:mask_1_graphics_264,x:188.4,y:280.2}).wait(1).to({graphics:mask_1_graphics_265,x:189,y:280.2}).wait(1).to({graphics:mask_1_graphics_266,x:189.6,y:280.2}).wait(1).to({graphics:mask_1_graphics_267,x:190.2,y:280.2}).wait(1).to({graphics:mask_1_graphics_268,x:190.9,y:280.2}).wait(1).to({graphics:mask_1_graphics_269,x:191.5,y:280.2}).wait(1).to({graphics:mask_1_graphics_270,x:192.1,y:280.2}).wait(1).to({graphics:mask_1_graphics_271,x:192.7,y:280.2}).wait(1).to({graphics:mask_1_graphics_272,x:193.3,y:280.2}).wait(1).to({graphics:mask_1_graphics_273,x:194,y:280.2}).wait(1).to({graphics:mask_1_graphics_274,x:194.6,y:280.2}).wait(1).to({graphics:mask_1_graphics_275,x:195.2,y:280.2}).wait(1).to({graphics:mask_1_graphics_276,x:195.8,y:280.2}).wait(1).to({graphics:mask_1_graphics_277,x:196.5,y:280.2}).wait(1).to({graphics:mask_1_graphics_278,x:197.1,y:280.2}).wait(1).to({graphics:mask_1_graphics_279,x:197.7,y:280.2}).wait(1).to({graphics:mask_1_graphics_280,x:198.3,y:280.2}).wait(1).to({graphics:mask_1_graphics_281,x:198.9,y:280.2}).wait(1).to({graphics:mask_1_graphics_282,x:199.6,y:280.2}).wait(1).to({graphics:mask_1_graphics_283,x:200.2,y:280.2}).wait(1).to({graphics:mask_1_graphics_284,x:200.8,y:280.2}).wait(1).to({graphics:mask_1_graphics_285,x:201.5,y:280.2}).wait(1).to({graphics:mask_1_graphics_286,x:202.1,y:280.2}).wait(1).to({graphics:mask_1_graphics_287,x:202.7,y:280.2}).wait(1).to({graphics:mask_1_graphics_288,x:203.3,y:280.2}).wait(1).to({graphics:mask_1_graphics_289,x:204,y:280.2}).wait(1).to({graphics:mask_1_graphics_290,x:204.6,y:280.2}).wait(1).to({graphics:mask_1_graphics_291,x:205.2,y:280.2}).wait(1).to({graphics:mask_1_graphics_292,x:205.8,y:280.2}).wait(1).to({graphics:mask_1_graphics_293,x:206.4,y:280.2}).wait(1).to({graphics:mask_1_graphics_294,x:207.1,y:280.2}).wait(1).to({graphics:mask_1_graphics_295,x:207.7,y:280.2}).wait(1).to({graphics:mask_1_graphics_296,x:208.3,y:280.2}).wait(1).to({graphics:mask_1_graphics_297,x:208.9,y:280.2}).wait(1).to({graphics:mask_1_graphics_298,x:209.6,y:280.2}).wait(1).to({graphics:mask_1_graphics_299,x:210.2,y:280.2}).wait(1).to({graphics:mask_1_graphics_300,x:210.8,y:280.2}).wait(1).to({graphics:mask_1_graphics_301,x:211.4,y:280.2}).wait(1).to({graphics:mask_1_graphics_302,x:212,y:280.2}).wait(1).to({graphics:mask_1_graphics_303,x:212.7,y:280.2}).wait(1).to({graphics:mask_1_graphics_304,x:213.3,y:280.2}).wait(1).to({graphics:mask_1_graphics_305,x:213.9,y:280.2}).wait(1).to({graphics:mask_1_graphics_306,x:214.5,y:280.2}).wait(1).to({graphics:mask_1_graphics_307,x:215.2,y:280.2}).wait(1).to({graphics:mask_1_graphics_308,x:215.8,y:280.2}).wait(1).to({graphics:mask_1_graphics_309,x:216.4,y:280.2}).wait(1).to({graphics:mask_1_graphics_310,x:217,y:280.2}).wait(1).to({graphics:mask_1_graphics_311,x:217.6,y:280.2}).wait(1).to({graphics:mask_1_graphics_312,x:218.3,y:280.2}).wait(1).to({graphics:mask_1_graphics_313,x:218.9,y:280.2}).wait(1).to({graphics:mask_1_graphics_314,x:219.5,y:280.2}).wait(1).to({graphics:mask_1_graphics_315,x:220.1,y:280.2}).wait(1).to({graphics:mask_1_graphics_316,x:220.8,y:280.2}).wait(1).to({graphics:mask_1_graphics_317,x:221.4,y:280.2}).wait(1).to({graphics:mask_1_graphics_318,x:222,y:280.3}).wait(1).to({graphics:mask_1_graphics_319,x:222.6,y:280.3}).wait(1).to({graphics:mask_1_graphics_320,x:223.3,y:280.3}).wait(1).to({graphics:mask_1_graphics_321,x:223.9,y:280.3}).wait(1).to({graphics:mask_1_graphics_322,x:224.5,y:280.3}).wait(1).to({graphics:mask_1_graphics_323,x:225.1,y:280.3}).wait(1).to({graphics:mask_1_graphics_324,x:225.8,y:280.2}).wait(1).to({graphics:mask_1_graphics_325,x:226.4,y:280.2}).wait(1).to({graphics:mask_1_graphics_326,x:227,y:280.2}).wait(1).to({graphics:mask_1_graphics_327,x:227.6,y:280.2}).wait(1).to({graphics:mask_1_graphics_328,x:228.2,y:280.2}).wait(1).to({graphics:mask_1_graphics_329,x:228.9,y:280.2}).wait(1).to({graphics:mask_1_graphics_330,x:229.5,y:280.2}).wait(1).to({graphics:mask_1_graphics_331,x:230.1,y:280.2}).wait(1).to({graphics:mask_1_graphics_332,x:230.7,y:280.2}).wait(1).to({graphics:mask_1_graphics_333,x:231.4,y:280.2}).wait(1).to({graphics:mask_1_graphics_334,x:232,y:280.2}).wait(1).to({graphics:mask_1_graphics_335,x:232.6,y:280.3}).wait(1).to({graphics:mask_1_graphics_336,x:233.2,y:280.3}).wait(1).to({graphics:mask_1_graphics_337,x:233.8,y:280.3}).wait(1).to({graphics:mask_1_graphics_338,x:234.5,y:280.3}).wait(1).to({graphics:mask_1_graphics_339,x:235.1,y:280.3}).wait(1).to({graphics:mask_1_graphics_340,x:235.7,y:280.3}).wait(1).to({graphics:mask_1_graphics_341,x:236.3,y:280.3}).wait(1).to({graphics:mask_1_graphics_342,x:237,y:280.3}).wait(1).to({graphics:mask_1_graphics_343,x:237.6,y:280.3}).wait(1).to({graphics:mask_1_graphics_344,x:238.2,y:280.3}).wait(1).to({graphics:mask_1_graphics_345,x:238.8,y:280.3}).wait(1).to({graphics:mask_1_graphics_346,x:239.5,y:280.3}).wait(1).to({graphics:mask_1_graphics_347,x:240.1,y:280.3}).wait(1).to({graphics:mask_1_graphics_348,x:240.7,y:280.3}).wait(1).to({graphics:mask_1_graphics_349,x:241.3,y:280.3}).wait(1).to({graphics:mask_1_graphics_350,x:241.9,y:280.3}).wait(1).to({graphics:mask_1_graphics_351,x:242.6,y:280.3}).wait(1).to({graphics:mask_1_graphics_352,x:243.2,y:280.3}).wait(1).to({graphics:mask_1_graphics_353,x:243.8,y:280.3}).wait(1).to({graphics:mask_1_graphics_354,x:244.5,y:280.3}).wait(1).to({graphics:mask_1_graphics_355,x:245.1,y:280.3}).wait(1).to({graphics:mask_1_graphics_356,x:245.7,y:280.3}).wait(1).to({graphics:mask_1_graphics_357,x:246.3,y:280.3}).wait(1).to({graphics:mask_1_graphics_358,x:246.9,y:280.3}).wait(1).to({graphics:mask_1_graphics_359,x:247.6,y:280.3}).wait(1).to({graphics:mask_1_graphics_360,x:248.2,y:280.3}).wait(1).to({graphics:mask_1_graphics_361,x:248.8,y:280.3}).wait(1).to({graphics:mask_1_graphics_362,x:249.4,y:280.3}).wait(1).to({graphics:mask_1_graphics_363,x:250,y:280.3}).wait(1).to({graphics:mask_1_graphics_364,x:250.7,y:280.3}).wait(1).to({graphics:mask_1_graphics_365,x:251.3,y:280.3}).wait(1).to({graphics:mask_1_graphics_366,x:251.9,y:280.3}).wait(1).to({graphics:mask_1_graphics_367,x:252.5,y:280.3}).wait(1).to({graphics:mask_1_graphics_368,x:253.2,y:280.3}).wait(1).to({graphics:mask_1_graphics_369,x:253.8,y:280.3}).wait(1).to({graphics:mask_1_graphics_370,x:254.4,y:280.3}).wait(1).to({graphics:mask_1_graphics_371,x:255,y:280.3}).wait(1).to({graphics:mask_1_graphics_372,x:255.7,y:280.3}).wait(1).to({graphics:mask_1_graphics_373,x:256.3,y:280.3}).wait(1).to({graphics:mask_1_graphics_374,x:256.9,y:280.3}).wait(1).to({graphics:mask_1_graphics_375,x:257.5,y:280.3}).wait(1).to({graphics:mask_1_graphics_376,x:258.1,y:280.3}).wait(1).to({graphics:mask_1_graphics_377,x:258.8,y:280.3}).wait(1).to({graphics:mask_1_graphics_378,x:259.4,y:280.3}).wait(1).to({graphics:mask_1_graphics_379,x:260,y:280.3}).wait(1).to({graphics:mask_1_graphics_380,x:260.6,y:280.3}).wait(1).to({graphics:mask_1_graphics_381,x:261.3,y:280.3}).wait(1).to({graphics:mask_1_graphics_382,x:261.9,y:280.3}).wait(1).to({graphics:mask_1_graphics_383,x:262.5,y:280.3}).wait(1).to({graphics:mask_1_graphics_384,x:263.1,y:280.3}).wait(1).to({graphics:mask_1_graphics_385,x:263.8,y:280.3}).wait(1).to({graphics:mask_1_graphics_386,x:264.4,y:280.3}).wait(1).to({graphics:mask_1_graphics_387,x:265,y:280.3}).wait(1).to({graphics:mask_1_graphics_388,x:265.6,y:280.3}).wait(1).to({graphics:mask_1_graphics_389,x:266.2,y:280.3}).wait(1).to({graphics:mask_1_graphics_390,x:266.9,y:280.3}).wait(1).to({graphics:mask_1_graphics_391,x:267.5,y:280.3}).wait(1).to({graphics:mask_1_graphics_392,x:268.1,y:280.3}).wait(1).to({graphics:mask_1_graphics_393,x:268.7,y:280.3}).wait(1).to({graphics:mask_1_graphics_394,x:269.4,y:280.3}).wait(1).to({graphics:mask_1_graphics_395,x:270,y:280.3}).wait(1).to({graphics:mask_1_graphics_396,x:270.6,y:280.3}).wait(1).to({graphics:mask_1_graphics_397,x:194.8,y:146.6}).wait(384));

	// Layer 6
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(20,1,1).p("AxLAyQSJhoQOAF");
	this.shape_2.setTransform(275.3,282.2,0.936,1,3.2,0,0,0.1,0.1);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(202).to({_off:false},0).wait(579));

	// arrow
	this.instance_3 = new lib.ar5("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(114.9,208.6,1,1,25.4,0,0,-0.1,-1.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).wait(772));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_9 = new cjs.Graphics().p("AAHEXQgxgVhGgkQhGgjgwgdQgvgcACgFIDXmlQACgFAzAWQAyAWBGAjQBGAkAvAcQAwAdgCAEIjXGmIgDABQgJAAgqgTg");
	var mask_2_graphics_10 = new cjs.Graphics().p("AAHEYQgggNgogTIgvgXQhGgkgxgcQgvgcACgFIDYmoQADgFAyAVQAlAPAwAXIAjARQBGAkAwAcQAwAdgCAFIgCAGIjWGiQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAQgKAAgpgSg");
	var mask_2_graphics_11 = new cjs.Graphics().p("AAIEaQgggMgpgTIgvgXQhHgjgwgdQgwgcACgFIDamrQACgFAyAUQAlAPAwAVIAjASQBHAjAwAdQAwAdgBAFIjaGqQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAQgKAAgngQg");
	var mask_2_graphics_12 = new cjs.Graphics().p("AAIEbQgggMgpgRIgvgYQhHgjgxgdQgvgcABgFIDbmuQACgFAyATQAkAOAwAUIAkASQBHAkAxAdQAvAcAAAGIgDAGIjYGnQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAQgKAAgngQg");
	var mask_2_graphics_13 = new cjs.Graphics().p("AAIEcQgggLgogRIgwgXQhIgkgxgdQgvgbAAgGIDdmwQADgGAxATQAkANAwATIAkASQBHAkAxAdQAwAdAAAFIjcGwQAAABgBAAQAAAAAAABQgBAAgBAAQAAAAgBAAQgLAAgmgPg");
	var mask_2_graphics_14 = new cjs.Graphics().p("AAIEdQgggKgogPIgwgYQhHgjgzgdQgvgcAAgGIDdmzQADgGAyASQAkAMAvATIAlASQBHAkAyAdQAvAcABAGIgCAGIjbGtQgBABgEAAQgLAAglgOg");
	var mask_2_graphics_15 = new cjs.Graphics().p("AAIEeQgfgJgogPIgxgXQhIgkgygdQgwgbAAgGIDfm2QADgGAxARQAkALAwASIAkASQBHAkAyAdQAwAdACAFIgDAGIjcGwQgBACgEAAQgMAAgkgOg");
	var mask_2_graphics_16 = new cjs.Graphics().p("AAIEgQgfgJgogOIgxgXQhIgkgzgdQgwgbAAgGIDgm5QAEgHAvARQAlAKAvAQIAlATQBIAkAyAeQAwAcACAGIgCAGIjeGyQgBACgFAAQgMAAgjgMg");
	var mask_2_graphics_17 = new cjs.Graphics().p("AAJEhQgggIgogNIgxgYQhIgjg0geQgvgbgCgGIDim7QAEgHAwAQQAkAJAvAPIAlATQBIAkAzAeQAwAcACAGIgCAGIjfG1QgBACgGAAQgMAAghgLg");
	var mask_2_graphics_18 = new cjs.Graphics().p("AAJEiQgggHgogMIgxgYQhJgkg0gdQgvgbgCgGIDjm+QAEgIAvAQQAkAIAwAOIAlATQBIAkA0AeQAvAcADAHIgCAGIjgG3QgBADgGAAQgNAAgggLg");
	var mask_2_graphics_19 = new cjs.Graphics().p("AAJEjQgfgGgogLIgxgYQhJgkg2geQgugagDgHIDlnAQADgIAwAOQAkAIAvANIAlATQBIAkA1AeQAvAdADAGIgBAGIjiG6QgBADgHAAQgNAAgfgKg");
	var mask_2_graphics_20 = new cjs.Graphics().p("AAJEkQgfgFgngLIgzgXQhJgkg2geQgugbgEgGIDmnDQAEgJAwAOQAjAHAvAMIAlATQBKAlA0AeQAvAcAFAHIgCAGIjjG8QgCAEgHAAQgNAAgegKg");
	var mask_2_graphics_21 = new cjs.Graphics().p("AAKElQgggEgngKIgygYQhKgkg2geQgvgagDgHIgBAAIDonGQAEgJAvAOQAkAFAuAMIAmATQBJAlA1AeQAwAcAEAHIgBAGIjlG/QgCAEgIAAQgNAAgcgJg");
	var mask_2_graphics_22 = new cjs.Graphics().p("AAKEmQgfgDgogJIgzgYQhJgkg3geQgvgagEgHIDonJQAFgJAvANQAkAEAtALIAmATQBKAlA2AeQAvAcAFAIIgCAFIjlHCQgCAFgJAAQgNAAgbgJg");
	var mask_2_graphics_23 = new cjs.Graphics().p("AAKEnQgfgCgngIIgzgYQhKgkg4geQgugbgFgHIAAAAIDqnLQAFgKAuANQAjADAvAKIAmATQBJAlA3AfQAvAcAFAHIgBAGIjnHEQgCAFgKAAQgNAAgagIg");
	var mask_2_graphics_24 = new cjs.Graphics().p("AAKEpQgfgCgngHIgzgYQhLgkg4geQgugbgFgHIDrnOQAFgKAuAMQAjADAuAIIAnATQBKAlA2AgQAwAbAFAIIAAAGIjpHHQgCAFgLAAQgNAAgZgHg");
	var mask_2_graphics_25 = new cjs.Graphics().p("AAKEqQgfgBgmgGIg0gYQhLglg4geQgvgagFgHIgBAAIDtnRQAFgKAuALQAjABAuAIIAnATQBKAmA3AfQAvAcAHAHIgBAGIjqHKQgCAFgMAAQgNAAgYgGg");
	var mask_2_graphics_26 = new cjs.Graphics().p("AALErQgfAAgngFIg0gZQhLgkg5geQgvgagGgHIDunUQAGgLAtALQAjAAAuAHIAnATQBKAmA4AfQAvAcAHAIIgBAGIjrHMQgCAGgNAAQgNAAgWgGg");
	var mask_2_graphics_27 = new cjs.Graphics().p("AALEsQgfABgngFIg0gYQhLgkg6gfQgugZgHgIIAAAAIDwnWQAFgLAtAJQAjAAAtAGIAoATQBKAmA5AgQAvAbAHAIIAAAGIjtHPQgDAGgNAAQgNAAgVgFg");
	var mask_2_graphics_28 = new cjs.Graphics().p("AALEuQgfABgmgEIg1gYQhLglg7geQgugagHgHIDxnZQAFgMAsAJQAkgBAtAEIAnAUQBLAmA5AgQAwAbAHAJIAAAFIjuHSQgDAHgPAAQgMAAgUgEg");
	var mask_2_graphics_29 = new cjs.Graphics().p("AALEvQgfACgmgDIg1gZQhMgkg6gfQgvgZgHgIIgBAAIDznbQAGgMArAIQAkgCAtADIAnAUQBMAmA5AgQAvAcAJAIIAAAGIjwHUQgDAHgRAAQgLAAgTgDg");
	var mask_2_graphics_30 = new cjs.Graphics().p("AALEwQgeADgngCIg1gZQhMgkg7gfQgugZgJgIID0neQAGgNArAIQAkgDAtACIAnAUQBMAmA6AhQAvAbAJAJIAAAFIjxHYQgDAHgRAAQgMAAgSgDg");
	var mask_2_graphics_31 = new cjs.Graphics().p("AALExQgeAEgngBIg1gZQhMgkg8gfQgvgagIgIID1nhQAGgMArAHQAkgEAsABIAoAUQBMAmA6AhQAwAbAJAJIAAAGIjxHaQgFAIgTAAQgLAAgQgDg");
	var mask_2_graphics_32 = new cjs.Graphics().p("AhuEeQhOgkg8gfQgugagJgIIgBAAID3njQAGgNArAGQAkgFAsABIAoATQBMAnA7AhQAvAbAKAJIABAGIjzHcQgIAOgrgHQgeAEgmAAIg1gZg");
	var mask_2_graphics_33 = new cjs.Graphics().p("AhuEhQhOglg9gfQgugZgKgIID4nmQAHgOAqAGQAjgGAtgBIAoAUQBNAnA7AhQAvAbAKAJIAAAGIjzHfQgIAOgqgGQgfAFglABIg2gZg");
	var mask_2_graphics_34 = new cjs.Graphics().p("AhuEjQhOgkg+gfQgtgZgLgIIAAAAID6nqQAGgNAqAFQAjgHAsgBIApAUQBNAmA8AiQAuAbALAJIABAGIj2HhQgHAOgqgFQgeAGgmACIg2gag");
	var mask_2_graphics_35 = new cjs.Graphics().p("AhvEmQhOgkg+gfQgugZgKgJID6nsQAHgNAqADQAjgHAsgCIApATQBNAnA8AiQAvAbALAJIABAGIj3HlQgHAOgqgEQgfAGglADIg3gag");
	var mask_2_graphics_36 = new cjs.Graphics().p("AhvEpQhOgkg+ggQgugYgLgJIgBAAID8nuQAHgPAqAEQAjgJAsgDIApAUQBNAnA9AhQAvAbAMAKIABAGIj5HnQgIAPgpgEQgfAHglADIg3gZg");
	var mask_2_graphics_37 = new cjs.Graphics().p("AhvEsQhOgkg/ggQgugYgMgJID9nxQAIgPApADQAjgKArgFIAqAVQBNAnA+AiQAuAbANAKIABAFIj6HrQgIAPgpgEQgeAJglADIg4gZg");
	var mask_2_graphics_38 = new cjs.Graphics().p("AhuEvQhPgkhAggQgugYgMgJIAAAAID/n0QAHgPApACQAjgLArgFIAqAUQBNAoA/AiQAuAaANALIABAFIj7HtQgIAPgogDQgfAJglAFIg3gZg");
	var mask_2_graphics_39 = new cjs.Graphics().p("AhuEyQhQglhAggQgugYgNgJIEBn2QAHgQAoACQAkgMArgGIAqAUQBNAoA/AiQAuAbAOAKIABAGIj8HvQgIAQgogCQgfAJglAGIg3gZg");
	var mask_2_graphics_40 = new cjs.Graphics().p("AhuE1QhQglhBggQgugYgNgJIAAAAIEBn6QAJgPAnAAQAjgMArgHIArAUQBOAoA+AiQAvAbAOAKIACAGIj+HyQgIAQgogBQgfAKglAHIg3gZg");
	var mask_2_graphics_41 = new cjs.Graphics().p("AhvE4QhPglhCggQgtgYgOgJIECn8QAJgQAnAAQAjgNArgJIAqAVQBOAnBBAjQAuAbAOAKIACAGIj/H0QgJARgngBQgeAMglAHIg5gZg");
	var mask_2_graphics_42 = new cjs.Graphics().p("AhvE7IiShFQgtgYgOgKIgBAAIEFn+QAIgRAnAAQAjgOAqgKIArAVQBPAoBBAiQAtAbAQALIACAGIkBH3QgJARgngBQgeANgkAIIg6gZg");
	var mask_2_graphics_43 = new cjs.Graphics().p("AhvE9QhQgkhCggQgugZgOgJIgBAAIEGoBQAIgRAngBQAjgPAqgLIArAVQBPAoBBAjQAuAaAQAMIACAFIkCH6QgJASgnAAQgeANgkAJIg6gag");
	var mask_2_graphics_44 = new cjs.Graphics().p("AhuFAQhRgkhDghQgugYgPgJIAAAAIEHoFQAJgRAmgCQAjgPAqgMIArAVQBQAoBBAkQAuAaAQALIACAGIkDH8QgJARgnACQgdAOglAKIg5gag");
	var mask_2_graphics_45 = new cjs.Graphics().p("AhuFEQhRgmhEggQgtgXgQgLIAAAAIEIoGQAJgSAmgDQAigQArgNIArAVQBPApBCAjQAuAaARAMIACAGIkEH/QgKASgmACQgeAOgkALIg5gZg");
	var mask_2_graphics_46 = new cjs.Graphics().p("AhuFGQhRgkhFgiQgtgXgQgKIgBAAIEKoJQAJgTAmgCQAigSAqgOIAsAWQBPAoBDAjQAuAbARALIADAGIkGIBQgKATglADQgfAPgjAMIg6gag");
	var mask_2_graphics_47 = new cjs.Graphics().p("AhvFJQhRglhFghQgtgXgQgLIgBAAIELoLQAKgTAlgEQAigTAqgOIAsAVQBPApBDAkQAvAaARAMIADAFIkIIFQgJASgmAEQgdAQgkANIg7gag");
	var mask_2_graphics_48 = new cjs.Graphics().p("AhuFMIiXhGIg/ghIAAAAIEMoPQAKgTAlgFQAigTAqgQIAsAWQBQAoBEAkQAuAaASANIACAFIkIIHQgKATglAEQgeARgjAOIg7gag");
	var mask_2_graphics_49 = new cjs.Graphics().p("AhuFOQhTgkhFghQgtgXgSgKIAAAAIENoSQAKgUAlgEQAigVApgRIAsAWQBRApBEAkQAuAaATAMIACAGIkJIKQgKATglAEQgeASgkAPIg6gbg");
	var mask_2_graphics_50 = new cjs.Graphics().p("AhuFSIiZhGIg/giIgBAAIEQoUQAKgUAkgFQAigWApgSIAsAWQBRApBFAlQAtAZAUANIADAFIkLINQgKAUglAFQgeASgjAQIg7gag");
	var mask_2_graphics_51 = new cjs.Graphics().p("AhuFUIiahGIhAghIAAAAIEQoXQAKgUAkgHQAigWAqgTIAsAWQBRApBFAlQAuAaAUAMIADAGIkNIPQgKAUgkAGQgeATgjARIg7gbg");
	var mask_2_graphics_52 = new cjs.Graphics().p("AhuFYQhTglhHgiQgugWgTgLIAAAAIERoaQALgUAjgIQAjgXApgUIAtAXICWBNQAuAaAVANIADAFIkOISQgLAVgjAGQgeAVgjAQIg8gZg");
	var mask_2_graphics_53 = new cjs.Graphics().p("AhuFaIichGIhAgiIgBAAIEUocQAKgVAjgHQAigZApgUIAtAVQBSAqBGAlQAuAZAUANIAEAGIkQIVQgKAVgjAGQgeAWgjARIg8gag");
	var mask_2_graphics_54 = new cjs.Graphics().p("AhuFdIidhHIhBghIAAAAIEVofQAKgVAjgJQAigZAogWIAtAXQBSApBHAlQAuAaAVANIAEAGIkRIXQgLAVgiAIQgfAWgiATIg8gbg");
	var mask_2_graphics_55 = new cjs.Graphics().p("AhuFgIidhHIhCgiIAAAAIEWohQALgVAigKQAigaAogWIAuAWQBSApBHAmQAuAZAWAOIADAFIkSIaQgLAWgiAIQgeAXgiAUIg9gbg");
	var mask_2_graphics_56 = new cjs.Graphics().p("AhuFjIifhHIhBgiIgBAAIEYokQAKgWAjgKQAigbAogYIAtAXICbBPQAtAaAWAOIAFAFIkUIcQgLAWgiAJQgdAYgjAVIg9gbg");
	var mask_2_graphics_57 = new cjs.Graphics().p("AhuFmIifhIIhDghIAAAAIEZonQALgWAhgLQAigcAogYIAvAWICbBQQAtAZAXAOIAEAFIkVIfQgMAXghAKQgeAYghAVIg+gag");
	var mask_2_graphics_58 = new cjs.Graphics().p("AhuFoIighHIhDghIAAAAIEaoqQALgXAhgLQAigdAogaIAuAYQBTApBJAnIBFAmIAEAGIkWIhQgMAYghAKQgeAZgiAWIg9gbg");
	var mask_2_graphics_59 = new cjs.Graphics().p("AhuFrIihhHIhDghIAAAAIEbotQAMgXAggMQAjgdAngbIAvAXQBSApBKAnIBGAnIADAGIkXIkQgMAXghALQgdAagiAXIg+gbg");
	var mask_2_graphics_60 = new cjs.Graphics().p("AhuFuIiihHIhDgiIgBAAIEdovQAMgXAggNQAigfAogbIAuAXICeBQIBFAoIAFAFIkZInQgMAYghAMQgdAagiAYIg+gbg");
	var mask_2_graphics_61 = new cjs.Graphics().p("AhuFxIijhIIhEghIAAAAIEeoyQAMgYAggNQAiggAngcIAvAXICeBRQAuAYAYAPIAFAGIkaIpQgMAYggANQgeAbghAZIg/gbg");
	var mask_2_graphics_62 = new cjs.Graphics().p("AhvF0IijhIIhEghIgBAAIEgo1QAMgYAggOQAhggAogeIAvAXICeBRIBHAoIAGAGIkdIsQgMAYggANQgdAdghAZIhAgbg");
	var mask_2_graphics_63 = new cjs.Graphics().p("AhuF3IikhIIhFgiIgBAAIEho3QANgYAfgPQAighAngfIAvAXQBUAqBMAoIBHAoIAFAFIkdIvQgNAYgfAOQgdAdgiAbIg/gbg");
	var mask_2_graphics_64 = new cjs.Graphics().p("AhuF6IilhJIhGghIAAAAIEio6QANgYAfgQQAhgiAoggIAvAYIChBSIBHAnIAFAGIkfIxQgMAZgfAPQgdAegiAbIg/gbg");
	var mask_2_graphics_65 = new cjs.Graphics().p("AhuF8IimhIIhGgiIgBAAIElo8QAMgaAfgPQAigkAmggIAwAXIChBSIBIApIAFAFIkgI0QgNAageAPQgdAfghAcIhAgcg");
	var mask_2_graphics_66 = new cjs.Graphics().p("AhuGAIinhJIhGghIgBAAIEmo/QAMgbAfgQQAhgkAngiIAwAYICiBSIBIApIAGAFIkhI3QgNAageAQQgdAfghAdIhBgbg");
	var mask_2_graphics_67 = new cjs.Graphics().p("AhuGDIiohJIhGgiIgBAAIEnpCQANgaAegRQAhglAngjIAvAYQBWAqBNApIBJAoIAGAGIkiI5QgNAageARQgeAgggAeIhBgbg");
	var mask_2_graphics_68 = new cjs.Graphics().p("AhuGFIiphJIhHghIAAAAIEnpFQAOgaAdgSQAigmAmgkIAwAYQBWAqBOApIBJAoIAGAGIkkI8QgNAbgeARQgdAhggAfIhBgcg");
	var mask_2_graphics_69 = new cjs.Graphics().p("AhuGIIiphJIhIgiIgBAAIEqpHQANgbAdgSQAignAmglIAwAYIClBUIBKAoIAGAGIkmI+QgNAbgdASQgdAighAgIhBgcg");
	var mask_2_graphics_70 = new cjs.Graphics().p("AhuGLIiqhJIhIgiIgBAAIErpKQAOgbAcgTQAigoAlgmIAxAZICmBTIBKApIAGAFIknJBQgNAcgdATQgdAiggAhIhCgcg");
	var mask_2_graphics_71 = new cjs.Graphics().p("AhuGOIirhJIhIgiIgBAAIEspNQAOgbAcgUQAigpAlgnIAxAZICmBUIBLApIAGAFIkoJEQgOAcgcATQgdAjggAiIhCgcg");
	var mask_2_graphics_72 = new cjs.Graphics().p("AhuGRIishKIhJghIAAAAIEspQQAPgcAcgUQAigqAlgoIAxAZQBWArBRApIBLApIAHAFIkqJHQgOAcgcAUQgdAkggAjIhCgcg");
	var mask_2_graphics_73 = new cjs.Graphics().p("AhuGTIishJIhKgiIgBAAIEvpSQAOgcAcgVQAhgrAmgoIAxAYICoBVIBLApIAHAFIkrJJQgOAdgcAUQgdAmggAiIhCgcg");
	var mask_2_graphics_74 = new cjs.Graphics().p("AhuGXIithKIhKgiIgBAAIEwpVQAOgcAcgWQAhgsAlgqIAyAZICoBVIBNAqIAGAFIksJMQgPAcgbAWQgcAmggAkIhDgcg");
	var mask_2_graphics_75 = new cjs.Graphics().p("AhuGZIiuhJIhLgiIAAAAIExpYQAPgdAbgWQAhgtAlgrIAyAZICpBWIBNApIAGAFIktJPQgPAdgbAWQgcAnggAlIhDgdg");
	var mask_2_graphics_76 = new cjs.Graphics().p("AhuGcIivhJIhLgiIgBAAIEzpbQAPgdAbgXQAhguAkgsIAzAZICpBWIBOAqIAHAFIkvJRQgPAegaAWIg8BOIhEgdg");
	var mask_2_graphics_77 = new cjs.Graphics().p("AhuGfIiwhKIhLgiIgBAAIE0pdQAPgdAbgZQAhgtAkguIAzAZICqBXIBOApIAHAGIkwJTQgPAegaAXQgdAogfAoIhEgdg");
	var mask_2_graphics_78 = new cjs.Graphics().p("AhuGiIixhKIhLgiIgBAAIE1pgQAQgeAagYQAggwAlgtIAzAYICrBXIBOAqIAHAFIkxJXQgPAegaAYQgcApggAnIhEgcg");
	var mask_2_graphics_79 = new cjs.Graphics().p("AhuGlIiyhKIhMgjIAAAAIE2piQAQgeAZgZQAhgwAlgwIAyAZICtBYIBOAqIAHAEIkyJaQgQAegZAZQgcAqgfAoIhFgcg");
	var mask_2_graphics_80 = new cjs.Graphics().p("AhuGoIizhLIhMgiIgBAAIE5plQAPgeAZgaQAhgxAkgwIAzAZICtBXIBQAqIAHAFIk0JcQgQAfgZAaQgcAqgfApIhFgcg");
	var mask_2_graphics_81 = new cjs.Graphics().p("AhuGqIi0hKIhMgiIgBAAIE6poQAQgfAYgaQAhgyAkgxIAzAZICuBYIBQAqIAHAFIk1JeQgQAggYAaQgdArgfAqIhFgdg");
	var mask_2_graphics_82 = new cjs.Graphics().p("AhtGuIi1hMIhNghIgBAAIE7pqQAPggAZgbQAhgzAkgyIAzAZICvBYIBQAqIAIAGIk3JhQgQAggYAaQgcAsggArIhEgcg");
	var mask_2_graphics_83 = new cjs.Graphics().p("AhuGwIi1hLIhOghIgBAAIE8puQARgfAYgcIBEhnIA0AZICvBZIBRAqIAIAFIk4JkQgRAggYAcQgcAsgeAsIhGgdg");
	var mask_2_graphics_84 = new cjs.Graphics().p("AhuGzIi2hLIhOgiIgBAAIE+pwQAQggAYgcQAgg1Akg0IA0AZICwBZIBRAqIAIAGIk5JmQgRAggXAdIg7BaIhGgdg");
	var mask_2_graphics_85 = new cjs.Graphics().p("AhuG2Ii3hLIhPgiIAAAAIE/pzQAQggAYgeQAgg1Ajg1IA1AZICxBZIBRArIAIAFIk6JpQgRAhgXAdIg6BcIhHgdg");
	var mask_2_graphics_86 = new cjs.Graphics().p("AhuG5Ii4hLIhPgiIgBAAIFBp2QARggAXgeQAgg3Ajg2IA1AaICyBZIBRAqIAJAGIk8JsQgRAggXAeQgcAvgeAvIhHgdg");
	var mask_2_graphics_87 = new cjs.Graphics().p("AhuG8Ii5hMIhPgiIgBAAIFCp3QARgiAWgeIBEhvIA1AaICyBaIBTAqIAIAGIk+JuQgRAhgWAfIg6BfIhHgdg");
	var mask_2_graphics_88 = new cjs.Graphics().p("AhtG+Ii6hLIhQgiIgBAAIFDp6QARgiAXggIBDhwIA1AaICzBaIBTArIAIAFIk+JxQgSAigWAfIg5BhIhHgeg");
	var mask_2_graphics_89 = new cjs.Graphics().p("AhtHCIi7hMIhRgiIgBAAIFFp+QARgiAXgfQAfg6Ajg5IA2AaIC0BbIBTArIAIAFIk/J0QgSAigWAfIg5BjIhHgdg");
	var mask_2_graphics_90 = new cjs.Graphics().p("AhuHEIi7hMIhRgiIgBAAIFGqAQARgiAXggQAfg7Ajg6IA1AaIC1BbIBUArIAJAFIlBJ3QgTAigVAgIg5BlIhIgeg");
	var mask_2_graphics_91 = new cjs.Graphics().p("AhuHIIi8hNIhRgiIgBAAIFHqCQASgkAVghIBCh2IA2AaIC2BbIBUAsIAJAFIlDJ5QgSAjgUAhIg6BmIhIgdg");
	var mask_2_graphics_92 = new cjs.Graphics().p("AhuHKIi9hMIhSgiIAAAAIFJqFQASgkAUghIBCh5IA2AbIC3BbIBUAsIAJAFIlEJ7QgRAkgVAhIg5BoIhJgeg");
	var mask_2_graphics_93 = new cjs.Graphics().p("AhuHNIi+hMIhSgiIgBAAIFKqJQASgjAVgjIBCh6IA2AbIC3BbIBVAsIAKAFIlGJ+QgSAkgUAiIg5BqIhJgeg");
	var mask_2_graphics_94 = new cjs.Graphics().p("AhtHQIi/hMIhTgiIgBAAIFLqMQATgjAUgjIBCh8IA2AaIC4BcIBWAsIAJAEIlHKCIgmBHIg4BqIhJgdg");
	var mask_2_graphics_95 = new cjs.Graphics().p("AhuHTIi/hNIhTgiIgCAAIFNqNIAnhIIBBh/IA2AbIC6BdIBVArIAKAFIlIKEIgmBIIg5BtIhJgeg");
	var mask_2_graphics_96 = new cjs.Graphics().p("AhtHWIjBhNIhUgiIgBAAIFPqRIAmhJIBBh/IA3AbIC6BcIBWAsIAKAFIlKKHIglBJIg5BuIhJgeg");
	var mask_2_graphics_97 = new cjs.Graphics().p("AmEFqIG3tgIFSCpImoNEg");
	var mask_2_graphics_98 = new cjs.Graphics().p("AjEHEIjHhOIHAtwICHA7IAjAQIA0AYIANAHIAJAFIAjARIAjASIABABIAZALIACADIgHANImqNHg");
	var mask_2_graphics_99 = new cjs.Graphics().p("AjGHRIjLhNIHJuDICHA0IAkAPIA0AXIAOAGIAJAGIAkARIAkATIABABIAYAMIADACIgHANImzNZg");
	var mask_2_graphics_100 = new cjs.Graphics().p("AjHHdIjQhMIHSuUICGAsIAlANIA2AXIANAGIAKAFIAkASIAlATIACABIAXANIAEADIgHANIm8Npg");
	var mask_2_graphics_101 = new cjs.Graphics().p("AjKHrIjUhMIHbunICHAlIAlANIA4AUIANAHIALAFIAlASIAlATIABABIAYAOIADADIgHAOInEN6g");
	var mask_2_graphics_102 = new cjs.Graphics().p("AjLH3IjZhLIHku5ICGAeQARAEAVAHIA5AUIAOAGIALAFIAmASIAlAUIABABIAYAQIADACQgCAHgEAIInNOLg");
	var mask_2_graphics_103 = new cjs.Graphics().p("AjNIEIjehLIHuvLICGAXQARADAWAHIA5ATIAPAGIALAFQAUAIATAKQAUAKASALIABABIAYAQIADACQgDAIgEAHInVOdg");
	var mask_2_graphics_104 = new cjs.Graphics().p("AjPIRIjihLIH2vcICHAPQAQACAXAHIA7ARIAPAGIALAFQAUAJATAKIAoAVIABACIAXAQIADADQgCAIgEAHIneOtg");
	var mask_2_graphics_105 = new cjs.Graphics().p("Am4HTIIAvvICGAIQAQACAYAGIA8AQIAQAGIALAFIAoATQAVALATALIABACIAYARIADACQgDAIgEAIInnO/IicABg");
	var mask_2_graphics_106 = new cjs.Graphics().p("Am+HcIIJwAICGAAQAQABAZAGQAdAGAgAJIAQAFIAMAFQAUAJAUALQAWALASALIACACIAXARIADAEQgCAHgEAIInwPQIicAJg");
	var mask_2_graphics_107 = new cjs.Graphics().p("AnEHpIIRwTICGgHQAQABAaAFQAeAGAgAIIARAGIALAEQAWAJAUALQAWALASANIACABQAOAKAKAIIACADQgCAJgDAIIn5PgIicASg");
	var mask_2_graphics_108 = new cjs.Graphics().p("AnLH1IIbwkICGgOQAQgBAaAFQAfAFAhAIIARAGIAMAEQAVAJAVALQAWAMAUANIABABQAOAKAJAJIADADQgCAJgEAIIoBPyIibAZg");
	var mask_2_graphics_109 = new cjs.Graphics().p("AnSIDIIkw3ICGgVQARgCAaAFQAgAEAiAIIARAFIAMAFQAWAJAVALQAXAMATANIABABIAYAUIACAEQgBAIgEAIIoKQDIicAig");
	var mask_2_graphics_110 = new cjs.Graphics().p("AnYIQIItxIICGgdQAQgDAcAFQAfADAjAIIARAEIANAFQAXAJAVAMQAXAMATANIABACQAPALAKAJIACAEQgCAJgEAIIoSQUIicApg");
	var mask_2_graphics_111 = new cjs.Graphics().p("AneIdII2xaICGgkQAPgEAdAEQAhADAiAHIASAFIAOAFQAWAJAWALQAYANASAOIACABQAPAMAJAKIACADQgBAJgEAIIobQmIibAxg");
	var mask_2_graphics_112 = new cjs.Graphics().p("AnlIqIJAxsICFgsQAQgEAeAEQAhACAjAHIASAEIAOAFQAXAJAWAMQAYANATAOIACACQAPAMAJAKIACADQgBAKgFAIIojQ2IibA6g");
	var mask_2_graphics_113 = new cjs.Graphics().p("AnrI3IJIx+ICGgzQAQgFAdAEQAiABAlAHIASAEIAOAFQAXAJAXAMQAYANAUAOIABACQAPANAJAKIACAEQgBAJgEAJIosRHIibBCg");
	var mask_2_graphics_114 = new cjs.Graphics().p("AnyJFIJSyQICFg7QAQgFAfADQAiABAmAGIASAEIAOAFQAYAIAXANQAZANATAPIACACQAPANAJALIACADQgBAKgEAIIo1RZIibBJg");
	var mask_2_graphics_115 = new cjs.Graphics().p("An4JSIJayiICGhBQAPgHAgADQAjAAAmAFIATAEIAOAFQAYAJAXANQAaANATAQIACACQAQANAIALIACAEQgBAKgEAIIo+RqIiaBRg");
	var mask_2_graphics_116 = new cjs.Graphics().p("An/JfIJkyzICFhKQAQgHAgACQAkAAAmAFIAUAEIAOAFQAZAJAYAMQAZAOAUAQIACACQAPAOAIALIADAEQgBAKgEAJIpHR6IiaBag");
	var mask_2_graphics_117 = new cjs.Graphics().p("AoFJtIJtzGICFhQQAQgJAhADQAkgBAnAEIAUAEIAOAFQAaAJAYANQAaAOAUAQIABACQAQAOAIAMIACAEQAAAKgFAJIpPSMIiaBhg");
	var mask_2_graphics_118 = new cjs.Graphics().p("AoLJ6IJ2zXICFhYQAPgKAiACQAkgBApAEIAUADIAOAFQAaAJAZANQAaAPAUAQIABACQARAPAHAMIACAEQABALgFAIIpYSdIiZBqg");
	var mask_2_graphics_119 = new cjs.Graphics().p("AoSKIIJ/zpICFhgQAQgKAiACQAlgDApAEQAJABAMACIAPAFQAaAJAYAOQAbAOAUARIACACQARAPAHANIACAEQAAALgFAJIpgSuIiZBxg");
	var mask_2_graphics_120 = new cjs.Graphics().p("AoZKWIKJz8ICFhnQAPgKAjABQAmgDAqADQAJABAMACIAPAFQAaAJAZAOQAbAPAVARIACACQAQAQAHAMIADAFQAAAKgFAKIppS/IiZB5g");
	var mask_2_graphics_121 = new cjs.Graphics().p("AofKjIKR0NICFhuQAPgMAkABQAmgEArADQAJABAMACIAQAFQAaAJAaAOQAbAPAVASIACACQARAQAHANIACAEQAAALgFAKIpyTQIiYCCg");
	var mask_2_graphics_122 = new cjs.Graphics().p("AomKyIKb0gICFh1QAPgNAlABQAmgFAsADQAJAAAMADIAQAEQAbAJAaAPQAcAPAVASIABADQASAQAGANIACAFQABALgFAJIp7TiIiYCJg");
	var mask_2_graphics_123 = new cjs.Graphics().p("AosK/IKk0xICEh9QAQgNAlAAQAngFAsACQAKAAAMADIAQAEQAcAJAaAPQAcAQAVASIACACQARARAHAOIACAEQABAMgFAJIqETzIiYCSg");
	var mask_2_graphics_124 = new cjs.Graphics().p("AozLNIKt1DICFiEQAPgOAmgBQAogFAsACQAKgBANADIAQAFQAcAIAbAPQAcAQAVATIACACQASASAGAOIACAEQABAMgFAKIqMUDIiYCag");
	var mask_2_graphics_125 = new cjs.Graphics().p("Ao5LbIK21VICEiMQAPgPAoAAQAogGAtABQAKAAANACIAQAFQAdAJAbAPQAdAQAVAUIACACQASARAGAPIACAEQABAMgGAKIqUUVIiYChg");
	var mask_2_graphics_126 = new cjs.Graphics().p("Ao/LpIK/1nICEiTQAPgQAogBQApgHAuABQAKAAANACIARAFQAdAJAbAPQAdARAWATIACADQARASAGAOIACAFQABAMgFAKIqdUmIiYCqg");
	var mask_2_graphics_127 = new cjs.Graphics().p("ApGL3ILI15ICFibQAPgQAogBQAqgIAvABQAKgBANADIARAEQAdAJAcAQQAeARAVAUIACACQASATAGAOIACAFQABANgFAKIqmU2IiXCyg");
	var mask_2_graphics_128 = new cjs.Graphics().p("ApMMFILR2LICEiiQAPgRAqgCQAqgIAvAAQALAAANACIARAFQAeAJAcAPQAeASAWAUIACADQASATAFAPIACAFQACAMgFAKIqvVIIiXC6g");
	var mask_2_graphics_129 = new cjs.Graphics().p("ApTMTILb2cICEiqQAOgSArgCQAqgJAwAAQALgBANADIASAEQAeAJAcAQQAfASAWAVIACACQATATAFAQIACAFQABANgFAKIq4VZIiWDCg");
	var mask_2_graphics_130 = new cjs.Graphics().p("ApZMhILj2vICEiwQAPgUArgCQArgJAxgBQALAAANACIASAEQAfAJAdAQQAfASAWAWIACACQASAUAFAPIACAGQACANgFAKIrAVqIiXDKg");
	var mask_2_graphics_131 = new cjs.Graphics().p("ApgMvILt3AICEi4QAOgVAsgCQAsgKAxgBQALgBAOACIASAFQAfAJAdAQQAgASAWAWIACACQATAVAEAQIACAFQACANgFAKIrJV8IiWDSg");
	var mask_2_graphics_132 = new cjs.Graphics().p("ApmM+IL13TICEjAQAPgVAsgCQAtgLAygCQALAAAOABIASAFQAgAJAdARQAgASAWAWIACADQAUAUAEARIACAFQACAOgGAKIrRWMIiWDag");
	var mask_2_graphics_133 = new cjs.Graphics().p("AptNLIL/3kICEjHQAPgWAtgDQAtgMAzgBQALgBAOABIATAFQAgAJAdARQAhATAWAWIACADQATAVAFAQIABAGQADAOgGAKIraWdIiWDjg");
	var mask_2_graphics_134 = new cjs.Graphics().p("Ap0NZIMJ32ICDjOQAPgXAugDQAtgNA0gCQALgBAPACIATAEQAgAKAeARQAhATAWAXIACACQAUAWAEARIACAFQACAOgGALIriWuIiWDqg");
	var mask_2_graphics_135 = new cjs.Graphics().p("Ap6NnIMR4IICEjWQAOgXAvgEQAugNA1gDQALgBAPACIATAEQAgAKAfARQAhATAXAXIACADQAUAWADARIACAGQADAOgGALIrrW/IiWDzg");
	var mask_2_graphics_136 = new cjs.Graphics().p("AqAN1IMa4aICEjdQAOgYAwgEQAugOA1gDQAMgBAPABIATAFQAhAJAfASQAiATAWAYIADADQATAWAEARIACAGQACAOgFALIr0XRIiWD6g");
	var mask_2_graphics_137 = new cjs.Graphics().p("AqHODIMk4sICDjkQAOgZAxgFQAugOA2gDQAMgCAPACIAUAEQAhAKAfARQAjAUAWAYIADADQAUAXADASIACAGQADAOgGALIr9XiIiVECg");
	var mask_2_graphics_138 = new cjs.Graphics().p("AqNOSIMs4/ICEjrQAOgaAxgFQAvgPA3gEQAMgBAPABIAUAFQAiAJAgASQAiAUAXAZIACACQAVAYADASIABAGQADAOgFAMIsGXyIiVELg");
	var mask_2_graphics_139 = new cjs.Graphics().p("AqUOgIM25QICDjzQAOgbAygFQAwgQA4gEQALgCAQACIAUAEQAiAKAhASQAiAUAXAZIACADQAWAYACASIACAGQADAPgGALIsOYEIiVESg");
	var mask_2_graphics_140 = new cjs.Graphics().p("AqaOuIM+5jICEj6QAOgcAygFQAxgQA4gFQAMgCAQACIAUAEQAjAKAgASQAkAVAXAZIACADQAVAYADATIABAGQADAPgFALIsXYVIiVEbg");
	var mask_2_graphics_141 = new cjs.Graphics().p("AqhO8IPL92QAOgdA0gFQAxgRA5gFQAMgCAQABIAVAFQAjAJAgATQAkAVAXAZIADADQAVAZACATQAGATgHAOIuzdIg");
	var mask_2_graphics_142 = new cjs.Graphics().p("AqiPDIgBAAIPN99IACgEQAOgcAxgHIADAAQAlgNAqgHIAYgDIADAAQALgCAOABIADABIABAAIATAEIABAAQAbAHAaANIAPAIIAFADQAZAQATASIAKAKIACADIAGAHIAEAFQAKAOADANIABAFQACAIAAAHQABAKgEAIIgHAOIuxdFg");
	var mask_2_graphics_143 = new cjs.Graphics().p("AlhP6IlEgwIgBAAIPS+IIADgEQANgcAxgHIADAAQAmgOApgHIAYgEIADAAQALgCAOACIADAAIABAAIAUAEIABAAQAbAIAaANIAPAHIAFADQAZARATASIAKAJIACAEIAGAHIAEAFQAKAOADANIABAFQACAIAAAHQAAAKgDAIIgHAOIu2dQg");
	var mask_2_graphics_144 = new cjs.Graphics().p("AliQCIlFgxIgBAAIPW+TIACgEQAOgcAxgHIADgBQAlgOAqgIIAYgDIADAAQALgCAOABIAEAAIAAAAIAUAEIABAAQAbAIAaANIAPAIIAFADQAaAQATASIAKAKIACADIAGAHIADAFQALAPADANIAAAFQACAIAAAHQABAKgEAIIgHAOIu6dag");
	var mask_2_graphics_145 = new cjs.Graphics().p("AljQKIlHgyIgBAAIPb+dIACgEQAOgdAxgHIADgBQAlgOAqgIIAYgEIADAAQALgDAPACIADAAIABAAIATAEIABAAQAbAIAbANIAPAHIAFADQAaARATASIAJAKIADADIAFAHIAEAFQAKAPADANIABAFQACAIAAAIQAAAJgEAJIgHAOIu+dkg");
	var mask_2_graphics_146 = new cjs.Graphics().p("AqtPeIAAAAIPf+oIACgEQAOgdAxgIIADAAQAlgPAqgJIAYgEIADAAQALgCAPABIADAAIABAAIATAEIABAAQAcAIAaANIAPAIIAFADQAaAQATATIAKAKIACADIAGAHIADAFQALAPACANIABAFQACAIAAAIQABAJgEAJIgHAOIvDdvIhFACg");
	var mask_2_graphics_147 = new cjs.Graphics().p("AqvPkIgBAAIPk+yIADgFQAOgdAwgIIADgBQAmgPApgJIAYgFIADAAQAMgCAOABIADAAIABAAIAUAEIABAAQAbAIAbANIAPAIIAFADQAaARATASIAKAKIACAEIAGAHIADAFQALAOACAOIABAFQACAIAAAIQAAAJgDAJIgHAPIvHd5IhFAEg");
	var mask_2_graphics_148 = new cjs.Graphics().p("AqxPpIgBAAIPo+9IACgEQAPgdAwgJIADAAQAmgRApgJQAMgDAMgCIADAAQAMgCAOABIADAAIABAAIAUAEIABAAQAcAIAbANIAPAIIAFADQAaARATATIAJAJIADAEIAFAHIAEAFQAKAPADANIAAAFQADAJgBAHQABAKgEAIIgHAPIvLeEIhEAGg");
	var mask_2_graphics_149 = new cjs.Graphics().p("Aq0PvIgBAAIPt/IIACgEQAPgdAwgKIADAAQAlgRAqgKQAMgDAMgBIADgBQAMgCAOABIADAAIABAAIAUAEIABAAQAcAIAbANIAPAIIAFADQAaARAUATIAJAKIADADIAFAIIAEAEQAKAPACAOIABAFQACAJAAAHQAAAKgEAIIgHAQIvPeNIhDAJg");
	var mask_2_graphics_150 = new cjs.Graphics().p("Aq3P1IAAAAIPx/SIACgFQAPgdAwgKIADAAQAlgSAqgKQALgDANgCIADAAQAMgDAOABIAEABIAAAAIAUAEIABAAQAcAHAbANIAQAIIAFADQAaARATAUIAKAKIACADIAGAHIADAFQAKAPADANIAAAGQACAJAAAHQAAAKgDAJIgHAPIvUeYIhCALg");
	var mask_2_graphics_151 = new cjs.Graphics().p("Aq5P6IgBAAIP2/dIADgEQAPgeAvgKIADAAQAmgSApgLQAMgDAMgCIAEAAQALgDAPABIADAAIABAAIAUAEIABAAQAcAIAbANIAPAIIAFADQAbARATAUIAKAKIACADIAGAHIADAFQAKAPADAOIAAAGQACAIAAAHQAAALgDAIIgHAQIvYeiIhCAOg");
	var mask_2_graphics_152 = new cjs.Graphics().p("Aq7QAIgBAAIP6/nIACgFQAQgeAvgKIADgBQAmgSApgLQAMgEAMgCIAEAAQALgDAPABIADABIABAAIAUADIABAAQAcAIAcANIAPAJIAFADQAbARATATIAJAKIADAEIAFAHIAEAFQAKAPACANIABAHQACAIgBAHQABALgEAIIgHAQIvcetIhBAQg");
	var mask_2_graphics_153 = new cjs.Graphics().p("Aq+QGIgBAAIP//yIACgFQAQgeAvgLIADAAQAlgTAqgMQAMgDAMgCIADgBQAMgCAPABIADAAIABAAIAUAEIABAAQAdAHAbAOIAPAIIAFADQAbARAUAUIAJAKIADADIAFAIIADAEQAKAQACANIABAGIACAQQAAALgEAIIgHAQIvge3IhAATg");
	var mask_2_graphics_154 = new cjs.Graphics().p("ArBQMIAAAAIQD/9IACgEQAQgfAvgLIADgBQAlgTAqgMQALgEANgCIADAAQAMgDAPABIADAAIABAAIAUAEIACAAQAcAHAcAOIAPAIIAFADQAbARATAUIAKALIACADIAFAHIAEAFQAKAPACAOIABAGQABAJAAAHQAAALgDAIIgHAQIvlfCIg/AVg");
	var mask_2_graphics_155 = new cjs.Graphics().p("ArDQSIgBAAMAQIggIIADgFQAPgfAvgLIADgBQAmgTApgNIAYgGIAEAAQAMgDAPABIADAAIABAAIAUAEIABAAQAdAHAbAOIAQAIIAFADQAbARATAUIAKALIACADIAGAHIADAFQAKAQACANIABAHQABAIAAAIQAAAKgDAJIgHAQIvqfMIg9AXg");
	var mask_2_graphics_156 = new cjs.Graphics().p("ArGQYIAAAAMAQMggTIACgEQAQggAvgLIADgBQAmgUApgOIAYgGIAEAAQAMgDAPABIADAAIABAAIAUAEIACAAQAcAHAcAOIAPAIIAFADQAbASAUAUIAJAKIADAEIAFAHIADAFQAKAPACAOIABAHQACAIgBAIQABAKgEAJIgHAQIvufXIg8Aag");
	var mask_2_graphics_157 = new cjs.Graphics().p("ArIQdIgBAAMAQRggdIACgFQAQgfAvgMIADgBQAmgUApgOQALgEANgDIAEAAQAMgDAPABIADAAIABAAIAUADIACAAQAcAIAcAOIAQAIIAFADQAbASATAUIAKAKIACAEIAGAHIADAFQAKAPACAOIAAAHQACAJgBAHQABALgDAJIgHAQIvzfhIg8Acg");
	var mask_2_graphics_158 = new cjs.Graphics().p("ArLQjIAAAAMAQVggoIACgFQAQgfAvgNIADgBQAlgUAqgPQALgEANgCIAEgBQAMgDAPABIADAAIABAAIAUAEIACAAQAdAHAcAOIAPAIIAFADQAcASATAUIAKALIACADIAFAIIADAFQAKAPACAOIABAHQABAJAAAHQAAALgDAJIgHAQIv3fsIg7Aeg");
	var mask_2_graphics_159 = new cjs.Graphics().p("ArNQpIgBAAMAQaggzIADgEQAQggAugNIADgBQAmgVApgPIAZgHIADgBQAMgDAQABIADAAIAAAAIAVAEIACAAQAcAHAdAOIAPAJIAFADQAcARATAVIAKALIACADIAFAIIADAEQAKAQACAOIABAHQABAJAAAHQAAALgDAJIgHARIv7f1Ig6Ahg");
	var mask_2_graphics_160 = new cjs.Graphics().p("ArQQvIAAAAMAQegg+IADgEQAQggAugNIADgBQAmgWApgQIAZgHIADAAQAMgDAQAAIADABIABAAIAUADIACAAQAdAIAcAOIAQAIIAFADQAbASAUAVIAJAKIADAEIAFAHIADAFQAKAQACAOIAAAHQACAJgBAHQABALgEAJIgHARMgP/AgAIg5Ajg");
	var mask_2_graphics_161 = new cjs.Graphics().p("ArSQ1IgBAAMAQjghJIACgEQARggAugOIADgBQAmgWApgQQALgFANgCIAEgBQAMgDAQAAIADABIABAAIAUADIACAAQAdAIAcAOIAQAIIAFADQAcASATAVIAKALIACADIAGAIIADAFQAJAPACAOIABAIQABAIgBAIQABALgDAJIgHARMgQEAgLIg4Alg");
	var mask_2_graphics_162 = new cjs.Graphics().p("ArVQ6IAAAAMAQnghTIADgEQARghAugOIACgBQAmgXApgQQAMgFANgDIADAAQAMgDAQAAIAEABIAAAAIAVADIACAAQAdAHAcAPIAQAIIAFADQAcASATAVIAKALIACAEIAGAHIADAFQAJAPACAPIABAHQABAJgBAHQABALgDAKIgHARMgQJAgVIg3Aog");
	var mask_2_graphics_163 = new cjs.Graphics().p("ArXRAIgBAAMAQsgheIADgEQARghAtgOIADgBQAmgYApgRQAMgEANgDIADgBQAMgDAQAAIAEABIAAAAIAVADIACAAQAdAIAdAOIAQAIIAFADQAbASAUAWIAKALIACADIAFAIIADAEQAJAQACAOIABAIIABAQQAAALgDAKQgDAJgEAIMgQNAgfIg2Arg");
	var mask_2_graphics_164 = new cjs.Graphics().p("AraRGIAAAAMAQwghoIADgFQARghAtgPIADgBQAmgXApgSQALgFAOgDIADAAQAMgEARABIADAAIAAAAIAVADIACAAQAdAIAdAOIAQAJIAFADQAcASAUAVIAJALIADAEIAFAHIADAFQAJAQACAOIABAIQABAJgBAHQAAALgDAKIgHARMgQRAgqIg1Atg");
	var mask_2_graphics_165 = new cjs.Graphics().p("ArdRLMAQ1ghzIACgEQASghAtgQIADgBQAmgYApgSQALgFAOgDIADgBQAMgDARAAIADABIAAAAIAWADIABAAQAeAHAdAPIAQAJIAFADQAcASATAVIAKALIACAEIAFAIIADAEQAJAQACAOIABAJQABAIgBAIQABALgDAJIgHASMgQWAg0Ig0Awg");
	var mask_2_graphics_166 = new cjs.Graphics().p("ArfRRIAAAAMAQ5gh9IADgFQARghAugQIACgBQAmgZApgSQAMgFANgEIAEAAQAMgEAQABIAEAAIAVADIACAAQAdAIAdAOIARAJIAFADQAcASATAWIAKALIACAEIAGAHIACAFQAJAQACAOIABAJQABAIgBAIQABALgDAKIgHARMgQaAg/Ig0Ayg");
	var mask_2_graphics_167 = new cjs.Graphics().p("ArhRXIgBAAMAQ+giIIADgFQARghAugQIACgCQAmgZApgTQALgFAOgDIAEgBQAMgEAQABIAEABIAVACIACAAQAeAIAdAOIAQAJIAFADQAcATAUAVIAJALIADAEIAFAIIADAFQAJAPACAPIAAAJQACAIgCAIQABALgDAKIgHARMgQeAhKIgzA0g");
	var mask_2_graphics_168 = new cjs.Graphics().p("ArkRdMARCgiUIADgEQARgiAtgQIADgCQAmgZApgUQALgFAOgDIADgBQANgEAQABIAEAAIAAAAIAWADIABAAQAeAIAdAOIARAJIAFADQAcASAUAWIAJAMIADADIAFAIIACAFQAJAQACAOIABAJQABAIgBAIQAAALgDAKQgCAJgFAJMgQiAhUIgyA2g");
	var mask_2_graphics_169 = new cjs.Graphics().p("ArnRjMARHgieIACgFQASgiAtgRIADgBQAmgaApgUQALgFAOgEIADgBQANgEAQABIAEABIAAAAIAWACIABAAQAeAIAeAOIAQAJIAFADQAcATAUAWIAKALIACAEIAFAIIADAEQAJAQABAPIABAJQABAIgBAIQABALgDAKQgDAKgEAIMgQnAheIgxA5g");
	var mask_2_graphics_170 = new cjs.Graphics().p("ArpRoIAAAAMARLgioIACgFQATgiAsgRIADgCQAmgaApgUQAMgGANgEIAEAAQAMgEARAAIADABIAAAAIAWACIACAAQAeAIAeAPIAPAJIAGADQAcASAUAWIAJAMIADAEIAFAHIACAFQAKAQABAPIABAJQABAIgBAIQABAMgEAJIgGATMgQrAhoIgxA7g");
	var mask_2_graphics_171 = new cjs.Graphics().p("ArrRuIgBAAMARQgizIADgFQASgiAtgSIACgCQAmgaApgVQALgGAOgDIAEgBQAMgEARAAIAEABIAVADIACAAQAeAHAeAOIAQAJIAFAEQAdASAUAWIAJAMIADAEIAFAIIACAEQAJAQACAPIABAKQABAIgCAIQABALgDALIgHASMgQvAhyIgwA+g");
	var mask_2_graphics_172 = new cjs.Graphics().p("AruR0MARUgi+IADgFQASgjAsgRIADgCQAmgbApgWQALgFAOgEIAEgBQAMgEARAAIAEABIAWACIABAAQAfAIAdAOIARAKIAFADQAdASAUAXIAJAMIADADIAFAIIACAFQAJAQABAOIABAKQABAJgBAIQAAALgDAKQgCAKgFAJMgQzAh9IgvBAg");
	var mask_2_graphics_173 = new cjs.Graphics().p("ArxR6MARZgjJIACgFQATgjAsgSIADgBQAmgcApgWQALgGAOgEIAEgBQAMgEARAAIAEABIAWADIACAAQAeAHAeAPIAQAJIAFADQAdATAUAXIAKALIACAEIAFAIIADAEQAIARACAOIABAKQAAAJgBAHQABAMgDAKQgDAKgEAJMgQ4AiHIguBDg");
	var mask_2_graphics_174 = new cjs.Graphics().p("ArzSAIgBAAMARdgjUIADgFQATgjAsgSIACgCQAngcApgXQALgGAOgEIAEAAQAMgFARABIAEAAIAWADIACAAQAeAHAeAPIARAJIAFADQAdATAUAXIAJAMIADAEIAFAHIACAFQAJAQABAPIABAKQABAJgCAHQABAMgDAKQgCAKgFAJMgQ8AiSIgtBFg");
	var mask_2_graphics_175 = new cjs.Graphics().p("Ar2SFMARigjeIADgFQATgjAsgTIACgCQAmgdApgXQALgGAOgEIAEgBQANgEARAAIADABIAXACIACAAQAeAIAeAPIARAJIAFADQAdATAUAXIAJAMIADAEIAFAIIACAEQAJAQABAPIABALQABAIgCAIQABAMgDAKQgCAKgFAJMgRBAicIgrBIg");
	var mask_2_graphics_176 = new cjs.Graphics().p("Ar4SLMARmgjpIADgFQATgjAsgUIACgBQAmgdApgYQALgGAOgEIAEgBQANgFARABIADAAIABAAIAWADIACAAQAeAHAfAPIAQAJIAFADQAeAUATAXIAKALIACAEIAFAIIADAFQAIAQABAPIABAKQABAJgBAIQAAAMgCAKIgHATMgRGAinIgrBKg");
	var mask_2_graphics_177 = new cjs.Graphics().p("Ar7SQMARrgjzIACgFQAUgjArgUIADgCQAmgeApgXQALgHAOgEIAEgBQANgEARAAIAEABIAWABIACAAQAfAIAeAPIARAKIAFACQAdAUAUAXIAKAMIACAEIAFAHIACAFQAJARABAOIABALQAAAJgBAHQABANgDAKQgDAJgEAKMgRKAixIgqBNg");
	var mask_2_graphics_178 = new cjs.Graphics().p("Ar+SWMARvgj+IADgFQAUgkArgUIACgCQAngeApgYQALgHAOgEIAEgBQANgFARABIAEAAIAWADIACAAQAfAHAeAPIARAJIAFADQAeAUAUAXIAJAMIADAEIAFAIIACAFQAIAQABAPIABALQABAIgCAIQABAMgDALQgCAKgFAJMgR3AkKg");
	var mask_2_graphics_179 = new cjs.Graphics().p("AgIVzMARzgkJQATgoAvgWQAngfArgaQALgHAOgEQAOgFAUAAIAEABIAWACQAgAGAfAQIAXANQAdATAUAXQAKAMAHANIACAEQAIAQACAPQACAPgCANQAAAXgJATMgR8AkXg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_2_graphics_9,x:260,y:110}).wait(1).to({graphics:mask_2_graphics_10,x:259.6,y:110.6}).wait(1).to({graphics:mask_2_graphics_11,x:259.3,y:111.2}).wait(1).to({graphics:mask_2_graphics_12,x:258.9,y:111.8}).wait(1).to({graphics:mask_2_graphics_13,x:258.6,y:112.4}).wait(1).to({graphics:mask_2_graphics_14,x:258.3,y:113}).wait(1).to({graphics:mask_2_graphics_15,x:257.9,y:113.6}).wait(1).to({graphics:mask_2_graphics_16,x:257.6,y:114.2}).wait(1).to({graphics:mask_2_graphics_17,x:257.2,y:114.8}).wait(1).to({graphics:mask_2_graphics_18,x:256.9,y:115.4}).wait(1).to({graphics:mask_2_graphics_19,x:256.5,y:116}).wait(1).to({graphics:mask_2_graphics_20,x:256.2,y:116.6}).wait(1).to({graphics:mask_2_graphics_21,x:255.8,y:117.2}).wait(1).to({graphics:mask_2_graphics_22,x:255.5,y:117.8}).wait(1).to({graphics:mask_2_graphics_23,x:255.1,y:118.4}).wait(1).to({graphics:mask_2_graphics_24,x:254.7,y:118.9}).wait(1).to({graphics:mask_2_graphics_25,x:254.4,y:119.5}).wait(1).to({graphics:mask_2_graphics_26,x:254,y:120.1}).wait(1).to({graphics:mask_2_graphics_27,x:253.7,y:120.7}).wait(1).to({graphics:mask_2_graphics_28,x:253.3,y:121.3}).wait(1).to({graphics:mask_2_graphics_29,x:253,y:121.9}).wait(1).to({graphics:mask_2_graphics_30,x:252.6,y:122.5}).wait(1).to({graphics:mask_2_graphics_31,x:252.3,y:123.1}).wait(1).to({graphics:mask_2_graphics_32,x:252,y:123.7}).wait(1).to({graphics:mask_2_graphics_33,x:251.6,y:124.3}).wait(1).to({graphics:mask_2_graphics_34,x:251.3,y:124.9}).wait(1).to({graphics:mask_2_graphics_35,x:250.9,y:125.5}).wait(1).to({graphics:mask_2_graphics_36,x:250.6,y:126}).wait(1).to({graphics:mask_2_graphics_37,x:250.2,y:126.6}).wait(1).to({graphics:mask_2_graphics_38,x:249.9,y:127.2}).wait(1).to({graphics:mask_2_graphics_39,x:249.6,y:127.8}).wait(1).to({graphics:mask_2_graphics_40,x:249.2,y:128.4}).wait(1).to({graphics:mask_2_graphics_41,x:248.9,y:128.9}).wait(1).to({graphics:mask_2_graphics_42,x:248.5,y:129.5}).wait(1).to({graphics:mask_2_graphics_43,x:248.2,y:130.1}).wait(1).to({graphics:mask_2_graphics_44,x:247.8,y:130.7}).wait(1).to({graphics:mask_2_graphics_45,x:247.5,y:131.3}).wait(1).to({graphics:mask_2_graphics_46,x:247.1,y:131.9}).wait(1).to({graphics:mask_2_graphics_47,x:246.8,y:132.5}).wait(1).to({graphics:mask_2_graphics_48,x:246.4,y:133}).wait(1).to({graphics:mask_2_graphics_49,x:246.1,y:133.6}).wait(1).to({graphics:mask_2_graphics_50,x:245.8,y:134.2}).wait(1).to({graphics:mask_2_graphics_51,x:245.4,y:134.8}).wait(1).to({graphics:mask_2_graphics_52,x:245.1,y:135.4}).wait(1).to({graphics:mask_2_graphics_53,x:244.7,y:136}).wait(1).to({graphics:mask_2_graphics_54,x:244.4,y:136.5}).wait(1).to({graphics:mask_2_graphics_55,x:244,y:137.1}).wait(1).to({graphics:mask_2_graphics_56,x:243.7,y:137.7}).wait(1).to({graphics:mask_2_graphics_57,x:243.4,y:138.3}).wait(1).to({graphics:mask_2_graphics_58,x:243,y:138.9}).wait(1).to({graphics:mask_2_graphics_59,x:242.7,y:139.4}).wait(1).to({graphics:mask_2_graphics_60,x:242.3,y:140}).wait(1).to({graphics:mask_2_graphics_61,x:242,y:140.6}).wait(1).to({graphics:mask_2_graphics_62,x:241.7,y:141.2}).wait(1).to({graphics:mask_2_graphics_63,x:241.3,y:141.8}).wait(1).to({graphics:mask_2_graphics_64,x:241,y:142.4}).wait(1).to({graphics:mask_2_graphics_65,x:240.6,y:143}).wait(1).to({graphics:mask_2_graphics_66,x:240.3,y:143.5}).wait(1).to({graphics:mask_2_graphics_67,x:239.9,y:144.1}).wait(1).to({graphics:mask_2_graphics_68,x:239.6,y:144.7}).wait(1).to({graphics:mask_2_graphics_69,x:239.2,y:145.3}).wait(1).to({graphics:mask_2_graphics_70,x:238.9,y:145.9}).wait(1).to({graphics:mask_2_graphics_71,x:238.5,y:146.4}).wait(1).to({graphics:mask_2_graphics_72,x:238.2,y:147}).wait(1).to({graphics:mask_2_graphics_73,x:237.9,y:147.6}).wait(1).to({graphics:mask_2_graphics_74,x:237.5,y:148.2}).wait(1).to({graphics:mask_2_graphics_75,x:237.2,y:148.8}).wait(1).to({graphics:mask_2_graphics_76,x:236.8,y:149.4}).wait(1).to({graphics:mask_2_graphics_77,x:236.5,y:150}).wait(1).to({graphics:mask_2_graphics_78,x:236.1,y:150.5}).wait(1).to({graphics:mask_2_graphics_79,x:235.8,y:151.1}).wait(1).to({graphics:mask_2_graphics_80,x:235.5,y:151.7}).wait(1).to({graphics:mask_2_graphics_81,x:235.1,y:152.3}).wait(1).to({graphics:mask_2_graphics_82,x:234.8,y:152.9}).wait(1).to({graphics:mask_2_graphics_83,x:234.4,y:153.4}).wait(1).to({graphics:mask_2_graphics_84,x:234.1,y:154}).wait(1).to({graphics:mask_2_graphics_85,x:233.7,y:154.6}).wait(1).to({graphics:mask_2_graphics_86,x:233.4,y:155.2}).wait(1).to({graphics:mask_2_graphics_87,x:233.1,y:155.8}).wait(1).to({graphics:mask_2_graphics_88,x:232.7,y:156.4}).wait(1).to({graphics:mask_2_graphics_89,x:232.4,y:156.9}).wait(1).to({graphics:mask_2_graphics_90,x:232,y:157.5}).wait(1).to({graphics:mask_2_graphics_91,x:231.7,y:158.1}).wait(1).to({graphics:mask_2_graphics_92,x:231.3,y:158.7}).wait(1).to({graphics:mask_2_graphics_93,x:231,y:159.3}).wait(1).to({graphics:mask_2_graphics_94,x:230.6,y:159.9}).wait(1).to({graphics:mask_2_graphics_95,x:230.3,y:160.4}).wait(1).to({graphics:mask_2_graphics_96,x:229.9,y:161}).wait(1).to({graphics:mask_2_graphics_97,x:229.6,y:161.6}).wait(1).to({graphics:mask_2_graphics_98,x:229.8,y:161.3}).wait(1).to({graphics:mask_2_graphics_99,x:229.9,y:161}).wait(1).to({graphics:mask_2_graphics_100,x:230.1,y:160.7}).wait(1).to({graphics:mask_2_graphics_101,x:230.3,y:160.4}).wait(1).to({graphics:mask_2_graphics_102,x:230.4,y:160.1}).wait(1).to({graphics:mask_2_graphics_103,x:230.6,y:159.8}).wait(1).to({graphics:mask_2_graphics_104,x:230.8,y:159.5}).wait(1).to({graphics:mask_2_graphics_105,x:230.9,y:159.2}).wait(1).to({graphics:mask_2_graphics_106,x:231.1,y:159.4}).wait(1).to({graphics:mask_2_graphics_107,x:231.3,y:159.1}).wait(1).to({graphics:mask_2_graphics_108,x:231.4,y:158.8}).wait(1).to({graphics:mask_2_graphics_109,x:231.6,y:158.5}).wait(1).to({graphics:mask_2_graphics_110,x:231.8,y:158.2}).wait(1).to({graphics:mask_2_graphics_111,x:231.9,y:157.9}).wait(1).to({graphics:mask_2_graphics_112,x:232.1,y:157.6}).wait(1).to({graphics:mask_2_graphics_113,x:232.2,y:157.3}).wait(1).to({graphics:mask_2_graphics_114,x:232.4,y:157}).wait(1).to({graphics:mask_2_graphics_115,x:232.6,y:156.7}).wait(1).to({graphics:mask_2_graphics_116,x:232.7,y:156.4}).wait(1).to({graphics:mask_2_graphics_117,x:232.9,y:156}).wait(1).to({graphics:mask_2_graphics_118,x:233.1,y:155.7}).wait(1).to({graphics:mask_2_graphics_119,x:233.2,y:155.4}).wait(1).to({graphics:mask_2_graphics_120,x:233.4,y:155}).wait(1).to({graphics:mask_2_graphics_121,x:233.6,y:154.7}).wait(1).to({graphics:mask_2_graphics_122,x:233.7,y:154.3}).wait(1).to({graphics:mask_2_graphics_123,x:233.9,y:153.9}).wait(1).to({graphics:mask_2_graphics_124,x:234.1,y:153.6}).wait(1).to({graphics:mask_2_graphics_125,x:234.2,y:153.2}).wait(1).to({graphics:mask_2_graphics_126,x:234.4,y:152.8}).wait(1).to({graphics:mask_2_graphics_127,x:234.5,y:152.4}).wait(1).to({graphics:mask_2_graphics_128,x:234.7,y:152}).wait(1).to({graphics:mask_2_graphics_129,x:234.9,y:151.6}).wait(1).to({graphics:mask_2_graphics_130,x:235,y:151.3}).wait(1).to({graphics:mask_2_graphics_131,x:235.2,y:150.9}).wait(1).to({graphics:mask_2_graphics_132,x:235.4,y:150.5}).wait(1).to({graphics:mask_2_graphics_133,x:235.5,y:150.1}).wait(1).to({graphics:mask_2_graphics_134,x:235.7,y:149.7}).wait(1).to({graphics:mask_2_graphics_135,x:235.9,y:149.4}).wait(1).to({graphics:mask_2_graphics_136,x:236,y:149}).wait(1).to({graphics:mask_2_graphics_137,x:236.2,y:148.6}).wait(1).to({graphics:mask_2_graphics_138,x:236.4,y:148.2}).wait(1).to({graphics:mask_2_graphics_139,x:236.6,y:147.8}).wait(1).to({graphics:mask_2_graphics_140,x:236.7,y:147.4}).wait(1).to({graphics:mask_2_graphics_141,x:236.9,y:147}).wait(1).to({graphics:mask_2_graphics_142,x:236.7,y:147.5}).wait(1).to({graphics:mask_2_graphics_143,x:236.4,y:148}).wait(1).to({graphics:mask_2_graphics_144,x:236.2,y:148.5}).wait(1).to({graphics:mask_2_graphics_145,x:236,y:149}).wait(1).to({graphics:mask_2_graphics_146,x:235.8,y:149.6}).wait(1).to({graphics:mask_2_graphics_147,x:235.6,y:150.2}).wait(1).to({graphics:mask_2_graphics_148,x:235.4,y:150.8}).wait(1).to({graphics:mask_2_graphics_149,x:235.2,y:151.4}).wait(1).to({graphics:mask_2_graphics_150,x:235,y:152}).wait(1).to({graphics:mask_2_graphics_151,x:234.7,y:152.7}).wait(1).to({graphics:mask_2_graphics_152,x:234.5,y:153.3}).wait(1).to({graphics:mask_2_graphics_153,x:234.3,y:153.9}).wait(1).to({graphics:mask_2_graphics_154,x:234.1,y:154.5}).wait(1).to({graphics:mask_2_graphics_155,x:233.9,y:155.1}).wait(1).to({graphics:mask_2_graphics_156,x:233.7,y:155.7}).wait(1).to({graphics:mask_2_graphics_157,x:233.5,y:156.4}).wait(1).to({graphics:mask_2_graphics_158,x:233.3,y:157}).wait(1).to({graphics:mask_2_graphics_159,x:233,y:157.6}).wait(1).to({graphics:mask_2_graphics_160,x:232.8,y:158.2}).wait(1).to({graphics:mask_2_graphics_161,x:232.6,y:158.8}).wait(1).to({graphics:mask_2_graphics_162,x:232.4,y:159.4}).wait(1).to({graphics:mask_2_graphics_163,x:232.2,y:160}).wait(1).to({graphics:mask_2_graphics_164,x:232,y:160.6}).wait(1).to({graphics:mask_2_graphics_165,x:231.8,y:161.3}).wait(1).to({graphics:mask_2_graphics_166,x:231.5,y:161.9}).wait(1).to({graphics:mask_2_graphics_167,x:231.3,y:162.5}).wait(1).to({graphics:mask_2_graphics_168,x:231.1,y:163.1}).wait(1).to({graphics:mask_2_graphics_169,x:230.9,y:163.7}).wait(1).to({graphics:mask_2_graphics_170,x:230.7,y:164.3}).wait(1).to({graphics:mask_2_graphics_171,x:230.5,y:165}).wait(1).to({graphics:mask_2_graphics_172,x:230.3,y:165.6}).wait(1).to({graphics:mask_2_graphics_173,x:230.1,y:166.2}).wait(1).to({graphics:mask_2_graphics_174,x:229.9,y:166.8}).wait(1).to({graphics:mask_2_graphics_175,x:229.6,y:167.4}).wait(1).to({graphics:mask_2_graphics_176,x:229.4,y:168}).wait(1).to({graphics:mask_2_graphics_177,x:229.2,y:168.7}).wait(1).to({graphics:mask_2_graphics_178,x:229,y:169.3}).wait(1).to({graphics:mask_2_graphics_179,x:152.9,y:148.4}).wait(602));

	// Layer 5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(20,1,1).p("AGQrtQkwJBnvOa");
	this.shape_3.setTransform(212.3,205);
	this.shape_3._off = true;

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(9).to({_off:false},0).wait(772));

	// number
	this.instance_4 = new lib._4("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(273.2,275.1);
	this.instance_4.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(781));

	// Background
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#F59E9E").ss(3,1,1).p("EAq+Aq+MhV7AAAMAAAhV7MBV7AAAg");
	this.shape_4.setTransform(275,275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F6E7E7").s().p("Egq9Aq+MAAAhV7MBV7AAAMAAABV7g");
	this.shape_5.setTransform(275,275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(781));

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