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


(lib.V = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A15bIQiBiLAAjyQAAioCil8IHFu7IDXoSQBckLAAiIQAAjUieiHQiYiBjUAAQhCAAh0A0IiBAzIiHBBQiiBahGAAQiOAAAAh0QAAhWBjhZQBWhMCRhFQEniLDDAAQCpAACbA4QCVA7B0BrQB3BpBCCOQBCCYAACsQAADAhmE0Ij1JYQmQM/hxEgQg/C4AAAhQAADECzAAQHLgBGXudIIyzrIDknCQCLjuCYieQCvi9DNhgQDhhtEPAAQCiAAAACbQAACiiiAAQjUAAiyBjQiiBaiLClQh3CHhxDKIivFoIo4TrQjuIOi5DeQiRCvisBcQjABrjhAAQjuAAiBiLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-195.1,-187.5,390.3,375);


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


(lib.ar2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(48.5,-50.6,1,1,65.5,0,0,0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0.1,rotation:31.8,guide:{path:[48.5,-50.4,-9.2,-28.3,-42.7,42.1]}},59).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AA1kPIBIhMICkCaIhIBMg");
	var mask_graphics_1 = new cjs.Graphics().p("Ah8geIBWhcICkCZIhYBcg");
	var mask_graphics_2 = new cjs.Graphics().p("AiEgWIBmhsICjCZIhmBsg");
	var mask_graphics_3 = new cjs.Graphics().p("AiMgOIB1h8ICkCZIh1B8g");
	var mask_graphics_4 = new cjs.Graphics().p("AiTgGICEiMICjCZIiECMg");
	var mask_graphics_5 = new cjs.Graphics().p("AibABICUibICjCaIiUCbg");
	var mask_graphics_6 = new cjs.Graphics().p("AiiAJICiirICjCaIiiCrg");
	var mask_graphics_7 = new cjs.Graphics().p("AiqARICxi7ICkCaIixC7g");
	var mask_graphics_8 = new cjs.Graphics().p("AixAZIC/jLICkCbIi/DKg");
	var mask_graphics_9 = new cjs.Graphics().p("Ai5AhIDPjbICkCbIjPDag");
	var mask_graphics_10 = new cjs.Graphics().p("AjAApIDdjrIClCaIjeDrg");
	var mask_graphics_11 = new cjs.Graphics().p("AjIAxIDtj7ICkCaIjtD8g");
	var mask_graphics_12 = new cjs.Graphics().p("AjQA4ID8kKIClCaIj8EMg");
	var mask_graphics_13 = new cjs.Graphics().p("AjXBAIELkaICkCaIkLEbg");
	var mask_graphics_14 = new cjs.Graphics().p("AjeBJIEZkrIClCaIkbErg");
	var mask_graphics_15 = new cjs.Graphics().p("AjmBRIEpk7ICkCaIkpE8g");
	var mask_graphics_16 = new cjs.Graphics().p("AjtBZIE3lLIClCaIk4FLg");
	var mask_graphics_17 = new cjs.Graphics().p("Aj1BhIFHlbICkCaIlHFbg");
	var mask_graphics_18 = new cjs.Graphics().p("Aj9BpIFXlrICkCaIlWFrg");
	var mask_graphics_19 = new cjs.Graphics().p("AkEBxIFll7ICkCaIllF7g");
	var mask_graphics_20 = new cjs.Graphics().p("AkMB5IF1mLICkCaIl1GLg");
	var mask_graphics_21 = new cjs.Graphics().p("AkTCBIGDmbICkCaImDGbg");
	var mask_graphics_22 = new cjs.Graphics().p("AkbCJIGTmrICkCaImTGrg");
	var mask_graphics_23 = new cjs.Graphics().p("AkiCRIGhm8IClCbImiG8g");
	var mask_graphics_24 = new cjs.Graphics().p("AkqCZIGxnMICkCbImxHLg");
	var mask_graphics_25 = new cjs.Graphics().p("AkxChIG/ncIClCbInAHbg");
	var mask_graphics_26 = new cjs.Graphics().p("Ak5CpIHPnsICkCbInPHsg");
	var mask_graphics_27 = new cjs.Graphics().p("AlBCxIHen8IClCbInfH8g");
	var mask_graphics_28 = new cjs.Graphics().p("AlIC5IHtoMICkCbIntILg");
	var mask_graphics_29 = new cjs.Graphics().p("AlPDBIH7ocIClCbIn9Ibg");
	var mask_graphics_30 = new cjs.Graphics().p("AlXDJIILosICkCbIoLIsg");
	var mask_graphics_31 = new cjs.Graphics().p("AlfDRIIao8IClCbIoaI8g");
	var mask_graphics_32 = new cjs.Graphics().p("AlnDYIIqpLICkCbIopJMg");
	var mask_graphics_33 = new cjs.Graphics().p("AluDgII4pbIClCbIo5Jbg");
	var mask_graphics_34 = new cjs.Graphics().p("Al2DpIJIpsICkCbIpIJrg");
	var mask_graphics_35 = new cjs.Graphics().p("Al9DxIJWp8IClCbIpXJ8g");
	var mask_graphics_36 = new cjs.Graphics().p("AmED4IJlqLICkCbIplKMg");
	var mask_graphics_37 = new cjs.Graphics().p("AmMEBIJ1qcICkCbIp1Kcg");
	var mask_graphics_38 = new cjs.Graphics().p("AmUEJIKEqsIClCbIqEKsg");
	var mask_graphics_39 = new cjs.Graphics().p("AmbERIKTq8ICkCbIqTK8g");
	var mask_graphics_40 = new cjs.Graphics().p("AmjEZIKirMIClCbIqiLMg");
	var mask_graphics_41 = new cjs.Graphics().p("AmqEhIKxrcICkCbIqxLcg");
	var mask_graphics_42 = new cjs.Graphics().p("AmyEpILArsIClCbIrBLsg");
	var mask_graphics_43 = new cjs.Graphics().p("Am5ExILPr8ICkCbIrPL8g");
	var mask_graphics_44 = new cjs.Graphics().p("AnBE5ILesMIClCcIrfMKg");
	var mask_graphics_45 = new cjs.Graphics().p("AnIFBILtscICkCcIrtMag");
	var mask_graphics_46 = new cjs.Graphics().p("AnQFJIL8ssIClCcIr8Mrg");
	var mask_graphics_47 = new cjs.Graphics().p("AnYFRIMMs8ICkCcIsLM7g");
	var mask_graphics_48 = new cjs.Graphics().p("AnfFZIMatMIClCcIsbNKg");
	var mask_graphics_49 = new cjs.Graphics().p("AnmFhIMptcICkCcIsqNag");
	var mask_graphics_50 = new cjs.Graphics().p("AnuFpIM5tsICkCbIs5Nrg");
	var mask_graphics_51 = new cjs.Graphics().p("An2FxINIt8IClCbItIN8g");
	var mask_graphics_52 = new cjs.Graphics().p("An9F5INXuMICkCbItXOMg");
	var mask_graphics_53 = new cjs.Graphics().p("AoFGBINmucIClCbItmOcg");
	var mask_graphics_54 = new cjs.Graphics().p("AoMGJIN1usICkCbIt1Osg");
	var mask_graphics_55 = new cjs.Graphics().p("AoUGRIOEu8IClCbIuEO8g");
	var mask_graphics_56 = new cjs.Graphics().p("AocGZIOUvMICkCbIuTPMg");
	var mask_graphics_57 = new cjs.Graphics().p("AojGhIOivcIClCbIujPcg");
	var mask_graphics_58 = new cjs.Graphics().p("AoqGpIOxvsICkCbIuxPsg");
	var mask_graphics_59 = new cjs.Graphics().p("AoyGxIPAv8IClCbIvAP8g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:28.9,y:-34.8}).wait(1).to({graphics:mask_graphics_1,x:45.2,y:-57.3}).wait(1).to({graphics:mask_graphics_2,x:44.5,y:-56.5}).wait(1).to({graphics:mask_graphics_3,x:43.7,y:-55.7}).wait(1).to({graphics:mask_graphics_4,x:42.9,y:-54.9}).wait(1).to({graphics:mask_graphics_5,x:42.2,y:-54.1}).wait(1).to({graphics:mask_graphics_6,x:41.4,y:-53.3}).wait(1).to({graphics:mask_graphics_7,x:40.7,y:-52.5}).wait(1).to({graphics:mask_graphics_8,x:39.9,y:-51.7}).wait(1).to({graphics:mask_graphics_9,x:39.2,y:-50.9}).wait(1).to({graphics:mask_graphics_10,x:38.4,y:-50.1}).wait(1).to({graphics:mask_graphics_11,x:37.7,y:-49.3}).wait(1).to({graphics:mask_graphics_12,x:36.9,y:-48.5}).wait(1).to({graphics:mask_graphics_13,x:36.2,y:-47.7}).wait(1).to({graphics:mask_graphics_14,x:35.4,y:-46.9}).wait(1).to({graphics:mask_graphics_15,x:34.7,y:-46.1}).wait(1).to({graphics:mask_graphics_16,x:33.9,y:-45.4}).wait(1).to({graphics:mask_graphics_17,x:33.1,y:-44.6}).wait(1).to({graphics:mask_graphics_18,x:32.4,y:-43.8}).wait(1).to({graphics:mask_graphics_19,x:31.6,y:-43}).wait(1).to({graphics:mask_graphics_20,x:30.9,y:-42.2}).wait(1).to({graphics:mask_graphics_21,x:30.1,y:-41.4}).wait(1).to({graphics:mask_graphics_22,x:29.4,y:-40.6}).wait(1).to({graphics:mask_graphics_23,x:28.6,y:-39.8}).wait(1).to({graphics:mask_graphics_24,x:27.9,y:-39}).wait(1).to({graphics:mask_graphics_25,x:27.1,y:-38.2}).wait(1).to({graphics:mask_graphics_26,x:26.4,y:-37.4}).wait(1).to({graphics:mask_graphics_27,x:25.6,y:-36.6}).wait(1).to({graphics:mask_graphics_28,x:24.9,y:-35.8}).wait(1).to({graphics:mask_graphics_29,x:24.1,y:-35}).wait(1).to({graphics:mask_graphics_30,x:23.4,y:-34.2}).wait(1).to({graphics:mask_graphics_31,x:22.6,y:-33.4}).wait(1).to({graphics:mask_graphics_32,x:21.9,y:-32.6}).wait(1).to({graphics:mask_graphics_33,x:21.1,y:-31.8}).wait(1).to({graphics:mask_graphics_34,x:20.4,y:-31}).wait(1).to({graphics:mask_graphics_35,x:19.6,y:-30.2}).wait(1).to({graphics:mask_graphics_36,x:18.9,y:-29.4}).wait(1).to({graphics:mask_graphics_37,x:18.1,y:-28.6}).wait(1).to({graphics:mask_graphics_38,x:17.3,y:-27.8}).wait(1).to({graphics:mask_graphics_39,x:16.6,y:-27}).wait(1).to({graphics:mask_graphics_40,x:15.8,y:-26.2}).wait(1).to({graphics:mask_graphics_41,x:15.1,y:-25.4}).wait(1).to({graphics:mask_graphics_42,x:14.3,y:-24.6}).wait(1).to({graphics:mask_graphics_43,x:13.6,y:-23.8}).wait(1).to({graphics:mask_graphics_44,x:12.8,y:-23}).wait(1).to({graphics:mask_graphics_45,x:12.1,y:-22.2}).wait(1).to({graphics:mask_graphics_46,x:11.3,y:-21.4}).wait(1).to({graphics:mask_graphics_47,x:10.6,y:-20.6}).wait(1).to({graphics:mask_graphics_48,x:9.8,y:-19.8}).wait(1).to({graphics:mask_graphics_49,x:9.1,y:-19}).wait(1).to({graphics:mask_graphics_50,x:8.3,y:-18.2}).wait(1).to({graphics:mask_graphics_51,x:7.5,y:-17.4}).wait(1).to({graphics:mask_graphics_52,x:6.8,y:-16.7}).wait(1).to({graphics:mask_graphics_53,x:6,y:-15.9}).wait(1).to({graphics:mask_graphics_54,x:5.3,y:-15.1}).wait(1).to({graphics:mask_graphics_55,x:4.5,y:-14.3}).wait(1).to({graphics:mask_graphics_56,x:3.8,y:-13.5}).wait(1).to({graphics:mask_graphics_57,x:3,y:-12.7}).wait(1).to({graphics:mask_graphics_58,x:2.3,y:-11.9}).wait(1).to({graphics:mask_graphics_59,x:1.5,y:-11.1}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AnIHQQFQrCJBjd");
	this.shape.setTransform(2.8,-4.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34.2,-61.9,21.2,20.3);


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
(lib.WS_Cursive_V = function(mode,startPosition,loop) {
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
	this.instance.setTransform(99.5,128.8,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[99.6,128.9,150.8,91.3,197.1,116,243.3,140.7,227.7,186.8,212.1,232.7,204.3,249,204.1,249.5,203.9,250,182.2,302.3,160.4,347.7,130.3,410.2,139.6,426.6,149,443,164.8,445.5]}},240).wait(16).to({startPosition:0},0).to({guide:{path:[164.9,445.4,190.6,454.2,216.1,432.6,242.4,410.3,268.2,351.5,294.1,292.7,317.8,239.3,341.6,186.1,370.5,147.4,399.4,108.6,454.7,104.4]}},209).wait(15).to({startPosition:0},0).to({guide:{path:[455,104,486.8,65.5,509,56.6,531.3,47.7,543.9,68.4,569.1,110,592.5,110.7,615.7,111.3,649.4,101.2]}},65).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(162.8,444.9,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},240).wait(16).to({_off:false,x:455.7,y:103.9},0).to({_off:true},209).wait(81));

	// Layer 16
	this.instance_1 = new lib.ar2("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(280.3,424.3,1,1,178.5,0,0,0.7,-0.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(265).to({_off:false},0).wait(290));

	// Layer 14 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_457 = new cjs.Graphics().p("Ai9ExIAAphIF7AAIAAJhg");
	var mask_graphics_458 = new cjs.Graphics().p("AjLExIAAphIGXAAIAAJhg");
	var mask_graphics_459 = new cjs.Graphics().p("AjZExIAAphIGyAAIAAJhg");
	var mask_graphics_460 = new cjs.Graphics().p("AjnExIAAphIHPAAIAAJhg");
	var mask_graphics_461 = new cjs.Graphics().p("Aj0ExIAAphIHpAAIAAJhg");
	var mask_graphics_462 = new cjs.Graphics().p("AkCExIAAphIIFAAIAAJhg");
	var mask_graphics_463 = new cjs.Graphics().p("AkQExIAAphIIhAAIAAJhg");
	var mask_graphics_464 = new cjs.Graphics().p("AkeExIAAphII9AAIAAJhg");
	var mask_graphics_465 = new cjs.Graphics().p("AkrExIAAphIJYAAIAAJhg");
	var mask_graphics_466 = new cjs.Graphics().p("Ak5ExIAAphIJzAAIAAJhg");
	var mask_graphics_467 = new cjs.Graphics().p("AlHExIAAphIKPAAIAAJhg");
	var mask_graphics_468 = new cjs.Graphics().p("AlVExIAAphIKrAAIAAJhg");
	var mask_graphics_469 = new cjs.Graphics().p("AljExIAAphILHAAIAAJhg");
	var mask_graphics_470 = new cjs.Graphics().p("AlxExIAAphILjAAIAAJhg");
	var mask_graphics_471 = new cjs.Graphics().p("Al+ExIAAphIL9AAIAAJhg");
	var mask_graphics_472 = new cjs.Graphics().p("AmMExIAAphIMZAAIAAJhg");
	var mask_graphics_473 = new cjs.Graphics().p("AmaExIAAphIM1AAIAAJhg");
	var mask_graphics_474 = new cjs.Graphics().p("AXNKtIAApiINSAAIAAJig");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(457).to({graphics:mask_graphics_457,x:399,y:106.5}).wait(1).to({graphics:mask_graphics_458,x:400.5,y:106.5}).wait(1).to({graphics:mask_graphics_459,x:402,y:106.5}).wait(1).to({graphics:mask_graphics_460,x:403.5,y:106.5}).wait(1).to({graphics:mask_graphics_461,x:405,y:106.5}).wait(1).to({graphics:mask_graphics_462,x:406.5,y:106.5}).wait(1).to({graphics:mask_graphics_463,x:408,y:106.5}).wait(1).to({graphics:mask_graphics_464,x:409.5,y:106.5}).wait(1).to({graphics:mask_graphics_465,x:411,y:106.5}).wait(1).to({graphics:mask_graphics_466,x:412.5,y:106.5}).wait(1).to({graphics:mask_graphics_467,x:414,y:106.5}).wait(1).to({graphics:mask_graphics_468,x:415.5,y:106.5}).wait(1).to({graphics:mask_graphics_469,x:417,y:106.5}).wait(1).to({graphics:mask_graphics_470,x:418.5,y:106.5}).wait(1).to({graphics:mask_graphics_471,x:420,y:106.5}).wait(1).to({graphics:mask_graphics_472,x:421.5,y:106.5}).wait(1).to({graphics:mask_graphics_473,x:423,y:106.5}).wait(1).to({graphics:mask_graphics_474,x:233.5,y:68.5}).wait(81));

	// Layer 13
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(20,1,1).p("A2kaxQFNABCtiRQEJjeECpMQEDpMDjoCQDkoCEQmMQEQmLJahA");
	this.shape_1.setTransform(309.8,275.6);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(457).to({_off:false},0).wait(98));

	// Layer 12 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_419 = new cjs.Graphics().p("ANpR3Ql3kchGnOMAj6gE8QA5HQkcF3QkjF+ncBCQhYAMhUAAQl2AAk5jtg");
	var mask_1_graphics_420 = new cjs.Graphics().p("ANIRdQlskqg1nRMAkDgDnQAoHSkpFtQkxFzneAwQhBAHg/AAQmRAAlBkHg");
	var mask_1_graphics_421 = new cjs.Graphics().p("AMoRBQlhk3gknSMAkLgCSQAWHUk3FhQk+FonfAeQgqACgpAAQmsAAlJkig");
	var mask_1_graphics_422 = new cjs.Graphics().p("AMJQlQlWlFgTnTMAkPgA8QAFHUlDFVQlMFcngANIgiAAQnLAAlPk+g");
	var mask_1_graphics_423 = new cjs.Graphics().p("AYbVjQnhgFlPlYQlJlQgCnUMAkPAAaQgMHUlQFJQlSFKnXAAIgPAAg");
	var mask_1_graphics_424 = new cjs.Graphics().p("AXxViQnggXlDlkQk8lcAQnUMAkMABwQgdHTlcE8QlMEtm4AAQggAAgggBg");
	var mask_1_graphics_425 = new cjs.Graphics().p("AXIVfQnegpk2lvQkvloAhnTMAkHADFQgvHSlnEvQlFERmbAAQg3AAg4gEg");
	var mask_1_graphics_426 = new cjs.Graphics().p("AWhVaQndg6kol7QkilzAynRMAj+AEbQg/HPlzEiQk8D3mBAAQhMAAhOgKg");
	var mask_1_graphics_427 = new cjs.Graphics().p("AV6VUQnbhMkZmFQkUl+BDnOMAjyAFvQhQHMl9EVQkzDdlnAAQhhAAhlgQg");
	var mask_1_graphics_428 = new cjs.Graphics().p("AVUVMQnXhekLmPQkGmHBUnMMAjjAHEQhhHJmHEGQkoDFlPAAQh2AAh6gYg");
	var mask_1_graphics_429 = new cjs.Graphics().p("AUvVDQnThvj8mZQj3mRBlnHMAjRAIWQhzHGmQD3QkcCvk4AAQiKAAiPgig");
	var mask_1_graphics_430 = new cjs.Graphics().p("AUMU4QnQiAjsmiQjomaB2nDMAi7AJpQiDHBmZDoQkPCakjAAQidAAiigtg");
	var mask_1_graphics_431 = new cjs.Graphics().p("ATpUsQnKiSjdmqQjZmiCHm+MAijAK7QiUG8mhDZQkCCFkNAAQiwAAi2g5g");
	var mask_1_graphics_432 = new cjs.Graphics().p("ATIUeQnEiijOmyQjJmqCXm5MAiIAMMQikG2mpDKQjzByj4AAQjEAAjIhHg");
	var mask_1_graphics_433 = new cjs.Graphics().p("ASoUPQm+izi9m5Qi5mxCnm0MAhpANdQi0GwmwC5QjjBhjkAAQjYAAjZhWg");
	var mask_1_graphics_434 = new cjs.Graphics().p("ASJT+Qm3jDisnAQiqm3C4mtMAhIAOrQjEGpm3CqQjSBQjRAAQjsAAjphng");
	var mask_1_graphics_435 = new cjs.Graphics().p("ARsTsQmwjTibnGQiZm9DHmmMAgkAP5QjUGhm9CZQjBBCi9AAQkAAAj4h5g");
	var mask_1_graphics_436 = new cjs.Graphics().p("ARQTZQmnjjiLnMQiJnCDXmfIf9RGQjjGZnCCJQivA0ipAAQkVAAkHiMg");
	var mask_1_graphics_437 = new cjs.Graphics().p("AQ2TEQmfjyh6nRQh4nHDmmWIfTSQQjyGRnGB4QicAoiWAAQkqAAkUihg");
	var mask_1_graphics_438 = new cjs.Graphics().p("AQdSuQmWkBhpnVQhmnLD1mOIemTaQkAGHnLBnQiIAeiCAAQlBAAkgi3g");
	var mask_1_graphics_439 = new cjs.Graphics().p("AQFSXQmLkQhYnZQhVnNEDmGId3UiQkPF9nOBWQhzAVhuAAQlYAAksjOg");
	var mask_1_graphics_440 = new cjs.Graphics().p("APwR+QmCkehGnbQhEnRERl7IdFVnQkcFznSBEQhcAOhaAAQlwAAk2jng");
	var mask_1_graphics_441 = new cjs.Graphics().p("APbRkQl3ksg0neQgznTEflwIcRWqQkqFpnTAzQhHAIhEAAQmKAAlAkBg");
	var mask_1_graphics_442 = new cjs.Graphics().p("APIRJQlrk6ginfQginUEslnIbaXtQk3FdnVAiQgvAEguAAQmmAAlIkcg");
	var mask_1_graphics_443 = new cjs.Graphics().p("AO3QtQlflIgRnfQgRnWE6lbIahYtQlEFRnWARIguABQnDAAlPk4g");
	var mask_1_graphics_444 = new cjs.Graphics().p("AbbVlQnggBlTlVQlTlUABngQAAnWFHlPIZlZqQlQFFnVAAIgCAAg");
	var mask_1_graphics_445 = new cjs.Graphics().p("AbAVkQnggTlGlgQlGlhASngQATnVFSlDIYnalQlJEom2AAIgzgBg");
	var mask_1_graphics_446 = new cjs.Graphics().p("AamViQnfglk5lsQk5ltAknfQAknUFek2IXnbeQlBEMmZAAQgxAAgxgDg");
	var mask_1_graphics_447 = new cjs.Graphics().p("AaMVeQndg3ksl3Qkrl4A2ndQA1nTFpkpIWmcVQk5Dyl+AAQhGAAhJgIg");
	var mask_1_graphics_448 = new cjs.Graphics().p("AZzVYQnbhIkdmDQkemCBInbQBGnQF0kcIVidKQkvDYllAAQhbAAhfgOg");
	var mask_1_graphics_449 = new cjs.Graphics().p("AZbVRQnYhakPmNQkPmMBZnYQBXnOF/kNIUbd7QkkDBlMAAQhwAAh0gWg");
	var mask_1_graphics_450 = new cjs.Graphics().p("AZDVIQnUhrkAmWQkAmXBqnTQBonLGIj/ITUeqQkYCqk1AAQiEAAiJgfg");
	var mask_1_graphics_451 = new cjs.Graphics().p("AYsU+QnQh8jxmgQjxmgB8nPQB5nHGRjwISLfWQkLCVkfAAQiYAAidgpg");
	var mask_1_graphics_452 = new cjs.Graphics().p("AYWUyQnLiNjimpQjhmoCNnKQCKnCGZjhIRAf/Qj9CCkKAAQirAAiwg2g");
	var mask_1_graphics_453 = new cjs.Graphics().p("AYAUlQnFiejSmxQjRmwCdnFQCbm8GijSMAPzAgmQjuBvj1AAQi/AAjDhDg");
	var mask_1_graphics_454 = new cjs.Graphics().p("AXsUWQnAivjBm4QjBm3Cum/QCrm2GpjDMAOlAhKQjeBejhAAQjSAAjUhSg");
	var mask_1_graphics_455 = new cjs.Graphics().p("AXYUGQm5i/iwm/Qixm/C+m3QC7mwGwizMANWAhsQjNBOjNAAQjmAAjlhjg");
	var mask_1_graphics_456 = new cjs.Graphics().p("AXGT0QmyjPignFQihnFDPmwQDLmpG2iiMAMGAiJQi8BAi5AAQj6AAj0h1g");
	var mask_1_graphics_457 = new cjs.Graphics().p("AW0ThQmqjfiPnKQiQnLDfmoQDamhG8iSMAK1AikQiqAzimAAQkPAAkCiIg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(419).to({graphics:mask_1_graphics_419,x:273.5,y:138}).wait(1).to({graphics:mask_1_graphics_420,x:273.5,y:138}).wait(1).to({graphics:mask_1_graphics_421,x:273.5,y:137.9}).wait(1).to({graphics:mask_1_graphics_422,x:273.5,y:137.9}).wait(1).to({graphics:mask_1_graphics_423,x:273.5,y:137.9}).wait(1).to({graphics:mask_1_graphics_424,x:273.4,y:137.9}).wait(1).to({graphics:mask_1_graphics_425,x:273.3,y:138}).wait(1).to({graphics:mask_1_graphics_426,x:273,y:138}).wait(1).to({graphics:mask_1_graphics_427,x:272.7,y:138}).wait(1).to({graphics:mask_1_graphics_428,x:272.3,y:138}).wait(1).to({graphics:mask_1_graphics_429,x:271.9,y:138.1}).wait(1).to({graphics:mask_1_graphics_430,x:271.3,y:138.1}).wait(1).to({graphics:mask_1_graphics_431,x:270.7,y:138.1}).wait(1).to({graphics:mask_1_graphics_432,x:270,y:138.1}).wait(1).to({graphics:mask_1_graphics_433,x:269.2,y:138.1}).wait(1).to({graphics:mask_1_graphics_434,x:268.4,y:138.1}).wait(1).to({graphics:mask_1_graphics_435,x:267.5,y:138.1}).wait(1).to({graphics:mask_1_graphics_436,x:266.5,y:138.1}).wait(1).to({graphics:mask_1_graphics_437,x:265.4,y:138.1}).wait(1).to({graphics:mask_1_graphics_438,x:264.3,y:138.1}).wait(1).to({graphics:mask_1_graphics_439,x:263.1,y:138.1}).wait(1).to({graphics:mask_1_graphics_440,x:261.8,y:138.1}).wait(1).to({graphics:mask_1_graphics_441,x:260.5,y:138.1}).wait(1).to({graphics:mask_1_graphics_442,x:259.1,y:138.1}).wait(1).to({graphics:mask_1_graphics_443,x:257.7,y:138.1}).wait(1).to({graphics:mask_1_graphics_444,x:256.2,y:138.1}).wait(1).to({graphics:mask_1_graphics_445,x:254.6,y:138.1}).wait(1).to({graphics:mask_1_graphics_446,x:253,y:138.1}).wait(1).to({graphics:mask_1_graphics_447,x:251.4,y:138.2}).wait(1).to({graphics:mask_1_graphics_448,x:249.7,y:138.2}).wait(1).to({graphics:mask_1_graphics_449,x:247.9,y:138.3}).wait(1).to({graphics:mask_1_graphics_450,x:246.1,y:138.3}).wait(1).to({graphics:mask_1_graphics_451,x:244.3,y:138.3}).wait(1).to({graphics:mask_1_graphics_452,x:242.4,y:138.4}).wait(1).to({graphics:mask_1_graphics_453,x:240.5,y:138.4}).wait(1).to({graphics:mask_1_graphics_454,x:238.5,y:138.4}).wait(1).to({graphics:mask_1_graphics_455,x:236.5,y:138.5}).wait(1).to({graphics:mask_1_graphics_456,x:234.5,y:138.5}).wait(1).to({graphics:mask_1_graphics_457,x:232.5,y:138.5}).wait(98));

	// Layer 11
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(20,1,1).p("A2kaxQFNABCtiRQEJjeECpMQEDpMDjoCQDkoCEQmMQEQmLJahA");
	this.shape_2.setTransform(309.8,275.6);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(419).to({_off:false},0).wait(136));

	// Layer 10 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_295 = new cjs.Graphics().p("EgL2AlgIAAowMAmkAAAIAAIwg");
	var mask_2_graphics_296 = new cjs.Graphics().p("AzUEiIAApDMAmpAAAIAAJDg");
	var mask_2_graphics_297 = new cjs.Graphics().p("AzVEtIAApZMAmsAAAIAAJZg");
	var mask_2_graphics_298 = new cjs.Graphics().p("AzXE3IAAptMAmvAAAIAAJtg");
	var mask_2_graphics_299 = new cjs.Graphics().p("AzZFBIAAqBMAmzAAAIAAKBg");
	var mask_2_graphics_300 = new cjs.Graphics().p("AzbFLIAAqVMAm3AAAIAAKVg");
	var mask_2_graphics_301 = new cjs.Graphics().p("AzdFWIAAqrMAm7AAAIAAKrg");
	var mask_2_graphics_302 = new cjs.Graphics().p("AzfFgIAAq/MAm/AAAIAAK/g");
	var mask_2_graphics_303 = new cjs.Graphics().p("AzhFqIAArTMAnDAAAIAALTg");
	var mask_2_graphics_304 = new cjs.Graphics().p("AzjF0IAArnMAnHAAAIAALng");
	var mask_2_graphics_305 = new cjs.Graphics().p("AzlF+IAAr8MAnLAAAIAAL8g");
	var mask_2_graphics_306 = new cjs.Graphics().p("AznGJIAAsRMAnPAAAIAAMRg");
	var mask_2_graphics_307 = new cjs.Graphics().p("AzoGTIAAslMAnRAAAIAAMlg");
	var mask_2_graphics_308 = new cjs.Graphics().p("AzqGeIAAs6MAnWAAAIAAM6g");
	var mask_2_graphics_309 = new cjs.Graphics().p("AzsGoIAAtPMAnZAAAIAANPg");
	var mask_2_graphics_310 = new cjs.Graphics().p("AzuGyIAAtjMAndAAAIAANjg");
	var mask_2_graphics_311 = new cjs.Graphics().p("AzwG8IAAt3MAnhAAAIAAN3g");
	var mask_2_graphics_312 = new cjs.Graphics().p("AzyHHIAAuMMAnlAAAIAAOMg");
	var mask_2_graphics_313 = new cjs.Graphics().p("Az0HRIAAuhMAnpAAAIAAOhg");
	var mask_2_graphics_314 = new cjs.Graphics().p("Az2HbIAAu1MAntAAAIAAO1g");
	var mask_2_graphics_315 = new cjs.Graphics().p("Az4HlIAAvJMAnxAAAIAAPJg");
	var mask_2_graphics_316 = new cjs.Graphics().p("Az6HvIAAvdMAn1AAAIAAPdg");
	var mask_2_graphics_317 = new cjs.Graphics().p("Az7H6IAAvyMAn3AAAIAAPyg");
	var mask_2_graphics_318 = new cjs.Graphics().p("Az9IEIAAwHMAn8AAAIAAQHg");
	var mask_2_graphics_319 = new cjs.Graphics().p("Az/IOIAAwbMAn/AAAIAAQbg");
	var mask_2_graphics_320 = new cjs.Graphics().p("A0BIYIAAwvMAoDAAAIAAQvg");
	var mask_2_graphics_321 = new cjs.Graphics().p("A0DIjIAAxFMAoHAAAIAARFg");
	var mask_2_graphics_322 = new cjs.Graphics().p("A0FItIAAxZMAoLAAAIAARZg");
	var mask_2_graphics_323 = new cjs.Graphics().p("A0HI3IAAxtMAoPAAAIAARtg");
	var mask_2_graphics_324 = new cjs.Graphics().p("A0JJBIAAyBMAoTAAAIAASBg");
	var mask_2_graphics_325 = new cjs.Graphics().p("A0LJMIAAyXMAoXAAAIAASXg");
	var mask_2_graphics_326 = new cjs.Graphics().p("A0NJWIAAyrMAobAAAIAASrg");
	var mask_2_graphics_327 = new cjs.Graphics().p("A0OJgIAAy/MAoeAAAIAAS/g");
	var mask_2_graphics_328 = new cjs.Graphics().p("A0QJqIAAzTMAoiAAAIAATTg");
	var mask_2_graphics_329 = new cjs.Graphics().p("A0SJ0IAAznMAolAAAIAATng");
	var mask_2_graphics_330 = new cjs.Graphics().p("A0UJ/IAAz9MAopAAAIAAT9g");
	var mask_2_graphics_331 = new cjs.Graphics().p("A0WKJIAA0RMAotAAAIAAURg");
	var mask_2_graphics_332 = new cjs.Graphics().p("A0YKTIAA0lMAoxAAAIAAUlg");
	var mask_2_graphics_333 = new cjs.Graphics().p("A0aKdIAA05MAo1AAAIAAU5g");
	var mask_2_graphics_334 = new cjs.Graphics().p("A0cKoIAA1PMAo5AAAIAAVPg");
	var mask_2_graphics_335 = new cjs.Graphics().p("A0eKyIAA1jMAo9AAAIAAVjg");
	var mask_2_graphics_336 = new cjs.Graphics().p("A0fK8IAA13MAo/AAAIAAV3g");
	var mask_2_graphics_337 = new cjs.Graphics().p("A0hLGIAA2LMApEAAAIAAWLg");
	var mask_2_graphics_338 = new cjs.Graphics().p("A0jLRIAA2hMApHAAAIAAWhg");
	var mask_2_graphics_339 = new cjs.Graphics().p("A0lLbIAA21MApLAAAIAAW1g");
	var mask_2_graphics_340 = new cjs.Graphics().p("A0nLlIAA3JMApPAAAIAAXJg");
	var mask_2_graphics_341 = new cjs.Graphics().p("A0pLvIAA3dMApTAAAIAAXdg");
	var mask_2_graphics_342 = new cjs.Graphics().p("A0rL5IAA3yMApXAAAIAAXyg");
	var mask_2_graphics_343 = new cjs.Graphics().p("A0tMEIAA4HMApbAAAIAAYHg");
	var mask_2_graphics_344 = new cjs.Graphics().p("A0vMOIAA4bMApfAAAIAAYbg");
	var mask_2_graphics_345 = new cjs.Graphics().p("A0xMYIAA4vMApjAAAIAAYvg");
	var mask_2_graphics_346 = new cjs.Graphics().p("A0yMiIAA5EMApmAAAIAAZEg");
	var mask_2_graphics_347 = new cjs.Graphics().p("A00MtIAA5ZMAppAAAIAAZZg");
	var mask_2_graphics_348 = new cjs.Graphics().p("A02M3IAA5tMAptAAAIAAZtg");
	var mask_2_graphics_349 = new cjs.Graphics().p("A04NBIAA6BMApxAAAIAAaBg");
	var mask_2_graphics_350 = new cjs.Graphics().p("A06NMIAA6XMAp1AAAIAAaXg");
	var mask_2_graphics_351 = new cjs.Graphics().p("A08NWIAA6rMAp5AAAIAAarg");
	var mask_2_graphics_352 = new cjs.Graphics().p("A0+NgIAA6/MAp9AAAIAAa/g");
	var mask_2_graphics_353 = new cjs.Graphics().p("A1ANqIAA7TMAqBAAAIAAbTg");
	var mask_2_graphics_354 = new cjs.Graphics().p("A1CN0IAA7oMAqFAAAIAAbog");
	var mask_2_graphics_355 = new cjs.Graphics().p("A1EN/IAA79MAqJAAAIAAb9g");
	var mask_2_graphics_356 = new cjs.Graphics().p("A1FOJIAA8RMAqMAAAIAAcRg");
	var mask_2_graphics_357 = new cjs.Graphics().p("A1HOTIAA8lMAqPAAAIAAclg");
	var mask_2_graphics_358 = new cjs.Graphics().p("A1JOdIAA86MAqTAAAIAAc6g");
	var mask_2_graphics_359 = new cjs.Graphics().p("A1LOoIAA9PMAqXAAAIAAdPg");
	var mask_2_graphics_360 = new cjs.Graphics().p("A1NOyIAA9jMAqbAAAIAAdjg");
	var mask_2_graphics_361 = new cjs.Graphics().p("A1PO8IAA93MAqfAAAIAAd3g");
	var mask_2_graphics_362 = new cjs.Graphics().p("A1RPGIAA+MMAqjAAAIAAeMg");
	var mask_2_graphics_363 = new cjs.Graphics().p("A1TPRIAA+hMAqnAAAIAAehg");
	var mask_2_graphics_364 = new cjs.Graphics().p("A1VPbIAA+1MAqrAAAIAAe1g");
	var mask_2_graphics_365 = new cjs.Graphics().p("A1XPlIAA/JMAquAAAIAAfJg");
	var mask_2_graphics_366 = new cjs.Graphics().p("A1YPvIAA/dMAqxAAAIAAfdg");
	var mask_2_graphics_367 = new cjs.Graphics().p("A1aP5IAA/xMAq1AAAIAAfxg");
	var mask_2_graphics_368 = new cjs.Graphics().p("A1cQEMAAAggHMAq5AAAMAAAAgHg");
	var mask_2_graphics_369 = new cjs.Graphics().p("A1eQOMAAAggbMAq9AAAMAAAAgbg");
	var mask_2_graphics_370 = new cjs.Graphics().p("A1gQZMAAAggwMArBAAAMAAAAgwg");
	var mask_2_graphics_371 = new cjs.Graphics().p("A1iQjMAAAghFMArFAAAMAAAAhFg");
	var mask_2_graphics_372 = new cjs.Graphics().p("A1kQtMAAAghZMArJAAAMAAAAhZg");
	var mask_2_graphics_373 = new cjs.Graphics().p("A1mQ3MAAAghtMArNAAAMAAAAhtg");
	var mask_2_graphics_374 = new cjs.Graphics().p("A1oRCMAAAgiDMArRAAAMAAAAiDg");
	var mask_2_graphics_375 = new cjs.Graphics().p("A1qRMMAAAgiXMArUAAAMAAAAiXg");
	var mask_2_graphics_376 = new cjs.Graphics().p("A1rRWMAAAgirMArXAAAMAAAAirg");
	var mask_2_graphics_377 = new cjs.Graphics().p("A1tRgMAAAgi/MArbAAAMAAAAi/g");
	var mask_2_graphics_378 = new cjs.Graphics().p("A1vRqMAAAgjTMArfAAAMAAAAjTg");
	var mask_2_graphics_379 = new cjs.Graphics().p("A1xR1MAAAgjpMArjAAAMAAAAjpg");
	var mask_2_graphics_380 = new cjs.Graphics().p("A1zR/MAAAgj9MArnAAAMAAAAj9g");
	var mask_2_graphics_381 = new cjs.Graphics().p("A11SJMAAAgkRMArrAAAMAAAAkRg");
	var mask_2_graphics_382 = new cjs.Graphics().p("A13STMAAAgklMArvAAAMAAAAklg");
	var mask_2_graphics_383 = new cjs.Graphics().p("A15SeMAAAgk7MArzAAAMAAAAk7g");
	var mask_2_graphics_384 = new cjs.Graphics().p("A17SoMAAAglPMAr2AAAMAAAAlPg");
	var mask_2_graphics_385 = new cjs.Graphics().p("A19SyMAAAgljMAr7AAAMAAAAljg");
	var mask_2_graphics_386 = new cjs.Graphics().p("A1+S8MAAAgl3MAr9AAAMAAAAl3g");
	var mask_2_graphics_387 = new cjs.Graphics().p("A2ATHMAAAgmMMAsBAAAMAAAAmMg");
	var mask_2_graphics_388 = new cjs.Graphics().p("A2CTRMAAAgmhMAsFAAAMAAAAmhg");
	var mask_2_graphics_389 = new cjs.Graphics().p("A2ETbMAAAgm1MAsJAAAMAAAAm1g");
	var mask_2_graphics_390 = new cjs.Graphics().p("A2GTlMAAAgnJMAsNAAAMAAAAnJg");
	var mask_2_graphics_391 = new cjs.Graphics().p("A2ITvMAAAgneMAsRAAAMAAAAneg");
	var mask_2_graphics_392 = new cjs.Graphics().p("A2KT6MAAAgnzMAsVAAAMAAAAnzg");
	var mask_2_graphics_393 = new cjs.Graphics().p("A2MUEMAAAgoHMAsZAAAMAAAAoHg");
	var mask_2_graphics_394 = new cjs.Graphics().p("A2OUOMAAAgobMAscAAAMAAAAobg");
	var mask_2_graphics_395 = new cjs.Graphics().p("A2QUYMAAAgowMAshAAAMAAAAowg");
	var mask_2_graphics_396 = new cjs.Graphics().p("A2RUjMAAAgpFMAsjAAAMAAAApFg");
	var mask_2_graphics_397 = new cjs.Graphics().p("A2TUtMAAAgpZMAsnAAAMAAAApZg");
	var mask_2_graphics_398 = new cjs.Graphics().p("A2VU3MAAAgptMAsrAAAMAAAAptg");
	var mask_2_graphics_399 = new cjs.Graphics().p("A2XVBMAAAgqCMAsvAAAMAAAAqCg");
	var mask_2_graphics_400 = new cjs.Graphics().p("A2ZVMMAAAgqXMAszAAAMAAAAqXg");
	var mask_2_graphics_401 = new cjs.Graphics().p("A2bVWMAAAgqrMAs3AAAMAAAAqrg");
	var mask_2_graphics_402 = new cjs.Graphics().p("A2dVgMAAAgq/MAs7AAAMAAAAq/g");
	var mask_2_graphics_403 = new cjs.Graphics().p("A2fVqMAAAgrTMAs+AAAMAAAArTg");
	var mask_2_graphics_404 = new cjs.Graphics().p("A2hV0MAAAgrnMAtDAAAMAAAArng");
	var mask_2_graphics_405 = new cjs.Graphics().p("A2jV/MAAAgr9MAtHAAAMAAAAr9g");
	var mask_2_graphics_406 = new cjs.Graphics().p("A2kWJMAAAgsRMAtJAAAMAAAAsRg");
	var mask_2_graphics_407 = new cjs.Graphics().p("A2mWTMAAAgslMAtNAAAMAAAAslg");
	var mask_2_graphics_408 = new cjs.Graphics().p("A2oWdMAAAgs5MAtRAAAMAAAAs5g");
	var mask_2_graphics_409 = new cjs.Graphics().p("A2qWoMAAAgtPMAtVAAAMAAAAtPg");
	var mask_2_graphics_410 = new cjs.Graphics().p("A2sWyMAAAgtjMAtZAAAMAAAAtjg");
	var mask_2_graphics_411 = new cjs.Graphics().p("A2uW9MAAAgt5MAtdAAAMAAAAt5g");
	var mask_2_graphics_412 = new cjs.Graphics().p("A2wXHMAAAguNMAthAAAMAAAAuNg");
	var mask_2_graphics_413 = new cjs.Graphics().p("A2yXRMAAAguhMAtkAAAMAAAAuhg");
	var mask_2_graphics_414 = new cjs.Graphics().p("A20XbMAAAgu1MAtpAAAMAAAAu1g");
	var mask_2_graphics_415 = new cjs.Graphics().p("A22XlMAAAgvJMAtsAAAMAAAAvJg");
	var mask_2_graphics_416 = new cjs.Graphics().p("A23XwMAAAgvfMAtvAAAMAAAAvfg");
	var mask_2_graphics_417 = new cjs.Graphics().p("A25X6MAAAgvzMAtzAAAMAAAAvzg");
	var mask_2_graphics_418 = new cjs.Graphics().p("A27YEMAAAgwHMAt3AAAMAAAAwHg");
	var mask_2_graphics_419 = new cjs.Graphics().p("EgPhAlhMAAAgwbMAt7AAAMAAAAwbg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(295).to({graphics:mask_2_graphics_295,x:171,y:240}).wait(1).to({graphics:mask_2_graphics_296,x:218.8,y:451}).wait(1).to({graphics:mask_2_graphics_297,x:219,y:449.9}).wait(1).to({graphics:mask_2_graphics_298,x:219.2,y:448.9}).wait(1).to({graphics:mask_2_graphics_299,x:219.3,y:447.9}).wait(1).to({graphics:mask_2_graphics_300,x:219.5,y:446.9}).wait(1).to({graphics:mask_2_graphics_301,x:219.7,y:445.8}).wait(1).to({graphics:mask_2_graphics_302,x:219.9,y:444.8}).wait(1).to({graphics:mask_2_graphics_303,x:220.1,y:443.8}).wait(1).to({graphics:mask_2_graphics_304,x:220.3,y:442.8}).wait(1).to({graphics:mask_2_graphics_305,x:220.5,y:441.8}).wait(1).to({graphics:mask_2_graphics_306,x:220.7,y:440.8}).wait(1).to({graphics:mask_2_graphics_307,x:220.9,y:439.7}).wait(1).to({graphics:mask_2_graphics_308,x:221.1,y:438.7}).wait(1).to({graphics:mask_2_graphics_309,x:221.2,y:437.7}).wait(1).to({graphics:mask_2_graphics_310,x:221.4,y:436.7}).wait(1).to({graphics:mask_2_graphics_311,x:221.6,y:435.6}).wait(1).to({graphics:mask_2_graphics_312,x:221.8,y:434.6}).wait(1).to({graphics:mask_2_graphics_313,x:222,y:433.6}).wait(1).to({graphics:mask_2_graphics_314,x:222.2,y:432.6}).wait(1).to({graphics:mask_2_graphics_315,x:222.4,y:431.6}).wait(1).to({graphics:mask_2_graphics_316,x:222.6,y:430.5}).wait(1).to({graphics:mask_2_graphics_317,x:222.8,y:429.5}).wait(1).to({graphics:mask_2_graphics_318,x:223,y:428.5}).wait(1).to({graphics:mask_2_graphics_319,x:223.1,y:427.5}).wait(1).to({graphics:mask_2_graphics_320,x:223.3,y:426.4}).wait(1).to({graphics:mask_2_graphics_321,x:223.5,y:425.4}).wait(1).to({graphics:mask_2_graphics_322,x:223.7,y:424.4}).wait(1).to({graphics:mask_2_graphics_323,x:223.9,y:423.4}).wait(1).to({graphics:mask_2_graphics_324,x:224.1,y:422.3}).wait(1).to({graphics:mask_2_graphics_325,x:224.3,y:421.3}).wait(1).to({graphics:mask_2_graphics_326,x:224.5,y:420.3}).wait(1).to({graphics:mask_2_graphics_327,x:224.7,y:419.3}).wait(1).to({graphics:mask_2_graphics_328,x:224.9,y:418.3}).wait(1).to({graphics:mask_2_graphics_329,x:225,y:417.3}).wait(1).to({graphics:mask_2_graphics_330,x:225.2,y:416.2}).wait(1).to({graphics:mask_2_graphics_331,x:225.4,y:415.2}).wait(1).to({graphics:mask_2_graphics_332,x:225.6,y:414.2}).wait(1).to({graphics:mask_2_graphics_333,x:225.8,y:413.2}).wait(1).to({graphics:mask_2_graphics_334,x:226,y:412.1}).wait(1).to({graphics:mask_2_graphics_335,x:226.2,y:411.1}).wait(1).to({graphics:mask_2_graphics_336,x:226.4,y:410.1}).wait(1).to({graphics:mask_2_graphics_337,x:226.6,y:409.1}).wait(1).to({graphics:mask_2_graphics_338,x:226.8,y:408}).wait(1).to({graphics:mask_2_graphics_339,x:226.9,y:407}).wait(1).to({graphics:mask_2_graphics_340,x:227.1,y:406}).wait(1).to({graphics:mask_2_graphics_341,x:227.3,y:405}).wait(1).to({graphics:mask_2_graphics_342,x:227.5,y:404}).wait(1).to({graphics:mask_2_graphics_343,x:227.7,y:402.9}).wait(1).to({graphics:mask_2_graphics_344,x:227.9,y:401.9}).wait(1).to({graphics:mask_2_graphics_345,x:228.1,y:400.9}).wait(1).to({graphics:mask_2_graphics_346,x:228.3,y:399.9}).wait(1).to({graphics:mask_2_graphics_347,x:228.5,y:398.9}).wait(1).to({graphics:mask_2_graphics_348,x:228.7,y:397.8}).wait(1).to({graphics:mask_2_graphics_349,x:228.8,y:396.8}).wait(1).to({graphics:mask_2_graphics_350,x:229,y:395.8}).wait(1).to({graphics:mask_2_graphics_351,x:229.2,y:394.8}).wait(1).to({graphics:mask_2_graphics_352,x:229.4,y:393.8}).wait(1).to({graphics:mask_2_graphics_353,x:229.6,y:392.7}).wait(1).to({graphics:mask_2_graphics_354,x:229.8,y:391.7}).wait(1).to({graphics:mask_2_graphics_355,x:230,y:390.7}).wait(1).to({graphics:mask_2_graphics_356,x:230.2,y:389.7}).wait(1).to({graphics:mask_2_graphics_357,x:230.4,y:388.6}).wait(1).to({graphics:mask_2_graphics_358,x:230.6,y:387.6}).wait(1).to({graphics:mask_2_graphics_359,x:230.8,y:386.6}).wait(1).to({graphics:mask_2_graphics_360,x:231,y:385.6}).wait(1).to({graphics:mask_2_graphics_361,x:231.1,y:384.5}).wait(1).to({graphics:mask_2_graphics_362,x:231.3,y:383.5}).wait(1).to({graphics:mask_2_graphics_363,x:231.5,y:382.5}).wait(1).to({graphics:mask_2_graphics_364,x:231.7,y:381.5}).wait(1).to({graphics:mask_2_graphics_365,x:231.9,y:380.5}).wait(1).to({graphics:mask_2_graphics_366,x:232.1,y:379.4}).wait(1).to({graphics:mask_2_graphics_367,x:232.3,y:378.4}).wait(1).to({graphics:mask_2_graphics_368,x:232.5,y:377.4}).wait(1).to({graphics:mask_2_graphics_369,x:232.7,y:376.4}).wait(1).to({graphics:mask_2_graphics_370,x:232.9,y:375.4}).wait(1).to({graphics:mask_2_graphics_371,x:233,y:374.3}).wait(1).to({graphics:mask_2_graphics_372,x:233.2,y:373.3}).wait(1).to({graphics:mask_2_graphics_373,x:233.4,y:372.3}).wait(1).to({graphics:mask_2_graphics_374,x:233.6,y:371.3}).wait(1).to({graphics:mask_2_graphics_375,x:233.8,y:370.2}).wait(1).to({graphics:mask_2_graphics_376,x:234,y:369.2}).wait(1).to({graphics:mask_2_graphics_377,x:234.2,y:368.2}).wait(1).to({graphics:mask_2_graphics_378,x:234.4,y:367.2}).wait(1).to({graphics:mask_2_graphics_379,x:234.6,y:366.2}).wait(1).to({graphics:mask_2_graphics_380,x:234.8,y:365.1}).wait(1).to({graphics:mask_2_graphics_381,x:234.9,y:364.1}).wait(1).to({graphics:mask_2_graphics_382,x:235.1,y:363.1}).wait(1).to({graphics:mask_2_graphics_383,x:235.3,y:362.1}).wait(1).to({graphics:mask_2_graphics_384,x:235.5,y:361}).wait(1).to({graphics:mask_2_graphics_385,x:235.7,y:360}).wait(1).to({graphics:mask_2_graphics_386,x:235.9,y:359}).wait(1).to({graphics:mask_2_graphics_387,x:236.1,y:358}).wait(1).to({graphics:mask_2_graphics_388,x:236.3,y:357}).wait(1).to({graphics:mask_2_graphics_389,x:236.5,y:356}).wait(1).to({graphics:mask_2_graphics_390,x:236.7,y:354.9}).wait(1).to({graphics:mask_2_graphics_391,x:236.8,y:353.9}).wait(1).to({graphics:mask_2_graphics_392,x:237,y:352.9}).wait(1).to({graphics:mask_2_graphics_393,x:237.2,y:351.9}).wait(1).to({graphics:mask_2_graphics_394,x:237.4,y:350.8}).wait(1).to({graphics:mask_2_graphics_395,x:237.6,y:349.8}).wait(1).to({graphics:mask_2_graphics_396,x:237.8,y:348.8}).wait(1).to({graphics:mask_2_graphics_397,x:238,y:347.8}).wait(1).to({graphics:mask_2_graphics_398,x:238.2,y:346.7}).wait(1).to({graphics:mask_2_graphics_399,x:238.4,y:345.7}).wait(1).to({graphics:mask_2_graphics_400,x:238.6,y:344.7}).wait(1).to({graphics:mask_2_graphics_401,x:238.7,y:343.7}).wait(1).to({graphics:mask_2_graphics_402,x:238.9,y:342.7}).wait(1).to({graphics:mask_2_graphics_403,x:239.1,y:341.6}).wait(1).to({graphics:mask_2_graphics_404,x:239.3,y:340.6}).wait(1).to({graphics:mask_2_graphics_405,x:239.5,y:339.6}).wait(1).to({graphics:mask_2_graphics_406,x:239.7,y:338.6}).wait(1).to({graphics:mask_2_graphics_407,x:239.9,y:337.5}).wait(1).to({graphics:mask_2_graphics_408,x:240.1,y:336.5}).wait(1).to({graphics:mask_2_graphics_409,x:240.3,y:335.5}).wait(1).to({graphics:mask_2_graphics_410,x:240.5,y:334.5}).wait(1).to({graphics:mask_2_graphics_411,x:240.6,y:333.5}).wait(1).to({graphics:mask_2_graphics_412,x:240.8,y:332.4}).wait(1).to({graphics:mask_2_graphics_413,x:241,y:331.4}).wait(1).to({graphics:mask_2_graphics_414,x:241.2,y:330.4}).wait(1).to({graphics:mask_2_graphics_415,x:241.4,y:329.4}).wait(1).to({graphics:mask_2_graphics_416,x:241.6,y:328.4}).wait(1).to({graphics:mask_2_graphics_417,x:241.8,y:327.3}).wait(1).to({graphics:mask_2_graphics_418,x:242,y:326.3}).wait(1).to({graphics:mask_2_graphics_419,x:194.6,y:240.1}).wait(136));

	// Layer 9
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(20,1,1).p("A2kaxQFNABCtiRQEJjeECpMQEDpMDjoCQDkoCEQmMQEQmLJahA");
	this.shape_3.setTransform(309.8,275.6);
	this.shape_3._off = true;

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(295).to({_off:false},0).wait(260));

	// Layer 8 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_265 = new cjs.Graphics().p("EAAiAlgIAsvWILtHOIAAIIg");
	var mask_3_graphics_266 = new cjs.Graphics().p("AmYHrIAuvVIMDHOIAAIHg");
	var mask_3_graphics_267 = new cjs.Graphics().p("AmlHrIAvvVIMcHOIAAIHg");
	var mask_3_graphics_268 = new cjs.Graphics().p("AmxHrIAxvVIMyHOIAAIHg");
	var mask_3_graphics_269 = new cjs.Graphics().p("Am9HrIAyvVINJHOIAAIHg");
	var mask_3_graphics_270 = new cjs.Graphics().p("AnKHrIA0vVINhHOIAAIHg");
	var mask_3_graphics_271 = new cjs.Graphics().p("AnWHrIA0vVIN5HOIAAIHg");
	var mask_3_graphics_272 = new cjs.Graphics().p("AnjHrIA2vVIORHOIAAIHg");
	var mask_3_graphics_273 = new cjs.Graphics().p("AnvHrIA4vVIOnHOIAAIHg");
	var mask_3_graphics_274 = new cjs.Graphics().p("An8HrIA5vVIO/HOIAAIHg");
	var mask_3_graphics_275 = new cjs.Graphics().p("AoIHrIA6vVIPXHOIAAIHg");
	var mask_3_graphics_276 = new cjs.Graphics().p("AoUHrIA7vVIPuHOIAAIHg");
	var mask_3_graphics_277 = new cjs.Graphics().p("AohHrIA9vVIQGHOIAAIHg");
	var mask_3_graphics_278 = new cjs.Graphics().p("AotHrIA+vVIQdHOIAAIHg");
	var mask_3_graphics_279 = new cjs.Graphics().p("Ao6HrIBAvVIQ1HOIAAIHg");
	var mask_3_graphics_280 = new cjs.Graphics().p("ApGHrIBBvVIRMHOIAAIHg");
	var mask_3_graphics_281 = new cjs.Graphics().p("ApTHrIBDvVIRkHOIAAIHg");
	var mask_3_graphics_282 = new cjs.Graphics().p("ApfHrIBEvVIR7HOIAAIHg");
	var mask_3_graphics_283 = new cjs.Graphics().p("ApsHrIBGvVISTHOIAAIHg");
	var mask_3_graphics_284 = new cjs.Graphics().p("Ap4HrIBHvVISqHOIAAIHg");
	var mask_3_graphics_285 = new cjs.Graphics().p("AqEHrIBIvVITBHOIAAIHg");
	var mask_3_graphics_286 = new cjs.Graphics().p("AqRHrIBJvVITaHOIAAIHg");
	var mask_3_graphics_287 = new cjs.Graphics().p("AqdHrIBLvVITxHOIAAIHg");
	var mask_3_graphics_288 = new cjs.Graphics().p("AqqHrIBNvVIUIHOIAAIHg");
	var mask_3_graphics_289 = new cjs.Graphics().p("Aq2HrIBOvVIUfHOIAAIHg");
	var mask_3_graphics_290 = new cjs.Graphics().p("ArDHrIBPvVIU4HOIAAIHg");
	var mask_3_graphics_291 = new cjs.Graphics().p("ArPHrIBQvVIVPHOIAAIHg");
	var mask_3_graphics_292 = new cjs.Graphics().p("ArcHrIBSvVIVnHOIAAIHg");
	var mask_3_graphics_293 = new cjs.Graphics().p("AroHrIBTvVIV+HOIAAIHg");
	var mask_3_graphics_294 = new cjs.Graphics().p("Ar0HrIBUvVIWWHOIAAIHg");
	var mask_3_graphics_295 = new cjs.Graphics().p("EgFTAlgIBWvWIWtHOIAAIIg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(265).to({graphics:mask_3_graphics_265,x:82.7,y:240}).wait(1).to({graphics:mask_3_graphics_266,x:127,y:430.9}).wait(1).to({graphics:mask_3_graphics_267,x:128.2,y:430.9}).wait(1).to({graphics:mask_3_graphics_268,x:129.4,y:430.9}).wait(1).to({graphics:mask_3_graphics_269,x:130.7,y:430.9}).wait(1).to({graphics:mask_3_graphics_270,x:131.9,y:430.9}).wait(1).to({graphics:mask_3_graphics_271,x:133.2,y:430.9}).wait(1).to({graphics:mask_3_graphics_272,x:134.4,y:430.9}).wait(1).to({graphics:mask_3_graphics_273,x:135.7,y:430.9}).wait(1).to({graphics:mask_3_graphics_274,x:136.9,y:430.9}).wait(1).to({graphics:mask_3_graphics_275,x:138.2,y:430.9}).wait(1).to({graphics:mask_3_graphics_276,x:139.4,y:430.9}).wait(1).to({graphics:mask_3_graphics_277,x:140.6,y:430.9}).wait(1).to({graphics:mask_3_graphics_278,x:141.9,y:430.9}).wait(1).to({graphics:mask_3_graphics_279,x:143.1,y:430.9}).wait(1).to({graphics:mask_3_graphics_280,x:144.4,y:430.9}).wait(1).to({graphics:mask_3_graphics_281,x:145.6,y:430.9}).wait(1).to({graphics:mask_3_graphics_282,x:146.8,y:430.9}).wait(1).to({graphics:mask_3_graphics_283,x:148.1,y:430.9}).wait(1).to({graphics:mask_3_graphics_284,x:149.3,y:430.9}).wait(1).to({graphics:mask_3_graphics_285,x:150.6,y:430.9}).wait(1).to({graphics:mask_3_graphics_286,x:151.8,y:430.9}).wait(1).to({graphics:mask_3_graphics_287,x:153.1,y:430.9}).wait(1).to({graphics:mask_3_graphics_288,x:154.3,y:430.9}).wait(1).to({graphics:mask_3_graphics_289,x:155.5,y:430.9}).wait(1).to({graphics:mask_3_graphics_290,x:156.8,y:430.9}).wait(1).to({graphics:mask_3_graphics_291,x:158,y:430.9}).wait(1).to({graphics:mask_3_graphics_292,x:159.3,y:430.9}).wait(1).to({graphics:mask_3_graphics_293,x:160.5,y:430.9}).wait(1).to({graphics:mask_3_graphics_294,x:161.8,y:430.9}).wait(1).to({graphics:mask_3_graphics_295,x:120,y:240}).wait(260));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(20,1,1).p("A2kaxQFNABCtiRQEJjeECpMQEDpMDjoCQDkoCEQmMQEQmLJahA");
	this.shape_4.setTransform(309.8,275.6);
	this.shape_4._off = true;

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(265).to({_off:false},0).wait(290));

	// Layer 15
	this.instance_2 = new lib.ar1("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(121.3,174.9,1,1,0,125.8,-54.2,-0.8,0.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(546));

	// Layer 7 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_219 = new cjs.Graphics().p("AjtSzQFOlZHggHQHggIFZFOQFSFHAPHUMgkOAAlQgBnUFHlSg");
	var mask_4_graphics_220 = new cjs.Graphics().p("Aj+S5QFFlgHggTQHggTFhFGQFZFAAaHTMgkNABaQgMnTFAlag");
	var mask_4_graphics_221 = new cjs.Graphics().p("AkPTAQE9loHggeQHfgeFoE+QFhE3AkHSMgkKACRQgWnTE3lhg");
	var mask_4_graphics_222 = new cjs.Graphics().p("AkfTHQE1lwHegpQHfgpFvE2QFoEvAvHRMgkGADGQghnSEvlog");
	var mask_4_graphics_223 = new cjs.Graphics().p("AkuTOQEtl2Hdg0QHdg0F2EsQFvEnA6HQMgkBAD8QgsnSEnlvg");
	var mask_4_graphics_224 = new cjs.Graphics().p("Ak9TWQEll9HbhAQHcg/F+EkQF1EfBEHOMgj6AExQg3nREel1g");
	var mask_4_graphics_225 = new cjs.Graphics().p("AlKTeQEbmEHahKQHbhKGEEbQF8EWBPHMMgjzAFmQhBnPEVl8g");
	var mask_4_graphics_226 = new cjs.Graphics().p("AlXTmQESmKHYhVQHZhVGKESQGDENBZHLMgjpAGaQhMnNEMmDg");
	var mask_4_graphics_227 = new cjs.Graphics().p("AljTvQEJmQHWhgQHXhgGQEJQGJEDBkHJMgjgAHPQhWnLEDmJg");
	var mask_4_graphics_228 = new cjs.Graphics().p("AluT5QEAmXHThrQHVhrGWEAQGPD7BuHGMgjUAIDQhhnJD6mOg");
	var mask_4_graphics_229 = new cjs.Graphics().p("Al5UCQD3mcHRh2QHSh1GcD2QGUDxB5HEMgjIAI3QhrnHDwmUg");
	var mask_4_graphics_230 = new cjs.Graphics().p("AmCUMQDtmiHOiAQHPiAGiDsQGaDoCDHBMgi6AJrQh2nEDnmag");
	var mask_4_graphics_231 = new cjs.Graphics().p("AmLUXQDkmnHLiLQHLiLGoDiQGfDfCNG9MgirAKfQiBnBDemfg");
	var mask_4_graphics_232 = new cjs.Graphics().p("AmSUiQDZmtHIiVQHIiWGsDZQGkDVCZG6MgicALSQiLm+DVmkg");
	var mask_4_graphics_233 = new cjs.Graphics().p("AmZUtQDPmyHEigQHFigGxDPQGpDLCiG3MgiKAMFQiVm8DLmog");
	var mask_4_graphics_234 = new cjs.Graphics().p("AmgU4QDGm2HAiqQHBirG2DFQGtDBCtGzMgh4AM3Qifm3DAmug");
	var mask_4_graphics_235 = new cjs.Graphics().p("AmlVEQC7m6G8i1QG+i1G6C7QGyC3C2GuMghkANqQipm0C2myg");
	var mask_4_graphics_236 = new cjs.Graphics().p("AmpVRQCxm/G3i/QG5i/G/CwQG2CtDAGqMghPAObQi0mwCtm1g");
	var mask_4_graphics_237 = new cjs.Graphics().p("AmtVdQCnnDGzjJQG0jJHDCmQG5CjDLGmMgg6APLQi9mrCim6g");
	var mask_4_graphics_238 = new cjs.Graphics().p("AmwVqQCcnGGvjUQGwjTHGCcQG9CYDUGhMggiAP8QjImnCYm9g");
	var mask_4_graphics_239 = new cjs.Graphics().p("AmxV3QCRnKGqjdQGqjdHKCRQHBCODdGcMggKAQsQjRmiCOnBg");
	var mask_4_graphics_240 = new cjs.Graphics().p("AmyWFQCGnNGljnQGljnHNCGQHECEDnGXI/xRbQjbmdCEnEg");
	var mask_4_graphics_241 = new cjs.Graphics().p("AmzWTQB9nQGfjxQGfjxHQB8QHHB5DwGSI/WSJQjkmYB4nGg");
	var mask_4_graphics_242 = new cjs.Graphics().p("AmyWhQBynTGZj6QGaj6HTBxQHJBuD6GMI+8S4QjtmTBunJg");
	var mask_4_graphics_243 = new cjs.Graphics().p("AmwWvQBmnVGUkEQGUkDHVBmQHMBkEDGGI+fTlQj3mNBknMg");
	var mask_4_graphics_244 = new cjs.Graphics().p("AmuW+QBcnXGNkNQGOkNHYBbQHOBZELGAI+BUSQkAmHBZnOg");
	var mask_4_graphics_245 = new cjs.Graphics().p("AmqXNQBQnZGHkXQGIkWHZBRQHQBPEVF5I9jU+QkJmBBPnQg");
	var mask_4_graphics_246 = new cjs.Graphics().p("AmmXcQBGnbGAkfQGBkfHbBFQHSBFEdFyI9DVqQkSl7BEnSg");
	var mask_4_graphics_247 = new cjs.Graphics().p("AmhXsQA7ndF5koQF7koHcA7QHUA5ElFsI8jWVQkal1A5nTg");
	var mask_4_graphics_248 = new cjs.Graphics().p("AmbX8QAvneFzkxQF0kwHdAvQHVAvEuFlI8BW+QkjluAunUg");
	var mask_4_graphics_249 = new cjs.Graphics().p("AmVYMQAlnfFtk5QFrk5HfAkQHVAkE2FeI7eXnQkslnAjnVg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(219).to({graphics:mask_4_graphics_219,x:175.5,y:200.9}).wait(1).to({graphics:mask_4_graphics_220,x:175.5,y:202.2}).wait(1).to({graphics:mask_4_graphics_221,x:175.4,y:203.6}).wait(1).to({graphics:mask_4_graphics_222,x:175.3,y:204.9}).wait(1).to({graphics:mask_4_graphics_223,x:175.2,y:206.3}).wait(1).to({graphics:mask_4_graphics_224,x:175,y:207.6}).wait(1).to({graphics:mask_4_graphics_225,x:174.9,y:208.9}).wait(1).to({graphics:mask_4_graphics_226,x:174.7,y:210.2}).wait(1).to({graphics:mask_4_graphics_227,x:174.4,y:211.5}).wait(1).to({graphics:mask_4_graphics_228,x:174.1,y:212.8}).wait(1).to({graphics:mask_4_graphics_229,x:173.8,y:214.1}).wait(1).to({graphics:mask_4_graphics_230,x:173.5,y:215.4}).wait(1).to({graphics:mask_4_graphics_231,x:173.1,y:216.7}).wait(1).to({graphics:mask_4_graphics_232,x:172.7,y:218}).wait(1).to({graphics:mask_4_graphics_233,x:172.3,y:219.3}).wait(1).to({graphics:mask_4_graphics_234,x:171.9,y:220.5}).wait(1).to({graphics:mask_4_graphics_235,x:171.4,y:221.8}).wait(1).to({graphics:mask_4_graphics_236,x:170.9,y:223}).wait(1).to({graphics:mask_4_graphics_237,x:170.4,y:224.2}).wait(1).to({graphics:mask_4_graphics_238,x:169.8,y:225.4}).wait(1).to({graphics:mask_4_graphics_239,x:169.2,y:226.6}).wait(1).to({graphics:mask_4_graphics_240,x:168.6,y:227.8}).wait(1).to({graphics:mask_4_graphics_241,x:167.9,y:228.9}).wait(1).to({graphics:mask_4_graphics_242,x:167.3,y:230.1}).wait(1).to({graphics:mask_4_graphics_243,x:166.5,y:231.2}).wait(1).to({graphics:mask_4_graphics_244,x:165.8,y:232.3}).wait(1).to({graphics:mask_4_graphics_245,x:165.1,y:233.4}).wait(1).to({graphics:mask_4_graphics_246,x:164.3,y:234.5}).wait(1).to({graphics:mask_4_graphics_247,x:163.5,y:235.6}).wait(1).to({graphics:mask_4_graphics_248,x:162.7,y:236.6}).wait(1).to({graphics:mask_4_graphics_249,x:161.8,y:237.6}).wait(306));

	// Layer 6
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(20,1,1).p("AqY2/QIYl7HoEAQHoEAklLMQklLLk4KcQk5KbCaCUQBwBsBiAO");
	this.shape_5.setTransform(164.4,276.6);
	this.shape_5._off = true;

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(219).to({_off:false},0).wait(336));

	// Layer 5 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_125 = new cjs.Graphics().p("AIhPGIEYp3IHuDcIkYJ2g");
	var mask_5_graphics_126 = new cjs.Graphics().p("AmGDXIEgqIIHtDbIkgKIg");
	var mask_5_graphics_127 = new cjs.Graphics().p("AmKDgIEoqaIHtDbIkpKag");
	var mask_5_graphics_128 = new cjs.Graphics().p("AmODqIEwquIHtDcIkxKtg");
	var mask_5_graphics_129 = new cjs.Graphics().p("AmSDzIE5rAIHsDcIk5K+g");
	var mask_5_graphics_130 = new cjs.Graphics().p("AmWD8IFBrSIHsDbIlBLSg");
	var mask_5_graphics_131 = new cjs.Graphics().p("AmaEFIFJrkIHsDbIlJLkg");
	var mask_5_graphics_132 = new cjs.Graphics().p("AmfEOIFSr2IHtDbIlSL2g");
	var mask_5_graphics_133 = new cjs.Graphics().p("AmjEYIFasKIHtDcIlaMIg");
	var mask_5_graphics_134 = new cjs.Graphics().p("AmnEhIFiscIHtDbIliMcg");
	var mask_5_graphics_135 = new cjs.Graphics().p("AmrEqIFqsuIHtDbIlqMug");
	var mask_5_graphics_136 = new cjs.Graphics().p("AmvEzIFytAIHtDbIlyNAg");
	var mask_5_graphics_137 = new cjs.Graphics().p("AmzE8IF6tSIHtDbIl7NSg");
	var mask_5_graphics_138 = new cjs.Graphics().p("Am3FFIGCtkIHtDbImDNkg");
	var mask_5_graphics_139 = new cjs.Graphics().p("Am7FPIGLt4IHsDbImLN3g");
	var mask_5_graphics_140 = new cjs.Graphics().p("Am/FYIGTuKIHsDbImTOKg");
	var mask_5_graphics_141 = new cjs.Graphics().p("AnDFhIGbucIHsDbImaOcg");
	var mask_5_graphics_142 = new cjs.Graphics().p("AnHFqIGjuuIHsDbImjOug");
	var mask_5_graphics_143 = new cjs.Graphics().p("AnLFzIGrvAIHsDbImrPAg");
	var mask_5_graphics_144 = new cjs.Graphics().p("AnPF9IGzvUIHsDbImzPTg");
	var mask_5_graphics_145 = new cjs.Graphics().p("AnTGGIG7vmIHsDbIm7Pmg");
	var mask_5_graphics_146 = new cjs.Graphics().p("AnYGPIHEv4IHsDbInDP4g");
	var mask_5_graphics_147 = new cjs.Graphics().p("AncGYIHMwKIHtDbInMQKg");
	var mask_5_graphics_148 = new cjs.Graphics().p("AngGhIHUwdIHtDbInUQdg");
	var mask_5_graphics_149 = new cjs.Graphics().p("AnkGrIHcwwIHtDbIncQwg");
	var mask_5_graphics_150 = new cjs.Graphics().p("AnoG0IHlxCIHsDbInkRCg");
	var mask_5_graphics_151 = new cjs.Graphics().p("AnsG9IHsxUIHtDbInsRUg");
	var mask_5_graphics_152 = new cjs.Graphics().p("AnwHGIH0xmIHtDbIn0Rmg");
	var mask_5_graphics_153 = new cjs.Graphics().p("An0HPIH8x5IHtDbIn8R6g");
	var mask_5_graphics_154 = new cjs.Graphics().p("An4HZIIEyLIHtDbIoESKg");
	var mask_5_graphics_155 = new cjs.Graphics().p("An8HiIIMyeIHtDbIoMSeg");
	var mask_5_graphics_156 = new cjs.Graphics().p("AoAHrIIUywIHtDbIoUSwg");
	var mask_5_graphics_157 = new cjs.Graphics().p("AoFH0IIdzCIHuDbIodTCg");
	var mask_5_graphics_158 = new cjs.Graphics().p("AoJH9IIlzUIHuDbIolTUg");
	var mask_5_graphics_159 = new cjs.Graphics().p("AoNIGIItzmIHuDbIotTmg");
	var mask_5_graphics_160 = new cjs.Graphics().p("AoRIQII2z6IHtDbIo1T6g");
	var mask_5_graphics_161 = new cjs.Graphics().p("AoVIZII+0MIHtDbIo9UMg");
	var mask_5_graphics_162 = new cjs.Graphics().p("AoZIiIJG0eIHtDbIpGUeg");
	var mask_5_graphics_163 = new cjs.Graphics().p("AodIrIJO0wIHtDbIpOUxg");
	var mask_5_graphics_164 = new cjs.Graphics().p("AohI1IJW1EIHtDbIpWVEg");
	var mask_5_graphics_165 = new cjs.Graphics().p("AolI+IJe1WIHtDbIpeVWg");
	var mask_5_graphics_166 = new cjs.Graphics().p("AopJHIJm1oIHtDbIpmVog");
	var mask_5_graphics_167 = new cjs.Graphics().p("AouJQIJv16IHuDbIpvV6g");
	var mask_5_graphics_168 = new cjs.Graphics().p("AoyJaIJ32NIHuDbIp3WNg");
	var mask_5_graphics_169 = new cjs.Graphics().p("Ao2JjIJ/2gIHuDbIp/Wgg");
	var mask_5_graphics_170 = new cjs.Graphics().p("Ao6JsIKI2yIHtDbIqIWyg");
	var mask_5_graphics_171 = new cjs.Graphics().p("Ao+J1IKQ3EIHtDbIqPXEg");
	var mask_5_graphics_172 = new cjs.Graphics().p("ApCJ+IKY3WIHtDbIqXXWg");
	var mask_5_graphics_173 = new cjs.Graphics().p("ApGKHIKf3oIHuDbIqgXog");
	var mask_5_graphics_174 = new cjs.Graphics().p("ApKKQIKn37IHuDbIqoX8g");
	var mask_5_graphics_175 = new cjs.Graphics().p("ApOKaIKw4OIHtDbIqwYOg");
	var mask_5_graphics_176 = new cjs.Graphics().p("ApSKjIK44gIHtDbIq4Ygg");
	var mask_5_graphics_177 = new cjs.Graphics().p("ApWKsILA4yIHtDbIrAYyg");
	var mask_5_graphics_178 = new cjs.Graphics().p("ApbK2ILJ5GIHtDbIrIZGg");
	var mask_5_graphics_179 = new cjs.Graphics().p("ApfK/ILR5YIHtDbIrQZYg");
	var mask_5_graphics_180 = new cjs.Graphics().p("ApjLIILZ5qIHuDbIrZZqg");
	var mask_5_graphics_181 = new cjs.Graphics().p("ApnLRILh58IHuDbIrhZ8g");
	var mask_5_graphics_182 = new cjs.Graphics().p("AprLaILp6OIHuDbIrpaOg");
	var mask_5_graphics_183 = new cjs.Graphics().p("ApvLkILx6iIHuDbIryahg");
	var mask_5_graphics_184 = new cjs.Graphics().p("ApzLtIL560IHuDbIr6a0g");
	var mask_5_graphics_185 = new cjs.Graphics().p("Ap3L2IMC7GIHtDbIsCbGg");
	var mask_5_graphics_186 = new cjs.Graphics().p("Ap7L/IMK7YIHtDbIsKbYg");
	var mask_5_graphics_187 = new cjs.Graphics().p("Ap/MIIMS7qIHtDbIsSbqg");
	var mask_5_graphics_188 = new cjs.Graphics().p("AqEMRIMb79IHtDbIsab9g");
	var mask_5_graphics_189 = new cjs.Graphics().p("AqIMbIMj8QIHtDbIsicQg");
	var mask_5_graphics_190 = new cjs.Graphics().p("AqMMkIMr8iIHuDbIsrcig");
	var mask_5_graphics_191 = new cjs.Graphics().p("AqQMtIMz80IHuDbIszc0g");
	var mask_5_graphics_192 = new cjs.Graphics().p("AqUM2IM79GIHuDbIs7dGg");
	var mask_5_graphics_193 = new cjs.Graphics().p("AqYNAIND9ZIHuDaItDdZg");
	var mask_5_graphics_194 = new cjs.Graphics().p("AqcNJINL9rIHuDaItMdrg");
	var mask_5_graphics_195 = new cjs.Graphics().p("AqgNSINU9+IHtDbItUd+g");
	var mask_5_graphics_196 = new cjs.Graphics().p("AqkNbINc+QIHtDbItceQg");
	var mask_5_graphics_197 = new cjs.Graphics().p("AqoNkINk+iIHtDbItkeig");
	var mask_5_graphics_198 = new cjs.Graphics().p("AqtNtINt+0IHtDaItse1g");
	var mask_5_graphics_199 = new cjs.Graphics().p("AqxN3IN1/IIHtDbIt0fIg");
	var mask_5_graphics_200 = new cjs.Graphics().p("Aq1OAIN9/aIHuDbIt9fag");
	var mask_5_graphics_201 = new cjs.Graphics().p("Aq5OJIOF/sIHuDbIuFfsg");
	var mask_5_graphics_202 = new cjs.Graphics().p("Aq9OSION/+IHuDbIuNf+g");
	var mask_5_graphics_203 = new cjs.Graphics().p("ArBObMAOVggQIHuDaMgOVAgSg");
	var mask_5_graphics_204 = new cjs.Graphics().p("ArFOlMAOdggkIHuDbMgOdAgkg");
	var mask_5_graphics_205 = new cjs.Graphics().p("ArJOuMAOlgg2IHuDbMgOlAg2g");
	var mask_5_graphics_206 = new cjs.Graphics().p("ArNO3MAOughIIHtDbMgOtAhIg");
	var mask_5_graphics_207 = new cjs.Graphics().p("ArRPAMAO2ghaIHtDaMgO1Ahcg");
	var mask_5_graphics_208 = new cjs.Graphics().p("ArVPKMAO+ghuIHtDbMgO+Ahug");
	var mask_5_graphics_209 = new cjs.Graphics().p("ArZPTMAPGgiAIHtDbMgPGAiAg");
	var mask_5_graphics_210 = new cjs.Graphics().p("ArdPcMAPOgiSIHtDbMgPOAiSg");
	var mask_5_graphics_211 = new cjs.Graphics().p("ArhPlMAPWgikIHuDbMgPXAikg");
	var mask_5_graphics_212 = new cjs.Graphics().p("ArlPuMAPegi2IHuDbMgPfAi2g");
	var mask_5_graphics_213 = new cjs.Graphics().p("ArqP3MAPngjJIHuDcMgPnAjJg");
	var mask_5_graphics_214 = new cjs.Graphics().p("AruQBMAPvgjcIHuDbMgPvAjcg");
	var mask_5_graphics_215 = new cjs.Graphics().p("AryQKMAP3gjuIHuDbMgP3Ajug");
	var mask_5_graphics_216 = new cjs.Graphics().p("Ar2QTMAQAgkAIHtDbMgP/AkAg");
	var mask_5_graphics_217 = new cjs.Graphics().p("Ar6QcMAQIgkSIHtDbMgQHAkSg");
	var mask_5_graphics_218 = new cjs.Graphics().p("Ar+QlMAQQgklIHtDcMgQQAklg");
	var mask_5_graphics_219 = new cjs.Graphics().p("AjfcoMAQYgk3IHtDbMgQZAk3g");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(125).to({graphics:mask_5_graphics_125,x:131.9,y:118.5}).wait(1).to({graphics:mask_5_graphics_126,x:224.7,y:195.5}).wait(1).to({graphics:mask_5_graphics_127,x:224.3,y:196.4}).wait(1).to({graphics:mask_5_graphics_128,x:223.9,y:197.3}).wait(1).to({graphics:mask_5_graphics_129,x:223.4,y:198.2}).wait(1).to({graphics:mask_5_graphics_130,x:223,y:199.1}).wait(1).to({graphics:mask_5_graphics_131,x:222.6,y:200.1}).wait(1).to({graphics:mask_5_graphics_132,x:222.2,y:201}).wait(1).to({graphics:mask_5_graphics_133,x:221.8,y:201.9}).wait(1).to({graphics:mask_5_graphics_134,x:221.4,y:202.8}).wait(1).to({graphics:mask_5_graphics_135,x:221,y:203.8}).wait(1).to({graphics:mask_5_graphics_136,x:220.6,y:204.7}).wait(1).to({graphics:mask_5_graphics_137,x:220.2,y:205.6}).wait(1).to({graphics:mask_5_graphics_138,x:219.8,y:206.5}).wait(1).to({graphics:mask_5_graphics_139,x:219.3,y:207.5}).wait(1).to({graphics:mask_5_graphics_140,x:218.9,y:208.4}).wait(1).to({graphics:mask_5_graphics_141,x:218.5,y:209.3}).wait(1).to({graphics:mask_5_graphics_142,x:218.1,y:210.2}).wait(1).to({graphics:mask_5_graphics_143,x:217.7,y:211.1}).wait(1).to({graphics:mask_5_graphics_144,x:217.3,y:212.1}).wait(1).to({graphics:mask_5_graphics_145,x:216.9,y:213}).wait(1).to({graphics:mask_5_graphics_146,x:216.5,y:213.9}).wait(1).to({graphics:mask_5_graphics_147,x:216,y:214.8}).wait(1).to({graphics:mask_5_graphics_148,x:215.6,y:215.8}).wait(1).to({graphics:mask_5_graphics_149,x:215.2,y:216.7}).wait(1).to({graphics:mask_5_graphics_150,x:214.8,y:217.6}).wait(1).to({graphics:mask_5_graphics_151,x:214.4,y:218.5}).wait(1).to({graphics:mask_5_graphics_152,x:214,y:219.4}).wait(1).to({graphics:mask_5_graphics_153,x:213.6,y:220.4}).wait(1).to({graphics:mask_5_graphics_154,x:213.2,y:221.3}).wait(1).to({graphics:mask_5_graphics_155,x:212.8,y:222.2}).wait(1).to({graphics:mask_5_graphics_156,x:212.4,y:223.2}).wait(1).to({graphics:mask_5_graphics_157,x:211.9,y:224.1}).wait(1).to({graphics:mask_5_graphics_158,x:211.5,y:225}).wait(1).to({graphics:mask_5_graphics_159,x:211.1,y:225.9}).wait(1).to({graphics:mask_5_graphics_160,x:210.7,y:226.8}).wait(1).to({graphics:mask_5_graphics_161,x:210.3,y:227.8}).wait(1).to({graphics:mask_5_graphics_162,x:209.9,y:228.7}).wait(1).to({graphics:mask_5_graphics_163,x:209.5,y:229.6}).wait(1).to({graphics:mask_5_graphics_164,x:209.1,y:230.5}).wait(1).to({graphics:mask_5_graphics_165,x:208.7,y:231.4}).wait(1).to({graphics:mask_5_graphics_166,x:208.3,y:232.4}).wait(1).to({graphics:mask_5_graphics_167,x:207.8,y:233.3}).wait(1).to({graphics:mask_5_graphics_168,x:207.4,y:234.2}).wait(1).to({graphics:mask_5_graphics_169,x:207,y:235.1}).wait(1).to({graphics:mask_5_graphics_170,x:206.6,y:236.1}).wait(1).to({graphics:mask_5_graphics_171,x:206.2,y:237}).wait(1).to({graphics:mask_5_graphics_172,x:205.8,y:237.9}).wait(1).to({graphics:mask_5_graphics_173,x:205.4,y:238.8}).wait(1).to({graphics:mask_5_graphics_174,x:205,y:239.8}).wait(1).to({graphics:mask_5_graphics_175,x:204.5,y:240.7}).wait(1).to({graphics:mask_5_graphics_176,x:204.1,y:241.6}).wait(1).to({graphics:mask_5_graphics_177,x:203.7,y:242.5}).wait(1).to({graphics:mask_5_graphics_178,x:203.3,y:243.5}).wait(1).to({graphics:mask_5_graphics_179,x:202.9,y:244.4}).wait(1).to({graphics:mask_5_graphics_180,x:202.5,y:245.3}).wait(1).to({graphics:mask_5_graphics_181,x:202.1,y:246.2}).wait(1).to({graphics:mask_5_graphics_182,x:201.7,y:247.1}).wait(1).to({graphics:mask_5_graphics_183,x:201.3,y:248.1}).wait(1).to({graphics:mask_5_graphics_184,x:200.9,y:249}).wait(1).to({graphics:mask_5_graphics_185,x:200.4,y:249.9}).wait(1).to({graphics:mask_5_graphics_186,x:200,y:250.8}).wait(1).to({graphics:mask_5_graphics_187,x:199.6,y:251.7}).wait(1).to({graphics:mask_5_graphics_188,x:199.2,y:252.7}).wait(1).to({graphics:mask_5_graphics_189,x:198.8,y:253.6}).wait(1).to({graphics:mask_5_graphics_190,x:198.4,y:254.5}).wait(1).to({graphics:mask_5_graphics_191,x:198,y:255.5}).wait(1).to({graphics:mask_5_graphics_192,x:197.6,y:256.4}).wait(1).to({graphics:mask_5_graphics_193,x:197.2,y:257.3}).wait(1).to({graphics:mask_5_graphics_194,x:196.8,y:258.2}).wait(1).to({graphics:mask_5_graphics_195,x:196.3,y:259.1}).wait(1).to({graphics:mask_5_graphics_196,x:195.9,y:260.1}).wait(1).to({graphics:mask_5_graphics_197,x:195.5,y:261}).wait(1).to({graphics:mask_5_graphics_198,x:195.1,y:261.9}).wait(1).to({graphics:mask_5_graphics_199,x:194.7,y:262.8}).wait(1).to({graphics:mask_5_graphics_200,x:194.3,y:263.8}).wait(1).to({graphics:mask_5_graphics_201,x:193.9,y:264.7}).wait(1).to({graphics:mask_5_graphics_202,x:193.5,y:265.6}).wait(1).to({graphics:mask_5_graphics_203,x:193.1,y:266.5}).wait(1).to({graphics:mask_5_graphics_204,x:192.6,y:267.4}).wait(1).to({graphics:mask_5_graphics_205,x:192.2,y:268.4}).wait(1).to({graphics:mask_5_graphics_206,x:191.8,y:269.3}).wait(1).to({graphics:mask_5_graphics_207,x:191.4,y:270.2}).wait(1).to({graphics:mask_5_graphics_208,x:191,y:271.1}).wait(1).to({graphics:mask_5_graphics_209,x:190.6,y:272}).wait(1).to({graphics:mask_5_graphics_210,x:190.2,y:273}).wait(1).to({graphics:mask_5_graphics_211,x:189.8,y:273.9}).wait(1).to({graphics:mask_5_graphics_212,x:189.4,y:274.8}).wait(1).to({graphics:mask_5_graphics_213,x:188.9,y:275.8}).wait(1).to({graphics:mask_5_graphics_214,x:188.5,y:276.7}).wait(1).to({graphics:mask_5_graphics_215,x:188.1,y:277.6}).wait(1).to({graphics:mask_5_graphics_216,x:187.7,y:278.5}).wait(1).to({graphics:mask_5_graphics_217,x:187.3,y:279.4}).wait(1).to({graphics:mask_5_graphics_218,x:186.9,y:280.4}).wait(1).to({graphics:mask_5_graphics_219,x:131.8,y:205.1}).wait(336));

	// Layer 4
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(20,1,1).p("AqY2/QIYl7HoEAQHoEAklLMQklLLk4KcQk5KbCaCUQBwBsBiAO");
	this.shape_6.setTransform(164.4,276.6);
	this.shape_6._off = true;

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(125).to({_off:false},0).wait(430));

	// Layer 3 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_9 = new cjs.Graphics().p("AwDWfQo4oSgZsIQgcsHITo4MAqzAn/QoSI3sHAbIhKABQrZAAodn5g");
	var mask_6_graphics_10 = new cjs.Graphics().p("AwRWFQotodgKsIQgMsIIeotMAp/Ao1QodItsIALIgeAAQr1AAoioTg");
	var mask_6_graphics_11 = new cjs.Graphics().p("AEMeYQsIgEoiopQojopAGsIQAEsHIooiMApLApqQokIdr/AAIgNAAg");
	var mask_6_graphics_12 = new cjs.Graphics().p("AD0eYQsIgVoXozQoXo0AVsIQATsHI0oXMAoUAqfQofIDrjAAIg4AAg");
	var mask_6_graphics_13 = new cjs.Graphics().p("ADceWQsHgkoMo+QoLo+AlsGQAisII+oLMAneArRQoaHqrJAAQgwAAgygCg");
	var mask_6_graphics_14 = new cjs.Graphics().p("ADFeUQsHgzoApJQn/pIA0sGQAysHJJn/MAmlAsDQoTHSqwAAQhFAAhGgFg");
	var mask_6_graphics_15 = new cjs.Graphics().p("ACueRQsGhDn0pTQn0pSBEsFQBCsFJTn0MAlsAs1QoNG5qXAAQhYAAhbgIg");
	var mask_6_graphics_16 = new cjs.Graphics().p("ACXeNQsEhSnopdQnopcBUsDQBRsEJdnoMAkxAtlQoFGhp/AAQhsAAhvgMg");
	var mask_6_graphics_17 = new cjs.Graphics().p("ACBeJQsChincpnQncpmBjsBQBhsCJmnbMAj3AuTQn+GKpoAAQh+AAiDgQg");
	var mask_6_graphics_18 = new cjs.Graphics().p("ABreDQsAhxnQpwQnPpvBzr/QBwsAJvnPMAi7AvAQn1F1pSAAQiRAAiWgXg");
	var mask_6_graphics_19 = new cjs.Graphics().p("ABVd9Qr+iBnCp4QnDp5CCr8QCAr+J4nDMAh+AvtQnsFfo8AAQijAAiqgdg");
	var mask_6_graphics_20 = new cjs.Graphics().p("AA/d2Qr6iQm2qBQm2qCCRr6QCPr6KCm2MAhAAwYQnjFJonAAQi1AAi9gkg");
	var mask_6_graphics_21 = new cjs.Graphics().p("AAqdvQr3igmpqKQmpqKChr3QCer3KKmpMAgBAxBQnZE1oSAAQjHAAjPgrg");
	var mask_6_graphics_22 = new cjs.Graphics().p("AAWdnQr0ivmcqTQmcqSCwrzQCtr1KTmcMAfCAxqQnPEin+AAQjZAAjgg0g");
	var mask_6_graphics_23 = new cjs.Graphics().p("AABdeQrwi+mOqbQmPqbC/rvQC9rxKamOMAeCAyRQnEEOnrAAQjpAAjzg9g");
	var mask_6_graphics_24 = new cjs.Graphics().p("AgSdUQrtjNmBqjQmBqiDOrsQDMrsKimBMAdBAy3Qm5D7nYAAQj6AAkDhHg");
	var mask_6_graphics_25 = new cjs.Graphics().p("AgldKQrpjcl0qrQlzqqDdrnQDbroKql0MAb+AzcQmsDpnFAAQkMAAkThRg");
	var mask_6_graphics_26 = new cjs.Graphics().p("Ag4c/QrljrllqyQlmqxDsrjQDprkKyllMAa8Az+QmhDYmyAAQkdAAkjhcg");
	var mask_6_graphics_27 = new cjs.Graphics().p("AhLczQrgj6lXq5QlYq4D6reQD5rfK4lXMAZ5A0gQmUDHmgAAQkuAAkzhog");
	var mask_6_graphics_28 = new cjs.Graphics().p("AhecmQrakIlKrAQlJq/EJrYQEHraK/lJMAY1A1BQmGC3mPAAQk/AAlDh2g");
	var mask_6_graphics_29 = new cjs.Graphics().p("AhwcZQrVkXk7rGQk7rFEXrTQEWrVLGk7MAXwA1gQl5Col8AAQlRAAlSiDg");
	var mask_6_graphics_30 = new cjs.Graphics().p("AiBcLQrQklktrMQktrMEnrNQEkrPLMktMAWrA1+QlrCZlrAAQliAAlgiRg");
	var mask_6_graphics_31 = new cjs.Graphics().p("AiTb9QrJk0kfrSQkerSE1rHQEyrILSkfMAVlA2aQlcCLlaAAQlzAAlvifg");
	var mask_6_graphics_32 = new cjs.Graphics().p("AikbuQrDlDkPrXQkQrWFCrCQFBrCLYkQMAUfA21QlOB9lIAAQmFAAl9iug");
	var mask_6_graphics_33 = new cjs.Graphics().p("Ai0beQq8lRkCrcQkBrcFRq7QFPq8LckBMATZA3PQk+Bwk3AAQmXAAmKi+g");
	var mask_6_graphics_34 = new cjs.Graphics().p("AjEbNQq2lejyriQjyrgFeq0QFdq1LhjzMASSA3nQkuBkknAAQmoAAmXjPg");
	var mask_6_graphics_35 = new cjs.Graphics().p("AjUa8QqulsjkrmQjjrmFtqsQFqquLmjkMARKA3+QkeBXkVAAQm7AAmkjfg");
	var mask_6_graphics_36 = new cjs.Graphics().p("AjjaqQqnl5jUrrQjVrqF6qlQF5qnLqjUMAQCA4TQkOBMkEAAQnNAAmwjxg");
	var mask_6_graphics_37 = new cjs.Graphics().p("AjyaYQqfmHjFrvQjGruGIqeQGGqeLujGMAO5A4nQj8BCjzAAQngAAm8kDg");
	var mask_6_graphics_38 = new cjs.Graphics().p("AkAaFQqXmVi2ryQi3ryGVqWQGUqWLxi3MANxA45QjrA5jiAAQnzAAnHkWg");
	var mask_6_graphics_39 = new cjs.Graphics().p("AkOZxQqOmiior2Qinr1GiqNQGhqPL1inMAMnA5KQjZAwjQAAQoIAAnRkqg");
	var mask_6_graphics_40 = new cjs.Graphics().p("AkbZdQqGmviYr5QiYr5GvqEQGuqGL4iYMALeA5ZQjHAoi/AAQocAAnbk+g");
	var mask_6_graphics_41 = new cjs.Graphics().p("AkoZIQp9m8iJr8QiJr7G9p8QG6p9L7iJMAKUA5nQi0AgitAAQoxAAnllSg");
	var mask_6_graphics_42 = new cjs.Graphics().p("Ak0YzQp0nJh6r/Qh5r+HJpyQHHp0L+h6MAJJA50QihAZibAAQpGAAnulng");
	var mask_6_graphics_43 = new cjs.Graphics().p("AlAYdQprnWhqsBQhqsAHWppQHTprMAhqMAH/A5/QiOATiIAAQpdAAn2l9g");
	var mask_6_graphics_44 = new cjs.Graphics().p("AlLYGQpinihasDQhbsCHipgQHgphMChaMAG0A6IQh6AOh2AAQpzAAn+mUg");
	var mask_6_graphics_45 = new cjs.Graphics().p("AlWXuQpYnthLsFQhLsDHupXQHspXMEhLMAFpA6QQhmAKhjAAQqKAAoGmsg");
	var mask_6_graphics_46 = new cjs.Graphics().p("AlgXWQpOn5g7sGQg8sFH6pMQH4pNMFg8MAEfA6WQhSAHhPAAQqjAAoNnEg");
	var mask_6_graphics_47 = new cjs.Graphics().p("AlqW+QpDoFgssHQgssGIFpCQIDpDMHgsMADUA6bQg9ADg8AAQq8AAoTnbg");
	var mask_6_graphics_48 = new cjs.Graphics().p("AlzWlQo5oRgcsIQgcsGIQo4QIPo4MHgdMACJA6fIhPABQrWAAoZn0g");
	var mask_6_graphics_49 = new cjs.Graphics().p("Al8WLQouocgMsIQgNsHIcotQIaouMIgMMAA9A6gIgkAAQrxAAofoOg");
	var mask_6_graphics_50 = new cjs.Graphics().p("AmLVxQojonADsJQADsHInohQIlojMIADMgAOA6gQsIgDoholg");
	var mask_6_graphics_51 = new cjs.Graphics().p("Am4VWQoYoyATsIQASsHIyoWQIwoYMIATMgBaA6fQsHgSoWoxg");
	var mask_6_graphics_52 = new cjs.Graphics().p("AnkU7QoNo8AisHQAjsHI8oLQI6oMMIAiMgClA6cQsHgioKo7g");
	var mask_6_graphics_53 = new cjs.Graphics().p("AoQUgQoBpHAysFQAysHJGn/QJFoBMHAyMgDwA6YQsGgxn/pGg");
	var mask_6_graphics_54 = new cjs.Graphics().p("Ao7UFQn1pRBBsEQBBsFJRn0QJPn1MFBBMgE6A6TQsEhBn0pQg");
	var mask_6_graphics_55 = new cjs.Graphics().p("ApmTqQnppbBRsDQBRsEJbnnQJYnpMEBRMgGFA6LQsDhQnopag");
	var mask_6_graphics_56 = new cjs.Graphics().p("AqPTPQndplBgsBQBgsCJlnbQJindMCBgMgHQA6DQsBhgnbpjg");
	var mask_6_graphics_57 = new cjs.Graphics().p("Aq5S0QnQpvBwr/QBvr/JunPQJsnRMABwMgIbA55Qr/hwnPpsg");
	var mask_6_graphics_58 = new cjs.Graphics().p("ArhSYQnEp3B/r9QB/r9J3nCQJ1nEL+B/MgJlA5tQr9h/nCp2g");
	var mask_6_graphics_59 = new cjs.Graphics().p("AsJR8Qm3qACOr6QCPr6KAm2QJ+m3L6COMgKvA5gQr5iOm2p/g");
	var mask_6_graphics_60 = new cjs.Graphics().p("As2RdQmoqKCgr3QCgr3KKmmQKHmpL4CgMgMDA5PQr3igmnqIg");
	var mask_6_graphics_61 = new cjs.Graphics().p("AthQ9QmaqTCyrzQCxrzKTmYQKSmZLzCxMgNXA49QryiymYqSg");
	var mask_6_graphics_62 = new cjs.Graphics().p("AuMQeQmKqdDCruQDDrvKcmJQKbmKLvDCMgOqA4oQrujCmJqbg");
	var mask_6_graphics_63 = new cjs.Graphics().p("Au2P+Ql7qlDUrqQDUrqKll5QKjl7LrDTMgP9A4SQrqjUl5qkg");
	var mask_6_graphics_64 = new cjs.Graphics().p("AvfPfQlrquDlrlQDkrlKulqQKslrLmDlMgRQA35Qrkjllqqsg");
	var mask_6_graphics_65 = new cjs.Graphics().p("AwHO/Qlbq2D2rfQD1rgK2lZQK0lcLgD2MgShA3eQrfj1laq1g");
	var mask_6_graphics_66 = new cjs.Graphics().p("AwuOgQlLq+EHraQEGraK+lJQK7lMLaEHMgTxA3CQrakGlKq8g");
	var mask_6_graphics_67 = new cjs.Graphics().p("AxUOAQk6rFEXrTQEXrULFk5QLDk8LUEXMgVCA2lQrUkXk6rEg");
	var mask_6_graphics_68 = new cjs.Graphics().p("Ax5NhQkqrNEorMQEnrNLMkpQLKkrLNEnMgWRA2FQrNkokqrKg");
	var mask_6_graphics_69 = new cjs.Graphics().p("AycNBQkarTE4rFQE4rGLSkZQLRkaLGE4MgXgA1jQrGk4kZrSg");
	var mask_6_graphics_70 = new cjs.Graphics().p("Ay/MiQkJrZFIq+QFIq/LZkIQLXkKK/FIMgYvA1AQq/lIkIrYg");
	var mask_6_graphics_71 = new cjs.Graphics().p("AzhMDQj4rfFYq2QFYq4Lfj3QLdj5K3FYMgZ8A0aQq3lYj4rdg");
	var mask_6_graphics_72 = new cjs.Graphics().p("A0BLkQjorkFoqvQFoqvLkjmQLjjoKvFoMgbIAzzQqvlojnrjg");
	var mask_6_graphics_73 = new cjs.Graphics().p("A0hLFQjWrpF4qmQF3qnLpjVQLojXKnF3MgcUAzLQqnl4jWrog");
	var mask_6_graphics_74 = new cjs.Graphics().p("A0/KmQjFrtGHqeQGHqeLujEQLsjGKeGHMgdeAygQqemHjFrtg");
	var mask_6_graphics_75 = new cjs.Graphics().p("A1cKIQi0ryGWqVQGXqULxizQLxi1KVGWMgeoAx0QqUmWi0rxg");
	var mask_6_graphics_76 = new cjs.Graphics().p("A14JqQiir2GlqLQGlqML1ihQL2ijKLGlMgfwAxGQqLmmijr0g");
	var mask_6_graphics_77 = new cjs.Graphics().p("A2SJLQiSr5G1qBQG0qCL4iPQL5iTKCG1Mgg4AwWQqBm0iRr5g");
	var mask_6_graphics_78 = new cjs.Graphics().p("A2sIuQh/r9HCp3QHDp3L8h/QL8iAJ3HCMgh+AvmQp3nDiAr7g");
	var mask_6_graphics_79 = new cjs.Graphics().p("A3EIQQhur/HRptQHRptL+hsQL/hvJtHRMgjDAuyQptnRhur+g");
	var mask_6_graphics_80 = new cjs.Graphics().p("A3bHyQhcsBHfpiQHfpiMBhbQMBhdJiHfMgkIAt+QphnfhdsBg");
	var mask_6_graphics_81 = new cjs.Graphics().p("A3wHVQhLsDHtpXQHtpWMChKQMDhMJXHtMglKAtIQpXnthKsCg");
	var mask_6_graphics_82 = new cjs.Graphics().p("A4EG4Qg6sEH7pMQH7pLMDg4QMFg6JLH7MgmLAsRQpMn7g4sEg");
	var mask_6_graphics_83 = new cjs.Graphics().p("A4XGcQgosGIIo/QIIpAMFgmQMGgoI/IIMgnMArXQo/oHgnsFg");
	var mask_6_graphics_84 = new cjs.Graphics().p("A4pGAQgVsHIUozQIVo0MGgUQMGgXI0IVMgoLAqeQozoVgWsFg");
	var mask_6_graphics_85 = new cjs.Graphics().p("A45FkQgEsHIionQIionMFgDQMHgEInIhMgpIApiQonoigEsFg");
	var mask_6_graphics_86 = new cjs.Graphics().p("A5IFIQAOsHIuoaQIvoaMFAPQMHANIaIuMgqFAolQoaouAOsGg");
	var mask_6_graphics_87 = new cjs.Graphics().p("A5VEtQAgsGI6oOQI6oNMFAhQMHAfINI6MgrAAnmQoNo6AgsFg");
	var mask_6_graphics_88 = new cjs.Graphics().p("A5hESQAysFJGoAQJGoAMEAyQMFAxIAJGMgr4AmmQoApGAxsEg");
	var mask_6_graphics_89 = new cjs.Graphics().p("A5sD4QBEsEJSnzQJRnyMDBEQMEBCHyJSMgswAllQnzpSBDsCg");
	var mask_6_graphics_90 = new cjs.Graphics().p("A55DRQBesBJineQJjneL/BeQMCBdHeJiMguBAkDQnepjBdsAg");
	var mask_6_graphics_91 = new cjs.Graphics().p("A6DCsQB4r+JynJQJynJL9B4QL9B3HJJyMgvNAidQnJpyB3r8g");
	var mask_6_graphics_92 = new cjs.Graphics().p("A6KCHQCSr5KBm0QKBmzL4CSQL5CQG0KCMgwWAg2Qm0qCCRr4g");
	var mask_6_graphics_93 = new cjs.Graphics().p("A6OBkQCrr0KQmeQKQmdLyCsQL0CqGeKPMgxcAfMQmeqQCrryg");
	var mask_6_graphics_94 = new cjs.Graphics().p("A6PBBQDFrtKdmIQKemHLsDGQLtDDGIKeMgyeAdfQmHqdDErtg");
	var mask_6_graphics_95 = new cjs.Graphics().p("A6NAgQDernKqlwQKrlwLlDfQLmDcFxKrMgzdAbwQlwqqDerlg");
	var mask_6_graphics_96 = new cjs.Graphics().p("A6JAAQD4rfK2lZQK3lZLdD4QLeD2FZK2Mg0WAaAQlZq2D2rdg");
	var mask_6_graphics_97 = new cjs.Graphics().p("A6BgfQEQrWLClCQLBlBLVERQLWEPFBLBMg1NAYOQlBrCEPrUg");
	var mask_6_graphics_98 = new cjs.Graphics().p("A52g9QEorNLNkpQLLkpLLEpQLNEnEpLNMg2AAWZQkprNEorKg");
	var mask_6_graphics_99 = new cjs.Graphics().p("A5phZQFBrDLWkRQLVkQLBFBQLCE/ERLVMg2vAUkQkRrWFAq/g");
	var mask_6_graphics_100 = new cjs.Graphics().p("A5Zh1QFZq3Lfj4QLej4K1FZQK3FXD4LeMg3ZASsQj4rfFXq0g");
	var mask_6_graphics_101 = new cjs.Graphics().p("A5FiPQFwqrLmjfQLmjfKqFwQKrFvDfLmMg4AAQzQjfrnFvqog");
	var mask_6_graphics_102 = new cjs.Graphics().p("A4vioQGHqeLujGQLtjFKcGHQKeGFDGLtMg4iAO6QjGruGGqcg");
	var mask_6_graphics_103 = new cjs.Graphics().p("A4Wi/QGdqRL0isQL0isKPGeQKQGcCsLzMg5BAM+Qirr0GcqOg");
	var mask_6_graphics_104 = new cjs.Graphics().p("A36jVQGzqDL6iSQL4iSKBG0QKCGyCSL4Mg5aALCQiTr6Gzp/g");
	var mask_6_graphics_105 = new cjs.Graphics().p("A3cjqQHJpzL+h5QL9h4JyHJQJzHIB4L9Mg5wAJFQh5r/HIpwg");
	var mask_6_graphics_106 = new cjs.Graphics().p("A26j9QHepkMBheQMBheJiHeQJjHdBeMAMg6CAHHQhesCHdpgg");
	var mask_6_graphics_107 = new cjs.Graphics().p("A2WkPQHypTMFhEQMDhEJSHyQJSHxBEMEMg6PAFJQhEsFHxpQg");
	var mask_6_graphics_108 = new cjs.Graphics().p("A1vkgQIGpBMHgqQMFgqJAIHQJCIEApMGMg6YADKQgqsHIFo/g");
	var mask_6_graphics_109 = new cjs.Graphics().p("A1FkuQIZowMIgQQMGgPIuIaQIwIXAPMHMg6dABLQgQsHIZotg");
	var mask_6_graphics_110 = new cjs.Graphics().p("A9PPMQALsHIrobQIsodMHALQMHALIcIsQIdIqgLMHg");
	var mask_6_graphics_111 = new cjs.Graphics().p("A9ONtQAlsGI9oIQI+oKMGAlQMHAlIII/QIKI7glMHg");
	var mask_6_graphics_112 = new cjs.Graphics().p("A9MMOQA/sFJOn0QJQn2MEBAQMFA/H1JQQH2JNg/MFg");
	var mask_6_graphics_113 = new cjs.Graphics().p("A9JKvQBZsBJfngQJhniMBBZQMCBaHhJgQHiJehaMDg");
	var mask_6_graphics_114 = new cjs.Graphics().p("A9FJRQBzr+JvnMQJwnML+BzQL/B0HMJwQHNJuh0L/g");
	var mask_6_graphics_115 = new cjs.Graphics().p("A9BHzQCOr6J+m2QKAm3L5CNQL7COG2J/QG4J+iOL6g");
	var mask_6_graphics_116 = new cjs.Graphics().p("A87GWQCor1KMmgQKOmiL1CoQL1CnGgKOQGiKMinL1g");
	var mask_6_graphics_117 = new cjs.Graphics().p("A80E5QDBruKbmKQKcmLLuDBQLvDBGKKbQGLKajBLvg");
	var mask_6_graphics_118 = new cjs.Graphics().p("A8sDdQDbrnKnlzQKpl0LnDaQLpDaFzKpQF0KnjaLog");
	var mask_6_graphics_119 = new cjs.Graphics().p("A8iCCQDzrgK0lbQK1ldLfDzQLhD0FcK0QFdKzj0Lhg");
	var mask_6_graphics_120 = new cjs.Graphics().p("A8MAAQEXrULFk6QLGk6LSEYQLUEYE5LFQE7LEkYLTg");
	var mask_6_graphics_121 = new cjs.Graphics().p("A7piBQE7rGLTkWQLVkWLEE7QLFE7EWLUQEXLTk7LFg");
	var mask_6_graphics_122 = new cjs.Graphics().p("A7Cj/QFeq1LgjyQLhjzK1FeQK1FeDxLgQDzLhleK1g");
	var mask_6_graphics_123 = new cjs.Graphics().p("A6Xl7QGAqjLrjNQLtjOKjGAQKjGADMLsQDPLsmAKjg");
	var mask_6_graphics_124 = new cjs.Graphics().p("A5nnyQGhqQL1ioQL1ipKQGhQKPGiCnL0QCqL2mhKPg");
	var mask_6_graphics_125 = new cjs.Graphics().p("A40pmQHBp6L8iDQL+iDJ6HBQJ6HBCCL9QCDL9nBJ6g");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_6_graphics_9,x:151.5,y:194.4}).wait(1).to({graphics:mask_6_graphics_10,x:150.2,y:194.4}).wait(1).to({graphics:mask_6_graphics_11,x:148.9,y:194.4}).wait(1).to({graphics:mask_6_graphics_12,x:147.6,y:194.4}).wait(1).to({graphics:mask_6_graphics_13,x:146.2,y:194.4}).wait(1).to({graphics:mask_6_graphics_14,x:144.8,y:194.5}).wait(1).to({graphics:mask_6_graphics_15,x:143.3,y:194.5}).wait(1).to({graphics:mask_6_graphics_16,x:141.8,y:194.5}).wait(1).to({graphics:mask_6_graphics_17,x:140.4,y:194.5}).wait(1).to({graphics:mask_6_graphics_18,x:138.8,y:194.6}).wait(1).to({graphics:mask_6_graphics_19,x:137.3,y:194.6}).wait(1).to({graphics:mask_6_graphics_20,x:135.7,y:194.6}).wait(1).to({graphics:mask_6_graphics_21,x:134.2,y:194.6}).wait(1).to({graphics:mask_6_graphics_22,x:132.5,y:194.7}).wait(1).to({graphics:mask_6_graphics_23,x:130.9,y:194.7}).wait(1).to({graphics:mask_6_graphics_24,x:129.3,y:194.7}).wait(1).to({graphics:mask_6_graphics_25,x:127.6,y:194.7}).wait(1).to({graphics:mask_6_graphics_26,x:126,y:194.7}).wait(1).to({graphics:mask_6_graphics_27,x:124.3,y:194.7}).wait(1).to({graphics:mask_6_graphics_28,x:122.6,y:194.8}).wait(1).to({graphics:mask_6_graphics_29,x:120.9,y:194.8}).wait(1).to({graphics:mask_6_graphics_30,x:119.1,y:194.8}).wait(1).to({graphics:mask_6_graphics_31,x:117.4,y:194.8}).wait(1).to({graphics:mask_6_graphics_32,x:115.6,y:194.8}).wait(1).to({graphics:mask_6_graphics_33,x:113.9,y:194.8}).wait(1).to({graphics:mask_6_graphics_34,x:112.1,y:194.8}).wait(1).to({graphics:mask_6_graphics_35,x:110.3,y:194.7}).wait(1).to({graphics:mask_6_graphics_36,x:108.6,y:194.7}).wait(1).to({graphics:mask_6_graphics_37,x:106.8,y:194.7}).wait(1).to({graphics:mask_6_graphics_38,x:105,y:194.7}).wait(1).to({graphics:mask_6_graphics_39,x:103.1,y:194.7}).wait(1).to({graphics:mask_6_graphics_40,x:101.3,y:194.7}).wait(1).to({graphics:mask_6_graphics_41,x:99.5,y:194.6}).wait(1).to({graphics:mask_6_graphics_42,x:97.7,y:194.6}).wait(1).to({graphics:mask_6_graphics_43,x:95.8,y:194.6}).wait(1).to({graphics:mask_6_graphics_44,x:94,y:194.6}).wait(1).to({graphics:mask_6_graphics_45,x:92.2,y:194.6}).wait(1).to({graphics:mask_6_graphics_46,x:90.3,y:194.6}).wait(1).to({graphics:mask_6_graphics_47,x:88.4,y:194.5}).wait(1).to({graphics:mask_6_graphics_48,x:86.6,y:194.5}).wait(1).to({graphics:mask_6_graphics_49,x:84.7,y:194.5}).wait(1).to({graphics:mask_6_graphics_50,x:83.5,y:194.5}).wait(1).to({graphics:mask_6_graphics_51,x:85.4,y:194.5}).wait(1).to({graphics:mask_6_graphics_52,x:87.3,y:194.4}).wait(1).to({graphics:mask_6_graphics_53,x:89.1,y:194.3}).wait(1).to({graphics:mask_6_graphics_54,x:91,y:194.2}).wait(1).to({graphics:mask_6_graphics_55,x:92.9,y:194}).wait(1).to({graphics:mask_6_graphics_56,x:94.7,y:193.8}).wait(1).to({graphics:mask_6_graphics_57,x:96.5,y:193.6}).wait(1).to({graphics:mask_6_graphics_58,x:98.4,y:193.3}).wait(1).to({graphics:mask_6_graphics_59,x:100.1,y:192.9}).wait(1).to({graphics:mask_6_graphics_60,x:102.2,y:192.5}).wait(1).to({graphics:mask_6_graphics_61,x:104.3,y:192.1}).wait(1).to({graphics:mask_6_graphics_62,x:106.3,y:191.5}).wait(1).to({graphics:mask_6_graphics_63,x:108.4,y:191}).wait(1).to({graphics:mask_6_graphics_64,x:110.4,y:190.4}).wait(1).to({graphics:mask_6_graphics_65,x:112.5,y:189.7}).wait(1).to({graphics:mask_6_graphics_66,x:114.5,y:189}).wait(1).to({graphics:mask_6_graphics_67,x:116.5,y:188.3}).wait(1).to({graphics:mask_6_graphics_68,x:118.5,y:187.5}).wait(1).to({graphics:mask_6_graphics_69,x:120.4,y:186.7}).wait(1).to({graphics:mask_6_graphics_70,x:122.4,y:185.8}).wait(1).to({graphics:mask_6_graphics_71,x:124.3,y:184.8}).wait(1).to({graphics:mask_6_graphics_72,x:126.3,y:183.9}).wait(1).to({graphics:mask_6_graphics_73,x:128.2,y:182.9}).wait(1).to({graphics:mask_6_graphics_74,x:130,y:181.8}).wait(1).to({graphics:mask_6_graphics_75,x:131.9,y:180.7}).wait(1).to({graphics:mask_6_graphics_76,x:133.7,y:179.6}).wait(1).to({graphics:mask_6_graphics_77,x:135.5,y:178.4}).wait(1).to({graphics:mask_6_graphics_78,x:137.3,y:177.2}).wait(1).to({graphics:mask_6_graphics_79,x:139.1,y:175.9}).wait(1).to({graphics:mask_6_graphics_80,x:140.8,y:174.6}).wait(1).to({graphics:mask_6_graphics_81,x:142.5,y:173.2}).wait(1).to({graphics:mask_6_graphics_82,x:144.2,y:171.9}).wait(1).to({graphics:mask_6_graphics_83,x:145.8,y:170.4}).wait(1).to({graphics:mask_6_graphics_84,x:147.4,y:169}).wait(1).to({graphics:mask_6_graphics_85,x:148.9,y:167.5}).wait(1).to({graphics:mask_6_graphics_86,x:150.4,y:166}).wait(1).to({graphics:mask_6_graphics_87,x:151.8,y:164.4}).wait(1).to({graphics:mask_6_graphics_88,x:153.3,y:162.8}).wait(1).to({graphics:mask_6_graphics_89,x:154.6,y:161.2}).wait(1).to({graphics:mask_6_graphics_90,x:156.5,y:158.8}).wait(1).to({graphics:mask_6_graphics_91,x:158.4,y:156.2}).wait(1).to({graphics:mask_6_graphics_92,x:160.2,y:153.7}).wait(1).to({graphics:mask_6_graphics_93,x:161.9,y:151}).wait(1).to({graphics:mask_6_graphics_94,x:163.5,y:148.3}).wait(1).to({graphics:mask_6_graphics_95,x:165,y:145.5}).wait(1).to({graphics:mask_6_graphics_96,x:166.4,y:142.7}).wait(1).to({graphics:mask_6_graphics_97,x:167.8,y:139.9}).wait(1).to({graphics:mask_6_graphics_98,x:169,y:137}).wait(1).to({graphics:mask_6_graphics_99,x:170.2,y:134}).wait(1).to({graphics:mask_6_graphics_100,x:171.2,y:131}).wait(1).to({graphics:mask_6_graphics_101,x:172.2,y:128}).wait(1).to({graphics:mask_6_graphics_102,x:173.1,y:125}).wait(1).to({graphics:mask_6_graphics_103,x:173.9,y:121.9}).wait(1).to({graphics:mask_6_graphics_104,x:174.5,y:118.8}).wait(1).to({graphics:mask_6_graphics_105,x:175.1,y:115.7}).wait(1).to({graphics:mask_6_graphics_106,x:175.6,y:112.5}).wait(1).to({graphics:mask_6_graphics_107,x:175.9,y:109.4}).wait(1).to({graphics:mask_6_graphics_108,x:176.2,y:106.2}).wait(1).to({graphics:mask_6_graphics_109,x:176.3,y:103}).wait(1).to({graphics:mask_6_graphics_110,x:176.3,y:102.4}).wait(1).to({graphics:mask_6_graphics_111,x:176.4,y:105.6}).wait(1).to({graphics:mask_6_graphics_112,x:176.6,y:108.8}).wait(1).to({graphics:mask_6_graphics_113,x:176.9,y:112}).wait(1).to({graphics:mask_6_graphics_114,x:177.4,y:115.1}).wait(1).to({graphics:mask_6_graphics_115,x:177.9,y:118.2}).wait(1).to({graphics:mask_6_graphics_116,x:178.6,y:121.3}).wait(1).to({graphics:mask_6_graphics_117,x:179.4,y:124.4}).wait(1).to({graphics:mask_6_graphics_118,x:180.2,y:127.5}).wait(1).to({graphics:mask_6_graphics_119,x:181.1,y:130.5}).wait(1).to({graphics:mask_6_graphics_120,x:182,y:134.8}).wait(1).to({graphics:mask_6_graphics_121,x:182,y:139.1}).wait(1).to({graphics:mask_6_graphics_122,x:182,y:143.3}).wait(1).to({graphics:mask_6_graphics_123,x:182,y:147.4}).wait(1).to({graphics:mask_6_graphics_124,x:181.9,y:151.3}).wait(1).to({graphics:mask_6_graphics_125,x:181.8,y:155.2}).wait(430));

	// Layer 2
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(20,1,1).p("AqYlOQIYl7HoEAQHoEAklLMQgJAXgKAX");
	this.shape_7.setTransform(164.4,162.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(20,1,1).p("AqY2/QIYl7HoEAQHoEAklLMQklLLk4KcQk5KbCaCUQBwBsBiAO");
	this.shape_8.setTransform(164.4,276.6);

	var maskedShapeInstanceList = [this.shape_7,this.shape_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7}]},9).to({state:[{t:this.shape_8}]},53).wait(493));

	// Letter
	this.instance_3 = new lib.V("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(275,275);
	this.instance_3.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(555));

	// Background
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_9.setTransform(275,275,3.373,2.543);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_10.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9}]}).wait(555));

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