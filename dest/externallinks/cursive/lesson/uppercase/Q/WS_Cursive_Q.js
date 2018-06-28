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


(lib.Q = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AIHW3Qh9g7j4iVIgkgUQjEBCjeAAQjqAAi/hUQi4hViDiYQiDiUhEjIQhDjIAAjkQAAidAhigIBik8QBUjNENlsIDyjpQCFhpCQhLQCUhNCcgoQCggpChgBQDkABDABXQC2BRCECbQCBCSBEDHQBGDGAADiQAADmhGDsQhEDjh+DVQh9DVipCqQirCxjIByIEACOQCkBIBuAAIB4gUQCAAAAACKQAABPhXAhQg+AYheAAQisAAjmhsgAqYOxIAFAZQCeBVDBABIBogGQjmh0iNAAgACHO7QDAhUCvidQCmiYB/jCQCDjGBFjWQBKjfAAjSQAAisg2iYQgziahhhyQhnh2iJg+QiShFiwAAQiLAAiHAmQiCAhh9BGQjxCAjFDmQi9DdhsEQQhuESAAEFQAACkAvCSQAwCcBkB7QBKhuC7AAQECAAHqELg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131.4,-157,263,314.1);


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


(lib.ar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-26.4,18.4,1,1,-116.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-142.5,guide:{path:[-26.5,18.2,13.6,-0.5,33.2,-26.8]}},119).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AimABIBJg2IBvCSIhIA4g");
	var mask_graphics_1 = new cjs.Graphics().p("AhegrIBOg7IBvCSIhOA7g");
	var mask_graphics_2 = new cjs.Graphics().p("AhggpIBSg/IBvCSIhSA/g");
	var mask_graphics_3 = new cjs.Graphics().p("AhjgoIBXhCIBwCTIhXBCg");
	var mask_graphics_4 = new cjs.Graphics().p("AhlgmIBchGIBvCTIhcBGg");
	var mask_graphics_5 = new cjs.Graphics().p("AhngkIBghJIBvCSIhgBKg");
	var mask_graphics_6 = new cjs.Graphics().p("AhqgiIBmhNIBuCSIhkBNg");
	var mask_graphics_7 = new cjs.Graphics().p("AhsggIBqhRIBvCSIhqBRg");
	var mask_graphics_8 = new cjs.Graphics().p("AhugfIBuhUIBvCTIhuBUg");
	var mask_graphics_9 = new cjs.Graphics().p("AhxgdIByhYIBxCTIhyBYg");
	var mask_graphics_10 = new cjs.Graphics().p("AhzgcIB3haIBwCSIh3Bbg");
	var mask_graphics_11 = new cjs.Graphics().p("Ah1gaIB7heIBwCSIh7Bfg");
	var mask_graphics_12 = new cjs.Graphics().p("Ah4gYICBhiIBvCTIh/Big");
	var mask_graphics_13 = new cjs.Graphics().p("Ah6gWICFhmIBwCTIiFBlg");
	var mask_graphics_14 = new cjs.Graphics().p("Ah8gUICJhpIBwCSIiJBpg");
	var mask_graphics_15 = new cjs.Graphics().p("Ah/gTICPhsIBwCSIiPBtg");
	var mask_graphics_16 = new cjs.Graphics().p("AiBgRICThwIBwCTIiTBwg");
	var mask_graphics_17 = new cjs.Graphics().p("AiDgPICXhzIBwCSIiXBzg");
	var mask_graphics_18 = new cjs.Graphics().p("AiGgNICdh4IBwCTIidB3g");
	var mask_graphics_19 = new cjs.Graphics().p("AiIgLIChh7IBwCSIihB7g");
	var mask_graphics_20 = new cjs.Graphics().p("AiKgKIClh+IBwCSIilB/g");
	var mask_graphics_21 = new cjs.Graphics().p("AiNgIICriCIBwCTIirCCg");
	var mask_graphics_22 = new cjs.Graphics().p("AiPgGICviFIBwCSIivCFg");
	var mask_graphics_23 = new cjs.Graphics().p("AiSgEIC1iJIBvCSIizCJg");
	var mask_graphics_24 = new cjs.Graphics().p("AiUgDIC5iMIBwCTIi5CMg");
	var mask_graphics_25 = new cjs.Graphics().p("AiWgBIC9iQIBwCSIi9CRg");
	var mask_graphics_26 = new cjs.Graphics().p("AiZAAIDCiTIBxCTIjCCUg");
	var mask_graphics_27 = new cjs.Graphics().p("AibACIDHiWIBwCTIjHCWg");
	var mask_graphics_28 = new cjs.Graphics().p("AidAEIDLiaIBwCTIjLCag");
	var mask_graphics_29 = new cjs.Graphics().p("AigAFIDRidIBvCUIjPCdg");
	var mask_graphics_30 = new cjs.Graphics().p("AiiAHIDVihIBvCUIjUCgg");
	var mask_graphics_31 = new cjs.Graphics().p("AikAJIDZikIBwCTIjZCkg");
	var mask_graphics_32 = new cjs.Graphics().p("AimALIDdioIBwCTIjdCog");
	var mask_graphics_33 = new cjs.Graphics().p("AipANIDiisIBxCUIjjCrg");
	var mask_graphics_34 = new cjs.Graphics().p("AirAOIDnivIBwCUIjnCvg");
	var mask_graphics_35 = new cjs.Graphics().p("AitAQIDrizIBwCUIjrCyg");
	var mask_graphics_36 = new cjs.Graphics().p("AiwASIDxi2IBvCTIjwC2g");
	var mask_graphics_37 = new cjs.Graphics().p("AiyAUID1i6IBwCTIj1C6g");
	var mask_graphics_38 = new cjs.Graphics().p("Ai0AVID5i9IBwCUIj5C9g");
	var mask_graphics_39 = new cjs.Graphics().p("Ai3AXID+jBIBxCUIj/DBg");
	var mask_graphics_40 = new cjs.Graphics().p("Ai5AZIEDjFIBwCUIkDDEg");
	var mask_graphics_41 = new cjs.Graphics().p("Ai7AbIEHjIIBwCTIkHDIg");
	var mask_graphics_42 = new cjs.Graphics().p("Ai+AdIENjMIBwCTIkNDMg");
	var mask_graphics_43 = new cjs.Graphics().p("AjAAeIERjPIBwCUIkRDPg");
	var mask_graphics_44 = new cjs.Graphics().p("AjCAgIEVjSIBwCTIkVDSg");
	var mask_graphics_45 = new cjs.Graphics().p("AjFAiIEbjWIBwCTIkbDWg");
	var mask_graphics_46 = new cjs.Graphics().p("AjHAkIEfjaIBwCTIkfDag");
	var mask_graphics_47 = new cjs.Graphics().p("AjJAmIEjjeIBwCTIkjDeg");
	var mask_graphics_48 = new cjs.Graphics().p("AjMAnIEpjhIBwCUIkpDhg");
	var mask_graphics_49 = new cjs.Graphics().p("AjOApIEtjkIBwCTIktDkg");
	var mask_graphics_50 = new cjs.Graphics().p("AjQAqIExjnIBwCUIkxDng");
	var mask_graphics_51 = new cjs.Graphics().p("AjTAsIE3jrIBwCUIk3Drg");
	var mask_graphics_52 = new cjs.Graphics().p("AjVAuIE7juIBwCTIk7Dvg");
	var mask_graphics_53 = new cjs.Graphics().p("AjYAwIFBjzIBvCUIlADzg");
	var mask_graphics_54 = new cjs.Graphics().p("AjaAyIFFj2IBwCTIlFD2g");
	var mask_graphics_55 = new cjs.Graphics().p("AjcAzIFJj5IBwCUIlJD5g");
	var mask_graphics_56 = new cjs.Graphics().p("AjfA1IFOj9IBxCUIlPD9g");
	var mask_graphics_57 = new cjs.Graphics().p("AjhA3IFTkAIBwCTIlTEBg");
	var mask_graphics_58 = new cjs.Graphics().p("AjjA5IFXkEIBwCTIlXEEg");
	var mask_graphics_59 = new cjs.Graphics().p("AjmA6IFdkHIBvCTIlcEIg");
	var mask_graphics_60 = new cjs.Graphics().p("AjoA8IFhkLIBwCUIlhELg");
	var mask_graphics_61 = new cjs.Graphics().p("AjqA+IFlkPIBwCUIllEPg");
	var mask_graphics_62 = new cjs.Graphics().p("AjtBAIFqkSIBxCTIlrETg");
	var mask_graphics_63 = new cjs.Graphics().p("AjvBCIFvkWIBwCTIlvEWg");
	var mask_graphics_64 = new cjs.Graphics().p("AjxBDIFzkZIBwCUIlzEZg");
	var mask_graphics_65 = new cjs.Graphics().p("Aj0BFIF5kdIBvCUIl4Edg");
	var mask_graphics_66 = new cjs.Graphics().p("Aj2BHIF9khIBwCUIl9Ehg");
	var mask_graphics_67 = new cjs.Graphics().p("Aj4BJIGBkkIBwCTImBElg");
	var mask_graphics_68 = new cjs.Graphics().p("Aj7BLIGGkoIBxCTImHEog");
	var mask_graphics_69 = new cjs.Graphics().p("Aj9BMIGLkrIBwCTImLEsg");
	var mask_graphics_70 = new cjs.Graphics().p("Aj/BOIGPkvIBwCUImPEug");
	var mask_graphics_71 = new cjs.Graphics().p("AkCBQIGUkyIBwCTImUEyg");
	var mask_graphics_72 = new cjs.Graphics().p("AkEBRIGZk1IBwCTImZE2g");
	var mask_graphics_73 = new cjs.Graphics().p("AkGBTIGdk5IBwCUImdE5g");
	var mask_graphics_74 = new cjs.Graphics().p("AkJBVIGjk9IBvCUImiE9g");
	var mask_graphics_75 = new cjs.Graphics().p("AkLBXIGnlBIBwCUImnFAg");
	var mask_graphics_76 = new cjs.Graphics().p("AkNBZIGrlEIBwCTImrFEg");
	var mask_graphics_77 = new cjs.Graphics().p("AkQBaIGwlHIBxCTImxFIg");
	var mask_graphics_78 = new cjs.Graphics().p("AkSBcIG1lLIBwCUIm1FLg");
	var mask_graphics_79 = new cjs.Graphics().p("AkUBeIG5lOIBwCTIm5FOg");
	var mask_graphics_80 = new cjs.Graphics().p("AkXBgIG/lSIBwCTIm/FSg");
	var mask_graphics_81 = new cjs.Graphics().p("AkZBiIHDlWIBwCTInDFWg");
	var mask_graphics_82 = new cjs.Graphics().p("AkbBjIHHlZIBwCTInHFag");
	var mask_graphics_83 = new cjs.Graphics().p("AkeBlIHNldIBwCUInNFdg");
	var mask_graphics_84 = new cjs.Graphics().p("AkgBnIHRlgIBwCTInRFgg");
	var mask_graphics_85 = new cjs.Graphics().p("AkiBpIHVlkIBwCTInVFkg");
	var mask_graphics_86 = new cjs.Graphics().p("AklBqIHblnIBwCUInbFng");
	var mask_graphics_87 = new cjs.Graphics().p("AknBsIHflrIBwCUInfFrg");
	var mask_graphics_88 = new cjs.Graphics().p("AkqBuIHllvIBvCUInkFvg");
	var mask_graphics_89 = new cjs.Graphics().p("AksBwIHplyIBwCTInpFyg");
	var mask_graphics_90 = new cjs.Graphics().p("AkuByIHtl2IBwCUIntF1g");
	var mask_graphics_91 = new cjs.Graphics().p("AkwBzIHxl5IBwCUInxF5g");
	var mask_graphics_92 = new cjs.Graphics().p("AkyB1IH1l9IBxCUIn3F9g");
	var mask_graphics_93 = new cjs.Graphics().p("Ak1B3IH7mAIBwCTIn7GAg");
	var mask_graphics_94 = new cjs.Graphics().p("Ak3B5IH/mEIBwCTIn/GEg");
	var mask_graphics_95 = new cjs.Graphics().p("Ak5B7IIDmIIBwCUIoEGHg");
	var mask_graphics_96 = new cjs.Graphics().p("Ak8B8IIJmLIBwCUIoJGLg");
	var mask_graphics_97 = new cjs.Graphics().p("Ak+B+IINmPIBwCUIoNGPg");
	var mask_graphics_98 = new cjs.Graphics().p("AlACAIISmSIBvCTIoSGSg");
	var mask_graphics_99 = new cjs.Graphics().p("AlDCCIIXmWIBwCTIoXGWg");
	var mask_graphics_100 = new cjs.Graphics().p("AlFCDIIbmZIBwCUIobGZg");
	var mask_graphics_101 = new cjs.Graphics().p("AlHCFIIfmdIBxCUIohGdg");
	var mask_graphics_102 = new cjs.Graphics().p("AlKCHIIlmhIBwCUIolGhg");
	var mask_graphics_103 = new cjs.Graphics().p("AlMCJIIpmkIBwCTIopGkg");
	var mask_graphics_104 = new cjs.Graphics().p("AlOCLIIumoIBvCTIouGog");
	var mask_graphics_105 = new cjs.Graphics().p("AlRCMIIzmrIBwCUIozGrg");
	var mask_graphics_106 = new cjs.Graphics().p("AlTCOII3mvIBwCUIo3Gvg");
	var mask_graphics_107 = new cjs.Graphics().p("AlWCQII9myIBwCTIo9Gyg");
	var mask_graphics_108 = new cjs.Graphics().p("AlYCSIJBm2IBwCUIpBG1g");
	var mask_graphics_109 = new cjs.Graphics().p("AlaCUIJFm6IBwCTIpFG6g");
	var mask_graphics_110 = new cjs.Graphics().p("AldCVIJLm9IBwCUIpLG8g");
	var mask_graphics_111 = new cjs.Graphics().p("AlfCXIJPnAIBwCTIpPHAg");
	var mask_graphics_112 = new cjs.Graphics().p("AlhCYIJTnDIBwCTIpTHEg");
	var mask_graphics_113 = new cjs.Graphics().p("AlkCaIJZnHIBwCUIpZHHg");
	var mask_graphics_114 = new cjs.Graphics().p("AlmCcIJdnKIBwCTIpdHKg");
	var mask_graphics_115 = new cjs.Graphics().p("AloCeIJhnOIBxCTIpjHOg");
	var mask_graphics_116 = new cjs.Graphics().p("AlrCgIJnnSIBwCTIpnHSg");
	var mask_graphics_117 = new cjs.Graphics().p("AltChIJrnVIBwCTIprHWg");
	var mask_graphics_118 = new cjs.Graphics().p("AlvCjIJwnZIBvCUIpwHZg");
	var mask_graphics_119 = new cjs.Graphics().p("AlyClIJ1ncIBwCTIp1Hcg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-16.7,y:14.9}).wait(1).to({graphics:mask_graphics_1,x:-23.9,y:19.4}).wait(1).to({graphics:mask_graphics_2,x:-23.6,y:19.3}).wait(1).to({graphics:mask_graphics_3,x:-23.4,y:19.1}).wait(1).to({graphics:mask_graphics_4,x:-23.2,y:18.9}).wait(1).to({graphics:mask_graphics_5,x:-22.9,y:18.7}).wait(1).to({graphics:mask_graphics_6,x:-22.7,y:18.5}).wait(1).to({graphics:mask_graphics_7,x:-22.4,y:18.4}).wait(1).to({graphics:mask_graphics_8,x:-22.2,y:18.2}).wait(1).to({graphics:mask_graphics_9,x:-22,y:18}).wait(1).to({graphics:mask_graphics_10,x:-21.7,y:17.8}).wait(1).to({graphics:mask_graphics_11,x:-21.5,y:17.6}).wait(1).to({graphics:mask_graphics_12,x:-21.3,y:17.4}).wait(1).to({graphics:mask_graphics_13,x:-21,y:17.3}).wait(1).to({graphics:mask_graphics_14,x:-20.8,y:17.1}).wait(1).to({graphics:mask_graphics_15,x:-20.6,y:16.9}).wait(1).to({graphics:mask_graphics_16,x:-20.3,y:16.7}).wait(1).to({graphics:mask_graphics_17,x:-20.1,y:16.6}).wait(1).to({graphics:mask_graphics_18,x:-19.9,y:16.4}).wait(1).to({graphics:mask_graphics_19,x:-19.6,y:16.2}).wait(1).to({graphics:mask_graphics_20,x:-19.4,y:16}).wait(1).to({graphics:mask_graphics_21,x:-19.2,y:15.8}).wait(1).to({graphics:mask_graphics_22,x:-18.9,y:15.7}).wait(1).to({graphics:mask_graphics_23,x:-18.7,y:15.5}).wait(1).to({graphics:mask_graphics_24,x:-18.5,y:15.3}).wait(1).to({graphics:mask_graphics_25,x:-18.2,y:15.1}).wait(1).to({graphics:mask_graphics_26,x:-18,y:14.9}).wait(1).to({graphics:mask_graphics_27,x:-17.8,y:14.8}).wait(1).to({graphics:mask_graphics_28,x:-17.5,y:14.6}).wait(1).to({graphics:mask_graphics_29,x:-17.3,y:14.4}).wait(1).to({graphics:mask_graphics_30,x:-17,y:14.2}).wait(1).to({graphics:mask_graphics_31,x:-16.8,y:14}).wait(1).to({graphics:mask_graphics_32,x:-16.6,y:13.8}).wait(1).to({graphics:mask_graphics_33,x:-16.3,y:13.7}).wait(1).to({graphics:mask_graphics_34,x:-16.1,y:13.5}).wait(1).to({graphics:mask_graphics_35,x:-15.9,y:13.3}).wait(1).to({graphics:mask_graphics_36,x:-15.6,y:13.1}).wait(1).to({graphics:mask_graphics_37,x:-15.4,y:13}).wait(1).to({graphics:mask_graphics_38,x:-15.2,y:12.8}).wait(1).to({graphics:mask_graphics_39,x:-14.9,y:12.6}).wait(1).to({graphics:mask_graphics_40,x:-14.7,y:12.4}).wait(1).to({graphics:mask_graphics_41,x:-14.5,y:12.2}).wait(1).to({graphics:mask_graphics_42,x:-14.2,y:12.1}).wait(1).to({graphics:mask_graphics_43,x:-14,y:11.9}).wait(1).to({graphics:mask_graphics_44,x:-13.8,y:11.7}).wait(1).to({graphics:mask_graphics_45,x:-13.5,y:11.5}).wait(1).to({graphics:mask_graphics_46,x:-13.3,y:11.3}).wait(1).to({graphics:mask_graphics_47,x:-13.1,y:11.2}).wait(1).to({graphics:mask_graphics_48,x:-12.8,y:11}).wait(1).to({graphics:mask_graphics_49,x:-12.6,y:10.8}).wait(1).to({graphics:mask_graphics_50,x:-12.4,y:10.6}).wait(1).to({graphics:mask_graphics_51,x:-12.1,y:10.4}).wait(1).to({graphics:mask_graphics_52,x:-11.9,y:10.3}).wait(1).to({graphics:mask_graphics_53,x:-11.6,y:10.1}).wait(1).to({graphics:mask_graphics_54,x:-11.4,y:9.9}).wait(1).to({graphics:mask_graphics_55,x:-11.2,y:9.7}).wait(1).to({graphics:mask_graphics_56,x:-10.9,y:9.5}).wait(1).to({graphics:mask_graphics_57,x:-10.7,y:9.4}).wait(1).to({graphics:mask_graphics_58,x:-10.5,y:9.2}).wait(1).to({graphics:mask_graphics_59,x:-10.2,y:9}).wait(1).to({graphics:mask_graphics_60,x:-10,y:8.8}).wait(1).to({graphics:mask_graphics_61,x:-9.8,y:8.6}).wait(1).to({graphics:mask_graphics_62,x:-9.5,y:8.5}).wait(1).to({graphics:mask_graphics_63,x:-9.3,y:8.3}).wait(1).to({graphics:mask_graphics_64,x:-9.1,y:8.1}).wait(1).to({graphics:mask_graphics_65,x:-8.8,y:7.9}).wait(1).to({graphics:mask_graphics_66,x:-8.6,y:7.8}).wait(1).to({graphics:mask_graphics_67,x:-8.4,y:7.6}).wait(1).to({graphics:mask_graphics_68,x:-8.1,y:7.4}).wait(1).to({graphics:mask_graphics_69,x:-7.9,y:7.2}).wait(1).to({graphics:mask_graphics_70,x:-7.7,y:7}).wait(1).to({graphics:mask_graphics_71,x:-7.4,y:6.8}).wait(1).to({graphics:mask_graphics_72,x:-7.2,y:6.7}).wait(1).to({graphics:mask_graphics_73,x:-7,y:6.5}).wait(1).to({graphics:mask_graphics_74,x:-6.7,y:6.3}).wait(1).to({graphics:mask_graphics_75,x:-6.5,y:6.1}).wait(1).to({graphics:mask_graphics_76,x:-6.3,y:5.9}).wait(1).to({graphics:mask_graphics_77,x:-6,y:5.8}).wait(1).to({graphics:mask_graphics_78,x:-5.8,y:5.6}).wait(1).to({graphics:mask_graphics_79,x:-5.6,y:5.4}).wait(1).to({graphics:mask_graphics_80,x:-5.3,y:5.2}).wait(1).to({graphics:mask_graphics_81,x:-5.1,y:5}).wait(1).to({graphics:mask_graphics_82,x:-4.9,y:4.9}).wait(1).to({graphics:mask_graphics_83,x:-4.6,y:4.7}).wait(1).to({graphics:mask_graphics_84,x:-4.4,y:4.5}).wait(1).to({graphics:mask_graphics_85,x:-4.2,y:4.3}).wait(1).to({graphics:mask_graphics_86,x:-3.9,y:4.2}).wait(1).to({graphics:mask_graphics_87,x:-3.7,y:4}).wait(1).to({graphics:mask_graphics_88,x:-3.4,y:3.8}).wait(1).to({graphics:mask_graphics_89,x:-3.2,y:3.6}).wait(1).to({graphics:mask_graphics_90,x:-3,y:3.4}).wait(1).to({graphics:mask_graphics_91,x:-2.7,y:3.2}).wait(1).to({graphics:mask_graphics_92,x:-2.5,y:3.1}).wait(1).to({graphics:mask_graphics_93,x:-2.3,y:2.9}).wait(1).to({graphics:mask_graphics_94,x:-2,y:2.7}).wait(1).to({graphics:mask_graphics_95,x:-1.8,y:2.5}).wait(1).to({graphics:mask_graphics_96,x:-1.6,y:2.3}).wait(1).to({graphics:mask_graphics_97,x:-1.3,y:2.2}).wait(1).to({graphics:mask_graphics_98,x:-1.1,y:2}).wait(1).to({graphics:mask_graphics_99,x:-0.8,y:1.8}).wait(1).to({graphics:mask_graphics_100,x:-0.6,y:1.6}).wait(1).to({graphics:mask_graphics_101,x:-0.4,y:1.5}).wait(1).to({graphics:mask_graphics_102,x:-0.1,y:1.3}).wait(1).to({graphics:mask_graphics_103,x:0.1,y:1.1}).wait(1).to({graphics:mask_graphics_104,x:0.3,y:0.9}).wait(1).to({graphics:mask_graphics_105,x:0.6,y:0.7}).wait(1).to({graphics:mask_graphics_106,x:0.8,y:0.6}).wait(1).to({graphics:mask_graphics_107,x:1,y:0.4}).wait(1).to({graphics:mask_graphics_108,x:1.3,y:0.2}).wait(1).to({graphics:mask_graphics_109,x:1.5,y:0}).wait(1).to({graphics:mask_graphics_110,x:1.7,y:-0.2}).wait(1).to({graphics:mask_graphics_111,x:2,y:-0.4}).wait(1).to({graphics:mask_graphics_112,x:2.2,y:-0.5}).wait(1).to({graphics:mask_graphics_113,x:2.4,y:-0.7}).wait(1).to({graphics:mask_graphics_114,x:2.7,y:-0.9}).wait(1).to({graphics:mask_graphics_115,x:2.9,y:-1.1}).wait(1).to({graphics:mask_graphics_116,x:3.1,y:-1.3}).wait(1).to({graphics:mask_graphics_117,x:3.4,y:-1.4}).wait(1).to({graphics:mask_graphics_118,x:3.6,y:-1.6}).wait(1).to({graphics:mask_graphics_119,x:3.8,y:-1.8}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AjtEeQCBksFakO");
	this.shape.setTransform(3.5,-4.5,1,1,-167.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.7,9.5,18.9,20);


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
(lib.WS_Cursive_Q = function(mode,startPosition,loop) {
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
	this.instance.setTransform(294.4,147,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[294.4,147.1,273.1,148.7,228.7,175.5,184.2,202.4,162.3,271.6,140.4,340.9,182.2,383.2,223.9,425.4,280.5,402.5,337.1,379.7,370.7,323,391.9,281.7,394.5,238.2,397.1,194.7,361.4,167,326.3,139.7,298.4,146.5]}},311).wait(14).to({x:193.7,y:386.7},0).to({guide:{path:[193.7,386.7,202.2,369.5,224.4,372,246.5,374.4,282.4,396.6,351.6,439.3,377.1,432.6]}},140).wait(15).to({startPosition:0},0).to({guide:{path:[377.9,433.5,418.8,389.5,478.6,385.9,526.4,382.6,551,404.2,575.6,425.9,596.9,425.5,616.4,425.1,626.7,416]}},65).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(292.8,147.4,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},311).wait(14).to({_off:false,x:375.8,y:432.4},0).to({_off:true},140).wait(81));

	// Layer 8
	this.instance_1 = new lib.ar1("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(248.2,326.2,1,1,0,160,-20,-0.8,0.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(334).to({_off:false},0).wait(221));

	// Layer 11 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_334 = new cjs.Graphics().p("EAMjAjPIAAvTICuAAIAAPTg");
	var mask_graphics_335 = new cjs.Graphics().p("AheHqIAAvTIC9AAIAAPTg");
	var mask_graphics_336 = new cjs.Graphics().p("AhmHqIAAvTIDNAAIAAPTg");
	var mask_graphics_337 = new cjs.Graphics().p("AhuHqIAAvTIDdAAIAAPTg");
	var mask_graphics_338 = new cjs.Graphics().p("Ah1HqIAAvTIDrAAIAAPTg");
	var mask_graphics_339 = new cjs.Graphics().p("Ah9HqIAAvTID7AAIAAPTg");
	var mask_graphics_340 = new cjs.Graphics().p("AiFHqIAAvTIELAAIAAPTg");
	var mask_graphics_341 = new cjs.Graphics().p("AiNHqIAAvTIEbAAIAAPTg");
	var mask_graphics_342 = new cjs.Graphics().p("AiVHqIAAvTIErAAIAAPTg");
	var mask_graphics_343 = new cjs.Graphics().p("AidHqIAAvTIE7AAIAAPTg");
	var mask_graphics_344 = new cjs.Graphics().p("AikHqIAAvTIFJAAIAAPTg");
	var mask_graphics_345 = new cjs.Graphics().p("AisHqIAAvTIFZAAIAAPTg");
	var mask_graphics_346 = new cjs.Graphics().p("Ai0HqIAAvTIFpAAIAAPTg");
	var mask_graphics_347 = new cjs.Graphics().p("Ai8HqIAAvTIF5AAIAAPTg");
	var mask_graphics_348 = new cjs.Graphics().p("AjEHqIAAvTIGIAAIAAPTg");
	var mask_graphics_349 = new cjs.Graphics().p("AjLHqIAAvTIGXAAIAAPTg");
	var mask_graphics_350 = new cjs.Graphics().p("AjTHqIAAvTIGnAAIAAPTg");
	var mask_graphics_351 = new cjs.Graphics().p("AjbHqIAAvTIG3AAIAAPTg");
	var mask_graphics_352 = new cjs.Graphics().p("AjjHqIAAvTIHHAAIAAPTg");
	var mask_graphics_353 = new cjs.Graphics().p("AjqHqIAAvTIHVAAIAAPTg");
	var mask_graphics_354 = new cjs.Graphics().p("AjyHqIAAvTIHlAAIAAPTg");
	var mask_graphics_355 = new cjs.Graphics().p("Aj6HqIAAvTIH1AAIAAPTg");
	var mask_graphics_356 = new cjs.Graphics().p("AkCHqIAAvTIIFAAIAAPTg");
	var mask_graphics_357 = new cjs.Graphics().p("AkJHqIAAvTIIUAAIAAPTg");
	var mask_graphics_358 = new cjs.Graphics().p("AkSHqIAAvTIIkAAIAAPTg");
	var mask_graphics_359 = new cjs.Graphics().p("AkZHqIAAvTIIzAAIAAPTg");
	var mask_graphics_360 = new cjs.Graphics().p("AkhHqIAAvTIJDAAIAAPTg");
	var mask_graphics_361 = new cjs.Graphics().p("AkpHqIAAvTIJTAAIAAPTg");
	var mask_graphics_362 = new cjs.Graphics().p("AkxHqIAAvTIJjAAIAAPTg");
	var mask_graphics_363 = new cjs.Graphics().p("Ak4HqIAAvTIJxAAIAAPTg");
	var mask_graphics_364 = new cjs.Graphics().p("AlAHqIAAvTIKBAAIAAPTg");
	var mask_graphics_365 = new cjs.Graphics().p("AlIHqIAAvTIKRAAIAAPTg");
	var mask_graphics_366 = new cjs.Graphics().p("AlQHqIAAvTIKhAAIAAPTg");
	var mask_graphics_367 = new cjs.Graphics().p("AlXHqIAAvTIKvAAIAAPTg");
	var mask_graphics_368 = new cjs.Graphics().p("AlgHqIAAvTILBAAIAAPTg");
	var mask_graphics_369 = new cjs.Graphics().p("AlnHqIAAvTILPAAIAAPTg");
	var mask_graphics_370 = new cjs.Graphics().p("AlvHqIAAvTILfAAIAAPTg");
	var mask_graphics_371 = new cjs.Graphics().p("Al3HqIAAvTILvAAIAAPTg");
	var mask_graphics_372 = new cjs.Graphics().p("Al/HqIAAvTIL/AAIAAPTg");
	var mask_graphics_373 = new cjs.Graphics().p("AmGHqIAAvTIMOAAIAAPTg");
	var mask_graphics_374 = new cjs.Graphics().p("AmOHqIAAvTIMdAAIAAPTg");
	var mask_graphics_375 = new cjs.Graphics().p("AmWHqIAAvTIMtAAIAAPTg");
	var mask_graphics_376 = new cjs.Graphics().p("AmeHqIAAvTIM9AAIAAPTg");
	var mask_graphics_377 = new cjs.Graphics().p("AmmHqIAAvTINNAAIAAPTg");
	var mask_graphics_378 = new cjs.Graphics().p("AmtHqIAAvTINbAAIAAPTg");
	var mask_graphics_379 = new cjs.Graphics().p("Am1HqIAAvTINrAAIAAPTg");
	var mask_graphics_380 = new cjs.Graphics().p("Am9HqIAAvTIN7AAIAAPTg");
	var mask_graphics_381 = new cjs.Graphics().p("AnFHqIAAvTIOLAAIAAPTg");
	var mask_graphics_382 = new cjs.Graphics().p("AnNHqIAAvTIObAAIAAPTg");
	var mask_graphics_383 = new cjs.Graphics().p("AnUHqIAAvTIOpAAIAAPTg");
	var mask_graphics_384 = new cjs.Graphics().p("AncHqIAAvTIO5AAIAAPTg");
	var mask_graphics_385 = new cjs.Graphics().p("AnkHqIAAvTIPJAAIAAPTg");
	var mask_graphics_386 = new cjs.Graphics().p("AnsHqIAAvTIPZAAIAAPTg");
	var mask_graphics_387 = new cjs.Graphics().p("An0HqIAAvTIPpAAIAAPTg");
	var mask_graphics_388 = new cjs.Graphics().p("An7HqIAAvTIP3AAIAAPTg");
	var mask_graphics_389 = new cjs.Graphics().p("AoDHqIAAvTIQHAAIAAPTg");
	var mask_graphics_390 = new cjs.Graphics().p("AoLHqIAAvTIQXAAIAAPTg");
	var mask_graphics_391 = new cjs.Graphics().p("AoTHqIAAvTIQnAAIAAPTg");
	var mask_graphics_392 = new cjs.Graphics().p("AobHqIAAvTIQ2AAIAAPTg");
	var mask_graphics_393 = new cjs.Graphics().p("AoiHqIAAvTIRGAAIAAPTg");
	var mask_graphics_394 = new cjs.Graphics().p("AoqHqIAAvTIRVAAIAAPTg");
	var mask_graphics_395 = new cjs.Graphics().p("AoyHqIAAvTIRlAAIAAPTg");
	var mask_graphics_396 = new cjs.Graphics().p("Ao6HqIAAvTIR1AAIAAPTg");
	var mask_graphics_397 = new cjs.Graphics().p("ApBHqIAAvTISDAAIAAPTg");
	var mask_graphics_398 = new cjs.Graphics().p("ApKHqIAAvTISVAAIAAPTg");
	var mask_graphics_399 = new cjs.Graphics().p("ApRHqIAAvTISjAAIAAPTg");
	var mask_graphics_400 = new cjs.Graphics().p("ApZHqIAAvTISzAAIAAPTg");
	var mask_graphics_401 = new cjs.Graphics().p("AphHqIAAvTITDAAIAAPTg");
	var mask_graphics_402 = new cjs.Graphics().p("AppHqIAAvTITSAAIAAPTg");
	var mask_graphics_403 = new cjs.Graphics().p("ApwHqIAAvTITiAAIAAPTg");
	var mask_graphics_404 = new cjs.Graphics().p("Ap4HqIAAvTITxAAIAAPTg");
	var mask_graphics_405 = new cjs.Graphics().p("AqAHqIAAvTIUBAAIAAPTg");
	var mask_graphics_406 = new cjs.Graphics().p("AqFHqIAAvTIUMAAIAAPTg");
	var mask_graphics_407 = new cjs.Graphics().p("AqLHqIAAvTIUXAAIAAPTg");
	var mask_graphics_408 = new cjs.Graphics().p("AqQHqIAAvTIUhAAIAAPTg");
	var mask_graphics_409 = new cjs.Graphics().p("AqVHqIAAvTIUsAAIAAPTg");
	var mask_graphics_410 = new cjs.Graphics().p("AqbHqIAAvTIU3AAIAAPTg");
	var mask_graphics_411 = new cjs.Graphics().p("AqgHqIAAvTIVBAAIAAPTg");
	var mask_graphics_412 = new cjs.Graphics().p("AqmHqIAAvTIVNAAIAAPTg");
	var mask_graphics_413 = new cjs.Graphics().p("AqrHqIAAvTIVXAAIAAPTg");
	var mask_graphics_414 = new cjs.Graphics().p("AqwHqIAAvTIVhAAIAAPTg");
	var mask_graphics_415 = new cjs.Graphics().p("Aq2HqIAAvTIVtAAIAAPTg");
	var mask_graphics_416 = new cjs.Graphics().p("Aq7HqIAAvTIV4AAIAAPTg");
	var mask_graphics_417 = new cjs.Graphics().p("ArBHqIAAvTIWDAAIAAPTg");
	var mask_graphics_418 = new cjs.Graphics().p("ArGHqIAAvTIWNAAIAAPTg");
	var mask_graphics_419 = new cjs.Graphics().p("ArMHqIAAvTIWZAAIAAPTg");
	var mask_graphics_420 = new cjs.Graphics().p("ArRHqIAAvTIWjAAIAAPTg");
	var mask_graphics_421 = new cjs.Graphics().p("ArXHqIAAvTIWvAAIAAPTg");
	var mask_graphics_422 = new cjs.Graphics().p("ArcHqIAAvTIW5AAIAAPTg");
	var mask_graphics_423 = new cjs.Graphics().p("ArhHqIAAvTIXDAAIAAPTg");
	var mask_graphics_424 = new cjs.Graphics().p("ArmHqIAAvTIXNAAIAAPTg");
	var mask_graphics_425 = new cjs.Graphics().p("ArsHqIAAvTIXZAAIAAPTg");
	var mask_graphics_426 = new cjs.Graphics().p("ArxHqIAAvTIXjAAIAAPTg");
	var mask_graphics_427 = new cjs.Graphics().p("Ar3HqIAAvTIXvAAIAAPTg");
	var mask_graphics_428 = new cjs.Graphics().p("Ar8HqIAAvTIX5AAIAAPTg");
	var mask_graphics_429 = new cjs.Graphics().p("AsCHqIAAvTIYEAAIAAPTg");
	var mask_graphics_430 = new cjs.Graphics().p("AsHHqIAAvTIYPAAIAAPTg");
	var mask_graphics_431 = new cjs.Graphics().p("AsMHqIAAvTIYZAAIAAPTg");
	var mask_graphics_432 = new cjs.Graphics().p("AsSHqIAAvTIYlAAIAAPTg");
	var mask_graphics_433 = new cjs.Graphics().p("AsXHqIAAvTIYvAAIAAPTg");
	var mask_graphics_434 = new cjs.Graphics().p("AsdHqIAAvTIY7AAIAAPTg");
	var mask_graphics_435 = new cjs.Graphics().p("AsiHqIAAvTIZFAAIAAPTg");
	var mask_graphics_436 = new cjs.Graphics().p("AsnHqIAAvTIZPAAIAAPTg");
	var mask_graphics_437 = new cjs.Graphics().p("AstHqIAAvTIZbAAIAAPTg");
	var mask_graphics_438 = new cjs.Graphics().p("AsyHqIAAvTIZlAAIAAPTg");
	var mask_graphics_439 = new cjs.Graphics().p("As4HqIAAvTIZwAAIAAPTg");
	var mask_graphics_440 = new cjs.Graphics().p("As9HqIAAvTIZ7AAIAAPTg");
	var mask_graphics_441 = new cjs.Graphics().p("AtCHqIAAvTIaFAAIAAPTg");
	var mask_graphics_442 = new cjs.Graphics().p("AtIHqIAAvTIaRAAIAAPTg");
	var mask_graphics_443 = new cjs.Graphics().p("AtNHqIAAvTIabAAIAAPTg");
	var mask_graphics_444 = new cjs.Graphics().p("AtTHqIAAvTIanAAIAAPTg");
	var mask_graphics_445 = new cjs.Graphics().p("AtYHqIAAvTIaxAAIAAPTg");
	var mask_graphics_446 = new cjs.Graphics().p("AtdHqIAAvTIa7AAIAAPTg");
	var mask_graphics_447 = new cjs.Graphics().p("AtjHqIAAvTIbHAAIAAPTg");
	var mask_graphics_448 = new cjs.Graphics().p("AtoHqIAAvTIbRAAIAAPTg");
	var mask_graphics_449 = new cjs.Graphics().p("AttHqIAAvTIbcAAIAAPTg");
	var mask_graphics_450 = new cjs.Graphics().p("AtzHqIAAvTIbnAAIAAPTg");
	var mask_graphics_451 = new cjs.Graphics().p("At4HqIAAvTIbxAAIAAPTg");
	var mask_graphics_452 = new cjs.Graphics().p("At+HqIAAvTIb8AAIAAPTg");
	var mask_graphics_453 = new cjs.Graphics().p("AuDHqIAAvTIcHAAIAAPTg");
	var mask_graphics_454 = new cjs.Graphics().p("AuIHqIAAvTIcRAAIAAPTg");
	var mask_graphics_455 = new cjs.Graphics().p("AuOHqIAAvTIcdAAIAAPTg");
	var mask_graphics_456 = new cjs.Graphics().p("AuTHqIAAvTIcnAAIAAPTg");
	var mask_graphics_457 = new cjs.Graphics().p("AuYHqIAAvTIcxAAIAAPTg");
	var mask_graphics_458 = new cjs.Graphics().p("AueHqIAAvTIc9AAIAAPTg");
	var mask_graphics_459 = new cjs.Graphics().p("AujHqIAAvTIdHAAIAAPTg");
	var mask_graphics_460 = new cjs.Graphics().p("AupHqIAAvTIdTAAIAAPTg");
	var mask_graphics_461 = new cjs.Graphics().p("AuuHqIAAvTIddAAIAAPTg");
	var mask_graphics_462 = new cjs.Graphics().p("Au0HqIAAvTIdpAAIAAPTg");
	var mask_graphics_463 = new cjs.Graphics().p("Au5HqIAAvTIdzAAIAAPTg");
	var mask_graphics_464 = new cjs.Graphics().p("Au+HqIAAvTId9AAIAAPTg");
	var mask_graphics_465 = new cjs.Graphics().p("AvEHqIAAvTIeJAAIAAPTg");
	var mask_graphics_466 = new cjs.Graphics().p("AvJHqIAAvTIeTAAIAAPTg");
	var mask_graphics_467 = new cjs.Graphics().p("AvOHqIAAvTIedAAIAAPTg");
	var mask_graphics_468 = new cjs.Graphics().p("AvUHqIAAvTIepAAIAAPTg");
	var mask_graphics_469 = new cjs.Graphics().p("AvZHqIAAvTIezAAIAAPTg");
	var mask_graphics_470 = new cjs.Graphics().p("AvfHqIAAvTIe/AAIAAPTg");
	var mask_graphics_471 = new cjs.Graphics().p("AvkHqIAAvTIfJAAIAAPTg");
	var mask_graphics_472 = new cjs.Graphics().p("AvpHqIAAvTIfUAAIAAPTg");
	var mask_graphics_473 = new cjs.Graphics().p("AwVHqIAAvTMAgrAAAIAAPTg");
	var mask_graphics_474 = new cjs.Graphics().p("EgDlAjPIAAvTMAiDAAAIAAPTg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(334).to({graphics:mask_graphics_334,x:97.7,y:225.5}).wait(1).to({graphics:mask_graphics_335,x:187.3,y:402}).wait(1).to({graphics:mask_graphics_336,x:187.8,y:402}).wait(1).to({graphics:mask_graphics_337,x:188.3,y:402}).wait(1).to({graphics:mask_graphics_338,x:188.8,y:402}).wait(1).to({graphics:mask_graphics_339,x:189.3,y:402}).wait(1).to({graphics:mask_graphics_340,x:189.8,y:402}).wait(1).to({graphics:mask_graphics_341,x:190.3,y:402}).wait(1).to({graphics:mask_graphics_342,x:190.8,y:402}).wait(1).to({graphics:mask_graphics_343,x:191.3,y:402}).wait(1).to({graphics:mask_graphics_344,x:191.8,y:402}).wait(1).to({graphics:mask_graphics_345,x:192.3,y:402}).wait(1).to({graphics:mask_graphics_346,x:192.8,y:402}).wait(1).to({graphics:mask_graphics_347,x:193.3,y:402}).wait(1).to({graphics:mask_graphics_348,x:193.8,y:402}).wait(1).to({graphics:mask_graphics_349,x:194.3,y:402}).wait(1).to({graphics:mask_graphics_350,x:194.8,y:402}).wait(1).to({graphics:mask_graphics_351,x:195.3,y:402}).wait(1).to({graphics:mask_graphics_352,x:195.8,y:402}).wait(1).to({graphics:mask_graphics_353,x:196.3,y:402}).wait(1).to({graphics:mask_graphics_354,x:196.8,y:402}).wait(1).to({graphics:mask_graphics_355,x:197.3,y:402}).wait(1).to({graphics:mask_graphics_356,x:197.8,y:402}).wait(1).to({graphics:mask_graphics_357,x:198.3,y:402}).wait(1).to({graphics:mask_graphics_358,x:198.8,y:402}).wait(1).to({graphics:mask_graphics_359,x:199.3,y:402}).wait(1).to({graphics:mask_graphics_360,x:199.8,y:402}).wait(1).to({graphics:mask_graphics_361,x:200.3,y:402}).wait(1).to({graphics:mask_graphics_362,x:200.8,y:402}).wait(1).to({graphics:mask_graphics_363,x:201.3,y:402}).wait(1).to({graphics:mask_graphics_364,x:201.7,y:402}).wait(1).to({graphics:mask_graphics_365,x:202.3,y:402}).wait(1).to({graphics:mask_graphics_366,x:202.7,y:402}).wait(1).to({graphics:mask_graphics_367,x:203.3,y:402}).wait(1).to({graphics:mask_graphics_368,x:203.8,y:402}).wait(1).to({graphics:mask_graphics_369,x:204.2,y:402}).wait(1).to({graphics:mask_graphics_370,x:204.8,y:402}).wait(1).to({graphics:mask_graphics_371,x:205.2,y:402}).wait(1).to({graphics:mask_graphics_372,x:205.7,y:402}).wait(1).to({graphics:mask_graphics_373,x:206.3,y:402}).wait(1).to({graphics:mask_graphics_374,x:206.7,y:402}).wait(1).to({graphics:mask_graphics_375,x:207.3,y:402}).wait(1).to({graphics:mask_graphics_376,x:207.7,y:402}).wait(1).to({graphics:mask_graphics_377,x:208.2,y:402}).wait(1).to({graphics:mask_graphics_378,x:208.7,y:402}).wait(1).to({graphics:mask_graphics_379,x:209.2,y:402}).wait(1).to({graphics:mask_graphics_380,x:209.7,y:402}).wait(1).to({graphics:mask_graphics_381,x:210.2,y:402}).wait(1).to({graphics:mask_graphics_382,x:210.7,y:402}).wait(1).to({graphics:mask_graphics_383,x:211.2,y:402}).wait(1).to({graphics:mask_graphics_384,x:211.7,y:402}).wait(1).to({graphics:mask_graphics_385,x:212.2,y:402}).wait(1).to({graphics:mask_graphics_386,x:212.7,y:402}).wait(1).to({graphics:mask_graphics_387,x:213.2,y:402}).wait(1).to({graphics:mask_graphics_388,x:213.7,y:402}).wait(1).to({graphics:mask_graphics_389,x:214.2,y:402}).wait(1).to({graphics:mask_graphics_390,x:214.7,y:402}).wait(1).to({graphics:mask_graphics_391,x:215.2,y:402}).wait(1).to({graphics:mask_graphics_392,x:215.7,y:402}).wait(1).to({graphics:mask_graphics_393,x:216.2,y:402}).wait(1).to({graphics:mask_graphics_394,x:216.7,y:402}).wait(1).to({graphics:mask_graphics_395,x:217.2,y:402}).wait(1).to({graphics:mask_graphics_396,x:217.7,y:402}).wait(1).to({graphics:mask_graphics_397,x:218.2,y:402}).wait(1).to({graphics:mask_graphics_398,x:218.7,y:402}).wait(1).to({graphics:mask_graphics_399,x:219.2,y:402}).wait(1).to({graphics:mask_graphics_400,x:219.7,y:402}).wait(1).to({graphics:mask_graphics_401,x:220.2,y:402}).wait(1).to({graphics:mask_graphics_402,x:220.7,y:402}).wait(1).to({graphics:mask_graphics_403,x:221.2,y:402}).wait(1).to({graphics:mask_graphics_404,x:221.7,y:402}).wait(1).to({graphics:mask_graphics_405,x:222.2,y:402}).wait(1).to({graphics:mask_graphics_406,x:223,y:402}).wait(1).to({graphics:mask_graphics_407,x:223.7,y:402}).wait(1).to({graphics:mask_graphics_408,x:224.5,y:402}).wait(1).to({graphics:mask_graphics_409,x:225.3,y:402}).wait(1).to({graphics:mask_graphics_410,x:226,y:402}).wait(1).to({graphics:mask_graphics_411,x:226.8,y:402}).wait(1).to({graphics:mask_graphics_412,x:227.5,y:402}).wait(1).to({graphics:mask_graphics_413,x:228.3,y:402}).wait(1).to({graphics:mask_graphics_414,x:229.1,y:402}).wait(1).to({graphics:mask_graphics_415,x:229.8,y:402}).wait(1).to({graphics:mask_graphics_416,x:230.6,y:402}).wait(1).to({graphics:mask_graphics_417,x:231.4,y:402}).wait(1).to({graphics:mask_graphics_418,x:232.1,y:402}).wait(1).to({graphics:mask_graphics_419,x:232.9,y:402}).wait(1).to({graphics:mask_graphics_420,x:233.7,y:402}).wait(1).to({graphics:mask_graphics_421,x:234.4,y:402}).wait(1).to({graphics:mask_graphics_422,x:235.2,y:402}).wait(1).to({graphics:mask_graphics_423,x:235.9,y:402}).wait(1).to({graphics:mask_graphics_424,x:236.7,y:402}).wait(1).to({graphics:mask_graphics_425,x:237.5,y:402}).wait(1).to({graphics:mask_graphics_426,x:238.2,y:402}).wait(1).to({graphics:mask_graphics_427,x:239,y:402}).wait(1).to({graphics:mask_graphics_428,x:239.8,y:402}).wait(1).to({graphics:mask_graphics_429,x:240.5,y:402}).wait(1).to({graphics:mask_graphics_430,x:241.3,y:402}).wait(1).to({graphics:mask_graphics_431,x:242,y:402}).wait(1).to({graphics:mask_graphics_432,x:242.8,y:402}).wait(1).to({graphics:mask_graphics_433,x:243.6,y:402}).wait(1).to({graphics:mask_graphics_434,x:244.3,y:402}).wait(1).to({graphics:mask_graphics_435,x:245.1,y:402}).wait(1).to({graphics:mask_graphics_436,x:245.8,y:402}).wait(1).to({graphics:mask_graphics_437,x:246.6,y:402}).wait(1).to({graphics:mask_graphics_438,x:247.4,y:402}).wait(1).to({graphics:mask_graphics_439,x:248.2,y:402}).wait(1).to({graphics:mask_graphics_440,x:248.9,y:402}).wait(1).to({graphics:mask_graphics_441,x:249.7,y:402}).wait(1).to({graphics:mask_graphics_442,x:250.4,y:402}).wait(1).to({graphics:mask_graphics_443,x:251.2,y:402}).wait(1).to({graphics:mask_graphics_444,x:252,y:402}).wait(1).to({graphics:mask_graphics_445,x:252.7,y:402}).wait(1).to({graphics:mask_graphics_446,x:253.5,y:402}).wait(1).to({graphics:mask_graphics_447,x:254.2,y:402}).wait(1).to({graphics:mask_graphics_448,x:255,y:402}).wait(1).to({graphics:mask_graphics_449,x:255.8,y:402}).wait(1).to({graphics:mask_graphics_450,x:256.5,y:402}).wait(1).to({graphics:mask_graphics_451,x:257.3,y:402}).wait(1).to({graphics:mask_graphics_452,x:258.1,y:402}).wait(1).to({graphics:mask_graphics_453,x:258.8,y:402}).wait(1).to({graphics:mask_graphics_454,x:259.6,y:402}).wait(1).to({graphics:mask_graphics_455,x:260.3,y:402}).wait(1).to({graphics:mask_graphics_456,x:261.1,y:402}).wait(1).to({graphics:mask_graphics_457,x:261.9,y:402}).wait(1).to({graphics:mask_graphics_458,x:262.6,y:402}).wait(1).to({graphics:mask_graphics_459,x:263.4,y:402}).wait(1).to({graphics:mask_graphics_460,x:264.1,y:402}).wait(1).to({graphics:mask_graphics_461,x:264.9,y:402}).wait(1).to({graphics:mask_graphics_462,x:265.7,y:402}).wait(1).to({graphics:mask_graphics_463,x:266.5,y:402}).wait(1).to({graphics:mask_graphics_464,x:267.2,y:402}).wait(1).to({graphics:mask_graphics_465,x:268,y:402}).wait(1).to({graphics:mask_graphics_466,x:268.7,y:402}).wait(1).to({graphics:mask_graphics_467,x:269.5,y:402}).wait(1).to({graphics:mask_graphics_468,x:270.3,y:402}).wait(1).to({graphics:mask_graphics_469,x:271,y:402}).wait(1).to({graphics:mask_graphics_470,x:271.8,y:402}).wait(1).to({graphics:mask_graphics_471,x:272.6,y:402}).wait(1).to({graphics:mask_graphics_472,x:273.3,y:402}).wait(1).to({graphics:mask_graphics_473,x:277.2,y:402}).wait(1).to({graphics:mask_graphics_474,x:195,y:225.5}).wait(81));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(20,1,1).p("AOoEmQkCBdrTm/QrUm/imFi");
	this.shape_1.setTransform(284.1,402.7);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(334).to({_off:false},0).wait(221));

	// Layer 10
	this.instance_2 = new lib.ar4("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(212,82,1,1,129.8,0,0,-0.1,-0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(546));

	// Layer 12
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(20,1,1).p("APDG7QhCB3hUBrQhTBqhiBlQhiBlh6BMQh6BMiBA8QiAA7iYAiQh7AWipgDQiHgLh9hBQh+hBhmhlQhlhkhHh8QhDh3gdiGQgdiFAHiGQAHiTAkiPQAhiHA5iEQA5iDBMh/QBLiABUhtQBUhtBuhfQBthgCGhJQCGhJCCgzQCAgzCMgMQCLgLCQAbQCQAbCCBHQB/BFBfBqQBfBqArCIQAqCIAQB4QAPB4gEB/QgEB+g2CtQg2Cug3B9QgZA6gkAyg");
	this.shape_2.setTransform(274.7,277);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(320).to({_off:false},0).wait(235));

	// Layer 7 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_291 = new cjs.Graphics().p("AqrfMMAjEgu6QJvHRBuL+QBvMCnRJuQnRJusABuQiVAWiQAAQpTAAn2l3g");
	var mask_1_graphics_292 = new cjs.Graphics().p("AqTfdMAiUgvdQJ2HHB7L9QB7L/nHJ2QnHJ1r/B6QikAbieAAQpCAAnvlmg");
	var mask_1_graphics_293 = new cjs.Graphics().p("Ap7fvMAhkgwAQJ8G9CHL6QCIL+m9J8Qm9J9r9CGQizAgisAAQoxAAnolUg");
	var mask_1_graphics_294 = new cjs.Graphics().p("Apif/MAgygwhQKDGzCUL4QCUL7mzKEQmzKDr7CTQjCAmi6AAQohAAnflFg");
	var mask_1_graphics_295 = new cjs.Graphics().p("EgJKAgQMAgBgxDQKKGpCgL1QCgL5mpKLQmpKKr4CfQjQAsjIAAQoRAAnYk0g");
	var mask_1_graphics_296 = new cjs.Graphics().p("EgIxAggMAfOgxjQKSGeCrLzQCsL2meKRQmeKSr2CqQjeAzjXAAQoAAAnQkkg");
	var mask_1_graphics_297 = new cjs.Graphics().p("EgIYAgvMAecgyCQKYGUC3LwQC4LzmUKYQmTKYrzC2QjtA6jjAAQnxAAnIkVg");
	var mask_1_graphics_298 = new cjs.Graphics().p("EgH+Ag/MAdogyhQKeGJDELtQDELwmJKeQmKKervDDQj7BCjxAAQniAAm+kGg");
	var mask_1_graphics_299 = new cjs.Graphics().p("EgHkAhOMAc0gy/QKkF+DQLrQDQLsl/KkQl+KkrsDPQkIBKkAAAQnSAAm1j3g");
	var mask_1_graphics_300 = new cjs.Graphics().p("EgHKAhcMAcAgzcQKqFzDbLoQDcLplzKqQl0KqrpDbQkVBSkNAAQnDAAmsjpg");
	var mask_1_graphics_301 = new cjs.Graphics().p("EgGwAhqMAbLgz4QKwFoDnLkQDoLlloKxQlpKwrlDmQkjBbkaAAQm1AAmijbg");
	var mask_1_graphics_302 = new cjs.Graphics().p("EgGWAh4MAaWg0UQK2FeDzLgQD0LhleK2QldK2riDyQkvBkkoAAQmnAAmYjNg");
	var mask_1_graphics_303 = new cjs.Graphics().p("EgF7AiFMAZhg0uQK7FSD+LdQEALdlTK7QlSK7reD+Qk7Bvk2AAQmZAAmNjBg");
	var mask_1_graphics_304 = new cjs.Graphics().p("EgFgAiSMAYrg1IQLAFHEKLZQELLZlHLAQlHLBraEJQlIB5lCAAQmLAAmDi0g");
	var mask_1_graphics_305 = new cjs.Graphics().p("EgFFAieMAX0g1gQLGE8EWLUQEWLUk8LGQk8LGrVEVQlUCDlQAAQl9AAl4iog");
	var mask_1_graphics_306 = new cjs.Graphics().p("EgEqAiqMAW+g14QLLExEhLPQEiLQkxLLQkxLKrQEhQlgCOleAAQlvAAlticg");
	var mask_1_graphics_307 = new cjs.Graphics().p("EgEOAi2MAWGg2PQLQElEsLKQEuLMklLPQkmLQrMEsQlqCZlsAAQliAAlhiQg");
	var mask_1_graphics_308 = new cjs.Graphics().p("EgDyAjBMAVPg2lQLUEZE4LGQE4LHkZLUQkaLUrHE3Ql2Cll6AAQlUAAlViFg");
	var mask_1_graphics_309 = new cjs.Graphics().p("EgDWAjMMAUXg27QLYEOFDLBQFFLBkPLZQkOLYrCFDQmBCxmIAAQlGAAlJh6g");
	var mask_1_graphics_310 = new cjs.Graphics().p("EgC6AjWMATfg3PQLcEDFPK7QFPK8kCLdQkDLcq9FOQmLC+mWAAQk5AAk9hwg");
	var mask_1_graphics_311 = new cjs.Graphics().p("EgCeAjgMASmg3iQLhD2FaK2QFaK3j3LhQj3Lgq3FaQmWDKmkAAQkrAAkxhmg");
	var mask_1_graphics_312 = new cjs.Graphics().p("EgCBAjpMARtg31QLlDrFkKxQFmKxjrLlQjrLkqyFkQmgDYmzAAQkdAAkkhdg");
	var mask_1_graphics_313 = new cjs.Graphics().p("EgBlAjyMAQ1g4GQLoDfFvKrQFxKrjfLoQjgLoqsFvQmpDmnBAAQkQAAkYhUg");
	var mask_1_graphics_314 = new cjs.Graphics().p("EgBIAj7MAP7g4XQLsDTF6KlQF7KljTLsQjTLrqmF6QmzD0nQAAQkDAAkKhLg");
	var mask_1_graphics_315 = new cjs.Graphics().p("EgArAkDMAPBg4nQLvDHGFKfQGGKfjHLvQjHLvqgGFQm8ECngAAQj0AAj9hDg");
	var mask_1_graphics_316 = new cjs.Graphics().p("EgAOAkKMAOIg41QLyC7GPKYQGRKZi7LyQi8LyqZGQQnFERnvAAQjnAAjvg8g");
	var mask_1_graphics_317 = new cjs.Graphics().p("EAAOAkSMANPg5EQL1CvGaKSQGbKTivL1QiwL0qTGaQnNEhn+AAQjaAAjig0g");
	var mask_1_graphics_318 = new cjs.Graphics().p("EAArAkYMAMVg5QQL3CjGlKLQGmKMikL4QijL3qMGlQnWEwoOAAQjMAAjUgug");
	var mask_1_graphics_319 = new cjs.Graphics().p("EABJAkfMALag5dQL6CXGvKFQGwKFiXL6QiYL6qFGvQneFAoeAAQi+AAjFgng");
	var mask_1_graphics_320 = new cjs.Graphics().p("EABmAkkMAKfg5oQL8CLG6J+QG6J+iLL8QiLL8p/G5QnlFRovAAQivAAi3ghg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(291).to({graphics:mask_1_graphics_291,x:231.6,y:237.1}).wait(1).to({graphics:mask_1_graphics_292,x:231.6,y:237.1}).wait(1).to({graphics:mask_1_graphics_293,x:231.6,y:237.1}).wait(1).to({graphics:mask_1_graphics_294,x:231.6,y:237.2}).wait(1).to({graphics:mask_1_graphics_295,x:231.6,y:237.2}).wait(1).to({graphics:mask_1_graphics_296,x:231.7,y:237.2}).wait(1).to({graphics:mask_1_graphics_297,x:231.7,y:237.2}).wait(1).to({graphics:mask_1_graphics_298,x:231.7,y:237.3}).wait(1).to({graphics:mask_1_graphics_299,x:231.7,y:237.3}).wait(1).to({graphics:mask_1_graphics_300,x:231.7,y:237.3}).wait(1).to({graphics:mask_1_graphics_301,x:231.7,y:237.3}).wait(1).to({graphics:mask_1_graphics_302,x:231.7,y:237.3}).wait(1).to({graphics:mask_1_graphics_303,x:231.7,y:237.4}).wait(1).to({graphics:mask_1_graphics_304,x:231.7,y:237.4}).wait(1).to({graphics:mask_1_graphics_305,x:231.7,y:237.4}).wait(1).to({graphics:mask_1_graphics_306,x:231.7,y:237.4}).wait(1).to({graphics:mask_1_graphics_307,x:231.7,y:237.4}).wait(1).to({graphics:mask_1_graphics_308,x:231.7,y:237.4}).wait(1).to({graphics:mask_1_graphics_309,x:231.7,y:237.4}).wait(1).to({graphics:mask_1_graphics_310,x:231.7,y:237.4}).wait(1).to({graphics:mask_1_graphics_311,x:231.7,y:237.4}).wait(1).to({graphics:mask_1_graphics_312,x:231.7,y:237.4}).wait(1).to({graphics:mask_1_graphics_313,x:231.7,y:237.4}).wait(1).to({graphics:mask_1_graphics_314,x:231.7,y:237.4}).wait(1).to({graphics:mask_1_graphics_315,x:231.7,y:237.4}).wait(1).to({graphics:mask_1_graphics_316,x:231.6,y:237.4}).wait(1).to({graphics:mask_1_graphics_317,x:231.6,y:237.4}).wait(1).to({graphics:mask_1_graphics_318,x:231.6,y:237.4}).wait(1).to({graphics:mask_1_graphics_319,x:231.6,y:237.4}).wait(1).to({graphics:mask_1_graphics_320,x:231.5,y:237.3}).wait(235));

	// Layer 6
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(20,1,1).p("APDG7QhCB3hUBrQhTBqhiBlQhiBlh6BMQh6BMiBA8QiAA7iYAiQh7AWipgDQiHgLh9hBQh+hBhmhlQhlhkhHh8QhDh3gdiGQgdiFAHiGQAHiTAkiPQAhiHA5iEQA5iDBMh/QBLiABUhtQBUhtBuhfQBthgCGhJQCGhJCCgzQCAgzCMgMQCLgLCQAbQCQAbCCBHQB/BFBfBqQBfBqArCIQAqCIAQB4QAPB4gEB/QgEB+g2CtQg2Cug3B9QgZA6gkAyg");
	this.shape_3.setTransform(274.7,277);
	this.shape_3._off = true;

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(291).to({_off:false},0).wait(264));

	// Layer 5 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_159 = new cjs.Graphics().p("AoTWXQlyqrDdrpQDeroKqlwQKrlzLoDeMgQuA4JQrnjelxqqg");
	var mask_2_graphics_160 = new cjs.Graphics().p("AnsW1QmBqjDOruQDNrsKil/QKimCLuDOMgPgA4fQrsjNmAqig");
	var mask_2_graphics_161 = new cjs.Graphics().p("AnDXTQmQqbC9rxQC9rxKamOQKZmQLyC9MgOQA40Qrxi9mOqZg");
	var mask_2_graphics_162 = new cjs.Graphics().p("AmaXxQmeqSCtr1QCsr1KRmcQKQmfL2CtMgNBA5HQr1ismcqRg");
	var mask_2_graphics_163 = new cjs.Graphics().p("AlwYPQmsqJCcr5QCcr4KHmrQKImsL5CcMgLxA5YQr5icmqqHg");
	var mask_2_graphics_164 = new cjs.Graphics().p("AlFYtQm6p/CLr9QCMr7J+m5QJ+m6L8CLMgKhA5oQr8iLm4p+g");
	var mask_2_graphics_165 = new cjs.Graphics().p("AkZZLQnIp2B6r/QB7r+J1nHQJ0nIL/B7MgJQA51Qr/h6nGp0g");
	var mask_2_graphics_166 = new cjs.Graphics().p("AjtZpQnVpsBqsCQBqsAJqnUQJqnWMCBqMgH/A6BQsChqnUppg");
	var mask_2_graphics_167 = new cjs.Graphics().p("Ai/aGQnjphBZsEQBZsDJgnhQJgnjMDBZMgGuA6MQsDhZnhpgg");
	var mask_2_graphics_168 = new cjs.Graphics().p("AiRakQnwpXBIsFQBIsFJWnvQJVnwMFBIMgFdA6VQsFhInupVg");
	var mask_2_graphics_169 = new cjs.Graphics().p("AhibBQn9pLA3sHQA3sGJLn8QJKn9MHA3MgEMA6cQsHg4n6pKg");
	var mask_2_graphics_170 = new cjs.Graphics().p("AgzbeQoKpAAnsIQAmsHJAoIQI+oKMIAmMgC5A6hQsIgnoIo/g");
	var mask_2_graphics_171 = new cjs.Graphics().p("AgDb8QoWo1AWsJQAVsII0oUQIzoXMJAWMgBoA6jQsJgVoUozg");
	var mask_2_graphics_172 = new cjs.Graphics().p("AAtcZQohopAEsJQAFsIIoohQIoojMJAFMgAXA6lQsJgFohong");
	var mask_2_graphics_173 = new cjs.Graphics().p("ABBc1QotodgNsJQgMsIIcosQIcovMIgMMAA8A6kIgjABQrzAAogoQg");
	var mask_2_graphics_174 = new cjs.Graphics().p("ABKdRQo5oRgdsIQgdsHIRo5QIOo6MIgdMACNA6iQgpACgoAAQrVAAobn0g");
	var mask_2_graphics_175 = new cjs.Graphics().p("ABUdsQpEoEgusHQgusHIEpEQIBpFMIguMADfA6eQhAAEg/AAQq5AAoUnZg");
	var mask_2_graphics_176 = new cjs.Graphics().p("ABfeHQpQn3g/sHQg/sFH4pPQH0pRMHg/MAEwA6ZQhWAHhVAAQqdAAoNm+g");
	var mask_2_graphics_177 = new cjs.Graphics().p("ABqehQpbnrhPsEQhQsEHqpaQHopbMFhQMAGBA6RQhsALhpAAQqEAAoFmkg");
	var mask_2_graphics_178 = new cjs.Graphics().p("AB2e6QplndhhsDQhhsCHdplQHbplMDhhMAHTA6IQiDAQh9AAQprAAn8mLg");
	var mask_2_graphics_179 = new cjs.Graphics().p("ACCfSQpvnPhysBQhxsBHPptQHNpwMBhyMAIkA59QiYAWiSAAQpRAAn0lzg");
	var mask_2_graphics_180 = new cjs.Graphics().p("ACPfqQp5nCiDr+QiCr+HCp4QHAp5L9iDMAJ1A5wQisAdimAAQo6AAnqlbg");
	var mask_2_graphics_181 = new cjs.Graphics().p("EACcAgBQqDm0iSr7QiTr7G0qBQGxqEL7iTMALFA5hQjBAmi5AAQojAAnglFg");
	var mask_2_graphics_182 = new cjs.Graphics().p("EACqAgXQqMmmijr3Qikr4GmqLQGkqML3ikMAMVA5RQjUAujNAAQoNAAnVkvg");
	var mask_2_graphics_183 = new cjs.Graphics().p("EAC5AgsQqVmXi0r0Qi0r0GYqTQGVqWLzi0MANlA4/QjoA3jfAAQn4AAnJkag");
	var mask_2_graphics_184 = new cjs.Graphics().p("EADIAhBQqemJjErwQjFrvGKqdQGHqeLvjFMAO0A4rQj7BCjyAAQniAAm+kFg");
	var mask_2_graphics_185 = new cjs.Graphics().p("EADYAhVQqml6jVrrQjVrsF7qkQF4qnLrjVMAQDA4VQkOBNkEAAQnOAAmxjxg");
	var mask_2_graphics_186 = new cjs.Graphics().p("EADoAhoQqulrjlrmQjlrnFsqtQFpqvLmjlMARRA3/QkfBYkXAAQm6AAmkjeg");
	var mask_2_graphics_187 = new cjs.Graphics().p("EAD5Ah7Qq2ldj1rhQj1rhFcq1QFbq2Lgj1MASgA3lQkyBlkpAAQmmAAmWjLg");
	var mask_2_graphics_188 = new cjs.Graphics().p("EAEKAiMQq9lNkFrbQkFrcFNq8QFMq+LakFMATtA3KQlCBzk8AAQmSAAmJi6g");
	var mask_2_graphics_189 = new cjs.Graphics().p("EAEcAidQrEk9kVrWQkVrWE+rDQE8rFLVkVMAU5A2uQlTCBlOAAQl/AAl6ipg");
	var mask_2_graphics_190 = new cjs.Graphics().p("EAEvAitQrLkuklrPQklrQEvrKQEsrMLPkkMAWFA2QQljCQlhAAQlsAAlqiZg");
	var mask_2_graphics_191 = new cjs.Graphics().p("EAFCAi9QrSkfk0rJQk1rJEfrQQEdrSLIk1MAXRA1xQlyCgl1AAQlZAAlaiJg");
	var mask_2_graphics_192 = new cjs.Graphics().p("EAFVAjLQrXkOlErCQlErDEPrWQENrYLBlEMAYbA1PQmBCxmHAAQlGAAlLh7g");
	var mask_2_graphics_193 = new cjs.Graphics().p("EAFpAjZQrdj+lTq7QlUq7EArdQD9reK6lTMAZlA0tQmQDCmbAAQkzAAk6htg");
	var mask_2_graphics_194 = new cjs.Graphics().p("EAF+AjmQrjjuljq0QliqzDvriQDurjKyliMAauA0IQmeDUmuAAQkhAAkohgg");
	var mask_2_graphics_195 = new cjs.Graphics().p("EAGTAjyQrojelyqsQlxqrDfrnQDdroKrlxMAb2AziQmrDmnCAAQkPABkWhUg");
	var mask_2_graphics_196 = new cjs.Graphics().p("EAGoAj+QrtjOmAqkQmAqjDPrrQDNrtKjmAMAc9Ay6Qm4D6nXAAQj7AAkFhHg");
	var mask_2_graphics_197 = new cjs.Graphics().p("EAG+AkIQrxi+mPqaQmPqbC/rxQC8rwKbmPMAeEAySQnFEOnrAAQjpAAjyg9g");
	var mask_2_graphics_198 = new cjs.Graphics().p("EAHUAkSQr1itmdqSQmdqSCur1QCsr0KSmdMAfJAxmQnQEkoBAAQjWAAjfgzg");
	var mask_2_graphics_199 = new cjs.Graphics().p("EAHrAkbQr5idmrqJQmrqJCdr4QCbr4KJmrMAgOAw6QnbE5oXAAQjDAAjLgpg");
	var mask_2_graphics_200 = new cjs.Graphics().p("EAICAkjQr8iMm5qAQm6p/CNr8QCLr6J/m6MAhSAwNQnmFPotAAQiwAAi3ghg");
	var mask_2_graphics_201 = new cjs.Graphics().p("EAIaAkqQr/h8nHp1QnIp2B9r+QB6r+J1nHMAiVAvdQnwFnpEAAQidAAiigag");
	var mask_2_graphics_202 = new cjs.Graphics().p("EAIyAkwQsChrnUprQnVpsBrsBQBpsAJsnVMAjWAutQn5F+pcAAQiJAAiNgTg");
	var mask_2_graphics_203 = new cjs.Graphics().p("EAJKAk1QsDhanjphQniphBbsDQBYsCJhnjMAkXAt7QoCGXp0AAQh1AAh4gOg");
	var mask_2_graphics_204 = new cjs.Graphics().p("EAJjAk6QsFhJnwpXQnvpWBJsFQBIsEJXnwMAlWAtIQoKGwqOAAQhgAAhigJg");
	var mask_2_graphics_205 = new cjs.Graphics().p("EAJ+Ak9QsGg2n+pKQn+pLA4sGQA1sGJKn9MAmbAsNQoSHMqrABQhIAAhLgGg");
	var mask_2_graphics_206 = new cjs.Graphics().p("EAKaAlAQsHgkoMo+QoLo+AksHQAjsHI+oLMAneArRQoaHqrJAAQgwAAgygCg");
	var mask_2_graphics_207 = new cjs.Graphics().p("EAK3AlCQsIgRoaoyQoZoxASsIQAQsHIxoaMAogAqUQogIJrpAAIgvAAg");
	var mask_2_graphics_208 = new cjs.Graphics().p("ApbcfQonokAAsIQgDsIIkomMApgApVQokImsHACIgFAAQsFAAolojg");
	var mask_2_graphics_209 = new cjs.Graphics().p("ApLc/QozoXgTsIQgWsHIXo0MAqfAoUQoXI0sHAUIg5ABQrkAAofoDg");
	var mask_2_graphics_210 = new cjs.Graphics().p("Ao5ddQpAoJgmsIQgosGIJpAMArcAnSQoJJAsGAnQg2ADg1AAQrFAAoYnlg");
	var mask_2_graphics_211 = new cjs.Graphics().p("Aomd7QpNn8g4sGQg7sFH8pNMAsXAmPQn7JNsFA5QhPAGhNAAQqnAAoQnHg");
	var mask_2_graphics_212 = new cjs.Graphics().p("AoSeXQpZnthLsFQhNsDHtpZMAtRAlLQntJYsDBMQhoAKhkAAQqJAAoImrg");
	var mask_2_graphics_213 = new cjs.Graphics().p("An9ezQplnehdsDQhgsCHfpkMAuJAkEQneJksCBfQh/APh7AAQpuAAn+mPg");
	var mask_2_graphics_214 = new cjs.Graphics().p("AnnfOQpwnQhwsAQhyr/HQpvMAvAAi8QnQJwr/BwQiXAXiRAAQpTAAn0l1g");
	var mask_2_graphics_215 = new cjs.Graphics().p("AnQfoQp7nAiCr+QiEr9HAp5MAv1AhzQnAJ7r9CDQitAeinAAQo6AAnplbg");
	var mask_2_graphics_216 = new cjs.Graphics().p("EgG4AgBQqFmxiVr6QiWr6GxqEMAwoAgqQmxKFr5CWQjEAmi9AAQogAAnelCg");
	var mask_2_graphics_217 = new cjs.Graphics().p("EgGfAgaQqPmiinr2Qipr2GiqOMAxZAfeQmiKPr0CoQjaAwjSAAQoIAAnSkpg");
	var mask_2_graphics_218 = new cjs.Graphics().p("EgGEAgxQqZmSi5ryQi7rxGRqYMAyJAeSQmSKZrxC5QjvA7jmAAQnwAAnFkSg");
	var mask_2_graphics_219 = new cjs.Graphics().p("EgFpAhIQqjmCjLrtQjNrtGCqiMAy2AdFQmBKirtDMQkDBHj7AAQnZAAm4j8g");
	var mask_2_graphics_220 = new cjs.Graphics().p("EgFNAhdQqrlxjdroQjfroFxqrMAziAb2QlxKsrnDdQkYBUkPAAQnDAAmqjng");
	var mask_2_graphics_221 = new cjs.Graphics().p("EgEvAhyQq1lhjurjQjxriFhqzMA0LAamQlgK0riDwQkrBhkkAAQmsAAmbjSg");
	var mask_2_graphics_222 = new cjs.Graphics().p("EgERAiGQq9lRkArcQkCrcFQq8MA0zAZWQlQK8rbEBQk/Bwk4AAQmXAAmLi+g");
	var mask_2_graphics_223 = new cjs.Graphics().p("EgDyAiYQrEk/kSrWQkUrWE/rDMA1aAYEQk/LErWESQlQCAlNAAQmCAAl7isg");
	var mask_2_graphics_224 = new cjs.Graphics().p("EgDSAiqQrMkukjrPQklrPEurLMA1+AWxQkuLMrPEkQliCQlhAAQltAAlriag");
	var mask_2_graphics_225 = new cjs.Graphics().p("EgCxAi7QrTkdk0rIQk2rIEdrRMA2fAVeQkdLTrHE0QlzCil2AAQlYAAlaiJg");
	var mask_2_graphics_226 = new cjs.Graphics().p("EgCPAjLQrZkLlGrBQlHrAEMrYMA2/AUKQkLLZrAFGQmEC0mLAAQlDAAlIh5g");
	var mask_2_graphics_227 = new cjs.Graphics().p("EgBsAjaQrgj6lWq4QlYq4D6rfMA3dAS1Qj5Lgq4FXQmUDHmgAAQkvAAk1hqg");
	var mask_2_graphics_228 = new cjs.Graphics().p("EgBIAjoQrmjolmqwQlpqwDorkMA35ARgQjoLlqvFnQmjDbm2AAQkbAAkhhbg");
	var mask_2_graphics_229 = new cjs.Graphics().p("EgAkAj2QrqjXl4qnQl5qnDXrqMA4TAQKQjXLrqmF3QmxDwnNAAQkGAAkOhNg");
	var mask_2_graphics_230 = new cjs.Graphics().p("EAABAkCQrvjFmHqeQmKqeDFrvMA4rAO0QjFLvqdGIQm/EGnjAAQjyAAj6hBg");
	var mask_2_graphics_231 = new cjs.Graphics().p("EAAnAkNQrzizmYqVQmZqTCyr0MA5BANcQiyL0qUGYQnMEdn7AAQjcAAjmg2g");
	var mask_2_graphics_232 = new cjs.Graphics().p("EABOAkXQr3igmoqLQmpqKChr4MA5UAMEQigL5qKGnQnZE0oSABQjIAAjQgsg");
	var mask_2_graphics_233 = new cjs.Graphics().p("EAB2AkgQr7iOm3qBQm4p/CNr8MA5mAKtQiOL7p/G3QnkFNorAAQizAAi6gig");
	var mask_2_graphics_234 = new cjs.Graphics().p("EACeAkoQr+h8nGp2QnIp0B8r/MA51AJTQh8MAp0HGQnwFmpEAAQidAAikgag");
	var mask_2_graphics_235 = new cjs.Graphics().p("EADHAkuQsBhpnVpqQnWpqBpsCMA6CAH7QhpMCppHVQn6GBpfAAQiHAAiNgUg");
	var mask_2_graphics_236 = new cjs.Graphics().p("EADxAk0QsDhWnkpgQnlpeBWsEMA6OAGiQhXMEpeHkQoDGbp6AAQhxAAh1gNg");
	var mask_2_graphics_237 = new cjs.Graphics().p("EAEbAk5QsFhEnypUQnzpSBEsGMA6WAFIQhEMGpSHyQoMG4qXAAQhaAAhdgIg");
	var mask_2_graphics_238 = new cjs.Graphics().p("EAFGAk9QsGgyoApHQoCpGAxsIMA6eADvQgyMHpGIAQoUHVq0AAQhDAAhEgEg");
	var mask_2_graphics_239 = new cjs.Graphics().p("EAFyAk/QsHgfoOo7QoQo5AfsJMA6iACVQgfMIo6IOQobHzrTAAQgqAAgrgCg");
	var mask_2_graphics_240 = new cjs.Graphics().p("EAGeAlAQsIgMobouQodotAMsJMA6kAA7QgMMJotIbQoiISrzAAIgigBg");
	var mask_2_graphics_241 = new cjs.Graphics().p("AtmcmQoqoggGsJMA6kgAfQAHMJogIpQohIqsJAGIgSABQr8AAojobg");
	var mask_2_graphics_242 = new cjs.Graphics().p("AtGdEQo3oSgZsIMA6jgB5QAZMIoSI2QoUI3sIAZIhGABQrbAAodn8g");
	var mask_2_graphics_243 = new cjs.Graphics().p("AspdeQpCoGgpsIMA6fgDGQApMIoGJAQoIJCsIApQg5ADg4AAQrAAAoWnig");
	var mask_2_graphics_244 = new cjs.Graphics().p("AsNd4QpMn7g5sHMA6agETQA5MHn6JLQn8JNsHA5QhOAFhMAAQqnAAoQnIg");
	var mask_2_graphics_245 = new cjs.Graphics().p("ArweQQpWnuhJsFMA6UgFgQBJMFnvJWQnvJWsGBJQhjAKhgAAQqOAAoJmxg");
	var mask_2_graphics_246 = new cjs.Graphics().p("ArSeoQphnhhZsEMA6NgGtQBYMEniJfQnjJhsEBZQh3AOh0AAQp2AAoBmZg");
	var mask_2_graphics_247 = new cjs.Graphics().p("Aq0fAQpqnVhpsCMA6CgH5QBpMCnVJpQnXJqsCBpQiMATiHAAQpeAAn5mBg");
	var mask_2_graphics_248 = new cjs.Graphics().p("AqVfXQp0nJh5r/MA54gJFQB4L/nJJzQnJJ0sAB4QigAZiZAAQpIAAnwlqg");
	var mask_2_graphics_249 = new cjs.Graphics().p("Ap2ftQp+m7iIr9MA5rgKSQCIL9m8J8Qm8J+r9CIQizAgitAAQoxAAnnlVg");
	var mask_2_graphics_250 = new cjs.Graphics().p("EgJXAgCQqGmuiYr6MA5cgLdQCYL6muKFQmwKHr6CXQjGAoi+AAQocAAnelAg");
	var mask_2_graphics_251 = new cjs.Graphics().p("EgI3AgXQqPmhinr2MA5MgMpQCoL3mhKOQmjKPr2CnQjZAwjQAAQoIAAnTkrg");
	var mask_2_graphics_252 = new cjs.Graphics().p("EgIWAgrQqYmTi3rzMA47gNzQC3LzmTKWQmVKXrzC3QjrA5jiAAQnzAAnIkXg");
	var mask_2_graphics_253 = new cjs.Graphics().p("EgH2Ag/QqfmFjHrwMA4ogO+QDHLvmGKeQmHKgrvDHQj9BDjzAAQngAAm9kEg");
	var mask_2_graphics_254 = new cjs.Graphics().p("EgHUAhSQqol4jWrrMA4UgQHQDWLql4KmQl5KorrDVQkOBOkFAAQnMAAmxjxg");
	var mask_2_graphics_255 = new cjs.Graphics().p("EgGzAhkQqvlpjlrnMA3+gRRQDlLllqKuQlrKvrmDlQkfBZkXAAQm5AAmljfg");
	var mask_2_graphics_256 = new cjs.Graphics().p("EgGRAh2Qq2lcj0rhMA3mgSbQD0LglcK1QlcK3riD0QkwBlkoAAQmnAAmXjNg");
	var mask_2_graphics_257 = new cjs.Graphics().p("EgF0AiEQq8lQkBrdMA3RgTYQEBLclQK7QlQK9reEBQk9Bvk2AAQmYAAmMi/g");
	var mask_2_graphics_258 = new cjs.Graphics().p("EgFXAiRQrClDkNrZMA27gUUQEOLXlELBQlFLCrYEOQlLB6lFAAQmIAAmBiyg");
	var mask_2_graphics_259 = new cjs.Graphics().p("EgE6AifQrHk4karTMA2lgVRQEaLTk4LFQk4LIrUEaQlXCGlVAAQl5AAl1ikg");
	var mask_2_graphics_260 = new cjs.Graphics().p("EgEcAirQrNkqkmrPMA2MgWNQEnLOkrLLQktLNrOEnQlkCRljAAQlqAAlpiYg");
	var mask_2_graphics_261 = new cjs.Graphics().p("EgD+Ai4QrSkfkzrKMA10gXIQEzLJkfLQQkgLSrKEzQlwCelxAAQlcAAlciLg");
	var mask_2_graphics_262 = new cjs.Graphics().p("EgDgAjDQrXkSk/rEMA1agYDQE/LDkTLVQkTLXrEE/Ql8CrmBAAQlNAAlPiAg");
	var mask_2_graphics_263 = new cjs.Graphics().p("EgDCAjPQrbkGlLq/MA0+gY+QFMK+kGLaQkHLbq/FMQmHC4mQAAQk+AAlDh0g");
	var mask_2_graphics_264 = new cjs.Graphics().p("EgCkAjZQrfj5lXq4MA0igZ4QFYK3j6LeQj6Lhq5FXQmTDGmfAAQkvAAk2hqg");
	var mask_2_graphics_265 = new cjs.Graphics().p("EgCFAjkQrjjtlkqyMA0GgayQFjKyjtLiQjtLkqzFjQmeDVmvAAQkgAAkohfg");
	var mask_2_graphics_266 = new cjs.Graphics().p("EgBmAjtQrojflvqtMAzogbrQFvKsjgLmQjhLpqsFvQmpDjm+AAQkSAAkahWg");
	var mask_2_graphics_267 = new cjs.Graphics().p("EgBHAj3QrrjTl7qmMAzJgckQF6KmjTLqQjULrqmF7QmzDznOAAQkEAAkLhMg");
	var mask_2_graphics_268 = new cjs.Graphics().p("EgAoAj/QrvjFmGqgMAypgdbQGGKejGLuQjHLvqgGHQm8ECnfAAQj1AAj9hEg");
	var mask_2_graphics_269 = new cjs.Graphics().p("EgAJAkHQryi4mRqZMAyHgeTQGSKYi5LxQi6LyqZGSQnGETnvAAQjmAAjvg8g");
	var mask_2_graphics_270 = new cjs.Graphics().p("EAAWAkPQr0ismdqRMAxlgfKQGeKRitLzQitL2qSGeQnPEjoAAAQjXAAjgg0g");
	var mask_2_graphics_271 = new cjs.Graphics().p("EAA2AkWQr3iempqLMAxDggAQGpKJigL3QigL5qKGoQnYE0oRAAQjJAAjQgsg");
	var mask_2_graphics_272 = new cjs.Graphics().p("EABVAkdQr5iSm0qDMAwfgg2QG0KCiSL6QiTL7qDG0QnhFFoiAAQi6AAjBglg");
	var mask_2_graphics_273 = new cjs.Graphics().p("EAB1AkjQr8iEm+p8MAv6ghrQG/J7iFL7QiGL+p8G/QnoFXo1AAQiqAAixgfg");
	var mask_2_graphics_274 = new cjs.Graphics().p("EACVAkpQr+h4nKp0MAvWgifQHJJzh4L+Qh4MAp0HJQnwFqpIAAQiaAAihgZg");
	var mask_2_graphics_275 = new cjs.Graphics().p("EAC1AkuQsAhrnUprMAuvgjUQHUJshrL/QhrMCpsHUQn4F9paAAQiLAAiQgUg");
	var mask_2_graphics_276 = new cjs.Graphics().p("EADVAkyQsBhdnfpkMAuHgkGQHfJkheMAQheMEpjHfQn/GQptAAQh7AAiAgQg");
	var mask_2_graphics_277 = new cjs.Graphics().p("EAD1Ak2QsDhQnppbMAtfgk5QHpJbhQMDQhRMFpbHpQoFGjqBABQhrAAhvgMg");
	var mask_2_graphics_278 = new cjs.Graphics().p("EAEWAk5QsFhCn0pTMAs2glrQH0JThDMDQhDMHpTH0QoMG3qVAAQhaAAhdgIg");
	var mask_2_graphics_279 = new cjs.Graphics().p("EAE3Ak8QsGg1n+pKMAsLgmdQH+JKg1MFQg2MHpKH+QoRHNqrAAQhJAAhLgFg");
	var mask_2_graphics_280 = new cjs.Graphics().p("EAFYAk+QsGgnoJpBMArfgnOQIIJAgnMGQgoMIpBIIQoXHjrBAAQg4AAg4gDg");
	var mask_2_graphics_281 = new cjs.Graphics().p("EAF5AlAQsHgZoSo4MAqygoAQISI4gaMGQgaMJo4ISQobH5rZAAIhLgBg");
	var mask_2_graphics_282 = new cjs.Graphics().p("EAGaAlBQsHgMocouMAqEgovQIcIugMMGQgMMJouIcQohIQrwAAIgmAAg");
	var mask_2_graphics_283 = new cjs.Graphics().p("AtycfMApVgpfQInIkABMHQACMJolImQokInsJAAIgGAAQsDAAokoig");
	var mask_2_graphics_284 = new cjs.Graphics().p("Atac2MAomgqNQIwIaAPMGQAPMKobIwQoaIwsIAOIguAAQrqAAofoLg");
	var mask_2_graphics_285 = new cjs.Graphics().p("AtCdNMAn1gq7QI6IRAdMFQAdMJoRI5QoRI6sHAcQgqABgpAAQrTAAoan0g");
	var mask_2_graphics_286 = new cjs.Graphics().p("AsqdjMAnFgrnQJCIGArMFQArMIoHJDQoGJDsHApQg9ADg7AAQq7AAoWneg");
	var mask_2_graphics_287 = new cjs.Graphics().p("AsRd5MAmTgsTQJLH8A5MEQA4MHn8JMQn8JMsGA3QhPAGhNAAQqlAAoQnJg");
	var mask_2_graphics_288 = new cjs.Graphics().p("Ar4eOMAlggs+QJVHyBGMDQBGMGnyJUQnxJVsGBFQhgAJheAAQqQAAoKm0g");
	var mask_2_graphics_289 = new cjs.Graphics().p("ArfejMAktgtoQJeHnBTMBQBUMFnnJeQnnJdsEBTQhyAMhvAAQp7AAoEmfg");
	var mask_2_graphics_290 = new cjs.Graphics().p("ArFe4MAj5guSQJmHcBhMAQBiMEndJlQncJmsCBhQiEAQh/AAQpnAAn9mKg");
	var mask_2_graphics_291 = new cjs.Graphics().p("AqrfMMAjEgu6QJvHRBuL+QBvMCnRJuQnRJusABuQiVAWiQAAQpTAAn2l3g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(159).to({graphics:mask_2_graphics_159,x:165.1,y:233.5}).wait(1).to({graphics:mask_2_graphics_160,x:163.2,y:234}).wait(1).to({graphics:mask_2_graphics_161,x:161.2,y:234.5}).wait(1).to({graphics:mask_2_graphics_162,x:159.2,y:235}).wait(1).to({graphics:mask_2_graphics_163,x:157.2,y:235.4}).wait(1).to({graphics:mask_2_graphics_164,x:155.2,y:235.8}).wait(1).to({graphics:mask_2_graphics_165,x:153.2,y:236.1}).wait(1).to({graphics:mask_2_graphics_166,x:151.2,y:236.4}).wait(1).to({graphics:mask_2_graphics_167,x:149.1,y:236.7}).wait(1).to({graphics:mask_2_graphics_168,x:147.1,y:236.9}).wait(1).to({graphics:mask_2_graphics_169,x:145.1,y:237.1}).wait(1).to({graphics:mask_2_graphics_170,x:143,y:237.2}).wait(1).to({graphics:mask_2_graphics_171,x:141,y:237.2}).wait(1).to({graphics:mask_2_graphics_172,x:139,y:237.3}).wait(1).to({graphics:mask_2_graphics_173,x:139.9,y:237.3}).wait(1).to({graphics:mask_2_graphics_174,x:141.9,y:237.3}).wait(1).to({graphics:mask_2_graphics_175,x:144,y:237.3}).wait(1).to({graphics:mask_2_graphics_176,x:146,y:237.3}).wait(1).to({graphics:mask_2_graphics_177,x:148,y:237.3}).wait(1).to({graphics:mask_2_graphics_178,x:150.1,y:237.3}).wait(1).to({graphics:mask_2_graphics_179,x:152.1,y:237.3}).wait(1).to({graphics:mask_2_graphics_180,x:154.1,y:237.3}).wait(1).to({graphics:mask_2_graphics_181,x:156.1,y:237.4}).wait(1).to({graphics:mask_2_graphics_182,x:158.1,y:237.4}).wait(1).to({graphics:mask_2_graphics_183,x:160.1,y:237.4}).wait(1).to({graphics:mask_2_graphics_184,x:162.1,y:237.4}).wait(1).to({graphics:mask_2_graphics_185,x:164.1,y:237.4}).wait(1).to({graphics:mask_2_graphics_186,x:166,y:237.4}).wait(1).to({graphics:mask_2_graphics_187,x:168,y:237.4}).wait(1).to({graphics:mask_2_graphics_188,x:169.9,y:237.4}).wait(1).to({graphics:mask_2_graphics_189,x:171.8,y:237.4}).wait(1).to({graphics:mask_2_graphics_190,x:173.7,y:237.4}).wait(1).to({graphics:mask_2_graphics_191,x:175.6,y:237.4}).wait(1).to({graphics:mask_2_graphics_192,x:177.4,y:237.4}).wait(1).to({graphics:mask_2_graphics_193,x:179.3,y:237.4}).wait(1).to({graphics:mask_2_graphics_194,x:181.1,y:237.4}).wait(1).to({graphics:mask_2_graphics_195,x:182.9,y:237.3}).wait(1).to({graphics:mask_2_graphics_196,x:184.7,y:237.3}).wait(1).to({graphics:mask_2_graphics_197,x:186.5,y:237.3}).wait(1).to({graphics:mask_2_graphics_198,x:188.2,y:237.3}).wait(1).to({graphics:mask_2_graphics_199,x:189.9,y:237.2}).wait(1).to({graphics:mask_2_graphics_200,x:191.6,y:237.2}).wait(1).to({graphics:mask_2_graphics_201,x:193.3,y:237.2}).wait(1).to({graphics:mask_2_graphics_202,x:194.9,y:237.1}).wait(1).to({graphics:mask_2_graphics_203,x:196.5,y:237.1}).wait(1).to({graphics:mask_2_graphics_204,x:198.1,y:237.1}).wait(1).to({graphics:mask_2_graphics_205,x:199.8,y:237.1}).wait(1).to({graphics:mask_2_graphics_206,x:201.5,y:237}).wait(1).to({graphics:mask_2_graphics_207,x:203.1,y:237}).wait(1).to({graphics:mask_2_graphics_208,x:204.7,y:237}).wait(1).to({graphics:mask_2_graphics_209,x:206.3,y:237}).wait(1).to({graphics:mask_2_graphics_210,x:207.8,y:237}).wait(1).to({graphics:mask_2_graphics_211,x:209.3,y:237}).wait(1).to({graphics:mask_2_graphics_212,x:210.7,y:237}).wait(1).to({graphics:mask_2_graphics_213,x:212.1,y:237}).wait(1).to({graphics:mask_2_graphics_214,x:213.5,y:237.1}).wait(1).to({graphics:mask_2_graphics_215,x:214.8,y:237.1}).wait(1).to({graphics:mask_2_graphics_216,x:216.1,y:237.1}).wait(1).to({graphics:mask_2_graphics_217,x:217.3,y:237.1}).wait(1).to({graphics:mask_2_graphics_218,x:218.5,y:237.1}).wait(1).to({graphics:mask_2_graphics_219,x:219.6,y:237.2}).wait(1).to({graphics:mask_2_graphics_220,x:220.7,y:237.2}).wait(1).to({graphics:mask_2_graphics_221,x:221.7,y:237.2}).wait(1).to({graphics:mask_2_graphics_222,x:222.7,y:237.2}).wait(1).to({graphics:mask_2_graphics_223,x:223.7,y:237.2}).wait(1).to({graphics:mask_2_graphics_224,x:224.6,y:237.2}).wait(1).to({graphics:mask_2_graphics_225,x:225.4,y:237.2}).wait(1).to({graphics:mask_2_graphics_226,x:226.2,y:237.2}).wait(1).to({graphics:mask_2_graphics_227,x:226.9,y:237.2}).wait(1).to({graphics:mask_2_graphics_228,x:227.6,y:237.1}).wait(1).to({graphics:mask_2_graphics_229,x:228.3,y:237.1}).wait(1).to({graphics:mask_2_graphics_230,x:228.9,y:237.1}).wait(1).to({graphics:mask_2_graphics_231,x:229.4,y:237.1}).wait(1).to({graphics:mask_2_graphics_232,x:229.9,y:237.1}).wait(1).to({graphics:mask_2_graphics_233,x:230.3,y:237}).wait(1).to({graphics:mask_2_graphics_234,x:230.7,y:237}).wait(1).to({graphics:mask_2_graphics_235,x:231,y:237}).wait(1).to({graphics:mask_2_graphics_236,x:231.3,y:236.9}).wait(1).to({graphics:mask_2_graphics_237,x:231.5,y:236.9}).wait(1).to({graphics:mask_2_graphics_238,x:231.7,y:236.9}).wait(1).to({graphics:mask_2_graphics_239,x:231.8,y:236.9}).wait(1).to({graphics:mask_2_graphics_240,x:231.8,y:236.9}).wait(1).to({graphics:mask_2_graphics_241,x:231.8,y:236.9}).wait(1).to({graphics:mask_2_graphics_242,x:231.8,y:236.8}).wait(1).to({graphics:mask_2_graphics_243,x:231.8,y:236.8}).wait(1).to({graphics:mask_2_graphics_244,x:231.8,y:236.8}).wait(1).to({graphics:mask_2_graphics_245,x:231.8,y:236.9}).wait(1).to({graphics:mask_2_graphics_246,x:231.8,y:236.9}).wait(1).to({graphics:mask_2_graphics_247,x:231.9,y:236.9}).wait(1).to({graphics:mask_2_graphics_248,x:231.9,y:236.9}).wait(1).to({graphics:mask_2_graphics_249,x:231.9,y:237}).wait(1).to({graphics:mask_2_graphics_250,x:231.9,y:237}).wait(1).to({graphics:mask_2_graphics_251,x:231.9,y:237}).wait(1).to({graphics:mask_2_graphics_252,x:231.9,y:237}).wait(1).to({graphics:mask_2_graphics_253,x:231.9,y:237.1}).wait(1).to({graphics:mask_2_graphics_254,x:232,y:237.1}).wait(1).to({graphics:mask_2_graphics_255,x:232,y:237.1}).wait(1).to({graphics:mask_2_graphics_256,x:232,y:237.1}).wait(1).to({graphics:mask_2_graphics_257,x:232,y:237.1}).wait(1).to({graphics:mask_2_graphics_258,x:232,y:237.1}).wait(1).to({graphics:mask_2_graphics_259,x:232,y:237.1}).wait(1).to({graphics:mask_2_graphics_260,x:232,y:237.1}).wait(1).to({graphics:mask_2_graphics_261,x:232,y:237.1}).wait(1).to({graphics:mask_2_graphics_262,x:231.9,y:237.1}).wait(1).to({graphics:mask_2_graphics_263,x:231.9,y:237.1}).wait(1).to({graphics:mask_2_graphics_264,x:231.9,y:237.1}).wait(1).to({graphics:mask_2_graphics_265,x:231.9,y:237.1}).wait(1).to({graphics:mask_2_graphics_266,x:231.9,y:237.1}).wait(1).to({graphics:mask_2_graphics_267,x:231.9,y:237.1}).wait(1).to({graphics:mask_2_graphics_268,x:231.8,y:237.1}).wait(1).to({graphics:mask_2_graphics_269,x:231.8,y:237.1}).wait(1).to({graphics:mask_2_graphics_270,x:231.8,y:237.1}).wait(1).to({graphics:mask_2_graphics_271,x:231.8,y:237}).wait(1).to({graphics:mask_2_graphics_272,x:231.8,y:237}).wait(1).to({graphics:mask_2_graphics_273,x:231.7,y:237}).wait(1).to({graphics:mask_2_graphics_274,x:231.7,y:237}).wait(1).to({graphics:mask_2_graphics_275,x:231.7,y:237}).wait(1).to({graphics:mask_2_graphics_276,x:231.7,y:237}).wait(1).to({graphics:mask_2_graphics_277,x:231.6,y:236.9}).wait(1).to({graphics:mask_2_graphics_278,x:231.6,y:236.9}).wait(1).to({graphics:mask_2_graphics_279,x:231.6,y:236.9}).wait(1).to({graphics:mask_2_graphics_280,x:231.6,y:236.9}).wait(1).to({graphics:mask_2_graphics_281,x:231.5,y:236.9}).wait(1).to({graphics:mask_2_graphics_282,x:231.5,y:236.9}).wait(1).to({graphics:mask_2_graphics_283,x:231.5,y:236.9}).wait(1).to({graphics:mask_2_graphics_284,x:231.5,y:236.9}).wait(1).to({graphics:mask_2_graphics_285,x:231.5,y:236.9}).wait(1).to({graphics:mask_2_graphics_286,x:231.5,y:236.9}).wait(1).to({graphics:mask_2_graphics_287,x:231.5,y:237}).wait(1).to({graphics:mask_2_graphics_288,x:231.5,y:237}).wait(1).to({graphics:mask_2_graphics_289,x:231.6,y:237}).wait(1).to({graphics:mask_2_graphics_290,x:231.6,y:237}).wait(1).to({graphics:mask_2_graphics_291,x:231.6,y:237.1}).wait(264));

	// Layer 4
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(20,1,1).p("ASinXQAIBcgDBfQgEB+g2CtQg2Cug3B9QgZA6gkAyQhCB3hUBrQhTBrhiBlQhiBlh6BMQh6BLiBA8QiAA7iYAiQh7AXipgEQiHgLh9hBQh+hBhmhlQhlhkhHh8QhDh3gdiGQgdiFAHiGQAHiTAkiPQAhiHA5iDQA5iEBMh/QBLh/BUhtQBUhuBuhfQBthgCGhJQCGhJCCgzQAigOAigK");
	this.shape_4.setTransform(274.7,279.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(20,1,1).p("AKNzZQA3AVA2AdQB/BFBfBqQBfBqArCIQAqCIAQB4QAPB5gEB+QgEB+g2CtQg2Cug3B9QgZA6gkAyQhCB4hUBqQhTBrhiBlQhiBlh6BMQh6BMiBA7QiAA7iYAiQh7AXipgEQiHgLh9hBQh+hBhmhlQhlhkhHh8QhDh3gdiGQgdiFAHiGQAHiTAkiPQAhiHA5iDQA5iEBMh/QBLh/BUhtQBUhtBuhgQBthgCGhJQCGhJCCgzQBVgiBbgR");
	this.shape_5.setTransform(274.7,277.8);

	var maskedShapeInstanceList = [this.shape_4,this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4}]},159).to({state:[{t:this.shape_5}]},22).wait(374));

	// Layer 3 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_9 = new cjs.Graphics().p("AG31hQMJAAIkIlQImIlAAMIQAAMJomIlQokIlsJAAg");
	var mask_3_graphics_10 = new cjs.Graphics().p("AGg1gQMJgKIrIeQIsIfAKMIQAJMIofIrQodItsJAJg");
	var mask_3_graphics_11 = new cjs.Graphics().p("AGJ1fQMJgTIxIWQIzIYATMIQATMIoYIyQoWIzsJATg");
	var mask_3_graphics_12 = new cjs.Graphics().p("AFy1eQMIgcI4IPQI6IRAcMHQAdMJoRI4QoQI5sIAdg");
	var mask_3_graphics_13 = new cjs.Graphics().p("AFb1cQMIgmI+IIQJAIKAmMHQAmMIoKI+QoIJAsIAmg");
	var mask_3_graphics_14 = new cjs.Graphics().p("AFE1aQMHgvJFIBQJGIDAwMGQAvMHoCJFQoCJGsHAvg");
	var mask_3_graphics_15 = new cjs.Graphics().p("AEt1XQMHg5JKH6QJNH7A5MGQA5MGn7JLQn6JMsHA6g");
	var mask_3_graphics_16 = new cjs.Graphics().p("AEW1UQMGhDJRHzQJSH0BDMFQBDMFn0JSQnzJSsGBDg");
	var mask_3_graphics_17 = new cjs.Graphics().p("AD/1QQMFhNJXHsQJZHsBMMEQBMMFntJXQnrJYsFBNg");
	var mask_3_graphics_18 = new cjs.Graphics().p("ADo1NQMEhVJdHkQJfHlBVMDQBWMDnmJdQnjJfsEBVg");
	var mask_3_graphics_19 = new cjs.Graphics().p("ADS1IQMChfJjHcQJkHeBfMBQBgMDneJjQndJksCBfg");
	var mask_3_graphics_20 = new cjs.Graphics().p("AC71DQMBhpJoHVQJrHWBoMAQBpMBnXJpQnUJqsBBpg");
	var mask_3_graphics_21 = new cjs.Graphics().p("ACk0+QMAhyJuHNQJwHOByL/QByMAnPJuQnNJwsAByg");
	var mask_3_graphics_22 = new cjs.Graphics().p("ACN05QL+h7J0HFQJ2HHB7L9QB8L+nHJ0QnGJ2r+B7g");
	var mask_3_graphics_23 = new cjs.Graphics().p("AB30zQL8iFJ5G+QJ7G/CFL8QCFL8m/J6Qm+J6r8CFg");
	var mask_3_graphics_24 = new cjs.Graphics().p("ABg0sQL7iOJ+G1QKBG3COL6QCOL7m3J/Qm2KAr7COg");
	var mask_3_graphics_25 = new cjs.Graphics().p("ABJ0lQL5iYKEGuQKGGvCXL4QCYL5mwKEQmtKFr5CYg");
	var mask_3_graphics_26 = new cjs.Graphics().p("AAz0eQL3ihKJGmQKLGnCgL2QChL3mnKJQmmKLr3Chg");
	var mask_3_graphics_27 = new cjs.Graphics().p("AAc0WQL1irKOGeQKQGfCqL0QCrL1mgKOQmdKQr1Cqg");
	var mask_3_graphics_28 = new cjs.Graphics().p("AAG0OQLzi0KTGWQKVGXCzLxQC0LzmYKTQmVKVrzCzg");
	var mask_3_graphics_29 = new cjs.Graphics().p("AgP0GQLvi9KYGOQKaGPC8LvQC9LwmPKYQmNKarxC8g");
	var mask_3_graphics_30 = new cjs.Graphics().p("Ag0z4QLrjMKgGBQKiGBDMLrQDMLsmCKhQmAKhrsDMg");
	var mask_3_graphics_31 = new cjs.Graphics().p("AhYzoQLnjbKnFyQKpF0DbLnQDbLol0KoQlyKproDbg");
	var mask_3_graphics_32 = new cjs.Graphics().p("Ah8zYQLijqKvFlQKwFmDqLkQDqLilmKvQllKxrjDpg");
	var mask_3_graphics_33 = new cjs.Graphics().p("AigzGQLdj5K2FXQK4FYD4LfQD5LdlYK3QlXK3reD5g");
	var mask_3_graphics_34 = new cjs.Graphics().p("AjEyzQLZkIK8FJQK/FKEHLZQEHLZlKK9QlIK+raEHg");
	var mask_3_graphics_35 = new cjs.Graphics().p("AjnygQLTkWLDE7QLFE8EWLUQEWLTk8LDQk7LFrUEWg");
	var mask_3_graphics_36 = new cjs.Graphics().p("AkKyLQLNkkLJEsQLMEtEkLPQElLNkuLKQksLLrPEkg");
	var mask_3_graphics_37 = new cjs.Graphics().p("Aktx1QLHkzLPEeQLSEfEzLIQEyLIkfLPQkeLRrIEzg");
	var mask_3_graphics_38 = new cjs.Graphics().p("AlPxeQLBlBLUEPQLXERFBLCQFCLBkRLVQkPLWrCFBg");
	var mask_3_graphics_39 = new cjs.Graphics().p("AlxxGQK6lPLaEAQLcECFQK7QFPK7kCLbQkBLbq7FPg");
	var mask_3_graphics_40 = new cjs.Graphics().p("AmTwtQKzldLgDyQLhDzFdK0QFdK0jzLfQjyLhq0Fdg");
	var mask_3_graphics_41 = new cjs.Graphics().p("Am0wTQKslrLkDjQLmDkFrKtQFrKtjkLkQjjLlqtFsg");
	var mask_3_graphics_42 = new cjs.Graphics().p("AnVv4QKll5LoDUQLqDVF5KmQF5KljWLpQjTLqqmF5g");
	var mask_3_graphics_43 = new cjs.Graphics().p("An2vcQKdmHLtDGQLuDGGHKeQGGKdjGLtQjFLuqeGGg");
	var mask_3_graphics_44 = new cjs.Graphics().p("AoWu/QKVmULwC2QLzC3GUKWQGUKVi4LxQi1LyqXGUg");
	var mask_3_graphics_45 = new cjs.Graphics().p("Ao2uhQKNmhL0CnQL2CnGhKOQGhKNioL1QimL1qOGhg");
	var mask_3_graphics_46 = new cjs.Graphics().p("ApVuCQKEmuL3CXQL6CZGuKFQGuKEiZL4QiXL5qFGug");
	var mask_3_graphics_47 = new cjs.Graphics().p("Ap0tiQJ8m8L6CJQL8CJG7J9QG7J7iKL7QiHL7p9G7g");
	var mask_3_graphics_48 = new cjs.Graphics().p("AqStCQJznHL8B5QL+B5HIJ0QHIJyh6L+Qh4L+p0HHg");
	var mask_3_graphics_49 = new cjs.Graphics().p("AqxsgQJrnUL+BpQMABqHVJrQHUJphrMAQhpMApqHUg");
	var mask_3_graphics_50 = new cjs.Graphics().p("ArRr6QJgniMABZQMDBZHiJgQHiJehaMCQhYMDpgHig");
	var mask_3_graphics_51 = new cjs.Graphics().p("ArxrSQJVnwMBBIQMFBHHwJVQHvJUhIMEQhHMEpVHwg");
	var mask_3_graphics_52 = new cjs.Graphics().p("AsRqqQJKn9MDA3QMHA2H8JKQH9JJg4MFQg1MGpKH8g");
	var mask_3_graphics_53 = new cjs.Graphics().p("AswqBQI/oJMEAlQMHAlIKI/QIJI9gmMHQgkMGo/IKg");
	var mask_3_graphics_54 = new cjs.Graphics().p("AtOpWQIyoXMFAVQMJAUIWIzQIWIxgVMHQgTMHozIWg");
	var mask_3_graphics_55 = new cjs.Graphics().p("AtsorQInojMFADQMIADIjInQIiImgEMHQgBMIonIig");
	var mask_3_graphics_56 = new cjs.Graphics().p("AuJn/QIaouMFgOQMJgPIuIbQIvIaANMGQAPMIoaIug");
	var mask_3_graphics_57 = new cjs.Graphics().p("AumnRQIOo7MFgfQMHggI7IOQI7IOAeMGQAgMHoOI6g");
	var mask_3_graphics_58 = new cjs.Graphics().p("AvCmjQIBpGMEgxQMHgwJGIBQJGIBAwMFQAxMGoBJGg");
	var mask_3_graphics_59 = new cjs.Graphics().p("Avel0QH1pRMChCQMGhCJRH0QJSH1BAMDQBDMFn0JRg");
	var mask_3_graphics_60 = new cjs.Graphics().p("Av4lEQHnpcMBhTQMEhTJcHnQJcHnBSMCQBUMDnnJcg");
	var mask_3_graphics_61 = new cjs.Graphics().p("AwSkTQHZpnL/hkQMChkJnHaQJnHZBjMAQBlMBnZJng");
	var mask_3_graphics_62 = new cjs.Graphics().p("AwsjhQHMpxL9h1QL/h1JyHLQJxHMB0L+QB2L+nLJyg");
	var mask_3_graphics_63 = new cjs.Graphics().p("AxEiuQG9p8L6iGQL9iGJ8G+QJ7G9CFL8QCIL7m+J8g");
	var mask_3_graphics_64 = new cjs.Graphics().p("Axch7QGvqFL3iXQL6iXKFGvQKFGwCWL4QCZL4mwKGg");
	var mask_3_graphics_65 = new cjs.Graphics().p("AxzhGQGhqPLzioQL2ioKPGhQKPGhCnL1QCpL1mhKOg");
	var mask_3_graphics_66 = new cjs.Graphics().p("AyKgRQGTqYLwi5QLyi5KYGTQKXGSC4LxQC6LxmSKYg");
	var mask_3_graphics_67 = new cjs.Graphics().p("AyfAjQGEqfLsjKQLtjJKhGDQKgGEDJLsQDKLtmDKhg");
	var mask_3_graphics_68 = new cjs.Graphics().p("Ay0BaQF1qoLnjaQLpjbKpF1QKpF1DZLnQDbLpl0Kpg");
	var mask_3_graphics_69 = new cjs.Graphics().p("AzHCRQFlqxLjjqQLjjrKxFmQKyFlDpLjQDsLjlmKyg");
	var mask_3_graphics_70 = new cjs.Graphics().p("AzaDIQFWq4Ldj6QLej7K5FWQK5FWD6LdQD8LelWK5g");
	var mask_3_graphics_71 = new cjs.Graphics().p("AzsEBQFGrALYkLQLYkLLBFGQLAFHEKLYQEMLYlGLAg");
	var mask_3_graphics_72 = new cjs.Graphics().p("Az+E6QE3rHLSkbQLSkbLIE2QLHE3EaLSQEdLSk3LHg");
	var mask_3_graphics_73 = new cjs.Graphics().p("A0OFzQEnrNLLkrQLMksLOEnQLPEnEqLLQEsLMknLOg");
	var mask_3_graphics_74 = new cjs.Graphics().p("A0dGtQEXrULEk6QLFk8LVEXQLUEXE7LEQE8LFkXLVg");
	var mask_3_graphics_75 = new cjs.Graphics().p("A0sHoQEHraK9lLQK+lLLbEHQLbEHFJK9QFMK+kHLbg");
	var mask_3_graphics_76 = new cjs.Graphics().p("A05IjQD2rgK2laQK2lbLhD3QLgD2FZK2QFcK2j3Lhg");
	var mask_3_graphics_77 = new cjs.Graphics().p("A1GJeQDmrlKulpQKulqLmDmQLmDmFpKuQFqKujmLmg");
	var mask_3_graphics_78 = new cjs.Graphics().p("A1SKaQDWrqKll4QKnl6LqDWQLrDVF4KmQF6KmjWLrg");
	var mask_3_graphics_79 = new cjs.Graphics().p("A1dLWQDFruKdmIQKemILwDFQLvDFGHKdQGJKejFLvg");
	var mask_3_graphics_80 = new cjs.Graphics().p("A1nMTQC0r0KVmVQKVmXLzC0QL0C0GWKVQGXKUi0L0g");
	var mask_3_graphics_81 = new cjs.Graphics().p("A1wNQQCkr4KLmkQKMmlL3CjQL4CjGkKMQGmKLijL4g");
	var mask_3_graphics_82 = new cjs.Graphics().p("A14ONQCTr7KBmyQKDm0L7CSQL7CSGyKDQG1KCiTL6g");
	var mask_3_graphics_83 = new cjs.Graphics().p("A1/PKQCBr+J4nAQJ6nCL9CBQL+CBHBJ5QHDJ4iCL+g");
	var mask_3_graphics_84 = new cjs.Graphics().p("A2FQIQBwsBJunOQJvnQMABwQMBBwHPJvQHQJuhwMAg");
	var mask_3_graphics_85 = new cjs.Graphics().p("A2KRFQBfsDJjncQJlneMCBgQMDBfHdJkQHeJjhfMDg");
	var mask_3_graphics_86 = new cjs.Graphics().p("A2OR6QBQsEJbnoQJcnpMDBQQMFBRHoJbQHqJahRMFg");
	var mask_3_graphics_87 = new cjs.Graphics().p("A2RSvQBCsGJQnyQJTn1MFBCQMGBCH0JRQH1JRhCMGg");
	var mask_3_graphics_88 = new cjs.Graphics().p("A2UTlQAzsIJIn9QJJoBMGA0QMHAzH/JIQIAJHgzMHg");
	var mask_3_graphics_89 = new cjs.Graphics().p("A2WUaQAlsII9oKQI/oKMIAkQMIAlIJI+QIMI9glMJg");
	var mask_3_graphics_90 = new cjs.Graphics().p("A2XVPQAWsIIzoVQI1oVMIAWQMJAWIUI0QIXIzgWMJg");
	var mask_3_graphics_91 = new cjs.Graphics().p("A2XWFQAHsJIpofQIrogMIAHQMJAHIfIqQIhIpgIMJg");
	var mask_3_graphics_92 = new cjs.Graphics().p("AuAB1QIgoqMIgIQMJgHIqIfQIrIfAIMJMg6lAAlQgIsJIfoqg");
	var mask_3_graphics_93 = new cjs.Graphics().p("AuYB9QIVo0MIgXQMJgWI0IVQI1IUAWMIMg6jABsQgWsIIUo0g");
	var mask_3_graphics_94 = new cjs.Graphics().p("AuwCFQILo+MHglQMIglI+IKQJAIJAlMIMg6hACzQglsIIJo+g");
	var mask_3_graphics_95 = new cjs.Graphics().p("AvGCOQIApIMGg0QMHg0JIIAQJJH9A0MIMg6dAD6Qg0sHH/pIg");
	var mask_3_graphics_96 = new cjs.Graphics().p("AvcCXQH1pRMFhDQMGhCJRH0QJTHyBCMHMg6XAFBQhCsGHzpSg");
	var mask_3_graphics_97 = new cjs.Graphics().p("AvxChQHppbMEhRQMFhRJbHpQJcHnBRMEMg6RAGIQhRsEHopbg");
	var mask_3_graphics_98 = new cjs.Graphics().p("AwFCrQHepkMChgQMDhgJkHeQJlHbBgMDMg6IAHPQhgsDHcpkg");
	var mask_3_graphics_99 = new cjs.Graphics().p("AwYC2QHSptMAhvQMBhuJtHSQJuHPBvMBMg5/AIWQhvsBHRptg");
	var mask_3_graphics_100 = new cjs.Graphics().p("AwqDBQHGp2L+h9QL+h9J2HGQJ3HEB9L/Mg50AJbQh9r+HFp2g");
	var mask_3_graphics_101 = new cjs.Graphics().p("Aw8DNQG6p/L8iLQL8iMJ+G6QJ/G4CML8Mg5oAKiQiMr8G5p+g");
	var mask_3_graphics_102 = new cjs.Graphics().p("AxMDZQGuqHL4iaQL6iaKGGuQKIGrCaL6Mg5bALnQiar5GtqGg");
	var mask_3_graphics_103 = new cjs.Graphics().p("AxcDlQGiqPL1ioQL3ipKOGiQKQGfCoL2Mg5MAMuQior3GgqOg");
	var mask_3_graphics_104 = new cjs.Graphics().p("AxrDyQGVqXLyi3QL0i2KWGVQKXGSC3LzMg47ANzQi3rzGTqWg");
	var mask_3_graphics_105 = new cjs.Graphics().p("Ax4D/QGIqeLvjFQLvjFKeGIQKfGHDFLvMg4qAO3QjGrvGIqeg");
	var mask_3_graphics_106 = new cjs.Graphics().p("AyFENQF7qlLsjUQLqjTKmF8QKmF6DTLqMg4XAP8QjUrrF7qlg");
	var mask_3_graphics_107 = new cjs.Graphics().p("AyREbQFuqsLojiQLmjiKsFvQKuFtDhLnMg4DARBQjiroFuqsg");
	var mask_3_graphics_108 = new cjs.Graphics().p("AycEqQFhq0LjjvQLijwKzFiQK0FgDwLiMg3uASFQjwrkFhqyg");
	var mask_3_graphics_109 = new cjs.Graphics().p("AymE5QFUq6Lej+QLej+K5FVQK7FTD9LdMg3XATIQj+reFUq5g");
	var mask_3_graphics_110 = new cjs.Graphics().p("AywFIQFHrALakMQLYkLLAFHQLBFGELLYMg2/AULQkMrZFGrAg");
	var mask_3_graphics_111 = new cjs.Graphics().p("Ay4FYQE5rHLVkZQLTkZLGE6QLHE4EZLTMg2mAVOQkarVE5rFg");
	var mask_3_graphics_112 = new cjs.Graphics().p("Ay/FoQEsrMLOknQLOknLMEsQLNErEnLOMg2MAWPQknrPErrLg");
	var mask_3_graphics_113 = new cjs.Graphics().p("AzGF5QEerSLJk1QLJk0LREeQLSEdE1LIMg1xAXSQk0rJEdrRg");
	var mask_3_graphics_114 = new cjs.Graphics().p("AzLGKQEQrYLDlCQLClCLXERQLYEPFCLCMg1UAYTQlCrDEQrWg");
	var mask_3_graphics_115 = new cjs.Graphics().p("AzQGbQEDrcK9lQQK7lPLcEDQLdEBFPK8Mg01AZTQlQq9ECrbg");
	var mask_3_graphics_116 = new cjs.Graphics().p("AzTGtQD0rhK3ldQK1ldLhD2QLhDzFdK1Mg0XAaTQlcq2D0rgg");
	var mask_3_graphics_117 = new cjs.Graphics().p("AzWG/QDmrmKwlqQKvlpLlDnQLmDlFpKvMgz1AbSQlqqwDmrkg");
	var mask_3_graphics_118 = new cjs.Graphics().p("AzYHRQDZrqKol2QKol3LpDZQLqDXF3KoMgzUAcQQl3qoDYrpg");
	var mask_3_graphics_119 = new cjs.Graphics().p("AzZHkQDLruKhmDQKgmELuDLQLuDJGDKgMgyxAdPQmDqiDJrsg");
	var mask_3_graphics_120 = new cjs.Graphics().p("AzYH3QC8rxKZmRQKZmQLxC9QLyC6GQKaMgyMAeLQmRqaC8rwg");
	var mask_3_graphics_121 = new cjs.Graphics().p("AzXIKQCtr0KTmdQKRmdL0CuQL1CsGdKTMgxnAfHQmdqSCtr0g");
	var mask_3_graphics_122 = new cjs.Graphics().p("AzVIeQCfr4KKmpQKJmqL4CgQL4CeGqKLMgxCAgDQmpqKCfr3g");
	var mask_3_graphics_123 = new cjs.Graphics().p("AzSIyQCRr7KCm1QKBm2L6CSQL7CPG2KCMgwaAg/Qm1qCCQr6g");
	var mask_3_graphics_124 = new cjs.Graphics().p("AzOJHQCCr+J6nCQJ4nBL9CDQL+CBHCJ5MgvxAh6QnCp6CCr8g");
	var mask_3_graphics_125 = new cjs.Graphics().p("AzJJbQBzsAJxnNQJwnOMAB1QMAByHNJxMgvHAizQnOpxB0r/g");
	var mask_3_graphics_126 = new cjs.Graphics().p("AzDJwQBksCJpnZQJnnZMBBlQMCBkHaJoMgudAjsQnZpoBlsBg");
	var mask_3_graphics_127 = new cjs.Graphics().p("Ay9KGQBXsEJfnlQJenlMDBXQMEBVHlJfMgtxAkkQnlpfBWsCg");
	var mask_3_graphics_128 = new cjs.Graphics().p("Ay1KbQBIsFJVnwQJVnxMFBJQMFBGHxJWMgtEAlbQnwpWBHsEg");
	var mask_3_graphics_129 = new cjs.Graphics().p("AysKxQA5sGJMn8QJLn8MGA6QMGA4H8JMMgsVAmRQn8pMA5sFg");
	var mask_3_graphics_130 = new cjs.Graphics().p("AyjLHQAqsHJDoHQJBoHMHAsQMIApIGJCMgrmAnHQoHpDAqsGg");
	var mask_3_graphics_131 = new cjs.Graphics().p("AyYLdQAbsHI5oSQI4oSMHAdQMIAaISI5Mgq3An7QoSo5AcsHg");
	var mask_3_graphics_132 = new cjs.Graphics().p("AyNL0QANsIIuodQIuocMIAOQMIAMIcIuMgqFAovQodovANsHg");
	var mask_3_graphics_133 = new cjs.Graphics().p("AyBMLQgCsJIkomQIkonMIgBQMIgDInIkMgpUAphQonokgCsHg");
	var mask_3_graphics_134 = new cjs.Graphics().p("AxzMiQgRsJIZowQIaoxMHgQQMIgSIxIZMgogAqUQoyoagQsHg");
	var mask_3_graphics_135 = new cjs.Graphics().p("AxlM5QggsIIPo7QIPo7MGgeQMIghI7IPMgntArEQo7oPgfsHg");
	var mask_3_graphics_136 = new cjs.Graphics().p("AxWNRQgusIIDpEQIEpFMGgtQMHgwJFIEMgm4Ar0QpFoEgusGg");
	var mask_3_graphics_137 = new cjs.Graphics().p("AxGNpQg9sHH4pOQH5pPMFg8QMGg+JPH5MgmDAsiQpOn4g9sFg");
	var mask_3_graphics_138 = new cjs.Graphics().p("Aw1OBQhMsGHtpXQHupZMDhKQMFhNJYHuMglMAtQQpYnuhLsDg");
	var mask_3_graphics_139 = new cjs.Graphics().p("AwkOZQhasEHiphQHiphMChZQMDhcJhHiMgkUAt9QpinihasCg");
	var mask_3_graphics_140 = new cjs.Graphics().p("AwROxQhpsCHWpqQHWpqMBhoQMBhqJqHWMgjcAupQpqnWhpsBg");
	var mask_3_graphics_141 = new cjs.Graphics().p("Av+PKQh3sAHKpzQHKpzL/h2QL/h5JzHKMgijAvTQpznKh4r+g");
	var mask_3_graphics_142 = new cjs.Graphics().p("AvpPjQiGr+G+p7QG+p8L8iFQL9iHJ8G+MghpAv9Qp8m/iGr7g");
	var mask_3_graphics_143 = new cjs.Graphics().p("AvUP7QiVr7GyqDQGzqEL5iUQL6iVKEGyMgguAwlQqFmziUr5g");
	var mask_3_graphics_144 = new cjs.Graphics().p("Au+QUQijr4GmqLQGmqNL2ihQL3ikKMGlMgfzAxMQqMmmijr2g");
	var mask_3_graphics_145 = new cjs.Graphics().p("AunQuQiyr1GaqUQGZqULziwQL0izKUGaMge3AxyQqUmaixryg");
	var mask_3_graphics_146 = new cjs.Graphics().p("AuPRHQjAryGNqbQGMqcLwi+QLwjBKcGNMgd6AyXQqcmNi/rvg");
	var mask_3_graphics_147 = new cjs.Graphics().p("At3RgQjOrtGAqjQGAqjLsjNQLsjPKkGAMgc9Ay7QqjmAjOrsg");
	var mask_3_graphics_148 = new cjs.Graphics().p("AtdR6QjdrqFzqpQF0qrLnjbQLpjdKqFzMgb/AzdQqqlzjbrng");
	var mask_3_graphics_149 = new cjs.Graphics().p("AtDSTQjrrlFmqwQFnqyLjjpQLkjrKyFmMgbBAz/Qqxlmjprkg");
	var mask_3_graphics_150 = new cjs.Graphics().p("AsoStQj5rhFZq3QFZq4Lfj3QLgj5K4FZMgaBA0fQq4lZj3rfg");
	var mask_3_graphics_151 = new cjs.Graphics().p("AsNTHQkGrcFMq+QFMq+LakFQLakHK/FMMgZBA09Qq+lLkGrag");
	var mask_3_graphics_152 = new cjs.Graphics().p("ArwThQkUrXE+rEQE+rELWkTQLVkVLFE+MgYBA1cQrEk/kTrUg");
	var mask_3_graphics_153 = new cjs.Graphics().p("ArTT7QkirSExrJQExrLLQkhQLQkiLKExMgW/A14QrKkxkhrPg");
	var mask_3_graphics_154 = new cjs.Graphics().p("Aq1UVQkvrMEjrPQEjrRLKkuQLLkwLQEjMgV+A2UQrPkkkvrJg");
	var mask_3_graphics_155 = new cjs.Graphics().p("AqWUvQk9rGEWrVQEVrWLEk7QLFk+LVEWMgU7A2tQrVkVk8rEg");
	var mask_3_graphics_156 = new cjs.Graphics().p("Ap2VJQlLrAEIraQEIrbK+lJQK+lLLbEIMgT5A3GQrakHlJq+g");
	var mask_3_graphics_157 = new cjs.Graphics().p("ApWVjQlYq5D6rfQD6rgK3lWQK4lYLgD5MgS1A3eQrfj6lXq3g");
	var mask_3_graphics_158 = new cjs.Graphics().p("Ao1V9QllqzDsrjQDsrkKxlkQKxllLkDsMgRyA30Qrjjslkqxg");
	var mask_3_graphics_159 = new cjs.Graphics().p("AoTWXQlyqrDdrpQDeroKqlwQKrlzLoDeMgQuA4JQrnjelxqqg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_3_graphics_9,x:231.4,y:237.2}).wait(1).to({graphics:mask_3_graphics_10,x:231.4,y:237.2}).wait(1).to({graphics:mask_3_graphics_11,x:231.4,y:237.2}).wait(1).to({graphics:mask_3_graphics_12,x:231.4,y:237.2}).wait(1).to({graphics:mask_3_graphics_13,x:231.4,y:237.1}).wait(1).to({graphics:mask_3_graphics_14,x:231.4,y:237}).wait(1).to({graphics:mask_3_graphics_15,x:231.4,y:237}).wait(1).to({graphics:mask_3_graphics_16,x:231.4,y:236.9}).wait(1).to({graphics:mask_3_graphics_17,x:231.4,y:236.8}).wait(1).to({graphics:mask_3_graphics_18,x:231.4,y:236.6}).wait(1).to({graphics:mask_3_graphics_19,x:231.4,y:236.5}).wait(1).to({graphics:mask_3_graphics_20,x:231.4,y:236.4}).wait(1).to({graphics:mask_3_graphics_21,x:231.4,y:236.2}).wait(1).to({graphics:mask_3_graphics_22,x:231.4,y:236}).wait(1).to({graphics:mask_3_graphics_23,x:231.5,y:235.8}).wait(1).to({graphics:mask_3_graphics_24,x:231.5,y:235.6}).wait(1).to({graphics:mask_3_graphics_25,x:231.5,y:235.4}).wait(1).to({graphics:mask_3_graphics_26,x:231.5,y:235.2}).wait(1).to({graphics:mask_3_graphics_27,x:231.5,y:234.9}).wait(1).to({graphics:mask_3_graphics_28,x:231.5,y:234.6}).wait(1).to({graphics:mask_3_graphics_29,x:231.5,y:234.3}).wait(1).to({graphics:mask_3_graphics_30,x:231.5,y:233.9}).wait(1).to({graphics:mask_3_graphics_31,x:231.5,y:233.4}).wait(1).to({graphics:mask_3_graphics_32,x:231.6,y:232.8}).wait(1).to({graphics:mask_3_graphics_33,x:231.6,y:232.3}).wait(1).to({graphics:mask_3_graphics_34,x:231.6,y:231.6}).wait(1).to({graphics:mask_3_graphics_35,x:231.6,y:231}).wait(1).to({graphics:mask_3_graphics_36,x:231.6,y:230.3}).wait(1).to({graphics:mask_3_graphics_37,x:231.6,y:229.6}).wait(1).to({graphics:mask_3_graphics_38,x:231.6,y:228.8}).wait(1).to({graphics:mask_3_graphics_39,x:231.6,y:228}).wait(1).to({graphics:mask_3_graphics_40,x:231.6,y:227.2}).wait(1).to({graphics:mask_3_graphics_41,x:231.6,y:226.4}).wait(1).to({graphics:mask_3_graphics_42,x:231.6,y:225.5}).wait(1).to({graphics:mask_3_graphics_43,x:231.6,y:224.5}).wait(1).to({graphics:mask_3_graphics_44,x:231.5,y:223.6}).wait(1).to({graphics:mask_3_graphics_45,x:231.5,y:222.6}).wait(1).to({graphics:mask_3_graphics_46,x:231.5,y:221.6}).wait(1).to({graphics:mask_3_graphics_47,x:231.5,y:220.5}).wait(1).to({graphics:mask_3_graphics_48,x:231.5,y:219.4}).wait(1).to({graphics:mask_3_graphics_49,x:231.4,y:218.3}).wait(1).to({graphics:mask_3_graphics_50,x:231.4,y:217.1}).wait(1).to({graphics:mask_3_graphics_51,x:231.4,y:215.8}).wait(1).to({graphics:mask_3_graphics_52,x:231.4,y:214.4}).wait(1).to({graphics:mask_3_graphics_53,x:231.4,y:213.1}).wait(1).to({graphics:mask_3_graphics_54,x:231.3,y:211.6}).wait(1).to({graphics:mask_3_graphics_55,x:231.3,y:210.2}).wait(1).to({graphics:mask_3_graphics_56,x:231.4,y:208.7}).wait(1).to({graphics:mask_3_graphics_57,x:231.4,y:207.2}).wait(1).to({graphics:mask_3_graphics_58,x:231.4,y:205.7}).wait(1).to({graphics:mask_3_graphics_59,x:231.4,y:204.1}).wait(1).to({graphics:mask_3_graphics_60,x:231.5,y:202.5}).wait(1).to({graphics:mask_3_graphics_61,x:231.5,y:200.9}).wait(1).to({graphics:mask_3_graphics_62,x:231.5,y:199.3}).wait(1).to({graphics:mask_3_graphics_63,x:231.6,y:197.6}).wait(1).to({graphics:mask_3_graphics_64,x:231.6,y:195.9}).wait(1).to({graphics:mask_3_graphics_65,x:231.6,y:194.1}).wait(1).to({graphics:mask_3_graphics_66,x:231.7,y:192.4}).wait(1).to({graphics:mask_3_graphics_67,x:231.7,y:190.6}).wait(1).to({graphics:mask_3_graphics_68,x:231.7,y:188.8}).wait(1).to({graphics:mask_3_graphics_69,x:231.8,y:187}).wait(1).to({graphics:mask_3_graphics_70,x:231.8,y:185.1}).wait(1).to({graphics:mask_3_graphics_71,x:231.8,y:183.2}).wait(1).to({graphics:mask_3_graphics_72,x:231.8,y:181.3}).wait(1).to({graphics:mask_3_graphics_73,x:231.8,y:179.4}).wait(1).to({graphics:mask_3_graphics_74,x:231.8,y:177.5}).wait(1).to({graphics:mask_3_graphics_75,x:231.9,y:175.6}).wait(1).to({graphics:mask_3_graphics_76,x:231.9,y:173.6}).wait(1).to({graphics:mask_3_graphics_77,x:231.9,y:171.6}).wait(1).to({graphics:mask_3_graphics_78,x:231.9,y:169.6}).wait(1).to({graphics:mask_3_graphics_79,x:231.8,y:167.6}).wait(1).to({graphics:mask_3_graphics_80,x:231.8,y:165.6}).wait(1).to({graphics:mask_3_graphics_81,x:231.8,y:163.6}).wait(1).to({graphics:mask_3_graphics_82,x:231.8,y:161.5}).wait(1).to({graphics:mask_3_graphics_83,x:231.8,y:159.5}).wait(1).to({graphics:mask_3_graphics_84,x:231.8,y:157.4}).wait(1).to({graphics:mask_3_graphics_85,x:231.8,y:155.3}).wait(1).to({graphics:mask_3_graphics_86,x:231.8,y:153.6}).wait(1).to({graphics:mask_3_graphics_87,x:231.8,y:151.8}).wait(1).to({graphics:mask_3_graphics_88,x:231.8,y:150}).wait(1).to({graphics:mask_3_graphics_89,x:231.8,y:148.3}).wait(1).to({graphics:mask_3_graphics_90,x:231.8,y:146.5}).wait(1).to({graphics:mask_3_graphics_91,x:231.8,y:144.7}).wait(1).to({graphics:mask_3_graphics_92,x:231.8,y:144.8}).wait(1).to({graphics:mask_3_graphics_93,x:231.7,y:146.5}).wait(1).to({graphics:mask_3_graphics_94,x:231.7,y:148.3}).wait(1).to({graphics:mask_3_graphics_95,x:231.6,y:150.1}).wait(1).to({graphics:mask_3_graphics_96,x:231.4,y:151.9}).wait(1).to({graphics:mask_3_graphics_97,x:231.3,y:153.6}).wait(1).to({graphics:mask_3_graphics_98,x:231.1,y:155.4}).wait(1).to({graphics:mask_3_graphics_99,x:230.9,y:157.2}).wait(1).to({graphics:mask_3_graphics_100,x:230.6,y:158.9}).wait(1).to({graphics:mask_3_graphics_101,x:230.3,y:160.7}).wait(1).to({graphics:mask_3_graphics_102,x:230,y:162.4}).wait(1).to({graphics:mask_3_graphics_103,x:229.6,y:164.2}).wait(1).to({graphics:mask_3_graphics_104,x:229.2,y:165.9}).wait(1).to({graphics:mask_3_graphics_105,x:228.8,y:167.6}).wait(1).to({graphics:mask_3_graphics_106,x:228.3,y:169.3}).wait(1).to({graphics:mask_3_graphics_107,x:227.8,y:171.1}).wait(1).to({graphics:mask_3_graphics_108,x:227.3,y:172.8}).wait(1).to({graphics:mask_3_graphics_109,x:226.7,y:174.4}).wait(1).to({graphics:mask_3_graphics_110,x:226.1,y:176.1}).wait(1).to({graphics:mask_3_graphics_111,x:225.5,y:177.8}).wait(1).to({graphics:mask_3_graphics_112,x:224.9,y:179.4}).wait(1).to({graphics:mask_3_graphics_113,x:224.2,y:181.1}).wait(1).to({graphics:mask_3_graphics_114,x:223.5,y:182.7}).wait(1).to({graphics:mask_3_graphics_115,x:222.7,y:184.3}).wait(1).to({graphics:mask_3_graphics_116,x:222,y:185.9}).wait(1).to({graphics:mask_3_graphics_117,x:221.1,y:187.5}).wait(1).to({graphics:mask_3_graphics_118,x:220.3,y:189}).wait(1).to({graphics:mask_3_graphics_119,x:219.4,y:190.6}).wait(1).to({graphics:mask_3_graphics_120,x:218.5,y:192.1}).wait(1).to({graphics:mask_3_graphics_121,x:217.6,y:193.6}).wait(1).to({graphics:mask_3_graphics_122,x:216.7,y:195.1}).wait(1).to({graphics:mask_3_graphics_123,x:215.7,y:196.6}).wait(1).to({graphics:mask_3_graphics_124,x:214.7,y:198.1}).wait(1).to({graphics:mask_3_graphics_125,x:213.6,y:199.5}).wait(1).to({graphics:mask_3_graphics_126,x:212.6,y:200.9}).wait(1).to({graphics:mask_3_graphics_127,x:211.5,y:202.3}).wait(1).to({graphics:mask_3_graphics_128,x:210.4,y:203.7}).wait(1).to({graphics:mask_3_graphics_129,x:209.2,y:205}).wait(1).to({graphics:mask_3_graphics_130,x:208,y:206.4}).wait(1).to({graphics:mask_3_graphics_131,x:206.9,y:207.7}).wait(1).to({graphics:mask_3_graphics_132,x:205.6,y:209}).wait(1).to({graphics:mask_3_graphics_133,x:204.4,y:210.2}).wait(1).to({graphics:mask_3_graphics_134,x:203.1,y:211.5}).wait(1).to({graphics:mask_3_graphics_135,x:201.8,y:212.7}).wait(1).to({graphics:mask_3_graphics_136,x:200.5,y:213.9}).wait(1).to({graphics:mask_3_graphics_137,x:199.2,y:215}).wait(1).to({graphics:mask_3_graphics_138,x:197.8,y:216.2}).wait(1).to({graphics:mask_3_graphics_139,x:196.4,y:217.3}).wait(1).to({graphics:mask_3_graphics_140,x:195,y:218.4}).wait(1).to({graphics:mask_3_graphics_141,x:193.6,y:219.4}).wait(1).to({graphics:mask_3_graphics_142,x:192.2,y:220.5}).wait(1).to({graphics:mask_3_graphics_143,x:190.7,y:221.5}).wait(1).to({graphics:mask_3_graphics_144,x:189.2,y:222.4}).wait(1).to({graphics:mask_3_graphics_145,x:187.7,y:223.4}).wait(1).to({graphics:mask_3_graphics_146,x:186.2,y:224.3}).wait(1).to({graphics:mask_3_graphics_147,x:184.7,y:225.2}).wait(1).to({graphics:mask_3_graphics_148,x:183.1,y:226}).wait(1).to({graphics:mask_3_graphics_149,x:181.6,y:226.9}).wait(1).to({graphics:mask_3_graphics_150,x:180,y:227.7}).wait(1).to({graphics:mask_3_graphics_151,x:178.4,y:228.4}).wait(1).to({graphics:mask_3_graphics_152,x:176.8,y:229.2}).wait(1).to({graphics:mask_3_graphics_153,x:175.1,y:229.9}).wait(1).to({graphics:mask_3_graphics_154,x:173.5,y:230.6}).wait(1).to({graphics:mask_3_graphics_155,x:171.8,y:231.2}).wait(1).to({graphics:mask_3_graphics_156,x:170.2,y:231.8}).wait(1).to({graphics:mask_3_graphics_157,x:168.5,y:232.4}).wait(1).to({graphics:mask_3_graphics_158,x:166.8,y:233}).wait(1).to({graphics:mask_3_graphics_159,x:165.1,y:233.5}).wait(396));

	// Layer 2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(20,1,1).p("AF6T/QgCAAgCABQh7AWipgDQiGgLh9hBQh+hBhmhlQhlhkhHh8QhDh3gdiGQgdiFAHiGQAHiTAkiPQAiiHA4iDQA5iEBMh/QBMh/BUhtQBThuBuhfQBshgCGhJQCGhJCCgzQCAgzCLgL");
	this.shape_6.setTransform(225.3,277.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(20,1,1).p("AJLTAQhkAnhxAZQh6AXiqgEQiGgLh9hBQh+hBhmhlQhlhkhHh8QhDh3gdiGQgdiFAHiGQAHiTAkiPQAiiHA4iDQA5iEBMh/QBMh/BUhtQBThuBuhfQBshgCGhJQCHhJCBgzQCBgzCKgL");
	this.shape_7.setTransform(225.3,277.2);

	var maskedShapeInstanceList = [this.shape_6,this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6}]},9).to({state:[{t:this.shape_7}]},13).wait(533));

	// Letter
	this.instance_3 = new lib.Q("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(275,290.4);
	this.instance_3.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(555));

	// Background
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_8.setTransform(275,275,3.373,2.543);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_9.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).wait(555));

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