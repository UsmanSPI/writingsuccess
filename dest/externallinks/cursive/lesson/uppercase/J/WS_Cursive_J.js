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


(lib.J = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AxBd4QhRhYAAiJQABiJBTiLQA/huB3h3QH3muEPi8Qg/jUgjjXQgfjZAAjZQAAkbA4kIQA7kbB4jvICJjhQBZh1BjhYQBvhiBygzQCCg4CBAAQCpAABoBiQBwBkABCmQAABzgzB1IhuDlQrgXVAGAAQBtAADOj7ICZisQBThRBEAAQAqgYAZAAQB8AAAAByQAAA2gvAlQiICYizCRIlcD2IjhB4IBpDSQAdAfAAAnQAAB4h8AAQhkAAhGioIlnK/QhaCthxBpQiPCEilAAQiGAAhQhagAlnQEQjoCyh6B6IiVC3QhABiABBOQAABVBCAAQBVAABXhpIB2i0IDqnaQgOAFgKAKgAIw6lQiXBYh4CrQhrCahJDSQhFC8giDXQgfDDABC3QAAD5A7E9IMG4rQBujeAAhOQAAihiVAAQhQAAiCBGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117,-200.1,234.1,400.4);


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


(lib.ar3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(58.8,-90.6,1,1,19.7,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.3,regY:0.2,rotation:43.4,guide:{path:[58.8,-90.4,25.2,6.7,-58.9,91]}},104).wait(1));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ABZmiIBBhiIDyCfIhBBjg");
	var mask_graphics_1 = new cjs.Graphics().p("AifgVIBNh0IDyCfIhNB0g");
	var mask_graphics_2 = new cjs.Graphics().p("AikgMIBYiGIDxCfIhYCGg");
	var mask_graphics_3 = new cjs.Graphics().p("AiqgDIBjiYIDyCgIhkCXg");
	var mask_graphics_4 = new cjs.Graphics().p("AiwAEIBvinIDyCgIhvCng");
	var mask_graphics_5 = new cjs.Graphics().p("Ai2ANIB7i5IDyCgIh7C5g");
	var mask_graphics_6 = new cjs.Graphics().p("Ai7AWICGjLIDxCgIiGDLg");
	var mask_graphics_7 = new cjs.Graphics().p("AjBAfICRjdIDyChIiRDbg");
	var mask_graphics_8 = new cjs.Graphics().p("AjHAnICdjtIDyCgIidDtg");
	var mask_graphics_9 = new cjs.Graphics().p("AjMAwICoj/IDyCgIipD/g");
	var mask_graphics_10 = new cjs.Graphics().p("AjSA4IC0kQIDxChIi0EPg");
	var mask_graphics_11 = new cjs.Graphics().p("AjYBBIDAkhIDxCgIjAEhg");
	var mask_graphics_12 = new cjs.Graphics().p("AjeBKIDLkzIDyCgIjMEzg");
	var mask_graphics_13 = new cjs.Graphics().p("AjkBTIDXlFIDyCgIjXFFg");
	var mask_graphics_14 = new cjs.Graphics().p("AjqBcIDjlXIDyCgIjjFXg");
	var mask_graphics_15 = new cjs.Graphics().p("AjvBlIDulpIDxCgIjuFog");
	var mask_graphics_16 = new cjs.Graphics().p("Aj1BtID4l5IDzCgIj5F5g");
	var mask_graphics_17 = new cjs.Graphics().p("Aj7B2IEEmLIDzCgIkEGLg");
	var mask_graphics_18 = new cjs.Graphics().p("AkBB/IEQmdIDzCgIkQGdg");
	var mask_graphics_19 = new cjs.Graphics().p("AkGCHIEbmuIDyCgIkbGug");
	var mask_graphics_20 = new cjs.Graphics().p("AkMCQIEmm/IDzCgIknG/g");
	var mask_graphics_21 = new cjs.Graphics().p("AkSCZIEynRIDzCgIkyHRg");
	var mask_graphics_22 = new cjs.Graphics().p("AkYCiIE+njIDzCgIk+Hjg");
	var mask_graphics_23 = new cjs.Graphics().p("AkdCqIFJn0IDyCgIlJH1g");
	var mask_graphics_24 = new cjs.Graphics().p("AkjCzIFUoFIDzCgIlVIFg");
	var mask_graphics_25 = new cjs.Graphics().p("AkpC8IFgoXIDzCgIlgIXg");
	var mask_graphics_26 = new cjs.Graphics().p("AkvDFIFsopIDzCgIlsIpg");
	var mask_graphics_27 = new cjs.Graphics().p("Ak1DNIF4o5IDyCgIl3I5g");
	var mask_graphics_28 = new cjs.Graphics().p("Ak6DWIGDpLIDyCgImDJLg");
	var mask_graphics_29 = new cjs.Graphics().p("AlADfIGPpdIDyCgImPJdg");
	var mask_graphics_30 = new cjs.Graphics().p("AlGDoIGapvIDzCgImaJug");
	var mask_graphics_31 = new cjs.Graphics().p("AlMDwIGmp/IDyCgImlJ/g");
	var mask_graphics_32 = new cjs.Graphics().p("AlRD5IGxqRIDyCgImxKRg");
	var mask_graphics_33 = new cjs.Graphics().p("AlXECIG9qjIDyCgIm9Kjg");
	var mask_graphics_34 = new cjs.Graphics().p("AldEKIHJq0IDyCgInIK0g");
	var mask_graphics_35 = new cjs.Graphics().p("AljETIHUrFIDzCgInULFg");
	var mask_graphics_36 = new cjs.Graphics().p("AloEcIHfrXIDyCgInfLXg");
	var mask_graphics_37 = new cjs.Graphics().p("AluElIHrrpIDyCgInrLpg");
	var mask_graphics_38 = new cjs.Graphics().p("Al0EtIH3r6IDyCgIn2L6g");
	var mask_graphics_39 = new cjs.Graphics().p("Al6E2IICsLIDzCgIoCMLg");
	var mask_graphics_40 = new cjs.Graphics().p("Al/E/IINsdIDyCgIoNMdg");
	var mask_graphics_41 = new cjs.Graphics().p("AmFFIIIZsvIDyCgIoZMvg");
	var mask_graphics_42 = new cjs.Graphics().p("AmLFRIIltBIDyCgIokNBg");
	var mask_graphics_43 = new cjs.Graphics().p("AmRFZIIwtRIDzCgIowNRg");
	var mask_graphics_44 = new cjs.Graphics().p("AmWFiII7tjIDyCgIo7Njg");
	var mask_graphics_45 = new cjs.Graphics().p("AmcFrIJHt1IDyCgIpHN1g");
	var mask_graphics_46 = new cjs.Graphics().p("AmiFzIJTuFIDyCgIpTOGg");
	var mask_graphics_47 = new cjs.Graphics().p("AmoF8IJeuXIDzCgIpeOXg");
	var mask_graphics_48 = new cjs.Graphics().p("AmuGFIJqupIDyCgIppOpg");
	var mask_graphics_49 = new cjs.Graphics().p("AmzGOIJ1u7IDyCgIp1O7g");
	var mask_graphics_50 = new cjs.Graphics().p("Am5GWIKBvLIDyCgIqBPMg");
	var mask_graphics_51 = new cjs.Graphics().p("Am/GfIKMvdIDzCgIqMPdg");
	var mask_graphics_52 = new cjs.Graphics().p("AnFGoIKYvvIDyCgIqXPvg");
	var mask_graphics_53 = new cjs.Graphics().p("AnLGxIKkwBIDyCgIqjQBg");
	var mask_graphics_54 = new cjs.Graphics().p("AnQG6IKvwSIDyCgIqvQSg");
	var mask_graphics_55 = new cjs.Graphics().p("AnWHCIK7wjIDyCgIq6Qjg");
	var mask_graphics_56 = new cjs.Graphics().p("AncHLILGw1IDzCgIrGQ1g");
	var mask_graphics_57 = new cjs.Graphics().p("AnhHUILRxHIDyCgIrRRHg");
	var mask_graphics_58 = new cjs.Graphics().p("AnnHdILdxYIDyCgIrdRXg");
	var mask_graphics_59 = new cjs.Graphics().p("AntHlILpxpIDyCgIroRpg");
	var mask_graphics_60 = new cjs.Graphics().p("AnzHuIL0x7IDzCgIr0R7g");
	var mask_graphics_61 = new cjs.Graphics().p("An4H2IL/yLIDyCgIr/SLg");
	var mask_graphics_62 = new cjs.Graphics().p("An+H/IMLydIDyCgIsLSdg");
	var mask_graphics_63 = new cjs.Graphics().p("AoEIIIMXyvIDyCgIsWSvg");
	var mask_graphics_64 = new cjs.Graphics().p("AoKIRIMizBIDzCgIsiTBg");
	var mask_graphics_65 = new cjs.Graphics().p("AoPIZIMtzRIDyCgIstTSg");
	var mask_graphics_66 = new cjs.Graphics().p("AoVIjIM5zlIDyCgIs5Tkg");
	var mask_graphics_67 = new cjs.Graphics().p("AobIrINFz1IDyCgItET1g");
	var mask_graphics_68 = new cjs.Graphics().p("AohI0INQ0HIDzCgItQUHg");
	var mask_graphics_69 = new cjs.Graphics().p("AomI9INb0ZIDyCgItbUZg");
	var mask_graphics_70 = new cjs.Graphics().p("AosJFINn0qIDyCgItnUqg");
	var mask_graphics_71 = new cjs.Graphics().p("AoyJOINz07IDyCgItzU7g");
	var mask_graphics_72 = new cjs.Graphics().p("Ao4JXIN+1NIDzCgIt+VNg");
	var mask_graphics_73 = new cjs.Graphics().p("Ao+JgIOK1fIDzCgIuKVfg");
	var mask_graphics_74 = new cjs.Graphics().p("ApEJoIOW1wIDyCgIuVVxg");
	var mask_graphics_75 = new cjs.Graphics().p("ApJJxIOh2BIDyCgIuhWBg");
	var mask_graphics_76 = new cjs.Graphics().p("ApPJ6IOt2TIDyCgIutWTg");
	var mask_graphics_77 = new cjs.Graphics().p("ApVKDIO42lIDzCgIu4Wlg");
	var mask_graphics_78 = new cjs.Graphics().p("ApbKMIPE23IDzCgIvEW3g");
	var mask_graphics_79 = new cjs.Graphics().p("AphKUIPQ3HIDzCgIvQXHg");
	var mask_graphics_80 = new cjs.Graphics().p("ApmKdIPb3ZIDyCgIvbXZg");
	var mask_graphics_81 = new cjs.Graphics().p("ApsKmIPm3rIDzCgIvnXqg");
	var mask_graphics_82 = new cjs.Graphics().p("ApyKuIPy37IDzCgIvyX7g");
	var mask_graphics_83 = new cjs.Graphics().p("Ap4K3IP+4NIDzCgIv+YNg");
	var mask_graphics_84 = new cjs.Graphics().p("Ap9LAIQJ4fIDyCgIwJYfg");
	var mask_graphics_85 = new cjs.Graphics().p("AqDLIIQU4wIDzCgIwVYwg");
	var mask_graphics_86 = new cjs.Graphics().p("AqJLRIQg5BIDzCgIwgZBg");
	var mask_graphics_87 = new cjs.Graphics().p("AqPLaIQs5TIDzCgIwsZTg");
	var mask_graphics_88 = new cjs.Graphics().p("AqULjIQ35lIDyCgIw3Zlg");
	var mask_graphics_89 = new cjs.Graphics().p("AqaLrIRC52IDzCgIxCZ2g");
	var mask_graphics_90 = new cjs.Graphics().p("AqgL0IRO6HIDzCgIxOaHg");
	var mask_graphics_91 = new cjs.Graphics().p("AqlL9IRZ6ZIDzCgIxaaZg");
	var mask_graphics_92 = new cjs.Graphics().p("AqrMGIRl6rIDyCgIxlarg");
	var mask_graphics_93 = new cjs.Graphics().p("AqxMPIRw69IDzCgIxwa9g");
	var mask_graphics_94 = new cjs.Graphics().p("Aq3MXIR87NIDzCgIx9bNg");
	var mask_graphics_95 = new cjs.Graphics().p("Aq9MgISI7fIDzCgIyIbfg");
	var mask_graphics_96 = new cjs.Graphics().p("ArDMpISU7xIDzCgIyUbxg");
	var mask_graphics_97 = new cjs.Graphics().p("ArIMxISf8BIDyCgIyfcBg");
	var mask_graphics_98 = new cjs.Graphics().p("ArOM6ISq8TIDzCgIyrcTg");
	var mask_graphics_99 = new cjs.Graphics().p("ArUNDIS28lIDzCgIy2clg");
	var mask_graphics_100 = new cjs.Graphics().p("AraNMITC83IDzCgIzCc3g");
	var mask_graphics_101 = new cjs.Graphics().p("ArfNUITN9HIDyCgIzNdIg");
	var mask_graphics_102 = new cjs.Graphics().p("ArlNdITY9ZIDzCgIzZdZg");
	var mask_graphics_103 = new cjs.Graphics().p("ArrNmITk9rIDzCgIzkdrg");
	var mask_graphics_104 = new cjs.Graphics().p("ArwNvITv99IDyCgIzvd9g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:39.6,y:-51.7}).wait(1).to({graphics:mask_graphics_1,x:63.3,y:-89.7}).wait(1).to({graphics:mask_graphics_2,x:62.7,y:-88.8}).wait(1).to({graphics:mask_graphics_3,x:62.2,y:-87.9}).wait(1).to({graphics:mask_graphics_4,x:61.6,y:-87.1}).wait(1).to({graphics:mask_graphics_5,x:61,y:-86.2}).wait(1).to({graphics:mask_graphics_6,x:60.4,y:-85.3}).wait(1).to({graphics:mask_graphics_7,x:59.9,y:-84.4}).wait(1).to({graphics:mask_graphics_8,x:59.3,y:-83.6}).wait(1).to({graphics:mask_graphics_9,x:58.7,y:-82.7}).wait(1).to({graphics:mask_graphics_10,x:58.1,y:-81.8}).wait(1).to({graphics:mask_graphics_11,x:57.5,y:-81}).wait(1).to({graphics:mask_graphics_12,x:57,y:-80.1}).wait(1).to({graphics:mask_graphics_13,x:56.4,y:-79.2}).wait(1).to({graphics:mask_graphics_14,x:55.8,y:-78.4}).wait(1).to({graphics:mask_graphics_15,x:55.2,y:-77.5}).wait(1).to({graphics:mask_graphics_16,x:54.7,y:-76.6}).wait(1).to({graphics:mask_graphics_17,x:54.1,y:-75.7}).wait(1).to({graphics:mask_graphics_18,x:53.5,y:-74.9}).wait(1).to({graphics:mask_graphics_19,x:52.9,y:-74}).wait(1).to({graphics:mask_graphics_20,x:52.4,y:-73.1}).wait(1).to({graphics:mask_graphics_21,x:51.8,y:-72.2}).wait(1).to({graphics:mask_graphics_22,x:51.2,y:-71.4}).wait(1).to({graphics:mask_graphics_23,x:50.6,y:-70.5}).wait(1).to({graphics:mask_graphics_24,x:50.1,y:-69.6}).wait(1).to({graphics:mask_graphics_25,x:49.5,y:-68.7}).wait(1).to({graphics:mask_graphics_26,x:48.9,y:-67.9}).wait(1).to({graphics:mask_graphics_27,x:48.4,y:-67}).wait(1).to({graphics:mask_graphics_28,x:47.8,y:-66.1}).wait(1).to({graphics:mask_graphics_29,x:47.2,y:-65.3}).wait(1).to({graphics:mask_graphics_30,x:46.6,y:-64.4}).wait(1).to({graphics:mask_graphics_31,x:46.1,y:-63.5}).wait(1).to({graphics:mask_graphics_32,x:45.5,y:-62.6}).wait(1).to({graphics:mask_graphics_33,x:44.9,y:-61.8}).wait(1).to({graphics:mask_graphics_34,x:44.3,y:-60.9}).wait(1).to({graphics:mask_graphics_35,x:43.7,y:-60}).wait(1).to({graphics:mask_graphics_36,x:43.2,y:-59.1}).wait(1).to({graphics:mask_graphics_37,x:42.6,y:-58.3}).wait(1).to({graphics:mask_graphics_38,x:42,y:-57.4}).wait(1).to({graphics:mask_graphics_39,x:41.4,y:-56.5}).wait(1).to({graphics:mask_graphics_40,x:40.9,y:-55.7}).wait(1).to({graphics:mask_graphics_41,x:40.3,y:-54.8}).wait(1).to({graphics:mask_graphics_42,x:39.7,y:-53.9}).wait(1).to({graphics:mask_graphics_43,x:39.1,y:-53}).wait(1).to({graphics:mask_graphics_44,x:38.6,y:-52.2}).wait(1).to({graphics:mask_graphics_45,x:38,y:-51.3}).wait(1).to({graphics:mask_graphics_46,x:37.4,y:-50.4}).wait(1).to({graphics:mask_graphics_47,x:36.8,y:-49.6}).wait(1).to({graphics:mask_graphics_48,x:36.3,y:-48.7}).wait(1).to({graphics:mask_graphics_49,x:35.7,y:-47.8}).wait(1).to({graphics:mask_graphics_50,x:35.1,y:-46.9}).wait(1).to({graphics:mask_graphics_51,x:34.5,y:-46.1}).wait(1).to({graphics:mask_graphics_52,x:34,y:-45.2}).wait(1).to({graphics:mask_graphics_53,x:33.4,y:-44.3}).wait(1).to({graphics:mask_graphics_54,x:32.8,y:-43.4}).wait(1).to({graphics:mask_graphics_55,x:32.2,y:-42.6}).wait(1).to({graphics:mask_graphics_56,x:31.6,y:-41.7}).wait(1).to({graphics:mask_graphics_57,x:31.1,y:-40.8}).wait(1).to({graphics:mask_graphics_58,x:30.5,y:-39.9}).wait(1).to({graphics:mask_graphics_59,x:29.9,y:-39.1}).wait(1).to({graphics:mask_graphics_60,x:29.3,y:-38.2}).wait(1).to({graphics:mask_graphics_61,x:28.8,y:-37.3}).wait(1).to({graphics:mask_graphics_62,x:28.2,y:-36.5}).wait(1).to({graphics:mask_graphics_63,x:27.6,y:-35.6}).wait(1).to({graphics:mask_graphics_64,x:27,y:-34.7}).wait(1).to({graphics:mask_graphics_65,x:26.5,y:-33.8}).wait(1).to({graphics:mask_graphics_66,x:25.9,y:-33}).wait(1).to({graphics:mask_graphics_67,x:25.3,y:-32.1}).wait(1).to({graphics:mask_graphics_68,x:24.7,y:-31.2}).wait(1).to({graphics:mask_graphics_69,x:24.2,y:-30.4}).wait(1).to({graphics:mask_graphics_70,x:23.6,y:-29.5}).wait(1).to({graphics:mask_graphics_71,x:23,y:-28.6}).wait(1).to({graphics:mask_graphics_72,x:22.4,y:-27.7}).wait(1).to({graphics:mask_graphics_73,x:21.8,y:-26.9}).wait(1).to({graphics:mask_graphics_74,x:21.3,y:-26}).wait(1).to({graphics:mask_graphics_75,x:20.7,y:-25.1}).wait(1).to({graphics:mask_graphics_76,x:20.1,y:-24.2}).wait(1).to({graphics:mask_graphics_77,x:19.5,y:-23.4}).wait(1).to({graphics:mask_graphics_78,x:19,y:-22.5}).wait(1).to({graphics:mask_graphics_79,x:18.4,y:-21.6}).wait(1).to({graphics:mask_graphics_80,x:17.8,y:-20.8}).wait(1).to({graphics:mask_graphics_81,x:17.3,y:-19.9}).wait(1).to({graphics:mask_graphics_82,x:16.7,y:-19}).wait(1).to({graphics:mask_graphics_83,x:16.1,y:-18.1}).wait(1).to({graphics:mask_graphics_84,x:15.5,y:-17.3}).wait(1).to({graphics:mask_graphics_85,x:15,y:-16.4}).wait(1).to({graphics:mask_graphics_86,x:14.4,y:-15.5}).wait(1).to({graphics:mask_graphics_87,x:13.8,y:-14.6}).wait(1).to({graphics:mask_graphics_88,x:13.2,y:-13.8}).wait(1).to({graphics:mask_graphics_89,x:12.7,y:-12.9}).wait(1).to({graphics:mask_graphics_90,x:12.1,y:-12}).wait(1).to({graphics:mask_graphics_91,x:11.5,y:-11.1}).wait(1).to({graphics:mask_graphics_92,x:10.9,y:-10.3}).wait(1).to({graphics:mask_graphics_93,x:10.4,y:-9.4}).wait(1).to({graphics:mask_graphics_94,x:9.8,y:-8.5}).wait(1).to({graphics:mask_graphics_95,x:9.2,y:-7.7}).wait(1).to({graphics:mask_graphics_96,x:8.6,y:-6.8}).wait(1).to({graphics:mask_graphics_97,x:8,y:-5.9}).wait(1).to({graphics:mask_graphics_98,x:7.5,y:-5.1}).wait(1).to({graphics:mask_graphics_99,x:6.9,y:-4.2}).wait(1).to({graphics:mask_graphics_100,x:6.3,y:-3.3}).wait(1).to({graphics:mask_graphics_101,x:5.7,y:-2.4}).wait(1).to({graphics:mask_graphics_102,x:5.2,y:-1.6}).wait(1).to({graphics:mask_graphics_103,x:4.6,y:-0.7}).wait(1).to({graphics:mask_graphics_104,x:4,y:0.2}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AJKuBQgCAGgCAFQlTO7s8M9");
	this.shape.setTransform(-0.4,1.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(105));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(48.5,-97,21.5,19.3);


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
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AnAHNQFMq4I1jh");
	this.shape.setTransform(2,-3.8);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(60));

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
(lib.WS_Cursive_J = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_614 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(614).call(this.frame_614).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(289.6,365.5,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[289.5,365.6,279.6,355.7,275.9,338.1,275.9,338.1,275.9,338.1,269,313.4,261.4,263.6,253.8,213.8,283.4,148.6,313,83.4,354.8,87.3,362.3,88.2,365.7,89.8]}},150).wait(15).to({x:367.8,y:90.6},0).to({guide:{path:[367.8,90.7,378.3,93.5,378.8,105.9,379.3,118.2,369.8,140.1,350.7,183.7,328.6,226.9,306.5,270,293.2,298.9,279.9,327.7,266.4,353.7,252.9,379.6,238.6,411.6,224.2,443.6,208,457.9,193,471.1,180.7,462]}},200).wait(11).to({x:178.4,y:460.2},0).to({guide:{path:[178.5,460.2,162.9,432.1,185.8,409.9,208.7,387.7,230.2,371.2,251.8,354.8,276,338,276,338,276,338,307.4,316.2,328.7,302.3,357,283.7,368,267.2]}},159).wait(11).to({x:368.3,y:267.4},0).to({guide:{path:[368.3,267.4,373.7,256.4,381,246.5,389.6,234.9,402.7,228.5,415.1,222.3,428.9,223.5,442.6,224,455.3,229.6,468.4,235.3,478.6,245.3,489.2,255.6,499.1,266.7,508,276.9,516.8,287,526.5,298,536.9,308.2,547.3,318.2,561.4,319.6,575.3,321.1,588,315.1,601.4,308.8,613.9,300.7,625.1,293.4,634.7,284.1,637.8,280.9,641,277.9]}},59).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(366.8,89.9,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},150).wait(15).to({_off:false,x:176.8,y:459.9},0).to({_off:true},200).wait(11).to({_off:false,x:367.8,y:268.9},0).to({_off:true},159).wait(71));

	// Layer 11
	this.instance_1 = new lib.ar4("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(123.9,405.4,1,1,0,134.3,-45.7,-0.1,-0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(385).to({_off:false},0).wait(230));

	// Layer 8 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_385 = new cjs.Graphics().p("EAF/Ai8IFSl+IG6GHIlSF+g");
	var mask_graphics_386 = new cjs.Graphics().p("AmSgOIFTl/IHSGcIlTF/g");
	var mask_graphics_387 = new cjs.Graphics().p("AmfgYIFUmAIHrGxIlUGBg");
	var mask_graphics_388 = new cjs.Graphics().p("AmsgjIFVmBIIEHIIlVGBg");
	var mask_graphics_389 = new cjs.Graphics().p("Am5gtIFWmDIIdHfIlWGCg");
	var mask_graphics_390 = new cjs.Graphics().p("AnGg4IFXmDII2H0IlXGDg");
	var mask_graphics_391 = new cjs.Graphics().p("AnThCIFYmFIJPILIlYGEg");
	var mask_graphics_392 = new cjs.Graphics().p("AnghNIFZmGIJoIhIlZGGg");
	var mask_graphics_393 = new cjs.Graphics().p("AnthYIFamGIKBI3IlaGGg");
	var mask_graphics_394 = new cjs.Graphics().p("An6hiIFamIIKbJNIlaGIg");
	var mask_graphics_395 = new cjs.Graphics().p("AoHhtIFbmJIK0JkIlbGJg");
	var mask_graphics_396 = new cjs.Graphics().p("AoUh4IFdmJILMJ5IlcGLg");
	var mask_graphics_397 = new cjs.Graphics().p("AohiCIFdmLILmKQIldGLg");
	var mask_graphics_398 = new cjs.Graphics().p("AouiNIFemMIL/KnIlfGMg");
	var mask_graphics_399 = new cjs.Graphics().p("Ao7iXIFfmNIMYK8IlgGNg");
	var mask_graphics_400 = new cjs.Graphics().p("ApIiiIFhmOIMwLTIlgGOg");
	var mask_graphics_401 = new cjs.Graphics().p("ApVisIFhmQINKLpIlhGQg");
	var mask_graphics_402 = new cjs.Graphics().p("AgzdEIFhmRINlMAIljGRg");
	var mask_graphics_403 = new cjs.Graphics().p("ApoiwIFumeINjL/IluGeg");
	var mask_graphics_404 = new cjs.Graphics().p("ApuiqIF6mqINjL/Il6Gqg");
	var mask_graphics_405 = new cjs.Graphics().p("Ap0ijIGGm4INjL/ImGG4g");
	var mask_graphics_406 = new cjs.Graphics().p("Ap6icIGSnGINjL/ImSHGg");
	var mask_graphics_407 = new cjs.Graphics().p("Ap/iWIGdnSINiL/ImdHSg");
	var mask_graphics_408 = new cjs.Graphics().p("AqFiPIGongINjL/ImpHgg");
	var mask_graphics_409 = new cjs.Graphics().p("AqLiIIG0nuINjL/Im0Hug");
	var mask_graphics_410 = new cjs.Graphics().p("AqRiCIHAn6INjL/InAH6g");
	var mask_graphics_411 = new cjs.Graphics().p("AqXh7IHMoIINjL/InMIIg");
	var mask_graphics_412 = new cjs.Graphics().p("Aqdh1IHYoUINjL+InYIVg");
	var mask_graphics_413 = new cjs.Graphics().p("AqjhuIHkoiINjL/InkIig");
	var mask_graphics_414 = new cjs.Graphics().p("AqohnIHvowINiL/InvIwg");
	var mask_graphics_415 = new cjs.Graphics().p("AquhhIH6o9INkMAIn8I8g");
	var mask_graphics_416 = new cjs.Graphics().p("Aq0haIIGpKINjL/IoGJKg");
	var mask_graphics_417 = new cjs.Graphics().p("Aq6hTIISpYINjL/IoSJYg");
	var mask_graphics_418 = new cjs.Graphics().p("ArAhNIIepkINjL/IoeJkg");
	var mask_graphics_419 = new cjs.Graphics().p("ArGhGIIqpyINjL/IoqJyg");
	var mask_graphics_420 = new cjs.Graphics().p("ArMg/II2qAINjL/Io2KAg");
	var mask_graphics_421 = new cjs.Graphics().p("ArRg4IJBqOINiL/IpBKNg");
	var mask_graphics_422 = new cjs.Graphics().p("ArXgyIJMqaINkL/IpOKag");
	var mask_graphics_423 = new cjs.Graphics().p("ArdgrIJYqoINjL/IpYKog");
	var mask_graphics_424 = new cjs.Graphics().p("ArjglIJkq0INjL/IpkK0g");
	var mask_graphics_425 = new cjs.Graphics().p("ArpgeIJwrCINjL/IpwLCg");
	var mask_graphics_426 = new cjs.Graphics().p("ArvgXIJ8rPINjL+Ip8LPg");
	var mask_graphics_427 = new cjs.Graphics().p("Ar1gRIKIrcINjL/IqILcg");
	var mask_graphics_428 = new cjs.Graphics().p("Ar7gKIKUrqINjL/IqULqg");
	var mask_graphics_429 = new cjs.Graphics().p("AsBgDIKgr4INiMAIqeL2g");
	var mask_graphics_430 = new cjs.Graphics().p("AsHACIKrsDINkMAIqrMDg");
	var mask_graphics_431 = new cjs.Graphics().p("AsMAJIK2sRINjMAIq2MRg");
	var mask_graphics_432 = new cjs.Graphics().p("AsSAPILCsdINjMAIrCMdg");
	var mask_graphics_433 = new cjs.Graphics().p("AsYAWILOsrINjMAIrOMrg");
	var mask_graphics_434 = new cjs.Graphics().p("AseAdILas5INjMAIraM4g");
	var mask_graphics_435 = new cjs.Graphics().p("AskAjILmtFINjMAIrmNFg");
	var mask_graphics_436 = new cjs.Graphics().p("AsqAqILytTINiMAIrwNTg");
	var mask_graphics_437 = new cjs.Graphics().p("AswAxIL9tgINkMAIr9Nfg");
	var mask_graphics_438 = new cjs.Graphics().p("As1A3IMIttINjMAIsINtg");
	var mask_graphics_439 = new cjs.Graphics().p("As7A+IMUt7INjMAIsUN7g");
	var mask_graphics_440 = new cjs.Graphics().p("AtBBEIMguHINjMAIsgOHg");
	var mask_graphics_441 = new cjs.Graphics().p("AtHBLIMsuVINjMAIssOVg");
	var mask_graphics_442 = new cjs.Graphics().p("AtNBSIM4ujINjMBIs4Ohg");
	var mask_graphics_443 = new cjs.Graphics().p("AtTBYINEuvINiMAItCOvg");
	var mask_graphics_444 = new cjs.Graphics().p("AtZBfINPu9INkMAItPO9g");
	var mask_graphics_445 = new cjs.Graphics().p("AteBmINavKINjL/ItaPKg");
	var mask_graphics_446 = new cjs.Graphics().p("AtkBsINlvXINkMAItlPXg");
	var mask_graphics_447 = new cjs.Graphics().p("AtqBzINxvlINkMAItxPlg");
	var mask_graphics_448 = new cjs.Graphics().p("AtwB5IN9vxINkMAIt9Pxg");
	var mask_graphics_449 = new cjs.Graphics().p("At2CAIOJv/INkMAIuJP/g");
	var mask_graphics_450 = new cjs.Graphics().p("At8CHIOUwNINlMBIuUQLg");
	var mask_graphics_451 = new cjs.Graphics().p("AuCCNIOgwZINlMAIugQZg");
	var mask_graphics_452 = new cjs.Graphics().p("AuHCUIOrwnINkMAIurQng");
	var mask_graphics_453 = new cjs.Graphics().p("AuNCbIO3w0INkL/Iu3Q0g");
	var mask_graphics_454 = new cjs.Graphics().p("AuTChIPDxBINkMAIvDRBg");
	var mask_graphics_455 = new cjs.Graphics().p("AuZCoIPPxPINkMAIvPRPg");
	var mask_graphics_456 = new cjs.Graphics().p("AufCuIPbxcINkMAIvbRdg");
	var mask_graphics_457 = new cjs.Graphics().p("AulC1IPmxpINlMAIvmRpg");
	var mask_graphics_458 = new cjs.Graphics().p("AurC8IPzx3INjMAIvxR3g");
	var mask_graphics_459 = new cjs.Graphics().p("AuwDCIP9yDINkL/Iv9SFg");
	var mask_graphics_460 = new cjs.Graphics().p("Au2DJIQJyRINkMAIwJSRg");
	var mask_graphics_461 = new cjs.Graphics().p("Au8DQIQVyfINkMAIwVSfg");
	var mask_graphics_462 = new cjs.Graphics().p("AvCDWIQhyrINkMAIwhSrg");
	var mask_graphics_463 = new cjs.Graphics().p("AvIDdIQty5INkMAIwtS5g");
	var mask_graphics_464 = new cjs.Graphics().p("AvODjIQ4zGINlMBIw4TGg");
	var mask_graphics_465 = new cjs.Graphics().p("AvUDqIRFzTINjMAIxDTTg");
	var mask_graphics_466 = new cjs.Graphics().p("AvZDxIRPzhINkMAIxPThg");
	var mask_graphics_467 = new cjs.Graphics().p("AvfD3IRbztINkL/IxbTvg");
	var mask_graphics_468 = new cjs.Graphics().p("AvlD+IRnz7INkMAIxnT7g");
	var mask_graphics_469 = new cjs.Graphics().p("AvrEFIRz0JINkMAIxzUJg");
	var mask_graphics_470 = new cjs.Graphics().p("AvxELIR/0VINkMAIx/UVg");
	var mask_graphics_471 = new cjs.Graphics().p("Av3ESISK0jINlMAIyKUjg");
	var mask_graphics_472 = new cjs.Graphics().p("Av9EYISX0vINkMAIyXUwg");
	var mask_graphics_473 = new cjs.Graphics().p("AwCEfISi09INkMAIyjU9g");
	var mask_graphics_474 = new cjs.Graphics().p("AwIEmISu1LINjMAIyuVLg");
	var mask_graphics_475 = new cjs.Graphics().p("AwOEsIS51YINkMAIy5VZg");
	var mask_graphics_476 = new cjs.Graphics().p("AwUEzITF1lINkMAIzFVlg");
	var mask_graphics_477 = new cjs.Graphics().p("AwaE6ITR1zINkMAIzRVzg");
	var mask_graphics_478 = new cjs.Graphics().p("AwgFAITd1/INkMAIzdV/g");
	var mask_graphics_479 = new cjs.Graphics().p("AwmFHITp2NINkMAIzpWNg");
	var mask_graphics_480 = new cjs.Graphics().p("AwrFNIT02ZINjL/Iz0Wbg");
	var mask_graphics_481 = new cjs.Graphics().p("AwxFUIT/2nINkMAI0AWng");
	var mask_graphics_482 = new cjs.Graphics().p("Aw3FbIUL21INkMAI0LW1g");
	var mask_graphics_483 = new cjs.Graphics().p("Aw9FhIUX3CINkMBI0XXCg");
	var mask_graphics_484 = new cjs.Graphics().p("AxDFoIUj3PINkMAI0jXPg");
	var mask_graphics_485 = new cjs.Graphics().p("AxJFvIUv3dINkMAI0vXdg");
	var mask_graphics_486 = new cjs.Graphics().p("AxPF1IU73pINkMAI07Xpg");
	var mask_graphics_487 = new cjs.Graphics().p("AxUF8IVG33INjMAI1GX3g");
	var mask_graphics_488 = new cjs.Graphics().p("AxaGCIVR4EINkMAI1RYFg");
	var mask_graphics_489 = new cjs.Graphics().p("AxgGKIVd4TINkMAI1dYSg");
	var mask_graphics_490 = new cjs.Graphics().p("AxmGQIVp4fINkMAI1pYfg");
	var mask_graphics_491 = new cjs.Graphics().p("AxsGXIV14tINkMAI11Ytg");
	var mask_graphics_492 = new cjs.Graphics().p("AxyGdIWB45INkMAI2BY5g");
	var mask_graphics_493 = new cjs.Graphics().p("Ax4GkIWN5HINkMAI2NZHg");
	var mask_graphics_494 = new cjs.Graphics().p("Ax9GrIWY5UINjMAI2YZTg");
	var mask_graphics_495 = new cjs.Graphics().p("AyDGxIWj5hINkMAI2jZhg");
	var mask_graphics_496 = new cjs.Graphics().p("AyJG4IWv5vINkMAI2vZvg");
	var mask_graphics_497 = new cjs.Graphics().p("AyPG/IW759INkMBI27Z7g");
	var mask_graphics_498 = new cjs.Graphics().p("AyVHFIXH6JINkMAI3HaJg");
	var mask_graphics_499 = new cjs.Graphics().p("AybHMIXT6XINkMAI3TaXg");
	var mask_graphics_500 = new cjs.Graphics().p("AyhHSIXf6jINkMAI3fajg");
	var mask_graphics_501 = new cjs.Graphics().p("AymHZIXp6xINkMAI3qaxg");
	var mask_graphics_502 = new cjs.Graphics().p("AysHgIX16+INkL/I31a+g");
	var mask_graphics_503 = new cjs.Graphics().p("AyyHmIYB7LINkMAI4BbLg");
	var mask_graphics_504 = new cjs.Graphics().p("Ay4HtIYN7ZINkMAI4NbZg");
	var mask_graphics_505 = new cjs.Graphics().p("Ay+H0IYZ7nINkMBI4Zblg");
	var mask_graphics_506 = new cjs.Graphics().p("AzEH6IYl7zINkMAI4lbzg");
	var mask_graphics_507 = new cjs.Graphics().p("AzKIBIYx8BINkMAI4xcBg");
	var mask_graphics_508 = new cjs.Graphics().p("AzPIHIY78NINlMAI49cNg");
	var mask_graphics_509 = new cjs.Graphics().p("AzVIOIZH8bINkMAI5Hcbg");
	var mask_graphics_510 = new cjs.Graphics().p("AzbIVIZT8pINkMAI5Tcog");
	var mask_graphics_511 = new cjs.Graphics().p("AzhIbIZf81INkMAI5fc1g");
	var mask_graphics_512 = new cjs.Graphics().p("AznIiIZr9DINkMAI5rdDg");
	var mask_graphics_513 = new cjs.Graphics().p("AztIpIZ39QINkL/I53dQg");
	var mask_graphics_514 = new cjs.Graphics().p("AzzIvIaD9dINkMAI6Dddg");
	var mask_graphics_515 = new cjs.Graphics().p("Az4I2IaN9rINlMAI6Pdrg");
	var mask_graphics_516 = new cjs.Graphics().p("Az+I8IaZ93INkMAI6Zd3g");
	var mask_graphics_517 = new cjs.Graphics().p("A0EJDIal+FINkMAI6leFg");
	var mask_graphics_518 = new cjs.Graphics().p("A0KJKIax+TINkMBI6xeRg");
	var mask_graphics_519 = new cjs.Graphics().p("A0QJQIa9+fINkMAI69efg");
	var mask_graphics_520 = new cjs.Graphics().p("A0WJXIbJ+tINkMAI7Jetg");
	var mask_graphics_521 = new cjs.Graphics().p("A0cJeIbV+6INkL/I7Ve6g");
	var mask_graphics_522 = new cjs.Graphics().p("A0iJkIbh/HINkMAI7hfHg");
	var mask_graphics_523 = new cjs.Graphics().p("A0oJrIbs/VINlMAI7sfVg");
	var mask_graphics_524 = new cjs.Graphics().p("A0uJxIb4/hINlL/I74fjg");
	var mask_graphics_525 = new cjs.Graphics().p("A0zJ4IcD/vINkMAI8Dfvg");
	var mask_graphics_526 = new cjs.Graphics().p("A05J/IcP/9INkMAI8Pf9g");
	var mask_graphics_527 = new cjs.Graphics().p("A0/KFMAcbggJINkMAMgcbAgKg");
	var mask_graphics_528 = new cjs.Graphics().p("A1FKMMAcnggXINkMAMgcnAgXg");
	var mask_graphics_529 = new cjs.Graphics().p("A1LKTMAczgglINkMAMgczAglg");
	var mask_graphics_530 = new cjs.Graphics().p("A1RKZMAc+ggxINlMAMgc+Agxg");
	var mask_graphics_531 = new cjs.Graphics().p("A1XKgMAdLgg/INjMAMgdJAg/g");
	var mask_graphics_532 = new cjs.Graphics().p("A1cKmMAdVghMINkMBMgdVAhMg");
	var mask_graphics_533 = new cjs.Graphics().p("A1iKtMAdhghZINkMAMgdhAhZg");
	var mask_graphics_534 = new cjs.Graphics().p("A1oK0MAdtghnINkMAMgdtAhng");
	var mask_graphics_535 = new cjs.Graphics().p("A1uK6MAd5ghzINkL/Mgd5Ah1g");
	var mask_graphics_536 = new cjs.Graphics().p("A10LBMAeFgiBINkMAMgeFAiBg");
	var mask_graphics_537 = new cjs.Graphics().p("A16LIMAeQgiPINlMAMgeQAiPg");
	var mask_graphics_538 = new cjs.Graphics().p("A2ALOMAedgicINjMBMgebAicg");
	var mask_graphics_539 = new cjs.Graphics().p("A2FLVMAengipINkMAMgenAipg");
	var mask_graphics_540 = new cjs.Graphics().p("A2LLcMAezgi3INkMAMgezAi3g");
	var mask_graphics_541 = new cjs.Graphics().p("AtjdFMAe/gjDINlL+MgfAAjFg");
	var mask_graphics_542 = new cjs.Graphics().p("A2lL5MAfngjxINkMAMgfnAjxg");
	var mask_graphics_543 = new cjs.Graphics().p("A25MPMAgPgkdINkMAMggPAkdg");
	var mask_graphics_544 = new cjs.Graphics().p("AufdFMAg3glKINkL+Mgg2AlMg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(385).to({graphics:mask_graphics_385,x:116.3,y:262.7}).wait(1).to({graphics:mask_graphics_386,x:192.4,y:485.6}).wait(1).to({graphics:mask_graphics_387,x:191.2,y:484.5}).wait(1).to({graphics:mask_graphics_388,x:189.9,y:483.3}).wait(1).to({graphics:mask_graphics_389,x:188.7,y:482.2}).wait(1).to({graphics:mask_graphics_390,x:187.5,y:481}).wait(1).to({graphics:mask_graphics_391,x:186.3,y:479.9}).wait(1).to({graphics:mask_graphics_392,x:185.1,y:478.7}).wait(1).to({graphics:mask_graphics_393,x:183.9,y:477.5}).wait(1).to({graphics:mask_graphics_394,x:182.7,y:476.4}).wait(1).to({graphics:mask_graphics_395,x:181.5,y:475.2}).wait(1).to({graphics:mask_graphics_396,x:180.2,y:474.1}).wait(1).to({graphics:mask_graphics_397,x:179,y:472.9}).wait(1).to({graphics:mask_graphics_398,x:177.8,y:471.8}).wait(1).to({graphics:mask_graphics_399,x:176.6,y:470.6}).wait(1).to({graphics:mask_graphics_400,x:175.4,y:469.5}).wait(1).to({graphics:mask_graphics_401,x:174.2,y:468.3}).wait(1).to({graphics:mask_graphics_402,x:117.1,y:262.8}).wait(1).to({graphics:mask_graphics_403,x:173.6,y:466.5}).wait(1).to({graphics:mask_graphics_404,x:174.2,y:465.8}).wait(1).to({graphics:mask_graphics_405,x:174.7,y:465.2}).wait(1).to({graphics:mask_graphics_406,x:175.3,y:464.5}).wait(1).to({graphics:mask_graphics_407,x:175.9,y:463.8}).wait(1).to({graphics:mask_graphics_408,x:176.5,y:463.2}).wait(1).to({graphics:mask_graphics_409,x:177.1,y:462.5}).wait(1).to({graphics:mask_graphics_410,x:177.7,y:461.8}).wait(1).to({graphics:mask_graphics_411,x:178.3,y:461.2}).wait(1).to({graphics:mask_graphics_412,x:178.8,y:460.5}).wait(1).to({graphics:mask_graphics_413,x:179.4,y:459.8}).wait(1).to({graphics:mask_graphics_414,x:180,y:459.2}).wait(1).to({graphics:mask_graphics_415,x:180.6,y:458.5}).wait(1).to({graphics:mask_graphics_416,x:181.2,y:457.9}).wait(1).to({graphics:mask_graphics_417,x:181.8,y:457.2}).wait(1).to({graphics:mask_graphics_418,x:182.4,y:456.5}).wait(1).to({graphics:mask_graphics_419,x:182.9,y:455.9}).wait(1).to({graphics:mask_graphics_420,x:183.5,y:455.2}).wait(1).to({graphics:mask_graphics_421,x:184.1,y:454.6}).wait(1).to({graphics:mask_graphics_422,x:184.7,y:453.9}).wait(1).to({graphics:mask_graphics_423,x:185.3,y:453.2}).wait(1).to({graphics:mask_graphics_424,x:185.9,y:452.6}).wait(1).to({graphics:mask_graphics_425,x:186.5,y:451.9}).wait(1).to({graphics:mask_graphics_426,x:187,y:451.3}).wait(1).to({graphics:mask_graphics_427,x:187.6,y:450.6}).wait(1).to({graphics:mask_graphics_428,x:188.2,y:449.9}).wait(1).to({graphics:mask_graphics_429,x:188.8,y:449.3}).wait(1).to({graphics:mask_graphics_430,x:189.4,y:448.6}).wait(1).to({graphics:mask_graphics_431,x:189.9,y:447.9}).wait(1).to({graphics:mask_graphics_432,x:190.5,y:447.3}).wait(1).to({graphics:mask_graphics_433,x:191.1,y:446.6}).wait(1).to({graphics:mask_graphics_434,x:191.7,y:446}).wait(1).to({graphics:mask_graphics_435,x:192.3,y:445.3}).wait(1).to({graphics:mask_graphics_436,x:192.9,y:444.6}).wait(1).to({graphics:mask_graphics_437,x:193.5,y:444}).wait(1).to({graphics:mask_graphics_438,x:194,y:443.3}).wait(1).to({graphics:mask_graphics_439,x:194.6,y:442.6}).wait(1).to({graphics:mask_graphics_440,x:195.2,y:442}).wait(1).to({graphics:mask_graphics_441,x:195.8,y:441.3}).wait(1).to({graphics:mask_graphics_442,x:196.4,y:440.7}).wait(1).to({graphics:mask_graphics_443,x:197,y:440}).wait(1).to({graphics:mask_graphics_444,x:197.6,y:439.3}).wait(1).to({graphics:mask_graphics_445,x:198.1,y:438.7}).wait(1).to({graphics:mask_graphics_446,x:198.7,y:438}).wait(1).to({graphics:mask_graphics_447,x:199.3,y:437.3}).wait(1).to({graphics:mask_graphics_448,x:199.9,y:436.7}).wait(1).to({graphics:mask_graphics_449,x:200.5,y:436}).wait(1).to({graphics:mask_graphics_450,x:201.1,y:435.4}).wait(1).to({graphics:mask_graphics_451,x:201.7,y:434.7}).wait(1).to({graphics:mask_graphics_452,x:202.2,y:434}).wait(1).to({graphics:mask_graphics_453,x:202.8,y:433.4}).wait(1).to({graphics:mask_graphics_454,x:203.4,y:432.7}).wait(1).to({graphics:mask_graphics_455,x:204,y:432.1}).wait(1).to({graphics:mask_graphics_456,x:204.6,y:431.4}).wait(1).to({graphics:mask_graphics_457,x:205.2,y:430.7}).wait(1).to({graphics:mask_graphics_458,x:205.8,y:430.1}).wait(1).to({graphics:mask_graphics_459,x:206.3,y:429.4}).wait(1).to({graphics:mask_graphics_460,x:206.9,y:428.8}).wait(1).to({graphics:mask_graphics_461,x:207.5,y:428.1}).wait(1).to({graphics:mask_graphics_462,x:208.1,y:427.4}).wait(1).to({graphics:mask_graphics_463,x:208.7,y:426.8}).wait(1).to({graphics:mask_graphics_464,x:209.3,y:426.1}).wait(1).to({graphics:mask_graphics_465,x:209.9,y:425.4}).wait(1).to({graphics:mask_graphics_466,x:210.4,y:424.8}).wait(1).to({graphics:mask_graphics_467,x:211,y:424.1}).wait(1).to({graphics:mask_graphics_468,x:211.6,y:423.5}).wait(1).to({graphics:mask_graphics_469,x:212.2,y:422.8}).wait(1).to({graphics:mask_graphics_470,x:212.8,y:422.1}).wait(1).to({graphics:mask_graphics_471,x:213.4,y:421.5}).wait(1).to({graphics:mask_graphics_472,x:213.9,y:420.8}).wait(1).to({graphics:mask_graphics_473,x:214.5,y:420.1}).wait(1).to({graphics:mask_graphics_474,x:215.1,y:419.5}).wait(1).to({graphics:mask_graphics_475,x:215.7,y:418.8}).wait(1).to({graphics:mask_graphics_476,x:216.3,y:418.2}).wait(1).to({graphics:mask_graphics_477,x:216.9,y:417.5}).wait(1).to({graphics:mask_graphics_478,x:217.4,y:416.8}).wait(1).to({graphics:mask_graphics_479,x:218,y:416.2}).wait(1).to({graphics:mask_graphics_480,x:218.6,y:415.5}).wait(1).to({graphics:mask_graphics_481,x:219.2,y:414.8}).wait(1).to({graphics:mask_graphics_482,x:219.8,y:414.2}).wait(1).to({graphics:mask_graphics_483,x:220.4,y:413.5}).wait(1).to({graphics:mask_graphics_484,x:221,y:412.9}).wait(1).to({graphics:mask_graphics_485,x:221.5,y:412.2}).wait(1).to({graphics:mask_graphics_486,x:222.1,y:411.5}).wait(1).to({graphics:mask_graphics_487,x:222.7,y:410.9}).wait(1).to({graphics:mask_graphics_488,x:223.3,y:410.2}).wait(1).to({graphics:mask_graphics_489,x:223.9,y:409.6}).wait(1).to({graphics:mask_graphics_490,x:224.5,y:408.9}).wait(1).to({graphics:mask_graphics_491,x:225.1,y:408.2}).wait(1).to({graphics:mask_graphics_492,x:225.6,y:407.6}).wait(1).to({graphics:mask_graphics_493,x:226.2,y:406.9}).wait(1).to({graphics:mask_graphics_494,x:226.8,y:406.3}).wait(1).to({graphics:mask_graphics_495,x:227.4,y:405.6}).wait(1).to({graphics:mask_graphics_496,x:228,y:404.9}).wait(1).to({graphics:mask_graphics_497,x:228.6,y:404.3}).wait(1).to({graphics:mask_graphics_498,x:229.2,y:403.6}).wait(1).to({graphics:mask_graphics_499,x:229.7,y:402.9}).wait(1).to({graphics:mask_graphics_500,x:230.3,y:402.3}).wait(1).to({graphics:mask_graphics_501,x:230.9,y:401.6}).wait(1).to({graphics:mask_graphics_502,x:231.5,y:401}).wait(1).to({graphics:mask_graphics_503,x:232.1,y:400.3}).wait(1).to({graphics:mask_graphics_504,x:232.7,y:399.6}).wait(1).to({graphics:mask_graphics_505,x:233.3,y:399}).wait(1).to({graphics:mask_graphics_506,x:233.8,y:398.3}).wait(1).to({graphics:mask_graphics_507,x:234.4,y:397.6}).wait(1).to({graphics:mask_graphics_508,x:235,y:397}).wait(1).to({graphics:mask_graphics_509,x:235.6,y:396.3}).wait(1).to({graphics:mask_graphics_510,x:236.2,y:395.7}).wait(1).to({graphics:mask_graphics_511,x:236.8,y:395}).wait(1).to({graphics:mask_graphics_512,x:237.4,y:394.3}).wait(1).to({graphics:mask_graphics_513,x:237.9,y:393.7}).wait(1).to({graphics:mask_graphics_514,x:238.5,y:393}).wait(1).to({graphics:mask_graphics_515,x:239.1,y:392.3}).wait(1).to({graphics:mask_graphics_516,x:239.7,y:391.7}).wait(1).to({graphics:mask_graphics_517,x:240.3,y:391}).wait(1).to({graphics:mask_graphics_518,x:240.8,y:390.4}).wait(1).to({graphics:mask_graphics_519,x:241.4,y:389.7}).wait(1).to({graphics:mask_graphics_520,x:242,y:389}).wait(1).to({graphics:mask_graphics_521,x:242.6,y:388.4}).wait(1).to({graphics:mask_graphics_522,x:243.2,y:387.7}).wait(1).to({graphics:mask_graphics_523,x:243.8,y:387}).wait(1).to({graphics:mask_graphics_524,x:244.4,y:386.4}).wait(1).to({graphics:mask_graphics_525,x:244.9,y:385.7}).wait(1).to({graphics:mask_graphics_526,x:245.5,y:385.1}).wait(1).to({graphics:mask_graphics_527,x:246.1,y:384.4}).wait(1).to({graphics:mask_graphics_528,x:246.7,y:383.8}).wait(1).to({graphics:mask_graphics_529,x:247.3,y:383.1}).wait(1).to({graphics:mask_graphics_530,x:247.9,y:382.4}).wait(1).to({graphics:mask_graphics_531,x:248.5,y:381.8}).wait(1).to({graphics:mask_graphics_532,x:249,y:381.1}).wait(1).to({graphics:mask_graphics_533,x:249.6,y:380.4}).wait(1).to({graphics:mask_graphics_534,x:250.2,y:379.8}).wait(1).to({graphics:mask_graphics_535,x:250.8,y:379.1}).wait(1).to({graphics:mask_graphics_536,x:251.4,y:378.4}).wait(1).to({graphics:mask_graphics_537,x:252,y:377.8}).wait(1).to({graphics:mask_graphics_538,x:252.6,y:377.1}).wait(1).to({graphics:mask_graphics_539,x:253.1,y:376.5}).wait(1).to({graphics:mask_graphics_540,x:253.7,y:375.8}).wait(1).to({graphics:mask_graphics_541,x:198.5,y:262.9}).wait(1).to({graphics:mask_graphics_542,x:256.3,y:372.9}).wait(1).to({graphics:mask_graphics_543,x:258.3,y:370.7}).wait(1).to({graphics:mask_graphics_544,x:204.4,y:262.9}).wait(71));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(20,1,1).p("AtaPQQg0gYgrhCQh0ixD5kVQD4kVGGkBQCAhVB8hYQAAABAAAAQgGAHACAAQACAAAEgCQAngQEujKQGEkFC+jj");
	this.shape_1.setTransform(268.9,365.6);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(385).to({_off:false},0).wait(230));

	// Layer 10
	this.instance_2 = new lib.ar2("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(410.3,150.4,1,1,0,55,-125,0.8,-0.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(174).to({_off:false},0).wait(441));

	// Layer 7 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_354 = new cjs.Graphics().p("EAM5Am1IAAtmIIIAAIAANmg");
	var mask_1_graphics_355 = new cjs.Graphics().p("AkNGzIAAtlIIbAAIAANlg");
	var mask_1_graphics_356 = new cjs.Graphics().p("AkXGzIAAtlIIwAAIAANlg");
	var mask_1_graphics_357 = new cjs.Graphics().p("AkiGzIAAtlIJFAAIAANlg");
	var mask_1_graphics_358 = new cjs.Graphics().p("AksGzIAAtlIJZAAIAANlg");
	var mask_1_graphics_359 = new cjs.Graphics().p("Ak2GzIAAtlIJtAAIAANlg");
	var mask_1_graphics_360 = new cjs.Graphics().p("AlAGzIAAtlIKBAAIAANlg");
	var mask_1_graphics_361 = new cjs.Graphics().p("AlLGzIAAtlIKXAAIAANlg");
	var mask_1_graphics_362 = new cjs.Graphics().p("AlVGzIAAtlIKrAAIAANlg");
	var mask_1_graphics_363 = new cjs.Graphics().p("AlfGzIAAtlIK/AAIAANlg");
	var mask_1_graphics_364 = new cjs.Graphics().p("AlpGzIAAtlILTAAIAANlg");
	var mask_1_graphics_365 = new cjs.Graphics().p("AlzGzIAAtlILnAAIAANlg");
	var mask_1_graphics_366 = new cjs.Graphics().p("Al+GzIAAtlIL9AAIAANlg");
	var mask_1_graphics_367 = new cjs.Graphics().p("AmIGzIAAtlIMRAAIAANlg");
	var mask_1_graphics_368 = new cjs.Graphics().p("AmSGzIAAtlIMlAAIAANlg");
	var mask_1_graphics_369 = new cjs.Graphics().p("AmcGzIAAtlIM5AAIAANlg");
	var mask_1_graphics_370 = new cjs.Graphics().p("AmnGzIAAtlINPAAIAANlg");
	var mask_1_graphics_371 = new cjs.Graphics().p("AmxGzIAAtlINjAAIAANlg");
	var mask_1_graphics_372 = new cjs.Graphics().p("Am7GzIAAtlIN3AAIAANlg");
	var mask_1_graphics_373 = new cjs.Graphics().p("AnFGzIAAtlIOLAAIAANlg");
	var mask_1_graphics_374 = new cjs.Graphics().p("EAGgAm1IAAtmIOhAAIAANmg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(354).to({graphics:mask_1_graphics_354,x:134.5,y:248.5}).wait(1).to({graphics:mask_1_graphics_355,x:242,y:453.5}).wait(1).to({graphics:mask_1_graphics_356,x:241,y:453.5}).wait(1).to({graphics:mask_1_graphics_357,x:239.9,y:453.5}).wait(1).to({graphics:mask_1_graphics_358,x:238.9,y:453.5}).wait(1).to({graphics:mask_1_graphics_359,x:237.9,y:453.5}).wait(1).to({graphics:mask_1_graphics_360,x:236.9,y:453.5}).wait(1).to({graphics:mask_1_graphics_361,x:235.9,y:453.5}).wait(1).to({graphics:mask_1_graphics_362,x:234.8,y:453.5}).wait(1).to({graphics:mask_1_graphics_363,x:233.8,y:453.5}).wait(1).to({graphics:mask_1_graphics_364,x:232.8,y:453.5}).wait(1).to({graphics:mask_1_graphics_365,x:231.8,y:453.5}).wait(1).to({graphics:mask_1_graphics_366,x:230.8,y:453.5}).wait(1).to({graphics:mask_1_graphics_367,x:229.8,y:453.5}).wait(1).to({graphics:mask_1_graphics_368,x:228.7,y:453.5}).wait(1).to({graphics:mask_1_graphics_369,x:227.7,y:453.5}).wait(1).to({graphics:mask_1_graphics_370,x:226.7,y:453.5}).wait(1).to({graphics:mask_1_graphics_371,x:225.7,y:453.5}).wait(1).to({graphics:mask_1_graphics_372,x:224.7,y:453.5}).wait(1).to({graphics:mask_1_graphics_373,x:223.6,y:453.5}).wait(1).to({graphics:mask_1_graphics_374,x:134.5,y:248.5}).wait(241));

	// Layer 6
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(20,1,1).p("AgtJuQg7hlhUorQhUorERqJQESqIHUAAQGIAvjZHLQjYHLklJFQiUEmkqJlQgHA0gBADQgHAHADAAQACABADgCQAAgDgBgDQgCAEgCADQjyGtiZFCQiaFEiyCBQh8Baheg9AgtJuIAAAAABcOLQhghkgoiz");
	this.shape_2.setTransform(280.5,275.8);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(354).to({_off:false},0).wait(261));

	// Layer 5 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_174 = new cjs.Graphics().p("AifIDIAAm4IfFAAIAAG4g");
	var mask_2_graphics_175 = new cjs.Graphics().p("AvyDSIAAmjIflAAIAAGjg");
	var mask_2_graphics_176 = new cjs.Graphics().p("AwDDIIAAmPMAgHAAAIAAGPg");
	var mask_2_graphics_177 = new cjs.Graphics().p("AwTDLIAAmUMAgoAAAIAAGUg");
	var mask_2_graphics_178 = new cjs.Graphics().p("AwkDNIAAmZMAhJAAAIAAGZg");
	var mask_2_graphics_179 = new cjs.Graphics().p("Aw0DQIAAmeMAhqAAAIAAGeg");
	var mask_2_graphics_180 = new cjs.Graphics().p("AxFDSIAAmjMAiLAAAIAAGjg");
	var mask_2_graphics_181 = new cjs.Graphics().p("AxWDUIAAmoMAitAAAIAAGog");
	var mask_2_graphics_182 = new cjs.Graphics().p("AxmDXIAAmtMAjNAAAIAAGtg");
	var mask_2_graphics_183 = new cjs.Graphics().p("Ax3DZIAAmyMAjuAAAIAAGyg");
	var mask_2_graphics_184 = new cjs.Graphics().p("AlEIDIAAm4MAkPAAAIAAG4g");
	var mask_2_graphics_185 = new cjs.Graphics().p("AyHDpIAAnRMAkPAAAIAAHRg");
	var mask_2_graphics_186 = new cjs.Graphics().p("AyHD1IAAnpMAkPAAAIAAHpg");
	var mask_2_graphics_187 = new cjs.Graphics().p("AyHEBIAAoBMAkPAAAIAAIBg");
	var mask_2_graphics_188 = new cjs.Graphics().p("AyHEOIAAobMAkPAAAIAAIbg");
	var mask_2_graphics_189 = new cjs.Graphics().p("AyHEaIAAozMAkPAAAIAAIzg");
	var mask_2_graphics_190 = new cjs.Graphics().p("AyHEnIAApNMAkPAAAIAAJNg");
	var mask_2_graphics_191 = new cjs.Graphics().p("AyHEzIAAplMAkPAAAIAAJlg");
	var mask_2_graphics_192 = new cjs.Graphics().p("AyHE/IAAp+MAkPAAAIAAJ+g");
	var mask_2_graphics_193 = new cjs.Graphics().p("AyHFMIAAqXMAkPAAAIAAKXg");
	var mask_2_graphics_194 = new cjs.Graphics().p("AyHFZIAAqxMAkPAAAIAAKxg");
	var mask_2_graphics_195 = new cjs.Graphics().p("AyHFlIAArJMAkPAAAIAALJg");
	var mask_2_graphics_196 = new cjs.Graphics().p("AyHFxIAArhMAkPAAAIAALhg");
	var mask_2_graphics_197 = new cjs.Graphics().p("AyHF+IAAr7MAkPAAAIAAL7g");
	var mask_2_graphics_198 = new cjs.Graphics().p("AyHGKIAAsTMAkPAAAIAAMTg");
	var mask_2_graphics_199 = new cjs.Graphics().p("AyHGXIAAstMAkPAAAIAAMtg");
	var mask_2_graphics_200 = new cjs.Graphics().p("AyHGjIAAtFMAkPAAAIAANFg");
	var mask_2_graphics_201 = new cjs.Graphics().p("AyHGvIAAteMAkPAAAIAANeg");
	var mask_2_graphics_202 = new cjs.Graphics().p("AlELjIAAt3MAkPAAAIAAN3g");
	var mask_2_graphics_203 = new cjs.Graphics().p("AyHHGIAAuLMAkPAAAIAAOLg");
	var mask_2_graphics_204 = new cjs.Graphics().p("AyHHQIAAufMAkPAAAIAAOfg");
	var mask_2_graphics_205 = new cjs.Graphics().p("AyHHaIAAuzMAkPAAAIAAOzg");
	var mask_2_graphics_206 = new cjs.Graphics().p("AyHHkIAAvHMAkPAAAIAAPHg");
	var mask_2_graphics_207 = new cjs.Graphics().p("AyHHuIAAvbMAkPAAAIAAPbg");
	var mask_2_graphics_208 = new cjs.Graphics().p("AyHH3IAAvuMAkPAAAIAAPug");
	var mask_2_graphics_209 = new cjs.Graphics().p("AyHIBIAAwCMAkPAAAIAAQCg");
	var mask_2_graphics_210 = new cjs.Graphics().p("AyHILIAAwVMAkPAAAIAAQVg");
	var mask_2_graphics_211 = new cjs.Graphics().p("AyHIVIAAwpMAkPAAAIAAQpg");
	var mask_2_graphics_212 = new cjs.Graphics().p("AyHIfIAAw9MAkPAAAIAAQ9g");
	var mask_2_graphics_213 = new cjs.Graphics().p("AyHIpIAAxRMAkPAAAIAARRg");
	var mask_2_graphics_214 = new cjs.Graphics().p("AyHIzIAAxlMAkPAAAIAARlg");
	var mask_2_graphics_215 = new cjs.Graphics().p("AyHI9IAAx5MAkPAAAIAAR5g");
	var mask_2_graphics_216 = new cjs.Graphics().p("AyHJHIAAyNMAkPAAAIAASNg");
	var mask_2_graphics_217 = new cjs.Graphics().p("AyHJRIAAyhMAkPAAAIAAShg");
	var mask_2_graphics_218 = new cjs.Graphics().p("AyHJbIAAy1MAkPAAAIAAS1g");
	var mask_2_graphics_219 = new cjs.Graphics().p("AyHJlIAAzJMAkPAAAIAATJg");
	var mask_2_graphics_220 = new cjs.Graphics().p("AyHJuIAAzcMAkPAAAIAATcg");
	var mask_2_graphics_221 = new cjs.Graphics().p("AyHJ5IAAzxMAkPAAAIAATxg");
	var mask_2_graphics_222 = new cjs.Graphics().p("AyHKDIAA0FMAkPAAAIAAUFg");
	var mask_2_graphics_223 = new cjs.Graphics().p("AyHKMIAA0XMAkPAAAIAAUXg");
	var mask_2_graphics_224 = new cjs.Graphics().p("AlEO+IAA0sMAkPAAAIAAUsg");
	var mask_2_graphics_225 = new cjs.Graphics().p("AyHKhIAA1BMAkPAAAIAAVBg");
	var mask_2_graphics_226 = new cjs.Graphics().p("AyHKrIAA1VMAkPAAAIAAVVg");
	var mask_2_graphics_227 = new cjs.Graphics().p("AyHK1IAA1pMAkPAAAIAAVpg");
	var mask_2_graphics_228 = new cjs.Graphics().p("AyHK/IAA19MAkPAAAIAAV9g");
	var mask_2_graphics_229 = new cjs.Graphics().p("AyHLJIAA2RMAkPAAAIAAWRg");
	var mask_2_graphics_230 = new cjs.Graphics().p("AyHLTIAA2lMAkPAAAIAAWlg");
	var mask_2_graphics_231 = new cjs.Graphics().p("AyHLdIAA25MAkPAAAIAAW5g");
	var mask_2_graphics_232 = new cjs.Graphics().p("AyHLnIAA3NMAkPAAAIAAXNg");
	var mask_2_graphics_233 = new cjs.Graphics().p("AyHLyIAA3jMAkPAAAIAAXjg");
	var mask_2_graphics_234 = new cjs.Graphics().p("AyHL8IAA33MAkPAAAIAAX3g");
	var mask_2_graphics_235 = new cjs.Graphics().p("AyHMGIAA4LMAkPAAAIAAYLg");
	var mask_2_graphics_236 = new cjs.Graphics().p("AyHMQIAA4fMAkPAAAIAAYfg");
	var mask_2_graphics_237 = new cjs.Graphics().p("AyHMaIAA4zMAkPAAAIAAYzg");
	var mask_2_graphics_238 = new cjs.Graphics().p("AyHMkIAA5HMAkPAAAIAAZHg");
	var mask_2_graphics_239 = new cjs.Graphics().p("AyHMuIAA5bMAkPAAAIAAZbg");
	var mask_2_graphics_240 = new cjs.Graphics().p("AyHM4IAA5vMAkPAAAIAAZvg");
	var mask_2_graphics_241 = new cjs.Graphics().p("AyHNDIAA6FMAkPAAAIAAaFg");
	var mask_2_graphics_242 = new cjs.Graphics().p("AyHNNIAA6ZMAkPAAAIAAaZg");
	var mask_2_graphics_243 = new cjs.Graphics().p("AyHNXIAA6tMAkPAAAIAAatg");
	var mask_2_graphics_244 = new cjs.Graphics().p("AyHNhIAA7BMAkPAAAIAAbBg");
	var mask_2_graphics_245 = new cjs.Graphics().p("AyHNrIAA7VMAkPAAAIAAbVg");
	var mask_2_graphics_246 = new cjs.Graphics().p("AyHN1IAA7pMAkPAAAIAAbpg");
	var mask_2_graphics_247 = new cjs.Graphics().p("AyHN/IAA79MAkPAAAIAAb9g");
	var mask_2_graphics_248 = new cjs.Graphics().p("AyHOJIAA8RMAkPAAAIAAcRg");
	var mask_2_graphics_249 = new cjs.Graphics().p("AyHOTIAA8lMAkPAAAIAAclg");
	var mask_2_graphics_250 = new cjs.Graphics().p("AyHOdIAA85MAkPAAAIAAc5g");
	var mask_2_graphics_251 = new cjs.Graphics().p("AyHOoIAA9OMAkPAAAIAAdOg");
	var mask_2_graphics_252 = new cjs.Graphics().p("AyHOyIAA9jMAkPAAAIAAdjg");
	var mask_2_graphics_253 = new cjs.Graphics().p("AyHO8IAA93MAkPAAAIAAd3g");
	var mask_2_graphics_254 = new cjs.Graphics().p("AyHPGIAA+LMAkPAAAIAAeLg");
	var mask_2_graphics_255 = new cjs.Graphics().p("AyHPQIAA+fMAkPAAAIAAefg");
	var mask_2_graphics_256 = new cjs.Graphics().p("AyHPaIAA+zMAkPAAAIAAezg");
	var mask_2_graphics_257 = new cjs.Graphics().p("AyHPkIAA/HMAkPAAAIAAfHg");
	var mask_2_graphics_258 = new cjs.Graphics().p("AyHPuIAA/bMAkPAAAIAAfbg");
	var mask_2_graphics_259 = new cjs.Graphics().p("AyHP5IAA/wMAkPAAAIAAfwg");
	var mask_2_graphics_260 = new cjs.Graphics().p("AyHQDMAAAggFMAkPAAAMAAAAgFg");
	var mask_2_graphics_261 = new cjs.Graphics().p("AyHQNMAAAggZMAkPAAAMAAAAgZg");
	var mask_2_graphics_262 = new cjs.Graphics().p("AyHQXMAAAggtMAkPAAAMAAAAgtg");
	var mask_2_graphics_263 = new cjs.Graphics().p("AyHQhMAAAghBMAkPAAAMAAAAhBg");
	var mask_2_graphics_264 = new cjs.Graphics().p("AyHQrMAAAghVMAkPAAAMAAAAhVg");
	var mask_2_graphics_265 = new cjs.Graphics().p("AyHQ1MAAAghpMAkPAAAMAAAAhpg");
	var mask_2_graphics_266 = new cjs.Graphics().p("AyHQ/MAAAgh9MAkPAAAMAAAAh9g");
	var mask_2_graphics_267 = new cjs.Graphics().p("AyHRKMAAAgiSMAkPAAAMAAAAiSg");
	var mask_2_graphics_268 = new cjs.Graphics().p("AyHRUMAAAginMAkPAAAMAAAAing");
	var mask_2_graphics_269 = new cjs.Graphics().p("AyHReMAAAgi7MAkPAAAMAAAAi7g");
	var mask_2_graphics_270 = new cjs.Graphics().p("AyHRoMAAAgjPMAkPAAAMAAAAjPg");
	var mask_2_graphics_271 = new cjs.Graphics().p("AyHRyMAAAgjjMAkPAAAMAAAAjjg");
	var mask_2_graphics_272 = new cjs.Graphics().p("AyHR8MAAAgj3MAkPAAAMAAAAj3g");
	var mask_2_graphics_273 = new cjs.Graphics().p("AyHSGMAAAgkLMAkPAAAMAAAAkLg");
	var mask_2_graphics_274 = new cjs.Graphics().p("AlEW4MAAAgkgMAkPAAAMAAAAkgg");
	var mask_2_graphics_275 = new cjs.Graphics().p("AyHSaMAAAgkzMAkPAAAMAAAAkzg");
	var mask_2_graphics_276 = new cjs.Graphics().p("AyHSkMAAAglHMAkPAAAMAAAAlHg");
	var mask_2_graphics_277 = new cjs.Graphics().p("AyHSuMAAAglbMAkPAAAMAAAAlbg");
	var mask_2_graphics_278 = new cjs.Graphics().p("AyHS4MAAAglvMAkPAAAMAAAAlvg");
	var mask_2_graphics_279 = new cjs.Graphics().p("AyHTCMAAAgmDMAkPAAAMAAAAmDg");
	var mask_2_graphics_280 = new cjs.Graphics().p("AyHTLMAAAgmVMAkPAAAMAAAAmVg");
	var mask_2_graphics_281 = new cjs.Graphics().p("AyHTVMAAAgmpMAkPAAAMAAAAmpg");
	var mask_2_graphics_282 = new cjs.Graphics().p("AyHTfMAAAgm9MAkPAAAMAAAAm9g");
	var mask_2_graphics_283 = new cjs.Graphics().p("AyHTpMAAAgnRMAkPAAAMAAAAnRg");
	var mask_2_graphics_284 = new cjs.Graphics().p("AyHTzMAAAgnlMAkPAAAMAAAAnlg");
	var mask_2_graphics_285 = new cjs.Graphics().p("AyHT8MAAAgn3MAkPAAAMAAAAn3g");
	var mask_2_graphics_286 = new cjs.Graphics().p("AyHUHMAAAgoMMAkPAAAMAAAAoMg");
	var mask_2_graphics_287 = new cjs.Graphics().p("AyHUQMAAAgofMAkPAAAMAAAAofg");
	var mask_2_graphics_288 = new cjs.Graphics().p("AyHUaMAAAgozMAkPAAAMAAAAozg");
	var mask_2_graphics_289 = new cjs.Graphics().p("AyHUkMAAAgpHMAkPAAAMAAAApHg");
	var mask_2_graphics_290 = new cjs.Graphics().p("AyHUuMAAAgpbMAkPAAAMAAAApbg");
	var mask_2_graphics_291 = new cjs.Graphics().p("AyHU3MAAAgptMAkPAAAMAAAAptg");
	var mask_2_graphics_292 = new cjs.Graphics().p("AyHVBMAAAgqBMAkPAAAMAAAAqBg");
	var mask_2_graphics_293 = new cjs.Graphics().p("AyHVLMAAAgqVMAkPAAAMAAAAqVg");
	var mask_2_graphics_294 = new cjs.Graphics().p("AyHVVMAAAgqpMAkPAAAMAAAAqpg");
	var mask_2_graphics_295 = new cjs.Graphics().p("AyHVfMAAAgq9MAkPAAAMAAAAq9g");
	var mask_2_graphics_296 = new cjs.Graphics().p("AyHVpMAAAgrRMAkPAAAMAAAArRg");
	var mask_2_graphics_297 = new cjs.Graphics().p("AyHVzMAAAgrkMAkPAAAMAAAArkg");
	var mask_2_graphics_298 = new cjs.Graphics().p("AyHV8MAAAgr3MAkPAAAMAAAAr3g");
	var mask_2_graphics_299 = new cjs.Graphics().p("AyHWGMAAAgsLMAkPAAAMAAAAsLg");
	var mask_2_graphics_300 = new cjs.Graphics().p("AyHWQMAAAgsfMAkPAAAMAAAAsfg");
	var mask_2_graphics_301 = new cjs.Graphics().p("AyHWaMAAAgszMAkPAAAMAAAAszg");
	var mask_2_graphics_302 = new cjs.Graphics().p("AyHWjMAAAgtFMAkPAAAMAAAAtFg");
	var mask_2_graphics_303 = new cjs.Graphics().p("AyHWuMAAAgtaMAkPAAAMAAAAtag");
	var mask_2_graphics_304 = new cjs.Graphics().p("AyHW3MAAAgttMAkPAAAMAAAAttg");
	var mask_2_graphics_305 = new cjs.Graphics().p("AyHXBMAAAguBMAkPAAAMAAAAuBg");
	var mask_2_graphics_306 = new cjs.Graphics().p("AyHXLMAAAguVMAkPAAAMAAAAuVg");
	var mask_2_graphics_307 = new cjs.Graphics().p("AyHXVMAAAgupMAkPAAAMAAAAupg");
	var mask_2_graphics_308 = new cjs.Graphics().p("AyHXfMAAAgu8MAkPAAAMAAAAu8g");
	var mask_2_graphics_309 = new cjs.Graphics().p("AyHXpMAAAgvQMAkPAAAMAAAAvQg");
	var mask_2_graphics_310 = new cjs.Graphics().p("AyHXyMAAAgvjMAkPAAAMAAAAvjg");
	var mask_2_graphics_311 = new cjs.Graphics().p("AyHX8MAAAgv3MAkPAAAMAAAAv3g");
	var mask_2_graphics_312 = new cjs.Graphics().p("AyHYGMAAAgwLMAkPAAAMAAAAwLg");
	var mask_2_graphics_313 = new cjs.Graphics().p("AyHYQMAAAgwfMAkPAAAMAAAAwfg");
	var mask_2_graphics_314 = new cjs.Graphics().p("AyHYaMAAAgwyMAkPAAAMAAAAwyg");
	var mask_2_graphics_315 = new cjs.Graphics().p("AyHYjMAAAgxGMAkPAAAMAAAAxGg");
	var mask_2_graphics_316 = new cjs.Graphics().p("AyHYuMAAAgxbMAkPAAAMAAAAxbg");
	var mask_2_graphics_317 = new cjs.Graphics().p("AyHY3MAAAgxtMAkPAAAMAAAAxtg");
	var mask_2_graphics_318 = new cjs.Graphics().p("AyHZBMAAAgyBMAkPAAAMAAAAyBg");
	var mask_2_graphics_319 = new cjs.Graphics().p("AyHZLMAAAgyVMAkPAAAMAAAAyVg");
	var mask_2_graphics_320 = new cjs.Graphics().p("AyHZVMAAAgypMAkPAAAMAAAAypg");
	var mask_2_graphics_321 = new cjs.Graphics().p("AyHZeMAAAgy8MAkPAAAMAAAAy8g");
	var mask_2_graphics_322 = new cjs.Graphics().p("AyHZoMAAAgzPMAkPAAAMAAAAzPg");
	var mask_2_graphics_323 = new cjs.Graphics().p("AyHZyMAAAgzjMAkPAAAMAAAAzjg");
	var mask_2_graphics_324 = new cjs.Graphics().p("AyHZ8MAAAgz3MAkPAAAMAAAAz3g");
	var mask_2_graphics_325 = new cjs.Graphics().p("AyHaGMAAAg0LMAkPAAAMAAAA0Lg");
	var mask_2_graphics_326 = new cjs.Graphics().p("AyHaQMAAAg0fMAkPAAAMAAAA0fg");
	var mask_2_graphics_327 = new cjs.Graphics().p("AyHaaMAAAg0zMAkPAAAMAAAA0zg");
	var mask_2_graphics_328 = new cjs.Graphics().p("AyHajMAAAg1FMAkPAAAMAAAA1Fg");
	var mask_2_graphics_329 = new cjs.Graphics().p("AyHatMAAAg1ZMAkPAAAMAAAA1Zg");
	var mask_2_graphics_330 = new cjs.Graphics().p("AyHa3MAAAg1tMAkPAAAMAAAA1tg");
	var mask_2_graphics_331 = new cjs.Graphics().p("AyHbBMAAAg2BMAkPAAAMAAAA2Bg");
	var mask_2_graphics_332 = new cjs.Graphics().p("AyHbKMAAAg2UMAkPAAAMAAAA2Ug");
	var mask_2_graphics_333 = new cjs.Graphics().p("AyHbVMAAAg2pMAkPAAAMAAAA2pg");
	var mask_2_graphics_334 = new cjs.Graphics().p("AyHbeMAAAg27MAkPAAAMAAAA27g");
	var mask_2_graphics_335 = new cjs.Graphics().p("AyHboMAAAg3PMAkPAAAMAAAA3Pg");
	var mask_2_graphics_336 = new cjs.Graphics().p("AyHbyMAAAg3jMAkPAAAMAAAA3jg");
	var mask_2_graphics_337 = new cjs.Graphics().p("AyHb8MAAAg33MAkPAAAMAAAA33g");
	var mask_2_graphics_338 = new cjs.Graphics().p("AyHcGMAAAg4LMAkPAAAMAAAA4Lg");
	var mask_2_graphics_339 = new cjs.Graphics().p("AyHcQMAAAg4fMAkPAAAMAAAA4fg");
	var mask_2_graphics_340 = new cjs.Graphics().p("AyHcZMAAAg4xMAkPAAAMAAAA4xg");
	var mask_2_graphics_341 = new cjs.Graphics().p("AyHcjMAAAg5FMAkPAAAMAAAA5Fg");
	var mask_2_graphics_342 = new cjs.Graphics().p("AyHctMAAAg5ZMAkPAAAMAAAA5Zg");
	var mask_2_graphics_343 = new cjs.Graphics().p("AyHc3MAAAg5tMAkPAAAMAAAA5tg");
	var mask_2_graphics_344 = new cjs.Graphics().p("AyHdBMAAAg6BMAkPAAAMAAAA6Bg");
	var mask_2_graphics_345 = new cjs.Graphics().p("AyHdKMAAAg6TMAkPAAAMAAAA6Tg");
	var mask_2_graphics_346 = new cjs.Graphics().p("AyHdUMAAAg6nMAkPAAAMAAAA6ng");
	var mask_2_graphics_347 = new cjs.Graphics().p("AyHdeMAAAg67MAkPAAAMAAAA67g");
	var mask_2_graphics_348 = new cjs.Graphics().p("AyHdoMAAAg7PMAkPAAAMAAAA7Pg");
	var mask_2_graphics_349 = new cjs.Graphics().p("AyHdyMAAAg7jMAkPAAAMAAAA7jg");
	var mask_2_graphics_350 = new cjs.Graphics().p("AyHd8MAAAg73MAkPAAAMAAAA73g");
	var mask_2_graphics_351 = new cjs.Graphics().p("AyHeFMAAAg8JMAkPAAAMAAAA8Jg");
	var mask_2_graphics_352 = new cjs.Graphics().p("AyHePMAAAg8dMAkPAAAMAAAA8dg");
	var mask_2_graphics_353 = new cjs.Graphics().p("AyHeZMAAAg8xMAkPAAAMAAAA8xg");
	var mask_2_graphics_354 = new cjs.Graphics().p("EgFEAjKMAAAg9EMAkPAAAMAAAA9Eg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(174).to({graphics:mask_2_graphics_174,x:183,y:51.5}).wait(1).to({graphics:mask_2_graphics_175,x:268.2,y:80.1}).wait(1).to({graphics:mask_2_graphics_176,x:269.8,y:79.1}).wait(1).to({graphics:mask_2_graphics_177,x:271.5,y:79.4}).wait(1).to({graphics:mask_2_graphics_178,x:273.1,y:79.6}).wait(1).to({graphics:mask_2_graphics_179,x:274.8,y:79.9}).wait(1).to({graphics:mask_2_graphics_180,x:276.5,y:80.1}).wait(1).to({graphics:mask_2_graphics_181,x:278.1,y:80.3}).wait(1).to({graphics:mask_2_graphics_182,x:279.8,y:80.6}).wait(1).to({graphics:mask_2_graphics_183,x:281.4,y:80.8}).wait(1).to({graphics:mask_2_graphics_184,x:199.5,y:51.5}).wait(1).to({graphics:mask_2_graphics_185,x:283.1,y:82.3}).wait(1).to({graphics:mask_2_graphics_186,x:283.1,y:83.6}).wait(1).to({graphics:mask_2_graphics_187,x:283.1,y:84.8}).wait(1).to({graphics:mask_2_graphics_188,x:283.1,y:86}).wait(1).to({graphics:mask_2_graphics_189,x:283.1,y:87.3}).wait(1).to({graphics:mask_2_graphics_190,x:283.1,y:88.5}).wait(1).to({graphics:mask_2_graphics_191,x:283.1,y:89.8}).wait(1).to({graphics:mask_2_graphics_192,x:283.1,y:91}).wait(1).to({graphics:mask_2_graphics_193,x:283.1,y:92.3}).wait(1).to({graphics:mask_2_graphics_194,x:283.1,y:93.5}).wait(1).to({graphics:mask_2_graphics_195,x:283.1,y:94.8}).wait(1).to({graphics:mask_2_graphics_196,x:283.1,y:96}).wait(1).to({graphics:mask_2_graphics_197,x:283.1,y:97.2}).wait(1).to({graphics:mask_2_graphics_198,x:283.1,y:98.5}).wait(1).to({graphics:mask_2_graphics_199,x:283.1,y:99.7}).wait(1).to({graphics:mask_2_graphics_200,x:283.1,y:101}).wait(1).to({graphics:mask_2_graphics_201,x:283.1,y:102.2}).wait(1).to({graphics:mask_2_graphics_202,x:199.5,y:73.9}).wait(1).to({graphics:mask_2_graphics_203,x:283.1,y:104.5}).wait(1).to({graphics:mask_2_graphics_204,x:283.1,y:105.4}).wait(1).to({graphics:mask_2_graphics_205,x:283.1,y:106.4}).wait(1).to({graphics:mask_2_graphics_206,x:283.1,y:107.4}).wait(1).to({graphics:mask_2_graphics_207,x:283.1,y:108.4}).wait(1).to({graphics:mask_2_graphics_208,x:283.1,y:109.4}).wait(1).to({graphics:mask_2_graphics_209,x:283.1,y:110.4}).wait(1).to({graphics:mask_2_graphics_210,x:283.1,y:111.4}).wait(1).to({graphics:mask_2_graphics_211,x:283.1,y:112.4}).wait(1).to({graphics:mask_2_graphics_212,x:283.1,y:113.4}).wait(1).to({graphics:mask_2_graphics_213,x:283.1,y:114.4}).wait(1).to({graphics:mask_2_graphics_214,x:283.1,y:115.4}).wait(1).to({graphics:mask_2_graphics_215,x:283.1,y:116.4}).wait(1).to({graphics:mask_2_graphics_216,x:283.1,y:117.4}).wait(1).to({graphics:mask_2_graphics_217,x:283.1,y:118.3}).wait(1).to({graphics:mask_2_graphics_218,x:283.1,y:119.3}).wait(1).to({graphics:mask_2_graphics_219,x:283.1,y:120.3}).wait(1).to({graphics:mask_2_graphics_220,x:283.1,y:121.3}).wait(1).to({graphics:mask_2_graphics_221,x:283.1,y:122.3}).wait(1).to({graphics:mask_2_graphics_222,x:283.1,y:123.3}).wait(1).to({graphics:mask_2_graphics_223,x:283.1,y:124.3}).wait(1).to({graphics:mask_2_graphics_224,x:199.5,y:95.8}).wait(1).to({graphics:mask_2_graphics_225,x:283.1,y:126.3}).wait(1).to({graphics:mask_2_graphics_226,x:283.1,y:127.3}).wait(1).to({graphics:mask_2_graphics_227,x:283.1,y:128.3}).wait(1).to({graphics:mask_2_graphics_228,x:283.1,y:129.3}).wait(1).to({graphics:mask_2_graphics_229,x:283.1,y:130.4}).wait(1).to({graphics:mask_2_graphics_230,x:283.1,y:131.4}).wait(1).to({graphics:mask_2_graphics_231,x:283.1,y:132.4}).wait(1).to({graphics:mask_2_graphics_232,x:283.1,y:133.4}).wait(1).to({graphics:mask_2_graphics_233,x:283.1,y:134.4}).wait(1).to({graphics:mask_2_graphics_234,x:283.1,y:135.4}).wait(1).to({graphics:mask_2_graphics_235,x:283.1,y:136.4}).wait(1).to({graphics:mask_2_graphics_236,x:283.1,y:137.4}).wait(1).to({graphics:mask_2_graphics_237,x:283.1,y:138.5}).wait(1).to({graphics:mask_2_graphics_238,x:283.1,y:139.5}).wait(1).to({graphics:mask_2_graphics_239,x:283.1,y:140.5}).wait(1).to({graphics:mask_2_graphics_240,x:283.1,y:141.5}).wait(1).to({graphics:mask_2_graphics_241,x:283.1,y:142.5}).wait(1).to({graphics:mask_2_graphics_242,x:283.1,y:143.5}).wait(1).to({graphics:mask_2_graphics_243,x:283.1,y:144.5}).wait(1).to({graphics:mask_2_graphics_244,x:283.1,y:145.5}).wait(1).to({graphics:mask_2_graphics_245,x:283.1,y:146.6}).wait(1).to({graphics:mask_2_graphics_246,x:283.1,y:147.6}).wait(1).to({graphics:mask_2_graphics_247,x:283.1,y:148.6}).wait(1).to({graphics:mask_2_graphics_248,x:283.1,y:149.6}).wait(1).to({graphics:mask_2_graphics_249,x:283.1,y:150.6}).wait(1).to({graphics:mask_2_graphics_250,x:283.1,y:151.7}).wait(1).to({graphics:mask_2_graphics_251,x:283.1,y:152.7}).wait(1).to({graphics:mask_2_graphics_252,x:283.1,y:153.7}).wait(1).to({graphics:mask_2_graphics_253,x:283.1,y:154.7}).wait(1).to({graphics:mask_2_graphics_254,x:283.1,y:155.7}).wait(1).to({graphics:mask_2_graphics_255,x:283.1,y:156.7}).wait(1).to({graphics:mask_2_graphics_256,x:283.1,y:157.7}).wait(1).to({graphics:mask_2_graphics_257,x:283.1,y:158.7}).wait(1).to({graphics:mask_2_graphics_258,x:283.1,y:159.8}).wait(1).to({graphics:mask_2_graphics_259,x:283.1,y:160.8}).wait(1).to({graphics:mask_2_graphics_260,x:283.1,y:161.8}).wait(1).to({graphics:mask_2_graphics_261,x:283.1,y:162.8}).wait(1).to({graphics:mask_2_graphics_262,x:283.1,y:163.8}).wait(1).to({graphics:mask_2_graphics_263,x:283.1,y:164.8}).wait(1).to({graphics:mask_2_graphics_264,x:283.1,y:165.8}).wait(1).to({graphics:mask_2_graphics_265,x:283.1,y:166.8}).wait(1).to({graphics:mask_2_graphics_266,x:283.1,y:167.9}).wait(1).to({graphics:mask_2_graphics_267,x:283.1,y:168.9}).wait(1).to({graphics:mask_2_graphics_268,x:283.1,y:169.9}).wait(1).to({graphics:mask_2_graphics_269,x:283.1,y:170.9}).wait(1).to({graphics:mask_2_graphics_270,x:283.1,y:171.9}).wait(1).to({graphics:mask_2_graphics_271,x:283.1,y:172.9}).wait(1).to({graphics:mask_2_graphics_272,x:283.1,y:173.9}).wait(1).to({graphics:mask_2_graphics_273,x:283.1,y:174.9}).wait(1).to({graphics:mask_2_graphics_274,x:199.5,y:146.4}).wait(1).to({graphics:mask_2_graphics_275,x:283.1,y:176.9}).wait(1).to({graphics:mask_2_graphics_276,x:283.1,y:177.9}).wait(1).to({graphics:mask_2_graphics_277,x:283.1,y:178.9}).wait(1).to({graphics:mask_2_graphics_278,x:283.1,y:179.9}).wait(1).to({graphics:mask_2_graphics_279,x:283.1,y:180.9}).wait(1).to({graphics:mask_2_graphics_280,x:283.1,y:181.9}).wait(1).to({graphics:mask_2_graphics_281,x:283.1,y:182.8}).wait(1).to({graphics:mask_2_graphics_282,x:283.1,y:183.8}).wait(1).to({graphics:mask_2_graphics_283,x:283.1,y:184.8}).wait(1).to({graphics:mask_2_graphics_284,x:283.1,y:185.8}).wait(1).to({graphics:mask_2_graphics_285,x:283.1,y:186.8}).wait(1).to({graphics:mask_2_graphics_286,x:283.1,y:187.8}).wait(1).to({graphics:mask_2_graphics_287,x:283.1,y:188.7}).wait(1).to({graphics:mask_2_graphics_288,x:283.1,y:189.7}).wait(1).to({graphics:mask_2_graphics_289,x:283.1,y:190.7}).wait(1).to({graphics:mask_2_graphics_290,x:283.1,y:191.7}).wait(1).to({graphics:mask_2_graphics_291,x:283.1,y:192.7}).wait(1).to({graphics:mask_2_graphics_292,x:283.1,y:193.6}).wait(1).to({graphics:mask_2_graphics_293,x:283.1,y:194.6}).wait(1).to({graphics:mask_2_graphics_294,x:283.1,y:195.6}).wait(1).to({graphics:mask_2_graphics_295,x:283.1,y:196.6}).wait(1).to({graphics:mask_2_graphics_296,x:283.1,y:197.6}).wait(1).to({graphics:mask_2_graphics_297,x:283.1,y:198.6}).wait(1).to({graphics:mask_2_graphics_298,x:283.1,y:199.5}).wait(1).to({graphics:mask_2_graphics_299,x:283.1,y:200.5}).wait(1).to({graphics:mask_2_graphics_300,x:283.1,y:201.5}).wait(1).to({graphics:mask_2_graphics_301,x:283.1,y:202.5}).wait(1).to({graphics:mask_2_graphics_302,x:283.1,y:203.5}).wait(1).to({graphics:mask_2_graphics_303,x:283.1,y:204.5}).wait(1).to({graphics:mask_2_graphics_304,x:283.1,y:205.4}).wait(1).to({graphics:mask_2_graphics_305,x:283.1,y:206.4}).wait(1).to({graphics:mask_2_graphics_306,x:283.1,y:207.4}).wait(1).to({graphics:mask_2_graphics_307,x:283.1,y:208.4}).wait(1).to({graphics:mask_2_graphics_308,x:283.1,y:209.4}).wait(1).to({graphics:mask_2_graphics_309,x:283.1,y:210.4}).wait(1).to({graphics:mask_2_graphics_310,x:283.1,y:211.3}).wait(1).to({graphics:mask_2_graphics_311,x:283.1,y:212.3}).wait(1).to({graphics:mask_2_graphics_312,x:283.1,y:213.3}).wait(1).to({graphics:mask_2_graphics_313,x:283.1,y:214.3}).wait(1).to({graphics:mask_2_graphics_314,x:283.1,y:215.3}).wait(1).to({graphics:mask_2_graphics_315,x:283.1,y:216.2}).wait(1).to({graphics:mask_2_graphics_316,x:283.1,y:217.2}).wait(1).to({graphics:mask_2_graphics_317,x:283.1,y:218.2}).wait(1).to({graphics:mask_2_graphics_318,x:283.1,y:219.2}).wait(1).to({graphics:mask_2_graphics_319,x:283.1,y:220.2}).wait(1).to({graphics:mask_2_graphics_320,x:283.1,y:221.1}).wait(1).to({graphics:mask_2_graphics_321,x:283.1,y:222.1}).wait(1).to({graphics:mask_2_graphics_322,x:283.1,y:223.1}).wait(1).to({graphics:mask_2_graphics_323,x:283.1,y:224.1}).wait(1).to({graphics:mask_2_graphics_324,x:283.1,y:225.1}).wait(1).to({graphics:mask_2_graphics_325,x:283.1,y:226}).wait(1).to({graphics:mask_2_graphics_326,x:283.1,y:227}).wait(1).to({graphics:mask_2_graphics_327,x:283.1,y:228}).wait(1).to({graphics:mask_2_graphics_328,x:283.1,y:229}).wait(1).to({graphics:mask_2_graphics_329,x:283.1,y:230}).wait(1).to({graphics:mask_2_graphics_330,x:283.1,y:231}).wait(1).to({graphics:mask_2_graphics_331,x:283.1,y:231.9}).wait(1).to({graphics:mask_2_graphics_332,x:283.1,y:232.9}).wait(1).to({graphics:mask_2_graphics_333,x:283.1,y:233.9}).wait(1).to({graphics:mask_2_graphics_334,x:283.1,y:234.9}).wait(1).to({graphics:mask_2_graphics_335,x:283.1,y:235.9}).wait(1).to({graphics:mask_2_graphics_336,x:283.1,y:236.9}).wait(1).to({graphics:mask_2_graphics_337,x:283.1,y:237.8}).wait(1).to({graphics:mask_2_graphics_338,x:283.1,y:238.8}).wait(1).to({graphics:mask_2_graphics_339,x:283.1,y:239.8}).wait(1).to({graphics:mask_2_graphics_340,x:283.1,y:240.8}).wait(1).to({graphics:mask_2_graphics_341,x:283.1,y:241.8}).wait(1).to({graphics:mask_2_graphics_342,x:283.1,y:242.7}).wait(1).to({graphics:mask_2_graphics_343,x:283.1,y:243.7}).wait(1).to({graphics:mask_2_graphics_344,x:283.1,y:244.7}).wait(1).to({graphics:mask_2_graphics_345,x:283.1,y:245.7}).wait(1).to({graphics:mask_2_graphics_346,x:283.1,y:246.7}).wait(1).to({graphics:mask_2_graphics_347,x:283.1,y:247.7}).wait(1).to({graphics:mask_2_graphics_348,x:283.1,y:248.6}).wait(1).to({graphics:mask_2_graphics_349,x:283.1,y:249.6}).wait(1).to({graphics:mask_2_graphics_350,x:283.1,y:250.6}).wait(1).to({graphics:mask_2_graphics_351,x:283.1,y:251.6}).wait(1).to({graphics:mask_2_graphics_352,x:283.1,y:252.6}).wait(1).to({graphics:mask_2_graphics_353,x:283.1,y:253.6}).wait(1).to({graphics:mask_2_graphics_354,x:199.5,y:225}).wait(261));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(20,1,1).p("ANR9UQEQBXi8GPQjZHMkkJFQiUEmkqJkQgHA0gBAEQgHAHADAAQABAAAEgCQAAgCgBgDIAAAAAgeJlQgCADgCAEQjyGsiZFCQiaFFiyCAQiQBphohiABrOBQhihkgmiz");
	this.shape_3.setTransform(279.1,276.8);
	this.shape_3._off = true;

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(174).to({_off:false},0).wait(441));

	// Layer 9
	this.instance_3 = new lib.ar3("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(209.7,198.3,1,1,152);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).wait(606));

	// Layer 4 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_9 = new cjs.Graphics().p("Ai8ZiMAn+gq0QI4ISAbMGQAaMJoSI4QoSI4sIAZIhNACQrXAAobn4g");
	var mask_3_graphics_10 = new cjs.Graphics().p("AjQZPMAomgqOQIwIaAQMGQAPMKobIwQoaIwsIAOIguABQrrAAofoLg");
	var mask_3_graphics_11 = new cjs.Graphics().p("AjjY8MApMgpoQIpIiAEMGQAEMKoiIoQojIosIAEIgPAAQr/AAoioeg");
	var mask_3_graphics_12 = new cjs.Graphics().p("EAQyAhZQsJgGofoqMApzgpCQIgIqgHMGQgHMKorIgQoiIZr6AAIgWgBg");
	var mask_3_graphics_13 = new cjs.Graphics().p("EAQXAhZQsJgRoXoyMAqYgocQIZIygTMGQgSMKoyIYQofIGrmAAIg1gBg");
	var mask_3_graphics_14 = new cjs.Graphics().p("EAP7AhYQsHgcoQo6MAq+gn0QIQI6geMFQgdMJo6IQQobH0rSAAQgqAAgrgCg");
	var mask_3_graphics_15 = new cjs.Graphics().p("EAPgAhXQsHgooHpBMArignMQIIJBgpMFQgpMJpBIIQoWHhrBAAQg4AAg6gDg");
	var mask_3_graphics_16 = new cjs.Graphics().p("EAPFAhVQsGgzn/pJMAsGgmjQH/JJg0MEQgzMIpJH/QoSHQquAAQhHAAhJgFg");
	var mask_3_graphics_17 = new cjs.Graphics().p("EAOqAhTQsGg+n2pQMAspgl7QH3JQg/MEQg/MHpQH3QoNG+qcAAQhVAAhYgHg");
	var mask_3_graphics_18 = new cjs.Graphics().p("EAOPAhQQsFhJntpXMAtLglRQHvJXhKMDQhKMGpYHuQoIGtqLAAQhjAAhmgKg");
	var mask_3_graphics_19 = new cjs.Graphics().p("EAN0AhNQsEhUnkpeMAttgknQHmJehVMCQhVMEpfHmQoDGdp6AAQhwAAh1gOg");
	var mask_3_graphics_20 = new cjs.Graphics().p("EANZAhKQsChfncpmMAuPgj8QHdJlhgMAQhhMEplHdQn+GMppAAQh+AAiDgRg");
	var mask_3_graphics_21 = new cjs.Graphics().p("EAM+AhGQsBhqnTpsMAuwgjSQHUJshrL/QhsMCpsHUQn3F8paAAQiLAAiRgVg");
	var mask_3_graphics_22 = new cjs.Graphics().p("EAMjAhCQr/h1nKpzMAvQginQHLJzh2L+Qh3MApzHLQnxFspKAAQiYAAifgZg");
	var mask_3_graphics_23 = new cjs.Graphics().p("EAMIAg+Qr9iBnBp5MAvwgh7QHCJ6iCL7QiBL/p6HCQnrFco6AAQilAAitgdg");
	var mask_3_graphics_24 = new cjs.Graphics().p("EALuAg5Qr7iMm5p/MAwPghPQG5KAiNL6QiML8qAG5QnkFNorAAQizAAi5gig");
	var mask_3_graphics_25 = new cjs.Graphics().p("EALTAg0Qr5iXmvqGMAwtggiQGwKHiYL3QiYL6qGGwQndE/ocAAQi/AAjHgog");
	var mask_3_graphics_26 = new cjs.Graphics().p("EAK4AguQr2ihmmqNMAxLgf0QGmKMiiL1QijL4qNGnQnWEwoNAAQjMAAjUgug");
	var mask_3_graphics_27 = new cjs.Graphics().p("EAKeAgoQr0ismdqTMAxogfHQGdKTitLzQiuL1qTGdQnOEin/AAQjYAAjhg0g");
	var mask_3_graphics_28 = new cjs.Graphics().p("EAKDAgiQrxi4mTqYMAyEgeZQGTKZi4LwQi4LzqZGTQnHEUnxAAQjkAAjug6g");
	var mask_3_graphics_29 = new cjs.Graphics().p("EAJpAgbQrvjCmJqeMAyggdrQGKKejELuQjDLwqeGKQm/EGnjAAQjxAAj6hBg");
	var mask_3_graphics_30 = new cjs.Graphics().p("EAJPAgUQrsjNmAqkMAy7gc7QGAKijOLsQjOLtqkGAQm2D5nWABQj9AAkGhJg");
	var mask_3_graphics_31 = new cjs.Graphics().p("EAI0AgMQrojXl2qpMAzVgcNQF3KojZLpQjZLqqpF2QmvDtnIAAQkJAAkThRg");
	var mask_3_graphics_32 = new cjs.Graphics().p("EAIaAgFQrljjlsquMAzvgbdQFsKtjjLmQjkLnquFsQmmDgm6AAQkWAAkfhYg");
	var mask_3_graphics_33 = new cjs.Graphics().p("AIBf8QrjjtliqzMA0JgatQFiKyjuLiQjvLkqzFiQmdDUmtAAQkjAAkphhg");
	var mask_3_graphics_34 = new cjs.Graphics().p("AHnf0Qrfj4lYq5MA0hgZ8QFYK3j5LfQj5Lgq5FZQmTDHmhAAQkuAAk1hpg");
	var mask_3_graphics_35 = new cjs.Graphics().p("AHNfrQrbkDlOq9MA04gZMQFPK9kELaQkDLdq+FOQmKC8mUAAQk6AAlBhyg");
	var mask_3_graphics_36 = new cjs.Graphics().p("AG0fiQrYkNlErDMA1QgYaQFELBkOLXQkOLZrCFEQmBCwmHAAQlHAAlLh7g");
	var mask_3_graphics_37 = new cjs.Graphics().p("AGafYQrTkXk6rHMA1mgXqQE6LGkYLTQkZLVrHE6Ql3Cll6AAQlTAAlXiFg");
	var mask_3_graphics_38 = new cjs.Graphics().p("AGBfOQrPkikvrLMA17gW4QEvLKkiLPQkkLRrLEvQltCbltAAQlgAAlhiPg");
	var mask_3_graphics_39 = new cjs.Graphics().p("AFofEQrLktklrPMA2QgWGQElLPktLKQktLNrQElQliCQlhAAQltAAlriZg");
	var mask_3_graphics_40 = new cjs.Graphics().p("AFQe5QrHk2kbrUMA2kgVUQEbLTk3LGQk4LIrUEbQlYCGlVAAQl4AAl1ikg");
	var mask_3_graphics_41 = new cjs.Graphics().p("AE3euQrClBkQrXMA23gUiQEQLXlBLCQlDLDrXERQlNB8lJAAQmFAAl/ivg");
	var mask_3_graphics_42 = new cjs.Graphics().p("AEeejQq9lLkGrcMA3KgTuQEGLalMK9QlMK/rcEGQlCBzk8AAQmSAAmJi6g");
	var mask_3_graphics_43 = new cjs.Graphics().p("AEGeXQq4lVj8rfMA3cgS8QD7LflVK4QlXK6rfD7Qk3BqkwAAQmfAAmSjGg");
	var mask_3_graphics_44 = new cjs.Graphics().p("ADueLQqzlfjxrjMA3tgSIQDwLilfKzQlhK1rjDxQkrBhkkAAQmsAAmbjSg");
	var mask_3_graphics_45 = new cjs.Graphics().p("ADWd/QqulpjmrmMA39gRVQDmLllqKuQlqKwrmDmQkgBZkYAAQm5AAmkjeg");
	var mask_3_graphics_46 = new cjs.Graphics().p("AC+dyQqplzjbrpMA4NgQhQDbLplzKoQl1KrrpDbQkUBRkLAAQnHAAmtjrg");
	var mask_3_graphics_47 = new cjs.Graphics().p("ACndlQqkl9jQrsMA4bgPtQDRLsl9KjQl/KlrsDQQkIBKj/AAQnUAAm1j4g");
	var mask_3_graphics_48 = new cjs.Graphics().p("ACPdYQqemHjFrvMA4qgO5QDFLvmHKeQmIKfrvDGQj8BCjyAAQniAAm+kFg");
	var mask_3_graphics_49 = new cjs.Graphics().p("AB4dKQqYmQi7ryMA43gOEQC7LxmQKYQmSKaryC6QjvA8jnAAQnvAAnGkTg");
	var mask_3_graphics_50 = new cjs.Graphics().p("ABhc8QqSmZiwr1MA5EgNQQCwL0maKSQmbKUr1CwQjjA0jaAAQn9AAnOkgg");
	var mask_3_graphics_51 = new cjs.Graphics().p("ABLcuQqNmjilr4MA5QgMaQClL2mkKMQmkKOr3ClQjWAujNAAQoMAAnVkug");
	var mask_3_graphics_52 = new cjs.Graphics().p("AA0cfQqGmsiar6MA5bgLmQCaL5mtKGQmuKIr6CaQjIAojBAAQobAAnck9g");
	var mask_3_graphics_53 = new cjs.Graphics().p("AAecQQqAm1iPr8MA5lgKxQCPL7m2KAQm3KBr8CPQi8Aji0AAQopAAnjlMg");
	var mask_3_graphics_54 = new cjs.Graphics().p("AAIcBQp6m/iEr+MA5vgJ7QCEL9m/J5QnBJ7r+CEQiuAeinAAQo4AAnqlbg");
	var mask_3_graphics_55 = new cjs.Graphics().p("AgNbyQp0nJh5r/MA53gJGQB5L+nIJzQnKJ1r/B4QigAaibAAQpIAAnvlqg");
	var mask_3_graphics_56 = new cjs.Graphics().p("AgibiQpunShusBMA6AgIQQBtMAnRJsQnTJusBBuQiSAViNAAQpYAAn1l6g");
	var mask_3_graphics_57 = new cjs.Graphics().p("Ag4bRQpnnahisCMA6GgHcQBjMCnaJmQncJnsCBiQiFARh/AAQpoAAn8mKg");
	var mask_3_graphics_58 = new cjs.Graphics().p("AhNbBQpgnjhXsEMA6NgGmQBXMEnjJeQnkJgsEBYQh2ANhyAAQp5AAoBmag");
	var mask_3_graphics_59 = new cjs.Graphics().p("AhiawQpZnshMsFMA6TgFwQBMMFnsJXQntJasFBMQhnAKhlAAQqJAAoHmrg");
	var mask_3_graphics_60 = new cjs.Graphics().p("Ah2afQpSn0hBsHMA6XgE6QBCMGn1JQQn1JSsHBBQhZAIhWAAQqbAAoLm8g");
	var mask_3_graphics_61 = new cjs.Graphics().p("AiLaNQpKn8g2sHMA6cgEFQA2MHn9JJQn+JLsHA2QhLAFhIAAQqtAAoQnOg");
	var mask_3_graphics_62 = new cjs.Graphics().p("AifZ8QpDoFgrsIMA6fgDPQArMIoFJBQoHJEsHAqQg8AEg6AAQq+AAoVnfg");
	var mask_3_graphics_63 = new cjs.Graphics().p("AizZqQo7oOggsIMA6igCZQAfMIoNI7QoPI7sIAgQgsACgsAAQrRAAoZnxg");
	var mask_3_graphics_64 = new cjs.Graphics().p("AjHZXQo0oVgUsJMA6kgBjQAUMJoVIyQoYI0sIAVIg5ABQrlAAodoEg");
	var mask_3_graphics_65 = new cjs.Graphics().p("AjaZFQosoegJsJMA6kgAtQAKMJoeIrQofIssJAJIgaABQr5AAogoWg");
	var mask_3_graphics_66 = new cjs.Graphics().p("EAQ+AhbQsJgCoionQolomACsJMA6lAAJQgCMJolIjQolIjsGAAIgFAAg");
	var mask_3_graphics_67 = new cjs.Graphics().p("EAQjAhaQsJgNoaovQocotANsJMA6kAA/QgNMJotIbQoiIQrxAAIglgBg");
	var mask_3_graphics_68 = new cjs.Graphics().p("EAQIAhaQsJgZoRo2QoVo2AZsIMA6jAB1QgYMJo2ITQoeH9rdAAIhEgBg");
	var mask_3_graphics_69 = new cjs.Graphics().p("EAPuAhYQsJgjoJo+QoMo9AjsIMA6hACrQgjMIo9ILQoaHrrLAAQgwAAgxgDg");
	var mask_3_graphics_70 = new cjs.Graphics().p("EAPTAhXQsHgvoCpGQoDpEAusHMA6fADhQgvMIpEICQoWHZq4AAQg/AAhBgEg");
	var mask_3_graphics_71 = new cjs.Graphics().p("EAO5AhVQsHg6n4pNQn8pMA6sHMA6bAEYQg6MHpMH6QoRHHqmAAQhNAAhQgGg");
	var mask_3_graphics_72 = new cjs.Graphics().p("EAOfAhTQsGhFnwpVQnzpTBGsGMA6WAFOQhFMGpTHxQoMG2qVAAQhbAAhfgIg");
	var mask_3_graphics_73 = new cjs.Graphics().p("EAOGAhQQsFhQnopcQnqpaBQsFMA6RAGEQhQMFpaHoQoHGlqDAAQhqAAhsgLg");
	var mask_3_graphics_74 = new cjs.Graphics().p("EANsAhNQsDhcnfpiQnhphBbsEMA6LAG5QhcMEpgHgQoCGUpzAAQh3AAh7gOg");
	var mask_3_graphics_75 = new cjs.Graphics().p("EANRAhJQsChnnVpqQnYpoBnsCMA6EAHyQhnMCpoHWQn7GEpiAAQiFAAiLgTg");
	var mask_3_graphics_76 = new cjs.Graphics().p("EAM3AhFQsAhznMpxQnPpwBzr/MA58AIqQhzMBpwHNQn0FypQAAQiUAAiZgXg");
	var mask_3_graphics_77 = new cjs.Graphics().p("EAMdAhAQr/h/nCp4QnFp2B/r+MA5zAJkQh/L+p3HDQntFipAAAQihAAiogcg");
	var mask_3_graphics_78 = new cjs.Graphics().p("EAMDAg7Qr9iLm4p+Qm7p+CKr7MA5pAKcQiKL8p+G6QnmFRowAAQivAAi2ghg");
	var mask_3_graphics_79 = new cjs.Graphics().p("EALpAg2Qr5iXmwqFQmxqFCXr5MA5eALVQiXL6qEGwQnfFBogAAQi8AAjFgmg");
	var mask_3_graphics_80 = new cjs.Graphics().p("EALQAgwQr3ijmmqMQmnqLCir2MA5TAMNQiiL4qLGmQnYExoPAAQjLAAjSgsg");
	var mask_3_graphics_81 = new cjs.Graphics().p("EAK3AgpQr1iumbqSQmdqRCur1MA5GANGQiuL1qRGcQnQEjoAAAQjYAAjgg0g");
	var mask_3_graphics_82 = new cjs.Graphics().p("EAKeAgiQryi5mRqZQmTqXC6ryMA44AN+Qi5LzqXGRQnIEUnxAAQjlAAjug7g");
	var mask_3_graphics_83 = new cjs.Graphics().p("EAKGAgbQrvjFmHqfQmJqdDFrvMA4rAO2QjFLvqeGIQm/EFniAAQjyAAj7hCg");
	var mask_3_graphics_84 = new cjs.Graphics().p("EAJtAgTQrrjQl9qlQl+qkDRrrMA4bAPtQjRLtqjF9Qm2D3nUAAQj/AAkJhKg");
	var mask_3_graphics_85 = new cjs.Graphics().p("EAJWAgLQrojclzqqQl0qqDcroMA4MAQlQjcLpqpFzQmtDpnGAAQkMAAkVhSg");
	var mask_3_graphics_86 = new cjs.Graphics().p("EAI+AgDQrkjoloqwQlpqvDnrlMA37ARdQjoLlquFoQmkDcm3AAQkaAAkihag");
	var mask_3_graphics_87 = new cjs.Graphics().p("AInf6Qrhjzldq1Qlfq1DzrhMA3pASTQjzLiq0FdQmaDPmpAAQknAAkuhjg");
	var mask_3_graphics_88 = new cjs.Graphics().p("AIQfxQrdj/lSq6QlUq6D+reMA3XATKQj/Leq5FTQmQDCmbAAQk0AAk7hsg");
	var mask_3_graphics_89 = new cjs.Graphics().p("AH6fnQrZkKlIq/QlJrAEKrZMA3DAUAQkKLbq+FIQmGC1mOAAQlBAAlGh2g");
	var mask_3_graphics_90 = new cjs.Graphics().p("AHkfdQrVkVk9rFQk+rEEVrVMA2vAU2QkVLWrDE9Ql8CrmAAAQlOAAlSiBg");
	var mask_3_graphics_91 = new cjs.Graphics().p("AHOfSQrQkfkyrKQkzrJEfrRMA2bAVsQkgLSrJEyQlwCflzAAQlbAAleiMg");
	var mask_3_graphics_92 = new cjs.Graphics().p("AG5fHQrMkqknrPQkorNErrNMA2EAWiQkrLNrNEnQllCUlmAAQloAAlpiXg");
	var mask_3_graphics_93 = new cjs.Graphics().p("AGke8QrHk2kcrTQkdrSE2rHMA1tAXWQk1LJrSEcQlaCJlYAAQl2AAl0iig");
	var mask_3_graphics_94 = new cjs.Graphics().p("AGQewQrDlAkQrXQkTrXFBrCMA1XAYLQlBLDrWERQlPB/lLAAQmDAAl+iug");
	var mask_3_graphics_95 = new cjs.Graphics().p("AF8ekQq+lLkFrbQkHrbFLq+MA0/AZAQlMK/raEFQlDB0k+AAQmRAAmIi5g");
	var mask_3_graphics_96 = new cjs.Graphics().p("AFoeYQq5lXj5rfQj8reFWq4MA0lAZzQlWK6reD6Qk3BqkxAAQmfAAmSjFg");
	var mask_3_graphics_97 = new cjs.Graphics().p("AFVeLQq0lhjurjQjxriFiqzMA0LAanQlhK0riDvQkrBhkjAAQmtAAmcjSg");
	var mask_3_graphics_98 = new cjs.Graphics().p("AFCd+QqulsjjrmQjlrmFrquMAzxAbbQlsKurlDkQkeBYkXAAQm7AAmljfg");
	var mask_3_graphics_99 = new cjs.Graphics().p("AEvdwQqol2jXrqQjarpF2qoMAzVAcNQl2KproDYQkSBQkKAAQnJAAmvjtg");
	var mask_3_graphics_100 = new cjs.Graphics().p("AEddiQqimAjMrtQjPrtGBqiMAy5Ac/QmAKkrsDMQkFBIj8AAQnYAAm4j7g");
	var mask_3_graphics_101 = new cjs.Graphics().p("AELdUQqcmLjArwQjDrvGLqdMAycAdxQmLKervDBQj4BAjvAAQnmAAnBkJg");
	var mask_3_graphics_102 = new cjs.Graphics().p("AD6dFQqWmVi1rzQi3rxGVqXMAx/AeiQmWKXrxC2QjrA5jhAAQn2AAnJkYg");
	var mask_3_graphics_103 = new cjs.Graphics().p("ADpc2QqQmfipr2Qirr0GfqRMAxgAfUQmfKRr1CqQjdAyjUAAQoFAAnRkng");
	var mask_3_graphics_104 = new cjs.Graphics().p("ADYcnQqJmqidr4Qigr3GpqKMAxBAgEQmpKKr3CfQjPArjHAAQoUAAnak1g");
	var mask_3_graphics_105 = new cjs.Graphics().p("ADLcZQqEmyiTr6QiWr5GyqFMAwlAguQmyKFr5CUQjDAmi7AAQoiAAnflDg");
	var mask_3_graphics_106 = new cjs.Graphics().p("AC9cLQp+m7iJr8QiMr7G7p+MAwJAhXQm7J/r6CKQi3AhivAAQowAAnmlRg");
	var mask_3_graphics_107 = new cjs.Graphics().p("ACwb9Qp4nDh/r+QiCr9HEp4MAvsAiAQnDJ4r9CAQiqAdijAAQo+AAnslfg");
	var mask_3_graphics_108 = new cjs.Graphics().p("ACjbuQpynLh1sAQh3r+HLpyMAvPAioQnLJyr+B2QieAZiXAAQpMAAnylug");
	var mask_3_graphics_109 = new cjs.Graphics().p("ACWbfQprnThrsBQhtsAHUpsMAuxAjQQnUJssABsQiQAUiLAAQpbAAn4l8g");
	var mask_3_graphics_110 = new cjs.Graphics().p("ACKbQQplnchhsCQhisBHbpmMAuTAj4QncJmsBBiQiDAQh/AAQpqAAn9mLg");
	var mask_3_graphics_111 = new cjs.Graphics().p("AB+bBQpfnkhWsDQhYsDHkpgMAt0AkgQnkJgsDBXQh2ANhyAAQp5AAoDmag");
	var mask_3_graphics_112 = new cjs.Graphics().p("AByayQpYnthMsEQhOsEHspZMAtVAlGQnsJasEBNQhpAKhlAAQqJAAoImpg");
	var mask_3_graphics_113 = new cjs.Graphics().p("ABnaiQpRn0hCsGQhEsEH0pTMAs1AltQn0JSsFBDQhbAIhZAAQqYAAoNm5g");
	var mask_3_graphics_114 = new cjs.Graphics().p("ABcaSQpLn8g3sHQg6sFH8pMMAsVAmTQn8JMsFA4QhOAGhMAAQqpAAoRnJg");
	var mask_3_graphics_115 = new cjs.Graphics().p("ABSaBQpEoDgusHQgvsGIEpGMAr0Am5QoEJFsGAuQhAAEg/AAQq5AAoVnag");
	var mask_3_graphics_116 = new cjs.Graphics().p("ABHZxQo9oMgjsHQgksHILo+MArSAndQoLI+sHAkQgyADgxAAQrKAAoanqg");
	var mask_3_graphics_117 = new cjs.Graphics().p("AA+ZgQo3oTgYsIQgbsHITo3MAqxAoCQoTI3sHAZIhHABQrcAAodn6g");
	var mask_3_graphics_118 = new cjs.Graphics().p("AA0ZPQovobgOsIQgQsHIZowMAqPAomQoaIwsIAPIgqAAQruAAohoLg");
	var mask_3_graphics_119 = new cjs.Graphics().p("AArY9QoooigEsIQgGsHIhopMApsApKQoiIosHAFIgOAAQsAAAokodg");
	var mask_3_graphics_120 = new cjs.Graphics().p("EAVNAhaQsJgFoiopQogoqAGsIQAEsHIpoiMApJAptQokIcr+AAIgPAAg");
	var mask_3_graphics_121 = new cjs.Graphics().p("EAU9AhaQsJgQoaowQoaoxARsIQAPsHIwoaMAolAqQQohIKrrAAIgsAAg");
	var mask_3_graphics_122 = new cjs.Graphics().p("EAUtAhZQsJgaoTo4QoRo3AbsIQAZsHI3oTMAoBAqzQodH5raAAIhIgBg");
	var mask_3_graphics_123 = new cjs.Graphics().p("EAUdAhYQsIgkoLo/QoKo/AlsHQAksHI9oLMAncArVQoZHprIAAQgxAAgzgDg");
	var mask_3_graphics_124 = new cjs.Graphics().p("EAUOAhXQsIgvoEpGQoCpFAwsHQAusGJEoDMAm3Ar1QoVHZq3AAQg/AAhAgEg");
	var mask_3_graphics_125 = new cjs.Graphics().p("EAT+AhVQsHg5n7pNQn7pMA6sGQA4sFJLn8MAmSAsWQoRHJqnAAQhMAAhOgGg");
	var mask_3_graphics_126 = new cjs.Graphics().p("EATvAhTQsHhEnypTQn0pTBEsFQBDsFJSnzMAlrAs3QoMG4qWAAQhaAAhbgIg");
	var mask_3_graphics_127 = new cjs.Graphics().p("EATfAhQQsFhNnrpaQnrpaBOsEQBNsEJZnrMAlEAtWQoHGpqGAAQhmAAhqgLg");
	var mask_3_graphics_128 = new cjs.Graphics().p("EATQAhOQsEhZnjpgQnjpgBZsDQBXsCJfnkMAkeAt2QoDGZp3AAQhyAAh3gNg");
	var mask_3_graphics_129 = new cjs.Graphics().p("EATBAhKQsDhinapmQncpnBksCQBhsBJlncMAj3AuVQn9GKpoAAQh/AAiEgRg");
	var mask_3_graphics_130 = new cjs.Graphics().p("EASzAhHQsChtnTpsQnTptBusBQBrsAJsnTMAjPAuzQn4F7pZAAQiLAAiQgUg");
	var mask_3_graphics_131 = new cjs.Graphics().p("EASkAhDQsAh3nKpzQnLpzB3r+QB2r/JynLMAinAvRQnyFspKAAQiYABidgZg");
	var mask_3_graphics_132 = new cjs.Graphics().p("EASVAg/Qr+iBnCp5QnCp5CBr8QCAr+J4nDMAh/AvuQnsFfo8AAQikAAiqgdg");
	var mask_3_graphics_133 = new cjs.Graphics().p("EASHAg7Qr9iMm5p/Qm6p/CMr6QCKr8J+m6MAhWAwKQnnFRotAAQiwAAi2ghg");
	var mask_3_graphics_134 = new cjs.Graphics().p("EAR5Ag2Qr7iWmxqEQmxqFCWr5QCUr6KEmxMAgsAwmQngFDogAAQi7AAjCgmg");
	var mask_3_graphics_135 = new cjs.Graphics().p("EARrAgxQr5igmoqKQmpqLCgr2QCfr4KJmpMAgDAxCQnZE1oTAAQjHAAjOgrg");
	var mask_3_graphics_136 = new cjs.Graphics().p("EARdAgrQr3ipmfqQQmgqRCqr0QCor2KQmgMAfYAxdQnSEooFAAQjTAAjagxg");
	var mask_3_graphics_137 = new cjs.Graphics().p("EARPAgmQr0i0mXqWQmXqVC0ryQCzr0KUmXMAevAx3QnMEbn4AAQjeAAjmg2g");
	var mask_3_graphics_138 = new cjs.Graphics().p("EARBAgfQryi9mNqbQmPqbC/rwQC8rxKamPMAeEAySQnEEOnrAAQjqAAjyg9g");
	var mask_3_graphics_139 = new cjs.Graphics().p("EAQ0AgZQrvjImFqgQmGqgDJrtQDGrvKgmFMAdYAyrQm8ECnfAAQj1AAj9hEg");
	var mask_3_graphics_140 = new cjs.Graphics().p("EAQnAgSQrtjRl8qmQl8qlDSrqQDRrsKkl9MAcuAzEQm2D2nRAAQkBAAkIhLg");
	var mask_3_graphics_141 = new cjs.Graphics().p("EAQaAgLQrqjblzqrQlzqqDcrnQDarpKql0MAcCAzcQmuDqnFAAQkMAAkThSg");
	var mask_3_graphics_142 = new cjs.Graphics().p("EAQNAgEQrnjmlqqvQlqqvDmrkQDkrmKvlrMAbWAz0QmmDem5AAQkXAAkehZg");
	var mask_3_graphics_143 = new cjs.Graphics().p("AQAf9Qrkjwlgq0Qlhq0DwrhQDtrjK0lhMAapA0KQmcDTmtAAQkjAAkphgg");
	var mask_3_graphics_144 = new cjs.Graphics().p("APzf1Qrgj6lXq4QlYq5D6reQD3rgK4lYMAZ9A0hQmUDImhAAQkuAAk0hog");
	var mask_3_graphics_145 = new cjs.Graphics().p("APnfsQrdkDlOq9QlPq9EErbQEBrcK9lPMAZQA03QmMC9mVAAQk5AAk+hxg");
	var mask_3_graphics_146 = new cjs.Graphics().p("APbfkQrakNlErCQlGrBEOrXQEKrZLClFMAYjA1MQmDCymJAAQlFAAlIh5g");
	var mask_3_graphics_147 = new cjs.Graphics().p("APPfbQrWkXk7rFQk8rGEXrUQEUrVLGk8MAX1A1hQl5Col+AAQlQAAlSiCg");
	var mask_3_graphics_148 = new cjs.Graphics().p("APDfSQrSkgkyrKQkyrKEhrQQEdrRLKkzMAXIA11QlwCelzAAQlbAAlciLg");
	var mask_3_graphics_149 = new cjs.Graphics().p("AO3fJQrOkqkorOQkprOErrMQEnrNLOkpMAWZA2HQlnCVlmAAQlnAAlmiUg");
	var mask_3_graphics_150 = new cjs.Graphics().p("AOse/QrKk0kfrRQkfrSE0rIQExrJLSkgMAVrA2bQldCLlcAAQlyAAlvieg");
	var mask_3_graphics_151 = new cjs.Graphics().p("AOhe1QrGk9kVrWQkWrVE9rEQE7rFLVkWMAU9A2tQlTCClQAAQl+AAl4iog");
	var mask_3_graphics_152 = new cjs.Graphics().p("AOWerQrClHkLrZQkMrZFFq/QFFrCLZkMMAUPA2/QlKB5lEAAQmKAAmBiyg");
	var mask_3_graphics_153 = new cjs.Graphics().p("AOLegQq9lQkCrcQkCrdFPq7QFOq9LdkCMATfA3PQk/Bxk5AAQmWAAmKi9g");
	var mask_3_graphics_154 = new cjs.Graphics().p("AOAeVQq5lZj3rgQj5rgFZq2QFXq5Lgj4MASwA3fQk1BpktAAQmiAAmTjIg");
	var mask_3_graphics_155 = new cjs.Graphics().p("AN2eKQq0lijurkQjvrjFiqyQFgqzLkjvMASAA3vQkqBhkiAAQmuAAmbjTg");
	var mask_3_graphics_156 = new cjs.Graphics().p("ANrd/QqvlsjkrmQjlrnFrqtQFqquLmjlMARRA3+QkfBZkXAAQm6AAmkjeg");
	var mask_3_graphics_157 = new cjs.Graphics().p("ANhdzQqql1jarpQjbrqF0qnQFzqqLpjbMAQhA4MQkUBRkMAAQnGAAmsjpg");
	var mask_3_graphics_158 = new cjs.Graphics().p("ANXdnQqll+jQrsQjRrsF9qjQF8qlLsjRMAPxA4aQkJBKkAAAQnTAAm0j1g");
	var mask_3_graphics_159 = new cjs.Graphics().p("ANOdaQqgmGjHrvQjHruGGqfQGFqgLvjHMAPBA4oQj+BDj1AAQnfAAm7kCg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_3_graphics_9,x:296.6,y:213.8}).wait(1).to({graphics:mask_3_graphics_10,x:296.6,y:213.8}).wait(1).to({graphics:mask_3_graphics_11,x:296.6,y:213.8}).wait(1).to({graphics:mask_3_graphics_12,x:296.6,y:213.8}).wait(1).to({graphics:mask_3_graphics_13,x:296.6,y:213.8}).wait(1).to({graphics:mask_3_graphics_14,x:296.6,y:213.8}).wait(1).to({graphics:mask_3_graphics_15,x:296.6,y:213.8}).wait(1).to({graphics:mask_3_graphics_16,x:296.6,y:213.8}).wait(1).to({graphics:mask_3_graphics_17,x:296.6,y:213.8}).wait(1).to({graphics:mask_3_graphics_18,x:296.6,y:213.8}).wait(1).to({graphics:mask_3_graphics_19,x:296.7,y:213.9}).wait(1).to({graphics:mask_3_graphics_20,x:296.7,y:213.9}).wait(1).to({graphics:mask_3_graphics_21,x:296.7,y:213.9}).wait(1).to({graphics:mask_3_graphics_22,x:296.7,y:213.9}).wait(1).to({graphics:mask_3_graphics_23,x:296.7,y:213.9}).wait(1).to({graphics:mask_3_graphics_24,x:296.7,y:213.9}).wait(1).to({graphics:mask_3_graphics_25,x:296.8,y:214}).wait(1).to({graphics:mask_3_graphics_26,x:296.8,y:214}).wait(1).to({graphics:mask_3_graphics_27,x:296.8,y:214}).wait(1).to({graphics:mask_3_graphics_28,x:296.8,y:214}).wait(1).to({graphics:mask_3_graphics_29,x:296.8,y:214}).wait(1).to({graphics:mask_3_graphics_30,x:296.8,y:214.1}).wait(1).to({graphics:mask_3_graphics_31,x:296.8,y:214.1}).wait(1).to({graphics:mask_3_graphics_32,x:296.8,y:214.1}).wait(1).to({graphics:mask_3_graphics_33,x:296.9,y:214.1}).wait(1).to({graphics:mask_3_graphics_34,x:296.9,y:214.1}).wait(1).to({graphics:mask_3_graphics_35,x:296.9,y:214.1}).wait(1).to({graphics:mask_3_graphics_36,x:296.9,y:214.1}).wait(1).to({graphics:mask_3_graphics_37,x:296.9,y:214.1}).wait(1).to({graphics:mask_3_graphics_38,x:296.9,y:214.1}).wait(1).to({graphics:mask_3_graphics_39,x:296.9,y:214.1}).wait(1).to({graphics:mask_3_graphics_40,x:296.9,y:214.1}).wait(1).to({graphics:mask_3_graphics_41,x:296.9,y:214.1}).wait(1).to({graphics:mask_3_graphics_42,x:296.9,y:214.1}).wait(1).to({graphics:mask_3_graphics_43,x:296.8,y:214.1}).wait(1).to({graphics:mask_3_graphics_44,x:296.8,y:214.1}).wait(1).to({graphics:mask_3_graphics_45,x:296.8,y:214.1}).wait(1).to({graphics:mask_3_graphics_46,x:296.8,y:214.1}).wait(1).to({graphics:mask_3_graphics_47,x:296.8,y:214.1}).wait(1).to({graphics:mask_3_graphics_48,x:296.8,y:214.1}).wait(1).to({graphics:mask_3_graphics_49,x:296.8,y:214.1}).wait(1).to({graphics:mask_3_graphics_50,x:296.8,y:214}).wait(1).to({graphics:mask_3_graphics_51,x:296.7,y:214}).wait(1).to({graphics:mask_3_graphics_52,x:296.7,y:214}).wait(1).to({graphics:mask_3_graphics_53,x:296.7,y:214}).wait(1).to({graphics:mask_3_graphics_54,x:296.7,y:214}).wait(1).to({graphics:mask_3_graphics_55,x:296.7,y:214}).wait(1).to({graphics:mask_3_graphics_56,x:296.7,y:214}).wait(1).to({graphics:mask_3_graphics_57,x:296.6,y:213.9}).wait(1).to({graphics:mask_3_graphics_58,x:296.6,y:213.9}).wait(1).to({graphics:mask_3_graphics_59,x:296.6,y:213.9}).wait(1).to({graphics:mask_3_graphics_60,x:296.6,y:213.9}).wait(1).to({graphics:mask_3_graphics_61,x:296.6,y:213.9}).wait(1).to({graphics:mask_3_graphics_62,x:296.6,y:213.9}).wait(1).to({graphics:mask_3_graphics_63,x:296.6,y:213.9}).wait(1).to({graphics:mask_3_graphics_64,x:296.5,y:213.9}).wait(1).to({graphics:mask_3_graphics_65,x:296.5,y:213.9}).wait(1).to({graphics:mask_3_graphics_66,x:296.5,y:213.9}).wait(1).to({graphics:mask_3_graphics_67,x:296.5,y:213.9}).wait(1).to({graphics:mask_3_graphics_68,x:296.5,y:213.9}).wait(1).to({graphics:mask_3_graphics_69,x:296.4,y:213.9}).wait(1).to({graphics:mask_3_graphics_70,x:296.4,y:213.9}).wait(1).to({graphics:mask_3_graphics_71,x:296.3,y:213.9}).wait(1).to({graphics:mask_3_graphics_72,x:296.2,y:213.9}).wait(1).to({graphics:mask_3_graphics_73,x:296,y:213.9}).wait(1).to({graphics:mask_3_graphics_74,x:295.9,y:213.9}).wait(1).to({graphics:mask_3_graphics_75,x:295.7,y:214}).wait(1).to({graphics:mask_3_graphics_76,x:295.5,y:214}).wait(1).to({graphics:mask_3_graphics_77,x:295.3,y:214}).wait(1).to({graphics:mask_3_graphics_78,x:295,y:214}).wait(1).to({graphics:mask_3_graphics_79,x:294.8,y:214}).wait(1).to({graphics:mask_3_graphics_80,x:294.5,y:214}).wait(1).to({graphics:mask_3_graphics_81,x:294.2,y:214.1}).wait(1).to({graphics:mask_3_graphics_82,x:293.8,y:214.1}).wait(1).to({graphics:mask_3_graphics_83,x:293.5,y:214.1}).wait(1).to({graphics:mask_3_graphics_84,x:293.1,y:214.1}).wait(1).to({graphics:mask_3_graphics_85,x:292.7,y:214.1}).wait(1).to({graphics:mask_3_graphics_86,x:292.3,y:214.1}).wait(1).to({graphics:mask_3_graphics_87,x:291.8,y:214.1}).wait(1).to({graphics:mask_3_graphics_88,x:291.4,y:214.1}).wait(1).to({graphics:mask_3_graphics_89,x:290.9,y:214.1}).wait(1).to({graphics:mask_3_graphics_90,x:290.4,y:214.2}).wait(1).to({graphics:mask_3_graphics_91,x:289.9,y:214.2}).wait(1).to({graphics:mask_3_graphics_92,x:289.3,y:214.2}).wait(1).to({graphics:mask_3_graphics_93,x:288.7,y:214.2}).wait(1).to({graphics:mask_3_graphics_94,x:288.2,y:214.2}).wait(1).to({graphics:mask_3_graphics_95,x:287.6,y:214.1}).wait(1).to({graphics:mask_3_graphics_96,x:286.9,y:214.1}).wait(1).to({graphics:mask_3_graphics_97,x:286.3,y:214.1}).wait(1).to({graphics:mask_3_graphics_98,x:285.6,y:214.1}).wait(1).to({graphics:mask_3_graphics_99,x:284.9,y:214.1}).wait(1).to({graphics:mask_3_graphics_100,x:284.2,y:214.1}).wait(1).to({graphics:mask_3_graphics_101,x:283.5,y:214.1}).wait(1).to({graphics:mask_3_graphics_102,x:282.8,y:214.1}).wait(1).to({graphics:mask_3_graphics_103,x:282,y:214.1}).wait(1).to({graphics:mask_3_graphics_104,x:281.2,y:214}).wait(1).to({graphics:mask_3_graphics_105,x:280.5,y:214}).wait(1).to({graphics:mask_3_graphics_106,x:279.8,y:214}).wait(1).to({graphics:mask_3_graphics_107,x:279.1,y:214}).wait(1).to({graphics:mask_3_graphics_108,x:278.3,y:214}).wait(1).to({graphics:mask_3_graphics_109,x:277.6,y:213.9}).wait(1).to({graphics:mask_3_graphics_110,x:276.8,y:213.9}).wait(1).to({graphics:mask_3_graphics_111,x:276.1,y:213.9}).wait(1).to({graphics:mask_3_graphics_112,x:275.3,y:213.9}).wait(1).to({graphics:mask_3_graphics_113,x:274.5,y:213.9}).wait(1).to({graphics:mask_3_graphics_114,x:273.7,y:213.9}).wait(1).to({graphics:mask_3_graphics_115,x:272.9,y:213.9}).wait(1).to({graphics:mask_3_graphics_116,x:272,y:213.9}).wait(1).to({graphics:mask_3_graphics_117,x:271.2,y:213.8}).wait(1).to({graphics:mask_3_graphics_118,x:270.3,y:213.8}).wait(1).to({graphics:mask_3_graphics_119,x:269.4,y:213.8}).wait(1).to({graphics:mask_3_graphics_120,x:268.6,y:213.8}).wait(1).to({graphics:mask_3_graphics_121,x:267.7,y:213.8}).wait(1).to({graphics:mask_3_graphics_122,x:266.8,y:213.8}).wait(1).to({graphics:mask_3_graphics_123,x:265.8,y:213.9}).wait(1).to({graphics:mask_3_graphics_124,x:264.9,y:213.9}).wait(1).to({graphics:mask_3_graphics_125,x:264,y:213.9}).wait(1).to({graphics:mask_3_graphics_126,x:263,y:213.9}).wait(1).to({graphics:mask_3_graphics_127,x:262,y:213.9}).wait(1).to({graphics:mask_3_graphics_128,x:261.1,y:213.9}).wait(1).to({graphics:mask_3_graphics_129,x:260.1,y:213.9}).wait(1).to({graphics:mask_3_graphics_130,x:259.1,y:213.9}).wait(1).to({graphics:mask_3_graphics_131,x:258.1,y:213.9}).wait(1).to({graphics:mask_3_graphics_132,x:257.1,y:214}).wait(1).to({graphics:mask_3_graphics_133,x:256.1,y:214}).wait(1).to({graphics:mask_3_graphics_134,x:255,y:214}).wait(1).to({graphics:mask_3_graphics_135,x:254,y:214}).wait(1).to({graphics:mask_3_graphics_136,x:252.9,y:214}).wait(1).to({graphics:mask_3_graphics_137,x:251.9,y:214}).wait(1).to({graphics:mask_3_graphics_138,x:250.8,y:214}).wait(1).to({graphics:mask_3_graphics_139,x:249.7,y:214.1}).wait(1).to({graphics:mask_3_graphics_140,x:248.7,y:214.1}).wait(1).to({graphics:mask_3_graphics_141,x:247.6,y:214.1}).wait(1).to({graphics:mask_3_graphics_142,x:246.5,y:214.1}).wait(1).to({graphics:mask_3_graphics_143,x:245.4,y:214.1}).wait(1).to({graphics:mask_3_graphics_144,x:244.2,y:214.1}).wait(1).to({graphics:mask_3_graphics_145,x:243.1,y:214.1}).wait(1).to({graphics:mask_3_graphics_146,x:242,y:214.1}).wait(1).to({graphics:mask_3_graphics_147,x:240.8,y:214.1}).wait(1).to({graphics:mask_3_graphics_148,x:239.7,y:214.1}).wait(1).to({graphics:mask_3_graphics_149,x:238.5,y:214.1}).wait(1).to({graphics:mask_3_graphics_150,x:237.4,y:214.1}).wait(1).to({graphics:mask_3_graphics_151,x:236.2,y:214.1}).wait(1).to({graphics:mask_3_graphics_152,x:235.1,y:214.1}).wait(1).to({graphics:mask_3_graphics_153,x:233.9,y:214.1}).wait(1).to({graphics:mask_3_graphics_154,x:232.7,y:214.1}).wait(1).to({graphics:mask_3_graphics_155,x:231.5,y:214.1}).wait(1).to({graphics:mask_3_graphics_156,x:230.3,y:214.1}).wait(1).to({graphics:mask_3_graphics_157,x:229.1,y:214}).wait(1).to({graphics:mask_3_graphics_158,x:227.9,y:214}).wait(1).to({graphics:mask_3_graphics_159,x:226.7,y:214}).wait(456));

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(20,1,1).p("AjqV3QiJkIgHgTQguh/gbiCQggidgmj5QhUorESqIQESqJHSABQBPAJA1Aa");
	this.shape_4.setTransform(313.9,227);
	this.shape_4._off = true;

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(9).to({_off:false},0).wait(606));

	// Letter
	this.instance_4 = new lib.J("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(275,275);
	this.instance_4.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(615));

	// Background
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_5.setTransform(275,275,3.373,2.543);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_6.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(615));

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