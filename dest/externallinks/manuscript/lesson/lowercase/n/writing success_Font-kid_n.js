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
	this.shape.graphics.f("#FFFFFF").s().p("AH3MYIAAwPQAAl6m/AAQjUAAinBjQi1BpAACVIAAQhQAACeioAAQigAAAAiXIAA4sQAAiaCeAAQCeAAAICJQEAiJE4AAQFJAADPCeQDsC5ABFgIAAQPQAACXiuAAQicAAAAiXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.2,-94.2,166.5,188.6);


(lib.mask2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 26 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_200 = new cjs.Graphics().p("ARyS2IAAiuIEkAAIAACug");
	var mask_graphics_201 = new cjs.Graphics().p("AiRBdIAAi5IEjAAIAAC5g");
	var mask_graphics_202 = new cjs.Graphics().p("AiRBkIAAjHIEjAAIAADHg");
	var mask_graphics_203 = new cjs.Graphics().p("AiRBrIAAjVIEjAAIAADVg");
	var mask_graphics_204 = new cjs.Graphics().p("AiRByIAAjiIEjAAIAADig");
	var mask_graphics_205 = new cjs.Graphics().p("AiRB4IAAjvIEiAAIAADvg");
	var mask_graphics_206 = new cjs.Graphics().p("AiRB/IAAj9IEiAAIAAD9g");
	var mask_graphics_207 = new cjs.Graphics().p("AiQCFIAAkJIEhAAIAAEJg");
	var mask_graphics_208 = new cjs.Graphics().p("AiQCMIAAkXIEhAAIAAEXg");
	var mask_graphics_209 = new cjs.Graphics().p("AiQCTIAAklIEhAAIAAElg");
	var mask_graphics_210 = new cjs.Graphics().p("AiQCZIAAkxIEhAAIAAExg");
	var mask_graphics_211 = new cjs.Graphics().p("AiQCgIAAk/IEhAAIAAE/g");
	var mask_graphics_212 = new cjs.Graphics().p("AiQCnIAAlNIEhAAIAAFNg");
	var mask_graphics_213 = new cjs.Graphics().p("AiQCtIAAlZIEhAAIAAFZg");
	var mask_graphics_214 = new cjs.Graphics().p("AiPC0IAAlnIEgAAIAAFng");
	var mask_graphics_215 = new cjs.Graphics().p("AiPC7IAAl1IEfAAIAAF1g");
	var mask_graphics_216 = new cjs.Graphics().p("AiPDBIAAmBIEfAAIAAGBg");
	var mask_graphics_217 = new cjs.Graphics().p("AiPDIIAAmPIEfAAIAAGPg");
	var mask_graphics_218 = new cjs.Graphics().p("AiPDPIAAmdIEfAAIAAGdg");
	var mask_graphics_219 = new cjs.Graphics().p("AiPDVIAAmpIEfAAIAAGpg");
	var mask_graphics_220 = new cjs.Graphics().p("AiPDcIAAm3IEfAAIAAG3g");
	var mask_graphics_221 = new cjs.Graphics().p("AiPDjIAAnFIEfAAIAAHFg");
	var mask_graphics_222 = new cjs.Graphics().p("AiPDpIAAnRIEfAAIAAHRg");
	var mask_graphics_223 = new cjs.Graphics().p("AiODwIAAnfIEdAAIAAHfg");
	var mask_graphics_224 = new cjs.Graphics().p("AiOD2IAAnrIEdAAIAAHrg");
	var mask_graphics_225 = new cjs.Graphics().p("AiOD9IAAn5IEdAAIAAH5g");
	var mask_graphics_226 = new cjs.Graphics().p("AiOEEIAAoHIEdAAIAAIHg");
	var mask_graphics_227 = new cjs.Graphics().p("AiOELIAAoUIEdAAIAAIUg");
	var mask_graphics_228 = new cjs.Graphics().p("AiOERIAAohIEdAAIAAIhg");
	var mask_graphics_229 = new cjs.Graphics().p("AiOEYIAAovIEdAAIAAIvg");
	var mask_graphics_230 = new cjs.Graphics().p("AiOEeIAAo7IEdAAIAAI7g");
	var mask_graphics_231 = new cjs.Graphics().p("AiOElIAApJIEcAAIAAJJg");
	var mask_graphics_232 = new cjs.Graphics().p("AiOEsIAApXIEcAAIAAJXg");
	var mask_graphics_233 = new cjs.Graphics().p("AiNEzIAApkIEbAAIAAJkg");
	var mask_graphics_234 = new cjs.Graphics().p("AiNE5IAApxIEcAAIAAJxg");
	var mask_graphics_235 = new cjs.Graphics().p("AiNFAIAAp/IEbAAIAAJ/g");
	var mask_graphics_236 = new cjs.Graphics().p("AiNFGIAAqLIEbAAIAAKLg");
	var mask_graphics_237 = new cjs.Graphics().p("AiNFNIAAqZIEbAAIAAKZg");
	var mask_graphics_238 = new cjs.Graphics().p("AiNFUIAAqnIEbAAIAAKng");
	var mask_graphics_239 = new cjs.Graphics().p("AiNFbIAAq0IEbAAIAAK0g");
	var mask_graphics_240 = new cjs.Graphics().p("AiNFhIAArBIEbAAIAALBg");
	var mask_graphics_241 = new cjs.Graphics().p("AiNFoIAArPIEbAAIAALPg");
	var mask_graphics_242 = new cjs.Graphics().p("AiMFuIAArbIEZAAIAALbg");
	var mask_graphics_243 = new cjs.Graphics().p("AiMF1IAArpIEZAAIAALpg");
	var mask_graphics_244 = new cjs.Graphics().p("AiMF8IAAr3IEZAAIAAL3g");
	var mask_graphics_245 = new cjs.Graphics().p("AiMGCIAAsDIEZAAIAAMDg");
	var mask_graphics_246 = new cjs.Graphics().p("AiMGJIAAsRIEZAAIAAMRg");
	var mask_graphics_247 = new cjs.Graphics().p("AiMGPIAAseIEZAAIAAMeg");
	var mask_graphics_248 = new cjs.Graphics().p("AiMGWIAAsrIEZAAIAAMrg");
	var mask_graphics_249 = new cjs.Graphics().p("AiMGdIAAs5IEZAAIAAM5g");
	var mask_graphics_250 = new cjs.Graphics().p("AiMGjIAAtGIEZAAIAANGg");
	var mask_graphics_251 = new cjs.Graphics().p("AiMGqIAAtTIEZAAIAANTg");
	var mask_graphics_252 = new cjs.Graphics().p("AiMGxIAAthIEZAAIAANhg");
	var mask_graphics_253 = new cjs.Graphics().p("AiLG4IAAtvIEXAAIAANvg");
	var mask_graphics_254 = new cjs.Graphics().p("AiLG+IAAt7IEXAAIAAN7g");
	var mask_graphics_255 = new cjs.Graphics().p("AiLHFIAAuJIEXAAIAAOJg");
	var mask_graphics_256 = new cjs.Graphics().p("AiLHLIAAuWIEXAAIAAOWg");
	var mask_graphics_257 = new cjs.Graphics().p("AiLHSIAAujIEXAAIAAOjg");
	var mask_graphics_258 = new cjs.Graphics().p("AiLHZIAAuxIEXAAIAAOxg");
	var mask_graphics_259 = new cjs.Graphics().p("AiLHgIAAu/IEXAAIAAO/g");
	var mask_graphics_260 = new cjs.Graphics().p("AiLHmIAAvLIEWAAIAAPLg");
	var mask_graphics_261 = new cjs.Graphics().p("AiKHtIAAvZIEVAAIAAPZg");
	var mask_graphics_262 = new cjs.Graphics().p("AiKHzIAAvmIEVAAIAAPmg");
	var mask_graphics_263 = new cjs.Graphics().p("AiKH6IAAvzIEVAAIAAPzg");
	var mask_graphics_264 = new cjs.Graphics().p("AiKIBIAAwBIEVAAIAAQBg");
	var mask_graphics_265 = new cjs.Graphics().p("AiKIIIAAwPIEVAAIAAQPg");
	var mask_graphics_266 = new cjs.Graphics().p("AiKIOIAAwbIEVAAIAAQbg");
	var mask_graphics_267 = new cjs.Graphics().p("AiKIVIAAwpIEVAAIAAQpg");
	var mask_graphics_268 = new cjs.Graphics().p("AiKIbIAAw2IEVAAIAAQ2g");
	var mask_graphics_269 = new cjs.Graphics().p("AiKIiIAAxDIEVAAIAARDg");
	var mask_graphics_270 = new cjs.Graphics().p("AiJIpIAAxRIETAAIAARRg");
	var mask_graphics_271 = new cjs.Graphics().p("AiJIwIAAxfIETAAIAARfg");
	var mask_graphics_272 = new cjs.Graphics().p("AiJI2IAAxrIETAAIAARrg");
	var mask_graphics_273 = new cjs.Graphics().p("AiJI9IAAx5IETAAIAAR5g");
	var mask_graphics_274 = new cjs.Graphics().p("AiJJDIAAyGIETAAIAASGg");
	var mask_graphics_275 = new cjs.Graphics().p("AiJJKIAAyTIETAAIAASTg");
	var mask_graphics_276 = new cjs.Graphics().p("AiJJRIAAyhIETAAIAAShg");
	var mask_graphics_277 = new cjs.Graphics().p("AiIJXIAAyuIERAAIAASug");
	var mask_graphics_278 = new cjs.Graphics().p("AiIJeIAAy7IERAAIAAS7g");
	var mask_graphics_279 = new cjs.Graphics().p("AiJJlIAAzJIETAAIAATJg");
	var mask_graphics_280 = new cjs.Graphics().p("AiJJsIAAzXIETAAIAATXg");
	var mask_graphics_281 = new cjs.Graphics().p("AiIJyIAAzjIERAAIAATjg");
	var mask_graphics_282 = new cjs.Graphics().p("AiIJ5IAAzxIERAAIAATxg");
	var mask_graphics_283 = new cjs.Graphics().p("AiIJ/IAAz9IERAAIAAT9g");
	var mask_graphics_284 = new cjs.Graphics().p("AiIKGIAA0LIERAAIAAULg");
	var mask_graphics_285 = new cjs.Graphics().p("AiIKNIAA0ZIERAAIAAUZg");
	var mask_graphics_286 = new cjs.Graphics().p("AiHKTIAA0lIEQAAIAAUlg");
	var mask_graphics_287 = new cjs.Graphics().p("AiIKaIAA0zIERAAIAAUzg");
	var mask_graphics_288 = new cjs.Graphics().p("AiIKhIAA1BIEQAAIAAVBg");
	var mask_graphics_289 = new cjs.Graphics().p("AiIKnIAA1NIEQAAIAAVNg");
	var mask_graphics_290 = new cjs.Graphics().p("AiHKuIAA1bIEPAAIAAVbg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(200).to({graphics:mask_graphics_200,x:143,y:120.6}).wait(1).to({graphics:mask_graphics_201,x:271.4,y:233.2}).wait(1).to({graphics:mask_graphics_202,x:271.4,y:233.8}).wait(1).to({graphics:mask_graphics_203,x:271.5,y:234.5}).wait(1).to({graphics:mask_graphics_204,x:271.5,y:235.2}).wait(1).to({graphics:mask_graphics_205,x:271.5,y:235.8}).wait(1).to({graphics:mask_graphics_206,x:271.5,y:236.5}).wait(1).to({graphics:mask_graphics_207,x:271.5,y:237.2}).wait(1).to({graphics:mask_graphics_208,x:271.6,y:237.8}).wait(1).to({graphics:mask_graphics_209,x:271.6,y:238.5}).wait(1).to({graphics:mask_graphics_210,x:271.6,y:239.1}).wait(1).to({graphics:mask_graphics_211,x:271.6,y:239.8}).wait(1).to({graphics:mask_graphics_212,x:271.6,y:240.5}).wait(1).to({graphics:mask_graphics_213,x:271.6,y:241.1}).wait(1).to({graphics:mask_graphics_214,x:271.7,y:241.8}).wait(1).to({graphics:mask_graphics_215,x:271.7,y:242.5}).wait(1).to({graphics:mask_graphics_216,x:271.7,y:243.1}).wait(1).to({graphics:mask_graphics_217,x:271.7,y:243.8}).wait(1).to({graphics:mask_graphics_218,x:271.7,y:244.5}).wait(1).to({graphics:mask_graphics_219,x:271.8,y:245.1}).wait(1).to({graphics:mask_graphics_220,x:271.8,y:245.8}).wait(1).to({graphics:mask_graphics_221,x:271.8,y:246.5}).wait(1).to({graphics:mask_graphics_222,x:271.8,y:247.1}).wait(1).to({graphics:mask_graphics_223,x:271.8,y:247.8}).wait(1).to({graphics:mask_graphics_224,x:271.8,y:248.5}).wait(1).to({graphics:mask_graphics_225,x:271.8,y:249.1}).wait(1).to({graphics:mask_graphics_226,x:271.9,y:249.8}).wait(1).to({graphics:mask_graphics_227,x:271.9,y:250.5}).wait(1).to({graphics:mask_graphics_228,x:271.9,y:251.1}).wait(1).to({graphics:mask_graphics_229,x:271.9,y:251.8}).wait(1).to({graphics:mask_graphics_230,x:271.9,y:252.5}).wait(1).to({graphics:mask_graphics_231,x:272,y:253.1}).wait(1).to({graphics:mask_graphics_232,x:272,y:253.8}).wait(1).to({graphics:mask_graphics_233,x:272,y:254.5}).wait(1).to({graphics:mask_graphics_234,x:272,y:255.1}).wait(1).to({graphics:mask_graphics_235,x:272,y:255.8}).wait(1).to({graphics:mask_graphics_236,x:272,y:256.5}).wait(1).to({graphics:mask_graphics_237,x:272.1,y:257.1}).wait(1).to({graphics:mask_graphics_238,x:272.1,y:257.8}).wait(1).to({graphics:mask_graphics_239,x:272.1,y:258.5}).wait(1).to({graphics:mask_graphics_240,x:272.1,y:259.1}).wait(1).to({graphics:mask_graphics_241,x:272.1,y:259.8}).wait(1).to({graphics:mask_graphics_242,x:272.2,y:260.5}).wait(1).to({graphics:mask_graphics_243,x:272.2,y:261.1}).wait(1).to({graphics:mask_graphics_244,x:272.2,y:261.8}).wait(1).to({graphics:mask_graphics_245,x:272.2,y:262.5}).wait(1).to({graphics:mask_graphics_246,x:272.2,y:263.2}).wait(1).to({graphics:mask_graphics_247,x:272.2,y:263.8}).wait(1).to({graphics:mask_graphics_248,x:272.2,y:264.5}).wait(1).to({graphics:mask_graphics_249,x:272.3,y:265.2}).wait(1).to({graphics:mask_graphics_250,x:272.3,y:265.8}).wait(1).to({graphics:mask_graphics_251,x:272.3,y:266.5}).wait(1).to({graphics:mask_graphics_252,x:272.3,y:267.2}).wait(1).to({graphics:mask_graphics_253,x:272.3,y:267.8}).wait(1).to({graphics:mask_graphics_254,x:272.4,y:268.5}).wait(1).to({graphics:mask_graphics_255,x:272.4,y:269.1}).wait(1).to({graphics:mask_graphics_256,x:272.4,y:269.8}).wait(1).to({graphics:mask_graphics_257,x:272.4,y:270.5}).wait(1).to({graphics:mask_graphics_258,x:272.4,y:271.1}).wait(1).to({graphics:mask_graphics_259,x:272.4,y:271.8}).wait(1).to({graphics:mask_graphics_260,x:272.5,y:272.5}).wait(1).to({graphics:mask_graphics_261,x:272.5,y:273.1}).wait(1).to({graphics:mask_graphics_262,x:272.5,y:273.8}).wait(1).to({graphics:mask_graphics_263,x:272.5,y:274.5}).wait(1).to({graphics:mask_graphics_264,x:272.5,y:275.1}).wait(1).to({graphics:mask_graphics_265,x:272.6,y:275.8}).wait(1).to({graphics:mask_graphics_266,x:272.6,y:276.5}).wait(1).to({graphics:mask_graphics_267,x:272.6,y:277.1}).wait(1).to({graphics:mask_graphics_268,x:272.6,y:277.8}).wait(1).to({graphics:mask_graphics_269,x:272.6,y:278.5}).wait(1).to({graphics:mask_graphics_270,x:272.6,y:279.1}).wait(1).to({graphics:mask_graphics_271,x:272.6,y:279.8}).wait(1).to({graphics:mask_graphics_272,x:272.7,y:280.5}).wait(1).to({graphics:mask_graphics_273,x:272.7,y:281.1}).wait(1).to({graphics:mask_graphics_274,x:272.7,y:281.8}).wait(1).to({graphics:mask_graphics_275,x:272.7,y:282.5}).wait(1).to({graphics:mask_graphics_276,x:272.7,y:283.1}).wait(1).to({graphics:mask_graphics_277,x:272.8,y:283.8}).wait(1).to({graphics:mask_graphics_278,x:272.8,y:284.5}).wait(1).to({graphics:mask_graphics_279,x:272.8,y:285.1}).wait(1).to({graphics:mask_graphics_280,x:272.8,y:285.8}).wait(1).to({graphics:mask_graphics_281,x:272.8,y:286.5}).wait(1).to({graphics:mask_graphics_282,x:272.8,y:287.1}).wait(1).to({graphics:mask_graphics_283,x:272.9,y:287.8}).wait(1).to({graphics:mask_graphics_284,x:272.9,y:288.5}).wait(1).to({graphics:mask_graphics_285,x:272.9,y:289.1}).wait(1).to({graphics:mask_graphics_286,x:272.9,y:289.8}).wait(1).to({graphics:mask_graphics_287,x:272.9,y:290.5}).wait(1).to({graphics:mask_graphics_288,x:273,y:291.1}).wait(1).to({graphics:mask_graphics_289,x:273,y:291.8}).wait(1).to({graphics:mask_graphics_290,x:273,y:292.5}).wait(1));

	// Layer 25
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(25,1,1).p("AqflUQABgJACgGQA4irCVhhQB3hPCygfQGphLDQCfQDECUAJEHIAAPk");
	this.shape.setTransform(205.8,272.2);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(200).to({_off:false},0).wait(91));

	// Layer 24 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_100 = new cjs.Graphics().p("Am1W7QlrlrAAoBMAmrAAAQAAIBlqFrQlsFqoAAAQoAAAlqlqg");
	var mask_1_graphics_101 = new cjs.Graphics().p("AGPckQoAgQlfl1Qlfl2AQoBMAmpABOQgQIAl1FgQlmFPnkAAIgsgBg");
	var mask_1_graphics_102 = new cjs.Graphics().p("AFpciQn/gglTmAQlTmBAgoAMAmmACcQghH/mAFUQlgE1nJAAQgrAAgsgDg");
	var mask_1_graphics_103 = new cjs.Graphics().p("AFEcfQn+gwlHmLQlHmLAwn/MAmgADpQgwH/mLFHQlZEcmvAAQhAAAhBgGg");
	var mask_1_graphics_104 = new cjs.Graphics().p("AEfcaQn8hAk6mUQk6mWBAn8MAmXAE2QhAH8mVE7QlREEmXAAQhUAAhWgLg");
	var mask_1_graphics_105 = new cjs.Graphics().p("AD7cVQn5hRktmeQkumfBQn6MAmMAGDQhQH6meEuQlJDumAAAQhmAAhrgRg");
	var mask_1_graphics_106 = new cjs.Graphics().p("ADYcOQn3hgkfmoQkhmoBgn4MAl/AHQQhgH4moEgQk+DYlrAAQh5AAh+gYg");
	var mask_1_graphics_107 = new cjs.Graphics().p("AC2cGQnzhwkTmwQkTmyBwn0MAlvAIcQhwH0mwETQk1DDlVAAQiLAAiRggg");
	var mask_1_graphics_108 = new cjs.Graphics().p("ACVb8Qnwh/kFm5QkFm6CAnwMAlcAJoQh/Hwm5EFQkpCvlBAAQidAAijgqg");
	var mask_1_graphics_109 = new cjs.Graphics().p("AB1byQnsiPj3nBQj3nCCPnsMAlIAKzQiPHsnBD4QkdCbktAAQivAAi0g0g");
	var mask_1_graphics_110 = new cjs.Graphics().p("ABVbmQnniejonIQjpnKCennMAkxAL9QieHnnIDqQkQCKkbAAQjAAAjGhBg");
	var mask_1_graphics_111 = new cjs.Graphics().p("AA3baQniiujanPQjbnRCuniMAkYANHQitHinQDbQkCB5kIAAQjTAAjVhNg");
	var mask_1_graphics_112 = new cjs.Graphics().p("AAZbMQnci9jLnWQjMnXC9ncMAj8AOPQi8HcnXDNQj0Bpj1AAQjlAAjlhbg");
	var mask_1_graphics_113 = new cjs.Graphics().p("AgCa9QnXjMi9ncQi9ndDMnWMAjfAPXQjMHWncC9QjlBbjkAAQj2AAjzhqg");
	var mask_1_graphics_114 = new cjs.Graphics().p("AgeatQnQjaitniQiunjDanQMAi/AQeQjaHQniCuQjWBNjSAAQkIAAkCh6g");
	var mask_1_graphics_115 = new cjs.Graphics().p("Ag4acQnJjpiennQifnoDpnJMAicARkQjoHJnoCfQjFBAjAAAQkbAAkPiLg");
	var mask_1_graphics_116 = new cjs.Graphics().p("AhRaKQnCj3iPnsQiPntD3nAMAh4ASoQj3HBnsCQQi0AziuAAQkvAAkbicg");
	var mask_1_graphics_117 = new cjs.Graphics().p("AhqZ3Qm5kFh/nwQiAnxEFm5MAhSATsQkFG5nxCAQiiApidAAQlCAAkoivg");
	var mask_1_graphics_118 = new cjs.Graphics().p("AiBZjQmxkThvn0Qhwn1ESmvMAgpAUtQkSGxn0BwQiRAgiKAAQlXAAkzjDg");
	var mask_1_graphics_119 = new cjs.Graphics().p("AiWZOQmpkhhgn3Qhgn4EgmnIf/VvQkgGon4BgQh9AYh4AAQlsAAk9jYg");
	var mask_1_graphics_120 = new cjs.Graphics().p("AirY3QmfkthQn6QhQn7EtmdIfSWuQkuGen6BRQhpARhmAAQmCAAlHjvg");
	var mask_1_graphics_121 = new cjs.Graphics().p("Ai+YgQmWk6hAn8QhAn9E6mUIejXsQk6GVn9BBQhVAKhTAAQmZABlPkGg");
	var mask_1_graphics_122 = new cjs.Graphics().p("AjRYIQmLlHgwn9QgwoAFGmJIdzYpQlHGKn+AxQhBAGg/AAQmxAAlYkdg");
	var mask_1_graphics_123 = new cjs.Graphics().p("AjiXvQmAlTggn/QghoAFTmAIdAZkQlTGBn/AhQgsACgqAAQnLAAlfk2g");
	var mask_1_graphics_124 = new cjs.Graphics().p("AjxXVQl2lfgQoAQgQoBFel1IcMaeQlfF2oAAQIgqABQnmAAlllQg");
	var mask_1_graphics_125 = new cjs.Graphics().p("AkAW6QlqlrAAoAQAAoBFqlpIbWbVQlrFqoBABQoBgBlplqg");
	var mask_1_graphics_126 = new cjs.Graphics().p("AJSckQoBgRlel1Qlfl2AQoAQAQoBF2leIaecMQlmFQnmAAIgqgBg");
	var mask_1_graphics_127 = new cjs.Graphics().p("AI5cjQoAgilRmAQlUmBAgn/QAhoAGAlSIZkdAQlgE2nKAAQgqAAgsgCg");
	var mask_1_graphics_128 = new cjs.Graphics().p("AIhcfQn/gxlFmLQlHmLAwn9QAxn/GKlGIYpdyQlYEdmxAAQg/AAhBgGg");
	var mask_1_graphics_129 = new cjs.Graphics().p("AIKcbQn9hCk5mUQk6mVBAn8QBAn9GVk6IXsejQlREGmYAAQhTAAhVgLg");
	var mask_1_graphics_130 = new cjs.Graphics().p("AHzcVQn6hRktmeQktmfBQn6QBQn6GfktIWufRQlIDvmCAAQhmAAhpgRg");
	var mask_1_graphics_131 = new cjs.Graphics().p("AHccOQn3hhkfmnQkhmpBgn3QBgn3GnkgIVwf/Qk/DYlrAAQh5AAh9gYg");
	var mask_1_graphics_132 = new cjs.Graphics().p("AHGcGQnzhxkSmwQkTmxBvn0QBwn0GwkSMAUvAgpQk0DDlXAAQiKAAiRggg");
	var mask_1_graphics_133 = new cjs.Graphics().p("AGxb9QnwiBkEm4QkFm6B/nwQCAnwG4kFMATsAhSQkpCvlCAAQicAAijgpg");
	var mask_1_graphics_134 = new cjs.Graphics().p("AGcbyQnriQj3nAQj3nCCPnsQCPnrHBj3MASoAh4QkdCdkuAAQiuAAi1g1g");
	var mask_1_graphics_135 = new cjs.Graphics().p("AGIbnQnmigjpnIQjonJCennQCennHIjpMARkAidQkQCLkbAAQjAAAjGhAg");
	var mask_1_graphics_136 = new cjs.Graphics().p("AF1baQnhivjanPQjbnQCuniQCuniHOjaMAQeAi/QkCB6kJAAQjRAAjWhNg");
	var mask_1_graphics_137 = new cjs.Graphics().p("AFibMQnbi9jLnWQjMnXC8ncQC9ncHWjMMAPXAjfQj1Bqj2AAQjjAAjmhbg");
	var mask_1_graphics_138 = new cjs.Graphics().p("AFQa+QnVjNi8ncQi9ndDLnWQDMnWHbi9MAOQAj9QjmBbjkAAQj2AAj0hpg");
	var mask_1_graphics_139 = new cjs.Graphics().p("AE/auQnPjcitniQiuniDanPQDbnQHhitMANHAkYQjWBNjTAAQkIAAkCh5g");
	var mask_1_graphics_140 = new cjs.Graphics().p("AEvadQnIjqiennQifnoDpnIQDpnJHmieMAL9AkxQjFBBjBAAQkbAAkPiKg");
	var mask_1_graphics_141 = new cjs.Graphics().p("AEfaLQnAj5iPnrQiPntD3m/QD2nCHsiPMAKzAlIQi1A0ivAAQkuAAkcibg");
	var mask_1_graphics_142 = new cjs.Graphics().p("AEQZ3Qm4kGiAnvQh/nxEFm4QEEm6Hwh/MAJoAlcQijAqidAAQlCAAkoivg");
	var mask_1_graphics_143 = new cjs.Graphics().p("AECZjQmwkThwn0Qhwn1ETmvQESmxH0hwMAIcAlvQiRAgiLAAQlWAAkzjDg");
	var mask_1_graphics_144 = new cjs.Graphics().p("AD0ZOQmnkhhgn3Qhgn4EgmmQEgmpH3hgMAHQAl/Qh+AYh5AAQlrAAk+jYg");
	var mask_1_graphics_145 = new cjs.Graphics().p("ADnY4QmdkuhQn6QhQn7EtmdQEsmfH7hQMAGDAmMQhrARhmAAQmBAAlIjug");
	var mask_1_graphics_146 = new cjs.Graphics().p("ADcYhQmUk7hAn8QhBn9E5mUQE7mVH8hBMAE3AmXQhXALhTAAQmYAAlQkEg");
	var mask_1_graphics_147 = new cjs.Graphics().p("ADRYJQmKlIgwn+Qgxn+FGmKQFHmLH+gxMADpAmgQhBAGhAAAQmwAAlYkcg");
	var mask_1_graphics_148 = new cjs.Graphics().p("ADGXwQl/lUggn/QggoAFRl/QFUmBH/ggMACcAmlQgtADgrAAQnJAAlgk1g");
	var mask_1_graphics_149 = new cjs.Graphics().p("AC9XWQl0lggQoAQgQoBFdl0QFfl2IBgQMABNAmpIgsABQnkAAlmlPg");
	var mask_1_graphics_150 = new cjs.Graphics().p("AC1W7QlplsAAoAQAAoBFplpQFrlrIAAAMAAAAmrQoAAAlrlqg");
	var mask_1_graphics_151 = new cjs.Graphics().p("ACGWfQldl3AQn/QAQoBF0leQF2lfIAAQMgBNAmpQoBgQlfl1g");
	var mask_1_graphics_152 = new cjs.Graphics().p("ABYWDQlRmBAgn/QAgoAF/lSQGBlTIAAgMgCcAmmQn/ghlUmAg");
	var mask_1_graphics_153 = new cjs.Graphics().p("AAsVnQlFmMAwn9QAwn+GJlHQGMlHH+AwMgDpAmgQn+gwlHmLg");
	var mask_1_graphics_154 = new cjs.Graphics().p("AAAVLQk4mWBAn8QBAn8GTk6QGWk6H9BAMgE3AmXQn8hAk7mVg");
	var mask_1_graphics_155 = new cjs.Graphics().p("AgqUvQksmgBQn6QBQn5GdktQGgkuH6BQMgGDAmMQn7hQktmeg");
	var mask_1_graphics_156 = new cjs.Graphics().p("AhTUSQkgmpBgn3QBhn3GmkfQGpkhH3BgMgHQAl/Qn3hgkgmog");
	var mask_1_graphics_157 = new cjs.Graphics().p("Ah7T2QkSmyBvn0QBwnzGvkTQGykTH0BwMgIcAlvQn0hwkSmwg");
	var mask_1_graphics_158 = new cjs.Graphics().p("AijTZQkEm6B/nwQCAnwG4kFQG6kFHwCAMgJoAlcQnwh/kFm5g");
	var mask_1_graphics_159 = new cjs.Graphics().p("AjJS8Qj2nCCPnrQCPnsHAj3QHCj3HsCPMgKzAlIQnsiPj3nBg");
	var mask_1_graphics_160 = new cjs.Graphics().p("AjtSgQjonKCennQCennHHjoQHKjpHnCeMgL9AkxQnmiejpnIg");
	var mask_1_graphics_161 = new cjs.Graphics().p("AkRSDQjZnRCtnhQCuniHOjaQHQjbHjCuMgNHAkYQnhitjbnQg");
	var mask_1_graphics_162 = new cjs.Graphics().p("AkzRmQjLnXC9ncQC8ncHVjLQHXjMHdC9MgOPAj8Qnci8jMnXg");
	var mask_1_graphics_163 = new cjs.Graphics().p("AlURKQi8ndDLnWQDMnWHbi9QHdi9HXDMMgPXAjfQnWjMi9ncg");
	var mask_1_graphics_164 = new cjs.Graphics().p("Al0QuQisnjDanQQDanPHhitQHjiuHQDaMgQeAi/QnPjaivnig");
	var mask_1_graphics_165 = new cjs.Graphics().p("AmSQRQidnoDonIQDpnIHmieQHoifHJDpMgRkAicQnHjoignog");
	var mask_1_graphics_166 = new cjs.Graphics().p("AmuP1QiOntD2nAQD4nBHqiPQHtiPHBD3MgSoAh4QnAj3iQnsg");
	var mask_1_graphics_167 = new cjs.Graphics().p("AnJPZQh/nxEFm5QEFm4Hvh/QHxiAG5EFMgTsAhSQm4kFiAnxg");
	var mask_1_graphics_168 = new cjs.Graphics().p("AnjO+Qhvn1ESmxQETmwHzhvQH1hwGxESMgUvAgpQmvkShxn0g");
	var mask_1_graphics_169 = new cjs.Graphics().p("An7OiQhfn4EgmnQEgmoH2hgQH4hgGoEgI1wf/Qmmkghhn4g");
	var mask_1_graphics_170 = new cjs.Graphics().p("AoSOHQhPn7EtmdQEumfH4hQQH7hQGfEtI2ufSQmfkuhRn6g");
	var mask_1_graphics_171 = new cjs.Graphics().p("AonNsQg/n9E6mTQE5mWH8hAQH9hAGVE6I3sejQmVk6hBn9g");
	var mask_1_graphics_172 = new cjs.Graphics().p("Ao6NSQgvn/FGmKQFGmLH+gwQH/gwGLFGI4pdzQmLlHgxn+g");
	var mask_1_graphics_173 = new cjs.Graphics().p("ApMM4QgfoAFSmAQFTmAH/ggQIAghGAFTI5kdAQmAlTghn/g");
	var mask_1_graphics_174 = new cjs.Graphics().p("ApcMeQgPoBFel0QFel2IAgQQIBgQF2FeI6ecMQl1lfgRoAg");
	var mask_1_graphics_175 = new cjs.Graphics().p("AprMEQABoBFqlpQFqlqIAAAQIBAAFrFqI7WbWQlqlrgBoBg");
	var mask_1_graphics_176 = new cjs.Graphics().p("Ap4LsQARoBF2leQF1lfH/AQQIBAQFfF2I8LaeQlfl2APoAg");
	var mask_1_graphics_177 = new cjs.Graphics().p("AqDLTQAhoAGAlRQGAlUH/AgQIAAhFTGAI9AZkQlTmAAgoAg");
	var mask_1_graphics_178 = new cjs.Graphics().p("AqNK7QAyn/GKlFQGLlHH9AwQH/AxFHGJI9yYqQlHmKAvn/g");
	var mask_1_graphics_179 = new cjs.Graphics().p("AqUKkQBBn9GUk5QGVk6H8BAQH9BAE6GUI+jXtQk6mVBAn8g");
	var mask_1_graphics_180 = new cjs.Graphics().p("AqbKNQBSn7GeksQGektH6BQQH7BQEtGeI/SWvQktmfBPn6g");
	var mask_1_graphics_181 = new cjs.Graphics().p("AqfJ2QBhn4GnkeQGokhH3BgQH4BgEgGnI/+VwQkhmoBgn4g");
	var mask_1_graphics_182 = new cjs.Graphics().p("AqiJgQBxn0GwkRQGwkTH0BvQH1BwETGwMggpAUvQkTmxBvn1g");
	var mask_1_graphics_183 = new cjs.Graphics().p("AqjJLQCBnxG4kDQG5kFHwB/QHxCAEFG4MghSATsQkFm5B/nxg");
	var mask_1_graphics_184 = new cjs.Graphics().p("AqiI2QCQnsHAj2QHBj3HsCPQHtCPD2HBMgh4ASoQj3nBCPntg");
	var mask_1_graphics_185 = new cjs.Graphics().p("AqgIiQCfnnHJjoQHIjoHnCeQHoCeDpHIMgidARkQjpnJCenog");
	var mask_1_graphics_186 = new cjs.Graphics().p("AqcIPQCvniHPjZQHPjbHiCuQHjCuDaHOMgi/AQeQjanPCtnjg");
	var mask_1_graphics_187 = new cjs.Graphics().p("AqWH8QC+ncHVjKQHWjMHcC8QHeC8DLHXMgjfAPXQjLnXC8ndg");
	var mask_1_graphics_188 = new cjs.Graphics().p("AqPHqQDNnWHbi7QHdi9HWDLQHXDLC9HcMgj9AOQQi9ndDLnXg");
	var mask_1_graphics_189 = new cjs.Graphics().p("AqGHZQDcnQHgisQHjiuHPDaQHRDaCtHiMgkYANHQitnjDZnQg");
	var mask_1_graphics_190 = new cjs.Graphics().p("Ap7HJQDqnJHmidQHoifHIDpQHJDoCfHnMgkyAL9QiennDonJg");
	var mask_1_graphics_191 = new cjs.Graphics().p("ApuG5QD4nAHqiPQHtiPHBD3QHBD2CPHsMglIAKzQiPntD3nBg");
	var mask_1_graphics_192 = new cjs.Graphics().p("ApgGqQEGm4Hvh/QHxiAG4EFQG6EECAHwMgldAJoQiAnxEFm5g");
	var mask_1_graphics_193 = new cjs.Graphics().p("ApQGcQETmwHzhwQH1hwGwESQGxETBwH0MglvAIcQhwn0ETmxg");
	var mask_1_graphics_194 = new cjs.Graphics().p("Ao/GOQEhmnH2hgQH4hgGnEfQGpEhBgH3Mgl/AHQQhgn3Egmpg");
	var mask_1_graphics_195 = new cjs.Graphics().p("AosGBQEumdH5hQQH7hQGeEsQGfEtBQH7MgmMAGDQhQn6Etmgg");
	var mask_1_graphics_196 = new cjs.Graphics().p("AoXF2QE7mUH7hAQH9hBGUE5QGWE7BAH8MgmXAE3QhAn9E6mVg");
	var mask_1_graphics_197 = new cjs.Graphics().p("AoBFrQFImKH8gwQH/gxGKFGQGMFHAwH+MgmfADpQgwn+FGmLg");
	var mask_1_graphics_198 = new cjs.Graphics().p("AnqFgQFVl/H+ggQIAggGAFRQGBFUAgH/MgmmACcQggoAFSmBg");
	var mask_1_graphics_199 = new cjs.Graphics().p("AnQFXQFgl0H+gQQIBgQF1FdQF3FfAQIBMgmqABNQgQoAFfl2g");
	var mask_1_graphics_200 = new cjs.Graphics().p("AsfS6QAAoAFqlsQFrlpH/ABQIBgBFqFpQFrFsAAIAg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(100).to({graphics:mask_1_graphics_100,x:167.5,y:182.9}).wait(1).to({graphics:mask_1_graphics_101,x:167.4,y:182.9}).wait(1).to({graphics:mask_1_graphics_102,x:167.4,y:182.9}).wait(1).to({graphics:mask_1_graphics_103,x:167.2,y:182.9}).wait(1).to({graphics:mask_1_graphics_104,x:167,y:182.9}).wait(1).to({graphics:mask_1_graphics_105,x:166.7,y:183}).wait(1).to({graphics:mask_1_graphics_106,x:166.4,y:183}).wait(1).to({graphics:mask_1_graphics_107,x:166,y:183}).wait(1).to({graphics:mask_1_graphics_108,x:165.5,y:183}).wait(1).to({graphics:mask_1_graphics_109,x:165,y:183}).wait(1).to({graphics:mask_1_graphics_110,x:164.4,y:183.1}).wait(1).to({graphics:mask_1_graphics_111,x:163.8,y:183.1}).wait(1).to({graphics:mask_1_graphics_112,x:163.1,y:183.1}).wait(1).to({graphics:mask_1_graphics_113,x:162.4,y:183.1}).wait(1).to({graphics:mask_1_graphics_114,x:161.6,y:183.1}).wait(1).to({graphics:mask_1_graphics_115,x:160.7,y:183.1}).wait(1).to({graphics:mask_1_graphics_116,x:159.8,y:183}).wait(1).to({graphics:mask_1_graphics_117,x:158.9,y:183}).wait(1).to({graphics:mask_1_graphics_118,x:157.8,y:183}).wait(1).to({graphics:mask_1_graphics_119,x:156.8,y:183}).wait(1).to({graphics:mask_1_graphics_120,x:155.7,y:183}).wait(1).to({graphics:mask_1_graphics_121,x:154.5,y:182.9}).wait(1).to({graphics:mask_1_graphics_122,x:153.3,y:182.9}).wait(1).to({graphics:mask_1_graphics_123,x:152,y:182.9}).wait(1).to({graphics:mask_1_graphics_124,x:150.7,y:182.9}).wait(1).to({graphics:mask_1_graphics_125,x:149.4,y:182.9}).wait(1).to({graphics:mask_1_graphics_126,x:148,y:182.9}).wait(1).to({graphics:mask_1_graphics_127,x:146.5,y:182.9}).wait(1).to({graphics:mask_1_graphics_128,x:145,y:182.9}).wait(1).to({graphics:mask_1_graphics_129,x:143.5,y:183}).wait(1).to({graphics:mask_1_graphics_130,x:142,y:183}).wait(1).to({graphics:mask_1_graphics_131,x:140.4,y:183}).wait(1).to({graphics:mask_1_graphics_132,x:138.8,y:183}).wait(1).to({graphics:mask_1_graphics_133,x:137.1,y:183}).wait(1).to({graphics:mask_1_graphics_134,x:135.4,y:183.1}).wait(1).to({graphics:mask_1_graphics_135,x:133.7,y:183.1}).wait(1).to({graphics:mask_1_graphics_136,x:131.9,y:183.1}).wait(1).to({graphics:mask_1_graphics_137,x:130.2,y:183.1}).wait(1).to({graphics:mask_1_graphics_138,x:128.4,y:183.1}).wait(1).to({graphics:mask_1_graphics_139,x:126.6,y:183.1}).wait(1).to({graphics:mask_1_graphics_140,x:124.7,y:183.1}).wait(1).to({graphics:mask_1_graphics_141,x:122.9,y:183}).wait(1).to({graphics:mask_1_graphics_142,x:121,y:183}).wait(1).to({graphics:mask_1_graphics_143,x:119.1,y:183}).wait(1).to({graphics:mask_1_graphics_144,x:117.2,y:183}).wait(1).to({graphics:mask_1_graphics_145,x:115.3,y:183}).wait(1).to({graphics:mask_1_graphics_146,x:113.4,y:182.9}).wait(1).to({graphics:mask_1_graphics_147,x:111.4,y:182.9}).wait(1).to({graphics:mask_1_graphics_148,x:109.5,y:182.9}).wait(1).to({graphics:mask_1_graphics_149,x:107.5,y:182.9}).wait(1).to({graphics:mask_1_graphics_150,x:105.6,y:182.9}).wait(1).to({graphics:mask_1_graphics_151,x:107.5,y:182.8}).wait(1).to({graphics:mask_1_graphics_152,x:109.5,y:182.8}).wait(1).to({graphics:mask_1_graphics_153,x:111.4,y:182.6}).wait(1).to({graphics:mask_1_graphics_154,x:113.4,y:182.4}).wait(1).to({graphics:mask_1_graphics_155,x:115.3,y:182.1}).wait(1).to({graphics:mask_1_graphics_156,x:117.2,y:181.8}).wait(1).to({graphics:mask_1_graphics_157,x:119.1,y:181.4}).wait(1).to({graphics:mask_1_graphics_158,x:121,y:180.9}).wait(1).to({graphics:mask_1_graphics_159,x:122.9,y:180.4}).wait(1).to({graphics:mask_1_graphics_160,x:124.7,y:179.8}).wait(1).to({graphics:mask_1_graphics_161,x:126.6,y:179.2}).wait(1).to({graphics:mask_1_graphics_162,x:128.4,y:178.5}).wait(1).to({graphics:mask_1_graphics_163,x:130.2,y:177.8}).wait(1).to({graphics:mask_1_graphics_164,x:132,y:177}).wait(1).to({graphics:mask_1_graphics_165,x:133.7,y:176.1}).wait(1).to({graphics:mask_1_graphics_166,x:135.4,y:175.2}).wait(1).to({graphics:mask_1_graphics_167,x:137.1,y:174.3}).wait(1).to({graphics:mask_1_graphics_168,x:138.8,y:173.2}).wait(1).to({graphics:mask_1_graphics_169,x:140.4,y:172.2}).wait(1).to({graphics:mask_1_graphics_170,x:142,y:171.1}).wait(1).to({graphics:mask_1_graphics_171,x:143.5,y:169.9}).wait(1).to({graphics:mask_1_graphics_172,x:145.1,y:168.7}).wait(1).to({graphics:mask_1_graphics_173,x:146.5,y:167.4}).wait(1).to({graphics:mask_1_graphics_174,x:148,y:166.1}).wait(1).to({graphics:mask_1_graphics_175,x:149.4,y:164.8}).wait(1).to({graphics:mask_1_graphics_176,x:150.7,y:163.4}).wait(1).to({graphics:mask_1_graphics_177,x:152,y:161.9}).wait(1).to({graphics:mask_1_graphics_178,x:153.3,y:160.4}).wait(1).to({graphics:mask_1_graphics_179,x:154.5,y:158.9}).wait(1).to({graphics:mask_1_graphics_180,x:155.7,y:157.4}).wait(1).to({graphics:mask_1_graphics_181,x:156.8,y:155.8}).wait(1).to({graphics:mask_1_graphics_182,x:157.9,y:154.2}).wait(1).to({graphics:mask_1_graphics_183,x:158.9,y:152.5}).wait(1).to({graphics:mask_1_graphics_184,x:159.8,y:150.8}).wait(1).to({graphics:mask_1_graphics_185,x:160.8,y:149.1}).wait(1).to({graphics:mask_1_graphics_186,x:161.6,y:147.3}).wait(1).to({graphics:mask_1_graphics_187,x:162.4,y:145.6}).wait(1).to({graphics:mask_1_graphics_188,x:163.2,y:143.8}).wait(1).to({graphics:mask_1_graphics_189,x:163.8,y:142}).wait(1).to({graphics:mask_1_graphics_190,x:164.5,y:140.1}).wait(1).to({graphics:mask_1_graphics_191,x:165,y:138.3}).wait(1).to({graphics:mask_1_graphics_192,x:165.6,y:136.4}).wait(1).to({graphics:mask_1_graphics_193,x:166,y:134.5}).wait(1).to({graphics:mask_1_graphics_194,x:166.4,y:132.6}).wait(1).to({graphics:mask_1_graphics_195,x:166.7,y:130.7}).wait(1).to({graphics:mask_1_graphics_196,x:167,y:128.8}).wait(1).to({graphics:mask_1_graphics_197,x:167.2,y:126.8}).wait(1).to({graphics:mask_1_graphics_198,x:167.4,y:124.9}).wait(1).to({graphics:mask_1_graphics_199,x:167.5,y:122.9}).wait(1).to({graphics:mask_1_graphics_200,x:167.5,y:121}).wait(91));

	// Layer 23
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(25,0,1).p("AqXEMQBXlWGqhKQGphLDQCeQCSBuAjCU");
	this.shape_1.setTransform(204.2,213.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(25,0,1).p("AqjEMQBYlWGqhKQGohLDQCeQDDCTAKDL");
	this.shape_2.setTransform(205.3,213.7);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},100).to({state:[{t:this.shape_2}]},22).wait(169));

	// Layer 22 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("AHTeXIAAitIElAAIAACtg");
	var mask_2_graphics_1 = new cjs.Graphics().p("AiRBdIAAi5IEjAAIAAC5g");
	var mask_2_graphics_2 = new cjs.Graphics().p("AiRBiIAAjDIEjAAIAADDg");
	var mask_2_graphics_3 = new cjs.Graphics().p("AiRBoIAAjPIEjAAIAADPg");
	var mask_2_graphics_4 = new cjs.Graphics().p("AiRBtIAAjZIEjAAIAADZg");
	var mask_2_graphics_5 = new cjs.Graphics().p("AiRBzIAAjlIEjAAIAADlg");
	var mask_2_graphics_6 = new cjs.Graphics().p("AiRB4IAAjvIEjAAIAADvg");
	var mask_2_graphics_7 = new cjs.Graphics().p("AiRB+IAAj7IEjAAIAAD7g");
	var mask_2_graphics_8 = new cjs.Graphics().p("AiRCEIAAkGIEjAAIAAEGg");
	var mask_2_graphics_9 = new cjs.Graphics().p("AiRCJIAAkRIEjAAIAAERg");
	var mask_2_graphics_10 = new cjs.Graphics().p("AiRCPIAAkdIEjAAIAAEdg");
	var mask_2_graphics_11 = new cjs.Graphics().p("AiRCUIAAknIEjAAIAAEng");
	var mask_2_graphics_12 = new cjs.Graphics().p("AiRCaIAAkzIEjAAIAAEzg");
	var mask_2_graphics_13 = new cjs.Graphics().p("AiRCfIAAk9IEjAAIAAE9g");
	var mask_2_graphics_14 = new cjs.Graphics().p("AiRClIAAlJIEjAAIAAFJg");
	var mask_2_graphics_15 = new cjs.Graphics().p("AiRCrIAAlVIEjAAIAAFVg");
	var mask_2_graphics_16 = new cjs.Graphics().p("AiRCwIAAlfIEjAAIAAFfg");
	var mask_2_graphics_17 = new cjs.Graphics().p("AiRC2IAAlrIEjAAIAAFrg");
	var mask_2_graphics_18 = new cjs.Graphics().p("AiRC8IAAl3IEjAAIAAF3g");
	var mask_2_graphics_19 = new cjs.Graphics().p("AiRDBIAAmBIEjAAIAAGBg");
	var mask_2_graphics_20 = new cjs.Graphics().p("AiRDHIAAmNIEjAAIAAGNg");
	var mask_2_graphics_21 = new cjs.Graphics().p("AiRDMIAAmXIEjAAIAAGXg");
	var mask_2_graphics_22 = new cjs.Graphics().p("AiRDSIAAmjIEjAAIAAGjg");
	var mask_2_graphics_23 = new cjs.Graphics().p("AiRDYIAAmvIEjAAIAAGvg");
	var mask_2_graphics_24 = new cjs.Graphics().p("AiRDdIAAm5IEjAAIAAG5g");
	var mask_2_graphics_25 = new cjs.Graphics().p("AiRDiIAAnDIEjAAIAAHDg");
	var mask_2_graphics_26 = new cjs.Graphics().p("AiRDoIAAnPIEjAAIAAHPg");
	var mask_2_graphics_27 = new cjs.Graphics().p("AiRDuIAAnbIEjAAIAAHbg");
	var mask_2_graphics_28 = new cjs.Graphics().p("AiRDzIAAnmIEjAAIAAHmg");
	var mask_2_graphics_29 = new cjs.Graphics().p("AiRD5IAAnxIEjAAIAAHxg");
	var mask_2_graphics_30 = new cjs.Graphics().p("AiRD/IAAn9IEjAAIAAH9g");
	var mask_2_graphics_31 = new cjs.Graphics().p("AiREEIAAoHIEjAAIAAIHg");
	var mask_2_graphics_32 = new cjs.Graphics().p("AiREKIAAoTIEjAAIAAITg");
	var mask_2_graphics_33 = new cjs.Graphics().p("AiREPIAAodIEjAAIAAIdg");
	var mask_2_graphics_34 = new cjs.Graphics().p("AiREVIAAopIEjAAIAAIpg");
	var mask_2_graphics_35 = new cjs.Graphics().p("AiREbIAAo1IEjAAIAAI1g");
	var mask_2_graphics_36 = new cjs.Graphics().p("AiREgIAAo/IEjAAIAAI/g");
	var mask_2_graphics_37 = new cjs.Graphics().p("AiREmIAApLIEjAAIAAJLg");
	var mask_2_graphics_38 = new cjs.Graphics().p("AiRErIAApVIEjAAIAAJVg");
	var mask_2_graphics_39 = new cjs.Graphics().p("AiRExIAAphIEjAAIAAJhg");
	var mask_2_graphics_40 = new cjs.Graphics().p("AiRE2IAApsIEjAAIAAJsg");
	var mask_2_graphics_41 = new cjs.Graphics().p("AiRE8IAAp3IEjAAIAAJ3g");
	var mask_2_graphics_42 = new cjs.Graphics().p("AiRFCIAAqDIEjAAIAAKDg");
	var mask_2_graphics_43 = new cjs.Graphics().p("AiRFIIAAqOIEjAAIAAKOg");
	var mask_2_graphics_44 = new cjs.Graphics().p("AiRFNIAAqZIEjAAIAAKZg");
	var mask_2_graphics_45 = new cjs.Graphics().p("AiRFTIAAqlIEjAAIAAKlg");
	var mask_2_graphics_46 = new cjs.Graphics().p("AiRFYIAAqvIEjAAIAAKvg");
	var mask_2_graphics_47 = new cjs.Graphics().p("AiRFeIAAq7IEjAAIAAK7g");
	var mask_2_graphics_48 = new cjs.Graphics().p("AiRFjIAArFIEjAAIAALFg");
	var mask_2_graphics_49 = new cjs.Graphics().p("AiRFpIAArRIEjAAIAALRg");
	var mask_2_graphics_50 = new cjs.Graphics().p("AiRFuIAArbIEjAAIAALbg");
	var mask_2_graphics_51 = new cjs.Graphics().p("AiRF0IAArnIEjAAIAALng");
	var mask_2_graphics_52 = new cjs.Graphics().p("AiRF6IAArzIEjAAIAALzg");
	var mask_2_graphics_53 = new cjs.Graphics().p("AiRF/IAAr9IEjAAIAAL9g");
	var mask_2_graphics_54 = new cjs.Graphics().p("AiRGFIAAsJIEjAAIAAMJg");
	var mask_2_graphics_55 = new cjs.Graphics().p("AiRGKIAAsTIEjAAIAAMTg");
	var mask_2_graphics_56 = new cjs.Graphics().p("AiRGQIAAsfIEjAAIAAMfg");
	var mask_2_graphics_57 = new cjs.Graphics().p("AiRGVIAAsqIEjAAIAAMqg");
	var mask_2_graphics_58 = new cjs.Graphics().p("AiRGbIAAs1IEjAAIAAM1g");
	var mask_2_graphics_59 = new cjs.Graphics().p("AiRGhIAAtBIEjAAIAANBg");
	var mask_2_graphics_60 = new cjs.Graphics().p("AiRGnIAAtMIEjAAIAANMg");
	var mask_2_graphics_61 = new cjs.Graphics().p("AiRGsIAAtXIEjAAIAANXg");
	var mask_2_graphics_62 = new cjs.Graphics().p("AiRGyIAAtjIEjAAIAANjg");
	var mask_2_graphics_63 = new cjs.Graphics().p("AiRG3IAAttIEjAAIAANtg");
	var mask_2_graphics_64 = new cjs.Graphics().p("AiRG9IAAt5IEjAAIAAN5g");
	var mask_2_graphics_65 = new cjs.Graphics().p("AiRHCIAAuDIEjAAIAAODg");
	var mask_2_graphics_66 = new cjs.Graphics().p("AiRHIIAAuPIEjAAIAAOPg");
	var mask_2_graphics_67 = new cjs.Graphics().p("AiRHOIAAubIEjAAIAAObg");
	var mask_2_graphics_68 = new cjs.Graphics().p("AiRHTIAAulIEjAAIAAOlg");
	var mask_2_graphics_69 = new cjs.Graphics().p("AiRHZIAAuxIEjAAIAAOxg");
	var mask_2_graphics_70 = new cjs.Graphics().p("AiRHeIAAu7IEjAAIAAO7g");
	var mask_2_graphics_71 = new cjs.Graphics().p("AiRHkIAAvHIEjAAIAAPHg");
	var mask_2_graphics_72 = new cjs.Graphics().p("AiRHpIAAvRIEjAAIAAPRg");
	var mask_2_graphics_73 = new cjs.Graphics().p("AiRHvIAAvdIEjAAIAAPdg");
	var mask_2_graphics_74 = new cjs.Graphics().p("AiRH1IAAvpIEjAAIAAPpg");
	var mask_2_graphics_75 = new cjs.Graphics().p("AiRH7IAAv1IEjAAIAAP1g");
	var mask_2_graphics_76 = new cjs.Graphics().p("AiRIAIAAv/IEjAAIAAP/g");
	var mask_2_graphics_77 = new cjs.Graphics().p("AiRIFIAAwKIEjAAIAAQKg");
	var mask_2_graphics_78 = new cjs.Graphics().p("AiRILIAAwVIEjAAIAAQVg");
	var mask_2_graphics_79 = new cjs.Graphics().p("AiRIRIAAwhIEjAAIAAQhg");
	var mask_2_graphics_80 = new cjs.Graphics().p("AiRIWIAAwrIEjAAIAAQrg");
	var mask_2_graphics_81 = new cjs.Graphics().p("AiRIcIAAw3IEjAAIAAQ3g");
	var mask_2_graphics_82 = new cjs.Graphics().p("AiRIhIAAxBIEjAAIAARBg");
	var mask_2_graphics_83 = new cjs.Graphics().p("AiRInIAAxNIEjAAIAARNg");
	var mask_2_graphics_84 = new cjs.Graphics().p("AiRItIAAxZIEjAAIAARZg");
	var mask_2_graphics_85 = new cjs.Graphics().p("AiRIyIAAxjIEjAAIAARjg");
	var mask_2_graphics_86 = new cjs.Graphics().p("AiRI4IAAxvIEjAAIAARvg");
	var mask_2_graphics_87 = new cjs.Graphics().p("AiRI+IAAx7IEjAAIAAR7g");
	var mask_2_graphics_88 = new cjs.Graphics().p("AiRJDIAAyFIEjAAIAASFg");
	var mask_2_graphics_89 = new cjs.Graphics().p("AiRJJIAAyRIEjAAIAASRg");
	var mask_2_graphics_90 = new cjs.Graphics().p("AiRJOIAAybIEjAAIAASbg");
	var mask_2_graphics_91 = new cjs.Graphics().p("AiRJUIAAynIEjAAIAASng");
	var mask_2_graphics_92 = new cjs.Graphics().p("AiRJZIAAyyIEjAAIAASyg");
	var mask_2_graphics_93 = new cjs.Graphics().p("AiRJfIAAy9IEjAAIAAS9g");
	var mask_2_graphics_94 = new cjs.Graphics().p("AiRJlIAAzJIEjAAIAATJg");
	var mask_2_graphics_95 = new cjs.Graphics().p("AiRJqIAAzTIEjAAIAATTg");
	var mask_2_graphics_96 = new cjs.Graphics().p("AiRJwIAAzfIEjAAIAATfg");
	var mask_2_graphics_97 = new cjs.Graphics().p("AiRJ1IAAzpIEjAAIAATpg");
	var mask_2_graphics_98 = new cjs.Graphics().p("AiRJ7IAAz1IEjAAIAAT1g");
	var mask_2_graphics_99 = new cjs.Graphics().p("AiRKAIAAz/IEjAAIAAT/g");
	var mask_2_graphics_100 = new cjs.Graphics().p("AHWdBIAA0NIEkAAIAAUNg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:76,y:194.3}).wait(1).to({graphics:mask_2_graphics_1,x:137.3,y:379.3}).wait(1).to({graphics:mask_2_graphics_2,x:137.3,y:378.5}).wait(1).to({graphics:mask_2_graphics_3,x:137.3,y:377.8}).wait(1).to({graphics:mask_2_graphics_4,x:137.3,y:377.1}).wait(1).to({graphics:mask_2_graphics_5,x:137.4,y:376.3}).wait(1).to({graphics:mask_2_graphics_6,x:137.4,y:375.6}).wait(1).to({graphics:mask_2_graphics_7,x:137.4,y:374.9}).wait(1).to({graphics:mask_2_graphics_8,x:137.4,y:374.1}).wait(1).to({graphics:mask_2_graphics_9,x:137.4,y:373.4}).wait(1).to({graphics:mask_2_graphics_10,x:137.4,y:372.6}).wait(1).to({graphics:mask_2_graphics_11,x:137.4,y:371.9}).wait(1).to({graphics:mask_2_graphics_12,x:137.4,y:371.2}).wait(1).to({graphics:mask_2_graphics_13,x:137.4,y:370.5}).wait(1).to({graphics:mask_2_graphics_14,x:137.4,y:369.7}).wait(1).to({graphics:mask_2_graphics_15,x:137.4,y:369}).wait(1).to({graphics:mask_2_graphics_16,x:137.4,y:368.2}).wait(1).to({graphics:mask_2_graphics_17,x:137.4,y:367.5}).wait(1).to({graphics:mask_2_graphics_18,x:137.4,y:366.8}).wait(1).to({graphics:mask_2_graphics_19,x:137.4,y:366.1}).wait(1).to({graphics:mask_2_graphics_20,x:137.4,y:365.3}).wait(1).to({graphics:mask_2_graphics_21,x:137.4,y:364.6}).wait(1).to({graphics:mask_2_graphics_22,x:137.4,y:363.9}).wait(1).to({graphics:mask_2_graphics_23,x:137.4,y:363.1}).wait(1).to({graphics:mask_2_graphics_24,x:137.4,y:362.4}).wait(1).to({graphics:mask_2_graphics_25,x:137.5,y:361.7}).wait(1).to({graphics:mask_2_graphics_26,x:137.5,y:360.9}).wait(1).to({graphics:mask_2_graphics_27,x:137.5,y:360.2}).wait(1).to({graphics:mask_2_graphics_28,x:137.5,y:359.5}).wait(1).to({graphics:mask_2_graphics_29,x:137.5,y:358.7}).wait(1).to({graphics:mask_2_graphics_30,x:137.5,y:358}).wait(1).to({graphics:mask_2_graphics_31,x:137.5,y:357.3}).wait(1).to({graphics:mask_2_graphics_32,x:137.5,y:356.5}).wait(1).to({graphics:mask_2_graphics_33,x:137.5,y:355.8}).wait(1).to({graphics:mask_2_graphics_34,x:137.5,y:355.1}).wait(1).to({graphics:mask_2_graphics_35,x:137.5,y:354.3}).wait(1).to({graphics:mask_2_graphics_36,x:137.5,y:353.6}).wait(1).to({graphics:mask_2_graphics_37,x:137.5,y:352.9}).wait(1).to({graphics:mask_2_graphics_38,x:137.5,y:352.1}).wait(1).to({graphics:mask_2_graphics_39,x:137.5,y:351.4}).wait(1).to({graphics:mask_2_graphics_40,x:137.5,y:350.7}).wait(1).to({graphics:mask_2_graphics_41,x:137.5,y:349.9}).wait(1).to({graphics:mask_2_graphics_42,x:137.5,y:349.2}).wait(1).to({graphics:mask_2_graphics_43,x:137.5,y:348.5}).wait(1).to({graphics:mask_2_graphics_44,x:137.5,y:347.7}).wait(1).to({graphics:mask_2_graphics_45,x:137.5,y:347}).wait(1).to({graphics:mask_2_graphics_46,x:137.6,y:346.3}).wait(1).to({graphics:mask_2_graphics_47,x:137.6,y:345.5}).wait(1).to({graphics:mask_2_graphics_48,x:137.6,y:344.8}).wait(1).to({graphics:mask_2_graphics_49,x:137.6,y:344.1}).wait(1).to({graphics:mask_2_graphics_50,x:137.6,y:343.4}).wait(1).to({graphics:mask_2_graphics_51,x:137.6,y:342.6}).wait(1).to({graphics:mask_2_graphics_52,x:137.6,y:341.9}).wait(1).to({graphics:mask_2_graphics_53,x:137.6,y:341.1}).wait(1).to({graphics:mask_2_graphics_54,x:137.6,y:340.4}).wait(1).to({graphics:mask_2_graphics_55,x:137.6,y:339.7}).wait(1).to({graphics:mask_2_graphics_56,x:137.6,y:338.9}).wait(1).to({graphics:mask_2_graphics_57,x:137.6,y:338.2}).wait(1).to({graphics:mask_2_graphics_58,x:137.6,y:337.5}).wait(1).to({graphics:mask_2_graphics_59,x:137.6,y:336.7}).wait(1).to({graphics:mask_2_graphics_60,x:137.6,y:336}).wait(1).to({graphics:mask_2_graphics_61,x:137.6,y:335.3}).wait(1).to({graphics:mask_2_graphics_62,x:137.6,y:334.5}).wait(1).to({graphics:mask_2_graphics_63,x:137.6,y:333.8}).wait(1).to({graphics:mask_2_graphics_64,x:137.6,y:333.1}).wait(1).to({graphics:mask_2_graphics_65,x:137.6,y:332.3}).wait(1).to({graphics:mask_2_graphics_66,x:137.7,y:331.6}).wait(1).to({graphics:mask_2_graphics_67,x:137.7,y:330.9}).wait(1).to({graphics:mask_2_graphics_68,x:137.7,y:330.1}).wait(1).to({graphics:mask_2_graphics_69,x:137.7,y:329.4}).wait(1).to({graphics:mask_2_graphics_70,x:137.7,y:328.7}).wait(1).to({graphics:mask_2_graphics_71,x:137.7,y:328}).wait(1).to({graphics:mask_2_graphics_72,x:137.7,y:327.2}).wait(1).to({graphics:mask_2_graphics_73,x:137.7,y:326.5}).wait(1).to({graphics:mask_2_graphics_74,x:137.7,y:325.7}).wait(1).to({graphics:mask_2_graphics_75,x:137.7,y:325}).wait(1).to({graphics:mask_2_graphics_76,x:137.7,y:324.3}).wait(1).to({graphics:mask_2_graphics_77,x:137.7,y:323.6}).wait(1).to({graphics:mask_2_graphics_78,x:137.7,y:322.8}).wait(1).to({graphics:mask_2_graphics_79,x:137.7,y:322.1}).wait(1).to({graphics:mask_2_graphics_80,x:137.7,y:321.3}).wait(1).to({graphics:mask_2_graphics_81,x:137.7,y:320.6}).wait(1).to({graphics:mask_2_graphics_82,x:137.7,y:319.9}).wait(1).to({graphics:mask_2_graphics_83,x:137.7,y:319.1}).wait(1).to({graphics:mask_2_graphics_84,x:137.7,y:318.4}).wait(1).to({graphics:mask_2_graphics_85,x:137.8,y:317.7}).wait(1).to({graphics:mask_2_graphics_86,x:137.8,y:317}).wait(1).to({graphics:mask_2_graphics_87,x:137.8,y:316.2}).wait(1).to({graphics:mask_2_graphics_88,x:137.8,y:315.5}).wait(1).to({graphics:mask_2_graphics_89,x:137.8,y:314.7}).wait(1).to({graphics:mask_2_graphics_90,x:137.8,y:314}).wait(1).to({graphics:mask_2_graphics_91,x:137.8,y:313.3}).wait(1).to({graphics:mask_2_graphics_92,x:137.8,y:312.6}).wait(1).to({graphics:mask_2_graphics_93,x:137.8,y:311.8}).wait(1).to({graphics:mask_2_graphics_94,x:137.8,y:311.1}).wait(1).to({graphics:mask_2_graphics_95,x:137.8,y:310.3}).wait(1).to({graphics:mask_2_graphics_96,x:137.8,y:309.6}).wait(1).to({graphics:mask_2_graphics_97,x:137.8,y:308.9}).wait(1).to({graphics:mask_2_graphics_98,x:137.8,y:308.2}).wait(1).to({graphics:mask_2_graphics_99,x:137.8,y:307.4}).wait(1).to({graphics:mask_2_graphics_100,x:76.2,y:185.7}).wait(191));

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(25,1,1).p("Aqjk8QBXlWGqhLQGphLDQCfQDECUAJEHIAAPk");
	this.shape_3.setTransform(205.4,272.2);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(291));

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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-121.7},74).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AAAgXIAAAv");
	this.shape.setTransform(-10,-232.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AAAAQIAAgf");
	this.shape_1.setTransform(-10,-231.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AAAAIIAAgP");
	this.shape_2.setTransform(-10,-231);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("AAAgHIAAAP");
	this.shape_3.setTransform(-10,-229.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("AAAgOIAAAd");
	this.shape_4.setTransform(-10,-228.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(5,1,1).p("AAAgWIAAAt");
	this.shape_5.setTransform(-10,-228.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(5,1,1).p("AAAgeIAAA9");
	this.shape_6.setTransform(-10,-227.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(5,1,1).p("AAAgmIAABN");
	this.shape_7.setTransform(-10,-226.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(5,1,1).p("AAAguIAABd");
	this.shape_8.setTransform(-10,-226);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(5,1,1).p("AAAg1IAABr");
	this.shape_9.setTransform(-10,-225.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(5,1,1).p("AAAg9IAAB7");
	this.shape_10.setTransform(-10,-224.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5,1,1).p("AAAhFIAACL");
	this.shape_11.setTransform(-10,-223.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(5,1,1).p("AAAhNIAACb");
	this.shape_12.setTransform(-10,-223.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(5,1,1).p("AAAhVIAACr");
	this.shape_13.setTransform(-10,-222.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(5,1,1).p("AAAhcIAAC5");
	this.shape_14.setTransform(-10,-221.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(5,1,1).p("AAAhlIAADK");
	this.shape_15.setTransform(-10,-220.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(5,1,1).p("AAAhsIAADZ");
	this.shape_16.setTransform(-10,-220.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(5,1,1).p("AAAh0IAADp");
	this.shape_17.setTransform(-10,-219.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(5,1,1).p("AAAh8IAAD5");
	this.shape_18.setTransform(-10,-218.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(5,1,1).p("AAAiEIAAEJ");
	this.shape_19.setTransform(-10,-218);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(5,1,1).p("AAAiMIAAEZ");
	this.shape_20.setTransform(-10,-217.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(5,1,1).p("AAAiTIAAEn");
	this.shape_21.setTransform(-10,-216.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(5,1,1).p("AAAicIAAE5");
	this.shape_22.setTransform(-10,-215.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(5,1,1).p("AAAijIAAFH");
	this.shape_23.setTransform(-10,-215.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(5,1,1).p("AAAirIAAFX");
	this.shape_24.setTransform(-10,-214.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(5,1,1).p("AAAizIAAFn");
	this.shape_25.setTransform(-10,-213.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(5,1,1).p("AAAi7IAAF3");
	this.shape_26.setTransform(-10,-213);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(5,1,1).p("AAAjCIAAGG");
	this.shape_27.setTransform(-10,-212.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(5,1,1).p("AAAjKIAAGV");
	this.shape_28.setTransform(-10,-211.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(5,1,1).p("AAAjSIAAGl");
	this.shape_29.setTransform(-10,-210.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(5,1,1).p("AAAjaIAAG1");
	this.shape_30.setTransform(-10,-210.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(5,1,1).p("AAAjiIAAHF");
	this.shape_31.setTransform(-10,-209.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(5,1,1).p("AAAjqIAAHU");
	this.shape_32.setTransform(-10,-208.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(5,1,1).p("AAAjyIAAHl");
	this.shape_33.setTransform(-10,-208);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(5,1,1).p("AAAj5IAAHz");
	this.shape_34.setTransform(-10,-207.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(5,1,1).p("AAAkBIAAID");
	this.shape_35.setTransform(-10,-206.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(5,1,1).p("AAAkJIAAIT");
	this.shape_36.setTransform(-10,-205.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(5,1,1).p("AAAkRIAAIj");
	this.shape_37.setTransform(-10,-205.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(5,1,1).p("AAAkZIAAIz");
	this.shape_38.setTransform(-10,-204.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(5,1,1).p("AAAkgIAAJB");
	this.shape_39.setTransform(-10,-203.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(5,1,1).p("AAAkoIAAJR");
	this.shape_40.setTransform(-10,-203);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(5,1,1).p("AAAkwIAAJh");
	this.shape_41.setTransform(-10,-202.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(5,1,1).p("AAAk4IAAJx");
	this.shape_42.setTransform(-10,-201.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(5,1,1).p("AAAk/IAAKA");
	this.shape_43.setTransform(-10,-200.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(5,1,1).p("AAAlHIAAKP");
	this.shape_44.setTransform(-10,-200.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(5,1,1).p("AAAlPIAAKf");
	this.shape_45.setTransform(-10,-199.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(5,1,1).p("AAAlXIAAKv");
	this.shape_46.setTransform(-10,-198.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(5,1,1).p("AAAlfIAAK/");
	this.shape_47.setTransform(-10,-197.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(5,1,1).p("AAAlnIAALP");
	this.shape_48.setTransform(-10,-197.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(5,1,1).p("AAAlvIAALf");
	this.shape_49.setTransform(-10,-196.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(5,1,1).p("AAAl2IAALt");
	this.shape_50.setTransform(-10,-195.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(5,1,1).p("AAAl+IAAL9");
	this.shape_51.setTransform(-10,-195.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(5,1,1).p("AAAmGIAAMN");
	this.shape_52.setTransform(-10,-194.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(5,1,1).p("AAAmOIAAMd");
	this.shape_53.setTransform(-10,-193.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(5,1,1).p("AAAmWIAAMt");
	this.shape_54.setTransform(-10,-192.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(5,1,1).p("AAAmeIAAM9");
	this.shape_55.setTransform(-10,-192.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(5,1,1).p("AAAmmIAANN");
	this.shape_56.setTransform(-10,-191.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(5,1,1).p("AAAmtIAANb");
	this.shape_57.setTransform(-10,-190.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(5,1,1).p("AAAm1IAANr");
	this.shape_58.setTransform(-10,-190);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(5,1,1).p("AAAm9IAAN7");
	this.shape_59.setTransform(-10,-189.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(5,1,1).p("AAAnFIAAOL");
	this.shape_60.setTransform(-10,-188.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(5,1,1).p("AAAnNIAAOb");
	this.shape_61.setTransform(-10,-187.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(5,1,1).p("AAAnVIAAOq");
	this.shape_62.setTransform(-10,-187.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(5,1,1).p("AAAncIAAO5");
	this.shape_63.setTransform(-10,-186.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(5,1,1).p("AAAnkIAAPJ");
	this.shape_64.setTransform(-10,-185.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(5,1,1).p("AAAnsIAAPZ");
	this.shape_65.setTransform(-10,-185);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(5,1,1).p("AAAn0IAAPp");
	this.shape_66.setTransform(-10,-184.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(5,1,1).p("AAAn7IAAP4");
	this.shape_67.setTransform(-10,-183.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(5,1,1).p("AAAoEIAAQJ");
	this.shape_68.setTransform(-10,-182.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(5,1,1).p("AAAoLIAAQX");
	this.shape_69.setTransform(-10,-182.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(5,1,1).p("AAAoTIAAQn");
	this.shape_70.setTransform(-10,-181.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(5,1,1).p("AAAobIAAQ3");
	this.shape_71.setTransform(-10,-180.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(5,1,1).p("AAAojIAARH");
	this.shape_72.setTransform(-10,-180);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(5,1,1).p("AAAIsIAAxX");
	this.shape_73.setTransform(-10,-179.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.9,-240.1,24.3,21.8);


(lib.honeyflap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.honeybee();
	this.instance.parent = this;
	this.instance.setTransform(38.4,-170.9,0.422,0.422,0,0,0,-0.1,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGB9IgGAAIgOgDIgKgCIgEgBIgDgCIgHgDIgEgBIgCgCIgDgBIgDgCIgDgBIgCgCIgCgBIgDgCIgCgBIgCgCIgCgCIgCgBIgCgCIgCgBIgBgCIgCgCIgCgBIgBgCIgCgCIgBgCIgCgBIgBgCIgBgCIgCgBIgBgCIgBgCIgCgCIAAgBIgBgCIgCgCIgBgCIgBgBIAAgCIgCgCIgBgCIgBgBIgBgCIAAgCIgBgCIgBgBIgBgCIAAgCIgBgCIgBgCIAAgCIgBgBIAAgCIgBgCIAAgCIAAgCIgBgBIAAgCIgBgCIAAgCIAAgCIgBgCIAAgCIAAgBIAAgCIgBgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgBIAAgCIAAgCIAAgCIABgCIgBgCIABgCIAAgCIAAgCIABgCIAAgCIABgCIAAgCIAAgCIABgBIAAgCIABgCIAAgCIABgCIABgCIAAgCIABgCIABgCIAAgCIABgCIABgCIABgCIABgCIABgDIABgCIABgCIACgCIABgCIABgCIABgCIACgCIACgCIABgCIACgCIABgDIADgCIABgCIACgCIADgCIACgCIADgDIACgCIADgCIADgDIADgCIAIgFIAKgFIAGgDIAJgDIAJgCIALgDIAAABIAMgCIAMAAIAIABIAMACIAKADIAOAFQAFACAEADIADABIACACIADABIACACIACABIACACIACACIACABIADACIACABIABACIACACIACABIABACIACACIACABIABACIABACIACABIABACIACACIABACIABABIACACIABACIABACIABABIABACIABACIABACIABABIAAACIABACIABACIABABIABACIABACIAAACIABACIABABIAAACIABACIAAACIABACIAAABIABACIABACIAAACIAAACIAAACIABACIAAABIABACIgBACIABACIAAACIAAACIAAACIABABIAAACIAAACIAAACIAAABIAAACIAAACIAAACIgBACIABACIgBACIAAABIAAACIAAACIgBACIAAACIAAACIgBACIAAACIAAACIgBACIgBACIAAACIAAACIgBACIgBACIgBACIgBACIAAACIgBACIgBACIgBACIgBACIgBACIgBACIgCACIgBACIgBACIgBACIgCACIgBADIgCACIgCACIgBACIgCACIgBACIgDACIgCADIgBACIgFAEIgMAKIgNAHIgOAGQgHADgIACIgMACIgRABIgGAAg");
	this.shape.setTransform(23.2,-144.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-215.3,105.5,83.4);


// stage content:
(lib.writingsuccess_Fontkid_n = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_459 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(459).call(this.frame_459).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(208,199.7,0.998,0.998,0,-8,172,22.4,-144);
	this.instance._off = true;

	this.instance_1 = new lib.honeybee();
	this.instance_1.parent = this;
	this.instance_1.setTransform(344.2,350.7,0.421,0.421,0,-8,172,-38.6,64.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({y:349.7},80).wait(11).to({x:208.6,y:352.9},0).to({regY:-143.9,scaleX:1,scaleY:1,guide:{path:[208.6,352.8,209.4,296.9,210.2,241,210.4,240.7,210.6,240.4]}},100).to({guide:{path:[210.6,240.4,228.8,209.1,254.9,201.1]}},31).to({guide:{path:[254.9,201.1,261.7,199,269.1,198.5,285.1,197.4,297.7,199.9]}},30).to({regY:-143.8,scaleX:1,scaleY:1,guide:{path:[297.6,199.9,313.1,202.9,323.4,211.3,331.7,218.2,336.5,225.7]}},26).to({scaleX:1,scaleY:1,guide:{path:[336.6,225.6,342.4,234.8,342.9,245.1,343.3,265.4,343.3,285.6]}},44).to({regY:-144,scaleX:1,scaleY:1,x:342.9,y:352.4},57).to({_off:true},11).wait(61));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(399).to({_off:false},0).to({regX:-37.7,regY:64.2,guide:{path:[344.2,350.7,457.7,441.7,495.4,354,533.1,266.4,667.1,380.7]}},60).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(208,354.3,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},80).wait(11).to({_off:false,x:342.7,y:350.9},0).to({_off:true},288).wait(72));

	// Layer 20
	this.instance_2 = new lib.ar1("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(129,488.9,1,1,0,0,0,0.3,30.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(451));

	// Layer 27
	this.instance_3 = new lib.ar2("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(273.8,252.8,1,1,0,-60,120);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(100).to({_off:false},0).wait(360));

	// Layer 9
	this.instance_4 = new lib.mask2("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(73.3,0.9,0.985,1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(100).to({_off:false},0).wait(360));

	// Layer 19
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(25,1,1).p("AAAgEIAAAJ");
	this.shape_1.setTransform(208,200.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(25,1,1).p("AAAAOIAAgb");
	this.shape_2.setTransform(208,201.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(25,1,1).p("AAAAYIAAgv");
	this.shape_3.setTransform(208,202.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(25,1,1).p("AAAAhIAAhB");
	this.shape_4.setTransform(208,203.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(25,1,1).p("AAAArIAAhV");
	this.shape_5.setTransform(208,204.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(25,1,1).p("AAAA0IAAhn");
	this.shape_6.setTransform(208,205.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(25,1,1).p("AAAA9IAAh5");
	this.shape_7.setTransform(208,206.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(25,1,1).p("AAABGIAAiM");
	this.shape_8.setTransform(208,207.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(25,1,1).p("AAABQIAAif");
	this.shape_9.setTransform(208.1,208);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(25,1,1).p("AAABZIAAix");
	this.shape_10.setTransform(208.1,209);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(25,1,1).p("AAABiIAAjD");
	this.shape_11.setTransform(208.1,209.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(25,1,1).p("AAABsIAAjX");
	this.shape_12.setTransform(208.1,210.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(25,1,1).p("AAAB1IAAjp");
	this.shape_13.setTransform(208.1,211.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(25,1,1).p("AAAB/IAAj8");
	this.shape_14.setTransform(208.1,212.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(25,1,1).p("AAACIIABkP");
	this.shape_15.setTransform(208.1,213.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(25,1,1).p("AAACRIABkh");
	this.shape_16.setTransform(208.1,214.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(25,1,1).p("AAACaIABkz");
	this.shape_17.setTransform(208.1,215.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(25,1,1).p("AAACkIABlH");
	this.shape_18.setTransform(208.1,216.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(25,1,1).p("AAACtIABlZ");
	this.shape_19.setTransform(208.1,217.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(25,1,1).p("AAAC3IABlt");
	this.shape_20.setTransform(208.1,218.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(25,1,1).p("AAADAIABl/");
	this.shape_21.setTransform(208.1,219.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(25,1,1).p("AAADJIABmR");
	this.shape_22.setTransform(208.1,220.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(25,1,1).p("AAADTIABml");
	this.shape_23.setTransform(208.1,221.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(25,1,1).p("AAADcIABm3");
	this.shape_24.setTransform(208.1,222.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(25,1,1).p("AAADlIABnJ");
	this.shape_25.setTransform(208.1,223);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(25,1,1).p("AAADvIABnd");
	this.shape_26.setTransform(208.1,223.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(25,1,1).p("AAAD4IABnv");
	this.shape_27.setTransform(208.1,224.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(25,1,1).p("AAAECIABoD");
	this.shape_28.setTransform(208.1,225.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(25,1,1).p("AAAELIABoV");
	this.shape_29.setTransform(208.1,226.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(25,1,1).p("AAAEUIABon");
	this.shape_30.setTransform(208.1,227.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(25,1,1).p("AgBEdIADo5");
	this.shape_31.setTransform(208.2,228.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(25,1,1).p("AgBEnIADpN");
	this.shape_32.setTransform(208.2,229.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(25,1,1).p("AgBEwIADpf");
	this.shape_33.setTransform(208.2,230.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(25,1,1).p("AgBE5IADpx");
	this.shape_34.setTransform(208.2,231.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(25,1,1).p("AgBFDIADqF");
	this.shape_35.setTransform(208.2,232.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(25,1,1).p("AgBFMIADqX");
	this.shape_36.setTransform(208.2,233.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(25,1,1).p("AgBFWIADqr");
	this.shape_37.setTransform(208.2,234.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(25,1,1).p("AgBFfIADq9");
	this.shape_38.setTransform(208.2,235.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(25,1,1).p("AgBFoIADrP");
	this.shape_39.setTransform(208.2,236.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(25,1,1).p("AgBFyIADrj");
	this.shape_40.setTransform(208.2,237);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(25,1,1).p("AgBF7IADr1");
	this.shape_41.setTransform(208.2,238);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(25,1,1).p("AgBGEIADsH");
	this.shape_42.setTransform(208.2,238.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(25,1,1).p("AgBGOIADsb");
	this.shape_43.setTransform(208.2,239.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(25,1,1).p("AgBGXIADst");
	this.shape_44.setTransform(208.2,240.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(25,1,1).p("AgBGhIADtB");
	this.shape_45.setTransform(208.2,241.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(25,1,1).p("AgBGqIADtT");
	this.shape_46.setTransform(208.2,242.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(25,1,1).p("AgBGzIADtl");
	this.shape_47.setTransform(208.2,243.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(25,1,1).p("AgBG8IADt3");
	this.shape_48.setTransform(208.2,244.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(25,1,1).p("AgBHGIADuL");
	this.shape_49.setTransform(208.2,245.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(25,1,1).p("AgBHPIADud");
	this.shape_50.setTransform(208.2,246.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(25,1,1).p("AgBHZIADux");
	this.shape_51.setTransform(208.2,247.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(25,1,1).p("AgCHiIAFvD");
	this.shape_52.setTransform(208.3,248.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(25,1,1).p("AgCHrIAFvV");
	this.shape_53.setTransform(208.3,249.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(25,1,1).p("AgCH0IAFvn");
	this.shape_54.setTransform(208.3,250.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(25,1,1).p("AgCH+IAFv7");
	this.shape_55.setTransform(208.3,251.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(25,1,1).p("AgCIHIAFwN");
	this.shape_56.setTransform(208.3,252);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(25,1,1).p("AgCIRIAFwh");
	this.shape_57.setTransform(208.3,252.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(25,1,1).p("AgCIaIAFwz");
	this.shape_58.setTransform(208.3,253.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(25,1,1).p("AgCIjIAFxF");
	this.shape_59.setTransform(208.3,254.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(25,1,1).p("AgCItIAFxZ");
	this.shape_60.setTransform(208.3,255.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(25,1,1).p("AgCI2IAFxr");
	this.shape_61.setTransform(208.3,256.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(25,1,1).p("AgCI/IAFx9");
	this.shape_62.setTransform(208.3,257.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(25,1,1).p("AgCJJIAFyR");
	this.shape_63.setTransform(208.3,258.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(25,1,1).p("AgCJSIAFyj");
	this.shape_64.setTransform(208.3,259.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(25,1,1).p("AgCJcIAFy2");
	this.shape_65.setTransform(208.3,260.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(25,1,1).p("AgCJlIAFzJ");
	this.shape_66.setTransform(208.3,261.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(25,1,1).p("AgCJuIAFzb");
	this.shape_67.setTransform(208.3,262.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(25,1,1).p("AgCJ3IAFzu");
	this.shape_68.setTransform(208.3,263.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(25,1,1).p("AgCKBIAF0B");
	this.shape_69.setTransform(208.3,264.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(25,1,1).p("AgCKKIAF0T");
	this.shape_70.setTransform(208.3,265.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(25,1,1).p("AgCKTIAF0l");
	this.shape_71.setTransform(208.3,266);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(25,1,1).p("AgCKdIAF05");
	this.shape_72.setTransform(208.3,266.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(25,1,1).p("AgCKmIAF1L");
	this.shape_73.setTransform(208.3,267.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(25,1,1).p("AgCKwIAF1f");
	this.shape_74.setTransform(208.4,268.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(25,1,1).p("AgCK5IAF1x");
	this.shape_75.setTransform(208.4,269.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(25,1,1).p("AgCLCIAF2D");
	this.shape_76.setTransform(208.4,270.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(25,1,1).p("AgCLLIAF2W");
	this.shape_77.setTransform(208.4,271.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(25,1,1).p("AgCLVIAF2p");
	this.shape_78.setTransform(208.4,272.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(25,1,1).p("AgDLeIAH27");
	this.shape_79.setTransform(208.4,273.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(25,1,1).p("AgDLoIAH3P");
	this.shape_80.setTransform(208.4,274.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(25,1,1).p("AAErwIgHXh");
	this.shape_81.setTransform(208.4,275.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},9).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).wait(371));

	// Base
	this.instance_5 = new lib.Symbol2("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(275,275);
	this.instance_5.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(460));

	// Background
	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#F59E9E").ss(3,1,1).p("AMvQ5I5dAAMAAAghxIZdAAg");
	this.shape_82.setTransform(275,275,3.373,2.543);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_83.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_83},{t:this.shape_82}]}).wait(460));

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