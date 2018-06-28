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
	this.shape.graphics.f("#FFFFFF").s().p("AkpMaQiahkgBi1QABheAihSQrEIPlgAAQikAAhVhVQhYhYAAihQAAiGBAicIAzhyQhEA4gvAAQhJAAAAhhQAAiPCSinIExlcICtj2QBAg4A4AAQCQAAgBCNQABAvjRG6IkBIXQhECeAABBQAABMBEAAQBsAADKhtQEriYENjTQEOjVDcj/QA6hJBAiYQBGinAvhBQA4hDBBAAQCVAAgBCNQAABDhXCqIi/FdQkYH0AACAQAABzCVAAQCyAAGyjlQEciwD8jgIIEnsQBSgvAmAAQBmAAAAByQAAAjkoFpIgRARQhvCPi5ChQi+CkjWCHQjlCSjQBSQjnBbitAAQjHAAiEhSg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188.8,-87.5,377.6,175.1);


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


(lib.ar6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-46.9,23.9,1,1,9.7,0,0,-0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:-139.2,guide:{path:[-47,24,-55.6,83.2,-26.7,58.8,-15.2,49.1,-5.3,37.6], orient:'auto'}},75).to({scaleX:1,scaleY:1,rotation:-151.9,guide:{path:[-5.1,37.6,10,20.1,21.3,-1.4,39.9,-37,49.4,-50.5], orient:'auto'}},59).wait(1));

	// Layer 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_78 = new cjs.Graphics().p("AkwDIIAAh4IJhAAIAAB4g");
	var mask_graphics_79 = new cjs.Graphics().p("AkwBDIAAiFIJhAAIAACFg");
	var mask_graphics_80 = new cjs.Graphics().p("AkwBKIAAiTIJhAAIAACTg");
	var mask_graphics_81 = new cjs.Graphics().p("AkwBRIAAihIJhAAIAAChg");
	var mask_graphics_82 = new cjs.Graphics().p("AkwBZIAAixIJhAAIAACxg");
	var mask_graphics_83 = new cjs.Graphics().p("AkwBgIAAi+IJhAAIAAC+g");
	var mask_graphics_84 = new cjs.Graphics().p("AkwBnIAAjNIJhAAIAADNg");
	var mask_graphics_85 = new cjs.Graphics().p("AkwBuIAAjbIJhAAIAADbg");
	var mask_graphics_86 = new cjs.Graphics().p("AkwB1IAAjpIJhAAIAADpg");
	var mask_graphics_87 = new cjs.Graphics().p("AkwB8IAAj3IJhAAIAAD3g");
	var mask_graphics_88 = new cjs.Graphics().p("AkwCDIAAkFIJhAAIAAEFg");
	var mask_graphics_89 = new cjs.Graphics().p("AkwCKIAAkTIJhAAIAAETg");
	var mask_graphics_90 = new cjs.Graphics().p("AkwCRIAAkhIJhAAIAAEhg");
	var mask_graphics_91 = new cjs.Graphics().p("AkwCZIAAkxIJhAAIAAExg");
	var mask_graphics_92 = new cjs.Graphics().p("AkwCgIAAk/IJhAAIAAE/g");
	var mask_graphics_93 = new cjs.Graphics().p("AkwCnIAAlNIJhAAIAAFNg");
	var mask_graphics_94 = new cjs.Graphics().p("AkwCuIAAlbIJhAAIAAFbg");
	var mask_graphics_95 = new cjs.Graphics().p("AkwC1IAAlpIJhAAIAAFpg");
	var mask_graphics_96 = new cjs.Graphics().p("AkwC8IAAl3IJhAAIAAF3g");
	var mask_graphics_97 = new cjs.Graphics().p("AkwDDIAAmFIJhAAIAAGFg");
	var mask_graphics_98 = new cjs.Graphics().p("AkwDKIAAmTIJhAAIAAGTg");
	var mask_graphics_99 = new cjs.Graphics().p("AkwDRIAAmhIJhAAIAAGhg");
	var mask_graphics_100 = new cjs.Graphics().p("AkwDZIAAmwIJhAAIAAGwg");
	var mask_graphics_101 = new cjs.Graphics().p("AkwDgIAAm/IJhAAIAAG/g");
	var mask_graphics_102 = new cjs.Graphics().p("AkwDnIAAnNIJhAAIAAHNg");
	var mask_graphics_103 = new cjs.Graphics().p("AkwDuIAAnbIJhAAIAAHbg");
	var mask_graphics_104 = new cjs.Graphics().p("AkwD1IAAnpIJhAAIAAHpg");
	var mask_graphics_105 = new cjs.Graphics().p("AkwD8IAAn3IJhAAIAAH3g");
	var mask_graphics_106 = new cjs.Graphics().p("AkwEDIAAoFIJhAAIAAIFg");
	var mask_graphics_107 = new cjs.Graphics().p("AkwEKIAAoTIJhAAIAAITg");
	var mask_graphics_108 = new cjs.Graphics().p("AkwERIAAohIJhAAIAAIhg");
	var mask_graphics_109 = new cjs.Graphics().p("AkwEYIAAovIJhAAIAAIvg");
	var mask_graphics_110 = new cjs.Graphics().p("AkwEfIAAo9IJhAAIAAI9g");
	var mask_graphics_111 = new cjs.Graphics().p("AkwEmIAApLIJhAAIAAJLg");
	var mask_graphics_112 = new cjs.Graphics().p("AkwEtIAApaIJhAAIAAJag");
	var mask_graphics_113 = new cjs.Graphics().p("AkwE1IAAppIJhAAIAAJpg");
	var mask_graphics_114 = new cjs.Graphics().p("AkwE8IAAp3IJhAAIAAJ3g");
	var mask_graphics_115 = new cjs.Graphics().p("AkwFDIAAqFIJhAAIAAKFg");
	var mask_graphics_116 = new cjs.Graphics().p("AkwFKIAAqTIJhAAIAAKTg");
	var mask_graphics_117 = new cjs.Graphics().p("AkwFRIAAqhIJhAAIAAKhg");
	var mask_graphics_118 = new cjs.Graphics().p("AkwFYIAAqvIJhAAIAAKvg");
	var mask_graphics_119 = new cjs.Graphics().p("AkwFfIAAq9IJhAAIAAK9g");
	var mask_graphics_120 = new cjs.Graphics().p("AkwFmIAArLIJhAAIAALLg");
	var mask_graphics_121 = new cjs.Graphics().p("AkwFtIAAraIJhAAIAALag");
	var mask_graphics_122 = new cjs.Graphics().p("AkwF1IAArpIJhAAIAALpg");
	var mask_graphics_123 = new cjs.Graphics().p("AkwF8IAAr3IJhAAIAAL3g");
	var mask_graphics_124 = new cjs.Graphics().p("AkwGDIAAsFIJhAAIAAMFg");
	var mask_graphics_125 = new cjs.Graphics().p("AkwGKIAAsTIJhAAIAAMTg");
	var mask_graphics_126 = new cjs.Graphics().p("AkwGRIAAshIJhAAIAAMhg");
	var mask_graphics_127 = new cjs.Graphics().p("AkwGYIAAsvIJhAAIAAMvg");
	var mask_graphics_128 = new cjs.Graphics().p("AkwGfIAAs9IJhAAIAAM9g");
	var mask_graphics_129 = new cjs.Graphics().p("AkwGmIAAtMIJhAAIAANMg");
	var mask_graphics_130 = new cjs.Graphics().p("AkwGtIAAtZIJhAAIAANZg");
	var mask_graphics_131 = new cjs.Graphics().p("AkwG1IAAtpIJhAAIAANpg");
	var mask_graphics_132 = new cjs.Graphics().p("AkwG8IAAt3IJhAAIAAN3g");
	var mask_graphics_133 = new cjs.Graphics().p("AkwHVIAAupIJhAAIAAOpg");
	var mask_graphics_134 = new cjs.Graphics().p("AkwHvIAAvdIJhAAIAAPdg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(78).to({graphics:mask_graphics_78,x:28.3,y:20}).wait(1).to({graphics:mask_graphics_79,x:28.3,y:33.3}).wait(1).to({graphics:mask_graphics_80,x:28.3,y:32.5}).wait(1).to({graphics:mask_graphics_81,x:28.3,y:31.8}).wait(1).to({graphics:mask_graphics_82,x:28.3,y:31.1}).wait(1).to({graphics:mask_graphics_83,x:28.3,y:30.4}).wait(1).to({graphics:mask_graphics_84,x:28.3,y:29.7}).wait(1).to({graphics:mask_graphics_85,x:28.3,y:29}).wait(1).to({graphics:mask_graphics_86,x:28.3,y:28.3}).wait(1).to({graphics:mask_graphics_87,x:28.3,y:27.6}).wait(1).to({graphics:mask_graphics_88,x:28.3,y:26.9}).wait(1).to({graphics:mask_graphics_89,x:28.3,y:26.1}).wait(1).to({graphics:mask_graphics_90,x:28.3,y:25.4}).wait(1).to({graphics:mask_graphics_91,x:28.3,y:24.7}).wait(1).to({graphics:mask_graphics_92,x:28.3,y:24}).wait(1).to({graphics:mask_graphics_93,x:28.3,y:23.3}).wait(1).to({graphics:mask_graphics_94,x:28.3,y:22.6}).wait(1).to({graphics:mask_graphics_95,x:28.3,y:21.9}).wait(1).to({graphics:mask_graphics_96,x:28.3,y:21.2}).wait(1).to({graphics:mask_graphics_97,x:28.3,y:20.5}).wait(1).to({graphics:mask_graphics_98,x:28.3,y:19.7}).wait(1).to({graphics:mask_graphics_99,x:28.3,y:19}).wait(1).to({graphics:mask_graphics_100,x:28.3,y:18.3}).wait(1).to({graphics:mask_graphics_101,x:28.3,y:17.6}).wait(1).to({graphics:mask_graphics_102,x:28.3,y:16.9}).wait(1).to({graphics:mask_graphics_103,x:28.3,y:16.2}).wait(1).to({graphics:mask_graphics_104,x:28.3,y:15.5}).wait(1).to({graphics:mask_graphics_105,x:28.3,y:14.8}).wait(1).to({graphics:mask_graphics_106,x:28.3,y:14}).wait(1).to({graphics:mask_graphics_107,x:28.3,y:13.3}).wait(1).to({graphics:mask_graphics_108,x:28.3,y:12.6}).wait(1).to({graphics:mask_graphics_109,x:28.3,y:11.9}).wait(1).to({graphics:mask_graphics_110,x:28.3,y:11.2}).wait(1).to({graphics:mask_graphics_111,x:28.3,y:10.5}).wait(1).to({graphics:mask_graphics_112,x:28.3,y:9.8}).wait(1).to({graphics:mask_graphics_113,x:28.3,y:9}).wait(1).to({graphics:mask_graphics_114,x:28.3,y:8.3}).wait(1).to({graphics:mask_graphics_115,x:28.3,y:7.6}).wait(1).to({graphics:mask_graphics_116,x:28.3,y:6.9}).wait(1).to({graphics:mask_graphics_117,x:28.3,y:6.2}).wait(1).to({graphics:mask_graphics_118,x:28.3,y:5.5}).wait(1).to({graphics:mask_graphics_119,x:28.3,y:4.8}).wait(1).to({graphics:mask_graphics_120,x:28.3,y:4.1}).wait(1).to({graphics:mask_graphics_121,x:28.3,y:3.4}).wait(1).to({graphics:mask_graphics_122,x:28.3,y:2.6}).wait(1).to({graphics:mask_graphics_123,x:28.3,y:1.9}).wait(1).to({graphics:mask_graphics_124,x:28.3,y:1.2}).wait(1).to({graphics:mask_graphics_125,x:28.3,y:0.5}).wait(1).to({graphics:mask_graphics_126,x:28.3,y:-0.2}).wait(1).to({graphics:mask_graphics_127,x:28.3,y:-0.9}).wait(1).to({graphics:mask_graphics_128,x:28.3,y:-1.6}).wait(1).to({graphics:mask_graphics_129,x:28.3,y:-2.3}).wait(1).to({graphics:mask_graphics_130,x:28.3,y:-3}).wait(1).to({graphics:mask_graphics_131,x:28.3,y:-3.8}).wait(1).to({graphics:mask_graphics_132,x:28.3,y:-4.5}).wait(1).to({graphics:mask_graphics_133,x:28.3,y:-7}).wait(1).to({graphics:mask_graphics_134,x:28.3,y:-9.6}).wait(1));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AnOCVQhpJJErjSQEqjTHMt8");
	this.shape.setTransform(-0.9,8);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(78).to({_off:false},0).wait(57));

	// Layer 3 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("Ao+goQBmj6D6hoQD4hpD6BnQD1BkBpDxIyyH3Qhjj0Blj0g");
	var mask_1_graphics_1 = new cjs.Graphics().p("ApCgdQBej9D1hyQD0hxD+BdQD4BcByDtIyfIiQhrjwBbj4g");
	var mask_1_graphics_2 = new cjs.Graphics().p("ApEgRQBUkBDxh6QDxh6EABUQD7BSB6DpIyKJNQhzjtBSj6g");
	var mask_1_graphics_3 = new cjs.Graphics().p("ApGgFQBLkEDtiDQDsiCEDBKQD+BJCDDlIx1J2Qh8joBJj9g");
	var mask_1_graphics_4 = new cjs.Graphics().p("ApGAGQBCkFDniLQDoiLEFBBQEBBACKDfIxcKfQiEjjA/kBg");
	var mask_1_graphics_5 = new cjs.Graphics().p("ApFATQA4kHDjiUQDiiTEHA3QEDA3CTDaIxELHQiMjeA2kDg");
	var mask_1_graphics_6 = new cjs.Graphics().p("ApCAgQAukJDdicQDdibEIAuQEFAtCbDVIwpLuQiUjZAtkFg");
	var mask_1_graphics_7 = new cjs.Graphics().p("Ao/AuQAlkLDXijQDXikEKAlQEGAjCiDPIwMMUQicjTAjkGg");
	var mask_1_graphics_8 = new cjs.Graphics().p("Ao6A7QAbkLDRirQDRirELAaQEHAaCqDJIvwM5QijjNAakIg");
	var mask_1_graphics_9 = new cjs.Graphics().p("Ao0BKQARkNDKiyQDLizEMARQEIARCxDCIvRNdQirjHARkIg");
	var mask_1_graphics_10 = new cjs.Graphics().p("AotBYQAHkMDEi6QDEi6ENAHQEIAHC4C8IuxOAQiyjBAHkJg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AolBnQgCkMC9jBQC9jBEMgCQEJgDC+C1IuQOhQi4i6gDkJg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AocB3QgMkNC2jHQC2jIENgMQEIgMDECuIttPCQi/i0gNkIg");
	var mask_1_graphics_13 = new cjs.Graphics().p("AoRCGQgWkLCvjOQCujOEMgWQEIgWDKCnItJPhQjGitgWkIg");
	var mask_1_graphics_14 = new cjs.Graphics().p("AoFCWQggkLCnjUQCnjTELggQEHgfDQCfIslP+QjMilgfkHg");
	var mask_1_graphics_15 = new cjs.Graphics().p("An4CnQgqkKCgjaQCfjaEJgpQEGgpDWCYIsAQbQjRiegpkFg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AnqC3QgzkICXjfQCXjgEIgzQEDgyDcCQIrZQ2QjXiXgykDg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AnhDCQg5kHCSjjQCSjjEHg5QECg4DfCLIrARGQjbiRg4kCg");
	var mask_1_graphics_18 = new cjs.Graphics().p("AnXDMQg/kFCNjmQCMjmEFhAQEBg+DjCGIqnRWQjeiMg+kBg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AnODXQhFkECHjpQCHjqEFhFQD+hEDlCBIqMRlQjhiHhEj/g");
	var mask_1_graphics_20 = new cjs.Graphics().p("AnKDiQhLkCCCjtQCCjsEDhMQD8hKDoB8IpyR0QjkiBhKj+g");
	var mask_1_graphics_21 = new cjs.Graphics().p("AnFDtQhSkBB9jvQB8jwEBhRQD7hQDrB2IpXSDQjoh8hPj8g");
	var mask_1_graphics_22 = new cjs.Graphics().p("AnBD4QhXj/B3jyQB3jyD/hYQD5hVDuBwIo9SRQjqh3hWj6g");
	var mask_1_graphics_23 = new cjs.Graphics().p("Am7EDQhdj+Bxj0QBxj1D9hdQD3hbDwBqIohSeQjthyhbj3g");
	var mask_1_graphics_24 = new cjs.Graphics().p("Am2ENQhjj7Bsj2QBrj4D7hjQD1hhDzBlIoGSqQjwhshhj2g");
	var mask_1_graphics_25 = new cjs.Graphics().p("AmwEYQhpj4Bmj5QBmj7D5hoQDyhnD1BfInqS2Qjyhmhnj0g");
	var mask_1_graphics_26 = new cjs.Graphics().p("AmqEjQhuj2Bgj7QBgj9D2huQDwhtD3BaInOTBQj0hhhtjxg");
	var mask_1_graphics_27 = new cjs.Graphics().p("AmjEuQh0jzBaj+QBaj+Dzh1QDuhyD5BVImyTLQj2hbhyjvg");
	var mask_1_graphics_28 = new cjs.Graphics().p("AmdE5Qh5jxBUj/QBUkBDxh6QDrh3D7BOImWTWQj4hWh4jsg");
	var mask_1_graphics_29 = new cjs.Graphics().p("AmWFEQh/juBOkBQBPkDDuh/QDoh9D8BJIl4TeQj7hQh9jpg");
	var mask_1_graphics_30 = new cjs.Graphics().p("AmOFPQiFjrBIkDQBJkEDqiFQDmiCD+BCIlcTnQj8hKiCjmg");
	var mask_1_graphics_31 = new cjs.Graphics().p("AmHFaQiKjoBCkFQBDkGDniKQDjiHD/A8Ik+TvQj+hEiIjjg");
	var mask_1_graphics_32 = new cjs.Graphics().p("Al/FlQiPjlA8kGQA8kHDliQQDfiNEBA3IkjT2Qj+g+iNjgg");
	var mask_1_graphics_33 = new cjs.Graphics().p("Al2FwQiVjhA2kIQA2kJDhiVQDciRECAwIkFT9QkAg4iRjdg");
	var mask_1_graphics_34 = new cjs.Graphics().p("AluF7QiajeAwkJQAwkKDeiaQDYiXEDArIjnUCQkBgyiXjZg");
	var mask_1_graphics_35 = new cjs.Graphics().p("AllGGQifjbApkKQAqkKDaifQDWidEDAlIjJUIQkCgticjVg");
	var mask_1_graphics_36 = new cjs.Graphics().p("AldGRQikjXAkkLQAjkMDXikQDSihEEAfIisUMQkDgnihjRg");
	var mask_1_graphics_37 = new cjs.Graphics().p("AlTGbQipjSAdkMQAdkMDTipQDOimEFAYIiNUQQkEghimjOg");
	var mask_1_graphics_38 = new cjs.Graphics().p("AlJGmQiujOAXkNQAXkNDOiuQDLiqEFASIhvUTQkFgbiqjKg");
	var mask_1_graphics_39 = new cjs.Graphics().p("Ak/GxQizjLARkMQAQkODLiyQDGiwEGANIhRUUQkFgUivjGg");
	var mask_1_graphics_40 = new cjs.Graphics().p("Ak1G8Qi3jHAKkNQAKkNDGi4QDDi0EFAHIgyUWQkFgOi0jCg");
	var mask_1_graphics_41 = new cjs.Graphics().p("AkqHGQi8jCAEkNQAEkODBi8QC+i4EGAAIgTUXQkGgIi4i+g");
	var mask_1_graphics_42 = new cjs.Graphics().p("AkgHRQjAi+gCkOQgCkNC9jAQC5i9EGgGIALUXQkGgCi9i5g");
	var mask_1_graphics_43 = new cjs.Graphics().p("AkUHbQjFi5gJkOQgIkNC4jEQC1jBEGgNIApUWIgMABQj+AAi8ixg");
	var mask_1_graphics_44 = new cjs.Graphics().p("AkJHlQjJi0gPkOQgPkNC0jJQCxjFEFgSIBIUUIgeABQjzAAi6img");
	var mask_1_graphics_45 = new cjs.Graphics().p("Aj9HuQjOivgVkNQgVkNCvjNQCsjJEFgYIBmUSIguABQjpAAi3icg");
	var mask_1_graphics_46 = new cjs.Graphics().p("AjxH3QjSirgbkMQgckMCrjRQCnjNEEgfICEUQQgfADgfAAQjfAAi0iTg");
	var mask_1_graphics_47 = new cjs.Graphics().p("AjlH/QjVilgikMQgikLCljVQCjjREDglICjUMQgoAFgmAAQjWAAixiKg");
	var mask_1_graphics_48 = new cjs.Graphics().p("AjZIHQjZiggokLQgokKCgjZQCejVECgrIDBUIQgwAHguAAQjMAAiuiBg");
	var mask_1_graphics_49 = new cjs.Graphics().p("AjMIPQjdicgukKQgukJCbjcQCYjZEBgwIDfUDQg3AIg1AAQjEAAiqh3g");
	var mask_1_graphics_50 = new cjs.Graphics().p("AjAIWQjgiXg0kIQg1kICWjgQCTjcEAg3ID+T9Qg/AMg9AAQi7AAinhvg");
	var mask_1_graphics_51 = new cjs.Graphics().p("AizIcQjjiRg7kHQg7kHCRjjQCOjfD/g9IEbT3QhHAOhDAAQi0AAiihng");
	var mask_1_graphics_52 = new cjs.Graphics().p("AimIiQjmiLhBkGQhBkFCLjnQCJjjD9hCIE5TvQhOAShLAAQirAAiehfg");
	var mask_1_graphics_53 = new cjs.Graphics().p("AiYIoQjqiGhHkFQhHkDCGjqQCDjmD9hIIFVToQhVAVhSAAQikAAiYhXg");
	var mask_1_graphics_54 = new cjs.Graphics().p("AiLItQjtiBhNkCQhNkCCBjtQB9jpD7hOIFyTfQhbAahZAAQicAAiUhQg");
	var mask_1_graphics_55 = new cjs.Graphics().p("Ah9IyQjwh7hTkBQhTkAB7jwQB4jrD5hVIGPTXQhiAehgAAQiVAAiOhJg");
	var mask_1_graphics_56 = new cjs.Graphics().p("AhvI2Qjzh2hZj+QhZj+B1jzQBzjuD2haIGtTMQhpAjhmAAQiOAAiJhCg");
	var mask_1_graphics_57 = new cjs.Graphics().p("AhhI5Qj2hvhfj9Qhfj7Bwj2QBtjxD1hgIHJTDQhvAohuAAQiHAAiDg9g");
	var mask_1_graphics_58 = new cjs.Graphics().p("AhEJAQj6hkhsj3Qhrj3Bkj7QBhj2DvhrIIFSqQh8Azh8AAQh4AAh4gvg");
	var mask_1_graphics_59 = new cjs.Graphics().p("AgmJEQj/hXh3jyQh3jzBXj+QBVj6Dqh3II+SPQiHBAiMAAQhpAAhrgkg");
	var mask_1_graphics_60 = new cjs.Graphics().p("AgHJGQkEhLiCjsQiDjsBKkCQBJj+DkiDIJ2RzQiSBOibAAQhaAAhdgbg");
	var mask_1_graphics_61 = new cjs.Graphics().p("AALJGQkGg+iOjlQiOjmA9kFQA9kCDdiNIKtRSQibBdisAAQhMAAhPgSg");
	var mask_1_graphics_62 = new cjs.Graphics().p("AAcJEQkIgxiZjeQiajeAxkJQAwkEDWiYILjQvQilBui9AAQg9AAhAgLg");
	var mask_1_graphics_63 = new cjs.Graphics().p("AAvI/QkLgkikjWQikjWAkkLQAjkGDOijIMXQKQitCBjPAAQguAAgvgHg");
	var mask_1_graphics_64 = new cjs.Graphics().p("ABCI5QkMgXivjOQiujOAWkMQAWkIDHisINIPiQizCTjjAAQgeAAgegCg");
	var mask_1_graphics_65 = new cjs.Graphics().p("ABVIwQkNgKi4jFQi4jFAJkNQAJkIC+i2IN4O3Qi5Coj5AAIgZAAg");
	var mask_1_graphics_66 = new cjs.Graphics().p("AllFtQjCi9gEkMQgEkJC1i/IOmOLQi6C6kIAEIgLAAQkGAAi+i4g");
	var mask_1_graphics_67 = new cjs.Graphics().p("AlZF2QjKiygRkMQgRkICrjIIPRNcQixDDkHARIgvABQjwAAi5ijg");
	var mask_1_graphics_68 = new cjs.Graphics().p("AlKF+QjUiogekLQgekHChjQIP7MrQinDMkHAdQgpAFgnAAQjbAAiziPg");
	var mask_1_graphics_69 = new cjs.Graphics().p("Ak7GFQjbiegrkKQgrkFCXjXIQhL4QidDTkFArQg5AJg3AAQjJAAish7g");
	var mask_1_graphics_70 = new cjs.Graphics().p("AkpGJQjjiTg4kHQg4kDCMjeIRFLEQiSDakDA4QhJAPhGAAQi3AAijhqg");
	var mask_1_graphics_71 = new cjs.Graphics().p("AkXGMQjpiIhFkEQhEj/CAjmIRnKOQiHDhkABEQhYAYhVAAQimAAibhag");
	var mask_1_graphics_72 = new cjs.Graphics().p("AkCGNQjwh8hSkBQhRj7B2jsISFJWQh8Doj8BQQhmAhhkAAQiWAAiQhLg");
	var mask_1_graphics_73 = new cjs.Graphics().p("AjtGMQj2hwhej9Qhdj3BqjwIShIcQhwDuj4BcQh0ArhyAAQiGAAiGg9g");
	var mask_1_graphics_74 = new cjs.Graphics().p("AjWGKQj7hkhrj4QhojyBdj2IS7HiQhlDzjzBpQiAA3iBAAQh4AAh5gxg");
	var mask_1_graphics_75 = new cjs.Graphics().p("Ai+GGQkAhXh2jzQh1jtBSj6ITRGnQhZD3juB0QiLBFiQAAQhpAAhtgmg");
	var mask_1_graphics_76 = new cjs.Graphics().p("AilGMQkDhLiDjtQiAjmBGj+ITkFqQhND6jnCAQiXBTifAAQhbAAhfgbg");
	var mask_1_graphics_77 = new cjs.Graphics().p("AiKGUQkHg+iOjmQiLjgA4kBIT1EsQhAD+jhCLQigBjiwAAQhMAAhQgTg");
	var mask_1_graphics_78 = new cjs.Graphics().p("AhvGaQkKgyiZjeQiWjZAtkEIUBDuQgzEBjaCWQipB0jBAAQg9AAhBgMg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:-35.8,y:0.7}).wait(1).to({graphics:mask_1_graphics_1,x:-36.2,y:1.8}).wait(1).to({graphics:mask_1_graphics_2,x:-36.7,y:2.9}).wait(1).to({graphics:mask_1_graphics_3,x:-37.2,y:4}).wait(1).to({graphics:mask_1_graphics_4,x:-37.8,y:5.1}).wait(1).to({graphics:mask_1_graphics_5,x:-38.4,y:6.1}).wait(1).to({graphics:mask_1_graphics_6,x:-39,y:7.1}).wait(1).to({graphics:mask_1_graphics_7,x:-39.6,y:8.1}).wait(1).to({graphics:mask_1_graphics_8,x:-40.3,y:9.1}).wait(1).to({graphics:mask_1_graphics_9,x:-41,y:10}).wait(1).to({graphics:mask_1_graphics_10,x:-41.8,y:10.9}).wait(1).to({graphics:mask_1_graphics_11,x:-42.6,y:11.8}).wait(1).to({graphics:mask_1_graphics_12,x:-43.4,y:12.7}).wait(1).to({graphics:mask_1_graphics_13,x:-44.2,y:13.4}).wait(1).to({graphics:mask_1_graphics_14,x:-45.1,y:14.2}).wait(1).to({graphics:mask_1_graphics_15,x:-46,y:14.9}).wait(1).to({graphics:mask_1_graphics_16,x:-47,y:15.6}).wait(1).to({graphics:mask_1_graphics_17,x:-47.6,y:16}).wait(1).to({graphics:mask_1_graphics_18,x:-48.2,y:16.4}).wait(1).to({graphics:mask_1_graphics_19,x:-48.7,y:16.7}).wait(1).to({graphics:mask_1_graphics_20,x:-48.7,y:17.1}).wait(1).to({graphics:mask_1_graphics_21,x:-48.6,y:17.4}).wait(1).to({graphics:mask_1_graphics_22,x:-48.6,y:17.8}).wait(1).to({graphics:mask_1_graphics_23,x:-48.6,y:18.1}).wait(1).to({graphics:mask_1_graphics_24,x:-48.6,y:18.4}).wait(1).to({graphics:mask_1_graphics_25,x:-48.6,y:18.7}).wait(1).to({graphics:mask_1_graphics_26,x:-48.6,y:19}).wait(1).to({graphics:mask_1_graphics_27,x:-48.6,y:19.2}).wait(1).to({graphics:mask_1_graphics_28,x:-48.6,y:19.5}).wait(1).to({graphics:mask_1_graphics_29,x:-48.5,y:19.7}).wait(1).to({graphics:mask_1_graphics_30,x:-48.5,y:19.9}).wait(1).to({graphics:mask_1_graphics_31,x:-48.5,y:20.1}).wait(1).to({graphics:mask_1_graphics_32,x:-48.5,y:20.3}).wait(1).to({graphics:mask_1_graphics_33,x:-48.5,y:20.4}).wait(1).to({graphics:mask_1_graphics_34,x:-48.4,y:20.6}).wait(1).to({graphics:mask_1_graphics_35,x:-48.4,y:20.7}).wait(1).to({graphics:mask_1_graphics_36,x:-48.4,y:20.7}).wait(1).to({graphics:mask_1_graphics_37,x:-48.4,y:20.8}).wait(1).to({graphics:mask_1_graphics_38,x:-48.4,y:20.8}).wait(1).to({graphics:mask_1_graphics_39,x:-48.4,y:20.9}).wait(1).to({graphics:mask_1_graphics_40,x:-48.4,y:20.9}).wait(1).to({graphics:mask_1_graphics_41,x:-48.3,y:21}).wait(1).to({graphics:mask_1_graphics_42,x:-48.3,y:21}).wait(1).to({graphics:mask_1_graphics_43,x:-48.3,y:21}).wait(1).to({graphics:mask_1_graphics_44,x:-48.3,y:21}).wait(1).to({graphics:mask_1_graphics_45,x:-48.3,y:21}).wait(1).to({graphics:mask_1_graphics_46,x:-48.3,y:21.1}).wait(1).to({graphics:mask_1_graphics_47,x:-48.3,y:21.2}).wait(1).to({graphics:mask_1_graphics_48,x:-48.3,y:21.3}).wait(1).to({graphics:mask_1_graphics_49,x:-48.3,y:21.4}).wait(1).to({graphics:mask_1_graphics_50,x:-48.3,y:21.6}).wait(1).to({graphics:mask_1_graphics_51,x:-48.3,y:21.7}).wait(1).to({graphics:mask_1_graphics_52,x:-48.3,y:21.9}).wait(1).to({graphics:mask_1_graphics_53,x:-48.3,y:22.1}).wait(1).to({graphics:mask_1_graphics_54,x:-48.3,y:22.3}).wait(1).to({graphics:mask_1_graphics_55,x:-48.3,y:22.5}).wait(1).to({graphics:mask_1_graphics_56,x:-48.3,y:22.7}).wait(1).to({graphics:mask_1_graphics_57,x:-48.2,y:23}).wait(1).to({graphics:mask_1_graphics_58,x:-48.2,y:23.5}).wait(1).to({graphics:mask_1_graphics_59,x:-48.2,y:24.1}).wait(1).to({graphics:mask_1_graphics_60,x:-48.2,y:24.8}).wait(1).to({graphics:mask_1_graphics_61,x:-47,y:25.6}).wait(1).to({graphics:mask_1_graphics_62,x:-45.6,y:26.4}).wait(1).to({graphics:mask_1_graphics_63,x:-44.3,y:27.2}).wait(1).to({graphics:mask_1_graphics_64,x:-43,y:28.2}).wait(1).to({graphics:mask_1_graphics_65,x:-41.7,y:29.2}).wait(1).to({graphics:mask_1_graphics_66,x:-40.6,y:30.2}).wait(1).to({graphics:mask_1_graphics_67,x:-39.5,y:31.4}).wait(1).to({graphics:mask_1_graphics_68,x:-38.4,y:32.5}).wait(1).to({graphics:mask_1_graphics_69,x:-37.5,y:33.8}).wait(1).to({graphics:mask_1_graphics_70,x:-36.6,y:35}).wait(1).to({graphics:mask_1_graphics_71,x:-35.7,y:36.4}).wait(1).to({graphics:mask_1_graphics_72,x:-35,y:37.7}).wait(1).to({graphics:mask_1_graphics_73,x:-34.3,y:39.1}).wait(1).to({graphics:mask_1_graphics_74,x:-33.6,y:40.5}).wait(1).to({graphics:mask_1_graphics_75,x:-33.1,y:42}).wait(1).to({graphics:mask_1_graphics_76,x:-32.6,y:42.3}).wait(1).to({graphics:mask_1_graphics_77,x:-32.2,y:42.3}).wait(1).to({graphics:mask_1_graphics_78,x:-31.7,y:42.2}).wait(57));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AkBjLQhpJIErjSQCYhtDFkf");
	this.shape_1.setTransform(-21.4,43.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AnOCVQhpJJErjSQEqjTHMt8");
	this.shape_2.setTransform(-0.9,8);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},29).wait(106));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.2,18.2,67,27.3);


