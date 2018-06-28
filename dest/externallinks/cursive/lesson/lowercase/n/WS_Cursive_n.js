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


(lib.n = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A2+LwQAAhWEmosQFCpeAmh4QjfAvkQDEIm4FXQgpAggsAAQiPAAgBiSQAAg+AwgmQCVi7GCjiIFUinQCuhGBpAAQBvAABEA3QBJA7AABtQAABpgsBeQDKiqCehhQD1ibCcAAQBsAABBBEQA9BAAABsQAAB5hECaIiYEfQjeGRABDiQAAA1BRAAQHJgBN9scIA4goQBnhhC+jCQBJguAvgBQBgABABByQgBAsh0CSIifDCIiwCsQmLFZkWCtQjOB+i4BBQjTBLi+AAQibAAhphPQh1hbAAiYQgBhgAhg7IGKujIAShGQhgARiYBnIkiDoQj/DkjhD7QhVBehTDKQhXDchBBVQg6BJg+AAQiQAAAAiPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-198,-89.5,396.1,179);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-143.7,guide:{path:[-5.3,-65.1,-0.8,-104,2.3,-128.4,5.3,-152.8,18.5,-174.2,18.5,-174.3,18.6,-174.4]}},77).to({rotation:-49.3,guide:{path:[18.6,-174.5,23.9,-183,27.9,-184.6]}},12).to({regX:0.1,regY:-0.1,scaleX:1,scaleY:1,rotation:0,guide:{path:[27.9,-184.6,30.8,-185.8,33,-183.2,35.2,-180.7,36.7,-174.3,41.7,-152.9,40.7,-147]}},30).wait(1));

	// Layer 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_89 = new cjs.Graphics().p("Ag4tsIAAhhIGXAAIAABhg");
	var mask_graphics_90 = new cjs.Graphics().p("AjLA4IAAhvIGXAAIAABvg");
	var mask_graphics_91 = new cjs.Graphics().p("AjLA/IAAh9IGXAAIAAB9g");
	var mask_graphics_92 = new cjs.Graphics().p("AjLBGIAAiLIGXAAIAACLg");
	var mask_graphics_93 = new cjs.Graphics().p("AjLBNIAAiZIGXAAIAACZg");
	var mask_graphics_94 = new cjs.Graphics().p("AjLBUIAAinIGXAAIAACng");
	var mask_graphics_95 = new cjs.Graphics().p("AjLBbIAAi1IGXAAIAAC1g");
	var mask_graphics_96 = new cjs.Graphics().p("AjLBiIAAjDIGXAAIAADDg");
	var mask_graphics_97 = new cjs.Graphics().p("AjLBpIAAjRIGXAAIAADRg");
	var mask_graphics_98 = new cjs.Graphics().p("AjLBwIAAjfIGXAAIAADfg");
	var mask_graphics_99 = new cjs.Graphics().p("AjLB3IAAjtIGXAAIAADtg");
	var mask_graphics_100 = new cjs.Graphics().p("AjLB+IAAj7IGXAAIAAD7g");
	var mask_graphics_101 = new cjs.Graphics().p("AjLCFIAAkJIGXAAIAAEJg");
	var mask_graphics_102 = new cjs.Graphics().p("AjLCMIAAkYIGXAAIAAEYg");
	var mask_graphics_103 = new cjs.Graphics().p("AjLCUIAAknIGXAAIAAEng");
	var mask_graphics_104 = new cjs.Graphics().p("AjLCbIAAk1IGXAAIAAE1g");
	var mask_graphics_105 = new cjs.Graphics().p("AjLCiIAAlDIGXAAIAAFDg");
	var mask_graphics_106 = new cjs.Graphics().p("AjLCpIAAlRIGXAAIAAFRg");
	var mask_graphics_107 = new cjs.Graphics().p("AjLCwIAAlfIGXAAIAAFfg");
	var mask_graphics_108 = new cjs.Graphics().p("AjLC3IAAltIGXAAIAAFtg");
	var mask_graphics_109 = new cjs.Graphics().p("AjLC+IAAl7IGXAAIAAF7g");
	var mask_graphics_110 = new cjs.Graphics().p("AjLDFIAAmJIGXAAIAAGJg");
	var mask_graphics_111 = new cjs.Graphics().p("AjLDMIAAmXIGXAAIAAGXg");
	var mask_graphics_112 = new cjs.Graphics().p("AjLDTIAAmlIGXAAIAAGlg");
	var mask_graphics_113 = new cjs.Graphics().p("AjLDaIAAmzIGXAAIAAGzg");
	var mask_graphics_114 = new cjs.Graphics().p("AjLDhIAAnBIGXAAIAAHBg");
	var mask_graphics_115 = new cjs.Graphics().p("AjLDoIAAnPIGXAAIAAHPg");
	var mask_graphics_116 = new cjs.Graphics().p("AjLDwIAAnfIGXAAIAAHfg");
	var mask_graphics_117 = new cjs.Graphics().p("AjLD2IAAnsIGXAAIAAHsg");
	var mask_graphics_118 = new cjs.Graphics().p("AjLD+IAAn7IGXAAIAAH7g");
	var mask_graphics_119 = new cjs.Graphics().p("Ag4l9IAApQIGXAAIAAJQg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(89).to({graphics:mask_graphics_89,x:35.1,y:-97.4}).wait(1).to({graphics:mask_graphics_90,x:49.8,y:-189.3}).wait(1).to({graphics:mask_graphics_91,x:49.8,y:-188.6}).wait(1).to({graphics:mask_graphics_92,x:49.8,y:-187.8}).wait(1).to({graphics:mask_graphics_93,x:49.8,y:-187.1}).wait(1).to({graphics:mask_graphics_94,x:49.8,y:-186.4}).wait(1).to({graphics:mask_graphics_95,x:49.8,y:-185.7}).wait(1).to({graphics:mask_graphics_96,x:49.8,y:-185}).wait(1).to({graphics:mask_graphics_97,x:49.8,y:-184.3}).wait(1).to({graphics:mask_graphics_98,x:49.8,y:-183.6}).wait(1).to({graphics:mask_graphics_99,x:49.8,y:-182.9}).wait(1).to({graphics:mask_graphics_100,x:49.8,y:-182.2}).wait(1).to({graphics:mask_graphics_101,x:49.8,y:-181.5}).wait(1).to({graphics:mask_graphics_102,x:49.8,y:-180.8}).wait(1).to({graphics:mask_graphics_103,x:49.8,y:-180.1}).wait(1).to({graphics:mask_graphics_104,x:49.8,y:-179.4}).wait(1).to({graphics:mask_graphics_105,x:49.8,y:-178.7}).wait(1).to({graphics:mask_graphics_106,x:49.8,y:-178}).wait(1).to({graphics:mask_graphics_107,x:49.8,y:-177.3}).wait(1).to({graphics:mask_graphics_108,x:49.8,y:-176.6}).wait(1).to({graphics:mask_graphics_109,x:49.8,y:-175.9}).wait(1).to({graphics:mask_graphics_110,x:49.8,y:-175.2}).wait(1).to({graphics:mask_graphics_111,x:49.8,y:-174.5}).wait(1).to({graphics:mask_graphics_112,x:49.8,y:-173.8}).wait(1).to({graphics:mask_graphics_113,x:49.8,y:-173.1}).wait(1).to({graphics:mask_graphics_114,x:49.8,y:-172.4}).wait(1).to({graphics:mask_graphics_115,x:49.8,y:-171.7}).wait(1).to({graphics:mask_graphics_116,x:49.8,y:-170.9}).wait(1).to({graphics:mask_graphics_117,x:49.8,y:-170.2}).wait(1).to({graphics:mask_graphics_118,x:49.8,y:-169.5}).wait(1).to({graphics:mask_graphics_119,x:35.1,y:-97.4}).wait(1));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AjlJWQAtmGAejzQAfj0CDjVQCEjWA1DdQA1DcgWBu");
	this.shape.setTransform(17.6,-124.9);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(89).to({_off:false},0).wait(31));

	// Layer 4 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AjLidIAAi4IGXAAIAAC4g");
	var mask_1_graphics_1 = new cjs.Graphics().p("AjLBjIAAjFIGXAAIAADFg");
	var mask_1_graphics_2 = new cjs.Graphics().p("AjLBqIAAjTIGXAAIAADTg");
	var mask_1_graphics_3 = new cjs.Graphics().p("AjLBxIAAjhIGXAAIAADhg");
	var mask_1_graphics_4 = new cjs.Graphics().p("AjLB4IAAjvIGXAAIAADvg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AjLB/IAAj+IGXAAIAAD+g");
	var mask_1_graphics_6 = new cjs.Graphics().p("AjLCGIAAkLIGXAAIAAELg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AjLCOIAAkbIGXAAIAAEbg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AjLCVIAAkpIGXAAIAAEpg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AjLCcIAAk3IGXAAIAAE3g");
	var mask_1_graphics_10 = new cjs.Graphics().p("AjLCjIAAlFIGXAAIAAFFg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AjLCqIAAlTIGXAAIAAFTg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AjLCxIAAlhIGXAAIAAFhg");
	var mask_1_graphics_13 = new cjs.Graphics().p("AjLC4IAAlvIGXAAIAAFvg");
	var mask_1_graphics_14 = new cjs.Graphics().p("AjLC/IAAl9IGXAAIAAF9g");
	var mask_1_graphics_15 = new cjs.Graphics().p("AjLDGIAAmMIGXAAIAAGMg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AjLDNIAAmZIGXAAIAAGZg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AjLDVIAAmpIGXAAIAAGpg");
	var mask_1_graphics_18 = new cjs.Graphics().p("AjLDcIAAm3IGXAAIAAG3g");
	var mask_1_graphics_19 = new cjs.Graphics().p("AjLDjIAAnFIGXAAIAAHFg");
	var mask_1_graphics_20 = new cjs.Graphics().p("AjLDqIAAnTIGXAAIAAHTg");
	var mask_1_graphics_21 = new cjs.Graphics().p("AjLDxIAAnhIGXAAIAAHhg");
	var mask_1_graphics_22 = new cjs.Graphics().p("AjLD4IAAnvIGXAAIAAHvg");
	var mask_1_graphics_23 = new cjs.Graphics().p("AjLD/IAAn9IGXAAIAAH9g");
	var mask_1_graphics_24 = new cjs.Graphics().p("AjLEGIAAoMIGXAAIAAIMg");
	var mask_1_graphics_25 = new cjs.Graphics().p("AjLENIAAoZIGXAAIAAIZg");
	var mask_1_graphics_26 = new cjs.Graphics().p("AjLEVIAAopIGXAAIAAIpg");
	var mask_1_graphics_27 = new cjs.Graphics().p("AjLEcIAAo3IGXAAIAAI3g");
	var mask_1_graphics_28 = new cjs.Graphics().p("AjLEjIAApFIGXAAIAAJFg");
	var mask_1_graphics_29 = new cjs.Graphics().p("AjLEqIAApTIGXAAIAAJTg");
	var mask_1_graphics_30 = new cjs.Graphics().p("AjLExIAAphIGXAAIAAJhg");
	var mask_1_graphics_31 = new cjs.Graphics().p("AjLE4IAApvIGXAAIAAJvg");
	var mask_1_graphics_32 = new cjs.Graphics().p("AjLE/IAAp9IGXAAIAAJ9g");
	var mask_1_graphics_33 = new cjs.Graphics().p("AjLFGIAAqLIGXAAIAAKLg");
	var mask_1_graphics_34 = new cjs.Graphics().p("AjLFNIAAqaIGXAAIAAKag");
	var mask_1_graphics_35 = new cjs.Graphics().p("AjLFUIAAqnIGXAAIAAKng");
	var mask_1_graphics_36 = new cjs.Graphics().p("AjLFcIAAq3IGXAAIAAK3g");
	var mask_1_graphics_37 = new cjs.Graphics().p("AjLFjIAArFIGXAAIAALFg");
	var mask_1_graphics_38 = new cjs.Graphics().p("AjLFqIAArTIGXAAIAALTg");
	var mask_1_graphics_39 = new cjs.Graphics().p("AjLFxIAArhIGXAAIAALhg");
	var mask_1_graphics_40 = new cjs.Graphics().p("AjLF4IAArvIGXAAIAALvg");
	var mask_1_graphics_41 = new cjs.Graphics().p("AjLF/IAAr9IGXAAIAAL9g");
	var mask_1_graphics_42 = new cjs.Graphics().p("AjLGGIAAsLIGXAAIAAMLg");
	var mask_1_graphics_43 = new cjs.Graphics().p("AjLGNIAAsZIGXAAIAAMZg");
	var mask_1_graphics_44 = new cjs.Graphics().p("AjLGUIAAsnIGXAAIAAMng");
	var mask_1_graphics_45 = new cjs.Graphics().p("AjLGbIAAs2IGXAAIAAM2g");
	var mask_1_graphics_46 = new cjs.Graphics().p("AjLGjIAAtFIGXAAIAANFg");
	var mask_1_graphics_47 = new cjs.Graphics().p("AjLGqIAAtTIGXAAIAANTg");
	var mask_1_graphics_48 = new cjs.Graphics().p("AjLGxIAAthIGXAAIAANhg");
	var mask_1_graphics_49 = new cjs.Graphics().p("AjLG4IAAtvIGXAAIAANvg");
	var mask_1_graphics_50 = new cjs.Graphics().p("AjLG/IAAt9IGXAAIAAN9g");
	var mask_1_graphics_51 = new cjs.Graphics().p("AjLHGIAAuLIGXAAIAAOLg");
	var mask_1_graphics_52 = new cjs.Graphics().p("AjLHNIAAuZIGXAAIAAOZg");
	var mask_1_graphics_53 = new cjs.Graphics().p("AjLHUIAAunIGXAAIAAOng");
	var mask_1_graphics_54 = new cjs.Graphics().p("AjLHbIAAu1IGXAAIAAO1g");
	var mask_1_graphics_55 = new cjs.Graphics().p("AjLHiIAAvEIGXAAIAAPEg");
	var mask_1_graphics_56 = new cjs.Graphics().p("AjLHqIAAvTIGXAAIAAPTg");
	var mask_1_graphics_57 = new cjs.Graphics().p("AjLHxIAAvhIGXAAIAAPhg");
	var mask_1_graphics_58 = new cjs.Graphics().p("AjLH4IAAvvIGXAAIAAPvg");
	var mask_1_graphics_59 = new cjs.Graphics().p("AjLH/IAAv9IGXAAIAAP9g");
	var mask_1_graphics_60 = new cjs.Graphics().p("AjLIGIAAwLIGXAAIAAQLg");
	var mask_1_graphics_61 = new cjs.Graphics().p("AjLINIAAwZIGXAAIAAQZg");
	var mask_1_graphics_62 = new cjs.Graphics().p("AjLIUIAAwnIGXAAIAAQng");
	var mask_1_graphics_63 = new cjs.Graphics().p("AjLIbIAAw1IGXAAIAAQ1g");
	var mask_1_graphics_64 = new cjs.Graphics().p("AjLIiIAAxEIGXAAIAAREg");
	var mask_1_graphics_65 = new cjs.Graphics().p("AjLIpIAAxSIGXAAIAARSg");
	var mask_1_graphics_66 = new cjs.Graphics().p("AjLIxIAAxhIGXAAIAARhg");
	var mask_1_graphics_67 = new cjs.Graphics().p("AjLI4IAAxvIGXAAIAARvg");
	var mask_1_graphics_68 = new cjs.Graphics().p("AjLI/IAAx9IGXAAIAAR9g");
	var mask_1_graphics_69 = new cjs.Graphics().p("AjLJGIAAyLIGXAAIAASLg");
	var mask_1_graphics_70 = new cjs.Graphics().p("AjLJNIAAyZIGXAAIAASZg");
	var mask_1_graphics_71 = new cjs.Graphics().p("AjLJUIAAynIGXAAIAASng");
	var mask_1_graphics_72 = new cjs.Graphics().p("AjLJbIAAy1IGXAAIAAS1g");
	var mask_1_graphics_73 = new cjs.Graphics().p("AjLJiIAAzDIGXAAIAATDg");
	var mask_1_graphics_74 = new cjs.Graphics().p("AjLJpIAAzSIGXAAIAATSg");
	var mask_1_graphics_75 = new cjs.Graphics().p("AjLJwIAAzfIGXAAIAATfg");
	var mask_1_graphics_76 = new cjs.Graphics().p("AjLJ4IAAzvIGXAAIAATvg");
	var mask_1_graphics_77 = new cjs.Graphics().p("AjLJ/IAAz9IGXAAIAAT9g");
	var mask_1_graphics_78 = new cjs.Graphics().p("AjLKGIAA0LIGXAAIAAULg");
	var mask_1_graphics_79 = new cjs.Graphics().p("AjLKNIAA0ZIGXAAIAAUZg");
	var mask_1_graphics_80 = new cjs.Graphics().p("AjLKUIAA0nIGXAAIAAUng");
	var mask_1_graphics_81 = new cjs.Graphics().p("AjLKbIAA01IGXAAIAAU1g");
	var mask_1_graphics_82 = new cjs.Graphics().p("AjLKiIAA1DIGXAAIAAVDg");
	var mask_1_graphics_83 = new cjs.Graphics().p("AjLKpIAA1SIGXAAIAAVSg");
	var mask_1_graphics_84 = new cjs.Graphics().p("AjLKwIAA1gIGXAAIAAVgg");
	var mask_1_graphics_85 = new cjs.Graphics().p("AjLK3IAA1tIGXAAIAAVtg");
	var mask_1_graphics_86 = new cjs.Graphics().p("AjLK/IAA19IGXAAIAAV9g");
	var mask_1_graphics_87 = new cjs.Graphics().p("AjLLGIAA2LIGXAAIAAWLg");
	var mask_1_graphics_88 = new cjs.Graphics().p("AjLLNIAA2ZIGXAAIAAWZg");
	var mask_1_graphics_89 = new cjs.Graphics().p("AjLHaIAA2nIGXAAIAAWng");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:9.8,y:-34.2}).wait(1).to({graphics:mask_1_graphics_1,x:9.8,y:-59.9}).wait(1).to({graphics:mask_1_graphics_2,x:9.8,y:-60.6}).wait(1).to({graphics:mask_1_graphics_3,x:9.8,y:-61.3}).wait(1).to({graphics:mask_1_graphics_4,x:9.8,y:-62}).wait(1).to({graphics:mask_1_graphics_5,x:9.8,y:-62.7}).wait(1).to({graphics:mask_1_graphics_6,x:9.8,y:-63.4}).wait(1).to({graphics:mask_1_graphics_7,x:9.8,y:-64.2}).wait(1).to({graphics:mask_1_graphics_8,x:9.8,y:-64.9}).wait(1).to({graphics:mask_1_graphics_9,x:9.8,y:-65.6}).wait(1).to({graphics:mask_1_graphics_10,x:9.8,y:-66.3}).wait(1).to({graphics:mask_1_graphics_11,x:9.8,y:-67}).wait(1).to({graphics:mask_1_graphics_12,x:9.8,y:-67.7}).wait(1).to({graphics:mask_1_graphics_13,x:9.8,y:-68.4}).wait(1).to({graphics:mask_1_graphics_14,x:9.8,y:-69.1}).wait(1).to({graphics:mask_1_graphics_15,x:9.8,y:-69.8}).wait(1).to({graphics:mask_1_graphics_16,x:9.8,y:-70.5}).wait(1).to({graphics:mask_1_graphics_17,x:9.8,y:-71.3}).wait(1).to({graphics:mask_1_graphics_18,x:9.8,y:-72}).wait(1).to({graphics:mask_1_graphics_19,x:9.8,y:-72.7}).wait(1).to({graphics:mask_1_graphics_20,x:9.8,y:-73.4}).wait(1).to({graphics:mask_1_graphics_21,x:9.8,y:-74.1}).wait(1).to({graphics:mask_1_graphics_22,x:9.8,y:-74.8}).wait(1).to({graphics:mask_1_graphics_23,x:9.8,y:-75.5}).wait(1).to({graphics:mask_1_graphics_24,x:9.8,y:-76.2}).wait(1).to({graphics:mask_1_graphics_25,x:9.8,y:-76.9}).wait(1).to({graphics:mask_1_graphics_26,x:9.8,y:-77.7}).wait(1).to({graphics:mask_1_graphics_27,x:9.8,y:-78.4}).wait(1).to({graphics:mask_1_graphics_28,x:9.8,y:-79.1}).wait(1).to({graphics:mask_1_graphics_29,x:9.8,y:-79.8}).wait(1).to({graphics:mask_1_graphics_30,x:9.8,y:-80.5}).wait(1).to({graphics:mask_1_graphics_31,x:9.8,y:-81.2}).wait(1).to({graphics:mask_1_graphics_32,x:9.8,y:-81.9}).wait(1).to({graphics:mask_1_graphics_33,x:9.8,y:-82.6}).wait(1).to({graphics:mask_1_graphics_34,x:9.8,y:-83.3}).wait(1).to({graphics:mask_1_graphics_35,x:9.8,y:-84}).wait(1).to({graphics:mask_1_graphics_36,x:9.8,y:-84.8}).wait(1).to({graphics:mask_1_graphics_37,x:9.8,y:-85.5}).wait(1).to({graphics:mask_1_graphics_38,x:9.8,y:-86.2}).wait(1).to({graphics:mask_1_graphics_39,x:9.8,y:-86.9}).wait(1).to({graphics:mask_1_graphics_40,x:9.8,y:-87.6}).wait(1).to({graphics:mask_1_graphics_41,x:9.8,y:-88.3}).wait(1).to({graphics:mask_1_graphics_42,x:9.8,y:-89}).wait(1).to({graphics:mask_1_graphics_43,x:9.8,y:-89.7}).wait(1).to({graphics:mask_1_graphics_44,x:9.8,y:-90.4}).wait(1).to({graphics:mask_1_graphics_45,x:9.8,y:-91.1}).wait(1).to({graphics:mask_1_graphics_46,x:9.8,y:-91.9}).wait(1).to({graphics:mask_1_graphics_47,x:9.8,y:-92.6}).wait(1).to({graphics:mask_1_graphics_48,x:9.8,y:-93.3}).wait(1).to({graphics:mask_1_graphics_49,x:9.8,y:-94}).wait(1).to({graphics:mask_1_graphics_50,x:9.8,y:-94.7}).wait(1).to({graphics:mask_1_graphics_51,x:9.8,y:-95.4}).wait(1).to({graphics:mask_1_graphics_52,x:9.8,y:-96.1}).wait(1).to({graphics:mask_1_graphics_53,x:9.8,y:-96.8}).wait(1).to({graphics:mask_1_graphics_54,x:9.8,y:-97.5}).wait(1).to({graphics:mask_1_graphics_55,x:9.8,y:-98.2}).wait(1).to({graphics:mask_1_graphics_56,x:9.8,y:-99}).wait(1).to({graphics:mask_1_graphics_57,x:9.8,y:-99.7}).wait(1).to({graphics:mask_1_graphics_58,x:9.8,y:-100.4}).wait(1).to({graphics:mask_1_graphics_59,x:9.8,y:-101.1}).wait(1).to({graphics:mask_1_graphics_60,x:9.8,y:-101.8}).wait(1).to({graphics:mask_1_graphics_61,x:9.8,y:-102.5}).wait(1).to({graphics:mask_1_graphics_62,x:9.8,y:-103.2}).wait(1).to({graphics:mask_1_graphics_63,x:9.8,y:-103.9}).wait(1).to({graphics:mask_1_graphics_64,x:9.8,y:-104.6}).wait(1).to({graphics:mask_1_graphics_65,x:9.8,y:-105.3}).wait(1).to({graphics:mask_1_graphics_66,x:9.8,y:-106.1}).wait(1).to({graphics:mask_1_graphics_67,x:9.8,y:-106.8}).wait(1).to({graphics:mask_1_graphics_68,x:9.8,y:-107.5}).wait(1).to({graphics:mask_1_graphics_69,x:9.8,y:-108.2}).wait(1).to({graphics:mask_1_graphics_70,x:9.8,y:-108.9}).wait(1).to({graphics:mask_1_graphics_71,x:9.8,y:-109.6}).wait(1).to({graphics:mask_1_graphics_72,x:9.8,y:-110.3}).wait(1).to({graphics:mask_1_graphics_73,x:9.8,y:-111}).wait(1).to({graphics:mask_1_graphics_74,x:9.8,y:-111.7}).wait(1).to({graphics:mask_1_graphics_75,x:9.8,y:-112.4}).wait(1).to({graphics:mask_1_graphics_76,x:9.8,y:-113.2}).wait(1).to({graphics:mask_1_graphics_77,x:9.8,y:-113.9}).wait(1).to({graphics:mask_1_graphics_78,x:9.8,y:-114.6}).wait(1).to({graphics:mask_1_graphics_79,x:9.8,y:-115.3}).wait(1).to({graphics:mask_1_graphics_80,x:9.8,y:-116}).wait(1).to({graphics:mask_1_graphics_81,x:9.8,y:-116.7}).wait(1).to({graphics:mask_1_graphics_82,x:9.8,y:-117.4}).wait(1).to({graphics:mask_1_graphics_83,x:9.8,y:-118.1}).wait(1).to({graphics:mask_1_graphics_84,x:9.8,y:-118.8}).wait(1).to({graphics:mask_1_graphics_85,x:9.8,y:-119.5}).wait(1).to({graphics:mask_1_graphics_86,x:9.8,y:-120.3}).wait(1).to({graphics:mask_1_graphics_87,x:9.8,y:-121}).wait(1).to({graphics:mask_1_graphics_88,x:9.8,y:-121.7}).wait(1).to({graphics:mask_1_graphics_89,x:9.8,y:-97.4}).wait(31));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AjlJWQAtmGAejzQAfj0CDjVQCEjWA1DdQA1DcgWBu");
	this.shape_1.setTransform(17.6,-124.9);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.6,-76.3,46.8,14.8);


