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


(lib.f = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AwkcFQg2hAAAhnQAAiAA2huIKj0TQgtAkgiAAQhIAAAAhuQAAhSBRhRQCZiiDbi3QJKx4ACgCQA7hsA1gxQBNhIBeAAQCCAABgBWQBlBZAACAQAABigvBsQgpBchJBbQhLBjjXDMQl4FejFCeImyNMIA6gJQF8huJCoLICZiWQBrhlA6AAQBNAAAABYQAAAzjgDyIgJAOQgQAQifCUQjDC6jpCLQjsCNj7BKIAEBKQAACdgiCuQgmDIhIChQhSC6h1BnQiGB5iqAAQhoAAg6hEgAtjXVQgfA/AAA4IAEAfQB0AABahjQBMhUA0iZQA/i3AUlgIAAgSgAKP2nIkgIwQEnkWAdggICSi7QA/hlAAhMQAAhTh1AAQgdAAhjDFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111.4,-186.5,223,373);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0.1,rotation:31.8,guide:{path:[48.5,-50.4,-9.2,-28.3,-42.7,42.1]}},119).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AA1kPIBIhMICkCaIhIBMg");
	var mask_graphics_1 = new cjs.Graphics().p("Ah5giIBQhUICjCZIhQBUg");
	var mask_graphics_2 = new cjs.Graphics().p("Ah8geIBWhcICkCZIhYBcg");
	var mask_graphics_3 = new cjs.Graphics().p("AiAgaIBehkICjCZIheBkg");
	var mask_graphics_4 = new cjs.Graphics().p("AiEgWIBmhsICjCaIhmBrg");
	var mask_graphics_5 = new cjs.Graphics().p("AiIgTIBuhzICjCaIhuBzg");
	var mask_graphics_6 = new cjs.Graphics().p("AiMgPIB1h7ICkCaIh1B7g");
	var mask_graphics_7 = new cjs.Graphics().p("AiPgLIB8iDICjCaIh8CDg");
	var mask_graphics_8 = new cjs.Graphics().p("AiTgHICEiLICjCaIiECLg");
	var mask_graphics_9 = new cjs.Graphics().p("AiXgDICMiTICjCaIiLCTg");
	var mask_graphics_10 = new cjs.Graphics().p("AiaAAICSiaICjCaIiSCbg");
	var mask_graphics_11 = new cjs.Graphics().p("AieAEICaiiICjCbIiaCig");
	var mask_graphics_12 = new cjs.Graphics().p("AiiAIICiiqICjCbIiiCqg");
	var mask_graphics_13 = new cjs.Graphics().p("AilAMICniyIClCbIioCyg");
	var mask_graphics_14 = new cjs.Graphics().p("AipAQICvi6ICkCbIivC6g");
	var mask_graphics_15 = new cjs.Graphics().p("AitAVIC3jDICkCbIi3DCg");
	var mask_graphics_16 = new cjs.Graphics().p("AixAYIC/jKICkCbIi/DKg");
	var mask_graphics_17 = new cjs.Graphics().p("Ai1AcIDGjSIClCbIjGDSg");
	var mask_graphics_18 = new cjs.Graphics().p("Ai4AgIDNjaICkCbIjNDag");
	var mask_graphics_19 = new cjs.Graphics().p("Ai8AkIDVjiICkCbIjVDig");
	var mask_graphics_20 = new cjs.Graphics().p("AjAAoIDdjqICkCbIjdDqg");
	var mask_graphics_21 = new cjs.Graphics().p("AjEAsIDkjyIClCbIjlDyg");
	var mask_graphics_22 = new cjs.Graphics().p("AjHAwIDrj6ICkCbIjrD6g");
	var mask_graphics_23 = new cjs.Graphics().p("AjLA0IDzkCICkCbIjzECg");
	var mask_graphics_24 = new cjs.Graphics().p("AjPA4ID7kJICkCaIj7EJg");
	var mask_graphics_25 = new cjs.Graphics().p("AjSA8IEBkRIClCaIkCERg");
	var mask_graphics_26 = new cjs.Graphics().p("AjWBAIEJkZICkCaIkJEZg");
	var mask_graphics_27 = new cjs.Graphics().p("AjaBEIERkhICkCaIkQEhg");
	var mask_graphics_28 = new cjs.Graphics().p("AjeBIIEZkpICkCaIkYEqg");
	var mask_graphics_29 = new cjs.Graphics().p("AjiBMIEgkxIClCaIkgEyg");
	var mask_graphics_30 = new cjs.Graphics().p("AjlBQIEnk5ICkCaIknE5g");
	var mask_graphics_31 = new cjs.Graphics().p("AjpBUIEvlBICkCaIkvFBg");
	var mask_graphics_32 = new cjs.Graphics().p("AjsBYIE1lJIClCaIk3FJg");
	var mask_graphics_33 = new cjs.Graphics().p("AjwBcIE9lRICkCaIk9FRg");
	var mask_graphics_34 = new cjs.Graphics().p("Aj0BgIFFlZICkCaIlFFZg");
	var mask_graphics_35 = new cjs.Graphics().p("Aj4BjIFNlgICkCaIlNFhg");
	var mask_graphics_36 = new cjs.Graphics().p("Aj7BnIFTloIClCaIlUFpg");
	var mask_graphics_37 = new cjs.Graphics().p("Aj/BrIFblwICkCaIlbFxg");
	var mask_graphics_38 = new cjs.Graphics().p("AkDBvIFjl4ICkCaIljF5g");
	var mask_graphics_39 = new cjs.Graphics().p("AkHB0IFrmBICkCaIlrGBg");
	var mask_graphics_40 = new cjs.Graphics().p("AkLB4IFymJIClCaIlzGJg");
	var mask_graphics_41 = new cjs.Graphics().p("AkOB7IF5mQICkCaIl5GRg");
	var mask_graphics_42 = new cjs.Graphics().p("AkSB/IGBmYICkCaImBGZg");
	var mask_graphics_43 = new cjs.Graphics().p("AkWCDIGJmgICkCbImIGgg");
	var mask_graphics_44 = new cjs.Graphics().p("AkZCHIGPmoIClCbImQGog");
	var mask_graphics_45 = new cjs.Graphics().p("AkdCMIGXmxICkCbImXGwg");
	var mask_graphics_46 = new cjs.Graphics().p("AkhCQIGfm5ICkCbImfG4g");
	var mask_graphics_47 = new cjs.Graphics().p("AklCTIGnnAICkCbImmHAg");
	var mask_graphics_48 = new cjs.Graphics().p("AkoCXIGtnIIClCbImuHIg");
	var mask_graphics_49 = new cjs.Graphics().p("AksCbIG1nQICkCbIm1HQg");
	var mask_graphics_50 = new cjs.Graphics().p("AkwCfIG9nYICkCbIm9HYg");
	var mask_graphics_51 = new cjs.Graphics().p("Ak0CjIHEngIClCbInFHgg");
	var mask_graphics_52 = new cjs.Graphics().p("Ak3CnIHLnoICkCbInLHog");
	var mask_graphics_53 = new cjs.Graphics().p("Ak7CrIHTnwICkCbInTHwg");
	var mask_graphics_54 = new cjs.Graphics().p("Ak/CvIHbn4ICkCbInbH4g");
	var mask_graphics_55 = new cjs.Graphics().p("AlCCzIHhoAIClCbInjIAg");
	var mask_graphics_56 = new cjs.Graphics().p("AlGC3IHpoIICkCbInpIIg");
	var mask_graphics_57 = new cjs.Graphics().p("AlKC7IHxoQICkCbInxIQg");
	var mask_graphics_58 = new cjs.Graphics().p("AlOC/IH5oYICkCbIn5IYg");
	var mask_graphics_59 = new cjs.Graphics().p("AlSDDIIAogIClCbIoAIgg");
	var mask_graphics_60 = new cjs.Graphics().p("AlWDGIIIonICkCbIoHIog");
	var mask_graphics_61 = new cjs.Graphics().p("AlZDKIIPovICkCbIoPIvg");
	var mask_graphics_62 = new cjs.Graphics().p("AldDOIIWo3IClCbIoXI3g");
	var mask_graphics_63 = new cjs.Graphics().p("AlhDTIIeo/IClCaIoeI/g");
	var mask_graphics_64 = new cjs.Graphics().p("AlkDXIIlpHICkCaIolJHg");
	var mask_graphics_65 = new cjs.Graphics().p("AloDbIItpPICkCaIotJPg");
	var mask_graphics_66 = new cjs.Graphics().p("AlsDeII0pWIClCaIo0JXg");
	var mask_graphics_67 = new cjs.Graphics().p("AlwDiII8peIClCaIo8Jfg");
	var mask_graphics_68 = new cjs.Graphics().p("Al0DmIJEpmICkCaIpDJng");
	var mask_graphics_69 = new cjs.Graphics().p("Al3DqIJLpuICkCaIpLJvg");
	var mask_graphics_70 = new cjs.Graphics().p("Al7DvIJSp3IClCbIpTJ2g");
	var mask_graphics_71 = new cjs.Graphics().p("Al/DzIJap/ICkCbIpaJ+g");
	var mask_graphics_72 = new cjs.Graphics().p("AmCD2IJhqGICkCbIphKGg");
	var mask_graphics_73 = new cjs.Graphics().p("AmGD6IJoqOIClCbIppKOg");
	var mask_graphics_74 = new cjs.Graphics().p("AmKD+IJwqWIClCbIpxKWg");
	var mask_graphics_75 = new cjs.Graphics().p("AmNECIJ3qeICkCbIp3Keg");
	var mask_graphics_76 = new cjs.Graphics().p("AmREGIJ/qmICkCbIp/Kmg");
	var mask_graphics_77 = new cjs.Graphics().p("AmVEKIKGquIClCbIqGKug");
	var mask_graphics_78 = new cjs.Graphics().p("AmZEOIKOq2IClCbIqOK2g");
	var mask_graphics_79 = new cjs.Graphics().p("AmdESIKWq+ICkCbIqVK+g");
	var mask_graphics_80 = new cjs.Graphics().p("AmgEWIKdrGICkCbIqdLGg");
	var mask_graphics_81 = new cjs.Graphics().p("AmkEaIKkrOIClCbIqlLOg");
	var mask_graphics_82 = new cjs.Graphics().p("AmoEeIKsrWIClCbIqsLWg");
	var mask_graphics_83 = new cjs.Graphics().p("AmsEiIK0reICkCbIqzLeg");
	var mask_graphics_84 = new cjs.Graphics().p("AmvEmIK7rmICkCbIq7Lmg");
	var mask_graphics_85 = new cjs.Graphics().p("AmzEqILCruIClCbIrDLug");
	var mask_graphics_86 = new cjs.Graphics().p("Am3EuILKr2IClCbIrKL2g");
	var mask_graphics_87 = new cjs.Graphics().p("Am6EyILRr+ICkCbIrRL+g");
	var mask_graphics_88 = new cjs.Graphics().p("Am+E2ILZsGICkCbIrZMGg");
	var mask_graphics_89 = new cjs.Graphics().p("AnCE6ILgsOIClCbIrgMOg");
	var mask_graphics_90 = new cjs.Graphics().p("AnGE+ILosWICkCcIroMUg");
	var mask_graphics_91 = new cjs.Graphics().p("AnJFBILvsdICkCcIrvMcg");
	var mask_graphics_92 = new cjs.Graphics().p("AnNFGIL2smIClCcIr3Mkg");
	var mask_graphics_93 = new cjs.Graphics().p("AnRFKIL+suIClCcIr/Msg");
	var mask_graphics_94 = new cjs.Graphics().p("AnUFOIMFs2ICkCcIsFM0g");
	var mask_graphics_95 = new cjs.Graphics().p("AnYFSIMNs+ICkCcIsNM9g");
	var mask_graphics_96 = new cjs.Graphics().p("AncFWIMUtFIClCbIsVNEg");
	var mask_graphics_97 = new cjs.Graphics().p("AngFaIMctNIClCbIscNMg");
	var mask_graphics_98 = new cjs.Graphics().p("AnjFdIMjtUICkCbIsjNUg");
	var mask_graphics_99 = new cjs.Graphics().p("AnnFhIMrtcICkCbIsrNcg");
	var mask_graphics_100 = new cjs.Graphics().p("AnrFlIMytkIClCaIsyNlg");
	var mask_graphics_101 = new cjs.Graphics().p("AnvFpIM6tsIClCaIs6Ntg");
	var mask_graphics_102 = new cjs.Graphics().p("AnzFtINCt0ICkCaItBN1g");
	var mask_graphics_103 = new cjs.Graphics().p("An2FxINJt8ICkCaItJN9g");
	var mask_graphics_104 = new cjs.Graphics().p("An6F1INQuEIClCaItROFg");
	var mask_graphics_105 = new cjs.Graphics().p("An+F5INYuMIClCbItYOMg");
	var mask_graphics_106 = new cjs.Graphics().p("AoBF9INfuUICkCbItfOUg");
	var mask_graphics_107 = new cjs.Graphics().p("AoFGBINnucICkCbItnOcg");
	var mask_graphics_108 = new cjs.Graphics().p("AoJGFINuukIClCbItvOkg");
	var mask_graphics_109 = new cjs.Graphics().p("AoNGJIN2usIClCbIt2Osg");
	var mask_graphics_110 = new cjs.Graphics().p("AoQGNIN9u0ICkCbIt9O0g");
	var mask_graphics_111 = new cjs.Graphics().p("AoUGRIOEu8IClCbIuEO8g");
	var mask_graphics_112 = new cjs.Graphics().p("AoYGVIOMvEIClCbIuMPEg");
	var mask_graphics_113 = new cjs.Graphics().p("AocGZIOUvMICkCbIuTPMg");
	var mask_graphics_114 = new cjs.Graphics().p("AofGdIObvUICkCbIubPUg");
	var mask_graphics_115 = new cjs.Graphics().p("AojGhIOivcIClCbIujPcg");
	var mask_graphics_116 = new cjs.Graphics().p("AonGlIOqvkIClCbIuqPkg");
	var mask_graphics_117 = new cjs.Graphics().p("AoqGpIOxvsICkCbIuxPsg");
	var mask_graphics_118 = new cjs.Graphics().p("AouGtIO5v0ICkCbIu5P0g");
	var mask_graphics_119 = new cjs.Graphics().p("AoyGxIPAv8IClCbIvAP8g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:28.9,y:-34.8}).wait(1).to({graphics:mask_graphics_1,x:45.6,y:-57.7}).wait(1).to({graphics:mask_graphics_2,x:45.2,y:-57.3}).wait(1).to({graphics:mask_graphics_3,x:44.8,y:-56.9}).wait(1).to({graphics:mask_graphics_4,x:44.5,y:-56.5}).wait(1).to({graphics:mask_graphics_5,x:44.1,y:-56.1}).wait(1).to({graphics:mask_graphics_6,x:43.7,y:-55.7}).wait(1).to({graphics:mask_graphics_7,x:43.3,y:-55.3}).wait(1).to({graphics:mask_graphics_8,x:43,y:-54.9}).wait(1).to({graphics:mask_graphics_9,x:42.6,y:-54.5}).wait(1).to({graphics:mask_graphics_10,x:42.2,y:-54.2}).wait(1).to({graphics:mask_graphics_11,x:41.9,y:-53.8}).wait(1).to({graphics:mask_graphics_12,x:41.5,y:-53.4}).wait(1).to({graphics:mask_graphics_13,x:41.1,y:-53}).wait(1).to({graphics:mask_graphics_14,x:40.7,y:-52.6}).wait(1).to({graphics:mask_graphics_15,x:40.4,y:-52.2}).wait(1).to({graphics:mask_graphics_16,x:40,y:-51.8}).wait(1).to({graphics:mask_graphics_17,x:39.6,y:-51.4}).wait(1).to({graphics:mask_graphics_18,x:39.2,y:-51}).wait(1).to({graphics:mask_graphics_19,x:38.9,y:-50.6}).wait(1).to({graphics:mask_graphics_20,x:38.5,y:-50.2}).wait(1).to({graphics:mask_graphics_21,x:38.1,y:-49.8}).wait(1).to({graphics:mask_graphics_22,x:37.7,y:-49.4}).wait(1).to({graphics:mask_graphics_23,x:37.4,y:-49}).wait(1).to({graphics:mask_graphics_24,x:37,y:-48.6}).wait(1).to({graphics:mask_graphics_25,x:36.6,y:-48.2}).wait(1).to({graphics:mask_graphics_26,x:36.2,y:-47.8}).wait(1).to({graphics:mask_graphics_27,x:35.9,y:-47.4}).wait(1).to({graphics:mask_graphics_28,x:35.5,y:-47}).wait(1).to({graphics:mask_graphics_29,x:35.1,y:-46.6}).wait(1).to({graphics:mask_graphics_30,x:34.8,y:-46.3}).wait(1).to({graphics:mask_graphics_31,x:34.4,y:-45.9}).wait(1).to({graphics:mask_graphics_32,x:34,y:-45.5}).wait(1).to({graphics:mask_graphics_33,x:33.6,y:-45.1}).wait(1).to({graphics:mask_graphics_34,x:33.3,y:-44.7}).wait(1).to({graphics:mask_graphics_35,x:32.9,y:-44.3}).wait(1).to({graphics:mask_graphics_36,x:32.5,y:-43.9}).wait(1).to({graphics:mask_graphics_37,x:32.1,y:-43.5}).wait(1).to({graphics:mask_graphics_38,x:31.8,y:-43.1}).wait(1).to({graphics:mask_graphics_39,x:31.4,y:-42.7}).wait(1).to({graphics:mask_graphics_40,x:31,y:-42.3}).wait(1).to({graphics:mask_graphics_41,x:30.6,y:-41.9}).wait(1).to({graphics:mask_graphics_42,x:30.3,y:-41.5}).wait(1).to({graphics:mask_graphics_43,x:29.9,y:-41.1}).wait(1).to({graphics:mask_graphics_44,x:29.5,y:-40.7}).wait(1).to({graphics:mask_graphics_45,x:29.1,y:-40.3}).wait(1).to({graphics:mask_graphics_46,x:28.8,y:-39.9}).wait(1).to({graphics:mask_graphics_47,x:28.4,y:-39.5}).wait(1).to({graphics:mask_graphics_48,x:28,y:-39.1}).wait(1).to({graphics:mask_graphics_49,x:27.6,y:-38.7}).wait(1).to({graphics:mask_graphics_50,x:27.3,y:-38.4}).wait(1).to({graphics:mask_graphics_51,x:26.9,y:-38}).wait(1).to({graphics:mask_graphics_52,x:26.5,y:-37.6}).wait(1).to({graphics:mask_graphics_53,x:26.2,y:-37.2}).wait(1).to({graphics:mask_graphics_54,x:25.8,y:-36.8}).wait(1).to({graphics:mask_graphics_55,x:25.4,y:-36.4}).wait(1).to({graphics:mask_graphics_56,x:25,y:-36}).wait(1).to({graphics:mask_graphics_57,x:24.7,y:-35.6}).wait(1).to({graphics:mask_graphics_58,x:24.3,y:-35.2}).wait(1).to({graphics:mask_graphics_59,x:23.9,y:-34.8}).wait(1).to({graphics:mask_graphics_60,x:23.6,y:-34.4}).wait(1).to({graphics:mask_graphics_61,x:23.2,y:-34}).wait(1).to({graphics:mask_graphics_62,x:22.8,y:-33.6}).wait(1).to({graphics:mask_graphics_63,x:22.4,y:-33.2}).wait(1).to({graphics:mask_graphics_64,x:22.1,y:-32.8}).wait(1).to({graphics:mask_graphics_65,x:21.7,y:-32.4}).wait(1).to({graphics:mask_graphics_66,x:21.3,y:-32}).wait(1).to({graphics:mask_graphics_67,x:20.9,y:-31.6}).wait(1).to({graphics:mask_graphics_68,x:20.6,y:-31.2}).wait(1).to({graphics:mask_graphics_69,x:20.2,y:-30.8}).wait(1).to({graphics:mask_graphics_70,x:19.8,y:-30.4}).wait(1).to({graphics:mask_graphics_71,x:19.5,y:-30}).wait(1).to({graphics:mask_graphics_72,x:19.1,y:-29.6}).wait(1).to({graphics:mask_graphics_73,x:18.7,y:-29.2}).wait(1).to({graphics:mask_graphics_74,x:18.3,y:-28.8}).wait(1).to({graphics:mask_graphics_75,x:18,y:-28.5}).wait(1).to({graphics:mask_graphics_76,x:17.6,y:-28.1}).wait(1).to({graphics:mask_graphics_77,x:17.2,y:-27.7}).wait(1).to({graphics:mask_graphics_78,x:16.8,y:-27.3}).wait(1).to({graphics:mask_graphics_79,x:16.5,y:-26.9}).wait(1).to({graphics:mask_graphics_80,x:16.1,y:-26.5}).wait(1).to({graphics:mask_graphics_81,x:15.7,y:-26.1}).wait(1).to({graphics:mask_graphics_82,x:15.3,y:-25.7}).wait(1).to({graphics:mask_graphics_83,x:15,y:-25.3}).wait(1).to({graphics:mask_graphics_84,x:14.6,y:-24.9}).wait(1).to({graphics:mask_graphics_85,x:14.2,y:-24.5}).wait(1).to({graphics:mask_graphics_86,x:13.8,y:-24.1}).wait(1).to({graphics:mask_graphics_87,x:13.5,y:-23.7}).wait(1).to({graphics:mask_graphics_88,x:13.1,y:-23.3}).wait(1).to({graphics:mask_graphics_89,x:12.7,y:-22.9}).wait(1).to({graphics:mask_graphics_90,x:12.4,y:-22.5}).wait(1).to({graphics:mask_graphics_91,x:12,y:-22.1}).wait(1).to({graphics:mask_graphics_92,x:11.6,y:-21.7}).wait(1).to({graphics:mask_graphics_93,x:11.2,y:-21.3}).wait(1).to({graphics:mask_graphics_94,x:10.9,y:-20.9}).wait(1).to({graphics:mask_graphics_95,x:10.5,y:-20.5}).wait(1).to({graphics:mask_graphics_96,x:10.1,y:-20.2}).wait(1).to({graphics:mask_graphics_97,x:9.7,y:-19.8}).wait(1).to({graphics:mask_graphics_98,x:9.4,y:-19.4}).wait(1).to({graphics:mask_graphics_99,x:9,y:-19}).wait(1).to({graphics:mask_graphics_100,x:8.6,y:-18.6}).wait(1).to({graphics:mask_graphics_101,x:8.2,y:-18.2}).wait(1).to({graphics:mask_graphics_102,x:7.9,y:-17.8}).wait(1).to({graphics:mask_graphics_103,x:7.5,y:-17.4}).wait(1).to({graphics:mask_graphics_104,x:7.1,y:-17}).wait(1).to({graphics:mask_graphics_105,x:6.7,y:-16.6}).wait(1).to({graphics:mask_graphics_106,x:6.4,y:-16.2}).wait(1).to({graphics:mask_graphics_107,x:6,y:-15.8}).wait(1).to({graphics:mask_graphics_108,x:5.6,y:-15.4}).wait(1).to({graphics:mask_graphics_109,x:5.2,y:-15}).wait(1).to({graphics:mask_graphics_110,x:4.9,y:-14.6}).wait(1).to({graphics:mask_graphics_111,x:4.5,y:-14.2}).wait(1).to({graphics:mask_graphics_112,x:4.1,y:-13.8}).wait(1).to({graphics:mask_graphics_113,x:3.8,y:-13.4}).wait(1).to({graphics:mask_graphics_114,x:3.4,y:-13}).wait(1).to({graphics:mask_graphics_115,x:3,y:-12.6}).wait(1).to({graphics:mask_graphics_116,x:2.6,y:-12.3}).wait(1).to({graphics:mask_graphics_117,x:2.3,y:-11.9}).wait(1).to({graphics:mask_graphics_118,x:1.9,y:-11.5}).wait(1).to({graphics:mask_graphics_119,x:1.5,y:-11.1}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AnIHQQFQrCJBjd");
	this.shape.setTransform(2.8,-4.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34.2,-61.9,21.2,20.3);


