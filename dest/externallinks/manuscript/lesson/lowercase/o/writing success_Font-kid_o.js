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
	this.shape.graphics.f("#FFFFFF").s().p("AqEKaQkNkTAAmHQAAmGELkVQEKkTF6AAQF9AAENEVQELEWgBGDQABGHkLETQkNEVl6AAQl5AAkMkVgAmkmyQiuC1AAD9QAAEECuCzQCvC0D2AAQD2AACui0QCsizAAkEQAAj9isi1Qiuiyj2AAQj2AAivCyg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.4,-94.2,182.9,188.6);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 10
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(25,0,1).p("Ar7HDQABg/AJg8QAmjyCvi1QDgjpE8AAQE8AADgDpQDZDhAHE7");
	this.shape.setTransform(275.4,319.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(25,1,1).p("ArsjkQA0i6CNiTQDgjoE9AAQE7AADgDoQDgDpAAFIQAAFJjgDpQjgDok7AAQk9AAjgjoQiGiMg2iu");
	this.shape_1.setTransform(276.9,365.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(25,1,1).p("AL8AAQAAFJjgDpQjgDok8AAQk8AAjgjoQjfjpAAlJQAAlIDfjpQDgjoE8AAQE8AADgDoQDgDpAAFIg");
	this.shape_2.setTransform(275.4,365.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},149).to({state:[{t:this.shape_1}]},145).to({state:[{t:this.shape_2}]},5).wait(1));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_149 = new cjs.Graphics().p("AjbPtQEgmoH3hfQH4hgGnEfQGoEhBgH3Mgl9AHPQhgn3Efmog");
	var mask_graphics_150 = new cjs.Graphics().p("AjOPkQEpmhH4hVQH6hWGhEpQGiEpBVH5MgmGAGcQhWn5Epmig");
	var mask_graphics_151 = new cjs.Graphics().p("AjBPcQExmbH7hKQH7hLGbExQGbEyBLH7MgmOAFpQhLn7Exmcg");
	var mask_graphics_152 = new cjs.Graphics().p("AizPUQE6mUH8hAQH8hAGUE5QGWE7BAH8MgmWAE2QhAn8E6mWg");
	var mask_graphics_153 = new cjs.Graphics().p("AilPNQFDmOH9g1QH+g2GNFCQGPFDA1H9MgmbAEDQg2n+FCmOg");
	var mask_graphics_154 = new cjs.Graphics().p("AiVPGQFKmHH+grQH/grGHFKQGIFMArH+MgmhADPQgrn+FLmIg");
	var mask_graphics_155 = new cjs.Graphics().p("AiFO/QFTmAH+ggQIAggGAFSQGBFUAgH/MgmlACbQggn/FTmBg");
	var mask_graphics_156 = new cjs.Graphics().p("Ah1O5QFbl5H/gVQIBgWF4FaQF6FcAVH/MgmnABoQgVoAFal5g");
	var mask_graphics_157 = new cjs.Graphics().p("AhjOzQFilyIAgKQIAgLFyFiQFyFjALIAMgmpAA0QgKoAFilyg");
	var mask_graphics_158 = new cjs.Graphics().p("AhROtQFqlqIAAAQIAAAFqFqQFrFrAAIAMgmpAAAQAAoAFqlrg");
	var mask_graphics_159 = new cjs.Graphics().p("Am7bxQALoAFxljQFyliH/ALQIBAKFiFyQFjFygKIAg");
	var mask_graphics_160 = new cjs.Graphics().p("Am6bLQAVoAF5lcQF5laH/AWQIBAVFaF5QFbF5gVIAg");
	var mask_graphics_161 = new cjs.Graphics().p("Am5akQAgn/GAlUQGAlSH/AgQIAAgFSGAQFTGBggH/g");
	var mask_graphics_162 = new cjs.Graphics().p("Am3Z9QArn+GHlMQGHlKH+ArQH/ArFKGHQFLGHgrH/g");
	var mask_graphics_163 = new cjs.Graphics().p("Am1ZWQA2n9GNlDQGPlCH8A1QH+A2FCGOQFDGOg1H+g");
	var mask_graphics_164 = new cjs.Graphics().p("AmyYwQBAn8GUk7QGVk5H8BAQH9BAE5GUQE7GVhAH8g");
	var mask_graphics_165 = new cjs.Graphics().p("AmuYJQBKn6GakyQGckxH7BKQH7BLExGbQEyGchLH6g");
	var mask_graphics_166 = new cjs.Graphics().p("AmqXjQBVn5GgkpQGikpH5BWQH5BVEpGhQEpGihVH5g");
	var mask_graphics_167 = new cjs.Graphics().p("AmmW9QBgn3GmkhQGpkfH2BfQH4BgEgGnQEgGphgH3g");
	var mask_graphics_168 = new cjs.Graphics().p("AmhWXQBqn1GtkYQGukWH1BqQH1BqEXGtQEXGuhqH1g");
	var mask_graphics_169 = new cjs.Graphics().p("AmbVxQB0nzGykPQG0kNHzB1QHzB1EOGyQEOG0h1Hzg");
	var mask_graphics_170 = new cjs.Graphics().p("AmVVLQB/nwG3kGQG6kEHwB/QHwCAEFG4QEFG5h/Hxg");
	var mask_graphics_171 = new cjs.Graphics().p("AmPUmQCKnuG9j8QG/j7HtCJQHtCKD8G+QD8G/iKHtg");
	var mask_graphics_172 = new cjs.Graphics().p("AmIUAQCUnqHCjzQHEjxHqCTQHrCUDyHDQDzHEiUHqg");
	var mask_graphics_173 = new cjs.Graphics().p("AmATbQCennHHjpQHJjoHnCeQHoCeDoHIQDpHJieHng");
	var mask_graphics_174 = new cjs.Graphics().p("Al4S3QConkHMjgQHOjeHjCoQHlCoDfHMQDfHOioHkg");
	var mask_graphics_175 = new cjs.Graphics().p("AlvSSQCyngHRjWQHSjVHgCyQHgCzDWHRQDVHSiyHgg");
	var mask_graphics_176 = new cjs.Graphics().p("AlmRuQC8ncHVjNQHXjLHcC8QHdC9DLHVQDMHXi8Hcg");
	var mask_graphics_177 = new cjs.Graphics().p("AlcRKQDGnYHZjDQHbjBHYDGQHZDGDBHaQDCHbjGHYg");
	var mask_graphics_178 = new cjs.Graphics().p("AlSQmQDQnUHdi4QHfi3HUDPQHUDRC4HdQC4HfjQHUg");
	var mask_graphics_179 = new cjs.Graphics().p("AlHQDQDanQHhiuQHiitHPDZQHQDaCuHiQCuHijaHQg");
	var mask_graphics_180 = new cjs.Graphics().p("Ak8PgQDknLHkikQHmijHLDjQHLDkCkHkQCkHnjkHKg");
	var mask_graphics_181 = new cjs.Graphics().p("AkwO9QDtnGHoiaQHpiZHGDtQHGDtCaHpQCZHpjtHGg");
	var mask_graphics_182 = new cjs.Graphics().p("AkjObQD2nBHriQQHsiOHBD2QHBD3CPHrQCQHsj3HBg");
	var mask_graphics_183 = new cjs.Graphics().p("AkXN5QEAm7HuiGQHviEG7D/QG9EACEHuQCGHwkAG8g");
	var mask_graphics_184 = new cjs.Graphics().p("AkJNYQEJm2Hwh8QHyh5G2EIQG3EKB6HwQB7HykJG3g");
	var mask_graphics_185 = new cjs.Graphics().p("Aj7M3QERmxHzhxQH1hvGwESQGxESBwH0QBxH0kTGxg");
	var mask_graphics_186 = new cjs.Graphics().p("AjtMWQEamqH2hnQH3hlGqEbQGrEcBmH1QBmH3kbGrg");
	var mask_graphics_187 = new cjs.Graphics().p("AjeL2QEimlH5hbQH4hbGlEkQGlEkBbH4QBbH5kkGkg");
	var mask_graphics_188 = new cjs.Graphics().p("AjPLXQErmfH6hRQH7hQGeEsQGfEtBQH6QBRH6ktGfg");
	var mask_graphics_189 = new cjs.Graphics().p("AjAK3QE1mYH7hHQH8hFGYE1QGYE2BGH7QBGH8k1GYg");
	var mask_graphics_190 = new cjs.Graphics().p("AiwKZQE9mSH9g8QH9g6GRE9QGTE+A7H8QA7H+k9GRg");
	var mask_graphics_191 = new cjs.Graphics().p("AifJ7QFFmLH+gyQH+gwGLFGQGLFHAxH9QAxH/lHGLg");
	var mask_graphics_192 = new cjs.Graphics().p("AiOJdQFNmEH/gnQH/glGEFOQGEFPAmH+QAmH/lOGEg");
	var mask_graphics_193 = new cjs.Graphics().p("Ah9JAQFVl9IAgcQIAgbF8FWQF+FXAbH/QAbIAlWF9g");
	var mask_graphics_194 = new cjs.Graphics().p("AhsIjQFel2IAgRQIAgQF1FeQF2FfARH/QARIBleF2g");
	var mask_graphics_195 = new cjs.Graphics().p("AhaIHQFlluIBgHQIAgFFuFmQFvFmAGIAQAGIBlmFug");
	var mask_graphics_196 = new cjs.Graphics().p("AhHHsQFslnIAAEQIBAGFnFtQFnFugFH/QgFIBltFng");
	var mask_graphics_197 = new cjs.Graphics().p("Ag1HRQF0lfIAAPQIBAQFeF1QFgF1gQH/QgPIBl1Ffg");
	var mask_graphics_198 = new cjs.Graphics().p("AgiG2QF7lXIAAaQIAAbFXF8QFXF8gaH/QgaIBl8FXg");
	var mask_graphics_199 = new cjs.Graphics().p("AgOGdQGClPH/AkQH/AmFPGDQFPGDgkH/QglH/mEFPg");
	var mask_graphics_200 = new cjs.Graphics().p("AAEGEQGKlHH/AvQH+AwFHGKQFHGLgwH9QgvH/mLFHg");
	var mask_graphics_201 = new cjs.Graphics().p("AAYFrQGRk+H9A5QH9A7E/GRQE/GRg6H9Qg7H9mRE/g");
	var mask_graphics_202 = new cjs.Graphics().p("AAtFTQGXk2H8BEQH8BGE2GYQE2GXhFH7QhFH9mXE2g");
	var mask_graphics_203 = new cjs.Graphics().p("ABBE8QGektH6BOQH7BREtGeQEuGehQH5QhPH7meEug");
	var mask_graphics_204 = new cjs.Graphics().p("ABWEmQGkklH5BZQH4BbElGkQElGlhaH3QhaH5mkElg");
	var mask_graphics_205 = new cjs.Graphics().p("ABrEQQGqkbH3BjQH2BlEcGqQEcGrhkH1QhlH3mqEcg");
	var mask_graphics_206 = new cjs.Graphics().p("ACBD7QGwkSH0BtQH0BwETGwQETGwhuH0QhwH0mwEUg");
	var mask_graphics_207 = new cjs.Graphics().p("ACXDmQG1kJHyB4QHyB7EKG1QEKG2h5HxQh6Hym2EKg");
	var mask_graphics_208 = new cjs.Graphics().p("ACtDSQG7j/HvCCQHvCFEBG7QEBG7iEHvQiEHvm7EBg");
	var mask_graphics_209 = new cjs.Graphics().p("ADDC/QHBj2HsCMQHsCQD3HAQD4HBiOHrQiOHtnBD3g");
	var mask_graphics_210 = new cjs.Graphics().p("ADaCtQHGjtHpCXQHpCZDuHFQDuHGiYHpQiZHpnGDug");
	var mask_graphics_211 = new cjs.Graphics().p("ADxCbQHKjjHmChQHmCkDkHKQDlHKiiHlQijHnnLDkg");
	var mask_graphics_212 = new cjs.Graphics().p("AEICKQHPjZHjCrQHiCuDbHOQDbHQitHhQitHjnPDbg");
	var mask_graphics_213 = new cjs.Graphics().p("AEgB6QHTjQHfC1QHfC4DQHTQDSHUi3HeQi3HfnTDRg");
	var mask_graphics_214 = new cjs.Graphics().p("AE4BrQHXjGHbC/QHbDCDHHXQDHHYjAHaQjBHbnYDIg");
	var mask_graphics_215 = new cjs.Graphics().p("AFPBcQHci8HXDJQHWDLC+HcQC9HcjKHWQjLHXncC+g");
	var mask_graphics_216 = new cjs.Graphics().p("AFoBOQHfiyHTDTQHSDVCzHfQC0HhjVHRQjUHTngCzg");
	var mask_graphics_217 = new cjs.Graphics().p("AGABBQHjioHODcQHODfCpHjQCpHkjeHNQjeHOnjCqg");
	var mask_graphics_218 = new cjs.Graphics().p("AGZA0QHmieHKDmQHIDpCfHnQCgHnjoHIQjoHKnnCfg");
	var mask_graphics_219 = new cjs.Graphics().p("AGxApQHqiUHFDwQHDDyCVHpQCVHrjxHDQjxHFnqCVg");
	var mask_graphics_220 = new cjs.Graphics().p("AHKAeQHtiKHAD5QG+D8CLHtQCKHtj6G+Qj7HAntCKg");
	var mask_graphics_221 = new cjs.Graphics().p("AHkAUQHvh/G6ECQG5EFCAHvQCBHxkEG4QkEG6nwCBg");
	var mask_graphics_222 = new cjs.Graphics().p("AH9ALQHyh1G0ELQG0EOB2HyQB2HzkNGzQkNG1nzB2g");
	var mask_graphics_223 = new cjs.Graphics().p("AIWACQH1hqGuEUQGuEXBsH1QBrH1kWGtQkWGvn1Bsg");
	var mask_graphics_224 = new cjs.Graphics().p("AIwgFQH3hhGoEeQGoEgBhH2QBhH4kfGnQkfGpn3Bhg");
	var mask_graphics_225 = new cjs.Graphics().p("AJJgMQH5hWGjEmQGiEpBWH5QBWH5knGhQkpGjn4BXg");
	var mask_graphics_226 = new cjs.Graphics().p("AJjgSQH7hMGcEvQGbEyBMH6QBMH7kwGbQkxGdn7BMg");
	var mask_graphics_227 = new cjs.Graphics().p("AJ9gXQH8hBGWE3QGVE6BBH8QBBH8k5GVQk5GWn8BBg");
	var mask_graphics_228 = new cjs.Graphics().p("AKXgcQH9g2GPFAQGPFCA2H9QA3H+lBGOQlCGPn+A3g");
	var mask_graphics_229 = new cjs.Graphics().p("AKxgfQH+gsGIFIQGIFLAsH+QAsH+lKGIQlKGIn+Asg");
	var mask_graphics_230 = new cjs.Graphics().p("ALLgiQH/ghGBFQQGBFTAhH+QAhIAlRGAQlTGCn/Ahg");
	var mask_graphics_231 = new cjs.Graphics().p("ALlgkQH/gXF6FZQF6FaAWIAQAXIAlaF5QlaF6oAAXg");
	var mask_graphics_232 = new cjs.Graphics().p("AL+gmQIAgLFzFgQFyFjAMH/QAMIBlhFyQliFzoAALg");
	var mask_graphics_233 = new cjs.Graphics().p("AMYgmQIAgBFsFoQFrFqABIAQABIAlpFrQlqFroAACg");
	var mask_graphics_234 = new cjs.Graphics().p("EAMEAmCMAAugmoQIAAKFkFvQFjFygKIAQgJIAlxFjQlnFbnvAAIgbgBg");
	var mask_graphics_235 = new cjs.Graphics().p("EALqAmCMABigmnQIAAUFcF3QFbF5gUH/QgVIBl3FbQlkFJndAAIg4gBg");
	var mask_graphics_236 = new cjs.Graphics().p("EALQAmAMACWgmkQH/AfFUF+QFTGBgfH+QgfIAl/FTQlgE4nKAAQgqAAgrgDg");
	var mask_graphics_237 = new cjs.Graphics().p("EAK2Al+MADKgmgQH+AoFMGHQFLGHgqH+QgpH/mGFLQlcEnm5AAQg4AAg5gFg");
	var mask_graphics_238 = new cjs.Graphics().p("EAKcAl8MAD9gmcQH+AzFDGNQFDGPg0H9Qg1H9mMFDQlXEXmpAAQhFAAhHgHg");
	var mask_graphics_239 = new cjs.Graphics().p("EAKDAl5MAEwgmWQH8A+E7GTQE7GVg/H8Qg/H9mUE6QlREHmZAAQhSAAhUgKg");
	var mask_graphics_240 = new cjs.Graphics().p("EAJpAl1MAFjgmPQH7BJEzGaQEyGbhKH7QhJH7maEyQlMD3mKAAQheAAhigOg");
	var mask_graphics_241 = new cjs.Graphics().p("EAJPAlxMAGXgmHQH5BTEqGhQEpGhhUH5QhUH6mgEpQlGDol7ABQhrAAhvgTg");
	var mask_graphics_242 = new cjs.Graphics().p("EAI1AlsMAHKgl+QH3BeEiGnQEgGohfH2QheH4mnEhQk/DalsAAQh3AAh9gYg");
	var mask_graphics_243 = new cjs.Graphics().p("EAIcAlnMAH8gl0QH1BpEZGsQEXGuhpH1QhpH1msEYQk5DMleAAQiDAAiJgdg");
	var mask_graphics_244 = new cjs.Graphics().p("EAIDAlhMAIugloQHzByEQGzQEOGzhzHzQh0HzmyEPQkyC+lQAAQiPAAiVgjg");
	var mask_graphics_245 = new cjs.Graphics().p("EAHpAlbMAJhglcQHxB9EGG4QEFG5h+HwQh+Hxm4EFQkpCxlDAAQicAAihgpg");
	var mask_graphics_246 = new cjs.Graphics().p("EAHQAlUMAKTglQQHuCJD9G9QD8G/iIHtQiJHum9D8QkiCkk2AAQinAAitgwg");
	var mask_graphics_247 = new cjs.Graphics().p("EAG3AlNMALFglCQHrCTDzHDQDzHDiTHqQiTHsnCDyQkZCYkpAAQizAAi5g3g");
	var mask_graphics_248 = new cjs.Graphics().p("EAGeAlGMAL3gkzQHnCdDqHHQDpHJicHnQieHonHDpQkRCNkcAAQi/AAjEg/g");
	var mask_graphics_249 = new cjs.Graphics().p("EAGGAk9MAMngkiQHkCnDhHNQDfHNinHkQinHknMDgQkICBkQAAQjLAAjOhIg");
	var mask_graphics_250 = new cjs.Graphics().p("EAFtAk1MANYgkRQHhCxDXHRQDWHSixHgQiyHhnQDWQkAB2kDAAQjWAAjahQg");
	var mask_graphics_251 = new cjs.Graphics().p("EAFVAkrMAOJgj+QHcC7DOHWQDLHWi7HcQi7HdnVDNQj2Brj3AAQjiAAjkhag");
	var mask_graphics_252 = new cjs.Graphics().p("EAE9AkiMAO5gjrQHYDFDEHZQDCHbjFHYQjGHZnZDDQjsBhjrAAQjuAAjuhjg");
	var mask_graphics_253 = new cjs.Graphics().p("EAElAkXMAPogjWQHVDPC5HdQC4HfjPHUQjPHVndC4QjiBYjfAAQj6AAj4hug");
	var mask_graphics_254 = new cjs.Graphics().p("EAEOAkNMAQXgjBQHQDZCvHhQCuHijYHPQjZHRnhCuQjXBPjUAAQkGAAkBh4g");
	var mask_graphics_255 = new cjs.Graphics().p("EAD3AkCMARFgirQHMDiClHlQCkHmjiHLQjjHMnkCkQjNBGjIAAQkTAAkJiDg");
	var mask_graphics_256 = new cjs.Graphics().p("EADgAj2MARzgiTQHHDsCbHoQCaHpjsHGQjsHHnoCaQjCA+i8AAQkfAAkSiPg");
	var mask_graphics_257 = new cjs.Graphics().p("EADJAjqMAShgh7QHCD1CRHsQCPHsj1HBQj2HCnqCQQi3A2iwAAQksAAkbibg");
	var mask_graphics_258 = new cjs.Graphics().p("EACyAjeMATPghiQG8D/CHHuQCFHvj/G8Qj/G8ntCGQirAuilAAQk5AAkjimg");
	var mask_graphics_259 = new cjs.Graphics().p("EACcAjRMAT7ghIQG3EIB9HxQB6HykHG2QkJG3nwB8QifAniZAAQlGAAkrizg");
	var mask_graphics_260 = new cjs.Graphics().p("EACGAjDMAUoggsQGxERByHzQBwH1kRGwQkRGynzBxQiTAhiNAAQlUAAkyjBg");
	var mask_graphics_261 = new cjs.Graphics().p("EABxAi1MAVSggQQGsEaBnH2QBmH2kaGrQkaGsn1BnQiHAbiBAAQlhAAk5jPg");
	var mask_graphics_262 = new cjs.Graphics().p("EABcAinIV9/zQGlEjBdH3QBcH5kjGlQkjGmn4BcQh5AWh1AAQlwAAk/jdg");
	var mask_graphics_263 = new cjs.Graphics().p("EABHAiYIWn/VQGfEsBTH5QBRH6ksGfQksGgn5BRQhsAShpAAQl+AAlGjsg");
	var mask_graphics_264 = new cjs.Graphics().p("EAAyAiJIXR+3QGZE1BIH7QBGH8k0GYQk1GZn6BHQhgAOhbAAQmOAAlMj7g");
	var mask_graphics_265 = new cjs.Graphics().p("EAAdAh6IX7+YQGSE9A9H9QA8H9k9GSQk9GSn8A9QhSAKhPAAQmdAAlSkKg");
	var mask_graphics_266 = new cjs.Graphics().p("EAAJAhpIYj92QGMFFAyH+QAxH+lFGLQlFGMn9AyQhEAGhCAAQmuAAlXkag");
	var mask_graphics_267 = new cjs.Graphics().p("EgAJAhZIZJ9WQGFFOAoH/QAmH/lNGEQlOGFn+AnQg2AEg0AAQm+AAlbkqg");
	var mask_graphics_268 = new cjs.Graphics().p("EgAdAhIIZx8zQF9FVAdH/QAcIAlVF+QlWF+n/AcQgnACgnAAQnPAAlgk7g");
	var mask_graphics_269 = new cjs.Graphics().p("EgAwAg3IaX8RQF2FeATH/QAQIBldF2QldF3oAARIgxABQnhAAlklMg");
	var mask_graphics_270 = new cjs.Graphics().p("EgBCAglIa77tQFvFlAIIAQAGIBllFvQllFvn/AHIgUAAQn0AAlnleg");
	var mask_graphics_271 = new cjs.Graphics().p("EAMTAmDQoBgElnlsIbh7JQFnFtgDIAQgEIBltFnQlpFkn5AAIgKAAg");
	var mask_graphics_272 = new cjs.Graphics().p("EAL5AmDQoBgPlfl0IcF6jQFgF0gOIAQgQIAlzFgQlmFSnmAAIgoAAg");
	var mask_graphics_273 = new cjs.Graphics().p("EALfAmCQoAgalXl7Icn59QFYF7gYIAQgaIAl7FXQliFBnUAAQgiAAgjgBg");
	var mask_graphics_274 = new cjs.Graphics().p("EALFAmAQoAgklPmCIdK5XQFQGDgjH/QglH/mCFPQleEwnCAAQgwAAgxgDg");
	var mask_graphics_275 = new cjs.Graphics().p("EAKrAl+Qn/gvlGmJIdr4vQFIGJguH+QgwH/mJFHQlZEgmxAAQg+AAg/gGg");
	var mask_graphics_276 = new cjs.Graphics().p("EAKRAl7Qn9g5k/mQIeM4HQFAGQg5H9Qg6H9mQE/QlUEQmhAAQhLAAhNgJg");
	var mask_graphics_277 = new cjs.Graphics().p("EAJ3Al4Qn8hEk2mXIes3eQE3GXhDH8QhFH7mWE3QlPEAmSAAQhXAAhbgMg");
	var mask_graphics_278 = new cjs.Graphics().p("EAJeAl0Qn7hPkumdIfL21QEvGehOH6QhPH6mdEuQlJDxmCAAQhkAAhogQg");
	var mask_graphics_279 = new cjs.Graphics().p("EAJEAlwQn5hZklmkIfp2LQEmGkhYH4QhaH5mjElQlDDil0AAQhwAAh1gUg");
	var mask_graphics_280 = new cjs.Graphics().p("EAIqAlrQn3hkkcmpMAgHgVgQEdGphjH3QhlH2mpEdQk8DTllAAQh9AAiCgZg");
	var mask_graphics_281 = new cjs.Graphics().p("EAIRAllQn1hukTmvMAgjgU1QEUGvhuH1QhvH0mvEUQk1DGlXAAQiJAAiOggg");
	var mask_graphics_282 = new cjs.Graphics().p("EAH4AlfQnzh4kKm1MAg+gUJQELG1h4HyQh5Hym1ELQktC4lKAAQiVAAiagmg");
	var mask_graphics_283 = new cjs.Graphics().p("EAHeAlZQnuiDkCm7MAhYgTcQECG7iCHvQiEHvm6ECQkmCrk9AAQigAAingsg");
	var mask_graphics_284 = new cjs.Graphics().p("EAHFAlSQnsiNj4nAMAhygSwQD4HAiMHtQiOHsnAD4QkeCfkvAAQitAAiygzg");
	var mask_graphics_285 = new cjs.Graphics().p("EAGtAlLQnpiYjvnFMAiKgSCQDvHFiWHqQiZHpnEDvQkWCSkjAAQi4AAi9g6g");
	var mask_graphics_286 = new cjs.Graphics().p("EAGUAlDQnmiijlnKMAiigRUQDlHKigHmQijHmnKDlQkNCHkWAAQjEAAjIhCg");
	var mask_graphics_287 = new cjs.Graphics().p("EAF7Ak6QniisjcnOMAi5gQmQDcHPirHjQitHinODcQkEB7kKAAQjQAAjThLg");
	var mask_graphics_288 = new cjs.Graphics().p("EAFjAkxQnfi2jSnTMAjPgP2QDSHTi1HfQi3HfnSDRQj7Bxj+AAQjbAAjehUg");
	var mask_graphics_289 = new cjs.Graphics().p("EAFLAkoQnbjAjInXMAjjgPIQDJHYi/HbQjBHbnXDIQjxBmjyAAQjnAAjohdg");
	var mask_graphics_290 = new cjs.Graphics().p("EAEzAkeQnXjKi+nbMAj3gOYQC/HcjJHXQjLHXnbC+QjnBcjmAAQjzAAjyhng");
	var mask_graphics_291 = new cjs.Graphics().p("EAEbAkUQnSjUi0nfMAkKgNoQC0HgjTHTQjUHSnfC0QjdBTjaAAQj/AAj8hxg");
	var mask_graphics_292 = new cjs.Graphics().p("EAEEAkJQnOjeiqnjMAkcgM2QCqHjjdHOQjeHOniCqQjTBKjOAAQkMAAkEh8g");
	var mask_graphics_293 = new cjs.Graphics().p("EADtAj9QnJjnignmMAksgMGQCgHnjmHJQjoHJnmCgQjHBCjDAAQkYAAkNiIg");
	var mask_graphics_294 = new cjs.Graphics().p("EADWAjyQnEjxiWnqMAk8gLUQCWHqjwHEQjxHFnpCVQi9A6i3AAQkkAAkWiTg");
	var mask_graphics_295 = new cjs.Graphics().p("EAC/AjlQm/j6iLnsMAlKgKjQCMHtj5G/Qj7G/nsCMQixAyirAAQkyAAkeigg");
	var mask_graphics_296 = new cjs.Graphics().p("EACpAjZQm6kEiBnvMAlYgJxQCCHwkDG6QkEG6nvCBQilArigAAQk+AAkmisg");
	var mask_graphics_297 = new cjs.Graphics().p("EACTAjLQm0kMh3nyMAllgI/QB3HykMG1QkNG0nyB3QiZAliUAAQlLAAkui6g");
	var mask_graphics_298 = new cjs.Graphics().p("EAB9Ai+QmukWhtn0MAlwgIMQBtH0kVGvQkWGvn0BsQiNAfiIAAQlZAAk1jHg");
	var mask_graphics_299 = new cjs.Graphics().p("EABnAiwQmokehin3MAl7gHZQBiH2keGpQkfGpn2BiQiBAZh7AAQloAAk8jVg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(149).to({graphics:mask_graphics_149,x:201.9,y:193.2}).wait(1).to({graphics:mask_graphics_150,x:202.1,y:191.9}).wait(1).to({graphics:mask_graphics_151,x:202.3,y:190.7}).wait(1).to({graphics:mask_graphics_152,x:202.5,y:189.4}).wait(1).to({graphics:mask_graphics_153,x:202.6,y:188.1}).wait(1).to({graphics:mask_graphics_154,x:202.8,y:186.8}).wait(1).to({graphics:mask_graphics_155,x:202.9,y:185.5}).wait(1).to({graphics:mask_graphics_156,x:202.9,y:184.2}).wait(1).to({graphics:mask_graphics_157,x:203,y:182.9}).wait(1).to({graphics:mask_graphics_158,x:203,y:181.6}).wait(1).to({graphics:mask_graphics_159,x:203,y:182.9}).wait(1).to({graphics:mask_graphics_160,x:203,y:184.2}).wait(1).to({graphics:mask_graphics_161,x:203,y:185.5}).wait(1).to({graphics:mask_graphics_162,x:203,y:186.8}).wait(1).to({graphics:mask_graphics_163,x:203,y:188.1}).wait(1).to({graphics:mask_graphics_164,x:203.1,y:189.3}).wait(1).to({graphics:mask_graphics_165,x:203.1,y:190.6}).wait(1).to({graphics:mask_graphics_166,x:203.1,y:191.9}).wait(1).to({graphics:mask_graphics_167,x:203.1,y:193.2}).wait(1).to({graphics:mask_graphics_168,x:203.1,y:194.4}).wait(1).to({graphics:mask_graphics_169,x:203.2,y:195.7}).wait(1).to({graphics:mask_graphics_170,x:203.2,y:197}).wait(1).to({graphics:mask_graphics_171,x:203.2,y:198.2}).wait(1).to({graphics:mask_graphics_172,x:203.2,y:199.4}).wait(1).to({graphics:mask_graphics_173,x:203.2,y:200.7}).wait(1).to({graphics:mask_graphics_174,x:203.2,y:201.9}).wait(1).to({graphics:mask_graphics_175,x:203.2,y:203.1}).wait(1).to({graphics:mask_graphics_176,x:203.2,y:204.3}).wait(1).to({graphics:mask_graphics_177,x:203.2,y:205.5}).wait(1).to({graphics:mask_graphics_178,x:203.2,y:206.7}).wait(1).to({graphics:mask_graphics_179,x:203.2,y:207.9}).wait(1).to({graphics:mask_graphics_180,x:203.2,y:209}).wait(1).to({graphics:mask_graphics_181,x:203.2,y:210.2}).wait(1).to({graphics:mask_graphics_182,x:203.2,y:211.3}).wait(1).to({graphics:mask_graphics_183,x:203.2,y:212.5}).wait(1).to({graphics:mask_graphics_184,x:203.2,y:213.6}).wait(1).to({graphics:mask_graphics_185,x:203.2,y:214.7}).wait(1).to({graphics:mask_graphics_186,x:203.2,y:215.8}).wait(1).to({graphics:mask_graphics_187,x:203.2,y:216.8}).wait(1).to({graphics:mask_graphics_188,x:203.1,y:217.9}).wait(1).to({graphics:mask_graphics_189,x:203.1,y:218.9}).wait(1).to({graphics:mask_graphics_190,x:203.1,y:219.9}).wait(1).to({graphics:mask_graphics_191,x:203.1,y:221}).wait(1).to({graphics:mask_graphics_192,x:203.1,y:221.9}).wait(1).to({graphics:mask_graphics_193,x:203.1,y:222.9}).wait(1).to({graphics:mask_graphics_194,x:203.1,y:223.9}).wait(1).to({graphics:mask_graphics_195,x:203.1,y:224.8}).wait(1).to({graphics:mask_graphics_196,x:203.1,y:225.7}).wait(1).to({graphics:mask_graphics_197,x:203.1,y:226.6}).wait(1).to({graphics:mask_graphics_198,x:203.1,y:227.5}).wait(1).to({graphics:mask_graphics_199,x:203.1,y:228.3}).wait(1).to({graphics:mask_graphics_200,x:203.1,y:229.2}).wait(1).to({graphics:mask_graphics_201,x:203.2,y:230}).wait(1).to({graphics:mask_graphics_202,x:203.2,y:230.8}).wait(1).to({graphics:mask_graphics_203,x:203.2,y:231.6}).wait(1).to({graphics:mask_graphics_204,x:203.2,y:232.3}).wait(1).to({graphics:mask_graphics_205,x:203.2,y:233}).wait(1).to({graphics:mask_graphics_206,x:203.2,y:233.8}).wait(1).to({graphics:mask_graphics_207,x:203.3,y:234.4}).wait(1).to({graphics:mask_graphics_208,x:203.3,y:235.1}).wait(1).to({graphics:mask_graphics_209,x:203.3,y:235.7}).wait(1).to({graphics:mask_graphics_210,x:203.3,y:236.3}).wait(1).to({graphics:mask_graphics_211,x:203.3,y:236.9}).wait(1).to({graphics:mask_graphics_212,x:203.3,y:237.5}).wait(1).to({graphics:mask_graphics_213,x:203.3,y:238}).wait(1).to({graphics:mask_graphics_214,x:203.3,y:238.6}).wait(1).to({graphics:mask_graphics_215,x:203.3,y:239.1}).wait(1).to({graphics:mask_graphics_216,x:203.3,y:239.5}).wait(1).to({graphics:mask_graphics_217,x:203.3,y:240}).wait(1).to({graphics:mask_graphics_218,x:203.3,y:240.4}).wait(1).to({graphics:mask_graphics_219,x:203.3,y:240.8}).wait(1).to({graphics:mask_graphics_220,x:203.3,y:241.1}).wait(1).to({graphics:mask_graphics_221,x:203.3,y:241.5}).wait(1).to({graphics:mask_graphics_222,x:203.3,y:241.8}).wait(1).to({graphics:mask_graphics_223,x:203.3,y:242.1}).wait(1).to({graphics:mask_graphics_224,x:203.3,y:242.3}).wait(1).to({graphics:mask_graphics_225,x:203.2,y:242.6}).wait(1).to({graphics:mask_graphics_226,x:203.2,y:242.8}).wait(1).to({graphics:mask_graphics_227,x:203.2,y:242.9}).wait(1).to({graphics:mask_graphics_228,x:203.2,y:243.1}).wait(1).to({graphics:mask_graphics_229,x:203.2,y:243.2}).wait(1).to({graphics:mask_graphics_230,x:203.2,y:243.3}).wait(1).to({graphics:mask_graphics_231,x:203.2,y:243.4}).wait(1).to({graphics:mask_graphics_232,x:203.2,y:243.4}).wait(1).to({graphics:mask_graphics_233,x:203.2,y:243.5}).wait(1).to({graphics:mask_graphics_234,x:203.2,y:243.5}).wait(1).to({graphics:mask_graphics_235,x:203.2,y:243.5}).wait(1).to({graphics:mask_graphics_236,x:203.2,y:243.5}).wait(1).to({graphics:mask_graphics_237,x:203.2,y:243.5}).wait(1).to({graphics:mask_graphics_238,x:203.2,y:243.5}).wait(1).to({graphics:mask_graphics_239,x:203.2,y:243.5}).wait(1).to({graphics:mask_graphics_240,x:203.2,y:243.5}).wait(1).to({graphics:mask_graphics_241,x:203.3,y:243.6}).wait(1).to({graphics:mask_graphics_242,x:203.3,y:243.6}).wait(1).to({graphics:mask_graphics_243,x:203.3,y:243.6}).wait(1).to({graphics:mask_graphics_244,x:203.3,y:243.6}).wait(1).to({graphics:mask_graphics_245,x:203.3,y:243.6}).wait(1).to({graphics:mask_graphics_246,x:203.3,y:243.6}).wait(1).to({graphics:mask_graphics_247,x:203.4,y:243.6}).wait(1).to({graphics:mask_graphics_248,x:203.4,y:243.7}).wait(1).to({graphics:mask_graphics_249,x:203.4,y:243.7}).wait(1).to({graphics:mask_graphics_250,x:203.4,y:243.7}).wait(1).to({graphics:mask_graphics_251,x:203.4,y:243.7}).wait(1).to({graphics:mask_graphics_252,x:203.4,y:243.7}).wait(1).to({graphics:mask_graphics_253,x:203.4,y:243.7}).wait(1).to({graphics:mask_graphics_254,x:203.4,y:243.7}).wait(1).to({graphics:mask_graphics_255,x:203.4,y:243.7}).wait(1).to({graphics:mask_graphics_256,x:203.4,y:243.7}).wait(1).to({graphics:mask_graphics_257,x:203.4,y:243.7}).wait(1).to({graphics:mask_graphics_258,x:203.4,y:243.6}).wait(1).to({graphics:mask_graphics_259,x:203.3,y:243.6}).wait(1).to({graphics:mask_graphics_260,x:203.3,y:243.6}).wait(1).to({graphics:mask_graphics_261,x:203.3,y:243.6}).wait(1).to({graphics:mask_graphics_262,x:203.3,y:243.6}).wait(1).to({graphics:mask_graphics_263,x:203.3,y:243.6}).wait(1).to({graphics:mask_graphics_264,x:203.3,y:243.6}).wait(1).to({graphics:mask_graphics_265,x:203.3,y:243.6}).wait(1).to({graphics:mask_graphics_266,x:203.3,y:243.5}).wait(1).to({graphics:mask_graphics_267,x:203.2,y:243.5}).wait(1).to({graphics:mask_graphics_268,x:203.2,y:243.5}).wait(1).to({graphics:mask_graphics_269,x:203.2,y:243.5}).wait(1).to({graphics:mask_graphics_270,x:203.2,y:243.5}).wait(1).to({graphics:mask_graphics_271,x:203.2,y:243.5}).wait(1).to({graphics:mask_graphics_272,x:203.2,y:243.5}).wait(1).to({graphics:mask_graphics_273,x:203.2,y:243.5}).wait(1).to({graphics:mask_graphics_274,x:203.2,y:243.5}).wait(1).to({graphics:mask_graphics_275,x:203.3,y:243.6}).wait(1).to({graphics:mask_graphics_276,x:203.3,y:243.6}).wait(1).to({graphics:mask_graphics_277,x:203.3,y:243.6}).wait(1).to({graphics:mask_graphics_278,x:203.3,y:243.6}).wait(1).to({graphics:mask_graphics_279,x:203.3,y:243.6}).wait(1).to({graphics:mask_graphics_280,x:203.3,y:243.6}).wait(1).to({graphics:mask_graphics_281,x:203.3,y:243.7}).wait(1).to({graphics:mask_graphics_282,x:203.4,y:243.7}).wait(1).to({graphics:mask_graphics_283,x:203.4,y:243.7}).wait(1).to({graphics:mask_graphics_284,x:203.4,y:243.7}).wait(1).to({graphics:mask_graphics_285,x:203.4,y:243.7}).wait(1).to({graphics:mask_graphics_286,x:203.4,y:243.7}).wait(1).to({graphics:mask_graphics_287,x:203.4,y:243.7}).wait(1).to({graphics:mask_graphics_288,x:203.4,y:243.7}).wait(1).to({graphics:mask_graphics_289,x:203.4,y:243.7}).wait(1).to({graphics:mask_graphics_290,x:203.4,y:243.7}).wait(1).to({graphics:mask_graphics_291,x:203.4,y:243.7}).wait(1).to({graphics:mask_graphics_292,x:203.4,y:243.7}).wait(1).to({graphics:mask_graphics_293,x:203.4,y:243.7}).wait(1).to({graphics:mask_graphics_294,x:203.4,y:243.7}).wait(1).to({graphics:mask_graphics_295,x:203.3,y:243.7}).wait(1).to({graphics:mask_graphics_296,x:203.3,y:243.7}).wait(1).to({graphics:mask_graphics_297,x:203.3,y:243.7}).wait(1).to({graphics:mask_graphics_298,x:203.3,y:243.7}).wait(1).to({graphics:mask_graphics_299,x:203.3,y:243.7}).wait(1));

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(25,1,1).p("AGqngQABACAAADAG2mUQADAjABAlQAAAKAAAKQAAFIjgDpQjfDok8AAQg+AAg6gI");
	this.shape_3.setTransform(307.6,397.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(25,0,1).p("ALwEuIALBIAr4HDQABg/AJg8QAmjyCvi1QDgjpE8AAQE8AADgDpQCkCqAsDe");
	this.shape_4.setTransform(275.1,319.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(25,1,1).p("ALsinQAQBRAABWQAAFJjgDpQjgDok8AAQg9AAg6gIQjwgli1i7QjfjpAAlJQAAlIDfjpQDgjoE8AAQE8AADgDoQClCrArDfg");
	this.shape_5.setTransform(275.4,365.8);

	var maskedShapeInstanceList = [this.shape_3,this.shape_4,this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},149).to({state:[{t:this.shape_5}]},61).wait(90));

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("EgBQAgbQlrlrAAoBMAmrAAAQAAIBlqFrQlsFqoAAAQoBAAlplqg");
	var mask_1_graphics_1 = new cjs.Graphics().p("EAMCAmFQoBgLlilxQlklyALoAMAmqAAxQgLIAlxFkQloFZnuAAIgcAAg");
	var mask_1_graphics_2 = new cjs.Graphics().p("EALqAmEQoBgVlal4Qldl5AVoAMAmoABiQgUIAl4FdQllFIncAAIg4gBg");
	var mask_1_graphics_3 = new cjs.Graphics().p("EALSAmCQoAgelTl/QlVmAAfn/MAmmACTQgfH/l/FVQlhE4nLAAQgpAAgqgDg");
	var mask_1_graphics_4 = new cjs.Graphics().p("EAK6AmBQn/gplLmGQlOmGApn/MAmjADEQgpH/mFFNQldEom7AAQg2AAg4gEg");
	var mask_1_graphics_5 = new cjs.Graphics().p("EAKjAl+Qn/gylDmMQlFmOAyn+MAmfAD1QgzH+mMFGQlYEYmsAAQhCAAhFgHg");
	var mask_1_graphics_6 = new cjs.Graphics().p("EAKMAl8Qn+g9k7mTQk+mTA9n9MAmZAEmQg9H9mSE9QlTEJmcAAQhPAAhSgJg");
	var mask_1_graphics_7 = new cjs.Graphics().p("EAJ1Al4Qn8hHk0mYQk1maBHn8MAmTAFXQhHH7mZE2QlND6mOAAQhbAAhfgNg");
	var mask_1_graphics_8 = new cjs.Graphics().p("EAJeAl0Qn6hRkrmeQktmgBQn6MAmMAGHQhRH6mfEtQlIDtl/AAQhnAAhsgSg");
	var mask_1_graphics_9 = new cjs.Graphics().p("EAJIAlwQn4hbkjmkQklmmBbn4MAmDAG3QhbH4mlElQlCDflxAAQhzAAh4gWg");
	var mask_1_graphics_10 = new cjs.Graphics().p("EAIzAlsQn3hlkbmrQkcmrBkn2MAl6AHnQhkH2mrEdQk7DRlkAAQh/AAiDgag");
	var mask_1_graphics_11 = new cjs.Graphics().p("EAIdAlmQn1hvkSmvQkUmxBvn1MAlwAIYQhvH0mwEUQk1DElWAAQiKAAiQggg");
	var mask_1_graphics_12 = new cjs.Graphics().p("EAIIAlhQnzh5kJm1QkLm3B4nyMAllAJIQh5Hym1ELQkuC3lJAAQiWAAibglg");
	var mask_1_graphics_13 = new cjs.Graphics().p("EAHzAlbQnwiDkBm6QkCm8CCnwMAlZAJ3QiDHwm6EDQknCqk9AAQigAAingrg");
	var mask_1_graphics_14 = new cjs.Graphics().p("EAHfAlUQntiNj5m/Qj5nACMntMAlMAKmQiNHtm/D6QkfCekxABQisAAixgzg");
	var mask_1_graphics_15 = new cjs.Graphics().p("EAHLAlNQnqiWjwnFQjxnFCXnqMAk9ALVQiWHqnEDxQkXCUklAAQi3AAi8g6g");
	var mask_1_graphics_16 = new cjs.Graphics().p("EAG3AlFQnmigjnnIQjonKCgnnMAkvAMEQigHmnJDoQkPCJkZAAQjCAAjHhCg");
	var mask_1_graphics_17 = new cjs.Graphics().p("EAGkAk9QnjipjenNQjfnPCpnkMAkgAMzQiqHjnNDfQkHB+kNAAQjNAAjRhKg");
	var mask_1_graphics_18 = new cjs.Graphics().p("EAGRAk1QngizjVnSQjVnTCzngMAkOANhQizHgnSDWQj9BzkBAAQjZAAjbhSg");
	var mask_1_graphics_19 = new cjs.Graphics().p("EAF+AksQnci8jLnWQjMnXC8ndMAj9AOPQi8HcnXDNQj0Bpj2AAQjkAAjlhbg");
	var mask_1_graphics_20 = new cjs.Graphics().p("EAFsAkjQnYjGjCnaQjDnbDGnYMAjqAO7QjGHZnaDDQjrBgjqAAQjvAAjvhkg");
	var mask_1_graphics_21 = new cjs.Graphics().p("EAFaAkZQnUjPi4ndQi6nfDQnVMAjWAPpQjPHVneC5QjhBXjfAAQj7AAj4hug");
	var mask_1_graphics_22 = new cjs.Graphics().p("EAFJAkPQnQjYivnhQiwnjDZnQMAjCAQVQjYHRnhCwQjYBOjUAAQkGAAkBh4g");
	var mask_1_graphics_23 = new cjs.Graphics().p("EAE4AkFQnLjiimnkQimnmDinMMAitARBQjiHNnkCmQjOBGjIAAQkSAAkKiCg");
	var mask_1_graphics_24 = new cjs.Graphics().p("EAEoAj6QnHjricnoQidnpDrnHMAiYARtQjrHInoCdQjDA+i9AAQkeAAkSiNg");
	var mask_1_graphics_25 = new cjs.Graphics().p("EAEYAjuQnCj0iTnqQiSnsDznDMAiBASZQj0HDnrCTQi4A3iyAAQkqAAkaiZg");
	var mask_1_graphics_26 = new cjs.Graphics().p("EAEIAjjQm9j9iJnuQiInuD8m+MAhpATEQj9G+nuCJQitAwinAAQk2AAkiikg");
	var mask_1_graphics_27 = new cjs.Graphics().p("EAD5AjWQm4kFh/nwQh/nxEFm5MAhRATuQkGG5nwB/QiiApicAAQlDAAkpiwg");
	var mask_1_graphics_28 = new cjs.Graphics().p("EADrAjKQmzkOh1nzQh1n0EOmzMAg2AUYQkOG0nzB1QiWAjiQAAQlQAAkwi8g");
	var mask_1_graphics_29 = new cjs.Graphics().p("EADcAi9QmtkXhrn1Qhrn2EWmuMAgdAVCQkXGun1BsQiLAdiFAAQldAAk3jJg");
	var mask_1_graphics_30 = new cjs.Graphics().p("EADPAivQmokfhhn3Qhin4EgmoMAgBAVrQkfGon3BiQh/AYh5AAQlrAAk9jXg");
	var mask_1_graphics_31 = new cjs.Graphics().p("EADCAiiQmjkohXn5QhXn5EnmjIfmWTQkoGjn5BYQhyAThuAAQl4AAlDjkg");
	var mask_1_graphics_32 = new cjs.Graphics().p("EAC1AiTQmckwhNn6QhOn7EwmdIfJW7QkwGdn7BOQhlAPhiAAQmHAAlJjzg");
	var mask_1_graphics_33 = new cjs.Graphics().p("EACpAiFQmXk4hDn8QhDn9E4mWIerXiQk3GWn9BEQhZAMhWAAQmUAAlPkBg");
	var mask_1_graphics_34 = new cjs.Graphics().p("EACdAh2QmQlAg5n9Qg5n+FAmRIeNYJQlAGRn9A5QhMAJhKAAQmkAAlUkQg");
	var mask_1_graphics_35 = new cjs.Graphics().p("EACRAhmQmJlIgvn9Qgvn/FImKIduYuQlIGKn+AwQg/AFg9AAQmzABlakgg");
	var mask_1_graphics_36 = new cjs.Graphics().p("EACHAhXQmDlQgln/QgloAFPmDIdPZUQlPGDoAAmQgxADgwAAQnEAAldkug");
	var mask_1_graphics_37 = new cjs.Graphics().p("EAB8AhGQl8lXgan/QgboBFWl8IcvZ4QlXF9oAAcQgkABgjAAQnUAAlik/g");
	var mask_1_graphics_38 = new cjs.Graphics().p("EABzAg2Ql2lfgQn/QgRoCFel1IcOadQlfF1oAASIgrAAQnmAAlllPg");
	var mask_1_graphics_39 = new cjs.Graphics().p("EABpAglQlulmgGoAQgGoBFklvIbsbAQlmFvoAAHIgPAAQn4AAlplgg");
	var mask_1_graphics_40 = new cjs.Graphics().p("EAPJAmFQoBgFlnlsQlnluADoAQAEoBFslnIbJbjQlqFkn6AAIgJAAg");
	var mask_1_graphics_41 = new cjs.Graphics().p("EAO5AmFQoBgPlgl0Qlfl0AOoAQAOoBFzlgIamcFQlnFTnpAAIglAAg");
	var mask_1_graphics_42 = new cjs.Graphics().p("EAOpAmEQoAgZlYl7QlZl7AZoAQAYoAF6lZIaCcmQljFDnYAAIhBgBg");
	var mask_1_graphics_43 = new cjs.Graphics().p("EAOaAmCQoAgjlRmBQlQmCAin/QAioAGBlSIZddIQleEynHAAQguAAgugDg");
	var mask_1_graphics_44 = new cjs.Graphics().p("EAOLAmAQn/gtlJmIQlJmJAsn+QAtn/GHlKIY4dnQlaEjm3AAQg6AAg8gFg");
	var mask_1_graphics_45 = new cjs.Graphics().p("EAN8Al+Qn+g4lBmOQlBmPA2n9QA3n/GNlBIYTeGQlWEUmnAAQhHAAhJgIg");
	var mask_1_graphics_46 = new cjs.Graphics().p("EANtAl7Qn8hCk6mUQk5mWBAn8QBBn9GUk6IXselQlREFmYAAQhTAAhWgLg");
	var mask_1_graphics_47 = new cjs.Graphics().p("EANfAl3Qn8hLkxmbQkxmcBLn6QBKn8GbkyIXEfDQlLD2mJAAQhgAAhigPg");
	var mask_1_graphics_48 = new cjs.Graphics().p("EANQAlzQn5hVkqmhQkomiBUn5QBVn6GgkpIWdffQlFDol7AAQhrAAhwgTg");
	var mask_1_graphics_49 = new cjs.Graphics().p("EANCAlvQn4hgkhmmQkgmoBfn3QBen4GmkhIV1f7Qk/DaltAAQh3AAh8gXg");
	var mask_1_graphics_50 = new cjs.Graphics().p("EAM0AlqQn2hqkYmsQkYmtBpn1QBon2GskZMAVMAgWQk5DNlgAAQiCAAiIgcg");
	var mask_1_graphics_51 = new cjs.Graphics().p("EAMnAllQn0h0kQmyQkPmyBynzQBzn0GxkRMAUjAgxQkzDAlSAAQiOAAiTghg");
	var mask_1_graphics_52 = new cjs.Graphics().p("EAMZAlfQnxh+kHm3QkHm4B8nwQB8nyG3kHMAT5AhKQkrCzlGAAQiZAAifgng");
	var mask_1_graphics_53 = new cjs.Graphics().p("EAMMAlZQnviIj+m8Qj+m9CGnuQCFnvG9j/MATOAhjQkjCok5AAQilAAiqgug");
	var mask_1_graphics_54 = new cjs.Graphics().p("EAL/AlSQnsiRj1nBQj2nCCQnsQCQnsHBj2MASkAh7QkcCcktAAQiwAAi1g1g");
	var mask_1_graphics_55 = new cjs.Graphics().p("EALyAlLQnpibjsnGQjsnHCZnoQCZnqHHjtMAR4AiTQkUCQkhAAQi7AAjAg8g");
	var mask_1_graphics_56 = new cjs.Graphics().p("EALmAlDQnmiljjnKQjknMCknlQCinmHLjkMARNAipQkMCFkVAAQjGAAjKhEg");
	var mask_1_graphics_57 = new cjs.Graphics().p("EALaAk7QnjiujanPQjanQCtniQCsnjHPjbMAQhAi+QkDB7kJAAQjRAAjVhMg");
	var mask_1_graphics_58 = new cjs.Graphics().p("EALOAkyQnfi3jRnUQjRnUC1neQC3nfHUjSMAP0AjTQj7Bwj9AAQjcAAjfhVg");
	var mask_1_graphics_59 = new cjs.Graphics().p("EALCAkpQnbjBjInXQjHnYC/nbQDAncHYjIMAPGAjmQjxBnjyAAQjnAAjpheg");
	var mask_1_graphics_60 = new cjs.Graphics().p("EAK3AkgQnXjLi/nbQi+ncDInWQDKnYHci/MAOZAj5QjoBdjmAAQjzAAjyhng");
	var mask_1_graphics_61 = new cjs.Graphics().p("EAKsAkWQnTjUi1nfQi1nfDSnTQDTnUHfi1MANsAkLQjeBUjcAAQj+AAj7hxg");
	var mask_1_graphics_62 = new cjs.Graphics().p("EAKhAkMQnPjdirnjQirnjDanOQDdnQHiirMAM+AkbQjUBMjQAAQkKAAkEh7g");
	var mask_1_graphics_63 = new cjs.Graphics().p("EAKXAkBQnLjmiinmQihnmDknKQDlnLHmiiMAMPAkrQjJBEjFAAQkWAAkMiGg");
	var mask_1_graphics_64 = new cjs.Graphics().p("EAKMAj2QnFjviZnpQiXnqDtnFQDunGHpiZMALhAk7Qi/A8i6AAQkiAAkViRg");
	var mask_1_graphics_65 = new cjs.Graphics().p("EAKDAjqQnBj4iPnrQiOntD2nAQD3nCHsiPMAKyAlJQi0A0ivAAQkuAAkcicg");
	var mask_1_graphics_66 = new cjs.Graphics().p("EAJ5AjeQm8kBiFnuQiEnvD/m8QEAm8HviFMAKCAlWQipAtikAAQk6AAkkiog");
	var mask_1_graphics_67 = new cjs.Graphics().p("EAJwAjSQm3kKh7nwQh6nyEHm3QEJm3Hxh6MAJTAlhQieAniYAAQlHAAkri0g");
	var mask_1_graphics_68 = new cjs.Graphics().p("EAJnAjFQmykShxnzQhwn0EQmxQERmzH0hwMAIjAltQiSAhiNAAQlUAAkyjBg");
	var mask_1_graphics_69 = new cjs.Graphics().p("EAJeAi4Qmskbhnn1Qhmn2EYmsQEamsH2hnMAHzAl3QiHAciBAAQlhAAk5jOg");
	var mask_1_graphics_70 = new cjs.Graphics().p("EAJWAirQmmkkhen3Qhcn4EhmmQEimnH4hcMAHDAmAQh7AXh2AAQluAAk/jbg");
	var mask_1_graphics_71 = new cjs.Graphics().p("EAJOAidQmhkshTn5QhTn6EqmgQErmhH5hTMAGTAmJQhuAThrAAQl7AAlGjpg");
	var mask_1_graphics_72 = new cjs.Graphics().p("EAJGAiOQmakzhJn7QhKn8EymaQE0mbH7hIMAFiAmQQhiAOheAAQmKAAlMj3g");
	var mask_1_graphics_73 = new cjs.Graphics().p("EAI/AiAQmUk8hAn8Qg/n9E6mUQE8mVH8g+MAEyAmXQhVAKhTAAQmYAAlRkFg");
	var mask_1_graphics_74 = new cjs.Graphics().p("EAI4AhwQmOlDg1n9Qg1n/FCmNQFDmPH+g0MAEBAmcQhJAIhGAAQmnAAlWkVg");
	var mask_1_graphics_75 = new cjs.Graphics().p("EAIxAhhQmHlMgrn+Qgrn/FKmHQFLmIH+gqMADQAmhQg6AFg6AAQm3AAlbkkg");
	var mask_1_graphics_76 = new cjs.Graphics().p("EAIrAhRQmBlTghn/QghoAFSmAQFTmBH/ghMACfAmlQgtADgtAAQnHAAlfk0g");
	var mask_1_graphics_77 = new cjs.Graphics().p("EAIkAhBQl5lbgXoAQgXoAFZl6QFbl5IAgXMABuAmnIg/ACQnYAAlklEg");
	var mask_1_graphics_78 = new cjs.Graphics().p("EAIfAgwQlzligNoAQgMoBFglyQFilzIAgNMAA+AmpIgkABQnpAAlnlVg");
	var mask_1_graphics_79 = new cjs.Graphics().p("EAIZAgfQlrlqgDn/QgCoBFolsQFplsIAgCMAAMAmqIgHAAQn7AAlrlmg");
	var mask_1_graphics_80 = new cjs.Graphics().p("EAICAgOQlklxAHoAQAIoBFvlkQFwllIBAIMgAlAmpQoBgHlllvg");
	var mask_1_graphics_81 = new cjs.Graphics().p("AHlf8Qldl4ASn/QARoBF3ldQF3ldIAASMgBWAmoQoAgSlel2g");
	var mask_1_graphics_82 = new cjs.Graphics().p("AHIfrQlWl/Acn/QAcoAF9lWQF+lVIAAcMgCHAmmQn/gclXl9g");
	var mask_1_graphics_83 = new cjs.Graphics().p("AGsfZQlOmFAmn/QAmn/GElOQGElOH/AmMgC4AmjQn+gmlPmEg");
	var mask_1_graphics_84 = new cjs.Graphics().p("AGPfHQlGmMAxn9QAwn/GKlGQGLlGH+AwMgDoAmfQn+gwlImLg");
	var mask_1_graphics_85 = new cjs.Graphics().p("AF0e1Qk+mSA6n8QA6n+GRk+QGSk+H9A6MgEaAmZQn9g6k/mRg");
	var mask_1_graphics_86 = new cjs.Graphics().p("AFZejQk3mYBFn7QBEn8GXk3QGYk2H8BEMgFKAmUQn8hEk3mYg");
	var mask_1_graphics_87 = new cjs.Graphics().p("AE+eSQkumfBOn6QBPn6GdkvQGekuH6BPMgF7AmMQn6hOkvmdg");
	var mask_1_graphics_88 = new cjs.Graphics().p("AEjeAQkkmlBXn4QBYn5GjkmQGkkmH5BZMgGrAmEQn5hYknmjg");
	var mask_1_graphics_89 = new cjs.Graphics().p("AEJduQkcmrBhn2QBjn3GokeQGqkdH3BiMgHbAl8Qn3hjkfmog");
	var mask_1_graphics_90 = new cjs.Graphics().p("ADwdcQkUmwBrn0QBtn2GukVQGvkVH1BsMgILAlyQn1hskWmug");
	var mask_1_graphics_91 = new cjs.Graphics().p("ADXdJQkLm1B1nyQB2nzG0kMQG1kMHyB1MgI7AloQnzh3kNm0g");
	var mask_1_graphics_92 = new cjs.Graphics().p("AC+c3QkCm6B/nvQCAnxG5kEQG6kDHwB/MgJrAlcQnwiAkFm6g");
	var mask_1_graphics_93 = new cjs.Graphics().p("ACmclQj6m/CJntQCKnuG+j7QG/j7HuCJMgKaAlPQnuiJj8m/g");
	var mask_1_graphics_94 = new cjs.Graphics().p("ACPcTQjxnECSnqQCUnrHDjyQHEjyHrCSMgLKAlCQnqiUjznDg");
	var mask_1_graphics_95 = new cjs.Graphics().p("AB3cBQjnnJCcnnQCdnoHIjpQHJjpHnCcMgL4AkzQnnidjrnIg");
	var mask_1_graphics_96 = new cjs.Graphics().p("ABhbvQjfnNCmnkQCnnlHMjgQHNjgHlCmMgMnAkjQnkinjhnMg");
	var mask_1_graphics_97 = new cjs.Graphics().p("ABLbdQjWnSCwngQCwniHRjXQHRjWHhCvMgNUAkTQnhiwjYnRg");
	var mask_1_graphics_98 = new cjs.Graphics().p("AA1bLQjMnWC5ndQC6neHVjNQHWjOHdC5MgODAkCQndi6jPnVg");
	var mask_1_graphics_99 = new cjs.Graphics().p("AAga5QjDnaDDnZQDDnaHZjFQHajDHZDCMgOwAjvQnajDjFnZg");
	var mask_1_graphics_100 = new cjs.Graphics().p("AAManQi6neDMnVQDNnWHci7QHei6HVDLMgPdAjdQnVjNi8ndg");
	var mask_1_graphics_101 = new cjs.Graphics().p("AgHaVQixnhDVnRQDWnSHgiyQHhixHSDVMgQKAjIQnSjWixngg");
	var mask_1_graphics_102 = new cjs.Graphics().p("AgbaDQinnlDenMQDgnOHjioQHlinHNDeMgQ3AizQnNjfionkg");
	var mask_1_graphics_103 = new cjs.Graphics().p("AgtZxQienoDnnIQDpnJHmieQHoieHJDnMgRjAieQnIjpienng");
	var mask_1_graphics_104 = new cjs.Graphics().p("AhAZgQiUnrDwnEQDynEHqiVQHriUHEDwMgSOAiHQnEjxiVnqg");
	var mask_1_graphics_105 = new cjs.Graphics().p("AhRZOQiLnuD5m+QD7nAHsiLQHuiKG/D5MgS5AhvQm/j6iKntg");
	var mask_1_graphics_106 = new cjs.Graphics().p("AhiY8QiBnwECm6QEDm6HviBQHxiBG6ECMgTjAhXQm6kDiBnwg");
	var mask_1_graphics_107 = new cjs.Graphics().p("AhzYrQh2nzEKm0QEMm2Hyh3QHzh3G0ELMgUNAg+Qm1kMh3nyg");
	var mask_1_graphics_108 = new cjs.Graphics().p("AiDYZQhsn1ETmvQEUmvH0huQH2htGvEUMgU3AgjQmukUhvn1g");
	var mask_1_graphics_109 = new cjs.Graphics().p("AiSYIQhjn3EcmqQEdmqH2hjQH3hjGqEcMgVgAgIQmpkchkn3g");
	var mask_1_graphics_110 = new cjs.Graphics().p("AihX3QhYn5EkmkQElmkH4haQH5haGkEmI2IfsQmjklhbn4g");
	var mask_1_graphics_111 = new cjs.Graphics().p("AivXmQhOn7EsmeQEumeH5hQQH7hQGeEuI2wfQQmdkthRn6g");
	var mask_1_graphics_112 = new cjs.Graphics().p("Ai8XVQhFn8E1mYQE2mZH7hFQH8hGGYE2I3YezQmXk2hGn7g");
	var mask_1_graphics_113 = new cjs.Graphics().p("AjJXEQg6n+E8mRQE+mSH8g8QH+g7GSE9I3/eVQmRk9g8n9g");
	var mask_1_graphics_114 = new cjs.Graphics().p("AjVWzQgwn+FEmLQFGmMH9gyQH/gxGLFFI4kd3QmLlGgyn+g");
	var mask_1_graphics_115 = new cjs.Graphics().p("AjhWjQgmoAFMmEQFOmGH+gnQIAgnGFFNI5LdXQmElOgon+g");
	var mask_1_graphics_116 = new cjs.Graphics().p("AjrWSQgdoAFUl+QFVl+H/gdQIBgeF+FVI5vc3Ql+lVgdoAg");
	var mask_1_graphics_117 = new cjs.Graphics().p("Aj2WCQgSoBFcl3QFcl3IAgTQIBgTF3FcI6TcVQl3lcgUoAg");
	var mask_1_graphics_118 = new cjs.Graphics().p("Aj/VyQgIoBFilwQFllxH/gJQIBgJFxFkI63b0QlwlkgJoAg");
	var mask_1_graphics_119 = new cjs.Graphics().p("AkIViQACoBFqlpQFrlqIAACQIBABFqFrI7abRQlplrABoAg");
	var mask_1_graphics_120 = new cjs.Graphics().p("AkQVSQAMoBFxlhQFzljH/AMQIBALFiFyI78avQlhlzALoAg");
	var mask_1_graphics_121 = new cjs.Graphics().p("AkYVDQAXoBF3laQF6lbH/AWQIBAVFbF5I8eaLQlal6AVn/g");
	var mask_1_graphics_122 = new cjs.Graphics().p("AkfUzQAhoAF+lSQGBlUH/AgQIAAgFTGAI8/ZmQlSmAAfoAg");
	var mask_1_graphics_123 = new cjs.Graphics().p("AklUkQArn/GFlLQGHlMH+AqQH/AqFMGGI9eZBQlLmGApn/g");
	var mask_1_graphics_124 = new cjs.Graphics().p("AkrUVQA1n+GMlDQGNlEH+A0QH+A0FEGNI99YbQlEmNAzn+g");
	var mask_1_graphics_125 = new cjs.Graphics().p("AkwUGQA/n9GTk7QGTk8H8A+QH+A+E7GTI+bX1Qk8mTA9n9g");
	var mask_1_graphics_126 = new cjs.Graphics().p("Ak0T3QBJn7GZkzQGZk0H7BIQH8BIE0GaI+6XNQkzmZBHn8g");
	var mask_1_graphics_127 = new cjs.Graphics().p("Ak3TpQBTn6GekrQGgksH5BSQH7BTErGfI/XWnQkrmgBSn6g");
	var mask_1_graphics_128 = new cjs.Graphics().p("Ak6TbQBdn4GkkjQGmkkH3BcQH5BdEjGlI/zV+QkjmlBcn4g");
	var mask_1_graphics_129 = new cjs.Graphics().p("Ak9TNQBon2GpkbQGskbH1BmQH3BnEbGrMggOAVVQkbmrBln2g");
	var mask_1_graphics_130 = new cjs.Graphics().p("Ak+S/QBxn0GvkSQGxkSH0BwQH0BwETGxMggpAUsQkSmxBvn0g");
	var mask_1_graphics_131 = new cjs.Graphics().p("Ak/SyQB7nyG1kJQG2kKHxB6QHyB6EKG2MghDAUDQkJm2B5nyg");
	var mask_1_graphics_132 = new cjs.Graphics().p("Ak/SkQCFnvG6kAQG7kBHvCDQHvCEEBG7MghbATZQkBm7CDnwg");
	var mask_1_graphics_133 = new cjs.Graphics().p("Ak/SYQCPntG/j4QHAj4HsCNQHtCOD4HAMgh0ASuQj4nACNnsg");
	var mask_1_graphics_134 = new cjs.Graphics().p("Ak9SLQCYnqHEjvQHFjvHpCXQHqCYDvHFMgiLASDQjvnGCXnpg");
	var mask_1_graphics_135 = new cjs.Graphics().p("Ak8R+QCjnmHIjmQHKjmHmChQHnChDmHJMgiiARYQjmnKCgnng");
	var mask_1_graphics_136 = new cjs.Graphics().p("Ak5RyQCsnjHMjdQHPjdHiCqQHkCrDdHOMgi3AQsQjdnPCqnjg");
	var mask_1_graphics_137 = new cjs.Graphics().p("Ak2RmQC1ngHRjTQHTjUHfC0QHhC0DTHTMgjMAP+QjTnSCzngg");
	var mask_1_graphics_138 = new cjs.Graphics().p("AkyRaQC/ncHVjKQHXjKHbC9QHdC+DKHWMgjfAPSQjLnWC9ndg");
	var mask_1_graphics_139 = new cjs.Graphics().p("AktRPQDInYHZjBQHbjBHXDHQHZDHDBHaMgjzAOlQjBnbDHnYg");
	var mask_1_graphics_140 = new cjs.Graphics().p("AkoREQDRnUHdi4QHfi3HTDQQHVDQC4HeMgkFAN3Qi4neDQnUg");
	var mask_1_graphics_141 = new cjs.Graphics().p("AkiQ5QDbnQHgiuQHiiuHPDZQHRDaCuHiMgkWANJQiuniDZnQg");
	var mask_1_graphics_142 = new cjs.Graphics().p("AkcQvQDknMHkikQHlilHLDjQHMDjClHlMgkmAMaQilnlDinLg");
	var mask_1_graphics_143 = new cjs.Graphics().p("AkUQkQDtnGHmibQHpibHGDrQHIDsCbHpMgk2ALsQianpDrnHg");
	var mask_1_graphics_144 = new cjs.Graphics().p("AkMQaQD2nCHpiRQHsiRHBD0QHDD1CRHsMglDAK9QiRnrD0nDg");
	var mask_1_graphics_145 = new cjs.Graphics().p("AkEQRQD/m9HsiIQHviHG9D9QG9D+CIHuMglRAKOQiInuD9m9g");
	var mask_1_graphics_146 = new cjs.Graphics().p("Aj6QHQEGm4Hwh9QHxh+G4EGQG4EHB+HxMgleAJeQh9nwEGm5g");
	var mask_1_graphics_147 = new cjs.Graphics().p("AjxP+QEQmyHyh0QHzh0GzEPQGzEPB0HzMglpAIvQh0nzEOmzg");
	var mask_1_graphics_148 = new cjs.Graphics().p("AjmP2QEYmuH0hpQH2hqGtEXQGuEYBpH1MglzAH/Qhqn1EXmtg");
	var mask_1_graphics_149 = new cjs.Graphics().p("AjbPtQEgmoH3hfQH4hgGnEfQGoEhBgH3Mgl9AHPQhgn3Efmog");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:203.2,y:243.7}).wait(1).to({graphics:mask_1_graphics_1,x:203.2,y:243.7}).wait(1).to({graphics:mask_1_graphics_2,x:203.1,y:243.7}).wait(1).to({graphics:mask_1_graphics_3,x:203.1,y:243.7}).wait(1).to({graphics:mask_1_graphics_4,x:203,y:243.7}).wait(1).to({graphics:mask_1_graphics_5,x:202.9,y:243.7}).wait(1).to({graphics:mask_1_graphics_6,x:202.7,y:243.7}).wait(1).to({graphics:mask_1_graphics_7,x:202.6,y:243.7}).wait(1).to({graphics:mask_1_graphics_8,x:202.4,y:243.8}).wait(1).to({graphics:mask_1_graphics_9,x:202.2,y:243.8}).wait(1).to({graphics:mask_1_graphics_10,x:201.9,y:243.8}).wait(1).to({graphics:mask_1_graphics_11,x:201.7,y:243.8}).wait(1).to({graphics:mask_1_graphics_12,x:201.4,y:243.8}).wait(1).to({graphics:mask_1_graphics_13,x:201.1,y:243.8}).wait(1).to({graphics:mask_1_graphics_14,x:200.8,y:243.9}).wait(1).to({graphics:mask_1_graphics_15,x:200.4,y:243.9}).wait(1).to({graphics:mask_1_graphics_16,x:200.1,y:243.9}).wait(1).to({graphics:mask_1_graphics_17,x:199.7,y:243.9}).wait(1).to({graphics:mask_1_graphics_18,x:199.2,y:243.9}).wait(1).to({graphics:mask_1_graphics_19,x:198.8,y:243.9}).wait(1).to({graphics:mask_1_graphics_20,x:198.3,y:243.9}).wait(1).to({graphics:mask_1_graphics_21,x:197.8,y:243.9}).wait(1).to({graphics:mask_1_graphics_22,x:197.3,y:243.9}).wait(1).to({graphics:mask_1_graphics_23,x:196.8,y:243.9}).wait(1).to({graphics:mask_1_graphics_24,x:196.3,y:243.9}).wait(1).to({graphics:mask_1_graphics_25,x:195.7,y:243.9}).wait(1).to({graphics:mask_1_graphics_26,x:195.1,y:243.9}).wait(1).to({graphics:mask_1_graphics_27,x:194.5,y:243.8}).wait(1).to({graphics:mask_1_graphics_28,x:193.8,y:243.8}).wait(1).to({graphics:mask_1_graphics_29,x:193.2,y:243.8}).wait(1).to({graphics:mask_1_graphics_30,x:192.5,y:243.8}).wait(1).to({graphics:mask_1_graphics_31,x:191.8,y:243.8}).wait(1).to({graphics:mask_1_graphics_32,x:191.1,y:243.8}).wait(1).to({graphics:mask_1_graphics_33,x:190.3,y:243.8}).wait(1).to({graphics:mask_1_graphics_34,x:189.6,y:243.8}).wait(1).to({graphics:mask_1_graphics_35,x:188.8,y:243.7}).wait(1).to({graphics:mask_1_graphics_36,x:188,y:243.7}).wait(1).to({graphics:mask_1_graphics_37,x:187.2,y:243.7}).wait(1).to({graphics:mask_1_graphics_38,x:186.4,y:243.7}).wait(1).to({graphics:mask_1_graphics_39,x:185.5,y:243.7}).wait(1).to({graphics:mask_1_graphics_40,x:184.6,y:243.7}).wait(1).to({graphics:mask_1_graphics_41,x:183.8,y:243.7}).wait(1).to({graphics:mask_1_graphics_42,x:182.9,y:243.7}).wait(1).to({graphics:mask_1_graphics_43,x:181.9,y:243.7}).wait(1).to({graphics:mask_1_graphics_44,x:181,y:243.7}).wait(1).to({graphics:mask_1_graphics_45,x:180.1,y:243.8}).wait(1).to({graphics:mask_1_graphics_46,x:179.1,y:243.8}).wait(1).to({graphics:mask_1_graphics_47,x:178.1,y:243.8}).wait(1).to({graphics:mask_1_graphics_48,x:177.1,y:243.8}).wait(1).to({graphics:mask_1_graphics_49,x:176.1,y:243.8}).wait(1).to({graphics:mask_1_graphics_50,x:175.1,y:243.8}).wait(1).to({graphics:mask_1_graphics_51,x:174.1,y:243.8}).wait(1).to({graphics:mask_1_graphics_52,x:173,y:243.8}).wait(1).to({graphics:mask_1_graphics_53,x:171.9,y:243.9}).wait(1).to({graphics:mask_1_graphics_54,x:170.9,y:243.9}).wait(1).to({graphics:mask_1_graphics_55,x:169.8,y:243.9}).wait(1).to({graphics:mask_1_graphics_56,x:168.7,y:243.9}).wait(1).to({graphics:mask_1_graphics_57,x:167.6,y:243.9}).wait(1).to({graphics:mask_1_graphics_58,x:166.5,y:243.9}).wait(1).to({graphics:mask_1_graphics_59,x:165.3,y:243.9}).wait(1).to({graphics:mask_1_graphics_60,x:164.2,y:243.9}).wait(1).to({graphics:mask_1_graphics_61,x:163.1,y:243.9}).wait(1).to({graphics:mask_1_graphics_62,x:161.9,y:243.9}).wait(1).to({graphics:mask_1_graphics_63,x:160.7,y:243.9}).wait(1).to({graphics:mask_1_graphics_64,x:159.6,y:243.9}).wait(1).to({graphics:mask_1_graphics_65,x:158.4,y:243.8}).wait(1).to({graphics:mask_1_graphics_66,x:157.2,y:243.8}).wait(1).to({graphics:mask_1_graphics_67,x:156,y:243.8}).wait(1).to({graphics:mask_1_graphics_68,x:154.8,y:243.8}).wait(1).to({graphics:mask_1_graphics_69,x:153.6,y:243.8}).wait(1).to({graphics:mask_1_graphics_70,x:152.4,y:243.8}).wait(1).to({graphics:mask_1_graphics_71,x:151.2,y:243.8}).wait(1).to({graphics:mask_1_graphics_72,x:150,y:243.7}).wait(1).to({graphics:mask_1_graphics_73,x:148.8,y:243.7}).wait(1).to({graphics:mask_1_graphics_74,x:147.6,y:243.7}).wait(1).to({graphics:mask_1_graphics_75,x:146.3,y:243.7}).wait(1).to({graphics:mask_1_graphics_76,x:145.1,y:243.7}).wait(1).to({graphics:mask_1_graphics_77,x:143.9,y:243.7}).wait(1).to({graphics:mask_1_graphics_78,x:142.7,y:243.7}).wait(1).to({graphics:mask_1_graphics_79,x:141.4,y:243.7}).wait(1).to({graphics:mask_1_graphics_80,x:142.1,y:243.6}).wait(1).to({graphics:mask_1_graphics_81,x:143.3,y:243.6}).wait(1).to({graphics:mask_1_graphics_82,x:144.5,y:243.6}).wait(1).to({graphics:mask_1_graphics_83,x:145.7,y:243.5}).wait(1).to({graphics:mask_1_graphics_84,x:146.9,y:243.4}).wait(1).to({graphics:mask_1_graphics_85,x:148.2,y:243.2}).wait(1).to({graphics:mask_1_graphics_86,x:149.4,y:243.1}).wait(1).to({graphics:mask_1_graphics_87,x:150.6,y:242.9}).wait(1).to({graphics:mask_1_graphics_88,x:151.8,y:242.7}).wait(1).to({graphics:mask_1_graphics_89,x:153,y:242.5}).wait(1).to({graphics:mask_1_graphics_90,x:154.2,y:242.2}).wait(1).to({graphics:mask_1_graphics_91,x:155.4,y:242}).wait(1).to({graphics:mask_1_graphics_92,x:156.6,y:241.7}).wait(1).to({graphics:mask_1_graphics_93,x:157.8,y:241.3}).wait(1).to({graphics:mask_1_graphics_94,x:159,y:241}).wait(1).to({graphics:mask_1_graphics_95,x:160.1,y:240.6}).wait(1).to({graphics:mask_1_graphics_96,x:161.3,y:240.2}).wait(1).to({graphics:mask_1_graphics_97,x:162.4,y:239.8}).wait(1).to({graphics:mask_1_graphics_98,x:163.6,y:239.4}).wait(1).to({graphics:mask_1_graphics_99,x:164.7,y:238.9}).wait(1).to({graphics:mask_1_graphics_100,x:165.8,y:238.5}).wait(1).to({graphics:mask_1_graphics_101,x:167,y:237.9}).wait(1).to({graphics:mask_1_graphics_102,x:168.1,y:237.4}).wait(1).to({graphics:mask_1_graphics_103,x:169.2,y:236.9}).wait(1).to({graphics:mask_1_graphics_104,x:170.3,y:236.3}).wait(1).to({graphics:mask_1_graphics_105,x:171.3,y:235.7}).wait(1).to({graphics:mask_1_graphics_106,x:172.4,y:235.1}).wait(1).to({graphics:mask_1_graphics_107,x:173.4,y:234.5}).wait(1).to({graphics:mask_1_graphics_108,x:174.5,y:233.8}).wait(1).to({graphics:mask_1_graphics_109,x:175.5,y:233.1}).wait(1).to({graphics:mask_1_graphics_110,x:176.5,y:232.4}).wait(1).to({graphics:mask_1_graphics_111,x:177.5,y:231.7}).wait(1).to({graphics:mask_1_graphics_112,x:178.5,y:231}).wait(1).to({graphics:mask_1_graphics_113,x:179.5,y:230.2}).wait(1).to({graphics:mask_1_graphics_114,x:180.4,y:229.5}).wait(1).to({graphics:mask_1_graphics_115,x:181.4,y:228.7}).wait(1).to({graphics:mask_1_graphics_116,x:182.3,y:227.9}).wait(1).to({graphics:mask_1_graphics_117,x:183.2,y:227}).wait(1).to({graphics:mask_1_graphics_118,x:184.1,y:226.2}).wait(1).to({graphics:mask_1_graphics_119,x:185,y:225.3}).wait(1).to({graphics:mask_1_graphics_120,x:185.8,y:224.5}).wait(1).to({graphics:mask_1_graphics_121,x:186.7,y:223.6}).wait(1).to({graphics:mask_1_graphics_122,x:187.5,y:222.7}).wait(1).to({graphics:mask_1_graphics_123,x:188.3,y:221.7}).wait(1).to({graphics:mask_1_graphics_124,x:189.1,y:220.8}).wait(1).to({graphics:mask_1_graphics_125,x:189.8,y:219.8}).wait(1).to({graphics:mask_1_graphics_126,x:190.6,y:218.8}).wait(1).to({graphics:mask_1_graphics_127,x:191.3,y:217.9}).wait(1).to({graphics:mask_1_graphics_128,x:192,y:216.8}).wait(1).to({graphics:mask_1_graphics_129,x:192.7,y:215.8}).wait(1).to({graphics:mask_1_graphics_130,x:193.4,y:214.8}).wait(1).to({graphics:mask_1_graphics_131,x:194,y:213.8}).wait(1).to({graphics:mask_1_graphics_132,x:194.6,y:212.7}).wait(1).to({graphics:mask_1_graphics_133,x:195.2,y:211.6}).wait(1).to({graphics:mask_1_graphics_134,x:195.8,y:210.6}).wait(1).to({graphics:mask_1_graphics_135,x:196.4,y:209.5}).wait(1).to({graphics:mask_1_graphics_136,x:196.9,y:208.4}).wait(1).to({graphics:mask_1_graphics_137,x:197.4,y:207.2}).wait(1).to({graphics:mask_1_graphics_138,x:197.9,y:206.1}).wait(1).to({graphics:mask_1_graphics_139,x:198.4,y:205}).wait(1).to({graphics:mask_1_graphics_140,x:198.9,y:203.8}).wait(1).to({graphics:mask_1_graphics_141,x:199.3,y:202.7}).wait(1).to({graphics:mask_1_graphics_142,x:199.7,y:201.5}).wait(1).to({graphics:mask_1_graphics_143,x:200.1,y:200.4}).wait(1).to({graphics:mask_1_graphics_144,x:200.4,y:199.2}).wait(1).to({graphics:mask_1_graphics_145,x:200.8,y:198}).wait(1).to({graphics:mask_1_graphics_146,x:201.1,y:196.8}).wait(1).to({graphics:mask_1_graphics_147,x:201.4,y:195.6}).wait(1).to({graphics:mask_1_graphics_148,x:201.6,y:194.4}).wait(1).to({graphics:mask_1_graphics_149,x:201.9,y:193.2}).wait(151));

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(25,1,1).p("AppGGQAChAAJg8QAmjxCvi2QDgjoE8AAQEMAADLCo");
	this.shape_6.setTransform(260.7,325.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(25,1,1).p("Ar7GGQABhAAJg8QAmjxCvi2QDgjoE8AAQE8AADgDoQDZDhAHE8");
	this.shape_7.setTransform(275.4,325.4);

	var maskedShapeInstanceList = [this.shape_6,this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6}]}).to({state:[{t:this.shape_7}]},23).wait(277));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(186.5,363.6,148.5,13.3);


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


