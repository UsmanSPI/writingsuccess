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
	this.shape.graphics.f("#FFFFFF").s().p("AvFT8QhRhDAAhtQAAhqB/jCQBuijDAjUQDnkAGDlaIArhYQimCiiSBbQjMB8izAAQhngBg6g5Qg7g4AAhsQAAi0CslAICGjwQBGiGAVhtQhkAMiJBOIjtCjQkmDhgQAAQhxAAAAh6QAAgmAfgnQB6inEkitIEJiAQCJg1BgAAQBTAAAwA1QAwAyAABUQAAB5g8CXIiIEKQjJFTgFCTQCGAACuh4QCVhnCsi2QDPjcEYmZQBii2BZAAQB1AAAABwQl3Mbg8BxQDXiFGIlkQBZhPCliiQAygnAsAAQBTAAAABeQgFA8hyB+Qh0B8ABAIIisClQjAC4i9B/Qi/B+j3BrIndPTQhGCNhuBYQh+BliTAAQhpAAhNhBgApILlQjoEhAABAQAAAKATAAQB1AACOjEID/oMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.2,-134.1,274.4,268.2);


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
(lib.WS_Cursive_y = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_572 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(572).call(this.frame_572).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(150.3,199.3,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[150.4,199.4,188.9,170.3,210.4,159.2,231.8,148.2,236.3,155.2,245.1,169.4,225.1,202.2,205,234.9,200.5,258.6,195.9,282.3,223.2,271.6,250.5,260.8,268.4,244.5,286.4,228.2,306.4,202.6,326.1,177.1,340.8,150.9]}},212).wait(15).to({skewY:0,x:340.4,y:151.6},0).to({guide:{path:[340.3,151.6,321.6,187.6,299.2,230.6,276.6,273.8,255.2,321.8,233.8,369.7,221.2,384.3,208.6,398.9,192.2,396.1]}},91).wait(15).to({startPosition:0},0).to({guide:{path:[192.2,396.3,180.7,394.6,180.2,384.2,180.2,383.7,180.2,383.2,180.3,381.5,183.3,371.8,186.4,362,218.5,325.3,250.7,288.6,307.1,255.3,362.7,222.5,400,176.8]}},150).wait(15).to({startPosition:0},0).to({guide:{path:[400.3,176.8,387.7,130.4,352.7,97.3,316.1,62.8,266.3,56.2,218.4,50,173.6,69.5,128,89.3,85.6,115.9,43.8,142.2,-5.1,149.8,-56.5,157.7,-97.1,126.6,-105.2,120.4,-111.5,112.1]}},65).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(339.3,152.2,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},212).wait(15).to({_off:false,x:191.3,y:396.9},0).to({_off:true},91).wait(15).to({_off:false,x:401.3,y:177},0).to({_off:true},150).wait(81));

	// Layer 17
	this.instance_1 = new lib.ar4("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(170.5,371.2,1,1,0,122.2,-57.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(342).to({_off:false},0).wait(231));

	// Layer 14 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_356 = new cjs.Graphics().p("ACMa0IBTjKIN9FtIhTDKg");
	var mask_graphics_357 = new cjs.Graphics().p("AnvhLIBljZIN6FvIhlDag");
	var mask_graphics_358 = new cjs.Graphics().p("An3hFIB4joIN4FzIh5Dog");
	var mask_graphics_359 = new cjs.Graphics().p("AoAg/ICMj3IN1F1IiLD4g");
	var mask_graphics_360 = new cjs.Graphics().p("AoIg5ICekGINzF4IieEHg");
	var mask_graphics_361 = new cjs.Graphics().p("AoRgzICykVINxF8IiyEVg");
	var mask_graphics_362 = new cjs.Graphics().p("AoZgtIDFkkINuF+IjEElg");
	var mask_graphics_363 = new cjs.Graphics().p("AohgnIDXkzINsGBIjYE0g");
	var mask_graphics_364 = new cjs.Graphics().p("AoqghIDrlDINqGGIjrFDg");
	var mask_graphics_365 = new cjs.Graphics().p("AozgbID/lSINoGIIj/FTg");
	var mask_graphics_366 = new cjs.Graphics().p("Ao7gVIERlhINmGLIkRFig");
	var mask_graphics_367 = new cjs.Graphics().p("ApDgPIEklwINjGOIkkFxg");
	var mask_graphics_368 = new cjs.Graphics().p("ApLgIIE2mAINiGRIk3GAg");
	var mask_graphics_369 = new cjs.Graphics().p("ApUgCIFKmQINfGVIlKGQg");
	var mask_graphics_370 = new cjs.Graphics().p("ApdADIFdmeINdGZIldGeg");
	var mask_graphics_371 = new cjs.Graphics().p("AplAJIFwmtINbGcIlxGtg");
	var mask_graphics_372 = new cjs.Graphics().p("AptAPIGDm8INYGfImDG8g");
	var mask_graphics_373 = new cjs.Graphics().p("Ap2AVIGXnLINWGiImXHLg");
	var mask_graphics_374 = new cjs.Graphics().p("Ap+AbIGpnaINUGlImpHag");
	var mask_graphics_375 = new cjs.Graphics().p("AqHAhIG9npINRGoIm8Hpg");
	var mask_graphics_376 = new cjs.Graphics().p("AqPAnIHPn4INQGqInQH5g");
	var mask_graphics_377 = new cjs.Graphics().p("AqXAtIHioIINNGvInjIIg");
	var mask_graphics_378 = new cjs.Graphics().p("AqgAzIH2oXINLGyIn2IXg");
	var mask_graphics_379 = new cjs.Graphics().p("AqoA5IIJomINIG0IoJIng");
	var mask_graphics_380 = new cjs.Graphics().p("AqwA/IIco1INFG4IocI1g");
	var mask_graphics_381 = new cjs.Graphics().p("Aq5BFIIvpEINEG7IowJEg");
	var mask_graphics_382 = new cjs.Graphics().p("ArBBLIJCpTINCG+IpDJUg");
	var mask_graphics_383 = new cjs.Graphics().p("ArKBSIJVpjINAHBIpVJig");
	var mask_graphics_384 = new cjs.Graphics().p("ArSBXIJopyIM9HFIpoJyg");
	var mask_graphics_385 = new cjs.Graphics().p("AraBeIJ6qCIM7HIIp7KBg");
	var mask_graphics_386 = new cjs.Graphics().p("ArjBjIKOqQIM5HKIqPKRg");
	var mask_graphics_387 = new cjs.Graphics().p("ArrBqIKhqgIM3HOIqiKfg");
	var mask_graphics_388 = new cjs.Graphics().p("Ar0BvIK0quIM1HQIq1Kvg");
	var mask_graphics_389 = new cjs.Graphics().p("Ar9B2ILIq/IMyHUIrIK/g");
	var mask_graphics_390 = new cjs.Graphics().p("AsFB8ILbrOIMwHXIrbLNg");
	var mask_graphics_391 = new cjs.Graphics().p("AsNCCILtrdIMuHaIruLdg");
	var mask_graphics_392 = new cjs.Graphics().p("AsVCIIMArsIMrHdIsALsg");
	var mask_graphics_393 = new cjs.Graphics().p("AseCOIMUr7IMpHhIsUL6g");
	var mask_graphics_394 = new cjs.Graphics().p("AsnCUIMnsKIMoHjIsoMKg");
	var mask_graphics_395 = new cjs.Graphics().p("AsuCZIM2sXIMnHmIs3MXg");
	var mask_graphics_396 = new cjs.Graphics().p("As0CdINFsiIMkHoItGMkg");
	var mask_graphics_397 = new cjs.Graphics().p("As8CjINWswIMjHrItXMwg");
	var mask_graphics_398 = new cjs.Graphics().p("AtDCoINms9IMhHuItnM9g");
	var mask_graphics_399 = new cjs.Graphics().p("AtKCtIN2tKIMfHxIt3NKg");
	var mask_graphics_400 = new cjs.Graphics().p("AtRCyIOGtWIMdHzIuHNWg");
	var mask_graphics_401 = new cjs.Graphics().p("AtYC3IOWtjIMbH2IuWNjg");
	var mask_graphics_402 = new cjs.Graphics().p("AtfC8IOmtwIMZH5IumNvg");
	var mask_graphics_403 = new cjs.Graphics().p("AtmDBIO2t8IMXH7Iu2N8g");
	var mask_graphics_404 = new cjs.Graphics().p("AttDHIPGuKIMVH+IvGOJg");
	var mask_graphics_405 = new cjs.Graphics().p("At0DLIPWuWIMTIBIvXOWg");
	var mask_graphics_406 = new cjs.Graphics().p("At7DRIPmujIMRIDIvmOig");
	var mask_graphics_407 = new cjs.Graphics().p("AuCDWIP2uwIMPIFIv2Owg");
	var mask_graphics_408 = new cjs.Graphics().p("AuJDaIQGu8IMNIIIwGO8g");
	var mask_graphics_409 = new cjs.Graphics().p("AuQDgIQVvJIMMIKIwWPJg");
	var mask_graphics_410 = new cjs.Graphics().p("AuXDlIQlvWIMKINIwmPWg");
	var mask_graphics_411 = new cjs.Graphics().p("AueDqIQ1vjIMJIQIw2Pig");
	var mask_graphics_412 = new cjs.Graphics().p("AulDvIRFvvIMGISIxGPvg");
	var mask_graphics_413 = new cjs.Graphics().p("AutD0IRXv8IMDIVIxWP8g");
	var mask_graphics_414 = new cjs.Graphics().p("AuzD5IRlwJIMCIYIxlQJg");
	var mask_graphics_415 = new cjs.Graphics().p("Au6D+IR1wVIMAIaIx2QVg");
	var mask_graphics_416 = new cjs.Graphics().p("AvCEEISGwjIL/IdIyHQig");
	var mask_graphics_417 = new cjs.Graphics().p("AvIEIISVwvIL8IgIyVQvg");
	var mask_graphics_418 = new cjs.Graphics().p("AvPENISlw7IL7IiIynQ7g");
	var mask_graphics_419 = new cjs.Graphics().p("AvXESIS2xIIL5IlIy2RIg");
	var mask_graphics_420 = new cjs.Graphics().p("AveEXITGxVIL3InIzGRWg");
	var mask_graphics_421 = new cjs.Graphics().p("AvlEcITWxiIL1IrIzWRig");
	var mask_graphics_422 = new cjs.Graphics().p("AvsEiITlxvIL0ItIzmRug");
	var mask_graphics_423 = new cjs.Graphics().p("AvzEnIT1x8ILyIvIz2R8g");
	var mask_graphics_424 = new cjs.Graphics().p("Av6EsIUGyIILvIxI0GSIg");
	var mask_graphics_425 = new cjs.Graphics().p("AwBExIUVyVILuI1I0WSUg");
	var mask_graphics_426 = new cjs.Graphics().p("AwIE2IUmyiILrI3I0mSig");
	var mask_graphics_427 = new cjs.Graphics().p("AwPE7IU1yuILqI5I02Sug");
	var mask_graphics_428 = new cjs.Graphics().p("AwWFAIVFy7ILoI8I1FS7g");
	var mask_graphics_429 = new cjs.Graphics().p("AwdFFIVVzIILmI/I1VTIg");
	var mask_graphics_430 = new cjs.Graphics().p("AwkFKIVlzUILkJBI1mTUg");
	var mask_graphics_431 = new cjs.Graphics().p("AwrFPIV1zhILiJDI11Tig");
	var mask_graphics_432 = new cjs.Graphics().p("AwyFUIWFzuILgJHI2FTug");
	var mask_graphics_433 = new cjs.Graphics().p("Aw5FZIWVz7ILeJJI2VT7g");
	var mask_graphics_434 = new cjs.Graphics().p("AxAFfIWl0IILcJLI2lUIg");
	var mask_graphics_435 = new cjs.Graphics().p("AxIFjIW10UILcJOI22UVg");
	var mask_graphics_436 = new cjs.Graphics().p("AxOFoIXF0gILZJQI3GUhg");
	var mask_graphics_437 = new cjs.Graphics().p("AxVFtIXV0tILWJTI3VUug");
	var mask_graphics_438 = new cjs.Graphics().p("AxdFzIXl07ILWJWI3lU7g");
	var mask_graphics_439 = new cjs.Graphics().p("AxkF4IX21HILSJYI31VHg");
	var mask_graphics_440 = new cjs.Graphics().p("AxrF9IYF1UILSJbI4GVUg");
	var mask_graphics_441 = new cjs.Graphics().p("AxxGCIYU1hILQJeI4VVhg");
	var mask_graphics_442 = new cjs.Graphics().p("Ax5GHIYl1uILOJhI4lVtg");
	var mask_graphics_443 = new cjs.Graphics().p("AyAGMIY116ILMJjI42V6g");
	var mask_graphics_444 = new cjs.Graphics().p("AyHGRIZF2GILKJlI5FWGg");
	var mask_graphics_445 = new cjs.Graphics().p("AyOGWIZV2UILIJpI5VWUg");
	var mask_graphics_446 = new cjs.Graphics().p("AyVGbIZl2gILGJrI5mWgg");
	var mask_graphics_447 = new cjs.Graphics().p("AycGgIZ12tILEJuI51Wtg");
	var mask_graphics_448 = new cjs.Graphics().p("AyjGlIaF25ILCJwI6FW5g");
	var mask_graphics_449 = new cjs.Graphics().p("AyqGqIaV3GILAJzI6VXGg");
	var mask_graphics_450 = new cjs.Graphics().p("AyxGvIal3TIK+J2I6lXTg");
	var mask_graphics_451 = new cjs.Graphics().p("Ay4G0Ia13fIK8J4I61Xfg");
	var mask_graphics_452 = new cjs.Graphics().p("Ay/G6IbF3tIK6J7I7FXsg");
	var mask_graphics_453 = new cjs.Graphics().p("AzGG/IbU36IK5J+I7VX5g");
	var mask_graphics_454 = new cjs.Graphics().p("AzOHEIbl4HIK3KAI7lYHg");
	var mask_graphics_455 = new cjs.Graphics().p("AzUHIIb04SIK1KCI71YTg");
	var mask_graphics_456 = new cjs.Graphics().p("AzbHOIcE4fIKzKEI8FYgg");
	var mask_graphics_457 = new cjs.Graphics().p("AziHTIcU4tIKxKII8UYsg");
	var mask_graphics_458 = new cjs.Graphics().p("AzqHYIcl45IKvKKI8kY5g");
	var mask_graphics_459 = new cjs.Graphics().p("AzxHdIc15GIKuKNI81ZGg");
	var mask_graphics_460 = new cjs.Graphics().p("Az4HiIdF5SIKsKPI9FZSg");
	var mask_graphics_461 = new cjs.Graphics().p("Az/HnIdV5fIKqKSI9VZfg");
	var mask_graphics_462 = new cjs.Graphics().p("A0FHsIdk5sIKoKVI9lZsg");
	var mask_graphics_463 = new cjs.Graphics().p("A0NHxId154IKmKXI91Z4g");
	var mask_graphics_464 = new cjs.Graphics().p("A0UH2IeF6FIKkKaI+FaFg");
	var mask_graphics_465 = new cjs.Graphics().p("A0bH8IeV6TIKiKdI+VaSg");
	var mask_graphics_466 = new cjs.Graphics().p("A0iIBIel6gIKgKgI+laeg");
	var mask_graphics_467 = new cjs.Graphics().p("A0pIFIe06rIKfKhI+1asg");
	var mask_graphics_468 = new cjs.Graphics().p("A0wIKIfF64IKcKkI/Ea5g");
	var mask_graphics_469 = new cjs.Graphics().p("A03IQIfV7GIKaKoI/UbEg");
	var mask_graphics_470 = new cjs.Graphics().p("A0+IVIfk7SIKZKpI/lbSg");
	var mask_graphics_471 = new cjs.Graphics().p("A1FIaIf07fIKXKsI/1bfg");
	var mask_graphics_472 = new cjs.Graphics().p("A1MIfMAgEgbrIKVKuMggEAbrg");
	var mask_graphics_473 = new cjs.Graphics().p("A1TIkMAgUgb4IKTKxMggVAb4g");
	var mask_graphics_474 = new cjs.Graphics().p("A1aIpMAgkgcFIKRK0MggkAcFg");
	var mask_graphics_475 = new cjs.Graphics().p("A1hIuMAg0gcSIKPK3Mgg0AcRg");
	var mask_graphics_476 = new cjs.Graphics().p("A1oIzMAhEgceIKNK5MghEAceg");
	var mask_graphics_477 = new cjs.Graphics().p("A1wI4MAhVgcrIKMK8MghVAcrg");
	var mask_graphics_478 = new cjs.Graphics().p("A13I9MAhkgc4IKKK/MghkAc4g");
	var mask_graphics_479 = new cjs.Graphics().p("A19JCMAh0gdEIKILBMgh0AdEg");
	var mask_graphics_480 = new cjs.Graphics().p("A2FJHMAiEgdRIKGLDMgiEAdSg");
	var mask_graphics_481 = new cjs.Graphics().p("A2LJNMAiUgdfIKDLGMgiUAdfg");
	var mask_graphics_482 = new cjs.Graphics().p("A2SJRMAikgdqIKCLIMgilAdrg");
	var mask_graphics_483 = new cjs.Graphics().p("A2aJWMAi0gd3IKBLLMgi1Ad4g");
	var mask_graphics_484 = new cjs.Graphics().p("A2hJcMAjFgeEIJ+LNMgjEAeEg");
	var mask_graphics_485 = new cjs.Graphics().p("A2oJhMAjUgeRIJ9LQMgjUAeRg");
	var mask_graphics_486 = new cjs.Graphics().p("A2vJmMAjkgeeIJ7LTMgjkAeeg");
	var mask_graphics_487 = new cjs.Graphics().p("A22JqMAj0geqIJ5LWMgj0Aerg");
	var mask_graphics_488 = new cjs.Graphics().p("A29JwMAkEge3IJ3LYMgkEAe3g");
	var mask_graphics_489 = new cjs.Graphics().p("A3EJ1MAkUgfEIJ1LbMgkUAfEg");
	var mask_graphics_490 = new cjs.Graphics().p("AskV2MAkkgfQIJzLcMgkkAfRg");
	var mask_graphics_491 = new cjs.Graphics().p("A3tKXMAloggKIJzLdMgloAgKg");
	var mask_graphics_492 = new cjs.Graphics().p("AtpV2MAmtghFIJzLcMgmtAhGg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(356).to({graphics:mask_graphics_356,x:111.6,y:208.1}).wait(1).to({graphics:mask_graphics_357,x:175.3,y:387}).wait(1).to({graphics:mask_graphics_358,x:176.3,y:386.2}).wait(1).to({graphics:mask_graphics_359,x:177.2,y:385.4}).wait(1).to({graphics:mask_graphics_360,x:178.1,y:384.5}).wait(1).to({graphics:mask_graphics_361,x:179.1,y:383.7}).wait(1).to({graphics:mask_graphics_362,x:180,y:382.9}).wait(1).to({graphics:mask_graphics_363,x:180.9,y:382.1}).wait(1).to({graphics:mask_graphics_364,x:181.8,y:381.2}).wait(1).to({graphics:mask_graphics_365,x:182.8,y:380.4}).wait(1).to({graphics:mask_graphics_366,x:183.7,y:379.6}).wait(1).to({graphics:mask_graphics_367,x:184.6,y:378.7}).wait(1).to({graphics:mask_graphics_368,x:185.6,y:377.9}).wait(1).to({graphics:mask_graphics_369,x:186.5,y:377.1}).wait(1).to({graphics:mask_graphics_370,x:187.4,y:376.2}).wait(1).to({graphics:mask_graphics_371,x:188.3,y:375.4}).wait(1).to({graphics:mask_graphics_372,x:189.2,y:374.6}).wait(1).to({graphics:mask_graphics_373,x:190.2,y:373.7}).wait(1).to({graphics:mask_graphics_374,x:191.1,y:372.9}).wait(1).to({graphics:mask_graphics_375,x:192.1,y:372.1}).wait(1).to({graphics:mask_graphics_376,x:193,y:371.3}).wait(1).to({graphics:mask_graphics_377,x:193.9,y:370.4}).wait(1).to({graphics:mask_graphics_378,x:194.8,y:369.6}).wait(1).to({graphics:mask_graphics_379,x:195.7,y:368.8}).wait(1).to({graphics:mask_graphics_380,x:196.7,y:367.9}).wait(1).to({graphics:mask_graphics_381,x:197.6,y:367.1}).wait(1).to({graphics:mask_graphics_382,x:198.5,y:366.3}).wait(1).to({graphics:mask_graphics_383,x:199.5,y:365.4}).wait(1).to({graphics:mask_graphics_384,x:200.4,y:364.6}).wait(1).to({graphics:mask_graphics_385,x:201.3,y:363.8}).wait(1).to({graphics:mask_graphics_386,x:202.2,y:362.9}).wait(1).to({graphics:mask_graphics_387,x:203.2,y:362.1}).wait(1).to({graphics:mask_graphics_388,x:204.1,y:361.3}).wait(1).to({graphics:mask_graphics_389,x:205,y:360.5}).wait(1).to({graphics:mask_graphics_390,x:205.9,y:359.6}).wait(1).to({graphics:mask_graphics_391,x:206.9,y:358.8}).wait(1).to({graphics:mask_graphics_392,x:207.8,y:358}).wait(1).to({graphics:mask_graphics_393,x:208.7,y:357.1}).wait(1).to({graphics:mask_graphics_394,x:209.7,y:356.3}).wait(1).to({graphics:mask_graphics_395,x:210.4,y:355.6}).wait(1).to({graphics:mask_graphics_396,x:211.2,y:354.9}).wait(1).to({graphics:mask_graphics_397,x:212,y:354.2}).wait(1).to({graphics:mask_graphics_398,x:212.8,y:353.5}).wait(1).to({graphics:mask_graphics_399,x:213.5,y:352.8}).wait(1).to({graphics:mask_graphics_400,x:214.3,y:352.1}).wait(1).to({graphics:mask_graphics_401,x:215.1,y:351.4}).wait(1).to({graphics:mask_graphics_402,x:215.9,y:350.7}).wait(1).to({graphics:mask_graphics_403,x:216.7,y:350}).wait(1).to({graphics:mask_graphics_404,x:217.4,y:349.3}).wait(1).to({graphics:mask_graphics_405,x:218.2,y:348.6}).wait(1).to({graphics:mask_graphics_406,x:219,y:347.9}).wait(1).to({graphics:mask_graphics_407,x:219.8,y:347.3}).wait(1).to({graphics:mask_graphics_408,x:220.5,y:346.6}).wait(1).to({graphics:mask_graphics_409,x:221.3,y:345.8}).wait(1).to({graphics:mask_graphics_410,x:222.1,y:345.2}).wait(1).to({graphics:mask_graphics_411,x:222.9,y:344.5}).wait(1).to({graphics:mask_graphics_412,x:223.6,y:343.8}).wait(1).to({graphics:mask_graphics_413,x:224.4,y:343.1}).wait(1).to({graphics:mask_graphics_414,x:225.2,y:342.4}).wait(1).to({graphics:mask_graphics_415,x:226,y:341.7}).wait(1).to({graphics:mask_graphics_416,x:226.8,y:341}).wait(1).to({graphics:mask_graphics_417,x:227.5,y:340.3}).wait(1).to({graphics:mask_graphics_418,x:228.3,y:339.6}).wait(1).to({graphics:mask_graphics_419,x:229.1,y:338.9}).wait(1).to({graphics:mask_graphics_420,x:229.8,y:338.2}).wait(1).to({graphics:mask_graphics_421,x:230.6,y:337.5}).wait(1).to({graphics:mask_graphics_422,x:231.4,y:336.8}).wait(1).to({graphics:mask_graphics_423,x:232.2,y:336.1}).wait(1).to({graphics:mask_graphics_424,x:233,y:335.4}).wait(1).to({graphics:mask_graphics_425,x:233.7,y:334.7}).wait(1).to({graphics:mask_graphics_426,x:234.5,y:334}).wait(1).to({graphics:mask_graphics_427,x:235.3,y:333.3}).wait(1).to({graphics:mask_graphics_428,x:236.1,y:332.6}).wait(1).to({graphics:mask_graphics_429,x:236.8,y:331.9}).wait(1).to({graphics:mask_graphics_430,x:237.6,y:331.2}).wait(1).to({graphics:mask_graphics_431,x:238.4,y:330.6}).wait(1).to({graphics:mask_graphics_432,x:239.2,y:329.9}).wait(1).to({graphics:mask_graphics_433,x:239.9,y:329.2}).wait(1).to({graphics:mask_graphics_434,x:240.7,y:328.5}).wait(1).to({graphics:mask_graphics_435,x:241.5,y:327.8}).wait(1).to({graphics:mask_graphics_436,x:242.3,y:327.1}).wait(1).to({graphics:mask_graphics_437,x:243.1,y:326.4}).wait(1).to({graphics:mask_graphics_438,x:243.8,y:325.7}).wait(1).to({graphics:mask_graphics_439,x:244.6,y:325}).wait(1).to({graphics:mask_graphics_440,x:245.4,y:324.3}).wait(1).to({graphics:mask_graphics_441,x:246.2,y:323.6}).wait(1).to({graphics:mask_graphics_442,x:246.9,y:322.9}).wait(1).to({graphics:mask_graphics_443,x:247.7,y:322.2}).wait(1).to({graphics:mask_graphics_444,x:248.5,y:321.5}).wait(1).to({graphics:mask_graphics_445,x:249.3,y:320.8}).wait(1).to({graphics:mask_graphics_446,x:250.1,y:320.1}).wait(1).to({graphics:mask_graphics_447,x:250.8,y:319.4}).wait(1).to({graphics:mask_graphics_448,x:251.6,y:318.7}).wait(1).to({graphics:mask_graphics_449,x:252.4,y:318}).wait(1).to({graphics:mask_graphics_450,x:253.1,y:317.3}).wait(1).to({graphics:mask_graphics_451,x:253.9,y:316.6}).wait(1).to({graphics:mask_graphics_452,x:254.7,y:315.9}).wait(1).to({graphics:mask_graphics_453,x:255.5,y:315.2}).wait(1).to({graphics:mask_graphics_454,x:256.3,y:314.6}).wait(1).to({graphics:mask_graphics_455,x:257,y:313.9}).wait(1).to({graphics:mask_graphics_456,x:257.8,y:313.2}).wait(1).to({graphics:mask_graphics_457,x:258.6,y:312.5}).wait(1).to({graphics:mask_graphics_458,x:259.4,y:311.8}).wait(1).to({graphics:mask_graphics_459,x:260.1,y:311.1}).wait(1).to({graphics:mask_graphics_460,x:260.9,y:310.4}).wait(1).to({graphics:mask_graphics_461,x:261.7,y:309.7}).wait(1).to({graphics:mask_graphics_462,x:262.5,y:309}).wait(1).to({graphics:mask_graphics_463,x:263.2,y:308.3}).wait(1).to({graphics:mask_graphics_464,x:264,y:307.6}).wait(1).to({graphics:mask_graphics_465,x:264.8,y:306.9}).wait(1).to({graphics:mask_graphics_466,x:265.6,y:306.2}).wait(1).to({graphics:mask_graphics_467,x:266.4,y:305.5}).wait(1).to({graphics:mask_graphics_468,x:267.1,y:304.8}).wait(1).to({graphics:mask_graphics_469,x:267.9,y:304.1}).wait(1).to({graphics:mask_graphics_470,x:268.7,y:303.4}).wait(1).to({graphics:mask_graphics_471,x:269.5,y:302.7}).wait(1).to({graphics:mask_graphics_472,x:270.2,y:302}).wait(1).to({graphics:mask_graphics_473,x:271,y:301.3}).wait(1).to({graphics:mask_graphics_474,x:271.8,y:300.6}).wait(1).to({graphics:mask_graphics_475,x:272.6,y:300}).wait(1).to({graphics:mask_graphics_476,x:273.3,y:299.2}).wait(1).to({graphics:mask_graphics_477,x:274.1,y:298.5}).wait(1).to({graphics:mask_graphics_478,x:274.9,y:297.9}).wait(1).to({graphics:mask_graphics_479,x:275.7,y:297.2}).wait(1).to({graphics:mask_graphics_480,x:276.5,y:296.5}).wait(1).to({graphics:mask_graphics_481,x:277.2,y:295.8}).wait(1).to({graphics:mask_graphics_482,x:278,y:295.1}).wait(1).to({graphics:mask_graphics_483,x:278.8,y:294.4}).wait(1).to({graphics:mask_graphics_484,x:279.5,y:293.7}).wait(1).to({graphics:mask_graphics_485,x:280.3,y:293}).wait(1).to({graphics:mask_graphics_486,x:281.1,y:292.3}).wait(1).to({graphics:mask_graphics_487,x:281.9,y:291.6}).wait(1).to({graphics:mask_graphics_488,x:282.7,y:290.9}).wait(1).to({graphics:mask_graphics_489,x:283.4,y:290.2}).wait(1).to({graphics:mask_graphics_490,x:216.3,y:213.1}).wait(1).to({graphics:mask_graphics_491,x:287.6,y:286.6}).wait(1).to({graphics:mask_graphics_492,x:223.1,y:213.1}).wait(81));

	// Layer 11
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(20,1,1).p("Au3RCQjAgaBKinQBLinB1iGQF+n2INk0QKTmDGSno");
	this.shape_1.setTransform(290.7,287.8);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(356).to({_off:false},0).wait(217));

	// Layer 12 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_342 = new cjs.Graphics().p("EAOBAghIAAltICoAAIAAFtg");
	var mask_1_graphics_343 = new cjs.Graphics().p("AhfC2IAAlrIC/AAIAAFrg");
	var mask_1_graphics_344 = new cjs.Graphics().p("AhqC2IAAlrIDVAAIAAFrg");
	var mask_1_graphics_345 = new cjs.Graphics().p("Ah2C2IAAlrIDtAAIAAFrg");
	var mask_1_graphics_346 = new cjs.Graphics().p("AiCC2IAAlrIEEAAIAAFrg");
	var mask_1_graphics_347 = new cjs.Graphics().p("AiNC2IAAlrIEbAAIAAFrg");
	var mask_1_graphics_348 = new cjs.Graphics().p("AiZC2IAAlrIEzAAIAAFrg");
	var mask_1_graphics_349 = new cjs.Graphics().p("AikC2IAAlrIFJAAIAAFrg");
	var mask_1_graphics_350 = new cjs.Graphics().p("AixC2IAAlrIFjAAIAAFrg");
	var mask_1_graphics_351 = new cjs.Graphics().p("Ai8C2IAAlrIF5AAIAAFrg");
	var mask_1_graphics_352 = new cjs.Graphics().p("AjIC2IAAlrIGRAAIAAFrg");
	var mask_1_graphics_353 = new cjs.Graphics().p("AjTC2IAAlrIGnAAIAAFrg");
	var mask_1_graphics_354 = new cjs.Graphics().p("AjfC2IAAlrIG/AAIAAFrg");
	var mask_1_graphics_355 = new cjs.Graphics().p("AjrC2IAAlrIHXAAIAAFrg");
	var mask_1_graphics_356 = new cjs.Graphics().p("EAIcAghIAAltIHvAAIAAFtg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(342).to({graphics:mask_1_graphics_342,x:106.5,y:208.1}).wait(1).to({graphics:mask_1_graphics_343,x:203,y:398}).wait(1).to({graphics:mask_1_graphics_344,x:201.4,y:398}).wait(1).to({graphics:mask_1_graphics_345,x:199.8,y:398}).wait(1).to({graphics:mask_1_graphics_346,x:198.2,y:398}).wait(1).to({graphics:mask_1_graphics_347,x:196.6,y:398}).wait(1).to({graphics:mask_1_graphics_348,x:195,y:398}).wait(1).to({graphics:mask_1_graphics_349,x:193.5,y:398}).wait(1).to({graphics:mask_1_graphics_350,x:191.9,y:398}).wait(1).to({graphics:mask_1_graphics_351,x:190.3,y:398}).wait(1).to({graphics:mask_1_graphics_352,x:188.7,y:398}).wait(1).to({graphics:mask_1_graphics_353,x:187.1,y:398}).wait(1).to({graphics:mask_1_graphics_354,x:185.5,y:398}).wait(1).to({graphics:mask_1_graphics_355,x:183.9,y:398}).wait(1).to({graphics:mask_1_graphics_356,x:103.5,y:208.1}).wait(217));

	// Layer 11
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(20,1,1).p("Au3RCQjAgaBKinQBLinB1iGQF+n2INk0QKTmDGSno");
	this.shape_2.setTransform(290.7,287.8);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(342).to({_off:false},0).wait(231));

	// Layer 16
	this.instance_2 = new lib.ar5("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(270,211.6,1,1,31.2,0,0,0,-1.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(236).to({_off:false},0).wait(337));

	// Layer 10 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_236 = new cjs.Graphics().p("AABL7IAApBMAirAAAIAAJBg");
	var mask_2_graphics_237 = new cjs.Graphics().p("AxVEvIAApdMAirAAAIAAJdg");
	var mask_2_graphics_238 = new cjs.Graphics().p("AxWE9IAAp6MAitAAAIAAJ6g");
	var mask_2_graphics_239 = new cjs.Graphics().p("AxWFMIAAqXMAitAAAIAAKXg");
	var mask_2_graphics_240 = new cjs.Graphics().p("AxXFbIAAq1MAivAAAIAAK1g");
	var mask_2_graphics_241 = new cjs.Graphics().p("AxXFpIAArRMAiwAAAIAALRg");
	var mask_2_graphics_242 = new cjs.Graphics().p("AxYF4IAArvMAixAAAIAALvg");
	var mask_2_graphics_243 = new cjs.Graphics().p("AxZGGIAAsLMAizAAAIAAMLg");
	var mask_2_graphics_244 = new cjs.Graphics().p("AxZGVIAAspMAizAAAIAAMpg");
	var mask_2_graphics_245 = new cjs.Graphics().p("AxaGjIAAtFMAi1AAAIAANFg");
	var mask_2_graphics_246 = new cjs.Graphics().p("AxaGyIAAtjMAi2AAAIAANjg");
	var mask_2_graphics_247 = new cjs.Graphics().p("AxbHAIAAt/MAi3AAAIAAN/g");
	var mask_2_graphics_248 = new cjs.Graphics().p("AxbHPIAAudMAi4AAAIAAOdg");
	var mask_2_graphics_249 = new cjs.Graphics().p("AxcHdIAAu6MAi5AAAIAAO6g");
	var mask_2_graphics_250 = new cjs.Graphics().p("AxdHsIAAvXMAi7AAAIAAPXg");
	var mask_2_graphics_251 = new cjs.Graphics().p("AxdH7IAAv1MAi7AAAIAAP1g");
	var mask_2_graphics_252 = new cjs.Graphics().p("AxeIJIAAwRMAi9AAAIAAQRg");
	var mask_2_graphics_253 = new cjs.Graphics().p("AxeIYIAAwvMAi+AAAIAAQvg");
	var mask_2_graphics_254 = new cjs.Graphics().p("AxfImIAAxLMAi/AAAIAARLg");
	var mask_2_graphics_255 = new cjs.Graphics().p("AxgI1IAAxpMAjBAAAIAARpg");
	var mask_2_graphics_256 = new cjs.Graphics().p("AxgJDIAAyFMAjBAAAIAASFg");
	var mask_2_graphics_257 = new cjs.Graphics().p("AxhJSIAAyjMAjDAAAIAASjg");
	var mask_2_graphics_258 = new cjs.Graphics().p("AxiJgIAAy/MAjFAAAIAAS/g");
	var mask_2_graphics_259 = new cjs.Graphics().p("AxiJvIAAzdMAjFAAAIAATdg");
	var mask_2_graphics_260 = new cjs.Graphics().p("AxjJ9IAAz5MAjHAAAIAAT5g");
	var mask_2_graphics_261 = new cjs.Graphics().p("AxjKMIAA0XMAjHAAAIAAUXg");
	var mask_2_graphics_262 = new cjs.Graphics().p("AxkKaIAA0zMAjJAAAIAAUzg");
	var mask_2_graphics_263 = new cjs.Graphics().p("AxkKpIAA1RMAjKAAAIAAVRg");
	var mask_2_graphics_264 = new cjs.Graphics().p("AxlK3IAA1tMAjLAAAIAAVtg");
	var mask_2_graphics_265 = new cjs.Graphics().p("AxmLGIAA2LMAjNAAAIAAWLg");
	var mask_2_graphics_266 = new cjs.Graphics().p("AxmLVIAA2oMAjNAAAIAAWog");
	var mask_2_graphics_267 = new cjs.Graphics().p("AxnLjIAA3FMAjPAAAIAAXFg");
	var mask_2_graphics_268 = new cjs.Graphics().p("AxnLxIAA3hMAjPAAAIAAXhg");
	var mask_2_graphics_269 = new cjs.Graphics().p("AxoMAIAA3/MAjRAAAIAAX/g");
	var mask_2_graphics_270 = new cjs.Graphics().p("AxoMPIAA4dMAjSAAAIAAYdg");
	var mask_2_graphics_271 = new cjs.Graphics().p("AxpMdIAA45MAjTAAAIAAY5g");
	var mask_2_graphics_272 = new cjs.Graphics().p("AxqMsIAA5XMAjVAAAIAAZXg");
	var mask_2_graphics_273 = new cjs.Graphics().p("AxqM6IAA5zMAjVAAAIAAZzg");
	var mask_2_graphics_274 = new cjs.Graphics().p("AxrNJIAA6RMAjXAAAIAAaRg");
	var mask_2_graphics_275 = new cjs.Graphics().p("AxsNXIAA6tMAjZAAAIAAatg");
	var mask_2_graphics_276 = new cjs.Graphics().p("AxsNmIAA7LMAjZAAAIAAbLg");
	var mask_2_graphics_277 = new cjs.Graphics().p("AxtN0IAA7nMAjbAAAIAAbng");
	var mask_2_graphics_278 = new cjs.Graphics().p("AxtODIAA8FMAjbAAAIAAcFg");
	var mask_2_graphics_279 = new cjs.Graphics().p("AxuORIAA8iMAjdAAAIAAcig");
	var mask_2_graphics_280 = new cjs.Graphics().p("AxvOgIAA8/MAjfAAAIAAc/g");
	var mask_2_graphics_281 = new cjs.Graphics().p("AxvOvIAA9dMAjfAAAIAAddg");
	var mask_2_graphics_282 = new cjs.Graphics().p("AxwO9IAA95MAjhAAAIAAd5g");
	var mask_2_graphics_283 = new cjs.Graphics().p("AxwPMIAA+XMAjhAAAIAAeXg");
	var mask_2_graphics_284 = new cjs.Graphics().p("AxxPaIAA+zMAjjAAAIAAezg");
	var mask_2_graphics_285 = new cjs.Graphics().p("AxxPoIAA/QMAjjAAAIAAfQg");
	var mask_2_graphics_286 = new cjs.Graphics().p("AxyP3IAA/tMAjlAAAIAAftg");
	var mask_2_graphics_287 = new cjs.Graphics().p("AxyQFMAAAggJMAjmAAAMAAAAgJg");
	var mask_2_graphics_288 = new cjs.Graphics().p("AxzQUMAAAggnMAjnAAAMAAAAgng");
	var mask_2_graphics_289 = new cjs.Graphics().p("Ax0QiMAAAghDMAjpAAAMAAAAhDg");
	var mask_2_graphics_290 = new cjs.Graphics().p("Ax0QxMAAAghhMAjpAAAMAAAAhhg");
	var mask_2_graphics_291 = new cjs.Graphics().p("Ax1Q/MAAAgh9MAjrAAAMAAAAh9g");
	var mask_2_graphics_292 = new cjs.Graphics().p("Ax1RNMAAAgiZMAjsAAAMAAAAiZg");
	var mask_2_graphics_293 = new cjs.Graphics().p("Ax2RcMAAAgi3MAjtAAAMAAAAi3g");
	var mask_2_graphics_294 = new cjs.Graphics().p("Ax3RrMAAAgjUMAjvAAAMAAAAjUg");
	var mask_2_graphics_295 = new cjs.Graphics().p("Ax3R5MAAAgjxMAjvAAAMAAAAjxg");
	var mask_2_graphics_296 = new cjs.Graphics().p("Ax4SHMAAAgkNMAjxAAAMAAAAkNg");
	var mask_2_graphics_297 = new cjs.Graphics().p("Ax5SWMAAAgkrMAjzAAAMAAAAkrg");
	var mask_2_graphics_298 = new cjs.Graphics().p("Ax5SkMAAAglHMAjzAAAMAAAAlHg");
	var mask_2_graphics_299 = new cjs.Graphics().p("Ax6SzMAAAgllMAj1AAAMAAAAllg");
	var mask_2_graphics_300 = new cjs.Graphics().p("Ax6TBMAAAgmBMAj1AAAMAAAAmBg");
	var mask_2_graphics_301 = new cjs.Graphics().p("Ax7TQMAAAgmfMAj3AAAMAAAAmfg");
	var mask_2_graphics_302 = new cjs.Graphics().p("Ax7TdMAAAgm5MAj3AAAMAAAAm5g");
	var mask_2_graphics_303 = new cjs.Graphics().p("Ax8TqMAAAgnTMAj5AAAMAAAAnTg");
	var mask_2_graphics_304 = new cjs.Graphics().p("Ax9T4MAAAgnvMAj7AAAMAAAAnvg");
	var mask_2_graphics_305 = new cjs.Graphics().p("Ax9UFMAAAgoJMAj7AAAMAAAAoJg");
	var mask_2_graphics_306 = new cjs.Graphics().p("Ax+USMAAAgojMAj9AAAMAAAAojg");
	var mask_2_graphics_307 = new cjs.Graphics().p("Ax+UgMAAAgo/MAj9AAAMAAAAo/g");
	var mask_2_graphics_308 = new cjs.Graphics().p("Ax/UtMAAAgpZMAj/AAAMAAAApZg");
	var mask_2_graphics_309 = new cjs.Graphics().p("Ax/U6MAAAgpzMAkAAAAMAAAApzg");
	var mask_2_graphics_310 = new cjs.Graphics().p("AyAVHMAAAgqNMAkBAAAMAAAAqNg");
	var mask_2_graphics_311 = new cjs.Graphics().p("AyBVVMAAAgqpMAkDAAAMAAAAqpg");
	var mask_2_graphics_312 = new cjs.Graphics().p("AyBViMAAAgrDMAkDAAAMAAAArDg");
	var mask_2_graphics_313 = new cjs.Graphics().p("AyCV4MAAAgrvMAkFAAAMAAAArvg");
	var mask_2_graphics_314 = new cjs.Graphics().p("AyDWNMAAAgsZMAkHAAAMAAAAsZg");
	var mask_2_graphics_315 = new cjs.Graphics().p("AyDWiMAAAgtDMAkHAAAMAAAAtDg");
	var mask_2_graphics_316 = new cjs.Graphics().p("AyEW4MAAAgtvMAkJAAAMAAAAtvg");
	var mask_2_graphics_317 = new cjs.Graphics().p("AyEXNMAAAguZMAkJAAAMAAAAuZg");
	var mask_2_graphics_318 = new cjs.Graphics().p("AyFXjMAAAgvFMAkLAAAMAAAAvFg");
	var mask_2_graphics_319 = new cjs.Graphics().p("AyGX4MAAAgvvMAkNAAAMAAAAvvg");
	var mask_2_graphics_320 = new cjs.Graphics().p("AyGYOMAAAgwaMAkNAAAMAAAAwag");
	var mask_2_graphics_321 = new cjs.Graphics().p("Ahjf+MAAAgxFMAkPAAAMAAAAxFg");
	var mask_2_graphics_322 = new cjs.Graphics().p("AyiYjMAAAgxFMAlFAAAMAAAAxFg");
	var mask_2_graphics_323 = new cjs.Graphics().p("Ay8YjMAAAgxFMAl5AAAMAAAAxFg");
	var mask_2_graphics_324 = new cjs.Graphics().p("AzXYjMAAAgxFMAmvAAAMAAAAxFg");
	var mask_2_graphics_325 = new cjs.Graphics().p("AzxYjMAAAgxFMAnjAAAMAAAAxFg");
	var mask_2_graphics_326 = new cjs.Graphics().p("A0MYjMAAAgxFMAoZAAAMAAAAxFg");
	var mask_2_graphics_327 = new cjs.Graphics().p("Amif+MAAAgxFMApOAAAMAAAAxFg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(236).to({graphics:mask_2_graphics_236,x:222,y:76.3}).wait(1).to({graphics:mask_2_graphics_237,x:333,y:125.2}).wait(1).to({graphics:mask_2_graphics_238,x:332.9,y:126.7}).wait(1).to({graphics:mask_2_graphics_239,x:332.8,y:128.1}).wait(1).to({graphics:mask_2_graphics_240,x:332.8,y:129.6}).wait(1).to({graphics:mask_2_graphics_241,x:332.7,y:131}).wait(1).to({graphics:mask_2_graphics_242,x:332.7,y:132.5}).wait(1).to({graphics:mask_2_graphics_243,x:332.6,y:133.9}).wait(1).to({graphics:mask_2_graphics_244,x:332.5,y:135.4}).wait(1).to({graphics:mask_2_graphics_245,x:332.5,y:136.9}).wait(1).to({graphics:mask_2_graphics_246,x:332.4,y:138.3}).wait(1).to({graphics:mask_2_graphics_247,x:332.4,y:139.8}).wait(1).to({graphics:mask_2_graphics_248,x:332.3,y:141.2}).wait(1).to({graphics:mask_2_graphics_249,x:332.2,y:142.7}).wait(1).to({graphics:mask_2_graphics_250,x:332.2,y:144.2}).wait(1).to({graphics:mask_2_graphics_251,x:332.1,y:145.6}).wait(1).to({graphics:mask_2_graphics_252,x:332.1,y:147.1}).wait(1).to({graphics:mask_2_graphics_253,x:332,y:148.5}).wait(1).to({graphics:mask_2_graphics_254,x:332,y:150}).wait(1).to({graphics:mask_2_graphics_255,x:331.9,y:151.4}).wait(1).to({graphics:mask_2_graphics_256,x:331.8,y:152.9}).wait(1).to({graphics:mask_2_graphics_257,x:331.8,y:154.3}).wait(1).to({graphics:mask_2_graphics_258,x:331.7,y:155.8}).wait(1).to({graphics:mask_2_graphics_259,x:331.7,y:157.3}).wait(1).to({graphics:mask_2_graphics_260,x:331.6,y:158.7}).wait(1).to({graphics:mask_2_graphics_261,x:331.5,y:160.2}).wait(1).to({graphics:mask_2_graphics_262,x:331.5,y:161.6}).wait(1).to({graphics:mask_2_graphics_263,x:331.4,y:163.1}).wait(1).to({graphics:mask_2_graphics_264,x:331.4,y:164.6}).wait(1).to({graphics:mask_2_graphics_265,x:331.3,y:166}).wait(1).to({graphics:mask_2_graphics_266,x:331.2,y:167.5}).wait(1).to({graphics:mask_2_graphics_267,x:331.2,y:168.9}).wait(1).to({graphics:mask_2_graphics_268,x:331.1,y:170.4}).wait(1).to({graphics:mask_2_graphics_269,x:331.1,y:171.8}).wait(1).to({graphics:mask_2_graphics_270,x:331,y:173.3}).wait(1).to({graphics:mask_2_graphics_271,x:331,y:174.7}).wait(1).to({graphics:mask_2_graphics_272,x:330.9,y:176.2}).wait(1).to({graphics:mask_2_graphics_273,x:330.8,y:177.6}).wait(1).to({graphics:mask_2_graphics_274,x:330.8,y:179.1}).wait(1).to({graphics:mask_2_graphics_275,x:330.7,y:180.6}).wait(1).to({graphics:mask_2_graphics_276,x:330.7,y:182}).wait(1).to({graphics:mask_2_graphics_277,x:330.6,y:183.5}).wait(1).to({graphics:mask_2_graphics_278,x:330.5,y:184.9}).wait(1).to({graphics:mask_2_graphics_279,x:330.5,y:186.4}).wait(1).to({graphics:mask_2_graphics_280,x:330.4,y:187.9}).wait(1).to({graphics:mask_2_graphics_281,x:330.4,y:189.3}).wait(1).to({graphics:mask_2_graphics_282,x:330.3,y:190.8}).wait(1).to({graphics:mask_2_graphics_283,x:330.2,y:192.2}).wait(1).to({graphics:mask_2_graphics_284,x:330.2,y:193.7}).wait(1).to({graphics:mask_2_graphics_285,x:330.1,y:195.1}).wait(1).to({graphics:mask_2_graphics_286,x:330.1,y:196.6}).wait(1).to({graphics:mask_2_graphics_287,x:330,y:198}).wait(1).to({graphics:mask_2_graphics_288,x:330,y:199.4}).wait(1).to({graphics:mask_2_graphics_289,x:329.9,y:200.9}).wait(1).to({graphics:mask_2_graphics_290,x:329.8,y:202.3}).wait(1).to({graphics:mask_2_graphics_291,x:329.8,y:203.8}).wait(1).to({graphics:mask_2_graphics_292,x:329.7,y:205.3}).wait(1).to({graphics:mask_2_graphics_293,x:329.7,y:206.7}).wait(1).to({graphics:mask_2_graphics_294,x:329.6,y:208.2}).wait(1).to({graphics:mask_2_graphics_295,x:329.5,y:209.6}).wait(1).to({graphics:mask_2_graphics_296,x:329.5,y:211.1}).wait(1).to({graphics:mask_2_graphics_297,x:329.4,y:212.5}).wait(1).to({graphics:mask_2_graphics_298,x:329.4,y:213.9}).wait(1).to({graphics:mask_2_graphics_299,x:329.3,y:215.4}).wait(1).to({graphics:mask_2_graphics_300,x:329.2,y:216.8}).wait(1).to({graphics:mask_2_graphics_301,x:329.2,y:218.3}).wait(1).to({graphics:mask_2_graphics_302,x:329.1,y:219.6}).wait(1).to({graphics:mask_2_graphics_303,x:329.1,y:221}).wait(1).to({graphics:mask_2_graphics_304,x:329,y:222.3}).wait(1).to({graphics:mask_2_graphics_305,x:329,y:223.6}).wait(1).to({graphics:mask_2_graphics_306,x:328.9,y:224.9}).wait(1).to({graphics:mask_2_graphics_307,x:328.8,y:226.3}).wait(1).to({graphics:mask_2_graphics_308,x:328.8,y:227.6}).wait(1).to({graphics:mask_2_graphics_309,x:328.7,y:228.9}).wait(1).to({graphics:mask_2_graphics_310,x:328.7,y:230.3}).wait(1).to({graphics:mask_2_graphics_311,x:328.6,y:231.6}).wait(1).to({graphics:mask_2_graphics_312,x:328.5,y:232.9}).wait(1).to({graphics:mask_2_graphics_313,x:328.5,y:235.1}).wait(1).to({graphics:mask_2_graphics_314,x:328.4,y:237.2}).wait(1).to({graphics:mask_2_graphics_315,x:328.4,y:239.4}).wait(1).to({graphics:mask_2_graphics_316,x:328.3,y:241.5}).wait(1).to({graphics:mask_2_graphics_317,x:328.2,y:243.6}).wait(1).to({graphics:mask_2_graphics_318,x:328.2,y:245.8}).wait(1).to({graphics:mask_2_graphics_319,x:328.1,y:247.9}).wait(1).to({graphics:mask_2_graphics_320,x:328,y:250.1}).wait(1).to({graphics:mask_2_graphics_321,x:222,y:204.6}).wait(1).to({graphics:mask_2_graphics_322,x:325.3,y:252.2}).wait(1).to({graphics:mask_2_graphics_323,x:322.7,y:252.2}).wait(1).to({graphics:mask_2_graphics_324,x:320,y:252.2}).wait(1).to({graphics:mask_2_graphics_325,x:317.3,y:252.2}).wait(1).to({graphics:mask_2_graphics_326,x:314.7,y:252.2}).wait(1).to({graphics:mask_2_graphics_327,x:222,y:204.6}).wait(246));

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(20,1,1).p("ALdzDQiqFbjiGwQjhGwjVHfQjWHfh+CSQh/CSikga");
	this.shape_3.setTransform(265.4,274.7);
	this.shape_3._off = true;

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(236).to({_off:false},0).wait(337));

	// Layer 15
	this.instance_3 = new lib.ar1("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(150.2,154.1,1,1,0,110.3,-69.7,-0.8,0.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).wait(564));

	// Layer 23 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_144 = new cjs.Graphics().p("AIPOnIC+jDIJvJeIi9DEg");
	var mask_3_graphics_145 = new cjs.Graphics().p("AmdjFIDNjSIJuJdIjNDTg");
	var mask_3_graphics_146 = new cjs.Graphics().p("Amli9IDcjiIJvJdIjcDig");
	var mask_3_graphics_147 = new cjs.Graphics().p("Amsi2IDrjxIJuJeIjqDxg");
	var mask_3_graphics_148 = new cjs.Graphics().p("Am0iuID6kAIJuJdIj5EBg");
	var mask_3_graphics_149 = new cjs.Graphics().p("Am7imIEIkQIJvJeIkIEPg");
	var mask_3_graphics_150 = new cjs.Graphics().p("AnCifIEXkfIJuJeIkXEfg");
	var mask_3_graphics_151 = new cjs.Graphics().p("AnKiXIEmkuIJvJdIkmEug");
	var mask_3_graphics_152 = new cjs.Graphics().p("AnRiPIE1k+IJuJeIk0E9g");
	var mask_3_graphics_153 = new cjs.Graphics().p("AnYiIIFDlNIJuJeIlDFNg");
	var mask_3_graphics_154 = new cjs.Graphics().p("AngiAIFSlcIJvJdIlSFcg");
	var mask_3_graphics_155 = new cjs.Graphics().p("Annh5IFhlrIJuJeIlhFrg");
	var mask_3_graphics_156 = new cjs.Graphics().p("AnvhxIFwl7IJvJeIlwF7g");
	var mask_3_graphics_157 = new cjs.Graphics().p("An2hpIF+mKIJvJdIl+GKg");
	var mask_3_graphics_158 = new cjs.Graphics().p("An+hiIGOmZIJuJeImNGZg");
	var mask_3_graphics_159 = new cjs.Graphics().p("AoFhaIGcmoIJvJdImcGog");
	var mask_3_graphics_160 = new cjs.Graphics().p("AoMhSIGrm4IJuJdImrG4g");
	var mask_3_graphics_161 = new cjs.Graphics().p("AoUhLIG6nGIJvJdIm6HHg");
	var mask_3_graphics_162 = new cjs.Graphics().p("AobhDIHJnWIJuJdInJHWg");
	var mask_3_graphics_163 = new cjs.Graphics().p("Aojg8IHYnlIJvJeInYHlg");
	var mask_3_graphics_164 = new cjs.Graphics().p("Aoqg0IHnn0IJuJdInmH1g");
	var mask_3_graphics_165 = new cjs.Graphics().p("AoygsIH2oEIJvJeIn2IDg");
	var mask_3_graphics_166 = new cjs.Graphics().p("Ao5glIIEoTIJvJeIoEITg");
	var mask_3_graphics_167 = new cjs.Graphics().p("ApAgdIIToiIJuJdIoTIig");
	var mask_3_graphics_168 = new cjs.Graphics().p("ApIgVIIioyIJvJeIoiIxg");
	var mask_3_graphics_169 = new cjs.Graphics().p("ApPgOIIxpBIJuJeIowJBg");
	var mask_3_graphics_170 = new cjs.Graphics().p("ApWgGII/pQIJuJdIo/JQg");
	var mask_3_graphics_171 = new cjs.Graphics().p("ApeAAIJOpeIJvJeIpOJfg");
	var mask_3_graphics_172 = new cjs.Graphics().p("AplAIIJdptIJuJeIpdJtg");
	var mask_3_graphics_173 = new cjs.Graphics().p("AptAQIJsp9IJvJeIpsJ9g");
	var mask_3_graphics_174 = new cjs.Graphics().p("Ap0AXIJ5qLIJwJeIp5KMg");
	var mask_3_graphics_175 = new cjs.Graphics().p("Ap8AfIKJqbIJvJeIqIKbg");
	var mask_3_graphics_176 = new cjs.Graphics().p("AqDAmIKXqqIJwJfIqXKqg");
	var mask_3_graphics_177 = new cjs.Graphics().p("AqKAuIKmq5IJvJeIqmK6g");
	var mask_3_graphics_178 = new cjs.Graphics().p("AqSA2IK1rJIJwJfIq1LIg");
	var mask_3_graphics_179 = new cjs.Graphics().p("AqZA9ILErYIJvJfIrELYg");
	var mask_3_graphics_180 = new cjs.Graphics().p("AqhBFILTrnIJwJeIrTLng");
	var mask_3_graphics_181 = new cjs.Graphics().p("AqoBNILir3IJvJfIrhL2g");
	var mask_3_graphics_182 = new cjs.Graphics().p("AqwBUILxsGIJvJfIrwMGg");
	var mask_3_graphics_183 = new cjs.Graphics().p("Aq2BcIL+sVIJvJeIr+MVg");
	var mask_3_graphics_184 = new cjs.Graphics().p("Aq+BjIMNskIJwJfIsOMkg");
	var mask_3_graphics_185 = new cjs.Graphics().p("ArFBrIMcs0IJvJfIscM0g");
	var mask_3_graphics_186 = new cjs.Graphics().p("ArNBzIMrtDIJwJeIsrNDg");
	var mask_3_graphics_187 = new cjs.Graphics().p("ArUB6IM6tSIJvJfIs6NSg");
	var mask_3_graphics_188 = new cjs.Graphics().p("ArcCCINJthIJwJeItJNhg");
	var mask_3_graphics_189 = new cjs.Graphics().p("ArjCKINXtxIJwJeItYNxg");
	var mask_3_graphics_190 = new cjs.Graphics().p("ArqCRINmt/IJwJeItnOAg");
	var mask_3_graphics_191 = new cjs.Graphics().p("AryCZIN2uPIJvJeIt2OPg");
	var mask_3_graphics_192 = new cjs.Graphics().p("Ar5CgIOEueIJvJfIuEOeg");
	var mask_3_graphics_193 = new cjs.Graphics().p("AsBCoIOTuuIJwJfIuTOug");
	var mask_3_graphics_194 = new cjs.Graphics().p("AsICwIOhu9IJwJfIuiO8g");
	var mask_3_graphics_195 = new cjs.Graphics().p("AsPC3IOwvMIJwJfIuxPMg");
	var mask_3_graphics_196 = new cjs.Graphics().p("AsXC/IPAvbIJvJeIvAPbg");
	var mask_3_graphics_197 = new cjs.Graphics().p("AseDGIPOvqIJvJfIvOPqg");
	var mask_3_graphics_198 = new cjs.Graphics().p("AsmDOIPdv5IJwJeIvdP6g");
	var mask_3_graphics_199 = new cjs.Graphics().p("AstDWIPswJIJvJeIvsQJg");
	var mask_3_graphics_200 = new cjs.Graphics().p("As0DdIP6wYIJvJfIv6QYg");
	var mask_3_graphics_201 = new cjs.Graphics().p("As8DlIQJwnIJwJeIwKQng");
	var mask_3_graphics_202 = new cjs.Graphics().p("AtDDtIQYw3IJvJeIwYQ3g");
	var mask_3_graphics_203 = new cjs.Graphics().p("AtLD0IQnxFIJwJeIwnRGg");
	var mask_3_graphics_204 = new cjs.Graphics().p("AtSD8IQ2xVIJvJeIw2RVg");
	var mask_3_graphics_205 = new cjs.Graphics().p("AtaEDIRFxkIJwJfIxFRkg");
	var mask_3_graphics_206 = new cjs.Graphics().p("AthELIRTx0IJwJfIxUR0g");
	var mask_3_graphics_207 = new cjs.Graphics().p("AtoETIRiyDIJwJfIxjSCg");
	var mask_3_graphics_208 = new cjs.Graphics().p("AtwEaIRyySIJvJfIxySSg");
	var mask_3_graphics_209 = new cjs.Graphics().p("At3EiISAyhIJvJeIyAShg");
	var mask_3_graphics_210 = new cjs.Graphics().p("At/EqISPyxIJwJfIyPSwg");
	var mask_3_graphics_211 = new cjs.Graphics().p("AuGExISezAIJvJfIyeTAg");
	var mask_3_graphics_212 = new cjs.Graphics().p("AuNE5ISszPIJwJeIytTPg");
	var mask_3_graphics_213 = new cjs.Graphics().p("AuVFAIS8zeIJvJfIy8Teg");
	var mask_3_graphics_214 = new cjs.Graphics().p("AucFIITKztIJvJeIzKTug");
	var mask_3_graphics_215 = new cjs.Graphics().p("AukFQITZz9IJwJeIzZT9g");
	var mask_3_graphics_216 = new cjs.Graphics().p("AurFXITo0MIJvJfIzoUMg");
	var mask_3_graphics_217 = new cjs.Graphics().p("AuyFfIT20bIJvJeIz2Ubg");
	var mask_3_graphics_218 = new cjs.Graphics().p("Au6FnIUF0rIJwJeI0GUrg");
	var mask_3_graphics_219 = new cjs.Graphics().p("AvBFuIUU06IJvJfI0UU6g");
	var mask_3_graphics_220 = new cjs.Graphics().p("AvJF2IUj1JIJwJeI0jVJg");
	var mask_3_graphics_221 = new cjs.Graphics().p("AgrOnIUy1YIJwJdI0zVag");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(144).to({graphics:mask_3_graphics_144,x:134,y:154.2}).wait(1).to({graphics:mask_3_graphics_145,x:228.2,y:267.5}).wait(1).to({graphics:mask_3_graphics_146,x:228.9,y:266.7}).wait(1).to({graphics:mask_3_graphics_147,x:229.7,y:265.9}).wait(1).to({graphics:mask_3_graphics_148,x:230.4,y:265.2}).wait(1).to({graphics:mask_3_graphics_149,x:231.1,y:264.4}).wait(1).to({graphics:mask_3_graphics_150,x:231.9,y:263.6}).wait(1).to({graphics:mask_3_graphics_151,x:232.6,y:262.9}).wait(1).to({graphics:mask_3_graphics_152,x:233.4,y:262.1}).wait(1).to({graphics:mask_3_graphics_153,x:234.1,y:261.4}).wait(1).to({graphics:mask_3_graphics_154,x:234.8,y:260.6}).wait(1).to({graphics:mask_3_graphics_155,x:235.6,y:259.8}).wait(1).to({graphics:mask_3_graphics_156,x:236.3,y:259.1}).wait(1).to({graphics:mask_3_graphics_157,x:237.1,y:258.3}).wait(1).to({graphics:mask_3_graphics_158,x:237.8,y:257.5}).wait(1).to({graphics:mask_3_graphics_159,x:238.6,y:256.8}).wait(1).to({graphics:mask_3_graphics_160,x:239.3,y:256}).wait(1).to({graphics:mask_3_graphics_161,x:240,y:255.3}).wait(1).to({graphics:mask_3_graphics_162,x:240.8,y:254.5}).wait(1).to({graphics:mask_3_graphics_163,x:241.5,y:253.7}).wait(1).to({graphics:mask_3_graphics_164,x:242.3,y:253}).wait(1).to({graphics:mask_3_graphics_165,x:243,y:252.2}).wait(1).to({graphics:mask_3_graphics_166,x:243.7,y:251.4}).wait(1).to({graphics:mask_3_graphics_167,x:244.5,y:250.7}).wait(1).to({graphics:mask_3_graphics_168,x:245.2,y:249.9}).wait(1).to({graphics:mask_3_graphics_169,x:246,y:249.2}).wait(1).to({graphics:mask_3_graphics_170,x:246.7,y:248.4}).wait(1).to({graphics:mask_3_graphics_171,x:247.5,y:247.6}).wait(1).to({graphics:mask_3_graphics_172,x:248.2,y:246.9}).wait(1).to({graphics:mask_3_graphics_173,x:248.9,y:246.1}).wait(1).to({graphics:mask_3_graphics_174,x:249.7,y:245.4}).wait(1).to({graphics:mask_3_graphics_175,x:250.4,y:244.6}).wait(1).to({graphics:mask_3_graphics_176,x:251.2,y:243.8}).wait(1).to({graphics:mask_3_graphics_177,x:251.9,y:243.1}).wait(1).to({graphics:mask_3_graphics_178,x:252.6,y:242.3}).wait(1).to({graphics:mask_3_graphics_179,x:253.4,y:241.5}).wait(1).to({graphics:mask_3_graphics_180,x:254.1,y:240.8}).wait(1).to({graphics:mask_3_graphics_181,x:254.9,y:240}).wait(1).to({graphics:mask_3_graphics_182,x:255.6,y:239.3}).wait(1).to({graphics:mask_3_graphics_183,x:256.4,y:238.5}).wait(1).to({graphics:mask_3_graphics_184,x:257.1,y:237.7}).wait(1).to({graphics:mask_3_graphics_185,x:257.9,y:237}).wait(1).to({graphics:mask_3_graphics_186,x:258.6,y:236.2}).wait(1).to({graphics:mask_3_graphics_187,x:259.3,y:235.4}).wait(1).to({graphics:mask_3_graphics_188,x:260.1,y:234.7}).wait(1).to({graphics:mask_3_graphics_189,x:260.8,y:233.9}).wait(1).to({graphics:mask_3_graphics_190,x:261.6,y:233.2}).wait(1).to({graphics:mask_3_graphics_191,x:262.3,y:232.4}).wait(1).to({graphics:mask_3_graphics_192,x:263,y:231.6}).wait(1).to({graphics:mask_3_graphics_193,x:263.8,y:230.9}).wait(1).to({graphics:mask_3_graphics_194,x:264.5,y:230.1}).wait(1).to({graphics:mask_3_graphics_195,x:265.3,y:229.3}).wait(1).to({graphics:mask_3_graphics_196,x:266,y:228.6}).wait(1).to({graphics:mask_3_graphics_197,x:266.7,y:227.8}).wait(1).to({graphics:mask_3_graphics_198,x:267.5,y:227.1}).wait(1).to({graphics:mask_3_graphics_199,x:268.2,y:226.3}).wait(1).to({graphics:mask_3_graphics_200,x:269,y:225.5}).wait(1).to({graphics:mask_3_graphics_201,x:269.7,y:224.8}).wait(1).to({graphics:mask_3_graphics_202,x:270.5,y:224}).wait(1).to({graphics:mask_3_graphics_203,x:271.2,y:223.3}).wait(1).to({graphics:mask_3_graphics_204,x:271.9,y:222.5}).wait(1).to({graphics:mask_3_graphics_205,x:272.7,y:221.7}).wait(1).to({graphics:mask_3_graphics_206,x:273.4,y:221}).wait(1).to({graphics:mask_3_graphics_207,x:274.2,y:220.2}).wait(1).to({graphics:mask_3_graphics_208,x:274.9,y:219.4}).wait(1).to({graphics:mask_3_graphics_209,x:275.6,y:218.7}).wait(1).to({graphics:mask_3_graphics_210,x:276.4,y:217.9}).wait(1).to({graphics:mask_3_graphics_211,x:277.1,y:217.2}).wait(1).to({graphics:mask_3_graphics_212,x:277.9,y:216.4}).wait(1).to({graphics:mask_3_graphics_213,x:278.6,y:215.6}).wait(1).to({graphics:mask_3_graphics_214,x:279.3,y:214.9}).wait(1).to({graphics:mask_3_graphics_215,x:280.1,y:214.1}).wait(1).to({graphics:mask_3_graphics_216,x:280.8,y:213.3}).wait(1).to({graphics:mask_3_graphics_217,x:281.6,y:212.6}).wait(1).to({graphics:mask_3_graphics_218,x:282.3,y:211.8}).wait(1).to({graphics:mask_3_graphics_219,x:283.1,y:211.1}).wait(1).to({graphics:mask_3_graphics_220,x:283.8,y:210.3}).wait(1).to({graphics:mask_3_graphics_221,x:191.1,y:154.2}).wait(352));

	// Layer 22
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(20,1,1).p("AuuiQQBvhkBYg9QBYg8B8hTQB8hSCwg0QCvgzgICOQgICOg6BrQg6BrhJB/QhIB+hICiQhJCiAjBZQAjBZBqgTQCLgaB9hGQB8hGBrhpQBqhoBfhiQBehhBMheQBMhfBWh+QBWh+A+hbQA+hcAHgK");
	this.shape_4.setTransform(245,213.2);
	this.shape_4._off = true;

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(144).to({_off:false},0).wait(429));

	// Layer 21 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_119 = new cjs.Graphics().p("ADsOrQAZkNDQitQDQitENAZQEHAZCrDIIvsNBQiljNAZkHg");
	var mask_4_graphics_120 = new cjs.Graphics().p("AD3PEQAIkODFi5QDFi6EOAIQEIAIC4C9Iu2N/QixjCAHkJg");
	var mask_4_graphics_121 = new cjs.Graphics().p("AEHPfQgJkPC4jFQC5jGENgJQEJgJDDCxIt7O5Qi9i2gJkIg");
	var mask_4_graphics_122 = new cjs.Graphics().p("AEZP6QgakNCsjRQCrjRENgaQEIgaDNCkIs8PwQjJiqgakHg");
	var mask_4_graphics_123 = new cjs.Graphics().p("AEwQWQgrkLCejbQCdjcELgrQEFgqDYCWIr6QjQjUidgqkFg");
	var mask_4_graphics_124 = new cjs.Graphics().p("AFJQyQg8kHCQjlQCQjlEHg8QECg7DhCJIq2RQQjdiPg7kCg");
	var mask_4_graphics_125 = new cjs.Graphics().p("AFmRQQhMkECAjtQCBjuEDhMQD+hMDpB6IpuR7QjliBhMj9g");
	var mask_4_graphics_126 = new cjs.Graphics().p("AGGRtQhdj+Byj1QBxj1D+hdQD4hbDxBrIolSfQjthyhbj4g");
	var mask_4_graphics_127 = new cjs.Graphics().p("AGpSLQhtj4Bij7QBij8D3htQDyhrD3BbInYTBQj0hjhrjyg");
	var mask_4_graphics_128 = new cjs.Graphics().p("AHPSpQh9jwBSkCQBSkBDvh9QDrh6D8BMImKTcQj5hTh6jrg");
	var mask_4_graphics_129 = new cjs.Graphics().p("AH3THQiLjoBBkGQBBkGDniMQDjiIEAA7Ik6TyQj+hDiJjig");
	var mask_4_graphics_130 = new cjs.Graphics().p("AIiTlQiajfAxkKQAwkJDeiaQDaiXEDArIjpUEQkCgziXjZg");
	var mask_4_graphics_131 = new cjs.Graphics().p("AJQUCQiojUAfkMQAgkNDUinQDPikEGAaIiXUQQkFgiikjQg");
	var mask_4_graphics_132 = new cjs.Graphics().p("AJ/UgQi1jJAPkOQAOkODJi1QDFixEGAKIhEUXQkHgSixjEg");
	var mask_4_graphics_133 = new cjs.Graphics().p("AKqU8QjBi9gDkOQgDkOC9jBQC5i9EHgHIAOUYQkHgBi9i5g");
	var mask_4_graphics_134 = new cjs.Graphics().p("AKzVYQjMiwgUkOQgUkOCwjMQCtjJEGgXIBhUVIgsABQjsAAi4ieg");
	var mask_4_graphics_135 = new cjs.Graphics().p("AK/VyQjXikglkLQgmkMCjjXQCgjUEEgnICzUMQgsAFgqAAQjSAAiwiEg");
	var mask_4_graphics_136 = new cjs.Graphics().p("ALNWJQjiiVg2kJQg2kJCVjhQCSjdEBg4IEFT+QhBAMg+AAQi7AAilhtg");
	var mask_4_graphics_137 = new cjs.Graphics().p("ALcWeQjriGhGkFQhHkFCGjqQCEjmD9hJIFVTsQhUAVhSAAQilAAiZhYg");
	var mask_4_graphics_138 = new cjs.Graphics().p("ALsWxQjyh3hXkAQhXkAB3jyQB1juD3hYIGlTTQhnAhhkAAQiRAAiMhFg");
	var mask_4_graphics_139 = new cjs.Graphics().p("AL/XCQj6hohnj6Qhnj5Bnj6QBmj0DxhoIHyS2Qh3Avh4AAQh9AAh8g0g");
	var mask_4_graphics_140 = new cjs.Graphics().p("AMSXRQj/hYh3jzQh3jzBYj/QBVj7Drh3II+SUQiHBAiLAAQhqAAhtglg");
	var mask_4_graphics_141 = new cjs.Graphics().p("AMnXdQkEhIiGjrQiGjqBHkFQBGj/DiiGIKHRtQiVBSifAAQhXAAhbgYg");
	var mask_4_graphics_142 = new cjs.Graphics().p("AM+XmQkJg3iVjhQiUjiA2kIQA2kEDZiUILORCQihBni1AAQhEAAhHgPg");
	var mask_4_graphics_143 = new cjs.Graphics().p("ANVXtQkLgmijjXQiijYAlkMQAlkGDQihIMRQSQisB9jMAAQgxAAgygHg");
	var mask_4_graphics_144 = new cjs.Graphics().p("ANuXwQkOgUiwjNQiwjOAVkNQAUkIDFiuINSPeQi1CXjmAAQgbAAgcgDg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(119).to({graphics:mask_4_graphics_119,x:138,y:140.7}).wait(1).to({graphics:mask_4_graphics_120,x:136.7,y:142.3}).wait(1).to({graphics:mask_4_graphics_121,x:135.2,y:143.7}).wait(1).to({graphics:mask_4_graphics_122,x:133.6,y:145.1}).wait(1).to({graphics:mask_4_graphics_123,x:132,y:146.4}).wait(1).to({graphics:mask_4_graphics_124,x:130.3,y:147.5}).wait(1).to({graphics:mask_4_graphics_125,x:128.5,y:148.6}).wait(1).to({graphics:mask_4_graphics_126,x:126.7,y:149.5}).wait(1).to({graphics:mask_4_graphics_127,x:124.8,y:150.4}).wait(1).to({graphics:mask_4_graphics_128,x:122.8,y:151.1}).wait(1).to({graphics:mask_4_graphics_129,x:120.8,y:151.6}).wait(1).to({graphics:mask_4_graphics_130,x:118.8,y:152.1}).wait(1).to({graphics:mask_4_graphics_131,x:116.8,y:152.4}).wait(1).to({graphics:mask_4_graphics_132,x:114.7,y:152.6}).wait(1).to({graphics:mask_4_graphics_133,x:113.4,y:152.6}).wait(1).to({graphics:mask_4_graphics_134,x:115.5,y:152.6}).wait(1).to({graphics:mask_4_graphics_135,x:117.5,y:152.6}).wait(1).to({graphics:mask_4_graphics_136,x:119.6,y:152.6}).wait(1).to({graphics:mask_4_graphics_137,x:121.6,y:152.6}).wait(1).to({graphics:mask_4_graphics_138,x:123.6,y:152.6}).wait(1).to({graphics:mask_4_graphics_139,x:125.6,y:152.6}).wait(1).to({graphics:mask_4_graphics_140,x:127.5,y:152.6}).wait(1).to({graphics:mask_4_graphics_141,x:129.3,y:152.5}).wait(1).to({graphics:mask_4_graphics_142,x:131.1,y:152.5}).wait(1).to({graphics:mask_4_graphics_143,x:132.8,y:152.4}).wait(1).to({graphics:mask_4_graphics_144,x:134.4,y:152.3}).wait(429));

	// Layer 20
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(20,1,1).p("AuuiQQBvhkBYg9QBYg8B8hTQB8hSCwg0QCvgzgICOQgICOg6BrQg6BrhJB/QhIB+hICiQhJCiAjBZQAjBZBqgTQCLgaB9hGQB8hGBrhpQBqhoBfhiQBehhBMheQBMhfBWh+QBWh+A+hbQA+hcAHgK");
	this.shape_5.setTransform(245,213.2);
	this.shape_5._off = true;

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(119).to({_off:false},0).wait(454));

	// Layer 19 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_68 = new cjs.Graphics().p("AMvIeID5llIFcDzIj6Flg");
	var mask_5_graphics_69 = new cjs.Graphics().p("AkyBBIEGl2IFfD2IkGF1g");
	var mask_5_graphics_70 = new cjs.Graphics().p("Ak6BIIESmHIFjD4IkSGHg");
	var mask_5_graphics_71 = new cjs.Graphics().p("AlCBQIEfmaIFmD7IkfGag");
	var mask_5_graphics_72 = new cjs.Graphics().p("AlKBXIErmrIFqD9IkrGsg");
	var mask_5_graphics_73 = new cjs.Graphics().p("AlTBfIE4m9IFvEAIk5G+g");
	var mask_5_graphics_74 = new cjs.Graphics().p("AlbBnIFFnQIFyEDIlFHQg");
	var mask_5_graphics_75 = new cjs.Graphics().p("AljBvIFRniIF2EFIlSHig");
	var mask_5_graphics_76 = new cjs.Graphics().p("AlrB2IFdnzIF6EHIldH1g");
	var mask_5_graphics_77 = new cjs.Graphics().p("AlzB+IFqoGIF9ELIlqIGg");
	var mask_5_graphics_78 = new cjs.Graphics().p("Al7CGIF2oYIGBENIl2IYg");
	var mask_5_graphics_79 = new cjs.Graphics().p("AmECNIGEoqIGFEQImEIrg");
	var mask_5_graphics_80 = new cjs.Graphics().p("AmMCVIGPo8IGKETImPI8g");
	var mask_5_graphics_81 = new cjs.Graphics().p("AmUCdIGbpOIGOEVImbJOg");
	var mask_5_graphics_82 = new cjs.Graphics().p("AmcClIGophIGSEYImpJhg");
	var mask_5_graphics_83 = new cjs.Graphics().p("AmkCtIG0pzIGVEbIm0Jyg");
	var mask_5_graphics_84 = new cjs.Graphics().p("AmtC0IHCqEIGZEdInCKEg");
	var mask_5_graphics_85 = new cjs.Graphics().p("Am1C8IHOqXIGdEgInOKXg");
	var mask_5_graphics_86 = new cjs.Graphics().p("Am9DDIHbqoIGgEjInbKog");
	var mask_5_graphics_87 = new cjs.Graphics().p("AnFDLIHnq6IGkElInnK6g");
	var mask_5_graphics_88 = new cjs.Graphics().p("AnNDTIHzrNIGpEoIn0LNg");
	var mask_5_graphics_89 = new cjs.Graphics().p("AnWDaIIBreIGsEqIoBLfg");
	var mask_5_graphics_90 = new cjs.Graphics().p("AneDjIINrxIGwEtIoNLxg");
	var mask_5_graphics_91 = new cjs.Graphics().p("AnmDqIIasDIGzEwIoaMDg");
	var mask_5_graphics_92 = new cjs.Graphics().p("AnuDyIImsVIG3EyIomMVg");
	var mask_5_graphics_93 = new cjs.Graphics().p("An3D5II0snIG6E2IoyMng");
	var mask_5_graphics_94 = new cjs.Graphics().p("An/EBIJAs5IG/E4IpAM5g");
	var mask_5_graphics_95 = new cjs.Graphics().p("AoHEJIJMtLIHDE6IpMNMg");
	var mask_5_graphics_96 = new cjs.Graphics().p("AoQERIJateIHHE+IpaNdg");
	var mask_5_graphics_97 = new cjs.Graphics().p("AoYEYIJmtwIHLFAIpmNxg");
	var mask_5_graphics_98 = new cjs.Graphics().p("AogEgIJzuCIHOFDIpzOCg");
	var mask_5_graphics_99 = new cjs.Graphics().p("AooEoIKAuVIHSFGIqAOVg");
	var mask_5_graphics_100 = new cjs.Graphics().p("AoxEwIKNunIHWFIIqMOng");
	var mask_5_graphics_101 = new cjs.Graphics().p("Ao5E4IKZu6IHaFLIqZO6g");
	var mask_5_graphics_102 = new cjs.Graphics().p("ApBFAIKlvMIHeFOIqlPLg");
	var mask_5_graphics_103 = new cjs.Graphics().p("ApKFHIKzveIHiFRIqzPeg");
	var mask_5_graphics_104 = new cjs.Graphics().p("ApTFQILAvxIHmFSIrAPyg");
	var mask_5_graphics_105 = new cjs.Graphics().p("ApbFXILNwDIHpFWIrMQDg");
	var mask_5_graphics_106 = new cjs.Graphics().p("ApjFfILZwVIHuFYIraQVg");
	var mask_5_graphics_107 = new cjs.Graphics().p("ApsFnILnwoIHxFbIrmQog");
	var mask_5_graphics_108 = new cjs.Graphics().p("Ap0FvILzw7IH2FeIr0Q7g");
	var mask_5_graphics_109 = new cjs.Graphics().p("Ap8F2IMAxMIH5FhIsARMg");
	var mask_5_graphics_110 = new cjs.Graphics().p("AqFF+IMNxfIH+FkIsNRfg");
	var mask_5_graphics_111 = new cjs.Graphics().p("AqNGGIMaxxIIBFmIsaRxg");
	var mask_5_graphics_112 = new cjs.Graphics().p("AqVGOIMnyEIIEFpIsmSEg");
	var mask_5_graphics_113 = new cjs.Graphics().p("AqdGVIMzyVIIJFrIs0SXg");
	var mask_5_graphics_114 = new cjs.Graphics().p("AqmGeINAypIINFuItBSpg");
	var mask_5_graphics_115 = new cjs.Graphics().p("AquGlINNy6IIQFxItNS6g");
	var mask_5_graphics_116 = new cjs.Graphics().p("Aq3GuINazOIIVF0ItaTNg");
	var mask_5_graphics_117 = new cjs.Graphics().p("Aq/G1INnzgIIYF3ItnTgg");
	var mask_5_graphics_118 = new cjs.Graphics().p("ArHG9INzzyIIcF5ItzTyg");
	var mask_5_graphics_119 = new cjs.Graphics().p("ABDOqIOB0EIIgF7IuBUFg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(68).to({graphics:mask_5_graphics_68,x:141.2,y:78.5}).wait(1).to({graphics:mask_5_graphics_69,x:252,y:128}).wait(1).to({graphics:mask_5_graphics_70,x:251.6,y:129.1}).wait(1).to({graphics:mask_5_graphics_71,x:251.1,y:130.1}).wait(1).to({graphics:mask_5_graphics_72,x:250.7,y:131.1}).wait(1).to({graphics:mask_5_graphics_73,x:250.3,y:132.2}).wait(1).to({graphics:mask_5_graphics_74,x:249.8,y:133.2}).wait(1).to({graphics:mask_5_graphics_75,x:249.4,y:134.2}).wait(1).to({graphics:mask_5_graphics_76,x:248.9,y:135.3}).wait(1).to({graphics:mask_5_graphics_77,x:248.5,y:136.3}).wait(1).to({graphics:mask_5_graphics_78,x:248,y:137.3}).wait(1).to({graphics:mask_5_graphics_79,x:247.6,y:138.4}).wait(1).to({graphics:mask_5_graphics_80,x:247.1,y:139.4}).wait(1).to({graphics:mask_5_graphics_81,x:246.7,y:140.5}).wait(1).to({graphics:mask_5_graphics_82,x:246.3,y:141.5}).wait(1).to({graphics:mask_5_graphics_83,x:245.8,y:142.5}).wait(1).to({graphics:mask_5_graphics_84,x:245.4,y:143.6}).wait(1).to({graphics:mask_5_graphics_85,x:244.9,y:144.6}).wait(1).to({graphics:mask_5_graphics_86,x:244.5,y:145.6}).wait(1).to({graphics:mask_5_graphics_87,x:244,y:146.7}).wait(1).to({graphics:mask_5_graphics_88,x:243.6,y:147.7}).wait(1).to({graphics:mask_5_graphics_89,x:243.1,y:148.7}).wait(1).to({graphics:mask_5_graphics_90,x:242.7,y:149.8}).wait(1).to({graphics:mask_5_graphics_91,x:242.3,y:150.8}).wait(1).to({graphics:mask_5_graphics_92,x:241.8,y:151.8}).wait(1).to({graphics:mask_5_graphics_93,x:241.4,y:152.9}).wait(1).to({graphics:mask_5_graphics_94,x:240.9,y:153.9}).wait(1).to({graphics:mask_5_graphics_95,x:240.5,y:155}).wait(1).to({graphics:mask_5_graphics_96,x:240,y:156}).wait(1).to({graphics:mask_5_graphics_97,x:239.6,y:157.1}).wait(1).to({graphics:mask_5_graphics_98,x:239.1,y:158.1}).wait(1).to({graphics:mask_5_graphics_99,x:238.7,y:159.2}).wait(1).to({graphics:mask_5_graphics_100,x:238.2,y:160.2}).wait(1).to({graphics:mask_5_graphics_101,x:237.8,y:161.3}).wait(1).to({graphics:mask_5_graphics_102,x:237.3,y:162.4}).wait(1).to({graphics:mask_5_graphics_103,x:236.9,y:163.4}).wait(1).to({graphics:mask_5_graphics_104,x:236.4,y:164.5}).wait(1).to({graphics:mask_5_graphics_105,x:236,y:165.5}).wait(1).to({graphics:mask_5_graphics_106,x:235.5,y:166.6}).wait(1).to({graphics:mask_5_graphics_107,x:235.1,y:167.6}).wait(1).to({graphics:mask_5_graphics_108,x:234.6,y:168.7}).wait(1).to({graphics:mask_5_graphics_109,x:234.2,y:169.7}).wait(1).to({graphics:mask_5_graphics_110,x:233.7,y:170.8}).wait(1).to({graphics:mask_5_graphics_111,x:233.3,y:171.8}).wait(1).to({graphics:mask_5_graphics_112,x:232.8,y:172.9}).wait(1).to({graphics:mask_5_graphics_113,x:232.4,y:174}).wait(1).to({graphics:mask_5_graphics_114,x:231.9,y:175}).wait(1).to({graphics:mask_5_graphics_115,x:231.4,y:176.1}).wait(1).to({graphics:mask_5_graphics_116,x:231,y:177.1}).wait(1).to({graphics:mask_5_graphics_117,x:230.6,y:178.2}).wait(1).to({graphics:mask_5_graphics_118,x:230.1,y:179.2}).wait(1).to({graphics:mask_5_graphics_119,x:150.8,y:131.8}).wait(454));

	// Layer 18
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(20,1,1).p("AuuiQQBvhkBYg9QBYg8B8hTQB8hSCwg0QCvgzgICOQgICOg6BrQg6BrhJB/QhIB+hICiQhJCiAjBZQAjBZBqgTQCLgaB9hGQB8hGBrhpQBqhoBfhiQBehhBMheQBMhfBWh+QBWh+A+hbQA+hcAHgK");
	this.shape_6.setTransform(245,213.2);
	this.shape_6._off = true;

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(68).to({_off:false},0).wait(505));

	// Layer 13 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_9 = new cjs.Graphics().p("ADQNYIFTkAIEGFcIlTD/g");
	var mask_6_graphics_10 = new cjs.Graphics().p("AkygoIFgkJIEFFaIlfEKg");
	var mask_6_graphics_11 = new cjs.Graphics().p("Ak5gjIFukTIEFFZIluEVg");
	var mask_6_graphics_12 = new cjs.Graphics().p("AlAgdIF8keIEEFZIl7Eeg");
	var mask_6_graphics_13 = new cjs.Graphics().p("AlHgYIGKkpIEFFaImKEpg");
	var mask_6_graphics_14 = new cjs.Graphics().p("AlNgSIGXk0IEEFaImXEzg");
	var mask_6_graphics_15 = new cjs.Graphics().p("AlUgNIGkk+IEFFZImkE+g");
	var mask_6_graphics_16 = new cjs.Graphics().p("AlbgIIGzlIIEEFZImyFIg");
	var mask_6_graphics_17 = new cjs.Graphics().p("AligDIHAlSIEFFYInAFTg");
	var mask_6_graphics_18 = new cjs.Graphics().p("AloACIHOlcIEDFZInNFcg");
	var mask_6_graphics_19 = new cjs.Graphics().p("AlvAHIHclmIEDFZIncFmg");
	var mask_6_graphics_20 = new cjs.Graphics().p("Al2AMIHqlwIEDFZInpFwg");
	var mask_6_graphics_21 = new cjs.Graphics().p("Al9ASIH3l7IEEFYIn3F7g");
	var mask_6_graphics_22 = new cjs.Graphics().p("AmEAXIIGmFIECFYIoEGFg");
	var mask_6_graphics_23 = new cjs.Graphics().p("AmKAcIISmPIEDFYIoSGPg");
	var mask_6_graphics_24 = new cjs.Graphics().p("AmRAiIIgmaIEDFXIogGag");
	var mask_6_graphics_25 = new cjs.Graphics().p("AmYAnIIumkIEDFXIouGkg");
	var mask_6_graphics_26 = new cjs.Graphics().p("AmfAsII9muIEBFXIo7Gug");
	var mask_6_graphics_27 = new cjs.Graphics().p("AmlAxIJJm5IECFXIpJG5g");
	var mask_6_graphics_28 = new cjs.Graphics().p("AmsA3IJXnDIECFWIpXHEg");
	var mask_6_graphics_29 = new cjs.Graphics().p("AmzA8IJlnOIECFWIplHPg");
	var mask_6_graphics_30 = new cjs.Graphics().p("Am6BBIJznXIECFWIpzHXg");
	var mask_6_graphics_31 = new cjs.Graphics().p("AnBBHIKBnjIEBFWIqAHjg");
	var mask_6_graphics_32 = new cjs.Graphics().p("AnHBNIKOnuIEBFWIqOHtg");
	var mask_6_graphics_33 = new cjs.Graphics().p("AnOBSIKcn4IEBFVIqcH4g");
	var mask_6_graphics_34 = new cjs.Graphics().p("AnUBXIKpoCIEAFVIqpICg");
	var mask_6_graphics_35 = new cjs.Graphics().p("AnbBcIK3oMIEAFVIq3IMg");
	var mask_6_graphics_36 = new cjs.Graphics().p("AniBiILFoXIEAFUIrFIXg");
	var mask_6_graphics_37 = new cjs.Graphics().p("AnpBnILTohIEAFUIrTIhg");
	var mask_6_graphics_38 = new cjs.Graphics().p("AnwBtILhosIEAFUIrhIrg");
	var mask_6_graphics_39 = new cjs.Graphics().p("An2ByILto2IEBFUIrvI1g");
	var mask_6_graphics_40 = new cjs.Graphics().p("An9B3IL8pAID/FTIr8JAg");
	var mask_6_graphics_41 = new cjs.Graphics().p("AoEB8IMKpKID/FTIsJJKg");
	var mask_6_graphics_42 = new cjs.Graphics().p("AoLCCIMYpVID/FSIsYJVg");
	var mask_6_graphics_43 = new cjs.Graphics().p("AoSCHIMlpfIEAFSIsmJfg");
	var mask_6_graphics_44 = new cjs.Graphics().p("AoYCMIMzppID+FSIszJpg");
	var mask_6_graphics_45 = new cjs.Graphics().p("AofCSINAp1ID/FTItBJzg");
	var mask_6_graphics_46 = new cjs.Graphics().p("AomCXINOp+ID/FRItPJ+g");
	var mask_6_graphics_47 = new cjs.Graphics().p("AotCcINcqJID/FSItdKJg");
	var mask_6_graphics_48 = new cjs.Graphics().p("AozCiINqqTID9FQItpKTg");
	var mask_6_graphics_49 = new cjs.Graphics().p("Ao6CnIN3qeID+FRIt3Kdg");
	var mask_6_graphics_50 = new cjs.Graphics().p("ApBCsIOFqnID+FQIuGKog");
	var mask_6_graphics_51 = new cjs.Graphics().p("ApICxIOTqyID+FRIuUKyg");
	var mask_6_graphics_52 = new cjs.Graphics().p("ApPC3IOhq9ID+FQIuhK9g");
	var mask_6_graphics_53 = new cjs.Graphics().p("ApVC8IOurHID+FQIuvLHg");
	var mask_6_graphics_54 = new cjs.Graphics().p("AhfNeIO9rSID8FQIu9LSg");
	var mask_6_graphics_55 = new cjs.Graphics().p("ApmDJIPQrgID9FPIvQLgg");
	var mask_6_graphics_56 = new cjs.Graphics().p("ApwDQIPkrvID9FQIvkLvg");
	var mask_6_graphics_57 = new cjs.Graphics().p("Ah9NfIP4r/ID8FPIv4L/g");
	var mask_6_graphics_58 = new cjs.Graphics().p("Ap+DbIQBsFID9FPIwBMGg");
	var mask_6_graphics_59 = new cjs.Graphics().p("AqDDfIQKsNID9FQIwKMNg");
	var mask_6_graphics_60 = new cjs.Graphics().p("AqIDjIQUsUID9FPIwUMUg");
	var mask_6_graphics_61 = new cjs.Graphics().p("AqNDmIQdsbID9FQIwdMbg");
	var mask_6_graphics_62 = new cjs.Graphics().p("AqSDqIQnsiID9FPIwnMig");
	var mask_6_graphics_63 = new cjs.Graphics().p("AqWDtIQwspID9FQIwwMpg");
	var mask_6_graphics_64 = new cjs.Graphics().p("AqbDxIQ6swID9FPIw6Mwg");
	var mask_6_graphics_65 = new cjs.Graphics().p("AqfD0IRDs3ID8FQIxCM3g");
	var mask_6_graphics_66 = new cjs.Graphics().p("AqkD4IRMs+ID9FPIxMM+g");
	var mask_6_graphics_67 = new cjs.Graphics().p("AqpD7IRWtFID9FQIxWNFg");
	var mask_6_graphics_68 = new cjs.Graphics().p("AjbNeIS1uMID9FOIy2ONg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_6_graphics_9,x:80.9,y:120.3}).wait(1).to({graphics:mask_6_graphics_10,x:132.5,y:210}).wait(1).to({graphics:mask_6_graphics_11,x:133.2,y:209.5}).wait(1).to({graphics:mask_6_graphics_12,x:133.9,y:209}).wait(1).to({graphics:mask_6_graphics_13,x:134.6,y:208.4}).wait(1).to({graphics:mask_6_graphics_14,x:135.2,y:207.9}).wait(1).to({graphics:mask_6_graphics_15,x:135.9,y:207.4}).wait(1).to({graphics:mask_6_graphics_16,x:136.6,y:206.8}).wait(1).to({graphics:mask_6_graphics_17,x:137.3,y:206.3}).wait(1).to({graphics:mask_6_graphics_18,x:137.9,y:205.8}).wait(1).to({graphics:mask_6_graphics_19,x:138.6,y:205.3}).wait(1).to({graphics:mask_6_graphics_20,x:139.3,y:204.7}).wait(1).to({graphics:mask_6_graphics_21,x:140,y:204.2}).wait(1).to({graphics:mask_6_graphics_22,x:140.7,y:203.7}).wait(1).to({graphics:mask_6_graphics_23,x:141.3,y:203.1}).wait(1).to({graphics:mask_6_graphics_24,x:142,y:202.6}).wait(1).to({graphics:mask_6_graphics_25,x:142.7,y:202.1}).wait(1).to({graphics:mask_6_graphics_26,x:143.4,y:201.5}).wait(1).to({graphics:mask_6_graphics_27,x:144,y:201}).wait(1).to({graphics:mask_6_graphics_28,x:144.7,y:200.5}).wait(1).to({graphics:mask_6_graphics_29,x:145.4,y:200}).wait(1).to({graphics:mask_6_graphics_30,x:146.1,y:199.4}).wait(1).to({graphics:mask_6_graphics_31,x:146.8,y:198.9}).wait(1).to({graphics:mask_6_graphics_32,x:147.5,y:198.4}).wait(1).to({graphics:mask_6_graphics_33,x:148.1,y:197.8}).wait(1).to({graphics:mask_6_graphics_34,x:148.8,y:197.3}).wait(1).to({graphics:mask_6_graphics_35,x:149.5,y:196.8}).wait(1).to({graphics:mask_6_graphics_36,x:150.2,y:196.2}).wait(1).to({graphics:mask_6_graphics_37,x:150.9,y:195.7}).wait(1).to({graphics:mask_6_graphics_38,x:151.5,y:195.2}).wait(1).to({graphics:mask_6_graphics_39,x:152.2,y:194.7}).wait(1).to({graphics:mask_6_graphics_40,x:152.9,y:194.1}).wait(1).to({graphics:mask_6_graphics_41,x:153.6,y:193.6}).wait(1).to({graphics:mask_6_graphics_42,x:154.2,y:193.1}).wait(1).to({graphics:mask_6_graphics_43,x:154.9,y:192.5}).wait(1).to({graphics:mask_6_graphics_44,x:155.6,y:192}).wait(1).to({graphics:mask_6_graphics_45,x:156.3,y:191.5}).wait(1).to({graphics:mask_6_graphics_46,x:157,y:190.9}).wait(1).to({graphics:mask_6_graphics_47,x:157.6,y:190.4}).wait(1).to({graphics:mask_6_graphics_48,x:158.3,y:189.9}).wait(1).to({graphics:mask_6_graphics_49,x:159,y:189.4}).wait(1).to({graphics:mask_6_graphics_50,x:159.7,y:188.8}).wait(1).to({graphics:mask_6_graphics_51,x:160.4,y:188.3}).wait(1).to({graphics:mask_6_graphics_52,x:161,y:187.7}).wait(1).to({graphics:mask_6_graphics_53,x:161.7,y:187.2}).wait(1).to({graphics:mask_6_graphics_54,x:111.4,y:119.8}).wait(1).to({graphics:mask_6_graphics_55,x:163.3,y:186}).wait(1).to({graphics:mask_6_graphics_56,x:164.3,y:185.2}).wait(1).to({graphics:mask_6_graphics_57,x:114.3,y:119.8}).wait(1).to({graphics:mask_6_graphics_58,x:165.7,y:184.2}).wait(1).to({graphics:mask_6_graphics_59,x:166.2,y:183.8}).wait(1).to({graphics:mask_6_graphics_60,x:166.7,y:183.4}).wait(1).to({graphics:mask_6_graphics_61,x:167.2,y:183.1}).wait(1).to({graphics:mask_6_graphics_62,x:167.7,y:182.7}).wait(1).to({graphics:mask_6_graphics_63,x:168.1,y:182.3}).wait(1).to({graphics:mask_6_graphics_64,x:168.6,y:182}).wait(1).to({graphics:mask_6_graphics_65,x:169.1,y:181.6}).wait(1).to({graphics:mask_6_graphics_66,x:169.6,y:181.3}).wait(1).to({graphics:mask_6_graphics_67,x:170.1,y:180.9}).wait(1).to({graphics:mask_6_graphics_68,x:123.9,y:119.7}).wait(505));

	// Layer 2
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(20,1,1).p("AuuiQQBvhkBYg9QBYg8B8hTQB8hSCwg0QCvgzgICOQgICOg6BrQg6BrhJB/QhIB+hICiQhJCiAjBZQAjBZBqgTQCLgaB9hGQB8hGBrhpQBqhoBfhiQBehhBMheQBMhfBWh+QBWh+A+hbQA+hcAHgK");
	this.shape_7.setTransform(245,213.2);
	this.shape_7._off = true;

	var maskedShapeInstanceList = [this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(9).to({_off:false},0).wait(564));

	// Letter
	this.instance_4 = new lib.Symbol1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(275,275);
	this.instance_4.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(573));

	// Background
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_8.setTransform(275,275,3.373,2.543);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_9.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).wait(573));

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