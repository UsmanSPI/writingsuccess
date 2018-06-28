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
	this.shape.graphics.f("#FFFFFF").s().p("As2LuIAA3kQACi1CZAAQCRAAAeCXQECidFwAAQC3AADHBtQDGBtBSCPQAbAqAAAuQAABEg3AwQg0AwhFAAQhZAAgwhUQgkg/h3hBQh4hBhlAAQoxAAg7FaIAAQiQgECXiPAAQi9AAAAjEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.3,-94.5,164.6,189.1);


(lib.mask2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 24 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_59 = new cjs.Graphics().p("Am1W7QlrlrAAoBMAmrAAAQAAIBlqFrQlsFqoAAAQoAAAlqlqg");
	var mask_graphics_60 = new cjs.Graphics().p("AGGckQn/gUlcl3Qldl5AUoAMAmoABeQgTIBl4FcQllFKndAAIg3gBg");
	var mask_graphics_61 = new cjs.Graphics().p("AFZchQn/gnlNmFQlOmFAnn/MAmjAC8QgnH/mFFPQldEqm+AAQg0AAg1gEg");
	var mask_graphics_62 = new cjs.Graphics().p("AEsccQn9g6k+mRQk/mTA6n9MAmbAEbQg7H9mRFAQlUEMmgAAQhMAAhPgJg");
	var mask_graphics_63 = new cjs.Graphics().p("AEAcWQn6hOkvmdQkvmeBOn7MAmOAF5QhOH6mdEwQlKDxmDAAQhkAAhogQg");
	var mask_graphics_64 = new cjs.Graphics().p("ADWcNQn3hhkfmoQkfmqBhn3MAl+AHWQhiH3moEgQk+DWlpAAQh6AAh/gZg");
	var mask_graphics_65 = new cjs.Graphics().p("ACscDQnyh0kPmzQkPm0B1nzMAlqAIyQh1HzmzEPQkxC9lPAAQiQAAiXgjg");
	var mask_graphics_66 = new cjs.Graphics().p("ACEb3QntiHj+m9Qj+m+CHnuMAlTAKOQiIHum9D+QkiClk3AAQinAAisgvg");
	var mask_graphics_67 = new cjs.Graphics().p("ABebqQnoibjtnGQjtnHCanpMAk4ALpQiaHonGDuQkUCPkgAAQi7AAjBg9g");
	var mask_graphics_68 = new cjs.Graphics().p("AA5bbQniitjbnPQjcnQCtnjMAkaANCQitHjnPDcQkEB6kIAAQjSAAjUhMg");
	var mask_graphics_69 = new cjs.Graphics().p("AAVbKQnbi/jJnXQjKnYC/ncMAj4AOaQi/HcnXDKQjyBnjzAAQjnAAjnhdg");
	var mask_graphics_70 = new cjs.Graphics().p("AgNa3QnUjRi3neQi3ngDRnTMAjTAPxQjRHUnfC4QjfBVjdAAQj9AAj5hwg");
	var mask_graphics_71 = new cjs.Graphics().p("AgtajQnMjjilnkQilnnDjnLMAirARHQjjHLnlCmQjMBFjHAAQkUAAkJiEg");
	var mask_graphics_72 = new cjs.Graphics().p("AhMaOQnDj1iSnqQiTnsD0nDMAiAASbQj0HDnrCSQi4A3iyAAQkqAAkZiZg");
	var mask_graphics_73 = new cjs.Graphics().p("AhqZ3Qm5kGh/nwQiAnxEFm4MAhRATsQkFG5nwCAQiiApicAAQlDAAkoivg");
	var mask_graphics_74 = new cjs.Graphics().p("AiGZeQmvkWhsn0Qhsn2EWmuMAgfAU9QkWGun1BtQiLAeiHAAQlbAAk2jIg");
	var mask_graphics_75 = new cjs.Graphics().p("AigZEQmkkmhZn5QhZn5EmmjIfrWLQkmGkn5BaQh0AUhwAAQl2AAlCjig");
	var mask_graphics_76 = new cjs.Graphics().p("Ai4YoQmZk2hFn7QhGn9E2mXIezXYQk2GYn8BGQhcANhZAAQmRAAlNj+g");
	var mask_graphics_77 = new cjs.Graphics().p("AjOYLQmNlFgyn+Qgyn/FFmLId4YiQlFGMn+AzQhDAGhBAAQmvAAlWkag");
	var mask_graphics_78 = new cjs.Graphics().p("AjjXtQmAlVgen/QgfoAFUl+Ic7ZpQlUF/oAAgQgpACgoAAQnOAAlfk4g");
	var mask_graphics_79 = new cjs.Graphics().p("Aj2XNQlyljgLoAQgMoBFjlxIb7avQliFyoBAMIgcAAQnvAAlnlYg");
	var mask_graphics_80 = new cjs.Graphics().p("AJdclQoAgKlklvQlklxAIoAQAJoBFwlkIa4byQloFdnzAAIgWAAg");
	var mask_graphics_81 = new cjs.Graphics().p("AI/cjQoAgdlUl9QlXl+Acn/QAcoBF+lVIZzcyQlhE9nSAAQglAAgmgCg");
	var mask_graphics_82 = new cjs.Graphics().p("AIicgQn+gxlGmKQlImLAvn+QAwn+GKlHIYsdwQlZEemyAAQg+AAhAgFg");
	var mask_graphics_83 = new cjs.Graphics().p("AIGcaQn9hEk2mWQk5mXBDn8QBDn8GXk4IXierQlQECmUAAQhWAAhZgMg");
	var mask_graphics_84 = new cjs.Graphics().p("AHqcTQn5hYknmiQkpmiBWn5QBXn5GikoIWWfjQlFDml5AAQhtAAhxgTg");
	var mask_graphics_85 = new cjs.Graphics().p("AHPcKQn1hrkXmtQkZmuBqn0QBpn2GtkYMAVIAgYQk4DMlfAAQiDAAiJgcg");
	var mask_graphics_86 = new cjs.Graphics().p("AG1b/Qnwh+kHm3QkIm4B8nxQB9nxG3kHMAT4AhKQkrCzlGAAQiZAAifgng");
	var mask_graphics_87 = new cjs.Graphics().p("AGcbyQnriQj2nBQj3nCCPnsQCQnrHAj3MASnAh6QkdCckuAAQiuAAi1g1g");
	var mask_graphics_88 = new cjs.Graphics().p("AGEbkQnmijjknKQjmnLCinmQCjnmHJjlMARTAilQkNCHkXAAQjEAAjJhDg");
	var mask_graphics_89 = new cjs.Graphics().p("AFtbUQnfi2jTnSQjUnTC0nfQC1ngHSjTMAP9AjOQj8BykAAAQjaAAjchTg");
	var mask_graphics_90 = new cjs.Graphics().p("AFWbDQnXjIjBnaQjCnbDGnYQDHnZHajBMAOnAjzQjrBgjqAAQjvAAjwhkg");
	var mask_graphics_91 = new cjs.Graphics().p("AFBavQnPjZivnhQiwnjDZnQQDZnQHgivMANPAkVQjYBPjUAAQkGAAkBh4g");
	var mask_graphics_92 = new cjs.Graphics().p("AEtabQnHjsicnnQidnoDqnIQDpnHHoidMAL1Ak0QjEA/i+AAQkdAAkRiMg");
	var mask_graphics_93 = new cjs.Graphics().p("AEaaFQm9j9iKntQiKnuD7m9QD7nAHtiKMAKbAlQQivAwiqAAQk0AAkgihg");
	var mask_graphics_94 = new cjs.Graphics().p("AEIZtQmzkOh3nyQh3nzEMmzQELm1Hzh3MAI/AlnQiaAkiTAAQlMAAkvi5g");
	var mask_graphics_95 = new cjs.Graphics().p("AD3ZUQmokehkn2Qhkn4EcmoQEcmrH3hkMAHjAl7QiDAah+AAQllAAk8jSg");
	var mask_graphics_96 = new cjs.Graphics().p("ADoY5QmekuhQn6QhRn6EsmeQEtmfH6hRMAGFAmMQhrARhnAAQmAAAlHjtg");
	var mask_graphics_97 = new cjs.Graphics().p("ADaYdQmSk+g+n8Qg9n+E7mRQE9mUH9g9MAEoAmYQhTAKhPAAQmcAAlSkIg");
	var mask_graphics_98 = new cjs.Graphics().p("ADMX/QmFlNgqn+Qgqn/FLmGQFMmHH/gqMADKAmiQg6AFg3AAQm6AAlckmg");
	var mask_graphics_99 = new cjs.Graphics().p("ADBXgQl5lbgWoAQgWoAFYl5QFbl6IAgXMABsAmpIg9ABQnaAAljlFg");
	var mask_graphics_100 = new cjs.Graphics().p("AC2XAQlrlqgDoAQgCoBFnlrQFpltIAgDMAANAmrIgHAAQn8AAlqllg");
	var mask_graphics_101 = new cjs.Graphics().p("ACEWeQldl3ARoAQARoBF0ldQF3leIAAQMgBRAmqQoAgRlfl2g");
	var mask_graphics_102 = new cjs.Graphics().p("ABNV8QlPmEAln/QAkn/GClPQGElQH/AkMgCwAmkQn/gklQmDg");
	var mask_graphics_103 = new cjs.Graphics().p("AAXVaQk/mRA4n9QA3n9GPlAQGQlBH+A3MgEOAmcQn+g4lBmPg");
	var mask_graphics_104 = new cjs.Graphics().p("AgcU4QkxmdBLn7QBLn6GbkxQGckyH7BLMgFsAmQQn6hLkxmbg");
	var mask_graphics_105 = new cjs.Graphics().p("AhPUVQkhmoBfn3QBen4GmkhQGokhH3BeMgHIAmAQn4hekhmng");
	var mask_graphics_106 = new cjs.Graphics().p("AiATyQkRmzBynzQBynzGwkRQGzkRHzByMgIlAlsQn0hxkQmyg");
	var mask_graphics_107 = new cjs.Graphics().p("AiwTPQj/m8CFnvQCEnuG7kAQG8kBHvCFMgKBAlWQnviFkAm8g");
	var mask_graphics_108 = new cjs.Graphics().p("AjdStQjunHCXnpQCYnpHDjvQHHjvHpCXMgLcAk8QnpiXjvnFg");
	var mask_graphics_109 = new cjs.Graphics().p("AkJSKQjdnPCqnjQCrnjHMjeQHPjdHkCqMgM2AkeQniiqjfnOg");
	var mask_graphics_110 = new cjs.Graphics().p("AkzRnQjLnXC9ncQC8ncHVjMQHXjMHdC8MgOOAj+Qnci9jNnWg");
	var mask_graphics_111 = new cjs.Graphics().p("AlaREQi5neDOnVQDPnUHci6QHei6HWDPMgPmAjYQnUjOi6neg");
	var mask_graphics_112 = new cjs.Graphics().p("AmAQiQimnlDgnNQDgnMHjinQHlioHNDhMgQ7AixQnMjhionkg");
	var mask_graphics_113 = new cjs.Graphics().p("AmkQAQiTnsDxnDQDynDHpiVQHriVHEDyMgSPAiGQnDjyiWnqg");
	var mask_graphics_114 = new cjs.Graphics().p("AnFPeQiBnxECm6QEDm6HviBQHwiCG7ECMgTiAhYQm6kCiCnwg");
	var mask_graphics_115 = new cjs.Graphics().p("AnkO8Qhun1ETmwQEUmvHyhvQH2hvGwETMgUzAgnQmvkThvn1g");
	var mask_graphics_116 = new cjs.Graphics().p("AoBObQhbn5EjmkQEkmmH3hbQH5hcGmEkI2BfyQmlkkhcn4g");
	var mask_graphics_117 = new cjs.Graphics().p("AocN6QhIn8E0mZQEzmaH7hIQH8hJGaE0I3Ne7Qmak0hJn7g");
	var mask_graphics_118 = new cjs.Graphics().p("Ao1NaQgzn/FCmMQFDmOH9g1QH+g1GOFDI4XeBQmOlEg2n9g");
	var mask_graphics_119 = new cjs.Graphics().p("ApLM6QggoAFSmAQFRmCH/ghQIAgiGBFSI5fdEQmBlSgjn/g");
	var mask_graphics_120 = new cjs.Graphics().p("ApeMaQgNoAFglzQFgl1IAgNQIBgOF0FgI6mcEQl0lggOoBg");
	var mask_graphics_121 = new cjs.Graphics().p("ApvL8QAGoBFullQFulnIAAGQIBAGFnFuI7pbCQlmlvAFoAg");
	var mask_graphics_122 = new cjs.Graphics().p("Ap+LeQAaoBF8lWQF7lZH/AZQIBAaFYF8I8qZ9QlYl8AZoAg");
	var mask_graphics_123 = new cjs.Graphics().p("AqLLAQAun/GJlIQGIlJH+AsQH/AtFJGII9nY3QlKmJAsn/g");
	var mask_graphics_124 = new cjs.Graphics().p("AqUKkQBBn9GVk5QGUk6H8BAQH9BAE6GUI+jXtQk6mVBAn8g");
	var mask_graphics_125 = new cjs.Graphics().p("AqcKIQBVn6GgkpQGgkrH5BUQH7BTEqGgI/bWhQkrmgBTn6g");
	var mask_graphics_126 = new cjs.Graphics().p("AqgJtQBon2GrkZQGrkbH2BnQH3BnEaGqMggRAVUQkbmsBnn2g");
	var mask_graphics_127 = new cjs.Graphics().p("AqjJTQB7nyG2kJQG2kKHxB6QHzB6EJG1MghDAUEQkKm2B5nyg");
	var mask_graphics_128 = new cjs.Graphics().p("AqiI5QCOnsG/j4QHAj5HsCMQHtCOD5G/MghzASyQj5nACNnug");
	var mask_graphics_129 = new cjs.Graphics().p("AqgIhQChnnHJjmQHIjoHnCfQHoCgDnHIMgifARfQjonJCfnog");
	var mask_graphics_130 = new cjs.Graphics().p("AqaIKQCznhHRjVQHRjWHgCyQHiCyDWHRMgjJAQKQjWnSCynhg");
	var mask_graphics_131 = new cjs.Graphics().p("AqTHzQDGnZHYjDQHajEHZDEQHaDEDEHZMgjuAOzQjEnaDDnag");
	var mask_graphics_132 = new cjs.Graphics().p("AqIHeQDXnRHfixQHhiyHSDWQHSDVCyHhMgkRANbQiynhDWnSg");
	var mask_graphics_133 = new cjs.Graphics().p("Ap7HKQDpnJHlieQHoigHIDoQHKDnCgHnMgkwAMCQignoDonJg");
	var mask_graphics_134 = new cjs.Graphics().p("ApsG3QD6m/HriNQHuiMG/D4QHBD5CMHtMglLAKnQiNntD5nAg");
	var mask_graphics_135 = new cjs.Graphics().p("ApaGlQELm1Hwh6QHyh6G2EJQG3EKB6HyMglkAJMQh6nyEKm2g");
	var mask_graphics_136 = new cjs.Graphics().p("ApGGUQEbmrH1hmQH3hnGrEZQGsEbBnH3Mgl5AHvQhmn2Eamsg");
	var mask_graphics_137 = new cjs.Graphics().p("AowGEQEsmfH4hTQH6hUGgEpQGiEsBTH5MgmKAGTQhTn6Eqmhg");
	var mask_graphics_138 = new cjs.Graphics().p("AoXF2QE8mUH7hAQH9hAGUE5QGVE7BAH8MgmXAE1QhAn8E6mVg");
	var mask_graphics_139 = new cjs.Graphics().p("An8FoQFLmHH9gtQH/gsGIFIQGJFKAtH/MgmiADXQgsn/FJmJg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(59).to({graphics:mask_graphics_59,x:167.5,y:182.9}).wait(1).to({graphics:mask_graphics_60,x:167.4,y:182.9}).wait(1).to({graphics:mask_graphics_61,x:167.3,y:182.9}).wait(1).to({graphics:mask_graphics_62,x:167.1,y:182.9}).wait(1).to({graphics:mask_graphics_63,x:166.8,y:183}).wait(1).to({graphics:mask_graphics_64,x:166.4,y:183}).wait(1).to({graphics:mask_graphics_65,x:165.9,y:183}).wait(1).to({graphics:mask_graphics_66,x:165.3,y:183}).wait(1).to({graphics:mask_graphics_67,x:164.6,y:183.1}).wait(1).to({graphics:mask_graphics_68,x:163.9,y:183.1}).wait(1).to({graphics:mask_graphics_69,x:163,y:183.1}).wait(1).to({graphics:mask_graphics_70,x:162.1,y:183.1}).wait(1).to({graphics:mask_graphics_71,x:161.1,y:183.1}).wait(1).to({graphics:mask_graphics_72,x:160,y:183.1}).wait(1).to({graphics:mask_graphics_73,x:158.8,y:183}).wait(1).to({graphics:mask_graphics_74,x:157.6,y:183}).wait(1).to({graphics:mask_graphics_75,x:156.3,y:183}).wait(1).to({graphics:mask_graphics_76,x:154.9,y:183}).wait(1).to({graphics:mask_graphics_77,x:153.4,y:182.9}).wait(1).to({graphics:mask_graphics_78,x:151.9,y:182.9}).wait(1).to({graphics:mask_graphics_79,x:150.3,y:182.9}).wait(1).to({graphics:mask_graphics_80,x:148.6,y:182.9}).wait(1).to({graphics:mask_graphics_81,x:146.9,y:182.9}).wait(1).to({graphics:mask_graphics_82,x:145.1,y:182.9}).wait(1).to({graphics:mask_graphics_83,x:143.3,y:183}).wait(1).to({graphics:mask_graphics_84,x:141.4,y:183}).wait(1).to({graphics:mask_graphics_85,x:139.4,y:183}).wait(1).to({graphics:mask_graphics_86,x:137.4,y:183}).wait(1).to({graphics:mask_graphics_87,x:135.4,y:183.1}).wait(1).to({graphics:mask_graphics_88,x:133.3,y:183.1}).wait(1).to({graphics:mask_graphics_89,x:131.1,y:183.1}).wait(1).to({graphics:mask_graphics_90,x:129,y:183.1}).wait(1).to({graphics:mask_graphics_91,x:126.8,y:183.1}).wait(1).to({graphics:mask_graphics_92,x:124.5,y:183.1}).wait(1).to({graphics:mask_graphics_93,x:122.3,y:183}).wait(1).to({graphics:mask_graphics_94,x:120,y:183}).wait(1).to({graphics:mask_graphics_95,x:117.7,y:183}).wait(1).to({graphics:mask_graphics_96,x:115.3,y:183}).wait(1).to({graphics:mask_graphics_97,x:113,y:182.9}).wait(1).to({graphics:mask_graphics_98,x:110.7,y:182.9}).wait(1).to({graphics:mask_graphics_99,x:108.3,y:182.9}).wait(1).to({graphics:mask_graphics_100,x:105.9,y:182.9}).wait(1).to({graphics:mask_graphics_101,x:107.6,y:182.9}).wait(1).to({graphics:mask_graphics_102,x:110,y:182.7}).wait(1).to({graphics:mask_graphics_103,x:112.4,y:182.5}).wait(1).to({graphics:mask_graphics_104,x:114.7,y:182.2}).wait(1).to({graphics:mask_graphics_105,x:117,y:181.8}).wait(1).to({graphics:mask_graphics_106,x:119.3,y:181.3}).wait(1).to({graphics:mask_graphics_107,x:121.6,y:180.8}).wait(1).to({graphics:mask_graphics_108,x:123.9,y:180.1}).wait(1).to({graphics:mask_graphics_109,x:126.2,y:179.4}).wait(1).to({graphics:mask_graphics_110,x:128.4,y:178.6}).wait(1).to({graphics:mask_graphics_111,x:130.6,y:177.6}).wait(1).to({graphics:mask_graphics_112,x:132.7,y:176.7}).wait(1).to({graphics:mask_graphics_113,x:134.8,y:175.6}).wait(1).to({graphics:mask_graphics_114,x:136.9,y:174.4}).wait(1).to({graphics:mask_graphics_115,x:138.9,y:173.2}).wait(1).to({graphics:mask_graphics_116,x:140.9,y:171.9}).wait(1).to({graphics:mask_graphics_117,x:142.8,y:170.5}).wait(1).to({graphics:mask_graphics_118,x:144.6,y:169.1}).wait(1).to({graphics:mask_graphics_119,x:146.4,y:167.5}).wait(1).to({graphics:mask_graphics_120,x:148.2,y:165.9}).wait(1).to({graphics:mask_graphics_121,x:149.9,y:164.3}).wait(1).to({graphics:mask_graphics_122,x:151.5,y:162.6}).wait(1).to({graphics:mask_graphics_123,x:153,y:160.8}).wait(1).to({graphics:mask_graphics_124,x:154.5,y:158.9}).wait(1).to({graphics:mask_graphics_125,x:155.9,y:157}).wait(1).to({graphics:mask_graphics_126,x:157.3,y:155.1}).wait(1).to({graphics:mask_graphics_127,x:158.5,y:153.1}).wait(1).to({graphics:mask_graphics_128,x:159.7,y:151.1}).wait(1).to({graphics:mask_graphics_129,x:160.8,y:149}).wait(1).to({graphics:mask_graphics_130,x:161.9,y:146.9}).wait(1).to({graphics:mask_graphics_131,x:162.8,y:144.7}).wait(1).to({graphics:mask_graphics_132,x:163.7,y:142.5}).wait(1).to({graphics:mask_graphics_133,x:164.5,y:140.3}).wait(1).to({graphics:mask_graphics_134,x:165.1,y:138}).wait(1).to({graphics:mask_graphics_135,x:165.8,y:135.7}).wait(1).to({graphics:mask_graphics_136,x:166.3,y:133.4}).wait(1).to({graphics:mask_graphics_137,x:166.7,y:131.1}).wait(1).to({graphics:mask_graphics_138,x:167,y:128.7}).wait(1).to({graphics:mask_graphics_139,x:167.3,y:126.4}).wait(1));

	// Layer 23
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(25,1,1).p("AqHDdQAJhtBwhsQBxhrCWg6QCWg7CSABQCUgBCOAmQCQAnBtBiQAtAoAbA1");
	this.shape.setTransform(202.5,218.4);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(59).to({_off:false},0).wait(81));

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
	this.instance.setTransform(0,-159,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-27.1},104).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AAAAPIAAgd");
	this.shape.setTransform(0,-164.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AAAgVIAAAr");
	this.shape_1.setTransform(0,-164.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AAAgbIAAA3");
	this.shape_2.setTransform(0,-163.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("AAAgiIAABF");
	this.shape_3.setTransform(0,-162.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("AAAgoIAABR");
	this.shape_4.setTransform(0,-162.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(5,1,1).p("AAAgvIAABf");
	this.shape_5.setTransform(0,-161.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(5,1,1).p("AAAg1IAABr");
	this.shape_6.setTransform(0,-160.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(5,1,1).p("AAAg8IAAB4");
	this.shape_7.setTransform(0,-160.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(5,1,1).p("AAAhCIAACF");
	this.shape_8.setTransform(0,-159.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(5,1,1).p("AAAhIIAACR");
	this.shape_9.setTransform(0,-158.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(5,1,1).p("AAAhPIAACf");
	this.shape_10.setTransform(0,-158.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5,1,1).p("AAAhVIAACr");
	this.shape_11.setTransform(0,-157.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(5,1,1).p("AAAhcIAAC5");
	this.shape_12.setTransform(0,-157);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(5,1,1).p("AAAhiIAADF");
	this.shape_13.setTransform(0,-156.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(5,1,1).p("AAAhpIAADT");
	this.shape_14.setTransform(0,-155.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(5,1,1).p("AAAhvIAADf");
	this.shape_15.setTransform(0,-155);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(5,1,1).p("AAAh2IAADt");
	this.shape_16.setTransform(0,-154.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(5,1,1).p("AAAh8IAAD5");
	this.shape_17.setTransform(0,-153.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(5,1,1).p("AAAiDIAAEH");
	this.shape_18.setTransform(0,-153.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(5,1,1).p("AAAiJIAAET");
	this.shape_19.setTransform(0,-152.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(5,1,1).p("AAAiPIAAEg");
	this.shape_20.setTransform(0,-151.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(5,1,1).p("AAAiWIAAEt");
	this.shape_21.setTransform(0,-151.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(5,1,1).p("AAAidIAAE7");
	this.shape_22.setTransform(0,-150.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(5,1,1).p("AAAijIAAFH");
	this.shape_23.setTransform(0,-149.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(5,1,1).p("AAAipIAAFT");
	this.shape_24.setTransform(0,-149.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(5,1,1).p("AAAiwIAAFh");
	this.shape_25.setTransform(0,-148.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(5,1,1).p("AAAi2IAAFt");
	this.shape_26.setTransform(0,-147.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(5,1,1).p("AAAi9IAAF7");
	this.shape_27.setTransform(0,-147.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(5,1,1).p("AAAjDIAAGH");
	this.shape_28.setTransform(0,-146.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(5,1,1).p("AAAjKIAAGV");
	this.shape_29.setTransform(0,-146);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(5,1,1).p("AAAjQIAAGh");
	this.shape_30.setTransform(0,-145.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(5,1,1).p("AAAjXIAAGu");
	this.shape_31.setTransform(0,-144.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(5,1,1).p("AAAjdIAAG7");
	this.shape_32.setTransform(0,-144);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(5,1,1).p("AAAjjIAAHI");
	this.shape_33.setTransform(0,-143.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(5,1,1).p("AAAjqIAAHV");
	this.shape_34.setTransform(0,-142.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(5,1,1).p("AAAjxIAAHi");
	this.shape_35.setTransform(0,-142.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(5,1,1).p("AAAj3IAAHv");
	this.shape_36.setTransform(0,-141.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(5,1,1).p("AAAj9IAAH7");
	this.shape_37.setTransform(0,-140.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(5,1,1).p("AAAkEIAAIJ");
	this.shape_38.setTransform(0,-140.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(5,1,1).p("AAAkKIAAIV");
	this.shape_39.setTransform(0,-139.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(5,1,1).p("AAAkRIAAIj");
	this.shape_40.setTransform(0,-138.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(5,1,1).p("AAAkXIAAIv");
	this.shape_41.setTransform(0,-138.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(5,1,1).p("AAAkeIAAI9");
	this.shape_42.setTransform(0,-137.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(5,1,1).p("AAAkkIAAJJ");
	this.shape_43.setTransform(0,-136.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(5,1,1).p("AAAkqIAAJW");
	this.shape_44.setTransform(0,-136.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(5,1,1).p("AAAkxIAAJj");
	this.shape_45.setTransform(0,-135.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(5,1,1).p("AAAk4IAAJx");
	this.shape_46.setTransform(0,-135);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(5,1,1).p("AAAk+IAAJ9");
	this.shape_47.setTransform(0,-134.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(5,1,1).p("AAAlFIAAKK");
	this.shape_48.setTransform(0,-133.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(5,1,1).p("AAAlLIAAKX");
	this.shape_49.setTransform(0,-133.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(5,1,1).p("AAAlRIAAKj");
	this.shape_50.setTransform(0,-132.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(5,1,1).p("AAAlYIAAKx");
	this.shape_51.setTransform(0,-131.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(5,1,1).p("AAAleIAAK9");
	this.shape_52.setTransform(0,-131.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(5,1,1).p("AAAllIAALL");
	this.shape_53.setTransform(0,-130.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(5,1,1).p("AAAlrIAALX");
	this.shape_54.setTransform(0,-129.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(5,1,1).p("AAAlyIAALl");
	this.shape_55.setTransform(0,-129.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(5,1,1).p("AAAl4IAALx");
	this.shape_56.setTransform(0,-128.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(5,1,1).p("AAAl+IAAL+");
	this.shape_57.setTransform(0,-127.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(5,1,1).p("AAAmFIAAML");
	this.shape_58.setTransform(0,-127.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(5,1,1).p("AAAmMIAAMY");
	this.shape_59.setTransform(0,-126.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(5,1,1).p("AAAmSIAAMl");
	this.shape_60.setTransform(0,-125.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(5,1,1).p("AAAmZIAAMz");
	this.shape_61.setTransform(0,-125.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(5,1,1).p("AAAmfIAAM/");
	this.shape_62.setTransform(0,-124.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(5,1,1).p("AAAmlIAANL");
	this.shape_63.setTransform(0,-124);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(5,1,1).p("AAAmsIAANZ");
	this.shape_64.setTransform(0,-123.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(5,1,1).p("AAAmyIAANl");
	this.shape_65.setTransform(0,-122.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(5,1,1).p("AAAm5IAANz");
	this.shape_66.setTransform(0,-122.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(5,1,1).p("AAAm/IAAN/");
	this.shape_67.setTransform(0,-121.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(5,1,1).p("AAAnGIAAON");
	this.shape_68.setTransform(0,-120.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(5,1,1).p("AAAnMIAAOZ");
	this.shape_69.setTransform(0,-120.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(5,1,1).p("AAAnTIAAOn");
	this.shape_70.setTransform(0,-119.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(5,1,1).p("AAAnZIAAOz");
	this.shape_71.setTransform(0,-118.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(5,1,1).p("AAAngIAAPB");
	this.shape_72.setTransform(0,-118.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(5,1,1).p("AAAnmIAAPN");
	this.shape_73.setTransform(0,-117.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(5,1,1).p("AAAnsIAAPa");
	this.shape_74.setTransform(0,-116.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(5,1,1).p("AAAnzIAAPn");
	this.shape_75.setTransform(0,-116.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(5,1,1).p("AAAn5IAAPz");
	this.shape_76.setTransform(0,-115.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(5,1,1).p("AAAoAIAAQB");
	this.shape_77.setTransform(0,-115);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(5,1,1).p("AAAoGIAAQN");
	this.shape_78.setTransform(0,-114.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(5,1,1).p("AAAoNIAAQb");
	this.shape_79.setTransform(0,-113.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(5,1,1).p("AAAoTIAAQn");
	this.shape_80.setTransform(0,-113);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(5,1,1).p("AAAoaIAAQ1");
	this.shape_81.setTransform(0,-112.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(5,1,1).p("AAAogIAARB");
	this.shape_82.setTransform(0,-111.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(5,1,1).p("AAAonIAARO");
	this.shape_83.setTransform(0,-111.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(5,1,1).p("AAAotIAARb");
	this.shape_84.setTransform(0,-110.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(5,1,1).p("AAAo0IAARp");
	this.shape_85.setTransform(0,-109.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(5,1,1).p("AAAo6IAAR1");
	this.shape_86.setTransform(0,-109.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(5,1,1).p("AAApBIAASD");
	this.shape_87.setTransform(0,-108.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(5,1,1).p("AAApHIAASP");
	this.shape_88.setTransform(0,-107.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(5,1,1).p("AAApNIAASb");
	this.shape_89.setTransform(0,-107.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(5,1,1).p("AAApUIAASp");
	this.shape_90.setTransform(0,-106.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(5,1,1).p("AAApaIAAS1");
	this.shape_91.setTransform(0,-105.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(5,1,1).p("AAAphIAATD");
	this.shape_92.setTransform(0,-105.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(5,1,1).p("AAApnIAATP");
	this.shape_93.setTransform(0,-104.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(5,1,1).p("AAApuIAATd");
	this.shape_94.setTransform(0,-104);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(5,1,1).p("AAAp0IAATp");
	this.shape_95.setTransform(0,-103.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(5,1,1).p("AAAp7IAAT3");
	this.shape_96.setTransform(0,-102.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(5,1,1).p("AAAqBIAAUD");
	this.shape_97.setTransform(0,-102);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(5,1,1).p("AAAqIIAAUR");
	this.shape_98.setTransform(0,-101.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(5,1,1).p("AAAqOIAAUd");
	this.shape_99.setTransform(0,-100.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(5,1,1).p("AAAqVIAAUq");
	this.shape_100.setTransform(0,-100.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(5,1,1).p("AAAqbIAAU3");
	this.shape_101.setTransform(0,-99.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(5,1,1).p("AAAqhIAAVD");
	this.shape_102.setTransform(0,-98.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(5,1,1).p("AAAqoIAAVR");
	this.shape_103.setTransform(0,-98.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(5,1,1).p("AAAKvIAA1d");
	this.shape_104.setTransform(0,-97.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.8,-172.1,18.3,16.4);


(lib.honeyflap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.honeybee();
	this.instance.parent = this;
	this.instance.setTransform(38.4,-170.9,0.422,0.422,0,0,0,-0.1,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgTB8QgOgDgPgGIgLgFIgBgBIgCgBIgCgBIgBgBIgBAAIgBgBIgBgBIgBgBIgCAAIgBgBIgBgBIgBgBIgBgBIgBAAIgBgBIgBgBIgBgBIgBgBIgBAAIgBgBIgBgBIgBgBIAAgBIgBgBIgBAAIgBgBIgBgBIgBgBIgBgBIgBgBIAAAAIgBgBIgBgBIAAgBIgBgBIgBgBIAAAAIgBgBIAAgBIgCgBIAAgBIgBgBIgBgBIAAAAIgBgBIgBgBIAAgBIAAgBIgBgBIAAgBIgBgBIAAAAIgBgBIgBgBIgBgBIAAgBIgBgBIAAgBIgBgBIAAgBIgBgCIgBgCIAAgBIgBgBIAAgBIgBAAIAAgBIAAgBIgBgBIAAgBIAAgBIgBgBIgBgBIAAgBIAAAAIgBgBIAAgBIAAgBIgBgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIAAAAIAAgBIgBgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIAAgBIgBgBIAAAAIAAgCIAAgCIAAgCIgBgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIgBAAIABgBIAAgBIgBgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIABgBIgBgBIABgBIgBAAIABgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIABgBIABgBIAAgBIAAgBIABgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIABgBIAAgBIABgBIAAgBIABgBIAAgBIABgBIAAgBIACgBIAAgBIABgBIABgBIAAgBIABgBIAAgBIABgBIABgBIAAgCIABgBIABgBIABgBIABgBIABgBIABgBIABgBIAAgBIABgBIAEgEIANgLQAGgFAHgEIAPgHQAIgEAIgCIAOgDQAKgBAKAAIAKABIAHABQAKABAKADIAMAFIAEACIABAAIABABIABABIACABIABAAIABABIACABIABABIACABIAAAAIABABIACABIABABIABAAIABABIABABIABABIABABIABAAIABABIABABIABABIABABIABABIABAAIABABIABABIAAABIABABIABAAIABABIABABIABABIABABIABABIAAAAIABABIABABIAAABIABABIABABIAAABIABAAIABABIAAABIABABIABABIABABIAAABIABAAIAAABIABABIAAABIABABIAAABIABABIABAAIAAABIAAABIABABIABABIABABIAAABIAAABIABABIAAAAIABABIAAABIABABIAAABIABABIAAABIAAABIAAAAIAAABIABABIAAABIABABIAAABIAAABIABABIAAABIAAABIABAAIAAABIABABIAAABIAAABIABABIAAABIAAABIABABIAAABIAAABIAAAAIAAABIABABIAAABIAAABIAAABIAAABIAAABIABABIAAABIAAABIAAABIAAABIAAAAIAAABIABABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIABABIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIgBABIABABIgBABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIgBABIAAABIAAABIAAABIAAABIAAABIgBABIAAABIAAABIAAABIAAABIAAABIgBABIAAABIAAABIAAABIgBABIAAABIAAABIgBABIAAABIAAABIgBABIgBABIAAABIAAABIgBABIAAABIAAABIgBABIAAABIgBABIAAABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIgBABIgBABIAAABIgBABIAAABIgBABIgBABIAAABIgBACIAAABIgBABIgBABIgBABIAAABIgCABIAAABIgBABIgBABIgBABIgBABIAAABIgBABIgBABIgBACIgCABIgCACIgEAEIgGAFIgEADIgEADIgDACIgCABIgQAIQgXAKgaAAQgJAAgKgBg");
	this.shape.setTransform(22.9,-141.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-215.3,105.5,86);


// stage content:
(lib.writingsuccess_Fontkid_r = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_362 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(362).call(this.frame_362).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(209,197,0.998,0.998,0,-8,172,22.4,-144);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({x:212,y:351},131).wait(11).to({x:211.1,y:350.9},0).to({regY:-143.9,x:209.5,y:241.9},56).to({regY:-143.8,guide:{path:[209.5,241.9,211.8,237,213.6,231.9,215.5,226.4,219.1,222,222.7,217.5,227,213.9,231.6,210.1,236.7,207.5,241.5,204.9,247,203.4,252.4,201.8,258,200.4,263.7,199.1,269.5,197.6,273,196.7,276.6,196.3]}},39).to({regY:-144,guide:{path:[276.6,196.3,279,196.1,281.4,196.1,287.5,196.2,293.2,197.7,297.1,198.9,301.3,199.7,306.6,200.9,312.1,202.6,317.7,204.3,324.2,206.9,330.7,209.5,334.7,215.3,338.1,220.2,339.1,222.9]}},43).wait(13).to({startPosition:0},0).to({guide:{path:[339.2,223.2,386.6,295.1,456.6,209.9,526.6,124.8,639.2,180.7]}},60).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(210,351.3,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},131).wait(11).to({_off:false,x:338.7,y:222.8},0).to({_off:true},138).wait(74));

	// Layer 1
	this.instance_1 = new lib.ar2("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(279.9,271.7,1,1,0,-60,120);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(151).to({_off:false},0).wait(212));

	// Layer 30
	this.instance_2 = new lib.ar1("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(108.1,300.1,1,1,0,0,0,-9.7,-74.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(354));

	// Layer 29
	this.instance_3 = new lib.mask2("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(71.7,1.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(151).to({_off:false},0).wait(212));

	// Layer 28
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(25,1,1).p("AAAgVIAAAr");
	this.shape_1.setTransform(209,199.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(25,1,1).p("AAAgaIAAA1");
	this.shape_2.setTransform(209,200.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(25,1,1).p("AAAggIAABB");
	this.shape_3.setTransform(209,201);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(25,1,1).p("AAAglIAABL");
	this.shape_4.setTransform(209.1,201.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(25,1,1).p("AAAgrIAABX");
	this.shape_5.setTransform(209.1,202.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(25,1,1).p("AAAgxIAABj");
	this.shape_6.setTransform(209.1,202.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(25,1,1).p("AAAg3IAABu");
	this.shape_7.setTransform(209.1,203.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(25,1,1).p("AAAg8IAAB5");
	this.shape_8.setTransform(209.1,203.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(25,1,1).p("AAAhCIAACF");
	this.shape_9.setTransform(209.1,204.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(25,1,1).p("AAAhIIABCR");
	this.shape_10.setTransform(209.1,205);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(25,1,1).p("AAAhNIABCb");
	this.shape_11.setTransform(209.1,205.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(25,1,1).p("AAAhTIABCn");
	this.shape_12.setTransform(209.1,206.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(25,1,1).p("AAAhYIABCy");
	this.shape_13.setTransform(209.1,206.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(25,1,1).p("AAAheIABC9");
	this.shape_14.setTransform(209.1,207.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(25,1,1).p("AAAhkIABDJ");
	this.shape_15.setTransform(209.1,207.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(25,1,1).p("AAAhqIABDV");
	this.shape_16.setTransform(209.1,208.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(25,1,1).p("AAAhvIABDf");
	this.shape_17.setTransform(209.1,209);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(25,1,1).p("AAAh1IABDr");
	this.shape_18.setTransform(209.1,209.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(25,1,1).p("AAAh7IABD3");
	this.shape_19.setTransform(209.1,210.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(25,1,1).p("AAAiAIABEB");
	this.shape_20.setTransform(209.1,210.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(25,1,1).p("AAAiGIABEN");
	this.shape_21.setTransform(209.1,211.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(25,1,1).p("AAAiMIABEZ");
	this.shape_22.setTransform(209.1,211.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(25,1,1).p("AAAiRIABEj");
	this.shape_23.setTransform(209.1,212.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(25,1,1).p("AAAiXIABEv");
	this.shape_24.setTransform(209.1,213);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(25,1,1).p("AAAidIABE7");
	this.shape_25.setTransform(209.1,213.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(25,1,1).p("AgBiiIADFF");
	this.shape_26.setTransform(209.2,214.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(25,1,1).p("AgBioIADFR");
	this.shape_27.setTransform(209.2,214.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(25,1,1).p("AgBiuIADFd");
	this.shape_28.setTransform(209.2,215.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(25,1,1).p("AgBi0IADFo");
	this.shape_29.setTransform(209.2,215.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(25,1,1).p("AgBi5IADFz");
	this.shape_30.setTransform(209.2,216.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(25,1,1).p("AgBi/IADF/");
	this.shape_31.setTransform(209.2,216.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(25,1,1).p("AgBjFIADGL");
	this.shape_32.setTransform(209.2,217.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(25,1,1).p("AgBjKIADGV");
	this.shape_33.setTransform(209.2,218.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(25,1,1).p("AgBjQIADGh");
	this.shape_34.setTransform(209.2,218.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(25,1,1).p("AgBjVIADGs");
	this.shape_35.setTransform(209.2,219.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(25,1,1).p("AgBjbIADG3");
	this.shape_36.setTransform(209.2,219.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(25,1,1).p("AgBjhIADHD");
	this.shape_37.setTransform(209.2,220.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(25,1,1).p("AgBjnIADHP");
	this.shape_38.setTransform(209.2,220.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(25,1,1).p("AgBjsIADHZ");
	this.shape_39.setTransform(209.2,221.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(25,1,1).p("AgBjyIADHl");
	this.shape_40.setTransform(209.2,222);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(25,1,1).p("AgBj3IADHv");
	this.shape_41.setTransform(209.2,222.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(25,1,1).p("AgBj9IADH7");
	this.shape_42.setTransform(209.2,223.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(25,1,1).p("AgBkDIADIH");
	this.shape_43.setTransform(209.2,223.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(25,1,1).p("AgBkJIADIS");
	this.shape_44.setTransform(209.2,224.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(25,1,1).p("AgBkOIADId");
	this.shape_45.setTransform(209.2,224.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(25,1,1).p("AgBkUIADIp");
	this.shape_46.setTransform(209.2,225.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(25,1,1).p("AgBkaIADI1");
	this.shape_47.setTransform(209.2,226);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(25,1,1).p("AgCkfIAFI/");
	this.shape_48.setTransform(209.3,226.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(25,1,1).p("AgCklIAFJL");
	this.shape_49.setTransform(209.3,227.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(25,1,1).p("AgCkqIAFJV");
	this.shape_50.setTransform(209.3,227.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(25,1,1).p("AgCkwIAFJh");
	this.shape_51.setTransform(209.3,228.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(25,1,1).p("AgCk2IAFJt");
	this.shape_52.setTransform(209.3,228.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(25,1,1).p("AgCk8IAFJ5");
	this.shape_53.setTransform(209.3,229.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(25,1,1).p("AgClBIAFKD");
	this.shape_54.setTransform(209.3,230);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(25,1,1).p("AgClHIAFKP");
	this.shape_55.setTransform(209.3,230.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(25,1,1).p("AgClNIAFKb");
	this.shape_56.setTransform(209.3,231.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(25,1,1).p("AgClSIAFKl");
	this.shape_57.setTransform(209.3,231.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(25,1,1).p("AgClYIAFKx");
	this.shape_58.setTransform(209.3,232.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(25,1,1).p("AgCleIAFK9");
	this.shape_59.setTransform(209.3,232.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(25,1,1).p("AgCljIAFLH");
	this.shape_60.setTransform(209.3,233.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(25,1,1).p("AgClpIAFLT");
	this.shape_61.setTransform(209.3,234);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(25,1,1).p("AgClvIAFLf");
	this.shape_62.setTransform(209.3,234.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(25,1,1).p("AgCl0IAFLp");
	this.shape_63.setTransform(209.3,235.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(25,1,1).p("AgCl6IAFL1");
	this.shape_64.setTransform(209.3,235.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(25,1,1).p("AgCmAIAFMB");
	this.shape_65.setTransform(209.3,236.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(25,1,1).p("AgCmGIAFMN");
	this.shape_66.setTransform(209.3,236.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(25,1,1).p("AgCmLIAFMX");
	this.shape_67.setTransform(209.3,237.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(25,1,1).p("AgCmRIAFMj");
	this.shape_68.setTransform(209.3,237.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(25,1,1).p("AgCmXIAFMv");
	this.shape_69.setTransform(209.3,238.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(25,1,1).p("AgCmcIAFM5");
	this.shape_70.setTransform(209.4,239.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(25,1,1).p("AgCmiIAFNF");
	this.shape_71.setTransform(209.4,239.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(25,1,1).p("AgCmnIAFNP");
	this.shape_72.setTransform(209.4,240.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(25,1,1).p("AgCmtIAFNb");
	this.shape_73.setTransform(209.4,240.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(25,1,1).p("AgCmzIAFNn");
	this.shape_74.setTransform(209.4,241.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(25,1,1).p("AgDm5IAHNz");
	this.shape_75.setTransform(209.4,241.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(25,1,1).p("AgDm+IAHN9");
	this.shape_76.setTransform(209.4,242.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(25,1,1).p("AgDnEIAHOJ");
	this.shape_77.setTransform(209.4,243);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(25,1,1).p("AgDnJIAHOT");
	this.shape_78.setTransform(209.4,243.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(25,1,1).p("AgDnPIAHOf");
	this.shape_79.setTransform(209.4,244.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(25,1,1).p("AgDnVIAHOr");
	this.shape_80.setTransform(209.4,244.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(25,1,1).p("AgDnbIAHO3");
	this.shape_81.setTransform(209.4,245.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(25,1,1).p("AgDngIAHPB");
	this.shape_82.setTransform(209.4,245.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(25,1,1).p("AgDnmIAHPN");
	this.shape_83.setTransform(209.4,246.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(25,1,1).p("AgDnsIAHPZ");
	this.shape_84.setTransform(209.4,247);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(25,1,1).p("AgDnxIAHPj");
	this.shape_85.setTransform(209.4,247.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(25,1,1).p("AgDn3IAHPv");
	this.shape_86.setTransform(209.4,248.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(25,1,1).p("AgDn8IAHP5");
	this.shape_87.setTransform(209.4,248.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(25,1,1).p("AgDoCIAHQF");
	this.shape_88.setTransform(209.4,249.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(25,1,1).p("AgDoIIAHQR");
	this.shape_89.setTransform(209.4,249.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(25,1,1).p("AgDoOIAHQd");
	this.shape_90.setTransform(209.4,250.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(25,1,1).p("AgDoTIAHQn");
	this.shape_91.setTransform(209.4,251);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(25,1,1).p("AgDoZIAIQz");
	this.shape_92.setTransform(209.5,251.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(25,1,1).p("AgDofIAIQ/");
	this.shape_93.setTransform(209.5,252.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(25,1,1).p("AgDokIAIRJ");
	this.shape_94.setTransform(209.5,252.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(25,1,1).p("AgDoqIAIRV");
	this.shape_95.setTransform(209.5,253.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(25,1,1).p("AgDowIAIRh");
	this.shape_96.setTransform(209.5,253.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(25,1,1).p("AgEo1IAJRr");
	this.shape_97.setTransform(209.5,254.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(25,1,1).p("AgEo7IAJR3");
	this.shape_98.setTransform(209.5,255);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(25,1,1).p("AgEpBIAJSD");
	this.shape_99.setTransform(209.5,255.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(25,1,1).p("AgEpHIAJSO");
	this.shape_100.setTransform(209.5,256.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(25,1,1).p("AgEpMIAJSZ");
	this.shape_101.setTransform(209.5,256.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(25,1,1).p("AgEpSIAJSl");
	this.shape_102.setTransform(209.5,257.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(25,1,1).p("AgEpYIAJSx");
	this.shape_103.setTransform(209.5,257.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(25,1,1).p("AgEpdIAJS7");
	this.shape_104.setTransform(209.5,258.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(25,1,1).p("AgEpjIAJTH");
	this.shape_105.setTransform(209.5,258.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(25,1,1).p("AgEppIAJTT");
	this.shape_106.setTransform(209.5,259.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(25,1,1).p("AgEpuIAJTd");
	this.shape_107.setTransform(209.5,260.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(25,1,1).p("AgEp0IAJTp");
	this.shape_108.setTransform(209.5,260.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(25,1,1).p("AgEp5IAJTz");
	this.shape_109.setTransform(209.5,261.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(25,1,1).p("AgEp/IAJT/");
	this.shape_110.setTransform(209.5,261.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(25,1,1).p("AgEqFIAJUL");
	this.shape_111.setTransform(209.5,262.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(25,1,1).p("AgEqKIAJUW");
	this.shape_112.setTransform(209.5,262.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(25,1,1).p("AgFqQIAKUh");
	this.shape_113.setTransform(209.6,263.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(25,1,1).p("AgFqWIAKUt");
	this.shape_114.setTransform(209.6,264);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(25,1,1).p("AgFqcIAKU4");
	this.shape_115.setTransform(209.6,264.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(25,1,1).p("AgFqhIAKVD");
	this.shape_116.setTransform(209.6,265.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(25,1,1).p("AgFqnIAKVP");
	this.shape_117.setTransform(209.6,265.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(25,1,1).p("AgFqtIAKVb");
	this.shape_118.setTransform(209.6,266.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(25,1,1).p("AgFqyIALVl");
	this.shape_119.setTransform(209.6,266.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(25,1,1).p("AgFq4IALVx");
	this.shape_120.setTransform(209.6,267.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(25,1,1).p("AgFq+IALV9");
	this.shape_121.setTransform(209.6,268);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(25,1,1).p("AgFrDIALWH");
	this.shape_122.setTransform(209.6,268.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(25,1,1).p("AgFrJIALWT");
	this.shape_123.setTransform(209.6,269.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(25,1,1).p("AgFrOIALWd");
	this.shape_124.setTransform(209.6,269.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(25,1,1).p("AgFrUIALWp");
	this.shape_125.setTransform(209.6,270.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(25,1,1).p("AgFraIALW1");
	this.shape_126.setTransform(209.6,270.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(25,1,1).p("AgFrgIALXB");
	this.shape_127.setTransform(209.6,271.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(25,1,1).p("AgFrlIALXL");
	this.shape_128.setTransform(209.6,272);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(25,1,1).p("AgFrrIALXX");
	this.shape_129.setTransform(209.6,272.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(25,1,1).p("AgFrxIALXj");
	this.shape_130.setTransform(209.6,273.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").ss(25,1,1).p("AgFr2IALXt");
	this.shape_131.setTransform(209.6,273.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(25,1,1).p("AgFr8IALX5");
	this.shape_132.setTransform(209.6,274.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},9).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).wait(223));

	// Base
	this.instance_4 = new lib.Symbol2("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(275,275);
	this.instance_4.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(363));

	// Background
	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#F59E9E").ss(3,1,1).p("AMvQ5I5dAAMAAAghxIZdAAg");
	this.shape_133.setTransform(275,275,3.373,2.543);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_134.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_134},{t:this.shape_133}]}).wait(363));

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