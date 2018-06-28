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
	this.shape.graphics.f("#FFFFFF").s().p("ADLZKQj5jvAAlaIgCybQkIDuliAAQmCAAkRkaQkTkcAAmPQAAmRERkbQERkcGCAAQFhAAELDwIAAg/QAAhKA6gyQA6gzBIAAQCdAAAADKMAAAApfQAAD8CTCNQCICEDoAAQEuAACxjSQA4hHBHAAQA/AAA+A0QA6AyAAA/QAAAzgoAwQkVFMnOAAQlyAAj5jwgAxG0wQizC3AAEIQAAEFCzC4QCxC5D7AAQD/AACwi5QCyi4AAkFQAAkIiyi3Qiwi3j/AAQj7AAixC3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160.1,-184.9,320.2,370);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 10
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(25,1,1).p("AMHAAQAAFBjjDjQjjDjlBAAQlAAAjjjjQjjjjAAlBQAAlADjjjQDjjjFAAAQFBAADjDjQDjDjAAFAg");
	this.shape.setTransform(275.4,365.8,0.986,1.025);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(200).to({_off:false},0).wait(5));

	// Layer 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_187 = new cjs.Graphics().p("EAFXAksQnci7jNnVMAjYgPdQDNHVi6HdQi8HcnVDNQj1Brj4AAQjhAAjjhZg");
	var mask_graphics_188 = new cjs.Graphics().p("EAE6AkgQnXjHjBnaMAjwgOjQDBHajGHYQjIHXnZDBQjqBfjpAAQjwAAjvhlg");
	var mask_graphics_189 = new cjs.Graphics().p("EAEeAkUQnSjTi1nfMAkHgNpQC1HejSHTQjUHSneC1QjeBUjbAAQj+AAj6hxg");
	var mask_graphics_190 = new cjs.Graphics().p("EAECAkHQnNjfipnjMAkcgMvQCpHjjdHNQjgHNniCpQjRBJjNAAQkNAAkFh+g");
	var mask_graphics_191 = new cjs.Graphics().p("EADmAj5QnHjqidnnMAkwgL1QCdHnjpHIQjrHHnnCdQjEA/i+AAQkcAAkQiMg");
	var mask_graphics_192 = new cjs.Graphics().p("EADLAjrQnBj1iRnrMAlDgK6QCQHrj1HCQj2HBnqCQQi3A2iwAAQkrAAkaiag");
	var mask_graphics_193 = new cjs.Graphics().p("EACwAjcQm7kBiEnuMAlTgJ+QCEHvkAG7QkBG7nuCEQioAtijAAQk6AAkkipg");
	var mask_graphics_194 = new cjs.Graphics().p("EACVAjMQm0kLh3nyMAligJCQB3HykKG1QkNG0nxB3QiaAmiUAAQlLAAkti5g");
	var mask_graphics_195 = new cjs.Graphics().p("EAB7Ai8QmtkXhrn0MAlwgIFQBrH0kWGuQkXGun0BrQiLAdiGAAQlbAAk2jIg");
	var mask_graphics_196 = new cjs.Graphics().p("EABiAirQmnkhhen3MAl8gHJQBfH3khGnQkiGnn2BeQh8AXh4AAQlsAAk9jZg");
	var mask_graphics_197 = new cjs.Graphics().p("EABIAiZQmekrhSn6MAmHgGLQBRH5kqGgQktGfn4BRQhtAShpAAQl9AAlGjrg");
	var mask_graphics_198 = new cjs.Graphics().p("EAAwAiHQmXk2hGn7MAmQgFOQBGH7k2GYQk2GXn7BFQhdANhZAAQmQAAlMj9g");
	var mask_graphics_199 = new cjs.Graphics().p("EAAXAh0QmPlAg4n9MAmXgEQQA5H9lAGQQlAGPn9A4QhMAJhKAAQmjAAlTkQg");
	var mask_graphics_200 = new cjs.Graphics().p("EAAAAhhQmHlKgsn+MAmegDTQArH+lJGIQlLGHn9ArQg8AGg6AAQm2AAlZkjg");
	var mask_graphics_201 = new cjs.Graphics().p("EgAXAhNQl/lUgfn/MAmigCVQAfH/lTGAQlVF+n+AfQgrACgpAAQnLAAlek2g");
	var mask_graphics_202 = new cjs.Graphics().p("EgAuAg4Ql3legSn/MAmmgBXQARIAlcF3QleF2n/ASIgyAAQngAAljlLg");
	var mask_graphics_203 = new cjs.Graphics().p("EgBEAgjQlulngFoAMAmmgAYQAFH/llFuQloFtn/AFIgOAAQn3AAlnlgg");
	var mask_graphics_204 = new cjs.Graphics().p("EAMJAmDQoAgIljluQlllwAIoAMAmmAAmQgIH/lvFlQloFcnxAAIgWAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(187).to({graphics:mask_graphics_187,x:203.4,y:243.7}).wait(1).to({graphics:mask_graphics_188,x:203.3,y:243.7}).wait(1).to({graphics:mask_graphics_189,x:203.3,y:243.7}).wait(1).to({graphics:mask_graphics_190,x:203.3,y:243.7}).wait(1).to({graphics:mask_graphics_191,x:203.3,y:243.7}).wait(1).to({graphics:mask_graphics_192,x:203.3,y:243.7}).wait(1).to({graphics:mask_graphics_193,x:203.3,y:243.7}).wait(1).to({graphics:mask_graphics_194,x:203.3,y:243.7}).wait(1).to({graphics:mask_graphics_195,x:203.3,y:243.6}).wait(1).to({graphics:mask_graphics_196,x:203.2,y:243.6}).wait(1).to({graphics:mask_graphics_197,x:203.2,y:243.6}).wait(1).to({graphics:mask_graphics_198,x:203.2,y:243.6}).wait(1).to({graphics:mask_graphics_199,x:203.2,y:243.6}).wait(1).to({graphics:mask_graphics_200,x:203.2,y:243.6}).wait(1).to({graphics:mask_graphics_201,x:203.1,y:243.5}).wait(1).to({graphics:mask_graphics_202,x:203.1,y:243.5}).wait(1).to({graphics:mask_graphics_203,x:203.1,y:243.5}).wait(1).to({graphics:mask_graphics_204,x:203.1,y:243.5}).wait(1));

	// Layer 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(25,1,1).p("AMHAAQAAFBjjDjQjjDjlBAAQlAAAjjjjQjjjjAAlBQAAlADjjjQDjjjFAAAQFBAADjDjQDjDjAAFAg");
	this.shape_1.setTransform(275.4,365.8,0.986,1.025);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(187).to({_off:false},0).wait(18));

	// Layer 4 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_92 = new cjs.Graphics().p("AjgPxQEdmqH1hlQH3hkGqEbQGrEdBkH2Mgl5AHmQhkn3Ebmqg");
	var mask_1_graphics_93 = new cjs.Graphics().p("AjNPkQEpmhH4hVQH6hVGhEpQGiEpBVH5MgmHAGbQhVn5Epmig");
	var mask_1_graphics_94 = new cjs.Graphics().p("Ai6PYQE2mXH7hGQH8hFGYE1QGYE2BFH8MgmSAFPQhFn7E1mZg");
	var mask_1_graphics_95 = new cjs.Graphics().p("AikPNQFCmOH9g1QH+g2GNFCQGPFCA2H+MgmbAEDQg2n9FCmPg");
	var mask_1_graphics_96 = new cjs.Graphics().p("AiOPDQFPmEH+gmQH/gmGEFOQGEFPAmH/MgmiAC3Qgmn/FOmEg");
	var mask_1_graphics_97 = new cjs.Graphics().p("Ah1O5QFal5H/gWQIAgWF5FZQF6FbAXIAMgmnABrQgWoAFal6g");
	var mask_1_graphics_98 = new cjs.Graphics().p("AhcOxQFmlvIAgGQIAgHFuFlQFwFnAGIAMgmoAAfQgHoAFllvg");
	var mask_1_graphics_99 = new cjs.Graphics().p("Am6b2QAJoAFwlkQFxljIAAJQIAAKFjFwQFkFxgJIAg");
	var mask_1_graphics_100 = new cjs.Graphics().p("Am5a9QAZn/F7lZQF8lXH/AZQIAAZFXF7QFZF8gZH/g");
	var mask_1_graphics_101 = new cjs.Graphics().p("Am3aEQApn+GGlNQGGlMH+ApQH/ApFLGFQFNGHgpH+g");
	var mask_1_graphics_102 = new cjs.Graphics().p("AmzZLQA4n9GPlAQGRlAH8A5QH+A4E/GQQFBGQg5H9g");
	var mask_1_graphics_103 = new cjs.Graphics().p("AmvYSQBJn7GYk0QGakzH7BJQH7BIE0GZQEzGahIH7g");
	var mask_1_graphics_104 = new cjs.Graphics().p("AmpXaQBYn5GhknQGkkmH4BYQH5BYEnGiQEnGjhYH5g");
	var mask_1_graphics_105 = new cjs.Graphics().p("AmiWiQBnn2GrkaQGtkZH1BnQH2BnEZGsQEaGshnH2g");
	var mask_1_graphics_106 = new cjs.Graphics().p("AmaVqQB3nyGzkNQG1kMHyB3QHyB3EMGzQENG1h3Hyg");
	var mask_1_graphics_107 = new cjs.Graphics().p("AmRUzQCGnvG7j/QG+j+HtCGQHvCGD/G8QD/G8iGHvg");
	var mask_1_graphics_108 = new cjs.Graphics().p("AmGT8QCVnqHDjyQHEjwHqCVQHqCVDxHEQDxHEiVHqg");
	var mask_1_graphics_109 = new cjs.Graphics().p("Al7TFQClnlHKjjQHMjjHkCkQHmClDiHKQDkHMilHlg");
	var mask_1_graphics_110 = new cjs.Graphics().p("AluSPQCznfHRjWQHTjUHfCzQHgCzDVHSQDVHSizHgg");
	var mask_1_graphics_111 = new cjs.Graphics().p("AlgRaQDCnaHXjHQHZjFHZDBQHbDCDGHYQDGHZjBHag");
	var mask_1_graphics_112 = new cjs.Graphics().p("AlRQlQDQnTHdi5QHfi2HUDQQHUDQC3HeQC4HfjQHTg");
	var mask_1_graphics_113 = new cjs.Graphics().p("AlBPyQDfnOHiipQHlioHMDeQHODfCoHjQCpHkjeHOg");
	var mask_1_graphics_114 = new cjs.Graphics().p("AkvO/QDsnHHoiaQHpiZHFDsQHHDtCaHoQCaHqjtHGg");
	var mask_1_graphics_115 = new cjs.Graphics().p("AkdOMQD6m+HsiMQHuiJG+D6QG/D7CLHsQCKHuj6G+g");
	var mask_1_graphics_116 = new cjs.Graphics().p("AkKNbQEIm3Hwh8QHyh6G2EIQG3EIB8HwQB7HykIG3g");
	var mask_1_graphics_117 = new cjs.Graphics().p("Aj1MqQEUmuH1htQH1hrGuEWQGvEVBrH0QBtH2kWGug");
	var mask_1_graphics_118 = new cjs.Graphics().p("AjgL7QEimmH3hdQH5hcGlEjQGmEjBcH3QBdH4kjGmg");
	var mask_1_graphics_119 = new cjs.Graphics().p("AjKLMQEvmcH6hOQH7hMGcEvQGdEwBNH6QBNH7kwGcg");
	var mask_1_graphics_120 = new cjs.Graphics().p("AiyKfQE7mTH8g+QH9g8GTE7QGTE9A9H7QA+H+k8GTg");
	var mask_1_graphics_121 = new cjs.Graphics().p("AiaJyQFHmJH+guQH/gtGJFIQGJFJAtH+QAuH+lIGJg");
	var mask_1_graphics_122 = new cjs.Graphics().p("AiBJHQFTl/IAgeQH/gdF/FUQF/FVAdH+QAeIAlUF/g");
	var mask_1_graphics_123 = new cjs.Graphics().p("AhnIdQFfl0IAgPQIAgNF0FgQF0FgAOH/QAOIBlgF0g");
	var mask_1_graphics_124 = new cjs.Graphics().p("AhMH0QFqlpIAABQIBADFoFrQFpFrgBIAQgCIAlrFpg");
	var mask_1_graphics_125 = new cjs.Graphics().p("AgxHMQF1ldIAARQIAASFeF2QFdF2gRIAQgRIAl3Feg");
	var mask_1_graphics_126 = new cjs.Graphics().p("AgVGmQGAlSH/AhQIAAiFRGAQFSGBghH/QghIAmBFRg");
	var mask_1_graphics_127 = new cjs.Graphics().p("AAHGBQGLlGH+AwQH+AyFGGLQFGGLgxH9QgxH/mLFGg");
	var mask_1_graphics_128 = new cjs.Graphics().p("AAlFdQGVk5H8BAQH8BBE5GVQE6GVhBH7QhAH9mVE6g");
	var mask_1_graphics_129 = new cjs.Graphics().p("ABDE7QGektH6BQQH6BREtGeQEtGfhQH5QhQH6mfEtg");
	var mask_1_graphics_130 = new cjs.Graphics().p("ABiEaQGnkfH4BeQH3BhEgGnQEgGohgH2QhgH4mnEgg");
	var mask_1_graphics_131 = new cjs.Graphics().p("ACCD7QGwkSH0BuQH0BwESGvQETGxhvHzQhvH1mwESg");
	var mask_1_graphics_132 = new cjs.Graphics().p("ACiDdQG4kEHxB8QHwCAEFG4QEGG5h/HvQh+Hxm5EFg");
	var mask_1_graphics_133 = new cjs.Graphics().p("ADDDBQHAj3HsCMQHtCPD3HAQD4HAiOHsQiOHsnAD4g");
	var mask_1_graphics_134 = new cjs.Graphics().p("ADlCmQHHjpHoCbQHnCeDqHHQDqHIidHnQidHonIDqg");
	var mask_1_graphics_135 = new cjs.Graphics().p("AEHCMQHOjaHjCqQHiCtDcHOQDbHPirHiQisHjnPDbg");
	var mask_1_graphics_136 = new cjs.Graphics().p("AEpB1QHVjMHdC4QHdC8DNHVQDOHVi7HcQi7HenVDNg");
	var mask_1_graphics_137 = new cjs.Graphics().p("AFMBfQHci+HXDIQHXDKC+HbQC/HbjJHWQjKHYnbC/g");
	var mask_1_graphics_138 = new cjs.Graphics().p("AFwBKQHhivHRDWQHQDZCwHgQCwHijXHPQjYHSnhCvg");
	var mask_1_graphics_139 = new cjs.Graphics().p("AGUA3QHmigHKDlQHKDnCgHlQCiHmjmHJQjmHLnmChg");
	var mask_1_graphics_140 = new cjs.Graphics().p("AG5AmQHqiRHDDzQHCD0CSHrQCSHrjzHCQj0HCnrCSg");
	var mask_1_graphics_141 = new cjs.Graphics().p("AHeAXQHviCG7EAQG6EDCDHuQCCHwkBG6QkCG7nvCDg");
	var mask_1_graphics_142 = new cjs.Graphics().p("AIDAJQHzhyGyENQGzEQBzHzQBzHzkOGyQkQGznyBzg");
	var mask_1_graphics_143 = new cjs.Graphics().p("AIogCQH2hkGrEbQGpEdBkH2QBkH2kcGqQkcGqn2Bkg");
	var mask_1_graphics_144 = new cjs.Graphics().p("AJOgMQH5hVGhEoQGhErBUH4QBVH5kpGhQkqGhn5BVg");
	var mask_1_graphics_145 = new cjs.Graphics().p("AJ0gVQH7hFGYE1QGXE3BFH7QBFH7k1GXQk3GZn7BEg");
	var mask_1_graphics_146 = new cjs.Graphics().p("AKagbQH9g2GOFBQGOFEA1H8QA1H+lCGNQlCGPn+A1g");
	var mask_1_graphics_147 = new cjs.Graphics().p("ALAggQH/gmGEFNQGDFQAmH+QAlH/lOGDQlPGEn+Alg");
	var mask_1_graphics_148 = new cjs.Graphics().p("ALmgkQIAgWF6FZQF4FcAWH/QAWH/laF5QlbF6n/AWg");
	var mask_1_graphics_149 = new cjs.Graphics().p("AMNglQIAgGFuFkQFuFnAGH/QAGIAllFuQlmFvoAAGg");
	var mask_1_graphics_150 = new cjs.Graphics().p("EAMEAmCMAAvgmnQIAAKFjFvQFjFygKH/QgKIAlwFjQloFanuAAIgbAAg");
	var mask_1_graphics_151 = new cjs.Graphics().p("EALeAmBMAB7gmlQH/AaFYF6QFXF8gZH/QgaIAl7FXQliFAnTAAQgjAAgjgBg");
	var mask_1_graphics_152 = new cjs.Graphics().p("EAK4Al+MADHgmfQH+AoFMGFQFLGHgpH+QgpH/mGFLQlbEnm6AAQg3AAg4gEg");
	var mask_1_graphics_153 = new cjs.Graphics().p("EAKRAl6MAETgmYQH9A4FAGQQE/GRg5H8Qg5H9mPE/QlUEQmiAAQhLAAhNgJg");
	var mask_1_graphics_154 = new cjs.Graphics().p("EAJrAl1MAFfgmOQH7BHEzGaQEzGahJH6QhIH8maEyQlMD5mLAAQhdAAhhgOg");
	var mask_1_graphics_155 = new cjs.Graphics().p("EAJGAlvMAGpgmDQH5BYEmGiQEmGkhYH4QhYH4mjEmQlDDjl1AAQhvAAh0gUg");
	var mask_1_graphics_156 = new cjs.Graphics().p("EAIgAloMAH1gl1QH1BnEaGsQEYGshnH1QhoH2mrEZQk6DNlgAAQiBAAiHgbg");
	var mask_1_graphics_157 = new cjs.Graphics().p("EAH7AlfMAI/gljQHxB2ENGzQELG2h3HxQh3Hym0EMQkuC6lMAAQiTAAiZglg");
	var mask_1_graphics_158 = new cjs.Graphics().p("EAHWAlVMAKIglRQHuCGD/G8QD+G9iGHuQiHHum8D+QkjCnk4AAQilAAiqgvg");
	var mask_1_graphics_159 = new cjs.Graphics().p("EAGxAlLMALSgk9QHpCWDxHDQDwHFiVHpQiWHqnDDwQkXCVkmAAQi2AAi7g5g");
	var mask_1_graphics_160 = new cjs.Graphics().p("EAGMAk/MAMbgklQHlCkDjHLQDhHMikHkQilHmnKDiQkLCDkSAAQjIAAjMhFg");
	var mask_1_graphics_161 = new cjs.Graphics().p("EAFoAkyMANjgkLQHfCzDVHSQDTHSizHfQizHgnSDUQj9BzkAAAQjZAAjchSg");
	var mask_1_graphics_162 = new cjs.Graphics().p("EAFFAkkMAOpgjvQHaDCDGHYQDFHYjCHaQjCHanXDFQjvBkjvAAQjrAAjqhgg");
	var mask_1_graphics_163 = new cjs.Graphics().p("EAEiAkVMAPvgjRQHUDQC3HeQC3HfjRHTQjQHUneC2QjgBWjdAAQj8AAj5hvg");
	var mask_1_graphics_164 = new cjs.Graphics().p("EAEAAkFMAQ0gixQHNDfCpHjQCnHkjfHMQjfHOnjCoQjQBIjMAAQkOAAkGh/g");
	var mask_1_graphics_165 = new cjs.Graphics().p("EADeAj0MAR4giPQHGDtCaHoQCYHpjtHGQjtHGnoCZQjAA8i7AAQkgAAkTiQg");
	var mask_1_graphics_166 = new cjs.Graphics().p("EAC8AjiMAS8ghrQG+D7CLHtQCJHtj7G+Qj7G/nsCKQivAxiqAAQkzAAkgiig");
	var mask_1_graphics_167 = new cjs.Graphics().p("EACcAjPMAT9ghEQG2EIB7HxQB6HykIG1QkIG3nxB7QieAniYAAQlGAAkri1g");
	var mask_1_graphics_168 = new cjs.Graphics().p("EAB7Ai7MAU+ggcQGuEWBsH0QBrH1kWGuQkWGunzBsQiNAeiGAAQlbAAk2jJg");
	var mask_1_graphics_169 = new cjs.Graphics().p("EABcAinIV9/yQGlEjBdH3QBbH4kjGlQkjGln3BcQh5AWh1AAQlvAAlAjcg");
	var mask_1_graphics_170 = new cjs.Graphics().p("EAA9AiRIW7/GQGcEwBNH6QBMH6kvGcQkxGcn5BNQhmAPhiAAQmGAAlJjyg");
	var mask_1_graphics_171 = new cjs.Graphics().p("EAAfAh6IX4+YQGSE9A+H8QA8H9k8GSQk9GSn8A9QhSAKhPAAQmdAAlRkJg");
	var mask_1_graphics_172 = new cjs.Graphics().p("EAACAhiIYy9nQGJFIAuH+QAsH+lIGIQlJGJn9AtQg+AGg8AAQm0AAlZkhg");
	var mask_1_graphics_173 = new cjs.Graphics().p("EgAaAhJIZr81QF/FUAeH/QAcIAlUF9QlVF/n+AdQgpADgoAAQnNAAlfk6g");
	var mask_1_graphics_174 = new cjs.Graphics().p("EgA2AgwIak8CQFzFgAOH/QANIAlgF0QlgFzn/AOIgmABQnoAAlllTg");
	var mask_1_graphics_175 = new cjs.Graphics().p("EAMXAmDQoBgClnlsIba7NQFoFsgBIAQgDIAlrFoQlqFnn7AAIgGAAg");
	var mask_1_graphics_176 = new cjs.Graphics().p("EALxAmCQoAgSldl2IcP6WQFdF2gRIAQgTIAl2FcQlkFNngAAIgxgBg");
	var mask_1_graphics_177 = new cjs.Graphics().p("EALLAmAQoAgilQmBIdC5dQFRGBghH/QgjH/mAFRQleEznGAAQgtAAgugDg");
	var mask_1_graphics_178 = new cjs.Graphics().p("EAKlAl9Qn/gylEmLIdz4jQFFGLgwH9QgzH+mKFFQlYEbmtAAQhBAAhCgGg");
	var mask_1_graphics_179 = new cjs.Graphics().p("EAJ/Al4Qn9hBk4mVIej3oQE5GVhBH8QhCH8mUE5QlQEDmVAAQhUAAhXgLg");
	var mask_1_graphics_180 = new cjs.Graphics().p("EAJZAlzQn7hRkrmeIfQ2rQEtGehQH6QhSH5meEsQlHDul/AAQhnAAhqgRg");
	var mask_1_graphics_181 = new cjs.Graphics().p("EAIzAlsQn4hgkemoIf81sQEfGnhfH3QhhH3mnEfQk+DYlqAAQh4AAh+gYg");
	var mask_1_graphics_182 = new cjs.Graphics().p("EAINAlkQn0hwkRmwMAgmgUtQESGwhvH0QhxH0mvESQk0DDlVAAQiLAAiQggg");
	var mask_1_graphics_183 = new cjs.Graphics().p("EAHoAlbQnvh/kFm5MAhNgTrQEFG4h+HwQiAHwm4EEQkpCwlBAAQicAAiigpg");
	var mask_1_graphics_184 = new cjs.Graphics().p("EAHDAlRQnriPj3nAMAhzgSpQD3HAiNHsQiQHrm/D3QkdCdkuAAQiuAAizgzg");
	var mask_1_graphics_185 = new cjs.Graphics().p("EAGfAlFQnnidjpnHMAiXgRnQDpHIidHnQieHnnHDpQkQCMkcAAQi/AAjDhAg");
	var mask_1_graphics_186 = new cjs.Graphics().p("EAF7Ak5QniisjbnPMAi4gQiQDcHPisHiQitHinODbQkEB7kJAAQjQAAjThMg");
	var mask_1_graphics_187 = new cjs.Graphics().p("EAFXAksQnci7jNnVMAjYgPdQDNHVi6HdQi8HcnVDNQj1Brj4AAQjhAAjjhZg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(92).to({graphics:mask_1_graphics_92,x:201.8,y:193.8}).wait(1).to({graphics:mask_1_graphics_93,x:202.2,y:191.9}).wait(1).to({graphics:mask_1_graphics_94,x:202.4,y:190}).wait(1).to({graphics:mask_1_graphics_95,x:202.7,y:188.1}).wait(1).to({graphics:mask_1_graphics_96,x:202.8,y:186.2}).wait(1).to({graphics:mask_1_graphics_97,x:203,y:184.3}).wait(1).to({graphics:mask_1_graphics_98,x:203,y:182.4}).wait(1).to({graphics:mask_1_graphics_99,x:203,y:182.7}).wait(1).to({graphics:mask_1_graphics_100,x:203,y:184.6}).wait(1).to({graphics:mask_1_graphics_101,x:203.1,y:186.5}).wait(1).to({graphics:mask_1_graphics_102,x:203.1,y:188.4}).wait(1).to({graphics:mask_1_graphics_103,x:203.1,y:190.3}).wait(1).to({graphics:mask_1_graphics_104,x:203.1,y:192.2}).wait(1).to({graphics:mask_1_graphics_105,x:203.2,y:194.1}).wait(1).to({graphics:mask_1_graphics_106,x:203.2,y:195.9}).wait(1).to({graphics:mask_1_graphics_107,x:203.2,y:197.8}).wait(1).to({graphics:mask_1_graphics_108,x:203.2,y:199.6}).wait(1).to({graphics:mask_1_graphics_109,x:203.2,y:201.4}).wait(1).to({graphics:mask_1_graphics_110,x:203.2,y:203.2}).wait(1).to({graphics:mask_1_graphics_111,x:203.2,y:205}).wait(1).to({graphics:mask_1_graphics_112,x:203.2,y:206.7}).wait(1).to({graphics:mask_1_graphics_113,x:203.2,y:208.5}).wait(1).to({graphics:mask_1_graphics_114,x:203.2,y:210.2}).wait(1).to({graphics:mask_1_graphics_115,x:203.2,y:211.8}).wait(1).to({graphics:mask_1_graphics_116,x:203.2,y:213.5}).wait(1).to({graphics:mask_1_graphics_117,x:203.2,y:215.1}).wait(1).to({graphics:mask_1_graphics_118,x:203.2,y:216.7}).wait(1).to({graphics:mask_1_graphics_119,x:203.1,y:218.2}).wait(1).to({graphics:mask_1_graphics_120,x:203.1,y:219.8}).wait(1).to({graphics:mask_1_graphics_121,x:203.1,y:221.2}).wait(1).to({graphics:mask_1_graphics_122,x:203.1,y:222.7}).wait(1).to({graphics:mask_1_graphics_123,x:203.1,y:224.1}).wait(1).to({graphics:mask_1_graphics_124,x:203.1,y:225.4}).wait(1).to({graphics:mask_1_graphics_125,x:203.1,y:226.8}).wait(1).to({graphics:mask_1_graphics_126,x:203.1,y:228}).wait(1).to({graphics:mask_1_graphics_127,x:203.1,y:229.3}).wait(1).to({graphics:mask_1_graphics_128,x:203.1,y:230.5}).wait(1).to({graphics:mask_1_graphics_129,x:203.2,y:231.6}).wait(1).to({graphics:mask_1_graphics_130,x:203.2,y:232.7}).wait(1).to({graphics:mask_1_graphics_131,x:203.2,y:233.7}).wait(1).to({graphics:mask_1_graphics_132,x:203.2,y:234.7}).wait(1).to({graphics:mask_1_graphics_133,x:203.3,y:235.7}).wait(1).to({graphics:mask_1_graphics_134,x:203.3,y:236.6}).wait(1).to({graphics:mask_1_graphics_135,x:203.3,y:237.4}).wait(1).to({graphics:mask_1_graphics_136,x:203.3,y:238.2}).wait(1).to({graphics:mask_1_graphics_137,x:203.3,y:239}).wait(1).to({graphics:mask_1_graphics_138,x:203.3,y:239.6}).wait(1).to({graphics:mask_1_graphics_139,x:203.3,y:240.3}).wait(1).to({graphics:mask_1_graphics_140,x:203.3,y:240.8}).wait(1).to({graphics:mask_1_graphics_141,x:203.3,y:241.4}).wait(1).to({graphics:mask_1_graphics_142,x:203.2,y:241.8}).wait(1).to({graphics:mask_1_graphics_143,x:203.2,y:242.2}).wait(1).to({graphics:mask_1_graphics_144,x:203.2,y:242.6}).wait(1).to({graphics:mask_1_graphics_145,x:203.2,y:242.8}).wait(1).to({graphics:mask_1_graphics_146,x:203.2,y:243.1}).wait(1).to({graphics:mask_1_graphics_147,x:203.1,y:243.2}).wait(1).to({graphics:mask_1_graphics_148,x:203.1,y:243.4}).wait(1).to({graphics:mask_1_graphics_149,x:203.1,y:243.4}).wait(1).to({graphics:mask_1_graphics_150,x:203.1,y:243.4}).wait(1).to({graphics:mask_1_graphics_151,x:203.1,y:243.4}).wait(1).to({graphics:mask_1_graphics_152,x:203.2,y:243.4}).wait(1).to({graphics:mask_1_graphics_153,x:203.2,y:243.5}).wait(1).to({graphics:mask_1_graphics_154,x:203.2,y:243.5}).wait(1).to({graphics:mask_1_graphics_155,x:203.2,y:243.5}).wait(1).to({graphics:mask_1_graphics_156,x:203.3,y:243.5}).wait(1).to({graphics:mask_1_graphics_157,x:203.3,y:243.6}).wait(1).to({graphics:mask_1_graphics_158,x:203.3,y:243.6}).wait(1).to({graphics:mask_1_graphics_159,x:203.3,y:243.6}).wait(1).to({graphics:mask_1_graphics_160,x:203.3,y:243.6}).wait(1).to({graphics:mask_1_graphics_161,x:203.3,y:243.6}).wait(1).to({graphics:mask_1_graphics_162,x:203.3,y:243.6}).wait(1).to({graphics:mask_1_graphics_163,x:203.3,y:243.6}).wait(1).to({graphics:mask_1_graphics_164,x:203.3,y:243.6}).wait(1).to({graphics:mask_1_graphics_165,x:203.3,y:243.6}).wait(1).to({graphics:mask_1_graphics_166,x:203.3,y:243.6}).wait(1).to({graphics:mask_1_graphics_167,x:203.3,y:243.6}).wait(1).to({graphics:mask_1_graphics_168,x:203.3,y:243.6}).wait(1).to({graphics:mask_1_graphics_169,x:203.3,y:243.5}).wait(1).to({graphics:mask_1_graphics_170,x:203.2,y:243.5}).wait(1).to({graphics:mask_1_graphics_171,x:203.2,y:243.5}).wait(1).to({graphics:mask_1_graphics_172,x:203.2,y:243.5}).wait(1).to({graphics:mask_1_graphics_173,x:203.2,y:243.5}).wait(1).to({graphics:mask_1_graphics_174,x:203.2,y:243.5}).wait(1).to({graphics:mask_1_graphics_175,x:203.2,y:243.5}).wait(1).to({graphics:mask_1_graphics_176,x:203.2,y:243.5}).wait(1).to({graphics:mask_1_graphics_177,x:203.2,y:243.5}).wait(1).to({graphics:mask_1_graphics_178,x:203.2,y:243.5}).wait(1).to({graphics:mask_1_graphics_179,x:203.2,y:243.5}).wait(1).to({graphics:mask_1_graphics_180,x:203.2,y:243.6}).wait(1).to({graphics:mask_1_graphics_181,x:203.3,y:243.6}).wait(1).to({graphics:mask_1_graphics_182,x:203.3,y:243.6}).wait(1).to({graphics:mask_1_graphics_183,x:203.3,y:243.6}).wait(1).to({graphics:mask_1_graphics_184,x:203.3,y:243.6}).wait(1).to({graphics:mask_1_graphics_185,x:203.3,y:243.7}).wait(1).to({graphics:mask_1_graphics_186,x:203.3,y:243.7}).wait(1).to({graphics:mask_1_graphics_187,x:203.4,y:243.7}).wait(18));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(25,0,1).p("Ar7gOQAAgFAAgFQAAAAAAgBQACg5AIg3QAmjxCvi3QDgjoE8AAQE8AADgDoQDgDpAAFIQAAFJjgDpQjgDok8AAQk8AAjgjoQhphug4iEQgGgNgFgO");
	this.shape_2.setTransform(275.4,365.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(25,1,1).p("AMHAAQAAFBjjDjQjjDjlBAAQlAAAjjjjQjjjjAAlBQAAlADjjjQDjjjFAAAQFBAADjDjQDjDjAAFAg");
	this.shape_3.setTransform(275.4,365.8,0.986,1.025);

	var maskedShapeInstanceList = [this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2}]},92).to({state:[{t:this.shape_3}]},95).wait(18));

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("EgBQAgbQlrlrAAoBMAmrAAAQAAIBlqFrQlsFqoAAAQoBAAlplqg");
	var mask_2_graphics_1 = new cjs.Graphics().p("EALzAmEQoBgQldl2Qlfl2AQoAMAmpABPQgQIAl1FfQlnFPnjAAIgtgBg");
	var mask_2_graphics_2 = new cjs.Graphics().p("EALMAmCQoAghlRmAQlTmCAhn/MAmlACeQggIAmBFTQlgE0nHAAQgtAAgtgDg");
	var mask_2_graphics_3 = new cjs.Graphics().p("EAKmAl/Qn+gxlFmLQlGmNAxn+MAmfADuQgxH+mLFGQlZEbmuAAQhBAAhDgGg");
	var mask_2_graphics_4 = new cjs.Graphics().p("EAKBAl6Qn9hBk3mWQk6mWBBn8MAmXAE8QhCH8mVE6QlRECmVAAQhVAAhYgLg");
	var mask_2_graphics_5 = new cjs.Graphics().p("EAJdAl0Qn7hSkqmfQktmgBSn6MAmLAGLQhSH6mfEsQlHDsl/AAQhoAAhsgSg");
	var mask_2_graphics_6 = new cjs.Graphics().p("EAI5AltQn3hikdmoQkfmqBhn3MAl9AHYQhiH4moEfQk+DVloAAQh7AAiAgZg");
	var mask_2_graphics_7 = new cjs.Graphics().p("EAIXAllQn0hykQmyQkRmyByn0MAlsAImQhyH0mxERQkzDAlTAAQiNAAiTghg");
	var mask_2_graphics_8 = new cjs.Graphics().p("EAH1AlbQnwiCkCm6QkDm7CCnwMAlZAJzQiBHwm7EEQknCrk+AAQigAAilgrg");
	var mask_2_graphics_9 = new cjs.Graphics().p("EAHUAlQQnriRj0nCQj1nECSnrMAlEAK/QiSHsnCD1QkaCZkrAAQiyAAi3g3g");
	var mask_2_graphics_10 = new cjs.Graphics().p("EAG0AlEQnmihjlnKQjnnKChnnMAktAMLQihHmnKDnQkNCHkXAAQjEAAjJhDg");
	var mask_2_graphics_11 = new cjs.Graphics().p("EAGVAk3QngixjXnQQjYnSCxnhMAkSANVQiwHhnRDYQkAB2kEAAQjWAAjZhQg");
	var mask_2_graphics_12 = new cjs.Graphics().p("EAF3AkpQnajAjInYQjJnYDAnbMAj2AOfQjAHbnXDJQjxBmjyAAQjoAAjpheg");
	var mask_2_graphics_13 = new cjs.Graphics().p("EAFbAkZQnVjPi4ndQi6nfDPnVMAjYAPpQjQHUndC6QjiBXjfAAQj7AAj3hug");
	var mask_2_graphics_14 = new cjs.Graphics().p("EAE/AkJQnNjeiqnjQiqnlDenOMAi2AQxQjeHNnjCrQjSBJjNAAQkNAAkGh+g");
	var mask_2_graphics_15 = new cjs.Graphics().p("EAEkAj3QnGjtiZnoQibnpDtnHMAiSAR3QjsHHnpCaQjAA9i7AAQkhAAkUiQg");
	var mask_2_graphics_16 = new cjs.Graphics().p("EAELAjlQm+j8iKntQiLnuD7m/MAhtAS9Qj7G/nuCLQiuAxipAAQk1AAkgiig");
	var mask_2_graphics_17 = new cjs.Graphics().p("EADzAjRQm2kKh7nxQh6nyEJm3MAhFAUBQkJG3nyB7QidAmiWAAQlJAAksi1g");
	var mask_2_graphics_18 = new cjs.Graphics().p("EADcAi8QmtkXhrn1Qhrn2EYmuMAgaAVEQkXGun1BrQiKAdiEAAQleAAk3jKg");
	var mask_2_graphics_19 = new cjs.Graphics().p("EADGAimQmkklhan4Qhbn5ElmlIfuWGQkkGln5BbQh2AVhyAAQlzAAlCjgg");
	var mask_2_graphics_20 = new cjs.Graphics().p("EACxAiPQmakyhKn7QhLn8EymbIfBXHQkyGbn7BLQhjAOheAAQmKAAlMj3g");
	var mask_2_graphics_21 = new cjs.Graphics().p("EACeAh3QmQk/g6n9Qg6n+E/mRIeQYFQk/GRn+A7QhNAJhLAAQmiAAlUkPg");
	var mask_2_graphics_22 = new cjs.Graphics().p("EACMAheQmGlMgqn+QgpoAFLmGIdeZCQlMGHn/AqQg3AEg3AAQm8AAlbkng");
	var mask_2_graphics_23 = new cjs.Graphics().p("EAB7AhEQl7lYgZn/QgaoBFXl8IcrZ+QlYF8oAAaQgiABghAAQnWAAljlBg");
	var mask_2_graphics_24 = new cjs.Graphics().p("EABsAgpQlwlkgJoAQgJoBFjlxIb0a4QlkFwoAAKIgWAAQnzAAlolcg");
	var mask_2_graphics_25 = new cjs.Graphics().p("EAPDAmFQoBgJlklvQlllwAIn/QAHoCFvllIa8bwQloFen1AAIgTAAg");
	var mask_2_graphics_26 = new cjs.Graphics().p("EAOqAmEQoAgZlZl7QlYl7AXn/QAYoBF6lZIaDcmQljFDnYAAIhAgBg");
	var mask_2_graphics_27 = new cjs.Graphics().p("EAORAmBQn/gplMmFQlMmHAon+QAon/GFlNIZHdaQlcEpm+AAQg0AAg3gEg");
	var mask_2_graphics_28 = new cjs.Graphics().p("EAN5Al9Qn+g5k/mQQlAmRA5n8QA4n/GPlAIYLeNQlVERmkAAQhJAAhMgJg");
	var mask_2_graphics_29 = new cjs.Graphics().p("EANhAl4Qn7hKkzmaQkymaBIn7QBJn8GZkzIXMe9QlMD5mMAAQhdAAhhgOg");
	var mask_2_graphics_30 = new cjs.Graphics().p("EANKAlxQn5haklmjQklmkBZn4QBZn6GikmIWMfsQlDDil1AAQhwAAh1gVg");
	var mask_2_graphics_31 = new cjs.Graphics().p("EAM0AlqQn2hrkYmsQkYmtBpn1QBqn3GskYMAVJAgYQk4DMlfAAQiDAAiIgcg");
	var mask_2_graphics_32 = new cjs.Graphics().p("EAMeAlhQnyh6kKm2QkKm2B5nxQB4nzG2kKMAUHAhCQkuC3lKAAQiVAAibglg");
	var mask_2_graphics_33 = new cjs.Graphics().p("EAMJAlXQnuiLj8m9Qj8m+CJnuQCInuG+j8MATDAhqQkiCjk2AAQinAAitgvg");
	var mask_2_graphics_34 = new cjs.Graphics().p("EAL0AlLQnpiajunFQjtnGCYnpQCYnqHGjuMAR9AiQQkVCSkiAAQi5AAi/g8g");
	var mask_2_graphics_35 = new cjs.Graphics().p("EALgAk/QnkiqjfnMQjfnOConkQConkHNjgMAQ2Ai0QkHCAkPAAQjLAAjQhIg");
	var mask_2_graphics_36 = new cjs.Graphics().p("EALNAkxQnfi5jQnTQjPnVC2neQC4nfHUjQMAPuAjVQj5Bvj8AAQjdAAjghWg");
	var mask_2_graphics_37 = new cjs.Graphics().p("EAK6AkiQnYjIjBnaQjBnbDGnYQDHnZHbjBMAOlAj0QjqBgjqAAQjwAAjvhlg");
	var mask_2_graphics_38 = new cjs.Graphics().p("EAKoAkSQnRjXiyngQixnhDUnRQDXnSHgiyMANcAkRQjbBRjXAAQkDAAj+h1g");
	var mask_2_graphics_39 = new cjs.Graphics().p("EAKXAkBQnKjmijnlQihnmDjnKQDlnMHmiiMAMRAkrQjKBDjGAAQkVAAkMiFg");
	var mask_2_graphics_40 = new cjs.Graphics().p("EAKHAjvQnDj0iTnrQiSnrDynCQD0nEHriTMALFAlDQi5A3izAAQkpAAkZiXg");
	var mask_2_graphics_41 = new cjs.Graphics().p("EAJ3AjcQm6kDiDnvQiDnvEBm7QECm7HviEMAJ5AlZQinAsiiAAQk8AAkmiqg");
	var mask_2_graphics_42 = new cjs.Graphics().p("EAJpAjIQmzkRhznzQhyn0EOmxQEQm0HzhyMAItAlrQiVAiiPAAQlRAAkxi+g");
	var mask_2_graphics_43 = new cjs.Graphics().p("EAJbAiyQmqkehjn2Qhin3EcmqQEemqH3hiMAHeAl7QiBAah9AAQlmAAk8jUg");
	var mask_2_graphics_44 = new cjs.Graphics().p("EAJOAicQmgkshTn5QhTn6EqmgQErmhH6hSMAGRAmJQhuAShqAAQl8AAlGjpg");
	var mask_2_graphics_45 = new cjs.Graphics().p("EAJBAiFQmWk5hDn8QhCn8E3mWQE5mYH8hBMAFCAmUQhZAMhXAAQmUAAlPkAg");
	var mask_2_graphics_46 = new cjs.Graphics().p("EAI2AhsQmMlGgyn9Qgzn+FEmMQFGmNH+gyMAD0AmeQhFAHhDAAQmsAAlXkZg");
	var mask_2_graphics_47 = new cjs.Graphics().p("EAIrAhTQmBlTgin+QgioAFRmBQFSmCH/giMAClAmkQgvAEguAAQnGAAlfkyg");
	var mask_2_graphics_48 = new cjs.Graphics().p("EAIiAg4Ql2legSoAQgSoAFdl3QFel2IAgSMABWAmpIgxAAQnhAAlllMg");
	var mask_2_graphics_49 = new cjs.Graphics().p("EAIZAgdQlrlqgBoAQgCoBFplrQFqlrIAgBMAAHAmpIgEAAQn9AAlrlng");
	var mask_2_graphics_50 = new cjs.Graphics().p("EAHtAgBQlfl2APoAQAPoAF0lfQF2lgIAAPMgBJAmpQoAgPlgl0g");
	var mask_2_graphics_51 = new cjs.Graphics().p("AG/fkQlTmAAfn/QAfoAGAlTQGAlTH/AfMgCXAmlQn/gflUmAg");
	var mask_2_graphics_52 = new cjs.Graphics().p("AGRfIQlGmMAvn9QAwn/GKlGQGLlHH+AwMgDmAmfQn+gwlImKg");
	var mask_2_graphics_53 = new cjs.Graphics().p("AFlerQk6mWBAn8QBAn8GUk6QGWk6H8BAMgE1AmWQn9hAk6mUg");
	var mask_2_graphics_54 = new cjs.Graphics().p("AE5eOQksmfBQn6QBQn6GektQGfktH6BRMgGDAmLQn6hRkumeg");
	var mask_2_graphics_55 = new cjs.Graphics().p("AEPdxQkempBfn3QBhn3GnkgQGpkfH3BhMgHSAl9Qn3hgkgmog");
	var mask_2_graphics_56 = new cjs.Graphics().p("ADmdUQkRmyBwnzQBwn1GxkRQGxkSH0BwMgIfAluQn0hwkSmxg");
	var mask_2_graphics_57 = new cjs.Graphics().p("AC+c3QkCm7B/nvQCAnxG5kDQG7kEHvCAMgJsAlbQnviAkFm5g");
	var mask_2_graphics_58 = new cjs.Graphics().p("ACXcaQj0nDCPnrQCRnsHBj2QHCj1HsCQMgK5AlGQnriQj3nBg");
	var mask_2_graphics_59 = new cjs.Graphics().p("AByb8QjmnKCfnmQCgnnHJjnQHKjnHmCfMgMEAkvQnmigjonJg");
	var mask_2_graphics_60 = new cjs.Graphics().p("ABObfQjXnRCunhQCwniHQjYQHRjYHhCvMgNPAkVQnhiwjZnQg");
	var mask_2_graphics_61 = new cjs.Graphics().p("AArbCQjHnYC9nbQC/ncHWjJQHYjJHcC+MgOZAj5Qnci/jKnXg");
	var mask_2_graphics_62 = new cjs.Graphics().p("AAKalQi4neDMnVQDOnVHdi6QHei6HVDNMgPiAjaQnVjOi7ndg");
	var mask_2_graphics_63 = new cjs.Graphics().p("AgVaIQiqnkDcnOQDcnOHjirQHkiqHODbMgQqAi6QnOjdirnjg");
	var mask_2_graphics_64 = new cjs.Graphics().p("AgzZrQibnpDqnGQDsnIHoibQHpibHHDrMgRxAiWQnHjsibnog");
	var mask_2_graphics_65 = new cjs.Graphics().p("AhQZPQiLnuD5m/QD6m/HsiMQHuiLG/D5MgS2AhwQnAj5iLntg");
	var mask_2_graphics_66 = new cjs.Graphics().p("AhrYyQh7nxEGm3QEJm4Hwh7QHyh7G3EHMgT7AhIQm3kIh7nxg");
	var mask_2_graphics_67 = new cjs.Graphics().p("AiFYWQhrn1EVmuQEWmvH0hsQH2hrGuEVMgU+AgfQmtkWhtn1g");
	var mask_2_graphics_68 = new cjs.Graphics().p("AidX6Qhbn4EimlQEkmmH3hcQH5hbGlEjI1/fzQmlkkhcn4g");
	var mask_2_graphics_69 = new cjs.Graphics().p("Ai0XfQhKn8EvmbQExmcH6hMQH8hLGbExI3AfEQmakxhNn6g");
	var mask_2_graphics_70 = new cjs.Graphics().p("AjJXDQg6n9E8mRQE/mSH8g8QH9g7GSE+I3/eUQmRk+g8n9g");
	var mask_2_graphics_71 = new cjs.Graphics().p("AjcWpQgqn/FJmHQFLmIH+grQH/grGHFKI48djQmGlLgsn+g");
	var mask_2_graphics_72 = new cjs.Graphics().p("AjuWOQgZoAFVl8QFXl9H/gbQIBgbF8FXI54cvQl7lXgcoAg");
	var mask_2_graphics_73 = new cjs.Graphics().p("Aj+V0QgJoBFilxQFjlyH/gKQIBgKFyFjI6yb4QlxljgLoAg");
	var mask_2_graphics_74 = new cjs.Graphics().p("AkMVaQAHoBFullQFulmIAAGQIBAGFmFuI7qbBQllluAFoBg");
	var mask_2_graphics_75 = new cjs.Graphics().p("AkYVBQAXoAF5laQF6laH/AWQIBAXFaF5I8haIQlZl6AWoAg");
	var mask_2_graphics_76 = new cjs.Graphics().p("AkjUoQAon/GDlNQGFlOH+AmQIAAnFOGFI9VZMQlNmFAmn/g");
	var mask_2_graphics_77 = new cjs.Graphics().p("AksUQQA4n+GOlAQGPlCH9A3QH+A3FBGQI+GYPQlBmQA2n9g");
	var mask_2_graphics_78 = new cjs.Graphics().p("AkzT4QBIn7GYk0QGak1H6BIQH8BHE1GZI+4XRQk0mZBHn8g");
	var mask_2_graphics_79 = new cjs.Graphics().p("Ak5ThQBZn5GhknQGkknH4BYQH5BYEnGiI/mWRQknmjBXn5g");
	var mask_2_graphics_80 = new cjs.Graphics().p("Ak8TKQBon1GrkZQGskaH2BnQH2BoEZGsMggSAVPQkZmsBnn2g");
	var mask_2_graphics_81 = new cjs.Graphics().p("Ak+S1QB4nzG0kLQG1kMHyB4QHyB4EMG0Mgg9AUNQkLm1B3nyg");
	var mask_2_graphics_82 = new cjs.Graphics().p("Ak/SfQCJnuG8j9QG9j+HuCIQHvCHD9G+MghlATIQj9m+CGnug");
	var mask_2_graphics_83 = new cjs.Graphics().p("Ak9SKQCYnpHEjvQHGjvHoCXQHqCYDwHFMgiMASCQjvnFCXnqg");
	var mask_2_graphics_84 = new cjs.Graphics().p("Ak6R2QConkHLjgQHNjhHkCnQHlCnDgHNMgiuAQ8QjhnNCmnlg");
	var mask_2_graphics_85 = new cjs.Graphics().p("Ak0RjQC3nfHSjRQHUjSHeC2QHfC3DSHTMgjRAP1QjRnUC2nfg");
	var mask_2_graphics_86 = new cjs.Graphics().p("AkuRRQDHnZHYjCQHbjDHYDFQHZDGDDHaMgjwAOrQjCnZDEnZg");
	var mask_2_graphics_87 = new cjs.Graphics().p("AklQ/QDWnSHeizQHgi0HSDUQHTDVCzHgMgkNANiQizngDUnSg");
	var mask_2_graphics_88 = new cjs.Graphics().p("AkbQtQDlnKHkikQHmikHKDjQHMDkCkHlMgknAMXQiknlDinMg");
	var mask_2_graphics_89 = new cjs.Graphics().p("AkOQdQDznDHoiUQHriVHDDyQHEDyCVHrMglAALLQiUnqDynEg");
	var mask_2_graphics_90 = new cjs.Graphics().p("AkBQOQEBm8HuiEQHviFG7EAQG9EBCEHvMglVAJ/QiEnvD/m7g");
	var mask_2_graphics_91 = new cjs.Graphics().p("AjxP/QEPmzHyh1QHzh0GzEOQGzEOB1HzMgloAIzQh1nzEOmzg");
	var mask_2_graphics_92 = new cjs.Graphics().p("AjgPxQEdmqH1hlQH3hkGqEbQGrEdBkH2Mgl5AHmQhkn3Ebmqg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:203.2,y:243.7}).wait(1).to({graphics:mask_2_graphics_1,x:203.1,y:243.7}).wait(1).to({graphics:mask_2_graphics_2,x:203,y:243.7}).wait(1).to({graphics:mask_2_graphics_3,x:202.9,y:243.7}).wait(1).to({graphics:mask_2_graphics_4,x:202.7,y:243.7}).wait(1).to({graphics:mask_2_graphics_5,x:202.4,y:243.8}).wait(1).to({graphics:mask_2_graphics_6,x:202,y:243.8}).wait(1).to({graphics:mask_2_graphics_7,x:201.6,y:243.8}).wait(1).to({graphics:mask_2_graphics_8,x:201.1,y:243.8}).wait(1).to({graphics:mask_2_graphics_9,x:200.6,y:243.9}).wait(1).to({graphics:mask_2_graphics_10,x:200,y:243.9}).wait(1).to({graphics:mask_2_graphics_11,x:199.3,y:243.9}).wait(1).to({graphics:mask_2_graphics_12,x:198.6,y:243.9}).wait(1).to({graphics:mask_2_graphics_13,x:197.9,y:243.9}).wait(1).to({graphics:mask_2_graphics_14,x:197,y:243.9}).wait(1).to({graphics:mask_2_graphics_15,x:196.1,y:243.9}).wait(1).to({graphics:mask_2_graphics_16,x:195.2,y:243.9}).wait(1).to({graphics:mask_2_graphics_17,x:194.2,y:243.8}).wait(1).to({graphics:mask_2_graphics_18,x:193.1,y:243.8}).wait(1).to({graphics:mask_2_graphics_19,x:192,y:243.8}).wait(1).to({graphics:mask_2_graphics_20,x:190.9,y:243.8}).wait(1).to({graphics:mask_2_graphics_21,x:189.7,y:243.8}).wait(1).to({graphics:mask_2_graphics_22,x:188.4,y:243.7}).wait(1).to({graphics:mask_2_graphics_23,x:187.1,y:243.7}).wait(1).to({graphics:mask_2_graphics_24,x:185.7,y:243.7}).wait(1).to({graphics:mask_2_graphics_25,x:184.3,y:243.7}).wait(1).to({graphics:mask_2_graphics_26,x:182.9,y:243.7}).wait(1).to({graphics:mask_2_graphics_27,x:181.4,y:243.7}).wait(1).to({graphics:mask_2_graphics_28,x:179.9,y:243.8}).wait(1).to({graphics:mask_2_graphics_29,x:178.3,y:243.8}).wait(1).to({graphics:mask_2_graphics_30,x:176.7,y:243.8}).wait(1).to({graphics:mask_2_graphics_31,x:175,y:243.8}).wait(1).to({graphics:mask_2_graphics_32,x:173.4,y:243.8}).wait(1).to({graphics:mask_2_graphics_33,x:171.7,y:243.8}).wait(1).to({graphics:mask_2_graphics_34,x:169.9,y:243.9}).wait(1).to({graphics:mask_2_graphics_35,x:168.1,y:243.9}).wait(1).to({graphics:mask_2_graphics_36,x:166.3,y:243.9}).wait(1).to({graphics:mask_2_graphics_37,x:164.5,y:243.9}).wait(1).to({graphics:mask_2_graphics_38,x:162.7,y:243.9}).wait(1).to({graphics:mask_2_graphics_39,x:160.8,y:243.8}).wait(1).to({graphics:mask_2_graphics_40,x:158.9,y:243.8}).wait(1).to({graphics:mask_2_graphics_41,x:157,y:243.8}).wait(1).to({graphics:mask_2_graphics_42,x:155.1,y:243.8}).wait(1).to({graphics:mask_2_graphics_43,x:153.1,y:243.8}).wait(1).to({graphics:mask_2_graphics_44,x:151.2,y:243.7}).wait(1).to({graphics:mask_2_graphics_45,x:149.2,y:243.7}).wait(1).to({graphics:mask_2_graphics_46,x:147.3,y:243.7}).wait(1).to({graphics:mask_2_graphics_47,x:145.3,y:243.7}).wait(1).to({graphics:mask_2_graphics_48,x:143.3,y:243.6}).wait(1).to({graphics:mask_2_graphics_49,x:141.3,y:243.6}).wait(1).to({graphics:mask_2_graphics_50,x:143,y:243.6}).wait(1).to({graphics:mask_2_graphics_51,x:144.9,y:243.5}).wait(1).to({graphics:mask_2_graphics_52,x:146.9,y:243.4}).wait(1).to({graphics:mask_2_graphics_53,x:148.9,y:243.1}).wait(1).to({graphics:mask_2_graphics_54,x:150.8,y:242.9}).wait(1).to({graphics:mask_2_graphics_55,x:152.8,y:242.5}).wait(1).to({graphics:mask_2_graphics_56,x:154.7,y:242.1}).wait(1).to({graphics:mask_2_graphics_57,x:156.6,y:241.6}).wait(1).to({graphics:mask_2_graphics_58,x:158.6,y:241.1}).wait(1).to({graphics:mask_2_graphics_59,x:160.4,y:240.5}).wait(1).to({graphics:mask_2_graphics_60,x:162.3,y:239.9}).wait(1).to({graphics:mask_2_graphics_61,x:164.2,y:239.2}).wait(1).to({graphics:mask_2_graphics_62,x:166,y:238.4}).wait(1).to({graphics:mask_2_graphics_63,x:167.8,y:237.6}).wait(1).to({graphics:mask_2_graphics_64,x:169.6,y:236.7}).wait(1).to({graphics:mask_2_graphics_65,x:171.3,y:235.7}).wait(1).to({graphics:mask_2_graphics_66,x:173,y:234.7}).wait(1).to({graphics:mask_2_graphics_67,x:174.7,y:233.7}).wait(1).to({graphics:mask_2_graphics_68,x:176.3,y:232.6}).wait(1).to({graphics:mask_2_graphics_69,x:177.9,y:231.4}).wait(1).to({graphics:mask_2_graphics_70,x:179.5,y:230.2}).wait(1).to({graphics:mask_2_graphics_71,x:181,y:229}).wait(1).to({graphics:mask_2_graphics_72,x:182.5,y:227.7}).wait(1).to({graphics:mask_2_graphics_73,x:184,y:226.3}).wait(1).to({graphics:mask_2_graphics_74,x:185.4,y:224.9}).wait(1).to({graphics:mask_2_graphics_75,x:186.8,y:223.5}).wait(1).to({graphics:mask_2_graphics_76,x:188.1,y:222}).wait(1).to({graphics:mask_2_graphics_77,x:189.3,y:220.4}).wait(1).to({graphics:mask_2_graphics_78,x:190.6,y:218.9}).wait(1).to({graphics:mask_2_graphics_79,x:191.7,y:217.3}).wait(1).to({graphics:mask_2_graphics_80,x:192.8,y:215.6}).wait(1).to({graphics:mask_2_graphics_81,x:193.9,y:214}).wait(1).to({graphics:mask_2_graphics_82,x:194.9,y:212.3}).wait(1).to({graphics:mask_2_graphics_83,x:195.9,y:210.5}).wait(1).to({graphics:mask_2_graphics_84,x:196.7,y:208.8}).wait(1).to({graphics:mask_2_graphics_85,x:197.6,y:207}).wait(1).to({graphics:mask_2_graphics_86,x:198.4,y:205.1}).wait(1).to({graphics:mask_2_graphics_87,x:199.1,y:203.3}).wait(1).to({graphics:mask_2_graphics_88,x:199.8,y:201.4}).wait(1).to({graphics:mask_2_graphics_89,x:200.4,y:199.5}).wait(1).to({graphics:mask_2_graphics_90,x:200.9,y:197.6}).wait(1).to({graphics:mask_2_graphics_91,x:201.4,y:195.7}).wait(1).to({graphics:mask_2_graphics_92,x:201.8,y:193.8}).wait(113));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(25,1,1).p("AppGGQABhAAJg8QAmjxCvi2QDgjoE8AAQEOAADKCp");
	this.shape_4.setTransform(260.8,325.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(25,1,1).p("Ar7GGQABhAAJg8QAmjxCvi2QDgjoE8AAQE8AADgDoQDXDfAJE4");
	this.shape_5.setTransform(275.4,325.4);

	var maskedShapeInstanceList = [this.shape_4,this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},19).wait(186));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(186.5,363.6,148.7,13.3);


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
	this.instance.setTransform(53,3,1,1,157.3,0,0,0.4,-17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:0,guide:{path:[53.1,2.9,50.4,-4.5,49.8,-6.5,48.5,-10.4,46.4,-14.3,38.1,-28.9,21.4,-34.5,4.7,-40,-10.7,-33,-26.1,-26,-31.2,-10.7,-32.6,-6.5,-33,-2.3]}},89).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ApFKwQnMjjilnkMAkngMbQClHljiHLQjkHMnlCkQjMBFjHAAQkTAAkKiDg");
	var mask_graphics_1 = new cjs.Graphics().p("AopLSQnTjVi0ngMAkOgNhQC0HgjUHSQjWHSngCzQjcBSjYAAQkBAAj8hzg");
	var mask_graphics_2 = new cjs.Graphics().p("AoNLzQnajHjCnaMAjzgOoQDCHbjGHXQjIHZnaDCQjrBgjpAAQjvAAjuhkg");
	var mask_graphics_3 = new cjs.Graphics().p("AnyMSQnfi4jQnUMAjVgPtQDQHUi3HeQi5HenUDQQj5Bvj7AAQjeAAjghWg");
	var mask_graphics_4 = new cjs.Graphics().p("AnWMwQnlipjenOMAi1gQxQDeHNioHkQirHjnNDfQkHB+kMAAQjNAAjQhJg");
	var mask_graphics_5 = new cjs.Graphics().p("Am7NNQnpiajtnHMAiUgR1QDsHHiaHoQibHpnHDsQkTCPkfAAQi7AAjBg9g");
	var mask_graphics_6 = new cjs.Graphics().p("AmgNpQnuiMj6m/MAhwgS3QD6G/iLHsQiMHum/D6QkgCgkxAAQirAAiwgxg");
	var mask_graphics_7 = new cjs.Graphics().p("AmEODQnyh9kIm3MAhKgT5QEHG4h7HxQh+Hxm3EHQkrC0lEAAQiaAAiegog");
	var mask_graphics_8 = new cjs.Graphics().p("AlqOcQn1hukVmvMAgigU4QEVGvhtH1QhuH0mvEUQk1DHlZAAQiHAAiOgeg");
	var mask_graphics_9 = new cjs.Graphics().p("AlPOzQn4hekimnIf413QEiGnhdH4QhfH3mmEiQlADbltAAQh2AAh7gXg");
	var mask_graphics_10 = new cjs.Graphics().p("Ak0PJQn8hPkumdIfM21QEvGehOH6QhPH6mdEuQlJDxmCAAQhkAAhogQg");
	var mask_graphics_11 = new cjs.Graphics().p("AkaPdQn+g/k7mUIeg3xQE7GUg/H9QhAH8mUE7QlREHmYAAQhSAAhUgLg");
	var mask_graphics_12 = new cjs.Graphics().p("AkAPwQn/gvlImLIdw4rQFIGKgvH/QgxH9mKFHQlZEemvAAQg/AAhAgGg");
	var mask_graphics_13 = new cjs.Graphics().p("AjnQCQoAgglTmAIc/5lQFTGAgfH/QghH/mAFTQlgE2nIAAQgrAAgsgCg");
	var mask_graphics_14 = new cjs.Graphics().p("AjOQSQoBgRlel2IcM6cQFeF1gPIBQgSIAl1FeQllFPnjAAIgtAAg");
	var mask_graphics_15 = new cjs.Graphics().p("Ai1QgQoBgBlqlrIbX7TQFqFrAAIBQgBIAlrFpQlqFqn+AAIgCAAg");
	var mask_graphics_16 = new cjs.Graphics().p("AwTLcIai8IQF1FgAPIAQAOIAlfF0QlgF1n/APIgpABQnnAAlmlRg");
	var mask_graphics_17 = new cjs.Graphics().p("AwFMCIZq87QF/FUAgIAQAdH/lUF/QlUGAn+AeQgqADgqAAQnMAAlgk4g");
	var mask_graphics_18 = new cjs.Graphics().p("Av3MmIYx9rQGKFIAuH/QAtH+lIGJQlIGKn9AuQg/AFg9AAQm0AAlZkgg");
	var mask_graphics_19 = new cjs.Graphics().p("AvoNKIX2+bQGTE8A/H9QA8H8k8GTQk8GUn7A9QhUAKhQAAQmcAAlRkIg");
	var mask_graphics_20 = new cjs.Graphics().p("AvaNsIW7/JQGdEwBNH7QBMH6kvGcQkwGdn5BNQhnAQhjAAQmFAAlKjyg");
	var mask_graphics_21 = new cjs.Graphics().p("AvKOMIV9/0QGlEjBdH4QBcH4kjGlQkjGmn3BdQh6AWh1AAQlvAAlAjdg");
	var mask_graphics_22 = new cjs.Graphics().p("Au7OrMAU+ggeQGvEWBsH1QBrH1kWGuQkWGvn0BsQiMAeiHAAQlbAAk2jJg");
	var mask_graphics_23 = new cjs.Graphics().p("AurPJMAT+ghGQG3EJB8HxQB6HykJG2QkJG3nwB7QieAniYAAQlIAAkri1g");
	var mask_graphics_24 = new cjs.Graphics().p("AubPmMAS9ghtQG/D8CLHtQCJHtj7G/Qj8G/ntCKQiuAxiqAAQk0AAkgiig");
	var mask_graphics_25 = new cjs.Graphics().p("AuLQAMAR7giQQHGDuCaHpQCYHpjtHFQjuHHnpCZQi/A8i6AAQkiAAkUiRg");
	var mask_graphics_26 = new cjs.Graphics().p("At6QaMAQ4giyQHNDfCoHkQCnHkjfHNQjgHOnkCnQjPBIjMAAQkPAAkHh/g");
	var mask_graphics_27 = new cjs.Graphics().p("AtpQyMAPzgjSQHUDRC3HfQC2HgjRHSQjSHUneC2QjfBVjdAAQj9AAj6hvg");
	var mask_graphics_28 = new cjs.Graphics().p("AtXRIMAOtgjwQHaDDDGHZQDEHajDHZQjDHanZDFQjtBjjuAAQjsAAjrhhg");
	var mask_graphics_29 = new cjs.Graphics().p("AtGRdMANogkMQHfC1DUHTQDTHTi0HeQi1HgnTDUQj7BykAAAQjaAAjdhTg");
	var mask_graphics_30 = new cjs.Graphics().p("As0RwMAMigklQHkCmDiHMQDgHNilHjQimHmnMDhQkJCCkSAAQjJAAjNhGg");
	var mask_graphics_31 = new cjs.Graphics().p("AsiSBMALagk8QHpCXDwHFQDvHGiXHpQiYHqnEDvQkWCTkkAAQi4AAi9g7g");
	var mask_graphics_32 = new cjs.Graphics().p("AsQSRMAKSglRQHtCID+G+QD8G+iIHtQiIHum9D9QkiClk2AAQinAAitgwg");
	var mask_graphics_33 = new cjs.Graphics().p("Ar9SgMAJIgllQHxB5EMG2QEJG3h4HwQh6Hzm1EKQktC4lJAAQiWAAibgmg");
	var mask_graphics_34 = new cjs.Graphics().p("ArrStMAH/gl2QH1BqEYGtQEXGvhpH0QhqH2mtEXQk3DMleAAQiEAAiKgdg");
	var mask_graphics_35 = new cjs.Graphics().p("ArYS4MAG1gmEQH4BbElGkQEkGmhaH3QhbH5mkEkQlBDglzAAQhyAAh3gVg");
	var mask_graphics_36 = new cjs.Graphics().p("ArFTBMAFrgmQQH6BLEyGcQEwGchLH6QhLH7mbExQlKD2mIAAQhgAAhkgPg");
	var mask_graphics_37 = new cjs.Graphics().p("AqyTJMAEggmaQH8A8E+GRQE9GUg7H7Qg8H+mRE9QlTEMmeAAQhOAAhQgJg");
	var mask_graphics_38 = new cjs.Graphics().p("AqdTPMADVgmiQH+AsFLGIQFJGKgsH9QgsH/mIFJQlaEkm2AAQg6AAg9gFg");
	var mask_graphics_39 = new cjs.Graphics().p("Ap3TTMACKgmnQH/AdFWF9QFVF/gcH/QgdIAl9FVQlhE8nPAAQgmAAgogCg");
	var mask_graphics_40 = new cjs.Graphics().p("ApRTVMAA+gmqQIBANFhFzQFgF1gNH/QgNIBlzFgQlmFWnpAAIgkgBg");
	var mask_graphics_41 = new cjs.Graphics().p("Ao4zVQIAgCFsFoQFsFpADIAQACIAloFsQloFtoAADg");
	var mask_graphics_42 = new cjs.Graphics().p("ApezTQIAgTF3FdQF3FeASIAQASIAldF2QlcF4oBASg");
	var mask_graphics_43 = new cjs.Graphics().p("AqEzQQIAgiGBFRQGBFTAiH+QAiH/lRGBQlTGDn+Aig");
	var mask_graphics_44 = new cjs.Graphics().p("AqmzMQH+gxGMFFQGLFHAxH+QAyH9lGGLQlGGNn9Axg");
	var mask_graphics_45 = new cjs.Graphics().p("Aq5zFQH9hBGVE5QGVE7BBH7QBBH8k6GVQk6GWn7BBg");
	var mask_graphics_46 = new cjs.Graphics().p("ArMy9QH6hQGfEsQGeEuBRH6QBQH6ktGeQktGfn5BRg");
	var mask_graphics_47 = new cjs.Graphics().p("AreyzQH3hgGnEgQGoEhBgH3QBfH3kgGoQkgGon3Bgg");
	var mask_graphics_48 = new cjs.Graphics().p("ArxynQH0hvGwESQGwEVBvH0QBvHzkTGwQkTGxn0Bvg");
	var mask_graphics_49 = new cjs.Graphics().p("AsEyaQHxh+G4EFQG4EHB/HwQB+HxkGG4QkGG5nwB+g");
	var mask_graphics_50 = new cjs.Graphics().p("AsWyLQHtiNG/D3QHAD6COHsQCNHsj4HAQj5HBnrCNg");
	var mask_graphics_51 = new cjs.Graphics().p("Asox6QHoidHHDqQHIDsCcHoQCcHnjqHHQjrHJnnCcg");
	var mask_graphics_52 = new cjs.Graphics().p("As6xoQHjirHODcQHODdCrHjQCsHjjdHOQjdHPniCrg");
	var mask_graphics_53 = new cjs.Graphics().p("AtMxVQHei5HUDOQHVDPC6HdQC6HejPHUQjOHWneC6g");
	var mask_graphics_54 = new cjs.Graphics().p("Atdw/QHXjIHbC/QHbDBDIHYQDIHXi/HaQjBHcnYDJg");
	var mask_graphics_55 = new cjs.Graphics().p("AtvwoQHSjXHgCxQHhCzDWHRQDXHRiyHgQixHhnSDXg");
	var mask_graphics_56 = new cjs.Graphics().p("AuAwQQHLjlHlCjQHnCkDkHKQDlHLijHkQijHnnLDlg");
	var mask_graphics_57 = new cjs.Graphics().p("AuQv2QHDjzHqCUQHrCVDyHDQDzHEiUHpQiUHsnDDyg");
	var mask_graphics_58 = new cjs.Graphics().p("AugvbQG7kAHvCEQHvCGEAG8QEAG8iFHuQiFHwm8EAg");
	var mask_graphics_59 = new cjs.Graphics().p("Auwu+QGzkNH0B1QHyB3ENGzQENG1h1HxQh2Hzm0EOg");
	var mask_graphics_60 = new cjs.Graphics().p("AvAugQGrkaH3BmQH1BnEbGrQEaGshmH1QhnH3mrEag");
	var mask_graphics_61 = new cjs.Graphics().p("AvQuAQGjknH6BWQH4BYEnGjQEoGjhXH3QhYH6miEog");
	var mask_graphics_62 = new cjs.Graphics().p("AvftfQGak0H8BHQH7BJEzGZQE1GahIH6QhIH8mZE0g");
	var mask_graphics_63 = new cjs.Graphics().p("Avts8QGQlBH9A4QH9A5FAGQQFBGQg4H8Qg5H+mQFBg");
	var mask_graphics_64 = new cjs.Graphics().p("Av8sZQGHlMH/AoQH+AqFMGFQFNGHgpH9QgpIAmGFMg");
	var mask_graphics_65 = new cjs.Graphics().p("AwKrzQF8lZIAAZQIAAaFXF7QFZF9gZH+QgZIBl8FYg");
	var mask_graphics_66 = new cjs.Graphics().p("AwXrNQFxljIAAIQIAALFkFxQFjFxgJH/QgKIBlxFkg");
	var mask_graphics_67 = new cjs.Graphics().p("AwlqlQFnlvIAgGQIAgFFuFlQFvFnAGH/QAHIBlnFvg");
	var mask_graphics_68 = new cjs.Graphics().p("Awyp8QFbl5IAgXQIAgUF5FaQF6FbAVH/QAWIAlbF6g");
	var mask_graphics_69 = new cjs.Graphics().p("Aw+pSQFPmDH/gmQH/glGDFPQGEFQAmH9QAlIAlPGEg");
	var mask_graphics_70 = new cjs.Graphics().p("AxLomQFEmOH9g1QH+g0GNFDQGOFDA1H8QA1H/lDGOg");
	var mask_graphics_71 = new cjs.Graphics().p("AxWn5QE2mYH8hFQH8hDGXE2QGYE3BEH7QBFH9k3GXg");
	var mask_graphics_72 = new cjs.Graphics().p("AxinMQEqmhH6hUQH5hTGhEqQGhErBTH4QBUH6kqGhg");
	var mask_graphics_73 = new cjs.Graphics().p("AxtmdQEemqH2hkQH3hiGpEdQGqEeBjH1QBjH4kdGqg");
	var mask_graphics_74 = new cjs.Graphics().p("Ax3ltQEQmzH0hzQHzhxGyEQQGyERByHyQBzH0kQGyg");
	var mask_graphics_75 = new cjs.Graphics().p("AyBk9QEDm6HwiCQHviBG6EDQG7EDCBHvQCCHwkDG6g");
	var mask_graphics_76 = new cjs.Graphics().p("AyLkMQD2nBHriSQHsiPHBD1QHDD1CQHrQCRHsj2HCg");
	var mask_graphics_77 = new cjs.Graphics().p("AyUjZQDonKHnigQHnieHIDnQHKDoCfHmQCgHnjnHJg");
	var mask_graphics_78 = new cjs.Graphics().p("AycinQDanQHhiuQHiiuHQDZQHQDaCuHiQCvHhjaHQg");
	var mask_graphics_79 = new cjs.Graphics().p("AykhzQDMnWHci+QHdi8HVDLQHXDMC9HcQC9HcjMHWg");
	var mask_graphics_80 = new cjs.Graphics().p("Ayrg/QC9ncHWjMQHYjLHaC9QHdC9DLHWQDMHWi9Hdg");
	var mask_graphics_81 = new cjs.Graphics().p("AyygKQCvniHQjaQHRjZHgCuQHiCvDaHPQDZHQiuHig");
	var mask_graphics_82 = new cjs.Graphics().p("Ay4ArQCgnmHJjpQHKjnHmCgQHnCgDnHIQDoHJifHng");
	var mask_graphics_83 = new cjs.Graphics().p("Ay9BgQCQnqHCj2QHDj1HqCRQHsCQD1HCQD2HBiQHsg");
	var mask_graphics_84 = new cjs.Graphics().p("AzCCXQCCnvG6kEQG7kCHuCBQHwCCEDG6QEDG6iBHwg");
	var mask_graphics_85 = new cjs.Graphics().p("AzGDNQBynyGykRQGzkQHyBzQH0ByEQGyQERGyhyHzg");
	var mask_graphics_86 = new cjs.Graphics().p("AzKEFQBjn2GpkeQGrkdH1BjQH4BjEdGpQEeGqhjH3g");
	var mask_graphics_87 = new cjs.Graphics().p("AzNE8QBUn5GgkrQGikpH4BUQH6BTEqGhQErGghUH6g");
	var mask_graphics_88 = new cjs.Graphics().p("AzQF0QBFn7GXk4QGYk2H7BEQH8BFE3GXQE3GXhFH8g");
	var mask_graphics_89 = new cjs.Graphics().p("AzSGsQA1n9GOlEQGPlCH8A0QH+A1FDGOQFDGNg1H+g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:14.6,y:53.3}).wait(1).to({graphics:mask_graphics_1,x:15.3,y:51.5}).wait(1).to({graphics:mask_graphics_2,x:16,y:49.7}).wait(1).to({graphics:mask_graphics_3,x:16.7,y:48}).wait(1).to({graphics:mask_graphics_4,x:17.5,y:46.3}).wait(1).to({graphics:mask_graphics_5,x:18.3,y:44.6}).wait(1).to({graphics:mask_graphics_6,x:19.2,y:42.9}).wait(1).to({graphics:mask_graphics_7,x:20.1,y:41.3}).wait(1).to({graphics:mask_graphics_8,x:21.1,y:39.7}).wait(1).to({graphics:mask_graphics_9,x:22.1,y:38.1}).wait(1).to({graphics:mask_graphics_10,x:23.2,y:36.5}).wait(1).to({graphics:mask_graphics_11,x:24.3,y:35}).wait(1).to({graphics:mask_graphics_12,x:25.5,y:33.5}).wait(1).to({graphics:mask_graphics_13,x:26.7,y:32.1}).wait(1).to({graphics:mask_graphics_14,x:28,y:30.6}).wait(1).to({graphics:mask_graphics_15,x:29.3,y:29.3}).wait(1).to({graphics:mask_graphics_16,x:30.6,y:28}).wait(1).to({graphics:mask_graphics_17,x:32,y:26.7}).wait(1).to({graphics:mask_graphics_18,x:33.5,y:25.5}).wait(1).to({graphics:mask_graphics_19,x:34.9,y:24.4}).wait(1).to({graphics:mask_graphics_20,x:36.5,y:23.2}).wait(1).to({graphics:mask_graphics_21,x:38,y:22.2}).wait(1).to({graphics:mask_graphics_22,x:39.6,y:21.1}).wait(1).to({graphics:mask_graphics_23,x:41.2,y:20.2}).wait(1).to({graphics:mask_graphics_24,x:42.9,y:19.2}).wait(1).to({graphics:mask_graphics_25,x:44.5,y:18.4}).wait(1).to({graphics:mask_graphics_26,x:46.2,y:17.5}).wait(1).to({graphics:mask_graphics_27,x:47.9,y:16.7}).wait(1).to({graphics:mask_graphics_28,x:49.7,y:16}).wait(1).to({graphics:mask_graphics_29,x:51.4,y:15.3}).wait(1).to({graphics:mask_graphics_30,x:53.2,y:14.7}).wait(1).to({graphics:mask_graphics_31,x:55,y:14.1}).wait(1).to({graphics:mask_graphics_32,x:56.8,y:13.5}).wait(1).to({graphics:mask_graphics_33,x:58.6,y:13.1}).wait(1).to({graphics:mask_graphics_34,x:60.4,y:12.6}).wait(1).to({graphics:mask_graphics_35,x:62.2,y:12.2}).wait(1).to({graphics:mask_graphics_36,x:64.1,y:11.9}).wait(1).to({graphics:mask_graphics_37,x:65.9,y:11.6}).wait(1).to({graphics:mask_graphics_38,x:67.5,y:11.4}).wait(1).to({graphics:mask_graphics_39,x:67.5,y:11.3}).wait(1).to({graphics:mask_graphics_40,x:67.5,y:11.2}).wait(1).to({graphics:mask_graphics_41,x:67.5,y:11.2}).wait(1).to({graphics:mask_graphics_42,x:67.5,y:11.1}).wait(1).to({graphics:mask_graphics_43,x:67.5,y:11}).wait(1).to({graphics:mask_graphics_44,x:67.2,y:10.9}).wait(1).to({graphics:mask_graphics_45,x:65.3,y:10.6}).wait(1).to({graphics:mask_graphics_46,x:63.5,y:10.4}).wait(1).to({graphics:mask_graphics_47,x:61.6,y:10}).wait(1).to({graphics:mask_graphics_48,x:59.8,y:9.6}).wait(1).to({graphics:mask_graphics_49,x:58,y:9.2}).wait(1).to({graphics:mask_graphics_50,x:56.2,y:8.6}).wait(1).to({graphics:mask_graphics_51,x:54.4,y:8.1}).wait(1).to({graphics:mask_graphics_52,x:52.6,y:7.5}).wait(1).to({graphics:mask_graphics_53,x:50.9,y:6.8}).wait(1).to({graphics:mask_graphics_54,x:49.1,y:6.1}).wait(1).to({graphics:mask_graphics_55,x:47.4,y:5.4}).wait(1).to({graphics:mask_graphics_56,x:45.7,y:4.5}).wait(1).to({graphics:mask_graphics_57,x:44,y:3.7}).wait(1).to({graphics:mask_graphics_58,x:42.4,y:2.8}).wait(1).to({graphics:mask_graphics_59,x:40.7,y:1.8}).wait(1).to({graphics:mask_graphics_60,x:39.1,y:0.9}).wait(1).to({graphics:mask_graphics_61,x:37.6,y:-0.2}).wait(1).to({graphics:mask_graphics_62,x:36,y:-1.3}).wait(1).to({graphics:mask_graphics_63,x:34.5,y:-2.4}).wait(1).to({graphics:mask_graphics_64,x:33,y:-3.6}).wait(1).to({graphics:mask_graphics_65,x:31.6,y:-4.8}).wait(1).to({graphics:mask_graphics_66,x:30.2,y:-6.1}).wait(1).to({graphics:mask_graphics_67,x:28.9,y:-7.4}).wait(1).to({graphics:mask_graphics_68,x:27.6,y:-8.8}).wait(1).to({graphics:mask_graphics_69,x:26.4,y:-10.2}).wait(1).to({graphics:mask_graphics_70,x:25.2,y:-11.7}).wait(1).to({graphics:mask_graphics_71,x:24,y:-13.2}).wait(1).to({graphics:mask_graphics_72,x:23,y:-14.7}).wait(1).to({graphics:mask_graphics_73,x:21.9,y:-16.3}).wait(1).to({graphics:mask_graphics_74,x:20.9,y:-17.9}).wait(1).to({graphics:mask_graphics_75,x:20,y:-19.5}).wait(1).to({graphics:mask_graphics_76,x:19.1,y:-21.2}).wait(1).to({graphics:mask_graphics_77,x:18.2,y:-22.8}).wait(1).to({graphics:mask_graphics_78,x:17.4,y:-24.5}).wait(1).to({graphics:mask_graphics_79,x:16.6,y:-26.3}).wait(1).to({graphics:mask_graphics_80,x:15.9,y:-28}).wait(1).to({graphics:mask_graphics_81,x:15.2,y:-29.7}).wait(1).to({graphics:mask_graphics_82,x:14.6,y:-31.5}).wait(1).to({graphics:mask_graphics_83,x:14,y:-33.3}).wait(1).to({graphics:mask_graphics_84,x:13.5,y:-35.1}).wait(1).to({graphics:mask_graphics_85,x:13.1,y:-36.9}).wait(1).to({graphics:mask_graphics_86,x:12.7,y:-38.7}).wait(1).to({graphics:mask_graphics_87,x:12.3,y:-40.6}).wait(1).to({graphics:mask_graphics_88,x:12,y:-42.4}).wait(1).to({graphics:mask_graphics_89,x:11.8,y:-44.3}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("Al8EDQgWg7AAhEQAAihB9hzQB8hyCwAAQCwAAB9ByQAgAfAYAhQANARAKAS");
	this.shape.setTransform(10.1,-10.7,1,1,18.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.7,-28.7,101,36.4);


(lib.ar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-10,-187.7,1,1,0,0,0,0.1,-4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:53},129).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AAAgvIAABf");
	this.shape.setTransform(-10,-190);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AAAA5IAAhx");
	this.shape_1.setTransform(-10,-189.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AAABCIAAiD");
	this.shape_2.setTransform(-10,-188.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("AAABLIAAiV");
	this.shape_3.setTransform(-10,-187.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("AAABUIAAin");
	this.shape_4.setTransform(-10,-186.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(5,1,1).p("AAABdIAAi6");
	this.shape_5.setTransform(-10,-185.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(5,1,1).p("AAABnIAAjN");
	this.shape_6.setTransform(-10,-184.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(5,1,1).p("AAABwIAAjf");
	this.shape_7.setTransform(-10,-183.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(5,1,1).p("AAAB5IAAjx");
	this.shape_8.setTransform(-10,-182.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(5,1,1).p("AAACDIAAkF");
	this.shape_9.setTransform(-10,-181.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(5,1,1).p("AAACMIAAkX");
	this.shape_10.setTransform(-10,-180.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5,1,1).p("AAACVIAAkp");
	this.shape_11.setTransform(-10,-179.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(5,1,1).p("AAACeIAAk7");
	this.shape_12.setTransform(-10,-179);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(5,1,1).p("AAACnIAAlN");
	this.shape_13.setTransform(-10,-178.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(5,1,1).p("AAACxIAAlh");
	this.shape_14.setTransform(-10,-177.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(5,1,1).p("AAAC6IAAlz");
	this.shape_15.setTransform(-10,-176.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(5,1,1).p("AAADDIAAmF");
	this.shape_16.setTransform(-10,-175.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(5,1,1).p("AAADMIAAmX");
	this.shape_17.setTransform(-10,-174.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(5,1,1).p("AAADVIAAmq");
	this.shape_18.setTransform(-10,-173.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(5,1,1).p("AAADfIAAm9");
	this.shape_19.setTransform(-10,-172.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(5,1,1).p("AAADoIAAnP");
	this.shape_20.setTransform(-10,-171.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(5,1,1).p("AAADxIAAnh");
	this.shape_21.setTransform(-10,-170.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(5,1,1).p("AAAD6IAAnz");
	this.shape_22.setTransform(-10,-169.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(5,1,1).p("AAAEEIAAoG");
	this.shape_23.setTransform(-10,-168.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(5,1,1).p("AAAENIAAoZ");
	this.shape_24.setTransform(-10,-167.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(5,1,1).p("AAAEWIAAor");
	this.shape_25.setTransform(-10,-167);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(5,1,1).p("AAAEfIAAo9");
	this.shape_26.setTransform(-10,-166.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(5,1,1).p("AAAEoIAApP");
	this.shape_27.setTransform(-10,-165.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(5,1,1).p("AAAEyIAApj");
	this.shape_28.setTransform(-10,-164.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(5,1,1).p("AAAE7IAAp1");
	this.shape_29.setTransform(-10,-163.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(5,1,1).p("AAAFEIAAqH");
	this.shape_30.setTransform(-10,-162.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(5,1,1).p("AAAFNIAAqZ");
	this.shape_31.setTransform(-10,-161.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(5,1,1).p("AAAFXIAAqt");
	this.shape_32.setTransform(-10,-160.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(5,1,1).p("AAAFgIAAq/");
	this.shape_33.setTransform(-10,-159.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(5,1,1).p("AAAFpIAArR");
	this.shape_34.setTransform(-10,-158.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(5,1,1).p("AAAFyIAArj");
	this.shape_35.setTransform(-10,-157.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(5,1,1).p("AAAF7IAAr1");
	this.shape_36.setTransform(-10,-156.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(5,1,1).p("AAAGEIAAsI");
	this.shape_37.setTransform(-10,-155.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(5,1,1).p("AAAGOIAAsb");
	this.shape_38.setTransform(-10,-155);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(5,1,1).p("AAAGXIAAst");
	this.shape_39.setTransform(-10,-154.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(5,1,1).p("AAAGgIAAs/");
	this.shape_40.setTransform(-10,-153.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(5,1,1).p("AAAGpIAAtR");
	this.shape_41.setTransform(-10,-152.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(5,1,1).p("AAAGzIAAtk");
	this.shape_42.setTransform(-10,-151.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(5,1,1).p("AAAG8IAAt3");
	this.shape_43.setTransform(-10,-150.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(5,1,1).p("AAAHFIAAuJ");
	this.shape_44.setTransform(-10,-149.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(5,1,1).p("AAAHOIAAub");
	this.shape_45.setTransform(-10,-148.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(5,1,1).p("AAAHYIAAuv");
	this.shape_46.setTransform(-10,-147.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(5,1,1).p("AAAHhIAAvB");
	this.shape_47.setTransform(-10,-146.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(5,1,1).p("AAAHqIAAvT");
	this.shape_48.setTransform(-10,-145.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(5,1,1).p("AAAHzIAAvl");
	this.shape_49.setTransform(-10,-144.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(5,1,1).p("AAAH8IAAv3");
	this.shape_50.setTransform(-10,-144);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(5,1,1).p("AAAIGIAAwL");
	this.shape_51.setTransform(-10,-143);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(5,1,1).p("AAAIPIAAwd");
	this.shape_52.setTransform(-10,-142.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(5,1,1).p("AAAIYIAAwv");
	this.shape_53.setTransform(-10,-141.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(5,1,1).p("AAAIhIAAxB");
	this.shape_54.setTransform(-10,-140.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(5,1,1).p("AAAIqIAAxT");
	this.shape_55.setTransform(-10,-139.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(5,1,1).p("AAAI0IAAxn");
	this.shape_56.setTransform(-10,-138.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(5,1,1).p("AAAI9IAAx5");
	this.shape_57.setTransform(-10,-137.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(5,1,1).p("AAAJGIAAyL");
	this.shape_58.setTransform(-10,-136.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(5,1,1).p("AAAJPIAAyd");
	this.shape_59.setTransform(-10,-135.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(5,1,1).p("AAAJZIAAyx");
	this.shape_60.setTransform(-10,-134.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(5,1,1).p("AAAJiIAAzC");
	this.shape_61.setTransform(-10,-133.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(5,1,1).p("AAAJrIAAzV");
	this.shape_62.setTransform(-10,-132.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(5,1,1).p("AAAJ0IAAzn");
	this.shape_63.setTransform(-10,-132);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(5,1,1).p("AAAJ9IAAz5");
	this.shape_64.setTransform(-10,-131.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(5,1,1).p("AAAKHIAA0N");
	this.shape_65.setTransform(-10,-130.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(5,1,1).p("AAAKQIAA0f");
	this.shape_66.setTransform(-10,-129.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(5,1,1).p("AAAKZIAA0x");
	this.shape_67.setTransform(-10,-128.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(5,1,1).p("AAAKiIAA1D");
	this.shape_68.setTransform(-10,-127.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(5,1,1).p("AAAKrIAA1V");
	this.shape_69.setTransform(-10,-126.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(5,1,1).p("AAAK1IAA1p");
	this.shape_70.setTransform(-10,-125.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(5,1,1).p("AAAK+IAA17");
	this.shape_71.setTransform(-10,-124.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(5,1,1).p("AAALHIAA2N");
	this.shape_72.setTransform(-10,-123.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(5,1,1).p("AAALQIAA2f");
	this.shape_73.setTransform(-10,-122.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(5,1,1).p("AAALaIAA2z");
	this.shape_74.setTransform(-10,-121.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(5,1,1).p("AAALjIAA3F");
	this.shape_75.setTransform(-10,-120.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(5,1,1).p("AAALsIAA3X");
	this.shape_76.setTransform(-10,-120);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(5,1,1).p("AAAL1IAA3p");
	this.shape_77.setTransform(-10,-119.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(5,1,1).p("AAAL+IAA37");
	this.shape_78.setTransform(-10,-118.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(5,1,1).p("AAAMIIAA4P");
	this.shape_79.setTransform(-10,-117.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(5,1,1).p("AAAMRIAA4h");
	this.shape_80.setTransform(-10,-116.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(5,1,1).p("AAAMaIAA4z");
	this.shape_81.setTransform(-10,-115.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(5,1,1).p("AAAMjIAA5F");
	this.shape_82.setTransform(-10,-114.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(5,1,1).p("AAAMsIAA5X");
	this.shape_83.setTransform(-10,-113.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(5,1,1).p("AAAM2IAA5r");
	this.shape_84.setTransform(-10,-112.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(5,1,1).p("AAAM/IAA59");
	this.shape_85.setTransform(-10,-111.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(5,1,1).p("AAANIIAA6P");
	this.shape_86.setTransform(-10,-110.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(5,1,1).p("AAANRIAA6h");
	this.shape_87.setTransform(-10,-109.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(5,1,1).p("AAANbIAA61");
	this.shape_88.setTransform(-10,-108.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(5,1,1).p("AAANkIAA7H");
	this.shape_89.setTransform(-10,-108);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(5,1,1).p("AAANtIAA7Z");
	this.shape_90.setTransform(-10,-107.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(5,1,1).p("AAAN2IAA7r");
	this.shape_91.setTransform(-10,-106.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(5,1,1).p("AAAN/IAA79");
	this.shape_92.setTransform(-10,-105.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(5,1,1).p("AAAOJIAA8R");
	this.shape_93.setTransform(-10,-104.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(5,1,1).p("AAAOSIAA8j");
	this.shape_94.setTransform(-10,-103.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(5,1,1).p("AAAObIAA81");
	this.shape_95.setTransform(-10,-102.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(5,1,1).p("AAAOkIAA9H");
	this.shape_96.setTransform(-10,-101.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(5,1,1).p("AAAOtIAA9Z");
	this.shape_97.setTransform(-10,-100.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(5,1,1).p("AAAO3IAA9t");
	this.shape_98.setTransform(-10,-99.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(5,1,1).p("AAAPAIAA9/");
	this.shape_99.setTransform(-10,-98.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(5,1,1).p("AAAPJIAA+R");
	this.shape_100.setTransform(-10,-97.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(5,1,1).p("AAAPSIAA+j");
	this.shape_101.setTransform(-10,-97);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(5,1,1).p("AAAPcIAA+3");
	this.shape_102.setTransform(-10,-96);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(5,1,1).p("AAAPlIAA/J");
	this.shape_103.setTransform(-10,-95.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(5,1,1).p("AAAPuIAA/b");
	this.shape_104.setTransform(-10,-94.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(5,1,1).p("AAAP3IAA/t");
	this.shape_105.setTransform(-10,-93.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(5,1,1).p("AAAQAIAA//");
	this.shape_106.setTransform(-10,-92.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(5,1,1).p("AAAQKMAAAggT");
	this.shape_107.setTransform(-10,-91.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(5,1,1).p("AAAQTMAAAggl");
	this.shape_108.setTransform(-10,-90.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(5,1,1).p("AAAQcMAAAgg3");
	this.shape_109.setTransform(-10,-89.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(5,1,1).p("AAAQlMAAAghJ");
	this.shape_110.setTransform(-10,-88.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(5,1,1).p("AAAQuMAAAghb");
	this.shape_111.setTransform(-10,-87.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(5,1,1).p("AAAQ4MAAAghv");
	this.shape_112.setTransform(-10,-86.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(5,1,1).p("AAARBMAAAgiB");
	this.shape_113.setTransform(-10,-85.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(5,1,1).p("AAARKMAAAgiT");
	this.shape_114.setTransform(-10,-85);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(5,1,1).p("AAARTMAAAgil");
	this.shape_115.setTransform(-10,-84.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(5,1,1).p("AAARdMAAAgi5");
	this.shape_116.setTransform(-10,-83.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(5,1,1).p("AAARmMAAAgjL");
	this.shape_117.setTransform(-10,-82.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(5,1,1).p("AAARvMAAAgjd");
	this.shape_118.setTransform(-10,-81.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(5,1,1).p("AAAR4MAAAgjv");
	this.shape_119.setTransform(-10,-80.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(5,1,1).p("AAASBMAAAgkB");
	this.shape_120.setTransform(-10,-79.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(5,1,1).p("AAASLMAAAgkV");
	this.shape_121.setTransform(-10,-78.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(5,1,1).p("AAASUMAAAgkn");
	this.shape_122.setTransform(-10,-77.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(5,1,1).p("AAASdMAAAgk5");
	this.shape_123.setTransform(-10,-76.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(5,1,1).p("AAASmMAAAglL");
	this.shape_124.setTransform(-10,-75.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(5,1,1).p("AAASwMAAAglf");
	this.shape_125.setTransform(-10,-74.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(5,1,1).p("AAAS5MAAAglx");
	this.shape_126.setTransform(-10,-73.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(5,1,1).p("AAATCMAAAgmD");
	this.shape_127.setTransform(-10,-73);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(5,1,1).p("AAATLMAAAgmV");
	this.shape_128.setTransform(-10,-72.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(5,1,1).p("AAAzTMAAAAmn");
	this.shape_129.setTransform(-10,-71.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.9,-201.1,24.3,21.8);


(lib.honeyflap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.honeybee();
	this.instance.parent = this;
	this.instance.setTransform(22.9,-144.2,0.422,0.422,0,0,0,-36.8,63.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgrB1IgJgDIgBgBIgCgBIgBgBIgCAAIgBgBIgCgBIgBgBIgBAAIgBgBIgBgBIgCgBIgBgBIgBAAIgBgBIgBgBIgBgBIgCgBIgBAAIgBgBIgBgBIgBgBIgBgBIgBAAIgBgBIgBgBIAAgBIgCgBIAAAAIgBgBIgBgBIgBgBIgBgBIgBgBIAAAAIgBgBIgBgBIgBgBIAAgBIgBgBIgBAAIgBgBIAAgBIgBgBIgBgBIAAgBIgBgBIgBAAIAAgBIgBgBIgBgBIAAgBIgBgBIAAgBIgBAAIgBgBIAAgBIgBgBIAAgBIgBgBIAAgBIgBgBIAAAAIgBgBIAAgBIgBgBIAAgBIgBgBIAAgBIgBgBIAAAAIgBgBIAAgBIAAgBIgBgBIAAgBIAAgBIgBgBIAAgBIgBgBIAAAAIAAgBIgBgBIAAgBIAAgBIgBgBIAAgBIAAgBIgBgBIAAgBIAAAAIgBgBIAAgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAAAIAAgBIgBgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIgBgBIABgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAAAIAAgBIABgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIABgBIAAgBIABgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIABgBIABgCIAAgBIABgBIAAgBIABgBIABgBIAAgBIABgBIABgBIAAgBIABgBIAAgBIABgBIABgBIABgBIABgBIAAgBIABgBIABgBIABgBIABgBIABgCIAAgBIABgBIABgBIABgBIADgDIANgMIANgIIAPgHIAQgGIAPgDIAPgBIAQABIAPADIAQAFIAQAHIAEADIABAAIABABIABABIABABIACAAIABABIABABIABABIABABIABAAIABABIABABIABABIABABIABAAIABABIABABIAAABIACABIAAABIABAAIABABIABABIABABIAAABIABABIABAAIABABIABABIAAABIABABIABABIAAAAIABABIABABIAAABIABABIABABIAAABIABAAIABABIAAABIABABIAAABIABABIABABIAAAAIABABIAAABIABABIAAABIABABIAAABIABABIAAAAIABABIAAABIABABIAAABIABABIAAABIABABIAAABIAAAAIABABIAAABIABABIAAABIAAABIABABIAAABIABABIAAABIAAAAIABABIAAABIAAABIAAABIABABIAAABIAAABIABABIAAABIAAAAIABABIAAABIAAABIAAABIAAABIABABIAAABIAAABIAAABIABABIAAABIAAAAIAAABIAAABIAAABIAAABIABABIAAABIAAACIAAACIABACIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIgBABIAAABIAAABIAAABIAAABIAAABIAAABIgBABIAAABIAAABIAAACIgBACIAAACIAAABIAAABIgBABIAAABIAAABIAAABIgBABIAAABIAAABIgBABIAAABIAAABIgBABIAAABIAAABIgBABIAAABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIAAABIgBABIAAABIgBABIAAABIgBABIgBABIAAABIgBABIAAABIgBABIgBABIgBABIAAABIgBABIgBABIAAABIgBABIgBACIgBABIgBABIAAABIgBABIgBABIgBABIgBABIgBABIgBABIgBABIgBABIgBABIgPANQgMAJgOAGQgXAJgZAAQgWAAgVgIg");
	this.shape.setTransform(22.8,-143.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-215.3,105.5,84.1);


// stage content:
(lib.writingsuccess_Fontkid_q = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_529 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(529).call(this.frame_529).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(282.2,180.4,0.998,0.998,8,0,0,22.4,-144);
	this.instance._off = true;

	this.instance_1 = new lib.honeybee();
	this.instance_1.parent = this;
	this.instance_1.setTransform(418.8,419.2,0.421,0.421,8,0,0,-36.6,63.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({regY:-143.9,guide:{path:[282.1,180.4,281.3,149.1,260.2,127.1,237.8,103.9,206.2,103.9,201.8,103.9,197.6,104.3]}},50).to({scaleX:1,scaleY:1,guide:{path:[197.6,104.4,171.4,107.2,152.1,127.2,129.8,150.5,129.8,183.4,129.8,196,133,207.2]}},60).to({regX:22.5,guide:{path:[133.1,207.2,138.4,225.2,152.1,239.5,173.7,261.9,203.8,262.7]}},40).to({regX:22.4,regY:-144,scaleX:1,scaleY:1,guide:{path:[203.8,262.7,205,262.7,206.2,262.7,237.9,262.7,260.3,239.5,282.7,216.2,282.7,183.3,282.7,183.1,282.7,182.9]}},50).wait(9).to({x:284.7,y:101},0).to({guide:{path:[285.2,101.1,283.4,305,283.8,343.9,284.2,382.9,290.5,400.8,296.7,418.8,315.3,432.2,333.9,445.6,355.9,445.3,377.8,445,390.5,440.6,403.2,436.2,418.4,419.5]}},241).to({_off:true},10).wait(61));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(469).to({_off:false},0).to({regX:-36.7,guide:{path:[418.6,419.3,311.3,280.4,209.8,432.3,108.4,584.3,-199,404.3]}},60).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(282.7,179.7,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},200).wait(9).to({_off:false,x:418.8,y:419.2},0).to({_off:true},241).wait(71));

	// Layer 18
	this.instance_2 = new lib.ar1("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(373,330.3,1,1,0,0,0,0.3,30.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(218).to({_off:false},0).wait(312));

	// Layer 13
	this.instance_3 = new lib.ar2("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(200.1,174.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).wait(521));

	// Layer 17 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_372 = new cjs.Graphics().p("AireKQAAoBFqlrQFrlqIAAAQIBAAFqFqQFrFrAAIBg");
	var mask_graphics_373 = new cjs.Graphics().p("ACeQpQFdl4IAgUQIBgTF3FcQF5FdAUIAMgmpABeQgUoAFbl4g");
	var mask_graphics_374 = new cjs.Graphics().p("ACAQ0QFPmEH+gnQIAgoGEFOQGGFOAnH/MgmjAC9Qgnn/FMmGg");
	var mask_graphics_375 = new cjs.Graphics().p("ABkRBQFAmRH8g6QH+g7GRE+QGSE/A7H9MgmaAEcQg7n9E9mTg");
	var mask_graphics_376 = new cjs.Graphics().p("ABLRQQEwmdH6hPQH7hOGcEvQGfEvBOH7MgmOAF5QhOn6Eumeg");
	var mask_graphics_377 = new cjs.Graphics().p("AAzRfQEgmoH3hiQH4hhGoEeQGpEfBiH4Mgl9AHWQhin3Edmpg");
	var mask_graphics_378 = new cjs.Graphics().p("AAfRwQEPmzHzh1QHzh1GzEOQG0EPB1HzMglqAI0Qh0nzENm0g");
	var mask_graphics_379 = new cjs.Graphics().p("AAMSCQD/m+HuiHQHuiIG9D9QG+D+CIHuMglSAKQQiInvD8m9g");
	var mask_graphics_380 = new cjs.Graphics().p("AgDSUQDtnGHoibQHpiaHGDsQHIDsCaHpMgk3ALqQianoDrnIg");
	var mask_graphics_381 = new cjs.Graphics().p("AgQSpQDbnQHiitQHiitHPDaQHQDbCuHjMgkZANEQitnjDanPg");
	var mask_graphics_382 = new cjs.Graphics().p("AgbS+QDJnYHbi/QHcjAHWDJQHZDJC/HbMgj3AOdQi/ncDInXg");
	var mask_graphics_383 = new cjs.Graphics().p("AgkTUQC3nfHTjRQHVjSHeC2QHfC3DSHUMgjSAP0QjSnUC2nfg");
	var mask_graphics_384 = new cjs.Graphics().p("AgpTrQCknmHLjjQHLjjHlCkQHnCkDjHMMgirARJQjinLCknmg");
	var mask_graphics_385 = new cjs.Graphics().p("AgtUDQCSnrHCj1QHCj1HrCSQHsCRD1HDMgh/ASdQj0nCCRnsg");
	var mask_graphics_386 = new cjs.Graphics().p("AguUcQB/nxG4kFQG5kGHwB/QHxB+EGG5MghQATwQkFm5B+nxg");
	var mask_graphics_387 = new cjs.Graphics().p("AgsU2QBsn1GtkWQGvkXH0BsQH2BrEXGuMggeAVBQkWmuBrn2g");
	var mask_graphics_388 = new cjs.Graphics().p("AgoVRQBZn5GikmQGkknH4BYQH6BYEmGkI/pWOQklmjBXn5g");
	var mask_graphics_389 = new cjs.Graphics().p("AghVtQBFn8GXk2QGYk3H7BFQH9BFE2GXI+xXbQk1mXBEn8g");
	var mask_graphics_390 = new cjs.Graphics().p("AgYWJQAyn+GLlFQGMlHH9AyQH/AxFGGMI93YlQlEmLAwn/g");
	var mask_graphics_391 = new cjs.Graphics().p("AgMWnQAeoAF+lVQF/lVH/AeQIBAeFUF/I84ZtQlUl/Adn/g");
	var mask_graphics_392 = new cjs.Graphics().p("AABXFQALoBFyljQFxljIAAKQIBAKFjFxI74azQlilxAIoAg");
	var mask_graphics_393 = new cjs.Graphics().p("AASXjQgIoBFjlwQFklxH/gKQIBgJFxFjI61b2QlxljgKoBg");
	var mask_graphics_394 = new cjs.Graphics().p("AAlYCQgcoAFVl9QFVl/H/gdQIBgdF+FVI5wc2Ql+lVgeoAg");
	var mask_graphics_395 = new cjs.Graphics().p("AA7YiQgwn+FGmLQFHmLH9gxQH/gxGLFHI4od0QmLlHgxn+g");
	var mask_graphics_396 = new cjs.Graphics().p("ABTZDQhDn9E2mXQE3mXH8hEQH8hEGXE2I3devQmXk3hFn7g");
	var mask_graphics_397 = new cjs.Graphics().p("ABtZjQhWn5EmmiQEomkH4hXQH6hYGiEnI2RfnQmjknhYn5g");
	var mask_graphics_398 = new cjs.Graphics().p("ACKaFQhqn2EWmtQEYmvH0hqQH2hrGuEXMgVDAgcQmukXhrn1g");
	var mask_graphics_399 = new cjs.Graphics().p("ACpamQh9nxEGm4QEGm4Hwh+QHxh+G5EGMgTzAhOQm4kGh+nxg");
	var mask_graphics_400 = new cjs.Graphics().p("ADKbIQiQnsD1nBQD1nDHriQQHsiRHCD1MgSgAh9QnCj1iRnsg");
	var mask_graphics_401 = new cjs.Graphics().p("ADtbrQijnnDknKQDknMHlijQHmijHLDjMgRMAipQnLjkiknlg");
	var mask_graphics_402 = new cjs.Graphics().p("AEScNQi1ngDSnSQDSnUHfi2QHfi2HUDSMgP3AjRQnTjSi3nfg");
	var mask_graphics_403 = new cjs.Graphics().p("AE6cwQjInZDAnaQDAncHYjHQHYjJHbDAMgOfAj2QnbjAjJnXg");
	var mask_graphics_404 = new cjs.Graphics().p("AFjdTQjZnRCunhQCtnjHPjaQHRjaHiCuMgNHAkYQniiujbnPg");
	var mask_graphics_405 = new cjs.Graphics().p("AGPd1QjrnHCbnoQCbnpHGjrQHIjsHoCbMgLtAk2QnoibjsnHg");
	var mask_graphics_406 = new cjs.Graphics().p("AG8eYQj8m+CIntQCInvG9j8QG/j9HuCIMgKTAlRQnuiIj9m+g");
	var mask_graphics_407 = new cjs.Graphics().p("AHre7QkNm0B1nyQB2n0GzkNQG0kOHzB1MgI3AlpQnzh2kOmzg");
	var mask_graphics_408 = new cjs.Graphics().p("AIcfeQkemqBin2QBjn3GokeQGqkfH2BiMgHZAl9Qn3hikfmpg");
	var mask_graphics_409 = new cjs.Graphics().p("EAJPAgBQkumfBPn6QBPn6GdkuQGekvH6BPMgF9AmNQn6hPkumdg");
	var mask_graphics_410 = new cjs.Graphics().p("EAKDAgjQk+mTA8n8QA7n9GRk+QGTk+H9A8MgEfAmZQn9g7k+mSg");
	var mask_graphics_411 = new cjs.Graphics().p("EAK4AhFQlMmGAon+QAon/GElNQGGlNH/AoMgDAAmiQn/golOmFg");
	var mask_graphics_412 = new cjs.Graphics().p("EALvAhnQlbl5AVn/QAUoAF4lcQF5lcH/AVMgBiAmoQn/gVldl4g");
	var mask_graphics_413 = new cjs.Graphics().p("EAMoAiJQlqlsABoAQABoAFqlqQFrlqIBABMgAEAmqQoAgBlqlqg");
	var mask_graphics_414 = new cjs.Graphics().p("EAMxAiiQl0lhgOn/QgOoBFfl0QFhl0IAgPMABFAmpIgoABQnnAAlmlSg");
	var mask_graphics_415 = new cjs.Graphics().p("EAM6Ai6Ql+lWgdn/Qgen/FVl+QFWl/H/gdMACNAmmQgoACgoAAQnOAAlgk6g");
	var mask_graphics_416 = new cjs.Graphics().p("EANDAjSQmIlLgsn+Qgsn/FJmHQFLmJH+gsMADVAmhQg8AFg7AAQm2AAlakig");
	var mask_graphics_417 = new cjs.Graphics().p("EANNAjpQmRlAg7n8Qg7n9E+mRQE+mTH9g7MAEdAmaQhQAJhNAAQmfAAlTkLg");
	var mask_graphics_418 = new cjs.Graphics().p("EANYAj+QmbkzhJn6QhKn8EymaQEymbH7hKMAFlAmQQhjAPhfAAQmJAAlLj3g");
	var mask_graphics_419 = new cjs.Graphics().p("EANjAkTQmjknhZn4QhYn5EmmjQEmmkH5hZMAGsAmFQh1AVhxAAQl0AAlDjig");
	var mask_graphics_420 = new cjs.Graphics().p("EANvAknQmrkahnn2Qhon2EamrQEamtH2hnMAHyAl3QiGAciCAAQlgAAk6jOg");
	var mask_graphics_421 = new cjs.Graphics().p("EAN8Ak7Qm0kPh1nyQh2nzENmzQENm1Hzh1MAI5AlnQiYAkiSAAQlOAAkvi6g");
	var mask_graphics_422 = new cjs.Graphics().p("EAOKAlNQm8kBiEnvQiFnvEAm7QEBm8HviFMAJ/AlWQioAuijAAQk7AAkkipg");
	var mask_graphics_423 = new cjs.Graphics().p("EAOYAleQnDj0iTnqQiTnsD0nCQDznDHriTMALFAlCQi5A4izAAQkpAAkZiYg");
	var mask_graphics_424 = new cjs.Graphics().p("EAOnAlvQnKjnihnmQihnnDmnJQDmnKHmihMAMKAksQjIBDjEAAQkXAAkNiHg");
	var mask_graphics_425 = new cjs.Graphics().p("EAO2Al/QnQjaivnhQiwniDZnQQDZnRHhivMANOAkWQjXBOjVAAQkFAAkBh3g");
	var mask_graphics_426 = new cjs.Graphics().p("EAPGAmOQnWjNi9nbQi+ndDLnWQDLnXHci9MAOSAj8QjmBbjlAAQj1AAjzhog");
	var mask_graphics_427 = new cjs.Graphics().p("EAPXAmbQnci+jLnWQjLnXC9nbQC9ndHWjLMAPVAjgQj0Bpj2AAQjkAAjlhbg");
	var mask_graphics_428 = new cjs.Graphics().p("EAPoAmoQnhiwjZnQQjZnRCvnhQCwniHQjYMAQWAjCQkBB4kGAAQjUAAjXhOg");
	var mask_graphics_429 = new cjs.Graphics().p("EAP6Am0QnniijlnJQjnnLChnlQChnnHKjnMARXAijQkNCIkYAAQjDAAjIhCg");
	var mask_graphics_430 = new cjs.Graphics().p("EAQMAm/QnriUjznCQjznDCSnrQCTnrHDj0MASXAiCQkZCYkqAAQiyAAi5g3g");
	var mask_graphics_431 = new cjs.Graphics().p("EAQfAnJQnviFkAm8QkBm7CFnvQCEnwG8kAMATWAheQklCqk7AAQijAAiogtg");
	var mask_graphics_432 = new cjs.Graphics().p("EAQzAnSQnzh3kNmzQkNm1B1nyQB2nzG0kNMAUVAg5QkwC8lOAAQiSAAiXgkg");
	var mask_graphics_433 = new cjs.Graphics().p("EARHAnaQn2hokamsQkamsBnn1QBon3GskaMAVRAgTQk6DPlhAAQiBAAiGgcg");
	var mask_graphics_434 = new cjs.Graphics().p("EARbAnhQn4hakmmjQknmjBZn5QBYn5GkkmIWNfqQlDDil2AAQhvAAh1gUg");
	var mask_graphics_435 = new cjs.Graphics().p("EARxAnnQn8hLkymaQkymbBJn7QBKn8GbkyIXHfAQlLD3mLAAQheAAhhgOg");
	var mask_graphics_436 = new cjs.Graphics().p("EASGAnsQn9g8k+mRQk/mSA7n9QA7n9GSk/IYBeUQlUENmgAAQhMAAhPgJg");
	var mask_graphics_437 = new cjs.Graphics().p("EAScAnwQn/gtlJmIQlKmJAsn+QAsn/GIlKIY5dmQlbEkm3AAQg6AAg7gFg");
	var mask_graphics_438 = new cjs.Graphics().p("EASyAnzQoAgflUl+QlWl+Adn/QAeoBF+lVIZvc3QlgE7nPAAQgnAAgogCg");
	var mask_graphics_439 = new cjs.Graphics().p("EATJAn0QoAgPlgl0Qlhl1APn/QAOoBF0lgIalcGQlnFTnoAAIgmgBg");
	var mask_graphics_440 = new cjs.Graphics().p("EAF1AiLQlrlqgBoAQgBoBFqlrIbZbTQlqFroBACQoBgBlqlpg");
	var mask_graphics_441 = new cjs.Graphics().p("EAGCAikQl1lfgPoAQgQoBFfl1IcKafQlfF2oAAQIgpABQnnAAlmlRg");
	var mask_graphics_442 = new cjs.Graphics().p("EAGRAi8QmAlUgdn/QgfoAFTmAIc7ZrQlUF/n/AfQgpADgoAAQnOAAlgk5g");
	var mask_graphics_443 = new cjs.Graphics().p("EAGgAjUQmJlJgsn+Qgun/FImJIdqYzQlIGJn/AvQg9AFg7AAQm2AAlakhg");
	var mask_graphics_444 = new cjs.Graphics().p("EAGxAjqQmTk9g7n8Qg9n+E8mTIeZX8Qk9GTn9A9QhRAJhOAAQmeAAlTkLg");
	var mask_graphics_445 = new cjs.Graphics().p("EAHDAkAQmckxhKn7QhMn7ExmcIfEXCQkyGcn6BMQhkAOhgAAQmJAAlKj1g");
	var mask_graphics_446 = new cjs.Graphics().p("EAHWAkVQmlklhZn4Qhan6EkmkIfuWIQklGkn4BbQh2AVhxAAQl0AAlCjhg");
	var mask_graphics_447 = new cjs.Graphics().p("EAHpAkpQmtkZhnn1Qhpn2EYmtMAgWAVMQkYGsn2BqQiIAciCAAQlgAAk5jNg");
	var mask_graphics_448 = new cjs.Graphics().p("EAH+Ak8Qm1kMh2nyQh4nzELm1MAg+AUPQkMG1nyB4QiZAkiTAAQlNAAkvi6g");
	var mask_graphics_449 = new cjs.Graphics().p("EAIUAlPQm9kAiEnuQiGnwD+m8MAhiATRQj/G8nvCHQipAtikAAQk6AAkking");
	var mask_graphics_450 = new cjs.Graphics().p("EAIrAlgQnEjyiTnqQiVnsDxnDMAiGASRQjyHEnrCVQi6A3i0AAQkoAAkYiWg");
	var mask_graphics_451 = new cjs.Graphics().p("EAJDAlwQnLjliinlQiinnDknKMAimARRQjlHKnlCjQjKBDjFAAQkWAAkMiGg");
	var mask_graphics_452 = new cjs.Graphics().p("EAJbAmAQnRjYivngQixniDWnRMAjGAQQQjXHRnhCxQjZBPjVAAQkFAAkAh2g");
	var mask_graphics_453 = new cjs.Graphics().p("EAJ1AmPQnYjKi9nbQi/ndDKnXMAjiAPOQjJHXncDAQjnBcjmAAQj0AAjyhog");
	var mask_graphics_454 = new cjs.Graphics().p("EAKPAmcQndi8jLnVQjMnXC7ndMAj+AOMQi7HdnWDNQj1Bqj3AAQjjAAjlhbg");
	var mask_graphics_455 = new cjs.Graphics().p("EAKrAmpQnjiujYnPQjbnRCuniMAkYANIQiuHinQDbQkCB4kHAAQjTAAjWhNg");
	var mask_graphics_456 = new cjs.Graphics().p("EALHAm1QnnigjmnIQjonLCgnmMAkvAMDQigHnnJDoQkPCIkZAAQjCAAjHhBg");
	var mask_graphics_457 = new cjs.Graphics().p("EALkAnAQnsiSj0nBQj0nDCRnsMAlFAK/QiRHrnDD1QkaCZkrAAQixAAi4g2g");
	var mask_graphics_458 = new cjs.Graphics().p("EAMCAnKQnwiDkBm7QkBm7CDnwMAlYAJ5QiDHwm7ECQkmCqk9AAQihAAingsg");
	var mask_graphics_459 = new cjs.Graphics().p("EAMhAnTQn0h1kOmzQkOm0B1nzMAlpAIzQh0HzmzEPQkxC9lPAAQiRAAiWgjg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(372).to({graphics:mask_graphics_372,x:230.4,y:193}).wait(1).to({graphics:mask_graphics_373,x:230.4,y:195.3}).wait(1).to({graphics:mask_graphics_374,x:230.2,y:197.7}).wait(1).to({graphics:mask_graphics_375,x:230,y:200.1}).wait(1).to({graphics:mask_graphics_376,x:229.7,y:202.4}).wait(1).to({graphics:mask_graphics_377,x:229.3,y:204.7}).wait(1).to({graphics:mask_graphics_378,x:228.8,y:207.1}).wait(1).to({graphics:mask_graphics_379,x:228.2,y:209.4}).wait(1).to({graphics:mask_graphics_380,x:227.5,y:211.6}).wait(1).to({graphics:mask_graphics_381,x:226.8,y:213.9}).wait(1).to({graphics:mask_graphics_382,x:225.9,y:216.1}).wait(1).to({graphics:mask_graphics_383,x:225,y:218.3}).wait(1).to({graphics:mask_graphics_384,x:224,y:220.4}).wait(1).to({graphics:mask_graphics_385,x:222.9,y:222.5}).wait(1).to({graphics:mask_graphics_386,x:221.7,y:224.6}).wait(1).to({graphics:mask_graphics_387,x:220.5,y:226.6}).wait(1).to({graphics:mask_graphics_388,x:219.1,y:228.5}).wait(1).to({graphics:mask_graphics_389,x:217.7,y:230.4}).wait(1).to({graphics:mask_graphics_390,x:216.3,y:232.3}).wait(1).to({graphics:mask_graphics_391,x:214.7,y:234.1}).wait(1).to({graphics:mask_graphics_392,x:213.1,y:235.8}).wait(1).to({graphics:mask_graphics_393,x:211.4,y:237.5}).wait(1).to({graphics:mask_graphics_394,x:209.7,y:239.1}).wait(1).to({graphics:mask_graphics_395,x:207.9,y:240.7}).wait(1).to({graphics:mask_graphics_396,x:206,y:242.1}).wait(1).to({graphics:mask_graphics_397,x:204.1,y:243.5}).wait(1).to({graphics:mask_graphics_398,x:202.2,y:244.9}).wait(1).to({graphics:mask_graphics_399,x:200.2,y:246.1}).wait(1).to({graphics:mask_graphics_400,x:198.1,y:247.3}).wait(1).to({graphics:mask_graphics_401,x:196,y:248.4}).wait(1).to({graphics:mask_graphics_402,x:193.9,y:249.4}).wait(1).to({graphics:mask_graphics_403,x:191.7,y:250.3}).wait(1).to({graphics:mask_graphics_404,x:189.5,y:251.2}).wait(1).to({graphics:mask_graphics_405,x:187.2,y:251.9}).wait(1).to({graphics:mask_graphics_406,x:185,y:252.6}).wait(1).to({graphics:mask_graphics_407,x:182.7,y:253.2}).wait(1).to({graphics:mask_graphics_408,x:180.3,y:253.7}).wait(1).to({graphics:mask_graphics_409,x:178,y:254.1}).wait(1).to({graphics:mask_graphics_410,x:175.7,y:254.4}).wait(1).to({graphics:mask_graphics_411,x:173.3,y:254.6}).wait(1).to({graphics:mask_graphics_412,x:170.9,y:254.8}).wait(1).to({graphics:mask_graphics_413,x:168.6,y:254.8}).wait(1).to({graphics:mask_graphics_414,x:170.2,y:254.8}).wait(1).to({graphics:mask_graphics_415,x:172,y:254.8}).wait(1).to({graphics:mask_graphics_416,x:173.8,y:254.8}).wait(1).to({graphics:mask_graphics_417,x:175.6,y:254.8}).wait(1).to({graphics:mask_graphics_418,x:177.4,y:254.9}).wait(1).to({graphics:mask_graphics_419,x:179.2,y:254.9}).wait(1).to({graphics:mask_graphics_420,x:180.9,y:254.9}).wait(1).to({graphics:mask_graphics_421,x:182.7,y:254.9}).wait(1).to({graphics:mask_graphics_422,x:184.4,y:255}).wait(1).to({graphics:mask_graphics_423,x:186.2,y:255}).wait(1).to({graphics:mask_graphics_424,x:187.9,y:255}).wait(1).to({graphics:mask_graphics_425,x:189.6,y:255}).wait(1).to({graphics:mask_graphics_426,x:191.3,y:255}).wait(1).to({graphics:mask_graphics_427,x:193,y:255}).wait(1).to({graphics:mask_graphics_428,x:194.6,y:255}).wait(1).to({graphics:mask_graphics_429,x:196.2,y:255}).wait(1).to({graphics:mask_graphics_430,x:197.8,y:255}).wait(1).to({graphics:mask_graphics_431,x:199.4,y:255}).wait(1).to({graphics:mask_graphics_432,x:201,y:255}).wait(1).to({graphics:mask_graphics_433,x:202.5,y:255}).wait(1).to({graphics:mask_graphics_434,x:204,y:254.9}).wait(1).to({graphics:mask_graphics_435,x:205.4,y:254.9}).wait(1).to({graphics:mask_graphics_436,x:206.9,y:254.9}).wait(1).to({graphics:mask_graphics_437,x:208.3,y:254.9}).wait(1).to({graphics:mask_graphics_438,x:209.6,y:254.9}).wait(1).to({graphics:mask_graphics_439,x:211,y:254.9}).wait(1).to({graphics:mask_graphics_440,x:212.3,y:254.9}).wait(1).to({graphics:mask_graphics_441,x:213.5,y:254.9}).wait(1).to({graphics:mask_graphics_442,x:214.7,y:254.9}).wait(1).to({graphics:mask_graphics_443,x:215.9,y:254.9}).wait(1).to({graphics:mask_graphics_444,x:217.1,y:254.9}).wait(1).to({graphics:mask_graphics_445,x:218.2,y:254.9}).wait(1).to({graphics:mask_graphics_446,x:219.2,y:255}).wait(1).to({graphics:mask_graphics_447,x:220.2,y:255}).wait(1).to({graphics:mask_graphics_448,x:221.2,y:255}).wait(1).to({graphics:mask_graphics_449,x:222.1,y:255}).wait(1).to({graphics:mask_graphics_450,x:223,y:255}).wait(1).to({graphics:mask_graphics_451,x:223.8,y:255}).wait(1).to({graphics:mask_graphics_452,x:224.6,y:255}).wait(1).to({graphics:mask_graphics_453,x:225.3,y:255.1}).wait(1).to({graphics:mask_graphics_454,x:226,y:255.1}).wait(1).to({graphics:mask_graphics_455,x:226.7,y:255}).wait(1).to({graphics:mask_graphics_456,x:227.3,y:255}).wait(1).to({graphics:mask_graphics_457,x:227.8,y:255}).wait(1).to({graphics:mask_graphics_458,x:228.3,y:255}).wait(1).to({graphics:mask_graphics_459,x:228.7,y:255}).wait(71));

	// Layer 16
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(25,1,1).p("AKS7IMAAAAq0QACAkgJCSQgJCTjUDRQjTDSk8gQQk+gQjykD");
	this.shape_1.setTransform(352.9,274.7,1,0.984,0,0,180);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(372).to({_off:false},0).wait(158));

	// Layer 15 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_218 = new cjs.Graphics().p("AQIHqIAAiMIIsAAIAACMg");
	var mask_1_graphics_219 = new cjs.Graphics().p("AkVBQIAAifIIrAAIAACfg");
	var mask_1_graphics_220 = new cjs.Graphics().p("AkVBZIAAixIIrAAIAACxg");
	var mask_1_graphics_221 = new cjs.Graphics().p("AkVBjIAAjFIIrAAIAADFg");
	var mask_1_graphics_222 = new cjs.Graphics().p("AkVBtIAAjYIIrAAIAADYg");
	var mask_1_graphics_223 = new cjs.Graphics().p("AkVB2IAAjrIIrAAIAADrg");
	var mask_1_graphics_224 = new cjs.Graphics().p("AkVCAIAAj/IIrAAIAAD/g");
	var mask_1_graphics_225 = new cjs.Graphics().p("AkVCJIAAkRIIrAAIAAERg");
	var mask_1_graphics_226 = new cjs.Graphics().p("AkVCTIAAklIIrAAIAAElg");
	var mask_1_graphics_227 = new cjs.Graphics().p("AkVCdIAAk4IIrAAIAAE4g");
	var mask_1_graphics_228 = new cjs.Graphics().p("AkVCmIAAlLIIrAAIAAFLg");
	var mask_1_graphics_229 = new cjs.Graphics().p("AkVCwIAAlfIIrAAIAAFfg");
	var mask_1_graphics_230 = new cjs.Graphics().p("AkVC5IAAlyIIrAAIAAFyg");
	var mask_1_graphics_231 = new cjs.Graphics().p("AkVDDIAAmFIIrAAIAAGFg");
	var mask_1_graphics_232 = new cjs.Graphics().p("AkVDNIAAmZIIrAAIAAGZg");
	var mask_1_graphics_233 = new cjs.Graphics().p("AkVDWIAAmrIIrAAIAAGrg");
	var mask_1_graphics_234 = new cjs.Graphics().p("AkVDgIAAm/IIrAAIAAG/g");
	var mask_1_graphics_235 = new cjs.Graphics().p("AkVDqIAAnTIIrAAIAAHTg");
	var mask_1_graphics_236 = new cjs.Graphics().p("AkVDzIAAnlIIrAAIAAHlg");
	var mask_1_graphics_237 = new cjs.Graphics().p("AkVD9IAAn5IIrAAIAAH5g");
	var mask_1_graphics_238 = new cjs.Graphics().p("AkVEGIAAoMIIrAAIAAIMg");
	var mask_1_graphics_239 = new cjs.Graphics().p("AkVEQIAAofIIrAAIAAIfg");
	var mask_1_graphics_240 = new cjs.Graphics().p("AkVEaIAAozIIrAAIAAIzg");
	var mask_1_graphics_241 = new cjs.Graphics().p("AkVEjIAApGIIrAAIAAJGg");
	var mask_1_graphics_242 = new cjs.Graphics().p("AkVEtIAApZIIrAAIAAJZg");
	var mask_1_graphics_243 = new cjs.Graphics().p("AkVE3IAAptIIrAAIAAJtg");
	var mask_1_graphics_244 = new cjs.Graphics().p("AkVFAIAAp/IIrAAIAAJ/g");
	var mask_1_graphics_245 = new cjs.Graphics().p("AkVFKIAAqTIIrAAIAAKTg");
	var mask_1_graphics_246 = new cjs.Graphics().p("AkVFTIAAqlIIrAAIAAKlg");
	var mask_1_graphics_247 = new cjs.Graphics().p("AkVFdIAAq5IIrAAIAAK5g");
	var mask_1_graphics_248 = new cjs.Graphics().p("AkVFnIAArNIIrAAIAALNg");
	var mask_1_graphics_249 = new cjs.Graphics().p("AkVFwIAArfIIrAAIAALfg");
	var mask_1_graphics_250 = new cjs.Graphics().p("AkVF6IAArzIIrAAIAALzg");
	var mask_1_graphics_251 = new cjs.Graphics().p("AkVGEIAAsGIIrAAIAAMGg");
	var mask_1_graphics_252 = new cjs.Graphics().p("AkVGNIAAsZIIrAAIAAMZg");
	var mask_1_graphics_253 = new cjs.Graphics().p("AkVGXIAAstIIrAAIAAMtg");
	var mask_1_graphics_254 = new cjs.Graphics().p("AkVGhIAAtBIIrAAIAANBg");
	var mask_1_graphics_255 = new cjs.Graphics().p("AkVGqIAAtTIIrAAIAANTg");
	var mask_1_graphics_256 = new cjs.Graphics().p("AkVG0IAAtnIIrAAIAANng");
	var mask_1_graphics_257 = new cjs.Graphics().p("AkVG9IAAt5IIrAAIAAN5g");
	var mask_1_graphics_258 = new cjs.Graphics().p("AkVHHIAAuNIIrAAIAAONg");
	var mask_1_graphics_259 = new cjs.Graphics().p("AkVHRIAAuhIIrAAIAAOhg");
	var mask_1_graphics_260 = new cjs.Graphics().p("AkVHaIAAuzIIrAAIAAOzg");
	var mask_1_graphics_261 = new cjs.Graphics().p("AkVHkIAAvHIIrAAIAAPHg");
	var mask_1_graphics_262 = new cjs.Graphics().p("AkVHtIAAvZIIrAAIAAPZg");
	var mask_1_graphics_263 = new cjs.Graphics().p("AkVH3IAAvtIIrAAIAAPtg");
	var mask_1_graphics_264 = new cjs.Graphics().p("AkVIBIAAwBIIrAAIAAQBg");
	var mask_1_graphics_265 = new cjs.Graphics().p("AkVILIAAwUIIrAAIAAQUg");
	var mask_1_graphics_266 = new cjs.Graphics().p("AkVIUIAAwnIIrAAIAAQng");
	var mask_1_graphics_267 = new cjs.Graphics().p("AkVIeIAAw7IIrAAIAAQ7g");
	var mask_1_graphics_268 = new cjs.Graphics().p("AkVInIAAxNIIrAAIAARNg");
	var mask_1_graphics_269 = new cjs.Graphics().p("AkVIxIAAxhIIrAAIAARhg");
	var mask_1_graphics_270 = new cjs.Graphics().p("AkVI7IAAx0IIrAAIAAR0g");
	var mask_1_graphics_271 = new cjs.Graphics().p("AkVJEIAAyHIIrAAIAASHg");
	var mask_1_graphics_272 = new cjs.Graphics().p("AkVJOIAAybIIrAAIAASbg");
	var mask_1_graphics_273 = new cjs.Graphics().p("AkVJXIAAyuIIrAAIAASug");
	var mask_1_graphics_274 = new cjs.Graphics().p("AkVJhIAAzBIIrAAIAATBg");
	var mask_1_graphics_275 = new cjs.Graphics().p("AkVJrIAAzVIIrAAIAATVg");
	var mask_1_graphics_276 = new cjs.Graphics().p("AkVJ0IAAznIIrAAIAATng");
	var mask_1_graphics_277 = new cjs.Graphics().p("AkVJ+IAAz7IIrAAIAAT7g");
	var mask_1_graphics_278 = new cjs.Graphics().p("AkVKHIAA0OIIrAAIAAUOg");
	var mask_1_graphics_279 = new cjs.Graphics().p("AkVKRIAA0hIIrAAIAAUhg");
	var mask_1_graphics_280 = new cjs.Graphics().p("AkVKbIAA01IIrAAIAAU1g");
	var mask_1_graphics_281 = new cjs.Graphics().p("AkVKkIAA1HIIrAAIAAVHg");
	var mask_1_graphics_282 = new cjs.Graphics().p("AkVKuIAA1bIIrAAIAAVbg");
	var mask_1_graphics_283 = new cjs.Graphics().p("AkVK3IAA1tIIrAAIAAVtg");
	var mask_1_graphics_284 = new cjs.Graphics().p("AkVLBIAA2BIIrAAIAAWBg");
	var mask_1_graphics_285 = new cjs.Graphics().p("AkVLLIAA2VIIrAAIAAWVg");
	var mask_1_graphics_286 = new cjs.Graphics().p("AkVLVIAA2oIIrAAIAAWog");
	var mask_1_graphics_287 = new cjs.Graphics().p("AkVLeIAA27IIrAAIAAW7g");
	var mask_1_graphics_288 = new cjs.Graphics().p("AkVLoIAA3PIIrAAIAAXPg");
	var mask_1_graphics_289 = new cjs.Graphics().p("AkVLxIAA3hIIrAAIAAXhg");
	var mask_1_graphics_290 = new cjs.Graphics().p("AkVL7IAA31IIrAAIAAX1g");
	var mask_1_graphics_291 = new cjs.Graphics().p("AkVMFIAA4JIIrAAIAAYJg");
	var mask_1_graphics_292 = new cjs.Graphics().p("AkVMOIAA4bIIrAAIAAYbg");
	var mask_1_graphics_293 = new cjs.Graphics().p("AkVMYIAA4vIIrAAIAAYvg");
	var mask_1_graphics_294 = new cjs.Graphics().p("AkVMhIAA5BIIrAAIAAZBg");
	var mask_1_graphics_295 = new cjs.Graphics().p("AkVMrIAA5VIIrAAIAAZVg");
	var mask_1_graphics_296 = new cjs.Graphics().p("AkVM1IAA5pIIrAAIAAZpg");
	var mask_1_graphics_297 = new cjs.Graphics().p("AkVM/IAA59IIrAAIAAZ9g");
	var mask_1_graphics_298 = new cjs.Graphics().p("AkVNIIAA6PIIrAAIAAaPg");
	var mask_1_graphics_299 = new cjs.Graphics().p("AkVNSIAA6jIIrAAIAAajg");
	var mask_1_graphics_300 = new cjs.Graphics().p("AkVNbIAA61IIrAAIAAa1g");
	var mask_1_graphics_301 = new cjs.Graphics().p("AkVNlIAA7JIIrAAIAAbJg");
	var mask_1_graphics_302 = new cjs.Graphics().p("AkVNvIAA7dIIrAAIAAbdg");
	var mask_1_graphics_303 = new cjs.Graphics().p("AkVN4IAA7vIIrAAIAAbvg");
	var mask_1_graphics_304 = new cjs.Graphics().p("AkVOCIAA8DIIrAAIAAcDg");
	var mask_1_graphics_305 = new cjs.Graphics().p("AkVOLIAA8VIIrAAIAAcVg");
	var mask_1_graphics_306 = new cjs.Graphics().p("AkVOVIAA8pIIrAAIAAcpg");
	var mask_1_graphics_307 = new cjs.Graphics().p("AkVOfIAA89IIrAAIAAc9g");
	var mask_1_graphics_308 = new cjs.Graphics().p("AkVOoIAA9PIIrAAIAAdPg");
	var mask_1_graphics_309 = new cjs.Graphics().p("AkVOyIAA9jIIrAAIAAdjg");
	var mask_1_graphics_310 = new cjs.Graphics().p("AkVO7IAA92IIrAAIAAd2g");
	var mask_1_graphics_311 = new cjs.Graphics().p("AkVPFIAA+JIIrAAIAAeJg");
	var mask_1_graphics_312 = new cjs.Graphics().p("AkVPPIAA+dIIrAAIAAedg");
	var mask_1_graphics_313 = new cjs.Graphics().p("AkVPYIAA+vIIrAAIAAevg");
	var mask_1_graphics_314 = new cjs.Graphics().p("AkVPiIAA/DIIrAAIAAfDg");
	var mask_1_graphics_315 = new cjs.Graphics().p("AkVPrIAA/WIIrAAIAAfWg");
	var mask_1_graphics_316 = new cjs.Graphics().p("AkVP1IAA/pIIrAAIAAfpg");
	var mask_1_graphics_317 = new cjs.Graphics().p("AkVP/IAA/9IIrAAIAAf9g");
	var mask_1_graphics_318 = new cjs.Graphics().p("AkVQIMAAAggPIIrAAMAAAAgPg");
	var mask_1_graphics_319 = new cjs.Graphics().p("AkVQSMAAAggjIIrAAMAAAAgjg");
	var mask_1_graphics_320 = new cjs.Graphics().p("AkVQcMAAAgg3IIrAAMAAAAg3g");
	var mask_1_graphics_321 = new cjs.Graphics().p("AkVQlMAAAghJIIrAAMAAAAhJg");
	var mask_1_graphics_322 = new cjs.Graphics().p("AkVQvMAAAghdIIrAAMAAAAhdg");
	var mask_1_graphics_323 = new cjs.Graphics().p("AkVQ5MAAAghwIIrAAMAAAAhwg");
	var mask_1_graphics_324 = new cjs.Graphics().p("AkVRCMAAAgiDIIrAAMAAAAiDg");
	var mask_1_graphics_325 = new cjs.Graphics().p("AkVRMMAAAgiXIIrAAMAAAAiXg");
	var mask_1_graphics_326 = new cjs.Graphics().p("AkVRVMAAAgipIIrAAMAAAAipg");
	var mask_1_graphics_327 = new cjs.Graphics().p("AkVRfMAAAgi9IIrAAMAAAAi9g");
	var mask_1_graphics_328 = new cjs.Graphics().p("AkVRpMAAAgjRIIrAAMAAAAjRg");
	var mask_1_graphics_329 = new cjs.Graphics().p("AkVRzMAAAgjkIIrAAMAAAAjkg");
	var mask_1_graphics_330 = new cjs.Graphics().p("AkVR8MAAAgj3IIrAAMAAAAj3g");
	var mask_1_graphics_331 = new cjs.Graphics().p("AkVSGMAAAgkLIIrAAMAAAAkLg");
	var mask_1_graphics_332 = new cjs.Graphics().p("AkVSPMAAAgkdIIrAAMAAAAkdg");
	var mask_1_graphics_333 = new cjs.Graphics().p("AkVSZMAAAgkxIIrAAMAAAAkxg");
	var mask_1_graphics_334 = new cjs.Graphics().p("AkVSjMAAAglFIIrAAMAAAAlFg");
	var mask_1_graphics_335 = new cjs.Graphics().p("AkVSsMAAAglXIIrAAMAAAAlXg");
	var mask_1_graphics_336 = new cjs.Graphics().p("AkVS2MAAAglrIIrAAMAAAAlrg");
	var mask_1_graphics_337 = new cjs.Graphics().p("AkVTAMAAAgl/IIrAAMAAAAl/g");
	var mask_1_graphics_338 = new cjs.Graphics().p("AkVTJMAAAgmRIIrAAMAAAAmRg");
	var mask_1_graphics_339 = new cjs.Graphics().p("AkVTTMAAAgmlIIrAAMAAAAmlg");
	var mask_1_graphics_340 = new cjs.Graphics().p("AkVTcMAAAgm3IIrAAMAAAAm3g");
	var mask_1_graphics_341 = new cjs.Graphics().p("AkVTmMAAAgnLIIrAAMAAAAnLg");
	var mask_1_graphics_342 = new cjs.Graphics().p("AkVTvMAAAgndIIrAAMAAAAndg");
	var mask_1_graphics_343 = new cjs.Graphics().p("AkVT5MAAAgnxIIrAAMAAAAnxg");
	var mask_1_graphics_344 = new cjs.Graphics().p("AkVUDMAAAgoFIIrAAMAAAAoFg");
	var mask_1_graphics_345 = new cjs.Graphics().p("AkVUMMAAAgoXIIrAAMAAAAoXg");
	var mask_1_graphics_346 = new cjs.Graphics().p("AkVUWMAAAgorIIrAAMAAAAorg");
	var mask_1_graphics_347 = new cjs.Graphics().p("AkVUfMAAAgo9IIrAAMAAAAo9g");
	var mask_1_graphics_348 = new cjs.Graphics().p("AkVUpMAAAgpRIIrAAMAAAApRg");
	var mask_1_graphics_349 = new cjs.Graphics().p("AkVUzMAAAgplIIrAAMAAAAplg");
	var mask_1_graphics_350 = new cjs.Graphics().p("AkVU8MAAAgp4IIrAAMAAAAp4g");
	var mask_1_graphics_351 = new cjs.Graphics().p("AkVVGMAAAgqLIIrAAMAAAAqLg");
	var mask_1_graphics_352 = new cjs.Graphics().p("AkVVQMAAAgqfIIrAAMAAAAqfg");
	var mask_1_graphics_353 = new cjs.Graphics().p("AkVVZMAAAgqxIIrAAMAAAAqxg");
	var mask_1_graphics_354 = new cjs.Graphics().p("AkVVjMAAAgrFIIrAAMAAAArFg");
	var mask_1_graphics_355 = new cjs.Graphics().p("AkVVtMAAAgrZIIrAAMAAAArZg");
	var mask_1_graphics_356 = new cjs.Graphics().p("AkVV2MAAAgrrIIrAAMAAAArrg");
	var mask_1_graphics_357 = new cjs.Graphics().p("AkVWAMAAAgr/IIrAAMAAAAr/g");
	var mask_1_graphics_358 = new cjs.Graphics().p("AkVWJMAAAgsSIIrAAMAAAAsSg");
	var mask_1_graphics_359 = new cjs.Graphics().p("AkVWTMAAAgslIIrAAMAAAAslg");
	var mask_1_graphics_360 = new cjs.Graphics().p("AkVWdMAAAgs5IIrAAMAAAAs5g");
	var mask_1_graphics_361 = new cjs.Graphics().p("AkVWnMAAAgtMIIrAAMAAAAtMg");
	var mask_1_graphics_362 = new cjs.Graphics().p("AkVWwMAAAgtfIIrAAMAAAAtfg");
	var mask_1_graphics_363 = new cjs.Graphics().p("AkVW6MAAAgtzIIrAAMAAAAtzg");
	var mask_1_graphics_364 = new cjs.Graphics().p("AkVXDMAAAguFIIrAAMAAAAuFg");
	var mask_1_graphics_365 = new cjs.Graphics().p("AkVXNMAAAguZIIrAAMAAAAuZg");
	var mask_1_graphics_366 = new cjs.Graphics().p("AkVXXMAAAgusIIrAAMAAAAusg");
	var mask_1_graphics_367 = new cjs.Graphics().p("AkVXgMAAAgu/IIrAAMAAAAu/g");
	var mask_1_graphics_368 = new cjs.Graphics().p("AkVXqMAAAgvTIIrAAMAAAAvTg");
	var mask_1_graphics_369 = new cjs.Graphics().p("AkVX0MAAAgvnIIrAAMAAAAvng");
	var mask_1_graphics_370 = new cjs.Graphics().p("AkVX9MAAAgv5IIrAAMAAAAv5g");
	var mask_1_graphics_371 = new cjs.Graphics().p("AkVYHMAAAgwNIIrAAMAAAAwNg");
	var mask_1_graphics_372 = new cjs.Graphics().p("AQIeMMAAAgwfIIsAAMAAAAwfg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(218).to({graphics:mask_1_graphics_218,x:158.8,y:49}).wait(1).to({graphics:mask_1_graphics_219,x:289.8,y:91.9}).wait(1).to({graphics:mask_1_graphics_220,x:289.8,y:92.8}).wait(1).to({graphics:mask_1_graphics_221,x:289.8,y:93.7}).wait(1).to({graphics:mask_1_graphics_222,x:289.8,y:94.6}).wait(1).to({graphics:mask_1_graphics_223,x:289.8,y:95.5}).wait(1).to({graphics:mask_1_graphics_224,x:289.8,y:96.4}).wait(1).to({graphics:mask_1_graphics_225,x:289.8,y:97.3}).wait(1).to({graphics:mask_1_graphics_226,x:289.8,y:98.3}).wait(1).to({graphics:mask_1_graphics_227,x:289.8,y:99.2}).wait(1).to({graphics:mask_1_graphics_228,x:289.8,y:100.1}).wait(1).to({graphics:mask_1_graphics_229,x:289.8,y:101}).wait(1).to({graphics:mask_1_graphics_230,x:289.8,y:101.9}).wait(1).to({graphics:mask_1_graphics_231,x:289.8,y:102.8}).wait(1).to({graphics:mask_1_graphics_232,x:289.8,y:103.7}).wait(1).to({graphics:mask_1_graphics_233,x:289.8,y:104.6}).wait(1).to({graphics:mask_1_graphics_234,x:289.8,y:105.5}).wait(1).to({graphics:mask_1_graphics_235,x:289.8,y:106.4}).wait(1).to({graphics:mask_1_graphics_236,x:289.8,y:107.3}).wait(1).to({graphics:mask_1_graphics_237,x:289.8,y:108.3}).wait(1).to({graphics:mask_1_graphics_238,x:289.8,y:109.2}).wait(1).to({graphics:mask_1_graphics_239,x:289.8,y:110.1}).wait(1).to({graphics:mask_1_graphics_240,x:289.8,y:111}).wait(1).to({graphics:mask_1_graphics_241,x:289.8,y:111.9}).wait(1).to({graphics:mask_1_graphics_242,x:289.8,y:112.8}).wait(1).to({graphics:mask_1_graphics_243,x:289.8,y:113.7}).wait(1).to({graphics:mask_1_graphics_244,x:289.8,y:114.6}).wait(1).to({graphics:mask_1_graphics_245,x:289.8,y:115.6}).wait(1).to({graphics:mask_1_graphics_246,x:289.8,y:116.5}).wait(1).to({graphics:mask_1_graphics_247,x:289.8,y:117.4}).wait(1).to({graphics:mask_1_graphics_248,x:289.8,y:118.3}).wait(1).to({graphics:mask_1_graphics_249,x:289.8,y:119.2}).wait(1).to({graphics:mask_1_graphics_250,x:289.8,y:120.1}).wait(1).to({graphics:mask_1_graphics_251,x:289.8,y:121}).wait(1).to({graphics:mask_1_graphics_252,x:289.8,y:121.9}).wait(1).to({graphics:mask_1_graphics_253,x:289.8,y:122.8}).wait(1).to({graphics:mask_1_graphics_254,x:289.8,y:123.8}).wait(1).to({graphics:mask_1_graphics_255,x:289.8,y:124.7}).wait(1).to({graphics:mask_1_graphics_256,x:289.8,y:125.6}).wait(1).to({graphics:mask_1_graphics_257,x:289.8,y:126.5}).wait(1).to({graphics:mask_1_graphics_258,x:289.8,y:127.4}).wait(1).to({graphics:mask_1_graphics_259,x:289.8,y:128.3}).wait(1).to({graphics:mask_1_graphics_260,x:289.8,y:129.2}).wait(1).to({graphics:mask_1_graphics_261,x:289.8,y:130.1}).wait(1).to({graphics:mask_1_graphics_262,x:289.8,y:131.1}).wait(1).to({graphics:mask_1_graphics_263,x:289.8,y:132}).wait(1).to({graphics:mask_1_graphics_264,x:289.8,y:132.9}).wait(1).to({graphics:mask_1_graphics_265,x:289.8,y:133.8}).wait(1).to({graphics:mask_1_graphics_266,x:289.8,y:134.7}).wait(1).to({graphics:mask_1_graphics_267,x:289.8,y:135.6}).wait(1).to({graphics:mask_1_graphics_268,x:289.8,y:136.5}).wait(1).to({graphics:mask_1_graphics_269,x:289.8,y:137.4}).wait(1).to({graphics:mask_1_graphics_270,x:289.8,y:138.3}).wait(1).to({graphics:mask_1_graphics_271,x:289.8,y:139.2}).wait(1).to({graphics:mask_1_graphics_272,x:289.8,y:140.1}).wait(1).to({graphics:mask_1_graphics_273,x:289.8,y:141.1}).wait(1).to({graphics:mask_1_graphics_274,x:289.8,y:142}).wait(1).to({graphics:mask_1_graphics_275,x:289.8,y:142.9}).wait(1).to({graphics:mask_1_graphics_276,x:289.8,y:143.8}).wait(1).to({graphics:mask_1_graphics_277,x:289.8,y:144.7}).wait(1).to({graphics:mask_1_graphics_278,x:289.8,y:145.6}).wait(1).to({graphics:mask_1_graphics_279,x:289.8,y:146.5}).wait(1).to({graphics:mask_1_graphics_280,x:289.8,y:147.4}).wait(1).to({graphics:mask_1_graphics_281,x:289.8,y:148.3}).wait(1).to({graphics:mask_1_graphics_282,x:289.8,y:149.3}).wait(1).to({graphics:mask_1_graphics_283,x:289.8,y:150.2}).wait(1).to({graphics:mask_1_graphics_284,x:289.8,y:151.1}).wait(1).to({graphics:mask_1_graphics_285,x:289.8,y:152}).wait(1).to({graphics:mask_1_graphics_286,x:289.8,y:152.9}).wait(1).to({graphics:mask_1_graphics_287,x:289.8,y:153.8}).wait(1).to({graphics:mask_1_graphics_288,x:289.8,y:154.7}).wait(1).to({graphics:mask_1_graphics_289,x:289.8,y:155.6}).wait(1).to({graphics:mask_1_graphics_290,x:289.8,y:156.6}).wait(1).to({graphics:mask_1_graphics_291,x:289.8,y:157.5}).wait(1).to({graphics:mask_1_graphics_292,x:289.8,y:158.4}).wait(1).to({graphics:mask_1_graphics_293,x:289.8,y:159.3}).wait(1).to({graphics:mask_1_graphics_294,x:289.8,y:160.2}).wait(1).to({graphics:mask_1_graphics_295,x:289.8,y:161.1}).wait(1).to({graphics:mask_1_graphics_296,x:289.8,y:162}).wait(1).to({graphics:mask_1_graphics_297,x:289.8,y:162.9}).wait(1).to({graphics:mask_1_graphics_298,x:289.8,y:163.8}).wait(1).to({graphics:mask_1_graphics_299,x:289.8,y:164.7}).wait(1).to({graphics:mask_1_graphics_300,x:289.8,y:165.6}).wait(1).to({graphics:mask_1_graphics_301,x:289.8,y:166.6}).wait(1).to({graphics:mask_1_graphics_302,x:289.8,y:167.5}).wait(1).to({graphics:mask_1_graphics_303,x:289.8,y:168.4}).wait(1).to({graphics:mask_1_graphics_304,x:289.8,y:169.3}).wait(1).to({graphics:mask_1_graphics_305,x:289.8,y:170.2}).wait(1).to({graphics:mask_1_graphics_306,x:289.8,y:171.1}).wait(1).to({graphics:mask_1_graphics_307,x:289.8,y:172}).wait(1).to({graphics:mask_1_graphics_308,x:289.8,y:172.9}).wait(1).to({graphics:mask_1_graphics_309,x:289.8,y:173.9}).wait(1).to({graphics:mask_1_graphics_310,x:289.8,y:174.8}).wait(1).to({graphics:mask_1_graphics_311,x:289.8,y:175.7}).wait(1).to({graphics:mask_1_graphics_312,x:289.8,y:176.6}).wait(1).to({graphics:mask_1_graphics_313,x:289.8,y:177.5}).wait(1).to({graphics:mask_1_graphics_314,x:289.8,y:178.4}).wait(1).to({graphics:mask_1_graphics_315,x:289.8,y:179.3}).wait(1).to({graphics:mask_1_graphics_316,x:289.8,y:180.2}).wait(1).to({graphics:mask_1_graphics_317,x:289.8,y:181.1}).wait(1).to({graphics:mask_1_graphics_318,x:289.8,y:182.1}).wait(1).to({graphics:mask_1_graphics_319,x:289.8,y:183}).wait(1).to({graphics:mask_1_graphics_320,x:289.8,y:183.9}).wait(1).to({graphics:mask_1_graphics_321,x:289.8,y:184.8}).wait(1).to({graphics:mask_1_graphics_322,x:289.8,y:185.7}).wait(1).to({graphics:mask_1_graphics_323,x:289.8,y:186.6}).wait(1).to({graphics:mask_1_graphics_324,x:289.8,y:187.5}).wait(1).to({graphics:mask_1_graphics_325,x:289.8,y:188.4}).wait(1).to({graphics:mask_1_graphics_326,x:289.8,y:189.3}).wait(1).to({graphics:mask_1_graphics_327,x:289.8,y:190.2}).wait(1).to({graphics:mask_1_graphics_328,x:289.8,y:191.1}).wait(1).to({graphics:mask_1_graphics_329,x:289.8,y:192.1}).wait(1).to({graphics:mask_1_graphics_330,x:289.8,y:193}).wait(1).to({graphics:mask_1_graphics_331,x:289.8,y:193.9}).wait(1).to({graphics:mask_1_graphics_332,x:289.8,y:194.8}).wait(1).to({graphics:mask_1_graphics_333,x:289.8,y:195.7}).wait(1).to({graphics:mask_1_graphics_334,x:289.8,y:196.6}).wait(1).to({graphics:mask_1_graphics_335,x:289.8,y:197.5}).wait(1).to({graphics:mask_1_graphics_336,x:289.8,y:198.4}).wait(1).to({graphics:mask_1_graphics_337,x:289.8,y:199.4}).wait(1).to({graphics:mask_1_graphics_338,x:289.8,y:200.3}).wait(1).to({graphics:mask_1_graphics_339,x:289.8,y:201.2}).wait(1).to({graphics:mask_1_graphics_340,x:289.8,y:202.1}).wait(1).to({graphics:mask_1_graphics_341,x:289.8,y:203}).wait(1).to({graphics:mask_1_graphics_342,x:289.8,y:203.9}).wait(1).to({graphics:mask_1_graphics_343,x:289.8,y:204.8}).wait(1).to({graphics:mask_1_graphics_344,x:289.8,y:205.7}).wait(1).to({graphics:mask_1_graphics_345,x:289.8,y:206.6}).wait(1).to({graphics:mask_1_graphics_346,x:289.8,y:207.6}).wait(1).to({graphics:mask_1_graphics_347,x:289.8,y:208.5}).wait(1).to({graphics:mask_1_graphics_348,x:289.8,y:209.4}).wait(1).to({graphics:mask_1_graphics_349,x:289.8,y:210.3}).wait(1).to({graphics:mask_1_graphics_350,x:289.8,y:211.2}).wait(1).to({graphics:mask_1_graphics_351,x:289.8,y:212.1}).wait(1).to({graphics:mask_1_graphics_352,x:289.8,y:213}).wait(1).to({graphics:mask_1_graphics_353,x:289.8,y:213.9}).wait(1).to({graphics:mask_1_graphics_354,x:289.8,y:214.9}).wait(1).to({graphics:mask_1_graphics_355,x:289.8,y:215.8}).wait(1).to({graphics:mask_1_graphics_356,x:289.8,y:216.7}).wait(1).to({graphics:mask_1_graphics_357,x:289.8,y:217.6}).wait(1).to({graphics:mask_1_graphics_358,x:289.8,y:218.5}).wait(1).to({graphics:mask_1_graphics_359,x:289.8,y:219.4}).wait(1).to({graphics:mask_1_graphics_360,x:289.8,y:220.3}).wait(1).to({graphics:mask_1_graphics_361,x:289.8,y:221.2}).wait(1).to({graphics:mask_1_graphics_362,x:289.8,y:222.1}).wait(1).to({graphics:mask_1_graphics_363,x:289.8,y:223}).wait(1).to({graphics:mask_1_graphics_364,x:289.8,y:223.9}).wait(1).to({graphics:mask_1_graphics_365,x:289.8,y:224.9}).wait(1).to({graphics:mask_1_graphics_366,x:289.8,y:225.8}).wait(1).to({graphics:mask_1_graphics_367,x:289.8,y:226.7}).wait(1).to({graphics:mask_1_graphics_368,x:289.8,y:227.6}).wait(1).to({graphics:mask_1_graphics_369,x:289.8,y:228.5}).wait(1).to({graphics:mask_1_graphics_370,x:289.8,y:229.4}).wait(1).to({graphics:mask_1_graphics_371,x:289.8,y:230.3}).wait(1).to({graphics:mask_1_graphics_372,x:158.8,y:193.2}).wait(158));

	// Layer 14
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(25,1,1).p("AKS7IMAAAAq0QACAkgJCSQgJCTjUDRQjTDSk8gQQk+gQjykD");
	this.shape_2.setTransform(352.9,274.7,1,0.984,0,0,180);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(218).to({_off:false},0).wait(312));

	// Layer 12
	this.instance_4 = new lib.Symbol1("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(481.6,-182.4,1,1,0,0,180);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).wait(521));

	// Base
	this.instance_5 = new lib.Symbol2("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(275,275);
	this.instance_5.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(530));

	// Background
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#F59E9E").ss(3,1,1).p("AMvQ5I5dAAMAAAghxIZdAAg");
	this.shape_3.setTransform(275,275,3.373,2.543);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_4.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(530));

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