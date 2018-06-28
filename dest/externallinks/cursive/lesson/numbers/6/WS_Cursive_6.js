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


(lib._6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AsdWdQkFj/AAnAQAAlGCqlfQCqlbEBlGQEDlCEskTQErkRECitIBPgdQBEAAAoAsQAqAsAAA9QAAAkh8BsIkzENImOFxQjSDRi5DwQi5Dth7EMQh7EMAAENQAADNBSChQBSChC+BVIAAgxQAAitBKjFQBMjBCBiiQCBikCohsQCuhpC4gBQEdABCAChQCBChAAEHQAADlhqCqQhpCtinBvQiqBwjKA4QjNA6jMAAQm1AAkEj8gAESI0Qh1BYhYCEQhaCDg1CWQg4CSAABzIAAAgIAHAvIAjAAIEhgjQCVgkB+hMQB+hMBVh1QBSh1AAikQAAiKgvhVQguhVifAAQh+AAh1BYg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.9,-168.9,211.8,337.8);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0.1,rotation:31.8,guide:{path:[48.5,-50.4,-9.2,-28.3,-42.7,42.1]}},91).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AA1kPIBIhMICkCaIhIBMg");
	var mask_graphics_1 = new cjs.Graphics().p("Ah6ghIBShXICjCaIhSBXg");
	var mask_graphics_2 = new cjs.Graphics().p("Ah/gcIBchhICjCaIhcBgg");
	var mask_graphics_3 = new cjs.Graphics().p("AiEgXIBmhrICjCaIhmBrg");
	var mask_graphics_4 = new cjs.Graphics().p("AiJgRIBvh2ICkCaIhwB1g");
	var mask_graphics_5 = new cjs.Graphics().p("AiOgMIB5iAICkCZIh6CAg");
	var mask_graphics_6 = new cjs.Graphics().p("AiSgHICCiKICjCZIiCCKg");
	var mask_graphics_7 = new cjs.Graphics().p("AiXgCICMiVICjCaIiMCVg");
	var mask_graphics_8 = new cjs.Graphics().p("AicACICWieICjCbIiWCeg");
	var mask_graphics_9 = new cjs.Graphics().p("AihAHICgioICjCbIigCog");
	var mask_graphics_10 = new cjs.Graphics().p("AimANICpizICkCbIipCyg");
	var mask_graphics_11 = new cjs.Graphics().p("AirASICzi9ICkCaIizC9g");
	var mask_graphics_12 = new cjs.Graphics().p("AiwAXIC9jIICkCbIi8DIg");
	var mask_graphics_13 = new cjs.Graphics().p("Ai1AcIDGjSIClCbIjGDSg");
	var mask_graphics_14 = new cjs.Graphics().p("Ai6AiIDQjdIClCbIjRDcg");
	var mask_graphics_15 = new cjs.Graphics().p("Ai+AnIDZjnICkCbIjZDmg");
	var mask_graphics_16 = new cjs.Graphics().p("AjDArIDjjwICkCaIjjDyg");
	var mask_graphics_17 = new cjs.Graphics().p("AjIAxIDtj7ICkCaIjtD8g");
	var mask_graphics_18 = new cjs.Graphics().p("AjNA2ID3kGICkCbIj3EGg");
	var mask_graphics_19 = new cjs.Graphics().p("AjSA7IEBkQICkCaIkBERg");
	var mask_graphics_20 = new cjs.Graphics().p("AjXBAIELkaICkCaIkLEbg");
	var mask_graphics_21 = new cjs.Graphics().p("AjcBGIEVklICkCaIkUElg");
	var mask_graphics_22 = new cjs.Graphics().p("AjgBLIEdkvIClCaIkeEwg");
	var mask_graphics_23 = new cjs.Graphics().p("AjmBQIEok6IClCbIkoE6g");
	var mask_graphics_24 = new cjs.Graphics().p("AjqBVIExlEICkCbIkxFEg");
	var mask_graphics_25 = new cjs.Graphics().p("AjvBaIE7lOICkCaIk7FPg");
	var mask_graphics_26 = new cjs.Graphics().p("Aj0BgIFFlZICkCaIlFFZg");
	var mask_graphics_27 = new cjs.Graphics().p("Aj5BkIFPliICkCaIlPFjg");
	var mask_graphics_28 = new cjs.Graphics().p("Aj+BqIFZltICkCaIlZFtg");
	var mask_graphics_29 = new cjs.Graphics().p("AkDBvIFjl4ICkCbIljF4g");
	var mask_graphics_30 = new cjs.Graphics().p("AkHB0IFrmCIClCaIltGDg");
	var mask_graphics_31 = new cjs.Graphics().p("AkMB5IF1mMIClCaIl3GNg");
	var mask_graphics_32 = new cjs.Graphics().p("AkRB/IF/mXIClCaImAGXg");
	var mask_graphics_33 = new cjs.Graphics().p("AkWCEIGJmhICkCaImJGhg");
	var mask_graphics_34 = new cjs.Graphics().p("AkbCJIGTmsICkCbImTGsg");
	var mask_graphics_35 = new cjs.Graphics().p("AkgCOIGdm2ICkCbImdG2g");
	var mask_graphics_36 = new cjs.Graphics().p("AklCUIGnnBICkCbImnHAg");
	var mask_graphics_37 = new cjs.Graphics().p("AkqCYIGxnLICkCbImxHLg");
	var mask_graphics_38 = new cjs.Graphics().p("AkvCeIG7nWICkCbIm6HWg");
	var mask_graphics_39 = new cjs.Graphics().p("Ak0CjIHEngIClCbInFHgg");
	var mask_graphics_40 = new cjs.Graphics().p("Ak5CoIHOnqIClCbInPHqg");
	var mask_graphics_41 = new cjs.Graphics().p("Ak9CtIHXn0IClCbInYH0g");
	var mask_graphics_42 = new cjs.Graphics().p("AlCCzIHhn/ICkCbInhH+g");
	var mask_graphics_43 = new cjs.Graphics().p("AlHC4IHroKICkCbInrIJg");
	var mask_graphics_44 = new cjs.Graphics().p("AlMC9IH1oUICkCbIn1IUg");
	var mask_graphics_45 = new cjs.Graphics().p("AlRDCIH/oeICkCbIn/Ieg");
	var mask_graphics_46 = new cjs.Graphics().p("AlWDHIIIooIClCbIoJIog");
	var mask_graphics_47 = new cjs.Graphics().p("AlbDNIISozIClCaIoSIzg");
	var mask_graphics_48 = new cjs.Graphics().p("AlgDSIIco+IClCbIodI9g");
	var mask_graphics_49 = new cjs.Graphics().p("AllDXIImpIIClCbIomJIg");
	var mask_graphics_50 = new cjs.Graphics().p("AlpDcIIvpSICkCbIovJSg");
	var mask_graphics_51 = new cjs.Graphics().p("AluDhII5pcICkCbIo5Jcg");
	var mask_graphics_52 = new cjs.Graphics().p("Al0DmIJEpmICkCaIpDJng");
	var mask_graphics_53 = new cjs.Graphics().p("Al4DsIJNpxICkCaIpNJxg");
	var mask_graphics_54 = new cjs.Graphics().p("Al9DxIJXp8ICkCbIpXJ8g");
	var mask_graphics_55 = new cjs.Graphics().p("AmCD2IJgqGIClCbIphKGg");
	var mask_graphics_56 = new cjs.Graphics().p("AmHD7IJqqQIClCbIpqKQg");
	var mask_graphics_57 = new cjs.Graphics().p("AmMEBIJ0qbIClCbIp1Kag");
	var mask_graphics_58 = new cjs.Graphics().p("AmREGIJ+qmIClCcIp+Klg");
	var mask_graphics_59 = new cjs.Graphics().p("AmVELIKHqwICkCbIqIKwg");
	var mask_graphics_60 = new cjs.Graphics().p("AmaEQIKRq6ICkCbIqRK6g");
	var mask_graphics_61 = new cjs.Graphics().p("AmfEWIKbrFICkCbIqbLEg");
	var mask_graphics_62 = new cjs.Graphics().p("AmkEaIKlrOICkCbIqlLOg");
	var mask_graphics_63 = new cjs.Graphics().p("AmpEgIKvraICkCcIqvLZg");
	var mask_graphics_64 = new cjs.Graphics().p("AmuElIK4rkIClCcIq5Ljg");
	var mask_graphics_65 = new cjs.Graphics().p("AmzEqILCruIClCbIrDLug");
	var mask_graphics_66 = new cjs.Graphics().p("Am4EvILMr4IClCbIrNL4g");
	var mask_graphics_67 = new cjs.Graphics().p("Am9E0ILWsCIClCbIrWMCg");
	var mask_graphics_68 = new cjs.Graphics().p("AnCE6ILgsNICkCbIrgMMg");
	var mask_graphics_69 = new cjs.Graphics().p("AnHE+ILqsXICkCcIrpMXg");
	var mask_graphics_70 = new cjs.Graphics().p("AnLFEILzsiICkCbIrzMig");
	var mask_graphics_71 = new cjs.Graphics().p("AnQFJIL9ssICkCbIr9Msg");
	var mask_graphics_72 = new cjs.Graphics().p("AnVFOIMHs2ICkCbIsHM2g");
	var mask_graphics_73 = new cjs.Graphics().p("AnaFTIMQtAIClCbIsRNAg");
	var mask_graphics_74 = new cjs.Graphics().p("AnfFYIMatLIClCcIsbNKg");
	var mask_graphics_75 = new cjs.Graphics().p("AnkFeIMktWIClCcIskNVg");
	var mask_graphics_76 = new cjs.Graphics().p("AnpFjIMutgIClCbIsuNgg");
	var mask_graphics_77 = new cjs.Graphics().p("AnuFoIM4tqICkCaIs3Nrg");
	var mask_graphics_78 = new cjs.Graphics().p("AnzFtINCt0ICkCaItBN1g");
	var mask_graphics_79 = new cjs.Graphics().p("An3FyINLt+ICkCaItLN/g");
	var mask_graphics_80 = new cjs.Graphics().p("An8F4INVuKICkCbItVOKg");
	var mask_graphics_81 = new cjs.Graphics().p("AoBF9INeuUIClCbItfOUg");
	var mask_graphics_82 = new cjs.Graphics().p("AoGGCINoueIClCbItoOeg");
	var mask_graphics_83 = new cjs.Graphics().p("AoLGHINyuoIClCbItyOog");
	var mask_graphics_84 = new cjs.Graphics().p("AoQGMIN8uyIClCaIt8Ozg");
	var mask_graphics_85 = new cjs.Graphics().p("AoVGSIOGu+IClCbIuGO+g");
	var mask_graphics_86 = new cjs.Graphics().p("AoZGXIOPvIICkCbIuPPIg");
	var mask_graphics_87 = new cjs.Graphics().p("AofGcIOavSICkCbIuZPSg");
	var mask_graphics_88 = new cjs.Graphics().p("AojGhIOjvcICkCbIujPcg");
	var mask_graphics_89 = new cjs.Graphics().p("AooGmIOtvmICkCaIutPng");
	var mask_graphics_90 = new cjs.Graphics().p("AotGrIO2vwIClCaIu3Pxg");
	var mask_graphics_91 = new cjs.Graphics().p("AoyGxIPAv8IClCbIvAP8g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:28.9,y:-34.8}).wait(1).to({graphics:mask_graphics_1,x:45.5,y:-57.6}).wait(1).to({graphics:mask_graphics_2,x:45,y:-57.1}).wait(1).to({graphics:mask_graphics_3,x:44.5,y:-56.6}).wait(1).to({graphics:mask_graphics_4,x:44,y:-56}).wait(1).to({graphics:mask_graphics_5,x:43.5,y:-55.5}).wait(1).to({graphics:mask_graphics_6,x:43,y:-55}).wait(1).to({graphics:mask_graphics_7,x:42.5,y:-54.5}).wait(1).to({graphics:mask_graphics_8,x:42.1,y:-54}).wait(1).to({graphics:mask_graphics_9,x:41.6,y:-53.4}).wait(1).to({graphics:mask_graphics_10,x:41.1,y:-52.9}).wait(1).to({graphics:mask_graphics_11,x:40.6,y:-52.4}).wait(1).to({graphics:mask_graphics_12,x:40.1,y:-51.9}).wait(1).to({graphics:mask_graphics_13,x:39.6,y:-51.4}).wait(1).to({graphics:mask_graphics_14,x:39.1,y:-50.9}).wait(1).to({graphics:mask_graphics_15,x:38.6,y:-50.4}).wait(1).to({graphics:mask_graphics_16,x:38.1,y:-49.8}).wait(1).to({graphics:mask_graphics_17,x:37.7,y:-49.3}).wait(1).to({graphics:mask_graphics_18,x:37.2,y:-48.8}).wait(1).to({graphics:mask_graphics_19,x:36.7,y:-48.3}).wait(1).to({graphics:mask_graphics_20,x:36.2,y:-47.8}).wait(1).to({graphics:mask_graphics_21,x:35.7,y:-47.3}).wait(1).to({graphics:mask_graphics_22,x:35.2,y:-46.7}).wait(1).to({graphics:mask_graphics_23,x:34.7,y:-46.2}).wait(1).to({graphics:mask_graphics_24,x:34.2,y:-45.7}).wait(1).to({graphics:mask_graphics_25,x:33.7,y:-45.2}).wait(1).to({graphics:mask_graphics_26,x:33.3,y:-44.7}).wait(1).to({graphics:mask_graphics_27,x:32.8,y:-44.1}).wait(1).to({graphics:mask_graphics_28,x:32.3,y:-43.6}).wait(1).to({graphics:mask_graphics_29,x:31.8,y:-43.1}).wait(1).to({graphics:mask_graphics_30,x:31.3,y:-42.6}).wait(1).to({graphics:mask_graphics_31,x:30.8,y:-42.1}).wait(1).to({graphics:mask_graphics_32,x:30.3,y:-41.6}).wait(1).to({graphics:mask_graphics_33,x:29.8,y:-41}).wait(1).to({graphics:mask_graphics_34,x:29.3,y:-40.5}).wait(1).to({graphics:mask_graphics_35,x:28.9,y:-40}).wait(1).to({graphics:mask_graphics_36,x:28.4,y:-39.5}).wait(1).to({graphics:mask_graphics_37,x:27.9,y:-39}).wait(1).to({graphics:mask_graphics_38,x:27.4,y:-38.5}).wait(1).to({graphics:mask_graphics_39,x:26.9,y:-38}).wait(1).to({graphics:mask_graphics_40,x:26.4,y:-37.4}).wait(1).to({graphics:mask_graphics_41,x:25.9,y:-36.9}).wait(1).to({graphics:mask_graphics_42,x:25.4,y:-36.4}).wait(1).to({graphics:mask_graphics_43,x:24.9,y:-35.9}).wait(1).to({graphics:mask_graphics_44,x:24.5,y:-35.4}).wait(1).to({graphics:mask_graphics_45,x:24,y:-34.8}).wait(1).to({graphics:mask_graphics_46,x:23.5,y:-34.3}).wait(1).to({graphics:mask_graphics_47,x:23,y:-33.8}).wait(1).to({graphics:mask_graphics_48,x:22.5,y:-33.3}).wait(1).to({graphics:mask_graphics_49,x:22,y:-32.8}).wait(1).to({graphics:mask_graphics_50,x:21.6,y:-32.3}).wait(1).to({graphics:mask_graphics_51,x:21.1,y:-31.7}).wait(1).to({graphics:mask_graphics_52,x:20.6,y:-31.2}).wait(1).to({graphics:mask_graphics_53,x:20.1,y:-30.7}).wait(1).to({graphics:mask_graphics_54,x:19.6,y:-30.2}).wait(1).to({graphics:mask_graphics_55,x:19.1,y:-29.7}).wait(1).to({graphics:mask_graphics_56,x:18.6,y:-29.1}).wait(1).to({graphics:mask_graphics_57,x:18.1,y:-28.7}).wait(1).to({graphics:mask_graphics_58,x:17.6,y:-28.1}).wait(1).to({graphics:mask_graphics_59,x:17.2,y:-27.6}).wait(1).to({graphics:mask_graphics_60,x:16.7,y:-27.1}).wait(1).to({graphics:mask_graphics_61,x:16.2,y:-26.6}).wait(1).to({graphics:mask_graphics_62,x:15.7,y:-26.1}).wait(1).to({graphics:mask_graphics_63,x:15.2,y:-25.5}).wait(1).to({graphics:mask_graphics_64,x:14.7,y:-25}).wait(1).to({graphics:mask_graphics_65,x:14.2,y:-24.5}).wait(1).to({graphics:mask_graphics_66,x:13.7,y:-24}).wait(1).to({graphics:mask_graphics_67,x:13.2,y:-23.5}).wait(1).to({graphics:mask_graphics_68,x:12.8,y:-23}).wait(1).to({graphics:mask_graphics_69,x:12.3,y:-22.4}).wait(1).to({graphics:mask_graphics_70,x:11.8,y:-21.9}).wait(1).to({graphics:mask_graphics_71,x:11.3,y:-21.4}).wait(1).to({graphics:mask_graphics_72,x:10.8,y:-20.9}).wait(1).to({graphics:mask_graphics_73,x:10.3,y:-20.4}).wait(1).to({graphics:mask_graphics_74,x:9.8,y:-19.8}).wait(1).to({graphics:mask_graphics_75,x:9.3,y:-19.3}).wait(1).to({graphics:mask_graphics_76,x:8.8,y:-18.8}).wait(1).to({graphics:mask_graphics_77,x:8.4,y:-18.3}).wait(1).to({graphics:mask_graphics_78,x:7.9,y:-17.8}).wait(1).to({graphics:mask_graphics_79,x:7.4,y:-17.3}).wait(1).to({graphics:mask_graphics_80,x:6.9,y:-16.8}).wait(1).to({graphics:mask_graphics_81,x:6.4,y:-16.2}).wait(1).to({graphics:mask_graphics_82,x:5.9,y:-15.7}).wait(1).to({graphics:mask_graphics_83,x:5.4,y:-15.2}).wait(1).to({graphics:mask_graphics_84,x:4.9,y:-14.7}).wait(1).to({graphics:mask_graphics_85,x:4.4,y:-14.2}).wait(1).to({graphics:mask_graphics_86,x:4,y:-13.7}).wait(1).to({graphics:mask_graphics_87,x:3.5,y:-13.1}).wait(1).to({graphics:mask_graphics_88,x:3,y:-12.6}).wait(1).to({graphics:mask_graphics_89,x:2.5,y:-12.1}).wait(1).to({graphics:mask_graphics_90,x:2,y:-11.6}).wait(1).to({graphics:mask_graphics_91,x:1.5,y:-11.1}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AnIHQQFQrCJBjd");
	this.shape.setTransform(2.8,-4.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(92));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34.2,-61.9,21.2,20.3);


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
(lib.WS_Cursive_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_444 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(444).call(this.frame_444).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(349.6,119.4,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[349.6,119.4,338.8,128.1,327.5,137.6,309.6,152.6,292.4,168.6,275.3,184.6,260,202.4,245.1,219.6,231.3,237.9,217.5,256.1,206.1,275.7,194.8,295.3,188.8,317,182.6,339.5,185.5,362.7,188.5,386.3,203.6,404.7,218.5,422.8,241.2,428.4,242.6,429,244.1,429.5]}},137).to({guide:{path:[244,429.5,259,434.8,278.6,431.3,300.2,427.4,319.6,417.6,339.1,407.9,353.9,391.4,368.8,374.9,368.7,352.4,368.6,327.6,347.9,315,326.8,302.2,304.9,313.5,284.9,323.7,272.6,342.5,259.7,362,252.2,384.2,250.4,389.5,248.9,394.8,246.9,401.4,245.3,408.2,243.3,416.9,241.9,425.6]}},135).wait(19).to({x:250,y:430},0).to({guide:{path:[250.1,430,288.6,421.7,322.4,451.8,356.4,481.8,363.2,488.7,366.6,492.2,377.3,483.7,388,475.2,406,454.7,441.9,413.7,477.4,393.6,511.4,374.4,629.5,443.8]}},144).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(247.2,409.5,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},272).wait(164));

	// arrow
	this.instance_1 = new lib.ar2("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(249.6,113.1,1,1,4,0,0,0.8,-0.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).wait(436));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_252 = new cjs.Graphics().p("AhcVbQB7nCGVjuQGejyHQB5QHQB5DzGeQDtGVhvHFg");
	var mask_graphics_253 = new cjs.Graphics().p("AhnWdQBqnGGMj9QGUkCHVBnQHUBoECGUQD9GMheHKg");
	var mask_graphics_254 = new cjs.Graphics().p("AhwXgQBZnKGBkMQGLkRHYBWQHYBWERGKQELGChMHNg");
	var mask_graphics_255 = new cjs.Graphics().p("Ah4YjQBInNF3kaQGAkgHbBEQHaBEEgF/QEaF4g7HPg");
	var mask_graphics_256 = new cjs.Graphics().p("Ah+ZnQA3nQFrkoQF1kuHdAyQHdAyEuF0QEoFtgpHRg");
	var mask_graphics_257 = new cjs.Graphics().p("AiDarQAmnSFgk1QFpk8HeAgQHfAfE8FpQE2FhgYHTg");
	var mask_graphics_258 = new cjs.Graphics().p("AiGbvQAUnTFUlCQFdlKHgAOQHfANFJFdQFDFVgGHTg");
	var mask_graphics_259 = new cjs.Graphics().p("ADDQFQFQlWHggEQHggFFWFQQFPFJAMHSMgkLAAXQACnTFIlQg");
	var mask_graphics_260 = new cjs.Graphics().p("ACmQSQFDljHfgXQHfgWFjFCQFbE8AeHSMgkIABuQgQnSE7lcg");
	var mask_graphics_261 = new cjs.Graphics().p("ACLQfQE1luHegpQHegpFuE1QFoEvAvHQMgkDADFQghnREulog");
	var mask_graphics_262 = new cjs.Graphics().p("ABxQuQEol6Hcg7QHcg7F6EnQFyEhBBHOMgj5AEdQgznQEflzg");
	var mask_graphics_263 = new cjs.Graphics().p("ABaQ+QEZmFHahNQHZhNGFEYQF9ETBSHMMgjtAFzQhEnOERl9g");
	var mask_graphics_264 = new cjs.Graphics().p("ABFRPQEKmQHWheQHXhfGPEJQGHEEBkHIMgjdAHKQhWnLECmHg");
	var mask_graphics_265 = new cjs.Graphics().p("AAzRgQD6mZHThwQHShxGZD6QGRD1B0HEMgjKAIgQhnnID0mRg");
	var mask_graphics_266 = new cjs.Graphics().p("AAmRvQDumhHPh+QHPh+GgDuQGYDqCCHAMgi6AJhQh0nEDomYg");
	var mask_graphics_267 = new cjs.Graphics().p("AAaR+QDimoHLiLQHMiLGmDhQGfDeCPG9MgioAKhQiBnBDcmeg");
	var mask_graphics_268 = new cjs.Graphics().p("AAQSNQDWmtHHiZQHGiZGuDWQGlDRCbG4MgiTALiQiOm9DQmlg");
	var mask_graphics_269 = new cjs.Graphics().p("AAHSdQDJmzHCimQHDimGzDJQGrDFCoG0Mgh9AMgQibm4DEmrg");
	var mask_graphics_270 = new cjs.Graphics().p("AAASuQC8m5G9izQG9izG5C8QGxC5C1GuMghlANgQiom0C4mwg");
	var mask_graphics_271 = new cjs.Graphics().p("AgGS/QCvm/G4i/QG4jAG+CvQG2CsDBGqMghMAOdQi0muCsm2g");
	var mask_graphics_272 = new cjs.Graphics().p("AgLTRQCinEGyjMQGyjNHDCjQG7CfDNGjMggwAPcQjAmqCfm6g");
	var mask_graphics_273 = new cjs.Graphics().p("AgPTjQCVnIGsjZQGsjZHICVQG/CSDaGeMggTAQYQjNmkCSm/g");
	var mask_graphics_274 = new cjs.Graphics().p("AgRT2QCHnMGmjmQGmjlHMCIQHDCFDlGXI/0RTQjYmdCFnDg");
	var mask_graphics_275 = new cjs.Graphics().p("AgSUJQB6nQGfjxQGfjyHQB7QHHB4DxGQI/TSOQjlmXB4nHg");
	var mask_graphics_276 = new cjs.Graphics().p("AgSUdQBtnTGYj+QGXj+HUBtQHKBrD9GJI+xTIQjwmQBqnKg");
	var mask_graphics_277 = new cjs.Graphics().p("AgQUxQBfnWGQkKQGRkJHWBgQHNBdEIGCI+MUAQj8mJBdnNg");
	var mask_graphics_278 = new cjs.Graphics().p("AgNVGQBRnZGJkVQGIkVHZBSQHQBQETF6I9mU4QkHmBBPnQg");
	var mask_graphics_279 = new cjs.Graphics().p("AgIVbQBDnbGAkgQGBkgHbBEQHSBCEeFyI8/VvQkSl6BCnSg");
	var mask_graphics_280 = new cjs.Graphics().p("AgCVxQA1ndF4ksQF4krHdA2QHUA1EoFqI8WWkQkdlyA1nTg");
	var mask_graphics_281 = new cjs.Graphics().p("AAFWOQAonfFvk2QFvk2HeAoQHWAoEzFgI7sXZQkolpAnnVg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(252).to({graphics:mask_graphics_252,x:218.3,y:195.5}).wait(1).to({graphics:mask_graphics_253,x:218.2,y:193.7}).wait(1).to({graphics:mask_graphics_254,x:218.2,y:191.8}).wait(1).to({graphics:mask_graphics_255,x:218.1,y:189.8}).wait(1).to({graphics:mask_graphics_256,x:218.1,y:187.9}).wait(1).to({graphics:mask_graphics_257,x:218.1,y:186}).wait(1).to({graphics:mask_graphics_258,x:218,y:184}).wait(1).to({graphics:mask_graphics_259,x:218,y:183.2}).wait(1).to({graphics:mask_graphics_260,x:217.9,y:185.6}).wait(1).to({graphics:mask_graphics_261,x:217.7,y:188}).wait(1).to({graphics:mask_graphics_262,x:217.4,y:190.5}).wait(1).to({graphics:mask_graphics_263,x:217,y:192.9}).wait(1).to({graphics:mask_graphics_264,x:216.6,y:195.3}).wait(1).to({graphics:mask_graphics_265,x:216,y:197.6}).wait(1).to({graphics:mask_graphics_266,x:215.6,y:199.5}).wait(1).to({graphics:mask_graphics_267,x:215.1,y:201.3}).wait(1).to({graphics:mask_graphics_268,x:214.5,y:203.1}).wait(1).to({graphics:mask_graphics_269,x:213.9,y:204.8}).wait(1).to({graphics:mask_graphics_270,x:213.3,y:206.6}).wait(1).to({graphics:mask_graphics_271,x:212.6,y:208.3}).wait(1).to({graphics:mask_graphics_272,x:211.8,y:210.1}).wait(1).to({graphics:mask_graphics_273,x:211.1,y:211.8}).wait(1).to({graphics:mask_graphics_274,x:210.2,y:213.4}).wait(1).to({graphics:mask_graphics_275,x:209.4,y:215.1}).wait(1).to({graphics:mask_graphics_276,x:208.5,y:216.7}).wait(1).to({graphics:mask_graphics_277,x:207.5,y:218.3}).wait(1).to({graphics:mask_graphics_278,x:206.5,y:219.9}).wait(1).to({graphics:mask_graphics_279,x:205.5,y:221.5}).wait(1).to({graphics:mask_graphics_280,x:204.4,y:223}).wait(1).to({graphics:mask_graphics_281,x:203.4,y:225.2}).wait(164));

	// number
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(20,1,1).p("Ao3IpQAck4A5icQA6icB+i/QB+jADHhmQDbhxDTCAQDPB+ABD4QABDgiWCvQiYCxkEBlQkDBljGgBQjFgBhygd");
	this.shape_1.setTransform(302,369);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(252).to({_off:false},0).wait(193));

	// Layer 9 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_199 = new cjs.Graphics().p("EALRAjhQnMiLjimnQjemfCBnBMAirAKeQiOG9meDfQkHCNkUAAQiqAAivg1g");
	var mask_1_graphics_200 = new cjs.Graphics().p("EAMOAj0QnUhtj9mYQj3mQBjnJMAjRAIRQhwHFmQD5QkdCxk6AAQiIAAiNgig");
	var mask_1_graphics_201 = new cjs.Graphics().p("EANOAkEQnahQkXmHQkQmABHnOMAjuAGBQhUHLl/ESQkwDYljAAQhlAAhpgRg");
	var mask_1_graphics_202 = new cjs.Graphics().p("EAOQAkOQndgxkvl1QkoluApnRMAkCADvQg3HQlsEpQlBEEmOAAQhBAAhEgHg");
	var mask_1_graphics_203 = new cjs.Graphics().p("EAPWAkUQnggTlGlhQk+laAMnTMAkMABcQgZHTlaE/QlNE0m/AAIg1gBg");
	var mask_1_graphics_204 = new cjs.Graphics().p("ADjfVQlUlFgSnUMAkNgA2QAFHTlFFVQlLFbnhAMIgfAAQnNAAlPlAg");
	var mask_1_graphics_205 = new cjs.Graphics().p("EAEZAgGQlokvgvnRMAkFgDKQAiHTkuFoQk1FwnfAqQg5AFg3AAQmaAAlEkQg");
	var mask_1_graphics_206 = new cjs.Graphics().p("EAFSAgzQl6kYhNnNMAj0gFbQA/HPkXF7QkdGDnbBIQhgAOhcAAQltAAk0jjg");
	var mask_1_graphics_207 = new cjs.Graphics().p("EAGNAhcQmMj+hpnIMAjagHrQBdHKj/GMQkEGTnVBmQiFAdh/AAQlEAAkii7g");
	var mask_1_graphics_208 = new cjs.Graphics().p("EAHMAiCQmcjliFnAMAi2gJ6QB5HDjlGbQjqGknOCDQimAwihAAQkeAAkMiWg");
	var mask_1_graphics_209 = new cjs.Graphics().p("EAIMAikQmpjLihm2MAiJgMGQCWG6jKGpQjPGynFCgQjGBGjCAAQj7AAj0h0g");
	var mask_1_graphics_210 = new cjs.Graphics().p("EAJPAjCQm1iwi9mrMAhUgOPQCyGwivG1QizG+m6C9QjjBhjkAAQjYAAjZhXg");
	var mask_1_graphics_211 = new cjs.Graphics().p("EAKUAjbQm/iTjYmeMAgWgQVQDNGliTG/QiXHImtDYQj9CAkHAAQi2AAi7g+g");
	var mask_1_graphics_212 = new cjs.Graphics().p("EALbAjxQnIh3jymQIfQyVQDnGWh2HIQh6HRmeDzQkVCikrAAQiVAAiagog");
	var mask_1_graphics_213 = new cjs.Graphics().p("EAMjAkCQnPhakLl/IeC0SQEAGHhZHOQhcHYmOEMQkpDJlSAAQhzAAh3gXg");
	var mask_1_graphics_214 = new cjs.Graphics().p("EANrAkOQnTg8kjluIct2JQEYF3g8HSQg+Hdl8ElQk7Dzl8AAQhPAAhTgLg");
	var mask_1_graphics_215 = new cjs.Graphics().p("EAO1AkWQnWgek6lbIbP36QEwFjgfHWQgfHflpE9QlJEhmrAAQgpAAgrgDg");
	var mask_1_graphics_216 = new cjs.Graphics().p("EAP+AkZQnXgBlPlGIZr5lQFFFQAAHWQgBHglVFUQlTFSnfAAIgCAAg");
	var mask_1_graphics_217 = new cjs.Graphics().p("EAEOAgEIYA7KQFaE6AdHWQAeHfk+FoQk/FpnfAdQgpADgoAAQmkAAlEkWg");
	var mask_1_graphics_218 = new cjs.Graphics().p("EAFHAgyIWP8oQFtEkA7HTQA8HcknF8QknF7ncA8QhRALhOAAQl1AAk1jpg");
	var mask_1_graphics_219 = new cjs.Graphics().p("EAGDAhcIUY9+QF/EMBYHOQBaHYkOGNQkOGOnYBaQh2AWhyAAQlKAAkji/g");
	var mask_1_graphics_220 = new cjs.Graphics().p("EAHBAiCISc/MQGPDzB2HHQB3HSj0GdQj1GenRB4QiZAniUAAQkjAAkOiag");
	var mask_1_graphics_221 = new cjs.Graphics().p("EAICAilMAQbggUQGeDaCSG/QCUHJjZGsQjaGtnICUQi6A9i1AAQj/AAj2h4g");
	var mask_1_graphics_222 = new cjs.Graphics().p("EAJFAjDMAOWghSQGqC/CvG1QCxG/i+G5Qi+G5m+CyQjYBWjXAAQjcAAjbhbg");
	var mask_1_graphics_223 = new cjs.Graphics().p("EAKKAjdMAMNgiHQG2CjDKGpQDNGziiHEQiiHEmyDOQjzBzj5AAQi6AAi+hBg");
	var mask_1_graphics_224 = new cjs.Graphics().p("EALRAjzMAKBgi1QG/CIDkGbQDpGliFHOQiFHNmkDpQkMCUkdAAQiZAAidgrg");
	var mask_1_graphics_225 = new cjs.Graphics().p("EAMRAkFMAIBgjVQHHBtD7GOQEAGXhrHUQhqHVmWEAQkgC1k+AAQh7AAh/gbg");
	var mask_1_graphics_226 = new cjs.Graphics().p("EANSAkUMAGAgjvQHMBUERF+QEXGIhQHaQhPHZmHEXQkxDZljAAQhbAAhfgOg");
	var mask_1_graphics_227 = new cjs.Graphics().p("EAOUAkfMAD9gkBQHQA5EmFvQEtF3g1HdQg0Hel2EsQlAEAmKAAQg6AAg9gFg");
	var mask_1_graphics_228 = new cjs.Graphics().p("EAPWAkmMAB5gkMQHTAfE7FdQFBFlgZHgQgZHgllFBQlLErm1AAIgxgBg");
	var mask_1_graphics_229 = new cjs.Graphics().p("AQNAaQHUAFFOFKQFVFTACHgQADHglSFVQlLFPnUAJg");
	var mask_1_graphics_230 = new cjs.Graphics().p("APLAgQHTgXFgE3QFoE/AeHfQAdHfk9FoQk4FhnSAkg");
	var mask_1_graphics_231 = new cjs.Graphics().p("AOJArQHQgwFyEhQF5EqA5HcQA5HdkoF5QkjFynQA/g");
	var mask_1_graphics_232 = new cjs.Graphics().p("ANHA7QHNhKGCEMQGJETBUHZQBUHZkTGJQkNGCnLBZg");
	var mask_1_graphics_233 = new cjs.Graphics().p("AMFBRQHIhkGRD1QGYD9BvHTQBvHTj8GZQj3GQnFBzg");
	var mask_1_graphics_234 = new cjs.Graphics().p("ALFBtQHBh+GeDeQGnDlCJHMQCJHMjkGmQjgGem+CMg");
	var mask_1_graphics_235 = new cjs.Graphics().p("AKGCOQG5iYGqDHQGzDMCjHEQCjHDjMGyQjIGqm1Cmg");
	var mask_1_graphics_236 = new cjs.Graphics().p("AJIC0QGwixG0CvQG+CzC8G5QC9G6izG9QivG1mrC+g");
	var mask_1_graphics_237 = new cjs.Graphics().p("AILDgQGmjKG9CWQHHCZDWGuQDVGuiZHHQiWG+mfDWg");
	var mask_1_graphics_238 = new cjs.Graphics().p("AHREQQGZjhHGB8QHOB/DuGhQDuGhh/HPQh9HGmSDtg");
	var mask_1_graphics_239 = new cjs.Graphics().p("AGYFGQGMj5HMBiQHVBlEFGTQEFGThkHVQhjHMmEEEg");
	var mask_1_graphics_240 = new cjs.Graphics().p("AFiGAQF9kPHQBIQHaBKEcGDQEbGEhJHaQhIHQl1Eag");
	var mask_1_graphics_241 = new cjs.Graphics().p("AEtG/QFtkkHUAtQHeAvExFyQExFzgvHdQgtHUlkEvg");
	var mask_1_graphics_242 = new cjs.Graphics().p("AD7ICQFck4HVASQHgATFGFhQFFFhgTHfQgTHWlSFCg");
	var mask_1_graphics_243 = new cjs.Graphics().p("ADMJJQFJlLHWgJQHfgIFaFOQFZFNAIHgQAIHWk/FVg");
	var mask_1_graphics_244 = new cjs.Graphics().p("ACeKUQE2leHUgjQHfgjFsE5QFrE6AkHeQAjHVksFmg");
	var mask_1_graphics_245 = new cjs.Graphics().p("ABzLjQEilvHRg+QHcg+F9EkQF9EkA/HbQA9HTkXF2g");
	var mask_1_graphics_246 = new cjs.Graphics().p("ABLM1QEMl/HOhYQHXhZGNEOQGNEOBaHXQBYHOkBGGg");
	var mask_1_graphics_247 = new cjs.Graphics().p("AAnOKQD1mNHIhyQHSh0GbD3QGcD2B0HRQByHJjqGUg");
	var mask_1_graphics_248 = new cjs.Graphics().p("AAFPjQDfmbHAiMQHLiOGoDfQGpDfCPHJQCMHBjTGhg");
	var mask_1_graphics_249 = new cjs.Graphics().p("AgYQ9QDGmmG4ilQHBipG1DHQG1DGCoHBQCmG4i7Gsg");
	var mask_1_graphics_250 = new cjs.Graphics().p("AgySbQCtmxGui/QG3jBG/CtQHACtDBG3QC+GuiiG2g");
	var mask_1_graphics_251 = new cjs.Graphics().p("AhJT6QCUm6GjjXQGrjaHICUQHJCTDaGrQDWGiiIG+g");
	var mask_1_graphics_252 = new cjs.Graphics().p("AhcVbQB7nCGVjuQGejyHQB5QHQB5DzGeQDtGVhvHFg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(199).to({graphics:mask_1_graphics_199,x:216.1,y:232.6}).wait(1).to({graphics:mask_1_graphics_200,x:217,y:232.6}).wait(1).to({graphics:mask_1_graphics_201,x:217.8,y:232.5}).wait(1).to({graphics:mask_1_graphics_202,x:218.3,y:232.5}).wait(1).to({graphics:mask_1_graphics_203,x:218.6,y:232.5}).wait(1).to({graphics:mask_1_graphics_204,x:218.7,y:232.5}).wait(1).to({graphics:mask_1_graphics_205,x:218.6,y:232.6}).wait(1).to({graphics:mask_1_graphics_206,x:218.7,y:232.6}).wait(1).to({graphics:mask_1_graphics_207,x:218.7,y:232.7}).wait(1).to({graphics:mask_1_graphics_208,x:218.7,y:232.8}).wait(1).to({graphics:mask_1_graphics_209,x:218.7,y:232.8}).wait(1).to({graphics:mask_1_graphics_210,x:218.7,y:232.9}).wait(1).to({graphics:mask_1_graphics_211,x:218.6,y:232.9}).wait(1).to({graphics:mask_1_graphics_212,x:218.6,y:232.9}).wait(1).to({graphics:mask_1_graphics_213,x:218.5,y:232.9}).wait(1).to({graphics:mask_1_graphics_214,x:218.5,y:232.9}).wait(1).to({graphics:mask_1_graphics_215,x:218.4,y:232.9}).wait(1).to({graphics:mask_1_graphics_216,x:218.4,y:232.9}).wait(1).to({graphics:mask_1_graphics_217,x:218.4,y:233}).wait(1).to({graphics:mask_1_graphics_218,x:218.4,y:233.1}).wait(1).to({graphics:mask_1_graphics_219,x:218.4,y:233.1}).wait(1).to({graphics:mask_1_graphics_220,x:218.5,y:233.2}).wait(1).to({graphics:mask_1_graphics_221,x:218.5,y:233.3}).wait(1).to({graphics:mask_1_graphics_222,x:218.5,y:233.4}).wait(1).to({graphics:mask_1_graphics_223,x:218.5,y:233.4}).wait(1).to({graphics:mask_1_graphics_224,x:218.5,y:233.4}).wait(1).to({graphics:mask_1_graphics_225,x:218.5,y:233.6}).wait(1).to({graphics:mask_1_graphics_226,x:218.4,y:233.8}).wait(1).to({graphics:mask_1_graphics_227,x:218.3,y:234}).wait(1).to({graphics:mask_1_graphics_228,x:218.3,y:234.3}).wait(1).to({graphics:mask_1_graphics_229,x:218.2,y:234.5}).wait(1).to({graphics:mask_1_graphics_230,x:218.2,y:234.6}).wait(1).to({graphics:mask_1_graphics_231,x:218.3,y:234.5}).wait(1).to({graphics:mask_1_graphics_232,x:218.3,y:234.2}).wait(1).to({graphics:mask_1_graphics_233,x:218.3,y:233.7}).wait(1).to({graphics:mask_1_graphics_234,x:218.3,y:233}).wait(1).to({graphics:mask_1_graphics_235,x:218.3,y:232.2}).wait(1).to({graphics:mask_1_graphics_236,x:218.3,y:231.2}).wait(1).to({graphics:mask_1_graphics_237,x:218.3,y:230}).wait(1).to({graphics:mask_1_graphics_238,x:218.3,y:228.6}).wait(1).to({graphics:mask_1_graphics_239,x:218.2,y:227.1}).wait(1).to({graphics:mask_1_graphics_240,x:218.2,y:225.4}).wait(1).to({graphics:mask_1_graphics_241,x:218.2,y:223.6}).wait(1).to({graphics:mask_1_graphics_242,x:218.1,y:221.6}).wait(1).to({graphics:mask_1_graphics_243,x:218.1,y:219.5}).wait(1).to({graphics:mask_1_graphics_244,x:218.1,y:217.2}).wait(1).to({graphics:mask_1_graphics_245,x:218.2,y:214.8}).wait(1).to({graphics:mask_1_graphics_246,x:218.2,y:212.4}).wait(1).to({graphics:mask_1_graphics_247,x:218.2,y:209.8}).wait(1).to({graphics:mask_1_graphics_248,x:218.3,y:207.1}).wait(1).to({graphics:mask_1_graphics_249,x:218.3,y:204.3}).wait(1).to({graphics:mask_1_graphics_250,x:218.3,y:201.5}).wait(1).to({graphics:mask_1_graphics_251,x:218.3,y:198.5}).wait(1).to({graphics:mask_1_graphics_252,x:218.3,y:195.5}).wait(193));

	// number
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(20,1,1).p("AjUmSQBdhdB3g9QDbhxDTCAQDPB+ABD4QABDgiWCvQiYCxkEBlQkDBljGgBQjFgBg8gR");
	this.shape_2.setTransform(304.7,369);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(20,1,1).p("Ap9JQQAmjiBJjYQBLjdCBjDQB7i8DHhmQDbhxDTCAQDPB+ABD4QABDgiWCvQiYCxkEBlQkDBljGgBQjFgBg8gRg");
	this.shape_3.setTransform(304.7,369);

	var maskedShapeInstanceList = [this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2}]},199).to({state:[{t:this.shape_3}]},40).wait(206));

	// Layer 7 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_146 = new cjs.Graphics().p("ADEaKQjkmmCHnNQCHnNGmjmQGdjgHDB9MgKQAiwQm+iKjimdg");
	var mask_2_graphics_147 = new cjs.Graphics().p("ADmajQjxmfB5nRQB6nQGejzQGXjsHGBwMgJMAjCQnDh9jumWg");
	var mask_2_graphics_148 = new cjs.Graphics().p("AEJa8Qj+mXBsnUQBrnUGXj/QGPj5HJBiMgIIAjTQnGhvj6mPg");
	var mask_2_graphics_149 = new cjs.Graphics().p("AEtbVQkKmPBdnXQBenXGPkLQGHkFHMBUMgHEAjiQnJhikGmHg");
	var mask_2_graphics_150 = new cjs.Graphics().p("AFSbvQkWmIBPnaQBPnZGHkXQGAkQHOBGMgF/AjuQnMhUkSl+g");
	var mask_2_graphics_151 = new cjs.Graphics().p("AF4cIQkil/BBncQBBncF+kiQF3kcHQA4MgE6Aj5QnOhGkdl2g");
	var mask_2_graphics_152 = new cjs.Graphics().p("AGfchQkul2AzneQAzneF1kuQFukmHSAqMgD1AkBQnQg4koltg");
	var mask_2_graphics_153 = new cjs.Graphics().p("AHHc5Qk5lsAknfQAknfFtk5QFlkyHSAcMgCvAkIQnRgqkzllg");
	var mask_2_graphics_154 = new cjs.Graphics().p("AHvdSQlDljAVngQAWngFjlEQFbk8HUAOMgBqAkMQnSgck+lbg");
	var mask_2_graphics_155 = new cjs.Graphics().p("AIZdqQlPlZAIngQAHngFZlPQFSlGHTAAMgAjAkOQnUgOlHlSg");
	var mask_2_graphics_156 = new cjs.Graphics().p("AIxeDQlYlPgHnhQgHngFOlYQFIlRHTgOMAAjAkOIgCAAQnSAAlSlHg");
	var mask_2_graphics_157 = new cjs.Graphics().p("AI5eaQlilEgWngQgVngFDliQE+lbHTgcMABoAkMIgpABQm5AAlNkwg");
	var mask_2_graphics_158 = new cjs.Graphics().p("AJCexQlsk5gknfQgknfE5lsQEzlkHRgrMACuAkIQgoADgnAAQmiAAlGkZg");
	var mask_2_graphics_159 = new cjs.Graphics().p("AJLfHQl1kugzneQgyneEul1QEoltHQg4MAD0AkBQg7AGg5AAQmMAAlAkDg");
	var mask_2_graphics_160 = new cjs.Graphics().p("AJVfcQl+kjhBncQhAncEil+QEdl3HOhFMAE5Aj5QhNAKhKAAQl3AAk5jug");
	var mask_2_graphics_161 = new cjs.Graphics().p("AJgfwQmHkXhPnaQhPnaEXmHQESl/HMhSMAF9AjuQheAPhcAAQliAAkxjag");
	var mask_2_graphics_162 = new cjs.Graphics().p("EAJrAgEQmPkMhdnYQhdnXEMmPQEGmHHJhgMAHBAjiQhwAVhsAAQlPAAkojGg");
	var mask_2_graphics_163 = new cjs.Graphics().p("EAJ3AgWQmXkAhqnUQhrnVD/mWQD6mPHHhuMAIEAjUQiBAch8AAQk8AAkfi0g");
	var mask_2_graphics_164 = new cjs.Graphics().p("EAKEAgoQmej0h5nRQh4nRDymeQDvmWHCh7MAJIAjDQiRAkiMAAQkrAAkUiig");
	var mask_2_graphics_165 = new cjs.Graphics().p("EAKRAg4QmljniHnNQiFnNDlmlQDjmdG+iJMAKKAixQigAticAAQkZAAkKiSg");
	var mask_2_graphics_166 = new cjs.Graphics().p("EAKfAhIQmsjaiUnJQiUnJDZmsQDWmkG7iVMALLAidQivA2irAAQkJAAj+iCg");
	var mask_2_graphics_167 = new cjs.Graphics().p("EAKtAhXQmyjOiinEQihnEDNmyQDJmqG2ikMAMNAiIQi+BBi7AAQj4AAjzhzg");
	var mask_2_graphics_168 = new cjs.Graphics().p("EAK8AhlQm4jBivm/Qium/C/m4QC9mwGwixMANOAhwQjMBNjLAAQjoAAjmhlg");
	var mask_2_graphics_169 = new cjs.Graphics().p("EALMAhyQm+izi8m6Qi8m6Czm+QCvm0Gsi+MAONAhVQjaBajaAAQjYAAjZhYg");
	var mask_2_graphics_170 = new cjs.Graphics().p("EALcAh/QnDinjJm0QjJm0ClnDQCjm5GljLMAPMAg6QjmBmjrAAQjIAAjLhKg");
	var mask_2_graphics_171 = new cjs.Graphics().p("EALsAiKQnHiZjWmuQjWmuCYnHQCVm+GfjXMAQLAgcQjzB0j7AAQi5AAi9g/g");
	var mask_2_graphics_172 = new cjs.Graphics().p("EAL9AiUQnMiLjimoQjimnCLnMQCInCGYjjIRHf9Qj/CDkLAAQipAAivg1g");
	var mask_2_graphics_173 = new cjs.Graphics().p("EAMOAieQnPh+jvmhQjumhB+nPQB6nHGSjuISBfcQkJCTkcAAQiaAAiggrg");
	var mask_2_graphics_174 = new cjs.Graphics().p("EAMgAimQnThwj7maQj6maBxnTQBtnJGKj7IS8e6QkUCkktAAQiLAAiQgjg");
	var mask_2_graphics_175 = new cjs.Graphics().p("EAMzAiuQnWhjkHmSQkGmTBjnWQBfnMGEkGIT0eWQkdC0lAAAQh6AAiAgag");
	var mask_2_graphics_176 = new cjs.Graphics().p("EANGAi0QnZhVkTmKQkRmLBVnYQBTnQF7kQIUsdvQkmDHlSAAQhrAAhvgUg");
	var mask_2_graphics_177 = new cjs.Graphics().p("EANZAi6QnbhIkemCQkdmCBHnbQBGnSFzkbIVjdIQkvDallAAQhbAAhegOg");
	var mask_2_graphics_178 = new cjs.Graphics().p("EANtAi+Qndg5kpl6Qkol6A5ncQA4nUFqkmIWZcfQk2Dtl6AAQhKAAhMgJg");
	var mask_2_graphics_179 = new cjs.Graphics().p("EAOBAjCQnfgskzlxQkzlxArneQAqnVFikwIXNb1Qk9EBmPAAQg5AAg6gFg");
	var mask_2_graphics_180 = new cjs.Graphics().p("EAOVAjFQnfgek/loQk9loAdnfQAdnWFYk7IYBbJQlEEXmlAAQgnAAgogCg");
	var mask_2_graphics_181 = new cjs.Graphics().p("EAOqAjGQnggQlJleQlHleAPngQAPnXFPlFIYzacQlKEtm8AAIgqgBg");
	var mask_2_graphics_182 = new cjs.Graphics().p("EAO/AjHQnggClTlVQlSlUACngQABnXFGlPIZjZtQlPFEnVAAIgDAAg");
	var mask_2_graphics_183 = new cjs.Graphics().p("ACYeIQlblLgNngQgMnWE7lYIaTY8QlHFPnWAMIgiABQnLAAlQk/g");
	var mask_2_graphics_184 = new cjs.Graphics().p("AClefQlllBganfQgbnWEylhIbAYKQk8FYnWAbQgkACgkAAQmzAAlLkog");
	var mask_2_graphics_185 = new cjs.Graphics().p("ACze1Qluk2gpnfQgnnVEnlqIbsXYQkyFhnVAoQg3AFg1AAQmdAAlFkSg");
	var mask_2_graphics_186 = new cjs.Graphics().p("ADCfKQl3krg2ndQg2nUEelyIcWWjQkoFqnTA2QhKAIhGAAQmHAAk/j9g");
	var mask_2_graphics_187 = new cjs.Graphics().p("ADSfeQl/kghFnbQhDnSETl6Ic/VtQkdFznSBDQhbANhXAAQlzAAk3jpg");
	var mask_2_graphics_188 = new cjs.Graphics().p("ADjfyQmIkVhSnZQhQnQEHmCIdnU3QkSF7nQBRQhsAShoAAQlfAAkvjVg");
	var mask_2_graphics_189 = new cjs.Graphics().p("EAD1AgFQmQkJhfnXQhenND8mKIeNUAQkHGCnNBeQh9AZh4AAQlMAAknjCg");
	var mask_2_graphics_190 = new cjs.Graphics().p("EAEIAgXQmXj+hunTQhrnLDwmQIeyTGQj8GKnKBsQiNAhiHAAQk7AAkdixg");
	var mask_2_graphics_191 = new cjs.Graphics().p("EAEcAgoQmfjxh7nQQh4nIDkmXIfVSMQjxGRnGB5QidAqiXAAQkpAAkTigg");
	var mask_2_graphics_192 = new cjs.Graphics().p("EAExAg4QmmjliInMQiGnEDZmeIf1RSQjkGYnDCGQisAzinAAQkYAAkIiQg");
	var mask_2_graphics_193 = new cjs.Graphics().p("EAFGAhIQmsjZiVnIQiTm/DMmlMAgVAQWQjZGfm+CTQi7A9i2AAQkHAAj+iAg");
	var mask_2_graphics_194 = new cjs.Graphics().p("EAFdAhWQmyjMijnDQigm7DAmqMAgzAPZQjNGlm6CgQjJBIjFAAQj3AAjyhyg");
	var mask_2_graphics_195 = new cjs.Graphics().p("EAF0AhkQm4i/iwm/Qitm2C0mvMAhPAOcQjBGqm1CtQjWBUjVAAQjnAAjmhkg");
	var mask_2_graphics_196 = new cjs.Graphics().p("EAGMAhxQm9iyi9m5Qi5mxCnm1MAhoANeQi0GvmwC6QjjBhjkAAQjYAAjZhXg");
	var mask_2_graphics_197 = new cjs.Graphics().p("EAGlAh+QnCimjKmzQjGmsCbm5MAiAAMeQinG1mrDGQjvBvj0AAQjIAAjMhKg");
	var mask_2_graphics_198 = new cjs.Graphics().p("EAG/AiJQnHiYjWmuQjSmlCNm+MAiXALfQiaG5mlDTQj8B9kEAAQi5AAi9g/g");
	var mask_2_graphics_199 = new cjs.Graphics().p("EAHaAiTQnMiKjimnQjemfCAnCMAirAKeQiNG+mfDfQkGCMkVAAQipAAivg1g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(146).to({graphics:mask_2_graphics_146,x:152.4,y:222.5}).wait(1).to({graphics:mask_2_graphics_147,x:150.7,y:223}).wait(1).to({graphics:mask_2_graphics_148,x:148.9,y:223.4}).wait(1).to({graphics:mask_2_graphics_149,x:147.2,y:223.8}).wait(1).to({graphics:mask_2_graphics_150,x:145.5,y:224.1}).wait(1).to({graphics:mask_2_graphics_151,x:143.7,y:224.4}).wait(1).to({graphics:mask_2_graphics_152,x:142,y:224.6}).wait(1).to({graphics:mask_2_graphics_153,x:140.2,y:224.8}).wait(1).to({graphics:mask_2_graphics_154,x:138.5,y:224.9}).wait(1).to({graphics:mask_2_graphics_155,x:136.7,y:225}).wait(1).to({graphics:mask_2_graphics_156,x:136.7,y:225}).wait(1).to({graphics:mask_2_graphics_157,x:138.4,y:225}).wait(1).to({graphics:mask_2_graphics_158,x:140.1,y:225}).wait(1).to({graphics:mask_2_graphics_159,x:141.9,y:225}).wait(1).to({graphics:mask_2_graphics_160,x:143.6,y:225}).wait(1).to({graphics:mask_2_graphics_161,x:145.3,y:225}).wait(1).to({graphics:mask_2_graphics_162,x:147,y:225}).wait(1).to({graphics:mask_2_graphics_163,x:148.7,y:225}).wait(1).to({graphics:mask_2_graphics_164,x:150.4,y:225}).wait(1).to({graphics:mask_2_graphics_165,x:152,y:225}).wait(1).to({graphics:mask_2_graphics_166,x:153.6,y:225}).wait(1).to({graphics:mask_2_graphics_167,x:155.3,y:225}).wait(1).to({graphics:mask_2_graphics_168,x:156.9,y:225}).wait(1).to({graphics:mask_2_graphics_169,x:158.5,y:225}).wait(1).to({graphics:mask_2_graphics_170,x:160,y:224.9}).wait(1).to({graphics:mask_2_graphics_171,x:161.6,y:224.9}).wait(1).to({graphics:mask_2_graphics_172,x:163.1,y:224.9}).wait(1).to({graphics:mask_2_graphics_173,x:164.5,y:224.9}).wait(1).to({graphics:mask_2_graphics_174,x:166,y:224.9}).wait(1).to({graphics:mask_2_graphics_175,x:167.4,y:224.8}).wait(1).to({graphics:mask_2_graphics_176,x:168.8,y:224.8}).wait(1).to({graphics:mask_2_graphics_177,x:170.2,y:224.8}).wait(1).to({graphics:mask_2_graphics_178,x:171.5,y:224.7}).wait(1).to({graphics:mask_2_graphics_179,x:172.8,y:224.7}).wait(1).to({graphics:mask_2_graphics_180,x:174.1,y:224.7}).wait(1).to({graphics:mask_2_graphics_181,x:175.4,y:224.7}).wait(1).to({graphics:mask_2_graphics_182,x:176.6,y:224.7}).wait(1).to({graphics:mask_2_graphics_183,x:177.8,y:224.7}).wait(1).to({graphics:mask_2_graphics_184,x:178.9,y:224.7}).wait(1).to({graphics:mask_2_graphics_185,x:180,y:224.7}).wait(1).to({graphics:mask_2_graphics_186,x:181.1,y:224.7}).wait(1).to({graphics:mask_2_graphics_187,x:182.1,y:224.7}).wait(1).to({graphics:mask_2_graphics_188,x:183.1,y:224.7}).wait(1).to({graphics:mask_2_graphics_189,x:184.1,y:224.7}).wait(1).to({graphics:mask_2_graphics_190,x:185,y:224.8}).wait(1).to({graphics:mask_2_graphics_191,x:185.9,y:224.8}).wait(1).to({graphics:mask_2_graphics_192,x:186.7,y:224.8}).wait(1).to({graphics:mask_2_graphics_193,x:187.5,y:224.8}).wait(1).to({graphics:mask_2_graphics_194,x:188.3,y:224.8}).wait(1).to({graphics:mask_2_graphics_195,x:189,y:224.8}).wait(1).to({graphics:mask_2_graphics_196,x:189.6,y:224.8}).wait(1).to({graphics:mask_2_graphics_197,x:190.2,y:224.8}).wait(1).to({graphics:mask_2_graphics_198,x:190.8,y:224.8}).wait(1).to({graphics:mask_2_graphics_199,x:191.3,y:224.8}).wait(246));

	// Layer 6
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(20,1,1).p("ACHpbQCVgaCSBYQDPB+ABD4QABDgiWCvQiYCxkEBlQkDBljGgBQjFgBg8gR");
	this.shape_4.setTransform(304.7,369);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(20,1,1).p("Ai9moQBUhOBpg2QDbhxDTCAQDPB+ABD4QABDgiWCvQiYCxkEBlQkDBljGgBQjFgBg8gR");
	this.shape_5.setTransform(304.7,369);

	var maskedShapeInstanceList = [this.shape_4,this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4}]},146).to({state:[{t:this.shape_5}]},16).wait(283));

	// mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_114 = new cjs.Graphics().p("AjePjQDPmyHDihQHFihGxDOQGqDKCjG2MgiIAMKQiWm7DJmpg");
	var mask_3_graphics_115 = new cjs.Graphics().p("AjmPyQDCm4G/iuQG/iuG4DBQGvC9CwGxMghwANKQikm2C9mvg");
	var mask_3_graphics_116 = new cjs.Graphics().p("AjsQBQC0m9G6i7QG6i8G9C0QG0CxC9GsMghWAOJQiwmxCwm1g");
	var mask_3_graphics_117 = new cjs.Graphics().p("AjxQRQCnnCG0jIQG0jJHCCnQG6CkDJGmMgg6APHQi+mrCkm6g");
	var mask_3_graphics_118 = new cjs.Graphics().p("Aj1QiQCanHGujVQGujVHHCZQG+CXDWGgMggeAQEQjJmlCWm+g");
	var mask_3_graphics_119 = new cjs.Graphics().p("Aj3QzQCMnLGnjiQGojiHMCMQHCCKDiGZI/+RCQjWmgCJnCg");
	var mask_3_graphics_120 = new cjs.Graphics().p("Aj4REQB/nPGgjuQGhjuHPB+QHHB9DtGSI/dR+QjimaB8nGg");
	var mask_3_graphics_121 = new cjs.Graphics().p("Aj4RWQBynSGZj7QGaj6HSBxQHKBvD5GLI+6S4QjumSBunKg");
	var mask_3_graphics_122 = new cjs.Graphics().p("Aj2RpQBknWGRkGQGTkGHVBjQHNBhEFGEI+WTyQj5mMBgnMg");
	var mask_3_graphics_123 = new cjs.Graphics().p("AjyR8QBVnZGKkSQGKkSHZBWQHPBTEQF8I9vUrQkGmEBUnPg");
	var mask_3_graphics_124 = new cjs.Graphics().p("AjuSQQBInbGBkeQGDkdHaBHQHSBGEbFzI9IVjQkQl8BFnRg");
	var mask_3_graphics_125 = new cjs.Graphics().p("AjoSjQA6ncF5kpQF6kpHcA5QHUA4EmFsI8fWYQkblzA3nUg");
	var mask_3_graphics_126 = new cjs.Graphics().p("AjgS4QArnfFwkzQFxk0HeArQHVAqExFjI71XNQkllrAqnUg");
	var mask_3_graphics_127 = new cjs.Graphics().p("AjXTNQAdngFnk+QFnk/HgAdQHWAdE7FZI7IYBQkwliAcnVg");
	var mask_3_graphics_128 = new cjs.Graphics().p("AjNTiQAPngFdlJQFelJHgAPQHXAOFFFQI6aY0Qk6lZAOnWg");
	var mask_3_graphics_129 = new cjs.Graphics().p("AjBT3QABngFTlTQFUlTHgAAQHXABFPFGI5rZlQlElPABnXg");
	var mask_3_graphics_130 = new cjs.Graphics().p("Ai1UNQgNngFKldQFKldHggNQHWgNFZE8I46aUQlOlGgOnWg");
	var mask_3_graphics_131 = new cjs.Graphics().p("AimUjQgbnfE+lnQFAlnHfgbQHWgbFiEyI4IbDQlXk8gbnWg");
	var mask_3_graphics_132 = new cjs.Graphics().p("AiXU6QgpnfE0lwQE1lwHegpQHVgpFrEoI3UbvQlhkygpnUg");
	var mask_3_graphics_133 = new cjs.Graphics().p("AiGVQQg3ndEpl4QEql5Hdg4QHUg2FyEcI2ecbQlqkng3nUg");
	var mask_3_graphics_134 = new cjs.Graphics().p("Ah0VoQhFncEemBQEfmCHbhFQHShEF7ERI1pdEQlykchFnRg");
	var mask_3_graphics_135 = new cjs.Graphics().p("AhgV/QhTnZESmKQETmKHZhTQHQhRGDEFI0ydsQl6kRhSnPg");
	var mask_3_graphics_136 = new cjs.Graphics().p("AhLWWQhinWEHmSQEImRHWhiQHNheGKD5Iz4eTQmDkGhfnNg");
	var mask_3_graphics_137 = new cjs.Graphics().p("Ag1WuQhvnTD6mZQD8maHThvQHKhsGSDuIy/e3QmLj6hsnKg");
	var mask_3_graphics_138 = new cjs.Graphics().p("AgeXGQh9nQDvmgQDvmhHQh9QHGh5GZDiIyEfaQmSjvh6nGg");
	var mask_3_graphics_139 = new cjs.Graphics().p("AgGXeQiKnMDimnQDjmnHMiLQHDiHGfDWIxJf7QmZjjiHnCg");
	var mask_3_graphics_140 = new cjs.Graphics().p("AATX2QiXnHDWmuQDWmuHIiYQG+iUGmDJMgQMAgbQmgjWiVm/g");
	var mask_3_graphics_141 = new cjs.Graphics().p("AAuYPQiknDDIm0QDKm0HDimQG6ihGrC9MgPOAg5QmmjLiim5g");
	var mask_3_graphics_142 = new cjs.Graphics().p("ABKYnQiym+C8m5QC9m6G+izQG1iuGwCxMgOQAhUQmri+ivm1g");
	var mask_3_graphics_143 = new cjs.Graphics().p("ABnZAQi/m5Cvm/QCwm/G4i/QGwi7G1CjMgNRAhuQmwixi8mvg");
	var mask_3_graphics_144 = new cjs.Graphics().p("ACFZYQjLmyChnEQCjnEGyjNQGqjHG6CWMgMRAiGQm1ikjJmqg");
	var mask_3_graphics_145 = new cjs.Graphics().p("ACkZxQjYmsCUnJQCWnJGsjZQGkjUG+CKMgLQAicQm7iXjVmkg");
	var mask_3_graphics_146 = new cjs.Graphics().p("ADEaKQjkmmCHnNQCHnNGmjmQGdjgHDB9MgKQAiwQm+iKjimdg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(114).to({graphics:mask_3_graphics_114,x:191.1,y:186.3}).wait(1).to({graphics:mask_3_graphics_115,x:190.5,y:187.9}).wait(1).to({graphics:mask_3_graphics_116,x:189.8,y:189.5}).wait(1).to({graphics:mask_3_graphics_117,x:189.1,y:191}).wait(1).to({graphics:mask_3_graphics_118,x:188.4,y:192.5}).wait(1).to({graphics:mask_3_graphics_119,x:187.6,y:194.1}).wait(1).to({graphics:mask_3_graphics_120,x:186.7,y:195.6}).wait(1).to({graphics:mask_3_graphics_121,x:185.8,y:197}).wait(1).to({graphics:mask_3_graphics_122,x:184.9,y:198.5}).wait(1).to({graphics:mask_3_graphics_123,x:183.9,y:199.9}).wait(1).to({graphics:mask_3_graphics_124,x:182.9,y:201.3}).wait(1).to({graphics:mask_3_graphics_125,x:181.9,y:202.6}).wait(1).to({graphics:mask_3_graphics_126,x:180.8,y:203.9}).wait(1).to({graphics:mask_3_graphics_127,x:179.7,y:205.2}).wait(1).to({graphics:mask_3_graphics_128,x:178.5,y:206.5}).wait(1).to({graphics:mask_3_graphics_129,x:177.3,y:207.7}).wait(1).to({graphics:mask_3_graphics_130,x:176.1,y:208.9}).wait(1).to({graphics:mask_3_graphics_131,x:174.8,y:210.1}).wait(1).to({graphics:mask_3_graphics_132,x:173.5,y:211.2}).wait(1).to({graphics:mask_3_graphics_133,x:172.1,y:212.3}).wait(1).to({graphics:mask_3_graphics_134,x:170.8,y:213.3}).wait(1).to({graphics:mask_3_graphics_135,x:169.4,y:214.3}).wait(1).to({graphics:mask_3_graphics_136,x:167.9,y:215.3}).wait(1).to({graphics:mask_3_graphics_137,x:166.5,y:216.2}).wait(1).to({graphics:mask_3_graphics_138,x:165,y:217.1}).wait(1).to({graphics:mask_3_graphics_139,x:163.5,y:217.9}).wait(1).to({graphics:mask_3_graphics_140,x:162,y:218.7}).wait(1).to({graphics:mask_3_graphics_141,x:160.4,y:219.5}).wait(1).to({graphics:mask_3_graphics_142,x:158.8,y:220.2}).wait(1).to({graphics:mask_3_graphics_143,x:157.2,y:220.8}).wait(1).to({graphics:mask_3_graphics_144,x:155.6,y:221.4}).wait(1).to({graphics:mask_3_graphics_145,x:154,y:222}).wait(1).to({graphics:mask_3_graphics_146,x:152.4,y:222.5}).wait(299));

	// Layer 3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(20,1,1).p("AOKKPQAOA5ABBCQABDhiWCvQiYCxkEBlQkFBljEgBQjDgCg9gOQgBAAAAgBQjig3iVi1QiXi4gejsQgdjoA6jgQA6jhBujHQBujGCRiwQCRiwCVitQCYiyCrigQCrigC0iWQBxhfBxhc");
	this.shape_6.setTransform(276.4,274.4);
	this.shape_6._off = true;

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(114).to({_off:false},0).wait(331));

	// mask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_9 = new cjs.Graphics().p("AhmD3Qgmgpgwg9Qgxg9ggguQgfgsAEgDIFnkTQADgDAlApQAlApAyA9QAxA9AfAtQAfAtgDADIlnETIgBAAQgGAAgigmg");
	var mask_4_graphics_10 = new cjs.Graphics().p("AhsEGQgmgqgxg+Qgyg/ggguQgfguAEgDIF0ksQADgDAmAqQAlAqAyA+QAyA/AfAtQAgAvgEADIlzErIgBABQgHAAgigng");
	var mask_4_graphics_11 = new cjs.Graphics().p("AhyEVQgmgrgyg/QgyhAghgwQgggvAFgDIGAlEQAEgDAmAqQAmArAzBAQAyA/AgAvQAgAwgEAEImAFDIgBAAQgHAAgjgng");
	var mask_4_graphics_12 = new cjs.Graphics().p("Ah3EkQgngsgzhAQgyhBghgxQgggwAEgEIGOlcQADgEAnArQAnArAzBCQAzBBAgAvQAgAygEAEImNFbIgBABQgHAAgjgog");
	var mask_4_graphics_13 = new cjs.Graphics().p("Ah9EzQgogsgyhDQg0hCghgyQgggxAEgEIGbl1QADgEAoAsQAnAsA0BDQAzBCAgAxQAhAygEAEImaF0IgBABQgIAAgjgog");
	var mask_4_graphics_14 = new cjs.Graphics().p("AiDFCQgogtgzhEQg0hDgigzQgggzAEgEIGnmNQAEgEAoAsQAoAtA0BEQA0BEAhAxQAhA0gEAEImnGNIgCAAQgHAAgkgog");
	var mask_4_graphics_15 = new cjs.Graphics().p("AiIFQQgpgtg0hFQg0hEgig0Qghg0AFgFIG0mlQAEgFAoAtQAoAuA1BFQA1BFAhAzQAhA1gEAEIm0GlIgBABQgJAAgjgqg");
	var mask_4_graphics_16 = new cjs.Graphics().p("AiOFfQgpgug1hGQg1hGgig1Qghg1AFgFIHBm+QAEgEApAuQAoAuA2BGQA1BGAhA0QAiA2gEAFInBG+IgBAAQgJAAgkgqg");
	var mask_4_graphics_17 = new cjs.Graphics().p("AiUFuQgpgvg2hHQg1hIgjg2Qghg2AFgFIHOnWQAEgFApAuQAqAvA2BIQA1BHAiA2QAiA3gFAFInNHWIgCABQgIAAglgrg");
	var mask_4_graphics_18 = new cjs.Graphics().p("AiaF9Qgqgwg2hIQg2hJgjg3Qgig3AGgGIHanvQAFgFAqAvQAqAwA2BJQA3BJAiA2QAiA4gFAGInaHuIgCABQgJAAglgrg");
	var mask_4_graphics_19 = new cjs.Graphics().p("AifGMQgrgwg2hKQg3hKgjg5Qgig4AFgGIHooHQAEgGArAwQAqAxA3BKQA3BKAjA4QAiA5gFAFInnIHIgCABQgJAAglgrg");
	var mask_4_graphics_20 = new cjs.Graphics().p("AilGbQgrgxg3hLQg3hMgkg5Qgig6AFgFIH1ogQAEgGArAxQArAxA4BLQA4BMAiA4QAjA7gFAFIn0IgIgCABQgJAAgmgsg");
	var mask_4_graphics_21 = new cjs.Graphics().p("AirGqQgrgyg4hNQg4hMgkg7Qgig6AFgGIIBo5QAFgGAsAyQArAyA5BNQA4BMAjA6QAjA7gFAGIoBI4IgCABQgJAAgngsg");
	var mask_4_graphics_22 = new cjs.Graphics().p("AiwG5Qgsgzg4hOQg5hNgkg8Qgjg8AGgGIIOpRQAFgGAsAyQAsAzA5BOQA4BOAkA6QAjA9gFAGIoOJRIgCABQgKAAgmgtg");
	var mask_4_graphics_23 = new cjs.Graphics().p("Ai2HIQgsgzg5hQQg5hPglg8Qgjg9AGgHIIbppQAFgHAsAzQAtA0A5BPQA6BPAjA8QAkA+gFAGIobJpIgDABQgJAAgngtg");
	var mask_4_graphics_24 = new cjs.Graphics().p("Ai8HXQgtg0g5hRQg6hQglg+Qgjg+AGgHIInqCQAGgHAtA0QAtA0A6BRQA6BRAkA8QAkA/gGAHIonKCIgDABQgKAAgngug");
	var mask_4_graphics_25 = new cjs.Graphics().p("AjBHlQgug0g6hSQg6hSglg/Qgkg/AGgHII1qaQAFgIAuA1QAtA1A7BSQA7BSAkA9QAkBAgGAIIo0KaIgCABQgLAAgngvg");
	var mask_4_graphics_26 = new cjs.Graphics().p("AjHH0Qgug1g7hTQg6hTgmhAQgkhAAGgHIJCqzQAFgIAuA1QAuA2A8BTQA7BTAkA/QAlBCgGAHIpBKyIgDABQgLAAgngvg");
	var mask_4_graphics_27 = new cjs.Graphics().p("AjNIDQgug1g8hVQg7hUgmhBQgkhCAGgHIJOrMQAGgHAvA1QAuA3A8BVQA8BUAlBAQAlBCgGAIIpOLLIgDABQgLAAgogwg");
	var mask_4_graphics_28 = new cjs.Graphics().p("AjSISQgwg3g7hWQg8hVgnhCQgkhDAGgIIJbrjQAGgIAvA2QAvA3A9BWQA8BWAlBBQAmBDgGAIIpbLkIgDABQgLAAgogwg");
	var mask_4_graphics_29 = new cjs.Graphics().p("AjYIhQgvg3g9hYQg8hWgnhEQglhDAHgIIJor9QAGgIAvA3QAwA4A9BXQA9BXAlBCQAmBFgGAIIpoL8QgBABAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAQgLAAgpgxg");
	var mask_4_graphics_30 = new cjs.Graphics().p("AjeIwQgwg4g9hZQg9hYgnhEQglhFAHgIIJ0sVQAHgJAwA4QAwA5A+BZQA9BYAmBDQAmBGgHAIIp0MVQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgLAAgqgxg");
	var mask_4_graphics_31 = new cjs.Graphics().p("AjjI/Qgxg5g+haQg9hZgohGQglhFAHgJIKBstQAHgJAwA4QAxA6A+BaQA+BZAmBEQAnBHgHAJIqBMtQAAABgBAAQAAAAgBAAQAAAAAAABQgBAAAAAAQgMAAgpgyg");
	var mask_4_graphics_32 = new cjs.Graphics().p("AjpJOQgxg6g+hbQg+hagohHQgmhHAHgJIKPtGQAGgJAyA6QAxA6A/BbQA+BbAnBFQAmBIgHAJIqONFQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgLAAgqgyg");
	var mask_4_graphics_33 = new cjs.Graphics().p("AjuJdQgyg6g/hdQg/hcgohHQgmhJAHgJIKcteQAGgJAyA6QAyA7A/BcQA/BcAnBHQAnBJgHAJIqbNeQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgMAAgpgyg");
	var mask_4_graphics_34 = new cjs.Graphics().p("Aj0JsQgzg7g/heQg/hdgphJQgmhJAHgKIKot2QAHgKAzA7QAyA8BABdQBABeAnBHQAnBKgHAKIqoN2QAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgMAAgqgzg");
	var mask_4_graphics_35 = new cjs.Graphics().p("Aj6J7Qgyg8hBhfQg/hegphKQgnhLAIgJIK1uQQAHgKAzA8QAyA9BBBeQBABfAoBJQAnBLgHAKIq1OPQgBAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAQgMAAgrgzg");
	var mask_4_graphics_36 = new cjs.Graphics().p("Aj/KJQg0g8hAhhQhBhfgphLQgnhMAIgKILCunQAHgLAzA9QAzA9BCBgQBABgAoBKQAoBMgHAKIrCOoQgBAAAAABQgBAAAAAAQAAAAgBABQgBAAAAAAQgNAAgqg1g");
	var mask_4_graphics_37 = new cjs.Graphics().p("AkFKYQg0g9hBhiQhBhhgqhMQgnhMAIgLILOvAQAIgKA0A9QAzA+BCBhQBCBiAoBKQAoBOgIAKIrOPAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgNAAgrg1g");
	var mask_4_graphics_38 = new cjs.Graphics().p("AkLKnQg0g+hChjQhChigphNQgohOAIgKILbvZQAIgLA0A+QA0A/BDBiQBCBjAoBMQApBPgIAKIrcPYQAAABAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQgNAAgrg2g");
	var mask_4_graphics_39 = new cjs.Graphics().p("AkQK2Qg1g+hDhlQhChjgqhPQgohPAIgKILpvxQAHgLA1A+QA1BABDBjQBDBkAoBNQApBQgIALIroPxQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgOAAgrg2g");
	var mask_4_graphics_40 = new cjs.Graphics().p("AkWLFQg2g/hDhmQhChlgrhPQgohQAIgLIL1wKQAIgLA2A/QA1BABEBmQBDBlApBOQApBRgIALIr1QJQgBABAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgOAAgsg2g");
	var mask_4_graphics_41 = new cjs.Graphics().p("AkcLUQg2hAhEhnQhDhmgqhQQgphSAIgLIMCwiQAIgMA2BAQA2BBBEBnQBEBmApBPQAqBTgIALIsDQiQAAAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAQgNAAgtg3g");
	var mask_4_graphics_42 = new cjs.Graphics().p("AkhLjQg3hBhEhoQhEhngrhSQgphSAJgMIMPw6QAIgMA2BAQA2BCBFBoQBFBoApBQQAqBTgIAMIsPQ6QgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAQgOAAgsg3g");
	var mask_4_graphics_43 = new cjs.Graphics().p("AknLyQg3hBhFhqQhEhpgshSQgphUAJgMIMbxTQAJgMA3BBQA2BDBGBpQBFBpAqBRQAqBVgIAMIscRTQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQgOAAgtg4g");
	var mask_4_graphics_44 = new cjs.Graphics().p("AktMAQg3hChGhrQhFhqgrhTQgqhVAJgMIMoxsQAJgMA3BCQA3BDBHBrQBFBqAqBSQArBWgJAMIspRsQgBACgDAAQgOAAgug5g");
	var mask_4_graphics_45 = new cjs.Graphics().p("AkyMPQg4hChGhtQhGhrgshVQgqhWAJgMIM2yEQAIgMA4BCQA4BEBHBsQBGBsAqBTQArBXgJAMIs1SEQgCACgDAAQgPABgtg6g");
	var mask_4_graphics_46 = new cjs.Graphics().p("Ak4MfQg5hEhGhtQhGhtgthWQgqhXAJgMINCydQAJgNA5BEQA4BFBHBtQBHBtArBUQArBYgJAMItCSdQgCACgDAAQgPAAgug5g");
	var mask_4_graphics_47 = new cjs.Graphics().p("Ak+MtQg5hEhHhvQhHhugshXQgrhYAJgMINPy1QAJgOA5BEQA5BGBIBuQBHBvAsBVQArBZgJANItQS1QgBACgEAAQgPAAgug6g");
	var mask_4_graphics_48 = new cjs.Graphics().p("AlEM8Qg5hFhIhwQhHhvgthYQgrhZAJgNINczOQAJgNA6BFQA5BGBJBvQBHBwAsBXQAsBagJANItdTNQgBADgEAAQgPAAgvg7g");
	var mask_4_graphics_49 = new cjs.Graphics().p("AlJNLQg6hFhJhyQhHhwguhaQgrhaAKgNINpzmQAJgOA6BGQA6BHBJBwQBIBxAsBYQAsBbgJAOItpTmQgCACgEAAQgPAAgvg7g");
	var mask_4_graphics_50 = new cjs.Graphics().p("AlPNaQg6hGhKhzQhIhygthaQgshbAKgOIN1z+QAKgOA6BGQA7BIBJByQBJByAtBZQAsBcgKAOIt2T+QgCADgDAAQgPAAgwg8g");
	var mask_4_graphics_51 = new cjs.Graphics().p("AlVNpQg7hHhJh0QhJhzguhbQgshdAKgOIOC0XQAKgOA7BHQA7BJBKBzQBKBzAsBaQAtBegKANIuDUXQgCADgDAAQgQAAgwg8g");
	var mask_4_graphics_52 = new cjs.Graphics().p("AlaN4Qg8hIhKh1QhJh1gvhcQgsheAKgOIOQ0vQAJgPA8BIQA7BJBLB1QBKB1AtBbQAtBegKAOIuPUwQgCADgEAAQgQAAgwg9g");
	var mask_4_graphics_53 = new cjs.Graphics().p("AlgOGQg8hIhLh3QhKh1guheQgthfAKgOIOc1IQAKgPA8BJQA8BKBMB2QBLB2AtBcQAtBggKAOIudVIQgCADgDAAQgQAAgxg+g");
	var mask_4_graphics_54 = new cjs.Graphics().p("AlmOVQg8hJhMh4QhKh3gvheQgthgAKgPIOp1gQAKgPA9BJQA8BLBMB3QBMB3AtBdQAuBhgKAPIuqVgQgCAEgDAAQgRAAgxg/g");
	var mask_4_graphics_55 = new cjs.Graphics().p("AlrOjQg9hJhMh6QhLh4gvhfQgthhAKgPIO113QAKgQA9BKQA9BMBNB4QBMB5AuBeQAtBigKAPIu1V3QgCADgEAAQgRAAgxg/g");
	var mask_4_graphics_56 = new cjs.Graphics().p("AlwOxQg+hKhMh7QhMh5gwhhQgthiALgPIPA2OQALgPA9BKQA+BMBNB6QBMB6AuBfQAuBjgKAPIvBWOQgCADgEAAQgQAAgyg/g");
	var mask_4_graphics_57 = new cjs.Graphics().p("Al1O/Qg+hLhOh8QhMh6gwhiQgthjALgPIPM2lQALgQA+BLQA+BOBNB6QBNB7AvBgQAuBkgKAQIvOWkQgCAEgEAAQgRAAgxhAg");
	var mask_4_graphics_58 = new cjs.Graphics().p("Al7PNQg+hMhOh9QhMh8gxhiQguhkALgQIPZ27QALgQA+BLQA+BOBPB8QBNB8AvBhQAvBmgLAPIvZW7QgDAEgDAAQgRAAgzhAg");
	var mask_4_graphics_59 = new cjs.Graphics().p("AmAPbQg/hNhOh+QhNh9gxhjQguhmALgPIPk3SQALgRA/BNQA/BOBPB9QBOB+AvBiQAvBmgLAQIvlXSQgCADgEAAQgRAAgzhAg");
	var mask_4_graphics_60 = new cjs.Graphics().p("AmFPoQhAhNhOh/QhOh+gxhlQgvhmAMgQIPw3pQALgQA/BNQBABPBPB+QBPB/AvBjQAvBngKAQIvxXpQgDAEgEAAQgRAAgzhCg");
	var mask_4_graphics_61 = new cjs.Graphics().p("AmLP2QhAhNhPiBQhOh/gxhmQgvhnALgQIP94AQALgRA/BOQBABQBQB/QBPCAAwBkQAvBpgKAQIv9X/QgCAEgEAAQgSAAg0hCg");
	var mask_4_graphics_62 = new cjs.Graphics().p("AmQQEQhAhOhQiCQhPiBgxhmQgwhpAMgQIQI4WQAMgRBABOQBABRBRCAQBPCBAwBlQAwBqgLAQIwJYWQgCAEgFAAQgSAAgzhCg");
	var mask_4_graphics_63 = new cjs.Graphics().p("AmVQSQhBhPhRiDQhPiCgyhnQgvhqAMgQIQU4tQALgSBBBPQBBBSBRCBQBQCDAwBmQAwBqgLARIwVYtQgCADgEAAQgSAAg0hCg");
	var mask_4_graphics_64 = new cjs.Graphics().p("AmaQgQhChQhRiEQhQiDgyhpQgwhqAMgRIQh5EQALgRBBBPQBBBSBSCDQBRCEAwBnQAxBrgLARIwhZEQgCAEgFAAQgSAAg0hDg");
	var mask_4_graphics_65 = new cjs.Graphics().p("AmfQuQhChQhSiGQhQiEgzhqQgwhrAMgRIQs5bQAMgSBCBRQBBBSBTCEQBRCFAxBoQAwBtgLARIwtZaQgCAEgFAAQgSAAg0hDg");
	var mask_4_graphics_66 = new cjs.Graphics().p("AmlQ7QhChQhSiHQhRiGgzhqQgwhtAMgRIQ45xQAMgSBCBRQBCBTBTCFQBSCGAxBpQAxBugMARIw5ZyQgCAEgEAAQgTAAg1hFg");
	var mask_4_graphics_67 = new cjs.Graphics().p("AmqRJQhDhRhTiIQhRiHgzhrQgxhuANgSIRE6IQALgSBDBSQBDBUBTCHQBTCHAxBpQAxBwgMARIxEaIQgDAEgEAAQgTAAg1hFg");
	var mask_4_graphics_68 = new cjs.Graphics().p("AmvRXQhEhShTiJQhRiIg0htQgxhvANgRIRP6fQAMgTBDBTQBEBVBTCHQBUCJAxBqQAyBxgMARIxRafQgCAEgFAAQgTAAg1hFg");
	var mask_4_graphics_69 = new cjs.Graphics().p("Am1RlQhEhThTiKQhTiJg0huQgxhwANgSIRc61QAMgTBDBTQBEBWBUCJQBUCJAyBsQAyBxgMASIxda2QgCAEgFAAQgTAAg2hGg");
	var mask_4_graphics_70 = new cjs.Graphics().p("Am6RzQhEhUhUiLQhTiLg1huQgxhxANgSIRo7NQAMgTBEBUQBEBWBVCKQBUCLAyBtQAyBygMASIxobNQgDAEgEAAQgTAAg3hGg");
	var mask_4_graphics_71 = new cjs.Graphics().p("Am/SBQhFhUhViNQhTiMg1hvQgxhyANgTIRz7jQANgTBEBUQBFBYBVCLQBVCMAzBtQAyB0gMASIx1bjQgDAEgEAAQgUAAg2hGg");
	var mask_4_graphics_72 = new cjs.Graphics().p("AnESOQhGhUhViOQhUiNg1hxQgyhzANgSISA76QAMgUBFBVQBFBYBWCNQBWCNAyBuQAzB1gMATIyAb5QgDAFgFAAQgUAAg2hIg");
	var mask_4_graphics_73 = new cjs.Graphics().p("AnJScQhGhVhWiPQhViOg1hyQgyh0ANgTISM8QQAMgUBGBWQBFBYBXCOQBWCOAzBwQAzB1gNATIyMcRQgDAEgEAAQgUAAg3hIg");
	var mask_4_graphics_74 = new cjs.Graphics().p("AnPSqQhGhWhXiRQhViPg1hyQgzh2AOgTISX8nQANgUBGBXQBGBZBXCPQBWCPA0BxQAzB2gNAUIyYcnQgCAEgFAAQgUAAg4hIg");
	var mask_4_graphics_75 = new cjs.Graphics().p("AnUS4QhHhXhXiRQhViRg2hzQgzh3AOgTISj8+QANgUBGBXQBHBaBXCQQBXCRA0BxQAzB4gMATIykc+QgDAFgFAAQgUAAg4hJg");
	var mask_4_graphics_76 = new cjs.Graphics().p("AnZTGQhIhYhXiTQhWiRg2h1Qgzh3ANgUISw9UQANgVBGBYQBHBbBZCRQBXCSA0ByQA0B5gNAUIywdUQgDAFgFAAQgUAAg4hJg");
	var mask_4_graphics_77 = new cjs.Graphics().p("AnfTUQhIhYhYiUQhWiTg3h2Qgzh4AOgUIS79rQANgVBHBYQBIBcBZCSQBYCTA0B0QA0B6gNATIy8dsQgCAEgGAAQgUAAg5hJg");
	var mask_4_graphics_78 = new cjs.Graphics().p("AnkThQhIhYhZiWQhXiUg3h2Qgzh6AOgUITH+CQANgVBIBZQBIBcBZCUQBZCUA0B1QA1B7gNAUIzIeCQgDAFgFAAQgVAAg5hLg");
	var mask_4_graphics_79 = new cjs.Graphics().p("AnbTpIgJgLQhIhVhViJQhbiSg7h0Qg1h3ALgUITS+XQAOgWBHBUQBIBVBZCJIABACQAZAoAYApQA5BkAnBWIAQAoQAiBWgJASIhSCJQgkBAgmA7IwsaUQgDAFgGAAQgVAAg3hFg");
	var mask_4_graphics_80 = new cjs.Graphics().p("AnSTwIgJgKQhLhUhYiHQheiPg/hyQg2h1AHgUITd+rQAPgYBGBQQBJBOBaCAIABACIAyBSQA5BjAoBXIARApQAiBWgIATIhNCLQghBCglA6Iw0anQgEAHgGAAQgWAAg1hBg");
	var mask_4_graphics_81 = new cjs.Graphics().p("AnJT4IgJgJQhOhThbiEQhhiMhDhxQg4hyAEgVITo/AQAQgZBFBMQBKBGBaB5IABABQAYAlAbAtQA6BjAqBZIARApQAjBVgHAVIhICNQgfBEgkA6Iw8a5QgEAHgIAAQgWAAgzg7g");
	var mask_4_graphics_82 = new cjs.Graphics().p("AnAT/IgJgIQhRhSheiBQhjiKhIhvQg5hvABgVITy/VQARgaBEBIQBLA/BaBvIABACQAYAjAdAuQA6BkArBaIASAqQAjBUgGAWQghBIgiBHQgbBHglA5IxDbMQgFAIgIAAQgXAAgxg3g");
	var mask_4_graphics_83 = new cjs.Graphics().p("Am2UHIgKgIQhUhRhgh/QhniGhLhtQg7htgDgVIT+/qQARgbBEBDQBLA4BbBnIABABQAYAiAeAwQA7BjAsBdIASApQAjBVgEAXQgeBJggBHQgZBKgjA3IxMbgQgFAJgKAAQgWAAgvgyg");
	var mask_4_graphics_84 = new cjs.Graphics().p("AmtUOIgKgGQhWhQhjh9QhqiEhQhrQg8hqgGgVIUJ/+QASgdBCA/QBMAxBbBeIABABQAYAgAgAyQA8BjAtBeIATAqQAjBUgDAYQgbBKgeBIQgWBMgjA3IxUbzQgFAJgLAAQgXAAgtgtg");
	var mask_4_graphics_85 = new cjs.Graphics().p("AmkUVIgKgFQhZhPhmh6QhtiBhUhqQg+hngJgVMAUUggTQATgeBBA6QBNAqBbBWIACABQAXAdAiA0QA8BjAvBgIATArQAjBTgCAaQgYBLgcBIQgTBPgiA2IxccFQgHALgLAAQgXAAgrgpg");
	var mask_4_graphics_86 = new cjs.Graphics().p("AmaUdIgKgFQhdhOhoh3Qhxh+hXhoQhAhlgMgVMAUeggoQAUgfBBA2QBOAiBbBNIABABQAYAcAjA2QA8BjAxBhIATArQAkBTgBAbQgWBMgZBJQgRBSghA1IxkcYQgHAMgNAAQgXAAgogkg");
	var mask_4_graphics_87 = new cjs.Graphics().p("AmRUlIgKgEQhghNhrh0Qhzh8hchmIhRh4MAUqgg9QAUggBAAyQBPAbBcBFIABAAQAXAbAlA3QA9BjAyBjIAUArQAjBTABAcQgUBOgXBJQgNBUgiA0IxrcrQgIAOgPAAQgWAAgmggg");
	var mask_4_graphics_88 = new cjs.Graphics().p("AmIUsIgKgDQhjhLhthyQh3h6hghkQhChfgTgWMAU0ghSQAVghA/AtQBQAVBcA7IABABQAYAZAmA5QA9BjAzBkIAVAsQAjBSACAeQgQBOgVBKQgLBXggAzIx0c+QgJAPgQAAQgWAAgkgcg");
	var mask_4_graphics_89 = new cjs.Graphics().p("Al/U0IgKgDQhlhKhxhvIjejZQhEhdgVgWMAU/ghmQAVgjA+ApQBRANBcAzIACABQAXAXAoA6QA+BjA0BmIAVAtQAkBRADAfQgOBQgTBKQgHBZggAzIx8dRQgKARgSAAQgWAAghgYg");
	var mask_4_graphics_90 = new cjs.Graphics().p("Al2U7IgJgCQhphJhzhsIjmjVQhFhagZgWMAVKgh7QAXglA9AlQBRAGBdArIABAAQAXAVAqA9QA+BjA2BoIAVAsQAkBRAEAhQgLBQgQBMQgFBbggAyIyDdkQgLASgUAAQgVAAgfgUg");
	var mask_4_graphics_91 = new cjs.Graphics().p("AltVCIgJgBQhshHh2hqIjsjQQhHhYgdgWMAVWgiQQAXgmA8AhQBSgBBdAhIABABQAYATArA/QA/BiA3BqIAVAtQAlBQAFAiQgJBSgOBMQgCBegeAwIyMd3QgMAVgWAAQgUAAgdgRg");
	var mask_4_graphics_92 = new cjs.Graphics().p("AljVKIgKAAQhvhHh4hnIj0jLQhIhVgggXMAVggilQAYgmA8AcQBSgIBdAZIACAAQAXASAtBAQA/BiA4BsIAWAtQAlBQAGAjQgFBTgMBMQAABhgeAwIyTeKQgNAWgZAAQgTAAgZgNg");
	var mask_4_graphics_93 = new cjs.Graphics().p("AlaVSIgKAAQhyhFh6hlQiIhsh0hbQhKhSgjgXMAVrgi5QAZgpA7AYQBTgPBeAQIABABQAXAQAuBCQBABiA6BtIAXAuQAkBPAIAlQgCBTgKBOQADBjgeAvIybecQgPAagcAAQgRAAgWgKg");
	var mask_4_graphics_94 = new cjs.Graphics().p("AlRVeIgJACQh2hEh9hjQiLhph4hZQhLhPgngYMAV3gjOQAZgpA6ATQBUgWBeAIIACAAQAWAOAxBEQA/BiA8BvIAWAuQAmBPAIAmQAABUgHBOQAGBmgdAuIyjewQgRAcgeAAQgQAAgTgIg");
	var mask_4_graphics_95 = new cjs.Graphics().p("AlIVuIgKACQh4hDiAhgQiOhmh8hXQhNhNgqgYMAWBgjjQAbgqA5APQBVgeBegBIABAAQAXANAyBFQBABiA9BxIAXAuQAlBPAKAnQADBWgFBOQAJBpgdAtIyrfCQgSAggiAAQgNAAgQgFg");
	var mask_4_graphics_96 = new cjs.Graphics().p("ApJTiQiRhkiBhVQhOhLgtgXMAWMgj4QAbgsA4ALQBWglBfgJIABAAQAWAKA0BIQBBBhA+BzIAYAvQAlBOALAoQAGBXgDBPQALBrgbAsIyzfWQgbAtg3gNIgJADQh8hCiChdg");
	var mask_4_graphics_97 = new cjs.Graphics().p("ApIT1QiUhhiFhUQhQhHgwgXMAWXgkNQAcguA3AHQBWgsBfgSIACAAQAWAJA1BJQBBBiBAB0IAYAvQAlBNANAqQAIBYAABQQAOBugbAqIy7fpQgbAug2gIIgKAEQh+hBiFhbg");
	var mask_4_graphics_98 = new cjs.Graphics().p("ApIUJQiXhfiJhRQhRhFg0gYMAWigkhQAdgvA2ADQBXgzBfgbIACgBQAWAIA3BKQBCBiBBB2IAYAvQAlBNAOArQALBZACBRQARBwgbAqIzDf7QgbAwg1gEIgKAFQiBhAiIhYg");
	var mask_4_graphics_99 = new cjs.Graphics().p("ApIUdQibhciNhQQhShDg3gYMAWsgk2QAegvA1gCQBZg7BfgjIACgBQAVAGA5BMQBCBiBDB4IAZAvQAlBNAPAsQAOBaAEBRQATB0gZAoMgTLAgPQgdAxg0AAIgKAGQiEg/iKhVg");
	var mask_4_graphics_100 = new cjs.Graphics().p("ApJUxQidhaiRhOQhUg/g7gZMAW4glKQAegyA1gGQBZhCBggrIABgBQAWADA6BPQBDBhBEB6IAZAvQAmBNAQAuQAQBbAHBRQAWB2gZAoMgTTAghQgdAygzAFIgKAHQiIg+iNhSg");
	var mask_4_graphics_101 = new cjs.Graphics().p("ApJVDQighWiVhMQhWg9g+gZMAXDglfQAfgzA0gKQBahJBfg0IACgBQAVACA8BQQBDBhBGB7IAZAxQAnBLARAvQATBcAJBTQAZB4gZAnMgTbAg0QgeAzgxAKIgLAHQiKg9iQhQg");
	var mask_4_graphics_102 = new cjs.Graphics().p("ApJVXQikhUiZhKQhXg7hBgYMAXOgl1QAggzAzgPQBahQBgg9IACgBQAVABA+BRQBEBhBGB9IAaAxQAmBLATAxQAWBdALBSQAcB8gYAlMgTjAhIQgfA0gxAOIgKAIQiNg8iThNg");
	var mask_4_graphics_103 = new cjs.Graphics().p("ApJVrQinhRidhJQhZg4hEgZMAXZgmJQAgg1AygTQBbhXBhhFIACgCQAVgBA/BUQBEBgBIB/IAbAxQAmBLAUAyQAZBeANBUQAeB9gXAlMgTrAhaQgfA2gwASIgKAJQiRg6iVhLg");
	var mask_4_graphics_104 = new cjs.Graphics().p("ApJV+QiqhOiihHQhag1hHgZMAXjgmeQAig2AxgYQBcheBhhOIABgCQAVgDBBBWQBFBgBJCBIAbAxQAnBLAVAzQAbBfAQBUQAhCAgXAlMgTzAhsQgfA3gwAXIgKAKQiTg6iYhIg");
	var mask_4_graphics_105 = new cjs.Graphics().p("ApJWSQiuhMilhFQhcgyhLgaMAXvgmyQAig4AwgcQBdhlBhhXIACgBQAVgFBDBXQBFBhBKCCIAcAyQAmBJAXA1QAeBgARBVQAlCDgXAjMgT6AiAQghA4guAbIgKAKQiXg4iahFg");
	var mask_4_graphics_106 = new cjs.Graphics().p("ApJWlQixhJiqhDQhdgwhOgZMAX6gnIQAig5AwggQBdhsBihgIACgBQAVgHBEBZQBFBhBMCDIAcAzQAnBJAYA2QAgBhAUBWQAnCFgWAiMgUCAiTQghA5guAgIgKALQiag3ichDg");
	var mask_4_graphics_107 = new cjs.Graphics().p("ApKW5Qi0hHiuhAQheguhRgZMAYEgndQAkg6AugkQBfhzBihpIABgCQAVgIBGBbQBGBgBNCFIAdAzQAmBJAZA3QAkBjAWBWQAqCHgWAiMgUKAimQgiA6gtAkIgJAMQidg2ighAg");
	var mask_4_graphics_108 = new cjs.Graphics().p("ApKXNQi4hEiyg/QhfgrhVgaMAYPgnxQAlg7AtgpQBgh6BihxIACgCQAUgKBIBcQBGBhBPCHIAdAzQAnBIAaA5QAmBjAYBXQAtCKgVAhMgUSAi4QgjA8gsAoIgJANQigg0iig+g");
	var mask_4_graphics_109 = new cjs.Graphics().p("ApLXhQi6hCi2g9QhhgohYgaMAYagoGQAlg8AtguQBgiBBih6IACgCQAVgMBJBeQBHBhBQCIIAdA0QAnBIAcA6QAoBkAbBXQAvCNgUAgMgUaAjMQgjA9grAsIgKAOQijgzilg7g");
	var mask_4_graphics_110 = new cjs.Graphics().p("ApLX0Qi+g+i6g8QhiglhcgaMAYmgobQAmg+AsgxQBgiJBjiCIACgCQAUgOBLBgQBHBgBSCLIAdA0QAoBHAcA7QAsBmAdBYQAyCPgTAfMgUjAjeQgkA+gqAyIgKAOQilgyiog5g");
	var mask_4_graphics_111 = new cjs.Graphics().p("ApMYIQjAg8i/g6QhkgihegbMAYwgovQAmg/Asg2QBhiQBjiLIACgCQAUgPBNBhQBHBgBTCMIAeA1QAoBHAeA8QAuBnAfBYQA1CSgTAeMgUqAjyQgkA/gqA2IgKAPQipgxiqg2g");
	var mask_4_graphics_112 = new cjs.Graphics().p("ApMYcImGhxQhmgghigbMAY7gpEQAohAAqg7QBjiXBjiTIACgCQAUgSBOBkQBIBgBUCOIAfA1QAoBGAfA+QAxBnAhBZQA4CVgTAdMgUyAkEQglBBgoA6IgKAQQisgwitgzg");
	var mask_4_graphics_113 = new cjs.Graphics().p("ApNYvImNhsQhngehlgbMAZGgpYQAohCApg/QBjieBkicIACgCQAUgTBQBlQBIBgBWCPIAfA2QAoBGAgA/QA0BoAjBaQA7CXgSAcMgU6AkYQgmBBgnA/IgKARIlfhgg");
	var mask_4_graphics_114 = new cjs.Graphics().p("AyzWlMAdrgw9QARgdBWBtQBWBwBpC2QBpC4A9CSQA9CagRAbMgWZAnCg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_4_graphics_9,x:371.6,y:103.9}).wait(1).to({graphics:mask_4_graphics_10,x:370.4,y:105}).wait(1).to({graphics:mask_4_graphics_11,x:369.3,y:106.1}).wait(1).to({graphics:mask_4_graphics_12,x:368.1,y:107.2}).wait(1).to({graphics:mask_4_graphics_13,x:366.9,y:108.3}).wait(1).to({graphics:mask_4_graphics_14,x:365.8,y:109.4}).wait(1).to({graphics:mask_4_graphics_15,x:364.6,y:110.5}).wait(1).to({graphics:mask_4_graphics_16,x:363.4,y:111.6}).wait(1).to({graphics:mask_4_graphics_17,x:362.3,y:112.8}).wait(1).to({graphics:mask_4_graphics_18,x:361.1,y:113.9}).wait(1).to({graphics:mask_4_graphics_19,x:359.9,y:115}).wait(1).to({graphics:mask_4_graphics_20,x:358.8,y:116.1}).wait(1).to({graphics:mask_4_graphics_21,x:357.6,y:117.2}).wait(1).to({graphics:mask_4_graphics_22,x:356.4,y:118.3}).wait(1).to({graphics:mask_4_graphics_23,x:355.3,y:119.4}).wait(1).to({graphics:mask_4_graphics_24,x:354.1,y:120.5}).wait(1).to({graphics:mask_4_graphics_25,x:352.9,y:121.6}).wait(1).to({graphics:mask_4_graphics_26,x:351.8,y:122.7}).wait(1).to({graphics:mask_4_graphics_27,x:350.6,y:123.8}).wait(1).to({graphics:mask_4_graphics_28,x:349.5,y:124.9}).wait(1).to({graphics:mask_4_graphics_29,x:348.3,y:126}).wait(1).to({graphics:mask_4_graphics_30,x:347.1,y:127.1}).wait(1).to({graphics:mask_4_graphics_31,x:346,y:128.2}).wait(1).to({graphics:mask_4_graphics_32,x:344.8,y:129.3}).wait(1).to({graphics:mask_4_graphics_33,x:343.6,y:130.4}).wait(1).to({graphics:mask_4_graphics_34,x:342.5,y:131.5}).wait(1).to({graphics:mask_4_graphics_35,x:341.3,y:132.6}).wait(1).to({graphics:mask_4_graphics_36,x:340.1,y:133.8}).wait(1).to({graphics:mask_4_graphics_37,x:339,y:134.9}).wait(1).to({graphics:mask_4_graphics_38,x:337.8,y:136}).wait(1).to({graphics:mask_4_graphics_39,x:336.6,y:137.1}).wait(1).to({graphics:mask_4_graphics_40,x:335.5,y:138.2}).wait(1).to({graphics:mask_4_graphics_41,x:334.3,y:139.3}).wait(1).to({graphics:mask_4_graphics_42,x:333.1,y:140.4}).wait(1).to({graphics:mask_4_graphics_43,x:332,y:141.5}).wait(1).to({graphics:mask_4_graphics_44,x:330.8,y:142.6}).wait(1).to({graphics:mask_4_graphics_45,x:329.6,y:143.7}).wait(1).to({graphics:mask_4_graphics_46,x:328.5,y:144.8}).wait(1).to({graphics:mask_4_graphics_47,x:327.3,y:145.9}).wait(1).to({graphics:mask_4_graphics_48,x:326.2,y:147}).wait(1).to({graphics:mask_4_graphics_49,x:325,y:148.1}).wait(1).to({graphics:mask_4_graphics_50,x:323.8,y:149.2}).wait(1).to({graphics:mask_4_graphics_51,x:322.7,y:150.3}).wait(1).to({graphics:mask_4_graphics_52,x:321.5,y:151.4}).wait(1).to({graphics:mask_4_graphics_53,x:320.3,y:152.6}).wait(1).to({graphics:mask_4_graphics_54,x:319.2,y:153.7}).wait(1).to({graphics:mask_4_graphics_55,x:318.1,y:154.7}).wait(1).to({graphics:mask_4_graphics_56,x:317,y:155.7}).wait(1).to({graphics:mask_4_graphics_57,x:315.9,y:156.7}).wait(1).to({graphics:mask_4_graphics_58,x:314.8,y:157.8}).wait(1).to({graphics:mask_4_graphics_59,x:313.8,y:158.8}).wait(1).to({graphics:mask_4_graphics_60,x:312.7,y:159.8}).wait(1).to({graphics:mask_4_graphics_61,x:311.6,y:160.8}).wait(1).to({graphics:mask_4_graphics_62,x:310.5,y:161.9}).wait(1).to({graphics:mask_4_graphics_63,x:309.5,y:162.9}).wait(1).to({graphics:mask_4_graphics_64,x:308.4,y:163.9}).wait(1).to({graphics:mask_4_graphics_65,x:307.3,y:164.9}).wait(1).to({graphics:mask_4_graphics_66,x:306.2,y:166}).wait(1).to({graphics:mask_4_graphics_67,x:305.1,y:167}).wait(1).to({graphics:mask_4_graphics_68,x:304,y:168}).wait(1).to({graphics:mask_4_graphics_69,x:303,y:169}).wait(1).to({graphics:mask_4_graphics_70,x:301.9,y:170.1}).wait(1).to({graphics:mask_4_graphics_71,x:300.8,y:171.1}).wait(1).to({graphics:mask_4_graphics_72,x:299.7,y:172.1}).wait(1).to({graphics:mask_4_graphics_73,x:298.6,y:173.1}).wait(1).to({graphics:mask_4_graphics_74,x:297.6,y:174.2}).wait(1).to({graphics:mask_4_graphics_75,x:296.5,y:175.2}).wait(1).to({graphics:mask_4_graphics_76,x:295.4,y:176.2}).wait(1).to({graphics:mask_4_graphics_77,x:294.3,y:177.2}).wait(1).to({graphics:mask_4_graphics_78,x:293.2,y:178.3}).wait(1).to({graphics:mask_4_graphics_79,x:291.7,y:179.4}).wait(1).to({graphics:mask_4_graphics_80,x:290.2,y:180.6}).wait(1).to({graphics:mask_4_graphics_81,x:288.7,y:181.7}).wait(1).to({graphics:mask_4_graphics_82,x:287.2,y:182.8}).wait(1).to({graphics:mask_4_graphics_83,x:285.7,y:184}).wait(1).to({graphics:mask_4_graphics_84,x:284.1,y:185.1}).wait(1).to({graphics:mask_4_graphics_85,x:282.6,y:186.3}).wait(1).to({graphics:mask_4_graphics_86,x:281.1,y:187.4}).wait(1).to({graphics:mask_4_graphics_87,x:279.6,y:188.5}).wait(1).to({graphics:mask_4_graphics_88,x:278,y:189.7}).wait(1).to({graphics:mask_4_graphics_89,x:276.5,y:190.8}).wait(1).to({graphics:mask_4_graphics_90,x:275,y:192}).wait(1).to({graphics:mask_4_graphics_91,x:273.5,y:193.1}).wait(1).to({graphics:mask_4_graphics_92,x:271.9,y:194.2}).wait(1).to({graphics:mask_4_graphics_93,x:270.4,y:195.4}).wait(1).to({graphics:mask_4_graphics_94,x:268.9,y:196}).wait(1).to({graphics:mask_4_graphics_95,x:267.4,y:196.3}).wait(1).to({graphics:mask_4_graphics_96,x:266.2,y:196.6}).wait(1).to({graphics:mask_4_graphics_97,x:264.9,y:197}).wait(1).to({graphics:mask_4_graphics_98,x:263.7,y:197.4}).wait(1).to({graphics:mask_4_graphics_99,x:262.6,y:197.8}).wait(1).to({graphics:mask_4_graphics_100,x:261.4,y:198.2}).wait(1).to({graphics:mask_4_graphics_101,x:260.3,y:198.6}).wait(1).to({graphics:mask_4_graphics_102,x:259.1,y:199}).wait(1).to({graphics:mask_4_graphics_103,x:257.9,y:199.3}).wait(1).to({graphics:mask_4_graphics_104,x:256.8,y:199.7}).wait(1).to({graphics:mask_4_graphics_105,x:255.6,y:200.1}).wait(1).to({graphics:mask_4_graphics_106,x:254.5,y:200.5}).wait(1).to({graphics:mask_4_graphics_107,x:253.3,y:200.9}).wait(1).to({graphics:mask_4_graphics_108,x:252.2,y:201.2}).wait(1).to({graphics:mask_4_graphics_109,x:251.1,y:201.6}).wait(1).to({graphics:mask_4_graphics_110,x:249.9,y:202}).wait(1).to({graphics:mask_4_graphics_111,x:248.8,y:202.4}).wait(1).to({graphics:mask_4_graphics_112,x:247.7,y:202.7}).wait(1).to({graphics:mask_4_graphics_113,x:246.6,y:203.1}).wait(1).to({graphics:mask_4_graphics_114,x:245.4,y:203.5}).wait(331));

	// Layer 5
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(20,1,1).p("AkEYMQjjg4iVi1QiXi4gejsQgdjoA5jgQA6jhBujHQBvjGCQiwQCRiwCVitQCYiyCrigQCsigCziWQBxhfBxhc");
	this.shape_7.setTransform(267.2,273.6);
	this.shape_7._off = true;

	var maskedShapeInstanceList = [this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(9).to({_off:false},0).wait(436));

	// Layer 1
	this.instance_2 = new lib._6("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(275,275);
	this.instance_2.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(445));

	// Background
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#F59E9E").ss(3,1,1).p("EAq+Aq+MhV7AAAMAAAhV7MBV7AAAg");
	this.shape_8.setTransform(275,275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F6E7E7").s().p("Egq9Aq+MAAAhV7MBV7AAAMAAABV7g");
	this.shape_9.setTransform(275,275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).wait(445));

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