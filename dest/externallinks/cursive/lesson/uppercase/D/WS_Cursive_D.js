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


(lib.D = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A/jVNQhThGAAh2QAAhuBEhwQA/hmBshYQBphWB6gzQB6gxBrAAIBMAFILf1zQBRh/BwhuQBwhuCEhTQCGhTCKgsQCTgxCJAAQB3AABuAgQBsAgBfA9QC8B6BpDXQDgg7C6hYQDBhdCtiIQAngnAqAAQB8AAAAB8QAABJhrBYQhbBJijBPQkKCBkSBJQA0DQAADjQAAB/gjCNIhhEdQjLF/iSCrQlDFAjBBrQiUBRiXAsQihAuifAAQieAAhzguQhdglhdhTQjSjoi5iGQiCD+hpB1QhOBYhVAsQhiA2huAAQh3AAhOhFgA6rOlQiaBwAABzQAAAaAiAAQCmAADElaIAKgUQh2AMiGBlgAmMqwIrLVKQAiAUE0EsQBXBWBUAnQBmAxCGAAQCLAACJgqQCBgnCBhJQCkhfERkcQC6jgBtj+QBsj9AAjIQAAjVgnimQjaAnjAAAQj1AAimg/QhpgnhDg9QhOhHgdhkQjBCLhMCXgADYyRQh6AbAAAgQAACLCQA7QBiAnCmAAQCjAADZglQhTiNiIhHQiChCirAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-210.3,-142.5,420.7,285.2);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-94.4,guide:{path:[-47.9,-29.4,-30.4,37.2,47,28.6]}},119).wait(1));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AlhCZICwlVIBHAkIixFVg");
	var mask_graphics_1 = new cjs.Graphics().p("Ah+CXICvlVIBOAoIivFVg");
	var mask_graphics_2 = new cjs.Graphics().p("AiDCUICwlVIBXAtIiwFVg");
	var mask_graphics_3 = new cjs.Graphics().p("AiHCSICwlVIBfAyIivFVg");
	var mask_graphics_4 = new cjs.Graphics().p("AiLCQICvlVIBoA2IivFVg");
	var mask_graphics_5 = new cjs.Graphics().p("AiPCOICvlVIBxA6IiwFVg");
	var mask_graphics_6 = new cjs.Graphics().p("AiUCMICwlVIB5A+IiwFVg");
	var mask_graphics_7 = new cjs.Graphics().p("AiYCJICwlVICBBEIivFVg");
	var mask_graphics_8 = new cjs.Graphics().p("AicCHICvlVICKBHIivFVg");
	var mask_graphics_9 = new cjs.Graphics().p("AigCFICvlVICTBMIiwFVg");
	var mask_graphics_10 = new cjs.Graphics().p("AilCDICwlVICbBQIiwFVg");
	var mask_graphics_11 = new cjs.Graphics().p("AipCBICwlVICjBUIiwFVg");
	var mask_graphics_12 = new cjs.Graphics().p("AitB/ICvlVICsBYIivFVg");
	var mask_graphics_13 = new cjs.Graphics().p("AixB8ICwlVICzBdIiwFVg");
	var mask_graphics_14 = new cjs.Graphics().p("Ai2B6ICxlVIC8BiIixFVg");
	var mask_graphics_15 = new cjs.Graphics().p("Ai6B4ICxlVIDEBmIixFVg");
	var mask_graphics_16 = new cjs.Graphics().p("Ai+B2ICwlVIDNBqIiwFVg");
	var mask_graphics_17 = new cjs.Graphics().p("AjCB0ICwlVIDVBuIiwFVg");
	var mask_graphics_18 = new cjs.Graphics().p("AjHBxICxlVIDeB0IixFVg");
	var mask_graphics_19 = new cjs.Graphics().p("AjLBvICxlVIDmB4IixFVg");
	var mask_graphics_20 = new cjs.Graphics().p("AjPBtICwlVIDvB8IiwFVg");
	var mask_graphics_21 = new cjs.Graphics().p("AjTBrICwlVID3CAIiwFVg");
	var mask_graphics_22 = new cjs.Graphics().p("AjYBpICxlVIEACEIixFVg");
	var mask_graphics_23 = new cjs.Graphics().p("AjcBmICxlVIEICJIiwFVg");
	var mask_graphics_24 = new cjs.Graphics().p("AjgBkICwlVIERCOIiwFVg");
	var mask_graphics_25 = new cjs.Graphics().p("AjkBiICwlVIEaCSIixFVg");
	var mask_graphics_26 = new cjs.Graphics().p("AjpBgICxlVIEiCWIixFVg");
	var mask_graphics_27 = new cjs.Graphics().p("AjtBeICxlVIEqCaIiwFVg");
	var mask_graphics_28 = new cjs.Graphics().p("AjxBbICwlVIEzCgIiwFVg");
	var mask_graphics_29 = new cjs.Graphics().p("Aj1BZICwlVIE8CkIixFVg");
	var mask_graphics_30 = new cjs.Graphics().p("Aj6BXICxlVIFECoIixFVg");
	var mask_graphics_31 = new cjs.Graphics().p("Aj+BVICxlVIFMCsIixFVg");
	var mask_graphics_32 = new cjs.Graphics().p("AkCBTICwlVIFVCwIiwFVg");
	var mask_graphics_33 = new cjs.Graphics().p("AkGBQICwlVIFdC1IiwFVg");
	var mask_graphics_34 = new cjs.Graphics().p("AkLBOICxlVIFmC6IixFVg");
	var mask_graphics_35 = new cjs.Graphics().p("AkPBMICxlVIFuC+IixFVg");
	var mask_graphics_36 = new cjs.Graphics().p("AkTBKICwlVIF3DCIiwFVg");
	var mask_graphics_37 = new cjs.Graphics().p("AkXBIICwlVIF/DGIiwFVg");
	var mask_graphics_38 = new cjs.Graphics().p("AkcBFICxlVIGIDMIixFVg");
	var mask_graphics_39 = new cjs.Graphics().p("AkgBDICxlVIGQDQIiwFVg");
	var mask_graphics_40 = new cjs.Graphics().p("AkkBBICwlVIGZDUIiwFVg");
	var mask_graphics_41 = new cjs.Graphics().p("AkoA/ICwlVIGiDYIixFVg");
	var mask_graphics_42 = new cjs.Graphics().p("AktA9ICxlVIGqDcIixFVg");
	var mask_graphics_43 = new cjs.Graphics().p("AkxA6ICxlVIGyDhIiwFVg");
	var mask_graphics_44 = new cjs.Graphics().p("Ak1A4ICwlVIG7DmIiwFVg");
	var mask_graphics_45 = new cjs.Graphics().p("Ak5A2ICwlVIHEDqIixFVg");
	var mask_graphics_46 = new cjs.Graphics().p("Ak+A0ICxlVIHMDuIixFVg");
	var mask_graphics_47 = new cjs.Graphics().p("AlCAyICxlVIHUDyIixFVg");
	var mask_graphics_48 = new cjs.Graphics().p("AlGAvICwlVIHdD4IiwFVg");
	var mask_graphics_49 = new cjs.Graphics().p("AlKAtICwlVIHlD8IiwFVg");
	var mask_graphics_50 = new cjs.Graphics().p("AlPArICxlVIHuEAIixFVg");
	var mask_graphics_51 = new cjs.Graphics().p("AlTApICxlVIH2EEIixFVg");
	var mask_graphics_52 = new cjs.Graphics().p("AlXAnICwlVIH/EIIiwFVg");
	var mask_graphics_53 = new cjs.Graphics().p("AlbAkICwlVIIHENIiwFWg");
	var mask_graphics_54 = new cjs.Graphics().p("AlgAiICxlVIIQESIixFVg");
	var mask_graphics_55 = new cjs.Graphics().p("AlkAgICxlVIIYEWIixFVg");
	var mask_graphics_56 = new cjs.Graphics().p("AloAeICwlVIIhEaIiwFVg");
	var mask_graphics_57 = new cjs.Graphics().p("AlsAcICwlVIIqEeIixFVg");
	var mask_graphics_58 = new cjs.Graphics().p("AlxAZICxlVIIyEjIixFVg");
	var mask_graphics_59 = new cjs.Graphics().p("Al1AXICwlVII7EoIiwFVg");
	var mask_graphics_60 = new cjs.Graphics().p("Al6AVICxlVIJDEsIiwFVg");
	var mask_graphics_61 = new cjs.Graphics().p("Al+ATICwlVIJNEwIixFVg");
	var mask_graphics_62 = new cjs.Graphics().p("AmCARICwlVIJVE1IiwFVg");
	var mask_graphics_63 = new cjs.Graphics().p("AmHAOICxlVIJdE6IiwFVg");
	var mask_graphics_64 = new cjs.Graphics().p("AmLAMICxlVIJmE+IixFVg");
	var mask_graphics_65 = new cjs.Graphics().p("AmPAKICwlVIJvFCIixFVg");
	var mask_graphics_66 = new cjs.Graphics().p("AmTAIICwlVIJ3FGIiwFVg");
	var mask_graphics_67 = new cjs.Graphics().p("AmYAGICxlVIKAFKIixFVg");
	var mask_graphics_68 = new cjs.Graphics().p("AmcADICxlVIKIFQIixFVg");
	var mask_graphics_69 = new cjs.Graphics().p("AmgABICwlVIKRFUIiwFVg");
	var mask_graphics_70 = new cjs.Graphics().p("AmkAAICwlWIKZFXIiwFWg");
	var mask_graphics_71 = new cjs.Graphics().p("AmpgCICxlWIKiFbIixFWg");
	var mask_graphics_72 = new cjs.Graphics().p("AmtgEICxlWIKqFgIixFWg");
	var mask_graphics_73 = new cjs.Graphics().p("AmxgHICwlWIKzFlIiwFWg");
	var mask_graphics_74 = new cjs.Graphics().p("Am1gJICwlWIK7FpIiwFWg");
	var mask_graphics_75 = new cjs.Graphics().p("Am6gLICxlWILEFtIixFWg");
	var mask_graphics_76 = new cjs.Graphics().p("Am+gNICxlWILMFxIixFWg");
	var mask_graphics_77 = new cjs.Graphics().p("AnCgPICwlWILVF1IixFWg");
	var mask_graphics_78 = new cjs.Graphics().p("AnGgSICwlWILdF7IiwFWg");
	var mask_graphics_79 = new cjs.Graphics().p("AnLgUICxlWILlF/IiwFWg");
	var mask_graphics_80 = new cjs.Graphics().p("AnPgWICxlWILuGDIixFWg");
	var mask_graphics_81 = new cjs.Graphics().p("AnTgYICwlWIL3GHIixFWg");
	var mask_graphics_82 = new cjs.Graphics().p("AnXgaICwlWIL/GMIiwFWg");
	var mask_graphics_83 = new cjs.Graphics().p("AncgdICxlWIMHGRIiwFWg");
	var mask_graphics_84 = new cjs.Graphics().p("AnggfICxlWIMQGVIixFWg");
	var mask_graphics_85 = new cjs.Graphics().p("AnkghICwlWIMZGZIiwFWg");
	var mask_graphics_86 = new cjs.Graphics().p("AnogjICwlWIMhGdIiwFWg");
	var mask_graphics_87 = new cjs.Graphics().p("AntglICxlWIMqGhIixFWg");
	var mask_graphics_88 = new cjs.Graphics().p("AnxgoICxlWIMyGnIixFWg");
	var mask_graphics_89 = new cjs.Graphics().p("An1gqICwlWIM7GrIiwFWg");
	var mask_graphics_90 = new cjs.Graphics().p("An5gsICwlWINDGvIiwFWg");
	var mask_graphics_91 = new cjs.Graphics().p("An+guICxlWINMGzIixFWg");
	var mask_graphics_92 = new cjs.Graphics().p("AoCgwICxlWINUG4IixFWg");
	var mask_graphics_93 = new cjs.Graphics().p("AoGgyICwlWINdG7IixFWg");
	var mask_graphics_94 = new cjs.Graphics().p("AoKg1ICwlWINlHBIiwFWg");
	var mask_graphics_95 = new cjs.Graphics().p("AoPg3ICxlWINtHFIiwFWg");
	var mask_graphics_96 = new cjs.Graphics().p("AoTg5ICxlWIN2HJIixFWg");
	var mask_graphics_97 = new cjs.Graphics().p("AoXg7ICwlWIN/HNIixFWg");
	var mask_graphics_98 = new cjs.Graphics().p("Aobg9ICwlWIOHHRIiwFWg");
	var mask_graphics_99 = new cjs.Graphics().p("AoghAICxlWIOPHXIiwFWg");
	var mask_graphics_100 = new cjs.Graphics().p("AokhCICxlWIOYHbIixFWg");
	var mask_graphics_101 = new cjs.Graphics().p("AoohEICwlWIOhHfIixFWg");
	var mask_graphics_102 = new cjs.Graphics().p("AoshGICwlWIOpHjIiwFWg");
	var mask_graphics_103 = new cjs.Graphics().p("AoxhIICxlWIOxHoIiwFWg");
	var mask_graphics_104 = new cjs.Graphics().p("Ao1hLICxlWIO6HtIixFWg");
	var mask_graphics_105 = new cjs.Graphics().p("Ao5hNICwlWIPDHxIiwFWg");
	var mask_graphics_106 = new cjs.Graphics().p("Ao9hPICwlWIPLH1IiwFWg");
	var mask_graphics_107 = new cjs.Graphics().p("ApChRICxlWIPUH6IixFWg");
	var mask_graphics_108 = new cjs.Graphics().p("ApGhTICxlWIPcH9IixFWg");
	var mask_graphics_109 = new cjs.Graphics().p("ApKhWICwlWIPlIDIiwFWg");
	var mask_graphics_110 = new cjs.Graphics().p("ApOhYICwlWIPtIHIiwFWg");
	var mask_graphics_111 = new cjs.Graphics().p("ApThaICxlWIP2ILIixFWg");
	var mask_graphics_112 = new cjs.Graphics().p("ApXhcICxlWIP+IPIixFWg");
	var mask_graphics_113 = new cjs.Graphics().p("ApbheICwlWIQHIUIixFWg");
	var mask_graphics_114 = new cjs.Graphics().p("ApfhhICwlWIQPIZIiwFWg");
	var mask_graphics_115 = new cjs.Graphics().p("ApkhjICxlWIQXIdIiwFWg");
	var mask_graphics_116 = new cjs.Graphics().p("ApohlICxlWIQgIhIixFWg");
	var mask_graphics_117 = new cjs.Graphics().p("ApshnICwlWIQpIlIixFWg");
	var mask_graphics_118 = new cjs.Graphics().p("ApwhpICwlWIQxIpIiwFWg");
	var mask_graphics_119 = new cjs.Graphics().p("Ap1hsICxlWIQ6IvIixFWg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-35.4,y:-17.5}).wait(1).to({graphics:mask_graphics_1,x:-58.1,y:-17.2}).wait(1).to({graphics:mask_graphics_2,x:-57.7,y:-17}).wait(1).to({graphics:mask_graphics_3,x:-57.2,y:-16.8}).wait(1).to({graphics:mask_graphics_4,x:-56.8,y:-16.6}).wait(1).to({graphics:mask_graphics_5,x:-56.4,y:-16.3}).wait(1).to({graphics:mask_graphics_6,x:-56,y:-16.1}).wait(1).to({graphics:mask_graphics_7,x:-55.5,y:-15.9}).wait(1).to({graphics:mask_graphics_8,x:-55.1,y:-15.7}).wait(1).to({graphics:mask_graphics_9,x:-54.7,y:-15.5}).wait(1).to({graphics:mask_graphics_10,x:-54.3,y:-15.2}).wait(1).to({graphics:mask_graphics_11,x:-53.8,y:-15}).wait(1).to({graphics:mask_graphics_12,x:-53.4,y:-14.8}).wait(1).to({graphics:mask_graphics_13,x:-53,y:-14.6}).wait(1).to({graphics:mask_graphics_14,x:-52.6,y:-14.4}).wait(1).to({graphics:mask_graphics_15,x:-52.1,y:-14.1}).wait(1).to({graphics:mask_graphics_16,x:-51.7,y:-13.9}).wait(1).to({graphics:mask_graphics_17,x:-51.3,y:-13.7}).wait(1).to({graphics:mask_graphics_18,x:-50.9,y:-13.5}).wait(1).to({graphics:mask_graphics_19,x:-50.4,y:-13.3}).wait(1).to({graphics:mask_graphics_20,x:-50,y:-13}).wait(1).to({graphics:mask_graphics_21,x:-49.6,y:-12.8}).wait(1).to({graphics:mask_graphics_22,x:-49.2,y:-12.6}).wait(1).to({graphics:mask_graphics_23,x:-48.7,y:-12.4}).wait(1).to({graphics:mask_graphics_24,x:-48.3,y:-12.2}).wait(1).to({graphics:mask_graphics_25,x:-47.9,y:-11.9}).wait(1).to({graphics:mask_graphics_26,x:-47.5,y:-11.7}).wait(1).to({graphics:mask_graphics_27,x:-47,y:-11.5}).wait(1).to({graphics:mask_graphics_28,x:-46.6,y:-11.3}).wait(1).to({graphics:mask_graphics_29,x:-46.2,y:-11.1}).wait(1).to({graphics:mask_graphics_30,x:-45.8,y:-10.8}).wait(1).to({graphics:mask_graphics_31,x:-45.3,y:-10.6}).wait(1).to({graphics:mask_graphics_32,x:-44.9,y:-10.4}).wait(1).to({graphics:mask_graphics_33,x:-44.5,y:-10.2}).wait(1).to({graphics:mask_graphics_34,x:-44.1,y:-10}).wait(1).to({graphics:mask_graphics_35,x:-43.6,y:-9.7}).wait(1).to({graphics:mask_graphics_36,x:-43.2,y:-9.5}).wait(1).to({graphics:mask_graphics_37,x:-42.8,y:-9.3}).wait(1).to({graphics:mask_graphics_38,x:-42.4,y:-9.1}).wait(1).to({graphics:mask_graphics_39,x:-41.9,y:-8.9}).wait(1).to({graphics:mask_graphics_40,x:-41.5,y:-8.6}).wait(1).to({graphics:mask_graphics_41,x:-41.1,y:-8.4}).wait(1).to({graphics:mask_graphics_42,x:-40.7,y:-8.2}).wait(1).to({graphics:mask_graphics_43,x:-40.2,y:-8}).wait(1).to({graphics:mask_graphics_44,x:-39.8,y:-7.8}).wait(1).to({graphics:mask_graphics_45,x:-39.4,y:-7.5}).wait(1).to({graphics:mask_graphics_46,x:-39,y:-7.3}).wait(1).to({graphics:mask_graphics_47,x:-38.5,y:-7.1}).wait(1).to({graphics:mask_graphics_48,x:-38.1,y:-6.9}).wait(1).to({graphics:mask_graphics_49,x:-37.7,y:-6.7}).wait(1).to({graphics:mask_graphics_50,x:-37.3,y:-6.5}).wait(1).to({graphics:mask_graphics_51,x:-36.8,y:-6.2}).wait(1).to({graphics:mask_graphics_52,x:-36.4,y:-6}).wait(1).to({graphics:mask_graphics_53,x:-36,y:-5.8}).wait(1).to({graphics:mask_graphics_54,x:-35.6,y:-5.6}).wait(1).to({graphics:mask_graphics_55,x:-35.1,y:-5.4}).wait(1).to({graphics:mask_graphics_56,x:-34.7,y:-5.1}).wait(1).to({graphics:mask_graphics_57,x:-34.3,y:-4.9}).wait(1).to({graphics:mask_graphics_58,x:-33.9,y:-4.7}).wait(1).to({graphics:mask_graphics_59,x:-33.4,y:-4.5}).wait(1).to({graphics:mask_graphics_60,x:-33,y:-4.3}).wait(1).to({graphics:mask_graphics_61,x:-32.6,y:-4.1}).wait(1).to({graphics:mask_graphics_62,x:-32.2,y:-3.8}).wait(1).to({graphics:mask_graphics_63,x:-31.7,y:-3.6}).wait(1).to({graphics:mask_graphics_64,x:-31.3,y:-3.4}).wait(1).to({graphics:mask_graphics_65,x:-30.9,y:-3.2}).wait(1).to({graphics:mask_graphics_66,x:-30.5,y:-3}).wait(1).to({graphics:mask_graphics_67,x:-30,y:-2.7}).wait(1).to({graphics:mask_graphics_68,x:-29.6,y:-2.5}).wait(1).to({graphics:mask_graphics_69,x:-29.2,y:-2.3}).wait(1).to({graphics:mask_graphics_70,x:-28.8,y:-2.1}).wait(1).to({graphics:mask_graphics_71,x:-28.3,y:-1.9}).wait(1).to({graphics:mask_graphics_72,x:-27.9,y:-1.6}).wait(1).to({graphics:mask_graphics_73,x:-27.5,y:-1.4}).wait(1).to({graphics:mask_graphics_74,x:-27.1,y:-1.2}).wait(1).to({graphics:mask_graphics_75,x:-26.6,y:-1}).wait(1).to({graphics:mask_graphics_76,x:-26.2,y:-0.8}).wait(1).to({graphics:mask_graphics_77,x:-25.8,y:-0.5}).wait(1).to({graphics:mask_graphics_78,x:-25.4,y:-0.3}).wait(1).to({graphics:mask_graphics_79,x:-24.9,y:-0.1}).wait(1).to({graphics:mask_graphics_80,x:-24.5,y:0.1}).wait(1).to({graphics:mask_graphics_81,x:-24.1,y:0.3}).wait(1).to({graphics:mask_graphics_82,x:-23.7,y:0.6}).wait(1).to({graphics:mask_graphics_83,x:-23.2,y:0.8}).wait(1).to({graphics:mask_graphics_84,x:-22.8,y:1}).wait(1).to({graphics:mask_graphics_85,x:-22.4,y:1.2}).wait(1).to({graphics:mask_graphics_86,x:-22,y:1.4}).wait(1).to({graphics:mask_graphics_87,x:-21.5,y:1.7}).wait(1).to({graphics:mask_graphics_88,x:-21.1,y:1.9}).wait(1).to({graphics:mask_graphics_89,x:-20.7,y:2.1}).wait(1).to({graphics:mask_graphics_90,x:-20.3,y:2.3}).wait(1).to({graphics:mask_graphics_91,x:-19.8,y:2.5}).wait(1).to({graphics:mask_graphics_92,x:-19.4,y:2.8}).wait(1).to({graphics:mask_graphics_93,x:-19,y:3}).wait(1).to({graphics:mask_graphics_94,x:-18.6,y:3.2}).wait(1).to({graphics:mask_graphics_95,x:-18.1,y:3.4}).wait(1).to({graphics:mask_graphics_96,x:-17.7,y:3.6}).wait(1).to({graphics:mask_graphics_97,x:-17.3,y:3.9}).wait(1).to({graphics:mask_graphics_98,x:-16.9,y:4.1}).wait(1).to({graphics:mask_graphics_99,x:-16.4,y:4.3}).wait(1).to({graphics:mask_graphics_100,x:-16,y:4.5}).wait(1).to({graphics:mask_graphics_101,x:-15.6,y:4.7}).wait(1).to({graphics:mask_graphics_102,x:-15.2,y:5}).wait(1).to({graphics:mask_graphics_103,x:-14.7,y:5.2}).wait(1).to({graphics:mask_graphics_104,x:-14.3,y:5.4}).wait(1).to({graphics:mask_graphics_105,x:-13.9,y:5.6}).wait(1).to({graphics:mask_graphics_106,x:-13.5,y:5.8}).wait(1).to({graphics:mask_graphics_107,x:-13,y:6.1}).wait(1).to({graphics:mask_graphics_108,x:-12.6,y:6.3}).wait(1).to({graphics:mask_graphics_109,x:-12.2,y:6.5}).wait(1).to({graphics:mask_graphics_110,x:-11.8,y:6.7}).wait(1).to({graphics:mask_graphics_111,x:-11.3,y:6.9}).wait(1).to({graphics:mask_graphics_112,x:-10.9,y:7.1}).wait(1).to({graphics:mask_graphics_113,x:-10.5,y:7.4}).wait(1).to({graphics:mask_graphics_114,x:-10.1,y:7.6}).wait(1).to({graphics:mask_graphics_115,x:-9.6,y:7.8}).wait(1).to({graphics:mask_graphics_116,x:-9.2,y:8}).wait(1).to({graphics:mask_graphics_117,x:-8.8,y:8.2}).wait(1).to({graphics:mask_graphics_118,x:-8.4,y:8.5}).wait(1).to({graphics:mask_graphics_119,x:-7.9,y:8.7}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AnfkmQCwKeMPhb");

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.3,-37.3,21.2,38.8);


