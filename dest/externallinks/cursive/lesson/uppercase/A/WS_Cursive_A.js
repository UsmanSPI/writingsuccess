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


(lib.A = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3YVXQhdgsg/hTQg6hOgehuQgdhpAAh8QAAjEA2jPQAzjGBhjGQBfi/CHi4QCEi1ChihQCkigC0iEQC6iEDDhfQDGhfDHg0QDNg2DGAAIAiAAQD0AAB2AXQDPAiAABoQjjILj3HrQoKQZgxB1QgdBoAAAGQgBBaBNAZIA6AJIAWAAID+g1QDIhPCChYQDjiPFflXIDPjAQBghMA2AAQBVAAAABfQAABKicC2QiiC9joC5QkHDVj+B8QlsCTikAAQioAAh0hbQh8hhgBihQABi2D3mtQuBPRmCAAQiBgBhigugABMxnQirAxiqBaQimBbihB8QifB6iOCSQiNCVhzCkQh1CmhWCqQhVCygsCrQgxCwAACkQAACZA2BTQBCBnCNAAQFFAAQozXIBehuQCiizDSl8IDImgIlzgYQijAAiwAxg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-177,-141.3,354,282.7);


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
	this.instance.setTransform(-5.6,-7.1,1,1,26.7,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-132.4,guide:{path:[-5.6,-7,-68.3,127.6,48.2,28.7]}},89).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_43 = new cjs.Graphics().p("AiUDlIAVgPICbDaIgVAPg");
	var mask_graphics_44 = new cjs.Graphics().p("AhfhfIAlgaICaDZIglAag");
	var mask_graphics_45 = new cjs.Graphics().p("AhnhZIA1gmICaDZIg1Amg");
	var mask_graphics_46 = new cjs.Graphics().p("AhvhUIBEgwICbDZIhEAwg");
	var mask_graphics_47 = new cjs.Graphics().p("Ah3hOIBUg8ICaDZIhTA8g");
	var mask_graphics_48 = new cjs.Graphics().p("Ah+hJIBjhHICaDZIhjBHg");
	var mask_graphics_49 = new cjs.Graphics().p("AiGhDIBzhSICaDZIhzBSg");
	var mask_graphics_50 = new cjs.Graphics().p("AiOg+ICChcICbDYIiCBdg");
	var mask_graphics_51 = new cjs.Graphics().p("AiWg4ICShoICbDZIiSBog");
	var mask_graphics_52 = new cjs.Graphics().p("AidgzICghzICbDaIigByg");
	var mask_graphics_53 = new cjs.Graphics().p("AilgtICwh+ICbDZIiwB+g");
	var mask_graphics_54 = new cjs.Graphics().p("AitgoIC/iIICcDYIi/CJg");
	var mask_graphics_55 = new cjs.Graphics().p("Ai0giIDOiUICbDZIjOCUg");
	var mask_graphics_56 = new cjs.Graphics().p("Ai8gdIDeifICbDaIjeCeg");
	var mask_graphics_57 = new cjs.Graphics().p("AjEgXIDtiqICcDZIjtCqg");
	var mask_graphics_58 = new cjs.Graphics().p("AjMgRID9i2ICcDZIj9C2g");
	var mask_graphics_59 = new cjs.Graphics().p("AjTgMIEMjAICbDZIkMDAg");
	var mask_graphics_60 = new cjs.Graphics().p("AjbgGIEcjMICbDZIkcDMg");
	var mask_graphics_61 = new cjs.Graphics().p("AjjgBIErjWICcDZIkrDWg");
	var mask_graphics_62 = new cjs.Graphics().p("AjrAEIE7jhICcDaIk7Dhg");
	var mask_graphics_63 = new cjs.Graphics().p("AjyAJIFKjrICbDaIlKDrg");
	var mask_graphics_64 = new cjs.Graphics().p("Aj6APIFZj3ICcDaIlaD3g");
	var mask_graphics_65 = new cjs.Graphics().p("AkCAUIFpkBICcDaIlpEBg");
	var mask_graphics_66 = new cjs.Graphics().p("AkJAaIF4kNICbDaIl4ENg");
	var mask_graphics_67 = new cjs.Graphics().p("AkRAfIGHkXICcDaImHEXg");
	var mask_graphics_68 = new cjs.Graphics().p("AkZAlIGXkjICcDaImXEjg");
	var mask_graphics_69 = new cjs.Graphics().p("AkhAqIGnktICbDaImmEtg");
	var mask_graphics_70 = new cjs.Graphics().p("AkoAwIG2k5ICbDaIm2E5g");
	var mask_graphics_71 = new cjs.Graphics().p("AkwA1IHGlDICbDaInFFDg");
	var mask_graphics_72 = new cjs.Graphics().p("Ak4A7IHVlPICcDaInVFPg");
	var mask_graphics_73 = new cjs.Graphics().p("AlABAIHllZICbDaInkFZg");
	var mask_graphics_74 = new cjs.Graphics().p("AlHBGIH0llICbDaIn0Flg");
	var mask_graphics_75 = new cjs.Graphics().p("AlPBLIIElvICbDaIoDFvg");
	var mask_graphics_76 = new cjs.Graphics().p("AlXBRIITl7ICcDaIoTF7g");
	var mask_graphics_77 = new cjs.Graphics().p("AlfBXIIjmHICbDaIoiGHg");
	var mask_graphics_78 = new cjs.Graphics().p("AlmBcIIxmRICcDaIoxGRg");
	var mask_graphics_79 = new cjs.Graphics().p("AluBiIJBmcICcDaIpBGcg");
	var mask_graphics_80 = new cjs.Graphics().p("Al2BnIJRmnICbDaIpQGng");
	var mask_graphics_81 = new cjs.Graphics().p("Al9BtIJgmzICbDaIpgGzg");
	var mask_graphics_82 = new cjs.Graphics().p("AmFByIJwm9ICbDaIpvG9g");
	var mask_graphics_83 = new cjs.Graphics().p("AmNB4IJ/nIICcDZIp/HJg");
	var mask_graphics_84 = new cjs.Graphics().p("AmVB9IKPnTICbDaIqOHTg");
	var mask_graphics_85 = new cjs.Graphics().p("AmcCDIKenfICbDaIqeHfg");
	var mask_graphics_86 = new cjs.Graphics().p("AmkCIIKunpICbDaIqtHpg");
	var mask_graphics_87 = new cjs.Graphics().p("AmsCOIK9n1ICcDaIq9H1g");
	var mask_graphics_88 = new cjs.Graphics().p("Am0CTILNn/ICbDaIrMH/g");
	var mask_graphics_89 = new cjs.Graphics().p("Am7DlILcoLICbDaIrcILg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(43).to({graphics:mask_graphics_43,x:-14.9,y:44.7}).wait(1).to({graphics:mask_graphics_44,x:-20.1,y:77.2}).wait(1).to({graphics:mask_graphics_45,x:-19.3,y:76.6}).wait(1).to({graphics:mask_graphics_46,x:-18.6,y:76.1}).wait(1).to({graphics:mask_graphics_47,x:-17.8,y:75.5}).wait(1).to({graphics:mask_graphics_48,x:-17,y:75}).wait(1).to({graphics:mask_graphics_49,x:-16.2,y:74.4}).wait(1).to({graphics:mask_graphics_50,x:-15.5,y:73.9}).wait(1).to({graphics:mask_graphics_51,x:-14.7,y:73.3}).wait(1).to({graphics:mask_graphics_52,x:-13.9,y:72.8}).wait(1).to({graphics:mask_graphics_53,x:-13.1,y:72.2}).wait(1).to({graphics:mask_graphics_54,x:-12.4,y:71.7}).wait(1).to({graphics:mask_graphics_55,x:-11.6,y:71.1}).wait(1).to({graphics:mask_graphics_56,x:-10.8,y:70.6}).wait(1).to({graphics:mask_graphics_57,x:-10.1,y:70}).wait(1).to({graphics:mask_graphics_58,x:-9.3,y:69.4}).wait(1).to({graphics:mask_graphics_59,x:-8.5,y:68.9}).wait(1).to({graphics:mask_graphics_60,x:-7.7,y:68.3}).wait(1).to({graphics:mask_graphics_61,x:-7,y:67.8}).wait(1).to({graphics:mask_graphics_62,x:-6.2,y:67.2}).wait(1).to({graphics:mask_graphics_63,x:-5.4,y:66.7}).wait(1).to({graphics:mask_graphics_64,x:-4.6,y:66.1}).wait(1).to({graphics:mask_graphics_65,x:-3.9,y:65.6}).wait(1).to({graphics:mask_graphics_66,x:-3.1,y:65}).wait(1).to({graphics:mask_graphics_67,x:-2.3,y:64.4}).wait(1).to({graphics:mask_graphics_68,x:-1.5,y:63.9}).wait(1).to({graphics:mask_graphics_69,x:-0.7,y:63.3}).wait(1).to({graphics:mask_graphics_70,x:0,y:62.8}).wait(1).to({graphics:mask_graphics_71,x:0.8,y:62.2}).wait(1).to({graphics:mask_graphics_72,x:1.6,y:61.7}).wait(1).to({graphics:mask_graphics_73,x:2.4,y:61.1}).wait(1).to({graphics:mask_graphics_74,x:3.1,y:60.6}).wait(1).to({graphics:mask_graphics_75,x:3.9,y:60}).wait(1).to({graphics:mask_graphics_76,x:4.7,y:59.5}).wait(1).to({graphics:mask_graphics_77,x:5.5,y:58.9}).wait(1).to({graphics:mask_graphics_78,x:6.2,y:58.4}).wait(1).to({graphics:mask_graphics_79,x:7,y:57.8}).wait(1).to({graphics:mask_graphics_80,x:7.8,y:57.3}).wait(1).to({graphics:mask_graphics_81,x:8.5,y:56.7}).wait(1).to({graphics:mask_graphics_82,x:9.3,y:56.2}).wait(1).to({graphics:mask_graphics_83,x:10.1,y:55.6}).wait(1).to({graphics:mask_graphics_84,x:10.9,y:55.1}).wait(1).to({graphics:mask_graphics_85,x:11.6,y:54.5}).wait(1).to({graphics:mask_graphics_86,x:12.4,y:53.9}).wait(1).to({graphics:mask_graphics_87,x:13.2,y:53.4}).wait(1).to({graphics:mask_graphics_88,x:14,y:52.8}).wait(1).to({graphics:mask_graphics_89,x:14.7,y:44.7}).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AihmAQpuU7SKve");
	this.shape.setTransform(10.1,32.1);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(43).to({_off:false},0).wait(47));

	// Layer 4 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AiHgcIAihBIDtB6IgiBBg");
	var mask_1_graphics_1 = new cjs.Graphics().p("AiLgUIAqhSIDtB7IgqBSg");
	var mask_1_graphics_2 = new cjs.Graphics().p("AiPgLIAyhjIDuB6IgzBjg");
	var mask_1_graphics_3 = new cjs.Graphics().p("AiUgDIA8hzIDtB6Ig8Bzg");
	var mask_1_graphics_4 = new cjs.Graphics().p("AiYAFIBEiEIDtB8IhECCg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AicANIBMiUIDuB7IhOCUg");
	var mask_1_graphics_6 = new cjs.Graphics().p("AihAVIBWikIDtB7IhWCkg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AilAdIBei1IDtB8IheC1g");
	var mask_1_graphics_8 = new cjs.Graphics().p("AipAmIBmjGIDtB7IhmDGg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AiuAuIBwjWIDtB7IhwDWg");
	var mask_1_graphics_10 = new cjs.Graphics().p("AiyA3IB4joIDtB8Ih4Dng");
	var mask_1_graphics_11 = new cjs.Graphics().p("Ai2A/ICAj4IDtB7IiAD4g");
	var mask_1_graphics_12 = new cjs.Graphics().p("Ai7BHICJkIIDuB7IiKEIg");
	var mask_1_graphics_13 = new cjs.Graphics().p("Ai/BPICSkYIDtB7IiSEYg");
	var mask_1_graphics_14 = new cjs.Graphics().p("AjDBYICakqIDtB7IiaEqg");
	var mask_1_graphics_15 = new cjs.Graphics().p("AjIBgICjk6IDuB7IijE6g");
	var mask_1_graphics_16 = new cjs.Graphics().p("AjMBoICslKIDtB7IisFKg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AjQBxIC0lcIDtB8Ii0Fag");
	var mask_1_graphics_18 = new cjs.Graphics().p("AjUB5IC8lsIDtB7Ii8Fsg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AjZCBIDGl8IDtB7IjGF8g");
	var mask_1_graphics_20 = new cjs.Graphics().p("AjdCJIDOmNIDtB8IjOGMg");
	var mask_1_graphics_21 = new cjs.Graphics().p("AjhCSIDWmeIDtB7IjWGeg");
	var mask_1_graphics_22 = new cjs.Graphics().p("AjlCaIDemuIDtB7IjeGug");
	var mask_1_graphics_23 = new cjs.Graphics().p("AjqCiIDom+IDsB7IjnG+g");
	var mask_1_graphics_24 = new cjs.Graphics().p("AjuCqIDvnOIDuB6IjvHQg");
	var mask_1_graphics_25 = new cjs.Graphics().p("AjyCzID3ngIDuB7Ij3Hgg");
	var mask_1_graphics_26 = new cjs.Graphics().p("Aj3C7IEBnwIDtB7Ij/Hwg");
	var mask_1_graphics_27 = new cjs.Graphics().p("Aj7DEIEJoBIDuB6IkJIBg");
	var mask_1_graphics_28 = new cjs.Graphics().p("Aj/DMIERoSIDuB7IkRISg");
	var mask_1_graphics_29 = new cjs.Graphics().p("AkDDUIEZoiIDuB7IkZIig");
	var mask_1_graphics_30 = new cjs.Graphics().p("AkIDcIEjoyIDuB6IkjIzg");
	var mask_1_graphics_31 = new cjs.Graphics().p("AkMDlIErpEIDuB7IkrJEg");
	var mask_1_graphics_32 = new cjs.Graphics().p("AkQDtIEzpUIDuB7IkzJUg");
	var mask_1_graphics_33 = new cjs.Graphics().p("AkVD1IE9pkIDtB7Ik7Jkg");
	var mask_1_graphics_34 = new cjs.Graphics().p("AkZD+IFFp2IDuB7IlFJ2g");
	var mask_1_graphics_35 = new cjs.Graphics().p("AkdEGIFNqGIDuB7IlNKGg");
	var mask_1_graphics_36 = new cjs.Graphics().p("AkhEOIFWqWIDtB7IlWKWg");
	var mask_1_graphics_37 = new cjs.Graphics().p("AkmEWIFfqmIDuB6IlfKog");
	var mask_1_graphics_38 = new cjs.Graphics().p("AkqEfIFnq4IDuB7IlnK4g");
	var mask_1_graphics_39 = new cjs.Graphics().p("AkuEnIFvrIIDuB7IlvLIg");
	var mask_1_graphics_40 = new cjs.Graphics().p("AkyEwIF4rZIDtB6Il4LZg");
	var mask_1_graphics_41 = new cjs.Graphics().p("Ak3E4IGBrqIDuB7ImBLqg");
	var mask_1_graphics_42 = new cjs.Graphics().p("Ak7FAIGJr6IDuB7ImJL6g");
	var mask_1_graphics_43 = new cjs.Graphics().p("AlAFIIGTsLIDuB8ImTMLg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:-1.7,y:-8}).wait(1).to({graphics:mask_1_graphics_1,x:-2.2,y:-7.2}).wait(1).to({graphics:mask_1_graphics_2,x:-2.6,y:-6.3}).wait(1).to({graphics:mask_1_graphics_3,x:-3,y:-5.5}).wait(1).to({graphics:mask_1_graphics_4,x:-3.5,y:-4.7}).wait(1).to({graphics:mask_1_graphics_5,x:-3.9,y:-3.9}).wait(1).to({graphics:mask_1_graphics_6,x:-4.3,y:-3}).wait(1).to({graphics:mask_1_graphics_7,x:-4.7,y:-2.2}).wait(1).to({graphics:mask_1_graphics_8,x:-5.2,y:-1.4}).wait(1).to({graphics:mask_1_graphics_9,x:-5.6,y:-0.5}).wait(1).to({graphics:mask_1_graphics_10,x:-6,y:0.3}).wait(1).to({graphics:mask_1_graphics_11,x:-6.5,y:1.1}).wait(1).to({graphics:mask_1_graphics_12,x:-6.9,y:2}).wait(1).to({graphics:mask_1_graphics_13,x:-7.3,y:2.8}).wait(1).to({graphics:mask_1_graphics_14,x:-7.8,y:3.6}).wait(1).to({graphics:mask_1_graphics_15,x:-8.2,y:4.5}).wait(1).to({graphics:mask_1_graphics_16,x:-8.6,y:5.3}).wait(1).to({graphics:mask_1_graphics_17,x:-9,y:6.1}).wait(1).to({graphics:mask_1_graphics_18,x:-9.5,y:7}).wait(1).to({graphics:mask_1_graphics_19,x:-9.9,y:7.8}).wait(1).to({graphics:mask_1_graphics_20,x:-10.3,y:8.6}).wait(1).to({graphics:mask_1_graphics_21,x:-10.8,y:9.4}).wait(1).to({graphics:mask_1_graphics_22,x:-11.2,y:10.3}).wait(1).to({graphics:mask_1_graphics_23,x:-11.6,y:11.1}).wait(1).to({graphics:mask_1_graphics_24,x:-12.1,y:12}).wait(1).to({graphics:mask_1_graphics_25,x:-12.5,y:12.8}).wait(1).to({graphics:mask_1_graphics_26,x:-12.9,y:13.6}).wait(1).to({graphics:mask_1_graphics_27,x:-13.4,y:14.5}).wait(1).to({graphics:mask_1_graphics_28,x:-13.8,y:15.3}).wait(1).to({graphics:mask_1_graphics_29,x:-14.2,y:16.1}).wait(1).to({graphics:mask_1_graphics_30,x:-14.7,y:17}).wait(1).to({graphics:mask_1_graphics_31,x:-15.1,y:17.8}).wait(1).to({graphics:mask_1_graphics_32,x:-15.5,y:18.6}).wait(1).to({graphics:mask_1_graphics_33,x:-15.9,y:19.4}).wait(1).to({graphics:mask_1_graphics_34,x:-16.4,y:20.3}).wait(1).to({graphics:mask_1_graphics_35,x:-16.8,y:21.1}).wait(1).to({graphics:mask_1_graphics_36,x:-17.2,y:21.9}).wait(1).to({graphics:mask_1_graphics_37,x:-17.7,y:22.8}).wait(1).to({graphics:mask_1_graphics_38,x:-18.1,y:23.6}).wait(1).to({graphics:mask_1_graphics_39,x:-18.5,y:24.4}).wait(1).to({graphics:mask_1_graphics_40,x:-18.9,y:25.3}).wait(1).to({graphics:mask_1_graphics_41,x:-19.4,y:26.1}).wait(1).to({graphics:mask_1_graphics_42,x:-19.8,y:26.9}).wait(1).to({graphics:mask_1_graphics_43,x:-20.3,y:27.8}).wait(47));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AihmAQpuU7SKve");
	this.shape_1.setTransform(10.1,32.1);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.3,-14.6,27.2,17.3);


