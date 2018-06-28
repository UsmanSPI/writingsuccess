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


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ASgMcIAAwsQAAiVirhdQishdk1AoQk2Ang3EZIAAQPQAACXioAAQirAAAAiXIAAwPQABl6nDAAQjTAAiqBhQi3BrAACVIAAQoQAACXiqAAQilAAAAiTIAA4wQAAiaCrAAQCMAAATCJQD+iJFEAAQGUAADQDhQDPjhGiAAQFiAAEECoQEcDBAAE3IAAQhQAACcinAAQirAAAAiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152.2,-94.2,304.4,188.6);


(lib.mask2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 26 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_115 = new cjs.Graphics().p("ARwS2IAAiuIEjAAIAACug");
	var mask_graphics_116 = new cjs.Graphics().p("AiRBmIAAjLIEjAAIAADLg");
	var mask_graphics_117 = new cjs.Graphics().p("AiRB2IAAjqIEjAAIAADqg");
	var mask_graphics_118 = new cjs.Graphics().p("AiQCFIAAkJIEhAAIAAEJg");
	var mask_graphics_119 = new cjs.Graphics().p("AiQCUIAAknIEhAAIAAEng");
	var mask_graphics_120 = new cjs.Graphics().p("AiQCkIAAlHIEhAAIAAFHg");
	var mask_graphics_121 = new cjs.Graphics().p("AiPCzIAAllIEgAAIAAFlg");
	var mask_graphics_122 = new cjs.Graphics().p("AiPDDIAAmEIEfAAIAAGEg");
	var mask_graphics_123 = new cjs.Graphics().p("AiPDSIAAmjIEfAAIAAGjg");
	var mask_graphics_124 = new cjs.Graphics().p("AiPDhIAAnBIEfAAIAAHBg");
	var mask_graphics_125 = new cjs.Graphics().p("AiODwIAAnfIEeAAIAAHfg");
	var mask_graphics_126 = new cjs.Graphics().p("AiOEAIAAn/IEdAAIAAH/g");
	var mask_graphics_127 = new cjs.Graphics().p("AiOEPIAAodIEdAAIAAIdg");
	var mask_graphics_128 = new cjs.Graphics().p("AiOEfIAAo9IEdAAIAAI9g");
	var mask_graphics_129 = new cjs.Graphics().p("AiOEuIAApbIEdAAIAAJbg");
	var mask_graphics_130 = new cjs.Graphics().p("AiNE9IAAp5IEbAAIAAJ5g");
	var mask_graphics_131 = new cjs.Graphics().p("AiNFNIAAqZIEbAAIAAKZg");
	var mask_graphics_132 = new cjs.Graphics().p("AiNFcIAAq3IEbAAIAAK3g");
	var mask_graphics_133 = new cjs.Graphics().p("AiNFrIAArVIEbAAIAALVg");
	var mask_graphics_134 = new cjs.Graphics().p("AiMF7IAAr1IEZAAIAAL1g");
	var mask_graphics_135 = new cjs.Graphics().p("AiMGKIAAsTIEZAAIAAMTg");
	var mask_graphics_136 = new cjs.Graphics().p("AiMGZIAAsyIEZAAIAAMyg");
	var mask_graphics_137 = new cjs.Graphics().p("AiLGpIAAtRIEYAAIAANRg");
	var mask_graphics_138 = new cjs.Graphics().p("AiLG4IAAtvIEXAAIAANvg");
	var mask_graphics_139 = new cjs.Graphics().p("AiLHHIAAuOIEXAAIAAOOg");
	var mask_graphics_140 = new cjs.Graphics().p("AiLHXIAAutIEXAAIAAOtg");
	var mask_graphics_141 = new cjs.Graphics().p("AiKHmIAAvLIEWAAIAAPLg");
	var mask_graphics_142 = new cjs.Graphics().p("AiKH2IAAvrIEVAAIAAPrg");
	var mask_graphics_143 = new cjs.Graphics().p("AiKIFIAAwJIEVAAIAAQJg");
	var mask_graphics_144 = new cjs.Graphics().p("AiKIVIAAwpIEVAAIAAQpg");
	var mask_graphics_145 = new cjs.Graphics().p("AiJIkIAAxHIEUAAIAARHg");
	var mask_graphics_146 = new cjs.Graphics().p("AiJIzIAAxlIETAAIAARlg");
	var mask_graphics_147 = new cjs.Graphics().p("AiJJDIAAyFIETAAIAASFg");
	var mask_graphics_148 = new cjs.Graphics().p("AiJJSIAAyjIETAAIAASjg");
	var mask_graphics_149 = new cjs.Graphics().p("AiJJhIAAzBIETAAIAATBg");
	var mask_graphics_150 = new cjs.Graphics().p("AiIJxIAAzhIERAAIAAThg");
	var mask_graphics_151 = new cjs.Graphics().p("AiIKAIAAz/IERAAIAAT/g");
	var mask_graphics_152 = new cjs.Graphics().p("AiIKQIAA0fIERAAIAAUfg");
	var mask_graphics_153 = new cjs.Graphics().p("AiHKfIAA09IEQAAIAAU9g");
	var mask_graphics_154 = new cjs.Graphics().p("AiHKuIAA1bIEPAAIAAVbg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(115).to({graphics:mask_graphics_115,x:142.8,y:120.6}).wait(1).to({graphics:mask_graphics_116,x:271,y:234}).wait(1).to({graphics:mask_graphics_117,x:271,y:235.6}).wait(1).to({graphics:mask_graphics_118,x:271.1,y:237.1}).wait(1).to({graphics:mask_graphics_119,x:271.1,y:238.6}).wait(1).to({graphics:mask_graphics_120,x:271.2,y:240.2}).wait(1).to({graphics:mask_graphics_121,x:271.2,y:241.7}).wait(1).to({graphics:mask_graphics_122,x:271.3,y:243.3}).wait(1).to({graphics:mask_graphics_123,x:271.4,y:244.8}).wait(1).to({graphics:mask_graphics_124,x:271.4,y:246.3}).wait(1).to({graphics:mask_graphics_125,x:271.5,y:247.9}).wait(1).to({graphics:mask_graphics_126,x:271.5,y:249.4}).wait(1).to({graphics:mask_graphics_127,x:271.6,y:250.9}).wait(1).to({graphics:mask_graphics_128,x:271.6,y:252.5}).wait(1).to({graphics:mask_graphics_129,x:271.7,y:254}).wait(1).to({graphics:mask_graphics_130,x:271.7,y:255.6}).wait(1).to({graphics:mask_graphics_131,x:271.8,y:257.1}).wait(1).to({graphics:mask_graphics_132,x:271.8,y:258.6}).wait(1).to({graphics:mask_graphics_133,x:271.9,y:260.2}).wait(1).to({graphics:mask_graphics_134,x:271.9,y:261.7}).wait(1).to({graphics:mask_graphics_135,x:272,y:263.3}).wait(1).to({graphics:mask_graphics_136,x:272,y:264.8}).wait(1).to({graphics:mask_graphics_137,x:272.1,y:266.3}).wait(1).to({graphics:mask_graphics_138,x:272.1,y:267.9}).wait(1).to({graphics:mask_graphics_139,x:272.2,y:269.4}).wait(1).to({graphics:mask_graphics_140,x:272.2,y:271}).wait(1).to({graphics:mask_graphics_141,x:272.3,y:272.5}).wait(1).to({graphics:mask_graphics_142,x:272.3,y:274}).wait(1).to({graphics:mask_graphics_143,x:272.4,y:275.6}).wait(1).to({graphics:mask_graphics_144,x:272.4,y:277.1}).wait(1).to({graphics:mask_graphics_145,x:272.5,y:278.6}).wait(1).to({graphics:mask_graphics_146,x:272.5,y:280.2}).wait(1).to({graphics:mask_graphics_147,x:272.6,y:281.7}).wait(1).to({graphics:mask_graphics_148,x:272.7,y:283.3}).wait(1).to({graphics:mask_graphics_149,x:272.7,y:284.8}).wait(1).to({graphics:mask_graphics_150,x:272.8,y:286.3}).wait(1).to({graphics:mask_graphics_151,x:272.8,y:287.9}).wait(1).to({graphics:mask_graphics_152,x:272.9,y:289.4}).wait(1).to({graphics:mask_graphics_153,x:272.9,y:291}).wait(1).to({graphics:mask_graphics_154,x:273,y:292.5}).wait(1));

	// Layer 25
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(25,1,1).p("AqjL7IAAw8QBXlWGqhLQGphLDQCfQDECUAJEHIAAPk");
	this.shape.setTransform(205.4,272.7);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(115).to({_off:false},0).wait(40));

	// Layer 24 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_44 = new cjs.Graphics().p("Am1W7QlrlrAAoBMAmrAAAQAAIBlqFrQlsFqoAAAQoAAAlqlqg");
	var mask_1_graphics_45 = new cjs.Graphics().p("AF/cjQn/gWlal6Qlbl7AXoAMAmoABuQgXIAl5FbQlkFEnYAAIg/gCg");
	var mask_1_graphics_46 = new cjs.Graphics().p("AFKcgQn+gulImIQlKmKAun+MAmgADaQgtH/mJFJQlaEhm0AAQg8AAg+gFg");
	var mask_1_graphics_47 = new cjs.Graphics().p("AEXcZQn8hEk2mWQk4mYBEn8MAmUAFHQhEH8mWE4QlQD/mSAAQhXAAhbgMg");
	var mask_1_graphics_48 = new cjs.Graphics().p("ADlcQQn4haklmkQklmlBan5MAmEAG0QhaH5mkElQlDDglyAAQhyAAh3gWg");
	var mask_1_graphics_49 = new cjs.Graphics().p("AC1cFQn0hwkRmxQkTmyBxn0MAluAIgQhxH0mxESQkzDClVAAQiMAAiRghg");
	var mask_1_graphics_50 = new cjs.Graphics().p("ACGb4QnuiHj+m8Qj/m+CGnuMAlUAKJQiGHvm9D/QkjCmk5AAQilAAirgug");
	var mask_1_graphics_51 = new cjs.Graphics().p("ABZboQnnicjrnHQjrnJCdnoMAk0ALzQicHonHDrQkSCNkdAAQi+AAjEg/g");
	var mask_1_graphics_52 = new cjs.Graphics().p("AAvbWQnhiyjWnRQjWnSCxnhMAkRANaQixHhnSDXQj+B1kDAAQjXAAjahRg");
	var mask_1_graphics_53 = new cjs.Graphics().p("AAGbCQnYjHjBnaQjCnbDHnZMAjoAPAQjGHZnbDCQjqBfjpAAQjxAAjvhlg");
	var mask_1_graphics_54 = new cjs.Graphics().p("AggasQnQjcisniQisnkDbnPMAi8AQkQjbHPnjCtQjUBMjQAAQkKAAkDh7g");
	var mask_1_graphics_55 = new cjs.Graphics().p("AhFaTQnFjwiXnpQiXnrDwnFMAiLASGQjwHFnqCYQi8A6i4AAQkkAAkWiUg");
	var mask_1_graphics_56 = new cjs.Graphics().p("AhnZ5Qm7kEiAnvQiCnxEEm5MAhWATkQkEG6nwCCQikAqieAAQlBAAkmitg");
	var mask_1_graphics_57 = new cjs.Graphics().p("AiHZcQmvkXhrn0Qhrn3EXmtMAgcAVCQkXGun1BsQiKAdiFAAQldAAk2jKg");
	var mask_1_graphics_58 = new cjs.Graphics().p("AilY+QmikqhVn5QhUn6EpmhIffWdQkqGhn5BVQhvAThrAAQl8AAlEjog");
	var mask_1_graphics_59 = new cjs.Graphics().p("AjBYdQmUk8g+n8Qg+n9E7mTIedX0Qk7GUn9A/QhTAJhQAAQmcAAlRkIg");
	var mask_1_graphics_60 = new cjs.Graphics().p("AjaX7QmGlOgnn+QgooAFNmEIdYZJQlNGFn/AoQg1AEg0AAQm/AAlckqg");
	var mask_1_graphics_61 = new cjs.Graphics().p("AjwXXQl3lfgRoAQgRoBFel1IcPaaQleF3oBARIgsABQnlAAlklOg");
	var mask_1_graphics_62 = new cjs.Graphics().p("AJiclQoBgHllluQlnluAGoAQAFoCFvllIbCbpQlqFhn3AAIgOAAg");
	var mask_1_graphics_63 = new cjs.Graphics().p("AI/cjQoAgdlVl+QlWl+Acn/QAdoBF+lVIZyc0QliE8nQAAQgmAAgmgCg");
	var mask_1_graphics_64 = new cjs.Graphics().p("AIdcfQn+g0lEmNQlEmNAyn9QAzn+GNlEIYfd6QlYEZmsAAQhDAAhEgGg");
	var mask_1_graphics_65 = new cjs.Graphics().p("AH8cYQn7hLkymaQkzmbBKn7QBJn7GbkyIXIe+QlMD4mLAAQhdAAhigOg");
	var mask_1_graphics_66 = new cjs.Graphics().p("AHdcOQn3hhkgmnQkhmoBgn3QBgn3GnkhIVwf+Qk/DZlrAAQh4AAh9gYg");
	var mask_1_graphics_67 = new cjs.Graphics().p("AG+cDQnyh4kNmzQkOm1B2nyQB3nyGzkOMAUUAg6QkwC7lOAAQiSAAiXgjg");
	var mask_1_graphics_68 = new cjs.Graphics().p("AGhb1QntiNj5nAQj6nACMnsQCMntG+j6MAS2AhxQkfCgkyAAQirAAiwgxg");
	var mask_1_graphics_69 = new cjs.Graphics().p("AGEbkQnliijmnKQjlnLChnmQCinmHJjlMARVAikQkNCHkXAAQjEAAjJhDg");
	var mask_1_graphics_70 = new cjs.Graphics().p("AFpbSQndi4jRnUQjSnUC3neQC3nfHTjRMAPzAjTQj6Bwj+AAQjcAAjghVg");
	var mask_1_graphics_71 = new cjs.Graphics().p("AFQa9QnVjNi8ncQi9ndDMnWQDMnWHci8MAONAj9QjlBbjkAAQj2AAj0hqg");
	var mask_1_graphics_72 = new cjs.Graphics().p("AE4amQnMjhinnkQinnlDhnNQDhnMHjinMAMnAkjQjPBIjLAAQkQAAkIiBg");
	var mask_1_graphics_73 = new cjs.Graphics().p("AEhaNQnBj1iRnrQiSnsD1nBQD0nDHriSMAK/AlFQi4A2iyAAQkqAAkbiZg");
	var mask_1_graphics_74 = new cjs.Graphics().p("AEMZyQm2kJh7nxQh8nyEIm1QEIm4Hyh8MAJUAliQieAniZAAQlGAAksi0g");
	var mask_1_graphics_75 = new cjs.Graphics().p("AD5ZVQmqkchln2Qhmn3EbmpQEbmsH3hlMAHpAl5QiEAbh/AAQlkAAk6jRg");
	var mask_1_graphics_76 = new cjs.Graphics().p("ADnY3QmdkwhPn6QhPn7EumcQEtmfH7hPMAF9AmNQhpARhlAAQmCAAlIjvg");
	var mask_1_graphics_77 = new cjs.Graphics().p("ADWYWQmPlCg4n9Qg5n9E/mPQFBmRH9g5MAERAmcQhMAIhKAAQmjAAlVkPg");
	var mask_1_graphics_78 = new cjs.Graphics().p("ADHXzQmAlTgin/QgioAFQmAQFSmCIAgiMACkAmlQgvADguAAQnGAAlfkyg");
	var mask_1_graphics_79 = new cjs.Graphics().p("AC6XOQlxlkgLn/QgLoBFhlxQFjlzIAgLMAA3AmpIggABQnsAAlolXg");
	var mask_1_graphics_80 = new cjs.Graphics().p("ACUWnQlhlzALoAQALoBFxlhQFzljIBAMMgA3AmqQoAgMljlyg");
	var mask_1_graphics_81 = new cjs.Graphics().p("ABTWAQlQmDAin+QAin/GAlSQGDlSH/AiMgCkAmlQn/gilTmBg");
	var mask_1_graphics_82 = new cjs.Graphics().p("AAVVZQk/mSA5n9QA4n8GPlAQGRlBH9A5MgERAmbQn9g5lBmPg");
	var mask_1_graphics_83 = new cjs.Graphics().p("AgnUxQktmfBPn6QBPn6GckuQGfkvH6BPMgF9AmNQn7hPkumdg");
	var mask_1_graphics_84 = new cjs.Graphics().p("AhhUJQkbmsBmn2QBln2GpkbQGskcH2BlMgHpAl6Qn3hmkbmqg");
	var mask_1_graphics_85 = new cjs.Graphics().p("AiZTgQkIm4B8nxQB7nxG2kIQG4kJHxB8MgJUAliQnyh8kIm3g");
	var mask_1_graphics_86 = new cjs.Graphics().p("AjOS4Qj0nDCRnrQCRnrHBj1QHDj1HsCSMgK/AlEQnriRj0nCg");
	var mask_1_graphics_87 = new cjs.Graphics().p("AkCSQQjfnOCmnkQCnnkHMjgQHNjhHlCnMgMnAkjQnjinjinMg");
	var mask_1_graphics_88 = new cjs.Graphics().p("AkyRnQjLnXC8ncQC8ncHVjMQHXjMHcC8MgONAj+Qnci9jMnWg");
	var mask_1_graphics_89 = new cjs.Graphics().p("AlgQ/Qi2nfDRnUQDRnTHdi3QHgi3HUDRMgPzAjTQnSjRi4nfg");
	var mask_1_graphics_90 = new cjs.Graphics().p("AmLQXQihnnDlnKQDmnJHliiQHniiHKDmMgRVAikQnJjliinng");
	var mask_1_graphics_91 = new cjs.Graphics().p("Am0PwQiLnuD6m/QD6m/HriMQHuiMHAD5MgS2AhxQm/j5iNntg");
	var mask_1_graphics_92 = new cjs.Graphics().p("AnZPJQh1n0ENm0QENmzHyh2QHzh2G0ENMgUUAg5QmzkNh3nyg");
	var mask_1_graphics_93 = new cjs.Graphics().p("An7OiQhfn4EgmoQEgmnH2hgQH4hfGoEgI1wf+Qmnkhhgn3g");
	var mask_1_graphics_94 = new cjs.Graphics().p("AobN8QhIn8EymZQEymbH7hKQH8hJGaEyI3Ie/QmbkzhKn7g");
	var mask_1_graphics_95 = new cjs.Graphics().p("Ao3NWQgyn+FEmMQFEmNH+gyQH+gzGNFEI4fd7QmMlFg0n+g");
	var mask_1_graphics_96 = new cjs.Graphics().p("ApQMxQgboAFVl8QFVl/H/gcQIBgcF+FWI5yczQl+lWgdoAg");
	var mask_1_graphics_97 = new cjs.Graphics().p("ApmMNQgFoBFmltQFmluIAgGQIBgGFvFnI7CboQlvlmgGoBg");
	var mask_1_graphics_98 = new cjs.Graphics().p("Ap4LqQASoBF1lcQF2lfIAARQIBARFeF2I8PabQlel2ARoBg");
	var mask_1_graphics_99 = new cjs.Graphics().p("AqILIQApoAGFlLQGFlOH+AoQIAAnFNGFI9XZJQlOmFAnn/g");
	var mask_1_graphics_100 = new cjs.Graphics().p("AqUKnQBAn+GTk6QGTk8H8A+QH+A+E8GTI+dX1Qk8mUA9n8g");
	var mask_1_graphics_101 = new cjs.Graphics().p("AqcKGQBWn6GhkoQGgkqH5BVQH6BVEqGgI/fWdQkpmhBUn6g");
	var mask_1_graphics_102 = new cjs.Graphics().p("AqhJnQBsn1GtkWQGukXH1BrQH2BrEWGtMggcAVDQkXmuBrn2g");
	var mask_1_graphics_103 = new cjs.Graphics().p("AqjJJQCCnwG6kCQG5kEHvCBQHxCBEEG5MghWATlQkDm6CAnwg");
	var mask_1_graphics_104 = new cjs.Graphics().p("AqhIsQCYnqHEjuQHEjwHqCWQHqCYDwHEMgiLASFQjwnFCXnqg");
	var mask_1_graphics_105 = new cjs.Graphics().p("AqcIRQCtnjHPjaQHOjcHiCsQHkCtDbHOMgi8AQkQjbnPCsnjg");
	var mask_1_graphics_106 = new cjs.Graphics().p("AqUH3QDDnbHXjGQHYjHHaDCQHcDBDHHYMgjpAPAQjHnYDBnbg");
	var mask_1_graphics_107 = new cjs.Graphics().p("AqIHeQDXnSHfiwQHiiyHRDWQHSDWCyHgMgkRANaQiyngDWnSg");
	var mask_1_graphics_108 = new cjs.Graphics().p("Ap5HGQDsnGHmicQHpidHHDrQHIDqCdHoMgk1ALzQicnpDqnIg");
	var mask_1_graphics_109 = new cjs.Graphics().p("ApnGxQEAm8HtiGQHviHG8D+QG+D+CGHvMglTAKJQiHnuD+m9g");
	var mask_1_graphics_110 = new cjs.Graphics().p("ApRGcQETmwHzhwQH0hxGxERQGxETBxH0MgluAIfQhxn0ESmyg");
	var mask_1_graphics_111 = new cjs.Graphics().p("Ao4GJQEmmjH3haQH5haGkEjQGlEmBaH4MgmDAG0Qhbn5Elmlg");
	var mask_1_graphics_112 = new cjs.Graphics().p("AocF4QE4mWH7hEQH8hDGXE1QGYE4BEH8MgmVAFIQhEn8E3mYg");
	var mask_1_graphics_113 = new cjs.Graphics().p("An9FpQFKmIH9gtQH/guGJFIQGJFJAuH/MgmhADbQgun/FJmJg");
	var mask_1_graphics_114 = new cjs.Graphics().p("AnbFbQFbl5H/gXQIAgWF6FYQF7FbAWIAMgmoABtQgWoAFZl6g");
	var mask_1_graphics_115 = new cjs.Graphics().p("AsfS6QAAoAFqlsQFrlpH/ABQIBgBFqFpQFrFsAAIAg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_1_graphics_44,x:167.5,y:182.9}).wait(1).to({graphics:mask_1_graphics_45,x:167.4,y:182.9}).wait(1).to({graphics:mask_1_graphics_46,x:167.2,y:182.9}).wait(1).to({graphics:mask_1_graphics_47,x:166.9,y:182.9}).wait(1).to({graphics:mask_1_graphics_48,x:166.5,y:183}).wait(1).to({graphics:mask_1_graphics_49,x:166,y:183}).wait(1).to({graphics:mask_1_graphics_50,x:165.3,y:183}).wait(1).to({graphics:mask_1_graphics_51,x:164.5,y:183.1}).wait(1).to({graphics:mask_1_graphics_52,x:163.6,y:183.1}).wait(1).to({graphics:mask_1_graphics_53,x:162.6,y:183.1}).wait(1).to({graphics:mask_1_graphics_54,x:161.5,y:183.1}).wait(1).to({graphics:mask_1_graphics_55,x:160.3,y:183.1}).wait(1).to({graphics:mask_1_graphics_56,x:159,y:183}).wait(1).to({graphics:mask_1_graphics_57,x:157.5,y:183}).wait(1).to({graphics:mask_1_graphics_58,x:156,y:183}).wait(1).to({graphics:mask_1_graphics_59,x:154.3,y:182.9}).wait(1).to({graphics:mask_1_graphics_60,x:152.6,y:182.9}).wait(1).to({graphics:mask_1_graphics_61,x:150.8,y:182.9}).wait(1).to({graphics:mask_1_graphics_62,x:148.9,y:182.9}).wait(1).to({graphics:mask_1_graphics_63,x:146.9,y:182.9}).wait(1).to({graphics:mask_1_graphics_64,x:144.8,y:182.9}).wait(1).to({graphics:mask_1_graphics_65,x:142.6,y:183}).wait(1).to({graphics:mask_1_graphics_66,x:140.4,y:183}).wait(1).to({graphics:mask_1_graphics_67,x:138.1,y:183}).wait(1).to({graphics:mask_1_graphics_68,x:135.7,y:183}).wait(1).to({graphics:mask_1_graphics_69,x:133.3,y:183.1}).wait(1).to({graphics:mask_1_graphics_70,x:130.9,y:183.1}).wait(1).to({graphics:mask_1_graphics_71,x:128.3,y:183.1}).wait(1).to({graphics:mask_1_graphics_72,x:125.8,y:183.1}).wait(1).to({graphics:mask_1_graphics_73,x:123.2,y:183}).wait(1).to({graphics:mask_1_graphics_74,x:120.5,y:183}).wait(1).to({graphics:mask_1_graphics_75,x:117.8,y:183}).wait(1).to({graphics:mask_1_graphics_76,x:115.1,y:183}).wait(1).to({graphics:mask_1_graphics_77,x:112.4,y:182.9}).wait(1).to({graphics:mask_1_graphics_78,x:109.7,y:182.9}).wait(1).to({graphics:mask_1_graphics_79,x:107,y:182.9}).wait(1).to({graphics:mask_1_graphics_80,x:107,y:182.9}).wait(1).to({graphics:mask_1_graphics_81,x:109.7,y:182.7}).wait(1).to({graphics:mask_1_graphics_82,x:112.4,y:182.5}).wait(1).to({graphics:mask_1_graphics_83,x:115.1,y:182.1}).wait(1).to({graphics:mask_1_graphics_84,x:117.8,y:181.7}).wait(1).to({graphics:mask_1_graphics_85,x:120.5,y:181.1}).wait(1).to({graphics:mask_1_graphics_86,x:123.2,y:180.3}).wait(1).to({graphics:mask_1_graphics_87,x:125.8,y:179.5}).wait(1).to({graphics:mask_1_graphics_88,x:128.3,y:178.6}).wait(1).to({graphics:mask_1_graphics_89,x:130.9,y:177.5}).wait(1).to({graphics:mask_1_graphics_90,x:133.3,y:176.3}).wait(1).to({graphics:mask_1_graphics_91,x:135.8,y:175}).wait(1).to({graphics:mask_1_graphics_92,x:138.1,y:173.6}).wait(1).to({graphics:mask_1_graphics_93,x:140.4,y:172.2}).wait(1).to({graphics:mask_1_graphics_94,x:142.6,y:170.6}).wait(1).to({graphics:mask_1_graphics_95,x:144.8,y:168.9}).wait(1).to({graphics:mask_1_graphics_96,x:146.9,y:167.1}).wait(1).to({graphics:mask_1_graphics_97,x:148.9,y:165.2}).wait(1).to({graphics:mask_1_graphics_98,x:150.8,y:163.3}).wait(1).to({graphics:mask_1_graphics_99,x:152.6,y:161.2}).wait(1).to({graphics:mask_1_graphics_100,x:154.4,y:159.1}).wait(1).to({graphics:mask_1_graphics_101,x:156,y:156.9}).wait(1).to({graphics:mask_1_graphics_102,x:157.5,y:154.7}).wait(1).to({graphics:mask_1_graphics_103,x:159,y:152.3}).wait(1).to({graphics:mask_1_graphics_104,x:160.3,y:149.9}).wait(1).to({graphics:mask_1_graphics_105,x:161.5,y:147.5}).wait(1).to({graphics:mask_1_graphics_106,x:162.7,y:145}).wait(1).to({graphics:mask_1_graphics_107,x:163.7,y:142.4}).wait(1).to({graphics:mask_1_graphics_108,x:164.6,y:139.9}).wait(1).to({graphics:mask_1_graphics_109,x:165.3,y:137.2}).wait(1).to({graphics:mask_1_graphics_110,x:166,y:134.6}).wait(1).to({graphics:mask_1_graphics_111,x:166.5,y:131.9}).wait(1).to({graphics:mask_1_graphics_112,x:167,y:129.2}).wait(1).to({graphics:mask_1_graphics_113,x:167.3,y:126.5}).wait(1).to({graphics:mask_1_graphics_114,x:167.4,y:123.7}).wait(1).to({graphics:mask_1_graphics_115,x:167.5,y:121}).wait(40));

	// Layer 23
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(25,1,1).p("AqML7IAAw8QBXlWGqhLQGphLDQCfQBeBHAzBjQAIAOAGAQ");
	this.shape_1.setTransform(203.1,272.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(25,1,1).p("AqjL7IAAw8QBXlWGqhLQGphLDQCfQDECUAJEH");
	this.shape_2.setTransform(205.4,272.7);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},44).to({state:[{t:this.shape_2}]},15).wait(96));

	// Layer 22 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("AHTeXIAAitIElAAIAACtg");
	var mask_2_graphics_1 = new cjs.Graphics().p("AiRBkIAAjGIEjAAIAADGg");
	var mask_2_graphics_2 = new cjs.Graphics().p("AiRBwIAAjfIEjAAIAADfg");
	var mask_2_graphics_3 = new cjs.Graphics().p("AiRB9IAAj5IEjAAIAAD5g");
	var mask_2_graphics_4 = new cjs.Graphics().p("AiRCKIAAkTIEjAAIAAETg");
	var mask_2_graphics_5 = new cjs.Graphics().p("AiRCXIAAktIEjAAIAAEtg");
	var mask_2_graphics_6 = new cjs.Graphics().p("AiRCjIAAlFIEjAAIAAFFg");
	var mask_2_graphics_7 = new cjs.Graphics().p("AiRCwIAAlfIEjAAIAAFfg");
	var mask_2_graphics_8 = new cjs.Graphics().p("AiRC8IAAl4IEjAAIAAF4g");
	var mask_2_graphics_9 = new cjs.Graphics().p("AiRDJIAAmRIEjAAIAAGRg");
	var mask_2_graphics_10 = new cjs.Graphics().p("AiRDWIAAmrIEjAAIAAGrg");
	var mask_2_graphics_11 = new cjs.Graphics().p("AiRDiIAAnDIEjAAIAAHDg");
	var mask_2_graphics_12 = new cjs.Graphics().p("AiRDvIAAndIEjAAIAAHdg");
	var mask_2_graphics_13 = new cjs.Graphics().p("AiRD8IAAn3IEjAAIAAH3g");
	var mask_2_graphics_14 = new cjs.Graphics().p("AiREJIAAoRIEjAAIAAIRg");
	var mask_2_graphics_15 = new cjs.Graphics().p("AiREWIAAorIEjAAIAAIrg");
	var mask_2_graphics_16 = new cjs.Graphics().p("AiREiIAApDIEjAAIAAJDg");
	var mask_2_graphics_17 = new cjs.Graphics().p("AiREvIAApdIEjAAIAAJdg");
	var mask_2_graphics_18 = new cjs.Graphics().p("AiRE7IAAp2IEjAAIAAJ2g");
	var mask_2_graphics_19 = new cjs.Graphics().p("AiRFIIAAqPIEjAAIAAKPg");
	var mask_2_graphics_20 = new cjs.Graphics().p("AiRFVIAAqpIEjAAIAAKpg");
	var mask_2_graphics_21 = new cjs.Graphics().p("AiRFiIAArDIEjAAIAALDg");
	var mask_2_graphics_22 = new cjs.Graphics().p("AiRFuIAArbIEjAAIAALbg");
	var mask_2_graphics_23 = new cjs.Graphics().p("AiRF7IAAr1IEjAAIAAL1g");
	var mask_2_graphics_24 = new cjs.Graphics().p("AiRGIIAAsPIEjAAIAAMPg");
	var mask_2_graphics_25 = new cjs.Graphics().p("AiRGVIAAspIEjAAIAAMpg");
	var mask_2_graphics_26 = new cjs.Graphics().p("AiRGhIAAtBIEjAAIAANBg");
	var mask_2_graphics_27 = new cjs.Graphics().p("AiRGuIAAtbIEjAAIAANbg");
	var mask_2_graphics_28 = new cjs.Graphics().p("AiRG7IAAt1IEjAAIAAN1g");
	var mask_2_graphics_29 = new cjs.Graphics().p("AiRHHIAAuNIEjAAIAAONg");
	var mask_2_graphics_30 = new cjs.Graphics().p("AiRHUIAAunIEjAAIAAOng");
	var mask_2_graphics_31 = new cjs.Graphics().p("AiRHhIAAvBIEjAAIAAPBg");
	var mask_2_graphics_32 = new cjs.Graphics().p("AiRHuIAAvbIEjAAIAAPbg");
	var mask_2_graphics_33 = new cjs.Graphics().p("AiRH7IAAv1IEjAAIAAP1g");
	var mask_2_graphics_34 = new cjs.Graphics().p("AiRIHIAAwNIEjAAIAAQNg");
	var mask_2_graphics_35 = new cjs.Graphics().p("AiRIUIAAwnIEjAAIAAQng");
	var mask_2_graphics_36 = new cjs.Graphics().p("AiRIhIAAxAIEjAAIAARAg");
	var mask_2_graphics_37 = new cjs.Graphics().p("AiRItIAAxZIEjAAIAARZg");
	var mask_2_graphics_38 = new cjs.Graphics().p("AiRI6IAAxzIEjAAIAARzg");
	var mask_2_graphics_39 = new cjs.Graphics().p("AiRJGIAAyLIEjAAIAASLg");
	var mask_2_graphics_40 = new cjs.Graphics().p("AiRJTIAAylIEjAAIAASlg");
	var mask_2_graphics_41 = new cjs.Graphics().p("AiRJgIAAy/IEjAAIAAS/g");
	var mask_2_graphics_42 = new cjs.Graphics().p("AiRJtIAAzZIEjAAIAATZg");
	var mask_2_graphics_43 = new cjs.Graphics().p("AiRJ5IAAzyIEjAAIAATyg");
	var mask_2_graphics_44 = new cjs.Graphics().p("AHWdBIAA0NIEkAAIAAUNg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:76,y:194.3}).wait(1).to({graphics:mask_2_graphics_1,x:137.3,y:378.3}).wait(1).to({graphics:mask_2_graphics_2,x:137.3,y:376.6}).wait(1).to({graphics:mask_2_graphics_3,x:137.4,y:375}).wait(1).to({graphics:mask_2_graphics_4,x:137.4,y:373.3}).wait(1).to({graphics:mask_2_graphics_5,x:137.4,y:371.7}).wait(1).to({graphics:mask_2_graphics_6,x:137.4,y:370}).wait(1).to({graphics:mask_2_graphics_7,x:137.4,y:368.3}).wait(1).to({graphics:mask_2_graphics_8,x:137.4,y:366.7}).wait(1).to({graphics:mask_2_graphics_9,x:137.4,y:365}).wait(1).to({graphics:mask_2_graphics_10,x:137.4,y:363.3}).wait(1).to({graphics:mask_2_graphics_11,x:137.5,y:361.7}).wait(1).to({graphics:mask_2_graphics_12,x:137.5,y:360}).wait(1).to({graphics:mask_2_graphics_13,x:137.5,y:358.3}).wait(1).to({graphics:mask_2_graphics_14,x:137.5,y:356.7}).wait(1).to({graphics:mask_2_graphics_15,x:137.5,y:355}).wait(1).to({graphics:mask_2_graphics_16,x:137.5,y:353.3}).wait(1).to({graphics:mask_2_graphics_17,x:137.5,y:351.7}).wait(1).to({graphics:mask_2_graphics_18,x:137.5,y:350}).wait(1).to({graphics:mask_2_graphics_19,x:137.5,y:348.3}).wait(1).to({graphics:mask_2_graphics_20,x:137.6,y:346.7}).wait(1).to({graphics:mask_2_graphics_21,x:137.6,y:345}).wait(1).to({graphics:mask_2_graphics_22,x:137.6,y:343.4}).wait(1).to({graphics:mask_2_graphics_23,x:137.6,y:341.7}).wait(1).to({graphics:mask_2_graphics_24,x:137.6,y:340}).wait(1).to({graphics:mask_2_graphics_25,x:137.6,y:338.3}).wait(1).to({graphics:mask_2_graphics_26,x:137.6,y:336.7}).wait(1).to({graphics:mask_2_graphics_27,x:137.6,y:335}).wait(1).to({graphics:mask_2_graphics_28,x:137.6,y:333.3}).wait(1).to({graphics:mask_2_graphics_29,x:137.7,y:331.7}).wait(1).to({graphics:mask_2_graphics_30,x:137.7,y:330}).wait(1).to({graphics:mask_2_graphics_31,x:137.7,y:328.4}).wait(1).to({graphics:mask_2_graphics_32,x:137.7,y:326.7}).wait(1).to({graphics:mask_2_graphics_33,x:137.7,y:325}).wait(1).to({graphics:mask_2_graphics_34,x:137.7,y:323.4}).wait(1).to({graphics:mask_2_graphics_35,x:137.7,y:321.7}).wait(1).to({graphics:mask_2_graphics_36,x:137.7,y:320}).wait(1).to({graphics:mask_2_graphics_37,x:137.7,y:318.3}).wait(1).to({graphics:mask_2_graphics_38,x:137.8,y:316.7}).wait(1).to({graphics:mask_2_graphics_39,x:137.8,y:315}).wait(1).to({graphics:mask_2_graphics_40,x:137.8,y:313.4}).wait(1).to({graphics:mask_2_graphics_41,x:137.8,y:311.7}).wait(1).to({graphics:mask_2_graphics_42,x:137.8,y:310}).wait(1).to({graphics:mask_2_graphics_43,x:137.8,y:308.4}).wait(1).to({graphics:mask_2_graphics_44,x:76.2,y:185.7}).wait(111));

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(25,1,1).p("AqjL7IAAw8QBXlWGqhLQGphLDQCfQDECUAJEHIAAPk");
	this.shape_3.setTransform(205.4,272.7);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(155));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


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

	// Layer 3
	this.instance = new lib.triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(94.7,7.8,1,1,122,0,0,0.3,-17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.4,rotation:0,guide:{path:[94.6,7.8,82,0,72.3,-6,62.5,-12,52.4,-17.7,42.6,-23.2,32.6,-28.5,22.6,-33.8,11,-33.4,-0.2,-33.1,-10,-27.7,-20.1,-22.2,-25.1,-11.8,-30.2,-1.4,-30.4,7.5,-30.6,11.7,-30.1,15.2], orient:'auto'}},119).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AnpRgQpuielIomMAphgYuQFIImicJtQifJtomFHQl1DemTAAQjBAAjJgzg");
	var mask_graphics_1 = new cjs.Graphics().p("AnPR4QpyiOlUofMAo7gZsQFVIeiOJxQiQJwoeFUQl/DwmmAAQixAAi4gqg");
	var mask_graphics_2 = new cjs.Graphics().p("Am1SQQp1iAlhoXMAoTgaqQFiIXh/J0QiCJzoVFhQmJEEm6AAQigAAimgig");
	var mask_graphics_3 = new cjs.Graphics().p("AmbSmQp4hxluoOMAnrgbnQFuIOhxJ3QhyJ2oNFuQmSEYnOAAQiPAAiUgbg");
	var mask_graphics_4 = new cjs.Graphics().p("AmCS7Qp6hil6oFMAnAgciQF6IFhhJ5QhjJ5oFF5QmbEtnjAAQh9AAiCgUg");
	var mask_graphics_5 = new cjs.Graphics().p("AloTPQp8hTmHn8MAmUgddQGHH8hTJ8QhUJ6n7GGQmkFDn4AAQhrAAhvgPg");
	var mask_graphics_6 = new cjs.Graphics().p("AlPTiQp+hEmSnzMAlngeWQGSHzhDJ9QhGJ8nyGSQmrFZoOAAQhZAAhcgKg");
	var mask_graphics_7 = new cjs.Graphics().p("Ak2T0Qp/g1menpMAk4gfPQGeHpg0J/Qg3J+noGdQmyFwomAAQhGAAhIgGg");
	var mask_graphics_8 = new cjs.Graphics().p("AkdUEQqBgmmpnfMAkIggFQGpHfglJ/QgnJ/neGpQm5GHo9AAQgzAAg0gDg");
	var mask_graphics_9 = new cjs.Graphics().p("AkFUUQqBgXm1nVMAjXgg8QG1HVgWKAQgYKAnVG0Qm9GgpXAAIg/gBg");
	var mask_graphics_10 = new cjs.Graphics().p("AjtUiQqCgIm/nKMAikghxQHAHKgHKBQgJKAnKG/QnDG5pxAAIgVAAg");
	var mask_graphics_11 = new cjs.Graphics().p("A0hN3MAhwgilQHLHAAIKAQAGKBm/HJQnAHLp+AIIgWAAQp0AAnCm4g");
	var mask_graphics_12 = new cjs.Graphics().p("A0UOcMAg8gjWQHUG0AYKAQAVKAm0HUQm1HWp+AWIg/ABQpZAAm+mfg");
	var mask_graphics_13 = new cjs.Graphics().p("A0GPBMAgFgkIQHfGqAnJ/QAkJ/mpHeQmqHgp9AmQg1ADgzAAQpAAAm3mHg");
	var mask_graphics_14 = new cjs.Graphics().p("Az5PlMAfOgk4QHpGeA2J+QA0J+meHpQmeHpp9A1QhIAGhHAAQonAAmylvg");
	var mask_graphics_15 = new cjs.Graphics().p("AzrQIMAeWglnQHyGSBFJ9QBDJ9mSHyQmSHzp7BEQhdAKhZAAQoRAAmqlYg");
	var mask_graphics_16 = new cjs.Graphics().p("AzdQqMAddgmUQH7GGBUJ7QBSJ7mGH7QmGH9p6BTQhvAOhsAAQn6AAmjlBg");
	var mask_graphics_17 = new cjs.Graphics().p("AzORKMAchgm/QIFF6BjJ5QBhJ4l6IFQl6IFp3BiQiDAUh+AAQnkAAmaksg");
	var mask_graphics_18 = new cjs.Graphics().p("Ay/RqMAbmgnqQINFuByJ2QBwJ2ltINQlvIPp0BwQiWAbiPAAQnPAAmRkXg");
	var mask_graphics_19 = new cjs.Graphics().p("AywSIMAapgoTQIWFiCBJzQB/J0lhIVQliIXpyCAQinAiihAAQm6AAmIkEg");
	var mask_graphics_20 = new cjs.Graphics().p("AyhSmMAZsgo7QIeFVCQJwQCNJwlUIeQlVIfpvCPQi4AqiyAAQmnAAl+jwg");
	var mask_graphics_21 = new cjs.Graphics().p("AySTCMAYugpgQImFHCeJtQCdJtlIIlQlIInpsCdQjJAzjCAAQmUAAl0jdg");
	var mask_graphics_22 = new cjs.Graphics().p("AyCTeMAXugqGQIuE7CtJoQCrJpk6IuQk7IupoCsQjaA9jTAAQmCAAlojLg");
	var mask_graphics_23 = new cjs.Graphics().p("AxyT4MAWugqpQI1EuC7JkQC6JlktI0QkuI2pjC6QjqBIjkAAQlvAAldi6g");
	var mask_graphics_24 = new cjs.Graphics().p("AxiURMAVtgrKQI8EgDKJfQDIJgkgI8QkgI9pfDIQj6BTj0AAQldAAlRipg");
	var mask_graphics_25 = new cjs.Graphics().p("AxSUpMAUsgrqQJCESDZJbQDWJbkSJCQkSJDpbDXQkJBfkFAAQlMAAlEiZg");
	var mask_graphics_26 = new cjs.Graphics().p("AxBVAMATpgsJQJJEEDmJWQDlJXkEJHQkFJKpVDlQkYBskWAAQk6AAk3iKg");
	var mask_graphics_27 = new cjs.Graphics().p("AwwVVMASlgslQJPD2D1JQQDyJSj2JNQj3JQpPDzQkmB5knAAQkpAAkph8g");
	var mask_graphics_28 = new cjs.Graphics().p("AwfVqMARhgtBQJVDoEDJKQEAJMjoJTQjpJVpJEBQk0CIk4AAQkYAAkbhug");
	var mask_graphics_29 = new cjs.Graphics().p("AwOV9MAQdgtaQJaDaEQJEQEPJFjaJYQjbJbpDEPQlBCWlJAAQkIAAkMhhg");
	var mask_graphics_30 = new cjs.Graphics().p("Av9WPMAPagtyQJdDMEeI9QEcI+jLJeQjNJfo8EdQlOCmlaAAQj4AAj9hVg");
	var mask_graphics_31 = new cjs.Graphics().p("AvrWgMAOTguJQJjC+ErI2QEqI4i9JiQi+Jko2EqQlaC3lsAAQjnAAjthKg");
	var mask_graphics_32 = new cjs.Graphics().p("AvZWwMANNgueQJnCvE4IvQE3IxiuJmQiwJoouE4QlmDIl+AAQjWAAjdg/g");
	var mask_graphics_33 = new cjs.Graphics().p("AvIW/MAMHguxQJrCgFGInQFEIpigJrQihJsonFFQlxDZmRAAQjFABjNg1g");
	var mask_graphics_34 = new cjs.Graphics().p("AuyXMMALAgvDQJvCSFSIgQFRIhiRJuQiSJwofFRQl8DtmkAAQi0AAi8gsg");
	var mask_graphics_35 = new cjs.Graphics().p("AuOXYMAJ5gvSQJxCDFgIXQFeIZiDJxQiDJzoXFfQmGD/m3AAQikAAiqgjg");
	var mask_graphics_36 = new cjs.Graphics().p("AtqXjMAIxgvhQJ1B0FsIPQFqIRh0J0Qh0J2oPFrQmPEUnLAAQiSAAiZgcg");
	var mask_graphics_37 = new cjs.Graphics().p("AtFXsMAHogvtQJ3BmF5IGQF2IIhlJ2QhlJ5oGF3QmYEpngAAQiAAAiGgWg");
	var mask_graphics_38 = new cjs.Graphics().p("AshX0MAGggv3QJ6BWGEH9QGDH/hWJ5QhWJ7n9GDQmhE+n1AAQhvAAhzgQg");
	var mask_graphics_39 = new cjs.Graphics().p("Ar8X7MAFXgwAQJ7BHGRH0QGPH1hHJ7QhHJ9n0GPQmpFUoKAAQhdAAhggLg");
	var mask_graphics_40 = new cjs.Graphics().p("ArYYBMAEPgwIQJ9A4GcHrQGbHsg4J8Qg5J+nqGbQmvFroiAAQhKAAhNgHg");
	var mask_graphics_41 = new cjs.Graphics().p("AqzYFMADGgwNQJ+ApGnHgQGmHjgpJ9QgpJ/ngGnQm2GCo6AAQg3AAg4gEg");
	var mask_graphics_42 = new cjs.Graphics().p("AqOYIMAB8gwRQJ/AaGzHWQGxHYgZJ+QgaKBnWGxQm9GbpSAAIhHgCg");
	var mask_graphics_43 = new cjs.Graphics().p("ApqYKMAA0gwTQJ/ALG+HLQG8HOgKJ+QgLKBnMG9QnCGzpsAAIgeAAg");
	var mask_graphics_44 = new cjs.Graphics().p("Apb4JQKAgEHIHBQHHHCAFKAQAEKAnBHHQnCHJp/AEg");
	var mask_graphics_45 = new cjs.Graphics().p("Ap/4IQJ/gTHTG2QHSG4ATJ/QAUJ/m2HSQm4HTp/AUg");
	var mask_graphics_46 = new cjs.Graphics().p("Aqk4FQJ/gjHdGrQHcGtAiJ+QAjJ/mrHcQmsHdp+Ajg");
	var mask_graphics_47 = new cjs.Graphics().p("ArI4CQJ+gxHmGfQHmGiAyJ9QAyJ+mgHmQmhHnp9Ayg");
	var mask_graphics_48 = new cjs.Graphics().p("Art39QJ9hAHwGTQHwGWBAJ9QBBJ8mUHwQmVHxp8BBg");
	var mask_graphics_49 = new cjs.Graphics().p("AsR32QJ7hQH5GIQH5GKBQJ6QBQJ7mIH5QmJH7p6BQg");
	var mask_graphics_50 = new cjs.Graphics().p("As23uQJ5hfIDF8QICF+BfJ4QBfJ5l8ICQl9IDp4Bfg");
	var mask_graphics_51 = new cjs.Graphics().p("Ata3lQJ2huIMFvQILFyBuJ2QBuJ2lwILQlxINp1Bug");
	var mask_graphics_52 = new cjs.Graphics().p("At+3bQJ0h9ITFjQIUFmB9JzQB9JzlkIUQlkIVpzB8g");
	var mask_graphics_53 = new cjs.Graphics().p("Aui3PQJwiMIdFWQIcFZCLJwQCMJwlXIcQlXIdpwCMg");
	var mask_graphics_54 = new cjs.Graphics().p("AvA3DQJtiaIkFKQIkFLCbJtQCaJtlKIjQlKImptCag");
	var mask_graphics_55 = new cjs.Graphics().p("AvS21QJqipIrE9QIsE+CpJpQCpJpk9IsQk9IsppCpg");
	var mask_graphics_56 = new cjs.Graphics().p("Avf2qQJnizIxEzQIxE1CzJlQC0JmkzIxQk0IyplC0g");
	var mask_graphics_57 = new cjs.Graphics().p("Avs2eQJki+I2EpQI2ErC+JjQC/JikqI2QkqI4piC+g");
	var mask_graphics_58 = new cjs.Graphics().p("Av42RQJfjJI8EfQI7EhDJJfQDJJgkgI7QkgI8pfDJg");
	var mask_graphics_59 = new cjs.Graphics().p("AwF2EQJcjUJAEWQJBEXDTJbQDTJckVJAQkXJCpbDTg");
	var mask_graphics_60 = new cjs.Graphics().p("AwS13QJZjdJEELQJGENDdJYQDeJYkMJEQkMJHpYDdg");
	var mask_graphics_61 = new cjs.Graphics().p("Awe1oQJUjoJKEBQJJEDDoJUQDoJUkBJJQkCJLpVDng");
	var mask_graphics_62 = new cjs.Graphics().p("Awr1aQJRjyJND3QJPD5DyJQQDyJQj3JNQj4JPpRDzg");
	var mask_graphics_63 = new cjs.Graphics().p("Aw31KQJMj8JSDsQJSDvD9JLQD8JMjtJSQjtJTpND8g");
	var mask_graphics_64 = new cjs.Graphics().p("AxD06QJHkGJWDiQJXDkEGJHQEHJHjjJWQjjJXpIEHg");
	var mask_graphics_65 = new cjs.Graphics().p("AxP0pQJDkRJZDYQJbDaEQJCQERJEjYJYQjZJcpDEQg");
	var mask_graphics_66 = new cjs.Graphics().p("Axb0YQI+kaJdDNQJeDQEaI9QEbI/jOJcQjOJfo+Eag");
	var mask_graphics_67 = new cjs.Graphics().p("Axn0GQI5kkJhDDQJhDFEkI4QElI6jDJfQjEJjo5Ekg");
	var mask_graphics_68 = new cjs.Graphics().p("AxzzzQI0kuJkC4QJlC6EuI0QEuI0i4JjQi6Jmo0Eug");
	var mask_graphics_69 = new cjs.Graphics().p("Ax+zgQIuk4JnCuQJoCwE4IuQE4IviuJmQivJoouE4g");
	var mask_graphics_70 = new cjs.Graphics().p("AyKzMQIplCJqCjQJrClFBIpQFCIqijJoQikJsopFCg");
	var mask_graphics_71 = new cjs.Graphics().p("AyVy4QIjlLJuCYQJsCbFLIjQFMIkiZJrQiZJuokFMg");
	var mask_graphics_72 = new cjs.Graphics().p("AygyjQIdlUJwCNQJwCQFUIdQFVIeiOJuQiPJxodFUg");
	var mask_graphics_73 = new cjs.Graphics().p("AyryNQIXleJzCCQJxCFFeIXQFeIZiDJwQiEJzoYFeg");
	var mask_graphics_74 = new cjs.Graphics().p("Ay2x3QIRlnJ1B3QJzB6FnIRQFoISh5JzQh5J1oRFng");
	var mask_graphics_75 = new cjs.Graphics().p("AzBxgQILlxJ3BtQJ1BvFwILQFxIMhuJ0QhuJ3oLFxg");
	var mask_graphics_76 = new cjs.Graphics().p("AzMxJQIFl5J4BhQJ4BlF5IEQF5IFhjJ2QhiJ6oFF5g");
	var mask_graphics_77 = new cjs.Graphics().p("AzWwxQH+mCJ6BWQJ5BaGBH9QGDH/hYJ4QhYJ7n+GCg");
	var mask_graphics_78 = new cjs.Graphics().p("AzhwZQH4mLJ7BMQJ6BOGLH3QGLH4hNJ5QhNJ8n3GLg");
	var mask_graphics_79 = new cjs.Graphics().p("AzrwAQHwmUJ9BBQJ8BDGTHwQGUHxhCJ7QhCJ9nwGUg");
	var mask_graphics_80 = new cjs.Graphics().p("Az1vnQHpmcJ+A2QJ9A4GbHpQGcHqg2J8Qg3J+npGcg");
	var mask_graphics_81 = new cjs.Graphics().p("Az/vNQHimkJ+ArQJ+AtGkHiQGlHigsJ9QgsJ/niGkg");
	var mask_graphics_82 = new cjs.Graphics().p("A0JuyQHbmtJ/AgQJ+AiGsHaQGtHcggJ9QghKAnbGsg");
	var mask_graphics_83 = new cjs.Graphics().p("A0TuXQHUm1J/AVQJ/AXG0HTQG1HTgVJ+QgWKAnTG1g");
	var mask_graphics_84 = new cjs.Graphics().p("A0ct7QHLm9KAAJQJ/AMG8HMQG+HMgLJ9QgKKBnMG9g");
	var mask_graphics_85 = new cjs.Graphics().p("A0mtfQHEnFKAgBQJ/AAHEHEQHFHEABJ+QAAKBnEHEg");
	var mask_graphics_86 = new cjs.Graphics().p("A0vtDQG8nMJ/gNQKAgKHLG8QHNG8AMJ+QALKAm7HNg");
	var mask_graphics_87 = new cjs.Graphics().p("A04smQG0nTJ/gYQJ/gVHTGzQHVG0AWJ+QAXKAm0HUg");
	var mask_graphics_88 = new cjs.Graphics().p("A1BsIQGrnbJ/gjQJ+ggHbGrQHcGsAiJ9QAiKAmsHbg");
	var mask_graphics_89 = new cjs.Graphics().p("A1KrqQGjniJ+guQJ+gsHiGjQHjGkAtJ8QAtJ/mkHjg");
	var mask_graphics_90 = new cjs.Graphics().p("A1TrLQGbnqJ9g5QJ9g2HpGaQHrGcA3J7QA4J+mbHqg");
	var mask_graphics_91 = new cjs.Graphics().p("A1cqsQGTnxJ8hEQJ8hBHwGSQHxGTBDJ6QBDJ9mSHxg");
	var mask_graphics_92 = new cjs.Graphics().p("A1kqNQGKn3J6hPQJ7hNH3GKQH5GKBNJ5QBOJ8mKH4g");
	var mask_graphics_93 = new cjs.Graphics().p("A1sptQGBn+J5haQJ5hXH+GAQH/GCBZJ3QBZJ7mBH+g");
	var mask_graphics_94 = new cjs.Graphics().p("A11pMQF5oFJ3hlQJ4hiIEF3QIGF5BkJ2QBjJ4l4IFg");
	var mask_graphics_95 = new cjs.Graphics().p("A18orQFvoMJ1hwQJ2htILFvQIMFvBvJ0QBvJ3lwIMg");
	var mask_graphics_96 = new cjs.Graphics().p("A2EoKQFmoSJ0h6QJzh5ISFmQISFmB5JyQB6J1lmISg");
	var mask_graphics_97 = new cjs.Graphics().p("A2MnpQFdoYJyiFQJxiDIXFcQIZFdCEJwQCFJzldIYg");
	var mask_graphics_98 = new cjs.Graphics().p("A2TnHQFToeJwiQQJviOIdFTQIeFUCPJuQCQJwlUIeg");
	var mask_graphics_99 = new cjs.Graphics().p("A2amkQFKokJsibQJtiZIjFKQIkFKCaJrQCaJulKIjg");
	var mask_graphics_100 = new cjs.Graphics().p("A2il9QE/oqJpinQJqilIpE/QIrE/CmJpQCmJpk/Iqg");
	var mask_graphics_101 = new cjs.Graphics().p("A2qlVQE0owJmi0QJmixIwE0QIxE0CyJmQCzJmk0Iwg");
	var mask_graphics_102 = new cjs.Graphics().p("A2xktQEpo2Jii/QJji+I2EpQI2EpC/JiQC+JjkpI2g");
	var mask_graphics_103 = new cjs.Graphics().p("A24kEQEdo8JfjLQJfjKI7EeQI9EeDKJeQDLJfkeI8g");
	var mask_graphics_104 = new cjs.Graphics().p("A2/jbQESpBJbjYQJajVJCESQJCETDWJaQDXJakTJCg");
	var mask_graphics_105 = new cjs.Graphics().p("A3GixQEHpHJWjkQJYjhJFEHQJIEHDiJWQDjJWkHJIg");
	var mask_graphics_106 = new cjs.Graphics().p("A3MiHQD7pNJSjvQJTjtJLD8QJMD7DuJSQDvJRj8JNg");
	var mask_graphics_107 = new cjs.Graphics().p("A3ShdQDwpRJMj7QJPj5JPDwQJSDwD6JMQD6JNjwJSg");
	var mask_graphics_108 = new cjs.Graphics().p("A3YgyQDkpWJIkHQJJkEJUDkQJXDkEFJIQEGJIjkJWg");
	var mask_graphics_109 = new cjs.Graphics().p("A3dgIQDYpaJDkSQJEkQJYDYQJbDZERJCQERJDjYJag");
	var mask_graphics_110 = new cjs.Graphics().p("A3jAjQDNpeI9kdQI/kcJdDNQJfDMEcI9QEdI9jNJfg");
	var mask_graphics_111 = new cjs.Graphics().p("A3nBOQDAphI4kpQI4knJhDAQJkDBEnI3QEoI4jAJig");
	var mask_graphics_112 = new cjs.Graphics().p("A3sB6QC0pmIykzQIzkyJlC0QJnC0EyIyQEzIyi0Jmg");
	var mask_graphics_113 = new cjs.Graphics().p("A3wCmQCoppIsk/QItk9JoCoQJqCoE+IsQE+IrioJqg");
	var mask_graphics_114 = new cjs.Graphics().p("A30DSQCcpsIllKQInlIJrCcQJuCcFIIlQFKIlicJtg");
	var mask_graphics_115 = new cjs.Graphics().p("A33D+QCPpvIflUQIglTJuCPQJxCQFTIeQFUIfiPJwg");
	var mask_graphics_116 = new cjs.Graphics().p("A37ErQCEpyIXlfQIaleJxCDQJzCEFeIXQFfIYiDJzg");
	var mask_graphics_117 = new cjs.Graphics().p("A3+FYQB3p1IRlpQISlpJ0B3QJ2B3FpIRQFpIRh3J1g");
	var mask_graphics_118 = new cjs.Graphics().p("A4AGFQBqp3IKl0QILlzJ2BrQJ4BqFzIKQF0IJhqJ4g");
	var mask_graphics_119 = new cjs.Graphics().p("A4DGyQBep5IDl+QIDl9J4BeQJ7BeF9ICQF+ICheJ6g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:47,y:70.9}).wait(1).to({graphics:mask_graphics_1,x:47.9,y:69.3}).wait(1).to({graphics:mask_graphics_2,x:48.9,y:67.7}).wait(1).to({graphics:mask_graphics_3,x:49.9,y:66.2}).wait(1).to({graphics:mask_graphics_4,x:50.9,y:64.7}).wait(1).to({graphics:mask_graphics_5,x:52,y:63.2}).wait(1).to({graphics:mask_graphics_6,x:53.1,y:61.7}).wait(1).to({graphics:mask_graphics_7,x:54.3,y:60.3}).wait(1).to({graphics:mask_graphics_8,x:55.5,y:58.9}).wait(1).to({graphics:mask_graphics_9,x:56.7,y:57.5}).wait(1).to({graphics:mask_graphics_10,x:57.9,y:56.2}).wait(1).to({graphics:mask_graphics_11,x:59.2,y:54.9}).wait(1).to({graphics:mask_graphics_12,x:60.6,y:53.7}).wait(1).to({graphics:mask_graphics_13,x:61.9,y:52.4}).wait(1).to({graphics:mask_graphics_14,x:63.3,y:51.3}).wait(1).to({graphics:mask_graphics_15,x:64.8,y:50.1}).wait(1).to({graphics:mask_graphics_16,x:66.2,y:49}).wait(1).to({graphics:mask_graphics_17,x:67.7,y:47.9}).wait(1).to({graphics:mask_graphics_18,x:69.2,y:46.9}).wait(1).to({graphics:mask_graphics_19,x:70.7,y:45.9}).wait(1).to({graphics:mask_graphics_20,x:72.3,y:44.9}).wait(1).to({graphics:mask_graphics_21,x:73.9,y:44}).wait(1).to({graphics:mask_graphics_22,x:75.5,y:43.1}).wait(1).to({graphics:mask_graphics_23,x:77.1,y:42.2}).wait(1).to({graphics:mask_graphics_24,x:78.7,y:41.4}).wait(1).to({graphics:mask_graphics_25,x:80.4,y:40.6}).wait(1).to({graphics:mask_graphics_26,x:82.1,y:39.8}).wait(1).to({graphics:mask_graphics_27,x:83.7,y:39.1}).wait(1).to({graphics:mask_graphics_28,x:85.4,y:38.4}).wait(1).to({graphics:mask_graphics_29,x:87.1,y:37.8}).wait(1).to({graphics:mask_graphics_30,x:88.9,y:37.2}).wait(1).to({graphics:mask_graphics_31,x:90.6,y:36.6}).wait(1).to({graphics:mask_graphics_32,x:92.3,y:36}).wait(1).to({graphics:mask_graphics_33,x:94.1,y:35.5}).wait(1).to({graphics:mask_graphics_34,x:95.5,y:35.1}).wait(1).to({graphics:mask_graphics_35,x:95.4,y:34.7}).wait(1).to({graphics:mask_graphics_36,x:95.4,y:34.3}).wait(1).to({graphics:mask_graphics_37,x:95.4,y:34}).wait(1).to({graphics:mask_graphics_38,x:95.4,y:33.7}).wait(1).to({graphics:mask_graphics_39,x:95.3,y:33.4}).wait(1).to({graphics:mask_graphics_40,x:95.3,y:33.2}).wait(1).to({graphics:mask_graphics_41,x:95.3,y:33.1}).wait(1).to({graphics:mask_graphics_42,x:95.3,y:33}).wait(1).to({graphics:mask_graphics_43,x:95.3,y:32.9}).wait(1).to({graphics:mask_graphics_44,x:95.3,y:32.9}).wait(1).to({graphics:mask_graphics_45,x:95.3,y:32.8}).wait(1).to({graphics:mask_graphics_46,x:95.3,y:32.8}).wait(1).to({graphics:mask_graphics_47,x:95.3,y:32.6}).wait(1).to({graphics:mask_graphics_48,x:95.3,y:32.4}).wait(1).to({graphics:mask_graphics_49,x:95.4,y:32.2}).wait(1).to({graphics:mask_graphics_50,x:95.4,y:31.9}).wait(1).to({graphics:mask_graphics_51,x:95.4,y:31.6}).wait(1).to({graphics:mask_graphics_52,x:95.4,y:31.3}).wait(1).to({graphics:mask_graphics_53,x:95.5,y:30.9}).wait(1).to({graphics:mask_graphics_54,x:94.9,y:30.4}).wait(1).to({graphics:mask_graphics_55,x:93.1,y:30}).wait(1).to({graphics:mask_graphics_56,x:91.8,y:29.6}).wait(1).to({graphics:mask_graphics_57,x:90.5,y:29.2}).wait(1).to({graphics:mask_graphics_58,x:89.3,y:28.8}).wait(1).to({graphics:mask_graphics_59,x:88,y:28.3}).wait(1).to({graphics:mask_graphics_60,x:86.7,y:27.9}).wait(1).to({graphics:mask_graphics_61,x:85.5,y:27.4}).wait(1).to({graphics:mask_graphics_62,x:84.3,y:26.9}).wait(1).to({graphics:mask_graphics_63,x:83,y:26.4}).wait(1).to({graphics:mask_graphics_64,x:81.8,y:25.9}).wait(1).to({graphics:mask_graphics_65,x:80.6,y:25.3}).wait(1).to({graphics:mask_graphics_66,x:79.4,y:24.7}).wait(1).to({graphics:mask_graphics_67,x:78.2,y:24.1}).wait(1).to({graphics:mask_graphics_68,x:77,y:23.5}).wait(1).to({graphics:mask_graphics_69,x:75.8,y:22.9}).wait(1).to({graphics:mask_graphics_70,x:74.6,y:22.3}).wait(1).to({graphics:mask_graphics_71,x:73.5,y:21.6}).wait(1).to({graphics:mask_graphics_72,x:72.3,y:20.9}).wait(1).to({graphics:mask_graphics_73,x:71.2,y:20.2}).wait(1).to({graphics:mask_graphics_74,x:70.1,y:19.5}).wait(1).to({graphics:mask_graphics_75,x:69,y:18.7}).wait(1).to({graphics:mask_graphics_76,x:67.9,y:18}).wait(1).to({graphics:mask_graphics_77,x:66.8,y:17.2}).wait(1).to({graphics:mask_graphics_78,x:65.7,y:16.4}).wait(1).to({graphics:mask_graphics_79,x:64.6,y:15.6}).wait(1).to({graphics:mask_graphics_80,x:63.6,y:14.7}).wait(1).to({graphics:mask_graphics_81,x:62.6,y:13.9}).wait(1).to({graphics:mask_graphics_82,x:61.6,y:13}).wait(1).to({graphics:mask_graphics_83,x:60.6,y:12.1}).wait(1).to({graphics:mask_graphics_84,x:59.6,y:11.2}).wait(1).to({graphics:mask_graphics_85,x:58.7,y:10.3}).wait(1).to({graphics:mask_graphics_86,x:57.7,y:9.3}).wait(1).to({graphics:mask_graphics_87,x:56.8,y:8.3}).wait(1).to({graphics:mask_graphics_88,x:55.9,y:7.3}).wait(1).to({graphics:mask_graphics_89,x:55,y:6.3}).wait(1).to({graphics:mask_graphics_90,x:54.2,y:5.3}).wait(1).to({graphics:mask_graphics_91,x:53.4,y:4.3}).wait(1).to({graphics:mask_graphics_92,x:52.6,y:3.2}).wait(1).to({graphics:mask_graphics_93,x:51.8,y:2.1}).wait(1).to({graphics:mask_graphics_94,x:51,y:1.1}).wait(1).to({graphics:mask_graphics_95,x:50.2,y:0}).wait(1).to({graphics:mask_graphics_96,x:49.5,y:-1.2}).wait(1).to({graphics:mask_graphics_97,x:48.8,y:-2.3}).wait(1).to({graphics:mask_graphics_98,x:48.1,y:-3.4}).wait(1).to({graphics:mask_graphics_99,x:47.3,y:-4.5}).wait(1).to({graphics:mask_graphics_100,x:46.5,y:-5.9}).wait(1).to({graphics:mask_graphics_101,x:45.8,y:-7.2}).wait(1).to({graphics:mask_graphics_102,x:45.1,y:-8.5}).wait(1).to({graphics:mask_graphics_103,x:44.4,y:-9.9}).wait(1).to({graphics:mask_graphics_104,x:43.7,y:-11.3}).wait(1).to({graphics:mask_graphics_105,x:43.1,y:-12.6}).wait(1).to({graphics:mask_graphics_106,x:42.5,y:-14}).wait(1).to({graphics:mask_graphics_107,x:41.9,y:-15.4}).wait(1).to({graphics:mask_graphics_108,x:41.3,y:-16.9}).wait(1).to({graphics:mask_graphics_109,x:40.8,y:-18.3}).wait(1).to({graphics:mask_graphics_110,x:40.3,y:-19.7}).wait(1).to({graphics:mask_graphics_111,x:39.8,y:-21.1}).wait(1).to({graphics:mask_graphics_112,x:39.3,y:-22.6}).wait(1).to({graphics:mask_graphics_113,x:38.9,y:-24}).wait(1).to({graphics:mask_graphics_114,x:38.5,y:-25.5}).wait(1).to({graphics:mask_graphics_115,x:38.1,y:-26.9}).wait(1).to({graphics:mask_graphics_116,x:37.7,y:-28.4}).wait(1).to({graphics:mask_graphics_117,x:37.4,y:-29.9}).wait(1).to({graphics:mask_graphics_118,x:37.1,y:-31.4}).wait(1).to({graphics:mask_graphics_119,x:37,y:-33}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,0,1).p("AJpByQhhg+hhg7Qhig9hlg5Qhig3hkg1Qhkg1h0AEQhwADhiA2QhlA3gyBpQgzBngCBZQgCBZAcBU");
	this.shape.setTransform(30,-5.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-36,134,63.4);


(lib.ar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-10,-226.7,1,1,0,0,0,0.1,-4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-126.7},74,cjs.Ease.get(0.5)).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AAAgXIAAAv");
	this.shape.setTransform(-10,-232.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AAAANIAAgZ");
	this.shape_1.setTransform(-10,-231.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AAAADIAAgF");
	this.shape_2.setTransform(-10,-230.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("AAAgHIAAAP");
	this.shape_3.setTransform(-10,-229.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("AAAgRIAAAj");
	this.shape_4.setTransform(-10,-228.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(5,1,1).p("AAAgbIAAA3");
	this.shape_5.setTransform(-10,-227.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(5,1,1).p("AAAgmIAABN");
	this.shape_6.setTransform(-10,-226.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(5,1,1).p("AAAgwIAABh");
	this.shape_7.setTransform(-10,-225.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(5,1,1).p("AAAg6IAAB1");
	this.shape_8.setTransform(-10,-224.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(5,1,1).p("AAAhEIAACJ");
	this.shape_9.setTransform(-10,-224);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(5,1,1).p("AAAhNIAACb");
	this.shape_10.setTransform(-10,-223.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5,1,1).p("AAAhYIAACw");
	this.shape_11.setTransform(-10,-222.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(5,1,1).p("AAAhhIAADD");
	this.shape_12.setTransform(-10,-221.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(5,1,1).p("AAAhrIAADX");
	this.shape_13.setTransform(-10,-220.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(5,1,1).p("AAAh0IAADp");
	this.shape_14.setTransform(-10,-219.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(5,1,1).p("AAAh9IAAD7");
	this.shape_15.setTransform(-10,-218.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(5,1,1).p("AAAiHIAAEP");
	this.shape_16.setTransform(-10,-217.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(5,1,1).p("AAAiPIAAEg");
	this.shape_17.setTransform(-10,-217.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(5,1,1).p("AAAiZIAAEz");
	this.shape_18.setTransform(-10,-216.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(5,1,1).p("AAAiiIAAFF");
	this.shape_19.setTransform(-10,-215.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(5,1,1).p("AAAirIAAFX");
	this.shape_20.setTransform(-10,-214.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(5,1,1).p("AAAizIAAFn");
	this.shape_21.setTransform(-10,-213.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(5,1,1).p("AAAi8IAAF5");
	this.shape_22.setTransform(-10,-213.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(5,1,1).p("AAAjFIAAGL");
	this.shape_23.setTransform(-10,-212.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(5,1,1).p("AAAjNIAAGb");
	this.shape_24.setTransform(-10,-211.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(5,1,1).p("AAAjVIAAGr");
	this.shape_25.setTransform(-10,-210.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(5,1,1).p("AAAjeIAAG9");
	this.shape_26.setTransform(-10,-210);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(5,1,1).p("AAAjmIAAHN");
	this.shape_27.setTransform(-10,-209.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(5,1,1).p("AAAjuIAAHd");
	this.shape_28.setTransform(-10,-208.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(5,1,1).p("AAAj2IAAHt");
	this.shape_29.setTransform(-10,-207.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(5,1,1).p("AAAj9IAAH8");
	this.shape_30.setTransform(-10,-207.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(5,1,1).p("AAAkFIAAIL");
	this.shape_31.setTransform(-10,-206.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(5,1,1).p("AAAkNIAAIb");
	this.shape_32.setTransform(-10,-205.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(5,1,1).p("AAAkVIAAIr");
	this.shape_33.setTransform(-10,-205);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(5,1,1).p("AAAkcIAAI5");
	this.shape_34.setTransform(-10,-204.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(5,1,1).p("AAAkkIAAJJ");
	this.shape_35.setTransform(-10,-203.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(5,1,1).p("AAAkrIAAJX");
	this.shape_36.setTransform(-10,-203);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(5,1,1).p("AAAkyIAAJl");
	this.shape_37.setTransform(-10,-202.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(5,1,1).p("AAAk5IAAJz");
	this.shape_38.setTransform(-10,-201.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(5,1,1).p("AAAlAIAAKB");
	this.shape_39.setTransform(-10,-201);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(5,1,1).p("AAAlHIAAKP");
	this.shape_40.setTransform(-10,-200.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(5,1,1).p("AAAlOIAAKd");
	this.shape_41.setTransform(-10,-199.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(5,1,1).p("AAAlVIAAKr");
	this.shape_42.setTransform(-10,-199.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(5,1,1).p("AAAlbIAAK3");
	this.shape_43.setTransform(-10,-198.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(5,1,1).p("AAAliIAALF");
	this.shape_44.setTransform(-10,-198);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(5,1,1).p("AAAloIAALR");
	this.shape_45.setTransform(-10,-197.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(5,1,1).p("AAAlvIAALf");
	this.shape_46.setTransform(-10,-196.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(5,1,1).p("AAAl1IAALr");
	this.shape_47.setTransform(-10,-196.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(5,1,1).p("AAAl7IAAL3");
	this.shape_48.setTransform(-10,-195.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(5,1,1).p("AAAmBIAAMD");
	this.shape_49.setTransform(-10,-195.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(5,1,1).p("AAAmHIAAMP");
	this.shape_50.setTransform(-10,-194.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(5,1,1).p("AAAmNIAAMb");
	this.shape_51.setTransform(-10,-194.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(5,1,1).p("AAAmSIAAMm");
	this.shape_52.setTransform(-10,-193.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(5,1,1).p("AAAmYIAAMx");
	this.shape_53.setTransform(-10,-193);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(5,1,1).p("AAAmeIAAM9");
	this.shape_54.setTransform(-10,-192.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(5,1,1).p("AAAmjIAANH");
	this.shape_55.setTransform(-10,-192);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(5,1,1).p("AAAmoIAANS");
	this.shape_56.setTransform(-10,-191.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(5,1,1).p("AAAmuIAANd");
	this.shape_57.setTransform(-10,-191.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(5,1,1).p("AAAmzIAANn");
	this.shape_58.setTransform(-10,-190.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(5,1,1).p("AAAm4IAANx");
	this.shape_59.setTransform(-10,-190.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(5,1,1).p("AAAm9IAAN7");
	this.shape_60.setTransform(-10,-189.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(5,1,1).p("AAAnCIAAOF");
	this.shape_61.setTransform(-10,-189.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(5,1,1).p("AAAnHIAAOP");
	this.shape_62.setTransform(-10,-188.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(5,1,1).p("AAAnLIAAOX");
	this.shape_63.setTransform(-10,-188.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(5,1,1).p("AAAnQIAAOh");
	this.shape_64.setTransform(-10,-187.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(5,1,1).p("AAAnUIAAOq");
	this.shape_65.setTransform(-10,-187.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(5,1,1).p("AAAnZIAAOz");
	this.shape_66.setTransform(-10,-187.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(5,1,1).p("AAAndIAAO7");
	this.shape_67.setTransform(-10,-186.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(5,1,1).p("AAAnhIAAPD");
	this.shape_68.setTransform(-10,-186.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(5,1,1).p("AAAnmIAAPN");
	this.shape_69.setTransform(-10,-186);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(5,1,1).p("AAAnpIAAPT");
	this.shape_70.setTransform(-10,-185.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(5,1,1).p("AAAntIAAPb");
	this.shape_71.setTransform(-10,-185.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(5,1,1).p("AAAnxIAAPj");
	this.shape_72.setTransform(-10,-184.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(5,1,1).p("AAAn1IAAPr");
	this.shape_73.setTransform(-10,-184.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(5,1,1).p("AAAH6IAAvz");
	this.shape_74.setTransform(-10,-184.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.9,-240.1,24.3,21.8);


(lib.honeyflap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.honeybee();
	this.instance.parent = this;
	this.instance.setTransform(23.2,-143.9,0.422,0.422,0,0,0,-36.1,64);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEB9IgNAAIgNgEIgQgFIgLgGIgLgHIgJgGIgIgGIgGgHIgEgHIgFgHIgEgHIgGgHIgEgHIgBgHIgDgHIgBgHIgBgIIgBgIIgCgHIgBgHIACgHIACgIIABgIIACgIIADgIIACgIIAEgIIADgIIAHgJIAHgIIAJgIIAKgKIARgKIARgHIAVgGIABABIAWgBIAMAAIANAEIAQAFIAOAGIAIAGIAJAGIAIAHIAGAGIAGAHIAGAHIAEAHIADAHIAEAHIADAHIABAIIABAHIAEAIIgBAHIABAHIABAHIgCAIIABAIIgBAHIgCAIIgEAIIgBAIIgEAIIgGAIIgHAJIgGAIIgGAJIgPAJIgNAKIgUAIIgWAGIgVAAg");
	this.shape.setTransform(21.9,-144.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-215.3,105.5,83.5);


// stage content:
(lib.writingsuccess_Fontkid_m = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_525 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(525).call(this.frame_525).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(138,199.7,0.998,0.998,0,-8,172,22.4,-144);
	this.instance._off = true;

	this.instance_1 = new lib.honeybee();
	this.instance_1.parent = this;
	this.instance_1.setTransform(406.3,349.1,0.421,0.421,0,-8,172,-36.1,64.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({y:349.7},81).wait(10).to({x:138.6,y:352.9},0).to({regY:-143.9,guide:{path:[138.5,352.8,137.6,296.7,136.7,240.5,137.3,238.1,138.1,235.8]}},44).to({regY:-143.8,scaleX:1,scaleY:1,guide:{path:[138.1,235.9,148.4,205.8,187.3,199.8,213.5,195.8,231.7,200.1]}},45).to({guide:{path:[231.7,200.2,242.6,202.7,250.7,208.3,272.1,223.1,271.9,245.1,271.9,248.3,271.9,251.6]}},30).to({guide:{path:[272,251.5,272.2,281,272.3,310.6]}},20).to({regY:-144,scaleX:1,scaleY:1,guide:{path:[272.3,310.5,272.4,330.2,272.5,349.8]}},21).wait(10).to({x:273.1},0).to({regY:-143.9,scaleX:1,scaleY:1,guide:{path:[273.2,349.8,272.3,293.7,271.3,237.5,280.7,214.7,303.6,205.5]}},59).to({scaleX:1,scaleY:1,guide:{path:[303.7,205.5,314.3,201.3,327.7,199.9,336.9,199,345,198.9]}},20).to({regY:-143.8,scaleX:1,scaleY:1,guide:{path:[344.9,198.9,374.2,198.8,388.5,210.9,405.8,225.3,406.5,240.2]}},35).to({regY:-143.9,guide:{path:[406.5,240.2,406.6,241.2,406.6,242.1,406.7,270.1,406.9,298.2]}},20).to({regX:22.3,regY:-143.8,guide:{path:[406.9,298.2,407,320.4,407.1,342.6]}},13).to({regX:22.4,regY:-144,scaleX:1,scaleY:1,x:407.1,y:352.9},13).to({_off:true},35).wait(61));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(465).to({_off:false},0).to({guide:{path:[407.2,348.8,457.6,441.6,495.4,354,533.1,266.4,666.7,380.3]}},60).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(136,354.3,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},81).wait(10).to({_off:false,x:272.7,y:350.9},0).to({_off:true},160).wait(10).to({_off:false,x:406.7,y:348.9},0).to({_off:true},160).wait(96));

	// Layer 20
	this.instance_2 = new lib.ar1("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(49,488.9,1,1,0,0,0,0.3,30.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(517));

	// Layer 8
	this.instance_3 = new lib.ar2("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(341.2,272.7,1,1,0,-60,120);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(270).to({_off:false},0).wait(256));

	// Layer 27
	this.instance_4 = new lib.ar2("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(206,269.2,1,1,0,-60,120);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(100).to({_off:false},0).wait(426));

	// Layer 21
	this.instance_5 = new lib.mask2("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(134.3,0.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(270).to({_off:false},0).wait(256));

	// Layer 9
	this.instance_6 = new lib.mask2("synched",0,false);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-0.7,0.9);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(100).to({_off:false},0).wait(426));

	// Layer 19
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(25,1,1).p("AAAgTIAAAn");
	this.shape_1.setTransform(138,202.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(25,1,1).p("AAAAdIAAg5");
	this.shape_2.setTransform(138,203);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(25,1,1).p("AAAAmIAAhL");
	this.shape_3.setTransform(138,203.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(25,1,1).p("AAAAvIAAhd");
	this.shape_4.setTransform(138,204.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(25,1,1).p("AAAA4IAAhv");
	this.shape_5.setTransform(137.9,205.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(25,1,1).p("AAABBIAAiB");
	this.shape_6.setTransform(137.9,206.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(25,1,1).p("AAABKIABiT");
	this.shape_7.setTransform(137.9,207.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(25,1,1).p("AAABTIAAil");
	this.shape_8.setTransform(137.9,208.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(25,1,1).p("AAABdIAAi5");
	this.shape_9.setTransform(137.9,209.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(25,1,1).p("AAABmIAAjK");
	this.shape_10.setTransform(137.9,210.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(25,1,1).p("AAABuIAAjc");
	this.shape_11.setTransform(137.9,211.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(25,1,1).p("AAAB3IAAjt");
	this.shape_12.setTransform(137.8,212);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(25,1,1).p("AAACAIAAj/");
	this.shape_13.setTransform(137.8,212.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(25,1,1).p("AAACKIABkT");
	this.shape_14.setTransform(137.8,213.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(25,1,1).p("AAACTIABkl");
	this.shape_15.setTransform(137.8,214.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(25,1,1).p("AAACcIABk3");
	this.shape_16.setTransform(137.8,215.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(25,1,1).p("AAAClIABlJ");
	this.shape_17.setTransform(137.7,216.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(25,1,1).p("AAACuIABlb");
	this.shape_18.setTransform(137.7,217.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(25,1,1).p("AAAC3IABlt");
	this.shape_19.setTransform(137.7,218.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(25,1,1).p("AAADAIABl/");
	this.shape_20.setTransform(137.7,219.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(25,1,1).p("AAADJIABmR");
	this.shape_21.setTransform(137.7,220.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(25,1,1).p("AAADSIABmj");
	this.shape_22.setTransform(137.7,221.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(25,1,1).p("AAADbIABm1");
	this.shape_23.setTransform(137.6,222);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(25,1,1).p("AAADkIABnH");
	this.shape_24.setTransform(137.6,222.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(25,1,1).p("AAADtIABnZ");
	this.shape_25.setTransform(137.6,223.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(25,1,1).p("AAAD2IABnr");
	this.shape_26.setTransform(137.6,224.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(25,1,1).p("AAAD/IABn9");
	this.shape_27.setTransform(137.6,225.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(25,1,1).p("AAAEIIABoP");
	this.shape_28.setTransform(137.5,226.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(25,1,1).p("AAAERIABoh");
	this.shape_29.setTransform(137.5,227.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(25,1,1).p("AgBEbIADo1");
	this.shape_30.setTransform(137.5,228.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(25,1,1).p("AgBEkIADpH");
	this.shape_31.setTransform(137.5,229.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(25,1,1).p("AAAEsIABpX");
	this.shape_32.setTransform(137.5,230.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(25,1,1).p("AAAE1IACpp");
	this.shape_33.setTransform(137.5,231);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(25,1,1).p("AAAE/IACp9");
	this.shape_34.setTransform(137.5,231.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(25,1,1).p("AgBFIIADqP");
	this.shape_35.setTransform(137.4,232.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(25,1,1).p("AgBFRIADqh");
	this.shape_36.setTransform(137.4,233.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(25,1,1).p("AgBFaIADqz");
	this.shape_37.setTransform(137.4,234.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(25,1,1).p("AgBFjIADrF");
	this.shape_38.setTransform(137.4,235.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(25,1,1).p("AgBFsIADrX");
	this.shape_39.setTransform(137.4,236.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(25,1,1).p("AgBF1IADrp");
	this.shape_40.setTransform(137.3,237.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(25,1,1).p("AgBF+IADr7");
	this.shape_41.setTransform(137.3,238.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(25,1,1).p("AgBGHIADsN");
	this.shape_42.setTransform(137.3,239.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(25,1,1).p("AgBGQIADsf");
	this.shape_43.setTransform(137.3,240.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(25,1,1).p("AgBGZIADsx");
	this.shape_44.setTransform(137.3,241);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(25,1,1).p("AgBGiIADtD");
	this.shape_45.setTransform(137.3,241.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(25,1,1).p("AgBGrIADtV");
	this.shape_46.setTransform(137.3,242.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(25,1,1).p("AgBG0IADtn");
	this.shape_47.setTransform(137.2,243.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(25,1,1).p("AgBG9IADt5");
	this.shape_48.setTransform(137.2,244.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(25,1,1).p("AgBHGIADuL");
	this.shape_49.setTransform(137.2,245.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(25,1,1).p("AgBHPIADud");
	this.shape_50.setTransform(137.2,246.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(25,1,1).p("AgCHZIAFux");
	this.shape_51.setTransform(137.2,247.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(25,1,1).p("AgBHiIADvD");
	this.shape_52.setTransform(137.1,248.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(25,1,1).p("AgBHqIADvT");
	this.shape_53.setTransform(137.1,249.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(25,1,1).p("AgCHzIAFvl");
	this.shape_54.setTransform(137.1,250);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(25,1,1).p("AgCH9IAFv5");
	this.shape_55.setTransform(137.1,250.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(25,1,1).p("AgCIGIAFwL");
	this.shape_56.setTransform(137.1,251.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(25,1,1).p("AgCIPIAFwd");
	this.shape_57.setTransform(137.1,252.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(25,1,1).p("AgCIYIAFwv");
	this.shape_58.setTransform(137,253.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(25,1,1).p("AgCIhIAFxB");
	this.shape_59.setTransform(137,254.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(25,1,1).p("AgCIqIAFxT");
	this.shape_60.setTransform(137,255.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(25,1,1).p("AgCIzIAFxl");
	this.shape_61.setTransform(137,256.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(25,1,1).p("AgCI8IAFx3");
	this.shape_62.setTransform(137,257.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(25,1,1).p("AgCJFIAFyJ");
	this.shape_63.setTransform(137,258.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(25,1,1).p("AgCJOIAFyb");
	this.shape_64.setTransform(136.9,259.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(25,1,1).p("AgCJXIAFyt");
	this.shape_65.setTransform(136.9,260);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(25,1,1).p("AgCJgIAFy/");
	this.shape_66.setTransform(136.9,260.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(25,1,1).p("AgCJpIAFzR");
	this.shape_67.setTransform(136.9,261.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(25,1,1).p("AgCJyIAFzj");
	this.shape_68.setTransform(136.9,262.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(25,1,1).p("AgCJ7IAFz1");
	this.shape_69.setTransform(136.9,263.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(25,1,1).p("AgCKEIAF0H");
	this.shape_70.setTransform(136.8,264.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(25,1,1).p("AgCKOIAF0a");
	this.shape_71.setTransform(136.8,265.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(25,1,1).p("AgCKXIAF0t");
	this.shape_72.setTransform(136.8,266.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(25,1,1).p("AgCKfIAF0+");
	this.shape_73.setTransform(136.8,267.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(25,1,1).p("AgCKoIAF1Q");
	this.shape_74.setTransform(136.8,268.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(25,1,1).p("AgCKyIAF1j");
	this.shape_75.setTransform(136.8,269);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(25,1,1).p("AgCK7IAF11");
	this.shape_76.setTransform(136.7,269.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(25,1,1).p("AgCLEIAG2H");
	this.shape_77.setTransform(136.7,270.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(25,1,1).p("AgCLNIAG2Z");
	this.shape_78.setTransform(136.7,271.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(25,1,1).p("AgDLWIAH2r");
	this.shape_79.setTransform(136.7,272.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(25,1,1).p("AgCLfIAF29");
	this.shape_80.setTransform(136.7,273.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(25,1,1).p("AgDLoIAH3P");
	this.shape_81.setTransform(136.6,274.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(25,1,1).p("AAErwIgHXh");
	this.shape_82.setTransform(136.6,275.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},9).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).wait(436));

	// Base
	this.instance_7 = new lib.Symbol2("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(272.3,275);
	this.instance_7.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(526));

	// Background
	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#F59E9E").ss(3,1,1).p("AMvQ5I5dAAMAAAghxIZdAAg");
	this.shape_83.setTransform(275,275,3.373,2.543);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_84.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_84},{t:this.shape_83}]}).wait(526));

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