(lib.ar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-27,21.4,1,1,-135);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:33.2,y:-27},119).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AiggCIA+gvIBvCTIg9Aug");
	var mask_graphics_1 = new cjs.Graphics().p("AhYgwIBCgyIBvCTIhCAyg");
	var mask_graphics_2 = new cjs.Graphics().p("AhbguIBIg2IBvCTIhIA2g");
	var mask_graphics_3 = new cjs.Graphics().p("AhdgsIBMg6IBvCTIhMA5g");
	var mask_graphics_4 = new cjs.Graphics().p("AhfgqIBQg9IBvCSIhQA9g");
	var mask_graphics_5 = new cjs.Graphics().p("AhigoIBWhBIBvCSIhWBBg");
	var mask_graphics_6 = new cjs.Graphics().p("AhkgnIBahEIBvCTIhaBEg");
	var mask_graphics_7 = new cjs.Graphics().p("AhnglIBghIIBuCTIheBIg");
	var mask_graphics_8 = new cjs.Graphics().p("AhogjIBjhLIBuCSIhjBLg");
	var mask_graphics_9 = new cjs.Graphics().p("AhrghIBohPIBvCSIhoBPg");
	var mask_graphics_10 = new cjs.Graphics().p("AhtggIBshSIBvCTIhsBSg");
	var mask_graphics_11 = new cjs.Graphics().p("AhvgeIBvhVIBxCSIhxBWg");
	var mask_graphics_12 = new cjs.Graphics().p("AhygcIB1haIBwCTIh1Bag");
	var mask_graphics_13 = new cjs.Graphics().p("Ah0gaIB5hdIBwCSIh5Bdg");
	var mask_graphics_14 = new cjs.Graphics().p("Ah2gYIB+hhIBvCSIh+Bhg");
	var mask_graphics_15 = new cjs.Graphics().p("Ah5gXICDhkIBwCTIiDBkg");
	var mask_graphics_16 = new cjs.Graphics().p("Ah7gVICHhnIBwCSIiHBog");
	var mask_graphics_17 = new cjs.Graphics().p("Ah9gTICLhrIBxCSIiNBrg");
	var mask_graphics_18 = new cjs.Graphics().p("AiAgSICRhuIBwCTIiRBug");
	var mask_graphics_19 = new cjs.Graphics().p("AiCgQICVhyIBwCTIiVByg");
	var mask_graphics_20 = new cjs.Graphics().p("AiEgOICZh1IBwCSIiaB1g");
	var mask_graphics_21 = new cjs.Graphics().p("AiHgMICfh5IBwCSIifB5g");
	var mask_graphics_22 = new cjs.Graphics().p("AiJgLICjh8IBwCTIijB8g");
	var mask_graphics_23 = new cjs.Graphics().p("AiMgJICoiAIBxCTIioCAg");
	var mask_graphics_24 = new cjs.Graphics().p("AiOgHICtiEIBwCTIitCDg");
	var mask_graphics_25 = new cjs.Graphics().p("AiQgFICxiHIBwCSIixCHg");
	var mask_graphics_26 = new cjs.Graphics().p("AiTgEIC3iKIBvCSIi1CLg");
	var mask_graphics_27 = new cjs.Graphics().p("AiVgCIC7iOIBwCTIi7COg");
	var mask_graphics_28 = new cjs.Graphics().p("AiXAAIC/iSIBwCTIi/CSg");
	var mask_graphics_29 = new cjs.Graphics().p("AiaABIDEiVIBxCUIjECUg");
	var mask_graphics_30 = new cjs.Graphics().p("AicADIDJiYIBwCTIjJCYg");
	var mask_graphics_31 = new cjs.Graphics().p("AieAEIDNibIBwCUIjNCbg");
	var mask_graphics_32 = new cjs.Graphics().p("AihAGIDTifIBvCUIjRCeg");
	var mask_graphics_33 = new cjs.Graphics().p("AijAIIDXiiIBwCTIjXCig");
	var mask_graphics_34 = new cjs.Graphics().p("AilAKIDbimIBwCTIjbCmg");
	var mask_graphics_35 = new cjs.Graphics().p("AioAMIDgiqIBxCTIjgCqg");
	var mask_graphics_36 = new cjs.Graphics().p("AiqANIDlitIBwCUIjlCtg");
	var mask_graphics_37 = new cjs.Graphics().p("AisAPIDpixIBwCUIjpCwg");
	var mask_graphics_38 = new cjs.Graphics().p("AiuARIDti0IBwCTIjtC0g");
	var mask_graphics_39 = new cjs.Graphics().p("AiwATIDyi4IBvCTIjyC4g");
	var mask_graphics_40 = new cjs.Graphics().p("AizAUID3i7IBwCUIj3C7g");
	var mask_graphics_41 = new cjs.Graphics().p("Ai1AWID7i/IBwCUIj7C/g");
	var mask_graphics_42 = new cjs.Graphics().p("Ai4AYIEBjCIBwCTIkBDCg");
	var mask_graphics_43 = new cjs.Graphics().p("Ai6AZIEFjFIBwCTIkFDGg");
	var mask_graphics_44 = new cjs.Graphics().p("Ai8AbIEJjJIBwCUIkJDJg");
	var mask_graphics_45 = new cjs.Graphics().p("Ai/AdIEPjMIBwCTIkPDNg");
	var mask_graphics_46 = new cjs.Graphics().p("AjBAfIETjQIBwCTIkTDQg");
	var mask_graphics_47 = new cjs.Graphics().p("AjDAgIEXjTIBwCUIkXDTg");
	var mask_graphics_48 = new cjs.Graphics().p("AjGAiIEdjXIBwCUIkdDXg");
	var mask_graphics_49 = new cjs.Graphics().p("AjIAkIEhjbIBwCUIkhDbg");
	var mask_graphics_50 = new cjs.Graphics().p("AjKAmIEljeIBwCTIklDfg");
	var mask_graphics_51 = new cjs.Graphics().p("AjNAoIErjiIBwCTIkrDig");
	var mask_graphics_52 = new cjs.Graphics().p("AjPApIEvjlIBwCUIkvDlg");
	var mask_graphics_53 = new cjs.Graphics().p("AjRArIEzjpIBwCUIkzDpg");
	var mask_graphics_54 = new cjs.Graphics().p("AjUAtIE4jsIBxCTIk4Dsg");
	var mask_graphics_55 = new cjs.Graphics().p("AjWAuIE9jvIBwCTIk9Dwg");
	var mask_graphics_56 = new cjs.Graphics().p("AjYAwIFBjzIBwCUIlBDzg");
	var mask_graphics_57 = new cjs.Graphics().p("AjbAyIFHj3IBvCUIlFD3g");
	var mask_graphics_58 = new cjs.Graphics().p("AjdA0IFLj7IBwCUIlLD6g");
	var mask_graphics_59 = new cjs.Graphics().p("AjfA2IFPj+IBwCTIlPD+g");
	var mask_graphics_60 = new cjs.Graphics().p("AjiA3IFUkBIBxCTIlUECg");
	var mask_graphics_61 = new cjs.Graphics().p("AjkA5IFZkFIBwCUIlZEFg");
	var mask_graphics_62 = new cjs.Graphics().p("AjmA7IFdkJIBwCUIldEIg");
	var mask_graphics_63 = new cjs.Graphics().p("AjpA9IFjkMIBvCTIlhEMg");
	var mask_graphics_64 = new cjs.Graphics().p("AjrA/IFnkQIBwCTIlnEQg");
	var mask_graphics_65 = new cjs.Graphics().p("AjtBAIFrkTIBwCTIlrEUg");
	var mask_graphics_66 = new cjs.Graphics().p("AjwBCIFwkXIBxCUIlwEXg");
	var mask_graphics_67 = new cjs.Graphics().p("AjyBEIF1kaIBwCTIl1Eag");
	var mask_graphics_68 = new cjs.Graphics().p("Aj0BGIF5keIBwCTIl5Eeg");
	var mask_graphics_69 = new cjs.Graphics().p("Aj3BHIF/khIBvCUIl+Ehg");
	var mask_graphics_70 = new cjs.Graphics().p("Aj5BJIGDkkIBwCTImDElg");
	var mask_graphics_71 = new cjs.Graphics().p("Aj7BLIGHkpIBwCUImHEpg");
	var mask_graphics_72 = new cjs.Graphics().p("Aj+BNIGMksIBxCTImNEsg");
	var mask_graphics_73 = new cjs.Graphics().p("AkABPIGRkwIBwCTImREwg");
	var mask_graphics_74 = new cjs.Graphics().p("AkCBQIGVkzIBwCUImVEzg");
	var mask_graphics_75 = new cjs.Graphics().p("AkFBSIGbk2IBvCTImaE3g");
	var mask_graphics_76 = new cjs.Graphics().p("AkHBUIGfk6IBwCTImfE6g");
	var mask_graphics_77 = new cjs.Graphics().p("AkJBWIGjk+IBwCUImjE9g");
	var mask_graphics_78 = new cjs.Graphics().p("AkMBXIGolBIBxCUImpFAg");
	var mask_graphics_79 = new cjs.Graphics().p("AkOBZIGtlEIBwCTImtFEg");
	var mask_graphics_80 = new cjs.Graphics().p("AkQBbIGxlIIBwCTImxFIg");
	var mask_graphics_81 = new cjs.Graphics().p("AkTBcIG3lLIBvCUIm2FLg");
	var mask_graphics_82 = new cjs.Graphics().p("AkUBeIG6lPIBvCUIm6FPg");
	var mask_graphics_83 = new cjs.Graphics().p("AkXBgIG/lTIBwCUIm/FSg");
	var mask_graphics_84 = new cjs.Graphics().p("AkZBiIHDlWIBwCTInDFWg");
	var mask_graphics_85 = new cjs.Graphics().p("AkbBjIHHlZIBxCTInJFag");
	var mask_graphics_86 = new cjs.Graphics().p("AkeBlIHNldIBwCUInNFdg");
	var mask_graphics_87 = new cjs.Graphics().p("AkgBnIHRlhIBwCUInRFhg");
	var mask_graphics_88 = new cjs.Graphics().p("AkjBpIHXllIBwCUInXFkg");
	var mask_graphics_89 = new cjs.Graphics().p("AklBrIHbloIBwCTInbFog");
	var mask_graphics_90 = new cjs.Graphics().p("AknBsIHflrIBwCUInfFrg");
	var mask_graphics_91 = new cjs.Graphics().p("AkqBuIHllvIBwCUInlFvg");
	var mask_graphics_92 = new cjs.Graphics().p("AksBwIHplyIBwCTInpFyg");
	var mask_graphics_93 = new cjs.Graphics().p("AkuByIHtl2IBwCTIntF2g");
	var mask_graphics_94 = new cjs.Graphics().p("AkxB0IHzl6IBwCTInzF6g");
	var mask_graphics_95 = new cjs.Graphics().p("AkzB1IH3l9IBwCUIn3F9g");
	var mask_graphics_96 = new cjs.Graphics().p("Ak1B3IH7mBIBwCUIn7GBg");
	var mask_graphics_97 = new cjs.Graphics().p("Ak4B5IIAmEIBxCTIoAGEg");
	var mask_graphics_98 = new cjs.Graphics().p("Ak6B7IIFmIIBwCUIoFGHg");
	var mask_graphics_99 = new cjs.Graphics().p("Ak8B8IIJmLIBwCUIoJGLg");
	var mask_graphics_100 = new cjs.Graphics().p("Ak/B+IIPmOIBvCTIoNGPg");
	var mask_graphics_101 = new cjs.Graphics().p("AlBCAIITmTIBwCUIoTGTg");
	var mask_graphics_102 = new cjs.Graphics().p("AlDCBIIXmVIBwCTIoXGWg");
	var mask_graphics_103 = new cjs.Graphics().p("AlGCDIIcmZIBxCUIocGZg");
	var mask_graphics_104 = new cjs.Graphics().p("AlICFIIhmcIBwCTIohGcg");
	var mask_graphics_105 = new cjs.Graphics().p("AlKCHIIlmgIBwCTIolGgg");
	var mask_graphics_106 = new cjs.Graphics().p("AlNCIIIrmjIBvCUIopGjg");
	var mask_graphics_107 = new cjs.Graphics().p("AlPCKIIvmnIBwCUIovGng");
	var mask_graphics_108 = new cjs.Graphics().p("AlRCMIIzmrIBwCUIozGrg");
	var mask_graphics_109 = new cjs.Graphics().p("AlUCOII4muIBxCTIo4Gug");
	var mask_graphics_110 = new cjs.Graphics().p("AlWCQII9myIBwCTIo9Gyg");
	var mask_graphics_111 = new cjs.Graphics().p("AlYCRIJBm1IBwCUIpBG1g");
	var mask_graphics_112 = new cjs.Graphics().p("AlaCTIJFm5IBwCUIpFG5g");
	var mask_graphics_113 = new cjs.Graphics().p("AldCVIJLm9IBwCUIpLG8g");
	var mask_graphics_114 = new cjs.Graphics().p("AlfCXIJPnAIBwCTIpPHAg");
	var mask_graphics_115 = new cjs.Graphics().p("AlhCYIJTnDIBwCUIpUHDg");
	var mask_graphics_116 = new cjs.Graphics().p("AlkCaIJZnHIBwCUIpZHHg");
	var mask_graphics_117 = new cjs.Graphics().p("AlmCcIJdnLIBwCUIpdHLg");
	var mask_graphics_118 = new cjs.Graphics().p("AloCeIJinOIBwCTIpjHOg");
	var mask_graphics_119 = new cjs.Graphics().p("AlrCgIJnnSIBwCTIpnHSg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-16.1,y:14.4}).wait(1).to({graphics:mask_graphics_1,x:-23.3,y:19}).wait(1).to({graphics:mask_graphics_2,x:-23,y:18.8}).wait(1).to({graphics:mask_graphics_3,x:-22.8,y:18.7}).wait(1).to({graphics:mask_graphics_4,x:-22.6,y:18.5}).wait(1).to({graphics:mask_graphics_5,x:-22.3,y:18.3}).wait(1).to({graphics:mask_graphics_6,x:-22.1,y:18.1}).wait(1).to({graphics:mask_graphics_7,x:-21.8,y:17.9}).wait(1).to({graphics:mask_graphics_8,x:-21.6,y:17.7}).wait(1).to({graphics:mask_graphics_9,x:-21.4,y:17.6}).wait(1).to({graphics:mask_graphics_10,x:-21.1,y:17.4}).wait(1).to({graphics:mask_graphics_11,x:-20.9,y:17.2}).wait(1).to({graphics:mask_graphics_12,x:-20.7,y:17}).wait(1).to({graphics:mask_graphics_13,x:-20.4,y:16.8}).wait(1).to({graphics:mask_graphics_14,x:-20.2,y:16.7}).wait(1).to({graphics:mask_graphics_15,x:-19.9,y:16.5}).wait(1).to({graphics:mask_graphics_16,x:-19.7,y:16.3}).wait(1).to({graphics:mask_graphics_17,x:-19.5,y:16.1}).wait(1).to({graphics:mask_graphics_18,x:-19.2,y:15.9}).wait(1).to({graphics:mask_graphics_19,x:-19,y:15.7}).wait(1).to({graphics:mask_graphics_20,x:-18.8,y:15.6}).wait(1).to({graphics:mask_graphics_21,x:-18.5,y:15.4}).wait(1).to({graphics:mask_graphics_22,x:-18.3,y:15.2}).wait(1).to({graphics:mask_graphics_23,x:-18,y:15}).wait(1).to({graphics:mask_graphics_24,x:-17.8,y:14.9}).wait(1).to({graphics:mask_graphics_25,x:-17.6,y:14.7}).wait(1).to({graphics:mask_graphics_26,x:-17.3,y:14.5}).wait(1).to({graphics:mask_graphics_27,x:-17.1,y:14.3}).wait(1).to({graphics:mask_graphics_28,x:-16.9,y:14.1}).wait(1).to({graphics:mask_graphics_29,x:-16.6,y:14}).wait(1).to({graphics:mask_graphics_30,x:-16.4,y:13.8}).wait(1).to({graphics:mask_graphics_31,x:-16.2,y:13.6}).wait(1).to({graphics:mask_graphics_32,x:-15.9,y:13.4}).wait(1).to({graphics:mask_graphics_33,x:-15.7,y:13.2}).wait(1).to({graphics:mask_graphics_34,x:-15.5,y:13}).wait(1).to({graphics:mask_graphics_35,x:-15.2,y:12.9}).wait(1).to({graphics:mask_graphics_36,x:-15,y:12.7}).wait(1).to({graphics:mask_graphics_37,x:-14.8,y:12.5}).wait(1).to({graphics:mask_graphics_38,x:-14.5,y:12.3}).wait(1).to({graphics:mask_graphics_39,x:-14.3,y:12.2}).wait(1).to({graphics:mask_graphics_40,x:-14,y:12}).wait(1).to({graphics:mask_graphics_41,x:-13.8,y:11.8}).wait(1).to({graphics:mask_graphics_42,x:-13.6,y:11.6}).wait(1).to({graphics:mask_graphics_43,x:-13.3,y:11.4}).wait(1).to({graphics:mask_graphics_44,x:-13.1,y:11.2}).wait(1).to({graphics:mask_graphics_45,x:-12.9,y:11.1}).wait(1).to({graphics:mask_graphics_46,x:-12.6,y:10.9}).wait(1).to({graphics:mask_graphics_47,x:-12.4,y:10.7}).wait(1).to({graphics:mask_graphics_48,x:-12.2,y:10.5}).wait(1).to({graphics:mask_graphics_49,x:-11.9,y:10.3}).wait(1).to({graphics:mask_graphics_50,x:-11.7,y:10.2}).wait(1).to({graphics:mask_graphics_51,x:-11.5,y:10}).wait(1).to({graphics:mask_graphics_52,x:-11.2,y:9.8}).wait(1).to({graphics:mask_graphics_53,x:-11,y:9.6}).wait(1).to({graphics:mask_graphics_54,x:-10.7,y:9.4}).wait(1).to({graphics:mask_graphics_55,x:-10.5,y:9.3}).wait(1).to({graphics:mask_graphics_56,x:-10.3,y:9.1}).wait(1).to({graphics:mask_graphics_57,x:-10,y:8.9}).wait(1).to({graphics:mask_graphics_58,x:-9.8,y:8.7}).wait(1).to({graphics:mask_graphics_59,x:-9.6,y:8.5}).wait(1).to({graphics:mask_graphics_60,x:-9.3,y:8.4}).wait(1).to({graphics:mask_graphics_61,x:-9.1,y:8.2}).wait(1).to({graphics:mask_graphics_62,x:-8.9,y:8}).wait(1).to({graphics:mask_graphics_63,x:-8.6,y:7.8}).wait(1).to({graphics:mask_graphics_64,x:-8.4,y:7.6}).wait(1).to({graphics:mask_graphics_65,x:-8.2,y:7.5}).wait(1).to({graphics:mask_graphics_66,x:-7.9,y:7.3}).wait(1).to({graphics:mask_graphics_67,x:-7.7,y:7.1}).wait(1).to({graphics:mask_graphics_68,x:-7.4,y:6.9}).wait(1).to({graphics:mask_graphics_69,x:-7.2,y:6.7}).wait(1).to({graphics:mask_graphics_70,x:-7,y:6.6}).wait(1).to({graphics:mask_graphics_71,x:-6.7,y:6.4}).wait(1).to({graphics:mask_graphics_72,x:-6.5,y:6.2}).wait(1).to({graphics:mask_graphics_73,x:-6.3,y:6}).wait(1).to({graphics:mask_graphics_74,x:-6,y:5.8}).wait(1).to({graphics:mask_graphics_75,x:-5.8,y:5.7}).wait(1).to({graphics:mask_graphics_76,x:-5.6,y:5.5}).wait(1).to({graphics:mask_graphics_77,x:-5.3,y:5.3}).wait(1).to({graphics:mask_graphics_78,x:-5.1,y:5.1}).wait(1).to({graphics:mask_graphics_79,x:-4.9,y:4.9}).wait(1).to({graphics:mask_graphics_80,x:-4.6,y:4.7}).wait(1).to({graphics:mask_graphics_81,x:-4.4,y:4.6}).wait(1).to({graphics:mask_graphics_82,x:-4.1,y:4.4}).wait(1).to({graphics:mask_graphics_83,x:-3.9,y:4.2}).wait(1).to({graphics:mask_graphics_84,x:-3.7,y:4}).wait(1).to({graphics:mask_graphics_85,x:-3.4,y:3.9}).wait(1).to({graphics:mask_graphics_86,x:-3.2,y:3.7}).wait(1).to({graphics:mask_graphics_87,x:-3,y:3.5}).wait(1).to({graphics:mask_graphics_88,x:-2.7,y:3.3}).wait(1).to({graphics:mask_graphics_89,x:-2.5,y:3.1}).wait(1).to({graphics:mask_graphics_90,x:-2.3,y:2.9}).wait(1).to({graphics:mask_graphics_91,x:-2,y:2.8}).wait(1).to({graphics:mask_graphics_92,x:-1.8,y:2.6}).wait(1).to({graphics:mask_graphics_93,x:-1.6,y:2.4}).wait(1).to({graphics:mask_graphics_94,x:-1.3,y:2.2}).wait(1).to({graphics:mask_graphics_95,x:-1.1,y:2}).wait(1).to({graphics:mask_graphics_96,x:-0.9,y:1.9}).wait(1).to({graphics:mask_graphics_97,x:-0.6,y:1.7}).wait(1).to({graphics:mask_graphics_98,x:-0.4,y:1.5}).wait(1).to({graphics:mask_graphics_99,x:-0.1,y:1.3}).wait(1).to({graphics:mask_graphics_100,x:0.1,y:1.2}).wait(1).to({graphics:mask_graphics_101,x:0.3,y:1}).wait(1).to({graphics:mask_graphics_102,x:0.6,y:0.8}).wait(1).to({graphics:mask_graphics_103,x:0.8,y:0.6}).wait(1).to({graphics:mask_graphics_104,x:1,y:0.4}).wait(1).to({graphics:mask_graphics_105,x:1.3,y:0.2}).wait(1).to({graphics:mask_graphics_106,x:1.5,y:0.1}).wait(1).to({graphics:mask_graphics_107,x:1.8,y:-0.1}).wait(1).to({graphics:mask_graphics_108,x:2,y:-0.3}).wait(1).to({graphics:mask_graphics_109,x:2.2,y:-0.5}).wait(1).to({graphics:mask_graphics_110,x:2.5,y:-0.7}).wait(1).to({graphics:mask_graphics_111,x:2.7,y:-0.8}).wait(1).to({graphics:mask_graphics_112,x:2.9,y:-1}).wait(1).to({graphics:mask_graphics_113,x:3.2,y:-1.2}).wait(1).to({graphics:mask_graphics_114,x:3.4,y:-1.4}).wait(1).to({graphics:mask_graphics_115,x:3.7,y:-1.6}).wait(1).to({graphics:mask_graphics_116,x:3.9,y:-1.8}).wait(1).to({graphics:mask_graphics_117,x:4.1,y:-1.9}).wait(1).to({graphics:mask_graphics_118,x:4.4,y:-2.1}).wait(1).to({graphics:mask_graphics_119,x:4.6,y:-2.3}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AjtEeQCxkJEqkx");
	this.shape.setTransform(3.5,-4.5,1,1,-167.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(120));

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
(lib.WS_Cursive_f = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_650 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(650).call(this.frame_650).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(234.9,271.1,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[235,271.2,254.8,253.2,274.7,235.3,330,187.4,351.4,164.1,372.9,140.7,374.2,122.5,375.2,107.9,366.1,101.9]}},135).wait(15).to({startPosition:0},0).to({guide:{path:[366.1,101.7,364.2,100.6,361.8,99.8,355,97.6,346.7,105.1,338.4,112.6,328.5,129.8,308.8,164,293,196.3,277.2,228.6,274.7,235.3,239.4,297.7,212.8,349.8,186.1,401.8,179.6,418.8,176.4,427,175,432.5]}},180).wait(16).to({startPosition:0},0).to({guide:{path:[174.7,432.4,174.8,451.8,190.1,450.4,205.5,449,224,420.1,242.3,391.3,238.5,337.2]}},79).wait(15).to({startPosition:0},0).to({guide:{path:[238.6,337.3,254.6,330.3,277.1,320.8,299.7,311.4,327,289.3,354.1,267.4,361.9,254.1]}},121).wait(16).to({startPosition:0},0).to({guide:{path:[361.8,254.9,426.6,252.5,458.7,309,486.9,358.5,524.8,306.5,560.6,257.6,608.5,248.4,617.4,246.7,626.8,247.7]}},64).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(365,102,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},135).wait(15).to({_off:false,x:174,y:441.9},0).to({_off:true},180).wait(16).to({_off:false,x:239,y:338.9},0).to({_off:true},79).wait(15).to({_off:false,x:363,y:252.9},0).to({_off:true},121).wait(81));

	// Layer 17
	this.instance_1 = new lib.ar1("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(315.2,332.4,1,1,0,0,0,-0.8,0.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(449).to({_off:false},0).wait(202));

	// Layer 13 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_449 = new cjs.Graphics().p("AiEV4QomomAAsJQAAsIImokQIjomMJAAMAAAA6lQsJAAojokg");
	var mask_graphics_450 = new cjs.Graphics().p("AiAWEQoroggIsJQgHsIIgoqQIeorMJgHMAAkA6lIgVAAQr7AAohoYg");
	var mask_graphics_451 = new cjs.Graphics().p("Ah8WRQoxobgPsJQgOsIIbovQIYowMJgPMABIA6kIgqABQruAAoeoLg");
	var mask_graphics_452 = new cjs.Graphics().p("Ah4WdQo2oWgWsIQgWsIIVo0QITo1MJgXMABsA6kIg+ABQrhAAocn/g");
	var mask_graphics_453 = new cjs.Graphics().p("Ah0WpQo7oQgdsIQgesIIQo5QIOo6MIgeMACQA6iQgpACgqAAQrUAAoZnzg");
	var mask_graphics_454 = new cjs.Graphics().p("AhwW1Qo/oKgmsIQglsIILo+QIIo/MIglMAC0A6gQg0ADgzAAQrHAAoXnng");
	var mask_graphics_455 = new cjs.Graphics().p("AhsXBQpEoFgtsIQgssGIFpDQICpFMIgsMADYA6eQg+AEg8AAQq8AAoUnbg");
	var mask_graphics_456 = new cjs.Graphics().p("AhnXNQpJoAg1sHQg0sGIApIQH9pJMHg0MAD8A6cQhIAFhGAAQqvAAoRnPg");
	var mask_graphics_457 = new cjs.Graphics().p("AhiXZQpPn6g7sHQg8sGH6pMQH4pPMGg7MAEgA6aQhSAGhQAAQqjAAoNnDg");
	var mask_graphics_458 = new cjs.Graphics().p("AheXkQpTn0hDsGQhDsFH1pSQHxpTMGhDMAFEA6XQhcAIhZAAQqXAAoLm4g");
	var mask_graphics_459 = new cjs.Graphics().p("AhZXwQpYnvhKsFQhLsFHvpWQHspYMFhKMAFoA6TQhlAKhjAAQqMAAoHmsg");
	var mask_graphics_460 = new cjs.Graphics().p("AhUX7QpcnphSsFQhSsDHppbQHmpdMFhSMAGLA6QQhvAMhsAAQqAAAoEmhg");
	var mask_graphics_461 = new cjs.Graphics().p("AhPYGQphnjhZsEQhasDHkpfQHgpiMEhZMAGvA6MQh5AOh1AAQp1AAoAmWg");
	var mask_graphics_462 = new cjs.Graphics().p("AhJYRQpmndhhsDQhhsCHdpkQHbpmMDhhMAHTA6IQiCAQh+AAQprAAn7mLg");
	var mask_graphics_463 = new cjs.Graphics().p("AhEYcQpqnXhpsCQhosBHYppQHUprMChoMAH3A6DQiMATiHAAQpfAAn4mAg");
	var mask_graphics_464 = new cjs.Graphics().p("Ag/YmQpvnRhvsBQhwsAHSptQHOpvMBhvMAIbA5+QiVAViQAAQpVAAn0l2g");
	var mask_graphics_465 = new cjs.Graphics().p("Ag5YxQpznLh3sAQh3r/HLpyQHKpzL/h3MAI+A55QifAYiYAAQpKAAnwlrg");
	var mask_graphics_466 = new cjs.Graphics().p("AgzY7Qp4nFh+r+Qh/r+HGp2QHDp4L+h+MAJhA5zQinAcihAAQpAAAnrlig");
	var mask_graphics_467 = new cjs.Graphics().p("AgtZGQp9m/iFr+QiGr8G/p7QG+p8L8iFMAKFA5tQiwAfiqAAQo1AAnnlXg");
	var mask_graphics_468 = new cjs.Graphics().p("AgoZQQqAm5iNr8QiNr7G5p/QG4qAL7iNMAKoA5mQi5AjiyAAQosAAnjlNg");
	var mask_graphics_469 = new cjs.Graphics().p("AgiZaQqEmziUr7QiVr5GzqEQGyqEL5iUMALMA5gQjCAmi7AAQoiAAnelDg");
	var mask_graphics_470 = new cjs.Graphics().p("AgbZkQqJmticr5Qibr4GsqIQGsqIL4icMALvA5ZQjLAqjDAAQoYAAnZk5g");
	var mask_graphics_471 = new cjs.Graphics().p("AgVZtQqNmmijr4Qijr2GnqMQGlqML2ijMAMTA5RQjUAujMAAQoOAAnUkwg");
	var mask_graphics_472 = new cjs.Graphics().p("AgPZ3QqRmgiqr2Qiqr1GgqQQGfqQL1iqMAM1A5JQjcAyjUAAQoEAAnQkmg");
	var mask_graphics_473 = new cjs.Graphics().p("AgIaAQqVmZiyr1QixrzGaqUQGYqUL0iyMANYA5CQjlA2jcAAQn7AAnKkdg");
	var mask_graphics_474 = new cjs.Graphics().p("AgCaKQqYmUi5ryQi5ryGUqXQGSqZLxi4MAN8A45QjuA6jkAAQnxAAnGkTg");
	var mask_graphics_475 = new cjs.Graphics().p("AAEaTQqbmNjArxQjArwGNqbQGLqcLwjAMAOfA4wQj2A/jtAAQnoAAnBkKg");
	var mask_graphics_476 = new cjs.Graphics().p("AALacQqfmHjIrvQjHruGHqfQGFqgLujHMAPBA4oQj+BDj1AAQnfAAm7kBg");
	var mask_graphics_477 = new cjs.Graphics().p("AASakQqjmAjPrtQjOrsGAqiQF/qkLsjOMAPkA4eQkGBIj9AAQnWAAm2j5g");
	var mask_graphics_478 = new cjs.Graphics().p("AAZatQqnl5jVrrQjWrqF6qnQF4qnLqjWMAQHA4VQkPBNkFAAQnNAAmwjwg");
	var mask_graphics_479 = new cjs.Graphics().p("AAga2QqqlzjdrpQjdroF0qqQFxqrLojdMAQpA4LQkWBSkOAAQnDAAmrjng");
	var mask_graphics_480 = new cjs.Graphics().p("AAna+QqulsjkrnQjjrmFsqtQFrqvLmjkMARMA4BQkeBXkWAAQm7AAmljfg");
	var mask_graphics_481 = new cjs.Graphics().p("AAvbGQqylljrrlQjrrkFmqwQFlqyLjjrMARvA31QknBdkdAAQmyAAmfjXg");
	var mask_graphics_482 = new cjs.Graphics().p("AA2bOQq1lfjyriQjyrhFgq1QFdq1LijyMASQA3qQkuBjkmAAQmpAAmZjPg");
	var mask_graphics_483 = new cjs.Graphics().p("AA+bWQq4lYj6rgQj5rfFZq4QFXq4Lfj5MASzA3fQk2BokuAAQmhAAmSjHg");
	var mask_graphics_484 = new cjs.Graphics().p("ABFbeQq7lRkAreQkBrdFTq6QFQq8LckAMATVA3TQk9Buk2AAQmYAAmNi/g");
	var mask_graphics_485 = new cjs.Graphics().p("ABNbmQq/lLkHrbQkHraFLq+QFKq/LakIMAT3A3IQlFB0k+AAQmQAAmGi3g");
	var mask_graphics_486 = new cjs.Graphics().p("ABVbtQrClEkOrYQkOrYFErBQFDrCLYkOMAUYA26QlMB7lGAAQmHAAmAiwg");
	var mask_graphics_487 = new cjs.Graphics().p("ABdb1QrFk+kVrVQkVrWE9rEQE8rFLVkVMAU6A2uQlSCBlPAAQl/AAl5iog");
	var mask_graphics_488 = new cjs.Graphics().p("ABlb8QrIk3kcrTQkcrTE3rGQE1rILSkdMAVcA2hQlaCIlXAAQl2AAlzihg");
	var mask_graphics_489 = new cjs.Graphics().p("ABtcDQrLkwkjrQQkjrQEwrKQEvrLLPkjMAV9A2UQlhCOlfAAQluAAlsiag");
	var mask_graphics_490 = new cjs.Graphics().p("AB1cKQrNkpkqrNQkqrOEprMQEnrOLNkqMAWfA2GQlpCVlnAAQlmAAlliTg");
	var mask_graphics_491 = new cjs.Graphics().p("AB+cRQrRkikxrLQkxrLEjrPQEgrQLKkxMAXAA14QlvCclwAAQldAAleiMg");
	var mask_graphics_492 = new cjs.Graphics().p("ACGcXQrTkbk4rHQk4rIEcrSQEarTLGk4MAXhA1qQl2Cjl4AAQlVAAlXiGg");
	var mask_graphics_493 = new cjs.Graphics().p("ACPceQrWkUk/rFQk+rFEUrUQETrWLEk/MAYBA1bQl8CrmBAAQlMAAlQh/g");
	var mask_graphics_494 = new cjs.Graphics().p("ACXckQrYkNlFrCQlGrBEOrXQELrZLBlFMAYiA1MQmCCymKAAQlEAAlJh5g");
	var mask_graphics_495 = new cjs.Graphics().p("ACgcqQrbkGlMq+QlMq/EGrZQEFrcK/lMMAZCA09QmKC6mRAAQk8AAlChzg");
	var mask_graphics_496 = new cjs.Graphics().p("ACpcwQrdj/lTq7QlTq7D/rcQD+reK7lTMAZjA0tQmQDCmaAAQk0AAk6htg");
	var mask_graphics_497 = new cjs.Graphics().p("ACyc2Qrgj4laq4QlZq4D4reQD3rhK4lZMAaDA0eQmWDJmjAAQksAAkyhng");
	var mask_graphics_498 = new cjs.Graphics().p("AC7c8Qrijxlgq1Qlhq0DyrhQDvrjK1lgMAajA0NQmcDSmsAAQkjAAkrhhg");
	var mask_graphics_499 = new cjs.Graphics().p("ADEdBQrkjqlnqxQlnqxDqrjQDprlKxlnMAbDAz9QmiDam0AAQkcAAkjhcg");
	var mask_graphics_500 = new cjs.Graphics().p("ADNdGQrmjiluquQltqtDjrmQDhrnKultMAbjAzsQmoDim9AAQkTAAkchXg");
	var mask_graphics_501 = new cjs.Graphics().p("ADXdMQrpjcl0qqQl0qqDcroQDarpKql0MAcDAzbQmuDrnGAAQkLAAkThRg");
	var mask_graphics_502 = new cjs.Graphics().p("ADgdRQrrjVl6qmQl7qnDVrpQDTrsKml6MAciAzKQmzDznPAAQkCAAkMhMg");
	var mask_graphics_503 = new cjs.Graphics().p("ADqdVQrtjNmBqiQmCqjDOrsQDMrtKjmBMAdBAy4Qm5D7nXAAQj7AAkDhHg");
	var mask_graphics_504 = new cjs.Graphics().p("ADzdaQrvjGmHqfQmIqfDHrtQDErwKfmHMAdhAymQm+EEnhAAQjzAAj7hCg");
	var mask_graphics_505 = new cjs.Graphics().p("AD9dfQrxi/mOqbQmOqcDArvQC9rxKbmOMAeAAyUQnEENnqAAQjqAAjzg9g");
	var mask_graphics_506 = new cjs.Graphics().p("AEHdjQrzi3mUqYQmVqXC4rxQC3rzKXmVMAefAyCQnJEWn0AAQjiAAjqg5g");
	var mask_graphics_507 = new cjs.Graphics().p("AEQdnQr0iwmbqTQmaqUCxrzQCur0KUmbMAe9AxuQnOEgn9AAQjZAAjjg1g");
	var mask_graphics_508 = new cjs.Graphics().p("AEadrQr2iomhqQQmhqQCqr0QCor2KPmhMAfcAxbQnTEpoHAAQjRAAjagxg");
	var mask_graphics_509 = new cjs.Graphics().p("AEkdvQr3ihmnqMQmoqLCjr3QCgr3KLmoMAf6AxIQnYEzoQAAQjJAAjRgtg");
	var mask_graphics_510 = new cjs.Graphics().p("AEudzQr5iamtqIQmuqHCbr4QCZr5KImuMAgYAw0QndE9oaAAQjAAAjJgpg");
	var mask_graphics_511 = new cjs.Graphics().p("AE5d3Qr7iTm0qEQmzqDCTr5QCSr7KDm0MAg2AwgQnhFGokAAQi4AAi/gkg");
	var mask_graphics_512 = new cjs.Graphics().p("AFDd6Qr8iMm6p/Qm6p/CNr6QCKr8J/m6MAhUAwLQnmFQouAAQivAAi3ghg");
	var mask_graphics_513 = new cjs.Graphics().p("AFNd9Qr9iEnAp7QnAp7CFr8QCDr9J7nAMAhxAv3QnqFao4AAQinAAiugeg");
	var mask_graphics_514 = new cjs.Graphics().p("AFYeAQr/h9nGp2QnGp3B+r9QB7r+J3nGMAiOAviQnuFkpCAAQifAAikgbg");
	var mask_graphics_515 = new cjs.Graphics().p("AFieDQsAh1nMpzQnMpyB3r+QB0sAJynMMAisAvNQnzFvpNAAQiVAAicgYg");
	var mask_graphics_516 = new cjs.Graphics().p("AFteGQsBhunSpuQnSpuBvr/QBtsBJtnSMAjJAu3Qn3F6pXAAQiNAAiSgVg");
	var mask_graphics_517 = new cjs.Graphics().p("AF3eIQsBhmnYpqQnZppBosAQBmsCJpnYMAjlAuiQn7GEpiAAQiEAAiJgTg");
	var mask_graphics_518 = new cjs.Graphics().p("AGCeLQsDhgnepkQneplBhsBQBesDJkneMAkCAuMQn/GOpsAAQh7AAiAgPg");
	var mask_graphics_519 = new cjs.Graphics().p("AGNeNQsEhYnkpgQnjpgBYsCQBXsEJgnkMAkeAt2QoDGZp3AAQhyAAh2gNg");
	var mask_graphics_520 = new cjs.Graphics().p("AGYePQsFhRnppbQnqpbBRsDQBQsFJbnpMAk6AteQoGGlqDAAQhpAAhsgLg");
	var mask_graphics_521 = new cjs.Graphics().p("AGjeRQsFhJnwpXQnvpXBKsDQBIsFJWnwMAlWAtIQoKGwqNAAQhhAAhigJg");
	var mask_graphics_522 = new cjs.Graphics().p("AGueSQsGhBn1pSQn1pSBCsEQBBsGJRn1MAlyAsxQoNG7qZAAQhXAAhZgIg");
	var mask_graphics_523 = new cjs.Graphics().p("AG5eUQsHg6n6pNQn7pNA7sFQA5sHJNn7MAmNAsaQoRHHqlAAQhNAAhPgGg");
	var mask_graphics_524 = new cjs.Graphics().p("AHEeVQsHgzoApIQoBpIA0sFQAxsHJIoBMAmpAsCQoUHTqxAAQhEAAhFgFg");
	var mask_graphics_525 = new cjs.Graphics().p("AHPeWQsHgroGpDQoGpDAssGQAqsIJDoGMAnDArqQoWHfq9AAQg7AAg7gEg");
	var mask_graphics_526 = new cjs.Graphics().p("AHaeXQsHgkoMo+QoLo+AksGQAjsII+oMMAneArSQoaHqrJAAQgwAAgygCg");
	var mask_graphics_527 = new cjs.Graphics().p("AHmeYQsIgcoRo5QoRo6AdsHQAbsHI5oRMAn5Aq5QodH2rVAAIhOgBg");
	var mask_graphics_528 = new cjs.Graphics().p("AHxeZQsIgVoXo0QoWo0AWsIQAUsII0oWMAoSAqhQofICriAAIg6AAg");
	var mask_graphics_529 = new cjs.Graphics().p("AH8eZQsIgNocovQocovAPsIQAMsIIvocMAotAqIQoiIPrvAAIgmAAg");
	var mask_graphics_530 = new cjs.Graphics().p("AIIeZQsIgGoiopQohoqAHsIQAFsIIqohMApGApvQokIbr8AAIgRAAg");
	var mask_graphics_531 = new cjs.Graphics().p("AsbV2QonokAAsIQgDsIIkomMApgApVQokInsHABIgFAAQsFAAolojg");
	var mask_graphics_532 = new cjs.Graphics().p("AsVWDQosofgIsIQgKsIIfosMAp6Ao8QofIssIAJIgZAAQr4AAojoWg");
	var mask_graphics_533 = new cjs.Graphics().p("AsOWPQoxoZgQsJQgRsHIaoxMAqSAoiQoaIxsHARIguAAQrrAAogoKg");
	var mask_graphics_534 = new cjs.Graphics().p("AsHWcQo2oVgXsIQgZsHIUo2MAqrAoIQoUI2sHAYIhDABQreAAodn9g");
	var mask_graphics_535 = new cjs.Graphics().p("AsAWoQo8oPgesIQggsGIPo8MArDAnuQoPI7sGAfQgsACgrAAQrRAAobnxg");
	var mask_graphics_536 = new cjs.Graphics().p("Ar5W0QpAoJgmsIQgosGIJpAMArcAnTQoJJAsHAmQg1ADg1AAQrFAAoYnlg");
	var mask_graphics_537 = new cjs.Graphics().p("AryXAQpFoEgtsHQgvsGIDpFMAr0Am4QoEJFsGAuQg/AEg/AAQq5AAoVnZg");
	var mask_graphics_538 = new cjs.Graphics().p("ArqXMQpKn+g1sHQg3sFH+pLMAsMAmdQn+JLsGA1QhJAFhJAAQqsAAoSnNg");
	var mask_graphics_539 = new cjs.Graphics().p("ArjXXQpOn4g9sGQg+sFH5pPMAsjAmCQn5JPsFA9QhTAGhSAAQqgAAoQnCg");
	var mask_graphics_540 = new cjs.Graphics().p("ArbXjQpTnzhEsFQhFsFHypTMAs7AlmQnzJUsEBEQheAIhbAAQqVAAoMm2g");
	var mask_graphics_541 = new cjs.Graphics().p("ArTXuQpYnthLsFQhNsDHtpZMAtRAlLQntJYsDBMQhoAKhkAAQqJAAoJmrg");
	var mask_graphics_542 = new cjs.Graphics().p("ArKX6QpenohSsEQhUsDHnpdMAtoAkvQnnJdsDBTQhxAMhuAAQp+AAoEmfg");
	var mask_graphics_543 = new cjs.Graphics().p("ArCYFQpinihZsDQhcsCHhpiMAt/AkTQniJhsCBbQh6APh3AAQpzAAoBmVg");
	var mask_graphics_544 = new cjs.Graphics().p("Aq5YQQpnnchhsCQhjsBHbpnMAuVAj2QnbJnsBBiQiFARh/AAQpoAAn9mKg");
	var mask_graphics_545 = new cjs.Graphics().p("AqwYaQprnVhpsCQhrsAHWprMAurAjaQnWJrsABpQiOAUiIAAQpdAAn5mAg");
	var mask_graphics_546 = new cjs.Graphics().p("AqnYlQpwnQhwsAQhyr/HQpvMAvAAi8QnQJwr/BxQiXAWiRAAQpSAAn1l1g");
	var mask_graphics_547 = new cjs.Graphics().p("AqeYwQp0nKh4r/Qh5r+HKp0MAvVAigQnJJ0r+B4QigAZiaAAQpIAAnxlqg");
	var mask_graphics_548 = new cjs.Graphics().p("AqVY6Qp4nEh/r+QiBr8HEp5MAvrAiDQnEJ4r9CAQipAcijAAQo9AAntlgg");
	var mask_graphics_549 = new cjs.Graphics().p("AqMZEQp8m9iGr9QiIr7G9p9MAwAAhlQm+J9r7CHQizAfirAAQozAAnplWg");
	var mask_graphics_550 = new cjs.Graphics().p("AqCZOQqBm3iNr7QiPr6G3qBMAwUAhHQm4KBr6COQi7Aji0AAQopAAnklMg");
	var mask_graphics_551 = new cjs.Graphics().p("Ap4ZYQqFmxiVr6QiWr4GxqGMAwoAgqQmxKFr5CWQjEAmi9AAQofAAnflCg");
	var mask_graphics_552 = new cjs.Graphics().p("ApuZiQqJmricr4Qier3GrqKMAw8AgMQmrKJr4CdQjMAqjFAAQoWAAnak4g");
	var mask_graphics_553 = new cjs.Graphics().p("ApkZsQqNmlijr3Qimr1GlqOMAxQAfuQmlKNr2CkQjVAujOAAQoLAAnWkug");
	var mask_graphics_554 = new cjs.Graphics().p("ApaZ1QqRmeiqr1Qitr0GeqSMAxjAfQQmeKRr0CrQjeAyjWAAQoCAAnRklg");
	var mask_graphics_555 = new cjs.Graphics().p("ApPZ/QqVmYiyr0Qi0ryGYqVMAx2AewQmYKVryCzQjnA3jeAAQn5AAnLkcg");
	var mask_graphics_556 = new cjs.Graphics().p("ApFaIQqZmSi5ryQi7rwGSqZMAyJAeSQmSKZrxC6QjvA7jmAAQnvAAnHkTg");
	var mask_graphics_557 = new cjs.Graphics().p("Ao6aRQqdmLjArwQjCrvGLqdMAybAdzQmLKdrvDBQj3BAjvAAQnmAAnBkKg");
	var mask_graphics_558 = new cjs.Graphics().p("AovaaQqgmFjIruQjJrtGEqgMAyuAdTQmFKhrtDIQkABFj2AAQndAAm8kBg");
	var mask_graphics_559 = new cjs.Graphics().p("AokajQqkl+jPrtQjQrrF+qkMAy/Ac1Ql+KkrrDQQkIBJj/AAQnUAAm2j4g");
	var mask_graphics_560 = new cjs.Graphics().p("AoYasQqol4jWrqQjYrpF4qoMAzRAcVQl4KorpDXQkQBOkHAAQnLAAmwjvg");
	var mask_graphics_561 = new cjs.Graphics().p("AoNa0QqrlxjdroQjgrnFyqsMAziAb2QlxKsrnDdQkYBUkQAAQnBAAmrjng");
	var mask_graphics_562 = new cjs.Graphics().p("AoBa9QqvlrjlrmQjmrlFrqvMAzzAbWQlrKvrkDlQkgBZkYAAQm4AAmljeg");
	var mask_graphics_563 = new cjs.Graphics().p("An2bFQqylkjrrkQjuriFlqzMA0DAa2QlkKzriDsQkoBekgAAQmwAAmfjWg");
	var mask_graphics_564 = new cjs.Graphics().p("AnqbNQq2ldjyriQj0rgFdq2MA0UAaWQldK2rgDzQkwBkknAAQmoAAmZjOg");
	var mask_graphics_565 = new cjs.Graphics().p("AnebVQq5lXj5rfQj8reFXq5MA0kAZ2QlWK5reD6Qk3BqkwAAQmfAAmTjGg");
	var mask_graphics_566 = new cjs.Graphics().p("AnRbdQq9lQkArdQkDrbFQq9MA00AZVQlQK9rbEBQk/Bwk4AAQmWAAmMi+g");
	var mask_graphics_567 = new cjs.Graphics().p("AnFblQrAlKkHraQkKrZFKrAMA1DAY1QlJLArZEIQlGB2lAAAQmOAAmGi2g");
	var mask_graphics_568 = new cjs.Graphics().p("Am4bsQrDlDkPrXQkQrWFCrDMA1TAYUQlDLDrWEPQlNB8lJAAQmFAAl/ivg");
	var mask_graphics_569 = new cjs.Graphics().p("AlucUQrTkck2rHQk4rHEbrTMA2jAVXQkcLUrGE2Ql1Cjl4AAQlVAAlZiHg");
	var mask_graphics_570 = new cjs.Graphics().p("Akfc3Qrij0lcq2Qlfq1D0rgMA3oASVQj0Liq0FdQmZDPmpAAQknAAkuhkg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(449).to({graphics:mask_graphics_449,x:119.2,y:194.8}).wait(1).to({graphics:mask_graphics_450,x:120.1,y:194.8}).wait(1).to({graphics:mask_graphics_451,x:121,y:194.8}).wait(1).to({graphics:mask_graphics_452,x:121.9,y:194.8}).wait(1).to({graphics:mask_graphics_453,x:122.8,y:194.8}).wait(1).to({graphics:mask_graphics_454,x:123.7,y:194.8}).wait(1).to({graphics:mask_graphics_455,x:124.6,y:194.8}).wait(1).to({graphics:mask_graphics_456,x:125.5,y:194.8}).wait(1).to({graphics:mask_graphics_457,x:126.4,y:194.8}).wait(1).to({graphics:mask_graphics_458,x:127.3,y:194.8}).wait(1).to({graphics:mask_graphics_459,x:128.2,y:194.8}).wait(1).to({graphics:mask_graphics_460,x:129.1,y:194.8}).wait(1).to({graphics:mask_graphics_461,x:130,y:194.8}).wait(1).to({graphics:mask_graphics_462,x:130.9,y:194.8}).wait(1).to({graphics:mask_graphics_463,x:131.8,y:194.8}).wait(1).to({graphics:mask_graphics_464,x:132.7,y:194.8}).wait(1).to({graphics:mask_graphics_465,x:133.6,y:194.8}).wait(1).to({graphics:mask_graphics_466,x:134.4,y:194.9}).wait(1).to({graphics:mask_graphics_467,x:135.3,y:194.9}).wait(1).to({graphics:mask_graphics_468,x:136.2,y:194.9}).wait(1).to({graphics:mask_graphics_469,x:137.1,y:194.9}).wait(1).to({graphics:mask_graphics_470,x:138,y:194.9}).wait(1).to({graphics:mask_graphics_471,x:138.9,y:194.9}).wait(1).to({graphics:mask_graphics_472,x:139.7,y:194.9}).wait(1).to({graphics:mask_graphics_473,x:140.6,y:194.9}).wait(1).to({graphics:mask_graphics_474,x:141.5,y:194.9}).wait(1).to({graphics:mask_graphics_475,x:142.4,y:194.9}).wait(1).to({graphics:mask_graphics_476,x:143.2,y:194.9}).wait(1).to({graphics:mask_graphics_477,x:144.1,y:194.9}).wait(1).to({graphics:mask_graphics_478,x:145,y:194.9}).wait(1).to({graphics:mask_graphics_479,x:145.8,y:194.9}).wait(1).to({graphics:mask_graphics_480,x:146.7,y:194.9}).wait(1).to({graphics:mask_graphics_481,x:147.6,y:194.9}).wait(1).to({graphics:mask_graphics_482,x:148.4,y:194.9}).wait(1).to({graphics:mask_graphics_483,x:149.3,y:194.9}).wait(1).to({graphics:mask_graphics_484,x:150.1,y:194.9}).wait(1).to({graphics:mask_graphics_485,x:151,y:194.9}).wait(1).to({graphics:mask_graphics_486,x:151.8,y:194.9}).wait(1).to({graphics:mask_graphics_487,x:152.6,y:194.9}).wait(1).to({graphics:mask_graphics_488,x:153.5,y:194.9}).wait(1).to({graphics:mask_graphics_489,x:154.3,y:194.9}).wait(1).to({graphics:mask_graphics_490,x:155.2,y:194.9}).wait(1).to({graphics:mask_graphics_491,x:156,y:194.9}).wait(1).to({graphics:mask_graphics_492,x:156.8,y:194.9}).wait(1).to({graphics:mask_graphics_493,x:157.6,y:194.9}).wait(1).to({graphics:mask_graphics_494,x:158.4,y:194.9}).wait(1).to({graphics:mask_graphics_495,x:159.3,y:194.9}).wait(1).to({graphics:mask_graphics_496,x:160.1,y:194.9}).wait(1).to({graphics:mask_graphics_497,x:160.9,y:194.9}).wait(1).to({graphics:mask_graphics_498,x:161.7,y:194.9}).wait(1).to({graphics:mask_graphics_499,x:162.5,y:194.9}).wait(1).to({graphics:mask_graphics_500,x:163.3,y:194.9}).wait(1).to({graphics:mask_graphics_501,x:164.1,y:194.9}).wait(1).to({graphics:mask_graphics_502,x:164.8,y:194.9}).wait(1).to({graphics:mask_graphics_503,x:165.6,y:194.8}).wait(1).to({graphics:mask_graphics_504,x:166.4,y:194.8}).wait(1).to({graphics:mask_graphics_505,x:167.2,y:194.8}).wait(1).to({graphics:mask_graphics_506,x:168,y:194.8}).wait(1).to({graphics:mask_graphics_507,x:168.7,y:194.8}).wait(1).to({graphics:mask_graphics_508,x:169.5,y:194.8}).wait(1).to({graphics:mask_graphics_509,x:170.2,y:194.8}).wait(1).to({graphics:mask_graphics_510,x:171,y:194.8}).wait(1).to({graphics:mask_graphics_511,x:171.7,y:194.7}).wait(1).to({graphics:mask_graphics_512,x:172.5,y:194.7}).wait(1).to({graphics:mask_graphics_513,x:173.2,y:194.7}).wait(1).to({graphics:mask_graphics_514,x:173.9,y:194.7}).wait(1).to({graphics:mask_graphics_515,x:174.7,y:194.7}).wait(1).to({graphics:mask_graphics_516,x:175.4,y:194.7}).wait(1).to({graphics:mask_graphics_517,x:176.1,y:194.7}).wait(1).to({graphics:mask_graphics_518,x:176.8,y:194.6}).wait(1).to({graphics:mask_graphics_519,x:177.5,y:194.6}).wait(1).to({graphics:mask_graphics_520,x:178.2,y:194.6}).wait(1).to({graphics:mask_graphics_521,x:178.9,y:194.6}).wait(1).to({graphics:mask_graphics_522,x:179.6,y:194.6}).wait(1).to({graphics:mask_graphics_523,x:180.3,y:194.6}).wait(1).to({graphics:mask_graphics_524,x:181,y:194.6}).wait(1).to({graphics:mask_graphics_525,x:181.6,y:194.6}).wait(1).to({graphics:mask_graphics_526,x:182.3,y:194.5}).wait(1).to({graphics:mask_graphics_527,x:183,y:194.5}).wait(1).to({graphics:mask_graphics_528,x:183.6,y:194.5}).wait(1).to({graphics:mask_graphics_529,x:184.3,y:194.5}).wait(1).to({graphics:mask_graphics_530,x:184.9,y:194.5}).wait(1).to({graphics:mask_graphics_531,x:185.5,y:194.5}).wait(1).to({graphics:mask_graphics_532,x:186.2,y:194.5}).wait(1).to({graphics:mask_graphics_533,x:186.8,y:194.5}).wait(1).to({graphics:mask_graphics_534,x:187.4,y:194.5}).wait(1).to({graphics:mask_graphics_535,x:188,y:194.5}).wait(1).to({graphics:mask_graphics_536,x:188.6,y:194.5}).wait(1).to({graphics:mask_graphics_537,x:189.2,y:194.5}).wait(1).to({graphics:mask_graphics_538,x:189.8,y:194.5}).wait(1).to({graphics:mask_graphics_539,x:190.4,y:194.5}).wait(1).to({graphics:mask_graphics_540,x:191,y:194.5}).wait(1).to({graphics:mask_graphics_541,x:191.5,y:194.5}).wait(1).to({graphics:mask_graphics_542,x:192.1,y:194.5}).wait(1).to({graphics:mask_graphics_543,x:192.7,y:194.6}).wait(1).to({graphics:mask_graphics_544,x:193.2,y:194.6}).wait(1).to({graphics:mask_graphics_545,x:193.8,y:194.6}).wait(1).to({graphics:mask_graphics_546,x:194.3,y:194.6}).wait(1).to({graphics:mask_graphics_547,x:194.8,y:194.6}).wait(1).to({graphics:mask_graphics_548,x:195.4,y:194.6}).wait(1).to({graphics:mask_graphics_549,x:195.9,y:194.6}).wait(1).to({graphics:mask_graphics_550,x:196.4,y:194.6}).wait(1).to({graphics:mask_graphics_551,x:196.9,y:194.6}).wait(1).to({graphics:mask_graphics_552,x:197.4,y:194.6}).wait(1).to({graphics:mask_graphics_553,x:197.9,y:194.6}).wait(1).to({graphics:mask_graphics_554,x:198.3,y:194.6}).wait(1).to({graphics:mask_graphics_555,x:198.8,y:194.7}).wait(1).to({graphics:mask_graphics_556,x:199.3,y:194.7}).wait(1).to({graphics:mask_graphics_557,x:199.7,y:194.7}).wait(1).to({graphics:mask_graphics_558,x:200.2,y:194.7}).wait(1).to({graphics:mask_graphics_559,x:200.6,y:194.7}).wait(1).to({graphics:mask_graphics_560,x:201.1,y:194.7}).wait(1).to({graphics:mask_graphics_561,x:201.5,y:194.7}).wait(1).to({graphics:mask_graphics_562,x:201.9,y:194.7}).wait(1).to({graphics:mask_graphics_563,x:202.3,y:194.7}).wait(1).to({graphics:mask_graphics_564,x:202.7,y:194.7}).wait(1).to({graphics:mask_graphics_565,x:203.1,y:194.7}).wait(1).to({graphics:mask_graphics_566,x:203.5,y:194.7}).wait(1).to({graphics:mask_graphics_567,x:203.9,y:194.7}).wait(1).to({graphics:mask_graphics_568,x:204.3,y:194.7}).wait(1).to({graphics:mask_graphics_569,x:206.3,y:194.7}).wait(1).to({graphics:mask_graphics_570,x:208,y:194.7}).wait(81));

	// 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(20,1,1).p("AppGiQCghHDjhfQDihfEQjbQEQjdBOiG");
	this.shape_1.setTransform(300.2,295.6);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(449).to({_off:false},0).wait(202));

	// Layer 16
	this.instance_2 = new lib.ar2("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(245.3,440,1,1,171.7,0,0,0.7,-0.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(355).to({_off:false},0).wait(79).to({mode:"single",startPosition:59},0).wait(217));

	// Layer 11 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_370 = new cjs.Graphics().p("EgDlAkbQqml8jTrsQjTrsF9qjQF6qmLrjTMAP5A4ZQkLBLkCAAQnQAAmyj0g");
	var mask_1_graphics_371 = new cjs.Graphics().p("EgDXAksQqtlvjhroQjhrnFwqrQFtqtLnjhMAQ9A4EQkbBWkSAAQm+AAmnjjg");
	var mask_1_graphics_372 = new cjs.Graphics().p("EgDIAk9Qq0lijvrkQjvrjFiqyQFhqzLijwMASCA3vQkrBhkiAAQmtAAmbjSg");
	var mask_1_graphics_373 = new cjs.Graphics().p("EgC5AlMQq7lUj9rfQj9reFVq5QFTq6Lej9MATGA3YQk6BskzAAQmcAAmOjDg");
	var mask_1_graphics_374 = new cjs.Graphics().p("EgCpAlcQrClIkLrZQkLraFIq/QFGrALZkMMAUJA3BQlJB4lDAAQmLAAmBizg");
	var mask_1_graphics_375 = new cjs.Graphics().p("EgCZAlqQrIk6kZrUQkZrUE7rFQE4rHLUkZMAVLA2nQlWCFlUAAQl6AAl0ilg");
	var mask_1_graphics_376 = new cjs.Graphics().p("EgCJAl4QrNksknrPQknrPEtrKQErrNLOknMAWOA2NQllCSlkAAQlpAAlniXg");
	var mask_1_graphics_377 = new cjs.Graphics().p("EgB4AmGQrTkfk1rJQk0rJEfrRQEdrSLJk0MAXPA1xQlyCgl0AAQlZAAlZiJg");
	var mask_1_graphics_378 = new cjs.Graphics().p("EgBnAmSQrZkQlCrDQlCrDESrXQEPrXLDlCMAYRA1UQmACvmFAAQlIAAlLh9g");
	var mask_1_graphics_379 = new cjs.Graphics().p("EgBWAmfQrdkDlQq9QlPq9EDrbQEBrcK9lPMAZSA01QmMC+mWAAQk4AAk9hwg");
	var mask_1_graphics_380 = new cjs.Graphics().p("EgBEAmqQrij0ldq3Qldq2D1rhQDzrgK3ldMAaSA0WQmZDOmnAAQkoAAkthlg");
	var mask_1_graphics_381 = new cjs.Graphics().p("EgAyAm1QrnjmlqqwQlqqvDnrlQDlrlKwlqMAbSAz1QmlDdm4AAQkYAAkehZg");
	var mask_1_graphics_382 = new cjs.Graphics().p("EgAgAnAQrrjZl3qoQl3qpDZrpQDXrpKol3MAcRAzTQmwDunKAAQkHAAkPhOg");
	var mask_1_graphics_383 = new cjs.Graphics().p("EgANAnJQrvjKmEqhQmEqhDLruQDIrtKimDMAdPAywQm7D/ncAAQj3AAj/hFg");
	var mask_1_graphics_384 = new cjs.Graphics().p("EAAFAnSQryi7mQqaQmRqaC8rxQC6rwKamRMAeNAyMQnGERnuAAQjnAAjvg8g");
	var mask_1_graphics_385 = new cjs.Graphics().p("EAAYAnbQr1itmdqSQmdqSCtr1QCsr0KSmdMAfKAxmQnQEkoBAAQjWAAjfgzg");
	var mask_1_graphics_386 = new cjs.Graphics().p("EAAsAniQr4iemqqKQmqqKCgr4QCdr3KKmqMAgGAxAQnaE2oUAAQjGAAjNgrg");
	var mask_1_graphics_387 = new cjs.Graphics().p("EABAAnqQr7iQm2qCQm2qCCQr6QCPr7KCm2MAhBAwYQnjFKonAAQi1AAi8gjg");
	var mask_1_graphics_388 = new cjs.Graphics().p("EABUAnwQr9iBnDp6QnCp5CCr9QCAr9J6nCMAh8AvvQnsFeo8AAQijAAirgdg");
	var mask_1_graphics_389 = new cjs.Graphics().p("EABpAn2QsAhznOpwQnPpxB0sAQBxr/JxnOMAi2AvFQn0FypQAAQiTAAiYgWg");
	var mask_1_graphics_390 = new cjs.Graphics().p("EAB+An7QsChknapoQnapnBksCQBjsBJonaMAjvAuZQn8GIpmAAQiBAAiFgRg");
	var mask_1_graphics_391 = new cjs.Graphics().p("EACTAn/QsEhVnlpeQnmpfBWsDQBUsDJenmMAkoAttQoEGep7AAQhvAAhzgNg");
	var mask_1_graphics_392 = new cjs.Graphics().p("EACpAoDQsGhHnxpVQnxpUBHsGQBGsEJVnxMAlfAtAQoLG0qSAAQhdAAhfgJg");
	var mask_1_graphics_393 = new cjs.Graphics().p("EAC/AoGQsHg4n9pLQn8pLA5sHQA2sFJLn9MAmWAsSQoRHKqpAAQhKAAhMgFg");
	var mask_1_graphics_394 = new cjs.Graphics().p("EADVAoIQsIgpoHpBQoIpCAqsHQAnsGJCoIMAnLAriQoXHirBAAQg3AAg4gDg");
	var mask_1_graphics_395 = new cjs.Graphics().p("EADrAoKQsIgaoTo4QoSo3AbsIQAZsHI3oTMAoAAqyQodH6rZAAIhIgBg");
	var mask_1_graphics_396 = new cjs.Graphics().p("EAECAoLQsJgLodouQodotAMsIQAKsIItodMAo0AqBQoiISrzAAIgfAAg");
	var mask_1_graphics_397 = new cjs.Graphics().p("AwXfsQooojgDsJQgFsHIjooMApnApOQojIosHAEIgKAAQsCAAokofg");
	var mask_1_graphics_398 = new cjs.Graphics().p("EgQKAgFQozoZgRsIQgTsHIYoyMAqZAobQoZIysHASIgzABQroAAofoGg");
	var mask_1_graphics_399 = new cjs.Graphics().p("EgP8AgdQo9oOggsHQgisIINo7MArKAnmQoNI9sHAhQguACguAAQrOAAoanug");
	var mask_1_graphics_400 = new cjs.Graphics().p("EgPtAg1QpHoDgvsHQgxsGICpGMAr6AmyQoCJGsGAwQhDAEhAAAQq2AAoUnWg");
	var mask_1_graphics_401 = new cjs.Graphics().p("EgPeAhMQpQn3g+sGQhAsGH3pPMAspAl7Qn3JQsFA/QhWAHhUAAQqeAAoOm/g");
	var mask_1_graphics_402 = new cjs.Graphics().p("EgPOAhjQpZnshNsFQhOsEHrpZMAtXAlFQnsJZsEBOQhpAKhmAAQqHAAoImog");
	var mask_1_graphics_403 = new cjs.Graphics().p("EgO9Ah5QpjnghbsDQhdsDHgpiMAuDAkMQngJjsCBcQh9APh4AAQpxAAoAmSg");
	var mask_1_graphics_404 = new cjs.Graphics().p("EgOrAiOQpsnUhqsBQhssBHUprMAuvAjUQnUJssABrQiQAUiKAAQpbAAn4l+g");
	var mask_1_graphics_405 = new cjs.Graphics().p("EgOZAijQp0nIh5r/Qh7r/HJpzMAvZAiaQnIJ1r+B5QiiAaicAAQpFAAnxlpg");
	var mask_1_graphics_406 = new cjs.Graphics().p("EgOGAi4Qp9m9iHr8QiKr8G9p8MAwDAhfQm9J+r7CIQi0AgitAAQoxAAnolUg");
	var mask_1_graphics_407 = new cjs.Graphics().p("EgNyAjMQqGmwiWr6QiXr5GwqFMAwrAglQmwKFr5CXQjFAni+AAQoeAAnelAg");
	var mask_1_graphics_408 = new cjs.Graphics().p("EgNeAjfQqNmkilr2Qimr3GkqMMAxSAfoQmkKOr1ClQjXAvjPAAQoKAAnVktg");
	var mask_1_graphics_409 = new cjs.Graphics().p("EgNJAjyQqVmXizr0Qi1rzGXqUMAx5AesQmXKWrzCzQjoA3jfAAQn3AAnLkag");
	var mask_1_graphics_410 = new cjs.Graphics().p("EgMzAkEQqdmKjCrwQjDrwGLqcMAydAdvQmKKdrvDCQj4BBjwAAQnlAAnAkJg");
	var mask_1_graphics_411 = new cjs.Graphics().p("EgMdAkWQqll+jPrsQjSrrF+qkMAzBAcxQl9KlrrDQQkJBKkAAAQnSAAm2j3g");
	var mask_1_graphics_412 = new cjs.Graphics().p("EgMGAknQqslxjeroQjfrnFwqrMAzkAbyQlwKsrnDfQkZBUkQAAQnBAAmqjmg");
	var mask_1_graphics_413 = new cjs.Graphics().p("EgLuAk4QqzlkjsrkQjurjFjqxMA0GAayQlkKzriDtQkpBfkgAAQmvAAmejVg");
	var mask_1_graphics_414 = new cjs.Graphics().p("EgLWAlIQq6lXj6rfQj8reFWq5MA0mAZzQlWK6reD7Qk4BqkwAAQmeAAmSjFg");
	var mask_1_graphics_415 = new cjs.Graphics().p("EgK+AlXQrAlJkIraQkKrZFJq/MA1FAYyQlJLArZEJQlGB2lBAAQmNAAmGi2g");
	var mask_1_graphics_416 = new cjs.Graphics().p("EgKlAlmQrGk8kVrVQkYrUE7rFMA1iAXxQk7LGrUEXQlVCDlRAAQl8AAl5ing");
	var mask_1_graphics_417 = new cjs.Graphics().p("EgKLAl0QrMkukjrPQkmrPEurLMA1+AWvQkuLMrOElQliCQliAAQlsAAlriZg");
	var mask_1_graphics_418 = new cjs.Graphics().p("EgJwAmBQrSkgkxrJQk0rJEgrRMA2aAVtQkgLSrIEyQlxCelyAAQlbAAldiMg");
	var mask_1_graphics_419 = new cjs.Graphics().p("EgJWAmOQrXkSk+rEQlBrDESrXMA2zAUsQkSLXrCE/Ql+CtmDAAQlKAAlQh/g");
	var mask_1_graphics_420 = new cjs.Graphics().p("EgI6AmbQrckElNq+QlOq9EErcMA3NAToQkFLcq8FNQmKC8mUAAQk6AAlBhyg");
	var mask_1_graphics_421 = new cjs.Graphics().p("EgIeAmnQrhj3laq3Qlbq2D2rhMA3jASlQj2Lgq2FbQmXDLmlAAQkpAAkyhmg");
	var mask_1_graphics_422 = new cjs.Graphics().p("EgICAmyQrljplnqwQlpqvDormMA36ARhQjoLlqvFnQmjDcm3AAQkZAAkjhbg");
	var mask_1_graphics_423 = new cjs.Graphics().p("EgHlAm8Qrqjal0qpQl1qpDZrpMA4PAQbQjaLqqoF1QmvDrnIAAQkJAAkThQg");
	var mask_1_graphics_424 = new cjs.Graphics().p("EgHHAnGQrujMmBqiQmDqhDMruMA4hAPXQjLLuqhGBQm6D9naAAQj5AAkChGg");
	var mask_1_graphics_425 = new cjs.Graphics().p("EgGpAnPQryi9mOqbQmPqaC9rxMA40AOSQi9LxqaGOQnEEPntAAQjoAAjyg9g");
	var mask_1_graphics_426 = new cjs.Graphics().p("EgGLAnYQr1ivmaqTQmdqSCvr1MA5FANMQivL1qSGbQnOEhn/AAQjYAAjig0g");
	var mask_1_graphics_427 = new cjs.Graphics().p("EgFsAngQr4ihmnqLQmpqKCgr4MA5VAMGQihL5qKGnQnYE0oSAAQjIAAjQgsg");
	var mask_1_graphics_428 = new cjs.Graphics().p("EgFNAnnQr7iSmzqDQm1qCCSr7MA5iALAQiSL8qBGzQnjFHolAAQi3AAi/gkg");
	var mask_1_graphics_429 = new cjs.Graphics().p("EgEtAnuQr+iEm/p6QnBp5CDr+MA5vAJ5QiDL+p5HAQnsFbo5AAQimAAitgdg");
	var mask_1_graphics_430 = new cjs.Graphics().p("EgENAnzQsAh0nLpyQnOpxB1sAMA56AIzQh0MApxHMQnzFwpOAAQiVAAibgYg");
	var mask_1_graphics_431 = new cjs.Graphics().p("EgDsAn4QsChmnYpoQnZpoBmsCMA6FAHsQhmMCpoHYQn7GFpkAAQiCAAiJgTg");
	var mask_1_graphics_432 = new cjs.Graphics().p("EgCQAoDQsHg9n3pQQn4pOA9sGMA6ZAEpQg9MHpOH3QoPHBqhAAQhRAAhUgHg");
	var mask_1_graphics_433 = new cjs.Graphics().p("EgAyAoJQsIgVoVo1QoXozAVsIMA6kABmQgWMJozIVQofICrjAAIg6gBg");
	var mask_1_graphics_434 = new cjs.Graphics().p("EgULAgEQozoWgUsJMA6kgBdQATMJoWIxQoYI0sJATIg1ABQrmAAoeoGg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(370).to({graphics:mask_1_graphics_370,x:88,y:257.5}).wait(1).to({graphics:mask_1_graphics_371,x:89.7,y:257.5}).wait(1).to({graphics:mask_1_graphics_372,x:91.4,y:257.5}).wait(1).to({graphics:mask_1_graphics_373,x:93.1,y:257.5}).wait(1).to({graphics:mask_1_graphics_374,x:94.8,y:257.5}).wait(1).to({graphics:mask_1_graphics_375,x:96.4,y:257.5}).wait(1).to({graphics:mask_1_graphics_376,x:98.1,y:257.5}).wait(1).to({graphics:mask_1_graphics_377,x:99.7,y:257.5}).wait(1).to({graphics:mask_1_graphics_378,x:101.4,y:257.5}).wait(1).to({graphics:mask_1_graphics_379,x:103,y:257.5}).wait(1).to({graphics:mask_1_graphics_380,x:104.6,y:257.5}).wait(1).to({graphics:mask_1_graphics_381,x:106.2,y:257.4}).wait(1).to({graphics:mask_1_graphics_382,x:107.8,y:257.4}).wait(1).to({graphics:mask_1_graphics_383,x:109.4,y:257.4}).wait(1).to({graphics:mask_1_graphics_384,x:110.9,y:257.4}).wait(1).to({graphics:mask_1_graphics_385,x:112.5,y:257.4}).wait(1).to({graphics:mask_1_graphics_386,x:114,y:257.3}).wait(1).to({graphics:mask_1_graphics_387,x:115.5,y:257.3}).wait(1).to({graphics:mask_1_graphics_388,x:117,y:257.3}).wait(1).to({graphics:mask_1_graphics_389,x:118.4,y:257.2}).wait(1).to({graphics:mask_1_graphics_390,x:119.9,y:257.2}).wait(1).to({graphics:mask_1_graphics_391,x:121.3,y:257.2}).wait(1).to({graphics:mask_1_graphics_392,x:122.7,y:257.2}).wait(1).to({graphics:mask_1_graphics_393,x:124.1,y:257.1}).wait(1).to({graphics:mask_1_graphics_394,x:125.4,y:257.1}).wait(1).to({graphics:mask_1_graphics_395,x:126.8,y:257.1}).wait(1).to({graphics:mask_1_graphics_396,x:128.1,y:257.1}).wait(1).to({graphics:mask_1_graphics_397,x:129.3,y:257.1}).wait(1).to({graphics:mask_1_graphics_398,x:130.6,y:257.1}).wait(1).to({graphics:mask_1_graphics_399,x:131.8,y:257.1}).wait(1).to({graphics:mask_1_graphics_400,x:132.9,y:257.1}).wait(1).to({graphics:mask_1_graphics_401,x:134.1,y:257.1}).wait(1).to({graphics:mask_1_graphics_402,x:135.2,y:257.1}).wait(1).to({graphics:mask_1_graphics_403,x:136.3,y:257.1}).wait(1).to({graphics:mask_1_graphics_404,x:137.3,y:257.2}).wait(1).to({graphics:mask_1_graphics_405,x:138.4,y:257.2}).wait(1).to({graphics:mask_1_graphics_406,x:139.4,y:257.2}).wait(1).to({graphics:mask_1_graphics_407,x:140.4,y:257.2}).wait(1).to({graphics:mask_1_graphics_408,x:141.3,y:257.2}).wait(1).to({graphics:mask_1_graphics_409,x:142.2,y:257.2}).wait(1).to({graphics:mask_1_graphics_410,x:143.1,y:257.3}).wait(1).to({graphics:mask_1_graphics_411,x:144,y:257.3}).wait(1).to({graphics:mask_1_graphics_412,x:144.8,y:257.3}).wait(1).to({graphics:mask_1_graphics_413,x:145.6,y:257.3}).wait(1).to({graphics:mask_1_graphics_414,x:146.4,y:257.3}).wait(1).to({graphics:mask_1_graphics_415,x:147.2,y:257.3}).wait(1).to({graphics:mask_1_graphics_416,x:147.9,y:257.3}).wait(1).to({graphics:mask_1_graphics_417,x:148.6,y:257.3}).wait(1).to({graphics:mask_1_graphics_418,x:149.3,y:257.3}).wait(1).to({graphics:mask_1_graphics_419,x:149.9,y:257.3}).wait(1).to({graphics:mask_1_graphics_420,x:150.5,y:257.3}).wait(1).to({graphics:mask_1_graphics_421,x:151.1,y:257.3}).wait(1).to({graphics:mask_1_graphics_422,x:151.6,y:257.3}).wait(1).to({graphics:mask_1_graphics_423,x:152.2,y:257.2}).wait(1).to({graphics:mask_1_graphics_424,x:152.6,y:257.2}).wait(1).to({graphics:mask_1_graphics_425,x:153.1,y:257.2}).wait(1).to({graphics:mask_1_graphics_426,x:153.5,y:257.2}).wait(1).to({graphics:mask_1_graphics_427,x:153.9,y:257.2}).wait(1).to({graphics:mask_1_graphics_428,x:154.3,y:257.1}).wait(1).to({graphics:mask_1_graphics_429,x:154.6,y:257.1}).wait(1).to({graphics:mask_1_graphics_430,x:154.9,y:257.1}).wait(1).to({graphics:mask_1_graphics_431,x:155.2,y:257.1}).wait(1).to({graphics:mask_1_graphics_432,x:155.7,y:257}).wait(1).to({graphics:mask_1_graphics_433,x:156,y:257}).wait(1).to({graphics:mask_1_graphics_434,x:155.9,y:257}).wait(217));

	// 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(20,1,1).p("Ak4GEQgmDDDAgRQC/gSCdkwQCdkvghn7");
	this.shape_2.setTransform(206.3,394);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(370).to({_off:false},0).wait(281));

	// Layer 9 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_355 = new cjs.Graphics().p("AmUVoQEEmVHUhmQHVhnGUEDQGND+BqHHMgjYAHwQhdnKD9mMg");
	var mask_2_graphics_356 = new cjs.Graphics().p("AmjV2QD2mdHRh2QHSh2GcD1QGVDxB5HEMgjHAI6QhsnHDwmUg");
	var mask_2_graphics_357 = new cjs.Graphics().p("AmwWEQDomkHNiGQHNiFGlDoQGcDkCIG/MgizAKDQh7nDDjmcg");
	var mask_2_graphics_358 = new cjs.Graphics().p("Am8WUQDbmsHIiVQHJiUGrDaQGkDWCXG6MgidALNQiKm/DVmjg");
	var mask_2_graphics_359 = new cjs.Graphics().p("AnGWkQDNmzHCijQHEijGzDLQGqDIClG2MgiEAMUQiYm6DHmqg");
	var mask_2_graphics_360 = new cjs.Graphics().p("AnOW1QC+m5G9iyQG/iyG5C9QGwC6C0GwMghpANbQinm1C5mwg");
	var mask_2_graphics_361 = new cjs.Graphics().p("AnUXGQCvm/G3jAQG4jBG/CvQG3CsDBGpMghLAOiQi1mvCrm3g");
	var mask_2_graphics_362 = new cjs.Graphics().p("AnZXZQChnFGwjPQGyjPHECgQG8CdDQGjMggtAPnQjDmpCdm7g");
	var mask_2_graphics_363 = new cjs.Graphics().p("AncXsQCSnKGpjdQGrjdHJCRQHBCPDdGcMggKAQqQjRmiCOnAg");
	var mask_2_graphics_364 = new cjs.Graphics().p("AndX/QCCnOGijrQGjjrHOCCQHGCADqGVI/mRtQjfmbCAnFg");
	var mask_2_graphics_365 = new cjs.Graphics().p("AndYUQBznTGbj4QGbj5HSBzQHJBxD4GMI/ASwQjsmUBwnIg");
	var mask_2_graphics_366 = new cjs.Graphics().p("AnbYoQBknVGSkGQGTkGHWBjQHMBiEFGEI+YTwQj5mLBhnNg");
	var mask_2_graphics_367 = new cjs.Graphics().p("AnXY+QBVnZGJkTQGKkTHYBUQHQBTERF7I9tUvQkGmDBSnPg");
	var mask_2_graphics_368 = new cjs.Graphics().p("AnRZUQBFncGBkfQF/kgHcBFQHRBDEeFyI9AVtQkTl7BDnRg");
	var mask_2_graphics_369 = new cjs.Graphics().p("AnKZqQA2ndF3ksQF2ksHdA0QHUA0EpFpI8RWpQkflxAznUg");
	var mask_2_graphics_370 = new cjs.Graphics().p("AnBaBQAmnfFtk4QFsk4HfAlQHVAkE1FfI7hXkQkrloAknVg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(355).to({graphics:mask_2_graphics_355,x:170,y:223.8}).wait(1).to({graphics:mask_2_graphics_356,x:169.6,y:225.7}).wait(1).to({graphics:mask_2_graphics_357,x:169.1,y:227.5}).wait(1).to({graphics:mask_2_graphics_358,x:168.6,y:229.4}).wait(1).to({graphics:mask_2_graphics_359,x:167.9,y:231.2}).wait(1).to({graphics:mask_2_graphics_360,x:167.3,y:233}).wait(1).to({graphics:mask_2_graphics_361,x:166.5,y:234.8}).wait(1).to({graphics:mask_2_graphics_362,x:165.8,y:236.5}).wait(1).to({graphics:mask_2_graphics_363,x:164.9,y:238.2}).wait(1).to({graphics:mask_2_graphics_364,x:164,y:239.9}).wait(1).to({graphics:mask_2_graphics_365,x:163.1,y:241.6}).wait(1).to({graphics:mask_2_graphics_366,x:162.1,y:243.2}).wait(1).to({graphics:mask_2_graphics_367,x:161,y:244.8}).wait(1).to({graphics:mask_2_graphics_368,x:159.9,y:246.4}).wait(1).to({graphics:mask_2_graphics_369,x:158.7,y:247.9}).wait(1).to({graphics:mask_2_graphics_370,x:157.5,y:249.4}).wait(281));

	// 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(20,1,1).p("AhUhZQgmDDC/gSQALgBAMgC");
	this.shape_3.setTransform(183.5,441.7);
	this.shape_3._off = true;

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(355).to({_off:false},0).wait(296));

	// Layer 15
	this.instance_3 = new lib.ar2("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(269.4,67,1,1,4.5,0,0,0.8,-0.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(159).to({_off:false},0).wait(492));

	// Layer 7 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_174 = new cjs.Graphics().p("ASzFhIA7h7IJTEfIg7B6g");
	var mask_3_graphics_175 = new cjs.Graphics().p("AlKhHIBEiOIJSEdIhFCOg");
	var mask_3_graphics_176 = new cjs.Graphics().p("AlPg9IBOiiIJREdIhOCig");
	var mask_3_graphics_177 = new cjs.Graphics().p("AlUg0IBYi1IJREeIhYC1g");
	var mask_3_graphics_178 = new cjs.Graphics().p("AlYgqIBgjJIJSEeIhhDIg");
	var mask_3_graphics_179 = new cjs.Graphics().p("AldggIBqjcIJREdIhqDcg");
	var mask_3_graphics_180 = new cjs.Graphics().p("AligXIB0jvIJREdIh0Dwg");
	var mask_3_graphics_181 = new cjs.Graphics().p("AlngNIB9kDIJSEdIh9EEg");
	var mask_3_graphics_182 = new cjs.Graphics().p("AlrgDICGkXIJSEeIiHEXg");
	var mask_3_graphics_183 = new cjs.Graphics().p("AlwAGICQkqIJREfIiQEpg");
	var mask_3_graphics_184 = new cjs.Graphics().p("Al1AQICZk9IJSEeIiZE9g");
	var mask_3_graphics_185 = new cjs.Graphics().p("Al6AZICjlQIJSEeIijFRg");
	var mask_3_graphics_186 = new cjs.Graphics().p("Al+AjICslkIJREfIisFkg");
	var mask_3_graphics_187 = new cjs.Graphics().p("AmDAtIC2l4IJREfIi1F4g");
	var mask_3_graphics_188 = new cjs.Graphics().p("AmIA3IC/mLIJSEeIi/GLg");
	var mask_3_graphics_189 = new cjs.Graphics().p("AmNBBIDJmfIJSEeIjJGfg");
	var mask_3_graphics_190 = new cjs.Graphics().p("AmRBKIDSmyIJREfIjRGyg");
	var mask_3_graphics_191 = new cjs.Graphics().p("AmWBUIDbnGIJSEfIjbHFg");
	var mask_3_graphics_192 = new cjs.Graphics().p("AmbBeIDlnZIJSEeIjlHZg");
	var mask_3_graphics_193 = new cjs.Graphics().p("AmfBoIDuntIJREeIjuHtg");
	var mask_3_graphics_194 = new cjs.Graphics().p("AmkByID4oBIJREeIj3IBg");
	var mask_3_graphics_195 = new cjs.Graphics().p("AmpB7IEBoUIJSEfIkBIUg");
	var mask_3_graphics_196 = new cjs.Graphics().p("AmtCFIEKooIJSEfIkLIng");
	var mask_3_graphics_197 = new cjs.Graphics().p("AmyCPIEUo7IJREeIkUI7g");
	var mask_3_graphics_198 = new cjs.Graphics().p("Am3CYIEdpOIJSEeIkdJPg");
	var mask_3_graphics_199 = new cjs.Graphics().p("Am7CiIEmpiIJSEfIknJig");
	var mask_3_graphics_200 = new cjs.Graphics().p("AnACsIEwp2IJREfIkwJ1g");
	var mask_3_graphics_201 = new cjs.Graphics().p("AnFC2IE6qJIJREeIk6KJg");
	var mask_3_graphics_202 = new cjs.Graphics().p("AnKC/IFDqcIJSEeIlDKdg");
	var mask_3_graphics_203 = new cjs.Graphics().p("AnODJIFMqwIJREfIlMKwg");
	var mask_3_graphics_204 = new cjs.Graphics().p("AnTDTIFWrEIJREfIlWLEg");
	var mask_3_graphics_205 = new cjs.Graphics().p("AnYDdIFfrYIJSEfIlfLYg");
	var mask_3_graphics_206 = new cjs.Graphics().p("AndDnIFprrIJSEeIlpLrg");
	var mask_3_graphics_207 = new cjs.Graphics().p("AnhDxIFyr/IJREeIlyL/g");
	var mask_3_graphics_208 = new cjs.Graphics().p("AnmD6IF8sSIJREfIl7MSg");
	var mask_3_graphics_209 = new cjs.Graphics().p("AnrEEIGFsmIJSEfImFMmg");
	var mask_3_graphics_210 = new cjs.Graphics().p("AnvEOIGOs5IJREeImOM5g");
	var mask_3_graphics_211 = new cjs.Graphics().p("An0EYIGYtNIJREeImXNNg");
	var mask_3_graphics_212 = new cjs.Graphics().p("An5EhIGhtgIJSEfImhNgg");
	var mask_3_graphics_213 = new cjs.Graphics().p("An+ErIGrt0IJSEfImrNzg");
	var mask_3_graphics_214 = new cjs.Graphics().p("AoCE1IG0uHIJREeIm0OHg");
	var mask_3_graphics_215 = new cjs.Graphics().p("AoHE/IG+ubIJREeIm9Obg");
	var mask_3_graphics_216 = new cjs.Graphics().p("AoMFIIHHuuIJSEeInHOvg");
	var mask_3_graphics_217 = new cjs.Graphics().p("AoQFSIHQvCIJREfInQPCg");
	var mask_3_graphics_218 = new cjs.Graphics().p("AoVFcIHavWIJREfInaPVg");
	var mask_3_graphics_219 = new cjs.Graphics().p("AoaFmIHjvpIJSEeInjPpg");
	var mask_3_graphics_220 = new cjs.Graphics().p("AoeFvIHsv8IJSEeIntP9g");
	var mask_3_graphics_221 = new cjs.Graphics().p("AojF5IH2wQIJREfIn2QQg");
	var mask_3_graphics_222 = new cjs.Graphics().p("AooGDIH/wkIJSEfIn/Qkg");
	var mask_3_graphics_223 = new cjs.Graphics().p("AosGNIIIw3IJSEeIoJQ3g");
	var mask_3_graphics_224 = new cjs.Graphics().p("AoxGXIISxLIJREeIoSRLg");
	var mask_3_graphics_225 = new cjs.Graphics().p("Ao2GgIIcxeIJREfIocReg");
	var mask_3_graphics_226 = new cjs.Graphics().p("Ao7GqIIlxyIJSEfIolRxg");
	var mask_3_graphics_227 = new cjs.Graphics().p("ApAG0IIvyGIJSEfIovSGg");
	var mask_3_graphics_228 = new cjs.Graphics().p("ApEG+II4yZIJREeIo4SZg");
	var mask_3_graphics_229 = new cjs.Graphics().p("ApJHIIJBytIJSEeIpBStg");
	var mask_3_graphics_230 = new cjs.Graphics().p("ApOHRIJLzAIJSEfIpLTAg");
	var mask_3_graphics_231 = new cjs.Graphics().p("ApSHbIJTzUIJSEfIpTTTg");
	var mask_3_graphics_232 = new cjs.Graphics().p("ApXHlIJdznIJSEeIpcTng");
	var mask_3_graphics_233 = new cjs.Graphics().p("ApcHuIJmz6IJTEeIpmT7g");
	var mask_3_graphics_234 = new cjs.Graphics().p("AphH4IJw0OIJTEfIpwUOg");
	var mask_3_graphics_235 = new cjs.Graphics().p("AplICIJ50iIJSEfIp4Uig");
	var mask_3_graphics_236 = new cjs.Graphics().p("ApqIMIKC01IJTEeIqCU1g");
	var mask_3_graphics_237 = new cjs.Graphics().p("ApvIWIKM1JIJTEeIqMVJg");
	var mask_3_graphics_238 = new cjs.Graphics().p("ApzIfIKV1cIJSEfIqVVcg");
	var mask_3_graphics_239 = new cjs.Graphics().p("Ap4IpIKf1wIJSEfIqfVwg");
	var mask_3_graphics_240 = new cjs.Graphics().p("Ap9IzIKo2EIJTEfIqoWEg");
	var mask_3_graphics_241 = new cjs.Graphics().p("AqBI9IKx2XIJSEeIqxWXg");
	var mask_3_graphics_242 = new cjs.Graphics().p("AqGJHIK72rIJSEeIq7Wrg");
	var mask_3_graphics_243 = new cjs.Graphics().p("AqLJQILE2+IJTEfIrEW+g");
	var mask_3_graphics_244 = new cjs.Graphics().p("AqPJaILN3SIJTEfIrOXSg");
	var mask_3_graphics_245 = new cjs.Graphics().p("AqUJkILX3lIJSEeIrXXlg");
	var mask_3_graphics_246 = new cjs.Graphics().p("AqZJuILh35IJSEeIrhX5g");
	var mask_3_graphics_247 = new cjs.Graphics().p("AqeJ3ILq4MIJTEfIrqYMg");
	var mask_3_graphics_248 = new cjs.Graphics().p("AqiKBILz4gIJSEfIrzYfg");
	var mask_3_graphics_249 = new cjs.Graphics().p("AqnKLIL94zIJSEeIr9Yzg");
	var mask_3_graphics_250 = new cjs.Graphics().p("AqsKUIMG5GIJTEeIsGZHg");
	var mask_3_graphics_251 = new cjs.Graphics().p("AqxKeIMQ5aIJTEfIsQZag");
	var mask_3_graphics_252 = new cjs.Graphics().p("Aq1KoIMZ5uIJSEfIsZZug");
	var mask_3_graphics_253 = new cjs.Graphics().p("Aq6KyIMj6CIJSEfIsiaBg");
	var mask_3_graphics_254 = new cjs.Graphics().p("Aq/K8IMs6VIJTEeIssaVg");
	var mask_3_graphics_255 = new cjs.Graphics().p("ArDLFIM16oIJSEeIs1apg");
	var mask_3_graphics_256 = new cjs.Graphics().p("ArILPIM/68IJSEfIs+a8g");
	var mask_3_graphics_257 = new cjs.Graphics().p("ArNLZINJ7QIJSEfItJbQg");
	var mask_3_graphics_258 = new cjs.Graphics().p("ArSLjINS7jIJTEeItSbjg");
	var mask_3_graphics_259 = new cjs.Graphics().p("ArXLtINc73IJSEeItbb3g");
	var mask_3_graphics_260 = new cjs.Graphics().p("ArbL2INl8KIJSEfItlcKg");
	var mask_3_graphics_261 = new cjs.Graphics().p("ArgMAINu8eIJTEfItucdg");
	var mask_3_graphics_262 = new cjs.Graphics().p("ArlMKIN48yIJSEfIt3cyg");
	var mask_3_graphics_263 = new cjs.Graphics().p("ArpMUIOB9FIJSEeIuBdFg");
	var mask_3_graphics_264 = new cjs.Graphics().p("AruMeIOL9ZIJSEeIuKdZg");
	var mask_3_graphics_265 = new cjs.Graphics().p("ArzMnIOU9sIJTEfIuUdsg");
	var mask_3_graphics_266 = new cjs.Graphics().p("Ar3MxIOd+AIJSEfIudd/g");
	var mask_3_graphics_267 = new cjs.Graphics().p("Ar8M7IOn+TIJSEeIumeTg");
	var mask_3_graphics_268 = new cjs.Graphics().p("AsBNEIOw+mIJTEeIuweng");
	var mask_3_graphics_269 = new cjs.Graphics().p("AsGNOIO6+6IJSEfIu5e6g");
	var mask_3_graphics_270 = new cjs.Graphics().p("AsKNYIPD/OIJSEfIvDfNg");
	var mask_3_graphics_271 = new cjs.Graphics().p("AsPNiIPN/hIJSEeIvNfhg");
	var mask_3_graphics_272 = new cjs.Graphics().p("AsUNrIPW/0IJTEeIvWf1g");
	var mask_3_graphics_273 = new cjs.Graphics().p("AsYN1MAPfggIIJSEfMgPfAgIg");
	var mask_3_graphics_274 = new cjs.Graphics().p("AsdN/MAPpggcIJSEfMgPpAgcg");
	var mask_3_graphics_275 = new cjs.Graphics().p("AsiOJMAPyggwIJTEfMgPyAgwg");
	var mask_3_graphics_276 = new cjs.Graphics().p("AsmOTMAP7ghDIJSEeMgP7AhDg");
	var mask_3_graphics_277 = new cjs.Graphics().p("AsrOdMAQFghXIJSEeMgQFAhXg");
	var mask_3_graphics_278 = new cjs.Graphics().p("AswOmMAQPghqIJSEfMgQPAhqg");
	var mask_3_graphics_279 = new cjs.Graphics().p("As0OwMAQXgh+IJSEfMgQXAh+g");
	var mask_3_graphics_280 = new cjs.Graphics().p("As5O6MAQhgiRIJSEeMgQhAiRg");
	var mask_3_graphics_281 = new cjs.Graphics().p("As+PEMAQrgilIJSEeMgQqAilg");
	var mask_3_graphics_282 = new cjs.Graphics().p("AtDPNMAQ0gi4IJTEfMgQ0Ai4g");
	var mask_3_graphics_283 = new cjs.Graphics().p("AtIPXMAQ+gjMIJSEfMgQ9AjLg");
	var mask_3_graphics_284 = new cjs.Graphics().p("AtMPhMARHgjfIJSEeMgRHAjfg");
	var mask_3_graphics_285 = new cjs.Graphics().p("AtRPqMARRgjyIJSEeMgRQAjzg");
	var mask_3_graphics_286 = new cjs.Graphics().p("AtWP0MARagkGIJSEfMgRZAkGg");
	var mask_3_graphics_287 = new cjs.Graphics().p("AtaP+MARjgkaIJSEfMgRjAkag");
	var mask_3_graphics_288 = new cjs.Graphics().p("AtfQIMARtgkuIJSEfMgRsAktg");
	var mask_3_graphics_289 = new cjs.Graphics().p("AtkQSMAR2glBIJTEeMgR2AlBg");
	var mask_3_graphics_290 = new cjs.Graphics().p("AtpQbMASAglUIJSEeMgR/AlVg");
	var mask_3_graphics_291 = new cjs.Graphics().p("AttQlMASJgloIJSEfMgSJAlog");
	var mask_3_graphics_292 = new cjs.Graphics().p("AtyQvMASSgl8IJTEfMgSSAl8g");
	var mask_3_graphics_293 = new cjs.Graphics().p("At2Q5MASbgmPIJSEeMgSbAmPg");
	var mask_3_graphics_294 = new cjs.Graphics().p("At7RDMASlgmjIJSEeMgSlAmjg");
	var mask_3_graphics_295 = new cjs.Graphics().p("AuARMMASvgm2IJSEfMgSvAm2g");
	var mask_3_graphics_296 = new cjs.Graphics().p("AuFRWMAS4gnKIJTEfMgS4AnJg");
	var mask_3_graphics_297 = new cjs.Graphics().p("AuJRgMATBgndIJSEeMgTBAndg");
	var mask_3_graphics_298 = new cjs.Graphics().p("AuORpMATLgnwIJSEeMgTLAnxg");
	var mask_3_graphics_299 = new cjs.Graphics().p("AuTR0MATUgoFIJTEeMgTUAoFg");
	var mask_3_graphics_300 = new cjs.Graphics().p("AuXR9MATdgoYIJSEfMgTdAoYg");
	var mask_3_graphics_301 = new cjs.Graphics().p("AucSHMATngosIJSEfMgTnAorg");
	var mask_3_graphics_302 = new cjs.Graphics().p("AuhSRMATxgo/IJSEeMgTwAo/g");
	var mask_3_graphics_303 = new cjs.Graphics().p("AumSaMAT6gpSIJTEeMgT6ApTg");
	var mask_3_graphics_304 = new cjs.Graphics().p("AuqSkMAUDgpmIJSEfMgUDApmg");
	var mask_3_graphics_305 = new cjs.Graphics().p("AuvSuMAUNgp6IJSEfMgUMAp6g");
	var mask_3_graphics_306 = new cjs.Graphics().p("Au0S4MAUWgqNIJTEeMgUWAqNg");
	var mask_3_graphics_307 = new cjs.Graphics().p("Au5TCMAUggqhIJSEeMgUfAqhg");
	var mask_3_graphics_308 = new cjs.Graphics().p("Au9TLMAUpgq0IJSEfMgUpAq0g");
	var mask_3_graphics_309 = new cjs.Graphics().p("AvCTVMAUzgrIIJSEfMgUyArIg");
	var mask_3_graphics_310 = new cjs.Graphics().p("AvHTfMAU8grcIJTEfMgU8Arcg");
	var mask_3_graphics_311 = new cjs.Graphics().p("AvLTpMAVFgrvIJSEeMgVFArvg");
	var mask_3_graphics_312 = new cjs.Graphics().p("AvQTzMAVPgsDIJSEeMgVOAsDg");
	var mask_3_graphics_313 = new cjs.Graphics().p("AvVT8MAVYgsWIJTEfMgVYAsWg");
	var mask_3_graphics_314 = new cjs.Graphics().p("AvZUGMAVhgsqIJSEfMgVhAsqg");
	var mask_3_graphics_315 = new cjs.Graphics().p("AveUQMAVrgs9IJSEeMgVrAs9g");
	var mask_3_graphics_316 = new cjs.Graphics().p("AvjUaMAV1gtRIJSEeMgV1AtRg");
	var mask_3_graphics_317 = new cjs.Graphics().p("AvnUjMAV9gtkIJSEfMgV9Atkg");
	var mask_3_graphics_318 = new cjs.Graphics().p("AvsUtMAWHgt4IJSEfMgWHAt3g");
	var mask_3_graphics_319 = new cjs.Graphics().p("AvxU3MAWRguLIJSEeMgWRAuLg");
	var mask_3_graphics_320 = new cjs.Graphics().p("Av2VAMAWagueIJTEeMgWaAufg");
	var mask_3_graphics_321 = new cjs.Graphics().p("Av6VKMAWjguyIJSEeMgWjAuzg");
	var mask_3_graphics_322 = new cjs.Graphics().p("Av/VUMAWtgvGIJSEfMgWtAvGg");
	var mask_3_graphics_323 = new cjs.Graphics().p("AwEVeMAW3gvaIJSEfMgW3AvZg");
	var mask_3_graphics_324 = new cjs.Graphics().p("AwJVoMAXAgvtIJSEeMgW/Avtg");
	var mask_3_graphics_325 = new cjs.Graphics().p("AwNVxMAXJgwAIJSEeMgXJAwBg");
	var mask_3_graphics_326 = new cjs.Graphics().p("AwSV7MAXTgwUIJSEfMgXSAwUg");
	var mask_3_graphics_327 = new cjs.Graphics().p("AwXWFMAXcgwoIJTEfMgXcAwog");
	var mask_3_graphics_328 = new cjs.Graphics().p("AwcWPMAXmgw7IJSEeMgXlAw7g");
	var mask_3_graphics_329 = new cjs.Graphics().p("AwgWZMAXvgxPIJSEeMgXvAxPg");
	var mask_3_graphics_330 = new cjs.Graphics().p("AwlWiMAX4gxiIJTEfMgX4Axig");
	var mask_3_graphics_331 = new cjs.Graphics().p("AwqWsMAYCgx2IJSEfMgYBAx1g");
	var mask_3_graphics_332 = new cjs.Graphics().p("AwuW2MAYLgyJIJSEeMgYLAyJg");
	var mask_3_graphics_333 = new cjs.Graphics().p("AwzXAMAYVgydIJSEeMgYUAydg");
	var mask_3_graphics_334 = new cjs.Graphics().p("Aw4XKMAYegyxIJTEeMgYeAyxg");
	var mask_3_graphics_335 = new cjs.Graphics().p("Aw8XTMAYngzEIJSEfMgYnAzEg");
	var mask_3_graphics_336 = new cjs.Graphics().p("AxBXdMAYxgzYIJSEfMgYxAzXg");
	var mask_3_graphics_337 = new cjs.Graphics().p("AxGXnMAY6gzrIJTEeMgY6Azrg");
	var mask_3_graphics_338 = new cjs.Graphics().p("AxKXwMAZDgz+IJSEeMgZDAz/g");
	var mask_3_graphics_339 = new cjs.Graphics().p("AlfetMAZNg0SIJTEfMgZOA0Sg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(174).to({graphics:mask_3_graphics_174,x:185.7,y:63.9}).wait(1).to({graphics:mask_3_graphics_175,x:338.2,y:108.4}).wait(1).to({graphics:mask_3_graphics_176,x:337.7,y:109.4}).wait(1).to({graphics:mask_3_graphics_177,x:337.2,y:110.3}).wait(1).to({graphics:mask_3_graphics_178,x:336.8,y:111.3}).wait(1).to({graphics:mask_3_graphics_179,x:336.3,y:112.3}).wait(1).to({graphics:mask_3_graphics_180,x:335.8,y:113.3}).wait(1).to({graphics:mask_3_graphics_181,x:335.3,y:114.3}).wait(1).to({graphics:mask_3_graphics_182,x:334.9,y:115.2}).wait(1).to({graphics:mask_3_graphics_183,x:334.4,y:116.2}).wait(1).to({graphics:mask_3_graphics_184,x:333.9,y:117.2}).wait(1).to({graphics:mask_3_graphics_185,x:333.5,y:118.2}).wait(1).to({graphics:mask_3_graphics_186,x:333,y:119.1}).wait(1).to({graphics:mask_3_graphics_187,x:332.5,y:120.1}).wait(1).to({graphics:mask_3_graphics_188,x:332,y:121.1}).wait(1).to({graphics:mask_3_graphics_189,x:331.6,y:122.1}).wait(1).to({graphics:mask_3_graphics_190,x:331.1,y:123}).wait(1).to({graphics:mask_3_graphics_191,x:330.6,y:124}).wait(1).to({graphics:mask_3_graphics_192,x:330.2,y:125}).wait(1).to({graphics:mask_3_graphics_193,x:329.7,y:126}).wait(1).to({graphics:mask_3_graphics_194,x:329.2,y:127}).wait(1).to({graphics:mask_3_graphics_195,x:328.7,y:127.9}).wait(1).to({graphics:mask_3_graphics_196,x:328.3,y:128.9}).wait(1).to({graphics:mask_3_graphics_197,x:327.8,y:129.9}).wait(1).to({graphics:mask_3_graphics_198,x:327.3,y:130.9}).wait(1).to({graphics:mask_3_graphics_199,x:326.9,y:131.8}).wait(1).to({graphics:mask_3_graphics_200,x:326.4,y:132.8}).wait(1).to({graphics:mask_3_graphics_201,x:325.9,y:133.8}).wait(1).to({graphics:mask_3_graphics_202,x:325.4,y:134.8}).wait(1).to({graphics:mask_3_graphics_203,x:325,y:135.7}).wait(1).to({graphics:mask_3_graphics_204,x:324.5,y:136.7}).wait(1).to({graphics:mask_3_graphics_205,x:324,y:137.7}).wait(1).to({graphics:mask_3_graphics_206,x:323.6,y:138.7}).wait(1).to({graphics:mask_3_graphics_207,x:323.1,y:139.7}).wait(1).to({graphics:mask_3_graphics_208,x:322.6,y:140.6}).wait(1).to({graphics:mask_3_graphics_209,x:322.1,y:141.6}).wait(1).to({graphics:mask_3_graphics_210,x:321.7,y:142.6}).wait(1).to({graphics:mask_3_graphics_211,x:321.2,y:143.6}).wait(1).to({graphics:mask_3_graphics_212,x:320.7,y:144.5}).wait(1).to({graphics:mask_3_graphics_213,x:320.3,y:145.5}).wait(1).to({graphics:mask_3_graphics_214,x:319.8,y:146.5}).wait(1).to({graphics:mask_3_graphics_215,x:319.3,y:147.5}).wait(1).to({graphics:mask_3_graphics_216,x:318.9,y:148.5}).wait(1).to({graphics:mask_3_graphics_217,x:318.4,y:149.4}).wait(1).to({graphics:mask_3_graphics_218,x:317.9,y:150.4}).wait(1).to({graphics:mask_3_graphics_219,x:317.4,y:151.4}).wait(1).to({graphics:mask_3_graphics_220,x:317,y:152.4}).wait(1).to({graphics:mask_3_graphics_221,x:316.5,y:153.3}).wait(1).to({graphics:mask_3_graphics_222,x:316,y:154.3}).wait(1).to({graphics:mask_3_graphics_223,x:315.6,y:155.3}).wait(1).to({graphics:mask_3_graphics_224,x:315.1,y:156.3}).wait(1).to({graphics:mask_3_graphics_225,x:314.6,y:157.2}).wait(1).to({graphics:mask_3_graphics_226,x:314.1,y:158.2}).wait(1).to({graphics:mask_3_graphics_227,x:313.7,y:159.2}).wait(1).to({graphics:mask_3_graphics_228,x:313.2,y:160.2}).wait(1).to({graphics:mask_3_graphics_229,x:312.7,y:161.2}).wait(1).to({graphics:mask_3_graphics_230,x:312.3,y:162.1}).wait(1).to({graphics:mask_3_graphics_231,x:311.8,y:163.1}).wait(1).to({graphics:mask_3_graphics_232,x:311.3,y:164.1}).wait(1).to({graphics:mask_3_graphics_233,x:310.8,y:165.1}).wait(1).to({graphics:mask_3_graphics_234,x:310.4,y:166}).wait(1).to({graphics:mask_3_graphics_235,x:309.9,y:167}).wait(1).to({graphics:mask_3_graphics_236,x:309.4,y:168}).wait(1).to({graphics:mask_3_graphics_237,x:309,y:169}).wait(1).to({graphics:mask_3_graphics_238,x:308.5,y:169.9}).wait(1).to({graphics:mask_3_graphics_239,x:308,y:170.9}).wait(1).to({graphics:mask_3_graphics_240,x:307.5,y:171.9}).wait(1).to({graphics:mask_3_graphics_241,x:307.1,y:172.9}).wait(1).to({graphics:mask_3_graphics_242,x:306.6,y:173.9}).wait(1).to({graphics:mask_3_graphics_243,x:306.1,y:174.8}).wait(1).to({graphics:mask_3_graphics_244,x:305.7,y:175.8}).wait(1).to({graphics:mask_3_graphics_245,x:305.2,y:176.8}).wait(1).to({graphics:mask_3_graphics_246,x:304.7,y:177.8}).wait(1).to({graphics:mask_3_graphics_247,x:304.2,y:178.7}).wait(1).to({graphics:mask_3_graphics_248,x:303.8,y:179.7}).wait(1).to({graphics:mask_3_graphics_249,x:303.3,y:180.7}).wait(1).to({graphics:mask_3_graphics_250,x:302.8,y:181.7}).wait(1).to({graphics:mask_3_graphics_251,x:302.4,y:182.6}).wait(1).to({graphics:mask_3_graphics_252,x:301.9,y:183.6}).wait(1).to({graphics:mask_3_graphics_253,x:301.4,y:184.6}).wait(1).to({graphics:mask_3_graphics_254,x:301,y:185.6}).wait(1).to({graphics:mask_3_graphics_255,x:300.5,y:186.6}).wait(1).to({graphics:mask_3_graphics_256,x:300,y:187.5}).wait(1).to({graphics:mask_3_graphics_257,x:299.6,y:188.5}).wait(1).to({graphics:mask_3_graphics_258,x:299.1,y:189.5}).wait(1).to({graphics:mask_3_graphics_259,x:298.6,y:190.5}).wait(1).to({graphics:mask_3_graphics_260,x:298.2,y:191.4}).wait(1).to({graphics:mask_3_graphics_261,x:297.7,y:192.4}).wait(1).to({graphics:mask_3_graphics_262,x:297.2,y:193.4}).wait(1).to({graphics:mask_3_graphics_263,x:296.7,y:194.4}).wait(1).to({graphics:mask_3_graphics_264,x:296.3,y:195.4}).wait(1).to({graphics:mask_3_graphics_265,x:295.8,y:196.3}).wait(1).to({graphics:mask_3_graphics_266,x:295.3,y:197.3}).wait(1).to({graphics:mask_3_graphics_267,x:294.9,y:198.3}).wait(1).to({graphics:mask_3_graphics_268,x:294.4,y:199.3}).wait(1).to({graphics:mask_3_graphics_269,x:293.9,y:200.2}).wait(1).to({graphics:mask_3_graphics_270,x:293.4,y:201.2}).wait(1).to({graphics:mask_3_graphics_271,x:293,y:202.2}).wait(1).to({graphics:mask_3_graphics_272,x:292.5,y:203.2}).wait(1).to({graphics:mask_3_graphics_273,x:292,y:204.1}).wait(1).to({graphics:mask_3_graphics_274,x:291.6,y:205.1}).wait(1).to({graphics:mask_3_graphics_275,x:291.1,y:206.1}).wait(1).to({graphics:mask_3_graphics_276,x:290.6,y:207.1}).wait(1).to({graphics:mask_3_graphics_277,x:290.1,y:208.1}).wait(1).to({graphics:mask_3_graphics_278,x:289.7,y:209}).wait(1).to({graphics:mask_3_graphics_279,x:289.2,y:210}).wait(1).to({graphics:mask_3_graphics_280,x:288.7,y:211}).wait(1).to({graphics:mask_3_graphics_281,x:288.3,y:212}).wait(1).to({graphics:mask_3_graphics_282,x:287.8,y:212.9}).wait(1).to({graphics:mask_3_graphics_283,x:287.3,y:213.9}).wait(1).to({graphics:mask_3_graphics_284,x:286.8,y:214.9}).wait(1).to({graphics:mask_3_graphics_285,x:286.4,y:215.9}).wait(1).to({graphics:mask_3_graphics_286,x:285.9,y:216.8}).wait(1).to({graphics:mask_3_graphics_287,x:285.4,y:217.8}).wait(1).to({graphics:mask_3_graphics_288,x:285,y:218.8}).wait(1).to({graphics:mask_3_graphics_289,x:284.5,y:219.8}).wait(1).to({graphics:mask_3_graphics_290,x:284,y:220.8}).wait(1).to({graphics:mask_3_graphics_291,x:283.5,y:221.7}).wait(1).to({graphics:mask_3_graphics_292,x:283.1,y:222.7}).wait(1).to({graphics:mask_3_graphics_293,x:282.6,y:223.7}).wait(1).to({graphics:mask_3_graphics_294,x:282.1,y:224.7}).wait(1).to({graphics:mask_3_graphics_295,x:281.7,y:225.6}).wait(1).to({graphics:mask_3_graphics_296,x:281.2,y:226.6}).wait(1).to({graphics:mask_3_graphics_297,x:280.7,y:227.6}).wait(1).to({graphics:mask_3_graphics_298,x:280.3,y:228.6}).wait(1).to({graphics:mask_3_graphics_299,x:279.8,y:229.6}).wait(1).to({graphics:mask_3_graphics_300,x:279.3,y:230.5}).wait(1).to({graphics:mask_3_graphics_301,x:278.8,y:231.5}).wait(1).to({graphics:mask_3_graphics_302,x:278.4,y:232.5}).wait(1).to({graphics:mask_3_graphics_303,x:277.9,y:233.5}).wait(1).to({graphics:mask_3_graphics_304,x:277.4,y:234.4}).wait(1).to({graphics:mask_3_graphics_305,x:277,y:235.4}).wait(1).to({graphics:mask_3_graphics_306,x:276.5,y:236.4}).wait(1).to({graphics:mask_3_graphics_307,x:276,y:237.4}).wait(1).to({graphics:mask_3_graphics_308,x:275.5,y:238.3}).wait(1).to({graphics:mask_3_graphics_309,x:275.1,y:239.3}).wait(1).to({graphics:mask_3_graphics_310,x:274.6,y:240.3}).wait(1).to({graphics:mask_3_graphics_311,x:274.1,y:241.3}).wait(1).to({graphics:mask_3_graphics_312,x:273.7,y:242.3}).wait(1).to({graphics:mask_3_graphics_313,x:273.2,y:243.2}).wait(1).to({graphics:mask_3_graphics_314,x:272.7,y:244.2}).wait(1).to({graphics:mask_3_graphics_315,x:272.2,y:245.2}).wait(1).to({graphics:mask_3_graphics_316,x:271.8,y:246.2}).wait(1).to({graphics:mask_3_graphics_317,x:271.3,y:247.1}).wait(1).to({graphics:mask_3_graphics_318,x:270.8,y:248.1}).wait(1).to({graphics:mask_3_graphics_319,x:270.4,y:249.1}).wait(1).to({graphics:mask_3_graphics_320,x:269.9,y:250.1}).wait(1).to({graphics:mask_3_graphics_321,x:269.4,y:251.1}).wait(1).to({graphics:mask_3_graphics_322,x:268.9,y:252}).wait(1).to({graphics:mask_3_graphics_323,x:268.5,y:253}).wait(1).to({graphics:mask_3_graphics_324,x:268,y:254}).wait(1).to({graphics:mask_3_graphics_325,x:267.5,y:255}).wait(1).to({graphics:mask_3_graphics_326,x:267.1,y:255.9}).wait(1).to({graphics:mask_3_graphics_327,x:266.6,y:256.9}).wait(1).to({graphics:mask_3_graphics_328,x:266.1,y:257.9}).wait(1).to({graphics:mask_3_graphics_329,x:265.6,y:258.9}).wait(1).to({graphics:mask_3_graphics_330,x:265.2,y:259.8}).wait(1).to({graphics:mask_3_graphics_331,x:264.7,y:260.8}).wait(1).to({graphics:mask_3_graphics_332,x:264.2,y:261.8}).wait(1).to({graphics:mask_3_graphics_333,x:263.8,y:262.8}).wait(1).to({graphics:mask_3_graphics_334,x:263.3,y:263.8}).wait(1).to({graphics:mask_3_graphics_335,x:262.8,y:264.7}).wait(1).to({graphics:mask_3_graphics_336,x:262.4,y:265.7}).wait(1).to({graphics:mask_3_graphics_337,x:261.9,y:266.7}).wait(1).to({graphics:mask_3_graphics_338,x:261.4,y:267.7}).wait(1).to({graphics:mask_3_graphics_339,x:185.7,y:225.2}).wait(312));

	// Layer 6
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(20,1,1).p("AO15hQiehvimE4QinE4i8FtQi8FtgkBQQlfJvkAIBQj/ICgvBiQgvBigmB/");
	this.shape_4.setTransform(270.1,266.4);
	this.shape_4._off = true;

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(174).to({_off:false},0).wait(477));

	// Layer 5 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_159 = new cjs.Graphics().p("AMEqbQGFkEHPBTQHYBWESGLQESGKhWHZQhUHPl9EQg");
	var mask_4_graphics_160 = new cjs.Graphics().p("ALpp9QF9kQHRBGQHbBIEdGDQEdGChIHbQhHHRl0Ebg");
	var mask_4_graphics_161 = new cjs.Graphics().p("ALOpfQF1kaHTA4QHdA7EoF6QEoF7g6HbQg5HUlsElg");
	var mask_4_graphics_162 = new cjs.Graphics().p("AK0o/QFsklHVArQHeAtEzFxQEzFygsHdQgsHVljEwg");
	var mask_4_graphics_163 = new cjs.Graphics().p("AKboeQFjkwHWAeQHfAeE+FpQE9FpgeHeQgeHWlaE6g");
	var mask_4_graphics_164 = new cjs.Graphics().p("AKCn8QFak6HXAQQHgARFIFfQFHFfgQHfQgQHXlRFEg");
	var mask_4_graphics_165 = new cjs.Graphics().p("AJqnZQFRlEHWACQHhADFSFWQFRFWgCHfQgDHWlHFOg");
	var mask_4_graphics_166 = new cjs.Graphics().p("AJSm1QFIlNHWgMQHggLFcFMQFcFMALHeQALHXk+FXg");
	var mask_4_graphics_167 = new cjs.Graphics().p("AI7mQQE+lXHVgZQHggZFlFCQFmFBAZHfQAZHWk0Fgg");
	var mask_4_graphics_168 = new cjs.Graphics().p("AIklpQE0lhHVgmQHfgnFuE3QFvE3AnHdQAmHVkpFpg");
	var mask_4_graphics_169 = new cjs.Graphics().p("AIPlCQEplpHUg1QHdg0F3EsQF4EsA1HcQA0HUkfFyg");
	var mask_4_graphics_170 = new cjs.Graphics().p("AH6kaQEflyHRhCQHchCGAEhQGAEhBDHbQBBHSkUF5g");
	var mask_4_graphics_171 = new cjs.Graphics().p("AHmjyQEUl5HPhPQHahRGIEWQGIEWBRHYQBPHQkJGCg");
	var mask_4_graphics_172 = new cjs.Graphics().p("AHSjIQEJmBHNhdQHXheGQEKQGQELBfHWQBcHNj+GJg");
	var mask_4_graphics_173 = new cjs.Graphics().p("AHAidQD9mJHLhqQHUhsGXD/QGYD+BsHTQBpHLjyGQg");
	var mask_4_graphics_174 = new cjs.Graphics().p("AGuhyQDymQHHh3QHRh6GeDzQGfDzB6HPQB3HIjnGXg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(159).to({graphics:mask_4_graphics_159,x:257.8,y:123.9}).wait(1).to({graphics:mask_4_graphics_160,x:257.8,y:122.9}).wait(1).to({graphics:mask_4_graphics_161,x:257.8,y:121.9}).wait(1).to({graphics:mask_4_graphics_162,x:257.8,y:120.9}).wait(1).to({graphics:mask_4_graphics_163,x:257.9,y:119.8}).wait(1).to({graphics:mask_4_graphics_164,x:257.9,y:118.7}).wait(1).to({graphics:mask_4_graphics_165,x:257.9,y:117.5}).wait(1).to({graphics:mask_4_graphics_166,x:257.9,y:116.3}).wait(1).to({graphics:mask_4_graphics_167,x:258,y:115.1}).wait(1).to({graphics:mask_4_graphics_168,x:258,y:113.8}).wait(1).to({graphics:mask_4_graphics_169,x:258.1,y:112.6}).wait(1).to({graphics:mask_4_graphics_170,x:258.1,y:111.2}).wait(1).to({graphics:mask_4_graphics_171,x:258.2,y:109.9}).wait(1).to({graphics:mask_4_graphics_172,x:258.2,y:108.5}).wait(1).to({graphics:mask_4_graphics_173,x:258.3,y:107.1}).wait(1).to({graphics:mask_4_graphics_174,x:258.3,y:105.7}).wait(477));

	// Layer 4
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(20,1,1).p("AO566QiehuinE4QimE4i8FtQi8FtgkBQQlgJvj/IBQkAIBgvBiQgvBjghBfQghBgA8BJQA9BKCEg/");
	this.shape_5.setTransform(269.7,275.2);
	this.shape_5._off = true;

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(159).to({_off:false},0).wait(492));

	// Layer 14
	this.instance_4 = new lib.ar1("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(215.2,186.4,1,1,0,0,0,-0.8,0.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).wait(642));

	// Layer 3 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_128 = new cjs.Graphics().p("AAxN5QlOlLgJnUMAkPgALQgFHUlLFOQlSFVnhADIgGAAQncAAlTlQg");
	var mask_5_graphics_129 = new cjs.Graphics().p("ABFONQlVlCgVnUMAkNgBFQAHHUlCFWQlKFengAOIgoABQnHAAlPk8g");
	var mask_5_graphics_130 = new cjs.Graphics().p("ABbOhQlek6ghnTMAkLgB/QATHTk5FfQlBFlngAbQglACgkAAQmyAAlKkog");
	var mask_5_graphics_131 = new cjs.Graphics().p("ABwO0QllkxgtnSMAkHgC5QAfHSkxFnQk3FtnfAnQg1AEgzAAQmfAAlGkVg");
	var mask_5_graphics_132 = new cjs.Graphics().p("ACGPHQltkog4nRMAkCgDzQAqHRknFuQkvF1neAzQhEAHhDAAQmMAAlAkCg");
	var mask_5_graphics_133 = new cjs.Graphics().p("ACdPZQl1kfhDnPMAj6gEtQA3HQkfF1QklF9ncA+QhUALhRAAQl6AAk6jwg");
	var mask_5_graphics_134 = new cjs.Graphics().p("AC0PqQl8kVhPnNMAjygFnQBCHOkVF8QkbGEnaBLQhkAQhfAAQlpAAkzjgg");
	var mask_5_graphics_135 = new cjs.Graphics().p("ADLP7QmCkMhbnLMAjpgGgQBNHMkLGDQkRGMnZBWQhyAVhtAAQlZAAksjPg");
	var mask_5_graphics_136 = new cjs.Graphics().p("ADjQLQmJkChmnIMAjdgHaQBZHKkBGKQkHGSnXBiQiAAbh7AAQlJAAkki/g");
	var mask_5_graphics_137 = new cjs.Graphics().p("AD7QaQmPj3hynGMAjRgITQBkHIj3GQQj9GZnUBuQiOAhiIAAQk5AAkdiwg");
	var mask_5_graphics_138 = new cjs.Graphics().p("AEUQpQmWjth9nDMAjDgJLQBwHFjtGWQjzGfnRB6QibApiWAAQkqAAkUiig");
	var mask_5_graphics_139 = new cjs.Graphics().p("AEtQ4QmbjkiJm/MAizgKEQB8HCjjGdQjoGknOCGQipAxijAAQkbAAkLiTg");
	var mask_5_graphics_140 = new cjs.Graphics().p("AFGRFQmgjYiUm8MAiigK8QCHG/jZGiQjdGqnKCRQi2A6iwAAQkNAAkCiGg");
	var mask_5_graphics_141 = new cjs.Graphics().p("AFgRTQmmjPifm3MAiQgL0QCSG8jOGnQjTGwnGCcQjCBDi+AAQj+AAj4h4g");
	var mask_5_graphics_142 = new cjs.Graphics().p("AF6RfQmrjDiqm0MAh8gMqQCdG3jDGsQjIG1nCCoQjOBNjLAAQjxAAjthsg");
	var mask_5_graphics_143 = new cjs.Graphics().p("AHHR/Qm5ikjImmMAg7gPFQC9GrijG5QioHCm1DIQjuBtjyAAQjKAAjNhMg");
	var mask_5_graphics_144 = new cjs.Graphics().p("AIWSaQnEiEjmmWIfwxbQDbGdiDHDQiGHNmmDnQkKCSkaAAQikAAiqgxg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(128).to({graphics:mask_5_graphics_128,x:202.5,y:122.5}).wait(1).to({graphics:mask_5_graphics_129,x:202.4,y:122.5}).wait(1).to({graphics:mask_5_graphics_130,x:202.4,y:122.5}).wait(1).to({graphics:mask_5_graphics_131,x:202.4,y:122.5}).wait(1).to({graphics:mask_5_graphics_132,x:202.4,y:122.5}).wait(1).to({graphics:mask_5_graphics_133,x:202.4,y:122.5}).wait(1).to({graphics:mask_5_graphics_134,x:202.4,y:122.6}).wait(1).to({graphics:mask_5_graphics_135,x:202.4,y:122.6}).wait(1).to({graphics:mask_5_graphics_136,x:202.4,y:122.6}).wait(1).to({graphics:mask_5_graphics_137,x:202.4,y:122.6}).wait(1).to({graphics:mask_5_graphics_138,x:202.4,y:122.7}).wait(1).to({graphics:mask_5_graphics_139,x:202.4,y:122.7}).wait(1).to({graphics:mask_5_graphics_140,x:202.4,y:122.7}).wait(1).to({graphics:mask_5_graphics_141,x:202.3,y:122.7}).wait(1).to({graphics:mask_5_graphics_142,x:202.3,y:122.7}).wait(1).to({graphics:mask_5_graphics_143,x:202.2,y:122.7}).wait(1).to({graphics:mask_5_graphics_144,x:202.1,y:122.7}).wait(507));

	// 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(20,1,1).p("Aq9NLIGXlvQIoneDWjoQDXjoAOiXQANiWhohL");
	this.shape_6.setTransform(304.2,187.7);
	this.shape_6._off = true;

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(128).to({_off:false},0).wait(523));

	// Layer 1 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_9 = new cjs.Graphics().p("ALIQxIB1h3IHeHWIh1B3g");
	var mask_6_graphics_10 = new cjs.Graphics().p("AkuioICAiDIHdHUIiACDg");
	var mask_6_graphics_11 = new cjs.Graphics().p("Ak0iiICMiPIHdHUIiMCPg");
	var mask_6_graphics_12 = new cjs.Graphics().p("Ak6icICYibIHdHUIiYCbg");
	var mask_6_graphics_13 = new cjs.Graphics().p("AlAiWICkinIHdHUIikCng");
	var mask_6_graphics_14 = new cjs.Graphics().p("AlGiRICwiyIHdHUIiwCzg");
	var mask_6_graphics_15 = new cjs.Graphics().p("AlMiLIC8i+IHdHUIi8C/g");
	var mask_6_graphics_16 = new cjs.Graphics().p("AlRiFIDHjKIHcHVIjGDKg");
	var mask_6_graphics_17 = new cjs.Graphics().p("AlXh/IDSjWIHdHUIjSDXg");
	var mask_6_graphics_18 = new cjs.Graphics().p("Aldh5IDejiIHdHUIjeDjg");
	var mask_6_graphics_19 = new cjs.Graphics().p("AljhzIDqjuIHdHVIjqDug");
	var mask_6_graphics_20 = new cjs.Graphics().p("AlphtID2j6IHdHUIj2D7g");
	var mask_6_graphics_21 = new cjs.Graphics().p("AlvhnIECkGIHdHUIkCEHg");
	var mask_6_graphics_22 = new cjs.Graphics().p("Al1hhIEOkSIHdHVIkOESg");
	var mask_6_graphics_23 = new cjs.Graphics().p("Al7hbIEakeIHdHVIkaEeg");
	var mask_6_graphics_24 = new cjs.Graphics().p("AmAhVIEkkqIHdHVIkkEqg");
	var mask_6_graphics_25 = new cjs.Graphics().p("AmGhPIExk2IHdHVIkxE2g");
	var mask_6_graphics_26 = new cjs.Graphics().p("AmMhJIE8lCIHdHVIk8FCg");
	var mask_6_graphics_27 = new cjs.Graphics().p("AmShDIFIlOIHdHVIlIFOg");
	var mask_6_graphics_28 = new cjs.Graphics().p("AmYg9IFUlaIHdHVIlUFag");
	var mask_6_graphics_29 = new cjs.Graphics().p("Ameg3IFglmIHdHVIlgFmg");
	var mask_6_graphics_30 = new cjs.Graphics().p("AmkgxIFslyIHdHVIlsFyg");
	var mask_6_graphics_31 = new cjs.Graphics().p("AmpgrIF2l+IHeHVIl3F+g");
	var mask_6_graphics_32 = new cjs.Graphics().p("AmvglIGDmJIHdHUImDGKg");
	var mask_6_graphics_33 = new cjs.Graphics().p("Am1gfIGOmVIHdHUImOGWg");
	var mask_6_graphics_34 = new cjs.Graphics().p("Am7gZIGamiIHdHVImaGig");
	var mask_6_graphics_35 = new cjs.Graphics().p("AnBgTIGmmtIHdHUImmGug");
	var mask_6_graphics_36 = new cjs.Graphics().p("AnHgNIGym5IHdHUImyG6g");
	var mask_6_graphics_37 = new cjs.Graphics().p("AnNgHIG+nGIHdHVIm+HGg");
	var mask_6_graphics_38 = new cjs.Graphics().p("AnTgBIHKnRIHdHUInKHSg");
	var mask_6_graphics_39 = new cjs.Graphics().p("AnYAEIHVncIHcHVInUHcg");
	var mask_6_graphics_40 = new cjs.Graphics().p("AneAKIHfnoIHeHVInfHog");
	var mask_6_graphics_41 = new cjs.Graphics().p("AnkAQIHrn0IHeHVInrH0g");
	var mask_6_graphics_42 = new cjs.Graphics().p("AnqAWIH3oAIHeHVIn3IAg");
	var mask_6_graphics_43 = new cjs.Graphics().p("AnwAcIIDoMIHeHVIoDIMg");
	var mask_6_graphics_44 = new cjs.Graphics().p("An2AiIIPoYIHeHVIoPIYg");
	var mask_6_graphics_45 = new cjs.Graphics().p("An8AoIIbokIHeHVIobIkg");
	var mask_6_graphics_46 = new cjs.Graphics().p("AoBAuIIlowIHeHVIolIwg");
	var mask_6_graphics_47 = new cjs.Graphics().p("AoHA0IIxo8IHeHVIoxI8g");
	var mask_6_graphics_48 = new cjs.Graphics().p("AoNA5II9pHIHeHVIo9JIg");
	var mask_6_graphics_49 = new cjs.Graphics().p("AoTA/IJJpTIHeHVIpJJUg");
	var mask_6_graphics_50 = new cjs.Graphics().p("AoZBFIJVpfIHeHWIpVJfg");
	var mask_6_graphics_51 = new cjs.Graphics().p("AofBLIJhprIHeHVIphJsg");
	var mask_6_graphics_52 = new cjs.Graphics().p("AolBRIJtp3IHeHVIptJ4g");
	var mask_6_graphics_53 = new cjs.Graphics().p("AorBXIJ5qDIHeHWIp5KDg");
	var mask_6_graphics_54 = new cjs.Graphics().p("AowBdIKDqPIHfHVIqEKQg");
	var mask_6_graphics_55 = new cjs.Graphics().p("Ao2BjIKQqbIHeHVIqQKcg");
	var mask_6_graphics_56 = new cjs.Graphics().p("Ao8BpIKbqnIHeHWIqbKng");
	var mask_6_graphics_57 = new cjs.Graphics().p("ApCBvIKnqzIHeHWIqnKzg");
	var mask_6_graphics_58 = new cjs.Graphics().p("ApIB1IKzq/IHeHWIqzK/g");
	var mask_6_graphics_59 = new cjs.Graphics().p("ApOB7IK/rLIHeHWIq/LLg");
	var mask_6_graphics_60 = new cjs.Graphics().p("ApUCBILLrXIHeHWIrLLXg");
	var mask_6_graphics_61 = new cjs.Graphics().p("ApZCHILWrjIHeHWIrWLjg");
	var mask_6_graphics_62 = new cjs.Graphics().p("ApfCNILirvIHdHWIrhLvg");
	var mask_6_graphics_63 = new cjs.Graphics().p("AplCTILtr7IHeHWIrtL7g");
	var mask_6_graphics_64 = new cjs.Graphics().p("AprCZIL5sHIHeHWIr5MHg");
	var mask_6_graphics_65 = new cjs.Graphics().p("ApxCfIMFsTIHeHWIsFMTg");
	var mask_6_graphics_66 = new cjs.Graphics().p("Ap3ClIMRseIHeHVIsRMfg");
	var mask_6_graphics_67 = new cjs.Graphics().p("Ap9CrIMdsrIHeHWIsdMrg");
	var mask_6_graphics_68 = new cjs.Graphics().p("AqDCxIMps3IHeHWIspM3g");
	var mask_6_graphics_69 = new cjs.Graphics().p("AqIC3IMztDIHeHWIszNDg");
	var mask_6_graphics_70 = new cjs.Graphics().p("AqOC9IM/tPIHeHWIs/NPg");
	var mask_6_graphics_71 = new cjs.Graphics().p("AqUDDINLtbIHeHWItLNbg");
	var mask_6_graphics_72 = new cjs.Graphics().p("AqaDJINXtnIHeHWItXNng");
	var mask_6_graphics_73 = new cjs.Graphics().p("AqgDPINjtzIHeHWItjNyg");
	var mask_6_graphics_74 = new cjs.Graphics().p("AqmDVINvt+IHeHVItvN+g");
	var mask_6_graphics_75 = new cjs.Graphics().p("AqsDbIN6uLIHeHWIt6OKg");
	var mask_6_graphics_76 = new cjs.Graphics().p("AqyDhIOHuXIHeHWIuHOWg");
	var mask_6_graphics_77 = new cjs.Graphics().p("Aq3DnIORuiIHeHVIuROig");
	var mask_6_graphics_78 = new cjs.Graphics().p("Aq9DtIOduvIHeHWIudOug");
	var mask_6_graphics_79 = new cjs.Graphics().p("ArDDzIOpu6IHeHVIupO6g");
	var mask_6_graphics_80 = new cjs.Graphics().p("ArJD5IO1vGIHeHVIu1PGg");
	var mask_6_graphics_81 = new cjs.Graphics().p("ArPD/IPBvTIHeHWIvBPSg");
	var mask_6_graphics_82 = new cjs.Graphics().p("ArVEFIPMveIHfHVIvNPeg");
	var mask_6_graphics_83 = new cjs.Graphics().p("ArbELIPZvqIHeHVIvZPqg");
	var mask_6_graphics_84 = new cjs.Graphics().p("ArgERIPjv2IHeHVIvjP2g");
	var mask_6_graphics_85 = new cjs.Graphics().p("ArmEXIPvwCIHeHVIvvQCg");
	var mask_6_graphics_86 = new cjs.Graphics().p("ArsEdIP7wOIHeHVIv7QOg");
	var mask_6_graphics_87 = new cjs.Graphics().p("AryEjIQHwaIHeHVIwHQag");
	var mask_6_graphics_88 = new cjs.Graphics().p("Ar4EpIQTwmIHeHVIwTQmg");
	var mask_6_graphics_89 = new cjs.Graphics().p("Ar+EvIQfwyIHeHVIwfQyg");
	var mask_6_graphics_90 = new cjs.Graphics().p("AsEE1IQrw+IHdHVIwqQ+g");
	var mask_6_graphics_91 = new cjs.Graphics().p("AsKE7IQ2xKIHeHWIw2RJg");
	var mask_6_graphics_92 = new cjs.Graphics().p("AsPFBIRBxWIHeHVIxBRWg");
	var mask_6_graphics_93 = new cjs.Graphics().p("AsVFHIRNxiIHeHVIxNRig");
	var mask_6_graphics_94 = new cjs.Graphics().p("AsbFNIRZxuIHeHWIxZRtg");
	var mask_6_graphics_95 = new cjs.Graphics().p("AshFTIRlx6IHeHVIxlR6g");
	var mask_6_graphics_96 = new cjs.Graphics().p("AsnFZIRxyGIHeHVIxxSGg");
	var mask_6_graphics_97 = new cjs.Graphics().p("AstFfIR8ySIHeHWIx8SRg");
	var mask_6_graphics_98 = new cjs.Graphics().p("AszFlISIyeIHeHVIyISeg");
	var mask_6_graphics_99 = new cjs.Graphics().p("As4FqISTypIHeHWIyTSpg");
	var mask_6_graphics_100 = new cjs.Graphics().p("As+FwISfy1IHeHWIyfS1g");
	var mask_6_graphics_101 = new cjs.Graphics().p("AtEF2ISrzBIHeHWIyrTBg");
	var mask_6_graphics_102 = new cjs.Graphics().p("AtKF8IS3zNIHeHWIy3TNg");
	var mask_6_graphics_103 = new cjs.Graphics().p("AtQGCITDzZIHeHWIzDTZg");
	var mask_6_graphics_104 = new cjs.Graphics().p("AtWGIITPzlIHeHWIzPTlg");
	var mask_6_graphics_105 = new cjs.Graphics().p("AtcGOITazxIHfHWIzbTxg");
	var mask_6_graphics_106 = new cjs.Graphics().p("AtiGUITnz9IHeHWIznT9g");
	var mask_6_graphics_107 = new cjs.Graphics().p("AtnGaITx0IIHeHVIzxUIg");
	var mask_6_graphics_108 = new cjs.Graphics().p("AttGgIT90UIHeHVIz9UUg");
	var mask_6_graphics_109 = new cjs.Graphics().p("AtzGmIUJ0hIHeHWI0JUgg");
	var mask_6_graphics_110 = new cjs.Graphics().p("At5GsIUV0sIHeHVI0VUsg");
	var mask_6_graphics_111 = new cjs.Graphics().p("At/GyIUh04IHeHVI0hU4g");
	var mask_6_graphics_112 = new cjs.Graphics().p("AuFG4IUt1FIHeHWI0tVEg");
	var mask_6_graphics_113 = new cjs.Graphics().p("AuLG+IU51QIHdHVI04VQg");
	var mask_6_graphics_114 = new cjs.Graphics().p("AuQHEIVD1cIHeHVI1DVcg");
	var mask_6_graphics_115 = new cjs.Graphics().p("AuWHKIVP1pIHeHWI1PVog");
	var mask_6_graphics_116 = new cjs.Graphics().p("AucHQIVb10IHeHVI1bV0g");
	var mask_6_graphics_117 = new cjs.Graphics().p("AuiHWIVn2AIHeHVI1nWAg");
	var mask_6_graphics_118 = new cjs.Graphics().p("AuoHcIVz2MIHeHVI1zWMg");
	var mask_6_graphics_119 = new cjs.Graphics().p("AuuHiIV/2YIHeHVI1/WYg");
	var mask_6_graphics_120 = new cjs.Graphics().p("Au0HoIWK2kIHeHVI2KWkg");
	var mask_6_graphics_121 = new cjs.Graphics().p("Au6HuIWW2wIHeHVI2WWwg");
	var mask_6_graphics_122 = new cjs.Graphics().p("Au/H0IWh28IHeHVI2hW8g");
	var mask_6_graphics_123 = new cjs.Graphics().p("AvFH6IWt3IIHeHVI2tXIg");
	var mask_6_graphics_124 = new cjs.Graphics().p("AvLIAIW53UIHeHWI25XTg");
	var mask_6_graphics_125 = new cjs.Graphics().p("AvRIGIXF3gIHeHWI3FXfg");
	var mask_6_graphics_126 = new cjs.Graphics().p("AvXIMIXR3sIHeHVI3RXsg");
	var mask_6_graphics_127 = new cjs.Graphics().p("AvdISIXd34IHeHVI3dX4g");
	var mask_6_graphics_128 = new cjs.Graphics().p("AAOQxIXp4DIHeHUI3pYFg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_6_graphics_9,x:130.7,y:154.3}).wait(1).to({graphics:mask_6_graphics_10,x:232.2,y:278.5}).wait(1).to({graphics:mask_6_graphics_11,x:232.8,y:277.9}).wait(1).to({graphics:mask_6_graphics_12,x:233.4,y:277.3}).wait(1).to({graphics:mask_6_graphics_13,x:234,y:276.7}).wait(1).to({graphics:mask_6_graphics_14,x:234.5,y:276.1}).wait(1).to({graphics:mask_6_graphics_15,x:235.1,y:275.5}).wait(1).to({graphics:mask_6_graphics_16,x:235.7,y:274.9}).wait(1).to({graphics:mask_6_graphics_17,x:236.3,y:274.3}).wait(1).to({graphics:mask_6_graphics_18,x:236.9,y:273.7}).wait(1).to({graphics:mask_6_graphics_19,x:237.5,y:273.1}).wait(1).to({graphics:mask_6_graphics_20,x:238.1,y:272.5}).wait(1).to({graphics:mask_6_graphics_21,x:238.7,y:271.9}).wait(1).to({graphics:mask_6_graphics_22,x:239.2,y:271.3}).wait(1).to({graphics:mask_6_graphics_23,x:239.8,y:270.7}).wait(1).to({graphics:mask_6_graphics_24,x:240.4,y:270.1}).wait(1).to({graphics:mask_6_graphics_25,x:241,y:269.5}).wait(1).to({graphics:mask_6_graphics_26,x:241.6,y:268.9}).wait(1).to({graphics:mask_6_graphics_27,x:242.2,y:268.3}).wait(1).to({graphics:mask_6_graphics_28,x:242.8,y:267.7}).wait(1).to({graphics:mask_6_graphics_29,x:243.3,y:267.1}).wait(1).to({graphics:mask_6_graphics_30,x:243.9,y:266.5}).wait(1).to({graphics:mask_6_graphics_31,x:244.5,y:266}).wait(1).to({graphics:mask_6_graphics_32,x:245.1,y:265.4}).wait(1).to({graphics:mask_6_graphics_33,x:245.7,y:264.8}).wait(1).to({graphics:mask_6_graphics_34,x:246.3,y:264.2}).wait(1).to({graphics:mask_6_graphics_35,x:246.9,y:263.6}).wait(1).to({graphics:mask_6_graphics_36,x:247.5,y:263}).wait(1).to({graphics:mask_6_graphics_37,x:248,y:262.4}).wait(1).to({graphics:mask_6_graphics_38,x:248.6,y:261.8}).wait(1).to({graphics:mask_6_graphics_39,x:249.2,y:261.2}).wait(1).to({graphics:mask_6_graphics_40,x:249.8,y:260.6}).wait(1).to({graphics:mask_6_graphics_41,x:250.4,y:260}).wait(1).to({graphics:mask_6_graphics_42,x:251,y:259.4}).wait(1).to({graphics:mask_6_graphics_43,x:251.6,y:258.8}).wait(1).to({graphics:mask_6_graphics_44,x:252.1,y:258.2}).wait(1).to({graphics:mask_6_graphics_45,x:252.7,y:257.6}).wait(1).to({graphics:mask_6_graphics_46,x:253.3,y:257}).wait(1).to({graphics:mask_6_graphics_47,x:253.9,y:256.4}).wait(1).to({graphics:mask_6_graphics_48,x:254.5,y:255.8}).wait(1).to({graphics:mask_6_graphics_49,x:255.1,y:255.2}).wait(1).to({graphics:mask_6_graphics_50,x:255.7,y:254.6}).wait(1).to({graphics:mask_6_graphics_51,x:256.3,y:254}).wait(1).to({graphics:mask_6_graphics_52,x:256.8,y:253.4}).wait(1).to({graphics:mask_6_graphics_53,x:257.4,y:252.8}).wait(1).to({graphics:mask_6_graphics_54,x:258,y:252.2}).wait(1).to({graphics:mask_6_graphics_55,x:258.6,y:251.6}).wait(1).to({graphics:mask_6_graphics_56,x:259.2,y:251}).wait(1).to({graphics:mask_6_graphics_57,x:259.8,y:250.4}).wait(1).to({graphics:mask_6_graphics_58,x:260.4,y:249.8}).wait(1).to({graphics:mask_6_graphics_59,x:261,y:249.2}).wait(1).to({graphics:mask_6_graphics_60,x:261.5,y:248.6}).wait(1).to({graphics:mask_6_graphics_61,x:262.1,y:248}).wait(1).to({graphics:mask_6_graphics_62,x:262.7,y:247.4}).wait(1).to({graphics:mask_6_graphics_63,x:263.3,y:246.8}).wait(1).to({graphics:mask_6_graphics_64,x:263.9,y:246.2}).wait(1).to({graphics:mask_6_graphics_65,x:264.5,y:245.7}).wait(1).to({graphics:mask_6_graphics_66,x:265.1,y:245.1}).wait(1).to({graphics:mask_6_graphics_67,x:265.6,y:244.5}).wait(1).to({graphics:mask_6_graphics_68,x:266.2,y:243.9}).wait(1).to({graphics:mask_6_graphics_69,x:266.8,y:243.3}).wait(1).to({graphics:mask_6_graphics_70,x:267.4,y:242.7}).wait(1).to({graphics:mask_6_graphics_71,x:268,y:242.1}).wait(1).to({graphics:mask_6_graphics_72,x:268.6,y:241.5}).wait(1).to({graphics:mask_6_graphics_73,x:269.2,y:240.9}).wait(1).to({graphics:mask_6_graphics_74,x:269.8,y:240.3}).wait(1).to({graphics:mask_6_graphics_75,x:270.4,y:239.7}).wait(1).to({graphics:mask_6_graphics_76,x:271,y:239.1}).wait(1).to({graphics:mask_6_graphics_77,x:271.5,y:238.5}).wait(1).to({graphics:mask_6_graphics_78,x:272.1,y:237.9}).wait(1).to({graphics:mask_6_graphics_79,x:272.7,y:237.3}).wait(1).to({graphics:mask_6_graphics_80,x:273.3,y:236.7}).wait(1).to({graphics:mask_6_graphics_81,x:273.9,y:236.1}).wait(1).to({graphics:mask_6_graphics_82,x:274.5,y:235.5}).wait(1).to({graphics:mask_6_graphics_83,x:275.1,y:234.9}).wait(1).to({graphics:mask_6_graphics_84,x:275.6,y:234.3}).wait(1).to({graphics:mask_6_graphics_85,x:276.2,y:233.7}).wait(1).to({graphics:mask_6_graphics_86,x:276.8,y:233.1}).wait(1).to({graphics:mask_6_graphics_87,x:277.4,y:232.5}).wait(1).to({graphics:mask_6_graphics_88,x:278,y:231.9}).wait(1).to({graphics:mask_6_graphics_89,x:278.6,y:231.3}).wait(1).to({graphics:mask_6_graphics_90,x:279.2,y:230.8}).wait(1).to({graphics:mask_6_graphics_91,x:279.8,y:230.2}).wait(1).to({graphics:mask_6_graphics_92,x:280.3,y:229.6}).wait(1).to({graphics:mask_6_graphics_93,x:280.9,y:229}).wait(1).to({graphics:mask_6_graphics_94,x:281.5,y:228.4}).wait(1).to({graphics:mask_6_graphics_95,x:282.1,y:227.8}).wait(1).to({graphics:mask_6_graphics_96,x:282.7,y:227.2}).wait(1).to({graphics:mask_6_graphics_97,x:283.3,y:226.6}).wait(1).to({graphics:mask_6_graphics_98,x:283.9,y:226}).wait(1).to({graphics:mask_6_graphics_99,x:284.4,y:225.4}).wait(1).to({graphics:mask_6_graphics_100,x:285,y:224.8}).wait(1).to({graphics:mask_6_graphics_101,x:285.6,y:224.2}).wait(1).to({graphics:mask_6_graphics_102,x:286.2,y:223.6}).wait(1).to({graphics:mask_6_graphics_103,x:286.8,y:223}).wait(1).to({graphics:mask_6_graphics_104,x:287.4,y:222.4}).wait(1).to({graphics:mask_6_graphics_105,x:288,y:221.8}).wait(1).to({graphics:mask_6_graphics_106,x:288.6,y:221.2}).wait(1).to({graphics:mask_6_graphics_107,x:289.1,y:220.6}).wait(1).to({graphics:mask_6_graphics_108,x:289.7,y:220}).wait(1).to({graphics:mask_6_graphics_109,x:290.3,y:219.4}).wait(1).to({graphics:mask_6_graphics_110,x:290.9,y:218.8}).wait(1).to({graphics:mask_6_graphics_111,x:291.5,y:218.2}).wait(1).to({graphics:mask_6_graphics_112,x:292.1,y:217.6}).wait(1).to({graphics:mask_6_graphics_113,x:292.7,y:217}).wait(1).to({graphics:mask_6_graphics_114,x:293.2,y:216.4}).wait(1).to({graphics:mask_6_graphics_115,x:293.8,y:215.8}).wait(1).to({graphics:mask_6_graphics_116,x:294.4,y:215.2}).wait(1).to({graphics:mask_6_graphics_117,x:295,y:214.6}).wait(1).to({graphics:mask_6_graphics_118,x:295.6,y:214}).wait(1).to({graphics:mask_6_graphics_119,x:296.2,y:213.4}).wait(1).to({graphics:mask_6_graphics_120,x:296.8,y:212.8}).wait(1).to({graphics:mask_6_graphics_121,x:297.4,y:212.2}).wait(1).to({graphics:mask_6_graphics_122,x:297.9,y:211.6}).wait(1).to({graphics:mask_6_graphics_123,x:298.5,y:211}).wait(1).to({graphics:mask_6_graphics_124,x:299.1,y:210.5}).wait(1).to({graphics:mask_6_graphics_125,x:299.7,y:209.9}).wait(1).to({graphics:mask_6_graphics_126,x:300.3,y:209.3}).wait(1).to({graphics:mask_6_graphics_127,x:300.9,y:208.7}).wait(1).to({graphics:mask_6_graphics_128,x:200.5,y:154.3}).wait(523));

	// 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(20,1,1).p("Aq9NLIGXlvQIoneDWjoQDXjoAOiXQANiWhohL");
	this.shape_7.setTransform(304.2,187.7);
	this.shape_7._off = true;

	var maskedShapeInstanceList = [this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(9).to({_off:false},0).wait(642));

	// Letter
	this.instance_5 = new lib.f("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(275,275);
	this.instance_5.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(651));

	// Background
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_8.setTransform(275,275,3.373,2.543);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_9.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).wait(651));

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