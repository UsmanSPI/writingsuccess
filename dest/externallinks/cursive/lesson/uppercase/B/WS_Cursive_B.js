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
	this.shape.graphics.f("#FFFFFF").s().p("A5OY7IAThMIP3/3QjqDDkhCmQkICYkwB/Ig9ASQiOAAAAiaQAAh9ELhXQEpiPHOk/QDYitFvm5IC2kUQB1ikBPAAQCVAAAACPIgMA3IFviJQDbg9CtAAQDDAACjBGQCfBDBzB/QBwB6A9CnQA9CnAADCQAACthHCnQhCCbh6CMQhwCAiXBsIkzCtQBYDLgBDPQAADdheDSQhaDGihCaQihCYjLBVQjSBYjaAAQieAAidgwQiVguiMhVQiGhVh2hzIjJj6QjhKCi5AAQiPAAAAiWgAk6VeQCWA6CgAAQCgAACYhAQCVg9B5hwQB2hxBDiOQBJiYAAikQAAinhMiVQi5AlhkAAQjYAAh8hZQiRhnAAjHQAAiJBdhGQBSg9CIAAQCnAACYBJQCSBHB3CCQEXh0C9i8QBqhqA5h2QBDiAAAiGQAAkOiXiqQhNhVhmgqQhugxiGAAQjOAAkwB5QjYBZj+CRIuGcjQCVBtCrA9QCzBDCzAAQBYAACRg5QCVg3A/AAQA8AAAuAwQArAxAAA6QAAB/jwBJQi1A3itAAQizAAjOg9QB4BqCSA6gAHDBBIBXgMQhGgtiyg2QAABvChAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-187.5,-174.4,375,349);


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


(lib._1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ApLHqIAAk2IE2AAIAAE2g");
	var mask_graphics_1 = new cjs.Graphics().p("AimCiIAAlDIFNAAIAAFDg");
	var mask_graphics_2 = new cjs.Graphics().p("AixCoIAAlPIFjAAIAAFPg");
	var mask_graphics_3 = new cjs.Graphics().p("Ai9CvIAAldIF7AAIAAFdg");
	var mask_graphics_4 = new cjs.Graphics().p("AjJC2IAAlrIGTAAIAAFrg");
	var mask_graphics_5 = new cjs.Graphics().p("AjUC8IAAl3IGpAAIAAF3g");
	var mask_graphics_6 = new cjs.Graphics().p("AjgDDIAAmFIHBAAIAAGFg");
	var mask_graphics_7 = new cjs.Graphics().p("AjsDKIAAmTIHZAAIAAGTg");
	var mask_graphics_8 = new cjs.Graphics().p("Aj3DQIAAmfIHvAAIAAGfg");
	var mask_graphics_9 = new cjs.Graphics().p("AkDDXIAAmtIIHAAIAAGtg");
	var mask_graphics_10 = new cjs.Graphics().p("AkPDeIAAm7IIfAAIAAG7g");
	var mask_graphics_11 = new cjs.Graphics().p("AkaDkIAAnHII1AAIAAHHg");
	var mask_graphics_12 = new cjs.Graphics().p("AkmDrIAAnVIJNAAIAAHVg");
	var mask_graphics_13 = new cjs.Graphics().p("AkyDyIAAnjIJlAAIAAHjg");
	var mask_graphics_14 = new cjs.Graphics().p("Ak9D4IAAnvIJ7AAIAAHvg");
	var mask_graphics_15 = new cjs.Graphics().p("AlJD/IAAn9IKTAAIAAH9g");
	var mask_graphics_16 = new cjs.Graphics().p("AlVEGIAAoKIKrAAIAAIKg");
	var mask_graphics_17 = new cjs.Graphics().p("AlgEMIAAoXILBAAIAAIXg");
	var mask_graphics_18 = new cjs.Graphics().p("AlsETIAAolILZAAIAAIlg");
	var mask_graphics_19 = new cjs.Graphics().p("Al4EaIAAozILxAAIAAIzg");
	var mask_graphics_20 = new cjs.Graphics().p("AmEEgIAAo/IMJAAIAAI/g");
	var mask_graphics_21 = new cjs.Graphics().p("AmPEnIAApNIMfAAIAAJNg");
	var mask_graphics_22 = new cjs.Graphics().p("AmbEuIAApaIM3AAIAAJag");
	var mask_graphics_23 = new cjs.Graphics().p("AmnE0IAApnINOAAIAAJng");
	var mask_graphics_24 = new cjs.Graphics().p("AmyE7IAAp1INlAAIAAJ1g");
	var mask_graphics_25 = new cjs.Graphics().p("Am+FCIAAqDIN9AAIAAKDg");
	var mask_graphics_26 = new cjs.Graphics().p("AnKFIIAAqPIOUAAIAAKPg");
	var mask_graphics_27 = new cjs.Graphics().p("AnVFPIAAqdIOrAAIAAKdg");
	var mask_graphics_28 = new cjs.Graphics().p("AnhFWIAAqrIPDAAIAAKrg");
	var mask_graphics_29 = new cjs.Graphics().p("AntFcIAAq3IPaAAIAAK3g");
	var mask_graphics_30 = new cjs.Graphics().p("An4FjIAArFIPxAAIAALFg");
	var mask_graphics_31 = new cjs.Graphics().p("AoEFqIAArSIQJAAIAALSg");
	var mask_graphics_32 = new cjs.Graphics().p("AoQFwIAArfIQhAAIAALfg");
	var mask_graphics_33 = new cjs.Graphics().p("AobF3IAArtIQ3AAIAALtg");
	var mask_graphics_34 = new cjs.Graphics().p("AonF+IAAr7IRPAAIAAL7g");
	var mask_graphics_35 = new cjs.Graphics().p("AozGEIAAsHIRnAAIAAMHg");
	var mask_graphics_36 = new cjs.Graphics().p("Ao+GLIAAsVIR9AAIAAMVg");
	var mask_graphics_37 = new cjs.Graphics().p("ApKGSIAAsjISVAAIAAMjg");
	var mask_graphics_38 = new cjs.Graphics().p("ApWGYIAAsvISsAAIAAMvg");
	var mask_graphics_39 = new cjs.Graphics().p("AphGfIAAs9ITDAAIAAM9g");
	var mask_graphics_40 = new cjs.Graphics().p("AptGmIAAtLITbAAIAANLg");
	var mask_graphics_41 = new cjs.Graphics().p("Ap5GsIAAtYITyAAIAANYg");
	var mask_graphics_42 = new cjs.Graphics().p("AqEGzIAAtlIUJAAIAANlg");
	var mask_graphics_43 = new cjs.Graphics().p("AqQG6IAAtzIUhAAIAANzg");
	var mask_graphics_44 = new cjs.Graphics().p("AqcHAIAAt/IU5AAIAAN/g");
	var mask_graphics_45 = new cjs.Graphics().p("AqnHHIAAuNIVPAAIAAONg");
	var mask_graphics_46 = new cjs.Graphics().p("AqzHOIAAubIVnAAIAAObg");
	var mask_graphics_47 = new cjs.Graphics().p("Aq/HUIAAuoIV/AAIAAOog");
	var mask_graphics_48 = new cjs.Graphics().p("ArKHbIAAu1IWVAAIAAO1g");
	var mask_graphics_49 = new cjs.Graphics().p("ArWHiIAAvDIWtAAIAAPDg");
	var mask_graphics_50 = new cjs.Graphics().p("AriHoIAAvPIXEAAIAAPPg");
	var mask_graphics_51 = new cjs.Graphics().p("ArtHvIAAvdIXbAAIAAPdg");
	var mask_graphics_52 = new cjs.Graphics().p("Ar5H2IAAvrIXzAAIAAPrg");
	var mask_graphics_53 = new cjs.Graphics().p("AsFH8IAAv4IYKAAIAAP4g");
	var mask_graphics_54 = new cjs.Graphics().p("AsQIDIAAwFIYhAAIAAQFg");
	var mask_graphics_55 = new cjs.Graphics().p("AscIKIAAwTIY5AAIAAQTg");
	var mask_graphics_56 = new cjs.Graphics().p("AsoIQIAAwgIZRAAIAAQgg");
	var mask_graphics_57 = new cjs.Graphics().p("AszIXIAAwtIZnAAIAAQtg");
	var mask_graphics_58 = new cjs.Graphics().p("As/IeIAAw7IZ/AAIAAQ7g");
	var mask_graphics_59 = new cjs.Graphics().p("AtLIkIAAxHIaXAAIAARHg");
	var mask_graphics_60 = new cjs.Graphics().p("AtWIrIAAxVIauAAIAARVg");
	var mask_graphics_61 = new cjs.Graphics().p("AtiIyIAAxjIbFAAIAARjg");
	var mask_graphics_62 = new cjs.Graphics().p("AtuI4IAAxvIbdAAIAARvg");
	var mask_graphics_63 = new cjs.Graphics().p("At5I/IAAx9Ib0AAIAAR9g");
	var mask_graphics_64 = new cjs.Graphics().p("AuFJGIAAyLIcLAAIAASLg");
	var mask_graphics_65 = new cjs.Graphics().p("AuRJMIAAyXIcjAAIAASXg");
	var mask_graphics_66 = new cjs.Graphics().p("AucJTIAAylIc5AAIAASlg");
	var mask_graphics_67 = new cjs.Graphics().p("AuoJaIAAyzIdRAAIAASzg");
	var mask_graphics_68 = new cjs.Graphics().p("Au0JgIAAy/IdpAAIAAS/g");
	var mask_graphics_69 = new cjs.Graphics().p("Au/JnIAAzNId/AAIAATNg");
	var mask_graphics_70 = new cjs.Graphics().p("AvLJuIAAzbIeXAAIAATbg");
	var mask_graphics_71 = new cjs.Graphics().p("AvXJ0IAAznIevAAIAATng");
	var mask_graphics_72 = new cjs.Graphics().p("AviJ7IAAz1IfFAAIAAT1g");
	var mask_graphics_73 = new cjs.Graphics().p("AvoKKIAA0TIfRAAIAAUTg");
	var mask_graphics_74 = new cjs.Graphics().p("AvuKYIAA0vIfdAAIAAUvg");
	var mask_graphics_75 = new cjs.Graphics().p("Av0KnIAA1NIfpAAIAAVNg");
	var mask_graphics_76 = new cjs.Graphics().p("Av6K2IAA1rIf1AAIAAVrg");
	var mask_graphics_77 = new cjs.Graphics().p("AwALFIAA2JMAgBAAAIAAWJg");
	var mask_graphics_78 = new cjs.Graphics().p("AwGLUIAA2nMAgNAAAIAAWng");
	var mask_graphics_79 = new cjs.Graphics().p("AwMLjIAA3FMAgZAAAIAAXFg");
	var mask_graphics_80 = new cjs.Graphics().p("AwSLxIAA3hMAglAAAIAAXhg");
	var mask_graphics_81 = new cjs.Graphics().p("AwYMAIAA3/MAgwAAAIAAX/g");
	var mask_graphics_82 = new cjs.Graphics().p("AweMPIAA4dMAg9AAAIAAYdg");
	var mask_graphics_83 = new cjs.Graphics().p("AwkMeIAA47MAhJAAAIAAY7g");
	var mask_graphics_84 = new cjs.Graphics().p("AwpMtIAA5ZMAhUAAAIAAZZg");
	var mask_graphics_85 = new cjs.Graphics().p("AwvM7IAA52MAhgAAAIAAZ2g");
	var mask_graphics_86 = new cjs.Graphics().p("Aw1NKIAA6TMAhrAAAIAAaTg");
	var mask_graphics_87 = new cjs.Graphics().p("Aw7NZIAA6xMAh3AAAIAAaxg");
	var mask_graphics_88 = new cjs.Graphics().p("AxBNoIAA7PMAiDAAAIAAbPg");
	var mask_graphics_89 = new cjs.Graphics().p("AxHN3IAA7tMAiPAAAIAAbtg");
	var mask_graphics_90 = new cjs.Graphics().p("AxNOGIAA8LMAibAAAIAAcLg");
	var mask_graphics_91 = new cjs.Graphics().p("AxTOVIAA8oMAinAAAIAAcog");
	var mask_graphics_92 = new cjs.Graphics().p("AxZOjIAA9FMAizAAAIAAdFg");
	var mask_graphics_93 = new cjs.Graphics().p("AxfOyIAA9jMAi/AAAIAAdjg");
	var mask_graphics_94 = new cjs.Graphics().p("AxkPBIAA+BMAjJAAAIAAeBg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-58.8,y:49}).wait(1).to({graphics:mask_graphics_1,x:-100.9,y:81.8}).wait(1).to({graphics:mask_graphics_2,x:-99.7,y:81.2}).wait(1).to({graphics:mask_graphics_3,x:-98.5,y:80.5}).wait(1).to({graphics:mask_graphics_4,x:-97.4,y:79.8}).wait(1).to({graphics:mask_graphics_5,x:-96.2,y:79.2}).wait(1).to({graphics:mask_graphics_6,x:-95,y:78.5}).wait(1).to({graphics:mask_graphics_7,x:-93.9,y:77.8}).wait(1).to({graphics:mask_graphics_8,x:-92.7,y:77.2}).wait(1).to({graphics:mask_graphics_9,x:-91.5,y:76.5}).wait(1).to({graphics:mask_graphics_10,x:-90.4,y:75.8}).wait(1).to({graphics:mask_graphics_11,x:-89.2,y:75.2}).wait(1).to({graphics:mask_graphics_12,x:-88,y:74.5}).wait(1).to({graphics:mask_graphics_13,x:-86.9,y:73.9}).wait(1).to({graphics:mask_graphics_14,x:-85.7,y:73.2}).wait(1).to({graphics:mask_graphics_15,x:-84.5,y:72.5}).wait(1).to({graphics:mask_graphics_16,x:-83.4,y:71.9}).wait(1).to({graphics:mask_graphics_17,x:-82.2,y:71.2}).wait(1).to({graphics:mask_graphics_18,x:-81,y:70.5}).wait(1).to({graphics:mask_graphics_19,x:-79.9,y:69.9}).wait(1).to({graphics:mask_graphics_20,x:-78.7,y:69.2}).wait(1).to({graphics:mask_graphics_21,x:-77.6,y:68.5}).wait(1).to({graphics:mask_graphics_22,x:-76.4,y:67.9}).wait(1).to({graphics:mask_graphics_23,x:-75.2,y:67.2}).wait(1).to({graphics:mask_graphics_24,x:-74.1,y:66.5}).wait(1).to({graphics:mask_graphics_25,x:-72.9,y:65.9}).wait(1).to({graphics:mask_graphics_26,x:-71.7,y:65.2}).wait(1).to({graphics:mask_graphics_27,x:-70.6,y:64.5}).wait(1).to({graphics:mask_graphics_28,x:-69.4,y:63.9}).wait(1).to({graphics:mask_graphics_29,x:-68.2,y:63.2}).wait(1).to({graphics:mask_graphics_30,x:-67.1,y:62.5}).wait(1).to({graphics:mask_graphics_31,x:-65.9,y:61.9}).wait(1).to({graphics:mask_graphics_32,x:-64.7,y:61.2}).wait(1).to({graphics:mask_graphics_33,x:-63.6,y:60.5}).wait(1).to({graphics:mask_graphics_34,x:-62.4,y:59.9}).wait(1).to({graphics:mask_graphics_35,x:-61.2,y:59.2}).wait(1).to({graphics:mask_graphics_36,x:-60.1,y:58.6}).wait(1).to({graphics:mask_graphics_37,x:-58.9,y:57.9}).wait(1).to({graphics:mask_graphics_38,x:-57.7,y:57.2}).wait(1).to({graphics:mask_graphics_39,x:-56.6,y:56.6}).wait(1).to({graphics:mask_graphics_40,x:-55.4,y:55.9}).wait(1).to({graphics:mask_graphics_41,x:-54.2,y:55.2}).wait(1).to({graphics:mask_graphics_42,x:-53.1,y:54.6}).wait(1).to({graphics:mask_graphics_43,x:-51.9,y:53.9}).wait(1).to({graphics:mask_graphics_44,x:-50.7,y:53.2}).wait(1).to({graphics:mask_graphics_45,x:-49.6,y:52.6}).wait(1).to({graphics:mask_graphics_46,x:-48.4,y:51.9}).wait(1).to({graphics:mask_graphics_47,x:-47.2,y:51.2}).wait(1).to({graphics:mask_graphics_48,x:-46.1,y:50.6}).wait(1).to({graphics:mask_graphics_49,x:-44.9,y:49.9}).wait(1).to({graphics:mask_graphics_50,x:-43.7,y:49.2}).wait(1).to({graphics:mask_graphics_51,x:-42.6,y:48.6}).wait(1).to({graphics:mask_graphics_52,x:-41.4,y:47.9}).wait(1).to({graphics:mask_graphics_53,x:-40.2,y:47.2}).wait(1).to({graphics:mask_graphics_54,x:-39.1,y:46.6}).wait(1).to({graphics:mask_graphics_55,x:-37.9,y:45.9}).wait(1).to({graphics:mask_graphics_56,x:-36.8,y:45.2}).wait(1).to({graphics:mask_graphics_57,x:-35.6,y:44.6}).wait(1).to({graphics:mask_graphics_58,x:-34.4,y:43.9}).wait(1).to({graphics:mask_graphics_59,x:-33.3,y:43.2}).wait(1).to({graphics:mask_graphics_60,x:-32.1,y:42.6}).wait(1).to({graphics:mask_graphics_61,x:-30.9,y:41.9}).wait(1).to({graphics:mask_graphics_62,x:-29.8,y:41.2}).wait(1).to({graphics:mask_graphics_63,x:-28.6,y:40.6}).wait(1).to({graphics:mask_graphics_64,x:-27.4,y:39.9}).wait(1).to({graphics:mask_graphics_65,x:-26.3,y:39.2}).wait(1).to({graphics:mask_graphics_66,x:-25.1,y:38.6}).wait(1).to({graphics:mask_graphics_67,x:-23.9,y:37.9}).wait(1).to({graphics:mask_graphics_68,x:-22.8,y:37.2}).wait(1).to({graphics:mask_graphics_69,x:-21.6,y:36.6}).wait(1).to({graphics:mask_graphics_70,x:-20.4,y:35.9}).wait(1).to({graphics:mask_graphics_71,x:-19.3,y:35.2}).wait(1).to({graphics:mask_graphics_72,x:-18.1,y:34.5}).wait(1).to({graphics:mask_graphics_73,x:-17.5,y:33.1}).wait(1).to({graphics:mask_graphics_74,x:-16.9,y:31.6}).wait(1).to({graphics:mask_graphics_75,x:-16.3,y:30.1}).wait(1).to({graphics:mask_graphics_76,x:-15.8,y:28.6}).wait(1).to({graphics:mask_graphics_77,x:-15.2,y:27.2}).wait(1).to({graphics:mask_graphics_78,x:-14.6,y:25.7}).wait(1).to({graphics:mask_graphics_79,x:-14,y:24.2}).wait(1).to({graphics:mask_graphics_80,x:-13.4,y:22.8}).wait(1).to({graphics:mask_graphics_81,x:-12.8,y:21.3}).wait(1).to({graphics:mask_graphics_82,x:-12.2,y:19.8}).wait(1).to({graphics:mask_graphics_83,x:-11.6,y:18.3}).wait(1).to({graphics:mask_graphics_84,x:-11.1,y:16.8}).wait(1).to({graphics:mask_graphics_85,x:-10.5,y:15.4}).wait(1).to({graphics:mask_graphics_86,x:-9.9,y:13.9}).wait(1).to({graphics:mask_graphics_87,x:-9.3,y:12.4}).wait(1).to({graphics:mask_graphics_88,x:-8.7,y:10.9}).wait(1).to({graphics:mask_graphics_89,x:-8.2,y:9.5}).wait(1).to({graphics:mask_graphics_90,x:-7.6,y:8}).wait(1).to({graphics:mask_graphics_91,x:-7,y:6.5}).wait(1).to({graphics:mask_graphics_92,x:-6.4,y:5}).wait(1).to({graphics:mask_graphics_93,x:-5.8,y:3.6}).wait(1).to({graphics:mask_graphics_94,x:-5.2,y:2.1}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(20,1,1).p("AumM0QQ1nmIkqPID0ny");

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.5,67,17,25);


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
	this.instance.setTransform(1,11.9,1,1,-104.7,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.2,rotation:2.6,guide:{path:[1,12,75.4,-7.9,65.8,56.6]}},89).wait(1));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ADFZnQsHg0oApIQoApJA1sGQAysGJJoAMAmlAsEQoTHRqwAAQhFAAhGgEg");
	var mask_graphics_1 = new cjs.Graphics().p("ACbZ2QsEhPnqpbQnrpbBRsDQBOsEJbnqMAk9AtbQoGGmqEAAQhoAAhsgLg");
	var mask_graphics_2 = new cjs.Graphics().p("ABzaDQsBhsnUpsQnUpsBtsAQBqsBJsnUMAjSAuwQn5F9paAAQiKAAiPgUg");
	var mask_graphics_3 = new cjs.Graphics().p("ABMaMQr9iIm9p9Qm9p8CIr8QCHr8J8m9MAhkAwAQnpFVozAAQirAAixgfg");
	var mask_graphics_4 = new cjs.Graphics().p("AAlaRQr3ijmlqNQmmqMCkr2QCir3KNmmMAfyAxNQnXEwoNAAQjLAAjUgug");
	var mask_graphics_5 = new cjs.Graphics().p("AAAaTQrwi+mOqcQmOqbDArwQC+rwKbmOMAd+AyUQnDENnqAAQjqAAj0g+g");
	var mask_graphics_6 = new cjs.Graphics().p("AgjaSQrqjal1qqQl1qpDbroQDZrpKpl1MAcIAzYQmvDrnHAAQkKAAkRhQg");
	var mask_graphics_7 = new cjs.Graphics().p("AhFaNQrij1lcq2Qlcq3D2rfQD0rhK2lcMAaPA0XQmYDMmmAAQkpAAkuhlg");
	var mask_graphics_8 = new cjs.Graphics().p("AhnaFQrYkQlCrCQlDrCERrXQEOrYLDlCMAYTA1SQmACvmFAAQlIAAlLh8g");
	var mask_graphics_9 = new cjs.Graphics().p("AiHZ6QrOkqkorOQkprNErrNQEprNLOkpMAWWA2JQlnCUlmAAQlmAAlmiVg");
	var mask_graphics_10 = new cjs.Graphics().p("AimZrQrClEkOrYQkPrYFFrBQFDrCLYkOMAUXA26QlLB7lHAAQmHAAl/iwg");
	var mask_graphics_11 = new cjs.Graphics().p("AjDZZQq2lej0rhQjzrhFeq1QFcq1Lgj0MASYA3nQkwBkknAAQmoAAmWjNg");
	var mask_graphics_12 = new cjs.Graphics().p("AjfZDQqpl2jZrqQjYrpF3qoQF1qoLpjZMAQVA4PQkSBQkJAAQnIAAmtjtg");
	var mask_graphics_13 = new cjs.Graphics().p("Aj6YrQqbmPi9ryQi9rwGPqaQGOqaLwi9MAOSA4yQjzA9jqAAQnrAAnCkNg");
	var mask_graphics_14 = new cjs.Graphics().p("AkTYPQqMmnihr4Qiir3GnqKQGmqML2iiMAMNA5SQjSAtjLAAQoPAAnVkxg");
	var mask_graphics_15 = new cjs.Graphics().p("AkqXvQp8m+iGr9QiGr8G+p7QG9p8L9iGMAKGA5sQixAfiqAAQo1AAnmlXg");
	var mask_graphics_16 = new cjs.Graphics().p("AlAXNQprnVhrsCQhqsAHWpqQHUprMAhrMAIAA6BQiOAUiJAAQpcAAn3l+g");
	var mask_graphics_17 = new cjs.Graphics().p("AlUWnQpanrhOsFQhOsEHspYQHqpaMDhOMAF5A6QQhqALhnAAQqGAAoFmng");
	var mask_graphics_18 = new cjs.Graphics().p("AlnV+QpHoBgysHQgysGIBpGQIApIMGgyMADxA6cQhFAFhEAAQqyAAoSnTg");
	var mask_graphics_19 = new cjs.Graphics().p("Al3VSQo1oWgVsIQgWsIIWozQIUo0MIgWMABoA6iIg8ABQriAAocoAg");
	var mask_graphics_20 = new cjs.Graphics().p("AmWUjQohoqAHsIQAHsJIqofQInohMJAHMgAgA6jQsJgHoeoog");
	var mask_graphics_21 = new cjs.Graphics().p("AnnTyQoMo9AjsHQAjsII9oLQI7oMMIAjMgCoA6fQsIgjoKo8g");
	var mask_graphics_22 = new cjs.Graphics().p("Ao2TCQn3pRA/sFQBAsGJQn1QJOn3MGA/MgExA6WQsFg/n2pOg");
	var mask_graphics_23 = new cjs.Graphics().p("AqCSRQnipjBcsCQBbsDJingQJgnhMDBbMgG4A6JQsDhbnfpgg");
	var mask_graphics_24 = new cjs.Graphics().p("ArNRfQnLpzB4r+QB3sAJznJQJxnLL/B4MgI/A52Qr/h3nJpyg");
	var mask_graphics_25 = new cjs.Graphics().p("AsVQuQm0qECTr5QCTr7KDmyQKBmzL7CTMgLGA5fQr5iUmyqBg");
	var mask_graphics_26 = new cjs.Graphics().p("AtcP8QmbqTCur0QCvr0KTmaQKQmcL1CuMgNLA5DQr0ivmbqRg");
	var mask_graphics_27 = new cjs.Graphics().p("AufPKQmEqhDKrtQDKruKhmCQKfmELuDKMgPPA4iQrtjKmCqgg");
	var mask_graphics_28 = new cjs.Graphics().p("AvhOYQlrqvDmrlQDlrmKvlpQKslrLmDlMgRSA38Qrljmlqqtg");
	var mask_graphics_29 = new cjs.Graphics().p("AwgNmQlRq8EArcQEArdK7lQQK6lSLdEAMgTUA3RQrckAlRq6g");
	var mask_graphics_30 = new cjs.Graphics().p("AxSM8Qk8rFEWrUQEWrVLFk7QLDk8LVEWMgU9A2pQrVkWk7rEg");
	var mask_graphics_31 = new cjs.Graphics().p("AyDMTQkmrPEsrLQEsrMLOklQLNknLMEsMgWnA1/QrMkskmrNg");
	var mask_graphics_32 = new cjs.Graphics().p("AyyLpQkQrXFBrCQFCrDLXkPQLVkRLDFCMgYPA1RQrDlBkQrWg");
	var mask_graphics_33 = new cjs.Graphics().p("AzfLAQj6rfFXq4QFXq5Lfj5QLdj7K4FXMgZ2A0hQq4lXj6rdg");
	var mask_graphics_34 = new cjs.Graphics().p("A0KKWQjjrlFrquQFsquLmjjQLljkKtFsMgbbAztQqulsjjrlg");
	var mask_graphics_35 = new cjs.Graphics().p("A0zJtQjNrsGBqjQGAqiLtjMQLrjOKiGBMgc/Ay2QqimBjNrrg");
	var mask_graphics_36 = new cjs.Graphics().p("A1aJEQi2ryGVqWQGVqXLxi1QLyi3KWGVMgegAx8QqXmVi2rxg");
	var mask_graphics_37 = new cjs.Graphics().p("A1+IcQigr4GpqKQGpqJL2ifQL3igKKGpMggBAw/QqKmoier2g");
	var mask_graphics_38 = new cjs.Graphics().p("A2hHzQiIr7G8p9QG8p9L7iHQL7iJJ9G8MghfAwAQp8m8iIr7g");
	var mask_graphics_39 = new cjs.Graphics().p("A3CHLQhxr/HQpvQHPpvL/hwQL/hxJvHPMgi7Au9QpvnPhxr/g");
	var mask_graphics_40 = new cjs.Graphics().p("A3gGkQhZsDHhpgQHiphMChYQMChbJhHiMgkVAt4QphnihZsBg");
	var mask_graphics_41 = new cjs.Graphics().p("A38F9QhCsFH0pRQH0pSMEhBQMFhDJSH0MgltAswQpSn0hCsEg");
	var mask_graphics_42 = new cjs.Graphics().p("A4WFXQgqsHIGpCQIGpCMFgqQMHgrJCIGMgnDArlQpCoGgrsFg");
	var mask_graphics_43 = new cjs.Graphics().p("A4tExQgTsHIXozQIYoyMGgSQMHgUIyIXMgoWAqYQoyoXgTsGg");
	var mask_graphics_44 = new cjs.Graphics().p("A5CEMQAFsIIoohQIooiMGAGQMIADIiIoMgpnApIQoiooAEsGg");
	var mask_graphics_45 = new cjs.Graphics().p("A5UDoQAcsHI4oRQI5oRMGAdQMHAbIQI5Mgq1An2QoRo4AcsGg");
	var mask_graphics_46 = new cjs.Graphics().p("A5kDEQA0sGJIn/QJIn/MFA1QMFAyIAJIMgsCAmiQn/pIAzsFg");
	var mask_graphics_47 = new cjs.Graphics().p("A5xCiQBLsEJXntQJXnuMDBMQMEBKHtJYMgtLAlLQntpYBLsCg");
	var mask_graphics_48 = new cjs.Graphics().p("A58CAQBisCJmnaQJmnbMABjQMBBiHbJmMguSAjyQnbpmBjsAg");
	var mask_graphics_49 = new cjs.Graphics().p("A6FBfQB6r+J0nIQJ0nIL9B7QL+B4HIJ0MgvXAiXQnHp0B5r8g");
	var mask_graphics_50 = new cjs.Graphics().p("A6LA+QCRr6KBm0QKCm1L5CSQL6CQG0KBMgwXAg7Qm1qCCRr5g");
	var mask_graphics_51 = new cjs.Graphics().p("A6PAfQCor1KPmhQKOmhL0CpQL1CmGhKPMgxWAfbQmhqOCor0g");
	var mask_graphics_52 = new cjs.Graphics().p("A6RAAQC/rwKbmNQKbmNLvDAQLvC+GNKbMgyRAd6QmNqbC+rug");
	var mask_graphics_53 = new cjs.Graphics().p("A6QgdQDWrrKnl4QKml5LoDXQLqDUF5KnMgzKAcYQl5qnDVrng");
	var mask_graphics_54 = new cjs.Graphics().p("A6Mg6QDsrkKylkQKxljLiDtQLiDrFkKxMgz/Aa0QlkqyDsrgg");
	var mask_graphics_55 = new cjs.Graphics().p("A6HhWQEDrdK8lOQK8lPLaEDQLbECFPK8Mg0yAZOQlPq8ECrZg");
	var mask_graphics_56 = new cjs.Graphics().p("A5/hyQEZrULGk5QLFk5LSEZQLUEXE5LGMg1hAXnQk6rGEYrRg");
	var mask_graphics_57 = new cjs.Graphics().p("A50iMQEurLLPkkQLOkjLKEvQLKEtEkLPMg2OAV+QkjrPEurIg");
	var mask_graphics_58 = new cjs.Graphics().p("A5oimQFErBLYkOQLWkOLAFFQLBFDEOLXMg22AUUQkOrXFDq/g");
	var mask_graphics_59 = new cjs.Graphics().p("A5Zi+QFZq4Lgj3QLej4K2FaQK3FYD3LeMg3cASqQj3rfFYq0g");
	var mask_graphics_60 = new cjs.Graphics().p("A5JjUQFsquLnjiQLljjKsFtQKtFrDiLlMg38ARGQjjrmFsqqg");
	var mask_graphics_61 = new cjs.Graphics().p("A44jpQGAqjLsjOQLsjOKhGAQKjF+DNLsMg4ZAPhQjOrsF+qgg");
	var mask_graphics_62 = new cjs.Graphics().p("A4kj9QGTqYLxi5QLxi5KWGTQKYGRC5LxMg41AN7Qi4rxGRqVg");
	var mask_graphics_63 = new cjs.Graphics().p("A4OkRQGlqML2ikQL2ijKLGlQKMGjCkL2Mg5NAMWQijr3GkqKg");
	var mask_graphics_64 = new cjs.Graphics().p("A33kjQG3qAL7iPQL6iOJ/G3QKAG2COL6Mg5hAKvQiOr7G2p+g");
	var mask_graphics_65 = new cjs.Graphics().p("A3ek0QHJp0L/h5QL+h5JyHJQJ0HIB5L9Mg5zAJHQh5r+HHpxg");
	var mask_graphics_66 = new cjs.Graphics().p("A3ClFQHapnMChjQMBhjJlHaQJnHZBjMBMg6CAHfQhjsCHZpkg");
	var mask_graphics_67 = new cjs.Graphics().p("A2llUQHrpaMFhNQMDhOJYHsQJZHpBOMEMg6OAF3QhOsEHqpXg");
	var mask_graphics_68 = new cjs.Graphics().p("A2GliQH8pMMGg4QMGg4JKH8QJLH7A4MFMg6XAEPQg4sHH6pIg");
	var mask_graphics_69 = new cjs.Graphics().p("A1llwQINo9MHgiQMHgiI7IMQI9IKAiMHMg6dACmQgjsHILo7g");
	var mask_graphics_70 = new cjs.Graphics().p("A1Cl8QIdouMIgNQMHgMIsIcQIvIaAMMIMg6hAA9QgNsIIbosg");
	var mask_graphics_71 = new cjs.Graphics().p("A9QOIQAJsJIqocQIsofMHAJQMIAKIeIrQIeIpgJMJg");
	var mask_graphics_72 = new cjs.Graphics().p("A9QM5QAfsII5oMQI7oPMHAfQMHAeIOI7QIPI4gfMIg");
	var mask_graphics_73 = new cjs.Graphics().p("A9PLrQA1sGJIn9QJJn/MFA0QMHA1H9JJQH/JHg0MHg");
	var mask_graphics_74 = new cjs.Graphics().p("A9NKcQBKsDJWntQJYnvMDBLQMFBKHtJXQHuJVhKMFg");
	var mask_graphics_75 = new cjs.Graphics().p("A9KJOQBgsBJjncQJlndMBBgQMDBgHcJkQHdJjhgMCg");
	var mask_graphics_76 = new cjs.Graphics().p("A9HIBQB1r/JxnKQJynML/B1QL/B2HLJyQHMJvh2MAg");
	var mask_graphics_77 = new cjs.Graphics().p("A9DGzQCLr7J9m5QJ/m6L7CLQL8CLG4J/QG7J8iLL8g");
	var mask_graphics_78 = new cjs.Graphics().p("A8/FnQChr3KJmnQKLmpL3ChQL4CgGmKLQGpKIigL4g");
	var mask_graphics_79 = new cjs.Graphics().p("A85EaQC1ryKVmVQKXmWLyC2QLzC1GUKXQGXKUi2Lzg");
	var mask_graphics_80 = new cjs.Graphics().p("A8zDOQDLrtKgmCQKhmDLtDLQLuDKGCKiQGDKfjLLug");
	var mask_graphics_81 = new cjs.Graphics().p("A8sCCQDfrmKrlvQKslxLnDgQLoDgFvKsQFwKqjfLng");
	var mask_graphics_82 = new cjs.Graphics().p("A8kA3QD0rgK1lcQK2lcLgD0QLiD0FbK2QFdK0j0Lig");
	var mask_graphics_83 = new cjs.Graphics().p("A8cgSQEJraK+lIQLAlKLZEJQLaEJFILAQFKK+kJLag");
	var mask_graphics_84 = new cjs.Graphics().p("A8ThbQEdrTLHk0QLKk2LREdQLTEeE0LIQE1LHkdLSg");
	var mask_graphics_85 = new cjs.Graphics().p("A8JikQExrLLQkgQLRkhLKExQLKEyEgLQQEiLPkyLLg");
	var mask_graphics_86 = new cjs.Graphics().p("A7+jsQFFrCLXkMQLakNLAFFQLCFGELLYQEOLXlGLCg");
	var mask_graphics_87 = new cjs.Graphics().p("A7zk0QFZq4Lfj3QLfj5K4FZQK4FZD4LgQD5LelZK4g");
	var mask_graphics_88 = new cjs.Graphics().p("A7nl6QFsquLmjjQLmjkKuFtQKvFsDiLnQDkLllsKug");
	var mask_graphics_89 = new cjs.Graphics().p("A7am/QF/qkLsjOQLsjPKkGAQKkF/DNLtQDQLrmAKkg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-5.4,y:59.9}).wait(1).to({graphics:mask_graphics_1,x:-8.1,y:57.8}).wait(1).to({graphics:mask_graphics_2,x:-10.8,y:55.8}).wait(1).to({graphics:mask_graphics_3,x:-13.6,y:53.8}).wait(1).to({graphics:mask_graphics_4,x:-16.5,y:52}).wait(1).to({graphics:mask_graphics_5,x:-19.5,y:50.3}).wait(1).to({graphics:mask_graphics_6,x:-22.5,y:48.7}).wait(1).to({graphics:mask_graphics_7,x:-25.5,y:47.2}).wait(1).to({graphics:mask_graphics_8,x:-28.6,y:45.8}).wait(1).to({graphics:mask_graphics_9,x:-31.8,y:44.4}).wait(1).to({graphics:mask_graphics_10,x:-35,y:43.2}).wait(1).to({graphics:mask_graphics_11,x:-38.2,y:42.1}).wait(1).to({graphics:mask_graphics_12,x:-41.5,y:41.1}).wait(1).to({graphics:mask_graphics_13,x:-44.8,y:40.3}).wait(1).to({graphics:mask_graphics_14,x:-48.1,y:39.5}).wait(1).to({graphics:mask_graphics_15,x:-51.4,y:38.8}).wait(1).to({graphics:mask_graphics_16,x:-54.8,y:38.3}).wait(1).to({graphics:mask_graphics_17,x:-58.1,y:37.9}).wait(1).to({graphics:mask_graphics_18,x:-61.5,y:37.6}).wait(1).to({graphics:mask_graphics_19,x:-64.9,y:37.5}).wait(1).to({graphics:mask_graphics_20,x:-66.8,y:37.5}).wait(1).to({graphics:mask_graphics_21,x:-63.4,y:37.4}).wait(1).to({graphics:mask_graphics_22,x:-60.1,y:37.2}).wait(1).to({graphics:mask_graphics_23,x:-56.8,y:36.8}).wait(1).to({graphics:mask_graphics_24,x:-53.5,y:36.4}).wait(1).to({graphics:mask_graphics_25,x:-50.2,y:35.8}).wait(1).to({graphics:mask_graphics_26,x:-46.9,y:35.1}).wait(1).to({graphics:mask_graphics_27,x:-43.7,y:34.2}).wait(1).to({graphics:mask_graphics_28,x:-40.5,y:33.3}).wait(1).to({graphics:mask_graphics_29,x:-37.4,y:32.1}).wait(1).to({graphics:mask_graphics_30,x:-34.8,y:31.1}).wait(1).to({graphics:mask_graphics_31,x:-32.2,y:30.1}).wait(1).to({graphics:mask_graphics_32,x:-29.6,y:29}).wait(1).to({graphics:mask_graphics_33,x:-27.1,y:27.8}).wait(1).to({graphics:mask_graphics_34,x:-24.5,y:26.5}).wait(1).to({graphics:mask_graphics_35,x:-22.1,y:25.2}).wait(1).to({graphics:mask_graphics_36,x:-19.6,y:23.7}).wait(1).to({graphics:mask_graphics_37,x:-17.2,y:22.3}).wait(1).to({graphics:mask_graphics_38,x:-14.9,y:20.7}).wait(1).to({graphics:mask_graphics_39,x:-12.6,y:19.1}).wait(1).to({graphics:mask_graphics_40,x:-10.3,y:17.4}).wait(1).to({graphics:mask_graphics_41,x:-8.1,y:15.6}).wait(1).to({graphics:mask_graphics_42,x:-6,y:13.8}).wait(1).to({graphics:mask_graphics_43,x:-3.9,y:11.9}).wait(1).to({graphics:mask_graphics_44,x:-1.9,y:9.9}).wait(1).to({graphics:mask_graphics_45,x:0,y:7.8}).wait(1).to({graphics:mask_graphics_46,x:1.9,y:5.7}).wait(1).to({graphics:mask_graphics_47,x:3.7,y:3.5}).wait(1).to({graphics:mask_graphics_48,x:5.4,y:1.2}).wait(1).to({graphics:mask_graphics_49,x:7,y:-1.1}).wait(1).to({graphics:mask_graphics_50,x:8.6,y:-3.5}).wait(1).to({graphics:mask_graphics_51,x:10.1,y:-5.9}).wait(1).to({graphics:mask_graphics_52,x:11.5,y:-8.3}).wait(1).to({graphics:mask_graphics_53,x:12.9,y:-10.8}).wait(1).to({graphics:mask_graphics_54,x:14.2,y:-13.4}).wait(1).to({graphics:mask_graphics_55,x:15.4,y:-16}).wait(1).to({graphics:mask_graphics_56,x:16.5,y:-18.6}).wait(1).to({graphics:mask_graphics_57,x:17.6,y:-21.2}).wait(1).to({graphics:mask_graphics_58,x:18.6,y:-23.9}).wait(1).to({graphics:mask_graphics_59,x:19.5,y:-26.6}).wait(1).to({graphics:mask_graphics_60,x:20.3,y:-29.1}).wait(1).to({graphics:mask_graphics_61,x:21,y:-31.6}).wait(1).to({graphics:mask_graphics_62,x:21.7,y:-34.1}).wait(1).to({graphics:mask_graphics_63,x:22.3,y:-36.7}).wait(1).to({graphics:mask_graphics_64,x:22.8,y:-39.3}).wait(1).to({graphics:mask_graphics_65,x:23.3,y:-41.8}).wait(1).to({graphics:mask_graphics_66,x:23.6,y:-44.4}).wait(1).to({graphics:mask_graphics_67,x:24,y:-47.1}).wait(1).to({graphics:mask_graphics_68,x:24.2,y:-49.7}).wait(1).to({graphics:mask_graphics_69,x:24.3,y:-52.3}).wait(1).to({graphics:mask_graphics_70,x:24.4,y:-54.9}).wait(1).to({graphics:mask_graphics_71,x:24.4,y:-55.4}).wait(1).to({graphics:mask_graphics_72,x:24.5,y:-52.8}).wait(1).to({graphics:mask_graphics_73,x:24.6,y:-50.3}).wait(1).to({graphics:mask_graphics_74,x:24.9,y:-47.7}).wait(1).to({graphics:mask_graphics_75,x:25.2,y:-45.1}).wait(1).to({graphics:mask_graphics_76,x:25.5,y:-42.6}).wait(1).to({graphics:mask_graphics_77,x:26,y:-40.1}).wait(1).to({graphics:mask_graphics_78,x:26.5,y:-37.6}).wait(1).to({graphics:mask_graphics_79,x:27.1,y:-35.1}).wait(1).to({graphics:mask_graphics_80,x:27.8,y:-32.6}).wait(1).to({graphics:mask_graphics_81,x:28.5,y:-30.1}).wait(1).to({graphics:mask_graphics_82,x:29.3,y:-27.7}).wait(1).to({graphics:mask_graphics_83,x:30.2,y:-25.3}).wait(1).to({graphics:mask_graphics_84,x:31.1,y:-22.8}).wait(1).to({graphics:mask_graphics_85,x:32.1,y:-20.5}).wait(1).to({graphics:mask_graphics_86,x:33.1,y:-18.1}).wait(1).to({graphics:mask_graphics_87,x:34.3,y:-15.7}).wait(1).to({graphics:mask_graphics_88,x:35.4,y:-13.4}).wait(1).to({graphics:mask_graphics_89,x:36.5,y:-11}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AlBjPQLei/hpKK");
	this.shape.setTransform(34.9,32.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,1.9,74,58.3);


