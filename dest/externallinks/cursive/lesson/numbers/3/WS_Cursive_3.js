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


(lib._3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ap9ayIjbhXIjTh5Ii8iBIhPg+IhGhDQgtgtAAgzQAAg7AogqQAmgtA8AAIAtAOIAtAcIEbDYICpBjIC0BPICuAeQCYAACxgkQCwglCahRQCYhRBliCQBmiBgBi9QAAhngvhVIhziUIieh0IiuhUIhdgfIhcgTIgwgGIilg5Qg4gYgBhMQAAiVCQAAICmAiIFegWQDQgWDBhEQDAhACHh6QCHh4AAjFIgPirIgyivQgkhPhBg4QhAg1hmAAQhtAAiFAqIjmBaIgUBaIgfBoIgyBSQgfAkg1AAQgzAAgtgnQgqglAAhBIAXh+ICPpWQAfhpBfAAQBBAAAqAlQAtAiAABAIgUBgIghBjIDJg2IDLgZQCmgBBzBKQBzBMBMByQBJB0AfCQIAiEeQAADEhaCQQhaCQiKBhQiJBjisA6IlOBfQCmB0BtCiQBuChAADPQAAD+h5CzQh5C3i8B2Qi5B2jnA2QjlA3jWABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-145,-175,290,350.1);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-94.4,guide:{path:[-47.9,-29.4,-30.4,37.2,47,28.6]}},151).wait(1));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AlhCZICwlVIBHAkIixFVg");
	var mask_graphics_1 = new cjs.Graphics().p("Ah9CXICvlVIBNAoIiwFVg");
	var mask_graphics_2 = new cjs.Graphics().p("AiBCVICwlVIBTAsIivFVg");
	var mask_graphics_3 = new cjs.Graphics().p("AiECUICvlVIBaAuIivFVg");
	var mask_graphics_4 = new cjs.Graphics().p("AiICSICwlVIBhAyIiwFVg");
	var mask_graphics_5 = new cjs.Graphics().p("AiLCQICwlVIBnA2IivFVg");
	var mask_graphics_6 = new cjs.Graphics().p("AiOCOICvlVIBuA5IivFVg");
	var mask_graphics_7 = new cjs.Graphics().p("AiSCNICwlVIB1A8IiwFVg");
	var mask_graphics_8 = new cjs.Graphics().p("AiVCLICwlVIB7BAIiwFVg");
	var mask_graphics_9 = new cjs.Graphics().p("AiYCJICvlVICDBEIiwFVg");
	var mask_graphics_10 = new cjs.Graphics().p("AicCIICwlVICJBGIiwFVg");
	var mask_graphics_11 = new cjs.Graphics().p("AifCGICwlVICPBKIiwFVg");
	var mask_graphics_12 = new cjs.Graphics().p("AiiCEICvlVICWBOIivFVg");
	var mask_graphics_13 = new cjs.Graphics().p("AimCCICwlVICdBRIiwFVg");
	var mask_graphics_14 = new cjs.Graphics().p("AipCBICvlVICkBUIivFVg");
	var mask_graphics_15 = new cjs.Graphics().p("AisB/ICvlVICqBYIivFVg");
	var mask_graphics_16 = new cjs.Graphics().p("AiwB9ICwlVICxBcIixFVg");
	var mask_graphics_17 = new cjs.Graphics().p("AizB7ICwlVIC3BgIiwFVg");
	var mask_graphics_18 = new cjs.Graphics().p("Ai2B6ICwlVIC+BiIixFVg");
	var mask_graphics_19 = new cjs.Graphics().p("Ai6B4ICxlVIDEBmIixFVg");
	var mask_graphics_20 = new cjs.Graphics().p("Ai9B2ICwlVIDLBqIiwFVg");
	var mask_graphics_21 = new cjs.Graphics().p("AjAB1ICwlVIDSBsIixFVg");
	var mask_graphics_22 = new cjs.Graphics().p("AjEBzICxlVIDYBwIixFVg");
	var mask_graphics_23 = new cjs.Graphics().p("AjHBxICwlVIDfB0IiwFVg");
	var mask_graphics_24 = new cjs.Graphics().p("AjLBvICxlVIDmB3IixFVg");
	var mask_graphics_25 = new cjs.Graphics().p("AjOBuICxlVIDsB6IiwFVg");
	var mask_graphics_26 = new cjs.Graphics().p("AjRBsICwlVIDzB+IiwFVg");
	var mask_graphics_27 = new cjs.Graphics().p("AjVBqICxlVID6CCIixFVg");
	var mask_graphics_28 = new cjs.Graphics().p("AjYBoICxlVIEACGIiwFVg");
	var mask_graphics_29 = new cjs.Graphics().p("AjbBnICwlVIEICIIixFVg");
	var mask_graphics_30 = new cjs.Graphics().p("AjfBlICxlVIEOCMIixFVg");
	var mask_graphics_31 = new cjs.Graphics().p("AjiBjICwlVIEVCQIiwFVg");
	var mask_graphics_32 = new cjs.Graphics().p("AjlBhICwlVIEbCTIiwFVg");
	var mask_graphics_33 = new cjs.Graphics().p("AjpBgICxlVIEiCWIixFVg");
	var mask_graphics_34 = new cjs.Graphics().p("AjsBeICwlVIEpCaIiwFVg");
	var mask_graphics_35 = new cjs.Graphics().p("AjvBcICwlVIEvCeIiwFVg");
	var mask_graphics_36 = new cjs.Graphics().p("AjzBbICxlVIE2CgIiwFVg");
	var mask_graphics_37 = new cjs.Graphics().p("Aj2BZICwlVIE9CkIiwFVg");
	var mask_graphics_38 = new cjs.Graphics().p("Aj5BXICwlVIFDCoIiwFVg");
	var mask_graphics_39 = new cjs.Graphics().p("Aj9BVICxlVIFKCrIixFVg");
	var mask_graphics_40 = new cjs.Graphics().p("AkABUICwlVIFRCuIiwFVg");
	var mask_graphics_41 = new cjs.Graphics().p("AkEBSICxlVIFYCyIixFVg");
	var mask_graphics_42 = new cjs.Graphics().p("AkHBQICxlVIFeC2IixFVg");
	var mask_graphics_43 = new cjs.Graphics().p("AkKBOICwlVIFlC6IiwFVg");
	var mask_graphics_44 = new cjs.Graphics().p("AkOBNICxlVIFsC8IixFVg");
	var mask_graphics_45 = new cjs.Graphics().p("AkRBLICxlVIFyDAIiwFVg");
	var mask_graphics_46 = new cjs.Graphics().p("AkUBJICwlVIF5DEIiwFVg");
	var mask_graphics_47 = new cjs.Graphics().p("AkYBHICxlVIGADHIixFVg");
	var mask_graphics_48 = new cjs.Graphics().p("AkbBGICxlVIGGDKIiwFVg");
	var mask_graphics_49 = new cjs.Graphics().p("AkeBEICwlVIGODOIixFVg");
	var mask_graphics_50 = new cjs.Graphics().p("AkiBCICxlVIGUDRIixFVg");
	var mask_graphics_51 = new cjs.Graphics().p("AklBBICwlVIGbDUIiwFVg");
	var mask_graphics_52 = new cjs.Graphics().p("AkoA/ICwlVIGiDYIixFVg");
	var mask_graphics_53 = new cjs.Graphics().p("AksA9ICxlVIGoDcIixFVg");
	var mask_graphics_54 = new cjs.Graphics().p("AkvA7ICwlVIGvDgIiwFVg");
	var mask_graphics_55 = new cjs.Graphics().p("AkyA6ICwlVIG1DiIiwFVg");
	var mask_graphics_56 = new cjs.Graphics().p("Ak2A4ICxlVIG8DmIiwFVg");
	var mask_graphics_57 = new cjs.Graphics().p("Ak5A2ICwlVIHDDqIiwFVg");
	var mask_graphics_58 = new cjs.Graphics().p("Ak8A0ICwlVIHJDtIiwFVg");
	var mask_graphics_59 = new cjs.Graphics().p("AlAAzICxlVIHQDwIixFVg");
	var mask_graphics_60 = new cjs.Graphics().p("AlDAxICwlVIHXD0IiwFVg");
	var mask_graphics_61 = new cjs.Graphics().p("AlHAvICxlVIHeD4IixFVg");
	var mask_graphics_62 = new cjs.Graphics().p("AlKAuICxlVIHkD6IixFVg");
	var mask_graphics_63 = new cjs.Graphics().p("AlNAsICwlVIHrD+IiwFVg");
	var mask_graphics_64 = new cjs.Graphics().p("AlRAqICxlVIHyECIixFVg");
	var mask_graphics_65 = new cjs.Graphics().p("AlUAoICxlVIH4EFIixFVg");
	var mask_graphics_66 = new cjs.Graphics().p("AlXAnICwlVIH/EIIiwFVg");
	var mask_graphics_67 = new cjs.Graphics().p("AlbAlICxlVIIGEMIixFVg");
	var mask_graphics_68 = new cjs.Graphics().p("AleAjICxlVIIMEQIiwFVg");
	var mask_graphics_69 = new cjs.Graphics().p("AlhAhICwlVIIUEUIixFVg");
	var mask_graphics_70 = new cjs.Graphics().p("AllAgICxlVIIaEWIixFVg");
	var mask_graphics_71 = new cjs.Graphics().p("AloAeICwlVIIhEaIiwFVg");
	var mask_graphics_72 = new cjs.Graphics().p("AlrAcICwlVIIoEeIixFVg");
	var mask_graphics_73 = new cjs.Graphics().p("AlvAaICxlVIIuEhIixFVg");
	var mask_graphics_74 = new cjs.Graphics().p("AlyAZICwlVII1EkIiwFVg");
	var mask_graphics_75 = new cjs.Graphics().p("Al1AXICwlVII7EoIiwFVg");
	var mask_graphics_76 = new cjs.Graphics().p("Al5AVICwlVIJDEsIiwFVg");
	var mask_graphics_77 = new cjs.Graphics().p("Al9AUICxlVIJKEuIixFVg");
	var mask_graphics_78 = new cjs.Graphics().p("AmAASICwlVIJREyIiwFVg");
	var mask_graphics_79 = new cjs.Graphics().p("AmDAQICwlVIJXE2IiwFVg");
	var mask_graphics_80 = new cjs.Graphics().p("AmHAOICxlVIJdE6IiwFVg");
	var mask_graphics_81 = new cjs.Graphics().p("AmKANICwlVIJlE9IiwFVg");
	var mask_graphics_82 = new cjs.Graphics().p("AmNALICwlVIJrFAIiwFVg");
	var mask_graphics_83 = new cjs.Graphics().p("AmRAJICxlVIJyFEIixFVg");
	var mask_graphics_84 = new cjs.Graphics().p("AmUAHICwlVIJ5FIIixFVg");
	var mask_graphics_85 = new cjs.Graphics().p("AmXAGICwlVIJ/FKIiwFVg");
	var mask_graphics_86 = new cjs.Graphics().p("AmbAEICxlVIKGFOIixFVg");
	var mask_graphics_87 = new cjs.Graphics().p("AmeACICwlVIKNFSIixFVg");
	var mask_graphics_88 = new cjs.Graphics().p("AmiAAICxlVIKTFVIiwFWg");
	var mask_graphics_89 = new cjs.Graphics().p("AmlAAICxlWIKaFYIixFWg");
	var mask_graphics_90 = new cjs.Graphics().p("AmogCICwlWIKhFbIiwFWg");
	var mask_graphics_91 = new cjs.Graphics().p("AmsgEICxlWIKnFfIiwFWg");
	var mask_graphics_92 = new cjs.Graphics().p("AmvgFICxlWIKuFhIixFWg");
	var mask_graphics_93 = new cjs.Graphics().p("AmygHICwlWIK1FlIiwFWg");
	var mask_graphics_94 = new cjs.Graphics().p("Am2gJICxlWIK8FpIixFWg");
	var mask_graphics_95 = new cjs.Graphics().p("Am5gLICxlWILCFtIixFWg");
	var mask_graphics_96 = new cjs.Graphics().p("Am8gMICwlWILJFwIiwFWg");
	var mask_graphics_97 = new cjs.Graphics().p("AnAgOICxlWILQFzIixFWg");
	var mask_graphics_98 = new cjs.Graphics().p("AnDgQICwlWILXF3IiwFWg");
	var mask_graphics_99 = new cjs.Graphics().p("AnGgSICwlWILdF7IiwFWg");
	var mask_graphics_100 = new cjs.Graphics().p("AnKgTICxlWILjF9IiwFWg");
	var mask_graphics_101 = new cjs.Graphics().p("AnNgVICwlWILrGBIiwFWg");
	var mask_graphics_102 = new cjs.Graphics().p("AnQgXICwlWILxGFIiwFWg");
	var mask_graphics_103 = new cjs.Graphics().p("AnUgYICxlWIL4GHIixFWg");
	var mask_graphics_104 = new cjs.Graphics().p("AnXgaICwlWIL/GLIixFWg");
	var mask_graphics_105 = new cjs.Graphics().p("AnagcICwlWIMFGPIiwFWg");
	var mask_graphics_106 = new cjs.Graphics().p("AnegeICxlWIMMGTIixFWg");
	var mask_graphics_107 = new cjs.Graphics().p("AnhgfICwlWIMTGWIixFWg");
	var mask_graphics_108 = new cjs.Graphics().p("AnlghICxlWIMZGZIiwFWg");
	var mask_graphics_109 = new cjs.Graphics().p("AnogjICxlWIMgGdIixFWg");
	var mask_graphics_110 = new cjs.Graphics().p("AnrglICwlWIMnGhIixFWg");
	var mask_graphics_111 = new cjs.Graphics().p("AnvgmICxlWIMtGjIiwFWg");
	var mask_graphics_112 = new cjs.Graphics().p("AnygoICxlWIM0GnIixFWg");
	var mask_graphics_113 = new cjs.Graphics().p("An1gqICwlWIM7GrIiwFWg");
	var mask_graphics_114 = new cjs.Graphics().p("An5gsICxlWINCGvIixFWg");
	var mask_graphics_115 = new cjs.Graphics().p("An8gtICxlWINIGyIixFWg");
	var mask_graphics_116 = new cjs.Graphics().p("An/gvICwlWINPG1IiwFWg");
	var mask_graphics_117 = new cjs.Graphics().p("AoDgxICxlWINWG5IixFWg");
	var mask_graphics_118 = new cjs.Graphics().p("AoGgyICwlWINdG7IixFWg");
	var mask_graphics_119 = new cjs.Graphics().p("AoJg0ICwlWINjG/IiwFWg");
	var mask_graphics_120 = new cjs.Graphics().p("AoNg2ICxlWINqHDIixFWg");
	var mask_graphics_121 = new cjs.Graphics().p("AoQg4ICwlWINxHHIiwFWg");
	var mask_graphics_122 = new cjs.Graphics().p("AoTg5ICwlWIN3HKIiwFWg");
	var mask_graphics_123 = new cjs.Graphics().p("AoXg7ICxlWIN+HNIixFWg");
	var mask_graphics_124 = new cjs.Graphics().p("Aoag9ICwlWIOFHRIiwFWg");
	var mask_graphics_125 = new cjs.Graphics().p("Aoeg/ICxlWIOMHVIixFWg");
	var mask_graphics_126 = new cjs.Graphics().p("AohhAICxlWIOSHXIixFWg");
	var mask_graphics_127 = new cjs.Graphics().p("AokhCICwlWIOZHbIixFWg");
	var mask_graphics_128 = new cjs.Graphics().p("AoohEICxlWIOfHfIiwFWg");
	var mask_graphics_129 = new cjs.Graphics().p("AorhGICxlWIOmHjIixFWg");
	var mask_graphics_130 = new cjs.Graphics().p("AouhHICwlWIOtHmIiwFWg");
	var mask_graphics_131 = new cjs.Graphics().p("AoyhJICxlWIOzHpIiwFWg");
	var mask_graphics_132 = new cjs.Graphics().p("Ao1hLICxlWIO6HtIixFWg");
	var mask_graphics_133 = new cjs.Graphics().p("Ao4hMICwlWIPBHwIiwFWg");
	var mask_graphics_134 = new cjs.Graphics().p("Ao8hOICxlWIPHHzIiwFWg");
	var mask_graphics_135 = new cjs.Graphics().p("Ao/hQICwlWIPPH3IixFWg");
	var mask_graphics_136 = new cjs.Graphics().p("ApChSICwlWIPVH7IiwFWg");
	var mask_graphics_137 = new cjs.Graphics().p("ApGhTICxlWIPcH9IixFWg");
	var mask_graphics_138 = new cjs.Graphics().p("ApJhVICwlWIPjIBIixFWg");
	var mask_graphics_139 = new cjs.Graphics().p("ApMhXICwlWIPpIFIiwFWg");
	var mask_graphics_140 = new cjs.Graphics().p("ApQhZICxlWIPwIJIixFWg");
	var mask_graphics_141 = new cjs.Graphics().p("ApThaICwlWIP3IMIiwFWg");
	var mask_graphics_142 = new cjs.Graphics().p("ApWhcICwlWIP9IPIiwFWg");
	var mask_graphics_143 = new cjs.Graphics().p("ApaheICxlWIQEITIixFWg");
	var mask_graphics_144 = new cjs.Graphics().p("ApdhgICwlWIQLIXIiwFWg");
	var mask_graphics_145 = new cjs.Graphics().p("AphhhICxlWIQSIZIixFWg");
	var mask_graphics_146 = new cjs.Graphics().p("ApkhjICxlWIQYIdIixFWg");
	var mask_graphics_147 = new cjs.Graphics().p("ApnhlICwlWIQfIhIixFWg");
	var mask_graphics_148 = new cjs.Graphics().p("AprhmICxlWIQmIkIixFWg");
	var mask_graphics_149 = new cjs.Graphics().p("ApuhoICxlWIQsInIixFWg");
	var mask_graphics_150 = new cjs.Graphics().p("ApxhqICwlWIQzIrIiwFWg");
	var mask_graphics_151 = new cjs.Graphics().p("Ap1hsICxlWIQ6IvIixFWg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-35.4,y:-17.5}).wait(1).to({graphics:mask_graphics_1,x:-58.2,y:-17.3}).wait(1).to({graphics:mask_graphics_2,x:-57.8,y:-17.1}).wait(1).to({graphics:mask_graphics_3,x:-57.5,y:-16.9}).wait(1).to({graphics:mask_graphics_4,x:-57.2,y:-16.7}).wait(1).to({graphics:mask_graphics_5,x:-56.8,y:-16.6}).wait(1).to({graphics:mask_graphics_6,x:-56.5,y:-16.4}).wait(1).to({graphics:mask_graphics_7,x:-56.2,y:-16.2}).wait(1).to({graphics:mask_graphics_8,x:-55.8,y:-16.1}).wait(1).to({graphics:mask_graphics_9,x:-55.5,y:-15.9}).wait(1).to({graphics:mask_graphics_10,x:-55.2,y:-15.7}).wait(1).to({graphics:mask_graphics_11,x:-54.8,y:-15.5}).wait(1).to({graphics:mask_graphics_12,x:-54.5,y:-15.4}).wait(1).to({graphics:mask_graphics_13,x:-54.2,y:-15.2}).wait(1).to({graphics:mask_graphics_14,x:-53.8,y:-15}).wait(1).to({graphics:mask_graphics_15,x:-53.5,y:-14.8}).wait(1).to({graphics:mask_graphics_16,x:-53.2,y:-14.7}).wait(1).to({graphics:mask_graphics_17,x:-52.8,y:-14.5}).wait(1).to({graphics:mask_graphics_18,x:-52.5,y:-14.3}).wait(1).to({graphics:mask_graphics_19,x:-52.1,y:-14.1}).wait(1).to({graphics:mask_graphics_20,x:-51.8,y:-14}).wait(1).to({graphics:mask_graphics_21,x:-51.5,y:-13.8}).wait(1).to({graphics:mask_graphics_22,x:-51.1,y:-13.6}).wait(1).to({graphics:mask_graphics_23,x:-50.8,y:-13.5}).wait(1).to({graphics:mask_graphics_24,x:-50.5,y:-13.3}).wait(1).to({graphics:mask_graphics_25,x:-50.1,y:-13.1}).wait(1).to({graphics:mask_graphics_26,x:-49.8,y:-12.9}).wait(1).to({graphics:mask_graphics_27,x:-49.5,y:-12.8}).wait(1).to({graphics:mask_graphics_28,x:-49.1,y:-12.6}).wait(1).to({graphics:mask_graphics_29,x:-48.8,y:-12.4}).wait(1).to({graphics:mask_graphics_30,x:-48.5,y:-12.2}).wait(1).to({graphics:mask_graphics_31,x:-48.1,y:-12.1}).wait(1).to({graphics:mask_graphics_32,x:-47.8,y:-11.9}).wait(1).to({graphics:mask_graphics_33,x:-47.5,y:-11.7}).wait(1).to({graphics:mask_graphics_34,x:-47.1,y:-11.5}).wait(1).to({graphics:mask_graphics_35,x:-46.8,y:-11.4}).wait(1).to({graphics:mask_graphics_36,x:-46.4,y:-11.2}).wait(1).to({graphics:mask_graphics_37,x:-46.1,y:-11}).wait(1).to({graphics:mask_graphics_38,x:-45.8,y:-10.9}).wait(1).to({graphics:mask_graphics_39,x:-45.4,y:-10.7}).wait(1).to({graphics:mask_graphics_40,x:-45.1,y:-10.5}).wait(1).to({graphics:mask_graphics_41,x:-44.8,y:-10.3}).wait(1).to({graphics:mask_graphics_42,x:-44.4,y:-10.2}).wait(1).to({graphics:mask_graphics_43,x:-44.1,y:-10}).wait(1).to({graphics:mask_graphics_44,x:-43.8,y:-9.8}).wait(1).to({graphics:mask_graphics_45,x:-43.4,y:-9.6}).wait(1).to({graphics:mask_graphics_46,x:-43.1,y:-9.5}).wait(1).to({graphics:mask_graphics_47,x:-42.8,y:-9.3}).wait(1).to({graphics:mask_graphics_48,x:-42.4,y:-9.1}).wait(1).to({graphics:mask_graphics_49,x:-42.1,y:-9}).wait(1).to({graphics:mask_graphics_50,x:-41.8,y:-8.8}).wait(1).to({graphics:mask_graphics_51,x:-41.4,y:-8.6}).wait(1).to({graphics:mask_graphics_52,x:-41.1,y:-8.4}).wait(1).to({graphics:mask_graphics_53,x:-40.8,y:-8.3}).wait(1).to({graphics:mask_graphics_54,x:-40.4,y:-8.1}).wait(1).to({graphics:mask_graphics_55,x:-40.1,y:-7.9}).wait(1).to({graphics:mask_graphics_56,x:-39.7,y:-7.7}).wait(1).to({graphics:mask_graphics_57,x:-39.4,y:-7.6}).wait(1).to({graphics:mask_graphics_58,x:-39.1,y:-7.4}).wait(1).to({graphics:mask_graphics_59,x:-38.7,y:-7.2}).wait(1).to({graphics:mask_graphics_60,x:-38.4,y:-7}).wait(1).to({graphics:mask_graphics_61,x:-38.1,y:-6.9}).wait(1).to({graphics:mask_graphics_62,x:-37.7,y:-6.7}).wait(1).to({graphics:mask_graphics_63,x:-37.4,y:-6.5}).wait(1).to({graphics:mask_graphics_64,x:-37.1,y:-6.4}).wait(1).to({graphics:mask_graphics_65,x:-36.7,y:-6.2}).wait(1).to({graphics:mask_graphics_66,x:-36.4,y:-6}).wait(1).to({graphics:mask_graphics_67,x:-36.1,y:-5.8}).wait(1).to({graphics:mask_graphics_68,x:-35.7,y:-5.7}).wait(1).to({graphics:mask_graphics_69,x:-35.4,y:-5.5}).wait(1).to({graphics:mask_graphics_70,x:-35.1,y:-5.3}).wait(1).to({graphics:mask_graphics_71,x:-34.7,y:-5.1}).wait(1).to({graphics:mask_graphics_72,x:-34.4,y:-5}).wait(1).to({graphics:mask_graphics_73,x:-34.1,y:-4.8}).wait(1).to({graphics:mask_graphics_74,x:-33.7,y:-4.6}).wait(1).to({graphics:mask_graphics_75,x:-33.4,y:-4.4}).wait(1).to({graphics:mask_graphics_76,x:-33.1,y:-4.3}).wait(1).to({graphics:mask_graphics_77,x:-32.7,y:-4.1}).wait(1).to({graphics:mask_graphics_78,x:-32.4,y:-4}).wait(1).to({graphics:mask_graphics_79,x:-32.1,y:-3.8}).wait(1).to({graphics:mask_graphics_80,x:-31.7,y:-3.6}).wait(1).to({graphics:mask_graphics_81,x:-31.4,y:-3.4}).wait(1).to({graphics:mask_graphics_82,x:-31.1,y:-3.3}).wait(1).to({graphics:mask_graphics_83,x:-30.7,y:-3.1}).wait(1).to({graphics:mask_graphics_84,x:-30.4,y:-2.9}).wait(1).to({graphics:mask_graphics_85,x:-30.1,y:-2.7}).wait(1).to({graphics:mask_graphics_86,x:-29.7,y:-2.6}).wait(1).to({graphics:mask_graphics_87,x:-29.4,y:-2.4}).wait(1).to({graphics:mask_graphics_88,x:-29,y:-2.2}).wait(1).to({graphics:mask_graphics_89,x:-28.7,y:-2}).wait(1).to({graphics:mask_graphics_90,x:-28.4,y:-1.9}).wait(1).to({graphics:mask_graphics_91,x:-28,y:-1.7}).wait(1).to({graphics:mask_graphics_92,x:-27.7,y:-1.5}).wait(1).to({graphics:mask_graphics_93,x:-27.4,y:-1.4}).wait(1).to({graphics:mask_graphics_94,x:-27,y:-1.2}).wait(1).to({graphics:mask_graphics_95,x:-26.7,y:-1}).wait(1).to({graphics:mask_graphics_96,x:-26.4,y:-0.8}).wait(1).to({graphics:mask_graphics_97,x:-26,y:-0.7}).wait(1).to({graphics:mask_graphics_98,x:-25.7,y:-0.5}).wait(1).to({graphics:mask_graphics_99,x:-25.4,y:-0.3}).wait(1).to({graphics:mask_graphics_100,x:-25,y:-0.1}).wait(1).to({graphics:mask_graphics_101,x:-24.7,y:0}).wait(1).to({graphics:mask_graphics_102,x:-24.4,y:0.2}).wait(1).to({graphics:mask_graphics_103,x:-24,y:0.4}).wait(1).to({graphics:mask_graphics_104,x:-23.7,y:0.5}).wait(1).to({graphics:mask_graphics_105,x:-23.4,y:0.7}).wait(1).to({graphics:mask_graphics_106,x:-23,y:0.9}).wait(1).to({graphics:mask_graphics_107,x:-22.7,y:1.1}).wait(1).to({graphics:mask_graphics_108,x:-22.3,y:1.2}).wait(1).to({graphics:mask_graphics_109,x:-22,y:1.4}).wait(1).to({graphics:mask_graphics_110,x:-21.7,y:1.6}).wait(1).to({graphics:mask_graphics_111,x:-21.3,y:1.8}).wait(1).to({graphics:mask_graphics_112,x:-21,y:1.9}).wait(1).to({graphics:mask_graphics_113,x:-20.7,y:2.1}).wait(1).to({graphics:mask_graphics_114,x:-20.3,y:2.3}).wait(1).to({graphics:mask_graphics_115,x:-20,y:2.5}).wait(1).to({graphics:mask_graphics_116,x:-19.7,y:2.6}).wait(1).to({graphics:mask_graphics_117,x:-19.3,y:2.8}).wait(1).to({graphics:mask_graphics_118,x:-19,y:3}).wait(1).to({graphics:mask_graphics_119,x:-18.7,y:3.1}).wait(1).to({graphics:mask_graphics_120,x:-18.3,y:3.3}).wait(1).to({graphics:mask_graphics_121,x:-18,y:3.5}).wait(1).to({graphics:mask_graphics_122,x:-17.7,y:3.7}).wait(1).to({graphics:mask_graphics_123,x:-17.3,y:3.8}).wait(1).to({graphics:mask_graphics_124,x:-17,y:4}).wait(1).to({graphics:mask_graphics_125,x:-16.6,y:4.2}).wait(1).to({graphics:mask_graphics_126,x:-16.3,y:4.4}).wait(1).to({graphics:mask_graphics_127,x:-16,y:4.5}).wait(1).to({graphics:mask_graphics_128,x:-15.6,y:4.7}).wait(1).to({graphics:mask_graphics_129,x:-15.3,y:4.9}).wait(1).to({graphics:mask_graphics_130,x:-15,y:5.1}).wait(1).to({graphics:mask_graphics_131,x:-14.6,y:5.2}).wait(1).to({graphics:mask_graphics_132,x:-14.3,y:5.4}).wait(1).to({graphics:mask_graphics_133,x:-14,y:5.6}).wait(1).to({graphics:mask_graphics_134,x:-13.6,y:5.7}).wait(1).to({graphics:mask_graphics_135,x:-13.3,y:5.9}).wait(1).to({graphics:mask_graphics_136,x:-13,y:6.1}).wait(1).to({graphics:mask_graphics_137,x:-12.6,y:6.3}).wait(1).to({graphics:mask_graphics_138,x:-12.3,y:6.4}).wait(1).to({graphics:mask_graphics_139,x:-12,y:6.6}).wait(1).to({graphics:mask_graphics_140,x:-11.6,y:6.8}).wait(1).to({graphics:mask_graphics_141,x:-11.3,y:7}).wait(1).to({graphics:mask_graphics_142,x:-11,y:7.1}).wait(1).to({graphics:mask_graphics_143,x:-10.6,y:7.3}).wait(1).to({graphics:mask_graphics_144,x:-10.3,y:7.5}).wait(1).to({graphics:mask_graphics_145,x:-9.9,y:7.6}).wait(1).to({graphics:mask_graphics_146,x:-9.6,y:7.8}).wait(1).to({graphics:mask_graphics_147,x:-9.3,y:8}).wait(1).to({graphics:mask_graphics_148,x:-8.9,y:8.2}).wait(1).to({graphics:mask_graphics_149,x:-8.6,y:8.3}).wait(1).to({graphics:mask_graphics_150,x:-8.3,y:8.5}).wait(1).to({graphics:mask_graphics_151,x:-7.9,y:8.7}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AnfkmQCwKeMPhb");

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(152));

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
(lib.WS_Cursive_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_689 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(689).call(this.frame_689).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(312.7,106.6,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[312.7,106.6,301.4,148.3,290,190]}},85).wait(21).to({startPosition:0},0).to({x:306.5,y:149.3},20).to({guide:{path:[306.5,149.4,314.2,149.4,327.1,144.3,340.2,139.3,365.5,140.3,390.8,141.4,402.3,171.1,413.7,200.8,401.1,228,388.5,255.3,371,262.8,353.4,270.3,348,271.8,345.1,272.7,341.8,273.5,313.9,280.1,259.3,278.7]}},194).wait(18).to({x:259.5,y:278.1},0).to({guide:{path:[259.5,278.1,284.1,286.5,304.7,295.2,327.4,304.6,341.1,324.3,355.5,345.1,349.9,368.7,344.3,392.3,324.8,407.3,305.3,422.3,282.6,429.7,259.8,437.1,236,436.7,212.3,436.2,191.5,424.8,170.8,413.4,152.1,397.6,146.3,392.7,140.1,387.7]}},202).wait(20).to({startPosition:0},0).to({guide:{path:[140,387.6,130.7,441,170.8,474,172,475.1,190,490,209.8,506.1,210,520,208.6,534.2,233.6,549.2,258.6,564.2,310,580,336.7,585.4,339.4,594.4,341.1,600.4,354,630.2]}},120).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(260,279,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},320).wait(18).to({_off:false,x:143,y:390},0).to({_off:true},202).wait(141));

	// arrow
	this.instance_1 = new lib.ar4("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(322.7,437,1.09,1.09,0,-4.9,175.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(347).to({_off:false},0).wait(343));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_347 = new cjs.Graphics().p("A42NvQBKsFJXnuQJXnvMDBKQMFBJHvJXMgtKAlTQnupXBJsEg");
	var mask_graphics_348 = new cjs.Graphics().p("A49NbQBYsEJfnjQJgnkMCBYQMDBWHlJgMgt0AkfQnkpfBXsDg");
	var mask_graphics_349 = new cjs.Graphics().p("A5DNIQBlsDJonYQJonZMBBmQMCBjHZJoMgucAjrQnZpoBksAg");
	var mask_graphics_350 = new cjs.Graphics().p("A5IM0QBzsBJwnNQJwnOL/B0QMABxHOJwMgvEAi2QnOpwByr/g");
	var mask_graphics_351 = new cjs.Graphics().p("A5MMhQCAr/J4nBQJ5nDL8CBQL9B/HDJ3MgvqAiAQnDp4CAr8g");
	var mask_graphics_352 = new cjs.Graphics().p("A5QMOQCOr8KAm3QKAm3L6CPQL7CMG4J/MgwQAhKQm4qACNr6g");
	var mask_graphics_353 = new cjs.Graphics().p("A5SL7QCbr5KImrQKImsL3CcQL4CaGsKHMgw1AgSQmsqICbr3g");
	var mask_graphics_354 = new cjs.Graphics().p("A5ULpQCpr2KPmgQKPmgL0CpQL1CoGhKOMgxZAfaQmgqPCor0g");
	var mask_graphics_355 = new cjs.Graphics().p("A5VLXQC2ryKXmVQKWmVLxC3QLyC1GVKWMgx8AehQmVqXC2rwg");
	var mask_graphics_356 = new cjs.Graphics().p("A5VLFQDDrvKemJQKdmJLtDFQLvDCGJKdMgydAdnQmJqdDDrtg");
	var mask_graphics_357 = new cjs.Graphics().p("A5VKzQDRrrKll9QKkl8LpDRQLrDQF9KjMgy+AcuQl9qkDQrqg");
	var mask_graphics_358 = new cjs.Graphics().p("A5TKiQDernKrlxQKrlwLlDeQLnDdFxKqMgzeAbzQlxqqDermg");
	var mask_graphics_359 = new cjs.Graphics().p("A5RKRQDsrjKxlkQKxllLhDsQLjDqFlKwMgz9Aa5QlkqxDqrig");
	var mask_graphics_360 = new cjs.Graphics().p("A5OKAQD5reK3lYQK2lYLeD5QLfD3FYK2Mg0aAZ9QlYq3D3reg");
	var mask_graphics_361 = new cjs.Graphics().p("A5KJwQEGraK9lLQK8lMLZEGQLaEEFMK8Mg03AZBQlLq9EErZg");
	var mask_graphics_362 = new cjs.Graphics().p("A5FJgQESrVLDk/QLCk/LVETQLVERE/LBMg1SAYFQk/rDERrUg");
	var mask_graphics_363 = new cjs.Graphics().p("A5CJWQEarRLHk4QLFk4LREbQLTEZE3LFMg1jAXgQk3rHEZrRg");
	var mask_graphics_364 = new cjs.Graphics().p("A4+JNQEirPLJkwQLJkwLOEjQLPEgEwLJMg1zAW6QkwrJEirOg");
	var mask_graphics_365 = new cjs.Graphics().p("A47JDQEqrLLNkoQLMkoLLEqQLMEoEoLMMg2DAWVQkorNEprLg");
	var mask_graphics_366 = new cjs.Graphics().p("A43I6QEyrILQkhQLPkgLIEyQLJEwEgLPMg2SAVwQkgrQEwrIg");
	var mask_graphics_367 = new cjs.Graphics().p("A4yIxQE5rFLTkZQLSkYLFE5QLFE4EZLSMg2hAVKQkZrTE5rEg");
	var mask_graphics_368 = new cjs.Graphics().p("A4uIoQFBrCLWkQQLVkRLBFBQLDFAEQLVMg2vAUkQkRrWFArBg");
	var mask_graphics_369 = new cjs.Graphics().p("A4pIfQFIq+LakJQLYkJK9FJQK/FHEJLYMg2+AT+QkJrZFIq9g");
	var mask_graphics_370 = new cjs.Graphics().p("A4kIWQFQq6LckBQLbkBK6FQQK7FPEBLbMg3LATYQkBrcFPq6g");
	var mask_graphics_371 = new cjs.Graphics().p("A4eIOQFXq3Lfj5QLej5K2FYQK4FVD5LeMg3ZASyQj5reFXq2g");
	var mask_graphics_372 = new cjs.Graphics().p("A4YIFQFfqzLhjxQLgjxKzFfQK0FdDxLhMg3mASMQjxriFfqyg");
	var mask_graphics_373 = new cjs.Graphics().p("A4SH9QFmqwLkjpQLjjpKvFnQKwFkDpLkMg3yARlQjprkFmqug");
	var mask_graphics_374 = new cjs.Graphics().p("A4MH0QFuqrLmjhQLmjhKrFuQKsFsDhLmMg3+AQ+QjhrmFtqrg");
	var mask_graphics_375 = new cjs.Graphics().p("A4FHsQF1qnLpjZQLojZKnF1QKoFzDZLpMg4KAQYQjZrpF1qng");
	var mask_graphics_376 = new cjs.Graphics().p("A3+HkQF8qjLsjRQLqjRKjF9QKkF6DRLrMg4VAPxQjRrrF8qjg");
	var mask_graphics_377 = new cjs.Graphics().p("A33HcQGEqfLtjJQLtjJKfGFQKfGBDJLuMg4fAPJQjJrtGDqfg");
	var mask_graphics_378 = new cjs.Graphics().p("A3vHVQGLqbLvjBQLvjBKaGMQKcGJDBLvMg4qAOiQjBrvGLqag");
	var mask_graphics_379 = new cjs.Graphics().p("A3oHNQGTqXLxi4QLxi5KWGTQKYGQC4LxMg4zAN8Qi5ryGRqWg");
	var mask_graphics_380 = new cjs.Graphics().p("A3fHGQGZqTL0iwQLyixKSGaQKTGXCxL0Mg4+ANUQiwr0GZqRg");
	var mask_graphics_381 = new cjs.Graphics().p("A3XG+QGhqOL1ioQL1ioKNGhQKPGeCoL2Mg5GAMsQipr2GgqNg");
	var mask_graphics_382 = new cjs.Graphics().p("A3OG3QGoqJL3igQL2igKJGoQKKGlCgL3Mg5PAMFQigr3GnqJg");
	var mask_graphics_383 = new cjs.Graphics().p("A3FGwQGvqFL5iYQL4iXKEGvQKFGsCYL5Mg5XALdQiYr5GuqEg");
	var mask_graphics_384 = new cjs.Graphics().p("A28GpQG2qAL7iQQL5iPKAG2QKBGzCPL7Mg5fAK1QiPr6G0qAg");
	var mask_graphics_385 = new cjs.Graphics().p("A2yGiQG9p7L8iHQL7iIJ7G9QJ8G7CHL8Mg5mAKNQiIr8G8p7g");
	var mask_graphics_386 = new cjs.Graphics().p("A2oGcQHDp3L+h/QL8h/J2HEQJ4HBB/L+Mg5uAJlQh/r9HDp2g");
	var mask_graphics_387 = new cjs.Graphics().p("A2eGVQHKpxL/h3QL+h3JxHKQJzHJB2L/Mg5zAI9Qh3r/HJpxg");
	var mask_graphics_388 = new cjs.Graphics().p("A2UGPQHSptMAhuQL/hvJsHRQJtHQBvMAMg56AIVQhvsAHQpsg");
	var mask_graphics_389 = new cjs.Graphics().p("A2JGJQHYpoMBhmQMAhmJnHXQJpHWBmMBMg5/AHuQhnsCHXpmg");
	var mask_graphics_390 = new cjs.Graphics().p("A18GBQHgphMChcQMChdJhHfQJiHeBcMDMg6FAG+QhcsDHephg");
	var mask_graphics_391 = new cjs.Graphics().p("A1vF7QHopcMEhSQMChTJbHnQJcHmBTMDMg6LAGPQhTsEHmpag");
	var mask_graphics_392 = new cjs.Graphics().p("A1hF0QHvpVMFhJQMEhJJUHvQJWHtBJMFMg6QAFfQhIsEHtpVg");
	var mask_graphics_393 = new cjs.Graphics().p("A1SFuQH2pPMGg/QMEg/JOH2QJQH1A/MFMg6UAEwQg/sFH2pOg");
	var mask_graphics_394 = new cjs.Graphics().p("A1EFnQH+pIMHg1QMFg1JIH9QJJH9A1MGMg6XAEAQg2sGH9pIg");
	var mask_graphics_395 = new cjs.Graphics().p("A01FiQIGpCMHgsQMFgrJCIFQJCIEAsMHMg6bADQQgrsGIEpBg");
	var mask_graphics_396 = new cjs.Graphics().p("A0lFcQINo7MHgiQMGghI7IMQI8ILAhMHMg6cACiQgisIIMo6g");
	var mask_graphics_397 = new cjs.Graphics().p("A0WFWQIVo0MGgYQMIgXI0ITQI1ITAYMHMg6fAByQgXsIISo0g");
	var mask_graphics_398 = new cjs.Graphics().p("A0FFRQIbouMHgNQMIgOItIaQIuIaAOMIMg6gABCQgNsIIaotg");
	var mask_graphics_399 = new cjs.Graphics().p("Az1FMQIionMHgEQMIgEImIiQIoIhAEMIMg6gAASQgEsIIhomg");
	var mask_graphics_400 = new cjs.Graphics().p("A8SZfQAGsIIoofQIpogMHAHQMIAGIfIoQIhIogGMIg");
	var mask_graphics_401 = new cjs.Graphics().p("A8SY7QAQsHIvoYQIwoZMHAQQMIAQIYIvQIZIvgQMIg");
	var mask_graphics_402 = new cjs.Graphics().p("A8RYYQAasII1oRQI3oRMHAaQMHAaIRI1QITI2gaMHg");
	var mask_graphics_403 = new cjs.Graphics().p("A8QX0QAksHI8oKQI9oKMGAkQMIAjIJI9QILI8gjMHg");
	var mask_graphics_404 = new cjs.Graphics().p("A8PXQQAusGJCoDQJFoCMFAtQMHAuICJDQIEJDguMGg");
	var mask_graphics_405 = new cjs.Graphics().p("A8NWtQA3sGJJn7QJLn8MFA4QMGA3H7JKQH8JJg3MGg");
	var mask_graphics_406 = new cjs.Graphics().p("A8MWJQBBsFJQn0QJRnzMEBBQMGBBHzJQQH1JQhBMFg");
	var mask_graphics_407 = new cjs.Graphics().p("A8KVlQBLsEJWnsQJYnsMDBLQMEBLHsJXQHtJWhLMEg");
	var mask_graphics_408 = new cjs.Graphics().p("A8HVCQBVsDJcnlQJdnkMDBVQMDBVHkJcQHmJchVMEg");
	var mask_graphics_409 = new cjs.Graphics().p("A8FUeQBfsCJincQJkndMBBfQMCBeHdJjQHeJihfMCg");
	var mask_graphics_410 = new cjs.Graphics().p("A8CT7QBpsBJonVQJqnVMABpQMABoHVJpQHWJohoMBg");
	var mask_graphics_411 = new cjs.Graphics().p("A7/TYQBzsAJunNQJwnNL+ByQL/BzHNJuQHOJvhyL/g");
	var mask_graphics_412 = new cjs.Graphics().p("A77S0QB8r+J0nEQJ1nGL9B8QL+B8HFJ1QHGJ0h8L+g");
	var mask_graphics_413 = new cjs.Graphics().p("A73SRQCFr8J6m8QJ7m+L8CGQL8CFG9J6QG+J6iGL9g");
	var mask_graphics_414 = new cjs.Graphics().p("A7zRuQCPr7KAmzQKBm2L5CPQL6CQG1J/QG2KAiPL6g");
	var mask_graphics_415 = new cjs.Graphics().p("A7vRLQCZr5KFmrQKHmuL3CZQL5CZGsKFQGuKFiZL5g");
	var mask_graphics_416 = new cjs.Graphics().p("A7qQoQCjr3KKmjQKMmmL1CjQL3CjGkKLQGmKKijL3g");
	var mask_graphics_417 = new cjs.Graphics().p("A7lQFQCsr1KQmbQKRmdL0CtQL0CsGcKQQGdKQisL0g");
	var mask_graphics_418 = new cjs.Graphics().p("A7gPiQC2ryKVmTQKWmVLyC3QLyC2GTKVQGVKVi2Lyg");
	var mask_graphics_419 = new cjs.Graphics().p("A7aO/QDArvKZmLQKcmMLvDAQLvC/GLKbQGNKajALvg");
	var mask_graphics_420 = new cjs.Graphics().p("A7UOdQDJrtKfmCQKgmELsDJQLuDJGCKgQGEKfjJLtg");
	var mask_graphics_421 = new cjs.Graphics().p("A7ON6QDTrqKjl5QKml8LpDTQLrDTF6KkQF7KkjSLqg");
	var mask_graphics_422 = new cjs.Graphics().p("A7HNYQDcroKolwQKqlzLnDcQLoDcFxKpQFzKpjcLog");
	var mask_graphics_423 = new cjs.Graphics().p("A7BM2QDmrlKtloQKvlqLkDmQLlDlFoKuQFqKtjlLlg");
	var mask_graphics_424 = new cjs.Graphics().p("A65MUQDvriKxlfQKzlhLhDvQLiDvFgKyQFiKxjvLig");
	var mask_graphics_425 = new cjs.Graphics().p("A6yLyQD4rfK2lWQK4lZLeD5QLfD4FXK3QFYK2j4Lfg");
	var mask_graphics_426 = new cjs.Graphics().p("A6qLQQEBrbK7lOQK8lPLaEBQLcECFOK7QFQK6kCLcg");
	var mask_graphics_427 = new cjs.Graphics().p("A6iKuQELrXK+lFQLAlHLYELQLYELFFK/QFHK/kLLYg");
	var mask_graphics_428 = new cjs.Graphics().p("A6aKNQEUrULDk8QLDk+LVEUQLVEVE8LCQE+LDkULVg");
	var mask_graphics_429 = new cjs.Graphics().p("A6RJsQEdrRLHkzQLHk1LREeQLSEdEzLHQE0LHkdLRg");
	var mask_graphics_430 = new cjs.Graphics().p("A6IJLQEmrNLKkrQLMkrLNEnQLOEmEqLLQEsLLknLNg");
	var mask_graphics_431 = new cjs.Graphics().p("A5/IqQEwrJLOkiQLOkiLKEwQLKEwEhLOQEjLPkwLJg");
	var mask_graphics_432 = new cjs.Graphics().p("A52IJQE5rFLSkYQLSkZLGE5QLGE4EYLSQEZLSk5LGg");
	var mask_graphics_433 = new cjs.Graphics().p("A5sHoQFCrBLVkPQLWkPLCFBQLCFCEOLWQEQLVlBLCg");
	var mask_graphics_434 = new cjs.Graphics().p("A5iHIQFLq9LYkGQLakGK+FLQK9FKEFLZQEHLZlKK+g");
	var mask_graphics_435 = new cjs.Graphics().p("A5YGoQFUq5Lcj8QLdj9K5FTQK5FUD8LcQD+LclUK6g");
	var mask_graphics_436 = new cjs.Graphics().p("A5NGIQFdq1LfjzQLfjzK1FcQK1FdDzLfQD0LflcK1g");
	var mask_graphics_437 = new cjs.Graphics().p("A5CFoQFlqwLijqQLjjqKxFlQKwFmDpLiQDrLillKxg");
	var mask_graphics_438 = new cjs.Graphics().p("A43FJQFuqrLljhQLmjhKsFuQKsFuDfLmQDiLlluKsg");
	var mask_graphics_439 = new cjs.Graphics().p("A4rEoQF3qmLojXQLpjXKnF3QKnF4DWLoQDXLol3Kng");
	var mask_graphics_440 = new cjs.Graphics().p("A4eEHQGAqhLqjMQLsjNKiGAQKiGADLLrQDOLrmAKig");
	var mask_graphics_441 = new cjs.Graphics().p("A4SDmQGJqbLujDQLujDKdGJQKcGKDCLtQDELumJKdg");
	var mask_graphics_442 = new cjs.Graphics().p("A4FDGQGSqWLwi5QLxi4KXGSQKYGSC3LwQC6LwmSKYg");
	var mask_graphics_443 = new cjs.Graphics().p("A34CmQGbqRLziuQLzivKSGbQKSGbCtLyQCwLzmbKSg");
	var mask_graphics_444 = new cjs.Graphics().p("A3qCHQGkqML0ikQL2ilKMGkQKMGjCkL1QClL1mjKNg");
	var mask_graphics_445 = new cjs.Graphics().p("A3cBnQGsqGL3iaQL3iaKHGsQKHGrCZL4QCbL4msKGg");
	var mask_graphics_446 = new cjs.Graphics().p("A3OBIQG1qAL4iQQL6iQKBG1QKBG0CPL5QCRL6m1KBg");
	var mask_graphics_447 = new cjs.Graphics().p("A3AApQG+p6L6iGQL8iGJ7G+QJ7G8CFL8QCHL7m+J7g");
	var mask_graphics_448 = new cjs.Graphics().p("A2xAKQHGp0L8h7QL9h8J1HGQJ1HFB7L9QB9L9nGJ1g");
	var mask_graphics_449 = new cjs.Graphics().p("A2igTQHOpvL+hxQL/hyJvHPQJvHNBwL/QBzL+nPJvg");
	var mask_graphics_450 = new cjs.Graphics().p("A2TgxQHXpoL/hoQMAhnJpHXQJoHVBnMBQBoMAnXJog");
	var mask_graphics_451 = new cjs.Graphics().p("A2DhOQHepjMBhdQMBhdJjHfQJiHeBcMBQBeMCnfJig");
	var mask_graphics_452 = new cjs.Graphics().p("A10hsQHnpcMChSQMDhTJbHnQJcHmBSMDQBUMCnnJcg");
	var mask_graphics_453 = new cjs.Graphics().p("A1kiJQHvpVMDhIQMEhJJVHvQJVHuBIMEQBJMDnvJWg");
	var mask_graphics_454 = new cjs.Graphics().p("A1TimQH2pOMEg+QMFg+JOH2QJPH2A9MFQA/MFn3JOg");
	var mask_graphics_455 = new cjs.Graphics().p("A1DjCQH/pIMEg0QMGgzJHH+QJIH+AzMGQA1MFn/JIg");
	var mask_graphics_456 = new cjs.Graphics().p("A0yjeQIGpBMFgpQMGgqJBIHQJBIFAoMGQArMGoHJBg");
	var mask_graphics_457 = new cjs.Graphics().p("A0hj6QIOo6MFgfQMHgfI6IOQI6INAeMHQAgMGoOI6g");
	var mask_graphics_458 = new cjs.Graphics().p("A0QkVQIWozMEgVQMIgVIzIWQIzIVAUMHQAVMHoVIyg");
	var mask_graphics_459 = new cjs.Graphics().p("Az/kwQIdosMFgKQMJgLIrIdQIsIdAJMHQAMMHoeIrg");
	var mask_graphics_460 = new cjs.Graphics().p("AztlLQIkolMFABQMJAAIkIkQIlIkgCMHQABMHokIkg");
	var mask_graphics_461 = new cjs.Graphics().p("AzbllQIroeMFALQMJAKIdIsQIdIrgMMHQgJMHosIdg");
	var mask_graphics_462 = new cjs.Graphics().p("AzJmAQIzoVMEAVQMIAVIWIzQIVIygVMGQgUMHozIWg");
	var mask_graphics_463 = new cjs.Graphics().p("Ay3mZQI6oOMEAfQMIAfIOI6QIOI5ggMHQgeMGo7IOg");
	var mask_graphics_464 = new cjs.Graphics().p("AylmyQJBoHMEAqQMHApIHJBQIGJAgrMGQgoMGpBIHg");
	var mask_graphics_465 = new cjs.Graphics().p("AySnLQJIn/MDA0QMHA0H+JIQH/JHg1MFQgzMGpIH+g");
	var mask_graphics_466 = new cjs.Graphics().p("Ax/nkQJOn3MDA/QMGA+H2JPQH3JNg/MFQg9MFpPH2g");
	var mask_graphics_467 = new cjs.Graphics().p("Axsn8QJVnvMCBJQMEBIHvJWQHvJUhKMEQhHMEpVHug");
	var mask_graphics_468 = new cjs.Graphics().p("AxZoUQJcnmMABSQMEBTHnJcQHnJbhUMDQhSMCpcHng");
	var mask_graphics_469 = new cjs.Graphics().p("AxGorQJjnfL/BdQMDBeHeJiQHfJhheMCQhcMBpjHfg");
	var mask_graphics_470 = new cjs.Graphics().p("AwypCQJpnWL+BnQMBBnHWJpQHXJohpMAQhmMAppHXg");
	var mask_graphics_471 = new cjs.Graphics().p("AwepZQJvnOL8ByQMAByHOJvQHOJuhyL+QhxL/pvHOg");
	var mask_graphics_472 = new cjs.Graphics().p("AwKpvQJ1nGL7B8QL+B8HGJ1QHGJ1h9L9Qh7L9p1HGg");
	var mask_graphics_473 = new cjs.Graphics().p("Av2qFQJ7m9L6CGQL8CGG9J8QG+J6iIL7QiFL8p7G9g");
	var mask_graphics_474 = new cjs.Graphics().p("AviqaQKBm1L4CQQL7CRG0KBQG1KAiRL5QiQL6qBG1g");
	var mask_graphics_475 = new cjs.Graphics().p("AvNqvQKHmsL1CaQL5CbGsKHQGsKGibL3QiaL4qGGsg");
	var mask_graphics_476 = new cjs.Graphics().p("Au4rDQKMmkL0ClQL2CkGkKNQGjKLimL2QijL1qNGkg");
	var mask_graphics_477 = new cjs.Graphics().p("AujrXQKSmbLxCuQL0CvGbKSQGbKRiwLzQiuL0qSGag");
	var mask_graphics_478 = new cjs.Graphics().p("AuOrrQKXmSLvC5QLyC5GSKXQGSKXi6LwQi4LxqXGSg");
	var mask_graphics_479 = new cjs.Graphics().p("At5r+QKdmJLsDCQLwDDGJKdQGJKcjELuQjCLuqdGJg");
	var mask_graphics_480 = new cjs.Graphics().p("AtjsRQKimALpDMQLtDOGAKiQGAKhjOLrQjMLsqiGAg");
	var mask_graphics_481 = new cjs.Graphics().p("AtNskQKnl2LmDWQLqDXF3KnQF3KmjYLpQjWLpqnF3g");
	var mask_graphics_482 = new cjs.Graphics().p("As4s1QKsluLkDgQLnDhFuKsQFuKrjiLmQjgLmqsFug");
	var mask_graphics_483 = new cjs.Graphics().p("AshtHQKwllLhDrQLkDrFkKxQFlKvjsLjQjpLjqxFlg");
	var mask_graphics_484 = new cjs.Graphics().p("AsLtYQK1lbLeD0QLgD1FcK1QFbK1j1LfQj0Lgq1Fbg");
	var mask_graphics_485 = new cjs.Graphics().p("Ar1tpQK6lSLaD+QLeD/FSK6QFSK5kALcQj9Ldq6FSg");
	var mask_graphics_486 = new cjs.Graphics().p("Aret5QK+lILXEHQLaEJFIK9QFJK/kJLYQkHLZq/FJg");
	var mask_graphics_487 = new cjs.Graphics().p("ArIuIQLDlALTESQLWESFALCQE/LDkTLVQkRLVrCE/g");
	var mask_graphics_488 = new cjs.Graphics().p("AqxuYQLGk1LREbQLSEcE2LGQE2LHkdLRQkaLSrHE1g");
	var mask_graphics_489 = new cjs.Graphics().p("AqaunQLKksLNEkQLOEmEtLKQEsLLkmLOQkkLNrLEtg");
	var mask_graphics_490 = new cjs.Graphics().p("Ap4u7QLPkfLHEzQLJEzEeLQQEfLRk0LHQkyLIrREfg");
	var mask_graphics_491 = new cjs.Graphics().p("ApXvPQLVkRLBFBQLDFBEQLVQERLWlBLBQlALCrWERg");
	var mask_graphics_492 = new cjs.Graphics().p("Ao1vhQLakDK7FOQK8FOEDLaQECLclPK7QlNK8rbECg");
	var mask_graphics_493 = new cjs.Graphics().p("AoTvzQLfj0K0FaQK2FcD1LgQD0LglcK0QlbK2rgD0g");
	var mask_graphics_494 = new cjs.Graphics().p("AnwwEQLjjmKtFoQKvFqDnLjQDmLllqKuQlnKurlDng");
	var mask_graphics_495 = new cjs.Graphics().p("AnOwTQLojYKmF1QKoF3DYLoQDYLpl2KmQl1KorpDYg");
	var mask_graphics_496 = new cjs.Graphics().p("AmrwiQLsjJKfGCQKhGDDJLsQDKLtmEKgQmCKgrtDKg");
	var mask_graphics_497 = new cjs.Graphics().p("AmIwvQLwi7KXGPQKZGQC7LwQC8LwmRKYQmPKZrxC7g");
	var mask_graphics_498 = new cjs.Graphics().p("Allw8QL0itKPGcQKRGdCtLzQCtL1meKQQmbKRr0Csg");
	var mask_graphics_499 = new cjs.Graphics().p("AlBxHQL2ifKHGpQKKGpCeL3QCeL3mqKIQmoKJr3Ceg");
	var mask_graphics_500 = new cjs.Graphics().p("AkexSQL5iPKAG0QKBG2CPL6QCPL6m2J/Qm0KBr7CPg");
	var mask_graphics_501 = new cjs.Graphics().p("Aj6xcQL8iAJ2HBQJ5HCCBL8QCAL9nCJ3QnBJ4r9CBg");
	var mask_graphics_502 = new cjs.Graphics().p("AjWxkQL+hyJuHNQJvHOByL/QByL/nOJuQnNJvr/Byg");
	var mask_graphics_503 = new cjs.Graphics().p("AizxrQMBhkJlHZQJmHaBkMBQBjMBnaJlQnZJnsCBjg");
	var mask_graphics_504 = new cjs.Graphics().p("AiPxyQMDhUJbHkQJeHmBUMCQBVMDnmJcQnlJesDBUg");
	var mask_graphics_505 = new cjs.Graphics().p("Ahrx3QMEhGJSHwQJUHyBGMDQBGMFnyJSQnwJUsFBGg");
	var mask_graphics_506 = new cjs.Graphics().p("AhGx8QMEg2JJH7QJKH9A3MFQA3MGn9JIQn8JLsFA2g");
	var mask_graphics_507 = new cjs.Graphics().p("Agix/QMFgoI/IHQJBIIAnMGQAoMGoII/QoGJAsHAog");
	var mask_graphics_508 = new cjs.Graphics().p("AAByBQMHgZI1IRQI2ITAZMHQAZMHoTI1QoSI2sHAZg");
	var mask_graphics_509 = new cjs.Graphics().p("AAlyDQMIgKIqIdQIsIeAKMGQAKMIoeIrQocIrsIAKg");
	var mask_graphics_510 = new cjs.Graphics().p("EAAxAocMAAYg6fQMIAFIgInQIhIogFMHQgFMIooIgQoiIcr/AAIgOAAg");
	var mask_graphics_511 = new cjs.Graphics().p("EAANAocMABgg6eQMHATIWIyQIWIzgUMGQgTMIozIVQodIErlAAIg3gBg");
	var mask_graphics_512 = new cjs.Graphics().p("EgAWAoaMACng6bQMHAjIKI7QIMI8gjMHQgjMHo9IKQoXHsrLAAQgwAAgvgDg");
	var mask_graphics_513 = new cjs.Graphics().p("EgA6AoYMADug6XQMHAxH/JGQIBJGgyMGQgyMGpGH/QoTHUqyAAQhDAAhDgFg");
	var mask_graphics_514 = new cjs.Graphics().p("EgBeAoWMAE2g6TQMFBBH0JPQH2JPhBMGQhAMFpRH0QoMG8qaAAQhVAAhYgHg");
	var mask_graphics_515 = new cjs.Graphics().p("EgCCAoSMAF+g6MQMEBQHoJYQHqJZhPMEQhQMEpaHoQoFGmqDAAQhoAAhrgLg");
	var mask_graphics_516 = new cjs.Graphics().p("EgCmAoOMAHGg6EQMCBeHdJiQHeJjheMCQhfMCpjHdQn+GPptAAQh6AAh+gPg");
	var mask_graphics_517 = new cjs.Graphics().p("EgDKAoJMAINg57QMABtHRJrQHTJshtMAQhtMAptHRQn2F6pXAAQiMAAiRgUg");
	var mask_graphics_518 = new cjs.Graphics().p("EgDuAoDMAJUg5vQL+B7HFJ0QHHJ1h8L+Qh8L9p1HFQnuFmpCAAQidAAikgbg");
	var mask_graphics_519 = new cjs.Graphics().p("EgESAn9MAKbg5kQL8CLG5J8QG6J9iKL8QiLL7p+G5QnlFRouAAQiuAAi2ghg");
	var mask_graphics_520 = new cjs.Graphics().p("EgE4An1MALng5VQL5CbGrKFQGtKGiaL5QiaL4qHGrQnbE8oZAAQjAAAjJgpg");
	var mask_graphics_521 = new cjs.Graphics().p("EgFfAntMAM0g5FQL1CqGeKOQGgKPiqL1QiqL1qQGeQnQEnoFAAQjSAAjcgxg");
	var mask_graphics_522 = new cjs.Graphics().p("EgGFAnkMAOAg40QLxC6GRKXQGRKXi5LyQi6LxqYGRQnGESnwAAQjkAAjug6g");
	var mask_graphics_523 = new cjs.Graphics().p("EgGrAnaMAPLg4gQLuDJGCKfQGEKgjJLtQjJLuqhGCQm6EAncAAQj2AAkAhFg");
	var mask_graphics_524 = new cjs.Graphics().p("EgHQAnPMAQVg4LQLqDZF0KnQF2KnjZLpQjZLqqoF0QmuDtnIAAQkIAAkRhQg");
	var mask_graphics_525 = new cjs.Graphics().p("EgH2AnEMARhg31QLkDoFnKvQFnKvjoLkQjoLlqwFmQmiDbm1AAQkZAAkjhbg");
	var mask_graphics_526 = new cjs.Graphics().p("EgIbAm4MASqg3dQLgD3FYK2QFaK3j4LfQj4Lgq3FYQmUDJmjAAQkrAAkzhng");
	var mask_graphics_527 = new cjs.Graphics().p("EgJAAmrMAT0g3EQLaEHFKK9QFLK9kHLbQkHLaq+FKQmHC4mQAAQk9AAlDh0g");
	var mask_graphics_528 = new cjs.Graphics().p("EgJkAmdMAU8g2pQLVEWE7LEQE9LEkWLVQkWLVrFE7Ql5Col+AAQlOAAlTiCg");
	var mask_graphics_529 = new cjs.Graphics().p("EgKIAmPMAWFg2NQLOElEtLKQEtLLklLPQklLPrLEsQlrCZlrAAQlgAAliiQg");
	var mask_graphics_530 = new cjs.Graphics().p("EgKsAmAMAXMg1vQLJE0EeLPQEeLSk0LJQkzLJrSEdQlcCKlaAAQlyAAlwifg");
	var mask_graphics_531 = new cjs.Graphics().p("EgLQAlwMAYUg1PQLCFDEPLUQEPLYlCLDQlDLCrXEOQlNB8lIAAQmEAAl/ivg");
	var mask_graphics_532 = new cjs.Graphics().p("EgLzAlgMAZag0vQK8FSD/LaQEBLdlSK8QlRK7rdD/Qk8Bvk3AAQmWAAmNi/g");
	var mask_graphics_533 = new cjs.Graphics().p("EgMWAlPMAagg0MQK1FfDwLgQDxLilgK1QlfK0riDwQktBikkAAQmqAAmajQg");
	var mask_graphics_534 = new cjs.Graphics().p("EgM4Ak9MAblgzoQKtFtDhLlQDhLnluKtQluKtrmDgQkcBXkTAAQm8AAmnjig");
	var mask_graphics_535 = new cjs.Graphics().p("EgNaAkqMAcpgzDQKlF8DSLpQDSLsl8KmQl8KlrrDRQkLBLkCAAQnPAAmzj1g");
	var mask_graphics_536 = new cjs.Graphics().p("EgN8AkXMAdtgycQKdGKDCLtQDDLwmKKdQmKKerwDBQj5BBjwAAQnjAAm/kIg");
	var mask_graphics_537 = new cjs.Graphics().p("EgOdAkDMAewgx0QKVGYCyLxQCzL0mYKVQmYKVrzCxQjnA3jeAAQn3AAnLkbg");
	var mask_graphics_538 = new cjs.Graphics().p("EgO+AjvMAfygxLQKMGlCjL1QCjL4mlKMQmmKMr3CiQjVAujMAAQoLAAnWkvg");
	var mask_graphics_539 = new cjs.Graphics().p("EgPeAjZMAgzgwgQKDGzCTL4QCTL7mzKEQmzKDr6CSQjCAmi6AAQogAAnglFg");
	var mask_graphics_540 = new cjs.Graphics().p("EgP+AjEMAhzgv1QJ6HBCDL7QCEL+nAJ6QnBJ6r9CDQiuAeioAAQo2AAnqlag");
	var mask_graphics_541 = new cjs.Graphics().p("EgQdAitMAiygvHQJxHOBzL9QBzMBnNJxQnNJxsAByQibAXiVAAQpNAAnylwg");
	var mask_graphics_542 = new cjs.Graphics().p("EgQ8AiWMAjwguYQJnHaBkMAQBjMDnaJnQnaJnsCBjQiHARiCAAQpkAAn7mHg");
	var mask_graphics_543 = new cjs.Graphics().p("EgRbAh+MAkugtoQJdHnBTMCQBUMEnnJeQnnJdsEBSQhyANhvAAQp7AAoEmfg");
	var mask_graphics_544 = new cjs.Graphics().p("EgR5AhmMAlqgs3QJTHzBEMDQBDMHnzJTQn0JTsFBDQheAIhaAAQqVAAoLm3g");
	var mask_graphics_545 = new cjs.Graphics().p("EgSXAhNMAmlgsFQJJIAAzMFQA0MIoAJIQoAJJsHAyQhIAFhGAAQquAAoSnQg");
	var mask_graphics_546 = new cjs.Graphics().p("EgSjAgnMAmRgruQJXINBAMKQBBMNn8JEQn7JEsOAmQg4ADg3AAQrJAAosnng");
	var mask_graphics_547 = new cjs.Graphics().p("EgSwAgAMAl9grWQJlIZBOMQQBOMSn3I/Qn4JAsVAZIhOACQrlAApHn/g");
	var mask_graphics_548 = new cjs.Graphics().p("Ay9fZMAlpgq/QJ0ImBbMVQBbMYn0I7QnzI6scAOIgsAAQsBAApjoXg");
	var mask_graphics_549 = new cjs.Graphics().p("AzKeyMAlUgqoQKDIyBoMbQBoMenvI2QnvI1skABIgKABQsdAAp+owg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(347).to({graphics:mask_graphics_347,x:172.1,y:225}).wait(1).to({graphics:mask_graphics_348,x:173.2,y:223.7}).wait(1).to({graphics:mask_graphics_349,x:174.2,y:222.4}).wait(1).to({graphics:mask_graphics_350,x:175.2,y:221.1}).wait(1).to({graphics:mask_graphics_351,x:176.1,y:219.7}).wait(1).to({graphics:mask_graphics_352,x:177.1,y:218.4}).wait(1).to({graphics:mask_graphics_353,x:178,y:217}).wait(1).to({graphics:mask_graphics_354,x:178.9,y:215.6}).wait(1).to({graphics:mask_graphics_355,x:179.8,y:214.2}).wait(1).to({graphics:mask_graphics_356,x:180.6,y:212.7}).wait(1).to({graphics:mask_graphics_357,x:181.4,y:211.3}).wait(1).to({graphics:mask_graphics_358,x:182.2,y:209.8}).wait(1).to({graphics:mask_graphics_359,x:183,y:208.4}).wait(1).to({graphics:mask_graphics_360,x:183.7,y:206.9}).wait(1).to({graphics:mask_graphics_361,x:184.4,y:205.4}).wait(1).to({graphics:mask_graphics_362,x:185.1,y:203.9}).wait(1).to({graphics:mask_graphics_363,x:185.5,y:203}).wait(1).to({graphics:mask_graphics_364,x:185.9,y:202}).wait(1).to({graphics:mask_graphics_365,x:186.3,y:201.1}).wait(1).to({graphics:mask_graphics_366,x:186.7,y:200.2}).wait(1).to({graphics:mask_graphics_367,x:187.1,y:199.2}).wait(1).to({graphics:mask_graphics_368,x:187.4,y:198.3}).wait(1).to({graphics:mask_graphics_369,x:187.8,y:197.3}).wait(1).to({graphics:mask_graphics_370,x:188.1,y:196.4}).wait(1).to({graphics:mask_graphics_371,x:188.5,y:195.4}).wait(1).to({graphics:mask_graphics_372,x:188.8,y:194.5}).wait(1).to({graphics:mask_graphics_373,x:189.1,y:193.5}).wait(1).to({graphics:mask_graphics_374,x:189.4,y:192.5}).wait(1).to({graphics:mask_graphics_375,x:189.7,y:191.6}).wait(1).to({graphics:mask_graphics_376,x:190,y:190.6}).wait(1).to({graphics:mask_graphics_377,x:190.2,y:189.6}).wait(1).to({graphics:mask_graphics_378,x:190.5,y:188.6}).wait(1).to({graphics:mask_graphics_379,x:190.7,y:187.7}).wait(1).to({graphics:mask_graphics_380,x:191,y:186.7}).wait(1).to({graphics:mask_graphics_381,x:191.2,y:185.7}).wait(1).to({graphics:mask_graphics_382,x:191.4,y:184.7}).wait(1).to({graphics:mask_graphics_383,x:191.6,y:183.7}).wait(1).to({graphics:mask_graphics_384,x:191.8,y:182.7}).wait(1).to({graphics:mask_graphics_385,x:192,y:181.7}).wait(1).to({graphics:mask_graphics_386,x:192.2,y:180.7}).wait(1).to({graphics:mask_graphics_387,x:192.3,y:179.7}).wait(1).to({graphics:mask_graphics_388,x:192.5,y:178.7}).wait(1).to({graphics:mask_graphics_389,x:192.6,y:177.7}).wait(1).to({graphics:mask_graphics_390,x:192.7,y:176.5}).wait(1).to({graphics:mask_graphics_391,x:192.9,y:175.3}).wait(1).to({graphics:mask_graphics_392,x:193,y:174.1}).wait(1).to({graphics:mask_graphics_393,x:193.1,y:172.9}).wait(1).to({graphics:mask_graphics_394,x:193.2,y:171.7}).wait(1).to({graphics:mask_graphics_395,x:193.3,y:170.5}).wait(1).to({graphics:mask_graphics_396,x:193.3,y:169.4}).wait(1).to({graphics:mask_graphics_397,x:193.4,y:168.2}).wait(1).to({graphics:mask_graphics_398,x:193.4,y:167}).wait(1).to({graphics:mask_graphics_399,x:193.4,y:165.8}).wait(1).to({graphics:mask_graphics_400,x:193.4,y:166.1}).wait(1).to({graphics:mask_graphics_401,x:193.4,y:167.3}).wait(1).to({graphics:mask_graphics_402,x:193.4,y:168.4}).wait(1).to({graphics:mask_graphics_403,x:193.4,y:169.6}).wait(1).to({graphics:mask_graphics_404,x:193.4,y:170.8}).wait(1).to({graphics:mask_graphics_405,x:193.4,y:172}).wait(1).to({graphics:mask_graphics_406,x:193.4,y:173.2}).wait(1).to({graphics:mask_graphics_407,x:193.4,y:174.4}).wait(1).to({graphics:mask_graphics_408,x:193.4,y:175.6}).wait(1).to({graphics:mask_graphics_409,x:193.5,y:176.7}).wait(1).to({graphics:mask_graphics_410,x:193.5,y:177.9}).wait(1).to({graphics:mask_graphics_411,x:193.5,y:179.1}).wait(1).to({graphics:mask_graphics_412,x:193.5,y:180.3}).wait(1).to({graphics:mask_graphics_413,x:193.5,y:181.5}).wait(1).to({graphics:mask_graphics_414,x:193.5,y:182.6}).wait(1).to({graphics:mask_graphics_415,x:193.5,y:183.8}).wait(1).to({graphics:mask_graphics_416,x:193.5,y:185}).wait(1).to({graphics:mask_graphics_417,x:193.5,y:186.1}).wait(1).to({graphics:mask_graphics_418,x:193.6,y:187.3}).wait(1).to({graphics:mask_graphics_419,x:193.6,y:188.4}).wait(1).to({graphics:mask_graphics_420,x:193.6,y:189.6}).wait(1).to({graphics:mask_graphics_421,x:193.6,y:190.7}).wait(1).to({graphics:mask_graphics_422,x:193.6,y:191.9}).wait(1).to({graphics:mask_graphics_423,x:193.6,y:193}).wait(1).to({graphics:mask_graphics_424,x:193.6,y:194.1}).wait(1).to({graphics:mask_graphics_425,x:193.6,y:195.3}).wait(1).to({graphics:mask_graphics_426,x:193.6,y:196.4}).wait(1).to({graphics:mask_graphics_427,x:193.6,y:197.5}).wait(1).to({graphics:mask_graphics_428,x:193.6,y:198.6}).wait(1).to({graphics:mask_graphics_429,x:193.6,y:199.7}).wait(1).to({graphics:mask_graphics_430,x:193.6,y:200.8}).wait(1).to({graphics:mask_graphics_431,x:193.6,y:201.9}).wait(1).to({graphics:mask_graphics_432,x:193.6,y:203}).wait(1).to({graphics:mask_graphics_433,x:193.6,y:204.1}).wait(1).to({graphics:mask_graphics_434,x:193.6,y:205.2}).wait(1).to({graphics:mask_graphics_435,x:193.6,y:206.3}).wait(1).to({graphics:mask_graphics_436,x:193.6,y:207.3}).wait(1).to({graphics:mask_graphics_437,x:193.6,y:208.4}).wait(1).to({graphics:mask_graphics_438,x:193.5,y:209.5}).wait(1).to({graphics:mask_graphics_439,x:193.5,y:210.6}).wait(1).to({graphics:mask_graphics_440,x:193.5,y:211.7}).wait(1).to({graphics:mask_graphics_441,x:193.5,y:212.8}).wait(1).to({graphics:mask_graphics_442,x:193.5,y:213.9}).wait(1).to({graphics:mask_graphics_443,x:193.5,y:214.9}).wait(1).to({graphics:mask_graphics_444,x:193.5,y:216}).wait(1).to({graphics:mask_graphics_445,x:193.4,y:217}).wait(1).to({graphics:mask_graphics_446,x:193.4,y:218.1}).wait(1).to({graphics:mask_graphics_447,x:193.4,y:219.1}).wait(1).to({graphics:mask_graphics_448,x:193.4,y:220.1}).wait(1).to({graphics:mask_graphics_449,x:193.4,y:221.1}).wait(1).to({graphics:mask_graphics_450,x:193.4,y:222.1}).wait(1).to({graphics:mask_graphics_451,x:193.3,y:223.1}).wait(1).to({graphics:mask_graphics_452,x:193.3,y:224.1}).wait(1).to({graphics:mask_graphics_453,x:193.3,y:225.1}).wait(1).to({graphics:mask_graphics_454,x:193.3,y:226}).wait(1).to({graphics:mask_graphics_455,x:193.3,y:227}).wait(1).to({graphics:mask_graphics_456,x:193.3,y:227.9}).wait(1).to({graphics:mask_graphics_457,x:193.3,y:228.8}).wait(1).to({graphics:mask_graphics_458,x:193.2,y:229.7}).wait(1).to({graphics:mask_graphics_459,x:193.2,y:230.6}).wait(1).to({graphics:mask_graphics_460,x:193.2,y:231.5}).wait(1).to({graphics:mask_graphics_461,x:193.2,y:232.4}).wait(1).to({graphics:mask_graphics_462,x:193.2,y:233.3}).wait(1).to({graphics:mask_graphics_463,x:193.3,y:234.1}).wait(1).to({graphics:mask_graphics_464,x:193.3,y:235}).wait(1).to({graphics:mask_graphics_465,x:193.3,y:235.8}).wait(1).to({graphics:mask_graphics_466,x:193.3,y:236.6}).wait(1).to({graphics:mask_graphics_467,x:193.3,y:237.4}).wait(1).to({graphics:mask_graphics_468,x:193.3,y:238.2}).wait(1).to({graphics:mask_graphics_469,x:193.3,y:239}).wait(1).to({graphics:mask_graphics_470,x:193.3,y:239.8}).wait(1).to({graphics:mask_graphics_471,x:193.4,y:240.5}).wait(1).to({graphics:mask_graphics_472,x:193.4,y:241.3}).wait(1).to({graphics:mask_graphics_473,x:193.4,y:242}).wait(1).to({graphics:mask_graphics_474,x:193.4,y:242.7}).wait(1).to({graphics:mask_graphics_475,x:193.4,y:243.4}).wait(1).to({graphics:mask_graphics_476,x:193.4,y:244.1}).wait(1).to({graphics:mask_graphics_477,x:193.5,y:244.7}).wait(1).to({graphics:mask_graphics_478,x:193.5,y:245.4}).wait(1).to({graphics:mask_graphics_479,x:193.5,y:246}).wait(1).to({graphics:mask_graphics_480,x:193.5,y:246.7}).wait(1).to({graphics:mask_graphics_481,x:193.5,y:247.3}).wait(1).to({graphics:mask_graphics_482,x:193.5,y:247.9}).wait(1).to({graphics:mask_graphics_483,x:193.5,y:248.5}).wait(1).to({graphics:mask_graphics_484,x:193.5,y:249}).wait(1).to({graphics:mask_graphics_485,x:193.5,y:249.6}).wait(1).to({graphics:mask_graphics_486,x:193.5,y:250.1}).wait(1).to({graphics:mask_graphics_487,x:193.5,y:250.6}).wait(1).to({graphics:mask_graphics_488,x:193.5,y:251.1}).wait(1).to({graphics:mask_graphics_489,x:193.6,y:251.6}).wait(1).to({graphics:mask_graphics_490,x:193.6,y:252.3}).wait(1).to({graphics:mask_graphics_491,x:193.6,y:252.9}).wait(1).to({graphics:mask_graphics_492,x:193.6,y:253.5}).wait(1).to({graphics:mask_graphics_493,x:193.5,y:254.1}).wait(1).to({graphics:mask_graphics_494,x:193.5,y:254.7}).wait(1).to({graphics:mask_graphics_495,x:193.5,y:255.2}).wait(1).to({graphics:mask_graphics_496,x:193.5,y:255.7}).wait(1).to({graphics:mask_graphics_497,x:193.5,y:256.1}).wait(1).to({graphics:mask_graphics_498,x:193.5,y:256.5}).wait(1).to({graphics:mask_graphics_499,x:193.5,y:256.9}).wait(1).to({graphics:mask_graphics_500,x:193.4,y:257.2}).wait(1).to({graphics:mask_graphics_501,x:193.4,y:257.6}).wait(1).to({graphics:mask_graphics_502,x:193.4,y:257.8}).wait(1).to({graphics:mask_graphics_503,x:193.4,y:258.1}).wait(1).to({graphics:mask_graphics_504,x:193.4,y:258.3}).wait(1).to({graphics:mask_graphics_505,x:193.3,y:258.5}).wait(1).to({graphics:mask_graphics_506,x:193.3,y:258.6}).wait(1).to({graphics:mask_graphics_507,x:193.3,y:258.7}).wait(1).to({graphics:mask_graphics_508,x:193.3,y:258.8}).wait(1).to({graphics:mask_graphics_509,x:193.3,y:258.8}).wait(1).to({graphics:mask_graphics_510,x:193.3,y:258.8}).wait(1).to({graphics:mask_graphics_511,x:193.3,y:258.9}).wait(1).to({graphics:mask_graphics_512,x:193.3,y:258.9}).wait(1).to({graphics:mask_graphics_513,x:193.3,y:258.9}).wait(1).to({graphics:mask_graphics_514,x:193.4,y:258.9}).wait(1).to({graphics:mask_graphics_515,x:193.4,y:258.9}).wait(1).to({graphics:mask_graphics_516,x:193.4,y:258.9}).wait(1).to({graphics:mask_graphics_517,x:193.4,y:258.9}).wait(1).to({graphics:mask_graphics_518,x:193.5,y:259}).wait(1).to({graphics:mask_graphics_519,x:193.5,y:259}).wait(1).to({graphics:mask_graphics_520,x:193.5,y:259}).wait(1).to({graphics:mask_graphics_521,x:193.5,y:259}).wait(1).to({graphics:mask_graphics_522,x:193.5,y:259}).wait(1).to({graphics:mask_graphics_523,x:193.6,y:259.1}).wait(1).to({graphics:mask_graphics_524,x:193.6,y:259.1}).wait(1).to({graphics:mask_graphics_525,x:193.6,y:259.1}).wait(1).to({graphics:mask_graphics_526,x:193.6,y:259.1}).wait(1).to({graphics:mask_graphics_527,x:193.7,y:259.1}).wait(1).to({graphics:mask_graphics_528,x:193.7,y:259.1}).wait(1).to({graphics:mask_graphics_529,x:193.7,y:259.1}).wait(1).to({graphics:mask_graphics_530,x:193.7,y:259.1}).wait(1).to({graphics:mask_graphics_531,x:193.7,y:259.1}).wait(1).to({graphics:mask_graphics_532,x:193.7,y:259.1}).wait(1).to({graphics:mask_graphics_533,x:193.7,y:259.1}).wait(1).to({graphics:mask_graphics_534,x:193.7,y:259.1}).wait(1).to({graphics:mask_graphics_535,x:193.7,y:259.1}).wait(1).to({graphics:mask_graphics_536,x:193.7,y:259.1}).wait(1).to({graphics:mask_graphics_537,x:193.7,y:259}).wait(1).to({graphics:mask_graphics_538,x:193.6,y:259}).wait(1).to({graphics:mask_graphics_539,x:193.6,y:259}).wait(1).to({graphics:mask_graphics_540,x:193.6,y:259}).wait(1).to({graphics:mask_graphics_541,x:193.6,y:258.9}).wait(1).to({graphics:mask_graphics_542,x:193.6,y:258.9}).wait(1).to({graphics:mask_graphics_543,x:193.6,y:258.9}).wait(1).to({graphics:mask_graphics_544,x:193.6,y:258.9}).wait(1).to({graphics:mask_graphics_545,x:193.5,y:258.9}).wait(1).to({graphics:mask_graphics_546,x:193.3,y:257.4}).wait(1).to({graphics:mask_graphics_547,x:193.1,y:255.9}).wait(1).to({graphics:mask_graphics_548,x:192.9,y:254.4}).wait(1).to({graphics:mask_graphics_549,x:192.7,y:253}).wait(141));

	// Layer 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(20,1,1).p("ACDsMQDdA5DWBaQDjBeCJDFQCRDQg4DrQg5DsjCCWQjDCWjkBKQjjBKjtgEQjugEjPhzQjQhyi8ieQg7gygOgV");
	this.shape_1.setTransform(246.9,358.1);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(347).to({_off:false},0).wait(343));

	// arrow
	this.instance_2 = new lib.ar4("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(425.7,224.4,1.091,1.091,0,-47.5,132.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(135).to({_off:false},0).wait(555));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_287 = new cjs.Graphics().p("AX+RdICqg1IBlFFIiqA1g");
	var mask_1_graphics_288 = new cjs.Graphics().p("AiQiGIC9g3IBjFFIi9A2g");
	var mask_1_graphics_289 = new cjs.Graphics().p("AiZiFIDRg5IBiFEIjRA5g");
	var mask_1_graphics_290 = new cjs.Graphics().p("AiiiFIDlg6IBgFFIjlA6g");
	var mask_1_graphics_291 = new cjs.Graphics().p("AisiEID6g8IBeFGIj5A7g");
	var mask_1_graphics_292 = new cjs.Graphics().p("Ai1iEIEOg9IBdFGIkOA9g");
	var mask_1_graphics_293 = new cjs.Graphics().p("Ai+iDIEhg/IBcFGIkiA/g");
	var mask_1_graphics_294 = new cjs.Graphics().p("AjHiCIE1hBIBaFGIk1BBg");
	var mask_1_graphics_295 = new cjs.Graphics().p("AjRiCIFKhCIBZFHIlKBCg");
	var mask_1_graphics_296 = new cjs.Graphics().p("AjaiBIFehEIBXFHIleBEg");
	var mask_1_graphics_297 = new cjs.Graphics().p("AjkiAIFzhGIBVFHIlyBGg");
	var mask_1_graphics_298 = new cjs.Graphics().p("AjtiAIGHhHIBUFIImHBHg");
	var mask_1_graphics_299 = new cjs.Graphics().p("Aj2h/IGahJIBTFIImaBJg");
	var mask_1_graphics_300 = new cjs.Graphics().p("AkAh+IGvhLIBRFIImuBLg");
	var mask_1_graphics_301 = new cjs.Graphics().p("AkJh+IHDhMIBQFJInDBMg");
	var mask_1_graphics_302 = new cjs.Graphics().p("AkSh9IHXhNIBOFIInXBOg");
	var mask_1_graphics_303 = new cjs.Graphics().p("Akbh9IHrhPIBMFKInrBPg");
	var mask_1_graphics_304 = new cjs.Graphics().p("Aklh8IH/hQIBMFJIoABRg");
	var mask_1_graphics_305 = new cjs.Graphics().p("Akuh7IIThSIBKFJIoUBSg");
	var mask_1_graphics_306 = new cjs.Graphics().p("Ak3h6IInhVIBIFKIonBUg");
	var mask_1_graphics_307 = new cjs.Graphics().p("AlBh6II8hVIBHFKIo8BVg");
	var mask_1_graphics_308 = new cjs.Graphics().p("AlKh5IJQhXIBFFKIpQBXg");
	var mask_1_graphics_309 = new cjs.Graphics().p("AlUh5IJlhZIBDFLIpkBag");
	var mask_1_graphics_310 = new cjs.Graphics().p("Aldh4IJ5haIBCFLIp4Bbg");
	var mask_1_graphics_311 = new cjs.Graphics().p("Almh3IKMhcIBBFLIqMBdg");
	var mask_1_graphics_312 = new cjs.Graphics().p("Alwh3IKhhdIBAFLIqhBeg");
	var mask_1_graphics_313 = new cjs.Graphics().p("Al5h2IK1hfIA+FMIq1Bfg");
	var mask_1_graphics_314 = new cjs.Graphics().p("AmCh1ILJhhIA8FMIrJBhg");
	var mask_1_graphics_315 = new cjs.Graphics().p("AmLh1ILchiIA8FMIreBjg");
	var mask_1_graphics_316 = new cjs.Graphics().p("AmVh0ILxhkIA6FNIrxBkg");
	var mask_1_graphics_317 = new cjs.Graphics().p("AmehzIMFhmIA4FNIsFBmg");
	var mask_1_graphics_318 = new cjs.Graphics().p("AmohyIMahoIA3FNIsaBog");
	var mask_1_graphics_319 = new cjs.Graphics().p("AmxhyIMuhpIA1FOIsuBpg");
	var mask_1_graphics_320 = new cjs.Graphics().p("Am6hxINBhrIA0FOItCBrg");
	var mask_1_graphics_321 = new cjs.Graphics().p("AnDhwINWhtIAxFPItVBsg");
	var mask_1_graphics_322 = new cjs.Graphics().p("AnNhwINqhuIAxFPItqBug");
	var mask_1_graphics_323 = new cjs.Graphics().p("AnWhvIN+hwIAvFPIt+Bwg");
	var mask_1_graphics_324 = new cjs.Graphics().p("AnfhvIOShxIAtFPIuSByg");
	var mask_1_graphics_325 = new cjs.Graphics().p("AnohuIOmhzIArFQIulBzg");
	var mask_1_graphics_326 = new cjs.Graphics().p("AnyhtIO6h1IArFQIu6B1g");
	var mask_1_graphics_327 = new cjs.Graphics().p("AMNSXIPPh3IApFRIvPB3g");
	var mask_1_graphics_328 = new cjs.Graphics().p("AoYhrIQHh+IAqFVIwIB+g");
	var mask_1_graphics_329 = new cjs.Graphics().p("AKZSUIRDiFIAqFbIxDCFg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(287).to({graphics:mask_1_graphics_287,x:180.5,y:144.2}).wait(1).to({graphics:mask_1_graphics_288,x:346.4,y:269.8}).wait(1).to({graphics:mask_1_graphics_289,x:345.5,y:270}).wait(1).to({graphics:mask_1_graphics_290,x:344.5,y:270.3}).wait(1).to({graphics:mask_1_graphics_291,x:343.5,y:270.5}).wait(1).to({graphics:mask_1_graphics_292,x:342.5,y:270.8}).wait(1).to({graphics:mask_1_graphics_293,x:341.6,y:271}).wait(1).to({graphics:mask_1_graphics_294,x:340.6,y:271.3}).wait(1).to({graphics:mask_1_graphics_295,x:339.6,y:271.5}).wait(1).to({graphics:mask_1_graphics_296,x:338.7,y:271.8}).wait(1).to({graphics:mask_1_graphics_297,x:337.7,y:272}).wait(1).to({graphics:mask_1_graphics_298,x:336.7,y:272.3}).wait(1).to({graphics:mask_1_graphics_299,x:335.8,y:272.5}).wait(1).to({graphics:mask_1_graphics_300,x:334.8,y:272.8}).wait(1).to({graphics:mask_1_graphics_301,x:333.8,y:273}).wait(1).to({graphics:mask_1_graphics_302,x:332.9,y:273.3}).wait(1).to({graphics:mask_1_graphics_303,x:331.9,y:273.6}).wait(1).to({graphics:mask_1_graphics_304,x:330.9,y:273.8}).wait(1).to({graphics:mask_1_graphics_305,x:330,y:274.1}).wait(1).to({graphics:mask_1_graphics_306,x:329,y:274.3}).wait(1).to({graphics:mask_1_graphics_307,x:328,y:274.6}).wait(1).to({graphics:mask_1_graphics_308,x:327,y:274.8}).wait(1).to({graphics:mask_1_graphics_309,x:326.1,y:275.1}).wait(1).to({graphics:mask_1_graphics_310,x:325.1,y:275.3}).wait(1).to({graphics:mask_1_graphics_311,x:324.1,y:275.6}).wait(1).to({graphics:mask_1_graphics_312,x:323.2,y:275.8}).wait(1).to({graphics:mask_1_graphics_313,x:322.2,y:276.1}).wait(1).to({graphics:mask_1_graphics_314,x:321.2,y:276.3}).wait(1).to({graphics:mask_1_graphics_315,x:320.3,y:276.6}).wait(1).to({graphics:mask_1_graphics_316,x:319.3,y:276.8}).wait(1).to({graphics:mask_1_graphics_317,x:318.3,y:277.1}).wait(1).to({graphics:mask_1_graphics_318,x:317.4,y:277.3}).wait(1).to({graphics:mask_1_graphics_319,x:316.4,y:277.6}).wait(1).to({graphics:mask_1_graphics_320,x:315.4,y:277.8}).wait(1).to({graphics:mask_1_graphics_321,x:314.4,y:278.1}).wait(1).to({graphics:mask_1_graphics_322,x:313.5,y:278.4}).wait(1).to({graphics:mask_1_graphics_323,x:312.5,y:278.6}).wait(1).to({graphics:mask_1_graphics_324,x:311.5,y:278.9}).wait(1).to({graphics:mask_1_graphics_325,x:310.6,y:279.1}).wait(1).to({graphics:mask_1_graphics_326,x:309.6,y:279.4}).wait(1).to({graphics:mask_1_graphics_327,x:179.7,y:151.2}).wait(1).to({graphics:mask_1_graphics_328,x:305.8,y:279.7}).wait(1).to({graphics:mask_1_graphics_329,x:179.8,y:151.9}).wait(361));

	// number
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(20,1,1).p("AmQAgQIOALEThL");
	this.shape_2.setTransform(299,275.7);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(287).to({_off:false},0).wait(403));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_233 = new cjs.Graphics().p("ACPDNQDWmcG8iUQHGiXGrDWQGsDWCXHEQCUG8jKGkg");
	var mask_2_graphics_234 = new cjs.Graphics().p("ACcCoQDgmWHAiKQHJiMGmDgQGmDgCMHIQCJHAjTGeg");
	var mask_2_graphics_235 = new cjs.Graphics().p("ACqCEQDpmSHDh+QHMiBGhDqQGhDqCBHLQB+HDjdGZg");
	var mask_2_graphics_236 = new cjs.Graphics().p("AC4BfQDzmLHGh0QHPh2GbD1QGbD0B2HOQB0HGjoGTg");
	var mask_2_graphics_237 = new cjs.Graphics().p("ADHA8QD9mGHIhpQHShqGVD+QGVD+BrHRQBoHIjxGOg");
	var mask_2_graphics_238 = new cjs.Graphics().p("ADWAYQEGl/HLheQHVhfGOEIQGPEIBfHTQBeHLj7GIg");
	var mask_2_graphics_239 = new cjs.Graphics().p("ADmgJQEQl6HNhTQHWhUGIESQGJERBUHWQBSHNkEGBg");
	var mask_2_graphics_240 = new cjs.Graphics().p("AD3grQEYl0HPhHQHZhIGBEaQGCEaBIHYQBIHQkOF7g");
	var mask_2_graphics_241 = new cjs.Graphics().p("AEIhNQEhlsHRg8QHag9F6EkQF7EjA9HaQA8HQkWF1g");
	var mask_2_graphics_242 = new cjs.Graphics().p("AEZhuQEqllHSgxQHcgxFzEtQF0EsAxHbQAxHSkfFug");
	var mask_2_graphics_243 = new cjs.Graphics().p("AEsiOQEyleHTgmQHdgmFsE2QFsE1AmHdQAmHTkpFng");
	var mask_2_graphics_244 = new cjs.Graphics().p("AE+itQE7lXHUgaQHdgbFlE/QFkE+AbHdQAaHUkxFfg");
	var mask_2_graphics_245 = new cjs.Graphics().p("AFRjMQFDlPHUgPQHegPFdFHQFdFGAPHeQAPHUk5FZg");
	var mask_2_graphics_246 = new cjs.Graphics().p("AFljqQFLlHHUgEQHegEFVFQQFVFPAEHdQADHVlBFRg");
	var mask_2_graphics_247 = new cjs.Graphics().p("AF5kIQFTk/HUAIQHeAIFNFYQFMFWgIHeQgIHVlJFIg");
	var mask_2_graphics_248 = new cjs.Graphics().p("AGNklQFak2HVASQHdAUFFFgQFEFfgUHdQgTHVlRFAg");
	var mask_2_graphics_249 = new cjs.Graphics().p("AGilBQFikuHTAeQHdAfE8FoQE8FmgfHdQgfHUlZE4g");
	var mask_2_graphics_250 = new cjs.Graphics().p("AG3lcQFpkmHTAqQHcArEzFvQEzFugrHcQgqHTlgEwg");
	var mask_2_graphics_251 = new cjs.Graphics().p("AHMl3QFxkcHRA0QHbA3EqF2QEqF1g2HbQg1HSloEng");
	var mask_2_graphics_252 = new cjs.Graphics().p("AHimQQF3kUHQBAQHaBCEhF9QEhF8hCHaQhAHQlvEfg");
	var mask_2_graphics_253 = new cjs.Graphics().p("AH5mpQF9kLHPBLQHYBNEXGFQEYGDhNHYQhMHPl1EVg");
	var mask_2_graphics_254 = new cjs.Graphics().p("AIPnBQGEkCHNBWQHWBZEOGLQEOGKhYHWQhXHNl8EMg");
	var mask_2_graphics_255 = new cjs.Graphics().p("AInnZQGKj4HKBiQHUBkEEGRQEFGRhkHTQhiHLmCEDg");
	var mask_2_graphics_256 = new cjs.Graphics().p("AI+nvQGQjuHIBsQHRBvD7GYQD7GWhvHSQhtHImJD6g");
	var mask_2_graphics_257 = new cjs.Graphics().p("AJWoFQGWjkHFB3QHOB7DxGdQDxGdh6HOQh4HFmPDxg");
	var mask_2_graphics_258 = new cjs.Graphics().p("AJuoZQGbjbHCCCQHMCGDnGjQDmGiiFHMQiDHCmUDng");
	var mask_2_graphics_259 = new cjs.Graphics().p("AKHotQGgjRG/CNQHICRDcGpQDdGniQHIQiOHAmaDcg");
	var mask_2_graphics_260 = new cjs.Graphics().p("AKgpAQGljHG7CYQHFCcDSGuQDSGtibHEQiYG8mgDTg");
	var mask_2_graphics_261 = new cjs.Graphics().p("AK5pSQGqi8G3CiQHBCnDIGzQDHGyimHAQijG4mkDJg");
	var mask_2_graphics_262 = new cjs.Graphics().p("ALSpjQGviyGzCtQG9CxC9G3QC9G4ixG8QitG0mpC+g");
	var mask_2_graphics_263 = new cjs.Graphics().p("ALspzQGzioGvC4QG4C8CzG7QCyG8i7G4Qi5GvmtC1g");
	var mask_2_graphics_264 = new cjs.Graphics().p("AMGqCQG3ieGqDCQG0DHCoG/QCnHBjGGzQjCGrmyCqg");
	var mask_2_graphics_265 = new cjs.Graphics().p("AMhqRQG6iSGmDMQGuDRCdHDQCdHFjRGuQjMGmm2Cgg");
	var mask_2_graphics_266 = new cjs.Graphics().p("AM7qeQG+iIGhDXQGpDbCSHHQCSHIjbGpQjXGhm5CVg");
	var mask_2_graphics_267 = new cjs.Graphics().p("ANWqqQHBh9GbDgQGkDmCHHKQCHHMjlGjQjhGcm9CKg");
	var mask_2_graphics_268 = new cjs.Graphics().p("ANxq2QHEhyGWDqQGeDwB8HOQB8HOjwGeQjqGXnBB/g");
	var mask_2_graphics_269 = new cjs.Graphics().p("AOMrAQHHhnGQD0QGYD6BxHQQBwHRj5GZQj0GQnEB0g");
	var mask_2_graphics_270 = new cjs.Graphics().p("AOorKQHIhcGLD+QGSEEBlHSQBmHUkEGTQj+GKnGBqg");
	var mask_2_graphics_271 = new cjs.Graphics().p("APDrSQHLhRGEEHQGMENBaHWQBaHWkNGMQkHGEnJBeg");
	var mask_2_graphics_272 = new cjs.Graphics().p("APfrZQHMhGF+EQQGFEXBPHXQBPHYkXGGQkRF+nKBTg");
	var mask_2_graphics_273 = new cjs.Graphics().p("AP7rgQHOg7F3EaQF+EgBDHZQBEHakgF/QkaF3nMBIg");
	var mask_2_graphics_274 = new cjs.Graphics().p("AQWrlQHQgwFwEjQF4EpA3HaQA4HckpF4QkjFwnOA9g");
	var mask_2_graphics_275 = new cjs.Graphics().p("AQyrqQHRgkFpErQFwEyAsHcQAsHdkxFwQksFpnQAyg");
	var mask_2_graphics_276 = new cjs.Graphics().p("AROrtQHSgZFhE0QFpE7AhHdQAgHdk6FpQk1FinQAmg");
	var mask_2_graphics_277 = new cjs.Graphics().p("ARqrwQHSgOFaE9QFhFEAVHdQAVHflDFhQk9FanRAbg");
	var mask_2_graphics_278 = new cjs.Graphics().p("ASGrxQHSgDFTFFQFZFMAJHeQAKHflMFZQlFFTnSAQg");
	var mask_2_graphics_279 = new cjs.Graphics().p("ASirxQHSAIFLFNQFRFUgCHeQgDHflTFRQlOFLnSAFg");
	var mask_2_graphics_280 = new cjs.Graphics().p("AR8YWMABCgkHQHSAUFCFVQFJFcgOHeQgOHflcFJQlOE8nHAAIgSAAg");
	var mask_2_graphics_281 = new cjs.Graphics().p("ARgYVMAB6gkFQHRAfE6FdQFAFkgZHeQgZHelkFAQlLEqmzAAIgxgBg");
	var mask_2_graphics_282 = new cjs.Graphics().p("AREYTMACxgkBQHRArExFkQE4FqglHeQglHelrE3QlGEYmhAAQgnAAgogDg");
	var mask_2_graphics_283 = new cjs.Graphics().p("AQoYRMADpgj8QHPA1EpFsQEvFygxHdQgwHclzEvQlAEFmPAAQg2AAg3gEg");
	var mask_2_graphics_284 = new cjs.Graphics().p("AQMYOMAEhgj2QHNBBEgFyQEmF6g8HbQg8Hbl6EmQk7D0l9AAQhEAAhGgHg");
	var mask_2_graphics_285 = new cjs.Graphics().p("APwYKMAFYgjuQHMBMEXF5QEcGAhHHaQhHHamBEcQk1DkltAAQhRAAhVgLg");
	var mask_2_graphics_286 = new cjs.Graphics().p("APUYGMAGPgjmQHLBXENGAQETGHhSHYQhTHYmIETQkuDUldAAQhfAAhjgPg");
	var mask_2_graphics_287 = new cjs.Graphics().p("AO4YBMAHGgjbQHIBhEFGHQEJGOheHWQheHVmOEKQknDElOAAQhsAAhxgUg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(233).to({graphics:mask_2_graphics_233,x:232.3,y:123.8}).wait(1).to({graphics:mask_2_graphics_234,x:232.3,y:125}).wait(1).to({graphics:mask_2_graphics_235,x:232.3,y:126.2}).wait(1).to({graphics:mask_2_graphics_236,x:232.2,y:127.4}).wait(1).to({graphics:mask_2_graphics_237,x:232.2,y:128.6}).wait(1).to({graphics:mask_2_graphics_238,x:232.2,y:129.8}).wait(1).to({graphics:mask_2_graphics_239,x:232.2,y:130.9}).wait(1).to({graphics:mask_2_graphics_240,x:232.1,y:132.1}).wait(1).to({graphics:mask_2_graphics_241,x:232.1,y:133.2}).wait(1).to({graphics:mask_2_graphics_242,x:232.1,y:134.3}).wait(1).to({graphics:mask_2_graphics_243,x:232,y:135.4}).wait(1).to({graphics:mask_2_graphics_244,x:232,y:136.4}).wait(1).to({graphics:mask_2_graphics_245,x:232,y:137.5}).wait(1).to({graphics:mask_2_graphics_246,x:232,y:138.5}).wait(1).to({graphics:mask_2_graphics_247,x:231.9,y:139.4}).wait(1).to({graphics:mask_2_graphics_248,x:231.9,y:140.4}).wait(1).to({graphics:mask_2_graphics_249,x:231.9,y:141.3}).wait(1).to({graphics:mask_2_graphics_250,x:231.9,y:142.3}).wait(1).to({graphics:mask_2_graphics_251,x:231.9,y:143.1}).wait(1).to({graphics:mask_2_graphics_252,x:231.9,y:144}).wait(1).to({graphics:mask_2_graphics_253,x:232,y:144.8}).wait(1).to({graphics:mask_2_graphics_254,x:232,y:145.6}).wait(1).to({graphics:mask_2_graphics_255,x:232,y:146.4}).wait(1).to({graphics:mask_2_graphics_256,x:232,y:147.2}).wait(1).to({graphics:mask_2_graphics_257,x:232,y:147.9}).wait(1).to({graphics:mask_2_graphics_258,x:232,y:148.6}).wait(1).to({graphics:mask_2_graphics_259,x:232,y:149.2}).wait(1).to({graphics:mask_2_graphics_260,x:232,y:149.9}).wait(1).to({graphics:mask_2_graphics_261,x:232,y:150.5}).wait(1).to({graphics:mask_2_graphics_262,x:232,y:151}).wait(1).to({graphics:mask_2_graphics_263,x:232,y:151.6}).wait(1).to({graphics:mask_2_graphics_264,x:232,y:152.1}).wait(1).to({graphics:mask_2_graphics_265,x:231.9,y:152.6}).wait(1).to({graphics:mask_2_graphics_266,x:231.9,y:153}).wait(1).to({graphics:mask_2_graphics_267,x:231.9,y:153.4}).wait(1).to({graphics:mask_2_graphics_268,x:231.9,y:153.8}).wait(1).to({graphics:mask_2_graphics_269,x:231.9,y:154.1}).wait(1).to({graphics:mask_2_graphics_270,x:231.9,y:154.5}).wait(1).to({graphics:mask_2_graphics_271,x:231.9,y:154.7}).wait(1).to({graphics:mask_2_graphics_272,x:231.8,y:155}).wait(1).to({graphics:mask_2_graphics_273,x:231.8,y:155.2}).wait(1).to({graphics:mask_2_graphics_274,x:231.8,y:155.4}).wait(1).to({graphics:mask_2_graphics_275,x:231.8,y:155.5}).wait(1).to({graphics:mask_2_graphics_276,x:231.8,y:155.6}).wait(1).to({graphics:mask_2_graphics_277,x:231.8,y:155.7}).wait(1).to({graphics:mask_2_graphics_278,x:231.8,y:155.8}).wait(1).to({graphics:mask_2_graphics_279,x:231.8,y:155.8}).wait(1).to({graphics:mask_2_graphics_280,x:231.8,y:155.8}).wait(1).to({graphics:mask_2_graphics_281,x:231.8,y:155.8}).wait(1).to({graphics:mask_2_graphics_282,x:231.8,y:155.8}).wait(1).to({graphics:mask_2_graphics_283,x:231.8,y:155.7}).wait(1).to({graphics:mask_2_graphics_284,x:231.8,y:155.7}).wait(1).to({graphics:mask_2_graphics_285,x:231.9,y:155.7}).wait(1).to({graphics:mask_2_graphics_286,x:231.9,y:155.7}).wait(1).to({graphics:mask_2_graphics_287,x:231.9,y:155.7}).wait(403));

	// Layer 4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(20,1,1).p("AkWpwIA6gVQBzglB4gCQB9gDBrBAQBlA9BCBjQA4BVAXBlQAbBygFBzQgBAXgCAWQgLBlgkBgQgOAlgRAjQgjBHgxA9QhNBghqA7QgeARggAOQhHAhhLAVQgqANgrAKQg3AOg5AKAoDoGQCIhDBlgnAnCopQBVgnBXgg");
	this.shape_3.setTransform(355.1,205.4);
	this.shape_3._off = true;

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(233).to({_off:false},0).wait(457));

	// mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_135 = new cjs.Graphics().p("AUhYNQnegalAllQlAlkAanfQAZnUFWk8IYJa5QlFEbmpAAQgiAAgkgCg");
	var mask_3_graphics_136 = new cjs.Graphics().p("AUNYLQndgok2luQk2ltAoneQAnnTFfkyIXXbkQk/EHmTAAQg0AAg2gFg");
	var mask_3_graphics_137 = new cjs.Graphics().p("AT5YIQncg2krl2Qkrl3A1nbQA0nSFokpIWkcPQk4Dyl+AAQhFAAhIgIg");
	var mask_3_graphics_138 = new cjs.Graphics().p("ATmYEQnbhDkgl/Qkgl/BDnaQBBnQFxkeIVvc3QkwDelqAAQhWAAhZgMg");
	var mask_3_graphics_139 = new cjs.Graphics().p("ATTX/QnZhRkVmHQkVmHBQnYQBPnOF5kTIU6deQkpDMlXAAQhlAAhqgSg");
	var mask_3_graphics_140 = new cjs.Graphics().p("ATAX5QnWhfkKmOQkJmPBdnVQBdnMGAkJIUDeEQkfC6lFAAQh2AAh6gYg");
	var mask_3_graphics_141 = new cjs.Graphics().p("ASuXyQnThsj+mWQj/mWBsnTQBpnJGHj9ITMeoQkWCpkzAAQiFAAiKggg");
	var mask_3_graphics_142 = new cjs.Graphics().p("AScXqQnPh5jzmdQjzmdB5nQQB2nFGPjzISTfKQkMCZkiAAQiUAAiagog");
	var mask_3_graphics_143 = new cjs.Graphics().p("ASLXhQnMiGjnmkQjmmkCFnMQCEnCGVjmIRafqQkCCJkRAAQijAAipgxg");
	var mask_3_graphics_144 = new cjs.Graphics().p("AR6XYQnIiUjamqQjbmqCTnIQCQm+GcjbMAQfAgKQj3B6kAAAQizAAi3g7g");
	var mask_3_graphics_145 = new cjs.Graphics().p("ARqXNQnEigjOmxQjOmwCgnDQCdm6GhjPMAPkAgnQjrBsjxAAQjBAAjFhGg");
	var mask_3_graphics_146 = new cjs.Graphics().p("ARaXCQm/itjBm2QjCm3Ctm9QCpm2GojDMAOnAhCQjfBfjhAAQjQAAjThRg");
	var mask_3_graphics_147 = new cjs.Graphics().p("ARLW2Qm6i6i1m8Qi1m7C5m5QC2mxGti2MANrAhcQjSBTjSAAQjgAAjfheg");
	var mask_3_graphics_148 = new cjs.Graphics().p("AQ8WpQm0jGionBQipnBDGmzQDCmrGzirMAMsAh1QjEBHjDAAQjvAAjshrg");
	var mask_3_graphics_149 = new cjs.Graphics().p("AQuWbQmujTicnFQibnFDSmtQDPmmG2ieMALvAiLQi3A8i0AAQj/AAj3h5g");
	var mask_3_graphics_150 = new cjs.Graphics().p("AQgWNQmojgiOnJQiPnKDfmnQDamfG7iSMAKwAigQipAyikAAQkPAAkDiHg");
	var mask_3_graphics_151 = new cjs.Graphics().p("AQTV9QmhjriCnNQiBnODrmgQDmmaG/iEMAJwAiyQiaApiVAAQkgAAkNiXg");
	var mask_3_graphics_152 = new cjs.Graphics().p("AQHVtQmbj3h0nRQh0nRD3mZQDxmTHDh4MAIwAjEQiLAgiGAAQkwAAkXing");
	var mask_3_graphics_153 = new cjs.Graphics().p("AP7VcQmTkDhnnUQhnnUECmSQD+mMHGhqMAHvAjSQh7AZh3AAQlBAAkhi4g");
	var mask_3_graphics_154 = new cjs.Graphics().p("APwVKQmMkOhZnXQhanXEOmKQEImEHJheMAGvAjgQhrAThoAAQlTAAkpjLg");
	var mask_3_graphics_155 = new cjs.Graphics().p("APlU4QmEkahMnZQhLnZEYmDQEUl8HLhRMAFuAjrQhbAOhYAAQllAAkyjdg");
	var mask_3_graphics_156 = new cjs.Graphics().p("APbUkQl8kkg+nbQg+nbEkl7QEel0HNhEMAEsAj1QhJAJhIAAQl5AAk5jxg");
	var mask_3_graphics_157 = new cjs.Graphics().p("APRUQQlzkvgwndQgxncEvlyQEolsHQg3MADqAj9Qg4AFg3AAQmOAAlAkFg");
	var mask_3_graphics_158 = new cjs.Graphics().p("APJT7Qlrk5gjneQgjneE6lpQEzlkHQgpMACoAkDQgmACglAAQmjAAlGkag");
	var mask_3_graphics_159 = new cjs.Graphics().p("APATmQlhlEgVnfQgVndFDliQE9laHSgcMABmAkGIgoABQm5AAlMkvg");
	var mask_3_graphics_160 = new cjs.Graphics().p("AO5TQQlYlOgHnfQgInfFNlXQFHlSHSgOMAAkAkIIgCAAQnRAAlQlFg");
	var mask_3_graphics_161 = new cjs.Graphics().p("AOjS5QlOlYAGnfQAGneFXlOQFRlIHSgBMgAeAkIQnSgMlIlQg");
	var mask_3_graphics_162 = new cjs.Graphics().p("AN8SiQlFlhAUnfQAUneFhlEQFZk+HTAMMgBhAkHQnRgak+lZg");
	var mask_3_graphics_163 = new cjs.Graphics().p("ANVSKQk6lqAineQAhndFqk6QFik0HSAaMgCiAkDQnRgnk0ljg");
	var mask_3_graphics_164 = new cjs.Graphics().p("AMvRzQkvlzAvndQAvncFzkvQFrkqHRAnMgDlAj9QnPg0kqlrg");
	var mask_3_graphics_165 = new cjs.Graphics().p("AMKRcQkll8A9nbQA9naF7klQF0kfHPA0MgEmAj2QnOhCkflzg");
	var mask_3_graphics_166 = new cjs.Graphics().p("ALmREQkamEBKnZQBLnYGDkaQF8kVHNBCMgFnAjsQnMhPkUl7g");
	var mask_3_graphics_167 = new cjs.Graphics().p("ALCQsQkOmLBYnXQBYnXGLkOQGDkKHMBPMgGpAjhQnJhckKmDg");
	var mask_3_graphics_168 = new cjs.Graphics().p("AKgQVQkDmTBlnVQBlnTGTkDQGLj/HJBcMgHpAjUQnHhpj+mKg");
	var mask_3_graphics_169 = new cjs.Graphics().p("AJ+P9Qj3maBynRQBznRGaj4QGRjzHHBpMgIpAjFQnDh2j0mRg");
	var mask_3_graphics_170 = new cjs.Graphics().p("AJePlQjsmhCAnNQB/nNGhjsQGYjoHEB1MgJpAi1Qm/iCjomZg");
	var mask_3_graphics_171 = new cjs.Graphics().p("AI+POQjgmoCNnKQCNnJGnjgQGfjcG/CCMgKnAijQm8iQjcmeg");
	var mask_3_graphics_172 = new cjs.Graphics().p("AIgO2QjUmtCZnGQCanFGtjUQGljRG8CPMgLmAiPQm3icjQmlg");
	var mask_3_graphics_173 = new cjs.Graphics().p("AICOfQjIm0CnnBQCmnBGzjIQGrjEG4CcMgMkAh4QmziojEmqg");
	var mask_3_graphics_174 = new cjs.Graphics().p("AHlOHQi7m5Czm8QCzm8G5i7QGwi4GzCnMgNhAhhQmui0i4mwg");
	var mask_3_graphics_175 = new cjs.Graphics().p("AHKNwQivm+C/m3QDAm3G+ivQG1isGuC0MgOdAhIQmpjAirm1g");
	var mask_3_graphics_176 = new cjs.Graphics().p("AGvNYQiinDDMmwQDMmyHCiiQG6ifGpDAMgPYAgsQmkjMifm6g");
	var mask_3_graphics_177 = new cjs.Graphics().p("AGVNBQiVnHDYmrQDYmsHHiVQG+iTGkDMMgQUAgQQmdjYiTm+g");
	var mask_3_graphics_178 = new cjs.Graphics().p("AF9MqQiJnLDlmlQDkmlHLiJQHCiGGdDYIxNfxQmXjjiGnCg");
	var mask_3_graphics_179 = new cjs.Graphics().p("AFlMTQh7nPDwmeQDwmfHPh7QHFh5GXDjIyGfRQmQjvh6nFg");
	var mask_3_graphics_180 = new cjs.Graphics().p("AFPL8QhunSD8mXQD7mYHShuQHJhtGRDvIy/ewQmJj6htnJg");
	var mask_3_graphics_181 = new cjs.Graphics().p("AE6LlQhhnVEHmPQEHmRHVhhQHMhfGJD6Iz1eMQmDkFhfnMg");
	var mask_3_graphics_182 = new cjs.Graphics().p("AEmLPQhUnYETmIQESmJHXhUQHPhSGCEFI0sdoQl7kQhSnOg");
	var mask_3_graphics_183 = new cjs.Graphics().p("AETK5QhGnaEdmAQEdmBHahHQHRhFF6EQI1hdCQlzkbhFnQg");
	var mask_3_graphics_184 = new cjs.Graphics().p("AEBKjQg4ncEol4QEol5Hbg5QHSg4FzEbI2VcaQlqkmg5nRg");
	var mask_3_graphics_185 = new cjs.Graphics().p("ADxKNQgrneEylvQEzlwHdgsQHTgqFrElI3IbwQlikvgrnTg");
	var mask_3_graphics_186 = new cjs.Graphics().p("ADhJ3QgdneE9lnQE9lnHdgeQHVgeFjEwI36bGQlak6genUg");
	var mask_3_graphics_187 = new cjs.Graphics().p("ADTJiQgQnfFHldQFHlfHfgQQHVgQFaE5I4raaQlQlDgRnVg");
	var mask_3_graphics_188 = new cjs.Graphics().p("ADHJNQgDnfFRlUQFQlVHfgDQHWgDFRFDI5aZsQlHlMgDnVg");
	var mask_3_graphics_189 = new cjs.Graphics().p("AC7I4QALnfFalKQFalLHfAKQHWALFHFMI6HY+Qk+lWAKnVg");
	var mask_3_graphics_190 = new cjs.Graphics().p("ACxIkQAYnfFklAQFjlBHeAYQHVAXE+FWI60YOQk0leAYnVg");
	var mask_3_graphics_191 = new cjs.Graphics().p("ACoIQQAmneFsk2QFsk3HeAlQHUAlE0FeI7fXdQkqlmAlnUg");
	var mask_3_graphics_192 = new cjs.Graphics().p("ACgH8QAzncF1ksQF1ktHdAzQHSAzErFmI8KWrQkflvAynTg");
	var mask_3_graphics_193 = new cjs.Graphics().p("ACZHpQBBnbF+khQF9kiHbBBQHRA/EgFvI8yV3QkVl3A/nRg");
	var mask_3_graphics_194 = new cjs.Graphics().p("ACUHWQBOnYGGkXQGFkXHZBOQHPBNEVF2I9YVDQkKl/BMnPg");
	var mask_3_graphics_195 = new cjs.Graphics().p("ACQHEQBcnWGNkMQGNkMHWBcQHNBZELF+I9+UNQj/mGBZnMg");
	var mask_3_graphics_196 = new cjs.Graphics().p("ACNGyQBpnTGVkBQGVkAHTBoQHKBnEAGFI+iTXQj0mNBmnKg");
	var mask_3_graphics_197 = new cjs.Graphics().p("ACMGgQB2nPGcj2QGcj1HQB2QHHB0D0GMI/DSfQjpmUBznHg");
	var mask_3_graphics_198 = new cjs.Graphics().p("ACMGPQCDnMGijpQGjjqHNCDQHDCADqGTI/lRnQjdmbCAnDg");
	var mask_3_graphics_199 = new cjs.Graphics().p("ACNF+QCQnIGpjdQGpjeHJCQQHACNDdGaMggDAQsQjSmgCNnAg");
	var mask_3_graphics_200 = new cjs.Graphics().p("ACPFuQCdnEGvjRQGwjRHECcQG8CaDSGfMgghAPzQjFmmCYm8g");
	var mask_3_graphics_201 = new cjs.Graphics().p("ACTFeQCqm/G1jFQG1jFG/CqQG4CmDGGlMgg9AO3Qi5msClm3g");
	var mask_3_graphics_202 = new cjs.Graphics().p("ACYFPQC2m6G7i5QG6i4G7C2QGyCyC6GrMghXAN7QismxCxmyg");
	var mask_3_graphics_203 = new cjs.Graphics().p("ACeFAQDDm0HAisQG/isG1DCQGtC/CuGwMghvAM+Qigm2C9mtg");
	var mask_3_graphics_204 = new cjs.Graphics().p("ACmEyQDPmvHEifQHEifGwDOQGnDLCiG1MgiGAMAQiUm5DKmog");
	var mask_3_graphics_205 = new cjs.Graphics().p("ACvElQDbmpHIiTQHJiSGpDbQGiDVCVG6MgiaALDQiIm+DWmhg");
	var mask_3_graphics_206 = new cjs.Graphics().p("AC5EXQDnmiHMiGQHNiFGjDnQGcDhCIG+MgiuAKEQh6nBDhmcg");
	var mask_3_graphics_207 = new cjs.Graphics().p("ADEELQDzmcHQh4QHQh5GdDzQGVDtB7HCMgi/AJFQhunFDtmVg");
	var mask_3_graphics_208 = new cjs.Graphics().p("ADRD/QD+mVHThrQHUhrGVD+QGOD4BvHFMgjOAIGQhhnID4mOg");
	var mask_3_graphics_209 = new cjs.Graphics().p("ADeD0QELmOHWheQHVheGPEKQGHEEBiHHMgjdAHGQhUnLEDmGg");
	var mask_3_graphics_210 = new cjs.Graphics().p("ADtDpQEWmGHYhRQHYhQGHEVQF/EOBVHKMgjoAGFQhHnMEOl/g");
	var mask_3_graphics_211 = new cjs.Graphics().p("AD9DfQEgl+HahEQHbhDF/EfQF3EZBJHNMgjyAFGQg6nPEYl3g");
	var mask_3_graphics_212 = new cjs.Graphics().p("AEODWQErl2Hcg3QHcg2F2EpQFwEkA8HOMgj6AEHQgtnQEilvg");
	var mask_3_graphics_213 = new cjs.Graphics().p("AEhDNQE0luHdgpQHegpFuEzQFnEuAwHQMgkAADHQghnREtlng");
	var mask_3_graphics_214 = new cjs.Graphics().p("AE0DFQE+llHegcQHfgcFlE9QFfE3AjHRMgkFACIQgUnRE3lfg");
	var mask_3_graphics_215 = new cjs.Graphics().p("AFIC9QFIlcHfgPQHfgPFdFHQFWFBAVHSMgkGABIQgJnSFBlWg");
	var mask_3_graphics_216 = new cjs.Graphics().p("AFeC2QFRlSHfgCQHfgCFUFQQFNFLAJHSMgkIAAJQAFnSFKlOg");
	var mask_3_graphics_217 = new cjs.Graphics().p("AAQOqQARnRFTlEQFblJHfALQHeALFLFZQFDFUgEHSg");
	var mask_3_graphics_218 = new cjs.Graphics().p("AARN7QAfnRFbk7QFkk/HeAYQHeAZFBFiQE6FcgRHSg");
	var mask_3_graphics_219 = new cjs.Graphics().p("AAUNLQArnQFkkwQFsk2HeAmQHdAlE2FrQExFlgeHRg");
	var mask_3_graphics_220 = new cjs.Graphics().p("AAXMcQA4nPFskmQF1ksHcAzQHcAzEsFzQEnFtgqHQg");
	var mask_3_graphics_221 = new cjs.Graphics().p("AAbLtQBFnNF0kdQF9khHaBAQHaBAEjF7QEcF1g3HOg");
	var mask_3_graphics_222 = new cjs.Graphics().p("AAgK9QBRnKF8kRQGFkYHYBNQHYBNEYGDQESF8hEHNg");
	var mask_3_graphics_223 = new cjs.Graphics().p("AAmKPQBenJGDkGQGMkNHWBaQHWBaENGKQEHGEhQHLg");
	var mask_3_graphics_224 = new cjs.Graphics().p("AAtJgQBqnFGKj8QGTkCHUBnQHTBmECGSQD9GLhdHIg");
	var mask_3_graphics_225 = new cjs.Graphics().p("AA0IyQB3nDGRjwQGaj3HQB0QHRBzD2GZQDyGRhqHGg");
	var mask_3_graphics_226 = new cjs.Graphics().p("AA9IEQCDm/GXjmQGhjrHNCAQHNCADrGgQDmGYh2HCg");
	var mask_3_graphics_227 = new cjs.Graphics().p("ABGHWQCPm7GejaQGnjgHJCNQHJCNDgGlQDbGfiCG+g");
	var mask_3_graphics_228 = new cjs.Graphics().p("ABQGpQCbm2GkjQQGtjUHFCaQHFCZDUGrQDPGkiOG7g");
	var mask_3_graphics_229 = new cjs.Graphics().p("ABbF8QCnmxGqjFQGyjHHBClQHACmDIGxQDEGqiaG2g");
	var mask_3_graphics_230 = new cjs.Graphics().p("ABnFQQCzmtGui4QG4i8G8CyQG8CyC8G2QC4GvinGyg");
	var mask_3_graphics_231 = new cjs.Graphics().p("AB0EkQC+moG0isQG8iwG3C+QG3C+CwG8QCsGzizGug");
	var mask_3_graphics_232 = new cjs.Graphics().p("ACBD4QDLmhG3ihQHCijGxDKQGxDKCkHAQCgG4i+Gog");
	var mask_3_graphics_233 = new cjs.Graphics().p("ACPDNQDWmcG8iUQHGiXGrDWQGsDWCXHEQCUG8jKGkg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(135).to({graphics:mask_3_graphics_135,x:213.3,y:155.1}).wait(1).to({graphics:mask_3_graphics_136,x:212.1,y:155.2}).wait(1).to({graphics:mask_3_graphics_137,x:210.8,y:155.2}).wait(1).to({graphics:mask_3_graphics_138,x:209.5,y:155.2}).wait(1).to({graphics:mask_3_graphics_139,x:208.2,y:155.3}).wait(1).to({graphics:mask_3_graphics_140,x:206.8,y:155.3}).wait(1).to({graphics:mask_3_graphics_141,x:205.4,y:155.4}).wait(1).to({graphics:mask_3_graphics_142,x:204,y:155.4}).wait(1).to({graphics:mask_3_graphics_143,x:202.6,y:155.4}).wait(1).to({graphics:mask_3_graphics_144,x:201.1,y:155.5}).wait(1).to({graphics:mask_3_graphics_145,x:199.6,y:155.5}).wait(1).to({graphics:mask_3_graphics_146,x:198.1,y:155.5}).wait(1).to({graphics:mask_3_graphics_147,x:196.6,y:155.6}).wait(1).to({graphics:mask_3_graphics_148,x:195,y:155.6}).wait(1).to({graphics:mask_3_graphics_149,x:193.5,y:155.6}).wait(1).to({graphics:mask_3_graphics_150,x:191.9,y:155.6}).wait(1).to({graphics:mask_3_graphics_151,x:190.3,y:155.6}).wait(1).to({graphics:mask_3_graphics_152,x:188.7,y:155.6}).wait(1).to({graphics:mask_3_graphics_153,x:187.1,y:155.6}).wait(1).to({graphics:mask_3_graphics_154,x:185.5,y:155.7}).wait(1).to({graphics:mask_3_graphics_155,x:183.9,y:155.7}).wait(1).to({graphics:mask_3_graphics_156,x:182.2,y:155.7}).wait(1).to({graphics:mask_3_graphics_157,x:180.6,y:155.7}).wait(1).to({graphics:mask_3_graphics_158,x:178.9,y:155.7}).wait(1).to({graphics:mask_3_graphics_159,x:177.3,y:155.7}).wait(1).to({graphics:mask_3_graphics_160,x:175.6,y:155.7}).wait(1).to({graphics:mask_3_graphics_161,x:175.5,y:155.7}).wait(1).to({graphics:mask_3_graphics_162,x:177.2,y:155.7}).wait(1).to({graphics:mask_3_graphics_163,x:178.8,y:155.6}).wait(1).to({graphics:mask_3_graphics_164,x:180.5,y:155.4}).wait(1).to({graphics:mask_3_graphics_165,x:182.1,y:155.3}).wait(1).to({graphics:mask_3_graphics_166,x:183.7,y:155}).wait(1).to({graphics:mask_3_graphics_167,x:185.4,y:154.7}).wait(1).to({graphics:mask_3_graphics_168,x:187,y:154.4}).wait(1).to({graphics:mask_3_graphics_169,x:188.6,y:154}).wait(1).to({graphics:mask_3_graphics_170,x:190.2,y:153.6}).wait(1).to({graphics:mask_3_graphics_171,x:191.7,y:153.2}).wait(1).to({graphics:mask_3_graphics_172,x:193.3,y:152.7}).wait(1).to({graphics:mask_3_graphics_173,x:194.9,y:152.1}).wait(1).to({graphics:mask_3_graphics_174,x:196.4,y:151.5}).wait(1).to({graphics:mask_3_graphics_175,x:197.9,y:150.9}).wait(1).to({graphics:mask_3_graphics_176,x:199.4,y:150.2}).wait(1).to({graphics:mask_3_graphics_177,x:200.9,y:149.5}).wait(1).to({graphics:mask_3_graphics_178,x:202.3,y:148.7}).wait(1).to({graphics:mask_3_graphics_179,x:203.7,y:147.9}).wait(1).to({graphics:mask_3_graphics_180,x:205.2,y:147.1}).wait(1).to({graphics:mask_3_graphics_181,x:206.5,y:146.2}).wait(1).to({graphics:mask_3_graphics_182,x:207.9,y:145.3}).wait(1).to({graphics:mask_3_graphics_183,x:209.2,y:144.4}).wait(1).to({graphics:mask_3_graphics_184,x:210.5,y:143.4}).wait(1).to({graphics:mask_3_graphics_185,x:211.8,y:142.3}).wait(1).to({graphics:mask_3_graphics_186,x:213.1,y:141.3}).wait(1).to({graphics:mask_3_graphics_187,x:214.3,y:140.2}).wait(1).to({graphics:mask_3_graphics_188,x:215.5,y:139}).wait(1).to({graphics:mask_3_graphics_189,x:216.6,y:137.9}).wait(1).to({graphics:mask_3_graphics_190,x:217.7,y:136.7}).wait(1).to({graphics:mask_3_graphics_191,x:218.8,y:135.5}).wait(1).to({graphics:mask_3_graphics_192,x:219.9,y:134.2}).wait(1).to({graphics:mask_3_graphics_193,x:220.9,y:132.9}).wait(1).to({graphics:mask_3_graphics_194,x:221.8,y:131.6}).wait(1).to({graphics:mask_3_graphics_195,x:222.8,y:130.2}).wait(1).to({graphics:mask_3_graphics_196,x:223.7,y:128.9}).wait(1).to({graphics:mask_3_graphics_197,x:224.5,y:127.5}).wait(1).to({graphics:mask_3_graphics_198,x:225.4,y:126.1}).wait(1).to({graphics:mask_3_graphics_199,x:226.1,y:124.6}).wait(1).to({graphics:mask_3_graphics_200,x:226.9,y:123.2}).wait(1).to({graphics:mask_3_graphics_201,x:227.6,y:121.7}).wait(1).to({graphics:mask_3_graphics_202,x:228.2,y:120.2}).wait(1).to({graphics:mask_3_graphics_203,x:228.8,y:118.7}).wait(1).to({graphics:mask_3_graphics_204,x:229.4,y:117.1}).wait(1).to({graphics:mask_3_graphics_205,x:229.9,y:115.6}).wait(1).to({graphics:mask_3_graphics_206,x:230.4,y:114}).wait(1).to({graphics:mask_3_graphics_207,x:230.8,y:112.5}).wait(1).to({graphics:mask_3_graphics_208,x:231.2,y:110.9}).wait(1).to({graphics:mask_3_graphics_209,x:231.6,y:109.3}).wait(1).to({graphics:mask_3_graphics_210,x:231.8,y:107.6}).wait(1).to({graphics:mask_3_graphics_211,x:232.1,y:106.1}).wait(1).to({graphics:mask_3_graphics_212,x:232.3,y:104.5}).wait(1).to({graphics:mask_3_graphics_213,x:232.5,y:102.9}).wait(1).to({graphics:mask_3_graphics_214,x:232.6,y:101.3}).wait(1).to({graphics:mask_3_graphics_215,x:232.6,y:99.7}).wait(1).to({graphics:mask_3_graphics_216,x:232.7,y:98.2}).wait(1).to({graphics:mask_3_graphics_217,x:232.6,y:99.3}).wait(1).to({graphics:mask_3_graphics_218,x:232.6,y:100.9}).wait(1).to({graphics:mask_3_graphics_219,x:232.6,y:102.5}).wait(1).to({graphics:mask_3_graphics_220,x:232.6,y:104.1}).wait(1).to({graphics:mask_3_graphics_221,x:232.6,y:105.6}).wait(1).to({graphics:mask_3_graphics_222,x:232.6,y:107.2}).wait(1).to({graphics:mask_3_graphics_223,x:232.6,y:108.8}).wait(1).to({graphics:mask_3_graphics_224,x:232.6,y:110.3}).wait(1).to({graphics:mask_3_graphics_225,x:232.5,y:111.9}).wait(1).to({graphics:mask_3_graphics_226,x:232.5,y:113.4}).wait(1).to({graphics:mask_3_graphics_227,x:232.5,y:114.9}).wait(1).to({graphics:mask_3_graphics_228,x:232.5,y:116.4}).wait(1).to({graphics:mask_3_graphics_229,x:232.5,y:117.9}).wait(1).to({graphics:mask_3_graphics_230,x:232.5,y:119.4}).wait(1).to({graphics:mask_3_graphics_231,x:232.4,y:120.9}).wait(1).to({graphics:mask_3_graphics_232,x:232.4,y:122.3}).wait(1).to({graphics:mask_3_graphics_233,x:232.3,y:123.8}).wait(457));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(20,1,1).p("AoDk1QCyhWB1goQBzgmB4gCQB9gCBrBAQBlA8BCBjQA4BWAXBkQAbBxgFB0QgGB+gsB0QgOAmgRAj");
	this.shape_4.setTransform(355.1,184.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(20,1,1).p("AkWpPIA6gVQBzglB4gCQB9gDBrBAQBlA9BCBjQA4BVAXBlQAbBygFBzQgBAWgCAWQgLBmgkBgQgOAlgRAjQgjBHgxA9QhNBghqA7QgeARggAOQgqAUgsAPAoDnlQCIhCBlgoAnCoIQBVgnBXgg");
	this.shape_5.setTransform(355.1,202.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(20,1,1).p("AkWpwIA6gVQBzglB4gCQB9gDBrBAQBlA9BCBjQA4BVAXBlQAbBygFBzQgBAXgCAWQgLBlgkBgQgOAlgRAjQgjBHgxA9QhNBghqA7QgeARggAOQhHAhhLAVQgqANgrAKQg3AOg5AKAnCopQBVgnBXggAoDoGQCIhDBlgn");
	this.shape_6.setTransform(355.1,205.4);

	var maskedShapeInstanceList = [this.shape_4,this.shape_5,this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4}]},135).to({state:[{t:this.shape_5}]},29).to({state:[{t:this.shape_6}]},15).wait(511));

	// mask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_9 = new cjs.Graphics().p("AVdH7IAuifIDAA4IguCfg");
	var mask_4_graphics_10 = new cjs.Graphics().p("Ah4A5IAyipIC/A4IgxCpg");
	var mask_4_graphics_11 = new cjs.Graphics().p("Ah6A+IA0i0IDBA5Ig1C0g");
	var mask_4_graphics_12 = new cjs.Graphics().p("Ah8BEIA4i/IDBA4Ig4C/g");
	var mask_4_graphics_13 = new cjs.Graphics().p("Ah+BJIA7jKIDCA5Ig7DKg");
	var mask_4_graphics_14 = new cjs.Graphics().p("AiABOIA+jUIDCA5Ig+DUg");
	var mask_4_graphics_15 = new cjs.Graphics().p("AiCBUIBBjgIDDA5IhADfg");
	var mask_4_graphics_16 = new cjs.Graphics().p("AiDBZIBEjqIDDA5IhEDqg");
	var mask_4_graphics_17 = new cjs.Graphics().p("AiFBeIBHj0IDEA5IhHD0g");
	var mask_4_graphics_18 = new cjs.Graphics().p("AiHBkIBKkAIDFA6IhLD/g");
	var mask_4_graphics_19 = new cjs.Graphics().p("AiJBoIBOkJIDFA5IhNELg");
	var mask_4_graphics_20 = new cjs.Graphics().p("AiLBuIBRkVIDGA6IhREVg");
	var mask_4_graphics_21 = new cjs.Graphics().p("AiNBzIBUkgIDHA7IhUEgg");
	var mask_4_graphics_22 = new cjs.Graphics().p("AiPB5IBXkrIDIA6IhXErg");
	var mask_4_graphics_23 = new cjs.Graphics().p("AiRB+IBak1IDIA6IhaE1g");
	var mask_4_graphics_24 = new cjs.Graphics().p("AiSCDIBdlAIDJA7IheFAg");
	var mask_4_graphics_25 = new cjs.Graphics().p("AiVCIIBhlKIDKA6IhhFLg");
	var mask_4_graphics_26 = new cjs.Graphics().p("AiWCOIBjlWIDKA7IhjFWg");
	var mask_4_graphics_27 = new cjs.Graphics().p("AiYCTIBmlgIDLA7IhnFgg");
	var mask_4_graphics_28 = new cjs.Graphics().p("AiaCYIBqlrIDLA7IhqFsg");
	var mask_4_graphics_29 = new cjs.Graphics().p("AicCdIBtl1IDMA7IhtF2g");
	var mask_4_graphics_30 = new cjs.Graphics().p("AieCjIBwmBIDNA8IhwGBg");
	var mask_4_graphics_31 = new cjs.Graphics().p("AigCoIB0mLIDNA8Ih0GLg");
	var mask_4_graphics_32 = new cjs.Graphics().p("AihCuIB2mXIDNA9Ih2GWg");
	var mask_4_graphics_33 = new cjs.Graphics().p("AijCzIB5mhIDOA8Ih5Ghg");
	var mask_4_graphics_34 = new cjs.Graphics().p("AilC4IB8msIDPA9Ih8Gsg");
	var mask_4_graphics_35 = new cjs.Graphics().p("AinC9IB/m2IDQA9Ih/G2g");
	var mask_4_graphics_36 = new cjs.Graphics().p("AipDDICDnCIDQA9IiDHCg");
	var mask_4_graphics_37 = new cjs.Graphics().p("AirDIICGnMIDRA9IiGHMg");
	var mask_4_graphics_38 = new cjs.Graphics().p("AitDNICJnXIDSA+IiKHXg");
	var mask_4_graphics_39 = new cjs.Graphics().p("AiuDTICLniIDTA9IiNHig");
	var mask_4_graphics_40 = new cjs.Graphics().p("AixDYICQnsIDTA+IiPHrg");
	var mask_4_graphics_41 = new cjs.Graphics().p("AiyDdICSn3IDTA+IiSH3g");
	var mask_4_graphics_42 = new cjs.Graphics().p("Ai0DjICVoDIDUA+IiVIDg");
	var mask_4_graphics_43 = new cjs.Graphics().p("Ai2DoICZoNIDUA/IiZIMg");
	var mask_4_graphics_44 = new cjs.Graphics().p("Ai4DtICcoYIDVA/IicIYg");
	var mask_4_graphics_45 = new cjs.Graphics().p("Ai6DyICfoiIDWA/IifIig");
	var mask_4_graphics_46 = new cjs.Graphics().p("Ai8D3ICiotIDXA/IiiItg");
	var mask_4_graphics_47 = new cjs.Graphics().p("Ai9D9IClo4IDXA/IilI4g");
	var mask_4_graphics_48 = new cjs.Graphics().p("AjAECICppCIDXA/IioJCg");
	var mask_4_graphics_49 = new cjs.Graphics().p("AjBEIICrpOIDYBAIirJNg");
	var mask_4_graphics_50 = new cjs.Graphics().p("AjDENICupYIDZA/IiuJYg");
	var mask_4_graphics_51 = new cjs.Graphics().p("AjFESICxpjIDaBAIiyJjg");
	var mask_4_graphics_52 = new cjs.Graphics().p("AjHEXIC1ptIDaBAIi1Jtg");
	var mask_4_graphics_53 = new cjs.Graphics().p("AjJEdIC4p5IDbBAIi4J5g");
	var mask_4_graphics_54 = new cjs.Graphics().p("AjLEiIC7qDIDcBAIi7KDg");
	var mask_4_graphics_55 = new cjs.Graphics().p("AjNEnIC/qOIDcBBIi+KOg");
	var mask_4_graphics_56 = new cjs.Graphics().p("AjPEsIDCqYIDdBBIjCKYg");
	var mask_4_graphics_57 = new cjs.Graphics().p("AjQEyIDEqjIDdBAIjEKjg");
	var mask_4_graphics_58 = new cjs.Graphics().p("AjSE3IDHquIDfBBIjJKug");
	var mask_4_graphics_59 = new cjs.Graphics().p("AjUE8IDLq4IDeBBIjKK4g");
	var mask_4_graphics_60 = new cjs.Graphics().p("AjWFCIDOrEIDfBBIjNLEg");
	var mask_4_graphics_61 = new cjs.Graphics().p("AjYFHIDRrPIDgBCIjRLPg");
	var mask_4_graphics_62 = new cjs.Graphics().p("AjaFMIDVrZIDgBBIjULag");
	var mask_4_graphics_63 = new cjs.Graphics().p("AjcFRIDXrkIDiBCIjYLlg");
	var mask_4_graphics_64 = new cjs.Graphics().p("AjeFWIDbruIDiBCIjbLvg");
	var mask_4_graphics_65 = new cjs.Graphics().p("AjgFcIDer5IDiBCIjcL5g");
	var mask_4_graphics_66 = new cjs.Graphics().p("AjhFiIDgsFIDjBCIjgMFg");
	var mask_4_graphics_67 = new cjs.Graphics().p("AjjFnIDjsPIDkBCIjjMPg");
	var mask_4_graphics_68 = new cjs.Graphics().p("AjlFsIDmsaIDlBDIjmMag");
	var mask_4_graphics_69 = new cjs.Graphics().p("AjnFxIDpskIDmBCIjpMlg");
	var mask_4_graphics_70 = new cjs.Graphics().p("AjpF3IDsswIDnBDIjsMwg");
	var mask_4_graphics_71 = new cjs.Graphics().p("AjrF8IDws6IDnBDIjvM6g");
	var mask_4_graphics_72 = new cjs.Graphics().p("AjsGBIDytFIDnBDIjyNGg");
	var mask_4_graphics_73 = new cjs.Graphics().p("AjvGHID2tQIDpBEIj2NPg");
	var mask_4_graphics_74 = new cjs.Graphics().p("AjxGMID5tbIDqBEIj5Nbg");
	var mask_4_graphics_75 = new cjs.Graphics().p("AjyGRID7tlIDqBEIj7Nlg");
	var mask_4_graphics_76 = new cjs.Graphics().p("Aj0GXID/txIDqBFIj/Nwg");
	var mask_4_graphics_77 = new cjs.Graphics().p("Aj2GcIECt7IDrBEIkCN7g");
	var mask_4_graphics_78 = new cjs.Graphics().p("Aj4GhIEFuGIDsBFIkFOGg");
	var mask_4_graphics_79 = new cjs.Graphics().p("Aj6GmIEIuQIDtBFIkIOQg");
	var mask_4_graphics_80 = new cjs.Graphics().p("Aj8GsIEMucIDtBFIkLOcg");
	var mask_4_graphics_81 = new cjs.Graphics().p("Aj+GxIEPumIDuBFIkPOmg");
	var mask_4_graphics_82 = new cjs.Graphics().p("AkAG3IESuyIDuBGIkROwg");
	var mask_4_graphics_83 = new cjs.Graphics().p("AkBG7IEVu7IDuBGIkVO7g");
	var mask_4_graphics_84 = new cjs.Graphics().p("AkDHBIEXvHIDwBGIkYPGg");
	var mask_4_graphics_85 = new cjs.Graphics().p("AkFHGIEbvRIDwBGIkaPRg");
	var mask_4_graphics_86 = new cjs.Graphics().p("AkHHMIEevcIDxBGIkePcg");
	var mask_4_graphics_87 = new cjs.Graphics().p("AkJHQIEhvmIDyBGIkhPng");
	var mask_4_graphics_88 = new cjs.Graphics().p("AkLHWIElvxIDyBGIklPyg");
	var mask_4_graphics_89 = new cjs.Graphics().p("AkNHbIEov8IDzBGIkoP9g");
	var mask_4_graphics_90 = new cjs.Graphics().p("AkPHhIErwHIDzBHIkqQGg");
	var mask_4_graphics_91 = new cjs.Graphics().p("AkQHmIEtwSID0BHIktQSg");
	var mask_4_graphics_92 = new cjs.Graphics().p("AkSHrIExwcID0BHIkwQcg");
	var mask_4_graphics_93 = new cjs.Graphics().p("AkUHwIEzwnID2BIIk0Qng");
	var mask_4_graphics_94 = new cjs.Graphics().p("AREOSIE4wyID2BIIk4Qxg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_4_graphics_9,x:161.1,y:56.3}).wait(1).to({graphics:mask_4_graphics_10,x:310.2,y:102.3}).wait(1).to({graphics:mask_4_graphics_11,x:310.1,y:102.7}).wait(1).to({graphics:mask_4_graphics_12,x:310,y:103.2}).wait(1).to({graphics:mask_4_graphics_13,x:309.9,y:103.6}).wait(1).to({graphics:mask_4_graphics_14,x:309.8,y:104.1}).wait(1).to({graphics:mask_4_graphics_15,x:309.7,y:104.5}).wait(1).to({graphics:mask_4_graphics_16,x:309.6,y:105}).wait(1).to({graphics:mask_4_graphics_17,x:309.5,y:105.4}).wait(1).to({graphics:mask_4_graphics_18,x:309.4,y:105.9}).wait(1).to({graphics:mask_4_graphics_19,x:309.3,y:106.3}).wait(1).to({graphics:mask_4_graphics_20,x:309.2,y:106.8}).wait(1).to({graphics:mask_4_graphics_21,x:309.1,y:107.2}).wait(1).to({graphics:mask_4_graphics_22,x:309,y:107.6}).wait(1).to({graphics:mask_4_graphics_23,x:309,y:108.1}).wait(1).to({graphics:mask_4_graphics_24,x:308.9,y:108.5}).wait(1).to({graphics:mask_4_graphics_25,x:308.8,y:109}).wait(1).to({graphics:mask_4_graphics_26,x:308.7,y:109.4}).wait(1).to({graphics:mask_4_graphics_27,x:308.6,y:109.9}).wait(1).to({graphics:mask_4_graphics_28,x:308.5,y:110.3}).wait(1).to({graphics:mask_4_graphics_29,x:308.4,y:110.8}).wait(1).to({graphics:mask_4_graphics_30,x:308.3,y:111.2}).wait(1).to({graphics:mask_4_graphics_31,x:308.2,y:111.6}).wait(1).to({graphics:mask_4_graphics_32,x:308.1,y:112.1}).wait(1).to({graphics:mask_4_graphics_33,x:308,y:112.5}).wait(1).to({graphics:mask_4_graphics_34,x:307.9,y:113}).wait(1).to({graphics:mask_4_graphics_35,x:307.8,y:113.4}).wait(1).to({graphics:mask_4_graphics_36,x:307.7,y:113.9}).wait(1).to({graphics:mask_4_graphics_37,x:307.6,y:114.3}).wait(1).to({graphics:mask_4_graphics_38,x:307.5,y:114.8}).wait(1).to({graphics:mask_4_graphics_39,x:307.4,y:115.2}).wait(1).to({graphics:mask_4_graphics_40,x:307.3,y:115.7}).wait(1).to({graphics:mask_4_graphics_41,x:307.2,y:116.1}).wait(1).to({graphics:mask_4_graphics_42,x:307.1,y:116.6}).wait(1).to({graphics:mask_4_graphics_43,x:307,y:117}).wait(1).to({graphics:mask_4_graphics_44,x:307,y:117.5}).wait(1).to({graphics:mask_4_graphics_45,x:306.8,y:117.9}).wait(1).to({graphics:mask_4_graphics_46,x:306.7,y:118.4}).wait(1).to({graphics:mask_4_graphics_47,x:306.7,y:118.8}).wait(1).to({graphics:mask_4_graphics_48,x:306.6,y:119.2}).wait(1).to({graphics:mask_4_graphics_49,x:306.5,y:119.7}).wait(1).to({graphics:mask_4_graphics_50,x:306.4,y:120.1}).wait(1).to({graphics:mask_4_graphics_51,x:306.3,y:120.6}).wait(1).to({graphics:mask_4_graphics_52,x:306.2,y:121}).wait(1).to({graphics:mask_4_graphics_53,x:306.1,y:121.5}).wait(1).to({graphics:mask_4_graphics_54,x:306,y:121.9}).wait(1).to({graphics:mask_4_graphics_55,x:305.9,y:122.4}).wait(1).to({graphics:mask_4_graphics_56,x:305.8,y:122.8}).wait(1).to({graphics:mask_4_graphics_57,x:305.7,y:123.3}).wait(1).to({graphics:mask_4_graphics_58,x:305.6,y:123.7}).wait(1).to({graphics:mask_4_graphics_59,x:305.5,y:124.2}).wait(1).to({graphics:mask_4_graphics_60,x:305.4,y:124.6}).wait(1).to({graphics:mask_4_graphics_61,x:305.3,y:125.1}).wait(1).to({graphics:mask_4_graphics_62,x:305.2,y:125.5}).wait(1).to({graphics:mask_4_graphics_63,x:305.1,y:126}).wait(1).to({graphics:mask_4_graphics_64,x:305,y:126.4}).wait(1).to({graphics:mask_4_graphics_65,x:304.9,y:126.8}).wait(1).to({graphics:mask_4_graphics_66,x:304.8,y:127.3}).wait(1).to({graphics:mask_4_graphics_67,x:304.7,y:127.7}).wait(1).to({graphics:mask_4_graphics_68,x:304.6,y:128.2}).wait(1).to({graphics:mask_4_graphics_69,x:304.6,y:128.6}).wait(1).to({graphics:mask_4_graphics_70,x:304.5,y:129.1}).wait(1).to({graphics:mask_4_graphics_71,x:304.4,y:129.5}).wait(1).to({graphics:mask_4_graphics_72,x:304.3,y:130}).wait(1).to({graphics:mask_4_graphics_73,x:304.2,y:130.4}).wait(1).to({graphics:mask_4_graphics_74,x:304.1,y:130.8}).wait(1).to({graphics:mask_4_graphics_75,x:304,y:131.3}).wait(1).to({graphics:mask_4_graphics_76,x:303.9,y:131.7}).wait(1).to({graphics:mask_4_graphics_77,x:303.8,y:132.2}).wait(1).to({graphics:mask_4_graphics_78,x:303.7,y:132.6}).wait(1).to({graphics:mask_4_graphics_79,x:303.6,y:133.1}).wait(1).to({graphics:mask_4_graphics_80,x:303.5,y:133.5}).wait(1).to({graphics:mask_4_graphics_81,x:303.4,y:134}).wait(1).to({graphics:mask_4_graphics_82,x:303.3,y:134.4}).wait(1).to({graphics:mask_4_graphics_83,x:303.2,y:134.9}).wait(1).to({graphics:mask_4_graphics_84,x:303.1,y:135.3}).wait(1).to({graphics:mask_4_graphics_85,x:303,y:135.8}).wait(1).to({graphics:mask_4_graphics_86,x:302.9,y:136.2}).wait(1).to({graphics:mask_4_graphics_87,x:302.8,y:136.7}).wait(1).to({graphics:mask_4_graphics_88,x:302.7,y:137.1}).wait(1).to({graphics:mask_4_graphics_89,x:302.6,y:137.6}).wait(1).to({graphics:mask_4_graphics_90,x:302.6,y:138}).wait(1).to({graphics:mask_4_graphics_91,x:302.4,y:138.4}).wait(1).to({graphics:mask_4_graphics_92,x:302.3,y:138.9}).wait(1).to({graphics:mask_4_graphics_93,x:302.3,y:139.3}).wait(1).to({graphics:mask_4_graphics_94,x:165,y:98.5}).wait(596));

	// Layer 2
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(20,1,1).p("ABdlLIi5KX");
	this.shape_7.setTransform(300.3,147.2);
	this.shape_7._off = true;

	var maskedShapeInstanceList = [this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(9).to({_off:false},0).wait(681));

	// number
	this.instance_3 = new lib._3("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(275,275);
	this.instance_3.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(690));

	// Background
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#F59E9E").ss(3,1,1).p("EAq+Aq+MhV7AAAMAAAhV7MBV7AAAg");
	this.shape_8.setTransform(275,275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F6E7E7").s().p("Egq9Aq+MAAAhV7MBV7AAAMAAABV7g");
	this.shape_9.setTransform(275,275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).wait(690));

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