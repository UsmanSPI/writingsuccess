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
	this.shape.graphics.f("#FFFFFF").s().p("AtAfvQglguAAg1QAAhBA0gvQA3gvBDAAQBOAAA0A/QCoDUEmAAQDkAACdiGQCsiVAAj4MAAAgrGQAAjKCcAAQBHABA3A0QA4AzAABHMgACArwQAAFakMD2QiHB5idA+QieA8i1ABQnCAAkRlRgAHZ+vQhDhFAAhhQAAheBDhGQBDhFBfgBQBeABBGBFQBHBDAABhQAABkhHBEQhGBDheAAQhfAAhDhFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87,-236.7,174.1,473.5);


(lib.j = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 17 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_119 = new cjs.Graphics().p("AoIeKQAAoBFqlrQFqlqIAAAQIBAAFqFqQFrFrAAIBg");
	var mask_graphics_120 = new cjs.Graphics().p("AoIdRQAQoAF1lgQF1lfIAAQQIAAQFfF0QFgF2gQIBg");
	var mask_graphics_121 = new cjs.Graphics().p("AoGcZQAfoAF/lUQGAlTH/AfQIAAfFUF/QFUGBgfH/g");
	var mask_graphics_122 = new cjs.Graphics().p("AoEbgQAvn+GKlJQGKlHH+AvQH/AvFHGJQFIGLgvH+g");
	var mask_graphics_123 = new cjs.Graphics().p("AoAaoQA/n9GTk8QGUk7H8A+QH9A/E8GTQE8GUg/H9g");
	var mask_graphics_124 = new cjs.Graphics().p("An7ZwQBOn7GdkwQGdkuH6BOQH7BOEvGcQEwGehOH7g");
	var mask_graphics_125 = new cjs.Graphics().p("An1Y4QBdn4GlkjQGokiH3BdQH5BeEiGlQEjGnheH4g");
	var mask_graphics_126 = new cjs.Graphics().p("AnuYAQBtn0GukXQGwkUH0BsQH1BtEVGuQEWGwhsH1g");
	var mask_graphics_127 = new cjs.Graphics().p("AnlXJQB8nxG2kJQG4kHHxB7QHxB8EIG3QEJG4h8Hxg");
	var mask_graphics_128 = new cjs.Graphics().p("AncWTQCLnuG+j7QHAj6HtCLQHuCLD6G+QD7HAiLHug");
	var mask_graphics_129 = new cjs.Graphics().p("AnRVcQCanpHFjtQHIjsHoCZQHpCbDtHGQDtHHiaHpg");
	var mask_graphics_130 = new cjs.Graphics().p("AnFUnQConkHNjgQHOjeHkCoQHkCpDfHNQDfHPipHkg");
	var mask_graphics_131 = new cjs.Graphics().p("Am4TxQC3neHTjSQHVjQHeC4QHfC3DRHUQDRHVi4Heg");
	var mask_graphics_132 = new cjs.Graphics().p("AmqS9QDGnZHZjDQHbjCHYDGQHZDGDCHaQDDHbjGHZg");
	var mask_graphics_133 = new cjs.Graphics().p("AmbSJQDUnTHfi0QHhizHSDUQHTDUCzHgQC0HhjUHSg");
	var mask_graphics_134 = new cjs.Graphics().p("AmLRWQDinMHlimQHmikHLDiQHMDjClHkQClHmjiHMg");
	var mask_graphics_135 = new cjs.Graphics().p("Al6QjQDxnEHpiXQHqiWHFDwQHFDxCWHpQCWHrjwHFg");
	var mask_graphics_136 = new cjs.Graphics().p("AlnPyQD+m9HtiIQHviHG9D+QG9D+CHHuQCIHvj+G+g");
	var mask_graphics_137 = new cjs.Graphics().p("AlUPBQEMm1Hxh5QHzh3G0ELQG2EMB4HyQB4HzkLG1g");
	var mask_graphics_138 = new cjs.Graphics().p("AlAORQEZmtH1hpQH2hoGtEYQGtEZBpH1QBoH3kYGtg");
	var mask_graphics_139 = new cjs.Graphics().p("AkqNiQElmkH4haQH5hYGkElQGlEmBZH4QBZH5klGkg");
	var mask_graphics_140 = new cjs.Graphics().p("AkUM0QExmbH8hKQH7hJGbEyQGbEyBKH7QBKH8kyGbg");
	var mask_graphics_141 = new cjs.Graphics().p("Aj9MHQE+mRH9g7QH+g6GRE/QGSE/A6H8QA7H+k/GSg");
	var mask_graphics_142 = new cjs.Graphics().p("AjkLcQFJmIH/gsQH/gpGHFKQGIFLArH+QArIAlLGHg");
	var mask_graphics_143 = new cjs.Graphics().p("AjMKxQFWl9IAgcQIAgbF9FXQF+FWAbIAQAbIAlWF9g");
	var mask_graphics_144 = new cjs.Graphics().p("AiyKHQFhlyIBgNQIBgKFyFhQFzFjAMIAQALIBliFyg");
	var mask_graphics_145 = new cjs.Graphics().p("AiXJfQFsloIBAEQIBAFFnFsQFoFugEIAQgEIBltFog");
	var mask_graphics_146 = new cjs.Graphics().p("Ah8I4QF3lcIAASQIBAVFcF4QFcF4gTIAQgUIBl4Fcg");
	var mask_graphics_147 = new cjs.Graphics().p("AhgISQGBlRIAAjQIAAkFQGCQFRGDgjH/QgjIAmDFQg");
	var mask_graphics_148 = new cjs.Graphics().p("AhDHuQGLlFH+AyQH/A0FEGMQFFGNgzH9QgyH/mNFFg");
	var mask_graphics_149 = new cjs.Graphics().p("AgmHKQGVk4H9BBQH8BEE4GWQE5GWhCH8QhCH9mXE4g");
	var mask_graphics_150 = new cjs.Graphics().p("AgIGpQGeksH7BRQH6BSEsGgQEsGfhSH6QhSH7mfEsg");
	var mask_graphics_151 = new cjs.Graphics().p("AAWGIQGokfH4BgQH3BjEfGoQEfGphhH2QhhH4moEfg");
	var mask_graphics_152 = new cjs.Graphics().p("AA1FpQGxkSH0BwQH1BxERGxQETGxhwH0QhxH1mxESg");
	var mask_graphics_153 = new cjs.Graphics().p("ABVFMQG5kFHxB/QHwCAEFG5QEFG6h/HwQiAHxm5EFg");
	var mask_graphics_154 = new cjs.Graphics().p("AB2EvQHBj3HsCOQHtCQD3HBQD3HBiPHsQiOHtnBD3g");
	var mask_graphics_155 = new cjs.Graphics().p("ACXEVQHIjpHoCdQHoCeDpHIQDqHJieHnQieHpnIDpg");
	var mask_graphics_156 = new cjs.Graphics().p("AC5D8QHPjbHjCrQHjCuDbHPQDbHPisHiQitHknPDbg");
	var mask_graphics_157 = new cjs.Graphics().p("ADbDkQHWjNHdC7QHdC8DNHVQDOHWi7HdQi8HenVDNg");
	var mask_graphics_158 = new cjs.Graphics().p("AD+DPQHbi/HYDJQHXDLC/HbQC/HcjKHXQjJHYncC+g");
	var mask_graphics_159 = new cjs.Graphics().p("AEhC6QHhiwHSDXQHQDZCwHhQCxHijYHQQjYHSnhCwg");
	var mask_graphics_160 = new cjs.Graphics().p("AFFCoQHmiiHLDmQHKDnChHmQChHnjlHJQjmHLnnChg");
	var mask_graphics_161 = new cjs.Graphics().p("AFpCXQHriTHDDzQHDD1CSHrQCTHsjzHCQj1HEnrCSg");
	var mask_graphics_162 = new cjs.Graphics().p("AGNCHQHwiDG7EBQG8ECCDHvQCDHwkBG7QkCG8nvCDg");
	var mask_graphics_163 = new cjs.Graphics().p("AGyB6QHzh1G0EPQGzEQB0HyQB0H0kOGzQkPGznzB1g");
	var mask_graphics_164 = new cjs.Graphics().p("AHXBuQH3hlGrEbQGrEdBkH2QBlH3kbGqQkdGsn2Blg");
	var mask_graphics_165 = new cjs.Graphics().p("AH9BjQH5hVGiEoQGiEqBVH5QBWH6koGhQkqGjn5BVg");
	var mask_graphics_166 = new cjs.Graphics().p("AIiBbQH8hGGZE1QGYE2BGH7QBHH8k1GZQk2GZn8BGg");
	var mask_graphics_167 = new cjs.Graphics().p("AJIBUQH+g3GPFBQGPFDA2H9QA3H/lBGOQlDGQn9A2g");
	var mask_graphics_168 = new cjs.Graphics().p("AJuBPQH/gnGFFNQGFFPAnH+QAnIAlNGEQlPGGn/Ang");
	var mask_graphics_169 = new cjs.Graphics().p("AKUBLQIAgXF7FZQF6FaAXIAQAYIAlZF6QlaF8oAAXg");
	var mask_graphics_170 = new cjs.Graphics().p("AK5BJQIBgHFwFkQFwFmAIIAQAHIBlkFvQllFxoBAIg");
	var mask_graphics_171 = new cjs.Graphics().p("EAK5An1MAAmgmsQIBAIFlFwQFkFxgHIAQgIIBlwFkQloFenzAAIgWAAg");
	var mask_graphics_172 = new cjs.Graphics().p("EAKUAnzMABxgmpQIAAYFaF6QFZF8gYH/QgXIBl6FZQljFEnYAAIhAgCg");
	var mask_graphics_173 = new cjs.Graphics().p("EAJuAnxMAC8gmkQH/AnFPGEQFNGGgnH/QgnH/mFFOQldErm+AAQg0AAg1gEg");
	var mask_graphics_174 = new cjs.Graphics().p("EAJIAntMAEIgmdQH9A2FDGPQFBGQg3H9Qg2H+mPFCQlWETmmAAQhHAAhKgIg");
	var mask_graphics_175 = new cjs.Graphics().p("EAIiAnoMAFTgmUQH8BGE2GZQE1GZhHH7QhGH9mYE1QlOD8mPAAQhaAAhegNg");
	var mask_graphics_176 = new cjs.Graphics().p("EAH9AnjMAGdgmJQH5BVEqGiQEoGjhVH5QhWH5miEpQlEDnl6AAQhsAAhxgTg");
	var mask_graphics_177 = new cjs.Graphics().p("EAHXAnbMAHogl7QH2BlEdGrQEbGrhlH2QhlH3mqEcQk7DSllAAQh+AAiEgbg");
	var mask_graphics_178 = new cjs.Graphics().p("EAGyAnTMAIyglrQHzB0EPGzQEOG0h0HzQh0H0mzEOQkxC+lQAAQiQAAiWgjg");
	var mask_graphics_179 = new cjs.Graphics().p("EAGNAnKMAJ7glZQHvCEECG6QEBG9iDHvQiEHvm6EBQkmCrk9AAQihAAiogsg");
	var mask_graphics_180 = new cjs.Graphics().p("EAFpAnAMALDglFQHrCTD1HCQDzHEiTHrQiSHrnCD0QkbCYkpAAQizAAi4g2g");
	var mask_graphics_181 = new cjs.Graphics().p("EAFFAm0MAMLgkuQHmCiDnHKQDlHLihHmQihHnnKDlQkOCIkXAAQjEAAjIhDg");
	var mask_graphics_182 = new cjs.Graphics().p("EAEhAmoMANTgkVQHhCwDYHRQDXHRivHhQixHinQDXQkBB4kFAAQjVAAjYhPg");
	var mask_graphics_183 = new cjs.Graphics().p("EAD+AmaMAOZgj6QHbC/DLHXQDIHYi+HbQi/HdnXDJQjyBoj0AAQjmAAjnhdg");
	var mask_graphics_184 = new cjs.Graphics().p("EADbAmLMAPfgjcQHVDNC8HdQC6HejNHVQjNHWndC7QjkBajiAAQj4AAj1hsg");
	var mask_graphics_185 = new cjs.Graphics().p("EAC5Al8MAQjgi9QHPDbCtHiQCsHkjbHPQjcHPniCsQjVBNjRAAQkJAAkDh7g");
	var mask_graphics_186 = new cjs.Graphics().p("EACXAlrMARngicQHIDqCfHnQCcHpjpHIQjpHInoCeQjFA/jAAAQkbAAkQiLg");
	var mask_graphics_187 = new cjs.Graphics().p("EAB1AlaMASqgh5QHBD3CQHsQCOHuj3HAQj4HBnrCPQi1A0ivAAQkuAAkdicg");
	var mask_graphics_188 = new cjs.Graphics().p("EABVAlHMATrghTQG6EFCAHwQB/HxkFG5QkFG6nwB/QijAqieAAQlBAAkoivg");
	var mask_graphics_189 = new cjs.Graphics().p("EAA1Ak0MAUsggsQGxESBxH0QBvH1kRGwQkTGynzBwQiSAhiMAAQlVAAkzjCg");
	var mask_graphics_190 = new cjs.Graphics().p("EAAVAkfMAVrggCQGpEfBiH3QBgH4kfGoQkfGpn3BhQiAAZh6AAQlpAAk+jXg");
	var mask_graphics_191 = new cjs.Graphics().p("EgAIAkKIWo/XQGfEsBTH6QBQH6krGfQktGgn5BSQhtAShoAAQl/AAlFjsg");
	var mask_graphics_192 = new cjs.Graphics().p("EgAmAj0IXk+rQGWE5BDH8QBCH9k5GWQk4GWn8BDQhZALhWAAQmVAAlOkBg");
	var mask_graphics_193 = new cjs.Graphics().p("EgBEAjcIYg97QGMFFA0H+QAxH/lEGMQlFGNn9AyQhGAHhDAAQmsAAlWkZg");
	var mask_graphics_194 = new cjs.Graphics().p("EgBgAjEIZZ9KQGCFQAkIAQAiIAlQGCQlRGCn/AkQgwADgwAAQnFAAlckxg");
	var mask_graphics_195 = new cjs.Graphics().p("EgB8AirIaR8YQF4FcAUIBQATIAlcF4QldF4oAAUIg2ABQnfAAlilKg");
	var mask_graphics_196 = new cjs.Graphics().p("EgCYAiRIbI7kQFtFoAFIAQADIBlnFtQloFuoAAEIgLAAQn7AAlolkg");
	var mask_graphics_197 = new cjs.Graphics().p("EAKwAn0QoBgLlhlzIb96uQFiFzgLIAQgNIBlyFiQlnFXnrAAIghgBg");
	var mask_graphics_198 = new cjs.Graphics().p("EAKKAnzQoAgclWl9Icw52QFXF9gbIAQgcIAl9FWQlhE+nRAAQglAAgmgCg");
	var mask_graphics_199 = new cjs.Graphics().p("EAJkAnwQn/grlKmHIdi4+QFLGHgqH/QgtH/mHFLQlbElm3AAQg5AAg7gFg");
	var mask_graphics_200 = new cjs.Graphics().p("EAI/AnsQn+g6k+mSIeS4DQE+GRg5H+Qg8H9mRE/QlUENmfAAQhNAAhOgJg");
	var mask_graphics_201 = new cjs.Graphics().p("EAIZAnnQn8hKkxmbIfA3HQEyGbhJH7QhMH7maEyQlMD3mJAAQhfAAhigOg");
	var mask_graphics_202 = new cjs.Graphics().p("EAH0AnhQn5hakmmkIfs2KQEmGkhZH5QhaH5mkElQlCDil0AAQhxAAh1gVg");
	var mask_graphics_203 = new cjs.Graphics().p("EAHOAnZQn1hokZmtMAgWgVMQEZGthoH2QhqH2msEYQk5DNlfAAQiDAAiIgdg");
	var mask_graphics_204 = new cjs.Graphics().p("EAGpAnRQnyh4kLm1MAg+gUMQEMG1h4HyQh5Hzm0ELQkvC5lLAAQiUAAiaglg");
	var mask_graphics_205 = new cjs.Graphics().p("EAGFAnHQnviHj+m9MAhlgTLQD+G9iGHvQiIHum9D+QkjCmk4AAQilAAirgvg");
	var mask_graphics_206 = new cjs.Graphics().p("EAFgAm9QnqiXjwnEMAiJgSJQDxHFiWHqQiXHqnEDwQkXCUklAAQi3AAi8g5g");
	var mask_graphics_207 = new cjs.Graphics().p("EAE8AmxQnliljinMMAisgRGQDiHMikHmQinHlnLDiQkKCDkTABQjIAAjMhGg");
	var mask_graphics_208 = new cjs.Graphics().p("EAEYAmkQnfi0jVnSMAjNgQCQDUHTizHgQi1HgnSDUQj9B0kBAAQjZAAjchTg");
	var mask_graphics_209 = new cjs.Graphics().p("EAD1AmWQnajCjGnZMAjrgO8QDGHZjCHaQjEHbnYDFQjvBkjvAAQjqAAjrhgg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(119).to({graphics:mask_graphics_119,x:195.4,y:193}).wait(1).to({graphics:mask_graphics_120,x:195.4,y:194.9}).wait(1).to({graphics:mask_graphics_121,x:195.4,y:196.7}).wait(1).to({graphics:mask_graphics_122,x:195.4,y:198.6}).wait(1).to({graphics:mask_graphics_123,x:195.5,y:200.5}).wait(1).to({graphics:mask_graphics_124,x:195.5,y:202.4}).wait(1).to({graphics:mask_graphics_125,x:195.5,y:204.2}).wait(1).to({graphics:mask_graphics_126,x:195.5,y:206.1}).wait(1).to({graphics:mask_graphics_127,x:195.5,y:207.9}).wait(1).to({graphics:mask_graphics_128,x:195.6,y:209.8}).wait(1).to({graphics:mask_graphics_129,x:195.6,y:211.6}).wait(1).to({graphics:mask_graphics_130,x:195.6,y:213.4}).wait(1).to({graphics:mask_graphics_131,x:195.6,y:215.1}).wait(1).to({graphics:mask_graphics_132,x:195.6,y:216.9}).wait(1).to({graphics:mask_graphics_133,x:195.6,y:218.6}).wait(1).to({graphics:mask_graphics_134,x:195.6,y:220.3}).wait(1).to({graphics:mask_graphics_135,x:195.6,y:222}).wait(1).to({graphics:mask_graphics_136,x:195.5,y:223.7}).wait(1).to({graphics:mask_graphics_137,x:195.5,y:225.3}).wait(1).to({graphics:mask_graphics_138,x:195.5,y:226.9}).wait(1).to({graphics:mask_graphics_139,x:195.5,y:228.4}).wait(1).to({graphics:mask_graphics_140,x:195.5,y:230}).wait(1).to({graphics:mask_graphics_141,x:195.4,y:231.5}).wait(1).to({graphics:mask_graphics_142,x:195.4,y:232.9}).wait(1).to({graphics:mask_graphics_143,x:195.4,y:234.3}).wait(1).to({graphics:mask_graphics_144,x:195.4,y:235.7}).wait(1).to({graphics:mask_graphics_145,x:195.4,y:237.1}).wait(1).to({graphics:mask_graphics_146,x:195.4,y:238.4}).wait(1).to({graphics:mask_graphics_147,x:195.4,y:239.6}).wait(1).to({graphics:mask_graphics_148,x:195.4,y:240.9}).wait(1).to({graphics:mask_graphics_149,x:195.5,y:242}).wait(1).to({graphics:mask_graphics_150,x:195.5,y:243.2}).wait(1).to({graphics:mask_graphics_151,x:195.5,y:244.2}).wait(1).to({graphics:mask_graphics_152,x:195.5,y:245.3}).wait(1).to({graphics:mask_graphics_153,x:195.5,y:246.3}).wait(1).to({graphics:mask_graphics_154,x:195.6,y:247.2}).wait(1).to({graphics:mask_graphics_155,x:195.6,y:248.1}).wait(1).to({graphics:mask_graphics_156,x:195.6,y:248.9}).wait(1).to({graphics:mask_graphics_157,x:195.6,y:249.7}).wait(1).to({graphics:mask_graphics_158,x:195.6,y:250.4}).wait(1).to({graphics:mask_graphics_159,x:195.6,y:251.1}).wait(1).to({graphics:mask_graphics_160,x:195.6,y:251.7}).wait(1).to({graphics:mask_graphics_161,x:195.5,y:252.3}).wait(1).to({graphics:mask_graphics_162,x:195.5,y:252.8}).wait(1).to({graphics:mask_graphics_163,x:195.5,y:253.3}).wait(1).to({graphics:mask_graphics_164,x:195.5,y:253.7}).wait(1).to({graphics:mask_graphics_165,x:195.5,y:254}).wait(1).to({graphics:mask_graphics_166,x:195.4,y:254.3}).wait(1).to({graphics:mask_graphics_167,x:195.4,y:254.5}).wait(1).to({graphics:mask_graphics_168,x:195.4,y:254.7}).wait(1).to({graphics:mask_graphics_169,x:195.4,y:254.8}).wait(1).to({graphics:mask_graphics_170,x:195.4,y:254.9}).wait(1).to({graphics:mask_graphics_171,x:195.4,y:254.9}).wait(1).to({graphics:mask_graphics_172,x:195.4,y:254.9}).wait(1).to({graphics:mask_graphics_173,x:195.4,y:254.9}).wait(1).to({graphics:mask_graphics_174,x:195.4,y:254.9}).wait(1).to({graphics:mask_graphics_175,x:195.4,y:254.9}).wait(1).to({graphics:mask_graphics_176,x:195.5,y:255}).wait(1).to({graphics:mask_graphics_177,x:195.5,y:255}).wait(1).to({graphics:mask_graphics_178,x:195.5,y:255}).wait(1).to({graphics:mask_graphics_179,x:195.5,y:255}).wait(1).to({graphics:mask_graphics_180,x:195.5,y:255}).wait(1).to({graphics:mask_graphics_181,x:195.6,y:255.1}).wait(1).to({graphics:mask_graphics_182,x:195.6,y:255.1}).wait(1).to({graphics:mask_graphics_183,x:195.6,y:255.1}).wait(1).to({graphics:mask_graphics_184,x:195.6,y:255.1}).wait(1).to({graphics:mask_graphics_185,x:195.6,y:255.1}).wait(1).to({graphics:mask_graphics_186,x:195.6,y:255}).wait(1).to({graphics:mask_graphics_187,x:195.5,y:255}).wait(1).to({graphics:mask_graphics_188,x:195.5,y:255}).wait(1).to({graphics:mask_graphics_189,x:195.5,y:255}).wait(1).to({graphics:mask_graphics_190,x:195.5,y:255}).wait(1).to({graphics:mask_graphics_191,x:195.5,y:255}).wait(1).to({graphics:mask_graphics_192,x:195.5,y:254.9}).wait(1).to({graphics:mask_graphics_193,x:195.4,y:254.9}).wait(1).to({graphics:mask_graphics_194,x:195.4,y:254.9}).wait(1).to({graphics:mask_graphics_195,x:195.4,y:254.9}).wait(1).to({graphics:mask_graphics_196,x:195.4,y:254.9}).wait(1).to({graphics:mask_graphics_197,x:195.4,y:254.9}).wait(1).to({graphics:mask_graphics_198,x:195.4,y:254.9}).wait(1).to({graphics:mask_graphics_199,x:195.4,y:254.9}).wait(1).to({graphics:mask_graphics_200,x:195.4,y:254.9}).wait(1).to({graphics:mask_graphics_201,x:195.5,y:254.9}).wait(1).to({graphics:mask_graphics_202,x:195.5,y:255}).wait(1).to({graphics:mask_graphics_203,x:195.5,y:255}).wait(1).to({graphics:mask_graphics_204,x:195.5,y:255}).wait(1).to({graphics:mask_graphics_205,x:195.5,y:255}).wait(1).to({graphics:mask_graphics_206,x:195.6,y:255}).wait(1).to({graphics:mask_graphics_207,x:195.6,y:255.1}).wait(1).to({graphics:mask_graphics_208,x:195.6,y:255.1}).wait(1).to({graphics:mask_graphics_209,x:195.6,y:255}).wait(1));

	// Layer 16
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(25,1,1).p("AKS6+MAAAAq0QACAkgCAiQgMD2jBC4QjbDSlEADQlFADjzkD");
	this.shape.setTransform(284.9,276.6);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(119).to({_off:false},0).wait(91));

	// Layer 15 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AU1HCIAAiMIIqAAIAACMg");
	var mask_1_graphics_1 = new cjs.Graphics().p("AkUBSIAAijIIpAAIAACjg");
	var mask_1_graphics_2 = new cjs.Graphics().p("AkUBfIAAi9IIpAAIAAC9g");
	var mask_1_graphics_3 = new cjs.Graphics().p("AkUBrIAAjVIIpAAIAADVg");
	var mask_1_graphics_4 = new cjs.Graphics().p("AkUB4IAAjvIIpAAIAADvg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AkUCEIAAkHIIpAAIAAEHg");
	var mask_1_graphics_6 = new cjs.Graphics().p("AkUCRIAAkhIIpAAIAAEhg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AkUCdIAAk5IIpAAIAAE5g");
	var mask_1_graphics_8 = new cjs.Graphics().p("AkUCqIAAlTIIpAAIAAFTg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AkUC2IAAlrIIpAAIAAFrg");
	var mask_1_graphics_10 = new cjs.Graphics().p("AkUDCIAAmDIIpAAIAAGDg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AkUDPIAAmdIIpAAIAAGdg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AkUDcIAAm2IIpAAIAAG2g");
	var mask_1_graphics_13 = new cjs.Graphics().p("AkUDoIAAnPIIpAAIAAHPg");
	var mask_1_graphics_14 = new cjs.Graphics().p("AkUD0IAAnnIIpAAIAAHng");
	var mask_1_graphics_15 = new cjs.Graphics().p("AkUEBIAAoBIIpAAIAAIBg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AkUENIAAoZIIpAAIAAIZg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AkUEaIAAozIIpAAIAAIzg");
	var mask_1_graphics_18 = new cjs.Graphics().p("AkUEmIAApLIIpAAIAAJLg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AkUEzIAAplIIpAAIAAJlg");
	var mask_1_graphics_20 = new cjs.Graphics().p("AkUE/IAAp9IIpAAIAAJ9g");
	var mask_1_graphics_21 = new cjs.Graphics().p("AkUFMIAAqWIIpAAIAAKWg");
	var mask_1_graphics_22 = new cjs.Graphics().p("AkUFYIAAqvIIpAAIAAKvg");
	var mask_1_graphics_23 = new cjs.Graphics().p("AkUFkIAArHIIpAAIAALHg");
	var mask_1_graphics_24 = new cjs.Graphics().p("AkUFxIAArhIIpAAIAALhg");
	var mask_1_graphics_25 = new cjs.Graphics().p("AkUF+IAAr6IIpAAIAAL6g");
	var mask_1_graphics_26 = new cjs.Graphics().p("AkUGKIAAsTIIpAAIAAMTg");
	var mask_1_graphics_27 = new cjs.Graphics().p("AkUGWIAAsrIIpAAIAAMrg");
	var mask_1_graphics_28 = new cjs.Graphics().p("AkUGjIAAtFIIpAAIAANFg");
	var mask_1_graphics_29 = new cjs.Graphics().p("AkUGvIAAtdIIpAAIAANdg");
	var mask_1_graphics_30 = new cjs.Graphics().p("AkUG8IAAt3IIpAAIAAN3g");
	var mask_1_graphics_31 = new cjs.Graphics().p("AkUHIIAAuPIIpAAIAAOPg");
	var mask_1_graphics_32 = new cjs.Graphics().p("AkUHVIAAupIIpAAIAAOpg");
	var mask_1_graphics_33 = new cjs.Graphics().p("AkUHhIAAvBIIpAAIAAPBg");
	var mask_1_graphics_34 = new cjs.Graphics().p("AkUHuIAAvaIIpAAIAAPag");
	var mask_1_graphics_35 = new cjs.Graphics().p("AkUH6IAAvzIIpAAIAAPzg");
	var mask_1_graphics_36 = new cjs.Graphics().p("AkUIGIAAwLIIpAAIAAQLg");
	var mask_1_graphics_37 = new cjs.Graphics().p("AkUITIAAwlIIpAAIAAQlg");
	var mask_1_graphics_38 = new cjs.Graphics().p("AkUIgIAAw+IIpAAIAAQ+g");
	var mask_1_graphics_39 = new cjs.Graphics().p("AkUIsIAAxXIIpAAIAARXg");
	var mask_1_graphics_40 = new cjs.Graphics().p("AkUI4IAAxvIIpAAIAARvg");
	var mask_1_graphics_41 = new cjs.Graphics().p("AkUJFIAAyJIIpAAIAASJg");
	var mask_1_graphics_42 = new cjs.Graphics().p("AkUJRIAAyhIIpAAIAAShg");
	var mask_1_graphics_43 = new cjs.Graphics().p("AkUJeIAAy7IIpAAIAAS7g");
	var mask_1_graphics_44 = new cjs.Graphics().p("AkUJqIAAzTIIpAAIAATTg");
	var mask_1_graphics_45 = new cjs.Graphics().p("AkUJ3IAAzsIIpAAIAATsg");
	var mask_1_graphics_46 = new cjs.Graphics().p("AkUKDIAA0FIIpAAIAAUFg");
	var mask_1_graphics_47 = new cjs.Graphics().p("AkUKQIAA0eIIpAAIAAUeg");
	var mask_1_graphics_48 = new cjs.Graphics().p("AkUKcIAA03IIpAAIAAU3g");
	var mask_1_graphics_49 = new cjs.Graphics().p("AkUKoIAA1PIIpAAIAAVPg");
	var mask_1_graphics_50 = new cjs.Graphics().p("AkUK1IAA1pIIpAAIAAVpg");
	var mask_1_graphics_51 = new cjs.Graphics().p("AkULBIAA2BIIpAAIAAWBg");
	var mask_1_graphics_52 = new cjs.Graphics().p("AkULOIAA2bIIpAAIAAWbg");
	var mask_1_graphics_53 = new cjs.Graphics().p("AkULaIAA2zIIpAAIAAWzg");
	var mask_1_graphics_54 = new cjs.Graphics().p("AkULnIAA3NIIpAAIAAXNg");
	var mask_1_graphics_55 = new cjs.Graphics().p("AkULzIAA3lIIpAAIAAXlg");
	var mask_1_graphics_56 = new cjs.Graphics().p("AkUMAIAA3/IIpAAIAAX/g");
	var mask_1_graphics_57 = new cjs.Graphics().p("AkUMMIAA4XIIpAAIAAYXg");
	var mask_1_graphics_58 = new cjs.Graphics().p("AkUMYIAA4vIIpAAIAAYvg");
	var mask_1_graphics_59 = new cjs.Graphics().p("AkUMlIAA5JIIpAAIAAZJg");
	var mask_1_graphics_60 = new cjs.Graphics().p("AkUMxIAA5hIIpAAIAAZhg");
	var mask_1_graphics_61 = new cjs.Graphics().p("AkUM+IAA57IIpAAIAAZ7g");
	var mask_1_graphics_62 = new cjs.Graphics().p("AkUNKIAA6TIIpAAIAAaTg");
	var mask_1_graphics_63 = new cjs.Graphics().p("AkUNWIAA6sIIpAAIAAasg");
	var mask_1_graphics_64 = new cjs.Graphics().p("AkUNjIAA7FIIpAAIAAbFg");
	var mask_1_graphics_65 = new cjs.Graphics().p("AkUNwIAA7fIIpAAIAAbfg");
	var mask_1_graphics_66 = new cjs.Graphics().p("AkUN8IAA73IIpAAIAAb3g");
	var mask_1_graphics_67 = new cjs.Graphics().p("AkUOIIAA8QIIpAAIAAcQg");
	var mask_1_graphics_68 = new cjs.Graphics().p("AkUOVIAA8pIIpAAIAAcpg");
	var mask_1_graphics_69 = new cjs.Graphics().p("AkUOhIAA9BIIpAAIAAdBg");
	var mask_1_graphics_70 = new cjs.Graphics().p("AkUOuIAA9bIIpAAIAAdbg");
	var mask_1_graphics_71 = new cjs.Graphics().p("AkUO6IAA9zIIpAAIAAdzg");
	var mask_1_graphics_72 = new cjs.Graphics().p("AkUPHIAA+NIIpAAIAAeNg");
	var mask_1_graphics_73 = new cjs.Graphics().p("AkUPTIAA+lIIpAAIAAelg");
	var mask_1_graphics_74 = new cjs.Graphics().p("AkUPgIAA+/IIpAAIAAe/g");
	var mask_1_graphics_75 = new cjs.Graphics().p("AkUPsIAA/XIIpAAIAAfXg");
	var mask_1_graphics_76 = new cjs.Graphics().p("AkUP4IAA/wIIpAAIAAfwg");
	var mask_1_graphics_77 = new cjs.Graphics().p("AkUQFMAAAggJIIpAAMAAAAgJg");
	var mask_1_graphics_78 = new cjs.Graphics().p("AkUQSMAAAggjIIpAAMAAAAgjg");
	var mask_1_graphics_79 = new cjs.Graphics().p("AkUQeMAAAgg7IIpAAMAAAAg7g");
	var mask_1_graphics_80 = new cjs.Graphics().p("AkUQqMAAAghUIIpAAMAAAAhUg");
	var mask_1_graphics_81 = new cjs.Graphics().p("AkUQ3MAAAghtIIpAAMAAAAhtg");
	var mask_1_graphics_82 = new cjs.Graphics().p("AkURDMAAAgiFIIpAAMAAAAiFg");
	var mask_1_graphics_83 = new cjs.Graphics().p("AkURQMAAAgifIIpAAMAAAAifg");
	var mask_1_graphics_84 = new cjs.Graphics().p("AkURcMAAAgi3IIpAAMAAAAi3g");
	var mask_1_graphics_85 = new cjs.Graphics().p("AkURpMAAAgjRIIpAAMAAAAjRg");
	var mask_1_graphics_86 = new cjs.Graphics().p("AkUR1MAAAgjpIIpAAMAAAAjpg");
	var mask_1_graphics_87 = new cjs.Graphics().p("AkUSCMAAAgkDIIpAAMAAAAkDg");
	var mask_1_graphics_88 = new cjs.Graphics().p("AkUSOMAAAgkbIIpAAMAAAAkbg");
	var mask_1_graphics_89 = new cjs.Graphics().p("AkUSaMAAAgk0IIpAAMAAAAk0g");
	var mask_1_graphics_90 = new cjs.Graphics().p("AkUSnMAAAglNIIpAAMAAAAlNg");
	var mask_1_graphics_91 = new cjs.Graphics().p("AkUS0MAAAglnIIpAAMAAAAlng");
	var mask_1_graphics_92 = new cjs.Graphics().p("AkUTAMAAAgl/IIpAAMAAAAl/g");
	var mask_1_graphics_93 = new cjs.Graphics().p("AkUTMMAAAgmXIIpAAMAAAAmXg");
	var mask_1_graphics_94 = new cjs.Graphics().p("AkUTZMAAAgmxIIpAAMAAAAmxg");
	var mask_1_graphics_95 = new cjs.Graphics().p("AkUTlMAAAgnJIIpAAMAAAAnJg");
	var mask_1_graphics_96 = new cjs.Graphics().p("AkUTyMAAAgnjIIpAAMAAAAnjg");
	var mask_1_graphics_97 = new cjs.Graphics().p("AkUT+MAAAgn7IIpAAMAAAAn7g");
	var mask_1_graphics_98 = new cjs.Graphics().p("AkUULMAAAgoVIIpAAMAAAAoVg");
	var mask_1_graphics_99 = new cjs.Graphics().p("AkUUXMAAAgotIIpAAMAAAAotg");
	var mask_1_graphics_100 = new cjs.Graphics().p("AkUUkMAAAgpHIIpAAMAAAApHg");
	var mask_1_graphics_101 = new cjs.Graphics().p("AkUUwMAAAgpfIIpAAMAAAApfg");
	var mask_1_graphics_102 = new cjs.Graphics().p("AkUU8MAAAgp4IIpAAMAAAAp4g");
	var mask_1_graphics_103 = new cjs.Graphics().p("AkUVJMAAAgqRIIpAAMAAAAqRg");
	var mask_1_graphics_104 = new cjs.Graphics().p("AkUVWMAAAgqrIIpAAMAAAAqrg");
	var mask_1_graphics_105 = new cjs.Graphics().p("AkUViMAAAgrDIIpAAMAAAArDg");
	var mask_1_graphics_106 = new cjs.Graphics().p("AkUVuMAAAgrbIIpAAMAAAArbg");
	var mask_1_graphics_107 = new cjs.Graphics().p("AkUV7MAAAgr1IIpAAMAAAAr1g");
	var mask_1_graphics_108 = new cjs.Graphics().p("AkUWHMAAAgsNIIpAAMAAAAsNg");
	var mask_1_graphics_109 = new cjs.Graphics().p("AkUWUMAAAgsnIIpAAMAAAAsng");
	var mask_1_graphics_110 = new cjs.Graphics().p("AkUWgMAAAgs/IIpAAMAAAAs/g");
	var mask_1_graphics_111 = new cjs.Graphics().p("AkUWsMAAAgtYIIpAAMAAAAtYg");
	var mask_1_graphics_112 = new cjs.Graphics().p("AkUW5MAAAgtxIIpAAMAAAAtxg");
	var mask_1_graphics_113 = new cjs.Graphics().p("AkUXGMAAAguLIIpAAMAAAAuLg");
	var mask_1_graphics_114 = new cjs.Graphics().p("AkUXSMAAAgujIIpAAMAAAAujg");
	var mask_1_graphics_115 = new cjs.Graphics().p("AkUXeMAAAgu8IIpAAMAAAAu8g");
	var mask_1_graphics_116 = new cjs.Graphics().p("AkUXrMAAAgvVIIpAAMAAAAvVg");
	var mask_1_graphics_117 = new cjs.Graphics().p("AkUX3MAAAgvtIIpAAMAAAAvtg");
	var mask_1_graphics_118 = new cjs.Graphics().p("AkUYEMAAAgwHIIpAAMAAAAwHg");
	var mask_1_graphics_119 = new cjs.Graphics().p("AU1eMMAAAgwfIIqAAMAAAAwfg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:188.8,y:45}).wait(1).to({graphics:mask_1_graphics_1,x:349.8,y:84.2}).wait(1).to({graphics:mask_1_graphics_2,x:349.8,y:85.5}).wait(1).to({graphics:mask_1_graphics_3,x:349.8,y:86.7}).wait(1).to({graphics:mask_1_graphics_4,x:349.8,y:87.9}).wait(1).to({graphics:mask_1_graphics_5,x:349.8,y:89.2}).wait(1).to({graphics:mask_1_graphics_6,x:349.8,y:90.4}).wait(1).to({graphics:mask_1_graphics_7,x:349.8,y:91.7}).wait(1).to({graphics:mask_1_graphics_8,x:349.8,y:92.9}).wait(1).to({graphics:mask_1_graphics_9,x:349.8,y:94.2}).wait(1).to({graphics:mask_1_graphics_10,x:349.8,y:95.4}).wait(1).to({graphics:mask_1_graphics_11,x:349.8,y:96.7}).wait(1).to({graphics:mask_1_graphics_12,x:349.8,y:97.9}).wait(1).to({graphics:mask_1_graphics_13,x:349.8,y:99.2}).wait(1).to({graphics:mask_1_graphics_14,x:349.8,y:100.4}).wait(1).to({graphics:mask_1_graphics_15,x:349.8,y:101.6}).wait(1).to({graphics:mask_1_graphics_16,x:349.8,y:102.9}).wait(1).to({graphics:mask_1_graphics_17,x:349.8,y:104.1}).wait(1).to({graphics:mask_1_graphics_18,x:349.8,y:105.4}).wait(1).to({graphics:mask_1_graphics_19,x:349.8,y:106.6}).wait(1).to({graphics:mask_1_graphics_20,x:349.8,y:107.9}).wait(1).to({graphics:mask_1_graphics_21,x:349.8,y:109.1}).wait(1).to({graphics:mask_1_graphics_22,x:349.8,y:110.4}).wait(1).to({graphics:mask_1_graphics_23,x:349.8,y:111.6}).wait(1).to({graphics:mask_1_graphics_24,x:349.8,y:112.9}).wait(1).to({graphics:mask_1_graphics_25,x:349.8,y:114.1}).wait(1).to({graphics:mask_1_graphics_26,x:349.8,y:115.4}).wait(1).to({graphics:mask_1_graphics_27,x:349.8,y:116.6}).wait(1).to({graphics:mask_1_graphics_28,x:349.8,y:117.8}).wait(1).to({graphics:mask_1_graphics_29,x:349.8,y:119.1}).wait(1).to({graphics:mask_1_graphics_30,x:349.8,y:120.3}).wait(1).to({graphics:mask_1_graphics_31,x:349.8,y:121.6}).wait(1).to({graphics:mask_1_graphics_32,x:349.8,y:122.8}).wait(1).to({graphics:mask_1_graphics_33,x:349.8,y:124.1}).wait(1).to({graphics:mask_1_graphics_34,x:349.8,y:125.3}).wait(1).to({graphics:mask_1_graphics_35,x:349.8,y:126.6}).wait(1).to({graphics:mask_1_graphics_36,x:349.8,y:127.8}).wait(1).to({graphics:mask_1_graphics_37,x:349.8,y:129.1}).wait(1).to({graphics:mask_1_graphics_38,x:349.8,y:130.3}).wait(1).to({graphics:mask_1_graphics_39,x:349.8,y:131.5}).wait(1).to({graphics:mask_1_graphics_40,x:349.8,y:132.8}).wait(1).to({graphics:mask_1_graphics_41,x:349.8,y:134}).wait(1).to({graphics:mask_1_graphics_42,x:349.8,y:135.3}).wait(1).to({graphics:mask_1_graphics_43,x:349.8,y:136.5}).wait(1).to({graphics:mask_1_graphics_44,x:349.8,y:137.8}).wait(1).to({graphics:mask_1_graphics_45,x:349.8,y:139}).wait(1).to({graphics:mask_1_graphics_46,x:349.8,y:140.3}).wait(1).to({graphics:mask_1_graphics_47,x:349.8,y:141.5}).wait(1).to({graphics:mask_1_graphics_48,x:349.8,y:142.8}).wait(1).to({graphics:mask_1_graphics_49,x:349.8,y:144}).wait(1).to({graphics:mask_1_graphics_50,x:349.8,y:145.3}).wait(1).to({graphics:mask_1_graphics_51,x:349.8,y:146.5}).wait(1).to({graphics:mask_1_graphics_52,x:349.8,y:147.7}).wait(1).to({graphics:mask_1_graphics_53,x:349.8,y:149}).wait(1).to({graphics:mask_1_graphics_54,x:349.8,y:150.2}).wait(1).to({graphics:mask_1_graphics_55,x:349.8,y:151.5}).wait(1).to({graphics:mask_1_graphics_56,x:349.8,y:152.7}).wait(1).to({graphics:mask_1_graphics_57,x:349.8,y:154}).wait(1).to({graphics:mask_1_graphics_58,x:349.8,y:155.2}).wait(1).to({graphics:mask_1_graphics_59,x:349.8,y:156.5}).wait(1).to({graphics:mask_1_graphics_60,x:349.8,y:157.7}).wait(1).to({graphics:mask_1_graphics_61,x:349.8,y:159}).wait(1).to({graphics:mask_1_graphics_62,x:349.8,y:160.2}).wait(1).to({graphics:mask_1_graphics_63,x:349.8,y:161.5}).wait(1).to({graphics:mask_1_graphics_64,x:349.8,y:162.7}).wait(1).to({graphics:mask_1_graphics_65,x:349.8,y:164}).wait(1).to({graphics:mask_1_graphics_66,x:349.8,y:165.2}).wait(1).to({graphics:mask_1_graphics_67,x:349.8,y:166.5}).wait(1).to({graphics:mask_1_graphics_68,x:349.8,y:167.7}).wait(1).to({graphics:mask_1_graphics_69,x:349.8,y:168.9}).wait(1).to({graphics:mask_1_graphics_70,x:349.8,y:170.2}).wait(1).to({graphics:mask_1_graphics_71,x:349.8,y:171.4}).wait(1).to({graphics:mask_1_graphics_72,x:349.8,y:172.7}).wait(1).to({graphics:mask_1_graphics_73,x:349.8,y:173.9}).wait(1).to({graphics:mask_1_graphics_74,x:349.8,y:175.2}).wait(1).to({graphics:mask_1_graphics_75,x:349.8,y:176.4}).wait(1).to({graphics:mask_1_graphics_76,x:349.8,y:177.7}).wait(1).to({graphics:mask_1_graphics_77,x:349.8,y:178.9}).wait(1).to({graphics:mask_1_graphics_78,x:349.8,y:180.2}).wait(1).to({graphics:mask_1_graphics_79,x:349.8,y:181.4}).wait(1).to({graphics:mask_1_graphics_80,x:349.8,y:182.7}).wait(1).to({graphics:mask_1_graphics_81,x:349.8,y:183.9}).wait(1).to({graphics:mask_1_graphics_82,x:349.8,y:185.1}).wait(1).to({graphics:mask_1_graphics_83,x:349.8,y:186.4}).wait(1).to({graphics:mask_1_graphics_84,x:349.8,y:187.6}).wait(1).to({graphics:mask_1_graphics_85,x:349.8,y:188.9}).wait(1).to({graphics:mask_1_graphics_86,x:349.8,y:190.1}).wait(1).to({graphics:mask_1_graphics_87,x:349.8,y:191.4}).wait(1).to({graphics:mask_1_graphics_88,x:349.8,y:192.6}).wait(1).to({graphics:mask_1_graphics_89,x:349.8,y:193.9}).wait(1).to({graphics:mask_1_graphics_90,x:349.8,y:195.1}).wait(1).to({graphics:mask_1_graphics_91,x:349.8,y:196.4}).wait(1).to({graphics:mask_1_graphics_92,x:349.8,y:197.6}).wait(1).to({graphics:mask_1_graphics_93,x:349.8,y:198.8}).wait(1).to({graphics:mask_1_graphics_94,x:349.8,y:200.1}).wait(1).to({graphics:mask_1_graphics_95,x:349.8,y:201.3}).wait(1).to({graphics:mask_1_graphics_96,x:349.8,y:202.6}).wait(1).to({graphics:mask_1_graphics_97,x:349.8,y:203.8}).wait(1).to({graphics:mask_1_graphics_98,x:349.8,y:205.1}).wait(1).to({graphics:mask_1_graphics_99,x:349.8,y:206.3}).wait(1).to({graphics:mask_1_graphics_100,x:349.8,y:207.6}).wait(1).to({graphics:mask_1_graphics_101,x:349.8,y:208.8}).wait(1).to({graphics:mask_1_graphics_102,x:349.8,y:210.1}).wait(1).to({graphics:mask_1_graphics_103,x:349.8,y:211.3}).wait(1).to({graphics:mask_1_graphics_104,x:349.8,y:212.6}).wait(1).to({graphics:mask_1_graphics_105,x:349.8,y:213.8}).wait(1).to({graphics:mask_1_graphics_106,x:349.8,y:215}).wait(1).to({graphics:mask_1_graphics_107,x:349.8,y:216.3}).wait(1).to({graphics:mask_1_graphics_108,x:349.8,y:217.5}).wait(1).to({graphics:mask_1_graphics_109,x:349.8,y:218.8}).wait(1).to({graphics:mask_1_graphics_110,x:349.8,y:220}).wait(1).to({graphics:mask_1_graphics_111,x:349.8,y:221.3}).wait(1).to({graphics:mask_1_graphics_112,x:349.8,y:222.5}).wait(1).to({graphics:mask_1_graphics_113,x:349.8,y:223.8}).wait(1).to({graphics:mask_1_graphics_114,x:349.8,y:225}).wait(1).to({graphics:mask_1_graphics_115,x:349.8,y:226.3}).wait(1).to({graphics:mask_1_graphics_116,x:349.8,y:227.5}).wait(1).to({graphics:mask_1_graphics_117,x:349.8,y:228.7}).wait(1).to({graphics:mask_1_graphics_118,x:349.8,y:230}).wait(1).to({graphics:mask_1_graphics_119,x:188.8,y:193.2}).wait(91));

	// Layer 14
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(25,1,1).p("AKS6+MAAAAq0QACAkgCAiQgMD2jBC4QjbDSlEADQlFADjzkD");
	this.shape_1.setTransform(284.9,276.6);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(210));

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


(lib.j_ar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(350.7,103.9,1,1,0,0,0,0.4,-17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:135,guide:{path:[350.6,104,350.6,241,350.6,378,350.8,381.6,350.6,385,349.5,409.6,330.2,428,308.2,449,275.7,449.3,243.2,449.6,223.5,428.1], orient:'auto'}},164).wait(1));

	// Layer 17 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_104 = new cjs.Graphics().p("AoIe9QAAoAFqlrQFqlqIAAAQIBAAFqFqQFrFrAAIAg");
	var mask_graphics_105 = new cjs.Graphics().p("AoId4QAUoAF3leQF4lcH/AUQIBATFcF3QFdF4gTIAg");
	var mask_graphics_106 = new cjs.Graphics().p("AoFcyQAmn/GElOQGFlOH+AmQIAAmFOGEQFPGFgnIAg");
	var mask_graphics_107 = new cjs.Graphics().p("AoBbtQA5n9GRlAQGQk/H9A5QH+A6E/GQQFAGRg5H+g");
	var mask_graphics_108 = new cjs.Graphics().p("An7aoQBMn6GckxQGdkwH6BMQH7BNEwGcQExGdhNH7g");
	var mask_graphics_109 = new cjs.Graphics().p("An0ZkQBgn3GmkiQGokgH3BfQH4BgEgGnQEiGohgH3g");
	var mask_graphics_110 = new cjs.Graphics().p("AnqYgQBynzGwkSQGzkQHzByQH0ByERGyQERGyhyH0g");
	var mask_graphics_111 = new cjs.Graphics().p("AnfXdQCEnvG7kBQG9j/HuCEQHvCFEAG7QEBG9iFHug");
	var mask_graphics_112 = new cjs.Graphics().p("AnTWaQCXnqHEjwQHGjuHpCXQHqCXDvHEQDwHGiXHqg");
	var mask_graphics_113 = new cjs.Graphics().p("AnEVYQCpnjHNjfQHOjeHjCpQHkCqDeHNQDfHOiqHkg");
	var mask_graphics_114 = new cjs.Graphics().p("Am0UXQC7ndHVjNQHWjMHcC7QHeC7DMHVQDOHXi8Hcg");
	var mask_graphics_115 = new cjs.Graphics().p("AmiTXQDNnWHbi7QHei7HVDNQHWDNC7HdQC8HdjNHWg");
	var mask_graphics_116 = new cjs.Graphics().p("AmPSYQDfnOHiipQHkipHNDeQHODfCpHjQCqHkjfHOg");
	var mask_graphics_117 = new cjs.Graphics().p("Al6RaQDwnFHoiYQHqiWHFDwQHFDvCXHpQCXHrjvHEg");
	var mask_graphics_118 = new cjs.Graphics().p("AljQdQEAm7HuiGQHviDG8EAQG8EACEHuQCFHwkBG8g");
	var mask_graphics_119 = new cjs.Graphics().p("AlLPiQERmyHyhyQH0hxGxEQQGyERByHzQByH0kQGxg");
	var mask_graphics_120 = new cjs.Graphics().p("AkxOoQEgmnH3hgQH4heGmEgQGoEhBfH3QBfH4kgGng");
	var mask_graphics_121 = new cjs.Graphics().p("AkWNvQEvmcH7hNQH7hLGbEwQGdEwBMH6QBMH8kwGcg");
	var mask_graphics_122 = new cjs.Graphics().p("Aj6M4QE/mQH9g6QH9g4GQE/QGRFAA5H8QA6H+lAGQg");
	var mask_graphics_123 = new cjs.Graphics().p("AjcMDQFNmEH/gnQIAglGDFOQGFFOAmH+QAmIAlOGEg");
	var mask_graphics_124 = new cjs.Graphics().p("Ai9LPQFcl3IAgUQIAgSF3FcQF4FdATH/QATIBldF3g");
	var mask_graphics_125 = new cjs.Graphics().p("AicKdQFplqIAAAQIBABFpFqQFrFqgBIAQAAIBlqFqg");
	var mask_graphics_126 = new cjs.Graphics().p("Ah7JtQF2lcIAATQIAAUFcF3QFdF4gUH/QgTIBl3Fcg");
	var mask_graphics_127 = new cjs.Graphics().p("AhZI/QGDlOH/AmQH/AnFOGEQFOGFgmH+QgnH/mEFOg");
	var mask_graphics_128 = new cjs.Graphics().p("Ag1ITQGPk/H9A4QH9A7E/GQQFAGRg6H8Qg5H+mRE/g");
	var mask_graphics_129 = new cjs.Graphics().p("AgRHpQGbkwH7BLQH6BOEwGcQEwGchMH6QhNH7mcEwg");
	var mask_graphics_130 = new cjs.Graphics().p("AAUHAQGnkgH3BfQH3BgEgGnQEhGohfH2QhgH4mnEgg");
	var mask_graphics_131 = new cjs.Graphics().p("AA6GbQGykRHzByQH0BzEPGxQERGyhyHzQhyH0myEQg");
	var mask_graphics_132 = new cjs.Graphics().p("ABiF3QG7kAHvCEQHvCGD/G7QEAG8iEHuQiFHvm8EAg");
	var mask_graphics_133 = new cjs.Graphics().p("ACKFVQHFjvHpCXQHpCYDvHEQDwHFiXHpQiYHqnEDvg");
	var mask_graphics_134 = new cjs.Graphics().p("ACzE2QHOjeHjCpQHjCqDeHNQDeHOipHjQiqHjnNDeg");
	var mask_graphics_135 = new cjs.Graphics().p("ADdEZQHVjMHdC7QHdC8DMHVQDNHVi7HcQi8HenVDMg");
	var mask_graphics_136 = new cjs.Graphics().p("AEZD1QHfi0HTDUQHSDVCzHeQC0HgjUHSQjUHSnfC0g");
	var mask_graphics_137 = new cjs.Graphics().p("AFWDVQHoiaHHDrQHGDtCaHoQCbHojsHGQjsHHnoCbg");
	var mask_graphics_138 = new cjs.Graphics().p("AGUC6QHwiAG6ECQG5EFCBHvQCAHwkDG5QkDG6nwCBg");
	var mask_graphics_139 = new cjs.Graphics().p("AHUCkQH1hmGsEZQGrEbBnH2QBmH2kZGqQkbGsn1Bng");
	var mask_graphics_140 = new cjs.Graphics().p("AIUCTQH6hMGcEwQGcExBMH5QBNH7kwGcQkwGcn7BNg");
	var mask_graphics_141 = new cjs.Graphics().p("AJUCHQH+gxGMFEQGLFGAyH+QAyH+lFGLQlGGMn9Ayg");
	var mask_graphics_142 = new cjs.Graphics().p("AKVCAQH/gXF7FZQF6FbAXH/QAXIAlZF5QlaF7oAAXg");
	var mask_graphics_143 = new cjs.Graphics().p("EALEAooMAARgmqQIAAEFpFsQFnFugEIAQgEIAlsFnQlqFln5AAIgKAAg");
	var mask_graphics_144 = new cjs.Graphics().p("EAKDAolMACTgmlQH/AfFVF+QFTGAgeH/QgfIAl+FTQlgE5nMAAQgpAAgqgDg");
	var mask_graphics_145 = new cjs.Graphics().p("EAJCAogMAEUgmbQH9A5FAGQQE/GSg5H8Qg5H9mQFAQlUEPmiAAQhLAAhNgIg");
	var mask_graphics_146 = new cjs.Graphics().p("EAICAoWMAGTgmIQH6BTErGgQEpGihTH5QhUH5mgEqQlGDql8AAQhqAAhugTg");
	var mask_graphics_147 = new cjs.Graphics().p("EAHCAoKMAISglwQH1BtEUGwQEUGwhuH0QhuH0mvEUQk1DGlYAAQiJAAiOgfg");
	var mask_graphics_148 = new cjs.Graphics().p("EAGDAn6MAKQglRQHuCHD9G+QD9G+iIHtQiIHum9D9QkiClk3AAQimAAisgvg");
	var mask_graphics_149 = new cjs.Graphics().p("EAFFAnnMAMLgksQHnCiDmHJQDlHLiiHmQihHmnKDlQkNCIkXAAQjEAAjIhDg");
	var mask_graphics_150 = new cjs.Graphics().p("EAEIAnRMAOFgkAQHdC7DOHVQDNHWi7HcQi7HenUDNQj3Bsj4AAQjiAAjihZg");
	var mask_graphics_151 = new cjs.Graphics().p("EADMAm4MAP9gjOQHSDTC1HgQC0HgjTHSQjTHTnfC0QjeBUjaAAQkAAAj7hyg");
	var mask_graphics_152 = new cjs.Graphics().p("EACSAmcMARxgiWQHHDsCcHoQCaHpjrHGQjsHInnCbQjDA9i9AAQkeAAkSiNg");
	var mask_graphics_153 = new cjs.Graphics().p("EABZAl9MATjghXQG6ECCCHwQCBHwkDG6QkDG7nvCBQimArigAAQk+AAknisg");
	var mask_graphics_154 = new cjs.Graphics().p("EAAjAlbMAVQggTQGsEaBoH1QBnH3kaGrQkaGtn1BnQiHAciCAAQlgAAk5jOg");
	var mask_graphics_155 = new cjs.Graphics().p("EgARAk2IW5/JQGdEwBOH6QBMH8kvGcQkwGdn6BNQhnAPhjAAQmFABlIjzg");
	var mask_graphics_156 = new cjs.Graphics().p("EgBEAkPIYg96QGMFFAzH+QAyH+lFGMQlFGNn9AyQhFAHhDAAQmsAAlWkZg");
	var mask_graphics_157 = new cjs.Graphics().p("EgB1AjlIaC8lQF7FZAYIAQAXIAlZF6QlZF8n/AXQghACghAAQnXAAlilDg");
	var mask_graphics_158 = new cjs.Graphics().p("EALFAooQoBgDlnltIbf7LQFoFsgCIAQgEIBlsFoQlqFmn7AAIgIAAg");
	var mask_graphics_159 = new cjs.Graphics().p("EAKEAomQoAgelUl/Ic45uQFVF/gdIAQgfIAl/FUQlgE6nNAAQgoAAgpgCg");
	var mask_graphics_160 = new cjs.Graphics().p("EAJEAogQn/g5k/mQIeL4LQFBGQg4H+Qg6H+mPFAQlVEQmjAAQhJAAhMgIg");
	var mask_graphics_161 = new cjs.Graphics().p("EAIDAoXQn6hTkqmhIfZ2jQErGghSH6QhUH6mgEqQlGDrl9AAQhpAAhugSg");
	var mask_graphics_162 = new cjs.Graphics().p("EAHDAoKQn0htkVmvMAgigU5QEVGvhtH1QhuH1mvEUQk2DHlZAAQiHAAiOgfg");
	var mask_graphics_163 = new cjs.Graphics().p("EAGEAn7QnuiIj+m9MAhlgTKQD+G9iGHuQiJHvm9D+QkiClk4AAQimAAirgug");
	var mask_graphics_164 = new cjs.Graphics().p("EAFGAnoQnmihjnnKMAijgRZQDmHKigHnQiiHnnKDmQkOCIkXAAQjDAAjIhCg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(104).to({graphics:mask_graphics_104,x:195.4,y:198.1}).wait(1).to({graphics:mask_graphics_105,x:195.4,y:200.4}).wait(1).to({graphics:mask_graphics_106,x:195.4,y:202.8}).wait(1).to({graphics:mask_graphics_107,x:195.4,y:205.1}).wait(1).to({graphics:mask_graphics_108,x:195.5,y:207.4}).wait(1).to({graphics:mask_graphics_109,x:195.5,y:209.6}).wait(1).to({graphics:mask_graphics_110,x:195.5,y:211.9}).wait(1).to({graphics:mask_graphics_111,x:195.5,y:214.1}).wait(1).to({graphics:mask_graphics_112,x:195.6,y:216.4}).wait(1).to({graphics:mask_graphics_113,x:195.6,y:218.6}).wait(1).to({graphics:mask_graphics_114,x:195.6,y:220.7}).wait(1).to({graphics:mask_graphics_115,x:195.6,y:222.9}).wait(1).to({graphics:mask_graphics_116,x:195.6,y:225}).wait(1).to({graphics:mask_graphics_117,x:195.5,y:227}).wait(1).to({graphics:mask_graphics_118,x:195.5,y:229.1}).wait(1).to({graphics:mask_graphics_119,x:195.5,y:231}).wait(1).to({graphics:mask_graphics_120,x:195.5,y:233}).wait(1).to({graphics:mask_graphics_121,x:195.4,y:234.9}).wait(1).to({graphics:mask_graphics_122,x:195.4,y:236.7}).wait(1).to({graphics:mask_graphics_123,x:195.4,y:238.5}).wait(1).to({graphics:mask_graphics_124,x:195.4,y:240.2}).wait(1).to({graphics:mask_graphics_125,x:195.3,y:241.9}).wait(1).to({graphics:mask_graphics_126,x:195.3,y:243.5}).wait(1).to({graphics:mask_graphics_127,x:195.4,y:245}).wait(1).to({graphics:mask_graphics_128,x:195.4,y:246.5}).wait(1).to({graphics:mask_graphics_129,x:195.4,y:247.9}).wait(1).to({graphics:mask_graphics_130,x:195.4,y:249.2}).wait(1).to({graphics:mask_graphics_131,x:195.5,y:250.5}).wait(1).to({graphics:mask_graphics_132,x:195.5,y:251.7}).wait(1).to({graphics:mask_graphics_133,x:195.5,y:252.8}).wait(1).to({graphics:mask_graphics_134,x:195.5,y:253.8}).wait(1).to({graphics:mask_graphics_135,x:195.5,y:254.8}).wait(1).to({graphics:mask_graphics_136,x:195.5,y:256}).wait(1).to({graphics:mask_graphics_137,x:195.5,y:257.1}).wait(1).to({graphics:mask_graphics_138,x:195.4,y:258}).wait(1).to({graphics:mask_graphics_139,x:195.4,y:258.7}).wait(1).to({graphics:mask_graphics_140,x:195.4,y:259.3}).wait(1).to({graphics:mask_graphics_141,x:195.3,y:259.7}).wait(1).to({graphics:mask_graphics_142,x:195.3,y:259.9}).wait(1).to({graphics:mask_graphics_143,x:195.3,y:260}).wait(1).to({graphics:mask_graphics_144,x:195.3,y:260}).wait(1).to({graphics:mask_graphics_145,x:195.4,y:260}).wait(1).to({graphics:mask_graphics_146,x:195.4,y:260.1}).wait(1).to({graphics:mask_graphics_147,x:195.4,y:260.1}).wait(1).to({graphics:mask_graphics_148,x:195.5,y:260.1}).wait(1).to({graphics:mask_graphics_149,x:195.5,y:260.2}).wait(1).to({graphics:mask_graphics_150,x:195.5,y:260.2}).wait(1).to({graphics:mask_graphics_151,x:195.5,y:260.2}).wait(1).to({graphics:mask_graphics_152,x:195.5,y:260.1}).wait(1).to({graphics:mask_graphics_153,x:195.5,y:260.1}).wait(1).to({graphics:mask_graphics_154,x:195.5,y:260.1}).wait(1).to({graphics:mask_graphics_155,x:195.4,y:260}).wait(1).to({graphics:mask_graphics_156,x:195.4,y:260}).wait(1).to({graphics:mask_graphics_157,x:195.4,y:260}).wait(1).to({graphics:mask_graphics_158,x:195.4,y:260}).wait(1).to({graphics:mask_graphics_159,x:195.4,y:260}).wait(1).to({graphics:mask_graphics_160,x:195.4,y:260}).wait(1).to({graphics:mask_graphics_161,x:195.5,y:260.1}).wait(1).to({graphics:mask_graphics_162,x:195.5,y:260.1}).wait(1).to({graphics:mask_graphics_163,x:195.5,y:260.1}).wait(1).to({graphics:mask_graphics_164,x:195.5,y:260.2}).wait(1));

	// Layer 16
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AKS6+MAAAAq0QACAkgCAiQgMD2jBC4QjbDSlEADQlFADjzkD");
	this.shape.setTransform(284.9,276.6);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(104).to({_off:false},0).wait(61));

	// Layer 15 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AU1IpIAAiMIIqAAIAACMg");
	var mask_1_graphics_1 = new cjs.Graphics().p("AkUBVIAAipIIpAAIAACpg");
	var mask_1_graphics_2 = new cjs.Graphics().p("AkUBjIAAjGIIpAAIAADGg");
	var mask_1_graphics_3 = new cjs.Graphics().p("AkUByIAAjjIIpAAIAADjg");
	var mask_1_graphics_4 = new cjs.Graphics().p("AkUCBIAAkBIIpAAIAAEBg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AkUCQIAAkeIIpAAIAAEeg");
	var mask_1_graphics_6 = new cjs.Graphics().p("AkUCeIAAk7IIpAAIAAE7g");
	var mask_1_graphics_7 = new cjs.Graphics().p("AkUCtIAAlZIIpAAIAAFZg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AkUC8IAAl3IIpAAIAAF3g");
	var mask_1_graphics_9 = new cjs.Graphics().p("AkUDKIAAmUIIpAAIAAGUg");
	var mask_1_graphics_10 = new cjs.Graphics().p("AkUDZIAAmxIIpAAIAAGxg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AkUDoIAAnPIIpAAIAAHPg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AkUD3IAAntIIpAAIAAHtg");
	var mask_1_graphics_13 = new cjs.Graphics().p("AkUEGIAAoKIIpAAIAAIKg");
	var mask_1_graphics_14 = new cjs.Graphics().p("AkUEUIAAonIIpAAIAAIng");
	var mask_1_graphics_15 = new cjs.Graphics().p("AkUEjIAApFIIpAAIAAJFg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AkUEyIAApjIIpAAIAAJjg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AkUFBIAAqAIIpAAIAAKAg");
	var mask_1_graphics_18 = new cjs.Graphics().p("AkUFPIAAqdIIpAAIAAKdg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AkUFeIAAq7IIpAAIAAK7g");
	var mask_1_graphics_20 = new cjs.Graphics().p("AkUFtIAArZIIpAAIAALZg");
	var mask_1_graphics_21 = new cjs.Graphics().p("AkUF7IAAr1IIpAAIAAL1g");
	var mask_1_graphics_22 = new cjs.Graphics().p("AkUGKIAAsTIIpAAIAAMTg");
	var mask_1_graphics_23 = new cjs.Graphics().p("AkUGZIAAsxIIpAAIAAMxg");
	var mask_1_graphics_24 = new cjs.Graphics().p("AkUGoIAAtOIIpAAIAANOg");
	var mask_1_graphics_25 = new cjs.Graphics().p("AkUG2IAAtrIIpAAIAANrg");
	var mask_1_graphics_26 = new cjs.Graphics().p("AkUHFIAAuJIIpAAIAAOJg");
	var mask_1_graphics_27 = new cjs.Graphics().p("AkUHUIAAunIIpAAIAAOng");
	var mask_1_graphics_28 = new cjs.Graphics().p("AkUHjIAAvFIIpAAIAAPFg");
	var mask_1_graphics_29 = new cjs.Graphics().p("AkUHxIAAvhIIpAAIAAPhg");
	var mask_1_graphics_30 = new cjs.Graphics().p("AkUIAIAAv/IIpAAIAAP/g");
	var mask_1_graphics_31 = new cjs.Graphics().p("AkUIPIAAwdIIpAAIAAQdg");
	var mask_1_graphics_32 = new cjs.Graphics().p("AkUIeIAAw6IIpAAIAAQ6g");
	var mask_1_graphics_33 = new cjs.Graphics().p("AkUIsIAAxXIIpAAIAARXg");
	var mask_1_graphics_34 = new cjs.Graphics().p("AkUI7IAAx1IIpAAIAAR1g");
	var mask_1_graphics_35 = new cjs.Graphics().p("AkUJKIAAyTIIpAAIAASTg");
	var mask_1_graphics_36 = new cjs.Graphics().p("AkUJYIAAyvIIpAAIAASvg");
	var mask_1_graphics_37 = new cjs.Graphics().p("AkUJnIAAzNIIpAAIAATNg");
	var mask_1_graphics_38 = new cjs.Graphics().p("AkUJ2IAAzrIIpAAIAATrg");
	var mask_1_graphics_39 = new cjs.Graphics().p("AkUKFIAA0IIIpAAIAAUIg");
	var mask_1_graphics_40 = new cjs.Graphics().p("AkUKTIAA0lIIpAAIAAUlg");
	var mask_1_graphics_41 = new cjs.Graphics().p("AkUKiIAA1DIIpAAIAAVDg");
	var mask_1_graphics_42 = new cjs.Graphics().p("AkUKxIAA1hIIpAAIAAVhg");
	var mask_1_graphics_43 = new cjs.Graphics().p("AkULAIAA1/IIpAAIAAV/g");
	var mask_1_graphics_44 = new cjs.Graphics().p("AkULOIAA2cIIpAAIAAWcg");
	var mask_1_graphics_45 = new cjs.Graphics().p("AkULdIAA25IIpAAIAAW5g");
	var mask_1_graphics_46 = new cjs.Graphics().p("AkULsIAA3XIIpAAIAAXXg");
	var mask_1_graphics_47 = new cjs.Graphics().p("AkUL7IAA31IIpAAIAAX1g");
	var mask_1_graphics_48 = new cjs.Graphics().p("AkUMJIAA4RIIpAAIAAYRg");
	var mask_1_graphics_49 = new cjs.Graphics().p("AkUMYIAA4vIIpAAIAAYvg");
	var mask_1_graphics_50 = new cjs.Graphics().p("AkUMnIAA5NIIpAAIAAZNg");
	var mask_1_graphics_51 = new cjs.Graphics().p("AkUM2IAA5rIIpAAIAAZrg");
	var mask_1_graphics_52 = new cjs.Graphics().p("AkUNEIAA6HIIpAAIAAaHg");
	var mask_1_graphics_53 = new cjs.Graphics().p("AkUNTIAA6lIIpAAIAAalg");
	var mask_1_graphics_54 = new cjs.Graphics().p("AkUNiIAA7DIIpAAIAAbDg");
	var mask_1_graphics_55 = new cjs.Graphics().p("AkUNwIAA7fIIpAAIAAbfg");
	var mask_1_graphics_56 = new cjs.Graphics().p("AkUN/IAA79IIpAAIAAb9g");
	var mask_1_graphics_57 = new cjs.Graphics().p("AkUOOIAA8bIIpAAIAAcbg");
	var mask_1_graphics_58 = new cjs.Graphics().p("AkUOdIAA85IIpAAIAAc5g");
	var mask_1_graphics_59 = new cjs.Graphics().p("AkUOrIAA9VIIpAAIAAdVg");
	var mask_1_graphics_60 = new cjs.Graphics().p("AkUO6IAA9zIIpAAIAAdzg");
	var mask_1_graphics_61 = new cjs.Graphics().p("AkUPJIAA+RIIpAAIAAeRg");
	var mask_1_graphics_62 = new cjs.Graphics().p("AkUPYIAA+vIIpAAIAAevg");
	var mask_1_graphics_63 = new cjs.Graphics().p("AkUPmIAA/MIIpAAIAAfMg");
	var mask_1_graphics_64 = new cjs.Graphics().p("AkUP1IAA/pIIpAAIAAfpg");
	var mask_1_graphics_65 = new cjs.Graphics().p("AkUQEMAAAggHIIpAAMAAAAgHg");
	var mask_1_graphics_66 = new cjs.Graphics().p("AkUQTMAAAgglIIpAAMAAAAglg");
	var mask_1_graphics_67 = new cjs.Graphics().p("AkUQhMAAAghBIIpAAMAAAAhBg");
	var mask_1_graphics_68 = new cjs.Graphics().p("AkUQwMAAAghfIIpAAMAAAAhfg");
	var mask_1_graphics_69 = new cjs.Graphics().p("AkUQ/MAAAgh9IIpAAMAAAAh9g");
	var mask_1_graphics_70 = new cjs.Graphics().p("AkURNMAAAgiaIIpAAMAAAAiag");
	var mask_1_graphics_71 = new cjs.Graphics().p("AkURcMAAAgi3IIpAAMAAAAi3g");
	var mask_1_graphics_72 = new cjs.Graphics().p("AkURrMAAAgjVIIpAAMAAAAjVg");
	var mask_1_graphics_73 = new cjs.Graphics().p("AkUR6MAAAgjzIIpAAMAAAAjzg");
	var mask_1_graphics_74 = new cjs.Graphics().p("AkUSIMAAAgkPIIpAAMAAAAkPg");
	var mask_1_graphics_75 = new cjs.Graphics().p("AkUSXMAAAgktIIpAAMAAAAktg");
	var mask_1_graphics_76 = new cjs.Graphics().p("AkUSmMAAAglLIIpAAMAAAAlLg");
	var mask_1_graphics_77 = new cjs.Graphics().p("AkUS0MAAAgloIIpAAMAAAAlog");
	var mask_1_graphics_78 = new cjs.Graphics().p("AkUTDMAAAgmGIIpAAMAAAAmGg");
	var mask_1_graphics_79 = new cjs.Graphics().p("AkUTSMAAAgmjIIpAAMAAAAmjg");
	var mask_1_graphics_80 = new cjs.Graphics().p("AkUThMAAAgnBIIpAAMAAAAnBg");
	var mask_1_graphics_81 = new cjs.Graphics().p("AkUTwMAAAgnfIIpAAMAAAAnfg");
	var mask_1_graphics_82 = new cjs.Graphics().p("AkUT+MAAAgn8IIpAAMAAAAn8g");
	var mask_1_graphics_83 = new cjs.Graphics().p("AkUUNMAAAgoZIIpAAMAAAAoZg");
	var mask_1_graphics_84 = new cjs.Graphics().p("AkUUcMAAAgo3IIpAAMAAAAo3g");
	var mask_1_graphics_85 = new cjs.Graphics().p("AkUUqMAAAgpUIIpAAMAAAApUg");
	var mask_1_graphics_86 = new cjs.Graphics().p("AkUU5MAAAgpxIIpAAMAAAApxg");
	var mask_1_graphics_87 = new cjs.Graphics().p("AkUVIMAAAgqPIIpAAMAAAAqPg");
	var mask_1_graphics_88 = new cjs.Graphics().p("AkUVXMAAAgqtIIpAAMAAAAqtg");
	var mask_1_graphics_89 = new cjs.Graphics().p("AkUVlMAAAgrKIIpAAMAAAArKg");
	var mask_1_graphics_90 = new cjs.Graphics().p("AkUV0MAAAgrnIIpAAMAAAArng");
	var mask_1_graphics_91 = new cjs.Graphics().p("AkUWDMAAAgsFIIpAAMAAAAsFg");
	var mask_1_graphics_92 = new cjs.Graphics().p("AkUWSMAAAgsjIIpAAMAAAAsjg");
	var mask_1_graphics_93 = new cjs.Graphics().p("AkUWgMAAAgs/IIpAAMAAAAs/g");
	var mask_1_graphics_94 = new cjs.Graphics().p("AkUWvMAAAgtdIIpAAMAAAAtdg");
	var mask_1_graphics_95 = new cjs.Graphics().p("AkUW+MAAAgt7IIpAAMAAAAt7g");
	var mask_1_graphics_96 = new cjs.Graphics().p("AkUXNMAAAguZIIpAAMAAAAuZg");
	var mask_1_graphics_97 = new cjs.Graphics().p("AkUXbMAAAgu2IIpAAMAAAAu2g");
	var mask_1_graphics_98 = new cjs.Graphics().p("AkUXqMAAAgvTIIpAAMAAAAvTg");
	var mask_1_graphics_99 = new cjs.Graphics().p("AkUX5MAAAgvxIIpAAMAAAAvxg");
	var mask_1_graphics_100 = new cjs.Graphics().p("AkUYIMAAAgwOIIpAAMAAAAwOg");
	var mask_1_graphics_101 = new cjs.Graphics().p("AkUYWMAAAgwrIIpAAMAAAAwrg");
	var mask_1_graphics_102 = new cjs.Graphics().p("AkUYlMAAAgxJIIpAAMAAAAxJg");
	var mask_1_graphics_103 = new cjs.Graphics().p("AkUY0MAAAgxnIIpAAMAAAAxng");
	var mask_1_graphics_104 = new cjs.Graphics().p("AU1fBMAAAgyEIIqAAMAAAAyEg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:188.8,y:55.4}).wait(1).to({graphics:mask_1_graphics_1,x:349.8,y:105}).wait(1).to({graphics:mask_1_graphics_2,x:349.8,y:106.3}).wait(1).to({graphics:mask_1_graphics_3,x:349.8,y:107.5}).wait(1).to({graphics:mask_1_graphics_4,x:349.8,y:108.8}).wait(1).to({graphics:mask_1_graphics_5,x:349.8,y:110.1}).wait(1).to({graphics:mask_1_graphics_6,x:349.8,y:111.4}).wait(1).to({graphics:mask_1_graphics_7,x:349.8,y:112.7}).wait(1).to({graphics:mask_1_graphics_8,x:349.8,y:113.9}).wait(1).to({graphics:mask_1_graphics_9,x:349.8,y:115.2}).wait(1).to({graphics:mask_1_graphics_10,x:349.8,y:116.5}).wait(1).to({graphics:mask_1_graphics_11,x:349.8,y:117.8}).wait(1).to({graphics:mask_1_graphics_12,x:349.8,y:119.1}).wait(1).to({graphics:mask_1_graphics_13,x:349.8,y:120.4}).wait(1).to({graphics:mask_1_graphics_14,x:349.8,y:121.6}).wait(1).to({graphics:mask_1_graphics_15,x:349.8,y:122.9}).wait(1).to({graphics:mask_1_graphics_16,x:349.8,y:124.2}).wait(1).to({graphics:mask_1_graphics_17,x:349.8,y:125.5}).wait(1).to({graphics:mask_1_graphics_18,x:349.8,y:126.7}).wait(1).to({graphics:mask_1_graphics_19,x:349.8,y:128}).wait(1).to({graphics:mask_1_graphics_20,x:349.8,y:129.3}).wait(1).to({graphics:mask_1_graphics_21,x:349.8,y:130.6}).wait(1).to({graphics:mask_1_graphics_22,x:349.8,y:131.9}).wait(1).to({graphics:mask_1_graphics_23,x:349.8,y:133.1}).wait(1).to({graphics:mask_1_graphics_24,x:349.8,y:134.4}).wait(1).to({graphics:mask_1_graphics_25,x:349.8,y:135.7}).wait(1).to({graphics:mask_1_graphics_26,x:349.8,y:137}).wait(1).to({graphics:mask_1_graphics_27,x:349.8,y:138.3}).wait(1).to({graphics:mask_1_graphics_28,x:349.8,y:139.5}).wait(1).to({graphics:mask_1_graphics_29,x:349.8,y:140.8}).wait(1).to({graphics:mask_1_graphics_30,x:349.8,y:142.1}).wait(1).to({graphics:mask_1_graphics_31,x:349.8,y:143.4}).wait(1).to({graphics:mask_1_graphics_32,x:349.8,y:144.7}).wait(1).to({graphics:mask_1_graphics_33,x:349.8,y:145.9}).wait(1).to({graphics:mask_1_graphics_34,x:349.8,y:147.2}).wait(1).to({graphics:mask_1_graphics_35,x:349.8,y:148.5}).wait(1).to({graphics:mask_1_graphics_36,x:349.8,y:149.8}).wait(1).to({graphics:mask_1_graphics_37,x:349.8,y:151}).wait(1).to({graphics:mask_1_graphics_38,x:349.8,y:152.3}).wait(1).to({graphics:mask_1_graphics_39,x:349.8,y:153.6}).wait(1).to({graphics:mask_1_graphics_40,x:349.8,y:154.9}).wait(1).to({graphics:mask_1_graphics_41,x:349.8,y:156.2}).wait(1).to({graphics:mask_1_graphics_42,x:349.8,y:157.4}).wait(1).to({graphics:mask_1_graphics_43,x:349.8,y:158.7}).wait(1).to({graphics:mask_1_graphics_44,x:349.8,y:160}).wait(1).to({graphics:mask_1_graphics_45,x:349.8,y:161.3}).wait(1).to({graphics:mask_1_graphics_46,x:349.8,y:162.6}).wait(1).to({graphics:mask_1_graphics_47,x:349.8,y:163.8}).wait(1).to({graphics:mask_1_graphics_48,x:349.8,y:165.1}).wait(1).to({graphics:mask_1_graphics_49,x:349.8,y:166.4}).wait(1).to({graphics:mask_1_graphics_50,x:349.8,y:167.7}).wait(1).to({graphics:mask_1_graphics_51,x:349.8,y:169}).wait(1).to({graphics:mask_1_graphics_52,x:349.8,y:170.2}).wait(1).to({graphics:mask_1_graphics_53,x:349.8,y:171.5}).wait(1).to({graphics:mask_1_graphics_54,x:349.8,y:172.8}).wait(1).to({graphics:mask_1_graphics_55,x:349.8,y:174.1}).wait(1).to({graphics:mask_1_graphics_56,x:349.8,y:175.3}).wait(1).to({graphics:mask_1_graphics_57,x:349.8,y:176.6}).wait(1).to({graphics:mask_1_graphics_58,x:349.8,y:177.9}).wait(1).to({graphics:mask_1_graphics_59,x:349.8,y:179.2}).wait(1).to({graphics:mask_1_graphics_60,x:349.8,y:180.5}).wait(1).to({graphics:mask_1_graphics_61,x:349.8,y:181.7}).wait(1).to({graphics:mask_1_graphics_62,x:349.8,y:183}).wait(1).to({graphics:mask_1_graphics_63,x:349.8,y:184.3}).wait(1).to({graphics:mask_1_graphics_64,x:349.8,y:185.6}).wait(1).to({graphics:mask_1_graphics_65,x:349.8,y:186.9}).wait(1).to({graphics:mask_1_graphics_66,x:349.8,y:188.2}).wait(1).to({graphics:mask_1_graphics_67,x:349.8,y:189.4}).wait(1).to({graphics:mask_1_graphics_68,x:349.8,y:190.7}).wait(1).to({graphics:mask_1_graphics_69,x:349.8,y:192}).wait(1).to({graphics:mask_1_graphics_70,x:349.8,y:193.3}).wait(1).to({graphics:mask_1_graphics_71,x:349.8,y:194.5}).wait(1).to({graphics:mask_1_graphics_72,x:349.8,y:195.8}).wait(1).to({graphics:mask_1_graphics_73,x:349.8,y:197.1}).wait(1).to({graphics:mask_1_graphics_74,x:349.8,y:198.4}).wait(1).to({graphics:mask_1_graphics_75,x:349.8,y:199.7}).wait(1).to({graphics:mask_1_graphics_76,x:349.8,y:200.9}).wait(1).to({graphics:mask_1_graphics_77,x:349.8,y:202.2}).wait(1).to({graphics:mask_1_graphics_78,x:349.8,y:203.5}).wait(1).to({graphics:mask_1_graphics_79,x:349.8,y:204.8}).wait(1).to({graphics:mask_1_graphics_80,x:349.8,y:206.1}).wait(1).to({graphics:mask_1_graphics_81,x:349.8,y:207.3}).wait(1).to({graphics:mask_1_graphics_82,x:349.8,y:208.6}).wait(1).to({graphics:mask_1_graphics_83,x:349.8,y:209.9}).wait(1).to({graphics:mask_1_graphics_84,x:349.8,y:211.2}).wait(1).to({graphics:mask_1_graphics_85,x:349.8,y:212.5}).wait(1).to({graphics:mask_1_graphics_86,x:349.8,y:213.7}).wait(1).to({graphics:mask_1_graphics_87,x:349.8,y:215}).wait(1).to({graphics:mask_1_graphics_88,x:349.8,y:216.3}).wait(1).to({graphics:mask_1_graphics_89,x:349.8,y:217.6}).wait(1).to({graphics:mask_1_graphics_90,x:349.8,y:218.8}).wait(1).to({graphics:mask_1_graphics_91,x:349.8,y:220.1}).wait(1).to({graphics:mask_1_graphics_92,x:349.8,y:221.4}).wait(1).to({graphics:mask_1_graphics_93,x:349.8,y:222.7}).wait(1).to({graphics:mask_1_graphics_94,x:349.8,y:224}).wait(1).to({graphics:mask_1_graphics_95,x:349.8,y:225.3}).wait(1).to({graphics:mask_1_graphics_96,x:349.8,y:226.5}).wait(1).to({graphics:mask_1_graphics_97,x:349.8,y:227.8}).wait(1).to({graphics:mask_1_graphics_98,x:349.8,y:229.1}).wait(1).to({graphics:mask_1_graphics_99,x:349.8,y:230.4}).wait(1).to({graphics:mask_1_graphics_100,x:349.8,y:231.7}).wait(1).to({graphics:mask_1_graphics_101,x:349.8,y:232.9}).wait(1).to({graphics:mask_1_graphics_102,x:349.8,y:234.2}).wait(1).to({graphics:mask_1_graphics_103,x:349.8,y:235.5}).wait(1).to({graphics:mask_1_graphics_104,x:188.8,y:198.5}).wait(61));

	// Layer 14
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AKS6lMAAAAqDQACAjgCAjQgMD2jBC4QjbDRlEADQlFADjzkD");
	this.shape_1.setTransform(284.9,279);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(165));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(322,103.9,40.8,21.8);


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


(lib.honeyflap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.honeybee();
	this.instance.parent = this;
	this.instance.setTransform(22.8,-144.1,0.422,0.422,0,0,0,-37.1,63.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgQB8IgQgDIgCgBIgEgBIgEgBIgFgCIgHgDIgFgDIgDgCIgBgBIgCAAIgBgBIgBgBIgBgBIgBgBIgCAAIgBgBIgBgBIgBgBIgBgBIgBAAIgBgBIgBgBIgBgBIgBgBIgBAAIgBgBIgBgBIgBgBIAAgBIgCAAIAAgBIgBgBIgBgBIgBgBIgBgBIAAAAIgBgBIgBgBIgBgBIAAgBIgBgBIgBgBIgBAAIAAgBIgBgBIgBgBIAAgBIgBgBIgBgBIAAAAIgBgBIAAgBIgBgBIgBgBIAAgBIgBgBIAAAAIgBgBIAAgBIgBgBIgBgBIAAgBIgBgBIAAgBIAAAAIgBgBIgBgBIAAgBIgBgBIAAgBIAAgBIgBgBIAAgBIgBAAIAAgBIAAgBIgBgBIAAgBIgBgBIAAgBIAAgBIgBgBIAAAAIAAgBIgBgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAAAIAAgBIgBgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIgBgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIABgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIABgBIAAgBIABgBIAAgBIABgBIABgBIAAgBIABgBIAAgBIABgBIAAgBIABgBIABgBIAAgBIABgBIABgBIAAgBIABgBIABgBIABgBIAAgBIABgCIABgBIABgBIABgBIAAgBIACgBIAAgBIABgBIABgBIABgBIADgEIANgLIANgIIAPgIIAQgFIAPgDIAPgBIAPABIAQACIAQAGIAQAHIAEACIABABIABABIABABIABAAIACABIABABIABABIABABIABAAIABABIABABIABABIABABIABAAIABABIABABIABABIAAABIABABIABAAIABABIABABIABABIABABIAAABIABAAIABABIABABIABABIAAABIABABIABAAIAAABIABABIABABIAAABIABABIABABIAAAAIABABIABABIAAABIABABIAAABIABABIABAAIAAABIABABIAAABIABABIAAABIABABIAAABIABAAIAAABIABABIAAABIABABIAAABIABABIAAABIABAAIAAABIAAABIABABIAAABIABABIAAABIAAABIABABIAAABIABAAIAAABIAAABIABABIAAABIAAABIAAABIABABIAAABIAAABIABAAIAAABIAAABIAAABIABABIAAABIAAABIAAABIABABIAAABIAAABIAAABIABAAIAAABIAAABIAAABIAAABIAAABIAAABIABABIAAABIAAACIAAACIAAABIABABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAABIgBABIABABIgBABIAAABIAAABIAAABIAAABIAAABIAAABIgBABIAAABIAAABIAAABIAAACIgBACIAAACIAAABIAAABIgBABIAAABIAAABIgBABIAAABIAAABIAAABIgBABIAAABIgBABIAAABIAAABIAAAAIgBACIAAABIgBABIAAABIgBABIAAABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIgBABIAAABIgBABIgBABIgBABIAAABIgBABIgBABIAAABIgBABIgBABIgBABIgBACIAAABIgBABIgBABIgBABIgBABIgBABIgBABIgCABIAAABIgCACIgBABIgBABIgBABIgCABIgJAIQgMAIgNAFQgLAFgLACQgNADgNAAIgQgBg");
	this.shape.setTransform(22.8,-143.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-215.3,105.5,84.2);


// stage content:
(lib.writingsuccess_Fontkid_j = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_304 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(304).call(this.frame_304).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(337,145,0.998,0.998,8,0,0,22.4,-144);
	this.instance._off = true;

	this.instance_1 = new lib.honeybee();
	this.instance_1.parent = this;
	this.instance_1.setTransform(336.8,63,0.421,0.421,0,-23,157,-37.1,63.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({regY:-143.8,guide:{path:[337.1,145.2,336.9,285.1,336.7,425,336.7,426.1,336.8,427.1]}},116).to({guide:{path:[336.7,427.2,336.8,429.6,336.6,432,335.5,456.6,316.2,475,294.5,495.7,262.6,496.3]}},49).to({regY:-143.9,scaleX:1,scaleY:1,guide:{path:[262.7,496.3,262.2,496.3,261.8,496.3,244.2,496.5,229.1,489]}},20).to({regY:-144,scaleX:1,scaleY:1,x:202,y:467},25).wait(9).to({rotation:0,skewX:-23,skewY:157,x:336.9,y:62.9},0).to({_off:true},16).wait(61));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(244).to({_off:false},0).to({skewX:-8,skewY:172,guide:{path:[336.8,63,397.6,168.1,467.6,83,537.6,-2.2,639,180.4]}},60).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(205.2,468.3,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},210).wait(10).to({_off:false,x:337.7,y:62.8},0).to({_off:true},1).wait(75));

	// Layer 29
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgUB6IgUgEIgPgIIgPgHIgIgIIgHgIIgIgHIgHgHIgFgIIgDgHIgFgIIgCgIIgDgHIAAgHIgCgIIAAgHIAAgIIgDgHIADgHIAAgHIAAgIIACgHIADgIIACgIIADgHIAFgHIAFgIIAFgHIAHgIIAIgIIAHgHIANgHIAPgIIAMgFIANgCIAVgCIAAgBIAXADIARAFIASAHIAMAHIAKAIIAIAIIAHAHIAFAIIAFAHIADAHIAFAIIACAIIADAHIACAIIADAHIAAAHIAAAIIAAAHIAAAHIAAAIIgDAHIAAAHIgCAIIgFAIIgDAHIgFAIIgCAHIgFAHIgIAIIgHAIIgKAHIgKAIIgQAGIgMAGIgMACIgXADIgVgDg");
	this.shape_1.setTransform(338.6,61.8);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(229).to({_off:false},0).wait(76));

	// Layer 32
	this.instance_2 = new lib.j_ar("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(269,330.7,0.665,0.847,0,0,0,292.4,318.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(296));

	// Layer 31
	this.instance_3 = new lib.j("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-14,47.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).wait(296));

	// Base
	this.instance_4 = new lib.Symbol2("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(275,275);
	this.instance_4.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(305));

	// Background
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#F59E9E").ss(3,1,1).p("AMvQ5I5dAAMAAAghxIZdAAg");
	this.shape_2.setTransform(275,275,3.373,2.543);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_3.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(305));

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