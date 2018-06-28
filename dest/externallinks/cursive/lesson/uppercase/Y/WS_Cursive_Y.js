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
	this.shape.graphics.f("#FFFFFF").s().p("Av5e5QhHhLAAhzIAPiBQAniMBJiXICokeQCCi3E7kYQjQB8jUAAQidAAhLiOQg9hwAAirQAAjtFiqKID0nEQBujmAAhyQAAjEhRhyQhciHi6AAQkxAeg4BfQhTAxhHAAQhkAAAAhTQAAhWB3hQQB4hOB2gqQCAguCCAAQCTAAByA4QBuAzBOBiQBMBcAlB9QAnB6gBCOQAABfhOC+IivF7QkeIWhCCTQhtD1AACkQgBB4A7AAQCeAAC4hzQCchiCui0QDQjZEemtIBOiCIINxXIBkjIQAshEA9AAQB6AAAAB3UAAAAA2gQQAhmQDjiXE0kpQBahRCpimQBHgnAdAAQBQAAAABfQAAAqhkB6IiGChQicDMkIC/QiVBrlWDLIgiATInlP9QhECNhmBbQh5BriLAAQhzAAhGhMgAo4SnIiaDQQhCBzABBaQg7BiAABGQAAAvAUAAQBeAAB0jSIFrr/QjGDVh1CIgAjZIUICWhEIAphWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-132.8,-205.3,265.6,410.7);


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
	this.instance.setTransform(-48.7,-31.5,1,1,-17.5,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-94.4,guide:{path:[-47.9,-29.4,-30.4,37.2,47,28.6]}},74).wait(1));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AlhCZICwlVIBHAkIixFVg");
	var mask_graphics_1 = new cjs.Graphics().p("AiBCVICwlVIBTAsIivFVg");
	var mask_graphics_2 = new cjs.Graphics().p("AiICSICwlVIBhAyIiwFVg");
	var mask_graphics_3 = new cjs.Graphics().p("AiPCOICwlVIBvA5IiwFVg");
	var mask_graphics_4 = new cjs.Graphics().p("AiVCLICvlVIB8BAIivFVg");
	var mask_graphics_5 = new cjs.Graphics().p("AicCHICvlVICLBIIiwFVg");
	var mask_graphics_6 = new cjs.Graphics().p("AijCEICvlVICYBOIivFVg");
	var mask_graphics_7 = new cjs.Graphics().p("AiqCAICwlVIClBWIivFVg");
	var mask_graphics_8 = new cjs.Graphics().p("AixB9ICxlVICyBcIixFVg");
	var mask_graphics_9 = new cjs.Graphics().p("Ai4B5ICxlVIDABkIixFVg");
	var mask_graphics_10 = new cjs.Graphics().p("Ai/B2ICxlVIDOBqIixFVg");
	var mask_graphics_11 = new cjs.Graphics().p("AjFByICwlVIDcByIixFVg");
	var mask_graphics_12 = new cjs.Graphics().p("AjMBuICwlVIDpB6IiwFVg");
	var mask_graphics_13 = new cjs.Graphics().p("AjTBrICwlVID3CAIiwFVg");
	var mask_graphics_14 = new cjs.Graphics().p("AjaBnICxlVIEECHIixFVg");
	var mask_graphics_15 = new cjs.Graphics().p("AjhBkICxlVIESCOIixFVg");
	var mask_graphics_16 = new cjs.Graphics().p("AjoBgICxlVIEgCWIixFVg");
	var mask_graphics_17 = new cjs.Graphics().p("AjuBdICwlVIEtCcIiwFVg");
	var mask_graphics_18 = new cjs.Graphics().p("Aj1BZICwlVIE7CjIiwFVg");
	var mask_graphics_19 = new cjs.Graphics().p("Aj8BWICwlVIFJCqIiwFVg");
	var mask_graphics_20 = new cjs.Graphics().p("AkDBSICxlVIFWCyIixFVg");
	var mask_graphics_21 = new cjs.Graphics().p("AkKBPICxlVIFkC4IixFVg");
	var mask_graphics_22 = new cjs.Graphics().p("AkRBLICxlVIFyDAIixFVg");
	var mask_graphics_23 = new cjs.Graphics().p("AkXBIICwlVIF/DGIiwFVg");
	var mask_graphics_24 = new cjs.Graphics().p("AkeBEICwlVIGNDOIiwFVg");
	var mask_graphics_25 = new cjs.Graphics().p("AklBBICwlVIGbDUIiwFVg");
	var mask_graphics_26 = new cjs.Graphics().p("AksA9ICxlVIGoDcIiwFVg");
	var mask_graphics_27 = new cjs.Graphics().p("AkzA5ICxlVIG2DjIixFVg");
	var mask_graphics_28 = new cjs.Graphics().p("Ak6A2ICxlVIHEDqIixFVg");
	var mask_graphics_29 = new cjs.Graphics().p("AlAAyICwlVIHRDyIiwFVg");
	var mask_graphics_30 = new cjs.Graphics().p("AlHAvICwlVIHgD4IixFVg");
	var mask_graphics_31 = new cjs.Graphics().p("AlOArICwlVIHtD/IiwFVg");
	var mask_graphics_32 = new cjs.Graphics().p("AlVAoICxlVIH6EGIiwFVg");
	var mask_graphics_33 = new cjs.Graphics().p("AlcAkICxlVIIIENIixFWg");
	var mask_graphics_34 = new cjs.Graphics().p("AljAhICxlVIIWEUIixFVg");
	var mask_graphics_35 = new cjs.Graphics().p("AlpAdICwlVIIjEcIiwFVg");
	var mask_graphics_36 = new cjs.Graphics().p("AlwAaICwlVIIyEiIixFVg");
	var mask_graphics_37 = new cjs.Graphics().p("Al3AWICwlVII/EqIiwFVg");
	var mask_graphics_38 = new cjs.Graphics().p("Al+ATICwlVIJNEwIiwFVg");
	var mask_graphics_39 = new cjs.Graphics().p("AmFAPICwlVIJbE4IiwFVg");
	var mask_graphics_40 = new cjs.Graphics().p("AmMAMICwlVIJpE+IixFVg");
	var mask_graphics_41 = new cjs.Graphics().p("AmTAIICxlVIJ2FGIixFVg");
	var mask_graphics_42 = new cjs.Graphics().p("AmaAEICxlVIKEFOIixFVg");
	var mask_graphics_43 = new cjs.Graphics().p("AmhABICxlVIKRFUIiwFVg");
	var mask_graphics_44 = new cjs.Graphics().p("AmngCICwlWIKfFbIiwFWg");
	var mask_graphics_45 = new cjs.Graphics().p("AmugFICwlWIKtFhIiwFWg");
	var mask_graphics_46 = new cjs.Graphics().p("Am1gJICwlWIK7FpIixFWg");
	var mask_graphics_47 = new cjs.Graphics().p("Am8gMICwlWILJFvIixFWg");
	var mask_graphics_48 = new cjs.Graphics().p("AnDgQICxlWILWF3IixFWg");
	var mask_graphics_49 = new cjs.Graphics().p("AnKgTICxlWILjF9IiwFWg");
	var mask_graphics_50 = new cjs.Graphics().p("AnRgXICxlWILyGFIixFWg");
	var mask_graphics_51 = new cjs.Graphics().p("AnXgaICwlWIL/GMIiwFWg");
	var mask_graphics_52 = new cjs.Graphics().p("AnegeICwlWIMNGTIiwFWg");
	var mask_graphics_53 = new cjs.Graphics().p("AnlghICwlWIMbGZIixFWg");
	var mask_graphics_54 = new cjs.Graphics().p("AnsglICxlWIMoGhIixFWg");
	var mask_graphics_55 = new cjs.Graphics().p("AnzgoICxlWIM1GoIiwFWg");
	var mask_graphics_56 = new cjs.Graphics().p("An6gsICxlWINEGvIixFWg");
	var mask_graphics_57 = new cjs.Graphics().p("AoAgwICwlWINRG3IiwFWg");
	var mask_graphics_58 = new cjs.Graphics().p("AoHgzICwlWINfG9IiwFWg");
	var mask_graphics_59 = new cjs.Graphics().p("AoOg3ICwlWINtHFIixFWg");
	var mask_graphics_60 = new cjs.Graphics().p("AoVg6ICxlWIN6HLIixFWg");
	var mask_graphics_61 = new cjs.Graphics().p("Aocg+ICxlWIOHHTIiwFWg");
	var mask_graphics_62 = new cjs.Graphics().p("AojhBICxlWIOWHZIixFWg");
	var mask_graphics_63 = new cjs.Graphics().p("AophFICwlWIOjHhIiwFWg");
	var mask_graphics_64 = new cjs.Graphics().p("AowhIICwlWIOxHoIiwFWg");
	var mask_graphics_65 = new cjs.Graphics().p("Ao3hMICwlWIO/HvIixFWg");
	var mask_graphics_66 = new cjs.Graphics().p("Ao+hPICxlWIPMH1IixFWg");
	var mask_graphics_67 = new cjs.Graphics().p("ApFhTICxlWIPaH9IixFWg");
	var mask_graphics_68 = new cjs.Graphics().p("ApMhWICxlWIPnIEIiwFWg");
	var mask_graphics_69 = new cjs.Graphics().p("ApShaICwlWIP1ILIiwFWg");
	var mask_graphics_70 = new cjs.Graphics().p("ApZhdICwlWIQDISIiwFWg");
	var mask_graphics_71 = new cjs.Graphics().p("ApghhICwlWIQRIZIixFWg");
	var mask_graphics_72 = new cjs.Graphics().p("ApnhlICxlWIQeIhIixFWg");
	var mask_graphics_73 = new cjs.Graphics().p("ApuhoICxlWIQsInIixFWg");
	var mask_graphics_74 = new cjs.Graphics().p("Ap1hsICxlWIQ6IvIixFWg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-35.4,y:-17.5}).wait(1).to({graphics:mask_graphics_1,x:-57.8,y:-17.1}).wait(1).to({graphics:mask_graphics_2,x:-57.1,y:-16.7}).wait(1).to({graphics:mask_graphics_3,x:-56.5,y:-16.4}).wait(1).to({graphics:mask_graphics_4,x:-55.8,y:-16}).wait(1).to({graphics:mask_graphics_5,x:-55.1,y:-15.7}).wait(1).to({graphics:mask_graphics_6,x:-54.4,y:-15.3}).wait(1).to({graphics:mask_graphics_7,x:-53.7,y:-15}).wait(1).to({graphics:mask_graphics_8,x:-53,y:-14.6}).wait(1).to({graphics:mask_graphics_9,x:-52.4,y:-14.3}).wait(1).to({graphics:mask_graphics_10,x:-51.7,y:-13.9}).wait(1).to({graphics:mask_graphics_11,x:-51,y:-13.6}).wait(1).to({graphics:mask_graphics_12,x:-50.3,y:-13.2}).wait(1).to({graphics:mask_graphics_13,x:-49.6,y:-12.8}).wait(1).to({graphics:mask_graphics_14,x:-48.9,y:-12.5}).wait(1).to({graphics:mask_graphics_15,x:-48.3,y:-12.1}).wait(1).to({graphics:mask_graphics_16,x:-47.6,y:-11.8}).wait(1).to({graphics:mask_graphics_17,x:-46.9,y:-11.4}).wait(1).to({graphics:mask_graphics_18,x:-46.2,y:-11.1}).wait(1).to({graphics:mask_graphics_19,x:-45.5,y:-10.7}).wait(1).to({graphics:mask_graphics_20,x:-44.8,y:-10.4}).wait(1).to({graphics:mask_graphics_21,x:-44.2,y:-10}).wait(1).to({graphics:mask_graphics_22,x:-43.5,y:-9.7}).wait(1).to({graphics:mask_graphics_23,x:-42.8,y:-9.3}).wait(1).to({graphics:mask_graphics_24,x:-42.1,y:-9}).wait(1).to({graphics:mask_graphics_25,x:-41.4,y:-8.6}).wait(1).to({graphics:mask_graphics_26,x:-40.7,y:-8.2}).wait(1).to({graphics:mask_graphics_27,x:-40.1,y:-7.9}).wait(1).to({graphics:mask_graphics_28,x:-39.4,y:-7.5}).wait(1).to({graphics:mask_graphics_29,x:-38.7,y:-7.2}).wait(1).to({graphics:mask_graphics_30,x:-38,y:-6.8}).wait(1).to({graphics:mask_graphics_31,x:-37.3,y:-6.5}).wait(1).to({graphics:mask_graphics_32,x:-36.6,y:-6.1}).wait(1).to({graphics:mask_graphics_33,x:-35.9,y:-5.8}).wait(1).to({graphics:mask_graphics_34,x:-35.3,y:-5.4}).wait(1).to({graphics:mask_graphics_35,x:-34.6,y:-5.1}).wait(1).to({graphics:mask_graphics_36,x:-33.9,y:-4.7}).wait(1).to({graphics:mask_graphics_37,x:-33.2,y:-4.4}).wait(1).to({graphics:mask_graphics_38,x:-32.6,y:-4}).wait(1).to({graphics:mask_graphics_39,x:-31.9,y:-3.7}).wait(1).to({graphics:mask_graphics_40,x:-31.2,y:-3.3}).wait(1).to({graphics:mask_graphics_41,x:-30.5,y:-3}).wait(1).to({graphics:mask_graphics_42,x:-29.8,y:-2.6}).wait(1).to({graphics:mask_graphics_43,x:-29.1,y:-2.3}).wait(1).to({graphics:mask_graphics_44,x:-28.5,y:-1.9}).wait(1).to({graphics:mask_graphics_45,x:-27.8,y:-1.6}).wait(1).to({graphics:mask_graphics_46,x:-27.1,y:-1.2}).wait(1).to({graphics:mask_graphics_47,x:-26.4,y:-0.9}).wait(1).to({graphics:mask_graphics_48,x:-25.7,y:-0.5}).wait(1).to({graphics:mask_graphics_49,x:-25,y:-0.1}).wait(1).to({graphics:mask_graphics_50,x:-24.3,y:0.2}).wait(1).to({graphics:mask_graphics_51,x:-23.7,y:0.6}).wait(1).to({graphics:mask_graphics_52,x:-23,y:0.9}).wait(1).to({graphics:mask_graphics_53,x:-22.3,y:1.3}).wait(1).to({graphics:mask_graphics_54,x:-21.6,y:1.6}).wait(1).to({graphics:mask_graphics_55,x:-20.9,y:2}).wait(1).to({graphics:mask_graphics_56,x:-20.2,y:2.3}).wait(1).to({graphics:mask_graphics_57,x:-19.6,y:2.7}).wait(1).to({graphics:mask_graphics_58,x:-18.9,y:3}).wait(1).to({graphics:mask_graphics_59,x:-18.2,y:3.4}).wait(1).to({graphics:mask_graphics_60,x:-17.5,y:3.7}).wait(1).to({graphics:mask_graphics_61,x:-16.8,y:4.1}).wait(1).to({graphics:mask_graphics_62,x:-16.1,y:4.4}).wait(1).to({graphics:mask_graphics_63,x:-15.5,y:4.8}).wait(1).to({graphics:mask_graphics_64,x:-14.8,y:5.2}).wait(1).to({graphics:mask_graphics_65,x:-14.1,y:5.5}).wait(1).to({graphics:mask_graphics_66,x:-13.4,y:5.9}).wait(1).to({graphics:mask_graphics_67,x:-12.7,y:6.2}).wait(1).to({graphics:mask_graphics_68,x:-12,y:6.6}).wait(1).to({graphics:mask_graphics_69,x:-11.4,y:6.9}).wait(1).to({graphics:mask_graphics_70,x:-10.7,y:7.3}).wait(1).to({graphics:mask_graphics_71,x:-10,y:7.6}).wait(1).to({graphics:mask_graphics_72,x:-9.3,y:8}).wait(1).to({graphics:mask_graphics_73,x:-8.6,y:8.3}).wait(1).to({graphics:mask_graphics_74,x:-7.9,y:8.7}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AnfkmQCwKeMPhb");

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.3,-37.3,21.2,38.8);


