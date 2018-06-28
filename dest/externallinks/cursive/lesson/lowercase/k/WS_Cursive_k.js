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


(lib.k = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AtEXyQiAhhhwiVQh7inhmjqIg7BDQhMBjhVDXQhbDkg9BeQhNBbhJAAQh+gBAAh9QAAhbEZntIhXAYQiQAAAAiEQAAhJBkhvIEtkXIA1gpQC2ikBei9IIew2QCGkRBnh4QBShhBYgyQBmg3BzAAQCIAABPBvQBHBjAACWQAACfh7DbQhqC8jADhQn4IHinCMQC4hhC/g3QDNg4DBABQEHAADfBZQCDA4BKBMQBVBbAAB1QAAC5iZCMQiSCKi8AAIpXAGIqOgSQB5DwCDCcQCiC+CDAAQJkAAIbkfQDZh1DBikIECjZIDqjqQC2ioBGAAQBkABAAByQAAAskfFZQilC/j5CyQjzCukcCJQkiCKkcBMQkqBPj5AAQjkAAjRiegAoWFAQjWBfjkCyITNhJQDFgMAAiVQAAiQnmgFQj2AAj8BugAjuzVIiKD2IkNIkIAjggQEOjxCBiYIChjnQA/h+AAhpQAAg+gxAAQhjAAhnCbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-194.9,-168,390,336);


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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[]},1).wait(35));

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0.3,-103.8,1,1,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-68.4},24).to({_off:true},1).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.1,-106.6,22.3,13.8);


