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
	this.shape.graphics.f("#FFFFFF").s().p("AnXdBQg7gyAAhIIAA35IkNAAQisAAAAiuQAAitCsAAIENAAIAAuNQAAlhDtj7QDrj8FkAAQDWAAByAyQBxA0CACeQBpB9AAB3QAACBiiAaQgGACgRAAQg/AAgohGIhNiKQh4h6i0AAQjKAAiMCLQiXCVAADtIAAONIEhAAQCsAAAACsQAAC0iuAAIkfgFIAAXgQgCDGibgBQhIAAg4gyg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.2,-190.7,194.5,381.5);


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
	this.instance.setTransform(-7.3,-104.9,1,1,-59.5,0,0,0.5,-17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.4,rotation:90,guide:{path:[-7.2,-104.8,9.4,-96.8,23.5,-83.3,58,-50.3,57.9,-3.8,57.8,42.7,23.1,75.6,-2.1,99.5,-35,106]}},89).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Av5M+QlBqfD3q9QD3q9KflEQKflAK+D3MgSqA09Qq9j3lCqgg");
	var mask_graphics_1 = new cjs.Graphics().p("AwqMVQktqoENq2QENq1KpkuQKoksK2ENMgURA0WQq2kMktqqg");
	var mask_graphics_2 = new cjs.Graphics().p("AxaLsQkXqxEjqtQEhqsKykZQKxkXKtEiMgV4AztQqtkikYqzg");
	var mask_graphics_3 = new cjs.Graphics().p("AyHLDQkCq5E4qjQE2qkK6kDQK6kBKkE3MgXeAzAQqkk3kCq8g");
	var mask_graphics_4 = new cjs.Graphics().p("AyzKbQjsrAFMqbQFMqZLCjuQLBjrKaFMMgZCAyQQqalMjtrDg");
	var mask_graphics_5 = new cjs.Graphics().p("AzdJyQjWrGFhqQQFgqPLJjYQLIjVKPFgMgakAxdQqQlhjXrKg");
	var mask_graphics_6 = new cjs.Graphics().p("A0EJKQjArNF1qFQF0qDLPjCQLOi/KEF0MgcGAwnQqEl1jArQg");
	var mask_graphics_7 = new cjs.Graphics().p("A0qIiQiprSGIp5QGIp4LUirQLVipJ4GIMgdlAvtQp5mIiqrWg");
	var mask_graphics_8 = new cjs.Graphics().p("A1NH7QiUrYGcpsQGcpsLYiVQLaiSJsGcMgfDAuxQpsmciTrag");
	var mask_graphics_9 = new cjs.Graphics().p("A1vHUQh8rcGvpgQGupeLdh+QLeh8JfGvMggfAtyQpfmvh9reg");
	var mask_graphics_10 = new cjs.Graphics().p("A2OGtQhmrgHCpRQHApRLhhoQLihlJRHCMgh5AswQpRnBhmrig");
	var mask_graphics_11 = new cjs.Graphics().p("A2rGGQhPriHUpDQHTpDLjhRQLkhOJDHUMgjQArsQpDnUhPrlg");
	var mask_graphics_12 = new cjs.Graphics().p("A3GFgQg4rkHmo1QHkozLmg6QLmg3I0HlMgklAqlQo0nlg5rog");
	var mask_graphics_13 = new cjs.Graphics().p("A3eE7QghrlH3omQH1okLngjQLoggIlH2Mgl5ApbQoln2ghrpg");
	var mask_graphics_14 = new cjs.Graphics().p("A30EXQgKrnIHoVQIHoVLogMQLogJIVIHMgnKAoPQoVoHgKrpg");
	var mask_graphics_15 = new cjs.Graphics().p("A4HDzQANrmIXoGQIXoELoALQLoAOIFIXMgoYAnAQoFoXANrpg");
	var mask_graphics_16 = new cjs.Graphics().p("A4YDQQAjrmIon0QImn0LnAiQLoAlH0InMgpkAlvQn0onAkrog");
	var mask_graphics_17 = new cjs.Graphics().p("A4nCtQA7rkI3njQI1njLmA6QLmA8HiI2MgqtAkbQnjo2A7rng");
	var mask_graphics_18 = new cjs.Graphics().p("A4zCLQBSrhJFnSQJEnRLkBRQLjBTHRJFMgr0AjFQnRpFBSrlg");
	var mask_graphics_19 = new cjs.Graphics().p("A49BqQBpreJTnAQJTm+LgBnQLhBqG/JTMgs5AhtQm/pTBprig");
	var mask_graphics_20 = new cjs.Graphics().p("A5EBKQB/rbJhmtQJgmrLdB+QLdCAGsJhMgt6AgTQmspgCArfg");
	var mask_graphics_21 = new cjs.Graphics().p("A5JArQCWrXJumaQJtmYLYCUQLZCXGZJuMgu4Ae3QmZptCWrag");
	var mask_graphics_22 = new cjs.Graphics().p("A5MAMQCtrSJ6mGQJ5mFLUCrQLUCuGGJ5Mgv1AdaQmFp6CsrVg");
	var mask_graphics_23 = new cjs.Graphics().p("A5MgQQDDrOKGlyQKFlyLODCQLODEFyKFMgwtAb7QlyqGDDrOg");
	var mask_graphics_24 = new cjs.Graphics().p("A5KgtQDZrHKRleQKRleLHDYQLIDaFeKRMgxjAaYQleqQDZrIg");
	var mask_graphics_25 = new cjs.Graphics().p("A5FhJQDvrAKblKQKblJLBDuQLADwFKKbMgyWAY2QlJqbDvrBg");
	var mask_graphics_26 = new cjs.Graphics().p("A4+hkQEEq5Kmk0QKjk1K6EEQK5EFE1KlMgzGAXSQk0qlEFq5g");
	var mask_graphics_27 = new cjs.Graphics().p("A41h/QEaqvKvkgQKskfKyEZQKxEbEfKuMgzyAVrQkfquEaqxg");
	var mask_graphics_28 = new cjs.Graphics().p("A4piYQEuqnK4kKQK1kKKpEuQKnEwEKK3Mg0bAUEQkKq2Ewqog");
	var mask_graphics_29 = new cjs.Graphics().p("A4ciwQFEqdLAj1QK9j0KfFDQKdFFD1K+Mg1CAScQj0q/FEqdg");
	var mask_graphics_30 = new cjs.Graphics().p("A4LjIQFYqTLHjeQLEjfKVFYQKTFaDeLFMg1kAQzQjfrGFaqUg");
	var mask_graphics_31 = new cjs.Graphics().p("A35jeQFtqILNjJQLLjIKJFsQKIFuDJLLMg2EAPJQjIrNFtqIg");
	var mask_graphics_32 = new cjs.Graphics().p("A3kj0QGAp8LTiyQLRiyJ+GAQJ9GBCyLSMg2gANdQizrTGCp9g");
	var mask_graphics_33 = new cjs.Graphics().p("A3NkIQGUpwLYicQLWicJyGUQJwGVCcLXMg25ALwQicrXGVpxg");
	var mask_graphics_34 = new cjs.Graphics().p("A20kbQGnpjLdiGQLaiFJlGnQJkGoCFLbMg3PAKEQiFrcGopkg");
	var mask_graphics_35 = new cjs.Graphics().p("A2ZktQG6pWLhhvQLehuJYG5QJWG7BuLfMg3hAIWQhurgG6pWg");
	var mask_graphics_36 = new cjs.Graphics().p("A17k+QHMpILkhYQLhhXJKHLQJIHOBXLhMg3vAGoQhYrjHNpIg");
	var mask_graphics_37 = new cjs.Graphics().p("A1blOQHeo5LmhBQLjhBI8HeQI5HfBBLkMg37AE5QhBrlHfo6g");
	var mask_graphics_38 = new cjs.Graphics().p("A05ldQHwoqLngqQLlgpItHvQIqHvAqLnMg4DADKQgqrnHworg");
	var mask_graphics_39 = new cjs.Graphics().p("A0UlqQIAobLogSQLmgTIdIAQIbIBATLnMg4IABbQgTroICobg");
	var mask_graphics_40 = new cjs.Graphics().p("A8ENzQAEroISoLQIRoLLoAFQLnAEINIQQIKIRgELog");
	var mask_graphics_41 = new cjs.Graphics().p("A8DMgQAbroIin6QIgn6LoAbQLmAbH8IhQH6IhgbLng");
	var mask_graphics_42 = new cjs.Graphics().p("A8CLMQAyrlIynqQIvnpLmAyQLmAzHrIwQHpIwgzLmg");
	var mask_graphics_43 = new cjs.Graphics().p("A8AJ6QBJrkJAnYQI/nYLkBKQLkBJHZI/QHXI/hJLkg");
	var mask_graphics_44 = new cjs.Graphics().p("A79InQBgrhJOnGQJNnFLiBgQLhBgHHJNQHFJNhgLig");
	var mask_graphics_45 = new cjs.Graphics().p("A76HnQBxreJam4QJXm3LfByQLfBxG5JYQG3JZhyLfg");
	var mask_graphics_46 = new cjs.Graphics().p("A73GoQCDrcJkmpQJimpLcCEQLcCDGqJjQGpJiiELcg");
	var mask_graphics_47 = new cjs.Graphics().p("A7zFoQCVrYJtmaQJsmaLZCVQLYCVGcJsQGaJtiVLZg");
	var mask_graphics_48 = new cjs.Graphics().p("A7vEpQCmrUJ4mMQJ2mKLVCmQLUCnGNJ2QGKJ2imLVg");
	var mask_graphics_49 = new cjs.Graphics().p("A7qDrQC4rQKAl9QJ/l7LRC4QLQC3F+KAQF7J/i4LRg");
	var mask_graphics_50 = new cjs.Graphics().p("A7lCsQDJrLKKltQKIlsLMDJQLMDJFuKJQFrKIjJLMg");
	var mask_graphics_51 = new cjs.Graphics().p("A7fBuQDarGKTldQKQldLHDbQLHDaFeKRQFcKRjaLHg");
	var mask_graphics_52 = new cjs.Graphics().p("A7ZAxQDsrBKalNQKZlNLCDsQLBDrFOKZQFMKZjrLCg");
	var mask_graphics_53 = new cjs.Graphics().p("A7SgLQD9q8Kik9QKgk9K8D8QK7D8E/KiQE8Kgj8K8g");
	var mask_graphics_54 = new cjs.Graphics().p("A7KhIQENq2KqktQKnksK2ENQK1ENEuKpQEsKokNK2g");
	var mask_graphics_55 = new cjs.Graphics().p("A7CiEQEdqvKxkcQKvkcKvEeQKuEdEeKvQEbKwkdKvg");
	var mask_graphics_56 = new cjs.Graphics().p("A66i/QEuqoK4kMQK1kLKoEuQKnEtEOK3QEKK2kuKog");
	var mask_graphics_57 = new cjs.Graphics().p("A6xj6QE/qhK9j7QK7j6KhE+QKgE+D9K9QD5K8k+Kgg");
	var mask_graphics_58 = new cjs.Graphics().p("A6nk1QFOqYLEjqQLAjqKaFOQKYFODrLDQDpLClOKZg");
	var mask_graphics_59 = new cjs.Graphics().p("A6dluQFeqRLJjZQLGjYKRFeQKQFeDbLIQDXLHleKRg");
	var mask_graphics_60 = new cjs.Graphics().p("A6SmnQFtqILOjIQLLjHKJFuQKHFtDJLNQDHLMluKIg");
	var mask_graphics_61 = new cjs.Graphics().p("A6HnfQF9p/LSi3QLQi2KAF9QJ+F9C4LRQC1LSl9J/g");
	var mask_graphics_62 = new cjs.Graphics().p("A58oXQGMp1LXimQLUikJ2GMQJ1GMCnLVQCkLWmMJ2g");
	var mask_graphics_63 = new cjs.Graphics().p("A5wpNQGbpsLbiUQLXiTJtGbQJrGbCVLZQCTLambJsg");
	var mask_graphics_64 = new cjs.Graphics().p("A5kqDQGrpiLdiCQLbiCJjGrQJhGpCELcQCBLdmrJig");
	var mask_graphics_65 = new cjs.Graphics().p("A5Xq4QG5pXLhhxQLdhwJYG5QJXG4ByLfQBwLgm5JYg");
	var mask_graphics_66 = new cjs.Graphics().p("A5KrsQHHpNLkheQLghfJNHHQJMHHBhLiQBdLinHJNg");
	var mask_graphics_67 = new cjs.Graphics().p("A48sfQHVpCLlhNQLjhMJCHVQJBHVBOLjQBMLlnVJBg");
	var mask_graphics_68 = new cjs.Graphics().p("A4utRQHjo2Lng7QLkg7I2HjQI2HiA9LlQA6LmnjI3g");
	var mask_graphics_69 = new cjs.Graphics().p("A4guCQHxoqLogqQLlgpIrHxQIqHwArLmQAoLnnwIrg");
	var mask_graphics_70 = new cjs.Graphics().p("A4RuyQH9oeLpgYQLmgXIfH+QIeH9AZLnQAWLon9Ifg");
	var mask_graphics_71 = new cjs.Graphics().p("A4CvgQIKoSLqgGQLmgFISIKQISIKAHLoQAELooKISg");
	var mask_graphics_72 = new cjs.Graphics().p("A3zwOQIXoFLpAMQLnAMIFIYQIFIWgLLoQgNLooXIFg");
	var mask_graphics_73 = new cjs.Graphics().p("A3jw6QIjn5LpAfQLlAeH5IjQH4IjgdLnQgfLoojH4g");
	var mask_graphics_74 = new cjs.Graphics().p("A3TxmQIvnrLoAxQLkAwHsIvQHrIvgvLmQgxLnovHrg");
	var mask_graphics_75 = new cjs.Graphics().p("A3DyPQI7neLmBCQLkBCHeI7QHdI6hBLlQhDLlo7Heg");
	var mask_graphics_76 = new cjs.Graphics().p("A2yy4QJGnQLkBUQLiBUHQJGQHPJGhSLjQhVLjpGHQg");
	var mask_graphics_77 = new cjs.Graphics().p("A2hzgQJRnBLiBlQLfBmHCJRQHBJRhkLhQhmLhpRHBg");
	var mask_graphics_78 = new cjs.Graphics().p("A2Q0GQJbmzLgB3QLdB3GzJcQGzJbh2LfQh4LepbGzg");
	var mask_graphics_79 = new cjs.Graphics().p("A1/0rQJmmkLdCJQLZCIGlJnQGkJliHLbQiKLcpmGkg");
	var mask_graphics_80 = new cjs.Graphics().p("A1t1PQJwmVLZCaQLWCaGWJxQGVJviZLYQibLYpwGVg");
	var mask_graphics_81 = new cjs.Graphics().p("A1b1xQJ5mHLVCsQLTCsGHJ6QGGJ5irLUQisLUp6GGg");
	var mask_graphics_82 = new cjs.Graphics().p("A1J2SQKDl3LQC9QLOC9F4KDQF3KCi8LQQi+LPqCF3g");
	var mask_graphics_83 = new cjs.Graphics().p("A022yQKLloLLDPQLKDOFoKMQFoKLjNLLQjPLLqMFng");
	var mask_graphics_84 = new cjs.Graphics().p("A0j3QQKTlYLGDfQLFDgFZKUQFXKTjeLGQjgLGqUFYg");
	var mask_graphics_85 = new cjs.Graphics().p("A0Q3tQKclILADwQK/DwFJKdQFHKbjvLBQjxLAqcFIg");
	var mask_graphics_86 = new cjs.Graphics().p("Az94JQKkk4K6ECQK6EAE4KlQE3KikAK7QkCK6qjE4g");
	var mask_graphics_87 = new cjs.Graphics().p("Azp4kQKrknK0ESQKzESEoKrQEnKpkRK2QkTKzqrEog");
	var mask_graphics_88 = new cjs.Graphics().p("AzV49QKykXKtEjQKsEiEXKzQEXKwkhKuQkjKtqyEXg");
	var mask_graphics_89 = new cjs.Graphics().p("AzB5UQK4kHKmE0QKlEyEHK5QEGK3kxKnQk0Kmq4EGg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-95.3,y:-2.5}).wait(1).to({graphics:mask_graphics_1,x:-93.3,y:-3.5}).wait(1).to({graphics:mask_graphics_2,x:-91.3,y:-4.6}).wait(1).to({graphics:mask_graphics_3,x:-89.3,y:-5.7}).wait(1).to({graphics:mask_graphics_4,x:-87.3,y:-6.9}).wait(1).to({graphics:mask_graphics_5,x:-85.4,y:-8.2}).wait(1).to({graphics:mask_graphics_6,x:-83.5,y:-9.5}).wait(1).to({graphics:mask_graphics_7,x:-81.6,y:-11}).wait(1).to({graphics:mask_graphics_8,x:-79.8,y:-12.4}).wait(1).to({graphics:mask_graphics_9,x:-78,y:-14}).wait(1).to({graphics:mask_graphics_10,x:-76.3,y:-15.6}).wait(1).to({graphics:mask_graphics_11,x:-74.6,y:-17.3}).wait(1).to({graphics:mask_graphics_12,x:-73,y:-19.1}).wait(1).to({graphics:mask_graphics_13,x:-71.4,y:-20.9}).wait(1).to({graphics:mask_graphics_14,x:-69.9,y:-22.8}).wait(1).to({graphics:mask_graphics_15,x:-68.5,y:-24.8}).wait(1).to({graphics:mask_graphics_16,x:-67.2,y:-26.8}).wait(1).to({graphics:mask_graphics_17,x:-65.9,y:-28.9}).wait(1).to({graphics:mask_graphics_18,x:-64.7,y:-31.1}).wait(1).to({graphics:mask_graphics_19,x:-63.6,y:-33.4}).wait(1).to({graphics:mask_graphics_20,x:-62.5,y:-35.6}).wait(1).to({graphics:mask_graphics_21,x:-61.6,y:-38}).wait(1).to({graphics:mask_graphics_22,x:-60.6,y:-40.4}).wait(1).to({graphics:mask_graphics_23,x:-59.8,y:-42.8}).wait(1).to({graphics:mask_graphics_24,x:-59,y:-45.2}).wait(1).to({graphics:mask_graphics_25,x:-58.3,y:-47.7}).wait(1).to({graphics:mask_graphics_26,x:-57.7,y:-50.3}).wait(1).to({graphics:mask_graphics_27,x:-57.1,y:-52.8}).wait(1).to({graphics:mask_graphics_28,x:-56.6,y:-55.4}).wait(1).to({graphics:mask_graphics_29,x:-56.2,y:-58}).wait(1).to({graphics:mask_graphics_30,x:-55.9,y:-60.6}).wait(1).to({graphics:mask_graphics_31,x:-55.6,y:-63.3}).wait(1).to({graphics:mask_graphics_32,x:-55.4,y:-65.9}).wait(1).to({graphics:mask_graphics_33,x:-55.3,y:-68.6}).wait(1).to({graphics:mask_graphics_34,x:-55.3,y:-71.3}).wait(1).to({graphics:mask_graphics_35,x:-55.3,y:-74}).wait(1).to({graphics:mask_graphics_36,x:-55.5,y:-76.8}).wait(1).to({graphics:mask_graphics_37,x:-55.7,y:-79.5}).wait(1).to({graphics:mask_graphics_38,x:-56,y:-82.2}).wait(1).to({graphics:mask_graphics_39,x:-56.4,y:-85}).wait(1).to({graphics:mask_graphics_40,x:-56.9,y:-86.8}).wait(1).to({graphics:mask_graphics_41,x:-57.4,y:-84}).wait(1).to({graphics:mask_graphics_42,x:-57.8,y:-81.2}).wait(1).to({graphics:mask_graphics_43,x:-58.1,y:-78.5}).wait(1).to({graphics:mask_graphics_44,x:-58.3,y:-75.7}).wait(1).to({graphics:mask_graphics_45,x:-58.5,y:-73.6}).wait(1).to({graphics:mask_graphics_46,x:-58.7,y:-71.5}).wait(1).to({graphics:mask_graphics_47,x:-58.8,y:-69.4}).wait(1).to({graphics:mask_graphics_48,x:-58.8,y:-67.3}).wait(1).to({graphics:mask_graphics_49,x:-58.9,y:-65.2}).wait(1).to({graphics:mask_graphics_50,x:-58.8,y:-63.1}).wait(1).to({graphics:mask_graphics_51,x:-58.8,y:-61.1}).wait(1).to({graphics:mask_graphics_52,x:-58.6,y:-59}).wait(1).to({graphics:mask_graphics_53,x:-58.5,y:-57}).wait(1).to({graphics:mask_graphics_54,x:-58.2,y:-55}).wait(1).to({graphics:mask_graphics_55,x:-58,y:-53}).wait(1).to({graphics:mask_graphics_56,x:-57.7,y:-51}).wait(1).to({graphics:mask_graphics_57,x:-57.3,y:-49}).wait(1).to({graphics:mask_graphics_58,x:-57,y:-47.1}).wait(1).to({graphics:mask_graphics_59,x:-56.5,y:-45.1}).wait(1).to({graphics:mask_graphics_60,x:-56.1,y:-43.2}).wait(1).to({graphics:mask_graphics_61,x:-55.5,y:-41.3}).wait(1).to({graphics:mask_graphics_62,x:-55,y:-39.5}).wait(1).to({graphics:mask_graphics_63,x:-54.4,y:-37.6}).wait(1).to({graphics:mask_graphics_64,x:-53.7,y:-35.8}).wait(1).to({graphics:mask_graphics_65,x:-53.1,y:-34}).wait(1).to({graphics:mask_graphics_66,x:-52.3,y:-32.3}).wait(1).to({graphics:mask_graphics_67,x:-51.6,y:-30.6}).wait(1).to({graphics:mask_graphics_68,x:-50.8,y:-28.9}).wait(1).to({graphics:mask_graphics_69,x:-49.9,y:-27.2}).wait(1).to({graphics:mask_graphics_70,x:-49,y:-25.6}).wait(1).to({graphics:mask_graphics_71,x:-48.1,y:-24}).wait(1).to({graphics:mask_graphics_72,x:-47.1,y:-22.5}).wait(1).to({graphics:mask_graphics_73,x:-46.1,y:-21}).wait(1).to({graphics:mask_graphics_74,x:-45,y:-19.6}).wait(1).to({graphics:mask_graphics_75,x:-43.9,y:-18.2}).wait(1).to({graphics:mask_graphics_76,x:-42.8,y:-16.9}).wait(1).to({graphics:mask_graphics_77,x:-41.6,y:-15.6}).wait(1).to({graphics:mask_graphics_78,x:-40.4,y:-14.3}).wait(1).to({graphics:mask_graphics_79,x:-39.1,y:-13.1}).wait(1).to({graphics:mask_graphics_80,x:-37.9,y:-11.9}).wait(1).to({graphics:mask_graphics_81,x:-36.6,y:-10.8}).wait(1).to({graphics:mask_graphics_82,x:-35.3,y:-9.7}).wait(1).to({graphics:mask_graphics_83,x:-33.9,y:-8.6}).wait(1).to({graphics:mask_graphics_84,x:-32.6,y:-7.6}).wait(1).to({graphics:mask_graphics_85,x:-31.2,y:-6.6}).wait(1).to({graphics:mask_graphics_86,x:-29.8,y:-5.7}).wait(1).to({graphics:mask_graphics_87,x:-28.4,y:-4.8}).wait(1).to({graphics:mask_graphics_88,x:-26.9,y:-4}).wait(1).to({graphics:mask_graphics_89,x:-25.5,y:-3.2}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AoPQbQGXgmEskdQFblIABnRQABnSlalJQh4hziJhL");
	this.shape.setTransform(5.2,2.7);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.1,-115.2,74.8,225.5);


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
	this.instance.setTransform(0.3,-9.2,1,1,0,0,0,0.4,-17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:78.8},44).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AiGAiIAAhDIENAAIAABDg");
	var mask_graphics_1 = new cjs.Graphics().p("AiGAsIAAhXIENAAIAABXg");
	var mask_graphics_2 = new cjs.Graphics().p("AiGA1IAAhpIENAAIAABpg");
	var mask_graphics_3 = new cjs.Graphics().p("AiGA/IAAh9IENAAIAAB9g");
	var mask_graphics_4 = new cjs.Graphics().p("AiGBIIAAiPIENAAIAACPg");
	var mask_graphics_5 = new cjs.Graphics().p("AiGBRIAAiiIENAAIAACig");
	var mask_graphics_6 = new cjs.Graphics().p("AiGBbIAAi1IENAAIAAC1g");
	var mask_graphics_7 = new cjs.Graphics().p("AiGBkIAAjHIENAAIAADHg");
	var mask_graphics_8 = new cjs.Graphics().p("AiGBuIAAjbIENAAIAADbg");
	var mask_graphics_9 = new cjs.Graphics().p("AiGB3IAAjtIENAAIAADtg");
	var mask_graphics_10 = new cjs.Graphics().p("AiGCAIAAj/IENAAIAAD/g");
	var mask_graphics_11 = new cjs.Graphics().p("AiGCKIAAkTIENAAIAAETg");
	var mask_graphics_12 = new cjs.Graphics().p("AiGCTIAAklIENAAIAAElg");
	var mask_graphics_13 = new cjs.Graphics().p("AiGCdIAAk5IENAAIAAE5g");
	var mask_graphics_14 = new cjs.Graphics().p("AiGCmIAAlLIENAAIAAFLg");
	var mask_graphics_15 = new cjs.Graphics().p("AiGCvIAAldIENAAIAAFdg");
	var mask_graphics_16 = new cjs.Graphics().p("AiGC5IAAlxIENAAIAAFxg");
	var mask_graphics_17 = new cjs.Graphics().p("AiGDCIAAmDIENAAIAAGDg");
	var mask_graphics_18 = new cjs.Graphics().p("AiGDMIAAmWIENAAIAAGWg");
	var mask_graphics_19 = new cjs.Graphics().p("AiGDVIAAmpIENAAIAAGpg");
	var mask_graphics_20 = new cjs.Graphics().p("AiGDeIAAm7IENAAIAAG7g");
	var mask_graphics_21 = new cjs.Graphics().p("AiGDoIAAnPIENAAIAAHPg");
	var mask_graphics_22 = new cjs.Graphics().p("AiGDxIAAnhIENAAIAAHhg");
	var mask_graphics_23 = new cjs.Graphics().p("AiGD7IAAn1IENAAIAAH1g");
	var mask_graphics_24 = new cjs.Graphics().p("AiGEEIAAoHIENAAIAAIHg");
	var mask_graphics_25 = new cjs.Graphics().p("AiGEOIAAobIENAAIAAIbg");
	var mask_graphics_26 = new cjs.Graphics().p("AiGEXIAAotIENAAIAAItg");
	var mask_graphics_27 = new cjs.Graphics().p("AiGEgIAAo/IENAAIAAI/g");
	var mask_graphics_28 = new cjs.Graphics().p("AiGEqIAApSIENAAIAAJSg");
	var mask_graphics_29 = new cjs.Graphics().p("AiGEzIAAplIENAAIAAJlg");
	var mask_graphics_30 = new cjs.Graphics().p("AiGE8IAAp3IENAAIAAJ3g");
	var mask_graphics_31 = new cjs.Graphics().p("AiGFGIAAqLIENAAIAAKLg");
	var mask_graphics_32 = new cjs.Graphics().p("AiGFPIAAqdIENAAIAAKdg");
	var mask_graphics_33 = new cjs.Graphics().p("AiGFYIAAqvIENAAIAAKvg");
	var mask_graphics_34 = new cjs.Graphics().p("AiGFiIAArDIENAAIAALDg");
	var mask_graphics_35 = new cjs.Graphics().p("AiGFrIAArVIENAAIAALVg");
	var mask_graphics_36 = new cjs.Graphics().p("AiGF0IAArnIENAAIAALng");
	var mask_graphics_37 = new cjs.Graphics().p("AiGF+IAAr7IENAAIAAL7g");
	var mask_graphics_38 = new cjs.Graphics().p("AiGGHIAAsOIENAAIAAMOg");
	var mask_graphics_39 = new cjs.Graphics().p("AiGGRIAAshIENAAIAAMhg");
	var mask_graphics_40 = new cjs.Graphics().p("AiGGaIAAszIENAAIAAMzg");
	var mask_graphics_41 = new cjs.Graphics().p("AiGGjIAAtFIENAAIAANFg");
	var mask_graphics_42 = new cjs.Graphics().p("AiGGtIAAtZIENAAIAANZg");
	var mask_graphics_43 = new cjs.Graphics().p("AiGG2IAAtrIENAAIAANrg");
	var mask_graphics_44 = new cjs.Graphics().p("AiGHAIAAt/IENAAIAAN/g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0,y:-6.3}).wait(1).to({graphics:mask_graphics_1,x:0,y:-5.2}).wait(1).to({graphics:mask_graphics_2,x:0,y:-4.2}).wait(1).to({graphics:mask_graphics_3,x:0,y:-3.1}).wait(1).to({graphics:mask_graphics_4,x:0,y:-2}).wait(1).to({graphics:mask_graphics_5,x:0,y:-1}).wait(1).to({graphics:mask_graphics_6,x:0,y:0.1}).wait(1).to({graphics:mask_graphics_7,x:0,y:1.1}).wait(1).to({graphics:mask_graphics_8,x:0,y:2.2}).wait(1).to({graphics:mask_graphics_9,x:0,y:3.3}).wait(1).to({graphics:mask_graphics_10,x:0,y:4.4}).wait(1).to({graphics:mask_graphics_11,x:0,y:5.4}).wait(1).to({graphics:mask_graphics_12,x:0,y:6.5}).wait(1).to({graphics:mask_graphics_13,x:0,y:7.6}).wait(1).to({graphics:mask_graphics_14,x:0,y:8.6}).wait(1).to({graphics:mask_graphics_15,x:0,y:9.7}).wait(1).to({graphics:mask_graphics_16,x:0,y:10.7}).wait(1).to({graphics:mask_graphics_17,x:0,y:11.8}).wait(1).to({graphics:mask_graphics_18,x:0,y:12.9}).wait(1).to({graphics:mask_graphics_19,x:0,y:13.9}).wait(1).to({graphics:mask_graphics_20,x:0,y:15}).wait(1).to({graphics:mask_graphics_21,x:0,y:16.1}).wait(1).to({graphics:mask_graphics_22,x:0,y:17.1}).wait(1).to({graphics:mask_graphics_23,x:0,y:18.2}).wait(1).to({graphics:mask_graphics_24,x:0,y:19.3}).wait(1).to({graphics:mask_graphics_25,x:0,y:20.3}).wait(1).to({graphics:mask_graphics_26,x:0,y:21.4}).wait(1).to({graphics:mask_graphics_27,x:0,y:22.4}).wait(1).to({graphics:mask_graphics_28,x:0,y:23.5}).wait(1).to({graphics:mask_graphics_29,x:0,y:24.6}).wait(1).to({graphics:mask_graphics_30,x:0,y:25.6}).wait(1).to({graphics:mask_graphics_31,x:0,y:26.7}).wait(1).to({graphics:mask_graphics_32,x:0,y:27.8}).wait(1).to({graphics:mask_graphics_33,x:0,y:28.8}).wait(1).to({graphics:mask_graphics_34,x:0,y:29.9}).wait(1).to({graphics:mask_graphics_35,x:0,y:31}).wait(1).to({graphics:mask_graphics_36,x:0,y:32}).wait(1).to({graphics:mask_graphics_37,x:0,y:33.1}).wait(1).to({graphics:mask_graphics_38,x:0,y:34.2}).wait(1).to({graphics:mask_graphics_39,x:0,y:35.2}).wait(1).to({graphics:mask_graphics_40,x:0,y:36.3}).wait(1).to({graphics:mask_graphics_41,x:0,y:37.4}).wait(1).to({graphics:mask_graphics_42,x:0,y:38.4}).wait(1).to({graphics:mask_graphics_43,x:0,y:39.5}).wait(1).to({graphics:mask_graphics_44,x:0,y:40.5}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AAAnNIAAOb");
	this.shape.setTransform(0,45.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.9,-9.2,24.3,21.9);