(lib.ar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-27.1,18.6,1,1,-117.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-151.7,guide:{path:[-27,18.5,15.9,0.2,33.1,-27]}},44).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AiggCIA+gvIBvCTIg9Aug");
	var mask_graphics_1 = new cjs.Graphics().p("AhcgtIBKg4IBvCSIhLA5g");
	var mask_graphics_2 = new cjs.Graphics().p("AhjgnIBYhDIBvCSIhYBDg");
	var mask_graphics_3 = new cjs.Graphics().p("AhqgiIBlhNIBwCTIhlBMg");
	var mask_graphics_4 = new cjs.Graphics().p("AhwgeIBxhWIBwCTIhxBWg");
	var mask_graphics_5 = new cjs.Graphics().p("Ah2gZIB+hgIBvCTIh+Bgg");
	var mask_graphics_6 = new cjs.Graphics().p("Ah9gUICLhqIBwCTIiLBqg");
	var mask_graphics_7 = new cjs.Graphics().p("AiDgPICXhzIBwCSIiXBzg");
	var mask_graphics_8 = new cjs.Graphics().p("AiKgKIClh+IBwCTIilB+g");
	var mask_graphics_9 = new cjs.Graphics().p("AiQgFICxiIIBwCTIixCIg");
	var mask_graphics_10 = new cjs.Graphics().p("AiXAAIC/iRIBwCSIi/CRg");
	var mask_graphics_11 = new cjs.Graphics().p("AidAEIDLiaIBwCTIjLCag");
	var mask_graphics_12 = new cjs.Graphics().p("AikAJIDZikIBwCTIjZCkg");
	var mask_graphics_13 = new cjs.Graphics().p("AiqANIDlitIBwCTIjlCug");
	var mask_graphics_14 = new cjs.Graphics().p("AiwASIDyi3IBvCUIjyC3g");
	var mask_graphics_15 = new cjs.Graphics().p("Ai3AXID/jBIBwCUIj/DBg");
	var mask_graphics_16 = new cjs.Graphics().p("Ai+AcIEMjLIBxCUIkMDLg");
	var mask_graphics_17 = new cjs.Graphics().p("AjEAhIEZjVIBwCUIkZDVg");
	var mask_graphics_18 = new cjs.Graphics().p("AjLAmIEnjfIBwCUIknDfg");
	var mask_graphics_19 = new cjs.Graphics().p("AjRArIEzjpIBwCUIkzDog");
	var mask_graphics_20 = new cjs.Graphics().p("AjXAwIE/jyIBxCTIlBDzg");
	var mask_graphics_21 = new cjs.Graphics().p("AjeA1IFNj9IBwCUIlND9g");
	var mask_graphics_22 = new cjs.Graphics().p("AjlA6IFbkGIBwCTIlbEHg");
	var mask_graphics_23 = new cjs.Graphics().p("AjrA/IFnkQIBwCTIlnEQg");
	var mask_graphics_24 = new cjs.Graphics().p("AjyBEIF1kaIBvCTIlzEag");
	var mask_graphics_25 = new cjs.Graphics().p("Aj4BJIGBkkIBwCTImBEkg");
	var mask_graphics_26 = new cjs.Graphics().p("Aj+BNIGNktIBwCTImNEug");
	var mask_graphics_27 = new cjs.Graphics().p("AkFBSIGbk3IBwCUImbE3g");
	var mask_graphics_28 = new cjs.Graphics().p("AkLBYIGnlCIBwCTImoFCg");
	var mask_graphics_29 = new cjs.Graphics().p("AkSBcIG1lLIBwCUIm1FLg");
	var mask_graphics_30 = new cjs.Graphics().p("AkZBhIHClVIBxCUInCFVg");
	var mask_graphics_31 = new cjs.Graphics().p("AkfBmIHPlfIBwCUInPFfg");
	var mask_graphics_32 = new cjs.Graphics().p("AklBrIHbloIBwCTInbFog");
	var mask_graphics_33 = new cjs.Graphics().p("AksBwIHplyIBwCTInpFyg");
	var mask_graphics_34 = new cjs.Graphics().p("AkyB1IH1l9IBwCUIn1F9g");
	var mask_graphics_35 = new cjs.Graphics().p("Ak5B6IIDmGIBwCTIoDGGg");
	var mask_graphics_36 = new cjs.Graphics().p("Ak/B/IIPmQIBwCUIoPGPg");
	var mask_graphics_37 = new cjs.Graphics().p("AlGCEIIdmaIBwCTIodGag");
	var mask_graphics_38 = new cjs.Graphics().p("AlMCIIIpmjIBwCTIopGkg");
	var mask_graphics_39 = new cjs.Graphics().p("AlTCNII2mtIBxCUIo2Gtg");
	var mask_graphics_40 = new cjs.Graphics().p("AlZCSIJDm3IBwCTIpDG4g");
	var mask_graphics_41 = new cjs.Graphics().p("AlfCXIJQnBIBvCUIpQHBg");
	var mask_graphics_42 = new cjs.Graphics().p("AlmCcIJdnLIBwCUIpdHLg");
	var mask_graphics_43 = new cjs.Graphics().p("AltChIJqnVIBxCUIpqHVg");
	var mask_graphics_44 = new cjs.Graphics().p("AlzCmIJ3neIBwCTIp3Heg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-16.1,y:14.4}).wait(1).to({graphics:mask_graphics_1,x:-22.9,y:18.7}).wait(1).to({graphics:mask_graphics_2,x:-22.2,y:18.2}).wait(1).to({graphics:mask_graphics_3,x:-21.6,y:17.8}).wait(1).to({graphics:mask_graphics_4,x:-21,y:17.3}).wait(1).to({graphics:mask_graphics_5,x:-20.4,y:16.8}).wait(1).to({graphics:mask_graphics_6,x:-19.8,y:16.3}).wait(1).to({graphics:mask_graphics_7,x:-19.2,y:15.9}).wait(1).to({graphics:mask_graphics_8,x:-18.5,y:15.4}).wait(1).to({graphics:mask_graphics_9,x:-17.9,y:14.9}).wait(1).to({graphics:mask_graphics_10,x:-17.3,y:14.4}).wait(1).to({graphics:mask_graphics_11,x:-16.7,y:14}).wait(1).to({graphics:mask_graphics_12,x:-16.1,y:13.5}).wait(1).to({graphics:mask_graphics_13,x:-15.5,y:13}).wait(1).to({graphics:mask_graphics_14,x:-14.8,y:12.6}).wait(1).to({graphics:mask_graphics_15,x:-14.2,y:12.1}).wait(1).to({graphics:mask_graphics_16,x:-13.6,y:11.6}).wait(1).to({graphics:mask_graphics_17,x:-13,y:11.1}).wait(1).to({graphics:mask_graphics_18,x:-12.4,y:10.6}).wait(1).to({graphics:mask_graphics_19,x:-11.7,y:10.2}).wait(1).to({graphics:mask_graphics_20,x:-11.1,y:9.7}).wait(1).to({graphics:mask_graphics_21,x:-10.5,y:9.2}).wait(1).to({graphics:mask_graphics_22,x:-9.9,y:8.8}).wait(1).to({graphics:mask_graphics_23,x:-9.3,y:8.3}).wait(1).to({graphics:mask_graphics_24,x:-8.6,y:7.8}).wait(1).to({graphics:mask_graphics_25,x:-8,y:7.3}).wait(1).to({graphics:mask_graphics_26,x:-7.4,y:6.9}).wait(1).to({graphics:mask_graphics_27,x:-6.8,y:6.4}).wait(1).to({graphics:mask_graphics_28,x:-6.2,y:5.9}).wait(1).to({graphics:mask_graphics_29,x:-5.6,y:5.4}).wait(1).to({graphics:mask_graphics_30,x:-4.9,y:4.9}).wait(1).to({graphics:mask_graphics_31,x:-4.3,y:4.5}).wait(1).to({graphics:mask_graphics_32,x:-3.7,y:4}).wait(1).to({graphics:mask_graphics_33,x:-3.1,y:3.5}).wait(1).to({graphics:mask_graphics_34,x:-2.5,y:3.1}).wait(1).to({graphics:mask_graphics_35,x:-1.9,y:2.6}).wait(1).to({graphics:mask_graphics_36,x:-1.2,y:2.1}).wait(1).to({graphics:mask_graphics_37,x:-0.6,y:1.6}).wait(1).to({graphics:mask_graphics_38,x:0,y:1.2}).wait(1).to({graphics:mask_graphics_39,x:0.6,y:0.7}).wait(1).to({graphics:mask_graphics_40,x:1.2,y:0.2}).wait(1).to({graphics:mask_graphics_41,x:1.9,y:-0.3}).wait(1).to({graphics:mask_graphics_42,x:2.5,y:-0.7}).wait(1).to({graphics:mask_graphics_43,x:3.1,y:-1.2}).wait(1).to({graphics:mask_graphics_44,x:3.7,y:-1.7}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AjtEeQBrkwFwkK");
	this.shape.setTransform(3.5,-4.5,1,1,-167.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.5,9.5,19.7,20.2);


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
(lib.WS_Cursive_Y = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_790 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(790).call(this.frame_790).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(154.1,99.1,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[154.2,99.1,168.5,89,179.4,87.1,179.7,87,180,86.9,185.9,85.4,191.3,84.5,237.8,76.3,246.7,111.8,257.7,155.7,226.2,203.5,194.7,251.4,184.3,292.2,174,333,199.6,337.7,225.3,342.4,270.3,297.8,315.2,253.2,339.8,198.1,364.3,143.1,394.9,84.8]}},340).wait(15).to({skewY:0,x:394.2,y:85.6},0).to({x:214.4,y:457.5},171).to({x:197.4,y:467.6},10).wait(15).to({startPosition:0},0).to({guide:{path:[197.3,467.7,180,468.1,179.4,455.2,179.4,454.8,179.4,454.3,179.5,452.6,179.6,450.9,183.6,411.1,215.5,376,249.3,339.1,285.6,326.8,321.9,314.5,378.7,252.5]}},150).wait(15).to({startPosition:0},0).to({guide:{path:[378.7,252.7,366.5,189.5,314.8,154.4,263.5,119.7,202.1,129.7,144.5,139,88.5,155.4,31.1,172.4,-28.3,163.7,-81.2,156.1,-111.3,112]}},65).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(392.8,86.9,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},340).wait(15).to({_off:false,x:197.8,y:467.9},0).to({_off:true},181).wait(15).to({_off:false,x:379.8,y:251.9},0).to({_off:true},150).wait(81));

	// Layer 17
	this.instance_1 = new lib.ar4("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(154.2,442.2,1,1,0,122.2,-57.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(560).to({_off:false},0).wait(231));

	// Layer 14 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_574 = new cjs.Graphics().p("AmLknICliOIJyLdIilCNg");
	var mask_graphics_575 = new cjs.Graphics().p("AmTkhIC1iaIJyLcIi1Cbg");
	var mask_graphics_576 = new cjs.Graphics().p("AmbkbIDGinIJxLcIjECpg");
	var mask_graphics_577 = new cjs.Graphics().p("AmjkUIDVi1IJyLbIjUC4g");
	var mask_graphics_578 = new cjs.Graphics().p("AmrkOIDmjBIJxLbIjjDFg");
	var mask_graphics_579 = new cjs.Graphics().p("AmzkIID2jOIJxLaIjzDTg");
	var mask_graphics_580 = new cjs.Graphics().p("Am6kCIEFjbIJwLaIkCDhg");
	var mask_graphics_581 = new cjs.Graphics().p("AnCj8IEVjoIJwLaIkRDvg");
	var mask_graphics_582 = new cjs.Graphics().p("AnKj1IElj2IJwLZIkhD9g");
	var mask_graphics_583 = new cjs.Graphics().p("AnSjvIE1kCIJwLYIkwELg");
	var mask_graphics_584 = new cjs.Graphics().p("AnajpIFFkPIJvLYIk/EZg");
	var mask_graphics_585 = new cjs.Graphics().p("AnhjjIFUkcIJvLYIlOEng");
	var mask_graphics_586 = new cjs.Graphics().p("AnqjdIFlkoIJvLXIleE0g");
	var mask_graphics_587 = new cjs.Graphics().p("AnxjWIF1k2IJuLXIluFCg");
	var mask_graphics_588 = new cjs.Graphics().p("An5jQIGFlDIJuLXIl9FQg");
	var mask_graphics_589 = new cjs.Graphics().p("AoBjKIGVlPIJuLVImNFeg");
	var mask_graphics_590 = new cjs.Graphics().p("AoJjEIGllcIJtLVImbFsg");
	var mask_graphics_591 = new cjs.Graphics().p("AoRi+IG1lpIJtLVImrF6g");
	var mask_graphics_592 = new cjs.Graphics().p("AoYi3IHEl3IJtLVIm7GHg");
	var mask_graphics_593 = new cjs.Graphics().p("AogixIHUmDIJtLUInKGVg");
	var mask_graphics_594 = new cjs.Graphics().p("AooirIHkmQIJtLTInZGkg");
	var mask_graphics_595 = new cjs.Graphics().p("AowikIH1meIJsLTInpGyg");
	var mask_graphics_596 = new cjs.Graphics().p("Ao4ifIIFmpIJsLSIn5G/g");
	var mask_graphics_597 = new cjs.Graphics().p("Ao/iYIIUm3IJsLSIoJHNg");
	var mask_graphics_598 = new cjs.Graphics().p("ApHiSIIknEIJrLSIoXHbg");
	var mask_graphics_599 = new cjs.Graphics().p("ApPiMII0nRIJrLRIomHqg");
	var mask_graphics_600 = new cjs.Graphics().p("ApXiFIJEnfIJrLSIo2H3g");
	var mask_graphics_601 = new cjs.Graphics().p("Apfh/IJUnrIJrLQIpGIFg");
	var mask_graphics_602 = new cjs.Graphics().p("Apnh5IJkn4IJrLQIpVITg");
	var mask_graphics_603 = new cjs.Graphics().p("ApvhzIJzoFIJsLQIpkIhg");
	var mask_graphics_604 = new cjs.Graphics().p("Ap2hsIKDoTIJqLQIpzIug");
	var mask_graphics_605 = new cjs.Graphics().p("Ap+hnIKToeIJqLOIqCI9g");
	var mask_graphics_606 = new cjs.Graphics().p("AqGhgIKjosIJqLOIqSJLg");
	var mask_graphics_607 = new cjs.Graphics().p("AqOhaIKzo5IJqLOIqhJZg");
	var mask_graphics_608 = new cjs.Graphics().p("AqWhUILDpFIJqLNIqwJng");
	var mask_graphics_609 = new cjs.Graphics().p("AqdhNILSpTIJqLNIrAJ0g");
	var mask_graphics_610 = new cjs.Graphics().p("AqlhHILipgIJqLNIrPKCg");
	var mask_graphics_611 = new cjs.Graphics().p("AqthBILyptIJpLMIreKRg");
	var mask_graphics_612 = new cjs.Graphics().p("Aq1g7IMDp5IJoLLIruKeg");
	var mask_graphics_613 = new cjs.Graphics().p("Aq9g1IMTqGIJoLLIr9Ksg");
	var mask_graphics_614 = new cjs.Graphics().p("ArEguIMhqUIJoLLIsMK6g");
	var mask_graphics_615 = new cjs.Graphics().p("ArNgoIMzqgIJoLKIscLHg");
	var mask_graphics_616 = new cjs.Graphics().p("ArVgiINDqtIJnLLIsrLUg");
	var mask_graphics_617 = new cjs.Graphics().p("ArcgcINSq6IJnLKIs6Ljg");
	var mask_graphics_618 = new cjs.Graphics().p("ArkgVINirIIJnLKItKLxg");
	var mask_graphics_619 = new cjs.Graphics().p("ArsgPINyrUIJnLJItaL+g");
	var mask_graphics_620 = new cjs.Graphics().p("Ar0gJIOCrhIJnLJItpMMg");
	var mask_graphics_621 = new cjs.Graphics().p("Ar8gDIOTruIJlLJIt4Mag");
	var mask_graphics_622 = new cjs.Graphics().p("AsDACIOir6IJlLIIuHMog");
	var mask_graphics_623 = new cjs.Graphics().p("AsLAJIOysHIJlLHIuXM2g");
	var mask_graphics_624 = new cjs.Graphics().p("AsTAPIPCsUIJlLHIumNEg");
	var mask_graphics_625 = new cjs.Graphics().p("AsbAVIPSshIJlLHIu2NSg");
	var mask_graphics_626 = new cjs.Graphics().p("AsjAbIPistIJlLGIvGNgg");
	var mask_graphics_627 = new cjs.Graphics().p("AsqAhIPxs6IJlLGIvVNtg");
	var mask_graphics_628 = new cjs.Graphics().p("AsyAnIQBtHIJkLGIvkN7g");
	var mask_graphics_629 = new cjs.Graphics().p("As6AuIQStVIJjLFIvzOKg");
	var mask_graphics_630 = new cjs.Graphics().p("AtCA0IQitiIJjLFIwDOXg");
	var mask_graphics_631 = new cjs.Graphics().p("AtKA6IQxtuIJkLEIwTOlg");
	var mask_graphics_632 = new cjs.Graphics().p("AtSBAIRCt7IJjLEIwiOzg");
	var mask_graphics_633 = new cjs.Graphics().p("AtaBGIRSuIIJjLEIwxPBg");
	var mask_graphics_634 = new cjs.Graphics().p("AtiBNIRiuVIJjLDIxBPOg");
	var mask_graphics_635 = new cjs.Graphics().p("AtpBTIRxuiIJiLCIxQPdg");
	var mask_graphics_636 = new cjs.Graphics().p("AtxBZISBuvIJiLCIxgPrg");
	var mask_graphics_637 = new cjs.Graphics().p("At5BfISRu8IJiLCIxvP5g");
	var mask_graphics_638 = new cjs.Graphics().p("AuBBlISivIIJhLBIx+QGg");
	var mask_graphics_639 = new cjs.Graphics().p("AuJBsISxvWIJiLBIyOQUg");
	var mask_graphics_640 = new cjs.Graphics().p("AuQByITBvjIJhLBIyeQig");
	var mask_graphics_641 = new cjs.Graphics().p("AuYB4ITRvvIJgK/IysQwg");
	var mask_graphics_642 = new cjs.Graphics().p("AugB+IThv8IJgK/Iy7Q+g");
	var mask_graphics_643 = new cjs.Graphics().p("AuoCEITxwJIJgK/IzLRMg");
	var mask_graphics_644 = new cjs.Graphics().p("AuwCLIUBwXIJgK/IzbRag");
	var mask_graphics_645 = new cjs.Graphics().p("Au4CRIURwjIJgK+IzqRng");
	var mask_graphics_646 = new cjs.Graphics().p("Au/CXIUhwwIJeK9Iz4R2g");
	var mask_graphics_647 = new cjs.Graphics().p("AvHCdIUxw9IJeK+I0ISDg");
	var mask_graphics_648 = new cjs.Graphics().p("AvPCkIVAxKIJfK8I0YSSg");
	var mask_graphics_649 = new cjs.Graphics().p("AvXCqIVRxXIJeK8I0oSfg");
	var mask_graphics_650 = new cjs.Graphics().p("AvfCwIVhxkIJeK8I03Stg");
	var mask_graphics_651 = new cjs.Graphics().p("AvmC2IVwxxIJdK7I1GS8g");
	var mask_graphics_652 = new cjs.Graphics().p("AvuC8IWAx+IJdK7I1VTJg");
	var mask_graphics_653 = new cjs.Graphics().p("Av3DDIWRyLIJdK6I1lTXg");
	var mask_graphics_654 = new cjs.Graphics().p("Av+DJIWgyYIJdK6I10Tlg");
	var mask_graphics_655 = new cjs.Graphics().p("AwGDPIWxylIJcK6I2ETzg");
	var mask_graphics_656 = new cjs.Graphics().p("AwODWIXAyyIJdK4I2TUCg");
	var mask_graphics_657 = new cjs.Graphics().p("AwWDcIXRy/IJbK5I2iUOg");
	var mask_graphics_658 = new cjs.Graphics().p("AweDiIXhzMIJcK4I2zUdg");
	var mask_graphics_659 = new cjs.Graphics().p("AwlDoIXwzZIJbK4I3BUrg");
	var mask_graphics_660 = new cjs.Graphics().p("AwtDvIYAznIJbK4I3RU4g");
	var mask_graphics_661 = new cjs.Graphics().p("Aw1D0IYQzyIJbK3I3gVGg");
	var mask_graphics_662 = new cjs.Graphics().p("Aw9D7IYg0AIJbK3I3wVUg");
	var mask_graphics_663 = new cjs.Graphics().p("AxFEBIYw0NIJbK2I3/Vjg");
	var mask_graphics_664 = new cjs.Graphics().p("AxMEHIZA0ZIJaK1I4PVwg");
	var mask_graphics_665 = new cjs.Graphics().p("AxUEOIZP0nIJaK1I4eV+g");
	var mask_graphics_666 = new cjs.Graphics().p("AxcEUIZg00IJZK1I4tWMg");
	var mask_graphics_667 = new cjs.Graphics().p("AxkEaIZw1BIJZK1I49Wag");
	var mask_graphics_668 = new cjs.Graphics().p("AxsEgIaA1NIJZKzI5MWog");
	var mask_graphics_669 = new cjs.Graphics().p("Ax0EmIaQ1aIJZKzI5cW2g");
	var mask_graphics_670 = new cjs.Graphics().p("Ax8EtIag1oIJZKzI5rXEg");
	var mask_graphics_671 = new cjs.Graphics().p("AyDEzIav10IJYKyI56XRg");
	var mask_graphics_672 = new cjs.Graphics().p("AyLE5IbA2BIJXKyI6KXfg");
	var mask_graphics_673 = new cjs.Graphics().p("AyTE/IbP2OIJYKyI6ZXtg");
	var mask_graphics_674 = new cjs.Graphics().p("AybFFIbf2bIJYKyI6pX7g");
	var mask_graphics_675 = new cjs.Graphics().p("AyjFMIbw2oIJXKwI64YJg");
	var mask_graphics_676 = new cjs.Graphics().p("AyqFSIb/21IJWKwI7GYXg");
	var mask_graphics_677 = new cjs.Graphics().p("AyyFYIcP3CIJWKwI7WYlg");
	var mask_graphics_678 = new cjs.Graphics().p("Ay6FeIcf3OIJWKuI7mY0g");
	var mask_graphics_679 = new cjs.Graphics().p("AzCFkIcv3bIJWKvI72ZAg");
	var mask_graphics_680 = new cjs.Graphics().p("AzKFrIc/3pIJWKuI8FZPg");
	var mask_graphics_681 = new cjs.Graphics().p("AzRFxIdO32IJVKuI8TZdg");
	var mask_graphics_682 = new cjs.Graphics().p("AzaF3Idf4DIJWKuI8kZqg");
	var mask_graphics_683 = new cjs.Graphics().p("AziF9Idw4PIJUKtI8zZ4g");
	var mask_graphics_684 = new cjs.Graphics().p("AzpGDId/4cIJUKtI9CaGg");
	var mask_graphics_685 = new cjs.Graphics().p("AzxGKIeP4qIJUKsI9RaVg");
	var mask_graphics_686 = new cjs.Graphics().p("Az5GQIef42IJUKsI9haig");
	var mask_graphics_687 = new cjs.Graphics().p("A0BGWIev5DIJUKrI9xawg");
	var mask_graphics_688 = new cjs.Graphics().p("A0JGcIe/5QIJUKrI+Ba+g");
	var mask_graphics_689 = new cjs.Graphics().p("A0QGiIfO5dIJTKrI+PbMg");
	var mask_graphics_690 = new cjs.Graphics().p("A0YGpIfe5rIJTKqI+ebag");
	var mask_graphics_691 = new cjs.Graphics().p("A0gGvIfv53IJSKpI+ubog");
	var mask_graphics_692 = new cjs.Graphics().p("A0oG1If/6EIJSKpI++b2g");
	var mask_graphics_693 = new cjs.Graphics().p("A0wG7MAgPgaRIJSKpI/NcEg");
	var mask_graphics_694 = new cjs.Graphics().p("A03HBMAgegadIJSKoI/dcRg");
	var mask_graphics_695 = new cjs.Graphics().p("A0/HIMAgugarIJRKoI/rcfg");
	var mask_graphics_696 = new cjs.Graphics().p("A1HHOMAg+ga4IJRKoI/7ctg");
	var mask_graphics_697 = new cjs.Graphics().p("A1PHUMAhOgbEIJRKmMggLAc7g");
	var mask_graphics_698 = new cjs.Graphics().p("A1XHaMAhegbRIJRKmMggaAdJg");
	var mask_graphics_699 = new cjs.Graphics().p("A1fHgMAhugbeIJRKmMggqAdXg");
	var mask_graphics_700 = new cjs.Graphics().p("A1nHnMAh/gbrIJQKlMgg5Adkg");
	var mask_graphics_701 = new cjs.Graphics().p("A1vHtMAiPgb4IJPKlMghIAdyg");
	var mask_graphics_702 = new cjs.Graphics().p("A12HzMAidgcFIJQKkMghXAeBg");
	var mask_graphics_703 = new cjs.Graphics().p("A1+H5MAiugcSIJPKkMghnAePg");
	var mask_graphics_704 = new cjs.Graphics().p("A2GIAMAi+gcgIJPKkMgh3Aedg");
	var mask_graphics_705 = new cjs.Graphics().p("A2OIGMAjOgcsIJPKjMgiGAeqg");
	var mask_graphics_706 = new cjs.Graphics().p("A2WIMMAjegc5IJPKjMgiWAe4g");
	var mask_graphics_707 = new cjs.Graphics().p("A2dISMAjtgdGIJOKjMgikAfGg");
	var mask_graphics_708 = new cjs.Graphics().p("A2lIYMAj9gdSIJOKiMgi0AfTg");
	var mask_graphics_709 = new cjs.Graphics().p("A3DJSMAkmgejIJhK/MgkCAflg");
	var mask_graphics_710 = new cjs.Graphics().p("At6auMAlOgf1IJzLdMglOAf1g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(574).to({graphics:mask_graphics_574,x:162.5,y:444.7}).wait(1).to({graphics:mask_graphics_575,x:163.3,y:444}).wait(1).to({graphics:mask_graphics_576,x:164.1,y:443.4}).wait(1).to({graphics:mask_graphics_577,x:164.9,y:442.7}).wait(1).to({graphics:mask_graphics_578,x:165.6,y:442.1}).wait(1).to({graphics:mask_graphics_579,x:166.4,y:441.4}).wait(1).to({graphics:mask_graphics_580,x:167.2,y:440.7}).wait(1).to({graphics:mask_graphics_581,x:168,y:440.1}).wait(1).to({graphics:mask_graphics_582,x:168.8,y:439.4}).wait(1).to({graphics:mask_graphics_583,x:169.5,y:438.8}).wait(1).to({graphics:mask_graphics_584,x:170.3,y:438.1}).wait(1).to({graphics:mask_graphics_585,x:171.1,y:437.4}).wait(1).to({graphics:mask_graphics_586,x:171.9,y:436.8}).wait(1).to({graphics:mask_graphics_587,x:172.6,y:436.1}).wait(1).to({graphics:mask_graphics_588,x:173.4,y:435.4}).wait(1).to({graphics:mask_graphics_589,x:174.2,y:434.8}).wait(1).to({graphics:mask_graphics_590,x:175,y:434.1}).wait(1).to({graphics:mask_graphics_591,x:175.8,y:433.5}).wait(1).to({graphics:mask_graphics_592,x:176.5,y:432.8}).wait(1).to({graphics:mask_graphics_593,x:177.3,y:432.1}).wait(1).to({graphics:mask_graphics_594,x:178.1,y:431.5}).wait(1).to({graphics:mask_graphics_595,x:178.8,y:430.8}).wait(1).to({graphics:mask_graphics_596,x:179.6,y:430.2}).wait(1).to({graphics:mask_graphics_597,x:180.4,y:429.5}).wait(1).to({graphics:mask_graphics_598,x:181.2,y:428.8}).wait(1).to({graphics:mask_graphics_599,x:182,y:428.2}).wait(1).to({graphics:mask_graphics_600,x:182.7,y:427.5}).wait(1).to({graphics:mask_graphics_601,x:183.5,y:426.8}).wait(1).to({graphics:mask_graphics_602,x:184.3,y:426.2}).wait(1).to({graphics:mask_graphics_603,x:185.1,y:425.5}).wait(1).to({graphics:mask_graphics_604,x:185.8,y:424.9}).wait(1).to({graphics:mask_graphics_605,x:186.6,y:424.2}).wait(1).to({graphics:mask_graphics_606,x:187.4,y:423.5}).wait(1).to({graphics:mask_graphics_607,x:188.2,y:422.9}).wait(1).to({graphics:mask_graphics_608,x:188.9,y:422.2}).wait(1).to({graphics:mask_graphics_609,x:189.7,y:421.6}).wait(1).to({graphics:mask_graphics_610,x:190.5,y:420.9}).wait(1).to({graphics:mask_graphics_611,x:191.3,y:420.2}).wait(1).to({graphics:mask_graphics_612,x:192.1,y:419.6}).wait(1).to({graphics:mask_graphics_613,x:192.8,y:418.9}).wait(1).to({graphics:mask_graphics_614,x:193.6,y:418.2}).wait(1).to({graphics:mask_graphics_615,x:194.4,y:417.6}).wait(1).to({graphics:mask_graphics_616,x:195.2,y:416.9}).wait(1).to({graphics:mask_graphics_617,x:195.9,y:416.3}).wait(1).to({graphics:mask_graphics_618,x:196.7,y:415.6}).wait(1).to({graphics:mask_graphics_619,x:197.5,y:414.9}).wait(1).to({graphics:mask_graphics_620,x:198.3,y:414.3}).wait(1).to({graphics:mask_graphics_621,x:199.1,y:413.6}).wait(1).to({graphics:mask_graphics_622,x:199.8,y:413}).wait(1).to({graphics:mask_graphics_623,x:200.6,y:412.3}).wait(1).to({graphics:mask_graphics_624,x:201.4,y:411.6}).wait(1).to({graphics:mask_graphics_625,x:202.2,y:411}).wait(1).to({graphics:mask_graphics_626,x:202.9,y:410.3}).wait(1).to({graphics:mask_graphics_627,x:203.7,y:409.6}).wait(1).to({graphics:mask_graphics_628,x:204.5,y:409}).wait(1).to({graphics:mask_graphics_629,x:205.3,y:408.3}).wait(1).to({graphics:mask_graphics_630,x:206,y:407.7}).wait(1).to({graphics:mask_graphics_631,x:206.8,y:407}).wait(1).to({graphics:mask_graphics_632,x:207.6,y:406.3}).wait(1).to({graphics:mask_graphics_633,x:208.4,y:405.7}).wait(1).to({graphics:mask_graphics_634,x:209.2,y:405}).wait(1).to({graphics:mask_graphics_635,x:209.9,y:404.4}).wait(1).to({graphics:mask_graphics_636,x:210.7,y:403.7}).wait(1).to({graphics:mask_graphics_637,x:211.5,y:403}).wait(1).to({graphics:mask_graphics_638,x:212.2,y:402.4}).wait(1).to({graphics:mask_graphics_639,x:213,y:401.7}).wait(1).to({graphics:mask_graphics_640,x:213.8,y:401}).wait(1).to({graphics:mask_graphics_641,x:214.6,y:400.4}).wait(1).to({graphics:mask_graphics_642,x:215.4,y:399.7}).wait(1).to({graphics:mask_graphics_643,x:216.1,y:399.1}).wait(1).to({graphics:mask_graphics_644,x:216.9,y:398.4}).wait(1).to({graphics:mask_graphics_645,x:217.7,y:397.7}).wait(1).to({graphics:mask_graphics_646,x:218.5,y:397.1}).wait(1).to({graphics:mask_graphics_647,x:219.2,y:396.4}).wait(1).to({graphics:mask_graphics_648,x:220,y:395.8}).wait(1).to({graphics:mask_graphics_649,x:220.8,y:395.1}).wait(1).to({graphics:mask_graphics_650,x:221.6,y:394.4}).wait(1).to({graphics:mask_graphics_651,x:222.4,y:393.8}).wait(1).to({graphics:mask_graphics_652,x:223.1,y:393.1}).wait(1).to({graphics:mask_graphics_653,x:223.9,y:392.4}).wait(1).to({graphics:mask_graphics_654,x:224.7,y:391.8}).wait(1).to({graphics:mask_graphics_655,x:225.5,y:391.1}).wait(1).to({graphics:mask_graphics_656,x:226.2,y:390.5}).wait(1).to({graphics:mask_graphics_657,x:227,y:389.8}).wait(1).to({graphics:mask_graphics_658,x:227.8,y:389.1}).wait(1).to({graphics:mask_graphics_659,x:228.6,y:388.5}).wait(1).to({graphics:mask_graphics_660,x:229.3,y:387.8}).wait(1).to({graphics:mask_graphics_661,x:230.1,y:387.2}).wait(1).to({graphics:mask_graphics_662,x:230.9,y:386.5}).wait(1).to({graphics:mask_graphics_663,x:231.7,y:385.8}).wait(1).to({graphics:mask_graphics_664,x:232.5,y:385.2}).wait(1).to({graphics:mask_graphics_665,x:233.2,y:384.5}).wait(1).to({graphics:mask_graphics_666,x:234,y:383.8}).wait(1).to({graphics:mask_graphics_667,x:234.8,y:383.2}).wait(1).to({graphics:mask_graphics_668,x:235.6,y:382.5}).wait(1).to({graphics:mask_graphics_669,x:236.3,y:381.9}).wait(1).to({graphics:mask_graphics_670,x:237.1,y:381.2}).wait(1).to({graphics:mask_graphics_671,x:237.9,y:380.5}).wait(1).to({graphics:mask_graphics_672,x:238.7,y:379.9}).wait(1).to({graphics:mask_graphics_673,x:239.5,y:379.2}).wait(1).to({graphics:mask_graphics_674,x:240.2,y:378.6}).wait(1).to({graphics:mask_graphics_675,x:241,y:377.9}).wait(1).to({graphics:mask_graphics_676,x:241.8,y:377.2}).wait(1).to({graphics:mask_graphics_677,x:242.6,y:376.6}).wait(1).to({graphics:mask_graphics_678,x:243.3,y:375.9}).wait(1).to({graphics:mask_graphics_679,x:244.1,y:375.2}).wait(1).to({graphics:mask_graphics_680,x:244.9,y:374.6}).wait(1).to({graphics:mask_graphics_681,x:245.7,y:373.9}).wait(1).to({graphics:mask_graphics_682,x:246.4,y:373.3}).wait(1).to({graphics:mask_graphics_683,x:247.2,y:372.6}).wait(1).to({graphics:mask_graphics_684,x:248,y:371.9}).wait(1).to({graphics:mask_graphics_685,x:248.8,y:371.3}).wait(1).to({graphics:mask_graphics_686,x:249.5,y:370.6}).wait(1).to({graphics:mask_graphics_687,x:250.3,y:370}).wait(1).to({graphics:mask_graphics_688,x:251.1,y:369.3}).wait(1).to({graphics:mask_graphics_689,x:251.9,y:368.6}).wait(1).to({graphics:mask_graphics_690,x:252.6,y:368}).wait(1).to({graphics:mask_graphics_691,x:253.4,y:367.3}).wait(1).to({graphics:mask_graphics_692,x:254.2,y:366.6}).wait(1).to({graphics:mask_graphics_693,x:255,y:366}).wait(1).to({graphics:mask_graphics_694,x:255.8,y:365.3}).wait(1).to({graphics:mask_graphics_695,x:256.5,y:364.7}).wait(1).to({graphics:mask_graphics_696,x:257.3,y:364}).wait(1).to({graphics:mask_graphics_697,x:258.1,y:363.3}).wait(1).to({graphics:mask_graphics_698,x:258.9,y:362.7}).wait(1).to({graphics:mask_graphics_699,x:259.6,y:362}).wait(1).to({graphics:mask_graphics_700,x:260.4,y:361.4}).wait(1).to({graphics:mask_graphics_701,x:261.2,y:360.7}).wait(1).to({graphics:mask_graphics_702,x:262,y:360}).wait(1).to({graphics:mask_graphics_703,x:262.8,y:359.4}).wait(1).to({graphics:mask_graphics_704,x:263.5,y:358.7}).wait(1).to({graphics:mask_graphics_705,x:264.3,y:358}).wait(1).to({graphics:mask_graphics_706,x:265.1,y:357.4}).wait(1).to({graphics:mask_graphics_707,x:265.9,y:356.7}).wait(1).to({graphics:mask_graphics_708,x:266.6,y:356.1}).wait(1).to({graphics:mask_graphics_709,x:270,y:353.1}).wait(1).to({graphics:mask_graphics_710,x:211.9,y:244.3}).wait(81));

	// Layer 11
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(20,1,1).p("As2Q+QixACgGiEQAAgEAAgFQABgRACgRQAnmOFAlfQFSlwFqh7QFrh7JKp7");
	this.shape_1.setTransform(279.9,359.6);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(574).to({_off:false},0).wait(217));

	// Layer 12 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_560 = new cjs.Graphics().p("AhTC2IAAlrICnAAIAAFrg");
	var mask_1_graphics_561 = new cjs.Graphics().p("AhfC2IAAlrIC/AAIAAFrg");
	var mask_1_graphics_562 = new cjs.Graphics().p("AhqC2IAAlrIDVAAIAAFrg");
	var mask_1_graphics_563 = new cjs.Graphics().p("Ah2C2IAAlrIDtAAIAAFrg");
	var mask_1_graphics_564 = new cjs.Graphics().p("AiBC2IAAlrIEEAAIAAFrg");
	var mask_1_graphics_565 = new cjs.Graphics().p("AiNC2IAAlrIEbAAIAAFrg");
	var mask_1_graphics_566 = new cjs.Graphics().p("AiZC2IAAlrIEzAAIAAFrg");
	var mask_1_graphics_567 = new cjs.Graphics().p("AilC2IAAlrIFLAAIAAFrg");
	var mask_1_graphics_568 = new cjs.Graphics().p("AiwC2IAAlrIFhAAIAAFrg");
	var mask_1_graphics_569 = new cjs.Graphics().p("Ai8C2IAAlrIF5AAIAAFrg");
	var mask_1_graphics_570 = new cjs.Graphics().p("AjIC2IAAlrIGRAAIAAFrg");
	var mask_1_graphics_571 = new cjs.Graphics().p("AjUC2IAAlrIGoAAIAAFrg");
	var mask_1_graphics_572 = new cjs.Graphics().p("AjfC2IAAlrIG/AAIAAFrg");
	var mask_1_graphics_573 = new cjs.Graphics().p("AjrC2IAAlrIHXAAIAAFrg");
	var mask_1_graphics_574 = new cjs.Graphics().p("EAJDAmJIAAltIHvAAIAAFtg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(560).to({graphics:mask_1_graphics_560,x:206.4,y:470}).wait(1).to({graphics:mask_1_graphics_561,x:205.3,y:470}).wait(1).to({graphics:mask_1_graphics_562,x:204.1,y:470}).wait(1).to({graphics:mask_1_graphics_563,x:202.9,y:470}).wait(1).to({graphics:mask_1_graphics_564,x:201.8,y:470}).wait(1).to({graphics:mask_1_graphics_565,x:200.6,y:470}).wait(1).to({graphics:mask_1_graphics_566,x:199.4,y:470}).wait(1).to({graphics:mask_1_graphics_567,x:198.3,y:470}).wait(1).to({graphics:mask_1_graphics_568,x:197.1,y:470}).wait(1).to({graphics:mask_1_graphics_569,x:196,y:470}).wait(1).to({graphics:mask_1_graphics_570,x:194.8,y:470}).wait(1).to({graphics:mask_1_graphics_571,x:193.6,y:470}).wait(1).to({graphics:mask_1_graphics_572,x:192.4,y:470}).wait(1).to({graphics:mask_1_graphics_573,x:191.3,y:470}).wait(1).to({graphics:mask_1_graphics_574,x:107.4,y:244.1}).wait(217));

	// Layer 11
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(20,1,1).p("As2Q+QixACgGiEQAAgEAAgFQABgRACgRQAnmOFAlfQFSlwFqh7QFrh7JKp7");
	this.shape_2.setTransform(279.9,359.6);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(560).to({_off:false},0).wait(231));

	// Layer 16
	this.instance_2 = new lib.ar5("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(270,211.6,1,1,31.2,0,0,0,-1.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(364).to({_off:false},0).wait(427));

	// Layer 10 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_450 = new cjs.Graphics().p("AyHEiIAApDMAkPAAAIAAJDg");
	var mask_2_graphics_451 = new cjs.Graphics().p("AyHEtIAApZMAkPAAAIAAJZg");
	var mask_2_graphics_452 = new cjs.Graphics().p("AyHE4IAApvMAkPAAAIAAJvg");
	var mask_2_graphics_453 = new cjs.Graphics().p("AyHFDIAAqFMAkPAAAIAAKFg");
	var mask_2_graphics_454 = new cjs.Graphics().p("AyHFOIAAqbMAkPAAAIAAKbg");
	var mask_2_graphics_455 = new cjs.Graphics().p("AyHFZIAAqxMAkPAAAIAAKxg");
	var mask_2_graphics_456 = new cjs.Graphics().p("AyHFkIAArHMAkPAAAIAALHg");
	var mask_2_graphics_457 = new cjs.Graphics().p("AyHFvIAArdMAkPAAAIAALdg");
	var mask_2_graphics_458 = new cjs.Graphics().p("AyHF6IAArzMAkPAAAIAALzg");
	var mask_2_graphics_459 = new cjs.Graphics().p("AyHGFIAAsJMAkPAAAIAAMJg");
	var mask_2_graphics_460 = new cjs.Graphics().p("AyHGQIAAsfMAkPAAAIAAMfg");
	var mask_2_graphics_461 = new cjs.Graphics().p("AyHGbIAAs1MAkPAAAIAAM1g");
	var mask_2_graphics_462 = new cjs.Graphics().p("AyHGmIAAtLMAkPAAAIAANLg");
	var mask_2_graphics_463 = new cjs.Graphics().p("AyHGwIAAtgMAkPAAAIAANgg");
	var mask_2_graphics_464 = new cjs.Graphics().p("AyHG8IAAt3MAkPAAAIAAN3g");
	var mask_2_graphics_465 = new cjs.Graphics().p("AyHHGIAAuMMAkPAAAIAAOMg");
	var mask_2_graphics_466 = new cjs.Graphics().p("AyHHSIAAujMAkPAAAIAAOjg");
	var mask_2_graphics_467 = new cjs.Graphics().p("AyHHcIAAu4MAkPAAAIAAO4g");
	var mask_2_graphics_468 = new cjs.Graphics().p("AyHHoIAAvPMAkPAAAIAAPPg");
	var mask_2_graphics_469 = new cjs.Graphics().p("AyHHyIAAvkMAkPAAAIAAPkg");
	var mask_2_graphics_470 = new cjs.Graphics().p("AyHH+IAAv7MAkPAAAIAAP7g");
	var mask_2_graphics_471 = new cjs.Graphics().p("AyHIIIAAwQMAkPAAAIAAQQg");
	var mask_2_graphics_472 = new cjs.Graphics().p("AyHITIAAwlMAkPAAAIAAQlg");
	var mask_2_graphics_473 = new cjs.Graphics().p("AyHIeIAAw7MAkPAAAIAAQ7g");
	var mask_2_graphics_474 = new cjs.Graphics().p("AyHIpIAAxRMAkPAAAIAARRg");
	var mask_2_graphics_475 = new cjs.Graphics().p("AyHI0IAAxnMAkPAAAIAARng");
	var mask_2_graphics_476 = new cjs.Graphics().p("AyHI/IAAx9MAkPAAAIAAR9g");
	var mask_2_graphics_477 = new cjs.Graphics().p("AyHJKIAAyTMAkPAAAIAASTg");
	var mask_2_graphics_478 = new cjs.Graphics().p("AyHJVIAAypMAkPAAAIAASpg");
	var mask_2_graphics_479 = new cjs.Graphics().p("AyHJgIAAy/MAkPAAAIAAS/g");
	var mask_2_graphics_480 = new cjs.Graphics().p("AyHJrIAAzVMAkPAAAIAATVg");
	var mask_2_graphics_481 = new cjs.Graphics().p("AyHJ2IAAzrMAkPAAAIAATrg");
	var mask_2_graphics_482 = new cjs.Graphics().p("AyHKBIAA0BMAkPAAAIAAUBg");
	var mask_2_graphics_483 = new cjs.Graphics().p("AyHKMIAA0XMAkPAAAIAAUXg");
	var mask_2_graphics_484 = new cjs.Graphics().p("AyHKXIAA0tMAkPAAAIAAUtg");
	var mask_2_graphics_485 = new cjs.Graphics().p("AyHKiIAA1DMAkPAAAIAAVDg");
	var mask_2_graphics_486 = new cjs.Graphics().p("AyHKtIAA1ZMAkPAAAIAAVZg");
	var mask_2_graphics_487 = new cjs.Graphics().p("AyHK4IAA1vMAkPAAAIAAVvg");
	var mask_2_graphics_488 = new cjs.Graphics().p("AyHLDIAA2FMAkPAAAIAAWFg");
	var mask_2_graphics_489 = new cjs.Graphics().p("AyHLOIAA2bMAkPAAAIAAWbg");
	var mask_2_graphics_490 = new cjs.Graphics().p("AyHLZIAA2xMAkPAAAIAAWxg");
	var mask_2_graphics_491 = new cjs.Graphics().p("AyHLkIAA3HMAkPAAAIAAXHg");
	var mask_2_graphics_492 = new cjs.Graphics().p("AyHLvIAA3dMAkPAAAIAAXdg");
	var mask_2_graphics_493 = new cjs.Graphics().p("AyHL6IAA3zMAkPAAAIAAXzg");
	var mask_2_graphics_494 = new cjs.Graphics().p("AyHMFIAA4JMAkPAAAIAAYJg");
	var mask_2_graphics_495 = new cjs.Graphics().p("AyHMQIAA4fMAkPAAAIAAYfg");
	var mask_2_graphics_496 = new cjs.Graphics().p("AyHMbIAA41MAkPAAAIAAY1g");
	var mask_2_graphics_497 = new cjs.Graphics().p("AyHMlIAA5KMAkPAAAIAAZKg");
	var mask_2_graphics_498 = new cjs.Graphics().p("AyHMxIAA5hMAkPAAAIAAZhg");
	var mask_2_graphics_499 = new cjs.Graphics().p("AyHM7IAA52MAkPAAAIAAZ2g");
	var mask_2_graphics_500 = new cjs.Graphics().p("AyHNHIAA6NMAkPAAAIAAaNg");
	var mask_2_graphics_501 = new cjs.Graphics().p("AyHNRIAA6iMAkPAAAIAAaig");
	var mask_2_graphics_502 = new cjs.Graphics().p("AyHNdIAA65MAkPAAAIAAa5g");
	var mask_2_graphics_503 = new cjs.Graphics().p("AyHNnIAA7OMAkPAAAIAAbOg");
	var mask_2_graphics_504 = new cjs.Graphics().p("AyHNyIAA7kMAkPAAAIAAbkg");
	var mask_2_graphics_505 = new cjs.Graphics().p("AyHN9IAA75MAkPAAAIAAb5g");
	var mask_2_graphics_506 = new cjs.Graphics().p("AyHOIIAA8PMAkPAAAIAAcPg");
	var mask_2_graphics_507 = new cjs.Graphics().p("AyHOTIAA8lMAkPAAAIAAclg");
	var mask_2_graphics_508 = new cjs.Graphics().p("AyHOeIAA87MAkPAAAIAAc7g");
	var mask_2_graphics_509 = new cjs.Graphics().p("AyHOpIAA9RMAkPAAAIAAdRg");
	var mask_2_graphics_510 = new cjs.Graphics().p("AyHO0IAA9nMAkPAAAIAAdng");
	var mask_2_graphics_511 = new cjs.Graphics().p("AyHO/IAA99MAkPAAAIAAd9g");
	var mask_2_graphics_512 = new cjs.Graphics().p("AyHPKIAA+TMAkPAAAIAAeTg");
	var mask_2_graphics_513 = new cjs.Graphics().p("AyHPVIAA+pMAkPAAAIAAepg");
	var mask_2_graphics_514 = new cjs.Graphics().p("AyHPgIAA+/MAkPAAAIAAe/g");
	var mask_2_graphics_515 = new cjs.Graphics().p("AyHPrIAA/VMAkPAAAIAAfVg");
	var mask_2_graphics_516 = new cjs.Graphics().p("AyHP2IAA/rMAkPAAAIAAfrg");
	var mask_2_graphics_517 = new cjs.Graphics().p("AyHQBMAAAggBMAkPAAAMAAAAgBg");
	var mask_2_graphics_518 = new cjs.Graphics().p("AyHQMMAAAggXMAkPAAAMAAAAgXg");
	var mask_2_graphics_519 = new cjs.Graphics().p("AyHQXMAAAggtMAkPAAAMAAAAgtg");
	var mask_2_graphics_520 = new cjs.Graphics().p("AyHQiMAAAghDMAkPAAAMAAAAhDg");
	var mask_2_graphics_521 = new cjs.Graphics().p("AyHQtMAAAghZMAkPAAAMAAAAhZg");
	var mask_2_graphics_522 = new cjs.Graphics().p("AyHQ4MAAAghvMAkPAAAMAAAAhvg");
	var mask_2_graphics_523 = new cjs.Graphics().p("AyHRDMAAAgiFMAkPAAAMAAAAiFg");
	var mask_2_graphics_524 = new cjs.Graphics().p("AyHROMAAAgibMAkPAAAMAAAAibg");
	var mask_2_graphics_525 = new cjs.Graphics().p("AyHRZMAAAgixMAkPAAAMAAAAixg");
	var mask_2_graphics_526 = new cjs.Graphics().p("AyHRkMAAAgjHMAkPAAAMAAAAjHg");
	var mask_2_graphics_527 = new cjs.Graphics().p("AyHRvMAAAgjdMAkPAAAMAAAAjdg");
	var mask_2_graphics_528 = new cjs.Graphics().p("AyHR6MAAAgjzMAkPAAAMAAAAjzg");
	var mask_2_graphics_529 = new cjs.Graphics().p("AyHSFMAAAgkJMAkPAAAMAAAAkJg");
	var mask_2_graphics_530 = new cjs.Graphics().p("AyHSQMAAAgkfMAkPAAAMAAAAkfg");
	var mask_2_graphics_531 = new cjs.Graphics().p("AyHSaMAAAgk0MAkPAAAMAAAAk0g");
	var mask_2_graphics_532 = new cjs.Graphics().p("AyHSmMAAAglLMAkPAAAMAAAAlLg");
	var mask_2_graphics_533 = new cjs.Graphics().p("AyHSwMAAAglgMAkPAAAMAAAAlgg");
	var mask_2_graphics_534 = new cjs.Graphics().p("AyHS8MAAAgl3MAkPAAAMAAAAl3g");
	var mask_2_graphics_535 = new cjs.Graphics().p("EAD9AliMAAAgq3IaNAAMAAAAq3g");
	var mask_2_graphics_536 = new cjs.Graphics().p("AtQVcMAAAgq3IahAAMAAAAq3g");
	var mask_2_graphics_537 = new cjs.Graphics().p("AtbVcMAAAgq3Ia3AAMAAAAq3g");
	var mask_2_graphics_538 = new cjs.Graphics().p("AtmVcMAAAgq3IbNAAMAAAAq3g");
	var mask_2_graphics_539 = new cjs.Graphics().p("AtwVcMAAAgq3IbhAAMAAAAq3g");
	var mask_2_graphics_540 = new cjs.Graphics().p("At7VcMAAAgq3Ib3AAMAAAAq3g");
	var mask_2_graphics_541 = new cjs.Graphics().p("AuGVcMAAAgq3IcNAAMAAAAq3g");
	var mask_2_graphics_542 = new cjs.Graphics().p("AuQVcMAAAgq3IchAAMAAAAq3g");
	var mask_2_graphics_543 = new cjs.Graphics().p("EABTAliMAAAgq3Ic3AAMAAAAq3g");
	var mask_2_graphics_544 = new cjs.Graphics().p("AvDVcMAAAgq3IeHAAMAAAAq3g");
	var mask_2_graphics_545 = new cjs.Graphics().p("AvrVcMAAAgq3IfXAAMAAAAq3g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(450).to({graphics:mask_2_graphics_450,x:270,y:235}).wait(1).to({graphics:mask_2_graphics_451,x:270,y:236.1}).wait(1).to({graphics:mask_2_graphics_452,x:270,y:237.2}).wait(1).to({graphics:mask_2_graphics_453,x:270,y:238.3}).wait(1).to({graphics:mask_2_graphics_454,x:270,y:239.4}).wait(1).to({graphics:mask_2_graphics_455,x:270,y:240.4}).wait(1).to({graphics:mask_2_graphics_456,x:270,y:241.5}).wait(1).to({graphics:mask_2_graphics_457,x:270,y:242.6}).wait(1).to({graphics:mask_2_graphics_458,x:270,y:243.7}).wait(1).to({graphics:mask_2_graphics_459,x:270,y:244.8}).wait(1).to({graphics:mask_2_graphics_460,x:270,y:245.9}).wait(1).to({graphics:mask_2_graphics_461,x:270,y:247}).wait(1).to({graphics:mask_2_graphics_462,x:270,y:248.1}).wait(1).to({graphics:mask_2_graphics_463,x:270,y:249.2}).wait(1).to({graphics:mask_2_graphics_464,x:270,y:250.3}).wait(1).to({graphics:mask_2_graphics_465,x:270,y:251.4}).wait(1).to({graphics:mask_2_graphics_466,x:270,y:252.5}).wait(1).to({graphics:mask_2_graphics_467,x:270,y:253.6}).wait(1).to({graphics:mask_2_graphics_468,x:270,y:254.7}).wait(1).to({graphics:mask_2_graphics_469,x:270,y:255.8}).wait(1).to({graphics:mask_2_graphics_470,x:270,y:256.9}).wait(1).to({graphics:mask_2_graphics_471,x:270,y:258}).wait(1).to({graphics:mask_2_graphics_472,x:270,y:259.1}).wait(1).to({graphics:mask_2_graphics_473,x:270,y:260.2}).wait(1).to({graphics:mask_2_graphics_474,x:270,y:261.3}).wait(1).to({graphics:mask_2_graphics_475,x:270,y:262.4}).wait(1).to({graphics:mask_2_graphics_476,x:270,y:263.5}).wait(1).to({graphics:mask_2_graphics_477,x:270,y:264.6}).wait(1).to({graphics:mask_2_graphics_478,x:270,y:265.7}).wait(1).to({graphics:mask_2_graphics_479,x:270,y:266.8}).wait(1).to({graphics:mask_2_graphics_480,x:270,y:267.9}).wait(1).to({graphics:mask_2_graphics_481,x:270,y:269}).wait(1).to({graphics:mask_2_graphics_482,x:270,y:270.1}).wait(1).to({graphics:mask_2_graphics_483,x:270,y:271.2}).wait(1).to({graphics:mask_2_graphics_484,x:270,y:272.3}).wait(1).to({graphics:mask_2_graphics_485,x:270,y:273.4}).wait(1).to({graphics:mask_2_graphics_486,x:270,y:274.5}).wait(1).to({graphics:mask_2_graphics_487,x:270,y:275.6}).wait(1).to({graphics:mask_2_graphics_488,x:270,y:276.6}).wait(1).to({graphics:mask_2_graphics_489,x:270,y:277.7}).wait(1).to({graphics:mask_2_graphics_490,x:270,y:278.8}).wait(1).to({graphics:mask_2_graphics_491,x:270,y:279.9}).wait(1).to({graphics:mask_2_graphics_492,x:270,y:281}).wait(1).to({graphics:mask_2_graphics_493,x:270,y:282.1}).wait(1).to({graphics:mask_2_graphics_494,x:270,y:283.2}).wait(1).to({graphics:mask_2_graphics_495,x:270,y:284.3}).wait(1).to({graphics:mask_2_graphics_496,x:270,y:285.4}).wait(1).to({graphics:mask_2_graphics_497,x:270,y:286.5}).wait(1).to({graphics:mask_2_graphics_498,x:270,y:287.6}).wait(1).to({graphics:mask_2_graphics_499,x:270,y:288.7}).wait(1).to({graphics:mask_2_graphics_500,x:270,y:289.8}).wait(1).to({graphics:mask_2_graphics_501,x:270,y:290.9}).wait(1).to({graphics:mask_2_graphics_502,x:270,y:292}).wait(1).to({graphics:mask_2_graphics_503,x:270,y:293.1}).wait(1).to({graphics:mask_2_graphics_504,x:270,y:294.2}).wait(1).to({graphics:mask_2_graphics_505,x:270,y:295.3}).wait(1).to({graphics:mask_2_graphics_506,x:270,y:296.4}).wait(1).to({graphics:mask_2_graphics_507,x:270,y:297.5}).wait(1).to({graphics:mask_2_graphics_508,x:270,y:298.6}).wait(1).to({graphics:mask_2_graphics_509,x:270,y:299.7}).wait(1).to({graphics:mask_2_graphics_510,x:270,y:300.8}).wait(1).to({graphics:mask_2_graphics_511,x:270,y:301.9}).wait(1).to({graphics:mask_2_graphics_512,x:270,y:303}).wait(1).to({graphics:mask_2_graphics_513,x:270,y:304.1}).wait(1).to({graphics:mask_2_graphics_514,x:270,y:305.2}).wait(1).to({graphics:mask_2_graphics_515,x:270,y:306.3}).wait(1).to({graphics:mask_2_graphics_516,x:270,y:307.4}).wait(1).to({graphics:mask_2_graphics_517,x:270,y:308.5}).wait(1).to({graphics:mask_2_graphics_518,x:270,y:309.6}).wait(1).to({graphics:mask_2_graphics_519,x:270,y:310.7}).wait(1).to({graphics:mask_2_graphics_520,x:270,y:311.8}).wait(1).to({graphics:mask_2_graphics_521,x:270,y:312.9}).wait(1).to({graphics:mask_2_graphics_522,x:270,y:313.9}).wait(1).to({graphics:mask_2_graphics_523,x:270,y:315}).wait(1).to({graphics:mask_2_graphics_524,x:270,y:316.1}).wait(1).to({graphics:mask_2_graphics_525,x:270,y:317.2}).wait(1).to({graphics:mask_2_graphics_526,x:270,y:318.3}).wait(1).to({graphics:mask_2_graphics_527,x:270,y:319.4}).wait(1).to({graphics:mask_2_graphics_528,x:270,y:320.5}).wait(1).to({graphics:mask_2_graphics_529,x:270,y:321.6}).wait(1).to({graphics:mask_2_graphics_530,x:270,y:322.7}).wait(1).to({graphics:mask_2_graphics_531,x:270,y:323.8}).wait(1).to({graphics:mask_2_graphics_532,x:270,y:324.9}).wait(1).to({graphics:mask_2_graphics_533,x:270,y:326}).wait(1).to({graphics:mask_2_graphics_534,x:270,y:327.1}).wait(1).to({graphics:mask_2_graphics_535,x:193,y:240.2}).wait(1).to({graphics:mask_2_graphics_536,x:301.1,y:343.2}).wait(1).to({graphics:mask_2_graphics_537,x:300,y:343.2}).wait(1).to({graphics:mask_2_graphics_538,x:299,y:343.2}).wait(1).to({graphics:mask_2_graphics_539,x:297.9,y:343.2}).wait(1).to({graphics:mask_2_graphics_540,x:296.8,y:343.2}).wait(1).to({graphics:mask_2_graphics_541,x:295.8,y:343.2}).wait(1).to({graphics:mask_2_graphics_542,x:294.7,y:343.2}).wait(1).to({graphics:mask_2_graphics_543,x:193,y:240.2}).wait(1).to({graphics:mask_2_graphics_544,x:289.7,y:343.2}).wait(1).to({graphics:mask_2_graphics_545,x:285.7,y:343.2}).wait(246));

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(20,1,1).p("AJ6ygQg9CEg7CDQg8CGg9CHQg8CDhCCAQhBB9g9B9Qg/CDg5CDQg6CJg+CGQg9CGg/CFQg8CChBB/QhECFh4BZQgsAhg1AQ");
	this.shape_3.setTransform(259.9,349.5);
	this.shape_3._off = true;

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(450).to({_off:false},0).wait(341));

	// Layer 15
	this.instance_3 = new lib.ar1("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(150.2,154.1,1,1,0,125.8,-54.2,-0.8,0.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).wait(782));

	// Layer 7 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_199 = new cjs.Graphics().p("AGSZZIE/nrIJgGLIlAHrg");
	var mask_3_graphics_200 = new cjs.Graphics().p("AnUA5IFLn8IJeGMIlLH6g");
	var mask_3_graphics_201 = new cjs.Graphics().p("AnZBBIFVoMIJeGLIlVIMg");
	var mask_3_graphics_202 = new cjs.Graphics().p("AneBJIFgocIJdGLIlgIcg");
	var mask_3_graphics_203 = new cjs.Graphics().p("AnkBRIFrosIJeGLIlrIsg");
	var mask_3_graphics_204 = new cjs.Graphics().p("AnpBaIF1o9IJeGLIl1I8g");
	var mask_3_graphics_205 = new cjs.Graphics().p("AnvBiIGBpOIJeGLImBJOg");
	var mask_3_graphics_206 = new cjs.Graphics().p("An0BqIGLpeIJeGLImLJeg");
	var mask_3_graphics_207 = new cjs.Graphics().p("An5ByIGWpuIJdGLImWJug");
	var mask_3_graphics_208 = new cjs.Graphics().p("An/B7IGhqAIJeGLImhJ/g");
	var mask_3_graphics_209 = new cjs.Graphics().p("AoECDIGrqQIJeGLImrKQg");
	var mask_3_graphics_210 = new cjs.Graphics().p("AoJCLIG1qgIJfGLIm3Kgg");
	var mask_3_graphics_211 = new cjs.Graphics().p("AoPCUIHBqxIJeGLInBKwg");
	var mask_3_graphics_212 = new cjs.Graphics().p("AoUCcIHLrCIJeGLInLLCg");
	var mask_3_graphics_213 = new cjs.Graphics().p("AoaCkIHXrSIJeGLInXLSg");
	var mask_3_graphics_214 = new cjs.Graphics().p("AofCsIHhriIJeGLInhLig");
	var mask_3_graphics_215 = new cjs.Graphics().p("AokC1IHrrzIJfGKIntLzg");
	var mask_3_graphics_216 = new cjs.Graphics().p("AoqC9IH3sEIJeGLIn3MEg");
	var mask_3_graphics_217 = new cjs.Graphics().p("AovDFIIBsUIJeGLIoBMUg");
	var mask_3_graphics_218 = new cjs.Graphics().p("Ao0DNIILskIJeGLIoMMkg");
	var mask_3_graphics_219 = new cjs.Graphics().p("Ao6DWIIXs2IJeGLIoXM1g");
	var mask_3_graphics_220 = new cjs.Graphics().p("Ao/DeIIhtGIJeGLIohNGg");
	var mask_3_graphics_221 = new cjs.Graphics().p("ApEDmIIstWIJeGLIotNWg");
	var mask_3_graphics_222 = new cjs.Graphics().p("ApKDuII3tmIJeGLIo3Nmg");
	var mask_3_graphics_223 = new cjs.Graphics().p("ApPD3IJBt3IJeGLIpBN2g");
	var mask_3_graphics_224 = new cjs.Graphics().p("ApVD/IJNuIIJeGLIpNOIg");
	var mask_3_graphics_225 = new cjs.Graphics().p("ApaEHIJXuYIJeGLIpXOYg");
	var mask_3_graphics_226 = new cjs.Graphics().p("ApfEPIJhuoIJfGLIpiOog");
	var mask_3_graphics_227 = new cjs.Graphics().p("AplEYIJsu5IJfGKIpsO5g");
	var mask_3_graphics_228 = new cjs.Graphics().p("ApqEgIJ2vKIJfGLIp2PKg");
	var mask_3_graphics_229 = new cjs.Graphics().p("ApvEoIKAvaIJgGLIqCPag");
	var mask_3_graphics_230 = new cjs.Graphics().p("Ap1EwIKMvqIJfGLIqMPqg");
	var mask_3_graphics_231 = new cjs.Graphics().p("Ap6E5IKWv8IJfGLIqWP7g");
	var mask_3_graphics_232 = new cjs.Graphics().p("AqAFBIKiwMIJfGLIqiQMg");
	var mask_3_graphics_233 = new cjs.Graphics().p("AqFFJIKswcIJfGLIqsQcg");
	var mask_3_graphics_234 = new cjs.Graphics().p("AqKFRIK2wsIJgGLIq4Qsg");
	var mask_3_graphics_235 = new cjs.Graphics().p("AqQFaILCw9IJfGLIrCQ8g");
	var mask_3_graphics_236 = new cjs.Graphics().p("AqVFiILMxOIJfGLIrMROg");
	var mask_3_graphics_237 = new cjs.Graphics().p("AqaFqILXxeIJeGLIrXReg");
	var mask_3_graphics_238 = new cjs.Graphics().p("AqgFzILixwIJfGLIriRvg");
	var mask_3_graphics_239 = new cjs.Graphics().p("AqlF7ILsyAIJfGLIrsSAg");
	var mask_3_graphics_240 = new cjs.Graphics().p("AqqGDIL2yQIJgGLIr4SQg");
	var mask_3_graphics_241 = new cjs.Graphics().p("AqwGLIMCygIJfGLIsCSgg");
	var mask_3_graphics_242 = new cjs.Graphics().p("Aq1GUIMMyyIJfGMIsMSwg");
	var mask_3_graphics_243 = new cjs.Graphics().p("Aq7GcIMYzCIJfGLIsYTCg");
	var mask_3_graphics_244 = new cjs.Graphics().p("ArAGkIMizSIJfGLIsiTSg");
	var mask_3_graphics_245 = new cjs.Graphics().p("ArFGsIMsziIJgGLIsuTig");
	var mask_3_graphics_246 = new cjs.Graphics().p("ArLG1IM4zzIJfGLIs4Tyg");
	var mask_3_graphics_247 = new cjs.Graphics().p("ArQG9INC0EIJfGLItCUEg");
	var mask_3_graphics_248 = new cjs.Graphics().p("ArVHFINN0UIJeGLItNUUg");
	var mask_3_graphics_249 = new cjs.Graphics().p("ArbHNINY0kIJfGLItYUkg");
	var mask_3_graphics_250 = new cjs.Graphics().p("ArgHWINi02IJfGLItiU1g");
	var mask_3_graphics_251 = new cjs.Graphics().p("ArmHeINu1GIJfGLItuVGg");
	var mask_3_graphics_252 = new cjs.Graphics().p("ArrHmIN41WIJfGLIt4VWg");
	var mask_3_graphics_253 = new cjs.Graphics().p("ArwHuIOD1mIJeGLIuDVmg");
	var mask_3_graphics_254 = new cjs.Graphics().p("Ar2H3IOO13IJfGLIuOV2g");
	var mask_3_graphics_255 = new cjs.Graphics().p("Ar7H/IOY2IIJfGLIuYWIg");
	var mask_3_graphics_256 = new cjs.Graphics().p("AsAIHIOi2YIJgGLIukWYg");
	var mask_3_graphics_257 = new cjs.Graphics().p("AsGIPIOu2oIJfGLIuuWog");
	var mask_3_graphics_258 = new cjs.Graphics().p("AsLIYIO425IJfGLIu4W4g");
	var mask_3_graphics_259 = new cjs.Graphics().p("AsQIgIPD3KIJeGLIvDXKg");
	var mask_3_graphics_260 = new cjs.Graphics().p("AsWIoIPO3aIJfGLIvOXag");
	var mask_3_graphics_261 = new cjs.Graphics().p("AsbIwIPY3qIJfGLIvYXqg");
	var mask_3_graphics_262 = new cjs.Graphics().p("AshI5IPk38IJfGLIvkX8g");
	var mask_3_graphics_263 = new cjs.Graphics().p("AsmJBIPu4MIJfGLIvuYMg");
	var mask_3_graphics_264 = new cjs.Graphics().p("AsrJJIP54cIJeGLIv5Ycg");
	var mask_3_graphics_265 = new cjs.Graphics().p("AsxJSIQE4tIJfGLIwEYsg");
	var mask_3_graphics_266 = new cjs.Graphics().p("As2JaIQO4+IJfGLIwOY+g");
	var mask_3_graphics_267 = new cjs.Graphics().p("As7JiIQY5OIJgGLIwaZOg");
	var mask_3_graphics_268 = new cjs.Graphics().p("AtBJqIQk5eIJfGLIwkZeg");
	var mask_3_graphics_269 = new cjs.Graphics().p("AtGJzIQu5wIJfGLIwuZvg");
	var mask_3_graphics_270 = new cjs.Graphics().p("AtMJ7IQ66AIJfGLIw6aAg");
	var mask_3_graphics_271 = new cjs.Graphics().p("AtRKDIRE6QIJfGLIxEaQg");
	var mask_3_graphics_272 = new cjs.Graphics().p("AtWKLIRO6gIJgGLIxQagg");
	var mask_3_graphics_273 = new cjs.Graphics().p("AtcKUIRZ6yIJgGLIxZaxg");
	var mask_3_graphics_274 = new cjs.Graphics().p("AthKcIRk7CIJfGLIxkbCg");
	var mask_3_graphics_275 = new cjs.Graphics().p("AtmKkIRu7SIJfGLIxubSg");
	var mask_3_graphics_276 = new cjs.Graphics().p("AtsKsIR67iIJeGLIx4big");
	var mask_3_graphics_277 = new cjs.Graphics().p("AtxK1ISE7zIJfGLIyEbyg");
	var mask_3_graphics_278 = new cjs.Graphics().p("At2K9ISO8EIJfGLIyOcEg");
	var mask_3_graphics_279 = new cjs.Graphics().p("At8LFISa8UIJfGLIyacUg");
	var mask_3_graphics_280 = new cjs.Graphics().p("AuBLNISk8kIJfGLIykckg");
	var mask_3_graphics_281 = new cjs.Graphics().p("AuHLWISw82IJeGLIyuc1g");
	var mask_3_graphics_282 = new cjs.Graphics().p("AuMLeIS69GIJfGLIy6dGg");
	var mask_3_graphics_283 = new cjs.Graphics().p("AuRLmITE9WIJfGLIzEdWg");
	var mask_3_graphics_284 = new cjs.Graphics().p("AuXLuITP9mIJgGLIzPdmg");
	var mask_3_graphics_285 = new cjs.Graphics().p("AucL3ITa94IJfGLIzad4g");
	var mask_3_graphics_286 = new cjs.Graphics().p("AuhL/ITk+IIJfGLIzkeIg");
	var mask_3_graphics_287 = new cjs.Graphics().p("AunMHITw+YIJfGLIzweYg");
	var mask_3_graphics_288 = new cjs.Graphics().p("AusMQIT6+pIJfGKIz6epg");
	var mask_3_graphics_289 = new cjs.Graphics().p("AuyMYIUF+6IJgGLI0Fe6g");
	var mask_3_graphics_290 = new cjs.Graphics().p("Au3MgIUQ/KIJfGLI0QfKg");
	var mask_3_graphics_291 = new cjs.Graphics().p("Au8MoIUa/aIJfGLI0afag");
	var mask_3_graphics_292 = new cjs.Graphics().p("AvCMxIUm/sIJeGLI0kfrg");
	var mask_3_graphics_293 = new cjs.Graphics().p("AvHM5IUw/8IJfGLI0wf8g");
	var mask_3_graphics_294 = new cjs.Graphics().p("AvMNBMAU6ggMIJfGLMgU6AgMg");
	var mask_3_graphics_295 = new cjs.Graphics().p("AvSNJMAVFggcIJgGLMgVFAgcg");
	var mask_3_graphics_296 = new cjs.Graphics().p("AvXNSMAVQggtIJfGLMgVQAgsg");
	var mask_3_graphics_297 = new cjs.Graphics().p("AvcNaMAVagg+IJfGLMgVaAg+g");
	var mask_3_graphics_298 = new cjs.Graphics().p("AviNiMAVmghOIJfGLMgVmAhOg");
	var mask_3_graphics_299 = new cjs.Graphics().p("AvnNqMAVwgheIJfGLMgVwAheg");
	var mask_3_graphics_300 = new cjs.Graphics().p("AvtNzMAV7ghvIJgGKMgV7Ahvg");
	var mask_3_graphics_301 = new cjs.Graphics().p("AvyN7MAWGgiAIJfGLMgWGAiAg");
	var mask_3_graphics_302 = new cjs.Graphics().p("Av3ODMAWQgiQIJfGLMgWQAiQg");
	var mask_3_graphics_303 = new cjs.Graphics().p("Av9OLMAWcgigIJeGLMgWaAigg");
	var mask_3_graphics_304 = new cjs.Graphics().p("AwCOUMAWmgiyIJfGLMgWmAixg");
	var mask_3_graphics_305 = new cjs.Graphics().p("AwHOcMAWwgjCIJfGLMgWwAjCg");
	var mask_3_graphics_306 = new cjs.Graphics().p("AwNOkMAW8gjSIJfGLMgW8AjSg");
	var mask_3_graphics_307 = new cjs.Graphics().p("AwSOsMAXGgjiIJfGLMgXGAjig");
	var mask_3_graphics_308 = new cjs.Graphics().p("AwYO1MAXSgjzIJeGLMgXQAjyg");
	var mask_3_graphics_309 = new cjs.Graphics().p("AwdO9MAXcgkEIJfGLMgXcAkEg");
	var mask_3_graphics_310 = new cjs.Graphics().p("AwiPFMAXmgkUIJfGLMgXmAkUg");
	var mask_3_graphics_311 = new cjs.Graphics().p("AwoPOMAXxgkmIJgGLMgXxAklg");
	var mask_3_graphics_312 = new cjs.Graphics().p("AwtPWMAX8gk2IJfGLMgX8Ak2g");
	var mask_3_graphics_313 = new cjs.Graphics().p("AwyPeMAYGglGIJfGLMgYGAlGg");
	var mask_3_graphics_314 = new cjs.Graphics().p("Aw4PmMAYSglWIJeGLMgYQAlWg");
	var mask_3_graphics_315 = new cjs.Graphics().p("Aw9PvMAYcglnIJfGLMgYcAlmg");
	var mask_3_graphics_316 = new cjs.Graphics().p("AxCP3MAYmgl4IJfGLMgYmAl4g");
	var mask_3_graphics_317 = new cjs.Graphics().p("AxIP/MAYygmIIJfGLMgYyAmIg");
	var mask_3_graphics_318 = new cjs.Graphics().p("AxNQHMAY8gmYIJfGLMgY8AmYg");
	var mask_3_graphics_319 = new cjs.Graphics().p("AxTQQMAZHgmpIJfGLMgZGAmog");
	var mask_3_graphics_320 = new cjs.Graphics().p("AxYQYMAZSgm6IJfGLMgZSAm6g");
	var mask_3_graphics_321 = new cjs.Graphics().p("AxdQgMAZcgnKIJfGLMgZcAnKg");
	var mask_3_graphics_322 = new cjs.Graphics().p("AxjQoMAZognaIJeGLMgZmAnag");
	var mask_3_graphics_323 = new cjs.Graphics().p("AxoQxMAZygnsIJfGLMgZyAnrg");
	var mask_3_graphics_324 = new cjs.Graphics().p("AxtQ5MAZ8gn8IJfGLMgZ8An8g");
	var mask_3_graphics_325 = new cjs.Graphics().p("AxzRBMAaIgoMIJfGLMgaIAoMg");
	var mask_3_graphics_326 = new cjs.Graphics().p("Ax4RJMAaSgocIJfGLMgaSAocg");
	var mask_3_graphics_327 = new cjs.Graphics().p("Ax+RSMAaegouIJeGMMgacAosg");
	var mask_3_graphics_328 = new cjs.Graphics().p("AyDRaMAaogo+IJfGLMgaoAo+g");
	var mask_3_graphics_329 = new cjs.Graphics().p("AyIRiMAaygpOIJfGLMgayApOg");
	var mask_3_graphics_330 = new cjs.Graphics().p("AyORqMAa9gpeIJgGLMga9Apeg");
	var mask_3_graphics_331 = new cjs.Graphics().p("AyTRzMAbIgpvIJfGLMgbIApug");
	var mask_3_graphics_332 = new cjs.Graphics().p("AyYR7MAbSgqAIJfGLMgbSAqAg");
	var mask_3_graphics_333 = new cjs.Graphics().p("AyeSDMAbegqQIJeGLMgbcAqQg");
	var mask_3_graphics_334 = new cjs.Graphics().p("AyjSLMAbogqgIJfGLMgboAqgg");
	var mask_3_graphics_335 = new cjs.Graphics().p("AyoSUMAbygqyIJfGLMgbyAqxg");
	var mask_3_graphics_336 = new cjs.Graphics().p("AyuScMAb+grCIJfGLMgb+ArCg");
	var mask_3_graphics_337 = new cjs.Graphics().p("AyzSkMAcIgrSIJfGLMgcIArSg");
	var mask_3_graphics_338 = new cjs.Graphics().p("Ay5StMAcUgrjIJeGLMgcSArig");
	var mask_3_graphics_339 = new cjs.Graphics().p("Ay+S1MAcegr0IJfGLMgceAr0g");
	var mask_3_graphics_340 = new cjs.Graphics().p("AzDS9MAcogsEIJfGLMgcoAsEg");
	var mask_3_graphics_341 = new cjs.Graphics().p("AzJTFMAczgsUIJgGLMgczAsUg");
	var mask_3_graphics_342 = new cjs.Graphics().p("AzOTOMAc+gsmIJfGLMgc+Aslg");
	var mask_3_graphics_343 = new cjs.Graphics().p("AzTTWMAdIgs2IJfGLMgdIAs2g");
	var mask_3_graphics_344 = new cjs.Graphics().p("AzZTeMAdUgtGIJfGLMgdUAtGg");
	var mask_3_graphics_345 = new cjs.Graphics().p("AzeTmMAdegtWIJfGLMgdeAtWg");
	var mask_3_graphics_346 = new cjs.Graphics().p("AzkTvMAdpgtoIJgGLMgdpAtng");
	var mask_3_graphics_347 = new cjs.Graphics().p("AmIZZMAd0gt3IJfGLMgd0At3g");
	var mask_3_graphics_348 = new cjs.Graphics().p("A0CUdMAemgvFIJfGLMgemAvGg");
	var mask_3_graphics_349 = new cjs.Graphics().p("Am6ZZMAfYgwRIJfGKMgfZAwSg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(199).to({graphics:mask_3_graphics_199,x:132.9,y:202}).wait(1).to({graphics:mask_3_graphics_200,x:219.9,y:358.9}).wait(1).to({graphics:mask_3_graphics_201,x:220.5,y:358.1}).wait(1).to({graphics:mask_3_graphics_202,x:221,y:357.3}).wait(1).to({graphics:mask_3_graphics_203,x:221.6,y:356.4}).wait(1).to({graphics:mask_3_graphics_204,x:222.1,y:355.6}).wait(1).to({graphics:mask_3_graphics_205,x:222.6,y:354.8}).wait(1).to({graphics:mask_3_graphics_206,x:223.2,y:354}).wait(1).to({graphics:mask_3_graphics_207,x:223.7,y:353.1}).wait(1).to({graphics:mask_3_graphics_208,x:224.2,y:352.3}).wait(1).to({graphics:mask_3_graphics_209,x:224.8,y:351.5}).wait(1).to({graphics:mask_3_graphics_210,x:225.3,y:350.7}).wait(1).to({graphics:mask_3_graphics_211,x:225.9,y:349.8}).wait(1).to({graphics:mask_3_graphics_212,x:226.4,y:349}).wait(1).to({graphics:mask_3_graphics_213,x:226.9,y:348.2}).wait(1).to({graphics:mask_3_graphics_214,x:227.5,y:347.3}).wait(1).to({graphics:mask_3_graphics_215,x:228,y:346.5}).wait(1).to({graphics:mask_3_graphics_216,x:228.5,y:345.7}).wait(1).to({graphics:mask_3_graphics_217,x:229.1,y:344.9}).wait(1).to({graphics:mask_3_graphics_218,x:229.6,y:344}).wait(1).to({graphics:mask_3_graphics_219,x:230.1,y:343.2}).wait(1).to({graphics:mask_3_graphics_220,x:230.7,y:342.4}).wait(1).to({graphics:mask_3_graphics_221,x:231.2,y:341.6}).wait(1).to({graphics:mask_3_graphics_222,x:231.8,y:340.7}).wait(1).to({graphics:mask_3_graphics_223,x:232.3,y:339.9}).wait(1).to({graphics:mask_3_graphics_224,x:232.8,y:339.1}).wait(1).to({graphics:mask_3_graphics_225,x:233.4,y:338.3}).wait(1).to({graphics:mask_3_graphics_226,x:233.9,y:337.4}).wait(1).to({graphics:mask_3_graphics_227,x:234.4,y:336.6}).wait(1).to({graphics:mask_3_graphics_228,x:235,y:335.8}).wait(1).to({graphics:mask_3_graphics_229,x:235.5,y:335}).wait(1).to({graphics:mask_3_graphics_230,x:236.1,y:334.1}).wait(1).to({graphics:mask_3_graphics_231,x:236.6,y:333.3}).wait(1).to({graphics:mask_3_graphics_232,x:237.1,y:332.5}).wait(1).to({graphics:mask_3_graphics_233,x:237.7,y:331.7}).wait(1).to({graphics:mask_3_graphics_234,x:238.2,y:330.8}).wait(1).to({graphics:mask_3_graphics_235,x:238.7,y:330}).wait(1).to({graphics:mask_3_graphics_236,x:239.3,y:329.2}).wait(1).to({graphics:mask_3_graphics_237,x:239.8,y:328.3}).wait(1).to({graphics:mask_3_graphics_238,x:240.3,y:327.5}).wait(1).to({graphics:mask_3_graphics_239,x:240.9,y:326.7}).wait(1).to({graphics:mask_3_graphics_240,x:241.4,y:325.9}).wait(1).to({graphics:mask_3_graphics_241,x:242,y:325}).wait(1).to({graphics:mask_3_graphics_242,x:242.5,y:324.2}).wait(1).to({graphics:mask_3_graphics_243,x:243,y:323.4}).wait(1).to({graphics:mask_3_graphics_244,x:243.6,y:322.6}).wait(1).to({graphics:mask_3_graphics_245,x:244.1,y:321.7}).wait(1).to({graphics:mask_3_graphics_246,x:244.6,y:320.9}).wait(1).to({graphics:mask_3_graphics_247,x:245.2,y:320.1}).wait(1).to({graphics:mask_3_graphics_248,x:245.7,y:319.3}).wait(1).to({graphics:mask_3_graphics_249,x:246.3,y:318.4}).wait(1).to({graphics:mask_3_graphics_250,x:246.8,y:317.6}).wait(1).to({graphics:mask_3_graphics_251,x:247.3,y:316.8}).wait(1).to({graphics:mask_3_graphics_252,x:247.9,y:316}).wait(1).to({graphics:mask_3_graphics_253,x:248.4,y:315.1}).wait(1).to({graphics:mask_3_graphics_254,x:248.9,y:314.3}).wait(1).to({graphics:mask_3_graphics_255,x:249.5,y:313.5}).wait(1).to({graphics:mask_3_graphics_256,x:250,y:312.7}).wait(1).to({graphics:mask_3_graphics_257,x:250.5,y:311.8}).wait(1).to({graphics:mask_3_graphics_258,x:251.1,y:311}).wait(1).to({graphics:mask_3_graphics_259,x:251.6,y:310.2}).wait(1).to({graphics:mask_3_graphics_260,x:252.2,y:309.4}).wait(1).to({graphics:mask_3_graphics_261,x:252.7,y:308.5}).wait(1).to({graphics:mask_3_graphics_262,x:253.2,y:307.7}).wait(1).to({graphics:mask_3_graphics_263,x:253.8,y:306.9}).wait(1).to({graphics:mask_3_graphics_264,x:254.3,y:306}).wait(1).to({graphics:mask_3_graphics_265,x:254.8,y:305.2}).wait(1).to({graphics:mask_3_graphics_266,x:255.4,y:304.4}).wait(1).to({graphics:mask_3_graphics_267,x:255.9,y:303.6}).wait(1).to({graphics:mask_3_graphics_268,x:256.5,y:302.7}).wait(1).to({graphics:mask_3_graphics_269,x:257,y:301.9}).wait(1).to({graphics:mask_3_graphics_270,x:257.5,y:301.1}).wait(1).to({graphics:mask_3_graphics_271,x:258.1,y:300.3}).wait(1).to({graphics:mask_3_graphics_272,x:258.6,y:299.4}).wait(1).to({graphics:mask_3_graphics_273,x:259.2,y:298.6}).wait(1).to({graphics:mask_3_graphics_274,x:259.7,y:297.8}).wait(1).to({graphics:mask_3_graphics_275,x:260.2,y:297}).wait(1).to({graphics:mask_3_graphics_276,x:260.8,y:296.1}).wait(1).to({graphics:mask_3_graphics_277,x:261.3,y:295.3}).wait(1).to({graphics:mask_3_graphics_278,x:261.8,y:294.5}).wait(1).to({graphics:mask_3_graphics_279,x:262.4,y:293.7}).wait(1).to({graphics:mask_3_graphics_280,x:262.9,y:292.8}).wait(1).to({graphics:mask_3_graphics_281,x:263.5,y:292}).wait(1).to({graphics:mask_3_graphics_282,x:264,y:291.2}).wait(1).to({graphics:mask_3_graphics_283,x:264.5,y:290.4}).wait(1).to({graphics:mask_3_graphics_284,x:265.1,y:289.5}).wait(1).to({graphics:mask_3_graphics_285,x:265.6,y:288.7}).wait(1).to({graphics:mask_3_graphics_286,x:266.1,y:287.9}).wait(1).to({graphics:mask_3_graphics_287,x:266.7,y:287}).wait(1).to({graphics:mask_3_graphics_288,x:267.2,y:286.2}).wait(1).to({graphics:mask_3_graphics_289,x:267.8,y:285.4}).wait(1).to({graphics:mask_3_graphics_290,x:268.3,y:284.6}).wait(1).to({graphics:mask_3_graphics_291,x:268.8,y:283.7}).wait(1).to({graphics:mask_3_graphics_292,x:269.4,y:282.9}).wait(1).to({graphics:mask_3_graphics_293,x:269.9,y:282.1}).wait(1).to({graphics:mask_3_graphics_294,x:270.4,y:281.3}).wait(1).to({graphics:mask_3_graphics_295,x:271,y:280.4}).wait(1).to({graphics:mask_3_graphics_296,x:271.5,y:279.6}).wait(1).to({graphics:mask_3_graphics_297,x:272,y:278.8}).wait(1).to({graphics:mask_3_graphics_298,x:272.6,y:278}).wait(1).to({graphics:mask_3_graphics_299,x:273.1,y:277.1}).wait(1).to({graphics:mask_3_graphics_300,x:273.7,y:276.3}).wait(1).to({graphics:mask_3_graphics_301,x:274.2,y:275.5}).wait(1).to({graphics:mask_3_graphics_302,x:274.7,y:274.7}).wait(1).to({graphics:mask_3_graphics_303,x:275.3,y:273.8}).wait(1).to({graphics:mask_3_graphics_304,x:275.8,y:273}).wait(1).to({graphics:mask_3_graphics_305,x:276.3,y:272.2}).wait(1).to({graphics:mask_3_graphics_306,x:276.9,y:271.4}).wait(1).to({graphics:mask_3_graphics_307,x:277.4,y:270.5}).wait(1).to({graphics:mask_3_graphics_308,x:278,y:269.7}).wait(1).to({graphics:mask_3_graphics_309,x:278.5,y:268.9}).wait(1).to({graphics:mask_3_graphics_310,x:279,y:268.1}).wait(1).to({graphics:mask_3_graphics_311,x:279.6,y:267.2}).wait(1).to({graphics:mask_3_graphics_312,x:280.1,y:266.4}).wait(1).to({graphics:mask_3_graphics_313,x:280.6,y:265.6}).wait(1).to({graphics:mask_3_graphics_314,x:281.2,y:264.7}).wait(1).to({graphics:mask_3_graphics_315,x:281.7,y:263.9}).wait(1).to({graphics:mask_3_graphics_316,x:282.2,y:263.1}).wait(1).to({graphics:mask_3_graphics_317,x:282.8,y:262.3}).wait(1).to({graphics:mask_3_graphics_318,x:283.3,y:261.4}).wait(1).to({graphics:mask_3_graphics_319,x:283.9,y:260.6}).wait(1).to({graphics:mask_3_graphics_320,x:284.4,y:259.8}).wait(1).to({graphics:mask_3_graphics_321,x:284.9,y:259}).wait(1).to({graphics:mask_3_graphics_322,x:285.5,y:258.1}).wait(1).to({graphics:mask_3_graphics_323,x:286,y:257.3}).wait(1).to({graphics:mask_3_graphics_324,x:286.5,y:256.5}).wait(1).to({graphics:mask_3_graphics_325,x:287.1,y:255.7}).wait(1).to({graphics:mask_3_graphics_326,x:287.6,y:254.8}).wait(1).to({graphics:mask_3_graphics_327,x:288.2,y:254}).wait(1).to({graphics:mask_3_graphics_328,x:288.7,y:253.2}).wait(1).to({graphics:mask_3_graphics_329,x:289.2,y:252.4}).wait(1).to({graphics:mask_3_graphics_330,x:289.8,y:251.5}).wait(1).to({graphics:mask_3_graphics_331,x:290.3,y:250.7}).wait(1).to({graphics:mask_3_graphics_332,x:290.8,y:249.9}).wait(1).to({graphics:mask_3_graphics_333,x:291.4,y:249.1}).wait(1).to({graphics:mask_3_graphics_334,x:291.9,y:248.2}).wait(1).to({graphics:mask_3_graphics_335,x:292.4,y:247.4}).wait(1).to({graphics:mask_3_graphics_336,x:293,y:246.6}).wait(1).to({graphics:mask_3_graphics_337,x:293.5,y:245.7}).wait(1).to({graphics:mask_3_graphics_338,x:294.1,y:244.9}).wait(1).to({graphics:mask_3_graphics_339,x:294.6,y:244.1}).wait(1).to({graphics:mask_3_graphics_340,x:295.1,y:243.3}).wait(1).to({graphics:mask_3_graphics_341,x:295.7,y:242.4}).wait(1).to({graphics:mask_3_graphics_342,x:296.2,y:241.6}).wait(1).to({graphics:mask_3_graphics_343,x:296.7,y:240.8}).wait(1).to({graphics:mask_3_graphics_344,x:297.3,y:240}).wait(1).to({graphics:mask_3_graphics_345,x:297.8,y:239.1}).wait(1).to({graphics:mask_3_graphics_346,x:298.4,y:238.3}).wait(1).to({graphics:mask_3_graphics_347,x:212.3,y:202}).wait(1).to({graphics:mask_3_graphics_348,x:301.4,y:233.7}).wait(1).to({graphics:mask_3_graphics_349,x:217.3,y:202}).wait(442));

	// Layer 6
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(20,1,1).p("AxxykQIWjbDEEzQCvEShjEgQgKAdgNAeQgCAFgCAFQhJC7hzDDQgPAZgQAaQkiHShjGEQhpGaEBAvQEBAwHCm+QHBm+ETpHQETpHD2oG");
	this.shape_4.setTransform(281,210.2);
	this.shape_4._off = true;

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(199).to({_off:false},0).wait(592));

	// Layer 9 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_169 = new cjs.Graphics().p("AEdUtIJbkjIClFWIpbEjg");
	var mask_4_graphics_170 = new cjs.Graphics().p("AligsIIwkGICVFfIoxEGg");
	var mask_4_graphics_171 = new cjs.Graphics().p("AlGhAIIIjpICFFqIoIDpg");
	var mask_4_graphics_172 = new cjs.Graphics().p("AkphTIHfjMIB0FzInfDMg");
	var mask_4_graphics_173 = new cjs.Graphics().p("AkMhnIG2iuIBjF9Im2Cvg");
	var mask_4_graphics_174 = new cjs.Graphics().p("Ajvh6IGMiSIBTGHImNCSg");
	var mask_4_graphics_175 = new cjs.Graphics().p("AjTiOIFkh0IBCGQIljB1g");
	var mask_4_graphics_176 = new cjs.Graphics().p("Ai2ihIE7hYIAyGbIk7BYg");
	var mask_4_graphics_177 = new cjs.Graphics().p("AiZi1IESg7IAhGmIkSA6g");
	var mask_4_graphics_178 = new cjs.Graphics().p("Ah8jIIDpgeIAQGwIjoAdg");
	var mask_4_graphics_179 = new cjs.Graphics().p("AhfDdIAAm5IC/AAIAAG5g");
	var mask_4_graphics_180 = new cjs.Graphics().p("AhuDjIAAnFIDdAAIAAHFg");
	var mask_4_graphics_181 = new cjs.Graphics().p("Ah9DpIAAnRID7AAIAAHRg");
	var mask_4_graphics_182 = new cjs.Graphics().p("AiMDuIAAnbIEZAAIAAHbg");
	var mask_4_graphics_183 = new cjs.Graphics().p("AibD0IAAnnIE3AAIAAHng");
	var mask_4_graphics_184 = new cjs.Graphics().p("AiqD6IAAnzIFVAAIAAHzg");
	var mask_4_graphics_185 = new cjs.Graphics().p("Ai5D/IAAn9IFzAAIAAH9g");
	var mask_4_graphics_186 = new cjs.Graphics().p("AjIEFIAAoJIGRAAIAAIJg");
	var mask_4_graphics_187 = new cjs.Graphics().p("AjXELIAAoVIGvAAIAAIVg");
	var mask_4_graphics_188 = new cjs.Graphics().p("AjlEQIAAofIHLAAIAAIfg");
	var mask_4_graphics_189 = new cjs.Graphics().p("Aj1EWIAAorIHrAAIAAIrg");
	var mask_4_graphics_190 = new cjs.Graphics().p("AkEEcIAAo3IIJAAIAAI3g");
	var mask_4_graphics_191 = new cjs.Graphics().p("AkTEhIAApBIImAAIAAJBg");
	var mask_4_graphics_192 = new cjs.Graphics().p("AkhEnIAApNIJDAAIAAJNg");
	var mask_4_graphics_193 = new cjs.Graphics().p("AkwEtIAApZIJhAAIAAJZg");
	var mask_4_graphics_194 = new cjs.Graphics().p("Ak/EyIAApkIJ/AAIAAJkg");
	var mask_4_graphics_195 = new cjs.Graphics().p("AlOE4IAApvIKdAAIAAJvg");
	var mask_4_graphics_196 = new cjs.Graphics().p("AldE+IAAp7IK7AAIAAJ7g");
	var mask_4_graphics_197 = new cjs.Graphics().p("AlsFDIAAqGILZAAIAAKGg");
	var mask_4_graphics_198 = new cjs.Graphics().p("Al7FJIAAqRIL3AAIAAKRg");
	var mask_4_graphics_199 = new cjs.Graphics().p("AFtcNIAAqeIMWAAIAAKeg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(169).to({graphics:mask_4_graphics_169,x:105.3,y:166.7}).wait(1).to({graphics:mask_4_graphics_170,x:173.1,y:303}).wait(1).to({graphics:mask_4_graphics_171,x:174,y:304.2}).wait(1).to({graphics:mask_4_graphics_172,x:174.9,y:305.4}).wait(1).to({graphics:mask_4_graphics_173,x:175.8,y:306.7}).wait(1).to({graphics:mask_4_graphics_174,x:176.7,y:307.9}).wait(1).to({graphics:mask_4_graphics_175,x:177.6,y:309.2}).wait(1).to({graphics:mask_4_graphics_176,x:178.5,y:310.4}).wait(1).to({graphics:mask_4_graphics_177,x:179.4,y:311.6}).wait(1).to({graphics:mask_4_graphics_178,x:180.3,y:312.8}).wait(1).to({graphics:mask_4_graphics_179,x:181.2,y:314.1}).wait(1).to({graphics:mask_4_graphics_180,x:181.7,y:314.8}).wait(1).to({graphics:mask_4_graphics_181,x:182.2,y:315.4}).wait(1).to({graphics:mask_4_graphics_182,x:182.8,y:316.1}).wait(1).to({graphics:mask_4_graphics_183,x:183.3,y:316.8}).wait(1).to({graphics:mask_4_graphics_184,x:183.8,y:317.4}).wait(1).to({graphics:mask_4_graphics_185,x:184.3,y:318.1}).wait(1).to({graphics:mask_4_graphics_186,x:184.8,y:318.8}).wait(1).to({graphics:mask_4_graphics_187,x:185.3,y:319.4}).wait(1).to({graphics:mask_4_graphics_188,x:185.9,y:320.1}).wait(1).to({graphics:mask_4_graphics_189,x:186.4,y:320.8}).wait(1).to({graphics:mask_4_graphics_190,x:186.9,y:321.5}).wait(1).to({graphics:mask_4_graphics_191,x:187.4,y:322.2}).wait(1).to({graphics:mask_4_graphics_192,x:187.9,y:322.8}).wait(1).to({graphics:mask_4_graphics_193,x:188.4,y:323.5}).wait(1).to({graphics:mask_4_graphics_194,x:189,y:324.2}).wait(1).to({graphics:mask_4_graphics_195,x:189.5,y:324.8}).wait(1).to({graphics:mask_4_graphics_196,x:190,y:325.5}).wait(1).to({graphics:mask_4_graphics_197,x:190.5,y:326.2}).wait(1).to({graphics:mask_4_graphics_198,x:191.1,y:326.8}).wait(1).to({graphics:mask_4_graphics_199,x:115.5,y:180.5}).wait(592));

	// Layer 8
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(20,1,1).p("AxxykQIWjbDEEzQCvEShjEgQgKAdgNAeQgCAFgCAFQhJC7hzDDQgPAZgQAaQkiHShjGEQhpGaEBAvQEBAwHCm+QHBm+ETpHQETpHD2oG");
	this.shape_5.setTransform(281,210.2);
	this.shape_5._off = true;

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(169).to({_off:false},0).wait(622));

	// Layer 5 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_89 = new cjs.Graphics().p("AKuIgIBcikIKPFvIhcCjg");
	var mask_5_graphics_90 = new cjs.Graphics().p("Al5hcIBli0IKOFtIhlC1g");
	var mask_5_graphics_91 = new cjs.Graphics().p("Al+hTIBvjGIKNFtIhuDGg");
	var mask_5_graphics_92 = new cjs.Graphics().p("AmDhLIB5jXIKNFuIh4DXg");
	var mask_5_graphics_93 = new cjs.Graphics().p("AmHhCICCjoIKNFtIiCDog");
	var mask_5_graphics_94 = new cjs.Graphics().p("AmMg6ICLj5IKOFuIiMD5g");
	var mask_5_graphics_95 = new cjs.Graphics().p("AmRgxICVkKIKOFtIiVEKg");
	var mask_5_graphics_96 = new cjs.Graphics().p("AmWgoICfkcIKNFtIieEcg");
	var mask_5_graphics_97 = new cjs.Graphics().p("AmaggICoksIKNFtIioEsg");
	var mask_5_graphics_98 = new cjs.Graphics().p("AmfgXICyk+IKNFtIiyE+g");
	var mask_5_graphics_99 = new cjs.Graphics().p("AmkgPIC7lPIKOFuIi8FPg");
	var mask_5_graphics_100 = new cjs.Graphics().p("AmpgGIDFlhIKOFuIjFFgg");
	var mask_5_graphics_101 = new cjs.Graphics().p("AmtACIDOlxIKNFvIjOFwg");
	var mask_5_graphics_102 = new cjs.Graphics().p("AmyAKIDYmCIKNFvIjYGCg");
	var mask_5_graphics_103 = new cjs.Graphics().p("Am3ATIDimTIKNFuIjiGTg");
	var mask_5_graphics_104 = new cjs.Graphics().p("Am8AbIDrmkIKOFvIjrGkg");
	var mask_5_graphics_105 = new cjs.Graphics().p("AnBAkID1m1IKOFuIj1G1g");
	var mask_5_graphics_106 = new cjs.Graphics().p("AnGAsID/nGIKNFvIj+HGg");
	var mask_5_graphics_107 = new cjs.Graphics().p("AnKA1IEInYIKNFvIkIHYg");
	var mask_5_graphics_108 = new cjs.Graphics().p("AnPA9IESnoIKNFvIkSHog");
	var mask_5_graphics_109 = new cjs.Graphics().p("AnUBGIEcn6IKNFvIkcH6g");
	var mask_5_graphics_110 = new cjs.Graphics().p("AnZBPIEmoLIKNFuIklILg");
	var mask_5_graphics_111 = new cjs.Graphics().p("AneBXIEvocIKOFvIkvIcg");
	var mask_5_graphics_112 = new cjs.Graphics().p("AnjBgIE5otIKOFuIk5Itg");
	var mask_5_graphics_113 = new cjs.Graphics().p("AnoBpIFDo/IKOFvIlDI+g");
	var mask_5_graphics_114 = new cjs.Graphics().p("AnsBxIFMpQIKNFvIlMJQg");
	var mask_5_graphics_115 = new cjs.Graphics().p("AnxB6IFWphIKNFvIlWJgg");
	var mask_5_graphics_116 = new cjs.Graphics().p("An2CCIFfpyIKOFvIlfJyg");
	var mask_5_graphics_117 = new cjs.Graphics().p("An7CLIFpqDIKOFuIlpKDg");
	var mask_5_graphics_118 = new cjs.Graphics().p("An/CTIFyqUIKNFvIlyKUg");
	var mask_5_graphics_119 = new cjs.Graphics().p("AoECcIF8qlIKNFuIl8Klg");
	var mask_5_graphics_120 = new cjs.Graphics().p("AoJClIGGq3IKNFuImGK3g");
	var mask_5_graphics_121 = new cjs.Graphics().p("AoOCtIGPrIIKOFvImPLIg");
	var mask_5_graphics_122 = new cjs.Graphics().p("AoSC2IGYrZIKOFuImZLZg");
	var mask_5_graphics_123 = new cjs.Graphics().p("AoXC+IGirqIKNFvImiLqg");
	var mask_5_graphics_124 = new cjs.Graphics().p("AocDHIGsr7IKNFuImsL7g");
	var mask_5_graphics_125 = new cjs.Graphics().p("AohDPIG2sMIKNFuIm1MNg");
	var mask_5_graphics_126 = new cjs.Graphics().p("AomDYIG/sdIKOFuIm/Mdg");
	var mask_5_graphics_127 = new cjs.Graphics().p("AorDhIHJsvIKOFuInJMvg");
	var mask_5_graphics_128 = new cjs.Graphics().p("AovDpIHStAIKNFvInSNAg");
	var mask_5_graphics_129 = new cjs.Graphics().p("Ao0DyIHctRIKNFuInbNRg");
	var mask_5_graphics_130 = new cjs.Graphics().p("Ao5D6IHmtiIKNFvInmNig");
	var mask_5_graphics_131 = new cjs.Graphics().p("Ao+EDIHvtzIKOFuInvN0g");
	var mask_5_graphics_132 = new cjs.Graphics().p("ApDELIH5uEIKOFuIn5OFg");
	var mask_5_graphics_133 = new cjs.Graphics().p("ApHEUIICuVIKNFuIoCOWg");
	var mask_5_graphics_134 = new cjs.Graphics().p("ApMEcIIMumIKNFuIoMOng");
	var mask_5_graphics_135 = new cjs.Graphics().p("ApRElIIWu4IKNFvIoWO4g");
	var mask_5_graphics_136 = new cjs.Graphics().p("ApWEuIIfvJIKOFuIofPJg");
	var mask_5_graphics_137 = new cjs.Graphics().p("ApaE2IIovaIKOFvIopPag");
	var mask_5_graphics_138 = new cjs.Graphics().p("ApfE/IIyvrIKNFuIoyPrg");
	var mask_5_graphics_139 = new cjs.Graphics().p("ApkFIII8v9IKNFuIo7P9g");
	var mask_5_graphics_140 = new cjs.Graphics().p("AppFQIJGwOIKNFvIpFQOg");
	var mask_5_graphics_141 = new cjs.Graphics().p("ApuFZIJPwfIKOFuIpPQfg");
	var mask_5_graphics_142 = new cjs.Graphics().p("ApzFiIJZwxIKOFuIpZQxg");
	var mask_5_graphics_143 = new cjs.Graphics().p("Ap3FqIJixCIKNFvIpiRBg");
	var mask_5_graphics_144 = new cjs.Graphics().p("Ap8FzIJsxTIKNFuIprRTg");
	var mask_5_graphics_145 = new cjs.Graphics().p("AqBF7IJ1xkIKOFvIp1Rkg");
	var mask_5_graphics_146 = new cjs.Graphics().p("AqGGEIJ/x1IKOFuIp/R1g");
	var mask_5_graphics_147 = new cjs.Graphics().p("AqLGMIKJyGIKOFvIqJSGg");
	var mask_5_graphics_148 = new cjs.Graphics().p("AqPGVIKRyXIKOFuIqRSXg");
	var mask_5_graphics_149 = new cjs.Graphics().p("AqUGdIKbyoIKOFuIqbSpg");
	var mask_5_graphics_150 = new cjs.Graphics().p("AqZGmIKky6IKPFvIqkS5g");
	var mask_5_graphics_151 = new cjs.Graphics().p("AqeGuIKuzKIKPFuIquTLg");
	var mask_5_graphics_152 = new cjs.Graphics().p("AqjG3IK4zcIKPFvIq4Tbg");
	var mask_5_graphics_153 = new cjs.Graphics().p("AqoHAILCztIKOFuIrBTtg");
	var mask_5_graphics_154 = new cjs.Graphics().p("AqsHIILLz+IKOFvIrLT+g");
	var mask_5_graphics_155 = new cjs.Graphics().p("AqxHRILU0PIKPFuIrVUPg");
	var mask_5_graphics_156 = new cjs.Graphics().p("Aq2HZILe0gIKPFvIrfUgg");
	var mask_5_graphics_157 = new cjs.Graphics().p("Aq7HiILo0yIKPFvIroUyg");
	var mask_5_graphics_158 = new cjs.Graphics().p("Aq/HqILx1CIKOFuIrxVDg");
	var mask_5_graphics_159 = new cjs.Graphics().p("ArEHzIL71UIKOFvIr7VUg");
	var mask_5_graphics_160 = new cjs.Graphics().p("ArJH8IME1lIKPFuIsFVlg");
	var mask_5_graphics_161 = new cjs.Graphics().p("ArOIFIMO13IKPFvIsOV2g");
	var mask_5_graphics_162 = new cjs.Graphics().p("ArTINIMY2HIKPFuIsYWIg");
	var mask_5_graphics_163 = new cjs.Graphics().p("ArXIVIMh2YIKOFvIshWYg");
	var mask_5_graphics_164 = new cjs.Graphics().p("ArcIeIMr2qIKOFvIsrWqg");
	var mask_5_graphics_165 = new cjs.Graphics().p("ArhInIM027IKPFuIs0W7g");
	var mask_5_graphics_166 = new cjs.Graphics().p("ArmIvIM+3MIKPFvIs+XMg");
	var mask_5_graphics_167 = new cjs.Graphics().p("ArrI4INI3dIKPFuItIXdg");
	var mask_5_graphics_168 = new cjs.Graphics().p("ArwJAINS3uIKOFvItRXug");
	var mask_5_graphics_169 = new cjs.Graphics().p("AhRTOINb4AIKPFtItcYBg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(89).to({graphics:mask_5_graphics_89,x:143.3,y:91}).wait(1).to({graphics:mask_5_graphics_90,x:248.7,y:156.4}).wait(1).to({graphics:mask_5_graphics_91,x:248.3,y:157.3}).wait(1).to({graphics:mask_5_graphics_92,x:247.8,y:158.1}).wait(1).to({graphics:mask_5_graphics_93,x:247.3,y:159}).wait(1).to({graphics:mask_5_graphics_94,x:246.8,y:159.8}).wait(1).to({graphics:mask_5_graphics_95,x:246.3,y:160.7}).wait(1).to({graphics:mask_5_graphics_96,x:245.9,y:161.6}).wait(1).to({graphics:mask_5_graphics_97,x:245.4,y:162.4}).wait(1).to({graphics:mask_5_graphics_98,x:244.9,y:163.3}).wait(1).to({graphics:mask_5_graphics_99,x:244.4,y:164.1}).wait(1).to({graphics:mask_5_graphics_100,x:243.9,y:165}).wait(1).to({graphics:mask_5_graphics_101,x:243.5,y:165.8}).wait(1).to({graphics:mask_5_graphics_102,x:243,y:166.7}).wait(1).to({graphics:mask_5_graphics_103,x:242.5,y:167.5}).wait(1).to({graphics:mask_5_graphics_104,x:242,y:168.4}).wait(1).to({graphics:mask_5_graphics_105,x:241.5,y:169.2}).wait(1).to({graphics:mask_5_graphics_106,x:241.1,y:170.1}).wait(1).to({graphics:mask_5_graphics_107,x:240.6,y:171}).wait(1).to({graphics:mask_5_graphics_108,x:240.1,y:171.8}).wait(1).to({graphics:mask_5_graphics_109,x:239.6,y:172.7}).wait(1).to({graphics:mask_5_graphics_110,x:239.2,y:173.5}).wait(1).to({graphics:mask_5_graphics_111,x:238.7,y:174.4}).wait(1).to({graphics:mask_5_graphics_112,x:238.2,y:175.2}).wait(1).to({graphics:mask_5_graphics_113,x:237.7,y:176.1}).wait(1).to({graphics:mask_5_graphics_114,x:237.2,y:177}).wait(1).to({graphics:mask_5_graphics_115,x:236.8,y:177.8}).wait(1).to({graphics:mask_5_graphics_116,x:236.3,y:178.7}).wait(1).to({graphics:mask_5_graphics_117,x:235.8,y:179.5}).wait(1).to({graphics:mask_5_graphics_118,x:235.3,y:180.4}).wait(1).to({graphics:mask_5_graphics_119,x:234.8,y:181.2}).wait(1).to({graphics:mask_5_graphics_120,x:234.4,y:182.1}).wait(1).to({graphics:mask_5_graphics_121,x:233.9,y:182.9}).wait(1).to({graphics:mask_5_graphics_122,x:233.4,y:183.8}).wait(1).to({graphics:mask_5_graphics_123,x:232.9,y:184.6}).wait(1).to({graphics:mask_5_graphics_124,x:232.4,y:185.5}).wait(1).to({graphics:mask_5_graphics_125,x:232,y:186.4}).wait(1).to({graphics:mask_5_graphics_126,x:231.5,y:187.2}).wait(1).to({graphics:mask_5_graphics_127,x:231,y:188.1}).wait(1).to({graphics:mask_5_graphics_128,x:230.5,y:188.9}).wait(1).to({graphics:mask_5_graphics_129,x:230.1,y:189.8}).wait(1).to({graphics:mask_5_graphics_130,x:229.6,y:190.6}).wait(1).to({graphics:mask_5_graphics_131,x:229.1,y:191.5}).wait(1).to({graphics:mask_5_graphics_132,x:228.6,y:192.4}).wait(1).to({graphics:mask_5_graphics_133,x:228.1,y:193.2}).wait(1).to({graphics:mask_5_graphics_134,x:227.7,y:194.1}).wait(1).to({graphics:mask_5_graphics_135,x:227.2,y:194.9}).wait(1).to({graphics:mask_5_graphics_136,x:226.7,y:195.8}).wait(1).to({graphics:mask_5_graphics_137,x:226.2,y:196.6}).wait(1).to({graphics:mask_5_graphics_138,x:225.7,y:197.5}).wait(1).to({graphics:mask_5_graphics_139,x:225.3,y:198.4}).wait(1).to({graphics:mask_5_graphics_140,x:224.8,y:199.2}).wait(1).to({graphics:mask_5_graphics_141,x:224.3,y:200}).wait(1).to({graphics:mask_5_graphics_142,x:223.8,y:200.9}).wait(1).to({graphics:mask_5_graphics_143,x:223.3,y:201.8}).wait(1).to({graphics:mask_5_graphics_144,x:222.9,y:202.6}).wait(1).to({graphics:mask_5_graphics_145,x:222.4,y:203.5}).wait(1).to({graphics:mask_5_graphics_146,x:221.9,y:204.3}).wait(1).to({graphics:mask_5_graphics_147,x:221.4,y:205.2}).wait(1).to({graphics:mask_5_graphics_148,x:220.9,y:206}).wait(1).to({graphics:mask_5_graphics_149,x:220.5,y:206.9}).wait(1).to({graphics:mask_5_graphics_150,x:220,y:207.8}).wait(1).to({graphics:mask_5_graphics_151,x:219.5,y:208.6}).wait(1).to({graphics:mask_5_graphics_152,x:219,y:209.5}).wait(1).to({graphics:mask_5_graphics_153,x:218.6,y:210.3}).wait(1).to({graphics:mask_5_graphics_154,x:218.1,y:211.2}).wait(1).to({graphics:mask_5_graphics_155,x:217.6,y:212}).wait(1).to({graphics:mask_5_graphics_156,x:217.1,y:212.9}).wait(1).to({graphics:mask_5_graphics_157,x:216.6,y:213.8}).wait(1).to({graphics:mask_5_graphics_158,x:216.2,y:214.6}).wait(1).to({graphics:mask_5_graphics_159,x:215.7,y:215.5}).wait(1).to({graphics:mask_5_graphics_160,x:215.2,y:216.3}).wait(1).to({graphics:mask_5_graphics_161,x:214.7,y:217.2}).wait(1).to({graphics:mask_5_graphics_162,x:214.2,y:218}).wait(1).to({graphics:mask_5_graphics_163,x:213.8,y:218.9}).wait(1).to({graphics:mask_5_graphics_164,x:213.3,y:219.7}).wait(1).to({graphics:mask_5_graphics_165,x:212.8,y:220.6}).wait(1).to({graphics:mask_5_graphics_166,x:212.3,y:221.4}).wait(1).to({graphics:mask_5_graphics_167,x:211.8,y:222.3}).wait(1).to({graphics:mask_5_graphics_168,x:211.4,y:223.2}).wait(1).to({graphics:mask_5_graphics_169,x:143.3,y:159.6}).wait(622));

	// Layer 4
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(20,1,1).p("AxxykQIWjbDEEzQCvEShjEgQgKAdgNAeQgCAFgCAFQhJC7hzDDQgPAZgQAaQkiHShjGEQhpGaEBAvQEBAwHCm+QHBm+ETpHQETpHD2oG");
	this.shape_6.setTransform(281,210.2);
	this.shape_6._off = true;

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(89).to({_off:false},0).wait(702));

	// Layer 1 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_9 = new cjs.Graphics().p("ADMbgQr+iAnDp4QnDp5CBr9QB/r9J5nEMAiAAvsQntFgo9AAQiiAAipgdg");
	var mask_6_graphics_10 = new cjs.Graphics().p("AC1bZQr7iQm1qCQm2qCCRr6QCPr7KCm1MAhAAwZQnjFJonAAQi1AAi9gkg");
	var mask_6_graphics_11 = new cjs.Graphics().p("ACfbRQr4igmoqLQmoqLCir3QCfr4KLmoMAf9AxFQnYE0oRAAQjIAAjQgsg");
	var mask_6_graphics_12 = new cjs.Graphics().p("ACJbIQr0iwmbqUQmaqUCyrzQCvr0KUmaMAe6AxwQnNEen8AAQjbAAjig1g");
	var mask_6_graphics_13 = new cjs.Graphics().p("ABza/QrwjBmMqcQmMqdDBruQDArxKcmMMAd2AyZQnCELnnAAQjtAAj1g/g");
	var mask_6_graphics_14 = new cjs.Graphics().p("ABea0QrsjQl+qlQl+qkDSrrQDPrsKll+MAcxAzBQm2D3nTAAQj/AAkHhKg");
	var mask_6_graphics_15 = new cjs.Graphics().p("ABJapQrnjglwqtQlvqsDhrmQDfrnKtlwMAbrAznQmpDknAAAQkQAAkZhVg");
	var mask_6_graphics_16 = new cjs.Graphics().p("AA0adQrijwlgq0Qlhq0DxrhQDuriK0lhMAamA0LQmdDSmsAAQkiAAkrhhg");
	var mask_6_graphics_17 = new cjs.Graphics().p("AAhaQQrdj/lSq8QlSq7EArbQD+reK8lSMAZeA0uQmPDBmZAAQk1AAk6hug");
	var mask_6_graphics_18 = new cjs.Graphics().p("AANaFQrXkPlDrCQlDrCEPrXQEOrXLClDMAYXA1PQmBCwmGAAQlHAAlLh7g");
	var mask_6_graphics_19 = new cjs.Graphics().p("AgFZ/QrSkfk0rJQk0rIEfrRQEdrRLJk0MAXNA1wQlxCfl0AAQlZAAlaiJg");
	var mask_6_graphics_20 = new cjs.Graphics().p("AgXZ3QrNktkkrQQklrOEurLQEsrLLQklMAWEA2PQljCQlhAAQlrAAlpiZg");
	var mask_6_graphics_21 = new cjs.Graphics().p("AgpZvQrGk9kWrVQkVrUE9rFQE8rFLUkVMAU7A2rQlTCClPAAQl+AAl3iog");
	var mask_6_graphics_22 = new cjs.Graphics().p("Ag7ZlQq/lLkGrbQkGraFMq+QFLq+LakGMATxA3HQlDB0k+AAQmQAAmGi5g");
	var mask_6_graphics_23 = new cjs.Graphics().p("AhMZbQq3lbj3rgQj3rgFbq2QFaq3Lfj2MASmA3hQkzBmkrAAQmjAAmUjJg");
	var mask_6_graphics_24 = new cjs.Graphics().p("AhdZPQqvlqjnrlQjnrkFpqvQFoqvLljnMARaA35QkiBakZAAQm2AAmijbg");
	var mask_6_graphics_25 = new cjs.Graphics().p("AhtZCQqol4jXrqQjXrpF4qnQF2qnLpjYMAQPA4QQkQBPkIAAQnKAAmujug");
	var mask_6_graphics_26 = new cjs.Graphics().p("Ah8Y0QqgmGjHrvQjIrtGHqfQGEqfLujIMAPCA4lQj/BEj1AAQneAAm6kBg");
	var mask_6_graphics_27 = new cjs.Graphics().p("AiLYkQqXmUi4ryQi3ryGUqWQGTqXLxi3MAN1A44QjsA5jjAAQnyAAnGkVg");
	var mask_6_graphics_28 = new cjs.Graphics().p("AiZYUQqPmiinr2Qior1GjqOQGgqOL1inMAMoA5KQjZAvjRAAQoHAAnRkpg");
	var mask_6_graphics_29 = new cjs.Graphics().p("AinYCQqGmviXr6QiXr4GwqFQGuqFL4iXMALaA5aQjGAni+AAQodAAnbk/g");
	var mask_6_graphics_30 = new cjs.Graphics().p("Ai1XwQp8m9iHr9QiHr7G+p7QG7p8L8iIMAKMA5pQizAgirAAQozAAnmlVg");
	var mask_6_graphics_31 = new cjs.Graphics().p("AjBXcQpznKh3sAQh3r+HLpxQHJpzL/h2MAI9A51QieAYiYAAQpKAAnvlrg");
	var mask_6_graphics_32 = new cjs.Graphics().p("AjOXIQppnYhmsCQhnsAHZpoQHWpoMAhnMAHvA6BQiJASiFAAQphAAn5mCg");
	var mask_6_graphics_33 = new cjs.Graphics().p("AjZWyQpfnlhWsEQhWsCHlpdQHjpfMChWMAGgA6KQh0ANhxAAQp6AAoAmag");
	var mask_6_graphics_34 = new cjs.Graphics().p("AjkWbQpVnyhFsFQhGsEHxpTQHvpUMFhGMAFSA6SQhgAJhdAAQqSAAoImzg");
	var mask_6_graphics_35 = new cjs.Graphics().p("AjvWDQpJn+g2sHQg1sFH+pIQH7pKMHg1MAECA6YQhKAFhIAAQqsAAoQnMg");
	var mask_6_graphics_36 = new cjs.Graphics().p("Aj5VqQo+oLglsHQglsGIKo9QIIo/MHglMACzA6dQg0ACgyAAQrIAAoWnmg");
	var mask_6_graphics_37 = new cjs.Graphics().p("AkCVPQozoWgVsIQgVsGIXoyQIUo0MHgVMABkA6gIg6ABQrjAAocoCg");
	var mask_6_graphics_38 = new cjs.Graphics().p("AkLU0QoooigEsIQgEsHIionQIgooMIgEMAAUA6hIgMAAQsAAAoiodg");
	var mask_6_graphics_39 = new cjs.Graphics().p("AkwUYQodouANsGQAMsIItobQIsodMIANMgA8A6gQsIgNoZosg");
	var mask_6_graphics_40 = new cjs.Graphics().p("AlgT8QoQo5AdsHQAcsHI5oPQI3oQMHAcMgCKA6eQsIgdoOo3g");
	var mask_6_graphics_41 = new cjs.Graphics().p("AmOTgQoEpEAtsGQAtsHJEoCQJBoFMHAtMgDaA6aQsGgtoCpCg");
	var mask_6_graphics_42 = new cjs.Graphics().p("Am8TDQn4pPA+sEQA9sGJPn2QJMn4MGA+MgEpA6UQsGg+n1pNg");
	var mask_6_graphics_43 = new cjs.Graphics().p("AnpSnQnrpaBNsDQBOsEJZnpQJXnrMEBNMgF4A6NQsDhOnppXg");
	var mask_6_graphics_44 = new cjs.Graphics().p("AoWSKQnepjBesCQBesCJkncQJhnfMCBeMgHHA6EQsBhendpig");
	var mask_6_graphics_45 = new cjs.Graphics().p("ApCRtQnRptBvr/QBusAJtnQQJsnRL/BuMgIVA56Qr/hvnQpsg");
	var mask_6_graphics_46 = new cjs.Graphics().p("AptRRQnEp4B/r8QB/r9J3nDQJ1nEL9B/MgJkA5tQr8h/nDp1g");
	var mask_6_graphics_47 = new cjs.Graphics().p("AqXQ0Qm3qBCPr5QCPr7KAm1QJ/m2L6CPMgKyA5fQr5iPm1p/g");
	var mask_6_graphics_48 = new cjs.Graphics().p("ArGQUQmnqLChr2QChr3KKmmQKJmnL3ChMgMJA5NQr2igmmqJg");
	var mask_6_graphics_49 = new cjs.Graphics().p("ArzPzQmYqUCzryQCzrzKUmWQKSmYLzCzMgNfA46QryizmWqTg");
	var mask_6_graphics_50 = new cjs.Graphics().p("AsfPTQmIqeDEruQDFruKemGQKbmJLvDFMgO1A4lQrujFmGqcg");
	var mask_6_graphics_51 = new cjs.Graphics().p("AtLOyQl4qnDXroQDWrqKnl2QKkl4LqDWMgQLA4NQrojXl3qlg");
	var mask_6_graphics_52 = new cjs.Graphics().p("At1OSQloqwDorjQDorkKvlnQKuloLkDoMgRfA30Qrjjolnqug");
	var mask_6_graphics_53 = new cjs.Graphics().p("AueNxQlXq4D5rdQD5rfK4lWQK2lXLeD5MgSzA3YQrej6lWq2g");
	var mask_6_graphics_54 = new cjs.Graphics().p("AvGNRQlHrAELrYQEKrYLAlFQK9lHLZEKMgUHA26QrXkKlGq+g");
	var mask_6_graphics_55 = new cjs.Graphics().p("AvtMwQk2rHEcrRQEcrSLHk0QLFk3LREcMgVZA2bQrRkck1rGg");
	var mask_6_graphics_56 = new cjs.Graphics().p("AwTMQQklrPEtrKQEtrLLOkjQLMkmLLEtMgWrA15QrLktkkrMg");
	var mask_6_graphics_57 = new cjs.Graphics().p("Aw3LvQkUrVE9rDQE+rDLUkTQLUkULDE+MgX8A1VQrDk9kTrUg");
	var mask_6_graphics_58 = new cjs.Graphics().p("AxbLPQkCrbFOq8QFOq7LakBQLakEK8FPMgZMA0wQq8lPkCrZg");
	var mask_6_graphics_59 = new cjs.Graphics().p("Ax9KvQjxrhFfq0QFeqzLgjwQLgjyK0FfMgacA0JQqzlfjxrfg");
	var mask_6_graphics_60 = new cjs.Graphics().p("AyeKOQjgrmFvqrQFvqrLmjeQLljhKrFvMgbqAzgQqrlvjfrlg");
	var mask_6_graphics_61 = new cjs.Graphics().p("Ay+JuQjOrrF/qiQGAqiLqjNQLrjPKiF/Mgc4Ay1Qqil/jOrqg");
	var mask_6_graphics_62 = new cjs.Graphics().p("AzcJOQi8rvGPqZQGPqZLvi7QLvi9KZGPMgeEAyIQqZmPi8rvg");
	var mask_6_graphics_63 = new cjs.Graphics().p("Az5IvQiqr0GeqQQGfqPLzipQLzirKQGeMgfQAxaQqPmfiqryg");
	var mask_6_graphics_64 = new cjs.Graphics().p("A0VIPQiYr4GuqFQGuqFL2iXQL4iaKFGuMggaAwqQqFmuiYr3g");
	var mask_6_graphics_65 = new cjs.Graphics().p("A0vHwQiHr7G9p7QG9p7L7iFQL6iHJ7G9MghiAv3Qp7m9iGr6g");
	var mask_6_graphics_66 = new cjs.Graphics().p("A1IHRQh1r+HMpxQHMpwL9hzQL+h1JwHMMgiqAvDQpxnLhzr9g");
	var mask_6_graphics_67 = new cjs.Graphics().p("A1gGyQhisBHaplQHbplL/hhQMBhjJlHbMgjxAuOQplnbhir/g");
	var mask_6_graphics_68 = new cjs.Graphics().p("A13GTQhPsCHppaQHopaMChOQMChRJaHpMgk2AtXQpanphQsCg");
	var mask_6_graphics_69 = new cjs.Graphics().p("A2MF1Qg9sEH3pOQH3pOMDg8QMEg/JOH3Mgl7AseQpOn3g9sDg");
	var mask_6_graphics_70 = new cjs.Graphics().p("A2rFFQggsGINo6QIOo7MFgeQMGghI6INMgnnAq/Qo6oNgfsFg");
	var mask_6_graphics_71 = new cjs.Graphics().p("A3HEWQgCsHIjomQIjolMFgBQMHgDImIjMgpPApbQomojgBsFg");
	var mask_6_graphics_72 = new cjs.Graphics().p("A3gDoQAcsHI4oQQI4oQMFAdQMHAbIQI3MgqzAn1QoRo4AcsFg");
	var mask_6_graphics_73 = new cjs.Graphics().p("A30C7QA6sFJMn6QJLn6MEA7QMFA4H6JMMgsUAmJQn6pLA6sEg");
	var mask_6_graphics_74 = new cjs.Graphics().p("A4FCPQBYsCJfnjQJfnjMBBYQMCBXHjJfMgtwAkaQnjpfBXsBg");
	var mask_6_graphics_75 = new cjs.Graphics().p("A4RBlQB1r+JxnMQJxnLL9B2QL+B0HMJxMgvIAioQnLpxB1r9g");
	var mask_6_graphics_76 = new cjs.Graphics().p("A4aA8QCSr5KDm0QKCmzL4CUQL6CRGzKCMgwbAg0QmzqDCSr4g");
	var mask_6_graphics_77 = new cjs.Graphics().p("A4fAUQCwrzKSmaQKTmaLyCwQLzCvGaKSMgxpAe7QmbqTCwryg");
	var mask_6_graphics_78 = new cjs.Graphics().p("A4ggRQDMrtKimBQKimALrDNQLsDMGBKiMgy0Ac/QmBqiDNrqg");
	var mask_6_graphics_79 = new cjs.Graphics().p("A4eg3QDqrkKwlnQKwlmLjDqQLkDoFmKxMgz5AbAQlmqwDorig");
	var mask_6_graphics_80 = new cjs.Graphics().p("A4XhaQEGrcK+lLQK8lMLaEGQLbEFFLK+Mg05AY/QlMq9EFrYg");
	var mask_6_graphics_81 = new cjs.Graphics().p("A4Nh9QEirRLKkwQLJkwLQEiQLQEgEwLKMg11AW9QkxrKEhrOg");
	var mask_6_graphics_82 = new cjs.Graphics().p("A3+ieQE9rFLWkVQLUkVLEE+QLEE8EVLWMg2sAU3QkVrWE9rCg");
	var mask_6_graphics_83 = new cjs.Graphics().p("A3si9QFYq5Lgj4QLfj5K2FZQK4FXD5LeMg3dASxQj4rgFXq1g");
	var mask_6_graphics_84 = new cjs.Graphics().p("A3WjbQFzqrLpjcQLnjdKqF0QKqFxDcLoMg4JAQnQjcroFyqog");
	var mask_6_graphics_85 = new cjs.Graphics().p("A28j4QGNqcLxi/QLvjAKbGOQKbGLDALwMg4wAOcQi/rwGMqag");
	var mask_6_graphics_86 = new cjs.Graphics().p("A2fkSQGnqML3ijQL3iiKLGmQKMGlCiL3Mg5QAMQQijr4GlqJg");
	var mask_6_graphics_87 = new cjs.Graphics().p("A19krQG/p8L9iFQL9iFJ6HAQJ7G+CFL8Mg5sAKCQiFr9G+p5g");
	var mask_6_graphics_88 = new cjs.Graphics().p("A1YlCQHXpqMChoQMBhnJoHXQJqHWBoMBMg6DAH0QhosCHXpng");
	var mask_6_graphics_89 = new cjs.Graphics().p("A0xlXQHvpYMGhKQMEhJJWHvQJYHtBJMFMg6TAFkQhKsFHtpVg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_6_graphics_9,x:160.1,y:178.9}).wait(1).to({graphics:mask_6_graphics_10,x:158.5,y:178.9}).wait(1).to({graphics:mask_6_graphics_11,x:156.8,y:178.9}).wait(1).to({graphics:mask_6_graphics_12,x:155.1,y:178.9}).wait(1).to({graphics:mask_6_graphics_13,x:153.4,y:179}).wait(1).to({graphics:mask_6_graphics_14,x:151.7,y:179}).wait(1).to({graphics:mask_6_graphics_15,x:149.9,y:179}).wait(1).to({graphics:mask_6_graphics_16,x:148.2,y:179}).wait(1).to({graphics:mask_6_graphics_17,x:146.4,y:179}).wait(1).to({graphics:mask_6_graphics_18,x:144.6,y:178.8}).wait(1).to({graphics:mask_6_graphics_19,x:142.7,y:178}).wait(1).to({graphics:mask_6_graphics_20,x:140.9,y:177.2}).wait(1).to({graphics:mask_6_graphics_21,x:139,y:176.5}).wait(1).to({graphics:mask_6_graphics_22,x:137.2,y:175.8}).wait(1).to({graphics:mask_6_graphics_23,x:135.3,y:175.2}).wait(1).to({graphics:mask_6_graphics_24,x:133.4,y:174.6}).wait(1).to({graphics:mask_6_graphics_25,x:131.5,y:174}).wait(1).to({graphics:mask_6_graphics_26,x:129.6,y:173.4}).wait(1).to({graphics:mask_6_graphics_27,x:127.6,y:172.9}).wait(1).to({graphics:mask_6_graphics_28,x:125.7,y:172.5}).wait(1).to({graphics:mask_6_graphics_29,x:123.7,y:172}).wait(1).to({graphics:mask_6_graphics_30,x:121.8,y:171.6}).wait(1).to({graphics:mask_6_graphics_31,x:119.8,y:171.3}).wait(1).to({graphics:mask_6_graphics_32,x:117.8,y:171}).wait(1).to({graphics:mask_6_graphics_33,x:115.8,y:170.7}).wait(1).to({graphics:mask_6_graphics_34,x:113.9,y:170.5}).wait(1).to({graphics:mask_6_graphics_35,x:111.9,y:170.3}).wait(1).to({graphics:mask_6_graphics_36,x:109.9,y:170.2}).wait(1).to({graphics:mask_6_graphics_37,x:107.9,y:170.1}).wait(1).to({graphics:mask_6_graphics_38,x:105.9,y:170.1}).wait(1).to({graphics:mask_6_graphics_39,x:106.9,y:170.1}).wait(1).to({graphics:mask_6_graphics_40,x:108.8,y:170}).wait(1).to({graphics:mask_6_graphics_41,x:110.8,y:169.9}).wait(1).to({graphics:mask_6_graphics_42,x:112.8,y:169.7}).wait(1).to({graphics:mask_6_graphics_43,x:114.7,y:169.5}).wait(1).to({graphics:mask_6_graphics_44,x:116.7,y:169.3}).wait(1).to({graphics:mask_6_graphics_45,x:118.6,y:169}).wait(1).to({graphics:mask_6_graphics_46,x:120.6,y:168.7}).wait(1).to({graphics:mask_6_graphics_47,x:122.5,y:168.1}).wait(1).to({graphics:mask_6_graphics_48,x:124.7,y:167.6}).wait(1).to({graphics:mask_6_graphics_49,x:126.8,y:167.1}).wait(1).to({graphics:mask_6_graphics_50,x:129,y:166.6}).wait(1).to({graphics:mask_6_graphics_51,x:131.1,y:165.9}).wait(1).to({graphics:mask_6_graphics_52,x:133.2,y:165.3}).wait(1).to({graphics:mask_6_graphics_53,x:135.3,y:164.6}).wait(1).to({graphics:mask_6_graphics_54,x:137.4,y:163.8}).wait(1).to({graphics:mask_6_graphics_55,x:139.4,y:163}).wait(1).to({graphics:mask_6_graphics_56,x:141.5,y:162.2}).wait(1).to({graphics:mask_6_graphics_57,x:143.5,y:161.3}).wait(1).to({graphics:mask_6_graphics_58,x:145.5,y:160.3}).wait(1).to({graphics:mask_6_graphics_59,x:147.5,y:159.3}).wait(1).to({graphics:mask_6_graphics_60,x:149.4,y:158.3}).wait(1).to({graphics:mask_6_graphics_61,x:151.4,y:157.3}).wait(1).to({graphics:mask_6_graphics_62,x:153.3,y:156.1}).wait(1).to({graphics:mask_6_graphics_63,x:155.2,y:155}).wait(1).to({graphics:mask_6_graphics_64,x:157,y:153.8}).wait(1).to({graphics:mask_6_graphics_65,x:158.8,y:152.6}).wait(1).to({graphics:mask_6_graphics_66,x:160.6,y:151.3}).wait(1).to({graphics:mask_6_graphics_67,x:162.4,y:150}).wait(1).to({graphics:mask_6_graphics_68,x:164.1,y:148.6}).wait(1).to({graphics:mask_6_graphics_69,x:165.8,y:147.2}).wait(1).to({graphics:mask_6_graphics_70,x:168.5,y:144.8}).wait(1).to({graphics:mask_6_graphics_71,x:171.1,y:142.3}).wait(1).to({graphics:mask_6_graphics_72,x:173.6,y:139.6}).wait(1).to({graphics:mask_6_graphics_73,x:176,y:136.9}).wait(1).to({graphics:mask_6_graphics_74,x:178.3,y:134}).wait(1).to({graphics:mask_6_graphics_75,x:180.5,y:131.1}).wait(1).to({graphics:mask_6_graphics_76,x:182.6,y:128}).wait(1).to({graphics:mask_6_graphics_77,x:184.5,y:124.9}).wait(1).to({graphics:mask_6_graphics_78,x:186.4,y:121.7}).wait(1).to({graphics:mask_6_graphics_79,x:188.1,y:118.5}).wait(1).to({graphics:mask_6_graphics_80,x:189.7,y:115.2}).wait(1).to({graphics:mask_6_graphics_81,x:191.2,y:111.9}).wait(1).to({graphics:mask_6_graphics_82,x:192.6,y:108.5}).wait(1).to({graphics:mask_6_graphics_83,x:193.8,y:105}).wait(1).to({graphics:mask_6_graphics_84,x:194.9,y:101.6}).wait(1).to({graphics:mask_6_graphics_85,x:195.9,y:98.1}).wait(1).to({graphics:mask_6_graphics_86,x:196.7,y:94.6}).wait(1).to({graphics:mask_6_graphics_87,x:197.4,y:91}).wait(1).to({graphics:mask_6_graphics_88,x:198,y:87.5}).wait(1).to({graphics:mask_6_graphics_89,x:198.3,y:84}).wait(702));

	// Layer 2
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(20,1,1).p("AnjlZQAYgXBog1QAJgEAWgKQCVg8CDgOQDhgZCCB8QAiAhAcArQCuERhiEfQgLAegNAeQgCAFgCAFQgqBsg4Bu");
	this.shape_7.setTransform(203,133.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(20,1,1).p("Aq4xXQAYgXBog0QAJgFAWgKQAKgEAKgEIATgHQBmgkBZgQQAMgCANgCQABAAABAAQAMgBALgCQDigZCBB8QAiAhAbArQCvEShjEgQgKAdgNAeQgCAFgCAFQhJC7hzDDQgPAZgPAaQkiHShjGEQhpGaEBAvQEBAwHCm+QB9h9BwiH");
	this.shape_8.setTransform(224.3,210.2);

	var maskedShapeInstanceList = [this.shape_7,this.shape_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7}]},9).to({state:[{t:this.shape_8}]},45).wait(737));

	// Letter
	this.instance_4 = new lib.Symbol1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(275,275);
	this.instance_4.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(791));

	// Background
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_9.setTransform(275,275,3.373,2.543);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_10.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9}]}).wait(791));

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