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
	this.shape.graphics.f("#FFFFFF").s().p("Egj4AdeQhehpAAikQAAjQCKjHQAPgXEKkyQFdmNLor5QgMAMgaAAQiKAAAAiQQAAg4BbhjICEiQQDBjcCkjzQCijwCGkOIBqjBQBRh7BMAAQCTAAAACVQAABkmfMUQCPh7CAhAQCehNCeAAQCBAABwA1QBpAvBSBbQChC4AAEFQAADhh7DXQhsC9i/ChQE9hPEQh9QFAiWDEi4IDZi8IC+i7QCEiBBPAAQBhAAAABzQAABRkCEXIgYAXQjQDkkQC7QkICzkwCBQkuB7k/BAQlABDk7AAQitAAi5g6Qing1iqhjInyOJQieEfheCNQhPBvhYA7QhmBGiBAAQieAAhkhwgA+zUsQiJCfAACGQAABhBAAAQBSgBBeh7IByjAIHGs+gADBtrIjSCSIllFXQjkDfhQCjIhMCnQElCJBVAAQChABC/hMQC9hNCniBQCwiGBniaQBsiuAAinQAAiPhVhbQhYhhiKAAQhgAAhzA+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-239,-199.8,478.2,399.6);


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
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AAAAcIAAg3");
	this.shape_1.setTransform(0,-101.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AAAAfIAAg9");
	this.shape_2.setTransform(0,-101);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("AAAAjIAAhE");
	this.shape_3.setTransform(0,-100.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("AAAAmIAAhL");
	this.shape_4.setTransform(0,-100.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(5,1,1).p("AAAApIAAhR");
	this.shape_5.setTransform(0,-100.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(5,1,1).p("AAAAsIAAhX");
	this.shape_6.setTransform(0,-99.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(5,1,1).p("AAAAvIAAhd");
	this.shape_7.setTransform(0,-99.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(5,1,1).p("AAAAyIAAhj");
	this.shape_8.setTransform(0,-99.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(5,1,1).p("AAAA2IAAhq");
	this.shape_9.setTransform(0,-98.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(5,1,1).p("AAAA5IAAhx");
	this.shape_10.setTransform(0,-98.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5,1,1).p("AAAA8IAAh3");
	this.shape_11.setTransform(0,-98.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(5,1,1).p("AAAA/IAAh9");
	this.shape_12.setTransform(0,-98);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(5,1,1).p("AAABCIAAiD");
	this.shape_13.setTransform(0,-97.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(5,1,1).p("AAABFIAAiJ");
	this.shape_14.setTransform(0,-97.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(5,1,1).p("AAABJIAAiR");
	this.shape_15.setTransform(0,-97.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(5,1,1).p("AAABMIAAiX");
	this.shape_16.setTransform(0,-96.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(5,1,1).p("AAABPIAAid");
	this.shape_17.setTransform(0,-96.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(5,1,1).p("AAABSIAAij");
	this.shape_18.setTransform(0,-96.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(5,1,1).p("AAABVIAAip");
	this.shape_19.setTransform(0,-96);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(5,1,1).p("AAABYIAAiv");
	this.shape_20.setTransform(0,-95.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(5,1,1).p("AAABcIAAi3");
	this.shape_21.setTransform(0,-95.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(5,1,1).p("AAABfIAAi9");
	this.shape_22.setTransform(0,-95.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(5,1,1).p("AAABiIAAjD");
	this.shape_23.setTransform(0,-94.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(5,1,1).p("AAABlIAAjJ");
	this.shape_24.setTransform(0,-94.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(5,1,1).p("AAABoIAAjP");
	this.shape_25.setTransform(0,-94.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(5,1,1).p("AAABsIAAjX");
	this.shape_26.setTransform(0,-93.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(5,1,1).p("AAABuIAAjc");
	this.shape_27.setTransform(0,-93.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(5,1,1).p("AAAByIAAjj");
	this.shape_28.setTransform(0,-93.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(5,1,1).p("AAAB1IAAjp");
	this.shape_29.setTransform(0,-93);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(5,1,1).p("AAAB4IAAjv");
	this.shape_30.setTransform(0,-92.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(5,1,1).p("AAAB7IAAj1");
	this.shape_31.setTransform(0,-92.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(5,1,1).p("AAAB/IAAj8");
	this.shape_32.setTransform(0,-92.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(5,1,1).p("AAACBIAAkC");
	this.shape_33.setTransform(0,-91.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(5,1,1).p("AAACFIAAkJ");
	this.shape_34.setTransform(0,-91.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(5,1,1).p("AAACIIAAkP");
	this.shape_35.setTransform(0,-91.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(5,1,1).p("AAACLIAAkV");
	this.shape_36.setTransform(0,-90.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(5,1,1).p("AAACOIAAkb");
	this.shape_37.setTransform(0,-90.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(5,1,1).p("AAACRIAAkh");
	this.shape_38.setTransform(0,-90.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(5,1,1).p("AAACVIAAkp");
	this.shape_39.setTransform(0,-90.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(5,1,1).p("AAACYIAAkv");
	this.shape_40.setTransform(0,-89.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(5,1,1).p("AAACbIAAk1");
	this.shape_41.setTransform(0,-89.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(5,1,1).p("AAACeIAAk7");
	this.shape_42.setTransform(0,-89.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(5,1,1).p("AAAChIAAlB");
	this.shape_43.setTransform(0,-88.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(5,1,1).p("AAACkIAAlI");
	this.shape_44.setTransform(0,-88.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(5,1,1).p("AAACoIAAlP");
	this.shape_45.setTransform(0,-88.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(5,1,1).p("AAACrIAAlV");
	this.shape_46.setTransform(0,-88);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(5,1,1).p("AAACuIAAlb");
	this.shape_47.setTransform(0,-87.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(5,1,1).p("AAACxIAAlh");
	this.shape_48.setTransform(0,-87.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(5,1,1).p("AAAC0IAAln");
	this.shape_49.setTransform(0,-87.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(5,1,1).p("AAAC3IAAlu");
	this.shape_50.setTransform(0,-86.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(5,1,1).p("AAAC7IAAl0");
	this.shape_51.setTransform(0,-86.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(5,1,1).p("AAAC+IAAl7");
	this.shape_52.setTransform(0,-86.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(5,1,1).p("AAADBIAAmB");
	this.shape_53.setTransform(0,-85.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(5,1,1).p("AAADEIAAmH");
	this.shape_54.setTransform(0,-85.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(5,1,1).p("AAADHIAAmN");
	this.shape_55.setTransform(0,-85.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(5,1,1).p("AAADLIAAmV");
	this.shape_56.setTransform(0,-85.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(5,1,1).p("AAADOIAAmb");
	this.shape_57.setTransform(0,-84.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(5,1,1).p("AAADRIAAmh");
	this.shape_58.setTransform(0,-84.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(5,1,1).p("AAAnBIAAOD");
	this.shape_59.setTransform(0,-84.2,1,0.471);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).wait(1));

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0.3,-103.8,1,1,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-63.9},59).wait(1));

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
(lib.WS_Cursive_p = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_675 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(675).call(this.frame_675).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(184.9,232.6,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[185,232.8,218.4,202.9,245.3,162.2,272.2,121.3,282.7,92.4]}},75).wait(16).to({startPosition:0},0).to({guide:{path:[282.7,92.3,275.2,130.5,240.6,187.8,205.9,245.3,174.9,298.2,143.8,351.2,116.6,412.4,89.6,473.2,59.2,457.8]}},134).wait(16).to({startPosition:0},0).to({guide:{path:[59.1,457.9,44.1,449.7,50,430,55.8,410.2,82.6,378.9,136.7,315.8,177.5,273.8,218.2,231.9,268.6,187.3,319,142.6,349.3,182,379.5,221.4,337.6,271.3,295.6,321.3,247.5,317.5,199.7,313.8,179.1,298]}},194).wait(16).to({startPosition:0},0).to({guide:{path:[179.1,298,229.6,332.1,293.6,320.6,352.4,312.5,405.2,285.7,459.3,258.3,495.8,209.8]}},135).wait(15).to({startPosition:0},0).to({guide:{path:[495,209.6,497.6,140.8,570.7,149.4,615.1,154.7,630.2,110.8]}},65).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(283,92,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},75).wait(16).to({_off:false,x:57,y:456},0).to({_off:true},134).wait(16).to({_off:false,x:176,y:296},0).to({_off:true},194).wait(16).to({_off:false,x:495.9,y:209.8},0).to({_off:true},135).wait(81));

	// Layer 23
	this.instance_1 = new lib.ar2("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(316.5,344.1,1,1,-142.2,0,0,0.7,-0.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(460).to({_off:false},0).wait(216));

	// Layer 19 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_531 = new cjs.Graphics().p("AHRU1QoiooAEsJQAEsIInoiQInojMJAEMgASA6lQsJgEoiong");
	var mask_graphics_532 = new cjs.Graphics().p("AHjVSQouocgOsIQgNsIIbouQIaovMJgOMABCA6kIgmABQrxAAogoOg");
	var mask_graphics_533 = new cjs.Graphics().p("AHtVvQo7oPgesJQgfsHIOo6QIOo7MJgfMACVA6iQgrACgrAAQrSAAoanxg");
	var mask_graphics_534 = new cjs.Graphics().p("AH3WLQpGoDgwsHQgwsHIBpFQIBpHMIgwMADpA6eQhDAEhBAAQq2AAoTnVg");
	var mask_graphics_535 = new cjs.Graphics().p("AICWmQpRn2hCsGQhBsFH0pRQH0pSMGhBMAE8A6XQhZAIhXAAQqaAAoMm6g");
	var mask_graphics_536 = new cjs.Graphics().p("AINXAQpcnohTsFQhTsDHopcQHmpdMFhTMAGPA6QQhwAMhtAAQp/AAoEmgg");
	var mask_graphics_537 = new cjs.Graphics().p("AIZXaQpnnbhksCQhksCHapmQHZpoMDhkMAHiA6GQiGARiCAAQpmAAn7mGg");
	var mask_graphics_538 = new cjs.Graphics().p("AImXyQpxnMh2sAQh1r/HMpxQHLpyMAh1MAI2A56QicAXiXAAQpMAAnylug");
	var mask_graphics_539 = new cjs.Graphics().p("AIzYLQp7m/iGr9QiHr9G+p7QG9p8L9iGMAKIA5tQixAfiqAAQo1AAnolWg");
	var mask_graphics_540 = new cjs.Graphics().p("AJBYiQqFmwiXr7QiYr5GwqEQGvqGL6iYMALaA5eQjGAni+AAQoeAAndk/g");
	var mask_graphics_541 = new cjs.Graphics().p("AJQY4QqPmhior3Qior2GhqOQGgqPL2ioMAMsA5MQjaAwjSAAQoGAAnSkpg");
	var mask_graphics_542 = new cjs.Graphics().p("AJfZOQqYmTi5rzQi5rxGTqYQGRqYLyi5MAN+A45QjuA6jlAAQnxAAnGkTg");
	var mask_graphics_543 = new cjs.Graphics().p("AJvZjQqhmEjKruQjKruGFqgQGBqhLujKMAPPA4kQkBBFj4AAQncAAm5j+g");
	var mask_graphics_544 = new cjs.Graphics().p("AJ/Z3Qqpl1jbrpQjarpF1qpQFyqpLqjbMAQfA4NQkUBRkLAAQnHAAmsjqg");
	var mask_graphics_545 = new cjs.Graphics().p("AKQaLQqxlmjsrlQjrrjFmqxQFjqyLljrMARvA31QkmBdkeAAQmyAAmfjWg");
	var mask_graphics_546 = new cjs.Graphics().p("AKhadQq5lWj7rfQj8reFXq5QFTq6Lfj7MAS/A3bQk4BrkxAAQmeAAmRjFg");
	var mask_graphics_547 = new cjs.Graphics().p("AKzavQrAlGkMraQkMrYFHrAQFErBLZkMMAUNA2/QlJB5lEAAQmKAAmCizg");
	var mask_graphics_548 = new cjs.Graphics().p("ALGbAQrIk3kcrTQkcrSE3rHQE0rILUkdMAVbA2iQlaCIlXAAQl2AAlziig");
	var mask_graphics_549 = new cjs.Graphics().p("ALZbQQrPknksrMQksrNEorNQElrPLLksMAWpA2CQlqCXlqAAQljAAljiRg");
	var mask_graphics_550 = new cjs.Graphics().p("ALtbfQrWkWk7rGQk8rGEXrTQEVrVLFk8MAX1A1gQl5Col+AAQlQAAlSiCg");
	var mask_graphics_551 = new cjs.Graphics().p("AMBbuQrckGlLq/QlMq+EHraQEFrbK+lMMAZBA0+QmIC5mSAAQk8AAlChzg");
	var mask_graphics_552 = new cjs.Graphics().p("AMWb8Qrij2laq3Qlcq3D3rfQD0rhK2lcMAaNA0ZQmXDMmmAAQkpAAkwhlg");
	var mask_graphics_553 = new cjs.Graphics().p("AMrcIQrnjllqqvQlrqvDmrlQDkrmKulrMAbYAzzQmmDfm5AAQkXAAkehZg");
	var mask_graphics_554 = new cjs.Graphics().p("ANBcUQrsjUl5qnQl6qnDVrpQDTrrKml7MAchAzLQmzDznOAAQkDAAkMhNg");
	var mask_graphics_555 = new cjs.Graphics().p("ANXcfQrxjEmIqeQmJqeDFruQDDrwKdmJMAdpAyiQm/EGnkAAQjwAAj5hBg");
	var mask_graphics_556 = new cjs.Graphics().p("ANtcqQr0i0mXqVQmYqVC0ryQCyr0KUmYMAexAx2QnMEcn5AAQjdAAjmg2g");
	var mask_graphics_557 = new cjs.Graphics().p("AOEczQr4iimmqMQmmqMCjr2QChr4KLmmMAf4AxJQnYEyoPAAQjKAAjSgtg");
	var mask_graphics_558 = new cjs.Graphics().p("AOcc7Qr8iRm0qCQm1qDCSr5QCQr7KCm1MAg9AwbQniFIomAAQi2AAi+gkg");
	var mask_graphics_559 = new cjs.Graphics().p("AO0dDQr/iAnCp5QnDp4CBr9QB/r+J3nDMAiCAvrQntFgo9AAQiiAAipgcg");
	var mask_graphics_560 = new cjs.Graphics().p("APMdKQsBhwnQpuQnSpuBwr/QBusBJtnRMAjGAu6Qn3F4pVAAQiOAAiUgVg");
	var mask_graphics_561 = new cjs.Graphics().p("APldPQsEhenepjQnfpkBfsCQBdsDJinfMAkJAuIQoAGRpuAAQh6AAh+gQg");
	var mask_graphics_562 = new cjs.Graphics().p("AP+dUQsFhNnspZQnspYBNsEQBMsFJXnsMAlKAtTQoIGqqIAAQhlAAhogKg");
	var mask_graphics_563 = new cjs.Graphics().p("AQYdYQsHg8n5pNQn6pOA8sFQA7sGJNn6MAmJAsdQoQHFqjAAQhPAAhRgGg");
	var mask_graphics_564 = new cjs.Graphics().p("AQydbQsIgqoGpDQoHpCArsGQApsIJCoHMAnHArnQoXHgq+AAQg5AAg6gDg");
	var mask_graphics_565 = new cjs.Graphics().p("ARMdcQsJgYoSo3QoUo3AasGQAXsII3oUMAoFAqtQoeH8rbAAIhFgBg");
	var mask_graphics_566 = new cjs.Graphics().p("ARnddQsJgHogorQogoqAJsIQAGsIIrogMApBApzQojIZr6AAIgVAAg");
	var mask_graphics_567 = new cjs.Graphics().p("AizVJQosofgJsIQgLsHIeotMAp9Ao5QofIssHAKIgcAAQr3AAoioUg");
	var mask_graphics_568 = new cjs.Graphics().p("AijVlQo4oRgbsIQgcsHISo4MAq2An7QoSI5sHAbIhLABQraAAobn4g");
	var mask_graphics_569 = new cjs.Graphics().p("AiSWBQpEoEgssIQgtsGIFpEMAruAm+QoFJEsGAtQg+ADg8AAQq8AAoVncg");
	var mask_graphics_570 = new cjs.Graphics().p("AiBWdQpPn4g9sGQg/sFH4pPMAsmAl/Qn4JPsFA+QhVAGhTAAQqgAAoOnAg");
	var mask_graphics_571 = new cjs.Graphics().p("AhuW3QpanqhOsFQhRsDHrpbMAtbAk/QnrJbsDBPQhrALhpAAQqFAAoGmng");
	var mask_graphics_572 = new cjs.Graphics().p("AhaXRQpmndhfsDQhhsBHdplMAuPAj9QndJlsBBhQiCAQh9AAQpsAAn9mNg");
	var mask_graphics_573 = new cjs.Graphics().p("AhGXqQpvnPhxsAQhyr/HPpwMAvBAi7QnPJvr/ByQiXAWiSAAQpTAAn0l0g");
	var mask_graphics_574 = new cjs.Graphics().p("AgwYCQp6nBiCr9QiDr9HBp6MAvzAh3QnBJ6r9CDQitAdimAAQo6AAnqlcg");
	var mask_graphics_575 = new cjs.Graphics().p("AgaYaQqEmziSr7QiVr5GzqDMAwjAgyQmzKEr6CTQjBAli6AAQojAAnglEg");
	var mask_graphics_576 = new cjs.Graphics().p("AgCYxQqOmlijr3Qimr1GlqOMAxQAfsQmkKOr2CkQjWAvjOAAQoMAAnUkug");
	var mask_graphics_577 = new cjs.Graphics().p("AAVZGQqWmVi0rzQi3ryGWqXMAx9AemQmWKWryC2QjpA4jhAAQn2AAnKkZg");
	var mask_graphics_578 = new cjs.Graphics().p("AAuZcQqemHjGrvQjHruGHqfMAyoAdeQmHKfruDGQj9BDj0AAQnhAAm9kDg");
	var mask_graphics_579 = new cjs.Graphics().p("ABIZwQqnl4jWrqQjYrpF4qoMAzRAcVQl4KorpDXQkQBOkHAAQnMAAmwjvg");
	var mask_graphics_580 = new cjs.Graphics().p("ABjaEQqvlpjnrlQjorkFoqwMAz5AbLQlpKwrkDnQkiBbkaAAQm3AAmjjbg");
	var mask_graphics_581 = new cjs.Graphics().p("AB/aXQq4laj3rgQj5reFaq4MA0eAaBQlZK4rfD3Qk0BoktAAQmjAAmUjIg");
	var mask_graphics_582 = new cjs.Graphics().p("ACbapQq/lKkHraQkJrZFJrAMA1DAY2QlJK/rZEIQlGB2lAAAQmPAAmGi2g");
	var mask_graphics_583 = new cjs.Graphics().p("AC4a6QrFk6kYrUQkarTE6rHMA1mAXqQk6LGrTEZQlWCElUAAQl7AAl3ilg");
	var mask_graphics_584 = new cjs.Graphics().p("ADXbKQrNkqkorNQkprOEprMMA2HAWcQkqLOrMEoQlnCUlnAAQlnAAlniVg");
	var mask_graphics_585 = new cjs.Graphics().p("AD1baQrTkak3rHQk6rGEarTMA2mAVOQkaLUrGE5Ql2Ckl6AAQlVAAlXiFg");
	var mask_graphics_586 = new cjs.Graphics().p("AEVbpQrZkKlHrAQlKq/EKrZMA3DAUAQkKLaq+FIQmGC2mOAAQlBAAlGh2g");
	var mask_graphics_587 = new cjs.Graphics().p("AE2b2Qrfj5lXq4QlZq4D5rfMA3fASyQj5Lgq3FXQmVDImhAAQkuAAk1hpg");
	var mask_graphics_588 = new cjs.Graphics().p("AFXcEQrkjplnqxQloqwDorkMA35ARiQjoLlqwFnQmiDbm2AAQkbAAkjhbg");
	var mask_graphics_589 = new cjs.Graphics().p("AF5cQQrqjYl1qpQl4qnDYrqMA4RAQSQjYLrqnF2QmwDunKAAQkIAAkRhPg");
	var mask_graphics_590 = new cjs.Graphics().p("AGbcbQrujHmEqgQmHqfDHruMA4oAPBQjILvqeGFQm9ECngABQj1AAj+hEg");
	var mask_graphics_591 = new cjs.Graphics().p("AG/cmQrzi3mTqXQmWqWC3ryMA48ANwQi3LzqWGUQnJEXn1AAQjiAAjqg4g");
	var mask_graphics_592 = new cjs.Graphics().p("AHjcvQr2immjqOQmkqMCmr2MA5OAMeQilL3qNGjQnVEtoLAAQjOAAjXgvg");
	var mask_graphics_593 = new cjs.Graphics().p("AIHc4Qr5iVmxqEQmzqECVr5MA5fALMQiUL7qDGxQnhFEohAAQi7AAjDgmg");
	var mask_graphics_594 = new cjs.Graphics().p("AJudLQsBhmnXppQnZpoBmsBMA6FAHsQhnMCpnHYQn8GEpjAAQiEAAiJgSg");
	var mask_graphics_595 = new cjs.Graphics().p("ALadXQsGg3n8pLQn+pKA4sGMA6bAEJQg3MHpKH8QoSHLqrAAQhKAAhLgFg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(531).to({graphics:mask_graphics_531,x:180.6,y:188.8}).wait(1).to({graphics:mask_graphics_532,x:181.8,y:188.8}).wait(1).to({graphics:mask_graphics_533,x:183.9,y:188.8}).wait(1).to({graphics:mask_graphics_534,x:186,y:188.8}).wait(1).to({graphics:mask_graphics_535,x:188,y:188.8}).wait(1).to({graphics:mask_graphics_536,x:190.1,y:188.8}).wait(1).to({graphics:mask_graphics_537,x:192.2,y:188.8}).wait(1).to({graphics:mask_graphics_538,x:194.3,y:188.8}).wait(1).to({graphics:mask_graphics_539,x:196.3,y:188.9}).wait(1).to({graphics:mask_graphics_540,x:198.4,y:188.9}).wait(1).to({graphics:mask_graphics_541,x:200.4,y:188.9}).wait(1).to({graphics:mask_graphics_542,x:202.5,y:188.9}).wait(1).to({graphics:mask_graphics_543,x:204.5,y:188.9}).wait(1).to({graphics:mask_graphics_544,x:206.5,y:188.9}).wait(1).to({graphics:mask_graphics_545,x:208.5,y:188.9}).wait(1).to({graphics:mask_graphics_546,x:210.5,y:189}).wait(1).to({graphics:mask_graphics_547,x:212.4,y:189}).wait(1).to({graphics:mask_graphics_548,x:214.4,y:189}).wait(1).to({graphics:mask_graphics_549,x:216.3,y:188.9}).wait(1).to({graphics:mask_graphics_550,x:218.2,y:188.9}).wait(1).to({graphics:mask_graphics_551,x:220.1,y:188.9}).wait(1).to({graphics:mask_graphics_552,x:222,y:188.9}).wait(1).to({graphics:mask_graphics_553,x:223.9,y:188.9}).wait(1).to({graphics:mask_graphics_554,x:225.7,y:188.9}).wait(1).to({graphics:mask_graphics_555,x:227.5,y:188.8}).wait(1).to({graphics:mask_graphics_556,x:229.3,y:188.8}).wait(1).to({graphics:mask_graphics_557,x:231.1,y:188.8}).wait(1).to({graphics:mask_graphics_558,x:232.8,y:188.7}).wait(1).to({graphics:mask_graphics_559,x:234.5,y:188.7}).wait(1).to({graphics:mask_graphics_560,x:236.2,y:188.7}).wait(1).to({graphics:mask_graphics_561,x:237.9,y:188.7}).wait(1).to({graphics:mask_graphics_562,x:239.5,y:188.6}).wait(1).to({graphics:mask_graphics_563,x:241.1,y:188.6}).wait(1).to({graphics:mask_graphics_564,x:242.6,y:188.6}).wait(1).to({graphics:mask_graphics_565,x:244.2,y:188.5}).wait(1).to({graphics:mask_graphics_566,x:245.7,y:188.5}).wait(1).to({graphics:mask_graphics_567,x:247.2,y:188.5}).wait(1).to({graphics:mask_graphics_568,x:248.6,y:188.5}).wait(1).to({graphics:mask_graphics_569,x:250,y:188.5}).wait(1).to({graphics:mask_graphics_570,x:251.4,y:188.5}).wait(1).to({graphics:mask_graphics_571,x:252.7,y:188.6}).wait(1).to({graphics:mask_graphics_572,x:254,y:188.6}).wait(1).to({graphics:mask_graphics_573,x:255.2,y:188.6}).wait(1).to({graphics:mask_graphics_574,x:256.5,y:188.6}).wait(1).to({graphics:mask_graphics_575,x:257.7,y:188.6}).wait(1).to({graphics:mask_graphics_576,x:258.8,y:188.7}).wait(1).to({graphics:mask_graphics_577,x:259.9,y:188.7}).wait(1).to({graphics:mask_graphics_578,x:261,y:188.7}).wait(1).to({graphics:mask_graphics_579,x:262,y:188.7}).wait(1).to({graphics:mask_graphics_580,x:263,y:188.7}).wait(1).to({graphics:mask_graphics_581,x:263.9,y:188.7}).wait(1).to({graphics:mask_graphics_582,x:264.8,y:188.7}).wait(1).to({graphics:mask_graphics_583,x:265.7,y:188.7}).wait(1).to({graphics:mask_graphics_584,x:266.5,y:188.7}).wait(1).to({graphics:mask_graphics_585,x:267.3,y:188.7}).wait(1).to({graphics:mask_graphics_586,x:268,y:188.7}).wait(1).to({graphics:mask_graphics_587,x:268.7,y:188.7}).wait(1).to({graphics:mask_graphics_588,x:269.3,y:188.7}).wait(1).to({graphics:mask_graphics_589,x:269.9,y:188.7}).wait(1).to({graphics:mask_graphics_590,x:270.5,y:188.7}).wait(1).to({graphics:mask_graphics_591,x:271,y:188.6}).wait(1).to({graphics:mask_graphics_592,x:271.4,y:188.6}).wait(1).to({graphics:mask_graphics_593,x:271.8,y:188.6}).wait(1).to({graphics:mask_graphics_594,x:272.8,y:188.5}).wait(1).to({graphics:mask_graphics_595,x:273.3,y:188.4}).wait(81));

	// 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(20,1,1).p("A4xE7QH6FVKBhzQJLhRIQkMQIekSFvnn");
	this.shape_1.setTransform(337.6,266.5);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(531).to({_off:false},0).wait(145));

	// Layer 17 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_460 = new cjs.Graphics().p("Av4CJQC5ryKZmTQKXmSLyC6QLyC4GTKYMgyGAeXQmSqZC4rxg");
	var mask_1_graphics_461 = new cjs.Graphics().p("Av3CbQCsr1KSmeQKQmeL1CsQL1CrGfKRMgxkAfOQmeqRCrr0g");
	var mask_1_graphics_462 = new cjs.Graphics().p("Av0CtQCer4KKmpQKJmqL4CgQL4CdGqKKMgxAAgFQmqqKCfr3g");
	var mask_1_graphics_463 = new cjs.Graphics().p("AvyDAQCSr7KCm1QKCm1L6CTQL7CQG1KCMgwcAg8Qm1qDCRr5g");
	var mask_1_graphics_464 = new cjs.Graphics().p("AvuDTQCEr+J7nAQJ5nAL9CFQL9CDHAJ7Mgv2AhxQnAp7CEr7g");
	var mask_1_graphics_465 = new cjs.Graphics().p("AvqDmQB3sAJznLQJynLL/B4QL/B1HLJzMgvQAimQnLpyB2r+g");
	var mask_1_graphics_466 = new cjs.Graphics().p("AvkD5QBpsBJqnWQJqnWMBBqQMBBoHWJrMguoAjaQnWpqBpsAg");
	var mask_1_graphics_467 = new cjs.Graphics().p("AveEMQBbsDJjngQJhnhMDBdQMDBbHgJiMguAAkOQnhpiBcsCg");
	var mask_1_graphics_468 = new cjs.Graphics().p("AvYEgQBPsEJanrQJYnsMFBQQMEBNHrJZMgtXAlCQnspaBOsDg");
	var mask_1_graphics_469 = new cjs.Graphics().p("AvQE0QBBsGJRn1QJQn2MFBCQMGBAH2JRMgsuAl0Qn2pSBBsEg");
	var mask_1_graphics_470 = new cjs.Graphics().p("AvIFIQA0sGJIoAQJHoAMHA0QMGAyIAJJMgsDAmlQoApIAzsGg");
	var mask_1_graphics_471 = new cjs.Graphics().p("Au+FdQAlsIJAoKQI+oKMHAnQMHAlIKI/MgrXAnWQoKo/AmsGg");
	var mask_1_graphics_472 = new cjs.Graphics().p("Au0FxQAYsII2oTQI1oUMHAZQMIAXIUI2MgqrAoGQoTo2AYsHg");
	var mask_1_graphics_473 = new cjs.Graphics().p("AuqGGQALsIIsoeQIsodMIALQMIAKIeIsMgp+Ao2QodotAKsHg");
	var mask_1_graphics_474 = new cjs.Graphics().p("AueGbQgDsIIjonQIiooMIgCQMIgEInIjMgpPApkQonojgDsHg");
	var mask_1_graphics_475 = new cjs.Graphics().p("AuSGwQgRsHIaoxQIYoxMIgQQMIgRIxIZMgohAqSQowoagRsHg");
	var mask_1_graphics_476 = new cjs.Graphics().p("AuFHGQgesIIPo6QIPo6MHgdQMIgfI6IQMgnxAq+Qo6oQgesGg");
	var mask_1_graphics_477 = new cjs.Graphics().p("At3HcQgssHIGpDQIEpEMHgqQMHgtJDIGMgnAArqQpEoGgrsFg");
	var mask_1_graphics_478 = new cjs.Graphics().p("AtpHxQg5sGH7pMQH7pMMGg4QMFg6JNH7MgmPAsVQpMn7g6sFg");
	var mask_1_graphics_479 = new cjs.Graphics().p("AtZIHQhHsEHxpVQHwpVMFhGQMEhHJVHwMgldAtAQpVnxhGsEg");
	var mask_1_graphics_480 = new cjs.Graphics().p("AtJIeQhUsEHmpdQHlpeMEhTQMDhVJeHmMgkrAtpQpdnmhUsCg");
	var mask_1_graphics_481 = new cjs.Graphics().p("As4I0QhisCHcpmQHapmMChgQMChjJmHcMgj3AuRQpmnbhhsBg");
	var mask_1_graphics_482 = new cjs.Graphics().p("AsnJKQhvsAHRpuQHQpuMAhuQMAhwJuHRMgjDAu5QpunRhvr/g");
	var mask_1_graphics_483 = new cjs.Graphics().p("AsUJhQh9r+HGp2QHGp2L9h7QL+h+J2HGMgiOAvgQp2nGh8r9g");
	var mask_1_graphics_484 = new cjs.Graphics().p("AsBJ4QiKr8G6p+QG7p+L7iIQL7iLJ+G7MghZAwFQp9m7iJr6g");
	var mask_1_graphics_485 = new cjs.Graphics().p("AruKPQiXr6GwqFQGvqFL5iWQL4iYKGGvMggjAwqQqFmviXr4g");
	var mask_1_graphics_486 = new cjs.Graphics().p("ArZKmQilr3GlqNQGkqML1ikQL2ilKNGkMgfsAxOQqMmkikr1g");
	var mask_1_graphics_487 = new cjs.Graphics().p("ArEK9Qiyr0GZqUQGZqULyiwQLzizKUGZMge1AxxQqTmZixryg");
	var mask_1_graphics_488 = new cjs.Graphics().p("AquLUQi/rwGNqbQGNqbLwi+QLvjAKbGOMgd9AySQqamNi+rvg");
	var mask_1_graphics_489 = new cjs.Graphics().p("AqYLrQjMrsGCqiQGBqiLsjLQLsjNKiGCMgdEAyzQqhmBjMrsg");
	var mask_1_graphics_490 = new cjs.Graphics().p("AqAMDQjZrqF1qoQF2qoLojYQLpjaKoF2MgcLAzTQqol1jYrog");
	var mask_1_graphics_491 = new cjs.Graphics().p("ApoMaQjnrmFqquQFqqvLkjkQLljnKvFqMgbSAzyQqulqjlrkg");
	var mask_1_graphics_492 = new cjs.Graphics().p("ApQMyQjzriFeq0QFeq1LgjyQLgj0K1FeMgaXA0QQq1ldjyrgg");
	var mask_1_graphics_493 = new cjs.Graphics().p("Ao3NJQj/rdFRq6QFSq7Lbj/QLdkAK7FRMgZdA0tQq6lRkArcg");
	var mask_1_graphics_494 = new cjs.Graphics().p("AodNhQkMrZFFq/QFFrBLYkMQLXkNLBFGMgYiA1IQrAlFkMrXg");
	var mask_1_graphics_495 = new cjs.Graphics().p("AoCN5QkZrUE5rFQE5rHLSkYQLTkaLGE5MgXmA1kQrGk5kYrSg");
	var mask_1_graphics_496 = new cjs.Graphics().p("AnnORQkmrPEtrLQEsrMLOkkQLNkmLMEsMgWqA19QrLksklrNg");
	var mask_1_graphics_497 = new cjs.Graphics().p("AnLOpQkyrKEgrQQEgrRLIkxQLIkzLREgMgVuA2WQrPkfkyrIg");
	var mask_1_graphics_498 = new cjs.Graphics().p("AmuPBQk/rFETrUQETrWLDk9QLDlALWEUMgUxA2tQrUkTk+rCg");
	var mask_1_graphics_499 = new cjs.Graphics().p("AmRPZQlLq/EGrZQEHrbK9lJQK9lMLaEHMgTzA3EQrZkHlKq8g");
	var mask_1_graphics_500 = new cjs.Graphics().p("Al0PxQlXq5D6reQD6rfK3lWQK3lXLfD5MgS2A3aQrdj6lXq2g");
	var mask_1_graphics_501 = new cjs.Graphics().p("AlLQQQloqwDprkQDorkKwlmQKvloLkDpMgRjA31Qrkjpllqvg");
	var mask_1_graphics_502 = new cjs.Graphics().p("AkiQwQl3qoDXroQDXrqKnl2QKnl3LpDXMgQPA4OQrqjXl1qng");
	var mask_1_graphics_503 = new cjs.Graphics().p("Aj4RQQmHqfDGrtQDGrvKemFQKemILuDGMgO7A4mQrvjGmFqeg");
	var mask_1_graphics_504 = new cjs.Graphics().p("AjNRwQmWqWC1ryQC0rzKVmVQKUmWLzC0MgNnA47Qrzi1mVqUg");
	var mask_1_graphics_505 = new cjs.Graphics().p("AigSQQmmqMCjr2QCjr3KLmkQKLmmL3CjMgMTA5OQr3ijmjqLg");
	var mask_1_graphics_506 = new cjs.Graphics().p("AhzSwQm1qCCSr6QCRr7KBmzQKBm1L7CSMgK+A5fQr6iRmzqBg");
	var mask_1_graphics_507 = new cjs.Graphics().p("AhFTQQnDp4B/r9QCAr+J3nCQJ3nEL+CAMgJpA5vQr+iAnBp2g");
	var mask_1_graphics_508 = new cjs.Graphics().p("AgWTvQnSptBusAQBusAJsnRQJtnSMABuMgISA58QsBhunQpsg");
	var mask_1_graphics_509 = new cjs.Graphics().p("AAZUPQnfpjBcsCQBcsCJinfQJhnhMDBcMgG9A6IQsDhcnfphg");
	var mask_1_graphics_510 = new cjs.Graphics().p("ABKUuQntpXBKsEQBKsFJWntQJWnuMFBKMgFmA6RQsFhKntpWg");
	var mask_1_graphics_511 = new cjs.Graphics().p("AB8VOQn7pMA4sFQA4sHJLn6QJKn9MGA4MgEPA6ZQsGg4n7pKg");
	var mask_1_graphics_512 = new cjs.Graphics().p("ACuVtQoIpAAmsHQAmsHI/oIQI+oKMIAmMgC5A6eQsIgmoIo+g");
	var mask_1_graphics_513 = new cjs.Graphics().p("ADhWMQoVo0AUsIQAUsHIzoWQIyoXMIAVMgBiA6hQsIgUoWoyg");
	var mask_1_graphics_514 = new cjs.Graphics().p("AEVWrQoionACsJQACsHImojQImokMIADMgALA6iQsIgCojolg");
	var mask_1_graphics_515 = new cjs.Graphics().p("AEkXJQovoagQsJQgQsHIZovQIZowMIgQMABMA6iIgsAAQrsAAofoJg");
	var mask_1_graphics_516 = new cjs.Graphics().p("AEuXnQo8oOgisHQghsHIMo8QILo8MIgiMACjA6fQgvACguAAQrNAAoZnrg");
	var mask_1_graphics_517 = new cjs.Graphics().p("AE5YDQpIn/g0sHQg0sGH/pIQH+pIMHg0MAD6A6bQhIAFhFAAQqwAAoRnQg");
	var mask_1_graphics_518 = new cjs.Graphics().p("AFEYfQpUnyhFsFQhGsFHxpTQHwpUMGhGMAFQA6UQhfAJhcAAQqTAAoKm0g");
	var mask_1_graphics_519 = new cjs.Graphics().p("AFQY6QpfnkhYsDQhXsDHjpfQHipfMEhYMAGnA6LQh3AOhyAAQp4AAoBmZg");
	var mask_1_graphics_520 = new cjs.Graphics().p("AFdZVQpqnWhqsCQhpsAHWpqQHTprMBhpMAH+A6BQiOATiIAAQpdAAn4l+g");
	var mask_1_graphics_521 = new cjs.Graphics().p("AFqZuQp1nHh7r/Qh7r+HHp0QHFp2L/h7MAJTA50QikAaidAAQpEAAnullg");
	var mask_1_graphics_522 = new cjs.Graphics().p("AF4aHQp/m5iNr7QiNr7G5p/QG2qAL7iNMAKpA5lQi5AjiyAAQosAAnjlNg");
	var mask_1_graphics_523 = new cjs.Graphics().p("AGHafQqKmqier4Qifr3GqqJQGnqKL4ifMAL/A5VQjPArjHAAQoTAAnYk1g");
	var mask_1_graphics_524 = new cjs.Graphics().p("AGWa2QqTmaiwr1Qixr0GbqSQGYqUL1iwMANTA5CQjkA1jbAAQn8AAnMkeg");
	var mask_1_graphics_525 = new cjs.Graphics().p("AGmbMQqcmLjCrwQjCrvGLqcQGJqdLwjCMAOoA4tQj4BAjvAAQnlAAnAkIg");
	var mask_1_graphics_526 = new cjs.Graphics().p("AG3biQqml8jTrrQjTrrF8qlQF5qmLrjTMAP8A4XQkMBLkDAAQnPAAmyjyg");
	var mask_1_graphics_527 = new cjs.Graphics().p("AHIb2QqulrjlrnQjkrlFsquQFpqvLnjkMARPA3+QkfBZkXAAQm6AAmkjfg");
	var mask_1_graphics_528 = new cjs.Graphics().p("AHacKQq2lcj2rhQj2rgFcq2QFaq3Lgj1MASiA3kQkxBmkrAAQmkAAmWjLg");
	var mask_1_graphics_529 = new cjs.Graphics().p("AHscdQq+lMkHrbQkGrbFMq9QFKq/LakGMAT0A3HQlEB1k+AAQmQAAmHi4g");
	var mask_1_graphics_530 = new cjs.Graphics().p("AIAcvQrGk7kYrVQkXrVE7rFQE6rGLUkXMAVFA2pQlVCElSAAQl7AAl3img");
	var mask_1_graphics_531 = new cjs.Graphics().p("AIUdAQrNkrkprOQkorOErrMQEprNLNkpMAWXA2KQlnCUlmAAQlnAAlmiVg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(460).to({graphics:mask_1_graphics_460,x:240.8,y:155.5}).wait(1).to({graphics:mask_1_graphics_461,x:240,y:156.8}).wait(1).to({graphics:mask_1_graphics_462,x:239.1,y:158.2}).wait(1).to({graphics:mask_1_graphics_463,x:238.2,y:159.6}).wait(1).to({graphics:mask_1_graphics_464,x:237.2,y:160.9}).wait(1).to({graphics:mask_1_graphics_465,x:236.3,y:162.2}).wait(1).to({graphics:mask_1_graphics_466,x:235.3,y:163.5}).wait(1).to({graphics:mask_1_graphics_467,x:234.3,y:164.8}).wait(1).to({graphics:mask_1_graphics_468,x:233.3,y:166.1}).wait(1).to({graphics:mask_1_graphics_469,x:232.3,y:167.4}).wait(1).to({graphics:mask_1_graphics_470,x:231.2,y:168.6}).wait(1).to({graphics:mask_1_graphics_471,x:230.1,y:169.8}).wait(1).to({graphics:mask_1_graphics_472,x:229,y:171}).wait(1).to({graphics:mask_1_graphics_473,x:227.9,y:172.2}).wait(1).to({graphics:mask_1_graphics_474,x:226.7,y:173.3}).wait(1).to({graphics:mask_1_graphics_475,x:225.6,y:174.5}).wait(1).to({graphics:mask_1_graphics_476,x:224.4,y:175.6}).wait(1).to({graphics:mask_1_graphics_477,x:223.2,y:176.7}).wait(1).to({graphics:mask_1_graphics_478,x:222,y:177.7}).wait(1).to({graphics:mask_1_graphics_479,x:220.7,y:178.8}).wait(1).to({graphics:mask_1_graphics_480,x:219.5,y:179.8}).wait(1).to({graphics:mask_1_graphics_481,x:218.2,y:180.8}).wait(1).to({graphics:mask_1_graphics_482,x:216.9,y:181.8}).wait(1).to({graphics:mask_1_graphics_483,x:215.6,y:182.8}).wait(1).to({graphics:mask_1_graphics_484,x:214.2,y:183.7}).wait(1).to({graphics:mask_1_graphics_485,x:212.9,y:184.6}).wait(1).to({graphics:mask_1_graphics_486,x:211.5,y:185.5}).wait(1).to({graphics:mask_1_graphics_487,x:210.1,y:186.4}).wait(1).to({graphics:mask_1_graphics_488,x:208.7,y:187.2}).wait(1).to({graphics:mask_1_graphics_489,x:207.3,y:188}).wait(1).to({graphics:mask_1_graphics_490,x:205.9,y:188.8}).wait(1).to({graphics:mask_1_graphics_491,x:204.5,y:189.6}).wait(1).to({graphics:mask_1_graphics_492,x:203,y:190.3}).wait(1).to({graphics:mask_1_graphics_493,x:201.6,y:191}).wait(1).to({graphics:mask_1_graphics_494,x:200.1,y:191.7}).wait(1).to({graphics:mask_1_graphics_495,x:198.6,y:192.4}).wait(1).to({graphics:mask_1_graphics_496,x:197.1,y:193}).wait(1).to({graphics:mask_1_graphics_497,x:195.6,y:193.6}).wait(1).to({graphics:mask_1_graphics_498,x:194.1,y:194.2}).wait(1).to({graphics:mask_1_graphics_499,x:192.5,y:194.8}).wait(1).to({graphics:mask_1_graphics_500,x:191,y:195.3}).wait(1).to({graphics:mask_1_graphics_501,x:188.9,y:196}).wait(1).to({graphics:mask_1_graphics_502,x:186.8,y:196.6}).wait(1).to({graphics:mask_1_graphics_503,x:184.7,y:197.2}).wait(1).to({graphics:mask_1_graphics_504,x:182.6,y:197.7}).wait(1).to({graphics:mask_1_graphics_505,x:180.5,y:198.2}).wait(1).to({graphics:mask_1_graphics_506,x:178.4,y:198.6}).wait(1).to({graphics:mask_1_graphics_507,x:176.3,y:199}).wait(1).to({graphics:mask_1_graphics_508,x:174.1,y:199.3}).wait(1).to({graphics:mask_1_graphics_509,x:172,y:199.6}).wait(1).to({graphics:mask_1_graphics_510,x:169.8,y:199.8}).wait(1).to({graphics:mask_1_graphics_511,x:167.6,y:200}).wait(1).to({graphics:mask_1_graphics_512,x:165.5,y:200.1}).wait(1).to({graphics:mask_1_graphics_513,x:163.3,y:200.2}).wait(1).to({graphics:mask_1_graphics_514,x:161.1,y:200.2}).wait(1).to({graphics:mask_1_graphics_515,x:162.7,y:200.2}).wait(1).to({graphics:mask_1_graphics_516,x:164.9,y:200.2}).wait(1).to({graphics:mask_1_graphics_517,x:167.1,y:200.3}).wait(1).to({graphics:mask_1_graphics_518,x:169.2,y:200.3}).wait(1).to({graphics:mask_1_graphics_519,x:171.4,y:200.3}).wait(1).to({graphics:mask_1_graphics_520,x:173.6,y:200.3}).wait(1).to({graphics:mask_1_graphics_521,x:175.7,y:200.3}).wait(1).to({graphics:mask_1_graphics_522,x:177.8,y:200.4}).wait(1).to({graphics:mask_1_graphics_523,x:180,y:200.4}).wait(1).to({graphics:mask_1_graphics_524,x:182.1,y:200.4}).wait(1).to({graphics:mask_1_graphics_525,x:184.2,y:200.4}).wait(1).to({graphics:mask_1_graphics_526,x:186.3,y:200.4}).wait(1).to({graphics:mask_1_graphics_527,x:188.4,y:200.5}).wait(1).to({graphics:mask_1_graphics_528,x:190.4,y:200.5}).wait(1).to({graphics:mask_1_graphics_529,x:192.5,y:200.5}).wait(1).to({graphics:mask_1_graphics_530,x:194.5,y:200.5}).wait(1).to({graphics:mask_1_graphics_531,x:196.6,y:200.5}).wait(145));

	// 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(20,1,1).p("A4xE7QH6FVKBhzQJLhRIQkMQIekSFvnn");
	this.shape_2.setTransform(337.6,266.5);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(460).to({_off:false},0).wait(216));

	// Layer 22
	this.instance_2 = new lib.ar4("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(40.2,411.2,1,1,0,131.2,-48.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(250).to({_off:false},0).wait(426));

	// Layer 15 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_379 = new cjs.Graphics().p("A4tQeQAAsJIkojQImomMIAAQMJAAIkImQImIjAAMJg");
	var mask_2_graphics_380 = new cjs.Graphics().p("A4sO+QAbsII2oRQI5oSMHAaQMJAbIRI4QISI2gaMIg");
	var mask_2_graphics_381 = new cjs.Graphics().p("A4pNeQA1sHJJn9QJKn+MGA1QMHA1H9JKQH/JHg1MHg");
	var mask_2_graphics_382 = new cjs.Graphics().p("A4kL+QBQsEJZnpQJcnqMDBPQMFBQHpJbQHrJZhQMEg");
	var mask_2_graphics_383 = new cjs.Graphics().p("A4cKfQBqsBJpnUQJsnWMBBqQMBBqHUJsQHWJphqMBg");
	var mask_2_graphics_384 = new cjs.Graphics().p("A4TJAQCEr9J6m/QJ7nAL8CEQL+CFG+J7QHBJ4iFL+g");
	var mask_2_graphics_385 = new cjs.Graphics().p("A4HHhQCer4KImoQKKmqL4CeQL4CeGpKKQGqKIieL4g");
	var mask_2_graphics_386 = new cjs.Graphics().p("A36GDQC5rxKWmTQKYmTLyC4QLzC4GSKYQGUKWi5Lzg");
	var mask_2_graphics_387 = new cjs.Graphics().p("A3qEmQDSrrKkl7QKll9LsDSQLrDSF8KmQF8KjjSLsg");
	var mask_2_graphics_388 = new cjs.Graphics().p("A3YDKQDsrjKwlkQKylmLkDsQLkDrFkKyQFlKwjrLkg");
	var mask_2_graphics_389 = new cjs.Graphics().p("A3DBvQEErbK9lMQK9lOLbEFQLcEFFMK9QFOK8kFLcg");
	var mask_2_graphics_390 = new cjs.Graphics().p("A2tAVQEerSLHk0QLIk1LSEeQLSEdE0LJQE2LGkeLTg");
	var mask_2_graphics_391 = new cjs.Graphics().p("A2UhDQE2rILRkcQLSkcLIE2QLIE2EbLSQEdLRk2LIg");
	var mask_2_graphics_392 = new cjs.Graphics().p("A16ibQFPq9LakDQLckDK9FOQK9FOECLbQEELblOK9g");
	var mask_2_graphics_393 = new cjs.Graphics().p("A1djxQFmqxLjjqQLkjqKxFmQKxFmDpLjQDrLklmKxg");
	var mask_2_graphics_394 = new cjs.Graphics().p("A0+lGQF9qkLrjQQLrjRKlF9QKkF+DQLqQDRLsl9Kkg");
	var mask_2_graphics_395 = new cjs.Graphics().p("A0dmZQGUqWLxi3QLyi3KXGUQKXGUC2LyQC4LymVKXg");
	var mask_2_graphics_396 = new cjs.Graphics().p("Az7nqQGrqJL3icQL4idKJGqQKIGrCcL3QCeL4mrKJg");
	var mask_2_graphics_397 = new cjs.Graphics().p("AzWo5QHBp6L7iDQL9iDJ6HBQJ6HBCBL8QCEL8nBJ6g");
	var mask_2_graphics_398 = new cjs.Graphics().p("AywqHQHWpqL/hoQMChpJqHWQJqHWBnMAQBqMBnWJqg");
	var mask_2_graphics_399 = new cjs.Graphics().p("AyIrSQHrpaMChOQMFhOJZHrQJaHrBNMDQBPMDnrJag");
	var mask_2_graphics_400 = new cjs.Graphics().p("AxescQH/pIMEg0QMHg0JJIAQJIH/AzMFQA0MGn/JIg");
	var mask_2_graphics_401 = new cjs.Graphics().p("AwztjQITo3MFgZQMJgZI2ITQI3ITAYMGQAaMHoTI3g");
	var mask_2_graphics_402 = new cjs.Graphics().p("AwGuoQImokMGABQMIACIkIlQIkImgCMHQAAMIomIkg");
	var mask_2_graphics_403 = new cjs.Graphics().p("AvYvrQI4oRMFAcQMJAcIRI4QIQI5gdMGQgaMHo5IRg");
	var mask_2_graphics_404 = new cjs.Graphics().p("AupwrQJKn9MEA2QMHA3H9JKQH9JKg3MEQg2MGpKH9g");
	var mask_2_graphics_405 = new cjs.Graphics().p("At4xpQJbnpMCBRQMEBRHpJbQHoJbhRMCQhQMEpbHpg");
	var mask_2_graphics_406 = new cjs.Graphics().p("AtGykQJsnUL+BrQMBBrHUJsQHUJrhtL/QhqMAprHUg");
	var mask_2_graphics_407 = new cjs.Graphics().p("AsSzdQJ7m+L6CFQL9CGG+J7QG+J7iGL6QiFL9p7G+g");
	var mask_2_graphics_408 = new cjs.Graphics().p("Are0TQKKmoL1CfQL4CgGoKKQGpKKihL1QieL4qKGog");
	var mask_2_graphics_409 = new cjs.Graphics().p("Aqo1GQKYmSLvC5QLyC6GSKYQGSKYi7LwQi4LxqYGSg");
	var mask_2_graphics_410 = new cjs.Graphics().p("Apx12QKll7LpDSQLrDUF7KlQF7KljULpQjSLrqmF7g");
	var mask_2_graphics_411 = new cjs.Graphics().p("Ao52kQKxljLiDsQLjDsFkKyQFjKxjtLiQjsLjqxFkg");
	var mask_2_graphics_412 = new cjs.Graphics().p("AoA3PQK9lLLZEFQLbEGFMK9QFLK9kGLaQkFLaq9FMg");
	var mask_2_graphics_413 = new cjs.Graphics().p("AnF33QLIkzLPEeQLSEfEzLJQEzLHkfLRQkeLRrIEzg");
	var mask_2_graphics_414 = new cjs.Graphics().p("AmJ4cQLSkaLFE3QLHE3EbLTQEaLSk4LGQk2LGrTEbg");
	var mask_2_graphics_415 = new cjs.Graphics().p("AlN49QLckCK6FPQK8FQEBLcQEBLblQK7QlPK8rcEBg");
	var mask_2_graphics_416 = new cjs.Graphics().p("AkP5cQLjjoKvFnQKwFoDoLkQDoLklpKuQlmKwrlDog");
	var mask_2_graphics_417 = new cjs.Graphics().p("AjR54QLrjOKiF+QKjGADOLsQDOLrl/KiQl+KjrtDOg");
	var mask_2_graphics_418 = new cjs.Graphics().p("AiS6QQLyi0KUGVQKVGXC0LyQC1LymXKUQmVKWrzC0g");
	var mask_2_graphics_419 = new cjs.Graphics().p("AhT6lQL4iaKFGsQKIGtCaL4QCaL4mtKGQmsKHr5Cag");
	var mask_2_graphics_420 = new cjs.Graphics().p("AgT63QL9iAJ2HCQJ4HDCAL+QCAL8nEJ3QnBJ4r+B/g");
	var mask_2_graphics_421 = new cjs.Graphics().p("AAt7FQMBhmJmHYQJoHYBmMCQBlMAnZJnQnXJosBBlg");
	var mask_2_graphics_422 = new cjs.Graphics().p("ABt7QQMFhLJVHsQJYHuBLMEQBKMEntJWQnsJXsFBLg");
	var mask_2_graphics_423 = new cjs.Graphics().p("ACu7YQMGgwJFIAQJGICAwMGQAwMGoCJFQoAJGsHAwg");
	var mask_2_graphics_424 = new cjs.Graphics().p("ADv7dQMHgVIzIUQI0IWAVMHQAWMHoWIzQoUI0sIAVg");
	var mask_2_graphics_425 = new cjs.Graphics().p("AEVfCMAAag6gQMIAGIgInQIhIpgFMHQgFMIopIgQoiIcr/AAIgPgBg");
	var mask_2_graphics_426 = new cjs.Graphics().p("ADVfBMACbg6eQMHAhINI5QINI8ggMGQggMIo7IMQoZHvrQABQgsAAgsgCg");
	var mask_2_graphics_427 = new cjs.Graphics().p("ACUe8MAEcg6VQMGA7H4JLQH6JNg7MFQg7MGpNH4QoOHGqkAAQhOAAhRgHg");
	var mask_2_graphics_428 = new cjs.Graphics().p("ABTe2MAGdg6KQMDBWHkJcQHmJfhWMCQhWMDpeHkQoCGdp6AAQhwAAh0gNg");
	var mask_2_graphics_429 = new cjs.Graphics().p("AATetMAIdg55QMABwHOJtQHRJvhxL/QhwMApuHOQn0F2pUAAQiQAAiVgWg");
	var mask_2_graphics_430 = new cjs.Graphics().p("AgseiMAKbg5kQL8CKG5J9QG6J+iLL7QiKL7p+G5QnlFRovAAQiuAAi1ghg");
	var mask_2_graphics_431 = new cjs.Graphics().p("AiAeQMANCg5CQL0CtGcKQQGdKRitL0QitL1qRGbQnPEjoAAAQjXAAjegzg");
	var mask_2_graphics_432 = new cjs.Graphics().p("AjTd7MAPng4ZQLsDPF+KiQF+KkjPLrQjPLsqkF9Qm2D5nUAAQj+AAkFhJg");
	var mask_2_graphics_433 = new cjs.Graphics().p("AkldiMASKg3pQLiDxFfKzQFfK1jxLhQjxLiq0FeQmaDRmrAAQkkAAkrhig");
	var mask_2_graphics_434 = new cjs.Graphics().p("Al2dFMAUrg2wQLXESE+LCQFALDkSLXQkTLWrDE+Ql9CtmCAAQlKAAlPh/g");
	var mask_2_graphics_435 = new cjs.Graphics().p("AnFclMAXJg1xQLJE0EfLPQEfLRkzLJQkzLKrREdQldCMlbAAQlxAAlwifg");
	var mask_2_graphics_436 = new cjs.Graphics().p("AoScCMAZkg0qQK6FTD+LcQD+LdlTK7QlTK6reD9Qk6Buk0AAQmZAAmPjCg");
	var mask_2_graphics_437 = new cjs.Graphics().p("ApebbMAb8gzdQKqFzDcLnQDdLolzKrQlyKqrpDbQkWBTkNAAQnDAAmrjog");
	var mask_2_graphics_438 = new cjs.Graphics().p("AqnaxMAePgyIQKZGRC6LwQC7LymRKZQmSKZrxC5QjwA8jnAAQntAAnFkSg");
	var mask_2_graphics_439 = new cjs.Graphics().p("ArvaEMAgggwuQKGGvCYL5QCYL5mvKGQmwKGr5CXQjHAojAAAQoaAAndk+g");
	var mask_2_graphics_440 = new cjs.Graphics().p("As0ZTMAirgvMQJyHMB1L/QB1L/nMJyQnMJyr/B0QidAYiXAAQpKAAnylug");
	var mask_2_graphics_441 = new cjs.Graphics().p("At3YgMAkygtlQJdHpBSMCQBSMEnoJdQnoJcsEBSQhxAMhtAAQp9AAoEmhg");
	var mask_2_graphics_442 = new cjs.Graphics().p("Au4XqMAm1gr3QJFIDAvMGQAwMHoEJGQoDJGsHAuQhCAEhBAAQq0AAoUnXg");
	var mask_2_graphics_443 = new cjs.Graphics().p("AuHYUMAlSgtMQJXHvBKMEQBKMFnuJXQnvJXsFBJQhmAKhjAAQqKAAoImtg");
	var mask_2_graphics_444 = new cjs.Graphics().p("AtUY8MAjrgudQJoHaBlMAQBlMCnZJpQnaJosBBkQiJASiEAAQphAAn7mGg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(379).to({graphics:mask_2_graphics_379,x:216.8,y:105.4}).wait(1).to({graphics:mask_2_graphics_380,x:216.8,y:108.6}).wait(1).to({graphics:mask_2_graphics_381,x:216.8,y:111.8}).wait(1).to({graphics:mask_2_graphics_382,x:216.8,y:115}).wait(1).to({graphics:mask_2_graphics_383,x:216.8,y:118.2}).wait(1).to({graphics:mask_2_graphics_384,x:216.9,y:121.4}).wait(1).to({graphics:mask_2_graphics_385,x:216.9,y:124.5}).wait(1).to({graphics:mask_2_graphics_386,x:216.9,y:127.7}).wait(1).to({graphics:mask_2_graphics_387,x:216.9,y:130.8}).wait(1).to({graphics:mask_2_graphics_388,x:216.9,y:133.8}).wait(1).to({graphics:mask_2_graphics_389,x:216.9,y:136.9}).wait(1).to({graphics:mask_2_graphics_390,x:216.9,y:139.9}).wait(1).to({graphics:mask_2_graphics_391,x:216.9,y:142.8}).wait(1).to({graphics:mask_2_graphics_392,x:216.9,y:145.7}).wait(1).to({graphics:mask_2_graphics_393,x:216.8,y:148.6}).wait(1).to({graphics:mask_2_graphics_394,x:216.8,y:151.4}).wait(1).to({graphics:mask_2_graphics_395,x:216.7,y:154.2}).wait(1).to({graphics:mask_2_graphics_396,x:216.7,y:156.9}).wait(1).to({graphics:mask_2_graphics_397,x:216.6,y:159.5}).wait(1).to({graphics:mask_2_graphics_398,x:216.6,y:162.1}).wait(1).to({graphics:mask_2_graphics_399,x:216.5,y:164.6}).wait(1).to({graphics:mask_2_graphics_400,x:216.5,y:167}).wait(1).to({graphics:mask_2_graphics_401,x:216.4,y:169.4}).wait(1).to({graphics:mask_2_graphics_402,x:216.4,y:171.7}).wait(1).to({graphics:mask_2_graphics_403,x:216.4,y:173.9}).wait(1).to({graphics:mask_2_graphics_404,x:216.4,y:176}).wait(1).to({graphics:mask_2_graphics_405,x:216.4,y:178.1}).wait(1).to({graphics:mask_2_graphics_406,x:216.5,y:180}).wait(1).to({graphics:mask_2_graphics_407,x:216.5,y:181.9}).wait(1).to({graphics:mask_2_graphics_408,x:216.5,y:183.7}).wait(1).to({graphics:mask_2_graphics_409,x:216.6,y:185.4}).wait(1).to({graphics:mask_2_graphics_410,x:216.6,y:187}).wait(1).to({graphics:mask_2_graphics_411,x:216.6,y:188.5}).wait(1).to({graphics:mask_2_graphics_412,x:216.6,y:189.9}).wait(1).to({graphics:mask_2_graphics_413,x:216.6,y:191.2}).wait(1).to({graphics:mask_2_graphics_414,x:216.6,y:192.4}).wait(1).to({graphics:mask_2_graphics_415,x:216.6,y:193.5}).wait(1).to({graphics:mask_2_graphics_416,x:216.5,y:194.5}).wait(1).to({graphics:mask_2_graphics_417,x:216.5,y:195.4}).wait(1).to({graphics:mask_2_graphics_418,x:216.5,y:196.2}).wait(1).to({graphics:mask_2_graphics_419,x:216.5,y:196.9}).wait(1).to({graphics:mask_2_graphics_420,x:216.4,y:197.4}).wait(1).to({graphics:mask_2_graphics_421,x:216.4,y:197.9}).wait(1).to({graphics:mask_2_graphics_422,x:216.3,y:198.3}).wait(1).to({graphics:mask_2_graphics_423,x:216.3,y:198.5}).wait(1).to({graphics:mask_2_graphics_424,x:216.3,y:198.6}).wait(1).to({graphics:mask_2_graphics_425,x:216.3,y:198.7}).wait(1).to({graphics:mask_2_graphics_426,x:216.3,y:198.7}).wait(1).to({graphics:mask_2_graphics_427,x:216.3,y:198.7}).wait(1).to({graphics:mask_2_graphics_428,x:216.4,y:198.7}).wait(1).to({graphics:mask_2_graphics_429,x:216.4,y:198.7}).wait(1).to({graphics:mask_2_graphics_430,x:216.5,y:198.7}).wait(1).to({graphics:mask_2_graphics_431,x:216.5,y:198.7}).wait(1).to({graphics:mask_2_graphics_432,x:216.6,y:198.8}).wait(1).to({graphics:mask_2_graphics_433,x:216.6,y:198.8}).wait(1).to({graphics:mask_2_graphics_434,x:216.7,y:198.8}).wait(1).to({graphics:mask_2_graphics_435,x:216.7,y:198.8}).wait(1).to({graphics:mask_2_graphics_436,x:216.7,y:198.8}).wait(1).to({graphics:mask_2_graphics_437,x:216.7,y:198.7}).wait(1).to({graphics:mask_2_graphics_438,x:216.7,y:198.7}).wait(1).to({graphics:mask_2_graphics_439,x:216.6,y:198.6}).wait(1).to({graphics:mask_2_graphics_440,x:216.6,y:198.5}).wait(1).to({graphics:mask_2_graphics_441,x:216.6,y:198.5}).wait(1).to({graphics:mask_2_graphics_442,x:216.5,y:198.5}).wait(1).to({graphics:mask_2_graphics_443,x:216.6,y:198.5}).wait(1).to({graphics:mask_2_graphics_444,x:216.6,y:198.6}).wait(232));

	// 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(20,1,1).p("A2xWzQkuicIdp4QIcp3GYmjQGXmjH0mvQH0mvEyF8QEyF8nFHyQnFHxn1g1Qn1gzhfiy");
	this.shape_3.setTransform(204.5,311.8);
	this.shape_3._off = true;

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(379).to({_off:false},0).wait(297));

	// Layer 13 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_365 = new cjs.Graphics().p("ALSLvQgMkOC2jIQC3jHENgMQEJgMDFCvItxPCQi/i0gMkIg");
	var mask_3_graphics_366 = new cjs.Graphics().p("AK8LKQANkODHi3QDIi2ENAMQEJAMC0C/IvDNxQiujFALkIg");
	var mask_3_graphics_367 = new cjs.Graphics().p("AKuKnQAkkMDXikQDXikEMAkQEGAjCjDPIwNMXQidjTAjkGg");
	var mask_3_graphics_368 = new cjs.Graphics().p("AKnKGQA8kIDliQQDkiQEIA8QECA6CPDdIxPK4QiJjhA6kCg");
	var mask_3_graphics_369 = new cjs.Graphics().p("AKnJoQBTkCDxh7QDwh7EBBTQD8BRB8DoIyJJTQh1jsBRj7g");
	var mask_3_graphics_370 = new cjs.Graphics().p("AKvJMQBpj5D7hlQD6hmD5BqQD0BnBmDyIy6HqQhfj1Boj0g");
	var mask_3_graphics_371 = new cjs.Graphics().p("AK9IzQB/juEDhPQEChPDvB/QDpB9BRD7IzhF7QhIj8B8jqg");
	var mask_3_graphics_372 = new cjs.Graphics().p("ALSIdQCUjiEJg3QEJg3DiCTQDdCRA6EBIz9ELQgykCCQjeg");
	var mask_3_graphics_373 = new cjs.Graphics().p("ALvILQCnjUENggQEMgfDUCnQDQCkAjEFI0QCYQgbkFCkjQg");
	var mask_3_graphics_374 = new cjs.Graphics().p("AMSH8QC5jEEPgIQEOgHDEC5QDAC2AMEHI0YAkQgEkHC2jAg");
	var mask_3_graphics_375 = new cjs.Graphics().p("AJhN/QATkHDGivQDLizEOAQQEOARCzDKQCvDGgMEHg");
	var mask_3_graphics_376 = new cjs.Graphics().p("AJnMoQArkDDVieQDaigELAoQELApCgDZQCdDVgjEFg");
	var mask_3_graphics_377 = new cjs.Graphics().p("AJyLSQBCj+DiiKQDniMEHBAQEHBACMDnQCJDig6EAg");
	var mask_3_graphics_378 = new cjs.Graphics().p("AKDJ/QBYj4Duh1QDyh3EABXQEABXB3DyQB1DuhRD6g");
	var mask_3_graphics_379 = new cjs.Graphics().p("AKYIuQBujvD3hfQD8hiD4BuQD3BtBhD8QBfD3hnDzg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(365).to({graphics:mask_3_graphics_365,x:180.6,y:119.5}).wait(1).to({graphics:mask_3_graphics_366,x:182.6,y:117.5}).wait(1).to({graphics:mask_3_graphics_367,x:184.5,y:115.2}).wait(1).to({graphics:mask_3_graphics_368,x:186.1,y:112.9}).wait(1).to({graphics:mask_3_graphics_369,x:187.6,y:110.3}).wait(1).to({graphics:mask_3_graphics_370,x:188.8,y:107.7}).wait(1).to({graphics:mask_3_graphics_371,x:189.8,y:104.9}).wait(1).to({graphics:mask_3_graphics_372,x:190.5,y:102.1}).wait(1).to({graphics:mask_3_graphics_373,x:191,y:99.2}).wait(1).to({graphics:mask_3_graphics_374,x:191.2,y:96.3}).wait(1).to({graphics:mask_3_graphics_375,x:191.2,y:97.4}).wait(1).to({graphics:mask_3_graphics_376,x:191.2,y:100.3}).wait(1).to({graphics:mask_3_graphics_377,x:191.1,y:103.1}).wait(1).to({graphics:mask_3_graphics_378,x:191.1,y:105.9}).wait(1).to({graphics:mask_3_graphics_379,x:191.1,y:108.7}).wait(297));

	// 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(20,1,1).p("A2xWzQkuicIdp4QIcp3GYmjQGXmjH0mvQH0mvEyF8QEyF8nFHyQnFHxn1g1Qn1gzhfiy");
	this.shape_4.setTransform(204.5,311.8);
	this.shape_4._off = true;

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(365).to({_off:false},0).wait(311));

	// Layer 11 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_349 = new cjs.Graphics().p("ATPVAQkNgciqjTQiqjSAckMQAckIDKioIM1P2QixCLjaAAQglAAgmgEg");
	var mask_4_graphics_350 = new cjs.Graphics().p("AStU4QkJg1iXjgQiWjgA0kJQAykEDZiWILXQ7QiiBqi5AAQhBAAhEgNg");
	var mask_4_graphics_351 = new cjs.Graphics().p("ASOUqQkDhMiDjsQiCjtBLkEQBKj+DliCIJ1R3QiSBNiaAAQhcAAhfgbg");
	var mask_4_graphics_352 = new cjs.Graphics().p("ARyUYQj8hjhtj3Qhtj3Bij8QBhj3DvhtIINSqQh9A1h/AAQh2AAh3gug");
	var mask_4_graphics_353 = new cjs.Graphics().p("ARYUBQjyh4hWkBQhXkAB4jyQB2jtD4hYIGhTVQhmAghkAAQiRAAiNhFg");
	var mask_4_graphics_354 = new cjs.Graphics().p("ARBTmQjmiOg/kGQhAkHCNjnQCLjiD+hBIEyT1QhMARhJAAQiuAAighhg");
	var mask_4_graphics_355 = new cjs.Graphics().p("AQuTGQjZihgokMQgnkLCgjZQCejVEEgqIC/ULQgvAGguAAQjOAAiuiBg");
	var mask_4_graphics_356 = new cjs.Graphics().p("AQeSiQjKi0gQkNQgQkOC0jKQCwjGEGgTIBNUWIghABQjyAAi6ilg");
	var mask_4_graphics_357 = new cjs.Graphics().p("AP+R7Qi6jFAJkOQAIkPDEi5QDBi1EHAEIgnUYQkHgMi1jAg");
	var mask_4_graphics_358 = new cjs.Graphics().p("AO7RSQinjVAgkMQAgkMDUinQDRikEFAbIibUQQkEgjikjQg");
	var mask_4_graphics_359 = new cjs.Graphics().p("AN8QpQiTjjA4kIQA3kJDjiTQDeiRECAzIkOT8QkAg6iRjdg");
	var mask_4_graphics_360 = new cjs.Graphics().p("ANDP/Qh/jvBPkCQBPkDDuh/QDqh8D9BJIl+TgQj6hRh8jpg");
	var mask_4_graphics_361 = new cjs.Graphics().p("AMOPVQhpj5Bmj6QBlj7D5hpQD0hnD1BfInrS5Qjyhmhnj0g");
	var mask_4_graphics_362 = new cjs.Graphics().p("ALfOsQhSkCB7jwQB7jwEChTQD8hRDrB1IpUSIQjoh7hRj8g");
	var mask_4_graphics_363 = new cjs.Graphics().p("AK2ODQg7kICQjkQCQjlEIg7QECg6DhCJIq5RPQjciQg7kCg");
	var mask_4_graphics_364 = new cjs.Graphics().p("AKTNbQgjkMCkjWQCkjXEMgkQEGgjDTCcIsXQNQjPiigkkHg");
	var mask_4_graphics_365 = new cjs.Graphics().p("AJ3M1QgMkOC3jIQC2jHEOgMQEJgMDECvItxPCQi/i0gMkIg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(349).to({graphics:mask_4_graphics_349,x:170.1,y:134.8}).wait(1).to({graphics:mask_4_graphics_350,x:167.7,y:134.9}).wait(1).to({graphics:mask_4_graphics_351,x:165.3,y:134.9}).wait(1).to({graphics:mask_4_graphics_352,x:162.7,y:135}).wait(1).to({graphics:mask_4_graphics_353,x:160,y:135}).wait(1).to({graphics:mask_4_graphics_354,x:157.2,y:135.1}).wait(1).to({graphics:mask_4_graphics_355,x:154.3,y:135.1}).wait(1).to({graphics:mask_4_graphics_356,x:151.5,y:135.1}).wait(1).to({graphics:mask_4_graphics_357,x:150.5,y:135.1}).wait(1).to({graphics:mask_4_graphics_358,x:153.4,y:134.9}).wait(1).to({graphics:mask_4_graphics_359,x:156.3,y:134.4}).wait(1).to({graphics:mask_4_graphics_360,x:159.1,y:133.7}).wait(1).to({graphics:mask_4_graphics_361,x:161.8,y:132.7}).wait(1).to({graphics:mask_4_graphics_362,x:164.4,y:131.5}).wait(1).to({graphics:mask_4_graphics_363,x:167,y:130.1}).wait(1).to({graphics:mask_4_graphics_364,x:169.3,y:128.4}).wait(1).to({graphics:mask_4_graphics_365,x:171.5,y:126.5}).wait(311));

	// 3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(20,1,1).p("A2xWzQkuicIdp4QIcp3GYmjQGXmjH0mvQH0mvEyF8QDlEcjEFe");
	this.shape_5.setTransform(204.5,311.8);
	this.shape_5._off = true;

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(349).to({_off:false},0).wait(327));

	// Layer 9 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_264 = new cjs.Graphics().p("AhMe9IDQjWIDtDmIjRDWg");
	var mask_5_graphics_265 = new cjs.Graphics().p("AjrAFIDqjwIDtDnIjrDwg");
	var mask_5_graphics_266 = new cjs.Graphics().p("Aj5ASIEEkLIDvDpIkEEKg");
	var mask_5_graphics_267 = new cjs.Graphics().p("AkGAeIEdklIDwDpIkdEmg");
	var mask_5_graphics_268 = new cjs.Graphics().p("AkUArIE3lAIDyDrIk4FAg");
	var mask_5_graphics_269 = new cjs.Graphics().p("AkhA4IFRlbIDyDsIlRFbg");
	var mask_5_graphics_270 = new cjs.Graphics().p("AkvBFIFrl2ID0DtIlrF2g");
	var mask_5_graphics_271 = new cjs.Graphics().p("Ak8BRIGEmPID2DuImGGPg");
	var mask_5_graphics_272 = new cjs.Graphics().p("AlKBeIGfmqID2DvImfGqg");
	var mask_5_graphics_273 = new cjs.Graphics().p("AlXBrIG4nFID3DwIm4HFg");
	var mask_5_graphics_274 = new cjs.Graphics().p("AllB4IHTngID4DxInTHgg");
	var mask_5_graphics_275 = new cjs.Graphics().p("AlzCEIHtn6ID6DzIntH6g");
	var mask_5_graphics_276 = new cjs.Graphics().p("AmACRIIGoVID7D0IoGIVg");
	var mask_5_graphics_277 = new cjs.Graphics().p("AmOCeIIhowID8D2IohIvg");
	var mask_5_graphics_278 = new cjs.Graphics().p("AmbCrII6pLID9D3Io6JKg");
	var mask_5_graphics_279 = new cjs.Graphics().p("AmpC3IJUpkID/D3IpUJkg");
	var mask_5_graphics_280 = new cjs.Graphics().p("Am2DEIJtp/IEAD4IpuJ/g");
	var mask_5_graphics_281 = new cjs.Graphics().p("AnEDRIKIqaIEBD5IqIKag");
	var mask_5_graphics_282 = new cjs.Graphics().p("AnRDeIKhq1IECD7IqhK0g");
	var mask_5_graphics_283 = new cjs.Graphics().p("AnfDqIK7rPIEED8Iq8LPg");
	var mask_5_graphics_284 = new cjs.Graphics().p("AnsD3ILVrqIEED9IrVLqg");
	var mask_5_graphics_285 = new cjs.Graphics().p("An6EEILvsEIEGD9IrvMFg");
	var mask_5_graphics_286 = new cjs.Graphics().p("AoHEQIMIsfIEHEAIsJMfg");
	var mask_5_graphics_287 = new cjs.Graphics().p("AoVEdIMjs6IEIEBIsjM5g");
	var mask_5_graphics_288 = new cjs.Graphics().p("AoiEqIM8tVIEJEDIs8NTg");
	var mask_5_graphics_289 = new cjs.Graphics().p("AowE2INXtuIEKECItXNvg");
	var mask_5_graphics_290 = new cjs.Graphics().p("Ao9FDINwuJIEMEEItxOJg");
	var mask_5_graphics_291 = new cjs.Graphics().p("ApLFQIOKukIENEFIuKOkg");
	var mask_5_graphics_292 = new cjs.Graphics().p("ApZFdIOlu/IEOEGIulO/g");
	var mask_5_graphics_293 = new cjs.Graphics().p("ApmFpIO+vZIEPEIIu+PZg");
	var mask_5_graphics_294 = new cjs.Graphics().p("Ap0F2IPYv0IEREJIvZP0g");
	var mask_5_graphics_295 = new cjs.Graphics().p("AqBGDIPywPIEREKIvyQOg");
	var mask_5_graphics_296 = new cjs.Graphics().p("AqPGQIQMwqIETELIwMQpg");
	var mask_5_graphics_297 = new cjs.Graphics().p("AqcGcIQlxDIEUEMIwmRDg");
	var mask_5_graphics_298 = new cjs.Graphics().p("AqqGpIRAxeIEUENIw/Reg");
	var mask_5_graphics_299 = new cjs.Graphics().p("Aq3G2IRZx5IEWEOIxZR5g");
	var mask_5_graphics_300 = new cjs.Graphics().p("ArFHDIRzyUIEYEQIxzSTg");
	var mask_5_graphics_301 = new cjs.Graphics().p("ArSHPISNyuIEYERIyNSug");
	var mask_5_graphics_302 = new cjs.Graphics().p("ArgHcISnzJIEZESIymTJg");
	var mask_5_graphics_303 = new cjs.Graphics().p("ArtHpITAzjIEbESIzATjg");
	var mask_5_graphics_304 = new cjs.Graphics().p("Ar7H2ITbz+IEcEUIzbT9g");
	var mask_5_graphics_305 = new cjs.Graphics().p("AsIICIT00YIEdEVIz0UYg");
	var mask_5_graphics_306 = new cjs.Graphics().p("AsWIPIUO0zIEfEWI0OUzg");
	var mask_5_graphics_307 = new cjs.Graphics().p("AsjIcIUo1OIEfEXI0oVOg");
	var mask_5_graphics_308 = new cjs.Graphics().p("AsxIpIVC1pIEhEZI1CVog");
	var mask_5_graphics_309 = new cjs.Graphics().p("As+I1IVb2DIEiEaI1bWDg");
	var mask_5_graphics_310 = new cjs.Graphics().p("AtMJCIV22eIEjEbI12Weg");
	var mask_5_graphics_311 = new cjs.Graphics().p("AtaJPIWQ25IElEdI2QW3g");
	var mask_5_graphics_312 = new cjs.Graphics().p("AtnJbIWp3SIEmEdI2pXSg");
	var mask_5_graphics_313 = new cjs.Graphics().p("At0JoIXD3tIEmEeI3DXtg");
	var mask_5_graphics_314 = new cjs.Graphics().p("AuCJ1IXd4IIEoEgI3dYHg");
	var mask_5_graphics_315 = new cjs.Graphics().p("AuQKCIX34jIEpEgI33Yjg");
	var mask_5_graphics_316 = new cjs.Graphics().p("AudKOIYR49IEqEiI4RY9g");
	var mask_5_graphics_317 = new cjs.Graphics().p("AurKbIYr5YIErEjI4qZYg");
	var mask_5_graphics_318 = new cjs.Graphics().p("Au4KoIZE5zIEtElI5FZyg");
	var mask_5_graphics_319 = new cjs.Graphics().p("AvFK0IZe6NIEtEmI5eaMg");
	var mask_5_graphics_320 = new cjs.Graphics().p("AvTLBIZ46oIEvEnI54ang");
	var mask_5_graphics_321 = new cjs.Graphics().p("AvhLOIaS7CIEwEnI6SbCg");
	var mask_5_graphics_322 = new cjs.Graphics().p("AvuLbIas7dIExEpI6sbcg");
	var mask_5_graphics_323 = new cjs.Graphics().p("Av7LnIbF73IEyEqI7Fb3g");
	var mask_5_graphics_324 = new cjs.Graphics().p("AwJL0Ibf8SIE0EsI7fcRg");
	var mask_5_graphics_325 = new cjs.Graphics().p("AwXMBIb68tIE1EsI76ctg");
	var mask_5_graphics_326 = new cjs.Graphics().p("AwkMNIcT9HIE2EuI8TdHg");
	var mask_5_graphics_327 = new cjs.Graphics().p("AwyMaIcu9hIE3EuI8tdhg");
	var mask_5_graphics_328 = new cjs.Graphics().p("Aw/MnIdH99IE4EwI9Hd9g");
	var mask_5_graphics_329 = new cjs.Graphics().p("AxNMzIdh+XIE6ExI9heYg");
	var mask_5_graphics_330 = new cjs.Graphics().p("AxaNAId7+yIE6EzI96eyg");
	var mask_5_graphics_331 = new cjs.Graphics().p("AxoNNIeV/MIE8EzI+VfMg");
	var mask_5_graphics_332 = new cjs.Graphics().p("Ax2NaIev/nIE9E0I+ufng");
	var mask_5_graphics_333 = new cjs.Graphics().p("AyDNmMAfIggBIE/E2MgfJAgBg");
	var mask_5_graphics_334 = new cjs.Graphics().p("AyQNzMAfiggcIE/E3MgfiAgcg");
	var mask_5_graphics_335 = new cjs.Graphics().p("AyeOAMAf8gg3IFBE4Mgf8Ag3g");
	var mask_5_graphics_336 = new cjs.Graphics().p("AysONMAgXghSIFBE5MggWAhSg");
	var mask_5_graphics_337 = new cjs.Graphics().p("Ay5OZMAgwghsIFDE6MggwAhtg");
	var mask_5_graphics_338 = new cjs.Graphics().p("AzGOmMAhJgiHIFFE8MghKAiHg");
	var mask_5_graphics_339 = new cjs.Graphics().p("AzUOzMAhkgihIFFE8MghkAihg");
	var mask_5_graphics_340 = new cjs.Graphics().p("AziPAMAh+gi8IFHE+Mgh+Ai7g");
	var mask_5_graphics_341 = new cjs.Graphics().p("AzvPMMAiXgjWIFIE+MgiXAjXg");
	var mask_5_graphics_342 = new cjs.Graphics().p("Az8PZMAixgjxIFJFAMgiyAjxg");
	var mask_5_graphics_343 = new cjs.Graphics().p("A0KPmMAjLgkMIFKFBMgjLAkMg");
	var mask_5_graphics_344 = new cjs.Graphics().p("A0XPyMAjkgkmIFMFDMgjlAkmg");
	var mask_5_graphics_345 = new cjs.Graphics().p("A0lP/MAj+glAIFNFDMgj/AlBg");
	var mask_5_graphics_346 = new cjs.Graphics().p("A0zQMMAkZglbIFOFFMgkZAlbg");
	var mask_5_graphics_347 = new cjs.Graphics().p("A1AQZMAkygl2IFPFFMgkyAl2g");
	var mask_5_graphics_348 = new cjs.Graphics().p("A1OQlMAlNgmQIFQFHMglMAmQg");
	var mask_5_graphics_349 = new cjs.Graphics().p("Az8dcMAlmgmrIFSFIMglmAmrg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(264).to({graphics:mask_5_graphics_264,x:36.9,y:221.1}).wait(1).to({graphics:mask_5_graphics_265,x:52.7,y:418.7}).wait(1).to({graphics:mask_5_graphics_266,x:53.9,y:417.3}).wait(1).to({graphics:mask_5_graphics_267,x:55.2,y:415.9}).wait(1).to({graphics:mask_5_graphics_268,x:56.4,y:414.5}).wait(1).to({graphics:mask_5_graphics_269,x:57.7,y:413.1}).wait(1).to({graphics:mask_5_graphics_270,x:58.9,y:411.7}).wait(1).to({graphics:mask_5_graphics_271,x:60.1,y:410.3}).wait(1).to({graphics:mask_5_graphics_272,x:61.4,y:408.9}).wait(1).to({graphics:mask_5_graphics_273,x:62.6,y:407.6}).wait(1).to({graphics:mask_5_graphics_274,x:63.8,y:406.2}).wait(1).to({graphics:mask_5_graphics_275,x:65.1,y:404.8}).wait(1).to({graphics:mask_5_graphics_276,x:66.3,y:403.4}).wait(1).to({graphics:mask_5_graphics_277,x:67.5,y:402}).wait(1).to({graphics:mask_5_graphics_278,x:68.8,y:400.6}).wait(1).to({graphics:mask_5_graphics_279,x:70,y:399.2}).wait(1).to({graphics:mask_5_graphics_280,x:71.2,y:397.8}).wait(1).to({graphics:mask_5_graphics_281,x:72.5,y:396.5}).wait(1).to({graphics:mask_5_graphics_282,x:73.7,y:395.1}).wait(1).to({graphics:mask_5_graphics_283,x:74.9,y:393.7}).wait(1).to({graphics:mask_5_graphics_284,x:76.1,y:392.3}).wait(1).to({graphics:mask_5_graphics_285,x:77.4,y:390.9}).wait(1).to({graphics:mask_5_graphics_286,x:78.6,y:389.5}).wait(1).to({graphics:mask_5_graphics_287,x:79.8,y:388.2}).wait(1).to({graphics:mask_5_graphics_288,x:81.1,y:386.8}).wait(1).to({graphics:mask_5_graphics_289,x:82.3,y:385.4}).wait(1).to({graphics:mask_5_graphics_290,x:83.6,y:384}).wait(1).to({graphics:mask_5_graphics_291,x:84.8,y:382.6}).wait(1).to({graphics:mask_5_graphics_292,x:86,y:381.2}).wait(1).to({graphics:mask_5_graphics_293,x:87.3,y:379.8}).wait(1).to({graphics:mask_5_graphics_294,x:88.5,y:378.4}).wait(1).to({graphics:mask_5_graphics_295,x:89.7,y:377.1}).wait(1).to({graphics:mask_5_graphics_296,x:91,y:375.7}).wait(1).to({graphics:mask_5_graphics_297,x:92.2,y:374.3}).wait(1).to({graphics:mask_5_graphics_298,x:93.4,y:372.9}).wait(1).to({graphics:mask_5_graphics_299,x:94.7,y:371.5}).wait(1).to({graphics:mask_5_graphics_300,x:95.9,y:370.1}).wait(1).to({graphics:mask_5_graphics_301,x:97.1,y:368.7}).wait(1).to({graphics:mask_5_graphics_302,x:98.4,y:367.3}).wait(1).to({graphics:mask_5_graphics_303,x:99.6,y:366}).wait(1).to({graphics:mask_5_graphics_304,x:100.8,y:364.6}).wait(1).to({graphics:mask_5_graphics_305,x:102.1,y:363.2}).wait(1).to({graphics:mask_5_graphics_306,x:103.3,y:361.8}).wait(1).to({graphics:mask_5_graphics_307,x:104.5,y:360.4}).wait(1).to({graphics:mask_5_graphics_308,x:105.8,y:359}).wait(1).to({graphics:mask_5_graphics_309,x:107,y:357.6}).wait(1).to({graphics:mask_5_graphics_310,x:108.2,y:356.2}).wait(1).to({graphics:mask_5_graphics_311,x:109.5,y:354.9}).wait(1).to({graphics:mask_5_graphics_312,x:110.7,y:353.5}).wait(1).to({graphics:mask_5_graphics_313,x:111.9,y:352.1}).wait(1).to({graphics:mask_5_graphics_314,x:113.2,y:350.7}).wait(1).to({graphics:mask_5_graphics_315,x:114.4,y:349.3}).wait(1).to({graphics:mask_5_graphics_316,x:115.6,y:347.9}).wait(1).to({graphics:mask_5_graphics_317,x:116.9,y:346.5}).wait(1).to({graphics:mask_5_graphics_318,x:118.1,y:345.1}).wait(1).to({graphics:mask_5_graphics_319,x:119.3,y:343.8}).wait(1).to({graphics:mask_5_graphics_320,x:120.6,y:342.4}).wait(1).to({graphics:mask_5_graphics_321,x:121.8,y:341}).wait(1).to({graphics:mask_5_graphics_322,x:123,y:339.6}).wait(1).to({graphics:mask_5_graphics_323,x:124.3,y:338.2}).wait(1).to({graphics:mask_5_graphics_324,x:125.5,y:336.8}).wait(1).to({graphics:mask_5_graphics_325,x:126.7,y:335.4}).wait(1).to({graphics:mask_5_graphics_326,x:128,y:334}).wait(1).to({graphics:mask_5_graphics_327,x:129.2,y:332.7}).wait(1).to({graphics:mask_5_graphics_328,x:130.4,y:331.3}).wait(1).to({graphics:mask_5_graphics_329,x:131.7,y:329.9}).wait(1).to({graphics:mask_5_graphics_330,x:132.9,y:328.5}).wait(1).to({graphics:mask_5_graphics_331,x:134.1,y:327.1}).wait(1).to({graphics:mask_5_graphics_332,x:135.4,y:325.7}).wait(1).to({graphics:mask_5_graphics_333,x:136.6,y:324.4}).wait(1).to({graphics:mask_5_graphics_334,x:137.8,y:323}).wait(1).to({graphics:mask_5_graphics_335,x:139.1,y:321.6}).wait(1).to({graphics:mask_5_graphics_336,x:140.3,y:320.2}).wait(1).to({graphics:mask_5_graphics_337,x:141.5,y:318.8}).wait(1).to({graphics:mask_5_graphics_338,x:142.8,y:317.4}).wait(1).to({graphics:mask_5_graphics_339,x:144,y:316}).wait(1).to({graphics:mask_5_graphics_340,x:145.2,y:314.6}).wait(1).to({graphics:mask_5_graphics_341,x:146.5,y:313.3}).wait(1).to({graphics:mask_5_graphics_342,x:147.7,y:311.9}).wait(1).to({graphics:mask_5_graphics_343,x:148.9,y:310.5}).wait(1).to({graphics:mask_5_graphics_344,x:150.2,y:309.1}).wait(1).to({graphics:mask_5_graphics_345,x:151.4,y:307.7}).wait(1).to({graphics:mask_5_graphics_346,x:152.6,y:306.3}).wait(1).to({graphics:mask_5_graphics_347,x:153.9,y:304.9}).wait(1).to({graphics:mask_5_graphics_348,x:155.1,y:303.5}).wait(1).to({graphics:mask_5_graphics_349,x:146.8,y:221.2}).wait(327));

	// 3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(20,1,1).p("A2xWzQkuicIdp4QIcp3GYmjQGXmjH0mvQH0mvEyF8QEyF8nFHyQmbHCnCgB");
	this.shape_6.setTransform(204.5,311.8);
	this.shape_6._off = true;

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(264).to({_off:false},0).wait(412));

	// Layer 7 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_250 = new cjs.Graphics().p("EgD4AlFIJxx5QDlCCBLD+QBLEDiCDtQiBDtkDBMQhgAchdAAQiYAAiRhMg");
	var mask_6_graphics_251 = new cjs.Graphics().p("EgE0AkgILpwuQDWCaAuEEQAwEKibDeQibDekJAvQg/ALg8AAQi9AAimhwg");
	var mask_6_graphics_252 = new cjs.Graphics().p("EgFsAj2INZvYQDDCwATEIQASEOiyDLQixDMkOATQgZABgZAAQjoAAi2iZg");
	var mask_6_graphics_253 = new cjs.Graphics().p("EAAeAmOQkHgKi1i/IO9t1QCvDEgKEIQgLEOjGC4Qi8Ctj7AAIgegBg");
	var mask_6_graphics_254 = new cjs.Graphics().p("EgAnAmHQkFgnigjRIQXsJQCZDWgmEGQgoELjZChQiuCBjPAAQgzAAg0gIg");
	var mask_6_graphics_255 = new cjs.Graphics().p("EgBrAl4QkBhDiIjhIRlqTQCBDlhCEAQhFEFjpCJQibBbioAAQhTAAhXgXg");
	var mask_6_graphics_256 = new cjs.Graphics().p("EgCuAliQj4hehvjuISmoWQBoDxheD4QhhD8j2BvQiEA7iGAAQhzAAh1gtg");
	var mask_6_graphics_257 = new cjs.Graphics().p("EgDuAlFQjsh4hUj5ITXmSQBOD7h4DsQh7DxkBBTQhoAihmAAQiUAAiPhKg");
	var mask_6_graphics_258 = new cjs.Graphics().p("EgEqAkiQjeiRg5kBIT8kKQAyEDiRDdQiUDikJA3QhIAPhFAAQi4AAikhsg");
	var mask_6_graphics_259 = new cjs.Graphics().p("EgFzAjqQjHiwgUkGIUVhQQANEHiwDGQizDKkNARIguABQjwAAi5ijg");
	var mask_6_graphics_260 = new cjs.Graphics().p("EAAIAmLQkMgXiujOQisjKASkGIUTBrQgZEGjKCrQi3CbjoAAQgeAAgfgCg");
	var mask_6_graphics_261 = new cjs.Graphics().p("EgBKAl8QkIg9iPjlQiMjgA3kCIT2ElQg/EAjgCMQihBliyAAQhLAAhNgSg");
	var mask_6_graphics_262 = new cjs.Graphics().p("EgCVAlgQj8hihsj3QhrjyBbj3IS/HYQhiD0jyBrQiDA5iDAAQh1AAh4gug");
	var mask_6_graphics_263 = new cjs.Graphics().p("EgDUAk4QjriFhIkEQhHj/B+jnIRuKCQiEDjj/BHQhcAZhYAAQiiAAiZhWg");
	var mask_6_graphics_264 = new cjs.Graphics().p("EgEGAkGQjWimgikMQgikGCejTIQHMeQikDOkGAiQguAGgsAAQjWAAixiJg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(250).to({graphics:mask_6_graphics_250,x:70.8,y:244.9}).wait(1).to({graphics:mask_6_graphics_251,x:70.8,y:244.8}).wait(1).to({graphics:mask_6_graphics_252,x:70.8,y:244.7}).wait(1).to({graphics:mask_6_graphics_253,x:70.9,y:244.7}).wait(1).to({graphics:mask_6_graphics_254,x:71,y:244.7}).wait(1).to({graphics:mask_6_graphics_255,x:71,y:244.7}).wait(1).to({graphics:mask_6_graphics_256,x:71.1,y:244.7}).wait(1).to({graphics:mask_6_graphics_257,x:71.2,y:244.7}).wait(1).to({graphics:mask_6_graphics_258,x:71.2,y:244.6}).wait(1).to({graphics:mask_6_graphics_259,x:71.2,y:244.5}).wait(1).to({graphics:mask_6_graphics_260,x:71.1,y:244.5}).wait(1).to({graphics:mask_6_graphics_261,x:70.4,y:244.6}).wait(1).to({graphics:mask_6_graphics_262,x:69,y:244.6}).wait(1).to({graphics:mask_6_graphics_263,x:67,y:244.6}).wait(1).to({graphics:mask_6_graphics_264,x:64.5,y:244.7}).wait(412));

	// 3
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(20,1,1).p("A2xWzQkuicIdp4QIcp3GYmjQGXmjH0mvQH0mvEyF8QEyF8nFHyQnFHxn1g1Qn1gzhfiy");
	this.shape_7.setTransform(204.5,311.8);
	this.shape_7._off = true;

	var maskedShapeInstanceList = [this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(250).to({_off:false},0).wait(426));

	// Layer 21
	this.instance_3 = new lib.ar5("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(266.4,198,1,1,25.3,0,0,0.1,-1.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(100).to({_off:false},0).wait(576));

	// Layer 5 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_218 = new cjs.Graphics().p("AneZqQCHjiD/hEQEEhGDqCIQDqCHBGEFQBEEAiADlg");
	var mask_7_graphics_219 = new cjs.Graphics().p("AmyYIQChjQEGglQEKgmDYCiQDZCjAmELQAlEGibDVg");
	var mask_7_graphics_220 = new cjs.Graphics().p("Al/WvQC5i7EIgGQEOgGDDC7QDDC7AGEOQAGEJi0DBg");
	var mask_7_graphics_221 = new cjs.Graphics().p("AlFVgQDOikEGAZQENAbCrDRQCsDRgbENQgaEHjICqg");
	var mask_7_graphics_222 = new cjs.Graphics().p("AkGUbQDgiKEBA5QEIA6CSDkQCRDkg7EIQg5ECjcCRg");
	var mask_7_graphics_223 = new cjs.Graphics().p("AjCTiQDuhvD6BYQD/BaB1DzQB1D0hZD/QhYD6jsB1g");
	var mask_7_graphics_224 = new cjs.Graphics().p("Ah5S2QD5hRDuB0QDyB4BXEAQBYD/h4DzQh1Dtj3BZg");
	var mask_7_graphics_225 = new cjs.Graphics().p("AgtSXQEBgzDeCQQDiCUA4EIQA4EJiTDiQiQDekBA6g");
	var mask_7_graphics_226 = new cjs.Graphics().p("AAgSFQEGgTDLCqQDPCtAYENQAYEOitDPQiqDLkFAbg");
	var mask_7_graphics_227 = new cjs.Graphics().p("EABGAmaIAo0YQEHAMC1DBQC5DFgIEOQgIEOjFC5Qi9Cxj/AAIgMAAg");
	var mask_7_graphics_228 = new cjs.Graphics().p("EgAHAmTIDD0KQEDAsCdDVQCgDZgoEMQgpELjZCgQiuCAjNAAQgvAAgvgHg");
	var mask_7_graphics_229 = new cjs.Graphics().p("EgBUAmDIFbzpQD9BKCCDmQCFDshIEEQhIEEjrCFQiZBXijAAQhTAAhVgXg");
	var mask_7_graphics_230 = new cjs.Graphics().p("EgCeAlrIHvy3QDyBoBmD0QBoD5hnD6QhnD6j5BoQh+A0h9AAQh2AAh3gug");
	var mask_7_graphics_231 = new cjs.Graphics().p("EgDkAlKIJ7xzQDkCDBID/QBJEEiDDsQiEDskEBJQhdAbhaAAQicAAiShPg");
	var mask_7_graphics_232 = new cjs.Graphics().p("EgEmAkgIL/weQDSCeApEFQAqELifDbQifDakLAqQg4AJg1AAQjFAAiph4g");
	var mask_7_graphics_233 = new cjs.Graphics().p("EgFwAjjIOSuiQC5C8ACEIQACEPi+DAQi9DBkOACIgGAAQkEAAi8i0g");
	var mask_7_graphics_234 = new cjs.Graphics().p("EgAJAmQQkGgmiijPIQSsRQCbDVglEGQgmELjYCjQivCEjRAAQgxAAgxgHg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(218).to({graphics:mask_7_graphics_218,x:73.4,y:229.5}).wait(1).to({graphics:mask_7_graphics_219,x:73.3,y:232.8}).wait(1).to({graphics:mask_7_graphics_220,x:73.2,y:235.8}).wait(1).to({graphics:mask_7_graphics_221,x:73.2,y:238.4}).wait(1).to({graphics:mask_7_graphics_222,x:73.2,y:240.7}).wait(1).to({graphics:mask_7_graphics_223,x:73.2,y:242.6}).wait(1).to({graphics:mask_7_graphics_224,x:73.2,y:244.1}).wait(1).to({graphics:mask_7_graphics_225,x:73.2,y:245.1}).wait(1).to({graphics:mask_7_graphics_226,x:73.1,y:245.7}).wait(1).to({graphics:mask_7_graphics_227,x:73.1,y:245.8}).wait(1).to({graphics:mask_7_graphics_228,x:73.2,y:245.8}).wait(1).to({graphics:mask_7_graphics_229,x:73.3,y:245.8}).wait(1).to({graphics:mask_7_graphics_230,x:73.3,y:245.7}).wait(1).to({graphics:mask_7_graphics_231,x:73.3,y:245.7}).wait(1).to({graphics:mask_7_graphics_232,x:73.3,y:245.6}).wait(1).to({graphics:mask_7_graphics_233,x:73.3,y:245.5}).wait(1).to({graphics:mask_7_graphics_234,x:73.4,y:245.5}).wait(442));

	// 2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(20,1,1).p("ARh80QhLF/lbI/QlbI/k2IRQk2IRkRJlQkQJkkyih");
	this.shape_8.setTransform(170.7,276.5);
	this.shape_8._off = true;

	var maskedShapeInstanceList = [this.shape_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(218).to({_off:false},0).wait(458));

	// Layer 3 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_100 = new cjs.Graphics().p("AOwE2IBzk1IIgDLIh0E1g");
	var mask_8_graphics_101 = new cjs.Graphics().p("AlQBCICDlPIIeDMIiDFQg");
	var mask_8_graphics_102 = new cjs.Graphics().p("AlXBQICSlsIIdDNIiSFsg");
	var mask_8_graphics_103 = new cjs.Graphics().p("AlfBeIChmIIIeDOIiiGHg");
	var mask_8_graphics_104 = new cjs.Graphics().p("AlnBrICymjIIcDNIixGkg");
	var mask_8_graphics_105 = new cjs.Graphics().p("AluB5IDAnAIIdDPIjAG/g");
	var mask_8_graphics_106 = new cjs.Graphics().p("Al1CHIDPncIIcDPIjPHcg");
	var mask_8_graphics_107 = new cjs.Graphics().p("Al9CVIDfn4IIcDQIjfH3g");
	var mask_8_graphics_108 = new cjs.Graphics().p("AmECiIDtoTIIcDQIjtITg");
	var mask_8_graphics_109 = new cjs.Graphics().p("AmMCwID9owIIcDRIj9Iwg");
	var mask_8_graphics_110 = new cjs.Graphics().p("AmTC+IEMpMIIcDRIkNJMg");
	var mask_8_graphics_111 = new cjs.Graphics().p("AmbDLIEbpnIIcDSIkbJng");
	var mask_8_graphics_112 = new cjs.Graphics().p("AmjDZIEsqDIIbDSIksKDg");
	var mask_8_graphics_113 = new cjs.Graphics().p("AmqDnIE6qgIIbDTIk6Kgg");
	var mask_8_graphics_114 = new cjs.Graphics().p("AmxD0IFJq7IIaDUIlJK7g");
	var mask_8_graphics_115 = new cjs.Graphics().p("Am5ECIFZrXIIaDUIlZLXg");
	var mask_8_graphics_116 = new cjs.Graphics().p("AnAEQIForzIIZDUIloLzg");
	var mask_8_graphics_117 = new cjs.Graphics().p("AnIEeIF4sQIIZDWIl3MPg");
	var mask_8_graphics_118 = new cjs.Graphics().p("AnPErIGGsrIIZDWImGMrg");
	var mask_8_graphics_119 = new cjs.Graphics().p("AnXE5IGWtHIIZDWImWNHg");
	var mask_8_graphics_120 = new cjs.Graphics().p("AnfFGIGltjIIZDXImlNkg");
	var mask_8_graphics_121 = new cjs.Graphics().p("AnmFUIG1t/IIYDYIm0N/g");
	var mask_8_graphics_122 = new cjs.Graphics().p("AntFiIHDubIIYDYInDObg");
	var mask_8_graphics_123 = new cjs.Graphics().p("An1FvIHTu2IIYDYInTO3g");
	var mask_8_graphics_124 = new cjs.Graphics().p("An9F9IHjvTIIXDaInhPSg");
	var mask_8_graphics_125 = new cjs.Graphics().p("AoEGLIHxvvIIYDaInxPvg");
	var mask_8_graphics_126 = new cjs.Graphics().p("AoLGZIIBwLIIWDbIoBQKg");
	var mask_8_graphics_127 = new cjs.Graphics().p("AoTGmIIQwnIIXDcIoQQng");
	var mask_8_graphics_128 = new cjs.Graphics().p("AoaG0IIexCIIXDbIoeRDg");
	var mask_8_graphics_129 = new cjs.Graphics().p("AoiHCIItxfIIYDcIouRfg");
	var mask_8_graphics_130 = new cjs.Graphics().p("AopHPII8x6IIYDdIo9R6g");
	var mask_8_graphics_131 = new cjs.Graphics().p("AoxHdIJNyWIIWDdIpMSWg");
	var mask_8_graphics_132 = new cjs.Graphics().p("Ao5HrIJcyzIIXDeIpcSzg");
	var mask_8_graphics_133 = new cjs.Graphics().p("ApAH4IJrzOIIWDfIpqTOg");
	var mask_8_graphics_134 = new cjs.Graphics().p("ApIIGIJ7zqIIWDfIp7Tqg");
	var mask_8_graphics_135 = new cjs.Graphics().p("ApPIUIKJ0GIIWDgIqKUGg");
	var mask_8_graphics_136 = new cjs.Graphics().p("ApWIhIKY0iIIWDhIqZUig");
	var mask_8_graphics_137 = new cjs.Graphics().p("ApeIvIKo0+IIVDhIqoU+g");
	var mask_8_graphics_138 = new cjs.Graphics().p("AplI9IK21aIIVDiIq3VZg");
	var mask_8_graphics_139 = new cjs.Graphics().p("AptJLILH13IIUDiIrGV3g");
	var mask_8_graphics_140 = new cjs.Graphics().p("Ap1JYILW2SIIUDjIrVWSg");
	var mask_8_graphics_141 = new cjs.Graphics().p("Ap8JlILl2tIIUDjIrlWug");
	var mask_8_graphics_142 = new cjs.Graphics().p("AqEJzIL03JIIUDkIr0XJg");
	var mask_8_graphics_143 = new cjs.Graphics().p("AqLKBIMD3mIIUDlIsDXmg");
	var mask_8_graphics_144 = new cjs.Graphics().p("AqTKPIMT4CIIUDlIsTYCg");
	var mask_8_graphics_145 = new cjs.Graphics().p("AqaKdIMi4eIITDlIsiYeg");
	var mask_8_graphics_146 = new cjs.Graphics().p("AqiKqIMy45IITDmIsyY5g");
	var mask_8_graphics_147 = new cjs.Graphics().p("AqpK4INA5VIITDmItAZWg");
	var mask_8_graphics_148 = new cjs.Graphics().p("AqwLGINQ5yIISDnItRZyg");
	var mask_8_graphics_149 = new cjs.Graphics().p("Aq4LTINf6NIISDoItfaNg");
	var mask_8_graphics_150 = new cjs.Graphics().p("ArALhINv6pIISDoItvapg");
	var mask_8_graphics_151 = new cjs.Graphics().p("ArHLvIN+7GIIRDqIt+bFg");
	var mask_8_graphics_152 = new cjs.Graphics().p("ArPL8ION7hIISDqIuNbhg");
	var mask_8_graphics_153 = new cjs.Graphics().p("ArWMKIOc79IIRDqIucb9g");
	var mask_8_graphics_154 = new cjs.Graphics().p("AreMYIOs8ZIIRDqIuscZg");
	var mask_8_graphics_155 = new cjs.Graphics().p("ArlMlIO681IIRDsIu6c1g");
	var mask_8_graphics_156 = new cjs.Graphics().p("ArtMzIPL9RIIQDsIvKdRg");
	var mask_8_graphics_157 = new cjs.Graphics().p("Ar0NAIPZ9sIIQDsIvZdtg");
	var mask_8_graphics_158 = new cjs.Graphics().p("Ar8NPIPp+KIIQDuIvpeIg");
	var mask_8_graphics_159 = new cjs.Graphics().p("AsDNcIP4+lIIPDuIv4elg");
	var mask_8_graphics_160 = new cjs.Graphics().p("AsLNpIQH/AIIQDuIwIfBg");
	var mask_8_graphics_161 = new cjs.Graphics().p("AsSN4IQW/dIIPDvIwWfcg");
	var mask_8_graphics_162 = new cjs.Graphics().p("AsaOFIQm/4IIPDvIwmf4g");
	var mask_8_graphics_163 = new cjs.Graphics().p("AshOTMAQ1ggVIIODwMgQ1AgVg");
	var mask_8_graphics_164 = new cjs.Graphics().p("AspOgMARFggwIIODxMgREAgwg");
	var mask_8_graphics_165 = new cjs.Graphics().p("AswOuMARTghMIIODxMgRTAhMg");
	var mask_8_graphics_166 = new cjs.Graphics().p("As4O8MARjghpIIODyMgRjAhpg");
	var mask_8_graphics_167 = new cjs.Graphics().p("As/PJMARygiEIINDyMgRyAiFg");
	var mask_8_graphics_168 = new cjs.Graphics().p("AtHPXMASCgigIINDzMgSCAigg");
	var mask_8_graphics_169 = new cjs.Graphics().p("AtPPlMASRgi8IIODzMgSRAi8g");
	var mask_8_graphics_170 = new cjs.Graphics().p("AtWPyMASggjYIIND1MgSgAjXg");
	var mask_8_graphics_171 = new cjs.Graphics().p("AteQAMASwgj0IIND1MgSwAj0g");
	var mask_8_graphics_172 = new cjs.Graphics().p("AtlQOMAS/gkQIIMD1MgS/AkQg");
	var mask_8_graphics_173 = new cjs.Graphics().p("AtsQbMATOgksIILD3MgTNAksg");
	var mask_8_graphics_174 = new cjs.Graphics().p("At0QpMATdglIIIMD3MgTdAlIg");
	var mask_8_graphics_175 = new cjs.Graphics().p("At7Q3MATsglkIILD3MgTsAlkg");
	var mask_8_graphics_176 = new cjs.Graphics().p("AuDRFMAT8gmAIILD3MgT8AmAg");
	var mask_8_graphics_177 = new cjs.Graphics().p("AuLRTMAULgmdIILD5MgUKAmbg");
	var mask_8_graphics_178 = new cjs.Graphics().p("AuSRgMAUbgm4IIKD5MgUbAm4g");
	var mask_8_graphics_179 = new cjs.Graphics().p("AuaRtMAUqgnTIIKD5MgUqAnUg");
	var mask_8_graphics_180 = new cjs.Graphics().p("AuhR7MAU5gnvIIKD5MgU5Anwg");
	var mask_8_graphics_181 = new cjs.Graphics().p("AuoSJMAVIgoLIIJD6MgVIAoMg");
	var mask_8_graphics_182 = new cjs.Graphics().p("AuwSXMAVXgooIIKD7MgVYAoog");
	var mask_8_graphics_183 = new cjs.Graphics().p("Au3SkMAVngpDIIJD7MgVnApEg");
	var mask_8_graphics_184 = new cjs.Graphics().p("Au/SyMAV2gpfIIJD8MgV2Apfg");
	var mask_8_graphics_185 = new cjs.Graphics().p("AvGTAMAWFgp8IIJD9MgWGAp8g");
	var mask_8_graphics_186 = new cjs.Graphics().p("AvOTNMAWUgqXIIJD+MgWVAqXg");
	var mask_8_graphics_187 = new cjs.Graphics().p("AvWTbMAWkgqzIIJD+MgWlAqzg");
	var mask_8_graphics_188 = new cjs.Graphics().p("AvdTpMAWzgrPIIID+MgWzArPg");
	var mask_8_graphics_189 = new cjs.Graphics().p("AvlT2MAXDgrrIIHEAMgXCArqg");
	var mask_8_graphics_190 = new cjs.Graphics().p("AvsUEMAXSgsHIIHEAMgXRAsHg");
	var mask_8_graphics_191 = new cjs.Graphics().p("Av0USMAXhgsjIIHEAMgXgAsjg");
	var mask_8_graphics_192 = new cjs.Graphics().p("Av7UfMAXwgs/IIHECMgXwAs/g");
	var mask_8_graphics_193 = new cjs.Graphics().p("AwCUtMAX/gtbIIGECMgX/Atbg");
	var mask_8_graphics_194 = new cjs.Graphics().p("AwKU7MAYPgt3IIGECMgYPAt3g");
	var mask_8_graphics_195 = new cjs.Graphics().p("AwSVJMAYeguTIIGEDMgYdAuSg");
	var mask_8_graphics_196 = new cjs.Graphics().p("AwZVWMAYtguuIIGEDMgYtAuug");
	var mask_8_graphics_197 = new cjs.Graphics().p("AwhVkMAY9gvLIIFEEMgY8AvLg");
	var mask_8_graphics_198 = new cjs.Graphics().p("AwoVyMAZMgvnIIFEFMgZLAvmg");
	var mask_8_graphics_199 = new cjs.Graphics().p("AwwV/MAZbgwCIIFEFMgZaAwCg");
	var mask_8_graphics_200 = new cjs.Graphics().p("Aw3WNMAZrgweIIEEFMgZrAwfg");
	var mask_8_graphics_201 = new cjs.Graphics().p("Aw+WaMAZ5gw6IIEEGMgZ5Aw7g");
	var mask_8_graphics_202 = new cjs.Graphics().p("AxGWoMAaJgxWIIEEGMgaJAxXg");
	var mask_8_graphics_203 = new cjs.Graphics().p("AxOW2MAaZgxyIIEEHMgaZAxyg");
	var mask_8_graphics_204 = new cjs.Graphics().p("AxVXEMAangyPIIEEIMgaoAyPg");
	var mask_8_graphics_205 = new cjs.Graphics().p("AxdXRMAa3gyqIIEEJMga3Ayqg");
	var mask_8_graphics_206 = new cjs.Graphics().p("AxkXfMAbGgzGIIDEJMgbGAzGg");
	var mask_8_graphics_207 = new cjs.Graphics().p("AxsXtMAbWgziIIDEJMgbWAzig");
	var mask_8_graphics_208 = new cjs.Graphics().p("AxzX6MAbkgz+IIDELMgblAz+g");
	var mask_8_graphics_209 = new cjs.Graphics().p("Ax7YIMAb0g0aIIDELMgb0A0ag");
	var mask_8_graphics_210 = new cjs.Graphics().p("AyCYWMAcDg02IICELMgcDA02g");
	var mask_8_graphics_211 = new cjs.Graphics().p("AyKYjMAcTg1SIICEMMgcTA1Sg");
	var mask_8_graphics_212 = new cjs.Graphics().p("AyRYxMAcig1uIIBENMgciA1ug");
	var mask_8_graphics_213 = new cjs.Graphics().p("AyZY/MAcxg2KIICENMgcyA2Kg");
	var mask_8_graphics_214 = new cjs.Graphics().p("AygZNMAdAg2mIIBEOMgdAA2lg");
	var mask_8_graphics_215 = new cjs.Graphics().p("AyoZaMAdQg3BIIBEOMgdQA3Bg");
	var mask_8_graphics_216 = new cjs.Graphics().p("AyvZoMAdfg3eIIAEPMgdfA3eg");
	var mask_8_graphics_217 = new cjs.Graphics().p("Ay3Z2MAdvg36IIAEPMgduA36g");
	var mask_8_graphics_218 = new cjs.Graphics().p("As/fLMAd+g4WIIAEQMgd+A4Wg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(100).to({graphics:mask_8_graphics_100,x:160.3,y:51.3}).wait(1).to({graphics:mask_8_graphics_101,x:286.8,y:78.6}).wait(1).to({graphics:mask_8_graphics_102,x:286.1,y:80.2}).wait(1).to({graphics:mask_8_graphics_103,x:285.3,y:81.7}).wait(1).to({graphics:mask_8_graphics_104,x:284.6,y:83.3}).wait(1).to({graphics:mask_8_graphics_105,x:283.8,y:84.8}).wait(1).to({graphics:mask_8_graphics_106,x:283,y:86.4}).wait(1).to({graphics:mask_8_graphics_107,x:282.3,y:87.9}).wait(1).to({graphics:mask_8_graphics_108,x:281.5,y:89.4}).wait(1).to({graphics:mask_8_graphics_109,x:280.8,y:91}).wait(1).to({graphics:mask_8_graphics_110,x:280,y:92.5}).wait(1).to({graphics:mask_8_graphics_111,x:279.3,y:94.1}).wait(1).to({graphics:mask_8_graphics_112,x:278.5,y:95.6}).wait(1).to({graphics:mask_8_graphics_113,x:277.7,y:97.2}).wait(1).to({graphics:mask_8_graphics_114,x:277,y:98.7}).wait(1).to({graphics:mask_8_graphics_115,x:276.2,y:100.3}).wait(1).to({graphics:mask_8_graphics_116,x:275.5,y:101.8}).wait(1).to({graphics:mask_8_graphics_117,x:274.7,y:103.3}).wait(1).to({graphics:mask_8_graphics_118,x:274,y:104.9}).wait(1).to({graphics:mask_8_graphics_119,x:273.2,y:106.4}).wait(1).to({graphics:mask_8_graphics_120,x:272.5,y:108}).wait(1).to({graphics:mask_8_graphics_121,x:271.7,y:109.5}).wait(1).to({graphics:mask_8_graphics_122,x:270.9,y:111.1}).wait(1).to({graphics:mask_8_graphics_123,x:270.2,y:112.6}).wait(1).to({graphics:mask_8_graphics_124,x:269.4,y:114.2}).wait(1).to({graphics:mask_8_graphics_125,x:268.7,y:115.7}).wait(1).to({graphics:mask_8_graphics_126,x:267.9,y:117.3}).wait(1).to({graphics:mask_8_graphics_127,x:267.2,y:118.8}).wait(1).to({graphics:mask_8_graphics_128,x:266.4,y:120.4}).wait(1).to({graphics:mask_8_graphics_129,x:265.7,y:121.9}).wait(1).to({graphics:mask_8_graphics_130,x:264.9,y:123.4}).wait(1).to({graphics:mask_8_graphics_131,x:264.1,y:125}).wait(1).to({graphics:mask_8_graphics_132,x:263.4,y:126.5}).wait(1).to({graphics:mask_8_graphics_133,x:262.6,y:128.1}).wait(1).to({graphics:mask_8_graphics_134,x:261.9,y:129.6}).wait(1).to({graphics:mask_8_graphics_135,x:261.1,y:131.2}).wait(1).to({graphics:mask_8_graphics_136,x:260.4,y:132.7}).wait(1).to({graphics:mask_8_graphics_137,x:259.6,y:134.3}).wait(1).to({graphics:mask_8_graphics_138,x:258.8,y:135.8}).wait(1).to({graphics:mask_8_graphics_139,x:258.1,y:137.4}).wait(1).to({graphics:mask_8_graphics_140,x:257.3,y:138.9}).wait(1).to({graphics:mask_8_graphics_141,x:256.6,y:140.5}).wait(1).to({graphics:mask_8_graphics_142,x:255.8,y:142}).wait(1).to({graphics:mask_8_graphics_143,x:255,y:143.5}).wait(1).to({graphics:mask_8_graphics_144,x:254.3,y:145.1}).wait(1).to({graphics:mask_8_graphics_145,x:253.5,y:146.6}).wait(1).to({graphics:mask_8_graphics_146,x:252.8,y:148.2}).wait(1).to({graphics:mask_8_graphics_147,x:252,y:149.7}).wait(1).to({graphics:mask_8_graphics_148,x:251.3,y:151.3}).wait(1).to({graphics:mask_8_graphics_149,x:250.5,y:152.8}).wait(1).to({graphics:mask_8_graphics_150,x:249.7,y:154.4}).wait(1).to({graphics:mask_8_graphics_151,x:249,y:155.9}).wait(1).to({graphics:mask_8_graphics_152,x:248.2,y:157.4}).wait(1).to({graphics:mask_8_graphics_153,x:247.5,y:159}).wait(1).to({graphics:mask_8_graphics_154,x:246.7,y:160.5}).wait(1).to({graphics:mask_8_graphics_155,x:246,y:162.1}).wait(1).to({graphics:mask_8_graphics_156,x:245.2,y:163.6}).wait(1).to({graphics:mask_8_graphics_157,x:244.4,y:165.2}).wait(1).to({graphics:mask_8_graphics_158,x:243.7,y:166.7}).wait(1).to({graphics:mask_8_graphics_159,x:242.9,y:168.3}).wait(1).to({graphics:mask_8_graphics_160,x:242.2,y:169.8}).wait(1).to({graphics:mask_8_graphics_161,x:241.4,y:171.3}).wait(1).to({graphics:mask_8_graphics_162,x:240.7,y:172.9}).wait(1).to({graphics:mask_8_graphics_163,x:239.9,y:174.4}).wait(1).to({graphics:mask_8_graphics_164,x:239.1,y:176}).wait(1).to({graphics:mask_8_graphics_165,x:238.4,y:177.5}).wait(1).to({graphics:mask_8_graphics_166,x:237.6,y:179.1}).wait(1).to({graphics:mask_8_graphics_167,x:236.9,y:180.6}).wait(1).to({graphics:mask_8_graphics_168,x:236.1,y:182.2}).wait(1).to({graphics:mask_8_graphics_169,x:235.4,y:183.7}).wait(1).to({graphics:mask_8_graphics_170,x:234.6,y:185.3}).wait(1).to({graphics:mask_8_graphics_171,x:233.9,y:186.8}).wait(1).to({graphics:mask_8_graphics_172,x:233.1,y:188.3}).wait(1).to({graphics:mask_8_graphics_173,x:232.3,y:189.9}).wait(1).to({graphics:mask_8_graphics_174,x:231.6,y:191.4}).wait(1).to({graphics:mask_8_graphics_175,x:230.8,y:193}).wait(1).to({graphics:mask_8_graphics_176,x:230.1,y:194.5}).wait(1).to({graphics:mask_8_graphics_177,x:229.3,y:196.1}).wait(1).to({graphics:mask_8_graphics_178,x:228.6,y:197.6}).wait(1).to({graphics:mask_8_graphics_179,x:227.8,y:199.2}).wait(1).to({graphics:mask_8_graphics_180,x:227.1,y:200.7}).wait(1).to({graphics:mask_8_graphics_181,x:226.3,y:202.3}).wait(1).to({graphics:mask_8_graphics_182,x:225.5,y:203.8}).wait(1).to({graphics:mask_8_graphics_183,x:224.8,y:205.4}).wait(1).to({graphics:mask_8_graphics_184,x:224,y:206.9}).wait(1).to({graphics:mask_8_graphics_185,x:223.3,y:208.4}).wait(1).to({graphics:mask_8_graphics_186,x:222.5,y:210}).wait(1).to({graphics:mask_8_graphics_187,x:221.8,y:211.5}).wait(1).to({graphics:mask_8_graphics_188,x:221,y:213.1}).wait(1).to({graphics:mask_8_graphics_189,x:220.2,y:214.6}).wait(1).to({graphics:mask_8_graphics_190,x:219.5,y:216.2}).wait(1).to({graphics:mask_8_graphics_191,x:218.7,y:217.7}).wait(1).to({graphics:mask_8_graphics_192,x:218,y:219.3}).wait(1).to({graphics:mask_8_graphics_193,x:217.2,y:220.8}).wait(1).to({graphics:mask_8_graphics_194,x:216.5,y:222.4}).wait(1).to({graphics:mask_8_graphics_195,x:215.7,y:223.9}).wait(1).to({graphics:mask_8_graphics_196,x:214.9,y:225.4}).wait(1).to({graphics:mask_8_graphics_197,x:214.2,y:227}).wait(1).to({graphics:mask_8_graphics_198,x:213.4,y:228.5}).wait(1).to({graphics:mask_8_graphics_199,x:212.7,y:230.1}).wait(1).to({graphics:mask_8_graphics_200,x:211.9,y:231.6}).wait(1).to({graphics:mask_8_graphics_201,x:211.2,y:233.2}).wait(1).to({graphics:mask_8_graphics_202,x:210.4,y:234.7}).wait(1).to({graphics:mask_8_graphics_203,x:209.6,y:236.3}).wait(1).to({graphics:mask_8_graphics_204,x:208.9,y:237.8}).wait(1).to({graphics:mask_8_graphics_205,x:208.1,y:239.3}).wait(1).to({graphics:mask_8_graphics_206,x:207.4,y:240.9}).wait(1).to({graphics:mask_8_graphics_207,x:206.6,y:242.4}).wait(1).to({graphics:mask_8_graphics_208,x:205.9,y:244}).wait(1).to({graphics:mask_8_graphics_209,x:205.1,y:245.5}).wait(1).to({graphics:mask_8_graphics_210,x:204.3,y:247.1}).wait(1).to({graphics:mask_8_graphics_211,x:203.6,y:248.6}).wait(1).to({graphics:mask_8_graphics_212,x:202.8,y:250.2}).wait(1).to({graphics:mask_8_graphics_213,x:202.1,y:251.7}).wait(1).to({graphics:mask_8_graphics_214,x:201.3,y:253.2}).wait(1).to({graphics:mask_8_graphics_215,x:200.5,y:254.8}).wait(1).to({graphics:mask_8_graphics_216,x:199.8,y:256.3}).wait(1).to({graphics:mask_8_graphics_217,x:199,y:257.9}).wait(1).to({graphics:mask_8_graphics_218,x:159.9,y:226.7}).wait(458));

	// 2
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(20,1,1).p("ARh80QhLF/lbI/QlbI/k2IRQk2IRkRJlQkQJkkyih");
	this.shape_9.setTransform(170.7,276.5);
	this.shape_9._off = true;

	var maskedShapeInstanceList = [this.shape_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(100).to({_off:false},0).wait(576));

	// Layer 20
	this.instance_4 = new lib.ar1("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(143.3,119.3,1,1,0,0,0,-0.8,0.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).wait(667));

	// Layer 1 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_9 = new cjs.Graphics().p("AI4QjICgiqIEHD3IigCqg");
	var mask_9_graphics_10 = new cjs.Graphics().p("AjbgdICxi7IEGD2IixC7g");
	var mask_9_graphics_11 = new cjs.Graphics().p("AjigUIC/jNIEGD3Ii/DLg");
	var mask_9_graphics_12 = new cjs.Graphics().p("AjqgMIDQjdIEFD2IjPDdg");
	var mask_9_graphics_13 = new cjs.Graphics().p("AjygDIDgjvIEGD3IjhDtg");
	var mask_9_graphics_14 = new cjs.Graphics().p("Aj6AEIDvj+IEGD3IjvD+g");
	var mask_9_graphics_15 = new cjs.Graphics().p("AkCAMID/kOIEGD3Ij/EOg");
	var mask_9_graphics_16 = new cjs.Graphics().p("AkKAVIEOkgIEHD3IkOEgg");
	var mask_9_graphics_17 = new cjs.Graphics().p("AkSAdIEekwIEHD3IkeEwg");
	var mask_9_graphics_18 = new cjs.Graphics().p("AkaAmIEulCIEHD4IkuFAg");
	var mask_9_graphics_19 = new cjs.Graphics().p("AkiAuIE+lSIEHD3Ik+FSg");
	var mask_9_graphics_20 = new cjs.Graphics().p("AkqA3IFOlkIEHD4IlOFig");
	var mask_9_graphics_21 = new cjs.Graphics().p("AkyA/IFel0IEHD3IleF0g");
	var mask_9_graphics_22 = new cjs.Graphics().p("Ak6BHIFumEIEHD3IluGEg");
	var mask_9_graphics_23 = new cjs.Graphics().p("AlCBQIF+mWIEHD3Il+GWg");
	var mask_9_graphics_24 = new cjs.Graphics().p("AlJBYIGNmmIEGD3ImNGmg");
	var mask_9_graphics_25 = new cjs.Graphics().p("AlRBhIGdm4IEGD3ImdG3g");
	var mask_9_graphics_26 = new cjs.Graphics().p("AlZBpIGtnIIEHD3ImtHIg");
	var mask_9_graphics_27 = new cjs.Graphics().p("AlhByIG8naIEHD4Im8HYg");
	var mask_9_graphics_28 = new cjs.Graphics().p("AlpB6IHMnqIEHD3InMHqg");
	var mask_9_graphics_29 = new cjs.Graphics().p("AlxCCIHcn6IEHD3IncH6g");
	var mask_9_graphics_30 = new cjs.Graphics().p("Al5CLIHsoMIEHD3InsIMg");
	var mask_9_graphics_31 = new cjs.Graphics().p("AmBCTIH8ocIEHD3In8Icg");
	var mask_9_graphics_32 = new cjs.Graphics().p("AmJCcIIMotIEHD2IoMItg");
	var mask_9_graphics_33 = new cjs.Graphics().p("AmRCkIIbo+IEID3IobI+g");
	var mask_9_graphics_34 = new cjs.Graphics().p("AmZCtIIrpQIEHD4IoqJOg");
	var mask_9_graphics_35 = new cjs.Graphics().p("AmhC1II8pgIEGD3Io6Jgg");
	var mask_9_graphics_36 = new cjs.Graphics().p("AmoC9IJKpwIEHD3IpKJwg");
	var mask_9_graphics_37 = new cjs.Graphics().p("AmwDGIJaqCIEHD3IpaKCg");
	var mask_9_graphics_38 = new cjs.Graphics().p("Am4DOIJqqSIEHD3IpqKSg");
	var mask_9_graphics_39 = new cjs.Graphics().p("AnADXIJ6qjIEHD2Ip6Kjg");
	var mask_9_graphics_40 = new cjs.Graphics().p("AnIDfIKKq0IEHD3IqKK0g");
	var mask_9_graphics_41 = new cjs.Graphics().p("AnQDoIKarGIEHD3IqaLFg");
	var mask_9_graphics_42 = new cjs.Graphics().p("AnYDwIKqrWIEHD3IqqLWg");
	var mask_9_graphics_43 = new cjs.Graphics().p("AngD4IK6rmIEHD3Iq6Lmg");
	var mask_9_graphics_44 = new cjs.Graphics().p("AnoEBILKr4IEHD3IrKL4g");
	var mask_9_graphics_45 = new cjs.Graphics().p("AnwEJILasIIEHD3IraMIg");
	var mask_9_graphics_46 = new cjs.Graphics().p("An4ESILpsZIEHD2IroMZg");
	var mask_9_graphics_47 = new cjs.Graphics().p("AoAEaIL5sqIEHD3Ir4Mqg");
	var mask_9_graphics_48 = new cjs.Graphics().p("AoIEjIMKs7IEHD2IsJM7g");
	var mask_9_graphics_49 = new cjs.Graphics().p("AoPErIMYtMIEHD3IsYNMg");
	var mask_9_graphics_50 = new cjs.Graphics().p("AD0QjIMptdIEHD3IspNeg");
	var mask_9_graphics_51 = new cjs.Graphics().p("AoeE+IMxtzIEMD4IsxNzg");
	var mask_9_graphics_52 = new cjs.Graphics().p("AolFJIM6uKIERD5Is6OKg");
	var mask_9_graphics_53 = new cjs.Graphics().p("AorFTINBugIEWD6ItCOhg");
	var mask_9_graphics_54 = new cjs.Graphics().p("AozFeINLu3IEcD8ItLO3g");
	var mask_9_graphics_55 = new cjs.Graphics().p("Ao5FpINTvOIEgD9ItTPOg");
	var mask_9_graphics_56 = new cjs.Graphics().p("ApAF0INcvlIElD+ItcPmg");
	var mask_9_graphics_57 = new cjs.Graphics().p("ApHF+INkv7IErEAItkP7g");
	var mask_9_graphics_58 = new cjs.Graphics().p("ApNGJINswTIEvECItsQTg");
	var mask_9_graphics_59 = new cjs.Graphics().p("ApUGUIN1wpIE0ECIt1Qpg");
	var mask_9_graphics_60 = new cjs.Graphics().p("ApbGeIN+xAIE5EFIt+RAg");
	var mask_9_graphics_61 = new cjs.Graphics().p("ApiGpIOHxXIE+EFIuGRYg");
	var mask_9_graphics_62 = new cjs.Graphics().p("AppG0IOPxtIFDEGIuORug");
	var mask_9_graphics_63 = new cjs.Graphics().p("ApvG+IOXyDIFIEHIuXSFg");
	var mask_9_graphics_64 = new cjs.Graphics().p("Ap2HJIOgybIFNEKIugSbg");
	var mask_9_graphics_65 = new cjs.Graphics().p("Ap9HUIOoyyIFTEKIuoSzg");
	var mask_9_graphics_66 = new cjs.Graphics().p("AqEHfIOxzJIFYEMIuxTJg");
	var mask_9_graphics_67 = new cjs.Graphics().p("AqLHqIO6zgIFdENIu6Tgg");
	var mask_9_graphics_68 = new cjs.Graphics().p("AqRH0IPBz2IFiEPIvCT2g");
	var mask_9_graphics_69 = new cjs.Graphics().p("AqYH/IPL0MIFmEPIvKUNg");
	var mask_9_graphics_70 = new cjs.Graphics().p("AqfIKIPT0kIFsERIvTUkg");
	var mask_9_graphics_71 = new cjs.Graphics().p("AqlIUIPb06IFxETIvcU6g");
	var mask_9_graphics_72 = new cjs.Graphics().p("AqsIfIPk1RIF1EUIvkVRg");
	var mask_9_graphics_73 = new cjs.Graphics().p("AqzIqIPt1oIF6EVIvsVog");
	var mask_9_graphics_74 = new cjs.Graphics().p("Aq6I1IP11/IGAEWIv1V/g");
	var mask_9_graphics_75 = new cjs.Graphics().p("ArBI/IP+2VIGFEXIv+WWg");
	var mask_9_graphics_76 = new cjs.Graphics().p("ArHJKIQF2sIGKEZIwFWsg");
	var mask_9_graphics_77 = new cjs.Graphics().p("ArOJVIQO3DIGPEaIwOXDg");
	var mask_9_graphics_78 = new cjs.Graphics().p("ArVJfIQX3ZIGUEcIwXXZg");
	var mask_9_graphics_79 = new cjs.Graphics().p("ArcJqIQg3wIGZEdIwgXwg");
	var mask_9_graphics_80 = new cjs.Graphics().p("ArjJ1IQo4HIGeEeIwoYHg");
	var mask_9_graphics_81 = new cjs.Graphics().p("ArpKAIQw4eIGjEfIwwYeg");
	var mask_9_graphics_82 = new cjs.Graphics().p("AANQeIQ740IGnEhIw6Y0g");
	var mask_9_graphics_83 = new cjs.Graphics().p("AsEKoIRh5vIGoEgIxhZvg");
	var mask_9_graphics_84 = new cjs.Graphics().p("AgbQgISK6qIGnEhIyKapg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_9_graphics_9,x:99.1,y:130.6}).wait(1).to({graphics:mask_9_graphics_10,x:177.9,y:239.6}).wait(1).to({graphics:mask_9_graphics_11,x:178.7,y:238.8}).wait(1).to({graphics:mask_9_graphics_12,x:179.5,y:237.9}).wait(1).to({graphics:mask_9_graphics_13,x:180.3,y:237.1}).wait(1).to({graphics:mask_9_graphics_14,x:181.1,y:236.2}).wait(1).to({graphics:mask_9_graphics_15,x:181.9,y:235.4}).wait(1).to({graphics:mask_9_graphics_16,x:182.7,y:234.5}).wait(1).to({graphics:mask_9_graphics_17,x:183.5,y:233.7}).wait(1).to({graphics:mask_9_graphics_18,x:184.3,y:232.9}).wait(1).to({graphics:mask_9_graphics_19,x:185.1,y:232}).wait(1).to({graphics:mask_9_graphics_20,x:185.9,y:231.2}).wait(1).to({graphics:mask_9_graphics_21,x:186.6,y:230.3}).wait(1).to({graphics:mask_9_graphics_22,x:187.4,y:229.5}).wait(1).to({graphics:mask_9_graphics_23,x:188.2,y:228.6}).wait(1).to({graphics:mask_9_graphics_24,x:189,y:227.8}).wait(1).to({graphics:mask_9_graphics_25,x:189.8,y:227}).wait(1).to({graphics:mask_9_graphics_26,x:190.6,y:226.1}).wait(1).to({graphics:mask_9_graphics_27,x:191.4,y:225.3}).wait(1).to({graphics:mask_9_graphics_28,x:192.2,y:224.4}).wait(1).to({graphics:mask_9_graphics_29,x:193,y:223.6}).wait(1).to({graphics:mask_9_graphics_30,x:193.8,y:222.7}).wait(1).to({graphics:mask_9_graphics_31,x:194.6,y:221.9}).wait(1).to({graphics:mask_9_graphics_32,x:195.4,y:221.1}).wait(1).to({graphics:mask_9_graphics_33,x:196.2,y:220.2}).wait(1).to({graphics:mask_9_graphics_34,x:197,y:219.4}).wait(1).to({graphics:mask_9_graphics_35,x:197.8,y:218.5}).wait(1).to({graphics:mask_9_graphics_36,x:198.5,y:217.7}).wait(1).to({graphics:mask_9_graphics_37,x:199.3,y:216.8}).wait(1).to({graphics:mask_9_graphics_38,x:200.1,y:216}).wait(1).to({graphics:mask_9_graphics_39,x:200.9,y:215.2}).wait(1).to({graphics:mask_9_graphics_40,x:201.7,y:214.3}).wait(1).to({graphics:mask_9_graphics_41,x:202.5,y:213.5}).wait(1).to({graphics:mask_9_graphics_42,x:203.3,y:212.6}).wait(1).to({graphics:mask_9_graphics_43,x:204.1,y:211.8}).wait(1).to({graphics:mask_9_graphics_44,x:204.9,y:210.9}).wait(1).to({graphics:mask_9_graphics_45,x:205.7,y:210.1}).wait(1).to({graphics:mask_9_graphics_46,x:206.5,y:209.3}).wait(1).to({graphics:mask_9_graphics_47,x:207.3,y:208.4}).wait(1).to({graphics:mask_9_graphics_48,x:208.1,y:207.6}).wait(1).to({graphics:mask_9_graphics_49,x:208.8,y:206.7}).wait(1).to({graphics:mask_9_graphics_50,x:131.6,y:130.7}).wait(1).to({graphics:mask_9_graphics_51,x:210.2,y:204.9}).wait(1).to({graphics:mask_9_graphics_52,x:210.8,y:203.9}).wait(1).to({graphics:mask_9_graphics_53,x:211.4,y:203}).wait(1).to({graphics:mask_9_graphics_54,x:212,y:202}).wait(1).to({graphics:mask_9_graphics_55,x:212.6,y:201}).wait(1).to({graphics:mask_9_graphics_56,x:213.2,y:200.1}).wait(1).to({graphics:mask_9_graphics_57,x:213.8,y:199.1}).wait(1).to({graphics:mask_9_graphics_58,x:214.4,y:198.1}).wait(1).to({graphics:mask_9_graphics_59,x:215,y:197.1}).wait(1).to({graphics:mask_9_graphics_60,x:215.6,y:196.2}).wait(1).to({graphics:mask_9_graphics_61,x:216.1,y:195.2}).wait(1).to({graphics:mask_9_graphics_62,x:216.8,y:194.2}).wait(1).to({graphics:mask_9_graphics_63,x:217.3,y:193.3}).wait(1).to({graphics:mask_9_graphics_64,x:217.9,y:192.3}).wait(1).to({graphics:mask_9_graphics_65,x:218.5,y:191.3}).wait(1).to({graphics:mask_9_graphics_66,x:219.1,y:190.3}).wait(1).to({graphics:mask_9_graphics_67,x:219.7,y:189.4}).wait(1).to({graphics:mask_9_graphics_68,x:220.3,y:188.4}).wait(1).to({graphics:mask_9_graphics_69,x:220.9,y:187.4}).wait(1).to({graphics:mask_9_graphics_70,x:221.5,y:186.4}).wait(1).to({graphics:mask_9_graphics_71,x:222.1,y:185.5}).wait(1).to({graphics:mask_9_graphics_72,x:222.7,y:184.5}).wait(1).to({graphics:mask_9_graphics_73,x:223.3,y:183.5}).wait(1).to({graphics:mask_9_graphics_74,x:223.9,y:182.5}).wait(1).to({graphics:mask_9_graphics_75,x:224.5,y:181.6}).wait(1).to({graphics:mask_9_graphics_76,x:225.1,y:180.6}).wait(1).to({graphics:mask_9_graphics_77,x:225.6,y:179.6}).wait(1).to({graphics:mask_9_graphics_78,x:226.2,y:178.7}).wait(1).to({graphics:mask_9_graphics_79,x:226.8,y:177.7}).wait(1).to({graphics:mask_9_graphics_80,x:227.4,y:176.7}).wait(1).to({graphics:mask_9_graphics_81,x:228,y:175.7}).wait(1).to({graphics:mask_9_graphics_82,x:151.9,y:134.3}).wait(1).to({graphics:mask_9_graphics_83,x:230.5,y:172}).wait(1).to({graphics:mask_9_graphics_84,x:155.8,y:134.4}).wait(592));

	// 1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(20,1,1).p("AnuLGQFhlAENmSQENmUBikl");
	this.shape_10.setTransform(233.5,162.5);
	this.shape_10._off = true;

	var maskedShapeInstanceList = [this.shape_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(9).to({_off:false},0).wait(667));

	// Letter
	this.instance_5 = new lib.Symbol1("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(275,275);
	this.instance_5.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(676));

	// Background
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_11.setTransform(275,275,3.373,2.543);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_12.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11}]}).wait(676));

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