(lib.ar2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(48.5,-50.6,1,1,65.5,0,0,0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0.1,rotation:31.8,guide:{path:[48.5,-50.4,-9.2,-28.3,-42.7,42.1]}},104).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AA1kPIBIhMICkCaIhIBMg");
	var mask_graphics_1 = new cjs.Graphics().p("Ah5giIBQhVICjCaIhQBVg");
	var mask_graphics_2 = new cjs.Graphics().p("Ah9gdIBYheICkCZIhZBeg");
	var mask_graphics_3 = new cjs.Graphics().p("AiCgZIBihnICjCaIhiBng");
	var mask_graphics_4 = new cjs.Graphics().p("AiGgUIBqhxICjCaIhqBxg");
	var mask_graphics_5 = new cjs.Graphics().p("AiKgQIByh5ICkCaIhzB5g");
	var mask_graphics_6 = new cjs.Graphics().p("AiPgLIB8iDICjCaIh8CDg");
	var mask_graphics_7 = new cjs.Graphics().p("AiTgHICEiLICjCaIiECLg");
	var mask_graphics_8 = new cjs.Graphics().p("AiXgCICMiVICjCaIiMCVg");
	var mask_graphics_9 = new cjs.Graphics().p("AibABICUicICkCbIiWCcg");
	var mask_graphics_10 = new cjs.Graphics().p("AigAGICeimICjCbIieCmg");
	var mask_graphics_11 = new cjs.Graphics().p("AikAKICliuICkCbIilCug");
	var mask_graphics_12 = new cjs.Graphics().p("AioAPICti4ICkCbIitC4g");
	var mask_graphics_13 = new cjs.Graphics().p("AitAUIC2jBIClCaIi3DBg");
	var mask_graphics_14 = new cjs.Graphics().p("AixAZIC/jLICkCbIi/DKg");
	var mask_graphics_15 = new cjs.Graphics().p("Ai1AdIDHjTICkCbIjHDSg");
	var mask_graphics_16 = new cjs.Graphics().p("Ai6AiIDQjdIClCbIjRDcg");
	var mask_graphics_17 = new cjs.Graphics().p("Ai+AmIDZjlICkCbIjZDkg");
	var mask_graphics_18 = new cjs.Graphics().p("AjCArIDhjvICkCaIjhDvg");
	var mask_graphics_19 = new cjs.Graphics().p("AjGAvIDpj4ICkCbIjpD4g");
	var mask_graphics_20 = new cjs.Graphics().p("AjLAzIDykAIClCaIjyEBg");
	var mask_graphics_21 = new cjs.Graphics().p("AjPA4ID7kKICkCbIj7EKg");
	var mask_graphics_22 = new cjs.Graphics().p("AjTA9IEDkTICkCaIkDETg");
	var mask_graphics_23 = new cjs.Graphics().p("AjXBBIELkcICkCbIkLEcg");
	var mask_graphics_24 = new cjs.Graphics().p("AjcBGIEVklICkCaIkUElg");
	var mask_graphics_25 = new cjs.Graphics().p("AjgBKIEdkuICkCbIkdEug");
	var mask_graphics_26 = new cjs.Graphics().p("AjkBOIElk2ICkCaIklE3g");
	var mask_graphics_27 = new cjs.Graphics().p("AjoBTIEtlAIClCaIkvFBg");
	var mask_graphics_28 = new cjs.Graphics().p("AjtBXIE3lIICkCaIk3FJg");
	var mask_graphics_29 = new cjs.Graphics().p("AjxBdIE/lTICkCaIk/FTg");
	var mask_graphics_30 = new cjs.Graphics().p("Aj1BhIFHlbICkCaIlHFbg");
	var mask_graphics_31 = new cjs.Graphics().p("Aj5BmIFPllIClCaIlRFlg");
	var mask_graphics_32 = new cjs.Graphics().p("Aj+BqIFZltICkCaIlZFtg");
	var mask_graphics_33 = new cjs.Graphics().p("AkCBvIFhl3ICkCaIlhF3g");
	var mask_graphics_34 = new cjs.Graphics().p("AkHBzIFqmAIClCbIlqGAg");
	var mask_graphics_35 = new cjs.Graphics().p("AkLB3IFzmIICkCaIlyGJg");
	var mask_graphics_36 = new cjs.Graphics().p("AkPB8IF7mSICkCbIl7GSg");
	var mask_graphics_37 = new cjs.Graphics().p("AkTCBIGDmbICkCaImDGbg");
	var mask_graphics_38 = new cjs.Graphics().p("AkYCFIGMmkIClCbImMGkg");
	var mask_graphics_39 = new cjs.Graphics().p("AkcCKIGVmtICkCaImVGtg");
	var mask_graphics_40 = new cjs.Graphics().p("AkgCOIGdm2ICkCbImdG2g");
	var mask_graphics_41 = new cjs.Graphics().p("AkkCTIGlnAICkCbImlHAg");
	var mask_graphics_42 = new cjs.Graphics().p("AkoCXIGtnIIClCbImuHIg");
	var mask_graphics_43 = new cjs.Graphics().p("AktCcIG3nSICkCbIm3HSg");
	var mask_graphics_44 = new cjs.Graphics().p("AkxChIG/nbICkCbIm/Hag");
	var mask_graphics_45 = new cjs.Graphics().p("Ak1ClIHHnkIClCbInIHkg");
	var mask_graphics_46 = new cjs.Graphics().p("Ak6CqIHRntICkCbInQHsg");
	var mask_graphics_47 = new cjs.Graphics().p("Ak+CuIHZn2ICkCbInZH2g");
	var mask_graphics_48 = new cjs.Graphics().p("AlCCzIHhn/ICkCbInhH+g");
	var mask_graphics_49 = new cjs.Graphics().p("AlGC3IHpoIIClCbInrIIg");
	var mask_graphics_50 = new cjs.Graphics().p("AlLC8IHzoSICkCbInzIRg");
	var mask_graphics_51 = new cjs.Graphics().p("AlPDAIH7oaICkCbIn7Iag");
	var mask_graphics_52 = new cjs.Graphics().p("AlTDFIIDokICkCbIoDIjg");
	var mask_graphics_53 = new cjs.Graphics().p("AlYDJIIMosIClCbIoNIsg");
	var mask_graphics_54 = new cjs.Graphics().p("AlcDOIIVo2ICkCbIoVI1g");
	var mask_graphics_55 = new cjs.Graphics().p("AlgDSIIdo+ICkCbIodI+g");
	var mask_graphics_56 = new cjs.Graphics().p("AllDXIImpIIClCbIomJIg");
	var mask_graphics_57 = new cjs.Graphics().p("AlpDbIIupQIClCaIouJRg");
	var mask_graphics_58 = new cjs.Graphics().p("AltDgII3paICkCbIo3Jag");
	var mask_graphics_59 = new cjs.Graphics().p("AlxDkII/piICkCaIpAJjg");
	var mask_graphics_60 = new cjs.Graphics().p("Al2DpIJIpsIClCbIpJJsg");
	var mask_graphics_61 = new cjs.Graphics().p("Al6DuIJQp1IClCaIpRJ1g");
	var mask_graphics_62 = new cjs.Graphics().p("Al/DyIJap+ICkCbIpZJ+g");
	var mask_graphics_63 = new cjs.Graphics().p("AmDD3IJiqHIClCaIpiKHg");
	var mask_graphics_64 = new cjs.Graphics().p("AmHD7IJqqQIClCbIpqKQg");
	var mask_graphics_65 = new cjs.Graphics().p("AmLD/IJzqZICkCbIpzKZg");
	var mask_graphics_66 = new cjs.Graphics().p("AmQEEIJ8qiICkCbIp7Kig");
	var mask_graphics_67 = new cjs.Graphics().p("AmUEJIKEqsIClCbIqEKsg");
	var mask_graphics_68 = new cjs.Graphics().p("AmYENIKMq0IClCbIqNK0g");
	var mask_graphics_69 = new cjs.Graphics().p("AmcESIKVq+ICkCbIqVK+g");
	var mask_graphics_70 = new cjs.Graphics().p("AmhEXIKerHICkCbIqdLGg");
	var mask_graphics_71 = new cjs.Graphics().p("AmlEbIKmrQIClCbIqnLQg");
	var mask_graphics_72 = new cjs.Graphics().p("AmpEgIKvraICkCcIqvLZg");
	var mask_graphics_73 = new cjs.Graphics().p("AmtEkIK3riICkCbIq3Lig");
	var mask_graphics_74 = new cjs.Graphics().p("AmyEpILArsIClCcIrALrg");
	var mask_graphics_75 = new cjs.Graphics().p("Am2EtILIr0IClCbIrJL0g");
	var mask_graphics_76 = new cjs.Graphics().p("Am6EyILRr+ICkCcIrRL9g");
	var mask_graphics_77 = new cjs.Graphics().p("Am+E2ILZsGICkCbIrZMGg");
	var mask_graphics_78 = new cjs.Graphics().p("AnDE7ILisQIClCbIriMQg");
	var mask_graphics_79 = new cjs.Graphics().p("AnHE/ILqsYIClCbIrrMYg");
	var mask_graphics_80 = new cjs.Graphics().p("AnLFEILzsiICkCbIrzMig");
	var mask_graphics_81 = new cjs.Graphics().p("AnQFIIL8sqIClCbIr8Mqg");
	var mask_graphics_82 = new cjs.Graphics().p("AnUFNIMEs0IClCbIsEM0g");
	var mask_graphics_83 = new cjs.Graphics().p("AnYFRIMNs8ICkCbIsNM8g");
	var mask_graphics_84 = new cjs.Graphics().p("AndFWIMWtGICkCbIsVNGg");
	var mask_graphics_85 = new cjs.Graphics().p("AnhFbIMetPIClCbIseNOg");
	var mask_graphics_86 = new cjs.Graphics().p("AnlFfIMmtYIClCbIsnNYg");
	var mask_graphics_87 = new cjs.Graphics().p("AnpFkIMvtiICkCbIsvNig");
	var mask_graphics_88 = new cjs.Graphics().p("AnuFoIM4tqICkCaIs3Nrg");
	var mask_graphics_89 = new cjs.Graphics().p("AnyFtINAt0IClCbItBN0g");
	var mask_graphics_90 = new cjs.Graphics().p("An2FxINJt8ICkCaItJN9g");
	var mask_graphics_91 = new cjs.Graphics().p("An7F2INSuGICkCbItROGg");
	var mask_graphics_92 = new cjs.Graphics().p("An/F6INauOIClCbItaOOg");
	var mask_graphics_93 = new cjs.Graphics().p("AoDF/INiuYIClCbItjOYg");
	var mask_graphics_94 = new cjs.Graphics().p("AoHGDINrugICkCaItrOhg");
	var mask_graphics_95 = new cjs.Graphics().p("AoLGIINzuqICkCbItzOqg");
	var mask_graphics_96 = new cjs.Graphics().p("AoQGMIN8uyIClCaIt8Ozg");
	var mask_graphics_97 = new cjs.Graphics().p("AoUGRIOEu8IClCbIuEO8g");
	var mask_graphics_98 = new cjs.Graphics().p("AoYGVIONvEICkCaIuNPFg");
	var mask_graphics_99 = new cjs.Graphics().p("AocGaIOVvOICkCbIuWPOg");
	var mask_graphics_100 = new cjs.Graphics().p("AohGeIOevWIClCaIuePXg");
	var mask_graphics_101 = new cjs.Graphics().p("AolGjIOnvgICkCbIunPgg");
	var mask_graphics_102 = new cjs.Graphics().p("AoqGoIOwvqICkCbIuvPqg");
	var mask_graphics_103 = new cjs.Graphics().p("AouGsIO4vyIClCbIu4Pyg");
	var mask_graphics_104 = new cjs.Graphics().p("AoyGxIPAv8IClCbIvAP8g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:28.9,y:-34.8}).wait(1).to({graphics:mask_graphics_1,x:45.5,y:-57.7}).wait(1).to({graphics:mask_graphics_2,x:45.1,y:-57.2}).wait(1).to({graphics:mask_graphics_3,x:44.7,y:-56.8}).wait(1).to({graphics:mask_graphics_4,x:44.3,y:-56.3}).wait(1).to({graphics:mask_graphics_5,x:43.8,y:-55.8}).wait(1).to({graphics:mask_graphics_6,x:43.4,y:-55.4}).wait(1).to({graphics:mask_graphics_7,x:43,y:-54.9}).wait(1).to({graphics:mask_graphics_8,x:42.5,y:-54.5}).wait(1).to({graphics:mask_graphics_9,x:42.1,y:-54}).wait(1).to({graphics:mask_graphics_10,x:41.7,y:-53.6}).wait(1).to({graphics:mask_graphics_11,x:41.3,y:-53.1}).wait(1).to({graphics:mask_graphics_12,x:40.8,y:-52.7}).wait(1).to({graphics:mask_graphics_13,x:40.4,y:-52.2}).wait(1).to({graphics:mask_graphics_14,x:40,y:-51.8}).wait(1).to({graphics:mask_graphics_15,x:39.5,y:-51.3}).wait(1).to({graphics:mask_graphics_16,x:39.1,y:-50.9}).wait(1).to({graphics:mask_graphics_17,x:38.7,y:-50.4}).wait(1).to({graphics:mask_graphics_18,x:38.3,y:-50}).wait(1).to({graphics:mask_graphics_19,x:37.8,y:-49.5}).wait(1).to({graphics:mask_graphics_20,x:37.4,y:-49.1}).wait(1).to({graphics:mask_graphics_21,x:37,y:-48.6}).wait(1).to({graphics:mask_graphics_22,x:36.6,y:-48.2}).wait(1).to({graphics:mask_graphics_23,x:36.1,y:-47.7}).wait(1).to({graphics:mask_graphics_24,x:35.7,y:-47.3}).wait(1).to({graphics:mask_graphics_25,x:35.3,y:-46.8}).wait(1).to({graphics:mask_graphics_26,x:34.8,y:-46.3}).wait(1).to({graphics:mask_graphics_27,x:34.4,y:-45.9}).wait(1).to({graphics:mask_graphics_28,x:34,y:-45.4}).wait(1).to({graphics:mask_graphics_29,x:33.6,y:-45}).wait(1).to({graphics:mask_graphics_30,x:33.1,y:-44.5}).wait(1).to({graphics:mask_graphics_31,x:32.7,y:-44.1}).wait(1).to({graphics:mask_graphics_32,x:32.3,y:-43.6}).wait(1).to({graphics:mask_graphics_33,x:31.9,y:-43.2}).wait(1).to({graphics:mask_graphics_34,x:31.4,y:-42.7}).wait(1).to({graphics:mask_graphics_35,x:31,y:-42.3}).wait(1).to({graphics:mask_graphics_36,x:30.6,y:-41.8}).wait(1).to({graphics:mask_graphics_37,x:30.1,y:-41.4}).wait(1).to({graphics:mask_graphics_38,x:29.7,y:-40.9}).wait(1).to({graphics:mask_graphics_39,x:29.3,y:-40.5}).wait(1).to({graphics:mask_graphics_40,x:28.9,y:-40}).wait(1).to({graphics:mask_graphics_41,x:28.4,y:-39.6}).wait(1).to({graphics:mask_graphics_42,x:28,y:-39.1}).wait(1).to({graphics:mask_graphics_43,x:27.6,y:-38.7}).wait(1).to({graphics:mask_graphics_44,x:27.1,y:-38.2}).wait(1).to({graphics:mask_graphics_45,x:26.7,y:-37.8}).wait(1).to({graphics:mask_graphics_46,x:26.3,y:-37.3}).wait(1).to({graphics:mask_graphics_47,x:25.9,y:-36.9}).wait(1).to({graphics:mask_graphics_48,x:25.4,y:-36.4}).wait(1).to({graphics:mask_graphics_49,x:25,y:-35.9}).wait(1).to({graphics:mask_graphics_50,x:24.6,y:-35.5}).wait(1).to({graphics:mask_graphics_51,x:24.2,y:-35}).wait(1).to({graphics:mask_graphics_52,x:23.8,y:-34.6}).wait(1).to({graphics:mask_graphics_53,x:23.3,y:-34.1}).wait(1).to({graphics:mask_graphics_54,x:22.9,y:-33.7}).wait(1).to({graphics:mask_graphics_55,x:22.5,y:-33.2}).wait(1).to({graphics:mask_graphics_56,x:22,y:-32.8}).wait(1).to({graphics:mask_graphics_57,x:21.6,y:-32.3}).wait(1).to({graphics:mask_graphics_58,x:21.2,y:-31.9}).wait(1).to({graphics:mask_graphics_59,x:20.8,y:-31.4}).wait(1).to({graphics:mask_graphics_60,x:20.3,y:-31}).wait(1).to({graphics:mask_graphics_61,x:19.9,y:-30.5}).wait(1).to({graphics:mask_graphics_62,x:19.5,y:-30.1}).wait(1).to({graphics:mask_graphics_63,x:19,y:-29.6}).wait(1).to({graphics:mask_graphics_64,x:18.6,y:-29.1}).wait(1).to({graphics:mask_graphics_65,x:18.2,y:-28.7}).wait(1).to({graphics:mask_graphics_66,x:17.8,y:-28.3}).wait(1).to({graphics:mask_graphics_67,x:17.3,y:-27.8}).wait(1).to({graphics:mask_graphics_68,x:16.9,y:-27.4}).wait(1).to({graphics:mask_graphics_69,x:16.5,y:-26.9}).wait(1).to({graphics:mask_graphics_70,x:16.1,y:-26.5}).wait(1).to({graphics:mask_graphics_71,x:15.6,y:-26}).wait(1).to({graphics:mask_graphics_72,x:15.2,y:-25.5}).wait(1).to({graphics:mask_graphics_73,x:14.8,y:-25.1}).wait(1).to({graphics:mask_graphics_74,x:14.3,y:-24.6}).wait(1).to({graphics:mask_graphics_75,x:13.9,y:-24.2}).wait(1).to({graphics:mask_graphics_76,x:13.5,y:-23.7}).wait(1).to({graphics:mask_graphics_77,x:13.1,y:-23.3}).wait(1).to({graphics:mask_graphics_78,x:12.6,y:-22.8}).wait(1).to({graphics:mask_graphics_79,x:12.2,y:-22.4}).wait(1).to({graphics:mask_graphics_80,x:11.8,y:-21.9}).wait(1).to({graphics:mask_graphics_81,x:11.3,y:-21.5}).wait(1).to({graphics:mask_graphics_82,x:10.9,y:-21}).wait(1).to({graphics:mask_graphics_83,x:10.5,y:-20.6}).wait(1).to({graphics:mask_graphics_84,x:10.1,y:-20.1}).wait(1).to({graphics:mask_graphics_85,x:9.6,y:-19.7}).wait(1).to({graphics:mask_graphics_86,x:9.2,y:-19.2}).wait(1).to({graphics:mask_graphics_87,x:8.8,y:-18.7}).wait(1).to({graphics:mask_graphics_88,x:8.4,y:-18.3}).wait(1).to({graphics:mask_graphics_89,x:7.9,y:-17.8}).wait(1).to({graphics:mask_graphics_90,x:7.5,y:-17.4}).wait(1).to({graphics:mask_graphics_91,x:7.1,y:-16.9}).wait(1).to({graphics:mask_graphics_92,x:6.6,y:-16.5}).wait(1).to({graphics:mask_graphics_93,x:6.2,y:-16}).wait(1).to({graphics:mask_graphics_94,x:5.8,y:-15.6}).wait(1).to({graphics:mask_graphics_95,x:5.4,y:-15.1}).wait(1).to({graphics:mask_graphics_96,x:4.9,y:-14.7}).wait(1).to({graphics:mask_graphics_97,x:4.5,y:-14.2}).wait(1).to({graphics:mask_graphics_98,x:4.1,y:-13.8}).wait(1).to({graphics:mask_graphics_99,x:3.7,y:-13.3}).wait(1).to({graphics:mask_graphics_100,x:3.2,y:-12.9}).wait(1).to({graphics:mask_graphics_101,x:2.8,y:-12.4}).wait(1).to({graphics:mask_graphics_102,x:2.4,y:-12}).wait(1).to({graphics:mask_graphics_103,x:1.9,y:-11.5}).wait(1).to({graphics:mask_graphics_104,x:1.5,y:-11.1}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AnIHQQFQrCJBjd");
	this.shape.setTransform(2.8,-4.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(105));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34.2,-61.9,21.2,20.3);


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
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AjtEeQCxkJEqkx");
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
(lib.WS_Cursive_k = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_900 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(900).call(this.frame_900).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(99.4,357.6,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[99.5,357.6,109.2,348.5,118.8,339.3,128.5,329.8,138.5,320.6,148.2,311.7,158.3,302.7,168.2,293.7,178.5,284.8,187.8,276.7,197.6,268.2,207.4,259.7,220.1,247.7,232.7,235.8,242.3,222.3,251.9,208.8,258.8,201.9,265.6,195.1,271.8,185.1,278,175.3,283.8,166.6,289.6,157.9,290.2,143.1,290.9,128.4,278.6,121.4]}},135).wait(16).to({startPosition:0},0).to({guide:{path:[278.5,121.4,262.9,116.8,253.9,126,245.8,134.4,239.1,144,232.3,153.7,227.5,164.8,222.8,175.9,218,186.4,213.3,196.9,207.9,208.4,202.6,219.9,196.5,231.8,190.4,243.8,186.4,253.5,182.4,263.3,176,274,169.7,284.7,164.2,294.4,158.8,304.1,153.4,314.7,148,325.6,142.4,336.2,136.9,347,131.1,357.7,125.5,367.8,120.1,378,114.2,389,108.3,399.9,102.6,410.7,96.6,421.4,95.8,422.8,94.9,424.5]}},149).wait(15).to({startPosition:0},0).to({x:138,y:342.5},60).to({guide:{path:[138.1,342,174.8,310.7,223.3,290.7,271.8,270.6,309.1,286.5,346.5,302.4,334,322.2,331.8,325.7,329.2,328.6]}},104).to({guide:{path:[329.2,328.6,317,342.2,295.7,343.1,269.9,344.1,226.5,344.1,183.1,344.1,153.7,343.2]}},75).wait(17).to({startPosition:0},0).to({guide:{path:[153.4,343.2,163,371.1,179.6,393.8,196.6,417,218.8,425.5,240.9,434.1,275,425.1,309.1,416.1,339.8,401.7,370.5,387.3,392.4,369.5,414.3,351.8,427.9,338.6,441.4,325.4,454.2,311.5]}},239).wait(16).to({x:448.9,y:317.2},0).to({x:651.9,y:231.2},65).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(279,122.1,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},135).wait(16).to({_off:false,x:95,y:426.1},0).to({_off:true},149).wait(15).to({_off:false,x:158,y:345.1},0).to({_off:true},239).wait(17).to({_off:false,x:454,y:311.1},0).to({_off:true},239).wait(82));

	// Layer 20
	this.instance_1 = new lib.ar2("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(348.9,337.3,1,1,-165.9,0,0,0.6,-0.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(580).to({_off:false},0).wait(321));

	// Layer 16 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_580 = new cjs.Graphics().p("AvfFKQF/qjLsjPQLtjPKjGAQKkF9DPLtMg4eAPmQjPrtF/qig");
	var mask_graphics_581 = new cjs.Graphics().p("AvmFRQF5qnLqjWQLqjXKnF6QKoF3DWLqMg4TAQKQjXrqF4qng");
	var mask_graphics_582 = new cjs.Graphics().p("AvsFZQFxqrLojeQLpjeKqFzQKrFwDeLoMg4IAQuQjeroFxqqg");
	var mask_graphics_583 = new cjs.Graphics().p("AvyFgQFqquLmjlQLmjmKuFsQKvFpDmLlMg3+ARTQjlrmFqqug");
	var mask_graphics_584 = new cjs.Graphics().p("Av4FoQFkqyLjjtQLkjtKxFlQKzFjDtLjMg3yAR2QjtrkFjqxg");
	var mask_graphics_585 = new cjs.Graphics().p("Av+FwQFdq2Lhj0QLhj0K1FdQK3FcD0LhMg3nASaQj0rhFcq1g");
	var mask_graphics_586 = new cjs.Graphics().p("AwDF4QFWq5Lej8QLfj7K5FWQK5FVD8LeMg3bAS+Qj7rfFVq4g");
	var mask_graphics_587 = new cjs.Graphics().p("AwIGAQFPq8LbkDQLdkDK8FPQK9FOEDLbMg3OATiQkDrcFOq8g");
	var mask_graphics_588 = new cjs.Graphics().p("AwNGIQFIq/LZkLQLZkKLAFIQLAFHELLYMg3CAUGQkKraFHq/g");
	var mask_graphics_589 = new cjs.Graphics().p("AwRGRQFArDLWkSQLXkSLDFCQLEE/ERLWMg20AUpQkRrXFArCg");
	var mask_graphics_590 = new cjs.Graphics().p("AwWGZQE6rGLUkZQLTkZLGE6QLHE4EZLTMg2mAVNQkZrVE4rFg");
	var mask_graphics_591 = new cjs.Graphics().p("AwaGiQEzrKLRkgQLQkgLJEzQLKExEgLQMg2YAVvQkgrRExrIg");
	var mask_graphics_592 = new cjs.Graphics().p("AwdGqQErrMLOkoQLOknLMEsQLMEqEoLNMg2KAWSQkorOErrMg");
	var mask_graphics_593 = new cjs.Graphics().p("AwhGzQEkrPLLkvQLLkvLPElQLQEiEuLLMg17AW1QkvrLEjrPg");
	var mask_graphics_594 = new cjs.Graphics().p("AwkG8QEdrSLIk2QLHk2LSEdQLTEcE2LHMg1tAXYQk2rJEcrRg");
	var mask_graphics_595 = new cjs.Graphics().p("AwnHFQEVrVLFk9QLFk9LUEWQLWEUE9LEMg1eAX6Qk9rFEVrUg");
	var mask_graphics_596 = new cjs.Graphics().p("AwqHOQEOrYLClEQLBlELXEPQLZEMFELBMg1OAYdQlErCENrXg");
	var mask_graphics_597 = new cjs.Graphics().p("AwsHXQEHraK+lLQK+lMLaEIQLbEFFLK+Mg0+AY+QlLq+EGrag");
	var mask_graphics_598 = new cjs.Graphics().p("AwuHhQD/rdK7lTQK6lSLdEAQLdD+FTK6Mg0uAZhQlSq7D/rcg");
	var mask_graphics_599 = new cjs.Graphics().p("AwwHqQD4rgK3lZQK3lZLfD4QLgD3FaK3Mg0dAaCQlZq3D3rfg");
	var mask_graphics_600 = new cjs.Graphics().p("AwyHzQDxriK0lgQKzlgLiDxQLiDvFgKzMg0LAalQlhq1Dwrhg");
	var mask_graphics_601 = new cjs.Graphics().p("AwzH9QDprkKxloQKvlnLkDqQLlDoFnKvMgz6AbGQlnqxDorjg");
	var mask_graphics_602 = new cjs.Graphics().p("Aw0IHQDhrnKtluQKsluLnDiQLnDgFuKsMgzpAbnQluqtDhrlg");
	var mask_graphics_603 = new cjs.Graphics().p("Aw1IRQDarpKpl1QKol1LpDaQLpDZF1KoMgzWAcJQl1qqDZrng");
	var mask_graphics_604 = new cjs.Graphics().p("Aw2IaQDTrrKll7QKll8LqDTQLsDRF8KlMgzFAcpQl7qmDRrqg");
	var mask_graphics_605 = new cjs.Graphics().p("Aw2IkQDLrtKimCQKgmDLtDMQLtDJGDKhMgyyAdKQmCqhDKrtg");
	var mask_graphics_606 = new cjs.Graphics().p("Aw2IvQDErwKdmJQKdmJLuDEQLwDCGJKdMgyeAdqQmKqdDDrug");
	var mask_graphics_607 = new cjs.Graphics().p("Aw2I5QC8rxKamQQKYmQLxC8QLxC7GQKYMgyLAeLQmQqZC7rwg");
	var mask_graphics_608 = new cjs.Graphics().p("Aw1JDQC0rzKWmXQKUmWLzC1QLzCzGWKUMgx3AerQmXqVC0ryg");
	var mask_graphics_609 = new cjs.Graphics().p("Aw0JNQCsr0KSmeQKQmdL0CtQL1CsGeKQMgxkAfLQmdqRCsr0g");
	var mask_graphics_610 = new cjs.Graphics().p("AwzJYQClr2KNmkQKMmkL2ClQL2CkGkKNMgxPAfqQmkqNClr1g");
	var mask_graphics_611 = new cjs.Graphics().p("AwyJiQCdr3KJmrQKImrL4CfQL4CcGqKIMgw6AgKQmrqJCdr3g");
	var mask_graphics_612 = new cjs.Graphics().p("AwwJtQCVr5KFmxQKDmxL5CWQL6CUGxKFMgwmAgpQmxqFCWr4g");
	var mask_graphics_613 = new cjs.Graphics().p("AwvJ4QCOr7KBm4QJ/m3L6CPQL7CMG4KBMgwRAhIQm3qACNr6g");
	var mask_graphics_614 = new cjs.Graphics().p("AwsKDQCGr9J7m9QJ7m+L8CHQL8CFG+J7Mgv6AhnQm+p7CGr7g");
	var mask_graphics_615 = new cjs.Graphics().p("AwqKOQB+r+J4nEQJ2nFL9CAQL+B9HEJ3MgvlAiGQnEp3B+r8g");
	var mask_graphics_616 = new cjs.Graphics().p("AwnKZQB2r/JznLQJxnKL/B3QL/B2HKJyMgvOAilQnLpzB3r9g");
	var mask_graphics_617 = new cjs.Graphics().p("AwlKkQBwsAJtnRQJtnRMABwQMABuHRJuMgu4AjCQnRpuBur+g");
	var mask_graphics_618 = new cjs.Graphics().p("AwhKvQBnsBJpnXQJonXMBBoQMBBmHXJpMguhAjhQnXppBnsAg");
	var mask_graphics_619 = new cjs.Graphics().p("AweK6QBgsCJkndQJjndMCBgQMCBeHdJlMguKAj+QndpkBfsBg");
	var mask_graphics_620 = new cjs.Graphics().p("AwaLFQBYsCJfnkQJfnjMCBYQMDBXHkJgMgtzAkcQnkpgBYsCg");
	var mask_graphics_621 = new cjs.Graphics().p("AwWLRQBQsEJanpQJanqMDBRQMEBPHqJbMgtcAk5QnppbBQsCg");
	var mask_graphics_622 = new cjs.Graphics().p("AwSLcQBIsEJWnwQJUnvMFBJQMEBHHwJWMgtEAlWQnvpVBIsEg");
	var mask_graphics_623 = new cjs.Graphics().p("AwOLoQBBsFJQn2QJQn1MFBBQMFA/H2JRMgsrAlzQn2pQBAsEg");
	var mask_graphics_624 = new cjs.Graphics().p("AwJLzQA5sFJLn8QJLn7MFA6QMGA3H7JMMgsSAmQQn7pMA4sFg");
	var mask_graphics_625 = new cjs.Graphics().p("AwEL/QAxsGJGoBQJGoCMGAyQMGAwIBJGMgr5AmtQoCpHAxsFg");
	var mask_graphics_626 = new cjs.Graphics().p("Av/MLQApsIJCoGQJAoHMGAqQMHAoIHJBMgrgAnJQoIpBApsGg");
	var mask_graphics_627 = new cjs.Graphics().p("Av5MXQAhsII8oMQI7oNMHAiQMHAgINI8MgrHAnlQoNo8AhsGg");
	var mask_graphics_628 = new cjs.Graphics().p("AvzMjQAZsII3oSQI1oTMHAbQMIAYISI3MgqtAoAQoTo3AasGg");
	var mask_graphics_629 = new cjs.Graphics().p("AvtMvQARsJIxoXQIxoYMHASQMHARIZIxMgqUAobQoYoxASsGg");
	var mask_graphics_630 = new cjs.Graphics().p("AvnM7QAKsJIrodQIroeMIALQMHAJIeIsMgp5Ao2QoeosAKsGg");
	var mask_graphics_631 = new cjs.Graphics().p("AvgNHQACsJImoiQIlokMIADQMHABIkInMgpfApRQojomACsHg");
	var mask_graphics_632 = new cjs.Graphics().p("AvaNTQgFsIIgooQIgopMHgFQMIgHIpIhMgpEAprQopoggGsHg");
	var mask_graphics_633 = new cjs.Graphics().p("AvTNgQgNsJIbotQIaovMHgMQMIgPIuIbMgooAqGQovobgOsGg");
	var mask_graphics_634 = new cjs.Graphics().p("AvLNsQgWsIIWozQIUo0MHgUQMIgXIzIVMgoNAqgQo0oVgVsGg");
	var mask_graphics_635 = new cjs.Graphics().p("AvEN4QgdsIIQo4QIOo5MHgcQMHgfI5IQMgnxAq6Qo5oQgesGg");
	var mask_graphics_636 = new cjs.Graphics().p("Au8OFQglsIIKo9QIJo/MHgkQMGgmI/IKMgnWArTQo/oKglsFg");
	var mask_graphics_637 = new cjs.Graphics().p("Au0ORQgtsHIEpDQIEpDMGgsQMGguJEIEMgm6ArsQpEoEgtsFg");
	var mask_graphics_638 = new cjs.Graphics().p("AurOeQg1sHH+pIQH9pIMGg0QMGg2JIH+MgmdAsGQpJn/g0sEg");
	var mask_graphics_639 = new cjs.Graphics().p("AujOqQg8sGH4pNQH3pNMFg8QMFg9JOH4MgmBAseQpNn4g9sFg");
	var mask_graphics_640 = new cjs.Graphics().p("AuaO3QhEsFHypSQHxpTMFhDQMEhGJTHzMglkAs2QpTnyhEsEg");
	var mask_graphics_641 = new cjs.Graphics().p("AuRPEQhMsFHspXQHtpYMChKQMEhOJYHtMglHAtOQpYnshMsDg");
	var mask_graphics_642 = new cjs.Graphics().p("AuIPRQhTsEHmpcQHmpdMChSQMDhVJdHmMgkqAtmQpdnmhUsCg");
	var mask_graphics_643 = new cjs.Graphics().p("At+PeQhcsDHgphQHhpiMBhaQMChdJhHgMgkMAt+QpinghbsBg");
	var mask_graphics_644 = new cjs.Graphics().p("At0PrQhksDHaplQHapmMAhjQMBhkJnHaMgjvAuUQpmnahjr/g");
	var mask_graphics_645 = new cjs.Graphics().p("AtqP3QhrsBHTpqQHUprL/hqQMAhsJrHUMgjQAurQprnUhrr/g");
	var mask_graphics_646 = new cjs.Graphics().p("AtgQEQhzr/HOpvQHNpwL+hyQL/hzJwHNMgiyAvCQpwnOhzr+g");
	var mask_graphics_647 = new cjs.Graphics().p("AtVQSQh7r/HHp0QHHp0L9h5QL+h8J0HHMgiUAvYQp0nHh6r8g");
	var mask_graphics_648 = new cjs.Graphics().p("AtKQfQiDr+HBp4QHBp5L7iBQL8iDJ5HBMgh1AvuQp4nBiCr7g");
	var mask_graphics_649 = new cjs.Graphics().p("AtAQsQiKr8G7p9QG6p9L6iJQL7iLJ+G7MghXAwDQp9m6iKr6g");
	var mask_graphics_650 = new cjs.Graphics().p("As0Q6QiSr7G0qBQGzqCL5iRQL5iTKCG0Mgg1AwaQqCm0iSr4g");
	var mask_graphics_651 = new cjs.Graphics().p("AsnRIQibr5GtqGQGtqHL3iZQL3ibKHGtMggUAwwQqHmsiZr3g");
	var mask_graphics_652 = new cjs.Graphics().p("AsbRWQiir3GlqLQGmqLL1ihQL2ijKMGlMgf0AxHQqKmmiir1g");
	var mask_graphics_653 = new cjs.Graphics().p("AsORkQirr1GfqPQGfqQLzipQL0isKQGfMgfRAxcQqPmfiqrzg");
	var mask_graphics_654 = new cjs.Graphics().p("AsBRyQizrzGYqTQGXqVLyixQLyizKVGXMgewAxyQqTmYiyryg");
	var mask_graphics_655 = new cjs.Graphics().p("Ar0SBQi7ryGRqXQGQqZLwi6QLxi7KYGRMgeNAyGQqYmRi6rvg");
	var mask_graphics_656 = new cjs.Graphics().p("ArmSPQjDrwGJqbQGKqdLtjCQLvjDKdGJMgdrAybQqcmKjCrtg");
	var mask_graphics_657 = new cjs.Graphics().p("ArZSdQjKrtGCqgQGCqhLsjKQLsjLKhGCMgdIAyvQqgmCjLrsg");
	var mask_graphics_658 = new cjs.Graphics().p("ArLSsQjSrsF7qkQF7qlLpjRQLqjUKlF7MgclAzDQqkl7jTrpg");
	var mask_graphics_659 = new cjs.Graphics().p("Aq8S6QjbrpF0qoQFzqpLojaQLnjbKpF0MgcCAzWQqol0jarng");
	var mask_graphics_660 = new cjs.Graphics().p("AquTJQjirnFsqsQFsqtLljiQLmjjKtFsMgbfAzqQqsltjjrkg");
	var mask_graphics_661 = new cjs.Graphics().p("AqfTXQjrrkFmqwQFlqxLijpQLjjsKxFlMga8Az8Qqwlljqrig");
	var mask_graphics_662 = new cjs.Graphics().p("AqQTmQjyriFdq0QFeq0LgjyQLgjzK1FeMgaYA0OQq0lejyrfg");
	var mask_graphics_663 = new cjs.Graphics().p("AqAT0Qj7rfFWq3QFXq5Ldj5QLdj7K5FWMgZ0A0gQq3lWj6rdg");
	var mask_graphics_664 = new cjs.Graphics().p("ApxUDQkCrcFPq8QFOq8LbkBQLbkDK8FPMgZQA0yQq7lPkCrag");
	var mask_graphics_665 = new cjs.Graphics().p("AphURQkKrZFHq/QFHq/LYkJQLYkLLAFHMgYsA1DQq+lHkKrYg");
	var mask_graphics_666 = new cjs.Graphics().p("ApRUgQkSrXFArCQFArDLUkQQLWkTLDFAMgYHA1TQrDlAkRrUg");
	var mask_graphics_667 = new cjs.Graphics().p("ApAUvQkarUE4rFQE4rHLSkYQLSkbLHE4MgXjA1kQrFk4kZrRg");
	var mask_graphics_668 = new cjs.Graphics().p("AowU9QkhrQEwrJQExrKLOkgQLQkiLJExMgW9A1zQrJkwkhrPg");
	var mask_graphics_669 = new cjs.Graphics().p("AofVMQkprNEprMQEorNLMkoQLMkqLNEpMgWZA2DQrMkpkorLg");
	var mask_graphics_670 = new cjs.Graphics().p("AoOVbQkxrKEhrQQEhrQLJkvQLJkyLQEhMgV0A2TQrPkhkwrIg");
	var mask_graphics_671 = new cjs.Graphics().p("An9VpQk4rGEZrTQEarTLFk3QLFk5LUEZMgVPA2iQrSkak4rFg");
	var mask_graphics_672 = new cjs.Graphics().p("AnrV4QlArDERrWQESrWLCk+QLClBLWESMgUpA2vQrVkRk/rCg");
	var mask_graphics_673 = new cjs.Graphics().p("AnZWHQlIrAEKrYQEKrZK+lHQK/lILZEKMgUEA2+QrYkKlGq+g");
	var mask_graphics_674 = new cjs.Graphics().p("AnHWWQlQq9ECrbQEDrcK6lNQK7lQLcECMgTdA3LQrbkClOq6g");
	var mask_graphics_675 = new cjs.Graphics().p("Am1WkQlXq4D6rfQD7reK3lVQK3lXLfD6MgS4A3ZQrdj7lWq3g");
	var mask_graphics_676 = new cjs.Graphics().p("AmjWzQleq1DyrhQDzrgKzldQK0lfLhDzMgSRA3lQrhjzldqzg");
	var mask_graphics_677 = new cjs.Graphics().p("AmQXCQlmqxDrrkQDqrjKwlkQKwlmLkDqMgRsA3yQrjjrlkqvg");
	var mask_graphics_678 = new cjs.Graphics().p("Al9XRQltquDirmQDjrlKslsQKsltLmDiMgRFA3+Qrljjlsqrg");
	var mask_graphics_679 = new cjs.Graphics().p("AlqXfQl0qpDarpQDbrnKolzQKol1LpDbMgQfA4JQrpjblyqog");
	var mask_graphics_680 = new cjs.Graphics().p("AlXXuQl7qlDSrrQDTrqKkl6QKkl8LrDSMgP4A4UQrrjSl6qkg");
	var mask_graphics_681 = new cjs.Graphics().p("AlDX9QmDqhDLruQDKrsKgmBQKgmDLtDKMgPRA4fQrujKmAqgg");
	var mask_graphics_682 = new cjs.Graphics().p("AkvYMQmKqdDCrwQDDruKcmJQKbmKLwDDMgOrA4pQrwjDmHqbg");
	var mask_graphics_683 = new cjs.Graphics().p("AkbYbQmRqZC6ryQC7rwKXmQQKYmRLxC6MgOEA4zQrxi6mPqXg");
	var mask_graphics_684 = new cjs.Graphics().p("AkHYpQmYqUCyr0QCyryKUmXQKTmYLzCyMgNdA49QrzizmWqTg");
	var mask_graphics_685 = new cjs.Graphics().p("AjzY4QmfqQCqr1QCrr1KPmdQKOmgL2CqMgM3A5GQr1iqmdqPg");
	var mask_graphics_686 = new cjs.Graphics().p("AjeZHQmmqMCir3QCir2KKmlQKLmmL3CiMgMPA5OQr3iimkqKg");
	var mask_graphics_687 = new cjs.Graphics().p("AjJZWQmuqICar4QCbr4KFmsQKGmtL5CaMgLoA5WQr4iamrqFg");
	var mask_graphics_688 = new cjs.Graphics().p("Ai0ZkQm0qCCRr7QCSr5KCmyQKBm1L6CSMgLAA5eQr6iSmyqBg");
	var mask_graphics_689 = new cjs.Graphics().p("AifZzQm7p+CKr8QCJr7J9m5QJ8m7L8CKMgKZA5lQr7iKm5p8g");
	var mask_graphics_690 = new cjs.Graphics().p("AiKaCQnCp5CCr+QCCr8J3nAQJ4nCL9CBMgJxA5tQr9iCnAp3g");
	var mask_graphics_691 = new cjs.Graphics().p("Ah0aQQnJp0B6r/QB5r9JznHQJznJL+B5MgJJA5zQr/h5nGpzg");
	var mask_graphics_692 = new cjs.Graphics().p("AheafQnQpvBysAQBxr/JunOQJunPMABxMgIjA55Qr/hxnNpug");
	var mask_graphics_693 = new cjs.Graphics().p("AhIauQnWprBpsBQBpsAJpnUQJpnWMBBpMgH7A5+QsBhpnTpog");
	var mask_graphics_694 = new cjs.Graphics().p("Agya8QndplBhsCQBhsBJknbQJkndMCBhMgHTA6EQsChhnapkg");
	var mask_graphics_695 = new cjs.Graphics().p("AgcbLQnjpgBZsDQBYsDJfnhQJfnjMDBYMgGrA6JQsDhZnhpeg");
	var mask_graphics_696 = new cjs.Graphics().p("AgFbZQnqpbBQsEQBQsDJanoQJanpMEBQMgGDA6NQsEhQnnpag");
	var mask_graphics_697 = new cjs.Graphics().p("AAQboQnvpWBIsFQBIsDJVnvQJUnwMFBIMgFbA6RQsFhInvpUg");
	var mask_graphics_698 = new cjs.Graphics().p("AAnb2Qn1pQBAsGQA/sEJPn1QJPn2MGA/MgEzA6VQsGhAn1pPg");
	var mask_graphics_699 = new cjs.Graphics().p("AA+cEQn8pLA4sGQA3sFJKn7QJJn9MGA3MgELA6YQsGg4n7pJg");
	var mask_graphics_700 = new cjs.Graphics().p("ABccXQoDpEAssHQAssFJDoEQJCoFMHAtMgDWA6bQsHgtoEpCg");
	var mask_graphics_701 = new cjs.Graphics().p("AB7cqQoMo8AisIQAhsGI8oMQI7oNMHAiMgCiA6dQsHghoMo7g");
	var mask_graphics_702 = new cjs.Graphics().p("ACbc9QoUo1AWsIQAXsHI0oTQIzoVMIAWMgBtA6gQsIgXoTozg");
	var mask_graphics_703 = new cjs.Graphics().p("AC6dQQocouAMsIQALsHItobQIrodMJALMgA4A6hQsIgMocorg");
	var mask_graphics_704 = new cjs.Graphics().p("ADadiQokolABsIQABsHIkokQIkokMIAAMgADA6hQsIgBojokg");
	var mask_graphics_705 = new cjs.Graphics().p("ADhd1QoroegLsIQgKsHIdorQIcosMIgLMAAyA6hIgdAAQr1AAohoSg");
	var mask_graphics_706 = new cjs.Graphics().p("ADneHQozoWgVsHQgWsHIVozQIVo0MHgVMABnA6fIg7ABQriAAodoAg");
	var mask_graphics_707 = new cjs.Graphics().p("ADteZQo6oOghsHQggsHINo6QIMo7MIggMACcA6dQgtACgtAAQrPAAoZnug");
	var mask_graphics_708 = new cjs.Graphics().p("AD0erQpCoGgssHQgrsGIFpBQIEpDMHgrMADRA6bQg8ADg7AAQq9AAoUncg");
	var mask_graphics_709 = new cjs.Graphics().p("AD6e8QpJn9g2sGQg2sGH8pIQH8pKMGg2MAEGA6XQhLAFhJAAQqrAAoQnLg");
	var mask_graphics_710 = new cjs.Graphics().p("AEBfNQpQn1hBsFQhBsFH0pPQH0pRMFhBMAE6A6TQhZAHhXAAQqZAAoMm6g");
	var mask_graphics_711 = new cjs.Graphics().p("AEIfeQpXnthMsEQhMsDHspXQHrpYMEhMMAFvA6OQhnAKhlAAQqIAAoHmpg");
	var mask_graphics_712 = new cjs.Graphics().p("AEQfuQpenkhXsDQhXsDHkpdQHipfMDhXMAGjA6JQh1AOhyAAQp4AAoBmag");
	var mask_graphics_713 = new cjs.Graphics().p("AEXf/QpknchisCQhisCHcpjQHZpmMChhMAHYA6CQiEARh/AAQpoAAn8mJg");
	var mask_graphics_714 = new cjs.Graphics().p("EAEfAgOQprnShtsBQhssAHTpqQHQpsMAhtMAINA57QiSAViMAAQpYAAn2l6g");
	var mask_graphics_715 = new cjs.Graphics().p("EAEoAgeQpynKh4r/Qh3r+HKpxQHHpzL/h3MAJBA5zQifAZiZAAQpJAAnvlqg");
	var mask_graphics_716 = new cjs.Graphics().p("EAEwAgtQp4nBiDr9QiCr9HBp3QG/p5L9iCMAJ1A5rQitAdilAAQo6AAnplbg");
	var mask_graphics_717 = new cjs.Graphics().p("EAE5Ag8Qp/m4iNr7QiNr7G4p9QG2qAL7iNMAKpA5iQi6AiiyAAQorAAnilMg");
	var mask_graphics_718 = new cjs.Graphics().p("EAFCAhLQqFmviYr5QiYr5GvqDQGtqGL5iYMALdA5YQjHAni/AAQobAAnck9g");
	var mask_graphics_719 = new cjs.Graphics().p("EAFLAhZQqLmmijr2Qiir3GmqJQGjqML3ijMAMRA5NQjUAujLAAQoNAAnVkwg");
	var mask_graphics_720 = new cjs.Graphics().p("EAFUAhnQqQmciur1Qitr0GdqPQGaqSL0itMANFA5BQjhA0jXAAQn/AAnOkig");
	var mask_graphics_721 = new cjs.Graphics().p("EAFeAh1QqXmTi4ryQi4ryGUqVQGRqXLyi4MAN3A41QjsA6jkAAQnxAAnGkUg");
	var mask_graphics_722 = new cjs.Graphics().p("EAFoAiCQqcmJjDrwQjCrvGKqaQGHqdLvjDMAOrA4oQj5BBjvAAQnkAAm+kHg");
	var mask_graphics_723 = new cjs.Graphics().p("EAFyAiPQqimAjNrsQjNrsGBqhQF+qiLsjNMAPeA4aQkFBIj8AAQnWAAm2j6g");
	var mask_graphics_724 = new cjs.Graphics().p("EAF8AicQqnl3jXrpQjYrpF3qmQF0qnLqjYMAQRA4MQkRBPkIAAQnJAAmujtg");
	var mask_graphics_725 = new cjs.Graphics().p("EAGHAipQqsltjirnQjjrmFuqrQFrqsLmjiMARDA38QkcBXkUAAQm8AAmljgg");
	var mask_graphics_726 = new cjs.Graphics().p("EAGSAi1QqylkjsriQjtrjFkqwQFiqyLijtMAR2A3tQkoBfkgAAQmvAAmcjUg");
	var mask_graphics_727 = new cjs.Graphics().p("EAGdAjBQq2laj3rfQj4rgFaq1QFZq2Lej3MASpA3cQk0BnkrAAQmiAAmUjIg");
	var mask_graphics_728 = new cjs.Graphics().p("EAGoAjMQq7lQkBrbQkCrcFQq6QFPq7LbkCMATaA3LQk+Bwk4AAQmVAAmLi9g");
	var mask_graphics_729 = new cjs.Graphics().p("EAG0AjXQrAlFkMrZQkMrYFHq+QFErALXkMMAUMA25QlJB5lDAAQmJAAmBiyg");
	var mask_graphics_730 = new cjs.Graphics().p("EAG/AjiQrEk8kWrUQkWrUE8rDQE7rFLTkWMAU+A2nQlUCClQAAQl8AAl4ing");
	var mask_graphics_731 = new cjs.Graphics().p("EAHLAjtQrIkykhrQQkgrREzrHQEwrJLPkgMAVvA2TQleCMlcAAQlwAAluicg");
	var mask_graphics_732 = new cjs.Graphics().p("EAHXAj3QrMkokrrMQkqrMEorLQEmrOLLkqMAWgA1/QloCWloAAQlkAAlkiSg");
	var mask_graphics_733 = new cjs.Graphics().p("EAHkAkBQrRkek1rIQk0rHEerQQEcrRLHk1MAXRA1rQlzCgl0AAQlYAAlZiIg");
	var mask_graphics_734 = new cjs.Graphics().p("EAHwAkKQrUkTk/rDQk+rEETrTQESrVLDk/MAYBA1VQl8CrmBAAQlMAAlPh/g");
	var mask_graphics_735 = new cjs.Graphics().p("EAH9AkTQrZkIlIq/QlIq/EJrXQEIrZK+lJMAYxA0/QmGC2mNAAQk/AAlFh2g");
	var mask_graphics_736 = new cjs.Graphics().p("EAIKAkcQrcj+lSq6QlTq6EArbQD9rdK5lSMAZhA0oQmPDBmaAAQkzAAk6htg");
	var mask_graphics_737 = new cjs.Graphics().p("EAIXAklQrfj0ldq2Qlcq1D1reQDzrgK0ldMAaQA0RQmYDNmmAAQknAAkvhkg");
	var mask_graphics_738 = new cjs.Graphics().p("EAIlAktQrjjqlmqwQlmqwDqrjQDprjKvllMAa/Az4QmhDZmzAAQkbAAkjhcg");
	var mask_graphics_739 = new cjs.Graphics().p("EAIyAk1QrmjflwqsQlvqrDgrmQDerlKqlwMAbuAzgQmqDlnAAAQkPAAkYhUg");
	var mask_graphics_740 = new cjs.Graphics().p("EAJAAk8QrpjUl5qmQl6qmDWrpQDTrpKll5MAccAzGQmxDynNAAQkEAAkMhNg");
	var mask_graphics_741 = new cjs.Graphics().p("EAJOAlEQrsjLmDqgQmDqhDLrsQDJrrKgmDMAdKAysQm6D/naAAQj4AAkAhFg");
	var mask_graphics_742 = new cjs.Graphics().p("EAJcAlKQrvi/mMqbQmMqbDArvQC/ruKZmMMAd4AyRQnCELnnAAQjsABj0g/g");
	var mask_graphics_743 = new cjs.Graphics().p("EAJrAlRQryi1mWqVQmVqWC2rxQCzrxKVmWMAelAx3QnKEYn1AAQjgAAjng3g");
	var mask_graphics_744 = new cjs.Graphics().p("EAJ5AlXQr0iqmfqQQmfqPCrr0QCpr0KPmeMAfSAxaQnREmoEAAQjSAAjcgxg");
	var mask_graphics_745 = new cjs.Graphics().p("EAKIAldQr3igmoqJQmoqKChr2QCer2KJmoMAf+Aw+QnYE0oSAAQjGAAjPgrg");
	var mask_graphics_746 = new cjs.Graphics().p("EAKXAliQr5iVmxqDQmxqECVr4QCUr4KDmxMAgqAwgQnfFDogAAQi6AAjCgmg");
	var mask_graphics_747 = new cjs.Graphics().p("EAKmAlnQr7iKm6p9Qm6p+CLr6QCJr6J9m6MAhVAwCQnmFSouAAQiuAAi1ghg");
	var mask_graphics_748 = new cjs.Graphics().p("EAK1AlsQr8iAnEp3QnDp2CAr9QB+r8J3nDMAiBAvkQntFgo9AAQihAAiogbg");
	var mask_graphics_749 = new cjs.Graphics().p("EALFAlwQr/h1nMpwQnMpwB2r/QBzr9JwnMMAirAvFQnyFvpNAAQiUAAiagXg");
	var mask_graphics_750 = new cjs.Graphics().p("EALUAl0QsAhqnUpqQnVpqBqr/QBpr/JqnVMAjVAulQn5F/pcAAQiHAAiNgTg");
	var mask_graphics_751 = new cjs.Graphics().p("EALkAl3QsBhenepkQndpjBfsBQBesAJjneMAj/AuFQn+GPpsAAQh6AAh/gQg");
	var mask_graphics_752 = new cjs.Graphics().p("EAL0Al6QsDhTnmpdQnmpcBVsCQBTsCJcnmMAkpAtkQoEGfp8AAQhtAAhxgNg");
	var mask_graphics_753 = new cjs.Graphics().p("EAMEAl9QsEhJnupVQnvpWBKsDQBIsDJVnuMAlSAtCQoJGwqMAAQhgAAhjgKg");
	var mask_graphics_754 = new cjs.Graphics().p("EAMUAmAQsFg+n2pPQn3pOA/sFQA9sDJOn3MAl6AshQoOG/qdAAQhSAAhVgGg");
	var mask_graphics_755 = new cjs.Graphics().p("EAMkAmCQsGgzn+pIQn/pHA0sFQAysEJHoAMAmiAr+QoTHRquAAQhFAAhGgEg");
	var mask_graphics_756 = new cjs.Graphics().p("EAM1AmDQsHgooGpAQoIpAApsGQAnsFJAoHMAnKArbQoXHirBAAQg2AAg3gDg");
	var mask_graphics_757 = new cjs.Graphics().p("EANGAmFQsIgeoOo4QoQo5AfsGQAcsFI4oQMAnxAq3QobH0rTAAQgoAAgogBg");
	var mask_graphics_758 = new cjs.Graphics().p("EANWAmFQsHgSoXoxQoXoxATsHQARsFIxoYMAoXAqTQofIGrlAAIgzgBg");
	var mask_graphics_759 = new cjs.Graphics().p("EANnAmGQsIgHoeoqQofopAIsHQAGsGIqofMAo9ApuQojIYr4AAIgVAAg");
	var mask_graphics_760 = new cjs.Graphics().p("Am1doQonoigDsHQgFsGIionMApiApJQoiInsGAEIgKAAQsBAAoioeg");
	var mask_graphics_761 = new cjs.Graphics().p("Amsd6QouoagOsGQgQsGIaovMAqHAojQoaIvsFAOIgpABQruAAofoMg");
	var mask_graphics_762 = new cjs.Graphics().p("AmieMQo2oRgYsHQgbsFISo2MAqrAn8QoSI2sFAaIhHABQrbAAobn6g");
	var mask_graphics_763 = new cjs.Graphics().p("AmXeeQo+oKgjsGQgmsFIKo9MArPAnVQoKI+sFAlQgyACgyAAQrIAAoXnog");
	var mask_graphics_764 = new cjs.Graphics().p("AmMewQpFoCgvsFQgwsFICpEMAryAmuQoCJFsEAvQhCAEhAAAQq2AAoSnWg");
	var mask_graphics_765 = new cjs.Graphics().p("AmBfBQpMn5g5sFQg8sEH6pMMAsVAmHQn6JMsDA6QhRAGhOAAQqkAAoOnFg");
	var mask_graphics_766 = new cjs.Graphics().p("Al1fSQpUnxhEsEQhGsCHxpUMAs3AleQnxJUsDBFQheAIhcAAQqTAAoJm0g");
	var mask_graphics_767 = new cjs.Graphics().p("AlpfjQpanphQsDQhRsBHppaMAtZAk1QnpJasCBQQhtALhpAAQqCAAoEmjg");
	var mask_graphics_768 = new cjs.Graphics().p("AldfzQphnghasCQhcsBHgpgMAt6AkMQngJhsBBbQh7AOh2AAQpyAAn/mTg");
	var mask_graphics_769 = new cjs.Graphics().p("EgFRAgDQpnnXhlsAQhnsAHXpnMAubAjiQnYJor/BlQiJATiEAAQpiAAn5mEg");
	var mask_graphics_770 = new cjs.Graphics().p("EgFFAgRQptnPhvr/Qhxr/HQpsMAu3Ai8QnQJur+BvQiVAWiPAAQpUAAn0l2g");
	var mask_graphics_771 = new cjs.Graphics().p("EgE5AgfQpznIh4r9Qh7r9HIpzMAvTAiXQnIJ0r8B5QiiAZiaAAQpHAAnulog");
	var mask_graphics_772 = new cjs.Graphics().p("EgEtAgtQp5nAiBr8QiEr8HAp4MAvtAhxQnAJ5r6CDQitAdimAAQo5AAnplag");
	var mask_graphics_773 = new cjs.Graphics().p("EgEgAg6Qp/m4iLr6QiNr6G4p+MAwIAhLQm4J+r5CMQi5AiixAAQorAAnjlNg");
	var mask_graphics_774 = new cjs.Graphics().p("EgEUAhHQqEmwiUr4QiXr4GwqDMAwjAgjQmwKEr3CWQjFAni8AAQofAAndlBg");
	var mask_graphics_775 = new cjs.Graphics().p("EgEHAhUQqJmoier2Qihr3GoqIMAw9Af9QmoKJr1CfQjQAsjHAAQoSAAnXk0g");
	var mask_graphics_776 = new cjs.Graphics().p("EgD5AhgQqPmfior1Qipr0GfqNMAxWAfVQmfKOrzCpQjbAxjTAAQoFAAnQkog");
	var mask_graphics_777 = new cjs.Graphics().p("EgDsAhtQqTmYiyryQizryGXqSMAxwAetQmYKUrxCyQjmA2jdAAQn5AAnKkbg");
	var mask_graphics_778 = new cjs.Graphics().p("EgDeAh5QqZmPi6rwQi9rwGPqYMAyIAeGQmPKZrvC7QjxA8joAAQntAAnDkPg");
	var mask_graphics_779 = new cjs.Graphics().p("EgDQAiFQqdmHjEruQjHrtGHqcMAygAddQmHKdrsDFQj8BCjzAAQnhAAm8kDg");
	var mask_graphics_780 = new cjs.Graphics().p("EgDBAiQQqjl+jNrrQjQrrF/qhMAy2Ac0Ql+KjrqDOQkGBJj+AAQnUAAm1j5g");
	var mask_graphics_781 = new cjs.Graphics().p("EgCyAicQqol2jXrpQjYrnF1qnMAzOAcMQl2KnrnDYQkRBPkIAAQnJAAmtjtg");
	var mask_graphics_782 = new cjs.Graphics().p("EgCjAinQqsltjhrmQjirlFuqrMAzkAbiQluKsrkDhQkbBWkTAAQm9AAmmjig");
	var mask_graphics_783 = new cjs.Graphics().p("EgCUAiyQqxlljprjQjrriFkqwMAz6Aa5QllKxrhDqQkmBdkdAAQmyAAmejXg");
	var mask_graphics_784 = new cjs.Graphics().p("EgCFAi8Qq1lcjyrgQj1rfFcq0MA0PAaPQlcK1reDzQkwBlkoAAQmmAAmXjNg");
	var mask_graphics_785 = new cjs.Graphics().p("EgB1AjHQq5lUj8rcQj+rcFUq5MA0kAZlQlUK5rbD9Qk6BskyAAQmcAAmOjCg");
	var mask_graphics_786 = new cjs.Graphics().p("EgBlAjRQq9lLkFrZQkHrZFKq9MA05AY7QlLK9rYEGQlDB0k+AAQmQAAmGi4g");
	var mask_graphics_787 = new cjs.Graphics().p("EgBUAjbQrClCkOrWQkQrWFCrAMA1MAYQQlCLBrVEPQlNB8lIAAQmFAAl9iug");
	var mask_graphics_788 = new cjs.Graphics().p("EgBEAjkQrFk5kYrSQkZrSE5rFMA1fAXlQk5LGrREYQlWCElTAAQl6AAl1ilg");
	var mask_graphics_789 = new cjs.Graphics().p("EgAzAjuQrJkwkhrQQkirOEwrIMA1yAW6QkwLJrOEhQlfCNleAAQlvAAlsibg");
	var mask_graphics_790 = new cjs.Graphics().p("EgAiAj3QrNknkprMQksrLEnrMMA2FAWPQknLNrLEqQloCWloAAQllABljiTg");
	var mask_graphics_791 = new cjs.Graphics().p("EgARAkAQrQkekzrIQk0rHEerQMA2WAVkQkeLQrHEzQlxCglzAAQlZAAlbiKg");
	var mask_graphics_792 = new cjs.Graphics().p("EAAAAkIQrTkVk8rEQk9rDEVrTMA2nAU4QkVLUrCE8Ql6Cpl+AAQlPAAlSiCg");
	var mask_graphics_793 = new cjs.Graphics().p("EAASAkRQrXkMlErAQlGq/EMrXMA23AUMQkMLYq+FEQmCCzmKAAQlEAAlIh5g");
	var mask_graphics_794 = new cjs.Graphics().p("EAAkAkZQrakDlNq8QlPq7EDraMA3HATgQkCLbq7FNQmLC9mUAAQk5AAk/hxg");
	var mask_graphics_795 = new cjs.Graphics().p("EAA2AkgQrdj5lWq4QlXq2D5reMA3XAS0Qj5Leq3FWQmTDHmfAAQkvAAk1hqg");
	var mask_graphics_796 = new cjs.Graphics().p("EABJAkoQrhjwleq0QlgqyDwrgMA3mASHQjxLhqxFfQmbDRmrAAQkkAAkrhig");
	var mask_graphics_797 = new cjs.Graphics().p("EABbAkvQrjjnlnqvQlpquDorkMA3zARcQjnLkqtFnQmjDbm2ABQkZAAkihbg");
	var mask_graphics_798 = new cjs.Graphics().p("EABuAk2QrmjelvqqQlyqpDernMA4CAQuQjeLnqpFwQmqDmnCAAQkPAAkXhTg");
	var mask_graphics_799 = new cjs.Graphics().p("EACCAk9QrpjVl4qmQl6qkDVrqMA4OAQCQjULpqlF5QmxDxnOAAQkEAAkMhMg");
	var mask_graphics_800 = new cjs.Graphics().p("EACOAlBQrrjPl9qiQl/qiDOrsMA4XAPlQjOLsqhF9Qm3D5nVAAQj9AAkGhIg");
	var mask_graphics_801 = new cjs.Graphics().p("EACaAlFQrsjImDqgQmFqfDJrtMA4fAPHQjILuqeGDQm8EAncAAQj3AAj/hEg");
	var mask_graphics_802 = new cjs.Graphics().p("EACnAlJQrujCmJqdQmKqbDDrvMA4nAOqQjCLvqbGIQnAEInlAAQjvAAj4hAg");
	var mask_graphics_803 = new cjs.Graphics().p("EAC0AlNQrwi9mOqZQmQqYC9rxMA4vAONQi8LxqYGOQnEEPntAAQjoAAjxg8g");
	var mask_graphics_804 = new cjs.Graphics().p("EADAAlRQrxi3mTqWQmVqVC2ryMA43ANvQi2LyqVGUQnJEXn0AAQjiAAjqg4g");
	var mask_graphics_805 = new cjs.Graphics().p("EADNAlUQrziwmYqTQmbqSCwr0MA4/ANSQiwL0qSGZQnNEfn8AAQjbAAjjg1g");
	var mask_graphics_806 = new cjs.Graphics().p("EADaAlYQr0iqmeqQQmgqPCqr1MA5GAM1QiqL1qPGeQnREnoFAAQjTAAjcgxg");
	var mask_graphics_807 = new cjs.Graphics().p("EADnAlbQr2ikmjqMQmlqLCkr3MA5MAMXQijL2qLGkQnWEvoNAAQjMAAjVgug");
	var mask_graphics_808 = new cjs.Graphics().p("EAD0AleQr3idmpqJQmqqICer4MA5TAL5QieL4qHGpQnaE3oVAAQjFAAjOgrg");
	var mask_graphics_809 = new cjs.Graphics().p("EAEBAliQr4iYmuqGQmwqECYr6MA5aALcQiYL5qEGvQneE/odAAQi/AAjGgng");
	var mask_graphics_810 = new cjs.Graphics().p("EAEPAllQr6iSmzqCQm1qBCRr7MA5gAK+QiRL7qBGzQniFIomAAQi3AAi+gkg");
	var mask_graphics_811 = new cjs.Graphics().p("EAEcAloQr7iMm4p/Qm6p9CLr8MA5mAKgQiML8p9G5QnmFQouAAQiwAAi3ghg");
	var mask_graphics_812 = new cjs.Graphics().p("EAEqAlqQr9iFm9p7QnAp6CFr9MA5sAKCQiFL9p6G+QnqFZo2AAQipAAivgfg");
	var mask_graphics_813 = new cjs.Graphics().p("EAE3AltQr9h/nDp4QnFp2B/r+MA5xAJkQh/L/p2HDQntFhpAAAQihAAiogcg");
	var mask_graphics_814 = new cjs.Graphics().p("EAFFAlwQr/h5nIp0QnJpzB4r/MA53AJGQh5MApzHIQnxFqpIAAQiaAAiggZg");
	var mask_graphics_815 = new cjs.Graphics().p("EAFSAlyQr/hynNpxQnPpvBzsAMA57AIoQhzMBpvHNQn0FzpRAAQiTAAiZgXg");
	var mask_graphics_816 = new cjs.Graphics().p("EAFgAl0QsAhsnSptQnUprBssBMA6AAIKQhsMCprHSQn5F8paAAQiLAAiRgVg");
	var mask_graphics_817 = new cjs.Graphics().p("EAFvAl2QsBhmnYppQnZpoBnsCMA6EAHsQhmMDpoHXQn7GFpjAAQiEAAiJgSg");
	var mask_graphics_818 = new cjs.Graphics().p("EAHqAmDQsGgwoBpHQoDpFAxsIMA6dADqQgwMHpFIBQoVHXq2AAQhBAAhDgFg");
	var mask_graphics_819 = new cjs.Graphics().p("ArGdrQopoggGsJMA6lgAbQAGMJohIoQoiIqsIAFIgQAAQr+AAojocg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(580).to({graphics:mask_graphics_580,x:244.7,y:175.3}).wait(1).to({graphics:mask_graphics_581,x:244.4,y:176.2}).wait(1).to({graphics:mask_graphics_582,x:244.1,y:177.1}).wait(1).to({graphics:mask_graphics_583,x:243.9,y:178}).wait(1).to({graphics:mask_graphics_584,x:243.6,y:178.9}).wait(1).to({graphics:mask_graphics_585,x:243.3,y:179.8}).wait(1).to({graphics:mask_graphics_586,x:243,y:180.7}).wait(1).to({graphics:mask_graphics_587,x:242.7,y:181.6}).wait(1).to({graphics:mask_graphics_588,x:242.4,y:182.5}).wait(1).to({graphics:mask_graphics_589,x:242,y:183.4}).wait(1).to({graphics:mask_graphics_590,x:241.7,y:184.3}).wait(1).to({graphics:mask_graphics_591,x:241.3,y:185.1}).wait(1).to({graphics:mask_graphics_592,x:241,y:186}).wait(1).to({graphics:mask_graphics_593,x:240.6,y:186.9}).wait(1).to({graphics:mask_graphics_594,x:240.3,y:187.8}).wait(1).to({graphics:mask_graphics_595,x:239.9,y:188.6}).wait(1).to({graphics:mask_graphics_596,x:239.5,y:189.5}).wait(1).to({graphics:mask_graphics_597,x:239.1,y:190.3}).wait(1).to({graphics:mask_graphics_598,x:238.7,y:191.2}).wait(1).to({graphics:mask_graphics_599,x:238.3,y:192}).wait(1).to({graphics:mask_graphics_600,x:237.8,y:192.9}).wait(1).to({graphics:mask_graphics_601,x:237.4,y:193.7}).wait(1).to({graphics:mask_graphics_602,x:237,y:194.5}).wait(1).to({graphics:mask_graphics_603,x:236.5,y:195.4}).wait(1).to({graphics:mask_graphics_604,x:236.1,y:196.2}).wait(1).to({graphics:mask_graphics_605,x:235.6,y:197}).wait(1).to({graphics:mask_graphics_606,x:235.1,y:197.8}).wait(1).to({graphics:mask_graphics_607,x:234.6,y:198.6}).wait(1).to({graphics:mask_graphics_608,x:234.1,y:199.4}).wait(1).to({graphics:mask_graphics_609,x:233.7,y:200.2}).wait(1).to({graphics:mask_graphics_610,x:233.1,y:201}).wait(1).to({graphics:mask_graphics_611,x:232.6,y:201.8}).wait(1).to({graphics:mask_graphics_612,x:232.1,y:202.6}).wait(1).to({graphics:mask_graphics_613,x:231.6,y:203.4}).wait(1).to({graphics:mask_graphics_614,x:231,y:204.1}).wait(1).to({graphics:mask_graphics_615,x:230.5,y:204.9}).wait(1).to({graphics:mask_graphics_616,x:229.9,y:205.7}).wait(1).to({graphics:mask_graphics_617,x:229.4,y:206.4}).wait(1).to({graphics:mask_graphics_618,x:228.8,y:207.2}).wait(1).to({graphics:mask_graphics_619,x:228.2,y:207.9}).wait(1).to({graphics:mask_graphics_620,x:227.7,y:208.7}).wait(1).to({graphics:mask_graphics_621,x:227.1,y:209.4}).wait(1).to({graphics:mask_graphics_622,x:226.5,y:210.1}).wait(1).to({graphics:mask_graphics_623,x:225.9,y:210.8}).wait(1).to({graphics:mask_graphics_624,x:225.2,y:211.6}).wait(1).to({graphics:mask_graphics_625,x:224.6,y:212.3}).wait(1).to({graphics:mask_graphics_626,x:224,y:213}).wait(1).to({graphics:mask_graphics_627,x:223.4,y:213.7}).wait(1).to({graphics:mask_graphics_628,x:222.7,y:214.4}).wait(1).to({graphics:mask_graphics_629,x:222.1,y:215}).wait(1).to({graphics:mask_graphics_630,x:221.4,y:215.7}).wait(1).to({graphics:mask_graphics_631,x:220.8,y:216.4}).wait(1).to({graphics:mask_graphics_632,x:220.1,y:217}).wait(1).to({graphics:mask_graphics_633,x:219.4,y:217.7}).wait(1).to({graphics:mask_graphics_634,x:218.7,y:218.3}).wait(1).to({graphics:mask_graphics_635,x:218,y:219}).wait(1).to({graphics:mask_graphics_636,x:217.4,y:219.6}).wait(1).to({graphics:mask_graphics_637,x:216.7,y:220.2}).wait(1).to({graphics:mask_graphics_638,x:215.9,y:220.9}).wait(1).to({graphics:mask_graphics_639,x:215.2,y:221.5}).wait(1).to({graphics:mask_graphics_640,x:214.5,y:222.1}).wait(1).to({graphics:mask_graphics_641,x:213.8,y:222.7}).wait(1).to({graphics:mask_graphics_642,x:213.1,y:223.3}).wait(1).to({graphics:mask_graphics_643,x:212.3,y:223.9}).wait(1).to({graphics:mask_graphics_644,x:211.6,y:224.4}).wait(1).to({graphics:mask_graphics_645,x:210.8,y:225}).wait(1).to({graphics:mask_graphics_646,x:210.1,y:225.6}).wait(1).to({graphics:mask_graphics_647,x:209.3,y:226.1}).wait(1).to({graphics:mask_graphics_648,x:208.5,y:226.7}).wait(1).to({graphics:mask_graphics_649,x:207.8,y:227.2}).wait(1).to({graphics:mask_graphics_650,x:206.9,y:227.8}).wait(1).to({graphics:mask_graphics_651,x:206.1,y:228.3}).wait(1).to({graphics:mask_graphics_652,x:205.3,y:228.9}).wait(1).to({graphics:mask_graphics_653,x:204.4,y:229.4}).wait(1).to({graphics:mask_graphics_654,x:203.6,y:229.9}).wait(1).to({graphics:mask_graphics_655,x:202.7,y:230.5}).wait(1).to({graphics:mask_graphics_656,x:201.9,y:231}).wait(1).to({graphics:mask_graphics_657,x:201,y:231.5}).wait(1).to({graphics:mask_graphics_658,x:200.1,y:232}).wait(1).to({graphics:mask_graphics_659,x:199.2,y:232.5}).wait(1).to({graphics:mask_graphics_660,x:198.4,y:233}).wait(1).to({graphics:mask_graphics_661,x:197.5,y:233.4}).wait(1).to({graphics:mask_graphics_662,x:196.6,y:233.9}).wait(1).to({graphics:mask_graphics_663,x:195.7,y:234.3}).wait(1).to({graphics:mask_graphics_664,x:194.8,y:234.8}).wait(1).to({graphics:mask_graphics_665,x:193.9,y:235.2}).wait(1).to({graphics:mask_graphics_666,x:193,y:235.6}).wait(1).to({graphics:mask_graphics_667,x:192.1,y:236}).wait(1).to({graphics:mask_graphics_668,x:191.1,y:236.4}).wait(1).to({graphics:mask_graphics_669,x:190.2,y:236.8}).wait(1).to({graphics:mask_graphics_670,x:189.3,y:237.2}).wait(1).to({graphics:mask_graphics_671,x:188.4,y:237.6}).wait(1).to({graphics:mask_graphics_672,x:187.4,y:237.9}).wait(1).to({graphics:mask_graphics_673,x:186.5,y:238.3}).wait(1).to({graphics:mask_graphics_674,x:185.5,y:238.6}).wait(1).to({graphics:mask_graphics_675,x:184.6,y:239}).wait(1).to({graphics:mask_graphics_676,x:183.6,y:239.3}).wait(1).to({graphics:mask_graphics_677,x:182.7,y:239.6}).wait(1).to({graphics:mask_graphics_678,x:181.7,y:239.9}).wait(1).to({graphics:mask_graphics_679,x:180.8,y:240.2}).wait(1).to({graphics:mask_graphics_680,x:179.8,y:240.4}).wait(1).to({graphics:mask_graphics_681,x:178.8,y:240.7}).wait(1).to({graphics:mask_graphics_682,x:177.9,y:241}).wait(1).to({graphics:mask_graphics_683,x:176.9,y:241.2}).wait(1).to({graphics:mask_graphics_684,x:175.9,y:241.5}).wait(1).to({graphics:mask_graphics_685,x:175,y:241.7}).wait(1).to({graphics:mask_graphics_686,x:174,y:241.9}).wait(1).to({graphics:mask_graphics_687,x:173,y:242.1}).wait(1).to({graphics:mask_graphics_688,x:172,y:242.3}).wait(1).to({graphics:mask_graphics_689,x:171,y:242.5}).wait(1).to({graphics:mask_graphics_690,x:170,y:242.7}).wait(1).to({graphics:mask_graphics_691,x:169,y:242.8}).wait(1).to({graphics:mask_graphics_692,x:168.1,y:243}).wait(1).to({graphics:mask_graphics_693,x:167.1,y:243.1}).wait(1).to({graphics:mask_graphics_694,x:166.1,y:243.3}).wait(1).to({graphics:mask_graphics_695,x:165.1,y:243.4}).wait(1).to({graphics:mask_graphics_696,x:164.1,y:243.5}).wait(1).to({graphics:mask_graphics_697,x:163.1,y:243.6}).wait(1).to({graphics:mask_graphics_698,x:162.1,y:243.7}).wait(1).to({graphics:mask_graphics_699,x:161,y:243.7}).wait(1).to({graphics:mask_graphics_700,x:159.7,y:243.8}).wait(1).to({graphics:mask_graphics_701,x:158.4,y:243.8}).wait(1).to({graphics:mask_graphics_702,x:157.1,y:243.9}).wait(1).to({graphics:mask_graphics_703,x:155.8,y:243.9}).wait(1).to({graphics:mask_graphics_704,x:154.4,y:243.9}).wait(1).to({graphics:mask_graphics_705,x:155.6,y:243.9}).wait(1).to({graphics:mask_graphics_706,x:156.9,y:243.9}).wait(1).to({graphics:mask_graphics_707,x:158.3,y:243.9}).wait(1).to({graphics:mask_graphics_708,x:159.6,y:243.9}).wait(1).to({graphics:mask_graphics_709,x:160.9,y:243.9}).wait(1).to({graphics:mask_graphics_710,x:162.2,y:243.9}).wait(1).to({graphics:mask_graphics_711,x:163.5,y:243.9}).wait(1).to({graphics:mask_graphics_712,x:164.8,y:244}).wait(1).to({graphics:mask_graphics_713,x:166.2,y:244}).wait(1).to({graphics:mask_graphics_714,x:167.5,y:244}).wait(1).to({graphics:mask_graphics_715,x:168.8,y:244}).wait(1).to({graphics:mask_graphics_716,x:170.1,y:244}).wait(1).to({graphics:mask_graphics_717,x:171.4,y:244}).wait(1).to({graphics:mask_graphics_718,x:172.7,y:244}).wait(1).to({graphics:mask_graphics_719,x:174,y:244.1}).wait(1).to({graphics:mask_graphics_720,x:175.3,y:244.1}).wait(1).to({graphics:mask_graphics_721,x:176.5,y:244.1}).wait(1).to({graphics:mask_graphics_722,x:177.8,y:244.1}).wait(1).to({graphics:mask_graphics_723,x:179.1,y:244.1}).wait(1).to({graphics:mask_graphics_724,x:180.4,y:244.1}).wait(1).to({graphics:mask_graphics_725,x:181.6,y:244.1}).wait(1).to({graphics:mask_graphics_726,x:182.9,y:244.1}).wait(1).to({graphics:mask_graphics_727,x:184.2,y:244.1}).wait(1).to({graphics:mask_graphics_728,x:185.4,y:244.1}).wait(1).to({graphics:mask_graphics_729,x:186.6,y:244.1}).wait(1).to({graphics:mask_graphics_730,x:187.9,y:244.1}).wait(1).to({graphics:mask_graphics_731,x:189.1,y:244.1}).wait(1).to({graphics:mask_graphics_732,x:190.3,y:244.1}).wait(1).to({graphics:mask_graphics_733,x:191.6,y:244.1}).wait(1).to({graphics:mask_graphics_734,x:192.8,y:244.1}).wait(1).to({graphics:mask_graphics_735,x:194,y:244.1}).wait(1).to({graphics:mask_graphics_736,x:195.2,y:244.1}).wait(1).to({graphics:mask_graphics_737,x:196.3,y:244.1}).wait(1).to({graphics:mask_graphics_738,x:197.5,y:244.1}).wait(1).to({graphics:mask_graphics_739,x:198.7,y:244.1}).wait(1).to({graphics:mask_graphics_740,x:199.8,y:244.1}).wait(1).to({graphics:mask_graphics_741,x:201,y:244.1}).wait(1).to({graphics:mask_graphics_742,x:202.1,y:244}).wait(1).to({graphics:mask_graphics_743,x:203.3,y:244}).wait(1).to({graphics:mask_graphics_744,x:204.4,y:244}).wait(1).to({graphics:mask_graphics_745,x:205.5,y:244}).wait(1).to({graphics:mask_graphics_746,x:206.6,y:244}).wait(1).to({graphics:mask_graphics_747,x:207.7,y:244}).wait(1).to({graphics:mask_graphics_748,x:208.8,y:243.9}).wait(1).to({graphics:mask_graphics_749,x:209.8,y:243.9}).wait(1).to({graphics:mask_graphics_750,x:210.9,y:243.9}).wait(1).to({graphics:mask_graphics_751,x:211.9,y:243.9}).wait(1).to({graphics:mask_graphics_752,x:213,y:243.9}).wait(1).to({graphics:mask_graphics_753,x:214,y:243.9}).wait(1).to({graphics:mask_graphics_754,x:215,y:243.8}).wait(1).to({graphics:mask_graphics_755,x:216,y:243.8}).wait(1).to({graphics:mask_graphics_756,x:217,y:243.8}).wait(1).to({graphics:mask_graphics_757,x:218,y:243.8}).wait(1).to({graphics:mask_graphics_758,x:218.9,y:243.8}).wait(1).to({graphics:mask_graphics_759,x:219.9,y:243.8}).wait(1).to({graphics:mask_graphics_760,x:220.8,y:243.8}).wait(1).to({graphics:mask_graphics_761,x:221.7,y:243.8}).wait(1).to({graphics:mask_graphics_762,x:222.6,y:243.8}).wait(1).to({graphics:mask_graphics_763,x:223.5,y:243.8}).wait(1).to({graphics:mask_graphics_764,x:224.4,y:243.8}).wait(1).to({graphics:mask_graphics_765,x:225.3,y:243.8}).wait(1).to({graphics:mask_graphics_766,x:226.1,y:243.8}).wait(1).to({graphics:mask_graphics_767,x:227,y:243.8}).wait(1).to({graphics:mask_graphics_768,x:227.8,y:243.8}).wait(1).to({graphics:mask_graphics_769,x:228.6,y:243.9}).wait(1).to({graphics:mask_graphics_770,x:229.3,y:243.9}).wait(1).to({graphics:mask_graphics_771,x:230,y:243.9}).wait(1).to({graphics:mask_graphics_772,x:230.6,y:243.9}).wait(1).to({graphics:mask_graphics_773,x:231.3,y:243.9}).wait(1).to({graphics:mask_graphics_774,x:232,y:244}).wait(1).to({graphics:mask_graphics_775,x:232.6,y:244}).wait(1).to({graphics:mask_graphics_776,x:233.2,y:244}).wait(1).to({graphics:mask_graphics_777,x:233.9,y:244}).wait(1).to({graphics:mask_graphics_778,x:234.5,y:244}).wait(1).to({graphics:mask_graphics_779,x:235.1,y:244}).wait(1).to({graphics:mask_graphics_780,x:235.6,y:244.1}).wait(1).to({graphics:mask_graphics_781,x:236.2,y:244.1}).wait(1).to({graphics:mask_graphics_782,x:236.8,y:244.1}).wait(1).to({graphics:mask_graphics_783,x:237.3,y:244.1}).wait(1).to({graphics:mask_graphics_784,x:237.8,y:244.1}).wait(1).to({graphics:mask_graphics_785,x:238.4,y:244.1}).wait(1).to({graphics:mask_graphics_786,x:238.9,y:244.1}).wait(1).to({graphics:mask_graphics_787,x:239.4,y:244.1}).wait(1).to({graphics:mask_graphics_788,x:239.8,y:244.1}).wait(1).to({graphics:mask_graphics_789,x:240.3,y:244.1}).wait(1).to({graphics:mask_graphics_790,x:240.8,y:244.1}).wait(1).to({graphics:mask_graphics_791,x:241.2,y:244.2}).wait(1).to({graphics:mask_graphics_792,x:241.6,y:244.2}).wait(1).to({graphics:mask_graphics_793,x:242,y:244.2}).wait(1).to({graphics:mask_graphics_794,x:242.4,y:244.2}).wait(1).to({graphics:mask_graphics_795,x:242.8,y:244.2}).wait(1).to({graphics:mask_graphics_796,x:243.2,y:244.2}).wait(1).to({graphics:mask_graphics_797,x:243.5,y:244.2}).wait(1).to({graphics:mask_graphics_798,x:243.9,y:244.1}).wait(1).to({graphics:mask_graphics_799,x:244.2,y:244.1}).wait(1).to({graphics:mask_graphics_800,x:244.4,y:244.1}).wait(1).to({graphics:mask_graphics_801,x:244.6,y:244.1}).wait(1).to({graphics:mask_graphics_802,x:244.8,y:244.1}).wait(1).to({graphics:mask_graphics_803,x:245,y:244.1}).wait(1).to({graphics:mask_graphics_804,x:245.2,y:244.1}).wait(1).to({graphics:mask_graphics_805,x:245.4,y:244.1}).wait(1).to({graphics:mask_graphics_806,x:245.6,y:244.1}).wait(1).to({graphics:mask_graphics_807,x:245.7,y:244.1}).wait(1).to({graphics:mask_graphics_808,x:245.9,y:244.1}).wait(1).to({graphics:mask_graphics_809,x:246.1,y:244.1}).wait(1).to({graphics:mask_graphics_810,x:246.2,y:244.1}).wait(1).to({graphics:mask_graphics_811,x:246.4,y:244.1}).wait(1).to({graphics:mask_graphics_812,x:246.5,y:244.1}).wait(1).to({graphics:mask_graphics_813,x:246.6,y:244.1}).wait(1).to({graphics:mask_graphics_814,x:246.8,y:244.1}).wait(1).to({graphics:mask_graphics_815,x:246.9,y:244.1}).wait(1).to({graphics:mask_graphics_816,x:247,y:244.1}).wait(1).to({graphics:mask_graphics_817,x:247.2,y:244}).wait(1).to({graphics:mask_graphics_818,x:247.8,y:244}).wait(1).to({graphics:mask_graphics_819,x:248,y:243.9}).wait(82));

	// Layer 15
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(20,1,1).p("A3fkIQBbELCpDnQCqDnDeBWQDeBWFVhaQFUhbEziQQEziQDbiwQDbixCIiFQCJiEB/iO");
	this.shape_1.setTransform(303.9,370.4);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(580).to({_off:false},0).wait(321));

	// Layer 19
	this.instance_2 = new lib.ar5("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(168,342.3,1,1,-154,0,0,-0.1,-1.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(324).to({_off:false},0).wait(25).to({mode:"single",startPosition:24},0).wait(552));

	// Layer 14 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_488 = new cjs.Graphics().p("AVCXFIB/iwIE4DhIh/Cwg");
	var mask_1_graphics_489 = new cjs.Graphics().p("AjKg0ICSiTIEDD7IiRCUg");
	var mask_1_graphics_490 = new cjs.Graphics().p("Ai5hPICkh2IDPEWIikB1g");
	var mask_1_graphics_491 = new cjs.Graphics().p("AiohsIC1hYICcEwIi1BZg");
	var mask_1_graphics_492 = new cjs.Graphics().p("AiXiIIDHg6IBoFKIjHA7g");
	var mask_1_graphics_493 = new cjs.Graphics().p("AiGijIDZgeIA1FmIjaAdg");
	var mask_1_graphics_494 = new cjs.Graphics().p("AW8b7IAAmBIDtAAIAAGBg");
	var mask_1_graphics_495 = new cjs.Graphics().p("AiBDBIAAmAIEEAAIAAGAg");
	var mask_1_graphics_496 = new cjs.Graphics().p("AiNDBIAAmAIEbAAIAAGAg");
	var mask_1_graphics_497 = new cjs.Graphics().p("AiZDBIAAmAIEzAAIAAGAg");
	var mask_1_graphics_498 = new cjs.Graphics().p("AilDBIAAmAIFLAAIAAGAg");
	var mask_1_graphics_499 = new cjs.Graphics().p("AixDBIAAmAIFjAAIAAGAg");
	var mask_1_graphics_500 = new cjs.Graphics().p("Ai9DBIAAmAIF7AAIAAGAg");
	var mask_1_graphics_501 = new cjs.Graphics().p("AjJDBIAAmAIGTAAIAAGAg");
	var mask_1_graphics_502 = new cjs.Graphics().p("AjVDBIAAmAIGrAAIAAGAg");
	var mask_1_graphics_503 = new cjs.Graphics().p("AjgDBIAAmAIHCAAIAAGAg");
	var mask_1_graphics_504 = new cjs.Graphics().p("AjtDBIAAmAIHbAAIAAGAg");
	var mask_1_graphics_505 = new cjs.Graphics().p("Aj5DBIAAmAIHzAAIAAGAg");
	var mask_1_graphics_506 = new cjs.Graphics().p("AkEDBIAAmAIIJAAIAAGAg");
	var mask_1_graphics_507 = new cjs.Graphics().p("AkQDBIAAmAIIhAAIAAGAg");
	var mask_1_graphics_508 = new cjs.Graphics().p("AkcDBIAAmAII5AAIAAGAg");
	var mask_1_graphics_509 = new cjs.Graphics().p("AkoDBIAAmAIJRAAIAAGAg");
	var mask_1_graphics_510 = new cjs.Graphics().p("Ak0DBIAAmAIJpAAIAAGAg");
	var mask_1_graphics_511 = new cjs.Graphics().p("AlADBIAAmAIKBAAIAAGAg");
	var mask_1_graphics_512 = new cjs.Graphics().p("AlMDBIAAmAIKZAAIAAGAg");
	var mask_1_graphics_513 = new cjs.Graphics().p("AlYDBIAAmAIKxAAIAAGAg");
	var mask_1_graphics_514 = new cjs.Graphics().p("AlkDBIAAmAILJAAIAAGAg");
	var mask_1_graphics_515 = new cjs.Graphics().p("AlwDBIAAmAILhAAIAAGAg");
	var mask_1_graphics_516 = new cjs.Graphics().p("Al7DBIAAmAIL3AAIAAGAg");
	var mask_1_graphics_517 = new cjs.Graphics().p("AmIDBIAAmAIMQAAIAAGAg");
	var mask_1_graphics_518 = new cjs.Graphics().p("AmTDBIAAmAIMnAAIAAGAg");
	var mask_1_graphics_519 = new cjs.Graphics().p("AmfDBIAAmAIM/AAIAAGAg");
	var mask_1_graphics_520 = new cjs.Graphics().p("AmrDBIAAmAINXAAIAAGAg");
	var mask_1_graphics_521 = new cjs.Graphics().p("Am3DBIAAmAINvAAIAAGAg");
	var mask_1_graphics_522 = new cjs.Graphics().p("AnDDBIAAmAIOHAAIAAGAg");
	var mask_1_graphics_523 = new cjs.Graphics().p("AnPDBIAAmAIOfAAIAAGAg");
	var mask_1_graphics_524 = new cjs.Graphics().p("ALyb7IAAmBIO3AAIAAGBg");
	var mask_1_graphics_525 = new cjs.Graphics().p("AnnDBIAAmAIPPAAIAAGAg");
	var mask_1_graphics_526 = new cjs.Graphics().p("AnzDBIAAmAIPmAAIAAGAg");
	var mask_1_graphics_527 = new cjs.Graphics().p("An+DBIAAmAIP9AAIAAGAg");
	var mask_1_graphics_528 = new cjs.Graphics().p("AoKDBIAAmAIQVAAIAAGAg");
	var mask_1_graphics_529 = new cjs.Graphics().p("AoWDBIAAmAIQtAAIAAGAg");
	var mask_1_graphics_530 = new cjs.Graphics().p("AoiDBIAAmAIRFAAIAAGAg");
	var mask_1_graphics_531 = new cjs.Graphics().p("AouDBIAAmAIRdAAIAAGAg");
	var mask_1_graphics_532 = new cjs.Graphics().p("Ao6DBIAAmAIR1AAIAAGAg");
	var mask_1_graphics_533 = new cjs.Graphics().p("ApGDBIAAmAISNAAIAAGAg");
	var mask_1_graphics_534 = new cjs.Graphics().p("ApRDBIAAmAISkAAIAAGAg");
	var mask_1_graphics_535 = new cjs.Graphics().p("ApeDBIAAmAIS9AAIAAGAg");
	var mask_1_graphics_536 = new cjs.Graphics().p("AppDBIAAmAITTAAIAAGAg");
	var mask_1_graphics_537 = new cjs.Graphics().p("Ap1DBIAAmAITrAAIAAGAg");
	var mask_1_graphics_538 = new cjs.Graphics().p("AqBDBIAAmAIUDAAIAAGAg");
	var mask_1_graphics_539 = new cjs.Graphics().p("AqNDBIAAmAIUbAAIAAGAg");
	var mask_1_graphics_540 = new cjs.Graphics().p("AqZDBIAAmAIUzAAIAAGAg");
	var mask_1_graphics_541 = new cjs.Graphics().p("AqlDBIAAmAIVLAAIAAGAg");
	var mask_1_graphics_542 = new cjs.Graphics().p("AqxDBIAAmAIVjAAIAAGAg");
	var mask_1_graphics_543 = new cjs.Graphics().p("Aq9DBIAAmAIV7AAIAAGAg");
	var mask_1_graphics_544 = new cjs.Graphics().p("ArJDBIAAmAIWTAAIAAGAg");
	var mask_1_graphics_545 = new cjs.Graphics().p("ArUDBIAAmAIWpAAIAAGAg");
	var mask_1_graphics_546 = new cjs.Graphics().p("ArgDBIAAmAIXBAAIAAGAg");
	var mask_1_graphics_547 = new cjs.Graphics().p("ArsDBIAAmAIXZAAIAAGAg");
	var mask_1_graphics_548 = new cjs.Graphics().p("Ar4DBIAAmAIXxAAIAAGAg");
	var mask_1_graphics_549 = new cjs.Graphics().p("AsEDBIAAmAIYJAAIAAGAg");
	var mask_1_graphics_550 = new cjs.Graphics().p("AsQDBIAAmAIYhAAIAAGAg");
	var mask_1_graphics_551 = new cjs.Graphics().p("AscDBIAAmAIY5AAIAAGAg");
	var mask_1_graphics_552 = new cjs.Graphics().p("AsnDBIAAmAIZPAAIAAGAg");
	var mask_1_graphics_553 = new cjs.Graphics().p("AszDBIAAmAIZnAAIAAGAg");
	var mask_1_graphics_554 = new cjs.Graphics().p("As/DBIAAmAIZ/AAIAAGAg");
	var mask_1_graphics_555 = new cjs.Graphics().p("AtLDBIAAmAIaXAAIAAGAg");
	var mask_1_graphics_556 = new cjs.Graphics().p("AtXDBIAAmAIavAAIAAGAg");
	var mask_1_graphics_557 = new cjs.Graphics().p("AtjDBIAAmAIbHAAIAAGAg");
	var mask_1_graphics_558 = new cjs.Graphics().p("AtvDBIAAmAIbfAAIAAGAg");
	var mask_1_graphics_559 = new cjs.Graphics().p("At7DBIAAmAIb3AAIAAGAg");
	var mask_1_graphics_560 = new cjs.Graphics().p("AuGDBIAAmAIcNAAIAAGAg");
	var mask_1_graphics_561 = new cjs.Graphics().p("Ah9b7IAAmBIcmAAIAAGBg");
	var mask_1_graphics_562 = new cjs.Graphics().p("Av1DBIAAmAIfrAAIAAGAg");
	var mask_1_graphics_563 = new cjs.Graphics().p("AoHb7IAAmBMAiwAAAIAAGBg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(488).to({graphics:mask_1_graphics_488,x:178.5,y:170.2}).wait(1).to({graphics:mask_1_graphics_489,x:334.1,y:323.4}).wait(1).to({graphics:mask_1_graphics_490,x:333.1,y:326.3}).wait(1).to({graphics:mask_1_graphics_491,x:332.1,y:329.3}).wait(1).to({graphics:mask_1_graphics_492,x:331.1,y:332.3}).wait(1).to({graphics:mask_1_graphics_493,x:330.2,y:335.2}).wait(1).to({graphics:mask_1_graphics_494,x:170.5,y:178.7}).wait(1).to({graphics:mask_1_graphics_495,x:328,y:338.2}).wait(1).to({graphics:mask_1_graphics_496,x:326.8,y:338.2}).wait(1).to({graphics:mask_1_graphics_497,x:325.6,y:338.2}).wait(1).to({graphics:mask_1_graphics_498,x:324.4,y:338.2}).wait(1).to({graphics:mask_1_graphics_499,x:323.2,y:338.2}).wait(1).to({graphics:mask_1_graphics_500,x:322,y:338.2}).wait(1).to({graphics:mask_1_graphics_501,x:320.8,y:338.2}).wait(1).to({graphics:mask_1_graphics_502,x:319.6,y:338.2}).wait(1).to({graphics:mask_1_graphics_503,x:318.5,y:338.2}).wait(1).to({graphics:mask_1_graphics_504,x:317.3,y:338.2}).wait(1).to({graphics:mask_1_graphics_505,x:316.1,y:338.2}).wait(1).to({graphics:mask_1_graphics_506,x:314.9,y:338.2}).wait(1).to({graphics:mask_1_graphics_507,x:313.7,y:338.2}).wait(1).to({graphics:mask_1_graphics_508,x:312.5,y:338.2}).wait(1).to({graphics:mask_1_graphics_509,x:311.3,y:338.2}).wait(1).to({graphics:mask_1_graphics_510,x:310.1,y:338.2}).wait(1).to({graphics:mask_1_graphics_511,x:309,y:338.2}).wait(1).to({graphics:mask_1_graphics_512,x:307.8,y:338.2}).wait(1).to({graphics:mask_1_graphics_513,x:306.6,y:338.2}).wait(1).to({graphics:mask_1_graphics_514,x:305.4,y:338.2}).wait(1).to({graphics:mask_1_graphics_515,x:304.2,y:338.2}).wait(1).to({graphics:mask_1_graphics_516,x:303,y:338.2}).wait(1).to({graphics:mask_1_graphics_517,x:301.8,y:338.2}).wait(1).to({graphics:mask_1_graphics_518,x:300.6,y:338.2}).wait(1).to({graphics:mask_1_graphics_519,x:299.4,y:338.2}).wait(1).to({graphics:mask_1_graphics_520,x:298.2,y:338.2}).wait(1).to({graphics:mask_1_graphics_521,x:297.1,y:338.2}).wait(1).to({graphics:mask_1_graphics_522,x:295.9,y:338.2}).wait(1).to({graphics:mask_1_graphics_523,x:294.7,y:338.2}).wait(1).to({graphics:mask_1_graphics_524,x:170.5,y:178.7}).wait(1).to({graphics:mask_1_graphics_525,x:292.3,y:338.2}).wait(1).to({graphics:mask_1_graphics_526,x:291.1,y:338.2}).wait(1).to({graphics:mask_1_graphics_527,x:289.9,y:338.2}).wait(1).to({graphics:mask_1_graphics_528,x:288.7,y:338.2}).wait(1).to({graphics:mask_1_graphics_529,x:287.5,y:338.2}).wait(1).to({graphics:mask_1_graphics_530,x:286.3,y:338.2}).wait(1).to({graphics:mask_1_graphics_531,x:285.2,y:338.2}).wait(1).to({graphics:mask_1_graphics_532,x:284,y:338.2}).wait(1).to({graphics:mask_1_graphics_533,x:282.8,y:338.2}).wait(1).to({graphics:mask_1_graphics_534,x:281.6,y:338.2}).wait(1).to({graphics:mask_1_graphics_535,x:280.4,y:338.2}).wait(1).to({graphics:mask_1_graphics_536,x:279.2,y:338.2}).wait(1).to({graphics:mask_1_graphics_537,x:278,y:338.2}).wait(1).to({graphics:mask_1_graphics_538,x:276.8,y:338.2}).wait(1).to({graphics:mask_1_graphics_539,x:275.6,y:338.2}).wait(1).to({graphics:mask_1_graphics_540,x:274.4,y:338.2}).wait(1).to({graphics:mask_1_graphics_541,x:273.2,y:338.2}).wait(1).to({graphics:mask_1_graphics_542,x:272,y:338.2}).wait(1).to({graphics:mask_1_graphics_543,x:270.9,y:338.2}).wait(1).to({graphics:mask_1_graphics_544,x:269.7,y:338.2}).wait(1).to({graphics:mask_1_graphics_545,x:268.5,y:338.2}).wait(1).to({graphics:mask_1_graphics_546,x:267.3,y:338.2}).wait(1).to({graphics:mask_1_graphics_547,x:266.1,y:338.2}).wait(1).to({graphics:mask_1_graphics_548,x:264.9,y:338.2}).wait(1).to({graphics:mask_1_graphics_549,x:263.7,y:338.2}).wait(1).to({graphics:mask_1_graphics_550,x:262.5,y:338.2}).wait(1).to({graphics:mask_1_graphics_551,x:261.3,y:338.2}).wait(1).to({graphics:mask_1_graphics_552,x:260.1,y:338.2}).wait(1).to({graphics:mask_1_graphics_553,x:258.9,y:338.2}).wait(1).to({graphics:mask_1_graphics_554,x:257.7,y:338.2}).wait(1).to({graphics:mask_1_graphics_555,x:256.6,y:338.2}).wait(1).to({graphics:mask_1_graphics_556,x:255.4,y:338.2}).wait(1).to({graphics:mask_1_graphics_557,x:254.2,y:338.2}).wait(1).to({graphics:mask_1_graphics_558,x:253,y:338.2}).wait(1).to({graphics:mask_1_graphics_559,x:251.8,y:338.2}).wait(1).to({graphics:mask_1_graphics_560,x:250.6,y:338.2}).wait(1).to({graphics:mask_1_graphics_561,x:170.5,y:178.7}).wait(1).to({graphics:mask_1_graphics_562,x:239.6,y:338.2}).wait(1).to({graphics:mask_1_graphics_563,x:170.5,y:178.7}).wait(338));

	// Layer 13
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(20,1,1).p("AvlExQFxk3HhjMQHhjLF3CbQF4CbhyDGQhyDHkMAQQkMARmxgBQmyAAl5gI");
	this.shape_2.setTransform(237.8,311.5);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(488).to({_off:false},0).wait(413));

	// Layer 12 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_470 = new cjs.Graphics().p("ASAbCQi/i/AAkOQAAkOC/i/QC7i8EHgDIAAUYQkHgEi7i7g");
	var mask_2_graphics_471 = new cjs.Graphics().p("AQcaGQikjWAjkMQAkkMDWilQDTihEFAfIisUOQkEgnihjSg");
	var mask_2_graphics_472 = new cjs.Graphics().p("APCZJQiHjrBHkFQBGkFDqiGQDmiED/BAIlUTsQj9hIiEjlg");
	var mask_2_graphics_473 = new cjs.Graphics().p("ANzYLQhnj6Boj6QBoj5D6hnQD1hlD0BiIn2S0Qjxhohlj1g");
	var mask_2_graphics_474 = new cjs.Graphics().p("AMxXOQhFkFCIjqQCHjqEFhFQEAhDDmCAIqQRoQjiiHhDkAg");
	var mask_2_graphics_475 = new cjs.Graphics().p("AL8WTQgikMCljWQCljWEMgiQEHgiDSCeIseQIQjOikghkGg");
	var mask_2_graphics_476 = new cjs.Graphics().p("ALVVbQACkODAi/QDAi+EOABQEJACC7C4IueOWQi3i+ABkIg");
	var mask_2_graphics_477 = new cjs.Graphics().p("AK+UnQAlkMDXikQDXijEMAlQEGAkCiDPIwPMVQicjUAkkGg");
	var mask_2_graphics_478 = new cjs.Graphics().p("AK2T3QBIkEDriGQDriGEEBIQEABGCFDjIxuKFQh/jnBGj/g");
	var mask_2_graphics_479 = new cjs.Graphics().p("AK+TNQBqj5D6hlQD6hmD5BpQD0BnBnDyIy5HrQhgj1Bnj0g");
	var mask_2_graphics_480 = new cjs.Graphics().p("ALWSqQCJjpEGhEQEFhEDpCJQDkCGBGD+IzvFHQg+j/CGjkg");
	var mask_2_graphics_481 = new cjs.Graphics().p("AL9SNQCmjVEMghQENghDUCnQDRCjAkEEI0PCfQgckFCjjRg");
	var mask_2_graphics_482 = new cjs.Graphics().p("AJvYyQAGkHC9i5QDBi9EOACQEOADC9DBQC6C9ABEHg");
	var mask_2_graphics_483 = new cjs.Graphics().p("AJ1WyQApkEDUifQDYiiELAmQEMAmCiDYQCfDTghEFg");
	var mask_2_graphics_484 = new cjs.Graphics().p("AKHU0QBLj8DmiCQDsiFEEBJQEEBJCFDrQCCDnhDD+g");
	var mask_2_graphics_485 = new cjs.Graphics().p("AKkS6QBrjwD2hiQD7hlD4BrQD5BqBkD7QBjD1hkD0g");
	var mask_2_graphics_486 = new cjs.Graphics().p("ALMRIQCKjhEAhBQEGhCDoCKQDpCKBCEFQBCEBiDDkg");
	var mask_2_graphics_487 = new cjs.Graphics().p("AL+PdQCljMEHgfQENgfDUCnQDUCnAgEMQAfEHigDRg");
	var mask_2_graphics_488 = new cjs.Graphics().p("AM4N9QC/i0EJADQEOAEC8DCQC9DCgEEOQgEEJi6C6g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(470).to({graphics:mask_2_graphics_470,x:160.2,y:192.1}).wait(1).to({graphics:mask_2_graphics_471,x:164.5,y:191.9}).wait(1).to({graphics:mask_2_graphics_472,x:168.7,y:191}).wait(1).to({graphics:mask_2_graphics_473,x:172.7,y:189.6}).wait(1).to({graphics:mask_2_graphics_474,x:176.6,y:187.7}).wait(1).to({graphics:mask_2_graphics_475,x:180.1,y:185.3}).wait(1).to({graphics:mask_2_graphics_476,x:183.3,y:182.5}).wait(1).to({graphics:mask_2_graphics_477,x:186.1,y:179.3}).wait(1).to({graphics:mask_2_graphics_478,x:188.5,y:175.7}).wait(1).to({graphics:mask_2_graphics_479,x:190.4,y:171.8}).wait(1).to({graphics:mask_2_graphics_480,x:191.7,y:167.7}).wait(1).to({graphics:mask_2_graphics_481,x:192.5,y:163.5}).wait(1).to({graphics:mask_2_graphics_482,x:192.7,y:159.9}).wait(1).to({graphics:mask_2_graphics_483,x:192.7,y:164.1}).wait(1).to({graphics:mask_2_graphics_484,x:192.7,y:168.3}).wait(1).to({graphics:mask_2_graphics_485,x:192.6,y:172.4}).wait(1).to({graphics:mask_2_graphics_486,x:192.5,y:176.2}).wait(1).to({graphics:mask_2_graphics_487,x:192.4,y:179.7}).wait(1).to({graphics:mask_2_graphics_488,x:192.3,y:182.9}).wait(413));

	// Layer 11
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(20,1,1).p("AvlE8QFxk5HhjKQHhjMF3CbQFoCUhZC8");
	this.shape_3.setTransform(237.8,310.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(20,1,1).p("AvlExQFxk3HhjMQHhjLF3CbQF4CbhyDGQhyDHkMAQQkMARmxgBQmyAAkngI");
	this.shape_4.setTransform(237.8,311.5);

	var maskedShapeInstanceList = [this.shape_3,this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3}]},470).to({state:[{t:this.shape_4}]},14).wait(417));

	// Layer 10 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_384 = new cjs.Graphics().p("AkmH0IAAvnIJNAAIAAPng");
	var mask_3_graphics_385 = new cjs.Graphics().p("AkxH0IAAvnIJjAAIAAPng");
	var mask_3_graphics_386 = new cjs.Graphics().p("Ak7H0IAAvnIJ3AAIAAPng");
	var mask_3_graphics_387 = new cjs.Graphics().p("AlGH0IAAvnIKNAAIAAPng");
	var mask_3_graphics_388 = new cjs.Graphics().p("AlQH0IAAvnIKiAAIAAPng");
	var mask_3_graphics_389 = new cjs.Graphics().p("AlbH0IAAvnIK3AAIAAPng");
	var mask_3_graphics_390 = new cjs.Graphics().p("AlmH0IAAvnILNAAIAAPng");
	var mask_3_graphics_391 = new cjs.Graphics().p("AlwH0IAAvnILiAAIAAPng");
	var mask_3_graphics_392 = new cjs.Graphics().p("Al7H0IAAvnIL3AAIAAPng");
	var mask_3_graphics_393 = new cjs.Graphics().p("AmGH0IAAvnIMNAAIAAPng");
	var mask_3_graphics_394 = new cjs.Graphics().p("AmQH0IAAvnIMiAAIAAPng");
	var mask_3_graphics_395 = new cjs.Graphics().p("AmbH0IAAvnIM3AAIAAPng");
	var mask_3_graphics_396 = new cjs.Graphics().p("AmmH0IAAvnINNAAIAAPng");
	var mask_3_graphics_397 = new cjs.Graphics().p("AmwH0IAAvnINhAAIAAPng");
	var mask_3_graphics_398 = new cjs.Graphics().p("Am7H0IAAvnIN3AAIAAPng");
	var mask_3_graphics_399 = new cjs.Graphics().p("AnGH0IAAvnIONAAIAAPng");
	var mask_3_graphics_400 = new cjs.Graphics().p("AnQH0IAAvnIOhAAIAAPng");
	var mask_3_graphics_401 = new cjs.Graphics().p("AnbH0IAAvnIO3AAIAAPng");
	var mask_3_graphics_402 = new cjs.Graphics().p("AnlH0IAAvnIPMAAIAAPng");
	var mask_3_graphics_403 = new cjs.Graphics().p("AnwH0IAAvnIPhAAIAAPng");
	var mask_3_graphics_404 = new cjs.Graphics().p("An7H0IAAvnIP3AAIAAPng");
	var mask_3_graphics_405 = new cjs.Graphics().p("AoFH0IAAvnIQMAAIAAPng");
	var mask_3_graphics_406 = new cjs.Graphics().p("AoQH0IAAvnIQhAAIAAPng");
	var mask_3_graphics_407 = new cjs.Graphics().p("AobH0IAAvnIQ3AAIAAPng");
	var mask_3_graphics_408 = new cjs.Graphics().p("AolH0IAAvnIRMAAIAAPng");
	var mask_3_graphics_409 = new cjs.Graphics().p("AowH0IAAvnIRhAAIAAPng");
	var mask_3_graphics_410 = new cjs.Graphics().p("Ao7H0IAAvnIR3AAIAAPng");
	var mask_3_graphics_411 = new cjs.Graphics().p("ApFH0IAAvnISLAAIAAPng");
	var mask_3_graphics_412 = new cjs.Graphics().p("ApQH0IAAvnIShAAIAAPng");
	var mask_3_graphics_413 = new cjs.Graphics().p("ApbH0IAAvnIS3AAIAAPng");
	var mask_3_graphics_414 = new cjs.Graphics().p("AplH0IAAvnITLAAIAAPng");
	var mask_3_graphics_415 = new cjs.Graphics().p("ApwH0IAAvnIThAAIAAPng");
	var mask_3_graphics_416 = new cjs.Graphics().p("Ap6H0IAAvnIT2AAIAAPng");
	var mask_3_graphics_417 = new cjs.Graphics().p("AqFH0IAAvnIULAAIAAPng");
	var mask_3_graphics_418 = new cjs.Graphics().p("AqQH0IAAvnIUhAAIAAPng");
	var mask_3_graphics_419 = new cjs.Graphics().p("AqaH0IAAvnIU2AAIAAPng");
	var mask_3_graphics_420 = new cjs.Graphics().p("AqlH0IAAvnIVLAAIAAPng");
	var mask_3_graphics_421 = new cjs.Graphics().p("AqwH0IAAvnIVhAAIAAPng");
	var mask_3_graphics_422 = new cjs.Graphics().p("Aq6H0IAAvnIV1AAIAAPng");
	var mask_3_graphics_423 = new cjs.Graphics().p("ArFH0IAAvnIWLAAIAAPng");
	var mask_3_graphics_424 = new cjs.Graphics().p("ArQH0IAAvnIWhAAIAAPng");
	var mask_3_graphics_425 = new cjs.Graphics().p("AraH0IAAvnIW1AAIAAPng");
	var mask_3_graphics_426 = new cjs.Graphics().p("ArlH0IAAvnIXLAAIAAPng");
	var mask_3_graphics_427 = new cjs.Graphics().p("ArwH0IAAvnIXgAAIAAPng");
	var mask_3_graphics_428 = new cjs.Graphics().p("Ar6H0IAAvnIX1AAIAAPng");
	var mask_3_graphics_429 = new cjs.Graphics().p("AsFH0IAAvnIYLAAIAAPng");
	var mask_3_graphics_430 = new cjs.Graphics().p("AsPH0IAAvnIYfAAIAAPng");
	var mask_3_graphics_431 = new cjs.Graphics().p("AsaH0IAAvnIY1AAIAAPng");
	var mask_3_graphics_432 = new cjs.Graphics().p("AslH0IAAvnIZKAAIAAPng");
	var mask_3_graphics_433 = new cjs.Graphics().p("AsvH0IAAvnIZfAAIAAPng");
	var mask_3_graphics_434 = new cjs.Graphics().p("As6H0IAAvnIZ1AAIAAPng");
	var mask_3_graphics_435 = new cjs.Graphics().p("AtFH0IAAvnIaKAAIAAPng");
	var mask_3_graphics_436 = new cjs.Graphics().p("AtPH0IAAvnIafAAIAAPng");
	var mask_3_graphics_437 = new cjs.Graphics().p("AtaH0IAAvnIa1AAIAAPng");
	var mask_3_graphics_438 = new cjs.Graphics().p("AtlH0IAAvnIbKAAIAAPng");
	var mask_3_graphics_439 = new cjs.Graphics().p("AtvH0IAAvnIbfAAIAAPng");
	var mask_3_graphics_440 = new cjs.Graphics().p("At6H0IAAvnIb1AAIAAPng");
	var mask_3_graphics_441 = new cjs.Graphics().p("AuEH0IAAvnIcJAAIAAPng");
	var mask_3_graphics_442 = new cjs.Graphics().p("AuPH0IAAvnIcfAAIAAPng");
	var mask_3_graphics_443 = new cjs.Graphics().p("AuaH0IAAvnIc1AAIAAPng");
	var mask_3_graphics_444 = new cjs.Graphics().p("AukH0IAAvnIdJAAIAAPng");
	var mask_3_graphics_445 = new cjs.Graphics().p("AuvH0IAAvnIdfAAIAAPng");
	var mask_3_graphics_446 = new cjs.Graphics().p("Au6H0IAAvnId0AAIAAPng");
	var mask_3_graphics_447 = new cjs.Graphics().p("AvEH0IAAvnIeJAAIAAPng");
	var mask_3_graphics_448 = new cjs.Graphics().p("AvPH0IAAvnIefAAIAAPng");
	var mask_3_graphics_449 = new cjs.Graphics().p("AvaH0IAAvnIe0AAIAAPng");
	var mask_3_graphics_450 = new cjs.Graphics().p("AvkH0IAAvnIfJAAIAAPng");
	var mask_3_graphics_451 = new cjs.Graphics().p("AvvH0IAAvnIffAAIAAPng");
	var mask_3_graphics_452 = new cjs.Graphics().p("Av6H0IAAvnIf0AAIAAPng");
	var mask_3_graphics_453 = new cjs.Graphics().p("AwEH0IAAvnMAgJAAAIAAPng");
	var mask_3_graphics_454 = new cjs.Graphics().p("AwPH0IAAvnMAgfAAAIAAPng");
	var mask_3_graphics_455 = new cjs.Graphics().p("AwZH0IAAvnMAgzAAAIAAPng");
	var mask_3_graphics_456 = new cjs.Graphics().p("AwkH0IAAvnMAhJAAAIAAPng");
	var mask_3_graphics_457 = new cjs.Graphics().p("AwvH0IAAvnMAhfAAAIAAPng");
	var mask_3_graphics_458 = new cjs.Graphics().p("Aw5H0IAAvnMAhzAAAIAAPng");
	var mask_3_graphics_459 = new cjs.Graphics().p("AxEH0IAAvnMAiJAAAIAAPng");
	var mask_3_graphics_460 = new cjs.Graphics().p("AxPH0IAAvnMAieAAAIAAPng");
	var mask_3_graphics_461 = new cjs.Graphics().p("AxZH0IAAvnMAizAAAIAAPng");
	var mask_3_graphics_462 = new cjs.Graphics().p("AxkH0IAAvnMAjJAAAIAAPng");
	var mask_3_graphics_463 = new cjs.Graphics().p("AxvH0IAAvnMAjeAAAIAAPng");
	var mask_3_graphics_464 = new cjs.Graphics().p("Ax5H0IAAvnMAjzAAAIAAPng");
	var mask_3_graphics_465 = new cjs.Graphics().p("AyEH0IAAvnMAkJAAAIAAPng");
	var mask_3_graphics_466 = new cjs.Graphics().p("AyPH0IAAvnMAkfAAAIAAPng");
	var mask_3_graphics_467 = new cjs.Graphics().p("AyZH0IAAvnMAkzAAAIAAPng");
	var mask_3_graphics_468 = new cjs.Graphics().p("AykH0IAAvnMAlJAAAIAAPng");
	var mask_3_graphics_469 = new cjs.Graphics().p("AyuH0IAAvnMAldAAAIAAPng");
	var mask_3_graphics_470 = new cjs.Graphics().p("Askb+IAAvoMAlzAAAIAAPog");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(384).to({graphics:mask_3_graphics_384,x:110.6,y:308}).wait(1).to({graphics:mask_3_graphics_385,x:111.6,y:308}).wait(1).to({graphics:mask_3_graphics_386,x:112.7,y:308}).wait(1).to({graphics:mask_3_graphics_387,x:113.8,y:308}).wait(1).to({graphics:mask_3_graphics_388,x:114.8,y:308}).wait(1).to({graphics:mask_3_graphics_389,x:115.9,y:308}).wait(1).to({graphics:mask_3_graphics_390,x:116.9,y:308}).wait(1).to({graphics:mask_3_graphics_391,x:118,y:308}).wait(1).to({graphics:mask_3_graphics_392,x:119.1,y:308}).wait(1).to({graphics:mask_3_graphics_393,x:120.1,y:308}).wait(1).to({graphics:mask_3_graphics_394,x:121.2,y:308}).wait(1).to({graphics:mask_3_graphics_395,x:122.3,y:308}).wait(1).to({graphics:mask_3_graphics_396,x:123.3,y:308}).wait(1).to({graphics:mask_3_graphics_397,x:124.4,y:308}).wait(1).to({graphics:mask_3_graphics_398,x:125.5,y:308}).wait(1).to({graphics:mask_3_graphics_399,x:126.5,y:308}).wait(1).to({graphics:mask_3_graphics_400,x:127.6,y:308}).wait(1).to({graphics:mask_3_graphics_401,x:128.7,y:308}).wait(1).to({graphics:mask_3_graphics_402,x:129.7,y:308}).wait(1).to({graphics:mask_3_graphics_403,x:130.8,y:308}).wait(1).to({graphics:mask_3_graphics_404,x:131.8,y:308}).wait(1).to({graphics:mask_3_graphics_405,x:132.9,y:308}).wait(1).to({graphics:mask_3_graphics_406,x:134,y:308}).wait(1).to({graphics:mask_3_graphics_407,x:135,y:308}).wait(1).to({graphics:mask_3_graphics_408,x:136.1,y:308}).wait(1).to({graphics:mask_3_graphics_409,x:137.2,y:308}).wait(1).to({graphics:mask_3_graphics_410,x:138.2,y:308}).wait(1).to({graphics:mask_3_graphics_411,x:139.3,y:308}).wait(1).to({graphics:mask_3_graphics_412,x:140.4,y:308}).wait(1).to({graphics:mask_3_graphics_413,x:141.4,y:308}).wait(1).to({graphics:mask_3_graphics_414,x:142.5,y:308}).wait(1).to({graphics:mask_3_graphics_415,x:143.6,y:308}).wait(1).to({graphics:mask_3_graphics_416,x:144.6,y:308}).wait(1).to({graphics:mask_3_graphics_417,x:145.7,y:308}).wait(1).to({graphics:mask_3_graphics_418,x:146.7,y:308}).wait(1).to({graphics:mask_3_graphics_419,x:147.8,y:308}).wait(1).to({graphics:mask_3_graphics_420,x:148.9,y:308}).wait(1).to({graphics:mask_3_graphics_421,x:149.9,y:308}).wait(1).to({graphics:mask_3_graphics_422,x:151,y:308}).wait(1).to({graphics:mask_3_graphics_423,x:152.1,y:308}).wait(1).to({graphics:mask_3_graphics_424,x:153.1,y:308}).wait(1).to({graphics:mask_3_graphics_425,x:154.2,y:308}).wait(1).to({graphics:mask_3_graphics_426,x:155.3,y:308}).wait(1).to({graphics:mask_3_graphics_427,x:156.4,y:308}).wait(1).to({graphics:mask_3_graphics_428,x:157.4,y:308}).wait(1).to({graphics:mask_3_graphics_429,x:158.5,y:308}).wait(1).to({graphics:mask_3_graphics_430,x:159.5,y:308}).wait(1).to({graphics:mask_3_graphics_431,x:160.6,y:308}).wait(1).to({graphics:mask_3_graphics_432,x:161.7,y:308}).wait(1).to({graphics:mask_3_graphics_433,x:162.7,y:308}).wait(1).to({graphics:mask_3_graphics_434,x:163.8,y:308}).wait(1).to({graphics:mask_3_graphics_435,x:164.9,y:308}).wait(1).to({graphics:mask_3_graphics_436,x:165.9,y:308}).wait(1).to({graphics:mask_3_graphics_437,x:167,y:308}).wait(1).to({graphics:mask_3_graphics_438,x:168.1,y:308}).wait(1).to({graphics:mask_3_graphics_439,x:169.1,y:308}).wait(1).to({graphics:mask_3_graphics_440,x:170.2,y:308}).wait(1).to({graphics:mask_3_graphics_441,x:171.2,y:308}).wait(1).to({graphics:mask_3_graphics_442,x:172.3,y:308}).wait(1).to({graphics:mask_3_graphics_443,x:173.4,y:308}).wait(1).to({graphics:mask_3_graphics_444,x:174.4,y:308}).wait(1).to({graphics:mask_3_graphics_445,x:175.5,y:308}).wait(1).to({graphics:mask_3_graphics_446,x:176.6,y:308}).wait(1).to({graphics:mask_3_graphics_447,x:177.6,y:308}).wait(1).to({graphics:mask_3_graphics_448,x:178.7,y:308}).wait(1).to({graphics:mask_3_graphics_449,x:179.8,y:308}).wait(1).to({graphics:mask_3_graphics_450,x:180.8,y:308}).wait(1).to({graphics:mask_3_graphics_451,x:181.9,y:308}).wait(1).to({graphics:mask_3_graphics_452,x:183,y:308}).wait(1).to({graphics:mask_3_graphics_453,x:184,y:308}).wait(1).to({graphics:mask_3_graphics_454,x:185.1,y:308}).wait(1).to({graphics:mask_3_graphics_455,x:186.1,y:308}).wait(1).to({graphics:mask_3_graphics_456,x:187.2,y:308}).wait(1).to({graphics:mask_3_graphics_457,x:188.3,y:308}).wait(1).to({graphics:mask_3_graphics_458,x:189.3,y:308}).wait(1).to({graphics:mask_3_graphics_459,x:190.4,y:308}).wait(1).to({graphics:mask_3_graphics_460,x:191.5,y:308}).wait(1).to({graphics:mask_3_graphics_461,x:192.5,y:308}).wait(1).to({graphics:mask_3_graphics_462,x:193.6,y:308}).wait(1).to({graphics:mask_3_graphics_463,x:194.7,y:308}).wait(1).to({graphics:mask_3_graphics_464,x:195.7,y:308}).wait(1).to({graphics:mask_3_graphics_465,x:196.8,y:308}).wait(1).to({graphics:mask_3_graphics_466,x:197.9,y:308}).wait(1).to({graphics:mask_3_graphics_467,x:198.9,y:308}).wait(1).to({graphics:mask_3_graphics_468,x:200,y:308}).wait(1).to({graphics:mask_3_graphics_469,x:201,y:308}).wait(1).to({graphics:mask_3_graphics_470,x:161.5,y:179}).wait(431));

	// Layer 9
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(20,1,1).p("AveE8QFwk5HijKQHgjMF4CbQDjBeAwBu");
	this.shape_5.setTransform(237.1,310.4);
	this.shape_5._off = true;

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(384).to({_off:false},0).wait(517));

	// Layer 18
	this.instance_3 = new lib.ar2("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(194.4,86.3,1,1,-0.5,0,0,0.8,-0.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(160).to({_off:false},0).wait(741));

	// Layer 8 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_179 = new cjs.Graphics().p("ANFItIATgoIHCDbIgUAog");
	var mask_4_graphics_180 = new cjs.Graphics().p("AjuhOIAdg9IHADaIgdA9g");
	var mask_4_graphics_181 = new cjs.Graphics().p("Aj0hDIAphTIHADaIgpBTg");
	var mask_4_graphics_182 = new cjs.Graphics().p("Aj5g4IAzhpIHADaIgzBpg");
	var mask_4_graphics_183 = new cjs.Graphics().p("Aj+gtIA9h/IHADaIg9B/g");
	var mask_4_graphics_184 = new cjs.Graphics().p("AkEgiIBIiVIHADaIhICVg");
	var mask_4_graphics_185 = new cjs.Graphics().p("AkJgYIBTipIHADaIhTCpg");
	var mask_4_graphics_186 = new cjs.Graphics().p("AkOgNIBdi/IHADaIhdC/g");
	var mask_4_graphics_187 = new cjs.Graphics().p("AkTgCIBnjVIHADaIhnDVg");
	var mask_4_graphics_188 = new cjs.Graphics().p("AkZAIIBzjqIHADbIhzDqg");
	var mask_4_graphics_189 = new cjs.Graphics().p("AkeATIB9kAIHADbIh9EAg");
	var mask_4_graphics_190 = new cjs.Graphics().p("AkjAdICHkUIHADbIiHEUg");
	var mask_4_graphics_191 = new cjs.Graphics().p("AkpAoICSkqIHADbIiREqg");
	var mask_4_graphics_192 = new cjs.Graphics().p("AkuAzICdlAIHADbIidFAg");
	var mask_4_graphics_193 = new cjs.Graphics().p("AkzA+ICnlWIHADbIinFWg");
	var mask_4_graphics_194 = new cjs.Graphics().p("Ak4BJICxlsIHADbIixFsg");
	var mask_4_graphics_195 = new cjs.Graphics().p("Ak+BTIC8mAIHADbIi8GAg");
	var mask_4_graphics_196 = new cjs.Graphics().p("AlDBeIDHmWIHADbIjHGWg");
	var mask_4_graphics_197 = new cjs.Graphics().p("AlIBpIDRmsIHADbIjRGsg");
	var mask_4_graphics_198 = new cjs.Graphics().p("AlNB0IDbnCIHADbIjbHCg");
	var mask_4_graphics_199 = new cjs.Graphics().p("AlSB/IDlnYIHADbIjlHYg");
	var mask_4_graphics_200 = new cjs.Graphics().p("AlYCJIDxnsIHADbIjxHsg");
	var mask_4_graphics_201 = new cjs.Graphics().p("AldCUID7oCIHADbIj7ICg");
	var mask_4_graphics_202 = new cjs.Graphics().p("AliCfIEFoYIHADbIkFIYg");
	var mask_4_graphics_203 = new cjs.Graphics().p("AloCqIERouIHADbIkRIug");
	var mask_4_graphics_204 = new cjs.Graphics().p("AltC1IEbpEIHADbIkbJEg");
	var mask_4_graphics_205 = new cjs.Graphics().p("AlyC/IElpZIHADbIklJZg");
	var mask_4_graphics_206 = new cjs.Graphics().p("Al4DKIEwpuIHADbIkwJug");
	var mask_4_graphics_207 = new cjs.Graphics().p("Al9DVIE7qEIHADbIk7KEg");
	var mask_4_graphics_208 = new cjs.Graphics().p("AmCDgIFFqaIHADbIlFKag");
	var mask_4_graphics_209 = new cjs.Graphics().p("AmHDrIFPqwIHADbIlPKwg");
	var mask_4_graphics_210 = new cjs.Graphics().p("AmMD2IFZrGIHADbIlZLFg");
	var mask_4_graphics_211 = new cjs.Graphics().p("AmSEAIFlraIHADbIllLag");
	var mask_4_graphics_212 = new cjs.Graphics().p("AmXELIFvrwIHADbIlvLwg");
	var mask_4_graphics_213 = new cjs.Graphics().p("AmcEWIF5sGIHADbIl5MGg");
	var mask_4_graphics_214 = new cjs.Graphics().p("AmiEhIGEscIHADbImDMcg");
	var mask_4_graphics_215 = new cjs.Graphics().p("AmnEsIGPsyIHADbImPMxg");
	var mask_4_graphics_216 = new cjs.Graphics().p("AmsE2IGZtGIHADbImZNGg");
	var mask_4_graphics_217 = new cjs.Graphics().p("AmxFBIGjtcIHADbImjNcg");
	var mask_4_graphics_218 = new cjs.Graphics().p("Am3FMIGutyIHADbImuNyg");
	var mask_4_graphics_219 = new cjs.Graphics().p("Am8FXIG5uIIHADbIm5OIg");
	var mask_4_graphics_220 = new cjs.Graphics().p("AnBFhIHCudIHBDbInCOdg");
	var mask_4_graphics_221 = new cjs.Graphics().p("AnGFsIHMuyIHBDbInMOyg");
	var mask_4_graphics_222 = new cjs.Graphics().p("AnMF3IHYvIIHBDbInYPIg");
	var mask_4_graphics_223 = new cjs.Graphics().p("AnRGCIHiveIHBDbIniPeg");
	var mask_4_graphics_224 = new cjs.Graphics().p("AnWGNIHsv0IHBDbInsP0g");
	var mask_4_graphics_225 = new cjs.Graphics().p("AncGXIH3wJIHBDbIn3QJg");
	var mask_4_graphics_226 = new cjs.Graphics().p("AnhGiIICweIHBDbIoCQeg");
	var mask_4_graphics_227 = new cjs.Graphics().p("AnmGtIIMw0IHBDbIoMQ0g");
	var mask_4_graphics_228 = new cjs.Graphics().p("AnrG4IIWxKIHBDbIoWRKg");
	var mask_4_graphics_229 = new cjs.Graphics().p("AnxHDIIixgIHBDbIoiRgg");
	var mask_4_graphics_230 = new cjs.Graphics().p("An2HOIIsx2IHBDbIosR2g");
	var mask_4_graphics_231 = new cjs.Graphics().p("An8HZII3yMIHBDbIo2SMg");
	var mask_4_graphics_232 = new cjs.Graphics().p("AoBHkIJCyiIHBDbIpCSig");
	var mask_4_graphics_233 = new cjs.Graphics().p("AoGHvIJMy4IHBDbIpMS4g");
	var mask_4_graphics_234 = new cjs.Graphics().p("AoLH6IJWzOIHBDbIpXTOg");
	var mask_4_graphics_235 = new cjs.Graphics().p("AoRIFIJizkIHBDbIpiTkg");
	var mask_4_graphics_236 = new cjs.Graphics().p("AoWIQIJsz6IHBDbIpsT6g");
	var mask_4_graphics_237 = new cjs.Graphics().p("AocIbIJ30QIHBDbIp2UQg");
	var mask_4_graphics_238 = new cjs.Graphics().p("AohImIKC0mIHBDbIqCUmg");
	var mask_4_graphics_239 = new cjs.Graphics().p("AomIxIKM08IHBDbIqMU8g");
	var mask_4_graphics_240 = new cjs.Graphics().p("AosI8IKY1SIHBDbIqYVSg");
	var mask_4_graphics_241 = new cjs.Graphics().p("AoxJHIKi1oIHBDbIqiVog");
	var mask_4_graphics_242 = new cjs.Graphics().p("Ao2JSIKs1+IHBDbIqsV+g");
	var mask_4_graphics_243 = new cjs.Graphics().p("Ao8JdIK42UIHBDbIq4WUg");
	var mask_4_graphics_244 = new cjs.Graphics().p("ApBJoILC2qIHBDbIrCWqg");
	var mask_4_graphics_245 = new cjs.Graphics().p("ApHJzILN3AIHBDbIrNXAg");
	var mask_4_graphics_246 = new cjs.Graphics().p("ApMJ+ILY3WIHBDbIrYXWg");
	var mask_4_graphics_247 = new cjs.Graphics().p("ApRKJILi3sIHBDbIriXsg");
	var mask_4_graphics_248 = new cjs.Graphics().p("ApWKUILs4CIHBDbIrsYCg");
	var mask_4_graphics_249 = new cjs.Graphics().p("ApcKfIL44YIHBDbIr4YYg");
	var mask_4_graphics_250 = new cjs.Graphics().p("AphKqIMC4uIHBDbIsCYug");
	var mask_4_graphics_251 = new cjs.Graphics().p("ApnK1IMN5EIHBDbIsNZEg");
	var mask_4_graphics_252 = new cjs.Graphics().p("ApsLAIMY5aIHBDbIsYZag");
	var mask_4_graphics_253 = new cjs.Graphics().p("ApxLLIMi5wIHBDbIsiZwg");
	var mask_4_graphics_254 = new cjs.Graphics().p("Ap2LWIMs6GIHBDbIssaGg");
	var mask_4_graphics_255 = new cjs.Graphics().p("Ap8LhIM46cIHBDbIs4acg");
	var mask_4_graphics_256 = new cjs.Graphics().p("AqBLsINC6yIHBDbItCayg");
	var mask_4_graphics_257 = new cjs.Graphics().p("AqHL3INN7IIHBDbItNbIg");
	var mask_4_graphics_258 = new cjs.Graphics().p("AqMMCINY7eIHBDbItYbeg");
	var mask_4_graphics_259 = new cjs.Graphics().p("AqRMNINi70IHBDbItib0g");
	var mask_4_graphics_260 = new cjs.Graphics().p("AqXMXINu8JIHBDbItucKg");
	var mask_4_graphics_261 = new cjs.Graphics().p("AqcMjIN48gIHBDbIt4cfg");
	var mask_4_graphics_262 = new cjs.Graphics().p("AqhMtIOC81IHBDbIuCc2g");
	var mask_4_graphics_263 = new cjs.Graphics().p("AqnM5IOO9MIHBDbIuOdLg");
	var mask_4_graphics_264 = new cjs.Graphics().p("AqsNDIOY9hIHBDbIuYdhg");
	var mask_4_graphics_265 = new cjs.Graphics().p("AqxNPIOi94IHBDbIuid4g");
	var mask_4_graphics_266 = new cjs.Graphics().p("Aq3NZIOu+NIHBDbIuueNg");
	var mask_4_graphics_267 = new cjs.Graphics().p("Aq8NkIO4+iIHBDbIu4eig");
	var mask_4_graphics_268 = new cjs.Graphics().p("ArBNvIPC+4IHBDbIvCe4g");
	var mask_4_graphics_269 = new cjs.Graphics().p("ArHN5IPN/NIHBDbIvMfNg");
	var mask_4_graphics_270 = new cjs.Graphics().p("ArLOEIPW/iIHBDbIvWfig");
	var mask_4_graphics_271 = new cjs.Graphics().p("ArROPIPi/4IHBDbIvif4g");
	var mask_4_graphics_272 = new cjs.Graphics().p("ArWOaMAPsggOIHBDbMgPsAgOg");
	var mask_4_graphics_273 = new cjs.Graphics().p("ArbOlMAP2ggkIHBDbMgP2Agjg");
	var mask_4_graphics_274 = new cjs.Graphics().p("ArhOvMAQBgg4IHBDbMgQBAg4g");
	var mask_4_graphics_275 = new cjs.Graphics().p("ArmO6MAQMghOIHBDbMgQMAhOg");
	var mask_4_graphics_276 = new cjs.Graphics().p("ArrPFMAQWghkIHBDbMgQWAhjg");
	var mask_4_graphics_277 = new cjs.Graphics().p("ArwPPMAQggh4IHBDbMgQgAh4g");
	var mask_4_graphics_278 = new cjs.Graphics().p("Ar1PaMAQqgiOIHBDbMgQqAiOg");
	var mask_4_graphics_279 = new cjs.Graphics().p("Ar7PlMAQ2gikIHBDbMgQ2Aikg");
	var mask_4_graphics_280 = new cjs.Graphics().p("AsAPvMARAgi4IHBDbMgRAAi4g");
	var mask_4_graphics_281 = new cjs.Graphics().p("AsFP6MARKgjOIHBDbMgRKAjOg");
	var mask_4_graphics_282 = new cjs.Graphics().p("AsLQFMARWgjkIHBDbMgRWAjkg");
	var mask_4_graphics_283 = new cjs.Graphics().p("AsQQPMARggj5IHBDbMgRgAj6g");
	var mask_4_graphics_284 = new cjs.Graphics().p("AsVQaMARqgkOIHBDbMgRqAkOg");
	var mask_4_graphics_285 = new cjs.Graphics().p("AsaQlMAR0gkkIHBDbMgR0Akkg");
	var mask_4_graphics_286 = new cjs.Graphics().p("AsfQwMAR+gk6IHBDbMgR+Ak6g");
	var mask_4_graphics_287 = new cjs.Graphics().p("AskQ6MASJglOIHBDbMgSJAlOg");
	var mask_4_graphics_288 = new cjs.Graphics().p("AsqRFMASUglkIHBDbMgSUAlkg");
	var mask_4_graphics_289 = new cjs.Graphics().p("AsvRQMASegl6IHBDbMgSeAl6g");
	var mask_4_graphics_290 = new cjs.Graphics().p("As0RaMASogmOIHBDbMgSoAmOg");
	var mask_4_graphics_291 = new cjs.Graphics().p("As5RlMASygmkIHBDbMgSyAmkg");
	var mask_4_graphics_292 = new cjs.Graphics().p("As+RwMAS9gm6IHBDbMgS9Am6g");
	var mask_4_graphics_293 = new cjs.Graphics().p("AtER7MATHgnQIHCDbMgTIAnQg");
	var mask_4_graphics_294 = new cjs.Graphics().p("AtJSGMATRgnnIHCDbMgTTAnng");
	var mask_4_graphics_295 = new cjs.Graphics().p("AtOSRMATagn9IHDDbMgTeAn+g");
	var mask_4_graphics_296 = new cjs.Graphics().p("AtUScMATlgoTIHEDbMgTqAoUg");
	var mask_4_graphics_297 = new cjs.Graphics().p("AtZSnMATvgoqIHEDbMgT1Aosg");
	var mask_4_graphics_298 = new cjs.Graphics().p("AteSyMAT4gpAIHGDbMgUBApCg");
	var mask_4_graphics_299 = new cjs.Graphics().p("AtkS9MAUDgpWIHGDbMgUMApYg");
	var mask_4_graphics_300 = new cjs.Graphics().p("AtpTIMAUOgptIHFDbMgUXApvg");
	var mask_4_graphics_301 = new cjs.Graphics().p("AtvTTMAUYgqDIHHDbMgUiAqGg");
	var mask_4_graphics_302 = new cjs.Graphics().p("At0TeMAUigqZIHHDaMgUtAqdg");
	var mask_4_graphics_303 = new cjs.Graphics().p("At6TpMAUsgqwIHJDbMgU5Aq0g");
	var mask_4_graphics_304 = new cjs.Graphics().p("At/T0MAU2grGIHJDbMgVEArKg");
	var mask_4_graphics_305 = new cjs.Graphics().p("AuET/MAVAgrcIHJDaMgVPArhg");
	var mask_4_graphics_306 = new cjs.Graphics().p("AuJULMAVKgr0IHJDbMgVZAr3g");
	var mask_4_graphics_307 = new cjs.Graphics().p("AuYUnMAVqgsrIHHDaMgV0Asvg");
	var mask_4_graphics_308 = new cjs.Graphics().p("AumVFMAWJgtlIHEDbMgWPAtmg");
	var mask_4_graphics_309 = new cjs.Graphics().p("ApQfoMAWogudIHCDbMgWoAudg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(179).to({graphics:mask_4_graphics_179,x:130.6,y:77.6}).wait(1).to({graphics:mask_4_graphics_180,x:237.2,y:143.3}).wait(1).to({graphics:mask_4_graphics_181,x:236.6,y:144.4}).wait(1).to({graphics:mask_4_graphics_182,x:236.1,y:145.5}).wait(1).to({graphics:mask_4_graphics_183,x:235.6,y:146.5}).wait(1).to({graphics:mask_4_graphics_184,x:235.1,y:147.6}).wait(1).to({graphics:mask_4_graphics_185,x:234.5,y:148.7}).wait(1).to({graphics:mask_4_graphics_186,x:234,y:149.8}).wait(1).to({graphics:mask_4_graphics_187,x:233.5,y:150.9}).wait(1).to({graphics:mask_4_graphics_188,x:232.9,y:151.9}).wait(1).to({graphics:mask_4_graphics_189,x:232.4,y:153}).wait(1).to({graphics:mask_4_graphics_190,x:231.9,y:154.1}).wait(1).to({graphics:mask_4_graphics_191,x:231.4,y:155.2}).wait(1).to({graphics:mask_4_graphics_192,x:230.8,y:156.3}).wait(1).to({graphics:mask_4_graphics_193,x:230.3,y:157.3}).wait(1).to({graphics:mask_4_graphics_194,x:229.8,y:158.4}).wait(1).to({graphics:mask_4_graphics_195,x:229.3,y:159.5}).wait(1).to({graphics:mask_4_graphics_196,x:228.7,y:160.6}).wait(1).to({graphics:mask_4_graphics_197,x:228.2,y:161.7}).wait(1).to({graphics:mask_4_graphics_198,x:227.7,y:162.7}).wait(1).to({graphics:mask_4_graphics_199,x:227.2,y:163.8}).wait(1).to({graphics:mask_4_graphics_200,x:226.6,y:164.9}).wait(1).to({graphics:mask_4_graphics_201,x:226.1,y:166}).wait(1).to({graphics:mask_4_graphics_202,x:225.6,y:167.1}).wait(1).to({graphics:mask_4_graphics_203,x:225,y:168.1}).wait(1).to({graphics:mask_4_graphics_204,x:224.5,y:169.2}).wait(1).to({graphics:mask_4_graphics_205,x:224,y:170.3}).wait(1).to({graphics:mask_4_graphics_206,x:223.5,y:171.4}).wait(1).to({graphics:mask_4_graphics_207,x:222.9,y:172.5}).wait(1).to({graphics:mask_4_graphics_208,x:222.4,y:173.5}).wait(1).to({graphics:mask_4_graphics_209,x:221.9,y:174.6}).wait(1).to({graphics:mask_4_graphics_210,x:221.4,y:175.7}).wait(1).to({graphics:mask_4_graphics_211,x:220.8,y:176.8}).wait(1).to({graphics:mask_4_graphics_212,x:220.3,y:177.9}).wait(1).to({graphics:mask_4_graphics_213,x:219.8,y:178.9}).wait(1).to({graphics:mask_4_graphics_214,x:219.3,y:180}).wait(1).to({graphics:mask_4_graphics_215,x:218.7,y:181.1}).wait(1).to({graphics:mask_4_graphics_216,x:218.2,y:182.2}).wait(1).to({graphics:mask_4_graphics_217,x:217.7,y:183.3}).wait(1).to({graphics:mask_4_graphics_218,x:217.2,y:184.3}).wait(1).to({graphics:mask_4_graphics_219,x:216.6,y:185.4}).wait(1).to({graphics:mask_4_graphics_220,x:216.1,y:186.5}).wait(1).to({graphics:mask_4_graphics_221,x:215.6,y:187.6}).wait(1).to({graphics:mask_4_graphics_222,x:215,y:188.7}).wait(1).to({graphics:mask_4_graphics_223,x:214.5,y:189.7}).wait(1).to({graphics:mask_4_graphics_224,x:214,y:190.8}).wait(1).to({graphics:mask_4_graphics_225,x:213.5,y:191.9}).wait(1).to({graphics:mask_4_graphics_226,x:212.9,y:193}).wait(1).to({graphics:mask_4_graphics_227,x:212.4,y:194.1}).wait(1).to({graphics:mask_4_graphics_228,x:211.9,y:195.2}).wait(1).to({graphics:mask_4_graphics_229,x:211.3,y:196.3}).wait(1).to({graphics:mask_4_graphics_230,x:210.8,y:197.4}).wait(1).to({graphics:mask_4_graphics_231,x:210.3,y:198.5}).wait(1).to({graphics:mask_4_graphics_232,x:209.7,y:199.6}).wait(1).to({graphics:mask_4_graphics_233,x:209.2,y:200.7}).wait(1).to({graphics:mask_4_graphics_234,x:208.7,y:201.8}).wait(1).to({graphics:mask_4_graphics_235,x:208.1,y:202.9}).wait(1).to({graphics:mask_4_graphics_236,x:207.6,y:204}).wait(1).to({graphics:mask_4_graphics_237,x:207.1,y:205.1}).wait(1).to({graphics:mask_4_graphics_238,x:206.5,y:206.2}).wait(1).to({graphics:mask_4_graphics_239,x:206,y:207.3}).wait(1).to({graphics:mask_4_graphics_240,x:205.4,y:208.4}).wait(1).to({graphics:mask_4_graphics_241,x:204.9,y:209.5}).wait(1).to({graphics:mask_4_graphics_242,x:204.4,y:210.6}).wait(1).to({graphics:mask_4_graphics_243,x:203.8,y:211.7}).wait(1).to({graphics:mask_4_graphics_244,x:203.3,y:212.8}).wait(1).to({graphics:mask_4_graphics_245,x:202.8,y:213.9}).wait(1).to({graphics:mask_4_graphics_246,x:202.2,y:215}).wait(1).to({graphics:mask_4_graphics_247,x:201.7,y:216}).wait(1).to({graphics:mask_4_graphics_248,x:201.2,y:217.1}).wait(1).to({graphics:mask_4_graphics_249,x:200.6,y:218.2}).wait(1).to({graphics:mask_4_graphics_250,x:200.1,y:219.3}).wait(1).to({graphics:mask_4_graphics_251,x:199.6,y:220.4}).wait(1).to({graphics:mask_4_graphics_252,x:199,y:221.5}).wait(1).to({graphics:mask_4_graphics_253,x:198.5,y:222.6}).wait(1).to({graphics:mask_4_graphics_254,x:198,y:223.7}).wait(1).to({graphics:mask_4_graphics_255,x:197.4,y:224.8}).wait(1).to({graphics:mask_4_graphics_256,x:196.9,y:225.9}).wait(1).to({graphics:mask_4_graphics_257,x:196.4,y:227}).wait(1).to({graphics:mask_4_graphics_258,x:195.8,y:228.1}).wait(1).to({graphics:mask_4_graphics_259,x:195.3,y:229.2}).wait(1).to({graphics:mask_4_graphics_260,x:194.7,y:230.3}).wait(1).to({graphics:mask_4_graphics_261,x:194.2,y:231.4}).wait(1).to({graphics:mask_4_graphics_262,x:193.7,y:232.5}).wait(1).to({graphics:mask_4_graphics_263,x:193.1,y:233.6}).wait(1).to({graphics:mask_4_graphics_264,x:192.6,y:234.7}).wait(1).to({graphics:mask_4_graphics_265,x:192.1,y:235.8}).wait(1).to({graphics:mask_4_graphics_266,x:191.5,y:236.9}).wait(1).to({graphics:mask_4_graphics_267,x:191,y:238}).wait(1).to({graphics:mask_4_graphics_268,x:190.5,y:239.1}).wait(1).to({graphics:mask_4_graphics_269,x:190,y:240.1}).wait(1).to({graphics:mask_4_graphics_270,x:189.5,y:241.2}).wait(1).to({graphics:mask_4_graphics_271,x:188.9,y:242.3}).wait(1).to({graphics:mask_4_graphics_272,x:188.4,y:243.3}).wait(1).to({graphics:mask_4_graphics_273,x:187.9,y:244.4}).wait(1).to({graphics:mask_4_graphics_274,x:187.4,y:245.5}).wait(1).to({graphics:mask_4_graphics_275,x:186.8,y:246.5}).wait(1).to({graphics:mask_4_graphics_276,x:186.3,y:247.6}).wait(1).to({graphics:mask_4_graphics_277,x:185.8,y:248.7}).wait(1).to({graphics:mask_4_graphics_278,x:185.3,y:249.8}).wait(1).to({graphics:mask_4_graphics_279,x:184.8,y:250.8}).wait(1).to({graphics:mask_4_graphics_280,x:184.3,y:251.9}).wait(1).to({graphics:mask_4_graphics_281,x:183.7,y:253}).wait(1).to({graphics:mask_4_graphics_282,x:183.2,y:254}).wait(1).to({graphics:mask_4_graphics_283,x:182.7,y:255.1}).wait(1).to({graphics:mask_4_graphics_284,x:182.2,y:256.2}).wait(1).to({graphics:mask_4_graphics_285,x:181.7,y:257.2}).wait(1).to({graphics:mask_4_graphics_286,x:181.1,y:258.3}).wait(1).to({graphics:mask_4_graphics_287,x:180.6,y:259.4}).wait(1).to({graphics:mask_4_graphics_288,x:180.1,y:260.5}).wait(1).to({graphics:mask_4_graphics_289,x:179.6,y:261.5}).wait(1).to({graphics:mask_4_graphics_290,x:179.1,y:262.6}).wait(1).to({graphics:mask_4_graphics_291,x:178.5,y:263.7}).wait(1).to({graphics:mask_4_graphics_292,x:178,y:264.7}).wait(1).to({graphics:mask_4_graphics_293,x:177.5,y:265.9}).wait(1).to({graphics:mask_4_graphics_294,x:177,y:267}).wait(1).to({graphics:mask_4_graphics_295,x:176.5,y:268.1}).wait(1).to({graphics:mask_4_graphics_296,x:175.9,y:269.3}).wait(1).to({graphics:mask_4_graphics_297,x:175.4,y:270.4}).wait(1).to({graphics:mask_4_graphics_298,x:174.9,y:271.5}).wait(1).to({graphics:mask_4_graphics_299,x:174.4,y:272.7}).wait(1).to({graphics:mask_4_graphics_300,x:173.9,y:273.8}).wait(1).to({graphics:mask_4_graphics_301,x:173.3,y:274.9}).wait(1).to({graphics:mask_4_graphics_302,x:172.8,y:276.1}).wait(1).to({graphics:mask_4_graphics_303,x:172.3,y:277.2}).wait(1).to({graphics:mask_4_graphics_304,x:171.8,y:278.3}).wait(1).to({graphics:mask_4_graphics_305,x:171.3,y:279.5}).wait(1).to({graphics:mask_4_graphics_306,x:170.7,y:280.6}).wait(1).to({graphics:mask_4_graphics_307,x:169.2,y:283.4}).wait(1).to({graphics:mask_4_graphics_308,x:167.8,y:286.1}).wait(1).to({graphics:mask_4_graphics_309,x:130.6,y:224.3}).wait(592));

	// Layer 7
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(20,1,1).p("AOH35QkigJjwIuQjwItlIJhQlIJhiqFHQipFGgoBT");
	this.shape_6.setTransform(185.3,272.9);
	this.shape_6._off = true;

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(179).to({_off:false},0).wait(722));

	// Layer 6 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_160 = new cjs.Graphics().p("AQji2QEHADC8C6QC/DAAAEOQAAEOi/C/Qi8C8kHADg");
	var mask_5_graphics_161 = new cjs.Graphics().p("AP9i0QEGgMDGCvQDKCzAQEOQAQEOizDKQiwDGkGATg");
	var mask_5_graphics_162 = new cjs.Graphics().p("APWivQEGgbDQCjQDUCnAgEMQAgEMinDVQikDQkFAjg");
	var mask_5_graphics_163 = new cjs.Graphics().p("AOwimQEDgrDZCXQDeCaAwEKQAwEKiaDdQiYDakCAyg");
	var mask_5_graphics_164 = new cjs.Graphics().p("AOKiaQEAg6DiCKQDnCMA/EHQA/EHiMDmQiKDij/BBg");
	var mask_5_graphics_165 = new cjs.Graphics().p("ANkiKQD9hJDpB8QDvB+BPEDQBPECh/DuQh9Dqj6BRg");
	var mask_5_graphics_166 = new cjs.Graphics().p("AM/h3QD4hYDxBuQD1BwBfD9QBeD9hxD2QhuDxj2Bfg");
	var mask_5_graphics_167 = new cjs.Graphics().p("AMchhQDyhnD3BgQD7BiBtD2QBtD4hiD7QhgD3jvBug");
	var mask_5_graphics_168 = new cjs.Graphics().p("AL5hIQDsh1D7BRQECBTB7DwQB7DwhSEBQhSD8joB8g");
	var mask_5_graphics_169 = new cjs.Graphics().p("ALXgsQDliCEABCQEFBDCKDoQCJDphDEFQhCEBjhCJg");
	var mask_5_graphics_170 = new cjs.Graphics().p("AK3gNQDciPEEAyQEJA0CXDfQCXDhg0EJQgzEEjYCWg");
	var mask_5_graphics_171 = new cjs.Graphics().p("AKXAUQDUibEGAjQEMAkCkDWQCkDXgkEMQgjEGjPCjg");
	var mask_5_graphics_172 = new cjs.Graphics().p("AJ6A5QDJioEIAUQEOAUCwDMQCxDNgVENQgTEIjFCvg");
	var mask_5_graphics_173 = new cjs.Graphics().p("AJdBgQDAizEIAEQEOAEC9DBQC8DCgEEOQgEEJi6C6g");
	var mask_5_graphics_174 = new cjs.Graphics().p("AJCCKQC1i+EIgMQEOgMDHC2QDIC2AMEOQALEJivDEg");
	var mask_5_graphics_175 = new cjs.Graphics().p("AIpC2QCpjIEHgcQENgcDRCqQDSCqAcENQAbEHiiDPg");
	var mask_5_graphics_176 = new cjs.Graphics().p("AIRDlQCdjUEFgqQELgrDbCcQDcCeArELQArEFiWDYg");
	var mask_5_graphics_177 = new cjs.Graphics().p("AH7EVQCQjcECg6QEIg7DkCPQDlCRA7EHQA6EDiJDgg");
	var mask_5_graphics_178 = new cjs.Graphics().p("AHnFHQCDjlD+hJQEEhKDsCCQDtCCBLEEQBJD+h7Dog");
	var mask_5_graphics_179 = new cjs.Graphics().p("AHVF6QB1jrD6hZQD+hZD0B0QD0B0BaD/QBZD5huDvg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(160).to({graphics:mask_5_graphics_160,x:170.1,y:112.1}).wait(1).to({graphics:mask_5_graphics_161,x:170.1,y:112.1}).wait(1).to({graphics:mask_5_graphics_162,x:170.1,y:112}).wait(1).to({graphics:mask_5_graphics_163,x:170.1,y:111.7}).wait(1).to({graphics:mask_5_graphics_164,x:170.2,y:111.3}).wait(1).to({graphics:mask_5_graphics_165,x:170.2,y:110.9}).wait(1).to({graphics:mask_5_graphics_166,x:170.2,y:110.3}).wait(1).to({graphics:mask_5_graphics_167,x:170.3,y:109.6}).wait(1).to({graphics:mask_5_graphics_168,x:170.3,y:108.8}).wait(1).to({graphics:mask_5_graphics_169,x:170.3,y:107.9}).wait(1).to({graphics:mask_5_graphics_170,x:170.3,y:106.9}).wait(1).to({graphics:mask_5_graphics_171,x:170.3,y:105.8}).wait(1).to({graphics:mask_5_graphics_172,x:170.4,y:104.6}).wait(1).to({graphics:mask_5_graphics_173,x:170.4,y:103.3}).wait(1).to({graphics:mask_5_graphics_174,x:170.4,y:101.9}).wait(1).to({graphics:mask_5_graphics_175,x:170.5,y:100.5}).wait(1).to({graphics:mask_5_graphics_176,x:170.6,y:99}).wait(1).to({graphics:mask_5_graphics_177,x:170.7,y:97.4}).wait(1).to({graphics:mask_5_graphics_178,x:170.7,y:95.7}).wait(1).to({graphics:mask_5_graphics_179,x:170.8,y:94}).wait(722));

	// Layer 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(20,1,1).p("AOH35QkigJjwIuQjwItlIJhQlIJhiqFHQipFGgoBT");
	this.shape_7.setTransform(185.3,272.9);
	this.shape_7._off = true;

	var maskedShapeInstanceList = [this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(160).to({_off:false},0).wait(741));

	// Layer 17
	this.instance_4 = new lib.ar1("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(77.2,233.9,1,1,0,0,0,-0.8,0.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).wait(892));

	// Layer 5 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_129 = new cjs.Graphics().p("AMvQIQkJg1iWjgQiTjcAwkDIT/D/Qg3EBjcCTQimBvi8AAQhDAAhFgOg");
	var mask_6_graphics_130 = new cjs.Graphics().p("ANZQQQkNgiiljVQiijSAdkFIUOCkQglEEjRCjQixCJjXAAQgsAAgtgGg");
	var mask_6_graphics_131 = new cjs.Graphics().p("AOEQUQkOgOi0jJQixjGALkGIUWBHQgSEGjFCxQi6Cnj1AAIgogCg");
	var mask_6_graphics_132 = new cjs.Graphics().p("AHhNeQi/i4gIkHIUZgVQAAEHi4C+Qi8DCkOAEIgMABQkHAAi9i4g");
	var mask_6_graphics_133 = new cjs.Graphics().p("AIDN9QjLiqgbkGIUUhyQATEGiqDLQiuDPkNAYQghADgfAAQjmAAi2iZg");
	var mask_6_graphics_134 = new cjs.Graphics().p("AImOZQjWibgtkDIUIjOQAmEEibDXQifDakLArQg5AJg2AAQjKAAith9g");
	var mask_6_graphics_135 = new cjs.Graphics().p("AJMOzQjhiMg/j/IT2kpQA4EBiLDhQiPDlkHA+QhPAThNAAQiwAAihhkg");
	var mask_6_graphics_136 = new cjs.Graphics().p("AJ0PKQjqh7hSj6ITemDQBKD8h7DrQh+DvkCBQQhkAfhiAAQiZAAiShNg");
	var mask_6_graphics_137 = new cjs.Graphics().p("AKdPeQjyhqhjj0IS/naQBcD2hqDzQhtD3j8BiQh3Avh3AAQiDAAiCg5g");
	var mask_6_graphics_138 = new cjs.Graphics().p("ALIPvQj5hYh1jsISbowQBtDwhYD5QhbD+j0B0QiJBBiNAAQhtAAhwgog");
	var mask_6_graphics_139 = new cjs.Graphics().p("AL0P+Qj/hHiFjjIRwqCQB+DnhGD/QhJEEjrCFQiZBWijAAQhYAAhcgZg");
	var mask_6_graphics_140 = new cjs.Graphics().p("AMhQJQkDg1iVjZIRArQQCODdg1EDQg2EJjhCWQimBti7AAQhDAAhGgOg");
	var mask_6_graphics_141 = new cjs.Graphics().p("ANPQRQkHgiijjOIQJscQCeDTgiEGQgjEMjWClQixCIjWAAQgtAAgugGg");
	var mask_6_graphics_142 = new cjs.Graphics().p("AN9QWQkJgPixjCIPOtjQCsDGgPEIQgQEOjKC0Qi5Clj0AAIgqgBg");
	var mask_6_graphics_143 = new cjs.Graphics().p("AIcOXIMcwJQDOCjAiEGQAjEMilDWQikDWkMAjQgvAGgtAAQjQAAiuiBg");
	var mask_6_graphics_144 = new cjs.Graphics().p("AKEPXIJNyMQDpB7BSD6QBUEBh6DxQh6DxkABUQhpAjhnAAQiOAAiKhDg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(129).to({graphics:mask_6_graphics_129,x:158,y:104.6}).wait(1).to({graphics:mask_6_graphics_130,x:158.4,y:104.6}).wait(1).to({graphics:mask_6_graphics_131,x:158.6,y:104.6}).wait(1).to({graphics:mask_6_graphics_132,x:158.7,y:104.6}).wait(1).to({graphics:mask_6_graphics_133,x:158.6,y:104.6}).wait(1).to({graphics:mask_6_graphics_134,x:158.6,y:104.6}).wait(1).to({graphics:mask_6_graphics_135,x:158.6,y:104.7}).wait(1).to({graphics:mask_6_graphics_136,x:158.6,y:104.7}).wait(1).to({graphics:mask_6_graphics_137,x:158.6,y:104.7}).wait(1).to({graphics:mask_6_graphics_138,x:158.5,y:104.7}).wait(1).to({graphics:mask_6_graphics_139,x:158.5,y:104.7}).wait(1).to({graphics:mask_6_graphics_140,x:158.4,y:104.7}).wait(1).to({graphics:mask_6_graphics_141,x:158.4,y:104.7}).wait(1).to({graphics:mask_6_graphics_142,x:158.3,y:104.7}).wait(1).to({graphics:mask_6_graphics_143,x:158.3,y:104.8}).wait(1).to({graphics:mask_6_graphics_144,x:158.3,y:105}).wait(757));

	// Layer 4
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(20,1,1).p("Au7SmQBfiOJBnWQJAnWGoo4QGoo5lHig");
	this.shape_8.setTransform(194.6,239);
	this.shape_8._off = true;

	var maskedShapeInstanceList = [this.shape_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(129).to({_off:false},0).wait(772));

	// Layer 3 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_9 = new cjs.Graphics().p("ADiZqIBNhPIEREIIhNBPg");
	var mask_7_graphics_10 = new cjs.Graphics().p("Ai2hTIBdhgIEQEHIhdBgg");
	var mask_7_graphics_11 = new cjs.Graphics().p("Ai+hKIBthyIEQEIIhtBxg");
	var mask_7_graphics_12 = new cjs.Graphics().p("AjGhBIB9iEIEQEIIh9CDg");
	var mask_7_graphics_13 = new cjs.Graphics().p("AjPg4ICOiVIEREHIiOCUg");
	var mask_7_graphics_14 = new cjs.Graphics().p("AjXgvICeinIEREIIifClg");
	var mask_7_graphics_15 = new cjs.Graphics().p("AjfgnICui4IEREIIivC3g");
	var mask_7_graphics_16 = new cjs.Graphics().p("AjngeIC+jJIEREIIi/DHg");
	var mask_7_graphics_17 = new cjs.Graphics().p("AjvgVIDOjbIEREIIjPDZg");
	var mask_7_graphics_18 = new cjs.Graphics().p("Aj4gMIDfjtIEREIIjfDrg");
	var mask_7_graphics_19 = new cjs.Graphics().p("Aj/gDIDuj/IESEJIjxD8g");
	var mask_7_graphics_20 = new cjs.Graphics().p("AkIAEIEAkOIEREJIkBEMg");
	var mask_7_graphics_21 = new cjs.Graphics().p("AkQANIEQkgIEREKIkREdg");
	var mask_7_graphics_22 = new cjs.Graphics().p("AkYAWIEfkyIESEKIkgEug");
	var mask_7_graphics_23 = new cjs.Graphics().p("AkhAfIEvlDIEUEJIkxFAg");
	var mask_7_graphics_24 = new cjs.Graphics().p("AkoAoIE+lVIETEKIlBFQg");
	var mask_7_graphics_25 = new cjs.Graphics().p("AkxAxIFQlmIETEJIlSFjg");
	var mask_7_graphics_26 = new cjs.Graphics().p("Ak5A5IFgl3IETEJIlhF0g");
	var mask_7_graphics_27 = new cjs.Graphics().p("AlBBDIFwmKIETEKIlyGFg");
	var mask_7_graphics_28 = new cjs.Graphics().p("AlKBLIGBmaIEUEJImDGWg");
	var mask_7_graphics_29 = new cjs.Graphics().p("AlSBUIGRmsIEUEKImTGng");
	var mask_7_graphics_30 = new cjs.Graphics().p("AlaBdIGhm9IEUEJImkG4g");
	var mask_7_graphics_31 = new cjs.Graphics().p("AliBmIGynPIETEJIm0HKg");
	var mask_7_graphics_32 = new cjs.Graphics().p("AlqBvIHCnhIETEKInEHbg");
	var mask_7_graphics_33 = new cjs.Graphics().p("AlyB3IHRnxIEUEJInUHtg");
	var mask_7_graphics_34 = new cjs.Graphics().p("Al6CAIHhoDIEVEJInlH+g");
	var mask_7_graphics_35 = new cjs.Graphics().p("AmDCJIHyoVIEVEKIn2IPg");
	var mask_7_graphics_36 = new cjs.Graphics().p("AmLCSIIDonIEUEKIoGIhg");
	var mask_7_graphics_37 = new cjs.Graphics().p("AmTCbIITo4IEUEKIoWIxg");
	var mask_7_graphics_38 = new cjs.Graphics().p("AmbCkIIjpKIEUEKIomJDg");
	var mask_7_graphics_39 = new cjs.Graphics().p("AmjCsIIzpbIEUEKIo2JVg");
	var mask_7_graphics_40 = new cjs.Graphics().p("AmsC1IJEpsIEVEKIpHJlg");
	var mask_7_graphics_41 = new cjs.Graphics().p("Am0C+IJUp+IEVEKIpYJ3g");
	var mask_7_graphics_42 = new cjs.Graphics().p("Am8DHIJkqQIEVELIpoKIg");
	var mask_7_graphics_43 = new cjs.Graphics().p("AnEDQIJ0qhIEVEKIp4KZg");
	var mask_7_graphics_44 = new cjs.Graphics().p("AnMDZIKEqzIEVELIqJKqg");
	var mask_7_graphics_45 = new cjs.Graphics().p("AnVDhIKVrEIEWELIqZK8g");
	var mask_7_graphics_46 = new cjs.Graphics().p("AndDqIKlrVIEWEKIqqLNg");
	var mask_7_graphics_47 = new cjs.Graphics().p("AnlDzIK2rnIEVELIq6Leg");
	var mask_7_graphics_48 = new cjs.Graphics().p("AntD8ILGr5IEVELIrKLvg");
	var mask_7_graphics_49 = new cjs.Graphics().p("An1EFILWsKIEWELIrcMAg");
	var mask_7_graphics_50 = new cjs.Graphics().p("An+EOILnscIEWELIrrMSg");
	var mask_7_graphics_51 = new cjs.Graphics().p("AoGEWIL2ssIEXEKIr8Mkg");
	var mask_7_graphics_52 = new cjs.Graphics().p("AoOEfIMGs+IEXELIsMM0g");
	var mask_7_graphics_53 = new cjs.Graphics().p("AoWEoIMXtQIEWELIscNGg");
	var mask_7_graphics_54 = new cjs.Graphics().p("AoeExIMnthIEWEKIssNXg");
	var mask_7_graphics_55 = new cjs.Graphics().p("AonE6IM4tzIEXELIs9Nog");
	var mask_7_graphics_56 = new cjs.Graphics().p("AovFCINIuEIEXELItNN6g");
	var mask_7_graphics_57 = new cjs.Graphics().p("Ao3FMINYuXIEXELIteOLg");
	var mask_7_graphics_58 = new cjs.Graphics().p("Ao/FUINounIEXELItuOcg");
	var mask_7_graphics_59 = new cjs.Graphics().p("ApHFdIN4u5IEXELIt+Oug");
	var mask_7_graphics_60 = new cjs.Graphics().p("ApQFmIOKvLIEXEMIuPO/g");
	var mask_7_graphics_61 = new cjs.Graphics().p("ApYFvIOZvcIEYELIufPQg");
	var mask_7_graphics_62 = new cjs.Graphics().p("ApgF4IOpvuIEYELIuwPig");
	var mask_7_graphics_63 = new cjs.Graphics().p("ApoGBIO5v/IEYELIu/Pyg");
	var mask_7_graphics_64 = new cjs.Graphics().p("ApwGJIPKwQIEYELIvRQEg");
	var mask_7_graphics_65 = new cjs.Graphics().p("Ap5GSIPbwiIEXEMIvgQVg");
	var mask_7_graphics_66 = new cjs.Graphics().p("AqBGbIPrwzIEYELIvxQng");
	var mask_7_graphics_67 = new cjs.Graphics().p("AqJGkIP7xFIEYELIwCQ4g");
	var mask_7_graphics_68 = new cjs.Graphics().p("AqRGtIQLxXIEYEMIwRRJg");
	var mask_7_graphics_69 = new cjs.Graphics().p("AqZG2IQbxoIEYELIwiRag");
	var mask_7_graphics_70 = new cjs.Graphics().p("AqhG+IQrx5IEYEMIwyRrg");
	var mask_7_graphics_71 = new cjs.Graphics().p("AqqHHIQ8yLIEZEMIxDR9g");
	var mask_7_graphics_72 = new cjs.Graphics().p("AqyHQIRMycIEZELIxUSOg");
	var mask_7_graphics_73 = new cjs.Graphics().p("Aq6HZIRcyuIEZEMIxjSfg");
	var mask_7_graphics_74 = new cjs.Graphics().p("ArCHiIRszAIEZEMIx0Sxg");
	var mask_7_graphics_75 = new cjs.Graphics().p("ArLHrIR+zRIEZEMIyFTBg");
	var mask_7_graphics_76 = new cjs.Graphics().p("ArTHzISOzhIEZEMIyWTSg");
	var mask_7_graphics_77 = new cjs.Graphics().p("ArcH7ISgzyIEYEMIylTjg");
	var mask_7_graphics_78 = new cjs.Graphics().p("ArkIEISw0DIEZEMIy3Tzg");
	var mask_7_graphics_79 = new cjs.Graphics().p("ArsINITA0VIEZEMIzHUFg");
	var mask_7_graphics_80 = new cjs.Graphics().p("Ar1IVITS0lIEZEMIzZUVg");
	var mask_7_graphics_81 = new cjs.Graphics().p("Ar9IdITi01IEZELIzpUng");
	var mask_7_graphics_82 = new cjs.Graphics().p("AsFInITy1IIEaEMIz6U3g");
	var mask_7_graphics_83 = new cjs.Graphics().p("AsOIvIUE1YIEZEMI0KVHg");
	var mask_7_graphics_84 = new cjs.Graphics().p("AsWI3IUU1pIEZENI0bVYg");
	var mask_7_graphics_85 = new cjs.Graphics().p("AsfJAIUm16IEZEMI0sVpg");
	var mask_7_graphics_86 = new cjs.Graphics().p("AsnJJIU22LIEZEMI08V5g");
	var mask_7_graphics_87 = new cjs.Graphics().p("AsvJSIVH2dIEYENI1NWKg");
	var mask_7_graphics_88 = new cjs.Graphics().p("As4JaIVY2tIEZENI1eWag");
	var mask_7_graphics_89 = new cjs.Graphics().p("AtAJiIVo2+IEZENI1uWsg");
	var mask_7_graphics_90 = new cjs.Graphics().p("AtJJrIV53PIEZENI1+W8g");
	var mask_7_graphics_91 = new cjs.Graphics().p("AtRJzIWK3fIEZEMI2QXNg");
	var mask_7_graphics_92 = new cjs.Graphics().p("AtZJ8IWa3xIEZENI2gXeg");
	var mask_7_graphics_93 = new cjs.Graphics().p("AtiKFIWs4CIEZENI2xXug");
	var mask_7_graphics_94 = new cjs.Graphics().p("AtqKOIW84TIEZENI3CX+g");
	var mask_7_graphics_95 = new cjs.Graphics().p("AtzKWIXN4kIEaENI3TYQg");
	var mask_7_graphics_96 = new cjs.Graphics().p("At7KeIXe40IEZENI3kYgg");
	var mask_7_graphics_97 = new cjs.Graphics().p("AuEKnIXv5GIEZEOI30Yxg");
	var mask_7_graphics_98 = new cjs.Graphics().p("AuMKwIYA5XIEZENI4FZCg");
	var mask_7_graphics_99 = new cjs.Graphics().p("AuUK4IYQ5oIEZEOI4VZSg");
	var mask_7_graphics_100 = new cjs.Graphics().p("AudLBIYi55IEYENI4mZkg");
	var mask_7_graphics_101 = new cjs.Graphics().p("AulLJIYy6JIEZENI43Z0g");
	var mask_7_graphics_102 = new cjs.Graphics().p("AuuLSIZE6bIEZEOI5IaFg");
	var mask_7_graphics_103 = new cjs.Graphics().p("Au2LaIZU6rIEZENI5ZaWg");
	var mask_7_graphics_104 = new cjs.Graphics().p("Au+LjIZk69IEZEOI5pamg");
	var mask_7_graphics_105 = new cjs.Graphics().p("AvGLrIZx7NIEcEKI54a7g");
	var mask_7_graphics_106 = new cjs.Graphics().p("AvOLzIZ97dIEgEGI6JbPg");
	var mask_7_graphics_107 = new cjs.Graphics().p("AvWL7IaL7uIEiEEI6Zbig");
	var mask_7_graphics_108 = new cjs.Graphics().p("AvfMCIaZ79IElEAI6ob3g");
	var mask_7_graphics_109 = new cjs.Graphics().p("AvnMKIal8NIEqD8I66cLg");
	var mask_7_graphics_110 = new cjs.Graphics().p("AvvMTIay8eIEtD4I7Kcfg");
	var mask_7_graphics_111 = new cjs.Graphics().p("Av3MaIa/8uIEwD0I7ac1g");
	var mask_7_graphics_112 = new cjs.Graphics().p("Av/MjIbM8/IEzDwI7qdJg");
	var mask_7_graphics_113 = new cjs.Graphics().p("AwHMqIbZ9OIE2DsI75deg");
	var mask_7_graphics_114 = new cjs.Graphics().p("AwPMyIbl9fIE6DqI8Kdxg");
	var mask_7_graphics_115 = new cjs.Graphics().p("AwXM6Iby9vIE9DmI8ZeFg");
	var mask_7_graphics_116 = new cjs.Graphics().p("AwfNCIb/9/IFADiI8peZg");
	var mask_7_graphics_117 = new cjs.Graphics().p("AwnNKIcM+QIFDDfI85etg");
	var mask_7_graphics_118 = new cjs.Graphics().p("AwwNRIcZ+fIFIDbI9LfCg");
	var mask_7_graphics_119 = new cjs.Graphics().p("Aw4NaIcn+wIFJDXI9ZfWg");
	var mask_7_graphics_120 = new cjs.Graphics().p("AxANiIcz/AIFODUI9qfqg");
	var mask_7_graphics_121 = new cjs.Graphics().p("AxINqIdA/RIFRDQI96f/g");
	var mask_7_graphics_122 = new cjs.Graphics().p("AxQNyIdN/hIFUDNMgeKAgSg");
	var mask_7_graphics_123 = new cjs.Graphics().p("AxYN5Ida/xIFXDJMgeaAgog");
	var mask_7_graphics_124 = new cjs.Graphics().p("AxgOCMAdnggCIFaDFMgeqAg8g");
	var mask_7_graphics_125 = new cjs.Graphics().p("AxoOKMAdzggSIFeDCMge6AhPg");
	var mask_7_graphics_126 = new cjs.Graphics().p("AxwORMAeAgghIFhC+MgfKAhjg");
	var mask_7_graphics_127 = new cjs.Graphics().p("Ax4OZMAeNggyIFkC7MgfaAh4g");
	var mask_7_graphics_128 = new cjs.Graphics().p("AyAOhMAeaghCIFnC3MgfqAiMg");
	var mask_7_graphics_129 = new cjs.Graphics().p("ArtZ8MAenghTIFrCzMgf6Aihg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_7_graphics_9,x:57.6,y:190.6}).wait(1).to({graphics:mask_7_graphics_10,x:98.5,y:363.2}).wait(1).to({graphics:mask_7_graphics_11,x:99.3,y:362.3}).wait(1).to({graphics:mask_7_graphics_12,x:100.1,y:361.5}).wait(1).to({graphics:mask_7_graphics_13,x:101,y:360.6}).wait(1).to({graphics:mask_7_graphics_14,x:101.8,y:359.8}).wait(1).to({graphics:mask_7_graphics_15,x:102.7,y:358.9}).wait(1).to({graphics:mask_7_graphics_16,x:103.5,y:358.1}).wait(1).to({graphics:mask_7_graphics_17,x:104.3,y:357.3}).wait(1).to({graphics:mask_7_graphics_18,x:105.2,y:356.4}).wait(1).to({graphics:mask_7_graphics_19,x:106,y:355.6}).wait(1).to({graphics:mask_7_graphics_20,x:106.9,y:354.7}).wait(1).to({graphics:mask_7_graphics_21,x:107.7,y:353.8}).wait(1).to({graphics:mask_7_graphics_22,x:108.5,y:353}).wait(1).to({graphics:mask_7_graphics_23,x:109.4,y:352.2}).wait(1).to({graphics:mask_7_graphics_24,x:110.2,y:351.3}).wait(1).to({graphics:mask_7_graphics_25,x:111,y:350.5}).wait(1).to({graphics:mask_7_graphics_26,x:111.9,y:349.6}).wait(1).to({graphics:mask_7_graphics_27,x:112.7,y:348.8}).wait(1).to({graphics:mask_7_graphics_28,x:113.6,y:347.9}).wait(1).to({graphics:mask_7_graphics_29,x:114.4,y:347.1}).wait(1).to({graphics:mask_7_graphics_30,x:115.2,y:346.2}).wait(1).to({graphics:mask_7_graphics_31,x:116.1,y:345.4}).wait(1).to({graphics:mask_7_graphics_32,x:116.9,y:344.5}).wait(1).to({graphics:mask_7_graphics_33,x:117.7,y:343.7}).wait(1).to({graphics:mask_7_graphics_34,x:118.6,y:342.8}).wait(1).to({graphics:mask_7_graphics_35,x:119.4,y:342}).wait(1).to({graphics:mask_7_graphics_36,x:120.3,y:341.1}).wait(1).to({graphics:mask_7_graphics_37,x:121.1,y:340.3}).wait(1).to({graphics:mask_7_graphics_38,x:121.9,y:339.4}).wait(1).to({graphics:mask_7_graphics_39,x:122.8,y:338.6}).wait(1).to({graphics:mask_7_graphics_40,x:123.6,y:337.7}).wait(1).to({graphics:mask_7_graphics_41,x:124.4,y:336.9}).wait(1).to({graphics:mask_7_graphics_42,x:125.3,y:336}).wait(1).to({graphics:mask_7_graphics_43,x:126.1,y:335.2}).wait(1).to({graphics:mask_7_graphics_44,x:127,y:334.3}).wait(1).to({graphics:mask_7_graphics_45,x:127.8,y:333.5}).wait(1).to({graphics:mask_7_graphics_46,x:128.6,y:332.6}).wait(1).to({graphics:mask_7_graphics_47,x:129.5,y:331.8}).wait(1).to({graphics:mask_7_graphics_48,x:130.3,y:331}).wait(1).to({graphics:mask_7_graphics_49,x:131.2,y:330.1}).wait(1).to({graphics:mask_7_graphics_50,x:132,y:329.3}).wait(1).to({graphics:mask_7_graphics_51,x:132.8,y:328.4}).wait(1).to({graphics:mask_7_graphics_52,x:133.7,y:327.5}).wait(1).to({graphics:mask_7_graphics_53,x:134.5,y:326.7}).wait(1).to({graphics:mask_7_graphics_54,x:135.3,y:325.9}).wait(1).to({graphics:mask_7_graphics_55,x:136.2,y:325}).wait(1).to({graphics:mask_7_graphics_56,x:137,y:324.2}).wait(1).to({graphics:mask_7_graphics_57,x:137.9,y:323.3}).wait(1).to({graphics:mask_7_graphics_58,x:138.7,y:322.5}).wait(1).to({graphics:mask_7_graphics_59,x:139.5,y:321.6}).wait(1).to({graphics:mask_7_graphics_60,x:140.4,y:320.8}).wait(1).to({graphics:mask_7_graphics_61,x:141.2,y:319.9}).wait(1).to({graphics:mask_7_graphics_62,x:142,y:319.1}).wait(1).to({graphics:mask_7_graphics_63,x:142.9,y:318.2}).wait(1).to({graphics:mask_7_graphics_64,x:143.7,y:317.4}).wait(1).to({graphics:mask_7_graphics_65,x:144.6,y:316.5}).wait(1).to({graphics:mask_7_graphics_66,x:145.4,y:315.7}).wait(1).to({graphics:mask_7_graphics_67,x:146.2,y:314.8}).wait(1).to({graphics:mask_7_graphics_68,x:147.1,y:314}).wait(1).to({graphics:mask_7_graphics_69,x:147.9,y:313.1}).wait(1).to({graphics:mask_7_graphics_70,x:148.7,y:312.3}).wait(1).to({graphics:mask_7_graphics_71,x:149.6,y:311.4}).wait(1).to({graphics:mask_7_graphics_72,x:150.4,y:310.6}).wait(1).to({graphics:mask_7_graphics_73,x:151.3,y:309.7}).wait(1).to({graphics:mask_7_graphics_74,x:152.1,y:308.9}).wait(1).to({graphics:mask_7_graphics_75,x:152.9,y:308.1}).wait(1).to({graphics:mask_7_graphics_76,x:153.8,y:307.3}).wait(1).to({graphics:mask_7_graphics_77,x:154.7,y:306.4}).wait(1).to({graphics:mask_7_graphics_78,x:155.5,y:305.6}).wait(1).to({graphics:mask_7_graphics_79,x:156.4,y:304.8}).wait(1).to({graphics:mask_7_graphics_80,x:157.2,y:304}).wait(1).to({graphics:mask_7_graphics_81,x:158.1,y:303.2}).wait(1).to({graphics:mask_7_graphics_82,x:159,y:302.3}).wait(1).to({graphics:mask_7_graphics_83,x:159.8,y:301.5}).wait(1).to({graphics:mask_7_graphics_84,x:160.7,y:300.7}).wait(1).to({graphics:mask_7_graphics_85,x:161.5,y:299.9}).wait(1).to({graphics:mask_7_graphics_86,x:162.4,y:299}).wait(1).to({graphics:mask_7_graphics_87,x:163.3,y:298.2}).wait(1).to({graphics:mask_7_graphics_88,x:164.1,y:297.4}).wait(1).to({graphics:mask_7_graphics_89,x:165,y:296.6}).wait(1).to({graphics:mask_7_graphics_90,x:165.8,y:295.8}).wait(1).to({graphics:mask_7_graphics_91,x:166.7,y:294.9}).wait(1).to({graphics:mask_7_graphics_92,x:167.5,y:294.1}).wait(1).to({graphics:mask_7_graphics_93,x:168.4,y:293.3}).wait(1).to({graphics:mask_7_graphics_94,x:169.2,y:292.5}).wait(1).to({graphics:mask_7_graphics_95,x:170.1,y:291.7}).wait(1).to({graphics:mask_7_graphics_96,x:171,y:290.8}).wait(1).to({graphics:mask_7_graphics_97,x:171.8,y:290}).wait(1).to({graphics:mask_7_graphics_98,x:172.7,y:289.2}).wait(1).to({graphics:mask_7_graphics_99,x:173.5,y:288.4}).wait(1).to({graphics:mask_7_graphics_100,x:174.4,y:287.6}).wait(1).to({graphics:mask_7_graphics_101,x:175.3,y:286.7}).wait(1).to({graphics:mask_7_graphics_102,x:176.1,y:285.9}).wait(1).to({graphics:mask_7_graphics_103,x:177,y:285.1}).wait(1).to({graphics:mask_7_graphics_104,x:177.8,y:284.3}).wait(1).to({graphics:mask_7_graphics_105,x:178.7,y:283.4}).wait(1).to({graphics:mask_7_graphics_106,x:179.5,y:282.6}).wait(1).to({graphics:mask_7_graphics_107,x:180.3,y:281.8}).wait(1).to({graphics:mask_7_graphics_108,x:181.2,y:281}).wait(1).to({graphics:mask_7_graphics_109,x:182,y:280.2}).wait(1).to({graphics:mask_7_graphics_110,x:182.8,y:279.4}).wait(1).to({graphics:mask_7_graphics_111,x:183.6,y:278.6}).wait(1).to({graphics:mask_7_graphics_112,x:184.5,y:277.8}).wait(1).to({graphics:mask_7_graphics_113,x:185.3,y:277}).wait(1).to({graphics:mask_7_graphics_114,x:186.1,y:276.1}).wait(1).to({graphics:mask_7_graphics_115,x:186.9,y:275.3}).wait(1).to({graphics:mask_7_graphics_116,x:187.8,y:274.5}).wait(1).to({graphics:mask_7_graphics_117,x:188.6,y:273.7}).wait(1).to({graphics:mask_7_graphics_118,x:189.5,y:272.9}).wait(1).to({graphics:mask_7_graphics_119,x:190.3,y:272.1}).wait(1).to({graphics:mask_7_graphics_120,x:191.1,y:271.3}).wait(1).to({graphics:mask_7_graphics_121,x:191.9,y:270.5}).wait(1).to({graphics:mask_7_graphics_122,x:192.8,y:269.6}).wait(1).to({graphics:mask_7_graphics_123,x:193.6,y:268.8}).wait(1).to({graphics:mask_7_graphics_124,x:194.4,y:268}).wait(1).to({graphics:mask_7_graphics_125,x:195.2,y:267.2}).wait(1).to({graphics:mask_7_graphics_126,x:196.1,y:266.4}).wait(1).to({graphics:mask_7_graphics_127,x:196.9,y:265.6}).wait(1).to({graphics:mask_7_graphics_128,x:197.7,y:264.8}).wait(1).to({graphics:mask_7_graphics_129,x:157.3,y:191.7}).wait(772));

	// Layer 2
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(20,1,1).p("Au7SmQBfiOJBnWQJAnWGoo4QGoo5lHig");
	this.shape_9.setTransform(194.6,239);
	this.shape_9._off = true;

	var maskedShapeInstanceList = [this.shape_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(9).to({_off:false},0).wait(892));

	// Letter
	this.instance_5 = new lib.k("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(275,275);
	this.instance_5.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(901));

	// Background
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_10.setTransform(275,275,3.373,2.543);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_11.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10}]}).wait(901));

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