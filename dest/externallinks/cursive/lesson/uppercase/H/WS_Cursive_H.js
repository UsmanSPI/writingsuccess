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


(lib.H = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aq0XMQAAhDB2jRQB8jWAFhnQjTgXizhMQjRhVh5iJIm8PCQglBJhVAAQiPAAAAiEIALg+MAPTggZIAHhcQgBjThciTQhsiujEAAQisAlhRAAQjWAAAAhpQAAhRCVhMQBogzDWAAQCrAACBBBQB8A+BSBxQBMBqAnCTQAlCMAACkQAACagaA+IjeHfQDIAhDADEQClCsBSDYQC8m8G2tkIC9lHQBwijB5htQCKh5CehCQCuhDDLAAQF7AAAAChQAACPiEAAIjygcQiKAAiBAwQh2AthoBUQi9CYh+EIIqIUhQDshRCWiIQBuhnCdjvQAthLBGAAQCQAAAACLIgWA+QhSCYhuCBQhtB/iFBfQiGBjiZA+QidA+ilAWIlDKYQglBMhVAAQiPAAAAiHgAn1JWQj6mHihAAQhoAAABBzQgBBxDTBUQCQA5CgAWIAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-187.5,-161.8,375,323.8);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-94.4,guide:{path:[-47.9,-29.4,-30.4,37.2,47,28.6]}},59).wait(1));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AlhCZICwlVIBHAkIixFVg");
	var mask_graphics_1 = new cjs.Graphics().p("AiDCUICwlVIBXAtIiwFVg");
	var mask_graphics_2 = new cjs.Graphics().p("AiLCQICvlVIBoA2IivFVg");
	var mask_graphics_3 = new cjs.Graphics().p("AiUCMICwlVIB5A+IivFVg");
	var mask_graphics_4 = new cjs.Graphics().p("AicCHICvlVICLBIIiwFVg");
	var mask_graphics_5 = new cjs.Graphics().p("AilCDICvlVICcBQIivFVg");
	var mask_graphics_6 = new cjs.Graphics().p("AiuB+ICwlVICtBZIiwFWg");
	var mask_graphics_7 = new cjs.Graphics().p("Ai2B6ICwlVIC9BiIiwFVg");
	var mask_graphics_8 = new cjs.Graphics().p("Ai/B1ICxlVIDOBrIixFWg");
	var mask_graphics_9 = new cjs.Graphics().p("AjHBxICwlVIDfB0IiwFVg");
	var mask_graphics_10 = new cjs.Graphics().p("AjQBtICxlVIDwB8IixFVg");
	var mask_graphics_11 = new cjs.Graphics().p("AjYBoICwlVIEBCGIiwFVg");
	var mask_graphics_12 = new cjs.Graphics().p("AjhBkICwlVIETCOIiwFVg");
	var mask_graphics_13 = new cjs.Graphics().p("AjqBfICxlVIEkCYIixFVg");
	var mask_graphics_14 = new cjs.Graphics().p("AjyBbICwlVIE1CgIiwFVg");
	var mask_graphics_15 = new cjs.Graphics().p("Aj7BWICxlVIFGCqIiwFVg");
	var mask_graphics_16 = new cjs.Graphics().p("AkDBSICwlVIFYCyIixFVg");
	var mask_graphics_17 = new cjs.Graphics().p("AkMBOICxlVIFoC6IixFVg");
	var mask_graphics_18 = new cjs.Graphics().p("AkUBJICwlVIF5DEIiwFVg");
	var mask_graphics_19 = new cjs.Graphics().p("AkdBFICwlVIGLDMIiwFVg");
	var mask_graphics_20 = new cjs.Graphics().p("AkmBAICxlVIGcDWIixFVg");
	var mask_graphics_21 = new cjs.Graphics().p("AkuA8ICwlVIGtDeIiwFVg");
	var mask_graphics_22 = new cjs.Graphics().p("Ak3A3ICxlVIG+DoIixFVg");
	var mask_graphics_23 = new cjs.Graphics().p("Ak/AzICwlVIHPDwIiwFVg");
	var mask_graphics_24 = new cjs.Graphics().p("AlIAvICxlVIHgD4IiwFVg");
	var mask_graphics_25 = new cjs.Graphics().p("AlRAqICxlVIHyECIixFVg");
	var mask_graphics_26 = new cjs.Graphics().p("AlZAmICwlVIIDEKIiwFVg");
	var mask_graphics_27 = new cjs.Graphics().p("AliAhICxlVIIUEUIixFVg");
	var mask_graphics_28 = new cjs.Graphics().p("AlqAdICwlVIImEcIixFVg");
	var mask_graphics_29 = new cjs.Graphics().p("AlzAYICxlVII2EmIixFVg");
	var mask_graphics_30 = new cjs.Graphics().p("Al8AUICxlVIJIEuIixFVg");
	var mask_graphics_31 = new cjs.Graphics().p("AmEAPICwlVIJZE4IiwFVg");
	var mask_graphics_32 = new cjs.Graphics().p("AmNALICwlVIJrFAIiwFVg");
	var mask_graphics_33 = new cjs.Graphics().p("AmWAHICxlVIJ8FIIixFVg");
	var mask_graphics_34 = new cjs.Graphics().p("AmeACICwlVIKNFSIixFVg");
	var mask_graphics_35 = new cjs.Graphics().p("AmngBICxlWIKeFZIixFWg");
	var mask_graphics_36 = new cjs.Graphics().p("AmvgGICwlWIKvFjIiwFWg");
	var mask_graphics_37 = new cjs.Graphics().p("Am4gKICxlWILAFrIixFWg");
	var mask_graphics_38 = new cjs.Graphics().p("AnBgPICxlWILRF1IiwFWg");
	var mask_graphics_39 = new cjs.Graphics().p("AnJgTICwlWILjF9IiwFWg");
	var mask_graphics_40 = new cjs.Graphics().p("AnSgXICxlWIL0GGIixFVg");
	var mask_graphics_41 = new cjs.Graphics().p("AnagcICwlWIMFGPIiwFWg");
	var mask_graphics_42 = new cjs.Graphics().p("AnjggICxlWIMWGXIixFXg");
	var mask_graphics_43 = new cjs.Graphics().p("AnrglICwlWIMnGhIiwFWg");
	var mask_graphics_44 = new cjs.Graphics().p("An0gpICxlWIM4GpIixFWg");
	var mask_graphics_45 = new cjs.Graphics().p("An9guICxlWINJGzIiwFWg");
	var mask_graphics_46 = new cjs.Graphics().p("AoFgyICwlWINbG7IixFWg");
	var mask_graphics_47 = new cjs.Graphics().p("AoOg2ICxlWINrHEIiwFWg");
	var mask_graphics_48 = new cjs.Graphics().p("AoWg7ICwlWIN9HNIiwFWg");
	var mask_graphics_49 = new cjs.Graphics().p("Aofg/ICxlWIOOHWIixFWg");
	var mask_graphics_50 = new cjs.Graphics().p("AonhEICwlWIOfHfIiwFWg");
	var mask_graphics_51 = new cjs.Graphics().p("AowhIICwlWIOxHnIiwFWg");
	var mask_graphics_52 = new cjs.Graphics().p("Ao5hNICxlWIPCHxIixFWg");
	var mask_graphics_53 = new cjs.Graphics().p("ApBhRICwlWIPTH5IiwFWg");
	var mask_graphics_54 = new cjs.Graphics().p("ApKhVICxlWIPkICIixFWg");
	var mask_graphics_55 = new cjs.Graphics().p("ApShaICwlWIP1ILIiwFWg");
	var mask_graphics_56 = new cjs.Graphics().p("ApbheICxlWIQGIUIixFWg");
	var mask_graphics_57 = new cjs.Graphics().p("ApjhjICwlWIQXIdIiwFWg");
	var mask_graphics_58 = new cjs.Graphics().p("ApshnICwlWIQpIlIixFWg");
	var mask_graphics_59 = new cjs.Graphics().p("Ap1hsICxlWIQ6IvIixFWg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-35.4,y:-17.5}).wait(1).to({graphics:mask_graphics_1,x:-57.7,y:-17}).wait(1).to({graphics:mask_graphics_2,x:-56.8,y:-16.6}).wait(1).to({graphics:mask_graphics_3,x:-55.9,y:-16.1}).wait(1).to({graphics:mask_graphics_4,x:-55.1,y:-15.7}).wait(1).to({graphics:mask_graphics_5,x:-54.2,y:-15.2}).wait(1).to({graphics:mask_graphics_6,x:-53.4,y:-14.8}).wait(1).to({graphics:mask_graphics_7,x:-52.5,y:-14.3}).wait(1).to({graphics:mask_graphics_8,x:-51.7,y:-13.9}).wait(1).to({graphics:mask_graphics_9,x:-50.8,y:-13.4}).wait(1).to({graphics:mask_graphics_10,x:-49.9,y:-13}).wait(1).to({graphics:mask_graphics_11,x:-49.1,y:-12.6}).wait(1).to({graphics:mask_graphics_12,x:-48.2,y:-12.1}).wait(1).to({graphics:mask_graphics_13,x:-47.4,y:-11.7}).wait(1).to({graphics:mask_graphics_14,x:-46.5,y:-11.2}).wait(1).to({graphics:mask_graphics_15,x:-45.6,y:-10.8}).wait(1).to({graphics:mask_graphics_16,x:-44.8,y:-10.3}).wait(1).to({graphics:mask_graphics_17,x:-43.9,y:-9.9}).wait(1).to({graphics:mask_graphics_18,x:-43.1,y:-9.5}).wait(1).to({graphics:mask_graphics_19,x:-42.2,y:-9}).wait(1).to({graphics:mask_graphics_20,x:-41.4,y:-8.6}).wait(1).to({graphics:mask_graphics_21,x:-40.5,y:-8.1}).wait(1).to({graphics:mask_graphics_22,x:-39.6,y:-7.7}).wait(1).to({graphics:mask_graphics_23,x:-38.8,y:-7.2}).wait(1).to({graphics:mask_graphics_24,x:-37.9,y:-6.8}).wait(1).to({graphics:mask_graphics_25,x:-37.1,y:-6.4}).wait(1).to({graphics:mask_graphics_26,x:-36.2,y:-5.9}).wait(1).to({graphics:mask_graphics_27,x:-35.4,y:-5.5}).wait(1).to({graphics:mask_graphics_28,x:-34.5,y:-5}).wait(1).to({graphics:mask_graphics_29,x:-33.6,y:-4.6}).wait(1).to({graphics:mask_graphics_30,x:-32.8,y:-4.2}).wait(1).to({graphics:mask_graphics_31,x:-32,y:-3.7}).wait(1).to({graphics:mask_graphics_32,x:-31.1,y:-3.3}).wait(1).to({graphics:mask_graphics_33,x:-30.2,y:-2.8}).wait(1).to({graphics:mask_graphics_34,x:-29.4,y:-2.4}).wait(1).to({graphics:mask_graphics_35,x:-28.5,y:-1.9}).wait(1).to({graphics:mask_graphics_36,x:-27.7,y:-1.5}).wait(1).to({graphics:mask_graphics_37,x:-26.8,y:-1.1}).wait(1).to({graphics:mask_graphics_38,x:-25.9,y:-0.6}).wait(1).to({graphics:mask_graphics_39,x:-25.1,y:-0.2}).wait(1).to({graphics:mask_graphics_40,x:-24.2,y:0.3}).wait(1).to({graphics:mask_graphics_41,x:-23.4,y:0.7}).wait(1).to({graphics:mask_graphics_42,x:-22.5,y:1.2}).wait(1).to({graphics:mask_graphics_43,x:-21.7,y:1.6}).wait(1).to({graphics:mask_graphics_44,x:-20.8,y:2}).wait(1).to({graphics:mask_graphics_45,x:-19.9,y:2.5}).wait(1).to({graphics:mask_graphics_46,x:-19.1,y:2.9}).wait(1).to({graphics:mask_graphics_47,x:-18.2,y:3.4}).wait(1).to({graphics:mask_graphics_48,x:-17.4,y:3.8}).wait(1).to({graphics:mask_graphics_49,x:-16.5,y:4.3}).wait(1).to({graphics:mask_graphics_50,x:-15.7,y:4.7}).wait(1).to({graphics:mask_graphics_51,x:-14.8,y:5.1}).wait(1).to({graphics:mask_graphics_52,x:-13.9,y:5.6}).wait(1).to({graphics:mask_graphics_53,x:-13.1,y:6}).wait(1).to({graphics:mask_graphics_54,x:-12.2,y:6.5}).wait(1).to({graphics:mask_graphics_55,x:-11.4,y:6.9}).wait(1).to({graphics:mask_graphics_56,x:-10.5,y:7.4}).wait(1).to({graphics:mask_graphics_57,x:-9.7,y:7.8}).wait(1).to({graphics:mask_graphics_58,x:-8.8,y:8.2}).wait(1).to({graphics:mask_graphics_59,x:-7.9,y:8.7}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AnfkmQCwKeMPhb");

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.3,-37.3,21.2,38.8);


(lib.ar3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(15.6,-73.6,1,1,-7.7,0,0,0.4,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.2,regY:0.2,scaleX:1,scaleY:1,rotation:48.3,guide:{path:[15.4,-72.9,25.5,-8.2,-25.4,32,-30.4,35.9,-34.8,38.9]}},74).wait(1));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A5+h5QEfrTLJkzQLJk0LREgQLSEdEzLKMg1yAXLQk0rJEfrPg");
	var mask_graphics_1 = new cjs.Graphics().p("A56iFQEprPLOkqQLMkqLNEqQLOEnEqLOMg2GAWdQkqrOEorLg");
	var mask_graphics_2 = new cjs.Graphics().p("A51iRQEzrKLRkgQLRkhLJEzQLKEyEgLRMg2ZAVuQkgrRExrIg");
	var mask_graphics_3 = new cjs.Graphics().p("A5vicQE8rGLVkXQLVkWLEE8QLGE7EWLVMg2rAU/QkWrVE7rDg");
	var mask_graphics_4 = new cjs.Graphics().p("A5pioQFGrBLZkNQLYkNLAFHQLBFEENLZMg29AUPQkNrZFFq/g");
	var mask_graphics_5 = new cjs.Graphics().p("A5jizQFQq9LckDQLckCK8FPQK8FOEDLcMg3OATgQkDrcFOq7g");
	var mask_graphics_6 = new cjs.Graphics().p("A5ci+QFZq4Lgj5QLfj5K3FZQK4FYD5LfMg3fASwQj5rgFYq2g");
	var mask_graphics_7 = new cjs.Graphics().p("A5UjIQFiq0LjjvQLijvKzFjQKzFgDvLjMg3vASAQjvrjFiqxg");
	var mask_graphics_8 = new cjs.Graphics().p("A5NjTQFsqvLmjlQLmjkKtFrQKvFqDlLmMg3+ARQQjlrmFqqtg");
	var mask_graphics_9 = new cjs.Graphics().p("A5EjdQF0qqLqjbQLojbKpF1QKqF0DaLoMg4MAQgQjbrqF0qng");
	var mask_graphics_10 = new cjs.Graphics().p("A48jnQF+qlLsjRQLsjQKjF+QKlF8DRLsMg4bAPuQjQrsF8qig");
	var mask_graphics_11 = new cjs.Graphics().p("A4yjxQGGqgLwjGQLujHKeGIQKfGFDHLuMg4oAO+QjGrvGGqdg");
	var mask_graphics_12 = new cjs.Graphics().p("A4pj7QGQqaLyi8QLwi9KZGRQKbGOC8LxMg40AONQi9ryGPqYg");
	var mask_graphics_13 = new cjs.Graphics().p("A4fkEQGZqVL0iyQLziyKUGZQKVGXCyL0Mg5BANbQiyr0GYqSg");
	var mask_graphics_14 = new cjs.Graphics().p("A4UkNQGiqQL2ioQL1inKOGiQKPGgCoL2Mg5LAMqQior3GhqMg");
	var mask_graphics_15 = new cjs.Graphics().p("A4JkWQGqqKL5ieQL4idKIGrQKJGpCeL4Mg5WAL4Qier4GqqHg");
	var mask_graphics_16 = new cjs.Graphics().p("A3+kfQG0qEL6iTQL6iUKCG0QKEGyCTL6Mg5gALHQiTr7GyqBg");
	var mask_graphics_17 = new cjs.Graphics().p("A3ykoQG8p+L9iJQL7iJJ9G9QJ9G6CJL8Mg5pAKVQiJr9G7p7g");
	var mask_graphics_18 = new cjs.Graphics().p("A3mkwQHFp4L+h/QL+h+J2HFQJ4HDB+L9Mg5xAJjQh/r+HDp1g");
	var mask_graphics_19 = new cjs.Graphics().p("A3Zk4QHNpyMAh0QL/h0JwHNQJyHMB0L/Mg56AIxQh0sAHMpvg");
	var mask_graphics_20 = new cjs.Graphics().p("A3MlAQHWpsMBhpQMBhqJqHVQJrHVBqMAMg6BAH/QhqsCHUpog");
	var mask_graphics_21 = new cjs.Graphics().p("A2+lIQHeplMDhfQMChgJjHeQJlHdBfMCMg6HAHMQhgsDHdpig");
	var mask_graphics_22 = new cjs.Graphics().p("A2wlPQHmpfMEhVQMDhVJdHmQJeHlBVMDMg6NAGaQhVsEHlpbg");
	var mask_graphics_23 = new cjs.Graphics().p("A2hlXQHupXMFhLQMEhKJWHuQJYHtBLMEMg6TAFoQhKsFHtpWg");
	var mask_graphics_24 = new cjs.Graphics().p("A2SllQH2pRMGhAQMFhAJQH2QJQH1BBMFMg6XAE2QhAsGH1pPg");
	var mask_graphics_25 = new cjs.Graphics().p("A2Dl4QH+pKMHg2QMGg2JJH/QJKH9A1MFMg6aAEDQg2sHH9pHg");
	var mask_graphics_26 = new cjs.Graphics().p("A1zmLQIGpDMIgsQMGgrJCIGQJDIFArMHMg6eADQQgrsIIFpAg");
	var mask_graphics_27 = new cjs.Graphics().p("A1jmeQIOo8MIghQMHghI7IOQI8INAhMHMg6hACdQggsIIMo5g");
	var mask_graphics_28 = new cjs.Graphics().p("A1SmxQIWo1MIgWQMHgWI0IWQI1ITAWMIMg6iABrQgWsIIUozg");
	var mask_graphics_29 = new cjs.Graphics().p("A1BnDQIdouMJgMQMIgLIsIdQItIbAMMIMg6jAA5QgLsJIborg");
	var mask_graphics_30 = new cjs.Graphics().p("A0vnVQIlonMIgBQMIgBIlIlQImIiABMJMg6jAAFQgBsIIjokg");
	var mask_graphics_31 = new cjs.Graphics().p("A9RM+QAJsJIrocQIsofMHAJQMJAKIdIsQIfIpgJMJg");
	var mask_graphics_32 = new cjs.Graphics().p("A9RMkQAUsIIyoVQIzoXMIAUQMIAUIWIzQIXIxgUMIg");
	var mask_graphics_33 = new cjs.Graphics().p("A9QMLQAesII5oNQI6oQMHAfQMIAeIOI7QIQI4geMIg");
	var mask_graphics_34 = new cjs.Graphics().p("A9QLyQApsHJAoGQJBoIMHApQMIApIGJBQIII/gpMIg");
	var mask_graphics_35 = new cjs.Graphics().p("A9PLZQAzsGJHn/QJJoAMFA0QMHAzH/JIQIAJGgzMHg");
	var mask_graphics_36 = new cjs.Graphics().p("A9OLAQA9sFJOn3QJQn4MFA+QMGA+H2JPQH4JNg9MGg");
	var mask_graphics_37 = new cjs.Graphics().p("A9NKeQBKsEJVnuQJYnuMEBKQMFBKHtJXQHvJVhKMFg");
	var mask_graphics_38 = new cjs.Graphics().p("A9MJyQBWsDJenkQJfnlMCBWQMEBWHkJfQHlJdhWMEg");
	var mask_graphics_39 = new cjs.Graphics().p("A9KJGQBisBJlnbQJmnbMCBiQMCBjHaJmQHcJkhiMDg");
	var mask_graphics_40 = new cjs.Graphics().p("A9JIaQBvr/JsnRQJunSMABvQMBBuHQJuQHSJshvMAg");
	var mask_graphics_41 = new cjs.Graphics().p("A9HHvQB7r+J0nHQJ1nIL+B7QL/B6HGJ1QHIJzh6L/g");
	var mask_graphics_42 = new cjs.Graphics().p("A9EHDQCGr8J7m8QJ8m+L8CGQL9CHG9J8QG+J6iHL9g");
	var mask_graphics_43 = new cjs.Graphics().p("A9CGYQCTr6KBmzQKEmzL6CSQL6CTGzKDQG0KBiTL7g");
	var mask_graphics_44 = new cjs.Graphics().p("A8/FsQCfr3KImoQKKmqL3CfQL5CeGoKKQGqKIifL4g");
	var mask_graphics_45 = new cjs.Graphics().p("A88FBQCqr0KPmfQKRmfL1CrQL2CqGeKRQGfKOiqL2g");
	var mask_graphics_46 = new cjs.Graphics().p("A85EWQC3ryKVmTQKXmVLyC2QLzC3GUKXQGVKVi3Lzg");
	var mask_graphics_47 = new cjs.Graphics().p("A82DrQDDrvKcmJQKdmKLvDCQLwDDGJKdQGLKbjDLwg");
	var mask_graphics_48 = new cjs.Graphics().p("A8yDBQDOrsKil/QKkmALsDPQLtDOF+KjQGAKijOLsg");
	var mask_graphics_49 = new cjs.Graphics().p("A8uCWQDaroKol0QKql1LoDaQLqDaFzKpQF2KnjaLqg");
	var mask_graphics_50 = new cjs.Graphics().p("A8qBsQDmrlKulpQKvlrLlDmQLmDmFpKvQFrKtjmLmg");
	var mask_graphics_51 = new cjs.Graphics().p("A8mBCQDyrhKzlfQK1lfLiDxQLiDyFeK0QFgKzjyLig");
	var mask_graphics_52 = new cjs.Graphics().p("A8hAYQD9reK5lTQK7lVLdD+QLeD9FTK6QFVK4j9Leg");
	var mask_graphics_53 = new cjs.Graphics().p("A8cgRQEJraK+lJQLAlJLZEJQLaEIFILAQFKK9kJLag");
	var mask_graphics_54 = new cjs.Graphics().p("A8Xg6QEUrWLDk+QLFk+LVEUQLWEUE9LFQE/LCkULWg");
	var mask_graphics_55 = new cjs.Graphics().p("A8ShkQEgrRLIkzQLKkzLQEgQLSEgEyLJQEzLIkfLRg");
	var mask_graphics_56 = new cjs.Graphics().p("A8MiNQErrNLNknQLOknLMEqQLNErEnLPQEoLMkrLNg");
	var mask_graphics_57 = new cjs.Graphics().p("A8Gi2QE2rILRkbQLUkdLHE2QLIE3EbLSQEdLRk2LIg");
	var mask_graphics_58 = new cjs.Graphics().p("A8AjeQFBrDLWkRQLYkQLCFBQLDFBEPLXQESLWlBLDg");
	var mask_graphics_59 = new cjs.Graphics().p("A76kGQFMq+LakFQLbkGK+FNQK+FMEELcQEHLZlNK+g");
	var mask_graphics_60 = new cjs.Graphics().p("A70kuQFYq5Lej5QLfj6K5FXQK4FYD5LfQD6LelXK5g");
	var mask_graphics_61 = new cjs.Graphics().p("A7tlWQFjqzLhjuQLjjuK0FiQKzFjDtLjQDvLhljK0g");
	var mask_graphics_62 = new cjs.Graphics().p("A7ml9QFtquLmjiQLmjjKuFuQKuFtDhLnQDjLlltKug");
	var mask_graphics_63 = new cjs.Graphics().p("A7fmlQF4qnLpjWQLqjXKoF4QKoF4DVLqQDYLpl4Kog");
	var mask_graphics_64 = new cjs.Graphics().p("A7XnLQGCqiLtjKQLtjLKiGCQKhGDDKLuQDMLsmDKhg");
	var mask_graphics_65 = new cjs.Graphics().p("A7QnyQGOqbLvi/QLwi/KcGNQKbGOC+LwQDALvmNKcg");
	var mask_graphics_66 = new cjs.Graphics().p("A7IoYQGYqVLyizQL0izKVGYQKVGYCyLyQC0LzmYKVg");
	var mask_graphics_67 = new cjs.Graphics().p("A7Ao+QGiqOL1inQL2inKPGiQKPGiCmL1QCoL2miKPg");
	var mask_graphics_68 = new cjs.Graphics().p("A64pjQGtqIL3ibQL5ibKIGsQKIGtCaL4QCcL4msKIg");
	var mask_graphics_69 = new cjs.Graphics().p("A6vqIQG2qBL6iPQL7iPKBG2QKCG3COL6QCQL7m3KBg");
	var mask_graphics_70 = new cjs.Graphics().p("A6nqsQHBp7L8iCQL9iEJ6HBQJ7HBCCL8QCEL9nBJ6g");
	var mask_graphics_71 = new cjs.Graphics().p("A6erRQHLpzL+h2QL/h4JzHLQJzHLB2L+QB4L/nLJzg");
	var mask_graphics_72 = new cjs.Graphics().p("A6Vr0QHVpsL/hrQMBhrJsHVQJsHUBqMAQBsMBnVJsg");
	var mask_graphics_73 = new cjs.Graphics().p("A6MsYQHfpkMBhfQMDheJkHeQJkHeBeMCQBfMCneJkg");
	var mask_graphics_74 = new cjs.Graphics().p("A6Cs7QHopcMChTQMEhSJdHnQJdHoBRMDQBUMEnoJdg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-116.7,y:-73.7}).wait(1).to({graphics:mask_graphics_1,x:-116.2,y:-74.9}).wait(1).to({graphics:mask_graphics_2,x:-115.7,y:-76.1}).wait(1).to({graphics:mask_graphics_3,x:-115.3,y:-77.2}).wait(1).to({graphics:mask_graphics_4,x:-114.8,y:-78.4}).wait(1).to({graphics:mask_graphics_5,x:-114.4,y:-79.6}).wait(1).to({graphics:mask_graphics_6,x:-114,y:-80.8}).wait(1).to({graphics:mask_graphics_7,x:-113.6,y:-82}).wait(1).to({graphics:mask_graphics_8,x:-113.2,y:-83.2}).wait(1).to({graphics:mask_graphics_9,x:-112.8,y:-84.4}).wait(1).to({graphics:mask_graphics_10,x:-112.4,y:-85.6}).wait(1).to({graphics:mask_graphics_11,x:-112.1,y:-86.9}).wait(1).to({graphics:mask_graphics_12,x:-111.8,y:-88.1}).wait(1).to({graphics:mask_graphics_13,x:-111.5,y:-89.3}).wait(1).to({graphics:mask_graphics_14,x:-111.2,y:-90.5}).wait(1).to({graphics:mask_graphics_15,x:-110.9,y:-91.7}).wait(1).to({graphics:mask_graphics_16,x:-110.6,y:-93}).wait(1).to({graphics:mask_graphics_17,x:-110.4,y:-94.2}).wait(1).to({graphics:mask_graphics_18,x:-110.2,y:-95.4}).wait(1).to({graphics:mask_graphics_19,x:-110,y:-96.7}).wait(1).to({graphics:mask_graphics_20,x:-109.8,y:-97.9}).wait(1).to({graphics:mask_graphics_21,x:-109.6,y:-99.2}).wait(1).to({graphics:mask_graphics_22,x:-109.4,y:-100.4}).wait(1).to({graphics:mask_graphics_23,x:-109.3,y:-101.7}).wait(1).to({graphics:mask_graphics_24,x:-109.2,y:-102.2}).wait(1).to({graphics:mask_graphics_25,x:-109.1,y:-102.2}).wait(1).to({graphics:mask_graphics_26,x:-109,y:-102.2}).wait(1).to({graphics:mask_graphics_27,x:-108.9,y:-102.2}).wait(1).to({graphics:mask_graphics_28,x:-108.9,y:-102.2}).wait(1).to({graphics:mask_graphics_29,x:-108.8,y:-102.2}).wait(1).to({graphics:mask_graphics_30,x:-108.8,y:-102.2}).wait(1).to({graphics:mask_graphics_31,x:-108.8,y:-102.2}).wait(1).to({graphics:mask_graphics_32,x:-108.8,y:-102.2}).wait(1).to({graphics:mask_graphics_33,x:-108.7,y:-102.2}).wait(1).to({graphics:mask_graphics_34,x:-108.7,y:-102.2}).wait(1).to({graphics:mask_graphics_35,x:-108.6,y:-102.2}).wait(1).to({graphics:mask_graphics_36,x:-108.5,y:-102.2}).wait(1).to({graphics:mask_graphics_37,x:-108.4,y:-101.7}).wait(1).to({graphics:mask_graphics_38,x:-108.2,y:-100.3}).wait(1).to({graphics:mask_graphics_39,x:-108.1,y:-98.8}).wait(1).to({graphics:mask_graphics_40,x:-107.9,y:-97.4}).wait(1).to({graphics:mask_graphics_41,x:-107.6,y:-95.9}).wait(1).to({graphics:mask_graphics_42,x:-107.4,y:-94.5}).wait(1).to({graphics:mask_graphics_43,x:-107.1,y:-93}).wait(1).to({graphics:mask_graphics_44,x:-106.8,y:-91.6}).wait(1).to({graphics:mask_graphics_45,x:-106.5,y:-90.2}).wait(1).to({graphics:mask_graphics_46,x:-106.1,y:-88.8}).wait(1).to({graphics:mask_graphics_47,x:-105.7,y:-87.3}).wait(1).to({graphics:mask_graphics_48,x:-105.4,y:-85.9}).wait(1).to({graphics:mask_graphics_49,x:-104.9,y:-84.5}).wait(1).to({graphics:mask_graphics_50,x:-104.5,y:-83.1}).wait(1).to({graphics:mask_graphics_51,x:-104.1,y:-81.7}).wait(1).to({graphics:mask_graphics_52,x:-103.6,y:-80.3}).wait(1).to({graphics:mask_graphics_53,x:-103.1,y:-78.9}).wait(1).to({graphics:mask_graphics_54,x:-102.6,y:-77.6}).wait(1).to({graphics:mask_graphics_55,x:-102,y:-76.2}).wait(1).to({graphics:mask_graphics_56,x:-101.5,y:-74.8}).wait(1).to({graphics:mask_graphics_57,x:-100.9,y:-73.5}).wait(1).to({graphics:mask_graphics_58,x:-100.3,y:-72.1}).wait(1).to({graphics:mask_graphics_59,x:-99.7,y:-70.8}).wait(1).to({graphics:mask_graphics_60,x:-99.1,y:-69.4}).wait(1).to({graphics:mask_graphics_61,x:-98.4,y:-68.1}).wait(1).to({graphics:mask_graphics_62,x:-97.8,y:-66.8}).wait(1).to({graphics:mask_graphics_63,x:-97.1,y:-65.5}).wait(1).to({graphics:mask_graphics_64,x:-96.4,y:-64.2}).wait(1).to({graphics:mask_graphics_65,x:-95.6,y:-62.9}).wait(1).to({graphics:mask_graphics_66,x:-94.9,y:-61.6}).wait(1).to({graphics:mask_graphics_67,x:-94.1,y:-60.3}).wait(1).to({graphics:mask_graphics_68,x:-93.3,y:-59.1}).wait(1).to({graphics:mask_graphics_69,x:-92.5,y:-57.8}).wait(1).to({graphics:mask_graphics_70,x:-91.7,y:-56.6}).wait(1).to({graphics:mask_graphics_71,x:-90.9,y:-55.4}).wait(1).to({graphics:mask_graphics_72,x:-90,y:-54.2}).wait(1).to({graphics:mask_graphics_73,x:-89.1,y:-53}).wait(1).to({graphics:mask_graphics_74,x:-88.1,y:-51.9}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AD6owQBhJ/n9GSQg0AogzAo");
	this.shape.setTransform(-9.2,-16.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.2,-77.7,64.1,120.3);


