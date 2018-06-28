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


(lib.triangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjXjAIAJAFIA0AbQAaAPAcAMQAbAMAaAFQAbAGAaAAQAcACAcgHQAZgHAagOIA1gcQAagOAYgPIjaGDg");
	this.shape.setTransform(0.4,-6.5,0.563,0.563);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.7,-17.4,24.3,21.8);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiLO5Qk4gxjnjxQkmkqAAmXQAAmREZkKQEakNGeAAQGiAAEXEIQEXELAAGRQAACUilAAI2cAAQAmDdC7CqQC9CqDsAAIAoAEIAEgGQC1AfCGgoQBSgZCZhcQCQhWBGAZQAsAMAgAoQA5BGgVA6IgzBIQkmD9m4AAQiPAAidgagAJ3jHQghjOiviGQisiHj6AAQj2AAirCFQisCGgkDQITnAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.7,-97.9,195.5,195.9);


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


(lib.SC_ar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-142.5,-103.8,1,1,-113,0,0,0.5,-17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.4,scaleX:1,scaleY:1,rotation:52.8,guide:{path:[-142.4,-103.6,-104.9,-123.3,-60.7,-117.1,-4.2,-109.2,30.2,-63.6,64.7,-18,56.7,38.5,51.4,76.9,28.8,105.1], orient:'auto'}},119).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AicY+Qq4kHkyqmQkyqlEGq5QEIq4KmkyMAXGAzLQltCklxAAQk/AAlBh6g");
	var mask_graphics_1 = new cjs.Graphics().p("AjIY2QqwkYkhqvQkgqsEYqyQEaqxKukgMAVwAzvQlbCSlcAAQlUAAlUiLg");
	var mask_graphics_2 = new cjs.Graphics().p("AjyYtQqpkqkPq2QkOqzEpqrQEsqpK1kPMAUaA0SQlJCBlHAAQlpAAllidg");
	var mask_graphics_3 = new cjs.Graphics().p("AkdYiQqgk8j9q8Qj9q6E7qjQE9qhK8j9MATEA0zQk3BwkyAAQl+AAl3iwg");
	var mask_graphics_4 = new cjs.Graphics().p("AlGYVQqZlNjrrCQjqrAFMqbQFOqZLCjqMARtA1QQkkBhkcAAQmVAAmGjEg");
	var mask_graphics_5 = new cjs.Graphics().p("AlwYHQqPlejZrIQjYrGFdqSQFfqQLIjYMAQUA1sQkPBTkIAAQmrAAmWjZg");
	var mask_graphics_6 = new cjs.Graphics().p("AmYX3QqHlujGrOQjGrLFuqIQFwqHLNjGMAO8A2GQj7BFjzAAQnCAAmkjvg");
	var mask_graphics_7 = new cjs.Graphics().p("AnAXmQp9l/i0rTQizrQF+p+QGBp9LRi0MANjA2eQjmA5jeAAQnYAAmzkGg");
	var mask_graphics_8 = new cjs.Graphics().p("AnoXTQpzmPihrXQigrUGPp1QGQpzLVihMAMJA2zQjQAujIAAQnxAAnAkeg");
	var mask_graphics_9 = new cjs.Graphics().p("AoPW/QpomgiOraQiOrZGfpqQGgpoLZiOMAKvA3FQi6AkizAAQoKAAnMk2g");
	var mask_graphics_10 = new cjs.Graphics().p("Ao1WoQpdmuh8reQh7rcGvpfQGwpdLch8MAJUA3VQijAcidAAQojAAnYlRg");
	var mask_graphics_11 = new cjs.Graphics().p("ApbWRQpSm+horhQhorfG+pUQG/pRLghpMAH4A3jQiMAUiGAAQo+AAnjlrg");
	var mask_graphics_12 = new cjs.Graphics().p("AqAV4QpGnOhVrjQhVrhHNpIQHPpGLhhVMAGcA3uQhzANhvAAQpaAAntmGg");
	var mask_graphics_13 = new cjs.Graphics().p("AqkVdQo6nchCrlQhCrjHco8QHdo6LkhCMAFAA33QhaAIhYAAQp3AAn2mjg");
	var mask_graphics_14 = new cjs.Graphics().p("ArHVBQounrgvrmQgvrlHqovQHtouLkgvMADlA3/QhBAEhAAAQqVAAn+nBg");
	var mask_graphics_15 = new cjs.Graphics().p("ArqUjQogn5gcrnQgcrlH4ojQH7ohLlgcMACIA4DIhNACQq1AAoGngg");
	var mask_graphics_16 = new cjs.Graphics().p("AsLUEQoUoHgJroQgJrlIHoWQIIoTLmgJMAAsA4FIgZAAQrWAAoMn/g");
	var mask_graphics_17 = new cjs.Graphics().p("AssTjQoGoUALrnQAKrmIUoIQIVoGLnAKMgAyA4FQrmgKoHoWg");
	var mask_graphics_18 = new cjs.Graphics().p("AtMTCQn3ohAdrmQAdrmIhn6QIjn4LmAdMgCOA4CQrlgdn6ojg");
	var mask_graphics_19 = new cjs.Graphics().p("AtqShQnqouAwrlQAxrlIunsQIvnpLlAwMgDqA39Qrkgwnrowg");
	var mask_graphics_20 = new cjs.Graphics().p("AuISAQnbo6BDrkQBErjI6neQI8naLjBDMgFGA31QrjhDnco8g");
	var mask_graphics_21 = new cjs.Graphics().p("AulRfQnMpHBWrhQBXriJGnOQJInMLhBXMgGhA3rQrhhWnOpIg");
	var mask_graphics_22 = new cjs.Graphics().p("AvBQ9Qm9pSBqrfQBprfJSm/QJUm9LeBqMgH9A3fQrfhpm+pUg");
	var mask_graphics_23 = new cjs.Graphics().p("AvcQcQmtpdB8rdQB8rbJemwQJdmtLdB8MgJYA3RQrch8mvpfg");
	var mask_graphics_24 = new cjs.Graphics().p("Av2P6QmdpoCPrZQCPrYJomgQJpmdLZCPMgK0A3AQrYiPmfpqg");
	var mask_graphics_25 = new cjs.Graphics().p("AwPPYQmNpyCirVQChrUJzmQQJzmNLVChMgMOA2tQrUihmPp1g");
	var mask_graphics_26 = new cjs.Graphics().p("AwnO3Ql9p9C1rQQC0rQJ9l/QJ8l+LRC1MgNnA2XQrQi0l/p+g");
	var mask_graphics_27 = new cjs.Graphics().p("Aw+OVQltqGDIrLQDGrLKHlvQKGltLMDHMgPAA1/QrMjGluqIg");
	var mask_graphics_28 = new cjs.Graphics().p("AxTNzQldqPDarGQDZrGKPleQKQlcLGDaMgQYA1lQrGjZldqRg");
	var mask_graphics_29 = new cjs.Graphics().p("AxoNRQlMqYDsrAQDrq/KZlOQKYlLLADsMgRwA1JQrAjrlMqag");
	var mask_graphics_30 = new cjs.Graphics().p("Ax8MvQk6qgD9q6QD+q5Kgk8QKhk6K6D+MgTHA0qQq6j9k7qig");
	var mask_graphics_31 = new cjs.Graphics().p("AyPMNQkpqoEQqzQEPqyKokrQKpkoKzEQMgUeA0JQqzkPkpqqg");
	var mask_graphics_32 = new cjs.Graphics().p("AyhLrQkXqvEhqsQEhqrKwkZQKwkWKrEhMgVyAzmQqskhkYqxg");
	var mask_graphics_33 = new cjs.Graphics().p("AyyLJQkFq2EzqkQEyqjK3kHQK2kFKlEzMgXIAzBQqkkykGq5g");
	var mask_graphics_34 = new cjs.Graphics().p("AzCKoQjzq8FEqdQFEqbK9j1QK9jzKcFEMgYbAyaQqclEj0q+g");
	var mask_graphics_35 = new cjs.Graphics().p("AzQKGQjhrBFVqVQFUqSLEjjQLDjhKTFVMgZtAxwQqUlUjhrFg");
	var mask_graphics_36 = new cjs.Graphics().p("AzmJlQjPrHFmqLQFmqKLJjRQLIjOKLFmMga/AxEQqKlljQrKg");
	var mask_graphics_37 = new cjs.Graphics().p("A0GJDQi9rMF3qBQF2qBLOi+QLNi8KBF3MgcOAwXQqBl3i9rPg");
	var mask_graphics_38 = new cjs.Graphics().p("A0lIiQiqrQGHp4QGGp3LSirQLTipJ3GGMgdeAvnQp3mGiqrUg");
	var mask_graphics_39 = new cjs.Graphics().p("A1DIBQiXrUGXpuQGWpsLWiZQLXiWJtGWMgerAu2QptmXiYrYg");
	var mask_graphics_40 = new cjs.Graphics().p("A1dHjQiGrYGmpjQGlpjLZiIQLaiFJjGlMgfxAuHQpjmmiHrbg");
	var mask_graphics_41 = new cjs.Graphics().p("A12HGQh0rcG0pZQGzpYLch3QLdh0JZG0Mgg3AtVQpYmzh2reg");
	var mask_graphics_42 = new cjs.Graphics().p("A2NGoQhjreHCpPQHBpNLfhmQLghiJOHBMgh7AsjQpOnBhkrhg");
	var mask_graphics_43 = new cjs.Graphics().p("A2jGLQhSrgHQpEQHPpDLhhUQLihRJDHPMgi9ArvQpEnPhSrjg");
	var mask_graphics_44 = new cjs.Graphics().p("A24FuQhBriHeo5QHco4LjhCQLkhAI5HdMgj/Aq6Qo5ndhBrlg");
	var mask_graphics_45 = new cjs.Graphics().p("A3LFRQgwriHrouQHqotLkgxQLlguItHqMgk/AqDQotnrgvrmg");
	var mask_graphics_46 = new cjs.Graphics().p("A3dE1QgerkH4oiQH3ogLlggQLmgdIhH4Mgl+ApJQoin3gdrng");
	var mask_graphics_47 = new cjs.Graphics().p("A3uEZQgMrkIEoWQIEoVLmgNQLmgMIVIEMgm7AoQQoWoEgMrog");
	var mask_graphics_48 = new cjs.Graphics().p("A39D+QAFrkIRoKQIQoJLmAEQLmAGIJIRMgn4AnUQoJoRAGrng");
	var mask_graphics_49 = new cjs.Graphics().p("A4LDjQAXrkIdn9QIcn8LmAVQLmAYH8IdMgozAmXQn8odAXrng");
	var mask_graphics_50 = new cjs.Graphics().p("A4YDIQAprjIpnwQIonvLlAnQLlApHwIpMgpsAlYQnwooAorng");
	var mask_graphics_51 = new cjs.Graphics().p("A4iCuQA5riI1njQIzniLkA5QLkA6HjI0MgqkAkZQnio0A6rlg");
	var mask_graphics_52 = new cjs.Graphics().p("A4sCUQBLrgJAnWQI/nULiBKQLjBMHUI/MgrZAjYQnVo/BLrkg");
	var mask_graphics_53 = new cjs.Graphics().p("A40B7QBcrfJLnHQJKnHLgBbQLhBeHHJKMgsPAiWQnHpKBdrig");
	var mask_graphics_54 = new cjs.Graphics().p("A47BiQBurcJVm6QJVm4LeBsQLeBvG5JVMgtCAhSQm5pVBurfg");
	var mask_graphics_55 = new cjs.Graphics().p("A5ABKQB/raJgmrQJemrLbB+QLcCBGrJfMgt0AgNQmrpfCArcg");
	var mask_graphics_56 = new cjs.Graphics().p("A5EAyQCQrWJqmdQJomcLYCPQLYCRGdJpMgujAfIQmdppCRrZg");
	var mask_graphics_57 = new cjs.Graphics().p("A5HAaQCirSJzmOQJymOLUCgQLVCjGOJzMgvSAeBQmOpzCirWg");
	var mask_graphics_58 = new cjs.Graphics().p("A5IADQCzrOJ8l/QJ7l/LRCxQLQC0F/J8Mgv+Ac5Ql/p8CzrSg");
	var mask_graphics_59 = new cjs.Graphics().p("A5IgSQDErLKFlwQKElwLMDCQLMDFFwKFMgwpAbwQlwqFDErMg");
	var mask_graphics_60 = new cjs.Graphics().p("A5GgoQDUrGKOlhQKNlhLHDUQLHDVFgKOMgxSAalQlgqNDVrHg");
	var mask_graphics_61 = new cjs.Graphics().p("A5Dg+QDlrBKWlRQKUlRLDDkQLBDnFRKVMgx5AZbQlRqVDmrDg");
	var mask_graphics_62 = new cjs.Graphics().p("A4/hTQD2q7KdlCQKdlBK8D1QK9D3FBKdMgyfAYPQlBqdD2q9g");
	var mask_graphics_63 = new cjs.Graphics().p("A45hnQEGq2KlkxQKjkyK3EGQK3EHExKlMgzDAXCQkxqlEHq2g");
	var mask_graphics_64 = new cjs.Graphics().p("A4yh7QEWqvKskiQKqkhKxEVQKwEYEiKsMgzlAV0QkiqrEYqwg");
	var mask_graphics_65 = new cjs.Graphics().p("A4qiPQEnqoKykRQKxkRKqElQKpEoESKzMg0FAUmQkRqyEnqqg");
	var mask_graphics_66 = new cjs.Graphics().p("A4giiQE2qhK5kBQK3kAKjE1QKiE4EBK5Mg0jATXQkBq4E4qjg");
	var mask_graphics_67 = new cjs.Graphics().p("A4Vi0QFGqaK/jwQK9jwKcFFQKaFIDwK+Mg0/ASIQjxq+FIqbg");
	var mask_graphics_68 = new cjs.Graphics().p("A4JjGQFWqSLFjfQLCjgKUFWQKSFXDgLDMg1aAQ4QjgrEFXqTg");
	var mask_graphics_69 = new cjs.Graphics().p("A37jXQFlqKLKjPQLHjOKMFlQKKFmDPLIMg1zAPnQjPrJFnqKg");
	var mask_graphics_70 = new cjs.Graphics().p("A3sjoQF0qBLPi+QLMi9KDF0QKBF2C+LMMg2JAOWQi+rOF2qCg");
	var mask_graphics_71 = new cjs.Graphics().p("A3cj4QGEp4LSitQLRitJ6GEQJ4GFCtLRMg2eANDQitrSGFp5g");
	var mask_graphics_72 = new cjs.Graphics().p("A3KkHQGSpvLXicQLUibJxGSQJvGUCcLUMg2xALxQicrWGUpvg");
	var mask_graphics_73 = new cjs.Graphics().p("A23kWQGhplLaiLQLXiKJoGhQJlGiCLLYMg3CAKeQiLrZGjpmg");
	var mask_graphics_74 = new cjs.Graphics().p("A2jkkQGvpbLeh5QLah6JdGvQJcGxB5LcMg3QAJKQh6rcGxpcg");
	var mask_graphics_75 = new cjs.Graphics().p("A2PkwQG8pSLfhqQLehpJTG8QJSG+BqLeMg3cAH+QhqrfG+pSg");
	var mask_graphics_76 = new cjs.Graphics().p("A17k8QHJpILihaQLfhZJKHIQJIHLBaLgMg3mAGxQhargHKpJg");
	var mask_graphics_77 = new cjs.Graphics().p("A1llHQHWo+LjhKQLhhKJAHWQI+HXBKLhMg3vAFlQhKrjHXo+g");
	var mask_graphics_78 = new cjs.Graphics().p("A1OlSQHiozLlg6QLig6I2HhQI0HkA6LjMg32AEYQg6rlHjo0g");
	var mask_graphics_79 = new cjs.Graphics().p("A02lcQHuopLmgqQLjgqIrHuQIqHuAqLlMg37ADLQgqrlHvoqg");
	var mask_graphics_80 = new cjs.Graphics().p("A0dllQH6oeLmgaQLkgaIhH5QIfH6AZLmMg3+AB+QgarmH7ofg");
	var mask_graphics_81 = new cjs.Graphics().p("A0DluQIFoTLngKQLlgKIWIFQITIGAKLmMg4BAAwQgKrmIHoUg");
	var mask_graphics_82 = new cjs.Graphics().p("A8ANrQAGrnISoIQIRoJLmAGQLlAGILIRQIIIRgGLng");
	var mask_graphics_83 = new cjs.Graphics().p("A8AMxQAWrmIen9QIbn9LmAWQLlAWH/IcQH9IcgWLmg");
	var mask_graphics_84 = new cjs.Graphics().p("A7/L3QAmrmIonxQInnxLlAmQLkAmH0InQHwIngmLlg");
	var mask_graphics_85 = new cjs.Graphics().p("A7+K9QA2rjIznnQIxnkLkA2QLkA1HnIyQHlIxg2Llg");
	var mask_graphics_86 = new cjs.Graphics().p("A79KEQBGriI9nbQI8nYLjBGQLiBGHbI7QHZI8hGLjg");
	var mask_graphics_87 = new cjs.Graphics().p("A77JKQBWrgJHnOQJGnMLhBWQLhBWHOJFQHMJGhWLig");
	var mask_graphics_88 = new cjs.Graphics().p("A75IRQBmreJRnBQJPnALfBmQLfBlHCJQQG/JQhlLfg");
	var mask_graphics_89 = new cjs.Graphics().p("A72HYQB1rcJbm0QJZmzLdB2QLcB1G1JZQGzJZh2Ldg");
	var mask_graphics_90 = new cjs.Graphics().p("A7zGfQCFrZJkmnQJimmLaCFQLaCFGoJjQGlJiiFLbg");
	var mask_graphics_91 = new cjs.Graphics().p("A7wFmQCVrWJtmaQJrmYLXCVQLXCVGbJrQGYJsiVLXg");
	var mask_graphics_92 = new cjs.Graphics().p("A7sEuQClrTJ1mMQJ0mLLUCkQLTClGNJ0QGLJ0ilLUg");
	var mask_graphics_93 = new cjs.Graphics().p("A7oD2QC1rQJ9l+QJ9l+LQC1QLPC0GAJ8QF9J9i0LQg");
	var mask_graphics_94 = new cjs.Graphics().p("A7jC+QDErLKGlxQKElwLMDEQLLDEFyKEQFwKFjELMg");
	var mask_graphics_95 = new cjs.Graphics().p("A7eCGQDTrHKOliQKMliLIDTQLHDTFkKNQFhKMjTLIg");
	var mask_graphics_96 = new cjs.Graphics().p("A7YBPQDirCKVlVQKUlTLDDiQLCDiFWKUQFTKUjiLDg");
	var mask_graphics_97 = new cjs.Graphics().p("A7SAYQDxq9KdlGQKalGK+DyQK+DyFHKbQFFKbjyK+g");
	var mask_graphics_98 = new cjs.Graphics().p("A7MgdQEBq5Kjk4QKhk3K5EBQK4EAE5KjQE2KhkAK5g");
	var mask_graphics_99 = new cjs.Graphics().p("A7FhTQEPq0KqkpQKokoKzEQQKzEPEqKpQEoKokQKzg");
	var mask_graphics_100 = new cjs.Graphics().p("A6+iJQEfqtKwkbQKukZKtEeQKsEfEcKvQEZKukfKtg");
	var mask_graphics_101 = new cjs.Graphics().p("A62i+QEtqnK2kMQK0kKKmEtQKnEtEMK1QELK0kuKng");
	var mask_graphics_102 = new cjs.Graphics().p("A6ujzQE7qgK8j9QK5j8KhE8QKfE8D+K6QD7K6k8Khg");
	var mask_graphics_103 = new cjs.Graphics().p("A6mknQFKqaLBjtQK+jtKaFLQKZFJDuLAQDsLAlKKZg");
	var mask_graphics_104 = new cjs.Graphics().p("A6dlbQFYqSLGjeQLDjeKTFZQKRFYDgLFQDcLElYKSg");
	var mask_graphics_105 = new cjs.Graphics().p("A6UmOQFnqLLKjPQLIjOKLFnQKKFmDQLKQDNLIlmKLg");
	var mask_graphics_106 = new cjs.Graphics().p("A6KnBQF0qDLPi/QLMi/KDF1QKCF0DBLOQC+LNl1KDg");
	var mask_graphics_107 = new cjs.Graphics().p("A6AnzQGCp6LTiwQLQiwJ7GDQJ5GCCyLRQCuLSmCJ6g");
	var mask_graphics_108 = new cjs.Graphics().p("A52olQGQpxLXihQLTifJyGQQJyGPChLVQCfLVmPJyg");
	var mask_graphics_109 = new cjs.Graphics().p("A5rpVQGdppLaiRQLXiQJpGeQJpGcCSLYQCPLZmdJpg");
	var mask_graphics_110 = new cjs.Graphics().p("A5gqFQGrpgLciBQLaiBJhGrQJfGqCCLbQCALcmqJgg");
	var mask_graphics_111 = new cjs.Graphics().p("A5Uq1QG3pWLfhxQLdhxJXG4QJWG3BzLdQBvLfm3JWg");
	var mask_graphics_112 = new cjs.Graphics().p("A5IrjQHEpNLhhiQLfhgJOHEQJMHEBjLgQBgLgnFJOg");
	var mask_graphics_113 = new cjs.Graphics().p("A48sRQHQpDLkhSQLghRJEHSQJDHQBTLiQBQLinRJEg");
	var mask_graphics_114 = new cjs.Graphics().p("A4ws+QHdo5LlhCQLihBI6HeQI5HdBCLjQBALkndI5g");
	var mask_graphics_115 = new cjs.Graphics().p("A4jtqQHpovLmgxQLkgxIvHpQIuHpAzLlQAwLlnpIvg");
	var mask_graphics_116 = new cjs.Graphics().p("A4WuWQH1okLnghQLkghIlH1QIkH1AiLmQAgLmn1Ikg");
	var mask_graphics_117 = new cjs.Graphics().p("A4JvAQIBoZLogSQLkgRIaICQIZIAASLmQARLnoBIZg");
	var mask_graphics_118 = new cjs.Graphics().p("A37vqQIMoOLogBQLlgBIOINQIOIMACLmQABLnoNIOg");
	var mask_graphics_119 = new cjs.Graphics().p("A3uwSQIYoDLoAPQLkAPIEIYQICIXgOLmQgQLnoXIDg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-132.4,y:11.2}).wait(1).to({graphics:mask_graphics_1,x:-132.4,y:10.3}).wait(1).to({graphics:mask_graphics_2,x:-132.4,y:9.4}).wait(1).to({graphics:mask_graphics_3,x:-132.4,y:8.6}).wait(1).to({graphics:mask_graphics_4,x:-132.4,y:7.8}).wait(1).to({graphics:mask_graphics_5,x:-132.3,y:7.1}).wait(1).to({graphics:mask_graphics_6,x:-132.3,y:6.4}).wait(1).to({graphics:mask_graphics_7,x:-132.3,y:5.8}).wait(1).to({graphics:mask_graphics_8,x:-132.3,y:5.2}).wait(1).to({graphics:mask_graphics_9,x:-132.2,y:4.7}).wait(1).to({graphics:mask_graphics_10,x:-132.2,y:4.2}).wait(1).to({graphics:mask_graphics_11,x:-132.2,y:3.8}).wait(1).to({graphics:mask_graphics_12,x:-132.2,y:3.5}).wait(1).to({graphics:mask_graphics_13,x:-132.1,y:3.2}).wait(1).to({graphics:mask_graphics_14,x:-132.1,y:3}).wait(1).to({graphics:mask_graphics_15,x:-132.1,y:2.9}).wait(1).to({graphics:mask_graphics_16,x:-132.1,y:2.8}).wait(1).to({graphics:mask_graphics_17,x:-132.1,y:2.8}).wait(1).to({graphics:mask_graphics_18,x:-132.1,y:2.7}).wait(1).to({graphics:mask_graphics_19,x:-132.1,y:2.5}).wait(1).to({graphics:mask_graphics_20,x:-132.1,y:2.3}).wait(1).to({graphics:mask_graphics_21,x:-132.1,y:2}).wait(1).to({graphics:mask_graphics_22,x:-132.2,y:1.7}).wait(1).to({graphics:mask_graphics_23,x:-132.2,y:1.3}).wait(1).to({graphics:mask_graphics_24,x:-132.2,y:0.8}).wait(1).to({graphics:mask_graphics_25,x:-132.2,y:0.3}).wait(1).to({graphics:mask_graphics_26,x:-132.3,y:-0.2}).wait(1).to({graphics:mask_graphics_27,x:-132.3,y:-0.9}).wait(1).to({graphics:mask_graphics_28,x:-132.3,y:-1.5}).wait(1).to({graphics:mask_graphics_29,x:-132.3,y:-2.3}).wait(1).to({graphics:mask_graphics_30,x:-132.3,y:-3.1}).wait(1).to({graphics:mask_graphics_31,x:-132.3,y:-3.9}).wait(1).to({graphics:mask_graphics_32,x:-132.3,y:-4.8}).wait(1).to({graphics:mask_graphics_33,x:-132.3,y:-5.7}).wait(1).to({graphics:mask_graphics_34,x:-132.3,y:-6.7}).wait(1).to({graphics:mask_graphics_35,x:-132.3,y:-7.7}).wait(1).to({graphics:mask_graphics_36,x:-131.4,y:-8.8}).wait(1).to({graphics:mask_graphics_37,x:-129.4,y:-9.9}).wait(1).to({graphics:mask_graphics_38,x:-127.4,y:-11.1}).wait(1).to({graphics:mask_graphics_39,x:-125.3,y:-12.2}).wait(1).to({graphics:mask_graphics_40,x:-123.5,y:-13.3}).wait(1).to({graphics:mask_graphics_41,x:-121.8,y:-14.5}).wait(1).to({graphics:mask_graphics_42,x:-120,y:-15.8}).wait(1).to({graphics:mask_graphics_43,x:-118.3,y:-17}).wait(1).to({graphics:mask_graphics_44,x:-116.7,y:-18.4}).wait(1).to({graphics:mask_graphics_45,x:-115.1,y:-19.7}).wait(1).to({graphics:mask_graphics_46,x:-113.5,y:-21.1}).wait(1).to({graphics:mask_graphics_47,x:-111.9,y:-22.6}).wait(1).to({graphics:mask_graphics_48,x:-110.4,y:-24.1}).wait(1).to({graphics:mask_graphics_49,x:-109,y:-25.6}).wait(1).to({graphics:mask_graphics_50,x:-107.5,y:-27.1}).wait(1).to({graphics:mask_graphics_51,x:-106.2,y:-28.7}).wait(1).to({graphics:mask_graphics_52,x:-104.8,y:-30.4}).wait(1).to({graphics:mask_graphics_53,x:-103.5,y:-32.1}).wait(1).to({graphics:mask_graphics_54,x:-102.3,y:-33.8}).wait(1).to({graphics:mask_graphics_55,x:-101.1,y:-35.5}).wait(1).to({graphics:mask_graphics_56,x:-99.9,y:-37.3}).wait(1).to({graphics:mask_graphics_57,x:-98.8,y:-39.1}).wait(1).to({graphics:mask_graphics_58,x:-97.7,y:-40.9}).wait(1).to({graphics:mask_graphics_59,x:-96.6,y:-42.7}).wait(1).to({graphics:mask_graphics_60,x:-95.6,y:-44.6}).wait(1).to({graphics:mask_graphics_61,x:-94.6,y:-46.5}).wait(1).to({graphics:mask_graphics_62,x:-93.7,y:-48.4}).wait(1).to({graphics:mask_graphics_63,x:-92.8,y:-50.3}).wait(1).to({graphics:mask_graphics_64,x:-92,y:-52.2}).wait(1).to({graphics:mask_graphics_65,x:-91.2,y:-54.2}).wait(1).to({graphics:mask_graphics_66,x:-90.4,y:-56.2}).wait(1).to({graphics:mask_graphics_67,x:-89.7,y:-58.2}).wait(1).to({graphics:mask_graphics_68,x:-89,y:-60.2}).wait(1).to({graphics:mask_graphics_69,x:-88.4,y:-62.2}).wait(1).to({graphics:mask_graphics_70,x:-87.8,y:-64.2}).wait(1).to({graphics:mask_graphics_71,x:-87.3,y:-66.2}).wait(1).to({graphics:mask_graphics_72,x:-86.8,y:-68.2}).wait(1).to({graphics:mask_graphics_73,x:-86.3,y:-70.3}).wait(1).to({graphics:mask_graphics_74,x:-85.7,y:-72.4}).wait(1).to({graphics:mask_graphics_75,x:-85.4,y:-74.3}).wait(1).to({graphics:mask_graphics_76,x:-85.1,y:-76.2}).wait(1).to({graphics:mask_graphics_77,x:-84.9,y:-78}).wait(1).to({graphics:mask_graphics_78,x:-84.7,y:-79.9}).wait(1).to({graphics:mask_graphics_79,x:-84.5,y:-81.9}).wait(1).to({graphics:mask_graphics_80,x:-84.4,y:-83.8}).wait(1).to({graphics:mask_graphics_81,x:-84.4,y:-85.7}).wait(1).to({graphics:mask_graphics_82,x:-84.3,y:-86.2}).wait(1).to({graphics:mask_graphics_83,x:-84.3,y:-84.2}).wait(1).to({graphics:mask_graphics_84,x:-84.2,y:-82.3}).wait(1).to({graphics:mask_graphics_85,x:-84.1,y:-80.4}).wait(1).to({graphics:mask_graphics_86,x:-83.9,y:-78.5}).wait(1).to({graphics:mask_graphics_87,x:-83.7,y:-76.6}).wait(1).to({graphics:mask_graphics_88,x:-83.4,y:-74.7}).wait(1).to({graphics:mask_graphics_89,x:-83.1,y:-72.8}).wait(1).to({graphics:mask_graphics_90,x:-82.7,y:-70.9}).wait(1).to({graphics:mask_graphics_91,x:-82.3,y:-69}).wait(1).to({graphics:mask_graphics_92,x:-81.9,y:-67.1}).wait(1).to({graphics:mask_graphics_93,x:-81.4,y:-65.3}).wait(1).to({graphics:mask_graphics_94,x:-80.9,y:-63.4}).wait(1).to({graphics:mask_graphics_95,x:-80.3,y:-61.6}).wait(1).to({graphics:mask_graphics_96,x:-79.8,y:-59.7}).wait(1).to({graphics:mask_graphics_97,x:-79.1,y:-57.9}).wait(1).to({graphics:mask_graphics_98,x:-78.5,y:-56.1}).wait(1).to({graphics:mask_graphics_99,x:-77.8,y:-54.3}).wait(1).to({graphics:mask_graphics_100,x:-77.1,y:-52.5}).wait(1).to({graphics:mask_graphics_101,x:-76.3,y:-50.7}).wait(1).to({graphics:mask_graphics_102,x:-75.5,y:-48.9}).wait(1).to({graphics:mask_graphics_103,x:-74.7,y:-47.2}).wait(1).to({graphics:mask_graphics_104,x:-73.8,y:-45.5}).wait(1).to({graphics:mask_graphics_105,x:-72.9,y:-43.7}).wait(1).to({graphics:mask_graphics_106,x:-71.9,y:-42}).wait(1).to({graphics:mask_graphics_107,x:-71,y:-40.3}).wait(1).to({graphics:mask_graphics_108,x:-70,y:-38.7}).wait(1).to({graphics:mask_graphics_109,x:-68.9,y:-37}).wait(1).to({graphics:mask_graphics_110,x:-67.9,y:-35.4}).wait(1).to({graphics:mask_graphics_111,x:-66.7,y:-33.8}).wait(1).to({graphics:mask_graphics_112,x:-65.6,y:-32.2}).wait(1).to({graphics:mask_graphics_113,x:-64.4,y:-30.7}).wait(1).to({graphics:mask_graphics_114,x:-63.2,y:-29.2}).wait(1).to({graphics:mask_graphics_115,x:-62,y:-27.7}).wait(1).to({graphics:mask_graphics_116,x:-60.7,y:-26.2}).wait(1).to({graphics:mask_graphics_117,x:-59.4,y:-24.8}).wait(1).to({graphics:mask_graphics_118,x:-58,y:-23.4}).wait(1).to({graphics:mask_graphics_119,x:-56.7,y:-22.2}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AJ7SKQElk0A+m7QBPo1lYnIQlYnIo2hQQm7g+l4DG");
	this.shape.setTransform(-42.2,-2.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147.2,-121.2,136.6,237.4);


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


