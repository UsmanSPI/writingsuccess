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


(lib.basefont = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3IaXMAAAg08QAAimDAAAIchAAQFtAAEbESQEQEKAXFpQABAhAAAjQABDnhmDmQh5EIjRCsQGtFwABH/IAAAMQgEF6kZEnQkYEmmCAAI7bAAIhCALQi9AAABi1gAxwXrIaBAAQDhAAC4jFQC5jFgBjzIAAgLQABkPirjWQiujYj5AAI6BAAgAxmi2IZ9gGQEIAACqjaQCijPAAkbQAAjuizjFQiwjFjvgDI5/AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148.1,-186.7,296.3,373.6);


(lib.b_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_74 = new cjs.Graphics().p("AMmSeQlulsgCoDQgCoDFqltQFslvIDgCMAALAm4IgHAAQn/AAlslog");
	var mask_graphics_75 = new cjs.Graphics().p("ALtR5Qlel7AToDQAToCF6leQF6lfIDATMgBdAm3QoDgUlfl5g");
	var mask_graphics_76 = new cjs.Graphics().p("AKwRTQlOmJApoBQApoBGIlOQGJlPIBApMgDFAmwQoCgplPmIg");
	var mask_graphics_77 = new cjs.Graphics().p("AJ1QtQk9mWA+oAQA/n+GVk+QGXk+H/A/MgEtAmlQoAg+k+mWg");
	var mask_graphics_78 = new cjs.Graphics().p("AI8QHQksmjBUn9QBUn7GiksQGkktH8BUMgGVAmXQn8hUktmjg");
	var mask_graphics_79 = new cjs.Graphics().p("AIFPhQkamvBpn5QBpn4GvkaQGvkbH5BpMgH7AmEQn5hpkbmvg");
	var mask_graphics_80 = new cjs.Graphics().p("AHQO7QkIm7B+n0QB+nzG6kIQG7kJH0B+MgJhAltQnzh+kJm6g");
	var mask_graphics_81 = new cjs.Graphics().p("AGdOUQj1nFCTntQCTnvHFj1QHFj2HuCTMgLFAlRQnuiTj2nFg");
	var mask_graphics_82 = new cjs.Graphics().p("AFsNuQjinQConmQCnnoHPjiQHQjiHnCnMgMoAkxQnoinjjnPg");
	var mask_graphics_83 = new cjs.Graphics().p("AE+NHQjOnYC7nfQC8ngHYjPQHZjPHgC8MgOLAkNQngi7jPnZg");
	var mask_graphics_84 = new cjs.Graphics().p("AESMhQi6ngDPnXQDQnYHgi7QHhi7HYDQMgPrAjlQnYjPi7nhg");
	var mask_graphics_85 = new cjs.Graphics().p("ADpL7QimnoDjnOQDjnOHninQHpimHPDjMgRKAi5QnOjjinnog");
	var mask_graphics_86 = new cjs.Graphics().p("ADCLWQiSnvD3nEQD2nFHuiRQHviTHFD3MgSmAiJQnFj2iSnug");
	var mask_graphics_87 = new cjs.Graphics().p("ACdKwQh8n0EJm5QEJm6H0h9QH0h9G6EJMgUAAhVQm6kJh+n0g");
	var mask_graphics_88 = new cjs.Graphics().p("AB8KLQhon5EcmtQEbmvH4hoQH6hoGuEbMgVYAgeQmvkbhon5g");
	var mask_graphics_89 = new cjs.Graphics().p("ABdJnQhTn9EumiQEtmiH8hTQH+hTGiEuI2vfjQmikuhTn8g");
	var mask_graphics_90 = new cjs.Graphics().p("ABBJDQg9oAE+mVQE/mVH/g9QIAg+GWE/I4CekQmVk+g+oAg");
	var mask_graphics_91 = new cjs.Graphics().p("AAnIfQgnoCFPmGQFPmIICgoQICgoGIFPI5TdiQmHlPgpoCg");
	var mask_graphics_92 = new cjs.Graphics().p("AARH9QgRoDFel5QFgl5ICgTQIEgSF5FfI6gcdQl5lfgToDg");
	var mask_graphics_93 = new cjs.Graphics().p("AgBHbQACoDFvlqQFvlqIDADQIEADFqFvI7rbUQlplvADoDg");
	var mask_graphics_94 = new cjs.Graphics().p("AgSG5QAYoBF+lbQF+lbICAZQIEAZFaF+I8zaIQlZl+AYoDg");
	var mask_graphics_95 = new cjs.Graphics().p("AgfGZQAtoAGMlLQGMlKIBAuQICAvFKGMI93Y5QlJmLAuoCg");
	var mask_graphics_96 = new cjs.Graphics().p("AgqF6QBDn+Gak6QGZk5H/BEQH/BDE6GaI+5XoQk4mZBDn/g");
	var mask_graphics_97 = new cjs.Graphics().p("AgxFbQBYn7GmkoQGmkoH8BaQH8BZEoGmI/2WUQknmmBZn8g");
	var mask_graphics_98 = new cjs.Graphics().p("Ag2E+QBun3GykWQGykWH3BuQH4BvEWGyMggwAU9QkVmyBun3g");
	var mask_graphics_99 = new cjs.Graphics().p("Ag3EhQCDnxG9kEQG9kEHyCEQH0CDEDG9MghmATlQkDm9CDnzg");
	var mask_graphics_100 = new cjs.Graphics().p("Ag1EGQCXnsHIjwQHIjxHsCYQHtCYDxHHMgiZASKQjwnHCYntg");
	var mask_graphics_101 = new cjs.Graphics().p("AgxDsQCsnlHSjdQHRjeHmCsQHmCtDdHRMgjHAQtQjdnRCsnmg");
	var mask_graphics_102 = new cjs.Graphics().p("AgpDTQDAndHbjKQHajKHeDBQHeDBDKHZMgjxAPOQjKnaDAneg");
	var mask_graphics_103 = new cjs.Graphics().p("AgeC7QDUnVHii1QHji2HVDUQHWDVC2HiMgkZANtQi1niDUnWg");
	var mask_graphics_104 = new cjs.Graphics().p("AgQCkQDnnLHqihQHqihHLDnQHNDpCiHoMgk8AMMQihnqDonNg");
	var mask_graphics_105 = new cjs.Graphics().p("AAACPQD7nBHwiMQHwiNHCD7QHDD7CMHvMglZAKoQiNnwD6nDg");
	var mask_graphics_106 = new cjs.Graphics().p("AATB8QEPm2H1h4QH1h4G3ENQG4EOB4H1Mgl0AJCQh4n1EMm3g");
	var mask_graphics_107 = new cjs.Graphics().p("AAqBpQEhmqH5hjQH6hjGsEgQGsEfBiH6MgmKAHdQhin6Eemsg");
	var mask_graphics_108 = new cjs.Graphics().p("ABEBYQEymeH9hNQH+hOGfEyQGfExBOH9MgmcAF2QhOn9Exmgg");
	var mask_graphics_109 = new cjs.Graphics().p("ABgBJQFDmRIBg4QIAg4GSFCQGSFCA4IBMgmpAEPQg4oBFBmSg");
	var mask_graphics_110 = new cjs.Graphics().p("AB/A7QFUmDICgjQIDgiGEFTQGEFSAjIDMgmzACnQgjoDFSmEg");
	var mask_graphics_111 = new cjs.Graphics().p("AChAuQFkl0IDgNQIEgNF1FiQF2FkANIDMgm4AA/QgNoEFil2g");
	var mask_graphics_112 = new cjs.Graphics().p("Ai0N5QAJoEFxlmQFzllIDAIQIEAJFmFxQFmFzgIIDg");
	var mask_graphics_113 = new cjs.Graphics().p("AiyMrQAeoDGAlWQGClWICAeQIDAeFWGAQFXGCgeICg");
	var mask_graphics_114 = new cjs.Graphics().p("AiuLdQAzoBGOlGQGQlFIBAzQIBA0FGGOQFGGQg0IAg");
	var mask_graphics_115 = new cjs.Graphics().p("AioKPQBJn+Gbk1QGdk0H+BJQH/BJE0GbQE2GdhJH+g");
	var mask_graphics_116 = new cjs.Graphics().p("AigJCQBen7GokjQGqkjH6BfQH7BeEkGoQEjGpheH7g");
	var mask_graphics_117 = new cjs.Graphics().p("AiWH1QB0n1G0kSQG1kRH2B0QH3BzERG0QESG1h0H3g");
	var mask_graphics_118 = new cjs.Graphics().p("AiJGqQCInwG/kAQHAj+HxCIQHyCJD+G+QEAHBiJHxg");
	var mask_graphics_119 = new cjs.Graphics().p("Ah7FfQCdnqHKjtQHKjrHrCdQHrCdDsHJQDsHLidHrg");
	var mask_graphics_120 = new cjs.Graphics().p("AhqEVQCxnjHTjZQHVjYHjCxQHkCyDZHSQDZHViyHkg");
	var mask_graphics_121 = new cjs.Graphics().p("AhXDMQDFnbHcjFQHdjFHcDGQHcDGDFHbQDFHdjGHcg");
	var mask_graphics_122 = new cjs.Graphics().p("AhCCEQDZnSHkixQHkiwHUDZQHTDaCxHjQCxHkjaHUg");
	var mask_graphics_123 = new cjs.Graphics().p("AgrA+QDsnJHricQHsicHKDtQHJDtCdHqQCcHrjtHKg");
	var mask_graphics_124 = new cjs.Graphics().p("AgSgFQD/nAHyiIQHxiHHAEAQG/EACIHwQCHHykAG/g");
	var mask_graphics_125 = new cjs.Graphics().p("AAJhIQESm1H2hzQH3hyG1ESQG0ETBzH1QByH3kSG0g");
	var mask_graphics_126 = new cjs.Graphics().p("AAmiKQEkmoH7heQH7hdGoEkQGpElBdH5QBeH8kkGog");
	var mask_graphics_127 = new cjs.Graphics().p("ABEjJQE2mcH/hJQH+hHGcE2QGcE2BIH9QBIH/k2Gbg");
	var mask_graphics_128 = new cjs.Graphics().p("ABlkHQFHmOIBgzQIBgzGOFHQGPFHAzIAQAyIBlGGPg");
	var mask_graphics_129 = new cjs.Graphics().p("ACHlCQFXmBIDgdQIDgdGAFXQGBFYAdIBQAdIDlXGBg");
	var mask_graphics_130 = new cjs.Graphics().p("ACrl7QFnlyIDgIQIEgHFxFnQFyFnAIICQAIIEloFyg");
	var mask_graphics_131 = new cjs.Graphics().p("ADQmyQF2ljIDAOQIEAOFiF3QFjF2gOICQgOIEl3Fig");
	var mask_graphics_132 = new cjs.Graphics().p("AD2nnQGFlSICAjQICAkFTGFQFSGEgjIBQgkIDmEFTg");
	var mask_graphics_133 = new cjs.Graphics().p("AEeoZQGSlCIBA5QIAA6FCGSQFCGSg5IAQg5IBmTFBg");
	var mask_graphics_134 = new cjs.Graphics().p("AFHpIQGgkxH9BOQH+BPEwGgQExGehOH+QhPH+mfEwg");
	var mask_graphics_135 = new cjs.Graphics().p("AFxp1QGskfH6BjQH6BkEfGsQEfGshkH5QhjH6msEfg");
	var mask_graphics_136 = new cjs.Graphics().p("AGdqfQG4kNH1B4QH1B6ENG3QENG3h5H1Qh5H2m4EMg");
	var mask_graphics_137 = new cjs.Graphics().p("AHKrHQHCj6HwCNQHwCPD6HCQD6HCiNHvQiOHwnDD7g");
	var mask_graphics_138 = new cjs.Graphics().p("AH4rrQHMjnHqCiQHpCiDnHNQDnHMiiHpQijHqnMDng");
	var mask_graphics_139 = new cjs.Graphics().p("AImsNQHWjTHjC2QHiC3DTHWQDUHVi3HiQi2HinWDUg");
	var mask_graphics_140 = new cjs.Graphics().p("AJWsrQHfjAHaDKQHaDLDAHfQC/HdjKHaQjLHaneDAg");
	var mask_graphics_141 = new cjs.Graphics().p("AKHtHQHmirHSDeQHQDeCsHmQCsHmjfHQQjeHSnmCrg");
	var mask_graphics_142 = new cjs.Graphics().p("AK5tfQHtiXHHDxQHHDyCYHtQCXHsjyHHQjyHIntCXg");
	var mask_graphics_143 = new cjs.Graphics().p("ALrt1QHziCG9EEQG9EFCCHyQCCHzkEG8QkFG9nyCDg");
	var mask_graphics_144 = new cjs.Graphics().p("AMeuHQH4htGyEWQGxEYBtH3QBuH3kXGyQkXGxn4Bug");
	var mask_graphics_145 = new cjs.Graphics().p("ANSuWQH8hYGlEpQGmEpBYH7QBYH8kpGlQkpGmn8BYg");
	var mask_graphics_146 = new cjs.Graphics().p("AOGuiQH/hCGZE6QGYE6BDH+QBDIAk6GYQk7GZn/BDg");
	var mask_graphics_147 = new cjs.Graphics().p("AO6uqQIBgtGMFKQGKFMAuIAQAtIClLGLQlLGLoCAug");
	var mask_graphics_148 = new cjs.Graphics().p("APuuvQIDgYF9FbQF9FcAXICQAYIDlbF8QlcF+oCAXg");
	var mask_graphics_149 = new cjs.Graphics().p("AQiuxQIDgCFvFqQFuFsACICQACIElrFtQlrFvoDACg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(74).to({graphics:mask_graphics_74,x:168.8,y:154.2}).wait(1).to({graphics:mask_graphics_75,x:170.8,y:154.2}).wait(1).to({graphics:mask_graphics_76,x:173.4,y:154}).wait(1).to({graphics:mask_graphics_77,x:176,y:153.7}).wait(1).to({graphics:mask_graphics_78,x:178.6,y:153.4}).wait(1).to({graphics:mask_graphics_79,x:181.2,y:152.9}).wait(1).to({graphics:mask_graphics_80,x:183.7,y:152.3}).wait(1).to({graphics:mask_graphics_81,x:186.2,y:151.6}).wait(1).to({graphics:mask_graphics_82,x:188.7,y:150.8}).wait(1).to({graphics:mask_graphics_83,x:191.2,y:149.9}).wait(1).to({graphics:mask_graphics_84,x:193.6,y:148.9}).wait(1).to({graphics:mask_graphics_85,x:196,y:147.8}).wait(1).to({graphics:mask_graphics_86,x:198.3,y:146.6}).wait(1).to({graphics:mask_graphics_87,x:200.5,y:145.3}).wait(1).to({graphics:mask_graphics_88,x:202.7,y:143.9}).wait(1).to({graphics:mask_graphics_89,x:204.9,y:142.5}).wait(1).to({graphics:mask_graphics_90,x:207,y:140.9}).wait(1).to({graphics:mask_graphics_91,x:209,y:139.2}).wait(1).to({graphics:mask_graphics_92,x:210.9,y:137.5}).wait(1).to({graphics:mask_graphics_93,x:212.8,y:135.7}).wait(1).to({graphics:mask_graphics_94,x:214.6,y:133.8}).wait(1).to({graphics:mask_graphics_95,x:216.3,y:131.8}).wait(1).to({graphics:mask_graphics_96,x:218,y:129.8}).wait(1).to({graphics:mask_graphics_97,x:219.5,y:127.7}).wait(1).to({graphics:mask_graphics_98,x:220.9,y:125.5}).wait(1).to({graphics:mask_graphics_99,x:222.3,y:123.3}).wait(1).to({graphics:mask_graphics_100,x:223.6,y:121}).wait(1).to({graphics:mask_graphics_101,x:224.7,y:118.7}).wait(1).to({graphics:mask_graphics_102,x:225.8,y:116.3}).wait(1).to({graphics:mask_graphics_103,x:226.8,y:113.9}).wait(1).to({graphics:mask_graphics_104,x:227.7,y:111.5}).wait(1).to({graphics:mask_graphics_105,x:228.4,y:109}).wait(1).to({graphics:mask_graphics_106,x:229.1,y:106.4}).wait(1).to({graphics:mask_graphics_107,x:229.6,y:103.9}).wait(1).to({graphics:mask_graphics_108,x:230.1,y:101.3}).wait(1).to({graphics:mask_graphics_109,x:230.4,y:98.8}).wait(1).to({graphics:mask_graphics_110,x:230.7,y:96.2}).wait(1).to({graphics:mask_graphics_111,x:230.8,y:93.6}).wait(1).to({graphics:mask_graphics_112,x:230.8,y:93}).wait(1).to({graphics:mask_graphics_113,x:230.8,y:95.6}).wait(1).to({graphics:mask_graphics_114,x:230.8,y:98.2}).wait(1).to({graphics:mask_graphics_115,x:230.9,y:100.8}).wait(1).to({graphics:mask_graphics_116,x:230.9,y:103.4}).wait(1).to({graphics:mask_graphics_117,x:230.9,y:106}).wait(1).to({graphics:mask_graphics_118,x:231,y:108.5}).wait(1).to({graphics:mask_graphics_119,x:231,y:111}).wait(1).to({graphics:mask_graphics_120,x:231,y:113.5}).wait(1).to({graphics:mask_graphics_121,x:231,y:115.9}).wait(1).to({graphics:mask_graphics_122,x:231,y:118.3}).wait(1).to({graphics:mask_graphics_123,x:231,y:120.6}).wait(1).to({graphics:mask_graphics_124,x:231,y:122.9}).wait(1).to({graphics:mask_graphics_125,x:230.9,y:125.1}).wait(1).to({graphics:mask_graphics_126,x:230.9,y:127.3}).wait(1).to({graphics:mask_graphics_127,x:230.9,y:129.4}).wait(1).to({graphics:mask_graphics_128,x:230.8,y:131.5}).wait(1).to({graphics:mask_graphics_129,x:230.8,y:133.5}).wait(1).to({graphics:mask_graphics_130,x:230.8,y:135.4}).wait(1).to({graphics:mask_graphics_131,x:230.8,y:137.2}).wait(1).to({graphics:mask_graphics_132,x:230.8,y:139}).wait(1).to({graphics:mask_graphics_133,x:230.9,y:140.6}).wait(1).to({graphics:mask_graphics_134,x:230.9,y:142.2}).wait(1).to({graphics:mask_graphics_135,x:230.9,y:143.7}).wait(1).to({graphics:mask_graphics_136,x:230.9,y:145.1}).wait(1).to({graphics:mask_graphics_137,x:231,y:146.5}).wait(1).to({graphics:mask_graphics_138,x:231,y:147.7}).wait(1).to({graphics:mask_graphics_139,x:231,y:148.8}).wait(1).to({graphics:mask_graphics_140,x:231,y:149.8}).wait(1).to({graphics:mask_graphics_141,x:231,y:150.7}).wait(1).to({graphics:mask_graphics_142,x:231,y:151.6}).wait(1).to({graphics:mask_graphics_143,x:230.9,y:152.3}).wait(1).to({graphics:mask_graphics_144,x:230.9,y:152.9}).wait(1).to({graphics:mask_graphics_145,x:230.9,y:153.4}).wait(1).to({graphics:mask_graphics_146,x:230.8,y:153.8}).wait(1).to({graphics:mask_graphics_147,x:230.8,y:154.1}).wait(1).to({graphics:mask_graphics_148,x:230.8,y:154.2}).wait(1).to({graphics:mask_graphics_149,x:230.8,y:154.3}).wait(76));

	// 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(25,1,1).p("A0QtTIZ9AAQHJgaDwETQDwEUgFFeQgFFgjeD1QiqC7jWAu");
	this.shape.setTransform(287.5,185.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(25,1,1).p("A0QtbIZ9AAQHJgaDwEUQDwETgFFfQgFFfjeD2QjeD1ksADI8pAA");
	this.shape_1.setTransform(287.5,185.9);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},74).to({state:[{t:this.shape_1}]},35).wait(116));

	// Layer 1 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AiBDdIAAm5IEDAAIAAG5g");
	var mask_1_graphics_1 = new cjs.Graphics().p("AiNDdIAAm5IEbAAIAAG5g");
	var mask_1_graphics_2 = new cjs.Graphics().p("AiZDdIAAm5IEzAAIAAG5g");
	var mask_1_graphics_3 = new cjs.Graphics().p("AilDdIAAm5IFLAAIAAG5g");
	var mask_1_graphics_4 = new cjs.Graphics().p("AixDdIAAm5IFjAAIAAG5g");
	var mask_1_graphics_5 = new cjs.Graphics().p("Ai9DdIAAm5IF7AAIAAG5g");
	var mask_1_graphics_6 = new cjs.Graphics().p("AjJDdIAAm5IGUAAIAAG5g");
	var mask_1_graphics_7 = new cjs.Graphics().p("AjWDdIAAm5IGtAAIAAG5g");
	var mask_1_graphics_8 = new cjs.Graphics().p("AjiDdIAAm5IHFAAIAAG5g");
	var mask_1_graphics_9 = new cjs.Graphics().p("AjuDdIAAm5IHdAAIAAG5g");
	var mask_1_graphics_10 = new cjs.Graphics().p("Aj6DdIAAm5IH1AAIAAG5g");
	var mask_1_graphics_11 = new cjs.Graphics().p("AkGDdIAAm5IINAAIAAG5g");
	var mask_1_graphics_12 = new cjs.Graphics().p("AkSDdIAAm5IIlAAIAAG5g");
	var mask_1_graphics_13 = new cjs.Graphics().p("AkeDdIAAm5II9AAIAAG5g");
	var mask_1_graphics_14 = new cjs.Graphics().p("AkqDdIAAm5IJVAAIAAG5g");
	var mask_1_graphics_15 = new cjs.Graphics().p("Ak2DdIAAm5IJtAAIAAG5g");
	var mask_1_graphics_16 = new cjs.Graphics().p("AlCDdIAAm5IKGAAIAAG5g");
	var mask_1_graphics_17 = new cjs.Graphics().p("AlODdIAAm5IKdAAIAAG5g");
	var mask_1_graphics_18 = new cjs.Graphics().p("AlbDdIAAm5IK3AAIAAG5g");
	var mask_1_graphics_19 = new cjs.Graphics().p("AlnDdIAAm5ILPAAIAAG5g");
	var mask_1_graphics_20 = new cjs.Graphics().p("AlzDdIAAm5ILnAAIAAG5g");
	var mask_1_graphics_21 = new cjs.Graphics().p("Al/DdIAAm5IL/AAIAAG5g");
	var mask_1_graphics_22 = new cjs.Graphics().p("AmLDdIAAm5IMXAAIAAG5g");
	var mask_1_graphics_23 = new cjs.Graphics().p("AmXDdIAAm5IMvAAIAAG5g");
	var mask_1_graphics_24 = new cjs.Graphics().p("AmjDdIAAm5INHAAIAAG5g");
	var mask_1_graphics_25 = new cjs.Graphics().p("AmvDdIAAm5INfAAIAAG5g");
	var mask_1_graphics_26 = new cjs.Graphics().p("Am7DdIAAm5IN3AAIAAG5g");
	var mask_1_graphics_27 = new cjs.Graphics().p("AnHDdIAAm5IOPAAIAAG5g");
	var mask_1_graphics_28 = new cjs.Graphics().p("AnTDdIAAm5IOoAAIAAG5g");
	var mask_1_graphics_29 = new cjs.Graphics().p("AngDdIAAm5IPBAAIAAG5g");
	var mask_1_graphics_30 = new cjs.Graphics().p("AnsDdIAAm5IPZAAIAAG5g");
	var mask_1_graphics_31 = new cjs.Graphics().p("An4DdIAAm5IPxAAIAAG5g");
	var mask_1_graphics_32 = new cjs.Graphics().p("AoEDdIAAm5IQJAAIAAG5g");
	var mask_1_graphics_33 = new cjs.Graphics().p("AoQDdIAAm5IQhAAIAAG5g");
	var mask_1_graphics_34 = new cjs.Graphics().p("AocDdIAAm5IQ5AAIAAG5g");
	var mask_1_graphics_35 = new cjs.Graphics().p("AooDdIAAm5IRRAAIAAG5g");
	var mask_1_graphics_36 = new cjs.Graphics().p("Ao0DdIAAm5IRpAAIAAG5g");
	var mask_1_graphics_37 = new cjs.Graphics().p("ApADdIAAm5ISBAAIAAG5g");
	var mask_1_graphics_38 = new cjs.Graphics().p("ApMDdIAAm5ISaAAIAAG5g");
	var mask_1_graphics_39 = new cjs.Graphics().p("ApYDdIAAm5ISxAAIAAG5g");
	var mask_1_graphics_40 = new cjs.Graphics().p("AplDdIAAm5ITLAAIAAG5g");
	var mask_1_graphics_41 = new cjs.Graphics().p("ApxDdIAAm5ITjAAIAAG5g");
	var mask_1_graphics_42 = new cjs.Graphics().p("Ap9DdIAAm5IT7AAIAAG5g");
	var mask_1_graphics_43 = new cjs.Graphics().p("AqJDdIAAm5IUTAAIAAG5g");
	var mask_1_graphics_44 = new cjs.Graphics().p("AqVDdIAAm5IUrAAIAAG5g");
	var mask_1_graphics_45 = new cjs.Graphics().p("AqhDdIAAm5IVDAAIAAG5g");
	var mask_1_graphics_46 = new cjs.Graphics().p("AqtDdIAAm5IVbAAIAAG5g");
	var mask_1_graphics_47 = new cjs.Graphics().p("Aq5DdIAAm5IVzAAIAAG5g");
	var mask_1_graphics_48 = new cjs.Graphics().p("ArFDdIAAm5IWMAAIAAG5g");
	var mask_1_graphics_49 = new cjs.Graphics().p("ArRDdIAAm5IWjAAIAAG5g");
	var mask_1_graphics_50 = new cjs.Graphics().p("ArdDdIAAm5IW7AAIAAG5g");
	var mask_1_graphics_51 = new cjs.Graphics().p("ArqDdIAAm5IXVAAIAAG5g");
	var mask_1_graphics_52 = new cjs.Graphics().p("Ar2DdIAAm5IXtAAIAAG5g");
	var mask_1_graphics_53 = new cjs.Graphics().p("AsCDdIAAm5IYFAAIAAG5g");
	var mask_1_graphics_54 = new cjs.Graphics().p("AsODdIAAm5IYdAAIAAG5g");
	var mask_1_graphics_55 = new cjs.Graphics().p("AsaDdIAAm5IY1AAIAAG5g");
	var mask_1_graphics_56 = new cjs.Graphics().p("AsmDdIAAm5IZNAAIAAG5g");
	var mask_1_graphics_57 = new cjs.Graphics().p("AsyDdIAAm5IZlAAIAAG5g");
	var mask_1_graphics_58 = new cjs.Graphics().p("As+DdIAAm5IZ9AAIAAG5g");
	var mask_1_graphics_59 = new cjs.Graphics().p("AtKDdIAAm5IaVAAIAAG5g");
	var mask_1_graphics_60 = new cjs.Graphics().p("AtWDdIAAm5IauAAIAAG5g");
	var mask_1_graphics_61 = new cjs.Graphics().p("AtiDdIAAm5IbGAAIAAG5g");
	var mask_1_graphics_62 = new cjs.Graphics().p("AtvDdIAAm5IbfAAIAAG5g");
	var mask_1_graphics_63 = new cjs.Graphics().p("At7DdIAAm5Ib3AAIAAG5g");
	var mask_1_graphics_64 = new cjs.Graphics().p("AuHDdIAAm5IcPAAIAAG5g");
	var mask_1_graphics_65 = new cjs.Graphics().p("AuTDdIAAm5IcnAAIAAG5g");
	var mask_1_graphics_66 = new cjs.Graphics().p("AufDdIAAm5Ic/AAIAAG5g");
	var mask_1_graphics_67 = new cjs.Graphics().p("AurDdIAAm5IdXAAIAAG5g");
	var mask_1_graphics_68 = new cjs.Graphics().p("Au3DdIAAm5IdvAAIAAG5g");
	var mask_1_graphics_69 = new cjs.Graphics().p("AvDDdIAAm5IeHAAIAAG5g");
	var mask_1_graphics_70 = new cjs.Graphics().p("AvPDdIAAm5IegAAIAAG5g");
	var mask_1_graphics_71 = new cjs.Graphics().p("AvbDdIAAm5Ie3AAIAAG5g");
	var mask_1_graphics_72 = new cjs.Graphics().p("AvnDdIAAm5IfPAAIAAG5g");
	var mask_1_graphics_73 = new cjs.Graphics().p("Av0DdIAAm5IfpAAIAAG5g");
	var mask_1_graphics_74 = new cjs.Graphics().p("AwADdIAAm5MAgBAAAIAAG5g");
	var mask_1_graphics_149 = new cjs.Graphics().p("APZQvIAAm6IAyAAIAAG6gAwKp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_150 = new cjs.Graphics().p("APAQvIAAm6IBLAAIAAG6gAwJp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_151 = new cjs.Graphics().p("AOnQvIAAm6IBkAAIAAG6gAwJp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_152 = new cjs.Graphics().p("AOOQvIAAm6IB8AAIAAG6gAwJp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_153 = new cjs.Graphics().p("AN0QvIAAm6ICWAAIAAG6gAwJp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_154 = new cjs.Graphics().p("ANbQvIAAm6ICvAAIAAG6gAwJp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_155 = new cjs.Graphics().p("ANCQvIAAm6IDIAAIAAG6gAwJp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_156 = new cjs.Graphics().p("AMpQvIAAm6IDhAAIAAG6gAwJp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_157 = new cjs.Graphics().p("AMPQvIAAm6ID7AAIAAG6gAwJp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_158 = new cjs.Graphics().p("AL3QvIAAm6IESAAIAAG6gAwIp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_159 = new cjs.Graphics().p("ALdQvIAAm6IEsAAIAAG6gAwIp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_160 = new cjs.Graphics().p("ALEQvIAAm6IFFAAIAAG6gAwIp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_161 = new cjs.Graphics().p("AKrQvIAAm6IFeAAIAAG6gAwIp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_162 = new cjs.Graphics().p("AKRQvIAAm6IF4AAIAAG6gAwIp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_163 = new cjs.Graphics().p("AJ4QvIAAm6IGRAAIAAG6gAwIp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_164 = new cjs.Graphics().p("AJfQvIAAm6IGqAAIAAG6gAwIp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_165 = new cjs.Graphics().p("AJGQvIAAm6IHCAAIAAG6gAwHp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_166 = new cjs.Graphics().p("AIsQvIAAm6IHcAAIAAG6gAwHp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_167 = new cjs.Graphics().p("AITQvIAAm6IH1AAIAAG6gAwHp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_168 = new cjs.Graphics().p("AH6QvIAAm6IIOAAIAAG6gAwHp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_169 = new cjs.Graphics().p("AHhQvIAAm6IInAAIAAG6gAwHp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_170 = new cjs.Graphics().p("AHIQvIAAm6IJAAAIAAG6gAwHp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_171 = new cjs.Graphics().p("AGuQvIAAm6IJaAAIAAG6gAwHp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_172 = new cjs.Graphics().p("AGVQvIAAm6IJzAAIAAG6gAwHp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_173 = new cjs.Graphics().p("AF8QvIAAm6IKLAAIAAG6gAwGp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_174 = new cjs.Graphics().p("AFjQvIAAm6IKkAAIAAG6gAwGp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_175 = new cjs.Graphics().p("AFKQvIAAm6IK9AAIAAG6gAwGp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_176 = new cjs.Graphics().p("AEwQvIAAm6ILXAAIAAG6gAwGp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_177 = new cjs.Graphics().p("AEXQvIAAm6ILwAAIAAG6gAwGp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_178 = new cjs.Graphics().p("AD9QvIAAm6IMKAAIAAG6gAwGp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_179 = new cjs.Graphics().p("ADlQvIAAm6IMiAAIAAG6gAwGp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_180 = new cjs.Graphics().p("ADMQvIAAm6IM7AAIAAG6gAwFp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_181 = new cjs.Graphics().p("ACyQvIAAm6INVAAIAAG6gAwFp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_182 = new cjs.Graphics().p("ACZQvIAAm6INtAAIAAG6gAwFp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_183 = new cjs.Graphics().p("ACAQvIAAm6IOGAAIAAG6gAwFp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_184 = new cjs.Graphics().p("ABmQvIAAm6IOgAAIAAG6gAwFp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_185 = new cjs.Graphics().p("ABNQvIAAm6IO5AAIAAG6gAwFp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_186 = new cjs.Graphics().p("AA0QvIAAm6IPSAAIAAG6gAwFp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_187 = new cjs.Graphics().p("AAbQvIAAm6IPrAAIAAG6gAwFp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_188 = new cjs.Graphics().p("AABQvIAAm6IQFAAIAAG6gAwEp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_189 = new cjs.Graphics().p("AgWQvIAAm6IQcAAIAAG6gAwEp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_190 = new cjs.Graphics().p("AgwQvIAAm6IQ1AAIAAG6gAwEp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_191 = new cjs.Graphics().p("AhJQvIAAm6IROAAIAAG6gAwEp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_192 = new cjs.Graphics().p("AhiQvIAAm6IRnAAIAAG6gAwEp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_193 = new cjs.Graphics().p("Ah7QvIAAm6ISAAAIAAG6gAwEp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_194 = new cjs.Graphics().p("AiVQvIAAm6ISaAAIAAG6gAwEp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_195 = new cjs.Graphics().p("AitQvIAAm6ISxAAIAAG6gAwDp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_196 = new cjs.Graphics().p("AjHQvIAAm6ITLAAIAAG6gAwDp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_197 = new cjs.Graphics().p("AjgQvIAAm6ITkAAIAAG6gAwDp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_198 = new cjs.Graphics().p("Aj6QvIAAm6IT+AAIAAG6gAwDp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_199 = new cjs.Graphics().p("AkSQvIAAm6IUWAAIAAG6gAwDp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_200 = new cjs.Graphics().p("AksQvIAAm6IUwAAIAAG6gAwDp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_201 = new cjs.Graphics().p("AlFQvIAAm6IVJAAIAAG6gAwDp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_202 = new cjs.Graphics().p("AleQvIAAm6IViAAIAAG6gAwDp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_203 = new cjs.Graphics().p("Al4QvIAAm6IV7AAIAAG6gAwCp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_204 = new cjs.Graphics().p("AmRQvIAAm6IWUAAIAAG6gAwCp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_205 = new cjs.Graphics().p("AmqQvIAAm6IWtAAIAAG6gAwCp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_206 = new cjs.Graphics().p("AnDQvIAAm6IXGAAIAAG6gAwCp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_207 = new cjs.Graphics().p("AndQvIAAm6IXgAAIAAG6gAwCp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_208 = new cjs.Graphics().p("An2QvIAAm6IX5AAIAAG6gAwCp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_209 = new cjs.Graphics().p("AoPQvIAAm6IYSAAIAAG6gAwCp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_210 = new cjs.Graphics().p("AooQvIAAm6IYrAAIAAG6gAwBp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_211 = new cjs.Graphics().p("ApBQvIAAm6IZEAAIAAG6gAwBp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_212 = new cjs.Graphics().p("ApbQvIAAm6IZdAAIAAG6gAwBp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_213 = new cjs.Graphics().p("Ap0QvIAAm6IZ2AAIAAG6gAwBp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_214 = new cjs.Graphics().p("AqNQvIAAm6IaPAAIAAG6gAwBp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_215 = new cjs.Graphics().p("AqmQvIAAm6IaoAAIAAG6gAwBp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_216 = new cjs.Graphics().p("Aq/QvIAAm6IbBAAIAAG6gAwBp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_217 = new cjs.Graphics().p("ArZQvIAAm6IbbAAIAAG6gAwBp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_218 = new cjs.Graphics().p("AryQvIAAm6Ib0AAIAAG6gAwAp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_219 = new cjs.Graphics().p("AsLQvIAAm6IcNAAIAAG6gAwAp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_220 = new cjs.Graphics().p("AskQvIAAm6IclAAIAAG6gAwAp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_221 = new cjs.Graphics().p("As+QvIAAm6Ic/AAIAAG6gAwAp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_222 = new cjs.Graphics().p("AtXQvIAAm6IdYAAIAAG6gAwAp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_223 = new cjs.Graphics().p("AtwQvIAAm6IdxAAIAAG6gAwAp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_224 = new cjs.Graphics().p("AuJQvIAAm6IeKAAIAAG6gAwAp0IAAm6MAgBAAAIAAG6g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:146,y:99.1}).wait(1).to({graphics:mask_1_graphics_1,x:147.2,y:99.1}).wait(1).to({graphics:mask_1_graphics_2,x:148.4,y:99.1}).wait(1).to({graphics:mask_1_graphics_3,x:149.6,y:99.1}).wait(1).to({graphics:mask_1_graphics_4,x:150.8,y:99.1}).wait(1).to({graphics:mask_1_graphics_5,x:152.1,y:99.1}).wait(1).to({graphics:mask_1_graphics_6,x:153.3,y:99.1}).wait(1).to({graphics:mask_1_graphics_7,x:154.5,y:99.1}).wait(1).to({graphics:mask_1_graphics_8,x:155.7,y:99.1}).wait(1).to({graphics:mask_1_graphics_9,x:156.9,y:99.1}).wait(1).to({graphics:mask_1_graphics_10,x:158.1,y:99.1}).wait(1).to({graphics:mask_1_graphics_11,x:159.3,y:99.1}).wait(1).to({graphics:mask_1_graphics_12,x:160.5,y:99.1}).wait(1).to({graphics:mask_1_graphics_13,x:161.7,y:99.1}).wait(1).to({graphics:mask_1_graphics_14,x:162.9,y:99.1}).wait(1).to({graphics:mask_1_graphics_15,x:164.1,y:99.1}).wait(1).to({graphics:mask_1_graphics_16,x:165.4,y:99.1}).wait(1).to({graphics:mask_1_graphics_17,x:166.6,y:99.1}).wait(1).to({graphics:mask_1_graphics_18,x:167.8,y:99.1}).wait(1).to({graphics:mask_1_graphics_19,x:169,y:99.1}).wait(1).to({graphics:mask_1_graphics_20,x:170.2,y:99.1}).wait(1).to({graphics:mask_1_graphics_21,x:171.4,y:99.1}).wait(1).to({graphics:mask_1_graphics_22,x:172.6,y:99.1}).wait(1).to({graphics:mask_1_graphics_23,x:173.8,y:99.1}).wait(1).to({graphics:mask_1_graphics_24,x:175,y:99.1}).wait(1).to({graphics:mask_1_graphics_25,x:176.2,y:99.1}).wait(1).to({graphics:mask_1_graphics_26,x:177.4,y:99.1}).wait(1).to({graphics:mask_1_graphics_27,x:178.7,y:99.1}).wait(1).to({graphics:mask_1_graphics_28,x:179.9,y:99.1}).wait(1).to({graphics:mask_1_graphics_29,x:181.1,y:99.1}).wait(1).to({graphics:mask_1_graphics_30,x:182.3,y:99.1}).wait(1).to({graphics:mask_1_graphics_31,x:183.5,y:99.1}).wait(1).to({graphics:mask_1_graphics_32,x:184.7,y:99.1}).wait(1).to({graphics:mask_1_graphics_33,x:185.9,y:99.1}).wait(1).to({graphics:mask_1_graphics_34,x:187.1,y:99.1}).wait(1).to({graphics:mask_1_graphics_35,x:188.3,y:99.1}).wait(1).to({graphics:mask_1_graphics_36,x:189.5,y:99.1}).wait(1).to({graphics:mask_1_graphics_37,x:190.8,y:99.1}).wait(1).to({graphics:mask_1_graphics_38,x:192,y:99.1}).wait(1).to({graphics:mask_1_graphics_39,x:193.2,y:99.1}).wait(1).to({graphics:mask_1_graphics_40,x:194.4,y:99.1}).wait(1).to({graphics:mask_1_graphics_41,x:195.6,y:99.1}).wait(1).to({graphics:mask_1_graphics_42,x:196.8,y:99.1}).wait(1).to({graphics:mask_1_graphics_43,x:198,y:99.1}).wait(1).to({graphics:mask_1_graphics_44,x:199.2,y:99.1}).wait(1).to({graphics:mask_1_graphics_45,x:200.4,y:99.1}).wait(1).to({graphics:mask_1_graphics_46,x:201.6,y:99.1}).wait(1).to({graphics:mask_1_graphics_47,x:202.8,y:99.1}).wait(1).to({graphics:mask_1_graphics_48,x:204.1,y:99.1}).wait(1).to({graphics:mask_1_graphics_49,x:205.3,y:99.1}).wait(1).to({graphics:mask_1_graphics_50,x:206.5,y:99.1}).wait(1).to({graphics:mask_1_graphics_51,x:207.7,y:99.1}).wait(1).to({graphics:mask_1_graphics_52,x:208.9,y:99.1}).wait(1).to({graphics:mask_1_graphics_53,x:210.1,y:99.1}).wait(1).to({graphics:mask_1_graphics_54,x:211.3,y:99.1}).wait(1).to({graphics:mask_1_graphics_55,x:212.5,y:99.1}).wait(1).to({graphics:mask_1_graphics_56,x:213.7,y:99.1}).wait(1).to({graphics:mask_1_graphics_57,x:214.9,y:99.1}).wait(1).to({graphics:mask_1_graphics_58,x:216.1,y:99.1}).wait(1).to({graphics:mask_1_graphics_59,x:217.4,y:99.1}).wait(1).to({graphics:mask_1_graphics_60,x:218.6,y:99.1}).wait(1).to({graphics:mask_1_graphics_61,x:219.8,y:99.1}).wait(1).to({graphics:mask_1_graphics_62,x:221,y:99.1}).wait(1).to({graphics:mask_1_graphics_63,x:222.2,y:99.1}).wait(1).to({graphics:mask_1_graphics_64,x:223.4,y:99.1}).wait(1).to({graphics:mask_1_graphics_65,x:224.6,y:99.1}).wait(1).to({graphics:mask_1_graphics_66,x:225.8,y:99.1}).wait(1).to({graphics:mask_1_graphics_67,x:227,y:99.1}).wait(1).to({graphics:mask_1_graphics_68,x:228.2,y:99.1}).wait(1).to({graphics:mask_1_graphics_69,x:229.4,y:99.1}).wait(1).to({graphics:mask_1_graphics_70,x:230.7,y:99.1}).wait(1).to({graphics:mask_1_graphics_71,x:231.9,y:99.1}).wait(1).to({graphics:mask_1_graphics_72,x:233.1,y:99.1}).wait(1).to({graphics:mask_1_graphics_73,x:234.3,y:99.1}).wait(1).to({graphics:mask_1_graphics_74,x:235.5,y:99.1}).wait(75).to({graphics:mask_1_graphics_149,x:236.5,y:184.1}).wait(1).to({graphics:mask_1_graphics_150,x:236.5,y:184.1}).wait(1).to({graphics:mask_1_graphics_151,x:236.5,y:184.1}).wait(1).to({graphics:mask_1_graphics_152,x:236.4,y:184.1}).wait(1).to({graphics:mask_1_graphics_153,x:236.4,y:184.1}).wait(1).to({graphics:mask_1_graphics_154,x:236.4,y:184.1}).wait(1).to({graphics:mask_1_graphics_155,x:236.4,y:184.1}).wait(1).to({graphics:mask_1_graphics_156,x:236.4,y:184.1}).wait(1).to({graphics:mask_1_graphics_157,x:236.4,y:184.1}).wait(1).to({graphics:mask_1_graphics_158,x:236.4,y:184.1}).wait(1).to({graphics:mask_1_graphics_159,x:236.4,y:184.1}).wait(1).to({graphics:mask_1_graphics_160,x:236.3,y:184.1}).wait(1).to({graphics:mask_1_graphics_161,x:236.3,y:184.1}).wait(1).to({graphics:mask_1_graphics_162,x:236.3,y:184.1}).wait(1).to({graphics:mask_1_graphics_163,x:236.3,y:184.1}).wait(1).to({graphics:mask_1_graphics_164,x:236.3,y:184.1}).wait(1).to({graphics:mask_1_graphics_165,x:236.3,y:184.1}).wait(1).to({graphics:mask_1_graphics_166,x:236.3,y:184.1}).wait(1).to({graphics:mask_1_graphics_167,x:236.2,y:184.1}).wait(1).to({graphics:mask_1_graphics_168,x:236.2,y:184.1}).wait(1).to({graphics:mask_1_graphics_169,x:236.2,y:184.1}).wait(1).to({graphics:mask_1_graphics_170,x:236.2,y:184.1}).wait(1).to({graphics:mask_1_graphics_171,x:236.2,y:184.1}).wait(1).to({graphics:mask_1_graphics_172,x:236.2,y:184.1}).wait(1).to({graphics:mask_1_graphics_173,x:236.2,y:184.1}).wait(1).to({graphics:mask_1_graphics_174,x:236.2,y:184.1}).wait(1).to({graphics:mask_1_graphics_175,x:236.1,y:184.1}).wait(1).to({graphics:mask_1_graphics_176,x:236.1,y:184.1}).wait(1).to({graphics:mask_1_graphics_177,x:236.1,y:184.1}).wait(1).to({graphics:mask_1_graphics_178,x:236.1,y:184.1}).wait(1).to({graphics:mask_1_graphics_179,x:236.1,y:184.1}).wait(1).to({graphics:mask_1_graphics_180,x:236.1,y:184.1}).wait(1).to({graphics:mask_1_graphics_181,x:236.1,y:184.1}).wait(1).to({graphics:mask_1_graphics_182,x:236,y:184.1}).wait(1).to({graphics:mask_1_graphics_183,x:236,y:184.1}).wait(1).to({graphics:mask_1_graphics_184,x:236,y:184.1}).wait(1).to({graphics:mask_1_graphics_185,x:236,y:184.1}).wait(1).to({graphics:mask_1_graphics_186,x:236,y:184.1}).wait(1).to({graphics:mask_1_graphics_187,x:236,y:184.1}).wait(1).to({graphics:mask_1_graphics_188,x:236,y:184.1}).wait(1).to({graphics:mask_1_graphics_189,x:236,y:184.1}).wait(1).to({graphics:mask_1_graphics_190,x:235.9,y:184.1}).wait(1).to({graphics:mask_1_graphics_191,x:235.9,y:184.1}).wait(1).to({graphics:mask_1_graphics_192,x:235.9,y:184.1}).wait(1).to({graphics:mask_1_graphics_193,x:235.9,y:184.1}).wait(1).to({graphics:mask_1_graphics_194,x:235.9,y:184.1}).wait(1).to({graphics:mask_1_graphics_195,x:235.9,y:184.1}).wait(1).to({graphics:mask_1_graphics_196,x:235.9,y:184.1}).wait(1).to({graphics:mask_1_graphics_197,x:235.8,y:184.1}).wait(1).to({graphics:mask_1_graphics_198,x:235.8,y:184.1}).wait(1).to({graphics:mask_1_graphics_199,x:235.8,y:184.1}).wait(1).to({graphics:mask_1_graphics_200,x:235.8,y:184.1}).wait(1).to({graphics:mask_1_graphics_201,x:235.8,y:184.1}).wait(1).to({graphics:mask_1_graphics_202,x:235.8,y:184.1}).wait(1).to({graphics:mask_1_graphics_203,x:235.8,y:184.1}).wait(1).to({graphics:mask_1_graphics_204,x:235.8,y:184.1}).wait(1).to({graphics:mask_1_graphics_205,x:235.7,y:184.1}).wait(1).to({graphics:mask_1_graphics_206,x:235.7,y:184.1}).wait(1).to({graphics:mask_1_graphics_207,x:235.7,y:184.1}).wait(1).to({graphics:mask_1_graphics_208,x:235.7,y:184.1}).wait(1).to({graphics:mask_1_graphics_209,x:235.7,y:184.1}).wait(1).to({graphics:mask_1_graphics_210,x:235.7,y:184.1}).wait(1).to({graphics:mask_1_graphics_211,x:235.7,y:184.1}).wait(1).to({graphics:mask_1_graphics_212,x:235.6,y:184.1}).wait(1).to({graphics:mask_1_graphics_213,x:235.6,y:184.1}).wait(1).to({graphics:mask_1_graphics_214,x:235.6,y:184.1}).wait(1).to({graphics:mask_1_graphics_215,x:235.6,y:184.1}).wait(1).to({graphics:mask_1_graphics_216,x:235.6,y:184.1}).wait(1).to({graphics:mask_1_graphics_217,x:235.6,y:184.1}).wait(1).to({graphics:mask_1_graphics_218,x:235.6,y:184.1}).wait(1).to({graphics:mask_1_graphics_219,x:235.6,y:184.1}).wait(1).to({graphics:mask_1_graphics_220,x:235.5,y:184.1}).wait(1).to({graphics:mask_1_graphics_221,x:235.5,y:184.1}).wait(1).to({graphics:mask_1_graphics_222,x:235.5,y:184.1}).wait(1).to({graphics:mask_1_graphics_223,x:235.5,y:184.1}).wait(1).to({graphics:mask_1_graphics_224,x:235.5,y:184.1}).wait(1));

	// 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(25,1,1).p("A0QtbIZ9AAQHJgaDwEUQDwETgFFfQgFFfjeD2QjeD1ksADI8pAA");
	this.shape_2.setTransform(287.5,185.9);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(225));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(145.3,87.3,13.7,34);


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

	// Layer 5
	this.instance = new lib.triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-71.6,-51.2,1,1,-90,0,0,0.4,-17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.5,scaleX:1,scaleY:1,rotation:-88.8,guide:{path:[-71.6,-50.9,-22.3,-51,26.9,-51]}},49).to({regX:0.6,rotation:-7.5,guide:{path:[27.1,-51,28.8,-51.1,30.5,-51.2,30.8,-51.2,31.1,-51.2,49.4,-51.2,62.4,-37.7,70.4,-29.3,73.5,-19]}},22).to({scaleX:1,scaleY:1,rotation:33.8,guide:{path:[73.4,-19,75.3,-12.4,75.3,-5.1,75.3,3.9,72.8,11.3]}},11).to({regY:-17.5,rotation:64.5,guide:{path:[72.7,11.4,69.9,19.5,63.9,25.7,61.7,27.8,59.7,29.7]}},10).to({regX:0.7,rotation:77.2,guide:{path:[59.7,29.6,55.8,33,52.2,35.3]}},5).to({regX:0.4,regY:-17.4,scaleX:1,scaleY:1,rotation:90,guide:{path:[52.2,35.3,47.7,38.1,43.5,39.1]}},7).wait(1));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_44 = new cjs.Graphics().p("AiPHsQjMjMAAkgQAAkfDMjMQDLjMEgAAIAAVvQkgAAjLjMg");
	var mask_graphics_45 = new cjs.Graphics().p("Ai6HSQjBjWAPkfQAPkgDWjBQDVjBEgAPIhIVuQkggPjAjXg");
	var mask_graphics_46 = new cjs.Graphics().p("AjkG4Qi1jgAekdQAekfDgi2QDfi1EfAeIiRVoQkegei2jhg");
	var mask_graphics_47 = new cjs.Graphics().p("AkMGeQipjpAtkcQAtkdDpipQDoiqEdAtIjZVeQkcgtiqjpg");
	var mask_graphics_48 = new cjs.Graphics().p("AkyGEQidjyA8kZQA7kaDyieQDxidEaA8IkhVRQkZg7idjyg");
	var mask_graphics_49 = new cjs.Graphics().p("AlWFpQiRj5BLkWQBKkWD5iRQD5iQEXBKIlnVAQkWhKiQj6g");
	var mask_graphics_50 = new cjs.Graphics().p("Al5FPQiDkBBZkRQBYkTEBiDQEAiDESBZImsUrQkShYiDkBg");
	var mask_graphics_51 = new cjs.Graphics().p("AmaE0Qh1kHBnkMQBnkOEHh2QEGh1ENBnInwUTQkNhnh2kHg");
	var mask_graphics_52 = new cjs.Graphics().p("Am4EZQhokNB1kGQB1kIEMhoQENhnEHB0IozT4QkIh0hnkOg");
	var mask_graphics_53 = new cjs.Graphics().p("AnVD/QhakRCDkBQCCkBEShaQERhaECCDIp1TZQkBiDhakSg");
	var mask_graphics_54 = new cjs.Graphics().p("AnwDlQhLkWCQj6QCQj6EWhLQEVhLD6CQIq0S2Qj6iQhMkWg");
	var mask_graphics_55 = new cjs.Graphics().p("AoIDLQg8kZCcjyQCdjzEZg8QEag9DyCdIrzSQQjyicg9kag");
	var mask_graphics_56 = new cjs.Graphics().p("AoeCxQgtkcCojpQCpjqEcguQEdguDpCpIsuRoQjqipgukdg");
	var mask_graphics_57 = new cjs.Graphics().p("AoxCYQgfkeC1jgQC1jhEdgfQEfgfDhC1ItpQ8Qjgi1gfkfg");
	var mask_graphics_58 = new cjs.Graphics().p("ApCB/QgQkfDAjWQDBjXEfgQQEggQDWDAIufQNQjXjBgQkgg");
	var mask_graphics_59 = new cjs.Graphics().p("ApQBnQgBkfDLjMQDLjNEggBQEggBDMDMIvUPaQjNjLAAkhg");
	var mask_graphics_60 = new cjs.Graphics().p("ApcBQQAOkfDWjBQDVjCEfAOQEgAODCDWIwHOmQjBjWAOkgg");
	var mask_graphics_61 = new cjs.Graphics().p("AplA6QAdkeDgi2QDfi2EeAdQEfAdC2DfIw2NvQi2jfAdkfg");
	var mask_graphics_62 = new cjs.Graphics().p("AprAkQAskbDoirQDpiqEcAsQEdAsCqDpIxiM1QiqjoAskeg");
	var mask_graphics_63 = new cjs.Graphics().p("ApvAQQA7kZDxieQDxieEaA6QEaA7CeDyIyML6QiejyA7kag");
	var mask_graphics_64 = new cjs.Graphics().p("ApwgDQBKkXD5iRQD5iREWBJQEWBKCSD5IyyK8QiRj5BJkWg");
	var mask_graphics_65 = new cjs.Graphics().p("ApugWQBYkSEAiEQEAiEESBYQETBYCEEAIzVJ8QiEkABYkSg");
	var mask_graphics_66 = new cjs.Graphics().p("ApqgoQBmkNEHh2QEGh3ENBmQEOBmB3EHIz1I7Qh2kHBmkNg");
	var mask_graphics_67 = new cjs.Graphics().p("Apjg4QB0kIEMhpQEMhoEIBzQEIB1BpEMI0RH4QhpkMB1kHg");
	var mask_graphics_68 = new cjs.Graphics().p("ApahIQCBkCEShaQERhbECCCQEBCCBbERI0pG0QhbkRCCkBg");
	var mask_graphics_69 = new cjs.Graphics().p("ApOhXQCOj6EXhMQEVhMD6COQD7CPBMEWI0+FvQhMkWCPj6g");
	var mask_graphics_70 = new cjs.Graphics().p("ApAhlQCcjyEZg+QEZg9DzCcQDyCcA+EYI1QEpQg9kaCcjyg");
	var mask_graphics_71 = new cjs.Graphics().p("AovhxQCojqEcgvQEcguDqCoQDqCoAvEbI1dDiQgvkdCpjpg");
	var mask_graphics_72 = new cjs.Graphics().p("Aoch8QC0jhEfggQEdggDiC0QDhC1AfEdI1nCaQgfkfC0jgg");
	var mask_graphics_73 = new cjs.Graphics().p("AoGiGQC/jXEggRQEfgRDYDAQDXC/AREfI1tBRQgRkfDAjXg");
	var mask_graphics_74 = new cjs.Graphics().p("AnuiOQDKjNEhgCQEfgCDNDLQDNDJACEhI1vAIQgCkgDLjMg");
	var mask_graphics_75 = new cjs.Graphics().p("Aq3EsQANkgDWjBQDVjDEfAOQEgANDCDVQDCDUgNEgg");
	var mask_graphics_76 = new cjs.Graphics().p("Aq2D2QAdkeDfi3QDei3EeAcQEfAdC3DeQC3DegcEfg");
	var mask_graphics_77 = new cjs.Graphics().p("Aq0DAQArkcDpirQDoirEcArQEdArCrDoQCrDogrEdg");
	var mask_graphics_78 = new cjs.Graphics().p("AqxCLQA6kaDxifQDxieEZA6QEbA6CfDwQCeDwg6Ebg");
	var mask_graphics_79 = new cjs.Graphics().p("AqtBWQBJkWD5iSQD4iSEWBJQEXBICTD5QCRD4hIEXg");
	var mask_graphics_80 = new cjs.Graphics().p("AqoAiQBXkSEAiFQEAiFESBXQETBXCFEAQCFD/hYETg");
	var mask_graphics_81 = new cjs.Graphics().p("AqigRQBlkOEHh3QEGh3ENBlQEOBlB4EHQB3EFhlEOg");
	var mask_graphics_82 = new cjs.Graphics().p("AqbhDQBzkIENhqQEMhpEHBzQEIBzBqEMQBpEMhzEIg");
	var mask_graphics_83 = new cjs.Graphics().p("AqUh1QCBkBEShcQEQhbECCBQECCBBcERQBbERiBECg");
	var mask_graphics_84 = new cjs.Graphics().p("AqLilQCOj7EWhNQEVhMD7COQD7COBNEWQBNEViOD7g");
	var mask_graphics_85 = new cjs.Graphics().p("AqBjUQCbjzEZg+QEZg+DzCbQDzCbA/EYQA+EaibDzg");
	var mask_graphics_86 = new cjs.Graphics().p("Ap3kBQCnjrEdgvQEbgwDrCoQDrCnAwEcQAvEcioDrg");
	var mask_graphics_87 = new cjs.Graphics().p("ApsktQC0jhEeghQEeghDhC0QDiCzAhEeQAgEeizDig");
	var mask_graphics_88 = new cjs.Graphics().p("ApglXQC/jYEggRQEfgSDYC/QDYC/ASEfQAREgi/DYg");
	var mask_graphics_89 = new cjs.Graphics().p("ApUl/QDKjNEhgDQEfgDDODKQDODKADEgQACEgjKDOg");
	var mask_graphics_90 = new cjs.Graphics().p("ApHmkQDVjDEgAMQEfANDDDUQDDDUgMEgQgNEgjUDDg");
	var mask_graphics_91 = new cjs.Graphics().p("Ao5nIQDei4EgAcQEdAbC4DfQC4DegbEeQgcEfjeC4g");
	var mask_graphics_92 = new cjs.Graphics().p("AornpQDoisEdAqQEcArCsDnQCsDogqEcQgrEdjnCsg");
	var mask_graphics_93 = new cjs.Graphics().p("AocoIQDwigEbA5QEZA5CgDxQCfDwg5EaQg5EajwCgg");
	var mask_graphics_94 = new cjs.Graphics().p("AoNolQD4iTEXBIQEXBICSD4QCTD4hHEXQhIEXj5CTg");
	var mask_graphics_95 = new cjs.Graphics().p("An9o/QD/iGETBWQESBXCGD/QCGEAhWESQhXETj/CGg");
	var mask_graphics_96 = new cjs.Graphics().p("AntpXQEGh4EOBkQEOBlB4EGQB4EFhkEOQhlEPkGB4g");
	var mask_graphics_97 = new cjs.Graphics().p("AncptQEMhqEIBzQEIByBqEMQBqELhyEJQhyEJkMBqg");
	var mask_graphics_98 = new cjs.Graphics().p("AnAp/QERhdECCBQECCABcERQBcEQiAEDQiAECkQBcg");
	var mask_graphics_99 = new cjs.Graphics().p("AmdqQQEVhND7CNQD7CNBOEWQBOEViOD7QiND7kVBOg");
	var mask_graphics_100 = new cjs.Graphics().p("Al6qdQEZg/DzCaQD0CaA/EaQA/EYiaD0QibDzkYA/g");
	var mask_graphics_101 = new cjs.Graphics().p("AlWqoQEcgwDrCnQDrCmAwEdQAwEbimDrQinDrkbAxg");
	var mask_graphics_102 = new cjs.Graphics().p("AkyqwQEeghDiCzQDiCyAhEfQAiEdizDiQizDjkdAhg");
	var mask_graphics_103 = new cjs.Graphics().p("AkOq1QEfgSDZC+QDYC+ATEgQASEfi+DZQi+DYkfATg");
	var mask_graphics_104 = new cjs.Graphics().p("Ajpq3QEfgEDPDKQDODJADEgQAEEgjJDOQjKDPkfADg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_graphics_44,x:-10.3,y:0.8}).wait(1).to({graphics:mask_graphics_45,x:-8.5,y:0.7}).wait(1).to({graphics:mask_graphics_46,x:-6.7,y:0.5}).wait(1).to({graphics:mask_graphics_47,x:-4.9,y:0.3}).wait(1).to({graphics:mask_graphics_48,x:-3.1,y:-0.1}).wait(1).to({graphics:mask_graphics_49,x:-1.4,y:-0.5}).wait(1).to({graphics:mask_graphics_50,x:0.3,y:-1}).wait(1).to({graphics:mask_graphics_51,x:2,y:-1.6}).wait(1).to({graphics:mask_graphics_52,x:3.7,y:-2.3}).wait(1).to({graphics:mask_graphics_53,x:5.4,y:-3.1}).wait(1).to({graphics:mask_graphics_54,x:7,y:-3.9}).wait(1).to({graphics:mask_graphics_55,x:8.5,y:-4.9}).wait(1).to({graphics:mask_graphics_56,x:10.1,y:-5.9}).wait(1).to({graphics:mask_graphics_57,x:11.5,y:-7}).wait(1).to({graphics:mask_graphics_58,x:12.9,y:-8.1}).wait(1).to({graphics:mask_graphics_59,x:14.2,y:-9.4}).wait(1).to({graphics:mask_graphics_60,x:15.5,y:-10.7}).wait(1).to({graphics:mask_graphics_61,x:16.7,y:-12.1}).wait(1).to({graphics:mask_graphics_62,x:17.7,y:-13.5}).wait(1).to({graphics:mask_graphics_63,x:18.8,y:-15}).wait(1).to({graphics:mask_graphics_64,x:19.7,y:-16.6}).wait(1).to({graphics:mask_graphics_65,x:20.5,y:-18.2}).wait(1).to({graphics:mask_graphics_66,x:21.3,y:-19.8}).wait(1).to({graphics:mask_graphics_67,x:22,y:-21.5}).wait(1).to({graphics:mask_graphics_68,x:22.6,y:-23.2}).wait(1).to({graphics:mask_graphics_69,x:23.2,y:-24.9}).wait(1).to({graphics:mask_graphics_70,x:23.6,y:-26.7}).wait(1).to({graphics:mask_graphics_71,x:24,y:-28.4}).wait(1).to({graphics:mask_graphics_72,x:24.3,y:-30.2}).wait(1).to({graphics:mask_graphics_73,x:24.4,y:-32}).wait(1).to({graphics:mask_graphics_74,x:24.5,y:-33.8}).wait(1).to({graphics:mask_graphics_75,x:24.5,y:-32.4}).wait(1).to({graphics:mask_graphics_76,x:24.7,y:-30.6}).wait(1).to({graphics:mask_graphics_77,x:24.9,y:-28.8}).wait(1).to({graphics:mask_graphics_78,x:25.3,y:-27.1}).wait(1).to({graphics:mask_graphics_79,x:25.7,y:-25.3}).wait(1).to({graphics:mask_graphics_80,x:26.2,y:-23.6}).wait(1).to({graphics:mask_graphics_81,x:26.8,y:-21.9}).wait(1).to({graphics:mask_graphics_82,x:27.5,y:-20.2}).wait(1).to({graphics:mask_graphics_83,x:28.3,y:-18.6}).wait(1).to({graphics:mask_graphics_84,x:29.1,y:-16.9}).wait(1).to({graphics:mask_graphics_85,x:30,y:-15.4}).wait(1).to({graphics:mask_graphics_86,x:31,y:-13.8}).wait(1).to({graphics:mask_graphics_87,x:32.1,y:-12.4}).wait(1).to({graphics:mask_graphics_88,x:33.2,y:-11}).wait(1).to({graphics:mask_graphics_89,x:34.5,y:-9.6}).wait(1).to({graphics:mask_graphics_90,x:35.8,y:-8.4}).wait(1).to({graphics:mask_graphics_91,x:37.2,y:-7.2}).wait(1).to({graphics:mask_graphics_92,x:38.6,y:-6.1}).wait(1).to({graphics:mask_graphics_93,x:40.1,y:-5.1}).wait(1).to({graphics:mask_graphics_94,x:41.7,y:-4.1}).wait(1).to({graphics:mask_graphics_95,x:43.3,y:-3.3}).wait(1).to({graphics:mask_graphics_96,x:44.9,y:-2.5}).wait(1).to({graphics:mask_graphics_97,x:46.6,y:-1.8}).wait(1).to({graphics:mask_graphics_98,x:47.1,y:-1.1}).wait(1).to({graphics:mask_graphics_99,x:47.1,y:-0.6}).wait(1).to({graphics:mask_graphics_100,x:47.1,y:-0.1}).wait(1).to({graphics:mask_graphics_101,x:47.1,y:0.2}).wait(1).to({graphics:mask_graphics_102,x:47.1,y:0.5}).wait(1).to({graphics:mask_graphics_103,x:47.1,y:0.7}).wait(1).to({graphics:mask_graphics_104,x:47,y:0.8}).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("Aq0nJIOnAAQACAAAEAAQC4AACCCHQCCCHAAC+QAAC/iCCGQhoBriIAX");
	this.shape.setTransform(6.1,-5.4);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(44).to({_off:false},0).wait(61));

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AgeAyIAAhjIA9AAIAABjg");
	var mask_1_graphics_1 = new cjs.Graphics().p("AgoAyIAAhjIBRAAIAABjg");
	var mask_1_graphics_2 = new cjs.Graphics().p("AgyAyIAAhjIBlAAIAABjg");
	var mask_1_graphics_3 = new cjs.Graphics().p("Ag9AyIAAhjIB7AAIAABjg");
	var mask_1_graphics_4 = new cjs.Graphics().p("AhHAyIAAhjICPAAIAABjg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AhRAyIAAhjICjAAIAABjg");
	var mask_1_graphics_6 = new cjs.Graphics().p("AhbAyIAAhjIC3AAIAABjg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AhlAyIAAhjIDMAAIAABjg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AhwAyIAAhjIDhAAIAABjg");
	var mask_1_graphics_9 = new cjs.Graphics().p("Ah6AyIAAhjID1AAIAABjg");
	var mask_1_graphics_10 = new cjs.Graphics().p("AiEAyIAAhjIEJAAIAABjg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AiOAyIAAhjIEdAAIAABjg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AiYAyIAAhjIExAAIAABjg");
	var mask_1_graphics_13 = new cjs.Graphics().p("AijAyIAAhjIFHAAIAABjg");
	var mask_1_graphics_14 = new cjs.Graphics().p("AitAyIAAhjIFbAAIAABjg");
	var mask_1_graphics_15 = new cjs.Graphics().p("Ai3AyIAAhjIFvAAIAABjg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AjBAyIAAhjIGDAAIAABjg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AjLAyIAAhjIGXAAIAABjg");
	var mask_1_graphics_18 = new cjs.Graphics().p("AjWAyIAAhjIGtAAIAABjg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AjgAyIAAhjIHBAAIAABjg");
	var mask_1_graphics_20 = new cjs.Graphics().p("AjqAyIAAhjIHVAAIAABjg");
	var mask_1_graphics_21 = new cjs.Graphics().p("Aj0AyIAAhjIHpAAIAABjg");
	var mask_1_graphics_22 = new cjs.Graphics().p("Aj/AyIAAhjIH/AAIAABjg");
	var mask_1_graphics_23 = new cjs.Graphics().p("AkJAyIAAhjIITAAIAABjg");
	var mask_1_graphics_24 = new cjs.Graphics().p("AkTAyIAAhjIInAAIAABjg");
	var mask_1_graphics_25 = new cjs.Graphics().p("AkdAyIAAhjII7AAIAABjg");
	var mask_1_graphics_26 = new cjs.Graphics().p("AknAyIAAhjIJQAAIAABjg");
	var mask_1_graphics_27 = new cjs.Graphics().p("AkyAyIAAhjIJlAAIAABjg");
	var mask_1_graphics_28 = new cjs.Graphics().p("Ak8AyIAAhjIJ5AAIAABjg");
	var mask_1_graphics_29 = new cjs.Graphics().p("AlGAyIAAhjIKNAAIAABjg");
	var mask_1_graphics_30 = new cjs.Graphics().p("AlQAyIAAhjIKhAAIAABjg");
	var mask_1_graphics_31 = new cjs.Graphics().p("AlaAyIAAhjIK1AAIAABjg");
	var mask_1_graphics_32 = new cjs.Graphics().p("AllAyIAAhjILLAAIAABjg");
	var mask_1_graphics_33 = new cjs.Graphics().p("AlvAyIAAhjILfAAIAABjg");
	var mask_1_graphics_34 = new cjs.Graphics().p("Al5AyIAAhjILzAAIAABjg");
	var mask_1_graphics_35 = new cjs.Graphics().p("AmDAyIAAhjIMHAAIAABjg");
	var mask_1_graphics_36 = new cjs.Graphics().p("AmNAyIAAhjIMbAAIAABjg");
	var mask_1_graphics_37 = new cjs.Graphics().p("AmYAyIAAhjIMxAAIAABjg");
	var mask_1_graphics_38 = new cjs.Graphics().p("AmiAyIAAhjINFAAIAABjg");
	var mask_1_graphics_39 = new cjs.Graphics().p("AmsAyIAAhjINZAAIAABjg");
	var mask_1_graphics_40 = new cjs.Graphics().p("Am2AyIAAhjINuAAIAABjg");
	var mask_1_graphics_41 = new cjs.Graphics().p("AnAAyIAAhjIOCAAIAABjg");
	var mask_1_graphics_42 = new cjs.Graphics().p("AnLAyIAAhjIOXAAIAABjg");
	var mask_1_graphics_43 = new cjs.Graphics().p("AnVAyIAAhjIOrAAIAABjg");
	var mask_1_graphics_44 = new cjs.Graphics().p("AnfAyIAAhjIO/AAIAABjg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:-68.5,y:-51.8}).wait(1).to({graphics:mask_1_graphics_1,x:-67.5,y:-51.8}).wait(1).to({graphics:mask_1_graphics_2,x:-66.5,y:-51.8}).wait(1).to({graphics:mask_1_graphics_3,x:-65.5,y:-51.8}).wait(1).to({graphics:mask_1_graphics_4,x:-64.5,y:-51.8}).wait(1).to({graphics:mask_1_graphics_5,x:-63.4,y:-51.8}).wait(1).to({graphics:mask_1_graphics_6,x:-62.4,y:-51.8}).wait(1).to({graphics:mask_1_graphics_7,x:-61.4,y:-51.8}).wait(1).to({graphics:mask_1_graphics_8,x:-60.4,y:-51.8}).wait(1).to({graphics:mask_1_graphics_9,x:-59.3,y:-51.8}).wait(1).to({graphics:mask_1_graphics_10,x:-58.3,y:-51.8}).wait(1).to({graphics:mask_1_graphics_11,x:-57.3,y:-51.8}).wait(1).to({graphics:mask_1_graphics_12,x:-56.3,y:-51.8}).wait(1).to({graphics:mask_1_graphics_13,x:-55.3,y:-51.8}).wait(1).to({graphics:mask_1_graphics_14,x:-54.2,y:-51.8}).wait(1).to({graphics:mask_1_graphics_15,x:-53.2,y:-51.8}).wait(1).to({graphics:mask_1_graphics_16,x:-52.2,y:-51.8}).wait(1).to({graphics:mask_1_graphics_17,x:-51.2,y:-51.8}).wait(1).to({graphics:mask_1_graphics_18,x:-50.2,y:-51.8}).wait(1).to({graphics:mask_1_graphics_19,x:-49.1,y:-51.8}).wait(1).to({graphics:mask_1_graphics_20,x:-48.1,y:-51.8}).wait(1).to({graphics:mask_1_graphics_21,x:-47.1,y:-51.8}).wait(1).to({graphics:mask_1_graphics_22,x:-46.1,y:-51.8}).wait(1).to({graphics:mask_1_graphics_23,x:-45.1,y:-51.8}).wait(1).to({graphics:mask_1_graphics_24,x:-44,y:-51.8}).wait(1).to({graphics:mask_1_graphics_25,x:-43,y:-51.8}).wait(1).to({graphics:mask_1_graphics_26,x:-42,y:-51.8}).wait(1).to({graphics:mask_1_graphics_27,x:-41,y:-51.8}).wait(1).to({graphics:mask_1_graphics_28,x:-39.9,y:-51.8}).wait(1).to({graphics:mask_1_graphics_29,x:-38.9,y:-51.8}).wait(1).to({graphics:mask_1_graphics_30,x:-37.9,y:-51.8}).wait(1).to({graphics:mask_1_graphics_31,x:-36.9,y:-51.8}).wait(1).to({graphics:mask_1_graphics_32,x:-35.9,y:-51.8}).wait(1).to({graphics:mask_1_graphics_33,x:-34.8,y:-51.8}).wait(1).to({graphics:mask_1_graphics_34,x:-33.8,y:-51.8}).wait(1).to({graphics:mask_1_graphics_35,x:-32.8,y:-51.8}).wait(1).to({graphics:mask_1_graphics_36,x:-31.8,y:-51.8}).wait(1).to({graphics:mask_1_graphics_37,x:-30.8,y:-51.8}).wait(1).to({graphics:mask_1_graphics_38,x:-29.7,y:-51.8}).wait(1).to({graphics:mask_1_graphics_39,x:-28.7,y:-51.8}).wait(1).to({graphics:mask_1_graphics_40,x:-27.7,y:-51.8}).wait(1).to({graphics:mask_1_graphics_41,x:-26.7,y:-51.8}).wait(1).to({graphics:mask_1_graphics_42,x:-25.7,y:-51.8}).wait(1).to({graphics:mask_1_graphics_43,x:-24.6,y:-51.8}).wait(1).to({graphics:mask_1_graphics_44,x:-23.6,y:-51.8}).wait(61));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("Aq0nJIOnAAQACAAAEAAQC4AACCCHQCCCHAAC+QAAC/iCCGQhoBriIAX");
	this.shape_1.setTransform(6.1,-5.4);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(105));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.6,-63.3,21.9,24.3);


(lib.ar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,-146.7,1,1,0,0,0,0.1,-4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:174.6},124).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AAAgVIAAAr");
	this.shape.setTransform(-0.2,-151.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AAAAKIAAgT");
	this.shape_1.setTransform(-0.2,-150.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AAAgBIAAAD");
	this.shape_2.setTransform(-0.2,-148.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("AAAgNIAAAb");
	this.shape_3.setTransform(-0.2,-147.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("AAAgaIAAA1");
	this.shape_4.setTransform(-0.2,-146.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(5,1,1).p("AAAgmIAABN");
	this.shape_5.setTransform(-0.2,-144.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(5,1,1).p("AAAgzIAABm");
	this.shape_6.setTransform(-0.2,-143.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(5,1,1).p("AAAg+IAAB9");
	this.shape_7.setTransform(-0.2,-142.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(5,1,1).p("AAAhLIAACX");
	this.shape_8.setTransform(-0.2,-140.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(5,1,1).p("AAAhXIAACv");
	this.shape_9.setTransform(-0.2,-139.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(5,1,1).p("AAAhjIAADI");
	this.shape_10.setTransform(-0.2,-138);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5,1,1).p("AAAhwIAADh");
	this.shape_11.setTransform(-0.2,-136.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(5,1,1).p("AAAh8IAAD5");
	this.shape_12.setTransform(-0.2,-135.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(5,1,1).p("AAAiIIAAER");
	this.shape_13.setTransform(-0.2,-134);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(5,1,1).p("AAAiVIAAEr");
	this.shape_14.setTransform(-0.2,-132.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(5,1,1).p("AAAihIAAFD");
	this.shape_15.setTransform(-0.2,-131.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(5,1,1).p("AAAitIAAFb");
	this.shape_16.setTransform(-0.1,-129.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(5,1,1).p("AAAi5IAAF0");
	this.shape_17.setTransform(-0.1,-128.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(5,1,1).p("AAAjGIAAGN");
	this.shape_18.setTransform(-0.1,-127.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(5,1,1).p("AAAjSIAAGl");
	this.shape_19.setTransform(-0.1,-125.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(5,1,1).p("AAAjeIAAG9");
	this.shape_20.setTransform(-0.1,-124.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(5,1,1).p("AAAjqIAAHV");
	this.shape_21.setTransform(-0.1,-123.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(5,1,1).p("AAAj3IAAHv");
	this.shape_22.setTransform(-0.1,-121.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(5,1,1).p("AAAkDIAAIH");
	this.shape_23.setTransform(-0.1,-120.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(5,1,1).p("AAAkQIAAIh");
	this.shape_24.setTransform(-0.1,-119.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(5,1,1).p("AAAkcIAAI5");
	this.shape_25.setTransform(-0.1,-117.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(5,1,1).p("AAAkoIAAJR");
	this.shape_26.setTransform(-0.1,-116.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(5,1,1).p("AAAk0IAAJp");
	this.shape_27.setTransform(-0.1,-115);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(5,1,1).p("AAAlBIAAKC");
	this.shape_28.setTransform(-0.1,-113.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(5,1,1).p("AAAlNIAAKb");
	this.shape_29.setTransform(-0.1,-112.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(5,1,1).p("AAAlZIAAKz");
	this.shape_30.setTransform(-0.1,-111);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(5,1,1).p("AAAllIAALL");
	this.shape_31.setTransform(-0.1,-109.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(5,1,1).p("AAAlyIAALl");
	this.shape_32.setTransform(-0.1,-108.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(5,1,1).p("AAAl+IAAL9");
	this.shape_33.setTransform(-0.1,-106.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(5,1,1).p("AAAmKIAAMV");
	this.shape_34.setTransform(-0.1,-105.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(5,1,1).p("AAAmXIAAMv");
	this.shape_35.setTransform(-0.1,-104.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(5,1,1).p("AAAmjIAANH");
	this.shape_36.setTransform(-0.1,-102.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(5,1,1).p("AAAmvIAANf");
	this.shape_37.setTransform(-0.1,-101.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(5,1,1).p("AAAm7IAAN4");
	this.shape_38.setTransform(-0.1,-100.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(5,1,1).p("AAAnIIAAOR");
	this.shape_39.setTransform(-0.1,-98.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(5,1,1).p("AAAnUIAAOp");
	this.shape_40.setTransform(-0.1,-97.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(5,1,1).p("AAAngIAAPB");
	this.shape_41.setTransform(-0.1,-96.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(5,1,1).p("AAAnsIAAPa");
	this.shape_42.setTransform(-0.1,-94.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(5,1,1).p("AAAn5IAAPz");
	this.shape_43.setTransform(-0.1,-93.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(5,1,1).p("AAAoFIAAQL");
	this.shape_44.setTransform(-0.1,-92);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(5,1,1).p("AAAoSIAAQl");
	this.shape_45.setTransform(-0.1,-90.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(5,1,1).p("AAAoeIAAQ9");
	this.shape_46.setTransform(-0.1,-89.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(5,1,1).p("AAAoqIAARV");
	this.shape_47.setTransform(-0.1,-88);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(5,1,1).p("AAAo2IAARt");
	this.shape_48.setTransform(-0.1,-86.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(5,1,1).p("AAApDIAASH");
	this.shape_49.setTransform(-0.1,-85.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(5,1,1).p("AAApPIAASf");
	this.shape_50.setTransform(-0.1,-83.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(5,1,1).p("AAApbIAAS3");
	this.shape_51.setTransform(-0.1,-82.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(5,1,1).p("AAApnIAATP");
	this.shape_52.setTransform(-0.1,-81.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(5,1,1).p("AAAp0IAATp");
	this.shape_53.setTransform(-0.1,-79.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(5,1,1).p("AAAqAIAAUB");
	this.shape_54.setTransform(-0.1,-78.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(5,1,1).p("AAAqMIAAUZ");
	this.shape_55.setTransform(-0.1,-77.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(5,1,1).p("AAAqZIAAUz");
	this.shape_56.setTransform(-0.1,-75.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(5,1,1).p("AAAqlIAAVL");
	this.shape_57.setTransform(-0.1,-74.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(5,1,1).p("AAAqxIAAVj");
	this.shape_58.setTransform(-0.1,-73.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(5,1,1).p("AAAq+IAAV9");
	this.shape_59.setTransform(-0.1,-71.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(5,1,1).p("AAArKIAAWU");
	this.shape_60.setTransform(-0.1,-70.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(5,1,1).p("AAArWIAAWt");
	this.shape_61.setTransform(-0.1,-69);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(5,1,1).p("AAAriIAAXF");
	this.shape_62.setTransform(-0.1,-67.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(5,1,1).p("AAAruIAAXd");
	this.shape_63.setTransform(-0.1,-66.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(5,1,1).p("AAAr7IAAX3");
	this.shape_64.setTransform(-0.1,-65);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(5,1,1).p("AAAsHIAAYP");
	this.shape_65.setTransform(-0.1,-63.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(5,1,1).p("AAAsTIAAYn");
	this.shape_66.setTransform(-0.1,-62.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(5,1,1).p("AAAsgIAAZA");
	this.shape_67.setTransform(-0.1,-60.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(5,1,1).p("AAAssIAAZZ");
	this.shape_68.setTransform(-0.1,-59.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(5,1,1).p("AAAs4IAAZx");
	this.shape_69.setTransform(-0.1,-58.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(5,1,1).p("AAAtEIAAaJ");
	this.shape_70.setTransform(-0.1,-56.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(5,1,1).p("AAAtQIAAah");
	this.shape_71.setTransform(-0.1,-55.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(5,1,1).p("AAAtdIAAa7");
	this.shape_72.setTransform(-0.1,-54.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(5,1,1).p("AAAtpIAAbT");
	this.shape_73.setTransform(-0.1,-52.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(5,1,1).p("AAAt2IAAbt");
	this.shape_74.setTransform(-0.1,-51.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(5,1,1).p("AAAuCIAAcF");
	this.shape_75.setTransform(-0.1,-50.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(5,1,1).p("AAAuOIAAcd");
	this.shape_76.setTransform(-0.1,-48.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(5,1,1).p("AAAuaIAAc1");
	this.shape_77.setTransform(-0.1,-47.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(5,1,1).p("AAAunIAAdP");
	this.shape_78.setTransform(0,-46);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(5,1,1).p("AAAuzIAAdn");
	this.shape_79.setTransform(0,-44.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(5,1,1).p("AAAu/IAAd/");
	this.shape_80.setTransform(0,-43.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(5,1,1).p("AAAvLIAAeX");
	this.shape_81.setTransform(0,-42);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(5,1,1).p("AAAvYIAAex");
	this.shape_82.setTransform(0,-40.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(5,1,1).p("AAAvkIAAfJ");
	this.shape_83.setTransform(0,-39.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(5,1,1).p("AAAvwIAAfh");
	this.shape_84.setTransform(0,-37.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(5,1,1).p("AAAv8IAAf5");
	this.shape_85.setTransform(0,-36.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(5,1,1).p("AAAwJMAAAAgT");
	this.shape_86.setTransform(0,-35.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(5,1,1).p("AAAwVMAAAAgr");
	this.shape_87.setTransform(0,-33.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(5,1,1).p("AAAwiMAAAAhF");
	this.shape_88.setTransform(0,-32.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(5,1,1).p("AAAwuMAAAAhd");
	this.shape_89.setTransform(0,-31.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(5,1,1).p("AAAw6MAAAAh1");
	this.shape_90.setTransform(0,-29.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(5,1,1).p("AAAxGMAAAAiN");
	this.shape_91.setTransform(0,-28.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(5,1,1).p("AAAxTMAAAAin");
	this.shape_92.setTransform(0,-27.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(5,1,1).p("AAAxfMAAAAi/");
	this.shape_93.setTransform(0,-25.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(5,1,1).p("AAAxrMAAAAjX");
	this.shape_94.setTransform(0,-24.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(5,1,1).p("AAAx4MAAAAjx");
	this.shape_95.setTransform(0,-23);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(5,1,1).p("AAAyEMAAAAkJ");
	this.shape_96.setTransform(0,-21.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(5,1,1).p("AAAyQMAAAAkh");
	this.shape_97.setTransform(0,-20.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(5,1,1).p("AAAycMAAAAk5");
	this.shape_98.setTransform(0,-19);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(5,1,1).p("AAAypMAAAAlT");
	this.shape_99.setTransform(0,-17.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(5,1,1).p("AAAy1MAAAAlr");
	this.shape_100.setTransform(0,-16.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(5,1,1).p("AAAzBMAAAAmD");
	this.shape_101.setTransform(0,-14.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(5,1,1).p("AAAzNMAAAAmb");
	this.shape_102.setTransform(0,-13.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(5,1,1).p("AAAzaMAAAAm1");
	this.shape_103.setTransform(0,-12.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(5,1,1).p("AAAzmMAAAAnN");
	this.shape_104.setTransform(0,-10.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(5,1,1).p("AAAzyMAAAAnl");
	this.shape_105.setTransform(0,-9.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(5,1,1).p("AAAz/MAAAAn/");
	this.shape_106.setTransform(0,-8.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(5,1,1).p("AAA0LMAAAAoX");
	this.shape_107.setTransform(0,-6.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(5,1,1).p("AAA0XMAAAAov");
	this.shape_108.setTransform(0,-5.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(5,1,1).p("AAA0kMAAAApI");
	this.shape_109.setTransform(0,-4.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(5,1,1).p("AAA0wMAAAAph");
	this.shape_110.setTransform(0,-2.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(5,1,1).p("AAA08MAAAAp5");
	this.shape_111.setTransform(0,-1.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(5,1,1).p("AAA1IMAAAAqR");

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(5,1,1).p("AAA1VMAAAAqr");
	this.shape_113.setTransform(0,1.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(5,1,1).p("AAA1hMAAAArD");
	this.shape_114.setTransform(0,2.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(5,1,1).p("AAA1tMAAAArb");
	this.shape_115.setTransform(0,4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(5,1,1).p("AAA15MAAAArz");
	this.shape_116.setTransform(0,5.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(5,1,1).p("AAA2GMAAAAsN");
	this.shape_117.setTransform(0,6.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(5,1,1).p("AAA2SMAAAAsl");
	this.shape_118.setTransform(0,8.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(5,1,1).p("AAA2eMAAAAs9");
	this.shape_119.setTransform(0,9.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(5,1,1).p("AAA2qMAAAAtV");
	this.shape_120.setTransform(0,10.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(5,1,1).p("AAA23MAAAAtv");
	this.shape_121.setTransform(0,12.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(5,1,1).p("AAA3DMAAAAuH");
	this.shape_122.setTransform(0,13.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(5,1,1).p("AAA3PMAAAAuf");
	this.shape_123.setTransform(0,14.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(5,1,1).p("AAAXdMAAAgu5");
	this.shape_124.setTransform(0,16.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.9,-160.1,24.3,21.8);


(lib.honeyflap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.honeybee();
	this.instance.parent = this;
	this.instance.setTransform(38.4,-170.9,0.422,0.422,0,0,0,-0.1,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgSB8QgOgCgPgGIgMgGIgBgBIgBgBIgCAAIgBgBIgBgBIgBgBIgBAAIgCgBIgBgBIgBgBIgBgBIgBAAIgBgBIgBgBIgBgBIgBAAIgBgBIgBgBIgCgBIAAgBIgBAAIgBgBIgBgBIAAgBIgBgBIgBgBIgCAAIAAgBIgBgBIgBgBIgBgBIAAgBIgBAAIAAgBIgBgBIgBgBIgBgBIAAgBIgBgBIgBAAIgBgBIAAgBIgBgBIgBgBIAAgBIgBAAIAAgBIgBgBIAAgBIgBgBIAAgBIgBgBIgBAAIAAgBIgBgBIAAgBIgBgBIgBgBIAAgBIgBgBIAAgCIgBgCIgBgBIAAgBIgBgBIAAgBIAAAAIgBgBIAAgBIgBgBIAAgBIgBgBIAAgBIAAgBIgBgBIAAAAIAAgBIgBgBIAAgBIgBgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIAAAAIAAgBIgBgBIAAgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIAAgBIgBgBIAAgCIAAgCIAAgBIAAgBIgBgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIABgBIABgBIAAgBIAAgBIABgBIAAgBIABgBIAAgBIABgBIAAgBIABgBIAAgBIAAgBIABgBIABgBIAAgBIABgBIAAgBIACgBIAAgBIABgBIABgCIAAgBIABgBIAAgBIABgBIABgBIABgBIAAgBIABgBIACgBIABgBIAAgBIABgBIABgBIADgEIANgLIAOgKIAOgHIAQgGIAOgDIAQgBQAHAAAJABIAQADQAIABAGADIAQAHIAEADIABAAIACABIABABIABABIABAAIABABIABABIABABIACABIABAAIABABIABABIAAABIABABIABAAIABABIABABIACABIABABIAAAAIABABIABABIAAABIABABIABABIABAAIABABIABABIABABIABABIAAABIABAAIABABIABABIAAABIAAABIABABIABAAIAAABIABABIABABIABABIAAABIABABIABAAIAAABIABABIAAABIAAABIABABIAAABIABAAIAAABIABABIABABIAAABIAAABIABABIABABIAAABIABAAIAAABIABABIAAABIABABIAAABIAAABIABABIAAAAIAAABIAAABIABABIAAABIAAABIABABIAAABIABABIAAABIAAAAIABABIAAABIABABIAAABIAAABIAAABIAAABIABABIAAABIAAABIABAAIAAABIAAABIAAABIABABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIABAAIgBABIABABIAAABIAAABIAAABIAAABIAAABIAAABIABABIAAABIgBABIABABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIgBABIABABIgBABIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIgBABIAAABIAAABIAAABIAAABIAAABIAAABIgBABIAAABIAAABIAAABIAAABIgBABIAAABIAAABIgBABIAAABIAAABIAAABIgBABIgBABIAAABIAAABIgBABIAAABIAAABIgBABIAAABIgBABIAAABIAAABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgCABIAAABIgBABIAAABIgBACIgBABIAAABIgBABIAAABIgBABIAAABIgBABIgBABIgBABIgBABIgBABIgBABIAAABIgBABIgBABIgBACIgBABIgBABIgBABIgBABIgCACIgEAFIgGAEIgEAEIgEACIgDADIgCABIgQAIQgXAKgaAAIgTgBg");
	this.shape.setTransform(22.5,-142.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-215.3,105.5,85.4);


// stage content:
(lib.writingsuccess_Fontkid_B = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_670 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(670).call(this.frame_670).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(156.3,102.6,0.999,0.999,0,-8.5,171.5,22.4,-144);
	this.instance._off = true;

	this.instance_1 = new lib.honeybee();
	this.instance_1.parent = this;
	this.instance_1.setTransform(159.1,441.5,0.421,0.421,-21.5,0,0,-38.1,64.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({y:443.9},140).wait(11).to({rotation:-21.5,skewX:0,skewY:0,x:155.5,y:99.3},0).to({x:324,y:99.8},64).to({scaleX:1,scaleY:1,guide:{path:[324,99.8,324,99.8,324.1,99.8,361,97.6,388.6,122.8,416.3,147.9,416.6,184.4,417,220.9,390,246.9,363,272.8,310.4,269,310.4,269,310.4,269]}},93).to({scaleX:1,scaleY:1,guide:{path:[310.4,269.1,233.3,269.1,156.2,269.1]}},51).wait(11).to({x:155.6,y:268.8},0).to({scaleX:1,scaleY:1,x:336.6,y:269},72).to({scaleX:1,scaleY:1,guide:{path:[336.5,269,336.6,269.1,336.6,269.1]}},2).to({scaleX:1,scaleY:1,guide:{path:[336.7,269,362.2,271.7,390.4,295.5,418.6,319.3,418.7,354.9,418.7,390.5,391.5,416.4,366.8,440,332.9,439.7]}},75).to({guide:{path:[332.9,439.7,329.5,439.6,326.1,439.4,322.4,439.4,318.5,439.6,314.1,439.4,309.9,439.3,260.4,439.3,211,439.3]}},46).to({scaleX:1,scaleY:1,guide:{path:[211,439.3,185,439.3,159.1,439.3]}},26).to({_off:true},10).wait(61));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(610).to({_off:false},0).to({guide:{path:[159.2,441.5,120.6,377.4,77.2,435.8,46.9,476.5,8.8,508.3,-6.5,521.1,-27.2,519,-50.1,516.3,-68.6,502.2]}},60).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(156.5,438.3,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},140).wait(11).to({_off:false,x:156.1,y:273},0).to({_off:true},208).wait(11).to({_off:false,x:156.3,y:439.9},0).to({_off:true},221).wait(71));

	// ar3
	this.instance_2 = new lib.ar2("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(303.2,355.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(379).to({_off:false},0).wait(292));

	// ar2
	this.instance_3 = new lib.ar2("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(303.2,185.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(160).to({_off:false},0).wait(511));

	// ar1
	this.instance_4 = new lib.ar1("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(57.5,248.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).wait(662));

	// 3
	this.instance_5 = new lib.b_2("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-0.7,171.8,0.999,0.986);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(379).to({_off:false},0).wait(292));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_229 = new cjs.Graphics().p("AMmSeQlulsgCoDQgCoDFqltQFslvIDgCMAALAm4IgHAAQn/AAlslog");
	var mask_graphics_230 = new cjs.Graphics().p("ALxR7Qlfl5ASoDQARoCF5lgQF5lgIDASMgBWAm3QoDgSlgl5g");
	var mask_graphics_231 = new cjs.Graphics().p("AK5RZQlRmHAmoCQAmoBGGlRQGGlRICAmMgC2AmxQoCgllRmGg");
	var mask_graphics_232 = new cjs.Graphics().p("AKCQ2QlBmUA5oAQA6n/GTlBQGTlCIAA6MgEWAmoQoAg6lCmSg");
	var mask_graphics_233 = new cjs.Graphics().p("AJNQTQkymgBOn+QBNn8GfkyQGgkxH9BNMgF2AmcQn9hOkymeg");
	var mask_graphics_234 = new cjs.Graphics().p("AIZPvQkhmrBhn6QBhn5GrkhQGrkiH6BhMgHVAmMQn6hhkimrg");
	var mask_graphics_235 = new cjs.Graphics().p("AHnPMQkQm2B1n2QB0n1G2kRQG2kQH2B0MgI0Al4Qn2h1kRm1g");
	var mask_graphics_236 = new cjs.Graphics().p("AG3OoQj/nACInwQCInxHAj/QHAkAHxCIMgKRAlgQnyiIj/nAg");
	var mask_graphics_237 = new cjs.Graphics().p("AGIOFQjtnKCbnrQCcnrHJjuQHKjuHrCcMgLuAlEQnribjvnJg");
	var mask_graphics_238 = new cjs.Graphics().p("AFcNhQjbnTCunkQCunlHSjcQHTjcHlCvMgNKAklQnliujcnSg");
	var mask_graphics_239 = new cjs.Graphics().p("AEyM+QjJnbDBndQDAneHbjKQHajJHeDAMgOjAkEQnejBjKnag");
	var mask_graphics_240 = new cjs.Graphics().p("AEJMaQi2niDTnVQDUnWHhi3QHii3HXDTMgP9AjdQnWjTi4nig");
	var mask_graphics_241 = new cjs.Graphics().p("ADjL3QijnpDlnMQDlnOHpikQHpilHNDmMgRTAi0QnOjlilnpg");
	var mask_graphics_242 = new cjs.Graphics().p("AC/LUQiQnvD3nDQD3nEHuiSQHviRHFD3MgSqAiIQnEj3iSnvg");
	var mask_graphics_243 = new cjs.Graphics().p("ACeKyQh+n1EJm5QEIm6H0h+QH0h+G7EIMgT+AhYQm6kJh+nzg");
	var mask_graphics_244 = new cjs.Graphics().p("AB+KPQhqn4EamvQEZmwH4hqQH5hrGwEaMgVPAgkQmwkZhrn5g");
	var mask_graphics_245 = new cjs.Graphics().p("ABhJtQhWn8EqmkQEqmkH8hXQH8hXGlEqI2ffuQmkkphYn9g");
	var mask_graphics_246 = new cjs.Graphics().p("ABHJMQhDn/E6mYQE6mZH/hDQIAhDGYE6I3se1QmZk6hDn/g");
	var mask_graphics_247 = new cjs.Graphics().p("AAuIrQguoBFJmMQFKmMIBgvQICgvGMFJI44d5QmMlKgwoBg");
	var mask_graphics_248 = new cjs.Graphics().p("AAZILQgaoDFYl+QFZmAICgbQIDgbF/FZI6Bc5Ql/lYgboDg");
	var mask_graphics_249 = new cjs.Graphics().p("AAFHrQgFoDFmlxQFnlyIDgHQIEgHFyFnI7Ib4QlxlogIoDg");
	var mask_graphics_250 = new cjs.Graphics().p("AgKHMQAMoDF1ljQF2ljIDANQIEAMFjF2I8LazQljl2ANoDg");
	var mask_graphics_251 = new cjs.Graphics().p("AgZGtQAhoBGDlVQGDlUICAgQIDAhFUGDI9MZsQlUmDAgoDg");
	var mask_graphics_252 = new cjs.Graphics().p("AgkGQQA0oAGQlFQGQlGIAA1QIBA1FGGPI+LYiQlEmPA0oBg");
	var mask_graphics_253 = new cjs.Graphics().p("AgtFzQBIn+Gck1QGck2H+BJQH/BIE2GcI/HXWQk0mcBIn+g");
	var mask_graphics_254 = new cjs.Graphics().p("Ag0FXQBcn6GokmQGoklH7BcQH7BcEmGoI//WIQklmoBcn7g");
	var mask_graphics_255 = new cjs.Graphics().p("Ag4E7QBwn2GzkUQGzkVH3BwQH3BwEVGzMgg0AU3QkUmzBvn4g");
	var mask_graphics_256 = new cjs.Graphics().p("Ag5EhQCDnxG9kEQG+kEHyCEQHzCDEDG9MghmATlQkDm9CDnzg");
	var mask_graphics_257 = new cjs.Graphics().p("Ag3EIQCWnsHHjyQHHjyHsCWQHuCXDyHGMgiVASRQjxnHCWntg");
	var mask_graphics_258 = new cjs.Graphics().p("AgzDvQCpnlHQjhQHQjgHmCpQHoCqDgHPMgjBAQ8QjfnRCpnng");
	var mask_graphics_259 = new cjs.Graphics().p("AgtDYQC8nfHZjOQHYjOHgC8QHgC9DOHXMgjoAPkQjPnZC8ngg");
	var mask_graphics_260 = new cjs.Graphics().p("AgjDCQDOnXHgi8QHgi8HYDPQHZDPC7HfMgkNAOKQi8ngDPnYg");
	var mask_graphics_261 = new cjs.Graphics().p("AgYCtQDhnPHnipQHnipHPDhQHRDhCpHmMgkvAMwQipnnDgnQg");
	var mask_graphics_262 = new cjs.Graphics().p("AgJCZQDynGHtiWQHtiWHHDzQHHDzCWHsMglNALUQiWntDznHg");
	var mask_graphics_263 = new cjs.Graphics().p("AAHCGQEEm8HziDQHziDG8EEQG+EFCCHxMglmAJ4QiDnzEDm9g");
	var mask_graphics_264 = new cjs.Graphics().p("AAaB0QEWmxH3hwQH4hvGyEVQGzEVBvH3Mgl9AIZQhwn3EUmzg");
	var mask_graphics_265 = new cjs.Graphics().p("AAwBjQEmmmH8hcQH7hbGnElQGoEmBcH7MgmRAG6Qhbn7Ekmog");
	var mask_graphics_266 = new cjs.Graphics().p("ABJBUQE2maH/hIQH+hIGbE2QGdE1BIH+MgmgAFcQhIn/E1mcg");
	var mask_graphics_267 = new cjs.Graphics().p("ABjBGQFHmOIAg0QIBg0GPFFQGQFFA0IBMgmrAD8Qg0oBFEmQg");
	var mask_graphics_268 = new cjs.Graphics().p("ACBA5QFVmBIDggQICggGCFVQGDFUAgICMgmzACcQggoDFUmDg");
	var mask_graphics_269 = new cjs.Graphics().p("ACgAuQFkl0IEgMQIDgMF1FiQF1FkAMIEMgm3AA7QgMoEFil1g");
	var mask_graphics_270 = new cjs.Graphics().p("Ai3N8QAIoEFxlnQFylmIEAIQIDAIFnFxQFnFygIIDg");
	var mask_graphics_271 = new cjs.Graphics().p("Ai1MzQAcoCF+lYQGAlYIDAcQIDAbFYF/QFYGAgbICg");
	var mask_graphics_272 = new cjs.Graphics().p("AiyLrQAwoBGLlJQGNlJICAwQIBAwFJGLQFJGNgvICg");
	var mask_graphics_273 = new cjs.Graphics().p("AitKjQBEn/GYk5QGZk5H/BEQH/BDE6GYQE6GahEH/g");
	var mask_graphics_274 = new cjs.Graphics().p("AimJcQBXn8GkkpQGmkpH8BXQH8BXEpGkQEqGlhYH8g");
	var mask_graphics_275 = new cjs.Graphics().p("AidIUQBrn4GvkYQGwkZH5BrQH4BrEZGvQEZGxhrH4g");
	var mask_graphics_276 = new cjs.Graphics().p("AiSHOQB+nzG6kIQG7kIHzB/QH0B+EIG6QEIG7h+H0g");
	var mask_graphics_277 = new cjs.Graphics().p("AiGGIQCRntHEj3QHFj2HvCRQHuCSD3HDQD2HGiRHug");
	var mask_graphics_278 = new cjs.Graphics().p("Ah4FDQCknnHOjmQHOjkHpClQHoClDlHMQDlHPilHog");
	var mask_graphics_279 = new cjs.Graphics().p("AhnD/QC2nhHWjTQHXjSHiC4QHhC3DTHVQDTHXi4Hig");
	var mask_graphics_280 = new cjs.Graphics().p("AhVC8QDJnZHejBQHejAHbDKQHaDKDAHdQDAHfjKHag");
	var mask_graphics_281 = new cjs.Graphics().p("AhCB6QDcnRHliuQHmitHSDcQHSDcCtHkQCuHmjcHSg");
	var mask_graphics_282 = new cjs.Graphics().p("AgsA5QDtnIHsibQHsiaHJDuQHJDuCbHrQCaHsjuHJg");
	var mask_graphics_283 = new cjs.Graphics().p("AgVgFQD/nAHxiIQHyiHG/EAQHAEACHHwQCIHykAG/g");
	var mask_graphics_284 = new cjs.Graphics().p("AADhEQERm1H2h0QH3h0G1ERQG1ERB0H1QB1H3kRG1g");
	var mask_graphics_285 = new cjs.Graphics().p("AAeiAQEhmrH7hhQH6hgGrEiQGqEiBgH5QBhH7kiGqg");
	var mask_graphics_286 = new cjs.Graphics().p("AA6i7QEymfH+hNQH9hNGfEyQGfEyBNH9QBNH+kyGfg");
	var mask_graphics_287 = new cjs.Graphics().p("ABXj1QFCmSIBg6QIAg4GTFCQGSFCA5H+QA5IBlBGTg");
	var mask_graphics_288 = new cjs.Graphics().p("AB2ksQFSmGICgmQICgkGGFRQGGFRAlIBQAlIDlRGFg");
	var mask_graphics_289 = new cjs.Graphics().p("ACXliQFgl5IDgRQIEgRF4FgQF4FgASICQARIElgF4g");
	var mask_graphics_290 = new cjs.Graphics().p("AC5mWQFulqIEACQIDADFrFvQFqFugDICQgDIEluFrg");
	var mask_graphics_291 = new cjs.Graphics().p("ADbnIQF9lcIDAWQIDAYFcF8QFcF7gXIDQgXIDl8Fcg");
	var mask_graphics_292 = new cjs.Graphics().p("AD/n4QGKlNICArQIBArFNGJQFNGJgqIBQgrICmKFNg");
	var mask_graphics_293 = new cjs.Graphics().p("AEkolQGWk+IAA+QIAA/E9GXQE+GVg/H/Qg+IAmWE+g");
	var mask_graphics_294 = new cjs.Graphics().p("AFLpRQGiktH9BSQH9BTEtGiQEuGhhTH8QhSH+miEtg");
	var mask_graphics_295 = new cjs.Graphics().p("AFyp6QGtkdH6BmQH5BmEdGuQEdGshmH5QhmH6mtEdg");
	var mask_graphics_296 = new cjs.Graphics().p("AGaqhQG5kMH1B5QH0B6ENG4QEMG4h6H0Qh5H2m4EMg");
	var mask_graphics_297 = new cjs.Graphics().p("AHErFQHCj7HwCMQHwCOD7HCQD7HBiNHwQiNHwnCD7g");
	var mask_graphics_298 = new cjs.Graphics().p("AHurnQHMjqHqCgQHqChDpHLQDpHLifHqQihHqnLDpg");
	var mask_graphics_299 = new cjs.Graphics().p("AIZsHQHVjXHjCyQHkC0DXHUQDXHUizHjQizHknUDXg");
	var mask_graphics_300 = new cjs.Graphics().p("AJGskQHcjFHcDFQHcDHDFHcQDFHbjFHcQjGHdncDFg");
	var mask_graphics_301 = new cjs.Graphics().p("AJys+QHkiyHUDXQHUDYCzHkQCyHjjYHTQjYHVnjCyg");
	var mask_graphics_302 = new cjs.Graphics().p("AKgtWQHqifHMDpQHLDrCgHqQCfHpjqHLQjqHMnqCfg");
	var mask_graphics_303 = new cjs.Graphics().p("ALOtrQHwiMHDD7QHBD8CNHwQCMHvj7HCQj8HCnwCMg");
	var mask_graphics_304 = new cjs.Graphics().p("AL9t9QH1h5G4EMQG4ENB5H1QB5H1kMG3QkNG5n1B5g");
	var mask_graphics_305 = new cjs.Graphics().p("AMtuNQH5hlGtEdQGtEeBmH4QBlH6kdGtQkeGtn5Bmg");
	var mask_graphics_306 = new cjs.Graphics().p("ANcuaQH9hRGiEtQGiEvBSH8QBRH9ktGhQkvGin9BSg");
	var mask_graphics_307 = new cjs.Graphics().p("AOMukQIAg+GWE+QGVE+A+H/QA+IAk9GVQk/GWn/A+g");
	var mask_graphics_308 = new cjs.Graphics().p("AO8urQICgqGKFNQGIFOArIBQAqIClOGIQlNGKoCAqg");
	var mask_graphics_309 = new cjs.Graphics().p("APtuwQIDgWF8FdQF7FcAXICQAWIDlcF8QldF8oDAWg");
	var mask_graphics_310 = new cjs.Graphics().p("AQduxQIDgCFvFqQFuFsACICQACIElrFtQlrFvoDACg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(229).to({graphics:mask_graphics_229,x:168.8,y:154.2}).wait(1).to({graphics:mask_graphics_230,x:170.6,y:154.2}).wait(1).to({graphics:mask_graphics_231,x:173,y:154}).wait(1).to({graphics:mask_graphics_232,x:175.4,y:153.8}).wait(1).to({graphics:mask_graphics_233,x:177.8,y:153.5}).wait(1).to({graphics:mask_graphics_234,x:180.2,y:153.1}).wait(1).to({graphics:mask_graphics_235,x:182.6,y:152.6}).wait(1).to({graphics:mask_graphics_236,x:184.9,y:152}).wait(1).to({graphics:mask_graphics_237,x:187.2,y:151.3}).wait(1).to({graphics:mask_graphics_238,x:189.5,y:150.5}).wait(1).to({graphics:mask_graphics_239,x:191.7,y:149.7}).wait(1).to({graphics:mask_graphics_240,x:194,y:148.7}).wait(1).to({graphics:mask_graphics_241,x:196.1,y:147.7}).wait(1).to({graphics:mask_graphics_242,x:198.3,y:146.6}).wait(1).to({graphics:mask_graphics_243,x:200.4,y:145.4}).wait(1).to({graphics:mask_graphics_244,x:202.4,y:144.1}).wait(1).to({graphics:mask_graphics_245,x:204.4,y:142.7}).wait(1).to({graphics:mask_graphics_246,x:206.3,y:141.3}).wait(1).to({graphics:mask_graphics_247,x:208.2,y:139.8}).wait(1).to({graphics:mask_graphics_248,x:210,y:138.2}).wait(1).to({graphics:mask_graphics_249,x:211.8,y:136.6}).wait(1).to({graphics:mask_graphics_250,x:213.5,y:134.9}).wait(1).to({graphics:mask_graphics_251,x:215.1,y:133.1}).wait(1).to({graphics:mask_graphics_252,x:216.7,y:131.2}).wait(1).to({graphics:mask_graphics_253,x:218.2,y:129.3}).wait(1).to({graphics:mask_graphics_254,x:219.6,y:127.4}).wait(1).to({graphics:mask_graphics_255,x:220.9,y:125.4}).wait(1).to({graphics:mask_graphics_256,x:222.1,y:123.3}).wait(1).to({graphics:mask_graphics_257,x:223.3,y:121.2}).wait(1).to({graphics:mask_graphics_258,x:224.4,y:119.1}).wait(1).to({graphics:mask_graphics_259,x:225.4,y:116.9}).wait(1).to({graphics:mask_graphics_260,x:226.3,y:114.6}).wait(1).to({graphics:mask_graphics_261,x:227.2,y:112.4}).wait(1).to({graphics:mask_graphics_262,x:227.9,y:110.1}).wait(1).to({graphics:mask_graphics_263,x:228.5,y:107.8}).wait(1).to({graphics:mask_graphics_264,x:229.1,y:105.4}).wait(1).to({graphics:mask_graphics_265,x:229.6,y:103}).wait(1).to({graphics:mask_graphics_266,x:230,y:100.7}).wait(1).to({graphics:mask_graphics_267,x:230.2,y:98.3}).wait(1).to({graphics:mask_graphics_268,x:230.4,y:95.9}).wait(1).to({graphics:mask_graphics_269,x:230.5,y:93.5}).wait(1).to({graphics:mask_graphics_270,x:230.6,y:92.9}).wait(1).to({graphics:mask_graphics_271,x:230.6,y:95.3}).wait(1).to({graphics:mask_graphics_272,x:230.6,y:97.8}).wait(1).to({graphics:mask_graphics_273,x:230.6,y:100.2}).wait(1).to({graphics:mask_graphics_274,x:230.6,y:102.5}).wait(1).to({graphics:mask_graphics_275,x:230.6,y:104.9}).wait(1).to({graphics:mask_graphics_276,x:230.7,y:107.3}).wait(1).to({graphics:mask_graphics_277,x:230.7,y:109.6}).wait(1).to({graphics:mask_graphics_278,x:230.7,y:111.9}).wait(1).to({graphics:mask_graphics_279,x:230.7,y:114.2}).wait(1).to({graphics:mask_graphics_280,x:230.7,y:116.4}).wait(1).to({graphics:mask_graphics_281,x:230.7,y:118.6}).wait(1).to({graphics:mask_graphics_282,x:230.7,y:120.8}).wait(1).to({graphics:mask_graphics_283,x:230.6,y:122.9}).wait(1).to({graphics:mask_graphics_284,x:230.6,y:125}).wait(1).to({graphics:mask_graphics_285,x:230.6,y:127}).wait(1).to({graphics:mask_graphics_286,x:230.5,y:129}).wait(1).to({graphics:mask_graphics_287,x:230.5,y:130.9}).wait(1).to({graphics:mask_graphics_288,x:230.5,y:132.7}).wait(1).to({graphics:mask_graphics_289,x:230.4,y:134.5}).wait(1).to({graphics:mask_graphics_290,x:230.4,y:136.3}).wait(1).to({graphics:mask_graphics_291,x:230.4,y:137.9}).wait(1).to({graphics:mask_graphics_292,x:230.4,y:139.5}).wait(1).to({graphics:mask_graphics_293,x:230.5,y:141.1}).wait(1).to({graphics:mask_graphics_294,x:230.5,y:142.5}).wait(1).to({graphics:mask_graphics_295,x:230.5,y:143.9}).wait(1).to({graphics:mask_graphics_296,x:230.5,y:145.2}).wait(1).to({graphics:mask_graphics_297,x:230.5,y:146.4}).wait(1).to({graphics:mask_graphics_298,x:230.6,y:147.5}).wait(1).to({graphics:mask_graphics_299,x:230.6,y:148.6}).wait(1).to({graphics:mask_graphics_300,x:230.6,y:149.6}).wait(1).to({graphics:mask_graphics_301,x:230.5,y:150.4}).wait(1).to({graphics:mask_graphics_302,x:230.5,y:151.2}).wait(1).to({graphics:mask_graphics_303,x:230.5,y:151.9}).wait(1).to({graphics:mask_graphics_304,x:230.5,y:152.6}).wait(1).to({graphics:mask_graphics_305,x:230.4,y:153.1}).wait(1).to({graphics:mask_graphics_306,x:230.4,y:153.5}).wait(1).to({graphics:mask_graphics_307,x:230.4,y:153.8}).wait(1).to({graphics:mask_graphics_308,x:230.3,y:154.1}).wait(1).to({graphics:mask_graphics_309,x:230.3,y:154.2}).wait(1).to({graphics:mask_graphics_310,x:230.3,y:154.3}).wait(361));

	// 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(25,1,1).p("AnTsyQGogPEHD3QEID3gQFkQgRFmjlD4Qh8CHiSA+");
	this.shape_1.setTransform(370.4,182.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(25,1,1).p("A0YtNIaIAAQGpgPEID2QEHD3gQFmQgRFkjlD4QjlD5kxABQkyACgTAAI2FAA");
	this.shape_2.setTransform(286.8,185.7);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},229).to({state:[{t:this.shape_2}]},41).wait(401));

	// Layer 1 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_160 = new cjs.Graphics().p("AiBDdIAAm5IEDAAIAAG5g");
	var mask_1_graphics_161 = new cjs.Graphics().p("AiODdIAAm5IEdAAIAAG5g");
	var mask_1_graphics_162 = new cjs.Graphics().p("AibDdIAAm5IE3AAIAAG5g");
	var mask_1_graphics_163 = new cjs.Graphics().p("AioDdIAAm5IFRAAIAAG5g");
	var mask_1_graphics_164 = new cjs.Graphics().p("Ai1DdIAAm5IFrAAIAAG5g");
	var mask_1_graphics_165 = new cjs.Graphics().p("AjCDdIAAm5IGFAAIAAG5g");
	var mask_1_graphics_166 = new cjs.Graphics().p("AjPDdIAAm5IGfAAIAAG5g");
	var mask_1_graphics_167 = new cjs.Graphics().p("AjcDdIAAm5IG5AAIAAG5g");
	var mask_1_graphics_168 = new cjs.Graphics().p("AjpDdIAAm5IHTAAIAAG5g");
	var mask_1_graphics_169 = new cjs.Graphics().p("Aj2DdIAAm5IHtAAIAAG5g");
	var mask_1_graphics_170 = new cjs.Graphics().p("AkDDdIAAm5IIHAAIAAG5g");
	var mask_1_graphics_171 = new cjs.Graphics().p("AkQDdIAAm5IIhAAIAAG5g");
	var mask_1_graphics_172 = new cjs.Graphics().p("AkcDdIAAm5II5AAIAAG5g");
	var mask_1_graphics_173 = new cjs.Graphics().p("AkpDdIAAm5IJTAAIAAG5g");
	var mask_1_graphics_174 = new cjs.Graphics().p("Ak2DdIAAm5IJuAAIAAG5g");
	var mask_1_graphics_175 = new cjs.Graphics().p("AlDDdIAAm5IKIAAIAAG5g");
	var mask_1_graphics_176 = new cjs.Graphics().p("AlQDdIAAm5IKiAAIAAG5g");
	var mask_1_graphics_177 = new cjs.Graphics().p("AldDdIAAm5IK8AAIAAG5g");
	var mask_1_graphics_178 = new cjs.Graphics().p("AlqDdIAAm5ILWAAIAAG5g");
	var mask_1_graphics_179 = new cjs.Graphics().p("Al3DdIAAm5ILvAAIAAG5g");
	var mask_1_graphics_180 = new cjs.Graphics().p("AmEDdIAAm5IMJAAIAAG5g");
	var mask_1_graphics_181 = new cjs.Graphics().p("AmRDdIAAm5IMjAAIAAG5g");
	var mask_1_graphics_182 = new cjs.Graphics().p("AmeDdIAAm5IM9AAIAAG5g");
	var mask_1_graphics_183 = new cjs.Graphics().p("AmrDdIAAm5INXAAIAAG5g");
	var mask_1_graphics_184 = new cjs.Graphics().p("Am4DdIAAm5INxAAIAAG5g");
	var mask_1_graphics_185 = new cjs.Graphics().p("AnFDdIAAm5IOLAAIAAG5g");
	var mask_1_graphics_186 = new cjs.Graphics().p("AnSDdIAAm5IOlAAIAAG5g");
	var mask_1_graphics_187 = new cjs.Graphics().p("AnfDdIAAm5IO/AAIAAG5g");
	var mask_1_graphics_188 = new cjs.Graphics().p("AnsDdIAAm5IPZAAIAAG5g");
	var mask_1_graphics_189 = new cjs.Graphics().p("An5DdIAAm5IPzAAIAAG5g");
	var mask_1_graphics_190 = new cjs.Graphics().p("AoGDdIAAm5IQNAAIAAG5g");
	var mask_1_graphics_191 = new cjs.Graphics().p("AoTDdIAAm5IQnAAIAAG5g");
	var mask_1_graphics_192 = new cjs.Graphics().p("AogDdIAAm5IRBAAIAAG5g");
	var mask_1_graphics_193 = new cjs.Graphics().p("AotDdIAAm5IRbAAIAAG5g");
	var mask_1_graphics_194 = new cjs.Graphics().p("Ao6DdIAAm5IR1AAIAAG5g");
	var mask_1_graphics_195 = new cjs.Graphics().p("ApHDdIAAm5ISPAAIAAG5g");
	var mask_1_graphics_196 = new cjs.Graphics().p("ApUDdIAAm5ISpAAIAAG5g");
	var mask_1_graphics_197 = new cjs.Graphics().p("AphDdIAAm5ITDAAIAAG5g");
	var mask_1_graphics_198 = new cjs.Graphics().p("ApuDdIAAm5ITdAAIAAG5g");
	var mask_1_graphics_199 = new cjs.Graphics().p("Ap7DdIAAm5IT3AAIAAG5g");
	var mask_1_graphics_200 = new cjs.Graphics().p("AqIDdIAAm5IURAAIAAG5g");
	var mask_1_graphics_201 = new cjs.Graphics().p("AqVDdIAAm5IUrAAIAAG5g");
	var mask_1_graphics_202 = new cjs.Graphics().p("AqhDdIAAm5IVEAAIAAG5g");
	var mask_1_graphics_203 = new cjs.Graphics().p("AquDdIAAm5IVeAAIAAG5g");
	var mask_1_graphics_204 = new cjs.Graphics().p("Aq7DdIAAm5IV3AAIAAG5g");
	var mask_1_graphics_205 = new cjs.Graphics().p("ArIDdIAAm5IWRAAIAAG5g");
	var mask_1_graphics_206 = new cjs.Graphics().p("ArVDdIAAm5IWrAAIAAG5g");
	var mask_1_graphics_207 = new cjs.Graphics().p("AriDdIAAm5IXFAAIAAG5g");
	var mask_1_graphics_208 = new cjs.Graphics().p("ArvDdIAAm5IXgAAIAAG5g");
	var mask_1_graphics_209 = new cjs.Graphics().p("Ar8DdIAAm5IX6AAIAAG5g");
	var mask_1_graphics_210 = new cjs.Graphics().p("AsJDdIAAm5IYTAAIAAG5g");
	var mask_1_graphics_211 = new cjs.Graphics().p("AsWDdIAAm5IYtAAIAAG5g");
	var mask_1_graphics_212 = new cjs.Graphics().p("AsjDdIAAm5IZHAAIAAG5g");
	var mask_1_graphics_213 = new cjs.Graphics().p("AswDdIAAm5IZhAAIAAG5g");
	var mask_1_graphics_214 = new cjs.Graphics().p("As9DdIAAm5IZ7AAIAAG5g");
	var mask_1_graphics_215 = new cjs.Graphics().p("AtKDdIAAm5IaVAAIAAG5g");
	var mask_1_graphics_216 = new cjs.Graphics().p("AtXDdIAAm5IavAAIAAG5g");
	var mask_1_graphics_217 = new cjs.Graphics().p("AtkDdIAAm5IbJAAIAAG5g");
	var mask_1_graphics_218 = new cjs.Graphics().p("AtxDdIAAm5IbjAAIAAG5g");
	var mask_1_graphics_219 = new cjs.Graphics().p("At+DdIAAm5Ib9AAIAAG5g");
	var mask_1_graphics_220 = new cjs.Graphics().p("AuLDdIAAm5IcXAAIAAG5g");
	var mask_1_graphics_221 = new cjs.Graphics().p("AuYDdIAAm5IcxAAIAAG5g");
	var mask_1_graphics_222 = new cjs.Graphics().p("AulDdIAAm5IdLAAIAAG5g");
	var mask_1_graphics_223 = new cjs.Graphics().p("AuyDdIAAm5IdlAAIAAG5g");
	var mask_1_graphics_224 = new cjs.Graphics().p("Au/DdIAAm5Id/AAIAAG5g");
	var mask_1_graphics_225 = new cjs.Graphics().p("AvMDdIAAm5IeZAAIAAG5g");
	var mask_1_graphics_226 = new cjs.Graphics().p("AvZDdIAAm5IezAAIAAG5g");
	var mask_1_graphics_227 = new cjs.Graphics().p("AvmDdIAAm5IfNAAIAAG5g");
	var mask_1_graphics_228 = new cjs.Graphics().p("AvzDdIAAm5IfnAAIAAG5g");
	var mask_1_graphics_229 = new cjs.Graphics().p("AwADdIAAm5MAgBAAAIAAG5g");
	var mask_1_graphics_310 = new cjs.Graphics().p("APZQvIAAm6IAyAAIAAG6gAwKp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_311 = new cjs.Graphics().p("AO7QvIAAm6IBQAAIAAG6gAwJp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_312 = new cjs.Graphics().p("AOcQvIAAm6IBvAAIAAG6gAwJp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_313 = new cjs.Graphics().p("AN9QvIAAm6ICNAAIAAG6gAwJp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_314 = new cjs.Graphics().p("ANeQvIAAm6ICsAAIAAG6gAwJp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_315 = new cjs.Graphics().p("ANAQvIAAm6IDKAAIAAG6gAwJp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_316 = new cjs.Graphics().p("AMhQvIAAm6IDpAAIAAG6gAwJp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_317 = new cjs.Graphics().p("AMCQvIAAm6IEHAAIAAG6gAwIp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_318 = new cjs.Graphics().p("ALkQvIAAm6IElAAIAAG6gAwIp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_319 = new cjs.Graphics().p("ALFQvIAAm6IFEAAIAAG6gAwIp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_320 = new cjs.Graphics().p("AKmQvIAAm6IFjAAIAAG6gAwIp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_321 = new cjs.Graphics().p("AKIQvIAAm6IGBAAIAAG6gAwIp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_322 = new cjs.Graphics().p("AJpQvIAAm6IGgAAIAAG6gAwIp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_323 = new cjs.Graphics().p("AJLQvIAAm6IG9AAIAAG6gAwHp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_324 = new cjs.Graphics().p("AIsQvIAAm6IHcAAIAAG6gAwHp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_325 = new cjs.Graphics().p("AINQvIAAm6IH7AAIAAG6gAwHp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_326 = new cjs.Graphics().p("AHvQvIAAm6IIZAAIAAG6gAwHp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_327 = new cjs.Graphics().p("AHQQvIAAm6II4AAIAAG6gAwHp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_328 = new cjs.Graphics().p("AGxQvIAAm6IJXAAIAAG6gAwHp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_329 = new cjs.Graphics().p("AGSQvIAAm6IJ1AAIAAG6gAwGp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_330 = new cjs.Graphics().p("AF0QvIAAm6IKTAAIAAG6gAwGp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_331 = new cjs.Graphics().p("AFVQvIAAm6IKyAAIAAG6gAwGp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_332 = new cjs.Graphics().p("AE2QvIAAm6ILRAAIAAG6gAwGp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_333 = new cjs.Graphics().p("AEYQvIAAm6ILvAAIAAG6gAwGp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_334 = new cjs.Graphics().p("AD5QvIAAm6IMOAAIAAG6gAwFp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_335 = new cjs.Graphics().p("ADaQvIAAm6IMtAAIAAG6gAwFp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_336 = new cjs.Graphics().p("AC8QvIAAm6INKAAIAAG6gAwFp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_337 = new cjs.Graphics().p("ACdQvIAAm6INpAAIAAG6gAwFp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_338 = new cjs.Graphics().p("AB+QvIAAm6IOIAAIAAG6gAwFp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_339 = new cjs.Graphics().p("ABgQvIAAm6IOmAAIAAG6gAwFp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_340 = new cjs.Graphics().p("ABBQvIAAm6IPFAAIAAG6gAwEp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_341 = new cjs.Graphics().p("AAiQvIAAm6IPkAAIAAG6gAwEp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_342 = new cjs.Graphics().p("AADQvIAAm6IQCAAIAAG6gAwEp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_343 = new cjs.Graphics().p("AgaQvIAAm6IQfAAIAAG6gAwEp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_344 = new cjs.Graphics().p("Ag5QvIAAm6IQ+AAIAAG6gAwEp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_345 = new cjs.Graphics().p("AhYQvIAAm6IRdAAIAAG6gAwEp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_346 = new cjs.Graphics().p("Ah2QvIAAm6IR6AAIAAG6gAwDp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_347 = new cjs.Graphics().p("AiVQvIAAm6ISZAAIAAG6gAwDp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_348 = new cjs.Graphics().p("Ai0QvIAAm6IS4AAIAAG6gAwDp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_349 = new cjs.Graphics().p("AjTQvIAAm6ITXAAIAAG6gAwDp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_350 = new cjs.Graphics().p("AjxQvIAAm6IT1AAIAAG6gAwDp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_351 = new cjs.Graphics().p("AkQQvIAAm6IUUAAIAAG6gAwDp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_352 = new cjs.Graphics().p("AkvQvIAAm6IUyAAIAAG6gAwCp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_353 = new cjs.Graphics().p("AlNQvIAAm6IVQAAIAAG6gAwCp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_354 = new cjs.Graphics().p("AlsQvIAAm6IVvAAIAAG6gAwCp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_355 = new cjs.Graphics().p("AmLQvIAAm6IWOAAIAAG6gAwCp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_356 = new cjs.Graphics().p("AmpQvIAAm6IWsAAIAAG6gAwCp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_357 = new cjs.Graphics().p("AnIQvIAAm6IXLAAIAAG6gAwCp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_358 = new cjs.Graphics().p("AnmQvIAAm6IXpAAIAAG6gAwBp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_359 = new cjs.Graphics().p("AoFQvIAAm6IYHAAIAAG6gAwBp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_360 = new cjs.Graphics().p("AokQvIAAm6IYmAAIAAG6gAwBp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_361 = new cjs.Graphics().p("ApCQvIAAm6IZEAAIAAG6gAwBp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_362 = new cjs.Graphics().p("AphQvIAAm6IZjAAIAAG6gAwBp0IAAm6MAgBAAAIAAG6g");
	var mask_1_graphics_363 = new cjs.Graphics().p("Ap/QvIAAm6IaBAAIAAG6gAwAp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_364 = new cjs.Graphics().p("AqfQvIAAm6IahAAIAAG6gAwAp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_365 = new cjs.Graphics().p("Aq9QvIAAm6Ia+AAIAAG6gAwAp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_366 = new cjs.Graphics().p("ArcQvIAAm6IbdAAIAAG6gAwAp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_367 = new cjs.Graphics().p("Ar7QvIAAm6Ib8AAIAAG6gAwAp0IAAm6MAgAAAAIAAG6g");
	var mask_1_graphics_368 = new cjs.Graphics().p("AsZQvIAAm6IcaAAIAAG6gAwAp0IAAm6MAgBAAAIAAG6g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(160).to({graphics:mask_1_graphics_160,x:146,y:99.1}).wait(1).to({graphics:mask_1_graphics_161,x:147.3,y:99.1}).wait(1).to({graphics:mask_1_graphics_162,x:148.6,y:99.1}).wait(1).to({graphics:mask_1_graphics_163,x:149.9,y:99.1}).wait(1).to({graphics:mask_1_graphics_164,x:151.2,y:99.1}).wait(1).to({graphics:mask_1_graphics_165,x:152.5,y:99.1}).wait(1).to({graphics:mask_1_graphics_166,x:153.8,y:99.1}).wait(1).to({graphics:mask_1_graphics_167,x:155.1,y:99.1}).wait(1).to({graphics:mask_1_graphics_168,x:156.4,y:99.1}).wait(1).to({graphics:mask_1_graphics_169,x:157.7,y:99.1}).wait(1).to({graphics:mask_1_graphics_170,x:159,y:99.1}).wait(1).to({graphics:mask_1_graphics_171,x:160.3,y:99.1}).wait(1).to({graphics:mask_1_graphics_172,x:161.6,y:99.1}).wait(1).to({graphics:mask_1_graphics_173,x:162.9,y:99.1}).wait(1).to({graphics:mask_1_graphics_174,x:164.2,y:99.1}).wait(1).to({graphics:mask_1_graphics_175,x:165.5,y:99.1}).wait(1).to({graphics:mask_1_graphics_176,x:166.8,y:99.1}).wait(1).to({graphics:mask_1_graphics_177,x:168.1,y:99.1}).wait(1).to({graphics:mask_1_graphics_178,x:169.4,y:99.1}).wait(1).to({graphics:mask_1_graphics_179,x:170.7,y:99.1}).wait(1).to({graphics:mask_1_graphics_180,x:171.9,y:99.1}).wait(1).to({graphics:mask_1_graphics_181,x:173.2,y:99.1}).wait(1).to({graphics:mask_1_graphics_182,x:174.5,y:99.1}).wait(1).to({graphics:mask_1_graphics_183,x:175.8,y:99.1}).wait(1).to({graphics:mask_1_graphics_184,x:177.1,y:99.1}).wait(1).to({graphics:mask_1_graphics_185,x:178.4,y:99.1}).wait(1).to({graphics:mask_1_graphics_186,x:179.7,y:99.1}).wait(1).to({graphics:mask_1_graphics_187,x:181,y:99.1}).wait(1).to({graphics:mask_1_graphics_188,x:182.3,y:99.1}).wait(1).to({graphics:mask_1_graphics_189,x:183.6,y:99.1}).wait(1).to({graphics:mask_1_graphics_190,x:184.9,y:99.1}).wait(1).to({graphics:mask_1_graphics_191,x:186.2,y:99.1}).wait(1).to({graphics:mask_1_graphics_192,x:187.5,y:99.1}).wait(1).to({graphics:mask_1_graphics_193,x:188.8,y:99.1}).wait(1).to({graphics:mask_1_graphics_194,x:190.1,y:99.1}).wait(1).to({graphics:mask_1_graphics_195,x:191.4,y:99.1}).wait(1).to({graphics:mask_1_graphics_196,x:192.7,y:99.1}).wait(1).to({graphics:mask_1_graphics_197,x:194,y:99.1}).wait(1).to({graphics:mask_1_graphics_198,x:195.3,y:99.1}).wait(1).to({graphics:mask_1_graphics_199,x:196.6,y:99.1}).wait(1).to({graphics:mask_1_graphics_200,x:197.9,y:99.1}).wait(1).to({graphics:mask_1_graphics_201,x:199.2,y:99.1}).wait(1).to({graphics:mask_1_graphics_202,x:200.5,y:99.1}).wait(1).to({graphics:mask_1_graphics_203,x:201.8,y:99.1}).wait(1).to({graphics:mask_1_graphics_204,x:203.1,y:99.1}).wait(1).to({graphics:mask_1_graphics_205,x:204.4,y:99.1}).wait(1).to({graphics:mask_1_graphics_206,x:205.7,y:99.1}).wait(1).to({graphics:mask_1_graphics_207,x:207,y:99.1}).wait(1).to({graphics:mask_1_graphics_208,x:208.3,y:99.1}).wait(1).to({graphics:mask_1_graphics_209,x:209.6,y:99.1}).wait(1).to({graphics:mask_1_graphics_210,x:210.8,y:99.1}).wait(1).to({graphics:mask_1_graphics_211,x:212.1,y:99.1}).wait(1).to({graphics:mask_1_graphics_212,x:213.4,y:99.1}).wait(1).to({graphics:mask_1_graphics_213,x:214.7,y:99.1}).wait(1).to({graphics:mask_1_graphics_214,x:216,y:99.1}).wait(1).to({graphics:mask_1_graphics_215,x:217.3,y:99.1}).wait(1).to({graphics:mask_1_graphics_216,x:218.6,y:99.1}).wait(1).to({graphics:mask_1_graphics_217,x:219.9,y:99.1}).wait(1).to({graphics:mask_1_graphics_218,x:221.2,y:99.1}).wait(1).to({graphics:mask_1_graphics_219,x:222.5,y:99.1}).wait(1).to({graphics:mask_1_graphics_220,x:223.8,y:99.1}).wait(1).to({graphics:mask_1_graphics_221,x:225.1,y:99.1}).wait(1).to({graphics:mask_1_graphics_222,x:226.4,y:99.1}).wait(1).to({graphics:mask_1_graphics_223,x:227.7,y:99.1}).wait(1).to({graphics:mask_1_graphics_224,x:229,y:99.1}).wait(1).to({graphics:mask_1_graphics_225,x:230.3,y:99.1}).wait(1).to({graphics:mask_1_graphics_226,x:231.6,y:99.1}).wait(1).to({graphics:mask_1_graphics_227,x:232.9,y:99.1}).wait(1).to({graphics:mask_1_graphics_228,x:234.2,y:99.1}).wait(1).to({graphics:mask_1_graphics_229,x:235.5,y:99.1}).wait(81).to({graphics:mask_1_graphics_310,x:236.5,y:184.1}).wait(1).to({graphics:mask_1_graphics_311,x:236.5,y:184.1}).wait(1).to({graphics:mask_1_graphics_312,x:236.5,y:184.1}).wait(1).to({graphics:mask_1_graphics_313,x:236.4,y:184.1}).wait(1).to({graphics:mask_1_graphics_314,x:236.4,y:184.1}).wait(1).to({graphics:mask_1_graphics_315,x:236.4,y:184.1}).wait(1).to({graphics:mask_1_graphics_316,x:236.4,y:184.1}).wait(1).to({graphics:mask_1_graphics_317,x:236.4,y:184.1}).wait(1).to({graphics:mask_1_graphics_318,x:236.3,y:184.1}).wait(1).to({graphics:mask_1_graphics_319,x:236.3,y:184.1}).wait(1).to({graphics:mask_1_graphics_320,x:236.3,y:184.1}).wait(1).to({graphics:mask_1_graphics_321,x:236.3,y:184.1}).wait(1).to({graphics:mask_1_graphics_322,x:236.3,y:184.1}).wait(1).to({graphics:mask_1_graphics_323,x:236.3,y:184.1}).wait(1).to({graphics:mask_1_graphics_324,x:236.2,y:184.1}).wait(1).to({graphics:mask_1_graphics_325,x:236.2,y:184.1}).wait(1).to({graphics:mask_1_graphics_326,x:236.2,y:184.1}).wait(1).to({graphics:mask_1_graphics_327,x:236.2,y:184.1}).wait(1).to({graphics:mask_1_graphics_328,x:236.2,y:184.1}).wait(1).to({graphics:mask_1_graphics_329,x:236.2,y:184.1}).wait(1).to({graphics:mask_1_graphics_330,x:236.1,y:184.1}).wait(1).to({graphics:mask_1_graphics_331,x:236.1,y:184.1}).wait(1).to({graphics:mask_1_graphics_332,x:236.1,y:184.1}).wait(1).to({graphics:mask_1_graphics_333,x:236.1,y:184.1}).wait(1).to({graphics:mask_1_graphics_334,x:236.1,y:184.1}).wait(1).to({graphics:mask_1_graphics_335,x:236.1,y:184.1}).wait(1).to({graphics:mask_1_graphics_336,x:236,y:184.1}).wait(1).to({graphics:mask_1_graphics_337,x:236,y:184.1}).wait(1).to({graphics:mask_1_graphics_338,x:236,y:184.1}).wait(1).to({graphics:mask_1_graphics_339,x:236,y:184.1}).wait(1).to({graphics:mask_1_graphics_340,x:236,y:184.1}).wait(1).to({graphics:mask_1_graphics_341,x:236,y:184.1}).wait(1).to({graphics:mask_1_graphics_342,x:235.9,y:184.1}).wait(1).to({graphics:mask_1_graphics_343,x:235.9,y:184.1}).wait(1).to({graphics:mask_1_graphics_344,x:235.9,y:184.1}).wait(1).to({graphics:mask_1_graphics_345,x:235.9,y:184.1}).wait(1).to({graphics:mask_1_graphics_346,x:235.9,y:184.1}).wait(1).to({graphics:mask_1_graphics_347,x:235.8,y:184.1}).wait(1).to({graphics:mask_1_graphics_348,x:235.8,y:184.1}).wait(1).to({graphics:mask_1_graphics_349,x:235.8,y:184.1}).wait(1).to({graphics:mask_1_graphics_350,x:235.8,y:184.1}).wait(1).to({graphics:mask_1_graphics_351,x:235.8,y:184.1}).wait(1).to({graphics:mask_1_graphics_352,x:235.8,y:184.1}).wait(1).to({graphics:mask_1_graphics_353,x:235.7,y:184.1}).wait(1).to({graphics:mask_1_graphics_354,x:235.7,y:184.1}).wait(1).to({graphics:mask_1_graphics_355,x:235.7,y:184.1}).wait(1).to({graphics:mask_1_graphics_356,x:235.7,y:184.1}).wait(1).to({graphics:mask_1_graphics_357,x:235.7,y:184.1}).wait(1).to({graphics:mask_1_graphics_358,x:235.7,y:184.1}).wait(1).to({graphics:mask_1_graphics_359,x:235.6,y:184.1}).wait(1).to({graphics:mask_1_graphics_360,x:235.6,y:184.1}).wait(1).to({graphics:mask_1_graphics_361,x:235.6,y:184.1}).wait(1).to({graphics:mask_1_graphics_362,x:235.6,y:184.1}).wait(1).to({graphics:mask_1_graphics_363,x:235.6,y:184.1}).wait(1).to({graphics:mask_1_graphics_364,x:235.6,y:184.1}).wait(1).to({graphics:mask_1_graphics_365,x:235.5,y:184.1}).wait(1).to({graphics:mask_1_graphics_366,x:235.5,y:184.1}).wait(1).to({graphics:mask_1_graphics_367,x:235.5,y:184.1}).wait(1).to({graphics:mask_1_graphics_368,x:235.5,y:184.1}).wait(303));

	// 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(25,1,1).p("A0YtNIaIAAQGpgPEID2QEHD3gQFmQgRFkjlD4QjlD5kxABQkyACgTAAI2FAA");
	this.shape_3.setTransform(286.8,185.7);
	this.shape_3._off = true;

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(160).to({_off:false},0).wait(511));

	// 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(25,1,1).p("AAAgOIAAAd");
	this.shape_4.setTransform(156.3,102.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(25,1,1).p("AAAAbIAAg1");
	this.shape_5.setTransform(156.3,103.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(25,1,1).p("AAAAnIAAhN");
	this.shape_6.setTransform(156.3,104.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(25,1,1).p("AAAAzIAAhl");
	this.shape_7.setTransform(156.3,106.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(25,1,1).p("AAAA/IAAh9");
	this.shape_8.setTransform(156.3,107.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(25,1,1).p("AAABLIAAiV");
	this.shape_9.setTransform(156.3,108.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(25,1,1).p("AAABXIAAit");
	this.shape_10.setTransform(156.3,109.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(25,1,1).p("AAABjIAAjF");
	this.shape_11.setTransform(156.3,111);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(25,1,1).p("AAABvIAAjd");
	this.shape_12.setTransform(156.3,112.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(25,1,1).p("AAAB7IAAj1");
	this.shape_13.setTransform(156.3,113.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(25,1,1).p("AAACHIAAkN");
	this.shape_14.setTransform(156.3,114.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(25,1,1).p("AAACTIAAkl");
	this.shape_15.setTransform(156.3,115.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(25,1,1).p("AAACfIAAk9");
	this.shape_16.setTransform(156.3,117);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(25,1,1).p("AAACrIAAlV");
	this.shape_17.setTransform(156.3,118.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(25,1,1).p("AAAC3IAAlt");
	this.shape_18.setTransform(156.3,119.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(25,1,1).p("AAADDIAAmF");
	this.shape_19.setTransform(156.3,120.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(25,1,1).p("AAADQIAAmf");
	this.shape_20.setTransform(156.3,121.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(25,1,1).p("AAADbIAAm2");
	this.shape_21.setTransform(156.3,123);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(25,1,1).p("AAADoIAAnO");
	this.shape_22.setTransform(156.3,124.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(25,1,1).p("AAADzIAAnm");
	this.shape_23.setTransform(156.3,125.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(25,1,1).p("AAAEAIAAn+");
	this.shape_24.setTransform(156.3,126.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(25,1,1).p("AAAEMIAAoX");
	this.shape_25.setTransform(156.3,127.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(25,1,1).p("AAAEYIAAov");
	this.shape_26.setTransform(156.3,129);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(25,1,1).p("AAAEkIAApH");
	this.shape_27.setTransform(156.3,130.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(25,1,1).p("AAAEwIAApf");
	this.shape_28.setTransform(156.3,131.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(25,1,1).p("AAAE8IAAp3");
	this.shape_29.setTransform(156.3,132.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(25,1,1).p("AAAFIIAAqP");
	this.shape_30.setTransform(156.3,133.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(25,1,1).p("AAAFUIAAqn");
	this.shape_31.setTransform(156.3,135);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(25,1,1).p("AAAFgIAAq/");
	this.shape_32.setTransform(156.3,136.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(25,1,1).p("AAAFsIAArX");
	this.shape_33.setTransform(156.3,137.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(25,1,1).p("AAAF4IAArv");
	this.shape_34.setTransform(156.3,138.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(25,1,1).p("AAAGEIAAsH");
	this.shape_35.setTransform(156.3,139.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(25,1,1).p("AAAGQIAAsf");
	this.shape_36.setTransform(156.3,141.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(25,1,1).p("AAAGcIAAs3");
	this.shape_37.setTransform(156.3,142.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(25,1,1).p("AAAGoIAAtP");
	this.shape_38.setTransform(156.3,143.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(25,1,1).p("AAAG0IAAtn");
	this.shape_39.setTransform(156.3,144.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(25,1,1).p("AAAHAIAAt/");
	this.shape_40.setTransform(156.3,145.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(25,1,1).p("AAAHMIAAuX");
	this.shape_41.setTransform(156.3,147.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(25,1,1).p("AAAHYIAAuv");
	this.shape_42.setTransform(156.3,148.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(25,1,1).p("AAAHkIAAvH");
	this.shape_43.setTransform(156.3,149.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(25,1,1).p("AAAHwIAAvf");
	this.shape_44.setTransform(156.3,150.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(25,1,1).p("AAAH8IAAv4");
	this.shape_45.setTransform(156.3,151.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(25,1,1).p("AAAIJIAAwR");
	this.shape_46.setTransform(156.3,153.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(25,1,1).p("AAAIVIAAwp");
	this.shape_47.setTransform(156.3,154.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(25,1,1).p("AAAIgIAAxA");
	this.shape_48.setTransform(156.3,155.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(25,1,1).p("AAAItIAAxY");
	this.shape_49.setTransform(156.3,156.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(25,1,1).p("AAAI5IAAxx");
	this.shape_50.setTransform(156.3,157.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(25,1,1).p("AAAJFIAAyJ");
	this.shape_51.setTransform(156.3,159.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(25,1,1).p("AAAJRIAAyh");
	this.shape_52.setTransform(156.3,160.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(25,1,1).p("AAAJdIAAy5");
	this.shape_53.setTransform(156.3,161.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(25,1,1).p("AAAJpIAAzR");
	this.shape_54.setTransform(156.3,162.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(25,1,1).p("AAAJ1IAAzp");
	this.shape_55.setTransform(156.3,163.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(25,1,1).p("AAAKBIAA0B");
	this.shape_56.setTransform(156.3,165.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(25,1,1).p("AAAKNIAA0Z");
	this.shape_57.setTransform(156.3,166.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(25,1,1).p("AAAKZIAA0x");
	this.shape_58.setTransform(156.3,167.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(25,1,1).p("AAAKlIAA1J");
	this.shape_59.setTransform(156.3,168.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(25,1,1).p("AAAKxIAA1h");
	this.shape_60.setTransform(156.3,170);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(25,1,1).p("AAAK9IAA15");
	this.shape_61.setTransform(156.3,171.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(25,1,1).p("AAALJIAA2R");
	this.shape_62.setTransform(156.3,172.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(25,1,1).p("AAALVIAA2p");
	this.shape_63.setTransform(156.3,173.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(25,1,1).p("AAALhIAA3B");
	this.shape_64.setTransform(156.3,174.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(25,1,1).p("AAALtIAA3Z");
	this.shape_65.setTransform(156.3,176);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(25,1,1).p("AAAL5IAA3x");
	this.shape_66.setTransform(156.3,177.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(25,1,1).p("AAAMFIAA4J");
	this.shape_67.setTransform(156.3,178.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(25,1,1).p("AAAMRIAA4h");
	this.shape_68.setTransform(156.3,179.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(25,1,1).p("AAAMdIAA45");
	this.shape_69.setTransform(156.3,180.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(25,1,1).p("AAAMpIAA5R");
	this.shape_70.setTransform(156.3,182);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(25,1,1).p("AAAM2IAA5r");
	this.shape_71.setTransform(156.3,183.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(25,1,1).p("AAANCIAA6D");
	this.shape_72.setTransform(156.3,184.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(25,1,1).p("AAANNIAA6a");
	this.shape_73.setTransform(156.3,185.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(25,1,1).p("AAANaIAA6z");
	this.shape_74.setTransform(156.3,186.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(25,1,1).p("AAANlIAA7K");
	this.shape_75.setTransform(156.3,188);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(25,1,1).p("AAANyIAA7j");
	this.shape_76.setTransform(156.3,189.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(25,1,1).p("AAAN+IAA77");
	this.shape_77.setTransform(156.3,190.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(25,1,1).p("AAAOKIAA8T");
	this.shape_78.setTransform(156.3,191.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(25,1,1).p("AAAOWIAA8r");
	this.shape_79.setTransform(156.3,192.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(25,1,1).p("AAAOiIAA9D");
	this.shape_80.setTransform(156.3,194);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(25,1,1).p("AAAOuIAA9b");
	this.shape_81.setTransform(156.3,195.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(25,1,1).p("AAAO6IAA9z");
	this.shape_82.setTransform(156.3,196.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(25,1,1).p("AAAPGIAA+L");
	this.shape_83.setTransform(156.3,197.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(25,1,1).p("AAAPSIAA+j");
	this.shape_84.setTransform(156.3,198.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(25,1,1).p("AAAPeIAA+7");
	this.shape_85.setTransform(156.3,200.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(25,1,1).p("AAAPqIAA/T");
	this.shape_86.setTransform(156.3,201.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(25,1,1).p("AAAP2IAA/r");
	this.shape_87.setTransform(156.3,202.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(25,1,1).p("AAAQCMAAAggD");
	this.shape_88.setTransform(156.3,203.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(25,1,1).p("AAAQOMAAAggb");
	this.shape_89.setTransform(156.3,204.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(25,1,1).p("AAAQaMAAAggz");
	this.shape_90.setTransform(156.3,206.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(25,1,1).p("AAAQmMAAAghL");
	this.shape_91.setTransform(156.3,207.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(25,1,1).p("AAAQyMAAAghj");
	this.shape_92.setTransform(156.3,208.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(25,1,1).p("AAAQ+MAAAgh7");
	this.shape_93.setTransform(156.3,209.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(25,1,1).p("AAARKMAAAgiT");
	this.shape_94.setTransform(156.3,210.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(25,1,1).p("AAARWMAAAgir");
	this.shape_95.setTransform(156.3,212.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(25,1,1).p("AAARjMAAAgjF");
	this.shape_96.setTransform(156.3,213.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(25,1,1).p("AAARvMAAAgjd");
	this.shape_97.setTransform(156.3,214.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(25,1,1).p("AAAR7MAAAgj1");
	this.shape_98.setTransform(156.3,215.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(25,1,1).p("AAASHMAAAgkN");
	this.shape_99.setTransform(156.3,216.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(25,1,1).p("AAASSMAAAgkk");
	this.shape_100.setTransform(156.3,218.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(25,1,1).p("AAASfMAAAgk9");
	this.shape_101.setTransform(156.3,219.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(25,1,1).p("AAASrMAAAglV");
	this.shape_102.setTransform(156.3,220.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(25,1,1).p("AAAS3MAAAglt");
	this.shape_103.setTransform(156.3,221.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(25,1,1).p("AAATDMAAAgmF");
	this.shape_104.setTransform(156.3,222.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(25,1,1).p("AAATPMAAAgmd");
	this.shape_105.setTransform(156.3,224.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(25,1,1).p("AAATbMAAAgm1");
	this.shape_106.setTransform(156.3,225.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(25,1,1).p("AAATnMAAAgnN");
	this.shape_107.setTransform(156.3,226.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(25,1,1).p("AAATzMAAAgnl");
	this.shape_108.setTransform(156.3,227.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(25,1,1).p("AAAT/MAAAgn9");
	this.shape_109.setTransform(156.3,229);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(25,1,1).p("AAAULMAAAgoV");
	this.shape_110.setTransform(156.3,230.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(25,1,1).p("AAAUXMAAAgot");
	this.shape_111.setTransform(156.3,231.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(25,1,1).p("AAAUjMAAAgpF");
	this.shape_112.setTransform(156.3,232.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(25,1,1).p("AAAUvMAAAgpd");
	this.shape_113.setTransform(156.3,233.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(25,1,1).p("AAAU7MAAAgp1");
	this.shape_114.setTransform(156.3,235);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(25,1,1).p("AAAVHMAAAgqN");
	this.shape_115.setTransform(156.3,236.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(25,1,1).p("AAAVTMAAAgql");
	this.shape_116.setTransform(156.3,237.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(25,1,1).p("AAAVfMAAAgq9");
	this.shape_117.setTransform(156.3,238.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(25,1,1).p("AAAVrMAAAgrV");
	this.shape_118.setTransform(156.3,239.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(25,1,1).p("AAAV3MAAAgrt");
	this.shape_119.setTransform(156.3,241);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(25,1,1).p("AAAWDMAAAgsF");
	this.shape_120.setTransform(156.3,242.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(25,1,1).p("AAAWPMAAAgsd");
	this.shape_121.setTransform(156.3,243.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(25,1,1).p("AAAWbMAAAgs2");
	this.shape_122.setTransform(156.3,244.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(25,1,1).p("AAAWoMAAAgtP");
	this.shape_123.setTransform(156.3,245.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(25,1,1).p("AAAW0MAAAgtn");
	this.shape_124.setTransform(156.3,247);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(25,1,1).p("AAAXAMAAAgt/");
	this.shape_125.setTransform(156.3,248.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(25,1,1).p("AAAXMMAAAguX");
	this.shape_126.setTransform(156.3,249.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(25,1,1).p("AAAXXMAAAguu");
	this.shape_127.setTransform(156.3,250.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(25,1,1).p("AAAXkMAAAgvH");
	this.shape_128.setTransform(156.3,251.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(25,1,1).p("AAAXwMAAAgvf");
	this.shape_129.setTransform(156.3,253);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(25,1,1).p("AAAX8MAAAgv3");
	this.shape_130.setTransform(156.3,254.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").ss(25,1,1).p("AAAYIMAAAgwP");
	this.shape_131.setTransform(156.3,255.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(25,1,1).p("AAAYUMAAAgwn");
	this.shape_132.setTransform(156.3,256.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(25,1,1).p("AAAYgMAAAgw/");
	this.shape_133.setTransform(156.3,257.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(25,1,1).p("AAAYsMAAAgxX");
	this.shape_134.setTransform(156.3,259.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#000000").ss(25,1,1).p("AAAY4MAAAgxv");
	this.shape_135.setTransform(156.3,260.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#000000").ss(25,1,1).p("AAAZEMAAAgyH");
	this.shape_136.setTransform(156.3,261.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#000000").ss(25,1,1).p("AAAZQMAAAgyf");
	this.shape_137.setTransform(156.3,262.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").ss(25,1,1).p("AAAZcMAAAgy3");
	this.shape_138.setTransform(156.3,263.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#000000").ss(25,1,1).p("AAAZoMAAAgzP");
	this.shape_139.setTransform(156.3,265.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").ss(25,1,1).p("AAAZ0MAAAgzn");
	this.shape_140.setTransform(156.3,266.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#000000").ss(25,1,1).p("AAAaAMAAAgz/");
	this.shape_141.setTransform(156.3,267.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#000000").ss(25,1,1).p("AAAaMMAAAg0X");
	this.shape_142.setTransform(156.3,268.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#000000").ss(25,1,1).p("AAA6XMAAAA0v");
	this.shape_143.setTransform(156.3,269.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4}]},10).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).wait(522));

	// Base
	this.instance_6 = new lib.basefont("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(286.4,271.4);
	this.instance_6.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(671));

	// Background
	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_144.setTransform(275,275,3.373,2.543);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_145.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_145},{t:this.shape_144}]}).wait(671));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(273.5,234.3,553,726.5);
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