(lib.ar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-26.5,14.6,1,1,-112);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-135,guide:{path:[-26.5,14.6,2.3,4.7,33,-27]}},89).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AiggCIA+gvIBvCTIg9Aug");
	var mask_graphics_1 = new cjs.Graphics().p("AhZgvIBEg0IBvCTIhEA0g");
	var mask_graphics_2 = new cjs.Graphics().p("AhcgtIBKg4IBvCSIhKA5g");
	var mask_graphics_3 = new cjs.Graphics().p("AhggqIBRg9IBwCSIhRA9g");
	var mask_graphics_4 = new cjs.Graphics().p("AhjgoIBYhCIBuCTIhWBCg");
	var mask_graphics_5 = new cjs.Graphics().p("AhmglIBehHIBvCSIheBHg");
	var mask_graphics_6 = new cjs.Graphics().p("AhogjIBjhLIBuCSIhjBLg");
	var mask_graphics_7 = new cjs.Graphics().p("AhsghIBqhQIBvCTIhqBQg");
	var mask_graphics_8 = new cjs.Graphics().p("AhvgeIBvhVIBwCTIhwBUg");
	var mask_graphics_9 = new cjs.Graphics().p("AhygcIB1haIBwCTIh1Bag");
	var mask_graphics_10 = new cjs.Graphics().p("Ah1gaIB7heIBwCTIh7Beg");
	var mask_graphics_11 = new cjs.Graphics().p("Ah4gXICBhjIBwCSIiBBjg");
	var mask_graphics_12 = new cjs.Graphics().p("Ah7gVICHhnIBwCSIiHBog");
	var mask_graphics_13 = new cjs.Graphics().p("Ah+gSICOhtIBvCSIiOBtg");
	var mask_graphics_14 = new cjs.Graphics().p("AiBgQICThxIBxCSIiVBxg");
	var mask_graphics_15 = new cjs.Graphics().p("AiFgOICbh1IBwCSIibB1g");
	var mask_graphics_16 = new cjs.Graphics().p("AiIgMIChh6IBwCTIihB6g");
	var mask_graphics_17 = new cjs.Graphics().p("AiLgJICnh/IBwCSIinB/g");
	var mask_graphics_18 = new cjs.Graphics().p("AiOgHICtiEIBwCTIitCEg");
	var mask_graphics_19 = new cjs.Graphics().p("AiRgFICziIIBwCSIizCJg");
	var mask_graphics_20 = new cjs.Graphics().p("AiUgCIC5iNIBwCSIi5CNg");
	var mask_graphics_21 = new cjs.Graphics().p("AiXAAIC/iSIBwCTIi/CSg");
	var mask_graphics_22 = new cjs.Graphics().p("AibACIDGiWIBxCTIjGCWg");
	var mask_graphics_23 = new cjs.Graphics().p("AieAEIDMiaIBxCTIjMCag");
	var mask_graphics_24 = new cjs.Graphics().p("AihAGIDTifIBwCUIjTCfg");
	var mask_graphics_25 = new cjs.Graphics().p("AikAJIDZikIBwCUIjZCjg");
	var mask_graphics_26 = new cjs.Graphics().p("AinALIDfipIBwCUIjfCog");
	var mask_graphics_27 = new cjs.Graphics().p("AiqAOIDliuIBwCUIjlCtg");
	var mask_graphics_28 = new cjs.Graphics().p("AitAQIDriyIBwCTIjrCyg");
	var mask_graphics_29 = new cjs.Graphics().p("AiwASIDxi3IBwCUIjxC3g");
	var mask_graphics_30 = new cjs.Graphics().p("AizAVID3i8IBwCTIj3C8g");
	var mask_graphics_31 = new cjs.Graphics().p("Ai2AXID9jAIBwCTIj9DAg");
	var mask_graphics_32 = new cjs.Graphics().p("Ai5AZIEEjEIBvCTIkEDFg");
	var mask_graphics_33 = new cjs.Graphics().p("Ai8AbIEKjJIBvCUIkKDJg");
	var mask_graphics_34 = new cjs.Graphics().p("AjAAeIERjOIBwCTIkRDOg");
	var mask_graphics_35 = new cjs.Graphics().p("AjDAgIEXjTIBwCUIkXDTg");
	var mask_graphics_36 = new cjs.Graphics().p("AjGAiIEdjXIBwCTIkdDYg");
	var mask_graphics_37 = new cjs.Graphics().p("AjJAlIEjjcIBwCTIkjDdg");
	var mask_graphics_38 = new cjs.Graphics().p("AjMAnIEpjhIBwCUIkpDhg");
	var mask_graphics_39 = new cjs.Graphics().p("AjPAqIEvjmIBwCTIkvDmg");
	var mask_graphics_40 = new cjs.Graphics().p("AjSAsIE1jrIBwCUIk1Drg");
	var mask_graphics_41 = new cjs.Graphics().p("AjWAuIE9jvIBvCUIk7Dvg");
	var mask_graphics_42 = new cjs.Graphics().p("AjZAxIFCj0IBxCTIlCD0g");
	var mask_graphics_43 = new cjs.Graphics().p("AjcAzIFJj5IBwCUIlJD4g");
	var mask_graphics_44 = new cjs.Graphics().p("AjfA1IFPj9IBwCUIlPD9g");
	var mask_graphics_45 = new cjs.Graphics().p("AjiA4IFVkCIBwCTIlVECg");
	var mask_graphics_46 = new cjs.Graphics().p("AjlA6IFbkHIBwCUIlbEHg");
	var mask_graphics_47 = new cjs.Graphics().p("AjoA8IFhkLIBwCTIlhEMg");
	var mask_graphics_48 = new cjs.Graphics().p("AjrA/IFnkQIBwCTIlnEQg");
	var mask_graphics_49 = new cjs.Graphics().p("AjvBBIFukUIBxCTIluEVg");
	var mask_graphics_50 = new cjs.Graphics().p("AjyBEIF1kaIBvCUIlzEZg");
	var mask_graphics_51 = new cjs.Graphics().p("Aj1BGIF6kfIBxCUIl7Efg");
	var mask_graphics_52 = new cjs.Graphics().p("Aj4BIIGBkjIBvCUImAEjg");
	var mask_graphics_53 = new cjs.Graphics().p("Aj7BLIGHkoIBwCTImHEog");
	var mask_graphics_54 = new cjs.Graphics().p("Aj+BNIGNksIBwCTImNEtg");
	var mask_graphics_55 = new cjs.Graphics().p("AkBBQIGTkyIBwCTImTEyg");
	var mask_graphics_56 = new cjs.Graphics().p("AkEBSIGZk2IBwCTImZE2g");
	var mask_graphics_57 = new cjs.Graphics().p("AkHBUIGfk7IBwCUImfE7g");
	var mask_graphics_58 = new cjs.Graphics().p("AkLBWIGmk/IBwCUImmE/g");
	var mask_graphics_59 = new cjs.Graphics().p("AkOBZIGtlEIBvCTImsFEg");
	var mask_graphics_60 = new cjs.Graphics().p("AkRBbIGzlJIBwCUImzFIg");
	var mask_graphics_61 = new cjs.Graphics().p("AkUBdIG5lNIBwCUIm5FNg");
	var mask_graphics_62 = new cjs.Graphics().p("AkXBgIG/lSIBwCTIm/FSg");
	var mask_graphics_63 = new cjs.Graphics().p("AkaBiIHFlXIBwCUInFFXg");
	var mask_graphics_64 = new cjs.Graphics().p("AkdBlIHLlcIBwCTInLFcg");
	var mask_graphics_65 = new cjs.Graphics().p("AkgBnIHRlgIBwCTInRFgg");
	var mask_graphics_66 = new cjs.Graphics().p("AkjBpIHXllIBwCUInXFlg");
	var mask_graphics_67 = new cjs.Graphics().p("AkmBsIHdlqIBwCUIndFpg");
	var mask_graphics_68 = new cjs.Graphics().p("AkpBuIHjlvIBxCUInlFvg");
	var mask_graphics_69 = new cjs.Graphics().p("AksBwIHplzIBxCUInrFzg");
	var mask_graphics_70 = new cjs.Graphics().p("AkwBzIHxl4IBwCTInxF4g");
	var mask_graphics_71 = new cjs.Graphics().p("AkzB1IH3l8IBwCTIn3F9g");
	var mask_graphics_72 = new cjs.Graphics().p("Ak2B4IH9mCIBwCTIn9GCg");
	var mask_graphics_73 = new cjs.Graphics().p("Ak5B6IIDmGIBwCTIoDGGg");
	var mask_graphics_74 = new cjs.Graphics().p("Ak8B8IIJmLIBwCUIoJGLg");
	var mask_graphics_75 = new cjs.Graphics().p("Ak/B/IIPmQIBwCUIoPGPg");
	var mask_graphics_76 = new cjs.Graphics().p("AlCCBIIVmUIBwCTIoVGUg");
	var mask_graphics_77 = new cjs.Graphics().p("AlGCDIIcmZIBxCUIocGZg");
	var mask_graphics_78 = new cjs.Graphics().p("AlJCFIIjmdIBvCUIohGdg");
	var mask_graphics_79 = new cjs.Graphics().p("AlMCIIIpmjIBwCUIopGig");
	var mask_graphics_80 = new cjs.Graphics().p("AlPCKIIvmnIBwCUIovGng");
	var mask_graphics_81 = new cjs.Graphics().p("AlSCNII1msIBwCTIo1Gsg");
	var mask_graphics_82 = new cjs.Graphics().p("AlVCPII7mwIBwCTIo7Gwg");
	var mask_graphics_83 = new cjs.Graphics().p("AlYCRIJBm1IBwCUIpBG1g");
	var mask_graphics_84 = new cjs.Graphics().p("AlbCUIJHm6IBwCTIpHG6g");
	var mask_graphics_85 = new cjs.Graphics().p("AleCWIJNm/IBwCUIpNG/g");
	var mask_graphics_86 = new cjs.Graphics().p("AlhCYIJTnDIBwCUIpTHDg");
	var mask_graphics_87 = new cjs.Graphics().p("AlkCbIJanIIBvCTIpaHIg");
	var mask_graphics_88 = new cjs.Graphics().p("AlnCdIJfnMIBxCTIphHNg");
	var mask_graphics_89 = new cjs.Graphics().p("AlrCgIJnnSIBwCTIpnHSg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-16.1,y:14.4}).wait(1).to({graphics:mask_graphics_1,x:-23.2,y:18.9}).wait(1).to({graphics:mask_graphics_2,x:-22.9,y:18.7}).wait(1).to({graphics:mask_graphics_3,x:-22.5,y:18.5}).wait(1).to({graphics:mask_graphics_4,x:-22.2,y:18.2}).wait(1).to({graphics:mask_graphics_5,x:-21.9,y:18}).wait(1).to({graphics:mask_graphics_6,x:-21.6,y:17.7}).wait(1).to({graphics:mask_graphics_7,x:-21.3,y:17.5}).wait(1).to({graphics:mask_graphics_8,x:-21,y:17.3}).wait(1).to({graphics:mask_graphics_9,x:-20.6,y:17}).wait(1).to({graphics:mask_graphics_10,x:-20.3,y:16.8}).wait(1).to({graphics:mask_graphics_11,x:-20,y:16.5}).wait(1).to({graphics:mask_graphics_12,x:-19.7,y:16.3}).wait(1).to({graphics:mask_graphics_13,x:-19.4,y:16.1}).wait(1).to({graphics:mask_graphics_14,x:-19.1,y:15.8}).wait(1).to({graphics:mask_graphics_15,x:-18.8,y:15.6}).wait(1).to({graphics:mask_graphics_16,x:-18.5,y:15.3}).wait(1).to({graphics:mask_graphics_17,x:-18.1,y:15.1}).wait(1).to({graphics:mask_graphics_18,x:-17.8,y:14.8}).wait(1).to({graphics:mask_graphics_19,x:-17.5,y:14.6}).wait(1).to({graphics:mask_graphics_20,x:-17.2,y:14.4}).wait(1).to({graphics:mask_graphics_21,x:-16.9,y:14.1}).wait(1).to({graphics:mask_graphics_22,x:-16.5,y:13.9}).wait(1).to({graphics:mask_graphics_23,x:-16.2,y:13.6}).wait(1).to({graphics:mask_graphics_24,x:-15.9,y:13.4}).wait(1).to({graphics:mask_graphics_25,x:-15.6,y:13.2}).wait(1).to({graphics:mask_graphics_26,x:-15.3,y:12.9}).wait(1).to({graphics:mask_graphics_27,x:-15,y:12.7}).wait(1).to({graphics:mask_graphics_28,x:-14.6,y:12.4}).wait(1).to({graphics:mask_graphics_29,x:-14.3,y:12.2}).wait(1).to({graphics:mask_graphics_30,x:-14,y:12}).wait(1).to({graphics:mask_graphics_31,x:-13.7,y:11.7}).wait(1).to({graphics:mask_graphics_32,x:-13.4,y:11.5}).wait(1).to({graphics:mask_graphics_33,x:-13.1,y:11.2}).wait(1).to({graphics:mask_graphics_34,x:-12.8,y:11}).wait(1).to({graphics:mask_graphics_35,x:-12.5,y:10.7}).wait(1).to({graphics:mask_graphics_36,x:-12.1,y:10.5}).wait(1).to({graphics:mask_graphics_37,x:-11.8,y:10.3}).wait(1).to({graphics:mask_graphics_38,x:-11.5,y:10}).wait(1).to({graphics:mask_graphics_39,x:-11.2,y:9.8}).wait(1).to({graphics:mask_graphics_40,x:-10.9,y:9.5}).wait(1).to({graphics:mask_graphics_41,x:-10.5,y:9.3}).wait(1).to({graphics:mask_graphics_42,x:-10.2,y:9}).wait(1).to({graphics:mask_graphics_43,x:-9.9,y:8.8}).wait(1).to({graphics:mask_graphics_44,x:-9.6,y:8.6}).wait(1).to({graphics:mask_graphics_45,x:-9.3,y:8.3}).wait(1).to({graphics:mask_graphics_46,x:-9,y:8.1}).wait(1).to({graphics:mask_graphics_47,x:-8.7,y:7.9}).wait(1).to({graphics:mask_graphics_48,x:-8.4,y:7.6}).wait(1).to({graphics:mask_graphics_49,x:-8,y:7.4}).wait(1).to({graphics:mask_graphics_50,x:-7.7,y:7.1}).wait(1).to({graphics:mask_graphics_51,x:-7.4,y:6.9}).wait(1).to({graphics:mask_graphics_52,x:-7.1,y:6.6}).wait(1).to({graphics:mask_graphics_53,x:-6.8,y:6.4}).wait(1).to({graphics:mask_graphics_54,x:-6.4,y:6.2}).wait(1).to({graphics:mask_graphics_55,x:-6.1,y:5.9}).wait(1).to({graphics:mask_graphics_56,x:-5.8,y:5.7}).wait(1).to({graphics:mask_graphics_57,x:-5.5,y:5.4}).wait(1).to({graphics:mask_graphics_58,x:-5.2,y:5.2}).wait(1).to({graphics:mask_graphics_59,x:-4.9,y:4.9}).wait(1).to({graphics:mask_graphics_60,x:-4.6,y:4.7}).wait(1).to({graphics:mask_graphics_61,x:-4.3,y:4.5}).wait(1).to({graphics:mask_graphics_62,x:-3.9,y:4.2}).wait(1).to({graphics:mask_graphics_63,x:-3.6,y:4}).wait(1).to({graphics:mask_graphics_64,x:-3.3,y:3.7}).wait(1).to({graphics:mask_graphics_65,x:-3,y:3.5}).wait(1).to({graphics:mask_graphics_66,x:-2.7,y:3.3}).wait(1).to({graphics:mask_graphics_67,x:-2.4,y:3}).wait(1).to({graphics:mask_graphics_68,x:-2,y:2.8}).wait(1).to({graphics:mask_graphics_69,x:-1.7,y:2.5}).wait(1).to({graphics:mask_graphics_70,x:-1.4,y:2.3}).wait(1).to({graphics:mask_graphics_71,x:-1.1,y:2.1}).wait(1).to({graphics:mask_graphics_72,x:-0.8,y:1.8}).wait(1).to({graphics:mask_graphics_73,x:-0.4,y:1.6}).wait(1).to({graphics:mask_graphics_74,x:-0.1,y:1.3}).wait(1).to({graphics:mask_graphics_75,x:0.2,y:1.1}).wait(1).to({graphics:mask_graphics_76,x:0.5,y:0.8}).wait(1).to({graphics:mask_graphics_77,x:0.8,y:0.6}).wait(1).to({graphics:mask_graphics_78,x:1.1,y:0.4}).wait(1).to({graphics:mask_graphics_79,x:1.4,y:0.1}).wait(1).to({graphics:mask_graphics_80,x:1.7,y:-0.1}).wait(1).to({graphics:mask_graphics_81,x:2.1,y:-0.4}).wait(1).to({graphics:mask_graphics_82,x:2.4,y:-0.6}).wait(1).to({graphics:mask_graphics_83,x:2.7,y:-0.8}).wait(1).to({graphics:mask_graphics_84,x:3,y:-1.1}).wait(1).to({graphics:mask_graphics_85,x:3.3,y:-1.3}).wait(1).to({graphics:mask_graphics_86,x:3.6,y:-1.6}).wait(1).to({graphics:mask_graphics_87,x:4,y:-1.8}).wait(1).to({graphics:mask_graphics_88,x:4.3,y:-2}).wait(1).to({graphics:mask_graphics_89,x:4.6,y:-2.3}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AjyEMQDml5D/ie");
	this.shape.setTransform(3.4,-6.3,1,1,-167.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.1,5.3,18.3,20.7);


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
(lib.WS_Cursive_H = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_685 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(685).call(this.frame_685).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(120.9,136.1,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[120.9,136.1,129,133.8,138.3,133.5,153.6,133.2,168,139.3,182.4,145.5,190.4,157.8,198.2,169.9,200.4,184.4,202.7,199,201.4,207.2,200.2,215.4,199.2,217.9,150,319.7,100.9,421.4]}},265).wait(15).to({skewY:0,x:445.2,y:130.6},0).to({guide:{path:[445.1,130.7,388.2,119.9,347.8,169.8,330,191.9,319.2,217.9,269.7,320.7,220.1,423.4]}},150).wait(15).to({x:248.7,y:353.2},0).to({guide:{path:[248.7,353.1,247.4,349.9,246.1,346.7,239.7,330.4,230.4,315.6,221,300.6,206.9,289.9,190.1,277,171.2,286.5,168.3,287.9,166.4,290.5,158.8,301.1,163,315.2,167.2,329.4,181.1,337.5,195.1,345.6,211.3,351.1,227.4,356.5,246.4,354.6,265.3,352.7,282.6,344.1,300.1,335.4,315.6,323.3,323.5,317.1,331.6,311,347,299.5,356.8,283.3]}},150).wait(16).to({x:357.9,y:283.1},0).to({guide:{path:[357.9,283.1,347.8,221.2,289.8,196.5,235.3,173.4,179.8,193.9,125.5,213.9,89.1,259.1,50.9,306.3,-5.4,332,-61.8,357.7,-93.2,344.3,-97.6,342.4,-101.2,340.9]}},65).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(102.8,418.9,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},265).wait(15).to({_off:false,x:219.8,y:421.9},0).to({_off:true},150).wait(15).to({_off:false,x:358.8,y:282.9},0).to({_off:true},150).wait(82));

	// Layer 15
	this.instance_1 = new lib.ar1("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(325.2,372.4,1,1,0,0,0,-0.8,0.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(454).to({_off:false},0).wait(232));

	// Layer 12 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_503 = new cjs.Graphics().p("A2TCyQHdpmMChhQMChhJlHcQJmHaBiMDMg6HAHWQhisDHbpkg");
	var mask_graphics_504 = new cjs.Graphics().p("A3HDSQG6p+L8iMQL7iLJ+G6QJ/G4CML8Mg5oAKhQiLr8G5p+g");
	var mask_graphics_505 = new cjs.Graphics().p("A30D2QGWqWLzi1QLzi1KVGXQKWGUC1L0Mg49ANpQi1rzGWqVg");
	var mask_graphics_506 = new cjs.Graphics().p("A4aEdQFxqqLpjeQLnjeKqFyQKsFwDeLnMg4IAQwQjerpFxqqg");
	var mask_graphics_507 = new cjs.Graphics().p("A44FIQFLq9LbkHQLakGK+FMQK+FKEGLaMg3HATyQkGrbFLq9g");
	var mask_graphics_508 = new cjs.Graphics().p("A5OF3QEkrPLMkuQLKkuLPEmQLPEjEuLKMg18AWxQkurLEkrOg");
	var mask_graphics_509 = new cjs.Graphics().p("A5dGoQD9rdK6lVQK5lULdD9QLeD8FUK5Mg0nAZrQlUq6D8rdg");
	var mask_graphics_510 = new cjs.Graphics().p("A5kHdQDVrqKml7QKml6LpDVQLqDTF6KmMgzHAcgQl6qmDTrpg");
	var mask_graphics_511 = new cjs.Graphics().p("A5jIUQCsr0KQmfQKQmeL0CrQL1CqGeKRMgxfAfPQmeqQCqr0g");
	var mask_graphics_512 = new cjs.Graphics().p("A5aJOQCCr8J5nCQJ4nCL8CCQL9CBHCJ4MgvtAh6QnCp5CBr8g");
	var mask_graphics_513 = new cjs.Graphics().p("A5JKLQBYsDJfnjQJfnkMBBZQMDBWHkJfMgtxAkdQnkpfBXsCg");
	var mask_graphics_514 = new cjs.Graphics().p("A4wLKQAtsGJEoEQJDoEMFAuQMHAsIEJEMgrtAm5QoEpEAtsFg");
	var mask_graphics_515 = new cjs.Graphics().p("A4QMLQADsIImoiQInojMGAEQMIABIiInMgpgApOQojomADsHg");
	var mask_graphics_516 = new cjs.Graphics().p("A3oNPQgosIIIo/QIIpAMFgnQMGgpJAIIMgnLArcQpAoIgosFg");
	var mask_graphics_517 = new cjs.Graphics().p("A25OUQhSsEHnpbQHopbMChSQMDhTJbHoMgkvAtgQpcnnhSsCg");
	var mask_graphics_518 = new cjs.Graphics().p("A2CPaQh8r+HFp0QHGp2L8h7QL9h9J2HGMgiNAvcQp1nGh8r8g");
	var mask_graphics_519 = new cjs.Graphics().p("A1FQiQimr2GjqMQGiqNL1ilQL1inKNGjMgfjAxPQqNmjimr0g");
	var mask_graphics_520 = new cjs.Graphics().p("A0SRZQjFruGHqdQGIqeLtjEQLtjGKeGIMgdfAyfQqemHjFrtg");
	var mask_graphics_521 = new cjs.Graphics().p("AzbSRQjkrmFsqsQFrquLljiQLkjlKtFrMgbYAzrQqtlrjkrkg");
	var mask_graphics_522 = new cjs.Graphics().p("AygTJQkCrcFOq7QFPq7LbkBQLakEK8FPMgZOA0xQq8lPkCrag");
	var mask_graphics_523 = new cjs.Graphics().p("AxhUCQkhrREyrIQExrJLQkfQLOkhLJExMgXBA1xQrJkykfrOg");
	var mask_graphics_524 = new cjs.Graphics().p("AwfU7Qk+rEEUrVQETrVLEk8QLBk/LWEUMgUyA2qQrVkTk9rCg");
	var mask_graphics_525 = new cjs.Graphics().p("AvaV0Qlbq3D2rfQD1rgK2lZQK0lcLgD2MgShA3fQrej2lbq0g");
	var mask_graphics_526 = new cjs.Graphics().p("AuRWtQl3qoDXrpQDXrpKnl1QKll4LpDXMgQNA4MQrojXl3qlg");
	var mask_graphics_527 = new cjs.Graphics().p("AtEXmQmTqYC3rxQC4rxKXmSQKVmTLyC4MgN4A40Qrwi4mSqVg");
	var mask_graphics_528 = new cjs.Graphics().p("Ar1YfQmuqGCYr5QCZr4KGmsQKEmvL4CZMgLgA5WQr4iZmtqEg");
	var mask_graphics_529 = new cjs.Graphics().p("AqjZYQnIp0B5r/QB5r9J0nHQJxnJL+B5MgJIA5yQr9h5nIpyg");
	var mask_graphics_530 = new cjs.Graphics().p("ApNaQQnipgBZsDQBZsCJgngQJenjMDBaMgGvA6GQsChZngpfg");
	var mask_graphics_531 = new cjs.Graphics().p("An1bIQn7pMA5sGQA5sEJMn6QJKn7MFA6MgEUA6VQsGg6n4pKg");
	var mask_graphics_532 = new cjs.Graphics().p("AmbcAQoTo3AasHQAZsHI2oRQI0oTMIAaMgB6A6dQsIgZoQo1g");
	var mask_graphics_533 = new cjs.Graphics().p("AlPc3QopohgHsHQgHsHIgooQIeoqMIgHMAAgA6fIgTABQr7AAohoYg");
	var mask_graphics_534 = new cjs.Graphics().p("Ak9dsQo/oJgnsHQgnsGIJo+QIGpAMHgnMAC7A6bQg2ADg1AAQrEAAoVnjg");
	var mask_graphics_535 = new cjs.Graphics().p("AkpeeQpVnxhGsEQhHsEHxpTQHvpVMDhGMAFWA6PQhhAJheAAQqQAAoImxg");
	var mask_graphics_536 = new cjs.Graphics().p("AkTfOQponYhnsBQhnsAHYpnQHWpoMAhnMAHvA5+QiJATiFAAQphAAn4mCg");
	var mask_graphics_537 = new cjs.Graphics().p("Aj6f7Qp8m9iGr9QiHr8G+p5QG8p7L7iHMAKJA5nQiyAfiqAAQo0AAnllVg");
	var mask_graphics_538 = new cjs.Graphics().p("EgDgAgmQqOmjilr2Qimr2GjqLQGiqNL1imMAMgA5JQjYAvjOAAQoJAAnSkrg");
	var mask_graphics_539 = new cjs.Graphics().p("EgDEAhOQqemIjFruQjFruGIqcQGGqeLtjFMAO3A4lQj8BCjyAAQnhAAm7kEg");
	var mask_graphics_540 = new cjs.Graphics().p("EgCvAhoQqpl0jbroQjarpF1qnQFyqoLojbMAQeA4IQkUBRkLAAQnFAAmrjqg");
	var mask_graphics_541 = new cjs.Graphics().p("EgCZAiBQq0lhjvrhQjwriFhqxQFfqzLhjwMASEA3oQkrBhkjAAQmrAAmZjRg");
	var mask_graphics_542 = new cjs.Graphics().p("EgCCAiZQq9lNkFrbQkFraFNq7QFMq9LZkEMATqA3FQlCByk7AAQmSAAmGi5g");
	var mask_graphics_543 = new cjs.Graphics().p("EgBqAivQrHk5kZrSQkarTE5rEQE3rGLTkZMAVNA2fQlXCFlUAAQl4AAlzijg");
	var mask_graphics_544 = new cjs.Graphics().p("EgBSAjEQrPkkkurLQkurKElrNQEirOLLkuMAWwA13QlsCZlsAAQlgAAlfiOg");
	var mask_graphics_545 = new cjs.Graphics().p("EgA4AjXQrXkPlCrBQlDrCEQrUQEOrXLBlCMAYSA1LQl/CvmGAAQlGAAlKh7g");
	var mask_graphics_546 = new cjs.Graphics().p("EgAeAjpQrej6lWq4QlXq4D7rcQD5rdK4lXMAZzA0dQmTDGmfAAQkuAAk0hpg");
	var mask_graphics_547 = new cjs.Graphics().p("EgACAj6QrmjllqquQlqqtDmrjQDkrlKtlqMAbTAzsQmlDem5AAQkVAAkdhYg");
	var mask_graphics_548 = new cjs.Graphics().p("EAAZAkJQrrjQl9qiQl+qjDRrrQDOrpKjl+MAcwAy5Qm1D3nUAAQj9AAkGhJg");
	var mask_graphics_549 = new cjs.Graphics().p("EAA2AkXQrwi6mRqYQmRqYC7rvQC5rwKYmQMAeMAyCQnFESnvAAQjlAAjtg7g");
	var mask_graphics_550 = new cjs.Graphics().p("EABTAkjQr1ikmjqMQmkqMCmr1QCjr0KMmjMAfnAxJQnVEtoKAAQjMAAjVgug");
	var mask_graphics_551 = new cjs.Graphics().p("EAByAkuQr6iPm2p/Qm2qACQr5QCNr4KAm2MAhAAwNQniFLooAAQizAAi6gjg");
	var mask_graphics_552 = new cjs.Graphics().p("EACRAk3Qr9h4nIpzQnIpzB5r8QB4r9JynIMAiYAvQQnvFppGAAQiaAAifgag");
	var mask_graphics_553 = new cjs.Graphics().p("EACxAk/QsBhinZpmQnaplBksAQBhr/JlnaMAjuAuPQn8GIplAAQiAAAiDgRg");
	var mask_graphics_554 = new cjs.Graphics().p("EADRAlFQsDhNnrpXQnrpXBOsDQBLsBJYnrMAlBAtLQoHGpqGAAQhlAAhngKg");
	var mask_graphics_555 = new cjs.Graphics().p("EADsAlJQsEg6n5pMQn5pLA7sEQA5sEJMn5MAmFAsTQoPHFqjAAQhNAAhQgGg");
	var mask_graphics_556 = new cjs.Graphics().p("EAEIAlMQsGgooHo/QoGpAApsFQAnsEI/oHMAnHArYQoWHirAAAQg2AAg3gDg");
	var mask_graphics_557 = new cjs.Graphics().p("EAEkAlOQsGgWoVozQoUozAXsGQAUsFIzoUMAoJAqcQodIArfAAIg8gBg");
	var mask_graphics_558 = new cjs.Graphics().p("EAFAAlPQsGgDoionQohomAEsGQACsGInohMApHApfQoiIesAAAIgJAAg");
	var mask_graphics_559 = new cjs.Graphics().p("AvYdEQouoZgOsGQgQsFIZouMAqGAofQoZIvsFAPIgqAAQrsAAofoLg");
	var mask_graphics_560 = new cjs.Graphics().p("AvHdjQo6oMghsGQgisEIMo7MArCAnfQoMI7sEAhQguACguAAQrMAAoZnsg");
	var mask_graphics_561 = new cjs.Graphics().p("Au0eAQpHn+gzsFQg1sDH/pHMAr9AmdQn+JHsEA0QhHAEhFAAQquAAoRnPg");
	var mask_graphics_562 = new cjs.Graphics().p("AuhedQpTnxhFsDQhHsCHxpTMAs2AlaQnwJTsCBGQhfAIhdAAQqQABoKmzg");
	var mask_graphics_563 = new cjs.Graphics().p("AuNe4QpenihXsBQhZsAHipfMAtuAkWQniJesABYQh3AOhzAAQp1AAoBmYg");
	var mask_graphics_564 = new cjs.Graphics().p("At3fTQpqnThpr/Qhrr/HTppMAulAjPQnUJqr9BqQiPAUiJAAQpaAAn3l9g");
	var mask_graphics_565 = new cjs.Graphics().p("AthftQp0nEh8r9Qh9r8HFpzMAvZAiIQnFJ0r7B8QilAbieAAQpAAAnuljg");
	var mask_graphics_566 = new cjs.Graphics().p("EgNJAgGQp/m1iOr5QiPr5G2p+MAwMAg/Qm2J/r4CPQi7Aji0AAQonAAnilLg");
	var mask_graphics_567 = new cjs.Graphics().p("EgMwAgfQqKmnifr1Qihr1GmqJMAw9Af2QmmKKr1CgQjQAsjJAAQoPAAnWkyg");
	var mask_graphics_568 = new cjs.Graphics().p("EgMXAg2QqTmXixrxQizrxGXqTMAxsAesQmXKTrwCyQjmA2jdAAQn4AAnKkbg");
	var mask_graphics_569 = new cjs.Graphics().p("EgL8AhNQqdmHjDruQjFrsGHqcMAyaAdfQmHKdrsDEQj6BBjyAAQngAAm9kEg");
	var mask_graphics_570 = new cjs.Graphics().p("EgLhAhjQqll4jVroQjXroF4qkMAzFAcSQl3KmrnDVQkOBOkGAAQnKAAmwjvg");
	var mask_graphics_571 = new cjs.Graphics().p("EgLEAh3QqulnjnrjQjoriFnquMAzwAbFQlnKuriDnQkiBbkaAAQm0AAmhjbg");
	var mask_graphics_572 = new cjs.Graphics().p("EgKnAiLQq2lWj4reQj6rdFXq1MA0YAZ1QlXK3rcD4Qk1BpkuAAQmeAAmTjHg");
	var mask_graphics_573 = new cjs.Graphics().p("EgKIAieQq/lGkJrXQkLrXFHq9MA0+AYlQlHK/rWEJQlHB4lCAAQmJAAmDi0g");
	var mask_graphics_574 = new cjs.Graphics().p("EgJpAiwQrGk1karRQkcrQE1rFMA1iAXVQk1LGrQEbQlYCHlXAAQl0AAlziig");
	var mask_graphics_575 = new cjs.Graphics().p("EgJRAi+QrMkpkmrMQkprLEorLMA19AWYQkpLMrKEnQlmCUlmAAQllAAlmiUg");
	var mask_graphics_576 = new cjs.Graphics().p("EgI4AjKQrRkck0rGQk2rGEcrQMA2WAVaQkcLRrFE0QlyChl1AAQlWAAlZiIg");
	var mask_graphics_577 = new cjs.Graphics().p("EgIfAjWQrWkPlBrBQlCrAEPrVMA2vAUcQkQLWq/FAQl/CvmFAAQlGAAlMh8g");
	var mask_graphics_578 = new cjs.Graphics().p("EgIGAjiQrakClNq7QlPq7ECrZMA3FATcQkCLbq5FNQmLC9mVAAQk3AAk/hwg");
	var mask_graphics_579 = new cjs.Graphics().p("EgHsAjtQrfj1lZq1Qlcq0D1rfMA3cASeQj1Lfq0FaQmWDLmlAAQkoAAkxhlg");
	var mask_graphics_580 = new cjs.Graphics().p("EgHRAj3QrkjollquQloquDorjMA3wAReQjoLjqtFnQmiDam1AAQkZAAkihbg");
	var mask_graphics_581 = new cjs.Graphics().p("EgG2AkBQrojalyqpQl0qnDbrnMA4EAQeQjaLoqnFyQmtDqnGAAQkJAAkUhRg");
	var mask_graphics_582 = new cjs.Graphics().p("EgGaAkKQrsjNl+qiQmAqgDNrsMA4XAPfQjNLrqhF/Qm3D6nWAAQj7AAkEhIg");
	var mask_graphics_583 = new cjs.Graphics().p("EgF+AkTQrwjAmKqaQmMqaDArvMA4oAOdQjALwqZGKQnBELnoAAQjrAAj1g/g");
	var mask_graphics_584 = new cjs.Graphics().p("EgFiAkbQrziymWqUQmYqSCyrzMA45ANdQiyLzqSGWQnMEcn4AAQjcAAjmg3g");
	var mask_graphics_585 = new cjs.Graphics().p("EgFFAkjQr2ilmiqMQmkqMClr1MA5IAMbQilL2qLGjQnUEtoLAAQjMAAjWgvg");
	var mask_graphics_586 = new cjs.Graphics().p("EgEoAkqQr5iXmtqFQmwqECYr4MA5WALaQiYL4qDGuQneFAodAAQi8AAjGgog");
	var mask_graphics_587 = new cjs.Graphics().p("EgEKAkxQr8iKm5p9Qm7p8CKr8MA5jAKZQiKL7p8G6QnmFRovAAQitAAi1ggg");
	var mask_graphics_588 = new cjs.Graphics().p("EgDsAk3Qr+h8nEp2QnHp0B8r9MA5vAJWQh8L+p0HFQnuFkpDAAQidAAikgag");
	var mask_graphics_589 = new cjs.Graphics().p("EgDOAk8QsAhunPpuQnSprBusAMA55AIUQhuMAprHQQn3F4pWAAQiNAAiTgVg");
	var mask_graphics_590 = new cjs.Graphics().p("EgCvAlBQsChhnbplQncpjBgsCMA6DAHSQhhMCpjHbQn+GMpqAAQh8AAiCgQg");
	var mask_graphics_591 = new cjs.Graphics().p("EgCQAlFQsDhTnmpcQnnpbBSsEMA6LAGQQhTMDpbHmQoEGhp/AAQhsAAhwgMg");
	var mask_graphics_592 = new cjs.Graphics().p("EgBwAlIQsFhFnxpTQnypSBFsFMA6SAFNQhFMFpSHwQoMG2qUAAQhaAAhegJg");
	var mask_graphics_593 = new cjs.Graphics().p("EgBQAlLQsGg3n7pLQn9pJA3sGMA6XAEKQg3MGpJH8QoSHLqpAAQhJAAhMgGg");
	var mask_graphics_594 = new cjs.Graphics().p("EgAwAlNQsHgpoFpBQoIpAAqsHMA6bADHQgpMHpAIGQoXHhrBAAQg4AAg4gEg");
	var mask_graphics_595 = new cjs.Graphics().p("EgAPAlPQsIgboQo4QoRo3AbsIMA6fACEQgbMIo3IQQocH3rYAAIhLgBg");
	var mask_graphics_596 = new cjs.Graphics().p("EAARAlQQsHgNoaovQocotAOsJMA6hABCQgOMIotIaQohIOrwAAIgmAAg");
	var mask_graphics_597 = new cjs.Graphics().p("Az5csQomokAAsIMA6igACQAAMJojIkQolIlsJABIgBAAQsGAAokolg");
	var mask_graphics_598 = new cjs.Graphics().p("AzidDQovoZgOsJMA6igBFQAOMJoaIuQobIvsIAOIgoABQruAAogoOg");
	var mask_graphics_599 = new cjs.Graphics().p("AzJdaQo5oPgdsIMA6hgCIQAcMIoQI3QoRI5sIAcIhOACQrWAAoan3g");
	var mask_graphics_600 = new cjs.Graphics().p("AyxdxQpCoGgqsHMA6dgDLQAqMHoFJBQoHJDsIAqQg6ADg5AAQq+AAoWngg");
	var mask_graphics_601 = new cjs.Graphics().p("AyYeHQpMn7g4sHMA6agEOQA4MHn7JKQn9JMsGA4QhNAFhLAAQqoAAoQnKg");
	var mask_graphics_602 = new cjs.Graphics().p("Ax/ecQpVnwhFsGMA6UgFRQBGMGnwJTQnyJVsGBGQhfAIhdAAQqSAAoKm1g");
	var mask_graphics_603 = new cjs.Graphics().p("AxlexQpenlhTsFMA6OgGTQBUMEnmJcQnoJesEBTQhxANhuAAQp9AAoDmhg");
	var mask_graphics_604 = new cjs.Graphics().p("AxLfFQpmnbhisDMA6HgHWQBiMDnbJkQndJnsDBhQiCAQh/AAQpoAAn9mLg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(503).to({graphics:mask_graphics_503,x:191.5,y:156.1}).wait(1).to({graphics:mask_graphics_504,x:190.7,y:161.2}).wait(1).to({graphics:mask_graphics_505,x:189.6,y:166.2}).wait(1).to({graphics:mask_graphics_506,x:188.3,y:171.2}).wait(1).to({graphics:mask_graphics_507,x:186.6,y:176}).wait(1).to({graphics:mask_graphics_508,x:184.8,y:180.8}).wait(1).to({graphics:mask_graphics_509,x:182.6,y:185.5}).wait(1).to({graphics:mask_graphics_510,x:180.2,y:190}).wait(1).to({graphics:mask_graphics_511,x:177.6,y:194.4}).wait(1).to({graphics:mask_graphics_512,x:174.8,y:198.7}).wait(1).to({graphics:mask_graphics_513,x:171.7,y:202.8}).wait(1).to({graphics:mask_graphics_514,x:168.4,y:206.7}).wait(1).to({graphics:mask_graphics_515,x:164.8,y:210.4}).wait(1).to({graphics:mask_graphics_516,x:161.1,y:214}).wait(1).to({graphics:mask_graphics_517,x:157.2,y:217.3}).wait(1).to({graphics:mask_graphics_518,x:153.2,y:220.4}).wait(1).to({graphics:mask_graphics_519,x:148.9,y:223.3}).wait(1).to({graphics:mask_graphics_520,x:145.6,y:225.3}).wait(1).to({graphics:mask_graphics_521,x:142.2,y:227.2}).wait(1).to({graphics:mask_graphics_522,x:138.8,y:229}).wait(1).to({graphics:mask_graphics_523,x:135.2,y:230.6}).wait(1).to({graphics:mask_graphics_524,x:131.7,y:232}).wait(1).to({graphics:mask_graphics_525,x:128,y:233.4}).wait(1).to({graphics:mask_graphics_526,x:124.3,y:234.5}).wait(1).to({graphics:mask_graphics_527,x:120.6,y:235.5}).wait(1).to({graphics:mask_graphics_528,x:116.8,y:236.4}).wait(1).to({graphics:mask_graphics_529,x:113,y:237.1}).wait(1).to({graphics:mask_graphics_530,x:109.2,y:237.6}).wait(1).to({graphics:mask_graphics_531,x:105.3,y:238}).wait(1).to({graphics:mask_graphics_532,x:101.5,y:238.2}).wait(1).to({graphics:mask_graphics_533,x:99.2,y:238.3}).wait(1).to({graphics:mask_graphics_534,x:103.1,y:238.3}).wait(1).to({graphics:mask_graphics_535,x:107,y:238.3}).wait(1).to({graphics:mask_graphics_536,x:110.8,y:238.4}).wait(1).to({graphics:mask_graphics_537,x:114.7,y:238.4}).wait(1).to({graphics:mask_graphics_538,x:118.5,y:238.5}).wait(1).to({graphics:mask_graphics_539,x:122.2,y:238.6}).wait(1).to({graphics:mask_graphics_540,x:124.8,y:238.6}).wait(1).to({graphics:mask_graphics_541,x:127.3,y:238.6}).wait(1).to({graphics:mask_graphics_542,x:129.9,y:238.6}).wait(1).to({graphics:mask_graphics_543,x:132.4,y:238.6}).wait(1).to({graphics:mask_graphics_544,x:134.9,y:238.6}).wait(1).to({graphics:mask_graphics_545,x:137.3,y:238.6}).wait(1).to({graphics:mask_graphics_546,x:139.8,y:238.6}).wait(1).to({graphics:mask_graphics_547,x:142.2,y:238.6}).wait(1).to({graphics:mask_graphics_548,x:144.5,y:238.6}).wait(1).to({graphics:mask_graphics_549,x:146.8,y:238.6}).wait(1).to({graphics:mask_graphics_550,x:149.1,y:238.5}).wait(1).to({graphics:mask_graphics_551,x:151.3,y:238.5}).wait(1).to({graphics:mask_graphics_552,x:153.5,y:238.5}).wait(1).to({graphics:mask_graphics_553,x:155.7,y:238.4}).wait(1).to({graphics:mask_graphics_554,x:157.8,y:238.3}).wait(1).to({graphics:mask_graphics_555,x:159.5,y:238.3}).wait(1).to({graphics:mask_graphics_556,x:161.1,y:238.3}).wait(1).to({graphics:mask_graphics_557,x:162.8,y:238.3}).wait(1).to({graphics:mask_graphics_558,x:164.3,y:238.3}).wait(1).to({graphics:mask_graphics_559,x:165.9,y:238.3}).wait(1).to({graphics:mask_graphics_560,x:167.4,y:238.3}).wait(1).to({graphics:mask_graphics_561,x:168.9,y:238.3}).wait(1).to({graphics:mask_graphics_562,x:170.3,y:238.3}).wait(1).to({graphics:mask_graphics_563,x:171.7,y:238.4}).wait(1).to({graphics:mask_graphics_564,x:173.1,y:238.4}).wait(1).to({graphics:mask_graphics_565,x:174.4,y:238.4}).wait(1).to({graphics:mask_graphics_566,x:175.7,y:238.5}).wait(1).to({graphics:mask_graphics_567,x:176.9,y:238.5}).wait(1).to({graphics:mask_graphics_568,x:178.1,y:238.5}).wait(1).to({graphics:mask_graphics_569,x:179.2,y:238.5}).wait(1).to({graphics:mask_graphics_570,x:180.3,y:238.6}).wait(1).to({graphics:mask_graphics_571,x:181.4,y:238.6}).wait(1).to({graphics:mask_graphics_572,x:182.4,y:238.6}).wait(1).to({graphics:mask_graphics_573,x:183.4,y:238.6}).wait(1).to({graphics:mask_graphics_574,x:184.2,y:238.6}).wait(1).to({graphics:mask_graphics_575,x:184.9,y:238.6}).wait(1).to({graphics:mask_graphics_576,x:185.5,y:238.6}).wait(1).to({graphics:mask_graphics_577,x:186.2,y:238.6}).wait(1).to({graphics:mask_graphics_578,x:186.7,y:238.6}).wait(1).to({graphics:mask_graphics_579,x:187.3,y:238.6}).wait(1).to({graphics:mask_graphics_580,x:187.8,y:238.6}).wait(1).to({graphics:mask_graphics_581,x:188.3,y:238.6}).wait(1).to({graphics:mask_graphics_582,x:188.8,y:238.6}).wait(1).to({graphics:mask_graphics_583,x:189.2,y:238.6}).wait(1).to({graphics:mask_graphics_584,x:189.6,y:238.6}).wait(1).to({graphics:mask_graphics_585,x:190,y:238.6}).wait(1).to({graphics:mask_graphics_586,x:190.4,y:238.6}).wait(1).to({graphics:mask_graphics_587,x:190.7,y:238.5}).wait(1).to({graphics:mask_graphics_588,x:191,y:238.5}).wait(1).to({graphics:mask_graphics_589,x:191.2,y:238.5}).wait(1).to({graphics:mask_graphics_590,x:191.5,y:238.5}).wait(1).to({graphics:mask_graphics_591,x:191.7,y:238.5}).wait(1).to({graphics:mask_graphics_592,x:191.9,y:238.5}).wait(1).to({graphics:mask_graphics_593,x:192,y:238.5}).wait(1).to({graphics:mask_graphics_594,x:192.1,y:238.5}).wait(1).to({graphics:mask_graphics_595,x:192.2,y:238.4}).wait(1).to({graphics:mask_graphics_596,x:192.3,y:238.4}).wait(1).to({graphics:mask_graphics_597,x:192.3,y:238.5}).wait(1).to({graphics:mask_graphics_598,x:192.3,y:238.5}).wait(1).to({graphics:mask_graphics_599,x:192.3,y:238.5}).wait(1).to({graphics:mask_graphics_600,x:192.3,y:238.5}).wait(1).to({graphics:mask_graphics_601,x:192.4,y:238.5}).wait(1).to({graphics:mask_graphics_602,x:192.4,y:238.5}).wait(1).to({graphics:mask_graphics_603,x:192.4,y:238.6}).wait(1).to({graphics:mask_graphics_604,x:192.5,y:238.4}).wait(82));

	// Layer 11
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(20,1,1).p("APblYQg4BfheBuQheBuh1BjQh1Bkh8A3Qh8A3h4AeQh5AehxgHQilAbiHgdQiIgciMhAQiLhAhshyQhshwA7iUQA8iUCZACQCaACBvBkQBuBkBPBzQBSB4A7CEQAfBFAhAo");
	this.shape_1.setTransform(259.4,316.7);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(503).to({_off:false},0).wait(183));

	// Layer 10 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_454 = new cjs.Graphics().p("AvefLQopohgFsIQgHsHIhoqMApvApGQohIpsHAGIgSABQr9AAokocg");
	var mask_1_graphics_455 = new cjs.Graphics().p("EgO2AgQQpGoCgvsHQgxsHICpFMAr5AmxQoCJHsGAvQhCAFhBAAQq2AAoUnXg");
	var mask_1_graphics_456 = new cjs.Graphics().p("EgOJAhQQphnihZsDQhbsDHjpgMAt6AkWQniJhsCBaQh5AOh1AAQp1AAoBmXg");
	var mask_1_graphics_457 = new cjs.Graphics().p("EgNXAiMQp6nAiCr+QiEr9HBp5MAv0Ah1QnBJ6r8CDQiuAdimAAQo5AAnrlbg");
	var mask_1_graphics_458 = new cjs.Graphics().p("EgMfAjEQqRmeirr1Qitr1GdqQMAxkAfMQmdKRr0CsQjfAzjWAAQoBAAnRkkg");
	var mask_1_graphics_459 = new cjs.Graphics().p("EgLhAj3Qqnl6jUrrQjWrqF6qmMAzLAceQl6KnrpDUQkOBNkEAAQnNAAmyjxg");
	var mask_1_graphics_460 = new cjs.Graphics().p("EgKfAklQq6lUj8rfQj+rdFVq5MA0oAZqQlUK6rdD9Qk5BskzAAQmcAAmQjEg");
	var mask_1_graphics_461 = new cjs.Graphics().p("EgJYAlPQrMkukjrQQkkrPEurKMA18AWyQkuLLrPEkQliCQlgAAQlsAAlsiag");
	var mask_1_graphics_462 = new cjs.Graphics().p("EgINAl0QrakIlKq+QlLq+EIrbMA3FAT3QkHLbq+FJQmHC4mQAAQk+AAlEh0g");
	var mask_1_graphics_463 = new cjs.Graphics().p("EgG8AmUQrojglvqsQlxqrDgrnMA4FAQ2QjgLoqqFvQmqDlnBAAQkQAAkYhUg");
	var mask_1_graphics_464 = new cjs.Graphics().p("EgFoAmvQrzi3mTqYQmVqWC3ryMA46ANzQi3LzqWGTQnJEXn0AAQjhAAjrg5g");
	var mask_1_graphics_465 = new cjs.Graphics().p("EgEQAnEQr8iOm2qAQm4p/COr8MA5kAKuQiOL7p/G3QnkFMorAAQiyAAi6gjg");
	var mask_1_graphics_466 = new cjs.Graphics().p("EgC0AnVQsChlnYpoQnapmBlsCMA6DAHlQhlMCpmHZQn8GGplAAQiBAAiHgRg");
	var mask_1_graphics_467 = new cjs.Graphics().p("EgBVAngQsGg7n5pOQn6pMA7sGMA6YAEdQg7MGpMH4QoQHGqkAAQhOAAhRgGg");
	var mask_1_graphics_468 = new cjs.Graphics().p("EAAMAnlQsHgRoYoxQoZowARsJMA6iABTQgRMIowIYQogIIrqAAIgwAAg");
	var mask_1_graphics_469 = new cjs.Graphics().p("AzLfpQo3oSgZsIMA6hgB4QAZMIoSI1QoUI3sIAZIhFABQrbAAocn8g");
	var mask_1_graphics_470 = new cjs.Graphics().p("EgRbAhKQpfnjhXsDMA6LgGiQBXMDnkJeQnkJfsEBWQh1AOhxAAQp4AAoCmcg");
	var mask_1_graphics_471 = new cjs.Graphics().p("EgPkAiiQqDmxiUr6MA5dgLKQCUL6mxKCQmzKEr6CUQjCAmi5AAQohAAnglFg");
	var mask_1_graphics_472 = new cjs.Graphics().p("EgNlAjwQqkl8jRrsMA4YgPtQDRLsl9KiQl+KlrsDQQkHBJj/AAQnTAAm0j3g");
	var mask_1_graphics_473 = new cjs.Graphics().p("EgLhAk0QrAlFkLrZMA28gUKQELLZlGK/QlGLArZEMQlIB4lCAAQmKAAmDi0g");
	var mask_1_graphics_474 = new cjs.Graphics().p("EgJXAltQrYkLlFrCMA1KgYdQFFLAkNLXQkNLYrBFFQmBCxmIAAQlEAAlKh7g");
	var mask_1_graphics_475 = new cjs.Graphics().p("EgHJAmcQrrjRl7qlMAzBgcnQF8KkjSLpQjSLsqlF7QmzD1nQAAQkAAAkLhMg");
	var mask_1_graphics_476 = new cjs.Graphics().p("EgE3AnAQr5iVmwqEMAwkggmQGxKDiWL4QiWL6qEGwQneFBodAAQi8AAjFgng");
	var mask_1_graphics_477 = new cjs.Graphics().p("EgCjAnYQsChXnipgMAt0gkYQHiJfhYMBQhZMEpgHiQoAGXp0AAQh0AAh5gOg");
	var mask_1_graphics_478 = new cjs.Graphics().p("EgANAnkQsHgaoRo3MAqxgn6QIRI3gbMFQgbMIo3IRQobH3rWAAIhMgBg");
	var mask_1_graphics_479 = new cjs.Graphics().p("Ay7f8MAncgrMQI9ILAjMFQAjMHoLI9QoLI9sHAiQgyADgxAAQrHAAoYnqg");
	var mask_1_graphics_480 = new cjs.Graphics().p("EgRJAhcMAj3guMQJlHbBgL/QBhMDncJkQnbJlsCBgQiDARh/AAQpmAAn8mLg");
	var mask_1_graphics_481 = new cjs.Graphics().p("EgPRAiyMAgEgw6QKJGpCdL1QCfL4mqKJQmpKJr3CdQjPArjGAAQoRAAnZk2g");
	var mask_1_graphics_482 = new cjs.Graphics().p("EgNRAj/MAcDgzUQKoF0DaLmQDaLpl0KoQl0KproDZQkUBRkKAAQnFAAmsjqg");
	var mask_1_graphics_483 = new cjs.Graphics().p("EgLMAlBMAX3g1YQLEE8EVLTQEVLUk9LEQk9LErUEUQlSCClPAAQl8AAl6ipg");
	var mask_1_graphics_484 = new cjs.Graphics().p("EgJBAl5MATig3IQLbEEFNK6QFOK8kELbQkDLbq8FMQmKC9mUAAQk4AAk/hxg");
	var mask_1_graphics_485 = new cjs.Graphics().p("EgHNAmeMAP7g4RQLqDTF5KkQF7KljTLqQjULqqlF5QmyD0nPAAQkBAAkLhMg");
	var mask_1_graphics_486 = new cjs.Graphics().p("EgFXAm8MAMPg5MQL3CjGkKKQGmKLijL2QiiL3qMGkQnVEwoOAAQjJAAjTgtg");
	var mask_1_graphics_487 = new cjs.Graphics().p("EgDgAnTMAIig53QL/BxHOJtQHPJuhxMAQhxL/pvHOQn0F0pSAAQiQAAiXgWg");
	var mask_1_graphics_488 = new cjs.Graphics().p("EgBnAniMAExg6UQMFBAH1JOQH3JPhAMFQg/MGpQH1QoMG+qdAAQhTAAhXgHg");
	var mask_1_graphics_489 = new cjs.Graphics().p("EAASAnoMAA/g6fQMIANIaItQIcIugNMHQgNMIovIaQofIPrwAAIglgBg");
	var mask_1_graphics_490 = new cjs.Graphics().p("Agny0QMGglI9IJQI/IKAlMGQAlMHoKI9QoJI/sHAlg");
	var mask_1_graphics_491 = new cjs.Graphics().p("AihymQMDhXJdHjQJgHkBXMCQBXMDnkJeQnjJfsDBXg");
	var mask_1_graphics_492 = new cjs.Graphics().p("AkZyLQL7iJJ7G6QJ+G8CJL7QCIL8m8J8Qm6J9r8CJg");
	var mask_1_graphics_493 = new cjs.Graphics().p("AmRxlQLxi6KXGQQKZGSC6LwQC6LymSKXQmQKZryC6g");
	var mask_1_graphics_494 = new cjs.Graphics().p("AoGw0QLjjrKwFlQKxFmDrLjQDqLklmKwQllKxrkDrg");
	var mask_1_graphics_495 = new cjs.Graphics().p("Ap5v4QLTkZLFE3QLHE5EaLSQEaLUk5LFQk3LHrUEag");
	var mask_1_graphics_496 = new cjs.Graphics().p("ArouwQLAlILXEJQLaEKFILAQFIK+kLLZQkILZrAFIg");
	var mask_1_graphics_497 = new cjs.Graphics().p("AtUteQKpl1LnDaQLqDaF1KpQF0KojaLoQjZLpqpF1g");
	var mask_1_graphics_498 = new cjs.Graphics().p("Au8sCQKQmgLzCpQL3CqGgKPQGgKPiqL1QioL2qQGgg");
	var mask_1_graphics_499 = new cjs.Graphics().p("AwfqbQJznKL9B4QMAB4HJJzQHKJzh5L+Qh2L/p0HKg");
	var mask_1_graphics_500 = new cjs.Graphics().p("Ax+orQJUnyMDBGQMGBGHyJVQHxJThHMFQhFMFpUHyg");
	var mask_1_graphics_501 = new cjs.Graphics().p("AzYmyQIzoXMGAUQMJAUIXIzQIXIygVMIQgTMIozIXg");
	var mask_1_graphics_502 = new cjs.Graphics().p("A0ukxQIQo6MGgeQMIgfI7IQQI6IOAdMIQAgMIoQI6g");
	var mask_1_graphics_503 = new cjs.Graphics().p("A19inQHppcMEhQQMEhRJbHqQJcHoBPMEQBSMEnqJcg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(454).to({graphics:mask_1_graphics_454,x:166.1,y:253.5}).wait(1).to({graphics:mask_1_graphics_455,x:169.5,y:253.5}).wait(1).to({graphics:mask_1_graphics_456,x:172.7,y:253.5}).wait(1).to({graphics:mask_1_graphics_457,x:175.8,y:253.5}).wait(1).to({graphics:mask_1_graphics_458,x:178.5,y:253.6}).wait(1).to({graphics:mask_1_graphics_459,x:181.1,y:253.6}).wait(1).to({graphics:mask_1_graphics_460,x:183.4,y:253.7}).wait(1).to({graphics:mask_1_graphics_461,x:185.5,y:253.7}).wait(1).to({graphics:mask_1_graphics_462,x:187.3,y:253.6}).wait(1).to({graphics:mask_1_graphics_463,x:188.9,y:253.6}).wait(1).to({graphics:mask_1_graphics_464,x:190.2,y:253.6}).wait(1).to({graphics:mask_1_graphics_465,x:191.2,y:253.5}).wait(1).to({graphics:mask_1_graphics_466,x:192,y:253.4}).wait(1).to({graphics:mask_1_graphics_467,x:192.5,y:253.4}).wait(1).to({graphics:mask_1_graphics_468,x:192.7,y:253.3}).wait(1).to({graphics:mask_1_graphics_469,x:192.7,y:253.3}).wait(1).to({graphics:mask_1_graphics_470,x:192.7,y:253.4}).wait(1).to({graphics:mask_1_graphics_471,x:192.8,y:253.5}).wait(1).to({graphics:mask_1_graphics_472,x:192.8,y:253.5}).wait(1).to({graphics:mask_1_graphics_473,x:192.8,y:253.6}).wait(1).to({graphics:mask_1_graphics_474,x:192.8,y:253.6}).wait(1).to({graphics:mask_1_graphics_475,x:192.7,y:253.6}).wait(1).to({graphics:mask_1_graphics_476,x:192.6,y:253.5}).wait(1).to({graphics:mask_1_graphics_477,x:192.5,y:253.4}).wait(1).to({graphics:mask_1_graphics_478,x:192.4,y:253.3}).wait(1).to({graphics:mask_1_graphics_479,x:192.3,y:253.4}).wait(1).to({graphics:mask_1_graphics_480,x:192.4,y:253.5}).wait(1).to({graphics:mask_1_graphics_481,x:192.4,y:253.6}).wait(1).to({graphics:mask_1_graphics_482,x:192.5,y:253.7}).wait(1).to({graphics:mask_1_graphics_483,x:192.5,y:253.8}).wait(1).to({graphics:mask_1_graphics_484,x:192.5,y:253.8}).wait(1).to({graphics:mask_1_graphics_485,x:192.4,y:253.8}).wait(1).to({graphics:mask_1_graphics_486,x:192.4,y:253.7}).wait(1).to({graphics:mask_1_graphics_487,x:192.3,y:253.7}).wait(1).to({graphics:mask_1_graphics_488,x:192.2,y:253.7}).wait(1).to({graphics:mask_1_graphics_489,x:192.2,y:253.7}).wait(1).to({graphics:mask_1_graphics_490,x:192.2,y:253.6}).wait(1).to({graphics:mask_1_graphics_491,x:192.3,y:253.1}).wait(1).to({graphics:mask_1_graphics_492,x:192.4,y:252.3}).wait(1).to({graphics:mask_1_graphics_493,x:192.5,y:251.1}).wait(1).to({graphics:mask_1_graphics_494,x:192.5,y:249.5}).wait(1).to({graphics:mask_1_graphics_495,x:192.6,y:247.5}).wait(1).to({graphics:mask_1_graphics_496,x:192.6,y:245.1}).wait(1).to({graphics:mask_1_graphics_497,x:192.6,y:242.4}).wait(1).to({graphics:mask_1_graphics_498,x:192.5,y:239.4}).wait(1).to({graphics:mask_1_graphics_499,x:192.5,y:236}).wait(1).to({graphics:mask_1_graphics_500,x:192.4,y:232.3}).wait(1).to({graphics:mask_1_graphics_501,x:192.4,y:228.3}).wait(1).to({graphics:mask_1_graphics_502,x:192.4,y:224}).wait(1).to({graphics:mask_1_graphics_503,x:192.6,y:219.4}).wait(183));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(20,1,1).p("AkzliQAtACAtAQQAXAJAXANQB+BIBaBvQBWBqA/B5QBBB+AxCF");
	this.shape_2.setTransform(217.9,317.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(20,1,1).p("AmkkAQAggwBBgaQCMg3B9BIQB8BHBbBvQBWBqA/B5QBBB+AyCF");
	this.shape_3.setTransform(206.6,317.7);

	var maskedShapeInstanceList = [this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2}]},454).to({state:[{t:this.shape_3}]},15).wait(217));

	// Layer 14
	this.instance_2 = new lib.ar3("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(379.3,205.3,1,1,0,67.5,-112.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(289).to({_off:false},0).wait(397));

	// Layer 9 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_344 = new cjs.Graphics().p("AMGJIIAqhWIRvIjIgqBWg");
	var mask_2_graphics_345 = new cjs.Graphics().p("ApRjaIA1huIRuIjIg1Btg");
	var mask_2_graphics_346 = new cjs.Graphics().p("ApWjOIBAiFIRtIiIg/CFg");
	var mask_2_graphics_347 = new cjs.Graphics().p("ApcjCIBLidIRuIiIhLCdg");
	var mask_2_graphics_348 = new cjs.Graphics().p("Apii2IBXi1IRuIiIhXC1g");
	var mask_2_graphics_349 = new cjs.Graphics().p("ApoirIBjjMIRuIjIhjDMg");
	var mask_2_graphics_350 = new cjs.Graphics().p("AptifIBtjkIRuIjIhtDjg");
	var mask_2_graphics_351 = new cjs.Graphics().p("ApziTIB5j7IRuIiIh5D7g");
	var mask_2_graphics_352 = new cjs.Graphics().p("Ap5iIICFkSIRuIiIiFETg");
	var mask_2_graphics_353 = new cjs.Graphics().p("Ap+h7ICQkrIRtIiIiPErg");
	var mask_2_graphics_354 = new cjs.Graphics().p("AqEhwICblCIRuIjIibFCg");
	var mask_2_graphics_355 = new cjs.Graphics().p("AqKhkICnlaIRuIjIinFZg");
	var mask_2_graphics_356 = new cjs.Graphics().p("AqQhYICzlxIRtIiIiyFxg");
	var mask_2_graphics_357 = new cjs.Graphics().p("AqVhNIC9mIIRuIiIi9GJg");
	var mask_2_graphics_358 = new cjs.Graphics().p("AqbhBIDJmgIRuIjIjJGgg");
	var mask_2_graphics_359 = new cjs.Graphics().p("Aqhg1IDVm4IRtIjIjUG4g");
	var mask_2_graphics_360 = new cjs.Graphics().p("AqmgpIDfnQIRuIjIjfHPg");
	var mask_2_graphics_361 = new cjs.Graphics().p("AqsgdIDrnnIRuIiIjrHng");
	var mask_2_graphics_362 = new cjs.Graphics().p("AqxgSID2n+IRtIiIj1H/g");
	var mask_2_graphics_363 = new cjs.Graphics().p("Aq3gGIEBoWIRuIjIkBIWg");
	var mask_2_graphics_364 = new cjs.Graphics().p("Aq9AFIENotIRuIkIkNItg");
	var mask_2_graphics_365 = new cjs.Graphics().p("ArCARIEYpFIRtIkIkXJEg");
	var mask_2_graphics_366 = new cjs.Graphics().p("ArIAdIEjpcIRuIjIkjJcg");
	var mask_2_graphics_367 = new cjs.Graphics().p("ArOAoIEvpzIRuIkIkvJzg");
	var mask_2_graphics_368 = new cjs.Graphics().p("ArTA0IE6qKIRtIjIk6KLg");
	var mask_2_graphics_369 = new cjs.Graphics().p("ArZBAIFFqiIRuIjIlFKig");
	var mask_2_graphics_370 = new cjs.Graphics().p("ArfBMIFRq6IRuIjIlRK6g");
	var mask_2_graphics_371 = new cjs.Graphics().p("ArlBXIFdrRIRuIkIldLRg");
	var mask_2_graphics_372 = new cjs.Graphics().p("ArqBjIFnrpIRuIkIlnLpg");
	var mask_2_graphics_373 = new cjs.Graphics().p("ArwBvIFzsAIRuIjIlzMBg");
	var mask_2_graphics_374 = new cjs.Graphics().p("Ar2B7IF/sYIRuIjIl/MYg");
	var mask_2_graphics_375 = new cjs.Graphics().p("Ar7CHIGJswIRuIjImJMwg");
	var mask_2_graphics_376 = new cjs.Graphics().p("AsBCSIGVtHIRuIkImVNHg");
	var mask_2_graphics_377 = new cjs.Graphics().p("AsHCeIGhtfIRuIkImhNfg");
	var mask_2_graphics_378 = new cjs.Graphics().p("AsNCqIGtt2IRtIjImsN2g");
	var mask_2_graphics_379 = new cjs.Graphics().p("AsSC2IG3uOIRuIjIm3OOg");
	var mask_2_graphics_380 = new cjs.Graphics().p("AsYDCIHDumIRuIkInDOlg");
	var mask_2_graphics_381 = new cjs.Graphics().p("AsdDOIHOu+IRtIkInNO9g");
	var mask_2_graphics_382 = new cjs.Graphics().p("AsjDZIHZvVIRuIkInZPVg");
	var mask_2_graphics_383 = new cjs.Graphics().p("AspDlIHlvsIRuIjInlPsg");
	var mask_2_graphics_384 = new cjs.Graphics().p("AsuDxIHwwEIRtIjInvQEg");
	var mask_2_graphics_385 = new cjs.Graphics().p("As0D8IH7wbIRuIkIn7Qbg");
	var mask_2_graphics_386 = new cjs.Graphics().p("As6EIIIHwzIRuIkIoHQzg");
	var mask_2_graphics_387 = new cjs.Graphics().p("AtAEUIITxLIRtIkIoSRLg");
	var mask_2_graphics_388 = new cjs.Graphics().p("AtFEgIIdxiIRuIjIodRig");
	var mask_2_graphics_389 = new cjs.Graphics().p("AtLEsIIpx6IRuIjIopR6g");
	var mask_2_graphics_390 = new cjs.Graphics().p("AtQE3IIzyRIRuIkIozSRg");
	var mask_2_graphics_391 = new cjs.Graphics().p("AtWFDII/ypIRuIkIo/Spg");
	var mask_2_graphics_392 = new cjs.Graphics().p("AtcFPIJLzBIRuIkIpLTBg");
	var mask_2_graphics_393 = new cjs.Graphics().p("AthFbIJVzYIRuIjIpVTYg");
	var mask_2_graphics_394 = new cjs.Graphics().p("AtnFnIJhzwIRuIjIphTwg");
	var mask_2_graphics_395 = new cjs.Graphics().p("AttFyIJt0HIRuIkIptUHg");
	var mask_2_graphics_396 = new cjs.Graphics().p("AtzF+IJ40fIRuIkIp4Ufg");
	var mask_2_graphics_397 = new cjs.Graphics().p("At4GKIKD02IRuIjIqDU3g");
	var mask_2_graphics_398 = new cjs.Graphics().p("At+GWIKP1OIRuIjIqPVOg");
	var mask_2_graphics_399 = new cjs.Graphics().p("AuEGiIKa1mIRuIjIqaVmg");
	var mask_2_graphics_400 = new cjs.Graphics().p("AuJGtIKl19IRuIkIqlV9g");
	var mask_2_graphics_401 = new cjs.Graphics().p("AuPG5IKx2VIRuIkIqxWVg");
	var mask_2_graphics_402 = new cjs.Graphics().p("AuUHFIK72sIRuIjIq7Wtg");
	var mask_2_graphics_403 = new cjs.Graphics().p("AuaHRILH3EIRuIjIrHXEg");
	var mask_2_graphics_404 = new cjs.Graphics().p("AugHdILT3cIRuIjIrTXcg");
	var mask_2_graphics_405 = new cjs.Graphics().p("AulHoILd3zIRuIkIrdXzg");
	var mask_2_graphics_406 = new cjs.Graphics().p("AurH0ILp4LIRuIkIrpYLg");
	var mask_2_graphics_407 = new cjs.Graphics().p("AuxIAIL14iIRuIjIr1Yjg");
	var mask_2_graphics_408 = new cjs.Graphics().p("Au2IMIL/46IRuIjIsAY6g");
	var mask_2_graphics_409 = new cjs.Graphics().p("Au8IYIML5SIRuIjIsLZSg");
	var mask_2_graphics_410 = new cjs.Graphics().p("AvCIkIMX5qIRuIkIsXZpg");
	var mask_2_graphics_411 = new cjs.Graphics().p("AvIIvIMi6BIRuIkIsiaBg");
	var mask_2_graphics_412 = new cjs.Graphics().p("AvNI7IMt6YIRuIjIstaYg");
	var mask_2_graphics_413 = new cjs.Graphics().p("AvTJHIM56wIRuIjIs5awg");
	var mask_2_graphics_414 = new cjs.Graphics().p("AvZJSINF7HIRuIkItFbHg");
	var mask_2_graphics_415 = new cjs.Graphics().p("AveJeINP7fIRuIkItPbfg");
	var mask_2_graphics_416 = new cjs.Graphics().p("AvkJqINb73IRuIkItbb2g");
	var mask_2_graphics_417 = new cjs.Graphics().p("AvqJ2INn8OIRuIjItncOg");
	var mask_2_graphics_418 = new cjs.Graphics().p("AvvKBINx8lIRuIjItxcmg");
	var mask_2_graphics_419 = new cjs.Graphics().p("Av1KNIN989IRuIkIt9c9g");
	var mask_2_graphics_420 = new cjs.Graphics().p("Av7KZIOJ9VIRuIkIuJdVg");
	var mask_2_graphics_421 = new cjs.Graphics().p("AwAKlIOT9tIRuIkIuTdsg");
	var mask_2_graphics_422 = new cjs.Graphics().p("AwGKxIOf+EIRuIjIufeEg");
	var mask_2_graphics_423 = new cjs.Graphics().p("AwMK8IOr+bIRuIjIurecg");
	var mask_2_graphics_424 = new cjs.Graphics().p("AwRLIIO1+zIRuIkIu1ezg");
	var mask_2_graphics_425 = new cjs.Graphics().p("AwXLUIPB/LIRuIkIvBfLg");
	var mask_2_graphics_426 = new cjs.Graphics().p("AwdLgIPN/jIRuIkIvNfig");
	var mask_2_graphics_427 = new cjs.Graphics().p("AwjLsIPY/6IRuIjIvYf6g");
	var mask_2_graphics_428 = new cjs.Graphics().p("AwoL3MAPjggRIRuIjMgPjAgSg");
	var mask_2_graphics_429 = new cjs.Graphics().p("AwuMDMAPvggpIRuIkMgPvAgpg");
	var mask_2_graphics_430 = new cjs.Graphics().p("Aw0MPMAP6ghBIRuIkMgP6AhBg");
	var mask_2_graphics_431 = new cjs.Graphics().p("Aw5MbMAQFghYIRuIjMgQFAhYg");
	var mask_2_graphics_432 = new cjs.Graphics().p("Aw/MnMAQRghwIRuIjMgQRAhwg");
	var mask_2_graphics_433 = new cjs.Graphics().p("AxFMyMAQcgiHIRuIjMgQbAiIg");
	var mask_2_graphics_434 = new cjs.Graphics().p("AxKM+MAQngifIRuIkMgQnAifg");
	var mask_2_graphics_435 = new cjs.Graphics().p("AxVNUMAQ9gjLIRuIkMgQ9AjLg");
	var mask_2_graphics_436 = new cjs.Graphics().p("AxgNqMARSgj3IRuIkMgRRAj3g");
	var mask_2_graphics_437 = new cjs.Graphics().p("AxqOBMARngkkIRuIjMgRnAkkg");
	var mask_2_graphics_438 = new cjs.Graphics().p("Ax1OXMAR8glQIRvIjMgR8AlQg");
	var mask_2_graphics_439 = new cjs.Graphics().p("AlibcMASSgl8IRuIjMgSSAl8g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(344).to({graphics:mask_2_graphics_344,x:195.1,y:113.1}).wait(1).to({graphics:mask_2_graphics_345,x:330.8,y:195.8}).wait(1).to({graphics:mask_2_graphics_346,x:330.2,y:196.9}).wait(1).to({graphics:mask_2_graphics_347,x:329.6,y:198.1}).wait(1).to({graphics:mask_2_graphics_348,x:329.1,y:199.3}).wait(1).to({graphics:mask_2_graphics_349,x:328.5,y:200.5}).wait(1).to({graphics:mask_2_graphics_350,x:327.9,y:201.7}).wait(1).to({graphics:mask_2_graphics_351,x:327.4,y:202.8}).wait(1).to({graphics:mask_2_graphics_352,x:326.8,y:204}).wait(1).to({graphics:mask_2_graphics_353,x:326.2,y:205.2}).wait(1).to({graphics:mask_2_graphics_354,x:325.7,y:206.4}).wait(1).to({graphics:mask_2_graphics_355,x:325.1,y:207.6}).wait(1).to({graphics:mask_2_graphics_356,x:324.5,y:208.7}).wait(1).to({graphics:mask_2_graphics_357,x:324,y:209.9}).wait(1).to({graphics:mask_2_graphics_358,x:323.4,y:211.1}).wait(1).to({graphics:mask_2_graphics_359,x:322.8,y:212.3}).wait(1).to({graphics:mask_2_graphics_360,x:322.2,y:213.5}).wait(1).to({graphics:mask_2_graphics_361,x:321.7,y:214.6}).wait(1).to({graphics:mask_2_graphics_362,x:321.1,y:215.8}).wait(1).to({graphics:mask_2_graphics_363,x:320.5,y:217}).wait(1).to({graphics:mask_2_graphics_364,x:320,y:218.2}).wait(1).to({graphics:mask_2_graphics_365,x:319.4,y:219.4}).wait(1).to({graphics:mask_2_graphics_366,x:318.8,y:220.5}).wait(1).to({graphics:mask_2_graphics_367,x:318.3,y:221.7}).wait(1).to({graphics:mask_2_graphics_368,x:317.7,y:222.9}).wait(1).to({graphics:mask_2_graphics_369,x:317.1,y:224.1}).wait(1).to({graphics:mask_2_graphics_370,x:316.6,y:225.3}).wait(1).to({graphics:mask_2_graphics_371,x:316,y:226.5}).wait(1).to({graphics:mask_2_graphics_372,x:315.4,y:227.6}).wait(1).to({graphics:mask_2_graphics_373,x:314.9,y:228.8}).wait(1).to({graphics:mask_2_graphics_374,x:314.3,y:230}).wait(1).to({graphics:mask_2_graphics_375,x:313.7,y:231.2}).wait(1).to({graphics:mask_2_graphics_376,x:313.2,y:232.4}).wait(1).to({graphics:mask_2_graphics_377,x:312.6,y:233.5}).wait(1).to({graphics:mask_2_graphics_378,x:312,y:234.7}).wait(1).to({graphics:mask_2_graphics_379,x:311.5,y:235.9}).wait(1).to({graphics:mask_2_graphics_380,x:310.9,y:237.1}).wait(1).to({graphics:mask_2_graphics_381,x:310.3,y:238.3}).wait(1).to({graphics:mask_2_graphics_382,x:309.8,y:239.4}).wait(1).to({graphics:mask_2_graphics_383,x:309.2,y:240.6}).wait(1).to({graphics:mask_2_graphics_384,x:308.6,y:241.8}).wait(1).to({graphics:mask_2_graphics_385,x:308,y:243}).wait(1).to({graphics:mask_2_graphics_386,x:307.5,y:244.1}).wait(1).to({graphics:mask_2_graphics_387,x:306.9,y:245.3}).wait(1).to({graphics:mask_2_graphics_388,x:306.3,y:246.5}).wait(1).to({graphics:mask_2_graphics_389,x:305.8,y:247.7}).wait(1).to({graphics:mask_2_graphics_390,x:305.2,y:248.9}).wait(1).to({graphics:mask_2_graphics_391,x:304.6,y:250}).wait(1).to({graphics:mask_2_graphics_392,x:304,y:251.2}).wait(1).to({graphics:mask_2_graphics_393,x:303.5,y:252.4}).wait(1).to({graphics:mask_2_graphics_394,x:302.9,y:253.6}).wait(1).to({graphics:mask_2_graphics_395,x:302.3,y:254.8}).wait(1).to({graphics:mask_2_graphics_396,x:301.8,y:255.9}).wait(1).to({graphics:mask_2_graphics_397,x:301.2,y:257.1}).wait(1).to({graphics:mask_2_graphics_398,x:300.6,y:258.3}).wait(1).to({graphics:mask_2_graphics_399,x:300.1,y:259.5}).wait(1).to({graphics:mask_2_graphics_400,x:299.5,y:260.7}).wait(1).to({graphics:mask_2_graphics_401,x:298.9,y:261.8}).wait(1).to({graphics:mask_2_graphics_402,x:298.4,y:263}).wait(1).to({graphics:mask_2_graphics_403,x:297.8,y:264.2}).wait(1).to({graphics:mask_2_graphics_404,x:297.2,y:265.4}).wait(1).to({graphics:mask_2_graphics_405,x:296.7,y:266.6}).wait(1).to({graphics:mask_2_graphics_406,x:296.1,y:267.7}).wait(1).to({graphics:mask_2_graphics_407,x:295.5,y:268.9}).wait(1).to({graphics:mask_2_graphics_408,x:295,y:270.1}).wait(1).to({graphics:mask_2_graphics_409,x:294.4,y:271.3}).wait(1).to({graphics:mask_2_graphics_410,x:293.8,y:272.5}).wait(1).to({graphics:mask_2_graphics_411,x:293.3,y:273.6}).wait(1).to({graphics:mask_2_graphics_412,x:292.7,y:274.8}).wait(1).to({graphics:mask_2_graphics_413,x:292.1,y:276}).wait(1).to({graphics:mask_2_graphics_414,x:291.5,y:277.2}).wait(1).to({graphics:mask_2_graphics_415,x:291,y:278.4}).wait(1).to({graphics:mask_2_graphics_416,x:290.4,y:279.6}).wait(1).to({graphics:mask_2_graphics_417,x:289.8,y:280.7}).wait(1).to({graphics:mask_2_graphics_418,x:289.3,y:281.9}).wait(1).to({graphics:mask_2_graphics_419,x:288.7,y:283.1}).wait(1).to({graphics:mask_2_graphics_420,x:288.1,y:284.3}).wait(1).to({graphics:mask_2_graphics_421,x:287.6,y:285.5}).wait(1).to({graphics:mask_2_graphics_422,x:287,y:286.6}).wait(1).to({graphics:mask_2_graphics_423,x:286.4,y:287.8}).wait(1).to({graphics:mask_2_graphics_424,x:285.9,y:289}).wait(1).to({graphics:mask_2_graphics_425,x:285.3,y:290.2}).wait(1).to({graphics:mask_2_graphics_426,x:284.7,y:291.4}).wait(1).to({graphics:mask_2_graphics_427,x:284.2,y:292.5}).wait(1).to({graphics:mask_2_graphics_428,x:283.6,y:293.7}).wait(1).to({graphics:mask_2_graphics_429,x:283,y:294.9}).wait(1).to({graphics:mask_2_graphics_430,x:282.5,y:296.1}).wait(1).to({graphics:mask_2_graphics_431,x:281.9,y:297.2}).wait(1).to({graphics:mask_2_graphics_432,x:281.3,y:298.4}).wait(1).to({graphics:mask_2_graphics_433,x:280.8,y:299.6}).wait(1).to({graphics:mask_2_graphics_434,x:280.2,y:300.8}).wait(1).to({graphics:mask_2_graphics_435,x:279.1,y:303}).wait(1).to({graphics:mask_2_graphics_436,x:278.1,y:305.2}).wait(1).to({graphics:mask_2_graphics_437,x:277,y:307.4}).wait(1).to({graphics:mask_2_graphics_438,x:275.9,y:309.6}).wait(1).to({graphics:mask_2_graphics_439,x:195,y:230.3}).wait(247));

	// Layer 8
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(20,1,1).p("AR52pQpnhhmNHrQixDchsEGIvgf3");
	this.shape_4.setTransform(334.5,275.4);
	this.shape_4._off = true;

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(344).to({_off:false},0).wait(342));

	// Layer 7 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_289 = new cjs.Graphics().p("AMldKMAM4g5JQL2CqGfKQQGfKRirL1QiqL2qRGeQnREmoEAAQjUAAjdgxg");
	var mask_3_graphics_290 = new cjs.Graphics().p("ANidXMAK/g5jQL7CSG0KBQG1KEiSL6QiRL7qDGzQnhFIomAAQi3AAi/gkg");
	var mask_3_graphics_291 = new cjs.Graphics().p("AOfdiMAJGg54QL/B5HJJzQHKJ0h5L/Qh4L/p1HIQnwFrpIAAQiaAAiggZg");
	var mask_3_graphics_292 = new cjs.Graphics().p("APcdrMAHMg6JQMDBgHdJjQHeJlhfMCQhfMDplHdQn+GPptAAQh8AAiAgQg");
	var mask_3_graphics_293 = new cjs.Graphics().p("AQadyMAFRg6WQMGBGHxJTQHyJVhGMFQhGMGpVHxQoKG1qTAAQhdAAhfgJg");
	var mask_3_graphics_294 = new cjs.Graphics().p("ARYd3MADWg6fQMIAtIEJCQIFJEgsMHQgtMIpEIEQoVHcq8AAQg8AAg9gDg");
	var mask_3_graphics_295 = new cjs.Graphics().p("ASVd6MABcg6kQMIATIXIxQIYIzgTMIQgTMJoyIWQofIGrnAAIg1AAg");
	var mask_3_graphics_296 = new cjs.Graphics().p("ASz8qQMJgHIpIgQIqIhAHMIQAGMIohIpQofIrsJAGg");
	var mask_3_graphics_297 = new cjs.Graphics().p("AR18oQMIggI7INQI8IPAgMIQAgMHoOI7QoNI8sIAgg");
	var mask_3_graphics_298 = new cjs.Graphics().p("AQ38iQMHg6JMH6QJNH7A5MHQA6MGn7JMQn6JNsHA5g");
	var mask_3_graphics_299 = new cjs.Graphics().p("AP68aQMEhTJcHnQJdHnBTMFQBUMDnoJcQnnJdsEBUg");
	var mask_3_graphics_300 = new cjs.Graphics().p("AO88OQMChtJrHTQJtHTBsMCQBtMAnUJsQnSJssBBtg");
	var mask_3_graphics_301 = new cjs.Graphics().p("AN/8AQL9iFJ7G9QJ8G/CGL+QCFL8m/J7Qm9J8r+CFg");
	var mask_3_graphics_302 = new cjs.Graphics().p("ANC7uQL5ifKIGpQKLGqCfL4QCeL4mqKJQmoKKr5Cfg");
	var mask_3_graphics_303 = new cjs.Graphics().p("AMG7aQLzi3KWGTQKYGUC4LzQC3LymUKXQmTKXrzC4g");
	var mask_3_graphics_304 = new cjs.Graphics().p("ALK7CQLsjRKjF+QKlF+DRLsQDQLsl+KjQl9KlrtDQg");
	var mask_3_graphics_305 = new cjs.Graphics().p("AKO6oQLmjpKvFnQKxFoDpLlQDpLkloKwQlmKxrmDpg");
	var mask_3_graphics_306 = new cjs.Graphics().p("AJU6KQLdkCK7FQQK8FRECLdQEBLdlSK7QlPK8rdEBg");
	var mask_3_graphics_307 = new cjs.Graphics().p("AIa5qQLUkZLGE4QLHE6EZLUQEZLUk6LGQk4LHrVEZg");
	var mask_3_graphics_308 = new cjs.Graphics().p("AHh5HQLLkxLPEhQLREiExLLQExLKkjLQQkhLQrKExg");
	var mask_3_graphics_309 = new cjs.Graphics().p("AGp4iQLAlILZEKQLaEKFILAQFILAkLLZQkJLarAFIg");
	var mask_3_graphics_310 = new cjs.Graphics().p("AFy35QK1lfLgDxQLjDyFfK2QFfK1jyLgQjxLiq1Ffg");
	var mask_3_graphics_311 = new cjs.Graphics().p("AE73OQKql1LoDZQLqDZF2KqQF1KpjaLoQjYLqqqF1g");
	var mask_3_graphics_312 = new cjs.Graphics().p("AEG2gQKdmMLvDBQLxDBGMKcQGLKdjBLvQjALwqdGMg");
	var mask_3_graphics_313 = new cjs.Graphics().p("ADS1vQKPmiL1CoQL3CoGiKPQGhKPipL1QimL2qQGig");
	var mask_3_graphics_314 = new cjs.Graphics().p("ACf08QKBm3L6CPQL8CPG3KBQG3KBiQL6QiOL7qBG3g");
	var mask_3_graphics_315 = new cjs.Graphics().p("ABt0HQJznLL+B1QMAB2HMJzQHMJyh3L+Qh1MApyHLg");
	var mask_3_graphics_316 = new cjs.Graphics().p("AA9zPQJjngMBBdQMEBcHgJjQHgJjhdMCQhcMDpjHgg");
	var mask_3_graphics_317 = new cjs.Graphics().p("AANyUQJTn0MFBDQMGBDH0JTQH0JThEMEQhCMGpTH0g");
	var mask_3_graphics_318 = new cjs.Graphics().p("AggxXQJBoIMHAqQMIAqIHJCQIHJCgrMGQgoMHpCIIg");
	var mask_3_graphics_319 = new cjs.Graphics().p("AhNwYQIwoaMHAQQMKAQIZIxQIaIwgRMIQgPMIoxIag");
	var mask_3_graphics_320 = new cjs.Graphics().p("Ah4vXQIdosMIgKQMJgJIsIfQIsIfAIMHQALMIofIsg");
	var mask_3_graphics_321 = new cjs.Graphics().p("AijuUQIMo9MGgjQMJgjI9IMQI+IMAiMHQAjMHoMI+g");
	var mask_3_graphics_322 = new cjs.Graphics().p("AjMtPQH4pOMFg8QMHg9JPH5QJOH5A8MFQA9MGn5JPg");
	var mask_3_graphics_323 = new cjs.Graphics().p("AjzsHQHkpfMDhWQMEhVJfHlQJfHlBVMDQBWMDnlJfg");
	var mask_3_graphics_324 = new cjs.Graphics().p("AkZq+QHQpuL/hvQMChwJuHSQJuHRBuL/QBxMBnSJug");
	var mask_3_graphics_325 = new cjs.Graphics().p("Ak+pzQG8p9L7iIQL+iJJ9G9QJ9G8CHL8QCKL8m9J9g");
	var mask_3_graphics_326 = new cjs.Graphics().p("AlgomQGmqML2ihQL5ihKLGnQKMGnCgL3QCjL3moKMg");
	var mask_3_graphics_327 = new cjs.Graphics().p("AmBnYQGQqZLxi6QLzi6KZGRQKZGSC5LxQC7LxmRKag");
	var mask_3_graphics_328 = new cjs.Graphics().p("AmgmIQF7qmLpjSQLtjTKmF7QKlF8DSLqQDULrl7Kmg");
	var mask_3_graphics_329 = new cjs.Graphics().p("Am+k2QFlqyLijrQLljsKyFlQKyFlDqLkQDtLjllKyg");
	var mask_3_graphics_330 = new cjs.Graphics().p("AnZjkQFOq9LakDQLckEK+FOQK9FPEDLcQEELalOK9g");
	var mask_3_graphics_331 = new cjs.Graphics().p("AnziPQE3rILRkbQLUkcLIE3QLIE3EaLTQEdLRk3LIg");
	var mask_3_graphics_332 = new cjs.Graphics().p("AoKg6QEfrSLHkyQLKk0LSEgQLSEfEyLKQE0LHkfLSg");
	var mask_3_graphics_333 = new cjs.Graphics().p("AogAbQEHrZK9lKQLAlLLbEIQLbEHFJK/QFLK9kHLbg");
	var mask_3_graphics_334 = new cjs.Graphics().p("Ao0BzQDwriKxlhQK0liLkDwQLjDvFgK0QFiKyjvLjg");
	var mask_3_graphics_335 = new cjs.Graphics().p("ApFDLQDXrpKll3QKol5LrDXQLrDXF3KoQF4KmjXLrg");
	var mask_3_graphics_336 = new cjs.Graphics().p("ApVElQC+rxKZmNQKcmOLxC+QLxC+GNKcQGPKZi+Lxg");
	var mask_3_graphics_337 = new cjs.Graphics().p("ApjF/QCmr2KLmjQKOmkL4ClQL3ClGiKOQGlKMimL3g");
	var mask_3_graphics_338 = new cjs.Graphics().p("ApuHZQCMr7J9m4QKAm5L9CMQL8CMG4KAQG5J+iML8g");
	var mask_3_graphics_339 = new cjs.Graphics().p("Ap4I1QBzsAJvnNQJxnOMABzQMBB0HMJxQHPJuhzMBg");
	var mask_3_graphics_340 = new cjs.Graphics().p("AqAKQQBasDJfnhQJiniMEBaQMEBaHgJhQHjJfhaMEg");
	var mask_3_graphics_341 = new cjs.Graphics().p("AqFLsQBAsFJPn1QJSn2MGBAQMGBBH1JRQH2JPhAMGg");
	var mask_3_graphics_342 = new cjs.Graphics().p("AqJNIQAnsII/oHQJAoJMIAnQMIAnIIJBQIJI+gnMIg");
	var mask_3_graphics_343 = new cjs.Graphics().p("AqLOlQAOsJIuoaQIuocMJAOQMIANIbIvQIcItgNMJg");
	var mask_3_graphics_344 = new cjs.Graphics().p("Ah7lRQIdouMIgMQMJgNItIeQIuIaAMMJMg6kAA6QgMsIIbosg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(289).to({graphics:mask_3_graphics_289,x:309.6,y:191.5}).wait(1).to({graphics:mask_3_graphics_290,x:309.6,y:191.5}).wait(1).to({graphics:mask_3_graphics_291,x:309.5,y:191.5}).wait(1).to({graphics:mask_3_graphics_292,x:309.5,y:191.5}).wait(1).to({graphics:mask_3_graphics_293,x:309.4,y:191.5}).wait(1).to({graphics:mask_3_graphics_294,x:309.4,y:191.4}).wait(1).to({graphics:mask_3_graphics_295,x:309.4,y:191.4}).wait(1).to({graphics:mask_3_graphics_296,x:309.4,y:191.4}).wait(1).to({graphics:mask_3_graphics_297,x:309.4,y:191.4}).wait(1).to({graphics:mask_3_graphics_298,x:309.4,y:191.2}).wait(1).to({graphics:mask_3_graphics_299,x:309.5,y:191}).wait(1).to({graphics:mask_3_graphics_300,x:309.5,y:190.6}).wait(1).to({graphics:mask_3_graphics_301,x:309.5,y:190.1}).wait(1).to({graphics:mask_3_graphics_302,x:309.6,y:189.6}).wait(1).to({graphics:mask_3_graphics_303,x:309.6,y:188.9}).wait(1).to({graphics:mask_3_graphics_304,x:309.6,y:188.1}).wait(1).to({graphics:mask_3_graphics_305,x:309.7,y:187.3}).wait(1).to({graphics:mask_3_graphics_306,x:309.7,y:186.3}).wait(1).to({graphics:mask_3_graphics_307,x:309.7,y:185.3}).wait(1).to({graphics:mask_3_graphics_308,x:309.7,y:184.1}).wait(1).to({graphics:mask_3_graphics_309,x:309.7,y:182.9}).wait(1).to({graphics:mask_3_graphics_310,x:309.7,y:181.5}).wait(1).to({graphics:mask_3_graphics_311,x:309.7,y:180.1}).wait(1).to({graphics:mask_3_graphics_312,x:309.6,y:178.6}).wait(1).to({graphics:mask_3_graphics_313,x:309.6,y:177}).wait(1).to({graphics:mask_3_graphics_314,x:309.6,y:175.3}).wait(1).to({graphics:mask_3_graphics_315,x:309.5,y:173.5}).wait(1).to({graphics:mask_3_graphics_316,x:309.5,y:171.7}).wait(1).to({graphics:mask_3_graphics_317,x:309.5,y:169.8}).wait(1).to({graphics:mask_3_graphics_318,x:309.5,y:167.8}).wait(1).to({graphics:mask_3_graphics_319,x:309.5,y:165.7}).wait(1).to({graphics:mask_3_graphics_320,x:309.5,y:163.5}).wait(1).to({graphics:mask_3_graphics_321,x:309.5,y:161.3}).wait(1).to({graphics:mask_3_graphics_322,x:309.5,y:159}).wait(1).to({graphics:mask_3_graphics_323,x:309.6,y:156.6}).wait(1).to({graphics:mask_3_graphics_324,x:309.6,y:154.2}).wait(1).to({graphics:mask_3_graphics_325,x:309.7,y:151.7}).wait(1).to({graphics:mask_3_graphics_326,x:309.7,y:149.2}).wait(1).to({graphics:mask_3_graphics_327,x:309.8,y:146.6}).wait(1).to({graphics:mask_3_graphics_328,x:309.8,y:143.9}).wait(1).to({graphics:mask_3_graphics_329,x:309.9,y:141.2}).wait(1).to({graphics:mask_3_graphics_330,x:309.9,y:138.4}).wait(1).to({graphics:mask_3_graphics_331,x:309.9,y:135.6}).wait(1).to({graphics:mask_3_graphics_332,x:309.9,y:132.8}).wait(1).to({graphics:mask_3_graphics_333,x:309.9,y:129.9}).wait(1).to({graphics:mask_3_graphics_334,x:309.9,y:127}).wait(1).to({graphics:mask_3_graphics_335,x:309.9,y:124.1}).wait(1).to({graphics:mask_3_graphics_336,x:309.9,y:121.1}).wait(1).to({graphics:mask_3_graphics_337,x:309.9,y:118.1}).wait(1).to({graphics:mask_3_graphics_338,x:309.9,y:115.1}).wait(1).to({graphics:mask_3_graphics_339,x:309.9,y:112.1}).wait(1).to({graphics:mask_3_graphics_340,x:309.8,y:109}).wait(1).to({graphics:mask_3_graphics_341,x:309.8,y:105.9}).wait(1).to({graphics:mask_3_graphics_342,x:309.8,y:102.9}).wait(1).to({graphics:mask_3_graphics_343,x:309.8,y:99.8}).wait(1).to({graphics:mask_3_graphics_344,x:309.8,y:99.5}).wait(342));

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(20,1,1).p("ASD3CQpnhhmNHrQixDchsEGMgP0Agp");
	this.shape_5.setTransform(333.5,277.9);
	this.shape_5._off = true;

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(289).to({_off:false},0).wait(397));

	// Layer 13
	this.instance_3 = new lib.ar4("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(200.7,85.1,1,1,0,-122,58);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).wait(677));

	// Layer 6 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_109 = new cjs.Graphics().p("AhEJHIEAneIS2KIIkBHfg");
	var mask_4_graphics_110 = new cjs.Graphics().p("ArehOIEHnrIS2KIIkHHrg");
	var mask_4_graphics_111 = new cjs.Graphics().p("ArihIIEPn3IS2KHIkPH4g");
	var mask_4_graphics_112 = new cjs.Graphics().p("ArlhCIEVoDIS2KHIkVIEg");
	var mask_4_graphics_113 = new cjs.Graphics().p("Arog8IEboQIS2KIIkbIQg");
	var mask_4_graphics_114 = new cjs.Graphics().p("Arrg1IEiodIS2KIIkjIdg");
	var mask_4_graphics_115 = new cjs.Graphics().p("ArvgvIEpopIS2KIIkpIpg");
	var mask_4_graphics_116 = new cjs.Graphics().p("ArygpIEvo1IS2KHIkwI2g");
	var mask_4_graphics_117 = new cjs.Graphics().p("Ar2gjIE3pBIS2KHIk3JCg");
	var mask_4_graphics_118 = new cjs.Graphics().p("Ar5gdIE9pOIS2KIIk9JOg");
	var mask_4_graphics_119 = new cjs.Graphics().p("Ar8gXIFDpaIS2KIIlEJbg");
	var mask_4_graphics_120 = new cjs.Graphics().p("AsAgRIFLpmIS2KHIlLJog");
	var mask_4_graphics_121 = new cjs.Graphics().p("AsDgKIFRpzIS2KHIlRJ0g");
	var mask_4_graphics_122 = new cjs.Graphics().p("AsGgEIFXqAIS2KIIlYKBg");
	var mask_4_graphics_123 = new cjs.Graphics().p("AsJABIFeqLIS2KJIlfKMg");
	var mask_4_graphics_124 = new cjs.Graphics().p("AsNAHIFlqXIS2KIIlmKZg");
	var mask_4_graphics_125 = new cjs.Graphics().p("AsQANIFrqjIS2KIIlsKlg");
	var mask_4_graphics_126 = new cjs.Graphics().p("AsTAUIFyqwIS2KIIlzKxg");
	var mask_4_graphics_127 = new cjs.Graphics().p("AsXAZIF5q8IS2KJIl6K+g");
	var mask_4_graphics_128 = new cjs.Graphics().p("AsaAgIF/rJIS2KJImALKg");
	var mask_4_graphics_129 = new cjs.Graphics().p("AseAmIGHrVIS2KIImHLXg");
	var mask_4_graphics_130 = new cjs.Graphics().p("AshAsIGNrhIS2KIImOLjg");
	var mask_4_graphics_131 = new cjs.Graphics().p("AskAyIGTruIS2KJImULvg");
	var mask_4_graphics_132 = new cjs.Graphics().p("AsoA4IGbr6IS2KJImbL8g");
	var mask_4_graphics_133 = new cjs.Graphics().p("AsrA+IGhsGIS2KIImiMJg");
	var mask_4_graphics_134 = new cjs.Graphics().p("AsuBFIGnsTIS2KIImoMVg");
	var mask_4_graphics_135 = new cjs.Graphics().p("AsxBLIGtsfIS2KIImvMhg");
	var mask_4_graphics_136 = new cjs.Graphics().p("As1BRIG1ssIS2KJIm2Mug");
	var mask_4_graphics_137 = new cjs.Graphics().p("As4BXIG7s4IS2KJIm8M6g");
	var mask_4_graphics_138 = new cjs.Graphics().p("As7BeIHBtFIS2KJInDNGg");
	var mask_4_graphics_139 = new cjs.Graphics().p("As/BjIHJtQIS2KIInKNUg");
	var mask_4_graphics_140 = new cjs.Graphics().p("AtCBqIHPteIS2KJInQNgg");
	var mask_4_graphics_141 = new cjs.Graphics().p("AtFBwIHVtqIS2KJInXNsg");
	var mask_4_graphics_142 = new cjs.Graphics().p("AtIB2IHct2IS2KJIneN4g");
	var mask_4_graphics_143 = new cjs.Graphics().p("AtMB8IHjuCIS2KIInkOFg");
	var mask_4_graphics_144 = new cjs.Graphics().p("AtPCCIHpuPIS2KJInrOSg");
	var mask_4_graphics_145 = new cjs.Graphics().p("AtSCJIHwucIS2KJInyOeg");
	var mask_4_graphics_146 = new cjs.Graphics().p("AtWCPIH3uoIS2KJIn5Oqg");
	var mask_4_graphics_147 = new cjs.Graphics().p("AtZCVIH9u0IS2KJIn/O2g");
	var mask_4_graphics_148 = new cjs.Graphics().p("AtdCbIIFvAIS2KIIoGPDg");
	var mask_4_graphics_149 = new cjs.Graphics().p("AtgChIILvNIS2KJIoNPQg");
	var mask_4_graphics_150 = new cjs.Graphics().p("AtkCnIISvZIS2KIIoTPdg");
	var mask_4_graphics_151 = new cjs.Graphics().p("AtnCtIIZvlIS2KIIoaPpg");
	var mask_4_graphics_152 = new cjs.Graphics().p("AtqCzIIfvxIS2KIIohP2g");
	var mask_4_graphics_153 = new cjs.Graphics().p("AtuC6IImv/IS2KJIonQCg");
	var mask_4_graphics_154 = new cjs.Graphics().p("AtxC/IItwKIS2KIIovQPg");
	var mask_4_graphics_155 = new cjs.Graphics().p("At0DGIIzwXIS2KIIo1Qbg");
	var mask_4_graphics_156 = new cjs.Graphics().p("At4DMII6wjIS2KIIo7Qng");
	var mask_4_graphics_157 = new cjs.Graphics().p("At7DSIJBwvIS2KIIpDQ0g");
	var mask_4_graphics_158 = new cjs.Graphics().p("At+DYIJHw8IS2KJIpJRAg");
	var mask_4_graphics_159 = new cjs.Graphics().p("AuBDeIJNxIIS2KIIpPRNg");
	var mask_4_graphics_160 = new cjs.Graphics().p("AuFDlIJVxVIS2KIIpXRZg");
	var mask_4_graphics_161 = new cjs.Graphics().p("AuIDrIJbxhIS2KIIpdRlg");
	var mask_4_graphics_162 = new cjs.Graphics().p("AuLDxIJhxuIS2KJIpkRyg");
	var mask_4_graphics_163 = new cjs.Graphics().p("AuPD3IJpx6IS2KIIprR/g");
	var mask_4_graphics_164 = new cjs.Graphics().p("AuSD9IJvyGIS2KIIpxSLg");
	var mask_4_graphics_165 = new cjs.Graphics().p("AuVEEIJ1yTIS2KIIp4SXg");
	var mask_4_graphics_166 = new cjs.Graphics().p("AuYEJIJ7yeIS2KIIp+Skg");
	var mask_4_graphics_167 = new cjs.Graphics().p("AucEQIKDysIS2KJIqFSwg");
	var mask_4_graphics_168 = new cjs.Graphics().p("AufEWIKJy4IS2KIIqMS9g");
	var mask_4_graphics_169 = new cjs.Graphics().p("AujEcIKQzEIS2KIIqSTJg");
	var mask_4_graphics_170 = new cjs.Graphics().p("AumEiIKXzQIS2KIIqaTWg");
	var mask_4_graphics_171 = new cjs.Graphics().p("AupEoIKdzdIS2KJIqgTig");
	var mask_4_graphics_172 = new cjs.Graphics().p("AutEuIKkzpIS2KIIqmTvg");
	var mask_4_graphics_173 = new cjs.Graphics().p("AuwE1IKrz2IS2KIIquT7g");
	var mask_4_graphics_174 = new cjs.Graphics().p("AuzE6IKx0BIS2KIIq0UHg");
	var mask_4_graphics_175 = new cjs.Graphics().p("Au2FBIK30OIS2KIIq6UTg");
	var mask_4_graphics_176 = new cjs.Graphics().p("Au6FHIK/0bIS2KJIrCUgg");
	var mask_4_graphics_177 = new cjs.Graphics().p("Au9FNILF0nIS2KIIrIUtg");
	var mask_4_graphics_178 = new cjs.Graphics().p("AvAFTILL0zIS2KIIrOU5g");
	var mask_4_graphics_179 = new cjs.Graphics().p("AvEFZILT0/IS2KIIrWVFg");
	var mask_4_graphics_180 = new cjs.Graphics().p("AvHFgILZ1NIS2KJIrcVSg");
	var mask_4_graphics_181 = new cjs.Graphics().p("AvKFmILf1ZIS2KIIrjVfg");
	var mask_4_graphics_182 = new cjs.Graphics().p("AvOFsILn1lIS2KIIrqVrg");
	var mask_4_graphics_183 = new cjs.Graphics().p("AvRFyILt1xIS2KIIrwV4g");
	var mask_4_graphics_184 = new cjs.Graphics().p("AvVF4IL01+IS2KJIr3WEg");
	var mask_4_graphics_185 = new cjs.Graphics().p("AvYF/IL72LIS2KJIr+WQg");
	var mask_4_graphics_186 = new cjs.Graphics().p("AvbGEIMB2WIS2KIIsEWdg");
	var mask_4_graphics_187 = new cjs.Graphics().p("AveGLIMH2jIS2KIIsLWpg");
	var mask_4_graphics_188 = new cjs.Graphics().p("AviGRIMP2vIS2KIIsSW1g");
	var mask_4_graphics_189 = new cjs.Graphics().p("AvlGXIMV28IS2KJIsYXCg");
	var mask_4_graphics_190 = new cjs.Graphics().p("AvoGdIMb3IIS2KJIsfXOg");
	var mask_4_graphics_191 = new cjs.Graphics().p("AvsGjIMj3VIS2KJIsmXbg");
	var mask_4_graphics_192 = new cjs.Graphics().p("AvvGqIMp3iIS2KJIssXog");
	var mask_4_graphics_193 = new cjs.Graphics().p("AvyGwIMv3uIS2KJIszX0g");
	var mask_4_graphics_194 = new cjs.Graphics().p("Av2G2IM236IS2KJIs5YAg");
	var mask_4_graphics_195 = new cjs.Graphics().p("Av5G8IM94GIS2KJItBYMg");
	var mask_4_graphics_196 = new cjs.Graphics().p("Av8HCIND4TIS2KJItHYag");
	var mask_4_graphics_197 = new cjs.Graphics().p("Av/HIINJ4fIS2KJItNYmg");
	var mask_4_graphics_198 = new cjs.Graphics().p("AwDHOINR4rIS2KJItVYyg");
	var mask_4_graphics_199 = new cjs.Graphics().p("AwGHVINX44IS2KJItbY+g");
	var mask_4_graphics_200 = new cjs.Graphics().p("AwJHbINd5FIS2KJItiZMg");
	var mask_4_graphics_201 = new cjs.Graphics().p("AwNHhINl5RIS2KJItpZYg");
	var mask_4_graphics_202 = new cjs.Graphics().p("AwQHnINr5dIS2KJItvZkg");
	var mask_4_graphics_203 = new cjs.Graphics().p("AwUHtINy5pIS2KJIt2Zwg");
	var mask_4_graphics_204 = new cjs.Graphics().p("AwXHzIN552IS2KJIt9Z9g");
	var mask_4_graphics_205 = new cjs.Graphics().p("AwaH6IN/6DIS2KJIuDaJg");
	var mask_4_graphics_206 = new cjs.Graphics().p("AweIAIOG6PIS2KJIuJaWg");
	var mask_4_graphics_207 = new cjs.Graphics().p("AwhIGION6bIS2KJIuRaig");
	var mask_4_graphics_208 = new cjs.Graphics().p("AwkIMIOT6nIS2KJIuXaug");
	var mask_4_graphics_209 = new cjs.Graphics().p("AwnISIOZ60IS2KJIuda7g");
	var mask_4_graphics_210 = new cjs.Graphics().p("AwrIYIOh7AIS2KJIulbIg");
	var mask_4_graphics_211 = new cjs.Graphics().p("AwuIeIOn7MIS2KJIurbUg");
	var mask_4_graphics_212 = new cjs.Graphics().p("AwxIlIOt7ZIS2KJIuybgg");
	var mask_4_graphics_213 = new cjs.Graphics().p("Aw1IrIO17mIS2KJIu5bug");
	var mask_4_graphics_214 = new cjs.Graphics().p("Aw4IxIO77yIS2KJIvAb6g");
	var mask_4_graphics_215 = new cjs.Graphics().p("Aw7I3IPB7+IS2KJIvGcGg");
	var mask_4_graphics_216 = new cjs.Graphics().p("Aw/I9IPJ8KIS2KJIvNcSg");
	var mask_4_graphics_217 = new cjs.Graphics().p("AxCJDIPP8WIS2KJIvUceg");
	var mask_4_graphics_218 = new cjs.Graphics().p("AxFJJIPV8jIS2KJIvacrg");
	var mask_4_graphics_219 = new cjs.Graphics().p("AxJJQIPd8wIS2KJIvhc4g");
	var mask_4_graphics_220 = new cjs.Graphics().p("AxMJWIPj88IS2KJIvndEg");
	var mask_4_graphics_221 = new cjs.Graphics().p("AxPJcIPp9IIS2KJIvudQg");
	var mask_4_graphics_222 = new cjs.Graphics().p("AxTJiIPw9VIS2KJIv0deg");
	var mask_4_graphics_223 = new cjs.Graphics().p("AxWJoIP39hIS2KJIv7dqg");
	var mask_4_graphics_224 = new cjs.Graphics().p("AxZJuIP99tIS2KJIwCd2g");
	var mask_4_graphics_225 = new cjs.Graphics().p("AxdJ1IQE96IS2KJIwIeCg");
	var mask_4_graphics_226 = new cjs.Graphics().p("AxgJ7IQL+GIS2KJIwQeOg");
	var mask_4_graphics_227 = new cjs.Graphics().p("AxjKBIQR+TIS2KJIwWecg");
	var mask_4_graphics_228 = new cjs.Graphics().p("AxmKHIQX+fIS2KJIwdeog");
	var mask_4_graphics_229 = new cjs.Graphics().p("AxqKNIQf+rIS2KJIwke0g");
	var mask_4_graphics_230 = new cjs.Graphics().p("AxtKTIQm+3IS2KIIwsfBg");
	var mask_4_graphics_231 = new cjs.Graphics().p("AxxKZIQt/EIS2KJIwyfNg");
	var mask_4_graphics_232 = new cjs.Graphics().p("Ax0KfIQz/QIS2KJIw4fag");
	var mask_4_graphics_233 = new cjs.Graphics().p("Ax3KmIQ6/dIS2KJIxAfmg");
	var mask_4_graphics_234 = new cjs.Graphics().p("Ax7KsIRB/pIS2KIIxGfzg");
	var mask_4_graphics_235 = new cjs.Graphics().p("Ax+KyIRH/1IS2KIIxMf/g");
	var mask_4_graphics_236 = new cjs.Graphics().p("AyCK4MARPggCIS2KJMgRTAgLg");
	var mask_4_graphics_237 = new cjs.Graphics().p("AyFK+MARVggOIS2KJMgRaAgYg");
	var mask_4_graphics_238 = new cjs.Graphics().p("AyILEMARbggaIS2KJMgRhAgkg");
	var mask_4_graphics_239 = new cjs.Graphics().p("AyLLLMARhggnIS2KIMgRnAgxg");
	var mask_4_graphics_240 = new cjs.Graphics().p("AyPLRMARpgg0IS2KJMgRuAg+g");
	var mask_4_graphics_241 = new cjs.Graphics().p("AySLXMARvghAIS2KJMgR0AhKg");
	var mask_4_graphics_242 = new cjs.Graphics().p("AyVLdMAR1ghMIS2KJMgR7AhWg");
	var mask_4_graphics_243 = new cjs.Graphics().p("AyZLjMAR9ghYIS2KJMgSCAhjg");
	var mask_4_graphics_244 = new cjs.Graphics().p("AycLpMASDghlIS2KJMgSIAhwg");
	var mask_4_graphics_245 = new cjs.Graphics().p("AyfLwMASJghyIS2KJMgSPAh8g");
	var mask_4_graphics_246 = new cjs.Graphics().p("AyjL2MASRgh+IS2KJMgSWAiIg");
	var mask_4_graphics_247 = new cjs.Graphics().p("AymL8MASXgiKIS2KJMgSdAiUg");
	var mask_4_graphics_248 = new cjs.Graphics().p("AypMCMASdgiWIS2KJMgSjAigg");
	var mask_4_graphics_249 = new cjs.Graphics().p("AysMIMASkgijIS2KJMgSrAiug");
	var mask_4_graphics_250 = new cjs.Graphics().p("AywMOMASrgivIS2KJMgSxAi6g");
	var mask_4_graphics_251 = new cjs.Graphics().p("AyzMVMASxgi8IS2KJMgS2AjGg");
	var mask_4_graphics_252 = new cjs.Graphics().p("Ay2MbMAS3gjIIS3KJMgS+AjTg");
	var mask_4_graphics_253 = new cjs.Graphics().p("Ay6MhMAS+gjVIS3KJMgTEAjgg");
	var mask_4_graphics_254 = new cjs.Graphics().p("Ay9MnMATEgjhIS3KJMgTKAjsg");
	var mask_4_graphics_255 = new cjs.Graphics().p("AzBMtMATMgjtIS3KJMgTRAj4g");
	var mask_4_graphics_256 = new cjs.Graphics().p("AzEMzMATSgj5IS3KJMgTYAkEg");
	var mask_4_graphics_257 = new cjs.Graphics().p("AzHM6MATYgkGIS3KJMgTeAkRg");
	var mask_4_graphics_258 = new cjs.Graphics().p("AzLNAMATggkTIS3KJMgTlAkeg");
	var mask_4_graphics_259 = new cjs.Graphics().p("AzONGMATmgkfIS3KJMgTsAkqg");
	var mask_4_graphics_260 = new cjs.Graphics().p("AzRNMMATsgkrIS3KJMgTyAk2g");
	var mask_4_graphics_261 = new cjs.Graphics().p("AzVNSMAT0gk3IS3KJMgT6AlCg");
	var mask_4_graphics_262 = new cjs.Graphics().p("AzYNYMAT6glEIS3KJMgUAAlQg");
	var mask_4_graphics_263 = new cjs.Graphics().p("AzbNeMAUAglQIS3KJMgUHAlcg");
	var mask_4_graphics_264 = new cjs.Graphics().p("AzeNkMAUHglcIS3KJMgUOAlog");
	var mask_4_graphics_265 = new cjs.Graphics().p("AziNrMAUOglpIS3KJMgUUAl0g");
	var mask_4_graphics_266 = new cjs.Graphics().p("AzlNxMAUUgl1IS3KJMgUbAmAg");
	var mask_4_graphics_267 = new cjs.Graphics().p("AzoN3MAUagmCIS3KJMgUhAmOg");
	var mask_4_graphics_268 = new cjs.Graphics().p("AzsN9MAUigmOIS3KJMgUoAmag");
	var mask_4_graphics_269 = new cjs.Graphics().p("AzvODMAUogmaIS3KJMgUvAmmg");
	var mask_4_graphics_270 = new cjs.Graphics().p("Az4OWMAU6gm9IS3KJMgVAAnGg");
	var mask_4_graphics_271 = new cjs.Graphics().p("A0COoMAVOgnfIS3KJMgVRAnmg");
	var mask_4_graphics_272 = new cjs.Graphics().p("A0LO6MAVggoBIS3KIMgVjAoHg");
	var mask_4_graphics_273 = new cjs.Graphics().p("A0UPNMAVygokIS3KIMgVzAong");
	var mask_4_graphics_274 = new cjs.Graphics().p("AzJZ7MAWFgpHIS3KJMgWFApGg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(109).to({graphics:mask_4_graphics_109,x:139.4,y:123.2}).wait(1).to({graphics:mask_4_graphics_110,x:205.4,y:190.6}).wait(1).to({graphics:mask_4_graphics_111,x:205,y:191.2}).wait(1).to({graphics:mask_4_graphics_112,x:204.7,y:191.8}).wait(1).to({graphics:mask_4_graphics_113,x:204.4,y:192.5}).wait(1).to({graphics:mask_4_graphics_114,x:204.1,y:193.1}).wait(1).to({graphics:mask_4_graphics_115,x:203.7,y:193.7}).wait(1).to({graphics:mask_4_graphics_116,x:203.4,y:194.3}).wait(1).to({graphics:mask_4_graphics_117,x:203.1,y:194.9}).wait(1).to({graphics:mask_4_graphics_118,x:202.7,y:195.6}).wait(1).to({graphics:mask_4_graphics_119,x:202.4,y:196.2}).wait(1).to({graphics:mask_4_graphics_120,x:202.1,y:196.8}).wait(1).to({graphics:mask_4_graphics_121,x:201.7,y:197.4}).wait(1).to({graphics:mask_4_graphics_122,x:201.4,y:198.1}).wait(1).to({graphics:mask_4_graphics_123,x:201.1,y:198.7}).wait(1).to({graphics:mask_4_graphics_124,x:200.7,y:199.3}).wait(1).to({graphics:mask_4_graphics_125,x:200.4,y:199.9}).wait(1).to({graphics:mask_4_graphics_126,x:200.1,y:200.5}).wait(1).to({graphics:mask_4_graphics_127,x:199.7,y:201.2}).wait(1).to({graphics:mask_4_graphics_128,x:199.4,y:201.8}).wait(1).to({graphics:mask_4_graphics_129,x:199.1,y:202.4}).wait(1).to({graphics:mask_4_graphics_130,x:198.7,y:203}).wait(1).to({graphics:mask_4_graphics_131,x:198.4,y:203.7}).wait(1).to({graphics:mask_4_graphics_132,x:198.1,y:204.3}).wait(1).to({graphics:mask_4_graphics_133,x:197.7,y:204.9}).wait(1).to({graphics:mask_4_graphics_134,x:197.4,y:205.5}).wait(1).to({graphics:mask_4_graphics_135,x:197.1,y:206.1}).wait(1).to({graphics:mask_4_graphics_136,x:196.7,y:206.7}).wait(1).to({graphics:mask_4_graphics_137,x:196.4,y:207.4}).wait(1).to({graphics:mask_4_graphics_138,x:196.1,y:208}).wait(1).to({graphics:mask_4_graphics_139,x:195.7,y:208.6}).wait(1).to({graphics:mask_4_graphics_140,x:195.4,y:209.2}).wait(1).to({graphics:mask_4_graphics_141,x:195.1,y:209.9}).wait(1).to({graphics:mask_4_graphics_142,x:194.8,y:210.5}).wait(1).to({graphics:mask_4_graphics_143,x:194.4,y:211.1}).wait(1).to({graphics:mask_4_graphics_144,x:194.1,y:211.7}).wait(1).to({graphics:mask_4_graphics_145,x:193.8,y:212.3}).wait(1).to({graphics:mask_4_graphics_146,x:193.4,y:213}).wait(1).to({graphics:mask_4_graphics_147,x:193.1,y:213.6}).wait(1).to({graphics:mask_4_graphics_148,x:192.8,y:214.2}).wait(1).to({graphics:mask_4_graphics_149,x:192.5,y:214.8}).wait(1).to({graphics:mask_4_graphics_150,x:192.1,y:215.5}).wait(1).to({graphics:mask_4_graphics_151,x:191.8,y:216.1}).wait(1).to({graphics:mask_4_graphics_152,x:191.5,y:216.7}).wait(1).to({graphics:mask_4_graphics_153,x:191.1,y:217.3}).wait(1).to({graphics:mask_4_graphics_154,x:190.8,y:218}).wait(1).to({graphics:mask_4_graphics_155,x:190.5,y:218.6}).wait(1).to({graphics:mask_4_graphics_156,x:190.1,y:219.2}).wait(1).to({graphics:mask_4_graphics_157,x:189.8,y:219.8}).wait(1).to({graphics:mask_4_graphics_158,x:189.5,y:220.4}).wait(1).to({graphics:mask_4_graphics_159,x:189.1,y:221.1}).wait(1).to({graphics:mask_4_graphics_160,x:188.8,y:221.7}).wait(1).to({graphics:mask_4_graphics_161,x:188.5,y:222.3}).wait(1).to({graphics:mask_4_graphics_162,x:188.1,y:222.9}).wait(1).to({graphics:mask_4_graphics_163,x:187.8,y:223.6}).wait(1).to({graphics:mask_4_graphics_164,x:187.5,y:224.2}).wait(1).to({graphics:mask_4_graphics_165,x:187.1,y:224.8}).wait(1).to({graphics:mask_4_graphics_166,x:186.8,y:225.4}).wait(1).to({graphics:mask_4_graphics_167,x:186.5,y:226}).wait(1).to({graphics:mask_4_graphics_168,x:186.1,y:226.7}).wait(1).to({graphics:mask_4_graphics_169,x:185.8,y:227.3}).wait(1).to({graphics:mask_4_graphics_170,x:185.5,y:227.9}).wait(1).to({graphics:mask_4_graphics_171,x:185.1,y:228.5}).wait(1).to({graphics:mask_4_graphics_172,x:184.8,y:229.2}).wait(1).to({graphics:mask_4_graphics_173,x:184.5,y:229.8}).wait(1).to({graphics:mask_4_graphics_174,x:184.1,y:230.4}).wait(1).to({graphics:mask_4_graphics_175,x:183.8,y:231}).wait(1).to({graphics:mask_4_graphics_176,x:183.5,y:231.6}).wait(1).to({graphics:mask_4_graphics_177,x:183.1,y:232.3}).wait(1).to({graphics:mask_4_graphics_178,x:182.8,y:232.9}).wait(1).to({graphics:mask_4_graphics_179,x:182.5,y:233.5}).wait(1).to({graphics:mask_4_graphics_180,x:182.2,y:234.1}).wait(1).to({graphics:mask_4_graphics_181,x:181.8,y:234.8}).wait(1).to({graphics:mask_4_graphics_182,x:181.5,y:235.4}).wait(1).to({graphics:mask_4_graphics_183,x:181.2,y:236}).wait(1).to({graphics:mask_4_graphics_184,x:180.8,y:236.6}).wait(1).to({graphics:mask_4_graphics_185,x:180.5,y:237.2}).wait(1).to({graphics:mask_4_graphics_186,x:180.2,y:237.9}).wait(1).to({graphics:mask_4_graphics_187,x:179.8,y:238.5}).wait(1).to({graphics:mask_4_graphics_188,x:179.5,y:239.1}).wait(1).to({graphics:mask_4_graphics_189,x:179.2,y:239.7}).wait(1).to({graphics:mask_4_graphics_190,x:178.8,y:240.3}).wait(1).to({graphics:mask_4_graphics_191,x:178.5,y:241}).wait(1).to({graphics:mask_4_graphics_192,x:178.2,y:241.6}).wait(1).to({graphics:mask_4_graphics_193,x:177.8,y:242.2}).wait(1).to({graphics:mask_4_graphics_194,x:177.5,y:242.8}).wait(1).to({graphics:mask_4_graphics_195,x:177.2,y:243.4}).wait(1).to({graphics:mask_4_graphics_196,x:176.8,y:244.1}).wait(1).to({graphics:mask_4_graphics_197,x:176.5,y:244.7}).wait(1).to({graphics:mask_4_graphics_198,x:176.2,y:245.3}).wait(1).to({graphics:mask_4_graphics_199,x:175.8,y:245.9}).wait(1).to({graphics:mask_4_graphics_200,x:175.5,y:246.6}).wait(1).to({graphics:mask_4_graphics_201,x:175.2,y:247.2}).wait(1).to({graphics:mask_4_graphics_202,x:174.8,y:247.8}).wait(1).to({graphics:mask_4_graphics_203,x:174.5,y:248.4}).wait(1).to({graphics:mask_4_graphics_204,x:174.2,y:249.1}).wait(1).to({graphics:mask_4_graphics_205,x:173.8,y:249.7}).wait(1).to({graphics:mask_4_graphics_206,x:173.5,y:250.3}).wait(1).to({graphics:mask_4_graphics_207,x:173.2,y:250.9}).wait(1).to({graphics:mask_4_graphics_208,x:172.9,y:251.5}).wait(1).to({graphics:mask_4_graphics_209,x:172.5,y:252.2}).wait(1).to({graphics:mask_4_graphics_210,x:172.2,y:252.8}).wait(1).to({graphics:mask_4_graphics_211,x:171.9,y:253.4}).wait(1).to({graphics:mask_4_graphics_212,x:171.5,y:254}).wait(1).to({graphics:mask_4_graphics_213,x:171.2,y:254.7}).wait(1).to({graphics:mask_4_graphics_214,x:170.9,y:255.3}).wait(1).to({graphics:mask_4_graphics_215,x:170.5,y:255.9}).wait(1).to({graphics:mask_4_graphics_216,x:170.2,y:256.5}).wait(1).to({graphics:mask_4_graphics_217,x:169.9,y:257.1}).wait(1).to({graphics:mask_4_graphics_218,x:169.5,y:257.8}).wait(1).to({graphics:mask_4_graphics_219,x:169.2,y:258.4}).wait(1).to({graphics:mask_4_graphics_220,x:168.9,y:259}).wait(1).to({graphics:mask_4_graphics_221,x:168.5,y:259.6}).wait(1).to({graphics:mask_4_graphics_222,x:168.2,y:260.3}).wait(1).to({graphics:mask_4_graphics_223,x:167.9,y:260.9}).wait(1).to({graphics:mask_4_graphics_224,x:167.5,y:261.5}).wait(1).to({graphics:mask_4_graphics_225,x:167.2,y:262.1}).wait(1).to({graphics:mask_4_graphics_226,x:166.9,y:262.7}).wait(1).to({graphics:mask_4_graphics_227,x:166.5,y:263.4}).wait(1).to({graphics:mask_4_graphics_228,x:166.2,y:264}).wait(1).to({graphics:mask_4_graphics_229,x:165.9,y:264.6}).wait(1).to({graphics:mask_4_graphics_230,x:165.6,y:265.2}).wait(1).to({graphics:mask_4_graphics_231,x:165.2,y:265.9}).wait(1).to({graphics:mask_4_graphics_232,x:164.9,y:266.5}).wait(1).to({graphics:mask_4_graphics_233,x:164.6,y:267.1}).wait(1).to({graphics:mask_4_graphics_234,x:164.2,y:267.7}).wait(1).to({graphics:mask_4_graphics_235,x:163.9,y:268.3}).wait(1).to({graphics:mask_4_graphics_236,x:163.6,y:269}).wait(1).to({graphics:mask_4_graphics_237,x:163.2,y:269.6}).wait(1).to({graphics:mask_4_graphics_238,x:162.9,y:270.2}).wait(1).to({graphics:mask_4_graphics_239,x:162.6,y:270.8}).wait(1).to({graphics:mask_4_graphics_240,x:162.2,y:271.5}).wait(1).to({graphics:mask_4_graphics_241,x:161.9,y:272.1}).wait(1).to({graphics:mask_4_graphics_242,x:161.6,y:272.7}).wait(1).to({graphics:mask_4_graphics_243,x:161.2,y:273.3}).wait(1).to({graphics:mask_4_graphics_244,x:160.9,y:273.9}).wait(1).to({graphics:mask_4_graphics_245,x:160.6,y:274.5}).wait(1).to({graphics:mask_4_graphics_246,x:160.3,y:275.2}).wait(1).to({graphics:mask_4_graphics_247,x:159.9,y:275.8}).wait(1).to({graphics:mask_4_graphics_248,x:159.6,y:276.4}).wait(1).to({graphics:mask_4_graphics_249,x:159.3,y:277}).wait(1).to({graphics:mask_4_graphics_250,x:158.9,y:277.7}).wait(1).to({graphics:mask_4_graphics_251,x:158.6,y:278.3}).wait(1).to({graphics:mask_4_graphics_252,x:158.3,y:278.9}).wait(1).to({graphics:mask_4_graphics_253,x:157.9,y:279.5}).wait(1).to({graphics:mask_4_graphics_254,x:157.6,y:280.2}).wait(1).to({graphics:mask_4_graphics_255,x:157.3,y:280.8}).wait(1).to({graphics:mask_4_graphics_256,x:156.9,y:281.4}).wait(1).to({graphics:mask_4_graphics_257,x:156.6,y:282}).wait(1).to({graphics:mask_4_graphics_258,x:156.3,y:282.6}).wait(1).to({graphics:mask_4_graphics_259,x:155.9,y:283.3}).wait(1).to({graphics:mask_4_graphics_260,x:155.6,y:283.9}).wait(1).to({graphics:mask_4_graphics_261,x:155.3,y:284.5}).wait(1).to({graphics:mask_4_graphics_262,x:154.9,y:285.1}).wait(1).to({graphics:mask_4_graphics_263,x:154.6,y:285.8}).wait(1).to({graphics:mask_4_graphics_264,x:154.3,y:286.4}).wait(1).to({graphics:mask_4_graphics_265,x:153.9,y:287}).wait(1).to({graphics:mask_4_graphics_266,x:153.6,y:287.6}).wait(1).to({graphics:mask_4_graphics_267,x:153.3,y:288.2}).wait(1).to({graphics:mask_4_graphics_268,x:152.9,y:288.9}).wait(1).to({graphics:mask_4_graphics_269,x:152.6,y:289.5}).wait(1).to({graphics:mask_4_graphics_270,x:151.7,y:291.1}).wait(1).to({graphics:mask_4_graphics_271,x:150.8,y:292.7}).wait(1).to({graphics:mask_4_graphics_272,x:149.8,y:294.3}).wait(1).to({graphics:mask_4_graphics_273,x:148.9,y:295.9}).wait(1).to({graphics:mask_4_graphics_274,x:139.5,y:230.7}).wait(412));

	// Layer 5
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(20,1,1).p("Akl2JQBbgXBHgCQCZgDCQA9QCQA+BQB7QBOB5AWCRQAWCRgMBTQgNBTgJAZIvVf4");
	this.shape_6.setTransform(151.4,277.7);
	this.shape_6._off = true;

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(109).to({_off:false},0).wait(577));

	// Layer 4 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_9 = new cjs.Graphics().p("AwUUxQoroggGsJQgJsHIgorMAp0ApBQogIrsHAHIgVAAQr7AAojoYg");
	var mask_5_graphics_10 = new cjs.Graphics().p("AD5dJQsIgRoZoxQoaoxASsHQAQsJIxoZMAogAqTQogIJrpAAIgvAAg");
	var mask_5_graphics_11 = new cjs.Graphics().p("ADUdHQsHgqoIpBQoHpCAqsGQAosIJCoHMAnKArjQoXHirAAAQg4AAg5gDg");
	var mask_5_graphics_12 = new cjs.Graphics().p("ACwdCQsGhBn1pSQn1pSBDsEQBAsGJSn1MAlxAsxQoNG7qZAAQhXAAhZgIg");
	var mask_5_graphics_13 = new cjs.Graphics().p("ACMc8QsDhaniphQniphBbsCQBZsDJhniMAkWAt7QoCGWp0AAQh1AAh5gOg");
	var mask_5_graphics_14 = new cjs.Graphics().p("ABqc0QsAhynPpwQnPpwBzr/QBxsAJwnOMAi5AvCQn1F0pRAAQiSAAiXgXg");
	var mask_5_graphics_15 = new cjs.Graphics().p("ABIcqQr8iKm7p+Qm7p+CLr7QCJr8J/m7MAhYAwHQnnFSovAAQiuAAi1ghg");
	var mask_5_graphics_16 = new cjs.Graphics().p("AAncfQr3iimnqMQmmqMCjr2QChr3KLmnMAf3AxJQnYEyoPAAQjJAAjSgtg");
	var mask_5_graphics_17 = new cjs.Graphics().p("AAHcRQryi6mSqYQmSqZC7rxQC5ryKZmRMAeSAyHQnHETnwAAQjlAAjtg7g");
	var mask_5_graphics_18 = new cjs.Graphics().p("AgYcCQrsjRl9qlQl9qmDTrqQDQrrKll9MActAzDQm1D1nSAAQkAAAkIhKg");
	var mask_5_graphics_19 = new cjs.Graphics().p("Ag2bxQrljploqwQlnqxDqrjQDorlKwlnMAbFAz7QmiDam1AAQkaAAkihcg");
	var mask_5_graphics_20 = new cjs.Graphics().p("AhTbfQrekAlSq8QlRq8EBrbQD/rdK7lSMAZcA0wQmODAmZAAQk1AAk6hug");
	var mask_5_graphics_21 = new cjs.Graphics().p("AhwbLQrVkYk7rFQk8rGEYrTQEWrVLGk7MAXwA1hQl5Cnl8AAQlRAAlSiCg");
	var mask_5_graphics_22 = new cjs.Graphics().p("AiLa1QrNkukkrQQklrOEurLQEtrLLPklMAWEA2PQliCQliAAQlrAAlpiYg");
	var mask_5_graphics_23 = new cjs.Graphics().p("AimadQrClEkOrYQkOrYFErBQFDrBLZkOMAUWA25QlMB7lGAAQmHAAl/iwg");
	var mask_5_graphics_24 = new cjs.Graphics().p("Ai/aEQq4laj3rhQj3rfFbq2QFYq4Lgj3MASoA3hQkzBnksAAQmjAAmTjJg");
	var mask_5_graphics_25 = new cjs.Graphics().p("AjYZpQqslwjgrnQjgrnFxqrQFuqsLnjgMAQ4A4EQkaBVkRAAQnAAAmnjkg");
	var mask_5_graphics_26 = new cjs.Graphics().p("AjvZNQqhmFjIrvQjIrtGFqfQGEqhLujIMAPGA4lQj/BEj2AAQneAAm5kAg");
	var mask_5_graphics_27 = new cjs.Graphics().p("AkFYvQqUmaixr0Qixr0GbqSQGZqULzixMANUA5CQjkA1jbAAQn8AAnKkeg");
	var mask_5_graphics_28 = new cjs.Graphics().p("AkbYQQqGmviZr5QiZr5GvqFQGuqHL4iZMALhA5bQjIAoi/AAQocAAnbk9g");
	var mask_5_graphics_29 = new cjs.Graphics().p("AkuXvQp5nDiBr+QiBr9HDp3QHCp5L9iBMAJtA5wQirAcikAAQo8AAnpldg");
	var mask_5_graphics_30 = new cjs.Graphics().p("AlBXMQprnWhosCQhpsAHXppQHVpqMBhpMAH4A6BQiMATiHAAQpfAAn3mAg");
	var mask_5_graphics_31 = new cjs.Graphics().p("AlTWqQpbnphQsFQhRsDHqpaQHppbMDhRMAGEA6PQhuAMhpAAQqDAAoEmkg");
	var mask_5_graphics_32 = new cjs.Graphics().p("AljWHQpLn8g4sHQg4sFH8pKQH7pMMGg4MAEOA6ZQhNAGhLAAQqpAAoPnJg");
	var mask_5_graphics_33 = new cjs.Graphics().p("AlxViQo8oPgfsIQggsHIPo5QIMo8MIgfMACYA6fQgsACgrAAQrRAAoYnvg");
	var mask_5_graphics_34 = new cjs.Graphics().p("Al/U6QoqoggIsJQgHsHIhopQIdorMJgHMAAjA6jIgVAAQr7AAohoYg");
	var mask_5_graphics_35 = new cjs.Graphics().p("Am0URQoZoyARsHQARsJIxoXQIvoZMJARMgBTA6iQsJgSoWovg");
	var mask_5_graphics_36 = new cjs.Graphics().p("An6TnQoHpCAqsHQApsHJCoGQJAoHMHApMgDIA6eQsIgqoFpAg");
	var mask_5_graphics_37 = new cjs.Graphics().p("Ao9S8Qn1pSBCsEQBCsGJSnzQJPn1MGBCMgE+A6VQsFhCnzpRg");
	var mask_5_graphics_38 = new cjs.Graphics().p("AqASSQnhphBasDQBasDJhngQJfniMEBaMgG0A6JQsChanhpgg");
	var mask_5_graphics_39 = new cjs.Graphics().p("ArARoQnPpxBzr/QBysAJwnNQJunOMAByMgIoA56Qr/hznNpug");
	var mask_5_graphics_40 = new cjs.Graphics().p("Ar/Q9Qm7p/CLr7QCKr8J+m5QJ8m7L8CLMgKcA5mQr7iKm5p9g");
	var mask_5_graphics_41 = new cjs.Graphics().p("As9QSQmmqMCir2QCjr4KMmkQKJmnL4CiMgMQA5QQr3ijmlqKg");
	var mask_5_graphics_42 = new cjs.Graphics().p("At4PnQmSqZC6rxQC7ryKYmQQKXmSLyC7MgODA40Qrxi6mQqXg");
	var mask_5_graphics_43 = new cjs.Graphics().p("AuyO8Ql9qmDSrqQDSrsKll7QKjl8LrDRMgP0A4XQrrjSl7qjg");
	var mask_5_graphics_44 = new cjs.Graphics().p("AvqORQlnqxDprkQDprkKxlmQKulnLlDpMgRmA31Qrjjplmqvg");
	var mask_5_graphics_45 = new cjs.Graphics().p("AweNoQlSq8D/rcQD/rdK7lRQK5lTLdD/MgTPA3SQrcj/lSq5g");
	var mask_5_graphics_46 = new cjs.Graphics().p("AxPM/Qk9rFEUrVQEVrVLFk8QLCk+LWEVMgU3A2sQrWkVk8rDg");
	var mask_5_graphics_47 = new cjs.Graphics().p("Ax/MWQkorOEqrMQEqrNLOkmQLMkpLNEqMgWfA2CQrNkqknrMg");
	var mask_5_graphics_48 = new cjs.Graphics().p("AytLtQkTrXFArCQE/rELWkRQLVkTLDE/MgYFA1WQrDk/kSrVg");
	var mask_5_graphics_49 = new cjs.Graphics().p("AzZLEQj9rdFUq6QFUq6Lej7QLcj+K6FVMgZqA0mQq5lUj8rdg");
	var mask_5_graphics_50 = new cjs.Graphics().p("A0EKcQjnrlFpqvQFpqvLljmQLkjoKvFpMgbNAz0Qqwlpjmrjg");
	var mask_5_graphics_51 = new cjs.Graphics().p("A0sJzQjRrrF9qkQF+qkLrjQQLqjRKkF9MgcvAy/Qqkl9jQrrg");
	var mask_5_graphics_52 = new cjs.Graphics().p("A1TJLQi6rxGRqYQGRqZLxi5QLwi7KZGRMgePAyGQqZmRi6rwg");
	var mask_5_graphics_53 = new cjs.Graphics().p("A13IjQikr2GlqMQGkqNL2iiQL2ilKMGlMgfuAxLQqMmkijr2g");
	var mask_5_graphics_54 = new cjs.Graphics().p("A2aH8QiNr7G4p/QG4qAL6iMQL7iOJ/G4MghKAwOQqAm4iNr6g");
	var mask_5_graphics_55 = new cjs.Graphics().p("A26HVQh3r/HLpyQHLpyL+h1QL+h4JyHLMgilAvNQpynLh2r9g");
	var mask_5_graphics_56 = new cjs.Graphics().p("A3YGuQhgsCHdpkQHepkMAhfQMChgJkHdMgj+AuKQpkndhfsBg");
	var mask_5_graphics_57 = new cjs.Graphics().p("A30GIQhJsFHvpVQHwpWMDhIQMEhJJWHvMglVAtEQpWnvhIsDg");
	var mask_5_graphics_58 = new cjs.Graphics().p("A4OFiQgysGIBpHQIBpHMFgwQMGgzJHIBMgmqAr8QpHoBgxsFg");
	var mask_5_graphics_59 = new cjs.Graphics().p("A4mE9QgasIISo3QISo3MGgZQMHgcI3ISMgn8AqxQo4oSgasGg");
	var mask_5_graphics_60 = new cjs.Graphics().p("A47EYQgDsIIionQIjonMGgCQMIgEInIiMgpNApjQonoigDsHg");
	var mask_5_graphics_61 = new cjs.Graphics().p("A5OD0QAUsHIzoXQIyoWMHAUQMHATIXIzMgqbAoTQoXoyAUsHg");
	var mask_5_graphics_62 = new cjs.Graphics().p("A5eDRQArsGJCoGQJCoFMGArQMGAqIGJDMgrnAnBQoFpCArsGg");
	var mask_5_graphics_63 = new cjs.Graphics().p("A5tCvQBCsFJSn0QJRn0MEBDQMFBBH0JRMgsvAltQn0pRBBsEg");
	var mask_5_graphics_64 = new cjs.Graphics().p("A54CNQBZsCJgniQJgnjMBBaQMDBYHiJgMgt2AkXQnipgBZsCg");
	var mask_5_graphics_65 = new cjs.Graphics().p("A6CBtQBwsAJunQQJunQL/BxQL/BvHQJuMgu5Ai+QnQpuBvr+g");
	var mask_5_graphics_66 = new cjs.Graphics().p("A6JBNQCHr8J7m+QJ8m9L7CIQL8CFG9J8Mgv7AhkQm9p8CGr6g");
	var mask_5_graphics_67 = new cjs.Graphics().p("A6OAtQCer3KImqQKJmrL2CfQL4CcGqKIMgw5AgIQmrqICdr3g");
	var mask_5_graphics_68 = new cjs.Graphics().p("A6QAPQC0rzKVmWQKVmXLxC1QLyCyGXKVMgx1AeqQmXqVC0rxg");
	var mask_5_graphics_69 = new cjs.Graphics().p("A6RgOQDLruKhmDQKgmDLsDLQLtDKGDKgMgyuAdKQmDqgDJrrg");
	var mask_5_graphics_70 = new cjs.Graphics().p("A6PgrQDhrnKslvQKslvLlDhQLnDgFuKsMgzkAboQluqsDfrkg");
	var mask_5_graphics_71 = new cjs.Graphics().p("A6KhHQD2rhK3laQK2laLfD3QLfD1FaK3Mg0XAaGQlaq3D2rdg");
	var mask_5_graphics_72 = new cjs.Graphics().p("A6EhjQENrYLAlGQLAlFLXENQLYELFFLBMg1HAYhQlFrBELrWg");
	var mask_5_graphics_73 = new cjs.Graphics().p("A57h9QEirQLKkxQLJkwLPEjQLQEgEwLKMg11AW7QkwrKEhrNg");
	var mask_5_graphics_74 = new cjs.Graphics().p("A5wiXQE3rHLTkbQLSkbLGE4QLGE2EbLSMg2eAVUQkbrSE2rFg");
	var mask_5_graphics_75 = new cjs.Graphics().p("A5jivQFNq+LakFQLakGK8FNQK+FLEFLbMg3GATrQkFraFLq7g");
	var mask_5_graphics_76 = new cjs.Graphics().p("A5TjHQFhq0LijvQLhjvKyFhQKzFfDwLiMg3qASDQjvriFgqxg");
	var mask_5_graphics_77 = new cjs.Graphics().p("A5CjeQF2qpLpjZQLojZKnF1QKoF0DaLoMg4LAQZQjZrpF0qmg");
	var mask_5_graphics_78 = new cjs.Graphics().p("A4uj0QGKqdLvjDQLujDKcGKQKdGIDDLuMg4oAOtQjDrvGIqbg");
	var mask_5_graphics_79 = new cjs.Graphics().p("A4YkJQGdqRL1itQL0isKPGdQKSGcCsL0Mg5CANAQitr0GcqPg");
	var mask_5_graphics_80 = new cjs.Graphics().p("A4DkaQGvqHL4iYQL4iZKFGuQKGGtCZL4Mg5XALhQiZr5GtqDg");
	var mask_5_graphics_81 = new cjs.Graphics().p("A3skrQG/p7L9iFQL7iEJ6G/QJ7G9CEL8Mg5pAKBQiFr9G+p4g");
	var mask_5_graphics_82 = new cjs.Graphics().p("A3Tk7QHPpvMAhxQL/hwJtHPQJvHOBxL/Mg55AIhQhxsAHPptg");
	var mask_5_graphics_83 = new cjs.Graphics().p("A25lKQHfpiMDhdQMBhdJiHgQJiHeBdMCMg6GAG/QhdsCHfphg");
	var mask_5_graphics_84 = new cjs.Graphics().p("A2elYQHwpWMFhIQMDhJJVHwQJWHuBIMDMg6QAFfQhJsFHupUg");
	var mask_5_graphics_85 = new cjs.Graphics().p("A2AllQH/pJMGg0QMGg0JHH/QJJH9A0MFMg6YAD9Qg1sGH+pHg");
	var mask_5_graphics_86 = new cjs.Graphics().p("A1hlxQIOo7MIghQMGggI6IPQI7ILAgMIMg6eACaQggsHINo5g");
	var mask_5_graphics_87 = new cjs.Graphics().p("A1Al8QIdouMIgMQMHgLIsIdQItIaAMMIMg6hAA5QgMsIIcorg");
	var mask_5_graphics_88 = new cjs.Graphics().p("A9QOKQAIsIIqodQIrofMIAIQMIAJIdIrQIgIpgJMIg");
	var mask_5_graphics_89 = new cjs.Graphics().p("A9QNAQAdsHI4oOQI5oRMHAdQMIAdIPI5QIQI3gdMIg");
	var mask_5_graphics_90 = new cjs.Graphics().p("A9PL3QAxsFJGoBQJHoBMFAxQMHAxIAJHQICJEgxMHg");
	var mask_5_graphics_91 = new cjs.Graphics().p("A9NKuQBFsEJTnxQJUnyMEBGQMFBFHxJUQHyJShFMFg");
	var mask_5_graphics_92 = new cjs.Graphics().p("A9LJmQBZsDJgnhQJhniMCBZQMDBaHhJhQHjJehaMEg");
	var mask_5_graphics_93 = new cjs.Graphics().p("A9IIdQBtsAJsnRQJtnSMABuQMBBtHRJuQHSJrhuMAg");
	var mask_5_graphics_94 = new cjs.Graphics().p("A9FHVQCCr9J3nAQJ6nCL8CBQL+CCHAJ5QHDJ3iCL+g");
	var mask_5_graphics_95 = new cjs.Graphics().p("A9BGNQCWr5KDmwQKFmxL5CVQL6CWGwKFQGxKCiWL6g");
	var mask_5_graphics_96 = new cjs.Graphics().p("A88FFQCpr1KPmfQKQmgL1CqQL1CpGfKQQGhKOiqL1g");
	var mask_5_graphics_97 = new cjs.Graphics().p("A83D+QC9rwKZmOQKbmPLwC9QLyC+GNKaQGPKYi9Lyg");
	var mask_5_graphics_98 = new cjs.Graphics().p("A8xC3QDRrrKjl8QKll+LrDRQLsDRF8KlQF+KjjRLsg");
	var mask_5_graphics_99 = new cjs.Graphics().p("A8qBxQDkrlKtlrQKvlsLlDlQLmDkFrKvQFsKsjlLmg");
	var mask_5_graphics_100 = new cjs.Graphics().p("A8jArQD4rfK2lZQK4lZLfD4QLgD3FYK4QFaK2j3Lgg");
	var mask_5_graphics_101 = new cjs.Graphics().p("A8bgZQELraK/lGQLBlHLYELQLaELFFLAQFIK/kLLZg");
	var mask_5_graphics_102 = new cjs.Graphics().p("A8SheQEdrSLIk0QLJk1LREeQLSEeE0LJQE1LHkeLSg");
	var mask_5_graphics_103 = new cjs.Graphics().p("A8JiiQEwrKLQkhQLRkiLJEwQLLExEgLRQEjLOkxLLg");
	var mask_5_graphics_104 = new cjs.Graphics().p("A7/jlQFDrCLWkPQLZkPLBFEQLDFDENLYQEQLWlDLCg");
	var mask_5_graphics_105 = new cjs.Graphics().p("A71koQFWq5Ldj7QLfj8K5FVQK6FWD6LfQD9LdlWK5g");
	var mask_5_graphics_106 = new cjs.Graphics().p("A7qlpQFoqxLkjoQLljoKwFnQKxFoDnLlQDpLkloKwg");
	var mask_5_graphics_107 = new cjs.Graphics().p("A7emqQF6qnLpjVQLrjVKnF6QKnF6DULqQDVLql5Kng");
	var mask_5_graphics_108 = new cjs.Graphics().p("A7SnqQGMqdLvjBQLwjCKcGMQKdGLDBLwQDCLvmLKdg");
	var mask_5_graphics_109 = new cjs.Graphics().p("A7FopQGdqTL0itQL1iuKSGdQKSGdCtL0QCuL0mcKSg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_5_graphics_9,x:125.9,y:186.5}).wait(1).to({graphics:mask_5_graphics_10,x:123.8,y:186.5}).wait(1).to({graphics:mask_5_graphics_11,x:121.6,y:186.6}).wait(1).to({graphics:mask_5_graphics_12,x:119.4,y:186.6}).wait(1).to({graphics:mask_5_graphics_13,x:117.1,y:186.6}).wait(1).to({graphics:mask_5_graphics_14,x:114.7,y:186.7}).wait(1).to({graphics:mask_5_graphics_15,x:112.3,y:186.7}).wait(1).to({graphics:mask_5_graphics_16,x:109.8,y:186.8}).wait(1).to({graphics:mask_5_graphics_17,x:107.3,y:186.8}).wait(1).to({graphics:mask_5_graphics_18,x:104.7,y:186.8}).wait(1).to({graphics:mask_5_graphics_19,x:102.1,y:186.9}).wait(1).to({graphics:mask_5_graphics_20,x:99.5,y:186.9}).wait(1).to({graphics:mask_5_graphics_21,x:96.8,y:186.9}).wait(1).to({graphics:mask_5_graphics_22,x:94.1,y:186.9}).wait(1).to({graphics:mask_5_graphics_23,x:91.4,y:186.9}).wait(1).to({graphics:mask_5_graphics_24,x:88.6,y:186.9}).wait(1).to({graphics:mask_5_graphics_25,x:85.9,y:186.9}).wait(1).to({graphics:mask_5_graphics_26,x:83.1,y:186.9}).wait(1).to({graphics:mask_5_graphics_27,x:80.2,y:186.9}).wait(1).to({graphics:mask_5_graphics_28,x:77.4,y:186.9}).wait(1).to({graphics:mask_5_graphics_29,x:74.5,y:186.8}).wait(1).to({graphics:mask_5_graphics_30,x:71.7,y:186.8}).wait(1).to({graphics:mask_5_graphics_31,x:68.8,y:186.6}).wait(1).to({graphics:mask_5_graphics_32,x:65.9,y:186.4}).wait(1).to({graphics:mask_5_graphics_33,x:63,y:186.2}).wait(1).to({graphics:mask_5_graphics_34,x:60,y:186.1}).wait(1).to({graphics:mask_5_graphics_35,x:61.2,y:186.1}).wait(1).to({graphics:mask_5_graphics_36,x:64.2,y:186}).wait(1).to({graphics:mask_5_graphics_37,x:67.1,y:185.8}).wait(1).to({graphics:mask_5_graphics_38,x:70,y:185.5}).wait(1).to({graphics:mask_5_graphics_39,x:72.9,y:185.1}).wait(1).to({graphics:mask_5_graphics_40,x:75.7,y:184.7}).wait(1).to({graphics:mask_5_graphics_41,x:78.6,y:184.1}).wait(1).to({graphics:mask_5_graphics_42,x:81.4,y:183.4}).wait(1).to({graphics:mask_5_graphics_43,x:84.2,y:182.7}).wait(1).to({graphics:mask_5_graphics_44,x:87,y:181.8}).wait(1).to({graphics:mask_5_graphics_45,x:89.6,y:180.9}).wait(1).to({graphics:mask_5_graphics_46,x:92.2,y:180}).wait(1).to({graphics:mask_5_graphics_47,x:94.8,y:179}).wait(1).to({graphics:mask_5_graphics_48,x:97.4,y:177.9}).wait(1).to({graphics:mask_5_graphics_49,x:99.9,y:176.7}).wait(1).to({graphics:mask_5_graphics_50,x:102.4,y:175.5}).wait(1).to({graphics:mask_5_graphics_51,x:104.9,y:174.2}).wait(1).to({graphics:mask_5_graphics_52,x:107.3,y:172.9}).wait(1).to({graphics:mask_5_graphics_53,x:109.7,y:171.4}).wait(1).to({graphics:mask_5_graphics_54,x:112,y:170}).wait(1).to({graphics:mask_5_graphics_55,x:114.3,y:168.4}).wait(1).to({graphics:mask_5_graphics_56,x:116.6,y:166.8}).wait(1).to({graphics:mask_5_graphics_57,x:118.7,y:165.1}).wait(1).to({graphics:mask_5_graphics_58,x:120.9,y:163.3}).wait(1).to({graphics:mask_5_graphics_59,x:123,y:161.5}).wait(1).to({graphics:mask_5_graphics_60,x:125,y:159.6}).wait(1).to({graphics:mask_5_graphics_61,x:126.9,y:157.6}).wait(1).to({graphics:mask_5_graphics_62,x:128.7,y:155.6}).wait(1).to({graphics:mask_5_graphics_63,x:130.5,y:153.5}).wait(1).to({graphics:mask_5_graphics_64,x:132.3,y:151.3}).wait(1).to({graphics:mask_5_graphics_65,x:133.9,y:149.1}).wait(1).to({graphics:mask_5_graphics_66,x:135.5,y:146.8}).wait(1).to({graphics:mask_5_graphics_67,x:137,y:144.5}).wait(1).to({graphics:mask_5_graphics_68,x:138.4,y:142.1}).wait(1).to({graphics:mask_5_graphics_69,x:139.8,y:139.7}).wait(1).to({graphics:mask_5_graphics_70,x:141.1,y:137.2}).wait(1).to({graphics:mask_5_graphics_71,x:142.4,y:134.8}).wait(1).to({graphics:mask_5_graphics_72,x:143.6,y:132.3}).wait(1).to({graphics:mask_5_graphics_73,x:144.7,y:129.7}).wait(1).to({graphics:mask_5_graphics_74,x:145.7,y:127.1}).wait(1).to({graphics:mask_5_graphics_75,x:146.7,y:124.6}).wait(1).to({graphics:mask_5_graphics_76,x:147.6,y:121.9}).wait(1).to({graphics:mask_5_graphics_77,x:148.4,y:119.3}).wait(1).to({graphics:mask_5_graphics_78,x:149.1,y:116.7}).wait(1).to({graphics:mask_5_graphics_79,x:149.8,y:114}).wait(1).to({graphics:mask_5_graphics_80,x:150.3,y:111.6}).wait(1).to({graphics:mask_5_graphics_81,x:150.8,y:109.3}).wait(1).to({graphics:mask_5_graphics_82,x:151.2,y:106.9}).wait(1).to({graphics:mask_5_graphics_83,x:151.5,y:104.5}).wait(1).to({graphics:mask_5_graphics_84,x:151.8,y:102.1}).wait(1).to({graphics:mask_5_graphics_85,x:152,y:99.7}).wait(1).to({graphics:mask_5_graphics_86,x:152.1,y:97.2}).wait(1).to({graphics:mask_5_graphics_87,x:152.2,y:94.8}).wait(1).to({graphics:mask_5_graphics_88,x:152.2,y:94.4}).wait(1).to({graphics:mask_5_graphics_89,x:152.2,y:96.8}).wait(1).to({graphics:mask_5_graphics_90,x:152.4,y:99.3}).wait(1).to({graphics:mask_5_graphics_91,x:152.6,y:101.7}).wait(1).to({graphics:mask_5_graphics_92,x:152.8,y:104.1}).wait(1).to({graphics:mask_5_graphics_93,x:153.1,y:106.5}).wait(1).to({graphics:mask_5_graphics_94,x:153.5,y:108.9}).wait(1).to({graphics:mask_5_graphics_95,x:154,y:111.2}).wait(1).to({graphics:mask_5_graphics_96,x:154.5,y:113.6}).wait(1).to({graphics:mask_5_graphics_97,x:155.1,y:116}).wait(1).to({graphics:mask_5_graphics_98,x:155.7,y:118.3}).wait(1).to({graphics:mask_5_graphics_99,x:156.4,y:120.6}).wait(1).to({graphics:mask_5_graphics_100,x:157.1,y:122.9}).wait(1).to({graphics:mask_5_graphics_101,x:157.9,y:125.2}).wait(1).to({graphics:mask_5_graphics_102,x:158.8,y:127.5}).wait(1).to({graphics:mask_5_graphics_103,x:159.7,y:129.8}).wait(1).to({graphics:mask_5_graphics_104,x:160.7,y:132}).wait(1).to({graphics:mask_5_graphics_105,x:161.7,y:134.2}).wait(1).to({graphics:mask_5_graphics_106,x:162.8,y:136.4}).wait(1).to({graphics:mask_5_graphics_107,x:163.9,y:138.6}).wait(1).to({graphics:mask_5_graphics_108,x:165.1,y:140.7}).wait(1).to({graphics:mask_5_graphics_109,x:166.1,y:142.7}).wait(577));

	// Layer 2
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(20,1,1).p("AmOl+QBbgXBHgCQCagECPA+QCQA+BQB7QBOB5AWCQQAWCRgMBTQgIAygGAd");
	this.shape_7.setTransform(161.9,174.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(20,1,1).p("AkW2iQBbgXBHgCQCZgDCQA9QCQA+BQB7QBOB5AWCRQAWCRgMBTQgNBTgJAZMgPzAgq");
	this.shape_8.setTransform(149.9,280.2);

	var maskedShapeInstanceList = [this.shape_7,this.shape_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7}]},9).to({state:[{t:this.shape_8}]},42).wait(635));

	// Letter
	this.instance_4 = new lib.H("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(275,275);
	this.instance_4.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(686));

	// Background
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_9.setTransform(275,275,3.373,2.543);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_10.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9}]}).wait(686));

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