(lib.honeyflap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.honeybee();
	this.instance.parent = this;
	this.instance.setTransform(22.9,-143.4,0.422,0.422,0,0,0,-36.8,65.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNB8QgPgCgOgFIgSgIIgBgBIgBAAIgCgBIgBgBIgBgBIgBAAIgBgBIgCgBIgBgBIgBgBIgBAAIgBgBIgBgBIgBgBIgBgBIgBAAIgBgBIgBgBIgBgBIgBgBIgBAAIgBgBIgBgBIgBgBIAAgBIgBgBIgBAAIgBgBIgBgBIAAgBIgBgBIgBgBIgBAAIAAgBIgBgBIgBgBIgBgBIAAgBIgBgBIgBAAIAAgBIgBgBIAAgBIgBgBIgBgBIAAgBIgBAAIgBgBIAAgBIgBgBIAAgBIgBgBIAAgBIgBgBIAAAAIgBgBIgBgBIAAgBIAAgBIgBgCIgBgBIgBgCIAAgBIgBgBIAAgBIgBgBIAAgBIgBgBIAAAAIgBgBIAAgBIAAgBIgBgBIAAgBIAAgBIgBgBIAAgBIAAgBIgBAAIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAAAIgBgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIAAgCIgBgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIgBgBIABgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIABgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIABgBIAAgBIABgBIAAgBIABgBIAAgBIABgBIAAgBIABgBIAAgBIABgBIABgBIAAgBIABgBIAAgBIABgBIABgCIAAgBIABgBIABgBIAAgBIABgBIABgBIABgBIAAgBIABgBIABgBIABgBIABgBIABgBIABgBIABgBIAAgCIAEgDIAMgLIAPgKIAOgHIAQgFIAOgDIAPgBQAIgBAIABIARAEIAOAEIAQAHIAEADIABAAIABABIABABIABABIACABIABAAIABABIABABIABABIABABIABAAIABABIABABIABABIABABIABAAIABABIABABIABABIABABIAAAAIACABIAAABIABABIABABIABABIABAAIAAABIABABIABABIABABIAAABIABABIABAAIAAABIABABIABABIABABIAAABIABAAIABABIAAABIABABIAAABIABABIAAABIABABIABAAIAAABIABABIAAABIABABIAAABIABABIAAABIABAAIAAABIABABIAAABIAAABIABABIAAABIABABIAAAAIABABIAAABIABABIAAABIAAABIABABIAAABIAAABIABABIAAAAIAAABIABABIAAABIAAABIABABIAAABIAAABIABABIAAABIAAABIAAAAIAAABIABABIAAABIAAABIABABIAAABIAAABIAAABIAAABIABABIAAAAIAAABIAAABIAAABIAAABIAAABIAAABIABABIAAABIAAABIAAABIAAABIAAABIAAABIABABIAAAAIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIgBABIABABIgBABIAAABIAAABIAAABIAAABIAAABIAAABIgBABIAAABIAAABIAAABIAAABIAAABIgBABIAAABIAAABIgBABIAAABIAAABIAAABIgBABIAAABIAAABIAAABIgBABIAAABIAAABIgBABIAAABIAAABIgBABIAAABIgBABIAAABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIgBABIAAABIgBABIAAABIgBABIgBABIgBABIAAABIgBABIgBABIgBABIAAACIgBABIgBABIgBABIgBABIgBABIgBABIgBABIgBABIgBABIAAABIgQAOQgSAOgWAGQgSAFgRAAIgNgBg");
	this.shape.setTransform(22.8,-144.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-215.3,105.5,83.7);


// stage content:
(lib.writingsuccess_Fontkid_o = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_382 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(382).call(this.frame_382).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(272.6,199.3,0.998,0.998,0,-8,172,22.4,-144);
	this.instance._off = true;

	this.instance_1 = new lib.honeybee();
	this.instance_1.parent = this;
	this.instance_1.setTransform(646.8,56.3,0.421,0.421,0,-8,172,-36.8,65.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance}]},143).to({state:[{t:this.instance}]},21).to({state:[{t:this.instance}]},50).to({state:[{t:this.instance}]},86).to({state:[{t:this.instance}]},13).to({state:[{t:this.instance_1}]},60).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({regY:-143.9,scaleX:1,scaleY:1,guide:{path:[272.6,199.3,238.9,201.4,219.9,223.6,200.9,245.8,200,276.8,199,307.8,221.4,330.9,238.6,348.6,261.3,352.1]}},143).to({regY:-144,scaleX:1,scaleY:1,guide:{path:[261.3,352.1,268.1,353.1,275.4,352.9,279.6,352.8,283.7,352.3]}},21).to({scaleX:1,scaleY:1,guide:{path:[283.7,352.3,309.9,349,328.4,329.8,337.3,320.7,342.5,309.8]}},50).to({scaleX:1,scaleY:1,guide:{path:[342.5,309.8,350,294.3,350.1,275.4,350.3,243.1,328,223,305.7,202.9,278.9,198.7]}},86).wait(13).to({y:195.4},0).to({_off:true,regX:-36.8,regY:65.4,scaleX:0.42,scaleY:0.42,guide:{path:[279,195.5,466.9,241.5,416.3,124.7,391,66.3,448.6,49.4,506.2,32.5,646.7,57]},mode:"independent"},60).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(275,199.7,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},300).wait(74));

	// Layer 11
	this.instance_2 = new lib.ar2("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(271.1,263.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(374));

	// Layer 10
	this.instance_3 = new lib.Symbol1("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(273.2,276,1,0.942,0,-90,90,275.4,364.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).wait(374));

	// Base
	this.instance_4 = new lib.Symbol2("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(275,275);
	this.instance_4.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(383));

	// Background
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F59E9E").ss(3,1,1).p("AMvQ5I5dAAMAAAghxIZdAAg");
	this.shape_1.setTransform(275,275,3.373,2.543);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_2.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(383));

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