(lib.ar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-27,21.4,1,1,-135);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:33.2,y:-27},44).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AiggCIA+gvIBvCTIg9Aug");
	var mask_graphics_1 = new cjs.Graphics().p("AhcgtIBKg4IBvCSIhKA5g");
	var mask_graphics_2 = new cjs.Graphics().p("AhjgoIBYhCIBvCSIhYBDg");
	var mask_graphics_3 = new cjs.Graphics().p("AhpgjIBkhLIBvCSIhkBMg");
	var mask_graphics_4 = new cjs.Graphics().p("AhvgeIBvhVIBwCSIhwBVg");
	var mask_graphics_5 = new cjs.Graphics().p("Ah1gZIB8hfIBvCTIh8Beg");
	var mask_graphics_6 = new cjs.Graphics().p("Ah8gUICJhpIBwCSIiJBpg");
	var mask_graphics_7 = new cjs.Graphics().p("AiCgQICVhxIBwCSIiVBxg");
	var mask_graphics_8 = new cjs.Graphics().p("AiIgLICih7IBvCSIiiB7g");
	var mask_graphics_9 = new cjs.Graphics().p("AiPgGICviFIBvCSIitCFg");
	var mask_graphics_10 = new cjs.Graphics().p("AiVgCIC7iOIBwCTIi7COg");
	var mask_graphics_11 = new cjs.Graphics().p("AibACIDHiXIBwCUIjHCXg");
	var mask_graphics_12 = new cjs.Graphics().p("AiiAHIDUihIBwCUIjTCgg");
	var mask_graphics_13 = new cjs.Graphics().p("AioAMIDhiqIBwCTIjhCqg");
	var mask_graphics_14 = new cjs.Graphics().p("AiuARIDti0IBwCUIjtCzg");
	var mask_graphics_15 = new cjs.Graphics().p("Ai0AVID5i9IBwCUIj5C9g");
	var mask_graphics_16 = new cjs.Graphics().p("Ai6AaIEFjHIBxCUIkHDHg");
	var mask_graphics_17 = new cjs.Graphics().p("AjBAfIETjQIBwCTIkTDQg");
	var mask_graphics_18 = new cjs.Graphics().p("AjHAjIEfjZIBwCTIkfDag");
	var mask_graphics_19 = new cjs.Graphics().p("AjNAoIErjjIBxCTIktDkg");
	var mask_graphics_20 = new cjs.Graphics().p("AjUAtIE5jsIBwCTIk5Dsg");
	var mask_graphics_21 = new cjs.Graphics().p("AjaAyIFFj2IBwCTIlFD2g");
	var mask_graphics_22 = new cjs.Graphics().p("AjhA2IFSj/IBxCTIlSEAg");
	var mask_graphics_23 = new cjs.Graphics().p("AjnA7IFfkJIBwCTIlfEKg");
	var mask_graphics_24 = new cjs.Graphics().p("AjtBAIFrkTIBwCUIlrETg");
	var mask_graphics_25 = new cjs.Graphics().p("AjzBFIF3kcIBwCTIl3Ecg");
	var mask_graphics_26 = new cjs.Graphics().p("Aj6BKIGEkmIBxCTImFEmg");
	var mask_graphics_27 = new cjs.Graphics().p("AkABPIGRkwIBwCTImREwg");
	var mask_graphics_28 = new cjs.Graphics().p("AkGBTIGdk5IBwCUImdE5g");
	var mask_graphics_29 = new cjs.Graphics().p("AkNBYIGqlCIBxCTImrFCg");
	var mask_graphics_30 = new cjs.Graphics().p("AkTBdIG3lMIBwCTIm3FMg");
	var mask_graphics_31 = new cjs.Graphics().p("AkZBhIHDlVIBwCUInDFVg");
	var mask_graphics_32 = new cjs.Graphics().p("AkfBmIHPlfIBwCUInPFfg");
	var mask_graphics_33 = new cjs.Graphics().p("AklBrIHclpIBwCUIndFpg");
	var mask_graphics_34 = new cjs.Graphics().p("AksBwIHplyIBwCTInpFyg");
	var mask_graphics_35 = new cjs.Graphics().p("AkyB1IH1l8IBwCUIn1F7g");
	var mask_graphics_36 = new cjs.Graphics().p("Ak4B6IIBmGIBwCUIoBGFg");
	var mask_graphics_37 = new cjs.Graphics().p("Ak/B+IIPmPIBwCUIoPGPg");
	var mask_graphics_38 = new cjs.Graphics().p("AlFCDIIbmYIBwCTIobGYg");
	var mask_graphics_39 = new cjs.Graphics().p("AlLCIIInmiIBwCTIonGig");
	var mask_graphics_40 = new cjs.Graphics().p("AlSCMII1mrIBwCTIo1Gsg");
	var mask_graphics_41 = new cjs.Graphics().p("AlYCRIJBm1IBwCUIpBG1g");
	var mask_graphics_42 = new cjs.Graphics().p("AleCWIJNm+IBwCTIpNG+g");
	var mask_graphics_43 = new cjs.Graphics().p("AlkCbIJanIIBvCTIpaHIg");
	var mask_graphics_44 = new cjs.Graphics().p("AlrCgIJnnSIBwCTIpnHSg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-16.1,y:14.4}).wait(1).to({graphics:mask_graphics_1,x:-22.9,y:18.7}).wait(1).to({graphics:mask_graphics_2,x:-22.2,y:18.2}).wait(1).to({graphics:mask_graphics_3,x:-21.6,y:17.7}).wait(1).to({graphics:mask_graphics_4,x:-20.9,y:17.2}).wait(1).to({graphics:mask_graphics_5,x:-20.3,y:16.8}).wait(1).to({graphics:mask_graphics_6,x:-19.7,y:16.3}).wait(1).to({graphics:mask_graphics_7,x:-19,y:15.8}).wait(1).to({graphics:mask_graphics_8,x:-18.4,y:15.3}).wait(1).to({graphics:mask_graphics_9,x:-17.7,y:14.8}).wait(1).to({graphics:mask_graphics_10,x:-17.1,y:14.3}).wait(1).to({graphics:mask_graphics_11,x:-16.5,y:13.8}).wait(1).to({graphics:mask_graphics_12,x:-15.8,y:13.3}).wait(1).to({graphics:mask_graphics_13,x:-15.2,y:12.8}).wait(1).to({graphics:mask_graphics_14,x:-14.5,y:12.4}).wait(1).to({graphics:mask_graphics_15,x:-13.9,y:11.9}).wait(1).to({graphics:mask_graphics_16,x:-13.3,y:11.4}).wait(1).to({graphics:mask_graphics_17,x:-12.6,y:10.9}).wait(1).to({graphics:mask_graphics_18,x:-12,y:10.4}).wait(1).to({graphics:mask_graphics_19,x:-11.4,y:9.9}).wait(1).to({graphics:mask_graphics_20,x:-10.7,y:9.4}).wait(1).to({graphics:mask_graphics_21,x:-10.1,y:8.9}).wait(1).to({graphics:mask_graphics_22,x:-9.4,y:8.5}).wait(1).to({graphics:mask_graphics_23,x:-8.8,y:8}).wait(1).to({graphics:mask_graphics_24,x:-8.2,y:7.5}).wait(1).to({graphics:mask_graphics_25,x:-7.5,y:7}).wait(1).to({graphics:mask_graphics_26,x:-6.9,y:6.5}).wait(1).to({graphics:mask_graphics_27,x:-6.3,y:6}).wait(1).to({graphics:mask_graphics_28,x:-5.6,y:5.5}).wait(1).to({graphics:mask_graphics_29,x:-5,y:5}).wait(1).to({graphics:mask_graphics_30,x:-4.4,y:4.5}).wait(1).to({graphics:mask_graphics_31,x:-3.7,y:4.1}).wait(1).to({graphics:mask_graphics_32,x:-3.1,y:3.6}).wait(1).to({graphics:mask_graphics_33,x:-2.4,y:3.1}).wait(1).to({graphics:mask_graphics_34,x:-1.8,y:2.6}).wait(1).to({graphics:mask_graphics_35,x:-1.2,y:2.1}).wait(1).to({graphics:mask_graphics_36,x:-0.5,y:1.6}).wait(1).to({graphics:mask_graphics_37,x:0.1,y:1.1}).wait(1).to({graphics:mask_graphics_38,x:0.8,y:0.6}).wait(1).to({graphics:mask_graphics_39,x:1.4,y:0.1}).wait(1).to({graphics:mask_graphics_40,x:2,y:-0.3}).wait(1).to({graphics:mask_graphics_41,x:2.7,y:-0.8}).wait(1).to({graphics:mask_graphics_42,x:3.3,y:-1.3}).wait(1).to({graphics:mask_graphics_43,x:4,y:-1.8}).wait(1).to({graphics:mask_graphics_44,x:4.6,y:-2.3}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AjtEeQCxkJEqkx");
	this.shape.setTransform(3.5,-4.5,1,1,-167.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(45));

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
(lib.WS_Cursive_u = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_619 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(619).call(this.frame_619).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(101.9,273.2,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({x:159.9,y:202.5},65).wait(16).to({startPosition:0},0).to({guide:{path:[159.7,202.4,154.8,214.6,149.4,226.7,143.3,240.3,137.3,253.9,131.7,266.7,124.9,279.1,118.3,291.5,112.5,307.3,106.7,323.2,108.9,336.3,111.1,349.3,126.3,347.9,141.6,346.6,154.7,340.8,167.9,335,180.4,327.6,192.6,320.4,204.3,312.4,216.2,304.3,227.2,295.2,237.7,286.4,247.9,277.5,258.9,267.9,268,256.8,277.3,245.5,284.9,233.1,291.9,221.7,297.3,209.1,298.5,206.2,299.7,203.2]}},225).wait(15).to({startPosition:0},0).to({guide:{path:[300.1,203.4,276.4,258,256,294.5,235.6,331,256.2,343.9,276.9,356.8,327.6,333.3,378.2,309.9,452.5,230.2]}},214).wait(16).to({x:442.8,y:236.8},0).to({regX:-1.1,guide:{path:[442.8,236.8,459,261.7,521,254.6,586.3,247.3,615.8,305.6,624.4,322.7,627.9,341.3]}},59).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(160,202.1,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},65).wait(16).to({_off:false,x:300},0).to({_off:true},225).wait(15).to({_off:false,x:452.4,y:230.1},0).to({_off:true},214).wait(76));

	// arrow
	this.instance_1 = new lib.ar6("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(350,256.3,1,1,14.7,0,0,-1.2,1.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(330).to({_off:false},0).wait(290));

	// Layer 24 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_444 = new cjs.Graphics().p("ADCW/Qo+oLglsIQgksHIKo+QIKo/MIgkMACwA6hQgzACgxAAQrKAAoXnog");
	var mask_graphics_445 = new cjs.Graphics().p("ADIXRQpFoDgvsIQgwsGICpFQICpGMIgvMADkA6dQhBAEhAAAQq3AAoUnWg");
	var mask_graphics_446 = new cjs.Graphics().p("ADPXiQpMn7g7sGQg6sGH6pMQH5pNMHg7MAEaA6aQhRAGhOAAQqlAAoPnFg");
	var mask_graphics_447 = new cjs.Graphics().p("ADWXzQpTnyhGsGQhFsFHypTQHwpUMGhGMAFPA6WQhfAIhcAAQqUAAoKm0g");
	var mask_graphics_448 = new cjs.Graphics().p("ADdYEQpanqhQsFQhRsDHqpaQHopcMEhQMAGEA6QQhtAMhqAAQqDAAoFmkg");
	var mask_graphics_449 = new cjs.Graphics().p("ADlYUQphnhhcsDQhbsDHhphQHfpiMEhbMAG4A6KQh7APh3AAQpyAAoAmUg");
	var mask_graphics_450 = new cjs.Graphics().p("ADtYlQponZhmsCQhnsBHZpoQHWppMChmMAHuA6DQiKATiEAAQpiAAn6mDg");
	var mask_graphics_451 = new cjs.Graphics().p("AD1Y0QpvnPhxsBQhxr/HQpvQHNpvMAhyMAIjA58QiXAXiSAAQpSAAn0l0g");
	var mask_graphics_452 = new cjs.Graphics().p("AD9ZEQp1nHh8r/Qh8r+HHp0QHEp2L/h9MAJXA50QilAbieAAQpDAAnulkg");
	var mask_graphics_453 = new cjs.Graphics().p("AEGZTQp8m+iHr9QiGr8G+p7QG7p8L9iHMAKLA5qQiyAgirAAQo0AAnnlVg");
	var mask_graphics_454 = new cjs.Graphics().p("AEPZiQqCm1iSr7QiSr6G1qBQGzqDL6iSMALAA5hQi/Ali4AAQolAAnglGg");
	var mask_graphics_455 = new cjs.Graphics().p("AEYZwQqImridr5Qicr4GsqHQGpqJL4icMAL0A5WQjMAqjEAAQoXAAnZk4g");
	var mask_graphics_456 = new cjs.Graphics().p("AEhZ/QqOmjinr2Qinr1GiqOQGgqPL2inMAMoA5LQjZAwjRAAQoHAAnTkpg");
	var mask_graphics_457 = new cjs.Graphics().p("AEraNQqUmZiyr0QiyrzGZqUQGWqUL0iyMANcA4/QjmA2jdAAQn5AAnLkbg");
	var mask_graphics_458 = new cjs.Graphics().p("AE1aaQqamPi8ryQi9rwGPqZQGNqaLyi9MAOPA4zQjyA8jpAAQnsAAnDkOg");
	var mask_graphics_459 = new cjs.Graphics().p("AE/anQqfmFjIrvQjHrtGGqfQGDqgLvjHMAPDA4lQj/BDj1AAQneAAm7kBg");
	var mask_graphics_460 = new cjs.Graphics().p("AFJa0Qqkl8jSrrQjTrrF9qkQF7qlLrjSMAP2A4WQkLBLkBAAQnRAAmzj0g");
	var mask_graphics_461 = new cjs.Graphics().p("AFUbBQqqlzjdroQjcrnFzqqQFxqqLnjdMAQpA4IQkWBSkNAAQnEAAmqjng");
	var mask_graphics_462 = new cjs.Graphics().p("AFfbNQqvlojormQjnrkFpqvQFoqvLkjnMARcA34QkiBakZAAQm3AAmhjbg");
	var mask_graphics_463 = new cjs.Graphics().p("AFqbZQq0lfjyrhQjyrhFgq0QFdq1LhjxMASPA3oQkuBiklAAQmpAAmZjPg");
	var mask_graphics_464 = new cjs.Graphics().p("AF1blQq5lVj8reQj8reFVq4QFUq6Ldj8MATBA3XQk4BrkyAAQmcAAmQjDg");
	var mask_graphics_465 = new cjs.Graphics().p("AGAbwQq9lLkHraQkGraFLq9QFKq/LakGMATzA3FQlEB0k9AAQmQAAmHi4g");
	var mask_graphics_466 = new cjs.Graphics().p("AGMb8QrClCkRrWQkRrXFCrBQE/rDLWkRMAUlA2zQlOB9lKAAQmDAAl9isg");
	var mask_graphics_467 = new cjs.Graphics().p("AGYcGQrHk3kbrTQkbrTE3rFQE2rHLSkbMAVXA2fQlZCHlWAAQl3AAlziig");
	var mask_graphics_468 = new cjs.Graphics().p("AGkcRQrLktklrPQkmrPEurKQErrLLOkmMAWIA2MQljCRliAAQlrAAlpiXg");
	var mask_graphics_469 = new cjs.Graphics().p("AGxcbQrQkjkvrLQkwrKEjrOQEirQLJkvMAW5A13QltCblvAAQldAAlfiNg");
	var mask_graphics_470 = new cjs.Graphics().p("AG9ckQrTkYk6rGQk6rGEZrSQEYrULFk6MAXqA1iQl4Cml7AAQlRAAlViEg");
	var mask_graphics_471 = new cjs.Graphics().p("AHKcuQrXkOlErCQlErBEPrWQENrYLAlEMAYbA1MQmBCxmIAAQlFAAlKh6g");
	var mask_graphics_472 = new cjs.Graphics().p("AHXc3QrbkElOq9QlNq9EErZQECrcK8lNMAZLA01QmLC8mUAAQk5AAk/hxg");
	var mask_graphics_473 = new cjs.Graphics().p("AHkc/Qrej5lYq4QlYq4D6rdQD4rfK3lYMAZ7A0eQmUDImhAAQktAAk0hpg");
	var mask_graphics_474 = new cjs.Graphics().p("AHydIQrijvliqzQlhqzDvrhQDuriKylhMAaqA0GQmdDTmuAAQkhAAkohgg");
	var mask_graphics_475 = new cjs.Graphics().p("AH/dQQrljllrqtQlsquDlrkQDjrmKtlrMAbZAztQmlDfm6AAQkWABkdhYg");
	var mask_graphics_476 = new cjs.Graphics().p("AINdXQrojZl1qpQl1qpDarnQDZroKnl1MAcIAzUQmuDrnHAAQkJAAkShQg");
	var mask_graphics_477 = new cjs.Graphics().p("AIbdfQrrjPl/qkQl/qjDQrqQDOrsKil+MAc3Ay6Qm3D4nUAAQj9AAkGhIg");
	var mask_graphics_478 = new cjs.Graphics().p("AIpdmQrujFmIqeQmIqdDFrtQDDrvKdmIMAdkAygQm/EFnhAAQjxAAj6hBg");
	var mask_graphics_479 = new cjs.Graphics().p("AI3dsQrwi6mSqYQmRqYC6rvQC5rxKXmSMAeRAyEQnGETnvAAQjlAAjug7g");
	var mask_graphics_480 = new cjs.Graphics().p("AJGdyQrzivmbqSQmbqSCwryQCtr0KSmbMAe/AxoQnOEhn+AAQjYAAjhg1g");
	var mask_graphics_481 = new cjs.Graphics().p("AJVd4Qr2ikmkqMQmkqNClr0QCjr2KMmkMAfrAxLQnVEuoMAAQjMAAjUgug");
	var mask_graphics_482 = new cjs.Graphics().p("AJkd+Qr4iamuqGQmtqGCar3QCYr4KHmuMAgXAwvQncE8oaAAQjAAAjHgog");
	var mask_graphics_483 = new cjs.Graphics().p("AJzeDQr6iPm3qAQm2qACPr5QCOr6KAm3MAhDAwRQnjFLopAAQizAAi6gjg");
	var mask_graphics_484 = new cjs.Graphics().p("AKCeIQr8iEnAp6Qm/p6CFr7QCCr8J6m/MAhvAvyQnqFao3AAQinAAitgeg");
	var mask_graphics_485 = new cjs.Graphics().p("AKReMQr9h5nJpzQnIpzB6r9QB3r+J0nJMAiaAvTQnxFppGAAQiaAAiggZg");
	var mask_graphics_486 = new cjs.Graphics().p("AKheQQr/hunSptQnRpsBvr/QBtr/JtnSMAjEAu0Qn2F4pWAAQiNAAiSgVg");
	var mask_graphics_487 = new cjs.Graphics().p("AKxeUQsBhjnapmQnapmBksAQBisBJmnaMAjvAuTQn8GIpmAAQiAAAiEgRg");
	var mask_graphics_488 = new cjs.Graphics().p("ALBeXQsChYnjpfQnjpgBZsBQBXsCJgnjMAkYAtyQoCGZp1AAQhzAAh2gOg");
	var mask_graphics_489 = new cjs.Graphics().p("ALReaQsEhOnrpYQnrpYBOsDQBMsDJYnrMAlCAtQQoHGpqGAAQhlAAhogKg");
	var mask_graphics_490 = new cjs.Graphics().p("ALhecQsFhCnzpSQn0pRBEsDQBBsFJRnzMAlqAsvQoMG5qWAAQhYAAhagIg");
	var mask_graphics_491 = new cjs.Graphics().p("ALxeeQsFg3n8pLQn8pKA4sEQA3sFJKn8MAmSAsNQoQHKqoAAQhKAAhMgGg");
	var mask_graphics_492 = new cjs.Graphics().p("AMBegQsGgtoEpDQoEpDAusFQArsGJEoEMAm5ArqQoVHbq5AAQg8AAg+gDg");
	var mask_graphics_493 = new cjs.Graphics().p("AMSehQsIgioLo7QoMo8AjsHQAhsFI7oMMAnhArHQoZHsrMAAQguAAgugCg");
	var mask_graphics_494 = new cjs.Graphics().p("AMieiQsHgXoUo0QoUo1AYsGQAWsGI1oUMAoGAqjQodH+rdAAIhAgBg");
	var mask_graphics_495 = new cjs.Graphics().p("AMzejQsIgMobotQocotANsHQALsGItocMAotAp/QohIQrwAAIgiAAg");
	var mask_graphics_496 = new cjs.Graphics().p("ANEejQsIgBojomQojolACsHQAAsGIlojMApSApZQokIjsEAAIgDAAg");
	var mask_graphics_497 = new cjs.Graphics().p("AndWPQosoegIsHQgLsGIdorMAp3Ao1QodIrsGAKIgcAAQr2AAogoUg");
	var mask_graphics_498 = new cjs.Graphics().p("AnUWhQoyoWgUsGQgWsGIWozMAqbAoPQoVIysGAVIg5ABQrkAAodoCg");
	var mask_graphics_499 = new cjs.Graphics().p("AnJWzQo7oOgesGQghsGIOo6MAq/AnoQoNI7sGAfQgsACgrAAQrQAAoZnwg");
	var mask_graphics_500 = new cjs.Graphics().p("Am/XEQpBoFgqsGQgrsFIGpBMAriAnBQoGJBsEArQg7ADg6AAQq+AAoVnfg");
	var mask_graphics_501 = new cjs.Graphics().p("Am0XWQpJn+g0sFQg2sEH+pJMAsFAmaQn+JJsEA1QhJAFhIAAQqsAAoRnNg");
	var mask_graphics_502 = new cjs.Graphics().p("AmoXnQpQn2g/sEQhBsDH1pQMAsnAlyQn1JQsDBAQhYAHhVAAQqcAAoLm8g");
	var mask_graphics_503 = new cjs.Graphics().p("AmdX3QpXnthJsDQhMsCHtpXMAtJAlJQntJXsDBLQhmAKhiAAQqLAAoHmsg");
	var mask_graphics_504 = new cjs.Graphics().p("AmRYIQpdnlhVsCQhXsBHlpeMAtqAkhQnlJesBBVQh0ANhwAAQp6AAoCmbg");
	var mask_graphics_505 = new cjs.Graphics().p("AmEYYQpknchgsBQhhsAHbpkMAuLAj3QncJksABhQiCAQh9AAQpqAAn8mLg");
	var mask_graphics_506 = new cjs.Graphics().p("Al3YnQprnThqr/Qhtr/HTprMAurAjOQnTJrr/BrQiPAUiLAAQpaAAn2l8g");
	var mask_graphics_507 = new cjs.Graphics().p("AlqY3QpynLh0r+Qh3r8HKpyMAvJAikQnKJxr9B2QidAYiXAAQpLAAnwlsg");
	var mask_graphics_508 = new cjs.Graphics().p("AlcZGQp4nCiAr8QiCr7HCp4MAvoAh5QnCJ4r7CBQiqAcikAAQo7AAnqldg");
	var mask_graphics_509 = new cjs.Graphics().p("AlPZVQp+m5iKr6QiMr5G4p+MAwHAhOQm5J+r5CLQi4AhiwAAQotABnklPg");
	var mask_graphics_510 = new cjs.Graphics().p("AlAZjQqEmviVr5QiYr3GwqEMAwkAgjQmwKEr3CWQjFAni8AAQoeAAndlBg");
	var mask_graphics_511 = new cjs.Graphics().p("AkyZyQqKmnifr2Qiir1GmqKMAxBAf3QmnKKr0CgQjSAtjJAAQoQAAnWkyg");
	var mask_graphics_512 = new cjs.Graphics().p("AkjaAQqQmeiqr0QisryGdqQMAxdAfKQmdKQrzCrQjeAzjVAAQoCAAnPkkg");
	var mask_graphics_513 = new cjs.Graphics().p("AkTaNQqWmUi1rxQi3rwGUqWMAx5AeeQmUKWrwC1QjrA5jhAAQn0AAnHkXg");
	var mask_graphics_514 = new cjs.Graphics().p("AkEabQqbmLi/rvQjCrtGLqcMAyUAdxQmLKcruDAQj2A/juAAQnmAAnAkJg");
	var mask_graphics_515 = new cjs.Graphics().p("AjzaoQqhmCjKrsQjMrqGBqhMAyuAdDQmBKhrrDLQkCBGj6AAQnZAAm3j8g");
	var mask_graphics_516 = new cjs.Graphics().p("Ajja0Qqml4jVrpQjWrnF4qmMAzIAcVQl4KmroDWQkOBNkGAAQnMAAmvjwg");
	var mask_graphics_517 = new cjs.Graphics().p("AjSbBQqslvjermQjhrkFuqrMAzhAbnQlvKsrkDfQkaBVkSAAQm+AAmnjjg");
	var mask_graphics_518 = new cjs.Graphics().p("AjBbNQqxlljprjQjrrhFlqwMAz5Aa5QllKwrhDqQkmBdkdAAQmyAAmejXg");
	var mask_graphics_519 = new cjs.Graphics().p("AiwbZQq1lbj0rgQj1rdFbq2MA0RAaLQlcK1reD0QkwBlkpAAQmlAAmWjLg");
	var mask_graphics_520 = new cjs.Graphics().p("AilbgQq5lVj5rdQj8rcFVq4MA0fAZtQlVK4rcD7Qk3BrkxAAQmdAAmQjFg");
	var mask_graphics_521 = new cjs.Graphics().p("AiabnQq8lPkArbQkCraFPq7MA0uAZRQlPK7raEBQk+Bwk4AAQmWAAmKi+g");
	var mask_graphics_522 = new cjs.Graphics().p("AiQbuQq+lJkGrZQkJrXFJq/MA08AY0QlJK+rYEHQlEB2lAAAQmOAAmFi3g");
	var mask_graphics_523 = new cjs.Graphics().p("AiEb1QrClDkMrXQkPrWFDrAMA1KAYWQlDLBrWEOQlLB7lHAAQmHAAl+iwg");
	var mask_graphics_524 = new cjs.Graphics().p("Ah5b8QrEk9kTrVQkWrUE9rDMA1YAX5Qk9LErTEUQlSCBlOAAQl/AAl5ipg");
	var mask_graphics_525 = new cjs.Graphics().p("AhucCQrHk3kZrSQkcrRE3rGMA1lAXcQk3LGrQEaQlZCHlVAAQl4AAlzijg");
	var mask_graphics_526 = new cjs.Graphics().p("AhjcJQrJkxkgrQQkhrPEwrIMA1zAW+QkxLJrPEgQleCNldAAQlwAAluicg");
	var mask_graphics_527 = new cjs.Graphics().p("AhXcPQrMkrkmrNQkorNErrLMA1/AWhQkrLMrMEmQllCTlkAAQlpAAlniWg");
	var mask_graphics_528 = new cjs.Graphics().p("AhLcVQrPkkksrLQkurKEkrOMA2MAWDQklLPrJEsQlrCZlsAAQlhAAlhiQg");
	var mask_graphics_529 = new cjs.Graphics().p("AhAcbQrRkekyrIQk0rIEerQMA2YAVlQkeLRrHEzQlyCflzAAQlaAAlbiKg");
	var mask_graphics_530 = new cjs.Graphics().p("Ag0chQrTkYk5rFQk6rFEYrTMA2kAVHQkYLUrFE5Ql3Cml7AAQlSAAlViFg");
	var mask_graphics_531 = new cjs.Graphics().p("AgocnQrWkSk/rDQlArCESrVMA2wAUpQkSLWrCE/Ql9CtmDAAQlLAAlOh/g");
	var mask_graphics_532 = new cjs.Graphics().p("AgbctQrZkMlFrAQlHq/EMrYMA28AULQkMLYq/FFQmDC0mLAAQlDAAlHh5g");
	var mask_graphics_533 = new cjs.Graphics().p("AgPczQrbkGlLq9QlNq9EFraMA3HATsQkFLbq8FMQmJC6mSAAQk8AAlBhzg");
	var mask_graphics_534 = new cjs.Graphics().p("AgDc4Qrdj/lRq7QlTq6D/rcMA3SATOQj/Ldq5FSQmPDBmaAAQk1AAk6hug");
	var mask_graphics_535 = new cjs.Graphics().p("AAJc+Qrfj5lXq4QlZq3D5rfMA3dASwQj5Lfq2FYQmVDImhAAQkuAAk0hog");
	var mask_graphics_536 = new cjs.Graphics().p("AAVdDQrgjzleq1Qlfq0DzrgMA3nASQQjyLiq0FeQmZDPmqAAQkmAAkuhjg");
	var mask_graphics_537 = new cjs.Graphics().p("AAidIQrjjsljqyQllqxDsrjMA3yARyQjsLkqxFjQmfDXmxAAQkfAAknheg");
	var mask_graphics_538 = new cjs.Graphics().p("AAvdNQrljmlpqvQlrquDlrlMA38ARUQjlLmquFpQmlDem5AAQkXAAkghZg");
	var mask_graphics_539 = new cjs.Graphics().p("AA8dSQrnjflvqsQlxqrDfrnMA4GAQ0QjfLoqrFwQmqDlnBAAQkRAAkYhUg");
	var mask_graphics_540 = new cjs.Graphics().p("ABJdXQrpjZl1qpQl3qoDZrpMA4PAQWQjZLqqnF1QmvDtnKAAQkJAAkRhPg");
	var mask_graphics_541 = new cjs.Graphics().p("ABWdbQrrjSl7qmQl8qlDSrqMA4YAP2QjSLsqkF7Qm1D1nRAAQkCAAkKhLg");
	var mask_graphics_542 = new cjs.Graphics().p("ABjdfQrsjMmBqiQmDqiDMrsMA4iAPXQjMLuqhGBQm6D9nZAAQj7AAkDhHg");
	var mask_graphics_543 = new cjs.Graphics().p("ADneCQr6iOm3qBQm5p/COr7MA5mAKsQiOL8p/G3QnkFNorAAQizAAi7gjg");
	var mask_graphics_544 = new cjs.Graphics().p("AF1eZQsEhPnqpbQnrpZBPsEMA6RAF7QhOMFpZHqQoIGnqGAAQhnAAhrgKg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(444).to({graphics:mask_graphics_444,x:154.3,y:195.9}).wait(1).to({graphics:mask_graphics_445,x:155.6,y:195.9}).wait(1).to({graphics:mask_graphics_446,x:157,y:195.9}).wait(1).to({graphics:mask_graphics_447,x:158.3,y:195.9}).wait(1).to({graphics:mask_graphics_448,x:159.6,y:196}).wait(1).to({graphics:mask_graphics_449,x:160.9,y:196}).wait(1).to({graphics:mask_graphics_450,x:162.3,y:196}).wait(1).to({graphics:mask_graphics_451,x:163.6,y:196}).wait(1).to({graphics:mask_graphics_452,x:164.9,y:196}).wait(1).to({graphics:mask_graphics_453,x:166.2,y:196}).wait(1).to({graphics:mask_graphics_454,x:167.5,y:196}).wait(1).to({graphics:mask_graphics_455,x:168.8,y:196}).wait(1).to({graphics:mask_graphics_456,x:170.1,y:196}).wait(1).to({graphics:mask_graphics_457,x:171.4,y:196}).wait(1).to({graphics:mask_graphics_458,x:172.7,y:196}).wait(1).to({graphics:mask_graphics_459,x:174,y:196}).wait(1).to({graphics:mask_graphics_460,x:175.3,y:196}).wait(1).to({graphics:mask_graphics_461,x:176.5,y:196}).wait(1).to({graphics:mask_graphics_462,x:177.8,y:196}).wait(1).to({graphics:mask_graphics_463,x:179.1,y:196}).wait(1).to({graphics:mask_graphics_464,x:180.3,y:196}).wait(1).to({graphics:mask_graphics_465,x:181.6,y:196}).wait(1).to({graphics:mask_graphics_466,x:182.8,y:196}).wait(1).to({graphics:mask_graphics_467,x:184.1,y:196}).wait(1).to({graphics:mask_graphics_468,x:185.3,y:196}).wait(1).to({graphics:mask_graphics_469,x:186.5,y:196}).wait(1).to({graphics:mask_graphics_470,x:187.8,y:196}).wait(1).to({graphics:mask_graphics_471,x:189,y:196}).wait(1).to({graphics:mask_graphics_472,x:190.2,y:196}).wait(1).to({graphics:mask_graphics_473,x:191.4,y:196}).wait(1).to({graphics:mask_graphics_474,x:192.6,y:196}).wait(1).to({graphics:mask_graphics_475,x:193.7,y:195.9}).wait(1).to({graphics:mask_graphics_476,x:194.9,y:195.9}).wait(1).to({graphics:mask_graphics_477,x:196.1,y:195.9}).wait(1).to({graphics:mask_graphics_478,x:197.2,y:195.9}).wait(1).to({graphics:mask_graphics_479,x:198.3,y:195.9}).wait(1).to({graphics:mask_graphics_480,x:199.5,y:195.9}).wait(1).to({graphics:mask_graphics_481,x:200.6,y:195.8}).wait(1).to({graphics:mask_graphics_482,x:201.7,y:195.8}).wait(1).to({graphics:mask_graphics_483,x:202.8,y:195.8}).wait(1).to({graphics:mask_graphics_484,x:203.9,y:195.8}).wait(1).to({graphics:mask_graphics_485,x:205,y:195.7}).wait(1).to({graphics:mask_graphics_486,x:206,y:195.7}).wait(1).to({graphics:mask_graphics_487,x:207.1,y:195.7}).wait(1).to({graphics:mask_graphics_488,x:208.1,y:195.7}).wait(1).to({graphics:mask_graphics_489,x:209.1,y:195.6}).wait(1).to({graphics:mask_graphics_490,x:210.1,y:195.6}).wait(1).to({graphics:mask_graphics_491,x:211.1,y:195.6}).wait(1).to({graphics:mask_graphics_492,x:212.1,y:195.5}).wait(1).to({graphics:mask_graphics_493,x:213.1,y:195.5}).wait(1).to({graphics:mask_graphics_494,x:214,y:195.5}).wait(1).to({graphics:mask_graphics_495,x:215,y:195.5}).wait(1).to({graphics:mask_graphics_496,x:215.9,y:195.5}).wait(1).to({graphics:mask_graphics_497,x:216.8,y:195.5}).wait(1).to({graphics:mask_graphics_498,x:217.7,y:195.5}).wait(1).to({graphics:mask_graphics_499,x:218.6,y:195.5}).wait(1).to({graphics:mask_graphics_500,x:219.5,y:195.5}).wait(1).to({graphics:mask_graphics_501,x:220.4,y:195.5}).wait(1).to({graphics:mask_graphics_502,x:221.2,y:195.5}).wait(1).to({graphics:mask_graphics_503,x:222.1,y:195.5}).wait(1).to({graphics:mask_graphics_504,x:222.9,y:195.5}).wait(1).to({graphics:mask_graphics_505,x:223.7,y:195.5}).wait(1).to({graphics:mask_graphics_506,x:224.5,y:195.5}).wait(1).to({graphics:mask_graphics_507,x:225.2,y:195.5}).wait(1).to({graphics:mask_graphics_508,x:226,y:195.5}).wait(1).to({graphics:mask_graphics_509,x:226.8,y:195.6}).wait(1).to({graphics:mask_graphics_510,x:227.5,y:195.6}).wait(1).to({graphics:mask_graphics_511,x:228.2,y:195.6}).wait(1).to({graphics:mask_graphics_512,x:228.9,y:195.6}).wait(1).to({graphics:mask_graphics_513,x:229.6,y:195.6}).wait(1).to({graphics:mask_graphics_514,x:230.3,y:195.6}).wait(1).to({graphics:mask_graphics_515,x:230.9,y:195.6}).wait(1).to({graphics:mask_graphics_516,x:231.6,y:195.6}).wait(1).to({graphics:mask_graphics_517,x:232.2,y:195.6}).wait(1).to({graphics:mask_graphics_518,x:232.8,y:195.6}).wait(1).to({graphics:mask_graphics_519,x:233.4,y:195.6}).wait(1).to({graphics:mask_graphics_520,x:233.7,y:195.7}).wait(1).to({graphics:mask_graphics_521,x:234.1,y:195.7}).wait(1).to({graphics:mask_graphics_522,x:234.4,y:195.7}).wait(1).to({graphics:mask_graphics_523,x:234.8,y:195.7}).wait(1).to({graphics:mask_graphics_524,x:235.1,y:195.7}).wait(1).to({graphics:mask_graphics_525,x:235.4,y:195.7}).wait(1).to({graphics:mask_graphics_526,x:235.8,y:195.7}).wait(1).to({graphics:mask_graphics_527,x:236.1,y:195.7}).wait(1).to({graphics:mask_graphics_528,x:236.4,y:195.7}).wait(1).to({graphics:mask_graphics_529,x:236.7,y:195.7}).wait(1).to({graphics:mask_graphics_530,x:237,y:195.8}).wait(1).to({graphics:mask_graphics_531,x:237.3,y:195.8}).wait(1).to({graphics:mask_graphics_532,x:237.6,y:195.8}).wait(1).to({graphics:mask_graphics_533,x:237.8,y:195.8}).wait(1).to({graphics:mask_graphics_534,x:238.1,y:195.8}).wait(1).to({graphics:mask_graphics_535,x:238.4,y:195.8}).wait(1).to({graphics:mask_graphics_536,x:238.6,y:195.8}).wait(1).to({graphics:mask_graphics_537,x:238.9,y:195.8}).wait(1).to({graphics:mask_graphics_538,x:239.1,y:195.8}).wait(1).to({graphics:mask_graphics_539,x:239.4,y:195.8}).wait(1).to({graphics:mask_graphics_540,x:239.6,y:195.8}).wait(1).to({graphics:mask_graphics_541,x:239.8,y:195.8}).wait(1).to({graphics:mask_graphics_542,x:240.1,y:195.8}).wait(1).to({graphics:mask_graphics_543,x:241.7,y:195.7}).wait(1).to({graphics:mask_graphics_544,x:242.8,y:195.5}).wait(76));

	// Layer 23
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(20,1,1).p("AnmrcQi7HNj+GpQiPDuAvCnQAvCnC2AHQC2AGDShMQDRhME5jQQE5jRJaps");
	this.shape_1.setTransform(348.7,275.1);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(444).to({_off:false},0).wait(176));

	// Layer 22 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_396 = new cjs.Graphics().p("AG+YEQAEkHC7i7QC/i/EPAAQEOAAC/C/QC7C7AEEHg");
	var mask_1_graphics_397 = new cjs.Graphics().p("AJsRIQC3jHEOgLQEOgLDHC4QDCCzAPEHI0YA0QgHkHC0jCg");
	var mask_1_graphics_398 = new cjs.Graphics().p("AJbROQCwjNENgWQEOgWDNCvQDKCrAZEGI0UBqQgSkHCrjKg");
	var mask_1_graphics_399 = new cjs.Graphics().p("AJNRWQCmjVENghQEMggDVCmQDQCjAkEFI0PCeQgckGCjjQg");
	var mask_1_graphics_400 = new cjs.Graphics().p("AI/ReQCejcELgrQELgsDbCeQDXCbAuEDI0IDSQgmkFCajWg");
	var mask_1_graphics_401 = new cjs.Graphics().p("AIzRmQCVjhEJg2QEJg3DhCVQDdCSA5EBIz/EGQgxkDCSjdg");
	var mask_1_graphics_402 = new cjs.Graphics().p("AIoRwQCMjoEHhBQEGhADnCLQDjCJBDD/IzzE4Qg7kACIjig");
	var mask_1_graphics_403 = new cjs.Graphics().p("AIfR6QCCjtEEhMQEEhLDsCCQDoCABND7IzlFsQhFj9B/jog");
	var mask_1_graphics_404 = new cjs.Graphics().p("AIXSEQB5jyEAhVQEBhWDxB4QDtB2BXD5IzVGeQhQj7B2jtg");
	var mask_1_graphics_405 = new cjs.Graphics().p("AIRSPQBvj2D8hgQD9hgD2BvQDyBsBhD0IzEHQQhZj3Bsjyg");
	var mask_1_graphics_406 = new cjs.Graphics().p("AIMSbQBlj6D4hrQD5hqD6BlQD2BiBrDxIywIAQhkjzBjj2g");
	var mask_1_graphics_407 = new cjs.Graphics().p("AIISoQBbj/D0h0QD0h0D/BaQD5BZB1DsIybIwQhtjvBYj5g");
	var mask_1_graphics_408 = new cjs.Graphics().p("AIGS1QBRkCDvh+QDvh+ECBQQD9BPB+DnIyDJfQh3jqBOj9g");
	var mask_1_graphics_409 = new cjs.Graphics().p("AIGTCQBGkFDqiHQDpiIEFBGQEABECHDiIxpKOQiAjmBEkAg");
	var mask_1_graphics_410 = new cjs.Graphics().p("AIHTQQA7kHDkiRQDkiREIA7QECA6CRDcIxOK7QiKjgA6kDg");
	var mask_1_graphics_411 = new cjs.Graphics().p("AIJTfQAxkKDeiaQDeiZEKAwQEEAvCZDWIwwLnQiTjbAvkEg");
	var mask_1_graphics_412 = new cjs.Graphics().p("AINTuQAmkLDYijQDYijELAmQEGAlCiDPIwSMSQicjVAlkGg");
	var mask_1_graphics_413 = new cjs.Graphics().p("AIST+QAbkNDRisQDSirEMAbQEIAaCpDJIvxM7QikjOAakHg");
	var mask_1_graphics_414 = new cjs.Graphics().p("AIZUOQAQkODKi0QDKizEOAQQEIAPCyDCIvPNjQisjHAPkIg");
	var mask_1_graphics_415 = new cjs.Graphics().p("AIiUeQAFkODCi8QDDi7EOAFQEJAEC5C7IurOKQi0jAAFkJg");
	var mask_1_graphics_416 = new cjs.Graphics().p("AIrUvQgFkOC6jEQC7jDEOgGQEJgGDBCzIuGOvQi8i5gGkIg");
	var mask_1_graphics_417 = new cjs.Graphics().p("AI2VAQgQkOCzjLQCyjKEOgRQEIgRDICsItfPSQjDixgRkIg");
	var mask_1_graphics_418 = new cjs.Graphics().p("AJDVRQgckNCrjRQCqjSENgcQEHgbDPCjIs3P0QjKipgbkHg");
	var mask_1_graphics_419 = new cjs.Graphics().p("AJRVjQgnkMCijYQCijZEMgmQEGgmDVCbIsOQUQjQiggmkGg");
	var mask_1_graphics_420 = new cjs.Graphics().p("AJgV1QgxkKCZjfQCZjfEKgxQEEgwDbCSIrjQzQjWiYgxkEg");
	var mask_1_graphics_421 = new cjs.Graphics().p("AJxWHQg8kICQjkQCQjlEHg8QECg7DhCJIq3RQQjciPg7kCg");
	var mask_1_graphics_422 = new cjs.Graphics().p("AKDWZQhHkFCHjqQCGjqEFhHQEAhFDmCAIqKRrQjiiGhFkAg");
	var mask_1_graphics_423 = new cjs.Graphics().p("AKWWsQhRkCB9jwQB9jvEChRQD8hQDrB3IpbSEQjoh9hPj8g");
	var mask_1_graphics_424 = new cjs.Graphics().p("AKqW/Qhbj/Bzj0QBzj1D/hbQD5haDvBtIosScQjshzhaj5g");
	var mask_1_graphics_425 = new cjs.Graphics().p("ALAXRQhmj6Bqj5QBpj5D6hlQD2hkDzBjIn8SyQjxhqhjj2g");
	var mask_1_graphics_426 = new cjs.Graphics().p("ALXXkQhwj2Bfj9QBfj9D2hvQDyhuD3BZInLTFQj1hghtjxg");
	var mask_1_graphics_427 = new cjs.Graphics().p("ALvX3Qh6jxBVkBQBVkADxh6QDth3D7BPImaTXQj4hWh3jtg");
	var mask_1_graphics_428 = new cjs.Graphics().p("AMIYKQiDjsBKkEQBKkEDtiDQDniAD+BEIlnTnQj8hMiAjog");
	var mask_1_graphics_429 = new cjs.Graphics().p("AMiYdQiNjnBAkGQBAkHDniMQDiiKEAA6Ik0T0Qj/hCiJjig");
	var mask_1_graphics_430 = new cjs.Graphics().p("AM9YwQiWjhA1kJQA2kJDgiWQDdiSEDAwIkBT/QkBg4iTjcg");
	var mask_1_graphics_431 = new cjs.Graphics().p("ANZZDQifjbArkLQAqkLDbieQDWicEFAmIjNUIQkEgtibjWg");
	var mask_1_graphics_432 = new cjs.Graphics().p("AN2ZWQinjVAfkMQAgkMDUioQDQikEGAbIiZUQQkFgjikjPg");
	var mask_1_graphics_433 = new cjs.Graphics().p("AOUZoQiwjNAVkNQAVkODNiwQDJisEHARIhlUUQkGgYisjJg");
	var mask_1_graphics_434 = new cjs.Graphics().p("AOyZ7Qi3jGAKkOQAKkODFi4QDCi1EHAGIgwUYQkGgNi1jCg");
	var mask_1_graphics_435 = new cjs.Graphics().p("APQaNQjAi+gBkPQgBkOC+jAQC7i8EHgEIAFUYQkHgDi8i6g");
	var mask_1_graphics_436 = new cjs.Graphics().p("APWafQjIi3gMkOQgLkOC2jHQCzjDEGgQIA6UYIgWAAQj5AAi7irg");
	var mask_1_graphics_437 = new cjs.Graphics().p("APcawQjOiugXkOQgXkNCujOQCrjLEGgaIBuUUQgaACgYAAQjoAAi3iag");
	var mask_1_graphics_438 = new cjs.Graphics().p("APjbAQjVimghkMQgikMCmjVQCijREFglICiUPQgoAEgmAAQjXAAiyiKg");
	var mask_1_graphics_439 = new cjs.Graphics().p("APsbQQjciegtkKQgskLCdjcQCajXEDgvIDWUHQg1AIgzAAQjIAAirh6g");
	var mask_1_graphics_440 = new cjs.Graphics().p("AP0beQjiiUg3kJQg3kICUjiQCRjeEBg5IEKT9QhCANhAAAQi5AAilhsg");
	var mask_1_graphics_441 = new cjs.Graphics().p("AP+bsQjoiLhCkHQhCkGCLjnQCIjkD+hDIE+TxQhPAThMAAQirAAidheg");
	var mask_1_graphics_442 = new cjs.Graphics().p("AQIb4QjuiBhMkDQhMkECBjtQB/joD7hOIFxTjQhbAahYAAQieAAiVhSg");
	var mask_1_graphics_443 = new cjs.Graphics().p("AQScEQjyh4hXkAQhWkAB3jyQB2jtD4hYIGiTUQhmAghkAAQiRAAiNhFg");
	var mask_1_graphics_444 = new cjs.Graphics().p("AQecPQj3huhhj8Qhhj9Buj2QBrjyD0hiIHUTBQhxAqhwAAQiEAAiDg6g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(396).to({graphics:mask_1_graphics_396,x:175.1,y:154}).wait(1).to({graphics:mask_1_graphics_397,x:175.1,y:155.3}).wait(1).to({graphics:mask_1_graphics_398,x:175,y:156.7}).wait(1).to({graphics:mask_1_graphics_399,x:174.9,y:158}).wait(1).to({graphics:mask_1_graphics_400,x:174.7,y:159.3}).wait(1).to({graphics:mask_1_graphics_401,x:174.5,y:160.6}).wait(1).to({graphics:mask_1_graphics_402,x:174.2,y:161.8}).wait(1).to({graphics:mask_1_graphics_403,x:173.8,y:163.1}).wait(1).to({graphics:mask_1_graphics_404,x:173.4,y:164.4}).wait(1).to({graphics:mask_1_graphics_405,x:173,y:165.6}).wait(1).to({graphics:mask_1_graphics_406,x:172.5,y:166.8}).wait(1).to({graphics:mask_1_graphics_407,x:172,y:168}).wait(1).to({graphics:mask_1_graphics_408,x:171.4,y:169.2}).wait(1).to({graphics:mask_1_graphics_409,x:170.7,y:170.4}).wait(1).to({graphics:mask_1_graphics_410,x:170.1,y:171.5}).wait(1).to({graphics:mask_1_graphics_411,x:169.3,y:172.6}).wait(1).to({graphics:mask_1_graphics_412,x:168.6,y:173.7}).wait(1).to({graphics:mask_1_graphics_413,x:167.7,y:174.7}).wait(1).to({graphics:mask_1_graphics_414,x:166.9,y:175.7}).wait(1).to({graphics:mask_1_graphics_415,x:166,y:176.7}).wait(1).to({graphics:mask_1_graphics_416,x:165.1,y:177.6}).wait(1).to({graphics:mask_1_graphics_417,x:164.1,y:178.5}).wait(1).to({graphics:mask_1_graphics_418,x:163.1,y:179.3}).wait(1).to({graphics:mask_1_graphics_419,x:162.1,y:180.1}).wait(1).to({graphics:mask_1_graphics_420,x:161,y:180.9}).wait(1).to({graphics:mask_1_graphics_421,x:159.9,y:181.6}).wait(1).to({graphics:mask_1_graphics_422,x:158.8,y:182.3}).wait(1).to({graphics:mask_1_graphics_423,x:157.6,y:182.9}).wait(1).to({graphics:mask_1_graphics_424,x:156.4,y:183.5}).wait(1).to({graphics:mask_1_graphics_425,x:155.2,y:184.1}).wait(1).to({graphics:mask_1_graphics_426,x:154,y:184.5}).wait(1).to({graphics:mask_1_graphics_427,x:152.8,y:185}).wait(1).to({graphics:mask_1_graphics_428,x:151.5,y:185.4}).wait(1).to({graphics:mask_1_graphics_429,x:150.2,y:185.7}).wait(1).to({graphics:mask_1_graphics_430,x:149,y:186}).wait(1).to({graphics:mask_1_graphics_431,x:147.7,y:186.2}).wait(1).to({graphics:mask_1_graphics_432,x:146.4,y:186.4}).wait(1).to({graphics:mask_1_graphics_433,x:145.1,y:186.5}).wait(1).to({graphics:mask_1_graphics_434,x:143.7,y:186.6}).wait(1).to({graphics:mask_1_graphics_435,x:142.7,y:186.6}).wait(1).to({graphics:mask_1_graphics_436,x:144,y:186.6}).wait(1).to({graphics:mask_1_graphics_437,x:145.3,y:186.6}).wait(1).to({graphics:mask_1_graphics_438,x:146.6,y:186.6}).wait(1).to({graphics:mask_1_graphics_439,x:147.9,y:186.6}).wait(1).to({graphics:mask_1_graphics_440,x:149.2,y:186.6}).wait(1).to({graphics:mask_1_graphics_441,x:150.5,y:186.6}).wait(1).to({graphics:mask_1_graphics_442,x:151.8,y:186.6}).wait(1).to({graphics:mask_1_graphics_443,x:153,y:186.5}).wait(1).to({graphics:mask_1_graphics_444,x:154.2,y:186.5}).wait(176));

	// Layer 21
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(20,1,1).p("Am2rcQi7HNj/GpQiODuAvCnQAvCnC2AHQC2AGDRhMQDShME4jQQE5jRH8oc");
	this.shape_2.setTransform(343.9,275.1);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(396).to({_off:false},0).wait(224));

	// Layer 20 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_330 = new cjs.Graphics().p("ATuONIBEh8IEfCcIhDB8g");
	var mask_2_graphics_331 = new cjs.Graphics().p("Ai0gHIBLiMIEeCbIhLCMg");
	var mask_2_graphics_332 = new cjs.Graphics().p("Ai5AAIBUiaIEeCaIhUCbg");
	var mask_2_graphics_333 = new cjs.Graphics().p("Ai9AIIBdiqIEeCbIhdCqg");
	var mask_2_graphics_334 = new cjs.Graphics().p("AjBAPIBli5IEeCcIhlC5g");
	var mask_2_graphics_335 = new cjs.Graphics().p("AjFAXIBtjIIEeCbIhtDIg");
	var mask_2_graphics_336 = new cjs.Graphics().p("AjJAfIB1jYIEeCbIh1DYg");
	var mask_2_graphics_337 = new cjs.Graphics().p("AjOAnIB+joIEeCbIh+Dog");
	var mask_2_graphics_338 = new cjs.Graphics().p("AjSAuICHj3IEeCcIiHD3g");
	var mask_2_graphics_339 = new cjs.Graphics().p("AjWA2ICPkGIEeCbIiPEGg");
	var mask_2_graphics_340 = new cjs.Graphics().p("AjaA9ICXkVIEeCbIiXEWg");
	var mask_2_graphics_341 = new cjs.Graphics().p("AjeBFICfklIEeCcIifElg");
	var mask_2_graphics_342 = new cjs.Graphics().p("AjiBNICnk0IEeCbIinE0g");
	var mask_2_graphics_343 = new cjs.Graphics().p("AjmBVICvlEIEeCbIivFEg");
	var mask_2_graphics_344 = new cjs.Graphics().p("AjrBcIC5lTIEeCcIi5FTg");
	var mask_2_graphics_345 = new cjs.Graphics().p("AjvBkIDBliIEeCbIjBFig");
	var mask_2_graphics_346 = new cjs.Graphics().p("AjzBsIDJlyIEeCbIjJFyg");
	var mask_2_graphics_347 = new cjs.Graphics().p("Aj3BzIDRmBIEeCbIjRGCg");
	var mask_2_graphics_348 = new cjs.Graphics().p("Aj8B7IDamRIEeCcIjaGRg");
	var mask_2_graphics_349 = new cjs.Graphics().p("AkACDIDjmgIEeCbIjjGgg");
	var mask_2_graphics_350 = new cjs.Graphics().p("AkECKIDrmvIEeCbIjrGwg");
	var mask_2_graphics_351 = new cjs.Graphics().p("AkICSIDzm/IEeCcIjzG/g");
	var mask_2_graphics_352 = new cjs.Graphics().p("AkMCaID7nOIEeCbIj7HOg");
	var mask_2_graphics_353 = new cjs.Graphics().p("AkQCiIEDneIEeCbIkDHeg");
	var mask_2_graphics_354 = new cjs.Graphics().p("AkUCpIELntIEeCbIkLHug");
	var mask_2_graphics_355 = new cjs.Graphics().p("AkZCxIEVn8IEeCbIkVH8g");
	var mask_2_graphics_356 = new cjs.Graphics().p("AkdC5IEdoMIEeCbIkdIMg");
	var mask_2_graphics_357 = new cjs.Graphics().p("AkhDAIEkobIEfCbIkkIcg");
	var mask_2_graphics_358 = new cjs.Graphics().p("AklDIIEsorIEfCcIksIrg");
	var mask_2_graphics_359 = new cjs.Graphics().p("AkqDQIE1o6IEfCbIk0I6g");
	var mask_2_graphics_360 = new cjs.Graphics().p("AkuDYIE9pKIEfCbIk8JKg");
	var mask_2_graphics_361 = new cjs.Graphics().p("AkyDfIFGpZIEfCcIlGJZg");
	var mask_2_graphics_362 = new cjs.Graphics().p("Ak2DnIFOpoIEfCbIlOJog");
	var mask_2_graphics_363 = new cjs.Graphics().p("Ak6DvIFWp4IEfCbIlWJ4g");
	var mask_2_graphics_364 = new cjs.Graphics().p("Ak+D2IFfqHIEfCbIlfKIg");
	var mask_2_graphics_365 = new cjs.Graphics().p("AlDD+IFoqXIEfCcIloKXg");
	var mask_2_graphics_366 = new cjs.Graphics().p("AlHEGIFwqmIEfCbIlwKmg");
	var mask_2_graphics_367 = new cjs.Graphics().p("AlLENIF4q1IEfCbIl4K2g");
	var mask_2_graphics_368 = new cjs.Graphics().p("AlPEVIGArFIEfCcImALFg");
	var mask_2_graphics_369 = new cjs.Graphics().p("AlUEdIGKrUIEfCbImKLUg");
	var mask_2_graphics_370 = new cjs.Graphics().p("AlYElIGSrkIEfCbImSLkg");
	var mask_2_graphics_371 = new cjs.Graphics().p("AlcEsIGarzIEfCbImaL0g");
	var mask_2_graphics_372 = new cjs.Graphics().p("AlgE0IGisCIEfCbImiMDg");
	var mask_2_graphics_373 = new cjs.Graphics().p("AlkE8IGqsSIEfCbImqMSg");
	var mask_2_graphics_374 = new cjs.Graphics().p("AloFDIGyshIEfCbImyMig");
	var mask_2_graphics_375 = new cjs.Graphics().p("AlsFLIG7sxIEfCcIm7Mxg");
	var mask_2_graphics_376 = new cjs.Graphics().p("AlxFTIHEtAIEfCbInENAg");
	var mask_2_graphics_377 = new cjs.Graphics().p("Al1FaIHMtPIEfCbInMNQg");
	var mask_2_graphics_378 = new cjs.Graphics().p("Al5FiIHUtfIEfCcInUNfg");
	var mask_2_graphics_379 = new cjs.Graphics().p("Al9FqIHctuIEfCbIncNvg");
	var mask_2_graphics_380 = new cjs.Graphics().p("AmCFyIHlt+IEgCbInlN+g");
	var mask_2_graphics_381 = new cjs.Graphics().p("AmGF5IHuuNIEfCbInuOOg");
	var mask_2_graphics_382 = new cjs.Graphics().p("AmKGBIH2udIEfCcIn2Odg");
	var mask_2_graphics_383 = new cjs.Graphics().p("AmOGJIH+usIEfCbIn+Osg");
	var mask_2_graphics_384 = new cjs.Graphics().p("AmSGQIIGu7IEfCbIoGO8g");
	var mask_2_graphics_385 = new cjs.Graphics().p("AmWGYIIOvLIEfCcIoOPLg");
	var mask_2_graphics_386 = new cjs.Graphics().p("AmbGgIIXvaIEgCbIoYPbg");
	var mask_2_graphics_387 = new cjs.Graphics().p("AmfGoIIgvqIEfCbIogPqg");
	var mask_2_graphics_388 = new cjs.Graphics().p("AmjGvIIov5IEfCcIooP5g");
	var mask_2_graphics_389 = new cjs.Graphics().p("AmnG3IIwwIIEfCbIowQJg");
	var mask_2_graphics_390 = new cjs.Graphics().p("AmrG/II4wYIEfCbIo4QYg");
	var mask_2_graphics_391 = new cjs.Graphics().p("AmvHGIJAwnIEfCbIpAQog");
	var mask_2_graphics_392 = new cjs.Graphics().p("AmzHOIJIw3IEgCcIpJQ3g");
	var mask_2_graphics_393 = new cjs.Graphics().p("Am4HWIJSxGIEfCbIpSRHg");
	var mask_2_graphics_394 = new cjs.Graphics().p("Am8HdIJaxVIEfCbIpaRWg");
	var mask_2_graphics_395 = new cjs.Graphics().p("AnAHlIJixlIEfCcIpiRlg");
	var mask_2_graphics_396 = new cjs.Graphics().p("ALHWKIJrx1IEfCbIprR2g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(330).to({graphics:mask_2_graphics_330,x:161.7,y:106.5}).wait(1).to({graphics:mask_2_graphics_331,x:305.3,y:199.8}).wait(1).to({graphics:mask_2_graphics_332,x:304.9,y:200.6}).wait(1).to({graphics:mask_2_graphics_333,x:304.4,y:201.3}).wait(1).to({graphics:mask_2_graphics_334,x:304,y:202.1}).wait(1).to({graphics:mask_2_graphics_335,x:303.6,y:202.9}).wait(1).to({graphics:mask_2_graphics_336,x:303.2,y:203.6}).wait(1).to({graphics:mask_2_graphics_337,x:302.8,y:204.4}).wait(1).to({graphics:mask_2_graphics_338,x:302.3,y:205.2}).wait(1).to({graphics:mask_2_graphics_339,x:301.9,y:205.9}).wait(1).to({graphics:mask_2_graphics_340,x:301.5,y:206.7}).wait(1).to({graphics:mask_2_graphics_341,x:301.1,y:207.5}).wait(1).to({graphics:mask_2_graphics_342,x:300.7,y:208.3}).wait(1).to({graphics:mask_2_graphics_343,x:300.3,y:209}).wait(1).to({graphics:mask_2_graphics_344,x:299.8,y:209.8}).wait(1).to({graphics:mask_2_graphics_345,x:299.4,y:210.6}).wait(1).to({graphics:mask_2_graphics_346,x:299,y:211.3}).wait(1).to({graphics:mask_2_graphics_347,x:298.6,y:212.1}).wait(1).to({graphics:mask_2_graphics_348,x:298.2,y:212.9}).wait(1).to({graphics:mask_2_graphics_349,x:297.7,y:213.7}).wait(1).to({graphics:mask_2_graphics_350,x:297.3,y:214.4}).wait(1).to({graphics:mask_2_graphics_351,x:296.9,y:215.2}).wait(1).to({graphics:mask_2_graphics_352,x:296.5,y:216}).wait(1).to({graphics:mask_2_graphics_353,x:296.1,y:216.7}).wait(1).to({graphics:mask_2_graphics_354,x:295.7,y:217.5}).wait(1).to({graphics:mask_2_graphics_355,x:295.2,y:218.3}).wait(1).to({graphics:mask_2_graphics_356,x:294.8,y:219}).wait(1).to({graphics:mask_2_graphics_357,x:294.4,y:219.8}).wait(1).to({graphics:mask_2_graphics_358,x:294,y:220.6}).wait(1).to({graphics:mask_2_graphics_359,x:293.6,y:221.4}).wait(1).to({graphics:mask_2_graphics_360,x:293.2,y:222.1}).wait(1).to({graphics:mask_2_graphics_361,x:292.7,y:222.9}).wait(1).to({graphics:mask_2_graphics_362,x:292.3,y:223.7}).wait(1).to({graphics:mask_2_graphics_363,x:291.9,y:224.4}).wait(1).to({graphics:mask_2_graphics_364,x:291.5,y:225.2}).wait(1).to({graphics:mask_2_graphics_365,x:291.1,y:226}).wait(1).to({graphics:mask_2_graphics_366,x:290.7,y:226.7}).wait(1).to({graphics:mask_2_graphics_367,x:290.3,y:227.5}).wait(1).to({graphics:mask_2_graphics_368,x:289.8,y:228.3}).wait(1).to({graphics:mask_2_graphics_369,x:289.4,y:229.1}).wait(1).to({graphics:mask_2_graphics_370,x:289,y:229.8}).wait(1).to({graphics:mask_2_graphics_371,x:288.6,y:230.6}).wait(1).to({graphics:mask_2_graphics_372,x:288.2,y:231.4}).wait(1).to({graphics:mask_2_graphics_373,x:287.7,y:232.1}).wait(1).to({graphics:mask_2_graphics_374,x:287.3,y:232.9}).wait(1).to({graphics:mask_2_graphics_375,x:286.9,y:233.7}).wait(1).to({graphics:mask_2_graphics_376,x:286.5,y:234.5}).wait(1).to({graphics:mask_2_graphics_377,x:286.1,y:235.2}).wait(1).to({graphics:mask_2_graphics_378,x:285.7,y:236}).wait(1).to({graphics:mask_2_graphics_379,x:285.2,y:236.8}).wait(1).to({graphics:mask_2_graphics_380,x:284.8,y:237.5}).wait(1).to({graphics:mask_2_graphics_381,x:284.4,y:238.3}).wait(1).to({graphics:mask_2_graphics_382,x:284,y:239.1}).wait(1).to({graphics:mask_2_graphics_383,x:283.6,y:239.8}).wait(1).to({graphics:mask_2_graphics_384,x:283.2,y:240.6}).wait(1).to({graphics:mask_2_graphics_385,x:282.7,y:241.4}).wait(1).to({graphics:mask_2_graphics_386,x:282.3,y:242.2}).wait(1).to({graphics:mask_2_graphics_387,x:281.9,y:242.9}).wait(1).to({graphics:mask_2_graphics_388,x:281.5,y:243.7}).wait(1).to({graphics:mask_2_graphics_389,x:281.1,y:244.5}).wait(1).to({graphics:mask_2_graphics_390,x:280.6,y:245.2}).wait(1).to({graphics:mask_2_graphics_391,x:280.2,y:246}).wait(1).to({graphics:mask_2_graphics_392,x:279.8,y:246.8}).wait(1).to({graphics:mask_2_graphics_393,x:279.4,y:247.6}).wait(1).to({graphics:mask_2_graphics_394,x:279,y:248.3}).wait(1).to({graphics:mask_2_graphics_395,x:278.6,y:249.1}).wait(1).to({graphics:mask_2_graphics_396,x:161.7,y:157.4}).wait(224));

	// Layer 19
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(20,1,1).p("Am2rcQi7HNj/GpQiODuAvCnQAvCnC2AHQC2AGDRhMQDShME4jQQE5jRH8oc");
	this.shape_3.setTransform(343.9,275.1);
	this.shape_3._off = true;

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(330).to({_off:false},0).wait(290));

	// Layer 26
	this.instance_2 = new lib.ar6("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(204.5,249.8,1,1,9.9,0,0,-1.2,1.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(90).to({_off:false},0).wait(530));

	// Layer 18 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_199 = new cjs.Graphics().p("AmDV8QomomAAsJQAAsIImokQIkomMJAAMAAAA6lQsJAAokokg");
	var mask_3_graphics_200 = new cjs.Graphics().p("Al9WOQotofgLsIQgKsIIeosQIcotMJgKMAAyA6kIgdAAQr2AAogoSg");
	var mask_3_graphics_201 = new cjs.Graphics().p("Al4WfQo0oXgVsIQgVsIIXozQIUo0MJgVMABlA6kIg6AAQrkAAodoBg");
	var mask_3_graphics_202 = new cjs.Graphics().p("AlyWwQo7oPggsIQgfsIIPo6QINo7MIgfMACXA6iQgrABgrAAQrSAAoZnwg");
	var mask_3_graphics_203 = new cjs.Graphics().p("AlsXBQpCoHgqsIQgqsHIIpBQIFpCMHgqMADKA6fQg6AEg5AAQrAAAoVngg");
	var mask_3_graphics_204 = new cjs.Graphics().p("AllXSQpKoAg0sHQg0sGIApIQH+pKMGg0MAD8A6dQhIAFhGAAQqwAAoQnPg");
	var mask_3_graphics_205 = new cjs.Graphics().p("AlfXiQpQn4g/sGQg+sFH4pPQH2pQMFg/MAEuA6ZQhVAHhUAAQqeAAoNm/g");
	var mask_3_graphics_206 = new cjs.Graphics().p("AlYXyQpXnvhJsGQhJsFHwpVQHupXMFhJMAFgA6UQhjAKhhAAQqOAAoImvg");
	var mask_3_graphics_207 = new cjs.Graphics().p("AlRYCQpdnohUsEQhTsEHopcQHmpdMDhUMAGTA6QQhxAMhuAAQp+AAoDmfg");
	var mask_3_graphics_208 = new cjs.Graphics().p("AlJYRQpknfhesDQhesDHgpiQHdpkMDheMAHFA6KQh/APh6AAQpvAAn9mQg");
	var mask_3_graphics_209 = new cjs.Graphics().p("AlCYhQpqnXhosCQhosBHXppQHVprMBhoMAH3A6DQiMATiGAAQpgAAn4mAg");
	var mask_3_graphics_210 = new cjs.Graphics().p("Ak6YwQpxnPhysBQhzr/HPpvQHOpxL/hyMAIpA58QiZAWiTAAQpRAAnylxg");
	var mask_3_graphics_211 = new cjs.Graphics().p("AkyY+Qp3nGh9r/Qh8r+HGp1QHFp3L+h9MAJaA51QilAaigAAQpBAAntljg");
	var mask_3_graphics_212 = new cjs.Graphics().p("AkpZNQp9m+iIr9QiHr8G+p8QG9p9L8iHMAKMA5sQiyAgisAAQozAAnmlVg");
	var mask_3_graphics_213 = new cjs.Graphics().p("AkhZbQqDm1iRr8QiSr6G2qBQGzqDL7iRMAK+A5iQi/Ali4AAQolAAnglHg");
	var mask_3_graphics_214 = new cjs.Graphics().p("AkYZpQqJmticr5Qibr4GsqHQGrqJL5icMALvA5ZQjLAqjDAAQoYAAnZk5g");
	var mask_3_graphics_215 = new cjs.Graphics().p("AkPZ2QqPmjimr3Qilr3GkqNQGiqOL2imMAMhA5PQjYAvjPAAQoKAAnSksg");
	var mask_3_graphics_216 = new cjs.Graphics().p("AkGaEQqUmbiwr1Qiwr0GbqSQGZqUL0iwMANSA5DQjjA1jbAAQn9AAnLkeg");
	var mask_3_graphics_217 = new cjs.Graphics().p("Aj9aRQqZmSi6rzQi7rxGTqYQGQqZLxi6MAODA43QjvA7jmAAQnwAAnEkRg");
	var mask_3_graphics_218 = new cjs.Graphics().p("AjzadQqfmJjErvQjFrvGKqeQGHqeLvjEMAO0A4rQj7BBjyAAQniAAm9kFg");
	var mask_3_graphics_219 = new cjs.Graphics().p("AjpaqQqkmAjPrtQjOrsGAqjQF+qkLtjOMAPkA4eQkGBJj+AAQnVAAm1j5g");
	var mask_3_graphics_220 = new cjs.Graphics().p("Ajfa2Qqpl3jZrqQjZrpF4qoQF1qpLpjYMAQVA4QQkRBQkJAAQnJAAmtjtg");
	var mask_3_graphics_221 = new cjs.Graphics().p("AjVbCQqulujjrnQjirmFuqtQFsquLmjiMARFA4CQkcBXkVAAQm8AAmljhg");
	var mask_3_graphics_222 = new cjs.Graphics().p("AjLbNQqzlkjsrkQjtrjFlqyQFjqyLjjtMAR2A3zQkoBfkgAAQmwAAmdjWg");
	var mask_3_graphics_223 = new cjs.Graphics().p("AjAbZQq4lbj2rhQj3rgFcq2QFZq4Lgj2MASmA3jQkzBnkrAAQmkAAmUjKg");
	var mask_3_graphics_224 = new cjs.Graphics().p("Ai1bkQq9lSkArdQkArdFSq7QFQq8LckAMATWA3TQk9Bvk3AAQmYAAmLi/g");
	var mask_3_graphics_225 = new cjs.Graphics().p("AiqbuQrBlIkKraQkLrZFJq/QFHrALakLMAUDA3DQlHB3lCAAQmMAAmCi1g");
	var mask_3_graphics_226 = new cjs.Graphics().p("Aifb5QrFk/kUrWQkUrWE/rDQE9rFLWkUMAUzA2xQlRCAlOAAQmAAAl5iqg");
	var mask_3_graphics_227 = new cjs.Graphics().p("AiUcDQrJk1kerTQkerSE2rHQE0rJLSkeMAViA2fQlbCJlZAAQl1AAlwigg");
	var mask_3_graphics_228 = new cjs.Graphics().p("AiIcNQrOksknrOQkorPEsrLQEqrNLPknMAWRA2LQlmCTlkAAQlpAAlmiWg");
	var mask_3_graphics_229 = new cjs.Graphics().p("Ah9cWQrRkhkxrLQkxrLEirPQEhrRLKkxMAW/A14QlvCdlwAAQldAAldiNg");
	var mask_3_graphics_230 = new cjs.Graphics().p("AhxcgQrVkYk7rHQk6rGEYrTQEXrVLHk7MAXtA1kQl4Cnl8AAQlSAAlTiDg");
	var mask_3_graphics_231 = new cjs.Graphics().p("AhlcoQrZkOlErCQlErCEPrXQENrYLClEMAYbA1PQmBCxmIAAQlGAAlJh7g");
	var mask_3_graphics_232 = new cjs.Graphics().p("AhYcxQrdkElOq+QlNq+EFraQEDrcK+lNMAZJA05QmLC8mTAAQk7AAk+hyg");
	var mask_3_graphics_233 = new cjs.Graphics().p("AhMc5Qrgj6lXq5QlXq6D7rdQD5rfK6lXMAZ2A0jQmTDHmgAAQkvAAk0hqg");
	var mask_3_graphics_234 = new cjs.Graphics().p("Ag/dBQrkjwlgq1Qlhq0DyrhQDvrjK1lgMAajA0NQmcDSmrAAQkkAAkphig");
	var mask_3_graphics_235 = new cjs.Graphics().p("AgzdJQrmjnlqqvQlpqwDnrkQDlrmKwlqMAbQAz3QmkDdm4AAQkYAAkfhag");
	var mask_3_graphics_236 = new cjs.Graphics().p("AgmdRQrpjdlzqrQlzqrDdrnQDcrpKrlzMAb8AzfQmsDonEAAQkNAAkUhRg");
	var mask_3_graphics_237 = new cjs.Graphics().p("AgZdYQrsjTl8qmQl8qmDTrqQDSrrKll8MAcpAzGQm0D0nRAAQkBAAkJhKg");
	var mask_3_graphics_238 = new cjs.Graphics().p("AgLdeQrwjImFqhQmFqgDJrtQDIrvKgmFMAdVAytQm8EBneAAQj1AAj9hEg");
	var mask_3_graphics_239 = new cjs.Graphics().p("AABdlQrxi/mOqbQmOqbC/rwQC9rxKcmOMAeAAyUQnEENnqAAQjqAAjzg9g");
	var mask_3_graphics_240 = new cjs.Graphics().p("AAOdrQrzi0mXqWQmXqWC1ryQCzr0KWmXMAesAx6QnMEan3AAQjeAAjog3g");
	var mask_3_graphics_241 = new cjs.Graphics().p("AAcdxQr1iqmgqRQmgqQCrr0QCpr2KQmgMAfWAxeQnSEooFAAQjTAAjbgxg");
	var mask_3_graphics_242 = new cjs.Graphics().p("AAqd2Qr4igmoqKQmpqLChr3QCer4KLmoMAgBAxDQnaE1oSAAQjHAAjPgsg");
	var mask_3_graphics_243 = new cjs.Graphics().p("AA4d7Qr6iVmxqFQmyqFCXr5QCUr6KFmxMAgrAwnQngFCogAAQi7AAjDgmg");
	var mask_3_graphics_244 = new cjs.Graphics().p("ABGeAQr8iLm6p/Qm6p/CNr7QCKr8J/m6MAhUAwLQnmFQouAAQivAAi3ghg");
	var mask_3_graphics_245 = new cjs.Graphics().p("ABVeFQr+iCnDp5QnCp5CCr8QCAr+J5nCMAh9AvuQnsFeo8AAQijAAiqgcg");
	var mask_3_graphics_246 = new cjs.Graphics().p("ABjeJQr/h3nLpzQnLpzB3r+QB2r/JznLMAimAvQQnyFtpKAAQiYAAidgYg");
	var mask_3_graphics_247 = new cjs.Graphics().p("AByeNQsBhtnTptQnUpsBtsAQBssBJsnTMAjPAuyQn4F8pZAAQiLAAiQgUg");
	var mask_3_graphics_248 = new cjs.Graphics().p("ACBeQQsDhinbpmQncpnBjsBQBhsCJmncMAj3AuUQn9GLppAAQh+AAiDgRg");
	var mask_3_graphics_249 = new cjs.Graphics().p("ACQeTQsEhYnkpfQnkpgBZsDQBWsDJgnkMAkfAt1QoDGZp3AAQhyAAh2gNg");
	var mask_3_graphics_250 = new cjs.Graphics().p("ACfeWQsFhNnspaQnspZBOsDQBMsFJansMAlGAtVQoIGpqHAAQhmAAhogKg");
	var mask_3_graphics_251 = new cjs.Graphics().p("ACueYQsGhDn0pSQn0pTBEsEQBCsGJSn0MAltAs1QoNG5qXAAQhYAAhbgIg");
	var mask_3_graphics_252 = new cjs.Graphics().p("AC9eaQsGg4n8pMQn8pMA5sFQA4sGJLn8MAmUAsUQoSHJqnAAQhLAAhOgGg");
	var mask_3_graphics_253 = new cjs.Graphics().p("ADNecQsHguoEpFQoEpFAvsGQAtsHJFoEMAm5ArzQoWHaq4AAQg+AAg/gEg");
	var mask_3_graphics_254 = new cjs.Graphics().p("ADdeeQsIgkoMo+QoLo+AksGQAjsII+oMMAneArRQoZHrrKAAQgwAAgxgCg");
	var mask_3_graphics_255 = new cjs.Graphics().p("ADtefQsJgaoTo2QoTo3AasIQAYsHI3oUMAoDAqvQodH8rbAAIhFgBg");
	var mask_3_graphics_256 = new cjs.Graphics().p("AD9efQsJgOobowQobowAQsIQAOsHIvobMAooAqMQogINruAAIgogBg");
	var mask_3_graphics_257 = new cjs.Graphics().p("AENegQsJgFoiooQojooAGsJQADsHIoojMApMAppQokIfsAAAIgLAAg");
	var mask_3_graphics_258 = new cjs.Graphics().p("AwVWFQoqohgFsJQgIsHIhoqMApwApFQohIqsHAHIgSAAQr9AAojobg");
	var mask_3_graphics_259 = new cjs.Graphics().p("AwMWWQoxoZgQsIQgRsIIZoxMAqTAohQoZIxsHARIgvABQrrAAogoKg");
	var mask_3_graphics_260 = new cjs.Graphics().p("AwCWoQo4oSgasIQgdsHISo4MAq2An8QoSI4sHAbIhLACQrZAAocn4g");
	var mask_3_graphics_261 = new cjs.Graphics().p("Av4W5Qo/oLglsHQgmsHIKo/MArYAnXQoLJAsGAlQg0ADg0AAQrGAAoZnng");
	var mask_3_graphics_262 = new cjs.Graphics().p("AvuXJQpGoCgvsHQgxsGIDpGMAr5AmxQoCJHsGAwQhDAEhAAAQq2AAoVnXg");
	var mask_3_graphics_263 = new cjs.Graphics().p("AvjXaQpNn7g5sGQg8sFH7pNMAsaAmLQn6JOsFA6QhQAGhPAAQqkAAoRnGg");
	var mask_3_graphics_264 = new cjs.Graphics().p("AvXXqQpUnzhEsFQhGsEHzpUMAs7AllQnzJUsEBFQheAIhcAAQqUAAoLm2g");
	var mask_3_graphics_265 = new cjs.Graphics().p("AvMX6QpanrhPsEQhQsDHrpbMAtbAk+QnrJbsDBPQhsALhoAAQqEAAoHmmg");
	var mask_3_graphics_266 = new cjs.Graphics().p("AvAYJQphnihZsDQhasCHiphMAt7AkXQniJhsDBZQh5AOh1AAQp0AAoCmXg");
	var mask_3_graphics_267 = new cjs.Graphics().p("Au0YZQpnnahjsCQhlsBHapoMAuaAjwQnaJnsBBkQiGARiCAAQplAAn9mHg");
	var mask_3_graphics_268 = new cjs.Graphics().p("AunYoQpunShtsBQhwr/HSpuMAu5AjHQnSJusABuQiTAViOAAQpWABn3l5g");
	var mask_3_graphics_269 = new cjs.Graphics().p("AuaY3Qp0nKh4r/Qh5r+HJp0MAvWAifQnJJ0r+B4QigAaibAAQpHAAnxlqg");
	var mask_3_graphics_270 = new cjs.Graphics().p("AuNZFQp6nBiCr9QiEr8HBp6MAv0Ah1QnBJ6r8CDQiuAeimAAQo5AAnrlcg");
	var mask_3_graphics_271 = new cjs.Graphics().p("At/ZUQqAm5iNr7QiOr7G5qAMAwQAhMQm4KBr7CNQi5AiizAAQorAAnklNg");
	var mask_3_graphics_272 = new cjs.Graphics().p("AtxZiQqGmwiXr6QiYr4GwqGMAwsAgiQmvKGr5CYQjGAni+AAQodAAnek/g");
	var mask_3_graphics_273 = new cjs.Graphics().p("AtjZvQqMmnigr3Qijr2GnqMMAxJAf4QmnKMr3ChQjSAtjKAAQoQAAnXkyg");
	var mask_3_graphics_274 = new cjs.Graphics().p("AtUZ9QqSmeirr2Qisr0GeqRMAxkAfOQmfKRr0CsQjeAyjWAAQoCAAnQkkg");
	var mask_3_graphics_275 = new cjs.Graphics().p("AtFaKQqXmVi1rzQi3ryGVqXMAx+AejQmVKXryC2QjqA4jiAAQn0AAnJkXg");
	var mask_3_graphics_276 = new cjs.Graphics().p("As2aXQqdmNi/rwQjBrvGNqcMAyYAd3QmMKdrwDAQj2A/jtAAQnnAAnCkLg");
	var mask_3_graphics_277 = new cjs.Graphics().p("AsnajQqhmDjJruQjMrsGEqiMAyxAdNQmDKhrsDKQkCBGj5AAQnaAAm7j/g");
	var mask_3_graphics_278 = new cjs.Graphics().p("AsXawQqnl7jTrrQjVrpF6qnMAzLAcgQl6KnrqDUQkNBNkFAAQnNAAmzjyg");
	var mask_3_graphics_279 = new cjs.Graphics().p("AsHa8QqrlxjerpQjfrmFxqsMAzjAb0QlxKsrnDeQkYBUkQAAQnBAAmrjmg");
	var mask_3_graphics_280 = new cjs.Graphics().p("Ar2bHQqxlnjnrmQjqrjFoqxMAz7AbIQloKxrkDoQkjBbkbAAQm1AAmijbg");
	var mask_3_graphics_281 = new cjs.Graphics().p("ArlbTQq2lfjxriQjzrgFeq1MA0SAaaQlfK2rgDyQkuBjknAAQmpAAmZjPg");
	var mask_3_graphics_282 = new cjs.Graphics().p("ArUbeQq6lVj8rfQj9rdFVq6MA0oAZuQlVK6rdD8Qk5BrkyAAQmcAAmRjEg");
	var mask_3_graphics_283 = new cjs.Graphics().p("ArDbpQq/lMkFrbQkHraFMq+MA0+AZAQlMK/raEFQlDB0k9AAQmRAAmIi5g");
	var mask_3_graphics_284 = new cjs.Graphics().p("AqxbzQrDlCkPrYQkRrWFCrCMA1TAYSQlCLDrWEQQlOB8lJAAQmEAAl/ivg");
	var mask_3_graphics_285 = new cjs.Graphics().p("Aqgb+QrHk5kYrUQkbrTE5rGMA1oAXkQk5LHrTEZQlXCGlVAAQl5AAl2ikg");
	var mask_3_graphics_286 = new cjs.Graphics().p("AqNcIQrMkvkirRQkkrPEvrKMA18AW2QkwLLrOEjQliCPlgAAQltAAlsiag");
	var mask_3_graphics_287 = new cjs.Graphics().p("Ap7cRQrPklksrMQkurMElrOMA2PAWIQklLPrLEtQlrCYlsAAQlhAAljiRg");
	var mask_3_graphics_288 = new cjs.Graphics().p("ApocbQrUkck1rIQk4rHEcrTMA2iAVZQkcLTrGE3Ql1Cil3AAQlWAAlZiHg");
	var mask_3_graphics_289 = new cjs.Graphics().p("ApVckQrXkSk/rEQlBrDESrWMA20AUqQkSLXrDE/Ql+CtmDAAQlKAAlPh+g");
	var mask_3_graphics_290 = new cjs.Graphics().p("ApCctQrbkJlIq/QlLq/EIrZMA3GAT6QkILbq+FJQmHC3mPAAQk/AAlFh1g");
	var mask_3_graphics_291 = new cjs.Graphics().p("Aouc1Qrfj+lSq7QlUq6D/reMA3WATLQj+Leq6FTQmQDCmbAAQkzAAk6htg");
	var mask_3_graphics_292 = new cjs.Graphics().p("Aobc9Qrhj0lcq3Qldq1D1rhMA3mASbQj0Liq1FcQmZDNmnAAQkoAAkwhlg");
	var mask_3_graphics_293 = new cjs.Graphics().p("AoHdFQrkjrllqxQlnqxDrrkMA32ARsQjrLkqwFlQmhDZmzAAQkdAAklhdg");
	var mask_3_graphics_294 = new cjs.Graphics().p("AnydNQrojhluqtQlwqsDhrmMA4FAQ7QjhLnqrFvQmqDkm/AAQkRAAkahVg");
	var mask_3_graphics_295 = new cjs.Graphics().p("AnedUQrrjXl3qoQl5qmDXrqMA4TAQKQjXLrqmF4QmxDwnMAAQkGAAkPhOg");
	var mask_3_graphics_296 = new cjs.Graphics().p("AnJdbQrujNmAqiQmCqiDNrtMA4gAPaQjMLuqhGBQm6D8nZAAQj5AAkEhHg");
	var mask_3_graphics_297 = new cjs.Graphics().p("Am0dhQrwjCmKqeQmLqcDDrvMA4tAOpQjCLwqcGKQnBEInmAAQjuAAj4hAg");
	var mask_3_graphics_298 = new cjs.Graphics().p("AmfdoQrzi5mSqYQmUqXC4ryMA46AN5Qi4LzqXGSQnIEVnzAAQjiAAjtg5g");
	var mask_3_graphics_299 = new cjs.Graphics().p("AmJdtQr2iumbqSQmdqSCur0MA5GANHQiuL2qRGbQnQEioAAAQjXAAjgg0g");
	var mask_3_graphics_300 = new cjs.Graphics().p("Al0dzQr3ikmkqNQmmqMCkr2MA5RAMWQikL3qMGlQnWEvoOAAQjLAAjVgug");
	var mask_3_graphics_301 = new cjs.Graphics().p("Aled4Qr5iZmtqIQmuqGCZr4MA5bALkQiZL6qGGtQneE9obAAQi/AAjJgpg");
	var mask_3_graphics_302 = new cjs.Graphics().p("AlHd9Qr8iPm1qCQm4qACQr6MA5kAKzQiPL7qAG2QnkFLopAAQizAAi8gkg");
	var mask_3_graphics_303 = new cjs.Graphics().p("AkxeCQr+iFm9p8QnAp6CFr9MA5uAKCQiGL+p6G+QnqFZo3AAQinAAiwgfg");
	var mask_3_graphics_304 = new cjs.Graphics().p("AkaeGQsAh7nGp1QnIp0B7r/MA51AJQQh6MAp0HGQnxFnpFAAQicAAiigag");
	var mask_3_graphics_305 = new cjs.Graphics().p("AkEeKQsAhwnPpwQnRpuBxr/MA59AIeQhwMApuHPQn2F2pUAAQiQAAiWgWg");
	var mask_3_graphics_306 = new cjs.Graphics().p("AjseOQsDhmnXppQnZpoBmsBMA6FAHsQhmMCpoHXQn7GFpkAAQiDAAiIgSg");
	var mask_3_graphics_307 = new cjs.Graphics().p("AjVeRQsEhcnfpiQnhpiBbsCMA6LAG6QhcMDphHgQoBGUpyAAQh2AAh8gPg");
	var mask_3_graphics_308 = new cjs.Graphics().p("Ai+eUQsEhRnopcQnppbBRsEMA6QAGIQhRMFpbHnQoGGkqCAAQhpAAhvgMg");
	var mask_3_graphics_309 = new cjs.Graphics().p("AimeXQsGhHnvpWQnypUBHsFMA6WAFWQhHMGpUHwQoLGzqSAAQhdAAhhgJg");
	var mask_3_graphics_310 = new cjs.Graphics().p("AiOeZQsHg9n3pOQn6pOA9sFMA6aAEjQg9MHpNH3QoQHEqiAAQhQAAhTgHg");
	var mask_3_graphics_311 = new cjs.Graphics().p("Ah2ebQsHgyoApIQoBpHAysGMA6dADxQgyMHpGIAQoUHTqzAAQhDAAhFgEg");
	var mask_3_graphics_312 = new cjs.Graphics().p("AhdecQsIgnoIpBQoJpAAosHMA6gAC/QgoMIo/IHQoZHkrDAAQg1AAg3gDg");
	var mask_3_graphics_313 = new cjs.Graphics().p("AhFedQsIgdoPo6QoRo5AdsIMA6iACNQgdMJo4IPQodH1rVAAQgnAAgpgCg");
	var mask_3_graphics_314 = new cjs.Graphics().p("A0WWPQovocgNsIMA6lgA/QAMMJobIuQocIusJANIgjABQryAAogoQg");
	var mask_3_graphics_315 = new cjs.Graphics().p("AzOXTQpLn8g3sHMA6cgEIQA3MGn8JJQn+JMsHA3QhLAFhJAAQqrAAoRnMg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(199).to({graphics:mask_3_graphics_199,x:59.1,y:195.2}).wait(1).to({graphics:mask_3_graphics_200,x:60.3,y:195.2}).wait(1).to({graphics:mask_3_graphics_201,x:61.6,y:195.2}).wait(1).to({graphics:mask_3_graphics_202,x:62.8,y:195.2}).wait(1).to({graphics:mask_3_graphics_203,x:64.1,y:195.3}).wait(1).to({graphics:mask_3_graphics_204,x:65.3,y:195.3}).wait(1).to({graphics:mask_3_graphics_205,x:66.6,y:195.3}).wait(1).to({graphics:mask_3_graphics_206,x:67.8,y:195.3}).wait(1).to({graphics:mask_3_graphics_207,x:69.1,y:195.3}).wait(1).to({graphics:mask_3_graphics_208,x:70.3,y:195.3}).wait(1).to({graphics:mask_3_graphics_209,x:71.6,y:195.3}).wait(1).to({graphics:mask_3_graphics_210,x:72.8,y:195.3}).wait(1).to({graphics:mask_3_graphics_211,x:74,y:195.3}).wait(1).to({graphics:mask_3_graphics_212,x:75.2,y:195.4}).wait(1).to({graphics:mask_3_graphics_213,x:76.5,y:195.4}).wait(1).to({graphics:mask_3_graphics_214,x:77.7,y:195.4}).wait(1).to({graphics:mask_3_graphics_215,x:78.9,y:195.4}).wait(1).to({graphics:mask_3_graphics_216,x:80.1,y:195.4}).wait(1).to({graphics:mask_3_graphics_217,x:81.3,y:195.4}).wait(1).to({graphics:mask_3_graphics_218,x:82.6,y:195.4}).wait(1).to({graphics:mask_3_graphics_219,x:83.8,y:195.5}).wait(1).to({graphics:mask_3_graphics_220,x:85,y:195.5}).wait(1).to({graphics:mask_3_graphics_221,x:86.2,y:195.5}).wait(1).to({graphics:mask_3_graphics_222,x:87.4,y:195.5}).wait(1).to({graphics:mask_3_graphics_223,x:88.5,y:195.5}).wait(1).to({graphics:mask_3_graphics_224,x:89.7,y:195.5}).wait(1).to({graphics:mask_3_graphics_225,x:90.9,y:195.5}).wait(1).to({graphics:mask_3_graphics_226,x:92.1,y:195.5}).wait(1).to({graphics:mask_3_graphics_227,x:93.3,y:195.5}).wait(1).to({graphics:mask_3_graphics_228,x:94.4,y:195.5}).wait(1).to({graphics:mask_3_graphics_229,x:95.6,y:195.5}).wait(1).to({graphics:mask_3_graphics_230,x:96.8,y:195.5}).wait(1).to({graphics:mask_3_graphics_231,x:97.9,y:195.5}).wait(1).to({graphics:mask_3_graphics_232,x:99.1,y:195.5}).wait(1).to({graphics:mask_3_graphics_233,x:100.2,y:195.5}).wait(1).to({graphics:mask_3_graphics_234,x:101.3,y:195.5}).wait(1).to({graphics:mask_3_graphics_235,x:102.5,y:195.5}).wait(1).to({graphics:mask_3_graphics_236,x:103.6,y:195.4}).wait(1).to({graphics:mask_3_graphics_237,x:104.7,y:195.4}).wait(1).to({graphics:mask_3_graphics_238,x:105.8,y:195.4}).wait(1).to({graphics:mask_3_graphics_239,x:106.9,y:195.4}).wait(1).to({graphics:mask_3_graphics_240,x:108,y:195.4}).wait(1).to({graphics:mask_3_graphics_241,x:109.1,y:195.4}).wait(1).to({graphics:mask_3_graphics_242,x:110.1,y:195.4}).wait(1).to({graphics:mask_3_graphics_243,x:111.2,y:195.3}).wait(1).to({graphics:mask_3_graphics_244,x:112.3,y:195.3}).wait(1).to({graphics:mask_3_graphics_245,x:113.3,y:195.3}).wait(1).to({graphics:mask_3_graphics_246,x:114.4,y:195.3}).wait(1).to({graphics:mask_3_graphics_247,x:115.4,y:195.3}).wait(1).to({graphics:mask_3_graphics_248,x:116.4,y:195.3}).wait(1).to({graphics:mask_3_graphics_249,x:117.4,y:195.2}).wait(1).to({graphics:mask_3_graphics_250,x:118.4,y:195.2}).wait(1).to({graphics:mask_3_graphics_251,x:119.4,y:195.2}).wait(1).to({graphics:mask_3_graphics_252,x:120.4,y:195.2}).wait(1).to({graphics:mask_3_graphics_253,x:121.3,y:195.2}).wait(1).to({graphics:mask_3_graphics_254,x:122.3,y:195.2}).wait(1).to({graphics:mask_3_graphics_255,x:123.2,y:195.2}).wait(1).to({graphics:mask_3_graphics_256,x:124.1,y:195.2}).wait(1).to({graphics:mask_3_graphics_257,x:125,y:195.2}).wait(1).to({graphics:mask_3_graphics_258,x:125.9,y:195.2}).wait(1).to({graphics:mask_3_graphics_259,x:126.8,y:195.2}).wait(1).to({graphics:mask_3_graphics_260,x:127.6,y:195.2}).wait(1).to({graphics:mask_3_graphics_261,x:128.5,y:195.2}).wait(1).to({graphics:mask_3_graphics_262,x:129.3,y:195.2}).wait(1).to({graphics:mask_3_graphics_263,x:130.1,y:195.2}).wait(1).to({graphics:mask_3_graphics_264,x:130.9,y:195.2}).wait(1).to({graphics:mask_3_graphics_265,x:131.7,y:195.2}).wait(1).to({graphics:mask_3_graphics_266,x:132.5,y:195.2}).wait(1).to({graphics:mask_3_graphics_267,x:133.2,y:195.2}).wait(1).to({graphics:mask_3_graphics_268,x:134,y:195.2}).wait(1).to({graphics:mask_3_graphics_269,x:134.7,y:195.3}).wait(1).to({graphics:mask_3_graphics_270,x:135.4,y:195.3}).wait(1).to({graphics:mask_3_graphics_271,x:136.1,y:195.3}).wait(1).to({graphics:mask_3_graphics_272,x:136.8,y:195.3}).wait(1).to({graphics:mask_3_graphics_273,x:137.5,y:195.3}).wait(1).to({graphics:mask_3_graphics_274,x:138.2,y:195.3}).wait(1).to({graphics:mask_3_graphics_275,x:138.8,y:195.3}).wait(1).to({graphics:mask_3_graphics_276,x:139.4,y:195.4}).wait(1).to({graphics:mask_3_graphics_277,x:140.1,y:195.4}).wait(1).to({graphics:mask_3_graphics_278,x:140.7,y:195.4}).wait(1).to({graphics:mask_3_graphics_279,x:141.3,y:195.4}).wait(1).to({graphics:mask_3_graphics_280,x:141.8,y:195.4}).wait(1).to({graphics:mask_3_graphics_281,x:142.4,y:195.4}).wait(1).to({graphics:mask_3_graphics_282,x:142.9,y:195.4}).wait(1).to({graphics:mask_3_graphics_283,x:143.5,y:195.4}).wait(1).to({graphics:mask_3_graphics_284,x:144,y:195.4}).wait(1).to({graphics:mask_3_graphics_285,x:144.5,y:195.4}).wait(1).to({graphics:mask_3_graphics_286,x:145,y:195.4}).wait(1).to({graphics:mask_3_graphics_287,x:145.5,y:195.4}).wait(1).to({graphics:mask_3_graphics_288,x:146,y:195.4}).wait(1).to({graphics:mask_3_graphics_289,x:146.4,y:195.4}).wait(1).to({graphics:mask_3_graphics_290,x:146.8,y:195.4}).wait(1).to({graphics:mask_3_graphics_291,x:147.3,y:195.4}).wait(1).to({graphics:mask_3_graphics_292,x:147.7,y:195.4}).wait(1).to({graphics:mask_3_graphics_293,x:148.1,y:195.4}).wait(1).to({graphics:mask_3_graphics_294,x:148.5,y:195.4}).wait(1).to({graphics:mask_3_graphics_295,x:148.8,y:195.4}).wait(1).to({graphics:mask_3_graphics_296,x:149.2,y:195.4}).wait(1).to({graphics:mask_3_graphics_297,x:149.5,y:195.3}).wait(1).to({graphics:mask_3_graphics_298,x:149.8,y:195.3}).wait(1).to({graphics:mask_3_graphics_299,x:150.1,y:195.3}).wait(1).to({graphics:mask_3_graphics_300,x:150.4,y:195.3}).wait(1).to({graphics:mask_3_graphics_301,x:150.7,y:195.3}).wait(1).to({graphics:mask_3_graphics_302,x:150.9,y:195.3}).wait(1).to({graphics:mask_3_graphics_303,x:151.2,y:195.3}).wait(1).to({graphics:mask_3_graphics_304,x:151.4,y:195.2}).wait(1).to({graphics:mask_3_graphics_305,x:151.6,y:195.2}).wait(1).to({graphics:mask_3_graphics_306,x:151.8,y:195.2}).wait(1).to({graphics:mask_3_graphics_307,x:151.9,y:195.2}).wait(1).to({graphics:mask_3_graphics_308,x:152.1,y:195.2}).wait(1).to({graphics:mask_3_graphics_309,x:152.2,y:195.2}).wait(1).to({graphics:mask_3_graphics_310,x:152.3,y:195.2}).wait(1).to({graphics:mask_3_graphics_311,x:152.4,y:195.1}).wait(1).to({graphics:mask_3_graphics_312,x:152.5,y:195.1}).wait(1).to({graphics:mask_3_graphics_313,x:152.5,y:195.1}).wait(1).to({graphics:mask_3_graphics_314,x:152.6,y:195.1}).wait(1).to({graphics:mask_3_graphics_315,x:152.8,y:195.1}).wait(305));

	// Layer 17
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(20,1,1).p("Am1rYQhqECh8D4QiGELhlEMQhmEMBRBYQBSBYC0goQCzgoExi/QEvi/Dji4QDli3CnjyQCDi8BQjW");
	this.shape_4.setTransform(203.8,274.7);
	this.shape_4._off = true;

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(199).to({_off:false},0).wait(421));

	// Layer 16 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_165 = new cjs.Graphics().p("AifSfQB2jzD+hZQEAhYDzB2QDuBzBaD4IzQGrQhTj6B0jug");
	var mask_4_graphics_166 = new cjs.Graphics().p("AimSrQBsj4D6hjQD8hjD4BrQDyBpBlDzIy9HgQhdj2Bpjzg");
	var mask_4_graphics_167 = new cjs.Graphics().p("AiqS4QBhj8D1huQD3huD8BgQD4BfBuDvIymITQhojyBfj3g");
	var mask_4_graphics_168 = new cjs.Graphics().p("AitTFQBWkADxh4QDxh5EBBWQD7BUB4DqIyOJGQhyjuBUj7g");
	var mask_4_graphics_169 = new cjs.Graphics().p("AivTUQBLkEDsiDQDsiDEEBLQD+BJCDDlIx1J3Qh8joBJj+g");
	var mask_4_graphics_170 = new cjs.Graphics().p("AivTiQBAkGDmiNQDniNEGBAQEBA+CNDeIxZKoQiGjjA+kBg");
	var mask_4_graphics_171 = new cjs.Graphics().p("AitTyQA1kKDfiWQDhiXEJA1QEEAzCVDYIw6LXQiQjdAzkDg");
	var mask_4_graphics_172 = new cjs.Graphics().p("AipUBQApkLDZigQDaigELApQEFAoCfDSIwaMEQiZjWAokGg");
	var mask_4_graphics_173 = new cjs.Graphics().p("AikUSQAekNDSipQDSipENAdQEHAdCoDLIv5MwQihjPAckHg");
	var mask_4_graphics_174 = new cjs.Graphics().p("AidUjQASkODKiyQDMiyENASQEIARCxDEIvVNbQiqjIARkIg");
	var mask_4_graphics_175 = new cjs.Graphics().p("AiUU0QAGkODDi7QDDi6EOAGQEJAGC4C8IuwOEQixjBAGkIg");
	var mask_4_graphics_176 = new cjs.Graphics().p("AiKVGQgFkPC6jCQC7jDEOgFQEJgGDAC0IuIOsQi6i5gFkIg");
	var mask_4_graphics_177 = new cjs.Graphics().p("Ah/VYQgQkOCyjLQCyjKEOgRQEIgRDICsItfPSQjCixgRkIg");
	var mask_4_graphics_178 = new cjs.Graphics().p("AhxVqQgckMCpjTQCpjSENgcQEHgcDPCiIs0P3QjJipgckHg");
	var mask_4_graphics_179 = new cjs.Graphics().p("AhiV9QgokLCgjZQChjaELgnQEGgoDVCaIsIQYQjQifgnkGg");
	var mask_4_graphics_180 = new cjs.Graphics().p("AhSWQQgzkJCWjgQCYjgEJgzQEEgyDcCQIrbQ4QjXiWgykEg");
	var mask_4_graphics_181 = new cjs.Graphics().p("AhAWkQg/kHCNjmQCOjnEGg+QECg+DiCHIqsRXQjdiNg9kBg");
	var mask_4_graphics_182 = new cjs.Graphics().p("AgtW3QhJkECCjsQCEjsEEhKQD+hIDoB9Ip7RzQjkiDhIj/g");
	var mask_4_graphics_183 = new cjs.Graphics().p("AgYXLQhVkBB5jxQB5jyEAhUQD8hUDtBzIpKSOQjqh6hSj7g");
	var mask_4_graphics_184 = new cjs.Graphics().p("AgCXfQhfj9Buj2QBuj3D9hfQD4heDxBoIoYSmQjuhwhdj3g");
	var mask_4_graphics_185 = new cjs.Graphics().p("AAVXzQhqj4Bkj7QBkj7D4hrQDzhoD2BeInkS7Qjzhlhojzg");
	var mask_4_graphics_186 = new cjs.Graphics().p("AAuYHQh0jzBYkAQBaj/Dzh1QDvhyD5BTImwTPQj3hahyjvg");
	var mask_4_graphics_187 = new cjs.Graphics().p("ABIYbQh/juBOkDQBOkCDuiAQDqh9D9BJIl7ThQj6hQh9jqg");
	var mask_4_graphics_188 = new cjs.Graphics().p("ABjYvQiIjoBCkGQBDkGDpiJQDkiHD/A+IlETvQj+hFiHjkg");
	var mask_4_graphics_189 = new cjs.Graphics().p("AB/ZEQiSjjA3kIQA4kJDjiTQDeiQECAyIkPT9QkAg7iRjdg");
	var mask_4_graphics_190 = new cjs.Graphics().p("ACdZYQidjcAtkLQAskLDcicQDYiaEEAnIjXUHQkDgviajXg");
	var mask_4_graphics_191 = new cjs.Graphics().p("AC8ZsQimjWAhkMQAhkMDVimQDRijEFAcIigUPQkFgkiijQg");
	var mask_4_graphics_192 = new cjs.Graphics().p("ADbZ/QivjNAWkOQAVkNDOivQDKisEGARIhoUVQkGgZisjKg");
	var mask_4_graphics_193 = new cjs.Graphics().p("AD8aTQi4jGAKkOQAKkODGi4QDCi0EHAGIgwUYQkHgOi0jCg");
	var mask_4_graphics_194 = new cjs.Graphics().p("AEaanQjAi/gCkOQgBkOC9jAQC7i8EHgGIAHUZQkHgDi8i5g");
	var mask_4_graphics_195 = new cjs.Graphics().p("AEga5QjIi1gNkOQgNkOC1jIQCyjEEHgRIA/UXIgZABQj3AAi7iqg");
	var mask_4_graphics_196 = new cjs.Graphics().p("AEnbLQjQitgYkNQgZkNCtjPQCpjMEGgcIB3UTQgcADgbAAQjlAAi2iYg");
	var mask_4_graphics_197 = new cjs.Graphics().p("AEvbdQjXikgkkMQgkkMCkjXQCgjSEEgnICvUMQgrAGgpAAQjUAAiwiGg");
	var mask_4_graphics_198 = new cjs.Graphics().p("AE4btQjeibgwkKQgukKCZjeQCYjZECgyIDmUEQg5AKg3AAQjEAAiph2g");
	var mask_4_graphics_199 = new cjs.Graphics().p("AFBb7QjkiRg7kHQg6kICQjkQCOjgEAg9IEcT6QhHAOhEAAQi0AAiihng");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(165).to({graphics:mask_4_graphics_165,x:104,y:167.1}).wait(1).to({graphics:mask_4_graphics_166,x:103.5,y:168.4}).wait(1).to({graphics:mask_4_graphics_167,x:102.9,y:169.7}).wait(1).to({graphics:mask_4_graphics_168,x:102.3,y:171}).wait(1).to({graphics:mask_4_graphics_169,x:101.7,y:172.2}).wait(1).to({graphics:mask_4_graphics_170,x:101,y:173.4}).wait(1).to({graphics:mask_4_graphics_171,x:100.2,y:174.6}).wait(1).to({graphics:mask_4_graphics_172,x:99.4,y:175.7}).wait(1).to({graphics:mask_4_graphics_173,x:98.6,y:176.8}).wait(1).to({graphics:mask_4_graphics_174,x:97.7,y:177.9}).wait(1).to({graphics:mask_4_graphics_175,x:96.7,y:178.9}).wait(1).to({graphics:mask_4_graphics_176,x:95.7,y:179.9}).wait(1).to({graphics:mask_4_graphics_177,x:94.7,y:180.9}).wait(1).to({graphics:mask_4_graphics_178,x:93.6,y:181.8}).wait(1).to({graphics:mask_4_graphics_179,x:92.5,y:182.6}).wait(1).to({graphics:mask_4_graphics_180,x:91.4,y:183.4}).wait(1).to({graphics:mask_4_graphics_181,x:90.2,y:184.2}).wait(1).to({graphics:mask_4_graphics_182,x:89,y:184.9}).wait(1).to({graphics:mask_4_graphics_183,x:87.8,y:185.6}).wait(1).to({graphics:mask_4_graphics_184,x:86.5,y:186.2}).wait(1).to({graphics:mask_4_graphics_185,x:85.2,y:186.7}).wait(1).to({graphics:mask_4_graphics_186,x:83.9,y:187.2}).wait(1).to({graphics:mask_4_graphics_187,x:82.6,y:187.7}).wait(1).to({graphics:mask_4_graphics_188,x:81.2,y:188}).wait(1).to({graphics:mask_4_graphics_189,x:79.9,y:188.4}).wait(1).to({graphics:mask_4_graphics_190,x:78.5,y:188.6}).wait(1).to({graphics:mask_4_graphics_191,x:77.1,y:188.8}).wait(1).to({graphics:mask_4_graphics_192,x:75.7,y:189}).wait(1).to({graphics:mask_4_graphics_193,x:74.3,y:189.1}).wait(1).to({graphics:mask_4_graphics_194,x:73.3,y:189.1}).wait(1).to({graphics:mask_4_graphics_195,x:74.7,y:189.1}).wait(1).to({graphics:mask_4_graphics_196,x:76.1,y:189.1}).wait(1).to({graphics:mask_4_graphics_197,x:77.5,y:189.1}).wait(1).to({graphics:mask_4_graphics_198,x:78.9,y:189.1}).wait(1).to({graphics:mask_4_graphics_199,x:80.2,y:189}).wait(421));

	// Layer 15
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(20,1,1).p("Am1rYQhqECh8D4QiGELhlEMQhmEMBRBYQBSBYC0goQCzgoExi/QEvi/Dji4QDli3CnjyQCDi8BQjW");
	this.shape_5.setTransform(203.8,274.7);
	this.shape_5._off = true;

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(165).to({_off:false},0).wait(455));

	// Layer 14 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_90 = new cjs.Graphics().p("AIiOeIA+iPIEiB+Ig+CPg");
	var mask_5_graphics_91 = new cjs.Graphics().p("AiyAQIBFidIEhB+IhGCeg");
	var mask_5_graphics_92 = new cjs.Graphics().p("Ai2AYIBNitIEgB+IhMCtg");
	var mask_5_graphics_93 = new cjs.Graphics().p("Ai6AgIBUi9IEhB+IhUC9g");
	var mask_5_graphics_94 = new cjs.Graphics().p("Ai9AoIBbjNIEgB+IhaDOg");
	var mask_5_graphics_95 = new cjs.Graphics().p("AjAAwIBhjdIEhB+IhiDeg");
	var mask_5_graphics_96 = new cjs.Graphics().p("AjEA4IBpjtIEgB+IhpDtg");
	var mask_5_graphics_97 = new cjs.Graphics().p("AjIBAIBwj+IEhB/IhwD+g");
	var mask_5_graphics_98 = new cjs.Graphics().p("AjLBIIB3kOIEgB/Ih2EOg");
	var mask_5_graphics_99 = new cjs.Graphics().p("AjPBQIB+keIEhB/Ih+Eeg");
	var mask_5_graphics_100 = new cjs.Graphics().p("AjSBYICEkuIEhB/IiEEug");
	var mask_5_graphics_101 = new cjs.Graphics().p("AjVBgICLk+IEgB/IiLE+g");
	var mask_5_graphics_102 = new cjs.Graphics().p("AjZBoICSlOIEhB/IiSFOg");
	var mask_5_graphics_103 = new cjs.Graphics().p("AjcBwICZleIEgB/IiZFeg");
	var mask_5_graphics_104 = new cjs.Graphics().p("AjgB4ICgluIEhB/IigFug");
	var mask_5_graphics_105 = new cjs.Graphics().p("AjjCAICnl+IEgB/IinF+g");
	var mask_5_graphics_106 = new cjs.Graphics().p("AjnCIICumOIEhB/IiuGOg");
	var mask_5_graphics_107 = new cjs.Graphics().p("AjqCQIC1meIEgB/Ii1Geg");
	var mask_5_graphics_108 = new cjs.Graphics().p("AjuCYIC8muIEhB/Ii8Gug");
	var mask_5_graphics_109 = new cjs.Graphics().p("AjxCgIDDm+IEgB+IjDG/g");
	var mask_5_graphics_110 = new cjs.Graphics().p("Aj1CpIDKnPIEhB+IjKHPg");
	var mask_5_graphics_111 = new cjs.Graphics().p("Aj4CxIDRnfIEgB+IjRHfg");
	var mask_5_graphics_112 = new cjs.Graphics().p("Aj8C4IDYnuIEhB+IjYHvg");
	var mask_5_graphics_113 = new cjs.Graphics().p("Aj/DAIDfn+IEgB+IjfH/g");
	var mask_5_graphics_114 = new cjs.Graphics().p("AkDDJIDmoPIEhB+IjmIPg");
	var mask_5_graphics_115 = new cjs.Graphics().p("AkGDRIDtofIEgB+IjtIfg");
	var mask_5_graphics_116 = new cjs.Graphics().p("AkKDZID0ovIEhB+Ij0Ivg");
	var mask_5_graphics_117 = new cjs.Graphics().p("AkNDgID7o+IEgB+Ij7I/g");
	var mask_5_graphics_118 = new cjs.Graphics().p("AkRDoIECpOIEhB+IkCJPg");
	var mask_5_graphics_119 = new cjs.Graphics().p("AkUDxIEJpfIEgB+IkIJfg");
	var mask_5_graphics_120 = new cjs.Graphics().p("AkYD5IEQpvIEhB+IkQJvg");
	var mask_5_graphics_121 = new cjs.Graphics().p("AkbEAIEXp+IEgB+IkXJ/g");
	var mask_5_graphics_122 = new cjs.Graphics().p("AkeEJIEdqPIEhB+IkeKPg");
	var mask_5_graphics_123 = new cjs.Graphics().p("AkiERIEkqfIEhB+IkjKfg");
	var mask_5_graphics_124 = new cjs.Graphics().p("AkmEZIErqvIEiB+IkrKvg");
	var mask_5_graphics_125 = new cjs.Graphics().p("AkpEhIEyq/IEhB+IkyK/g");
	var mask_5_graphics_126 = new cjs.Graphics().p("AksEpIE4rPIEiB+Ik5LPg");
	var mask_5_graphics_127 = new cjs.Graphics().p("AkwExIFArfIEhB+IlALfg");
	var mask_5_graphics_128 = new cjs.Graphics().p("Ak0E5IFHrvIEiB+IlHLvg");
	var mask_5_graphics_129 = new cjs.Graphics().p("Ak3FBIFOr/IEhB+IlOL/g");
	var mask_5_graphics_130 = new cjs.Graphics().p("Ak7FJIFVsPIEiB+IlVMPg");
	var mask_5_graphics_131 = new cjs.Graphics().p("Ak+FRIFcsfIEhB+IlcMfg");
	var mask_5_graphics_132 = new cjs.Graphics().p("AlCFZIFjsvIEiB+IljMvg");
	var mask_5_graphics_133 = new cjs.Graphics().p("AlFFhIFqs/IEhB+IlqM/g");
	var mask_5_graphics_134 = new cjs.Graphics().p("AlJFpIFxtPIEiB+IlxNPg");
	var mask_5_graphics_135 = new cjs.Graphics().p("AlMFxIF4tfIEhB+Il4Ngg");
	var mask_5_graphics_136 = new cjs.Graphics().p("AlQF5IF/tvIEiB+Il/Nwg");
	var mask_5_graphics_137 = new cjs.Graphics().p("AlTGBIGFt/IEiB+ImGOAg");
	var mask_5_graphics_138 = new cjs.Graphics().p("AlWGJIGMuPIEhB+ImMOPg");
	var mask_5_graphics_139 = new cjs.Graphics().p("AlaGRIGTufIEiB+ImTOfg");
	var mask_5_graphics_140 = new cjs.Graphics().p("AleGZIGbuvIEhB+ImaOwg");
	var mask_5_graphics_141 = new cjs.Graphics().p("AlhGhIGhu/IEiB+ImiPAg");
	var mask_5_graphics_142 = new cjs.Graphics().p("AlkGpIGovPIEhB+ImoPPg");
	var mask_5_graphics_143 = new cjs.Graphics().p("AloGxIGvvfIEiB+ImvPfg");
	var mask_5_graphics_144 = new cjs.Graphics().p("AlsG5IG3vvIEhB+Im2Pwg");
	var mask_5_graphics_145 = new cjs.Graphics().p("AlvHBIG9v/IEiB+Im9QAg");
	var mask_5_graphics_146 = new cjs.Graphics().p("AlyHJIHEwPIEhB+InEQQg");
	var mask_5_graphics_147 = new cjs.Graphics().p("Al2HRIHLwgIEiB/InMQgg");
	var mask_5_graphics_148 = new cjs.Graphics().p("Al6HZIHTwwIEhB/InSQwg");
	var mask_5_graphics_149 = new cjs.Graphics().p("Al9HhIHZxAIEiB/InZRAg");
	var mask_5_graphics_150 = new cjs.Graphics().p("AmBHpIHhxQIEhB/IngRQg");
	var mask_5_graphics_151 = new cjs.Graphics().p("AmEHxIHnxgIEiB/InoRgg");
	var mask_5_graphics_152 = new cjs.Graphics().p("AmHH5IHuxwIEhB/InuRwg");
	var mask_5_graphics_153 = new cjs.Graphics().p("AmLIBIH1yAIEiB/In1SAg");
	var mask_5_graphics_154 = new cjs.Graphics().p("AmPIJIH9yQIEhB/In8SQg");
	var mask_5_graphics_155 = new cjs.Graphics().p("AmSIRIIDygIEiB/IoESgg");
	var mask_5_graphics_156 = new cjs.Graphics().p("AmVIZIIKywIEhB/IoKSwg");
	var mask_5_graphics_157 = new cjs.Graphics().p("AmZIhIIRzAIEiB/IoRTAg");
	var mask_5_graphics_158 = new cjs.Graphics().p("AmcIpIIYzQIEhB/IoYTQg");
	var mask_5_graphics_159 = new cjs.Graphics().p("AmgIxIIfzgIEiB+IofThg");
	var mask_5_graphics_160 = new cjs.Graphics().p("AmjI5IImzwIEhB+IomTxg");
	var mask_5_graphics_161 = new cjs.Graphics().p("AmnJCIIt0BIEiB+IotUBg");
	var mask_5_graphics_162 = new cjs.Graphics().p("AmqJKII00RIEhB+Io0URg");
	var mask_5_graphics_163 = new cjs.Graphics().p("AmuJRII70gIEiB+Io7Uhg");
	var mask_5_graphics_164 = new cjs.Graphics().p("AmxJZIJC0wIEhB+IpCUxg");
	var mask_5_graphics_165 = new cjs.Graphics().p("AAXX3IJJ1BIEiB+IpKVBg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(90).to({graphics:mask_5_graphics_90,x:89.8,y:105.2}).wait(1).to({graphics:mask_5_graphics_91,x:161.7,y:197.8}).wait(1).to({graphics:mask_5_graphics_92,x:161.3,y:198.6}).wait(1).to({graphics:mask_5_graphics_93,x:161,y:199.4}).wait(1).to({graphics:mask_5_graphics_94,x:160.6,y:200.2}).wait(1).to({graphics:mask_5_graphics_95,x:160.3,y:201}).wait(1).to({graphics:mask_5_graphics_96,x:159.9,y:201.8}).wait(1).to({graphics:mask_5_graphics_97,x:159.6,y:202.6}).wait(1).to({graphics:mask_5_graphics_98,x:159.2,y:203.4}).wait(1).to({graphics:mask_5_graphics_99,x:158.9,y:204.2}).wait(1).to({graphics:mask_5_graphics_100,x:158.5,y:205}).wait(1).to({graphics:mask_5_graphics_101,x:158.2,y:205.8}).wait(1).to({graphics:mask_5_graphics_102,x:157.8,y:206.6}).wait(1).to({graphics:mask_5_graphics_103,x:157.5,y:207.4}).wait(1).to({graphics:mask_5_graphics_104,x:157.1,y:208.2}).wait(1).to({graphics:mask_5_graphics_105,x:156.8,y:209}).wait(1).to({graphics:mask_5_graphics_106,x:156.4,y:209.8}).wait(1).to({graphics:mask_5_graphics_107,x:156.1,y:210.6}).wait(1).to({graphics:mask_5_graphics_108,x:155.7,y:211.4}).wait(1).to({graphics:mask_5_graphics_109,x:155.4,y:212.2}).wait(1).to({graphics:mask_5_graphics_110,x:155,y:213}).wait(1).to({graphics:mask_5_graphics_111,x:154.7,y:213.8}).wait(1).to({graphics:mask_5_graphics_112,x:154.3,y:214.6}).wait(1).to({graphics:mask_5_graphics_113,x:154,y:215.4}).wait(1).to({graphics:mask_5_graphics_114,x:153.6,y:216.2}).wait(1).to({graphics:mask_5_graphics_115,x:153.3,y:217}).wait(1).to({graphics:mask_5_graphics_116,x:152.9,y:217.8}).wait(1).to({graphics:mask_5_graphics_117,x:152.6,y:218.6}).wait(1).to({graphics:mask_5_graphics_118,x:152.2,y:219.4}).wait(1).to({graphics:mask_5_graphics_119,x:151.9,y:220.2}).wait(1).to({graphics:mask_5_graphics_120,x:151.6,y:221}).wait(1).to({graphics:mask_5_graphics_121,x:151.2,y:221.8}).wait(1).to({graphics:mask_5_graphics_122,x:150.9,y:222.6}).wait(1).to({graphics:mask_5_graphics_123,x:150.5,y:223.4}).wait(1).to({graphics:mask_5_graphics_124,x:150.2,y:224.2}).wait(1).to({graphics:mask_5_graphics_125,x:149.8,y:225}).wait(1).to({graphics:mask_5_graphics_126,x:149.5,y:225.8}).wait(1).to({graphics:mask_5_graphics_127,x:149.1,y:226.6}).wait(1).to({graphics:mask_5_graphics_128,x:148.8,y:227.4}).wait(1).to({graphics:mask_5_graphics_129,x:148.4,y:228.2}).wait(1).to({graphics:mask_5_graphics_130,x:148.1,y:229}).wait(1).to({graphics:mask_5_graphics_131,x:147.7,y:229.8}).wait(1).to({graphics:mask_5_graphics_132,x:147.4,y:230.6}).wait(1).to({graphics:mask_5_graphics_133,x:147,y:231.4}).wait(1).to({graphics:mask_5_graphics_134,x:146.7,y:232.3}).wait(1).to({graphics:mask_5_graphics_135,x:146.3,y:233.1}).wait(1).to({graphics:mask_5_graphics_136,x:146,y:233.9}).wait(1).to({graphics:mask_5_graphics_137,x:145.7,y:234.7}).wait(1).to({graphics:mask_5_graphics_138,x:145.3,y:235.5}).wait(1).to({graphics:mask_5_graphics_139,x:145,y:236.3}).wait(1).to({graphics:mask_5_graphics_140,x:144.6,y:237.1}).wait(1).to({graphics:mask_5_graphics_141,x:144.3,y:237.9}).wait(1).to({graphics:mask_5_graphics_142,x:143.9,y:238.7}).wait(1).to({graphics:mask_5_graphics_143,x:143.6,y:239.5}).wait(1).to({graphics:mask_5_graphics_144,x:143.2,y:240.3}).wait(1).to({graphics:mask_5_graphics_145,x:142.9,y:241.1}).wait(1).to({graphics:mask_5_graphics_146,x:142.5,y:241.9}).wait(1).to({graphics:mask_5_graphics_147,x:142.2,y:242.7}).wait(1).to({graphics:mask_5_graphics_148,x:141.8,y:243.5}).wait(1).to({graphics:mask_5_graphics_149,x:141.5,y:244.3}).wait(1).to({graphics:mask_5_graphics_150,x:141.1,y:245.1}).wait(1).to({graphics:mask_5_graphics_151,x:140.8,y:245.9}).wait(1).to({graphics:mask_5_graphics_152,x:140.4,y:246.7}).wait(1).to({graphics:mask_5_graphics_153,x:140.1,y:247.5}).wait(1).to({graphics:mask_5_graphics_154,x:139.7,y:248.3}).wait(1).to({graphics:mask_5_graphics_155,x:139.4,y:249.1}).wait(1).to({graphics:mask_5_graphics_156,x:139,y:249.9}).wait(1).to({graphics:mask_5_graphics_157,x:138.7,y:250.7}).wait(1).to({graphics:mask_5_graphics_158,x:138.3,y:251.5}).wait(1).to({graphics:mask_5_graphics_159,x:138,y:252.3}).wait(1).to({graphics:mask_5_graphics_160,x:137.6,y:253.1}).wait(1).to({graphics:mask_5_graphics_161,x:137.3,y:253.9}).wait(1).to({graphics:mask_5_graphics_162,x:136.9,y:254.7}).wait(1).to({graphics:mask_5_graphics_163,x:136.6,y:255.5}).wait(1).to({graphics:mask_5_graphics_164,x:136.2,y:256.3}).wait(1).to({graphics:mask_5_graphics_165,x:89.8,y:165.3}).wait(455));

	// Layer 11
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(20,1,1).p("Am1rYQhqECh8D4QiGELhlEMQhmEMBRBYQBSBYC0goQCzgoExi/QEvi/Dji4QDli3CnjyQCDi8BQjW");
	this.shape_6.setTransform(203.8,274.7);
	this.shape_6._off = true;

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(90).to({_off:false},0).wait(530));

	// Layer 25
	this.instance_3 = new lib.ar1("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(59.3,170.1,1,1,-6.5,0,0,-0.8,0.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).wait(611));

	// Layer 13 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_9 = new cjs.Graphics().p("ACRShIBXhmIFmEvIhWBng");
	var mask_6_graphics_10 = new cjs.Graphics().p("AjiheIBghyIFlEvIhgBxg");
	var mask_6_graphics_11 = new cjs.Graphics().p("AjnhZIBqh8IFlEuIhqB9g");
	var mask_6_graphics_12 = new cjs.Graphics().p("AjrhTIByiHIFlEuIhyCHg");
	var mask_6_graphics_13 = new cjs.Graphics().p("AjwhOIB8iSIFlEvIh8CSg");
	var mask_6_graphics_14 = new cjs.Graphics().p("Aj0hIICEidIFlEuIiECdg");
	var mask_6_graphics_15 = new cjs.Graphics().p("Aj5hDICOioIFlEvIiOCog");
	var mask_6_graphics_16 = new cjs.Graphics().p("Aj+g9ICYizIFlEuIiYCzg");
	var mask_6_graphics_17 = new cjs.Graphics().p("AkCg4ICgi9IFlEuIigC9g");
	var mask_6_graphics_18 = new cjs.Graphics().p("AkHgzICqjIIFlEvIiqDIg");
	var mask_6_graphics_19 = new cjs.Graphics().p("AkMgtICzjUIFmEvIi0DTg");
	var mask_6_graphics_20 = new cjs.Graphics().p("AkQgoIC8jeIFlEuIi8Dfg");
	var mask_6_graphics_21 = new cjs.Graphics().p("AkVgiIDGjpIFlEuIjGDpg");
	var mask_6_graphics_22 = new cjs.Graphics().p("AkZgdIDOj0IFlEvIjOD0g");
	var mask_6_graphics_23 = new cjs.Graphics().p("AkegXIDYj/IFlEuIjYD/g");
	var mask_6_graphics_24 = new cjs.Graphics().p("AkjgSIDhkKIFlEvIjhEKg");
	var mask_6_graphics_25 = new cjs.Graphics().p("AkngMIDqkVIFlEuIjqEVg");
	var mask_6_graphics_26 = new cjs.Graphics().p("AksgHID0kfIFlEuIj0Efg");
	var mask_6_graphics_27 = new cjs.Graphics().p("AkxgCID9kqIFlEvIj9Eqg");
	var mask_6_graphics_28 = new cjs.Graphics().p("Ak1ADIEGk1IFlEwIkGE0g");
	var mask_6_graphics_29 = new cjs.Graphics().p("Ak6AIIEQk/IFlEvIkQFAg");
	var mask_6_graphics_30 = new cjs.Graphics().p("Ak+AOIEYlKIFlEvIkYFKg");
	var mask_6_graphics_31 = new cjs.Graphics().p("AlDATIEilVIFlEwIkiFVg");
	var mask_6_graphics_32 = new cjs.Graphics().p("AlIAZIErlgIFlEvIkrFgg");
	var mask_6_graphics_33 = new cjs.Graphics().p("AlMAeIE0lrIFlEwIk0Frg");
	var mask_6_graphics_34 = new cjs.Graphics().p("AlRAkIE+l2IFlEvIk+F2g");
	var mask_6_graphics_35 = new cjs.Graphics().p("AlVApIFGmBIFlEwIlGGBg");
	var mask_6_graphics_36 = new cjs.Graphics().p("AlaAuIFQmLIFlEwIlQGLg");
	var mask_6_graphics_37 = new cjs.Graphics().p("AlfA0IFamXIFkEwIlZGWg");
	var mask_6_graphics_38 = new cjs.Graphics().p("AljA5IFimhIFlEvIliGig");
	var mask_6_graphics_39 = new cjs.Graphics().p("AloA/IFrmsIFmEvIlrGsg");
	var mask_6_graphics_40 = new cjs.Graphics().p("AltBEIF1m3IFlEwIl0G3g");
	var mask_6_graphics_41 = new cjs.Graphics().p("AlxBKIF9nCIFmEvIl9HCg");
	var mask_6_graphics_42 = new cjs.Graphics().p("Al2BPIGHnNIFmEwImHHNg");
	var mask_6_graphics_43 = new cjs.Graphics().p("Al6BVIGPnYIFmEvImQHYg");
	var mask_6_graphics_44 = new cjs.Graphics().p("Al/BaIGZnjIFmEwImZHjg");
	var mask_6_graphics_45 = new cjs.Graphics().p("AmEBgIGjnuIFmEvImjHug");
	var mask_6_graphics_46 = new cjs.Graphics().p("AmIBlIGrn5IFmEwImsH4g");
	var mask_6_graphics_47 = new cjs.Graphics().p("AmNBqIG1oDIFmEvIm1IEg");
	var mask_6_graphics_48 = new cjs.Graphics().p("AmSBwIG/oPIFmEwIm/IOg");
	var mask_6_graphics_49 = new cjs.Graphics().p("AmWB1IHHoZIFmEvInHIag");
	var mask_6_graphics_50 = new cjs.Graphics().p("AmbB7IHRokIFmEvInRIkg");
	var mask_6_graphics_51 = new cjs.Graphics().p("AmfCAIHZovIFmEwInaIvg");
	var mask_6_graphics_52 = new cjs.Graphics().p("AmkCGIHjo6IFmEvInjI6g");
	var mask_6_graphics_53 = new cjs.Graphics().p("AmpCLIHtpFIFmEwIntJFg");
	var mask_6_graphics_54 = new cjs.Graphics().p("AmtCRIH1pQIFmEvIn1JQg");
	var mask_6_graphics_55 = new cjs.Graphics().p("AmyCWIH/pbIFmEwIn/Jbg");
	var mask_6_graphics_56 = new cjs.Graphics().p("Am2CbIIIplIFlEwIoIJlg");
	var mask_6_graphics_57 = new cjs.Graphics().p("Am7ChIIRpxIFmEwIoRJwg");
	var mask_6_graphics_58 = new cjs.Graphics().p("AnACmIIbp7IFmEvIobJ8g");
	var mask_6_graphics_59 = new cjs.Graphics().p("AnECsIIkqGIFlEvIokKGg");
	var mask_6_graphics_60 = new cjs.Graphics().p("AnJCxIItqRIFmEwIotKRg");
	var mask_6_graphics_61 = new cjs.Graphics().p("AnOC3II3qcIFmEvIo3Kcg");
	var mask_6_graphics_62 = new cjs.Graphics().p("AnSC8II/qnIFmEwIo/Kng");
	var mask_6_graphics_63 = new cjs.Graphics().p("AnXDCIJJqyIFmEvIpJKyg");
	var mask_6_graphics_64 = new cjs.Graphics().p("AnbDHIJSq9IFmEwIpTK9g");
	var mask_6_graphics_65 = new cjs.Graphics().p("AngDMIJbrHIFmEwIpbLHg");
	var mask_6_graphics_66 = new cjs.Graphics().p("AnlDSIJlrTIFmEwIplLSg");
	var mask_6_graphics_67 = new cjs.Graphics().p("AnpDXIJurdIFmEvIpvLeg");
	var mask_6_graphics_68 = new cjs.Graphics().p("AnuDdIJ3roIFmEvIp3Log");
	var mask_6_graphics_69 = new cjs.Graphics().p("AnzDiIKBrzIFmEwIqBLzg");
	var mask_6_graphics_70 = new cjs.Graphics().p("An3DoIKJr+IFmEvIqJL+g");
	var mask_6_graphics_71 = new cjs.Graphics().p("An8DtIKTsJIFmEwIqTMJg");
	var mask_6_graphics_72 = new cjs.Graphics().p("AiRShIKcsVIFmEwIqdMVg");
	var mask_6_graphics_73 = new cjs.Graphics().p("AoVELILFtEIFmEvIrFNEg");
	var mask_6_graphics_74 = new cjs.Graphics().p("Ai6ShILut2IFmEwIrvN2g");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_6_graphics_9,x:59,y:148.9}).wait(1).to({graphics:mask_6_graphics_10,x:96.2,y:276.9}).wait(1).to({graphics:mask_6_graphics_11,x:96.7,y:276.4}).wait(1).to({graphics:mask_6_graphics_12,x:97.2,y:275.8}).wait(1).to({graphics:mask_6_graphics_13,x:97.6,y:275.3}).wait(1).to({graphics:mask_6_graphics_14,x:98.1,y:274.7}).wait(1).to({graphics:mask_6_graphics_15,x:98.6,y:274.2}).wait(1).to({graphics:mask_6_graphics_16,x:99,y:273.6}).wait(1).to({graphics:mask_6_graphics_17,x:99.5,y:273.1}).wait(1).to({graphics:mask_6_graphics_18,x:99.9,y:272.6}).wait(1).to({graphics:mask_6_graphics_19,x:100.4,y:272}).wait(1).to({graphics:mask_6_graphics_20,x:100.9,y:271.5}).wait(1).to({graphics:mask_6_graphics_21,x:101.3,y:270.9}).wait(1).to({graphics:mask_6_graphics_22,x:101.8,y:270.4}).wait(1).to({graphics:mask_6_graphics_23,x:102.3,y:269.8}).wait(1).to({graphics:mask_6_graphics_24,x:102.7,y:269.3}).wait(1).to({graphics:mask_6_graphics_25,x:103.2,y:268.7}).wait(1).to({graphics:mask_6_graphics_26,x:103.6,y:268.2}).wait(1).to({graphics:mask_6_graphics_27,x:104.1,y:267.7}).wait(1).to({graphics:mask_6_graphics_28,x:104.6,y:267.1}).wait(1).to({graphics:mask_6_graphics_29,x:105,y:266.6}).wait(1).to({graphics:mask_6_graphics_30,x:105.5,y:266}).wait(1).to({graphics:mask_6_graphics_31,x:105.9,y:265.5}).wait(1).to({graphics:mask_6_graphics_32,x:106.4,y:264.9}).wait(1).to({graphics:mask_6_graphics_33,x:106.9,y:264.4}).wait(1).to({graphics:mask_6_graphics_34,x:107.3,y:263.8}).wait(1).to({graphics:mask_6_graphics_35,x:107.8,y:263.3}).wait(1).to({graphics:mask_6_graphics_36,x:108.3,y:262.8}).wait(1).to({graphics:mask_6_graphics_37,x:108.7,y:262.2}).wait(1).to({graphics:mask_6_graphics_38,x:109.2,y:261.7}).wait(1).to({graphics:mask_6_graphics_39,x:109.6,y:261.1}).wait(1).to({graphics:mask_6_graphics_40,x:110.1,y:260.6}).wait(1).to({graphics:mask_6_graphics_41,x:110.5,y:260}).wait(1).to({graphics:mask_6_graphics_42,x:111,y:259.5}).wait(1).to({graphics:mask_6_graphics_43,x:111.5,y:258.9}).wait(1).to({graphics:mask_6_graphics_44,x:111.9,y:258.4}).wait(1).to({graphics:mask_6_graphics_45,x:112.4,y:257.8}).wait(1).to({graphics:mask_6_graphics_46,x:112.9,y:257.3}).wait(1).to({graphics:mask_6_graphics_47,x:113.3,y:256.8}).wait(1).to({graphics:mask_6_graphics_48,x:113.8,y:256.2}).wait(1).to({graphics:mask_6_graphics_49,x:114.2,y:255.7}).wait(1).to({graphics:mask_6_graphics_50,x:114.7,y:255.1}).wait(1).to({graphics:mask_6_graphics_51,x:115.2,y:254.6}).wait(1).to({graphics:mask_6_graphics_52,x:115.6,y:254}).wait(1).to({graphics:mask_6_graphics_53,x:116.1,y:253.5}).wait(1).to({graphics:mask_6_graphics_54,x:116.5,y:252.9}).wait(1).to({graphics:mask_6_graphics_55,x:117,y:252.4}).wait(1).to({graphics:mask_6_graphics_56,x:117.5,y:251.9}).wait(1).to({graphics:mask_6_graphics_57,x:117.9,y:251.3}).wait(1).to({graphics:mask_6_graphics_58,x:118.4,y:250.8}).wait(1).to({graphics:mask_6_graphics_59,x:118.9,y:250.2}).wait(1).to({graphics:mask_6_graphics_60,x:119.3,y:249.7}).wait(1).to({graphics:mask_6_graphics_61,x:119.8,y:249.1}).wait(1).to({graphics:mask_6_graphics_62,x:120.2,y:248.6}).wait(1).to({graphics:mask_6_graphics_63,x:120.7,y:248}).wait(1).to({graphics:mask_6_graphics_64,x:121.2,y:247.5}).wait(1).to({graphics:mask_6_graphics_65,x:121.6,y:247}).wait(1).to({graphics:mask_6_graphics_66,x:122.1,y:246.4}).wait(1).to({graphics:mask_6_graphics_67,x:122.6,y:245.9}).wait(1).to({graphics:mask_6_graphics_68,x:123,y:245.3}).wait(1).to({graphics:mask_6_graphics_69,x:123.5,y:244.8}).wait(1).to({graphics:mask_6_graphics_70,x:123.9,y:244.2}).wait(1).to({graphics:mask_6_graphics_71,x:124.4,y:243.7}).wait(1).to({graphics:mask_6_graphics_72,x:88.1,y:148.9}).wait(1).to({graphics:mask_6_graphics_73,x:126.9,y:240.7}).wait(1).to({graphics:mask_6_graphics_74,x:92.2,y:148.9}).wait(546));

	// Layer 12
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(20,1,1).p("AkkFiIJJrD");
	this.shape_7.setTransform(131.1,237.9);
	this.shape_7._off = true;

	var maskedShapeInstanceList = [this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(9).to({_off:false},0).wait(611));

	// letter
	this.instance_4 = new lib.Symbol1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(275,275);
	this.instance_4.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(620));

	// Background
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#F59E9E").ss(3,1,1).p("EAq+Aq+MhV7AAAMAAAhV7MBV7AAAg");
	this.shape_8.setTransform(275,275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F6E7E7").s().p("Egq9Aq+MAAAhV7MBV7AAAMAAABV7g");
	this.shape_9.setTransform(275,275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).wait(620));

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