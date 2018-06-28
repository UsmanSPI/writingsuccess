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
	this.shape.graphics.f("#FFFFFF").s().p("A3sLtIAXhNQCnkhMFnLICEj6QBHiaAIh2Qh7AAihBhIkcDQQloEpgnAAQiPAAAAiOQAAgaAshDQCSjIFUjZIE2imQCihEBsAAQCEAABNBEQBOBIAACFQABB+g7CVQEAiVG1l1QA+gmAjAAQA4AAAsAvQAsAsAAA1QAABPiHCBIk9D2QkQC5l/DVIgsAWQitFMAABnQAAApApgBQDLABDJhKQCyhAC+h8QDuiaGUl8IBEhEIEZkHQBJgwAvABQBggBAABzQAABMk+FcQnMHAkjCwQjkCMjcBNQjvBUjfAAQiWAAhShJQhUhJAAiWQAAhyAjhsIgRAMQk9DhheBvIhSBwQg0BAg+AAQiVAAAAiSg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151.7,-89.5,303.5,179);


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
	this.instance.setTransform(-27,21.4,1,1,-135);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-116,x:33.2,y:-27},74).wait(1));

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
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AjtEeQETj+DIk8");
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
(lib.WS_Cursive_x = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_519 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(519).call(this.frame_519).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(144.9,259.1,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[145.1,259.3,192.4,216.6,212,208.2,231.8,199.8,247.2,202.6,254.9,203.9,255,212.8,255,221.7,247.4,238.2,232.1,271.2,214.5,318.5,196.9,365.9,267.8,343.5,338.8,321.2,413.2,230]}},265).wait(15).to({x:340.7,y:203.1},0).to({guide:{path:[340.7,203.1,305.9,238.1,264.1,258.6,221.5,279.7,182.8,306.9,155.7,326.1,138.5,349.5]}},150).wait(15).to({startPosition:0},0).to({guide:{path:[138.3,349.6,159.7,412,222.2,424.9,284.4,437.6,334.9,399.5,381.9,364.3,421,320.3,460.4,275.8,493.8,226.9,512.8,199.1,547.3,217,563.2,225.3,579.3,215.8,618.9,192.7,627.5,149.1]}},65).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(415.3,229.8,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},265).wait(15).to({_off:false,x:137.7,y:348.9},0).to({_off:true},150).wait(81));

	// Layer 26
	this.instance_1 = new lib.ar2("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(307.7,263.8,1,1,0,98.8,-81.2,0.8,-0.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(289).to({_off:false},0).wait(231));

	// Layer 14 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_289 = new cjs.Graphics().p("AUtJnICJhvIGRHzIiJBug");
	var mask_graphics_290 = new cjs.Graphics().p("AkTi8ICXh5IGQHyIiXB5g");
	var mask_graphics_291 = new cjs.Graphics().p("AkZi3ICjiDIGQHyIijCDg");
	var mask_graphics_292 = new cjs.Graphics().p("AkgiyICxiOIGQHzIixCOg");
	var mask_graphics_293 = new cjs.Graphics().p("AkmisIC9iZIGQHyIi9CZg");
	var mask_graphics_294 = new cjs.Graphics().p("AktinIDLijIGQHyIjLCjg");
	var mask_graphics_295 = new cjs.Graphics().p("AkziiIDXitIGQHyIjXCtg");
	var mask_graphics_296 = new cjs.Graphics().p("Ak6idIDli3IGQHxIjlC4g");
	var mask_graphics_297 = new cjs.Graphics().p("AlBiXIDzjDIGQHyIjzDDg");
	var mask_graphics_298 = new cjs.Graphics().p("AlHiSID/jNIGQHyIj/DNg");
	var mask_graphics_299 = new cjs.Graphics().p("AlOiNIENjXIGQHyIkNDXg");
	var mask_graphics_300 = new cjs.Graphics().p("AlUiIIEZjiIGQHzIkZDig");
	var mask_graphics_301 = new cjs.Graphics().p("AlbiCIEnjtIGQHyIknDtg");
	var mask_graphics_302 = new cjs.Graphics().p("Alhh9IEzj3IGQHyIkzD3g");
	var mask_graphics_303 = new cjs.Graphics().p("Aloh4IFBkCIGQHzIlBEBg");
	var mask_graphics_304 = new cjs.Graphics().p("AlvhyIFPkNIGQHyIlPENg");
	var mask_graphics_305 = new cjs.Graphics().p("Al1htIFbkXIGQHyIlbEXg");
	var mask_graphics_306 = new cjs.Graphics().p("Al8hoIFpkhIGQHyIlpEhg");
	var mask_graphics_307 = new cjs.Graphics().p("AmChiIF1ktIGQHyIl1Etg");
	var mask_graphics_308 = new cjs.Graphics().p("AmJhdIGDk3IGQHyImDE3g");
	var mask_graphics_309 = new cjs.Graphics().p("AmPhYIGPlBIGQHyImPFBg");
	var mask_graphics_310 = new cjs.Graphics().p("AmWhSIGclMIGRHxImcFMg");
	var mask_graphics_311 = new cjs.Graphics().p("AmdhNIGqlXIGRHyImqFXg");
	var mask_graphics_312 = new cjs.Graphics().p("AmjhIIG2lhIGRHyIm2Fhg");
	var mask_graphics_313 = new cjs.Graphics().p("AmqhDIHElrIGRHyInEFrg");
	var mask_graphics_314 = new cjs.Graphics().p("Amwg9IHQl3IGRHzInQF1g");
	var mask_graphics_315 = new cjs.Graphics().p("Am3g4IHemBIGRHyIneGBg");
	var mask_graphics_316 = new cjs.Graphics().p("Am9gzIHrmLIGQHyInrGLg");
	var mask_graphics_317 = new cjs.Graphics().p("AnEgtIH4mXIGRHzIn4GWg");
	var mask_graphics_318 = new cjs.Graphics().p("AnLgoIIGmhIGRHyIoGGhg");
	var mask_graphics_319 = new cjs.Graphics().p("AnRgjIISmrIGRHyIoSGrg");
	var mask_graphics_320 = new cjs.Graphics().p("AnYgeIIgm1IGRHyIogG1g");
	var mask_graphics_321 = new cjs.Graphics().p("AnegZIIsm/IGRHxIosHBg");
	var mask_graphics_322 = new cjs.Graphics().p("AnlgTII6nLIGRHyIo6HLg");
	var mask_graphics_323 = new cjs.Graphics().p("AnrgOIJGnVIGRHyIpHHVg");
	var mask_graphics_324 = new cjs.Graphics().p("AnygJIJUnfIGRHxIpUHhg");
	var mask_graphics_325 = new cjs.Graphics().p("An5gDIJinrIGRHyIpiHrg");
	var mask_graphics_326 = new cjs.Graphics().p("An/ABIJun0IGRHzIpuH0g");
	var mask_graphics_327 = new cjs.Graphics().p("AoGAGIJ8n+IGRHzIp8H+g");
	var mask_graphics_328 = new cjs.Graphics().p("AoMALIKIoJIGRH0IqIIJg");
	var mask_graphics_329 = new cjs.Graphics().p("AoTARIKWoUIGRHzIqWIUg");
	var mask_graphics_330 = new cjs.Graphics().p("AoaAWIKjoeIGSHzIqjIeg");
	var mask_graphics_331 = new cjs.Graphics().p("AogAbIKwooIGRHzIqwIpg");
	var mask_graphics_332 = new cjs.Graphics().p("AonAhIK+o0IGRHzIq+I0g");
	var mask_graphics_333 = new cjs.Graphics().p("AotAmILKo+IGRHzIrKI+g");
	var mask_graphics_334 = new cjs.Graphics().p("Ao0ArILYpIIGRHzIrYJIg");
	var mask_graphics_335 = new cjs.Graphics().p("Ao6AwILkpSIGRHyIrkJTg");
	var mask_graphics_336 = new cjs.Graphics().p("ApBA2ILypeIGRHzIryJeg");
	var mask_graphics_337 = new cjs.Graphics().p("ApHA7IL+poIGSHzIsAJog");
	var mask_graphics_338 = new cjs.Graphics().p("ApOBBIMMpzIGRHyIsMJzg");
	var mask_graphics_339 = new cjs.Graphics().p("ApVBGIMap+IGRHzIsaJ+g");
	var mask_graphics_340 = new cjs.Graphics().p("ApbBLIMmqIIGRHzIsmKIg");
	var mask_graphics_341 = new cjs.Graphics().p("ApiBQIM0qSIGRHzIs0KSg");
	var mask_graphics_342 = new cjs.Graphics().p("ApoBVINAqcIGRHyItAKdg");
	var mask_graphics_343 = new cjs.Graphics().p("ApvBbINOqoIGRHzItOKog");
	var mask_graphics_344 = new cjs.Graphics().p("Ap1BgINaqyIGSHzItcKyg");
	var mask_graphics_345 = new cjs.Graphics().p("Ap8BlINoq8IGRHzItoK8g");
	var mask_graphics_346 = new cjs.Graphics().p("AqDBrIN2rIIGRHzIt2LIg");
	var mask_graphics_347 = new cjs.Graphics().p("AqJBwIOCrSIGRHzIuCLSg");
	var mask_graphics_348 = new cjs.Graphics().p("AqQB1IOQrcIGRHzIuQLcg");
	var mask_graphics_349 = new cjs.Graphics().p("AqWB7IOcrnIGRHyIucLng");
	var mask_graphics_350 = new cjs.Graphics().p("AqdCAIOqryIGRHzIuqLyg");
	var mask_graphics_351 = new cjs.Graphics().p("AqkCFIO3r8IGSHzIu3L8g");
	var mask_graphics_352 = new cjs.Graphics().p("AqqCKIPEsHIGRHzIvEMIg");
	var mask_graphics_353 = new cjs.Graphics().p("AqxCQIPSsSIGRHzIvSMSg");
	var mask_graphics_354 = new cjs.Graphics().p("Aq3CVIPescIGRHzIveMcg");
	var mask_graphics_355 = new cjs.Graphics().p("Aq+CaIPssmIGRHzIvsMmg");
	var mask_graphics_356 = new cjs.Graphics().p("ArECgIP4sxIGRHyIv4Myg");
	var mask_graphics_357 = new cjs.Graphics().p("ArLClIQGs8IGRHzIwGM8g");
	var mask_graphics_358 = new cjs.Graphics().p("ArRCqIQTtGIGQHzIwTNGg");
	var mask_graphics_359 = new cjs.Graphics().p("ArYCvIQgtQIGRHzIwgNQg");
	var mask_graphics_360 = new cjs.Graphics().p("ArfC0IQutaIGRHyIwuNcg");
	var mask_graphics_361 = new cjs.Graphics().p("ArlC6IQ6tmIGRHzIw6Nmg");
	var mask_graphics_362 = new cjs.Graphics().p("ArsC/IRItwIGRHzIxINwg");
	var mask_graphics_363 = new cjs.Graphics().p("AryDEIRUt7IGRHzIxUN8g");
	var mask_graphics_364 = new cjs.Graphics().p("Ar5DKIRiuGIGRHzIxiOGg");
	var mask_graphics_365 = new cjs.Graphics().p("Ar/DPIRvuQIGQHzIxvOQg");
	var mask_graphics_366 = new cjs.Graphics().p("AsGDVIR8ucIGRH0Ix8Oag");
	var mask_graphics_367 = new cjs.Graphics().p("AsNDaISKumIGRHzIyKOmg");
	var mask_graphics_368 = new cjs.Graphics().p("AsTDfISWuwIGRHzIyWOwg");
	var mask_graphics_369 = new cjs.Graphics().p("AsaDkISku6IGRHzIykO6g");
	var mask_graphics_370 = new cjs.Graphics().p("AsgDqISwvGIGSH0IyyPEg");
	var mask_graphics_371 = new cjs.Graphics().p("AsnDvIS+vQIGRHzIy+PQg");
	var mask_graphics_372 = new cjs.Graphics().p("AsuD0ITMvaIGQHzIzKPag");
	var mask_graphics_373 = new cjs.Graphics().p("As0D5ITYvkIGRHzIzYPkg");
	var mask_graphics_374 = new cjs.Graphics().p("As7D+ITmvvIGRHzIzmPvg");
	var mask_graphics_375 = new cjs.Graphics().p("AtBEEITyv6IGRHzIzyP6g");
	var mask_graphics_376 = new cjs.Graphics().p("AtIEJIUAwEIGRHzI0AQEg");
	var mask_graphics_377 = new cjs.Graphics().p("AtPEPIUNwQIGSH0I0NQOg");
	var mask_graphics_378 = new cjs.Graphics().p("AtVEUIUawaIGRHzI0aQag");
	var mask_graphics_379 = new cjs.Graphics().p("AtbEZIUnwkIGQHzI0nQkg");
	var mask_graphics_380 = new cjs.Graphics().p("AtiEeIU0wuIGRHzI00Qug");
	var mask_graphics_381 = new cjs.Graphics().p("AtpEkIVCw6IGRHzI1CQ6g");
	var mask_graphics_382 = new cjs.Graphics().p("AtvEpIVOxEIGRHzI1OREg");
	var mask_graphics_383 = new cjs.Graphics().p("At2EuIVcxOIGRHzI1cROg");
	var mask_graphics_384 = new cjs.Graphics().p("At9EzIVpxZIGSH0I1pRZg");
	var mask_graphics_385 = new cjs.Graphics().p("AuDE5IV2xkIGRHzI12Rkg");
	var mask_graphics_386 = new cjs.Graphics().p("AuJE+IWCxuIGRHzI2DRug");
	var mask_graphics_387 = new cjs.Graphics().p("AuQFDIWQx4IGRHzI2QR4g");
	var mask_graphics_388 = new cjs.Graphics().p("AuXFJIWeyEIGRH0I2eSCg");
	var mask_graphics_389 = new cjs.Graphics().p("AudFOIWqyOIGRHzI2qSOg");
	var mask_graphics_390 = new cjs.Graphics().p("AukFTIW4yYIGRHzI24SYg");
	var mask_graphics_391 = new cjs.Graphics().p("AuqFYIXFyjIGQH0I3FSjg");
	var mask_graphics_392 = new cjs.Graphics().p("AuxFeIXSyuIGRHzI3SSug");
	var mask_graphics_393 = new cjs.Graphics().p("Au4FjIXfy4IGSHzI3fS4g");
	var mask_graphics_394 = new cjs.Graphics().p("Au+FoIXszCIGRHzI3sTCg");
	var mask_graphics_395 = new cjs.Graphics().p("AvFFtIX6zNIGRH0I36TNg");
	var mask_graphics_396 = new cjs.Graphics().p("AvLFzIYGzYIGRHzI4GTYg");
	var mask_graphics_397 = new cjs.Graphics().p("AvSF4IYUziIGRHzI4UTig");
	var mask_graphics_398 = new cjs.Graphics().p("AvZF+IYiztIGQHzI4gTsg");
	var mask_graphics_399 = new cjs.Graphics().p("AvfGDIYuz4IGRHzI4uT4g");
	var mask_graphics_400 = new cjs.Graphics().p("AvmGIIY80CIGRHzI48UCg");
	var mask_graphics_401 = new cjs.Graphics().p("AvsGNIZI0MIGRHzI5IUMg");
	var mask_graphics_402 = new cjs.Graphics().p("AvzGSIZW0XIGRH0I5WUXg");
	var mask_graphics_403 = new cjs.Graphics().p("Av5GYIZi0iIGRHzI5iUig");
	var mask_graphics_404 = new cjs.Graphics().p("AwAGdIZw0sIGRHzI5wUsg");
	var mask_graphics_405 = new cjs.Graphics().p("AwHGjIZ+04IGQH0I58U2g");
	var mask_graphics_406 = new cjs.Graphics().p("AwNGoIaK1CIGRHzI6KVCg");
	var mask_graphics_407 = new cjs.Graphics().p("AwUGtIaY1MIGRHzI6YVMg");
	var mask_graphics_408 = new cjs.Graphics().p("AwaGyIak1WIGRHzI6kVWg");
	var mask_graphics_409 = new cjs.Graphics().p("AwhG4Iay1hIGRHyI6yVhg");
	var mask_graphics_410 = new cjs.Graphics().p("AwnG9Ia+1sIGRHzI6+Vsg");
	var mask_graphics_411 = new cjs.Graphics().p("AwuHCIbM12IGRHzI7MV2g");
	var mask_graphics_412 = new cjs.Graphics().p("Aw0HHIbZ2AIGQHyI7ZWCg");
	var mask_graphics_413 = new cjs.Graphics().p("Aw7HNIbm2MIGRHzI7mWMg");
	var mask_graphics_414 = new cjs.Graphics().p("AxCHSIb02WIGRHzI70WWg");
	var mask_graphics_415 = new cjs.Graphics().p("AxIHXIcA2gIGRHzI8AWgg");
	var mask_graphics_416 = new cjs.Graphics().p("AxPHdIcO2sIGRH0I8OWqg");
	var mask_graphics_417 = new cjs.Graphics().p("AxVHiIca22IGSHzI8cW2g");
	var mask_graphics_418 = new cjs.Graphics().p("AxcHnIco3AIGRHzI8oXAg");
	var mask_graphics_419 = new cjs.Graphics().p("AxjHsIc13KIGRHzI80XKg");
	var mask_graphics_420 = new cjs.Graphics().p("AxpHyIdC3WIGRHzI9CXWg");
	var mask_graphics_421 = new cjs.Graphics().p("AxwH3IdQ3gIGRHzI9QXgg");
	var mask_graphics_422 = new cjs.Graphics().p("Ax2H8Idc3qIGRHzI9cXqg");
	var mask_graphics_423 = new cjs.Graphics().p("Ax9IBIdq30IGRHyI9qX2g");
	var mask_graphics_424 = new cjs.Graphics().p("AyEIHId44AIGQHzI92YAg");
	var mask_graphics_425 = new cjs.Graphics().p("AyKIMIeE4KIGRHzI+EYKg");
	var mask_graphics_426 = new cjs.Graphics().p("AyQISIeQ4VIGSHyI+RYVg");
	var mask_graphics_427 = new cjs.Graphics().p("AyXIXIee4gIGRHzI+eYgg");
	var mask_graphics_428 = new cjs.Graphics().p("AyeIcIes4qIGRHzI+sYqg");
	var mask_graphics_429 = new cjs.Graphics().p("AykIhIe440IGRHzI+4Y0g");
	var mask_graphics_430 = new cjs.Graphics().p("AyrImIfG4/IGRH0I/GY/g");
	var mask_graphics_431 = new cjs.Graphics().p("AyyIsIfU5KIGQHzI/SZKg");
	var mask_graphics_432 = new cjs.Graphics().p("Ay4IxIfg5UIGRHzI/gZUg");
	var mask_graphics_433 = new cjs.Graphics().p("Ay+I2Ifs5eIGSHzI/uZeg");
	var mask_graphics_434 = new cjs.Graphics().p("AzFI7If65oIGRHyI/6Zqg");
	var mask_graphics_435 = new cjs.Graphics().p("AzMJBMAgIgZ0IGRHzMggIAZ0g");
	var mask_graphics_436 = new cjs.Graphics().p("AzSJGMAgUgZ+IGRHzMggUAZ+g");
	var mask_graphics_437 = new cjs.Graphics().p("Ap2WSMAgigaJIGRHyMggiAaKg");
	var mask_graphics_438 = new cjs.Graphics().p("Az6JmMAhkga+IGRHzMghkAa+g");
	var mask_graphics_439 = new cjs.Graphics().p("Ar6XHMAimgbzIGRHxMgimAb1g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(289).to({graphics:mask_graphics_289,x:186.3,y:111.3}).wait(1).to({graphics:mask_graphics_290,x:345.1,y:192.8}).wait(1).to({graphics:mask_graphics_291,x:344.4,y:193.4}).wait(1).to({graphics:mask_graphics_292,x:343.7,y:193.9}).wait(1).to({graphics:mask_graphics_293,x:343.1,y:194.5}).wait(1).to({graphics:mask_graphics_294,x:342.4,y:195.1}).wait(1).to({graphics:mask_graphics_295,x:341.7,y:195.6}).wait(1).to({graphics:mask_graphics_296,x:341.1,y:196.2}).wait(1).to({graphics:mask_graphics_297,x:340.4,y:196.7}).wait(1).to({graphics:mask_graphics_298,x:339.7,y:197.3}).wait(1).to({graphics:mask_graphics_299,x:339,y:197.9}).wait(1).to({graphics:mask_graphics_300,x:338.4,y:198.5}).wait(1).to({graphics:mask_graphics_301,x:337.7,y:199}).wait(1).to({graphics:mask_graphics_302,x:337,y:199.6}).wait(1).to({graphics:mask_graphics_303,x:336.4,y:200.2}).wait(1).to({graphics:mask_graphics_304,x:335.7,y:200.7}).wait(1).to({graphics:mask_graphics_305,x:335,y:201.3}).wait(1).to({graphics:mask_graphics_306,x:334.3,y:201.9}).wait(1).to({graphics:mask_graphics_307,x:333.7,y:202.4}).wait(1).to({graphics:mask_graphics_308,x:333,y:203}).wait(1).to({graphics:mask_graphics_309,x:332.3,y:203.6}).wait(1).to({graphics:mask_graphics_310,x:331.7,y:204.2}).wait(1).to({graphics:mask_graphics_311,x:331,y:204.7}).wait(1).to({graphics:mask_graphics_312,x:330.3,y:205.3}).wait(1).to({graphics:mask_graphics_313,x:329.6,y:205.8}).wait(1).to({graphics:mask_graphics_314,x:329,y:206.4}).wait(1).to({graphics:mask_graphics_315,x:328.3,y:207}).wait(1).to({graphics:mask_graphics_316,x:327.6,y:207.6}).wait(1).to({graphics:mask_graphics_317,x:327,y:208.1}).wait(1).to({graphics:mask_graphics_318,x:326.3,y:208.7}).wait(1).to({graphics:mask_graphics_319,x:325.6,y:209.3}).wait(1).to({graphics:mask_graphics_320,x:324.9,y:209.8}).wait(1).to({graphics:mask_graphics_321,x:324.3,y:210.4}).wait(1).to({graphics:mask_graphics_322,x:323.6,y:211}).wait(1).to({graphics:mask_graphics_323,x:322.9,y:211.5}).wait(1).to({graphics:mask_graphics_324,x:322.3,y:212.1}).wait(1).to({graphics:mask_graphics_325,x:321.6,y:212.7}).wait(1).to({graphics:mask_graphics_326,x:320.9,y:213.3}).wait(1).to({graphics:mask_graphics_327,x:320.2,y:213.8}).wait(1).to({graphics:mask_graphics_328,x:319.6,y:214.4}).wait(1).to({graphics:mask_graphics_329,x:318.9,y:214.9}).wait(1).to({graphics:mask_graphics_330,x:318.2,y:215.5}).wait(1).to({graphics:mask_graphics_331,x:317.6,y:216.1}).wait(1).to({graphics:mask_graphics_332,x:316.9,y:216.6}).wait(1).to({graphics:mask_graphics_333,x:316.2,y:217.2}).wait(1).to({graphics:mask_graphics_334,x:315.5,y:217.8}).wait(1).to({graphics:mask_graphics_335,x:314.9,y:218.4}).wait(1).to({graphics:mask_graphics_336,x:314.2,y:218.9}).wait(1).to({graphics:mask_graphics_337,x:313.5,y:219.5}).wait(1).to({graphics:mask_graphics_338,x:312.9,y:220.1}).wait(1).to({graphics:mask_graphics_339,x:312.2,y:220.6}).wait(1).to({graphics:mask_graphics_340,x:311.5,y:221.2}).wait(1).to({graphics:mask_graphics_341,x:310.8,y:221.7}).wait(1).to({graphics:mask_graphics_342,x:310.2,y:222.3}).wait(1).to({graphics:mask_graphics_343,x:309.5,y:222.9}).wait(1).to({graphics:mask_graphics_344,x:308.8,y:223.5}).wait(1).to({graphics:mask_graphics_345,x:308.2,y:224}).wait(1).to({graphics:mask_graphics_346,x:307.5,y:224.6}).wait(1).to({graphics:mask_graphics_347,x:306.8,y:225.2}).wait(1).to({graphics:mask_graphics_348,x:306.1,y:225.7}).wait(1).to({graphics:mask_graphics_349,x:305.5,y:226.3}).wait(1).to({graphics:mask_graphics_350,x:304.8,y:226.9}).wait(1).to({graphics:mask_graphics_351,x:304.1,y:227.4}).wait(1).to({graphics:mask_graphics_352,x:303.5,y:228}).wait(1).to({graphics:mask_graphics_353,x:302.8,y:228.6}).wait(1).to({graphics:mask_graphics_354,x:302.1,y:229.2}).wait(1).to({graphics:mask_graphics_355,x:301.4,y:229.7}).wait(1).to({graphics:mask_graphics_356,x:300.8,y:230.3}).wait(1).to({graphics:mask_graphics_357,x:300.1,y:230.8}).wait(1).to({graphics:mask_graphics_358,x:299.4,y:231.4}).wait(1).to({graphics:mask_graphics_359,x:298.8,y:232}).wait(1).to({graphics:mask_graphics_360,x:298.1,y:232.6}).wait(1).to({graphics:mask_graphics_361,x:297.4,y:233.1}).wait(1).to({graphics:mask_graphics_362,x:296.7,y:233.7}).wait(1).to({graphics:mask_graphics_363,x:296.1,y:234.3}).wait(1).to({graphics:mask_graphics_364,x:295.4,y:234.8}).wait(1).to({graphics:mask_graphics_365,x:294.7,y:235.4}).wait(1).to({graphics:mask_graphics_366,x:294.1,y:236}).wait(1).to({graphics:mask_graphics_367,x:293.4,y:236.5}).wait(1).to({graphics:mask_graphics_368,x:292.7,y:237.1}).wait(1).to({graphics:mask_graphics_369,x:292,y:237.7}).wait(1).to({graphics:mask_graphics_370,x:291.4,y:238.3}).wait(1).to({graphics:mask_graphics_371,x:290.7,y:238.8}).wait(1).to({graphics:mask_graphics_372,x:290,y:239.4}).wait(1).to({graphics:mask_graphics_373,x:289.4,y:239.9}).wait(1).to({graphics:mask_graphics_374,x:288.7,y:240.5}).wait(1).to({graphics:mask_graphics_375,x:288,y:241.1}).wait(1).to({graphics:mask_graphics_376,x:287.3,y:241.6}).wait(1).to({graphics:mask_graphics_377,x:286.7,y:242.2}).wait(1).to({graphics:mask_graphics_378,x:286,y:242.8}).wait(1).to({graphics:mask_graphics_379,x:285.3,y:243.4}).wait(1).to({graphics:mask_graphics_380,x:284.7,y:243.9}).wait(1).to({graphics:mask_graphics_381,x:284,y:244.5}).wait(1).to({graphics:mask_graphics_382,x:283.3,y:245.1}).wait(1).to({graphics:mask_graphics_383,x:282.6,y:245.6}).wait(1).to({graphics:mask_graphics_384,x:282,y:246.2}).wait(1).to({graphics:mask_graphics_385,x:281.3,y:246.8}).wait(1).to({graphics:mask_graphics_386,x:280.6,y:247.3}).wait(1).to({graphics:mask_graphics_387,x:280,y:247.9}).wait(1).to({graphics:mask_graphics_388,x:279.3,y:248.5}).wait(1).to({graphics:mask_graphics_389,x:278.6,y:249}).wait(1).to({graphics:mask_graphics_390,x:277.9,y:249.6}).wait(1).to({graphics:mask_graphics_391,x:277.3,y:250.2}).wait(1).to({graphics:mask_graphics_392,x:276.6,y:250.7}).wait(1).to({graphics:mask_graphics_393,x:275.9,y:251.3}).wait(1).to({graphics:mask_graphics_394,x:275.3,y:251.9}).wait(1).to({graphics:mask_graphics_395,x:274.6,y:252.5}).wait(1).to({graphics:mask_graphics_396,x:273.9,y:253}).wait(1).to({graphics:mask_graphics_397,x:273.2,y:253.6}).wait(1).to({graphics:mask_graphics_398,x:272.6,y:254.2}).wait(1).to({graphics:mask_graphics_399,x:271.9,y:254.7}).wait(1).to({graphics:mask_graphics_400,x:271.2,y:255.3}).wait(1).to({graphics:mask_graphics_401,x:270.6,y:255.8}).wait(1).to({graphics:mask_graphics_402,x:269.9,y:256.4}).wait(1).to({graphics:mask_graphics_403,x:269.2,y:257}).wait(1).to({graphics:mask_graphics_404,x:268.5,y:257.6}).wait(1).to({graphics:mask_graphics_405,x:267.9,y:258.1}).wait(1).to({graphics:mask_graphics_406,x:267.2,y:258.7}).wait(1).to({graphics:mask_graphics_407,x:266.5,y:259.3}).wait(1).to({graphics:mask_graphics_408,x:265.9,y:259.8}).wait(1).to({graphics:mask_graphics_409,x:265.2,y:260.4}).wait(1).to({graphics:mask_graphics_410,x:264.5,y:261}).wait(1).to({graphics:mask_graphics_411,x:263.8,y:261.5}).wait(1).to({graphics:mask_graphics_412,x:263.2,y:262.1}).wait(1).to({graphics:mask_graphics_413,x:262.5,y:262.7}).wait(1).to({graphics:mask_graphics_414,x:261.8,y:263.3}).wait(1).to({graphics:mask_graphics_415,x:261.2,y:263.8}).wait(1).to({graphics:mask_graphics_416,x:260.5,y:264.4}).wait(1).to({graphics:mask_graphics_417,x:259.8,y:264.9}).wait(1).to({graphics:mask_graphics_418,x:259.1,y:265.5}).wait(1).to({graphics:mask_graphics_419,x:258.5,y:266.1}).wait(1).to({graphics:mask_graphics_420,x:257.8,y:266.6}).wait(1).to({graphics:mask_graphics_421,x:257.1,y:267.2}).wait(1).to({graphics:mask_graphics_422,x:256.5,y:267.8}).wait(1).to({graphics:mask_graphics_423,x:255.8,y:268.4}).wait(1).to({graphics:mask_graphics_424,x:255.1,y:268.9}).wait(1).to({graphics:mask_graphics_425,x:254.4,y:269.5}).wait(1).to({graphics:mask_graphics_426,x:253.8,y:270.1}).wait(1).to({graphics:mask_graphics_427,x:253.1,y:270.6}).wait(1).to({graphics:mask_graphics_428,x:252.4,y:271.2}).wait(1).to({graphics:mask_graphics_429,x:251.8,y:271.8}).wait(1).to({graphics:mask_graphics_430,x:251.1,y:272.3}).wait(1).to({graphics:mask_graphics_431,x:250.4,y:272.9}).wait(1).to({graphics:mask_graphics_432,x:249.7,y:273.5}).wait(1).to({graphics:mask_graphics_433,x:249.1,y:274}).wait(1).to({graphics:mask_graphics_434,x:248.4,y:274.6}).wait(1).to({graphics:mask_graphics_435,x:247.7,y:275.2}).wait(1).to({graphics:mask_graphics_436,x:247.1,y:275.7}).wait(1).to({graphics:mask_graphics_437,x:185.3,y:192.5}).wait(1).to({graphics:mask_graphics_438,x:243.1,y:279}).wait(1).to({graphics:mask_graphics_439,x:185.3,y:197.8}).wait(81));

	// Layer 16
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(20,1,1).p("AP2raQldFemiDOQmoDRmEERQkRDBivDm");
	this.shape_1.setTransform(239.4,276.1);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(289).to({_off:false},0).wait(231));

	// Layer 13
	this.instance_2 = new lib.ar1("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(141.2,177.4,1,1,0,0,0,-0.8,0.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(511));

	// Layer 25 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_166 = new cjs.Graphics().p("AP9V4ICggWIBDHsIihAWg");
	var mask_1_graphics_167 = new cjs.Graphics().p("Ah6jkICwgiIBFHrIiwAhg");
	var mask_1_graphics_168 = new cjs.Graphics().p("AiDjeIDAgtIBHHqIjAAtg");
	var mask_1_graphics_169 = new cjs.Graphics().p("AiMjYIDQg4IBJHoIjQA5g");
	var mask_1_graphics_170 = new cjs.Graphics().p("AiVjSIDhhDIBKHnIjgBFg");
	var mask_1_graphics_171 = new cjs.Graphics().p("AifjMIDyhPIBNHoIjyBPg");
	var mask_1_graphics_172 = new cjs.Graphics().p("AiojFIEChbIBPHmIkCBbg");
	var mask_1_graphics_173 = new cjs.Graphics().p("Aixi/IEShnIBRHmIkSBng");
	var mask_1_graphics_174 = new cjs.Graphics().p("Ai7i5IEkhyIBSHlIkiByg");
	var mask_1_graphics_175 = new cjs.Graphics().p("AjDizIEzh9IBVHkIk0B+g");
	var mask_1_graphics_176 = new cjs.Graphics().p("AjNitIFEiJIBXHkIlECJg");
	var mask_1_graphics_177 = new cjs.Graphics().p("AjWinIFUiUIBZHiIlUCVg");
	var mask_1_graphics_178 = new cjs.Graphics().p("AjfihIFligIBaHiIlkChg");
	var mask_1_graphics_179 = new cjs.Graphics().p("AjpibIF2irIBdHiIl2Crg");
	var mask_1_graphics_180 = new cjs.Graphics().p("AjyiUIGGi3IBfHgImGC3g");
	var mask_1_graphics_181 = new cjs.Graphics().p("Aj7iOIGWjDIBhHgImWDCg");
	var mask_1_graphics_182 = new cjs.Graphics().p("AkFiIIGnjOIBjHfImnDOg");
	var mask_1_graphics_183 = new cjs.Graphics().p("AkNiCIG3jZIBlHeIm3DZg");
	var mask_1_graphics_184 = new cjs.Graphics().p("AkXh8IHIjlIBnHeInIDlg");
	var mask_1_graphics_185 = new cjs.Graphics().p("Akgh2IHYjwIBpHcInYDxg");
	var mask_1_graphics_186 = new cjs.Graphics().p("AkphwIHpj8IBqHcInoD8g");
	var mask_1_graphics_187 = new cjs.Graphics().p("AkzhqIH5kHIBtHbIn5EIg");
	var mask_1_graphics_188 = new cjs.Graphics().p("Ak8hjIIKkTIBvHaIoKETg");
	var mask_1_graphics_189 = new cjs.Graphics().p("AlFhdIIbkeIBwHZIoaEeg");
	var mask_1_graphics_190 = new cjs.Graphics().p("AlOhXIIqkqIBzHZIoqEqg");
	var mask_1_graphics_191 = new cjs.Graphics().p("AlXhRII7k1IB0HYIo6E1g");
	var mask_1_graphics_192 = new cjs.Graphics().p("AlhhLIJMlBIB3HYIpMFBg");
	var mask_1_graphics_193 = new cjs.Graphics().p("AlqhFIJclMIB5HXIpcFMg");
	var mask_1_graphics_194 = new cjs.Graphics().p("Alzg/IJtlYIB6HWIpsFZg");
	var mask_1_graphics_195 = new cjs.Graphics().p("Al8g5IJ9ljIB9HVIp9Fkg");
	var mask_1_graphics_196 = new cjs.Graphics().p("AmGgyIKOlvIB+HUIqNFvg");
	var mask_1_graphics_197 = new cjs.Graphics().p("AmPgsIKel7ICBHUIqeF7g");
	var mask_1_graphics_198 = new cjs.Graphics().p("AmYgmIKvmGICCHTIquGGg");
	var mask_1_graphics_199 = new cjs.Graphics().p("AmhggIK/mRICEHSIq+GRg");
	var mask_1_graphics_200 = new cjs.Graphics().p("AmrgaILQmdICHHSIrQGdg");
	var mask_1_graphics_201 = new cjs.Graphics().p("Am0gUILgmoICJHRIrgGog");
	var mask_1_graphics_202 = new cjs.Graphics().p("Am9gOILxmzICKHPIrwG1g");
	var mask_1_graphics_203 = new cjs.Graphics().p("AnGgIIMAm/ICNHPIsBHAg");
	var mask_1_graphics_204 = new cjs.Graphics().p("AnQgCIMSnKICOHOIsRHLg");
	var mask_1_graphics_205 = new cjs.Graphics().p("AnZADIMjnVICQHPIsiHWg");
	var mask_1_graphics_206 = new cjs.Graphics().p("AniAKIMynhICTHOIsyHhg");
	var mask_1_graphics_207 = new cjs.Graphics().p("AnrAQINDnsICUHNItCHsg");
	var mask_1_graphics_208 = new cjs.Graphics().p("An1AWINUn4ICXHNItUH4g");
	var mask_1_graphics_209 = new cjs.Graphics().p("An+AcINkoDICZHMItkIDg");
	var mask_1_graphics_210 = new cjs.Graphics().p("AoHAiIN1oOICaHLIt0IOg");
	var mask_1_graphics_211 = new cjs.Graphics().p("AoQAoIOFoaICcHKIuEIbg");
	var mask_1_graphics_212 = new cjs.Graphics().p("AoaAuIOWolICfHJIuVImg");
	var mask_1_graphics_213 = new cjs.Graphics().p("AoiA0IOlowICgHIIukIxg");
	var mask_1_graphics_214 = new cjs.Graphics().p("AorA6IO1o7ICiHIIu0I7g");
	var mask_1_graphics_215 = new cjs.Graphics().p("AozA/IPDpFICkHHIvDJGg");
	var mask_1_graphics_216 = new cjs.Graphics().p("Ao8BFIPTpQICmHHIvSJQg");
	var mask_1_graphics_217 = new cjs.Graphics().p("ApEBKIPhpaICoHGIvhJbg");
	var mask_1_graphics_218 = new cjs.Graphics().p("ApNBQIPxplICqHFIvxJmg");
	var mask_1_graphics_219 = new cjs.Graphics().p("ApWBWIQBpwICrHFIwAJwg");
	var mask_1_graphics_220 = new cjs.Graphics().p("ApeBcIQQp7ICtHEIwPJ7g");
	var mask_1_graphics_221 = new cjs.Graphics().p("ApnBhIQfqFICwHDIwfKGg");
	var mask_1_graphics_222 = new cjs.Graphics().p("ApvBnIQuqQICxHDIwtKQg");
	var mask_1_graphics_223 = new cjs.Graphics().p("Ap4BtIQ+qbICzHCIw9Kbg");
	var mask_1_graphics_224 = new cjs.Graphics().p("AqABzIRMqmIC1HBIxMKmg");
	var mask_1_graphics_225 = new cjs.Graphics().p("AqJB4IRcqwIC3HBIxcKwg");
	var mask_1_graphics_226 = new cjs.Graphics().p("AqSB+IRsq7IC4HAIxqK7g");
	var mask_1_graphics_227 = new cjs.Graphics().p("AqaCDIR7rFIC6HAIx6LFg");
	var mask_1_graphics_228 = new cjs.Graphics().p("AqjCJISKrQIC8G+IyJLRg");
	var mask_1_graphics_229 = new cjs.Graphics().p("AqrCPISZrbIC+G+IyZLbg");
	var mask_1_graphics_230 = new cjs.Graphics().p("Aq0CUISprlIDAG9IyoLmg");
	var mask_1_graphics_231 = new cjs.Graphics().p("Aq8CaIS3rwIDCG9Iy3Lwg");
	var mask_1_graphics_232 = new cjs.Graphics().p("ArFCgITHr7IDEG8IzHL7g");
	var mask_1_graphics_233 = new cjs.Graphics().p("ArNClITWsFIDFG7IzWMGg");
	var mask_1_graphics_234 = new cjs.Graphics().p("ArWCrITlsQIDIG6IzlMRg");
	var mask_1_graphics_235 = new cjs.Graphics().p("AreCxIT0sbIDJG6Iz0Mbg");
	var mask_1_graphics_236 = new cjs.Graphics().p("ArnC2IUEslIDLG5I0DMmg");
	var mask_1_graphics_237 = new cjs.Graphics().p("ArvC8IUSswIDNG5I0SMwg");
	var mask_1_graphics_238 = new cjs.Graphics().p("Ar4DCIUis7IDPG4I0iM7g");
	var mask_1_graphics_239 = new cjs.Graphics().p("AsBDHIUytFIDRG3I0yNGg");
	var mask_1_graphics_240 = new cjs.Graphics().p("AsJDNIVBtQIDSG3I1ANQg");
	var mask_1_graphics_241 = new cjs.Graphics().p("AsSDTIVQtbIDVG2I1QNag");
	var mask_1_graphics_242 = new cjs.Graphics().p("AsaDYIVftkIDWG0I1fNmg");
	var mask_1_graphics_243 = new cjs.Graphics().p("AsjDeIVvtwIDYG1I1vNwg");
	var mask_1_graphics_244 = new cjs.Graphics().p("AsrDkIV9t7IDaG0I1+N6g");
	var mask_1_graphics_245 = new cjs.Graphics().p("As0DqIWNuGIDcG0I2NOEg");
	var mask_1_graphics_246 = new cjs.Graphics().p("As8DvIWcuPIDdGxI2cORg");
	var mask_1_graphics_247 = new cjs.Graphics().p("AtFD1IWsuaIDfGxI2rObg");
	var mask_1_graphics_248 = new cjs.Graphics().p("AtOD6IW7ulIDiGxI27Olg");
	var mask_1_graphics_249 = new cjs.Graphics().p("AtWEAIXKuvIDjGwI3KOwg");
	var mask_1_graphics_250 = new cjs.Graphics().p("AtfEGIXau6IDlGvI3aO6g");
	var mask_1_graphics_251 = new cjs.Graphics().p("AtnELIXovFIDoGwI3pPEg");
	var mask_1_graphics_252 = new cjs.Graphics().p("AtwERIX4vQIDpGuI34PRg");
	var mask_1_graphics_253 = new cjs.Graphics().p("At4EXIYHvaIDqGtI4HPag");
	var mask_1_graphics_254 = new cjs.Graphics().p("AuBEcIYXvkIDsGsI4WPlg");
	var mask_1_graphics_255 = new cjs.Graphics().p("AuKEiIYmvwIDvGtI4mPwg");
	var mask_1_graphics_256 = new cjs.Graphics().p("AuSEoIY1v6IDwGrI41P6g");
	var mask_1_graphics_257 = new cjs.Graphics().p("AubEtIZFwEIDyGqI5FQFg");
	var mask_1_graphics_258 = new cjs.Graphics().p("AujEzIZTwPID0GqI5TQPg");
	var mask_1_graphics_259 = new cjs.Graphics().p("AusE5IZjwaID2GpI5jQag");
	var mask_1_graphics_260 = new cjs.Graphics().p("Au0E+IZywkID4GoI5zQlg");
	var mask_1_graphics_261 = new cjs.Graphics().p("Au9FEIaCwvID5GoI6CQvg");
	var mask_1_graphics_262 = new cjs.Graphics().p("AvFFKIaQw6ID7GnI6QQ6g");
	var mask_1_graphics_263 = new cjs.Graphics().p("AvOFQIagxFID9GnI6gREg");
	var mask_1_graphics_264 = new cjs.Graphics().p("AvXFVIawxPID/GmI6wRPg");
	var mask_1_graphics_265 = new cjs.Graphics().p("AvfFbIa+xaIEBGlI6+Rag");
	var mask_1_graphics_266 = new cjs.Graphics().p("AvoFhIbOxlIEDGkI7ORlg");
	var mask_1_graphics_267 = new cjs.Graphics().p("AvwFmIbdxvIEEGkI7cRvg");
	var mask_1_graphics_268 = new cjs.Graphics().p("Av5FsIbtx6IEGGjI7sR6g");
	var mask_1_graphics_269 = new cjs.Graphics().p("AwBFyIb7yFIEJGjI78SEg");
	var mask_1_graphics_270 = new cjs.Graphics().p("AwKF3IcLyPIEKGhI8LSQg");
	var mask_1_graphics_271 = new cjs.Graphics().p("AwTF9IcbyaIEMGhI8aSag");
	var mask_1_graphics_272 = new cjs.Graphics().p("AAvXWIcrymIEOGhI8qSlg");
	var mask_1_graphics_273 = new cjs.Graphics().p("AxAGaIdzzUIEOGgI9zTVg");
	var mask_1_graphics_274 = new cjs.Graphics().p("AgZXWIe90GIEOGhI++UFg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(166).to({graphics:mask_1_graphics_166,x:124.8,y:189.2}).wait(1).to({graphics:mask_1_graphics_167,x:239.1,y:352.2}).wait(1).to({graphics:mask_1_graphics_168,x:239.9,y:351.6}).wait(1).to({graphics:mask_1_graphics_169,x:240.8,y:351.2}).wait(1).to({graphics:mask_1_graphics_170,x:241.6,y:350.7}).wait(1).to({graphics:mask_1_graphics_171,x:242.5,y:350.2}).wait(1).to({graphics:mask_1_graphics_172,x:243.4,y:349.6}).wait(1).to({graphics:mask_1_graphics_173,x:244.2,y:349.2}).wait(1).to({graphics:mask_1_graphics_174,x:245.1,y:348.7}).wait(1).to({graphics:mask_1_graphics_175,x:245.9,y:348.2}).wait(1).to({graphics:mask_1_graphics_176,x:246.8,y:347.6}).wait(1).to({graphics:mask_1_graphics_177,x:247.6,y:347.2}).wait(1).to({graphics:mask_1_graphics_178,x:248.5,y:346.7}).wait(1).to({graphics:mask_1_graphics_179,x:249.3,y:346.2}).wait(1).to({graphics:mask_1_graphics_180,x:250.2,y:345.6}).wait(1).to({graphics:mask_1_graphics_181,x:251.1,y:345.2}).wait(1).to({graphics:mask_1_graphics_182,x:251.9,y:344.7}).wait(1).to({graphics:mask_1_graphics_183,x:252.8,y:344.2}).wait(1).to({graphics:mask_1_graphics_184,x:253.6,y:343.6}).wait(1).to({graphics:mask_1_graphics_185,x:254.5,y:343.2}).wait(1).to({graphics:mask_1_graphics_186,x:255.3,y:342.7}).wait(1).to({graphics:mask_1_graphics_187,x:256.2,y:342.2}).wait(1).to({graphics:mask_1_graphics_188,x:257,y:341.6}).wait(1).to({graphics:mask_1_graphics_189,x:257.9,y:341.2}).wait(1).to({graphics:mask_1_graphics_190,x:258.8,y:340.7}).wait(1).to({graphics:mask_1_graphics_191,x:259.6,y:340.1}).wait(1).to({graphics:mask_1_graphics_192,x:260.5,y:339.6}).wait(1).to({graphics:mask_1_graphics_193,x:261.3,y:339.1}).wait(1).to({graphics:mask_1_graphics_194,x:262.2,y:338.7}).wait(1).to({graphics:mask_1_graphics_195,x:263.1,y:338.1}).wait(1).to({graphics:mask_1_graphics_196,x:263.9,y:337.6}).wait(1).to({graphics:mask_1_graphics_197,x:264.8,y:337.1}).wait(1).to({graphics:mask_1_graphics_198,x:265.6,y:336.7}).wait(1).to({graphics:mask_1_graphics_199,x:266.5,y:336.1}).wait(1).to({graphics:mask_1_graphics_200,x:267.3,y:335.6}).wait(1).to({graphics:mask_1_graphics_201,x:268.2,y:335.1}).wait(1).to({graphics:mask_1_graphics_202,x:269,y:334.7}).wait(1).to({graphics:mask_1_graphics_203,x:269.9,y:334.1}).wait(1).to({graphics:mask_1_graphics_204,x:270.8,y:333.6}).wait(1).to({graphics:mask_1_graphics_205,x:271.6,y:333.1}).wait(1).to({graphics:mask_1_graphics_206,x:272.5,y:332.7}).wait(1).to({graphics:mask_1_graphics_207,x:273.3,y:332.1}).wait(1).to({graphics:mask_1_graphics_208,x:274.2,y:331.6}).wait(1).to({graphics:mask_1_graphics_209,x:275,y:331.1}).wait(1).to({graphics:mask_1_graphics_210,x:275.9,y:330.7}).wait(1).to({graphics:mask_1_graphics_211,x:276.7,y:330.1}).wait(1).to({graphics:mask_1_graphics_212,x:277.6,y:329.6}).wait(1).to({graphics:mask_1_graphics_213,x:278.4,y:329.2}).wait(1).to({graphics:mask_1_graphics_214,x:279.2,y:328.7}).wait(1).to({graphics:mask_1_graphics_215,x:280,y:328.2}).wait(1).to({graphics:mask_1_graphics_216,x:280.8,y:327.8}).wait(1).to({graphics:mask_1_graphics_217,x:281.6,y:327.3}).wait(1).to({graphics:mask_1_graphics_218,x:282.4,y:326.8}).wait(1).to({graphics:mask_1_graphics_219,x:283.2,y:326.4}).wait(1).to({graphics:mask_1_graphics_220,x:284,y:325.9}).wait(1).to({graphics:mask_1_graphics_221,x:284.8,y:325.5}).wait(1).to({graphics:mask_1_graphics_222,x:285.5,y:325}).wait(1).to({graphics:mask_1_graphics_223,x:286.3,y:324.5}).wait(1).to({graphics:mask_1_graphics_224,x:287.1,y:324.1}).wait(1).to({graphics:mask_1_graphics_225,x:287.9,y:323.6}).wait(1).to({graphics:mask_1_graphics_226,x:288.7,y:323.1}).wait(1).to({graphics:mask_1_graphics_227,x:289.5,y:322.7}).wait(1).to({graphics:mask_1_graphics_228,x:290.3,y:322.2}).wait(1).to({graphics:mask_1_graphics_229,x:291.1,y:321.7}).wait(1).to({graphics:mask_1_graphics_230,x:291.9,y:321.3}).wait(1).to({graphics:mask_1_graphics_231,x:292.7,y:320.8}).wait(1).to({graphics:mask_1_graphics_232,x:293.5,y:320.3}).wait(1).to({graphics:mask_1_graphics_233,x:294.3,y:319.9}).wait(1).to({graphics:mask_1_graphics_234,x:295.1,y:319.4}).wait(1).to({graphics:mask_1_graphics_235,x:295.9,y:318.9}).wait(1).to({graphics:mask_1_graphics_236,x:296.7,y:318.5}).wait(1).to({graphics:mask_1_graphics_237,x:297.5,y:318}).wait(1).to({graphics:mask_1_graphics_238,x:298.2,y:317.5}).wait(1).to({graphics:mask_1_graphics_239,x:299,y:317.1}).wait(1).to({graphics:mask_1_graphics_240,x:299.8,y:316.6}).wait(1).to({graphics:mask_1_graphics_241,x:300.6,y:316.2}).wait(1).to({graphics:mask_1_graphics_242,x:301.4,y:315.7}).wait(1).to({graphics:mask_1_graphics_243,x:302.2,y:315.2}).wait(1).to({graphics:mask_1_graphics_244,x:303,y:314.8}).wait(1).to({graphics:mask_1_graphics_245,x:303.8,y:314.3}).wait(1).to({graphics:mask_1_graphics_246,x:304.6,y:313.9}).wait(1).to({graphics:mask_1_graphics_247,x:305.4,y:313.4}).wait(1).to({graphics:mask_1_graphics_248,x:306.2,y:312.9}).wait(1).to({graphics:mask_1_graphics_249,x:307,y:312.5}).wait(1).to({graphics:mask_1_graphics_250,x:307.8,y:312}).wait(1).to({graphics:mask_1_graphics_251,x:308.6,y:311.5}).wait(1).to({graphics:mask_1_graphics_252,x:309.4,y:311.1}).wait(1).to({graphics:mask_1_graphics_253,x:310.2,y:310.6}).wait(1).to({graphics:mask_1_graphics_254,x:311,y:310.1}).wait(1).to({graphics:mask_1_graphics_255,x:311.7,y:309.7}).wait(1).to({graphics:mask_1_graphics_256,x:312.5,y:309.2}).wait(1).to({graphics:mask_1_graphics_257,x:313.3,y:308.7}).wait(1).to({graphics:mask_1_graphics_258,x:314.1,y:308.3}).wait(1).to({graphics:mask_1_graphics_259,x:314.9,y:307.8}).wait(1).to({graphics:mask_1_graphics_260,x:315.7,y:307.3}).wait(1).to({graphics:mask_1_graphics_261,x:316.5,y:306.9}).wait(1).to({graphics:mask_1_graphics_262,x:317.3,y:306.4}).wait(1).to({graphics:mask_1_graphics_263,x:318.1,y:305.9}).wait(1).to({graphics:mask_1_graphics_264,x:318.9,y:305.5}).wait(1).to({graphics:mask_1_graphics_265,x:319.7,y:305}).wait(1).to({graphics:mask_1_graphics_266,x:320.5,y:304.6}).wait(1).to({graphics:mask_1_graphics_267,x:321.3,y:304.1}).wait(1).to({graphics:mask_1_graphics_268,x:322.1,y:303.6}).wait(1).to({graphics:mask_1_graphics_269,x:322.9,y:303.2}).wait(1).to({graphics:mask_1_graphics_270,x:323.7,y:302.7}).wait(1).to({graphics:mask_1_graphics_271,x:324.4,y:302.2}).wait(1).to({graphics:mask_1_graphics_272,x:215.2,y:191}).wait(1).to({graphics:mask_1_graphics_273,x:328.9,y:299.4}).wait(1).to({graphics:mask_1_graphics_274,x:222.6,y:191}).wait(246));

	// Layer 24
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(20,1,1).p("AVKnOQsSOWq9DZQq/DZCznUQC0nTCYlSQCXlSikgRQilgSjEBhQjEBinKGI");
	this.shape_2.setTransform(280.2,276.1);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(166).to({_off:false},0).wait(354));

	// Layer 23 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_139 = new cjs.Graphics().p("AGaSQQCdjcEKgtQELgtDcCdQDYCZAvEDI0HDYQgnkECZjXg");
	var mask_2_graphics_140 = new cjs.Graphics().p("AGPSYQCUjiEJg3QEIg3DiCUQDdCRA6EBIz9EKQgykCCRjeg");
	var mask_2_graphics_141 = new cjs.Graphics().p("AGFShQCLjnEGhBQEHhCDnCMQDjCIBDD+IzyE7Qg8kACJjjg");
	var mask_2_graphics_142 = new cjs.Graphics().p("AF8SrQCCjtEEhLQEDhLDtCCQDoB/BND8IzlFrQhFj9B/jog");
	var mask_2_graphics_143 = new cjs.Graphics().p("AF1S1QB5jxEAhWQEBhVDxB5QDtB3BWD4IzVGbQhQj6B3jtg");
	var mask_2_graphics_144 = new cjs.Graphics().p("AFuTAQBwj2D9hfQD9hfD2BvQDxBuBgD0IzFHLQhZj3Btjxg");
	var mask_2_graphics_145 = new cjs.Graphics().p("AFqTLQBmj6D5hpQD5hoD6BmQD1BkBpDwIyyH6Qhij0Bkj1g");
	var mask_2_graphics_146 = new cjs.Graphics().p("AFmTXQBdj+D1hyQD0hyD+BcQD5BaByDtIydIoQhsjwBaj5g");
	var mask_2_graphics_147 = new cjs.Graphics().p("AFkTkQBTkCDwh7QDwh8EBBTQD8BQB8DoIyHJVQh1jsBQj7g");
	var mask_2_graphics_148 = new cjs.Graphics().p("AFkTwQBIkEDriEQDsiFEDBIQD/BHCFDjIxvKBQh+jnBHj/g");
	var mask_2_graphics_149 = new cjs.Graphics().p("AFkT+QA/kHDmiOQDliNEHA+QEBA9CODeIxWKsQiHjiA9kBg");
	var mask_2_graphics_150 = new cjs.Graphics().p("AFmUMQA1kJDgiXQDgiWEJA0QEDAzCWDYIw6LWQiQjcAzkDg");
	var mask_2_graphics_151 = new cjs.Graphics().p("AFqUaQAqkLDaifQDaifELAqQEFApCeDSIweMAQiXjXApkFg");
	var mask_2_graphics_152 = new cjs.Graphics().p("AFuUpQAgkMDUioQDUinEMAgQEGAeCmDMIv/MoQifjRAekGg");
	var mask_2_graphics_153 = new cjs.Graphics().p("AF0U4QAWkNDNiwQDNivENAVQEIAVCtDFIveNOQiojKAUkHg");
	var mask_2_graphics_154 = new cjs.Graphics().p("AF8VHQALkNDGi4QDGi3EOALQEIALC1C+Iu9N0QiwjEALkIg");
	var mask_2_graphics_155 = new cjs.Graphics().p("AGEVXQABkOC/i+QC/i/EOAAQEIABC8C3IuaOYQi3i9AAkIg");
	var mask_2_graphics_156 = new cjs.Graphics().p("AGPVnQgKkOC3jFQC4jGENgKQEIgKDECwIt2O6Qi+i1gKkIg");
	var mask_2_graphics_157 = new cjs.Graphics().p("AGeV9QgYkMCtjQQCtjPEMgYQEIgYDMCmItDPoQjHirgYkIg");
	var mask_2_graphics_158 = new cjs.Graphics().p("AGwWUQgnkLCijYQCijYELgmQEGgmDUCbIsNQSQjQigglkGg");
	var mask_2_graphics_159 = new cjs.Graphics().p("AHEWsQg1kJCXjgQCWjhEJg0QEDgzDcCPIrVQ6QjYiVgzkDg");
	var mask_2_graphics_160 = new cjs.Graphics().p("AHaXDQhCkFCKjoQCKjoEGhCQEAhBDkCDIqcRgQjfiKhBkBg");
	var mask_2_graphics_161 = new cjs.Graphics().p("AHyXbQhQkCB+juQB+jvEChQQD9hODqB3IpgSBQjnh+hOj9g");
	var mask_2_graphics_162 = new cjs.Graphics().p("AINX0Qhdj+Bxj1QBxj1D9hdQD5hcDwBrIojSgQjthyhbj4g");
	var mask_2_graphics_163 = new cjs.Graphics().p("AIpYMQhqj4Bkj7QBkj7D4hqQD0hpD1BeInkS7Qjyhlhpjzg");
	var mask_2_graphics_164 = new cjs.Graphics().p("AJIYlQh4jzBXj/QBXkADzh4QDth0D6BQImkTTQj3hYh1jtg");
	var mask_2_graphics_165 = new cjs.Graphics().p("AJoY+QiEjsBKkEQBJkEDsiEQDniCD+BEIliTnQj8hLiCjmg");
	var mask_2_graphics_166 = new cjs.Graphics().p("AKKZWQiQjlA8kHQA8kIDkiQQDgiNEBA2IkgT4Qj/g9iOjgg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(139).to({graphics:mask_2_graphics_139,x:158.3,y:164.3}).wait(1).to({graphics:mask_2_graphics_140,x:158.1,y:165.6}).wait(1).to({graphics:mask_2_graphics_141,x:157.8,y:166.8}).wait(1).to({graphics:mask_2_graphics_142,x:157.5,y:168}).wait(1).to({graphics:mask_2_graphics_143,x:157.1,y:169.2}).wait(1).to({graphics:mask_2_graphics_144,x:156.7,y:170.4}).wait(1).to({graphics:mask_2_graphics_145,x:156.2,y:171.6}).wait(1).to({graphics:mask_2_graphics_146,x:155.7,y:172.7}).wait(1).to({graphics:mask_2_graphics_147,x:155.2,y:173.9}).wait(1).to({graphics:mask_2_graphics_148,x:154.6,y:175}).wait(1).to({graphics:mask_2_graphics_149,x:154,y:176.1}).wait(1).to({graphics:mask_2_graphics_150,x:153.3,y:177.1}).wait(1).to({graphics:mask_2_graphics_151,x:152.6,y:178.2}).wait(1).to({graphics:mask_2_graphics_152,x:151.8,y:179.2}).wait(1).to({graphics:mask_2_graphics_153,x:151,y:180.1}).wait(1).to({graphics:mask_2_graphics_154,x:150.2,y:181.1}).wait(1).to({graphics:mask_2_graphics_155,x:149.3,y:182}).wait(1).to({graphics:mask_2_graphics_156,x:148.5,y:182.8}).wait(1).to({graphics:mask_2_graphics_157,x:147.2,y:184}).wait(1).to({graphics:mask_2_graphics_158,x:145.8,y:185}).wait(1).to({graphics:mask_2_graphics_159,x:144.4,y:186}).wait(1).to({graphics:mask_2_graphics_160,x:143,y:187}).wait(1).to({graphics:mask_2_graphics_161,x:141.5,y:187.8}).wait(1).to({graphics:mask_2_graphics_162,x:140,y:188.6}).wait(1).to({graphics:mask_2_graphics_163,x:138.4,y:189.2}).wait(1).to({graphics:mask_2_graphics_164,x:136.8,y:189.8}).wait(1).to({graphics:mask_2_graphics_165,x:135.2,y:190.3}).wait(1).to({graphics:mask_2_graphics_166,x:133.5,y:190.7}).wait(354));

	// Layer 22
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(20,1,1).p("AVBnRQsAOZq+DZQq/DZC0nUQC0nTCXlSQCYlSikgRQilgSjEBhQjEBinKGI");
	this.shape_3.setTransform(279.3,276.1);
	this.shape_3._off = true;

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(139).to({_off:false},0).wait(381));

	// Layer 21 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_89 = new cjs.Graphics().p("APxQ0IA6iXIEOBnIg6CYg");
	var mask_3_graphics_90 = new cjs.Graphics().p("AinAhIBBioIEOBnIhBCog");
	var mask_3_graphics_91 = new cjs.Graphics().p("AiqAqIBIi7IENBoIhIC7g");
	var mask_3_graphics_92 = new cjs.Graphics().p("AiuAzIBPjNIEOBoIhPDNg");
	var mask_3_graphics_93 = new cjs.Graphics().p("AixA8IBWjfIENBoIhWDfg");
	var mask_3_graphics_94 = new cjs.Graphics().p("Ai1BFIBdjxIEOBoIhdDxg");
	var mask_3_graphics_95 = new cjs.Graphics().p("Ai4BOIBkkDIENBoIhkEDg");
	var mask_3_graphics_96 = new cjs.Graphics().p("Ai8BXIBrkVIEOBoIhrEVg");
	var mask_3_graphics_97 = new cjs.Graphics().p("Ai/BgIByknIENBoIhyEng");
	var mask_3_graphics_98 = new cjs.Graphics().p("AjDBqIB5k6IEOBnIh5E6g");
	var mask_3_graphics_99 = new cjs.Graphics().p("AjGBzICAlMIENBnIiAFMg");
	var mask_3_graphics_100 = new cjs.Graphics().p("AjKB8ICHlfIEOBoIiHFfg");
	var mask_3_graphics_101 = new cjs.Graphics().p("AjNCFICOlxIENBoIiOFxg");
	var mask_3_graphics_102 = new cjs.Graphics().p("AjRCOICVmDIEOBoIiVGDg");
	var mask_3_graphics_103 = new cjs.Graphics().p("AjUCXICcmVIENBoIicGVg");
	var mask_3_graphics_104 = new cjs.Graphics().p("AjYCgICjmnIEOBoIijGng");
	var mask_3_graphics_105 = new cjs.Graphics().p("AjbCpICqm5IENBoIiqG5g");
	var mask_3_graphics_106 = new cjs.Graphics().p("AjfCyICxnLIEOBoIixHLg");
	var mask_3_graphics_107 = new cjs.Graphics().p("AjiC7IC4ndIENBnIi4Hfg");
	var mask_3_graphics_108 = new cjs.Graphics().p("AjmDFIC/nwIEOBnIi/Hxg");
	var mask_3_graphics_109 = new cjs.Graphics().p("AjpDNIDGoBIENBnIjGIDg");
	var mask_3_graphics_110 = new cjs.Graphics().p("AjtDXIDNoVIEOBoIjNIVg");
	var mask_3_graphics_111 = new cjs.Graphics().p("AjwDgIDUonIENBoIjUIng");
	var mask_3_graphics_112 = new cjs.Graphics().p("Aj0DpIDbo5IEOBoIjbI5g");
	var mask_3_graphics_113 = new cjs.Graphics().p("Aj3DyIDipLIENBoIjiJLg");
	var mask_3_graphics_114 = new cjs.Graphics().p("Aj7D7IDppdIEOBoIjqJdg");
	var mask_3_graphics_115 = new cjs.Graphics().p("Aj/EEIDxpvIEOBoIjxJvg");
	var mask_3_graphics_116 = new cjs.Graphics().p("AkCENID3qBIEOBoIj3KBg");
	var mask_3_graphics_117 = new cjs.Graphics().p("AkGEWID/qTIEOBnIj/KVg");
	var mask_3_graphics_118 = new cjs.Graphics().p("AkJEfIEFqlIEOBnIkGKng");
	var mask_3_graphics_119 = new cjs.Graphics().p("AkMEpIEMq5IEOBoIkNK5g");
	var mask_3_graphics_120 = new cjs.Graphics().p("AkQEyIESrLIEPBoIkSLLg");
	var mask_3_graphics_121 = new cjs.Graphics().p("AkUE7IEardIEPBoIkaLdg");
	var mask_3_graphics_122 = new cjs.Graphics().p("AkXFEIEgrvIEPBoIkhLvg");
	var mask_3_graphics_123 = new cjs.Graphics().p("AkaFNIEnsBIEPBoIkoMBg");
	var mask_3_graphics_124 = new cjs.Graphics().p("AkeFWIEusTIEPBoIkuMTg");
	var mask_3_graphics_125 = new cjs.Graphics().p("AkiFfIE2slIEPBoIk2Mlg");
	var mask_3_graphics_126 = new cjs.Graphics().p("AklFoIE8s3IEPBnIk8M4g");
	var mask_3_graphics_127 = new cjs.Graphics().p("AkoFxIFDtJIEPBnIlENLg");
	var mask_3_graphics_128 = new cjs.Graphics().p("AksF6IFKtbIEPBnIlLNcg");
	var mask_3_graphics_129 = new cjs.Graphics().p("AkwGEIFStvIEPBoIlSNvg");
	var mask_3_graphics_130 = new cjs.Graphics().p("AkzGNIFYuBIEPBoIlYOBg");
	var mask_3_graphics_131 = new cjs.Graphics().p("Ak2GWIFfuTIEPBoIlgOTg");
	var mask_3_graphics_132 = new cjs.Graphics().p("Ak6GfIFmulIEPBoIlnOlg");
	var mask_3_graphics_133 = new cjs.Graphics().p("Ak+GoIFuu3IEPBoIluO3g");
	var mask_3_graphics_134 = new cjs.Graphics().p("AlBGxIF0vJIEPBoIl0PJg");
	var mask_3_graphics_135 = new cjs.Graphics().p("AlFG6IF8vbIEPBoIl8Pbg");
	var mask_3_graphics_136 = new cjs.Graphics().p("AlIHEIGCvuIEPBnImDPug");
	var mask_3_graphics_137 = new cjs.Graphics().p("AlLHNIGJwAIEPBnImKQAg");
	var mask_3_graphics_138 = new cjs.Graphics().p("AlPHWIGQwTIEPBoImQQTg");
	var mask_3_graphics_139 = new cjs.Graphics().p("AKTX7IGYwmIEPBoImZQmg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(89).to({graphics:mask_3_graphics_89,x:133.7,y:118}).wait(1).to({graphics:mask_3_graphics_90,x:250.7,y:224.1}).wait(1).to({graphics:mask_3_graphics_91,x:250.4,y:225}).wait(1).to({graphics:mask_3_graphics_92,x:250,y:225.9}).wait(1).to({graphics:mask_3_graphics_93,x:249.7,y:226.8}).wait(1).to({graphics:mask_3_graphics_94,x:249.3,y:227.7}).wait(1).to({graphics:mask_3_graphics_95,x:249,y:228.6}).wait(1).to({graphics:mask_3_graphics_96,x:248.6,y:229.5}).wait(1).to({graphics:mask_3_graphics_97,x:248.3,y:230.4}).wait(1).to({graphics:mask_3_graphics_98,x:247.9,y:231.4}).wait(1).to({graphics:mask_3_graphics_99,x:247.6,y:232.3}).wait(1).to({graphics:mask_3_graphics_100,x:247.2,y:233.2}).wait(1).to({graphics:mask_3_graphics_101,x:246.9,y:234.1}).wait(1).to({graphics:mask_3_graphics_102,x:246.5,y:235}).wait(1).to({graphics:mask_3_graphics_103,x:246.2,y:235.9}).wait(1).to({graphics:mask_3_graphics_104,x:245.8,y:236.8}).wait(1).to({graphics:mask_3_graphics_105,x:245.5,y:237.7}).wait(1).to({graphics:mask_3_graphics_106,x:245.1,y:238.6}).wait(1).to({graphics:mask_3_graphics_107,x:244.8,y:239.6}).wait(1).to({graphics:mask_3_graphics_108,x:244.4,y:240.5}).wait(1).to({graphics:mask_3_graphics_109,x:244.1,y:241.4}).wait(1).to({graphics:mask_3_graphics_110,x:243.7,y:242.3}).wait(1).to({graphics:mask_3_graphics_111,x:243.4,y:243.2}).wait(1).to({graphics:mask_3_graphics_112,x:243,y:244.1}).wait(1).to({graphics:mask_3_graphics_113,x:242.7,y:245}).wait(1).to({graphics:mask_3_graphics_114,x:242.4,y:245.9}).wait(1).to({graphics:mask_3_graphics_115,x:242,y:246.8}).wait(1).to({graphics:mask_3_graphics_116,x:241.7,y:247.7}).wait(1).to({graphics:mask_3_graphics_117,x:241.3,y:248.7}).wait(1).to({graphics:mask_3_graphics_118,x:241,y:249.6}).wait(1).to({graphics:mask_3_graphics_119,x:240.6,y:250.5}).wait(1).to({graphics:mask_3_graphics_120,x:240.3,y:251.4}).wait(1).to({graphics:mask_3_graphics_121,x:239.9,y:252.3}).wait(1).to({graphics:mask_3_graphics_122,x:239.6,y:253.2}).wait(1).to({graphics:mask_3_graphics_123,x:239.2,y:254.1}).wait(1).to({graphics:mask_3_graphics_124,x:238.9,y:255}).wait(1).to({graphics:mask_3_graphics_125,x:238.5,y:255.9}).wait(1).to({graphics:mask_3_graphics_126,x:238.2,y:256.9}).wait(1).to({graphics:mask_3_graphics_127,x:237.8,y:257.8}).wait(1).to({graphics:mask_3_graphics_128,x:237.5,y:258.7}).wait(1).to({graphics:mask_3_graphics_129,x:237.1,y:259.6}).wait(1).to({graphics:mask_3_graphics_130,x:236.8,y:260.5}).wait(1).to({graphics:mask_3_graphics_131,x:236.4,y:261.4}).wait(1).to({graphics:mask_3_graphics_132,x:236.1,y:262.3}).wait(1).to({graphics:mask_3_graphics_133,x:235.7,y:263.2}).wait(1).to({graphics:mask_3_graphics_134,x:235.4,y:264.1}).wait(1).to({graphics:mask_3_graphics_135,x:235,y:265}).wait(1).to({graphics:mask_3_graphics_136,x:234.7,y:266}).wait(1).to({graphics:mask_3_graphics_137,x:234.3,y:266.9}).wait(1).to({graphics:mask_3_graphics_138,x:234,y:267.8}).wait(1).to({graphics:mask_3_graphics_139,x:133.8,y:163.5}).wait(381));

	// Layer 20
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(20,1,1).p("AVBnRQsAOZq+DZQq/DZC0nUQC0nTCXlSQCYlSikgRQilgSjEBhQjEBinKGI");
	this.shape_4.setTransform(279.3,276.1);
	this.shape_4._off = true;

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(89).to({_off:false},0).wait(431));

	// Layer 19 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_71 = new cjs.Graphics().p("AC0PKQgFkOC7jDQC7jDEOgFQEJgGDAC0IuHOtQi7i5gGkJg");
	var mask_4_graphics_72 = new cjs.Graphics().p("ACqO6QAGkPDDi7QDDi7EOAFQEIAFC5C7IusOIQi0jAAFkIg");
	var mask_4_graphics_73 = new cjs.Graphics().p("ACiOpQARkODKizQDKizEOAQQEIAQCxDCIvQNiQisjIAQkIg");
	var mask_4_graphics_74 = new cjs.Graphics().p("ACbOZQAckNDRirQDSirEMAcQEIAaCpDKIvzM5QijjPAakHg");
	var mask_4_graphics_75 = new cjs.Graphics().p("ACWOJQAmkLDYiiQDZijELAmQEGAmChDQIwTMPQibjVAlkGg");
	var mask_4_graphics_76 = new cjs.Graphics().p("ACSN6QAxkJDfiaQDeiZEKAwQEEAwCZDXIwyLkQiSjaAvkFg");
	var mask_4_graphics_77 = new cjs.Graphics().p("ACQNsQA8kIDkiQQDliREHA8QECA6CQDdIxPK4QiJjgA6kCg");
	var mask_4_graphics_78 = new cjs.Graphics().p("ACPNeQBHkFDqiHQDqiHEFBGQD/BECHDiIxqKMQiAjmBEj/g");
	var mask_4_graphics_79 = new cjs.Graphics().p("ACQNQQBRkCDvh9QDvh+ECBRQD9BPB9DnIyDJdQh3jqBPj9g");
	var mask_4_graphics_80 = new cjs.Graphics().p("ACSNDQBbj/D0hzQD1h0D+BbQD5BZB0DsIybIuQhtjvBZj5g");
	var mask_4_graphics_81 = new cjs.Graphics().p("ACWM2QBlj6D5hqQD4hpD7BlQD1BjBrDwIyxH+QhjjzBjj2g");
	var mask_4_graphics_82 = new cjs.Graphics().p("ACbMqQBvj2D9hfQD9hgD2BvQDxBtBhD1IzFHNQhZj3Btjyg");
	var mask_4_graphics_83 = new cjs.Graphics().p("AChMfQB5jxEBhWQEAhVDyB5QDtB3BWD4IzWGcQhPj7B2jtg");
	var mask_4_graphics_84 = new cjs.Graphics().p("ACpMVQCDjtEEhLQEEhKDsCCQDoCABMD8IzmFpQhFj+CAjng");
	var mask_4_graphics_85 = new cjs.Graphics().p("ACzMKQCMjmEHhBQEGhADnCMQDiCKBDD+Iz0E2Qg6kACJjjg");
	var mask_4_graphics_86 = new cjs.Graphics().p("AC9MBQCWjhEJg1QEJg2DhCVQDdCTA3EBIz+ECQgxkCCSjdg");
	var mask_4_graphics_87 = new cjs.Graphics().p("ADKL4QCejaELgrQELgrDbCeQDWCcAuEDI0IDOQgmkECbjXg");
	var mask_4_graphics_88 = new cjs.Graphics().p("ADXLwQCojUEMggQEMggDVCnQDQCkAjEFI0QCaQgbkFCjjRg");
	var mask_4_graphics_89 = new cjs.Graphics().p("ADmLpQCwjNEOgVQENgVDNCvQDKCsAYEGI0VBmQgQkHCrjJg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(71).to({graphics:mask_4_graphics_71,x:127.6,y:142}).wait(1).to({graphics:mask_4_graphics_72,x:128.5,y:141}).wait(1).to({graphics:mask_4_graphics_73,x:129.4,y:140.1}).wait(1).to({graphics:mask_4_graphics_74,x:130.3,y:139.1}).wait(1).to({graphics:mask_4_graphics_75,x:131.1,y:138}).wait(1).to({graphics:mask_4_graphics_76,x:131.9,y:136.9}).wait(1).to({graphics:mask_4_graphics_77,x:132.6,y:135.8}).wait(1).to({graphics:mask_4_graphics_78,x:133.3,y:134.7}).wait(1).to({graphics:mask_4_graphics_79,x:133.9,y:133.5}).wait(1).to({graphics:mask_4_graphics_80,x:134.5,y:132.3}).wait(1).to({graphics:mask_4_graphics_81,x:135.1,y:131.1}).wait(1).to({graphics:mask_4_graphics_82,x:135.6,y:129.9}).wait(1).to({graphics:mask_4_graphics_83,x:136,y:128.7}).wait(1).to({graphics:mask_4_graphics_84,x:136.4,y:127.4}).wait(1).to({graphics:mask_4_graphics_85,x:136.8,y:126.1}).wait(1).to({graphics:mask_4_graphics_86,x:137,y:124.8}).wait(1).to({graphics:mask_4_graphics_87,x:137.3,y:123.5}).wait(1).to({graphics:mask_4_graphics_88,x:137.5,y:122.2}).wait(1).to({graphics:mask_4_graphics_89,x:137.6,y:120.9}).wait(431));

	// Layer 18
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(20,1,1).p("AVBnRQsAOZq+DZQq/DZC0nUQC0nTCXlSQCYlSikgRQilgSjEBhQjEBinKGI");
	this.shape_5.setTransform(279.3,276.1);
	this.shape_5._off = true;

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(71).to({_off:false},0).wait(449));

	// Layer 17 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_9 = new cjs.Graphics().p("EgJvAj5QpEoFgqsHQgtsHIFpDMArsAnBQoFJDsGAsQg9AEg8AAQq8AAoWneg");
	var mask_5_graphics_10 = new cjs.Graphics().p("EgJ4AjrQo9oMgisIQgksHIMo9MArPAnhQoMI9sHAjQgwADgwAAQrLAAoansg");
	var mask_5_graphics_11 = new cjs.Graphics().p("EgKAAjdQo4oTgZsIQgbsIITo2MAqyAoAQoTI3sHAaIhIACQraAAodn6g");
	var mask_5_graphics_12 = new cjs.Graphics().p("EgKIAjOQoyoZgQsIQgSsIIZoxMAqVAofQoaIysHARIgwABQrpAAogoJg");
	var mask_5_graphics_13 = new cjs.Graphics().p("EgKQAi/QosofgHsJQgJsIIfoqMAp3Ao+QofIrsIAIIgXABQr5AAojoYg");
	var mask_5_graphics_14 = new cjs.Graphics().p("EAKVArXQsIgBolomQolomACsIQgBsIImokMApZApcQomIlsGAAIgCAAg");
	var mask_5_graphics_15 = new cjs.Graphics().p("EAKIArWQsJgJoeosQofosAKsIQAJsJIsoeMAo6Ap7QojIWr2AAIgagBg");
	var mask_5_graphics_16 = new cjs.Graphics().p("EAJ6ArWQsIgSoZozQoYoyAUsIQARsIIyoXMAobAqYQofIHrnAAIgzgBg");
	var mask_5_graphics_17 = new cjs.Graphics().p("EAJsArVQsIgboRo4QoSo4AcsIQAasII5oRMAn8Aq2QodH4rXAAIhMgCg");
	var mask_5_graphics_18 = new cjs.Graphics().p("EAJfArVQsIgloLo+QoLo+AlsIQAjsHI+oLMAndArTQoaHqrIAAQgxAAgygCg");
	var mask_5_graphics_19 = new cjs.Graphics().p("EAJRArTQsHgtoEpEQoFpEAusHQAssHJEoEMAm9ArwQoWHbq6AAQg9AAg+gEg");
	var mask_5_graphics_20 = new cjs.Graphics().p("EAJEArSQsGg2n+pKQn+pKA2sHQA1sFJKn+MAmdAsMQoTHNqrAAQhIAAhKgFg");
	var mask_5_graphics_21 = new cjs.Graphics().p("EAI3ArQQsGg+n3pQQn4pQBAsGQA+sFJQn3MAl8AsoQoPG/qdAAQhUAAhVgHg");
	var mask_5_graphics_22 = new cjs.Graphics().p("EAIqArPQsFhInxpWQnwpWBIsFQBHsEJVnwMAlbAtEQoKGxqQAAQheAAhhgIg");
	var mask_5_graphics_23 = new cjs.Graphics().p("EAIdArMQsFhQnppcQnqpbBSsEQBPsDJbnqMAk6AtfQoGGlqCAAQhqAAhsgMg");
	var mask_5_graphics_24 = new cjs.Graphics().p("EAIQArKQsEhZniphQnjphBasDQBZsDJhniMAkYAt5QoCGYp1AAQh0AAh4gOg");
	var mask_5_graphics_25 = new cjs.Graphics().p("EAIDArHQsChincpmQncpnBksCQBhsBJmncMAj2AuVQn9GKpoAAQh/AAiDgRg");
	var mask_5_graphics_26 = new cjs.Graphics().p("EAH2ArEQsBhrnUprQnVpsBssBQBqsAJrnVMAjVAuuQn5F+pbAAQiJAAiPgUg");
	var mask_5_graphics_27 = new cjs.Graphics().p("EAHqArBQsAh0nOpxQnNpxB1r/QByr/JxnOMAiyAvIQn0FxpOAAQiUAAiZgXg");
	var mask_5_graphics_28 = new cjs.Graphics().p("EAHdAq+Qr+h9nHp2QnGp2B+r/QB7r9J2nGMAiQAvhQnvFkpCABQifAAikgbg");
	var mask_5_graphics_29 = new cjs.Graphics().p("EAHRAq6Qr9iFm/p8Qm/p7CGr9QCEr8J8m/MAhsAv6QnqFZo2AAQioAAivgfg");
	var mask_5_graphics_30 = new cjs.Graphics().p("EAHEAq2Qr7iOm4qAQm3qBCPr7QCMr7KBm3MAhJAwSQnkFNoqAAQizAAi6gjg");
	var mask_5_graphics_31 = new cjs.Graphics().p("EAG4AqyQr5iXmxqFQmwqGCYr5QCVr5KGmwMAglAwqQneFBofAAQi8AAjFgng");
	var mask_5_graphics_32 = new cjs.Graphics().p("EAGsAquQr4igmpqKQmpqLChr3QCer3KLmpMAgCAxCQnaE1oSAAQjHAAjPgrg");
	var mask_5_graphics_33 = new cjs.Graphics().p("EAGgAqpQr2iomhqPQmiqQCpr1QCnr2KQmhMAfeAxaQnUEpoHAAQjRAAjZgwg");
	var mask_5_graphics_34 = new cjs.Graphics().p("EAGVAqkQr1iwmaqUQmZqUCxr0QCwr0KUmaMAe6AxxQnOEfn8AAQjaAAjjg2g");
	var mask_5_graphics_35 = new cjs.Graphics().p("EAGJAqfQryi5mTqZQmSqYC6ryQC5rxKYmTMAeVAyHQnHEUnxAAQjkAAjtg7g");
	var mask_5_graphics_36 = new cjs.Graphics().p("EAF9AqaQrwjCmKqdQmLqeDDrvQDBrvKdmLMAdwAydQnBEJnlAAQjvAAj3hAg");
	var mask_5_graphics_37 = new cjs.Graphics().p("EAFyAqVQrujLmDqiQmDqiDMrtQDJrtKimDMAdLAyzQm7D+naAAQj4AAkBhFg");
	var mask_5_graphics_38 = new cjs.Graphics().p("EAFmAqPQrrjTl7qnQl7qmDUrrQDSrqKml7MAcmAzHQm0D0nQAAQkCAAkLhLg");
	var mask_5_graphics_39 = new cjs.Graphics().p("EAFbAqJQrojcl0qqQl0qrDdroQDbroKql0MAcAAzdQmtDpnFAAQkMAAkUhRg");
	var mask_5_graphics_40 = new cjs.Graphics().p("EAFQAqDQrmjllsquQlrqvDlrmQDjrlKtlsMAbcAzxQmmDfm7AAQkVAAkehXg");
	var mask_5_graphics_41 = new cjs.Graphics().p("EAFFAp8QrjjtlkqyQlkqzDurjQDrrjKylkMAa1A0FQmfDWmwAAQkfAAknhfg");
	var mask_5_graphics_42 = new cjs.Graphics().p("EAE6Ap2Qrgj2lcq2Qlcq3D2rhQD0rgK2lcMAaPA0YQmYDNmmAAQkpAAkwhlg");
	var mask_5_graphics_43 = new cjs.Graphics().p("EAEwApvQrej+lUq7QlUq6D+reQD9rdK6lUMAZoA0rQmQDDmcAAQkyAAk5hsg");
	var mask_5_graphics_44 = new cjs.Graphics().p("EAElApoQrbkHlMq+QlMq/EHraQEFraK+lMMAZCA09QmJC6mSAAQk8AAlChzg");
	var mask_5_graphics_45 = new cjs.Graphics().p("EAEbApgQrYkOlErCQlErDEPrXQEOrXLBlEMAYbA1PQmBCxmIAAQlGAAlKh7g");
	var mask_5_graphics_46 = new cjs.Graphics().p("EAERApZQrVkXk8rGQk8rGEYrUQEVrULFk8MAX0A1hQl5Col+AAQlQAAlSiCg");
	var mask_5_graphics_47 = new cjs.Graphics().p("EAEGApRQrRkfk0rKQkzrJEfrRQEerRLJk0MAXMA1zQlxCfl0AAQlZAAlciKg");
	var mask_5_graphics_48 = new cjs.Graphics().p("EAD8ApJQrOknkrrNQksrNEorOQEmrOLMkrMAWmA2DQlqCXlpAAQlkAAlkiSg");
	var mask_5_graphics_49 = new cjs.Graphics().p("EADzApBQrLkwkjrQQkkrQEwrLQEvrKLPkjMAV+A2TQliCPlfAAQluAAlriag");
	var mask_5_graphics_50 = new cjs.Graphics().p("EADpAo4QrHk3kbrUQkbrUE4rGQE2rHLTkbMAVWA2jQlZCHlWAAQl3AAl0ijg");
	var mask_5_graphics_51 = new cjs.Graphics().p("EADfAowQrDlAkTrXQkTrXFBrDQE+rDLWkTMAUuA2zQlRB/lLAAQmCAAl8irg");
	var mask_5_graphics_52 = new cjs.Graphics().p("EADWAonQrAlIkKraQkLraFJq/QFGrALZkKMAUGA3CQlIB3lCAAQmMAAmDi0g");
	var mask_5_graphics_53 = new cjs.Graphics().p("EADNAoeQq9lQkCrdQkCrdFRq8QFPq7LbkCMATeA3QQk/Bwk5AAQmVAAmLi9g");
	var mask_5_graphics_54 = new cjs.Graphics().p("EADDAoVQq4lYj5rgQj6rgFZq4QFWq3Lfj6MAS1A3eQk2BpkvAAQmgAAmTjGg");
	var mask_5_graphics_55 = new cjs.Graphics().p("EAC6AoLQq0lgjxriQjxrjFgq0QFfq0LhjxMASMA3sQksBiklAAQmrAAmajQg");
	var mask_5_graphics_56 = new cjs.Graphics().p("EACyAoBQqxlnjormQjprlFoqwQFnqvLkjpMARjA35QkjBbkcAAQm0AAmhjag");
	var mask_5_graphics_57 = new cjs.Graphics().p("EACpAn4QqslwjgroQjgroFwqsQFuqrLnjgMAQ6A4FQkaBVkSAAQm/AAmojjg");
	var mask_5_graphics_58 = new cjs.Graphics().p("EACgAntQqnl3jYrrQjYrqF4qmQF2qpLqjXMAQRA4RQkRBPkIAAQnKAAmvjug");
	var mask_5_graphics_59 = new cjs.Graphics().p("EACYAnjQqjl/jQrtQjPrtGAqiQF+qkLsjPMAPnA4dQkHBJj+AAQnVAAm1j4g");
	var mask_5_graphics_60 = new cjs.Graphics().p("EACQAnZQqfmHjHrwQjGrvGHqdQGGqgLujGMAO+A4oQj9BDj1AAQnfAAm8kCg");
	var mask_5_graphics_61 = new cjs.Graphics().p("EACIAnOQqbmPi+rxQi+ryGPqZQGOqbLwi+MAOVA40Qj0A9jqAAQnrAAnCkNg");
	var mask_5_graphics_62 = new cjs.Graphics().p("EACAAnDQqWmWi1r0Qi2rzGXqVQGVqWLyi2MANrA4+QjpA4jhAAQn2AAnIkYg");
	var mask_5_graphics_63 = new cjs.Graphics().p("EAB4Am4QqRmeitr2Qitr1GfqQQGcqSL1isMANBA5HQjgAzjWAAQoBAAnPkjg");
	var mask_5_graphics_64 = new cjs.Graphics().p("EABwAmtQqMmmikr3Qikr4GmqLQGkqNL2ikMAMXA5RQjVAujMAAQoNAAnVkug");
	var mask_5_graphics_65 = new cjs.Graphics().p("EABpAmhQqImtibr5Qibr5GtqGQGqqJL6ibMALtA5ZQjLAqjDAAQoYAAnak6g");
	var mask_5_graphics_66 = new cjs.Graphics().p("EABiAmVQqDm0iTr7QiSr7G0qBQGyqDL7iTMALDA5iQjAAli4AAQokAAnglGg");
	var mask_5_graphics_67 = new cjs.Graphics().p("EABaAmJQp9m7iKr9QiKr9G8p8QG5p+L9iKMAKZA5qQi2AhiuAAQowAAnmlSg");
	var mask_5_graphics_68 = new cjs.Graphics().p("EABTAl9Qp4nDiBr+QiBr+HDp3QHAp5L+iBMAJvA5xQirAcikAAQo8AAnrldg");
	var mask_5_graphics_69 = new cjs.Graphics().p("EABNAlxQp0nKh4sAQh4r/HKpyQHIp0L/h4MAJFA53QigAZiaAAQpIAAnwlpg");
	var mask_5_graphics_70 = new cjs.Graphics().p("EABGAlkQpunRhvsBQhwsBHRpsQHPpvMBhvMAIaA5+QiVAViPAAQpVAAn1l2g");
	var mask_5_graphics_71 = new cjs.Graphics().p("EAA/AlXQppnYhmsCQhnsCHYpoQHWppMChnMAHwA6EQiKATiFAAQphAAn6mDg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_5_graphics_9,x:202.3,y:277.5}).wait(1).to({graphics:mask_5_graphics_10,x:201.6,y:277.5}).wait(1).to({graphics:mask_5_graphics_11,x:200.9,y:277.5}).wait(1).to({graphics:mask_5_graphics_12,x:200.2,y:277.5}).wait(1).to({graphics:mask_5_graphics_13,x:199.4,y:277.5}).wait(1).to({graphics:mask_5_graphics_14,x:198.7,y:277.5}).wait(1).to({graphics:mask_5_graphics_15,x:197.9,y:277.5}).wait(1).to({graphics:mask_5_graphics_16,x:197.1,y:277.5}).wait(1).to({graphics:mask_5_graphics_17,x:196.4,y:277.5}).wait(1).to({graphics:mask_5_graphics_18,x:195.6,y:277.5}).wait(1).to({graphics:mask_5_graphics_19,x:194.8,y:277.5}).wait(1).to({graphics:mask_5_graphics_20,x:194,y:277.5}).wait(1).to({graphics:mask_5_graphics_21,x:193.2,y:277.5}).wait(1).to({graphics:mask_5_graphics_22,x:192.3,y:277.5}).wait(1).to({graphics:mask_5_graphics_23,x:191.5,y:277.6}).wait(1).to({graphics:mask_5_graphics_24,x:190.7,y:277.6}).wait(1).to({graphics:mask_5_graphics_25,x:189.8,y:277.6}).wait(1).to({graphics:mask_5_graphics_26,x:189,y:277.6}).wait(1).to({graphics:mask_5_graphics_27,x:188.1,y:277.6}).wait(1).to({graphics:mask_5_graphics_28,x:187.3,y:277.7}).wait(1).to({graphics:mask_5_graphics_29,x:186.4,y:277.7}).wait(1).to({graphics:mask_5_graphics_30,x:185.5,y:277.7}).wait(1).to({graphics:mask_5_graphics_31,x:184.6,y:277.7}).wait(1).to({graphics:mask_5_graphics_32,x:183.8,y:277.7}).wait(1).to({graphics:mask_5_graphics_33,x:182.9,y:277.7}).wait(1).to({graphics:mask_5_graphics_34,x:182,y:277.8}).wait(1).to({graphics:mask_5_graphics_35,x:181,y:277.8}).wait(1).to({graphics:mask_5_graphics_36,x:180.1,y:277.8}).wait(1).to({graphics:mask_5_graphics_37,x:179.2,y:277.8}).wait(1).to({graphics:mask_5_graphics_38,x:178.3,y:277.8}).wait(1).to({graphics:mask_5_graphics_39,x:177.3,y:277.8}).wait(1).to({graphics:mask_5_graphics_40,x:176.4,y:277.8}).wait(1).to({graphics:mask_5_graphics_41,x:175.4,y:277.9}).wait(1).to({graphics:mask_5_graphics_42,x:174.5,y:277.9}).wait(1).to({graphics:mask_5_graphics_43,x:173.5,y:277.9}).wait(1).to({graphics:mask_5_graphics_44,x:172.6,y:277.9}).wait(1).to({graphics:mask_5_graphics_45,x:171.6,y:277.9}).wait(1).to({graphics:mask_5_graphics_46,x:170.6,y:277.9}).wait(1).to({graphics:mask_5_graphics_47,x:169.6,y:277.9}).wait(1).to({graphics:mask_5_graphics_48,x:168.7,y:277.9}).wait(1).to({graphics:mask_5_graphics_49,x:167.7,y:277.9}).wait(1).to({graphics:mask_5_graphics_50,x:166.7,y:277.9}).wait(1).to({graphics:mask_5_graphics_51,x:165.7,y:277.9}).wait(1).to({graphics:mask_5_graphics_52,x:164.7,y:277.9}).wait(1).to({graphics:mask_5_graphics_53,x:163.7,y:277.9}).wait(1).to({graphics:mask_5_graphics_54,x:162.7,y:277.9}).wait(1).to({graphics:mask_5_graphics_55,x:161.6,y:277.9}).wait(1).to({graphics:mask_5_graphics_56,x:160.6,y:277.9}).wait(1).to({graphics:mask_5_graphics_57,x:159.6,y:277.9}).wait(1).to({graphics:mask_5_graphics_58,x:158.6,y:277.9}).wait(1).to({graphics:mask_5_graphics_59,x:157.5,y:277.9}).wait(1).to({graphics:mask_5_graphics_60,x:156.5,y:277.9}).wait(1).to({graphics:mask_5_graphics_61,x:155.5,y:277.9}).wait(1).to({graphics:mask_5_graphics_62,x:154.4,y:277.9}).wait(1).to({graphics:mask_5_graphics_63,x:153.4,y:277.9}).wait(1).to({graphics:mask_5_graphics_64,x:152.3,y:277.9}).wait(1).to({graphics:mask_5_graphics_65,x:151.3,y:277.9}).wait(1).to({graphics:mask_5_graphics_66,x:150.2,y:277.9}).wait(1).to({graphics:mask_5_graphics_67,x:149.2,y:277.9}).wait(1).to({graphics:mask_5_graphics_68,x:148.1,y:277.8}).wait(1).to({graphics:mask_5_graphics_69,x:147.1,y:277.8}).wait(1).to({graphics:mask_5_graphics_70,x:146,y:277.8}).wait(1).to({graphics:mask_5_graphics_71,x:144.9,y:277.8}).wait(449));

	// Layer 15
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(20,1,1).p("AIliYQAMh4hhgKQikgSjEBhQjDBinKGH");
	this.shape_6.setTransform(199.8,230.5);
	this.shape_6._off = true;

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(9).to({_off:false},0).wait(511));

	// Letter
	this.instance_3 = new lib.Symbol1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(275,275);
	this.instance_3.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(520));

	// Background
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_7.setTransform(275,275,3.373,2.543);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_8.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).wait(520));

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