(lib.H_ar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0.7,-10.4,1,1,0,0,0,0.4,-17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:79.6},93).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AiGAiIAAhDIENAAIAABDg");
	var mask_graphics_1 = new cjs.Graphics().p("AiGAnIAAhNIENAAIAABNg");
	var mask_graphics_2 = new cjs.Graphics().p("AiGAsIAAhXIENAAIAABXg");
	var mask_graphics_3 = new cjs.Graphics().p("AiGAwIAAhfIENAAIAABfg");
	var mask_graphics_4 = new cjs.Graphics().p("AiGA1IAAhpIENAAIAABpg");
	var mask_graphics_5 = new cjs.Graphics().p("AiGA6IAAhzIENAAIAABzg");
	var mask_graphics_6 = new cjs.Graphics().p("AiGA+IAAh7IENAAIAAB7g");
	var mask_graphics_7 = new cjs.Graphics().p("AiGBDIAAiFIENAAIAACFg");
	var mask_graphics_8 = new cjs.Graphics().p("AiGBHIAAiNIENAAIAACNg");
	var mask_graphics_9 = new cjs.Graphics().p("AiGBMIAAiXIENAAIAACXg");
	var mask_graphics_10 = new cjs.Graphics().p("AiGBQIAAifIENAAIAACfg");
	var mask_graphics_11 = new cjs.Graphics().p("AiGBVIAAipIENAAIAACpg");
	var mask_graphics_12 = new cjs.Graphics().p("AiGBaIAAizIENAAIAACzg");
	var mask_graphics_13 = new cjs.Graphics().p("AiGBeIAAi7IENAAIAAC7g");
	var mask_graphics_14 = new cjs.Graphics().p("AiGBjIAAjFIENAAIAADFg");
	var mask_graphics_15 = new cjs.Graphics().p("AiGBnIAAjNIENAAIAADNg");
	var mask_graphics_16 = new cjs.Graphics().p("AiGBsIAAjXIENAAIAADXg");
	var mask_graphics_17 = new cjs.Graphics().p("AiGBxIAAjgIENAAIAADgg");
	var mask_graphics_18 = new cjs.Graphics().p("AiGB1IAAjpIENAAIAADpg");
	var mask_graphics_19 = new cjs.Graphics().p("AiGB6IAAjzIENAAIAADzg");
	var mask_graphics_20 = new cjs.Graphics().p("AiGB+IAAj7IENAAIAAD7g");
	var mask_graphics_21 = new cjs.Graphics().p("AiGCDIAAkFIENAAIAAEFg");
	var mask_graphics_22 = new cjs.Graphics().p("AiGCHIAAkOIENAAIAAEOg");
	var mask_graphics_23 = new cjs.Graphics().p("AiGCMIAAkXIENAAIAAEXg");
	var mask_graphics_24 = new cjs.Graphics().p("AiGCRIAAkhIENAAIAAEhg");
	var mask_graphics_25 = new cjs.Graphics().p("AiGCVIAAkpIENAAIAAEpg");
	var mask_graphics_26 = new cjs.Graphics().p("AiGCaIAAkzIENAAIAAEzg");
	var mask_graphics_27 = new cjs.Graphics().p("AiGCfIAAk9IENAAIAAE9g");
	var mask_graphics_28 = new cjs.Graphics().p("AiGCjIAAlFIENAAIAAFFg");
	var mask_graphics_29 = new cjs.Graphics().p("AiGCoIAAlPIENAAIAAFPg");
	var mask_graphics_30 = new cjs.Graphics().p("AiGCsIAAlXIENAAIAAFXg");
	var mask_graphics_31 = new cjs.Graphics().p("AiGCxIAAlhIENAAIAAFhg");
	var mask_graphics_32 = new cjs.Graphics().p("AiGC1IAAlpIENAAIAAFpg");
	var mask_graphics_33 = new cjs.Graphics().p("AiGC6IAAlzIENAAIAAFzg");
	var mask_graphics_34 = new cjs.Graphics().p("AiGC/IAAl9IENAAIAAF9g");
	var mask_graphics_35 = new cjs.Graphics().p("AiGDDIAAmFIENAAIAAGFg");
	var mask_graphics_36 = new cjs.Graphics().p("AiGDIIAAmPIENAAIAAGPg");
	var mask_graphics_37 = new cjs.Graphics().p("AiGDMIAAmXIENAAIAAGXg");
	var mask_graphics_38 = new cjs.Graphics().p("AiGDRIAAmhIENAAIAAGhg");
	var mask_graphics_39 = new cjs.Graphics().p("AiGDWIAAmrIENAAIAAGrg");
	var mask_graphics_40 = new cjs.Graphics().p("AiGDaIAAmzIENAAIAAGzg");
	var mask_graphics_41 = new cjs.Graphics().p("AiGDfIAAm9IENAAIAAG9g");
	var mask_graphics_42 = new cjs.Graphics().p("AiGDjIAAnFIENAAIAAHFg");
	var mask_graphics_43 = new cjs.Graphics().p("AiGDoIAAnPIENAAIAAHPg");
	var mask_graphics_44 = new cjs.Graphics().p("AiGDsIAAnXIENAAIAAHXg");
	var mask_graphics_45 = new cjs.Graphics().p("AiGDxIAAnhIENAAIAAHhg");
	var mask_graphics_46 = new cjs.Graphics().p("AiGD2IAAnrIENAAIAAHrg");
	var mask_graphics_47 = new cjs.Graphics().p("AiGD6IAAnzIENAAIAAHzg");
	var mask_graphics_48 = new cjs.Graphics().p("AiGD/IAAn9IENAAIAAH9g");
	var mask_graphics_49 = new cjs.Graphics().p("AiGEEIAAoGIENAAIAAIGg");
	var mask_graphics_50 = new cjs.Graphics().p("AiGEIIAAoPIENAAIAAIPg");
	var mask_graphics_51 = new cjs.Graphics().p("AiGENIAAoZIENAAIAAIZg");
	var mask_graphics_52 = new cjs.Graphics().p("AiGERIAAohIENAAIAAIhg");
	var mask_graphics_53 = new cjs.Graphics().p("AiGEWIAAorIENAAIAAIrg");
	var mask_graphics_54 = new cjs.Graphics().p("AiGEbIAAo1IENAAIAAI1g");
	var mask_graphics_55 = new cjs.Graphics().p("AiGEfIAAo9IENAAIAAI9g");
	var mask_graphics_56 = new cjs.Graphics().p("AiGEkIAApHIENAAIAAJHg");
	var mask_graphics_57 = new cjs.Graphics().p("AiGEoIAApPIENAAIAAJPg");
	var mask_graphics_58 = new cjs.Graphics().p("AiGEtIAApZIENAAIAAJZg");
	var mask_graphics_59 = new cjs.Graphics().p("AiGExIAAphIENAAIAAJhg");
	var mask_graphics_60 = new cjs.Graphics().p("AiGE2IAAprIENAAIAAJrg");
	var mask_graphics_61 = new cjs.Graphics().p("AiGE7IAAp0IENAAIAAJ0g");
	var mask_graphics_62 = new cjs.Graphics().p("AiGE/IAAp9IENAAIAAJ9g");
	var mask_graphics_63 = new cjs.Graphics().p("AiGFEIAAqHIENAAIAAKHg");
	var mask_graphics_64 = new cjs.Graphics().p("AiGFIIAAqPIENAAIAAKPg");
	var mask_graphics_65 = new cjs.Graphics().p("AiGFNIAAqZIENAAIAAKZg");
	var mask_graphics_66 = new cjs.Graphics().p("AiGFRIAAqiIENAAIAAKig");
	var mask_graphics_67 = new cjs.Graphics().p("AiGFWIAAqrIENAAIAAKrg");
	var mask_graphics_68 = new cjs.Graphics().p("AiGFbIAAq1IENAAIAAK1g");
	var mask_graphics_69 = new cjs.Graphics().p("AiGFfIAAq9IENAAIAAK9g");
	var mask_graphics_70 = new cjs.Graphics().p("AiGFkIAArHIENAAIAALHg");
	var mask_graphics_71 = new cjs.Graphics().p("AiGFoIAArQIENAAIAALQg");
	var mask_graphics_72 = new cjs.Graphics().p("AiGFtIAArZIENAAIAALZg");
	var mask_graphics_73 = new cjs.Graphics().p("AiGFyIAArjIENAAIAALjg");
	var mask_graphics_74 = new cjs.Graphics().p("AiGF2IAArrIENAAIAALrg");
	var mask_graphics_75 = new cjs.Graphics().p("AiGF7IAAr1IENAAIAAL1g");
	var mask_graphics_76 = new cjs.Graphics().p("AiGGAIAAr+IENAAIAAL+g");
	var mask_graphics_77 = new cjs.Graphics().p("AiGGEIAAsHIENAAIAAMHg");
	var mask_graphics_78 = new cjs.Graphics().p("AiGGJIAAsRIENAAIAAMRg");
	var mask_graphics_79 = new cjs.Graphics().p("AiGGNIAAsZIENAAIAAMZg");
	var mask_graphics_80 = new cjs.Graphics().p("AiGGSIAAsjIENAAIAAMjg");
	var mask_graphics_81 = new cjs.Graphics().p("AiGGWIAAsrIENAAIAAMrg");
	var mask_graphics_82 = new cjs.Graphics().p("AiGGbIAAs1IENAAIAAM1g");
	var mask_graphics_83 = new cjs.Graphics().p("AiGGgIAAs/IENAAIAAM/g");
	var mask_graphics_84 = new cjs.Graphics().p("AiGGkIAAtHIENAAIAANHg");
	var mask_graphics_85 = new cjs.Graphics().p("AiGGpIAAtRIENAAIAANRg");
	var mask_graphics_86 = new cjs.Graphics().p("AiGGtIAAtZIENAAIAANZg");
	var mask_graphics_87 = new cjs.Graphics().p("AiGGyIAAtjIENAAIAANjg");
	var mask_graphics_88 = new cjs.Graphics().p("AiGG3IAAttIENAAIAANtg");
	var mask_graphics_89 = new cjs.Graphics().p("AiGG7IAAt1IENAAIAAN1g");
	var mask_graphics_90 = new cjs.Graphics().p("AiGHAIAAt/IENAAIAAN/g");
	var mask_graphics_91 = new cjs.Graphics().p("AiGHEIAAuHIENAAIAAOHg");
	var mask_graphics_92 = new cjs.Graphics().p("AiGHJIAAuRIENAAIAAORg");
	var mask_graphics_93 = new cjs.Graphics().p("AiGHNIAAuZIENAAIAAOZg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0,y:-6.3}).wait(1).to({graphics:mask_graphics_1,x:0,y:-5.8}).wait(1).to({graphics:mask_graphics_2,x:0,y:-5.3}).wait(1).to({graphics:mask_graphics_3,x:0,y:-4.7}).wait(1).to({graphics:mask_graphics_4,x:0,y:-4.2}).wait(1).to({graphics:mask_graphics_5,x:0,y:-3.7}).wait(1).to({graphics:mask_graphics_6,x:0,y:-3.2}).wait(1).to({graphics:mask_graphics_7,x:0,y:-2.7}).wait(1).to({graphics:mask_graphics_8,x:0,y:-2.2}).wait(1).to({graphics:mask_graphics_9,x:0,y:-1.6}).wait(1).to({graphics:mask_graphics_10,x:0,y:-1.1}).wait(1).to({graphics:mask_graphics_11,x:0,y:-0.6}).wait(1).to({graphics:mask_graphics_12,x:0,y:-0.1}).wait(1).to({graphics:mask_graphics_13,x:0,y:0.4}).wait(1).to({graphics:mask_graphics_14,x:0,y:1}).wait(1).to({graphics:mask_graphics_15,x:0,y:1.5}).wait(1).to({graphics:mask_graphics_16,x:0,y:2}).wait(1).to({graphics:mask_graphics_17,x:0,y:2.5}).wait(1).to({graphics:mask_graphics_18,x:0,y:3}).wait(1).to({graphics:mask_graphics_19,x:0,y:3.5}).wait(1).to({graphics:mask_graphics_20,x:0,y:4.1}).wait(1).to({graphics:mask_graphics_21,x:0,y:4.6}).wait(1).to({graphics:mask_graphics_22,x:0,y:5.1}).wait(1).to({graphics:mask_graphics_23,x:0,y:5.6}).wait(1).to({graphics:mask_graphics_24,x:0,y:6.1}).wait(1).to({graphics:mask_graphics_25,x:0,y:6.7}).wait(1).to({graphics:mask_graphics_26,x:0,y:7.2}).wait(1).to({graphics:mask_graphics_27,x:0,y:7.7}).wait(1).to({graphics:mask_graphics_28,x:0,y:8.2}).wait(1).to({graphics:mask_graphics_29,x:0,y:8.7}).wait(1).to({graphics:mask_graphics_30,x:0,y:9.2}).wait(1).to({graphics:mask_graphics_31,x:0,y:9.8}).wait(1).to({graphics:mask_graphics_32,x:0,y:10.3}).wait(1).to({graphics:mask_graphics_33,x:0,y:10.8}).wait(1).to({graphics:mask_graphics_34,x:0,y:11.3}).wait(1).to({graphics:mask_graphics_35,x:0,y:11.8}).wait(1).to({graphics:mask_graphics_36,x:0,y:12.4}).wait(1).to({graphics:mask_graphics_37,x:0,y:12.9}).wait(1).to({graphics:mask_graphics_38,x:0,y:13.4}).wait(1).to({graphics:mask_graphics_39,x:0,y:13.9}).wait(1).to({graphics:mask_graphics_40,x:0,y:14.4}).wait(1).to({graphics:mask_graphics_41,x:0,y:14.9}).wait(1).to({graphics:mask_graphics_42,x:0,y:15.5}).wait(1).to({graphics:mask_graphics_43,x:0,y:16}).wait(1).to({graphics:mask_graphics_44,x:0,y:16.5}).wait(1).to({graphics:mask_graphics_45,x:0,y:17}).wait(1).to({graphics:mask_graphics_46,x:0,y:17.5}).wait(1).to({graphics:mask_graphics_47,x:0,y:18.1}).wait(1).to({graphics:mask_graphics_48,x:0,y:18.6}).wait(1).to({graphics:mask_graphics_49,x:0,y:19.1}).wait(1).to({graphics:mask_graphics_50,x:0,y:19.6}).wait(1).to({graphics:mask_graphics_51,x:0,y:20.1}).wait(1).to({graphics:mask_graphics_52,x:0,y:20.7}).wait(1).to({graphics:mask_graphics_53,x:0,y:21.2}).wait(1).to({graphics:mask_graphics_54,x:0,y:21.7}).wait(1).to({graphics:mask_graphics_55,x:0,y:22.2}).wait(1).to({graphics:mask_graphics_56,x:0,y:22.7}).wait(1).to({graphics:mask_graphics_57,x:0,y:23.2}).wait(1).to({graphics:mask_graphics_58,x:0,y:23.8}).wait(1).to({graphics:mask_graphics_59,x:0,y:24.3}).wait(1).to({graphics:mask_graphics_60,x:0,y:24.8}).wait(1).to({graphics:mask_graphics_61,x:0,y:25.3}).wait(1).to({graphics:mask_graphics_62,x:0,y:25.8}).wait(1).to({graphics:mask_graphics_63,x:0,y:26.4}).wait(1).to({graphics:mask_graphics_64,x:0,y:26.9}).wait(1).to({graphics:mask_graphics_65,x:0,y:27.4}).wait(1).to({graphics:mask_graphics_66,x:0,y:27.9}).wait(1).to({graphics:mask_graphics_67,x:0,y:28.4}).wait(1).to({graphics:mask_graphics_68,x:0,y:28.9}).wait(1).to({graphics:mask_graphics_69,x:0,y:29.5}).wait(1).to({graphics:mask_graphics_70,x:0,y:30}).wait(1).to({graphics:mask_graphics_71,x:0,y:30.5}).wait(1).to({graphics:mask_graphics_72,x:0,y:31}).wait(1).to({graphics:mask_graphics_73,x:0,y:31.5}).wait(1).to({graphics:mask_graphics_74,x:0,y:32.1}).wait(1).to({graphics:mask_graphics_75,x:0,y:32.6}).wait(1).to({graphics:mask_graphics_76,x:0,y:33.1}).wait(1).to({graphics:mask_graphics_77,x:0,y:33.6}).wait(1).to({graphics:mask_graphics_78,x:0,y:34.1}).wait(1).to({graphics:mask_graphics_79,x:0,y:34.6}).wait(1).to({graphics:mask_graphics_80,x:0,y:35.2}).wait(1).to({graphics:mask_graphics_81,x:0,y:35.7}).wait(1).to({graphics:mask_graphics_82,x:0,y:36.2}).wait(1).to({graphics:mask_graphics_83,x:0,y:36.7}).wait(1).to({graphics:mask_graphics_84,x:0,y:37.2}).wait(1).to({graphics:mask_graphics_85,x:0,y:37.8}).wait(1).to({graphics:mask_graphics_86,x:0,y:38.3}).wait(1).to({graphics:mask_graphics_87,x:0,y:38.8}).wait(1).to({graphics:mask_graphics_88,x:0,y:39.3}).wait(1).to({graphics:mask_graphics_89,x:0,y:39.8}).wait(1).to({graphics:mask_graphics_90,x:0,y:40.3}).wait(1).to({graphics:mask_graphics_91,x:0,y:40.9}).wait(1).to({graphics:mask_graphics_92,x:0,y:41.4}).wait(1).to({graphics:mask_graphics_93,x:0,y:41.9}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AAAm/IAAN/");
	this.shape.setTransform(0,44.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(94));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.4,-10.4,24.3,21.9);


