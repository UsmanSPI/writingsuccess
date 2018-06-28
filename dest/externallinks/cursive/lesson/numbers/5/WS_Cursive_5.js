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


(lib._5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApZaQQi1AAj0hYQjZhPjbiEQjNh4iHh7QiKh7AAhDQAAiQCVAAQAkAAGgErQC+CECbBGQDNBeC2AAQC/AADBg4QDNg6CjhqQCzh1BkibQBsiqAAjKQAAjKhViZQhni3i4AAQh+AAj1BRQj2BPhtAAQiJAAgBibIASg9IIJ3uQAnhmBjAAIcgAAQCQAAAACYQAACKiQAAI7AAAImQSdQEWhHDVAAQChAACBBHQB1BDBVB4QBPBxAsCWQAmCMAACZQAAEKh4DcQhvDHjOCTQi7CHj7BSQjnBMj/AUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-194.1,-168,388.2,336.1);


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
(lib.WS_Cursive_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_460 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(460).call(this.frame_460).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(270.9,122.2,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[270.9,122.3,246.1,197.7,221.3,273.1]}},75).wait(11).to({x:270.9,y:122.2},0).to({x:453.4},79).wait(15).to({x:221,y:273},0).to({guide:{path:[221.1,273.3,246.1,266.9,275.4,262.6,305.1,258.3,325.9,280.7,346.7,303,344.2,333.6,341.6,364.2,321.8,386.3,302,408.4,273.6,418,245.2,427.6,216.1,429,186.5,430.5,160.6,416.7,134.3,402.8,111.4,384,103.1,377.2,94.7,370.4]}},194).wait(17).to({startPosition:0},0).to({guide:{path:[94.1,372,83.9,440.9,148,461.3,167.8,467.7,189.2,470.4,251.6,479,270.1,542.1,284.4,590.6,272.6,639.6]}},60).wait(1));

	// Layer 12
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(221,274,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},75).wait(11).to({_off:false,x:453.9,y:122.2},0).to({_off:true},79).wait(15).to({_off:false,x:95,y:371},0).to({_off:true},194).wait(78));

	// Layer 10
	this.instance_1 = new lib.ar4("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(370.2,335.2,1,1,0,-59.3,120.7,-0.1,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(189).to({_off:false},0).wait(272));

	// Layer 7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_320 = new cjs.Graphics().p("EAQBAkIIAAyDIFAAAIAASDg");
	var mask_graphics_321 = new cjs.Graphics().p("AirJBIAAyCIFXAAIAASCg");
	var mask_graphics_322 = new cjs.Graphics().p("Ai3JBIAAyCIFvAAIAASCg");
	var mask_graphics_323 = new cjs.Graphics().p("AjCJBIAAyCIGFAAIAASCg");
	var mask_graphics_324 = new cjs.Graphics().p("AjOJBIAAyCIGdAAIAASCg");
	var mask_graphics_325 = new cjs.Graphics().p("AjaJBIAAyCIG1AAIAASCg");
	var mask_graphics_326 = new cjs.Graphics().p("AjlJBIAAyCIHLAAIAASCg");
	var mask_graphics_327 = new cjs.Graphics().p("AjxJBIAAyCIHjAAIAASCg");
	var mask_graphics_328 = new cjs.Graphics().p("Aj9JBIAAyCIH7AAIAASCg");
	var mask_graphics_329 = new cjs.Graphics().p("AkIJBIAAyCIISAAIAASCg");
	var mask_graphics_330 = new cjs.Graphics().p("AkUJBIAAyCIIpAAIAASCg");
	var mask_graphics_331 = new cjs.Graphics().p("AkgJBIAAyCIJBAAIAASCg");
	var mask_graphics_332 = new cjs.Graphics().p("AksJBIAAyCIJZAAIAASCg");
	var mask_graphics_333 = new cjs.Graphics().p("Ak4JBIAAyCIJxAAIAASCg");
	var mask_graphics_334 = new cjs.Graphics().p("AlDJBIAAyCIKHAAIAASCg");
	var mask_graphics_335 = new cjs.Graphics().p("AlPJBIAAyCIKfAAIAASCg");
	var mask_graphics_336 = new cjs.Graphics().p("AlaJBIAAyCIK2AAIAASCg");
	var mask_graphics_337 = new cjs.Graphics().p("AlmJBIAAyCILNAAIAASCg");
	var mask_graphics_338 = new cjs.Graphics().p("AlyJBIAAyCILlAAIAASCg");
	var mask_graphics_339 = new cjs.Graphics().p("Al+JBIAAyCIL9AAIAASCg");
	var mask_graphics_340 = new cjs.Graphics().p("AmKJBIAAyCIMVAAIAASCg");
	var mask_graphics_341 = new cjs.Graphics().p("AmVJBIAAyCIMrAAIAASCg");
	var mask_graphics_342 = new cjs.Graphics().p("AmhJBIAAyCINDAAIAASCg");
	var mask_graphics_343 = new cjs.Graphics().p("AmtJBIAAyCINbAAIAASCg");
	var mask_graphics_344 = new cjs.Graphics().p("Am4JBIAAyCINxAAIAASCg");
	var mask_graphics_345 = new cjs.Graphics().p("AnEJBIAAyCIOJAAIAASCg");
	var mask_graphics_346 = new cjs.Graphics().p("AnQJBIAAyCIOhAAIAASCg");
	var mask_graphics_347 = new cjs.Graphics().p("AncJBIAAyCIO5AAIAASCg");
	var mask_graphics_348 = new cjs.Graphics().p("AnnJBIAAyCIPPAAIAASCg");
	var mask_graphics_349 = new cjs.Graphics().p("AnzJBIAAyCIPnAAIAASCg");
	var mask_graphics_350 = new cjs.Graphics().p("An/JBIAAyCIP/AAIAASCg");
	var mask_graphics_351 = new cjs.Graphics().p("AoKJBIAAyCIQVAAIAASCg");
	var mask_graphics_352 = new cjs.Graphics().p("AoWJBIAAyCIQtAAIAASCg");
	var mask_graphics_353 = new cjs.Graphics().p("AoiJBIAAyCIRFAAIAASCg");
	var mask_graphics_354 = new cjs.Graphics().p("AotJBIAAyCIRcAAIAASCg");
	var mask_graphics_355 = new cjs.Graphics().p("Ao5JBIAAyCIRzAAIAASCg");
	var mask_graphics_356 = new cjs.Graphics().p("ApFJBIAAyCISLAAIAASCg");
	var mask_graphics_357 = new cjs.Graphics().p("ApRJBIAAyCISjAAIAASCg");
	var mask_graphics_358 = new cjs.Graphics().p("ApdJBIAAyCIS7AAIAASCg");
	var mask_graphics_359 = new cjs.Graphics().p("ApoJBIAAyCITRAAIAASCg");
	var mask_graphics_360 = new cjs.Graphics().p("Ap0JBIAAyCITpAAIAASCg");
	var mask_graphics_361 = new cjs.Graphics().p("Ap/JBIAAyCIUAAAIAASCg");
	var mask_graphics_362 = new cjs.Graphics().p("AqLJBIAAyCIUXAAIAASCg");
	var mask_graphics_363 = new cjs.Graphics().p("AqXJBIAAyCIUvAAIAASCg");
	var mask_graphics_364 = new cjs.Graphics().p("AqjJBIAAyCIVHAAIAASCg");
	var mask_graphics_365 = new cjs.Graphics().p("AqvJBIAAyCIVfAAIAASCg");
	var mask_graphics_366 = new cjs.Graphics().p("Aq6JBIAAyCIV1AAIAASCg");
	var mask_graphics_367 = new cjs.Graphics().p("ArGJBIAAyCIWNAAIAASCg");
	var mask_graphics_368 = new cjs.Graphics().p("ArSJBIAAyCIWlAAIAASCg");
	var mask_graphics_369 = new cjs.Graphics().p("ArdJBIAAyCIW7AAIAASCg");
	var mask_graphics_370 = new cjs.Graphics().p("ArpJBIAAyCIXTAAIAASCg");
	var mask_graphics_371 = new cjs.Graphics().p("Ar1JBIAAyCIXrAAIAASCg");
	var mask_graphics_372 = new cjs.Graphics().p("AsAJBIAAyCIYCAAIAASCg");
	var mask_graphics_373 = new cjs.Graphics().p("AsMJBIAAyCIYZAAIAASCg");
	var mask_graphics_374 = new cjs.Graphics().p("AsYJBIAAyCIYxAAIAASCg");
	var mask_graphics_375 = new cjs.Graphics().p("AskJBIAAyCIZJAAIAASCg");
	var mask_graphics_376 = new cjs.Graphics().p("AswJBIAAyCIZhAAIAASCg");
	var mask_graphics_377 = new cjs.Graphics().p("As7JBIAAyCIZ3AAIAASCg");
	var mask_graphics_378 = new cjs.Graphics().p("AtHJBIAAyCIaPAAIAASCg");
	var mask_graphics_379 = new cjs.Graphics().p("AtSJBIAAyCIamAAIAASCg");
	var mask_graphics_380 = new cjs.Graphics().p("AteJBIAAyCIa9AAIAASCg");
	var mask_graphics_381 = new cjs.Graphics().p("EgGUAkIIAAyDIbVAAIAASDg");
	var mask_graphics_382 = new cjs.Graphics().p("AuCJBIAAyCIcFAAIAASCg");
	var mask_graphics_383 = new cjs.Graphics().p("EgHyAkIIAAyDIc2AAIAASDg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(320).to({graphics:mask_graphics_320,x:134.5,y:231.2}).wait(1).to({graphics:mask_graphics_321,x:251.8,y:404.7}).wait(1).to({graphics:mask_graphics_322,x:250.7,y:404.7}).wait(1).to({graphics:mask_graphics_323,x:249.5,y:404.7}).wait(1).to({graphics:mask_graphics_324,x:248.3,y:404.7}).wait(1).to({graphics:mask_graphics_325,x:247.2,y:404.7}).wait(1).to({graphics:mask_graphics_326,x:246,y:404.7}).wait(1).to({graphics:mask_graphics_327,x:244.8,y:404.7}).wait(1).to({graphics:mask_graphics_328,x:243.6,y:404.7}).wait(1).to({graphics:mask_graphics_329,x:242.5,y:404.7}).wait(1).to({graphics:mask_graphics_330,x:241.3,y:404.7}).wait(1).to({graphics:mask_graphics_331,x:240.1,y:404.7}).wait(1).to({graphics:mask_graphics_332,x:238.9,y:404.7}).wait(1).to({graphics:mask_graphics_333,x:237.8,y:404.7}).wait(1).to({graphics:mask_graphics_334,x:236.6,y:404.7}).wait(1).to({graphics:mask_graphics_335,x:235.4,y:404.7}).wait(1).to({graphics:mask_graphics_336,x:234.3,y:404.7}).wait(1).to({graphics:mask_graphics_337,x:233.1,y:404.7}).wait(1).to({graphics:mask_graphics_338,x:231.9,y:404.7}).wait(1).to({graphics:mask_graphics_339,x:230.7,y:404.7}).wait(1).to({graphics:mask_graphics_340,x:229.6,y:404.7}).wait(1).to({graphics:mask_graphics_341,x:228.4,y:404.7}).wait(1).to({graphics:mask_graphics_342,x:227.2,y:404.7}).wait(1).to({graphics:mask_graphics_343,x:226.1,y:404.7}).wait(1).to({graphics:mask_graphics_344,x:224.9,y:404.7}).wait(1).to({graphics:mask_graphics_345,x:223.7,y:404.7}).wait(1).to({graphics:mask_graphics_346,x:222.5,y:404.7}).wait(1).to({graphics:mask_graphics_347,x:221.4,y:404.7}).wait(1).to({graphics:mask_graphics_348,x:220.2,y:404.7}).wait(1).to({graphics:mask_graphics_349,x:219,y:404.7}).wait(1).to({graphics:mask_graphics_350,x:217.8,y:404.7}).wait(1).to({graphics:mask_graphics_351,x:216.7,y:404.7}).wait(1).to({graphics:mask_graphics_352,x:215.5,y:404.7}).wait(1).to({graphics:mask_graphics_353,x:214.3,y:404.7}).wait(1).to({graphics:mask_graphics_354,x:213.2,y:404.7}).wait(1).to({graphics:mask_graphics_355,x:212,y:404.7}).wait(1).to({graphics:mask_graphics_356,x:210.8,y:404.7}).wait(1).to({graphics:mask_graphics_357,x:209.6,y:404.7}).wait(1).to({graphics:mask_graphics_358,x:208.5,y:404.7}).wait(1).to({graphics:mask_graphics_359,x:207.3,y:404.7}).wait(1).to({graphics:mask_graphics_360,x:206.1,y:404.7}).wait(1).to({graphics:mask_graphics_361,x:205,y:404.7}).wait(1).to({graphics:mask_graphics_362,x:203.8,y:404.7}).wait(1).to({graphics:mask_graphics_363,x:202.6,y:404.7}).wait(1).to({graphics:mask_graphics_364,x:201.4,y:404.7}).wait(1).to({graphics:mask_graphics_365,x:200.3,y:404.7}).wait(1).to({graphics:mask_graphics_366,x:199.1,y:404.7}).wait(1).to({graphics:mask_graphics_367,x:197.9,y:404.7}).wait(1).to({graphics:mask_graphics_368,x:196.8,y:404.7}).wait(1).to({graphics:mask_graphics_369,x:195.6,y:404.7}).wait(1).to({graphics:mask_graphics_370,x:194.4,y:404.7}).wait(1).to({graphics:mask_graphics_371,x:193.2,y:404.7}).wait(1).to({graphics:mask_graphics_372,x:192.1,y:404.7}).wait(1).to({graphics:mask_graphics_373,x:190.9,y:404.7}).wait(1).to({graphics:mask_graphics_374,x:189.7,y:404.7}).wait(1).to({graphics:mask_graphics_375,x:188.5,y:404.7}).wait(1).to({graphics:mask_graphics_376,x:187.4,y:404.7}).wait(1).to({graphics:mask_graphics_377,x:186.2,y:404.7}).wait(1).to({graphics:mask_graphics_378,x:185,y:404.7}).wait(1).to({graphics:mask_graphics_379,x:183.9,y:404.7}).wait(1).to({graphics:mask_graphics_380,x:182.7,y:404.7}).wait(1).to({graphics:mask_graphics_381,x:134.5,y:231.2}).wait(1).to({graphics:mask_graphics_382,x:179.4,y:404.7}).wait(1).to({graphics:mask_graphics_383,x:134.8,y:231.2}).wait(78));

	// Layer 6
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(20,1,1).p("AAgrHQEGhNErguQEqguCxDoQCxDpgNEyQgNExjCDRQjCDRkbBvQkcBvkiAHQkYgIkLiCQkLiCigh+Qigh+hIg8");
	this.shape_1.setTransform(218.8,344.7);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(320).to({_off:false},0).wait(141));

	// Layer 5 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_189 = new cjs.Graphics().p("Ajef3QololAAsJQAAsIIlolQIkolMJAAMAAAA6lQsJAAokolg");
	var mask_1_graphics_190 = new cjs.Graphics().p("Ak1fDQoQo6AfsJQAesHI7oOQI4oQMIAeMgCSA6iQsJgfoNo5g");
	var mask_1_graphics_191 = new cjs.Graphics().p("AmKePQn5pPA9sHQA8sFJPn4QJMn5MHA9MgElA6ZQsGg9n3pNg");
	var mask_1_graphics_192 = new cjs.Graphics().p("AnddaQnhpiBbsEQBasCJingQJgniMDBbMgG2A6KQsEhbnfpgg");
	var mask_1_graphics_193 = new cjs.Graphics().p("AotckQnJp0B4r/QB5r/J0nHQJynKL/B5MgJHA52Qr+h5nIpzg");
	var mask_1_graphics_194 = new cjs.Graphics().p("Ap7bvQmwqGCWr6QCXr5KGmvQKDmwL6CWMgLYA5cQr5iXmvqDg");
	var mask_1_graphics_195 = new cjs.Graphics().p("ArGa5QmXqWC0rzQC1rzKVmVQKUmXLzC0MgNmA48Qryi0mWqUg");
	var mask_1_graphics_196 = new cjs.Graphics().p("AsOaDQl9qlDSrsQDRrrKll7QKjl9LsDSMgP0A4XQrrjSl7qjg");
	var mask_1_graphics_197 = new cjs.Graphics().p("AtUZNQliq0DvriQDvriKzlhQKxliLjDvMgSAA3sQrijulhqyg");
	var mask_1_graphics_198 = new cjs.Graphics().p("AuWYXQlHrBEMrZQELrXLAlFQK+lHLZELMgUKA28QrYkLlFq/g");
	var mask_1_graphics_199 = new cjs.Graphics().p("AvWXhQkqrNEnrNQEorNLLkpQLMksLNEoMgWSA2HQrNkokqrLg");
	var mask_1_graphics_200 = new cjs.Graphics().p("AwSWsQkOrYFDrCQFDrALXkNQLWkPLCFDMgYYA1MQrBlDkOrWg");
	var mask_1_graphics_201 = new cjs.Graphics().p("AxLV3QjxriFeq0QFfq0LgjwQLgjzK1FfMgabA0MQq1lejxrgg");
	var mask_1_graphics_202 = new cjs.Graphics().p("AyAVCQjVrrF5qlQF6qmLpjTQLpjWKmF6MgccAzHQqml5jUrpg");
	var mask_1_graphics_203 = new cjs.Graphics().p("AyyUNQi4ryGUqWQGTqWLxi2QLxi5KWGUMgeaAx9QqXmTi2rxg");
	var mask_1_graphics_204 = new cjs.Graphics().p("AzJT0Qiqr1GgqOQGgqPL0ioQL1iqKOGgMgfWAxYQqPmgior0g");
	var mask_1_graphics_205 = new cjs.Graphics().p("AzgTbQiar4GsqGQGsqHL3iaQL3ibKHGsMggRAwxQqHmsibr3g");
	var mask_1_graphics_206 = new cjs.Graphics().p("Az1TCQiMr7G4p+QG5p+L5iLQL6iNJ/G4MghMAwJQp/m4iMr6g");
	var mask_1_graphics_207 = new cjs.Graphics().p("A0JSqQh+r+HEp1QHFp2L8h9QL8h+J2HEMgiGAvgQp2nFh9r7g");
	var mask_1_graphics_208 = new cjs.Graphics().p("A0dSRQhvsAHQpsQHQpuL/huQL+hwJuHQMgjAAu2QptnQhvr+g");
	var mask_1_graphics_209 = new cjs.Graphics().p("A0wR5QhgsCHcpkQHcpkMAhgQMAhhJlHcMgj4AuKQpknbhhsAg");
	var mask_1_graphics_210 = new cjs.Graphics().p("A1CRgQhRsDHnpaQHnpcMChQQMChTJcHnMgkwAteQpbnnhSsCg");
	var mask_1_graphics_211 = new cjs.Graphics().p("A1SRIQhEsFHzpQQHzpSMDhCQMDhFJSHzMgllAsxQpSnzhDsDg");
	var mask_1_graphics_212 = new cjs.Graphics().p("A1jQxQg0sGH+pIQH9pIMFgzQMEg2JJH+MgmcAsCQpIn9g1sEg");
	var mask_1_graphics_213 = new cjs.Graphics().p("A1yQZQgmsHIJo9QIJo/MFglQMFgnI/IJMgnQArUQo/oJgmsFg");
	var mask_1_graphics_214 = new cjs.Graphics().p("A2AQCQgXsIITozQIUo1MFgWQMGgYI1ITMgoEAqjQo1oTgXsFg");
	var mask_1_graphics_215 = new cjs.Graphics().p("A2NPqQgJsHIeopQIeorMGgHQMGgKIrIeMgo4ApyQoqoegIsGg");
	var mask_1_graphics_216 = new cjs.Graphics().p("A2aPUQAGsIIpofQIoogMGAHQMGAGIgIoMgppApAQogopAGsFg");
	var mask_1_graphics_217 = new cjs.Graphics().p("A2lO9QAUsHIzoVQIzoVMFAWQMGAUIVIyMgqaAoNQoVozAVsFg");
	var mask_1_graphics_218 = new cjs.Graphics().p("A2wOmQAjsGI9oKQI9oKMEAkQMGAjIKI8MgrKAnZQoKo9AjsFg");
	var mask_1_graphics_219 = new cjs.Graphics().p("A26OQQAysGJHn+QJGn/MEAzQMFAxH/JGMgr5AmjQoApGAysEg");
	var mask_1_graphics_220 = new cjs.Graphics().p("A3DN6QBBsEJQn0QJQn0MDBCQMEBAH0JQMgsoAltQn0pQBAsDg");
	var mask_1_graphics_221 = new cjs.Graphics().p("A3KNlQBPsEJZnnQJanpMBBQQMCBOHpJaMgtVAk2QnppZBQsBg");
	var mask_1_graphics_222 = new cjs.Graphics().p("A3RNPQBesBJindQJindMABfQMBBdHdJiMguBAj/QndpiBesAg");
	var mask_1_graphics_223 = new cjs.Graphics().p("A3XM6QBsr/JsnRQJrnSL9BuQL/BrHSJsMgusAjGQnSprBtr+g");
	var mask_1_graphics_224 = new cjs.Graphics().p("A3cMmQB7r+J0nFQJ0nGL7B9QL8B5HGJzMgvVAiPQnGp0B7r7g");
	var mask_1_graphics_225 = new cjs.Graphics().p("A3hMPQCLr7J+m3QJ9m5L4CMQL6CKG5J9MgwDAhOQm5p+CLr4g");
	var mask_1_graphics_226 = new cjs.Graphics().p("A3lL5QCcr4KGmqQKHmrL1CcQL3CaGrKGMgwvAgNQmsqHCbr1g");
	var mask_1_graphics_227 = new cjs.Graphics().p("A3nLjQCrr0KQmdQKPmdLyCsQLzCqGdKOMgxaAfLQmdqPCrryg");
	var mask_1_graphics_228 = new cjs.Graphics().p("A3oLNQC7rvKYmQQKXmPLvC8QLvC5GQKXMgyDAeIQmQqYC7rug");
	var mask_1_graphics_229 = new cjs.Graphics().p("A3oK4QDLrrKgmCQKfmBLrDLQLrDKGCKfMgyrAdEQmCqgDLrqg");
	var mask_1_graphics_230 = new cjs.Graphics().p("A3nKjQDarnKolzQKolzLmDbQLnDaFzKnMgzRAb/QlzqoDarmg");
	var mask_1_graphics_231 = new cjs.Graphics().p("A3lKPQDqriKwllQKvllLiDrQLiDpFlKvMgz3Aa6QllqwDqrhg");
	var mask_1_graphics_232 = new cjs.Graphics().p("A3iJ7QD6rdK3lWQK2lXLdD7QLdD4FXK3Mg0bAZzQlWq3D5rcg");
	var mask_1_graphics_233 = new cjs.Graphics().p("A3dJnQEJrXK+lIQK+lHLXEKQLYEHFHK+Mg08AYsQlIq+EJrXg");
	var mask_1_graphics_234 = new cjs.Graphics().p("A3XJUQEYrRLFk5QLEk5LREZQLTEXE4LEMg1dAXlQk4rFEYrRg");
	var mask_1_graphics_235 = new cjs.Graphics().p("A3RJCQEorMLLkpQLLkqLLEoQLNEmEpLLMg18AWcQkprLEmrLg");
	var mask_1_graphics_236 = new cjs.Graphics().p("A3JIwQE3rFLSkbQLQkaLFE3QLGE1EbLRMg2aAVTQkarSE1rEg");
	var mask_1_graphics_237 = new cjs.Graphics().p("A2/IeQFFq+LXkMQLXkLK+FGQK/FEEMLXMg22AUKQkLrYFFq+g");
	var mask_1_graphics_238 = new cjs.Graphics().p("A21INQFUq3Ldj8QLcj8K3FVQK4FRD8LdMg3QATAQj7rdFTq3g");
	var mask_1_graphics_239 = new cjs.Graphics().p("A2qH9QFjqxLijsQLhjsKwFjQKxFgDsLiMg3oAR1QjtriFiqvg");
	var mask_1_graphics_240 = new cjs.Graphics().p("A2dHtQFxqpLnjdQLmjdKoFyQKqFvDcLnMg4AAQpQjcrmFwqog");
	var mask_1_graphics_241 = new cjs.Graphics().p("A2PHdQF/qhLrjNQLrjNKgGAQKiF9DNLsMg4WAPeQjNrsF/qgg");
	var mask_1_graphics_242 = new cjs.Graphics().p("A2BHOQGOqYLwi+QLui9KYGOQKZGLC+LwMg4qAORQi9rvGMqYg");
	var mask_1_graphics_243 = new cjs.Graphics().p("A1xHAQGcqQLziuQLzitKPGcQKRGZCtLzMg48ANFQitrzGaqPg");
	var mask_1_graphics_244 = new cjs.Graphics().p("A1gGyQGqqIL2idQL2ieKHGqQKIGnCeL3Mg5NAL4Qier3GoqGg");
	var mask_1_graphics_245 = new cjs.Graphics().p("A1OGkQG3p+L6iNQL5iOJ+G3QJ/G1COL6Mg5dAKrQiNr6G1p+g");
	var mask_1_graphics_246 = new cjs.Graphics().p("A06GXQHEp0L9h+QL8h9J0HEQJ2HCB9L9Mg5qAJdQh9r8HDp1g");
	var mask_1_graphics_247 = new cjs.Graphics().p("A0mGLQHRprMAhtQL+huJrHRQJsHQBtL/Mg52AIQQhtr/HQprg");
	var mask_1_graphics_248 = new cjs.Graphics().p("A0RF/QHfphMBhdQMBhdJgHdQJiHdBeMCMg6BAHBQhdsBHdphg");
	var mask_1_graphics_249 = new cjs.Graphics().p("Az6F0QHrpXMDhNQMChNJXHrQJYHpBNMDMg6JAF0QhNsDHqpXg");
	var mask_1_graphics_250 = new cjs.Graphics().p("AzjFqQH4pNMEg9QMEg8JMH2QJOH3A9MEMg6QAElQg9sEH2pMg");
	var mask_1_graphics_251 = new cjs.Graphics().p("AzKFfQIEpBMFgtQMFgsJCIDQJDICAsMGMg6VADXQgtsGIDpCg");
	var mask_1_graphics_252 = new cjs.Graphics().p("AyxFWQIRo3MFgcQMHgcI2IPQI4IPAcMGMg6ZACIQgcsHIOo2g");
	var mask_1_graphics_253 = new cjs.Graphics().p("AyWFNQIcosMGgLQMHgMIrIbQItIaAMMHMg6cAA5QgLsHIaorg");
	var mask_1_graphics_254 = new cjs.Graphics().p("A6lZhQAFsHImogQInogMGAEQMHAFIgImQIhImgEMHg");
	var mask_1_graphics_255 = new cjs.Graphics().p("A6kYlQAVsGIxoUQIzoVMGAVQMGAVIUIyQIWIxgVMHg");
	var mask_1_graphics_256 = new cjs.Graphics().p("A6jXqQAlsGI9oIQI+oIMFAlQMGAlIII9QIKI9gmMGg");
	var mask_1_graphics_257 = new cjs.Graphics().p("A6hWvQA2sFJHn8QJJn8MEA2QMFA1H8JIQH9JHg1MFg");
	var mask_1_graphics_258 = new cjs.Graphics().p("A6eV1QBGsEJSnwQJTnwMDBGQMEBGHwJSQHwJShFMEg");
	var mask_1_graphics_259 = new cjs.Graphics().p("A6aU6QBWsCJcnjQJenkMBBWQMDBWHiJdQHlJchWMDg");
	var mask_1_graphics_260 = new cjs.Graphics().p("A6WT/QBnsAJmnWQJonXL/BnQMABmHWJmQHYJnhmMAg");
	var mask_1_graphics_261 = new cjs.Graphics().p("A6QTFQB2r+JwnIQJynLL9B3QL+B2HJJwQHKJxh2L+g");
	var mask_1_graphics_262 = new cjs.Graphics().p("A6KSKQCGr7J6m7QJ7m9L7CHQL7CGG7J6QG+J6iHL7g");
	var mask_1_graphics_263 = new cjs.Graphics().p("A6DRQQCXr4KCmtQKFmwL3CWQL4CXGuKDQGwKDiWL4g");
	var mask_1_graphics_264 = new cjs.Graphics().p("A57QWQCmr1KMmfQKNmiL0CmQL1CnGhKMQGiKMimL1g");
	var mask_1_graphics_265 = new cjs.Graphics().p("A5yPdQC2rxKUmSQKWmULxC2QLxC2GTKVQGUKVi2Lxg");
	var mask_1_graphics_266 = new cjs.Graphics().p("A5pOkQDGruKdmEQKemGLtDGQLtDHGFKdQGGKdjGLtg");
	var mask_1_graphics_267 = new cjs.Graphics().p("A5fNrQDWrpKll2QKml4LoDWQLpDWF3KlQF4KljWLpg");
	var mask_1_graphics_268 = new cjs.Graphics().p("A5UMyQDmrkKsloQKvlpLjDlQLkDmFoKtQFqKtjlLkg");
	var mask_1_graphics_269 = new cjs.Graphics().p("A5IL6QD1rgK0lZQK1laLfD1QLgD1FZK0QFcK0j1Lgg");
	var mask_1_graphics_270 = new cjs.Graphics().p("A47LCQEFrZK7lLQK8lNLaEFQLaEEFLK8QFMK7kELag");
	var mask_1_graphics_271 = new cjs.Graphics().p("A4tKLQEUrULBk8QLDk+LVEUQLUEUE8LCQE+LCkULVg");
	var mask_1_graphics_272 = new cjs.Graphics().p("A4fJUQEjrOLIkuQLKkuLOEjQLPEjEtLJQEvLJkjLOg");
	var mask_1_graphics_273 = new cjs.Graphics().p("A4QIdQEyrHLPkfQLPkfLJEyQLIEyEeLPQEgLPkyLIg");
	var mask_1_graphics_274 = new cjs.Graphics().p("A4AHnQFBrBLVkPQLVkQLCFBQLBFBEPLVQERLVlBLBg");
	var mask_1_graphics_275 = new cjs.Graphics().p("A3vGxQFQq5LakAQLbkBK6FQQK7FQEALaQEBLalQK7g");
	var mask_1_graphics_276 = new cjs.Graphics().p("A3dF8QFeqyLfjxQLgjxK0FeQKzFfDwLfQDyLgleK0g");
	var mask_1_graphics_277 = new cjs.Graphics().p("A3LFIQFtqrLkjhQLljiKsFtQKsFtDgLlQDjLkltKsg");
	var mask_1_graphics_278 = new cjs.Graphics().p("A24EUQF7qjLpjRQLqjSKkF7QKkF7DRLpQDSLpl7Klg");
	var mask_1_graphics_279 = new cjs.Graphics().p("A2kDhQGJqbLtjCQLujCKcGJQKcGKDBLtQDDLumJKcg");
	var mask_1_graphics_280 = new cjs.Graphics().p("A2QCuQGYqSLxiyQLyizKTGYQKUGXCxLxQCzLymXKUg");
	var mask_1_graphics_281 = new cjs.Graphics().p("A16B8QGlqJL0ijQL2iiKLGlQKLGlChL1QCjL1mlKLg");
	var mask_1_graphics_282 = new cjs.Graphics().p("A1kBLQGzqBL3iSQL5iSKCGzQKCGxCRL5QCTL5mzKCg");
	var mask_1_graphics_283 = new cjs.Graphics().p("A1OAbQHBp4L6iCQL8iCJ5HAQJ4G/CBL8QCEL7nBJ5g");
	var mask_1_graphics_284 = new cjs.Graphics().p("A02gUQHNpvL9hyQL/hzJvHOQJvHMBxL/QBzL+nNJvg");
	var mask_1_graphics_285 = new cjs.Graphics().p("A0ehDQHapmMAhhQMAhjJlHbQJmHZBhMBQBjMAnbJmg");
	var mask_1_graphics_286 = new cjs.Graphics().p("A0GhyQHopbMBhRQMDhSJbHnQJbHmBQMDQBTMCnnJbg");
	var mask_1_graphics_287 = new cjs.Graphics().p("AzsifQH0pRMChBQMFhCJQH0QJRHzBAMEQBDMEn0JQg");
	var mask_1_graphics_288 = new cjs.Graphics().p("AzSjMQIApGMDgxQMGgyJGIBQJGH/AxMFQAyMFoAJGg");
	var mask_1_graphics_289 = new cjs.Graphics().p("Ay4j4QINo7MEghQMHghI7IMQI7IMAgMGQAiMGoNI7g");
	var mask_1_graphics_290 = new cjs.Graphics().p("AydkjQIZowMEgRQMIgQIwIYQIwIXAPMHQASMGoYIwg");
	var mask_1_graphics_291 = new cjs.Graphics().p("AyBlNQIkolMFAAQMHgBIlIkQIlIjgBMHQABMHokIkg");
	var mask_1_graphics_292 = new cjs.Graphics().p("Axll3QIvoZMFAQQMIAQIZIwQIYIugRMHQgPMGovIZg");
	var mask_1_graphics_293 = new cjs.Graphics().p("AxImfQI6oNMEAgQMHAgINI7QINI6ghMGQgfMGo7INg");
	var mask_1_graphics_294 = new cjs.Graphics().p("AwrnHQJFoBMDAxQMHAwIBJGQIAJFgxMFQgwMFpFIBg");
	var mask_1_graphics_295 = new cjs.Graphics().p("AwOntQJRn1MCBBQMFBBH0JQQH1JPhCMEQhAMEpQH1g");
	var mask_1_graphics_296 = new cjs.Graphics().p("AvwoTQJbnoMBBRQMDBRHoJbQHoJZhSMDQhQMDpbHng");
	var mask_1_graphics_297 = new cjs.Graphics().p("AvRo4QJlnbL/BhQMBBiHbJkQHcJkhjMBQhgMBplHbg");
	var mask_1_graphics_298 = new cjs.Graphics().p("AuypcQJvnOL8ByQMABxHOJvQHOJuhyL+QhxL/puHOg");
	var mask_1_graphics_299 = new cjs.Graphics().p("AuSp+QJ4nBL6CBQL9CCHBJ4QHBJ3iDL8QiAL8p5HBg");
	var mask_1_graphics_300 = new cjs.Graphics().p("AtyqgQKCmzL3CRQL6CSGzKBQG0KBiTL5QiRL5qBG0g");
	var mask_1_graphics_301 = new cjs.Graphics().p("AtRrBQKKmmL0CiQL3CiGmKKQGmKKijL1QihL3qKGlg");
	var mask_1_graphics_302 = new cjs.Graphics().p("AswrgQKTmYLwCxQLzCyGZKTQGYKSizLyQiwLzqUGYg");
	var mask_1_graphics_303 = new cjs.Graphics().p("AsPr/QKcmKLsDBQLwDCGKKcQGKKajCLuQjBLvqcGKg");
	var mask_1_graphics_304 = new cjs.Graphics().p("AruscQKkl8LpDQQLrDSF8KkQF8KjjSLqQjRLqqkF8g");
	var mask_1_graphics_305 = new cjs.Graphics().p("ArJs7QKtltLjDiQLmDiFtKtQFtKrjjLlQjhLmqtFsg");
	var mask_1_graphics_306 = new cjs.Graphics().p("AqktYQK0leLfDzQLhDyFdK1QFeK0j0LfQjyLhq0Fdg");
	var mask_1_graphics_307 = new cjs.Graphics().p("Ap+t1QK7lNLaEDQLbEDFOK8QFNK8kELaQkCLbq8FOg");
	var mask_1_graphics_308 = new cjs.Graphics().p("ApYuPQLDk+LTETQLWEUE+LDQE9LDkULVQkTLVrDE+g");
	var mask_1_graphics_309 = new cjs.Graphics().p("AoyupQLKkuLNEkQLQEkEuLKQEtLLkkLOQkjLOrLEug");
	var mask_1_graphics_310 = new cjs.Graphics().p("AoLvBQLRkeLGE0QLJE0EeLRQEdLRk1LHQkzLIrREeg");
	var mask_1_graphics_311 = new cjs.Graphics().p("AnkvYQLXkOLAFEQLCFEENLXQENLYlFLAQlDLBrYEOg");
	var mask_1_graphics_312 = new cjs.Graphics().p("Am8vuQLdj9K4FUQK6FUD9LdQD9LelUK4QlTK6reD9g");
	var mask_1_graphics_313 = new cjs.Graphics().p("AmUwCQLjjsKwFjQKzFjDsLjQDsLjlkKxQljKyrjDtg");
	var mask_1_graphics_314 = new cjs.Graphics().p("AlswVQLojcKpFzQKqFzDcLoQDbLpl0KpQlyKproDcg");
	var mask_1_graphics_315 = new cjs.Graphics().p("AlDwnQLtjKKgGBQKiGDDKLtQDLLtmDKhQmBKhruDLg");
	var mask_1_graphics_316 = new cjs.Graphics().p("Akaw3QLxi6KXGRQKZGSC6LxQC6LymSKYQmQKYryC6g");
	var mask_1_graphics_317 = new cjs.Graphics().p("AjxxGQL1ioKOGfQKQGhCpL1QCpL2mhKPQmfKPr2Cpg");
	var mask_1_graphics_318 = new cjs.Graphics().p("AjHxTQL4iYKFGvQKHGvCXL5QCYL6mwKFQmuKGr5CYg");
	var mask_1_graphics_319 = new cjs.Graphics().p("AiexfQL8iHJ7G9QJ9G+CHL8QCGL+m+J7Qm9J8r9CHg");
	var mask_1_graphics_320 = new cjs.Graphics().p("Ah0xpQL/h2JxHLQJyHNB1L/QB2MAnNJxQnLJysAB2g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(189).to({graphics:mask_1_graphics_189,x:110.3,y:258.8}).wait(1).to({graphics:mask_1_graphics_190,x:113.9,y:258.7}).wait(1).to({graphics:mask_1_graphics_191,x:117.6,y:258.5}).wait(1).to({graphics:mask_1_graphics_192,x:121.2,y:258.1}).wait(1).to({graphics:mask_1_graphics_193,x:124.8,y:257.6}).wait(1).to({graphics:mask_1_graphics_194,x:128.5,y:256.9}).wait(1).to({graphics:mask_1_graphics_195,x:132,y:256.1}).wait(1).to({graphics:mask_1_graphics_196,x:135.6,y:255.2}).wait(1).to({graphics:mask_1_graphics_197,x:139.1,y:254.1}).wait(1).to({graphics:mask_1_graphics_198,x:142.5,y:252.9}).wait(1).to({graphics:mask_1_graphics_199,x:145.9,y:251.6}).wait(1).to({graphics:mask_1_graphics_200,x:149.3,y:250.1}).wait(1).to({graphics:mask_1_graphics_201,x:152.6,y:248.5}).wait(1).to({graphics:mask_1_graphics_202,x:155.8,y:246.8}).wait(1).to({graphics:mask_1_graphics_203,x:158.9,y:244.9}).wait(1).to({graphics:mask_1_graphics_204,x:160.4,y:244}).wait(1).to({graphics:mask_1_graphics_205,x:161.9,y:243}).wait(1).to({graphics:mask_1_graphics_206,x:163.4,y:242}).wait(1).to({graphics:mask_1_graphics_207,x:164.8,y:241}).wait(1).to({graphics:mask_1_graphics_208,x:166.3,y:239.9}).wait(1).to({graphics:mask_1_graphics_209,x:167.7,y:238.8}).wait(1).to({graphics:mask_1_graphics_210,x:169.1,y:237.7}).wait(1).to({graphics:mask_1_graphics_211,x:170.4,y:236.6}).wait(1).to({graphics:mask_1_graphics_212,x:171.8,y:235.4}).wait(1).to({graphics:mask_1_graphics_213,x:173.1,y:234.3}).wait(1).to({graphics:mask_1_graphics_214,x:174.4,y:233}).wait(1).to({graphics:mask_1_graphics_215,x:175.7,y:231.8}).wait(1).to({graphics:mask_1_graphics_216,x:176.9,y:230.6}).wait(1).to({graphics:mask_1_graphics_217,x:178.1,y:229.3}).wait(1).to({graphics:mask_1_graphics_218,x:179.3,y:228}).wait(1).to({graphics:mask_1_graphics_219,x:180.5,y:226.6}).wait(1).to({graphics:mask_1_graphics_220,x:181.7,y:225.3}).wait(1).to({graphics:mask_1_graphics_221,x:182.8,y:223.9}).wait(1).to({graphics:mask_1_graphics_222,x:183.9,y:222.5}).wait(1).to({graphics:mask_1_graphics_223,x:185,y:221.1}).wait(1).to({graphics:mask_1_graphics_224,x:186,y:219.7}).wait(1).to({graphics:mask_1_graphics_225,x:187.2,y:218.1}).wait(1).to({graphics:mask_1_graphics_226,x:188.3,y:216.5}).wait(1).to({graphics:mask_1_graphics_227,x:189.3,y:214.8}).wait(1).to({graphics:mask_1_graphics_228,x:190.4,y:213.1}).wait(1).to({graphics:mask_1_graphics_229,x:191.4,y:211.4}).wait(1).to({graphics:mask_1_graphics_230,x:192.3,y:209.7}).wait(1).to({graphics:mask_1_graphics_231,x:193.3,y:208}).wait(1).to({graphics:mask_1_graphics_232,x:194.2,y:206.2}).wait(1).to({graphics:mask_1_graphics_233,x:195,y:204.4}).wait(1).to({graphics:mask_1_graphics_234,x:195.8,y:202.6}).wait(1).to({graphics:mask_1_graphics_235,x:196.6,y:200.8}).wait(1).to({graphics:mask_1_graphics_236,x:197.4,y:199}).wait(1).to({graphics:mask_1_graphics_237,x:198.1,y:197.2}).wait(1).to({graphics:mask_1_graphics_238,x:198.7,y:195.3}).wait(1).to({graphics:mask_1_graphics_239,x:199.3,y:193.4}).wait(1).to({graphics:mask_1_graphics_240,x:199.9,y:191.5}).wait(1).to({graphics:mask_1_graphics_241,x:200.5,y:189.7}).wait(1).to({graphics:mask_1_graphics_242,x:201,y:187.7}).wait(1).to({graphics:mask_1_graphics_243,x:201.4,y:185.8}).wait(1).to({graphics:mask_1_graphics_244,x:201.9,y:183.9}).wait(1).to({graphics:mask_1_graphics_245,x:202.3,y:182}).wait(1).to({graphics:mask_1_graphics_246,x:202.6,y:180}).wait(1).to({graphics:mask_1_graphics_247,x:202.9,y:178.1}).wait(1).to({graphics:mask_1_graphics_248,x:203.2,y:176.1}).wait(1).to({graphics:mask_1_graphics_249,x:203.4,y:174.2}).wait(1).to({graphics:mask_1_graphics_250,x:203.6,y:172.2}).wait(1).to({graphics:mask_1_graphics_251,x:203.7,y:170.3}).wait(1).to({graphics:mask_1_graphics_252,x:203.8,y:168.3}).wait(1).to({graphics:mask_1_graphics_253,x:203.9,y:166.3}).wait(1).to({graphics:mask_1_graphics_254,x:203.9,y:165.4}).wait(1).to({graphics:mask_1_graphics_255,x:203.9,y:167.4}).wait(1).to({graphics:mask_1_graphics_256,x:203.9,y:169.4}).wait(1).to({graphics:mask_1_graphics_257,x:203.9,y:171.3}).wait(1).to({graphics:mask_1_graphics_258,x:203.9,y:173.3}).wait(1).to({graphics:mask_1_graphics_259,x:204,y:175.3}).wait(1).to({graphics:mask_1_graphics_260,x:204,y:177.2}).wait(1).to({graphics:mask_1_graphics_261,x:204,y:179.2}).wait(1).to({graphics:mask_1_graphics_262,x:204,y:181.1}).wait(1).to({graphics:mask_1_graphics_263,x:204.1,y:183}).wait(1).to({graphics:mask_1_graphics_264,x:204.1,y:185}).wait(1).to({graphics:mask_1_graphics_265,x:204.1,y:186.9}).wait(1).to({graphics:mask_1_graphics_266,x:204.1,y:188.8}).wait(1).to({graphics:mask_1_graphics_267,x:204.2,y:190.7}).wait(1).to({graphics:mask_1_graphics_268,x:204.2,y:192.6}).wait(1).to({graphics:mask_1_graphics_269,x:204.2,y:194.5}).wait(1).to({graphics:mask_1_graphics_270,x:204.2,y:196.3}).wait(1).to({graphics:mask_1_graphics_271,x:204.2,y:198.2}).wait(1).to({graphics:mask_1_graphics_272,x:204.2,y:200}).wait(1).to({graphics:mask_1_graphics_273,x:204.2,y:201.8}).wait(1).to({graphics:mask_1_graphics_274,x:204.2,y:203.6}).wait(1).to({graphics:mask_1_graphics_275,x:204.2,y:205.4}).wait(1).to({graphics:mask_1_graphics_276,x:204.2,y:207.2}).wait(1).to({graphics:mask_1_graphics_277,x:204.2,y:208.9}).wait(1).to({graphics:mask_1_graphics_278,x:204.2,y:210.7}).wait(1).to({graphics:mask_1_graphics_279,x:204.2,y:212.4}).wait(1).to({graphics:mask_1_graphics_280,x:204.2,y:214.1}).wait(1).to({graphics:mask_1_graphics_281,x:204.1,y:215.7}).wait(1).to({graphics:mask_1_graphics_282,x:204.1,y:217.4}).wait(1).to({graphics:mask_1_graphics_283,x:204.1,y:219}).wait(1).to({graphics:mask_1_graphics_284,x:204.1,y:220.6}).wait(1).to({graphics:mask_1_graphics_285,x:204.1,y:222.2}).wait(1).to({graphics:mask_1_graphics_286,x:204,y:223.7}).wait(1).to({graphics:mask_1_graphics_287,x:204,y:225.2}).wait(1).to({graphics:mask_1_graphics_288,x:204,y:226.7}).wait(1).to({graphics:mask_1_graphics_289,x:204,y:228.2}).wait(1).to({graphics:mask_1_graphics_290,x:204,y:229.6}).wait(1).to({graphics:mask_1_graphics_291,x:204,y:231}).wait(1).to({graphics:mask_1_graphics_292,x:204,y:232.4}).wait(1).to({graphics:mask_1_graphics_293,x:204,y:233.8}).wait(1).to({graphics:mask_1_graphics_294,x:204,y:235.1}).wait(1).to({graphics:mask_1_graphics_295,x:204.1,y:236.4}).wait(1).to({graphics:mask_1_graphics_296,x:204.1,y:237.6}).wait(1).to({graphics:mask_1_graphics_297,x:204.1,y:238.9}).wait(1).to({graphics:mask_1_graphics_298,x:204.1,y:240.1}).wait(1).to({graphics:mask_1_graphics_299,x:204.2,y:241.2}).wait(1).to({graphics:mask_1_graphics_300,x:204.2,y:242.4}).wait(1).to({graphics:mask_1_graphics_301,x:204.2,y:243.4}).wait(1).to({graphics:mask_1_graphics_302,x:204.2,y:244.5}).wait(1).to({graphics:mask_1_graphics_303,x:204.3,y:245.5}).wait(1).to({graphics:mask_1_graphics_304,x:204.2,y:246.5}).wait(1).to({graphics:mask_1_graphics_305,x:204.3,y:247.5}).wait(1).to({graphics:mask_1_graphics_306,x:204.3,y:248.5}).wait(1).to({graphics:mask_1_graphics_307,x:204.3,y:249.5}).wait(1).to({graphics:mask_1_graphics_308,x:204.4,y:250.4}).wait(1).to({graphics:mask_1_graphics_309,x:204.4,y:251.2}).wait(1).to({graphics:mask_1_graphics_310,x:204.4,y:252}).wait(1).to({graphics:mask_1_graphics_311,x:204.4,y:252.8}).wait(1).to({graphics:mask_1_graphics_312,x:204.4,y:253.5}).wait(1).to({graphics:mask_1_graphics_313,x:204.4,y:254.2}).wait(1).to({graphics:mask_1_graphics_314,x:204.4,y:254.8}).wait(1).to({graphics:mask_1_graphics_315,x:204.4,y:255.4}).wait(1).to({graphics:mask_1_graphics_316,x:204.4,y:255.9}).wait(1).to({graphics:mask_1_graphics_317,x:204.4,y:256.4}).wait(1).to({graphics:mask_1_graphics_318,x:204.4,y:256.9}).wait(1).to({graphics:mask_1_graphics_319,x:204.4,y:257.3}).wait(1).to({graphics:mask_1_graphics_320,x:204.3,y:257.7}).wait(141));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(20,1,1).p("ApXoHQEGhNEqguQEpguCyDoQCxDpgNExQgOEyjBDRQgaAcgbAa");
	this.shape_2.setTransform(282,325.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(20,1,1).p("ApXquQEGhNEqguQEpguCyDoQCxDpgNEyQgOExjBDRQjCDRkbBvQhpAphpAb");
	this.shape_3.setTransform(282,342.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(20,1,1).p("AAgrHQEGhNErguQEqguCxDoQCxDpgNEyQgNExjCDRQjCDRkbBvQkcBvkiAHQkYgIkLiCQkLiCigh+Qigh+hIg8");
	this.shape_4.setTransform(218.8,344.7);

	var maskedShapeInstanceList = [this.shape_2,this.shape_3,this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2}]},189).to({state:[{t:this.shape_3}]},28).to({state:[{t:this.shape_4}]},82).wait(162));

	// Layer 11
	this.instance_2 = new lib.ar5("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(411,35.6,1,1,-90,0,0,0,-1.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(95).to({_off:false},0).wait(366));

	// Layer 8 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_95 = new cjs.Graphics().p("ARbKmIAAkRIDwAAIAAERg");
	var mask_2_graphics_96 = new cjs.Graphics().p("AiDCIIAAkPIEHAAIAAEPg");
	var mask_2_graphics_97 = new cjs.Graphics().p("AiPCIIAAkPIEeAAIAAEPg");
	var mask_2_graphics_98 = new cjs.Graphics().p("AiaCIIAAkPIE1AAIAAEPg");
	var mask_2_graphics_99 = new cjs.Graphics().p("AimCIIAAkPIFNAAIAAEPg");
	var mask_2_graphics_100 = new cjs.Graphics().p("AiyCIIAAkPIFlAAIAAEPg");
	var mask_2_graphics_101 = new cjs.Graphics().p("Ai+CIIAAkPIF9AAIAAEPg");
	var mask_2_graphics_102 = new cjs.Graphics().p("AjJCIIAAkPIGTAAIAAEPg");
	var mask_2_graphics_103 = new cjs.Graphics().p("AjVCIIAAkPIGrAAIAAEPg");
	var mask_2_graphics_104 = new cjs.Graphics().p("AjhCIIAAkPIHDAAIAAEPg");
	var mask_2_graphics_105 = new cjs.Graphics().p("AjtCIIAAkPIHbAAIAAEPg");
	var mask_2_graphics_106 = new cjs.Graphics().p("Aj5CIIAAkPIHzAAIAAEPg");
	var mask_2_graphics_107 = new cjs.Graphics().p("AkECIIAAkPIIJAAIAAEPg");
	var mask_2_graphics_108 = new cjs.Graphics().p("AkQCIIAAkPIIhAAIAAEPg");
	var mask_2_graphics_109 = new cjs.Graphics().p("AkcCIIAAkPII5AAIAAEPg");
	var mask_2_graphics_110 = new cjs.Graphics().p("AkoCIIAAkPIJQAAIAAEPg");
	var mask_2_graphics_111 = new cjs.Graphics().p("AkzCIIAAkPIJnAAIAAEPg");
	var mask_2_graphics_112 = new cjs.Graphics().p("Ak/CIIAAkPIJ/AAIAAEPg");
	var mask_2_graphics_113 = new cjs.Graphics().p("AlLCIIAAkPIKXAAIAAEPg");
	var mask_2_graphics_114 = new cjs.Graphics().p("AlXCIIAAkPIKvAAIAAEPg");
	var mask_2_graphics_115 = new cjs.Graphics().p("AliCIIAAkPILFAAIAAEPg");
	var mask_2_graphics_116 = new cjs.Graphics().p("AluCIIAAkPILdAAIAAEPg");
	var mask_2_graphics_117 = new cjs.Graphics().p("Al5CIIAAkPILzAAIAAEPg");
	var mask_2_graphics_118 = new cjs.Graphics().p("AmFCIIAAkPIMLAAIAAEPg");
	var mask_2_graphics_119 = new cjs.Graphics().p("AmRCIIAAkPIMjAAIAAEPg");
	var mask_2_graphics_120 = new cjs.Graphics().p("AmdCIIAAkPIM7AAIAAEPg");
	var mask_2_graphics_121 = new cjs.Graphics().p("AmoCIIAAkPINSAAIAAEPg");
	var mask_2_graphics_122 = new cjs.Graphics().p("Am0CIIAAkPINpAAIAAEPg");
	var mask_2_graphics_123 = new cjs.Graphics().p("AnACIIAAkPIOBAAIAAEPg");
	var mask_2_graphics_124 = new cjs.Graphics().p("AnMCIIAAkPIOZAAIAAEPg");
	var mask_2_graphics_125 = new cjs.Graphics().p("AnYCIIAAkPIOxAAIAAEPg");
	var mask_2_graphics_126 = new cjs.Graphics().p("AnjCIIAAkPIPIAAIAAEPg");
	var mask_2_graphics_127 = new cjs.Graphics().p("AnvCIIAAkPIPfAAIAAEPg");
	var mask_2_graphics_128 = new cjs.Graphics().p("An7CIIAAkPIP3AAIAAEPg");
	var mask_2_graphics_129 = new cjs.Graphics().p("AoHCIIAAkPIQPAAIAAEPg");
	var mask_2_graphics_130 = new cjs.Graphics().p("AoSCIIAAkPIQlAAIAAEPg");
	var mask_2_graphics_131 = new cjs.Graphics().p("AoeCIIAAkPIQ9AAIAAEPg");
	var mask_2_graphics_132 = new cjs.Graphics().p("AoqCIIAAkPIRVAAIAAEPg");
	var mask_2_graphics_133 = new cjs.Graphics().p("Ao2CIIAAkPIRtAAIAAEPg");
	var mask_2_graphics_134 = new cjs.Graphics().p("ApBCIIAAkPISEAAIAAEPg");
	var mask_2_graphics_135 = new cjs.Graphics().p("ApNCIIAAkPISbAAIAAEPg");
	var mask_2_graphics_136 = new cjs.Graphics().p("ApZCIIAAkPISzAAIAAEPg");
	var mask_2_graphics_137 = new cjs.Graphics().p("AplCIIAAkPITLAAIAAEPg");
	var mask_2_graphics_138 = new cjs.Graphics().p("ApwCIIAAkPIThAAIAAEPg");
	var mask_2_graphics_139 = new cjs.Graphics().p("Ap8CIIAAkPIT5AAIAAEPg");
	var mask_2_graphics_140 = new cjs.Graphics().p("AqICIIAAkPIURAAIAAEPg");
	var mask_2_graphics_141 = new cjs.Graphics().p("AqUCIIAAkPIUpAAIAAEPg");
	var mask_2_graphics_142 = new cjs.Graphics().p("AqfCIIAAkPIU/AAIAAEPg");
	var mask_2_graphics_143 = new cjs.Graphics().p("AqrCIIAAkPIVXAAIAAEPg");
	var mask_2_graphics_144 = new cjs.Graphics().p("Aq3CIIAAkPIVvAAIAAEPg");
	var mask_2_graphics_145 = new cjs.Graphics().p("ArDCIIAAkPIWHAAIAAEPg");
	var mask_2_graphics_146 = new cjs.Graphics().p("ArPCIIAAkPIWfAAIAAEPg");
	var mask_2_graphics_147 = new cjs.Graphics().p("AraCIIAAkPIW2AAIAAEPg");
	var mask_2_graphics_148 = new cjs.Graphics().p("ArmCIIAAkPIXNAAIAAEPg");
	var mask_2_graphics_149 = new cjs.Graphics().p("AryCIIAAkPIXlAAIAAEPg");
	var mask_2_graphics_150 = new cjs.Graphics().p("Ar+CIIAAkPIX9AAIAAEPg");
	var mask_2_graphics_151 = new cjs.Graphics().p("AsJCIIAAkPIYUAAIAAEPg");
	var mask_2_graphics_152 = new cjs.Graphics().p("AsVCIIAAkPIYrAAIAAEPg");
	var mask_2_graphics_153 = new cjs.Graphics().p("AshCIIAAkPIZDAAIAAEPg");
	var mask_2_graphics_154 = new cjs.Graphics().p("AssCIIAAkPIZZAAIAAEPg");
	var mask_2_graphics_155 = new cjs.Graphics().p("As4CIIAAkPIZxAAIAAEPg");
	var mask_2_graphics_156 = new cjs.Graphics().p("AtECIIAAkPIaJAAIAAEPg");
	var mask_2_graphics_157 = new cjs.Graphics().p("AtQCIIAAkPIahAAIAAEPg");
	var mask_2_graphics_158 = new cjs.Graphics().p("AtbCIIAAkPIa4AAIAAEPg");
	var mask_2_graphics_159 = new cjs.Graphics().p("AtnCIIAAkPIbPAAIAAEPg");
	var mask_2_graphics_160 = new cjs.Graphics().p("AtzCIIAAkPIbnAAIAAEPg");
	var mask_2_graphics_161 = new cjs.Graphics().p("At/CIIAAkPIb/AAIAAEPg");
	var mask_2_graphics_162 = new cjs.Graphics().p("AuKCIIAAkPIcVAAIAAEPg");
	var mask_2_graphics_163 = new cjs.Graphics().p("AuWCIIAAkPIcuAAIAAEPg");
	var mask_2_graphics_164 = new cjs.Graphics().p("AuiCIIAAkPIdFAAIAAEPg");
	var mask_2_graphics_165 = new cjs.Graphics().p("AuuCIIAAkPIddAAIAAEPg");
	var mask_2_graphics_166 = new cjs.Graphics().p("Au6CIIAAkPId1AAIAAEPg");
	var mask_2_graphics_167 = new cjs.Graphics().p("AvFCIIAAkPIeLAAIAAEPg");
	var mask_2_graphics_168 = new cjs.Graphics().p("AvRCIIAAkPIejAAIAAEPg");
	var mask_2_graphics_169 = new cjs.Graphics().p("AvdCIIAAkPIe7AAIAAEPg");
	var mask_2_graphics_170 = new cjs.Graphics().p("AvpCIIAAkPIfTAAIAAEPg");
	var mask_2_graphics_171 = new cjs.Graphics().p("Av0CIIAAkPIfqAAIAAEPg");
	var mask_2_graphics_172 = new cjs.Graphics().p("ADSKmIAAkRMAgDAAAIAAERg");
	var mask_2_graphics_173 = new cjs.Graphics().p("AwgCIIAAkPMAhBAAAIAAEPg");
	var mask_2_graphics_174 = new cjs.Graphics().p("ACSKmIAAkRMAiCAAAIAAERg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(95).to({graphics:mask_2_graphics_95,x:135.5,y:67.8}).wait(1).to({graphics:mask_2_graphics_96,x:260.2,y:121.9}).wait(1).to({graphics:mask_2_graphics_97,x:261.4,y:121.9}).wait(1).to({graphics:mask_2_graphics_98,x:262.5,y:121.9}).wait(1).to({graphics:mask_2_graphics_99,x:263.7,y:121.9}).wait(1).to({graphics:mask_2_graphics_100,x:264.9,y:121.9}).wait(1).to({graphics:mask_2_graphics_101,x:266.1,y:121.9}).wait(1).to({graphics:mask_2_graphics_102,x:267.2,y:121.9}).wait(1).to({graphics:mask_2_graphics_103,x:268.4,y:121.9}).wait(1).to({graphics:mask_2_graphics_104,x:269.6,y:121.9}).wait(1).to({graphics:mask_2_graphics_105,x:270.8,y:121.9}).wait(1).to({graphics:mask_2_graphics_106,x:272,y:121.9}).wait(1).to({graphics:mask_2_graphics_107,x:273.1,y:121.9}).wait(1).to({graphics:mask_2_graphics_108,x:274.3,y:121.9}).wait(1).to({graphics:mask_2_graphics_109,x:275.5,y:121.9}).wait(1).to({graphics:mask_2_graphics_110,x:276.7,y:121.9}).wait(1).to({graphics:mask_2_graphics_111,x:277.8,y:121.9}).wait(1).to({graphics:mask_2_graphics_112,x:279,y:121.9}).wait(1).to({graphics:mask_2_graphics_113,x:280.2,y:121.9}).wait(1).to({graphics:mask_2_graphics_114,x:281.4,y:121.9}).wait(1).to({graphics:mask_2_graphics_115,x:282.6,y:121.9}).wait(1).to({graphics:mask_2_graphics_116,x:283.7,y:121.9}).wait(1).to({graphics:mask_2_graphics_117,x:284.9,y:121.9}).wait(1).to({graphics:mask_2_graphics_118,x:286.1,y:121.9}).wait(1).to({graphics:mask_2_graphics_119,x:287.3,y:121.9}).wait(1).to({graphics:mask_2_graphics_120,x:288.4,y:121.9}).wait(1).to({graphics:mask_2_graphics_121,x:289.6,y:121.9}).wait(1).to({graphics:mask_2_graphics_122,x:290.8,y:121.9}).wait(1).to({graphics:mask_2_graphics_123,x:292,y:121.9}).wait(1).to({graphics:mask_2_graphics_124,x:293.1,y:121.9}).wait(1).to({graphics:mask_2_graphics_125,x:294.3,y:121.9}).wait(1).to({graphics:mask_2_graphics_126,x:295.5,y:121.9}).wait(1).to({graphics:mask_2_graphics_127,x:296.7,y:121.9}).wait(1).to({graphics:mask_2_graphics_128,x:297.9,y:121.9}).wait(1).to({graphics:mask_2_graphics_129,x:299,y:121.9}).wait(1).to({graphics:mask_2_graphics_130,x:300.2,y:121.9}).wait(1).to({graphics:mask_2_graphics_131,x:301.4,y:121.9}).wait(1).to({graphics:mask_2_graphics_132,x:302.6,y:121.9}).wait(1).to({graphics:mask_2_graphics_133,x:303.7,y:121.9}).wait(1).to({graphics:mask_2_graphics_134,x:304.9,y:121.9}).wait(1).to({graphics:mask_2_graphics_135,x:306.1,y:121.9}).wait(1).to({graphics:mask_2_graphics_136,x:307.3,y:121.9}).wait(1).to({graphics:mask_2_graphics_137,x:308.4,y:121.9}).wait(1).to({graphics:mask_2_graphics_138,x:309.6,y:121.9}).wait(1).to({graphics:mask_2_graphics_139,x:310.8,y:121.9}).wait(1).to({graphics:mask_2_graphics_140,x:312,y:121.9}).wait(1).to({graphics:mask_2_graphics_141,x:313.1,y:121.9}).wait(1).to({graphics:mask_2_graphics_142,x:314.3,y:121.9}).wait(1).to({graphics:mask_2_graphics_143,x:315.5,y:121.9}).wait(1).to({graphics:mask_2_graphics_144,x:316.7,y:121.9}).wait(1).to({graphics:mask_2_graphics_145,x:317.9,y:121.9}).wait(1).to({graphics:mask_2_graphics_146,x:319,y:121.9}).wait(1).to({graphics:mask_2_graphics_147,x:320.2,y:121.9}).wait(1).to({graphics:mask_2_graphics_148,x:321.4,y:121.9}).wait(1).to({graphics:mask_2_graphics_149,x:322.6,y:121.9}).wait(1).to({graphics:mask_2_graphics_150,x:323.7,y:121.9}).wait(1).to({graphics:mask_2_graphics_151,x:324.9,y:121.9}).wait(1).to({graphics:mask_2_graphics_152,x:326.1,y:121.9}).wait(1).to({graphics:mask_2_graphics_153,x:327.3,y:121.9}).wait(1).to({graphics:mask_2_graphics_154,x:328.5,y:121.9}).wait(1).to({graphics:mask_2_graphics_155,x:329.6,y:121.9}).wait(1).to({graphics:mask_2_graphics_156,x:330.8,y:121.9}).wait(1).to({graphics:mask_2_graphics_157,x:332,y:121.9}).wait(1).to({graphics:mask_2_graphics_158,x:333.2,y:121.9}).wait(1).to({graphics:mask_2_graphics_159,x:334.3,y:121.9}).wait(1).to({graphics:mask_2_graphics_160,x:335.5,y:121.9}).wait(1).to({graphics:mask_2_graphics_161,x:336.7,y:121.9}).wait(1).to({graphics:mask_2_graphics_162,x:337.9,y:121.9}).wait(1).to({graphics:mask_2_graphics_163,x:339.1,y:121.9}).wait(1).to({graphics:mask_2_graphics_164,x:340.2,y:121.9}).wait(1).to({graphics:mask_2_graphics_165,x:341.4,y:121.9}).wait(1).to({graphics:mask_2_graphics_166,x:342.6,y:121.9}).wait(1).to({graphics:mask_2_graphics_167,x:343.8,y:121.9}).wait(1).to({graphics:mask_2_graphics_168,x:344.9,y:121.9}).wait(1).to({graphics:mask_2_graphics_169,x:346.1,y:121.9}).wait(1).to({graphics:mask_2_graphics_170,x:347.3,y:121.9}).wait(1).to({graphics:mask_2_graphics_171,x:348.5,y:121.9}).wait(1).to({graphics:mask_2_graphics_172,x:226.1,y:67.8}).wait(1).to({graphics:mask_2_graphics_173,x:352.8,y:121.9}).wait(1).to({graphics:mask_2_graphics_174,x:232.4,y:67.8}).wait(287));

	// Layer 3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(20,1,1).p("AuSAAIclAA");
	this.shape_5.setTransform(362,122);
	this.shape_5._off = true;

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(95).to({_off:false},0).wait(366));

	// Layer 9
	this.instance_3 = new lib.ar5("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(141.1,217,1,1,21.5,0,0,0.1,-1.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).wait(452));

	// Layer 4 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_9 = new cjs.Graphics().p("ARmIfIAqh/IEQBaIgqB/g");
	var mask_3_graphics_10 = new cjs.Graphics().p("AifAdIAwiTIEPBaIgwCTg");
	var mask_3_graphics_11 = new cjs.Graphics().p("AijAnIA3inIEQBaIg3Cng");
	var mask_3_graphics_12 = new cjs.Graphics().p("AimAxIA+i7IEPBaIg+C7g");
	var mask_3_graphics_13 = new cjs.Graphics().p("AipA7IBEjQIEPBaIhEDQg");
	var mask_3_graphics_14 = new cjs.Graphics().p("AitBGIBMjlIEPBaIhLDlg");
	var mask_3_graphics_15 = new cjs.Graphics().p("AiwBQIBSj5IEPBaIhSD5g");
	var mask_3_graphics_16 = new cjs.Graphics().p("Ai0BaIBZkOIEQBaIhZEOg");
	var mask_3_graphics_17 = new cjs.Graphics().p("Ai3BlIBgkjIEPBaIhgEjg");
	var mask_3_graphics_18 = new cjs.Graphics().p("Ai6BvIBmk3IEPBaIhmE3g");
	var mask_3_graphics_19 = new cjs.Graphics().p("Ai+B5IBulLIEPBaIhtFLg");
	var mask_3_graphics_20 = new cjs.Graphics().p("AjBCDIB0lgIEPBaIh0Fgg");
	var mask_3_graphics_21 = new cjs.Graphics().p("AjFCOIB7l1IEQBaIh7F1g");
	var mask_3_graphics_22 = new cjs.Graphics().p("AjICYICCmJIEPBaIiBGJg");
	var mask_3_graphics_23 = new cjs.Graphics().p("AjLCiICImdIEPBaIiIGdg");
	var mask_3_graphics_24 = new cjs.Graphics().p("AjPCsICPmyIEQBaIiPGyg");
	var mask_3_graphics_25 = new cjs.Graphics().p("AjSC3ICWnHIEPBaIiWHHg");
	var mask_3_graphics_26 = new cjs.Graphics().p("AjWDBICdnbIEQBaIidHbg");
	var mask_3_graphics_27 = new cjs.Graphics().p("AjZDLICknwIEPBaIijHwg");
	var mask_3_graphics_28 = new cjs.Graphics().p("AjdDWICroFIEPBaIiqIFg");
	var mask_3_graphics_29 = new cjs.Graphics().p("AjgDgICxoZIEQBaIixIZg");
	var mask_3_graphics_30 = new cjs.Graphics().p("AjjDqIC4otIEPBaIi4Itg");
	var mask_3_graphics_31 = new cjs.Graphics().p("AjnD0IC/pCIEPBaIi+JCg");
	var mask_3_graphics_32 = new cjs.Graphics().p("AjqD/IDGpXIEPBaIjGJXg");
	var mask_3_graphics_33 = new cjs.Graphics().p("AjtEJIDMprIEPBaIjMJrg");
	var mask_3_graphics_34 = new cjs.Graphics().p("AjxETIDTp/IEQBaIjTJ/g");
	var mask_3_graphics_35 = new cjs.Graphics().p("Aj0EeIDaqVIEPBaIjaKVg");
	var mask_3_graphics_36 = new cjs.Graphics().p("Aj4EoIDhqpIEPBaIjgKpg");
	var mask_3_graphics_37 = new cjs.Graphics().p("Aj7EyIDoq9IEPBaIjoK9g");
	var mask_3_graphics_38 = new cjs.Graphics().p("Aj+E8IDurSIEPBaIjuLSg");
	var mask_3_graphics_39 = new cjs.Graphics().p("AkCFHID1rnIEQBaIj1Lng");
	var mask_3_graphics_40 = new cjs.Graphics().p("AkFFRID8r7IEPBaIj8L7g");
	var mask_3_graphics_41 = new cjs.Graphics().p("AkJFbIEDsPIEPBaIkCMPg");
	var mask_3_graphics_42 = new cjs.Graphics().p("AkMFlIEKskIEPBaIkKMkg");
	var mask_3_graphics_43 = new cjs.Graphics().p("AkPFwIEPs5IEQBaIkQM5g");
	var mask_3_graphics_44 = new cjs.Graphics().p("AkTF6IEWtNIERBaIkWNNg");
	var mask_3_graphics_45 = new cjs.Graphics().p("AkWGEIEdthIEQBaIkdNhg");
	var mask_3_graphics_46 = new cjs.Graphics().p("AkaGOIEkt1IERBaIkkN1g");
	var mask_3_graphics_47 = new cjs.Graphics().p("AkdGZIEquLIERBaIkrOLg");
	var mask_3_graphics_48 = new cjs.Graphics().p("AkgGjIExufIEQBaIkxOfg");
	var mask_3_graphics_49 = new cjs.Graphics().p("AkkGtIE4uzIERBaIk4Ozg");
	var mask_3_graphics_50 = new cjs.Graphics().p("AknG3IE/vHIEQBaIk/PHg");
	var mask_3_graphics_51 = new cjs.Graphics().p("AkrHCIFGvdIERBaIlGPdg");
	var mask_3_graphics_52 = new cjs.Graphics().p("AkuHMIFMvxIERBaIlNPxg");
	var mask_3_graphics_53 = new cjs.Graphics().p("AkxHWIFTwFIEQBaIlTQFg");
	var mask_3_graphics_54 = new cjs.Graphics().p("Ak1HgIFawZIERBaIlaQZg");
	var mask_3_graphics_55 = new cjs.Graphics().p("Ak4HrIFhwvIEQBaIlhQvg");
	var mask_3_graphics_56 = new cjs.Graphics().p("Ak7H1IFnxDIEQBaIlnRDg");
	var mask_3_graphics_57 = new cjs.Graphics().p("Ak/H/IFuxXIERBaIluRXg");
	var mask_3_graphics_58 = new cjs.Graphics().p("AlDIKIF2xtIEQBaIl1Rtg");
	var mask_3_graphics_59 = new cjs.Graphics().p("AlGIUIF8yBIERBaIl8SBg");
	var mask_3_graphics_60 = new cjs.Graphics().p("AlJIeIGDyVIEQBaImDSVg");
	var mask_3_graphics_61 = new cjs.Graphics().p("AlMIoIGJypIEQBaImJSpg");
	var mask_3_graphics_62 = new cjs.Graphics().p("AlQIzIGQy/IERBaImQS/g");
	var mask_3_graphics_63 = new cjs.Graphics().p("AlTI9IGXzTIEQBaImXTTg");
	var mask_3_graphics_64 = new cjs.Graphics().p("AlXJHIGeznIERBaImeTng");
	var mask_3_graphics_65 = new cjs.Graphics().p("AlaJRIGkz7IERBaImkT7g");
	var mask_3_graphics_66 = new cjs.Graphics().p("AleJcIGs0RIERBaImsURg");
	var mask_3_graphics_67 = new cjs.Graphics().p("AlhJmIGy0lIERBaImzUlg");
	var mask_3_graphics_68 = new cjs.Graphics().p("AlkJwIG505IEQBaIm5U5g");
	var mask_3_graphics_69 = new cjs.Graphics().p("AloJ7IHA1PIERBaInAVPg");
	var mask_3_graphics_70 = new cjs.Graphics().p("AlrKFIHG1jIERBaInGVjg");
	var mask_3_graphics_71 = new cjs.Graphics().p("AlvKPIHO13IERBaInOV3g");
	var mask_3_graphics_72 = new cjs.Graphics().p("AlyKZIHU2LIERBaInUWLg");
	var mask_3_graphics_73 = new cjs.Graphics().p("Al1KkIHb2hIEQBaInbWhg");
	var mask_3_graphics_74 = new cjs.Graphics().p("Al5KuIHi21IERBaIniW1g");
	var mask_3_graphics_75 = new cjs.Graphics().p("Al8K4IHo3JIERBaInpXJg");
	var mask_3_graphics_76 = new cjs.Graphics().p("Al/LDIHv3eIEQBaInvXeg");
	var mask_3_graphics_77 = new cjs.Graphics().p("AmDLNIH23zIERBaIn2Xzg");
	var mask_3_graphics_78 = new cjs.Graphics().p("AmGLXIH94HIEQBaIn9YHg");
	var mask_3_graphics_79 = new cjs.Graphics().p("AmKLhIIE4bIEQBaIoDYbg");
	var mask_3_graphics_80 = new cjs.Graphics().p("AmNLsIIK4xIERBaIoLYxg");
	var mask_3_graphics_81 = new cjs.Graphics().p("AmQL2IIR5FIEQBaIoRZFg");
	var mask_3_graphics_82 = new cjs.Graphics().p("AJ3UNIIZ5aIEQBaIoZZag");
	var mask_3_graphics_83 = new cjs.Graphics().p("AmeMeIIs6UIERBaIosaUg");
	var mask_3_graphics_84 = new cjs.Graphics().p("AJQVHIJA7OIEQBaIpAbOg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_3_graphics_9,x:144,y:63.3}).wait(1).to({graphics:mask_3_graphics_10,x:271.9,y:116.7}).wait(1).to({graphics:mask_3_graphics_11,x:271.6,y:117.8}).wait(1).to({graphics:mask_3_graphics_12,x:271.2,y:118.8}).wait(1).to({graphics:mask_3_graphics_13,x:270.9,y:119.8}).wait(1).to({graphics:mask_3_graphics_14,x:270.6,y:120.8}).wait(1).to({graphics:mask_3_graphics_15,x:270.2,y:121.9}).wait(1).to({graphics:mask_3_graphics_16,x:269.9,y:122.9}).wait(1).to({graphics:mask_3_graphics_17,x:269.6,y:123.9}).wait(1).to({graphics:mask_3_graphics_18,x:269.2,y:125}).wait(1).to({graphics:mask_3_graphics_19,x:268.9,y:126}).wait(1).to({graphics:mask_3_graphics_20,x:268.5,y:127}).wait(1).to({graphics:mask_3_graphics_21,x:268.2,y:128}).wait(1).to({graphics:mask_3_graphics_22,x:267.9,y:129.1}).wait(1).to({graphics:mask_3_graphics_23,x:267.5,y:130.1}).wait(1).to({graphics:mask_3_graphics_24,x:267.2,y:131.1}).wait(1).to({graphics:mask_3_graphics_25,x:266.8,y:132.2}).wait(1).to({graphics:mask_3_graphics_26,x:266.5,y:133.2}).wait(1).to({graphics:mask_3_graphics_27,x:266.2,y:134.2}).wait(1).to({graphics:mask_3_graphics_28,x:265.8,y:135.2}).wait(1).to({graphics:mask_3_graphics_29,x:265.5,y:136.3}).wait(1).to({graphics:mask_3_graphics_30,x:265.1,y:137.3}).wait(1).to({graphics:mask_3_graphics_31,x:264.8,y:138.3}).wait(1).to({graphics:mask_3_graphics_32,x:264.5,y:139.3}).wait(1).to({graphics:mask_3_graphics_33,x:264.1,y:140.4}).wait(1).to({graphics:mask_3_graphics_34,x:263.8,y:141.4}).wait(1).to({graphics:mask_3_graphics_35,x:263.4,y:142.4}).wait(1).to({graphics:mask_3_graphics_36,x:263.1,y:143.5}).wait(1).to({graphics:mask_3_graphics_37,x:262.8,y:144.5}).wait(1).to({graphics:mask_3_graphics_38,x:262.4,y:145.5}).wait(1).to({graphics:mask_3_graphics_39,x:262.1,y:146.5}).wait(1).to({graphics:mask_3_graphics_40,x:261.8,y:147.6}).wait(1).to({graphics:mask_3_graphics_41,x:261.4,y:148.6}).wait(1).to({graphics:mask_3_graphics_42,x:261.1,y:149.6}).wait(1).to({graphics:mask_3_graphics_43,x:260.7,y:150.6}).wait(1).to({graphics:mask_3_graphics_44,x:260.4,y:151.7}).wait(1).to({graphics:mask_3_graphics_45,x:260.1,y:152.7}).wait(1).to({graphics:mask_3_graphics_46,x:259.7,y:153.8}).wait(1).to({graphics:mask_3_graphics_47,x:259.4,y:154.8}).wait(1).to({graphics:mask_3_graphics_48,x:259.1,y:155.8}).wait(1).to({graphics:mask_3_graphics_49,x:258.7,y:156.8}).wait(1).to({graphics:mask_3_graphics_50,x:258.4,y:157.9}).wait(1).to({graphics:mask_3_graphics_51,x:258,y:158.9}).wait(1).to({graphics:mask_3_graphics_52,x:257.7,y:159.9}).wait(1).to({graphics:mask_3_graphics_53,x:257.4,y:160.9}).wait(1).to({graphics:mask_3_graphics_54,x:257,y:162}).wait(1).to({graphics:mask_3_graphics_55,x:256.7,y:163}).wait(1).to({graphics:mask_3_graphics_56,x:256.4,y:164}).wait(1).to({graphics:mask_3_graphics_57,x:256,y:165.1}).wait(1).to({graphics:mask_3_graphics_58,x:255.7,y:166.1}).wait(1).to({graphics:mask_3_graphics_59,x:255.3,y:167.1}).wait(1).to({graphics:mask_3_graphics_60,x:255,y:168.1}).wait(1).to({graphics:mask_3_graphics_61,x:254.7,y:169.2}).wait(1).to({graphics:mask_3_graphics_62,x:254.3,y:170.2}).wait(1).to({graphics:mask_3_graphics_63,x:254,y:171.2}).wait(1).to({graphics:mask_3_graphics_64,x:253.6,y:172.2}).wait(1).to({graphics:mask_3_graphics_65,x:253.3,y:173.3}).wait(1).to({graphics:mask_3_graphics_66,x:253,y:174.3}).wait(1).to({graphics:mask_3_graphics_67,x:252.6,y:175.3}).wait(1).to({graphics:mask_3_graphics_68,x:252.3,y:176.4}).wait(1).to({graphics:mask_3_graphics_69,x:251.9,y:177.4}).wait(1).to({graphics:mask_3_graphics_70,x:251.6,y:178.4}).wait(1).to({graphics:mask_3_graphics_71,x:251.3,y:179.4}).wait(1).to({graphics:mask_3_graphics_72,x:250.9,y:180.5}).wait(1).to({graphics:mask_3_graphics_73,x:250.6,y:181.5}).wait(1).to({graphics:mask_3_graphics_74,x:250.2,y:182.5}).wait(1).to({graphics:mask_3_graphics_75,x:249.9,y:183.5}).wait(1).to({graphics:mask_3_graphics_76,x:249.6,y:184.6}).wait(1).to({graphics:mask_3_graphics_77,x:249.2,y:185.6}).wait(1).to({graphics:mask_3_graphics_78,x:248.9,y:186.6}).wait(1).to({graphics:mask_3_graphics_79,x:248.6,y:187.7}).wait(1).to({graphics:mask_3_graphics_80,x:248.2,y:188.7}).wait(1).to({graphics:mask_3_graphics_81,x:247.9,y:189.7}).wait(1).to({graphics:mask_3_graphics_82,x:144,y:138.3}).wait(1).to({graphics:mask_3_graphics_83,x:246.6,y:193.7}).wait(1).to({graphics:mask_3_graphics_84,x:144,y:144.1}).wait(377));

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(20,1,1).p("AD6r3InzXv");
	this.shape_6.setTransform(246,198);
	this.shape_6._off = true;

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(9).to({_off:false},0).wait(452));

	// number
	this.instance_4 = new lib._5("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(275,275);
	this.instance_4.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(461));

	// Background
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#F59E9E").ss(3,1,1).p("EAq+Aq+MhV7AAAMAAAhV7MBV7AAAg");
	this.shape_7.setTransform(275,275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F6E7E7").s().p("Egq9Aq+MAAAhV7MBV7AAAMAAABV7g");
	this.shape_8.setTransform(275,275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).wait(461));

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