(lib.ar2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(48.5,-50.6,1,1,65.5,0,0,0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0.1,rotation:31.8,guide:{path:[48.5,-50.4,-9.2,-28.3,-42.7,42.1]}},89).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AA1kPIBIhMICkCaIhIBMg");
	var mask_graphics_1 = new cjs.Graphics().p("Ah6ghIBShXICjCaIhSBXg");
	var mask_graphics_2 = new cjs.Graphics().p("Ah/gcIBchhICjCaIhcBhg");
	var mask_graphics_3 = new cjs.Graphics().p("AiEgWIBmhsICjCZIhmBsg");
	var mask_graphics_4 = new cjs.Graphics().p("AiJgRIBwh3ICjCaIhwB2g");
	var mask_graphics_5 = new cjs.Graphics().p("AiOgMIB6iBICjCaIh6CBg");
	var mask_graphics_6 = new cjs.Graphics().p("AiTgHICEiLICjCaIiECLg");
	var mask_graphics_7 = new cjs.Graphics().p("AiYgBICOiWICjCZIiOCWg");
	var mask_graphics_8 = new cjs.Graphics().p("AidADICYigICjCbIiYCgg");
	var mask_graphics_9 = new cjs.Graphics().p("AiiAJICiirICjCbIiiCqg");
	var mask_graphics_10 = new cjs.Graphics().p("AinAOICri1ICkCaIirC1g");
	var mask_graphics_11 = new cjs.Graphics().p("AisATIC1jAICkCbIi1DAg");
	var mask_graphics_12 = new cjs.Graphics().p("AixAZIC/jLICkCbIi/DKg");
	var mask_graphics_13 = new cjs.Graphics().p("Ai2AeIDJjVICkCbIjJDUg");
	var mask_graphics_14 = new cjs.Graphics().p("Ai7AjIDTjgICkCbIjTDgg");
	var mask_graphics_15 = new cjs.Graphics().p("AjAAoIDdjqICkCaIjdDrg");
	var mask_graphics_16 = new cjs.Graphics().p("AjFAuIDnj1ICkCaIjnD1g");
	var mask_graphics_17 = new cjs.Graphics().p("AjKAzIDxj/ICkCaIjxD/g");
	var mask_graphics_18 = new cjs.Graphics().p("AjPA4ID7kKICkCbIj7EKg");
	var mask_graphics_19 = new cjs.Graphics().p("AjUA9IEFkUICkCaIkFEVg");
	var mask_graphics_20 = new cjs.Graphics().p("AjZBDIEPkfICkCaIkPEgg");
	var mask_graphics_21 = new cjs.Graphics().p("AjeBIIEZkqICkCbIkZEqg");
	var mask_graphics_22 = new cjs.Graphics().p("AjjBNIEjk0ICkCaIkjE1g");
	var mask_graphics_23 = new cjs.Graphics().p("AjoBTIEtk/ICkCaIksE/g");
	var mask_graphics_24 = new cjs.Graphics().p("AjtBYIE3lKICkCbIk2FKg");
	var mask_graphics_25 = new cjs.Graphics().p("AjyBdIFBlUICkCaIlBFVg");
	var mask_graphics_26 = new cjs.Graphics().p("Aj3BjIFLlfICkCaIlLFfg");
	var mask_graphics_27 = new cjs.Graphics().p("Aj8BoIFVlpICkCaIlVFpg");
	var mask_graphics_28 = new cjs.Graphics().p("AkBBtIFfl0ICkCbIlfF0g");
	var mask_graphics_29 = new cjs.Graphics().p("AkGByIFpl+ICkCaIloF/g");
	var mask_graphics_30 = new cjs.Graphics().p("AkLB3IFzmIICkCaIlyGKg");
	var mask_graphics_31 = new cjs.Graphics().p("AkQB9IF9mUICkCbIl8GUg");
	var mask_graphics_32 = new cjs.Graphics().p("AkVCCIGHmeICkCaImGGfg");
	var mask_graphics_33 = new cjs.Graphics().p("AkaCIIGRmpICkCaImQGpg");
	var mask_graphics_34 = new cjs.Graphics().p("AkfCNIGbm0ICkCbImbG0g");
	var mask_graphics_35 = new cjs.Graphics().p("AkkCSIGlm+ICkCbImlG+g");
	var mask_graphics_36 = new cjs.Graphics().p("AkpCYIGvnKICkCbImvHJg");
	var mask_graphics_37 = new cjs.Graphics().p("AkuCdIG5nUICkCbIm5HUg");
	var mask_graphics_38 = new cjs.Graphics().p("AkzCjIHDnfICkCbInDHeg");
	var mask_graphics_39 = new cjs.Graphics().p("Ak4CoIHNnpICkCbInMHog");
	var mask_graphics_40 = new cjs.Graphics().p("Ak9CtIHXn0ICkCbInWH0g");
	var mask_graphics_41 = new cjs.Graphics().p("AlCCyIHhn+ICkCbIngH+g");
	var mask_graphics_42 = new cjs.Graphics().p("AlHC4IHroJICkCbInqIIg");
	var mask_graphics_43 = new cjs.Graphics().p("AlMC9IH1oUICkCbIn1ITg");
	var mask_graphics_44 = new cjs.Graphics().p("AlRDCIH/oeICkCbIn/Ieg");
	var mask_graphics_45 = new cjs.Graphics().p("AlWDHIIIooIClCaIoJIpg");
	var mask_graphics_46 = new cjs.Graphics().p("AlbDNIISo0IClCbIoTI0g");
	var mask_graphics_47 = new cjs.Graphics().p("AlgDSIIco+IClCbIodI+g");
	var mask_graphics_48 = new cjs.Graphics().p("AllDYIImpJIClCbIonJIg");
	var mask_graphics_49 = new cjs.Graphics().p("AlqDdIIwpTIClCaIoxJTg");
	var mask_graphics_50 = new cjs.Graphics().p("AlvDiII6peIClCbIo7Jeg");
	var mask_graphics_51 = new cjs.Graphics().p("Al0DnIJEpoIClCbIpFJog");
	var mask_graphics_52 = new cjs.Graphics().p("Al5DsIJOpyIClCaIpPJzg");
	var mask_graphics_53 = new cjs.Graphics().p("Al+DyIJYp+IClCbIpZJ9g");
	var mask_graphics_54 = new cjs.Graphics().p("AmDD3IJiqIIClCbIpjKIg");
	var mask_graphics_55 = new cjs.Graphics().p("AmID8IJsqSIClCaIptKTg");
	var mask_graphics_56 = new cjs.Graphics().p("AmNECIJ2qeIClCbIp3Keg");
	var mask_graphics_57 = new cjs.Graphics().p("AmSEHIKAqoIClCbIqBKog");
	var mask_graphics_58 = new cjs.Graphics().p("AmXEMIKKqyIClCbIqLKyg");
	var mask_graphics_59 = new cjs.Graphics().p("AmcESIKUq+IClCcIqVK9g");
	var mask_graphics_60 = new cjs.Graphics().p("AmhEXIKerIIClCbIqfLIg");
	var mask_graphics_61 = new cjs.Graphics().p("AmmEcIKorSIClCbIqpLSg");
	var mask_graphics_62 = new cjs.Graphics().p("AmrEhIKyrdIClCcIqzLcg");
	var mask_graphics_63 = new cjs.Graphics().p("AmwEnIK8roIClCbIq9Log");
	var mask_graphics_64 = new cjs.Graphics().p("Am1EtILGrzIClCbIrHLyg");
	var mask_graphics_65 = new cjs.Graphics().p("Am6EyILQr9IClCbIrRL8g");
	var mask_graphics_66 = new cjs.Graphics().p("Am/E3ILasIIClCbIrbMIg");
	var mask_graphics_67 = new cjs.Graphics().p("AnEE8ILksSIClCbIrlMSg");
	var mask_graphics_68 = new cjs.Graphics().p("AnJFBILuscIClCbIrvMcg");
	var mask_graphics_69 = new cjs.Graphics().p("AnOFGIL4snIClCcIr5Mmg");
	var mask_graphics_70 = new cjs.Graphics().p("AnTFMIMCsyIClCbIsDMyg");
	var mask_graphics_71 = new cjs.Graphics().p("AnYFRIMMs8IClCbIsMM8g");
	var mask_graphics_72 = new cjs.Graphics().p("AndFXIMWtIIClCcIsWNGg");
	var mask_graphics_73 = new cjs.Graphics().p("AniFcIMgtSIClCbIsgNSg");
	var mask_graphics_74 = new cjs.Graphics().p("AnnFhIMqtcIClCbIsqNcg");
	var mask_graphics_75 = new cjs.Graphics().p("AnsFmIM0tmIClCaIs1Nng");
	var mask_graphics_76 = new cjs.Graphics().p("AnxFsIM+tyIClCbIs/Nyg");
	var mask_graphics_77 = new cjs.Graphics().p("An2FxINIt8IClCaItJN9g");
	var mask_graphics_78 = new cjs.Graphics().p("An7F2INSuGIClCaItTOIg");
	var mask_graphics_79 = new cjs.Graphics().p("AoAF8INcuSIClCbItdOSg");
	var mask_graphics_80 = new cjs.Graphics().p("AoFGBINmucIClCbItmOcg");
	var mask_graphics_81 = new cjs.Graphics().p("AoKGHINwunIClCbItwOmg");
	var mask_graphics_82 = new cjs.Graphics().p("AoPGMIN6uyIClCbIt6Oyg");
	var mask_graphics_83 = new cjs.Graphics().p("AoUGRIOEu8IClCbIuEO8g");
	var mask_graphics_84 = new cjs.Graphics().p("AoZGWIOOvGIClCbIuPPGg");
	var mask_graphics_85 = new cjs.Graphics().p("AoeGcIOYvRIClCaIuZPSg");
	var mask_graphics_86 = new cjs.Graphics().p("AojGhIOivcIClCbIujPcg");
	var mask_graphics_87 = new cjs.Graphics().p("AooGmIOsvmIClCbIutPmg");
	var mask_graphics_88 = new cjs.Graphics().p("AotGrIO2vwIClCaIu3Pxg");
	var mask_graphics_89 = new cjs.Graphics().p("AoyGxIPAv8IClCbIvAP8g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:28.9,y:-34.8}).wait(1).to({graphics:mask_graphics_1,x:45.5,y:-57.6}).wait(1).to({graphics:mask_graphics_2,x:45,y:-57.1}).wait(1).to({graphics:mask_graphics_3,x:44.5,y:-56.5}).wait(1).to({graphics:mask_graphics_4,x:44,y:-56}).wait(1).to({graphics:mask_graphics_5,x:43.5,y:-55.5}).wait(1).to({graphics:mask_graphics_6,x:43,y:-54.9}).wait(1).to({graphics:mask_graphics_7,x:42.5,y:-54.4}).wait(1).to({graphics:mask_graphics_8,x:42,y:-53.9}).wait(1).to({graphics:mask_graphics_9,x:41.5,y:-53.3}).wait(1).to({graphics:mask_graphics_10,x:41,y:-52.8}).wait(1).to({graphics:mask_graphics_11,x:40.5,y:-52.3}).wait(1).to({graphics:mask_graphics_12,x:40,y:-51.8}).wait(1).to({graphics:mask_graphics_13,x:39.5,y:-51.3}).wait(1).to({graphics:mask_graphics_14,x:39,y:-50.7}).wait(1).to({graphics:mask_graphics_15,x:38.5,y:-50.2}).wait(1).to({graphics:mask_graphics_16,x:38,y:-49.7}).wait(1).to({graphics:mask_graphics_17,x:37.5,y:-49.1}).wait(1).to({graphics:mask_graphics_18,x:37,y:-48.6}).wait(1).to({graphics:mask_graphics_19,x:36.5,y:-48.1}).wait(1).to({graphics:mask_graphics_20,x:36,y:-47.5}).wait(1).to({graphics:mask_graphics_21,x:35.5,y:-47}).wait(1).to({graphics:mask_graphics_22,x:35,y:-46.5}).wait(1).to({graphics:mask_graphics_23,x:34.5,y:-46}).wait(1).to({graphics:mask_graphics_24,x:34,y:-45.4}).wait(1).to({graphics:mask_graphics_25,x:33.5,y:-44.9}).wait(1).to({graphics:mask_graphics_26,x:33,y:-44.4}).wait(1).to({graphics:mask_graphics_27,x:32.5,y:-43.8}).wait(1).to({graphics:mask_graphics_28,x:32,y:-43.3}).wait(1).to({graphics:mask_graphics_29,x:31.5,y:-42.8}).wait(1).to({graphics:mask_graphics_30,x:31,y:-42.2}).wait(1).to({graphics:mask_graphics_31,x:30.5,y:-41.7}).wait(1).to({graphics:mask_graphics_32,x:30,y:-41.2}).wait(1).to({graphics:mask_graphics_33,x:29.5,y:-40.7}).wait(1).to({graphics:mask_graphics_34,x:29,y:-40.2}).wait(1).to({graphics:mask_graphics_35,x:28.5,y:-39.6}).wait(1).to({graphics:mask_graphics_36,x:28,y:-39.1}).wait(1).to({graphics:mask_graphics_37,x:27.5,y:-38.6}).wait(1).to({graphics:mask_graphics_38,x:27,y:-38}).wait(1).to({graphics:mask_graphics_39,x:26.5,y:-37.5}).wait(1).to({graphics:mask_graphics_40,x:26,y:-37}).wait(1).to({graphics:mask_graphics_41,x:25.5,y:-36.4}).wait(1).to({graphics:mask_graphics_42,x:25,y:-35.9}).wait(1).to({graphics:mask_graphics_43,x:24.5,y:-35.4}).wait(1).to({graphics:mask_graphics_44,x:24,y:-34.9}).wait(1).to({graphics:mask_graphics_45,x:23.5,y:-34.3}).wait(1).to({graphics:mask_graphics_46,x:23,y:-33.8}).wait(1).to({graphics:mask_graphics_47,x:22.5,y:-33.3}).wait(1).to({graphics:mask_graphics_48,x:22,y:-32.7}).wait(1).to({graphics:mask_graphics_49,x:21.5,y:-32.2}).wait(1).to({graphics:mask_graphics_50,x:21,y:-31.7}).wait(1).to({graphics:mask_graphics_51,x:20.5,y:-31.1}).wait(1).to({graphics:mask_graphics_52,x:20,y:-30.6}).wait(1).to({graphics:mask_graphics_53,x:19.5,y:-30.1}).wait(1).to({graphics:mask_graphics_54,x:19,y:-29.6}).wait(1).to({graphics:mask_graphics_55,x:18.5,y:-29}).wait(1).to({graphics:mask_graphics_56,x:18,y:-28.5}).wait(1).to({graphics:mask_graphics_57,x:17.5,y:-28}).wait(1).to({graphics:mask_graphics_58,x:17,y:-27.5}).wait(1).to({graphics:mask_graphics_59,x:16.5,y:-26.9}).wait(1).to({graphics:mask_graphics_60,x:16,y:-26.4}).wait(1).to({graphics:mask_graphics_61,x:15.5,y:-25.9}).wait(1).to({graphics:mask_graphics_62,x:15,y:-25.3}).wait(1).to({graphics:mask_graphics_63,x:14.5,y:-24.8}).wait(1).to({graphics:mask_graphics_64,x:14,y:-24.3}).wait(1).to({graphics:mask_graphics_65,x:13.5,y:-23.8}).wait(1).to({graphics:mask_graphics_66,x:13,y:-23.2}).wait(1).to({graphics:mask_graphics_67,x:12.5,y:-22.7}).wait(1).to({graphics:mask_graphics_68,x:12,y:-22.2}).wait(1).to({graphics:mask_graphics_69,x:11.5,y:-21.6}).wait(1).to({graphics:mask_graphics_70,x:11,y:-21.1}).wait(1).to({graphics:mask_graphics_71,x:10.5,y:-20.6}).wait(1).to({graphics:mask_graphics_72,x:10,y:-20}).wait(1).to({graphics:mask_graphics_73,x:9.5,y:-19.5}).wait(1).to({graphics:mask_graphics_74,x:9,y:-19}).wait(1).to({graphics:mask_graphics_75,x:8.5,y:-18.5}).wait(1).to({graphics:mask_graphics_76,x:8,y:-17.9}).wait(1).to({graphics:mask_graphics_77,x:7.5,y:-17.4}).wait(1).to({graphics:mask_graphics_78,x:7,y:-16.9}).wait(1).to({graphics:mask_graphics_79,x:6.5,y:-16.4}).wait(1).to({graphics:mask_graphics_80,x:6,y:-15.8}).wait(1).to({graphics:mask_graphics_81,x:5.5,y:-15.3}).wait(1).to({graphics:mask_graphics_82,x:5,y:-14.8}).wait(1).to({graphics:mask_graphics_83,x:4.5,y:-14.2}).wait(1).to({graphics:mask_graphics_84,x:4,y:-13.7}).wait(1).to({graphics:mask_graphics_85,x:3.5,y:-13.2}).wait(1).to({graphics:mask_graphics_86,x:3,y:-12.7}).wait(1).to({graphics:mask_graphics_87,x:2.5,y:-12.1}).wait(1).to({graphics:mask_graphics_88,x:2,y:-11.6}).wait(1).to({graphics:mask_graphics_89,x:1.5,y:-11.1}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AnCHOQFNq7I4jg");
	this.shape.setTransform(2.2,-3.9);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90));

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
(lib.WS_Cursive_D = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_667 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(667).call(this.frame_667).wait(38));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(321.6,143.3,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[321.6,143.4,320.8,143.3,320.1,143.3,285.3,141.2,263.1,158.5,261.4,159.8,261.1,160.1,250.5,168.9,242.1,179.4,241.2,180.5,240.4,181.6,236.7,186.3,233.3,191.1,229.7,196.1,226.4,201.2,218.2,213.4,210.9,226,204,238,197.4,250,191.6,260.4,185.8,271.1,179.9,281.9,174.3,293,167.5,306.2,161.1,319.5,155.9,330.6,150.7,341.5,149.3,344.3,147.9,347.2,144,355.2,140.1,363.4,134.1,375.8,126.2,387.1,117.7,399.4,100.4,404.9,88.8,408.5,82.5,405.7,82.4,405.5,82.3,405.4,80.6,404.4,79.5,403,78.9,402.2,78.4,401.3,73.7,392.3,76.9,382.9,80.1,373.6,88.2,363.4,94.2,355.7,102.5,351.4,107.3,348.9,112.9,347.5,119.8,345.9,126.9,345.5]}},214).to({guide:{path:[126.7,345.5,134,345.1,141.4,346.1,143.2,346.3,144.8,346.6,146.4,346.9,149.7,347.9,152.9,348.9,160.7,353.7,162.7,355,164.9,356.8]}},21).wait(14).to({startPosition:0},0).to({guide:{path:[164.9,357,171.3,361.8,179.6,371.5,184.2,376.9,189.5,383.9,207.1,407.6,254.2,403.5,301.4,399.4,350.1,337.1,398.9,274.9,385,212.2,382.6,201,379.2,191.6,378.8,190.7,378.5,189.7,378.4,189.4,378.3,189.1,362.8,148.5,329.7,144.2,329.4,144.2,329,144.1]}},179).wait(15).to({skewY:0,x:268.3,y:156.6},0).to({guide:{path:[268.3,156.6,269.6,173.4,277.2,182.4,284.8,191.5,298.8,195.3,312.7,199.1,329.4,199.1,343.8,199,359,196.2,389.3,190.5,415.8,181.5,430,176.6,441.3,171.4,451.6,166.7,458.1,162.3,469.2,154.9,469.9,153.9]}},135).wait(15).to({startPosition:0},0).to({guide:{path:[469.7,153.8,448.6,97.3,389.9,80.8,332.9,64.9,273.8,68.6,203.5,73.6,193.2,3.7,183.7,-61.8,119.1,-75.8,95.8,-80.9,74.2,-69]}},65).to({_off:true},1).wait(37));

	// Layer 16
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(165.2,357,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},235).wait(14).to({_off:false,x:325.6,y:143.5},0).to({_off:true},179).wait(15).to({_off:false,x:472.1,y:153},0).to({_off:true},135).wait(118));

	// Layer 15
	this.instance_1 = new lib.ar2("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(374.3,217.7,1,1,-143.5,0,0,0.6,-0.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(452).to({_off:false},0).to({_off:true},216).wait(37));

	// Layer 12 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_452 = new cjs.Graphics().p("AMlM7IIWoOIBnBpIoXINg");
	var mask_graphics_453 = new cjs.Graphics().p("AlCDTIIPoSIB2BtIoPISg");
	var mask_graphics_454 = new cjs.Graphics().p("AlHDTIIIoXICHByIoIIXg");
	var mask_graphics_455 = new cjs.Graphics().p("AlMDTIICocICWB4IoAIbg");
	var mask_graphics_456 = new cjs.Graphics().p("AlQDSIH6ogICnB9In5Igg");
	var mask_graphics_457 = new cjs.Graphics().p("AlVDSIHzolIC4CCInyIlg");
	var mask_graphics_458 = new cjs.Graphics().p("AlaDSIHsoqIDICHInrIqg");
	var mask_graphics_459 = new cjs.Graphics().p("AleDSIHkouIDZCLInkIug");
	var mask_graphics_460 = new cjs.Graphics().p("AljDSIHdozIDqCQIneIzg");
	var mask_graphics_461 = new cjs.Graphics().p("AlnDRIHVo3ID7CWInXI3g");
	var mask_graphics_462 = new cjs.Graphics().p("AlsDRIHPo8IEKCaInPI9g");
	var mask_graphics_463 = new cjs.Graphics().p("AlxDRIHIpBIEbCfInIJCg");
	var mask_graphics_464 = new cjs.Graphics().p("Al2DRIHBpGIEsClInBJGg");
	var mask_graphics_465 = new cjs.Graphics().p("Al7DRIG6pLIE8CqIm6JLg");
	var mask_graphics_466 = new cjs.Graphics().p("Al/DRIGzpQIFMCvImzJQg");
	var mask_graphics_467 = new cjs.Graphics().p("AmEDRIGspUIFdC0ImsJTg");
	var mask_graphics_468 = new cjs.Graphics().p("AmJDQIGlpZIFuC6ImlJZg");
	var mask_graphics_469 = new cjs.Graphics().p("AmNDRIGepfIF9C+ImdJfg");
	var mask_graphics_470 = new cjs.Graphics().p("AmSDQIGXpiIGODDImXJig");
	var mask_graphics_471 = new cjs.Graphics().p("AmXDQIGRpnIGeDIImSJng");
	var mask_graphics_472 = new cjs.Graphics().p("AmbDQIGJpsIGuDNImKJsg");
	var mask_graphics_473 = new cjs.Graphics().p("AmgDQIGDpxIG+DSImDJxg");
	var mask_graphics_474 = new cjs.Graphics().p("AmkDQIF7p2IHODYIl7J1g");
	var mask_graphics_475 = new cjs.Graphics().p("AmpDQIF0p7IHfDdIl0J6g");
	var mask_graphics_476 = new cjs.Graphics().p("AmuDQIFtqAIHwDiIltJ/g");
	var mask_graphics_477 = new cjs.Graphics().p("AmzDPIFnqEIIADnIlnKEg");
	var mask_graphics_478 = new cjs.Graphics().p("Am4DPIFgqJIIQDsIlfKJg");
	var mask_graphics_479 = new cjs.Graphics().p("Am8DPIFYqOIIhDxIlYKOg");
	var mask_graphics_480 = new cjs.Graphics().p("AnBDPIFRqSIIyD1IlRKSg");
	var mask_graphics_481 = new cjs.Graphics().p("AnGDPIFKqXIJCD6IlJKXg");
	var mask_graphics_482 = new cjs.Graphics().p("AnKDOIFCqbIJTD/IlDKcg");
	var mask_graphics_483 = new cjs.Graphics().p("AnPDOIE8qgIJjEEIk8Khg");
	var mask_graphics_484 = new cjs.Graphics().p("AnUDOIE1qlIJzEJIk1Kmg");
	var mask_graphics_485 = new cjs.Graphics().p("AnYDOIEtqqIKEEPIktKqg");
	var mask_graphics_486 = new cjs.Graphics().p("AndDOIEnqvIKUEUIknKvg");
	var mask_graphics_487 = new cjs.Graphics().p("AKTNaIEgq1IKlEZIkfK1g");
	var mask_graphics_488 = new cjs.Graphics().p("AlLF3IAArtIKWAAIAALtg");
	var mask_graphics_489 = new cjs.Graphics().p("AlTF3IAArtIKnAAIAALtg");
	var mask_graphics_490 = new cjs.Graphics().p("AlcF3IAArtIK5AAIAALtg");
	var mask_graphics_491 = new cjs.Graphics().p("AllF3IAArtILLAAIAALtg");
	var mask_graphics_492 = new cjs.Graphics().p("AluF3IAArtILdAAIAALtg");
	var mask_graphics_493 = new cjs.Graphics().p("Al2F3IAArtILtAAIAALtg");
	var mask_graphics_494 = new cjs.Graphics().p("Al/F3IAArtIL/AAIAALtg");
	var mask_graphics_495 = new cjs.Graphics().p("AmIF3IAArtIMRAAIAALtg");
	var mask_graphics_496 = new cjs.Graphics().p("AmRF3IAArtIMjAAIAALtg");
	var mask_graphics_497 = new cjs.Graphics().p("AmZF3IAArtIMzAAIAALtg");
	var mask_graphics_498 = new cjs.Graphics().p("AmiF3IAArtINFAAIAALtg");
	var mask_graphics_499 = new cjs.Graphics().p("AmrF3IAArtINWAAIAALtg");
	var mask_graphics_500 = new cjs.Graphics().p("AmzF3IAArtINnAAIAALtg");
	var mask_graphics_501 = new cjs.Graphics().p("Am8F3IAArtIN5AAIAALtg");
	var mask_graphics_502 = new cjs.Graphics().p("AnFF3IAArtIOLAAIAALtg");
	var mask_graphics_503 = new cjs.Graphics().p("AnOF3IAArtIOcAAIAALtg");
	var mask_graphics_504 = new cjs.Graphics().p("AnWF3IAArtIOtAAIAALtg");
	var mask_graphics_505 = new cjs.Graphics().p("AnfF3IAArtIO/AAIAALtg");
	var mask_graphics_506 = new cjs.Graphics().p("AnoF3IAArtIPRAAIAALtg");
	var mask_graphics_507 = new cjs.Graphics().p("AnxF3IAArtIPiAAIAALtg");
	var mask_graphics_508 = new cjs.Graphics().p("An5F3IAArtIPzAAIAALtg");
	var mask_graphics_509 = new cjs.Graphics().p("AoCF3IAArtIQFAAIAALtg");
	var mask_graphics_510 = new cjs.Graphics().p("AoLF3IAArtIQXAAIAALtg");
	var mask_graphics_511 = new cjs.Graphics().p("AoUF3IAArtIQpAAIAALtg");
	var mask_graphics_512 = new cjs.Graphics().p("AocF3IAArtIQ5AAIAALtg");
	var mask_graphics_513 = new cjs.Graphics().p("AolF3IAArtIRLAAIAALtg");
	var mask_graphics_514 = new cjs.Graphics().p("AouF3IAArtIRdAAIAALtg");
	var mask_graphics_515 = new cjs.Graphics().p("Ao3F3IAArtIRvAAIAALtg");
	var mask_graphics_516 = new cjs.Graphics().p("Ao/F3IAArtIR/AAIAALtg");
	var mask_graphics_517 = new cjs.Graphics().p("ApIF3IAArtISRAAIAALtg");
	var mask_graphics_518 = new cjs.Graphics().p("ApRF3IAArtISiAAIAALtg");
	var mask_graphics_519 = new cjs.Graphics().p("ApZF3IAArtISzAAIAALtg");
	var mask_graphics_520 = new cjs.Graphics().p("ApiF3IAArtITFAAIAALtg");
	var mask_graphics_521 = new cjs.Graphics().p("AprF3IAArtITXAAIAALtg");
	var mask_graphics_522 = new cjs.Graphics().p("Ap0F3IAArtIToAAIAALtg");
	var mask_graphics_523 = new cjs.Graphics().p("Ap8F3IAArtIT5AAIAALtg");
	var mask_graphics_524 = new cjs.Graphics().p("AqFF3IAArtIULAAIAALtg");
	var mask_graphics_525 = new cjs.Graphics().p("AqOF3IAArtIUdAAIAALtg");
	var mask_graphics_526 = new cjs.Graphics().p("AqXF3IAArtIUvAAIAALtg");
	var mask_graphics_527 = new cjs.Graphics().p("AqfF3IAArtIU/AAIAALtg");
	var mask_graphics_528 = new cjs.Graphics().p("AqoF3IAArtIVRAAIAALtg");
	var mask_graphics_529 = new cjs.Graphics().p("AqxF3IAArtIVjAAIAALtg");
	var mask_graphics_530 = new cjs.Graphics().p("Aq6F3IAArtIV1AAIAALtg");
	var mask_graphics_531 = new cjs.Graphics().p("ArCF3IAArtIWFAAIAALtg");
	var mask_graphics_532 = new cjs.Graphics().p("ArLF3IAArtIWXAAIAALtg");
	var mask_graphics_533 = new cjs.Graphics().p("ArUF3IAArtIWpAAIAALtg");
	var mask_graphics_534 = new cjs.Graphics().p("ArdF3IAArtIW6AAIAALtg");
	var mask_graphics_535 = new cjs.Graphics().p("ArlF3IAArtIXLAAIAALtg");
	var mask_graphics_536 = new cjs.Graphics().p("AruF3IAArtIXdAAIAALtg");
	var mask_graphics_537 = new cjs.Graphics().p("Ar3F3IAArtIXvAAIAALtg");
	var mask_graphics_538 = new cjs.Graphics().p("Ar/F3IAArtIX/AAIAALtg");
	var mask_graphics_539 = new cjs.Graphics().p("AsIF3IAArtIYRAAIAALtg");
	var mask_graphics_540 = new cjs.Graphics().p("AsRF3IAArtIYjAAIAALtg");
	var mask_graphics_541 = new cjs.Graphics().p("AsaF3IAArtIY0AAIAALtg");
	var mask_graphics_542 = new cjs.Graphics().p("AsiF3IAArtIZFAAIAALtg");
	var mask_graphics_543 = new cjs.Graphics().p("AsrF3IAArtIZXAAIAALtg");
	var mask_graphics_544 = new cjs.Graphics().p("As0F3IAArtIZpAAIAALtg");
	var mask_graphics_545 = new cjs.Graphics().p("As9F3IAArtIZ7AAIAALtg");
	var mask_graphics_546 = new cjs.Graphics().p("AtFF3IAArtIaLAAIAALtg");
	var mask_graphics_547 = new cjs.Graphics().p("AtOF3IAArtIadAAIAALtg");
	var mask_graphics_548 = new cjs.Graphics().p("AtXF3IAArtIavAAIAALtg");
	var mask_graphics_549 = new cjs.Graphics().p("AtgF3IAArtIbBAAIAALtg");
	var mask_graphics_550 = new cjs.Graphics().p("AtoF3IAArtIbRAAIAALtg");
	var mask_graphics_551 = new cjs.Graphics().p("AtxF3IAArtIbjAAIAALtg");
	var mask_graphics_552 = new cjs.Graphics().p("At6F3IAArtIb1AAIAALtg");
	var mask_graphics_553 = new cjs.Graphics().p("AuDF3IAArtIcGAAIAALtg");
	var mask_graphics_554 = new cjs.Graphics().p("AuLF3IAArtIcXAAIAALtg");
	var mask_graphics_555 = new cjs.Graphics().p("AuUF3IAArtIcpAAIAALtg");
	var mask_graphics_556 = new cjs.Graphics().p("AudF3IAArtIc7AAIAALtg");
	var mask_graphics_557 = new cjs.Graphics().p("AumF3IAArtIdMAAIAALtg");
	var mask_graphics_558 = new cjs.Graphics().p("AuuF3IAArtIddAAIAALtg");
	var mask_graphics_559 = new cjs.Graphics().p("Au3F3IAArtIdvAAIAALtg");
	var mask_graphics_560 = new cjs.Graphics().p("AvAF3IAArtIeBAAIAALtg");
	var mask_graphics_561 = new cjs.Graphics().p("AvIF3IAArtIeRAAIAALtg");
	var mask_graphics_562 = new cjs.Graphics().p("AvRF3IAArtIejAAIAALtg");
	var mask_graphics_563 = new cjs.Graphics().p("AvaF3IAArtIe1AAIAALtg");
	var mask_graphics_564 = new cjs.Graphics().p("AvjF3IAArtIfHAAIAALtg");
	var mask_graphics_565 = new cjs.Graphics().p("AvrF3IAArtIfXAAIAALtg");
	var mask_graphics_566 = new cjs.Graphics().p("Av0F3IAArtIfpAAIAALtg");
	var mask_graphics_567 = new cjs.Graphics().p("Av9F3IAArtIf7AAIAALtg");
	var mask_graphics_568 = new cjs.Graphics().p("AwGF3IAArtMAgMAAAIAALtg");
	var mask_graphics_569 = new cjs.Graphics().p("AwOF3IAArtMAgdAAAIAALtg");
	var mask_graphics_570 = new cjs.Graphics().p("AwXF3IAArtMAgvAAAIAALtg");
	var mask_graphics_571 = new cjs.Graphics().p("AwgF3IAArtMAhBAAAIAALtg");
	var mask_graphics_572 = new cjs.Graphics().p("AwpF3IAArtMAhSAAAIAALtg");
	var mask_graphics_573 = new cjs.Graphics().p("AwxF3IAArtMAhjAAAIAALtg");
	var mask_graphics_574 = new cjs.Graphics().p("Aw6F3IAArtMAh1AAAIAALtg");
	var mask_graphics_575 = new cjs.Graphics().p("AxDF3IAArtMAiHAAAIAALtg");
	var mask_graphics_576 = new cjs.Graphics().p("AxMF3IAArtMAiZAAAIAALtg");
	var mask_graphics_577 = new cjs.Graphics().p("AxUF3IAArtMAipAAAIAALtg");
	var mask_graphics_578 = new cjs.Graphics().p("AxdF3IAArtMAi7AAAIAALtg");
	var mask_graphics_579 = new cjs.Graphics().p("AxmF3IAArtMAjNAAAIAALtg");
	var mask_graphics_580 = new cjs.Graphics().p("AxuF3IAArtMAjdAAAIAALtg");
	var mask_graphics_581 = new cjs.Graphics().p("Ax3F3IAArtMAjvAAAIAALtg");
	var mask_graphics_582 = new cjs.Graphics().p("AyAF3IAArtMAkBAAAIAALtg");
	var mask_graphics_583 = new cjs.Graphics().p("AyJF3IAArtMAkTAAAIAALtg");
	var mask_graphics_584 = new cjs.Graphics().p("AyRF3IAArtMAkjAAAIAALtg");
	var mask_graphics_585 = new cjs.Graphics().p("AyaF3IAArtMAk1AAAIAALtg");
	var mask_graphics_586 = new cjs.Graphics().p("AyjF3IAArtMAlHAAAIAALtg");
	var mask_graphics_587 = new cjs.Graphics().p("AAVQzIAAruMAlYAAAIAALug");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(452).to({graphics:mask_graphics_452,x:144.2,y:93.1}).wait(1).to({graphics:mask_graphics_453,x:257.1,y:155.5}).wait(1).to({graphics:mask_graphics_454,x:257.7,y:156.2}).wait(1).to({graphics:mask_graphics_455,x:258.2,y:156.9}).wait(1).to({graphics:mask_graphics_456,x:258.8,y:157.6}).wait(1).to({graphics:mask_graphics_457,x:259.4,y:158.3}).wait(1).to({graphics:mask_graphics_458,x:260,y:159}).wait(1).to({graphics:mask_graphics_459,x:260.5,y:159.7}).wait(1).to({graphics:mask_graphics_460,x:261.1,y:160.3}).wait(1).to({graphics:mask_graphics_461,x:261.7,y:161.1}).wait(1).to({graphics:mask_graphics_462,x:262.2,y:161.8}).wait(1).to({graphics:mask_graphics_463,x:262.8,y:162.5}).wait(1).to({graphics:mask_graphics_464,x:263.4,y:163.1}).wait(1).to({graphics:mask_graphics_465,x:264,y:163.8}).wait(1).to({graphics:mask_graphics_466,x:264.5,y:164.5}).wait(1).to({graphics:mask_graphics_467,x:265.1,y:165.2}).wait(1).to({graphics:mask_graphics_468,x:265.7,y:165.9}).wait(1).to({graphics:mask_graphics_469,x:266.2,y:166.6}).wait(1).to({graphics:mask_graphics_470,x:266.8,y:167.3}).wait(1).to({graphics:mask_graphics_471,x:267.4,y:168}).wait(1).to({graphics:mask_graphics_472,x:268,y:168.7}).wait(1).to({graphics:mask_graphics_473,x:268.5,y:169.4}).wait(1).to({graphics:mask_graphics_474,x:269.1,y:170.1}).wait(1).to({graphics:mask_graphics_475,x:269.7,y:170.8}).wait(1).to({graphics:mask_graphics_476,x:270.3,y:171.4}).wait(1).to({graphics:mask_graphics_477,x:270.8,y:172.1}).wait(1).to({graphics:mask_graphics_478,x:271.4,y:172.8}).wait(1).to({graphics:mask_graphics_479,x:272,y:173.6}).wait(1).to({graphics:mask_graphics_480,x:272.5,y:174.2}).wait(1).to({graphics:mask_graphics_481,x:273.1,y:174.9}).wait(1).to({graphics:mask_graphics_482,x:273.7,y:175.6}).wait(1).to({graphics:mask_graphics_483,x:274.3,y:176.3}).wait(1).to({graphics:mask_graphics_484,x:274.9,y:177}).wait(1).to({graphics:mask_graphics_485,x:275.4,y:177.7}).wait(1).to({graphics:mask_graphics_486,x:276,y:178.4}).wait(1).to({graphics:mask_graphics_487,x:162.4,y:113.9}).wait(1).to({graphics:mask_graphics_488,x:276.6,y:177.5}).wait(1).to({graphics:mask_graphics_489,x:277.4,y:177.5}).wait(1).to({graphics:mask_graphics_490,x:278.3,y:177.5}).wait(1).to({graphics:mask_graphics_491,x:279.2,y:177.5}).wait(1).to({graphics:mask_graphics_492,x:280.1,y:177.5}).wait(1).to({graphics:mask_graphics_493,x:280.9,y:177.5}).wait(1).to({graphics:mask_graphics_494,x:281.8,y:177.5}).wait(1).to({graphics:mask_graphics_495,x:282.7,y:177.5}).wait(1).to({graphics:mask_graphics_496,x:283.6,y:177.5}).wait(1).to({graphics:mask_graphics_497,x:284.4,y:177.5}).wait(1).to({graphics:mask_graphics_498,x:285.3,y:177.5}).wait(1).to({graphics:mask_graphics_499,x:286.2,y:177.5}).wait(1).to({graphics:mask_graphics_500,x:287,y:177.5}).wait(1).to({graphics:mask_graphics_501,x:287.9,y:177.5}).wait(1).to({graphics:mask_graphics_502,x:288.8,y:177.5}).wait(1).to({graphics:mask_graphics_503,x:289.7,y:177.5}).wait(1).to({graphics:mask_graphics_504,x:290.5,y:177.5}).wait(1).to({graphics:mask_graphics_505,x:291.4,y:177.5}).wait(1).to({graphics:mask_graphics_506,x:292.3,y:177.5}).wait(1).to({graphics:mask_graphics_507,x:293.2,y:177.5}).wait(1).to({graphics:mask_graphics_508,x:294,y:177.5}).wait(1).to({graphics:mask_graphics_509,x:294.9,y:177.5}).wait(1).to({graphics:mask_graphics_510,x:295.8,y:177.5}).wait(1).to({graphics:mask_graphics_511,x:296.7,y:177.5}).wait(1).to({graphics:mask_graphics_512,x:297.5,y:177.5}).wait(1).to({graphics:mask_graphics_513,x:298.4,y:177.5}).wait(1).to({graphics:mask_graphics_514,x:299.3,y:177.5}).wait(1).to({graphics:mask_graphics_515,x:300.2,y:177.5}).wait(1).to({graphics:mask_graphics_516,x:301,y:177.5}).wait(1).to({graphics:mask_graphics_517,x:301.9,y:177.5}).wait(1).to({graphics:mask_graphics_518,x:302.8,y:177.5}).wait(1).to({graphics:mask_graphics_519,x:303.6,y:177.5}).wait(1).to({graphics:mask_graphics_520,x:304.5,y:177.5}).wait(1).to({graphics:mask_graphics_521,x:305.4,y:177.5}).wait(1).to({graphics:mask_graphics_522,x:306.3,y:177.5}).wait(1).to({graphics:mask_graphics_523,x:307.1,y:177.5}).wait(1).to({graphics:mask_graphics_524,x:308,y:177.5}).wait(1).to({graphics:mask_graphics_525,x:308.9,y:177.5}).wait(1).to({graphics:mask_graphics_526,x:309.8,y:177.5}).wait(1).to({graphics:mask_graphics_527,x:310.6,y:177.5}).wait(1).to({graphics:mask_graphics_528,x:311.5,y:177.5}).wait(1).to({graphics:mask_graphics_529,x:312.4,y:177.5}).wait(1).to({graphics:mask_graphics_530,x:313.3,y:177.5}).wait(1).to({graphics:mask_graphics_531,x:314.1,y:177.5}).wait(1).to({graphics:mask_graphics_532,x:315,y:177.5}).wait(1).to({graphics:mask_graphics_533,x:315.9,y:177.5}).wait(1).to({graphics:mask_graphics_534,x:316.8,y:177.5}).wait(1).to({graphics:mask_graphics_535,x:317.6,y:177.5}).wait(1).to({graphics:mask_graphics_536,x:318.5,y:177.5}).wait(1).to({graphics:mask_graphics_537,x:319.4,y:177.5}).wait(1).to({graphics:mask_graphics_538,x:320.2,y:177.5}).wait(1).to({graphics:mask_graphics_539,x:321.1,y:177.5}).wait(1).to({graphics:mask_graphics_540,x:322,y:177.5}).wait(1).to({graphics:mask_graphics_541,x:322.9,y:177.5}).wait(1).to({graphics:mask_graphics_542,x:323.7,y:177.5}).wait(1).to({graphics:mask_graphics_543,x:324.6,y:177.5}).wait(1).to({graphics:mask_graphics_544,x:325.5,y:177.5}).wait(1).to({graphics:mask_graphics_545,x:326.4,y:177.5}).wait(1).to({graphics:mask_graphics_546,x:327.2,y:177.5}).wait(1).to({graphics:mask_graphics_547,x:328.1,y:177.5}).wait(1).to({graphics:mask_graphics_548,x:329,y:177.5}).wait(1).to({graphics:mask_graphics_549,x:329.9,y:177.5}).wait(1).to({graphics:mask_graphics_550,x:330.7,y:177.5}).wait(1).to({graphics:mask_graphics_551,x:331.6,y:177.5}).wait(1).to({graphics:mask_graphics_552,x:332.5,y:177.5}).wait(1).to({graphics:mask_graphics_553,x:333.4,y:177.5}).wait(1).to({graphics:mask_graphics_554,x:334.2,y:177.5}).wait(1).to({graphics:mask_graphics_555,x:335.1,y:177.5}).wait(1).to({graphics:mask_graphics_556,x:336,y:177.5}).wait(1).to({graphics:mask_graphics_557,x:336.9,y:177.5}).wait(1).to({graphics:mask_graphics_558,x:337.7,y:177.5}).wait(1).to({graphics:mask_graphics_559,x:338.6,y:177.5}).wait(1).to({graphics:mask_graphics_560,x:339.5,y:177.5}).wait(1).to({graphics:mask_graphics_561,x:340.3,y:177.5}).wait(1).to({graphics:mask_graphics_562,x:341.2,y:177.5}).wait(1).to({graphics:mask_graphics_563,x:342.1,y:177.5}).wait(1).to({graphics:mask_graphics_564,x:343,y:177.5}).wait(1).to({graphics:mask_graphics_565,x:343.8,y:177.5}).wait(1).to({graphics:mask_graphics_566,x:344.7,y:177.5}).wait(1).to({graphics:mask_graphics_567,x:345.6,y:177.5}).wait(1).to({graphics:mask_graphics_568,x:346.5,y:177.5}).wait(1).to({graphics:mask_graphics_569,x:347.3,y:177.5}).wait(1).to({graphics:mask_graphics_570,x:348.2,y:177.5}).wait(1).to({graphics:mask_graphics_571,x:349.1,y:177.5}).wait(1).to({graphics:mask_graphics_572,x:350,y:177.5}).wait(1).to({graphics:mask_graphics_573,x:350.8,y:177.5}).wait(1).to({graphics:mask_graphics_574,x:351.7,y:177.5}).wait(1).to({graphics:mask_graphics_575,x:352.6,y:177.5}).wait(1).to({graphics:mask_graphics_576,x:353.5,y:177.5}).wait(1).to({graphics:mask_graphics_577,x:354.3,y:177.5}).wait(1).to({graphics:mask_graphics_578,x:355.2,y:177.5}).wait(1).to({graphics:mask_graphics_579,x:356.1,y:177.5}).wait(1).to({graphics:mask_graphics_580,x:356.9,y:177.5}).wait(1).to({graphics:mask_graphics_581,x:357.8,y:177.5}).wait(1).to({graphics:mask_graphics_582,x:358.7,y:177.5}).wait(1).to({graphics:mask_graphics_583,x:359.6,y:177.5}).wait(1).to({graphics:mask_graphics_584,x:360.4,y:177.5}).wait(1).to({graphics:mask_graphics_585,x:361.3,y:177.5}).wait(1).to({graphics:mask_graphics_586,x:362.2,y:177.5}).wait(1).to({graphics:mask_graphics_587,x:241.3,y:107.5}).wait(118));

	// Layer 11
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(20,1,1).p("Av6jBQAQCjBLBcQBKBbCTApQCEAlCmgBQCQAACZgdQEug4EIhaQCPgxBwgzQBogwBAgrQB6hTATgK");
	this.shape_1.setTransform(370.3,176.1);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(452).to({_off:false},0).to({_off:true},216).wait(37));

	// Layer 14
	this.instance_2 = new lib.ar4("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(258.4,297.4,1,1,-26.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(258).to({_off:false},0).to({_off:true},410).wait(37));

	// Layer 18 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_408 = new cjs.Graphics().p("EgC4AhDQrjjrlkqyMA0AgazQFkKxjsLiQjtLjqxFkQmeDVmvAAQkgAAkmhfg");
	var mask_1_graphics_409 = new cjs.Graphics().p("EgCRAhPQrojalyqqMAzZgb8QFzKpjcLmQjcLpqqFzQmrDonDAAQkNAAkVhTg");
	var mask_1_graphics_410 = new cjs.Graphics().p("EgBpAhbQrtjLmBqhMAyxgdEQGCKhjMLrQjLLtqiGCQm4D8nYAAQj6AAkChHg");
	var mask_1_graphics_411 = new cjs.Graphics().p("EgBBAhlQrxi6mQqYMAyHgeLQGRKYi7LvQi7LyqZGQQnEEQntAAQjoAAjvg8g");
	var mask_1_graphics_412 = new cjs.Graphics().p("EgAZAhvQr1ipmeqQMAxcgfRQGfKQiqLzQirL1qQGfQnQEloCAAQjVAAjcgyg");
	var mask_1_graphics_413 = new cjs.Graphics().p("EAAPAh4Qr4iZmtqGMAwwggWQGtKHiZL2QiaL5qHGtQnbE7oZAAQjBAAjJgpg");
	var mask_1_graphics_414 = new cjs.Graphics().p("EAA3AiAQr6iIm7p9MAwBghaQG7J9iJL6QiJL8p9G7QnlFSovAAQivAAi1ghg");
	var mask_1_graphics_415 = new cjs.Graphics().p("EABgAiHQr9h3nJpzMAvSgidQHJJzh4L8Qh5L/pzHJQnwFppGAAQiaAAihgZg");
	var mask_1_graphics_416 = new cjs.Graphics().p("EACJAiNQsAhmnWppMAuggjfQHXJphnL/QhoMBppHXQn5GBpeAAQiHAAiLgTg");
	var mask_1_graphics_417 = new cjs.Graphics().p("EACyAiSQsChVnkpfMAtugkfQHkJfhWMAQhXMEpeHkQoCGap3AAQhyAAh2gOg");
	var mask_1_graphics_418 = new cjs.Graphics().p("EADbAiXQsDhFnxpUMAs6gleQHxJThGMDQhFMFpUHxQoKG0qRAAQhdAAhggJg");
	var mask_1_graphics_419 = new cjs.Graphics().p("EAEEAiaQsEgzn/pJMAsFgmdQH+JIg0MEQg1MGpIH/QoSHNqrAAQhIAAhKgFg");
	var mask_1_graphics_420 = new cjs.Graphics().p("EAEuAidQsGgjoLo9MArOgnbQILI9gkMFQgjMHo+ILQoXHprIAAQgyAAgygCg");
	var mask_1_graphics_421 = new cjs.Graphics().p("EAFXAieQsGgRoYoyMAqWgoXQIYIygTMFQgTMIoxIXQoeIFrlAAIg2gBg");
	var mask_1_graphics_422 = new cjs.Graphics().p("EAGAAifQsGgBokomMApdgpRQIjIlgBMGQgCMIomIkQojIhsDAAIgHAAg");
	var mask_1_graphics_423 = new cjs.Graphics().p("AuNaVMAoigqLQIwIZAPMGQAQMIoaIvQoaIwsHAOIguABQrpAAofoKg");
	var mask_1_graphics_424 = new cjs.Graphics().p("AtvaxMAnmgrEQI7IOAhMEQAgMIoNI7QoNI8sHAfQguACguAAQrMAAoZnug");
	var mask_1_graphics_425 = new cjs.Graphics().p("AtQbMMAmpgr6QJGIAAxMEQAyMHoBJHQoAJGsGAxQhFAEhEAAQqwAAoSnTg");
	var mask_1_graphics_426 = new cjs.Graphics().p("AsxbnMAlqgswQJSHzBCMDQBDMFn0JSQn0JSsEBBQhcAIhaAAQqUAAoLm4g");
	var mask_1_graphics_427 = new cjs.Graphics().p("AsScBMAkrgtlQJdHnBTMBQBUMEnnJcQnmJdsDBSQhyAMhvAAQp7AAoDmeg");
	var mask_1_graphics_428 = new cjs.Graphics().p("ArycaMAjrguXQJnHZBkL/QBkMBnZJoQnZJnsBBjQiIASiCAAQpiAAn7mGg");
	var mask_1_graphics_429 = new cjs.Graphics().p("ArRcyMAipgvIQJxHLB1L9QB1L/nLJxQnMJyr+B0QidAYiXAAQpKAAnxlug");
	var mask_1_graphics_430 = new cjs.Graphics().p("AqwdKMAhmgv5QJ7G+CGL6QCGL8m9J8Qm+J7r8CFQiyAfiqAAQoyAAnolWg");
	var mask_1_graphics_431 = new cjs.Graphics().p("AqOdhMAgigwnQKFGvCWL4QCXL5mvKEQmwKFr5CWQjGAni+AAQobAAndk/g");
	var mask_1_graphics_432 = new cjs.Graphics().p("Apsd3MAfdgxUQKOGhCoL0QCnL2mhKOQmiKOr1CmQjZAxjSAAQoFAAnSkqg");
	var mask_1_graphics_433 = new cjs.Graphics().p("ApJeNMAeXgyAQKXGTC4LwQC4LxmTKYQmTKXrxC3QjtA6jkAAQnwAAnGkUg");
	var mask_1_graphics_434 = new cjs.Graphics().p("AomehMAdRgypQKgGEDILsQDILtmEKgQmEKgrtDHQkABFj3AAQnbAAm6kAg");
	var mask_1_graphics_435 = new cjs.Graphics().p("AoCe1MAcJgzSQKoF2DYLnQDaLpl2KoQl1KorpDYQkSBQkKAAQnGAAmtjsg");
	var mask_1_graphics_436 = new cjs.Graphics().p("AnefJMAbAgz5QKxFmDoLjQDqLjlnKwQlmKxrkDoQkkBckcAAQmyAAmgjYg");
	var mask_1_graphics_437 = new cjs.Graphics().p("Am6fbMAZ4g0eQK4FXD5LdQD5LelXK4QlXK4rfD5Qk1BpkvAAQmeAAmTjGg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(408).to({graphics:mask_1_graphics_408,x:226.3,y:221}).wait(1).to({graphics:mask_1_graphics_409,x:226.3,y:221}).wait(1).to({graphics:mask_1_graphics_410,x:226.3,y:221}).wait(1).to({graphics:mask_1_graphics_411,x:226.2,y:220.9}).wait(1).to({graphics:mask_1_graphics_412,x:226.2,y:220.9}).wait(1).to({graphics:mask_1_graphics_413,x:226.2,y:220.9}).wait(1).to({graphics:mask_1_graphics_414,x:226.2,y:220.9}).wait(1).to({graphics:mask_1_graphics_415,x:226.2,y:220.8}).wait(1).to({graphics:mask_1_graphics_416,x:226.1,y:220.8}).wait(1).to({graphics:mask_1_graphics_417,x:226.1,y:220.8}).wait(1).to({graphics:mask_1_graphics_418,x:226.1,y:220.8}).wait(1).to({graphics:mask_1_graphics_419,x:226.1,y:220.7}).wait(1).to({graphics:mask_1_graphics_420,x:226.1,y:220.7}).wait(1).to({graphics:mask_1_graphics_421,x:226.1,y:220.7}).wait(1).to({graphics:mask_1_graphics_422,x:226.1,y:220.7}).wait(1).to({graphics:mask_1_graphics_423,x:226.1,y:220.7}).wait(1).to({graphics:mask_1_graphics_424,x:226.1,y:220.7}).wait(1).to({graphics:mask_1_graphics_425,x:226.1,y:220.7}).wait(1).to({graphics:mask_1_graphics_426,x:226.1,y:220.7}).wait(1).to({graphics:mask_1_graphics_427,x:226.1,y:220.7}).wait(1).to({graphics:mask_1_graphics_428,x:226.2,y:220.8}).wait(1).to({graphics:mask_1_graphics_429,x:226.2,y:220.8}).wait(1).to({graphics:mask_1_graphics_430,x:226.2,y:220.8}).wait(1).to({graphics:mask_1_graphics_431,x:226.2,y:220.8}).wait(1).to({graphics:mask_1_graphics_432,x:226.3,y:220.9}).wait(1).to({graphics:mask_1_graphics_433,x:226.3,y:220.9}).wait(1).to({graphics:mask_1_graphics_434,x:226.3,y:220.9}).wait(1).to({graphics:mask_1_graphics_435,x:226.3,y:220.9}).wait(1).to({graphics:mask_1_graphics_436,x:226.3,y:220.9}).wait(1).to({graphics:mask_1_graphics_437,x:226.4,y:220.9}).wait(268));

	// Layer 17
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(20,1,1).p("AXutBQiamvlUgrQmfg2j8DEQgRAOgDADQh1BhhaB1QhKBghBBkQhSB8hJB+QhFB3hCB4Qg6Bpg6BqQg7Bsg4BuQhECFhACFQg1Bvg0BsQg1Btg1BuQg8B8hPBxQhVB8itA2QitA3gvhaQguhbAfhdQAgheBRhmQBgh5CXglQCNgiCRATQAVACAdAG");
	this.shape_2.setTransform(227.4,275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(20,1,1).p("Ag6xtQAEgEARgNQD7jEGeA1QFVAsCaGuQAiBeAYBxQCLJynoJuQnnJvnXApQnXApi8kbQi7kcjvgp");
	this.shape_3.setTransform(266.9,273.5);

	var maskedShapeInstanceList = [this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},408).to({state:[]},260).wait(37));

	// Layer 10 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_223 = new cjs.Graphics().p("A0MF/QCZr3KFmuQKFmuL3CaQL4CXGtKGMgwpAgYQmuqFCYr3g");
	var mask_2_graphics_224 = new cjs.Graphics().p("A0KGKQCRr5KAm0QKAm1L5CSQL6CQG0KBMgwUAg4Qm1qBCRr4g");
	var mask_2_graphics_225 = new cjs.Graphics().p("A0IGVQCJr6J8m7QJ7m7L7CKQL7CHG6J9Mgv+AhYQm7p8CJr6g");
	var mask_2_graphics_226 = new cjs.Graphics().p("A0GGhQCBr8J4nCQJ3nBL7CBQL8CAHCJ4MgvoAh4QnCp4CBr6g");
	var mask_2_graphics_227 = new cjs.Graphics().p("A0DGsQB5r9JznIQJynIL9B5QL9B4HIJzMgvRAiYQnIpzB5r8g");
	var mask_2_graphics_228 = new cjs.Graphics().p("A0BG3QByr+JunPQJtnOL+ByQL/BwHPJuMgu7Ai3QnOpuBwr+g");
	var mask_2_graphics_229 = new cjs.Graphics().p("Az9HDQBpsAJpnVQJpnVL/BqQMABoHVJqMgujAjWQnVpqBpr+g");
	var mask_2_graphics_230 = new cjs.Graphics().p("Az6HOQBhsAJlncQJjnbMBBiQMBBgHbJlMguMAj0QnbpkBhsAg");
	var mask_2_graphics_231 = new cjs.Graphics().p("Az2HaQBZsCJgnhQJeniMCBaQMBBYHiJgMgt0AkTQnhpgBZsAg");
	var mask_2_graphics_232 = new cjs.Graphics().p("AzyHmQBRsDJanoQJannMCBSQMDBQHoJaMgtcAkyQnnpbBRsBg");
	var mask_2_graphics_233 = new cjs.Graphics().p("AzuHxQBJsDJWnuQJUnuMDBKQMEBIHuJWMgtDAlPQnupVBJsDg");
	var mask_2_graphics_234 = new cjs.Graphics().p("AzqH9QBCsEJQn0QJQn0MDBCQMEBAH1JRMgsrAltQn0pRBBsDg");
	var mask_2_graphics_235 = new cjs.Graphics().p("AzlIJQA5sEJMn7QJLn6MDA6QMFA4H6JMMgsRAmKQn6pLA5sEg");
	var mask_2_graphics_236 = new cjs.Graphics().p("AzgIVQAxsFJGoAQJGoAMEAyQMGAwIAJGMgr4AmnQoApFAxsFg");
	var mask_2_graphics_237 = new cjs.Graphics().p("AzbIiQAqsGJAoGQJBoHMEAqQMGApIGJAMgrdAnFQoHpBApsEg");
	var mask_2_graphics_238 = new cjs.Graphics().p("AzVIuQAhsGI7oNQI8oMMFAiQMGAgIMI8MgrEAnhQoMo7AhsFg");
	var mask_2_graphics_239 = new cjs.Graphics().p("AzPI6QAZsGI2oSQI2oTMFAbQMGAYISI1MgqpAn+QoSo2AZsFg");
	var mask_2_graphics_240 = new cjs.Graphics().p("AzJJGQARsGIxoYQIwoYMFASQMHAQIYIwMgqPAoaQoYowARsGg");
	var mask_2_graphics_241 = new cjs.Graphics().p("AzCJTQAJsHIqoeQIrodMGAKQMGAIIeIrMgp0Ao1QoeoqAKsGg");
	var mask_2_graphics_242 = new cjs.Graphics().p("Ay8JfQABsGIlokQIlojMGACQMHAAIjIlMgpYApRQokolABsGg");
	var mask_2_graphics_243 = new cjs.Graphics().p("Ay1JsQgHsHIgopQIfopMGgGQMGgIIpIfMgo9AptQopofgHsGg");
	var mask_2_graphics_244 = new cjs.Graphics().p("AyuJ4QgPsGIaovQIZovMGgOQMGgQIvIaMgohAqHQovoZgPsGg");
	var mask_2_graphics_258 = new cjs.Graphics().p("AzIJJQAQsHIvoZQIvoZMFAQQMHAOIZIvMgqJAogQoZovAPsFg");
	var mask_2_graphics_259 = new cjs.Graphics().p("AzIJJQAQsHIvoZQIvoZMFAQQMHAOIZIvMgqJAogQoZovAPsFg");
	var mask_2_graphics_260 = new cjs.Graphics().p("AzIJJQAQsHIvoZQIvoZMFAQQMHAOIZIvMgqJAogQoZovAPsFg");
	var mask_2_graphics_261 = new cjs.Graphics().p("AzIJJQAQsHIvoZQIvoZMFAQQMHAOIZIvMgqJAogQoZovAPsFg");
	var mask_2_graphics_262 = new cjs.Graphics().p("AzIJJQAQsHIvoZQIvoZMFAQQMHAOIZIvMgqJAogQoZovAPsFg");
	var mask_2_graphics_263 = new cjs.Graphics().p("AzIJJQAQsHIvoZQIvoZMFAQQMHAOIZIvMgqJAogQoZovAPsFg");
	var mask_2_graphics_264 = new cjs.Graphics().p("AzIJJQAQsHIvoZQIvoZMFAQQMHAOIZIvMgqJAogQoZovAPsFg");
	var mask_2_graphics_265 = new cjs.Graphics().p("AzIJJQAQsHIvoZQIvoZMFAQQMHAOIZIvMgqJAogQoZovAPsFg");
	var mask_2_graphics_266 = new cjs.Graphics().p("Ay9JeQACsGIlokQIlojMGACQMHABIjIlMgpaApQQojolABsGg");
	var mask_2_graphics_267 = new cjs.Graphics().p("AywJ0QgNsGIbouQIcotMFgLQMHgOItIbMgoqAqAQotobgMsGg");
	var mask_2_graphics_268 = new cjs.Graphics().p("AyjKLQgbsHIRo3QIRo3MGgZQMGgcI3IRMgn5AqvQo3oRgasFg");
	var mask_2_graphics_269 = new cjs.Graphics().p("AyVKhQgpsGIHpAQIHpBMEgnQMGgqJBIHMgnHArcQpBoGgosFg");
	var mask_2_graphics_270 = new cjs.Graphics().p("AyHK3Qg2sFH8pJQH8pKMEg2QMFg3JKH8MgmUAsKQpKn9g3sEg");
	var mask_2_graphics_271 = new cjs.Graphics().p("Ax3LOQhFsEHypTQHxpSMDhEQMEhGJTHyMglhAs2QpTnyhEsDg");
	var mask_2_graphics_272 = new cjs.Graphics().p("AxnLlQhTsCHnpcQHnpcMChRQMChUJcHnMgktAthQpbnnhTsCg");
	var mask_2_graphics_273 = new cjs.Graphics().p("AxWL8QhgsBHbpkQHcplMAhfQMBhiJlHcMgj4AuLQpknchhsAg");
	var mask_2_graphics_274 = new cjs.Graphics().p("AxEMUQhusBHQpsQHRptL+htQL/hwJtHRMgjBAu0QpunQhur+g");
	var mask_2_graphics_275 = new cjs.Graphics().p("AwxMrQh9r+HGp0QHFp2L9h7QL8h9J2HFMgiMAvdQp1nGh8r8g");
	var mask_2_graphics_276 = new cjs.Graphics().p("AweNDQiKr8G6p9QG6p9L6iJQL6iLJ+G6MghUAwDQp+m6iKr5g");
	var mask_2_graphics_277 = new cjs.Graphics().p("AwJNaQiYr5GuqEQGuqGL4iWQL4iZKFGuMggcAwqQqGmuiXr4g");
	var mask_2_graphics_278 = new cjs.Graphics().p("Av0NyQimr2GiqMQGjqNL1ilQL1inKNGjMgfkAxPQqNmiilr1g");
	var mask_2_graphics_279 = new cjs.Graphics().p("AveOKQi0rzGXqTQGXqVLxiyQLyi1KVGXMgerAxzQqUmWizryg");
	var mask_2_graphics_280 = new cjs.Graphics().p("AvIOjQjBrwGLqbQGKqcLvjAQLujCKcGLMgdwAyWQqcmLjBrtg");
	var mask_2_graphics_281 = new cjs.Graphics().p("AuxO7QjPrtF/qiQF+qjLrjNQLrjQKjF/Mgc2Ay4Qqjl+jOrqg");
	var mask_2_graphics_282 = new cjs.Graphics().p("AuXPVQjdroFxqqQFyqqLmjcQLnjeKqFxMgb2AzcQqqlxjdrmg");
	var mask_2_graphics_283 = new cjs.Graphics().p("At8PvQjsrkFkqwQFkqxLijrQLjjsKxFkMga3Az+Qqwlkjrrig");
	var mask_2_graphics_284 = new cjs.Graphics().p("AtgQKQj7rfFXq4QFXq4Ldj5QLej6K4FWMgZ2A0fQq3lWj5rdg");
	var mask_2_graphics_285 = new cjs.Graphics().p("AtEQkQkIraFJq+QFJq+LYkHQLZkJK+FJMgY0A0+Qq9lJkIrYg");
	var mask_2_graphics_286 = new cjs.Graphics().p("AsnQ/QkWrVE7rEQE7rFLUkVQLTkXLFE7MgXyA1dQrEk8kWrSg");
	var mask_2_graphics_287 = new cjs.Graphics().p("AsIRZQklrPEtrKQEurLLNkjQLOklLLEtMgWvA16QrKktkjrOg");
	var mask_2_graphics_288 = new cjs.Graphics().p("ArqR0QkyrJEfrQQEgrRLIkxQLIkzLQEgMgVrA2VQrQkgkyrHg");
	var mask_2_graphics_289 = new cjs.Graphics().p("ArKSPQlArDERrWQESrWLBk/QLClBLXESMgUoA2wQrVkSlArBg");
	var mask_2_graphics_290 = new cjs.Graphics().p("AqpSqQlOq9EDrbQEDrbK8lNQK7lOLbEDMgTjA3JQrakDlNq7g");
	var mask_2_graphics_291 = new cjs.Graphics().p("AqITEQlcq2D1rfQD1rgK1lbQK1lcLgD1MgSeA3hQrgj1laq1g");
	var mask_2_graphics_292 = new cjs.Graphics().p("ApmTfQlpqvDmrkQDnrlKuloQKulpLlDnMgRZA33Qrkjnloqug");
	var mask_2_graphics_293 = new cjs.Graphics().p("ApDT6Ql3qoDYroQDZrqKml1QKnl2LqDYMgQUA4MQrojYl1qng");
	var mask_2_graphics_294 = new cjs.Graphics().p("AogUVQmEqhDKrsQDKrtKfmDQKgmDLtDJMgPNA4gQrtjKmCqfg");
	var mask_2_graphics_295 = new cjs.Graphics().p("An8UwQmQqZC7rwQC7ryKYmPQKXmQLxC7MgOGA4xQrxi7mPqXg");
	var mask_2_graphics_296 = new cjs.Graphics().p("AnXVLQmdqSCsrzQCsr1KQmcQKQmdL1CsMgNAA5DQr0itmcqPg");
	var mask_2_graphics_297 = new cjs.Graphics().p("AmyVmQmqqKCer2QCer4KImpQKHmqL4CdMgL5A5TQr3iempqHg");
	var mask_2_graphics_298 = new cjs.Graphics().p("AmLWAQm3qACPr7QCPr6J/m1QJ/m3L7CPMgKxA5gQr7iPm0p/g");
	var mask_2_graphics_299 = new cjs.Graphics().p("AllWbQnDp4CAr9QCAr9J3nBQJ3nEL9CAMgJpA5tQr+iAnBp2g");
	var mask_2_graphics_300 = new cjs.Graphics().p("Ak9W2QnPpwBxr/QBxr/JunOQJunPL/BxMgIhA54QsAhxnNptg");
	var mask_2_graphics_301 = new cjs.Graphics().p("AkVXQQnbpmBisCQBisBJlnZQJlncMBBiMgHZA6DQsChinZplg");
	var mask_2_graphics_302 = new cjs.Graphics().p("AjsXrQnnpdBTsEQBTsCJbnmQJcnnMDBTMgGRA6LQsEhTnkpbg");
	var mask_2_graphics_303 = new cjs.Graphics().p("AjDYFQnzpTBEsFQBEsEJSnxQJSnzMFBEMgFJA6SQsFhEnwpSg");
	var mask_2_graphics_304 = new cjs.Graphics().p("AiaYfQn+pJA1sGQA1sFJJn9QJHn/MHA2MgEBA6XQsGg1n8pIg");
	var mask_2_graphics_305 = new cjs.Graphics().p("AhwY5QoJo/AmsHQAmsGI/oIQI+oKMHAmMgC5A6cQsHgmoHo+g");
	var mask_2_graphics_306 = new cjs.Graphics().p("AhFZTQoVo1AYsIQAXsGI0oTQI0oVMIAXMgBwA6fQsIgXoSo0g");
	var mask_2_graphics_307 = new cjs.Graphics().p("AgaZtQoforAIsIQAIsHIqoeQIqofMIAIMgAoA6hQsIgJodopg");
	var mask_2_graphics_308 = new cjs.Graphics().p("AAAaGQoooggHsIQgHsHIhooQIeoqMIgHMAAgA6hIgTAAQr8AAoioZg");
	var mask_2_graphics_309 = new cjs.Graphics().p("AAIafQozoVgVsIQgWsHIWoyQITo0MHgWMABpA6fIg8ABQriAAodoAg");
	var mask_2_graphics_310 = new cjs.Graphics().p("AARa4Qo9oLglsHQgksGIKo9QIIo+MHgkMACxA6bQgzADgyAAQrIAAoXnng");
	var mask_2_graphics_311 = new cjs.Graphics().p("AAabQQpHoAg0sGQgzsFH/pHQH9pIMGgzMAD5A6XQhHAFhGAAQqvAAoRnPg");
	var mask_2_graphics_312 = new cjs.Graphics().p("AAjbnQpRn0hCsFQhCsEH0pRQHxpRMFhDMAFBA6SQhbAIhYAAQqYAAoLm4g");
	var mask_2_graphics_313 = new cjs.Graphics().p("AAtb+QpanphRsDQhSsDHppaQHmpbMEhRMAGIA6LQhvALhqAAQqBAAoEmhg");
	var mask_2_graphics_314 = new cjs.Graphics().p("AA4cUQpkndhgsCQhgsBHdpjQHapkMChgMAHQA6CQiCARh9AAQpqAAn8mMg");
	var mask_2_graphics_315 = new cjs.Graphics().p("ABDcqQptnRhvsAQhvr/HRpsQHOpuMAhvMAIYA55QiVAWiOAAQpVAAn0l2g");
	var mask_2_graphics_316 = new cjs.Graphics().p("ABOc/Qp2nFh9r+Qh+r8HFp1QHCp3L+h9MAJeA5uQimAbihAAQo/AAnslhg");
	var mask_2_graphics_317 = new cjs.Graphics().p("ABadTQp/m4iMr7QiMr6G4p+QG2p/L8iMMAKlA5hQi5AiixAAQorAAnjlNg");
	var mask_2_graphics_318 = new cjs.Graphics().p("ABmdnQqHmsibr4Qibr3GtqGQGqqHL3icMALtA5UQjLAqjCAAQoXAAnak6g");
	var mask_2_graphics_319 = new cjs.Graphics().p("ABzd7QqPmgiqr1Qipr0GfqOQGfqPL0iqMAMzA5EQjcAyjUAAQoDAAnQkmg");
	var mask_2_graphics_320 = new cjs.Graphics().p("ACAeOQqXmTi4ryQi4rxGTqWQGRqXLxi4MAN5A40QjtA6jkAAQnxAAnFkTg");
	var mask_2_graphics_321 = new cjs.Graphics().p("ACNegQqemGjHruQjGruGGqdQGFqeLtjHMAO/A4iQj+BDj0AAQnfAAm7kBg");
	var mask_2_graphics_322 = new cjs.Graphics().p("ACbexQqll5jVrpQjVrqF5qkQF4qnLojVMAQFA4PQkOBNkFAAQnMAAmwjwg");
	var mask_2_graphics_323 = new cjs.Graphics().p("ACqfDQqtlsjjrmQjkrmFtqrQFqqtLljjMARJA36QkdBYkWAAQm6AAmkjfg");
	var mask_2_graphics_324 = new cjs.Graphics().p("AC5fTQq0lfjxrhQjyrhFfqyQFdq0LgjyMASOA3lQktBjklAAQmpAAmYjPg");
	var mask_2_graphics_325 = new cjs.Graphics().p("ADIfjQq6lRkArdQkArcFSq5QFQq6LbkAMATTA3NQk9Bvk2AAQmXAAmMi/g");
	var mask_2_graphics_326 = new cjs.Graphics().p("ADYfyQrBlDkOrYQkNrXFEq/QFCrBLWkOMAUXA21QlMB7lGAAQmGAAl/iwg");
	var mask_2_graphics_327 = new cjs.Graphics().p("EADoAgBQrHk2kbrSQkcrSE2rFQE1rHLRkcMAVZA2bQlZCIlXAAQl1AAlyihg");
	var mask_2_graphics_328 = new cjs.Graphics().p("EAD4AgPQrMkokqrNQkprMEorLQEnrNLLkpMAWdA2AQlnCVloAAQlkAAlliTg");
	var mask_2_graphics_329 = new cjs.Graphics().p("EAEJAgcQrRkak4rGQk3rHEbrQQEYrTLGk3MAXfA1jQl1Ckl4AAQlUAAlXiGg");
	var mask_2_graphics_330 = new cjs.Graphics().p("EAEbAgpQrXkMlFrAQlGrBENrVQELrYLAlFMAYgA1GQmCCymJAAQlDAAlIh5g");
	var mask_2_graphics_331 = new cjs.Graphics().p("EAEsAg1Qrcj+lSq6QlTq5D/rbQD9rdK5lSMAZhA0mQmPDCmZAAQkzAAk6htg");
	var mask_2_graphics_332 = new cjs.Graphics().p("EAE/AhBQrhjwlgqzQlgqzDxrgQDurhKylgMAajA0GQmcDSmrAAQkiAAkqhhg");
	var mask_2_graphics_333 = new cjs.Graphics().p("EAFRAhMQrljiluqsQltqsDjrkQDgrmKsltMAbiAzlQmoDim8AAQkTAAkahWg");
	var mask_2_graphics_334 = new cjs.Graphics().p("EAFkAhWQrqjTl6qlQl6qlDUrpQDSrqKll6MAcgAzDQmyDznPAAQkCAAkKhMg");
	var mask_2_graphics_335 = new cjs.Graphics().p("EAF3AhgQrtjFmIqeQmHqdDGrtQDErtKdmIMAdfAyfQm+EEngAAQjyAAj6hBg");
	var mask_2_graphics_336 = new cjs.Graphics().p("EAGLAhpQryi3mUqWQmUqWC4rwQC1rxKWmUMAedAx6QnJEWnzAAQjhAAjpg4g");
	var mask_2_graphics_337 = new cjs.Graphics().p("EAGeAhxQr0iomhqOQmgqOCorzQCnr1KOmhMAfaAxUQnTEpoGAAQjQAAjZgwg");
	var mask_2_graphics_338 = new cjs.Graphics().p("EAGzAh5Qr4iamtqFQmtqGCar3QCYr3KGmuMAgWAwsQncE9oaAAQi/AAjHgog");
	var mask_2_graphics_339 = new cjs.Graphics().p("EAHHAiAQr6iLm6p9Qm5p+CLr6QCKr6J9m5MAhSAwDQnlFRouAAQiuAAi2ghg");
	var mask_2_graphics_340 = new cjs.Graphics().p("EAHcAiGQr9h8nGp1QnFp0B8r9QB7r8J1nGMAiNAvaQnuFkpCAAQidAAikgag");
	var mask_2_graphics_341 = new cjs.Graphics().p("EAHxAiMQr/hunSprQnRpsBur/QBsr/JrnRMAjHAuvQn2F5pXAAQiMAAiRgUg");
	var mask_2_graphics_342 = new cjs.Graphics().p("EAIHAiQQsBhenepjQndpiBfsBQBdsAJjneMAkAAuDQn/GPpsAAQh6AAh+gQg");
	var mask_2_graphics_343 = new cjs.Graphics().p("EAIdAiVQsDhQnppZQnqpaBRsCQBOsCJZnpMAk5AtWQoGGlqCAAQhoAAhrgLg");
	var mask_2_graphics_344 = new cjs.Graphics().p("EAIzAiYQsEhAn1pQQn1pQBCsEQA/sDJQn1MAlwAsoQoNG8qZAAQhWAAhXgIg");
	var mask_2_graphics_345 = new cjs.Graphics().p("EAJJAibQsFgyoApGQoApGAysFQAxsEJGoAMAmmAr4QoTHTqwAAQhDAAhEgEg");
	var mask_2_graphics_346 = new cjs.Graphics().p("EAJgAidQsGgjoLo8QoMo8AksGQAisFI8oLMAncArJQoZHqrJAAQgvAAgwgCg");
	var mask_2_graphics_347 = new cjs.Graphics().p("EAJ3AieQsHgToWoyQoWoyAVsHQASsFIyoWMAoRAqXQoeIDrjAAIg2gBg");
	var mask_2_graphics_348 = new cjs.Graphics().p("EAKOAifQsHgFohonQohooAGsHQAEsFIoohMApEAplQojIcr9AAIgNAAg");
	var mask_2_graphics_349 = new cjs.Graphics().p("AqNaMQorodgJsHQgLsFIdorMAp3AoxQodIssGAKIgcAAQr1AAohoTg");
	var mask_2_graphics_350 = new cjs.Graphics().p("Ap/alQo2oSgYsHQgasFISo1MAqpAn9QoSI2sFAZIhGABQraAAocn6g");
	var mask_2_graphics_351 = new cjs.Graphics().p("Apxa9Qo/oHgnsGQgpsEIHpAMArZAnJQoHI/sEAoQg4ADg2AAQrBAAoXnig");
	var mask_2_graphics_352 = new cjs.Graphics().p("ApibVQpJn8g2sFQg4sDH8pKMAsJAmTQn8JJsDA3QhMAFhKAAQqoAAoRnKg");
	var mask_2_graphics_353 = new cjs.Graphics().p("ApSbsQpTnxhFsDQhHsCHxpUMAs4AlcQnxJTsCBGQhfAIhdAAQqRAAoKmzg");
	var mask_2_graphics_354 = new cjs.Graphics().p("ApAcFQpdnkhVsCQhYsAHkpeMAtqAkeQnjJdsBBXQh1ANhxAAQp4AAoCmbg");
	var mask_2_graphics_355 = new cjs.Graphics().p("AotcdQpnnWhmsAQhnr/HWpoMAucAjfQnXJor/BmQiJATiFAAQpgAAn6mDg");
	var mask_2_graphics_356 = new cjs.Graphics().p("AoZc1QpxnKh2r9Qh4r8HKpyMAvLAifQnKJyr8B3QieAYiZAAQpIAAnxlrg");
	var mask_2_graphics_357 = new cjs.Graphics().p("AoEdMQp7m8iGr7QiIr6G8p7MAv5AhfQm8J7r6CHQiyAfirAAQoyAAnnlUg");
	var mask_2_graphics_358 = new cjs.Graphics().p("AnudiQqFmuiWr4QiYr3GuqEMAwnAgcQmvKFr3CXQjGAoi+AAQobAAndk/g");
	var mask_2_graphics_359 = new cjs.Graphics().p("AnYd4QqNmhinr0Qior0GhqNMAxSAfaQmhKOrzCnQjaAwjRAAQoFAAnTkpg");
	var mask_2_graphics_360 = new cjs.Graphics().p("AnAeNQqXmTi2rxQi5rwGTqWMAx8AeXQmTKWrvC4QjsA5jkAAQnxAAnGkUg");
	var mask_2_graphics_361 = new cjs.Graphics().p("AmoehQqfmFjHrtQjIrsGEqeMAylAdSQmEKfrsDIQj+BDj2AAQndAAm6kAg");
	var mask_2_graphics_362 = new cjs.Graphics().p("AmPe0Qqnl2jXroQjYroF2qmMAzMAcNQl2KnrnDXQkRBPkHAAQnKAAmtjug");
	var mask_2_graphics_363 = new cjs.Graphics().p("Al2fHQqulojnrjQjorjFoquMAzyAbGQloKvriDnQkiBbkaAAQm2AAmhjbg");
	var mask_2_graphics_364 = new cjs.Graphics().p("AlbfZQq2lZj2rfQj4reFZq1MA0WAaAQlZK2rdD3QkzBnksAAQmjAAmTjJg");
	var mask_2_graphics_365 = new cjs.Graphics().p("AlAfqQq9lKkGrZQkHrZFKq8MA05AY4QlKK9rYEHQlEB0k+AAQmPAAmGi4g");
	var mask_2_graphics_366 = new cjs.Graphics().p("Akkf7QrEk7kVrUQkXrTE7rDMA1aAXvQk7LFrSEWQlUCClQAAQl9AAl3ing");
	var mask_2_graphics_367 = new cjs.Graphics().p("EgEHAgLQrLksklrOQkmrMEsrKMA16AWmQksLLrMElQljCRljAAQlqAAloiXg");
	var mask_2_graphics_368 = new cjs.Graphics().p("EgDqAgaQrRkdk0rHQk1rGEdrRMA2XAVdQkcLRrGE0QlyChl1AAQlYAAlZiIg");
	var mask_2_graphics_369 = new cjs.Graphics().p("EgDMAgoQrXkNlCrBQlFq/ENrWMA21AUSQkOLXq/FDQmBCxmHAAQlGAAlJh6g");
	var mask_2_graphics_370 = new cjs.Graphics().p("EgCtAg2Qrdj+lRq5QlUq5D+rcMA3PATHQj9Ldq4FSQmPDCmbAAQkzAAk5hsg");
	var mask_2_graphics_371 = new cjs.Graphics().p("EgCNAhCQrijulhqyQliqxDurhMA3pAR8QjuLiqxFhQmdDTmtAAQkiAAknhgg");
	var mask_2_graphics_372 = new cjs.Graphics().p("EgBtAhOQrnjelvqqQlxqqDermMA4BAQwQjeLnqpFvQmqDmnCAAQkPAAkWhUg");
	var mask_2_graphics_373 = new cjs.Graphics().p("EgBMAhaQrsjPl9qiQmAqiDPrqMA4WAPjQjOLrqhF+Qm3D5nVAAQj9AAkEhIg");
	var mask_2_graphics_374 = new cjs.Graphics().p("EgArAhkQrwi+mLqbQmOqZC+rvMA4sAOWQi/LwqZGMQnCENnqAAQjqAAjzg+g");
	var mask_2_graphics_375 = new cjs.Graphics().p("EgAJAhuQr0ivmZqRQmcqRCurzMA4+ANJQiuLzqQGbQnOEgn/AAQjYAAjggzg");
	var mask_2_graphics_376 = new cjs.Graphics().p("EAAZAh2Qr2iemoqJQmqqHCfr3MA5PAL7QifL3qHGoQnZE2oUAAQjFAAjOgrg");
	var mask_2_graphics_377 = new cjs.Graphics().p("EAA8Ah+Qr5iOm2p/Qm3p/COr5MA5fAKsQiOL7p/G1QnjFMoqAAQizAAi6gjg");
	var mask_2_graphics_378 = new cjs.Graphics().p("EABgAiFQr8h9nDp3QnFp0B+r+MA5sAJfQh+L9p0HEQnuFipAAAQigAAimgcg");
	var mask_2_graphics_379 = new cjs.Graphics().p("EACEAiMQr+hunRpsQnSprBusAMA54AIQQhtMAprHQQn3F6pXAAQiNAAiSgVg");
	var mask_2_graphics_380 = new cjs.Graphics().p("EACpAiRQsBhdndpiQnfphBdsCMA6DAHBQhdMCphHdQn/GRpvAAQh6AAh9gPg");
	var mask_2_graphics_381 = new cjs.Graphics().p("EADPAiWQsDhNnqpYQnspXBMsEMA6MAFyQhNMEpWHrQoIGpqHAAQhlAAhogKg");
	var mask_2_graphics_382 = new cjs.Graphics().p("EAD1AiaQsFg9n3pNQn4pMA8sGMA6TAEjQg8MFpMH3QoPHDqiAAQhQAAhSgGg");
	var mask_2_graphics_383 = new cjs.Graphics().p("EAEbAicQsFgroEpDQoFpBAssHMA6YADTQgrMHpCIDQoVHdq8AAQg7AAg9gEg");
	var mask_2_graphics_384 = new cjs.Graphics().p("EAFCAieQsGgboQo4QoRo2AbsHMA6cACEQgbMHo2IPQocH4rYAAIhLgCg");
	var mask_2_graphics_385 = new cjs.Graphics().p("EAFpAifQsGgKocotQodoqALsIMA6eAA0QgLMHorIcQohITr1AAIgegBg");
	var mask_2_graphics_386 = new cjs.Graphics().p("AudaFQopofgFsIMA6egAcQAGMHofIoQohIpsIAGIgQAAQr8AAoiobg");
	var mask_2_graphics_387 = new cjs.Graphics().p("AuAagQo0oTgXsHMA6dgBsQAXMHoUIzQoVI0sHAXIg+ABQrfAAocoAg");
	var mask_2_graphics_388 = new cjs.Graphics().p("Atja7QpAoHgmsHMA6agC7QAmMHoHI+QoII/sHAnQg2ADg1AAQrDAAoWnlg");
	var mask_2_graphics_389 = new cjs.Graphics().p("AtFbVQpLn6g3sGMA6VgELQA3MGn7JJQn8JKsGA4QhLAFhLAAQqoAAoPnLg");
	var mask_2_graphics_390 = new cjs.Graphics().p("AsnbvQpVnuhIsFMA6PgFaQBHMEnuJUQnwJVsEBIQhiAJhfAAQqOAAoImxg");
	var mask_2_graphics_391 = new cjs.Graphics().p("AsIcIQpgnhhYsDMA6GgGqQBZMDniJeQnjJgsDBYQh3ANhzAAQp1AAoAmYg");
	var mask_2_graphics_392 = new cjs.Graphics().p("ArpcgQpqnUhosBMA58gH5QBpMBnVJoQnWJqsABpQiMATiHAAQpdAAn4mBg");
	var mask_2_graphics_393 = new cjs.Graphics().p("ArJc4Qp0nHh5r/MA5xgJHQB5L+nHJyQnJJ0r+B5QigAZibAAQpFAAnvlpg");
	var mask_2_graphics_394 = new cjs.Graphics().p("AqpdPQp9m6iKr8MA5kgKWQCKL8m6J7Qm7J9r8CKQi0AgiuAAQovAAnllSg");
	var mask_2_graphics_395 = new cjs.Graphics().p("AqJdlQqGmsiZr5MA5VgLjQCZL3msKFQmtKGr5CaQjIAojAAAQoZAAnck8g");
	var mask_2_graphics_396 = new cjs.Graphics().p("Apnd6QqQmeipr1MA5EgMyQCqL0mfKOQmfKQr1CpQjbAyjTAAQoEAAnQkog");
	var mask_2_graphics_397 = new cjs.Graphics().p("ApGePQqYmQi5rxMA4ygOAQC6LwmRKXQmRKYryC6QjuA7jlAAQnuAAnGkTg");
	var mask_2_graphics_398 = new cjs.Graphics().p("AokejQqgmCjKrtMA4fgPNQDKLtmDKeQmDKhrtDKQkABFj4AAQnaAAm6j/g");
	var mask_2_graphics_399 = new cjs.Graphics().p("AoBe2QqolzjarpMA4JgQZQDaLnl0KnQl1KprpDaQkSBQkKAAQnGAAmtjsg");
	var mask_2_graphics_400 = new cjs.Graphics().p("AnefJQqwlljqrkMA3ygRmQDqLjlmKvQlmKxrkDpQkjBckcAAQmzAAmgjZg");
	var mask_2_graphics_401 = new cjs.Graphics().p("Am7fbQq3lWj5rfMA3ZgSyQD5LelXK2QlXK5rfD5Qk1BoktAAQmgAAmTjHg");
	var mask_2_graphics_402 = new cjs.Graphics().p("AmXfsQq/lHkIraMA2/gT8QEILYlHK9QlJLArZEIQlGB2k/AAQmNAAmFi2g");
	var mask_2_graphics_403 = new cjs.Graphics().p("Alyf8QrGk4kYrTMA2jgVIQEYLTk5LEQk6LGrTEYQlVCElSABQl7AAl1ing");
	var mask_2_graphics_404 = new cjs.Graphics().p("EgFOAgMQrMkpkorNMA2GgWSQEnLNkpLKQkrLNrNEoQllCTlkAAQloAAlniXg");
	var mask_2_graphics_405 = new cjs.Graphics().p("EgEpAgbQrSkak3rHMA1mgXbQE3LGkaLRQkbLTrHE3Ql0Cil3AAQlWABlXiIg");
	var mask_2_graphics_406 = new cjs.Graphics().p("EgEEAgpQrYkKlGrAMA1GgYkQFGK/kLLXQkMLZrAFGQmCCymJAAQlEAAlIh5g");
	var mask_2_graphics_407 = new cjs.Graphics().p("EgDeAg3Qrej7lUq5MA0jgZsQFVK4j8LdQj8Leq5FVQmQDDmcAAQkyAAk3hrg");
	var mask_2_graphics_408 = new cjs.Graphics().p("EgC4AhDQrjjrlkqyMA0AgazQFkKxjsLiQjtLjqxFkQmeDVmvAAQkgAAkmhfg");
	var mask_2_graphics_409 = new cjs.Graphics().p("EgCrAhHQrljllpqwMAz0gbLQFoKujmLkQjnLlqvFpQmjDbm1AAQkaAAkghbg");
	var mask_2_graphics_410 = new cjs.Graphics().p("EgCfAhLQrmjgltqtMAzmgbjQFuKsjhLlQjiLnqsFtQmnDim9AAQkTAAkbhXg");
	var mask_2_graphics_411 = new cjs.Graphics().p("EgCSAhPQrojblyqqMAzagb7QFzKpjcLnQjdLoqpFzQmsDonDAAQkNAAkVhTg");
	var mask_2_graphics_412 = new cjs.Graphics().p("EgCFAhTQrpjVl4qoMAzOgcTQF3KnjWLoQjXLqqoF4QmvDunKAAQkHAAkPhPg");
	var mask_2_graphics_413 = new cjs.Graphics().p("EgB4AhXQrrjQl8qlMAzAgcqQF9KjjSLqQjRLsqlF8QmzD1nRAAQkBAAkJhLg");
	var mask_2_graphics_414 = new cjs.Graphics().p("EgBrAhbQrsjLmCqiMAy0gdCQGBKhjMLrQjMLtqiGBQm4D8nXAAQj7AAkDhHg");
	var mask_2_graphics_415 = new cjs.Graphics().p("EgBeAheQrujFmGqfMAymgdaQGGKejGLtQjHLvqfGGQm8ECneAAQj1AAj9hEg");
	var mask_2_graphics_416 = new cjs.Graphics().p("EgBRAhiQrvjAmLqdMAyYgdxQGLKcjBLuQjBLwqcGLQnAEJnmAAQjuAAj3hAg");
	var mask_2_graphics_417 = new cjs.Graphics().p("EgBEAhlQrwi7mQqZMAyKgeIQGQKYi7LwQi8LxqaGQQnEEQnsAAQjoAAjxg9g");
	var mask_2_graphics_418 = new cjs.Graphics().p("EgA2AhoQrzi1mUqWMAx8gegQGVKWi2LxQi3LzqWGUQnIEXnzAAQjiAAjqg6g");
	var mask_2_graphics_419 = new cjs.Graphics().p("EgApAhsQr0iwmZqUMAxuge2QGaKSixLyQixL1qUGZQnLEen7AAQjcAAjjg2g");
	var mask_2_graphics_420 = new cjs.Graphics().p("EgAcAhvQr1irmeqQMAxggfOQGeKRirLyQirL2qRGeQnQEkoBAAQjWAAjdgyg");
	var mask_2_graphics_421 = new cjs.Graphics().p("EgAPAhyQr2ilmjqOMAxSgfkQGjKNimL0QimL3qOGjQnTEroJAAQjPAAjXgvg");
	var mask_2_graphics_422 = new cjs.Graphics().p("EgACAh1Qr3igmoqKMAxEgf8QGnKLigL1QigL4qLGoQnXEyoQAAQjJAAjRgsg");
	var mask_2_graphics_423 = new cjs.Graphics().p("EAAKAh4Qr3iamsqIMAw1ggSQGsKIibL2QibL5qIGsQnbE6oXAAQjDAAjLgpg");
	var mask_2_graphics_424 = new cjs.Graphics().p("EAAYAh6Qr5iUmxqFMAwmggoQGxKEiVL4QiWL6qFGxQneFBoeAAQi9AAjEgng");
	var mask_2_graphics_425 = new cjs.Graphics().p("EAAlAh9Qr6iPm1qBMAwXghAQG1KCiQL4QiQL8qBG1QniFJomAAQi2AAi+gkg");
	var mask_2_graphics_426 = new cjs.Graphics().p("EAAyAiAQr6iKm7p+MAwIghWQG6J/iKL5QiLL9p+G6QnlFQouAAQiwAAi3ghg");
	var mask_2_graphics_427 = new cjs.Graphics().p("EABAAiCQr8iEm/p7MAv4ghsQG/J7iFL7QiFL9p7G/QnoFYo1AAQiqAAiwgfg");
	var mask_2_graphics_428 = new cjs.Graphics().p("EABNAiEQr9h+nDp4MAvpgiCQHDJ4h/L7QiAL/p4HDQnsFgo8AAQijAAiqgdg");
	var mask_2_graphics_429 = new cjs.Graphics().p("EABaAiHQr9h5nIp1MAvZgiYQHIJ1h6L8Qh6MAp1HIQnvFnpEAAQidAAijgag");
	var mask_2_graphics_430 = new cjs.Graphics().p("EABoAiJQr/h0nMpxMAvJgiuQHNJxh1L+Qh0MApyHNQnyFvpMAAQiWAAicgYg");
	var mask_2_graphics_431 = new cjs.Graphics().p("EAB1AiLQr/hunRpuMAu5gjEQHRJuhvL+QhvMCpuHRQn1F3pUAAQiQAAiVgWg");
	var mask_2_graphics_432 = new cjs.Graphics().p("EACDAiNQsBhonVprMAupgjaQHWJrhqL/QhpMCprHWQn4F/pdAAQiIAAiOgUg");
	var mask_2_graphics_433 = new cjs.Graphics().p("EACQAiPQsBhjnapnMAuZgjvQHaJnhkMAQhkMCpnHbQn7GGplAAQiCAAiHgRg");
	var mask_2_graphics_434 = new cjs.Graphics().p("EACdAiRQsBhenfpkMAuJgkEQHeJkheMAQheMEpkHeQn/GPpsAAQh8AAiAgPg");
	var mask_2_graphics_435 = new cjs.Graphics().p("EACrAiSQsDhXniphMAt3gkaQHjJhhYMBQhZMEphHjQoBGXp1AAQh0AAh5gOg");
	var mask_2_graphics_436 = new cjs.Graphics().p("EAC4AiUQsDhSnnpdMAtngkvQHnJdhTMBQhTMFpdHoQoEGfp9AAQhuAAhygMg");
	var mask_2_graphics_437 = new cjs.Graphics().p("EADFAiUQsDhNnspZMAtWglEQHsJZhOMDQhNMFpaHsQoHGoqFAAQhnAAhrgLg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(223).to({graphics:mask_2_graphics_223,x:209.9,y:178.7}).wait(1).to({graphics:mask_2_graphics_224,x:209.4,y:179.5}).wait(1).to({graphics:mask_2_graphics_225,x:208.8,y:180.3}).wait(1).to({graphics:mask_2_graphics_226,x:208.3,y:181.1}).wait(1).to({graphics:mask_2_graphics_227,x:207.7,y:181.9}).wait(1).to({graphics:mask_2_graphics_228,x:207.2,y:182.7}).wait(1).to({graphics:mask_2_graphics_229,x:206.6,y:183.5}).wait(1).to({graphics:mask_2_graphics_230,x:206,y:184.2}).wait(1).to({graphics:mask_2_graphics_231,x:205.4,y:185}).wait(1).to({graphics:mask_2_graphics_232,x:204.8,y:185.8}).wait(1).to({graphics:mask_2_graphics_233,x:204.2,y:186.5}).wait(1).to({graphics:mask_2_graphics_234,x:203.6,y:187.3}).wait(1).to({graphics:mask_2_graphics_235,x:202.9,y:188}).wait(1).to({graphics:mask_2_graphics_236,x:202.3,y:188.7}).wait(1).to({graphics:mask_2_graphics_237,x:201.6,y:189.5}).wait(1).to({graphics:mask_2_graphics_238,x:201,y:190.2}).wait(1).to({graphics:mask_2_graphics_239,x:200.3,y:190.9}).wait(1).to({graphics:mask_2_graphics_240,x:199.7,y:191.6}).wait(1).to({graphics:mask_2_graphics_241,x:199,y:192.3}).wait(1).to({graphics:mask_2_graphics_242,x:198.3,y:193}).wait(1).to({graphics:mask_2_graphics_243,x:197.6,y:193.7}).wait(1).to({graphics:mask_2_graphics_244,x:196.9,y:194.3}).wait(14).to({graphics:mask_2_graphics_258,x:199.5,y:191.7}).wait(1).to({graphics:mask_2_graphics_259,x:199.5,y:191.7}).wait(1).to({graphics:mask_2_graphics_260,x:199.5,y:191.7}).wait(1).to({graphics:mask_2_graphics_261,x:199.5,y:191.7}).wait(1).to({graphics:mask_2_graphics_262,x:199.5,y:191.7}).wait(1).to({graphics:mask_2_graphics_263,x:199.5,y:191.7}).wait(1).to({graphics:mask_2_graphics_264,x:199.5,y:191.7}).wait(1).to({graphics:mask_2_graphics_265,x:199.5,y:191.7}).wait(1).to({graphics:mask_2_graphics_266,x:198.3,y:192.9}).wait(1).to({graphics:mask_2_graphics_267,x:197.1,y:194.1}).wait(1).to({graphics:mask_2_graphics_268,x:195.9,y:195.3}).wait(1).to({graphics:mask_2_graphics_269,x:194.7,y:196.4}).wait(1).to({graphics:mask_2_graphics_270,x:193.4,y:197.6}).wait(1).to({graphics:mask_2_graphics_271,x:192.1,y:198.7}).wait(1).to({graphics:mask_2_graphics_272,x:190.8,y:199.8}).wait(1).to({graphics:mask_2_graphics_273,x:189.5,y:200.8}).wait(1).to({graphics:mask_2_graphics_274,x:188.1,y:201.8}).wait(1).to({graphics:mask_2_graphics_275,x:186.8,y:202.9}).wait(1).to({graphics:mask_2_graphics_276,x:185.4,y:203.8}).wait(1).to({graphics:mask_2_graphics_277,x:184,y:204.8}).wait(1).to({graphics:mask_2_graphics_278,x:182.6,y:205.7}).wait(1).to({graphics:mask_2_graphics_279,x:181.2,y:206.6}).wait(1).to({graphics:mask_2_graphics_280,x:179.7,y:207.5}).wait(1).to({graphics:mask_2_graphics_281,x:178.2,y:208.3}).wait(1).to({graphics:mask_2_graphics_282,x:176.6,y:209.2}).wait(1).to({graphics:mask_2_graphics_283,x:175,y:210.1}).wait(1).to({graphics:mask_2_graphics_284,x:173.4,y:210.9}).wait(1).to({graphics:mask_2_graphics_285,x:171.7,y:211.7}).wait(1).to({graphics:mask_2_graphics_286,x:170.1,y:212.5}).wait(1).to({graphics:mask_2_graphics_287,x:168.4,y:213.2}).wait(1).to({graphics:mask_2_graphics_288,x:166.7,y:213.9}).wait(1).to({graphics:mask_2_graphics_289,x:165.1,y:214.6}).wait(1).to({graphics:mask_2_graphics_290,x:163.3,y:215.2}).wait(1).to({graphics:mask_2_graphics_291,x:161.6,y:215.8}).wait(1).to({graphics:mask_2_graphics_292,x:159.9,y:216.4}).wait(1).to({graphics:mask_2_graphics_293,x:158.2,y:216.9}).wait(1).to({graphics:mask_2_graphics_294,x:156.4,y:217.4}).wait(1).to({graphics:mask_2_graphics_295,x:154.7,y:217.8}).wait(1).to({graphics:mask_2_graphics_296,x:152.9,y:218.3}).wait(1).to({graphics:mask_2_graphics_297,x:151.1,y:218.7}).wait(1).to({graphics:mask_2_graphics_298,x:149.3,y:219}).wait(1).to({graphics:mask_2_graphics_299,x:147.5,y:219.3}).wait(1).to({graphics:mask_2_graphics_300,x:145.7,y:219.6}).wait(1).to({graphics:mask_2_graphics_301,x:143.9,y:219.9}).wait(1).to({graphics:mask_2_graphics_302,x:142.1,y:220.1}).wait(1).to({graphics:mask_2_graphics_303,x:140.3,y:220.3}).wait(1).to({graphics:mask_2_graphics_304,x:138.5,y:220.4}).wait(1).to({graphics:mask_2_graphics_305,x:136.7,y:220.5}).wait(1).to({graphics:mask_2_graphics_306,x:134.9,y:220.6}).wait(1).to({graphics:mask_2_graphics_307,x:133.1,y:220.7}).wait(1).to({graphics:mask_2_graphics_308,x:132.9,y:220.7}).wait(1).to({graphics:mask_2_graphics_309,x:134.7,y:220.7}).wait(1).to({graphics:mask_2_graphics_310,x:136.5,y:220.7}).wait(1).to({graphics:mask_2_graphics_311,x:138.3,y:220.7}).wait(1).to({graphics:mask_2_graphics_312,x:140.1,y:220.7}).wait(1).to({graphics:mask_2_graphics_313,x:141.9,y:220.7}).wait(1).to({graphics:mask_2_graphics_314,x:143.7,y:220.8}).wait(1).to({graphics:mask_2_graphics_315,x:145.5,y:220.8}).wait(1).to({graphics:mask_2_graphics_316,x:147.2,y:220.8}).wait(1).to({graphics:mask_2_graphics_317,x:149,y:220.8}).wait(1).to({graphics:mask_2_graphics_318,x:150.8,y:220.9}).wait(1).to({graphics:mask_2_graphics_319,x:152.6,y:220.9}).wait(1).to({graphics:mask_2_graphics_320,x:154.3,y:220.9}).wait(1).to({graphics:mask_2_graphics_321,x:156.1,y:220.9}).wait(1).to({graphics:mask_2_graphics_322,x:157.8,y:220.9}).wait(1).to({graphics:mask_2_graphics_323,x:159.5,y:221}).wait(1).to({graphics:mask_2_graphics_324,x:161.2,y:221}).wait(1).to({graphics:mask_2_graphics_325,x:163,y:221}).wait(1).to({graphics:mask_2_graphics_326,x:164.7,y:221}).wait(1).to({graphics:mask_2_graphics_327,x:166.3,y:221}).wait(1).to({graphics:mask_2_graphics_328,x:168,y:221}).wait(1).to({graphics:mask_2_graphics_329,x:169.7,y:221}).wait(1).to({graphics:mask_2_graphics_330,x:171.3,y:221}).wait(1).to({graphics:mask_2_graphics_331,x:172.9,y:221}).wait(1).to({graphics:mask_2_graphics_332,x:174.6,y:221}).wait(1).to({graphics:mask_2_graphics_333,x:176.2,y:221}).wait(1).to({graphics:mask_2_graphics_334,x:177.7,y:221}).wait(1).to({graphics:mask_2_graphics_335,x:179.3,y:220.9}).wait(1).to({graphics:mask_2_graphics_336,x:180.9,y:220.9}).wait(1).to({graphics:mask_2_graphics_337,x:182.4,y:220.9}).wait(1).to({graphics:mask_2_graphics_338,x:183.9,y:220.9}).wait(1).to({graphics:mask_2_graphics_339,x:185.4,y:220.9}).wait(1).to({graphics:mask_2_graphics_340,x:186.9,y:220.8}).wait(1).to({graphics:mask_2_graphics_341,x:188.3,y:220.8}).wait(1).to({graphics:mask_2_graphics_342,x:189.8,y:220.8}).wait(1).to({graphics:mask_2_graphics_343,x:191.2,y:220.8}).wait(1).to({graphics:mask_2_graphics_344,x:192.6,y:220.8}).wait(1).to({graphics:mask_2_graphics_345,x:193.9,y:220.7}).wait(1).to({graphics:mask_2_graphics_346,x:195.3,y:220.7}).wait(1).to({graphics:mask_2_graphics_347,x:196.6,y:220.7}).wait(1).to({graphics:mask_2_graphics_348,x:197.9,y:220.7}).wait(1).to({graphics:mask_2_graphics_349,x:199.2,y:220.7}).wait(1).to({graphics:mask_2_graphics_350,x:200.4,y:220.7}).wait(1).to({graphics:mask_2_graphics_351,x:201.6,y:220.7}).wait(1).to({graphics:mask_2_graphics_352,x:202.8,y:220.7}).wait(1).to({graphics:mask_2_graphics_353,x:204,y:220.7}).wait(1).to({graphics:mask_2_graphics_354,x:205.2,y:220.8}).wait(1).to({graphics:mask_2_graphics_355,x:206.5,y:220.8}).wait(1).to({graphics:mask_2_graphics_356,x:207.7,y:220.8}).wait(1).to({graphics:mask_2_graphics_357,x:208.8,y:220.8}).wait(1).to({graphics:mask_2_graphics_358,x:210,y:220.9}).wait(1).to({graphics:mask_2_graphics_359,x:211.1,y:220.9}).wait(1).to({graphics:mask_2_graphics_360,x:212.1,y:220.9}).wait(1).to({graphics:mask_2_graphics_361,x:213.1,y:220.9}).wait(1).to({graphics:mask_2_graphics_362,x:214.1,y:221}).wait(1).to({graphics:mask_2_graphics_363,x:215.1,y:221}).wait(1).to({graphics:mask_2_graphics_364,x:216,y:221}).wait(1).to({graphics:mask_2_graphics_365,x:216.9,y:221}).wait(1).to({graphics:mask_2_graphics_366,x:217.7,y:221}).wait(1).to({graphics:mask_2_graphics_367,x:218.5,y:221}).wait(1).to({graphics:mask_2_graphics_368,x:219.2,y:221}).wait(1).to({graphics:mask_2_graphics_369,x:220,y:221}).wait(1).to({graphics:mask_2_graphics_370,x:220.6,y:221}).wait(1).to({graphics:mask_2_graphics_371,x:221.3,y:221}).wait(1).to({graphics:mask_2_graphics_372,x:221.9,y:221}).wait(1).to({graphics:mask_2_graphics_373,x:222.4,y:221}).wait(1).to({graphics:mask_2_graphics_374,x:223,y:221}).wait(1).to({graphics:mask_2_graphics_375,x:223.4,y:220.9}).wait(1).to({graphics:mask_2_graphics_376,x:223.9,y:220.9}).wait(1).to({graphics:mask_2_graphics_377,x:224.3,y:220.9}).wait(1).to({graphics:mask_2_graphics_378,x:224.6,y:220.9}).wait(1).to({graphics:mask_2_graphics_379,x:224.9,y:220.9}).wait(1).to({graphics:mask_2_graphics_380,x:225.2,y:220.8}).wait(1).to({graphics:mask_2_graphics_381,x:225.4,y:220.8}).wait(1).to({graphics:mask_2_graphics_382,x:225.6,y:220.8}).wait(1).to({graphics:mask_2_graphics_383,x:225.7,y:220.8}).wait(1).to({graphics:mask_2_graphics_384,x:225.8,y:220.8}).wait(1).to({graphics:mask_2_graphics_385,x:225.9,y:220.8}).wait(1).to({graphics:mask_2_graphics_386,x:225.9,y:220.8}).wait(1).to({graphics:mask_2_graphics_387,x:225.9,y:220.8}).wait(1).to({graphics:mask_2_graphics_388,x:225.9,y:220.8}).wait(1).to({graphics:mask_2_graphics_389,x:225.9,y:220.8}).wait(1).to({graphics:mask_2_graphics_390,x:226,y:220.8}).wait(1).to({graphics:mask_2_graphics_391,x:226,y:220.8}).wait(1).to({graphics:mask_2_graphics_392,x:226,y:220.9}).wait(1).to({graphics:mask_2_graphics_393,x:226.1,y:220.9}).wait(1).to({graphics:mask_2_graphics_394,x:226.1,y:220.9}).wait(1).to({graphics:mask_2_graphics_395,x:226.1,y:220.9}).wait(1).to({graphics:mask_2_graphics_396,x:226.2,y:221}).wait(1).to({graphics:mask_2_graphics_397,x:226.2,y:221}).wait(1).to({graphics:mask_2_graphics_398,x:226.2,y:221}).wait(1).to({graphics:mask_2_graphics_399,x:226.2,y:221}).wait(1).to({graphics:mask_2_graphics_400,x:226.3,y:221}).wait(1).to({graphics:mask_2_graphics_401,x:226.3,y:221}).wait(1).to({graphics:mask_2_graphics_402,x:226.3,y:221}).wait(1).to({graphics:mask_2_graphics_403,x:226.3,y:221.1}).wait(1).to({graphics:mask_2_graphics_404,x:226.3,y:221.1}).wait(1).to({graphics:mask_2_graphics_405,x:226.3,y:221}).wait(1).to({graphics:mask_2_graphics_406,x:226.3,y:221}).wait(1).to({graphics:mask_2_graphics_407,x:226.3,y:221}).wait(1).to({graphics:mask_2_graphics_408,x:226.3,y:221}).wait(1).to({graphics:mask_2_graphics_409,x:226.3,y:221}).wait(1).to({graphics:mask_2_graphics_410,x:226.3,y:221}).wait(1).to({graphics:mask_2_graphics_411,x:226.3,y:221}).wait(1).to({graphics:mask_2_graphics_412,x:226.3,y:221}).wait(1).to({graphics:mask_2_graphics_413,x:226.3,y:221}).wait(1).to({graphics:mask_2_graphics_414,x:226.3,y:221}).wait(1).to({graphics:mask_2_graphics_415,x:226.3,y:221}).wait(1).to({graphics:mask_2_graphics_416,x:226.2,y:221}).wait(1).to({graphics:mask_2_graphics_417,x:226.2,y:221}).wait(1).to({graphics:mask_2_graphics_418,x:226.2,y:221}).wait(1).to({graphics:mask_2_graphics_419,x:226.2,y:221}).wait(1).to({graphics:mask_2_graphics_420,x:226.2,y:220.9}).wait(1).to({graphics:mask_2_graphics_421,x:226.2,y:220.9}).wait(1).to({graphics:mask_2_graphics_422,x:226.2,y:220.9}).wait(1).to({graphics:mask_2_graphics_423,x:226.2,y:220.9}).wait(1).to({graphics:mask_2_graphics_424,x:226.2,y:220.9}).wait(1).to({graphics:mask_2_graphics_425,x:226.2,y:220.9}).wait(1).to({graphics:mask_2_graphics_426,x:226.2,y:220.9}).wait(1).to({graphics:mask_2_graphics_427,x:226.2,y:220.9}).wait(1).to({graphics:mask_2_graphics_428,x:226.2,y:220.9}).wait(1).to({graphics:mask_2_graphics_429,x:226.2,y:220.9}).wait(1).to({graphics:mask_2_graphics_430,x:226.2,y:220.9}).wait(1).to({graphics:mask_2_graphics_431,x:226.2,y:220.9}).wait(1).to({graphics:mask_2_graphics_432,x:226.2,y:220.9}).wait(1).to({graphics:mask_2_graphics_433,x:226.2,y:220.8}).wait(1).to({graphics:mask_2_graphics_434,x:226.1,y:220.8}).wait(1).to({graphics:mask_2_graphics_435,x:226.1,y:220.8}).wait(1).to({graphics:mask_2_graphics_436,x:226.1,y:220.8}).wait(1).to({graphics:mask_2_graphics_437,x:226.1,y:220.7}).wait(268));

	// Layer 9
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(20,1,1).p("ATl0gQgfgDgdgCQlcgUjeCsQgRAOgDADQh1BhhaB1QghAqgeArQgEAFgEAFQgkAyghAzQhJBthBBvQgJAPgIAPQhFB3hBB4Qg6Bpg6BqQg7Bsg4BuQhECFhACFQg1Bvg0BsQg1Btg1BuQg8B8hPBxQhVB8itA2QgDABgDABQgCABgCAAQgBABgCAAQgCABgCAAQgBABgBAAQgDABgCAAQgFABgEACQgCAAgCAAQgBABgCAAQgBAAgBABQgBAAgBAAQgCABgBAAQgCAAgCABQhfATgugjQgRgNgLgUQgvhbAghdQAgheBRhmQBgh5CXglQCNgiCRATQAVACAdAG");
	this.shape_4.setTransform(200.8,275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(20,1,1).p("ARswZQAcBUAVBiQAuDMgWDMQgsGmlJGiQnnJunXAqQnXApi8kcQi7kbjvgq");
	this.shape_5.setTransform(266.9,299);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(20,1,1).p("AXutBQiamvlUgrQmfg2j8DEQgRAOgDADQh1BhhaB1QhKBghBBkQhSB8hJB+QhFB3hCB4Qg6Bpg6BqQg7Bsg4BuQhECFhACFQg1Bvg0BsQg1Btg1BuQg8B8hPBxQhVB8itA2QitA3gvhaQguhbAfhdQAgheBRhmQBgh5CXglQCNgiCRATQAVACAdAG");
	this.shape_6.setTransform(227.4,275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(20,1,1).p("Ag6xtQAEgEARgNQD7jEGeA1QFVAsCaGuQAiBeAYBxQCLJynoJuQnnJvnXApQnXApi8kbQi7kcjvgp");
	this.shape_7.setTransform(266.9,273.5);

	var maskedShapeInstanceList = [this.shape_4,this.shape_5,this.shape_6,this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},223).to({state:[{t:this.shape_5},{t:this.shape_4}]},35).to({state:[{t:this.shape_7},{t:this.shape_6}]},33).to({state:[]},377).wait(37));

	// Layer 13
	this.instance_3 = new lib.ar2("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(161.1,151.2,1,1,0,0,0,0.8,-0.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({_off:true},659).wait(37));

	// Layer 8 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_182 = new cjs.Graphics().p("EADAAipQkPgZivjSIP1tNQCvDSgZEQQgZERjSCvQi3CZjoAAQghAAgigDg");
	var mask_3_graphics_183 = new cjs.Graphics().p("EACVAijQkNgqihjdIQqsJQChDdgqEOQgrEOjdChQivB/jNAAQg2AAg5gJg");
	var mask_3_graphics_184 = new cjs.Graphics().p("EABqAibQkKg8iSjoIRcrAQCRDng8EKQg8ELjnCSQikBni1AAQhLAAhOgRg");
	var mask_3_graphics_185 = new cjs.Graphics().p("EABAAiPQkGhNiCjwISHp2QCDDxhOEFQhOEHjwCCQiXBSieAAQhfAAhigeg");
	var mask_3_graphics_186 = new cjs.Graphics().p("EAAWAiBQj/hehyj4ISuooQByD5hfEAQhfEAj4ByQiIA/iKAAQhyAAh1gsg");
	var mask_3_graphics_187 = new cjs.Graphics().p("EgARAhxQj6hvhhkAITQnXQBhEAhvD5QhwD6j/BhQh3Auh2AAQiHAAiEg8g");
	var mask_3_graphics_188 = new cjs.Graphics().p("EgA4AheQjyh/hQkGITsmFQBQEGh/DxQiADykFBRQhlAfhiAAQicAAiThPg");
	var mask_3_graphics_189 = new cjs.Graphics().p("EgBdAhJQjpiPg/kKIUCkxQBAEKiPDoQiQDpkKA/QhRAThOAAQiyAAighjg");
	var mask_3_graphics_190 = new cjs.Graphics().p("EgCBAgxQjfiegukOIUUjbQAuENieDfQifDfkNAtQg8AKg6AAQjKAAirh7g");
	var mask_3_graphics_191 = new cjs.Graphics().p("EgCkAgXQjUitgbkQIUgiFQAbEQisDTQitDUkQAcQgmAEgkAAQjjAAi2iVg");
	var mask_3_graphics_192 = new cjs.Graphics().p("AjEf6QjIi6gKkRIUmguQAJERi6DHQi6DJkRAJIgbABQj/AAi+iyg");
	var mask_3_graphics_193 = new cjs.Graphics().p("EADoAirQkQgIi7jHQi7jHAIkRIUmAoQgIERjHC7Qi/C0kCAAIgYgBg");
	var mask_3_graphics_194 = new cjs.Graphics().p("EAC+AioQkPgaitjTQiujTAakQIUhB/QgbEQjSCuQi4CXjlAAQgjAAgkgEg");
	var mask_3_graphics_195 = new cjs.Graphics().p("EACWAijQkNgtifjeQigjdAtkOIUVDVQgsEOjeCfQiuB9jLAAQg4AAg7gJg");
	var mask_3_graphics_196 = new cjs.Graphics().p("EABwAiaQkKg+iQjoQiQjoA9kKIUFErQg+EKjoCQQijBlizAAQhNAAhPgSg");
	var mask_3_graphics_197 = new cjs.Graphics().p("EABLAiOQkEhPiBjxQiBjxBPkFITuF/QhPEFjxCBQiVBQieAAQhgAAhkgfg");
	var mask_3_graphics_198 = new cjs.Graphics().p("EAApAiAQj/hghwj5Qhxj5Bgj/ITSHRQhgD/j5BxQiGA9iJAAQh0AAh2gtg");
	var mask_3_graphics_199 = new cjs.Graphics().p("EAAJAhwQj4hxhfkAQhhkABxj5ISxIiQhxD5kABgQh2Ash0AAQiIAAiHg9g");
	var mask_3_graphics_200 = new cjs.Graphics().p("EgATAhdQjxiChPkFQhPkGCBjwISKJvQiBDxkFBPQhkAehgAAQieAAiUhQg");
	var mask_3_graphics_201 = new cjs.Graphics().p("EgAuAhHQjoiRg9kKQg+kKCRjoIReK7QiRDokKA9QhPAThNAAQizAAiihmg");
	var mask_3_graphics_202 = new cjs.Graphics().p("EgBGAgvQjeiggrkNQgskOCfjeIQuMDQigDekNAsQg6AJg4AAQjMAAith9g");
	var mask_3_graphics_203 = new cjs.Graphics().p("EgBbAgVQjTiugZkQQgbkQCujTIP5NIQiuDTkQAaQgjADgjAAQjmAAi2iXg");
	var mask_3_graphics_204 = new cjs.Graphics().p("Ahtf4QjHi7gIkRQgIkRC7jHIO/OJQi7DHkRAIIgWAAQkDAAi+i0g");
	var mask_3_graphics_205 = new cjs.Graphics().p("EAFOAirQkRgJi5jJQi6jIAKkRQAKkRDIi6IOBPGQi+CxkAAAIgbgBg");
	var mask_3_graphics_206 = new cjs.Graphics().p("EAEzAioQkQgcirjUQitjUAckPQAckQDUisIM/P/Qi2CUjjAAQgkAAgmgEg");
	var mask_3_graphics_207 = new cjs.Graphics().p("EAEZAiiQkNguidjeQifjfAvkOQAtkNDeieIL7Q0QitB6jJAAQg5AAg9gKg");
	var mask_3_graphics_208 = new cjs.Graphics().p("EAEBAiZQkJg/iPjpQiPjpA/kJQA/kKDoiPIKzRkQiiBjixAAQhOAAhRgUg");
	var mask_3_graphics_209 = new cjs.Graphics().p("EADqAiOQkFhRh/jyQh/jyBRkEQBQkFDxiAIJnSPQiUBOibAAQhiAAhlgfg");
	var mask_3_graphics_210 = new cjs.Graphics().p("EADUAh/Qj+hhhvj6Qhwj6Bij+QBikAD4hvIIZS1QiFA7iGAAQh2AAh3gug");
	var mask_3_graphics_211 = new cjs.Graphics().p("EADAAhvQj3hzhfkAQhekBByj3QBzj5D/heIHITVQh0ArhyAAQiKAAiIg+g");
	var mask_3_graphics_212 = new cjs.Graphics().p("EACuAhbQjviChOkGQhNkGCDjwQCBjwEGhOIF1TxQhhAdhfAAQifAAiWhSg");
	var mask_3_graphics_213 = new cjs.Graphics().p("EACdAhGQjmiTg8kKQg8kLCTjmQCQjnELg8IEhUGQhNAShLAAQi1AAikhng");
	var mask_3_graphics_214 = new cjs.Graphics().p("EACPAgtQjcihgqkOQgrkNChjdQCgjdEOgqIDMUXQg4AJg2AAQjOAAiuiAg");
	var mask_3_graphics_215 = new cjs.Graphics().p("EACCAgTQjRivgYkQQgZkRCvjRQCujSERgYIB1UhQghADggAAQjoAAi4iZg");
	var mask_3_graphics_216 = new cjs.Graphics().p("AB3f2QjEi8gHkSQgGkRC7jFQC8jGESgGIAfUmIgSAAQkGAAi/i2g");
	var mask_3_graphics_217 = new cjs.Graphics().p("ABTfYQi4jKALkRQAMkRDIi4QDJi5ERAMIg4UlQkRgMi4jIg");
	var mask_3_graphics_218 = new cjs.Graphics().p("AAhe4QirjVAekPQAdkQDUirQDVirEPAeIiOUeQkQgdiqjVg");
	var mask_3_graphics_219 = new cjs.Graphics().p("AgOeZQidjgAvkNQAwkNDfidQDfidENAwIjlUSQkNgvibjfg");
	var mask_3_graphics_220 = new cjs.Graphics().p("Ag7d5QiOjqBBkJQBBkKDpiNQDpiOEJBBIk5UBQkKhBiMjpg");
	var mask_3_graphics_221 = new cjs.Graphics().p("AhldZQh+jzBSkEQBSkFDyh9QDyh+EEBSImNTpQkFhSh8jyg");
	var mask_3_graphics_222 = new cjs.Graphics().p("AiNc5Qhuj7Bkj+QBjj+D5huQD6huD+BkInfTMQj9hkhuj5g");
	var mask_3_graphics_223 = new cjs.Graphics().p("AixcZQhdkBB0j4QB0j3D/hdQEBhdD3B0IovSqQj2h0hdkAg");
	var mask_3_graphics_244 = new cjs.Graphics().p("AkxaEQgGkSC9jGQC8jFERgGQERgHDGC9IuPO6QjGi8gGkRg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(182).to({graphics:mask_3_graphics_182,x:91.2,y:222}).wait(1).to({graphics:mask_3_graphics_183,x:91.3,y:222}).wait(1).to({graphics:mask_3_graphics_184,x:91.3,y:222}).wait(1).to({graphics:mask_3_graphics_185,x:91.3,y:222.1}).wait(1).to({graphics:mask_3_graphics_186,x:91.3,y:222.1}).wait(1).to({graphics:mask_3_graphics_187,x:91.3,y:222.1}).wait(1).to({graphics:mask_3_graphics_188,x:91.3,y:222.1}).wait(1).to({graphics:mask_3_graphics_189,x:91.3,y:222}).wait(1).to({graphics:mask_3_graphics_190,x:91.3,y:222}).wait(1).to({graphics:mask_3_graphics_191,x:91.2,y:222}).wait(1).to({graphics:mask_3_graphics_192,x:91.2,y:222}).wait(1).to({graphics:mask_3_graphics_193,x:91.2,y:222}).wait(1).to({graphics:mask_3_graphics_194,x:91.1,y:222}).wait(1).to({graphics:mask_3_graphics_195,x:90.8,y:222}).wait(1).to({graphics:mask_3_graphics_196,x:90.4,y:222}).wait(1).to({graphics:mask_3_graphics_197,x:89.8,y:222.1}).wait(1).to({graphics:mask_3_graphics_198,x:89.1,y:222.1}).wait(1).to({graphics:mask_3_graphics_199,x:88.3,y:222.1}).wait(1).to({graphics:mask_3_graphics_200,x:87.3,y:222.1}).wait(1).to({graphics:mask_3_graphics_201,x:86.2,y:222.1}).wait(1).to({graphics:mask_3_graphics_202,x:85,y:222}).wait(1).to({graphics:mask_3_graphics_203,x:83.7,y:222}).wait(1).to({graphics:mask_3_graphics_204,x:82.2,y:222}).wait(1).to({graphics:mask_3_graphics_205,x:80.7,y:222}).wait(1).to({graphics:mask_3_graphics_206,x:79,y:222}).wait(1).to({graphics:mask_3_graphics_207,x:77.3,y:222}).wait(1).to({graphics:mask_3_graphics_208,x:75.5,y:222.1}).wait(1).to({graphics:mask_3_graphics_209,x:73.6,y:222.1}).wait(1).to({graphics:mask_3_graphics_210,x:71.6,y:222.1}).wait(1).to({graphics:mask_3_graphics_211,x:69.6,y:222.1}).wait(1).to({graphics:mask_3_graphics_212,x:67.5,y:222.1}).wait(1).to({graphics:mask_3_graphics_213,x:65.4,y:222.1}).wait(1).to({graphics:mask_3_graphics_214,x:63.3,y:222.1}).wait(1).to({graphics:mask_3_graphics_215,x:61.1,y:222}).wait(1).to({graphics:mask_3_graphics_216,x:59,y:222}).wait(1).to({graphics:mask_3_graphics_217,x:59.6,y:222}).wait(1).to({graphics:mask_3_graphics_218,x:61.7,y:221.8}).wait(1).to({graphics:mask_3_graphics_219,x:63.9,y:221.5}).wait(1).to({graphics:mask_3_graphics_220,x:66,y:221.1}).wait(1).to({graphics:mask_3_graphics_221,x:68.1,y:220.5}).wait(1).to({graphics:mask_3_graphics_222,x:70.1,y:219.8}).wait(1).to({graphics:mask_3_graphics_223,x:72.1,y:218.9}).wait(21).to({graphics:mask_3_graphics_244,x:81,y:212.9}).wait(461));

	// Layer 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(20,1,1).p("AioEvQh4AVgmhIQguhbAfhdQAghdBRhmQBgh5CWglQCNgiCRATQAVACAdAG");
	this.shape_8.setTransform(111,376.2);
	this.shape_8._off = true;

	var maskedShapeInstanceList = [this.shape_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(182).to({_off:false},0).to({_off:true},486).wait(37));

	// Layer 7 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_161 = new cjs.Graphics().p("EAJOAhNIAApiICCAAIAAJig");
	var mask_4_graphics_162 = new cjs.Graphics().p("AhPExIAAphICfAAIAAJhg");
	var mask_4_graphics_163 = new cjs.Graphics().p("AhdExIAAphIC8AAIAAJhg");
	var mask_4_graphics_164 = new cjs.Graphics().p("AhsExIAAphIDZAAIAAJhg");
	var mask_4_graphics_165 = new cjs.Graphics().p("Ah7ExIAAphID3AAIAAJhg");
	var mask_4_graphics_166 = new cjs.Graphics().p("AiJExIAAphIEUAAIAAJhg");
	var mask_4_graphics_167 = new cjs.Graphics().p("AiYExIAAphIExAAIAAJhg");
	var mask_4_graphics_168 = new cjs.Graphics().p("AinExIAAphIFPAAIAAJhg");
	var mask_4_graphics_169 = new cjs.Graphics().p("Ai2ExIAAphIFtAAIAAJhg");
	var mask_4_graphics_170 = new cjs.Graphics().p("AjEExIAAphIGKAAIAAJhg");
	var mask_4_graphics_171 = new cjs.Graphics().p("AjTExIAAphIGnAAIAAJhg");
	var mask_4_graphics_172 = new cjs.Graphics().p("AjiExIAAphIHFAAIAAJhg");
	var mask_4_graphics_173 = new cjs.Graphics().p("AjxExIAAphIHjAAIAAJhg");
	var mask_4_graphics_174 = new cjs.Graphics().p("AkAExIAAphIIAAAIAAJhg");
	var mask_4_graphics_175 = new cjs.Graphics().p("AkOExIAAphIIdAAIAAJhg");
	var mask_4_graphics_176 = new cjs.Graphics().p("AkdExIAAphII7AAIAAJhg");
	var mask_4_graphics_177 = new cjs.Graphics().p("AksExIAAphIJZAAIAAJhg");
	var mask_4_graphics_178 = new cjs.Graphics().p("Ak7ExIAAphIJ2AAIAAJhg");
	var mask_4_graphics_179 = new cjs.Graphics().p("AlJExIAAphIKTAAIAAJhg");
	var mask_4_graphics_180 = new cjs.Graphics().p("AlYExIAAphIKxAAIAAJhg");
	var mask_4_graphics_181 = new cjs.Graphics().p("AlnExIAAphILOAAIAAJhg");
	var mask_4_graphics_182 = new cjs.Graphics().p("EgAbAhNIAApiILrAAIAAJig");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(161).to({graphics:mask_4_graphics_161,x:72,y:212.5}).wait(1).to({graphics:mask_4_graphics_162,x:136.1,y:394.5}).wait(1).to({graphics:mask_4_graphics_163,x:134.6,y:394.5}).wait(1).to({graphics:mask_4_graphics_164,x:133.1,y:394.5}).wait(1).to({graphics:mask_4_graphics_165,x:131.7,y:394.5}).wait(1).to({graphics:mask_4_graphics_166,x:130.2,y:394.5}).wait(1).to({graphics:mask_4_graphics_167,x:128.7,y:394.5}).wait(1).to({graphics:mask_4_graphics_168,x:127.3,y:394.5}).wait(1).to({graphics:mask_4_graphics_169,x:125.8,y:394.5}).wait(1).to({graphics:mask_4_graphics_170,x:124.3,y:394.5}).wait(1).to({graphics:mask_4_graphics_171,x:122.8,y:394.5}).wait(1).to({graphics:mask_4_graphics_172,x:121.4,y:394.5}).wait(1).to({graphics:mask_4_graphics_173,x:119.9,y:394.5}).wait(1).to({graphics:mask_4_graphics_174,x:118.5,y:394.5}).wait(1).to({graphics:mask_4_graphics_175,x:117,y:394.5}).wait(1).to({graphics:mask_4_graphics_176,x:115.5,y:394.5}).wait(1).to({graphics:mask_4_graphics_177,x:114,y:394.5}).wait(1).to({graphics:mask_4_graphics_178,x:112.6,y:394.5}).wait(1).to({graphics:mask_4_graphics_179,x:111.1,y:394.5}).wait(1).to({graphics:mask_4_graphics_180,x:109.6,y:394.5}).wait(1).to({graphics:mask_4_graphics_181,x:108.2,y:394.5}).wait(1).to({graphics:mask_4_graphics_182,x:72,y:212.5}).wait(523));

	// Layer 6
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(20,1,1).p("AXTtBQibmvlUgrQmeg2j8DEQgRAOgEADQh0BhhbB1QhKBghBBkQhSB8hJB+QhFB3hCB4Qg6Bpg5BqQg7Bsg5BuQhECFhACFQg1Bvg0BsQg0Btg1BuQg8B8hPBxQhWB8itA2QiGArg6gt");
	this.shape_9.setTransform(230.1,275);
	this.shape_9._off = true;

	var maskedShapeInstanceList = [this.shape_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(161).to({_off:false},0).to({_off:true},507).wait(37));

	// Layer 5 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_65 = new cjs.Graphics().p("AtqQGIAAj6MAhHAAAIAAD6g");
	var mask_5_graphics_66 = new cjs.Graphics().p("AwjCHIAAkNMAhHAAAIAAENg");
	var mask_5_graphics_67 = new cjs.Graphics().p("AwjCQIAAkfMAhHAAAIAAEfg");
	var mask_5_graphics_68 = new cjs.Graphics().p("AwjCaIAAkzMAhHAAAIAAEzg");
	var mask_5_graphics_69 = new cjs.Graphics().p("AwjCjIAAlFMAhHAAAIAAFFg");
	var mask_5_graphics_70 = new cjs.Graphics().p("AwjCtIAAlZMAhHAAAIAAFZg");
	var mask_5_graphics_71 = new cjs.Graphics().p("AwjC3IAAltMAhHAAAIAAFtg");
	var mask_5_graphics_72 = new cjs.Graphics().p("AwjDAIAAl/MAhHAAAIAAF/g");
	var mask_5_graphics_73 = new cjs.Graphics().p("AwjDKIAAmTMAhHAAAIAAGTg");
	var mask_5_graphics_74 = new cjs.Graphics().p("AwjDUIAAmnMAhHAAAIAAGng");
	var mask_5_graphics_75 = new cjs.Graphics().p("AwjDdIAAm5MAhHAAAIAAG5g");
	var mask_5_graphics_76 = new cjs.Graphics().p("AwjDnIAAnNMAhHAAAIAAHNg");
	var mask_5_graphics_77 = new cjs.Graphics().p("AwjDwIAAnfMAhHAAAIAAHfg");
	var mask_5_graphics_78 = new cjs.Graphics().p("AwjD6IAAnzMAhHAAAIAAHzg");
	var mask_5_graphics_79 = new cjs.Graphics().p("AwjEEIAAoHMAhHAAAIAAIHg");
	var mask_5_graphics_80 = new cjs.Graphics().p("AwjEOIAAoaMAhHAAAIAAIag");
	var mask_5_graphics_81 = new cjs.Graphics().p("AwjEXIAAotMAhHAAAIAAItg");
	var mask_5_graphics_82 = new cjs.Graphics().p("AwjEhIAApBMAhHAAAIAAJBg");
	var mask_5_graphics_83 = new cjs.Graphics().p("AwjEqIAApTMAhHAAAIAAJTg");
	var mask_5_graphics_84 = new cjs.Graphics().p("AwjE0IAApnMAhHAAAIAAJng");
	var mask_5_graphics_85 = new cjs.Graphics().p("AwjE9IAAp5MAhHAAAIAAJ5g");
	var mask_5_graphics_86 = new cjs.Graphics().p("AwjFHIAAqNMAhHAAAIAAKNg");
	var mask_5_graphics_87 = new cjs.Graphics().p("AwjFRIAAqhMAhHAAAIAAKhg");
	var mask_5_graphics_88 = new cjs.Graphics().p("AwjFbIAAq0MAhHAAAIAAK0g");
	var mask_5_graphics_89 = new cjs.Graphics().p("AwjFkIAArHMAhHAAAIAALHg");
	var mask_5_graphics_90 = new cjs.Graphics().p("AwjFuIAArbMAhHAAAIAALbg");
	var mask_5_graphics_91 = new cjs.Graphics().p("AwjF3IAArtMAhHAAAIAALtg");
	var mask_5_graphics_92 = new cjs.Graphics().p("AwjGBIAAsBMAhHAAAIAAMBg");
	var mask_5_graphics_93 = new cjs.Graphics().p("AwjGLIAAsVMAhHAAAIAAMVg");
	var mask_5_graphics_94 = new cjs.Graphics().p("AwjGUIAAsnMAhHAAAIAAMng");
	var mask_5_graphics_95 = new cjs.Graphics().p("AwjGeIAAs7MAhHAAAIAAM7g");
	var mask_5_graphics_96 = new cjs.Graphics().p("AwjGoIAAtOMAhHAAAIAANOg");
	var mask_5_graphics_97 = new cjs.Graphics().p("AwjGxIAAthMAhHAAAIAANhg");
	var mask_5_graphics_98 = new cjs.Graphics().p("AwjG7IAAt1MAhHAAAIAAN1g");
	var mask_5_graphics_99 = new cjs.Graphics().p("AwjHEIAAuHMAhHAAAIAAOHg");
	var mask_5_graphics_100 = new cjs.Graphics().p("AwjHOIAAubMAhHAAAIAAObg");
	var mask_5_graphics_101 = new cjs.Graphics().p("AwjHYIAAuvMAhHAAAIAAOvg");
	var mask_5_graphics_102 = new cjs.Graphics().p("AwjHhIAAvBMAhHAAAIAAPBg");
	var mask_5_graphics_103 = new cjs.Graphics().p("AwjHrIAAvVMAhHAAAIAAPVg");
	var mask_5_graphics_104 = new cjs.Graphics().p("AwjH1IAAvoMAhHAAAIAAPog");
	var mask_5_graphics_105 = new cjs.Graphics().p("AwjH+IAAv7MAhHAAAIAAP7g");
	var mask_5_graphics_106 = new cjs.Graphics().p("AwjIIIAAwPMAhHAAAIAAQPg");
	var mask_5_graphics_107 = new cjs.Graphics().p("AwjIRIAAwhMAhHAAAIAAQhg");
	var mask_5_graphics_108 = new cjs.Graphics().p("AwjIbIAAw1MAhHAAAIAAQ1g");
	var mask_5_graphics_109 = new cjs.Graphics().p("AwjIlIAAxJMAhHAAAIAARJg");
	var mask_5_graphics_110 = new cjs.Graphics().p("AwjIuIAAxbMAhHAAAIAARbg");
	var mask_5_graphics_111 = new cjs.Graphics().p("AwjI4IAAxvMAhHAAAIAARvg");
	var mask_5_graphics_112 = new cjs.Graphics().p("AwjJBIAAyBMAhHAAAIAASBg");
	var mask_5_graphics_113 = new cjs.Graphics().p("AwjJLIAAyVMAhHAAAIAASVg");
	var mask_5_graphics_114 = new cjs.Graphics().p("AwjJVIAAypMAhHAAAIAASpg");
	var mask_5_graphics_115 = new cjs.Graphics().p("AwjJfIAAy9MAhHAAAIAAS9g");
	var mask_5_graphics_116 = new cjs.Graphics().p("AwjJoIAAzQMAhHAAAIAATQg");
	var mask_5_graphics_117 = new cjs.Graphics().p("AwjJyIAAzjMAhHAAAIAATjg");
	var mask_5_graphics_118 = new cjs.Graphics().p("AwjJ8IAAz3MAhHAAAIAAT3g");
	var mask_5_graphics_119 = new cjs.Graphics().p("AwjKFIAA0JMAhHAAAIAAUJg");
	var mask_5_graphics_120 = new cjs.Graphics().p("AwjKPIAA0dMAhHAAAIAAUdg");
	var mask_5_graphics_121 = new cjs.Graphics().p("AwjKZIAA0xMAhHAAAIAAUxg");
	var mask_5_graphics_122 = new cjs.Graphics().p("AwjKiIAA1DMAhHAAAIAAVDg");
	var mask_5_graphics_123 = new cjs.Graphics().p("AwjKsIAA1XMAhHAAAIAAVXg");
	var mask_5_graphics_124 = new cjs.Graphics().p("AwjK1IAA1qMAhHAAAIAAVqg");
	var mask_5_graphics_125 = new cjs.Graphics().p("AwjK/IAA19MAhHAAAIAAV9g");
	var mask_5_graphics_126 = new cjs.Graphics().p("AwjLJIAA2RMAhHAAAIAAWRg");
	var mask_5_graphics_127 = new cjs.Graphics().p("AwjLSIAA2jMAhHAAAIAAWjg");
	var mask_5_graphics_128 = new cjs.Graphics().p("AwjLcIAA23MAhHAAAIAAW3g");
	var mask_5_graphics_129 = new cjs.Graphics().p("AwjLmIAA3LMAhHAAAIAAXLg");
	var mask_5_graphics_130 = new cjs.Graphics().p("AwjLvIAA3dMAhHAAAIAAXdg");
	var mask_5_graphics_131 = new cjs.Graphics().p("AwjL5IAA3xMAhHAAAIAAXxg");
	var mask_5_graphics_132 = new cjs.Graphics().p("AwjMCIAA4EMAhHAAAIAAYEg");
	var mask_5_graphics_133 = new cjs.Graphics().p("AwjMMIAA4XMAhHAAAIAAYXg");
	var mask_5_graphics_134 = new cjs.Graphics().p("AwjMWIAA4rMAhHAAAIAAYrg");
	var mask_5_graphics_135 = new cjs.Graphics().p("AwjMfIAA49MAhHAAAIAAY9g");
	var mask_5_graphics_136 = new cjs.Graphics().p("AwjMpIAA5RMAhHAAAIAAZRg");
	var mask_5_graphics_137 = new cjs.Graphics().p("AwjMzIAA5lMAhHAAAIAAZlg");
	var mask_5_graphics_138 = new cjs.Graphics().p("AwjM8IAA53MAhHAAAIAAZ3g");
	var mask_5_graphics_139 = new cjs.Graphics().p("AwjNGIAA6LMAhHAAAIAAaLg");
	var mask_5_graphics_140 = new cjs.Graphics().p("AwjNPIAA6eMAhHAAAIAAaeg");
	var mask_5_graphics_141 = new cjs.Graphics().p("AwjNZIAA6xMAhHAAAIAAaxg");
	var mask_5_graphics_142 = new cjs.Graphics().p("AwjNjIAA7FMAhHAAAIAAbFg");
	var mask_5_graphics_143 = new cjs.Graphics().p("AwjNtIAA7ZMAhHAAAIAAbZg");
	var mask_5_graphics_144 = new cjs.Graphics().p("AwjN2IAA7rMAhHAAAIAAbrg");
	var mask_5_graphics_145 = new cjs.Graphics().p("AwjOAIAA7/MAhHAAAIAAb/g");
	var mask_5_graphics_146 = new cjs.Graphics().p("AwjOJIAA8RMAhHAAAIAAcRg");
	var mask_5_graphics_147 = new cjs.Graphics().p("AwjOTIAA8lMAhHAAAIAAclg");
	var mask_5_graphics_148 = new cjs.Graphics().p("AwjOdIAA85MAhHAAAIAAc5g");
	var mask_5_graphics_149 = new cjs.Graphics().p("AwjOmIAA9LMAhHAAAIAAdLg");
	var mask_5_graphics_150 = new cjs.Graphics().p("AwjOwIAA9fMAhHAAAIAAdfg");
	var mask_5_graphics_151 = new cjs.Graphics().p("AwjO5IAA9yMAhHAAAIAAdyg");
	var mask_5_graphics_152 = new cjs.Graphics().p("AwjPDIAA+FMAhHAAAIAAeFg");
	var mask_5_graphics_153 = new cjs.Graphics().p("AwjPNIAA+ZMAhHAAAIAAeZg");
	var mask_5_graphics_154 = new cjs.Graphics().p("AwjPWIAA+rMAhHAAAIAAerg");
	var mask_5_graphics_155 = new cjs.Graphics().p("AwjPgIAA+/MAhHAAAIAAe/g");
	var mask_5_graphics_156 = new cjs.Graphics().p("AwjPqIAA/TMAhHAAAIAAfTg");
	var mask_5_graphics_157 = new cjs.Graphics().p("AwjPzIAA/lMAhHAAAIAAflg");
	var mask_5_graphics_158 = new cjs.Graphics().p("AwjP9IAA/5MAhHAAAIAAf5g");
	var mask_5_graphics_159 = new cjs.Graphics().p("AwjQGMAAAggMMAhHAAAMAAAAgMg");
	var mask_5_graphics_160 = new cjs.Graphics().p("AwjQQMAAAggfMAhHAAAMAAAAgfg");
	var mask_5_graphics_161 = new cjs.Graphics().p("AtqejMAAAggzMAhHAAAMAAAAgzg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(65).to({graphics:mask_5_graphics_65,x:124.5,y:103}).wait(1).to({graphics:mask_5_graphics_66,x:143.1,y:194.5}).wait(1).to({graphics:mask_5_graphics_67,x:143.1,y:195.5}).wait(1).to({graphics:mask_5_graphics_68,x:143.1,y:196.5}).wait(1).to({graphics:mask_5_graphics_69,x:143.1,y:197.4}).wait(1).to({graphics:mask_5_graphics_70,x:143.1,y:198.4}).wait(1).to({graphics:mask_5_graphics_71,x:143.1,y:199.3}).wait(1).to({graphics:mask_5_graphics_72,x:143.1,y:200.3}).wait(1).to({graphics:mask_5_graphics_73,x:143.1,y:201.3}).wait(1).to({graphics:mask_5_graphics_74,x:143.1,y:202.2}).wait(1).to({graphics:mask_5_graphics_75,x:143.1,y:203.2}).wait(1).to({graphics:mask_5_graphics_76,x:143.1,y:204.2}).wait(1).to({graphics:mask_5_graphics_77,x:143.1,y:205.1}).wait(1).to({graphics:mask_5_graphics_78,x:143.1,y:206.1}).wait(1).to({graphics:mask_5_graphics_79,x:143.1,y:207}).wait(1).to({graphics:mask_5_graphics_80,x:143.1,y:208}).wait(1).to({graphics:mask_5_graphics_81,x:143.1,y:209}).wait(1).to({graphics:mask_5_graphics_82,x:143.1,y:209.9}).wait(1).to({graphics:mask_5_graphics_83,x:143.1,y:210.9}).wait(1).to({graphics:mask_5_graphics_84,x:143.1,y:211.9}).wait(1).to({graphics:mask_5_graphics_85,x:143.1,y:212.8}).wait(1).to({graphics:mask_5_graphics_86,x:143.1,y:213.8}).wait(1).to({graphics:mask_5_graphics_87,x:143.1,y:214.7}).wait(1).to({graphics:mask_5_graphics_88,x:143.1,y:215.7}).wait(1).to({graphics:mask_5_graphics_89,x:143.1,y:216.7}).wait(1).to({graphics:mask_5_graphics_90,x:143.1,y:217.6}).wait(1).to({graphics:mask_5_graphics_91,x:143.1,y:218.6}).wait(1).to({graphics:mask_5_graphics_92,x:143.1,y:219.6}).wait(1).to({graphics:mask_5_graphics_93,x:143.1,y:220.5}).wait(1).to({graphics:mask_5_graphics_94,x:143.1,y:221.5}).wait(1).to({graphics:mask_5_graphics_95,x:143.1,y:222.5}).wait(1).to({graphics:mask_5_graphics_96,x:143.1,y:223.4}).wait(1).to({graphics:mask_5_graphics_97,x:143.1,y:224.4}).wait(1).to({graphics:mask_5_graphics_98,x:143.1,y:225.3}).wait(1).to({graphics:mask_5_graphics_99,x:143.1,y:226.3}).wait(1).to({graphics:mask_5_graphics_100,x:143.1,y:227.3}).wait(1).to({graphics:mask_5_graphics_101,x:143.1,y:228.2}).wait(1).to({graphics:mask_5_graphics_102,x:143.1,y:229.2}).wait(1).to({graphics:mask_5_graphics_103,x:143.1,y:230.2}).wait(1).to({graphics:mask_5_graphics_104,x:143.1,y:231.1}).wait(1).to({graphics:mask_5_graphics_105,x:143.1,y:232.1}).wait(1).to({graphics:mask_5_graphics_106,x:143.1,y:233}).wait(1).to({graphics:mask_5_graphics_107,x:143.1,y:234}).wait(1).to({graphics:mask_5_graphics_108,x:143.1,y:235}).wait(1).to({graphics:mask_5_graphics_109,x:143.1,y:235.9}).wait(1).to({graphics:mask_5_graphics_110,x:143.1,y:236.9}).wait(1).to({graphics:mask_5_graphics_111,x:143.1,y:237.9}).wait(1).to({graphics:mask_5_graphics_112,x:143.1,y:238.8}).wait(1).to({graphics:mask_5_graphics_113,x:143.1,y:239.8}).wait(1).to({graphics:mask_5_graphics_114,x:143.1,y:240.7}).wait(1).to({graphics:mask_5_graphics_115,x:143.1,y:241.7}).wait(1).to({graphics:mask_5_graphics_116,x:143.1,y:242.7}).wait(1).to({graphics:mask_5_graphics_117,x:143.1,y:243.6}).wait(1).to({graphics:mask_5_graphics_118,x:143.1,y:244.6}).wait(1).to({graphics:mask_5_graphics_119,x:143.1,y:245.5}).wait(1).to({graphics:mask_5_graphics_120,x:143.1,y:246.5}).wait(1).to({graphics:mask_5_graphics_121,x:143.1,y:247.5}).wait(1).to({graphics:mask_5_graphics_122,x:143.1,y:248.4}).wait(1).to({graphics:mask_5_graphics_123,x:143.1,y:249.4}).wait(1).to({graphics:mask_5_graphics_124,x:143.1,y:250.4}).wait(1).to({graphics:mask_5_graphics_125,x:143.1,y:251.3}).wait(1).to({graphics:mask_5_graphics_126,x:143.1,y:252.3}).wait(1).to({graphics:mask_5_graphics_127,x:143.1,y:253.2}).wait(1).to({graphics:mask_5_graphics_128,x:143.1,y:254.2}).wait(1).to({graphics:mask_5_graphics_129,x:143.1,y:255.2}).wait(1).to({graphics:mask_5_graphics_130,x:143.1,y:256.1}).wait(1).to({graphics:mask_5_graphics_131,x:143.1,y:257.1}).wait(1).to({graphics:mask_5_graphics_132,x:143.1,y:258.1}).wait(1).to({graphics:mask_5_graphics_133,x:143.1,y:259}).wait(1).to({graphics:mask_5_graphics_134,x:143.1,y:260}).wait(1).to({graphics:mask_5_graphics_135,x:143.1,y:260.9}).wait(1).to({graphics:mask_5_graphics_136,x:143.1,y:261.9}).wait(1).to({graphics:mask_5_graphics_137,x:143.1,y:262.9}).wait(1).to({graphics:mask_5_graphics_138,x:143.1,y:263.8}).wait(1).to({graphics:mask_5_graphics_139,x:143.1,y:264.8}).wait(1).to({graphics:mask_5_graphics_140,x:143.1,y:265.8}).wait(1).to({graphics:mask_5_graphics_141,x:143.1,y:266.7}).wait(1).to({graphics:mask_5_graphics_142,x:143.1,y:267.7}).wait(1).to({graphics:mask_5_graphics_143,x:143.1,y:268.7}).wait(1).to({graphics:mask_5_graphics_144,x:143.1,y:269.6}).wait(1).to({graphics:mask_5_graphics_145,x:143.1,y:270.6}).wait(1).to({graphics:mask_5_graphics_146,x:143.1,y:271.5}).wait(1).to({graphics:mask_5_graphics_147,x:143.1,y:272.5}).wait(1).to({graphics:mask_5_graphics_148,x:143.1,y:273.5}).wait(1).to({graphics:mask_5_graphics_149,x:143.1,y:274.4}).wait(1).to({graphics:mask_5_graphics_150,x:143.1,y:275.4}).wait(1).to({graphics:mask_5_graphics_151,x:143.1,y:276.4}).wait(1).to({graphics:mask_5_graphics_152,x:143.1,y:277.3}).wait(1).to({graphics:mask_5_graphics_153,x:143.1,y:278.3}).wait(1).to({graphics:mask_5_graphics_154,x:143.1,y:279.2}).wait(1).to({graphics:mask_5_graphics_155,x:143.1,y:280.2}).wait(1).to({graphics:mask_5_graphics_156,x:143.1,y:281.2}).wait(1).to({graphics:mask_5_graphics_157,x:143.1,y:282.1}).wait(1).to({graphics:mask_5_graphics_158,x:143.1,y:283.1}).wait(1).to({graphics:mask_5_graphics_159,x:143.1,y:284.1}).wait(1).to({graphics:mask_5_graphics_160,x:143.1,y:285}).wait(1).to({graphics:mask_5_graphics_161,x:124.5,y:195.5}).wait(544));

	// Layer 4
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(20,1,1).p("AXTtBQibmvlUgrQmeg2j8DEQgRAOgEADQh0BhhbB1QhKBghBBkQhSB8hJB+QhFB3hCB4Qg6Bpg5BqQg7Bsg5BuQhECFhACFQg1Bvg0BsQg0Btg1BuQg8B8hPBxQhWB8itA2QiGArg6gt");
	this.shape_10.setTransform(230.1,275);
	this.shape_10._off = true;

	var maskedShapeInstanceList = [this.shape_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(65).to({_off:false},0).to({_off:true},603).wait(37));

	// Layer 3 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_9 = new cjs.Graphics().p("AFlelQsEgBoiolMApXgpKQIiIlgCMDQgCMHolIiQohIfsAAAIgJAAg");
	var mask_6_graphics_10 = new cjs.Graphics().p("AuoWZMAokgp9QItIaANMDQANMGoaItQoaIssGAMIgnABQrrAAofoMg");
	var mask_6_graphics_11 = new cjs.Graphics().p("AuNWyMAnvgqwQI3IPAcMDQAcMGoPI3QoPI3sFAbQgpACgoAAQrRAAoZnzg");
	var mask_6_graphics_12 = new cjs.Graphics().p("AtzXKMAm6grhQJBIEArMEQArMEoEJBQoEJCsEAqQg9ADg8AAQq4AAoUnbg");
	var mask_6_graphics_13 = new cjs.Graphics().p("AtYXiMAmDgsRQJLH5A6MCQA7MEn5JLQn5JLsDA5QhRAGhPAAQqgAAoOnDg");
	var mask_6_graphics_14 = new cjs.Graphics().p("As8X5MAlLgtAQJVHtBJMBQBJMDntJVQntJVsCBIQhlAKhiAAQqJAAoGmtg");
	var mask_6_graphics_15 = new cjs.Graphics().p("AsgYQMAkSgtuQJfHhBYMAQBYMBnhJeQnhJfsBBXQh5AOh0AAQpyAAn/mWg");
	var mask_6_graphics_16 = new cjs.Graphics().p("AsEYmMAjZgubQJoHWBnL9QBoL/nWJoQnVJor/BmQiMATiGAAQpcAAn4mAg");
	var mask_6_graphics_17 = new cjs.Graphics().p("ArnY8MAifgvHQJxHJB2L8QB2L9nJJxQnKJxr9B1QieAYiYAAQpHAAnvlqg");
	var mask_6_graphics_18 = new cjs.Graphics().p("ArKZRMAhkgvyQJ6G9CFL6QCFL6m9J6Qm+J6r6CEQixAfipAAQoyAAnnlWg");
	var mask_6_graphics_19 = new cjs.Graphics().p("AqsZlMAgogwbQKCGxCUL3QCUL3mxKDQmxKCr4CTQjCAmi7AAQoeAAndlCg");
	var mask_6_graphics_20 = new cjs.Graphics().p("AqOZ5MAfrgxDQKLGkCjL0QCjL0mlKLQmkKLr1ChQjUAujMAAQoKAAnUkug");
	var mask_6_graphics_21 = new cjs.Graphics().p("ApxaLMAexgxoQKSGYCxLwQCxLymYKSQmYKTryCwQjlA2jcAAQn3AAnLkdg");
	var mask_6_graphics_22 = new cjs.Graphics().p("ApUadMAd2gyNQKaGMC+LtQC/LumLKaQmMKarvC+Qj1A/jrAAQnmAAnBkLg");
	var mask_6_graphics_23 = new cjs.Graphics().p("Ao2avMAc5gyxQKiF/DMLqQDNLrl/KhQl/KhrrDMQkFBIj8AAQnUAAm2j5g");
	var mask_6_graphics_24 = new cjs.Graphics().p("AoYa/MAb9gzSQKoFyDbLmQDbLnlzKoQlzKprnDZQkUBSkMAAQnCAAmsjpg");
	var mask_6_graphics_25 = new cjs.Graphics().p("An5bQMAa/gz0QKvFmDoLhQDpLjlmKvQlmKwrjDnQkjBckcAAQmxAAmgjYg");
	var mask_6_graphics_26 = new cjs.Graphics().p("AnabgMAaAg0UQK2FZD2LdQD3LelZK2QlZK2rfD1QkyBokrAAQmhAAmUjJg");
	var mask_6_graphics_27 = new cjs.Graphics().p("Am7bvMAZCg0zQK8FMEELZQEELZlMK9QlMK8raEDQlBBzk7AAQmQAAmIi6g");
	var mask_6_graphics_28 = new cjs.Graphics().p("Amcb9MAYDg1QQLDE/ERLUQESLUk/LDQk/LCrVERQlPB/lLAAQmAAAl8isg");
	var mask_6_graphics_29 = new cjs.Graphics().p("Al8cLMAXDg1sQLIEyEfLOQEgLPkyLJQkyLIrQEeQldCMlbAAQlvAAlvieg");
	var mask_6_graphics_30 = new cjs.Graphics().p("AlccZMAWDg2IQLOElEsLJQEtLKklLOQkkLNrLEsQlqCZlrAAQlhAAlgiQg");
	var mask_6_graphics_31 = new cjs.Graphics().p("Ak8cmMAVCg2iQLUEXE5LDQE6LFkXLTQkXLTrFE5Ql3Cnl7AAQlRAAlTiDg");
	var mask_6_graphics_32 = new cjs.Graphics().p("AkbcyMAUBg26QLYEJFHK+QFHK/kJLXQkKLZq/FGQmEC1mMAAQlAAAlFh3g");
	var mask_6_graphics_33 = new cjs.Graphics().p("Aj7c+MATAg3SQLdD8FUK3QFUK5j8LdQj8Ldq4FTQmRDEmcAAQkxAAk3hrg");
	var mask_6_graphics_34 = new cjs.Graphics().p("AjZdJMAR9g3oQLiDuFgKxQFiKyjvLhQjuLiqyFhQmcDTmuAAQkhAAknhgg");
	var mask_6_graphics_35 = new cjs.Graphics().p("Ai4dUMAQ6g3+QLnDgFtKrQFvKsjhLlQjhLnqrFtQmoDjm+AAQkRAAkZhVg");
	var mask_6_graphics_36 = new cjs.Graphics().p("AiXdeMAP4g4SQLqDTF7KjQF7KljTLqQjTLqqkF6QmzD0nQAAQkBAAkKhLg");
	var mask_6_graphics_37 = new cjs.Graphics().p("Ah1dnMAO1g4lQLuDFGHKcQGHKejELuQjFLuqeGGQm9EFnhAAQjyAAj6hBg");
	var mask_6_graphics_38 = new cjs.Graphics().p("Agbd8MAMCg5OQL3CgGnKIQGoKLigL2QigL3qKGmQnXE0oRAAQjIAAjOgsg");
	var mask_6_graphics_39 = new cjs.Graphics().p("AA+eNMAJQg5vQL+B7HGJzQHHJ1h7L9Qh7L9p0HGQnuFmpEAAQidAAiigag");
	var mask_6_graphics_40 = new cjs.Graphics().p("ACYeaMAGdg6HQMCBVHkJcQHlJehVMCQhWMDpdHjQoCGdp7AAQhvAAh0gNg");
	var mask_6_graphics_41 = new cjs.Graphics().p("AD0eiMADmg6XQMGAwIBJEQICJGgwMFQgwMGpFIAQoTHWq1AAQhAAAhCgEg");
	var mask_6_graphics_42 = new cjs.Graphics().p("AFPemMAAwg6eQMIALIcIqQIdIrgKMHQgKMHorIcQohIUr1AAIgcAAg");
	var mask_6_graphics_43 = new cjs.Graphics().p("AEk72QMHgbI3IPQI3IRAcMFQAcMHoRI3QoPI4sHAbg");
	var mask_6_graphics_44 = new cjs.Graphics().p("ADJ7tQMFhCJPHzQJRH1BBMEQBCMEn1JPQnzJRsEBCg");
	var mask_6_graphics_45 = new cjs.Graphics().p("ABu7eQMAhnJnHVQJpHXBnMBQBnL/nYJnQnVJpsABng");
	var mask_6_graphics_46 = new cjs.Graphics().p("AAT7JQL7iMJ9G3QJ/G5CML6QCML6m5J9Qm3J+r6CNg");
	var mask_6_graphics_47 = new cjs.Graphics().p("AhF6sQLxiyKSGYQKTGZCxLyQCyLymZKSQmYKTryCxg");
	var mask_6_graphics_48 = new cjs.Graphics().p("Aie6KQLojVKlF3QKmF4DWLpQDWLol5KlQl3KmrpDWg");
	var mask_6_graphics_49 = new cjs.Graphics().p("Aj15hQLdj5K2FVQK4FXD5LeQD6LdlXK2QlVK3reD6g");
	var mask_6_graphics_50 = new cjs.Graphics().p("AlL4xQLQkeLGE0QLIE0EdLRQEdLQk1LGQkzLHrREdg");
	var mask_6_graphics_51 = new cjs.Graphics().p("Amf38QLBlALUERQLWERFALCQFALBkSLVQkQLVrCE/g");
	var mask_6_graphics_52 = new cjs.Graphics().p("Aop2UQKll5LoDUQLqDUF5KmQF5KljVLoQjULpqlF5g");
	var mask_6_graphics_53 = new cjs.Graphics().p("Aqs0bQKEmwL2CWQL5CWGwKEQGwKEiXL3QiVL4qEGwg");
	var mask_6_graphics_54 = new cjs.Graphics().p("AspySQJfnkMABXQMDBWHjJfQHkJehYMBQhVMCpfHjg");
	var mask_6_graphics_55 = new cjs.Graphics().p("Audv6QI0oVMFAXQMIAXIUI0QIUI0gYMGQgWMHo0IUg");
	var mask_6_graphics_56 = new cjs.Graphics().p("AwKtVQIHpBMEgpQMHgpJBIGQJBIHAoMFQAqMGoGJBg");
	var mask_6_graphics_57 = new cjs.Graphics().p("AxuqiQHVpqL+hpQMBhpJqHVQJqHVBpL/QBqMAnVJqg");
	var mask_6_graphics_58 = new cjs.Graphics().p("AzInjQGhqPL0ioQL1ipKOGhQKPGgCnL1QCqL0mhKPg");
	var mask_6_graphics_59 = new cjs.Graphics().p("A0XkaQFpqvLkjmQLkjnKwFpQKvFpDlLkQDnLklpKvg");
	var mask_6_graphics_60 = new cjs.Graphics().p("A1ahIQEvrLLOkiQLPkkLLEwQLLEvEiLPQEjLOkvLLg");
	var mask_6_graphics_61 = new cjs.Graphics().p("A2RCQQDzrgK0ldQK1leLhDzQLiDzFcK2QFeKzjzLhg");
	var mask_6_graphics_62 = new cjs.Graphics().p("A27FwQC1rzKVmUQKWmWLzC1QLzC2GUKWQGXKUi2Lzg");
	var mask_6_graphics_63 = new cjs.Graphics().p("A3ZJUQB3r/JxnKQJznLL/B2QL/B2HKJzQHMJxh3L/g");
	var mask_6_graphics_64 = new cjs.Graphics().p("A3qM7QA3sHJJn7QJLn+MGA3QMHA2H8JLQH+JIg3MHg");
	var mask_6_graphics_65 = new cjs.Graphics().p("AvZknQIfotMIgKQMJgJIrIfQIsIcAKMJMg6lAAuQgJsIIdoqg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_6_graphics_9,x:223,y:195.7}).wait(1).to({graphics:mask_6_graphics_10,x:223,y:195.7}).wait(1).to({graphics:mask_6_graphics_11,x:223,y:195.7}).wait(1).to({graphics:mask_6_graphics_12,x:223,y:195.7}).wait(1).to({graphics:mask_6_graphics_13,x:223,y:195.7}).wait(1).to({graphics:mask_6_graphics_14,x:223.1,y:195.8}).wait(1).to({graphics:mask_6_graphics_15,x:223.1,y:195.8}).wait(1).to({graphics:mask_6_graphics_16,x:223.1,y:195.8}).wait(1).to({graphics:mask_6_graphics_17,x:223.1,y:195.8}).wait(1).to({graphics:mask_6_graphics_18,x:223.1,y:195.9}).wait(1).to({graphics:mask_6_graphics_19,x:223.2,y:195.9}).wait(1).to({graphics:mask_6_graphics_20,x:223.2,y:195.9}).wait(1).to({graphics:mask_6_graphics_21,x:223.2,y:196}).wait(1).to({graphics:mask_6_graphics_22,x:223.3,y:196}).wait(1).to({graphics:mask_6_graphics_23,x:223.3,y:196}).wait(1).to({graphics:mask_6_graphics_24,x:223.3,y:196}).wait(1).to({graphics:mask_6_graphics_25,x:223.3,y:196}).wait(1).to({graphics:mask_6_graphics_26,x:223.3,y:196.1}).wait(1).to({graphics:mask_6_graphics_27,x:223.3,y:196.1}).wait(1).to({graphics:mask_6_graphics_28,x:223.3,y:196.1}).wait(1).to({graphics:mask_6_graphics_29,x:223.3,y:196.1}).wait(1).to({graphics:mask_6_graphics_30,x:223.4,y:196.1}).wait(1).to({graphics:mask_6_graphics_31,x:223.4,y:196.1}).wait(1).to({graphics:mask_6_graphics_32,x:223.4,y:196.1}).wait(1).to({graphics:mask_6_graphics_33,x:223.3,y:196.1}).wait(1).to({graphics:mask_6_graphics_34,x:223.3,y:196.1}).wait(1).to({graphics:mask_6_graphics_35,x:223.3,y:196.1}).wait(1).to({graphics:mask_6_graphics_36,x:223.3,y:196.1}).wait(1).to({graphics:mask_6_graphics_37,x:223.3,y:196}).wait(1).to({graphics:mask_6_graphics_38,x:223.3,y:196}).wait(1).to({graphics:mask_6_graphics_39,x:223.2,y:195.9}).wait(1).to({graphics:mask_6_graphics_40,x:223.1,y:195.9}).wait(1).to({graphics:mask_6_graphics_41,x:223.1,y:195.8}).wait(1).to({graphics:mask_6_graphics_42,x:223.1,y:195.8}).wait(1).to({graphics:mask_6_graphics_43,x:223.1,y:195.7}).wait(1).to({graphics:mask_6_graphics_44,x:223.1,y:195.5}).wait(1).to({graphics:mask_6_graphics_45,x:223.1,y:195}).wait(1).to({graphics:mask_6_graphics_46,x:223.2,y:194.3}).wait(1).to({graphics:mask_6_graphics_47,x:223.2,y:193.3}).wait(1).to({graphics:mask_6_graphics_48,x:223.2,y:192.2}).wait(1).to({graphics:mask_6_graphics_49,x:223.2,y:190.8}).wait(1).to({graphics:mask_6_graphics_50,x:223.2,y:189.2}).wait(1).to({graphics:mask_6_graphics_51,x:223.2,y:187.4}).wait(1).to({graphics:mask_6_graphics_52,x:223.2,y:184}).wait(1).to({graphics:mask_6_graphics_53,x:223.1,y:180}).wait(1).to({graphics:mask_6_graphics_54,x:223,y:175.4}).wait(1).to({graphics:mask_6_graphics_55,x:222.9,y:170.4}).wait(1).to({graphics:mask_6_graphics_56,x:222.9,y:164.9}).wait(1).to({graphics:mask_6_graphics_57,x:223,y:158.9}).wait(1).to({graphics:mask_6_graphics_58,x:223.1,y:152.6}).wait(1).to({graphics:mask_6_graphics_59,x:223.2,y:145.9}).wait(1).to({graphics:mask_6_graphics_60,x:223.3,y:139}).wait(1).to({graphics:mask_6_graphics_61,x:223.3,y:131.7}).wait(1).to({graphics:mask_6_graphics_62,x:223.2,y:124.3}).wait(1).to({graphics:mask_6_graphics_63,x:223.1,y:116.7}).wait(1).to({graphics:mask_6_graphics_64,x:223.1,y:109}).wait(1).to({graphics:mask_6_graphics_65,x:223.2,y:103.5}).wait(640));

	// Layer 2
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(20,1,1).p("AHQjoQgfgDgdgCQlcgUjdCsQgRANgDAEQh1BghaB1QgkAvgjAw");
	this.shape_11.setTransform(279.7,167);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(20,1,1).p("ATJ0gQgegDgegCQlcgUjdCsQgSAOgDADQh1BhhaB1QggAqgfArQgEAFgDAFQgkAygiAzQhSB8hJB+QhFB3hBB4Qg6Bpg6BqQg7Bsg4BuQhECFhACFQg1Bvg0BsQg1Btg1BuQg8B8hPBxQhVB8itA2QiGArg6gt");
	this.shape_12.setTransform(203.6,275);

	var maskedShapeInstanceList = [this.shape_11,this.shape_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_11}]},9).to({state:[{t:this.shape_12}]},11).to({state:[]},648).wait(37));

	// Letter
	this.instance_4 = new lib.D("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(275,275);
	this.instance_4.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(705));

	// Background
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_13.setTransform(275,275,3.373,2.543);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_14.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13}]}).wait(705));

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