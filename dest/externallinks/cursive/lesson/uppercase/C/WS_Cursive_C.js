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


(lib.C = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AtkcpQizguiWhUQidhZh5iDQh7iGhPiyQhYjLAAj0QAAlYCJlmQB8lNDllDQDXkvEfkFQESj/EtixQC6huDAhBQDThFC+AAQC9AACdAqQCwA1B/BoQCNC0AACGQAAB/hsAAQiWAAijjyQiWhOjbAAQiZgBixA/IkuCQQkGCcj0DhQj/DojEELQjREghyEiQh8E8AAEqQAADHBPCgQBHCVCNBsQCCBpCtA3QCqA0DAAAQC+AADDg3QCwgxC2hjQEnicFQkvIFJkmIFAktQBSg0A0ABQBsgBAACAQAAAdlKGcIgUAaQiwDXjUCzQjeDAjuCNQj/CTkFBOQkVBVkSAAQjDAAiugqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-176.5,-187.5,353.2,375);


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
(lib.WS_Cursive_C = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_474 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(474).call(this.frame_474).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(400.1,139,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[400,139.1,387.1,119,365.2,110.3,343.4,101.5,321.5,104.8,299.7,108.2,278.4,117,257.2,125.8,237.7,139.7,218.1,153.7,201.3,170.2,184.3,186.7,170.8,203.7,157.3,220.6,146.5,239.6,135.7,258.7,127.4,280.2,119.1,301.7,115.8,328.5,112.6,355.2,118.3,374.6,124.1,394,140.2,414.1,156.4,434.2,180.6,441.1,204.8,448.1,228.3,447.4,251.8,446.8,273,439.4,294.3,432.1,314.6,421.4,335,410.6,352,397.7,369,384.7,385,370.4,401,356.2,415.7,339.4,425.5,328.2,434,316]}},390).wait(11).to({x:433.9,y:316.1},0).to({guide:{path:[433.8,316.1,455.7,377.9,516.4,326.7,577.2,275.4,602.1,289.1,627,302.8,633.9,332]}},64).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(433.8,316.9,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},390).wait(76));

	// Layer 3
	this.instance_1 = new lib.ar4("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(313.8,185,1,1,150.1,0,0,-0.1,-0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).wait(466));

	// circle mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_339 = new cjs.Graphics().p("AO2fVIHZnqIF+FxInYHrg");
	var mask_graphics_340 = new cjs.Graphics().p("AmzBFIHon6IF/FxInoH6g");
	var mask_graphics_341 = new cjs.Graphics().p("Am7BOIH4oMIF/FxIn4IMg");
	var mask_graphics_342 = new cjs.Graphics().p("AnDBWIIJocIF+FxIoJIcg");
	var mask_graphics_343 = new cjs.Graphics().p("AnMBfIIaouIF/FxIoaIug");
	var mask_graphics_344 = new cjs.Graphics().p("AnUBnIIqo+IF/FxIoqI+g");
	var mask_graphics_345 = new cjs.Graphics().p("AncBwII6pQIF/FxIo6JQg");
	var mask_graphics_346 = new cjs.Graphics().p("AnkB5IJLphIF/FxIpMJhg");
	var mask_graphics_347 = new cjs.Graphics().p("AntCBIJcpyIF/FxIpcJyg");
	var mask_graphics_348 = new cjs.Graphics().p("An1CKIJsqEIF/FxIpsKEg");
	var mask_graphics_349 = new cjs.Graphics().p("An9CSIJ9qUIF+FxIp9KUg");
	var mask_graphics_350 = new cjs.Graphics().p("AoGCbIKOqmIF/FxIqOKmg");
	var mask_graphics_351 = new cjs.Graphics().p("AoOCjIKeq2IF/FxIqeK2g");
	var mask_graphics_352 = new cjs.Graphics().p("AoWCsIKurIIF/FxIquLIg");
	var mask_graphics_353 = new cjs.Graphics().p("AoeC1IK/rZIF+FxIq/LZg");
	var mask_graphics_354 = new cjs.Graphics().p("AonC9ILQrqIF/FxIrQLqg");
	var mask_graphics_355 = new cjs.Graphics().p("AovDGILgr7IF/FxIrgL7g");
	var mask_graphics_356 = new cjs.Graphics().p("Ao3DOILwsMIF/FxIrwMMg");
	var mask_graphics_357 = new cjs.Graphics().p("Ao/DXIMAseIGAFxIsCMeg");
	var mask_graphics_358 = new cjs.Graphics().p("ApIDfIMSsuIF/FxIsSMug");
	var mask_graphics_359 = new cjs.Graphics().p("ApQDoIMitAIF/FxIsiNAg");
	var mask_graphics_360 = new cjs.Graphics().p("ApYDxIMytSIF/FxIsyNSg");
	var mask_graphics_361 = new cjs.Graphics().p("ApgD5INDtiIF+FxItDNig");
	var mask_graphics_362 = new cjs.Graphics().p("AppECINUt0IF/FxItUN0g");
	var mask_graphics_363 = new cjs.Graphics().p("ApxEKINkuEIF/FxItkOEg");
	var mask_graphics_364 = new cjs.Graphics().p("Ap5ETIN0uWIGAFxIt2OWg");
	var mask_graphics_365 = new cjs.Graphics().p("AqCEbIOGumIF/FxIuGOmg");
	var mask_graphics_366 = new cjs.Graphics().p("AqKEkIOWu4IF/FxIuWO4g");
	var mask_graphics_367 = new cjs.Graphics().p("AqSEsIOmvIIF/FxIumPIg");
	var mask_graphics_368 = new cjs.Graphics().p("AqaE1IO2vaIF/FxIu3Pag");
	var mask_graphics_369 = new cjs.Graphics().p("AqjE+IPIvsIF+FxIvGPsg");
	var mask_graphics_370 = new cjs.Graphics().p("AqrFGIPYv8IF/FxIvYP8g");
	var mask_graphics_371 = new cjs.Graphics().p("AqzFPIPowOIF/FxIvoQOg");
	var mask_graphics_372 = new cjs.Graphics().p("Aq7FXIP4weIF/FxIv4Qeg");
	var mask_graphics_373 = new cjs.Graphics().p("ArEFgIQJwwIGAFxIwJQwg");
	var mask_graphics_374 = new cjs.Graphics().p("ArMFoIQaxBIF/FxIwaRBg");
	var mask_graphics_375 = new cjs.Graphics().p("ArUFxIQqxSIF/FxIwqRSg");
	var mask_graphics_376 = new cjs.Graphics().p("ArcF6IQ6xkIF/FxIw6Rkg");
	var mask_graphics_377 = new cjs.Graphics().p("ArlGCIRMx0IF/FxIxMR0g");
	var mask_graphics_378 = new cjs.Graphics().p("ArtGLIRcyGIF/FxIxcSGg");
	var mask_graphics_379 = new cjs.Graphics().p("Ar1GTIRsyWIF/FxIxsSWg");
	var mask_graphics_380 = new cjs.Graphics().p("Ar+GcIR+yoIF/FxIx9Sog");
	var mask_graphics_381 = new cjs.Graphics().p("AsGGkISOy4IF/FxIyOS4g");
	var mask_graphics_382 = new cjs.Graphics().p("AsOGtISezKIF/FxIyeTKg");
	var mask_graphics_383 = new cjs.Graphics().p("AsWG2ISuzcIF/FxIyuTcg");
	var mask_graphics_384 = new cjs.Graphics().p("AsfG+IS/zsIGAFxIy/Tsg");
	var mask_graphics_385 = new cjs.Graphics().p("AsnHHITQz+IF/FxIzQT+g");
	var mask_graphics_386 = new cjs.Graphics().p("AsvHPITg0PIF/FxIzgUPg");
	var mask_graphics_387 = new cjs.Graphics().p("As3HYITw0gIF/FxIzwUgg");
	var mask_graphics_388 = new cjs.Graphics().p("AtAHgIUC0xIF+FxI0AUxg");
	var mask_graphics_389 = new cjs.Graphics().p("AtIHpIUS1CIF/FxI0SVCg");
	var mask_graphics_390 = new cjs.Graphics().p("AtQHyIUi1UIF/FxI0iVUg");
	var mask_graphics_391 = new cjs.Graphics().p("AtYH6IUy1kIF/FxI0yVkg");
	var mask_graphics_392 = new cjs.Graphics().p("AthIDIVE12IF/FxI1EV2g");
	var mask_graphics_393 = new cjs.Graphics().p("AtpILIVU2GIF/FxI1UWGg");
	var mask_graphics_394 = new cjs.Graphics().p("AtxIUIVk2YIF/FxI1kWYg");
	var mask_graphics_395 = new cjs.Graphics().p("At6IcIV22pIF+FxI10Wpg");
	var mask_graphics_396 = new cjs.Graphics().p("AuCIlIWG26IF/FxI2GW6g");
	var mask_graphics_397 = new cjs.Graphics().p("AuKItIWW3LIF/FxI2WXLg");
	var mask_graphics_398 = new cjs.Graphics().p("AuSI2IWm3cIF/FxI2mXcg");
	var mask_graphics_399 = new cjs.Graphics().p("AHGfWIW53vIF/FxI25Xvg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(339).to({graphics:mask_graphics_339,x:180.5,y:237.5}).wait(1).to({graphics:mask_graphics_340,x:319.2,y:431.1}).wait(1).to({graphics:mask_graphics_341,x:320,y:430.2}).wait(1).to({graphics:mask_graphics_342,x:320.8,y:429.4}).wait(1).to({graphics:mask_graphics_343,x:321.6,y:428.5}).wait(1).to({graphics:mask_graphics_344,x:322.5,y:427.7}).wait(1).to({graphics:mask_graphics_345,x:323.3,y:426.8}).wait(1).to({graphics:mask_graphics_346,x:324.1,y:426}).wait(1).to({graphics:mask_graphics_347,x:325,y:425.1}).wait(1).to({graphics:mask_graphics_348,x:325.8,y:424.3}).wait(1).to({graphics:mask_graphics_349,x:326.6,y:423.4}).wait(1).to({graphics:mask_graphics_350,x:327.4,y:422.5}).wait(1).to({graphics:mask_graphics_351,x:328.3,y:421.7}).wait(1).to({graphics:mask_graphics_352,x:329.1,y:420.8}).wait(1).to({graphics:mask_graphics_353,x:329.9,y:420}).wait(1).to({graphics:mask_graphics_354,x:330.7,y:419.1}).wait(1).to({graphics:mask_graphics_355,x:331.6,y:418.3}).wait(1).to({graphics:mask_graphics_356,x:332.4,y:417.4}).wait(1).to({graphics:mask_graphics_357,x:333.2,y:416.5}).wait(1).to({graphics:mask_graphics_358,x:334,y:415.7}).wait(1).to({graphics:mask_graphics_359,x:334.9,y:414.8}).wait(1).to({graphics:mask_graphics_360,x:335.7,y:414}).wait(1).to({graphics:mask_graphics_361,x:336.5,y:413.1}).wait(1).to({graphics:mask_graphics_362,x:337.4,y:412.3}).wait(1).to({graphics:mask_graphics_363,x:338.2,y:411.4}).wait(1).to({graphics:mask_graphics_364,x:339,y:410.5}).wait(1).to({graphics:mask_graphics_365,x:339.8,y:409.7}).wait(1).to({graphics:mask_graphics_366,x:340.7,y:408.8}).wait(1).to({graphics:mask_graphics_367,x:341.5,y:408}).wait(1).to({graphics:mask_graphics_368,x:342.3,y:407.1}).wait(1).to({graphics:mask_graphics_369,x:343.2,y:406.3}).wait(1).to({graphics:mask_graphics_370,x:344,y:405.4}).wait(1).to({graphics:mask_graphics_371,x:344.8,y:404.6}).wait(1).to({graphics:mask_graphics_372,x:345.6,y:403.7}).wait(1).to({graphics:mask_graphics_373,x:346.5,y:402.9}).wait(1).to({graphics:mask_graphics_374,x:347.3,y:402}).wait(1).to({graphics:mask_graphics_375,x:348.1,y:401.1}).wait(1).to({graphics:mask_graphics_376,x:348.9,y:400.3}).wait(1).to({graphics:mask_graphics_377,x:349.8,y:399.4}).wait(1).to({graphics:mask_graphics_378,x:350.6,y:398.6}).wait(1).to({graphics:mask_graphics_379,x:351.4,y:397.7}).wait(1).to({graphics:mask_graphics_380,x:352.3,y:396.9}).wait(1).to({graphics:mask_graphics_381,x:353.1,y:396}).wait(1).to({graphics:mask_graphics_382,x:353.9,y:395.2}).wait(1).to({graphics:mask_graphics_383,x:354.7,y:394.3}).wait(1).to({graphics:mask_graphics_384,x:355.6,y:393.4}).wait(1).to({graphics:mask_graphics_385,x:356.4,y:392.6}).wait(1).to({graphics:mask_graphics_386,x:357.2,y:391.7}).wait(1).to({graphics:mask_graphics_387,x:358,y:390.9}).wait(1).to({graphics:mask_graphics_388,x:358.9,y:390}).wait(1).to({graphics:mask_graphics_389,x:359.7,y:389.2}).wait(1).to({graphics:mask_graphics_390,x:360.5,y:388.3}).wait(1).to({graphics:mask_graphics_391,x:361.3,y:387.4}).wait(1).to({graphics:mask_graphics_392,x:362.2,y:386.6}).wait(1).to({graphics:mask_graphics_393,x:363,y:385.7}).wait(1).to({graphics:mask_graphics_394,x:363.8,y:384.9}).wait(1).to({graphics:mask_graphics_395,x:364.7,y:384}).wait(1).to({graphics:mask_graphics_396,x:365.5,y:383.2}).wait(1).to({graphics:mask_graphics_397,x:366.3,y:382.3}).wait(1).to({graphics:mask_graphics_398,x:367.1,y:381.4}).wait(1).to({graphics:mask_graphics_399,x:230.2,y:237.5}).wait(76));

	// Layer 7
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(20,1,1).p("ATq1VQiCjKjahXQjbhXjaAhQjbAhjUBYQjUBZjDCLQjDCLiqClQiqCliHCqQiHCqhsC/QhsC/hTDWQhTDXghELQggELA6DCQA5DCCiDJQChDJDyBGQDyBGDsgHQDsgHDUhKQDThJDMhrQDMhrCniEQCoiECZiVQCZiWB7iMQB6iMBnho");
	this.shape_1.setTransform(274.3,275.7);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(339).to({_off:false},0).wait(136));

	// circle mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_279 = new cjs.Graphics().p("AlzfmQpdpdAAtXQAAtVJdpbQJapdNXAAMAAABAcQtXAApapbg");
	var mask_1_graphics_280 = new cjs.Graphics().p("EgFrAgBQpopSgPtXQgOtWJSplQJPpnNXgPMABIBAbIgqABQs8AApVpCg");
	var mask_1_graphics_281 = new cjs.Graphics().p("EgFjAgbQpypHgdtWQgetWJHpvQJFpyNWgeMACQBAaIhTABQsiAApQopg");
	var mask_1_graphics_282 = new cjs.Graphics().p("EgFbAg1Qp7o8gttWQgttUI9p6QI5p8NWgsMADYBAWQg+ADg9AAQsJAApLoRg");
	var mask_1_graphics_283 = new cjs.Graphics().p("EgFRAhOQqGoxg7tUQg8tUIxqEQIvqFNUg8MAEgBASQhSAGhQAAQrxAApEn6g");
	var mask_1_graphics_284 = new cjs.Graphics().p("EgFIAhnQqPomhKtTQhLtTImqNQIkqPNShKMAFoBAMQhmAJhjAAQrZAAo+njg");
	var mask_1_graphics_285 = new cjs.Graphics().p("EgE+Ah/QqZoahZtSQhZtRIaqXQIZqYNRhaMAGvBAGQh5ANh2AAQrCAAo3nNg");
	var mask_1_graphics_286 = new cjs.Graphics().p("EgE0AiXQqhoOhptRQhotPIPqgQINqiNPhoMAH3A/9QiNARiHAAQqsAAowm2g");
	var mask_1_graphics_287 = new cjs.Graphics().p("EgEpAivQqroDh3tOQh3tPIDqoQIBqrNOh3MAI+A/0QifAWiaAAQqWAAoomgg");
	var mask_1_graphics_288 = new cjs.Graphics().p("EgEdAjFQq0n2iGtMQiGtNH3qxQH1qzNLiGMAKGA/pQiyAcirAAQqBAAofmMg");
	var mask_1_graphics_289 = new cjs.Graphics().p("EgESAjcQq8nriVtKQiUtJHrq6QHpq8NIiVMALNA/dQjEAji9AAQpsAAoXl3g");
	var mask_1_graphics_290 = new cjs.Graphics().p("EgEGAjxQrFneijtHQijtHHfrCQHcrFNGijMAMTA/QQjVAqjOAAQpYAAoOlkg");
	var mask_1_graphics_291 = new cjs.Graphics().p("EgD5AkHQrNnSiytEQiytEHSrLQHQrNNDixMANaA/CQjnAxjeAAQpFAAoElQg");
	var mask_1_graphics_292 = new cjs.Graphics().p("EgDsAkcQrWnGjAtAQjAtBHFrTQHErVNAjAMAOgA+yQj5A6jvAAQoxAAn6k9g");
	var mask_1_graphics_293 = new cjs.Graphics().p("EgDfAkwQrdm5jPs9QjPs9G5rbQG3rcM8jPMAPmA+hQkJBCkAAAQoeAAnwkqg");
	var mask_1_graphics_294 = new cjs.Graphics().p("EgDRAlDQrlmrjds6Qjds5GsriQGqrkM4jeMAQsA+QQkaBLkQAAQoMAAnlkZg");
	var mask_1_graphics_295 = new cjs.Graphics().p("EgDDAlXQrsmfjss2Qjrs1GfrpQGdrsM0jsMARxA99QkqBVkgAAQn6AAnakHg");
	var mask_1_graphics_296 = new cjs.Graphics().p("EgC1AlpQrzmRj6syQj6sxGSrwQGQrzMxj6MAS2A9oQk7BgkwAAQnoAAnPj3g");
	var mask_1_graphics_297 = new cjs.Graphics().p("EgCmAl7Qr6mEkIstQkIstGFr3QGCr5MskJMAT7A9TQlKBrlBAAQnWAAnDjng");
	var mask_1_graphics_298 = new cjs.Graphics().p("EgCXAmNQsAl3kXsoQkWsoF4r+QF1sAMnkXMAU/A88QlZB2lRAAQnFAAm3jWg");
	var mask_1_graphics_299 = new cjs.Graphics().p("EgCHAmeQsHlpklskQkksjFqsEQFosHMikkMAWDA8jQloCDlhAAQm0AAmqjHg");
	var mask_1_graphics_300 = new cjs.Graphics().p("EgB3AmvQsNlckzseQkyseFcsLQFbsNMekyMAXFA8KQl2CQlyAAQmjAAmdi4g");
	var mask_1_graphics_301 = new cjs.Graphics().p("EgBnAm+QsTlOlAsYQlAsZFOsQQFNsTMZlAMAYIA7wQmFCcmCAAQmSAAmQiqg");
	var mask_1_graphics_302 = new cjs.Graphics().p("EgBWAnOQsZlBlOsSQlOsTFBsWQE/sZMTlOMAZKA7UQmSCrmTAAQmBAAmCicg");
	var mask_1_graphics_303 = new cjs.Graphics().p("EgBFAndQsekzlcsNQlcsME0scQEwseMNlcMAaNA64QmfC5mkAAQlxAAl0iPg");
	var mask_1_graphics_304 = new cjs.Graphics().p("EgA0AnrQsjkllpsGQlqsHEmshQEjsjMGlpMAbOA6ZQmsDIm1AAQlgAAlmiCg");
	var mask_1_graphics_305 = new cjs.Graphics().p("EgAiAn5QsokXl3sAQl3sAEXsmQEVsoMBl3MAcPA57Qm5DXnGAAQlRAAlWh2g");
	var mask_1_graphics_306 = new cjs.Graphics().p("EgAQAoGQstkJmEr5QmEr6EJsqQEHstL5mEMAdQA5aQnGDnnXAAQlAAAlHhqg");
	var mask_1_graphics_307 = new cjs.Graphics().p("EAACAoSQsxj6mRryQmSrzD7swQD5swLzmSMAePA45QnRD4npAAQkwAAk4hgg");
	var mask_1_graphics_308 = new cjs.Graphics().p("EAAVAoeQs1jrmfrsQmersDss0QDrs0LrmfMAfPA4XQndEIn6AAQkgAAkohVg");
	var mask_1_graphics_309 = new cjs.Graphics().p("EAAoAoqQs5jemsrkQmrrkDes5QDcs4LkmrMAgOA3zQnoEaoNAAQkPAAkYhLg");
	var mask_1_graphics_310 = new cjs.Graphics().p("EAA7Ao0Qs9jOm4rdQm4rdDQs8QDNs8Ldm4MAhLA3PQnzEroeAAQj/AAkIhCg");
	var mask_1_graphics_311 = new cjs.Graphics().p("EABPAo/QtAjBnFrVQnFrUDBtAQC/tALVnFMAiJA2qQn9E+oyAAQjuAAj3g5g");
	var mask_1_graphics_312 = new cjs.Graphics().p("EABjApIQtEiynRrMQnSrNCztDQCxtDLMnRMAjGA2CQoHFRpFAAQjdAAjmgxg");
	var mask_1_graphics_313 = new cjs.Graphics().p("EAB3ApRQtGijnerFQnerECktGQCitGLEneMAkCA1bQoRFkpYABQjMAAjVgqg");
	var mask_1_graphics_314 = new cjs.Graphics().p("EACMApaQtJiVnrq8Qnqq8CWtJQCTtIK8nrMAk9A0yQoaF5psAAQi7AAjDgig");
	var mask_1_graphics_315 = new cjs.Graphics().p("EAChAphQtMiFn2q0Qn3qzCHtMQCFtKKzn3MAl4A0IQojGNqAAAQiqAAixgcg");
	var mask_1_graphics_316 = new cjs.Graphics().p("EAC2ApoQtOh3oCqqQoDqrB4tNQB2tNKroDMAmxAzeQoqGiqWAAQiZAAiegXg");
	var mask_1_graphics_317 = new cjs.Graphics().p("EADMApvQtQhooPqiQoOqhBqtQQBmtPKioOMAnqAyyQoyG3qrAAQiHAAiLgRg");
	var mask_1_graphics_318 = new cjs.Graphics().p("EADhAp1QtRhaoaqYQoaqYBatRQBZtRKYoaMAojAyFQo6HNrBAAQh1AAh5gMg");
	var mask_1_graphics_319 = new cjs.Graphics().p("EAD3Ap6QtThKolqPQolqPBLtTQBJtRKPomMApbAxXQpBHkrYAAQhiAAhmgJg");
	var mask_1_graphics_320 = new cjs.Graphics().p("EAEOAp/QtVg8owqFQoxqFA9tUQA6tTKFoxMAqRAwoQpHH7rvAAQhQAAhRgFg");
	var mask_1_graphics_321 = new cjs.Graphics().p("EAEkAqDQtVgto8p7Qo8p7AutVQAstUJ7o8MArHAv4QpNITsIAAQg8AAg+gDg");
	var mask_1_graphics_322 = new cjs.Graphics().p("EAE7AqGQtWgepHpxQpHpxAftWQAdtUJxpHMAr8AvIQpSIqshAAIhSgBg");
	var mask_1_graphics_323 = new cjs.Graphics().p("EAFSAqIQtWgOpSpnQpSpnAQtWQAOtVJnpSMAswAuXQpXJDs7AAIgpgBg");
	var mask_1_graphics_324 = new cjs.Graphics().p("EgRKAguQpcpcABtWQgBtVJcpdMAtkAtkQpcJctVAAQtWAApdpcg");
	var mask_1_graphics_325 = new cjs.Graphics().p("EgQ8AhJQpnpSgOtWQgQtVJSpmMAuWAswQpSJntVAPIgpAAQs8AApXpDg");
	var mask_1_graphics_326 = new cjs.Graphics().p("EgQvAhjQpxpHgctVQgftVJHpxMAvHAr8QpHJxtUAeIhTACQshAApTorg");
	var mask_1_graphics_327 = new cjs.Graphics().p("EgQgAh9Qp7o8gstVQgutUI8p7MAv5ArHQo8J7tUAtQg+ADg9AAQsIAApNoSg");
	var mask_1_graphics_328 = new cjs.Graphics().p("EgQRAiWQqFowg7tUQg8tTIwqFMAwpAqRQoxKFtTA7QhSAGhQAAQrwAApHn7g");
	var mask_1_graphics_329 = new cjs.Graphics().p("EgQBAivQqPolhJtTQhMtSIlqOMAxXApaQolKPtSBKQhlAJhjAAQrZAApAnkg");
	var mask_1_graphics_330 = new cjs.Graphics().p("EgPxAjHQqYoZhYtSQhbtRIaqXMAyFAojQoaKYtQBZQh5ANh2AAQrBAAo6nOg");
	var mask_1_graphics_331 = new cjs.Graphics().p("EgPgAjfQqhoOhntQQhqtPIPqhMAyxAnrQoOKhtPBoQiMARiIAAQqrAAoym3g");
	var mask_1_graphics_332 = new cjs.Graphics().p("EgPOAj3QqroDh2tOQh4tNIDqqMAzdAmyQoCKqtNB3QifAWiZAAQqWAAoqmhg");
	var mask_1_graphics_333 = new cjs.Graphics().p("EgO8AkNQqzn2iFtMQiHtLH3qyMA0IAl3Qn3K0tKCFQiyAciqAAQqBAAoimNg");
	var mask_1_graphics_334 = new cjs.Graphics().p("EgOpAkkQq8nriTtJQiWtJHqq7MA0yAk9QnqK8tICUQjEAji8AAQpsAAoZl4g");
	var mask_1_graphics_335 = new cjs.Graphics().p("EgOWAk5QrEneiitGQiktGHerEMA1bAkCQneLEtGCjQjVAqjNAAQpYAAoRllg");
	var mask_1_graphics_336 = new cjs.Graphics().p("EgOBAlPQrNnSixtDQiytEHRrLMA2CAjFQnRLNtCCxQjnAxjeAAQpFABoGlRg");
	var mask_1_graphics_337 = new cjs.Graphics().p("EgNtAljQrVnFi/tAQjBtAHFrUMA2pAiJQnFLVs/DAQj4A5jvAAQoxAAn9k+g");
	var mask_1_graphics_338 = new cjs.Graphics().p("EgNXAl4Qrdm5jOs8QjPs9G4rbMA3PAhLQm5Lds7DOQkJBCkAAAQoeAAnykrg");
	var mask_1_graphics_339 = new cjs.Graphics().p("EgNCAmLQrkmrjcs6Qjes4GrrjMA30AgNQmsLks3DdQkaBLkQAAQoMABnokag");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(279).to({graphics:mask_1_graphics_279,x:108.6,y:262.5}).wait(1).to({graphics:mask_1_graphics_280,x:110.4,y:262.7}).wait(1).to({graphics:mask_1_graphics_281,x:112.2,y:262.8}).wait(1).to({graphics:mask_1_graphics_282,x:114,y:263}).wait(1).to({graphics:mask_1_graphics_283,x:115.8,y:263.2}).wait(1).to({graphics:mask_1_graphics_284,x:117.6,y:263.4}).wait(1).to({graphics:mask_1_graphics_285,x:119.4,y:263.6}).wait(1).to({graphics:mask_1_graphics_286,x:121.2,y:263.7}).wait(1).to({graphics:mask_1_graphics_287,x:123,y:263.9}).wait(1).to({graphics:mask_1_graphics_288,x:124.8,y:264.1}).wait(1).to({graphics:mask_1_graphics_289,x:126.6,y:264.3}).wait(1).to({graphics:mask_1_graphics_290,x:128.3,y:264.5}).wait(1).to({graphics:mask_1_graphics_291,x:130.1,y:264.7}).wait(1).to({graphics:mask_1_graphics_292,x:131.9,y:264.9}).wait(1).to({graphics:mask_1_graphics_293,x:133.6,y:265}).wait(1).to({graphics:mask_1_graphics_294,x:135.4,y:265.2}).wait(1).to({graphics:mask_1_graphics_295,x:137.1,y:265.4}).wait(1).to({graphics:mask_1_graphics_296,x:138.9,y:265.6}).wait(1).to({graphics:mask_1_graphics_297,x:140.6,y:265.8}).wait(1).to({graphics:mask_1_graphics_298,x:142.3,y:265.9}).wait(1).to({graphics:mask_1_graphics_299,x:144,y:266.1}).wait(1).to({graphics:mask_1_graphics_300,x:145.7,y:266.3}).wait(1).to({graphics:mask_1_graphics_301,x:147.4,y:266.4}).wait(1).to({graphics:mask_1_graphics_302,x:149,y:266.6}).wait(1).to({graphics:mask_1_graphics_303,x:150.7,y:266.8}).wait(1).to({graphics:mask_1_graphics_304,x:152.3,y:266.9}).wait(1).to({graphics:mask_1_graphics_305,x:154,y:267.1}).wait(1).to({graphics:mask_1_graphics_306,x:155.6,y:267.2}).wait(1).to({graphics:mask_1_graphics_307,x:157.2,y:267.4}).wait(1).to({graphics:mask_1_graphics_308,x:158.8,y:267.5}).wait(1).to({graphics:mask_1_graphics_309,x:160.4,y:267.7}).wait(1).to({graphics:mask_1_graphics_310,x:161.9,y:267.8}).wait(1).to({graphics:mask_1_graphics_311,x:163.5,y:268}).wait(1).to({graphics:mask_1_graphics_312,x:165,y:268.1}).wait(1).to({graphics:mask_1_graphics_313,x:166.5,y:268.3}).wait(1).to({graphics:mask_1_graphics_314,x:168,y:268.4}).wait(1).to({graphics:mask_1_graphics_315,x:169.5,y:268.5}).wait(1).to({graphics:mask_1_graphics_316,x:170.9,y:268.7}).wait(1).to({graphics:mask_1_graphics_317,x:172.3,y:268.8}).wait(1).to({graphics:mask_1_graphics_318,x:173.8,y:268.9}).wait(1).to({graphics:mask_1_graphics_319,x:175.2,y:269.1}).wait(1).to({graphics:mask_1_graphics_320,x:176.5,y:269.2}).wait(1).to({graphics:mask_1_graphics_321,x:177.9,y:269.4}).wait(1).to({graphics:mask_1_graphics_322,x:179.2,y:269.5}).wait(1).to({graphics:mask_1_graphics_323,x:180.5,y:269.7}).wait(1).to({graphics:mask_1_graphics_324,x:181.8,y:269.8}).wait(1).to({graphics:mask_1_graphics_325,x:183.1,y:270}).wait(1).to({graphics:mask_1_graphics_326,x:184.3,y:270.2}).wait(1).to({graphics:mask_1_graphics_327,x:185.6,y:270.3}).wait(1).to({graphics:mask_1_graphics_328,x:186.8,y:270.5}).wait(1).to({graphics:mask_1_graphics_329,x:187.9,y:270.7}).wait(1).to({graphics:mask_1_graphics_330,x:189.1,y:270.9}).wait(1).to({graphics:mask_1_graphics_331,x:190.2,y:271}).wait(1).to({graphics:mask_1_graphics_332,x:191.3,y:271.2}).wait(1).to({graphics:mask_1_graphics_333,x:192.4,y:271.4}).wait(1).to({graphics:mask_1_graphics_334,x:193.4,y:271.6}).wait(1).to({graphics:mask_1_graphics_335,x:194.5,y:271.8}).wait(1).to({graphics:mask_1_graphics_336,x:195.4,y:271.9}).wait(1).to({graphics:mask_1_graphics_337,x:196.4,y:272.1}).wait(1).to({graphics:mask_1_graphics_338,x:197.4,y:272.3}).wait(1).to({graphics:mask_1_graphics_339,x:198.3,y:272.4}).wait(136));

	// Layer 5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(20,1,1).p("ATq1VQiCjKjahXQjbhXjaAhQjbAhjUBYQjUBZjDCLQjDCLiqClQiqCliHCqQiHCqhsC/QhsC/hTDWQhTDXghELQggELA6DCQA5DCCiDJQChDJDyBGQDyBGDsgHQDsgHDUhKQDThJDMhrQDMhrCniEQCoiECZiVQCZiWB7iMQB6iMBnho");
	this.shape_2.setTransform(274.3,275.7);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(279).to({_off:false},0).wait(196));

	// circle mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_169 = new cjs.Graphics().p("A/dU7QABtXJbpaQJcpdNWAAQNXABJbJcQJcJaAANXg");
	var mask_2_graphics_170 = new cjs.Graphics().p("A2WhvQJUpmNWgMQNWgMJkJUQJlJSAMNWMhAbAA7QgMtXJSpig");
	var mask_2_graphics_171 = new cjs.Graphics().p("A2qhpQJLptNXgZQNVgYJsJLQJuJJAYNWMhAaAB2QgZtXJKprg");
	var mask_2_graphics_172 = new cjs.Graphics().p("A2+hiQJDp2NWgkQNVglJ0JCQJ2JAAkNWMhAYACwQgktWJApzg");
	var mask_2_graphics_173 = new cjs.Graphics().p("A3RhbQI6p+NVgxQNUgwJ9I5QJ+I3AxNVMhAWADrQgwtVI3p8g");
	var mask_2_graphics_174 = new cjs.Graphics().p("A3jhTQIwqGNVg9QNTg9KFIwQKGItA9NVMhASAEmQg9tVIvqDg");
	var mask_2_graphics_175 = new cjs.Graphics().p("A31hLQInqPNThJQNThJKNInQKOIkBJNUMhANAFhQhJtUIlqLg");
	var mask_2_graphics_176 = new cjs.Graphics().p("A4GhDQIdqWNShVQNShWKUIeQKWIbBVNSMhAHAGbQhVtSIcqTg");
	var mask_2_graphics_177 = new cjs.Graphics().p("A4Xg7QIUqeNRhhQNQhhKcIUQKdIRBiNRMhABAHWQhitRITqbg");
	var mask_2_graphics_178 = new cjs.Graphics().p("A4ogyQILqlNPhuQNPhtKkIKQKkIIBuNPMg/6AIRQhttQIIqig");
	var mask_2_graphics_179 = new cjs.Graphics().p("A43gpQIAqtNOh5QNNh6KrIBQKsH+B6NOMg/yAJKQh6tOIAqpg");
	var mask_2_graphics_180 = new cjs.Graphics().p("A5HggQH3q0NMiGQNLiFKzH3QKzH0CGNMMg/pAKFQiGtMH1qxg");
	var mask_2_graphics_181 = new cjs.Graphics().p("A5VgXQHsq7NLiRQNJiSK5HtQK7HrCRNKMg/fAK/QiStLHsq4g");
	var mask_2_graphics_182 = new cjs.Graphics().p("A5kgNQHjrCNIidQNHieLBHjQLBHhCeNHMg/VAL5QietIHhq/g");
	var mask_2_graphics_183 = new cjs.Graphics().p("A5xgDQHYrINGiqQNFiqLHHZQLIHXCqNFMg/KAMzQiqtGHYrGg");
	var mask_2_graphics_184 = new cjs.Graphics().p("A5+AHQHOrPNDi1QNDi2LNHPQLPHNC2NCMg++ANsQi1tDHNrNg");
	var mask_2_graphics_185 = new cjs.Graphics().p("A6LARQHErVNBjBQM/jCLVHFQLVHCDCNAMg+xAOmQjCtBHDrUg");
	var mask_2_graphics_186 = new cjs.Graphics().p("A6XAcQG6rbM+jOQM8jNLbG6QLcG4DNM9Mg+jAPfQjNs+G4rag");
	var mask_2_graphics_187 = new cjs.Graphics().p("A6iAnQGvrhM7jaQM5jZLhGwQLjGtDZM6Mg+VAQYQjZs6Gurhg");
	var mask_2_graphics_188 = new cjs.Graphics().p("A6tAzQGlroM3jlQM3jlLnGlQLoGjDlM2Mg+FARSQjls4Gjrmg");
	var mask_2_graphics_189 = new cjs.Graphics().p("A63A+QGartM0jxQMzjxLtGbQLuGYDxMzMg91ASKQjxs0GZrtg");
	var mask_2_graphics_190 = new cjs.Graphics().p("A7BBKQGQrzMwj9QMwj8LyGQQL0GND9MwMg9kATCQj9sxGOryg");
	var mask_2_graphics_191 = new cjs.Graphics().p("A7KBWQGFr5MskIQMskIL5GFQL5GDEIMsMg9SAT6QkIstGDr4g");
	var mask_2_graphics_192 = new cjs.Graphics().p("A7SBjQF5r/MpkTQMokUL+F6QL/F4EUMoMg9AAUyQkUspF5r9g");
	var mask_2_graphics_193 = new cjs.Graphics().p("A7aBwQFusEMlkfQMkkgMDFvQMFFtEfMkMg8sAVqQkgslFusCg");
	var mask_2_graphics_194 = new cjs.Graphics().p("A7hB8QFjsIMhkrQMgkrMIFkQMJFiErMgMg8YAWhQkrshFjsIg");
	var mask_2_graphics_195 = new cjs.Graphics().p("A7oCKQFYsOMck2QMck2MNFYQMPFXE2McMg8DAXYQk2sdFXsMg");
	var mask_2_graphics_196 = new cjs.Graphics().p("A7uCXQFNsTMYlBQMWlBMTFNQMTFMFBMXMg7tAYPQlBsYFMsSg");
	var mask_2_graphics_197 = new cjs.Graphics().p("A70ClQFCsYMTlMQMSlNMXFCQMYFBFNMSMg7XAZFQlNsTFBsWg");
	var mask_2_graphics_198 = new cjs.Graphics().p("A75CzQE2scMPlYQMNlYMcE3QMcE1FYMNMg7AAZ8QlXsPE1sag");
	var mask_2_graphics_199 = new cjs.Graphics().p("A79DBQEqsgMKljQMIljMgErQMhEqFjMIMg6oAaxQljsJErsfg");
	var mask_2_graphics_200 = new cjs.Graphics().p("A8BDPQEfskMFluQMDluMkEgQMlEeFuMDMg6PAbnQlusFEfsjg");
	var mask_2_graphics_201 = new cjs.Graphics().p("A8FDeQEUspL/l5QL+l5MoEVQMpESF5L/Mg51AcbQl5r/ETsng");
	var mask_2_graphics_202 = new cjs.Graphics().p("A8HDtQEIstL6mEQL5mEMrEJQMtEHGEL6Mg5bAdPQmEr5EIsrg");
	var mask_2_graphics_203 = new cjs.Graphics().p("A8JD8QD8swL0mPQL0mPMvD+QMwD7GPL0Mg4/AeDQmPrzD8svg");
	var mask_2_graphics_204 = new cjs.Graphics().p("A8LELQDxszLumaQLvmaMyDyQMzDwGaLuMg4jAe4QmarvDwsyg");
	var mask_2_graphics_205 = new cjs.Graphics().p("A8MEbQDms3LomlQLomkM2DmQM3DkGkLoMg4HAfrQmkroDks1g");
	var mask_2_graphics_206 = new cjs.Graphics().p("A8MEqQDas6LimvQLimuM5DaQM6DYGvLiMg3qAgeQmvriDZs5g");
	var mask_2_graphics_207 = new cjs.Graphics().p("A8ME6QDOs9Lcm5QLcm6M8DPQM9DMG5LcMg3LAhRQm6rcDNs8g");
	var mask_2_graphics_208 = new cjs.Graphics().p("A8LFKQDCtALWnDQLVnEM/DDQNADAHDLVMg2sAiEQnErWDBs/g");
	var mask_2_graphics_209 = new cjs.Graphics().p("A8JFbQC2tDLPnOQLPnONBC3QNDC0HOLPMg2OAi1QnOrPC2tBg");
	var mask_2_graphics_210 = new cjs.Graphics().p("A8HFrQCqtFLInYQLInYNECqQNFCpHZLIMg1tAjnQnZrJCqtEg");
	var mask_2_graphics_211 = new cjs.Graphics().p("A8FF8QCetHLCnjQLBniNGCfQNICcHiLCMg1MAkXQnirCCdtGg");
	var mask_2_graphics_212 = new cjs.Graphics().p("A8BGNQCRtKK7nsQK7ntNICTQNKCRHsK6Mg0qAlIQntq7CStIg");
	var mask_2_graphics_213 = new cjs.Graphics().p("A7+GeQCGtMK0n2QKzn2NLCHQNLCEH3K0Mg0JAl3Qn2q0CFtKg");
	var mask_2_graphics_214 = new cjs.Graphics().p("A75GvQB6tNKsoAQKsoANMB6QNOB5IAKsMgzlAmnQoBqsB6tNg");
	var mask_2_graphics_215 = new cjs.Graphics().p("A70HBQBttPKloKQKloKNOBvQNPBsIKKlMgzCAnWQoKqlButOg");
	var mask_2_graphics_216 = new cjs.Graphics().p("A7vHTQBitRKdoTQKeoUNPBjQNQBgIUKdMgydAoEQoUqdBhtPg");
	var mask_2_graphics_217 = new cjs.Graphics().p("A7oHlQBVtSKWodQKVodNRBWQNSBUIdKWMgx5AoyQodqWBWtQg");
	var mask_2_graphics_218 = new cjs.Graphics().p("A7iH3QBJtTKOonQKOomNSBKQNTBIImKOMgxSApfQonqOBJtRg");
	var mask_2_graphics_219 = new cjs.Graphics().p("A7aIJQA9tUKGowQKGowNSA/QNUA7IwKGMgwtAqMQovqGA9tSg");
	var mask_2_graphics_220 = new cjs.Graphics().p("A7TIbQAxtVJ+o4QJ+o5NUAyQNUAvI5J+MgwFAq5Qo5p+AwtUg");
	var mask_2_graphics_221 = new cjs.Graphics().p("A7KIuQAltWJ1pCQJ2pBNUAlQNWAkJBJ1MgveArlQpCp2AltUg");
	var mask_2_graphics_222 = new cjs.Graphics().p("A7BJAQAYtVJupLQJtpLNVAaQNWAXJKJtMgu2AsPQpKptAYtVg");
	var mask_2_graphics_223 = new cjs.Graphics().p("A63JTQAMtWJlpTQJlpUNVANQNWALJTJlMguNAs6QpUplANtVg");
	var mask_2_graphics_224 = new cjs.Graphics().p("A6tJmQAAtWJcpcQJdpdNVACQNWgBJcJcMgtkAtkQpcpdAAtVg");
	var mask_2_graphics_225 = new cjs.Graphics().p("A6iJ5QgNtWJUplQJUpkNVgLQNWgOJlJUMgs6AuNQplpUgMtVg");
	var mask_2_graphics_226 = new cjs.Graphics().p("A6XKNQgYtWJKptQJLpuNVgXQNWgZJtJKMgsPAu2QpupLgYtUg");
	var mask_2_graphics_227 = new cjs.Graphics().p("A6LKgQgltVJCp2QJCp1NUgkQNWgmJ1JCMgrkAveQp2pCgktUg");
	var mask_2_graphics_228 = new cjs.Graphics().p("A5/K0QgxtVI5p+QI5p+NUgvQNVgyJ9I5Mgq4AwFQp+o5gxtTg");
	var mask_2_graphics_229 = new cjs.Graphics().p("A5yLIQg9tUIwqGQIwqGNTg8QNTg+KGIwMgqMAwsQqGowg9tSg");
	var mask_2_graphics_230 = new cjs.Graphics().p("A5kLbQhJtTImqOQInqNNShIQNShKKOImMgpfAxTQqOonhJtSg");
	var mask_2_graphics_231 = new cjs.Graphics().p("A5WLvQhVtSIdqVQIdqWNRhUQNRhWKWIdMgoyAx4QqWodhVtRg");
	var mask_2_graphics_232 = new cjs.Graphics().p("A5HMDQhitQIUqdQITqeNQhgQNQhiKeITMgoFAydQqdoThhtQg");
	var mask_2_graphics_233 = new cjs.Graphics().p("A44MYQhutQIKqkQIKqlNOhsQNPhvKlIKMgnWAzBQqloKhttNg");
	var mask_2_graphics_234 = new cjs.Graphics().p("A4oMsQh6tOIAqsQIAqsNNh4QNNh7KsIAMgmnAzlQqsoAh5tMg");
	var mask_2_graphics_235 = new cjs.Graphics().p("A4YNAQiGtLH3q0QH2qzNLiFQNLiGK0H2Mgl4A0IQq0n2iFtLg");
	var mask_2_graphics_236 = new cjs.Graphics().p("A4HNVQiStLHtq5QHsq7NJiQQNJiTK7HsMglIA0rQq7ntiRtIg");
	var mask_2_graphics_237 = new cjs.Graphics().p("A32NqQietJHjrBQHirBNHicQNHifLCHiMgkYA1MQrBniietGg");
	var mask_2_graphics_238 = new cjs.Graphics().p("A3kN+QiqtGHZrHQHYrJNEioQNFirLIHZMgjmA1sQrInYiqtEg");
	var mask_2_graphics_239 = new cjs.Graphics().p("A3ROTQi2tEHOrOQHOrPNCi0QNCi3LPHOMgi1A2OQrPnPi1tBg");
	var mask_2_graphics_240 = new cjs.Graphics().p("A2+OoQjCtBHErVQHErVM/jAQM/jDLWHEMgiEA2sQrVnDjBs/g");
	var mask_2_graphics_241 = new cjs.Graphics().p("A2rO9QjNs+G5rbQG5rcM9jMQM8jPLcG6MghRA3LQrcm5jNs8g");
	var mask_2_graphics_242 = new cjs.Graphics().p("A2XPSQjZs7GvrhQGvriM5jYQM6jbLiGvMggfA3qQrimvjZs5g");
	var mask_2_graphics_243 = new cjs.Graphics().p("A2CPnQjls4GkrnQGkroM2jkQM3jmLoGkMgfrA4HQrpmkjks2g");
	var mask_2_graphics_244 = new cjs.Graphics().p("A1tP8Qjxs0GartQGZrvMzjvQMzjyLuGaMge4A4jQrumZjwszg");
	var mask_2_graphics_245 = new cjs.Graphics().p("A1YQSQj8sxGPrzQGPr0Mwj7QMuj+L0GPMgeEA4/Qr0mPj8sug");
	var mask_2_graphics_246 = new cjs.Graphics().p("A1CQnQkIstGEr5QGEr6MtkGQMrkJL5GEMgdQA5aQr5mEkIsrg");
	var mask_2_graphics_247 = new cjs.Graphics().p("A0rQ8QkUspF5r+QF5r/MpkTQMnkUL/F5MgcbA51Qr/l5kTsog");
	var mask_2_graphics_248 = new cjs.Graphics().p("A0URSQkfsmFusDQFusEMlkeQMjkgMEFuMgbmA6OQsElukfsjg");
	var mask_2_graphics_249 = new cjs.Graphics().p("Az8RnQkrshFjsJQFjsJMgkpQMfksMKFjMgaxA6nQsJljkqsfg");
	var mask_2_graphics_250 = new cjs.Graphics().p("AzkR9Qk3sdFYsOQFYsOMck1QMbk3MOFYMgZ7A6/QsOlYk1sag");
	var mask_2_graphics_251 = new cjs.Graphics().p("AzMSSQlCsYFNsSQFNsUMYlAQMWlCMTFNMgZFA7WQsTlMlBsXg");
	var mask_2_graphics_252 = new cjs.Graphics().p("AyzSoQlNsUFCsXQFBsYMTlLQMRlOMYFCMgYOA7tQsYlClMsRg");
	var mask_2_graphics_253 = new cjs.Graphics().p("AyaS9QlYsOE2scQE3scMOlXQMMlZMdE3MgXYA8CQsck2lYsNg");
	var mask_2_graphics_254 = new cjs.Graphics().p("AyATTQljsKErsgQEqsgMKliQMHlkMhErMgWiA8YQsfkrljsIg");
	var mask_2_graphics_255 = new cjs.Graphics().p("AxlTpQlvsFEgskQEfslMEltQMClvMlEgMgVqA8sQskkgltsCg");
	var mask_2_graphics_256 = new cjs.Graphics().p("AxLT+Ql5r/EUsoQEUspL+l4QL9l6MpEUMgUyA9AQsokUl5r+g");
	var mask_2_graphics_257 = new cjs.Graphics().p("AwvUUQmFr6EJssQEIstL5mCQL4mFMsEIMgT6A9SQsskImDr4g");
	var mask_2_graphics_258 = new cjs.Graphics().p("AwUUqQmPr0D9swQD8sxL0mNQLymQMxD9MgTDA9kQswj9mOryg");
	var mask_2_graphics_259 = new cjs.Graphics().p("Av4VAQmZrvDwszQDxs0LumYQLsmbM0DxMgSKA91QszjxmZrsg");
	var mask_2_graphics_260 = new cjs.Graphics().p("AvbVVQmkroDls3QDls3LomjQLmmlM3DlMgRRA+FQs3jlmjrng");
	var mask_2_graphics_261 = new cjs.Graphics().p("Au+VrQmvrjDZs5QDZs7LjmtQLgmwM6DZMgQYA+VQs6jZmurhg");
	var mask_2_graphics_262 = new cjs.Graphics().p("AuhWBQm5rdDNs8QDOs+Lcm4QLZm6M+DOMgPgA+jQs8jOm5rag");
	var mask_2_graphics_263 = new cjs.Graphics().p("AuDWWQnErWDCs/QDBtBLWnCQLTnENBDBMgOnA+xQs/jCnDrUg");
	var mask_2_graphics_264 = new cjs.Graphics().p("AtlWsQnOrPC2tDQC1tDLPnMQLNnPNDC2MgNsA+9QtDi1nNrOg");
	var mask_2_graphics_265 = new cjs.Graphics().p("AtGXCQnZrJCqtFQCqtFLInXQLGnZNGCpMgMzA/KQtFipnXrHg");
	var mask_2_graphics_266 = new cjs.Graphics().p("AsnXXQnjrCCetHQCetILBnhQLAnjNICeMgL6A/VQtHienhrAg");
	var mask_2_graphics_267 = new cjs.Graphics().p("AsIXtQnsq7CRtJQCStKK7nsQK4ntNKCSMgK/A/gQtJiSnsq5g");
	var mask_2_graphics_268 = new cjs.Graphics().p("AroYCQn3qzCGtNQCGtLKzn1QKyn3NMCGMgKFA/pQtMiGn1qyg");
	var mask_2_graphics_269 = new cjs.Graphics().p("ArIYYQoAqtB5tOQB6tNKsn/QKqoANOB5MgJLA/yQtNh5n/qrg");
	var mask_2_graphics_270 = new cjs.Graphics().p("AqnYtQoLqlButPQButPKloJQKioKNQBtMgIRA/6QtOhtoJqkg");
	var mask_2_graphics_271 = new cjs.Graphics().p("AqGZDQoUqeBhtRQBitQKdoSQKboUNRBhMgHWBABQtQhhoSqcg");
	var mask_2_graphics_272 = new cjs.Graphics().p("AplZYQoeqWBWtSQBVtSKWobQKToeNTBVMgGcBAIQtRhWocqUg");
	var mask_2_graphics_273 = new cjs.Graphics().p("ApEZtQomqOBJtTQBJtTKOolQKMonNTBJMgFhBANQtShJomqNg");
	var mask_2_graphics_274 = new cjs.Graphics().p("AoiaDQowqHA9tUQA9tUKGouQKEowNVA9MgEnBARQtUg9ouqEg");
	var mask_2_graphics_275 = new cjs.Graphics().p("AoAaYQo5p+AxtWQAxtUJ+o4QJ8o5NVAxMgDsBAVQtVgxo3p8g");
	var mask_2_graphics_276 = new cjs.Graphics().p("AndatQpCp2AktWQAltVJ2pBQJzpCNWAlMgCwBAYQtWglpAp0g");
	var mask_2_graphics_277 = new cjs.Graphics().p("Am6bCQpLpuAYtWQAYtVJupKQJrpLNXAYMgB2BAaQtXgYpIpsg");
	var mask_2_graphics_278 = new cjs.Graphics().p("AmXbXQpUplAMtXQAMtWJmpSQJipUNXAMMgA7BAcQtXgMpRpkg");
	var mask_2_graphics_279 = new cjs.Graphics().p("AlzbsQpdpdAAtXQAAtVJdpbQJapdNXAAMAAABAcQtXAApapbg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(169).to({graphics:mask_2_graphics_169,x:211.1,y:133.9}).wait(1).to({graphics:mask_2_graphics_170,x:211.1,y:135.4}).wait(1).to({graphics:mask_2_graphics_171,x:211.1,y:136.9}).wait(1).to({graphics:mask_2_graphics_172,x:211,y:138.3}).wait(1).to({graphics:mask_2_graphics_173,x:211,y:139.8}).wait(1).to({graphics:mask_2_graphics_174,x:210.9,y:141.3}).wait(1).to({graphics:mask_2_graphics_175,x:210.8,y:142.8}).wait(1).to({graphics:mask_2_graphics_176,x:210.6,y:144.2}).wait(1).to({graphics:mask_2_graphics_177,x:210.5,y:145.7}).wait(1).to({graphics:mask_2_graphics_178,x:210.3,y:147.2}).wait(1).to({graphics:mask_2_graphics_179,x:210.1,y:148.6}).wait(1).to({graphics:mask_2_graphics_180,x:209.9,y:150.1}).wait(1).to({graphics:mask_2_graphics_181,x:209.6,y:151.6}).wait(1).to({graphics:mask_2_graphics_182,x:209.4,y:153}).wait(1).to({graphics:mask_2_graphics_183,x:209.1,y:154.5}).wait(1).to({graphics:mask_2_graphics_184,x:208.8,y:155.9}).wait(1).to({graphics:mask_2_graphics_185,x:208.5,y:157.4}).wait(1).to({graphics:mask_2_graphics_186,x:208.1,y:158.8}).wait(1).to({graphics:mask_2_graphics_187,x:207.8,y:160.2}).wait(1).to({graphics:mask_2_graphics_188,x:207.4,y:161.7}).wait(1).to({graphics:mask_2_graphics_189,x:207,y:163.1}).wait(1).to({graphics:mask_2_graphics_190,x:206.6,y:164.5}).wait(1).to({graphics:mask_2_graphics_191,x:206.1,y:165.9}).wait(1).to({graphics:mask_2_graphics_192,x:205.7,y:167.3}).wait(1).to({graphics:mask_2_graphics_193,x:205.2,y:168.7}).wait(1).to({graphics:mask_2_graphics_194,x:204.7,y:170.1}).wait(1).to({graphics:mask_2_graphics_195,x:204.2,y:171.5}).wait(1).to({graphics:mask_2_graphics_196,x:203.6,y:172.9}).wait(1).to({graphics:mask_2_graphics_197,x:203.1,y:174.2}).wait(1).to({graphics:mask_2_graphics_198,x:202.5,y:175.6}).wait(1).to({graphics:mask_2_graphics_199,x:201.9,y:176.9}).wait(1).to({graphics:mask_2_graphics_200,x:201.3,y:178.3}).wait(1).to({graphics:mask_2_graphics_201,x:200.6,y:179.6}).wait(1).to({graphics:mask_2_graphics_202,x:200,y:180.9}).wait(1).to({graphics:mask_2_graphics_203,x:199.3,y:182.2}).wait(1).to({graphics:mask_2_graphics_204,x:198.6,y:183.6}).wait(1).to({graphics:mask_2_graphics_205,x:197.9,y:184.8}).wait(1).to({graphics:mask_2_graphics_206,x:197.2,y:186.1}).wait(1).to({graphics:mask_2_graphics_207,x:196.4,y:187.4}).wait(1).to({graphics:mask_2_graphics_208,x:195.6,y:188.7}).wait(1).to({graphics:mask_2_graphics_209,x:194.9,y:189.9}).wait(1).to({graphics:mask_2_graphics_210,x:194.1,y:191.2}).wait(1).to({graphics:mask_2_graphics_211,x:193.2,y:192.4}).wait(1).to({graphics:mask_2_graphics_212,x:192.4,y:193.6}).wait(1).to({graphics:mask_2_graphics_213,x:191.6,y:194.8}).wait(1).to({graphics:mask_2_graphics_214,x:190.7,y:196}).wait(1).to({graphics:mask_2_graphics_215,x:189.8,y:197.2}).wait(1).to({graphics:mask_2_graphics_216,x:188.9,y:198.3}).wait(1).to({graphics:mask_2_graphics_217,x:188,y:199.5}).wait(1).to({graphics:mask_2_graphics_218,x:187,y:200.6}).wait(1).to({graphics:mask_2_graphics_219,x:186.1,y:201.7}).wait(1).to({graphics:mask_2_graphics_220,x:185.1,y:202.9}).wait(1).to({graphics:mask_2_graphics_221,x:184.1,y:204}).wait(1).to({graphics:mask_2_graphics_222,x:183.1,y:205}).wait(1).to({graphics:mask_2_graphics_223,x:182.1,y:206.1}).wait(1).to({graphics:mask_2_graphics_224,x:181.1,y:207.2}).wait(1).to({graphics:mask_2_graphics_225,x:180.1,y:208.2}).wait(1).to({graphics:mask_2_graphics_226,x:179,y:209.2}).wait(1).to({graphics:mask_2_graphics_227,x:177.9,y:210.2}).wait(1).to({graphics:mask_2_graphics_228,x:176.8,y:211.2}).wait(1).to({graphics:mask_2_graphics_229,x:175.7,y:212.2}).wait(1).to({graphics:mask_2_graphics_230,x:174.6,y:213.2}).wait(1).to({graphics:mask_2_graphics_231,x:173.5,y:214.1}).wait(1).to({graphics:mask_2_graphics_232,x:172.4,y:215}).wait(1).to({graphics:mask_2_graphics_233,x:171.2,y:215.9}).wait(1).to({graphics:mask_2_graphics_234,x:170,y:216.8}).wait(1).to({graphics:mask_2_graphics_235,x:168.9,y:217.7}).wait(1).to({graphics:mask_2_graphics_236,x:167.7,y:218.6}).wait(1).to({graphics:mask_2_graphics_237,x:166.5,y:219.4}).wait(1).to({graphics:mask_2_graphics_238,x:165.2,y:220.2}).wait(1).to({graphics:mask_2_graphics_239,x:164,y:221.1}).wait(1).to({graphics:mask_2_graphics_240,x:162.8,y:221.8}).wait(1).to({graphics:mask_2_graphics_241,x:161.5,y:222.6}).wait(1).to({graphics:mask_2_graphics_242,x:160.3,y:223.4}).wait(1).to({graphics:mask_2_graphics_243,x:159,y:224.1}).wait(1).to({graphics:mask_2_graphics_244,x:157.7,y:224.8}).wait(1).to({graphics:mask_2_graphics_245,x:156.4,y:225.5}).wait(1).to({graphics:mask_2_graphics_246,x:155.1,y:226.2}).wait(1).to({graphics:mask_2_graphics_247,x:153.8,y:226.9}).wait(1).to({graphics:mask_2_graphics_248,x:152.5,y:227.5}).wait(1).to({graphics:mask_2_graphics_249,x:151.2,y:228.1}).wait(1).to({graphics:mask_2_graphics_250,x:149.8,y:228.7}).wait(1).to({graphics:mask_2_graphics_251,x:148.5,y:229.3}).wait(1).to({graphics:mask_2_graphics_252,x:147.1,y:229.9}).wait(1).to({graphics:mask_2_graphics_253,x:145.8,y:230.4}).wait(1).to({graphics:mask_2_graphics_254,x:144.4,y:231}).wait(1).to({graphics:mask_2_graphics_255,x:143,y:231.5}).wait(1).to({graphics:mask_2_graphics_256,x:141.6,y:232}).wait(1).to({graphics:mask_2_graphics_257,x:140.2,y:232.4}).wait(1).to({graphics:mask_2_graphics_258,x:138.9,y:232.9}).wait(1).to({graphics:mask_2_graphics_259,x:137.4,y:233.3}).wait(1).to({graphics:mask_2_graphics_260,x:136,y:233.7}).wait(1).to({graphics:mask_2_graphics_261,x:134.6,y:234.1}).wait(1).to({graphics:mask_2_graphics_262,x:133.2,y:234.5}).wait(1).to({graphics:mask_2_graphics_263,x:131.8,y:234.8}).wait(1).to({graphics:mask_2_graphics_264,x:130.3,y:235.1}).wait(1).to({graphics:mask_2_graphics_265,x:128.9,y:235.4}).wait(1).to({graphics:mask_2_graphics_266,x:127.5,y:235.7}).wait(1).to({graphics:mask_2_graphics_267,x:126,y:236}).wait(1).to({graphics:mask_2_graphics_268,x:124.6,y:236.2}).wait(1).to({graphics:mask_2_graphics_269,x:123.1,y:236.4}).wait(1).to({graphics:mask_2_graphics_270,x:121.7,y:236.6}).wait(1).to({graphics:mask_2_graphics_271,x:120.2,y:236.8}).wait(1).to({graphics:mask_2_graphics_272,x:118.8,y:237}).wait(1).to({graphics:mask_2_graphics_273,x:117.3,y:237.1}).wait(1).to({graphics:mask_2_graphics_274,x:115.9,y:237.2}).wait(1).to({graphics:mask_2_graphics_275,x:114.4,y:237.3}).wait(1).to({graphics:mask_2_graphics_276,x:112.9,y:237.4}).wait(1).to({graphics:mask_2_graphics_277,x:111.5,y:237.4}).wait(1).to({graphics:mask_2_graphics_278,x:110,y:237.5}).wait(1).to({graphics:mask_2_graphics_279,x:108.6,y:237.5}).wait(196));

	// Layer 4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(20,1,1).p("ATq1VQiCjKjahXQjbhXjaAhQjbAhjUBYQjUBZjDCLQjDCLiqClQiqCliHCqQiHCqhsC/QhsC/hTDWQhTDXghELQggELA6DCQA5DCCiDJQChDJDyBGQDyBGDsgHQDsgHDUhKQDThJDMhrQDMhrCniEQCoiECZiVQCZiWB7iMQB6iMBnho");
	this.shape_3.setTransform(274.3,275.7);
	this.shape_3._off = true;

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(169).to({_off:false},0).wait(306));

	// Layer 1 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_9 = new cjs.Graphics().p("AwCcPMAr7gvJQJxJGAeNUQAeNWpGJyQpHJxtWAdQgrABgrAAQseABpRopg");
	var mask_3_graphics_10 = new cjs.Graphics().p("AvwcgMArWgvrQJ4I+ApNTQApNXo/J4Qo/J4tVAoQg6ADg5AAQsMAApOoYg");
	var mask_3_graphics_11 = new cjs.Graphics().p("AvdcwMAqwgwMQJ/I3AzNSQA0NWo4J/Qo3J/tUAyQhIAFhHAAQr7AApJoIg");
	var mask_3_graphics_12 = new cjs.Graphics().p("AvKdBMAqKgwuQKGIvA9NRQA+NVovKHQovKGtUA8QhWAHhUAAQrqAApFn3g");
	var mask_3_graphics_13 = new cjs.Graphics().p("Au3dRMApjgxPQKNInBINRQBINUonKNQonKNtTBHQhkAJhhAAQrZAApBnng");
	var mask_3_graphics_14 = new cjs.Graphics().p("AukdiMAo8gxwQKUIfBTNQQBSNTofKUQofKUtSBRQhxALhuAAQrKAAo8nWg");
	var mask_3_graphics_15 = new cjs.Graphics().p("AuQdxMAoVgyPQKaIXBdNOQBdNSoXKbQoXKatRBcQh/AOh7AAQq5AAo3nHg");
	var mask_3_graphics_16 = new cjs.Graphics().p("At8eBMAnsgyvQKiIOBnNOQBnNRoOKhQoPKhtQBmQiMARiIAAQqqAAoxm3g");
	var mask_3_graphics_17 = new cjs.Graphics().p("AtoeQMAnEgzOQKoIHBxNMQByNPoGKoQoGKntPBxQiZAViVAAQqaAAosmpg");
	var mask_3_graphics_18 = new cjs.Graphics().p("AtUefMAmcgzsQKtH+B9NLQB8NNn+KuQn+KutNB7QinAZigAAQqMAAommag");
	var mask_3_graphics_19 = new cjs.Graphics().p("AtAeuMAlzg0KQK0H1CGNKQCHNMn1K0Qn2KztLCGQi0AdisAAQp+AAogmLg");
	var mask_3_graphics_20 = new cjs.Graphics().p("Asse9MAlKg0oQK6HtCRNIQCRNKntK6QntK6tJCQQjBAhi5AAQpuAAobl8g");
	var mask_3_graphics_21 = new cjs.Graphics().p("AsXfLMAkgg1FQLAHkCbNHQCcNInkLAQnlLAtHCaQjNAmjFAAQphAAoUlug");
	var mask_3_graphics_22 = new cjs.Graphics().p("AsCfZMAj2g1hQLGHbClNFQCmNGnbLGQncLGtGCkQjZArjRAAQpTAAoNlgg");
	var mask_3_graphics_23 = new cjs.Graphics().p("ArtfnMAjMg19QLLHSCwNDQCwNEnTLLQnSLMtECvQjmAxjdAAQpEAAoHlTg");
	var mask_3_graphics_24 = new cjs.Graphics().p("ArYf1MAihg2ZQLRHKC6NAQC7NBnKLSQnKLRtCC5QjxA3jpAAQo3AAoAlFg");
	var mask_3_graphics_25 = new cjs.Graphics().p("EgLDAgCMAh2g20QLXHBDEM+QDFM/nBLXQnBLXs/DEQj+A8j0AAQoqAAn5k4g");
	var mask_3_graphics_26 = new cjs.Graphics().p("EgKtAgPMAhKg3OQLdG4DOM7QDPM9m4LcQm4Lds9DNQkJBDkAAAQodAAnxkrg");
	var mask_3_graphics_27 = new cjs.Graphics().p("EgKYAgcMAgfg3oQLiGvDZM5QDZM6mvLhQmvLis6DYQkVBJkMAAQoQAAnqkeg");
	var mask_3_graphics_28 = new cjs.Graphics().p("EgKCAgpMAfzg4CQLnGmDjM2QDjM3mmLnQmlLns4DiQkhBQkXAAQoCAAnjkRg");
	var mask_3_graphics_29 = new cjs.Graphics().p("EgJsAg1MAfHg4aQLsGdDtMzQDtM0mcLsQmdLss1DsQksBXkiAAQn2AAnbkFg");
	var mask_3_graphics_30 = new cjs.Graphics().p("EgJWAhBMAeag4yQLyGTD2MwQD4MymTLxQmULxsxD2Qk4BfkuAAQnpAAnTj6g");
	var mask_3_graphics_31 = new cjs.Graphics().p("EgI/AhNMAdtg5KQL2GKEBMtQEBMumKL2QmKL2suEAQlDBnk5AAQndAAnKjug");
	var mask_3_graphics_32 = new cjs.Graphics().p("EgIpAhYMAdAg5hQL7GBELMqQELMrmAL7QmBL7srEKQlNBulFAAQnRAAnCjjg");
	var mask_3_graphics_33 = new cjs.Graphics().p("EgISAhjMAcSg53QMAF3EVMnQEVMnl3MAQl4L/snEUQlYB3lRAAQnEAAm5jYg");
	var mask_3_graphics_34 = new cjs.Graphics().p("EgH7AhuMAbkg6NQMEFuEfMjQEfMkltMEQluMEslEeQliB/lcAAQm4AAmwjNg");
	var mask_3_graphics_35 = new cjs.Graphics().p("EgHkAh5MAa2g6jQMJFlEoMfQEqMgllMJQlkMIshEoQlsCIloAAQmtAAmmjCg");
	var mask_3_graphics_36 = new cjs.Graphics().p("EgHNAiDMAaIg63QMNFbEyMbQEzMdlaMNQlbMNsdExQl3CRlzAAQmhAAmdi4g");
	var mask_3_graphics_37 = new cjs.Graphics().p("EgG2AiOMAZag7MQMRFRE8MYQE9MZlRMRQlRMRsaE7QmACal/AAQmVAAmUitg");
	var mask_3_graphics_38 = new cjs.Graphics().p("EgGfAiXMAYrg7fQMVFHFGMUQFHMVlIMVQlHMVsVFGQmKCjmLAAQmJAAmLikg");
	var mask_3_graphics_39 = new cjs.Graphics().p("EgGHAihMAX8g7zQMZE+FPMQQFRMRk+MZQk+MZsRFPQmUCtmWAAQl+AAmAiag");
	var mask_3_graphics_40 = new cjs.Graphics().p("EgFwAiqMAXNg8FQMdE0FZMMQFaMMk0MdQk0MdsNFZQmdC3miAAQlzAAl2iRg");
	var mask_3_graphics_41 = new cjs.Graphics().p("EgFYAizMAWdg8XQMhEqFjMIQFjMIkqMhQkqMgsJFiQmmDCmuAAQlnAAlsiIg");
	var mask_3_graphics_42 = new cjs.Graphics().p("EgFAAi8MAVtg8oQMlEgFsMDQFtMEkgMkQkgMksFFsQmvDMm6AAQlcAAlhh/g");
	var mask_3_graphics_43 = new cjs.Graphics().p("EgEoAjFMAU+g86QMnEXF2L+QF2L/kWMoQkWMosAF1Qm4DXnGAAQlQAAlXh2g");
	var mask_3_graphics_44 = new cjs.Graphics().p("EgEQAjNMAUNg9KQMsENF/L5QGAL7kNMrQkMMrr7F/QnBDinSAAQlFAAlMhug");
	var mask_3_graphics_45 = new cjs.Graphics().p("EgD4AjVMATdg9ZQMvECGIL1QGJL2kCMuQkCMur3GIQnJDuneAAQk6AAlBhmg");
	var mask_3_graphics_46 = new cjs.Graphics().p("EgDgAjcMAStg9oQMyD5GRLwQGTLxj4MxQj5MxrxGRQnSD6nqAAQkuAAk3hfg");
	var mask_3_graphics_47 = new cjs.Graphics().p("EgDHAjkMAR8g93QM0DvGbLqQGcLsjuM1QjuM0rtGbQnaEFn3AAQkiAAkrhXg");
	var mask_3_graphics_48 = new cjs.Graphics().p("EgCvAjrMARMg+EQM3DkGkLmQGlLmjkM4QjkM3roGjQnhESoEAAQkXAAkghQg");
	var mask_3_graphics_49 = new cjs.Graphics().p("EgCWAjyMAQag+SQM6DaGtLhQGuLijaM5QjZM6rjGtQnpEeoQAAQkMAAkUhJg");
	var mask_3_graphics_50 = new cjs.Graphics().p("EgB+Aj4MAPqg+eQM8DQG2LbQG4LdjQM8QjQM8rdG2QnxErodAAQkAAAkJhDg");
	var mask_3_graphics_51 = new cjs.Graphics().p("EgBlAj+MAO4g+qQM/DGG/LWQHALXjFM+QjGM/rXG/Qn4E4orAAQj0AAj9g9g");
	var mask_3_graphics_52 = new cjs.Graphics().p("EgBMAkEMAOGg+1QNCC7HILQQHJLSi7NBQi8NBrRHIQoAFEo4AAQjoABjxg3g");
	var mask_3_graphics_53 = new cjs.Graphics().p("EgAzAkKMANVg/AQNDCxHRLKQHSLNixNCQixNErMHQQoGFSpGAAQjdAAjkgwg");
	var mask_3_graphics_54 = new cjs.Graphics().p("EgAaAkPMAMjg/KQNGCnHZLEQHbLHinNFQimNFrHHaQoNFfpTAAQjRAAjYgrg");
	var mask_3_graphics_55 = new cjs.Graphics().p("EAABAkVMALsg/VQNICbHjK+QHlLAibNHQibNIrAHjQoUFvpjAAQjEAAjLglg");
	var mask_3_graphics_56 = new cjs.Graphics().p("EAAdAkaMAK0g/fQNKCPHtK3QHuK5iPNKQiPNKq5HsQocGApzAAQi2AAi9ggg");
	var mask_3_graphics_57 = new cjs.Graphics().p("EAA6AkfMAJ6g/pQNMCEH3KwQH4KyiDNLQiENMqyH3QoiGQqEAAQioAAiugbg");
	var mask_3_graphics_58 = new cjs.Graphics().p("EABWAkjMAJCg/xQNOB4IAKpQICKrh4NNQh4NOqrIAQooGhqVAAQiaAAiggXg");
	var mask_3_graphics_59 = new cjs.Graphics().p("EABzAknMAIJg/4QNPBsIKKiQILKjhsNPQhsNPqkIKQovGyqmAAQiLAAiRgTg");
	var mask_3_graphics_60 = new cjs.Graphics().p("EACPAkrMAHQhAAQNRBgITKbQIVKdhgNQQhhNQqcITQo1HEq3AAQh+AAiCgPg");
	var mask_3_graphics_61 = new cjs.Graphics().p("EACsAkuMAGXhAGQNSBVIcKTQIeKVhUNRQhVNSqVIcQo6HVrKAAQhvAAhygLg");
	var mask_3_graphics_62 = new cjs.Graphics().p("EADJAkxMAFdhALQNTBIImKMQInKOhJNSQhINTqNIlQpAHnrcAAQhhAAhigIg");
	var mask_3_graphics_63 = new cjs.Graphics().p("EADlAkzMAEkhAPQNVA8IuKEQIwKGg8NTQg9NUqFIvQpGH5ruAAQhSAAhTgGg");
	var mask_3_graphics_64 = new cjs.Graphics().p("EAECAk1MADrhATQNVAxI3J8QI5J+gwNUQgxNVp+I3QpKIMsCAAQhCAAhDgEg");
	var mask_3_graphics_65 = new cjs.Graphics().p("EAEfAk3MACxhAWQNWAlJAJ0QJCJ2glNUQglNWp2JAQpOIfsWAAQgyAAgzgCg");
	var mask_3_graphics_66 = new cjs.Graphics().p("EAE7Ak4MAB4hAYQNWAZJJJsQJLJugZNUQgZNWptJJQpTIzsrAAIhFgBg");
	var mask_3_graphics_67 = new cjs.Graphics().p("EAFYAk5MAA/hAaQNWANJRJkQJUJmgNNVQgNNWpmJSQpXJGs/AAIgkAAg");
	var mask_3_graphics_68 = new cjs.Graphics().p("EAF1Ak5MAAFhAaQNWABJaJcQJcJdgBNVQgBNWpdJbQpbJatUAAIgDAAg");
	var mask_3_graphics_69 = new cjs.Graphics().p("AFd7hQNWgKJjJTQJkJUALNWQALNWpVJiQpTJktWALg");
	var mask_3_graphics_70 = new cjs.Graphics().p("AFA7gQNWgXJrJLQJsJMAXNVQAXNWpMJrQpLJstWAXg");
	var mask_3_graphics_71 = new cjs.Graphics().p("AEj7eQNWgjJzJCQJ0JDAjNVQAjNWpEJyQpCJ1tVAjg");
	var mask_3_graphics_72 = new cjs.Graphics().p("AEG7cQNVgvJ7I5QJ9I7AuNUQAvNVo7J7Qo5J8tVAvg");
	var mask_3_graphics_73 = new cjs.Graphics().p("ADp7ZQNVg7KCIwQKFIyA6NTQA7NUoyKDQowKFtUA6g");
	var mask_3_graphics_74 = new cjs.Graphics().p("ADM7WQNUhHKKIoQKNIoBGNTQBGNTooKLQonKMtUBGg");
	var mask_3_graphics_75 = new cjs.Graphics().p("ACv7SQNThTKSIeQKUIgBSNRQBSNTofKSQoeKUtSBSg");
	var mask_3_graphics_76 = new cjs.Graphics().p("ACT7OQNRheKZIVQKcIWBeNQQBeNRoWKaQoVKbtRBfg");
	var mask_3_graphics_77 = new cjs.Graphics().p("AB27JQNQhqKhIMQKiINBqNOQBqNQoNKhQoLKjtQBqg");
	var mask_3_graphics_78 = new cjs.Graphics().p("ABZ7DQNOh2KpICQKqIEB1NNQB2NOoDKpQoCKptOB2g");
	var mask_3_graphics_79 = new cjs.Graphics().p("AA869QNNiBKvH4QKxH6CCNMQCCNMn7KwQn4KxtMCBg");
	var mask_3_graphics_80 = new cjs.Graphics().p("AAg62QNKiNK3HvQK4HwCNNKQCONKnxK3QnuK4tLCNg");
	var mask_3_graphics_81 = new cjs.Graphics().p("AAD6vQNJiZK9HmQK/HmCZNJQCZNHnnK+QnkK+tJCag");
	var mask_3_graphics_82 = new cjs.Graphics().p("AgY6mQNFilLEHbQLGHdCkNGQClNGndLEQnbLFtGClg");
	var mask_3_graphics_83 = new cjs.Graphics().p("Ag16eQNDiwLLHRQLMHTCxNEQCwNDnTLLQnRLMtECwg");
	var mask_3_graphics_84 = new cjs.Graphics().p("AhR6VQNAi8LRHIQLTHIC8NCQC8NAnJLSQnHLStBC8g");
	var mask_3_graphics_85 = new cjs.Graphics().p("Aht6LQM9jHLYG9QLZG+DHM/QDIM+m/LYQm9LYs/DIg");
	var mask_3_graphics_86 = new cjs.Graphics().p("AiK6AQM7jULeGzQLfG1DTM8QDUM7m1LdQmzLfs8DUg");
	var mask_3_graphics_87 = new cjs.Graphics().p("Aim51QM4jfLkGpQLlGqDfM5QDfM4mrLjQmoLls5Dfg");
	var mask_3_graphics_88 = new cjs.Graphics().p("AjB5qQM0jqLpGeQLsGgDqM2QDqM1mgLpQmeLrs2Dqg");
	var mask_3_graphics_89 = new cjs.Graphics().p("Ajd5eQMxj1LvGUQLxGVD2MyQD1MymVLvQmULxsyD1g");
	var mask_3_graphics_90 = new cjs.Graphics().p("Aj55RQMukBL0GKQL3GKEBMvQEBMumLL1QmJL2svEBg");
	var mask_3_graphics_91 = new cjs.Graphics().p("AkU5EQMqkML6F/QL8GAEMMrQENMrmBL6Ql+L7ssENg");
	var mask_3_graphics_92 = new cjs.Graphics().p("Akw42QMnkYL/F1QMBF1EYMoQEYMml2MAQl0MBsoEXg");
	var mask_3_graphics_93 = new cjs.Graphics().p("AlL4nQMikjMFFpQMGFrEjMjQEjMjlrMFQlpMGskEjg");
	var mask_3_graphics_94 = new cjs.Graphics().p("Alm4YQMekuMKFeQMLFgEuMgQEuMelgMKQleMLsgEug");
	var mask_3_graphics_95 = new cjs.Graphics().p("AmB4JQMak5MOFUQMQFVE6MbQE5MalWMPQlTMPsbE6g");
	var mask_3_graphics_96 = new cjs.Graphics().p("Amc35QMWlEMTFJQMVFKFEMXQFEMVlKMUQlJMUsWFEg");
	var mask_3_graphics_97 = new cjs.Graphics().p("Am23oQMRlPMXE+QMZE/FQMSQFPMRk/MYQk+MZsSFPg");
	var mask_3_graphics_98 = new cjs.Graphics().p("AnR3XQMNlaMbEzQMeE0FaMNQFbMMk1MdQkyMdsOFag");
	var mask_3_graphics_99 = new cjs.Graphics().p("Ans3FQMIllMgEoQMiEpFlMIQFlMIkpMgQknMhsJFmg");
	var mask_3_graphics_100 = new cjs.Graphics().p("AoM2tQMBlzMlEaQMnEaFzMDQFyMBkbMlQkZMmsCFzg");
	var mask_3_graphics_101 = new cjs.Graphics().p("Aos2VQL7mAMpELQMsENGAL7QGAL7kOMqQkLMrr7GAg");
	var mask_3_graphics_102 = new cjs.Graphics().p("ApM19QL0mNMuD+QMwD+GNL1QGOL0kAMuQj8Mwr1GNg");
	var mask_3_graphics_103 = new cjs.Graphics().p("Apr1jQLtmaMyDvQM0DxGbLtQGaLtjxMzQjvM0rtGag");
	var mask_3_graphics_104 = new cjs.Graphics().p("AqK1IQLlmnM2DhQM5DiGnLmQGnLljiM3QjhM4rmGng");
	var mask_3_graphics_105 = new cjs.Graphics().p("Aqp0tQLem0M6DTQM8DTG0LfQG0LejUM7QjSM7rfG0g");
	var mask_3_graphics_106 = new cjs.Graphics().p("ArH0RQLWnAM9DEQNADFHBLXQHALWjFM+QjEM/rXHBg");
	var mask_3_graphics_107 = new cjs.Graphics().p("Arlz0QLPnNNAC2QNDC2HNLPQHNLOi3NCQi1NCrPHNg");
	var mask_3_graphics_108 = new cjs.Graphics().p("AsDzWQLHnaNDCoQNGCnHZLHQHaLGipNFQimNFrHHag");
	var mask_3_graphics_109 = new cjs.Graphics().p("Asgy4QK+nmNGCZQNICZHmK/QHmK9iaNIQiYNIq+Hmg");
	var mask_3_graphics_110 = new cjs.Graphics().p("As9yYQK2nyNICKQNLCKHyK2QHyK2iMNJQiJNKq2Hyg");
	var mask_3_graphics_111 = new cjs.Graphics().p("Atax4QKtn+NKB7QNOB8H+KtQH+Kth9NLQh7NNqtH+g");
	var mask_3_graphics_112 = new cjs.Graphics().p("At2xYQKkoJNMBsQNQBuIJKkQIKKkhuNNQhsNOqkIKg");
	var mask_3_graphics_113 = new cjs.Graphics().p("AuSw2QKboWNOBfQNRBeIVKbQIWKbhgNPQhdNQqaIVg");
	var mask_3_graphics_114 = new cjs.Graphics().p("AutwUQKRohNPBQQNTBPIhKSQIhKRhRNQQhONSqRIhg");
	var mask_3_graphics_115 = new cjs.Graphics().p("AvJvxQKIosNRBAQNUBBIsKIQIsKIhCNRQg/NTqIItg");
	var mask_3_graphics_116 = new cjs.Graphics().p("AvjvNQJ+o4NRAyQNVAyI4J+QI3J+gzNTQgxNTp+I4g");
	var mask_3_graphics_117 = new cjs.Graphics().p("Av+upQJ0pCNTAjQNVAjJDJ0QJCJ0gkNTQgiNUp0JDg");
	var mask_3_graphics_118 = new cjs.Graphics().p("AwXuEQJppNNTAUQNWAUJNJqQJNJqgVNUQgTNUpqJOg");
	var mask_3_graphics_119 = new cjs.Graphics().p("AwxteQJfpYNTAFQNWAGJYJfQJYJfgGNUQgFNVpfJYg");
	var mask_3_graphics_120 = new cjs.Graphics().p("AxKs4QJVpiNSgKQNXgJJiJVQJiJVAINUQALNUpVJjg");
	var mask_3_graphics_121 = new cjs.Graphics().p("AxjsRQJKpsNTgZQNVgYJtJKQJsJKAYNUQAZNUpKJtg");
	var mask_3_graphics_122 = new cjs.Graphics().p("Ax7rpQI/p3NSgnQNVgnJ2I/QJ3I/AmNTQAoNUo/J3g");
	var mask_3_graphics_123 = new cjs.Graphics().p("AyTrBQI0qANRg2QNUg2KBI0QKAI0A1NSQA3NTo0KBg");
	var mask_3_graphics_124 = new cjs.Graphics().p("AyrqYQIpqKNQhFQNThFKKIpQKKIpBENRQBGNSopKKg");
	var mask_3_graphics_125 = new cjs.Graphics().p("AzCpvQIeqTNOhUQNShTKUIdQKTIeBTNPQBUNRodKTg");
	var mask_3_graphics_126 = new cjs.Graphics().p("AzYpFQISqcNMhjQNRhiKcISQKdISBhNOQBkNPoSKdg");
	var mask_3_graphics_127 = new cjs.Graphics().p("AzuoaQIGqmNLhxQNOhxKmIGQKmIGBwNNQByNNoGKmg");
	var mask_3_graphics_128 = new cjs.Graphics().p("A0EnvQH6quNJiAQNMiAKvH6QKvH7B+NKQCBNKn6Kvg");
	var mask_3_graphics_129 = new cjs.Graphics().p("A0ZnDQHuq4NHiOQNJiOK4HuQK3HuCNNIQCQNInuK4g");
	var mask_3_graphics_130 = new cjs.Graphics().p("A0smcQHkq/NFibQNGicK/HkQLAHjCaNGQCcNGnjK/g");
	var mask_3_graphics_131 = new cjs.Graphics().p("A0+l1QHZrGNCioQNEioLHHYQLGHYCoNEQCpNDnZLHg");
	var mask_3_graphics_132 = new cjs.Graphics().p("A1PlNQHNrNNAi1QNBi2LOHOQLOHNC0NBQC2NBnNLNg");
	var mask_3_graphics_133 = new cjs.Graphics().p("A1hkkQHDrVM9jCQM+jCLVHCQLVHDDBM9QDDM+nCLVg");
	var mask_3_graphics_134 = new cjs.Graphics().p("A1xj8QG3rbM6jPQM7jPLcG3QLcG3DNM7QDQM7m3Lcg");
	var mask_3_graphics_135 = new cjs.Graphics().p("A2CjSQGsrjM3jbQM4jcLiGsQLjGsDaM3QDdM4msLig");
	var mask_3_graphics_136 = new cjs.Graphics().p("A2SipQGgrpM0joQM1joLpGgQLpGgDnM0QDpM0mgLpg");
	var mask_3_graphics_137 = new cjs.Graphics().p("A2hh/QGUrvMwj1QMxj1LwGVQLvGUD0MxQD2MwmVLwg");
	var mask_3_graphics_138 = new cjs.Graphics().p("A2whVQGJr1MskCQMtkBL1GJQL2GJEAMsQEDMtmJL2g");
	var mask_3_graphics_139 = new cjs.Graphics().p("A2/gqQF9r8MokOQMpkOL8F+QL8F9EMMoQEPMpl9L8g");
	var mask_3_graphics_140 = new cjs.Graphics().p("A3NAAQFxsBMkkaQMlkbMBFyQMCFyEZMkQEcMklyMBg");
	var mask_3_graphics_141 = new cjs.Graphics().p("A3bArQFmsGMfknQMhknMHFmQMHFlElMgQEoMgllMHg");
	var mask_3_graphics_142 = new cjs.Graphics().p("A3oBWQFasLMakzQMck0MNFaQMMFaEyMbQE0MblZMNg");
	var mask_3_graphics_143 = new cjs.Graphics().p("A31CCQFOsRMWk/QMXlAMRFOQMSFOE+MWQFBMXlOMRg");
	var mask_3_graphics_144 = new cjs.Graphics().p("A4BCuQFBsWMRlLQMSlMMXFCQMXFBFKMRQFNMSlBMXg");
	var mask_3_graphics_145 = new cjs.Graphics().p("A4NDbQE1sbMMlXQMNlZMbE2QMcE1FXMMQFZMMk2Mcg");
	var mask_3_graphics_146 = new cjs.Graphics().p("A4YEHQEpsfMGlkQMHlkMhEpQMgEpFjMHQFlMHkpMgg");
	var mask_3_graphics_147 = new cjs.Graphics().p("A4jE0QEcskMBlvQMClwMlEcQMlEdFvMBQFwMCkcMlg");
	var mask_3_graphics_148 = new cjs.Graphics().p("A4uFhQEQsoL8l7QL8l8MpEQQMpEQF7L8QF8L7kQMqg");
	var mask_3_graphics_149 = new cjs.Graphics().p("A44GPQEEstL1mHQL2mHMuEDQMtEEGHL1QGIL2kEMug");
	var mask_3_graphics_150 = new cjs.Graphics().p("A5BG8QD3swLvmTQLwmTMyD3QMxD3GSLwQGULvj3Mxg");
	var mask_3_graphics_151 = new cjs.Graphics().p("A5KHqQDrs0LomeQLqmfM1DqQM1DrGeLpQGgLpjrM1g");
	var mask_3_graphics_152 = new cjs.Graphics().p("A5SIYQDds3LjmqQLjmrM5DeQM4DeGqLjQGrLijeM5g");
	var mask_3_graphics_153 = new cjs.Graphics().p("A5aJGQDRs7Lbm0QLdm3M8DRQM8DRG1LdQG2LcjRM8g");
	var mask_3_graphics_154 = new cjs.Graphics().p("A5iJ1QDEs+LVnAQLWnCM/DEQNADEG/LWQHCLVjEM/g");
	var mask_3_graphics_155 = new cjs.Graphics().p("A5pKkQC4tCLOnLQLPnNNCC4QNCC3HLLPQHNLOi4NCg");
	var mask_3_graphics_156 = new cjs.Graphics().p("A5vLSQCqtELHnWQLJnYNECrQNFCqHWLIQHYLHirNFg");
	var mask_3_graphics_157 = new cjs.Graphics().p("A51MBQCdtGLAniQLBniNHCdQNHCeHhLBQHjK/idNHg");
	var mask_3_graphics_158 = new cjs.Graphics().p("A57MwQCRtJK4nsQK6ntNJCQQNJCRHsK5QHuK4iQNJg");
	var mask_3_graphics_159 = new cjs.Graphics().p("A6ANfQCEtMKwn1QKyn5NLCEQNMCDH3KyQH4KwiDNMg");
	var mask_3_graphics_160 = new cjs.Graphics().p("A6EOPQB2tOKpoBQKqoDNNB3QNOB2IBKqQIDKoh2NOg");
	var mask_3_graphics_161 = new cjs.Graphics().p("A6IO+QBptQKhoLQKioNNPBqQNQBpILKiQIOKghqNQg");
	var mask_3_graphics_162 = new cjs.Graphics().p("A6MPuQBctSKZoVQKaoYNQBdQNSBcIWKaQIYKXhdNSg");
	var mask_3_graphics_163 = new cjs.Graphics().p("A6PQdQBPtTKQofQKSoiNSBPQNTBPIgKSQIiKPhPNTg");
	var mask_3_graphics_164 = new cjs.Graphics().p("A6RRNQBCtUKHoqQKKosNSBCQNUBCIrKKQIsKGhCNUg");
	var mask_3_graphics_165 = new cjs.Graphics().p("A6UR9QA1tVJ/o0QKBo2NUA1QNVA1I0KBQI2J+g1NUg");
	var mask_3_graphics_166 = new cjs.Graphics().p("A6VSsQAntVJ3o+QJ4o/NUAnQNWAoI+J4QJAJ1goNWg");
	var mask_3_graphics_167 = new cjs.Graphics().p("A6WTcQAatWJtpHQJvpKNWAbQNWAaJIJvQJJJtgaNWg");
	var mask_3_graphics_168 = new cjs.Graphics().p("A6XUMQANtXJkpQQJmpTNWANQNWANJSJmQJTJkgNNWg");
	var mask_3_graphics_169 = new cjs.Graphics().p("A6XU7QAAtXJbpaQJdpcNVAAQNXAAJbJdQJcJaAANWg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_3_graphics_9,x:244.2,y:235.9}).wait(1).to({graphics:mask_3_graphics_10,x:244.2,y:236}).wait(1).to({graphics:mask_3_graphics_11,x:244.2,y:236}).wait(1).to({graphics:mask_3_graphics_12,x:244.2,y:236}).wait(1).to({graphics:mask_3_graphics_13,x:244.2,y:236}).wait(1).to({graphics:mask_3_graphics_14,x:244.2,y:236}).wait(1).to({graphics:mask_3_graphics_15,x:244.2,y:236}).wait(1).to({graphics:mask_3_graphics_16,x:244.2,y:236}).wait(1).to({graphics:mask_3_graphics_17,x:244.2,y:236.1}).wait(1).to({graphics:mask_3_graphics_18,x:244.2,y:236.1}).wait(1).to({graphics:mask_3_graphics_19,x:244.2,y:236.1}).wait(1).to({graphics:mask_3_graphics_20,x:244.2,y:236.1}).wait(1).to({graphics:mask_3_graphics_21,x:244.2,y:236.1}).wait(1).to({graphics:mask_3_graphics_22,x:244.2,y:236.1}).wait(1).to({graphics:mask_3_graphics_23,x:244.2,y:236.2}).wait(1).to({graphics:mask_3_graphics_24,x:244.2,y:236.2}).wait(1).to({graphics:mask_3_graphics_25,x:244.2,y:236.2}).wait(1).to({graphics:mask_3_graphics_26,x:244.2,y:236.2}).wait(1).to({graphics:mask_3_graphics_27,x:244.2,y:236.2}).wait(1).to({graphics:mask_3_graphics_28,x:244.3,y:236.2}).wait(1).to({graphics:mask_3_graphics_29,x:244.3,y:236.2}).wait(1).to({graphics:mask_3_graphics_30,x:244.3,y:236.3}).wait(1).to({graphics:mask_3_graphics_31,x:244.3,y:236.3}).wait(1).to({graphics:mask_3_graphics_32,x:244.3,y:236.3}).wait(1).to({graphics:mask_3_graphics_33,x:244.3,y:236.3}).wait(1).to({graphics:mask_3_graphics_34,x:244.3,y:236.3}).wait(1).to({graphics:mask_3_graphics_35,x:244.2,y:236.3}).wait(1).to({graphics:mask_3_graphics_36,x:244.2,y:236.3}).wait(1).to({graphics:mask_3_graphics_37,x:244.2,y:236.3}).wait(1).to({graphics:mask_3_graphics_38,x:244.2,y:236.3}).wait(1).to({graphics:mask_3_graphics_39,x:244.2,y:236.3}).wait(1).to({graphics:mask_3_graphics_40,x:244.2,y:236.3}).wait(1).to({graphics:mask_3_graphics_41,x:244.2,y:236.3}).wait(1).to({graphics:mask_3_graphics_42,x:244.2,y:236.3}).wait(1).to({graphics:mask_3_graphics_43,x:244.2,y:236.3}).wait(1).to({graphics:mask_3_graphics_44,x:244.2,y:236.3}).wait(1).to({graphics:mask_3_graphics_45,x:244.1,y:236.3}).wait(1).to({graphics:mask_3_graphics_46,x:244.1,y:236.3}).wait(1).to({graphics:mask_3_graphics_47,x:244.1,y:236.3}).wait(1).to({graphics:mask_3_graphics_48,x:244.1,y:236.3}).wait(1).to({graphics:mask_3_graphics_49,x:244.1,y:236.3}).wait(1).to({graphics:mask_3_graphics_50,x:244.1,y:236.3}).wait(1).to({graphics:mask_3_graphics_51,x:244,y:236.3}).wait(1).to({graphics:mask_3_graphics_52,x:244,y:236.2}).wait(1).to({graphics:mask_3_graphics_53,x:244,y:236.2}).wait(1).to({graphics:mask_3_graphics_54,x:244,y:236.2}).wait(1).to({graphics:mask_3_graphics_55,x:243.9,y:236.2}).wait(1).to({graphics:mask_3_graphics_56,x:243.9,y:236.2}).wait(1).to({graphics:mask_3_graphics_57,x:243.9,y:236.2}).wait(1).to({graphics:mask_3_graphics_58,x:243.9,y:236.2}).wait(1).to({graphics:mask_3_graphics_59,x:243.8,y:236.2}).wait(1).to({graphics:mask_3_graphics_60,x:243.8,y:236.2}).wait(1).to({graphics:mask_3_graphics_61,x:243.8,y:236.1}).wait(1).to({graphics:mask_3_graphics_62,x:243.8,y:236.1}).wait(1).to({graphics:mask_3_graphics_63,x:243.8,y:236.1}).wait(1).to({graphics:mask_3_graphics_64,x:243.7,y:236.1}).wait(1).to({graphics:mask_3_graphics_65,x:243.7,y:236.1}).wait(1).to({graphics:mask_3_graphics_66,x:243.7,y:236.1}).wait(1).to({graphics:mask_3_graphics_67,x:243.7,y:236.1}).wait(1).to({graphics:mask_3_graphics_68,x:243.7,y:236.1}).wait(1).to({graphics:mask_3_graphics_69,x:243.7,y:236.1}).wait(1).to({graphics:mask_3_graphics_70,x:243.7,y:236.1}).wait(1).to({graphics:mask_3_graphics_71,x:243.7,y:236.1}).wait(1).to({graphics:mask_3_graphics_72,x:243.7,y:236}).wait(1).to({graphics:mask_3_graphics_73,x:243.7,y:235.9}).wait(1).to({graphics:mask_3_graphics_74,x:243.7,y:235.8}).wait(1).to({graphics:mask_3_graphics_75,x:243.7,y:235.7}).wait(1).to({graphics:mask_3_graphics_76,x:243.7,y:235.6}).wait(1).to({graphics:mask_3_graphics_77,x:243.7,y:235.4}).wait(1).to({graphics:mask_3_graphics_78,x:243.7,y:235.2}).wait(1).to({graphics:mask_3_graphics_79,x:243.7,y:235}).wait(1).to({graphics:mask_3_graphics_80,x:243.8,y:234.8}).wait(1).to({graphics:mask_3_graphics_81,x:243.8,y:234.6}).wait(1).to({graphics:mask_3_graphics_82,x:243.8,y:234.3}).wait(1).to({graphics:mask_3_graphics_83,x:243.8,y:234}).wait(1).to({graphics:mask_3_graphics_84,x:243.8,y:233.7}).wait(1).to({graphics:mask_3_graphics_85,x:243.8,y:233.4}).wait(1).to({graphics:mask_3_graphics_86,x:243.8,y:233.1}).wait(1).to({graphics:mask_3_graphics_87,x:243.8,y:232.7}).wait(1).to({graphics:mask_3_graphics_88,x:243.8,y:232.3}).wait(1).to({graphics:mask_3_graphics_89,x:243.8,y:231.9}).wait(1).to({graphics:mask_3_graphics_90,x:243.9,y:231.5}).wait(1).to({graphics:mask_3_graphics_91,x:243.9,y:231.1}).wait(1).to({graphics:mask_3_graphics_92,x:243.9,y:230.6}).wait(1).to({graphics:mask_3_graphics_93,x:243.9,y:230.2}).wait(1).to({graphics:mask_3_graphics_94,x:243.9,y:229.7}).wait(1).to({graphics:mask_3_graphics_95,x:243.9,y:229.2}).wait(1).to({graphics:mask_3_graphics_96,x:243.9,y:228.6}).wait(1).to({graphics:mask_3_graphics_97,x:243.8,y:228.1}).wait(1).to({graphics:mask_3_graphics_98,x:243.8,y:227.5}).wait(1).to({graphics:mask_3_graphics_99,x:243.8,y:227}).wait(1).to({graphics:mask_3_graphics_100,x:243.8,y:226.2}).wait(1).to({graphics:mask_3_graphics_101,x:243.7,y:225.4}).wait(1).to({graphics:mask_3_graphics_102,x:243.7,y:224.6}).wait(1).to({graphics:mask_3_graphics_103,x:243.7,y:223.8}).wait(1).to({graphics:mask_3_graphics_104,x:243.7,y:222.9}).wait(1).to({graphics:mask_3_graphics_105,x:243.6,y:222}).wait(1).to({graphics:mask_3_graphics_106,x:243.6,y:221.1}).wait(1).to({graphics:mask_3_graphics_107,x:243.6,y:220.1}).wait(1).to({graphics:mask_3_graphics_108,x:243.6,y:219.2}).wait(1).to({graphics:mask_3_graphics_109,x:243.5,y:218.2}).wait(1).to({graphics:mask_3_graphics_110,x:243.5,y:217.1}).wait(1).to({graphics:mask_3_graphics_111,x:243.5,y:216.1}).wait(1).to({graphics:mask_3_graphics_112,x:243.4,y:215}).wait(1).to({graphics:mask_3_graphics_113,x:243.4,y:213.9}).wait(1).to({graphics:mask_3_graphics_114,x:243.4,y:212.8}).wait(1).to({graphics:mask_3_graphics_115,x:243.3,y:211.7}).wait(1).to({graphics:mask_3_graphics_116,x:243.3,y:210.5}).wait(1).to({graphics:mask_3_graphics_117,x:243.3,y:209.3}).wait(1).to({graphics:mask_3_graphics_118,x:243.3,y:208.1}).wait(1).to({graphics:mask_3_graphics_119,x:243.3,y:206.8}).wait(1).to({graphics:mask_3_graphics_120,x:243.3,y:205.6}).wait(1).to({graphics:mask_3_graphics_121,x:243.3,y:204.3}).wait(1).to({graphics:mask_3_graphics_122,x:243.3,y:203}).wait(1).to({graphics:mask_3_graphics_123,x:243.3,y:201.7}).wait(1).to({graphics:mask_3_graphics_124,x:243.3,y:200.3}).wait(1).to({graphics:mask_3_graphics_125,x:243.3,y:198.9}).wait(1).to({graphics:mask_3_graphics_126,x:243.3,y:197.6}).wait(1).to({graphics:mask_3_graphics_127,x:243.3,y:196.2}).wait(1).to({graphics:mask_3_graphics_128,x:243.4,y:194.7}).wait(1).to({graphics:mask_3_graphics_129,x:243.4,y:193.3}).wait(1).to({graphics:mask_3_graphics_130,x:243.4,y:192}).wait(1).to({graphics:mask_3_graphics_131,x:243.4,y:190.7}).wait(1).to({graphics:mask_3_graphics_132,x:243.4,y:189.3}).wait(1).to({graphics:mask_3_graphics_133,x:243.5,y:188}).wait(1).to({graphics:mask_3_graphics_134,x:243.5,y:186.7}).wait(1).to({graphics:mask_3_graphics_135,x:243.5,y:185.3}).wait(1).to({graphics:mask_3_graphics_136,x:243.5,y:183.9}).wait(1).to({graphics:mask_3_graphics_137,x:243.6,y:182.6}).wait(1).to({graphics:mask_3_graphics_138,x:243.6,y:181.2}).wait(1).to({graphics:mask_3_graphics_139,x:243.6,y:179.8}).wait(1).to({graphics:mask_3_graphics_140,x:243.6,y:178.3}).wait(1).to({graphics:mask_3_graphics_141,x:243.6,y:176.9}).wait(1).to({graphics:mask_3_graphics_142,x:243.6,y:175.5}).wait(1).to({graphics:mask_3_graphics_143,x:243.7,y:174}).wait(1).to({graphics:mask_3_graphics_144,x:243.7,y:172.6}).wait(1).to({graphics:mask_3_graphics_145,x:243.7,y:171.1}).wait(1).to({graphics:mask_3_graphics_146,x:243.7,y:169.6}).wait(1).to({graphics:mask_3_graphics_147,x:243.7,y:168.2}).wait(1).to({graphics:mask_3_graphics_148,x:243.7,y:166.7}).wait(1).to({graphics:mask_3_graphics_149,x:243.7,y:165.2}).wait(1).to({graphics:mask_3_graphics_150,x:243.7,y:163.6}).wait(1).to({graphics:mask_3_graphics_151,x:243.7,y:162.1}).wait(1).to({graphics:mask_3_graphics_152,x:243.7,y:160.6}).wait(1).to({graphics:mask_3_graphics_153,x:243.7,y:159.1}).wait(1).to({graphics:mask_3_graphics_154,x:243.7,y:157.5}).wait(1).to({graphics:mask_3_graphics_155,x:243.7,y:156}).wait(1).to({graphics:mask_3_graphics_156,x:243.6,y:154.5}).wait(1).to({graphics:mask_3_graphics_157,x:243.6,y:152.9}).wait(1).to({graphics:mask_3_graphics_158,x:243.6,y:151.3}).wait(1).to({graphics:mask_3_graphics_159,x:243.6,y:149.8}).wait(1).to({graphics:mask_3_graphics_160,x:243.6,y:148.2}).wait(1).to({graphics:mask_3_graphics_161,x:243.6,y:146.7}).wait(1).to({graphics:mask_3_graphics_162,x:243.6,y:145.1}).wait(1).to({graphics:mask_3_graphics_163,x:243.6,y:143.5}).wait(1).to({graphics:mask_3_graphics_164,x:243.6,y:141.9}).wait(1).to({graphics:mask_3_graphics_165,x:243.6,y:140.3}).wait(1).to({graphics:mask_3_graphics_166,x:243.6,y:138.8}).wait(1).to({graphics:mask_3_graphics_167,x:243.6,y:137.2}).wait(1).to({graphics:mask_3_graphics_168,x:243.6,y:135.6}).wait(1).to({graphics:mask_3_graphics_169,x:243.6,y:133.9}).wait(306));

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(20,1,1).p("AWTxtQiBjJjbhXQjahYjbAhQjaAhjVBZQjTBYjDCLQjECLipCmQiqCliHCqQiHCphsC/QhsC+hTDXQhTDXghEMQggELA5DCQAnCCBWCG");
	this.shape_4.setTransform(257.3,252.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(20,1,1).p("ATq1VQiCjKjahXQjbhXjaAhQjbAhjUBYQjUBZjDCLQjDCLiqClQiqCliHCqQiHCqhsC/QhsC/hTDWQhTDXghELQggELA6DCQA5DCCiDJQChDJDyBGQDyBGDsgHQDsgHDUhKQDThJDMhrQDMhrCniEQCoiECZiVQCZiWB7iMQB6iMBnho");
	this.shape_5.setTransform(274.3,275.7);

	var maskedShapeInstanceList = [this.shape_4,this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4}]},9).to({state:[{t:this.shape_5}]},145).wait(321));

	// Letter
	this.instance_2 = new lib.C("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(275,275);
	this.instance_2.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(475));

	// Background
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_6.setTransform(275,275,3.373,2.543);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_7.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).wait(475));

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