(lib.honeyflap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.honeybee();
	this.instance.parent = this;
	this.instance.setTransform(38.4,-170.9,0.422,0.422,0,0,0,-0.1,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgDB9QgWgBgVgIIgGgDIgCAAIgBgBIgCgBIgBgBIgBAAIgBgBIgCgBIgBgBIgCAAIgBgBIgBgBIgBgBIgBgBIgBAAIgCgBIgBgBIgBgBIgBgBIgBAAIAAgBIgCgBIgBgBIAAgBIgCAAIgBgBIgBgBIgBgBIAAgBIgBAAIgBgBIgBgBIgBgBIAAgBIgCgBIAAAAIgBgBIgBgBIgBgBIAAgBIgBgBIAAgBIgBAAIgBgBIgBgBIAAgBIgBgBIgBgBIgBAAIAAgBIgBgBIgBgBIAAgBIgBgBIAAgBIAAgBIgBAAIgBgBIAAgBIAAgBIgBgBIgBgBIgBgBIAAgBIAAAAIgBgBIgBgBIAAgBIgBgBIAAgBIAAgBIAAgBIgBAAIAAgBIgBgBIAAgBIAAgBIgBgBIAAgBIgBgBIAAgBIAAgBIgBAAIAAgBIgBgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIgBgBIAAAAIAAgBIgBgBIAAgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIgBgBIAAgBIAAgBIAAgBIAAgBIAAgBIgBgBIABgBIgBgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIgBgBIABgBIAAgBIgBgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIABgBIgBgBIABgBIgBgBIABgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIAAgBIABgBIABgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIABgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIABgBIAAgBIABgBIABgBIABgBIAAgBIABgBIABgBIAAgBIABgBIAAgBIABgBIABgBIAAgBIABgBIABgBIABgBIABgCIABgBIABgBIABgBIAAgBIABgBIABgBIABgBIAEgDQAGgHAGgFIANgIIAPgIIAQgFIAPgDIAMgBIANAAIANACIAMADIAOAEIAIAEIACABIABABIABAAIABABIACABIACABIABAAIABABIABABIABABIABAAIABABIACABIABABIABABIABAAIABABIABABIABABIABABIABAAIABABIABABIABABIABABIAAABIABAAIABABIABABIABABIAAABIACABIAAAAIABABIABABIABABIABABIAAABIAAAAIABABIABABIABABIAAABIABABIABABIAAAAIABABIABABIAAABIABABIAAABIABABIAAAAIABABIAAABIABABIABABIAAABIABABIABABIAAAAIABABIAAABIABABIAAABIAAABIABABIAAABIAAABIABAAIAAABIABABIAAABIAAABIABABIAAABIABABIAAABIAAAAIABABIAAABIABABIAAABIAAABIABABIAAABIAAABIABABIAAAAIAAABIAAABIABABIAAABIAAABIAAABIABABIAAABIAAABIAAABIAAABIAAAAIABABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIABACIAAACIAAABIAAABIAAABIABABIgBABIABABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIgBABIABABIgBABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIgBABIAAABIAAABIAAABIAAABIgBACIAAACIAAACIAAABIAAABIgBABIAAABIAAABIAAABIgBABIAAABIAAAAIgBACIAAAAIAAACIAAAAIgBABIAAABIgBABIgBACIAAAAIAAABIgBACIAAAAIAAACIgBABIAAABIgBABIAAABIgBABIAAABIAAABIgBABIAAABIgBABIAAABIgBABIgBABIgBABIAAABIgBABIgBABIAAABIgBABIgBABIAAABIAAABIgBABIgBABIgBABIgBABIgBABIgBACIgBABIgBABIAAABIgBABIgBABIgBABIgBABIgCABIAAABIgCABIgBACIgBABIgBABQgHAGgIAFQgMAIgNAFQgVAIgWAAIgEAAg");
	this.shape.setTransform(24.3,-143.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-215.3,105.5,84.1);


// stage content:
(lib.writingsuccess_Fontkid_f = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_338 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(338).call(this.frame_338).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(353.2,128.7,0.998,0.998,8,0,0,22.4,-144);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({regY:-143.9,guide:{path:[354.4,128,348.4,118.4,340,111,328.2,100.5,307,101.1,285.9,101.7,268.9,111.8,251.8,121.9,243.5,146.5,241.4,152.6,238.2,173.7]}},76).to({regX:22.5,regY:-143.8,scaleX:1,scaleY:1,x:236.7,y:281.4},48).to({regX:22.6,x:238.1,y:386.7},45).to({regX:22.4,regY:-144,scaleX:1,scaleY:1,x:238,y:447.8},31).wait(9).to({x:192.2,y:279.1},0).to({x:282.2},45).wait(11).to({startPosition:0},0).to({scaleX:1,scaleY:1,rotation:8.5,guide:{path:[282.4,279,145.2,124,84.8,226.2,24.4,328.8,-129.7,177.4]}},64).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(241.1,448,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},200).wait(9).to({_off:false,x:286.1,y:278},0).to({_off:true},45).wait(76));

	// Layer 11
	this.instance_1 = new lib.H_ar("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(225.7,310.5,1,1,-90,0,0,0,33);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(218).to({_off:false},0).wait(121));

	// Layer 28
	this.instance_2 = new lib.SC_ar("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(302.2,68.3,0.813,0.904,0,99.1,-80.9,-0.4,-0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(330));

	// Layer 8
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(25,1,1).p("AgNAAIAbAA");
	this.shape_1.setTransform(195.6,279.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(25,1,1).p("AgXAAIAvAA");
	this.shape_2.setTransform(196.6,279.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(25,1,1).p("AggAAIBBAA");
	this.shape_3.setTransform(197.5,279.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(25,1,1).p("AgqAAIBVAA");
	this.shape_4.setTransform(198.5,279.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(25,1,1).p("AgzAAIBnAA");
	this.shape_5.setTransform(199.4,279.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(25,1,1).p("Ag9AAIB7AA");
	this.shape_6.setTransform(200.4,279.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(25,1,1).p("AhGAAICNAA");
	this.shape_7.setTransform(201.3,279.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(25,1,1).p("AhPAAICfAA");
	this.shape_8.setTransform(202.2,279.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(25,1,1).p("AhZAAICzAA");
	this.shape_9.setTransform(203.2,279.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(25,1,1).p("AhiAAIDFAA");
	this.shape_10.setTransform(204.1,279.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(25,1,1).p("AhsAAIDZAA");
	this.shape_11.setTransform(205.1,279.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(25,1,1).p("Ah1AAIDrAA");
	this.shape_12.setTransform(206,279.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(25,1,1).p("Ah/AAID/AA");
	this.shape_13.setTransform(207,279.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(25,1,1).p("AiIAAIERAA");
	this.shape_14.setTransform(207.9,279.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(25,1,1).p("AiSAAIElAA");
	this.shape_15.setTransform(208.9,279.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(25,1,1).p("AibAAIE3AA");
	this.shape_16.setTransform(209.8,279.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(25,1,1).p("AikAAIFJAA");
	this.shape_17.setTransform(210.7,279.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(25,1,1).p("AiuAAIFdAA");
	this.shape_18.setTransform(211.7,279.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(25,1,1).p("Ai3AAIFvAA");
	this.shape_19.setTransform(212.6,279.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(25,1,1).p("AjBAAIGDAA");
	this.shape_20.setTransform(213.6,279.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(25,1,1).p("AjKAAIGVAA");
	this.shape_21.setTransform(214.5,279.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(25,1,1).p("AjUAAIGpAA");
	this.shape_22.setTransform(215.5,279.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(25,1,1).p("AjdAAIG7AA");
	this.shape_23.setTransform(216.4,279.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(25,1,1).p("AjnAAIHPAA");
	this.shape_24.setTransform(217.4,279.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(25,1,1).p("AjwAAIHhAA");
	this.shape_25.setTransform(218.3,279.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(25,1,1).p("Aj5AAIHzAA");
	this.shape_26.setTransform(219.2,279.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(25,1,1).p("AkDAAIIHAA");
	this.shape_27.setTransform(220.2,279.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(25,1,1).p("AkMAAIIZAA");
	this.shape_28.setTransform(221.1,279.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(25,1,1).p("AkWAAIItAA");
	this.shape_29.setTransform(222.1,279.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(25,1,1).p("AkfAAII/AA");
	this.shape_30.setTransform(223,279.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(25,1,1).p("AkpAAIJTAA");
	this.shape_31.setTransform(224,279.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(25,1,1).p("AkyAAIJlAA");
	this.shape_32.setTransform(224.9,279.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(25,1,1).p("Ak8AAIJ5AA");
	this.shape_33.setTransform(225.9,279.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(25,1,1).p("AlFAAIKLAA");
	this.shape_34.setTransform(226.8,279.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(25,1,1).p("AlOAAIKdAA");
	this.shape_35.setTransform(227.7,279.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(25,1,1).p("AlYAAIKxAA");
	this.shape_36.setTransform(228.7,279.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(25,1,1).p("AlhAAILDAA");
	this.shape_37.setTransform(229.6,279.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(25,1,1).p("AlrAAILXAA");
	this.shape_38.setTransform(230.6,279.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(25,1,1).p("Al0AAILpAA");
	this.shape_39.setTransform(231.5,279.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(25,1,1).p("Al+AAIL9AA");
	this.shape_40.setTransform(232.5,279.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(25,1,1).p("AmHAAIMPAA");
	this.shape_41.setTransform(233.4,279.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(25,1,1).p("AmRAAIMjAA");
	this.shape_42.setTransform(234.4,279.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(25,1,1).p("AmaAAIM1AA");
	this.shape_43.setTransform(235.3,279.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(25,1,1).p("AmjAAINHAA");
	this.shape_44.setTransform(236.2,279.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(25,1,1).p("AmtAAINbAA");
	this.shape_45.setTransform(237.2,279.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(25,1,1).p("Am2AAINtAA");
	this.shape_46.setTransform(238.1,279.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},218).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).wait(76));

	// Layer 7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_85 = new cjs.Graphics().p("AkIAeIAAg7IIRAAIAAA7g");
	var mask_graphics_86 = new cjs.Graphics().p("AkIAqIAAhTIIRAAIAABTg");
	var mask_graphics_87 = new cjs.Graphics().p("AkIA2IAAhqIIRAAIAABqg");
	var mask_graphics_88 = new cjs.Graphics().p("AkIBBIAAiBIIRAAIAACBg");
	var mask_graphics_89 = new cjs.Graphics().p("AkIBNIAAiZIIRAAIAACZg");
	var mask_graphics_90 = new cjs.Graphics().p("AkIBZIAAixIIRAAIAACxg");
	var mask_graphics_91 = new cjs.Graphics().p("AkIBlIAAjJIIRAAIAADJg");
	var mask_graphics_92 = new cjs.Graphics().p("AkIBxIAAjgIIRAAIAADgg");
	var mask_graphics_93 = new cjs.Graphics().p("AkIB8IAAj3IIRAAIAAD3g");
	var mask_graphics_94 = new cjs.Graphics().p("AkICIIAAkPIIRAAIAAEPg");
	var mask_graphics_95 = new cjs.Graphics().p("AkICUIAAknIIRAAIAAEng");
	var mask_graphics_96 = new cjs.Graphics().p("AkICfIAAk9IIRAAIAAE9g");
	var mask_graphics_97 = new cjs.Graphics().p("AkICrIAAlVIIRAAIAAFVg");
	var mask_graphics_98 = new cjs.Graphics().p("AkIC3IAAltIIRAAIAAFtg");
	var mask_graphics_99 = new cjs.Graphics().p("AkIDDIAAmFIIRAAIAAGFg");
	var mask_graphics_100 = new cjs.Graphics().p("AkIDPIAAmcIIRAAIAAGcg");
	var mask_graphics_101 = new cjs.Graphics().p("AkIDaIAAmzIIRAAIAAGzg");
	var mask_graphics_102 = new cjs.Graphics().p("AkIDmIAAnLIIRAAIAAHLg");
	var mask_graphics_103 = new cjs.Graphics().p("AkIDyIAAnjIIRAAIAAHjg");
	var mask_graphics_104 = new cjs.Graphics().p("AkID+IAAn7IIRAAIAAH7g");
	var mask_graphics_105 = new cjs.Graphics().p("AkIEKIAAoSIIRAAIAAISg");
	var mask_graphics_106 = new cjs.Graphics().p("AkIEVIAAopIIRAAIAAIpg");
	var mask_graphics_107 = new cjs.Graphics().p("AkIEhIAApBIIRAAIAAJBg");
	var mask_graphics_108 = new cjs.Graphics().p("AkIEtIAApZIIRAAIAAJZg");
	var mask_graphics_109 = new cjs.Graphics().p("AkIE4IAApvIIRAAIAAJvg");
	var mask_graphics_110 = new cjs.Graphics().p("AkIFEIAAqHIIRAAIAAKHg");
	var mask_graphics_111 = new cjs.Graphics().p("AkIFQIAAqfIIRAAIAAKfg");
	var mask_graphics_112 = new cjs.Graphics().p("AkIFcIAAq3IIRAAIAAK3g");
	var mask_graphics_113 = new cjs.Graphics().p("AkIFoIAArOIIRAAIAALOg");
	var mask_graphics_114 = new cjs.Graphics().p("AkIFzIAArlIIRAAIAALlg");
	var mask_graphics_115 = new cjs.Graphics().p("AkIF/IAAr9IIRAAIAAL9g");
	var mask_graphics_116 = new cjs.Graphics().p("AkIGLIAAsVIIRAAIAAMVg");
	var mask_graphics_117 = new cjs.Graphics().p("AkIGXIAAstIIRAAIAAMtg");
	var mask_graphics_118 = new cjs.Graphics().p("AkIGjIAAtEIIRAAIAANEg");
	var mask_graphics_119 = new cjs.Graphics().p("AkIGuIAAtbIIRAAIAANbg");
	var mask_graphics_120 = new cjs.Graphics().p("AkIG6IAAtzIIRAAIAANzg");
	var mask_graphics_121 = new cjs.Graphics().p("AkIHGIAAuLIIRAAIAAOLg");
	var mask_graphics_122 = new cjs.Graphics().p("AkIHRIAAuhIIRAAIAAOhg");
	var mask_graphics_123 = new cjs.Graphics().p("AkIHdIAAu5IIRAAIAAO5g");
	var mask_graphics_124 = new cjs.Graphics().p("AkIHpIAAvRIIRAAIAAPRg");
	var mask_graphics_125 = new cjs.Graphics().p("AkIH1IAAvpIIRAAIAAPpg");
	var mask_graphics_126 = new cjs.Graphics().p("AkIIBIAAwBIIRAAIAAQBg");
	var mask_graphics_127 = new cjs.Graphics().p("AkIIMIAAwXIIRAAIAAQXg");
	var mask_graphics_128 = new cjs.Graphics().p("AkIIYIAAwvIIRAAIAAQvg");
	var mask_graphics_129 = new cjs.Graphics().p("AkIIkIAAxHIIRAAIAARHg");
	var mask_graphics_130 = new cjs.Graphics().p("AkIIwIAAxfIIRAAIAARfg");
	var mask_graphics_131 = new cjs.Graphics().p("AkII8IAAx2IIRAAIAAR2g");
	var mask_graphics_132 = new cjs.Graphics().p("AkIJHIAAyNIIRAAIAASNg");
	var mask_graphics_133 = new cjs.Graphics().p("AkIJTIAAylIIRAAIAASlg");
	var mask_graphics_134 = new cjs.Graphics().p("AkIJfIAAy9IIRAAIAAS9g");
	var mask_graphics_135 = new cjs.Graphics().p("AkIJqIAAzTIIRAAIAATTg");
	var mask_graphics_136 = new cjs.Graphics().p("AkIJ2IAAzrIIRAAIAATrg");
	var mask_graphics_137 = new cjs.Graphics().p("AkIKCIAA0DIIRAAIAAUDg");
	var mask_graphics_138 = new cjs.Graphics().p("AkIKOIAA0bIIRAAIAAUbg");
	var mask_graphics_139 = new cjs.Graphics().p("AkIKaIAA0zIIRAAIAAUzg");
	var mask_graphics_140 = new cjs.Graphics().p("AkIKlIAA1JIIRAAIAAVJg");
	var mask_graphics_141 = new cjs.Graphics().p("AkIKxIAA1hIIRAAIAAVhg");
	var mask_graphics_142 = new cjs.Graphics().p("AkIK9IAA15IIRAAIAAV5g");
	var mask_graphics_143 = new cjs.Graphics().p("AkILJIAA2RIIRAAIAAWRg");
	var mask_graphics_144 = new cjs.Graphics().p("AkILVIAA2oIIRAAIAAWog");
	var mask_graphics_145 = new cjs.Graphics().p("AkILgIAA2/IIRAAIAAW/g");
	var mask_graphics_146 = new cjs.Graphics().p("AkILsIAA3XIIRAAIAAXXg");
	var mask_graphics_147 = new cjs.Graphics().p("AkIL4IAA3vIIRAAIAAXvg");
	var mask_graphics_148 = new cjs.Graphics().p("AkIMEIAA4HIIRAAIAAYHg");
	var mask_graphics_149 = new cjs.Graphics().p("AkIMQIAA4eIIRAAIAAYeg");
	var mask_graphics_150 = new cjs.Graphics().p("AkIMbIAA41IIRAAIAAY1g");
	var mask_graphics_151 = new cjs.Graphics().p("AkIMnIAA5NIIRAAIAAZNg");
	var mask_graphics_152 = new cjs.Graphics().p("AkIMzIAA5lIIRAAIAAZlg");
	var mask_graphics_153 = new cjs.Graphics().p("AkIM+IAA57IIRAAIAAZ7g");
	var mask_graphics_154 = new cjs.Graphics().p("AkINKIAA6TIIRAAIAAaTg");
	var mask_graphics_155 = new cjs.Graphics().p("AkINWIAA6rIIRAAIAAarg");
	var mask_graphics_156 = new cjs.Graphics().p("AkINiIAA7DIIRAAIAAbDg");
	var mask_graphics_157 = new cjs.Graphics().p("AkINuIAA7aIIRAAIAAbag");
	var mask_graphics_158 = new cjs.Graphics().p("AkIN5IAA7xIIRAAIAAbxg");
	var mask_graphics_159 = new cjs.Graphics().p("AkIOFIAA8JIIRAAIAAcJg");
	var mask_graphics_160 = new cjs.Graphics().p("AkIORIAA8hIIRAAIAAchg");
	var mask_graphics_161 = new cjs.Graphics().p("AkIOdIAA85IIRAAIAAc5g");
	var mask_graphics_162 = new cjs.Graphics().p("AkIOpIAA9QIIRAAIAAdQg");
	var mask_graphics_163 = new cjs.Graphics().p("AkIO0IAA9nIIRAAIAAdng");
	var mask_graphics_164 = new cjs.Graphics().p("AkIPAIAA9/IIRAAIAAd/g");
	var mask_graphics_165 = new cjs.Graphics().p("AkIPMIAA+XIIRAAIAAeXg");
	var mask_graphics_166 = new cjs.Graphics().p("AkIPXIAA+tIIRAAIAAetg");
	var mask_graphics_167 = new cjs.Graphics().p("AkIPjIAA/FIIRAAIAAfFg");
	var mask_graphics_168 = new cjs.Graphics().p("AkIPvIAA/dIIRAAIAAfdg");
	var mask_graphics_169 = new cjs.Graphics().p("AkIP7IAA/1IIRAAIAAf1g");
	var mask_graphics_170 = new cjs.Graphics().p("AkIQHMAAAggNIIRAAMAAAAgNg");
	var mask_graphics_171 = new cjs.Graphics().p("AkIQSMAAAggjIIRAAMAAAAgjg");
	var mask_graphics_172 = new cjs.Graphics().p("AkIQeMAAAgg7IIRAAMAAAAg7g");
	var mask_graphics_173 = new cjs.Graphics().p("AkIQqMAAAghTIIRAAMAAAAhTg");
	var mask_graphics_174 = new cjs.Graphics().p("AkIQ2MAAAghrIIRAAMAAAAhrg");
	var mask_graphics_175 = new cjs.Graphics().p("AkIRCMAAAgiCIIRAAMAAAAiCg");
	var mask_graphics_176 = new cjs.Graphics().p("AkIRNMAAAgiZIIRAAMAAAAiZg");
	var mask_graphics_177 = new cjs.Graphics().p("AkIRZMAAAgixIIRAAMAAAAixg");
	var mask_graphics_178 = new cjs.Graphics().p("AkIRlMAAAgjJIIRAAMAAAAjJg");
	var mask_graphics_179 = new cjs.Graphics().p("AkIRwMAAAgjfIIRAAMAAAAjfg");
	var mask_graphics_180 = new cjs.Graphics().p("AkIR8MAAAgj3IIRAAMAAAAj3g");
	var mask_graphics_181 = new cjs.Graphics().p("AkISIMAAAgkPIIRAAMAAAAkPg");
	var mask_graphics_182 = new cjs.Graphics().p("AkISUMAAAgknIIRAAMAAAAkng");
	var mask_graphics_183 = new cjs.Graphics().p("AkISgMAAAgk/IIRAAMAAAAk/g");
	var mask_graphics_184 = new cjs.Graphics().p("AkISrMAAAglVIIRAAMAAAAlVg");
	var mask_graphics_185 = new cjs.Graphics().p("AkIS3MAAAgltIIRAAMAAAAltg");
	var mask_graphics_186 = new cjs.Graphics().p("AkITDMAAAgmFIIRAAMAAAAmFg");
	var mask_graphics_187 = new cjs.Graphics().p("AkITPMAAAgmdIIRAAMAAAAmdg");
	var mask_graphics_188 = new cjs.Graphics().p("AkITbMAAAgm0IIRAAMAAAAm0g");
	var mask_graphics_189 = new cjs.Graphics().p("AkITmMAAAgnLIIRAAMAAAAnLg");
	var mask_graphics_190 = new cjs.Graphics().p("AkITyMAAAgnjIIRAAMAAAAnjg");
	var mask_graphics_191 = new cjs.Graphics().p("AkIT+MAAAgn7IIRAAMAAAAn7g");
	var mask_graphics_192 = new cjs.Graphics().p("AkIUJMAAAgoRIIRAAMAAAAoRg");
	var mask_graphics_193 = new cjs.Graphics().p("AkIUWMAAAgoqIIRAAMAAAAoqg");
	var mask_graphics_194 = new cjs.Graphics().p("AkIUhMAAAgpBIIRAAMAAAApBg");
	var mask_graphics_195 = new cjs.Graphics().p("AkIUtMAAAgpZIIRAAMAAAApZg");
	var mask_graphics_196 = new cjs.Graphics().p("AkIU5MAAAgpxIIRAAMAAAApxg");
	var mask_graphics_197 = new cjs.Graphics().p("AkIVEMAAAgqHIIRAAMAAAAqHg");
	var mask_graphics_198 = new cjs.Graphics().p("AkIVQMAAAgqfIIRAAMAAAAqfg");
	var mask_graphics_199 = new cjs.Graphics().p("AkIVcMAAAgq3IIRAAMAAAAq3g");
	var mask_graphics_200 = new cjs.Graphics().p("AkIVoMAAAgrPIIRAAMAAAArPg");
	var mask_graphics_201 = new cjs.Graphics().p("AkIV0MAAAgrmIIRAAMAAAArmg");
	var mask_graphics_202 = new cjs.Graphics().p("AkIV/MAAAgr9IIRAAMAAAAr9g");
	var mask_graphics_203 = new cjs.Graphics().p("AkIWLMAAAgsVIIRAAMAAAAsVg");
	var mask_graphics_204 = new cjs.Graphics().p("AkIWXMAAAgstIIRAAMAAAAstg");
	var mask_graphics_205 = new cjs.Graphics().p("AkIWjMAAAgtFIIRAAMAAAAtFg");
	var mask_graphics_206 = new cjs.Graphics().p("AkIWuMAAAgtbIIRAAMAAAAtbg");
	var mask_graphics_207 = new cjs.Graphics().p("AkIW6MAAAgtzIIRAAMAAAAtzg");
	var mask_graphics_208 = new cjs.Graphics().p("AkIXGMAAAguLIIRAAMAAAAuLg");
	var mask_graphics_209 = new cjs.Graphics().p("AkIXSMAAAgujIIRAAMAAAAujg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(85).to({graphics:mask_graphics_85,x:236.5,y:167.1}).wait(1).to({graphics:mask_graphics_86,x:236.5,y:168.2}).wait(1).to({graphics:mask_graphics_87,x:236.5,y:169.4}).wait(1).to({graphics:mask_graphics_88,x:236.5,y:170.6}).wait(1).to({graphics:mask_graphics_89,x:236.5,y:171.8}).wait(1).to({graphics:mask_graphics_90,x:236.5,y:172.9}).wait(1).to({graphics:mask_graphics_91,x:236.5,y:174.1}).wait(1).to({graphics:mask_graphics_92,x:236.5,y:175.3}).wait(1).to({graphics:mask_graphics_93,x:236.5,y:176.5}).wait(1).to({graphics:mask_graphics_94,x:236.5,y:177.7}).wait(1).to({graphics:mask_graphics_95,x:236.5,y:178.8}).wait(1).to({graphics:mask_graphics_96,x:236.5,y:180}).wait(1).to({graphics:mask_graphics_97,x:236.5,y:181.2}).wait(1).to({graphics:mask_graphics_98,x:236.5,y:182.4}).wait(1).to({graphics:mask_graphics_99,x:236.5,y:183.5}).wait(1).to({graphics:mask_graphics_100,x:236.5,y:184.7}).wait(1).to({graphics:mask_graphics_101,x:236.5,y:185.9}).wait(1).to({graphics:mask_graphics_102,x:236.5,y:187.1}).wait(1).to({graphics:mask_graphics_103,x:236.5,y:188.3}).wait(1).to({graphics:mask_graphics_104,x:236.5,y:189.4}).wait(1).to({graphics:mask_graphics_105,x:236.5,y:190.6}).wait(1).to({graphics:mask_graphics_106,x:236.5,y:191.8}).wait(1).to({graphics:mask_graphics_107,x:236.5,y:193}).wait(1).to({graphics:mask_graphics_108,x:236.5,y:194.1}).wait(1).to({graphics:mask_graphics_109,x:236.5,y:195.3}).wait(1).to({graphics:mask_graphics_110,x:236.5,y:196.5}).wait(1).to({graphics:mask_graphics_111,x:236.5,y:197.7}).wait(1).to({graphics:mask_graphics_112,x:236.5,y:198.8}).wait(1).to({graphics:mask_graphics_113,x:236.5,y:200}).wait(1).to({graphics:mask_graphics_114,x:236.5,y:201.2}).wait(1).to({graphics:mask_graphics_115,x:236.5,y:202.4}).wait(1).to({graphics:mask_graphics_116,x:236.5,y:203.6}).wait(1).to({graphics:mask_graphics_117,x:236.5,y:204.7}).wait(1).to({graphics:mask_graphics_118,x:236.5,y:205.9}).wait(1).to({graphics:mask_graphics_119,x:236.5,y:207.1}).wait(1).to({graphics:mask_graphics_120,x:236.5,y:208.3}).wait(1).to({graphics:mask_graphics_121,x:236.5,y:209.4}).wait(1).to({graphics:mask_graphics_122,x:236.5,y:210.6}).wait(1).to({graphics:mask_graphics_123,x:236.5,y:211.8}).wait(1).to({graphics:mask_graphics_124,x:236.5,y:213}).wait(1).to({graphics:mask_graphics_125,x:236.5,y:214.2}).wait(1).to({graphics:mask_graphics_126,x:236.5,y:215.3}).wait(1).to({graphics:mask_graphics_127,x:236.5,y:216.5}).wait(1).to({graphics:mask_graphics_128,x:236.5,y:217.7}).wait(1).to({graphics:mask_graphics_129,x:236.5,y:218.9}).wait(1).to({graphics:mask_graphics_130,x:236.5,y:220}).wait(1).to({graphics:mask_graphics_131,x:236.5,y:221.2}).wait(1).to({graphics:mask_graphics_132,x:236.5,y:222.4}).wait(1).to({graphics:mask_graphics_133,x:236.5,y:223.6}).wait(1).to({graphics:mask_graphics_134,x:236.5,y:224.7}).wait(1).to({graphics:mask_graphics_135,x:236.5,y:225.9}).wait(1).to({graphics:mask_graphics_136,x:236.5,y:227.1}).wait(1).to({graphics:mask_graphics_137,x:236.5,y:228.3}).wait(1).to({graphics:mask_graphics_138,x:236.5,y:229.5}).wait(1).to({graphics:mask_graphics_139,x:236.5,y:230.6}).wait(1).to({graphics:mask_graphics_140,x:236.5,y:231.8}).wait(1).to({graphics:mask_graphics_141,x:236.5,y:233}).wait(1).to({graphics:mask_graphics_142,x:236.5,y:234.2}).wait(1).to({graphics:mask_graphics_143,x:236.5,y:235.3}).wait(1).to({graphics:mask_graphics_144,x:236.5,y:236.5}).wait(1).to({graphics:mask_graphics_145,x:236.5,y:237.7}).wait(1).to({graphics:mask_graphics_146,x:236.5,y:238.9}).wait(1).to({graphics:mask_graphics_147,x:236.5,y:240.1}).wait(1).to({graphics:mask_graphics_148,x:236.5,y:241.2}).wait(1).to({graphics:mask_graphics_149,x:236.5,y:242.4}).wait(1).to({graphics:mask_graphics_150,x:236.5,y:243.6}).wait(1).to({graphics:mask_graphics_151,x:236.5,y:244.8}).wait(1).to({graphics:mask_graphics_152,x:236.5,y:245.9}).wait(1).to({graphics:mask_graphics_153,x:236.5,y:247.1}).wait(1).to({graphics:mask_graphics_154,x:236.5,y:248.3}).wait(1).to({graphics:mask_graphics_155,x:236.5,y:249.5}).wait(1).to({graphics:mask_graphics_156,x:236.5,y:250.6}).wait(1).to({graphics:mask_graphics_157,x:236.5,y:251.8}).wait(1).to({graphics:mask_graphics_158,x:236.5,y:253}).wait(1).to({graphics:mask_graphics_159,x:236.5,y:254.2}).wait(1).to({graphics:mask_graphics_160,x:236.5,y:255.4}).wait(1).to({graphics:mask_graphics_161,x:236.5,y:256.5}).wait(1).to({graphics:mask_graphics_162,x:236.5,y:257.7}).wait(1).to({graphics:mask_graphics_163,x:236.5,y:258.9}).wait(1).to({graphics:mask_graphics_164,x:236.5,y:260.1}).wait(1).to({graphics:mask_graphics_165,x:236.5,y:261.2}).wait(1).to({graphics:mask_graphics_166,x:236.5,y:262.4}).wait(1).to({graphics:mask_graphics_167,x:236.5,y:263.6}).wait(1).to({graphics:mask_graphics_168,x:236.5,y:264.8}).wait(1).to({graphics:mask_graphics_169,x:236.5,y:265.9}).wait(1).to({graphics:mask_graphics_170,x:236.5,y:267.1}).wait(1).to({graphics:mask_graphics_171,x:236.5,y:268.3}).wait(1).to({graphics:mask_graphics_172,x:236.5,y:269.5}).wait(1).to({graphics:mask_graphics_173,x:236.5,y:270.7}).wait(1).to({graphics:mask_graphics_174,x:236.5,y:271.8}).wait(1).to({graphics:mask_graphics_175,x:236.5,y:273}).wait(1).to({graphics:mask_graphics_176,x:236.5,y:274.2}).wait(1).to({graphics:mask_graphics_177,x:236.5,y:275.4}).wait(1).to({graphics:mask_graphics_178,x:236.5,y:276.5}).wait(1).to({graphics:mask_graphics_179,x:236.5,y:277.7}).wait(1).to({graphics:mask_graphics_180,x:236.5,y:278.9}).wait(1).to({graphics:mask_graphics_181,x:236.5,y:280.1}).wait(1).to({graphics:mask_graphics_182,x:236.5,y:281.3}).wait(1).to({graphics:mask_graphics_183,x:236.5,y:282.4}).wait(1).to({graphics:mask_graphics_184,x:236.5,y:283.6}).wait(1).to({graphics:mask_graphics_185,x:236.5,y:284.8}).wait(1).to({graphics:mask_graphics_186,x:236.5,y:286}).wait(1).to({graphics:mask_graphics_187,x:236.5,y:287.1}).wait(1).to({graphics:mask_graphics_188,x:236.5,y:288.3}).wait(1).to({graphics:mask_graphics_189,x:236.5,y:289.5}).wait(1).to({graphics:mask_graphics_190,x:236.5,y:290.7}).wait(1).to({graphics:mask_graphics_191,x:236.5,y:291.8}).wait(1).to({graphics:mask_graphics_192,x:236.5,y:293}).wait(1).to({graphics:mask_graphics_193,x:236.5,y:294.2}).wait(1).to({graphics:mask_graphics_194,x:236.5,y:295.4}).wait(1).to({graphics:mask_graphics_195,x:236.5,y:296.6}).wait(1).to({graphics:mask_graphics_196,x:236.5,y:297.7}).wait(1).to({graphics:mask_graphics_197,x:236.5,y:298.9}).wait(1).to({graphics:mask_graphics_198,x:236.5,y:300.1}).wait(1).to({graphics:mask_graphics_199,x:236.5,y:301.3}).wait(1).to({graphics:mask_graphics_200,x:236.5,y:302.4}).wait(1).to({graphics:mask_graphics_201,x:236.5,y:303.6}).wait(1).to({graphics:mask_graphics_202,x:236.5,y:304.8}).wait(1).to({graphics:mask_graphics_203,x:236.5,y:306}).wait(1).to({graphics:mask_graphics_204,x:236.5,y:307.2}).wait(1).to({graphics:mask_graphics_205,x:236.5,y:308.3}).wait(1).to({graphics:mask_graphics_206,x:236.5,y:309.5}).wait(1).to({graphics:mask_graphics_207,x:236.5,y:310.7}).wait(1).to({graphics:mask_graphics_208,x:236.5,y:311.9}).wait(1).to({graphics:mask_graphics_209,x:236.5,y:313}).wait(130));

	// Layer 6
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(25,1,1).p("AosbHUgA8grRABUgD1QBTj2CrhlQCqhmDSgFQDUgGB2BoQBYBPA+Bm");
	this.shape_47.setTransform(296.8,274.5);
	this.shape_47._off = true;

	var maskedShapeInstanceList = [this.shape_47];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_47).wait(85).to({_off:false},0).wait(254));

	// Layer 5 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_9 = new cjs.Graphics().p("AKtWkQn7hTkpmhIfa2hQErGghTH5QhUH6mgErQlGDpl8AAQhqAAhugSg");
	var mask_1_graphics_10 = new cjs.Graphics().p("ALVWrQn9hDk3mWIeq3jQE4GWhCH7QhDH9mWE4QlQECmUAAQhWAAhZgMg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AL+WwQn/gxlFmMId34kQFGGMgxH9QgzH/mLFFQlYEbmuAAQhBAAhDgHg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AMnW0QoBgglRmBIdB5jQFTGBggH/QgiIAmAFSQlgE1nIAAQgrAAgtgDg");
	var mask_1_graphics_13 = new cjs.Graphics().p("ANQW3QoBgQlfl1IcK6fQFfF1gOH/QgRIBl1FfQlmFQnkAAIgrAAg");
	var mask_1_graphics_14 = new cjs.Graphics().p("AAMRQIbR7aQFsFpACIAQAAIBlpFrQlqFroAACIgDAAQn/AAlqlog");
	var mask_1_graphics_15 = new cjs.Graphics().p("AApRtIaW8TQF4FdATH/QARIBldF3QldF3oAASIgzABQnhAAlklLg");
	var mask_1_graphics_16 = new cjs.Graphics().p("ABHSJIZa9KQGCFQAkH+QAjIAlRGCQlQGDn/AkQgxADgwAAQnEAAlekwg");
	var mask_1_graphics_17 = new cjs.Graphics().p("ABmSjIYb9/QGNFEA1H9QA0H+lEGNQlDGOn+A0QhHAIhFAAQmqAAlWkXg");
	var mask_1_graphics_18 = new cjs.Graphics().p("ACGS9IXa+yQGYE2BGH7QBEH9k2GXQk2GZn7BFQhdAMhaAAQmQAAlOj9g");
	var mask_1_graphics_19 = new cjs.Graphics().p("ACnTWIWY/jQGiEpBWH4QBVH6koGhQkoGjn5BWQhyAThuAAQl4AAlEjlg");
	var mask_1_graphics_20 = new cjs.Graphics().p("ADITtMAVUggRQGsEbBnH2QBmH1kaGsQkbGsn1BmQiGAciBAAQliAAk6jPg");
	var mask_1_graphics_21 = new cjs.Graphics().p("ADrUDMAUOgg9QG1EMB4HzQB3HykMG0QkMG2nyB3QiaAliUAAQlMAAkui6g");
	var mask_1_graphics_22 = new cjs.Graphics().p("AEOUZMATHghnQG+D9CIHuQCHHuj9G9Qj9G+nuCIQitAvinAAQk2AAkiikg");
	var mask_1_graphics_23 = new cjs.Graphics().p("AExUtMASAgiPQHGDvCZHpQCXHpjuHGQjvHGnpCYQi/A7i5AAQkjAAkViRg");
	var mask_1_graphics_24 = new cjs.Graphics().p("AFWVAMAQ2gi0QHODgCpHkQCnHjjfHNQjfHOnkCoQjRBJjMAAQkOAAkHh/g");
	var mask_1_graphics_25 = new cjs.Graphics().p("AF7VRMAPsgjVQHUDPC5HeQC4HejQHUQjQHVndC4QjiBXjfAAQj7AAj4hug");
	var mask_1_graphics_26 = new cjs.Graphics().p("AGhViMAOggj2QHbDADJHYQDHHYjAHaQjAHcnXDIQjyBmjyAAQjoAAjoheg");
	var mask_1_graphics_27 = new cjs.Graphics().p("AHHVxMANUgkTQHhCwDYHRQDXHRiwHgQixHinQDXQkAB3kGAAQjVAAjYhPg");
	var mask_1_graphics_28 = new cjs.Graphics().p("AHuV/MAMGgkuQHnCgDnHJQDmHKigHmQigHnnJDnQkPCJkYAAQjDAAjHhCg");
	var mask_1_graphics_29 = new cjs.Graphics().p("AIVWMMAK4glHQHrCQD3HCQD2HBiQHsQiQHsnBD2QkdCbktAAQivAAi2g1g");
	var mask_1_graphics_30 = new cjs.Graphics().p("AI9WYMAJogldQHxCAEFG5QEEG5h/HwQiAHxm5EEQkpCwlBAAQidAAijgqg");
	var mask_1_graphics_31 = new cjs.Graphics().p("AJlWiMAIYglvQH1BuEUGwQESGxhuH0QhwH0mvETQk1DFlXAAQiKAAiQggg");
	var mask_1_graphics_32 = new cjs.Graphics().p("AKOWrMAHIgmAQH3BeEiGnQEhGoheH2QheH4mnEhQk/DbluAAQh2AAh8gXg");
	var mask_1_graphics_33 = new cjs.Graphics().p("AK3WzMAF2gmOQH7BOEwGcQEvGehOH5QhNH7mdEvQlKDzmEAAQhjAAhngQg");
	var mask_1_graphics_34 = new cjs.Graphics().p("ALgW5MAElgmZQH9A9E9GSQE9GUg9H7Qg9H+mSE8QlTELmdAAQhPAAhRgKg");
	var mask_1_graphics_35 = new cjs.Graphics().p("AMJW+MADTgmhQH/AsFLGHQFJGJgrH9QgsH/mIFKQlbEkm2AAQg6AAg8gFg");
	var mask_1_graphics_36 = new cjs.Graphics().p("AMyXCMACCgmnQH/AaFYF9QFWF+gaH+QgbIAl9FXQlhE/nSAAQglAAglgCg");
	var mask_1_graphics_37 = new cjs.Graphics().p("ANbXEMAAwgmqQIAAKFkFwQFjFzgKH/QgJIBlxFjQloFanvAAIgcAAg");
	var mask_1_graphics_38 = new cjs.Graphics().p("ANivmQIAgHFwFlQFvFmAIH/QAHIBllFvQlmFwoAAHg");
	var mask_1_graphics_39 = new cjs.Graphics().p("AM5vjQIAgYF7FYQF7FaAYH+QAZIBlZF6QlZF8oAAYg");
	var mask_1_graphics_40 = new cjs.Graphics().p("AMQvfQH/gpGHFMQGGFNApH9QApH/lMGGQlMGHn/Aqg");
	var mask_1_graphics_41 = new cjs.Graphics().p("ALnvYQH9g6GSE+QGRFAA6H8QA6H9k/GRQk/GSn9A6g");
	var mask_1_graphics_42 = new cjs.Graphics().p("AK+vQQH7hLGcExQGbEzBLH5QBLH8kxGbQkyGcn7BLg");
	var mask_1_graphics_43 = new cjs.Graphics().p("AKWvFQH4hcGmEjQGlElBcH3QBcH4kkGlQkkGmn4Bcg");
	var mask_1_graphics_44 = new cjs.Graphics().p("AJtu5QH1hsGwEVQGuEWBtH1QBsH0kVGuQkWGwn1Btg");
	var mask_1_graphics_45 = new cjs.Graphics().p("AJFuqQHxh9G5EGQG3EIB9HxQB9HwkGG4QkIG4nxB9g");
	var mask_1_graphics_46 = new cjs.Graphics().p("AIeuaQHsiNHBD4QHAD5COHsQCNHsj4HAQj4HBntCOg");
	var mask_1_graphics_47 = new cjs.Graphics().p("AH3uHQHnieHJDpQHIDqCeHnQCeHnjpHIQjqHJnoCeg");
	var mask_1_graphics_48 = new cjs.Graphics().p("AHQtzQHiiuHQDaQHQDbCuHhQCuHijaHPQjaHRniCug");
	var mask_1_graphics_49 = new cjs.Graphics().p("AGqtcQHci+HXDKQHXDLC9HcQC+HbjKHXQjLHXncC+g");
	var mask_1_graphics_50 = new cjs.Graphics().p("AGEtEQHWjOHdC6QHeC8DNHVQDOHVi7HdQi7HenVDNg");
	var mask_1_graphics_51 = new cjs.Graphics().p("AFfsqQHPjdHjCqQHjCsDdHOQDdHOiqHiQirHknPDdg");
	var mask_1_graphics_52 = new cjs.Graphics().p("AE7sOQHHjsHpCaQHoCbDsHHQDtHGibHoQibHpnGDtg");
	var mask_1_graphics_53 = new cjs.Graphics().p("AEXrxQG/j7HuCKQHtCLD7G/QD8G+iLHtQiKHum/D7g");
	var mask_1_graphics_54 = new cjs.Graphics().p("AD0rRQG3kKHyB5QHyB7EJG2QEKG2h6HxQh6Hym2EKg");
	var mask_1_graphics_55 = new cjs.Graphics().p("ADSqwQGtkYH2BpQH2BqEYGtQEYGshpH1QhpH3mtEYg");
	var mask_1_graphics_56 = new cjs.Graphics().p("ACxqNQGjkmH5BYQH6BZEmGjQEmGjhYH5QhZH5mkEng");
	var mask_1_graphics_57 = new cjs.Graphics().p("ACQpoQGak0H8BHQH7BJE0GZQE0GZhHH7QhIH8maE0g");
	var mask_1_graphics_58 = new cjs.Graphics().p("ABxpCQGPlCH9A3QH+A4FBGOQFCGPg3H9Qg3H+mPFCg");
	var mask_1_graphics_59 = new cjs.Graphics().p("ABSoaQGElPH/AlQIAAnFOGEQFPGFgmH9QgmIAmEFPg");
	var mask_1_graphics_60 = new cjs.Graphics().p("AA0nxQF4lbIBAUQIAAWFbF4QFcF6gVH+QgVIBl5Fbg");
	var mask_1_graphics_61 = new cjs.Graphics().p("AAWnGQFuloIAADQIBAFFnFtQFoFugEH/QgEIBltFng");
	var mask_1_graphics_62 = new cjs.Graphics().p("AgFmaQFgl0IBgNQIAgMF0FgQFzFiANH+QAOICliFzg");
	var mask_1_graphics_63 = new cjs.Graphics().p("AgglsQFTl/IAgfQIAgdF/FUQF/FVAeH+QAeIAlUF/g");
	var mask_1_graphics_64 = new cjs.Graphics().p("Ag7k9QFHmKH+gwQH/guGKFHQGKFIAvH9QAvH/lHGKg");
	var mask_1_graphics_65 = new cjs.Graphics().p("AhUkNQE5mVH9hBQH9g+GUE6QGVE6BAH7QBAH9k6GVg");
	var mask_1_graphics_66 = new cjs.Graphics().p("AhtjcQEsmfH6hRQH7hQGeEtQGgEtBRH4QBQH7ksGfg");
	var mask_1_graphics_67 = new cjs.Graphics().p("AiEipQEempH3hiQH4hgGoEeQGpEfBiH2QBhH4keGog");
	var mask_1_graphics_68 = new cjs.Graphics().p("Aiah1QEPmyH0hzQH0hxGyEQQGyERByHyQBzH0kRGyg");
	var mask_1_graphics_69 = new cjs.Graphics().p("AivhAQEBm7HviDQHxiCG6EBQG7EDCDHuQCDHwkCG7g");
	var mask_1_graphics_70 = new cjs.Graphics().p("AjDgKQDynDHriUQHsiSHDDyQHDD0CTHpQCTHsjzHDg");
	var mask_1_graphics_71 = new cjs.Graphics().p("AjVAsQDjnKHlikQHnijHLDkQHLDkCjHkQCkHnjkHLg");
	var mask_1_graphics_72 = new cjs.Graphics().p("AjmBjQDUnRHfi0QHhizHSDVQHTDVCzHeQCzHhjUHSg");
	var mask_1_graphics_73 = new cjs.Graphics().p("Aj2CcQDFnYHYjEQHbjCHZDEQHZDGDDHYQDEHbjFHZg");
	var mask_1_graphics_74 = new cjs.Graphics().p("AkFDVQC1neHSjUQHUjSHfC1QHgC2DTHRQDTHUi2Hgg");
	var mask_1_graphics_75 = new cjs.Graphics().p("AkSEPQClnkHLjjQHNjhHkClQHmClDiHLQDiHMilHlg");
	var mask_1_graphics_76 = new cjs.Graphics().p("AkeFKQCVnpHDjyQHFjxHqCVQHrCVDxHDQDxHFiVHqg");
	var mask_1_graphics_77 = new cjs.Graphics().p("AkpGFQCFnuG7kBQG8j/HvCEQHvCFEAG7QEBG8iFHvg");
	var mask_1_graphics_78 = new cjs.Graphics().p("AkyHBQB0nyGykQQG0kOHzB0QHzB1EPGxQEPG0h0Hzg");
	var mask_1_graphics_79 = new cjs.Graphics().p("Ak6H9QBkn2GokdQGrkdH3BkQH3BjEcGpQEeGqhkH3g");
	var mask_1_graphics_80 = new cjs.Graphics().p("AlAI6QBTn6GekrQGikqH5BTQH6BTErGeQErGhhSH6g");
	var mask_1_graphics_81 = new cjs.Graphics().p("AlFJ3QBCn8GUk5QGXk4H8BCQH9BCE4GVQE5GWhCH9g");
	var mask_1_graphics_82 = new cjs.Graphics().p("AlJK0QAxn+GKlGQGMlFH+AxQH/AxFFGKQFHGMgxH+g");
	var mask_1_graphics_83 = new cjs.Graphics().p("AlMLxQAgn/F/lTQGClSH/AgQIAAgFSF/QFUGBggH/g");
	var mask_1_graphics_84 = new cjs.Graphics().p("AlNMvQAPoAF0lgQF2lfH/APQIBAQFfFzQFgF2gPIAg");
	var mask_1_graphics_85 = new cjs.Graphics().p("AAZgEQFqlsIAgCQIBgBFrFoQFtFpABIAMgmqAAJQgCoAFolrg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_1_graphics_9,x:212.5,y:146.2}).wait(1).to({graphics:mask_1_graphics_10,x:212.5,y:146.3}).wait(1).to({graphics:mask_1_graphics_11,x:212.4,y:146.3}).wait(1).to({graphics:mask_1_graphics_12,x:212.4,y:146.3}).wait(1).to({graphics:mask_1_graphics_13,x:212.3,y:146.3}).wait(1).to({graphics:mask_1_graphics_14,x:212.3,y:146.4}).wait(1).to({graphics:mask_1_graphics_15,x:212.3,y:146.4}).wait(1).to({graphics:mask_1_graphics_16,x:212.2,y:146.5}).wait(1).to({graphics:mask_1_graphics_17,x:212.2,y:146.6}).wait(1).to({graphics:mask_1_graphics_18,x:212.2,y:146.6}).wait(1).to({graphics:mask_1_graphics_19,x:212.2,y:146.7}).wait(1).to({graphics:mask_1_graphics_20,x:212.2,y:146.8}).wait(1).to({graphics:mask_1_graphics_21,x:212.2,y:146.9}).wait(1).to({graphics:mask_1_graphics_22,x:212.2,y:146.9}).wait(1).to({graphics:mask_1_graphics_23,x:212.2,y:147}).wait(1).to({graphics:mask_1_graphics_24,x:212.2,y:147.1}).wait(1).to({graphics:mask_1_graphics_25,x:212.2,y:147.1}).wait(1).to({graphics:mask_1_graphics_26,x:212.2,y:147.2}).wait(1).to({graphics:mask_1_graphics_27,x:212.2,y:147.2}).wait(1).to({graphics:mask_1_graphics_28,x:212.2,y:147.3}).wait(1).to({graphics:mask_1_graphics_29,x:212.2,y:147.3}).wait(1).to({graphics:mask_1_graphics_30,x:212.2,y:147.4}).wait(1).to({graphics:mask_1_graphics_31,x:212.1,y:147.4}).wait(1).to({graphics:mask_1_graphics_32,x:212.1,y:147.4}).wait(1).to({graphics:mask_1_graphics_33,x:212.1,y:147.5}).wait(1).to({graphics:mask_1_graphics_34,x:212.1,y:147.5}).wait(1).to({graphics:mask_1_graphics_35,x:212.1,y:147.5}).wait(1).to({graphics:mask_1_graphics_36,x:212.1,y:147.6}).wait(1).to({graphics:mask_1_graphics_37,x:212.1,y:147.6}).wait(1).to({graphics:mask_1_graphics_38,x:212.1,y:147.6}).wait(1).to({graphics:mask_1_graphics_39,x:212.1,y:147.6}).wait(1).to({graphics:mask_1_graphics_40,x:212.1,y:147.6}).wait(1).to({graphics:mask_1_graphics_41,x:212.2,y:147.4}).wait(1).to({graphics:mask_1_graphics_42,x:212.2,y:147.2}).wait(1).to({graphics:mask_1_graphics_43,x:212.3,y:146.9}).wait(1).to({graphics:mask_1_graphics_44,x:212.3,y:146.6}).wait(1).to({graphics:mask_1_graphics_45,x:212.4,y:146.1}).wait(1).to({graphics:mask_1_graphics_46,x:212.4,y:145.7}).wait(1).to({graphics:mask_1_graphics_47,x:212.5,y:145.1}).wait(1).to({graphics:mask_1_graphics_48,x:212.5,y:144.5}).wait(1).to({graphics:mask_1_graphics_49,x:212.5,y:143.8}).wait(1).to({graphics:mask_1_graphics_50,x:212.6,y:143}).wait(1).to({graphics:mask_1_graphics_51,x:212.6,y:142.2}).wait(1).to({graphics:mask_1_graphics_52,x:212.6,y:141.4}).wait(1).to({graphics:mask_1_graphics_53,x:212.6,y:140.4}).wait(1).to({graphics:mask_1_graphics_54,x:212.7,y:139.4}).wait(1).to({graphics:mask_1_graphics_55,x:212.7,y:138.4}).wait(1).to({graphics:mask_1_graphics_56,x:212.7,y:137.3}).wait(1).to({graphics:mask_1_graphics_57,x:212.7,y:136.1}).wait(1).to({graphics:mask_1_graphics_58,x:212.7,y:134.9}).wait(1).to({graphics:mask_1_graphics_59,x:212.8,y:133.6}).wait(1).to({graphics:mask_1_graphics_60,x:212.8,y:132.2}).wait(1).to({graphics:mask_1_graphics_61,x:212.8,y:130.8}).wait(1).to({graphics:mask_1_graphics_62,x:212.9,y:129.4}).wait(1).to({graphics:mask_1_graphics_63,x:212.9,y:127.9}).wait(1).to({graphics:mask_1_graphics_64,x:213,y:126.4}).wait(1).to({graphics:mask_1_graphics_65,x:213.1,y:124.8}).wait(1).to({graphics:mask_1_graphics_66,x:213.2,y:123.2}).wait(1).to({graphics:mask_1_graphics_67,x:213.2,y:121.5}).wait(1).to({graphics:mask_1_graphics_68,x:213.3,y:119.8}).wait(1).to({graphics:mask_1_graphics_69,x:213.4,y:118.1}).wait(1).to({graphics:mask_1_graphics_70,x:213.5,y:116.3}).wait(1).to({graphics:mask_1_graphics_71,x:213.5,y:114.5}).wait(1).to({graphics:mask_1_graphics_72,x:213.6,y:112.6}).wait(1).to({graphics:mask_1_graphics_73,x:213.7,y:110.8}).wait(1).to({graphics:mask_1_graphics_74,x:213.7,y:108.9}).wait(1).to({graphics:mask_1_graphics_75,x:213.8,y:106.9}).wait(1).to({graphics:mask_1_graphics_76,x:213.8,y:105}).wait(1).to({graphics:mask_1_graphics_77,x:213.9,y:103}).wait(1).to({graphics:mask_1_graphics_78,x:213.9,y:101}).wait(1).to({graphics:mask_1_graphics_79,x:213.9,y:99}).wait(1).to({graphics:mask_1_graphics_80,x:214,y:97}).wait(1).to({graphics:mask_1_graphics_81,x:214,y:95}).wait(1).to({graphics:mask_1_graphics_82,x:214,y:92.9}).wait(1).to({graphics:mask_1_graphics_83,x:214.1,y:90.8}).wait(1).to({graphics:mask_1_graphics_84,x:214.1,y:88.8}).wait(1).to({graphics:mask_1_graphics_85,x:214.1,y:87.1}).wait(254));

	// Layer 4
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(25,1,1).p("ApBHbQALmYAehWQBTj2CrhlQCqhmDTgFQDTgGB2BoQBYBPA/Bm");
	this.shape_48.setTransform(297.2,148.5);
	this.shape_48._off = true;

	var maskedShapeInstanceList = [this.shape_48];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_48).wait(9).to({_off:false},0).wait(330));

	// Base
	this.instance_3 = new lib.Symbol1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(275,275);
	this.instance_3.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(339));

	// Background
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#F59E9E").ss(3,1,1).p("AMvQ5I5dAAMAAAghxIZdAAg");
	this.shape_49.setTransform(275,275,3.373,2.543);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_50.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50},{t:this.shape_49}]}).wait(339));

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