(lib.ar2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(46.4,-45.3,1,1,31.6,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:0.4,y:32.2},59).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AgJAQIATgf");
	this.shape.setTransform(44.3,-42.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AgMAWIAZgr");
	this.shape_1.setTransform(43.9,-41.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AgQAdIAhg5");
	this.shape_2.setTransform(43.5,-40.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("AgUAjIAphF");
	this.shape_3.setTransform(43.1,-40.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("AgYApIAxhR");
	this.shape_4.setTransform(42.7,-39.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(5,1,1).p("AgcAwIA5hf");
	this.shape_5.setTransform(42.4,-39);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(5,1,1).p("AgfA2IA/hr");
	this.shape_6.setTransform(42,-38.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(5,1,1).p("AgjA8IBHh3");
	this.shape_7.setTransform(41.6,-37.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(5,1,1).p("AgnBCIBPiD");
	this.shape_8.setTransform(41.2,-37.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(5,1,1).p("AgrBJIBXiR");
	this.shape_9.setTransform(40.8,-36.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(5,1,1).p("AgvBPIBfid");
	this.shape_10.setTransform(40.5,-35.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5,1,1).p("AgyBVIBlip");
	this.shape_11.setTransform(40.1,-35.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(5,1,1).p("Ag2BbIBti2");
	this.shape_12.setTransform(39.7,-34.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(5,1,1).p("Ag6BiIB1jD");
	this.shape_13.setTransform(39.3,-33.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(5,1,1).p("Ag+BoIB9jP");
	this.shape_14.setTransform(38.9,-33.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(5,1,1).p("AhBBvICDjc");
	this.shape_15.setTransform(38.5,-32.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(5,1,1).p("AhFB1ICLjp");
	this.shape_16.setTransform(38.2,-32);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(5,1,1).p("AhJB7ICTj1");
	this.shape_17.setTransform(37.8,-31.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(5,1,1).p("AhNCBICbkB");
	this.shape_18.setTransform(37.4,-30.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(5,1,1).p("AhQCIIChkP");
	this.shape_19.setTransform(37,-30.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(5,1,1).p("AhUCOICpkb");
	this.shape_20.setTransform(36.6,-29.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(5,1,1).p("AhYCUICxkn");
	this.shape_21.setTransform(36.3,-28.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(5,1,1).p("AhcCbIC5k1");
	this.shape_22.setTransform(35.9,-28.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(5,1,1).p("AhfChIC/lB");
	this.shape_23.setTransform(35.5,-27.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(5,1,1).p("AhjCnIDHlN");
	this.shape_24.setTransform(35.1,-26.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(5,1,1).p("AhnCtIDPla");
	this.shape_25.setTransform(34.7,-26.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(5,1,1).p("AhrC0IDXln");
	this.shape_26.setTransform(34.4,-25.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(5,1,1).p("AhvC6IDflz");
	this.shape_27.setTransform(34,-25);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(5,1,1).p("AhzDBIDmmB");
	this.shape_28.setTransform(33.6,-24.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(5,1,1).p("Ah2DHIDtmN");
	this.shape_29.setTransform(33.2,-23.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(5,1,1).p("Ah6DNID1mZ");
	this.shape_30.setTransform(32.8,-23.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(5,1,1).p("Ah+DTID9ml");
	this.shape_31.setTransform(32.5,-22.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(5,1,1).p("AiCDaIEFmz");
	this.shape_32.setTransform(32.1,-21.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(5,1,1).p("AiGDgIENm/");
	this.shape_33.setTransform(31.7,-21.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(5,1,1).p("AiJDmIETnL");
	this.shape_34.setTransform(31.3,-20.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(5,1,1).p("AiNDtIEbnZ");
	this.shape_35.setTransform(30.9,-20);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(5,1,1).p("AiRDzIEjnl");
	this.shape_36.setTransform(30.6,-19.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(5,1,1).p("AiVD5IErnx");
	this.shape_37.setTransform(30.2,-18.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(5,1,1).p("AiYEAIEyn/");
	this.shape_38.setTransform(29.8,-18);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(5,1,1).p("AicEGIE5oL");
	this.shape_39.setTransform(29.4,-17.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(5,1,1).p("AigEMIFBoX");
	this.shape_40.setTransform(29.1,-16.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(5,1,1).p("AikETIFJol");
	this.shape_41.setTransform(28.7,-16.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(5,1,1).p("AioEZIFRox");
	this.shape_42.setTransform(28.3,-15.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(5,1,1).p("AisEfIFZo9");
	this.shape_43.setTransform(27.9,-14.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(5,1,1).p("AivElIFfpJ");
	this.shape_44.setTransform(27.5,-14.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(5,1,1).p("AizEsIFnpX");
	this.shape_45.setTransform(27.1,-13.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(5,1,1).p("Ai3EyIFvpj");
	this.shape_46.setTransform(26.7,-13);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(5,1,1).p("Ai7E4IF3pv");
	this.shape_47.setTransform(26.4,-12.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(5,1,1).p("Ai+E/IF9p9");
	this.shape_48.setTransform(26,-11.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(5,1,1).p("AjCFFIGFqJ");
	this.shape_49.setTransform(25.6,-11.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(5,1,1).p("AjGFLIGNqV");
	this.shape_50.setTransform(25.2,-10.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(5,1,1).p("AjKFSIGVqj");
	this.shape_51.setTransform(24.8,-9.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(5,1,1).p("AjOFYIGdqv");
	this.shape_52.setTransform(24.5,-9.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(5,1,1).p("AjRFeIGjq7");
	this.shape_53.setTransform(24.1,-8.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(5,1,1).p("AjVFkIGrrH");
	this.shape_54.setTransform(23.7,-7.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(5,1,1).p("AjZFrIGzrV");
	this.shape_55.setTransform(23.3,-7.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(5,1,1).p("AjdFxIG7rh");
	this.shape_56.setTransform(23,-6.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(5,1,1).p("AjhF3IHDrt");
	this.shape_57.setTransform(22.6,-6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(5,1,1).p("AjkF+IHJr7");
	this.shape_58.setTransform(22.2,-5.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(5,1,1).p("ABXiQICTj0AjpGFIFAoV");
	this.shape_59.setTransform(21.9,-4.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(38.2,-53.6,19,17.6);


(lib.ar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ar_triangle
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-27.3,18.9,1,1,-112.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-150.7,guide:{path:[-27.2,18.9,12.8,1.4,33.1,-27], orient:'auto'}},44).wait(1));

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
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AjtEeQCHlDFUj3");
	this.shape.setTransform(3.5,-4.5,1,1,-167.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34,9.5,19.2,20.8);


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
(lib.WS_Cursive_B = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_665 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(665).call(this.frame_665).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(99.2,275.8,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[99.3,275.9,193.9,232.8,246.5,177.5]}},64).to({guide:{path:[246.4,177.5,254.4,169.1,261.3,160.5,273.1,136.5,284.8,112.5]}},27).wait(10).to({startPosition:0},0).to({guide:{path:[284.8,112.6,206.9,272.2,128.9,431.8]}},119).wait(11).to({x:269.8,y:156.2},0).to({guide:{path:[269.8,156.3,322.4,112.1,385.2,117.6,448.2,123.1,449.1,187.3,449.9,251.7,369.5,284.2,289.3,316.7,286.7,263.2]}},120).wait(10).to({startPosition:0},0).to({guide:{path:[286.9,263.2,287.1,254.7,295.8,255.6,304.7,256.6,323.2,259.9,341.7,263.3,354.7,283.1,367.7,302.9,370.1,316.4,372.4,330,372.1,343.8,371.7,358.2,367.3,371.9,363.3,384.4,355.1,394.9,346.1,406.7,333.9,415.2,322.2,423.3,309.1,428.8,295.7,434.3,281.2,435.2,266.5,435.9,252.3,432.3,238.1,428.8,225.2,422,212.4,415.2,201.2,405.7,189.9,396.3,181.2,384.7,172.2,372.8,165.5,357.5]}},135).wait(11).to({startPosition:0},0).to({guide:{path:[165.7,357.5,237.2,406.3,300.5,376.1]}},72).wait(12).to({x:302.4,y:376.2},0).to({guide:{path:[302.5,376.2,317.8,314.4,381.2,304.4,443.6,294.6,487.8,339.8,533.2,386.3,594.7,365.7,638.1,351.1,649.3,306.1]}},65).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(284.8,115.4,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},91).wait(10).to({_off:false,x:127.8,y:432.4},0).to({_off:true},119).wait(11).to({_off:false,x:165.8,y:356.4},0).to({_off:true},265).wait(11).to({_off:false,x:300.8,y:375.4},0).to({_off:true},72).wait(78));

	// Layer 14
	this.instance_1 = new lib.ar1("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(245.2,319.4,1,1,38.4,0,0,-0.8,0.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(516).to({_off:false},0).wait(150));

	// Layer 10 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_516 = new cjs.Graphics().p("AFhfSIAAohIHZAAIAAIhg");
	var mask_graphics_517 = new cjs.Graphics().p("Aj1EQIAAofIHrAAIAAIfg");
	var mask_graphics_518 = new cjs.Graphics().p("Aj/EQIAAofIH/AAIAAIfg");
	var mask_graphics_519 = new cjs.Graphics().p("AkIEQIAAofIISAAIAAIfg");
	var mask_graphics_520 = new cjs.Graphics().p("AkSEQIAAofIIlAAIAAIfg");
	var mask_graphics_521 = new cjs.Graphics().p("AkbEQIAAofII3AAIAAIfg");
	var mask_graphics_522 = new cjs.Graphics().p("AklEQIAAofIJLAAIAAIfg");
	var mask_graphics_523 = new cjs.Graphics().p("AkvEQIAAofIJfAAIAAIfg");
	var mask_graphics_524 = new cjs.Graphics().p("Ak4EQIAAofIJxAAIAAIfg");
	var mask_graphics_525 = new cjs.Graphics().p("AlCEQIAAofIKFAAIAAIfg");
	var mask_graphics_526 = new cjs.Graphics().p("AlLEQIAAofIKXAAIAAIfg");
	var mask_graphics_527 = new cjs.Graphics().p("AlVEQIAAofIKrAAIAAIfg");
	var mask_graphics_528 = new cjs.Graphics().p("AleEQIAAofIK9AAIAAIfg");
	var mask_graphics_529 = new cjs.Graphics().p("AloEQIAAofILRAAIAAIfg");
	var mask_graphics_530 = new cjs.Graphics().p("AlxEQIAAofILjAAIAAIfg");
	var mask_graphics_531 = new cjs.Graphics().p("Al7EQIAAofIL3AAIAAIfg");
	var mask_graphics_532 = new cjs.Graphics().p("AmEEQIAAofIMJAAIAAIfg");
	var mask_graphics_533 = new cjs.Graphics().p("AmOEQIAAofIMdAAIAAIfg");
	var mask_graphics_534 = new cjs.Graphics().p("AmXEQIAAofIMvAAIAAIfg");
	var mask_graphics_535 = new cjs.Graphics().p("AmhEQIAAofINDAAIAAIfg");
	var mask_graphics_536 = new cjs.Graphics().p("AmrEQIAAofINXAAIAAIfg");
	var mask_graphics_537 = new cjs.Graphics().p("Am0EQIAAofINpAAIAAIfg");
	var mask_graphics_538 = new cjs.Graphics().p("Am+EQIAAofIN9AAIAAIfg");
	var mask_graphics_539 = new cjs.Graphics().p("AnHEQIAAofIOPAAIAAIfg");
	var mask_graphics_540 = new cjs.Graphics().p("AnREQIAAofIOjAAIAAIfg");
	var mask_graphics_541 = new cjs.Graphics().p("AnaEQIAAofIO1AAIAAIfg");
	var mask_graphics_542 = new cjs.Graphics().p("AnkEQIAAofIPJAAIAAIfg");
	var mask_graphics_543 = new cjs.Graphics().p("AntEQIAAofIPbAAIAAIfg");
	var mask_graphics_544 = new cjs.Graphics().p("An3EQIAAofIPvAAIAAIfg");
	var mask_graphics_545 = new cjs.Graphics().p("AoBEQIAAofIQDAAIAAIfg");
	var mask_graphics_546 = new cjs.Graphics().p("AoKEQIAAofIQVAAIAAIfg");
	var mask_graphics_547 = new cjs.Graphics().p("AoUEQIAAofIQpAAIAAIfg");
	var mask_graphics_548 = new cjs.Graphics().p("AodEQIAAofIQ7AAIAAIfg");
	var mask_graphics_549 = new cjs.Graphics().p("AonEQIAAofIRPAAIAAIfg");
	var mask_graphics_550 = new cjs.Graphics().p("AowEQIAAofIRhAAIAAIfg");
	var mask_graphics_551 = new cjs.Graphics().p("Ao6EQIAAofIR1AAIAAIfg");
	var mask_graphics_552 = new cjs.Graphics().p("ApDEQIAAofISHAAIAAIfg");
	var mask_graphics_553 = new cjs.Graphics().p("ApNEQIAAofISbAAIAAIfg");
	var mask_graphics_554 = new cjs.Graphics().p("ApXEQIAAofISuAAIAAIfg");
	var mask_graphics_555 = new cjs.Graphics().p("ApgEQIAAofITBAAIAAIfg");
	var mask_graphics_556 = new cjs.Graphics().p("ApqEQIAAofITVAAIAAIfg");
	var mask_graphics_557 = new cjs.Graphics().p("ApzEQIAAofITnAAIAAIfg");
	var mask_graphics_558 = new cjs.Graphics().p("Ap9EQIAAofIT7AAIAAIfg");
	var mask_graphics_559 = new cjs.Graphics().p("AqGEQIAAofIUNAAIAAIfg");
	var mask_graphics_560 = new cjs.Graphics().p("AqQEQIAAofIUhAAIAAIfg");
	var mask_graphics_561 = new cjs.Graphics().p("AqZEQIAAofIUzAAIAAIfg");
	var mask_graphics_562 = new cjs.Graphics().p("AqjEQIAAofIVHAAIAAIfg");
	var mask_graphics_563 = new cjs.Graphics().p("AqtEQIAAofIVaAAIAAIfg");
	var mask_graphics_564 = new cjs.Graphics().p("Aq2EQIAAofIVtAAIAAIfg");
	var mask_graphics_565 = new cjs.Graphics().p("ArAEQIAAofIWBAAIAAIfg");
	var mask_graphics_566 = new cjs.Graphics().p("ArJEQIAAofIWTAAIAAIfg");
	var mask_graphics_567 = new cjs.Graphics().p("ArTEQIAAofIWnAAIAAIfg");
	var mask_graphics_568 = new cjs.Graphics().p("ArcEQIAAofIW5AAIAAIfg");
	var mask_graphics_569 = new cjs.Graphics().p("ArmEQIAAofIXNAAIAAIfg");
	var mask_graphics_570 = new cjs.Graphics().p("ArvEQIAAofIXfAAIAAIfg");
	var mask_graphics_571 = new cjs.Graphics().p("Ar5EQIAAofIXzAAIAAIfg");
	var mask_graphics_572 = new cjs.Graphics().p("AsDEQIAAofIYHAAIAAIfg");
	var mask_graphics_573 = new cjs.Graphics().p("AsMEQIAAofIYZAAIAAIfg");
	var mask_graphics_574 = new cjs.Graphics().p("AsWEQIAAofIYtAAIAAIfg");
	var mask_graphics_575 = new cjs.Graphics().p("AsfEQIAAofIY/AAIAAIfg");
	var mask_graphics_576 = new cjs.Graphics().p("AsoEQIAAofIZSAAIAAIfg");
	var mask_graphics_577 = new cjs.Graphics().p("AsyEQIAAofIZlAAIAAIfg");
	var mask_graphics_578 = new cjs.Graphics().p("As7EQIAAofIZ4AAIAAIfg");
	var mask_graphics_579 = new cjs.Graphics().p("AtFEQIAAofIaLAAIAAIfg");
	var mask_graphics_580 = new cjs.Graphics().p("AtOEQIAAofIadAAIAAIfg");
	var mask_graphics_581 = new cjs.Graphics().p("AtYEQIAAofIaxAAIAAIfg");
	var mask_graphics_582 = new cjs.Graphics().p("AtiEQIAAofIbFAAIAAIfg");
	var mask_graphics_583 = new cjs.Graphics().p("AtrEQIAAofIbXAAIAAIfg");
	var mask_graphics_584 = new cjs.Graphics().p("At1EQIAAofIbrAAIAAIfg");
	var mask_graphics_585 = new cjs.Graphics().p("At+EQIAAofIb+AAIAAIfg");
	var mask_graphics_586 = new cjs.Graphics().p("AuIEQIAAofIcRAAIAAIfg");
	var mask_graphics_587 = new cjs.Graphics().p("AlDfSIAAohIckAAIAAIhg");
	var mask_graphics_588 = new cjs.Graphics().p("Al+fSIAAocIecAAIAAIcg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(516).to({graphics:mask_graphics_516,x:82.6,y:200.2}).wait(1).to({graphics:mask_graphics_517,x:142.5,y:373.2}).wait(1).to({graphics:mask_graphics_518,x:143.5,y:373.2}).wait(1).to({graphics:mask_graphics_519,x:144.5,y:373.2}).wait(1).to({graphics:mask_graphics_520,x:145.4,y:373.2}).wait(1).to({graphics:mask_graphics_521,x:146.4,y:373.2}).wait(1).to({graphics:mask_graphics_522,x:147.3,y:373.2}).wait(1).to({graphics:mask_graphics_523,x:148.3,y:373.2}).wait(1).to({graphics:mask_graphics_524,x:149.2,y:373.2}).wait(1).to({graphics:mask_graphics_525,x:150.2,y:373.2}).wait(1).to({graphics:mask_graphics_526,x:151.1,y:373.2}).wait(1).to({graphics:mask_graphics_527,x:152.1,y:373.2}).wait(1).to({graphics:mask_graphics_528,x:153.1,y:373.2}).wait(1).to({graphics:mask_graphics_529,x:154,y:373.2}).wait(1).to({graphics:mask_graphics_530,x:155,y:373.2}).wait(1).to({graphics:mask_graphics_531,x:155.9,y:373.2}).wait(1).to({graphics:mask_graphics_532,x:156.9,y:373.2}).wait(1).to({graphics:mask_graphics_533,x:157.9,y:373.2}).wait(1).to({graphics:mask_graphics_534,x:158.8,y:373.2}).wait(1).to({graphics:mask_graphics_535,x:159.8,y:373.2}).wait(1).to({graphics:mask_graphics_536,x:160.7,y:373.2}).wait(1).to({graphics:mask_graphics_537,x:161.7,y:373.2}).wait(1).to({graphics:mask_graphics_538,x:162.6,y:373.2}).wait(1).to({graphics:mask_graphics_539,x:163.6,y:373.2}).wait(1).to({graphics:mask_graphics_540,x:164.5,y:373.2}).wait(1).to({graphics:mask_graphics_541,x:165.5,y:373.2}).wait(1).to({graphics:mask_graphics_542,x:166.5,y:373.2}).wait(1).to({graphics:mask_graphics_543,x:167.4,y:373.2}).wait(1).to({graphics:mask_graphics_544,x:168.4,y:373.2}).wait(1).to({graphics:mask_graphics_545,x:169.3,y:373.2}).wait(1).to({graphics:mask_graphics_546,x:170.3,y:373.2}).wait(1).to({graphics:mask_graphics_547,x:171.2,y:373.2}).wait(1).to({graphics:mask_graphics_548,x:172.2,y:373.2}).wait(1).to({graphics:mask_graphics_549,x:173.1,y:373.2}).wait(1).to({graphics:mask_graphics_550,x:174.1,y:373.2}).wait(1).to({graphics:mask_graphics_551,x:175.1,y:373.2}).wait(1).to({graphics:mask_graphics_552,x:176,y:373.2}).wait(1).to({graphics:mask_graphics_553,x:177,y:373.2}).wait(1).to({graphics:mask_graphics_554,x:178,y:373.2}).wait(1).to({graphics:mask_graphics_555,x:178.9,y:373.2}).wait(1).to({graphics:mask_graphics_556,x:179.9,y:373.2}).wait(1).to({graphics:mask_graphics_557,x:180.8,y:373.2}).wait(1).to({graphics:mask_graphics_558,x:181.8,y:373.2}).wait(1).to({graphics:mask_graphics_559,x:182.7,y:373.2}).wait(1).to({graphics:mask_graphics_560,x:183.7,y:373.2}).wait(1).to({graphics:mask_graphics_561,x:184.6,y:373.2}).wait(1).to({graphics:mask_graphics_562,x:185.6,y:373.2}).wait(1).to({graphics:mask_graphics_563,x:186.6,y:373.2}).wait(1).to({graphics:mask_graphics_564,x:187.5,y:373.2}).wait(1).to({graphics:mask_graphics_565,x:188.5,y:373.2}).wait(1).to({graphics:mask_graphics_566,x:189.4,y:373.2}).wait(1).to({graphics:mask_graphics_567,x:190.4,y:373.2}).wait(1).to({graphics:mask_graphics_568,x:191.3,y:373.2}).wait(1).to({graphics:mask_graphics_569,x:192.3,y:373.2}).wait(1).to({graphics:mask_graphics_570,x:193.2,y:373.2}).wait(1).to({graphics:mask_graphics_571,x:194.2,y:373.2}).wait(1).to({graphics:mask_graphics_572,x:195.2,y:373.2}).wait(1).to({graphics:mask_graphics_573,x:196.1,y:373.2}).wait(1).to({graphics:mask_graphics_574,x:197.1,y:373.2}).wait(1).to({graphics:mask_graphics_575,x:198,y:373.2}).wait(1).to({graphics:mask_graphics_576,x:199,y:373.2}).wait(1).to({graphics:mask_graphics_577,x:200,y:373.2}).wait(1).to({graphics:mask_graphics_578,x:200.9,y:373.2}).wait(1).to({graphics:mask_graphics_579,x:201.9,y:373.2}).wait(1).to({graphics:mask_graphics_580,x:202.8,y:373.2}).wait(1).to({graphics:mask_graphics_581,x:203.8,y:373.2}).wait(1).to({graphics:mask_graphics_582,x:204.7,y:373.2}).wait(1).to({graphics:mask_graphics_583,x:205.7,y:373.2}).wait(1).to({graphics:mask_graphics_584,x:206.6,y:373.2}).wait(1).to({graphics:mask_graphics_585,x:207.6,y:373.2}).wait(1).to({graphics:mask_graphics_586,x:208.6,y:373.2}).wait(1).to({graphics:mask_graphics_587,x:150.5,y:200.2}).wait(1).to({graphics:mask_graphics_588,x:156.6,y:200.2}).wait(78));

	// Layer 9
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(20,1,1).p("AqXinQKBIYKulC");
	this.shape_1.setTransform(234.6,370.7);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(516).to({_off:false},0).wait(150));

	// Layer 8 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_455 = new cjs.Graphics().p("AESxsQMEhXJeHkQJgHlBWMDQBXMEnlJeQnkJgsEBWg");
	var mask_1_graphics_456 = new cjs.Graphics().p("AFKx0QMGhAJQH1QJRH3A/MFQBAMHn3JPQn1JRsHBAg");
	var mask_1_graphics_457 = new cjs.Graphics().p("AGCx6QMIgpJAIHQJCIIAoMHQApMIoIJAQoHJCsIAog");
	var mask_1_graphics_458 = new cjs.Graphics().p("AG6x9QMJgSIwIYQIyIZASMHQARMJoZIxQoXIysJARg");
	var mask_1_graphics_459 = new cjs.Graphics().p("EAHYAomMAAag6kQMIAFIhIoQIiIqgGMIQgFMJopIgQojIdr/AAIgPgBg");
	var mask_1_graphics_460 = new cjs.Graphics().p("EAGgAolMACJg6iQMJAcIPI4QISI5gdMIQgcMIo6IQQobH3rWAAIhPgCg");
	var mask_1_graphics_461 = new cjs.Graphics().p("EAFpAoiMAD4g6dQMHA0H/JHQIAJIg0MHQgzMHpJH/QoSHSqxAAQhFAAhGgFg");
	var mask_1_graphics_462 = new cjs.Graphics().p("EAExAodMAFng6UQMFBLHuJWQHuJXhKMFQhLMGpXHtQoIGuqNAAQhiAAhlgKg");
	var mask_1_graphics_463 = new cjs.Graphics().p("EAD6AoXMAHVg6IQMDBiHbJkQHdJlhhMDQhiMDpmHbQn9GMpqAAQh+AAiCgQg");
	var mask_1_graphics_464 = new cjs.Graphics().p("EADCAoOMAJEg53QMAB4HIJyQHLJzh4MAQh5L/pzHJQnxFrpJAAQiZAAiggZg");
	var mask_1_graphics_465 = new cjs.Graphics().p("EACLAoEMAKyg5kQL7COG2KAQG4KAiPL8QiPL8qBG2QnjFLopAAQi0AAi8gjg");
	var mask_1_graphics_466 = new cjs.Graphics().p("EABVAn5MAMeg5PQL3CmGjKMQGkKNilL3QimL3qNGjQnVEuoLAAQjOAAjWgvg");
	var mask_1_graphics_467 = new cjs.Graphics().p("EAAfAnsMAOKg42QLyC8GPKZQGRKZi8LyQi8LyqaGPQnEERnuAAQjoAAjwg8g");
	var mask_1_graphics_468 = new cjs.Graphics().p("EgAWAndMAP1g4ZQLsDSF7KkQF9KljSLsQjSLsqmF8Qm0D1nSAAQkAAAkJhLg");
	var mask_1_graphics_469 = new cjs.Graphics().p("EgBMAnNMARgg35QLlDoFoKvQFoKwjoLlQjoLmqxFnQmiDbm2AAQkaAAkihbg");
	var mask_1_graphics_470 = new cjs.Graphics().p("EgCAAm8MATJg3XQLeD+FTK5QFUK7j+LeQj/Leq6FTQmQDCmbAAQkzAAk5hsg");
	var mask_1_graphics_471 = new cjs.Graphics().p("EgC1AmpMAUyg2xQLWEUE+LDQE/LEkTLWQkULWrFE+Ql7CrmCAAQlMAAlQh/g");
	var mask_1_graphics_472 = new cjs.Graphics().p("EgDoAmUMAWZg2IQLOEpEpLMQEpLOkpLOQkpLOrNEoQlnCVloAAQlmAAlliUg");
	var mask_1_graphics_473 = new cjs.Graphics().p("EgEbAl+MAX/g1cQLFE/ETLTQEVLXk/LFQk+LFrWESQlRCBlOAAQmAAAl6iqg");
	var mask_1_graphics_474 = new cjs.Graphics().p("EgFNAlnMAZkg0tQK7FTD+LcQD+LelTK7QlTK7reD+Qk7Btk0AAQmaAAmOjBg");
	var mask_1_graphics_475 = new cjs.Graphics().p("EgF+AlOMAbHgz7QKwFoDpLjQDoLllnKxQloKxrlDnQkkBckbAAQm1AAmgjag");
	var mask_1_graphics_476 = new cjs.Graphics().p("EgGvAk0MAcpgzGQKmF8DSLpQDSLsl7KmQl8KmrsDRQkLBMkCAAQnQAAmzj0g");
	var mask_1_graphics_477 = new cjs.Graphics().p("EgHeAkYMAeJgyOQKaGQC8LvQC8LymQKaQmQKbrxC7QjyA8jpAAQnrAAnEkPg");
	var mask_1_graphics_478 = new cjs.Graphics().p("EgINAj7MAfngxTQKOGjCmL1QCmL3mkKOQmjKOr3ClQjYAvjPAAQoIAAnUksg");
	var mask_1_graphics_479 = new cjs.Graphics().p("EgI7AjdMAhEgwWQKBG2CPL5QCQL8m3KCQm3KBr7COQi9Aki1AAQomAAnjlKg");
	var mask_1_graphics_480 = new cjs.Graphics().p("EgJoAi9MAifgvWQJ0HKB4L8QB5MAnKJ0QnJJ0r/B4QihAZibAAQpGAAnwlpg");
	var mask_1_graphics_481 = new cjs.Graphics().p("EgKUAicMAj4guTQJmHcBiMAQBiMDncJmQncJmsDBhQiEARiAAAQpmAAn9mKg");
	var mask_1_graphics_482 = new cjs.Graphics().p("EgK/Ah5MAlPgtNQJYHuBKMDQBLMFnuJYQntJYsFBKQhnAKhkAAQqJAAoImtg");
	var mask_1_graphics_483 = new cjs.Graphics().p("EgLpAhWMAmkgsGQJJIAAzMEQA0MIn/JJQoAJJsGAyQhJAFhHAAQqtAAoSnPg");
	var mask_1_graphics_484 = new cjs.Graphics().p("EgMSAgxMAn2gq7QI6IQAdMGQAdMJoRI5QoRI6sHAcQgqABgpAAQrTAAobn0g");
	var mask_1_graphics_485 = new cjs.Graphics().p("EgM5AgLMApGgpvQIpIiAGMGQAGMJohIqQohIpsJAFIgTAAQr7AAoioag");
	var mask_1_graphics_486 = new cjs.Graphics().p("EAHAAolQsHgRoZoxMAqUgofQIZIxgRMGQgRMKoyIZQofIHrnAAIgzAAg");
	var mask_1_graphics_487 = new cjs.Graphics().p("EAGIAoiQsGgnoIpBMArggnOQIIJBgoMGQgoMIpBIIQoXHirBAAQg4AAg5gDg");
	var mask_1_graphics_488 = new cjs.Graphics().p("EAFRAoeQsFg+n3pQMAspgl6QH3JPg/MFQg/MHpQH3QoNG+qcAAQhWAAhXgIg");
	var mask_1_graphics_489 = new cjs.Graphics().p("EAEZAoZQsChVnlpfMAtwgkkQHlJehWMCQhWMFpfHlQoDGbp4AAQhyAAh2gNg");
	var mask_1_graphics_490 = new cjs.Graphics().p("EADiAoSQsAhsnTptMAu1gjNQHTJshtMAQhtMCptHTQn3F5pXAAQiNAAiTgUg");
	var mask_1_graphics_491 = new cjs.Graphics().p("EACrAoJQr8iDnAp7MAv1ghyQHAJ6iDL8QiEL+p6HAQnqFao3AAQioAAivgeg");
	var mask_1_graphics_492 = new cjs.Graphics().p("EAB0An+Qr4iZmtqIMAw0ggWQGuKGiaL4QibL6qHGtQncE7oYAAQjDAAjKgpg");
	var mask_1_graphics_493 = new cjs.Graphics().p("EAA+AnyQrziwmaqUMAxwge5QGaKTiwLzQixL1qUGaQnNEen7AAQjbAAjlg2g");
	var mask_1_graphics_494 = new cjs.Graphics().p("EAAIAnkQrujGmGqgMAyqgdaQGGKfjHLuQjHLvqgGGQm8ECneAAQj2AAj+hEg");
	var mask_1_graphics_495 = new cjs.Graphics().p("EgAtAnVQrojclyqrMAzggb5QFyKqjdLnQjdLpqsFyQmqDnnDAAQkOAAkXhTg");
	var mask_1_graphics_496 = new cjs.Graphics().p("EgBiAnEQrhjyleq2MA0UgaWQFdK1jzLgQjzLiq2FeQmYDOmoAAQkoAAkuhlg");
	var mask_1_graphics_497 = new cjs.Graphics().p("EgCWAmyQrakIlJrAMA1EgYyQFJK/kJLZQkJLarAFJQmFC2mNAAQlBAAlFh3g");
	var mask_1_graphics_498 = new cjs.Graphics().p("EgDKAmeQrSkdk0rJMA1ygXNQE0LIkeLRQkfLSrJE0QlxCflzAAQlbAAlbiLg");
	var mask_1_graphics_499 = new cjs.Graphics().p("EgD9AmJQrJkzkfrSMA2cgVnQEfLSkzLIQk1LKrSEeQlbCKlaAAQl0AAlwigg");
	var mask_1_graphics_500 = new cjs.Graphics().p("EgEwAlzQq/lIkJrbMA3DgT/QEJLblIK+QlJLAraEJQlGB2lAAAQmOAAmFi2g");
	var mask_1_graphics_501 = new cjs.Graphics().p("EgFhAlbQq2ldjzriMA3ogSWQDzLildK0QleK2riD0QkuBjknAAQmoAAmYjOg");
	var mask_1_graphics_502 = new cjs.Graphics().p("EgGSAlBQqrlxjerpMA4KgQsQDdLplxKqQlzKrroDeQkXBSkNAAQnEAAmqjog");
	var mask_1_graphics_503 = new cjs.Graphics().p("EgHCAkmQqgmFjHrvMA4ngPBQDHLvmFKfQmGKgrvDHQj+BDj0AAQnfAAm8kDg");
	var mask_1_graphics_504 = new cjs.Graphics().p("EgHxAkKQqUmZixr0MA5CgNVQCxL0mZKTQmaKUr1CxQjkA1jbAAQn7AAnMkfg");
	var mask_1_graphics_505 = new cjs.Graphics().p("EgIgAjsQqImsiar5MA5agLpQCaL6msKGQmuKIr5CaQjJApjBAAQoZAAnck9g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(455).to({graphics:mask_1_graphics_455,x:236,y:259.3}).wait(1).to({graphics:mask_1_graphics_456,x:235.9,y:259.6}).wait(1).to({graphics:mask_1_graphics_457,x:235.9,y:259.7}).wait(1).to({graphics:mask_1_graphics_458,x:235.9,y:259.8}).wait(1).to({graphics:mask_1_graphics_459,x:235.9,y:259.9}).wait(1).to({graphics:mask_1_graphics_460,x:236,y:259.9}).wait(1).to({graphics:mask_1_graphics_461,x:236,y:259.9}).wait(1).to({graphics:mask_1_graphics_462,x:236.1,y:259.9}).wait(1).to({graphics:mask_1_graphics_463,x:236.1,y:259.9}).wait(1).to({graphics:mask_1_graphics_464,x:236.2,y:259.9}).wait(1).to({graphics:mask_1_graphics_465,x:236.2,y:259.9}).wait(1).to({graphics:mask_1_graphics_466,x:236.3,y:260}).wait(1).to({graphics:mask_1_graphics_467,x:236.3,y:260}).wait(1).to({graphics:mask_1_graphics_468,x:236.3,y:260}).wait(1).to({graphics:mask_1_graphics_469,x:236.4,y:260}).wait(1).to({graphics:mask_1_graphics_470,x:236.4,y:260}).wait(1).to({graphics:mask_1_graphics_471,x:236.4,y:260}).wait(1).to({graphics:mask_1_graphics_472,x:236.5,y:260}).wait(1).to({graphics:mask_1_graphics_473,x:236.5,y:260}).wait(1).to({graphics:mask_1_graphics_474,x:236.5,y:260}).wait(1).to({graphics:mask_1_graphics_475,x:236.5,y:260}).wait(1).to({graphics:mask_1_graphics_476,x:236.5,y:260}).wait(1).to({graphics:mask_1_graphics_477,x:236.5,y:259.9}).wait(1).to({graphics:mask_1_graphics_478,x:236.5,y:259.9}).wait(1).to({graphics:mask_1_graphics_479,x:236.5,y:259.9}).wait(1).to({graphics:mask_1_graphics_480,x:236.5,y:259.8}).wait(1).to({graphics:mask_1_graphics_481,x:236.4,y:259.8}).wait(1).to({graphics:mask_1_graphics_482,x:236.4,y:259.8}).wait(1).to({graphics:mask_1_graphics_483,x:236.4,y:259.7}).wait(1).to({graphics:mask_1_graphics_484,x:236.4,y:259.7}).wait(1).to({graphics:mask_1_graphics_485,x:236.4,y:259.7}).wait(1).to({graphics:mask_1_graphics_486,x:236.5,y:259.7}).wait(1).to({graphics:mask_1_graphics_487,x:236.5,y:259.7}).wait(1).to({graphics:mask_1_graphics_488,x:236.5,y:259.8}).wait(1).to({graphics:mask_1_graphics_489,x:236.6,y:259.8}).wait(1).to({graphics:mask_1_graphics_490,x:236.6,y:259.8}).wait(1).to({graphics:mask_1_graphics_491,x:236.7,y:259.9}).wait(1).to({graphics:mask_1_graphics_492,x:236.7,y:259.9}).wait(1).to({graphics:mask_1_graphics_493,x:236.8,y:260}).wait(1).to({graphics:mask_1_graphics_494,x:236.8,y:260}).wait(1).to({graphics:mask_1_graphics_495,x:236.9,y:260}).wait(1).to({graphics:mask_1_graphics_496,x:236.9,y:260.1}).wait(1).to({graphics:mask_1_graphics_497,x:236.9,y:260.1}).wait(1).to({graphics:mask_1_graphics_498,x:237,y:260.1}).wait(1).to({graphics:mask_1_graphics_499,x:237,y:260.1}).wait(1).to({graphics:mask_1_graphics_500,x:237,y:260.1}).wait(1).to({graphics:mask_1_graphics_501,x:237,y:260.1}).wait(1).to({graphics:mask_1_graphics_502,x:237,y:260.1}).wait(1).to({graphics:mask_1_graphics_503,x:237,y:260.1}).wait(1).to({graphics:mask_1_graphics_504,x:236.9,y:260.1}).wait(1).to({graphics:mask_1_graphics_505,x:236.9,y:260.1}).wait(161));

	// Layer 6
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(20,1,1).p("AC7shQAWhWBogGQBngGCUAvQCTAwDbD+QA9B6AWCGQAYCJgECKQgDCPgsCJQgpB9hRBpQhbB2h5BVQh1BRiEA3QiFA3iRAJQiSAHiOgkQiOgjiBhEQiBhEhwhfQhwhehYh0Qhbh3hCiZ");
	this.shape_2.setTransform(268.8,345.8);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(455).to({_off:false},0).wait(211));

	// Layer 7 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_370 = new cjs.Graphics().p("EABcAgGQoiopAEsJQAEsIIoohQInojMJAEMgAUA6lQsJgEohong");
	var mask_2_graphics_371 = new cjs.Graphics().p("AAMfWQoOo7AgsJQAgsHI6oNQI7oPMIAfMgCZA6iQsIgfoOo7g");
	var mask_2_graphics_372 = new cjs.Graphics().p("AhAenQn7pOA8sHQA7sGJNn4QJMn7MHA7MgEeA6aQsHg7n3pMg");
	var mask_2_graphics_373 = new cjs.Graphics().p("AiMd3QnlpgBXsEQBWsDJfnkQJenlMEBXMgGjA6NQsEhWnipeg");
	var mask_2_graphics_374 = new cjs.Graphics().p("AjWdGQnPpwBysBQByr/JvnOQJvnPMBByMgInA58QsAhynNpvg");
	var mask_2_graphics_375 = new cjs.Graphics().p("AkecWQm4qBCNr8QCNr7J/m3QJ/m5L8COMgKqA5mQr7iOm3p+g");
	var mask_2_graphics_376 = new cjs.Graphics().p("AljblQmiqQCor2QCpr2KOmgQKOmiL3CpMgMtA5LQr2iomfqOg");
	var mask_2_graphics_377 = new cjs.Graphics().p("Amna0QmKqeDDrwQDErvKcmJQKdmKLwDDMgOuA4sQrvjDmJqcg");
	var mask_2_graphics_378 = new cjs.Graphics().p("AnoaDQlyqsDeroQDeroKqlwQKqlzLpDeMgQuA4JQrojelxqqg");
	var mask_2_graphics_379 = new cjs.Graphics().p("AomZSQlaq4D4rhQD4rfK3lYQK3laLgD4MgStA3hQrfj5lYq2g");
	var mask_2_graphics_380 = new cjs.Graphics().p("ApjYhQlArEESrXQESrWLDk/QLDlBLXESMgUrA2zQrWkSlArCg");
	var mask_2_graphics_381 = new cjs.Graphics().p("AqcXwQknrPEsrNQErrLLOkmQLOkoLMEsMgWmA2CQrMkskmrNg");
	var mask_2_graphics_382 = new cjs.Graphics().p("ArTXAQkNraFFrBQFFrBLXkMQLYkOLCFFMgYhA1NQrAlFkNrXg");
	var mask_2_graphics_383 = new cjs.Graphics().p("AsHWPQjzriFdq1QFeq1LhjyQLhj0K1FeMgaYA0SQq1ldjyrhg");
	var mask_2_graphics_384 = new cjs.Graphics().p("As5VfQjYrqF2qoQF2qpLpjXQLpjaKpF2MgcOAzVQqol2jZrpg");
	var mask_2_graphics_385 = new cjs.Graphics().p("AtnUwQi+ryGOqaQGOqbLwi9QLwi/KbGOMgeAAySQqbmOi+rvg");
	var mask_2_graphics_386 = new cjs.Graphics().p("AuTUAQijr4GlqLQGmqNL2iiQL3ikKMGmMgfxAxMQqNmmijr2g");
	var mask_2_graphics_387 = new cjs.Graphics().p("Au7TSQiJr+G9p8QG8p9L8iHQL8iJJ9G8MghgAwCQp+m8iHr7g");
	var mask_2_graphics_388 = new cjs.Graphics().p("AvhSjQhtsBHTpsQHTptL/hsQMBhuJsHTMgjMAu0QpsnThtsAg");
	var mask_2_graphics_389 = new cjs.Graphics().p("AwER2QhRsFHopbQHppcMDhQQMEhTJbHpMgk0AthQpcnohSsDg");
	var mask_2_graphics_390 = new cjs.Graphics().p("AwjRJQg2sIH9pJQH+pKMFg1QMHg3JKH+MgmbAsMQpKn+g2sFg");
	var mask_2_graphics_391 = new cjs.Graphics().p("AxAQdQgasJISo3QISo4MHgZQMIgcI3ITMgn+AqyQo3oSgbsGg");
	var mask_2_graphics_392 = new cjs.Graphics().p("AxZPxQABsJImokQImokMHACQMIAAIlImMgpdApWQolomABsHg");
	var mask_2_graphics_393 = new cjs.Graphics().p("AxvPGQAdsII5oQQI4oQMIAdQMHAcIRI5Mgq6An2QoRo5AdsHg");
	var mask_2_graphics_394 = new cjs.Graphics().p("AyCOdQA5sHJLn7QJLn9MGA6QMGA3H8JLMgsTAmTQn8pLA4sFg");
	var mask_2_graphics_395 = new cjs.Graphics().p("AyRN0QBTsFJenmQJcnmMDBUQMEBTHnJdMgtoAktQnnpeBUsCg");
	var mask_2_graphics_396 = new cjs.Graphics().p("AyeNMQBwsBJunQQJtnRMABwQMABuHRJuMgu5AjDQnRpuBur/g");
	var mask_2_graphics_397 = new cjs.Graphics().p("AymMlQCKr8J+m6QJ9m7L8CMQL8CJG6J9MgwHAhYQm6p+CKr7g");
	var mask_2_graphics_398 = new cjs.Graphics().p("AysMAQClr4KOmiQKMmkL2CmQL3CkGkKNMgxRAfpQmkqNClr1g");
	var mask_2_graphics_399 = new cjs.Graphics().p("AyuLbQDArwKcmMQKbmMLvDBQLxC/GMKbMgyXAd4QmMqcDArvg");
	var mask_2_graphics_400 = new cjs.Graphics().p("AyuK4QDbrpKql0QKpl0LoDbQLpDaF0KoMgzZAcFQl0qqDarng");
	var mask_2_graphics_401 = new cjs.Graphics().p("AypKWQD1rhK2lcQK2lbLgD2QLhDzFbK2Mg0WAaOQlcq2D1rfg");
	var mask_2_graphics_402 = new cjs.Graphics().p("AyiJ1QEQrYLClCQLBlDLXEQQLYEOFDLBMg1QAYWQlDrCEOrWg");
	var mask_2_graphics_403 = new cjs.Graphics().p("AyXJVQEprNLNkqQLNkpLNEpQLNEoEqLMMg2FAWdQkqrOEorMg");
	var mask_2_graphics_404 = new cjs.Graphics().p("AyJI3QFDrCLXkQQLXkQLBFDQLDFBEQLWMg22AUhQkQrYFBrBg");
	var mask_2_graphics_405 = new cjs.Graphics().p("Ax3IaQFbq2Lhj2QLfj2K2FcQK3FZD2LgMg3jASjQj2rhFbq1g");
	var mask_2_graphics_406 = new cjs.Graphics().p("AxjH/QF0qqLpjbQLojcKpF0QKqFxDbLpMg4KAQkQjbrpFyqog");
	var mask_2_graphics_407 = new cjs.Graphics().p("AxLHlQGMqcLvjBQLwjBKcGMQKcGJDBLwMg4tAOkQjBrwGKqbg");
	var mask_2_graphics_408 = new cjs.Graphics().p("AwwHMQGjqNL2imQL3imKMGjQKOGhCnL2Mg5NAMiQimr2GiqNg");
	var mask_2_graphics_409 = new cjs.Graphics().p("AwRG1QG6p+L7iLQL8iLJ9G7QJ/G3CLL8Mg5mAKgQiLr8G5p+g");
	var mask_2_graphics_410 = new cjs.Graphics().p("AvwGgQHQpuMAhwQMAhwJuHQQJuHPBwMBMg58AIcQhvsBHPptg");
	var mask_2_graphics_411 = new cjs.Graphics().p("AvMGMQHnpdMDhUQMDhVJdHmQJeHlBUMEMg6MAGXQhVsDHlpdg");
	var mask_2_graphics_412 = new cjs.Graphics().p("AukF6QH7pLMGg5QMGg5JLH6QJMH6A5MHMg6YAETQg6sGH7pLg");
	var mask_2_graphics_413 = new cjs.Graphics().p("At6FpQIQo4MHgeQMIgdI4IPQI6IOAeMIMg6gACPQgesIIPo5g");
	var mask_2_graphics_414 = new cjs.Graphics().p("AtNFbQIkomMIgCQMIgCImIjQImIiACMJMg6iAAJQgCsIIiolg");
	var mask_2_graphics_415 = new cjs.Graphics().p("A1sYpQAZsII2oSQI3oSMHAaQMIAaISI2QITI2gaMIg");
	var mask_2_graphics_416 = new cjs.Graphics().p("A1pXFQA1sHJIn9QJKn9MFA1QMHA1H9JJQH/JIg2MHg");
	var mask_2_graphics_417 = new cjs.Graphics().p("A1kVhQBRsEJanoQJbnoMDBRQMFBQHnJbQHqJZhRMFg");
	var mask_2_graphics_418 = new cjs.Graphics().p("A1cT+QBssBJqnSQJtnTMABsQMBBsHSJsQHUJrhsMBg");
	var mask_2_graphics_419 = new cjs.Graphics().p("A1SSbQCHr8J7m7QJ8m9L8CHQL9CHG7J8QG+J7iHL8g");
	var mask_2_graphics_420 = new cjs.Graphics().p("A1GQ5QCir3KKmkQKLmnL4CjQL3CiGlKLQGmKKiiL4g");
	var mask_2_graphics_421 = new cjs.Graphics().p("A04PXQC+rxKZmMQKZmPLxC9QLxC9GOKaQGPKZi9Lxg");
	var mask_2_graphics_422 = new cjs.Graphics().p("A0nN2QDYrpKnl1QKol3LpDYQLqDYF2KnQF3KnjYLqg");
	var mask_2_graphics_423 = new cjs.Graphics().p("A0TMWQDyrhK0ldQK0leLiDzQLiDyFdK0QFeK0jyLig");
	var mask_2_graphics_424 = new cjs.Graphics().p("Az9K3QEMrXLAlFQLAlFLZENQLZEMFDLAQFGLBkMLYg");
	var mask_2_graphics_425 = new cjs.Graphics().p("AzlJaQEmrOLLkrQLMksLOEnQLPEmEqLLQEtLMknLOg");
	var mask_2_graphics_426 = new cjs.Graphics().p("AzLH9QFArCLVkSQLWkSLEFAQLDFAERLVQETLWlALEg");
	var mask_2_graphics_427 = new cjs.Graphics().p("AyuGjQFZq3Lej4QLfj4K4FZQK4FZD3LfQD4LflZK4g");
	var mask_2_graphics_428 = new cjs.Graphics().p("AyPFJQFxqqLnjdQLojdKrFxQKrFyDcLnQDfLnlyKrg");
	var mask_2_graphics_429 = new cjs.Graphics().p("AxuDyQGKqdLtjCQLwjDKdGKQKeGJDBLvQDELvmKKdg");
	var mask_2_graphics_430 = new cjs.Graphics().p("AxLCcQGhqOL0ioQL3ioKPGiQKOGgCnL2QCpL1mhKPg");
	var mask_2_graphics_431 = new cjs.Graphics().p("AwmBIQG5p+L5iNQL8iNKAG5QJ/G3CML7QCOL7m5KAg");
	var mask_2_graphics_432 = new cjs.Graphics().p("Av+gJQHPpvL9hxQMBhyJwHPQJvHOBwMAQBzL/nPJwg");
	var mask_2_graphics_433 = new cjs.Graphics().p("AvVhYQHlpfMBhWQMEhWJfHlQJfHkBVMDQBXMDnlJfg");
	var mask_2_graphics_434 = new cjs.Graphics().p("AuqimQH6pNMEg6QMHg7JNH7QJNH5A5MGQA8MGn7JNg");
	var mask_2_graphics_435 = new cjs.Graphics().p("At9jxQIPo6MFgfQMJgfI6IPQI7IOAdMHQAgMIoPI6g");
	var mask_2_graphics_436 = new cjs.Graphics().p("AtPk6QIjonMGgDQMJgDIoIjQInIiACMIQAEMIojIng");
	var mask_2_graphics_437 = new cjs.Graphics().p("AsfmAQI2oTMGAYQMJAZITI2QIUI1gaMIQgXMIo3ITg");
	var mask_2_graphics_438 = new cjs.Graphics().p("ArunDQJJn/MEA0QMIA0H/JJQH/JIg1MGQg0MHpIH/g");
	var mask_2_graphics_439 = new cjs.Graphics().p("Aq7oEQJbnqMCBQQMFBQHqJaQHqJahRMEQhPMEpbHqg");
	var mask_2_graphics_440 = new cjs.Graphics().p("AqHpCQJsnUL/BrQMCBrHUJsQHUJrhtMBQhqMApsHUg");
	var mask_2_graphics_441 = new cjs.Graphics().p("ApRp+QJ7m9L7CGQL+CHG+J8QG9J7iHL9QiGL8p8G+g");
	var mask_2_graphics_442 = new cjs.Graphics().p("Aoaq2QKLmnL2CiQL4CiGnKMQGmKKijL3QigL4qMGmg");
	var mask_2_graphics_443 = new cjs.Graphics().p("AnirrQKamPLwC8QLyC9GPKbQGPKZi+LxQi8LxqaGPg");
	var mask_2_graphics_444 = new cjs.Graphics().p("AmosdQKnl4LpDYQLrDXF3KpQF3KnjZLpQjWLqqoF3g");
	var mask_2_graphics_445 = new cjs.Graphics().p("AlttMQK0lfLhDxQLiDzFfK1QFfK0jzLhQjxLiq1Ffg");
	var mask_2_graphics_446 = new cjs.Graphics().p("Akxt4QLAlGLYEMQLZEMFGLAQFGLCkNLYQkLLYrCFGg");
	var mask_2_graphics_447 = new cjs.Graphics().p("Aj0uhQLMksLNElQLQEmEsLMQEsLMkmLOQklLPrNEsg");
	var mask_2_graphics_448 = new cjs.Graphics().p("Ai1vGQLVkTLDE/QLEFAETLVQETLXlBLDQk+LErXETg");
	var mask_2_graphics_449 = new cjs.Graphics().p("Ah2voQLfj5K3FYQK4FZD5LfQD4LglZK3QlXK4rgD5g");
	var mask_2_graphics_450 = new cjs.Graphics().p("Ag2wHQLnjeKqFwQKsFyDeLnQDfLplyKqQlwKsrpDeg");
	var mask_2_graphics_451 = new cjs.Graphics().p("AAKwiQLwjEKcGJQKeGKDELuQDDLwmKKdQmIKerwDEg");
	var mask_2_graphics_452 = new cjs.Graphics().p("ABLw6QL3ipKOGhQKPGhCpL1QCpL3miKOQmgKQr2Cog");
	var mask_2_graphics_453 = new cjs.Graphics().p("ACNxOQL8iOJ/G4QKBG4CNL7QCNL8m4J/Qm3KAr8COg");
	var mask_2_graphics_454 = new cjs.Graphics().p("ADQxfQMAhyJvHOQJwHPBzL/QByMBnQJvQnNJwsBByg");
	var mask_2_graphics_455 = new cjs.Graphics().p("AESxsQMEhXJeHkQJgHlBWMDQBXMEnlJeQnkJgsEBWg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(370).to({graphics:mask_2_graphics_370,x:143.4,y:260.9}).wait(1).to({graphics:mask_2_graphics_371,x:146.7,y:260.8}).wait(1).to({graphics:mask_2_graphics_372,x:150,y:260.6}).wait(1).to({graphics:mask_2_graphics_373,x:153.3,y:260.3}).wait(1).to({graphics:mask_2_graphics_374,x:156.6,y:259.9}).wait(1).to({graphics:mask_2_graphics_375,x:159.8,y:259.4}).wait(1).to({graphics:mask_2_graphics_376,x:163.1,y:258.7}).wait(1).to({graphics:mask_2_graphics_377,x:166.3,y:257.9}).wait(1).to({graphics:mask_2_graphics_378,x:169.5,y:257.1}).wait(1).to({graphics:mask_2_graphics_379,x:172.6,y:256.1}).wait(1).to({graphics:mask_2_graphics_380,x:175.8,y:254.9}).wait(1).to({graphics:mask_2_graphics_381,x:178.8,y:253.7}).wait(1).to({graphics:mask_2_graphics_382,x:181.9,y:252.4}).wait(1).to({graphics:mask_2_graphics_383,x:184.8,y:250.9}).wait(1).to({graphics:mask_2_graphics_384,x:187.8,y:249.4}).wait(1).to({graphics:mask_2_graphics_385,x:190.6,y:247.7}).wait(1).to({graphics:mask_2_graphics_386,x:193.4,y:246}).wait(1).to({graphics:mask_2_graphics_387,x:196.2,y:244.1}).wait(1).to({graphics:mask_2_graphics_388,x:198.8,y:242.2}).wait(1).to({graphics:mask_2_graphics_389,x:201.4,y:240.1}).wait(1).to({graphics:mask_2_graphics_390,x:204,y:238}).wait(1).to({graphics:mask_2_graphics_391,x:206.4,y:235.7}).wait(1).to({graphics:mask_2_graphics_392,x:208.8,y:233.4}).wait(1).to({graphics:mask_2_graphics_393,x:211.1,y:231}).wait(1).to({graphics:mask_2_graphics_394,x:213.3,y:228.5}).wait(1).to({graphics:mask_2_graphics_395,x:215.4,y:226}).wait(1).to({graphics:mask_2_graphics_396,x:217.4,y:223.3}).wait(1).to({graphics:mask_2_graphics_397,x:219.3,y:220.6}).wait(1).to({graphics:mask_2_graphics_398,x:221.2,y:217.8}).wait(1).to({graphics:mask_2_graphics_399,x:222.9,y:215}).wait(1).to({graphics:mask_2_graphics_400,x:224.5,y:212.1}).wait(1).to({graphics:mask_2_graphics_401,x:226,y:209.1}).wait(1).to({graphics:mask_2_graphics_402,x:227.5,y:206.1}).wait(1).to({graphics:mask_2_graphics_403,x:228.8,y:203.1}).wait(1).to({graphics:mask_2_graphics_404,x:230,y:200}).wait(1).to({graphics:mask_2_graphics_405,x:231.1,y:196.8}).wait(1).to({graphics:mask_2_graphics_406,x:232,y:193.6}).wait(1).to({graphics:mask_2_graphics_407,x:232.9,y:190.4}).wait(1).to({graphics:mask_2_graphics_408,x:233.7,y:187.1}).wait(1).to({graphics:mask_2_graphics_409,x:234.3,y:183.9}).wait(1).to({graphics:mask_2_graphics_410,x:234.8,y:180.6}).wait(1).to({graphics:mask_2_graphics_411,x:235.2,y:177.2}).wait(1).to({graphics:mask_2_graphics_412,x:235.5,y:173.9}).wait(1).to({graphics:mask_2_graphics_413,x:235.7,y:170.6}).wait(1).to({graphics:mask_2_graphics_414,x:235.7,y:167.2}).wait(1).to({graphics:mask_2_graphics_415,x:235.7,y:170.1}).wait(1).to({graphics:mask_2_graphics_416,x:235.7,y:173.4}).wait(1).to({graphics:mask_2_graphics_417,x:235.8,y:176.7}).wait(1).to({graphics:mask_2_graphics_418,x:235.8,y:180}).wait(1).to({graphics:mask_2_graphics_419,x:235.8,y:183.2}).wait(1).to({graphics:mask_2_graphics_420,x:235.8,y:186.5}).wait(1).to({graphics:mask_2_graphics_421,x:235.9,y:189.7}).wait(1).to({graphics:mask_2_graphics_422,x:235.9,y:192.9}).wait(1).to({graphics:mask_2_graphics_423,x:235.9,y:196.1}).wait(1).to({graphics:mask_2_graphics_424,x:235.9,y:199.2}).wait(1).to({graphics:mask_2_graphics_425,x:235.9,y:202.3}).wait(1).to({graphics:mask_2_graphics_426,x:235.9,y:205.4}).wait(1).to({graphics:mask_2_graphics_427,x:235.9,y:208.4}).wait(1).to({graphics:mask_2_graphics_428,x:235.9,y:211.3}).wait(1).to({graphics:mask_2_graphics_429,x:235.8,y:214.2}).wait(1).to({graphics:mask_2_graphics_430,x:235.8,y:217}).wait(1).to({graphics:mask_2_graphics_431,x:235.8,y:219.8}).wait(1).to({graphics:mask_2_graphics_432,x:235.7,y:222.5}).wait(1).to({graphics:mask_2_graphics_433,x:235.7,y:225.1}).wait(1).to({graphics:mask_2_graphics_434,x:235.6,y:227.7}).wait(1).to({graphics:mask_2_graphics_435,x:235.6,y:230.1}).wait(1).to({graphics:mask_2_graphics_436,x:235.6,y:232.5}).wait(1).to({graphics:mask_2_graphics_437,x:235.6,y:234.8}).wait(1).to({graphics:mask_2_graphics_438,x:235.7,y:237.1}).wait(1).to({graphics:mask_2_graphics_439,x:235.7,y:239.2}).wait(1).to({graphics:mask_2_graphics_440,x:235.8,y:241.2}).wait(1).to({graphics:mask_2_graphics_441,x:235.8,y:243.2}).wait(1).to({graphics:mask_2_graphics_442,x:235.9,y:245}).wait(1).to({graphics:mask_2_graphics_443,x:235.9,y:246.8}).wait(1).to({graphics:mask_2_graphics_444,x:236,y:248.4}).wait(1).to({graphics:mask_2_graphics_445,x:236,y:250}).wait(1).to({graphics:mask_2_graphics_446,x:236,y:251.4}).wait(1).to({graphics:mask_2_graphics_447,x:236.1,y:252.7}).wait(1).to({graphics:mask_2_graphics_448,x:236.1,y:254}).wait(1).to({graphics:mask_2_graphics_449,x:236.1,y:255.1}).wait(1).to({graphics:mask_2_graphics_450,x:236.1,y:256.1}).wait(1).to({graphics:mask_2_graphics_451,x:236.1,y:257}).wait(1).to({graphics:mask_2_graphics_452,x:236,y:257.7}).wait(1).to({graphics:mask_2_graphics_453,x:236,y:258.4}).wait(1).to({graphics:mask_2_graphics_454,x:236,y:258.9}).wait(1).to({graphics:mask_2_graphics_455,x:236,y:259.3}).wait(211));

	// Layer 5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(20,1,1).p("AmmsRQAWhWBogGQBngHCUAwQCSAwDbD+QA9B6AWCGQAYCJgECKQgDCPgsCJQgpB9hRBpQhbB2h5BVQh0BRiEA3QgvAUgxAN");
	this.shape_3.setTransform(329.8,344.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(20,1,1).p("AC7shQAWhWBogGQBngGCUAvQCTAwDbD+QA9B6AWCGQAYCJgECKQgDCPgsCJQgpB9hRBpQhbB2h5BVQh1BRiEA3QiFA3iRAJQiSAHiOgkQiOgjiBhEQiBhEhwhfQhwhehYh0Qhbh3hCiZ");
	this.shape_4.setTransform(268.8,345.8);

	var maskedShapeInstanceList = [this.shape_3,this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3}]},370).to({state:[{t:this.shape_4}]},40).wait(256));

	// Layer 13
	this.instance_2 = new lib.ar4("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(345.4,135.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(240).to({_off:false},0).wait(426));

	// Layer 4 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_329 = new cjs.Graphics().p("ArFrqQILo9MEgjQMHgjI9IKQI8ILAjMFQAkMGoLI9g");
	var mask_3_graphics_330 = new cjs.Graphics().p("AqCtTQInohMFAFQMIAFIhIoQIhIngFMGQgEMHooIhg");
	var mask_3_graphics_331 = new cjs.Graphics().p("Ao8u2QJCoDMEAsQMHAtIEJDQIEJDguMFQgrMFpEIEg");
	var mask_3_graphics_332 = new cjs.Graphics().p("AnzwTQJbnlMCBUQMDBVHmJdQHlJdhWMBQhTMCpdHmg");
	var mask_3_graphics_333 = new cjs.Graphics().p("AmoxrQJ1nFL8B8QL+B8HFJ1QHGJ2h9L7Qh7L+p2HFg");
	var mask_3_graphics_334 = new cjs.Graphics().p("AlZy8QKLmlL1CjQL3CkGkKMQGlKMilL0QiiL2qMGlg");
	var mask_3_graphics_335 = new cjs.Graphics().p("AkH0IQKgmCLrDKQLtDLGDKgQGCKgjLLsQjKLtqgGCg");
	var mask_3_graphics_336 = new cjs.Graphics().p("Aiz1NQKzlfLgDxQLiDxFfKzQFfKzjyLhQjvLhq0Ffg");
	var mask_3_graphics_337 = new cjs.Graphics().p("Ahc2LQLEk7LSEWQLVEXE7LFQE7LEkXLTQkWLUrFE7g");
	var mask_3_graphics_338 = new cjs.Graphics().p("AgD3CQLTkWLDE7QLGE7EWLVQEWLTk8LEQk7LFrUEWg");
	var mask_3_graphics_339 = new cjs.Graphics().p("ABX3zQLijwKyFfQK0FgDwLiQDwLhlgKyQlfK0rhDwg");
	var mask_3_graphics_340 = new cjs.Graphics().p("ACz4cQLujKKfGCQKhGDDKLuQDKLsmEKfQmCKhrtDKg");
	var mask_3_graphics_341 = new cjs.Graphics().p("AER4+QL3ijKLGkQKMGlCjL3QCjL2mmKLQmkKLr3Ckg");
	var mask_3_graphics_342 = new cjs.Graphics().p("AFx5ZQL+h8J0HFQJ1HHB8L+QB8L9nHJ0QnFJ2r+B8g");
	var mask_3_graphics_343 = new cjs.Graphics().p("AHR5tQMDhUJcHlQJdHnBUMCQBUMEnmJcQnlJdsEBUg");
	var mask_3_graphics_344 = new cjs.Graphics().p("AIx55QMHgsJCIEQJEIFAsMGQAsMHoFJCQoEJDsHAsg");
	var mask_3_graphics_345 = new cjs.Graphics().p("AKS5+QMIgEInIhQIoIjAEMHQAEMIojInQogIosJAEg");
	var mask_3_graphics_346 = new cjs.Graphics().p("EAJEAgiMACug6eQMHAkIKI9QILI+gkMGQgkMIo+IJQoXHqrKAAQgxAAgygCg");
	var mask_3_graphics_347 = new cjs.Graphics().p("EAHiAgaMAFvg6QQMEBMHsJXQHtJYhMMEQhMMFpYHrQoHGrqKAAQhkAAhngKg");
	var mask_3_graphics_348 = new cjs.Graphics().p("EAF0AgLMAJJg5zQL/B5HHJzQHJJ0h5L+Qh5L/p0HHQnwFppGAAQibAAihgag");
	var mask_3_graphics_349 = new cjs.Graphics().p("AEHf2MAMig5JQL2CmGiKMQGjKOinL1QimL2qNGhQnTEsoKAAQjPAAjXgvg");
	var mask_3_graphics_350 = new cjs.Graphics().p("ACcfbMAP3g4UQLrDTF6KjQF8KljSLqQjTLrqkF6Qm0D1nQAAQkBAAkKhLg");
	var mask_3_graphics_351 = new cjs.Graphics().p("AAye5MATKg3QQLdD9FSK5QFTK5j+LdQj+Ldq6FSQmODCmbAAQkzAAk6htg");
	var mask_3_graphics_352 = new cjs.Graphics().p("Ag0eSMAWWg2CQLNEpEoLLQEqLLkpLNQkoLNrNEoQlmCVlnAAQllAAlliUg");
	var mask_3_graphics_353 = new cjs.Graphics().p("AiYdlMAZeg0oQK6FTD+LbQD/LclSK5QlTK6rcD+Qk7Btk0AAQmZAAmMjAg");
	var mask_3_graphics_354 = new cjs.Graphics().p("AkccfMAdmgycQKdGJDDLtQDDLumIKdQmJKdruDCQj6BCjxAAQniAAm9kGg");
	var mask_3_graphics_355 = new cjs.Graphics().p("AmZbPMAhggv8QJ8G9CHL6QCIL8m9J8Qm8J7r8CHQizAgisAAQoxAAnmlVg");
	var mask_3_graphics_356 = new cjs.Graphics().p("AoQZ2MAlOgtJQJXHuBKMCQBKMFntJXQnuJWsEBKQhmAJhjAAQqJABoImtg");
	var mask_3_graphics_357 = new cjs.Graphics().p("Ap/YTMAotgqDQItIcANMFQANMJocIuQocIusIALIgmABQruAAogoPg");
	var mask_3_graphics_358 = new cjs.Graphics().p("EAIgAgdQsGgwoBpGMAr7gmtQIBJHgxMEQgxMIpGIBQoTHUqyAAQhEAAhEgFg");
	var mask_3_graphics_359 = new cjs.Graphics().p("EAGKAgNQr/htnSpuMAu4gjGQHSJuhvL+QhuMBpuHSQn2F3pVAAQiOAAiVgVg");
	var mask_3_graphics_360 = new cjs.Graphics().p("AD2fxQr0iqmfqRMAxigfRQGeKRiqLzQisL3qRGfQnQEloCAAQjWAAjegzg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(329).to({graphics:mask_3_graphics_329,x:254.3,y:177.6}).wait(1).to({graphics:mask_3_graphics_330,x:254.3,y:181.1}).wait(1).to({graphics:mask_3_graphics_331,x:254.3,y:184.4}).wait(1).to({graphics:mask_3_graphics_332,x:254.3,y:187.6}).wait(1).to({graphics:mask_3_graphics_333,x:254.4,y:190.5}).wait(1).to({graphics:mask_3_graphics_334,x:254.4,y:193.3}).wait(1).to({graphics:mask_3_graphics_335,x:254.5,y:195.8}).wait(1).to({graphics:mask_3_graphics_336,x:254.5,y:198.1}).wait(1).to({graphics:mask_3_graphics_337,x:254.5,y:200.2}).wait(1).to({graphics:mask_3_graphics_338,x:254.5,y:202.1}).wait(1).to({graphics:mask_3_graphics_339,x:254.5,y:203.7}).wait(1).to({graphics:mask_3_graphics_340,x:254.4,y:205.1}).wait(1).to({graphics:mask_3_graphics_341,x:254.3,y:206.3}).wait(1).to({graphics:mask_3_graphics_342,x:254.3,y:207.2}).wait(1).to({graphics:mask_3_graphics_343,x:254.2,y:207.8}).wait(1).to({graphics:mask_3_graphics_344,x:254.1,y:208.2}).wait(1).to({graphics:mask_3_graphics_345,x:254.1,y:208.4}).wait(1).to({graphics:mask_3_graphics_346,x:254.1,y:208.4}).wait(1).to({graphics:mask_3_graphics_347,x:254,y:208.4}).wait(1).to({graphics:mask_3_graphics_348,x:254,y:208.5}).wait(1).to({graphics:mask_3_graphics_349,x:254.1,y:208.5}).wait(1).to({graphics:mask_3_graphics_350,x:254.1,y:208.6}).wait(1).to({graphics:mask_3_graphics_351,x:254.1,y:208.6}).wait(1).to({graphics:mask_3_graphics_352,x:254,y:208.6}).wait(1).to({graphics:mask_3_graphics_353,x:253.9,y:208.5}).wait(1).to({graphics:mask_3_graphics_354,x:253.9,y:208.5}).wait(1).to({graphics:mask_3_graphics_355,x:253.8,y:208.4}).wait(1).to({graphics:mask_3_graphics_356,x:253.7,y:208.2}).wait(1).to({graphics:mask_3_graphics_357,x:253.6,y:208.2}).wait(1).to({graphics:mask_3_graphics_358,x:253.7,y:208.2}).wait(1).to({graphics:mask_3_graphics_359,x:253.7,y:208.2}).wait(1).to({graphics:mask_3_graphics_360,x:253.8,y:208.4}).wait(306));

	// Layer 3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(20,1,1).p("Au0mnQJ2oOJ1A3QJ1A3AJKEQAIKCsjFGQsjFFgSn7");
	this.shape_5.setTransform(354.2,206.9);
	this.shape_5._off = true;

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(329).to({_off:false},0).wait(337));

	// Layer 2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_240 = new cjs.Graphics().p("ALmf+Qr9iEnAp7QnAp7CEr7QCDr+J7nAMAhxAv3QnqFao4AAQinAAitgeg");
	var mask_4_graphics_241 = new cjs.Graphics().p("AK8fvQr4iimmqMQmmqMCjr2QChr3KLmnMAf3AxKQnYExoOAAQjKAAjSgtg");
	var mask_4_graphics_242 = new cjs.Graphics().p("AKTfeQrwjBmMqcQmMqcDBrvQC/rwKbmMMAd4AyYQnCELnoAAQjsAAj1g/g");
	var mask_4_graphics_243 = new cjs.Graphics().p("AJsfKQrojflxqrQlyqsDfrmQDdroKrlxMAb2AzhQmrDnnCAAQkPAAkWhTg");
	var mask_4_graphics_244 = new cjs.Graphics().p("AJGezQrej8lWq6QlWq5D9rdQD6rfK5lWMAZxA0mQmSDFmeAAQkwAAk3hqg");
	var mask_4_graphics_245 = new cjs.Graphics().p("AIieZQrUkZk5rGQk6rHEZrSQEYrULFk6MAXqA1kQl3Cml7AAQlSAAlViEg");
	var mask_4_graphics_246 = new cjs.Graphics().p("AIAd9QrIk2kdrSQkerTE2rGQE0rILSkeMAVgA2eQlbCJlYAAQl1AAlxigg");
	var mask_4_graphics_247 = new cjs.Graphics().p("AHfdeQq7lSkArdQkArdFSq6QFQq7LckAMATUA3RQk8Bvk3AAQmXAAmNi/g");
	var mask_4_graphics_248 = new cjs.Graphics().p("AHAc8QqtltjirnQjjrmFtqsQFrqtLmjjMARHA3/QkdBXkUAAQm8AAmmjgg");
	var mask_4_graphics_249 = new cjs.Graphics().p("AGjcYQqemIjFrvQjFruGJqdQGFqfLvjFMAO4A4oQj8BCjzAAQnhAAm9kEg");
	var mask_4_graphics_250 = new cjs.Graphics().p("AGIbyQqNmjior2Qinr1GjqNQGgqPL2inMAMnA5LQjZAwjRAAQoHAAnTkqg");
	var mask_4_graphics_251 = new cjs.Graphics().p("AFvbJQp8m8iJr8QiJr8G8p8QG6p9L8iJMAKUA5oQi0AgitAAQoxAAnmlSg");
	var mask_4_graphics_252 = new cjs.Graphics().p("AFYaeQpqnVhrsCQhqsAHVppQHTpsMBhqMAIBA5/QiPAUiJAAQpcAAn3l9g");
	var mask_4_graphics_253 = new cjs.Graphics().p("AFDZwQpYnthLsFQhMsEHtpWQHrpYMFhMMAFtA6QQhnAKhkAAQqKAAoGmqg");
	var mask_4_graphics_254 = new cjs.Graphics().p("AEvZAQpDoFgssHQgtsGIEpCQIDpEMHgtMADYA6bQg+AEg9AAQq6AAoVnag");
	var mask_4_graphics_255 = new cjs.Graphics().p("AEeYNQouobgOsIQgOsHIbouQIaovMIgOMABDA6hIgnAAQrvAAogoMg");
	var mask_4_graphics_256 = new cjs.Graphics().p("AD0XhQocouANsIQAMsHItobQIsodMIAMMgA7A6hQsIgMobosg");
	var mask_4_graphics_257 = new cjs.Graphics().p("ACqW0QoJpAAmsHQAnsGI+oIQI+oKMIAmMgC5A6dQsHgmoIo+g");
	var mask_4_graphics_258 = new cjs.Graphics().p("ABhWHQn1pRBAsGQBBsEJPn1QJQn1MFBAMgE2A6UQsGhAn0pPg");
	var mask_4_graphics_259 = new cjs.Graphics().p("AAaVZQnhphBbsCQBasDJgngQJgniMDBaMgG0A6IQsDhangpgg");
	var mask_4_graphics_260 = new cjs.Graphics().p("AgqUrQnNpxB0r+QB0sAJwnLQJwnNL/B0MgIwA53QsAh0nKpwg");
	var mask_4_graphics_261 = new cjs.Graphics().p("AhuT9Qm3qACOr6QCOr7J/m2QJ+m4L7COMgKsA5iQr7iOm2p/g");
	var mask_4_graphics_262 = new cjs.Graphics().p("AivTPQmiqPCor0QCnr2KNmhQKOmiL1CoMgMoA5JQr2iomfqNg");
	var mask_4_graphics_263 = new cjs.Graphics().p("AjvShQmLqcDBrvQDBrwKbmKQKbmMLvDBMgOiA4rQrwjBmKqag");
	var mask_4_graphics_264 = new cjs.Graphics().p("AksRzQl1qqDaroQDaroKol0QKol1LpDaMgQcA4KQrpjalzqng");
	var mask_4_graphics_265 = new cjs.Graphics().p("AlnREQleq1DzrgQDzrhK0ldQK0leLhDzMgSUA3lQrgjzldq0g");
	var mask_4_graphics_266 = new cjs.Graphics().p("AmgQWQlGrBELrXQEMrZK/lEQLAlHLYELMgULA27QrYkLlFq/g");
	var mask_4_graphics_267 = new cjs.Graphics().p("AnXPoQkurLEkrOQEkrQLKksQLJkvLQEkMgWBA2NQrOkkkurJg");
	var mask_4_graphics_268 = new cjs.Graphics().p("AoLO6QkWrVE8rEQE8rFLTkUQLUkXLFE8MgX1A1cQrEk8kVrTg");
	var mask_4_graphics_269 = new cjs.Graphics().p("Ao+OLQj9reFTq4QFUq6Lcj8QLdj+K6FTMgZnA0nQq5lUj9rcg");
	var mask_4_graphics_270 = new cjs.Graphics().p("ApkNnQjprlFmqvQFmqxLjjoQLjjqKwFmMgbAAz5Qqwlmjprig");
	var mask_4_graphics_271 = new cjs.Graphics().p("AqINCQjWrqF5qmQF4qmLpjUQLpjXKnF5MgcaAzKQqll5jVrpg");
	var mask_4_graphics_272 = new cjs.Graphics().p("AqrMeQjCrwGLqbQGLqcLujAQLvjCKcGLMgdyAyXQqbmLjArug");
	var mask_4_graphics_273 = new cjs.Graphics().p("ArNL6Qitr1GdqQQGcqRL0isQLziuKSGdMgfIAxjQqQmditrzg");
	var mask_4_graphics_274 = new cjs.Graphics().p("ArsLXQiZr5GuqFQGuqGL4iYQL4iZKGGuMggcAwsQqFmuiYr3g");
	var mask_4_graphics_275 = new cjs.Graphics().p("AsKK0QiEr9G/p6QHAp6L7iCQL8iFJ6G/MghvAvzQp6m/iDr7g");
	var mask_4_graphics_276 = new cjs.Graphics().p("AsnKRQhvsAHQpuQHQptL/huQMAhxJtHRMgjAAu3QpunQhvr+g");
	var mask_4_graphics_277 = new cjs.Graphics().p("AtBJuQhbsCHhphQHgphMDhaQMChbJhHhMgkRAt6QphnhhasBg");
	var mask_4_graphics_278 = new cjs.Graphics().p("AtaJMQhGsFHypTQHwpUMEhFQMEhHJUHyMgleAs6QpUnxhGsDg");
	var mask_4_graphics_279 = new cjs.Graphics().p("AtxIqQgxsGIBpGQIBpGMGgwQMFgyJHIBMgmsAr5QpGoBgxsFg");
	var mask_4_graphics_280 = new cjs.Graphics().p("AuGIJQgcsHIRo5QIPo4MHgbQMHgdI4IRMgn2Aq1Qo4oRgcsFg");
	var mask_4_graphics_281 = new cjs.Graphics().p("AuZHoQgHsIIgoqQIeopMIgGQMHgIIqIfMgo/ApwQoqoggHsGg");
	var mask_4_graphics_282 = new cjs.Graphics().p("AurHHQAOsHIvobQItobMHAPQMIANIbIuMgqHAooQoaovANsGg");
	var mask_4_graphics_283 = new cjs.Graphics().p("Au6GnQAjsHI8oLQI8oMMHAkQMGAiIMI8MgrLAnfQoMo9AjsGg");
	var mask_4_graphics_284 = new cjs.Graphics().p("AvIGIQA4sGJKn8QJKn8MFA5QMGA2H8JLMgsOAmTQn8pLA3sEg");
	var mask_4_graphics_285 = new cjs.Graphics().p("AvUFpQBNsEJYnsQJXnsMEBOQMDBLHsJYMgtPAlGQnspZBMsCg");
	var mask_4_graphics_286 = new cjs.Graphics().p("AveFLQBisCJlncQJknbMBBiQMCBgHbJlMguOAj3QncplBhsAg");
	var mask_4_graphics_287 = new cjs.Graphics().p("AvmEtQB2r/JynLQJxnLL+B3QL/B1HKJyMgvLAimQnLpyB2r9g");
	var mask_4_graphics_288 = new cjs.Graphics().p("AvsEQQCLr7J9m6QJ9m6L7CLQL7CKG6J+MgwGAhTQm5p9CKr6g");
	var mask_4_graphics_289 = new cjs.Graphics().p("AvwDzQCfr3KJmoQKJmpL3CgQL3CeGoKKMgw+AgAQmoqKCfr2g");
	var mask_4_graphics_290 = new cjs.Graphics().p("AvzDXQC0ryKVmXQKTmXLyC0QLzCzGXKVMgx0AeqQmXqUCzryg");
	var mask_4_graphics_291 = new cjs.Graphics().p("AvzC8QDHrtKgmFQKfmFLtDJQLtDGGFKgMgyoAdUQmFqgDIrsg");
	var mask_4_graphics_292 = new cjs.Graphics().p("AvyCiQDcroKqlzQKplyLnDcQLoDbFzKqMgzaAb8QlzqqDcrmg");
	var mask_4_graphics_293 = new cjs.Graphics().p("AvvCIQDwriK0lgQKylgLhDxQLiDuFgK0Mg0IAajQlgq0Dvrgg");
	var mask_4_graphics_294 = new cjs.Graphics().p("AvqBvQEErbK9lNQK8lOLaEFQLbECFOK9Mg01AZIQlOq8EDrag");
	var mask_4_graphics_295 = new cjs.Graphics().p("AvjBXQEYrULFk6QLFk7LTEYQLUEWE6LFMg1fAXuQk6rGEWrSg");
	var mask_4_graphics_296 = new cjs.Graphics().p("AvaA/QErrMLNknQLOknLLErQLMEqEnLNMg2HAWQQknrNEqrLg");
	var mask_4_graphics_297 = new cjs.Graphics().p("AvPAoQE+rDLVkUQLVkULDE/QLEE9EULUMg2sAUzQkUrVE9rDg");
	var mask_4_graphics_298 = new cjs.Graphics().p("AvCASQFRq6LckAQLckAK6FRQK7FQEALbMg3OATVQkArdFQq6g");
	var mask_4_graphics_299 = new cjs.Graphics().p("Au0gBQFkqzLijsQLjjsKxFkQKxFiDtLjMg3vAR0QjsrjFjqvg");
	var mask_4_graphics_300 = new cjs.Graphics().p("AuhgYQF4qnLpjWQLqjWKmF6QKmF3DWLpMg4PAQHQjWrqF4qkg");
	var mask_4_graphics_301 = new cjs.Graphics().p("AuMguQGNqbLvi/QLwi/KaGOQKbGLC/LwMg4tAOYQi/rwGMqYg");
	var mask_4_graphics_302 = new cjs.Graphics().p("At0hDQGhqOL0ioQL2ioKNGiQKOGfCoL1Mg5HAMqQior2GhqMg");
	var mask_4_graphics_303 = new cjs.Graphics().p("AtahWQG0qCL6iQQL6iRKAG1QKBG0CRL5Mg5eAK6QiQr6G0p/g");
	var mask_4_graphics_304 = new cjs.Graphics().p("As+hoQHIp0L9h6QL+h5JzHIQJ0HHB5L9Mg5xAJKQh5r+HHpxg");
	var mask_4_graphics_305 = new cjs.Graphics().p("Asgh6QHbplMBhiQMBhiJkHbQJmHZBiMBMg6BAHZQhisCHapjg");
	var mask_4_graphics_306 = new cjs.Graphics().p("Ar/iKQHtpWMDhLQMFhKJVHtQJXHrBKMEMg6NAFoQhKsEHspVg");
	var mask_4_graphics_307 = new cjs.Graphics().p("ArciYQH/pIMFgzQMGgzJGIAQJIH9AyMGMg6VAD1QgzsFH+pFg");
	var mask_4_graphics_308 = new cjs.Graphics().p("Aq3imQIRo4MGgbQMHgbI2IRQI4IOAbMHMg6bACEQgcsHIQo1g");
	var mask_4_graphics_309 = new cjs.Graphics().p("AqQiyQIiooMGgDQMIgEImIiQInIgAEMHMg6eAASQgEsIIhokg");
	var mask_4_graphics_310 = new cjs.Graphics().p("AysQtQAUsHIxoUQIyoWMHAUQMHAUIUIyQIXIxgUMHg");
	var mask_4_graphics_311 = new cjs.Graphics().p("AyqPYQAssGJBoCQJBoFMHArQMGAsIDJCQIFJAgsMGg");
	var mask_4_graphics_312 = new cjs.Graphics().p("AylODQBDsEJQnxQJRnzMEBDQMFBDHxJSQHzJPhDMFg");
	var mask_4_graphics_313 = new cjs.Graphics().p("AygMuQBbsCJfneQJgnhMCBbQMCBbHfJgQHhJehbMCg");
	var mask_4_graphics_314 = new cjs.Graphics().p("AyZLaQByr+JunMQJunOL+ByQL/ByHMJvQHOJshyL/g");
	var mask_4_graphics_315 = new cjs.Graphics().p("AyNJtQCQr5J/m0QKAm0L6CQQL5CQG0KAQG1J/iQL5g");
	var mask_4_graphics_316 = new cjs.Graphics().p("Ax/IAQCvryKPmaQKRmbLzCuQL0CuGZKRQGcKPiuL0g");
	var mask_4_graphics_317 = new cjs.Graphics().p("AxtGVQDMrrKfmAQKhmBLsDMQLrDMGAKhQGBKfjLLsg");
	var mask_4_graphics_318 = new cjs.Graphics().p("AxZErQDpriKvlmQKvlmLjDqQLjDpFlKvQFnKujqLjg");
	var mask_4_graphics_319 = new cjs.Graphics().p("AxBDCQEGrYK8lKQK8lLLaEGQLZEGFKK9QFLK8kGLZg");
	var mask_4_graphics_320 = new cjs.Graphics().p("AwnBbQEirOLJkuQLJkvLPEjQLOEjEuLJQEvLIkjLPg");
	var mask_4_graphics_321 = new cjs.Graphics().p("AwKgKQE/rDLSkRQLWkTLCE/QLDE/ERLUQETLVk/LCg");
	var mask_4_graphics_322 = new cjs.Graphics().p("AvrhuQFbq2Ldj0QLgj2K1FbQK2FaD0LfQD2LelbK2g");
	var mask_4_graphics_323 = new cjs.Graphics().p("AvIjQQF1qnLmjYQLqjYKnF2QKnF1DXLoQDZLnl2Kog");
	var mask_4_graphics_324 = new cjs.Graphics().p("AujkwQGQqYLui6QLxi7KYGQQKYGRC6LvQC7LwmQKYg");
	var mask_4_graphics_325 = new cjs.Graphics().p("At8mOQGrqHL0idQL4idKIGrQKIGqCbL2QCeL2mqKIg");
	var mask_4_graphics_326 = new cjs.Graphics().p("AtRnpQHDp2L6h/QL+h+J2HDQJ3HEB9L7QCAL8nEJ3g");
	var mask_4_graphics_327 = new cjs.Graphics().p("AslpCQHcpkL/hgQMChgJkHcQJkHcBfMAQBhMAncJlg");
	var mask_4_graphics_328 = new cjs.Graphics().p("Ar2qYQHzpRMChBQMGhCJQH0QJRHzBBMEQBDMDn0JRg");
	var mask_4_graphics_329 = new cjs.Graphics().p("ArFrqQILo9MEgjQMHgjI9IKQI8ILAjMFQAkMGoLI9g");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(240).to({graphics:mask_4_graphics_240,x:214,y:207.6}).wait(1).to({graphics:mask_4_graphics_241,x:211,y:207.6}).wait(1).to({graphics:mask_4_graphics_242,x:207.8,y:207.7}).wait(1).to({graphics:mask_4_graphics_243,x:204.6,y:207.7}).wait(1).to({graphics:mask_4_graphics_244,x:201.3,y:207.7}).wait(1).to({graphics:mask_4_graphics_245,x:197.9,y:207.7}).wait(1).to({graphics:mask_4_graphics_246,x:194.5,y:207.7}).wait(1).to({graphics:mask_4_graphics_247,x:191,y:207.7}).wait(1).to({graphics:mask_4_graphics_248,x:187.5,y:207.6}).wait(1).to({graphics:mask_4_graphics_249,x:184,y:207.6}).wait(1).to({graphics:mask_4_graphics_250,x:180.4,y:207.6}).wait(1).to({graphics:mask_4_graphics_251,x:176.7,y:207.5}).wait(1).to({graphics:mask_4_graphics_252,x:173.1,y:207.5}).wait(1).to({graphics:mask_4_graphics_253,x:169.4,y:207.4}).wait(1).to({graphics:mask_4_graphics_254,x:165.7,y:207.4}).wait(1).to({graphics:mask_4_graphics_255,x:162,y:207.3}).wait(1).to({graphics:mask_4_graphics_256,x:161.8,y:207.3}).wait(1).to({graphics:mask_4_graphics_257,x:165,y:207.2}).wait(1).to({graphics:mask_4_graphics_258,x:168.1,y:207}).wait(1).to({graphics:mask_4_graphics_259,x:171.3,y:206.7}).wait(1).to({graphics:mask_4_graphics_260,x:174.4,y:206.3}).wait(1).to({graphics:mask_4_graphics_261,x:177.5,y:205.8}).wait(1).to({graphics:mask_4_graphics_262,x:180.6,y:205.2}).wait(1).to({graphics:mask_4_graphics_263,x:183.7,y:204.4}).wait(1).to({graphics:mask_4_graphics_264,x:186.8,y:203.6}).wait(1).to({graphics:mask_4_graphics_265,x:189.8,y:202.7}).wait(1).to({graphics:mask_4_graphics_266,x:192.8,y:201.6}).wait(1).to({graphics:mask_4_graphics_267,x:195.8,y:200.5}).wait(1).to({graphics:mask_4_graphics_268,x:198.7,y:199.3}).wait(1).to({graphics:mask_4_graphics_269,x:201.5,y:197.9}).wait(1).to({graphics:mask_4_graphics_270,x:203.7,y:196.7}).wait(1).to({graphics:mask_4_graphics_271,x:206,y:195.6}).wait(1).to({graphics:mask_4_graphics_272,x:208.2,y:194.3}).wait(1).to({graphics:mask_4_graphics_273,x:210.4,y:193}).wait(1).to({graphics:mask_4_graphics_274,x:212.5,y:191.6}).wait(1).to({graphics:mask_4_graphics_275,x:214.6,y:190.2}).wait(1).to({graphics:mask_4_graphics_276,x:216.6,y:188.7}).wait(1).to({graphics:mask_4_graphics_277,x:218.7,y:187.2}).wait(1).to({graphics:mask_4_graphics_278,x:220.6,y:185.6}).wait(1).to({graphics:mask_4_graphics_279,x:222.6,y:184}).wait(1).to({graphics:mask_4_graphics_280,x:224.4,y:182.3}).wait(1).to({graphics:mask_4_graphics_281,x:226.3,y:180.6}).wait(1).to({graphics:mask_4_graphics_282,x:228.1,y:178.8}).wait(1).to({graphics:mask_4_graphics_283,x:229.8,y:177}).wait(1).to({graphics:mask_4_graphics_284,x:231.5,y:175.1}).wait(1).to({graphics:mask_4_graphics_285,x:233.1,y:173.2}).wait(1).to({graphics:mask_4_graphics_286,x:234.7,y:171.2}).wait(1).to({graphics:mask_4_graphics_287,x:236.2,y:169.2}).wait(1).to({graphics:mask_4_graphics_288,x:237.7,y:167.1}).wait(1).to({graphics:mask_4_graphics_289,x:239.1,y:165.1}).wait(1).to({graphics:mask_4_graphics_290,x:240.5,y:162.9}).wait(1).to({graphics:mask_4_graphics_291,x:241.8,y:160.8}).wait(1).to({graphics:mask_4_graphics_292,x:243.1,y:158.6}).wait(1).to({graphics:mask_4_graphics_293,x:244.2,y:156.4}).wait(1).to({graphics:mask_4_graphics_294,x:245.4,y:154.1}).wait(1).to({graphics:mask_4_graphics_295,x:246.4,y:151.9}).wait(1).to({graphics:mask_4_graphics_296,x:247.4,y:149.5}).wait(1).to({graphics:mask_4_graphics_297,x:248.4,y:147.2}).wait(1).to({graphics:mask_4_graphics_298,x:249.2,y:144.9}).wait(1).to({graphics:mask_4_graphics_299,x:250,y:142.5}).wait(1).to({graphics:mask_4_graphics_300,x:250.8,y:139.8}).wait(1).to({graphics:mask_4_graphics_301,x:251.6,y:137}).wait(1).to({graphics:mask_4_graphics_302,x:252.2,y:134.3}).wait(1).to({graphics:mask_4_graphics_303,x:252.8,y:131.5}).wait(1).to({graphics:mask_4_graphics_304,x:253.3,y:128.7}).wait(1).to({graphics:mask_4_graphics_305,x:253.7,y:125.9}).wait(1).to({graphics:mask_4_graphics_306,x:254,y:123.1}).wait(1).to({graphics:mask_4_graphics_307,x:254.2,y:120.2}).wait(1).to({graphics:mask_4_graphics_308,x:254.4,y:117.4}).wait(1).to({graphics:mask_4_graphics_309,x:254.5,y:114.6}).wait(1).to({graphics:mask_4_graphics_310,x:254.5,y:116.6}).wait(1).to({graphics:mask_4_graphics_311,x:254.5,y:119.4}).wait(1).to({graphics:mask_4_graphics_312,x:254.5,y:122.3}).wait(1).to({graphics:mask_4_graphics_313,x:254.5,y:125.1}).wait(1).to({graphics:mask_4_graphics_314,x:254.5,y:128}).wait(1).to({graphics:mask_4_graphics_315,x:254.5,y:131.6}).wait(1).to({graphics:mask_4_graphics_316,x:254.6,y:135.3}).wait(1).to({graphics:mask_4_graphics_317,x:254.6,y:138.9}).wait(1).to({graphics:mask_4_graphics_318,x:254.6,y:142.4}).wait(1).to({graphics:mask_4_graphics_319,x:254.6,y:145.9}).wait(1).to({graphics:mask_4_graphics_320,x:254.6,y:149.4}).wait(1).to({graphics:mask_4_graphics_321,x:254.6,y:152.8}).wait(1).to({graphics:mask_4_graphics_322,x:254.6,y:156.2}).wait(1).to({graphics:mask_4_graphics_323,x:254.6,y:159.5}).wait(1).to({graphics:mask_4_graphics_324,x:254.5,y:162.7}).wait(1).to({graphics:mask_4_graphics_325,x:254.5,y:165.8}).wait(1).to({graphics:mask_4_graphics_326,x:254.4,y:168.9}).wait(1).to({graphics:mask_4_graphics_327,x:254.4,y:171.9}).wait(1).to({graphics:mask_4_graphics_328,x:254.3,y:174.7}).wait(1).to({graphics:mask_4_graphics_329,x:254.3,y:177.6}).wait(337));

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(20,1,1).p("Au0lUQJ2oNJ1A3QJ1A3AJKEQAIJbrFFE");
	this.shape_6.setTransform(354.2,198.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(20,1,1).p("Au0mmQJ2oOJ1A3QJ1A3AJKEQAIKCsjFGQsjFFgqoI");
	this.shape_7.setTransform(354.2,206.8);

	var maskedShapeInstanceList = [this.shape_6,this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6}]},240).to({state:[{t:this.shape_7}]},57).wait(369));

	// Layer 12
	this.instance_3 = new lib.ar2("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(95.3,357.3,1,1,0,0,0,0.8,-0.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(110).to({_off:false},0).wait(556));

	// mask (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_110 = new cjs.Graphics().p("AlsIwIAAkFIdrAAIAAEFg");
	var mask_5_graphics_111 = new cjs.Graphics().p("Au1CRIAAkhIdrAAIAAEhg");
	var mask_5_graphics_112 = new cjs.Graphics().p("Au1CeIAAk7IdrAAIAAE7g");
	var mask_5_graphics_113 = new cjs.Graphics().p("Au1CsIAAlXIdrAAIAAFXg");
	var mask_5_graphics_114 = new cjs.Graphics().p("Au1C6IAAlzIdrAAIAAFzg");
	var mask_5_graphics_115 = new cjs.Graphics().p("Au1DHIAAmNIdrAAIAAGNg");
	var mask_5_graphics_116 = new cjs.Graphics().p("Au1DVIAAmpIdrAAIAAGpg");
	var mask_5_graphics_117 = new cjs.Graphics().p("Au1DjIAAnFIdrAAIAAHFg");
	var mask_5_graphics_118 = new cjs.Graphics().p("Au1DwIAAnfIdrAAIAAHfg");
	var mask_5_graphics_119 = new cjs.Graphics().p("Au1D+IAAn7IdrAAIAAH7g");
	var mask_5_graphics_120 = new cjs.Graphics().p("Au1EMIAAoXIdrAAIAAIXg");
	var mask_5_graphics_121 = new cjs.Graphics().p("Au1EZIAAoxIdrAAIAAIxg");
	var mask_5_graphics_122 = new cjs.Graphics().p("Au1EnIAApNIdrAAIAAJNg");
	var mask_5_graphics_123 = new cjs.Graphics().p("Au1E0IAApnIdrAAIAAJng");
	var mask_5_graphics_124 = new cjs.Graphics().p("Au1FCIAAqDIdrAAIAAKDg");
	var mask_5_graphics_125 = new cjs.Graphics().p("Au1FQIAAqfIdrAAIAAKfg");
	var mask_5_graphics_126 = new cjs.Graphics().p("Au1FdIAAq5IdrAAIAAK5g");
	var mask_5_graphics_127 = new cjs.Graphics().p("Au1FrIAArVIdrAAIAALVg");
	var mask_5_graphics_128 = new cjs.Graphics().p("Au1F5IAArxIdrAAIAALxg");
	var mask_5_graphics_129 = new cjs.Graphics().p("Au1GGIAAsLIdrAAIAAMLg");
	var mask_5_graphics_130 = new cjs.Graphics().p("Au1GUIAAsnIdrAAIAAMng");
	var mask_5_graphics_131 = new cjs.Graphics().p("Au1GiIAAtDIdrAAIAANDg");
	var mask_5_graphics_132 = new cjs.Graphics().p("Au1GvIAAtdIdrAAIAANdg");
	var mask_5_graphics_133 = new cjs.Graphics().p("Au1G9IAAt5IdrAAIAAN5g");
	var mask_5_graphics_134 = new cjs.Graphics().p("Au1HLIAAuVIdrAAIAAOVg");
	var mask_5_graphics_135 = new cjs.Graphics().p("Au1HYIAAuvIdrAAIAAOvg");
	var mask_5_graphics_136 = new cjs.Graphics().p("Au1HmIAAvLIdrAAIAAPLg");
	var mask_5_graphics_137 = new cjs.Graphics().p("Au1HzIAAvmIdrAAIAAPmg");
	var mask_5_graphics_138 = new cjs.Graphics().p("Au1IBIAAwBIdrAAIAAQBg");
	var mask_5_graphics_139 = new cjs.Graphics().p("Au1IPIAAwdIdrAAIAAQdg");
	var mask_5_graphics_140 = new cjs.Graphics().p("Au1IcIAAw4IdrAAIAAQ4g");
	var mask_5_graphics_141 = new cjs.Graphics().p("Au1IqIAAxTIdrAAIAARTg");
	var mask_5_graphics_142 = new cjs.Graphics().p("Au1I4IAAxvIdrAAIAARvg");
	var mask_5_graphics_143 = new cjs.Graphics().p("Au1JFIAAyJIdrAAIAASJg");
	var mask_5_graphics_144 = new cjs.Graphics().p("Au1JTIAAylIdrAAIAASlg");
	var mask_5_graphics_145 = new cjs.Graphics().p("Au1JhIAAzBIdrAAIAATBg");
	var mask_5_graphics_146 = new cjs.Graphics().p("Au1JuIAAzbIdrAAIAATbg");
	var mask_5_graphics_147 = new cjs.Graphics().p("Au1J8IAAz3IdrAAIAAT3g");
	var mask_5_graphics_148 = new cjs.Graphics().p("Au1KKIAA0TIdrAAIAAUTg");
	var mask_5_graphics_149 = new cjs.Graphics().p("Au1KXIAA0tIdrAAIAAUtg");
	var mask_5_graphics_150 = new cjs.Graphics().p("Au1KlIAA1JIdrAAIAAVJg");
	var mask_5_graphics_151 = new cjs.Graphics().p("Au1KzIAA1lIdrAAIAAVlg");
	var mask_5_graphics_152 = new cjs.Graphics().p("Au1LAIAA1/IdrAAIAAV/g");
	var mask_5_graphics_153 = new cjs.Graphics().p("Au1LOIAA2bIdrAAIAAWbg");
	var mask_5_graphics_154 = new cjs.Graphics().p("Au1LcIAA23IdrAAIAAW3g");
	var mask_5_graphics_155 = new cjs.Graphics().p("Au1LpIAA3RIdrAAIAAXRg");
	var mask_5_graphics_156 = new cjs.Graphics().p("Au1L3IAA3tIdrAAIAAXtg");
	var mask_5_graphics_157 = new cjs.Graphics().p("Au1MEIAA4HIdrAAIAAYHg");
	var mask_5_graphics_158 = new cjs.Graphics().p("Au1MSIAA4jIdrAAIAAYjg");
	var mask_5_graphics_159 = new cjs.Graphics().p("Au1MgIAA4/IdrAAIAAY/g");
	var mask_5_graphics_160 = new cjs.Graphics().p("Au1MtIAA5ZIdrAAIAAZZg");
	var mask_5_graphics_161 = new cjs.Graphics().p("Au1M7IAA51IdrAAIAAZ1g");
	var mask_5_graphics_162 = new cjs.Graphics().p("Au1NJIAA6RIdrAAIAAaRg");
	var mask_5_graphics_163 = new cjs.Graphics().p("Au1NWIAA6rIdrAAIAAarg");
	var mask_5_graphics_164 = new cjs.Graphics().p("Au1NkIAA7HIdrAAIAAbHg");
	var mask_5_graphics_165 = new cjs.Graphics().p("Au1NyIAA7jIdrAAIAAbjg");
	var mask_5_graphics_166 = new cjs.Graphics().p("Au1N/IAA79IdrAAIAAb9g");
	var mask_5_graphics_167 = new cjs.Graphics().p("Au1ONIAA8ZIdrAAIAAcZg");
	var mask_5_graphics_168 = new cjs.Graphics().p("Au1ObIAA81IdrAAIAAc1g");
	var mask_5_graphics_169 = new cjs.Graphics().p("Au1OoIAA9PIdrAAIAAdPg");
	var mask_5_graphics_170 = new cjs.Graphics().p("AlsVkIAA9rIdrAAIAAdrg");
	var mask_5_graphics_171 = new cjs.Graphics().p("Au1PEIAA+GIdrAAIAAeGg");
	var mask_5_graphics_172 = new cjs.Graphics().p("Au1PRIAA+hIdrAAIAAehg");
	var mask_5_graphics_173 = new cjs.Graphics().p("Au1PfIAA+8IdrAAIAAe8g");
	var mask_5_graphics_174 = new cjs.Graphics().p("Au1PsIAA/XIdrAAIAAfXg");
	var mask_5_graphics_175 = new cjs.Graphics().p("Au1P6IAA/yIdrAAIAAfyg");
	var mask_5_graphics_176 = new cjs.Graphics().p("Au1QHMAAAggNIdrAAMAAAAgNg");
	var mask_5_graphics_177 = new cjs.Graphics().p("Au1QVMAAAggoIdrAAMAAAAgog");
	var mask_5_graphics_178 = new cjs.Graphics().p("Au1QiMAAAghDIdrAAMAAAAhDg");
	var mask_5_graphics_179 = new cjs.Graphics().p("Au1QvMAAAghdIdrAAMAAAAhdg");
	var mask_5_graphics_180 = new cjs.Graphics().p("Au1Q9MAAAgh5IdrAAMAAAAh5g");
	var mask_5_graphics_181 = new cjs.Graphics().p("Au1RKMAAAgiTIdrAAMAAAAiTg");
	var mask_5_graphics_182 = new cjs.Graphics().p("Au1RYMAAAgivIdrAAMAAAAivg");
	var mask_5_graphics_183 = new cjs.Graphics().p("Au1RlMAAAgjJIdrAAMAAAAjJg");
	var mask_5_graphics_184 = new cjs.Graphics().p("Au1RzMAAAgjlIdrAAMAAAAjlg");
	var mask_5_graphics_185 = new cjs.Graphics().p("Au1SAMAAAgj/IdrAAMAAAAj/g");
	var mask_5_graphics_186 = new cjs.Graphics().p("Au1SNMAAAgkaIdrAAMAAAAkag");
	var mask_5_graphics_187 = new cjs.Graphics().p("Au1SbMAAAgk1IdrAAMAAAAk1g");
	var mask_5_graphics_188 = new cjs.Graphics().p("Au1SoMAAAglQIdrAAMAAAAlQg");
	var mask_5_graphics_189 = new cjs.Graphics().p("Au1S2MAAAglrIdrAAMAAAAlrg");
	var mask_5_graphics_190 = new cjs.Graphics().p("Au1TDMAAAgmGIdrAAMAAAAmGg");
	var mask_5_graphics_191 = new cjs.Graphics().p("Au1TRMAAAgmhIdrAAMAAAAmhg");
	var mask_5_graphics_192 = new cjs.Graphics().p("Au1TeMAAAgm8IdrAAMAAAAm8g");
	var mask_5_graphics_193 = new cjs.Graphics().p("Au1TsMAAAgnXIdrAAMAAAAnXg");
	var mask_5_graphics_194 = new cjs.Graphics().p("Au1T5MAAAgnxIdrAAMAAAAnxg");
	var mask_5_graphics_195 = new cjs.Graphics().p("Au1UHMAAAgoNIdrAAMAAAAoNg");
	var mask_5_graphics_196 = new cjs.Graphics().p("Au1UUMAAAgonIdrAAMAAAAong");
	var mask_5_graphics_197 = new cjs.Graphics().p("Au1UiMAAAgpDIdrAAMAAAApDg");
	var mask_5_graphics_198 = new cjs.Graphics().p("Au1UvMAAAgpdIdrAAMAAAApdg");
	var mask_5_graphics_199 = new cjs.Graphics().p("Au1U9MAAAgp5IdrAAMAAAAp5g");
	var mask_5_graphics_200 = new cjs.Graphics().p("Au1VKMAAAgqTIdrAAMAAAAqTg");
	var mask_5_graphics_201 = new cjs.Graphics().p("Au1VZMAAAgqxIdrAAMAAAAqxg");
	var mask_5_graphics_202 = new cjs.Graphics().p("Au1VnMAAAgrNIdrAAMAAAArNg");
	var mask_5_graphics_203 = new cjs.Graphics().p("Au1V2MAAAgrrIdrAAMAAAArrg");
	var mask_5_graphics_204 = new cjs.Graphics().p("Au1WEMAAAgsHIdrAAMAAAAsHg");
	var mask_5_graphics_205 = new cjs.Graphics().p("Au1WTMAAAgslIdrAAMAAAAslg");
	var mask_5_graphics_206 = new cjs.Graphics().p("Au1WhMAAAgtBIdrAAMAAAAtBg");
	var mask_5_graphics_207 = new cjs.Graphics().p("Au1WvMAAAgtdIdrAAMAAAAtdg");
	var mask_5_graphics_208 = new cjs.Graphics().p("Au1W+MAAAgt7IdrAAMAAAAt7g");
	var mask_5_graphics_209 = new cjs.Graphics().p("Au1XNMAAAguYIdrAAMAAAAuYg");
	var mask_5_graphics_210 = new cjs.Graphics().p("Au1XbMAAAgu1IdrAAMAAAAu1g");
	var mask_5_graphics_211 = new cjs.Graphics().p("Au1XpMAAAgvRIdrAAMAAAAvRg");
	var mask_5_graphics_212 = new cjs.Graphics().p("Au1X4MAAAgvvIdrAAMAAAAvvg");
	var mask_5_graphics_213 = new cjs.Graphics().p("Au1YGMAAAgwLIdrAAMAAAAwLg");
	var mask_5_graphics_214 = new cjs.Graphics().p("Au1YVMAAAgwpIdrAAMAAAAwpg");
	var mask_5_graphics_215 = new cjs.Graphics().p("Au1YkMAAAgxGIdrAAMAAAAxGg");
	var mask_5_graphics_216 = new cjs.Graphics().p("Au1YyMAAAgxjIdrAAMAAAAxjg");
	var mask_5_graphics_217 = new cjs.Graphics().p("Au1ZAMAAAgx/IdrAAMAAAAx/g");
	var mask_5_graphics_218 = new cjs.Graphics().p("Au1ZPMAAAgydIdrAAMAAAAydg");
	var mask_5_graphics_219 = new cjs.Graphics().p("Au1ZdMAAAgy5IdrAAMAAAAy5g");
	var mask_5_graphics_220 = new cjs.Graphics().p("Au1ZsMAAAgzXIdrAAMAAAAzXg");
	var mask_5_graphics_221 = new cjs.Graphics().p("Au1Z6MAAAgzzIdrAAMAAAAzzg");
	var mask_5_graphics_222 = new cjs.Graphics().p("Au1aJMAAAg0RIdrAAMAAAA0Rg");
	var mask_5_graphics_223 = new cjs.Graphics().p("Au1aXMAAAg0tIdrAAMAAAA0tg");
	var mask_5_graphics_224 = new cjs.Graphics().p("Au1amMAAAg1LIdrAAMAAAA1Lg");
	var mask_5_graphics_225 = new cjs.Graphics().p("Au1a0MAAAg1nIdrAAMAAAA1ng");
	var mask_5_graphics_226 = new cjs.Graphics().p("Au1bCMAAAg2DIdrAAMAAAA2Dg");
	var mask_5_graphics_227 = new cjs.Graphics().p("Au1bRMAAAg2hIdrAAMAAAA2hg");
	var mask_5_graphics_228 = new cjs.Graphics().p("Au1bgMAAAg2+IdrAAMAAAA2+g");
	var mask_5_graphics_229 = new cjs.Graphics().p("Au1buMAAAg3bIdrAAMAAAA3bg");
	var mask_5_graphics_230 = new cjs.Graphics().p("EgFsAirMAAAg34IdrAAMAAAA34g");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(110).to({graphics:mask_5_graphics_110,x:153.5,y:56}).wait(1).to({graphics:mask_5_graphics_111,x:212.1,y:100.4}).wait(1).to({graphics:mask_5_graphics_112,x:212.1,y:101.7}).wait(1).to({graphics:mask_5_graphics_113,x:212.1,y:103.1}).wait(1).to({graphics:mask_5_graphics_114,x:212.1,y:104.5}).wait(1).to({graphics:mask_5_graphics_115,x:212.1,y:105.8}).wait(1).to({graphics:mask_5_graphics_116,x:212.1,y:107.2}).wait(1).to({graphics:mask_5_graphics_117,x:212.1,y:108.6}).wait(1).to({graphics:mask_5_graphics_118,x:212.1,y:109.9}).wait(1).to({graphics:mask_5_graphics_119,x:212.1,y:111.3}).wait(1).to({graphics:mask_5_graphics_120,x:212.1,y:112.7}).wait(1).to({graphics:mask_5_graphics_121,x:212.1,y:114}).wait(1).to({graphics:mask_5_graphics_122,x:212.1,y:115.4}).wait(1).to({graphics:mask_5_graphics_123,x:212.1,y:116.7}).wait(1).to({graphics:mask_5_graphics_124,x:212.1,y:118.1}).wait(1).to({graphics:mask_5_graphics_125,x:212.1,y:119.5}).wait(1).to({graphics:mask_5_graphics_126,x:212.1,y:120.9}).wait(1).to({graphics:mask_5_graphics_127,x:212.1,y:122.2}).wait(1).to({graphics:mask_5_graphics_128,x:212.1,y:123.6}).wait(1).to({graphics:mask_5_graphics_129,x:212.1,y:125}).wait(1).to({graphics:mask_5_graphics_130,x:212.1,y:126.3}).wait(1).to({graphics:mask_5_graphics_131,x:212.1,y:127.7}).wait(1).to({graphics:mask_5_graphics_132,x:212.1,y:129.1}).wait(1).to({graphics:mask_5_graphics_133,x:212.1,y:130.4}).wait(1).to({graphics:mask_5_graphics_134,x:212.1,y:131.8}).wait(1).to({graphics:mask_5_graphics_135,x:212.1,y:133.2}).wait(1).to({graphics:mask_5_graphics_136,x:212.1,y:134.5}).wait(1).to({graphics:mask_5_graphics_137,x:212.1,y:135.9}).wait(1).to({graphics:mask_5_graphics_138,x:212.1,y:137.3}).wait(1).to({graphics:mask_5_graphics_139,x:212.1,y:138.6}).wait(1).to({graphics:mask_5_graphics_140,x:212.1,y:140}).wait(1).to({graphics:mask_5_graphics_141,x:212.1,y:141.4}).wait(1).to({graphics:mask_5_graphics_142,x:212.1,y:142.7}).wait(1).to({graphics:mask_5_graphics_143,x:212.1,y:144.1}).wait(1).to({graphics:mask_5_graphics_144,x:212.1,y:145.5}).wait(1).to({graphics:mask_5_graphics_145,x:212.1,y:146.8}).wait(1).to({graphics:mask_5_graphics_146,x:212.1,y:148.2}).wait(1).to({graphics:mask_5_graphics_147,x:212.1,y:149.6}).wait(1).to({graphics:mask_5_graphics_148,x:212.1,y:150.9}).wait(1).to({graphics:mask_5_graphics_149,x:212.1,y:152.3}).wait(1).to({graphics:mask_5_graphics_150,x:212.1,y:153.7}).wait(1).to({graphics:mask_5_graphics_151,x:212.1,y:155}).wait(1).to({graphics:mask_5_graphics_152,x:212.1,y:156.4}).wait(1).to({graphics:mask_5_graphics_153,x:212.1,y:157.8}).wait(1).to({graphics:mask_5_graphics_154,x:212.1,y:159.1}).wait(1).to({graphics:mask_5_graphics_155,x:212.1,y:160.5}).wait(1).to({graphics:mask_5_graphics_156,x:212.1,y:161.9}).wait(1).to({graphics:mask_5_graphics_157,x:212.1,y:163.3}).wait(1).to({graphics:mask_5_graphics_158,x:212.1,y:164.6}).wait(1).to({graphics:mask_5_graphics_159,x:212.1,y:166}).wait(1).to({graphics:mask_5_graphics_160,x:212.1,y:167.3}).wait(1).to({graphics:mask_5_graphics_161,x:212.1,y:168.7}).wait(1).to({graphics:mask_5_graphics_162,x:212.1,y:170.1}).wait(1).to({graphics:mask_5_graphics_163,x:212.1,y:171.4}).wait(1).to({graphics:mask_5_graphics_164,x:212.1,y:172.8}).wait(1).to({graphics:mask_5_graphics_165,x:212.1,y:174.2}).wait(1).to({graphics:mask_5_graphics_166,x:212.1,y:175.5}).wait(1).to({graphics:mask_5_graphics_167,x:212.1,y:176.9}).wait(1).to({graphics:mask_5_graphics_168,x:212.1,y:178.3}).wait(1).to({graphics:mask_5_graphics_169,x:212.1,y:179.6}).wait(1).to({graphics:mask_5_graphics_170,x:153.5,y:138}).wait(1).to({graphics:mask_5_graphics_171,x:212.1,y:182.4}).wait(1).to({graphics:mask_5_graphics_172,x:212.1,y:183.7}).wait(1).to({graphics:mask_5_graphics_173,x:212.1,y:185.1}).wait(1).to({graphics:mask_5_graphics_174,x:212.1,y:186.4}).wait(1).to({graphics:mask_5_graphics_175,x:212.1,y:187.8}).wait(1).to({graphics:mask_5_graphics_176,x:212.1,y:189.1}).wait(1).to({graphics:mask_5_graphics_177,x:212.1,y:190.5}).wait(1).to({graphics:mask_5_graphics_178,x:212.1,y:191.8}).wait(1).to({graphics:mask_5_graphics_179,x:212.1,y:193.2}).wait(1).to({graphics:mask_5_graphics_180,x:212.1,y:194.5}).wait(1).to({graphics:mask_5_graphics_181,x:212.1,y:195.9}).wait(1).to({graphics:mask_5_graphics_182,x:212.1,y:197.2}).wait(1).to({graphics:mask_5_graphics_183,x:212.1,y:198.6}).wait(1).to({graphics:mask_5_graphics_184,x:212.1,y:199.9}).wait(1).to({graphics:mask_5_graphics_185,x:212.1,y:201.3}).wait(1).to({graphics:mask_5_graphics_186,x:212.1,y:202.6}).wait(1).to({graphics:mask_5_graphics_187,x:212.1,y:204}).wait(1).to({graphics:mask_5_graphics_188,x:212.1,y:205.3}).wait(1).to({graphics:mask_5_graphics_189,x:212.1,y:206.7}).wait(1).to({graphics:mask_5_graphics_190,x:212.1,y:208}).wait(1).to({graphics:mask_5_graphics_191,x:212.1,y:209.4}).wait(1).to({graphics:mask_5_graphics_192,x:212.1,y:210.7}).wait(1).to({graphics:mask_5_graphics_193,x:212.1,y:212.1}).wait(1).to({graphics:mask_5_graphics_194,x:212.1,y:213.4}).wait(1).to({graphics:mask_5_graphics_195,x:212.1,y:214.8}).wait(1).to({graphics:mask_5_graphics_196,x:212.1,y:216.1}).wait(1).to({graphics:mask_5_graphics_197,x:212.1,y:217.5}).wait(1).to({graphics:mask_5_graphics_198,x:212.1,y:218.8}).wait(1).to({graphics:mask_5_graphics_199,x:212.1,y:220.2}).wait(1).to({graphics:mask_5_graphics_200,x:212.1,y:221.5}).wait(1).to({graphics:mask_5_graphics_201,x:212.1,y:223}).wait(1).to({graphics:mask_5_graphics_202,x:212.1,y:224.4}).wait(1).to({graphics:mask_5_graphics_203,x:212.1,y:225.9}).wait(1).to({graphics:mask_5_graphics_204,x:212.1,y:227.3}).wait(1).to({graphics:mask_5_graphics_205,x:212.1,y:228.8}).wait(1).to({graphics:mask_5_graphics_206,x:212.1,y:230.2}).wait(1).to({graphics:mask_5_graphics_207,x:212.1,y:231.7}).wait(1).to({graphics:mask_5_graphics_208,x:212.1,y:233.1}).wait(1).to({graphics:mask_5_graphics_209,x:212.1,y:234.6}).wait(1).to({graphics:mask_5_graphics_210,x:212.1,y:236}).wait(1).to({graphics:mask_5_graphics_211,x:212.1,y:237.5}).wait(1).to({graphics:mask_5_graphics_212,x:212.1,y:238.9}).wait(1).to({graphics:mask_5_graphics_213,x:212.1,y:240.4}).wait(1).to({graphics:mask_5_graphics_214,x:212.1,y:241.8}).wait(1).to({graphics:mask_5_graphics_215,x:212.1,y:243.3}).wait(1).to({graphics:mask_5_graphics_216,x:212.1,y:244.7}).wait(1).to({graphics:mask_5_graphics_217,x:212.1,y:246.1}).wait(1).to({graphics:mask_5_graphics_218,x:212.1,y:247.6}).wait(1).to({graphics:mask_5_graphics_219,x:212.1,y:249}).wait(1).to({graphics:mask_5_graphics_220,x:212.1,y:250.5}).wait(1).to({graphics:mask_5_graphics_221,x:212.1,y:251.9}).wait(1).to({graphics:mask_5_graphics_222,x:212.1,y:253.4}).wait(1).to({graphics:mask_5_graphics_223,x:212.1,y:254.8}).wait(1).to({graphics:mask_5_graphics_224,x:212.1,y:256.3}).wait(1).to({graphics:mask_5_graphics_225,x:212.1,y:257.7}).wait(1).to({graphics:mask_5_graphics_226,x:212.1,y:259.2}).wait(1).to({graphics:mask_5_graphics_227,x:212.1,y:260.6}).wait(1).to({graphics:mask_5_graphics_228,x:212.1,y:262.1}).wait(1).to({graphics:mask_5_graphics_229,x:212.1,y:263.5}).wait(1).to({graphics:mask_5_graphics_230,x:153.5,y:221.9}).wait(436));

	// Layer 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(20,1,1).p("AMR5EMgYhAyJ");
	this.shape_8.setTransform(206.6,272.5);
	this.shape_8._off = true;

	var maskedShapeInstanceList = [this.shape_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(110).to({_off:false},0).wait(556));

	// Layer 11
	this.instance_4 = new lib.ar1("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(129.5,153.7,1,1,0,0,0,-0.8,0.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).wait(657));

	// Layer 2
	this.instance_5 = new lib._1("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(191.6,194);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({_off:false},0).wait(657));

	// Letter
	this.instance_6 = new lib.Symbol1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(275,275);
	this.instance_6.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(666));

	// Background
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_9.setTransform(275,275,3.373,2.543);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_10.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9}]}).wait(666));

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