(lib.ar3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(58.9,-91,1,1,55.2,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:10.2,guide:{path:[58.9,-90.8,-35.6,-39.2,-58.9,91]}},104).wait(1));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Aign4IA/hfIHtFGIg+Beg");
	var mask_graphics_1 = new cjs.Graphics().p("AkbhqIBKhwIHtFFIhKBwg");
	var mask_graphics_2 = new cjs.Graphics().p("AkhhhIBWiCIHtFFIhWCCg");
	var mask_graphics_3 = new cjs.Graphics().p("AknhYIBhiUIHtFFIhhCUg");
	var mask_graphics_4 = new cjs.Graphics().p("AkshQIBsikIHtFFIhsCkg");
	var mask_graphics_5 = new cjs.Graphics().p("AkyhHIB4i2IHtFFIh4C2g");
	var mask_graphics_6 = new cjs.Graphics().p("Ak4g+ICEjIIHtFFIiEDIg");
	var mask_graphics_7 = new cjs.Graphics().p("Ak+g1ICQjaIHtFFIiQDag");
	var mask_graphics_8 = new cjs.Graphics().p("AlDgsICajrIHtFFIiaDqg");
	var mask_graphics_9 = new cjs.Graphics().p("AlJgkICmj8IHtFFIimD8g");
	var mask_graphics_10 = new cjs.Graphics().p("AlPgbICykOIHtFFIiyEOg");
	var mask_graphics_11 = new cjs.Graphics().p("AlVgSIC+kgIHtFFIi+Egg");
	var mask_graphics_12 = new cjs.Graphics().p("AlagJIDIkxIHtFFIjIExg");
	var mask_graphics_13 = new cjs.Graphics().p("AlggBIDUlCIHtFFIjUFCg");
	var mask_graphics_14 = new cjs.Graphics().p("AlmAHIDglTIHtFGIjgFTg");
	var mask_graphics_15 = new cjs.Graphics().p("AlsAQIDsllIHtFGIjsFlg");
	var mask_graphics_16 = new cjs.Graphics().p("AlyAYID4l1IHtFGIj4F2g");
	var mask_graphics_17 = new cjs.Graphics().p("Al4AhIEDmHIHtFGIkDGHg");
	var mask_graphics_18 = new cjs.Graphics().p("Al9AqIEOmZIHtFGIkOGZg");
	var mask_graphics_19 = new cjs.Graphics().p("AmDAzIEamrIHtFGIkaGrg");
	var mask_graphics_20 = new cjs.Graphics().p("AmJA8IEmm9IHtFGIkmG9g");
	var mask_graphics_21 = new cjs.Graphics().p("AmPBFIExnPIHtFGIkxHPg");
	var mask_graphics_22 = new cjs.Graphics().p("AmUBNIE8nfIHtFGIk8Hfg");
	var mask_graphics_23 = new cjs.Graphics().p("AmaBWIFInxIHtFGIlIHxg");
	var mask_graphics_24 = new cjs.Graphics().p("AmgBfIFUoDIHtFGIlUIDg");
	var mask_graphics_25 = new cjs.Graphics().p("AmmBnIFfoUIHtFGIlfIVg");
	var mask_graphics_26 = new cjs.Graphics().p("AmsBwIFsolIHtFGIlsIlg");
	var mask_graphics_27 = new cjs.Graphics().p("AmyB5IF4o3IHtFGIl3I3g");
	var mask_graphics_28 = new cjs.Graphics().p("Am3CBIGCpIIHtFGImCJIg");
	var mask_graphics_29 = new cjs.Graphics().p("Am9CKIGOpZIHtFGImOJZg");
	var mask_graphics_30 = new cjs.Graphics().p("AnDCTIGaprIHtFGImaJrg");
	var mask_graphics_31 = new cjs.Graphics().p("AnICcIGlp9IHtFGImlJ9g");
	var mask_graphics_32 = new cjs.Graphics().p("AnOClIGwqPIHtFGImwKOg");
	var mask_graphics_33 = new cjs.Graphics().p("AnUCtIG8qfIHtFGIm8Kgg");
	var mask_graphics_34 = new cjs.Graphics().p("AnaC2IHIqxIHtFGInIKxg");
	var mask_graphics_35 = new cjs.Graphics().p("AnfC/IHTrDIHtFGInTLDg");
	var mask_graphics_36 = new cjs.Graphics().p("AnlDIIHerVIHtFGIneLVg");
	var mask_graphics_37 = new cjs.Graphics().p("AnrDQIHqrlIHtFGInqLlg");
	var mask_graphics_38 = new cjs.Graphics().p("AnxDZIH1r3IHuFGIn1L3g");
	var mask_graphics_39 = new cjs.Graphics().p("An3DiIIBsJIHuFGIoBMJg");
	var mask_graphics_40 = new cjs.Graphics().p("An9DrIINsbIHuFGIoNMbg");
	var mask_graphics_41 = new cjs.Graphics().p("AoCD0IIXssIHuFGIoXMrg");
	var mask_graphics_42 = new cjs.Graphics().p("AoID8IIjs9IHuFGIojM9g");
	var mask_graphics_43 = new cjs.Graphics().p("AoOEFIIvtPIHuFGIovNPg");
	var mask_graphics_44 = new cjs.Graphics().p("AoUEOII7thIHuFGIo7Nhg");
	var mask_graphics_45 = new cjs.Graphics().p("AoZEXIJFtyIHuFGIpFNyg");
	var mask_graphics_46 = new cjs.Graphics().p("AofEfIJRuEIHuFGIpROEg");
	var mask_graphics_47 = new cjs.Graphics().p("AolEoIJduVIHuFGIpdOVg");
	var mask_graphics_48 = new cjs.Graphics().p("AorExIJpunIHuFGIppOng");
	var mask_graphics_49 = new cjs.Graphics().p("AowE6IJ0u5IHuFGIp0O5g");
	var mask_graphics_50 = new cjs.Graphics().p("Ao2FDIJ/vLIHuFGIp/PKg");
	var mask_graphics_51 = new cjs.Graphics().p("Ao8FLIKLvbIHuFGIqLPbg");
	var mask_graphics_52 = new cjs.Graphics().p("ApCFUIKXvtIHuFGIqXPtg");
	var mask_graphics_53 = new cjs.Graphics().p("ApHFdIKiv/IHuFGIqiP/g");
	var mask_graphics_54 = new cjs.Graphics().p("ApNFmIKtwRIHuFGIqtQRg");
	var mask_graphics_55 = new cjs.Graphics().p("ApTFuIK5whIHuFGIq5Qhg");
	var mask_graphics_56 = new cjs.Graphics().p("ApZF3ILFwzIHuFGIrFQzg");
	var mask_graphics_57 = new cjs.Graphics().p("ApeGAILQxFIHuFGIrRRFg");
	var mask_graphics_58 = new cjs.Graphics().p("AplGIILdxWIHuFGIrdRXg");
	var mask_graphics_59 = new cjs.Graphics().p("ApqGSILnxpIHuFHIrnRng");
	var mask_graphics_60 = new cjs.Graphics().p("ApwGaILzx5IHuFGIrzR5g");
	var mask_graphics_61 = new cjs.Graphics().p("Ap2GjIL/yLIHuFGIr/SLg");
	var mask_graphics_62 = new cjs.Graphics().p("Ap8GsIMLydIHuFGIsKSdg");
	var mask_graphics_63 = new cjs.Graphics().p("AqBG1IMVyvIHuFHIsVSug");
	var mask_graphics_64 = new cjs.Graphics().p("AqHG9IMhy/IHuFGIshS/g");
	var mask_graphics_65 = new cjs.Graphics().p("AqNHGIMtzRIHuFGIstTRg");
	var mask_graphics_66 = new cjs.Graphics().p("AqTHPIM5zjIHuFGIs4Tjg");
	var mask_graphics_67 = new cjs.Graphics().p("AqYHXINDz0IHuFHItDT0g");
	var mask_graphics_68 = new cjs.Graphics().p("AqeHgINP0FIHuFGItPUFg");
	var mask_graphics_69 = new cjs.Graphics().p("AqkHpINb0XIHuFGItbUXg");
	var mask_graphics_70 = new cjs.Graphics().p("AqqHyINn0pIHuFGItnUpg");
	var mask_graphics_71 = new cjs.Graphics().p("AqvH6INy06IHuFHItzU5g");
	var mask_graphics_72 = new cjs.Graphics().p("Aq1IEIN91MIHuFFIt9VNg");
	var mask_graphics_73 = new cjs.Graphics().p("Aq7IMIOJ1dIHuFGIuJVdg");
	var mask_graphics_74 = new cjs.Graphics().p("ArBIVIOV1vIHuFGIuVVvg");
	var mask_graphics_75 = new cjs.Graphics().p("ArHIeIOh2BIHuFGIuhWBg");
	var mask_graphics_76 = new cjs.Graphics().p("ArMImIOr2RIHuFFIurWTg");
	var mask_graphics_77 = new cjs.Graphics().p("ArSIvIO32jIHuFGIu3Wjg");
	var mask_graphics_78 = new cjs.Graphics().p("ArYI4IPD21IHuFGIvDW1g");
	var mask_graphics_79 = new cjs.Graphics().p("AreJAIPP3FIHuFFIvPXGg");
	var mask_graphics_80 = new cjs.Graphics().p("ArkJJIPb3XIHuFGIvbXXg");
	var mask_graphics_81 = new cjs.Graphics().p("ArqJSIPm3pIHuFGIvmXpg");
	var mask_graphics_82 = new cjs.Graphics().p("ArvJbIPx37IHuFGIvxX7g");
	var mask_graphics_83 = new cjs.Graphics().p("Ar1JjIP94LIHuFFIv9YMg");
	var mask_graphics_84 = new cjs.Graphics().p("Ar7JsIQJ4dIHuFGIwJYdg");
	var mask_graphics_85 = new cjs.Graphics().p("AsBJ1IQU4vIHuFGIwUYvg");
	var mask_graphics_86 = new cjs.Graphics().p("AsGJ+IQf5BIHuFGIwfZBg");
	var mask_graphics_87 = new cjs.Graphics().p("AsMKHIQr5TIHuFGIwrZTg");
	var mask_graphics_88 = new cjs.Graphics().p("AsSKPIQ35kIHuFHIw3Zjg");
	var mask_graphics_89 = new cjs.Graphics().p("AsYKYIRD51IHuFGIxDZ1g");
	var mask_graphics_90 = new cjs.Graphics().p("AsdKhIRN6HIHuFGIxNaHg");
	var mask_graphics_91 = new cjs.Graphics().p("AsjKqIRZ6ZIHuFGIxZaZg");
	var mask_graphics_92 = new cjs.Graphics().p("AspKyIRl6qIHuFHIxlapg");
	var mask_graphics_93 = new cjs.Graphics().p("AsvK7IRx67IHuFGIxxa7g");
	var mask_graphics_94 = new cjs.Graphics().p("As0LEIR77NIHuFGIx8bNg");
	var mask_graphics_95 = new cjs.Graphics().p("As6LNISH7fIHuFGIyHbfg");
	var mask_graphics_96 = new cjs.Graphics().p("AtALWIST7xIHuFHIyTbwg");
	var mask_graphics_97 = new cjs.Graphics().p("AtGLeISf8BIHuFGIyfcBg");
	var mask_graphics_98 = new cjs.Graphics().p("AtMLnISq8TIHuFGIyqcTg");
	var mask_graphics_99 = new cjs.Graphics().p("AtSLwIS28lIHuFGIy2clg");
	var mask_graphics_100 = new cjs.Graphics().p("AtXL5ITB83IHuFGIzBc3g");
	var mask_graphics_101 = new cjs.Graphics().p("AtdMCITN9IIHuFFIzNdIg");
	var mask_graphics_102 = new cjs.Graphics().p("AtjMKITZ9ZIHuFGIzZdZg");
	var mask_graphics_103 = new cjs.Graphics().p("AtpMTITk9rIHuFGIzjdrg");
	var mask_graphics_104 = new cjs.Graphics().p("AtuMcITv99IHuFGIzvd9g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:39.6,y:-60}).wait(1).to({graphics:mask_graphics_1,x:50.8,y:-98}).wait(1).to({graphics:mask_graphics_2,x:50.2,y:-97.2}).wait(1).to({graphics:mask_graphics_3,x:49.7,y:-96.3}).wait(1).to({graphics:mask_graphics_4,x:49.1,y:-95.4}).wait(1).to({graphics:mask_graphics_5,x:48.5,y:-94.5}).wait(1).to({graphics:mask_graphics_6,x:47.9,y:-93.7}).wait(1).to({graphics:mask_graphics_7,x:47.3,y:-92.8}).wait(1).to({graphics:mask_graphics_8,x:46.8,y:-91.9}).wait(1).to({graphics:mask_graphics_9,x:46.2,y:-91.1}).wait(1).to({graphics:mask_graphics_10,x:45.6,y:-90.2}).wait(1).to({graphics:mask_graphics_11,x:45,y:-89.3}).wait(1).to({graphics:mask_graphics_12,x:44.5,y:-88.4}).wait(1).to({graphics:mask_graphics_13,x:43.9,y:-87.6}).wait(1).to({graphics:mask_graphics_14,x:43.3,y:-86.7}).wait(1).to({graphics:mask_graphics_15,x:42.7,y:-85.8}).wait(1).to({graphics:mask_graphics_16,x:42.1,y:-84.9}).wait(1).to({graphics:mask_graphics_17,x:41.6,y:-84.1}).wait(1).to({graphics:mask_graphics_18,x:41,y:-83.2}).wait(1).to({graphics:mask_graphics_19,x:40.4,y:-82.3}).wait(1).to({graphics:mask_graphics_20,x:39.8,y:-81.5}).wait(1).to({graphics:mask_graphics_21,x:39.3,y:-80.6}).wait(1).to({graphics:mask_graphics_22,x:38.7,y:-79.7}).wait(1).to({graphics:mask_graphics_23,x:38.1,y:-78.8}).wait(1).to({graphics:mask_graphics_24,x:37.5,y:-78}).wait(1).to({graphics:mask_graphics_25,x:37,y:-77.1}).wait(1).to({graphics:mask_graphics_26,x:36.4,y:-76.2}).wait(1).to({graphics:mask_graphics_27,x:35.8,y:-75.4}).wait(1).to({graphics:mask_graphics_28,x:35.2,y:-74.5}).wait(1).to({graphics:mask_graphics_29,x:34.7,y:-73.6}).wait(1).to({graphics:mask_graphics_30,x:34.1,y:-72.7}).wait(1).to({graphics:mask_graphics_31,x:33.5,y:-71.9}).wait(1).to({graphics:mask_graphics_32,x:32.9,y:-71}).wait(1).to({graphics:mask_graphics_33,x:32.4,y:-70.1}).wait(1).to({graphics:mask_graphics_34,x:31.8,y:-69.3}).wait(1).to({graphics:mask_graphics_35,x:31.2,y:-68.4}).wait(1).to({graphics:mask_graphics_36,x:30.6,y:-67.5}).wait(1).to({graphics:mask_graphics_37,x:30,y:-66.6}).wait(1).to({graphics:mask_graphics_38,x:29.5,y:-65.8}).wait(1).to({graphics:mask_graphics_39,x:28.9,y:-64.9}).wait(1).to({graphics:mask_graphics_40,x:28.3,y:-64}).wait(1).to({graphics:mask_graphics_41,x:27.7,y:-63.1}).wait(1).to({graphics:mask_graphics_42,x:27.2,y:-62.3}).wait(1).to({graphics:mask_graphics_43,x:26.6,y:-61.4}).wait(1).to({graphics:mask_graphics_44,x:26,y:-60.5}).wait(1).to({graphics:mask_graphics_45,x:25.4,y:-59.6}).wait(1).to({graphics:mask_graphics_46,x:24.9,y:-58.8}).wait(1).to({graphics:mask_graphics_47,x:24.3,y:-57.9}).wait(1).to({graphics:mask_graphics_48,x:23.7,y:-57}).wait(1).to({graphics:mask_graphics_49,x:23.1,y:-56.2}).wait(1).to({graphics:mask_graphics_50,x:22.5,y:-55.3}).wait(1).to({graphics:mask_graphics_51,x:22,y:-54.4}).wait(1).to({graphics:mask_graphics_52,x:21.4,y:-53.5}).wait(1).to({graphics:mask_graphics_53,x:20.8,y:-52.7}).wait(1).to({graphics:mask_graphics_54,x:20.2,y:-51.8}).wait(1).to({graphics:mask_graphics_55,x:19.7,y:-50.9}).wait(1).to({graphics:mask_graphics_56,x:19.1,y:-50}).wait(1).to({graphics:mask_graphics_57,x:18.5,y:-49.2}).wait(1).to({graphics:mask_graphics_58,x:17.9,y:-48.3}).wait(1).to({graphics:mask_graphics_59,x:17.3,y:-47.4}).wait(1).to({graphics:mask_graphics_60,x:16.8,y:-46.6}).wait(1).to({graphics:mask_graphics_61,x:16.2,y:-45.7}).wait(1).to({graphics:mask_graphics_62,x:15.6,y:-44.8}).wait(1).to({graphics:mask_graphics_63,x:15,y:-43.9}).wait(1).to({graphics:mask_graphics_64,x:14.5,y:-43.1}).wait(1).to({graphics:mask_graphics_65,x:13.9,y:-42.2}).wait(1).to({graphics:mask_graphics_66,x:13.3,y:-41.3}).wait(1).to({graphics:mask_graphics_67,x:12.7,y:-40.4}).wait(1).to({graphics:mask_graphics_68,x:12.1,y:-39.6}).wait(1).to({graphics:mask_graphics_69,x:11.6,y:-38.7}).wait(1).to({graphics:mask_graphics_70,x:11,y:-37.8}).wait(1).to({graphics:mask_graphics_71,x:10.4,y:-36.9}).wait(1).to({graphics:mask_graphics_72,x:9.8,y:-36.1}).wait(1).to({graphics:mask_graphics_73,x:9.3,y:-35.2}).wait(1).to({graphics:mask_graphics_74,x:8.7,y:-34.3}).wait(1).to({graphics:mask_graphics_75,x:8.1,y:-33.5}).wait(1).to({graphics:mask_graphics_76,x:7.5,y:-32.6}).wait(1).to({graphics:mask_graphics_77,x:7,y:-31.7}).wait(1).to({graphics:mask_graphics_78,x:6.4,y:-30.8}).wait(1).to({graphics:mask_graphics_79,x:5.8,y:-30}).wait(1).to({graphics:mask_graphics_80,x:5.2,y:-29.1}).wait(1).to({graphics:mask_graphics_81,x:4.7,y:-28.2}).wait(1).to({graphics:mask_graphics_82,x:4.1,y:-27.4}).wait(1).to({graphics:mask_graphics_83,x:3.5,y:-26.5}).wait(1).to({graphics:mask_graphics_84,x:2.9,y:-25.6}).wait(1).to({graphics:mask_graphics_85,x:2.4,y:-24.8}).wait(1).to({graphics:mask_graphics_86,x:1.8,y:-23.9}).wait(1).to({graphics:mask_graphics_87,x:1.2,y:-23}).wait(1).to({graphics:mask_graphics_88,x:0.6,y:-22.1}).wait(1).to({graphics:mask_graphics_89,x:0,y:-21.3}).wait(1).to({graphics:mask_graphics_90,x:-0.5,y:-20.4}).wait(1).to({graphics:mask_graphics_91,x:-1.1,y:-19.5}).wait(1).to({graphics:mask_graphics_92,x:-1.7,y:-18.6}).wait(1).to({graphics:mask_graphics_93,x:-2.3,y:-17.8}).wait(1).to({graphics:mask_graphics_94,x:-2.8,y:-16.9}).wait(1).to({graphics:mask_graphics_95,x:-3.4,y:-16}).wait(1).to({graphics:mask_graphics_96,x:-4,y:-15.1}).wait(1).to({graphics:mask_graphics_97,x:-4.6,y:-14.3}).wait(1).to({graphics:mask_graphics_98,x:-5.1,y:-13.4}).wait(1).to({graphics:mask_graphics_99,x:-5.7,y:-12.5}).wait(1).to({graphics:mask_graphics_100,x:-6.3,y:-11.7}).wait(1).to({graphics:mask_graphics_101,x:-6.9,y:-10.8}).wait(1).to({graphics:mask_graphics_102,x:-7.5,y:-9.9}).wait(1).to({graphics:mask_graphics_103,x:-8,y:-9}).wait(1).to({graphics:mask_graphics_104,x:-8.6,y:-8.2}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AJHuJQuRHVj8U+");
	this.shape.setTransform(-0.7,0.4);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(105));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(23.6,-101.8,43.9,23.9);


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
(lib.WS_Cursive_A = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_504 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(504).call(this.frame_504).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(369.9,149.1,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[369.9,149.1,312.8,140.1,254,163.5,195.1,186.8,150.5,250.2,105.8,313.6,109.1,356.3,112.4,399.1,141.8,404.2,171.3,409.3,240.9,338.4,310.7,267.5,341,212.4,357.4,186.1,367.4,156.7,368,155,368.5,153.3,369.2,151.5,369.9,149.6]}},265).wait(15).to({skewY:0,x:323.3,y:247.6},0).to({guide:{path:[323.2,247.6,286.4,308.5,268.1,360.9,249.8,413.2,306.9,400.6,364,388,396.2,353,428.3,318,435.7,310.8]}},135).wait(15).to({x:434.8,y:310.9},0).to({guide:{path:[434.9,311,428.1,241.1,356.7,247.2,298,251.9,270.6,305.1,244.1,356.1,222,409.4,200.4,461.7,171.4,512.2,142.4,562.8,121.7,582.3,101.1,601.9,86.2,618.2,71.3,634.5,58.9,639.7]}},65).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(370,149.1,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},265).wait(15).to({_off:false,x:437.9,y:309},0).to({_off:true},135).wait(81));

	// Layer 11
	this.instance_1 = new lib.ar4("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(362.9,256);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(289).to({_off:false},0).wait(216));

	// Layer 9 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_352 = new cjs.Graphics().p("AQbZaIBdg1IFGI1IhcA1g");
	var mask_graphics_353 = new cjs.Graphics().p("Ajcj4IB0hDIFFI0Ih0BDg");
	var mask_graphics_354 = new cjs.Graphics().p("AjojxICMhRIFFI0IiMBRg");
	var mask_graphics_355 = new cjs.Graphics().p("Aj0jqICkhfIFFI1IikBeg");
	var mask_graphics_356 = new cjs.Graphics().p("AkAjkIC8hsIFFI1Ii8Bsg");
	var mask_graphics_357 = new cjs.Graphics().p("AkMjdIDUh6IFFI1IjUB6g");
	var mask_graphics_358 = new cjs.Graphics().p("AkYjWIDriIIFGI1IjsCHg");
	var mask_graphics_359 = new cjs.Graphics().p("AkjjPIECiVIFFI0IkCCVg");
	var mask_graphics_360 = new cjs.Graphics().p("AkvjIIEaijIFFI0IkaCjg");
	var mask_graphics_361 = new cjs.Graphics().p("Ak7jBIEyixIFFI1IkyCwg");
	var mask_graphics_362 = new cjs.Graphics().p("AlHi7IFJi+IFGI1IlJC+g");
	var mask_graphics_363 = new cjs.Graphics().p("AlTi0IFhjMIFGI1IlhDMg");
	var mask_graphics_364 = new cjs.Graphics().p("AlfitIF4jZIFGI0Il4DZg");
	var mask_graphics_365 = new cjs.Graphics().p("AlrimIGRjnIFFI0ImQDng");
	var mask_graphics_366 = new cjs.Graphics().p("Al2ifIGnj1IFGI0ImnD1g");
	var mask_graphics_367 = new cjs.Graphics().p("AmCiYIG/kDIFGI1Im/ECg");
	var mask_graphics_368 = new cjs.Graphics().p("AmOiSIHXkQIFGI1InXEQg");
	var mask_graphics_369 = new cjs.Graphics().p("AmaiLIHvkeIFGI1InvEeg");
	var mask_graphics_370 = new cjs.Graphics().p("AmmiEIIHkrIFFI0IoGErg");
	var mask_graphics_371 = new cjs.Graphics().p("Amyh9IIfk5IFGI0IofE5g");
	var mask_graphics_372 = new cjs.Graphics().p("Am9h2II1lHIFGI0Io1FHg");
	var mask_graphics_373 = new cjs.Graphics().p("AnJhvIJNlVIFGI1IpNFUg");
	var mask_graphics_374 = new cjs.Graphics().p("AnVhpIJlliIFGI1IplFig");
	var mask_graphics_375 = new cjs.Graphics().p("AnhhiIJ9lwIFGI1Ip9Fwg");
	var mask_graphics_376 = new cjs.Graphics().p("AnthbIKVl9IFGI0IqVF9g");
	var mask_graphics_377 = new cjs.Graphics().p("An5hUIKsmLIFHI0IqtGLg");
	var mask_graphics_378 = new cjs.Graphics().p("AoEhNILDmZIFGI0IrDGZg");
	var mask_graphics_379 = new cjs.Graphics().p("AoQhGILbmnIFGI1IrbGmg");
	var mask_graphics_380 = new cjs.Graphics().p("AochAILzm0IFGI1IrzG0g");
	var mask_graphics_381 = new cjs.Graphics().p("Aoog5IMLnCIFGI1IsLHCg");
	var mask_graphics_382 = new cjs.Graphics().p("Ao0gyIMinPIFHI0IsjHPg");
	var mask_graphics_383 = new cjs.Graphics().p("ApAgrIM6ndIFGI0Is6Hdg");
	var mask_graphics_384 = new cjs.Graphics().p("ApLgkINRnrIFGI0ItRHrg");
	var mask_graphics_385 = new cjs.Graphics().p("ApXgdINpn5IFGI0ItpH5g");
	var mask_graphics_386 = new cjs.Graphics().p("ApjgXIOBoGIFGI1IuBIGg");
	var mask_graphics_387 = new cjs.Graphics().p("ApvgQIOZoUIFGI1IuZIUg");
	var mask_graphics_388 = new cjs.Graphics().p("Ap7gJIOxoiIFGI1IuxIig");
	var mask_graphics_389 = new cjs.Graphics().p("AqHgCIPJovIFFI0IvIIwg");
	var mask_graphics_390 = new cjs.Graphics().p("AqSAEIPfo9IFGI2IvfI9g");
	var mask_graphics_391 = new cjs.Graphics().p("AqeALIP3pKIFGI1Iv3JKg");
	var mask_graphics_392 = new cjs.Graphics().p("AqqARIQPpXIFGI1IwPJYg");
	var mask_graphics_393 = new cjs.Graphics().p("Aq2AYIQnplIFGI2IwnJlg");
	var mask_graphics_394 = new cjs.Graphics().p("ArCAfIQ/pzIFGI2Iw/Jzg");
	var mask_graphics_395 = new cjs.Graphics().p("ArOAmIRXqBIFGI2IxXKBg");
	var mask_graphics_396 = new cjs.Graphics().p("ArZAtIRtqOIFGI1IxtKPg");
	var mask_graphics_397 = new cjs.Graphics().p("ArlA0ISFqcIFGI1IyFKcg");
	var mask_graphics_398 = new cjs.Graphics().p("ArxA6ISdqpIFGI1IydKqg");
	var mask_graphics_399 = new cjs.Graphics().p("Ar9BBIS1q3IFGI2Iy1K3g");
	var mask_graphics_400 = new cjs.Graphics().p("AsJBIITNrFIFGI2IzNLFg");
	var mask_graphics_401 = new cjs.Graphics().p("AsVBPITkrTIFHI2IzlLTg");
	var mask_graphics_402 = new cjs.Graphics().p("AsgBWIT7rgIFGI1Iz7Lhg");
	var mask_graphics_403 = new cjs.Graphics().p("AssBdIUTruIFGI1I0TLug");
	var mask_graphics_404 = new cjs.Graphics().p("As4BjIUrr7IFGI1I0rL8g");
	var mask_graphics_405 = new cjs.Graphics().p("AtEBqIVDsJIFGI2I1DMJg");
	var mask_graphics_406 = new cjs.Graphics().p("AtQBxIVbsXIFGI2I1bMXg");
	var mask_graphics_407 = new cjs.Graphics().p("AtcB4IVyslIFGI2I1yMlg");
	var mask_graphics_408 = new cjs.Graphics().p("AtnB/IWJsyIFGI1I2JMzg");
	var mask_graphics_409 = new cjs.Graphics().p("AtzCGIWhtAIFGI1I2hNAg");
	var mask_graphics_410 = new cjs.Graphics().p("At/CMIW5tNIFGI1I25NOg");
	var mask_graphics_411 = new cjs.Graphics().p("AuLCTIXRtbIFGI1I3RNcg");
	var mask_graphics_412 = new cjs.Graphics().p("AuXCaIXptpIFGI2I3pNpg");
	var mask_graphics_413 = new cjs.Graphics().p("AujChIYAt3IFGI2I4AN3g");
	var mask_graphics_414 = new cjs.Graphics().p("AuvCoIYZuEIFGI1I4ZOFg");
	var mask_graphics_415 = new cjs.Graphics().p("Au6CvIYvuSIFGI1I4vOSg");
	var mask_graphics_416 = new cjs.Graphics().p("AvGC1IZHufIFGI2I5HOfg");
	var mask_graphics_417 = new cjs.Graphics().p("AvSC8IZfutIFGI1I5fOug");
	var mask_graphics_418 = new cjs.Graphics().p("AveDDIZ3u7IFGI2I53O7g");
	var mask_graphics_419 = new cjs.Graphics().p("AvqDKIaPvIIFFI1I6OPJg");
	var mask_graphics_420 = new cjs.Graphics().p("Av2DRIamvXIFHI2I6nPXg");
	var mask_graphics_421 = new cjs.Graphics().p("AwBDYIa9vkIFGI1I69Pkg");
	var mask_graphics_422 = new cjs.Graphics().p("AwNDeIbVvxIFGI2I7VPxg");
	var mask_graphics_423 = new cjs.Graphics().p("AwZDlIbtv/IFGI1I7tQAg");
	var mask_graphics_424 = new cjs.Graphics().p("ADHZbIcGwOIFGI1I8GQOg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(352).to({graphics:mask_graphics_352,x:147,y:219.1}).wait(1).to({graphics:mask_graphics_353,x:274.3,y:406.7}).wait(1).to({graphics:mask_graphics_354,x:275.5,y:406}).wait(1).to({graphics:mask_graphics_355,x:276.7,y:405.3}).wait(1).to({graphics:mask_graphics_356,x:277.9,y:404.6}).wait(1).to({graphics:mask_graphics_357,x:279.1,y:403.9}).wait(1).to({graphics:mask_graphics_358,x:280.3,y:403.3}).wait(1).to({graphics:mask_graphics_359,x:281.4,y:402.6}).wait(1).to({graphics:mask_graphics_360,x:282.6,y:401.9}).wait(1).to({graphics:mask_graphics_361,x:283.8,y:401.2}).wait(1).to({graphics:mask_graphics_362,x:285,y:400.5}).wait(1).to({graphics:mask_graphics_363,x:286.2,y:399.8}).wait(1).to({graphics:mask_graphics_364,x:287.4,y:399.2}).wait(1).to({graphics:mask_graphics_365,x:288.6,y:398.5}).wait(1).to({graphics:mask_graphics_366,x:289.7,y:397.8}).wait(1).to({graphics:mask_graphics_367,x:290.9,y:397.1}).wait(1).to({graphics:mask_graphics_368,x:292.1,y:396.4}).wait(1).to({graphics:mask_graphics_369,x:293.3,y:395.7}).wait(1).to({graphics:mask_graphics_370,x:294.5,y:395.1}).wait(1).to({graphics:mask_graphics_371,x:295.7,y:394.4}).wait(1).to({graphics:mask_graphics_372,x:296.8,y:393.7}).wait(1).to({graphics:mask_graphics_373,x:298,y:393}).wait(1).to({graphics:mask_graphics_374,x:299.2,y:392.3}).wait(1).to({graphics:mask_graphics_375,x:300.4,y:391.6}).wait(1).to({graphics:mask_graphics_376,x:301.6,y:391}).wait(1).to({graphics:mask_graphics_377,x:302.8,y:390.3}).wait(1).to({graphics:mask_graphics_378,x:303.9,y:389.6}).wait(1).to({graphics:mask_graphics_379,x:305.1,y:388.9}).wait(1).to({graphics:mask_graphics_380,x:306.3,y:388.2}).wait(1).to({graphics:mask_graphics_381,x:307.5,y:387.5}).wait(1).to({graphics:mask_graphics_382,x:308.7,y:386.9}).wait(1).to({graphics:mask_graphics_383,x:309.9,y:386.2}).wait(1).to({graphics:mask_graphics_384,x:311,y:385.5}).wait(1).to({graphics:mask_graphics_385,x:312.2,y:384.8}).wait(1).to({graphics:mask_graphics_386,x:313.4,y:384.1}).wait(1).to({graphics:mask_graphics_387,x:314.6,y:383.4}).wait(1).to({graphics:mask_graphics_388,x:315.8,y:382.8}).wait(1).to({graphics:mask_graphics_389,x:317,y:382.1}).wait(1).to({graphics:mask_graphics_390,x:318.1,y:381.4}).wait(1).to({graphics:mask_graphics_391,x:319.3,y:380.7}).wait(1).to({graphics:mask_graphics_392,x:320.5,y:380.1}).wait(1).to({graphics:mask_graphics_393,x:321.7,y:379.4}).wait(1).to({graphics:mask_graphics_394,x:322.9,y:378.7}).wait(1).to({graphics:mask_graphics_395,x:324.1,y:378}).wait(1).to({graphics:mask_graphics_396,x:325.2,y:377.3}).wait(1).to({graphics:mask_graphics_397,x:326.4,y:376.6}).wait(1).to({graphics:mask_graphics_398,x:327.6,y:376}).wait(1).to({graphics:mask_graphics_399,x:328.8,y:375.3}).wait(1).to({graphics:mask_graphics_400,x:330,y:374.6}).wait(1).to({graphics:mask_graphics_401,x:331.2,y:373.9}).wait(1).to({graphics:mask_graphics_402,x:332.3,y:373.2}).wait(1).to({graphics:mask_graphics_403,x:333.5,y:372.5}).wait(1).to({graphics:mask_graphics_404,x:334.7,y:371.9}).wait(1).to({graphics:mask_graphics_405,x:335.9,y:371.2}).wait(1).to({graphics:mask_graphics_406,x:337.1,y:370.5}).wait(1).to({graphics:mask_graphics_407,x:338.3,y:369.8}).wait(1).to({graphics:mask_graphics_408,x:339.4,y:369.1}).wait(1).to({graphics:mask_graphics_409,x:340.6,y:368.4}).wait(1).to({graphics:mask_graphics_410,x:341.8,y:367.8}).wait(1).to({graphics:mask_graphics_411,x:343,y:367.1}).wait(1).to({graphics:mask_graphics_412,x:344.2,y:366.4}).wait(1).to({graphics:mask_graphics_413,x:345.4,y:365.7}).wait(1).to({graphics:mask_graphics_414,x:346.6,y:365}).wait(1).to({graphics:mask_graphics_415,x:347.7,y:364.3}).wait(1).to({graphics:mask_graphics_416,x:348.9,y:363.7}).wait(1).to({graphics:mask_graphics_417,x:350.1,y:363}).wait(1).to({graphics:mask_graphics_418,x:351.3,y:362.3}).wait(1).to({graphics:mask_graphics_419,x:352.5,y:361.6}).wait(1).to({graphics:mask_graphics_420,x:353.7,y:360.9}).wait(1).to({graphics:mask_graphics_421,x:354.8,y:360.2}).wait(1).to({graphics:mask_graphics_422,x:356,y:359.6}).wait(1).to({graphics:mask_graphics_423,x:357.2,y:358.9}).wait(1).to({graphics:mask_graphics_424,x:232.3,y:219.2}).wait(81));

	// line
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(20,1,1).p("AKnpvQCkkIBkknQANgmAOglQo1haoPDYQo1DomBGwQmBGwiIIjQiIIlEiCyQCLBVDJhKQAFgBAFgCQEihvGhmyQLMroFZpFQkNIVlfLEQleLFIDg+QIDg+GXmCQGXmDBUhN");
	this.shape_1.setTransform(273,274.9);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(352).to({_off:false},0).wait(153));

	// Layer 7 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_289 = new cjs.Graphics().p("Aj2BfIDMlgIEiCoIjBFbg");
	var mask_1_graphics_290 = new cjs.Graphics().p("Aj+BrIDal5IEjCpIjPF0g");
	var mask_1_graphics_291 = new cjs.Graphics().p("AkFB3IDomRIEjCpIjdGMg");
	var mask_1_graphics_292 = new cjs.Graphics().p("AkMCDID2mpIEjCoIjqGlg");
	var mask_1_graphics_293 = new cjs.Graphics().p("AkTCOIEDnBIEkCpIj4G+g");
	var mask_1_graphics_294 = new cjs.Graphics().p("AkbCaIESnZIElCpIkHHWg");
	var mask_1_graphics_295 = new cjs.Graphics().p("AkiClIEgnxIElCqIkUHvg");
	var mask_1_graphics_296 = new cjs.Graphics().p("AkpCxIEsoJIEnCqIkiIHg");
	var mask_1_graphics_297 = new cjs.Graphics().p("AkxC9IE7ohIEoCqIkxIfg");
	var mask_1_graphics_298 = new cjs.Graphics().p("Ak4DJIFJo6IEoCrIk9I4g");
	var mask_1_graphics_299 = new cjs.Graphics().p("Ak/DUIFXpRIEoCrIlLJRg");
	var mask_1_graphics_300 = new cjs.Graphics().p("AlGDgIFkpqIEpCsIlYJpg");
	var mask_1_graphics_301 = new cjs.Graphics().p("AlNDsIFyqCIEpCsIlmKBg");
	var mask_1_graphics_302 = new cjs.Graphics().p("AlVD3IGAqaIErCsIl1Kbg");
	var mask_1_graphics_303 = new cjs.Graphics().p("AlcEDIGOqyIErCsImDKzg");
	var mask_1_graphics_304 = new cjs.Graphics().p("AljEOIGcrJIErCtImQLKg");
	var mask_1_graphics_305 = new cjs.Graphics().p("AlrEaIGrriIEsCtImfLkg");
	var mask_1_graphics_306 = new cjs.Graphics().p("AlyEmIG4r6IEtCtImtL8g");
	var mask_1_graphics_307 = new cjs.Graphics().p("Al5EyIHGsTIEtCuIm7MVg");
	var mask_1_graphics_308 = new cjs.Graphics().p("AmAE9IHUsqIEtCuInIMtg");
	var mask_1_graphics_309 = new cjs.Graphics().p("AmHFJIHhtCIEuCuInWNFg");
	var mask_1_graphics_310 = new cjs.Graphics().p("AmOFVIHvtbIEvCvInkNeg");
	var mask_1_graphics_311 = new cjs.Graphics().p("AmWFhIH+tzIEvCuInyN4g");
	var mask_1_graphics_312 = new cjs.Graphics().p("AmdFsIILuLIEwCwIoAOPg");
	var mask_1_graphics_313 = new cjs.Graphics().p("AmlF4IIaujIExCvIoPOog");
	var mask_1_graphics_314 = new cjs.Graphics().p("AmsGDIIou7IExCwIocPBg");
	var mask_1_graphics_315 = new cjs.Graphics().p("AmzGPII1vTIEyCxIoqPYg");
	var mask_1_graphics_316 = new cjs.Graphics().p("Am6GbIJDvrIEyCwIo4Pyg");
	var mask_1_graphics_317 = new cjs.Graphics().p("AnBGmIJRwDIEyCxIpFQKg");
	var mask_1_graphics_318 = new cjs.Graphics().p("AnJGyIJgwbIEzCxIpUQig");
	var mask_1_graphics_319 = new cjs.Graphics().p("AnQG+IJtw0IE0CyIpiQ7g");
	var mask_1_graphics_320 = new cjs.Graphics().p("AnXHKIJ7xMIE0CyIpwRTg");
	var mask_1_graphics_321 = new cjs.Graphics().p("AnfHWIKKxkIE1CyIp+Rrg");
	var mask_1_graphics_322 = new cjs.Graphics().p("AnmHhIKXx8IE2CzIqMSEg");
	var mask_1_graphics_323 = new cjs.Graphics().p("AntHtIKlyUIE2CzIqaScg");
	var mask_1_graphics_324 = new cjs.Graphics().p("An0H5IKzytIE2C0IqoS1g");
	var mask_1_graphics_325 = new cjs.Graphics().p("An7IEILAzEIE3CzIq1TOg");
	var mask_1_graphics_326 = new cjs.Graphics().p("AoDIQILPzcIE4C0IrETlg");
	var mask_1_graphics_327 = new cjs.Graphics().p("AoKIbILdz0IE4C0IrRT/g");
	var mask_1_graphics_328 = new cjs.Graphics().p("AoRInILq0MIE5C0IrfUYg");
	var mask_1_graphics_329 = new cjs.Graphics().p("AoZIzIL50lIE6C1IruUwg");
	var mask_1_graphics_330 = new cjs.Graphics().p("AogI/IMH09IE5C1Ir6VIg");
	var mask_1_graphics_331 = new cjs.Graphics().p("AonJKIMU1VIE7C2IsJVhg");
	var mask_1_graphics_332 = new cjs.Graphics().p("AouJWIMi1tIE7C2IsXV5g");
	var mask_1_graphics_333 = new cjs.Graphics().p("Ao1JiIMw2FIE7C2IslWRg");
	var mask_1_graphics_334 = new cjs.Graphics().p("Ao9JtIM/2dIE8C2IszWrg");
	var mask_1_graphics_335 = new cjs.Graphics().p("ApEJ5INM21IE9C3ItBXCg");
	var mask_1_graphics_336 = new cjs.Graphics().p("ApLKFINa3OIE9C3ItPXcg");
	var mask_1_graphics_337 = new cjs.Graphics().p("ApSKRINn3mIE+C3ItdX0g");
	var mask_1_graphics_338 = new cjs.Graphics().p("ApZKcIN139IE+C3ItqYMg");
	var mask_1_graphics_339 = new cjs.Graphics().p("AphKoIOE4WIE/C4It5Ylg");
	var mask_1_graphics_340 = new cjs.Graphics().p("ApoK0IOS4uIE/C4IuGY+g");
	var mask_1_graphics_341 = new cjs.Graphics().p("ApvK/IOf5GIFAC5IuUZWg");
	var mask_1_graphics_342 = new cjs.Graphics().p("Ap3LLIOu5eIFBC5IujZug");
	var mask_1_graphics_343 = new cjs.Graphics().p("Ap+LXIO853IFBC6IuwaHg");
	var mask_1_graphics_344 = new cjs.Graphics().p("AqFLjIPJ6PIFCC6Iu+afg");
	var mask_1_graphics_345 = new cjs.Graphics().p("AqMLuIPX6mIFCC5IvMa5g");
	var mask_1_graphics_346 = new cjs.Graphics().p("AqTL6IPl6/IFCC7IvZbQg");
	var mask_1_graphics_347 = new cjs.Graphics().p("AqbMGIPz7XIFEC6Ivobpg");
	var mask_1_graphics_348 = new cjs.Graphics().p("AqiMRIQB7vIFEC7Iv2cCg");
	var mask_1_graphics_349 = new cjs.Graphics().p("Aq9MOIQJ7+IFyDWIwBcLg");
	var mask_1_graphics_350 = new cjs.Graphics().p("ArYMKIQS8MIGfDvIwMcWg");
	var mask_1_graphics_351 = new cjs.Graphics().p("ArzMHIQa8bIHMEKIwWcfg");
	var mask_1_graphics_352 = new cjs.Graphics().p("AE9b5IQj8qIH6EjIwjcrg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(289).to({graphics:mask_1_graphics_289,x:330.2,y:228.5}).wait(1).to({graphics:mask_1_graphics_290,x:329.5,y:229.7}).wait(1).to({graphics:mask_1_graphics_291,x:328.9,y:231}).wait(1).to({graphics:mask_1_graphics_292,x:328.2,y:232.2}).wait(1).to({graphics:mask_1_graphics_293,x:327.5,y:233.5}).wait(1).to({graphics:mask_1_graphics_294,x:326.9,y:234.7}).wait(1).to({graphics:mask_1_graphics_295,x:326.2,y:235.9}).wait(1).to({graphics:mask_1_graphics_296,x:325.5,y:237.2}).wait(1).to({graphics:mask_1_graphics_297,x:324.9,y:238.4}).wait(1).to({graphics:mask_1_graphics_298,x:324.2,y:239.7}).wait(1).to({graphics:mask_1_graphics_299,x:323.5,y:240.9}).wait(1).to({graphics:mask_1_graphics_300,x:322.8,y:242.1}).wait(1).to({graphics:mask_1_graphics_301,x:322.2,y:243.4}).wait(1).to({graphics:mask_1_graphics_302,x:321.5,y:244.6}).wait(1).to({graphics:mask_1_graphics_303,x:320.9,y:245.9}).wait(1).to({graphics:mask_1_graphics_304,x:320.2,y:247.1}).wait(1).to({graphics:mask_1_graphics_305,x:319.5,y:248.4}).wait(1).to({graphics:mask_1_graphics_306,x:318.8,y:249.6}).wait(1).to({graphics:mask_1_graphics_307,x:318.2,y:250.8}).wait(1).to({graphics:mask_1_graphics_308,x:317.5,y:252.1}).wait(1).to({graphics:mask_1_graphics_309,x:316.8,y:253.3}).wait(1).to({graphics:mask_1_graphics_310,x:316.2,y:254.6}).wait(1).to({graphics:mask_1_graphics_311,x:315.5,y:255.8}).wait(1).to({graphics:mask_1_graphics_312,x:314.8,y:257}).wait(1).to({graphics:mask_1_graphics_313,x:314.2,y:258.3}).wait(1).to({graphics:mask_1_graphics_314,x:313.5,y:259.5}).wait(1).to({graphics:mask_1_graphics_315,x:312.8,y:260.8}).wait(1).to({graphics:mask_1_graphics_316,x:312.2,y:262}).wait(1).to({graphics:mask_1_graphics_317,x:311.5,y:263.3}).wait(1).to({graphics:mask_1_graphics_318,x:310.8,y:264.5}).wait(1).to({graphics:mask_1_graphics_319,x:310.2,y:265.7}).wait(1).to({graphics:mask_1_graphics_320,x:309.5,y:267}).wait(1).to({graphics:mask_1_graphics_321,x:308.8,y:268.2}).wait(1).to({graphics:mask_1_graphics_322,x:308.1,y:269.5}).wait(1).to({graphics:mask_1_graphics_323,x:307.5,y:270.7}).wait(1).to({graphics:mask_1_graphics_324,x:306.8,y:271.9}).wait(1).to({graphics:mask_1_graphics_325,x:306.1,y:273.2}).wait(1).to({graphics:mask_1_graphics_326,x:305.5,y:274.4}).wait(1).to({graphics:mask_1_graphics_327,x:304.8,y:275.7}).wait(1).to({graphics:mask_1_graphics_328,x:304.1,y:276.9}).wait(1).to({graphics:mask_1_graphics_329,x:303.5,y:278.1}).wait(1).to({graphics:mask_1_graphics_330,x:302.8,y:279.4}).wait(1).to({graphics:mask_1_graphics_331,x:302.1,y:280.6}).wait(1).to({graphics:mask_1_graphics_332,x:301.5,y:281.9}).wait(1).to({graphics:mask_1_graphics_333,x:300.8,y:283.1}).wait(1).to({graphics:mask_1_graphics_334,x:300.1,y:284.4}).wait(1).to({graphics:mask_1_graphics_335,x:299.4,y:285.6}).wait(1).to({graphics:mask_1_graphics_336,x:298.8,y:286.8}).wait(1).to({graphics:mask_1_graphics_337,x:298.1,y:288.1}).wait(1).to({graphics:mask_1_graphics_338,x:297.5,y:289.3}).wait(1).to({graphics:mask_1_graphics_339,x:296.8,y:290.6}).wait(1).to({graphics:mask_1_graphics_340,x:296.1,y:291.8}).wait(1).to({graphics:mask_1_graphics_341,x:295.4,y:293}).wait(1).to({graphics:mask_1_graphics_342,x:294.8,y:294.3}).wait(1).to({graphics:mask_1_graphics_343,x:294.1,y:295.5}).wait(1).to({graphics:mask_1_graphics_344,x:293.4,y:296.8}).wait(1).to({graphics:mask_1_graphics_345,x:292.8,y:298}).wait(1).to({graphics:mask_1_graphics_346,x:292.1,y:299.3}).wait(1).to({graphics:mask_1_graphics_347,x:291.4,y:300.5}).wait(1).to({graphics:mask_1_graphics_348,x:290.7,y:301.7}).wait(1).to({graphics:mask_1_graphics_349,x:292.6,y:303.6}).wait(1).to({graphics:mask_1_graphics_350,x:294.5,y:305.4}).wait(1).to({graphics:mask_1_graphics_351,x:296.4,y:307.2}).wait(1).to({graphics:mask_1_graphics_352,x:188.2,y:207.7}).wait(153));

	// line
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(20,1,1).p("AKnpvQCkkIBkknQANgmAOglQo1haoPDYQo1DomBGwQmBGwiIIjQiIIlEiCyQCLBVDJhKQAFgBAFgCQEihvGhmyQLMroFZpFQkNIVlfLEQleLFIDg+QIDg+GXmCQGXmDBUhN");
	this.shape_2.setTransform(273,274.9);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(289).to({_off:false},0).wait(216));

	// Layer 10
	this.instance_2 = new lib.ar3("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(232.4,266.4,1,1,9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(496));

	// Layer 6 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_146 = new cjs.Graphics().p("AB/WxIEEiJIERIIIkDCIg");
	var mask_2_graphics_147 = new cjs.Graphics().p("AkSjOIEEiJIEhImIkECJg");
	var mask_2_graphics_148 = new cjs.Graphics().p("AkajfIEDiIIEyJGIkDCJg");
	var mask_2_graphics_149 = new cjs.Graphics().p("AkjjvIEEiIIFDJnIkECIg");
	var mask_2_graphics_150 = new cjs.Graphics().p("Akrj/IEDiIIFUKGIkDCJg");
	var mask_2_graphics_151 = new cjs.Graphics().p("Ak0kPIEEiIIFlKnIkECIg");
	var mask_2_graphics_152 = new cjs.Graphics().p("Ak8kfIEEiJIF1LIIkDCJg");
	var mask_2_graphics_153 = new cjs.Graphics().p("AlEkvIEDiJIGHLoIkECJg");
	var mask_2_graphics_154 = new cjs.Graphics().p("AlNk/IEEiJIGXMIIkECJg");
	var mask_2_graphics_155 = new cjs.Graphics().p("AlVlPIEDiJIGpMoIkECJg");
	var mask_2_graphics_156 = new cjs.Graphics().p("AlelfIEEiJIG5NIIkECJg");
	var mask_2_graphics_157 = new cjs.Graphics().p("AAiUAIEEiJIHLNpIkDCJg");
	var mask_2_graphics_158 = new cjs.Graphics().p("Al3lyIE6iCIG1NnIk7CCg");
	var mask_2_graphics_159 = new cjs.Graphics().p("AmHl0IFxh8IGeNmIlwB7g");
	var mask_2_graphics_160 = new cjs.Graphics().p("AmYl3IGnh1IGKNkImnB1g");
	var mask_2_graphics_161 = new cjs.Graphics().p("Amol5IHdhvIF0NiIndBvg");
	var mask_2_graphics_162 = new cjs.Graphics().p("Am5l8IIUhoIFeNhIoUBog");
	var mask_2_graphics_163 = new cjs.Graphics().p("AnJl+IJLhiIFINfIpKBig");
	var mask_2_graphics_164 = new cjs.Graphics().p("AnZmAIKBhcIEyNdIqBBbg");
	var mask_2_graphics_165 = new cjs.Graphics().p("AnqmDIK4hVIEdNcIq4BVg");
	var mask_2_graphics_166 = new cjs.Graphics().p("An6mGILvhNIEGNaIruBOg");
	var mask_2_graphics_167 = new cjs.Graphics().p("AoLmIIMmhHIDxNYIsmBHg");
	var mask_2_graphics_168 = new cjs.Graphics().p("AobmKINchBIDbNXItcBBg");
	var mask_2_graphics_169 = new cjs.Graphics().p("AormNIOSg7IDFNWIuTA6g");
	var mask_2_graphics_170 = new cjs.Graphics().p("Ao8mPIPKg0ICvNTIvKA0g");
	var mask_2_graphics_171 = new cjs.Graphics().p("ApMmSIQAguICZNTIwAAug");
	var mask_2_graphics_172 = new cjs.Graphics().p("ApdmUIQ3gnICENQIw3Ang");
	var mask_2_graphics_173 = new cjs.Graphics().p("AptmXIRtggIBuNPIxuAgg");
	var mask_2_graphics_174 = new cjs.Graphics().p("Ap9mZISkgaIBXNNIykAag");
	var mask_2_graphics_175 = new cjs.Graphics().p("AqOmcITbgTIBCNMIzbATg");
	var mask_2_graphics_176 = new cjs.Graphics().p("AqemeIURgNIAsNKI0SANg");
	var mask_2_graphics_177 = new cjs.Graphics().p("AqumhIVIgGIAWNJI1JAGg");
	var mask_2_graphics_178 = new cjs.Graphics().p("EgF0AhhIAAtIIV/AAIAANIg");
	var mask_2_graphics_179 = new cjs.Graphics().p("ArKGmIAAtLIWVAAIAANLg");
	var mask_2_graphics_180 = new cjs.Graphics().p("ArVGnIAAtNIWrAAIAANNg");
	var mask_2_graphics_181 = new cjs.Graphics().p("ArgGpIAAtRIXBAAIAANRg");
	var mask_2_graphics_182 = new cjs.Graphics().p("ArrGqIAAtTIXYAAIAANTg");
	var mask_2_graphics_183 = new cjs.Graphics().p("Ar2GsIAAtXIXtAAIAANXg");
	var mask_2_graphics_184 = new cjs.Graphics().p("AsCGtIAAtZIYEAAIAANZg");
	var mask_2_graphics_185 = new cjs.Graphics().p("AsNGvIAAtdIYbAAIAANdg");
	var mask_2_graphics_186 = new cjs.Graphics().p("AsYGxIAAtgIYxAAIAANgg");
	var mask_2_graphics_187 = new cjs.Graphics().p("AsjGyIAAtjIZHAAIAANjg");
	var mask_2_graphics_188 = new cjs.Graphics().p("AsuG0IAAtmIZdAAIAANmg");
	var mask_2_graphics_189 = new cjs.Graphics().p("As5G1IAAtpIZzAAIAANpg");
	var mask_2_graphics_190 = new cjs.Graphics().p("AtEG3IAAttIaJAAIAANtg");
	var mask_2_graphics_191 = new cjs.Graphics().p("AtPG4IAAtvIafAAIAANvg");
	var mask_2_graphics_192 = new cjs.Graphics().p("AtbG6IAAtzIa2AAIAANzg");
	var mask_2_graphics_193 = new cjs.Graphics().p("AtmG8IAAt3IbNAAIAAN3g");
	var mask_2_graphics_194 = new cjs.Graphics().p("EgIlAhhIAAt6IbjAAIAAN6g");
	var mask_2_graphics_195 = new cjs.Graphics().p("At9HIIAAuPIb7AAIAAOPg");
	var mask_2_graphics_196 = new cjs.Graphics().p("AuOHZIAAuyIcdAAIAAOyg");
	var mask_2_graphics_197 = new cjs.Graphics().p("AuXHjIAAvFIcvAAIAAPFg");
	var mask_2_graphics_198 = new cjs.Graphics().p("AuhHtIAAvZIdDAAIAAPZg");
	var mask_2_graphics_199 = new cjs.Graphics().p("AuqH3IAAvtIdVAAIAAPtg");
	var mask_2_graphics_200 = new cjs.Graphics().p("AuzIBIAAwBIdnAAIAAQBg");
	var mask_2_graphics_201 = new cjs.Graphics().p("Au8ILIAAwVId5AAIAAQVg");
	var mask_2_graphics_202 = new cjs.Graphics().p("AvFIVIAAwpIeLAAIAAQpg");
	var mask_2_graphics_203 = new cjs.Graphics().p("AvOIfIAAw9IedAAIAAQ9g");
	var mask_2_graphics_204 = new cjs.Graphics().p("AvXIpIAAxRIevAAIAARRg");
	var mask_2_graphics_205 = new cjs.Graphics().p("AvgIzIAAxkIfBAAIAARkg");
	var mask_2_graphics_206 = new cjs.Graphics().p("AvpI8IAAx3IfTAAIAAR3g");
	var mask_2_graphics_207 = new cjs.Graphics().p("AvyJGIAAyLIfmAAIAASLg");
	var mask_2_graphics_208 = new cjs.Graphics().p("Av7JQIAAyfIf4AAIAASfg");
	var mask_2_graphics_209 = new cjs.Graphics().p("AwEJdIAAy5MAgKAAAIAAS5g");
	var mask_2_graphics_210 = new cjs.Graphics().p("AwNJrIAAzVMAgbAAAIAATVg");
	var mask_2_graphics_211 = new cjs.Graphics().p("AwWJ4IAAzvMAgtAAAIAATvg");
	var mask_2_graphics_212 = new cjs.Graphics().p("AwfKFIAA0JMAg/AAAIAAUJg");
	var mask_2_graphics_213 = new cjs.Graphics().p("AwoKTIAA0kMAhRAAAIAAUkg");
	var mask_2_graphics_214 = new cjs.Graphics().p("AwxKgIAA0/MAhjAAAIAAU/g");
	var mask_2_graphics_215 = new cjs.Graphics().p("Aw6KtIAA1aMAh1AAAIAAVag");
	var mask_2_graphics_216 = new cjs.Graphics().p("AxDK7IAA11MAiHAAAIAAV1g");
	var mask_2_graphics_217 = new cjs.Graphics().p("AxMLIIAA2PMAiZAAAIAAWPg");
	var mask_2_graphics_218 = new cjs.Graphics().p("AxVLVIAA2pMAirAAAIAAWpg");
	var mask_2_graphics_219 = new cjs.Graphics().p("AxeLjIAA3FMAi9AAAIAAXFg");
	var mask_2_graphics_220 = new cjs.Graphics().p("AxnLwIAA3fMAjPAAAIAAXfg");
	var mask_2_graphics_221 = new cjs.Graphics().p("AxvL9IAA35MAjfAAAIAAX5g");
	var mask_2_graphics_222 = new cjs.Graphics().p("Ax4MKIAA4UMAjxAAAIAAYUg");
	var mask_2_graphics_223 = new cjs.Graphics().p("AyBMYIAA4vMAkDAAAIAAYvg");
	var mask_2_graphics_224 = new cjs.Graphics().p("AyKMlIAA5JMAkVAAAIAAZJg");
	var mask_2_graphics_225 = new cjs.Graphics().p("AyTMyIAA5jMAknAAAIAAZjg");
	var mask_2_graphics_226 = new cjs.Graphics().p("AycNAIAA5/MAk5AAAIAAZ/g");
	var mask_2_graphics_227 = new cjs.Graphics().p("AylNNIAA6ZMAlLAAAIAAaZg");
	var mask_2_graphics_228 = new cjs.Graphics().p("AyuNbIAA61MAldAAAIAAa1g");
	var mask_2_graphics_229 = new cjs.Graphics().p("Ay2NoIAA7PMAltAAAIAAbPg");
	var mask_2_graphics_230 = new cjs.Graphics().p("Ay/N1IAA7pMAl/AAAIAAbpg");
	var mask_2_graphics_231 = new cjs.Graphics().p("AzIOCIAA8EMAmRAAAIAAcEg");
	var mask_2_graphics_232 = new cjs.Graphics().p("AzROQIAA8fMAmjAAAIAAcfg");
	var mask_2_graphics_233 = new cjs.Graphics().p("AzaOdIAA85MAm1AAAIAAc5g");
	var mask_2_graphics_234 = new cjs.Graphics().p("AzjOqIAA9UMAnHAAAIAAdUg");
	var mask_2_graphics_235 = new cjs.Graphics().p("AzsO4IAA9vMAnZAAAIAAdvg");
	var mask_2_graphics_236 = new cjs.Graphics().p("Az1PFIAA+JMAnrAAAIAAeJg");
	var mask_2_graphics_237 = new cjs.Graphics().p("Az+PSIAA+jMAn9AAAIAAejg");
	var mask_2_graphics_238 = new cjs.Graphics().p("A0HPgIAA+/MAoPAAAIAAe/g");
	var mask_2_graphics_239 = new cjs.Graphics().p("A0QPtIAA/ZMAohAAAIAAfZg");
	var mask_2_graphics_240 = new cjs.Graphics().p("A0ZP6IAA/zMAozAAAIAAfzg");
	var mask_2_graphics_241 = new cjs.Graphics().p("A0iQIMAAAggPMApFAAAMAAAAgPg");
	var mask_2_graphics_242 = new cjs.Graphics().p("A0rQVMAAAggpMApXAAAMAAAAgpg");
	var mask_2_graphics_243 = new cjs.Graphics().p("A0zQjMAAAghFMApnAAAMAAAAhFg");
	var mask_2_graphics_244 = new cjs.Graphics().p("A08QwMAAAghfMAp5AAAMAAAAhfg");
	var mask_2_graphics_245 = new cjs.Graphics().p("A1FQ9MAAAgh5MAqLAAAMAAAAh5g");
	var mask_2_graphics_246 = new cjs.Graphics().p("A1ORLMAAAgiVMAqdAAAMAAAAiVg");
	var mask_2_graphics_247 = new cjs.Graphics().p("A1XRYMAAAgivMAqvAAAMAAAAivg");
	var mask_2_graphics_248 = new cjs.Graphics().p("A1gRlMAAAgjJMArBAAAMAAAAjJg");
	var mask_2_graphics_249 = new cjs.Graphics().p("A1pRyMAAAgjjMArTAAAMAAAAjjg");
	var mask_2_graphics_250 = new cjs.Graphics().p("A1ySAMAAAgj/MArlAAAMAAAAj/g");
	var mask_2_graphics_251 = new cjs.Graphics().p("A17SNMAAAgkZMAr3AAAMAAAAkZg");
	var mask_2_graphics_252 = new cjs.Graphics().p("A2ESaMAAAgkzMAsJAAAMAAAAkzg");
	var mask_2_graphics_253 = new cjs.Graphics().p("A2NSoMAAAglOMAsbAAAMAAAAlOg");
	var mask_2_graphics_254 = new cjs.Graphics().p("A2WS1MAAAglpMAssAAAMAAAAlpg");
	var mask_2_graphics_255 = new cjs.Graphics().p("A2eTCMAAAgmEMAs9AAAMAAAAmEg");
	var mask_2_graphics_256 = new cjs.Graphics().p("A2nTQMAAAgmfMAtPAAAMAAAAmfg");
	var mask_2_graphics_257 = new cjs.Graphics().p("A2wTdMAAAgm5MAthAAAMAAAAm5g");
	var mask_2_graphics_258 = new cjs.Graphics().p("A25TqMAAAgnTMAtzAAAMAAAAnTg");
	var mask_2_graphics_259 = new cjs.Graphics().p("A3CT4MAAAgnvMAuFAAAMAAAAnvg");
	var mask_2_graphics_260 = new cjs.Graphics().p("A3LUFMAAAgoJMAuXAAAMAAAAoJg");
	var mask_2_graphics_261 = new cjs.Graphics().p("A3UUSMAAAgojMAupAAAMAAAAojg");
	var mask_2_graphics_262 = new cjs.Graphics().p("A3dUfMAAAgo9MAu7AAAMAAAAo9g");
	var mask_2_graphics_263 = new cjs.Graphics().p("A3mUtMAAAgpZMAvNAAAMAAAApZg");
	var mask_2_graphics_264 = new cjs.Graphics().p("A3vU6MAAAgpzMAvfAAAMAAAApzg");
	var mask_2_graphics_265 = new cjs.Graphics().p("A34VHMAAAgqNMAvxAAAMAAAAqNg");
	var mask_2_graphics_266 = new cjs.Graphics().p("A4BVVMAAAgqpMAwDAAAMAAAAqpg");
	var mask_2_graphics_267 = new cjs.Graphics().p("A4KViMAAAgrDMAwVAAAMAAAArDg");
	var mask_2_graphics_268 = new cjs.Graphics().p("A4SVwMAAAgrfMAwlAAAMAAAArfg");
	var mask_2_graphics_269 = new cjs.Graphics().p("A4bV9MAAAgr5MAw3AAAMAAAAr5g");
	var mask_2_graphics_270 = new cjs.Graphics().p("A4kWKMAAAgsTMAxJAAAMAAAAsTg");
	var mask_2_graphics_271 = new cjs.Graphics().p("A4tWYMAAAgsuMAxbAAAMAAAAsug");
	var mask_2_graphics_272 = new cjs.Graphics().p("A42WlMAAAgtJMAxtAAAMAAAAtJg");
	var mask_2_graphics_273 = new cjs.Graphics().p("A4/WyMAAAgtjMAx/AAAMAAAAtjg");
	var mask_2_graphics_274 = new cjs.Graphics().p("EgT7AhjMAAAgt+MAyRAAAMAAAAt+g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(146).to({graphics:mask_2_graphics_146,x:66,y:197.6}).wait(1).to({graphics:mask_2_graphics_147,x:106.3,y:364}).wait(1).to({graphics:mask_2_graphics_148,x:107.1,y:365.7}).wait(1).to({graphics:mask_2_graphics_149,x:108,y:367.3}).wait(1).to({graphics:mask_2_graphics_150,x:108.8,y:368.9}).wait(1).to({graphics:mask_2_graphics_151,x:109.7,y:370.5}).wait(1).to({graphics:mask_2_graphics_152,x:110.5,y:372.1}).wait(1).to({graphics:mask_2_graphics_153,x:111.4,y:373.7}).wait(1).to({graphics:mask_2_graphics_154,x:112.2,y:375.3}).wait(1).to({graphics:mask_2_graphics_155,x:113.1,y:376.9}).wait(1).to({graphics:mask_2_graphics_156,x:113.9,y:378.5}).wait(1).to({graphics:mask_2_graphics_157,x:75.3,y:215.3}).wait(1).to({graphics:mask_2_graphics_158,x:115.8,y:380.4}).wait(1).to({graphics:mask_2_graphics_159,x:116.8,y:380.8}).wait(1).to({graphics:mask_2_graphics_160,x:117.9,y:381.1}).wait(1).to({graphics:mask_2_graphics_161,x:118.9,y:381.4}).wait(1).to({graphics:mask_2_graphics_162,x:120,y:381.7}).wait(1).to({graphics:mask_2_graphics_163,x:121,y:382.1}).wait(1).to({graphics:mask_2_graphics_164,x:122.1,y:382.4}).wait(1).to({graphics:mask_2_graphics_165,x:123.1,y:382.7}).wait(1).to({graphics:mask_2_graphics_166,x:124.1,y:383.1}).wait(1).to({graphics:mask_2_graphics_167,x:125.2,y:383.4}).wait(1).to({graphics:mask_2_graphics_168,x:126.2,y:383.7}).wait(1).to({graphics:mask_2_graphics_169,x:127.3,y:384.1}).wait(1).to({graphics:mask_2_graphics_170,x:128.3,y:384.4}).wait(1).to({graphics:mask_2_graphics_171,x:129.4,y:384.7}).wait(1).to({graphics:mask_2_graphics_172,x:130.4,y:385}).wait(1).to({graphics:mask_2_graphics_173,x:131.5,y:385.4}).wait(1).to({graphics:mask_2_graphics_174,x:132.5,y:385.7}).wait(1).to({graphics:mask_2_graphics_175,x:133.5,y:386}).wait(1).to({graphics:mask_2_graphics_176,x:134.6,y:386.4}).wait(1).to({graphics:mask_2_graphics_177,x:135.6,y:386.7}).wait(1).to({graphics:mask_2_graphics_178,x:103.5,y:214.5}).wait(1).to({graphics:mask_2_graphics_179,x:137.8,y:386.9}).wait(1).to({graphics:mask_2_graphics_180,x:138.9,y:386.7}).wait(1).to({graphics:mask_2_graphics_181,x:140,y:386.5}).wait(1).to({graphics:mask_2_graphics_182,x:141.2,y:386.4}).wait(1).to({graphics:mask_2_graphics_183,x:142.3,y:386.2}).wait(1).to({graphics:mask_2_graphics_184,x:143.4,y:386.1}).wait(1).to({graphics:mask_2_graphics_185,x:144.5,y:385.9}).wait(1).to({graphics:mask_2_graphics_186,x:145.7,y:385.8}).wait(1).to({graphics:mask_2_graphics_187,x:146.8,y:385.6}).wait(1).to({graphics:mask_2_graphics_188,x:147.9,y:385.5}).wait(1).to({graphics:mask_2_graphics_189,x:149,y:385.3}).wait(1).to({graphics:mask_2_graphics_190,x:150.1,y:385.1}).wait(1).to({graphics:mask_2_graphics_191,x:151.3,y:385}).wait(1).to({graphics:mask_2_graphics_192,x:152.4,y:384.8}).wait(1).to({graphics:mask_2_graphics_193,x:153.5,y:384.7}).wait(1).to({graphics:mask_2_graphics_194,x:121.4,y:214.5}).wait(1).to({graphics:mask_2_graphics_195,x:155.7,y:383.5}).wait(1).to({graphics:mask_2_graphics_196,x:157.6,y:381.8}).wait(1).to({graphics:mask_2_graphics_197,x:158.5,y:380.8}).wait(1).to({graphics:mask_2_graphics_198,x:159.4,y:379.8}).wait(1).to({graphics:mask_2_graphics_199,x:160.3,y:378.9}).wait(1).to({graphics:mask_2_graphics_200,x:161.2,y:377.9}).wait(1).to({graphics:mask_2_graphics_201,x:162.1,y:376.9}).wait(1).to({graphics:mask_2_graphics_202,x:163,y:375.9}).wait(1).to({graphics:mask_2_graphics_203,x:163.9,y:374.9}).wait(1).to({graphics:mask_2_graphics_204,x:164.8,y:374}).wait(1).to({graphics:mask_2_graphics_205,x:165.7,y:373}).wait(1).to({graphics:mask_2_graphics_206,x:166.6,y:372}).wait(1).to({graphics:mask_2_graphics_207,x:167.6,y:371}).wait(1).to({graphics:mask_2_graphics_208,x:168.5,y:370}).wait(1).to({graphics:mask_2_graphics_209,x:169.4,y:368.7}).wait(1).to({graphics:mask_2_graphics_210,x:170.2,y:367.4}).wait(1).to({graphics:mask_2_graphics_211,x:171.1,y:366}).wait(1).to({graphics:mask_2_graphics_212,x:172,y:364.7}).wait(1).to({graphics:mask_2_graphics_213,x:172.9,y:363.4}).wait(1).to({graphics:mask_2_graphics_214,x:173.8,y:362}).wait(1).to({graphics:mask_2_graphics_215,x:174.7,y:360.7}).wait(1).to({graphics:mask_2_graphics_216,x:175.6,y:359.4}).wait(1).to({graphics:mask_2_graphics_217,x:176.5,y:358.1}).wait(1).to({graphics:mask_2_graphics_218,x:177.4,y:356.7}).wait(1).to({graphics:mask_2_graphics_219,x:178.3,y:355.4}).wait(1).to({graphics:mask_2_graphics_220,x:179.2,y:354.1}).wait(1).to({graphics:mask_2_graphics_221,x:180.1,y:352.7}).wait(1).to({graphics:mask_2_graphics_222,x:181,y:351.4}).wait(1).to({graphics:mask_2_graphics_223,x:181.9,y:350.1}).wait(1).to({graphics:mask_2_graphics_224,x:182.8,y:348.7}).wait(1).to({graphics:mask_2_graphics_225,x:183.7,y:347.4}).wait(1).to({graphics:mask_2_graphics_226,x:184.6,y:346.1}).wait(1).to({graphics:mask_2_graphics_227,x:185.5,y:344.8}).wait(1).to({graphics:mask_2_graphics_228,x:186.4,y:343.4}).wait(1).to({graphics:mask_2_graphics_229,x:187.3,y:342.1}).wait(1).to({graphics:mask_2_graphics_230,x:188.2,y:340.8}).wait(1).to({graphics:mask_2_graphics_231,x:189.1,y:339.5}).wait(1).to({graphics:mask_2_graphics_232,x:189.9,y:338.1}).wait(1).to({graphics:mask_2_graphics_233,x:190.8,y:336.8}).wait(1).to({graphics:mask_2_graphics_234,x:191.7,y:335.5}).wait(1).to({graphics:mask_2_graphics_235,x:192.6,y:334.1}).wait(1).to({graphics:mask_2_graphics_236,x:193.5,y:332.8}).wait(1).to({graphics:mask_2_graphics_237,x:194.4,y:331.5}).wait(1).to({graphics:mask_2_graphics_238,x:195.3,y:330.1}).wait(1).to({graphics:mask_2_graphics_239,x:196.2,y:328.8}).wait(1).to({graphics:mask_2_graphics_240,x:197.1,y:327.5}).wait(1).to({graphics:mask_2_graphics_241,x:198,y:326.2}).wait(1).to({graphics:mask_2_graphics_242,x:198.9,y:324.8}).wait(1).to({graphics:mask_2_graphics_243,x:199.8,y:323.5}).wait(1).to({graphics:mask_2_graphics_244,x:200.7,y:322.2}).wait(1).to({graphics:mask_2_graphics_245,x:201.6,y:320.9}).wait(1).to({graphics:mask_2_graphics_246,x:202.5,y:319.5}).wait(1).to({graphics:mask_2_graphics_247,x:203.4,y:318.2}).wait(1).to({graphics:mask_2_graphics_248,x:204.3,y:316.9}).wait(1).to({graphics:mask_2_graphics_249,x:205.2,y:315.5}).wait(1).to({graphics:mask_2_graphics_250,x:206.1,y:314.2}).wait(1).to({graphics:mask_2_graphics_251,x:206.9,y:312.9}).wait(1).to({graphics:mask_2_graphics_252,x:207.8,y:311.5}).wait(1).to({graphics:mask_2_graphics_253,x:208.7,y:310.2}).wait(1).to({graphics:mask_2_graphics_254,x:209.6,y:308.9}).wait(1).to({graphics:mask_2_graphics_255,x:210.5,y:307.6}).wait(1).to({graphics:mask_2_graphics_256,x:211.4,y:306.2}).wait(1).to({graphics:mask_2_graphics_257,x:212.3,y:304.9}).wait(1).to({graphics:mask_2_graphics_258,x:213.2,y:303.6}).wait(1).to({graphics:mask_2_graphics_259,x:214.1,y:302.2}).wait(1).to({graphics:mask_2_graphics_260,x:215,y:300.9}).wait(1).to({graphics:mask_2_graphics_261,x:215.9,y:299.6}).wait(1).to({graphics:mask_2_graphics_262,x:216.8,y:298.3}).wait(1).to({graphics:mask_2_graphics_263,x:217.7,y:296.9}).wait(1).to({graphics:mask_2_graphics_264,x:218.6,y:295.6}).wait(1).to({graphics:mask_2_graphics_265,x:219.5,y:294.3}).wait(1).to({graphics:mask_2_graphics_266,x:220.4,y:292.9}).wait(1).to({graphics:mask_2_graphics_267,x:221.3,y:291.6}).wait(1).to({graphics:mask_2_graphics_268,x:222.2,y:290.3}).wait(1).to({graphics:mask_2_graphics_269,x:223.1,y:289}).wait(1).to({graphics:mask_2_graphics_270,x:224,y:287.6}).wait(1).to({graphics:mask_2_graphics_271,x:224.9,y:286.3}).wait(1).to({graphics:mask_2_graphics_272,x:225.8,y:285}).wait(1).to({graphics:mask_2_graphics_273,x:226.6,y:283.6}).wait(1).to({graphics:mask_2_graphics_274,x:194.2,y:214.7}).wait(231));

	// line
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(20,1,1).p("AUYzpQo1haoQDYQo1DomAGwQmBGwiIIjQiIIlEiCyQCLBVDJhKQAFgBAFgCQEihvGhmyQLLroFapFQAKgRALgR");
	this.shape_3.setTransform(239.6,274.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(20,1,1).p("AP1pvQCkkIBkknQANgmAOglQo1haoQDYQo1DomAGwQmBGwiIIjQiIIlEiCyQCLBVDJhKQAFgBAFgCQEihvGhmyQLLroFapFg");
	this.shape_4.setTransform(239.6,274.9);

	var maskedShapeInstanceList = [this.shape_3,this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3}]},146).to({state:[{t:this.shape_4}]},110).to({state:[{t:this.shape_4}]},16).wait(233));

	// circle mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_9 = new cjs.Graphics().p("EADLAj2QsGgkoLo+MArUgnbQILI+gkMGQglMIo+ILQoZHorHAAQgzAAg0gCg");
	var mask_3_graphics_10 = new cjs.Graphics().p("EADrAj3QsHgWoUo2MAqpgoJQIUI1gXMGQgYMJo1IVQodH9rdAAIhEgBg");
	var mask_3_graphics_11 = new cjs.Graphics().p("EAELAj4QsHgJoeotMAp9go3QIeItgKMGQgLMJosIeQoiITrzAAIggAAg");
	var mask_3_graphics_12 = new cjs.Graphics().p("AwEbZMApQgpkQIoIjADMGQACMKojInQojInsIACIgLAAQsBAAojofg");
	var mask_3_graphics_13 = new cjs.Graphics().p("AvtbvMAojgqQQIwIaAQMGQAQMJoaIwQoaIxsIAPIgvAAQrpAAofoJg");
	var mask_3_graphics_14 = new cjs.Graphics().p("AvWcEMAn1gq7QI5IRAdMFQAdMJoQI5QoRI6sHAcQgqABgpAAQrTAAoan0g");
	var mask_3_graphics_15 = new cjs.Graphics().p("Au/caMAnGgrmQJCIHAqMFQArMIoHJCQoHJCsHApQg7ADg7AAQq8AAoWneg");
	var mask_3_graphics_16 = new cjs.Graphics().p("AuncvMAmWgsQQJLH9A3MEQA3MHn8JLQn9JLsGA2QhNAGhMAAQqnAAoQnKg");
	var mask_3_graphics_17 = new cjs.Graphics().p("AuPdDMAlmgs4QJTHyBEMDQBFMGnzJUQnzJTsFBDQheAJhcAAQqTAAoKm2g");
	var mask_3_graphics_18 = new cjs.Graphics().p("At3dXMAk1gtgQJcHoBRMCQBRMFnoJbQnpJcsEBQQhvAMhsAAQp+AAoFmig");
	var mask_3_graphics_19 = new cjs.Graphics().p("AtedqMAkDguHQJkHeBeMAQBfMEnfJjQneJksCBdQiAAQh8AAQprAAn+mPg");
	var mask_3_graphics_20 = new cjs.Graphics().p("AtFd+MAjRguuQJsHTBrL/QBrMBnUJsQnUJssABqQiRAViLAAQpYAAn3l8g");
	var mask_3_graphics_21 = new cjs.Graphics().p("AsseQMAiegvTQJ0HJB4L9QB4L/nJJ0QnJJzr/B3QihAaiaAAQpGAAnwlqg");
	var mask_3_graphics_22 = new cjs.Graphics().p("AsSejMAhqgv5QJ7G/CFL6QCGL+m/J7Qm/J7r8CEQixAfipAAQo0AAnolXg");
	var mask_3_graphics_23 = new cjs.Graphics().p("Ar4e0MAg2gwcQKDG0CRL4QCTL7m0KDQm0KCr6CRQjAAli5AAQoiAAnglGg");
	var mask_3_graphics_24 = new cjs.Graphics().p("ArefGMAgCgw/QKJGpCfL1QCfL4mpKKQmpKKr3CeQjQArjHAAQoRAAnYk0g");
	var mask_3_graphics_25 = new cjs.Graphics().p("ArEfXMAfNgxhQKRGeCrLyQCsL2meKQQmeKRr1CrQjeAzjWAAQoAAAnQkkg");
	var mask_3_graphics_26 = new cjs.Graphics().p("AqpfnMAeXgyCQKXGTC4LwQC5LymTKXQmSKYryC3QjtA7jlAAQnvAAnHkUg");
	var mask_3_graphics_27 = new cjs.Graphics().p("AqOf3MAdggyiQKfGHDELuQDGLumIKeQmHKeruDFQj9BCjzAAQnfAAm9kEg");
	var mask_3_graphics_28 = new cjs.Graphics().p("EgJyAgHMAcpgzCQKkF8DSLqQDSLrl8KlQl8KkrrDRQkKBLkCAAQnPAAmzj0g");
	var mask_3_graphics_29 = new cjs.Graphics().p("EgJXAgWMAbygzgQKrFxDeLmQDeLnlwKrQlxKrrnDdQkYBUkQAAQm/AAmqjlg");
	var mask_3_graphics_30 = new cjs.Graphics().p("EgI7AglMAa6gz+QKxFlDqLiQDrLklkKxQllKxrkDqQkmBekeAAQmwAAmfjXg");
	var mask_3_graphics_31 = new cjs.Graphics().p("EgIfAgzMAaBg0aQK3FZD3LeQD4LglZK3QlZK3rgD2QkzBoktAAQmgAAmVjJg");
	var mask_3_graphics_32 = new cjs.Graphics().p("EgICAhBMAZIg01QK9FNEDLaQEELalOK9QlNK9rbEDQlAByk7AAQmSAAmJi7g");
	var mask_3_graphics_33 = new cjs.Graphics().p("EgHmAhOMAYPg1QQLCFCEQLVQEQLWlBLDQlCLCrWEPQlOB9lJAAQmCAAl/iug");
	var mask_3_graphics_34 = new cjs.Graphics().p("EgHJAhbMAXVg1pQLIE1EbLRQEdLRk2LIQk1LHrSEbQlaCJlXAAQl0AAlzihg");
	var mask_3_graphics_35 = new cjs.Graphics().p("EgGsAhnMAWbg2CQLMEqEoLLQEpLNkqLMQkpLNrNEnQlmCVlmAAQllAAlniVg");
	var mask_3_graphics_36 = new cjs.Graphics().p("EgGFAh3MAVNg2hQLTEZE4LFQE4LGkZLTQkZLTrHE3Ql1Cll6AAQlSAAlWiFg");
	var mask_3_graphics_37 = new cjs.Graphics().p("EgFeAiFMAT/g2+QLZEJFIK+QFIK+kJLaQkKLZq/FHQmEC2mNAAQlAAAlFh3g");
	var mask_3_graphics_38 = new cjs.Graphics().p("EgE3AiTMASxg3aQLfD5FXK2QFYK3j5LfQj5Lfq4FXQmTDImhAAQksAAk1hpg");
	var mask_3_graphics_39 = new cjs.Graphics().p("EgEPAihMARhg31QLkDpFnKuQFnKwjoLkQjpLkqwFmQmhDbm1AAQkaAAkihbg");
	var mask_3_graphics_40 = new cjs.Graphics().p("EgDnAitMAQRg4NQLqDYF1KnQF3KnjYLpQjYLqqoF1QmvDunJAAQkIAAkPhPg");
	var mask_3_graphics_41 = new cjs.Graphics().p("EgC/Ai4MAPBg4jQLuDHGFKeQGGKfjILuQjHLuqfGFQm8ECnfAAQj0AAj9hEg");
	var mask_3_graphics_42 = new cjs.Graphics().p("EgCWAjDMANwg44QLyC3GUKVQGUKWi2LyQi3LyqWGUQnIEXn0AAQjiAAjpg5g");
	var mask_3_graphics_43 = new cjs.Graphics().p("EgBtAjNMAMeg5LQL3CmGiKMQGjKMimL3QilL2qOGiQnTEtoLAAQjOAAjVgvg");
	var mask_3_graphics_44 = new cjs.Graphics().p("EgBEAjWMALNg5cQL5CUGxKDQGyKDiVL6QiVL6qEGwQneFDohABQi7AAjBgmg");
	var mask_3_graphics_45 = new cjs.Graphics().p("EgAbAjdMAJ7g5rQL9CEG/J5QHAJ6iEL8QiEL9p6G/QnpFao4AAQinAAitgeg");
	var mask_3_graphics_46 = new cjs.Graphics().p("EAANAjkMAIqg54QL/ByHNJvQHOJxhyL+QhzMApwHNQnzFypQAAQiTAAiZgXg");
	var mask_3_graphics_47 = new cjs.Graphics().p("EAA3AjrMAHXg6FQMCBiHaJkQHcJmhhMBQhiMDpmHaQn8GLppAAQh+AAiDgQg");
	var mask_3_graphics_48 = new cjs.Graphics().p("EABgAjwMAGEg6OQMEBQHpJaQHpJbhQMDQhRMEpbHoQoFGlqCAAQhqAAhtgLg");
	var mask_3_graphics_49 = new cjs.Graphics().p("EACKAj0MAExg6WQMGA/H1JPQH3JQg/MFQg/MGpQH1QoNG/qeAAQhUAAhWgHg");
	var mask_3_graphics_50 = new cjs.Graphics().p("EAC0Aj3MADdg6cQMHAuIDJDQIEJFguMGQguMHpFIDQoUHaq5AAQg+AAg/gEg");
	var mask_3_graphics_51 = new cjs.Graphics().p("EADeAj5MACKg6gQMIAdIPI4QIRI5gdMHQgcMIo6IPQoaH2rWAAIhPgCg");
	var mask_3_graphics_52 = new cjs.Graphics().p("EAEHAj7MAA3g6jQMIAMIcIrQIeIugMMHQgLMJotIcQohISr0AAIggAAg");
	var mask_3_graphics_53 = new cjs.Graphics().p("AEU2oQMJgGIoIgQIqIhAGMIQAGMIoiIoQofIqsJAGg");
	var mask_3_graphics_54 = new cjs.Graphics().p("ADq2nQMJgXI0ITQI1IVAYMHQAXMIoVI1QoTI1sIAYg");
	var mask_3_graphics_55 = new cjs.Graphics().p("ADA2kQMIgpJAIHQJBIIApMGQApMIoJJAQoGJBsIApg");
	var mask_3_graphics_56 = new cjs.Graphics().p("ACW2gQMHg6JLH5QJNH7A6MGQA6MHn7JLQn6JNsGA6g");
	var mask_3_graphics_57 = new cjs.Graphics().p("ABt2bQMFhLJXHtQJYHtBLMEQBLMGnuJWQnsJYsFBLg");
	var mask_3_graphics_58 = new cjs.Graphics().p("AAr2PQMChmJoHXQJpHYBmMBQBmMCnYJnQnXJpsCBng");
	var mask_3_graphics_59 = new cjs.Graphics().p("AgV2AQL9iBJ3HBQJ5HCCCL9QCBL+nDJ3QnAJ5r+CCg");
	var mask_3_graphics_60 = new cjs.Graphics().p("AhW1uQL4icKGGrQKJGsCcL3QCcL5msKHQmqKJr5Ccg");
	var mask_3_graphics_61 = new cjs.Graphics().p("AiX1YQLyi2KVGTQKYGVC2LyQC3LymVKWQmTKXrzC3g");
	var mask_3_graphics_62 = new cjs.Graphics().p("AjX0+QLrjSKjF9QKlF9DRLrQDSLrl+KkQl7KkrsDRg");
	var mask_3_graphics_63 = new cjs.Graphics().p("AkW0iQLjjrKwFkQKyFlDrLkQDsLjlmKwQljKyrkDrg");
	var mask_3_graphics_64 = new cjs.Graphics().p("AlU0CQLakFK8FMQK+FMEFLbQEFLalNK9QlLK+rbEFg");
	var mask_3_graphics_65 = new cjs.Graphics().p("AmSzfQLRkeLHEyQLJE0EfLRQEeLRk0LIQkyLIrREfg");
	var mask_3_graphics_66 = new cjs.Graphics().p("AnOy4QLFk4LSEaQLUEaE3LHQE4LFkbLTQkZLTrGE4g");
	var mask_3_graphics_67 = new cjs.Graphics().p("AoKyPQK6lQLbEAQLdEAFRK8QFRK6kCLcQj/Lcq7FRg");
	var mask_3_graphics_68 = new cjs.Graphics().p("ApExiQKulpLjDmQLmDnFpKvQFpKujoLkQjlLlqvFpg");
	var mask_3_graphics_69 = new cjs.Graphics().p("Ap+wyQKhmBLrDMQLtDMGBKiQGBKhjNLsQjLLsqiGBg");
	var mask_3_graphics_70 = new cjs.Graphics().p("Aq2v/QKUmZLxCyQL0CyGYKUQGYKTiyLyQixLzqUGZg");
	var mask_3_graphics_71 = new cjs.Graphics().p("ArtvKQKGmvL2CXQL6CXGvKGQGvKEiYL4QiWL5qFGvg");
	var mask_3_graphics_72 = new cjs.Graphics().p("AsiuRQJ2nGL7B9QL+B8HGJ1QHFJ1h9L9Qh7L+p2HFg");
	var mask_3_graphics_73 = new cjs.Graphics().p("AtWtVQJlncL/BhQMCBiHcJlQHbJkhiMBQhgMBplHcg");
	var mask_3_graphics_74 = new cjs.Graphics().p("AuJsXQJUnxMCBGQMFBGHxJUQHxJThHMEQhGMEpUHxg");
	var mask_3_graphics_75 = new cjs.Graphics().p("Au6rWQJCoGMEArQMHArIFJCQIGJCgsMFQgqMGpCIGg");
	var mask_3_graphics_76 = new cjs.Graphics().p("AvqqTQIwoZMFAPQMIAQIZIwQIZIvgRMGQgOMHowIZg");
	var mask_3_graphics_77 = new cjs.Graphics().p("AwYpNQIcotMFgLQMIgMItIcQIsIdALMGQAMMGocItg");
	var mask_3_graphics_78 = new cjs.Graphics().p("AxFoFQIIo/MEgnQMHgnI/IJQJAIIAlMFQAoMGoII/g");
	var mask_3_graphics_79 = new cjs.Graphics().p("Axwm6QHzpSMDhBQMFhDJRH0QJRH0BBMDQBDMEn0JRg");
	var mask_3_graphics_80 = new cjs.Graphics().p("AySl9QHipfMAhYQMDhYJfHjQJfHjBXMBQBZMCniJfg");
	var mask_3_graphics_81 = new cjs.Graphics().p("Ayzk9QHRptL9huQMAhuJtHSQJtHRBsL+QBvL/nRJtg");
	var mask_3_graphics_82 = new cjs.Graphics().p("AzTj9QHAp5L6iEQL8iEJ6HAQJ5G/CDL7QCEL8m/J5g");
	var mask_3_graphics_83 = new cjs.Graphics().p("Azxi7QGtqGL3iZQL3iZKGGtQKHGtCYL3QCaL3mtKGg");
	var mask_3_graphics_84 = new cjs.Graphics().p("A0Oh4QGaqSLyiuQLzivKSGaQKTGbCtLyQCwLzmaKSg");
	var mask_3_graphics_85 = new cjs.Graphics().p("A0qgzQGIqeLsjEQLujEKeGIQKdGHDDLtQDGLumIKdg");
	var mask_3_graphics_86 = new cjs.Graphics().p("A1FARQF1qnLnjZQLojaKoF0QKpF1DYLnQDbLol1Kog");
	var mask_3_graphics_87 = new cjs.Graphics().p("A1eBYQFhqyLhjuQLhjvKzFhQKzFhDtLhQDwLhlhKzg");
	var mask_3_graphics_88 = new cjs.Graphics().p("A11CgQFNq8LZkDQLbkEK8FNQK9FOECLaQEFLalOK8g");
	var mask_3_graphics_89 = new cjs.Graphics().p("A2MDoQE6rFLRkXQLTkZLGE5QLGE6EXLSQEZLSk5LGg");
	var mask_3_graphics_90 = new cjs.Graphics().p("A2hEyQElrOLKksQLKktLPElQLOElEsLKQEtLKklLPg");
	var mask_3_graphics_91 = new cjs.Graphics().p("A20F8QERrVLAlBQLClBLWERQLXEQFALBQFBLBkQLXg");
	var mask_3_graphics_92 = new cjs.Graphics().p("A3GHHQD8rcK3lVQK5lVLdD8QLeD7FUK4QFWK4j8Leg");
	var mask_3_graphics_93 = new cjs.Graphics().p("A3WITQDmrjKuloQKulpLlDmQLlDnFnKuQFqKujnLlg");
	var mask_3_graphics_94 = new cjs.Graphics().p("A3lJgQDRrqKjl7QKkl9LrDSQLrDRF7KkQF9KjjRLrg");
	var mask_3_graphics_95 = new cjs.Graphics().p("A3yKtQC8rvKYmPQKZmPLwC8QLxC8GOKYQGQKZi8Lwg");
	var mask_3_graphics_96 = new cjs.Graphics().p("A3+L7QCmr2KNmgQKOmiL1CnQL1CmGhKNQGjKNinL1g");
	var mask_3_graphics_97 = new cjs.Graphics().p("A4JNJQCRr6KBmyQKCm1L5CRQL6CRGzKBQG1KAiRL6g");
	var mask_3_graphics_98 = new cjs.Graphics().p("A4SOYQB8r+JznFQJ2nGL9B7QL+B7HFJ0QHHJ0h7L+g");
	var mask_3_graphics_99 = new cjs.Graphics().p("A4ZPnQBmsBJmnWQJonZMABmQMCBlHXJnQHZJnhmMBg");
	var mask_3_graphics_100 = new cjs.Graphics().p("A4fQ3QBQsEJZnoQJanqMDBQQMEBPHoJaQHqJZhPMDg");
	var mask_3_graphics_101 = new cjs.Graphics().p("A4jSGQA5sGJLn4QJMn7MFA6QMGA5H6JLQH6JLg5MGg");
	var mask_3_graphics_102 = new cjs.Graphics().p("A4mTWQAjsHI8oJQI+oMMGAkQMIAjIKI9QILI8gkMHg");
	var mask_3_graphics_103 = new cjs.Graphics().p("A4oUmQAOsIItoaQIuobMHAOQMIANIaIuQIcItgOMIg");
	var mask_3_graphics_104 = new cjs.Graphics().p("AwTAvQIfoqMHgJQMIgIIqIeQIrIdAJMIMg6hAAqQgIsIIdoqg");
	var mask_3_graphics_105 = new cjs.Graphics().p("Aw3A7QIPo5MGgfQMIgfI5IPQI6INAfMHMg6eACUQgfsHIOo5g");
	var mask_3_graphics_106 = new cjs.Graphics().p("AxLBCQIGpCMGgrQMGgrJCIFQJDIDArMHMg6bADSQgrsHIEpCg");
	var mask_3_graphics_107 = new cjs.Graphics().p("AxeBKQH8pKMFg4QMGg5JKH9QJLH5A4MGMg6XAEPQg4sGH7pKg");
	var mask_3_graphics_108 = new cjs.Graphics().p("AxxBSQHypSMFhFQMFhFJSHyQJTHwBFMFMg6SAFMQhFsFHxpSg");
	var mask_3_graphics_109 = new cjs.Graphics().p("AyDBbQHppbMDhRQMDhSJbHpQJbHlBSMEMg6MAGKQhSsEHnpag");
	var mask_3_graphics_110 = new cjs.Graphics().p("AyUBkQHepjMCheQMCheJiHeQJkHcBeMCMg6FAHHQhesCHdpig");
	var mask_3_graphics_111 = new cjs.Graphics().p("AylBtQHVprL/hrQMBhqJqHUQJrHSBrMBMg59AIDQhrsAHTpqg");
	var mask_3_graphics_112 = new cjs.Graphics().p("Ay1B2QHKpyL+h3QL/h4JyHLQJyHHB4L/Mg50AJAQh3r+HIpyg");
	var mask_3_graphics_113 = new cjs.Graphics().p("AzECAQHAp5L8iEQL8iEJ5HAQJ6G9CEL8Mg5pAJ+QiEr9G+p5g");
	var mask_3_graphics_114 = new cjs.Graphics().p("AzTCKQG2qAL6iRQL5iRKBG2QKBGzCRL6Mg5fAK6QiRr7G0qAg");
	var mask_3_graphics_115 = new cjs.Graphics().p("AzhCVQGrqIL4idQL3idKHGrQKJGoCdL4Mg5TAL2Qidr4GpqHg");
	var mask_3_graphics_116 = new cjs.Graphics().p("AzuCgQGgqPL1iqQL0ipKPGgQKPGfCqL0Mg5GAMyQiqr2GfqNg");
	var mask_3_graphics_117 = new cjs.Graphics().p("Az7CrQGVqWLzi2QLxi2KVGWQKWGTC2LyMg44ANuQi2rzGUqUg");
	var mask_3_graphics_118 = new cjs.Graphics().p("A0HC2QGKqcLwjCQLujCKcGKQKcGJDCLuMg4oAOqQjDrwGJqbg");
	var mask_3_graphics_119 = new cjs.Graphics().p("A0SDCQF/qiLsjPQLrjPKiGAQKjF+DOLrMg4YAPkQjPrsF+qhg");
	var mask_3_graphics_120 = new cjs.Graphics().p("A0dDOQF0qpLpjaQLnjbKoF0QKpFzDbLnMg4IAQgQjbroFzqog");
	var mask_3_graphics_121 = new cjs.Graphics().p("A0nDaQFpquLljnQLkjnKuFpQKvFnDnLkMg32ARbQjnrlFnqug");
	var mask_3_graphics_122 = new cjs.Graphics().p("A0wDnQFeq0LgjzQLgjzK0FdQK1FcDzLgMg3jASVQjzrgFcq0g");
	var mask_3_graphics_123 = new cjs.Graphics().p("A04D0QFRq6Ldj/QLcj/K6FSQK6FRD/LbMg3PATQQj/rdFRq5g");
	var mask_3_graphics_124 = new cjs.Graphics().p("A1AEBQFGq/LZkLQLXkLK/FHQLAFFELLXMg27AUJQkLrYFGq/g");
	var mask_3_graphics_125 = new cjs.Graphics().p("A1HEPQE6rFLUkXQLTkXLFE8QLFE5EXLTMg2lAVDQkXrUE6rEg");
	var mask_3_graphics_126 = new cjs.Graphics().p("A1OEdQEvrKLPkjQLPkjLJEwQLKEuEjLOMg2OAV8QkjrPEurJg");
	var mask_3_graphics_127 = new cjs.Graphics().p("A1UErQEkrOLKkvQLJkvLPEkQLPEiEuLJMg13AW1QkurKEirOg");
	var mask_3_graphics_128 = new cjs.Graphics().p("A1ZE6QEYrULFk6QLEk6LTEYQLUEWE6LEMg1eAXtQk6rFEWrSg");
	var mask_3_graphics_129 = new cjs.Graphics().p("A1dFIQELrXLAlGQK/lGLYEMQLYEKFGK/Mg1FAYlQlGrAELrXg");
	var mask_3_graphics_130 = new cjs.Graphics().p("A1hFXQEArcK6lRQK6lSLbEBQLdD+FRK5Mg0qAZdQlSq6D/rcg");
	var mask_3_graphics_131 = new cjs.Graphics().p("A1kFnQD0rgK0ldQK0ldLgD0QLhDyFdK0Mg0QAaUQldq1Dzrfg");
	var mask_3_graphics_132 = new cjs.Graphics().p("A1mF2QDnrkKvloQKuloLkDoQLkDmFpKuMgz0AbKQloqvDnrjg");
	var mask_3_graphics_133 = new cjs.Graphics().p("A1oGGQDbrnKpl0QKplzLnDbQLoDaFzKoMgzWAcBQlzqpDarng");
	var mask_3_graphics_134 = new cjs.Graphics().p("A1pGWQDPrrKjl+QKil/LrDQQLrDNF/KjMgy4Ac1Ql/qiDOrrg");
	var mask_3_graphics_135 = new cjs.Graphics().p("A1pGnQDDrvKcmJQKcmKLuDDQLvDCGJKcMgyZAdrQmKqdDCrtg");
	var mask_3_graphics_136 = new cjs.Graphics().p("A1oG3QC2rxKWmVQKVmULxC3QLyC1GUKWMgx5AefQmVqWC2rxg");
	var mask_3_graphics_137 = new cjs.Graphics().p("A1nHIQCqr0KPmfQKOmgL0CrQL1CoGfKPMgxZAfUQmfqPCpr0g");
	var mask_3_graphics_138 = new cjs.Graphics().p("A1lHZQCdr3KJmqQKHmqL3CeQL3CcGqKJMgw4AgHQmqqJCdr2g");
	var mask_3_graphics_139 = new cjs.Graphics().p("A1iHrQCQr6KCm0QKAm1L5CSQL6CPG0KBMgwVAg6Qm1qBCRr4g");
	var mask_3_graphics_140 = new cjs.Graphics().p("A1fH8QCEr7J6nAQJ5m/L8CFQL8CDG/J6MgvzAhtQm/p6CEr7g");
	var mask_3_graphics_141 = new cjs.Graphics().p("A1bIOQB4r+JynJQJynJL9B4QL+B2HKJzMgvPAieQnJpyB3r9g");
	var mask_3_graphics_142 = new cjs.Graphics().p("A1WIgQBrsAJrnTQJrnUL+BsQMABqHUJrMguqAjQQnUprBrr/g");
	var mask_3_graphics_143 = new cjs.Graphics().p("A1RIyQBfsBJjneQJjndMABfQMCBdHdJjMguEAkBQnepjBesBg");
	var mask_3_graphics_144 = new cjs.Graphics().p("A1KJFQBRsDJbnnQJcnoMBBTQMDBQHoJbMgteAkxQnopbBSsCg");
	var mask_3_graphics_145 = new cjs.Graphics().p("A1EJYQBGsEJTnyQJTnxMDBGQMEBEHxJTMgs3AlgQnxpTBEsDg");
	var mask_3_graphics_146 = new cjs.Graphics().p("A08JrQA4sFJLn8QJLn7MEA5QMFA4H7JLMgsPAmOQn7pLA4sDg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_3_graphics_9,x:216.7,y:229.6}).wait(1).to({graphics:mask_3_graphics_10,x:216.7,y:229.6}).wait(1).to({graphics:mask_3_graphics_11,x:216.7,y:229.6}).wait(1).to({graphics:mask_3_graphics_12,x:216.7,y:229.6}).wait(1).to({graphics:mask_3_graphics_13,x:216.7,y:229.6}).wait(1).to({graphics:mask_3_graphics_14,x:216.7,y:229.6}).wait(1).to({graphics:mask_3_graphics_15,x:216.7,y:229.6}).wait(1).to({graphics:mask_3_graphics_16,x:216.7,y:229.7}).wait(1).to({graphics:mask_3_graphics_17,x:216.7,y:229.7}).wait(1).to({graphics:mask_3_graphics_18,x:216.7,y:229.7}).wait(1).to({graphics:mask_3_graphics_19,x:216.7,y:229.7}).wait(1).to({graphics:mask_3_graphics_20,x:216.7,y:229.8}).wait(1).to({graphics:mask_3_graphics_21,x:216.7,y:229.8}).wait(1).to({graphics:mask_3_graphics_22,x:216.7,y:229.8}).wait(1).to({graphics:mask_3_graphics_23,x:216.7,y:229.8}).wait(1).to({graphics:mask_3_graphics_24,x:216.7,y:229.8}).wait(1).to({graphics:mask_3_graphics_25,x:216.7,y:229.9}).wait(1).to({graphics:mask_3_graphics_26,x:216.8,y:229.9}).wait(1).to({graphics:mask_3_graphics_27,x:216.8,y:229.9}).wait(1).to({graphics:mask_3_graphics_28,x:216.8,y:229.9}).wait(1).to({graphics:mask_3_graphics_29,x:216.8,y:229.9}).wait(1).to({graphics:mask_3_graphics_30,x:216.8,y:230}).wait(1).to({graphics:mask_3_graphics_31,x:216.8,y:230}).wait(1).to({graphics:mask_3_graphics_32,x:216.8,y:230}).wait(1).to({graphics:mask_3_graphics_33,x:216.8,y:230}).wait(1).to({graphics:mask_3_graphics_34,x:216.8,y:230}).wait(1).to({graphics:mask_3_graphics_35,x:216.7,y:230}).wait(1).to({graphics:mask_3_graphics_36,x:216.7,y:230}).wait(1).to({graphics:mask_3_graphics_37,x:216.7,y:230}).wait(1).to({graphics:mask_3_graphics_38,x:216.7,y:230}).wait(1).to({graphics:mask_3_graphics_39,x:216.7,y:230}).wait(1).to({graphics:mask_3_graphics_40,x:216.7,y:230}).wait(1).to({graphics:mask_3_graphics_41,x:216.7,y:230}).wait(1).to({graphics:mask_3_graphics_42,x:216.6,y:230}).wait(1).to({graphics:mask_3_graphics_43,x:216.6,y:230}).wait(1).to({graphics:mask_3_graphics_44,x:216.6,y:230}).wait(1).to({graphics:mask_3_graphics_45,x:216.6,y:229.9}).wait(1).to({graphics:mask_3_graphics_46,x:216.6,y:229.9}).wait(1).to({graphics:mask_3_graphics_47,x:216.5,y:229.9}).wait(1).to({graphics:mask_3_graphics_48,x:216.5,y:229.9}).wait(1).to({graphics:mask_3_graphics_49,x:216.5,y:229.9}).wait(1).to({graphics:mask_3_graphics_50,x:216.5,y:229.9}).wait(1).to({graphics:mask_3_graphics_51,x:216.5,y:229.9}).wait(1).to({graphics:mask_3_graphics_52,x:216.5,y:229.9}).wait(1).to({graphics:mask_3_graphics_53,x:216.5,y:229.9}).wait(1).to({graphics:mask_3_graphics_54,x:216.5,y:229.9}).wait(1).to({graphics:mask_3_graphics_55,x:216.5,y:229.8}).wait(1).to({graphics:mask_3_graphics_56,x:216.5,y:229.7}).wait(1).to({graphics:mask_3_graphics_57,x:216.6,y:229.5}).wait(1).to({graphics:mask_3_graphics_58,x:216.6,y:229.2}).wait(1).to({graphics:mask_3_graphics_59,x:216.7,y:228.7}).wait(1).to({graphics:mask_3_graphics_60,x:216.7,y:228.1}).wait(1).to({graphics:mask_3_graphics_61,x:216.7,y:227.4}).wait(1).to({graphics:mask_3_graphics_62,x:216.8,y:226.5}).wait(1).to({graphics:mask_3_graphics_63,x:216.8,y:225.6}).wait(1).to({graphics:mask_3_graphics_64,x:216.8,y:224.6}).wait(1).to({graphics:mask_3_graphics_65,x:216.8,y:223.4}).wait(1).to({graphics:mask_3_graphics_66,x:216.8,y:222.2}).wait(1).to({graphics:mask_3_graphics_67,x:216.8,y:220.8}).wait(1).to({graphics:mask_3_graphics_68,x:216.8,y:219.3}).wait(1).to({graphics:mask_3_graphics_69,x:216.7,y:217.7}).wait(1).to({graphics:mask_3_graphics_70,x:216.7,y:216.1}).wait(1).to({graphics:mask_3_graphics_71,x:216.7,y:214.3}).wait(1).to({graphics:mask_3_graphics_72,x:216.6,y:212.4}).wait(1).to({graphics:mask_3_graphics_73,x:216.6,y:210.5}).wait(1).to({graphics:mask_3_graphics_74,x:216.5,y:208.4}).wait(1).to({graphics:mask_3_graphics_75,x:216.5,y:206.3}).wait(1).to({graphics:mask_3_graphics_76,x:216.5,y:204}).wait(1).to({graphics:mask_3_graphics_77,x:216.5,y:201.7}).wait(1).to({graphics:mask_3_graphics_78,x:216.5,y:199.3}).wait(1).to({graphics:mask_3_graphics_79,x:216.6,y:196.8}).wait(1).to({graphics:mask_3_graphics_80,x:216.6,y:194.8}).wait(1).to({graphics:mask_3_graphics_81,x:216.7,y:192.7}).wait(1).to({graphics:mask_3_graphics_82,x:216.7,y:190.5}).wait(1).to({graphics:mask_3_graphics_83,x:216.8,y:188.3}).wait(1).to({graphics:mask_3_graphics_84,x:216.8,y:186.1}).wait(1).to({graphics:mask_3_graphics_85,x:216.8,y:183.8}).wait(1).to({graphics:mask_3_graphics_86,x:216.9,y:181.5}).wait(1).to({graphics:mask_3_graphics_87,x:216.9,y:179.2}).wait(1).to({graphics:mask_3_graphics_88,x:216.9,y:176.8}).wait(1).to({graphics:mask_3_graphics_89,x:217,y:174.4}).wait(1).to({graphics:mask_3_graphics_90,x:217,y:172}).wait(1).to({graphics:mask_3_graphics_91,x:217,y:169.5}).wait(1).to({graphics:mask_3_graphics_92,x:217,y:167}).wait(1).to({graphics:mask_3_graphics_93,x:217,y:164.5}).wait(1).to({graphics:mask_3_graphics_94,x:217,y:161.9}).wait(1).to({graphics:mask_3_graphics_95,x:217,y:159.3}).wait(1).to({graphics:mask_3_graphics_96,x:217,y:156.7}).wait(1).to({graphics:mask_3_graphics_97,x:216.9,y:154.1}).wait(1).to({graphics:mask_3_graphics_98,x:216.9,y:151.5}).wait(1).to({graphics:mask_3_graphics_99,x:216.9,y:148.9}).wait(1).to({graphics:mask_3_graphics_100,x:216.9,y:146.2}).wait(1).to({graphics:mask_3_graphics_101,x:216.9,y:143.6}).wait(1).to({graphics:mask_3_graphics_102,x:216.9,y:140.9}).wait(1).to({graphics:mask_3_graphics_103,x:216.9,y:138.3}).wait(1).to({graphics:mask_3_graphics_104,x:216.9,y:137.7}).wait(1).to({graphics:mask_3_graphics_105,x:216.8,y:140.3}).wait(1).to({graphics:mask_3_graphics_106,x:216.7,y:141.9}).wait(1).to({graphics:mask_3_graphics_107,x:216.6,y:143.4}).wait(1).to({graphics:mask_3_graphics_108,x:216.5,y:144.9}).wait(1).to({graphics:mask_3_graphics_109,x:216.4,y:146.5}).wait(1).to({graphics:mask_3_graphics_110,x:216.2,y:148}).wait(1).to({graphics:mask_3_graphics_111,x:216,y:149.5}).wait(1).to({graphics:mask_3_graphics_112,x:215.8,y:151}).wait(1).to({graphics:mask_3_graphics_113,x:215.5,y:152.6}).wait(1).to({graphics:mask_3_graphics_114,x:215.3,y:154.1}).wait(1).to({graphics:mask_3_graphics_115,x:215,y:155.6}).wait(1).to({graphics:mask_3_graphics_116,x:214.7,y:157.1}).wait(1).to({graphics:mask_3_graphics_117,x:214.3,y:158.6}).wait(1).to({graphics:mask_3_graphics_118,x:213.9,y:160.1}).wait(1).to({graphics:mask_3_graphics_119,x:213.5,y:161.5}).wait(1).to({graphics:mask_3_graphics_120,x:213.1,y:163}).wait(1).to({graphics:mask_3_graphics_121,x:212.7,y:164.5}).wait(1).to({graphics:mask_3_graphics_122,x:212.2,y:165.9}).wait(1).to({graphics:mask_3_graphics_123,x:211.7,y:167.4}).wait(1).to({graphics:mask_3_graphics_124,x:211.2,y:168.8}).wait(1).to({graphics:mask_3_graphics_125,x:210.7,y:170.3}).wait(1).to({graphics:mask_3_graphics_126,x:210.1,y:171.7}).wait(1).to({graphics:mask_3_graphics_127,x:209.5,y:173.1}).wait(1).to({graphics:mask_3_graphics_128,x:208.9,y:174.5}).wait(1).to({graphics:mask_3_graphics_129,x:208.3,y:175.9}).wait(1).to({graphics:mask_3_graphics_130,x:207.6,y:177.3}).wait(1).to({graphics:mask_3_graphics_131,x:207,y:178.7}).wait(1).to({graphics:mask_3_graphics_132,x:206.3,y:180.1}).wait(1).to({graphics:mask_3_graphics_133,x:205.5,y:181.4}).wait(1).to({graphics:mask_3_graphics_134,x:204.8,y:182.7}).wait(1).to({graphics:mask_3_graphics_135,x:204,y:184.1}).wait(1).to({graphics:mask_3_graphics_136,x:203.2,y:185.4}).wait(1).to({graphics:mask_3_graphics_137,x:202.4,y:186.7}).wait(1).to({graphics:mask_3_graphics_138,x:201.6,y:188}).wait(1).to({graphics:mask_3_graphics_139,x:200.7,y:189.2}).wait(1).to({graphics:mask_3_graphics_140,x:199.9,y:190.5}).wait(1).to({graphics:mask_3_graphics_141,x:199,y:191.7}).wait(1).to({graphics:mask_3_graphics_142,x:198.1,y:193}).wait(1).to({graphics:mask_3_graphics_143,x:197.1,y:194.2}).wait(1).to({graphics:mask_3_graphics_144,x:196.2,y:195.4}).wait(1).to({graphics:mask_3_graphics_145,x:195.2,y:196.6}).wait(1).to({graphics:mask_3_graphics_146,x:194.2,y:197.7}).wait(359));

	// Layer 3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(20,1,1).p("AUFt2Qo0haoQDZQo1DomBGvQmAGviIIlQgEAPgDAO");
	this.shape_5.setTransform(241.5,237.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(20,1,1).p("AUYzBQo1haoQDZQo1DnmAGwQmBGviIIlQh8HyDkDB");
	this.shape_6.setTransform(239.6,270.8);

	var maskedShapeInstanceList = [this.shape_5,this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5}]},9).to({state:[{t:this.shape_6}]},116).wait(380));

	// Letter
	this.instance_3 = new lib.A("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(275,275);
	this.instance_3.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(505));

	// Background
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_7.setTransform(275,275,3.373,2.543);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_8.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).wait(505));

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