(lib.honeyflap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.honeybee();
	this.instance.parent = this;
	this.instance.setTransform(22.9,-143.7,0.422,0.422,0,0,0,-36.8,64.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOB8IgSgDIgCgBIgEgBIgEgBIgFgCIgHgDIgFgDIgDgCIgBAAIgCgBIgBgBIgBgBIgBgBIgBAAIgCgBIgBgBIgBgBIgBgBIgBAAIgBgBIgBgBIgBgBIgBgBIgBAAIgBgBIgBgBIgBgBIgBgBIAAAAIgCgBIAAgBIgBgBIgBgBIgBgBIgBAAIAAgBIgBgBIgBgBIgBgBIAAgBIgBgBIgBAAIgBgBIAAgBIgBgBIgBgBIAAgBIgBAAIAAgBIgBgBIgBgBIAAgBIgBgBIgBgBIAAAAIgBgBIAAgBIgBgBIAAgBIgBgBIgBgBIAAgBIgBAAIAAgBIAAgBIgBgBIgBgBIAAgBIAAgBIgBgBIAAgBIgBAAIAAgBIgBgBIAAgBIAAgBIgBgBIAAgBIgBgBIAAgBIAAAAIgBgBIAAgBIAAgBIgBgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIgBAAIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAAAIgBgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIgBgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAAAIABgCIAAAAIAAgBIABgBIAAgBIAAgBIAAgBIABgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIABgBIAAgBIAAgBIABgCIAAgBIABgBIAAgBIABgBIAAgBIABgBIABgBIAAgBIABgBIAAgBIABgBIAAgBIABgBIABgBIAAgBIABgBIABgBIAAgBIABgBIABgBIABgBIAAgBIABgBIABgBIABgBIABgCIAAgBIACgBIAAgBIABgBIABgBIABgBIABgBIABgBIABgBIABgBIACgCIABgBIABgBIABgBIACgBIACgCIAKgHQAIgGAKgEIAFgCIAJgEQAKgDAKgBIAMgBIANAAIANACIANADIANAFIAFACIABAAIACABIABABIACABIABAAIACABIABABIABABIACAAIABABIABABIABABIABABIACAAIABABIABABIABABIABABIABAAIABABIABABIABABIABABIABAAIABABIABABIAAABIACABIAAABIABAAIABABIABABIABABIAAABIABABIABAAIABABIABABIAAABIABABIABABIAAAAIABABIABABIAAABIABABIABABIAAABIABAAIABABIAAABIABABIAAABIABABIABABIAAAAIABABIAAABIABABIAAABIABABIAAABIABABIAAAAIABABIAAABIABABIAAABIABABIAAABIABABIAAABIAAAAIABABIAAABIABABIAAABIAAABIABABIAAABIABABIAAABIAAAAIABABIAAABIAAABIAAABIABABIAAABIAAABIABABIAAABIAAABIABAAIAAABIAAABIAAABIAAABIABABIAAABIAAABIAAABIABABIAAABIAAAAIAAABIAAABIAAABIAAABIABABIAAABIAAACIAAACIAAACIABABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIgBABIABABIgBABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIgBABIAAABIAAABIAAACIgBACIAAACIAAABIAAABIgBABIAAABIAAABIAAABIgBABIAAABIAAABIgBABIAAABIgBABIAAABIAAABIAAABIgBABIAAABIgBABIAAABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIgBABIAAABIgBABIgBABIAAABIgBABIgBABIgBABIAAACIgBABIgBABIgBABIgBABIAAABIgBABIgBABIgBABIgBABIgBABIgBABIgCABIAAACIgKAIQgMAKgOAGQgJAFgJACQgRAFgRAAIgPgBg");
	this.shape.setTransform(23,-145.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-215.3,105.5,82.8);


// stage content:
(lib.writingsuccess_Fontkid_e = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_403 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(403).call(this.frame_403).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(355.2,268.6,0.998,0.998,8,0,0,22.4,-144);
	this.instance._off = true;

	this.instance_1 = new lib.honeybee();
	this.instance_1.parent = this;
	this.instance_1.setTransform(356.7,268.4,0.421,0.421,8,0,0,-36.7,64.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({regY:-143.9,guide:{path:[355.3,268.6,353.5,239,334.1,218.2,319.5,202.5,294.2,196.8]}},49).to({regY:-144,guide:{path:[294.1,196.8,285.6,194.9,275.8,194.1,237.2,191,214.3,216.5,204.5,227.3,199.6,239.3]}},45).to({regY:-143.9,guide:{path:[199.7,239.3,192.9,255.6,195,274,197.2,292.3,202.9,306.9,209.8,324.8,221.7,335.7,227,340.5,233.1,344.5]}},45).to({regX:22.6,regY:-143.8,scaleX:1,scaleY:1,guide:{path:[233.1,344.5,240.9,349.5,250.2,353.1,266.8,359.6,286.1,359.1,305.4,358.5,310,357.1,313.4,356,317.8,354.7]}},35).to({regX:22.4,regY:-144,scaleX:1,scaleY:1,guide:{path:[317.8,354.7,319.5,354.2,321.4,353.6,328.1,351.5,336.2,347.2,344.3,343,355.7,335.8]}},26).wait(9).to({x:202.2,y:268.1},0).to({x:356.2},110).to({_off:true},11).wait(65));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(339).to({_off:false},0).to({regX:-36.9,rotation:8.5,guide:{path:[356.2,268.4,321.6,464.9,172.9,396.8,24.4,328.7,-77.2,503.3]}},64).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(355.7,335.9,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},200).wait(195));

	// Layer 3
	this.instance_2 = new lib.SC_ar("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(236.7,171.6,1,1,0,53,-127,-0.2,-0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(395));

	// Layer 2
	this.instance_3 = new lib.H_ar("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(282.3,301.7,1,1,-90,0,0,0,33);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(218).to({_off:false},0).wait(186));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(25,1,1).p("AAXAAIgtAA");
	this.shape_1.setTransform(202.8,268.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(25,1,1).p("AgcAAIA5AA");
	this.shape_2.setTransform(203.5,268.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(25,1,1).p("AgjAAIBHAA");
	this.shape_3.setTransform(204.2,268.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(25,1,1).p("AgqAAIBVAA");
	this.shape_4.setTransform(204.9,268.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(25,1,1).p("AgxAAIBjAA");
	this.shape_5.setTransform(205.6,268.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(25,1,1).p("Ag4AAIBxAA");
	this.shape_6.setTransform(206.2,268.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(25,1,1).p("Ag/AAIB/AA");
	this.shape_7.setTransform(206.9,268.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(25,1,1).p("AhGAAICMAA");
	this.shape_8.setTransform(207.6,268.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(25,1,1).p("AhNAAICbAA");
	this.shape_9.setTransform(208.3,268.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(25,1,1).p("AhTAAICnAA");
	this.shape_10.setTransform(209,268.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(25,1,1).p("AhaAAIC1AA");
	this.shape_11.setTransform(209.7,268.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(25,1,1).p("AhhAAIDDAA");
	this.shape_12.setTransform(210.4,268.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(25,1,1).p("AhoAAIDRAA");
	this.shape_13.setTransform(211.1,268.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(25,1,1).p("AhvAAIDfAA");
	this.shape_14.setTransform(211.7,268.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(25,1,1).p("Ah2AAIDtAA");
	this.shape_15.setTransform(212.4,268.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(25,1,1).p("Ah9AAID6AA");
	this.shape_16.setTransform(213.1,268.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(25,1,1).p("AiEAAIEJAA");
	this.shape_17.setTransform(213.8,268.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(25,1,1).p("AiKAAIEVAA");
	this.shape_18.setTransform(214.5,268.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(25,1,1).p("AiRAAIEjAA");
	this.shape_19.setTransform(215.2,268.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(25,1,1).p("AiYAAIExAA");
	this.shape_20.setTransform(215.9,268.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(25,1,1).p("AifAAIE/AA");
	this.shape_21.setTransform(216.5,268.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(25,1,1).p("AimAAIFNAA");
	this.shape_22.setTransform(217.2,268.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(25,1,1).p("AisAAIFZAA");
	this.shape_23.setTransform(217.9,268.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(25,1,1).p("Ai0AAIFoAA");
	this.shape_24.setTransform(218.6,268.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(25,1,1).p("Ai6AAIF1AA");
	this.shape_25.setTransform(219.3,268.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(25,1,1).p("AjBAAIGDAA");
	this.shape_26.setTransform(220,268.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(25,1,1).p("AjIAAIGRAA");
	this.shape_27.setTransform(220.7,268.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(25,1,1).p("AjPAAIGfAA");
	this.shape_28.setTransform(221.4,268.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(25,1,1).p("AjWAAIGtAA");
	this.shape_29.setTransform(222,268.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(25,1,1).p("AjdAAIG7AA");
	this.shape_30.setTransform(222.7,268.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(25,1,1).p("AjjAAIHHAA");
	this.shape_31.setTransform(223.4,268.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(25,1,1).p("AjqAAIHWAA");
	this.shape_32.setTransform(224.1,268.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(25,1,1).p("AjxAAIHjAA");
	this.shape_33.setTransform(224.8,268.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(25,1,1).p("Aj4AAIHxAA");
	this.shape_34.setTransform(225.5,268.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(25,1,1).p("Aj/AAIH/AA");
	this.shape_35.setTransform(226.2,268.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(25,1,1).p("AkGAAIINAA");
	this.shape_36.setTransform(226.9,268.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(25,1,1).p("AkNAAIIbAA");
	this.shape_37.setTransform(227.5,268.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(25,1,1).p("AkUAAIIoAA");
	this.shape_38.setTransform(228.2,268.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(25,1,1).p("AkaAAII1AA");
	this.shape_39.setTransform(228.9,268.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(25,1,1).p("AkhAAIJDAA");
	this.shape_40.setTransform(229.6,268.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(25,1,1).p("AkoAAIJRAA");
	this.shape_41.setTransform(230.3,268.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(25,1,1).p("AkvAAIJfAA");
	this.shape_42.setTransform(231,268.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(25,1,1).p("Ak2AAIJtAA");
	this.shape_43.setTransform(231.7,268.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(25,1,1).p("Ak9AAIJ7AA");
	this.shape_44.setTransform(232.3,268.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(25,1,1).p("AlEAAIKJAA");
	this.shape_45.setTransform(233,268.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(25,1,1).p("AlLAAIKXAA");
	this.shape_46.setTransform(233.7,268.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(25,1,1).p("AlRAAIKjAA");
	this.shape_47.setTransform(234.4,268.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(25,1,1).p("AlYAAIKxAA");
	this.shape_48.setTransform(235.1,268.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(25,1,1).p("AlfAAIK/AA");
	this.shape_49.setTransform(235.8,268.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(25,1,1).p("AlmAAILNAA");
	this.shape_50.setTransform(236.5,268.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(25,1,1).p("AltAAILbAA");
	this.shape_51.setTransform(237.2,268.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(25,1,1).p("Al0AAILpAA");
	this.shape_52.setTransform(237.8,268.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(25,1,1).p("Al7AAIL3AA");
	this.shape_53.setTransform(238.5,268.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(25,1,1).p("AmCAAIMFAA");
	this.shape_54.setTransform(239.2,268.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(25,1,1).p("AmIAAIMRAA");
	this.shape_55.setTransform(239.9,268.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(25,1,1).p("AmPAAIMfAA");
	this.shape_56.setTransform(240.6,268.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(25,1,1).p("AmWAAIMtAA");
	this.shape_57.setTransform(241.3,268.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(25,1,1).p("AmdAAIM7AA");
	this.shape_58.setTransform(242,268.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(25,1,1).p("AmkAAINJAA");
	this.shape_59.setTransform(242.6,268.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(25,1,1).p("AmrAAINXAA");
	this.shape_60.setTransform(243.3,268.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(25,1,1).p("AmxAAINjAA");
	this.shape_61.setTransform(244,268.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(25,1,1).p("Am5AAINzAA");
	this.shape_62.setTransform(244.7,268.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(25,1,1).p("Am/AAIN/AA");
	this.shape_63.setTransform(245.4,268.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(25,1,1).p("AnGAAIONAA");
	this.shape_64.setTransform(246.1,268.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(25,1,1).p("AnNAAIObAA");
	this.shape_65.setTransform(246.8,268.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(25,1,1).p("AnUAAIOpAA");
	this.shape_66.setTransform(247.5,268.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(25,1,1).p("AnbAAIO3AA");
	this.shape_67.setTransform(248.1,268.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(25,1,1).p("AniAAIPFAA");
	this.shape_68.setTransform(248.8,268.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(25,1,1).p("AnoAAIPRAA");
	this.shape_69.setTransform(249.5,268.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(25,1,1).p("AnwAAIPhAA");
	this.shape_70.setTransform(250.2,268.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(25,1,1).p("An2AAIPtAA");
	this.shape_71.setTransform(250.9,268.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(25,1,1).p("An9AAIP7AA");
	this.shape_72.setTransform(251.6,268.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(25,1,1).p("AoEAAIQJAA");
	this.shape_73.setTransform(252.3,268.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(25,1,1).p("AoLAAIQXAA");
	this.shape_74.setTransform(253,268.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(25,1,1).p("AoSAAIQlAA");
	this.shape_75.setTransform(253.6,268.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(25,1,1).p("AoZAAIQzAA");
	this.shape_76.setTransform(254.3,268.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(25,1,1).p("AofAAIQ/AA");
	this.shape_77.setTransform(255,268.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(25,1,1).p("AomAAIRNAA");
	this.shape_78.setTransform(255.7,268.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(25,1,1).p("AotAAIRbAA");
	this.shape_79.setTransform(256.4,268.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(25,1,1).p("Ao0AAIRpAA");
	this.shape_80.setTransform(257.1,268.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(25,1,1).p("Ao7AAIR3AA");
	this.shape_81.setTransform(257.8,268.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(25,1,1).p("ApCAAISFAA");
	this.shape_82.setTransform(258.4,268.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(25,1,1).p("ApJAAISTAA");
	this.shape_83.setTransform(259.1,268.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(25,1,1).p("ApQAAIShAA");
	this.shape_84.setTransform(259.8,268.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(25,1,1).p("ApWAAIStAA");
	this.shape_85.setTransform(260.5,268.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(25,1,1).p("ApdAAIS7AA");
	this.shape_86.setTransform(261.2,268.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(25,1,1).p("ApkAAITJAA");
	this.shape_87.setTransform(261.9,268.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(25,1,1).p("AprAAITXAA");
	this.shape_88.setTransform(262.6,268.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(25,1,1).p("ApyAAITlAA");
	this.shape_89.setTransform(263.3,268.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(25,1,1).p("Ap5AAITzAA");
	this.shape_90.setTransform(263.9,268.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(25,1,1).p("AqAAAIUBAA");
	this.shape_91.setTransform(264.6,268.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(25,1,1).p("AqHAAIUPAA");
	this.shape_92.setTransform(265.3,268.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(25,1,1).p("AqNAAIUbAA");
	this.shape_93.setTransform(266,268.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(25,1,1).p("AqUAAIUpAA");
	this.shape_94.setTransform(266.7,268.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(25,1,1).p("AqbAAIU3AA");
	this.shape_95.setTransform(267.4,268.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(25,1,1).p("AqiAAIVFAA");
	this.shape_96.setTransform(268.1,268.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(25,1,1).p("AqpAAIVTAA");
	this.shape_97.setTransform(268.7,268.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(25,1,1).p("AqwAAIVhAA");
	this.shape_98.setTransform(269.4,268.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(25,1,1).p("Aq3AAIVuAA");
	this.shape_99.setTransform(270.1,268.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(25,1,1).p("Aq+AAIV9AA");
	this.shape_100.setTransform(270.8,268.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(25,1,1).p("ArEAAIWJAA");
	this.shape_101.setTransform(271.5,268.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(25,1,1).p("ArLAAIWXAA");
	this.shape_102.setTransform(272.2,268.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(25,1,1).p("ArSAAIWlAA");
	this.shape_103.setTransform(272.9,268.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(25,1,1).p("ArZAAIWzAA");
	this.shape_104.setTransform(273.6,268.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(25,1,1).p("ArgAAIXBAA");
	this.shape_105.setTransform(274.2,268.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(25,1,1).p("ArnAAIXPAA");
	this.shape_106.setTransform(274.9,268.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(25,1,1).p("AruAAIXcAA");
	this.shape_107.setTransform(275.6,268.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(25,1,1).p("Ar1AAIXrAA");
	this.shape_108.setTransform(276.3,268.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(25,1,1).p("Ar7AAIX3AA");
	this.shape_109.setTransform(277,268.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(25,1,1).p("AsCAAIYFAA");
	this.shape_110.setTransform(277.7,268.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(25,1,1).p("AMKAAI4TAA");
	this.shape_111.setTransform(278.4,268.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},218).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).wait(76));

	// Layer 15 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_103 = new cjs.Graphics().p("AlTKYQDBnaHYjGQHZjGHaDCQHbDBDGHYQDHHZjCHbg");
	var mask_graphics_104 = new cjs.Graphics().p("AlhLLQC0ngHSjVQHTjSHfC0QHhCzDUHSQDUHTi0Hgg");
	var mask_graphics_105 = new cjs.Graphics().p("AltL+QCmnlHLjiQHNjgHkCmQHmClDhHLQDiHNimHlg");
	var mask_graphics_106 = new cjs.Graphics().p("Al4MyQCYnqHEjvQHGjuHpCXQHqCYDvHEQDvHGiXHqg");
	var mask_graphics_107 = new cjs.Graphics().p("AmCNmQCJnuG9j9QG/j6HuCIQHuCJD8G+QD8G/iJHug");
	var mask_graphics_108 = new cjs.Graphics().p("AmLOaQB7nxG1kKQG4kHHxB5QHyB7EJG2QEJG4h7Hxg");
	var mask_graphics_109 = new cjs.Graphics().p("AmTPPQBsn0GukXQGvkUH1BrQH1BsEWGvQEWGvhsH1g");
	var mask_graphics_110 = new cjs.Graphics().p("AmaQFQBen4GlkjQGnkhH4BdQH4BdEiGmQEjGnheH4g");
	var mask_graphics_111 = new cjs.Graphics().p("AmgQ6QBPn6GdkvQGektH6BOQH7BOEuGeQEvGehPH7g");
	var mask_graphics_112 = new cjs.Graphics().p("AmkRwQBAn8GTk7QGWk5H8A/QH9BAE6GUQE7GVhAH9g");
	var mask_graphics_113 = new cjs.Graphics().p("AmoSmQAxn+GKlHQGMlFH+AxQH/AxFFGLQFHGMgxH+g");
	var mask_graphics_114 = new cjs.Graphics().p("AmrTcQAin/GClSQGBlRH/AiQIAAiFRGBQFSGDgiH/g");
	var mask_graphics_115 = new cjs.Graphics().p("AmtUTQAUoAF3leQF4lcH/ATQIBATFcF4QFdF4gTIAg");
	var mask_graphics_116 = new cjs.Graphics().p("AmtVJQAEoAFtloQFtlnIAAEQIBAEFnFtQFoFugEIAg");
	var mask_graphics_117 = new cjs.Graphics().p("AhVHyQFilxIAgLQIBgLFxFiQFzFkALIAMgmqAA0QgLoAFjlzg");
	var mask_graphics_118 = new cjs.Graphics().p("AhtH7QFXl8IAgaQIAgZF8FXQF8FYAaIAMgmnAB8Qgan/FYl9g");
	var mask_graphics_119 = new cjs.Graphics().p("AiEIEQFMmGH/goQH/gpGGFMQGGFNApH/MgmiADFQgpn/FMmHg");
	var mask_graphics_120 = new cjs.Graphics().p("AiZIOQFBmPH9g4QH9g3GQFAQGQFCA3H9MgmbAENQg4n+FBmQg");
	var mask_graphics_121 = new cjs.Graphics().p("AitIZQE1mZH7hGQH8hGGYE0QGaE2BGH7MgmTAFVQhGn8E1mZg");
	var mask_graphics_122 = new cjs.Graphics().p("AjAIkQEpmhH5hVQH6hVGhEoQGiEqBVH5MgmHAGcQhWn6Epmig");
	var mask_graphics_123 = new cjs.Graphics().p("AjRIwQEdmqH2hjQH3hkGpEcQGrEdBkH3Mgl7AHjQhkn3Edmrg");
	var mask_graphics_124 = new cjs.Graphics().p("AjhI9QEQmyHzhyQH0hyGyEPQGzEQByH0MglrAIpQhznzEQmzg");
	var mask_graphics_125 = new cjs.Graphics().p("AjwJLQEEm6HviBQHxiBG5ECQG7EECBHwMglaAJwQiBnwECm6g");
	var mask_graphics_126 = new cjs.Graphics().p("Aj9JZQD4nCHqiPQHtiPHBD1QHCD3CPHsMglHAK2QiPnsD1nCg");
	var mask_graphics_127 = new cjs.Graphics().p("AkIJoQDqnJHmieQHoidHIDoQHJDqCeHnMgkyAL7QienoDpnIg");
	var mask_graphics_128 = new cjs.Graphics().p("AkSJ3QDcnPHiirQHjisHODaQHQDcCsHjMgkaAM/QisniDbnQg");
	var mask_graphics_129 = new cjs.Graphics().p("AkbKHQDPnVHci5QHei6HVDMQHWDPC6HdMgkBAODQi6ndDNnWg");
	var mask_graphics_130 = new cjs.Graphics().p("AkiKYQDBnbHWjHQHZjIHaDAQHcC/DIHYMgjmAPGQjInYDAnbg");
	var mask_graphics_131 = new cjs.Graphics().p("AkoKpQCzngHRjVQHSjWHgCyQHhCyDWHSMgjJAQIQjWnSCynhg");
	var mask_graphics_132 = new cjs.Graphics().p("AksK7QClnmHKjiQHMjjHlCkQHmCjDjHMMgiqARJQjjnLCknmg");
	var mask_graphics_133 = new cjs.Graphics().p("AkvLNQCXnqHDjvQHFjxHpCWQHrCVDxHFMgiJASJQjwnECVnrg");
	var mask_graphics_134 = new cjs.Graphics().p("AkwLgQCInuG8j8QG+j+HtCHQHwCHD9G9MghmATJQj9m9CHnvg");
	var mask_graphics_135 = new cjs.Graphics().p("AkwL0QB6nyG0kJQG2kLHyB5QHyB5ELG0MghBAUIQkLm2B5nyg");
	var mask_graphics_136 = new cjs.Graphics().p("AkvMIQBsn1GskWQGukYH1BqQH2BrEXGtMggaAVEQkXmtBpn2g");
	var mask_graphics_137 = new cjs.Graphics().p("AksMdQBdn5GkkjQGmkjH4BbQH5BcEjGlI/yWBQkkmmBbn4g");
	var mask_graphics_138 = new cjs.Graphics().p("AknMyQBOn7GbkwQGdkvH7BNQH7BNEwGcI/IW7QkwmcBMn7g");
	var mask_graphics_139 = new cjs.Graphics().p("AkhNHQA/n9GSk7QGVk7H8A+QH9A+E8GTI+dX1Qk7mUA9n9g");
	var mask_graphics_140 = new cjs.Graphics().p("AkZNdQAwn+GJlIQGKlGH+AvQH/AvFIGJI9wYuQlHmKAvn/g");
	var mask_graphics_141 = new cjs.Graphics().p("AkQN0QAhoAF/lTQGBlSH/AgQIAAhFTF/I9BZlQlSmBAgn/g");
	var mask_graphics_142 = new cjs.Graphics().p("AkGOLQASoBF1leQF3ldIAARQIBASFeF1I8RaaQldl2ARoAg");
	var mask_graphics_143 = new cjs.Graphics().p("Aj6OiQADoBFrloQFslpIAADQICACFoFrI7ebOQlolsACoAg");
	var mask_graphics_144 = new cjs.Graphics().p("AjtO5QgLoAFglzQFhlzIAgMQIBgNFzFgI6qcBQlzlhgNoBg");
	var mask_graphics_145 = new cjs.Graphics().p("AjePRQgboAFVl9QFXl9H/gbQIBgcF9FXI52cxQl8lXgcoAg");
	var mask_graphics_146 = new cjs.Graphics().p("AjOPqQgqoAFKmGQFMmHH+gqQH/grGHFLI4/dhQmGlLgrn/g");
	var mask_graphics_147 = new cjs.Graphics().p("Ai9QCQg4n+E+mQQFAmQH9g5QH+g6GQFAI4HeOQmPk/g7n+g");
	var mask_graphics_148 = new cjs.Graphics().p("AiqQbQhHn8EymZQE0mZH7hJQH8hIGaE0I3Oe6QmZkzhJn8g");
	var mask_graphics_149 = new cjs.Graphics().p("AiVQ0QhXn5EnmiQEomjH4hXQH6hXGjEoI2UflQmikohXn5g");
	var mask_graphics_150 = new cjs.Graphics().p("AiAROQhln3EamrQEcmqH1hmQH4hmGrEbMgVYAgOQmqkbhnn2g");
	var mask_graphics_151 = new cjs.Graphics().p("AhpRoQhzn0ENmzQEPmzHyh0QH0h0GzEOMgUbAg1QmzkOh0nzg");
	var mask_graphics_152 = new cjs.Graphics().p("AhRSBQiCnwEBm6QECm7HviCQHwiEG7ECMgTdAhbQm7kCiDnwg");
	var mask_graphics_153 = new cjs.Graphics().p("Ag3ScQiRntD0nCQD1nBHriRQHsiSHCD1MgSeAh+QnCj1iRnrg");
	var mask_graphics_154 = new cjs.Graphics().p("AgcS2QifnoDmnJQDonIHmigQHoigHJDoMgReAifQnJjnifnng");
	var mask_graphics_155 = new cjs.Graphics().p("AAATQQitnjDYnPQDbnPHhiuQHjiuHQDaMgQdAi/QnQjaitnig");
	var mask_graphics_156 = new cjs.Graphics().p("AAcTrQi6neDLnWQDNnVHci8QHei8HWDNMgPcAjdQnWjNi8ncg");
	var mask_graphics_157 = new cjs.Graphics().p("AA6UFQjInYC+nbQC/nbHWjKQHYjKHcC/MgOZAj5Qnbi/jLnXg");
	var mask_graphics_158 = new cjs.Graphics().p("ABaUgQjWnSCwnhQCxngHQjXQHSjYHhCxMgNVAkSQnhiwjYnRg");
	var mask_graphics_159 = new cjs.Graphics().p("AB7U7QjjnMChnlQCinmHLjlQHLjlHmCjMgMRAkqQnmiijlnKg");
	var mask_graphics_160 = new cjs.Graphics().p("ACdVVQjxnECTnqQCUnqHEjyQHEjzHrCUMgLMAlBQnriUjynEg");
	var mask_graphics_161 = new cjs.Graphics().p("AC/VwQj9m9CFnvQCGnuG7j/QG+j/HuCGMgKGAlUQnviGkAm8g");
	var mask_graphics_162 = new cjs.Graphics().p("ADjWLQkKm2B2nyQB4nyG0kMQG1kMHzB3MgJAAlnQnzh4kNm0g");
	var mask_graphics_163 = new cjs.Graphics().p("AEJWmQkYmuBon1QBpn3GskXQGtkZH2BoMgH5Al3Qn2hpkZmsg");
	var mask_graphics_164 = new cjs.Graphics().p("AEvXAQklmlBan4QBan5GkkkQGlkmH4BaMgGyAmEQn5haklmkg");
	var mask_graphics_165 = new cjs.Graphics().p("AFVXbQkwmdBLn6QBLn8GbkwQGdkyH7BMMgFsAmPQn7hLkymbg");
	var mask_graphics_166 = new cjs.Graphics().p("AF9X1Qk8mTA8n9QA8n9GSk8QGUk+H9A9MgEkAmZQn9g9k+mSg");
	var mask_graphics_167 = new cjs.Graphics().p("AGmYPQlImKAtn+QAun/GIlHQGKlJH/AtMgDcAmhQn+gulKmJg");
	var mask_graphics_168 = new cjs.Graphics().p("AHQYqQlUmBAfn/QAeoAF/lTQGAlUIAAeMgCUAmmQn/gelVl/g");
	var mask_graphics_169 = new cjs.Graphics().p("AH6ZEQlel3APn/QAQoBF0leQF2lgIBAQMgBMAmpQoAgQlgl0g");
	var mask_graphics_170 = new cjs.Graphics().p("AImZdQlqlsABoAQAAoAFrlpQFrlrIAABMgACAmqQoBAAlqlrg");
	var mask_graphics_171 = new cjs.Graphics().p("AIvZ3Ql0ligPn/QgOoBFglzQFgl1IBgOMABFAmpIgoAAQnnAAlmlRg");
	var mask_graphics_172 = new cjs.Graphics().p("AI3aPQl+lWgdn/QgdoAFUl9QFWmAH/gdMACOAmmQgoADgoAAQnOAAlhk6g");
	var mask_graphics_173 = new cjs.Graphics().p("AJBanQmIlLgtn+Qgsn/FJmHQFLmJH+gsMADWAmhQg8AFg7AAQm2AAlakig");
	var mask_graphics_174 = new cjs.Graphics().p("AJLa9QmSk/g7n8Qg7n+E+mQQE+mTH9g7MAEeAmaQhQAJhNAAQmfAAlTkMg");
	var mask_graphics_175 = new cjs.Graphics().p("AJWbTQmbkzhKn7QhKn7EymbQEymaH8hKMAFlAmQQhjAPhfAAQmJAAlLj3g");
	var mask_graphics_176 = new cjs.Graphics().p("AJhboQmkknhYn4QhZn5EmmjQEmmkH5hZMAGtAmFQh1AVhxAAQl0AAlDjig");
	var mask_graphics_177 = new cjs.Graphics().p("AJtb9Qmskbhnn2Qhnn2EZmsQEamsH2hnMAH0Al3QiHAciCAAQlhAAk5jNg");
	var mask_graphics_178 = new cjs.Graphics().p("AJ6cQQm0kOh2nyQh1n0EMmzQENm0Hzh2MAI6AlnQiYAliTAAQlNAAkvi7g");
	var mask_graphics_179 = new cjs.Graphics().p("AKIciQm8kBiFnuQiEnwD/m7QEBm8HviFMAKBAlWQipAuijAAQk7AAkkipg");
	var mask_graphics_180 = new cjs.Graphics().p("AKWc0QnDj0iTnrQiSnrDxnDQD0nDHriTMALGAlDQi5A3i0AAQkoAAkZiXg");
	var mask_graphics_181 = new cjs.Graphics().p("AKldFQnKjniinmQignnDlnKQDmnKHmihMAMLAktQjIBCjFAAQkWAAkNiGg");
	var mask_graphics_182 = new cjs.Graphics().p("AK0dUQnRjZivnhQiuniDXnQQDYnRHiivMANQAkVQjYBOjVAAQkGAAkAh3g");
	var mask_graphics_183 = new cjs.Graphics().p("ALEdjQnXjMi9nbQi9ndDKnWQDLnXHci9MAOTAj7QjmBcjlAAQj1AAjzhpg");
	var mask_graphics_184 = new cjs.Graphics().p("ALVdxQndi+jLnWQjKnXC7ncQC+ncHWjLMAPWAjfQj0Bqj2AAQjkAAjlhbg");
	var mask_graphics_185 = new cjs.Graphics().p("ALmd+QniiwjYnQQjZnRCunhQCvnhHRjZMAQYAjBQkCB5kHAAQjTAAjXhOg");
	var mask_graphics_186 = new cjs.Graphics().p("AL4eKQnniijmnJQjmnKChnmQCgnnHKjmMARZAiiQkOCIkZAAQjCAAjIhCg");
	var mask_graphics_187 = new cjs.Graphics().p("AMLeVQnsiTjznDQjznDCSnrQCSnrHDjzMASZAiAQkaCZkqAAQiyAAi4g3g");
	var mask_graphics_188 = new cjs.Graphics().p("AMeefQnwiFkAm7QkAm8CEnvQCDnvG7kAMATZAhdQkmCqk8AAQiiAAingtg");
	var mask_graphics_189 = new cjs.Graphics().p("AMxeoQnzh2kNm0QkNm0B1nyQB1nzG0kOMAUWAg5QkwC8lPAAQiRAAiXgkg");
	var mask_graphics_190 = new cjs.Graphics().p("ANFewQn2hokamrQkamsBnn2QBnn3GrkZMAVTAgRQk6DQliAAQiAAAiGgcg");
	var mask_graphics_191 = new cjs.Graphics().p("ANae3Qn5hZknmjQkmmkBZn4QBYn6GiklIWPfoQlDDjl2AAQhwAAhzgUg");
	var mask_graphics_192 = new cjs.Graphics().p("ANve9Qn8hKkymaQkymbBJn7QBKn8GZkyIXKe+QlMD4mLAAQheAAhhgOg");
	var mask_graphics_193 = new cjs.Graphics().p("AOEfCQn9g7k+mRQk+mSA6n9QA7n+GQk9IYDeSQlUENmhAAQhLAAhPgJg");
	var mask_graphics_194 = new cjs.Graphics().p("AOafGQn/gslJmIQlKmIAsn+QAroAGHlJIY7dkQlbEkm4AAQg5AAg7gFg");
	var mask_graphics_195 = new cjs.Graphics().p("AOxfJQoAgelVl+QlVl+Acn/QAdoBF9lUIZyc1QlhE7nQAAQgmAAgngCg");
	var mask_graphics_196 = new cjs.Graphics().p("APIfLQoBgPlgl0Qlgl0AOoAQANoBFzlfIancDQlnFUnpAAIgkAAg");
	var mask_graphics_197 = new cjs.Graphics().p("ABzZiQlrlqgBoAQgBoBFplqIbabRQlqFroAACIgBAAQoAAAlrlpg");
	var mask_graphics_198 = new cjs.Graphics().p("ACAZ7Ql1lfgQn/QgQoBFel1IcNadQlfF2oBARIgqAAQnmAAlmlQg");
	var mask_graphics_199 = new cjs.Graphics().p("ACPaUQl/lUgfn/QgfoBFSl+Ic+ZoQlUF/oAAgQgpADgpAAQnNAAlgk4g");
	var mask_graphics_200 = new cjs.Graphics().p("ACfarQmJlIgun+Qgun/FHmJIdsYxQlIGKn+AuQg+AGg8AAQm1AAlZkhg");
	var mask_graphics_201 = new cjs.Graphics().p("ACvbCQmSk9g9n8Qg9n+E9mSIeZX5Qk9GTn9A+QhRAJhOAAQmeAAlTkKg");
	var mask_graphics_202 = new cjs.Graphics().p("ADBbYQmbkxhMn6QhMn8ExmcIfFXAQkxGcn7BNQhkAOhgAAQmJAAlKj0g");
	var mask_graphics_203 = new cjs.Graphics().p("ADUbtQmkklhbn4Qhan5EkmlIfvWGQkkGkn5BcQh2AVhyAAQlzAAlCjgg");
	var mask_graphics_204 = new cjs.Graphics().p("ADocBQmtkYhpn1Qhpn3EYmtMAgXAVKQkYGtn1BqQiJAciDAAQlfAAk4jMg");
	var mask_graphics_205 = new cjs.Graphics().p("AD9cUQm1kMh4nxQh4nzEMm1MAg+AUMQkMG1nyB5QiZAkiUAAQlMAAkui5g");
	var mask_graphics_206 = new cjs.Graphics().p("AEScnQm8j/iGnuQiHnwD/m8MAhjATOQj+G9nvCHQiqAuilAAQk5AAkking");
	var mask_graphics_207 = new cjs.Graphics().p("AEpc4QnDjyiVnqQiVnrDynEMAiGASPQjyHEnqCWQi7A4i1AAQknAAkYiWg");
	var mask_graphics_208 = new cjs.Graphics().p("AFBdJQnKjlijnlQijnnDknLMAinARPQjkHLnmCkQjKBDjFAAQkWAAkMiFg");
	var mask_graphics_209 = new cjs.Graphics().p("AFZdZQnRjXixngQixniDXnRMAjGAQNQjXHRngCyQjaBQjWAAQkEAAj/h2g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(103).to({graphics:mask_graphics_103,x:204.7,y:160.1}).wait(1).to({graphics:mask_graphics_104,x:204.7,y:158.4}).wait(1).to({graphics:mask_graphics_105,x:204.7,y:156.7}).wait(1).to({graphics:mask_graphics_106,x:204.6,y:155}).wait(1).to({graphics:mask_graphics_107,x:204.6,y:153.3}).wait(1).to({graphics:mask_graphics_108,x:204.6,y:151.5}).wait(1).to({graphics:mask_graphics_109,x:204.6,y:149.8}).wait(1).to({graphics:mask_graphics_110,x:204.6,y:148}).wait(1).to({graphics:mask_graphics_111,x:204.6,y:146.3}).wait(1).to({graphics:mask_graphics_112,x:204.5,y:144.5}).wait(1).to({graphics:mask_graphics_113,x:204.5,y:142.7}).wait(1).to({graphics:mask_graphics_114,x:204.5,y:140.9}).wait(1).to({graphics:mask_graphics_115,x:204.5,y:139.1}).wait(1).to({graphics:mask_graphics_116,x:204.5,y:137.3}).wait(1).to({graphics:mask_graphics_117,x:204.5,y:138.1}).wait(1).to({graphics:mask_graphics_118,x:204.4,y:139.9}).wait(1).to({graphics:mask_graphics_119,x:204.3,y:141.8}).wait(1).to({graphics:mask_graphics_120,x:204.1,y:143.6}).wait(1).to({graphics:mask_graphics_121,x:203.9,y:145.4}).wait(1).to({graphics:mask_graphics_122,x:203.6,y:147.2}).wait(1).to({graphics:mask_graphics_123,x:203.3,y:149}).wait(1).to({graphics:mask_graphics_124,x:202.9,y:150.7}).wait(1).to({graphics:mask_graphics_125,x:202.5,y:152.5}).wait(1).to({graphics:mask_graphics_126,x:202,y:154.3}).wait(1).to({graphics:mask_graphics_127,x:201.5,y:156}).wait(1).to({graphics:mask_graphics_128,x:200.9,y:157.7}).wait(1).to({graphics:mask_graphics_129,x:200.3,y:159.4}).wait(1).to({graphics:mask_graphics_130,x:199.6,y:161.1}).wait(1).to({graphics:mask_graphics_131,x:198.9,y:162.8}).wait(1).to({graphics:mask_graphics_132,x:198.1,y:164.4}).wait(1).to({graphics:mask_graphics_133,x:197.3,y:166}).wait(1).to({graphics:mask_graphics_134,x:196.4,y:167.6}).wait(1).to({graphics:mask_graphics_135,x:195.5,y:169.2}).wait(1).to({graphics:mask_graphics_136,x:194.5,y:170.7}).wait(1).to({graphics:mask_graphics_137,x:193.5,y:172.3}).wait(1).to({graphics:mask_graphics_138,x:192.5,y:173.7}).wait(1).to({graphics:mask_graphics_139,x:191.4,y:175.2}).wait(1).to({graphics:mask_graphics_140,x:190.3,y:176.6}).wait(1).to({graphics:mask_graphics_141,x:189.1,y:178}).wait(1).to({graphics:mask_graphics_142,x:187.9,y:179.3}).wait(1).to({graphics:mask_graphics_143,x:186.6,y:180.6}).wait(1).to({graphics:mask_graphics_144,x:185.3,y:181.9}).wait(1).to({graphics:mask_graphics_145,x:184,y:183.2}).wait(1).to({graphics:mask_graphics_146,x:182.6,y:184.4}).wait(1).to({graphics:mask_graphics_147,x:181.2,y:185.5}).wait(1).to({graphics:mask_graphics_148,x:179.8,y:186.6}).wait(1).to({graphics:mask_graphics_149,x:178.4,y:187.7}).wait(1).to({graphics:mask_graphics_150,x:176.9,y:188.7}).wait(1).to({graphics:mask_graphics_151,x:175.3,y:189.7}).wait(1).to({graphics:mask_graphics_152,x:173.8,y:190.7}).wait(1).to({graphics:mask_graphics_153,x:172.2,y:191.6}).wait(1).to({graphics:mask_graphics_154,x:170.6,y:192.4}).wait(1).to({graphics:mask_graphics_155,x:169,y:193.2}).wait(1).to({graphics:mask_graphics_156,x:167.4,y:194}).wait(1).to({graphics:mask_graphics_157,x:165.7,y:194.7}).wait(1).to({graphics:mask_graphics_158,x:164,y:195.3}).wait(1).to({graphics:mask_graphics_159,x:162.3,y:195.9}).wait(1).to({graphics:mask_graphics_160,x:160.6,y:196.5}).wait(1).to({graphics:mask_graphics_161,x:158.8,y:197}).wait(1).to({graphics:mask_graphics_162,x:157.1,y:197.5}).wait(1).to({graphics:mask_graphics_163,x:155.3,y:197.9}).wait(1).to({graphics:mask_graphics_164,x:153.5,y:198.2}).wait(1).to({graphics:mask_graphics_165,x:151.8,y:198.5}).wait(1).to({graphics:mask_graphics_166,x:150,y:198.8}).wait(1).to({graphics:mask_graphics_167,x:148.2,y:199}).wait(1).to({graphics:mask_graphics_168,x:146.4,y:199.1}).wait(1).to({graphics:mask_graphics_169,x:144.6,y:199.2}).wait(1).to({graphics:mask_graphics_170,x:142.7,y:199.2}).wait(1).to({graphics:mask_graphics_171,x:144.4,y:199.2}).wait(1).to({graphics:mask_graphics_172,x:146.2,y:199.3}).wait(1).to({graphics:mask_graphics_173,x:148,y:199.3}).wait(1).to({graphics:mask_graphics_174,x:149.8,y:199.3}).wait(1).to({graphics:mask_graphics_175,x:151.6,y:199.4}).wait(1).to({graphics:mask_graphics_176,x:153.4,y:199.4}).wait(1).to({graphics:mask_graphics_177,x:155.2,y:199.4}).wait(1).to({graphics:mask_graphics_178,x:156.9,y:199.5}).wait(1).to({graphics:mask_graphics_179,x:158.7,y:199.5}).wait(1).to({graphics:mask_graphics_180,x:160.4,y:199.5}).wait(1).to({graphics:mask_graphics_181,x:162.1,y:199.5}).wait(1).to({graphics:mask_graphics_182,x:163.9,y:199.5}).wait(1).to({graphics:mask_graphics_183,x:165.5,y:199.6}).wait(1).to({graphics:mask_graphics_184,x:167.2,y:199.6}).wait(1).to({graphics:mask_graphics_185,x:168.9,y:199.6}).wait(1).to({graphics:mask_graphics_186,x:170.5,y:199.6}).wait(1).to({graphics:mask_graphics_187,x:172.1,y:199.6}).wait(1).to({graphics:mask_graphics_188,x:173.7,y:199.6}).wait(1).to({graphics:mask_graphics_189,x:175.2,y:199.6}).wait(1).to({graphics:mask_graphics_190,x:176.7,y:199.6}).wait(1).to({graphics:mask_graphics_191,x:178.2,y:199.5}).wait(1).to({graphics:mask_graphics_192,x:179.7,y:199.5}).wait(1).to({graphics:mask_graphics_193,x:181.1,y:199.5}).wait(1).to({graphics:mask_graphics_194,x:182.5,y:199.5}).wait(1).to({graphics:mask_graphics_195,x:183.9,y:199.5}).wait(1).to({graphics:mask_graphics_196,x:185.2,y:199.5}).wait(1).to({graphics:mask_graphics_197,x:186.5,y:199.5}).wait(1).to({graphics:mask_graphics_198,x:187.8,y:199.5}).wait(1).to({graphics:mask_graphics_199,x:189,y:199.6}).wait(1).to({graphics:mask_graphics_200,x:190.1,y:199.6}).wait(1).to({graphics:mask_graphics_201,x:191.3,y:199.6}).wait(1).to({graphics:mask_graphics_202,x:192.4,y:199.6}).wait(1).to({graphics:mask_graphics_203,x:193.4,y:199.7}).wait(1).to({graphics:mask_graphics_204,x:194.4,y:199.7}).wait(1).to({graphics:mask_graphics_205,x:195.4,y:199.7}).wait(1).to({graphics:mask_graphics_206,x:196.3,y:199.8}).wait(1).to({graphics:mask_graphics_207,x:197.2,y:199.8}).wait(1).to({graphics:mask_graphics_208,x:198,y:199.8}).wait(1).to({graphics:mask_graphics_209,x:198.7,y:199.9}).wait(195));

	// Layer 14
	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(25,1,1).p("AMKJvQlIDPlqgEQlpgEkDj5QkDj5gVk/QgUk/DZkDQDakEGOAIQGQAHDODsQDPDtAAEY");
	this.shape_112.setTransform(274.7,275.5);
	this.shape_112._off = true;

	var maskedShapeInstanceList = [this.shape_112];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_112).wait(103).to({_off:false},0).wait(301));

	// Layer 13 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_9 = new cjs.Graphics().p("AgbZ8Ql7lbgXoAMAmogBuQAXIAlaF7QlbF6n/AWIg/ACQnZAAlhlEg");
	var mask_1_graphics_10 = new cjs.Graphics().p("AgBaTQmElPgmn/MAmkgC1QAlH/lOGEQlQGEn/AlQg0AEgyAAQnBAAlbktg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AAZaqQmNlEg0n+MAmdgD8QA0H+lDGOQlEGNn+A0QhHAHhFAAQmpAAlWkWg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AA1bAQmWk4hDn8MAmVgFEQBDH8k4GXQk5GXn7BDQhaALhXAAQmUAAlOkAg");
	var mask_1_graphics_13 = new cjs.Graphics().p("ABRbVQmfkshRn6MAmKgGKQBSH6ksGgQktGfn5BRQhtAShoAAQl/AAlGjsg");
	var mask_1_graphics_14 = new cjs.Graphics().p("ABubpQmnkghgn3MAl+gHRQBgH4kfGoQkiGon2BgQh/AYh5AAQlqAAk+jYg");
	var mask_1_graphics_15 = new cjs.Graphics().p("ACMb9QmwkUhun1MAlwgIWQBuH1kTGwQkVGwn0BuQiPAgiKAAQlXAAk0jEg");
	var mask_1_graphics_16 = new cjs.Graphics().p("ACqcPQm4kHh8nxMAlfgJcQB9HxkHG5QkIG3nwB9QihAoiaAAQlEAAkqiyg");
	var mask_1_graphics_17 = new cjs.Graphics().p("ADJchQm/j7iLntMAlNgKgQCLHtj6HAQj7G/ntCLQixAyiqAAQkzAAkeihg");
	var mask_1_graphics_18 = new cjs.Graphics().p("ADocyQnGjuiZnpMAk4gLlQCaHpjtHHQjvHGnoCZQjAA9i7AAQkhAAkTiQg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AEIdCQnNjhinnkMAkigMoQCnHkjfHNQjhHNnkCnQjQBIjLAAQkPAAkHiAg");
	var mask_1_graphics_20 = new cjs.Graphics().p("AEodRQnTjTi1nfMAkKgNsQC1HfjSHUQjUHTnfC1QjeBUjbAAQj/AAj6hxg");
	var mask_1_graphics_21 = new cjs.Graphics().p("AFIdfQnYjFjDnaMAjwgOuQDDHajFHZQjGHZnaDDQjsBhjrAAQjuAAjuhjg");
	var mask_1_graphics_22 = new cjs.Graphics().p("AFpdsQnei3jQnUMAjUgPwQDQHUi3HfQi4HfnUDQQj6Bvj8AAQjdAAjghWg");
	var mask_1_graphics_23 = new cjs.Graphics().p("AGLd5QnjiqjenOMAi2gQwQDeHOipHkQirHjnODeQkGB+kNAAQjNAAjRhJg");
	var mask_1_graphics_24 = new cjs.Graphics().p("AGteEQnoicjrnHMAiWgRwQDrHHibHpQidHonHDrQkSCOkeAAQi9AAjCg+g");
	var mask_1_graphics_25 = new cjs.Graphics().p("AHPePQnsiOj4nAMAh0gSvQD4HAiNHtQiOHtnAD4QkeCekwAAQisAAizgzg");
	var mask_1_graphics_26 = new cjs.Graphics().p("AHyeYQnyh/kEm5MAhRgTtQEFG5h+HxQiBHwm4EFQkpCwlCAAQicAAiigqg");
	var mask_1_graphics_27 = new cjs.Graphics().p("AIUehQn0hxkRmyMAgsgUpQESGxhxH0QhyH0mwESQk0DClUAAQiMAAiSghg");
	var mask_1_graphics_28 = new cjs.Graphics().p("AI4eoQn4hikdmpMAgFgVmQEeGphiH3QhkH4moEdQk9DVloAAQh7AAiAgZg");
	var mask_1_graphics_29 = new cjs.Graphics().p("AJbevQn7hUkpmhIfd2gQEqGhhUH6QhVH5mgEqQlGDpl7AAQhqAAhvgSg");
	var mask_1_graphics_30 = new cjs.Graphics().p("AJ+e1Qn8hGk1mYIey3YQE2GXhFH8QhGH8mYE1QlOD+mQAAQhZAAhdgMg");
	var mask_1_graphics_31 = new cjs.Graphics().p("AKie5Qn/g3lAmPIeG4QQFBGOg2H9Qg3H+mPFCQlVETmmAAQhHAAhKgIg");
	var mask_1_graphics_32 = new cjs.Graphics().p("ALGe9QoAgolMmGIdY5HQFNGEgnH/QgpH/mFFNQlcEqm9AAQg1AAg2gEg");
	var mask_1_graphics_33 = new cjs.Graphics().p("ALpe/QoAgZlYl8Icq59QFYF7gZIAQgaIAl7FYQljFBnUAAQgiAAgjgCg");
	var mask_1_graphics_34 = new cjs.Graphics().p("AMNfAQoBgKlilyIb46xQFjFxgJIAQgMIBlxFjQloFZntAAIgdgBg");
	var mask_1_graphics_35 = new cjs.Graphics().p("Ag9ZeIbG7kQFuFmAFIBQADIAlnFuQloFtn/AFIgNAAQn5AAloljg");
	var mask_1_graphics_36 = new cjs.Graphics().p("AgjZ2IaS8VQF4FcAUIAQASIAlcF4QldF4oAATIg1ABQnfAAljlLg");
	var mask_1_graphics_37 = new cjs.Graphics().p("AgJaOIZe9FQGBFRAjH/QAhIAlSGBQlRGCn/AiQgvADguAAQnHAAldkzg");
	var mask_1_graphics_38 = new cjs.Graphics().p("AARalIYp9zQGLFFAxH+QAvH/lGGLQlGGLn+AxQhCAGhAAAQmwAAlYkcg");
	var mask_1_graphics_39 = new cjs.Graphics().p("AAta7IXx+gQGUE6BAH9QA+H9k6GUQk8GVn8A/QhVAKhSAAQmaAAlQkGg");
	var mask_1_graphics_40 = new cjs.Graphics().p("ABJbRIW4/LQGdEuBPH6QBNH7kvGdQkvGen6BOQhoAQhkAAQmEAAlJjxg");
	var mask_1_graphics_41 = new cjs.Graphics().p("ABmblIV+/0QGlEiBeH4QBbH5kjGlQkjGmn3BdQh6AWh1AAQlwAAlAjdg");
	var mask_1_graphics_42 = new cjs.Graphics().p("ACDb5MAVDggcQGuEXBrH0QBqH2kWGtQkXGvn1BqQiLAeiGAAQlcAAk3jJg");
	var mask_1_graphics_43 = new cjs.Graphics().p("AChcMMAUGghCQG2EKB6HxQB5HykKG2QkLG2nxB5QicAmiXAAQlJAAkti2g");
	var mask_1_graphics_44 = new cjs.Graphics().p("ADAcdMATJghmQG9D+CIHtQCHHvj9G9Qj+G+nuCHQisAwinAAQk3AAkiimg");
	var mask_1_graphics_45 = new cjs.Graphics().p("ADfcvMASKgiJQHFDxCWHpQCVHrjwHEQjxHEnqCWQi8A6i3AAQklAAkXiUg");
	var mask_1_graphics_46 = new cjs.Graphics().p("AD/c/MARKgipQHMDjCkHlQCjHmjjHLQjkHLnlCkQjMBFjHAAQkUAAkKiEg");
	var mask_1_graphics_47 = new cjs.Graphics().p("AEfdOMAQKgjIQHSDWCyHgQCxHhjWHSQjWHSngCxQjbBRjXAAQkDAAj+h1g");
	var mask_1_graphics_48 = new cjs.Graphics().p("AE/ddMAPKgjlQHXDJDAHaQC/HcjIHXQjJHYnbC/QjpBejnAAQjzAAjxhmg");
	var mask_1_graphics_49 = new cjs.Graphics().p("AFgdqMAOIgkAQHdC7DOHVQDMHWi7HdQi7HenVDNQj2Brj5AAQjhAAjkhZg");
	var mask_1_graphics_50 = new cjs.Graphics().p("AGCd3MANEgkZQHjCtDbHOQDaHRitHiQiuHinPDbQkDB6kJAAQjRAAjVhMg");
	var mask_1_graphics_51 = new cjs.Graphics().p("AGkeCMAMBgkvQHnCfDoHHQDnHKifHnQifHonIDnQkQCKkaAAQjBAAjGhBg");
	var mask_1_graphics_52 = new cjs.Graphics().p("AHGeNMAK9glFQHrCRD2HBQD0HDiRHrQiRHsnCD1QkbCakrAAQixAAi3g2g");
	var mask_1_graphics_53 = new cjs.Graphics().p("AHoeXMAJ4glYQHwCDECG5QECG8iDHvQiDHwm6EBQknCsk9AAQihAAingsg");
	var mask_1_graphics_54 = new cjs.Graphics().p("AILegMAIzglqQHzB1EPGyQEOG0h0HzQh1HzmzEOQkxC+lPAAQiRAAiWgjg");
	var mask_1_graphics_55 = new cjs.Graphics().p("AIueoMAHtgl5QH3BmEbGqQEbGshmH2QhnH3mqEaQk7DRljAAQiAAAiFgbg");
	var mask_1_graphics_56 = new cjs.Graphics().p("AJSeuMAGngmFQH5BXEnGiQEnGkhYH4QhXH6mjEmQlEDkl2AAQhvAAhzgUg");
	var mask_1_graphics_57 = new cjs.Graphics().p("AJ1e0MAFhgmRQH7BJE0GZQEyGbhJH7QhJH8maEzQlMD4mLAAQheAAhhgOg");
	var mask_1_graphics_58 = new cjs.Graphics().p("AKZe5MAEZgmaQH+A6E/GRQE+GRg6H9Qg6H+mRE+QlUEOmhAAQhMAAhOgJg");
	var mask_1_graphics_59 = new cjs.Graphics().p("AK8e9MADTgmhQH/ArFLGIQFJGIgrH+QgsH/mHFKQlbEkm3AAQg6AAg8gFg");
	var mask_1_graphics_60 = new cjs.Graphics().p("ALgfAMACMgmnQH/AdFWF+QFVF+gdH/QgdIBl9FVQlhE7nPAAQgnAAgogCg");
	var mask_1_graphics_61 = new cjs.Graphics().p("AMEfBMABEgmpQIBAOFgF0QFgF0gOIAQgOIBl0FgQlmFTnoAAIgngBg");
	var mask_1_graphics_62 = new cjs.Graphics().p("AMlnpQIAAAFsFpQFqFqABIAQAAIBlpFrQlrFroAABg");
	var mask_1_graphics_63 = new cjs.Graphics().p("AMBnoQIAgPF2FfQF1FfAPIAQAPIBlfF0QlfF2oBAPg");
	var mask_1_graphics_64 = new cjs.Graphics().p("ALdnlQIAgeF/FUQF/FUAeH/QAeIAlUF/QlVGAn/Aeg");
	var mask_1_graphics_65 = new cjs.Graphics().p("AK6nhQH+gtGJFJQGJFJAtH+QAsH/lIGIQlKGKn/Asg");
	var mask_1_graphics_66 = new cjs.Graphics().p("AKWncQH9g7GSE9QGSE+A8H8QA7H+k9GRQk+GTn9A8g");
	var mask_1_graphics_67 = new cjs.Graphics().p("AJynVQH7hKGcEyQGbEyBKH6QBKH8kyGaQkyGcn7BKg");
	var mask_1_graphics_68 = new cjs.Graphics().p("AJPnMQH5hZGkEmQGjEmBZH4QBZH5kmGjQkmGln5BZg");
	var mask_1_graphics_69 = new cjs.Graphics().p("AIsnCQH2hoGsEaQGsEaBnH1QBoH3kaGrQkaGtn2Bng");
	var mask_1_graphics_70 = new cjs.Graphics().p("AIJm3QHzh1G0ENQG0EOB1HxQB2H0kNGzQkOG1nzB1g");
	var mask_1_graphics_71 = new cjs.Graphics().p("AHmmqQHviEG8EBQG8EBCDHuQCFHwkBG7QkBG8nvCEg");
	var mask_1_graphics_72 = new cjs.Graphics().p("AHEmbQHriSHDDzQHDD1CSHqQCSHrj0HDQj0HDnrCSg");
	var mask_1_graphics_73 = new cjs.Graphics().p("AGhmLQHnigHKDmQHKDoCgHlQCgHnjmHJQjnHLnnCgg");
	var mask_1_graphics_74 = new cjs.Graphics().p("AGAl6QHiiuHQDZQHQDbCuHgQCvHjjaHPQjaHRnhCug");
	var mask_1_graphics_75 = new cjs.Graphics().p("AFelnQHdi8HWDMQHXDNC8HbQC8HdjMHWQjMHXndC8g");
	var mask_1_graphics_76 = new cjs.Graphics().p("AE9lSQHXjKHdC+QHbC/DKHWQDKHXi+HcQi/HcnXDKg");
	var mask_1_graphics_77 = new cjs.Graphics().p("AEdk8QHRjYHhCwQHhCyDYHQQDXHRiwHhQixHinRDXg");
	var mask_1_graphics_78 = new cjs.Graphics().p("AD9klQHKjlHnCiQHmCkDkHJQDlHLijHmQijHnnKDkg");
	var mask_1_graphics_79 = new cjs.Graphics().p("ADdkNQHEjxHrCUQHqCVDyHDQDyHEiVHqQiUHrnEDyg");
	var mask_1_graphics_80 = new cjs.Graphics().p("AC+jzQG9j+HvCFQHuCID/G7QD/G9iHHuQiGHwm9D+g");
	var mask_1_graphics_81 = new cjs.Graphics().p("ACgjYQG1kLHyB4QHzB5ELG0QELG1h4HyQh4Hzm1ELg");
	var mask_1_graphics_82 = new cjs.Graphics().p("ACCi7QGtkYH2BpQH2BrEXGsQEYGuhpH1QhqH2muEYg");
	var mask_1_graphics_83 = new cjs.Graphics().p("ABkidQGmkkH4BaQH5BdEjGjQElGmhbH4QhcH5mlEkg");
	var mask_1_graphics_84 = new cjs.Graphics().p("ABIh+QGckwH7BMQH7BOEwGbQEwGdhMH6QhNH7mdEwg");
	var mask_1_graphics_85 = new cjs.Graphics().p("AAsheQGTk7H9A9QH9A/E8GSQE8GUg+H8Qg+H+mUE8g");
	var mask_1_graphics_86 = new cjs.Graphics().p("AAQg8QGKlHH/AuQH+AxFHGJQFIGKgvH+QgwH/mKFHg");
	var mask_1_graphics_87 = new cjs.Graphics().p("AgKgZQGAlTH/AgQIAAiFSF/QFTGBggH/QghIAmBFTg");
	var mask_1_graphics_88 = new cjs.Graphics().p("AgkAKQF2ldIAARQIBATFdF2QFeF3gSH/QgSIBl3Feg");
	var mask_1_graphics_89 = new cjs.Graphics().p("Ag+AvQFslnIAACQIBAEFoFrQFpFtgDIAQgEIBlsFpg");
	var mask_1_graphics_90 = new cjs.Graphics().p("AhXBVQFhlyIBgMQIBgLFyFhQFzFiALIAQAMIBliFzg");
	var mask_1_graphics_91 = new cjs.Graphics().p("AhvB8QFWl7IAgcQIAgZF9FWQF8FXAbIAQAaIAlXF9g");
	var mask_1_graphics_92 = new cjs.Graphics().p("AiHCkQFLmFH/gqQIAgoGGFLQGGFMApH+QAqIAlMGGg");
	var mask_1_graphics_93 = new cjs.Graphics().p("AieDOQFAmPH+g5QH+g3GPFAQGQFBA4H9QA4H+lBGQg");
	var mask_1_graphics_94 = new cjs.Graphics().p("Ai0D4QE0mYH8hHQH8hGGZE0QGZE1BGH7QBHH9k1GZg");
	var mask_1_graphics_95 = new cjs.Graphics().p("AjJEjQEomhH6hVQH6hVGhEoQGiEqBVH4QBVH7kpGhg");
	var mask_1_graphics_96 = new cjs.Graphics().p("AjdFPQEcmpH2hkQH4hjGpEdQGqEcBkH2QBkH4kdGqg");
	var mask_1_graphics_97 = new cjs.Graphics().p("AjxF8QEQmxHzhzQH1hxGxEQQGyEQByHzQBzH1kRGyg");
	var mask_1_graphics_98 = new cjs.Graphics().p("AkEGqQEEm5HviBQHxiAG5EEQG7EDCAHwQCAHxkEG5g");
	var mask_1_graphics_99 = new cjs.Graphics().p("AkVHYQD3nBHriOQHtiOHAD3QHCD2COHsQCPHtj3HBg");
	var mask_1_graphics_100 = new cjs.Graphics().p("AkmIHQDqnIHnicQHoicHIDqQHIDpCdHnQCdHpjqHIg");
	var mask_1_graphics_101 = new cjs.Graphics().p("Ak2I3QDdnOHiirQHkiqHODdQHPDcCqHjQCrHkjdHOg");
	var mask_1_graphics_102 = new cjs.Graphics().p("AlFJoQDPnVHdi4QHfi4HUDPQHVDPC5HdQC5HfjQHVg");
	var mask_1_graphics_103 = new cjs.Graphics().p("AlTKYQDBnaHYjGQHZjGHaDCQHbDBDGHYQDHHZjCHbg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_1_graphics_9,x:204.4,y:198.4}).wait(1).to({graphics:mask_1_graphics_10,x:204.4,y:198.4}).wait(1).to({graphics:mask_1_graphics_11,x:204.4,y:198.4}).wait(1).to({graphics:mask_1_graphics_12,x:204.5,y:198.4}).wait(1).to({graphics:mask_1_graphics_13,x:204.5,y:198.5}).wait(1).to({graphics:mask_1_graphics_14,x:204.5,y:198.5}).wait(1).to({graphics:mask_1_graphics_15,x:204.5,y:198.5}).wait(1).to({graphics:mask_1_graphics_16,x:204.5,y:198.5}).wait(1).to({graphics:mask_1_graphics_17,x:204.5,y:198.6}).wait(1).to({graphics:mask_1_graphics_18,x:204.6,y:198.6}).wait(1).to({graphics:mask_1_graphics_19,x:204.6,y:198.6}).wait(1).to({graphics:mask_1_graphics_20,x:204.6,y:198.6}).wait(1).to({graphics:mask_1_graphics_21,x:204.6,y:198.6}).wait(1).to({graphics:mask_1_graphics_22,x:204.6,y:198.6}).wait(1).to({graphics:mask_1_graphics_23,x:204.6,y:198.6}).wait(1).to({graphics:mask_1_graphics_24,x:204.6,y:198.6}).wait(1).to({graphics:mask_1_graphics_25,x:204.5,y:198.6}).wait(1).to({graphics:mask_1_graphics_26,x:204.5,y:198.6}).wait(1).to({graphics:mask_1_graphics_27,x:204.5,y:198.6}).wait(1).to({graphics:mask_1_graphics_28,x:204.5,y:198.5}).wait(1).to({graphics:mask_1_graphics_29,x:204.5,y:198.5}).wait(1).to({graphics:mask_1_graphics_30,x:204.4,y:198.5}).wait(1).to({graphics:mask_1_graphics_31,x:204.4,y:198.5}).wait(1).to({graphics:mask_1_graphics_32,x:204.4,y:198.5}).wait(1).to({graphics:mask_1_graphics_33,x:204.4,y:198.5}).wait(1).to({graphics:mask_1_graphics_34,x:204.4,y:198.5}).wait(1).to({graphics:mask_1_graphics_35,x:204.4,y:198.5}).wait(1).to({graphics:mask_1_graphics_36,x:204.4,y:198.5}).wait(1).to({graphics:mask_1_graphics_37,x:204.4,y:198.5}).wait(1).to({graphics:mask_1_graphics_38,x:204.4,y:198.5}).wait(1).to({graphics:mask_1_graphics_39,x:204.4,y:198.5}).wait(1).to({graphics:mask_1_graphics_40,x:204.4,y:198.6}).wait(1).to({graphics:mask_1_graphics_41,x:204.5,y:198.6}).wait(1).to({graphics:mask_1_graphics_42,x:204.5,y:198.6}).wait(1).to({graphics:mask_1_graphics_43,x:204.5,y:198.6}).wait(1).to({graphics:mask_1_graphics_44,x:204.5,y:198.7}).wait(1).to({graphics:mask_1_graphics_45,x:204.5,y:198.7}).wait(1).to({graphics:mask_1_graphics_46,x:204.5,y:198.7}).wait(1).to({graphics:mask_1_graphics_47,x:204.5,y:198.7}).wait(1).to({graphics:mask_1_graphics_48,x:204.5,y:198.7}).wait(1).to({graphics:mask_1_graphics_49,x:204.5,y:198.7}).wait(1).to({graphics:mask_1_graphics_50,x:204.5,y:198.7}).wait(1).to({graphics:mask_1_graphics_51,x:204.5,y:198.7}).wait(1).to({graphics:mask_1_graphics_52,x:204.5,y:198.7}).wait(1).to({graphics:mask_1_graphics_53,x:204.5,y:198.7}).wait(1).to({graphics:mask_1_graphics_54,x:204.5,y:198.7}).wait(1).to({graphics:mask_1_graphics_55,x:204.5,y:198.7}).wait(1).to({graphics:mask_1_graphics_56,x:204.4,y:198.6}).wait(1).to({graphics:mask_1_graphics_57,x:204.4,y:198.6}).wait(1).to({graphics:mask_1_graphics_58,x:204.4,y:198.6}).wait(1).to({graphics:mask_1_graphics_59,x:204.4,y:198.6}).wait(1).to({graphics:mask_1_graphics_60,x:204.4,y:198.6}).wait(1).to({graphics:mask_1_graphics_61,x:204.4,y:198.6}).wait(1).to({graphics:mask_1_graphics_62,x:204.4,y:198.6}).wait(1).to({graphics:mask_1_graphics_63,x:204.4,y:198.5}).wait(1).to({graphics:mask_1_graphics_64,x:204.4,y:198.5}).wait(1).to({graphics:mask_1_graphics_65,x:204.4,y:198.3}).wait(1).to({graphics:mask_1_graphics_66,x:204.4,y:198.2}).wait(1).to({graphics:mask_1_graphics_67,x:204.4,y:197.9}).wait(1).to({graphics:mask_1_graphics_68,x:204.5,y:197.7}).wait(1).to({graphics:mask_1_graphics_69,x:204.5,y:197.3}).wait(1).to({graphics:mask_1_graphics_70,x:204.5,y:196.9}).wait(1).to({graphics:mask_1_graphics_71,x:204.5,y:196.5}).wait(1).to({graphics:mask_1_graphics_72,x:204.6,y:196}).wait(1).to({graphics:mask_1_graphics_73,x:204.6,y:195.5}).wait(1).to({graphics:mask_1_graphics_74,x:204.6,y:194.9}).wait(1).to({graphics:mask_1_graphics_75,x:204.6,y:194.3}).wait(1).to({graphics:mask_1_graphics_76,x:204.6,y:193.6}).wait(1).to({graphics:mask_1_graphics_77,x:204.6,y:192.9}).wait(1).to({graphics:mask_1_graphics_78,x:204.6,y:192.1}).wait(1).to({graphics:mask_1_graphics_79,x:204.6,y:191.3}).wait(1).to({graphics:mask_1_graphics_80,x:204.6,y:190.4}).wait(1).to({graphics:mask_1_graphics_81,x:204.6,y:189.5}).wait(1).to({graphics:mask_1_graphics_82,x:204.5,y:188.6}).wait(1).to({graphics:mask_1_graphics_83,x:204.5,y:187.6}).wait(1).to({graphics:mask_1_graphics_84,x:204.5,y:186.5}).wait(1).to({graphics:mask_1_graphics_85,x:204.5,y:185.5}).wait(1).to({graphics:mask_1_graphics_86,x:204.5,y:184.3}).wait(1).to({graphics:mask_1_graphics_87,x:204.5,y:183.2}).wait(1).to({graphics:mask_1_graphics_88,x:204.5,y:182}).wait(1).to({graphics:mask_1_graphics_89,x:204.5,y:180.8}).wait(1).to({graphics:mask_1_graphics_90,x:204.5,y:179.5}).wait(1).to({graphics:mask_1_graphics_91,x:204.5,y:178.2}).wait(1).to({graphics:mask_1_graphics_92,x:204.5,y:176.8}).wait(1).to({graphics:mask_1_graphics_93,x:204.5,y:175.5}).wait(1).to({graphics:mask_1_graphics_94,x:204.5,y:174.1}).wait(1).to({graphics:mask_1_graphics_95,x:204.6,y:172.6}).wait(1).to({graphics:mask_1_graphics_96,x:204.6,y:171.2}).wait(1).to({graphics:mask_1_graphics_97,x:204.6,y:169.7}).wait(1).to({graphics:mask_1_graphics_98,x:204.6,y:168.1}).wait(1).to({graphics:mask_1_graphics_99,x:204.7,y:166.6}).wait(1).to({graphics:mask_1_graphics_100,x:204.7,y:165}).wait(1).to({graphics:mask_1_graphics_101,x:204.7,y:163.4}).wait(1).to({graphics:mask_1_graphics_102,x:204.7,y:161.8}).wait(1).to({graphics:mask_1_graphics_103,x:204.7,y:160.1}).wait(301));

	// Layer 12
	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(25,1,1).p("AsXCIQAyiKBoh9QDZkDGQAHQGPAHDODtQDODrABEY");
	this.shape_113.setTransform(276.9,230.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(25,1,1).p("AMKJvQlIDPlqgEQlpgEkDj5QkDj5gVk/QgUk/DZkDQDakEGOAIQGQAHDODsQDPDtAAEY");
	this.shape_114.setTransform(274.7,275.5);

	var maskedShapeInstanceList = [this.shape_113,this.shape_114];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_113}]},9).to({state:[{t:this.shape_114}]},94).wait(301));

	// Base
	this.instance_4 = new lib.Symbol1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(275,275);
	this.instance_4.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(404));

	// Background
	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#F59E9E").ss(3,1,1).p("AMvQ5I5dAAMAAAghxIZdAAg");
	this.shape_115.setTransform(275,275,3.373,2.543);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_116.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_116},{t:this.shape_115}]}).wait(404));

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