(lib.ar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-27,21.4,1,1,-135);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:33.2,y:-27},74).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AiggCIA+gvIBvCTIg9Aug");
	var mask_graphics_1 = new cjs.Graphics().p("AhagvIBGg0IBvCTIhGA0g");
	var mask_graphics_2 = new cjs.Graphics().p("AhegsIBOg6IBuCSIhMA7g");
	var mask_graphics_3 = new cjs.Graphics().p("AhhgpIBUhAIBvCTIhUBAg");
	var mask_graphics_4 = new cjs.Graphics().p("AhlgmIBchGIBvCTIhcBGg");
	var mask_graphics_5 = new cjs.Graphics().p("AhogjIBjhLIBuCSIhjBLg");
	var mask_graphics_6 = new cjs.Graphics().p("AhsggIBqhRIBvCSIhqBRg");
	var mask_graphics_7 = new cjs.Graphics().p("AhwgdIBxhXIBwCSIhxBXg");
	var mask_graphics_8 = new cjs.Graphics().p("Ah0gaIB5hdIBwCTIh5Bcg");
	var mask_graphics_9 = new cjs.Graphics().p("Ah4gYICBhiIBwCTIiBBig");
	var mask_graphics_10 = new cjs.Graphics().p("Ah7gVICHhoIBwCTIiIBog");
	var mask_graphics_11 = new cjs.Graphics().p("Ah/gSICPhuIBwCTIiPBug");
	var mask_graphics_12 = new cjs.Graphics().p("AiDgPICXhzIBwCSIiXBzg");
	var mask_graphics_13 = new cjs.Graphics().p("AiHgNICfh4IBwCSIifB5g");
	var mask_graphics_14 = new cjs.Graphics().p("AiKgKIClh+IBwCSIilB/g");
	var mask_graphics_15 = new cjs.Graphics().p("AiOgHICtiEIBwCTIitCEg");
	var mask_graphics_16 = new cjs.Graphics().p("AiSgEIC1iKIBwCTIi1CKg");
	var mask_graphics_17 = new cjs.Graphics().p("AiWgBIC8iPIBxCSIi8CPg");
	var mask_graphics_18 = new cjs.Graphics().p("AiZABIDDiVIBwCUIjDCUg");
	var mask_graphics_19 = new cjs.Graphics().p("AidAEIDLiaIBwCUIjLCZg");
	var mask_graphics_20 = new cjs.Graphics().p("AihAGIDTifIBwCUIjTCfg");
	var mask_graphics_21 = new cjs.Graphics().p("AilAJIDbilIBvCUIjZClg");
	var mask_graphics_22 = new cjs.Graphics().p("AioAMIDhirIBwCUIjhCqg");
	var mask_graphics_23 = new cjs.Graphics().p("AisAPIDpixIBwCUIjpCwg");
	var mask_graphics_24 = new cjs.Graphics().p("AiwASIDxi2IBwCTIjxC2g");
	var mask_graphics_25 = new cjs.Graphics().p("AizAVID4i8IBvCTIj4C8g");
	var mask_graphics_26 = new cjs.Graphics().p("Ai3AXID/jBIBwCUIj/DBg");
	var mask_graphics_27 = new cjs.Graphics().p("Ai7AaIEHjHIBwCUIkHDHg");
	var mask_graphics_28 = new cjs.Graphics().p("Ai/AdIEPjMIBwCTIkPDNg");
	var mask_graphics_29 = new cjs.Graphics().p("AjCAgIEWjTIBvCUIkWDTg");
	var mask_graphics_30 = new cjs.Graphics().p("AjGAjIEdjYIBwCTIkdDYg");
	var mask_graphics_31 = new cjs.Graphics().p("AjKAmIEljeIBwCTIklDeg");
	var mask_graphics_32 = new cjs.Graphics().p("AjOAoIEtjjIBwCTIktDkg");
	var mask_graphics_33 = new cjs.Graphics().p("AjRArIEzjpIBwCTIkzDqg");
	var mask_graphics_34 = new cjs.Graphics().p("AjVAuIE7jvIBwCUIk7Dug");
	var mask_graphics_35 = new cjs.Graphics().p("AjZAxIFDj0IBwCTIlDD0g");
	var mask_graphics_36 = new cjs.Graphics().p("AjdA0IFKj6IBxCTIlKD6g");
	var mask_graphics_37 = new cjs.Graphics().p("AjhA2IFSj/IBxCTIlSEAg");
	var mask_graphics_38 = new cjs.Graphics().p("AjkA5IFZkFIBwCUIlZEFg");
	var mask_graphics_39 = new cjs.Graphics().p("AjoA8IFhkLIBwCUIlhELg");
	var mask_graphics_40 = new cjs.Graphics().p("AjsA/IFpkRIBwCUIlpERg");
	var mask_graphics_41 = new cjs.Graphics().p("AjwBCIFwkWIBxCTIlwEWg");
	var mask_graphics_42 = new cjs.Graphics().p("AjzBFIF3kcIBwCTIl3Ecg");
	var mask_graphics_43 = new cjs.Graphics().p("Aj3BIIF/kiIBwCTIl/Eig");
	var mask_graphics_44 = new cjs.Graphics().p("Aj7BLIGGkoIBxCTImHEog");
	var mask_graphics_45 = new cjs.Graphics().p("Aj+BNIGNktIBwCUImNEtg");
	var mask_graphics_46 = new cjs.Graphics().p("AkCBQIGVkzIBwCUImVEzg");
	var mask_graphics_47 = new cjs.Graphics().p("AkGBTIGdk4IBwCTImdE5g");
	var mask_graphics_48 = new cjs.Graphics().p("AkKBWIGlk+IBvCTImkE/g");
	var mask_graphics_49 = new cjs.Graphics().p("AkNBYIGrlDIBwCUImrFDg");
	var mask_graphics_50 = new cjs.Graphics().p("AkRBbIGzlJIBwCTImzFKg");
	var mask_graphics_51 = new cjs.Graphics().p("AkUBeIG6lPIBvCUIm6FPg");
	var mask_graphics_52 = new cjs.Graphics().p("AkYBhIHClVIBvCUInCFVg");
	var mask_graphics_53 = new cjs.Graphics().p("AkcBkIHJlbIBwCUInJFag");
	var mask_graphics_54 = new cjs.Graphics().p("AkgBnIHRlgIBwCTInRFgg");
	var mask_graphics_55 = new cjs.Graphics().p("AkkBqIHZlmIBwCTInZFmg");
	var mask_graphics_56 = new cjs.Graphics().p("AknBsIHflrIBwCUIngFrg");
	var mask_graphics_57 = new cjs.Graphics().p("AkrBvIHnlxIBwCUInnFxg");
	var mask_graphics_58 = new cjs.Graphics().p("AkvByIHvl2IBwCTInvF3g");
	var mask_graphics_59 = new cjs.Graphics().p("AkzB1IH3l8IBwCTIn3F9g");
	var mask_graphics_60 = new cjs.Graphics().p("Ak2B4IH9mCIBxCTIn/GCg");
	var mask_graphics_61 = new cjs.Graphics().p("Ak6B7IIFmIIBwCTIoFGIg");
	var mask_graphics_62 = new cjs.Graphics().p("Ak+B+IINmOIBwCUIoNGNg");
	var mask_graphics_63 = new cjs.Graphics().p("AlCCAIIUmTIBxCUIoUGTg");
	var mask_graphics_64 = new cjs.Graphics().p("AlFCDIIbmZIBwCUIobGYg");
	var mask_graphics_65 = new cjs.Graphics().p("AlJCGIIjmeIBwCTIojGeg");
	var mask_graphics_66 = new cjs.Graphics().p("AlNCJIIrmkIBwCTIorGkg");
	var mask_graphics_67 = new cjs.Graphics().p("AlRCMIIzmqIBwCTIozGqg");
	var mask_graphics_68 = new cjs.Graphics().p("AlVCOII7mvIBwCUIo6Gvg");
	var mask_graphics_69 = new cjs.Graphics().p("AlYCRIJBm1IBwCUIpBG1g");
	var mask_graphics_70 = new cjs.Graphics().p("AlcCUIJJm7IBwCUIpJG7g");
	var mask_graphics_71 = new cjs.Graphics().p("AlfCXIJQnBIBwCUIpRHBg");
	var mask_graphics_72 = new cjs.Graphics().p("AljCaIJXnGIBwCTIpXHGg");
	var mask_graphics_73 = new cjs.Graphics().p("AlnCdIJfnMIBwCTIpfHMg");
	var mask_graphics_74 = new cjs.Graphics().p("AlrCgIJnnSIBwCTIpnHSg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-16.1,y:14.4}).wait(1).to({graphics:mask_graphics_1,x:-23.1,y:18.9}).wait(1).to({graphics:mask_graphics_2,x:-22.7,y:18.6}).wait(1).to({graphics:mask_graphics_3,x:-22.4,y:18.3}).wait(1).to({graphics:mask_graphics_4,x:-22,y:18}).wait(1).to({graphics:mask_graphics_5,x:-21.6,y:17.7}).wait(1).to({graphics:mask_graphics_6,x:-21.2,y:17.4}).wait(1).to({graphics:mask_graphics_7,x:-20.8,y:17.2}).wait(1).to({graphics:mask_graphics_8,x:-20.4,y:16.9}).wait(1).to({graphics:mask_graphics_9,x:-20.1,y:16.6}).wait(1).to({graphics:mask_graphics_10,x:-19.7,y:16.3}).wait(1).to({graphics:mask_graphics_11,x:-19.3,y:16}).wait(1).to({graphics:mask_graphics_12,x:-18.9,y:15.7}).wait(1).to({graphics:mask_graphics_13,x:-18.6,y:15.4}).wait(1).to({graphics:mask_graphics_14,x:-18.2,y:15.1}).wait(1).to({graphics:mask_graphics_15,x:-17.8,y:14.8}).wait(1).to({graphics:mask_graphics_16,x:-17.4,y:14.5}).wait(1).to({graphics:mask_graphics_17,x:-17,y:14.3}).wait(1).to({graphics:mask_graphics_18,x:-16.7,y:14}).wait(1).to({graphics:mask_graphics_19,x:-16.3,y:13.7}).wait(1).to({graphics:mask_graphics_20,x:-15.9,y:13.4}).wait(1).to({graphics:mask_graphics_21,x:-15.5,y:13.1}).wait(1).to({graphics:mask_graphics_22,x:-15.2,y:12.8}).wait(1).to({graphics:mask_graphics_23,x:-14.8,y:12.5}).wait(1).to({graphics:mask_graphics_24,x:-14.4,y:12.2}).wait(1).to({graphics:mask_graphics_25,x:-14,y:11.9}).wait(1).to({graphics:mask_graphics_26,x:-13.6,y:11.6}).wait(1).to({graphics:mask_graphics_27,x:-13.2,y:11.3}).wait(1).to({graphics:mask_graphics_28,x:-12.9,y:11.1}).wait(1).to({graphics:mask_graphics_29,x:-12.5,y:10.8}).wait(1).to({graphics:mask_graphics_30,x:-12.1,y:10.5}).wait(1).to({graphics:mask_graphics_31,x:-11.7,y:10.2}).wait(1).to({graphics:mask_graphics_32,x:-11.4,y:9.9}).wait(1).to({graphics:mask_graphics_33,x:-11,y:9.6}).wait(1).to({graphics:mask_graphics_34,x:-10.6,y:9.3}).wait(1).to({graphics:mask_graphics_35,x:-10.2,y:9}).wait(1).to({graphics:mask_graphics_36,x:-9.8,y:8.7}).wait(1).to({graphics:mask_graphics_37,x:-9.4,y:8.5}).wait(1).to({graphics:mask_graphics_38,x:-9.1,y:8.2}).wait(1).to({graphics:mask_graphics_39,x:-8.7,y:7.9}).wait(1).to({graphics:mask_graphics_40,x:-8.3,y:7.6}).wait(1).to({graphics:mask_graphics_41,x:-7.9,y:7.3}).wait(1).to({graphics:mask_graphics_42,x:-7.5,y:7}).wait(1).to({graphics:mask_graphics_43,x:-7.2,y:6.7}).wait(1).to({graphics:mask_graphics_44,x:-6.8,y:6.4}).wait(1).to({graphics:mask_graphics_45,x:-6.4,y:6.1}).wait(1).to({graphics:mask_graphics_46,x:-6,y:5.8}).wait(1).to({graphics:mask_graphics_47,x:-5.7,y:5.6}).wait(1).to({graphics:mask_graphics_48,x:-5.3,y:5.3}).wait(1).to({graphics:mask_graphics_49,x:-4.9,y:5}).wait(1).to({graphics:mask_graphics_50,x:-4.5,y:4.7}).wait(1).to({graphics:mask_graphics_51,x:-4.1,y:4.4}).wait(1).to({graphics:mask_graphics_52,x:-3.7,y:4.1}).wait(1).to({graphics:mask_graphics_53,x:-3.4,y:3.8}).wait(1).to({graphics:mask_graphics_54,x:-3,y:3.5}).wait(1).to({graphics:mask_graphics_55,x:-2.6,y:3.2}).wait(1).to({graphics:mask_graphics_56,x:-2.2,y:2.9}).wait(1).to({graphics:mask_graphics_57,x:-1.9,y:2.6}).wait(1).to({graphics:mask_graphics_58,x:-1.5,y:2.4}).wait(1).to({graphics:mask_graphics_59,x:-1.1,y:2.1}).wait(1).to({graphics:mask_graphics_60,x:-0.7,y:1.8}).wait(1).to({graphics:mask_graphics_61,x:-0.3,y:1.5}).wait(1).to({graphics:mask_graphics_62,x:0,y:1.2}).wait(1).to({graphics:mask_graphics_63,x:0.4,y:0.9}).wait(1).to({graphics:mask_graphics_64,x:0.8,y:0.6}).wait(1).to({graphics:mask_graphics_65,x:1.2,y:0.3}).wait(1).to({graphics:mask_graphics_66,x:1.5,y:0}).wait(1).to({graphics:mask_graphics_67,x:1.9,y:-0.3}).wait(1).to({graphics:mask_graphics_68,x:2.3,y:-0.5}).wait(1).to({graphics:mask_graphics_69,x:2.7,y:-0.8}).wait(1).to({graphics:mask_graphics_70,x:3.1,y:-1.1}).wait(1).to({graphics:mask_graphics_71,x:3.5,y:-1.4}).wait(1).to({graphics:mask_graphics_72,x:3.8,y:-1.7}).wait(1).to({graphics:mask_graphics_73,x:4.2,y:-2}).wait(1).to({graphics:mask_graphics_74,x:4.6,y:-2.3}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AjtEeQCHkkFUkW");
	this.shape.setTransform(3.5,-4.5,1,1,-167.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(75));

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
(lib.WS_Cursive_n = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_543 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(543).call(this.frame_543).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(91.4,258.3,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[91.7,258.6,112.6,239,141.7,220.9,171,202.7,189.9,201.2,208.7,199.7,206.5,212,204.4,224.3,199.2,235.8,194.1,247.2,189.5,255.8,184.9,264.4,172.7,289.7,160.8,314.5,142.6,351]}},180).wait(15).to({y:349},0).to({guide:{path:[142.8,349,157.6,318.3,172.5,287.6,241.8,222.4,265.7,209.8,289.6,197.3,300.6,201.2,306.1,203.2,304,214.6,301.9,226,292.2,246.8,272.7,288.5,263.8,311.8,254.8,335,264.6,344.4,274.5,353.7,304.3,344.6,334.1,335.6,371.5,310.2,408.9,285,461.6,228.9]}},260).wait(14).to({x:457.7,y:232.6},0).to({guide:{path:[457.7,232.6,475.4,208.3,511.1,179.9,529,165.6,559.2,173.7,589.4,181.7,631.9,212.1]}},65).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(143,348,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},180).wait(15).to({_off:false,x:461.2,y:228.4},0).to({_off:true},285).wait(55));

	// Layer 14
	this.instance_1 = new lib.ar7("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(187.9,329.5,0.88,1,22.4,0,0,-1.2,-99.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(204).to({_off:false},0).wait(340));

	// Layer 12 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_385 = new cjs.Graphics().p("ASXZVIDMieIDlEnIjNCeg");
	var mask_graphics_386 = new cjs.Graphics().p("Ajhg8IDgitIDjEmIjfCtg");
	var mask_graphics_387 = new cjs.Graphics().p("Ajqg1IDxi8IDlEnIjyC8g");
	var mask_graphics_388 = new cjs.Graphics().p("Aj0gtIEEjLIDlEmIkEDLg");
	var mask_graphics_389 = new cjs.Graphics().p("Aj9gmIEXjZIDkEmIkXDZg");
	var mask_graphics_390 = new cjs.Graphics().p("AkHgfIEqjoIDlEmIkqDpg");
	var mask_graphics_391 = new cjs.Graphics().p("AkQgXIE9j3IDkEmIk9D3g");
	var mask_graphics_392 = new cjs.Graphics().p("AkagQIFQkFIDlEmIlQEFg");
	var mask_graphics_393 = new cjs.Graphics().p("AkjgJIFjkUIDkEmIljEVg");
	var mask_graphics_394 = new cjs.Graphics().p("AktgBIF2kjIDlEmIl2Ejg");
	var mask_graphics_395 = new cjs.Graphics().p("Ak2AFIGJkwIDkEnImJEwg");
	var mask_graphics_396 = new cjs.Graphics().p("AlAAMIGck/IDlEnImcFAg");
	var mask_graphics_397 = new cjs.Graphics().p("AlJAUIGvlOIDkEnImvFOg");
	var mask_graphics_398 = new cjs.Graphics().p("AlTAcIHDldIDkEmInDFdg");
	var mask_graphics_399 = new cjs.Graphics().p("AldAjIHWlsIDlEnInWFsg");
	var mask_graphics_400 = new cjs.Graphics().p("AlmAqIHol6IDlEnInpF6g");
	var mask_graphics_401 = new cjs.Graphics().p("AlwAyIH8mJIDkEnIn7GIg");
	var mask_graphics_402 = new cjs.Graphics().p("Al5A5IIOmYIDlEnIoPGYg");
	var mask_graphics_403 = new cjs.Graphics().p("AmDBAIIimmIDkEnIohGmg");
	var mask_graphics_404 = new cjs.Graphics().p("AmMBIII0m1IDlEnIo1G0g");
	var mask_graphics_405 = new cjs.Graphics().p("AmVBPIJHnEIDkEnIpHHEg");
	var mask_graphics_406 = new cjs.Graphics().p("AmfBWIJanSIDlEnIpaHSg");
	var mask_graphics_407 = new cjs.Graphics().p("AmoBeIJtniIDkEoIptHgg");
	var mask_graphics_408 = new cjs.Graphics().p("AmyBlIKAnwIDlEnIqAHwg");
	var mask_graphics_409 = new cjs.Graphics().p("Am7BsIKTn+IDkEnIqTH+g");
	var mask_graphics_410 = new cjs.Graphics().p("AnFB0IKmoOIDlEnIqmIOg");
	var mask_graphics_411 = new cjs.Graphics().p("AnOB7IK5ocIDkEnIq5Icg");
	var mask_graphics_412 = new cjs.Graphics().p("AnYCCILMoqIDlEnIrMIqg");
	var mask_graphics_413 = new cjs.Graphics().p("AnhCKILfo6IDkEnIrfI6g");
	var mask_graphics_414 = new cjs.Graphics().p("AnrCRILypIIDlEnIryJIg");
	var mask_graphics_415 = new cjs.Graphics().p("An0CYIMFpWIDkEnIsFJWg");
	var mask_graphics_416 = new cjs.Graphics().p("An+CgIMYpmIDlEnIsYJmg");
	var mask_graphics_417 = new cjs.Graphics().p("AoHCnIMrp0IDkEnIsrJ0g");
	var mask_graphics_418 = new cjs.Graphics().p("AoRCvIM+qDIDlEnIs+KCg");
	var mask_graphics_419 = new cjs.Graphics().p("AoaC2INQqSIDlEnItRKSg");
	var mask_graphics_420 = new cjs.Graphics().p("AokC9INkqgIDkEnItjKgg");
	var mask_graphics_421 = new cjs.Graphics().p("AotDFIN2qwIDlEoIt3Kug");
	var mask_graphics_422 = new cjs.Graphics().p("Ao3DMIOKq+IDkEnIuJK+g");
	var mask_graphics_423 = new cjs.Graphics().p("ApADTIOcrMIDlEnIudLMg");
	var mask_graphics_424 = new cjs.Graphics().p("ApKDbIOwrcIDlEnIuwLcg");
	var mask_graphics_425 = new cjs.Graphics().p("ApTDiIPDrqIDkEnIvDLqg");
	var mask_graphics_426 = new cjs.Graphics().p("ApdDpIPWr5IDlEnIvWL6g");
	var mask_graphics_427 = new cjs.Graphics().p("ApmDxIPpsIIDkEnIvpMIg");
	var mask_graphics_428 = new cjs.Graphics().p("ApwD4IP8sWIDlEnIv8MWg");
	var mask_graphics_429 = new cjs.Graphics().p("Ap5D/IQPskIDkEmIwPMmg");
	var mask_graphics_430 = new cjs.Graphics().p("AqCEHIQhs0IDlEnIwiM0g");
	var mask_graphics_431 = new cjs.Graphics().p("AqMEOIQ1tCIDkEnIw1NCg");
	var mask_graphics_432 = new cjs.Graphics().p("AqVEVIRHtQIDlEmIxINSg");
	var mask_graphics_433 = new cjs.Graphics().p("AqfEdIRatgIDlEnIxbNgg");
	var mask_graphics_434 = new cjs.Graphics().p("AqoEkIRttuIDkEnIxtNug");
	var mask_graphics_435 = new cjs.Graphics().p("AqyErISAt8IDlEnIyBN9g");
	var mask_graphics_436 = new cjs.Graphics().p("Aq7EzISTuMIDkEnIyTOMg");
	var mask_graphics_437 = new cjs.Graphics().p("ArFE6ISmuaIDlEnIynOag");
	var mask_graphics_438 = new cjs.Graphics().p("ArOFBIS5uoIDkEnIy5Opg");
	var mask_graphics_439 = new cjs.Graphics().p("ArYFJITNu4IDkEnIzNO4g");
	var mask_graphics_440 = new cjs.Graphics().p("ArhFQITfvGIDlEnIzgPGg");
	var mask_graphics_441 = new cjs.Graphics().p("ArrFXITzvUIDkEnIzzPVg");
	var mask_graphics_442 = new cjs.Graphics().p("Ar0FfIUFvkIDlEnI0GPkg");
	var mask_graphics_443 = new cjs.Graphics().p("Ar+FmIUYvyIDlEnI0YPyg");
	var mask_graphics_444 = new cjs.Graphics().p("AsHFuIUrwCIDkEnI0rQCg");
	var mask_graphics_445 = new cjs.Graphics().p("AsRF1IU+wQIDlEnI0+QQg");
	var mask_graphics_446 = new cjs.Graphics().p("AsaF8IVRweIDkEnI1RQeg");
	var mask_graphics_447 = new cjs.Graphics().p("AskGEIVkwuIDlEnI1kQug");
	var mask_graphics_448 = new cjs.Graphics().p("AstGLIV3w8IDkEnI13Q8g");
	var mask_graphics_449 = new cjs.Graphics().p("As3GTIWKxMIDlEnI2KRLg");
	var mask_graphics_450 = new cjs.Graphics().p("AtAGaIWdxaIDkEnI2dRag");
	var mask_graphics_451 = new cjs.Graphics().p("AtKGhIWwxoIDlEnI2wRog");
	var mask_graphics_452 = new cjs.Graphics().p("AtTGpIXDx4IDkEnI3DR4g");
	var mask_graphics_453 = new cjs.Graphics().p("AtdGwIXXyGIDkEnI3WSGg");
	var mask_graphics_454 = new cjs.Graphics().p("AtmG3IXpyUIDlEnI3qSUg");
	var mask_graphics_455 = new cjs.Graphics().p("AtwG/IX8ykIDlEnI38Skg");
	var mask_graphics_456 = new cjs.Graphics().p("At5HGIYPyyIDkEnI4PSyg");
	var mask_graphics_457 = new cjs.Graphics().p("AuDHNIYizAIDlEnI4iTAg");
	var mask_graphics_458 = new cjs.Graphics().p("AuMHVIY1zQIDkEnI41TQg");
	var mask_graphics_459 = new cjs.Graphics().p("AuWHcIZIzeIDlEnI5ITeg");
	var mask_graphics_460 = new cjs.Graphics().p("AufHkIZbzuIDkEnI5bTtg");
	var mask_graphics_461 = new cjs.Graphics().p("AHEZWIZwz9IDkEnI5vT9g");
	var mask_graphics_462 = new cjs.Graphics().p("AvKIEIaw0uIDlEnI6wUug");
	var mask_graphics_463 = new cjs.Graphics().p("AvrIeIbz1iIDkEnI7zVig");
	var mask_graphics_464 = new cjs.Graphics().p("AFhZWIc22WIDkEnI81WWg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(385).to({graphics:mask_graphics_385,x:160.8,y:191.6}).wait(1).to({graphics:mask_graphics_386,x:300.9,y:359.8}).wait(1).to({graphics:mask_graphics_387,x:301.8,y:359.1}).wait(1).to({graphics:mask_graphics_388,x:302.8,y:358.3}).wait(1).to({graphics:mask_graphics_389,x:303.7,y:357.6}).wait(1).to({graphics:mask_graphics_390,x:304.7,y:356.9}).wait(1).to({graphics:mask_graphics_391,x:305.6,y:356.1}).wait(1).to({graphics:mask_graphics_392,x:306.5,y:355.4}).wait(1).to({graphics:mask_graphics_393,x:307.5,y:354.7}).wait(1).to({graphics:mask_graphics_394,x:308.4,y:353.9}).wait(1).to({graphics:mask_graphics_395,x:309.4,y:353.2}).wait(1).to({graphics:mask_graphics_396,x:310.3,y:352.5}).wait(1).to({graphics:mask_graphics_397,x:311.3,y:351.7}).wait(1).to({graphics:mask_graphics_398,x:312.2,y:351}).wait(1).to({graphics:mask_graphics_399,x:313.2,y:350.3}).wait(1).to({graphics:mask_graphics_400,x:314.1,y:349.5}).wait(1).to({graphics:mask_graphics_401,x:315.1,y:348.8}).wait(1).to({graphics:mask_graphics_402,x:316,y:348.1}).wait(1).to({graphics:mask_graphics_403,x:317,y:347.3}).wait(1).to({graphics:mask_graphics_404,x:317.9,y:346.6}).wait(1).to({graphics:mask_graphics_405,x:318.8,y:345.9}).wait(1).to({graphics:mask_graphics_406,x:319.8,y:345.1}).wait(1).to({graphics:mask_graphics_407,x:320.7,y:344.4}).wait(1).to({graphics:mask_graphics_408,x:321.7,y:343.7}).wait(1).to({graphics:mask_graphics_409,x:322.6,y:342.9}).wait(1).to({graphics:mask_graphics_410,x:323.6,y:342.2}).wait(1).to({graphics:mask_graphics_411,x:324.5,y:341.5}).wait(1).to({graphics:mask_graphics_412,x:325.5,y:340.7}).wait(1).to({graphics:mask_graphics_413,x:326.4,y:340}).wait(1).to({graphics:mask_graphics_414,x:327.4,y:339.3}).wait(1).to({graphics:mask_graphics_415,x:328.3,y:338.5}).wait(1).to({graphics:mask_graphics_416,x:329.3,y:337.8}).wait(1).to({graphics:mask_graphics_417,x:330.2,y:337.1}).wait(1).to({graphics:mask_graphics_418,x:331.2,y:336.3}).wait(1).to({graphics:mask_graphics_419,x:332.1,y:335.6}).wait(1).to({graphics:mask_graphics_420,x:333.1,y:334.9}).wait(1).to({graphics:mask_graphics_421,x:334,y:334.1}).wait(1).to({graphics:mask_graphics_422,x:335,y:333.4}).wait(1).to({graphics:mask_graphics_423,x:335.9,y:332.7}).wait(1).to({graphics:mask_graphics_424,x:336.8,y:331.9}).wait(1).to({graphics:mask_graphics_425,x:337.8,y:331.2}).wait(1).to({graphics:mask_graphics_426,x:338.7,y:330.5}).wait(1).to({graphics:mask_graphics_427,x:339.7,y:329.7}).wait(1).to({graphics:mask_graphics_428,x:340.6,y:329}).wait(1).to({graphics:mask_graphics_429,x:341.6,y:328.3}).wait(1).to({graphics:mask_graphics_430,x:342.5,y:327.5}).wait(1).to({graphics:mask_graphics_431,x:343.5,y:326.8}).wait(1).to({graphics:mask_graphics_432,x:344.4,y:326.1}).wait(1).to({graphics:mask_graphics_433,x:345.4,y:325.3}).wait(1).to({graphics:mask_graphics_434,x:346.3,y:324.6}).wait(1).to({graphics:mask_graphics_435,x:347.3,y:323.9}).wait(1).to({graphics:mask_graphics_436,x:348.2,y:323.1}).wait(1).to({graphics:mask_graphics_437,x:349.2,y:322.4}).wait(1).to({graphics:mask_graphics_438,x:350.1,y:321.7}).wait(1).to({graphics:mask_graphics_439,x:351.1,y:320.9}).wait(1).to({graphics:mask_graphics_440,x:352,y:320.2}).wait(1).to({graphics:mask_graphics_441,x:353,y:319.5}).wait(1).to({graphics:mask_graphics_442,x:353.9,y:318.7}).wait(1).to({graphics:mask_graphics_443,x:354.8,y:318}).wait(1).to({graphics:mask_graphics_444,x:355.8,y:317.2}).wait(1).to({graphics:mask_graphics_445,x:356.7,y:316.5}).wait(1).to({graphics:mask_graphics_446,x:357.7,y:315.8}).wait(1).to({graphics:mask_graphics_447,x:358.6,y:315}).wait(1).to({graphics:mask_graphics_448,x:359.6,y:314.3}).wait(1).to({graphics:mask_graphics_449,x:360.5,y:313.6}).wait(1).to({graphics:mask_graphics_450,x:361.5,y:312.9}).wait(1).to({graphics:mask_graphics_451,x:362.4,y:312.1}).wait(1).to({graphics:mask_graphics_452,x:363.4,y:311.4}).wait(1).to({graphics:mask_graphics_453,x:364.3,y:310.7}).wait(1).to({graphics:mask_graphics_454,x:365.3,y:309.9}).wait(1).to({graphics:mask_graphics_455,x:366.2,y:309.2}).wait(1).to({graphics:mask_graphics_456,x:367.1,y:308.5}).wait(1).to({graphics:mask_graphics_457,x:368.1,y:307.7}).wait(1).to({graphics:mask_graphics_458,x:369,y:307}).wait(1).to({graphics:mask_graphics_459,x:370,y:306.3}).wait(1).to({graphics:mask_graphics_460,x:370.9,y:305.5}).wait(1).to({graphics:mask_graphics_461,x:232.8,y:191.7}).wait(1).to({graphics:mask_graphics_462,x:375.2,y:302.2}).wait(1).to({graphics:mask_graphics_463,x:378.5,y:299.7}).wait(1).to({graphics:mask_graphics_464,x:242.7,y:191.7}).wait(80));

	// Layer 11
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(20,1,1).p("AzWBhQH4oFD0idQD0idBUAuQBUAviYFmQiXFmhkEVQhkEVCyA1QCzA1DZhoQDZhoEZjPQEajQHSoZ");
	this.shape_1.setTransform(318.1,273.5,1.157,1.065);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(385).to({_off:false},0).wait(159));

	// Layer 8 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_355 = new cjs.Graphics().p("AhyNvQBhnWGPkJQGRkIHXBfQHNBdEIGDI+PT/Qj7mKBdnNg");
	var mask_1_graphics_356 = new cjs.Graphics().p("AhtOHQBPnaGGkXQGHkXHZBPQHRBMEVF4I9eVGQkJmBBMnQg");
	var mask_1_graphics_357 = new cjs.Graphics().p("AhmOgQA+ncF7kmQF8klHcA9QHTA8EkFtI8sWKQkXl2A7nTg");
	var mask_1_graphics_358 = new cjs.Graphics().p("AhcO5QAsneFwk0QFxkyHeArQHVArEwFiI72XMQkllrArnVg");
	var mask_1_graphics_359 = new cjs.Graphics().p("AhRPTQAanfFllBQFllAHgAaQHWAZE9FXI6+YNQkylhAZnWg");
	var mask_1_graphics_360 = new cjs.Graphics().p("AhEPuQAJngFZlOQFZlNHgAIQHXAIFKFLI6EZLQk/lVAHnWg");
	var mask_1_graphics_361 = new cjs.Graphics().p("Ag0QJQgJngFMlbQFNlZHggJQHXgJFWE+I5IaHQlLlJgKnWg");
	var mask_1_graphics_362 = new cjs.Graphics().p("AgiQlQgbngE/lmQFAlmHggbQHWgaFhExI4JbCQlXk9gbnVg");
	var mask_1_graphics_363 = new cjs.Graphics().p("AgORBQgtnfEylxQEzlxHegtQHUgsFtElI3Jb5QljkwgrnUg");
	var mask_1_graphics_364 = new cjs.Graphics().p("AAGRdQg8ncEjl9QEll8Hcg+QHTg9F3EXI2GcuQlukig+nTg");
	var mask_1_graphics_365 = new cjs.Graphics().p("AAeR6QhOnaEWmHQEWmGHahQQHQhOGBEKI1BdgQl5kVhPnQg");
	var mask_1_graphics_366 = new cjs.Graphics().p("AA4SYQhgnXEImRQEImRHWhhQHNhfGKD8Iz7eQQmDkHhfnMg");
	var mask_1_graphics_367 = new cjs.Graphics().p("ABUS1QhxnSD4mbQD5maHThyQHJhwGTDtIyze+QmMj5hwnJg");
	var mask_1_graphics_368 = new cjs.Graphics().p("AByTTQiCnODomkQDqmiHOiEQHFiAGcDdIxpfpQmWjpiAnFg");
	var mask_1_graphics_369 = new cjs.Graphics().p("ACRTxQiTnJDamsQDamrHJiUQG/iRGkDOMgQeAgRQmdjaiSnAg");
	var mask_1_graphics_370 = new cjs.Graphics().p("ACyUQQiknEDKmzQDLmzHDilQG6ihGrC+MgPSAg3QmljLiim6g");
	var mask_1_graphics_371 = new cjs.Graphics().p("ADWUuQi1m9C6m7QC6m5G9i2QG0ixGxCvMgODAhYQmsi7iym0g");
	var mask_1_graphics_372 = new cjs.Graphics().p("AD7VNQjGm2CqnBQCqnCG2jEQGtjCG4CfMgM1Ah4QmzirjBmtg");
	var mask_1_graphics_373 = new cjs.Graphics().p("AEhVsQjVmvCZnHQCZnHGujVQGmjRG9COMgLjAiWQm5icjSmlg");
	var mask_1_graphics_374 = new cjs.Graphics().p("AFJWLQjlmnCJnNQCInMGmjkQGejhHCB+MgKTAivQm+iLjhmdg");
	var mask_1_graphics_375 = new cjs.Graphics().p("AFzWpQj0mdB3nSQB4nRGdj0QGVjvHHBtMgJBAjGQnDh7jwmVg");
	var mask_1_graphics_376 = new cjs.Graphics().p("AGeXIQkDmUBmnWQBmnVGUkDQGMj+HLBdMgHuAjZQnHhqj/mMg");
	var mask_1_graphics_377 = new cjs.Graphics().p("AHLXnQkSmLBVnZQBVnZGKkRQGCkNHOBMMgGaAjqQnLhZkNmCg");
	var mask_1_graphics_378 = new cjs.Graphics().p("AH5YFQkgmABDncQBEncGAkfQF4kbHQA7MgFGAj3QnOhIkbl4g");
	var mask_1_graphics_379 = new cjs.Graphics().p("AIpYkQkvl2AyneQAyneF1ktQFukoHSApMgDxAkCQnRg3koltg");
	var mask_1_graphics_380 = new cjs.Graphics().p("AJaZCQk8lqAgngQAgnfFqk7QFik2HTAZMgCcAkJQnSgmk1lig");
	var mask_1_graphics_381 = new cjs.Graphics().p("AKMZgQlJlfAOngQAPngFelIQFXlDHTAIMgBHAkNQnTgVlClWg");
	var mask_1_graphics_382 = new cjs.Graphics().p("AK3Z9QlVlSgDngQgDnhFRlVQFLlOHUgKMAAOAkOQnUgElPlKg");
	var mask_1_graphics_383 = new cjs.Graphics().p("ALBaaQlilFgUngQgVngFFliQE+laHTgbMABjAkNIglAAQm8AAlNkxg");
	var mask_1_graphics_384 = new cjs.Graphics().p("ALMa2Qluk4gmnfQgmnfE3ltQExlmHSgsMAC5AkHQgrADgpAAQmfAAlGkVg");
	var mask_1_graphics_385 = new cjs.Graphics().p("ALYbQQl5kqg4ndQg4ndEql5QEklwHQg9MAENAj+QhBAHg/AAQmFAAk9j7g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(355).to({graphics:mask_1_graphics_355,x:197.9,y:173.4}).wait(1).to({graphics:mask_1_graphics_356,x:196.6,y:175.2}).wait(1).to({graphics:mask_1_graphics_357,x:195.4,y:176.9}).wait(1).to({graphics:mask_1_graphics_358,x:194,y:178.5}).wait(1).to({graphics:mask_1_graphics_359,x:192.6,y:180.2}).wait(1).to({graphics:mask_1_graphics_360,x:191.2,y:181.7}).wait(1).to({graphics:mask_1_graphics_361,x:189.7,y:183.2}).wait(1).to({graphics:mask_1_graphics_362,x:188.1,y:184.7}).wait(1).to({graphics:mask_1_graphics_363,x:186.5,y:186.1}).wait(1).to({graphics:mask_1_graphics_364,x:184.8,y:187.4}).wait(1).to({graphics:mask_1_graphics_365,x:183.1,y:188.7}).wait(1).to({graphics:mask_1_graphics_366,x:181.3,y:189.9}).wait(1).to({graphics:mask_1_graphics_367,x:179.5,y:191.1}).wait(1).to({graphics:mask_1_graphics_368,x:177.7,y:192.1}).wait(1).to({graphics:mask_1_graphics_369,x:175.8,y:193.1}).wait(1).to({graphics:mask_1_graphics_370,x:173.9,y:194.1}).wait(1).to({graphics:mask_1_graphics_371,x:171.9,y:194.9}).wait(1).to({graphics:mask_1_graphics_372,x:170,y:195.7}).wait(1).to({graphics:mask_1_graphics_373,x:167.9,y:196.5}).wait(1).to({graphics:mask_1_graphics_374,x:165.9,y:197.1}).wait(1).to({graphics:mask_1_graphics_375,x:163.9,y:197.7}).wait(1).to({graphics:mask_1_graphics_376,x:161.8,y:198.2}).wait(1).to({graphics:mask_1_graphics_377,x:159.7,y:198.6}).wait(1).to({graphics:mask_1_graphics_378,x:157.6,y:198.9}).wait(1).to({graphics:mask_1_graphics_379,x:155.5,y:199.2}).wait(1).to({graphics:mask_1_graphics_380,x:153.3,y:199.4}).wait(1).to({graphics:mask_1_graphics_381,x:151.2,y:199.5}).wait(1).to({graphics:mask_1_graphics_382,x:149.8,y:199.5}).wait(1).to({graphics:mask_1_graphics_383,x:151.9,y:199.5}).wait(1).to({graphics:mask_1_graphics_384,x:154.1,y:199.5}).wait(1).to({graphics:mask_1_graphics_385,x:156.2,y:199.5}).wait(159));

	// Layer 9
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(20,1,1).p("Ay8BhQH4oFD0idQD0idBUAuQBUAviYFmQiXFmhkEVQhkEVCyA1QCzA1DYhoQDahoEajPQEZjQGena");
	this.shape_2.setTransform(315.1,273.5,1.157,1.065);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(355).to({_off:false},0).wait(189));

	// Layer 7 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_313 = new cjs.Graphics().p("ASoP+ICjk9IE8CjIijE9g");
	var mask_2_graphics_314 = new cjs.Graphics().p("Aj0BYICulSIE7CjIiuFRg");
	var mask_2_graphics_315 = new cjs.Graphics().p("Aj5BjIC4lnIE7CiIi4Fng");
	var mask_2_graphics_316 = new cjs.Graphics().p("Aj/BtIDEl8IE7CjIjEF8g");
	var mask_2_graphics_317 = new cjs.Graphics().p("AkEB4IDOmRIE7CiIjOGRg");
	var mask_2_graphics_318 = new cjs.Graphics().p("AkKCCIDammIE7CjIjaGlg");
	var mask_2_graphics_319 = new cjs.Graphics().p("AkPCMIDkm6IE7CjIjkG6g");
	var mask_2_graphics_320 = new cjs.Graphics().p("AkUCXIDunPIE7CiIjuHPg");
	var mask_2_graphics_321 = new cjs.Graphics().p("AkaChID6nkIE7CjIj6Hkg");
	var mask_2_graphics_322 = new cjs.Graphics().p("AkfCsIEEn5IE7CiIkEH5g");
	var mask_2_graphics_323 = new cjs.Graphics().p("AklC2IEQoOIE7CjIkQIOg");
	var mask_2_graphics_324 = new cjs.Graphics().p("AkqDBIEaojIE7CiIkaIjg");
	var mask_2_graphics_325 = new cjs.Graphics().p("AkvDLIEko4IE7CjIkkI4g");
	var mask_2_graphics_326 = new cjs.Graphics().p("Ak1DWIEwpNIE7CiIkwJNg");
	var mask_2_graphics_327 = new cjs.Graphics().p("Ak6DgIE6piIE7CjIk6Jig");
	var mask_2_graphics_328 = new cjs.Graphics().p("AlADrIFFp3IE8CiIlFJ3g");
	var mask_2_graphics_329 = new cjs.Graphics().p("AlFD1IFPqMIE8CjIlPKLg");
	var mask_2_graphics_330 = new cjs.Graphics().p("AlKEAIFZqhIE8CiIlZKhg");
	var mask_2_graphics_331 = new cjs.Graphics().p("AlQEKIFlq2IE8CjIllK2g");
	var mask_2_graphics_332 = new cjs.Graphics().p("AlVEUIFvrKIE8CiIlvLLg");
	var mask_2_graphics_333 = new cjs.Graphics().p("AlbEfIF6rgIE8CjIl6Lfg");
	var mask_2_graphics_334 = new cjs.Graphics().p("AlgEpIGFr0IE8CjImFL0g");
	var mask_2_graphics_335 = new cjs.Graphics().p("AllE0IGPsJIE8CiImPMJg");
	var mask_2_graphics_336 = new cjs.Graphics().p("AlrE+IGbseIE8CjImbMeg");
	var mask_2_graphics_337 = new cjs.Graphics().p("AlwFJIGlszIE8CiImlMzg");
	var mask_2_graphics_338 = new cjs.Graphics().p("Al1FTIGvtIIE8CjImvNIg");
	var mask_2_graphics_339 = new cjs.Graphics().p("Al7FeIG7tdIE8CiIm7Ndg");
	var mask_2_graphics_340 = new cjs.Graphics().p("AmAFoIHFtyIE8CjInFNxg");
	var mask_2_graphics_341 = new cjs.Graphics().p("AmGFzIHRuHIE8CjInROGg");
	var mask_2_graphics_342 = new cjs.Graphics().p("AmLF9IHbucIE8CjInbOcg");
	var mask_2_graphics_343 = new cjs.Graphics().p("AmQGIIHluxIE8CjInlOwg");
	var mask_2_graphics_344 = new cjs.Graphics().p("AmWGSIHxvFIE8CiInxPFg");
	var mask_2_graphics_345 = new cjs.Graphics().p("AmbGcIH7vaIE8CjIn7Pag");
	var mask_2_graphics_346 = new cjs.Graphics().p("AmhGnIIHvwIE8CjIoHPvg");
	var mask_2_graphics_347 = new cjs.Graphics().p("AmmGyIIRwFIE8CjIoRQEg");
	var mask_2_graphics_348 = new cjs.Graphics().p("AmrG8IIbwaIE8CjIobQag");
	var mask_2_graphics_349 = new cjs.Graphics().p("AmxHHIInwvIE8CjIonQug");
	var mask_2_graphics_350 = new cjs.Graphics().p("Am2HRIIxxDIE8CiIoxRDg");
	var mask_2_graphics_351 = new cjs.Graphics().p("Am7HbII8xYIE8CjIo9RYg");
	var mask_2_graphics_352 = new cjs.Graphics().p("AnBHmIJHxtIE8CiIpHRtg");
	var mask_2_graphics_353 = new cjs.Graphics().p("AnGHwIJRyCIE8CjIpRSCg");
	var mask_2_graphics_354 = new cjs.Graphics().p("AnMH7IJdyXIE8CiIpcSXg");
	var mask_2_graphics_355 = new cjs.Graphics().p("ALjW2IJoytIE8CjIpoStg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(313).to({graphics:mask_2_graphics_313,x:167.1,y:118.5}).wait(1).to({graphics:mask_2_graphics_314,x:309.7,y:214}).wait(1).to({graphics:mask_2_graphics_315,x:309.2,y:215.1}).wait(1).to({graphics:mask_2_graphics_316,x:308.6,y:216.1}).wait(1).to({graphics:mask_2_graphics_317,x:308.1,y:217.2}).wait(1).to({graphics:mask_2_graphics_318,x:307.5,y:218.2}).wait(1).to({graphics:mask_2_graphics_319,x:307,y:219.2}).wait(1).to({graphics:mask_2_graphics_320,x:306.5,y:220.3}).wait(1).to({graphics:mask_2_graphics_321,x:305.9,y:221.3}).wait(1).to({graphics:mask_2_graphics_322,x:305.4,y:222.4}).wait(1).to({graphics:mask_2_graphics_323,x:304.8,y:223.4}).wait(1).to({graphics:mask_2_graphics_324,x:304.3,y:224.5}).wait(1).to({graphics:mask_2_graphics_325,x:303.8,y:225.5}).wait(1).to({graphics:mask_2_graphics_326,x:303.2,y:226.6}).wait(1).to({graphics:mask_2_graphics_327,x:302.7,y:227.6}).wait(1).to({graphics:mask_2_graphics_328,x:302.1,y:228.7}).wait(1).to({graphics:mask_2_graphics_329,x:301.6,y:229.7}).wait(1).to({graphics:mask_2_graphics_330,x:301.1,y:230.8}).wait(1).to({graphics:mask_2_graphics_331,x:300.5,y:231.8}).wait(1).to({graphics:mask_2_graphics_332,x:300,y:232.9}).wait(1).to({graphics:mask_2_graphics_333,x:299.5,y:233.9}).wait(1).to({graphics:mask_2_graphics_334,x:298.9,y:235}).wait(1).to({graphics:mask_2_graphics_335,x:298.3,y:236}).wait(1).to({graphics:mask_2_graphics_336,x:297.8,y:237.1}).wait(1).to({graphics:mask_2_graphics_337,x:297.3,y:238.1}).wait(1).to({graphics:mask_2_graphics_338,x:296.7,y:239.2}).wait(1).to({graphics:mask_2_graphics_339,x:296.2,y:240.2}).wait(1).to({graphics:mask_2_graphics_340,x:295.7,y:241.3}).wait(1).to({graphics:mask_2_graphics_341,x:295.1,y:242.3}).wait(1).to({graphics:mask_2_graphics_342,x:294.6,y:243.4}).wait(1).to({graphics:mask_2_graphics_343,x:294,y:244.4}).wait(1).to({graphics:mask_2_graphics_344,x:293.5,y:245.5}).wait(1).to({graphics:mask_2_graphics_345,x:293,y:246.5}).wait(1).to({graphics:mask_2_graphics_346,x:292.4,y:247.6}).wait(1).to({graphics:mask_2_graphics_347,x:291.9,y:248.6}).wait(1).to({graphics:mask_2_graphics_348,x:291.3,y:249.7}).wait(1).to({graphics:mask_2_graphics_349,x:290.8,y:250.7}).wait(1).to({graphics:mask_2_graphics_350,x:290.3,y:251.7}).wait(1).to({graphics:mask_2_graphics_351,x:289.7,y:252.8}).wait(1).to({graphics:mask_2_graphics_352,x:289.2,y:253.8}).wait(1).to({graphics:mask_2_graphics_353,x:288.6,y:254.9}).wait(1).to({graphics:mask_2_graphics_354,x:288.1,y:255.9}).wait(1).to({graphics:mask_2_graphics_355,x:167.1,y:162.5}).wait(189));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(20,1,1).p("Ay8BhQH4oFD0idQD0idBUAuQBUAviYFmQiXFmhkEVQhkEVCyA1QCzA1DYhoQDahoEajPQEZjQGena");
	this.shape_3.setTransform(315.1,273.5,1.157,1.065);
	this.shape_3._off = true;

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(313).to({_off:false},0).wait(231));

	// Layer 19 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_298 = new cjs.Graphics().p("AlOJxQBInbGCkcQGDkdHbBIQHRBHEbFzI9KVgQkQl9BGnRg");
	var mask_3_graphics_299 = new cjs.Graphics().p("AlVJTQBfnXGOkKQGQkLHWBeQHOBcEJGAI+HUIQj+mJBbnNg");
	var mask_3_graphics_300 = new cjs.Graphics().p("AlYI2QB0nSGaj3QGcj4HSBzQHJBxD3GMI/BSuQjsmUBxnJg");
	var mask_3_graphics_301 = new cjs.Graphics().p("AlYIaQCJnMGmjkQGmjlHMCJQHECGDkGXI/2RRQjZmfCGnDg");
	var mask_3_graphics_302 = new cjs.Graphics().p("AlUIAQCenGGwjQQGwjRHGCeQG8CbDSGhMggnAPxQjGmoCbm8g");
	var mask_3_graphics_303 = new cjs.Graphics().p("AlNHnQCzm+G5i8QG5i9G+CzQG1CuC+GrMghUAOQQixmxCvm0g");
	var mask_3_graphics_304 = new cjs.Graphics().p("AlDHPQDIm1HBioQHCioG0DHQGtDDCqGzMgh7AMsQiem4DDmsg");
	var mask_3_graphics_305 = new cjs.Graphics().p("Ak1G4QDbmrHJiSQHJiUGrDcQGjDVCWG7MgifALHQiJm/DXmjg");
	var mask_3_graphics_306 = new cjs.Graphics().p("AkkGjQDvmgHPh9QHPh+GhDuQGYDpCBHCMgi9AJgQh0nFDqmZg");
	var mask_3_graphics_307 = new cjs.Graphics().p("AkQGQQECmUHUhpQHVhoGVEAQGOD9BsHHMgjXAH4QhfnKD8mNg");
	var mask_3_graphics_308 = new cjs.Graphics().p("Aj4F+QEUmIHZhSQHZhTGJETQGBEPBXHLMgjrAGPQhKnOEOmBg");
	var mask_3_graphics_309 = new cjs.Graphics().p("AjdFuQEll7Hdg9QHcg8F8ElQF0EgBCHPMgj7AElQg1nREgl0g");
	var mask_3_graphics_310 = new cjs.Graphics().p("Ai/FfQE3lsHfgnQHegnFuE2QFnExAsHSMgkHAC6QgenSEwlng");
	var mask_3_graphics_311 = new cjs.Graphics().p("AieFSQFHleHhgQQHggRFfFHQFYFBAXHTMgkNABQQgKnUFBlYg");
	var mask_3_graphics_312 = new cjs.Graphics().p("AnWRVQAMnTFRlJQFXlOHgAGQHgAFFQFXQFJFRABHTg");
	var mask_3_graphics_313 = new cjs.Graphics().p("AnUQGQAinTFfk5QFmk+HgAcQHfAcFAFmQE5FfgVHTg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(298).to({graphics:mask_3_graphics_298,x:173.4,y:147.1}).wait(1).to({graphics:mask_3_graphics_299,x:174.9,y:144.9}).wait(1).to({graphics:mask_3_graphics_300,x:176.4,y:142.7}).wait(1).to({graphics:mask_3_graphics_301,x:177.7,y:140.4}).wait(1).to({graphics:mask_3_graphics_302,x:179,y:138}).wait(1).to({graphics:mask_3_graphics_303,x:180.1,y:135.6}).wait(1).to({graphics:mask_3_graphics_304,x:181.1,y:133.1}).wait(1).to({graphics:mask_3_graphics_305,x:182,y:130.6}).wait(1).to({graphics:mask_3_graphics_306,x:182.7,y:128.1}).wait(1).to({graphics:mask_3_graphics_307,x:183.4,y:125.5}).wait(1).to({graphics:mask_3_graphics_308,x:183.9,y:122.9}).wait(1).to({graphics:mask_3_graphics_309,x:184.3,y:120.3}).wait(1).to({graphics:mask_3_graphics_310,x:184.6,y:117.6}).wait(1).to({graphics:mask_3_graphics_311,x:184.8,y:115}).wait(1).to({graphics:mask_3_graphics_312,x:184.8,y:113.7}).wait(1).to({graphics:mask_3_graphics_313,x:184.7,y:116.4}).wait(231));

	// Layer 17
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(20,1,1).p("Ap/GoQJHonEainQEaioBiAyQApAVgIBS");
	this.shape_4.setTransform(238.7,241.5);
	this.shape_4._off = true;

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(298).to({_off:false},0).wait(246));

	// Layer 10 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_238 = new cjs.Graphics().p("AB1a9Ql4kahKnOMAj2gFMQA9HPkaF6QkgGAnbBFQhcANhZAAQlxAAk2jng");
	var mask_4_graphics_239 = new cjs.Graphics().p("ABbapQlwklg8nPMAj+gEMQAvHSkjFxQkrF4ndA3QhLAJhIAAQmFAAk+j7g");
	var mask_4_graphics_240 = new cjs.Graphics().p("ABCaUQlnkvgwnRMAkGgDKQAhHTkuFoQk1FwneAqQg5AFg4AAQmaAAlEkQg");
	var mask_4_graphics_241 = new cjs.Graphics().p("AAqZ/Qlfk5ginSMAkKgCJQAVHTk5FgQk/FnngAcQgnACgmAAQmvAAlKkkg");
	var mask_4_graphics_242 = new cjs.Graphics().p("AASZoQlWlCgVnTMAkNgBHQAIHTlCFXQlKFengAOIgpABQnGAAlPk7g");
	var mask_4_graphics_243 = new cjs.Graphics().p("AgEZRQlNlMgInTMAkNgAFQgFHTlMFOQlTFUngABIgDAAQnfAAlSlSg");
	var mask_4_graphics_244 = new cjs.Graphics().p("AMQeiQnggMlKlcQlElWAFnTMAkNAA8QgTHTlVFEQlPE/nLAAIgigBg");
	var mask_4_graphics_245 = new cjs.Graphics().p("ALwehQnfgalAlmQk6leATnTMAkJAB+QggHSleE6QlKEpmzAAQgkAAgkgCg");
	var mask_4_graphics_246 = new cjs.Graphics().p("ALReeQnegnk2lvQkwlnAgnSMAkFAC/QgtHRlnExQlFETmdAAQg1AAg2gFg");
	var mask_4_graphics_247 = new cjs.Graphics().p("AKzebQneg1kql3QkmlwAtnRMAj/AEBQg7HPlvEmQk+D/mJAAQhFAAhIgIg");
	var mask_4_graphics_248 = new cjs.Graphics().p("AKVeWQnchCkgl/Qkbl4A6nQMAj3AFCQhIHOl3EbQk4Drl0AAQhWAAhZgNg");
	var mask_4_graphics_249 = new cjs.Graphics().p("AJ4eRQnahQkVmHQkQmABHnOMAjsAGDQhUHLl/ERQkwDYliAAQhmAAhpgSg");
	var mask_4_graphics_250 = new cjs.Graphics().p("AJbeLQnXhekKmPQkFmHBUnLMAjgAHDQhhHJmHEFQkoDGlPAAQh1AAh6gYg");
	var mask_4_graphics_251 = new cjs.Graphics().p("AI/eEQnUhrj/mWQj6mPBhnJMAjTAIEQhvHGmND6QkfC0k9AAQiFAAiKgfg");
	var mask_4_graphics_252 = new cjs.Graphics().p("AIkd8QnRh4jzmeQjvmVBunGMAjDAJDQh7HDmVDvQkVCjksAAQiUAAiZgng");
	var mask_4_graphics_253 = new cjs.Graphics().p("AIJdzQnNiFjnmkQjkmcB7nDMAiyAKCQiIG/mcDkQkLCTkbAAQijAAiogwg");
	var mask_4_graphics_254 = new cjs.Graphics().p("AHvdpQnJiSjbmqQjYmiCIm/MAieALAQiVG7mhDYQkBCEkLAAQiyAAi2g6g");
	var mask_4_graphics_255 = new cjs.Graphics().p("AHWdeQnFifjPmwQjMmoCUm7MAiKAL/QihG3moDMQj1B1j7AAQjBAAjEhFg");
	var mask_4_graphics_256 = new cjs.Graphics().p("AG9dTQm/isjDm2QjAmtChm3MAhyAM9QitGxmtDAQjqBojsAAQjPAAjShQg");
	var mask_4_graphics_257 = new cjs.Graphics().p("AGldHQm6i5i3m7QizmyCtmyMAhaAN5Qi5GtmzCzQjdBbjcAAQjfAAjfhcg");
	var mask_4_graphics_258 = new cjs.Graphics().p("AGOc6Qm0jFirnAQinm4C6mtMAhAAO2QjGGnm3CnQjQBPjOAAQjuAAjrhpg");
	var mask_4_graphics_259 = new cjs.Graphics().p("AF4csQmvjRidnFQibm8DGmnMAgkAPwQjSGim7CaQjDBEi/AAQj9AAj3h3g");
	var mask_4_graphics_260 = new cjs.Graphics().p("AFjcdQmpjdiQnJQiOnADRmiMAgGAQsQjdGbnACOQi0A5iwAAQkNAAkCiGg");
	var mask_4_graphics_261 = new cjs.Graphics().p("AFPcOQmjjpiDnNQiCnEDdmcIfoRlQjpGVnECBQimAwihAAQkdAAkMiVg");
	var mask_4_graphics_262 = new cjs.Graphics().p("AE3b6Qmaj3h0nRQhynJDrmTIfASpQj3GNnHByQiVAliOAAQkyAAkYipg");
	var mask_4_graphics_263 = new cjs.Graphics().p("AEhblQmSkFhknVQhinMD5mLIeWTtQkEGEnMBiQiBAbh9AAQlGAAkji9g");
	var mask_4_graphics_264 = new cjs.Graphics().p("AELbPQmIkShUnYQhSnPEGmDIdqUvQkRF6nPBTQhuAThqAAQlcAAkujTg");
	var mask_4_graphics_265 = new cjs.Graphics().p("AD4a5Ql/khhEnaQhCnSESl5Ic8VvQkeFxnRBCQhaANhWAAQlzAAk3jpg");
	var mask_4_graphics_266 = new cjs.Graphics().p("ADlagQl0ktg0ncQgynUEflvIcLWtQkqFnnTAzQhFAHhDAAQmLAAlAkCg");
	var mask_4_graphics_267 = new cjs.Graphics().p("ADUaHQlqk5gjneQginVErlmIbZXqQk3FdnUAiQgwAEguAAQmlAAlHkbg");
	var mask_4_graphics_268 = new cjs.Graphics().p("ADFZtQlglGgSnfQgSnVE3lcIakYlQlDFSnVATIgyABQnAAAlNk1g");
	var mask_4_graphics_269 = new cjs.Graphics().p("AC2ZSQlTlSgDnfQgCnWFDlQIZtZeQlOFGnVADIgFAAQndAAlTlQg");
	var mask_4_graphics_270 = new cjs.Graphics().p("APSeiQnggPlJldQlIleAPnfQAOnWFOlEIY0aVQlKEum9AAIgnAAg");
	var mask_4_graphics_271 = new cjs.Graphics().p("AO6egQnfgfk9lpQk8loAfneQAenVFZk5IX5bKQlDEUmiAAQgpAAgpgCg");
	var mask_4_graphics_272 = new cjs.Graphics().p("AOiecQnegvkwlzQkvlzAvndQAunUFjksIW+b9Qk8D8mIAAQg+AAg/gHg");
	var mask_4_graphics_273 = new cjs.Graphics().p("AOLeYQnchAkjl9Qkjl9A/nbQA+nSFukgIV/cuQkzDklvAAQhSAAhUgLg");
	var mask_4_graphics_274 = new cjs.Graphics().p("AN0eSQnZhQkWmHQkWmHBQnYQBNnQF4kTIU/ddQkpDNlYAAQhlAAhpgRg");
	var mask_4_graphics_275 = new cjs.Graphics().p("ANeeLQnWhgkJmRQkImQBgnVQBdnNGBkGIT+eKQkfC4lCAAQh4AAh8gZg");
	var mask_4_graphics_276 = new cjs.Graphics().p("ANIeCQnShwj7mZQj6mZBwnSQBsnJGLj5IS7e1QkUCjktAAQiKAAiQgig");
	var mask_4_graphics_277 = new cjs.Graphics().p("AM0d4QnPiAjsmhQjsmhB+nOQB9nGGTjrIR3fdQkHCRkaAAQicAAihgtg");
	var mask_4_graphics_278 = new cjs.Graphics().p("AMgdtQnKiQjfmpQjdmpCOnJQCNnBGajdMAQyAgDQj7B+kFAAQiuAAizg4g");
	var mask_4_graphics_279 = new cjs.Graphics().p("AMMdhQnEigjQmwQjPmwCenFQCcm6GijRMAPqAgnQjsBtjzAAQjAAAjEhEg");
	var mask_4_graphics_280 = new cjs.Graphics().p("AL5dTQm+ivjBm3QjAm3Ctm/QCrm1GpjBMAOiAhHQjdBejgAAQjTAAjUhTg");
	var mask_4_graphics_281 = new cjs.Graphics().p("ALndEQm4i9iym+Qiwm+C8m4QC6mvGvizMANZAhmQjOBPjOAAQjkAAjkhig");
	var mask_4_graphics_282 = new cjs.Graphics().p("ALWc0QmxjMijnEQihnDDLmyQDJmoG1ikMAMPAiCQi+BBi8AAQj3AAjyhyg");
	var mask_4_graphics_283 = new cjs.Graphics().p("ALGcjQmrjciSnIQiSnJDamrQDXmhG6iVMALEAicQitA1iqAAQkKAAj/iDg");
	var mask_4_graphics_284 = new cjs.Graphics().p("AK2cQQmjjriCnNQiDnODqmiQDmmaG/iFMAJ2Ai0QibApiXAAQkfAAkMiWg");
	var mask_4_graphics_285 = new cjs.Graphics().p("AKmb8Qmaj6hynSQhxnSD4maQD0mQHEh2MAImAjJQiIAfiEAAQkzAAkaiqg");
	var mask_4_graphics_286 = new cjs.Graphics().p("AKYbmQmRkHhhnWQhinWEImRQECmIHIhlMAHWAjbQh1AWhxAAQlJAAkljAg");
	var mask_4_graphics_287 = new cjs.Graphics().p("AKLbQQmIkWhQnZQhRnZEVmIQEQl+HMhVMAGFAjqQhhAPhdAAQlgAAkvjWg");
	var mask_4_graphics_288 = new cjs.Graphics().p("AJ+a4Ql9kkhAnbQhAncEjl9QEel1HOhFMAE0Aj4QhMAJhJAAQl4AAk5jvg");
	var mask_4_graphics_289 = new cjs.Graphics().p("AJyafQlykxgvneQgvndExlzQEqlqHQg1MADiAkBQg1AFg0AAQmSAAlCkIg");
	var mask_4_graphics_290 = new cjs.Graphics().p("AJoaFQlok+genfQgdnfE9loQE3lgHSgjMACQAkHIg+ACQmsAAlJkig");
	var mask_4_graphics_291 = new cjs.Graphics().p("AJeZqQlclLgNngQgMngFKlcQFDlUHTgUMAA+AkMIgQAAQnJAAlQk9g");
	var mask_4_graphics_292 = new cjs.Graphics().p("AJLZNQlQlWAEnhQAFngFWlPQFQlKHTgCMgAVAkMQnTgLlKlPg");
	var mask_4_graphics_293 = new cjs.Graphics().p("AIaYwQlDliAVngQAVnfFilDQFbk+HTAOMgBmAkLQnTgck+lbg");
	var mask_4_graphics_294 = new cjs.Graphics().p("AH3YbQk7lrAinfQAinfFrk6QFjk0HTAaMgCkAkIQnSgok0ljg");
	var mask_4_graphics_295 = new cjs.Graphics().p("AHTYFQkwlzAuneQAvneFzkwQFrkrHSAnMgDhAkDQnRg1krlrg");
	var mask_4_graphics_296 = new cjs.Graphics().p("AGxXvQknl7A7ncQA8ndF7kmQFzkhHRAzMgEfAj8QnPhBkhlzg");
	var mask_4_graphics_297 = new cjs.Graphics().p("AGPXaQkdmDBInbQBInbGDkcQF7kXHPA/MgFcAj0QnNhNkXl6g");
	var mask_4_graphics_298 = new cjs.Graphics().p("AFuXEQkSmKBUnZQBVnZGKkSQGCkNHOBMMgGZAjqQnLhZkNmCg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(238).to({graphics:mask_4_graphics_238,x:197.2,y:195.6}).wait(1).to({graphics:mask_4_graphics_239,x:197.2,y:195.6}).wait(1).to({graphics:mask_4_graphics_240,x:197.2,y:195.6}).wait(1).to({graphics:mask_4_graphics_241,x:197.2,y:195.5}).wait(1).to({graphics:mask_4_graphics_242,x:197.2,y:195.5}).wait(1).to({graphics:mask_4_graphics_243,x:197.2,y:195.5}).wait(1).to({graphics:mask_4_graphics_244,x:197.2,y:195.5}).wait(1).to({graphics:mask_4_graphics_245,x:197.1,y:195.5}).wait(1).to({graphics:mask_4_graphics_246,x:197,y:195.5}).wait(1).to({graphics:mask_4_graphics_247,x:196.9,y:195.5}).wait(1).to({graphics:mask_4_graphics_248,x:196.7,y:195.5}).wait(1).to({graphics:mask_4_graphics_249,x:196.4,y:195.5}).wait(1).to({graphics:mask_4_graphics_250,x:196.1,y:195.5}).wait(1).to({graphics:mask_4_graphics_251,x:195.8,y:195.5}).wait(1).to({graphics:mask_4_graphics_252,x:195.4,y:195.5}).wait(1).to({graphics:mask_4_graphics_253,x:195,y:195.5}).wait(1).to({graphics:mask_4_graphics_254,x:194.5,y:195.5}).wait(1).to({graphics:mask_4_graphics_255,x:194,y:195.5}).wait(1).to({graphics:mask_4_graphics_256,x:193.4,y:195.5}).wait(1).to({graphics:mask_4_graphics_257,x:192.8,y:195.5}).wait(1).to({graphics:mask_4_graphics_258,x:192.2,y:195.5}).wait(1).to({graphics:mask_4_graphics_259,x:191.5,y:195.5}).wait(1).to({graphics:mask_4_graphics_260,x:190.7,y:195.5}).wait(1).to({graphics:mask_4_graphics_261,x:190,y:195.5}).wait(1).to({graphics:mask_4_graphics_262,x:189,y:195.5}).wait(1).to({graphics:mask_4_graphics_263,x:188,y:195.4}).wait(1).to({graphics:mask_4_graphics_264,x:186.9,y:195.4}).wait(1).to({graphics:mask_4_graphics_265,x:185.7,y:195.4}).wait(1).to({graphics:mask_4_graphics_266,x:184.5,y:195.4}).wait(1).to({graphics:mask_4_graphics_267,x:183.3,y:195.4}).wait(1).to({graphics:mask_4_graphics_268,x:182,y:195.4}).wait(1).to({graphics:mask_4_graphics_269,x:180.6,y:195.4}).wait(1).to({graphics:mask_4_graphics_270,x:179.2,y:195.4}).wait(1).to({graphics:mask_4_graphics_271,x:177.7,y:195.4}).wait(1).to({graphics:mask_4_graphics_272,x:176.3,y:195.5}).wait(1).to({graphics:mask_4_graphics_273,x:174.7,y:195.5}).wait(1).to({graphics:mask_4_graphics_274,x:173.1,y:195.5}).wait(1).to({graphics:mask_4_graphics_275,x:171.5,y:195.6}).wait(1).to({graphics:mask_4_graphics_276,x:169.9,y:195.6}).wait(1).to({graphics:mask_4_graphics_277,x:168.2,y:195.7}).wait(1).to({graphics:mask_4_graphics_278,x:166.5,y:195.7}).wait(1).to({graphics:mask_4_graphics_279,x:164.7,y:195.7}).wait(1).to({graphics:mask_4_graphics_280,x:162.9,y:195.8}).wait(1).to({graphics:mask_4_graphics_281,x:161.1,y:195.8}).wait(1).to({graphics:mask_4_graphics_282,x:159.3,y:195.8}).wait(1).to({graphics:mask_4_graphics_283,x:157.4,y:195.8}).wait(1).to({graphics:mask_4_graphics_284,x:155.5,y:195.8}).wait(1).to({graphics:mask_4_graphics_285,x:153.5,y:195.8}).wait(1).to({graphics:mask_4_graphics_286,x:151.6,y:195.8}).wait(1).to({graphics:mask_4_graphics_287,x:149.6,y:195.8}).wait(1).to({graphics:mask_4_graphics_288,x:147.6,y:195.9}).wait(1).to({graphics:mask_4_graphics_289,x:145.5,y:195.9}).wait(1).to({graphics:mask_4_graphics_290,x:143.5,y:195.9}).wait(1).to({graphics:mask_4_graphics_291,x:141.5,y:195.9}).wait(1).to({graphics:mask_4_graphics_292,x:140.5,y:195.9}).wait(1).to({graphics:mask_4_graphics_293,x:142.5,y:195.9}).wait(1).to({graphics:mask_4_graphics_294,x:144.1,y:195.8}).wait(1).to({graphics:mask_4_graphics_295,x:145.6,y:195.7}).wait(1).to({graphics:mask_4_graphics_296,x:147.2,y:195.5}).wait(1).to({graphics:mask_4_graphics_297,x:148.7,y:195.3}).wait(1).to({graphics:mask_4_graphics_298,x:150.3,y:195.1}).wait(246));

	// Layer 6
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(20,1,1).p("Ap/GoQJHonEainQEaioBiAyQApAVgIBS");
	this.shape_5.setTransform(238.7,241.5);
	this.shape_5._off = true;

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(238).to({_off:false},0).wait(306));

	// Layer 18
	this.instance_2 = new lib.ar1("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(99.7,127.9,1,1,0,118.3,-61.7,-0.7,0.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(535));

	// Layer 5 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_107 = new cjs.Graphics().p("AlxSQIAAnWIXvAAIAAHWg");
	var mask_5_graphics_108 = new cjs.Graphics().p("Ar3DwIAAnfIXvAAIAAHfg");
	var mask_5_graphics_109 = new cjs.Graphics().p("Ar3D2IAAnrIXvAAIAAHrg");
	var mask_5_graphics_110 = new cjs.Graphics().p("Ar3D8IAAn3IXvAAIAAH3g");
	var mask_5_graphics_111 = new cjs.Graphics().p("Ar3EBIAAoBIXvAAIAAIBg");
	var mask_5_graphics_112 = new cjs.Graphics().p("Ar3EHIAAoNIXvAAIAAINg");
	var mask_5_graphics_113 = new cjs.Graphics().p("Ar3EMIAAoXIXvAAIAAIXg");
	var mask_5_graphics_114 = new cjs.Graphics().p("Ar3ESIAAojIXvAAIAAIjg");
	var mask_5_graphics_115 = new cjs.Graphics().p("Ar3EYIAAovIXvAAIAAIvg");
	var mask_5_graphics_116 = new cjs.Graphics().p("Ar3EdIAAo5IXvAAIAAI5g");
	var mask_5_graphics_117 = new cjs.Graphics().p("Ar3EjIAApFIXvAAIAAJFg");
	var mask_5_graphics_118 = new cjs.Graphics().p("Ar3EoIAApQIXvAAIAAJQg");
	var mask_5_graphics_119 = new cjs.Graphics().p("Ar3EuIAApbIXvAAIAAJbg");
	var mask_5_graphics_120 = new cjs.Graphics().p("Ar3E0IAApnIXvAAIAAJng");
	var mask_5_graphics_121 = new cjs.Graphics().p("Ar3E5IAApxIXvAAIAAJxg");
	var mask_5_graphics_122 = new cjs.Graphics().p("Ar3E/IAAp9IXvAAIAAJ9g");
	var mask_5_graphics_123 = new cjs.Graphics().p("Ar3FEIAAqHIXvAAIAAKHg");
	var mask_5_graphics_124 = new cjs.Graphics().p("Ar3FKIAAqTIXvAAIAAKTg");
	var mask_5_graphics_125 = new cjs.Graphics().p("Ar3FQIAAqfIXvAAIAAKfg");
	var mask_5_graphics_126 = new cjs.Graphics().p("Ar3FVIAAqpIXvAAIAAKpg");
	var mask_5_graphics_127 = new cjs.Graphics().p("Ar3FbIAAq1IXvAAIAAK1g");
	var mask_5_graphics_128 = new cjs.Graphics().p("Ar3FgIAAq/IXvAAIAAK/g");
	var mask_5_graphics_129 = new cjs.Graphics().p("Ar3FmIAArLIXvAAIAALLg");
	var mask_5_graphics_130 = new cjs.Graphics().p("Ar3FrIAArVIXvAAIAALVg");
	var mask_5_graphics_131 = new cjs.Graphics().p("Ar3FxIAArhIXvAAIAALhg");
	var mask_5_graphics_132 = new cjs.Graphics().p("Ar3F3IAArtIXvAAIAALtg");
	var mask_5_graphics_133 = new cjs.Graphics().p("Ar3F8IAAr3IXvAAIAAL3g");
	var mask_5_graphics_134 = new cjs.Graphics().p("Ar3GCIAAsDIXvAAIAAMDg");
	var mask_5_graphics_135 = new cjs.Graphics().p("Ar3GHIAAsNIXvAAIAAMNg");
	var mask_5_graphics_136 = new cjs.Graphics().p("Ar3GNIAAsZIXvAAIAAMZg");
	var mask_5_graphics_137 = new cjs.Graphics().p("Ar3GTIAAslIXvAAIAAMlg");
	var mask_5_graphics_138 = new cjs.Graphics().p("Ar3GYIAAsvIXvAAIAAMvg");
	var mask_5_graphics_139 = new cjs.Graphics().p("Ar3GeIAAs7IXvAAIAAM7g");
	var mask_5_graphics_140 = new cjs.Graphics().p("Ar3GjIAAtFIXvAAIAANFg");
	var mask_5_graphics_141 = new cjs.Graphics().p("Ar3GpIAAtRIXvAAIAANRg");
	var mask_5_graphics_142 = new cjs.Graphics().p("Ar3GvIAAtdIXvAAIAANdg");
	var mask_5_graphics_143 = new cjs.Graphics().p("Ar3G0IAAtnIXvAAIAANng");
	var mask_5_graphics_144 = new cjs.Graphics().p("Ar3G6IAAtyIXvAAIAANyg");
	var mask_5_graphics_145 = new cjs.Graphics().p("Ar3G/IAAt9IXvAAIAAN9g");
	var mask_5_graphics_146 = new cjs.Graphics().p("Ar3HFIAAuJIXvAAIAAOJg");
	var mask_5_graphics_147 = new cjs.Graphics().p("Ar3HLIAAuUIXvAAIAAOUg");
	var mask_5_graphics_148 = new cjs.Graphics().p("Ar3HQIAAufIXvAAIAAOfg");
	var mask_5_graphics_149 = new cjs.Graphics().p("Ar3HVIAAupIXvAAIAAOpg");
	var mask_5_graphics_150 = new cjs.Graphics().p("Ar3HbIAAu1IXvAAIAAO1g");
	var mask_5_graphics_151 = new cjs.Graphics().p("Ar3HgIAAvAIXvAAIAAPAg");
	var mask_5_graphics_152 = new cjs.Graphics().p("Ar3HmIAAvLIXvAAIAAPLg");
	var mask_5_graphics_153 = new cjs.Graphics().p("Ar3HsIAAvXIXvAAIAAPXg");
	var mask_5_graphics_154 = new cjs.Graphics().p("Ar3HxIAAvhIXvAAIAAPhg");
	var mask_5_graphics_155 = new cjs.Graphics().p("Ar3H3IAAvtIXvAAIAAPtg");
	var mask_5_graphics_156 = new cjs.Graphics().p("Ar3H8IAAv4IXvAAIAAP4g");
	var mask_5_graphics_157 = new cjs.Graphics().p("Ar3ICIAAwDIXvAAIAAQDg");
	var mask_5_graphics_158 = new cjs.Graphics().p("Ar3IIIAAwPIXvAAIAAQPg");
	var mask_5_graphics_159 = new cjs.Graphics().p("Ar3INIAAwZIXvAAIAAQZg");
	var mask_5_graphics_160 = new cjs.Graphics().p("Ar3ITIAAwlIXvAAIAAQlg");
	var mask_5_graphics_161 = new cjs.Graphics().p("Ar3IYIAAwwIXvAAIAAQwg");
	var mask_5_graphics_162 = new cjs.Graphics().p("Ar3IeIAAw7IXvAAIAAQ7g");
	var mask_5_graphics_163 = new cjs.Graphics().p("Ar3IkIAAxHIXvAAIAARHg");
	var mask_5_graphics_164 = new cjs.Graphics().p("Ar3IpIAAxRIXvAAIAARRg");
	var mask_5_graphics_165 = new cjs.Graphics().p("Ar3IvIAAxdIXvAAIAARdg");
	var mask_5_graphics_166 = new cjs.Graphics().p("Ar3I0IAAxnIXvAAIAARng");
	var mask_5_graphics_167 = new cjs.Graphics().p("Ar3I6IAAxzIXvAAIAARzg");
	var mask_5_graphics_168 = new cjs.Graphics().p("Ar3JAIAAx/IXvAAIAAR/g");
	var mask_5_graphics_169 = new cjs.Graphics().p("Ar3JFIAAyJIXvAAIAASJg");
	var mask_5_graphics_170 = new cjs.Graphics().p("Ar3JLIAAyVIXvAAIAASVg");
	var mask_5_graphics_171 = new cjs.Graphics().p("Ar3JQIAAyfIXvAAIAASfg");
	var mask_5_graphics_172 = new cjs.Graphics().p("Ar3JWIAAyrIXvAAIAASrg");
	var mask_5_graphics_173 = new cjs.Graphics().p("Ar3JbIAAy2IXvAAIAAS2g");
	var mask_5_graphics_174 = new cjs.Graphics().p("Ar3JhIAAzBIXvAAIAATBg");
	var mask_5_graphics_175 = new cjs.Graphics().p("Ar3JnIAAzNIXvAAIAATNg");
	var mask_5_graphics_176 = new cjs.Graphics().p("Ar3JsIAAzXIXvAAIAATXg");
	var mask_5_graphics_177 = new cjs.Graphics().p("Ar3JyIAAzjIXvAAIAATjg");
	var mask_5_graphics_178 = new cjs.Graphics().p("Ar3J3IAAzuIXvAAIAATug");
	var mask_5_graphics_179 = new cjs.Graphics().p("Ar3J9IAAz5IXvAAIAAT5g");
	var mask_5_graphics_180 = new cjs.Graphics().p("Ar3KDIAA0EIXvAAIAAUEg");
	var mask_5_graphics_181 = new cjs.Graphics().p("Ar3KIIAA0PIXvAAIAAUPg");
	var mask_5_graphics_182 = new cjs.Graphics().p("Ar3KOIAA0bIXvAAIAAUbg");
	var mask_5_graphics_183 = new cjs.Graphics().p("Ar3KUIAA0nIXvAAIAAUng");
	var mask_5_graphics_184 = new cjs.Graphics().p("Ar3KZIAA0xIXvAAIAAUxg");
	var mask_5_graphics_185 = new cjs.Graphics().p("AlxbIIAA09IXvAAIAAU9g");
	var mask_5_graphics_186 = new cjs.Graphics().p("Ar3KwIAA1fIXvAAIAAVfg");
	var mask_5_graphics_187 = new cjs.Graphics().p("Ar3LCIAA2DIXvAAIAAWDg");
	var mask_5_graphics_188 = new cjs.Graphics().p("Ar3LUIAA2nIXvAAIAAWng");
	var mask_5_graphics_189 = new cjs.Graphics().p("Ar3LmIAA3KIXvAAIAAXKg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(107).to({graphics:mask_5_graphics_107,x:115,y:116.8}).wait(1).to({graphics:mask_5_graphics_108,x:154,y:211}).wait(1).to({graphics:mask_5_graphics_109,x:154,y:211.9}).wait(1).to({graphics:mask_5_graphics_110,x:154,y:212.7}).wait(1).to({graphics:mask_5_graphics_111,x:154,y:213.7}).wait(1).to({graphics:mask_5_graphics_112,x:154,y:214.6}).wait(1).to({graphics:mask_5_graphics_113,x:154,y:215.5}).wait(1).to({graphics:mask_5_graphics_114,x:154,y:216.4}).wait(1).to({graphics:mask_5_graphics_115,x:154,y:217.2}).wait(1).to({graphics:mask_5_graphics_116,x:154,y:218.1}).wait(1).to({graphics:mask_5_graphics_117,x:154,y:219}).wait(1).to({graphics:mask_5_graphics_118,x:154,y:220}).wait(1).to({graphics:mask_5_graphics_119,x:154,y:220.9}).wait(1).to({graphics:mask_5_graphics_120,x:154,y:221.8}).wait(1).to({graphics:mask_5_graphics_121,x:154,y:222.6}).wait(1).to({graphics:mask_5_graphics_122,x:154,y:223.5}).wait(1).to({graphics:mask_5_graphics_123,x:154,y:224.4}).wait(1).to({graphics:mask_5_graphics_124,x:154,y:225.3}).wait(1).to({graphics:mask_5_graphics_125,x:154,y:226.3}).wait(1).to({graphics:mask_5_graphics_126,x:154,y:227.1}).wait(1).to({graphics:mask_5_graphics_127,x:154,y:228}).wait(1).to({graphics:mask_5_graphics_128,x:154,y:228.9}).wait(1).to({graphics:mask_5_graphics_129,x:154,y:229.8}).wait(1).to({graphics:mask_5_graphics_130,x:154,y:230.7}).wait(1).to({graphics:mask_5_graphics_131,x:154,y:231.6}).wait(1).to({graphics:mask_5_graphics_132,x:154,y:232.5}).wait(1).to({graphics:mask_5_graphics_133,x:154,y:233.4}).wait(1).to({graphics:mask_5_graphics_134,x:154,y:234.3}).wait(1).to({graphics:mask_5_graphics_135,x:154,y:235.2}).wait(1).to({graphics:mask_5_graphics_136,x:154,y:236.1}).wait(1).to({graphics:mask_5_graphics_137,x:154,y:237}).wait(1).to({graphics:mask_5_graphics_138,x:154,y:237.9}).wait(1).to({graphics:mask_5_graphics_139,x:154,y:238.8}).wait(1).to({graphics:mask_5_graphics_140,x:154,y:239.7}).wait(1).to({graphics:mask_5_graphics_141,x:154,y:240.6}).wait(1).to({graphics:mask_5_graphics_142,x:154,y:241.5}).wait(1).to({graphics:mask_5_graphics_143,x:154,y:242.4}).wait(1).to({graphics:mask_5_graphics_144,x:154,y:243.3}).wait(1).to({graphics:mask_5_graphics_145,x:154,y:244.2}).wait(1).to({graphics:mask_5_graphics_146,x:154,y:245.1}).wait(1).to({graphics:mask_5_graphics_147,x:154,y:246}).wait(1).to({graphics:mask_5_graphics_148,x:154,y:246.9}).wait(1).to({graphics:mask_5_graphics_149,x:154,y:247.8}).wait(1).to({graphics:mask_5_graphics_150,x:154,y:248.7}).wait(1).to({graphics:mask_5_graphics_151,x:154,y:249.6}).wait(1).to({graphics:mask_5_graphics_152,x:154,y:250.5}).wait(1).to({graphics:mask_5_graphics_153,x:154,y:251.4}).wait(1).to({graphics:mask_5_graphics_154,x:154,y:252.3}).wait(1).to({graphics:mask_5_graphics_155,x:154,y:253.2}).wait(1).to({graphics:mask_5_graphics_156,x:154,y:254.1}).wait(1).to({graphics:mask_5_graphics_157,x:154,y:255}).wait(1).to({graphics:mask_5_graphics_158,x:154,y:255.9}).wait(1).to({graphics:mask_5_graphics_159,x:154,y:256.8}).wait(1).to({graphics:mask_5_graphics_160,x:154,y:257.7}).wait(1).to({graphics:mask_5_graphics_161,x:154,y:258.6}).wait(1).to({graphics:mask_5_graphics_162,x:154,y:259.5}).wait(1).to({graphics:mask_5_graphics_163,x:154,y:260.4}).wait(1).to({graphics:mask_5_graphics_164,x:154,y:261.3}).wait(1).to({graphics:mask_5_graphics_165,x:154,y:262.2}).wait(1).to({graphics:mask_5_graphics_166,x:154,y:263.1}).wait(1).to({graphics:mask_5_graphics_167,x:154,y:264}).wait(1).to({graphics:mask_5_graphics_168,x:154,y:264.9}).wait(1).to({graphics:mask_5_graphics_169,x:154,y:265.8}).wait(1).to({graphics:mask_5_graphics_170,x:154,y:266.7}).wait(1).to({graphics:mask_5_graphics_171,x:154,y:267.6}).wait(1).to({graphics:mask_5_graphics_172,x:154,y:268.5}).wait(1).to({graphics:mask_5_graphics_173,x:154,y:269.4}).wait(1).to({graphics:mask_5_graphics_174,x:154,y:270.3}).wait(1).to({graphics:mask_5_graphics_175,x:154,y:271.2}).wait(1).to({graphics:mask_5_graphics_176,x:154,y:272.1}).wait(1).to({graphics:mask_5_graphics_177,x:154,y:273}).wait(1).to({graphics:mask_5_graphics_178,x:154,y:273.9}).wait(1).to({graphics:mask_5_graphics_179,x:154,y:274.8}).wait(1).to({graphics:mask_5_graphics_180,x:154,y:275.7}).wait(1).to({graphics:mask_5_graphics_181,x:154,y:276.6}).wait(1).to({graphics:mask_5_graphics_182,x:154,y:277.5}).wait(1).to({graphics:mask_5_graphics_183,x:154,y:278.4}).wait(1).to({graphics:mask_5_graphics_184,x:154,y:279.3}).wait(1).to({graphics:mask_5_graphics_185,x:115,y:173.6}).wait(1).to({graphics:mask_5_graphics_186,x:154,y:282}).wait(1).to({graphics:mask_5_graphics_187,x:154,y:283.8}).wait(1).to({graphics:mask_5_graphics_188,x:154,y:285.6}).wait(1).to({graphics:mask_5_graphics_189,x:154,y:287.4}).wait(355));

	// Layer 4
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(20,1,1).p("ApJieQElkUGJi9QGKi+BEBsQBDBrh+DQQh+DPm1Og");
	this.shape_6.setTransform(148.6,274.7);
	this.shape_6._off = true;

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(107).to({_off:false},0).wait(437));

	// Layer 16 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_86 = new cjs.Graphics().p("AuIHrQCunAG3jCQG3jCG/CtQG3CqDEGoMghIAOqQi3muCpm3g");
	var mask_6_graphics_87 = new cjs.Graphics().p("AuDHeQC5m8G7i2QG7i4G8C4QGyCzC5GuMgheAN2QismzC0myg");
	var mask_6_graphics_88 = new cjs.Graphics().p("At9HRQDDm3HAisQHAisG2DDQGuC+CvGxMghzANCQiim3C/mug");
	var mask_6_graphics_89 = new cjs.Graphics().p("At3HFQDOmyHFihQHDihGyDNQGpDJCkG1MgiHAMNQiXm7DJmpg");
	var mask_6_graphics_90 = new cjs.Graphics().p("AtvG5QDYmtHIiVQHIiXGsDYQGlDTCZG6MgiaALWQiMm+DUmkg");
	var mask_6_graphics_91 = new cjs.Graphics().p("AtnGuQDjmoHMiKQHLiLGnDiQGfDdCOG+MgiqAKgQiBnCDdmeg");
	var mask_6_graphics_92 = new cjs.Graphics().p("AtdGjQDtmiHPh/QHOiAGhDtQGaDnCDHBMgi6AJpQh2nEDomZg");
	var mask_6_graphics_93 = new cjs.Graphics().p("AtTGYQD3mbHSh0QHRh1GcD2QGUDyB4HEMgjJAIzQhrnHDymUg");
	var mask_6_graphics_94 = new cjs.Graphics().p("AtIGOQEBmVHVhpQHUhpGVEAQGOD8BtHGMgjWAH8QhfnKD7mNg");
	var mask_6_graphics_95 = new cjs.Graphics().p("As8GEQELmOHYheQHWhdGPEKQGHEFBiHJMgjiAHEQhUnMEFmHg");
	var mask_6_graphics_96 = new cjs.Graphics().p("AsvF7QEVmIHahSQHYhSGIEUQGBEPBXHLMgjsAGMQhJnNEOmBg");
	var mask_6_graphics_97 = new cjs.Graphics().p("AshFyQEfmBHbhGQHahGGCEdQF6EYBLHNMgj1AFUQg+nPEYl6g");
	var mask_6_graphics_98 = new cjs.Graphics().p("AsSFqQEol6Hdg7QHcg6F6EmQFzEiBAHPMgj9AEcQgynREhlzg");
	var mask_6_graphics_99 = new cjs.Graphics().p("AsCFiQExlyHdgvQHegvFzEvQFsErA1HQMgkDADkQgnnSEqlsg");
	var mask_6_graphics_100 = new cjs.Graphics().p("ArxFaQE6lqHegjQHfgkFrE5QFlEzApHSMgkIACrQgbnTEzllg");
	var mask_6_graphics_101 = new cjs.Graphics().p("ArgFTQFDliHfgYQHggYFjFCQFdE8AeHSMgkLAByQgRnTE8ldg");
	var mask_6_graphics_102 = new cjs.Graphics().p("ArOFNQFMlbHfgMQHggLFcFJQFVFFASHTMgkNAA5QgFnTFElVg");
	var mask_6_graphics_103 = new cjs.Graphics().p("Aq6FHQFTlTHgAAQHgAAFUFTQFNFMAHHUMgkOAAAQAGnTFNlNg");
	var mask_6_graphics_104 = new cjs.Graphics().p("AwNQ9QASnTFVlFQFclKHfAMQHgAMFLFaQFFFVgFHTg");
	var mask_6_graphics_105 = new cjs.Graphics().p("AwMQTQAenTFck8QFklCHfAYQHgAXFCFjQE9FcgQHUg");
	var mask_6_graphics_106 = new cjs.Graphics().p("AwKPoQApnRFkk0QFsk5HeAjQHfAkE6FqQEzFkgbHTg");
	var mask_6_graphics_107 = new cjs.Graphics().p("AwHO+QA0nQFskrQFzkwHdAvQHeAvExFyQErFsgnHSg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(86).to({graphics:mask_6_graphics_86,x:123,y:136}).wait(1).to({graphics:mask_6_graphics_87,x:123.5,y:134.7}).wait(1).to({graphics:mask_6_graphics_88,x:124.1,y:133.4}).wait(1).to({graphics:mask_6_graphics_89,x:124.6,y:132.1}).wait(1).to({graphics:mask_6_graphics_90,x:125.1,y:130.7}).wait(1).to({graphics:mask_6_graphics_91,x:125.5,y:129.4}).wait(1).to({graphics:mask_6_graphics_92,x:125.9,y:128}).wait(1).to({graphics:mask_6_graphics_93,x:126.3,y:126.7}).wait(1).to({graphics:mask_6_graphics_94,x:126.6,y:125.3}).wait(1).to({graphics:mask_6_graphics_95,x:126.9,y:123.9}).wait(1).to({graphics:mask_6_graphics_96,x:127.2,y:122.5}).wait(1).to({graphics:mask_6_graphics_97,x:127.4,y:121.1}).wait(1).to({graphics:mask_6_graphics_98,x:127.6,y:119.8}).wait(1).to({graphics:mask_6_graphics_99,x:127.8,y:118.4}).wait(1).to({graphics:mask_6_graphics_100,x:127.9,y:117}).wait(1).to({graphics:mask_6_graphics_101,x:128,y:115.5}).wait(1).to({graphics:mask_6_graphics_102,x:128,y:114.1}).wait(1).to({graphics:mask_6_graphics_103,x:128.1,y:112.7}).wait(1).to({graphics:mask_6_graphics_104,x:128.1,y:114.1}).wait(1).to({graphics:mask_6_graphics_105,x:128,y:115.6}).wait(1).to({graphics:mask_6_graphics_106,x:128,y:117}).wait(1).to({graphics:mask_6_graphics_107,x:128,y:118.5}).wait(437));

	// Layer 15
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(20,1,1).p("ApJieQElkUGJi9QGKi+BEBsQBDBrh+DQQh+DPm1Og");
	this.shape_7.setTransform(148.6,274.7);
	this.shape_7._off = true;

	var maskedShapeInstanceList = [this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(86).to({_off:false},0).wait(458));

	// Layer 3 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_9 = new cjs.Graphics().p("AkSdyQmljoiFnNQiDnEDcmdIfuRfQjoGWnECDQioAxijAAQkbAAkLiTg");
	var mask_7_graphics_10 = new cjs.Graphics().p("AkhdmQmgjxh7nQQh5nHDkmYIfWSLQjxGRnGB5QidAqiYAAQknAAkTifg");
	var mask_7_graphics_11 = new cjs.Graphics().p("AkwdZQmaj6hynSQhvnKDumTIe7S2Qj5GMnJBwQiRAjiMAAQk0AAkbisg");
	var mask_7_graphics_12 = new cjs.Graphics().p("Ak+dMQmVkDhnnVQhlnLD1mOIeiTgQkCGHnLBlQiGAeiAAAQlBAAkii5g");
	var mask_7_graphics_13 = new cjs.Graphics().p("AlMc+QmPkLhdnXQhbnOD+mIIeGUKQkKGBnNBcQh6AYh0AAQlPAAkpjHg");
	var mask_7_graphics_14 = new cjs.Graphics().p("AlZcwQmJkUhTnYQhSnQEHmDIdqU0QkSF7nPBRQhtAThpAAQldAAkvjUg");
	var mask_7_graphics_15 = new cjs.Graphics().p("AllciQmEkdhInaQhInREPl9IdNVcQkaF1nRBIQhhAOhdAAQlrAAk0jig");
	var mask_7_graphics_16 = new cjs.Graphics().p("AlycTQl9klg+ncQg9nSEXl3IcuWEQkiFvnSA9QhUALhQAAQl6AAk7jxg");
	var mask_7_graphics_17 = new cjs.Graphics().p("Al9cEQl3ktg0ndQgznUEflxIcQWsQkqFonUAzQhGAIhEAAQmKAAk/kAg");
	var mask_7_graphics_18 = new cjs.Graphics().p("AmIb0Qlwk1gqneQgpnVEnlrIbwXTQkyFinUApQg5AFg4AAQmZAAlEkQg");
	var mask_7_graphics_19 = new cjs.Graphics().p("AmTbkQlpk9gfnfQgfnWEvlkIbPX5Qk6FbnVAfQgrADgqAAQmqAAlJkgg");
	var mask_7_graphics_20 = new cjs.Graphics().p("AmcbTQljlEgVngQgVnWE3ldIatYdQlAFUnWAWIg6ABQm7AAlMkxg");
	var mask_7_graphics_21 = new cjs.Graphics().p("AmmbCQlblMgLngQgLnWE+lXIaMZCQlIFOnWALIgeAAQnMAAlRlCg");
	var mask_7_graphics_22 = new cjs.Graphics().p("AmvaxQlUlUAAngQgBnWFGlQIZoZmQlPFGnWABIgBAAQnfAAlUlTg");
	var mask_7_graphics_23 = new cjs.Graphics().p("EAF1AgEQnfgKlNlbQlMlbAJngQAKnWFNlJIZEaJQlME2nFAAIgbAAg");
	var mask_7_graphics_24 = new cjs.Graphics().p("EAFmAgDQnfgVlFlhQlGliAVngQATnWFUlBIYgarQlIElm0AAIg2gBg");
	var mask_7_graphics_25 = new cjs.Graphics().p("EAFWAgCQnegfk9lpQk+loAfngQAenVFak6IX7bMQlEEVmiAAQgpAAgqgCg");
	var mask_7_graphics_26 = new cjs.Graphics().p("EAFHAgAQndgqk2lvQk2lvApneQAonVFhkzIXWbtQk/EFmTAAQg1AAg4gEg");
	var mask_7_graphics_27 = new cjs.Graphics().p("AE4f9Qncgzkul2Qktl2AzndQAynUFokrIWucNQk6D2mCAAQhDAAhFgIg");
	var mask_7_graphics_28 = new cjs.Graphics().p("AEqf6Qncg+kll8Qkml8A+ncQA8nTFukiIWHcrQk0DnlzAAQhPAAhSgLg");
	var mask_7_graphics_29 = new cjs.Graphics().p("AEbf3QnahIkdmDQkdmDBInaQBGnSF0kaIVfdKQkuDYlkAAQhcAAhfgOg");
	var mask_7_graphics_30 = new cjs.Graphics().p("AENfzQnYhTkVmIQkVmJBSnZQBQnQF7kSIU2dnQkoDKlWAAQhnAAhsgSg");
	var mask_7_graphics_31 = new cjs.Graphics().p("AD/fuQnWhckNmPQkMmPBcnXQBbnNGAkKIUNeDQkhC9lIAAQh0AAh4gYg");
	var mask_7_graphics_32 = new cjs.Graphics().p("ADxfpQnUhnkEmUQkDmUBmnVQBknMGGkBITkeeQkbCwk6AAQh/AAiFgdg");
	var mask_7_graphics_33 = new cjs.Graphics().p("ADkfjQnShwj7maQj7maBxnTQBunJGLj5IS5e5QkTCjktAAQiLAAiQgjg");
	var mask_7_graphics_34 = new cjs.Graphics().p("ADWfdQnPh7jymfQjymfB7nQQB4nHGQjwISPfSQkMCXkgAAQiXAAicgpg");
	var mask_7_graphics_35 = new cjs.Graphics().p("ADKfXQnNiFjpmkQjpmlCFnNQCCnEGVjoIRjfrQkECLkUAAQihAAingvg");
	var mask_7_graphics_36 = new cjs.Graphics().p("AC9fPQnKiOjfmpQjgmpCOnLQCMnBGajfMAQ3AgDQj8CAkHAAQitAAiyg4g");
	var mask_7_graphics_37 = new cjs.Graphics().p("ACwfIQnGiZjWmuQjXmtCYnIQCVm+GfjWMAQLAgaQjzB1j7AAQi5AAi9g/g");
	var mask_7_graphics_38 = new cjs.Graphics().p("ACkfAQnDijjNmyQjNmyCinEQCfm7GjjNMAPeAgwQjqBqjvAAQjEAAjIhHg");
	var mask_7_graphics_39 = new cjs.Graphics().p("ACZe3QnAisjEm3QjDm2CrnBQCpm3GnjEMAOwAhFQjgBgjkAAQjPAAjRhQg");
	var mask_7_graphics_40 = new cjs.Graphics().p("ACNeuQm8i2i6m6Qi6m7C1m9QCymzGri7MAODAhYQjXBXjYAAQjbAAjbhZg");
	var mask_7_graphics_41 = new cjs.Graphics().p("ACCelQm4jAiwm+Qixm/C/m5QC7mvGviyMANVAhsQjOBNjMAAQjmAAjlhig");
	var mask_7_graphics_42 = new cjs.Graphics().p("AB3ebQmzjJinnDQinnCDIm0QDEmrGzipMAMmAh9QjDBGjBAAQjyAAjuhtg");
	var mask_7_graphics_43 = new cjs.Graphics().p("ABseQQmvjSidnGQidnGDSmwQDNmmG3ifMAL2AiOQi5A9i1AAQj+AAj3h4g");
	var mask_7_graphics_44 = new cjs.Graphics().p("ABieFQmqjbiUnKQiTnJDbmrQDXmiG5iVMALIAidQivA2iqAAQkKAAj/iDg");
	var mask_7_graphics_45 = new cjs.Graphics().p("ABYd6QmljliKnMQiJnMDkmnQDfmdG9iMMAKYAitQikAuieAAQkWAAkIiOg");
	var mask_7_graphics_46 = new cjs.Graphics().p("ABOduQmgjuh/nPQiAnPDtmhQDpmYHAiDMAJnAi6QiYAoiTAAQkjAAkQiag");
	var mask_7_graphics_47 = new cjs.Graphics().p("ABFdhQmbj2h2nSQh1nSD2mcQDxmTHDh5MAI3AjIQiNAhiHAAQkwAAkXing");
	var mask_7_graphics_48 = new cjs.Graphics().p("AA8dVQmWkAhrnUQhrnUD/mXQD6mNHFhvMAIGAjSQiBAch8AAQk9AAkeizg");
	var mask_7_graphics_49 = new cjs.Graphics().p("AAzdIQmQkJhhnWQhhnWEImRQECmJHHhlMAHWAjeQh1AWhwAAQlKAAkmjAg");
	var mask_7_graphics_50 = new cjs.Graphics().p("AArc6QmKkRhXnYQhXnZEQmLQEKmCHKhcMAGlAjnQhpAShkAAQlYAAksjOg");
	var mask_7_graphics_51 = new cjs.Graphics().p("AAjcsQmEkZhNnaQhNnbEZmFQESl9HMhRMAFzAjwQhbANhZAAQlmAAkyjcg");
	var mask_7_graphics_52 = new cjs.Graphics().p("AAccdQl/khhCncQhDncEhl/QEbl2HOhIMAFBAj3QhPAKhMAAQl1AAk3jrg");
	var mask_7_graphics_53 = new cjs.Graphics().p("AAUcOQl3kpg5ndQg4ndEpl5QEjlxHPg9MAEQAj9QhCAHhAAAQmEAAk9j6g");
	var mask_7_graphics_54 = new cjs.Graphics().p("AAOb/QlykyguneQguneExlyQErlqHQg0MADeAkDQg0AEgzAAQmTAAlCkJg");
	var mask_7_graphics_55 = new cjs.Graphics().p("AAHbvQlrk6gjneQgknfE5lsQEylkHSgpMACsAkHQgnACgmAAQmjAAlHkZg");
	var mask_7_graphics_56 = new cjs.Graphics().p("AABbfQlklCgZnfQgangFBllQE6lcHSggMAB7AkKIgyABQm0AAlLkpg");
	var mask_7_graphics_57 = new cjs.Graphics().p("AgEbOQlelJgPngQgPngFJleQFBlWHTgVMABIAkMIgWAAQnFAAlOk6g");
	var mask_7_graphics_58 = new cjs.Graphics().p("AgJa9QlXlQgFnhQgEngFQlWQFIlPHUgMMAAWAkOQnTgDlPlJg");
	var mask_7_graphics_59 = new cjs.Graphics().p("AgcasQlQlYAGngQAGnhFXlPQFQlIHTgBMgAbAkNQnUgMlHlQg");
	var mask_7_graphics_60 = new cjs.Graphics().p("AgyafQlKldAOngQANngFclKQFVlCHUAGMgBAAkMQnTgUlDlVg");
	var mask_7_graphics_61 = new cjs.Graphics().p("AhHaSQlEliAUngQAVnfFilFQFak9HTAOMgBkAkLQnTgbk9lbg");
	var mask_7_graphics_62 = new cjs.Graphics().p("AhcaGQk/lnAcngQAcnfFmk/QFgk4HTAVMgCIAkJQnSgik4lfg");
	var mask_7_graphics_63 = new cjs.Graphics().p("AhxZ5Qk5lsAknfQAjnfFrk5QFkkyHTAcMgCsAkHQnSgqkylkg");
	var mask_7_graphics_64 = new cjs.Graphics().p("AiGZsQkzlxArneQArneFwk0QFpksHSAjMgDQAkEQnRgxktlpg");
	var mask_7_graphics_65 = new cjs.Graphics().p("AiaZgQkul2AzneQAzndF0kuQFuknHRAqMgD0AkBQnQg4knltg");
	var mask_7_graphics_66 = new cjs.Graphics().p("AiuZTQkol7A6ncQA6ndF5knQFzkiHQAxMgEYAj9QnPg/khlyg");
	var mask_7_graphics_67 = new cjs.Graphics().p("AjCZGQkil/BCncQBBncF9khQF3kcHQA5MgE8Aj4QnOhHkbl2g");
	var mask_7_graphics_68 = new cjs.Graphics().p("AjWY5QkcmDBJnbQBJnbGCkbQF7kWHPBAMgFfAjzQnNhOkWl7g");
	var mask_7_graphics_69 = new cjs.Graphics().p("AjpYsQkWmIBQnZQBQnaGHkVQGAkQHOBHMgGEAjtQnMhVkPl/g");
	var mask_7_graphics_70 = new cjs.Graphics().p("Aj8YfQkQmMBYnYQBXnYGLkPQGEkLHNBPMgGoAjnQnKhckJmEg");
	var mask_7_graphics_71 = new cjs.Graphics().p("AkPYSQkKmQBfnXQBfnXGPkIQGIkFHMBWMgHLAjgQnIhjkEmIg");
	var mask_7_graphics_72 = new cjs.Graphics().p("AkiYFQkDmUBmnVQBmnWGTkCQGMj+HKBdMgHtAjYQnHhqj+mMg");
	var mask_7_graphics_73 = new cjs.Graphics().p("Ak1X4Qj8mYBtnUQBunTGXj8QGQj5HIBlMgIRAjQQnEhxj5mQg");
	var mask_7_graphics_74 = new cjs.Graphics().p("AlHXrQj2mcB1nSQB1nSGaj1QGUjyHHBrMgI0AjIQnDh4jymUg");
	var mask_7_graphics_75 = new cjs.Graphics().p("AlZXeQjwmgB9nQQB8nQGejvQGYjsHFBzMgJXAi/QnBiAjsmXg");
	var mask_7_graphics_76 = new cjs.Graphics().p("AlqXRQjqmkCEnOQCDnOGijoQGcjlHDB5MgJ6Ai1Qm/iGjlmbg");
	var mask_7_graphics_77 = new cjs.Graphics().p("Al8XEQjimnCKnMQCLnMGmjiQGejfHCCAMgKdAisQm9iOjfmeg");
	var mask_7_graphics_78 = new cjs.Graphics().p("AmNW3QjcmrCSnJQCSnKGpjcQGijYHACIMgLAAigQm6iUjZmig");
	var mask_7_graphics_79 = new cjs.Graphics().p("AmdWqQjWmuCZnIQCZnHGsjVQGmjRG9COMgLiAiVQm4ibjRmlg");
	var mask_7_graphics_80 = new cjs.Graphics().p("AmuWdQjPmxCgnFQCgnFGwjOQGpjLG7CVMgMEAiJQm2iijLmog");
	var mask_7_graphics_81 = new cjs.Graphics().p("Am+WQQjIm1CnnCQCnnCGzjIQGsjEG5CcMgMnAh9QmzipjEmrg");
	var mask_7_graphics_82 = new cjs.Graphics().p("AnOWDQjBm4Cum/QCunAG2jBQGvi9G2CjMgNIAhwQmwivi+mvg");
	var mask_7_graphics_83 = new cjs.Graphics().p("AneV2Qi6m7C1m9QC1m9G5i5QGyi3G0CqMgNqAhjQmti3i4mxg");
	var mask_7_graphics_84 = new cjs.Graphics().p("AntVpQizm9C8m7QC7m6G9iyQG0ixGxCxMgOLAhVQmqi9ixm0g");
	var mask_7_graphics_85 = new cjs.Graphics().p("An8VcQisnADCm3QDDm3G/isQG3ipGuC3MgOsAhHQmnjEiqm3g");
	var mask_7_graphics_86 = new cjs.Graphics().p("AoKVQQimnDDKm0QDJm0HCilQG5ijGsC+MgPNAg4QmljKiim5g");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_7_graphics_9,x:129.1,y:205.3}).wait(1).to({graphics:mask_7_graphics_10,x:128.5,y:205.3}).wait(1).to({graphics:mask_7_graphics_11,x:127.8,y:205.3}).wait(1).to({graphics:mask_7_graphics_12,x:127.2,y:205.3}).wait(1).to({graphics:mask_7_graphics_13,x:126.5,y:205.3}).wait(1).to({graphics:mask_7_graphics_14,x:125.8,y:205.2}).wait(1).to({graphics:mask_7_graphics_15,x:125.1,y:205.2}).wait(1).to({graphics:mask_7_graphics_16,x:124.3,y:205.2}).wait(1).to({graphics:mask_7_graphics_17,x:123.6,y:205.2}).wait(1).to({graphics:mask_7_graphics_18,x:122.8,y:205.2}).wait(1).to({graphics:mask_7_graphics_19,x:122,y:205.2}).wait(1).to({graphics:mask_7_graphics_20,x:121.1,y:205.2}).wait(1).to({graphics:mask_7_graphics_21,x:120.3,y:205.2}).wait(1).to({graphics:mask_7_graphics_22,x:119.4,y:205.2}).wait(1).to({graphics:mask_7_graphics_23,x:118.5,y:205.2}).wait(1).to({graphics:mask_7_graphics_24,x:117.6,y:205.2}).wait(1).to({graphics:mask_7_graphics_25,x:116.7,y:205.2}).wait(1).to({graphics:mask_7_graphics_26,x:115.8,y:205.2}).wait(1).to({graphics:mask_7_graphics_27,x:114.8,y:205.3}).wait(1).to({graphics:mask_7_graphics_28,x:113.8,y:205.3}).wait(1).to({graphics:mask_7_graphics_29,x:112.8,y:205.3}).wait(1).to({graphics:mask_7_graphics_30,x:111.8,y:205.3}).wait(1).to({graphics:mask_7_graphics_31,x:110.8,y:205.4}).wait(1).to({graphics:mask_7_graphics_32,x:109.8,y:205.4}).wait(1).to({graphics:mask_7_graphics_33,x:108.7,y:205.4}).wait(1).to({graphics:mask_7_graphics_34,x:107.7,y:205.4}).wait(1).to({graphics:mask_7_graphics_35,x:106.6,y:205.4}).wait(1).to({graphics:mask_7_graphics_36,x:105.5,y:205.5}).wait(1).to({graphics:mask_7_graphics_37,x:104.4,y:205.5}).wait(1).to({graphics:mask_7_graphics_38,x:103.3,y:205.5}).wait(1).to({graphics:mask_7_graphics_39,x:102.1,y:205.5}).wait(1).to({graphics:mask_7_graphics_40,x:101,y:205.5}).wait(1).to({graphics:mask_7_graphics_41,x:99.9,y:205.5}).wait(1).to({graphics:mask_7_graphics_42,x:98.7,y:205.6}).wait(1).to({graphics:mask_7_graphics_43,x:97.5,y:205.6}).wait(1).to({graphics:mask_7_graphics_44,x:96.4,y:205.6}).wait(1).to({graphics:mask_7_graphics_45,x:95.2,y:205.6}).wait(1).to({graphics:mask_7_graphics_46,x:94,y:205.6}).wait(1).to({graphics:mask_7_graphics_47,x:92.8,y:205.6}).wait(1).to({graphics:mask_7_graphics_48,x:91.6,y:205.6}).wait(1).to({graphics:mask_7_graphics_49,x:90.4,y:205.6}).wait(1).to({graphics:mask_7_graphics_50,x:89.2,y:205.6}).wait(1).to({graphics:mask_7_graphics_51,x:87.9,y:205.6}).wait(1).to({graphics:mask_7_graphics_52,x:86.7,y:205.6}).wait(1).to({graphics:mask_7_graphics_53,x:85.5,y:205.6}).wait(1).to({graphics:mask_7_graphics_54,x:84.2,y:205.6}).wait(1).to({graphics:mask_7_graphics_55,x:83,y:205.6}).wait(1).to({graphics:mask_7_graphics_56,x:81.8,y:205.6}).wait(1).to({graphics:mask_7_graphics_57,x:80.5,y:205.6}).wait(1).to({graphics:mask_7_graphics_58,x:79.3,y:205.7}).wait(1).to({graphics:mask_7_graphics_59,x:79.4,y:205.6}).wait(1).to({graphics:mask_7_graphics_60,x:80.4,y:205.6}).wait(1).to({graphics:mask_7_graphics_61,x:81.3,y:205.6}).wait(1).to({graphics:mask_7_graphics_62,x:82.2,y:205.5}).wait(1).to({graphics:mask_7_graphics_63,x:83.1,y:205.5}).wait(1).to({graphics:mask_7_graphics_64,x:84,y:205.4}).wait(1).to({graphics:mask_7_graphics_65,x:84.9,y:205.3}).wait(1).to({graphics:mask_7_graphics_66,x:85.8,y:205.2}).wait(1).to({graphics:mask_7_graphics_67,x:86.7,y:205.1}).wait(1).to({graphics:mask_7_graphics_68,x:87.6,y:205}).wait(1).to({graphics:mask_7_graphics_69,x:88.6,y:204.8}).wait(1).to({graphics:mask_7_graphics_70,x:89.5,y:204.7}).wait(1).to({graphics:mask_7_graphics_71,x:90.4,y:204.5}).wait(1).to({graphics:mask_7_graphics_72,x:91.2,y:204.3}).wait(1).to({graphics:mask_7_graphics_73,x:92.1,y:204.1}).wait(1).to({graphics:mask_7_graphics_74,x:93,y:203.9}).wait(1).to({graphics:mask_7_graphics_75,x:93.9,y:203.7}).wait(1).to({graphics:mask_7_graphics_76,x:94.8,y:203.4}).wait(1).to({graphics:mask_7_graphics_77,x:95.7,y:203.2}).wait(1).to({graphics:mask_7_graphics_78,x:96.6,y:202.9}).wait(1).to({graphics:mask_7_graphics_79,x:97.4,y:202.6}).wait(1).to({graphics:mask_7_graphics_80,x:98.3,y:202.3}).wait(1).to({graphics:mask_7_graphics_81,x:99.2,y:202}).wait(1).to({graphics:mask_7_graphics_82,x:100,y:201.7}).wait(1).to({graphics:mask_7_graphics_83,x:100.9,y:201.4}).wait(1).to({graphics:mask_7_graphics_84,x:101.7,y:201}).wait(1).to({graphics:mask_7_graphics_85,x:102.5,y:200.7}).wait(1).to({graphics:mask_7_graphics_86,x:103.4,y:200.3}).wait(458));

	// Layer 2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(20,1,1).p("ApJElQElkUGJi8QGKi+BEBsQA5BchVCl");
	this.shape_8.setTransform(148.6,229.5);
	this.shape_8._off = true;

	var maskedShapeInstanceList = [this.shape_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(9).to({_off:false},0).wait(535));

	// Letter
	this.instance_3 = new lib.n("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(275,275);
	this.instance_3.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(544));

	// Background
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_9.setTransform(275,275,3.373,2.543);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_10.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9}]}).wait(544));

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