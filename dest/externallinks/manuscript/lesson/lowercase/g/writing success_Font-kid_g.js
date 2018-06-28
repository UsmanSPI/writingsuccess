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
	this.shape.graphics.f("#FFFFFF").s().p("Aq+YZQgoguAAgzQAAg/A2gyQA3gwBEAAQBLAAAzA/QCrDUEoAAQDiAACgiHQCsiTAAj1IgCzSQkCDmlSAAQl5AAkNkaQkNkcAAmPQAAmRELkbQEKkcF+AAQFUAAECDuQAAj0CaAAQBCAAA+A3QA8A2AABBMgAEArhQAAFXkNDxQkNDylvAAQnEAAkNlMgAmy1VQiuC3ABEIQgBEFCuC4QCvC5D3AAQEGAACxjJQCdi5AAjrIgEgxQgNj6isiqQisiqjrAAQj3AAivC3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.8,-189.2,185.6,378.6);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 10
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(25,1,1).p("AMHAAQAAFBjjDjQjjDjlBAAQlAAAjjjjQjjjjAAlBQAAlADjjjQDjjjFAAAQFBAADjDjQDjDjAAFAg");
	this.shape.setTransform(275.4,365.8,0.986,1.025);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(299).to({_off:false},0).wait(1));

	// Layer 7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_260 = new cjs.Graphics().p("EACWAhnQmKlGgwn8Qgwn+FGmLIdvYnQlGGKn9AxQhBAGg/AAQmwAAlYkdg");
	var mask_graphics_261 = new cjs.Graphics().p("EACgAh1QmQlAg4n8Qg5n9E/mQIeJYGQk/GQn8A6QhMAIhKAAQmjAAlTkPg");
	var mask_graphics_262 = new cjs.Graphics().p("EACqAiBQmVk4hBn7QhCn8E4mVIekXlQk5GVn7BCQhXALhUAAQmWAAlPkDg");
	var mask_graphics_263 = new cjs.Graphics().p("EAC0AiOQmakyhKn6QhKn6ExmbIe9XEQkxGan6BLQhiAOhfAAQmKAAlKj2g");
	var mask_graphics_264 = new cjs.Graphics().p("EAC/AiaQmfkrhTn4QhTn6ErmfIfVWiQkqGfn5BUQhtARhoAAQl+AAlFjqg");
	var mask_graphics_265 = new cjs.Graphics().p("EADKAimQmkkkhbn2Qhcn5EkmkIfuWAQkkGkn3BcQh4AVhyAAQlyAAlAjeg");
	var mask_graphics_266 = new cjs.Graphics().p("EADVAiyQmpkdhjn1Qhkn3EcmpMAgFAVdQkcGqn2BkQiBAah9AAQlmAAk7jTg");
	var mask_graphics_267 = new cjs.Graphics().p("EADhAi9QmukVhsn0Qhsn1EVmuMAgcAU7QkVGun0BtQiMAeiGAAQlbAAk1jIg");
	var mask_graphics_268 = new cjs.Graphics().p("EADtAjIQmykOh1nxQh1nzEOmzMAgzAUXQkOGznyB1QiWAjiQAAQlPAAkwi9g");
	var mask_graphics_269 = new cjs.Graphics().p("EAD5AjTQm3kHh9nvQh9nxEHm3MAhIATzQkGG3nwB+QigAoiaAAQlEAAkqiyg");
	var mask_graphics_270 = new cjs.Graphics().p("EAEGAjeQm7kAiGntQiFnvD/m8MAheATQQj/G7nuCHQiqAtijAAQk6AAkjing");
	var mask_graphics_271 = new cjs.Graphics().p("EAETAjoQm/j4iOnrQiOnsD3nAMAhzASqQj3HAnsCPQizAzitAAQkvAAkdidg");
	var mask_graphics_272 = new cjs.Graphics().p("EAEgAjyQnDjwiWnpQiXnqDwnEMAiHASGQjwHEnpCXQi8A5i3AAQkkAAkXiTg");
	var mask_graphics_273 = new cjs.Graphics().p("EAEuAj7QnIjoienmQienoDonIMAiaARhQjoHInnCfQjFBAjAAAQkbAAkPiKg");
	var mask_graphics_274 = new cjs.Graphics().p("EAE8AkFQnLjhinnjQinnlDhnMMAitAQ7QjhHMnkCoQjOBGjJAAQkRAAkIiAg");
	var mask_graphics_275 = new cjs.Graphics().p("EAFKAkOQnPjZiunhQiwniDZnPMAi/AQVQjYHQnhCwQjXBNjTAAQkHAAkBh3g");
	var mask_graphics_276 = new cjs.Graphics().p("EAFZAkWQnTjRi2ndQi4nfDRnTMAjQAPvQjQHUneC3QjfBVjdAAQj9AAj5hvg");
	var mask_graphics_277 = new cjs.Graphics().p("EAFoAkfQnWjJi/nbQi/nbDInXMAjiAPJQjJHXnbDAQjnBcjnAAQjyAAjyhmg");
	var mask_graphics_278 = new cjs.Graphics().p("EAF3AknQnZjBjHnXQjInZDBnaMAjyAOjQjBHanXDIQjwBkjwAAQjpAAjqheg");
	var mask_graphics_279 = new cjs.Graphics().p("EAGHAkuQndi4jPnUQjPnVC4ndMAkCAN7Qi5HenUDQQj4Bsj5AAQjgAAjhhXg");
	var mask_graphics_280 = new cjs.Graphics().p("EAGXAk2QngixjXnQQjXnRCwnhMAkQANVQiwHgnRDYQj/B1kEAAQjVAAjZhPg");
	var mask_graphics_281 = new cjs.Graphics().p("EAGnAk9QnjipjenMQjgnOCpnjMAkeAMtQioHknNDfQkHB+kOAAQjMAAjQhIg");
	var mask_graphics_282 = new cjs.Graphics().p("EAG4AlEQnmihjnnIQjnnKChnmMAkrAMFQigHnnJDnQkOCHkXAAQjDAAjHhBg");
	var mask_graphics_283 = new cjs.Graphics().p("EAHIAlKQnoiYjunFQjvnFCYnpMAk5ALdQiYHpnFDvQkVCRkiAAQi5AAi/g7g");
	var mask_graphics_284 = new cjs.Graphics().p("EAHZAlQQnriPj1nBQj3nCCQnrMAlFAK1QiQHsnBD3QkcCaksAAQiwAAi1g1g");
	var mask_graphics_285 = new cjs.Graphics().p("EAHrAlWQnuiHj9m9Qj+m9CHnuMAlRAKNQiIHum8D+QkjClk3AAQimAAirgvg");
	var mask_graphics_286 = new cjs.Graphics().p("EAH8AlcQnwh/kEm4QkGm6B/nwMAlbAJlQh+Hwm5EGQkpCvlBAAQidAAiigpg");
	var mask_graphics_287 = new cjs.Graphics().p("EAIOAlhQnzh3kLmzQkNm1B2nyMAlmAI8Qh3HymzENQkvC6lNAAQiTAAiYgkg");
	var mask_graphics_288 = new cjs.Graphics().p("EAIgAlmQn1hvkSmvQkVmwBun0MAlvAITQhuH1mvEUQk1DFlXAAQiJAAiPgfg");
	var mask_graphics_289 = new cjs.Graphics().p("EAIyAlqQn2hmkamqQkcmrBmn2MAl4AHqQhmH2mqEcQk7DQljAAQh/AAiFgbg");
	var mask_graphics_290 = new cjs.Graphics().p("EAJFAluQn4hdkhmlQkjmnBdn4MAmAAHCQhdH3mmEjQlADclvAAQh1AAh6gXg");
	var mask_graphics_291 = new cjs.Graphics().p("EAJYAlyQn6hVkomgQkqmiBUn5MAmHAGYQhUH5mhEqQlFDol6AAQhsAAhvgTg");
	var mask_graphics_292 = new cjs.Graphics().p("EAJrAl1Qn7hMkwmbQkxmdBMn6MAmOAFuQhMH7mbExQlLDzmGAAQhhAAhlgPg");
	var mask_graphics_293 = new cjs.Graphics().p("EAJ+Al4Qn8hDk2mWQk4mYBDn7MAmUAFFQhEH8mWE4QlPD/mTAAQhXAAhagMg");
	var mask_graphics_294 = new cjs.Graphics().p("EAKRAl7Qn9g7k9mRQk/mSA7n8MAmZAEbQg7H9mRE/QlTEMmgAAQhMAAhQgJg");
	var mask_graphics_295 = new cjs.Graphics().p("EAKlAl9Qn+gylEmLQlGmNAzn+MAmdADyQgyH+mMFGQlXEZmtAAQhCAAhEgHg");
	var mask_graphics_296 = new cjs.Graphics().p("EAK5Al/Qn/gplKmGQlNmHAqn/MAmhADJQgpH+mGFNQlcEmm6AAQg3AAg5gFg");
	var mask_graphics_297 = new cjs.Graphics().p("EALNAmBQoAghlRmAQlSmBAgoAMAmlACfQghH/mAFTQlgE0nHAAQgtAAgtgDg");
	var mask_graphics_298 = new cjs.Graphics().p("EALiAmCQoBgYlXl6Qlal8AZoAMAmnAB1QgZIAl6FZQljFCnWAAQghAAghgCg");
	var mask_graphics_299 = new cjs.Graphics().p("EAL2AmDQoBgPldl1Qlgl1APoBMAmpABLQgPIAl1FgQlnFQnkAAIgrgBg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(260).to({graphics:mask_graphics_260,x:188.9,y:243.6}).wait(1).to({graphics:mask_graphics_261,x:189.5,y:243.6}).wait(1).to({graphics:mask_graphics_262,x:190.2,y:243.6}).wait(1).to({graphics:mask_graphics_263,x:190.8,y:243.6}).wait(1).to({graphics:mask_graphics_264,x:191.4,y:243.6}).wait(1).to({graphics:mask_graphics_265,x:192.1,y:243.6}).wait(1).to({graphics:mask_graphics_266,x:192.6,y:243.7}).wait(1).to({graphics:mask_graphics_267,x:193.2,y:243.7}).wait(1).to({graphics:mask_graphics_268,x:193.8,y:243.7}).wait(1).to({graphics:mask_graphics_269,x:194.3,y:243.7}).wait(1).to({graphics:mask_graphics_270,x:194.9,y:243.7}).wait(1).to({graphics:mask_graphics_271,x:195.4,y:243.7}).wait(1).to({graphics:mask_graphics_272,x:195.9,y:243.7}).wait(1).to({graphics:mask_graphics_273,x:196.4,y:243.7}).wait(1).to({graphics:mask_graphics_274,x:196.9,y:243.7}).wait(1).to({graphics:mask_graphics_275,x:197.3,y:243.7}).wait(1).to({graphics:mask_graphics_276,x:197.7,y:243.7}).wait(1).to({graphics:mask_graphics_277,x:198.2,y:243.7}).wait(1).to({graphics:mask_graphics_278,x:198.6,y:243.7}).wait(1).to({graphics:mask_graphics_279,x:199,y:243.7}).wait(1).to({graphics:mask_graphics_280,x:199.3,y:243.7}).wait(1).to({graphics:mask_graphics_281,x:199.7,y:243.7}).wait(1).to({graphics:mask_graphics_282,x:200,y:243.7}).wait(1).to({graphics:mask_graphics_283,x:200.4,y:243.7}).wait(1).to({graphics:mask_graphics_284,x:200.7,y:243.7}).wait(1).to({graphics:mask_graphics_285,x:201,y:243.7}).wait(1).to({graphics:mask_graphics_286,x:201.2,y:243.7}).wait(1).to({graphics:mask_graphics_287,x:201.5,y:243.7}).wait(1).to({graphics:mask_graphics_288,x:201.7,y:243.7}).wait(1).to({graphics:mask_graphics_289,x:202,y:243.7}).wait(1).to({graphics:mask_graphics_290,x:202.2,y:243.7}).wait(1).to({graphics:mask_graphics_291,x:202.3,y:243.7}).wait(1).to({graphics:mask_graphics_292,x:202.5,y:243.6}).wait(1).to({graphics:mask_graphics_293,x:202.7,y:243.6}).wait(1).to({graphics:mask_graphics_294,x:202.8,y:243.6}).wait(1).to({graphics:mask_graphics_295,x:202.9,y:243.6}).wait(1).to({graphics:mask_graphics_296,x:203,y:243.6}).wait(1).to({graphics:mask_graphics_297,x:203.1,y:243.6}).wait(1).to({graphics:mask_graphics_298,x:203.2,y:243.6}).wait(1).to({graphics:mask_graphics_299,x:203.2,y:243.6}).wait(1));

	// Layer 6
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(25,1,1).p("AMHAAQAAFBjjDjQjjDjlBAAQlAAAjjjjQjjjjAAlBQAAlADjjjQDjjjFAAAQFBAADjDjQDjDjAAFAg");
	this.shape_1.setTransform(275.4,365.8,0.986,1.025);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(260).to({_off:false},0).wait(40));

	// Layer 4 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_120 = new cjs.Graphics().p("AmQUvQCHnuG8j/QG9j9HuCHQHuCHD+G8QD+G+iHHug");
	var mask_1_graphics_121 = new cjs.Graphics().p("AmWVRQB9nwG3kHQG5kGHwB+QHxB9EGG3QEGG5h9Hwg");
	var mask_1_graphics_122 = new cjs.Graphics().p("AmcV0QB0nyGxkQQG0kOHyB0QH0BzEOGzQEQGzh0Hzg");
	var mask_1_graphics_123 = new cjs.Graphics().p("AmhWYQBqn1GskYQGvkXH0BqQH1BqEXGtQEYGuhqH1g");
	var mask_1_graphics_124 = new cjs.Graphics().p("AmlW7QBgn3GmkgQGpkfH3BgQH3BhEfGnQEgGohgH3g");
	var mask_1_graphics_125 = new cjs.Graphics().p("AmpXeQBWn4GhkpQGjknH4BXQH5BWEoGiQEoGjhXH4g");
	var mask_1_graphics_126 = new cjs.Graphics().p("AmtYCQBNn6GbkxQGdkvH6BNQH6BNEwGbQEwGdhNH7g");
	var mask_1_graphics_127 = new cjs.Graphics().p("AmwYmQBDn8GVk4QGXk4H7BDQH8BDE3GWQE5GXhDH8g");
	var mask_1_graphics_128 = new cjs.Graphics().p("AmzZJQA5n8GPlBQGRk/H8A5QH+A5E/GQQFAGRg5H9g");
	var mask_1_graphics_129 = new cjs.Graphics().p("Am1ZtQAvn+GIlIQGLlGH+AvQH+AvFHGJQFHGLgvH+g");
	var mask_1_graphics_130 = new cjs.Graphics().p("Am3aRQAln/GDlPQGElOH+AlQH/AlFOGDQFQGEgmH/g");
	var mask_1_graphics_131 = new cjs.Graphics().p("Am5a1QAcn/F8lXQF9lWH/AbQIAAcFWF8QFWF+gbH/g");
	var mask_1_graphics_132 = new cjs.Graphics().p("Am6bZQASoAF1leQF3ldH/ARQIAASFdF1QFfF3gSIAg");
	var mask_1_graphics_133 = new cjs.Graphics().p("Am6b9QAHoAFvllQFwllH/AIQIAAHFlFvQFlFwgHIAg");
	var mask_1_graphics_134 = new cjs.Graphics().p("AhVOvQFolsIAgCQIAgDFsFoQFsFpADIAMgmoAAMQgDoAFolsg");
	var mask_1_graphics_135 = new cjs.Graphics().p("AhlO0QFhlzH/gMQIBgMFyFgQFzFiANIAMgmoAA8QgMoAFhlzg");
	var mask_1_graphics_136 = new cjs.Graphics().p("Ah1O5QFal5H/gWQIAgXF5FaQF6FaAWIAMgmmABsQgWn/Fal7g");
	var mask_1_graphics_137 = new cjs.Graphics().p("AiFO/QFTmAH+ggQIAggF/FSQGBFTAhH/MgmkACcQggn/FSmBg");
	var mask_1_graphics_138 = new cjs.Graphics().p("AiUPGQFLmHH+gqQH/gqGGFKQGHFMArH+MgmgADMQgqn+FKmHg");
	var mask_1_graphics_139 = new cjs.Graphics().p("AiiPMQFEmNH8g0QH+g0GNFDQGNFEA1H9MgmcAD8Qg0n9FDmOg");
	var mask_1_graphics_140 = new cjs.Graphics().p("AiwPTQE8mTH8g+QH9g+GSE7QGUE8A+H9MgmWAErQg+n8E7mUg");
	var mask_1_graphics_141 = new cjs.Graphics().p("Ai9PaQE0mZH7hIQH7hIGZE0QGaE0BIH7MgmQAFbQhIn7Ezmag");
	var mask_1_graphics_142 = new cjs.Graphics().p("AjJPiQEsmfH5hSQH6hSGeEsQGgEsBSH5MgmJAGLQhRn6Ermfg");
	var mask_1_graphics_143 = new cjs.Graphics().p("AjVPpQEkmkH3hcQH4hbGlEjQGlEkBcH4MgmAAG6Qhcn4Ejmmg");
	var mask_1_graphics_144 = new cjs.Graphics().p("AjgPyQEbmrH2hlQH2hlGqEbQGrEcBlH1Mgl3AHpQhln2Ebmqg");
	var mask_1_graphics_145 = new cjs.Graphics().p("AjrP6QETmwH0hvQH0hvGvETQGxETBvH0MgltAIYQhvn0ESmwg");
	var mask_1_graphics_146 = new cjs.Graphics().p("Aj1QDQELm1Hxh5QHyh5G1ELQG2ELB4HxMgliAJHQh5nyEKm1g");
	var mask_1_graphics_147 = new cjs.Graphics().p("Aj+QMQECm6HviDQHviCG6ECQG7ECCCHvMglWAJ1QiCnvEBm6g");
	var mask_1_graphics_148 = new cjs.Graphics().p("AkHQVQD7m/HriMQHtiMG+D5QHAD6CMHtMglKAKjQiMnsD5nAg");
	var mask_1_graphics_149 = new cjs.Graphics().p("AkPQfQDynEHoiVQHqiWHEDwQHEDxCWHqMgk9ALSQiVnqDwnEg");
	var mask_1_graphics_150 = new cjs.Graphics().p("AkWQoQDpnIHlifQHnifHIDoQHJDoCfHnMgkuAL/QifnnDonJg");
	var mask_1_graphics_151 = new cjs.Graphics().p("AkdQzQDgnNHiioQHkipHMDfQHODfCoHkMgkeAMsQionjDenNg");
	var mask_1_graphics_152 = new cjs.Graphics().p("AkjQ9QDXnRHfiyQHgixHRDVQHSDXCxHgMgkOANaQiyngDWnSg");
	var mask_1_graphics_153 = new cjs.Graphics().p("AkpRIQDOnVHbi7QHdi7HVDMQHWDOC7HcMgj9AOHQi7ndDMnVg");
	var mask_1_graphics_154 = new cjs.Graphics().p("AkuRTQDFnZHYjEQHZjFHYDEQHaDEDEHZMgjrAOzQjEnZDDnZg");
	var mask_1_graphics_155 = new cjs.Graphics().p("AkyReQC8ndHTjNQHWjNHcC6QHdC7DOHVMgjZAPfQjNnVC6ndg");
	var mask_1_graphics_156 = new cjs.Graphics().p("Ak2RqQCznhHPjWQHSjWHfCxQHhCxDXHRMgjFAQLQjWnRCwngg");
	var mask_1_graphics_157 = new cjs.Graphics().p("Ak4R1QCpnjHLjfQHNjgHjCoQHkCoDgHMMgiwAQ3QjgnNConkg");
	var mask_1_graphics_158 = new cjs.Graphics().p("Ak7SBQCgnnHHjoQHIjoHmCeQHoCfDoHIMgiaARiQjpnICenog");
	var mask_1_graphics_159 = new cjs.Graphics().p("Ak8SOQCWnqHCjxQHEjxHpCVQHrCVDxHDMgiFASMQjxnDCVnqg");
	var mask_1_graphics_160 = new cjs.Graphics().p("Ak9SaQCMntG+j5QG/j6HsCLQHtCMD6G/MghtAS2Qj6m/CLntg");
	var mask_1_graphics_161 = new cjs.Graphics().p("Ak+SnQCDnvG5kDQG6kCHvCCQHwCCECG6MghWATfQkCm6CBnvg");
	var mask_1_graphics_162 = new cjs.Graphics().p("Ak9S0QB5nyGzkKQG2kMHxB4QHyB5ELG1Mgg9AUJQkLm1B4nyg");
	var mask_1_graphics_163 = new cjs.Graphics().p("Ak9TBQBwn0GukTQGwkTH0BuQH0BvETGvMggjAUyQkTmwBtn0g");
	var mask_1_graphics_164 = new cjs.Graphics().p("Ak7TPQBmn2GpkcQGqkcH2BlQH2BlEcGqMggJAVaQkcmqBkn2g");
	var mask_1_graphics_165 = new cjs.Graphics().p("Ak5TcQBdn4GjkjQGlkkH3BbQH4BbEkGkI/uWCQkkmlBan4g");
	var mask_1_graphics_166 = new cjs.Graphics().p("Ak2TqQBTn5GdksQGfksH5BRQH6BREsGfI/SWpQksmfBQn6g");
	var mask_1_graphics_167 = new cjs.Graphics().p("AkyT4QBIn7GYkzQGZk1H6BIQH8BHE0GZI+2XPQk0mZBHn7g");
	var mask_1_graphics_168 = new cjs.Graphics().p("AkuUHQA/n9GRk7QGTk8H8A9QH9A+E8GSI+ZX2Qk8mTA9n8g");
	var mask_1_graphics_169 = new cjs.Graphics().p("AkpUVQA1n9GLlEQGNlEH9A0QH+A0FDGMI97YbQlDmMAzn+g");
	var mask_1_graphics_170 = new cjs.Graphics().p("AkkUkQArn/GFlLQGHlLH9AqQH/AqFMGGI9cZAQlMmHApn+g");
	var mask_1_graphics_171 = new cjs.Graphics().p("AkdUzQAgoAF/lSQGAlTH+AgQIAAgFTGAI8+ZkQlSmAAgn/g");
	var mask_1_graphics_172 = new cjs.Graphics().p("AkXVCQAXoAF4laQF6laH+AWQIBAWFaF5I8eaIQlZl6AVn/g");
	var mask_1_graphics_173 = new cjs.Graphics().p("AkPVRQANoAFxlhQFyliIAAMQIAAMFiFzI79aqQlhlyAMoAg");
	var mask_1_graphics_174 = new cjs.Graphics().p("AkHVhQADoBFqloQFslpH/ACQIBACFoFsI7bbNQlolrACoAg");
	var mask_1_graphics_175 = new cjs.Graphics().p("Aj/VwQgGoAFjlvQFklwIAgIQIAgIFwFlI66buQlulkgJoAg");
	var mask_1_graphics_176 = new cjs.Graphics().p("Aj1WAQgRoAFcl2QFdl3H/gRQIBgSF2FdI6WcQQl2ldgSoAg");
	var mask_1_graphics_177 = new cjs.Graphics().p("AjrWQQgboAFVl8QFWl+H+gbQIAgcF9FWI5zcwQl8lWgcn/g");
	var mask_1_graphics_178 = new cjs.Graphics().p("AjhWgQgkn/FNmDQFOmEH+gmQIAgmGDFPI5PdQQmClPgnn+g");
	var mask_1_graphics_179 = new cjs.Graphics().p("AjWWwQgun+FFmKQFHmKH9gwQH/gvGKFHI4qduQmJlGgxn+g");
	var mask_1_graphics_180 = new cjs.Graphics().p("AjKXAQg4n9E+mQQE/mQH8g6QH9g5GRE/I4FeNQmQk/g6n9g");
	var mask_1_graphics_181 = new cjs.Graphics().p("Ai9XRQhDn8E2mWQE4mXH7hDQH8hDGWE3I3feqQmVk3hEn7g");
	var mask_1_graphics_182 = new cjs.Graphics().p("AiwXhQhMn6EtmcQEwmdH5hNQH7hNGdEvI25fIQmckwhNn6g");
	var mask_1_graphics_183 = new cjs.Graphics().p("AijXyQhWn5EmmiQEomiH3hXQH6hXGiEnI2SfkQmhknhYn5g");
	var mask_1_graphics_184 = new cjs.Graphics().p("AiVYDQhfn3EdmoQEgmoH2hgQH3hgGoEeI1qf/Qmnkfhin3g");
	var mask_1_graphics_185 = new cjs.Graphics().p("AiGYUQhpn1EVmtQEXmuH0hqQH2hqGtEWMgVCAgZQmtkXhrn0g");
	var mask_1_graphics_186 = new cjs.Graphics().p("Ah2YlQh0nzENmyQEPmzHyh0QHzh0GzEOMgUaAgzQmykPh0nyg");
	var mask_1_graphics_187 = new cjs.Graphics().p("AhmY2Qh9nxEEm3QEGm4Hwh+QHxh9G4EFMgTxAhMQm4kGh9nwg");
	var mask_1_graphics_188 = new cjs.Graphics().p("AhWZHQiGnuD8m8QD9m+HtiHQHuiGG9D8MgTHAhkQm9j9iHnug");
	var mask_1_graphics_189 = new cjs.Graphics().p("AhFZYQiQnrDznBQD1nCHriRQHriQHCDzMgSeAh8QnBj1iRnrg");
	var mask_1_graphics_190 = new cjs.Graphics().p("AgzZqQianpDrnGQDsnGHnibQHpiZHGDrMgRzAiRQnGjrianog");
	var mask_1_graphics_191 = new cjs.Graphics().p("AghZ7QijnlDinLQDjnLHkikQHmijHKDiMgRIAioQnKjjiknlg");
	var mask_1_graphics_192 = new cjs.Graphics().p("AgOaNQitnjDZnOQDanQHhitQHjisHPDZMgQdAi8QnPjaitnhg");
	var mask_1_graphics_193 = new cjs.Graphics().p("AAEaeQi1nfDQnSQDRnUHei2QHfi2HTDQMgPyAjQQnTjRi3neg");
	var mask_1_graphics_194 = new cjs.Graphics().p("AAYawQi+ncDGnWQDInYHai/QHcjAHXDHMgPGAjkQnXjIjAnag");
	var mask_1_graphics_195 = new cjs.Graphics().p("AAsbBQjHnXC9nbQC/nbHWjJQHYjIHbC+MgOZAj2Qnbi/jKnXg");
	var mask_1_graphics_196 = new cjs.Graphics().p("ABBbTQjQnUC0neQC1nfHTjRQHTjSHfC1MgNtAkHQnei2jTnSg");
	var mask_1_graphics_197 = new cjs.Graphics().p("ABWblQjZnQCrnhQCsnjHOjaQHPjbHiCrMgM/AkYQniisjcnOg");
	var mask_1_graphics_198 = new cjs.Graphics().p("ABsb2QjinLChnkQCjnmHKjkQHLjjHlChMgMSAkoQnlijjlnKg");
	var mask_1_graphics_199 = new cjs.Graphics().p("ACCcIQjrnHCYnnQCanpHFjtQHGjsHpCYMgLlAk3QnoiajunFg");
	var mask_1_graphics_200 = new cjs.Graphics().p("ACZcaQj0nCCPnrQCQnrHAj2QHCj1HrCPMgK2AlEQnriQj3nAg");
	var mask_1_graphics_201 = new cjs.Graphics().p("ACxcrQj9m9CFntQCGnuG8j+QG9j+HuCFMgKJAlRQntiGj/m8g");
	var mask_1_graphics_202 = new cjs.Graphics().p("ADIc9QkFm4B8nwQB8nxG3kGQG4kGHwB7MgJaAleQnwh9kIm3g");
	var mask_1_graphics_203 = new cjs.Graphics().p("ADhdPQkOmzBynyQBznzGxkPQGzkPHyByMgIrAloQnyhzkQmxg");
	var mask_1_graphics_204 = new cjs.Graphics().p("AD5dgQkWmtBon0QBqn2GskXQGtkXH1BoMgH9AlzQn0hpkZmtg");
	var mask_1_graphics_205 = new cjs.Graphics().p("AESdyQkemoBen2QBgn3GmkgQGokfH3BfMgHNAl7Qn3hfkhmng");
	var mask_1_graphics_206 = new cjs.Graphics().p("AEseEQkomjBWn4QBWn5GhknQGikoH4BWMgGeAmDQn4hVkpmhg");
	var mask_1_graphics_207 = new cjs.Graphics().p("AFGeVQkwmcBMn6QBMn6GbkwQGckwH6BMMgFuAmLQn6hMkxmbg");
	var mask_1_graphics_208 = new cjs.Graphics().p("AFgenQk3mXBCn7QBCn8GVk3QGWk4H7BCMgE/AmSQn7hCk5mVg");
	var mask_1_graphics_209 = new cjs.Graphics().p("AF7e4QlAmQA5n8QA4n9GPlAQGQk/H8A4MgEPAmXQn9g4lAmPg");
	var mask_1_graphics_210 = new cjs.Graphics().p("AGWfKQlHmLAun9QAvn+GIlHQGKlHH+AuMgDgAmdQn+gvlImIg");
	var mask_1_graphics_211 = new cjs.Graphics().p("AGyfbQlPmEAkn+QAln/GClOQGDlPH/AkMgCwAmhQn/gllPmCg");
	var mask_1_graphics_212 = new cjs.Graphics().p("AHNfsQlWl9Abn+QAaoAF8lWQF9lWH/AaMgCAAmjQn/galYl8g");
	var mask_1_graphics_213 = new cjs.Graphics().p("AHqf9Qlel2ARn/QAQoAF1ldQF2leIAARMgBQAmlQoAgRlel1g");
	var mask_1_graphics_214 = new cjs.Graphics().p("EAIGAgOQlklvAGn/QAHoAFullQFvllIAAHMgAgAmmQoAgGlmlvg");
	var mask_1_graphics_215 = new cjs.Graphics().p("EAIbAgfQlrlogEn/QgDoAFnlsQFolsIAgDMAAQAmmIgKAAQn5AAlqlkg");
	var mask_1_graphics_216 = new cjs.Graphics().p("EAIhAgwQlzlhgNn/QgOoAFglzQFhlzIAgNMABAAmmIglAAQnoAAlmlTg");
	var mask_1_graphics_217 = new cjs.Graphics().p("EAImAhAQl5lagXn+QgYoAFZl5QFal6H/gXMABwAmkIhAABQnXAAljlDg");
	var mask_1_graphics_218 = new cjs.Graphics().p("EAIsAhQQmAlSghn/Qghn/FRmAQFSmAH/ghMACgAmiQguACgtAAQnGAAlfkzg");
	var mask_1_graphics_219 = new cjs.Graphics().p("EAIyAhgQmGlLgrn+Qgrn+FKmGQFKmIH+gqMADQAmeQg7AFg5AAQm3AAlbkkg");
	var mask_1_graphics_220 = new cjs.Graphics().p("EAI5AhvQmNlEg1n8Qg1n9FCmNQFDmOH9g0MAEAAmZQhIAIhGAAQmnAAlWkVg");
	var mask_1_graphics_221 = new cjs.Graphics().p("EAJAAh+QmTk8g/n7Qg/n8E7mTQE7mVH8g9MAEuAmTQhUALhSAAQmYAAlRkGg");
	var mask_1_graphics_222 = new cjs.Graphics().p("EAJHAiMQmZk0hJn6QhIn7EymZQEzmaH7hHMAFeAmNQhhAOhdAAQmLAAlLj4g");
	var mask_1_graphics_223 = new cjs.Graphics().p("EAJOAiaQmfkshSn4QhSn5EqmfQErmgH5hSMAGOAmGQhtAShpAAQl9AAlGjqg");
	var mask_1_graphics_224 = new cjs.Graphics().p("EAJWAioQmlkkhcn3Qhbn3EimlQEjmmH3hbMAG9Al+Qh5AWh1AAQlvAAlAjcg");
	var mask_1_graphics_225 = new cjs.Graphics().p("EAJeAi1Qmqkbhmn1Qhln2EZmqQEbmrH2hlMAHsAl0QiFAciAAAQliAAk6jQg");
	var mask_1_graphics_226 = new cjs.Graphics().p("EAJnAjCQmwkThvnzQhvn0ERmvQESmxHzhuMAIcAlqQiRAhiLAAQlVAAkzjDg");
	var mask_1_graphics_227 = new cjs.Graphics().p("EAJwAjPQm2kLh5nxQh4nxEIm1QEKm2Hxh4MAJKAlgQicAmiWAAQlIAAksi2g");
	var mask_1_graphics_228 = new cjs.Graphics().p("EAJ5AjbQm7kCiCnuQiCnvD/m6QECm7HviDMAJ4AlVQinAsihAAQk8AAkliqg");
	var mask_1_graphics_229 = new cjs.Graphics().p("EAKCAjnQm/j6iNnrQiLntD3m+QD5nAHsiNMAKnAlIQiyAzisAAQkwAAkeieg");
	var mask_1_graphics_230 = new cjs.Graphics().p("EAKMAjyQnEjxiWnoQiVnqDunDQDwnFHpiWMALVAk6Qi8A6i3AAQkkAAkWiTg");
	var mask_1_graphics_231 = new cjs.Graphics().p("EAKVAj9QnIjoifnmQifnmDmnIQDnnKHmifMAMCAksQjGBBjCAAQkZAAkOiIg");
	var mask_1_graphics_232 = new cjs.Graphics().p("EAKgAkIQnNjgipniQionjDdnNQDenNHjipMAMwAkcQjRBJjNAAQkNAAkFh9g");
	var mask_1_graphics_233 = new cjs.Graphics().p("EAKqAkSQnRjWiyngQixngDTnQQDWnSHfiyMANdAkMQjbBRjXAAQkCAAj9hzg");
	var mask_1_graphics_234 = new cjs.Graphics().p("EAK1AkcQnVjOi8nbQi6ndDKnUQDNnWHci8MAOJAj7QjkBajjAAQj2AAj0hpg");
	var mask_1_graphics_235 = new cjs.Graphics().p("EALAAklQnZjEjFnYQjEnZDCnYQDDnaHYjFMAO3AjpQjuBjjuAAQjrAAjrhgg");
	var mask_1_graphics_236 = new cjs.Graphics().p("EALLAkuQndi7jNnUQjNnVC4ncQC6ndHUjOMAPjAjWQj3Bsj5AAQjgAAjihXg");
	var mask_1_graphics_237 = new cjs.Graphics().p("EALXAk2QnhixjWnQQjWnRCwnfQCvnhHRjXMAQOAjCQkAB2kEAAQjVAAjYhPg");
	var mask_1_graphics_238 = new cjs.Graphics().p("EALiAk+QnjiojgnLQjfnNCnnjQCmnkHMjgMAQ5AiuQkICAkPAAQjKAAjPhHg");
	var mask_1_graphics_239 = new cjs.Graphics().p("EALvAlGQnnifjpnHQjonICenmQCcnnHIjpMARkAiYQkQCLkbAAQi/AAjEg/g");
	var mask_1_graphics_240 = new cjs.Graphics().p("EAL7AlNQnqiVjxnCQjxnECUnpQCTnqHDjyMASPAiCQkYCWknAAQi0AAi6g4g");
	var mask_1_graphics_241 = new cjs.Graphics().p("EAMHAlUQnsiMj6m9Qj6m/CLnsQCJntG/j6MAS4AhrQkfChkzAAQiqAAivgxg");
	var mask_1_graphics_242 = new cjs.Graphics().p("EAMUAlbQnviDkDm4QkCm6CBnvQCAnvG5kDMATjAhTQknCtk/AAQifAAikgqg");
	var mask_1_graphics_243 = new cjs.Graphics().p("EAMhAlgQnyh4kLm0QkKm0B3nxQB3nyG0kMMAULAg7QkuC5lMAAQiTAAiZglg");
	var mask_1_graphics_244 = new cjs.Graphics().p("EAMuAlmQn0hvkTmuQkTmwBunzQBtn0GukUMAU0AghQk1DGlYAAQiIAAiOgfg");
	var mask_1_graphics_245 = new cjs.Graphics().p("EAM8AlrQn2hlkcmpQkbmqBkn1QBkn3GokcMAVcAgHQk7DTllAAQh9AAiCgag");
	var mask_1_graphics_246 = new cjs.Graphics().p("EANKAlwQn4hckkmjQkkmkBan3QBbn5GikkIWEfsQlBDglzAAQhxAAh2gVg");
	var mask_1_graphics_247 = new cjs.Graphics().p("EANXAl0Qn5hSksmdQksmfBRn5QBQn6GdksIWrfQQlHDtmBAAQhmAAhqgQg");
	var mask_1_graphics_248 = new cjs.Graphics().p("EANmAl3Qn7hHk0mYQk0mZBGn6QBHn7GXk0IXSezQlND7mOAAQhbAAhdgNg");
	var mask_1_graphics_249 = new cjs.Graphics().p("EAN0Al7Qn8g+k8mSQk8mSA9n8QA9n8GRk9IX3eWQlSEKmdAAQhOAAhRgJg");
	var mask_1_graphics_250 = new cjs.Graphics().p("EAOCAl9Qn9g0lEmLQlDmMAzn9QAzn+GLlEIYcd5QlWEYmsAAQhCAAhFgHg");
	var mask_1_graphics_251 = new cjs.Graphics().p("EAORAmAQn+gqlLmGQlLmFApn+QApn/GElLIZCdZQlcEom7AAQg2AAg3gEg");
	var mask_1_graphics_252 = new cjs.Graphics().p("EAOgAmBQn/gglTl+QlSmAAfn+QAfn/F+lTIZmc6QlgE3nLAAQgpAAgqgDg");
	var mask_1_graphics_253 = new cjs.Graphics().p("EAOvAmDQn/gXlal4Qlal4AVn/QAVoAF3laIaKcaQlkFHnbAAIg5gBg");
	var mask_1_graphics_254 = new cjs.Graphics().p("EAO+AmDQn/gMlilxQlhlyALn/QAMoAFwliIasb5QlmFYntAAIgegBg");
	var mask_1_graphics_255 = new cjs.Graphics().p("EAPOAmEQoAgDlplqQlolrACn/QABoAFqlpIbObYQlqFon+AAIgCAAg");
	var mask_1_graphics_256 = new cjs.Graphics().p("EABuAgoQlvlkgJn/QgIoAFilwIbwa1QljFwoAAKIgVAAQnyAAlolcg");
	var mask_1_graphics_257 = new cjs.Graphics().p("EAB3Ag4Ql2lcgSn/QgToAFcl2IcRaSQldF3n/ATIgxABQngAAlllMg");
	var mask_1_graphics_258 = new cjs.Graphics().p("EACBAhJQl9lWgcn+Qgdn/FUl+IcyZvQlVF+n/AdQgmACglAAQnRAAlgk7g");
	var mask_1_graphics_259 = new cjs.Graphics().p("EACLAhYQmDlOgmn9Qgnn/FNmEIdRZLQlOGEn+AnQgzAEgzAAQnAAAlcksg");
	var mask_1_graphics_260 = new cjs.Graphics().p("EACWAhnQmKlGgwn8Qgwn+FGmLIdvYnQlGGKn9AxQhBAGg/AAQmwAAlYkdg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(120).to({graphics:mask_1_graphics_120,x:203.2,y:197.9}).wait(1).to({graphics:mask_1_graphics_121,x:203.2,y:196.7}).wait(1).to({graphics:mask_1_graphics_122,x:203.1,y:195.6}).wait(1).to({graphics:mask_1_graphics_123,x:203.1,y:194.4}).wait(1).to({graphics:mask_1_graphics_124,x:203.1,y:193.2}).wait(1).to({graphics:mask_1_graphics_125,x:203.1,y:192}).wait(1).to({graphics:mask_1_graphics_126,x:203.1,y:190.9}).wait(1).to({graphics:mask_1_graphics_127,x:203.1,y:189.7}).wait(1).to({graphics:mask_1_graphics_128,x:203,y:188.5}).wait(1).to({graphics:mask_1_graphics_129,x:203,y:187.3}).wait(1).to({graphics:mask_1_graphics_130,x:203,y:186.1}).wait(1).to({graphics:mask_1_graphics_131,x:203,y:184.9}).wait(1).to({graphics:mask_1_graphics_132,x:203,y:183.7}).wait(1).to({graphics:mask_1_graphics_133,x:203,y:182.5}).wait(1).to({graphics:mask_1_graphics_134,x:203,y:181.9}).wait(1).to({graphics:mask_1_graphics_135,x:203,y:183.1}).wait(1).to({graphics:mask_1_graphics_136,x:202.9,y:184.3}).wait(1).to({graphics:mask_1_graphics_137,x:202.9,y:185.5}).wait(1).to({graphics:mask_1_graphics_138,x:202.8,y:186.7}).wait(1).to({graphics:mask_1_graphics_139,x:202.7,y:187.9}).wait(1).to({graphics:mask_1_graphics_140,x:202.5,y:189.1}).wait(1).to({graphics:mask_1_graphics_141,x:202.4,y:190.3}).wait(1).to({graphics:mask_1_graphics_142,x:202.2,y:191.5}).wait(1).to({graphics:mask_1_graphics_143,x:202,y:192.7}).wait(1).to({graphics:mask_1_graphics_144,x:201.7,y:193.8}).wait(1).to({graphics:mask_1_graphics_145,x:201.5,y:195}).wait(1).to({graphics:mask_1_graphics_146,x:201.2,y:196.2}).wait(1).to({graphics:mask_1_graphics_147,x:200.9,y:197.3}).wait(1).to({graphics:mask_1_graphics_148,x:200.6,y:198.5}).wait(1).to({graphics:mask_1_graphics_149,x:200.3,y:199.7}).wait(1).to({graphics:mask_1_graphics_150,x:199.9,y:200.8}).wait(1).to({graphics:mask_1_graphics_151,x:199.5,y:201.9}).wait(1).to({graphics:mask_1_graphics_152,x:199.1,y:203.1}).wait(1).to({graphics:mask_1_graphics_153,x:198.7,y:204.2}).wait(1).to({graphics:mask_1_graphics_154,x:198.2,y:205.3}).wait(1).to({graphics:mask_1_graphics_155,x:197.8,y:206.4}).wait(1).to({graphics:mask_1_graphics_156,x:197.3,y:207.5}).wait(1).to({graphics:mask_1_graphics_157,x:196.8,y:208.6}).wait(1).to({graphics:mask_1_graphics_158,x:196.2,y:209.7}).wait(1).to({graphics:mask_1_graphics_159,x:195.7,y:210.7}).wait(1).to({graphics:mask_1_graphics_160,x:195.1,y:211.8}).wait(1).to({graphics:mask_1_graphics_161,x:194.5,y:212.8}).wait(1).to({graphics:mask_1_graphics_162,x:193.9,y:213.9}).wait(1).to({graphics:mask_1_graphics_163,x:193.2,y:214.9}).wait(1).to({graphics:mask_1_graphics_164,x:192.6,y:215.9}).wait(1).to({graphics:mask_1_graphics_165,x:191.9,y:216.9}).wait(1).to({graphics:mask_1_graphics_166,x:191.2,y:217.9}).wait(1).to({graphics:mask_1_graphics_167,x:190.5,y:218.8}).wait(1).to({graphics:mask_1_graphics_168,x:189.8,y:219.8}).wait(1).to({graphics:mask_1_graphics_169,x:189,y:220.7}).wait(1).to({graphics:mask_1_graphics_170,x:188.3,y:221.7}).wait(1).to({graphics:mask_1_graphics_171,x:187.5,y:222.6}).wait(1).to({graphics:mask_1_graphics_172,x:186.7,y:223.5}).wait(1).to({graphics:mask_1_graphics_173,x:185.9,y:224.3}).wait(1).to({graphics:mask_1_graphics_174,x:185,y:225.2}).wait(1).to({graphics:mask_1_graphics_175,x:184.2,y:226}).wait(1).to({graphics:mask_1_graphics_176,x:183.3,y:226.9}).wait(1).to({graphics:mask_1_graphics_177,x:182.4,y:227.7}).wait(1).to({graphics:mask_1_graphics_178,x:181.5,y:228.5}).wait(1).to({graphics:mask_1_graphics_179,x:180.6,y:229.2}).wait(1).to({graphics:mask_1_graphics_180,x:179.7,y:230}).wait(1).to({graphics:mask_1_graphics_181,x:178.7,y:230.7}).wait(1).to({graphics:mask_1_graphics_182,x:177.8,y:231.5}).wait(1).to({graphics:mask_1_graphics_183,x:176.8,y:232.2}).wait(1).to({graphics:mask_1_graphics_184,x:175.8,y:232.9}).wait(1).to({graphics:mask_1_graphics_185,x:174.8,y:233.5}).wait(1).to({graphics:mask_1_graphics_186,x:173.8,y:234.2}).wait(1).to({graphics:mask_1_graphics_187,x:172.8,y:234.8}).wait(1).to({graphics:mask_1_graphics_188,x:171.7,y:235.4}).wait(1).to({graphics:mask_1_graphics_189,x:170.7,y:236}).wait(1).to({graphics:mask_1_graphics_190,x:169.6,y:236.5}).wait(1).to({graphics:mask_1_graphics_191,x:168.5,y:237.1}).wait(1).to({graphics:mask_1_graphics_192,x:167.5,y:237.6}).wait(1).to({graphics:mask_1_graphics_193,x:166.4,y:238.1}).wait(1).to({graphics:mask_1_graphics_194,x:165.3,y:238.6}).wait(1).to({graphics:mask_1_graphics_195,x:164.2,y:239.1}).wait(1).to({graphics:mask_1_graphics_196,x:163.1,y:239.5}).wait(1).to({graphics:mask_1_graphics_197,x:161.9,y:239.9}).wait(1).to({graphics:mask_1_graphics_198,x:160.8,y:240.3}).wait(1).to({graphics:mask_1_graphics_199,x:159.7,y:240.7}).wait(1).to({graphics:mask_1_graphics_200,x:158.5,y:241}).wait(1).to({graphics:mask_1_graphics_201,x:157.4,y:241.3}).wait(1).to({graphics:mask_1_graphics_202,x:156.2,y:241.7}).wait(1).to({graphics:mask_1_graphics_203,x:155,y:241.9}).wait(1).to({graphics:mask_1_graphics_204,x:153.9,y:242.2}).wait(1).to({graphics:mask_1_graphics_205,x:152.7,y:242.4}).wait(1).to({graphics:mask_1_graphics_206,x:151.5,y:242.6}).wait(1).to({graphics:mask_1_graphics_207,x:150.3,y:242.8}).wait(1).to({graphics:mask_1_graphics_208,x:149.1,y:243}).wait(1).to({graphics:mask_1_graphics_209,x:147.9,y:243.1}).wait(1).to({graphics:mask_1_graphics_210,x:146.8,y:243.3}).wait(1).to({graphics:mask_1_graphics_211,x:145.6,y:243.4}).wait(1).to({graphics:mask_1_graphics_212,x:144.4,y:243.4}).wait(1).to({graphics:mask_1_graphics_213,x:143.2,y:243.5}).wait(1).to({graphics:mask_1_graphics_214,x:142,y:243.5}).wait(1).to({graphics:mask_1_graphics_215,x:141.6,y:243.5}).wait(1).to({graphics:mask_1_graphics_216,x:142.8,y:243.5}).wait(1).to({graphics:mask_1_graphics_217,x:144,y:243.5}).wait(1).to({graphics:mask_1_graphics_218,x:145.2,y:243.5}).wait(1).to({graphics:mask_1_graphics_219,x:146.4,y:243.6}).wait(1).to({graphics:mask_1_graphics_220,x:147.6,y:243.6}).wait(1).to({graphics:mask_1_graphics_221,x:148.7,y:243.6}).wait(1).to({graphics:mask_1_graphics_222,x:149.9,y:243.6}).wait(1).to({graphics:mask_1_graphics_223,x:151.1,y:243.6}).wait(1).to({graphics:mask_1_graphics_224,x:152.3,y:243.6}).wait(1).to({graphics:mask_1_graphics_225,x:153.5,y:243.7}).wait(1).to({graphics:mask_1_graphics_226,x:154.7,y:243.7}).wait(1).to({graphics:mask_1_graphics_227,x:155.8,y:243.7}).wait(1).to({graphics:mask_1_graphics_228,x:157,y:243.7}).wait(1).to({graphics:mask_1_graphics_229,x:158.2,y:243.7}).wait(1).to({graphics:mask_1_graphics_230,x:159.3,y:243.7}).wait(1).to({graphics:mask_1_graphics_231,x:160.4,y:243.7}).wait(1).to({graphics:mask_1_graphics_232,x:161.6,y:243.7}).wait(1).to({graphics:mask_1_graphics_233,x:162.7,y:243.7}).wait(1).to({graphics:mask_1_graphics_234,x:163.8,y:243.7}).wait(1).to({graphics:mask_1_graphics_235,x:165,y:243.7}).wait(1).to({graphics:mask_1_graphics_236,x:166.1,y:243.7}).wait(1).to({graphics:mask_1_graphics_237,x:167.2,y:243.7}).wait(1).to({graphics:mask_1_graphics_238,x:168.2,y:243.7}).wait(1).to({graphics:mask_1_graphics_239,x:169.3,y:243.7}).wait(1).to({graphics:mask_1_graphics_240,x:170.4,y:243.7}).wait(1).to({graphics:mask_1_graphics_241,x:171.4,y:243.7}).wait(1).to({graphics:mask_1_graphics_242,x:172.5,y:243.7}).wait(1).to({graphics:mask_1_graphics_243,x:173.5,y:243.7}).wait(1).to({graphics:mask_1_graphics_244,x:174.5,y:243.7}).wait(1).to({graphics:mask_1_graphics_245,x:175.5,y:243.7}).wait(1).to({graphics:mask_1_graphics_246,x:176.5,y:243.7}).wait(1).to({graphics:mask_1_graphics_247,x:177.5,y:243.6}).wait(1).to({graphics:mask_1_graphics_248,x:178.5,y:243.6}).wait(1).to({graphics:mask_1_graphics_249,x:179.4,y:243.6}).wait(1).to({graphics:mask_1_graphics_250,x:180.3,y:243.6}).wait(1).to({graphics:mask_1_graphics_251,x:181.3,y:243.6}).wait(1).to({graphics:mask_1_graphics_252,x:182.2,y:243.6}).wait(1).to({graphics:mask_1_graphics_253,x:183.1,y:243.6}).wait(1).to({graphics:mask_1_graphics_254,x:183.9,y:243.6}).wait(1).to({graphics:mask_1_graphics_255,x:184.8,y:243.6}).wait(1).to({graphics:mask_1_graphics_256,x:185.6,y:243.6}).wait(1).to({graphics:mask_1_graphics_257,x:186.5,y:243.6}).wait(1).to({graphics:mask_1_graphics_258,x:187.3,y:243.6}).wait(1).to({graphics:mask_1_graphics_259,x:188.1,y:243.6}).wait(1).to({graphics:mask_1_graphics_260,x:188.9,y:243.6}).wait(40));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(25,0,1).p("Ar7gNQABhAAJg8QAmjxCvi3QDgjoE8AAQE8AADgDoQDgDpAAFIQAAFJjgDpQjgDok8AAQk8AAjgjoQh0h5g4iU");
	this.shape_2.setTransform(275.3,365.8,1,1,0,0,180);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(120).to({_off:false},0).wait(180));

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("EgBQAgbQlrlrAAoBMAmrAAAQAAIBlqFrQlsFqoAAAQoBAAlplqg");
	var mask_2_graphics_1 = new cjs.Graphics().p("EgA7AgvQlzligMoAMAmpgA7QANIAliFzQliFzoAAMIgiABQnrAAlmlWg");
	var mask_2_graphics_2 = new cjs.Graphics().p("EgAlAhDQl8lZgYoAMAmngB2QAZIAlYF8QlaF7oAAYQgiACghAAQnWAAlhlCg");
	var mask_2_graphics_3 = new cjs.Graphics().p("EgAPAhXQmElQgln/MAmkgCyQAlH/lPGEQlQGDn/AlQgzAEgxAAQnCAAlckug");
	var mask_2_graphics_4 = new cjs.Graphics().p("EAAHAhqQmLlHgxn+MAmfgDtQAxH/lGGLQlHGMn+AxQhDAGhAAAQmvAAlXkbg");
	var mask_2_graphics_5 = new cjs.Graphics().p("EAAeAh8QmTk9g9n8MAmYgEoQA+H9k8GTQk+GTn8A9QhTAKhQAAQmcAAlRkJg");
	var mask_2_graphics_6 = new cjs.Graphics().p("EAA1AiOQmakzhKn7MAmRgFjQBKH7kzGbQkzGbn7BJQhiAOhfAAQmKAAlLj3g");
	var mask_2_graphics_7 = new cjs.Graphics().p("EABNAifQmikphVn5MAmIgGdQBVH5koGiQkqGin5BVQhxAThtAAQl5AAlEjmg");
	var mask_2_graphics_8 = new cjs.Graphics().p("EABlAiwQmokfhin3MAl9gHYQBiH3kfGqQkfGon3BiQiAAZh7AAQloAAk9jWg");
	var mask_2_graphics_9 = new cjs.Graphics().p("EAB+AjAQmvkVhun0MAlxgISQBuH1kUGwQkWGvn0BuQiPAfiIAAQlZAAk0jGg");
	var mask_2_graphics_10 = new cjs.Graphics().p("EACXAjQQm2kLh6nyMAlkgJLQB6HykKG2QkLG2nxB6QidAmiWAAQlJAAksi2g");
	var mask_2_graphics_11 = new cjs.Graphics().p("EACwAjfQm8kAiFnvMAlVgKFQCFHvj/G9QkBG8nuCFQiqAuikAAQk6AAkjing");
	var mask_2_graphics_12 = new cjs.Graphics().p("EADKAjtQnCj1iRnsMAlEgK+QCSHsj1HDQj1HCnrCRQi4A2ixAAQkrAAkaiZg");
	var mask_2_graphics_13 = new cjs.Graphics().p("EADkAj7QnIjridnoMAk0gL2QCdHojqHIQjrHInnCdQjFA/i/AAQkcAAkQiLg");
	var mask_2_graphics_14 = new cjs.Graphics().p("EAD/AkIQnOjgionkMAkggMuQCpHkjfHOQjgHNnjCoQjRBJjNAAQkNAAkGh+g");
	var mask_2_graphics_15 = new cjs.Graphics().p("EAEZAkUQnSjUi0ngMAkMgNmQC0HgjTHTQjVHSnfC0QjdBTjaAAQkAAAj8hyg");
	var mask_2_graphics_16 = new cjs.Graphics().p("EAE0AkgQnXjJjAnbMAj3gOeQDAHbjIHYQjKHYnbC/QjoBejoAAQjyAAjxhmg");
	var mask_2_graphics_17 = new cjs.Graphics().p("EAFQAkrQnci9jLnXMAjggPUQDLHWi9HdQi+HcnWDLQj0Bpj2AAQjkAAjlhbg");
	var mask_2_graphics_18 = new cjs.Graphics().p("EAFsAk2QnhiyjWnSMAjIgQKQDWHRixHhQizHhnRDWQj/B1kDAAQjXAAjZhQg");
	var mask_2_graphics_19 = new cjs.Graphics().p("EAGIAlAQnlinjhnMMAiugRAQDhHMilHlQioHlnLDhQkKCCkRAAQjJAAjNhGg");
	var mask_2_graphics_20 = new cjs.Graphics().p("EAGkAlJQnpibjsnGMAiUgR1QDsHGiaHpQicHpnGDsQkTCPkgAAQi7AAjBg9g");
	var mask_2_graphics_21 = new cjs.Graphics().p("EAHAAlSQnsiPj3nBMAh4gSqQD3HBiOHtQiQHsnBD3QkdCdkuAAQiuAAi0g0g");
	var mask_2_graphics_22 = new cjs.Graphics().p("EAHdAlaQnviDkCm7MAhagTdQECG7iCHvQiEHwm7ECQkmCrk9AAQigAAingsg");
	var mask_2_graphics_23 = new cjs.Graphics().p("EAH6AlhQnzh3kMm1MAg8gUQQENG1h3HzQh4Hym0EMQkvC7lMAAQiTAAiZglg");
	var mask_2_graphics_24 = new cjs.Graphics().p("EAIXAloQn2hskWmuMAgdgVBQEWGuhqH1QhsH1muEXQk3DJlcAAQiFAAiLgdg");
	var mask_2_graphics_25 = new cjs.Graphics().p("EAI0AluQn4hfkgmoIf71zQEhGnheH4QhgH4mnEgQk/DalsAAQh3AAh9gXg");
	var mask_2_graphics_26 = new cjs.Graphics().p("EAJSAlzQn7hTkqmgIfa2kQEqGghSH6QhUH6mgErQlGDql8AAQhqAAhtgSg");
	var mask_2_graphics_27 = new cjs.Graphics().p("EAJvAl4Qn8hHk0mZIe23UQE1GZhGH8QhIH8mZE0QlND8mNAAQhbAAhfgNg");
	var mask_2_graphics_28 = new cjs.Graphics().p("EAKNAl7Qn+g6k+mSIeS4CQE/GRg6H+Qg8H9mRE+QlTEOmgAAQhMAAhPgKg");
	var mask_2_graphics_29 = new cjs.Graphics().p("EAKqAl/Qn/gvlHmKIdt4wQFIGKguH+QgwH/mJFIQlZEfmyAAQg+AAg/gFg");
	var mask_2_graphics_30 = new cjs.Graphics().p("EALIAmBQoAgilQmCIdF5dQFSGBgiIAQgjH/mBFRQlfEznFAAQguAAgvgDg");
	var mask_2_graphics_31 = new cjs.Graphics().p("EALmAmDQoBgWlal6Icf6JQFaF5gVIAQgXIBl5FaQljFGnaAAIg8gBg");
	var mask_2_graphics_32 = new cjs.Graphics().p("EAMDAmEQoBgKlilxIb161QFkFxgJIBQgLIAlwFjQloFbnvAAIgbAAg");
	var mask_2_graphics_33 = new cjs.Graphics().p("EgBLAgeIbM7fQFsFoADIBQACIBloFsQlpFsoAADIgHAAQn9AAlolmg");
	var mask_2_graphics_34 = new cjs.Graphics().p("EgA2AgzIah8JQF1FgAQIAQAOIBlgF0QlgF1n/APIgqABQnmAAlllRg");
	var mask_2_graphics_35 = new cjs.Graphics().p("EgAgAhHIZ28xQF9FXAbIAQAbIAlXF8QlXF+n/AbQglACglAAQnSAAlgk9g");
	var mask_2_graphics_36 = new cjs.Graphics().p("EgAKAhaIZJ9YQGFFOAoH/QAnH/lNGFQlOGFn+AoQg2AEg1AAQm+AAlbkqg");
	var mask_2_graphics_37 = new cjs.Graphics().p("EAAMAhtIYc9+QGNFEA1H+QAyH+lDGNQlFGNn9A0QhGAHhEAAQmrAAlWkXg");
	var mask_2_graphics_38 = new cjs.Graphics().p("EAAjAh/IXu+iQGVE6BAH8QA/H9k6GVQk7GVn8A/QhWALhTAAQmYAAlQkFg");
	var mask_2_graphics_39 = new cjs.Graphics().p("EAA6AiRIW//GQGcEwBNH7QBLH7kwGcQkxGcn6BMQhmAPhhAAQmHAAlKjzg");
	var mask_2_graphics_40 = new cjs.Graphics().p("EABSAiiIWP/pQGjEnBZH4QBXH6kmGjQknGjn4BYQh1AVhwAAQl1AAlDjjg");
	var mask_2_graphics_41 = new cjs.Graphics().p("EABqAiyMAVeggKQGqEdBlH2QBkH3kdGqQkcGqn2BlQiDAah+AAQlmAAk7jTg");
	var mask_2_graphics_42 = new cjs.Graphics().p("EACDAjCMAUsggqQGxESBxH0QBvH0kSGxQkSGxnzBwQiSAhiMAAQlVAAkzjDg");
	var mask_2_graphics_43 = new cjs.Graphics().p("EACcAjSMAT6ghKQG3EIB9HxQB7HykHG2QkIG4nxB8QifAoiaAAQlFAAkrizg");
	var mask_2_graphics_44 = new cjs.Graphics().p("EAC2AjhMATGghoQG+D9CIHuQCIHvj9G9Qj+G+ntCHQitAwinAAQk3AAkhikg");
	var mask_2_graphics_45 = new cjs.Graphics().p("EADPAjvMASTgiFQHEDzCUHqQCTHsjyHDQjzHDnqCUQi6A4i1AAQknAAkZiWg");
	var mask_2_graphics_46 = new cjs.Graphics().p("EADqAj8MARegifQHJDnCgHnQCfHojoHIQjnHKnnCfQjHBBjCAAQkZAAkOiJg");
	var mask_2_graphics_47 = new cjs.Graphics().p("EAEEAkJMAQpgi6QHPDdCrHjQCrHjjdHOQjcHPnjCrQjTBLjQAAQkLAAkEh8g");
	var mask_2_graphics_48 = new cjs.Graphics().p("EAEfAkWMAPzgjTQHUDRC3HfQC2HfjRHTQjSHVneC2QjfBVjdAAQj9AAj6hvg");
	var mask_2_graphics_49 = new cjs.Graphics().p("EAE6AkhMAO9gjqQHYDGDDHaQDBHbjFHYQjHHZnZDCQjsBgjqAAQjvAAjvhkg");
	var mask_2_graphics_50 = new cjs.Graphics().p("EAFWAksMAOGgkAQHdC7DOHVQDMHWi6HdQi7HdnVDNQj2Bsj5AAQjhAAjjhZg");
	var mask_2_graphics_51 = new cjs.Graphics().p("EAFxAk3MANPgkWQHhCwDZHQQDYHRivHhQivHinQDYQkBB4kHAAQjTAAjYhOg");
	var mask_2_graphics_52 = new cjs.Graphics().p("EAGOAlBMAMWgkpQHlCjDlHLQDjHMikHlQikHmnKDjQkMCFkUAAQjHAAjKhEg");
	var mask_2_graphics_53 = new cjs.Graphics().p("EAGqAlKMALegk7QHpCYDvHFQDuHGiYHpQiYHqnFDuQkVCSkjAAQi5AAi+g7g");
	var mask_2_graphics_54 = new cjs.Graphics().p("EAHGAlSMAKlglMQHtCMD6HAQD5HAiMHtQiNHtm/D5QkfCgkxAAQirAAiygzg");
	var mask_2_graphics_55 = new cjs.Graphics().p("EAHjAlaMAJsglaQHwB/EFG5QEDG7iAHvQiBHxm5EDQkoCvlAAAQieAAikgrg");
	var mask_2_graphics_56 = new cjs.Graphics().p("EAIAAliMAIyglpQHzBzEPGzQEOG0h0HyQh1H0myEOQkxC+lQAAQiQAAiWgjg");
	var mask_2_graphics_57 = new cjs.Graphics().p("EAIdAloMAH5gl2QH1BoEaGsQEYGuhpH1QhoH2msEYQk5DNlgAAQiCAAiIgcg");
	var mask_2_graphics_58 = new cjs.Graphics().p("EAI6AluMAG/gmBQH4BbEjGmQEjGmhdH4QhcH4mlEjQlBDdlwAAQh0AAh6gWg");
	var mask_2_graphics_59 = new cjs.Graphics().p("EAJYAlzMAGEgmLQH6BPEtGfQEtGfhRH6QhQH6meEtQlIDumAAAQhnAAhqgRg");
	var mask_2_graphics_60 = new cjs.Graphics().p("EAJ1Al3MAFJgmTQH8BDE4GXQE2GYhEH8QhEH8mXE2QlPEAmSAAQhYAAhbgNg");
	var mask_2_graphics_61 = new cjs.Graphics().p("EAKTAl7MAEOgmaQH9A3FCGPQFAGRg4H8Qg4H+mQFAQlUERmkAAQhKABhLgJg");
	var mask_2_graphics_62 = new cjs.Graphics().p("EAKxAl+MADTgmgQH+ArFLGHQFJGJgrH+QgsH/mIFJQlaEkm3AAQg6AAg7gFg");
	var mask_2_graphics_63 = new cjs.Graphics().p("EALOAmAMACYgmkQIAAfFUF/QFSGBgfH+QggIAl/FTQlgE3nKAAQgqAAgsgDg");
	var mask_2_graphics_64 = new cjs.Graphics().p("EALsAmCMABdgmoQIAAUFdF2QFcF5gTH/QgUIAl3FcQllFLneAAIg1gBg");
	var mask_2_graphics_65 = new cjs.Graphics().p("EAMKAmDMAAhgmpQIBAHFlFtQFlFxgHH/QgHIBluFlQlpFfn0AAIgTAAg");
	var mask_2_graphics_66 = new cjs.Graphics().p("AMOgmQIAgGFvFlQFtFoAFIAQAGIBlmFtQloFvoAAFg");
	var mask_2_graphics_67 = new cjs.Graphics().p("ALwglQIAgSF3FcQF2FfASH/QARIBldF2QleF3oAASg");
	var mask_2_graphics_68 = new cjs.Graphics().p("ALSgjQIAgeF/FTQF+FWAeH/QAeH/lUF/QlVF/oAAeg");
	var mask_2_graphics_69 = new cjs.Graphics().p("AK1ggQH+gqGHFKQGHFMAqH+QAqH/lLGGQlMGIn+Aqg");
	var mask_2_graphics_70 = new cjs.Graphics().p("AKXgcQH9g2GPFAQGPFDA2H9QA2H+lBGOQlDGPn9A2g");
	var mask_2_graphics_71 = new cjs.Graphics().p("AJ5gXQH8hCGXE2QGWE6BCH7QBDH9k4GVQk5GXn8BDg");
	var mask_2_graphics_72 = new cjs.Graphics().p("AJcgRQH6hOGeEtQGdEvBPH6QBOH7kuGdQkuGen7BOg");
	var mask_2_graphics_73 = new cjs.Graphics().p("AI+gJQH5hbGlEjQGkElBbH4QBaH5kkGkQkkGln5Bbg");
	var mask_2_graphics_74 = new cjs.Graphics().p("AIhgBQH2hnGsEZQGrEbBnH2QBnH2kaGrQkbGsn2Bng");
	var mask_2_graphics_75 = new cjs.Graphics().p("AIEAIQHzhyGzEOQGyERByHzQBzH0kPGxQkRGznzBzg");
	var mask_2_graphics_76 = new cjs.Graphics().p("AHnASQHwh+G5EEQG5EHB+HwQB/HwkFG5QkGG5nwB+g");
	var mask_2_graphics_77 = new cjs.Graphics().p("AHKAeQHtiKG/D5QG/D8CKHtQCLHuj6G+Qj8G/ntCLg");
	var mask_2_graphics_78 = new cjs.Graphics().p("AGuAqQHpiVHFDuQHFDxCWHqQCWHqjvHEQjxHFnpCWg");
	var mask_2_graphics_79 = new cjs.Graphics().p("AGRA4QHmihHLDjQHKDmCiHmQCiHmjlHKQjlHLnmCig");
	var mask_2_graphics_80 = new cjs.Graphics().p("AF1BGQHiisHQDYQHQDbCtHiQCuHijaHPQjbHQnhCug");
	var mask_2_graphics_81 = new cjs.Graphics().p("AFZBWQHei4HVDNQHVDQC4HdQC6HejPHUQjPHWneC5g");
	var mask_2_graphics_82 = new cjs.Graphics().p("AE+BmQHZjDHaDCQHZDFDEHYQDFHajDHZQjEHanZDEg");
	var mask_2_graphics_83 = new cjs.Graphics().p("AEjB4QHUjPHeC3QHeC5DQHUQDQHUi4HeQi5HfnUDPg");
	var mask_2_graphics_84 = new cjs.Graphics().p("AEICKQHPjZHiCrQHjCtDaHPQDbHQisHhQitHjnPDbg");
	var mask_2_graphics_85 = new cjs.Graphics().p("ADtCeQHKjlHmCfQHnCjDlHJQDnHKihHmQiiHnnJDmg");
	var mask_2_graphics_86 = new cjs.Graphics().p("ADTCyQHEjwHqCUQHqCXDxHDQDxHFiVHpQiWHrnEDxg");
	var mask_2_graphics_87 = new cjs.Graphics().p("AC5DIQG+j7HuCIQHtCLD8G+QD7G+iJHtQiKHum+D8g");
	var mask_2_graphics_88 = new cjs.Graphics().p("ACfDeQG4kFHxB8QHxB/EGG3QEGG5h9HwQh+Hxm4EGg");
	var mask_2_graphics_89 = new cjs.Graphics().p("ACGD1QGykQH0BxQHzBzERGxQEQGyhxHzQhyH0myERg");
	var mask_2_graphics_90 = new cjs.Graphics().p("ABuENQGrkaH2BkQH2BnEbGrQEbGrhmH2QhmH3mrEag");
	var mask_2_graphics_91 = new cjs.Graphics().p("ABVEmQGkklH5BZQH4BbElGkQEmGkhaH4QhaH5mkElg");
	var mask_2_graphics_92 = new cjs.Graphics().p("AA9FAQGdkvH7BNQH6BPEvGcQEvGehNH5QhOH7mdEvg");
	var mask_2_graphics_93 = new cjs.Graphics().p("AAmFbQGVk5H9BBQH8BCE4GWQE6GVhCH8QhCH9mVE5g");
	var mask_2_graphics_94 = new cjs.Graphics().p("AAPF2QGOlCH9A1QH+A2FCGOQFDGOg1H9Qg2H+mOFCg");
	var mask_2_graphics_95 = new cjs.Graphics().p("AgHGTQGFlMH/AoQH/ArFLGFQFNGHgpH+QgqH/mGFMg");
	var mask_2_graphics_96 = new cjs.Graphics().p("AgdGwQF9lVH/AcQIAAeFVF+QFVF+gcH/QgdIAl+FVg");
	var mask_2_graphics_97 = new cjs.Graphics().p("AgzHOQF1leIAAQQIAARFeF2QFfF2gRH/QgRIBl1Feg");
	var mask_2_graphics_98 = new cjs.Graphics().p("AhIHtQFslnIAADQIBAGFnFtQFnFtgEIAQgFIBltFng");
	var mask_2_graphics_99 = new cjs.Graphics().p("AhdIMQFjlvIBgJQIAgHFwFkQFwFlAHIAQAIIBlkFvg");
	var mask_2_graphics_100 = new cjs.Graphics().p("AhyItQFbl5IAgUQIAgUF4FcQF4FcAVH/QAUIAlcF5g");
	var mask_2_graphics_101 = new cjs.Graphics().p("AiGJOQFSmBH/ghQIAgfGAFSQGBFTAgH+QAgIAlSGBg");
	var mask_2_graphics_102 = new cjs.Graphics().p("AiZJvQFImIH+gtQH/gsGIFJQGJFJAsH+QAtH/lJGIg");
	var mask_2_graphics_103 = new cjs.Graphics().p("AisKSQE/mQH9g6QH9g4GQE/QGRFAA4H9QA5H+k/GQg");
	var mask_2_graphics_104 = new cjs.Graphics().p("Ai+K1QE1mYH7hGQH8hEGXE2QGZE2BFH7QBFH8k2GYg");
	var mask_2_graphics_105 = new cjs.Graphics().p("AjQLYQErmeH6hSQH6hRGeEsQGgEtBRH5QBRH6ksGfg");
	var mask_2_graphics_106 = new cjs.Graphics().p("AjhL9QEhmmH3heQH4hdGmEiQGmEjBeH3QBdH4kiGmg");
	var mask_2_graphics_107 = new cjs.Graphics().p("AjyMiQEXmtH1hqQH2hpGsEYQGuEYBpH1QBpH2kYGtg");
	var mask_2_graphics_108 = new cjs.Graphics().p("AkCNHQEMmzHzh2QHzh1GzEOQG0EOB1HyQB2HzkOGzg");
	var mask_2_graphics_109 = new cjs.Graphics().p("AkSNtQEDm5HviCQHwiBG6EDQG6EDCBHvQCBHxkDG6g");
	var mask_2_graphics_110 = new cjs.Graphics().p("AkhOUQD5nAHriOQHtiMHAD4QHAD5CNHsQCNHtj4HAg");
	var mask_2_graphics_111 = new cjs.Graphics().p("AkvO7QDunGHoiZQHpiYHFDtQHGDuCZHoQCZHqjtHGg");
	var mask_2_graphics_112 = new cjs.Graphics().p("Ak8PjQDinMHkilQHmijHLDiQHMDjCkHkQCkHmjiHMg");
	var mask_2_graphics_113 = new cjs.Graphics().p("AlJQLQDXnRHgiwQHiiwHQDYQHRDYCwHgQCwHijXHQg");
	var mask_2_graphics_114 = new cjs.Graphics().p("AlVQzQDMnVHci8QHdi7HVDMQHWDNC7HcQC8HdjMHWg");
	var mask_2_graphics_115 = new cjs.Graphics().p("AlhRcQDBnaHXjIQHZjGHaDBQHaDCDHHXQDHHZjBHag");
	var mask_2_graphics_116 = new cjs.Graphics().p("AlsSGQC2nfHSjTQHUjRHeC1QHfC2DSHTQDTHTi2Hfg");
	var mask_2_graphics_117 = new cjs.Graphics().p("Al2SvQCqnjHNjeQHPjcHiCqQHkCqDdHOQDdHOiqHjg");
	var mask_2_graphics_118 = new cjs.Graphics().p("Al/TZQCenmHHjpQHKjoHmCfQHoCeDoHIQDoHJieHng");
	var mask_2_graphics_119 = new cjs.Graphics().p("AmIUEQCTnrHBjzQHEjzHqCTQHrCTDzHCQDzHEiSHqg");
	var mask_2_graphics_120 = new cjs.Graphics().p("AmQUvQCHnuG8j/QG9j9HuCHQHuCHD+G8QD+G+iHHug");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:203.2,y:243.7}).wait(1).to({graphics:mask_2_graphics_1,x:203.2,y:243.7}).wait(1).to({graphics:mask_2_graphics_2,x:203.2,y:243.7}).wait(1).to({graphics:mask_2_graphics_3,x:203.2,y:243.7}).wait(1).to({graphics:mask_2_graphics_4,x:203.2,y:243.7}).wait(1).to({graphics:mask_2_graphics_5,x:203.2,y:243.7}).wait(1).to({graphics:mask_2_graphics_6,x:203.3,y:243.7}).wait(1).to({graphics:mask_2_graphics_7,x:203.3,y:243.7}).wait(1).to({graphics:mask_2_graphics_8,x:203.3,y:243.8}).wait(1).to({graphics:mask_2_graphics_9,x:203.3,y:243.8}).wait(1).to({graphics:mask_2_graphics_10,x:203.3,y:243.8}).wait(1).to({graphics:mask_2_graphics_11,x:203.3,y:243.8}).wait(1).to({graphics:mask_2_graphics_12,x:203.4,y:243.8}).wait(1).to({graphics:mask_2_graphics_13,x:203.4,y:243.8}).wait(1).to({graphics:mask_2_graphics_14,x:203.4,y:243.8}).wait(1).to({graphics:mask_2_graphics_15,x:203.4,y:243.8}).wait(1).to({graphics:mask_2_graphics_16,x:203.4,y:243.8}).wait(1).to({graphics:mask_2_graphics_17,x:203.4,y:243.8}).wait(1).to({graphics:mask_2_graphics_18,x:203.4,y:243.8}).wait(1).to({graphics:mask_2_graphics_19,x:203.4,y:243.8}).wait(1).to({graphics:mask_2_graphics_20,x:203.4,y:243.8}).wait(1).to({graphics:mask_2_graphics_21,x:203.4,y:243.8}).wait(1).to({graphics:mask_2_graphics_22,x:203.4,y:243.8}).wait(1).to({graphics:mask_2_graphics_23,x:203.3,y:243.8}).wait(1).to({graphics:mask_2_graphics_24,x:203.3,y:243.7}).wait(1).to({graphics:mask_2_graphics_25,x:203.3,y:243.7}).wait(1).to({graphics:mask_2_graphics_26,x:203.3,y:243.7}).wait(1).to({graphics:mask_2_graphics_27,x:203.3,y:243.7}).wait(1).to({graphics:mask_2_graphics_28,x:203.3,y:243.7}).wait(1).to({graphics:mask_2_graphics_29,x:203.2,y:243.6}).wait(1).to({graphics:mask_2_graphics_30,x:203.2,y:243.6}).wait(1).to({graphics:mask_2_graphics_31,x:203.2,y:243.6}).wait(1).to({graphics:mask_2_graphics_32,x:203.2,y:243.6}).wait(1).to({graphics:mask_2_graphics_33,x:203.2,y:243.6}).wait(1).to({graphics:mask_2_graphics_34,x:203.2,y:243.6}).wait(1).to({graphics:mask_2_graphics_35,x:203.2,y:243.6}).wait(1).to({graphics:mask_2_graphics_36,x:203.2,y:243.6}).wait(1).to({graphics:mask_2_graphics_37,x:203.2,y:243.6}).wait(1).to({graphics:mask_2_graphics_38,x:203.3,y:243.6}).wait(1).to({graphics:mask_2_graphics_39,x:203.3,y:243.6}).wait(1).to({graphics:mask_2_graphics_40,x:203.3,y:243.7}).wait(1).to({graphics:mask_2_graphics_41,x:203.3,y:243.7}).wait(1).to({graphics:mask_2_graphics_42,x:203.3,y:243.7}).wait(1).to({graphics:mask_2_graphics_43,x:203.3,y:243.7}).wait(1).to({graphics:mask_2_graphics_44,x:203.3,y:243.7}).wait(1).to({graphics:mask_2_graphics_45,x:203.4,y:243.7}).wait(1).to({graphics:mask_2_graphics_46,x:203.4,y:243.7}).wait(1).to({graphics:mask_2_graphics_47,x:203.4,y:243.7}).wait(1).to({graphics:mask_2_graphics_48,x:203.4,y:243.7}).wait(1).to({graphics:mask_2_graphics_49,x:203.4,y:243.7}).wait(1).to({graphics:mask_2_graphics_50,x:203.4,y:243.7}).wait(1).to({graphics:mask_2_graphics_51,x:203.4,y:243.7}).wait(1).to({graphics:mask_2_graphics_52,x:203.4,y:243.7}).wait(1).to({graphics:mask_2_graphics_53,x:203.3,y:243.7}).wait(1).to({graphics:mask_2_graphics_54,x:203.3,y:243.7}).wait(1).to({graphics:mask_2_graphics_55,x:203.3,y:243.7}).wait(1).to({graphics:mask_2_graphics_56,x:203.3,y:243.7}).wait(1).to({graphics:mask_2_graphics_57,x:203.3,y:243.6}).wait(1).to({graphics:mask_2_graphics_58,x:203.3,y:243.6}).wait(1).to({graphics:mask_2_graphics_59,x:203.2,y:243.6}).wait(1).to({graphics:mask_2_graphics_60,x:203.2,y:243.6}).wait(1).to({graphics:mask_2_graphics_61,x:203.2,y:243.6}).wait(1).to({graphics:mask_2_graphics_62,x:203.2,y:243.5}).wait(1).to({graphics:mask_2_graphics_63,x:203.2,y:243.5}).wait(1).to({graphics:mask_2_graphics_64,x:203.2,y:243.5}).wait(1).to({graphics:mask_2_graphics_65,x:203.1,y:243.5}).wait(1).to({graphics:mask_2_graphics_66,x:203.1,y:243.5}).wait(1).to({graphics:mask_2_graphics_67,x:203.1,y:243.5}).wait(1).to({graphics:mask_2_graphics_68,x:203.2,y:243.4}).wait(1).to({graphics:mask_2_graphics_69,x:203.2,y:243.3}).wait(1).to({graphics:mask_2_graphics_70,x:203.2,y:243.1}).wait(1).to({graphics:mask_2_graphics_71,x:203.2,y:243}).wait(1).to({graphics:mask_2_graphics_72,x:203.2,y:242.7}).wait(1).to({graphics:mask_2_graphics_73,x:203.2,y:242.5}).wait(1).to({graphics:mask_2_graphics_74,x:203.2,y:242.2}).wait(1).to({graphics:mask_2_graphics_75,x:203.3,y:241.9}).wait(1).to({graphics:mask_2_graphics_76,x:203.3,y:241.5}).wait(1).to({graphics:mask_2_graphics_77,x:203.3,y:241.2}).wait(1).to({graphics:mask_2_graphics_78,x:203.3,y:240.7}).wait(1).to({graphics:mask_2_graphics_79,x:203.3,y:240.3}).wait(1).to({graphics:mask_2_graphics_80,x:203.3,y:239.8}).wait(1).to({graphics:mask_2_graphics_81,x:203.3,y:239.3}).wait(1).to({graphics:mask_2_graphics_82,x:203.3,y:238.7}).wait(1).to({graphics:mask_2_graphics_83,x:203.3,y:238.1}).wait(1).to({graphics:mask_2_graphics_84,x:203.3,y:237.5}).wait(1).to({graphics:mask_2_graphics_85,x:203.3,y:236.9}).wait(1).to({graphics:mask_2_graphics_86,x:203.3,y:236.2}).wait(1).to({graphics:mask_2_graphics_87,x:203.3,y:235.5}).wait(1).to({graphics:mask_2_graphics_88,x:203.2,y:234.7}).wait(1).to({graphics:mask_2_graphics_89,x:203.2,y:234}).wait(1).to({graphics:mask_2_graphics_90,x:203.2,y:233.1}).wait(1).to({graphics:mask_2_graphics_91,x:203.2,y:232.3}).wait(1).to({graphics:mask_2_graphics_92,x:203.2,y:231.4}).wait(1).to({graphics:mask_2_graphics_93,x:203.1,y:230.6}).wait(1).to({graphics:mask_2_graphics_94,x:203.1,y:229.6}).wait(1).to({graphics:mask_2_graphics_95,x:203.1,y:228.7}).wait(1).to({graphics:mask_2_graphics_96,x:203.1,y:227.7}).wait(1).to({graphics:mask_2_graphics_97,x:203.1,y:226.7}).wait(1).to({graphics:mask_2_graphics_98,x:203.1,y:225.7}).wait(1).to({graphics:mask_2_graphics_99,x:203.1,y:224.6}).wait(1).to({graphics:mask_2_graphics_100,x:203.1,y:223.6}).wait(1).to({graphics:mask_2_graphics_101,x:203.1,y:222.5}).wait(1).to({graphics:mask_2_graphics_102,x:203.1,y:221.3}).wait(1).to({graphics:mask_2_graphics_103,x:203.1,y:220.2}).wait(1).to({graphics:mask_2_graphics_104,x:203.1,y:219}).wait(1).to({graphics:mask_2_graphics_105,x:203.1,y:217.8}).wait(1).to({graphics:mask_2_graphics_106,x:203.1,y:216.6}).wait(1).to({graphics:mask_2_graphics_107,x:203.2,y:215.4}).wait(1).to({graphics:mask_2_graphics_108,x:203.2,y:214.1}).wait(1).to({graphics:mask_2_graphics_109,x:203.2,y:212.9}).wait(1).to({graphics:mask_2_graphics_110,x:203.2,y:211.6}).wait(1).to({graphics:mask_2_graphics_111,x:203.2,y:210.3}).wait(1).to({graphics:mask_2_graphics_112,x:203.2,y:209}).wait(1).to({graphics:mask_2_graphics_113,x:203.2,y:207.6}).wait(1).to({graphics:mask_2_graphics_114,x:203.2,y:206.3}).wait(1).to({graphics:mask_2_graphics_115,x:203.2,y:204.9}).wait(1).to({graphics:mask_2_graphics_116,x:203.2,y:203.5}).wait(1).to({graphics:mask_2_graphics_117,x:203.2,y:202.1}).wait(1).to({graphics:mask_2_graphics_118,x:203.2,y:200.7}).wait(1).to({graphics:mask_2_graphics_119,x:203.2,y:199.3}).wait(1).to({graphics:mask_2_graphics_120,x:203.2,y:197.9}).wait(180));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(25,1,1).p("ALlGGQgBhAgJg8Qgmjxivi2Qjgjok8AAQk8AAjgDoQh7CAg3Cb");
	this.shape_3.setTransform(277.6,325.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(25,1,1).p("Ar7GGQABhAAJg8QAmjxCvi2QDgjoE8AAQE8AADgDoQDZDhAHE8");
	this.shape_4.setTransform(275.3,325.4,1,1,0,0,180);

	var maskedShapeInstanceList = [this.shape_3,this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},23).wait(277));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(191,363.6,173.3,13.3);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:0,guide:{path:[53.1,2.9,50.4,-4.5,49.8,-6.5,48.5,-10.4,46.4,-14.3,38.1,-28.9,21.4,-34.5,4.7,-40,-10.7,-33,-26.1,-26,-31.2,-10.7,-32.6,-6.5,-33,-2.3]}},119).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ApFKwQnMjjilnkMAkngMbQClHljiHLQjkHMnlCkQjMBFjHAAQkTAAkKiDg");
	var mask_graphics_1 = new cjs.Graphics().p("AowLKQnRjZiwnhMAkUgNQQCwHijYHQQjZHQnhCwQjYBPjUAAQkFAAkAh3g");
	var mask_graphics_2 = new cjs.Graphics().p("AobLiQnXjNi6neMAkAgOEQC7HdjNHVQjPHWndC6QjjBZjhAAQj4AAj1hsg");
	var mask_graphics_3 = new cjs.Graphics().p("AoHL7QnbjEjFnZMAjrgO4QDGHZjCHZQjEHanZDGQjuBjjuAAQjrAAjrhgg");
	var mask_graphics_4 = new cjs.Graphics().p("AnyMSQnfi4jQnVMAjVgPsQDQHUi4HeQi5HenUDQQj5Bvj6AAQjeAAjghWg");
	var mask_graphics_5 = new cjs.Graphics().p("AneMpQnjiujanPMAi9gQgQDbHQitHhQiuHjnPDaQkDB7kIAAQjRAAjVhMg");
	var mask_graphics_6 = new cjs.Graphics().p("AnJM/QnnijjlnKMAilgRSQDlHKihHlQikHnnJDlQkOCGkVAAQjEAAjJhCg");
	var mask_graphics_7 = new cjs.Graphics().p("Am0NUQnriXjwnFMAiLgSFQDwHFiWHpQiYHqnFDwQkWCTkjAAQi4AAi8g6g");
	var mask_graphics_8 = new cjs.Graphics().p("AmgNoQnuiMj6m/MAhwgS2QD6G/iLHtQiNHtm/D6QkfCgkxAAQirAAiwgyg");
	var mask_graphics_9 = new cjs.Graphics().p("AmMN8QnxiBkEm5MAhUgTnQEEG5h/HwQiCHwm5EEQkoCuk/AAQieAAikgqg");
	var mask_graphics_10 = new cjs.Graphics().p("Al4OPQnzh1kOm0MAg3gUXQEOGzh1H0Qh2HymzEOQkwC8lOAAQiRAAiXgjg");
	var mask_graphics_11 = new cjs.Graphics().p("AljOhQn3hqkYmtMAgZgVHQEYGthpH2QhrH1mtEXQk4DMldAAQiDAAiJgdg");
	var mask_graphics_12 = new cjs.Graphics().p("AlPOyQn5hekimnIf612QEhGnhdH4QhgH3mmEiQlADalsABQh2AAh7gYg");
	var mask_graphics_13 = new cjs.Graphics().p("Ak8PDQn6hTkrmgIfZ2kQErGghSH6QhUH5mgErQlGDrl8AAQhpAAhugSg");
	var mask_graphics_14 = new cjs.Graphics().p("AkoPTQn8hIk1mZIe43RQE0GZhGH8QhJH7mYE0QlND7mNAAQhbAAhfgNg");
	var mask_graphics_15 = new cjs.Graphics().p("AkUPiQn+g8k+mSIeV3+QE+GSg7H9Qg9H9mSE9QlTEMmdAAQhNAAhQgJg");
	var mask_graphics_16 = new cjs.Graphics().p("AkBPwQn/gwlHmLIdy4qQFGGLgvH+QgxH+mKFGQlZEemvAAQg/AAhBgGg");
	var mask_graphics_17 = new cjs.Graphics().p("AjuP9QoAgklQmEIdN5UQFQGDgkH/QglH/mDFPQleEvnBAAQgwAAgygDg");
	var mask_graphics_18 = new cjs.Graphics().p("AjbQJQoBgYlYl8Icn5/QFZF8gYIAQgaH/l7FYQliFCnUAAQgiAAgigCg");
	var mask_graphics_19 = new cjs.Graphics().p("AjJQVQoBgNlhl0IcC6oQFhFzgNIBQgOIAlzFgQlnFVnnAAIglAAg");
	var mask_graphics_20 = new cjs.Graphics().p("Ai2QfQoBgBlqlrIba7RQFqFrgBIBQgDIAlrFpQlqFon8AAIgEAAg");
	var mask_graphics_21 = new cjs.Graphics().p("AwXLQIay74QFyFjALIAQAJIAljFyQljFyn/AKIgdAAQnvAAlnlZg");
	var mask_graphics_22 = new cjs.Graphics().p("AwNLtIaJ8fQF6FbAWIAQAVH/laF6QlbF6n+AWIg9ABQnbAAljlGg");
	var mask_graphics_23 = new cjs.Graphics().p("AwCMJIZf9EQGBFRAiIAQAhH/lSGBQlSGCn+AhQguADgtAAQnIAAlekzg");
	var mask_graphics_24 = new cjs.Graphics().p("Av4MlIY09qQGJFJAuH/QAtH+lJGJQlJGJn9AtQg+AGg8AAQm1AAlakhg");
	var mask_graphics_25 = new cjs.Graphics().p("AvtM/IYI+NQGRFAA5H+QA4H9k/GQQlAGQn8A5QhNAJhLAAQmjAAlUkQg");
	var mask_graphics_26 = new cjs.Graphics().p("AviNZIXc+wQGYE3BFH8QBDH8k2GXQk3GYn7BEQhcANhYAAQmSAAlOj/g");
	var mask_graphics_27 = new cjs.Graphics().p("AvXNyIWv/RQGeEtBRH6QBPH6ktGeQktGfn5BQQhrARhmAAQmBAAlIjug");
	var mask_graphics_28 = new cjs.Graphics().p("AvLOKIWA/xQGmEjBcH5QBaH4kjGkQkkGmn3BcQh5AVh0AAQlxAAlAjeg");
	var mask_graphics_29 = new cjs.Graphics().p("AvAOiMAVSggSQGsEbBoH2QBmH1kaGsQkbGsn0BnQiHAciBAAQliAAk5jPg");
	var mask_graphics_30 = new cjs.Graphics().p("Au0O5MAUiggwQGyEQB0H0QBxHzkQGyQkRGynyByQiUAiiOAAQlTAAkxi/g");
	var mask_graphics_31 = new cjs.Graphics().p("AuoPPMATyghOQG4EHB/HwQB9HxkGG4QkHG4nwB+QihApibAAQlEAAkpixg");
	var mask_graphics_32 = new cjs.Graphics().p("AucPkMATBghqQG/D8CJHuQCIHuj8G9Qj8G/ntCJQiuAwioAAQk1AAkhijg");
	var mask_graphics_33 = new cjs.Graphics().p("AuQP4MASQgiFQHEDyCVHrQCTHqjxHDQjzHEnqCVQi6A4i1AAQknAAkYiWg");
	var mask_graphics_34 = new cjs.Graphics().p("AuDQLMARegifQHJDoCgHnQCfHnjoHJQjoHJnmCfQjGBCjCAAQkaAAkOiKg");
	var mask_graphics_35 = new cjs.Graphics().p("At3QeMAQsgi4QHODdCrHkQCqHjjdHOQjeHOniCrQjSBKjPAAQkMAAkFh9g");
	var mask_graphics_36 = new cjs.Graphics().p("AtqQwMAP4gjQQHUDTC2HfQC0HgjSHSQjTHTnfC2QjdBUjcAAQj+AAj7hxg");
	var mask_graphics_37 = new cjs.Graphics().p("AtdRBMAPFgjnQHXDIDBHbQDAHcjIHXQjIHYnaDAQjpBfjoAAQjyAAjwhmg");
	var mask_graphics_38 = new cjs.Graphics().p("AtQRRMAOQgj8QHdC9DMHXQDKHXi9HbQi9HdnWDLQj0Bpj1AAQjlAAjlhbg");
	var mask_graphics_39 = new cjs.Graphics().p("AtDRgMANcgkQQHgCyDXHSQDVHTiyHfQizHhnRDVQj9B1kDAAQjYAAjahRg");
	var mask_graphics_40 = new cjs.Graphics().p("As2RuMAMogkjQHkCoDhHMQDfHOinHjQinHlnNDgQkHCBkQAAQjLAAjPhIg");
	var mask_graphics_41 = new cjs.Graphics().p("AsoR8MALygk1QHnCcDsHIQDqHIicHnQidHonHDrQkRCNkeAAQi9AAjDg+g");
	var mask_graphics_42 = new cjs.Graphics().p("AsbSIMAK9glFQHqCRD2HCQD0HDiQHqQiSHsnBD1QkbCakrAAQixAAi3g2g");
	var mask_graphics_43 = new cjs.Graphics().p("AsNSUMAKGglVQHuCGEAG8QD+G+iFHtQiGHvm8D/QkjCok6AAQikAAiqgug");
	var mask_graphics_44 = new cjs.Graphics().p("Ar/SfMAJPgljQHxB6EKG3QEJG3h7HwQh6Hym2EJQksC2lIAAQiXAAidgmg");
	var mask_graphics_45 = new cjs.Graphics().p("ArxSoMAIYglvQH0BvEUGwQESGxhvHzQhvH1mwETQkzDElXAAQiKAAiQggg");
	var mask_graphics_46 = new cjs.Graphics().p("ArjSxMAHhgl7QH2BkEeGpQEcGrhkH2QhjH3mqEcQk7DUlmAAQh9AAiCgag");
	var mask_graphics_47 = new cjs.Graphics().p("ArVS5MAGqgmFQH4BYEnGjQEmGkhYH4QhYH5mjEmQlDDjl1AAQhwAAh0gUg");
	var mask_graphics_48 = new cjs.Graphics().p("ArHTAMAFygmOQH6BMExGcQEvGehMH5QhNH7mcEwQlJDzmGAAQhiAAhmgPg");
	var mask_graphics_49 = new cjs.Graphics().p("Aq5TGMAE6gmWQH8BBE6GVQE5GXhBH6QhBH9mVE5QlQEEmWAAQhVAAhXgLg");
	var mask_graphics_50 = new cjs.Graphics().p("AqrTLMAEDgmdQH8A2FEGOQFCGPg2H8Qg1H+mOFDQlVEVmoAAQhGAAhJgIg");
	var mask_graphics_51 = new cjs.Graphics().p("AqXTPMADKgmiQH+AqFMGGQFLGIgqH+QgqH/mGFLQlbEnm5AAQg4AAg5gFg");
	var mask_graphics_52 = new cjs.Graphics().p("Ap7TSMACSgmmQH/AeFVF/QFUGAgfH/QgeIAl/FUQlfE5nMAAQgpAAgqgDg");
	var mask_graphics_53 = new cjs.Graphics().p("ApfTUMABagmoQIAASFdF3QFcF4gSH/QgTIBl3FcQlkFMnfAAIg0gBg");
	var mask_graphics_54 = new cjs.Graphics().p("ApCTWMAAhgmrQIAAHFlFvQFmFwgHH/QgHIBlvFlQloFgn0AAIgTAAg");
	var mask_graphics_55 = new cjs.Graphics().p("Ao9zVQIAgEFuFmQFtFoAFIAQAEIAlmFuQlnFuoAAFg");
	var mask_graphics_56 = new cjs.Graphics().p("ApZzUQIAgQF1FeQF2FgAQH/QARIAlfF2QleF2oAAQg");
	var mask_graphics_57 = new cjs.Graphics().p("Ap2zSQIAgcF9FWQF+FXAcH/QAcH/lWF9QlWF/n/Acg");
	var mask_graphics_58 = new cjs.Graphics().p("AqSzPQH/goGFFNQGFFOAoH/QAoH+lNGFQlOGGn+Aog");
	var mask_graphics_59 = new cjs.Graphics().p("AqozLQH+gzGMFDQGNFGAzH9QA0H+lEGMQlFGOn9Azg");
	var mask_graphics_60 = new cjs.Graphics().p("Aq2zGQH8g/GUE7QGUE8A/H8QA/H8k7GUQk7GVn8A/g");
	var mask_graphics_61 = new cjs.Graphics().p("ArFzAQH8hLGaEyQGbEyBLH7QBKH7kxGaQkyGcn6BLg");
	var mask_graphics_62 = new cjs.Graphics().p("ArTy5QH6hXGhEoQGiEqBWH5QBWH4koGiQkpGjn4BWg");
	var mask_graphics_63 = new cjs.Graphics().p("ArhyyQH3hhGpEeQGoEgBiH3QBhH2keGoQkfGqn2Bhg");
	var mask_graphics_64 = new cjs.Graphics().p("ArvypQH1htGvEUQGvEXBtH0QBtH0kVGvQkVGwn0Btg");
	var mask_graphics_65 = new cjs.Graphics().p("Ar9yfQHzh5G0ELQG2EMB4HyQB5HxkLG1QkMG2nxB5g");
	var mask_graphics_66 = new cjs.Graphics().p("AsKyVQHviEG7EBQG7ECCEHvQCDHvkAG7QkCG8nuCDg");
	var mask_graphics_67 = new cjs.Graphics().p("AsYyJQHsiPHBD2QHBD4CPHsQCPHrj3HBQj3HCnrCPg");
	var mask_graphics_68 = new cjs.Graphics().p("Asmx9QHpiaHGDsQHHDuCaHoQCaHojsHGQjtHInoCag");
	var mask_graphics_69 = new cjs.Graphics().p("AszxwQHlilHLDiQHMDjClHlQCmHkjiHMQjjHMnkCmg");
	var mask_graphics_70 = new cjs.Graphics().p("AtAxiQHhiwHQDXQHRDZCwHhQCwHhjXHQQjYHSnhCwg");
	var mask_graphics_71 = new cjs.Graphics().p("AtOxSQHdi8HVDNQHWDOC7HdQC8HcjNHVQjOHXndC7g");
	var mask_graphics_72 = new cjs.Graphics().p("AtbxDQHZjGHaDCQHaDEDGHYQDGHYjCHaQjDHbnYDGg");
	var mask_graphics_73 = new cjs.Graphics().p("AtowyQHUjRHeC3QHfC5DQHTQDRHUi3HeQi4HfnUDRg");
	var mask_graphics_74 = new cjs.Graphics().p("At0wgQHPjbHiCrQHiCuDbHPQDcHPisHhQitHknPDbg");
	var mask_graphics_75 = new cjs.Graphics().p("AuBwOQHKjmHmChQHmCjDmHJQDmHLihHlQiiHnnKDmg");
	var mask_graphics_76 = new cjs.Graphics().p("AuOv6QHFjxHpCWQHrCYDwHEQDwHFiWHoQiXHrnEDwg");
	var mask_graphics_77 = new cjs.Graphics().p("AuavmQG/j7HtCLQHtCMD7G/QD6G/iLHsQiLHum/D7g");
	var mask_graphics_78 = new cjs.Graphics().p("AumvRQG5kFHwB/QHxCBEEG5QEFG6iAHvQiAHxm5EEg");
	var mask_graphics_79 = new cjs.Graphics().p("Auyu7QGzkPH0B0QHyB1EOGzQEPG0h0HxQh1H0mzEPg");
	var mask_graphics_80 = new cjs.Graphics().p("Au+ulQGtkYH2BoQH1BqEYGtQEZGthpH0QhpH3mtEYg");
	var mask_graphics_81 = new cjs.Graphics().p("AvJuOQGmkiH5BdQH3BfEhGmQEjGnheH2QhdH5mnEig");
	var mask_graphics_82 = new cjs.Graphics().p("AvUt1QGfksH6BRQH6BUErGfQEsGghSH5QhSH6mgEsg");
	var mask_graphics_83 = new cjs.Graphics().p("AvgtcQGZk1H8BFQH7BIE1GZQE1GZhGH6QhHH8mZE1g");
	var mask_graphics_84 = new cjs.Graphics().p("AvrtDQGSk+H9A6QH9A9E+GRQE+GSg7H7Qg7H+mRE/g");
	var mask_graphics_85 = new cjs.Graphics().p("Av1soQGKlHH+AuQH+AxFHGKQFIGKgwH9QgvH/mKFIg");
	var mask_graphics_86 = new cjs.Graphics().p("AwAsNQGDlQH/AjQH/AlFQGCQFQGDgjH+QgkIAmDFQg");
	var mask_graphics_87 = new cjs.Graphics().p("AwKrxQF7lZIAAYQH/AZFZF6QFZF8gYH+QgYIBl7FZg");
	var mask_graphics_88 = new cjs.Graphics().p("AwVrUQFzliIBAMQIAAOFhFyQFiF0gNH/QgMIBlzFhg");
	var mask_graphics_89 = new cjs.Graphics().p("Awfq3QFrlpIBAAQIAABFpFrQFqFrAAH/QgBIClrFpg");
	var mask_graphics_90 = new cjs.Graphics().p("AwpqYQFjlyIAgMQIAgKFyFiQFyFjALH/QALIBliFyg");
	var mask_graphics_91 = new cjs.Graphics().p("Awyp5QFal6IAgYQH/gVF6FZQF6FbAXH+QAXIBlaF6g");
	var mask_graphics_92 = new cjs.Graphics().p("Aw8paQFSmCH/gjQH/ghGBFRQGCFSAjH+QAiIAlRGCg");
	var mask_graphics_93 = new cjs.Graphics().p("AxFo6QFImJH/gvQH+gsGJFIQGKFIAtH9QAuIAlIGJg");
	var mask_graphics_94 = new cjs.Graphics().p("AxOoZQE/mQH+g7QH8g4GRE/QGRFAA5H7QA6H+k/GRg");
	var mask_graphics_95 = new cjs.Graphics().p("AxXn3QE2mYH8hGQH8hEGXE2QGYE2BFH7QBGH8k3GYg");
	var mask_graphics_96 = new cjs.Graphics().p("AxgnVQEtmfH6hRQH6hQGfEtQGfEtBQH4QBRH7ktGfg");
	var mask_graphics_97 = new cjs.Graphics().p("AxomyQEjmmH5hdQH3hbGmEjQGmEjBcH3QBcH5kjGmg");
	var mask_graphics_98 = new cjs.Graphics().p("AxwmPQEamsH2hpQH1hmGsEZQGtEaBnH0QBoH3kaGsg");
	var mask_graphics_99 = new cjs.Graphics().p("Ax4lrQEQmzHzh0QH0hyGyEQQGzEQByHyQB0H0kQGyg");
	var mask_graphics_100 = new cjs.Graphics().p("Ax/lHQEGm5Hwh/QHxh9G4EFQG5EGB+HwQB/HxkGG5g");
	var mask_graphics_101 = new cjs.Graphics().p("AyGkiQD7m/HuiKQHtiJG+D7QG/D8CKHuQCKHtj8G+g");
	var mask_graphics_102 = new cjs.Graphics().p("AyNj9QDxnEHriWQHqiUHDDxQHFDyCUHqQCWHqjyHEg");
	var mask_graphics_103 = new cjs.Graphics().p("AyUjYQDnnJHnihQHnifHJDnQHJDnCgHnQChHmjoHKg");
	var mask_graphics_104 = new cjs.Graphics().p("AyaiyQDcnOHjisQHjiqHODcQHPDdCrHjQCsHjjdHOg");
	var mask_graphics_105 = new cjs.Graphics().p("AygiLQDSnUHfi2QHgi2HSDSQHUDSC1HfQC3HfjSHTg");
	var mask_graphics_106 = new cjs.Graphics().p("AymhkQDInZHajBQHcjAHXDHQHYDHDBHbQDBHajHHYg");
	var mask_graphics_107 = new cjs.Graphics().p("Ayrg9QC8ndHXjMQHXjLHbC8QHdC9DLHWQDMHWi8Hcg");
	var mask_graphics_108 = new cjs.Graphics().p("AywgWQCxnhHSjXQHSjVHgCxQHhCyDWHRQDWHRixHhg");
	var mask_graphics_109 = new cjs.Graphics().p("Ay1ARQCnnkHMjhQHOjgHjCmQHlCnDgHMQDiHMinHlg");
	var mask_graphics_110 = new cjs.Graphics().p("Ay5A5QCbnnHHjsQHJjrHmCcQHpCbDrHHQDsHHicHog");
	var mask_graphics_111 = new cjs.Graphics().p("Ay9BhQCQnqHCj3QHCj1HrCRQHsCQD1HCQD2HBiQHsg");
	var mask_graphics_112 = new cjs.Graphics().p("AzBCKQCFnuG8kAQG9kAHuCFQHvCGD/G7QEBG8iGHvg");
	var mask_graphics_113 = new cjs.Graphics().p("AzECzQB6nxG1kLQG4kJHwB6QHyB6EKG2QEKG2h6Hxg");
	var mask_graphics_114 = new cjs.Graphics().p("AzHDcQBun0GwkUQGxkTHzBuQH1BvETGvQEUGwhuH0g");
	var mask_graphics_115 = new cjs.Graphics().p("AzKEFQBjn2GpkeQGrkdH1BjQH4BjEdGpQEeGqhjH2g");
	var mask_graphics_116 = new cjs.Graphics().p("AzNEuQBYn4GjknQGkknH3BYQH6BXEmGjQEoGihXH5g");
	var mask_graphics_117 = new cjs.Graphics().p("AzPFYQBMn6GckxQGdkwH6BMQH7BMEwGcQExGchMH6g");
	var mask_graphics_118 = new cjs.Graphics().p("AzQGCQBAn8GVk6QGWk6H7BBQH9BAE5GVQE7GVhBH8g");
	var mask_graphics_119 = new cjs.Graphics().p("AzSGsQA1n9GOlEQGPlCH8A0QH+A1FDGOQFDGNg1H+g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:14.6,y:53.3}).wait(1).to({graphics:mask_graphics_1,x:15.1,y:51.9}).wait(1).to({graphics:mask_graphics_2,x:15.6,y:50.6}).wait(1).to({graphics:mask_graphics_3,x:16.2,y:49.3}).wait(1).to({graphics:mask_graphics_4,x:16.7,y:48}).wait(1).to({graphics:mask_graphics_5,x:17.3,y:46.7}).wait(1).to({graphics:mask_graphics_6,x:17.9,y:45.5}).wait(1).to({graphics:mask_graphics_7,x:18.5,y:44.2}).wait(1).to({graphics:mask_graphics_8,x:19.2,y:43}).wait(1).to({graphics:mask_graphics_9,x:19.9,y:41.7}).wait(1).to({graphics:mask_graphics_10,x:20.6,y:40.5}).wait(1).to({graphics:mask_graphics_11,x:21.3,y:39.3}).wait(1).to({graphics:mask_graphics_12,x:22.1,y:38.1}).wait(1).to({graphics:mask_graphics_13,x:22.9,y:36.9}).wait(1).to({graphics:mask_graphics_14,x:23.7,y:35.8}).wait(1).to({graphics:mask_graphics_15,x:24.6,y:34.7}).wait(1).to({graphics:mask_graphics_16,x:25.4,y:33.5}).wait(1).to({graphics:mask_graphics_17,x:26.3,y:32.5}).wait(1).to({graphics:mask_graphics_18,x:27.3,y:31.4}).wait(1).to({graphics:mask_graphics_19,x:28.2,y:30.4}).wait(1).to({graphics:mask_graphics_20,x:29.2,y:29.3}).wait(1).to({graphics:mask_graphics_21,x:30.2,y:28.4}).wait(1).to({graphics:mask_graphics_22,x:31.2,y:27.4}).wait(1).to({graphics:mask_graphics_23,x:32.3,y:26.5}).wait(1).to({graphics:mask_graphics_24,x:33.4,y:25.6}).wait(1).to({graphics:mask_graphics_25,x:34.5,y:24.7}).wait(1).to({graphics:mask_graphics_26,x:35.6,y:23.8}).wait(1).to({graphics:mask_graphics_27,x:36.8,y:23}).wait(1).to({graphics:mask_graphics_28,x:37.9,y:22.2}).wait(1).to({graphics:mask_graphics_29,x:39.1,y:21.5}).wait(1).to({graphics:mask_graphics_30,x:40.3,y:20.7}).wait(1).to({graphics:mask_graphics_31,x:41.5,y:20}).wait(1).to({graphics:mask_graphics_32,x:42.8,y:19.3}).wait(1).to({graphics:mask_graphics_33,x:44,y:18.6}).wait(1).to({graphics:mask_graphics_34,x:45.3,y:18}).wait(1).to({graphics:mask_graphics_35,x:46.5,y:17.4}).wait(1).to({graphics:mask_graphics_36,x:47.8,y:16.8}).wait(1).to({graphics:mask_graphics_37,x:49.1,y:16.2}).wait(1).to({graphics:mask_graphics_38,x:50.4,y:15.7}).wait(1).to({graphics:mask_graphics_39,x:51.7,y:15.2}).wait(1).to({graphics:mask_graphics_40,x:53.1,y:14.7}).wait(1).to({graphics:mask_graphics_41,x:54.4,y:14.3}).wait(1).to({graphics:mask_graphics_42,x:55.7,y:13.9}).wait(1).to({graphics:mask_graphics_43,x:57.1,y:13.5}).wait(1).to({graphics:mask_graphics_44,x:58.4,y:13.1}).wait(1).to({graphics:mask_graphics_45,x:59.8,y:12.8}).wait(1).to({graphics:mask_graphics_46,x:61.1,y:12.5}).wait(1).to({graphics:mask_graphics_47,x:62.5,y:12.2}).wait(1).to({graphics:mask_graphics_48,x:63.9,y:11.9}).wait(1).to({graphics:mask_graphics_49,x:65.3,y:11.7}).wait(1).to({graphics:mask_graphics_50,x:66.7,y:11.6}).wait(1).to({graphics:mask_graphics_51,x:67.5,y:11.4}).wait(1).to({graphics:mask_graphics_52,x:67.5,y:11.3}).wait(1).to({graphics:mask_graphics_53,x:67.5,y:11.2}).wait(1).to({graphics:mask_graphics_54,x:67.5,y:11.2}).wait(1).to({graphics:mask_graphics_55,x:67.5,y:11.2}).wait(1).to({graphics:mask_graphics_56,x:67.5,y:11.2}).wait(1).to({graphics:mask_graphics_57,x:67.5,y:11.1}).wait(1).to({graphics:mask_graphics_58,x:67.5,y:11}).wait(1).to({graphics:mask_graphics_59,x:66.9,y:10.8}).wait(1).to({graphics:mask_graphics_60,x:65.5,y:10.7}).wait(1).to({graphics:mask_graphics_61,x:64.2,y:10.5}).wait(1).to({graphics:mask_graphics_62,x:62.8,y:10.2}).wait(1).to({graphics:mask_graphics_63,x:61.4,y:10}).wait(1).to({graphics:mask_graphics_64,x:60.1,y:9.7}).wait(1).to({graphics:mask_graphics_65,x:58.7,y:9.3}).wait(1).to({graphics:mask_graphics_66,x:57.3,y:9}).wait(1).to({graphics:mask_graphics_67,x:56,y:8.6}).wait(1).to({graphics:mask_graphics_68,x:54.7,y:8.2}).wait(1).to({graphics:mask_graphics_69,x:53.3,y:7.7}).wait(1).to({graphics:mask_graphics_70,x:52,y:7.3}).wait(1).to({graphics:mask_graphics_71,x:50.7,y:6.8}).wait(1).to({graphics:mask_graphics_72,x:49.4,y:6.2}).wait(1).to({graphics:mask_graphics_73,x:48.1,y:5.7}).wait(1).to({graphics:mask_graphics_74,x:46.8,y:5.1}).wait(1).to({graphics:mask_graphics_75,x:45.6,y:4.5}).wait(1).to({graphics:mask_graphics_76,x:44.3,y:3.8}).wait(1).to({graphics:mask_graphics_77,x:43.1,y:3.2}).wait(1).to({graphics:mask_graphics_78,x:41.8,y:2.5}).wait(1).to({graphics:mask_graphics_79,x:40.6,y:1.8}).wait(1).to({graphics:mask_graphics_80,x:39.4,y:1}).wait(1).to({graphics:mask_graphics_81,x:38.2,y:0.3}).wait(1).to({graphics:mask_graphics_82,x:37.1,y:-0.5}).wait(1).to({graphics:mask_graphics_83,x:35.9,y:-1.4}).wait(1).to({graphics:mask_graphics_84,x:34.8,y:-2.2}).wait(1).to({graphics:mask_graphics_85,x:33.7,y:-3.1}).wait(1).to({graphics:mask_graphics_86,x:32.6,y:-4}).wait(1).to({graphics:mask_graphics_87,x:31.5,y:-4.9}).wait(1).to({graphics:mask_graphics_88,x:30.5,y:-5.9}).wait(1).to({graphics:mask_graphics_89,x:29.5,y:-6.8}).wait(1).to({graphics:mask_graphics_90,x:28.5,y:-7.8}).wait(1).to({graphics:mask_graphics_91,x:27.5,y:-8.9}).wait(1).to({graphics:mask_graphics_92,x:26.6,y:-9.9}).wait(1).to({graphics:mask_graphics_93,x:25.7,y:-11}).wait(1).to({graphics:mask_graphics_94,x:24.8,y:-12.1}).wait(1).to({graphics:mask_graphics_95,x:24,y:-13.2}).wait(1).to({graphics:mask_graphics_96,x:23.2,y:-14.4}).wait(1).to({graphics:mask_graphics_97,x:22.4,y:-15.6}).wait(1).to({graphics:mask_graphics_98,x:21.6,y:-16.7}).wait(1).to({graphics:mask_graphics_99,x:20.9,y:-17.9}).wait(1).to({graphics:mask_graphics_100,x:20.2,y:-19.2}).wait(1).to({graphics:mask_graphics_101,x:19.5,y:-20.4}).wait(1).to({graphics:mask_graphics_102,x:18.8,y:-21.6}).wait(1).to({graphics:mask_graphics_103,x:18.2,y:-22.9}).wait(1).to({graphics:mask_graphics_104,x:17.6,y:-24.2}).wait(1).to({graphics:mask_graphics_105,x:17,y:-25.4}).wait(1).to({graphics:mask_graphics_106,x:16.4,y:-26.7}).wait(1).to({graphics:mask_graphics_107,x:15.9,y:-28}).wait(1).to({graphics:mask_graphics_108,x:15.4,y:-29.3}).wait(1).to({graphics:mask_graphics_109,x:14.9,y:-30.7}).wait(1).to({graphics:mask_graphics_110,x:14.5,y:-32}).wait(1).to({graphics:mask_graphics_111,x:14,y:-33.3}).wait(1).to({graphics:mask_graphics_112,x:13.6,y:-34.7}).wait(1).to({graphics:mask_graphics_113,x:13.3,y:-36}).wait(1).to({graphics:mask_graphics_114,x:13,y:-37.4}).wait(1).to({graphics:mask_graphics_115,x:12.7,y:-38.8}).wait(1).to({graphics:mask_graphics_116,x:12.4,y:-40.1}).wait(1).to({graphics:mask_graphics_117,x:12.1,y:-41.5}).wait(1).to({graphics:mask_graphics_118,x:11.9,y:-42.9}).wait(1).to({graphics:mask_graphics_119,x:11.8,y:-44.3}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("Al8EDQgWg7AAhEQAAihB9hzQB8hyCwAAQCwAAB9ByQAgAfAYAhQANARAKAS");
	this.shape.setTransform(10.1,-10.7,1,1,18.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.7,-28.7,101,36.4);


(lib.ar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-10,-224.7,1,1,0,0,0,0.1,-4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,regY:0,y:73.5},134,cjs.Ease.get(0.5)).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AAAgXIAAAv");
	this.shape.setTransform(-10,-232.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AAAApIAAhR");
	this.shape_1.setTransform(-10,-230.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AAAA5IAAhx");
	this.shape_2.setTransform(-10,-229.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("AAABKIAAiT");
	this.shape_3.setTransform(-10,-227.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("AAABaIAAiz");
	this.shape_4.setTransform(-10,-225.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(5,1,1).p("AAABrIAAjV");
	this.shape_5.setTransform(-10,-224.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(5,1,1).p("AAAB7IAAj1");
	this.shape_6.setTransform(-10,-222.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(5,1,1).p("AAACLIAAkV");
	this.shape_7.setTransform(-10,-220.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(5,1,1).p("AAACbIAAk1");
	this.shape_8.setTransform(-10,-219.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(5,1,1).p("AAACrIAAlV");
	this.shape_9.setTransform(-10,-217.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(5,1,1).p("AAAC7IAAl1");
	this.shape_10.setTransform(-10,-216.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5,1,1).p("AAADLIAAmV");
	this.shape_11.setTransform(-10,-214.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(5,1,1).p("AAADbIAAm1");
	this.shape_12.setTransform(-10,-212.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(5,1,1).p("AAADrIAAnU");
	this.shape_13.setTransform(-10,-211.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(5,1,1).p("AAAD6IAAnz");
	this.shape_14.setTransform(-10,-209.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(5,1,1).p("AAAEKIAAoT");
	this.shape_15.setTransform(-10,-208.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(5,1,1).p("AAAEZIAAox");
	this.shape_16.setTransform(-10,-206.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(5,1,1).p("AAAEpIAApR");
	this.shape_17.setTransform(-10,-205.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(5,1,1).p("AAAE4IAApv");
	this.shape_18.setTransform(-10,-203.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(5,1,1).p("AAAFHIAAqN");
	this.shape_19.setTransform(-10,-202.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(5,1,1).p("AAAFWIAAqr");
	this.shape_20.setTransform(-10,-200.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(5,1,1).p("AAAFlIAArJ");
	this.shape_21.setTransform(-10,-199.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(5,1,1).p("AAAF0IAArn");
	this.shape_22.setTransform(-10,-197.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(5,1,1).p("AAAGDIAAsF");
	this.shape_23.setTransform(-10,-196.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(5,1,1).p("AAAGSIAAsj");
	this.shape_24.setTransform(-10,-194.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(5,1,1).p("AAAGhIAAtB");
	this.shape_25.setTransform(-10,-193.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(5,1,1).p("AAAGvIAAtd");
	this.shape_26.setTransform(-10,-191.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(5,1,1).p("AAAG+IAAt7");
	this.shape_27.setTransform(-10,-190.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(5,1,1).p("AAAHMIAAuX");
	this.shape_28.setTransform(-10,-188.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(5,1,1).p("AAAHbIAAu1");
	this.shape_29.setTransform(-10,-187.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(5,1,1).p("AAAHpIAAvR");
	this.shape_30.setTransform(-10,-185.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(5,1,1).p("AAAH3IAAvt");
	this.shape_31.setTransform(-10,-184.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(5,1,1).p("AAAIGIAAwL");
	this.shape_32.setTransform(-10,-183);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(5,1,1).p("AAAIUIAAwn");
	this.shape_33.setTransform(-10,-181.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(5,1,1).p("AAAIiIAAxD");
	this.shape_34.setTransform(-10,-180.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(5,1,1).p("AAAIvIAAxd");
	this.shape_35.setTransform(-10,-178.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(5,1,1).p("AAAI9IAAx5");
	this.shape_36.setTransform(-10,-177.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(5,1,1).p("AAAJLIAAyV");
	this.shape_37.setTransform(-10,-176.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(5,1,1).p("AAAJZIAAyx");
	this.shape_38.setTransform(-10,-174.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(5,1,1).p("AAAJmIAAzL");
	this.shape_39.setTransform(-10,-173.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(5,1,1).p("AAAJ0IAAzn");
	this.shape_40.setTransform(-10,-172);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(5,1,1).p("AAAKBIAA0B");
	this.shape_41.setTransform(-10,-170.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(5,1,1).p("AAAKOIAA0b");
	this.shape_42.setTransform(-10,-169.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(5,1,1).p("AAAKbIAA01");
	this.shape_43.setTransform(-10,-168.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(5,1,1).p("AAAKpIAA1R");
	this.shape_44.setTransform(-10,-166.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(5,1,1).p("AAAK2IAA1r");
	this.shape_45.setTransform(-10,-165.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(5,1,1).p("AAALDIAA2F");
	this.shape_46.setTransform(-10,-164.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(5,1,1).p("AAALQIAA2e");
	this.shape_47.setTransform(-10,-162.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(5,1,1).p("AAALcIAA23");
	this.shape_48.setTransform(-10,-161.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(5,1,1).p("AAALpIAA3R");
	this.shape_49.setTransform(-10,-160.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(5,1,1).p("AAAL2IAA3r");
	this.shape_50.setTransform(-10,-159);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(5,1,1).p("AAAMCIAA4D");
	this.shape_51.setTransform(-10,-157.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(5,1,1).p("AAAMPIAA4d");
	this.shape_52.setTransform(-10,-156.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(5,1,1).p("AAAMbIAA41");
	this.shape_53.setTransform(-10,-155.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(5,1,1).p("AAAMnIAA5N");
	this.shape_54.setTransform(-10,-154.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(5,1,1).p("AAAM0IAA5m");
	this.shape_55.setTransform(-10,-152.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(5,1,1).p("AAANAIAA5/");
	this.shape_56.setTransform(-10,-151.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(5,1,1).p("AAANMIAA6X");
	this.shape_57.setTransform(-10,-150.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(5,1,1).p("AAANYIAA6v");
	this.shape_58.setTransform(-10,-149.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(5,1,1).p("AAANkIAA7H");
	this.shape_59.setTransform(-10,-148);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(5,1,1).p("AAANvIAA7d");
	this.shape_60.setTransform(-10,-146.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(5,1,1).p("AAAN7IAA71");
	this.shape_61.setTransform(-10,-145.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(5,1,1).p("AAAOHIAA8N");
	this.shape_62.setTransform(-10,-144.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(5,1,1).p("AAAOSIAA8j");
	this.shape_63.setTransform(-10,-143.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(5,1,1).p("AAAOeIAA87");
	this.shape_64.setTransform(-10,-142.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(5,1,1).p("AAAOpIAA9R");
	this.shape_65.setTransform(-10,-141.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(5,1,1).p("AAAO0IAA9n");
	this.shape_66.setTransform(-10,-140);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(5,1,1).p("AAAO/IAA9+");
	this.shape_67.setTransform(-10,-138.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(5,1,1).p("AAAPLIAA+V");
	this.shape_68.setTransform(-10,-137.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(5,1,1).p("AAAPWIAA+r");
	this.shape_69.setTransform(-10,-136.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(5,1,1).p("AAAPhIAA/B");
	this.shape_70.setTransform(-10,-135.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(5,1,1).p("AAAPsIAA/X");
	this.shape_71.setTransform(-10,-134.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(5,1,1).p("AAAP2IAA/r");
	this.shape_72.setTransform(-10,-133.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(5,1,1).p("AAAQBMAAAggB");
	this.shape_73.setTransform(-10,-132.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(5,1,1).p("AAAQMMAAAggX");
	this.shape_74.setTransform(-10,-131.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(5,1,1).p("AAAQWMAAAggr");
	this.shape_75.setTransform(-10,-130.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(5,1,1).p("AAAQhMAAAghB");
	this.shape_76.setTransform(-10,-129.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(5,1,1).p("AAAQrMAAAghV");
	this.shape_77.setTransform(-10,-128.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(5,1,1).p("AAAQ2MAAAghr");
	this.shape_78.setTransform(-10,-127);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(5,1,1).p("AAARAMAAAgh/");
	this.shape_79.setTransform(-10,-126);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(5,1,1).p("AAARKMAAAgiT");
	this.shape_80.setTransform(-10,-125);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(5,1,1).p("AAARUMAAAgin");
	this.shape_81.setTransform(-10,-124);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(5,1,1).p("AAAReMAAAgi7");
	this.shape_82.setTransform(-10,-123);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(5,1,1).p("AAARoMAAAgjP");
	this.shape_83.setTransform(-10,-122);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(5,1,1).p("AAARyMAAAgjj");
	this.shape_84.setTransform(-10,-121);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(5,1,1).p("AAAR7MAAAgj1");
	this.shape_85.setTransform(-10,-120.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(5,1,1).p("AAASFMAAAgkJ");
	this.shape_86.setTransform(-10,-119.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(5,1,1).p("AAASOMAAAgkb");
	this.shape_87.setTransform(-10,-118.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(5,1,1).p("AAASYMAAAgkv");
	this.shape_88.setTransform(-10,-117.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(5,1,1).p("AAAShMAAAglB");
	this.shape_89.setTransform(-10,-116.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(5,1,1).p("AAASrMAAAglV");
	this.shape_90.setTransform(-10,-115.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(5,1,1).p("AAAS0MAAAgln");
	this.shape_91.setTransform(-10,-114.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(5,1,1).p("AAAS9MAAAgl5");
	this.shape_92.setTransform(-10,-113.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(5,1,1).p("AAATGMAAAgmL");
	this.shape_93.setTransform(-10,-112.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(5,1,1).p("AAATPMAAAgmd");
	this.shape_94.setTransform(-10,-111.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(5,1,1).p("AAATYMAAAgmv");
	this.shape_95.setTransform(-10,-110.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(5,1,1).p("AAAThMAAAgnB");
	this.shape_96.setTransform(-10,-109.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(5,1,1).p("AAATpMAAAgnR");
	this.shape_97.setTransform(-10,-109.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(5,1,1).p("AAATyMAAAgnj");
	this.shape_98.setTransform(-10,-108.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(5,1,1).p("AAAT7MAAAgn1");
	this.shape_99.setTransform(-10,-107.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(5,1,1).p("AAAUDMAAAgoF");
	this.shape_100.setTransform(-10,-106.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(5,1,1).p("AAAULMAAAgoV");
	this.shape_101.setTransform(-10,-105.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(5,1,1).p("AAAUUMAAAgon");
	this.shape_102.setTransform(-10,-104.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(5,1,1).p("AAAUcMAAAgo3");
	this.shape_103.setTransform(-10,-104);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(5,1,1).p("AAAUkMAAAgpH");
	this.shape_104.setTransform(-10,-103.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(5,1,1).p("AAAUsMAAAgpX");
	this.shape_105.setTransform(-10,-102.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(5,1,1).p("AAAU0MAAAgpn");
	this.shape_106.setTransform(-10,-101.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(5,1,1).p("AAAU8MAAAgp3");
	this.shape_107.setTransform(-10,-100.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(5,1,1).p("AAAVEMAAAgqH");
	this.shape_108.setTransform(-10,-100);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(5,1,1).p("AAAVLMAAAgqV");
	this.shape_109.setTransform(-10,-99.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(5,1,1).p("AAAVTMAAAgql");
	this.shape_110.setTransform(-10,-98.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(5,1,1).p("AAAVbMAAAgq1");
	this.shape_111.setTransform(-10,-97.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(5,1,1).p("AAAViMAAAgrD");
	this.shape_112.setTransform(-10,-97);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(5,1,1).p("AAAVpMAAAgrR");
	this.shape_113.setTransform(-10,-96.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(5,1,1).p("AAAVxMAAAgrh");
	this.shape_114.setTransform(-10,-95.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(5,1,1).p("AAAV4MAAAgrv");
	this.shape_115.setTransform(-10,-94.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(5,1,1).p("AAAV/MAAAgr9");
	this.shape_116.setTransform(-10,-94.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(5,1,1).p("AAAWGMAAAgsL");
	this.shape_117.setTransform(-10,-93.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(5,1,1).p("AAAWNMAAAgsZ");
	this.shape_118.setTransform(-10,-92.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(5,1,1).p("AAAWUMAAAgsn");
	this.shape_119.setTransform(-10,-92);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(5,1,1).p("AAAWbMAAAgs1");
	this.shape_120.setTransform(-10,-91.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(5,1,1).p("AAAWhMAAAgtB");
	this.shape_121.setTransform(-10,-90.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(5,1,1).p("AAAWoMAAAgtP");
	this.shape_122.setTransform(-10,-90);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(5,1,1).p("AAAWvMAAAgtd");
	this.shape_123.setTransform(-10,-89.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(5,1,1).p("AAAW1MAAAgtp");
	this.shape_124.setTransform(-10,-88.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(5,1,1).p("AAAW7MAAAgt1");
	this.shape_125.setTransform(-10,-88.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(5,1,1).p("AAAXCMAAAguD");
	this.shape_126.setTransform(-10,-87.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(5,1,1).p("AAAXIMAAAguP");
	this.shape_127.setTransform(-10,-86.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(5,1,1).p("AAAXOMAAAgub");
	this.shape_128.setTransform(-10,-86.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(5,1,1).p("AAAXUMAAAgun");
	this.shape_129.setTransform(-10,-85.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(5,1,1).p("AAAXaMAAAguz");
	this.shape_130.setTransform(-10,-85);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").ss(5,1,1).p("AAAXgMAAAgu/");
	this.shape_131.setTransform(-10,-84.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(5,1,1).p("AAAXmMAAAgvL");
	this.shape_132.setTransform(-10,-83.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(5,1,1).p("AAAXsMAAAgvX");
	this.shape_133.setTransform(-10,-83.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(5,1,1).p("AAA3wMAAAAvh");
	this.shape_134.setTransform(-10,-82.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.9,-238.1,24.3,21.8);


(lib.honeyflap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.honeybee();
	this.instance.parent = this;
	this.instance.setTransform(22.8,-143.7,0.422,0.422,0,0,0,-37,64.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgrB1QgKgDgJgGIgBAAIgBgBIgCgBIgBgBIgBgBIgBAAIgBgBIgBgBIgBgBIgBgBIgCAAIgBgBIgBgBIgBgBIgBAAIAAgBIgBgBIgCgBIAAgBIgCgBIgBAAIgBgBIAAgBIgBgBIgBgBIAAgBIgBAAIgBgBIgBgBIAAgBIgCgBIAAgBIgBAAIgBgBIgBgBIAAgBIgBgBIAAgBIgBgBIgBAAIAAgBIgBgBIgBgBIgBgBIAAgBIgBgBIgBAAIAAgBIAAgBIgBgBIgBgBIAAgBIAAgBIgBgBIAAAAIgBgBIAAgBIgBgBIAAgBIgBgBIgBgBIAAgBIgBAAIAAgBIAAgBIgBgBIAAgBIAAgBIgBgBIAAgBIAAgBIgBAAIAAgBIAAgBIgBgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIgBgBIAAAAIAAgBIgBgBIAAgBIgBgBIAAgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAAAIgBgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIgBgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIAAAAIABgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIABgBIAAgBIAAgBIAAgBIABgBIAAgBIABgBIAAgBIABgBIAAgBIAAgBIAAgBIABgBIAAgBIABgBIAAgBIABgBIAAgBIABgBIABgCIAAgBIABgBIAAgBIABgBIABgBIAAgBIAAgBIABgBIABgBIABgBIAAgBIABgBIABgBIABgBIABgBIABgBIAAgBIABgBIAAgBIABgBIABgCIABgBIABgBIACgBIAAgBIABgBIACgBIAAgBIABgBIABgBIABgBIACgCIADgCIAKgIIASgKIAGgDIALgDIATgFIAPgBQAHAAAIABIAQADIAQAFIAQAHIADADIABAAIACABIABABIABABIACAAIABABIAAABIABABIACABIABAAIABABIABABIABABIABABIABAAIABABIAAABIABABIABABIABABIABAAIABABIABABIABABIABABIAAABIABAAIABABIAAABIABABIABABIAAABIACABIAAAAIABABIAAABIABABIABABIAAABIABABIAAAAIABABIABABIAAABIABABIAAABIACABIAAAAIAAABIABABIABABIAAABIAAABIABABIAAABIABAAIAAABIAAABIABABIAAABIABABIAAABIABABIAAABIABAAIABABIAAABIAAABIABABIAAABIAAABIABABIAAABIAAAAIABABIAAABIAAABIABABIAAABIAAABIAAABIABABIAAABIAAABIAAAAIAAABIABABIAAABIAAABIAAABIABABIAAABIAAABIAAABIAAABIABABIAAAAIAAABIAAABIABABIAAABIAAABIAAACIAAACIABACIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIgBABIABABIgBABIAAABIAAABIAAABIAAABIAAABIgBABIAAABIgBACIAAACIAAACIgBABIAAABIAAABIAAABIgBABIAAABIAAABIAAABIgBABIAAABIAAABIAAABIAAABIgBABIAAABIgBABIAAABIAAABIgBABIAAABIAAABIgBABIAAABIgBABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIgBABIgBABIgBABIAAABIgBABIgBABIgBABIAAACIgBABIgBABIAAABIgBABIgCABIgBABIgBABIAAABIgCABIAAABIgBABIgBACIgPAMQgMAJgOAGQgXAJgZAAQgWAAgVgIg");
	this.shape.setTransform(22.4,-143.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-215.3,105.5,84.2);


// stage content:
(lib.writingsuccess_Fontkid_g = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_630 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(630).call(this.frame_630).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(350.5,179.4,0.998,0.998,8,0,0,22.4,-144);
	this.instance._off = true;

	this.instance_1 = new lib.honeybee();
	this.instance_1.parent = this;
	this.instance_1.setTransform(216,420.7,0.421,0.421,8,0,0,-36.9,64.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[350.5,179.4,349.3,149,328.2,127.1,305.8,103.9,274.2,103.9,266.5,103.9,259.3,105.3]}},79).to({regX:22.5,regY:-143.9,scaleX:1,scaleY:1,guide:{path:[259.3,105.3,237.1,109.6,220.1,127.2,212.9,134.7,208,143.3]}},32).to({regX:22.6,regY:-143.8,guide:{path:[208,143.2,197.8,161.1,197.8,183.3,197.8,216.2,220.1,239.5,229.1,248.8,239.6,254.4]}},79).to({regX:22.4,regY:-144,scaleX:1,scaleY:1,guide:{path:[239.6,254.4,255.2,262.7,274.2,262.7,305.9,262.7,328.3,239.5,350.7,216.2,350.7,183.3,350.7,183.1,350.7,182.9]}},109).wait(10).to({x:350.7,y:101},0).to({regX:22.5,x:350.1,y:386.4},122).to({guide:{path:[349.5,386.4,347.9,398.6,345.9,405.7,341.1,422.6,323.1,436.2,308,447.7,290.7,449.9]}},43).to({regX:22.6,scaleX:1,scaleY:1,guide:{path:[290.7,449.9,287.4,450.4,284,450.4,262.9,451,250.5,446.5,246.4,445,240.9,441.4]}},42).to({regX:22.4,scaleX:1,scaleY:1,guide:{path:[240.9,441.4,230.7,434.6,215.5,420.5]}},34).to({_off:true},11).wait(61));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(570).to({_off:false},0).to({regX:-37.1,regY:64.6,guide:{path:[215.7,420.7,175.9,222.3,98.5,356.3,59.9,423.2,2.9,378.7,-54,334.2,-129.3,178.3]}},60).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(350.7,179.7,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},299).wait(10).to({_off:false,x:216.1,y:421.6},0).to({_off:true},242).wait(71));

	// Layer 18
	this.instance_2 = new lib.ar1("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(471,364.9,1,1,0,0,0,0.3,30.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(318).to({_off:false},0).wait(313));

	// Layer 13
	this.instance_3 = new lib.ar2("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(269.1,173.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).wait(622));

	// Layer 17 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_440 = new cjs.Graphics().p("AoIeKQAAoBFqlrQFqlqIAAAQIBAAFqFqQFrFrAAIBg");
	var mask_graphics_441 = new cjs.Graphics().p("AoIdfQAMoAFyljQFzliIAAMQIAAMFiFyQFiF0gLIAg");
	var mask_graphics_442 = new cjs.Graphics().p("AoHc0QAXoAF7laQF7lZH/AYQIAAYFZF6QFaF7gXIAg");
	var mask_graphics_443 = new cjs.Graphics().p("AoGcJQAkn/GClRQGDlQH+AjQIAAkFQGCQFRGDgjIAg");
	var mask_graphics_444 = new cjs.Graphics().p("AoEbfQAwn/GKlIQGKlHH+AvQH+AwFIGKQFIGKgwH/g");
	var mask_graphics_445 = new cjs.Graphics().p("AoBa0QA7n9GSk/QGRk+H9A7QH+A7E9GSQE/GSg7H9g");
	var mask_graphics_446 = new cjs.Graphics().p("An9aKQBGn8GZk2QGZk0H7BHQH8BGE1GZQE1GahGH7g");
	var mask_graphics_447 = new cjs.Graphics().p("An5ZfQBSn6GgksQGgkqH5BSQH6BSEsGgQErGghSH6g");
	var mask_graphics_448 = new cjs.Graphics().p("An0Y1QBen4GlkiQGokhH3BeQH4BeEiGmQEiGoheH3g");
	var mask_graphics_449 = new cjs.Graphics().p("AnvYLQBqn1GskZQGukXH1BpQH2BqEYGtQEYGuhqH1g");
	var mask_graphics_450 = new cjs.Graphics().p("AnpXhQB1nzGzkOQG0kOHzB2QHzB1EOGzQEOG0h1Hzg");
	var mask_graphics_451 = new cjs.Graphics().p("AniW4QCAnwG5kFQG7kDHvCAQHxCBEDG6QEFG6iBHwg");
	var mask_graphics_452 = new cjs.Graphics().p("AnbWOQCMntG/j6QHAj5HtCMQHtCMD5HAQD6HAiMHtg");
	var mask_graphics_453 = new cjs.Graphics().p("AnTVlQCXnpHFjwQHGjvHpCYQHqCXDvHFQDvHGiXHqg");
	var mask_graphics_454 = new cjs.Graphics().p("AnKU9QCinmHKjmQHLjkHmCjQHmCjDlHKQDlHLijHmg");
	var mask_graphics_455 = new cjs.Graphics().p("AnBUUQCuniHOjbQHRjZHiCuQHiCuDaHPQDbHRiuHig");
	var mask_graphics_456 = new cjs.Graphics().p("Am3TsQC5neHTjQQHWjOHeC4QHeC5DPHVQDQHVi5Heg");
	var mask_graphics_457 = new cjs.Graphics().p("AmsTEQDDnZHZjFQHajEHZDEQHaDEDEHZQDFHajEHZg");
	var mask_graphics_458 = new cjs.Graphics().p("AmhSdQDPnVHci6QHfi5HUDPQHWDPC5HdQC6HfjPHUg");
	var mask_graphics_459 = new cjs.Graphics().p("AmVR2QDZnQHhivQHjiuHPDaQHRDZCuHiQCvHijaHQg");
	var mask_graphics_460 = new cjs.Graphics().p("AmJRPQDknLHlijQHnijHKDkQHMDkCjHmQCjHmjkHLg");
	var mask_graphics_461 = new cjs.Graphics().p("Al8QpQDvnFHoiZQHriXHFDuQHGDvCXHpQCZHqjvHGg");
	var mask_graphics_462 = new cjs.Graphics().p("AluQEQD5nAHsiOQHtiLHAD4QHAD6CNHsQCNHuj6HAg");
	var mask_graphics_463 = new cjs.Graphics().p("AlgPeQEEm6HuiCQHxiAG6EDQG6EECBHvQCCHxkEG6g");
	var mask_graphics_464 = new cjs.Graphics().p("AlRO6QEOm0Hxh3QH0h1GzEOQG1ENB1HzQB2HzkNG0g");
	var mask_graphics_465 = new cjs.Graphics().p("AlBOWQEXmuH0hrQH2hpGuEXQGuEYBqH0QBqH3kXGtg");
	var mask_graphics_466 = new cjs.Graphics().p("AkxNyQEhmnH3hfQH4heGnEhQGnEhBfH4QBeH4khGng");
	var mask_graphics_467 = new cjs.Graphics().p("AkhNPQEqmgH6hUQH6hSGgErQGhErBTH5QBTH7krGgg");
	var mask_graphics_468 = new cjs.Graphics().p("AkQMsQE0mZH7hIQH8hGGZE0QGaE1BHH7QBIH8k1GZg");
	var mask_graphics_469 = new cjs.Graphics().p("Aj+MKQE9mSH9g8QH9g6GSE9QGSE+A8H9QA8H+k+GSg");
	var mask_graphics_470 = new cjs.Graphics().p("AjsLpQFGmKH+gxQH/gvGKFHQGLFHAwH+QAwH/lHGLg");
	var mask_graphics_471 = new cjs.Graphics().p("AjZLIQFPmCH/glQIAgjGCFQQGEFQAkH/QAkIAlQGDg");
	var mask_graphics_472 = new cjs.Graphics().p("AjGKoQFXl7IBgZQIAgXF7FZQF7FZAYH/QAZIBlZF7g");
	var mask_graphics_473 = new cjs.Graphics().p("AizKJQFhlzIAgNQIBgLFzFhQFzFiANIAQAMIBliFzg");
	var mask_graphics_474 = new cjs.Graphics().p("AifJqQFplqIBgCQIBABFqFqQFrFqABIAQAAIBlqFrg");
	var mask_graphics_475 = new cjs.Graphics().p("AiLJNQFyljIAALQIBAMFiFyQFjFzgLH/QgMIClyFig");
	var mask_graphics_476 = new cjs.Graphics().p("Ah2IvQF6lZIAAWQIAAYFaF6QFaF7gXH/QgYIBl6Fag");
	var mask_graphics_477 = new cjs.Graphics().p("AhhITQGClRH/AiQIAAkFQGCQFSGCgjH/QgjIAmCFRg");
	var mask_graphics_478 = new cjs.Graphics().p("AhLH3QGJlIH+AuQH/AwFIGJQFIGLgvH9QguIAmKFHg");
	var mask_graphics_479 = new cjs.Graphics().p("Ag1HcQGQk/H+A6QH9A7E/GRQE/GSg7H9Qg6H+mRE/g");
	var mask_graphics_480 = new cjs.Graphics().p("AgfHCQGYk2H8BGQH8BHE1GYQE2GZhGH7QhHH9mYE1g");
	var mask_graphics_481 = new cjs.Graphics().p("AgIGoQGfksH6BSQH6BTEsGfQEsGghSH5QhSH7mfEsg");
	var mask_graphics_482 = new cjs.Graphics().p("AAOGQQGnkjH4BdQH4BfEiGmQEjGnheH3QhdH5mnEig");
	var mask_graphics_483 = new cjs.Graphics().p("AAmF4QGtkZH2BpQH2BqEYGtQEYGthpH1QhpH3mtEYg");
	var mask_graphics_484 = new cjs.Graphics().p("AA+FhQGzkPH0B0QHzB2EOGzQEPG0h1HyQh1H0mzEPg");
	var mask_graphics_485 = new cjs.Graphics().p("ABWFLQG6kFHwCAQHxCBEEG5QEEG6iAHwQiAHxm6EEg");
	var mask_graphics_486 = new cjs.Graphics().p("ABvE1QG/j6HuCLQHtCND6G/QD6G/iLHtQiMHum/D6g");
	var mask_graphics_487 = new cjs.Graphics().p("ACIEhQHFjwHqCWQHqCYDvHFQDwHFiXHqQiXHqnFDwg");
	var mask_graphics_488 = new cjs.Graphics().p("AChENQHKjlHnCiQHmCjDlHKQDmHLiiHlQijHnnKDlg");
	var mask_graphics_489 = new cjs.Graphics().p("AC7D6QHPjaHjCtQHiCuDbHPQDaHQitHiQitHjnQDbg");
	var mask_graphics_490 = new cjs.Graphics().p("ADVDpQHUjQHfC4QHeC5DPHUQDQHVi4HeQi4HfnVDQg");
	var mask_graphics_491 = new cjs.Graphics().p("ADvDYQHZjFHaDDQHaDEDFHZQDFHZjDHaQjEHanZDFg");
	var mask_graphics_492 = new cjs.Graphics().p("AEJDIQHei6HVDNQHWDQC5HdQC7HejOHVQjPHWneC6g");
	var mask_graphics_493 = new cjs.Graphics().p("AEkC5QHiivHQDYQHRDaCvHiQCvHijZHQQjaHRnhCvg");
	var mask_graphics_494 = new cjs.Graphics().p("AE/CrQHmikHLDjQHLDlCkHlQCkHmjkHLQjkHMnlCjg");
	var mask_graphics_495 = new cjs.Graphics().p("AFaCdQHqiYHGDtQHGDwCYHpQCZHpjuHGQjvHGnpCZg");
	var mask_graphics_496 = new cjs.Graphics().p("AF2CRQHsiNHBD4QHAD6CNHsQCNHtj4HAQj5HBnsCNg");
	var mask_graphics_497 = new cjs.Graphics().p("AGRCGQHwiCG7ECQG6EECCHwQCCHwkDG6QkDG7nwCCg");
	var mask_graphics_498 = new cjs.Graphics().p("AGtB7QHzh2G1ENQG0EOB2HyQB2HzkMG0QkOG1nyB2g");
	var mask_graphics_499 = new cjs.Graphics().p("AHJByQH2hrGuEXQGuEYBqH1QBrH1kWGuQkYGun1Brg");
	var mask_graphics_500 = new cjs.Graphics().p("AHlBqQH4hgGoEhQGnEiBfH3QBfH4kgGnQkhGon4Bfg");
	var mask_graphics_501 = new cjs.Graphics().p("AICBiQH5hTGiEqQGgErBTH5QBUH7kqGgQkrGhn6BUg");
	var mask_graphics_502 = new cjs.Graphics().p("AIeBcQH8hIGaEzQGZE2BIH6QBIH8k0GaQk1Gan7BIg");
	var mask_graphics_503 = new cjs.Graphics().p("AI7BWQH9g8GTE9QGSE+A8H9QA8H9k9GSQk+GTn9A9g");
	var mask_graphics_504 = new cjs.Graphics().p("AJXBSQH+gxGMFGQGLFIAwH+QAwH/lGGKQlHGMn+Awg");
	var mask_graphics_505 = new cjs.Graphics().p("AJ0BOQH/glGEFQQGDFQAkH/QAlIAlPGDQlQGEoAAkg");
	var mask_graphics_506 = new cjs.Graphics().p("AKQBLQIAgYF8FYQF7FZAZIAQAZIAlYF7QlZF8oAAZg");
	var mask_graphics_507 = new cjs.Graphics().p("AKtBKQIAgNF0FhQFzFiANIAQANIBlgFzQliF0oBANg");
	var mask_graphics_508 = new cjs.Graphics().p("ALKBJQIAgBFsFpQFrFrABIAQABIBlpFrQlrFsoAABg");
	var mask_graphics_509 = new cjs.Graphics().p("EAKyAn0MAA0gmqQIAAKFkFyQFiFzgLIAQgKIAlyFjQlnFZnuAAIgegBg");
	var mask_graphics_510 = new cjs.Graphics().p("EAKWAnzMABtgmpQIAAXFaF5QFaF8gXH/QgWIBl6FZQljFGnZAAIg+gCg");
	var mask_graphics_511 = new cjs.Graphics().p("EAJ5AnyMACmgmmQH/AiFSGCQFRGDgiH+QgjIAmBFRQlfEznGAAQguAAgvgDg");
	var mask_graphics_512 = new cjs.Graphics().p("EAJdAnvMADegmhQH/AuFJGJQFHGLguH+QguH/mJFIQlaEgmzAAQg9AAg+gGg");
	var mask_graphics_513 = new cjs.Graphics().p("EAJAAnsMAEXgmbQH+A6FAGQQE+GSg6H9Qg6H+mQE/QlUEOmhAAQhMAAhOgJg");
	var mask_graphics_514 = new cjs.Graphics().p("EAIkAnpMAFQgmVQH7BGE3GYQE1GZhFH7QhGH8mYE2QlOD9mQAAQhaAAhcgMg");
	var mask_graphics_515 = new cjs.Graphics().p("EAIHAnkMAGJgmMQH6BREtGfQErGhhRH5QhRH7mfEsQlHDtmAAAQhnAAhsgSg");
	var mask_graphics_516 = new cjs.Graphics().p("EAHrAnfMAHBgmCQH4BdEjGmQEiGnhdH3QhdH5mlEiQlBDdlvAAQh1AAh6gXg");
	var mask_graphics_517 = new cjs.Graphics().p("EAHPAnaMAH4gl4QH2BpEaGsQEYGuhoH1QhpH2msEZQk5DNlgAAQiDAAiHgcg");
	var mask_graphics_518 = new cjs.Graphics().p("EAGzAnTMAIwglrQHzB0EQGzQEOG0h0HzQh0HzmzEPQkxC+lQAAQiQAAiVgjg");
	var mask_graphics_519 = new cjs.Graphics().p("EAGXAnMMAJogldQHwB/EGG5QEEG6iAHwQh/Hxm5EFQkpCvlCAAQidAAiigqg");
	var mask_graphics_520 = new cjs.Graphics().p("EAF7AnFMAKfglPQHuCLD7G/QD6HAiLHtQiLHum/D6QkgChkzAAQiqAAiwgxg");
	var mask_graphics_521 = new cjs.Graphics().p("EAFfAm9MALWgk/QHqCWDxHFQDwHGiWHpQiXHrnEDvQkXCUklAAQi3AAi9g5g");
	var mask_graphics_522 = new cjs.Graphics().p("EAFEAm0MAMNgktQHmChDmHKQDlHLihHmQiiHnnKDlQkNCIkXAAQjEAAjJhDg");
	var mask_graphics_523 = new cjs.Graphics().p("EAEpAmrMANCgkbQHjCtDcHPQDaHQitHiQisHjnPDbQkEB7kJAAQjRAAjVhMg");
	var mask_graphics_524 = new cjs.Graphics().p("EAEOAmhMAN4gkHQHfC4DRHUQDPHVi4HeQi4HfnTDQQj6Bvj8AAQjeAAjghWg");
	var mask_graphics_525 = new cjs.Graphics().p("EAD0AmWMAOtgjyQHaDDDGHZQDFHajDHZQjDHbnZDFQjuBkjvAAQjrAAjrhhg");
	var mask_graphics_526 = new cjs.Graphics().p("EADZAmLMAPigjcQHVDOC8HdQC5HfjNHVQjOHVndC7QjkBZjhAAQj5AAj2hsg");
	var mask_graphics_527 = new cjs.Graphics().p("EAC/Al/MAQWgjEQHRDZCwHhQCuHjjYHQQjZHRnhCvQjYBPjUAAQkGAAkBh4g");
	var mask_graphics_528 = new cjs.Graphics().p("EACmAlzMARJgirQHLDjClHlQCkHnjjHKQjkHMnlCkQjMBGjHAAQkUAAkKiEg");
	var mask_graphics_529 = new cjs.Graphics().p("EACMAlmMAR8giRQHGDtCaHpQCYHqjtHGQjuHHnpCYQjAA8i6AAQkiAAkUiQg");
	var mask_graphics_530 = new cjs.Graphics().p("EABzAlZMASvgh3QHAD4COHtQCNHtj4HAQj4HBnsCOQizAziuAAQkvAAkeidg");
	var mask_graphics_531 = new cjs.Graphics().p("EABbAlLMATfghaQG7ECCDHwQCCHwkDG6QkCG7nvCCQinAsihAAQk9AAkmirg");
	var mask_graphics_532 = new cjs.Graphics().p("EABCAk8MAURgg9QG1ENB3HyQB2H0kMG0QkNG1nyB3QiZAkiUAAQlMAAkvi6g");
	var mask_graphics_533 = new cjs.Graphics().p("EAAqAktMAVBggeQGvEWBsH1QBqH2kWGuQkXGvn1BrQiLAeiHAAQlbAAk3jJg");
	var mask_graphics_534 = new cjs.Graphics().p("EAATAkdIVw/+QGoEgBgH4QBfH4kgGnQkgGon3BgQh+AYh5AAQlrAAk+jZg");
	var mask_graphics_535 = new cjs.Graphics().p("EgAEAkNIWf/eQGhEqBVH6QBTH6kqGhQkqGhn5BUQhwAThrAAQl8AAlEjpg");
	var mask_graphics_536 = new cjs.Graphics().p("EgAbAj8IXN+8QGaE0BJH7QBIH8k0GaQk0Gan6BJQhhANheAAQmMAAlLj5g");
	var mask_graphics_537 = new cjs.Graphics().p("EgAxAjrIX6+ZQGTE9A9H9QA8H9k9GTQk9GTn9A8QhSAKhPAAQmdAAlRkKg");
	var mask_graphics_538 = new cjs.Graphics().p("EgBHAjZIYm91QGMFGAxH+QAwH/lGGLQlGGMn+AxQhDAGhAAAQmvAAlXkcg");
	var mask_graphics_539 = new cjs.Graphics().p("EgBdAjHIZS9QQGEFPAmH/QAkIAlPGDQlQGEn+AlQgzAEgyAAQnCAAlckug");
	var mask_graphics_540 = new cjs.Graphics().p("EgByAi0IZ98qQF7FYAbIAQAYIAlYF8QlYF8oAAZQgjACgiAAQnVAAlhlBg");
	var mask_graphics_541 = new cjs.Graphics().p("EgCHAihIan8EQFzFhAPIAQAMIBlgF0QlhF0oAANIgmABQnpAAlllUg");
	var mask_graphics_542 = new cjs.Graphics().p("EgCcAiNIbQ7cQFsFpACIBQABIBlpFrQlqFsoAACIgEAAQn/AAlplog");
	var mask_graphics_543 = new cjs.Graphics().p("EAK0An0QoBgKljlxIb460QFjFygJIAQgLIBlxFjQloFanuAAIgcgBg");
	var mask_graphics_544 = new cjs.Graphics().p("EAKXAnzQoBgVlZl6Icf6KQFaF6gVIAQgXIAl5FbQlkFGnZAAIg9gCg");
	var mask_graphics_545 = new cjs.Graphics().p("EAJ7AnyQoBgilQmBIdF5gQFRGCghH/QgjIAmBFRQlfE0nGAAQgtAAgugDg");
	var mask_graphics_546 = new cjs.Graphics().p("EAJeAnwQn/gulImJIdq40QFJGJgtH/QgvH+mIFJQlaEhm0AAQg8AAg+gFg");
	var mask_graphics_547 = new cjs.Graphics().p("EAJCAnsQn/g5k+mRIeO4HQFAGQg5H+Qg6H+mRE/QlUEPmiAAQhKAAhNgJg");
	var mask_graphics_548 = new cjs.Graphics().p("EAIlAnpQn9hFk1mYIex3bQE3GYhFH8QhGH8mXE2QlPD+mQAAQhZAAhcgMg");
	var mask_graphics_549 = new cjs.Graphics().p("EAIJAnkQn7hQksmfIfT2tQEtGfhQH6QhSH7meEsQlIDumAAAQhnAAhqgSg");
	var mask_graphics_550 = new cjs.Graphics().p("EAHsAngQn4hdkjmmIf11+QEjGmhcH4QheH4mlEjQlBDelvAAQh1AAh5gWg");
	var mask_graphics_551 = new cjs.Graphics().p("EAHQAnaQn2hokZmtMAgUgVPQEaGthoH2QhpH2msEZQk5DOlgAAQiCAAiHgcg");
	var mask_graphics_552 = new cjs.Graphics().p("EAG0AnUQnzh0kPmzMAgzgUfQEPGzhzH0Qh1HzmyEPQkxC/lRAAQiPAAiVgig");
	var mask_graphics_553 = new cjs.Graphics().p("EAGYAnNQnwiAkFm4MAhQgTuQEGG4h/HxQiAHxm4EFQkqCwlCAAQicAAiigpg");
	var mask_graphics_554 = new cjs.Graphics().p("EAF9AnFQnuiKj7m/MAhtgS9QD7G/iJHuQiMHtm+D7QkhCikzAAQiqAAiugxg");
	var mask_graphics_555 = new cjs.Graphics().p("EAFhAm9QnqiWjxnEMAiJgSLQDxHFiVHqQiXHqnEDxQkYCUklAAQi2AAi8g5g");
	var mask_graphics_556 = new cjs.Graphics().p("EAFGAm0QnnihjmnKMAijgRYQDmHKigHnQiiHnnKDmQkOCHkXAAQjDAAjIhCg");
	var mask_graphics_557 = new cjs.Graphics().p("EAErAmrQnjitjbnPMAi7gQkQDcHPisHjQitHjnPDbQkEB8kJAAQjRAAjThMg");
	var mask_graphics_558 = new cjs.Graphics().p("EAEQAmhQnfi4jQnUMAjTgPwQDRHUi3HfQi4HfnUDQQj5Bwj9AAQjdAAjfhWg");
	var mask_graphics_559 = new cjs.Graphics().p("EAD1AmWQnajCjGnZMAjrgO8QDGHZjCHaQjEHbnYDFQjvBkjvAAQjqAAjrhgg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(440).to({graphics:mask_graphics_440,x:195.4,y:193}).wait(1).to({graphics:mask_graphics_441,x:195.4,y:194.4}).wait(1).to({graphics:mask_graphics_442,x:195.4,y:195.8}).wait(1).to({graphics:mask_graphics_443,x:195.4,y:197.3}).wait(1).to({graphics:mask_graphics_444,x:195.4,y:198.7}).wait(1).to({graphics:mask_graphics_445,x:195.4,y:200.1}).wait(1).to({graphics:mask_graphics_446,x:195.5,y:201.5}).wait(1).to({graphics:mask_graphics_447,x:195.5,y:202.9}).wait(1).to({graphics:mask_graphics_448,x:195.5,y:204.3}).wait(1).to({graphics:mask_graphics_449,x:195.5,y:205.7}).wait(1).to({graphics:mask_graphics_450,x:195.5,y:207.1}).wait(1).to({graphics:mask_graphics_451,x:195.5,y:208.5}).wait(1).to({graphics:mask_graphics_452,x:195.6,y:209.9}).wait(1).to({graphics:mask_graphics_453,x:195.6,y:211.3}).wait(1).to({graphics:mask_graphics_454,x:195.6,y:212.6}).wait(1).to({graphics:mask_graphics_455,x:195.6,y:214}).wait(1).to({graphics:mask_graphics_456,x:195.6,y:215.3}).wait(1).to({graphics:mask_graphics_457,x:195.6,y:216.6}).wait(1).to({graphics:mask_graphics_458,x:195.6,y:217.9}).wait(1).to({graphics:mask_graphics_459,x:195.6,y:219.2}).wait(1).to({graphics:mask_graphics_460,x:195.6,y:220.5}).wait(1).to({graphics:mask_graphics_461,x:195.6,y:221.8}).wait(1).to({graphics:mask_graphics_462,x:195.6,y:223.1}).wait(1).to({graphics:mask_graphics_463,x:195.5,y:224.3}).wait(1).to({graphics:mask_graphics_464,x:195.5,y:225.5}).wait(1).to({graphics:mask_graphics_465,x:195.5,y:226.7}).wait(1).to({graphics:mask_graphics_466,x:195.5,y:227.9}).wait(1).to({graphics:mask_graphics_467,x:195.5,y:229.1}).wait(1).to({graphics:mask_graphics_468,x:195.5,y:230.2}).wait(1).to({graphics:mask_graphics_469,x:195.4,y:231.4}).wait(1).to({graphics:mask_graphics_470,x:195.4,y:232.5}).wait(1).to({graphics:mask_graphics_471,x:195.4,y:233.6}).wait(1).to({graphics:mask_graphics_472,x:195.4,y:234.6}).wait(1).to({graphics:mask_graphics_473,x:195.4,y:235.7}).wait(1).to({graphics:mask_graphics_474,x:195.4,y:236.7}).wait(1).to({graphics:mask_graphics_475,x:195.4,y:237.7}).wait(1).to({graphics:mask_graphics_476,x:195.4,y:238.7}).wait(1).to({graphics:mask_graphics_477,x:195.4,y:239.6}).wait(1).to({graphics:mask_graphics_478,x:195.4,y:240.5}).wait(1).to({graphics:mask_graphics_479,x:195.4,y:241.5}).wait(1).to({graphics:mask_graphics_480,x:195.5,y:242.3}).wait(1).to({graphics:mask_graphics_481,x:195.5,y:243.2}).wait(1).to({graphics:mask_graphics_482,x:195.5,y:244}).wait(1).to({graphics:mask_graphics_483,x:195.5,y:244.8}).wait(1).to({graphics:mask_graphics_484,x:195.5,y:245.6}).wait(1).to({graphics:mask_graphics_485,x:195.5,y:246.3}).wait(1).to({graphics:mask_graphics_486,x:195.5,y:247}).wait(1).to({graphics:mask_graphics_487,x:195.6,y:247.7}).wait(1).to({graphics:mask_graphics_488,x:195.6,y:248.3}).wait(1).to({graphics:mask_graphics_489,x:195.6,y:249}).wait(1).to({graphics:mask_graphics_490,x:195.6,y:249.6}).wait(1).to({graphics:mask_graphics_491,x:195.6,y:250.1}).wait(1).to({graphics:mask_graphics_492,x:195.6,y:250.7}).wait(1).to({graphics:mask_graphics_493,x:195.6,y:251.2}).wait(1).to({graphics:mask_graphics_494,x:195.6,y:251.6}).wait(1).to({graphics:mask_graphics_495,x:195.6,y:252.1}).wait(1).to({graphics:mask_graphics_496,x:195.5,y:252.5}).wait(1).to({graphics:mask_graphics_497,x:195.5,y:252.9}).wait(1).to({graphics:mask_graphics_498,x:195.5,y:253.2}).wait(1).to({graphics:mask_graphics_499,x:195.5,y:253.5}).wait(1).to({graphics:mask_graphics_500,x:195.5,y:253.8}).wait(1).to({graphics:mask_graphics_501,x:195.5,y:254.1}).wait(1).to({graphics:mask_graphics_502,x:195.4,y:254.3}).wait(1).to({graphics:mask_graphics_503,x:195.4,y:254.5}).wait(1).to({graphics:mask_graphics_504,x:195.4,y:254.6}).wait(1).to({graphics:mask_graphics_505,x:195.4,y:254.7}).wait(1).to({graphics:mask_graphics_506,x:195.4,y:254.8}).wait(1).to({graphics:mask_graphics_507,x:195.4,y:254.9}).wait(1).to({graphics:mask_graphics_508,x:195.4,y:254.9}).wait(1).to({graphics:mask_graphics_509,x:195.4,y:254.9}).wait(1).to({graphics:mask_graphics_510,x:195.4,y:254.9}).wait(1).to({graphics:mask_graphics_511,x:195.4,y:254.9}).wait(1).to({graphics:mask_graphics_512,x:195.4,y:254.9}).wait(1).to({graphics:mask_graphics_513,x:195.4,y:254.9}).wait(1).to({graphics:mask_graphics_514,x:195.4,y:254.9}).wait(1).to({graphics:mask_graphics_515,x:195.5,y:255}).wait(1).to({graphics:mask_graphics_516,x:195.5,y:255}).wait(1).to({graphics:mask_graphics_517,x:195.5,y:255}).wait(1).to({graphics:mask_graphics_518,x:195.5,y:255}).wait(1).to({graphics:mask_graphics_519,x:195.5,y:255}).wait(1).to({graphics:mask_graphics_520,x:195.5,y:255}).wait(1).to({graphics:mask_graphics_521,x:195.5,y:255}).wait(1).to({graphics:mask_graphics_522,x:195.6,y:255.1}).wait(1).to({graphics:mask_graphics_523,x:195.6,y:255.1}).wait(1).to({graphics:mask_graphics_524,x:195.6,y:255.1}).wait(1).to({graphics:mask_graphics_525,x:195.6,y:255.1}).wait(1).to({graphics:mask_graphics_526,x:195.6,y:255.1}).wait(1).to({graphics:mask_graphics_527,x:195.6,y:255.1}).wait(1).to({graphics:mask_graphics_528,x:195.6,y:255.1}).wait(1).to({graphics:mask_graphics_529,x:195.6,y:255}).wait(1).to({graphics:mask_graphics_530,x:195.5,y:255}).wait(1).to({graphics:mask_graphics_531,x:195.5,y:255}).wait(1).to({graphics:mask_graphics_532,x:195.5,y:255}).wait(1).to({graphics:mask_graphics_533,x:195.5,y:255}).wait(1).to({graphics:mask_graphics_534,x:195.5,y:255}).wait(1).to({graphics:mask_graphics_535,x:195.5,y:255}).wait(1).to({graphics:mask_graphics_536,x:195.5,y:254.9}).wait(1).to({graphics:mask_graphics_537,x:195.4,y:254.9}).wait(1).to({graphics:mask_graphics_538,x:195.4,y:254.9}).wait(1).to({graphics:mask_graphics_539,x:195.4,y:254.9}).wait(1).to({graphics:mask_graphics_540,x:195.4,y:254.9}).wait(1).to({graphics:mask_graphics_541,x:195.4,y:254.9}).wait(1).to({graphics:mask_graphics_542,x:195.4,y:254.9}).wait(1).to({graphics:mask_graphics_543,x:195.4,y:254.9}).wait(1).to({graphics:mask_graphics_544,x:195.4,y:254.9}).wait(1).to({graphics:mask_graphics_545,x:195.4,y:254.9}).wait(1).to({graphics:mask_graphics_546,x:195.4,y:254.9}).wait(1).to({graphics:mask_graphics_547,x:195.4,y:254.9}).wait(1).to({graphics:mask_graphics_548,x:195.5,y:254.9}).wait(1).to({graphics:mask_graphics_549,x:195.5,y:255}).wait(1).to({graphics:mask_graphics_550,x:195.5,y:255}).wait(1).to({graphics:mask_graphics_551,x:195.5,y:255}).wait(1).to({graphics:mask_graphics_552,x:195.5,y:255}).wait(1).to({graphics:mask_graphics_553,x:195.5,y:255}).wait(1).to({graphics:mask_graphics_554,x:195.5,y:255}).wait(1).to({graphics:mask_graphics_555,x:195.6,y:255}).wait(1).to({graphics:mask_graphics_556,x:195.6,y:255}).wait(1).to({graphics:mask_graphics_557,x:195.6,y:255.1}).wait(1).to({graphics:mask_graphics_558,x:195.6,y:255.1}).wait(1).to({graphics:mask_graphics_559,x:195.6,y:255}).wait(72));

	// Layer 16
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(25,1,1).p("AKS6+MAAAAq0QACAkgCAiQgMD2jBC4QjbDSlEADQlFADjzkD");
	this.shape_1.setTransform(284.9,276.6);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(440).to({_off:false},0).wait(191));

	// Layer 15 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_318 = new cjs.Graphics().p("AU1HCIAAiMIIqAAIAACMg");
	var mask_1_graphics_319 = new cjs.Graphics().p("AkUBSIAAijIIpAAIAACjg");
	var mask_1_graphics_320 = new cjs.Graphics().p("AkUBeIAAi7IIpAAIAAC7g");
	var mask_1_graphics_321 = new cjs.Graphics().p("AkUBrIAAjUIIpAAIAADUg");
	var mask_1_graphics_322 = new cjs.Graphics().p("AkUB2IAAjrIIpAAIAADrg");
	var mask_1_graphics_323 = new cjs.Graphics().p("AkUCDIAAkFIIpAAIAAEFg");
	var mask_1_graphics_324 = new cjs.Graphics().p("AkUCPIAAkdIIpAAIAAEdg");
	var mask_1_graphics_325 = new cjs.Graphics().p("AkUCbIAAk1IIpAAIAAE1g");
	var mask_1_graphics_326 = new cjs.Graphics().p("AkUCnIAAlNIIpAAIAAFNg");
	var mask_1_graphics_327 = new cjs.Graphics().p("AkUCzIAAllIIpAAIAAFlg");
	var mask_1_graphics_328 = new cjs.Graphics().p("AkUC/IAAl9IIpAAIAAF9g");
	var mask_1_graphics_329 = new cjs.Graphics().p("AkUDMIAAmXIIpAAIAAGXg");
	var mask_1_graphics_330 = new cjs.Graphics().p("AkUDYIAAmvIIpAAIAAGvg");
	var mask_1_graphics_331 = new cjs.Graphics().p("AkUDkIAAnHIIpAAIAAHHg");
	var mask_1_graphics_332 = new cjs.Graphics().p("AkUDwIAAnfIIpAAIAAHfg");
	var mask_1_graphics_333 = new cjs.Graphics().p("AkUD8IAAn3IIpAAIAAH3g");
	var mask_1_graphics_334 = new cjs.Graphics().p("AkUEJIAAoQIIpAAIAAIQg");
	var mask_1_graphics_335 = new cjs.Graphics().p("AkUEUIAAonIIpAAIAAIng");
	var mask_1_graphics_336 = new cjs.Graphics().p("AkUEhIAApBIIpAAIAAJBg");
	var mask_1_graphics_337 = new cjs.Graphics().p("AkUEtIAApZIIpAAIAAJZg");
	var mask_1_graphics_338 = new cjs.Graphics().p("AkUE5IAApxIIpAAIAAJxg");
	var mask_1_graphics_339 = new cjs.Graphics().p("AkUFFIAAqJIIpAAIAAKJg");
	var mask_1_graphics_340 = new cjs.Graphics().p("AkUFRIAAqhIIpAAIAAKhg");
	var mask_1_graphics_341 = new cjs.Graphics().p("AkUFeIAAq6IIpAAIAAK6g");
	var mask_1_graphics_342 = new cjs.Graphics().p("AkUFqIAArTIIpAAIAALTg");
	var mask_1_graphics_343 = new cjs.Graphics().p("AkUF2IAArrIIpAAIAALrg");
	var mask_1_graphics_344 = new cjs.Graphics().p("AkUGCIAAsDIIpAAIAAMDg");
	var mask_1_graphics_345 = new cjs.Graphics().p("AkUGOIAAsbIIpAAIAAMbg");
	var mask_1_graphics_346 = new cjs.Graphics().p("AkUGaIAAszIIpAAIAAMzg");
	var mask_1_graphics_347 = new cjs.Graphics().p("AkUGnIAAtMIIpAAIAANMg");
	var mask_1_graphics_348 = new cjs.Graphics().p("AkUGyIAAtjIIpAAIAANjg");
	var mask_1_graphics_349 = new cjs.Graphics().p("AkUG/IAAt9IIpAAIAAN9g");
	var mask_1_graphics_350 = new cjs.Graphics().p("AkUHLIAAuVIIpAAIAAOVg");
	var mask_1_graphics_351 = new cjs.Graphics().p("AkUHXIAAutIIpAAIAAOtg");
	var mask_1_graphics_352 = new cjs.Graphics().p("AkUHjIAAvFIIpAAIAAPFg");
	var mask_1_graphics_353 = new cjs.Graphics().p("AkUHvIAAvdIIpAAIAAPdg");
	var mask_1_graphics_354 = new cjs.Graphics().p("AkUH8IAAv2IIpAAIAAP2g");
	var mask_1_graphics_355 = new cjs.Graphics().p("AkUIHIAAwNIIpAAIAAQNg");
	var mask_1_graphics_356 = new cjs.Graphics().p("AkUIUIAAwnIIpAAIAAQng");
	var mask_1_graphics_357 = new cjs.Graphics().p("AkUIgIAAw/IIpAAIAAQ/g");
	var mask_1_graphics_358 = new cjs.Graphics().p("AkUIsIAAxXIIpAAIAARXg");
	var mask_1_graphics_359 = new cjs.Graphics().p("AkUI4IAAxvIIpAAIAARvg");
	var mask_1_graphics_360 = new cjs.Graphics().p("AkUJFIAAyIIIpAAIAASIg");
	var mask_1_graphics_361 = new cjs.Graphics().p("AkUJRIAAygIIpAAIAASgg");
	var mask_1_graphics_362 = new cjs.Graphics().p("AkUJdIAAy5IIpAAIAAS5g");
	var mask_1_graphics_363 = new cjs.Graphics().p("AkUJpIAAzRIIpAAIAATRg");
	var mask_1_graphics_364 = new cjs.Graphics().p("AkUJ1IAAzpIIpAAIAATpg");
	var mask_1_graphics_365 = new cjs.Graphics().p("AkUKBIAA0BIIpAAIAAUBg");
	var mask_1_graphics_366 = new cjs.Graphics().p("AkUKNIAA0ZIIpAAIAAUZg");
	var mask_1_graphics_367 = new cjs.Graphics().p("AkUKaIAA0yIIpAAIAAUyg");
	var mask_1_graphics_368 = new cjs.Graphics().p("AkUKlIAA1JIIpAAIAAVJg");
	var mask_1_graphics_369 = new cjs.Graphics().p("AkUKyIAA1jIIpAAIAAVjg");
	var mask_1_graphics_370 = new cjs.Graphics().p("AkUK+IAA17IIpAAIAAV7g");
	var mask_1_graphics_371 = new cjs.Graphics().p("AkULKIAA2TIIpAAIAAWTg");
	var mask_1_graphics_372 = new cjs.Graphics().p("AkULWIAA2rIIpAAIAAWrg");
	var mask_1_graphics_373 = new cjs.Graphics().p("AkULiIAA3DIIpAAIAAXDg");
	var mask_1_graphics_374 = new cjs.Graphics().p("AkULvIAA3cIIpAAIAAXcg");
	var mask_1_graphics_375 = new cjs.Graphics().p("AkUL7IAA31IIpAAIAAX1g");
	var mask_1_graphics_376 = new cjs.Graphics().p("AkUMHIAA4NIIpAAIAAYNg");
	var mask_1_graphics_377 = new cjs.Graphics().p("AkUMTIAA4lIIpAAIAAYlg");
	var mask_1_graphics_378 = new cjs.Graphics().p("AkUMfIAA49IIpAAIAAY9g");
	var mask_1_graphics_379 = new cjs.Graphics().p("AkUMrIAA5VIIpAAIAAZVg");
	var mask_1_graphics_380 = new cjs.Graphics().p("AkUM3IAA5tIIpAAIAAZtg");
	var mask_1_graphics_381 = new cjs.Graphics().p("AkUNDIAA6FIIpAAIAAaFg");
	var mask_1_graphics_382 = new cjs.Graphics().p("AkUNQIAA6fIIpAAIAAafg");
	var mask_1_graphics_383 = new cjs.Graphics().p("AkUNbIAA62IIpAAIAAa2g");
	var mask_1_graphics_384 = new cjs.Graphics().p("AkUNoIAA7PIIpAAIAAbPg");
	var mask_1_graphics_385 = new cjs.Graphics().p("AkUN0IAA7nIIpAAIAAbng");
	var mask_1_graphics_386 = new cjs.Graphics().p("AkUOAIAA7/IIpAAIAAb/g");
	var mask_1_graphics_387 = new cjs.Graphics().p("AkUOMIAA8XIIpAAIAAcXg");
	var mask_1_graphics_388 = new cjs.Graphics().p("AkUOYIAA8vIIpAAIAAcvg");
	var mask_1_graphics_389 = new cjs.Graphics().p("AkUOlIAA9JIIpAAIAAdJg");
	var mask_1_graphics_390 = new cjs.Graphics().p("AkUOxIAA9hIIpAAIAAdhg");
	var mask_1_graphics_391 = new cjs.Graphics().p("AkUO9IAA95IIpAAIAAd5g");
	var mask_1_graphics_392 = new cjs.Graphics().p("AkUPJIAA+RIIpAAIAAeRg");
	var mask_1_graphics_393 = new cjs.Graphics().p("AkUPVIAA+pIIpAAIAAepg");
	var mask_1_graphics_394 = new cjs.Graphics().p("AkUPhIAA/BIIpAAIAAfBg");
	var mask_1_graphics_395 = new cjs.Graphics().p("AkUPuIAA/bIIpAAIAAfbg");
	var mask_1_graphics_396 = new cjs.Graphics().p("AkUP6IAA/zIIpAAIAAfzg");
	var mask_1_graphics_397 = new cjs.Graphics().p("AkUQGMAAAggLIIpAAMAAAAgLg");
	var mask_1_graphics_398 = new cjs.Graphics().p("AkUQSMAAAggjIIpAAMAAAAgjg");
	var mask_1_graphics_399 = new cjs.Graphics().p("AkUQeMAAAgg7IIpAAMAAAAg7g");
	var mask_1_graphics_400 = new cjs.Graphics().p("AkUQqMAAAghTIIpAAMAAAAhTg");
	var mask_1_graphics_401 = new cjs.Graphics().p("AkUQ2MAAAghrIIpAAMAAAAhrg");
	var mask_1_graphics_402 = new cjs.Graphics().p("AkURDMAAAgiFIIpAAMAAAAiFg");
	var mask_1_graphics_403 = new cjs.Graphics().p("AkURPMAAAgidIIpAAMAAAAidg");
	var mask_1_graphics_404 = new cjs.Graphics().p("AkURbMAAAgi1IIpAAMAAAAi1g");
	var mask_1_graphics_405 = new cjs.Graphics().p("AkURnMAAAgjNIIpAAMAAAAjNg");
	var mask_1_graphics_406 = new cjs.Graphics().p("AkURzMAAAgjlIIpAAMAAAAjlg");
	var mask_1_graphics_407 = new cjs.Graphics().p("AkUR/MAAAgj9IIpAAMAAAAj9g");
	var mask_1_graphics_408 = new cjs.Graphics().p("AkUSLMAAAgkWIIpAAMAAAAkWg");
	var mask_1_graphics_409 = new cjs.Graphics().p("AkUSYMAAAgkvIIpAAMAAAAkvg");
	var mask_1_graphics_410 = new cjs.Graphics().p("AkUSkMAAAglHIIpAAMAAAAlHg");
	var mask_1_graphics_411 = new cjs.Graphics().p("AkUSwMAAAglfIIpAAMAAAAlfg");
	var mask_1_graphics_412 = new cjs.Graphics().p("AkUS8MAAAgl3IIpAAMAAAAl3g");
	var mask_1_graphics_413 = new cjs.Graphics().p("AkUTIMAAAgmPIIpAAMAAAAmPg");
	var mask_1_graphics_414 = new cjs.Graphics().p("AkUTUMAAAgmnIIpAAMAAAAmng");
	var mask_1_graphics_415 = new cjs.Graphics().p("AkUThMAAAgnBIIpAAMAAAAnBg");
	var mask_1_graphics_416 = new cjs.Graphics().p("AkUTtMAAAgnZIIpAAMAAAAnZg");
	var mask_1_graphics_417 = new cjs.Graphics().p("AkUT5MAAAgnxIIpAAMAAAAnxg");
	var mask_1_graphics_418 = new cjs.Graphics().p("AkUUFMAAAgoJIIpAAMAAAAoJg");
	var mask_1_graphics_419 = new cjs.Graphics().p("AkUURMAAAgohIIpAAMAAAAohg");
	var mask_1_graphics_420 = new cjs.Graphics().p("AkUUdMAAAgo5IIpAAMAAAAo5g");
	var mask_1_graphics_421 = new cjs.Graphics().p("AkUUpMAAAgpSIIpAAMAAAApSg");
	var mask_1_graphics_422 = new cjs.Graphics().p("AkUU2MAAAgprIIpAAMAAAAprg");
	var mask_1_graphics_423 = new cjs.Graphics().p("AkUVCMAAAgqDIIpAAMAAAAqDg");
	var mask_1_graphics_424 = new cjs.Graphics().p("AkUVOMAAAgqbIIpAAMAAAAqbg");
	var mask_1_graphics_425 = new cjs.Graphics().p("AkUVaMAAAgqzIIpAAMAAAAqzg");
	var mask_1_graphics_426 = new cjs.Graphics().p("AkUVmMAAAgrLIIpAAMAAAArLg");
	var mask_1_graphics_427 = new cjs.Graphics().p("AkUVyMAAAgrjIIpAAMAAAArjg");
	var mask_1_graphics_428 = new cjs.Graphics().p("AkUV+MAAAgr8IIpAAMAAAAr8g");
	var mask_1_graphics_429 = new cjs.Graphics().p("AkUWLMAAAgsVIIpAAMAAAAsVg");
	var mask_1_graphics_430 = new cjs.Graphics().p("AkUWXMAAAgstIIpAAMAAAAstg");
	var mask_1_graphics_431 = new cjs.Graphics().p("AkUWjMAAAgtFIIpAAMAAAAtFg");
	var mask_1_graphics_432 = new cjs.Graphics().p("AkUWvMAAAgtdIIpAAMAAAAtdg");
	var mask_1_graphics_433 = new cjs.Graphics().p("AkUW7MAAAgt1IIpAAMAAAAt1g");
	var mask_1_graphics_434 = new cjs.Graphics().p("AkUXHMAAAguNIIpAAMAAAAuNg");
	var mask_1_graphics_435 = new cjs.Graphics().p("AkUXUMAAAgunIIpAAMAAAAung");
	var mask_1_graphics_436 = new cjs.Graphics().p("AkUXgMAAAgu/IIpAAMAAAAu/g");
	var mask_1_graphics_437 = new cjs.Graphics().p("AkUXsMAAAgvXIIpAAMAAAAvXg");
	var mask_1_graphics_438 = new cjs.Graphics().p("AkUX4MAAAgvvIIpAAMAAAAvvg");
	var mask_1_graphics_439 = new cjs.Graphics().p("AkUYEMAAAgwHIIpAAMAAAAwHg");
	var mask_1_graphics_440 = new cjs.Graphics().p("AU1eMMAAAgwfIIqAAMAAAAwfg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(318).to({graphics:mask_1_graphics_318,x:188.8,y:45}).wait(1).to({graphics:mask_1_graphics_319,x:349.8,y:84.2}).wait(1).to({graphics:mask_1_graphics_320,x:349.8,y:85.4}).wait(1).to({graphics:mask_1_graphics_321,x:349.8,y:86.6}).wait(1).to({graphics:mask_1_graphics_322,x:349.8,y:87.8}).wait(1).to({graphics:mask_1_graphics_323,x:349.8,y:89}).wait(1).to({graphics:mask_1_graphics_324,x:349.8,y:90.3}).wait(1).to({graphics:mask_1_graphics_325,x:349.8,y:91.5}).wait(1).to({graphics:mask_1_graphics_326,x:349.8,y:92.7}).wait(1).to({graphics:mask_1_graphics_327,x:349.8,y:93.9}).wait(1).to({graphics:mask_1_graphics_328,x:349.8,y:95.1}).wait(1).to({graphics:mask_1_graphics_329,x:349.8,y:96.3}).wait(1).to({graphics:mask_1_graphics_330,x:349.8,y:97.5}).wait(1).to({graphics:mask_1_graphics_331,x:349.8,y:98.8}).wait(1).to({graphics:mask_1_graphics_332,x:349.8,y:100}).wait(1).to({graphics:mask_1_graphics_333,x:349.8,y:101.2}).wait(1).to({graphics:mask_1_graphics_334,x:349.8,y:102.4}).wait(1).to({graphics:mask_1_graphics_335,x:349.8,y:103.6}).wait(1).to({graphics:mask_1_graphics_336,x:349.8,y:104.8}).wait(1).to({graphics:mask_1_graphics_337,x:349.8,y:106}).wait(1).to({graphics:mask_1_graphics_338,x:349.8,y:107.3}).wait(1).to({graphics:mask_1_graphics_339,x:349.8,y:108.5}).wait(1).to({graphics:mask_1_graphics_340,x:349.8,y:109.7}).wait(1).to({graphics:mask_1_graphics_341,x:349.8,y:110.9}).wait(1).to({graphics:mask_1_graphics_342,x:349.8,y:112.1}).wait(1).to({graphics:mask_1_graphics_343,x:349.8,y:113.3}).wait(1).to({graphics:mask_1_graphics_344,x:349.8,y:114.6}).wait(1).to({graphics:mask_1_graphics_345,x:349.8,y:115.8}).wait(1).to({graphics:mask_1_graphics_346,x:349.8,y:117}).wait(1).to({graphics:mask_1_graphics_347,x:349.8,y:118.2}).wait(1).to({graphics:mask_1_graphics_348,x:349.8,y:119.4}).wait(1).to({graphics:mask_1_graphics_349,x:349.8,y:120.6}).wait(1).to({graphics:mask_1_graphics_350,x:349.8,y:121.8}).wait(1).to({graphics:mask_1_graphics_351,x:349.8,y:123.1}).wait(1).to({graphics:mask_1_graphics_352,x:349.8,y:124.3}).wait(1).to({graphics:mask_1_graphics_353,x:349.8,y:125.5}).wait(1).to({graphics:mask_1_graphics_354,x:349.8,y:126.7}).wait(1).to({graphics:mask_1_graphics_355,x:349.8,y:127.9}).wait(1).to({graphics:mask_1_graphics_356,x:349.8,y:129.1}).wait(1).to({graphics:mask_1_graphics_357,x:349.8,y:130.4}).wait(1).to({graphics:mask_1_graphics_358,x:349.8,y:131.6}).wait(1).to({graphics:mask_1_graphics_359,x:349.8,y:132.8}).wait(1).to({graphics:mask_1_graphics_360,x:349.8,y:134}).wait(1).to({graphics:mask_1_graphics_361,x:349.8,y:135.2}).wait(1).to({graphics:mask_1_graphics_362,x:349.8,y:136.4}).wait(1).to({graphics:mask_1_graphics_363,x:349.8,y:137.6}).wait(1).to({graphics:mask_1_graphics_364,x:349.8,y:138.9}).wait(1).to({graphics:mask_1_graphics_365,x:349.8,y:140.1}).wait(1).to({graphics:mask_1_graphics_366,x:349.8,y:141.3}).wait(1).to({graphics:mask_1_graphics_367,x:349.8,y:142.5}).wait(1).to({graphics:mask_1_graphics_368,x:349.8,y:143.7}).wait(1).to({graphics:mask_1_graphics_369,x:349.8,y:144.9}).wait(1).to({graphics:mask_1_graphics_370,x:349.8,y:146.2}).wait(1).to({graphics:mask_1_graphics_371,x:349.8,y:147.4}).wait(1).to({graphics:mask_1_graphics_372,x:349.8,y:148.6}).wait(1).to({graphics:mask_1_graphics_373,x:349.8,y:149.8}).wait(1).to({graphics:mask_1_graphics_374,x:349.8,y:151}).wait(1).to({graphics:mask_1_graphics_375,x:349.8,y:152.2}).wait(1).to({graphics:mask_1_graphics_376,x:349.8,y:153.4}).wait(1).to({graphics:mask_1_graphics_377,x:349.8,y:154.7}).wait(1).to({graphics:mask_1_graphics_378,x:349.8,y:155.9}).wait(1).to({graphics:mask_1_graphics_379,x:349.8,y:157.1}).wait(1).to({graphics:mask_1_graphics_380,x:349.8,y:158.3}).wait(1).to({graphics:mask_1_graphics_381,x:349.8,y:159.5}).wait(1).to({graphics:mask_1_graphics_382,x:349.8,y:160.8}).wait(1).to({graphics:mask_1_graphics_383,x:349.8,y:162}).wait(1).to({graphics:mask_1_graphics_384,x:349.8,y:163.2}).wait(1).to({graphics:mask_1_graphics_385,x:349.8,y:164.4}).wait(1).to({graphics:mask_1_graphics_386,x:349.8,y:165.6}).wait(1).to({graphics:mask_1_graphics_387,x:349.8,y:166.8}).wait(1).to({graphics:mask_1_graphics_388,x:349.8,y:168}).wait(1).to({graphics:mask_1_graphics_389,x:349.8,y:169.3}).wait(1).to({graphics:mask_1_graphics_390,x:349.8,y:170.5}).wait(1).to({graphics:mask_1_graphics_391,x:349.8,y:171.7}).wait(1).to({graphics:mask_1_graphics_392,x:349.8,y:172.9}).wait(1).to({graphics:mask_1_graphics_393,x:349.8,y:174.1}).wait(1).to({graphics:mask_1_graphics_394,x:349.8,y:175.3}).wait(1).to({graphics:mask_1_graphics_395,x:349.8,y:176.6}).wait(1).to({graphics:mask_1_graphics_396,x:349.8,y:177.8}).wait(1).to({graphics:mask_1_graphics_397,x:349.8,y:179}).wait(1).to({graphics:mask_1_graphics_398,x:349.8,y:180.2}).wait(1).to({graphics:mask_1_graphics_399,x:349.8,y:181.4}).wait(1).to({graphics:mask_1_graphics_400,x:349.8,y:182.6}).wait(1).to({graphics:mask_1_graphics_401,x:349.8,y:183.8}).wait(1).to({graphics:mask_1_graphics_402,x:349.8,y:185.1}).wait(1).to({graphics:mask_1_graphics_403,x:349.8,y:186.3}).wait(1).to({graphics:mask_1_graphics_404,x:349.8,y:187.5}).wait(1).to({graphics:mask_1_graphics_405,x:349.8,y:188.7}).wait(1).to({graphics:mask_1_graphics_406,x:349.8,y:189.9}).wait(1).to({graphics:mask_1_graphics_407,x:349.8,y:191.1}).wait(1).to({graphics:mask_1_graphics_408,x:349.8,y:192.4}).wait(1).to({graphics:mask_1_graphics_409,x:349.8,y:193.6}).wait(1).to({graphics:mask_1_graphics_410,x:349.8,y:194.8}).wait(1).to({graphics:mask_1_graphics_411,x:349.8,y:196}).wait(1).to({graphics:mask_1_graphics_412,x:349.8,y:197.2}).wait(1).to({graphics:mask_1_graphics_413,x:349.8,y:198.4}).wait(1).to({graphics:mask_1_graphics_414,x:349.8,y:199.6}).wait(1).to({graphics:mask_1_graphics_415,x:349.8,y:200.9}).wait(1).to({graphics:mask_1_graphics_416,x:349.8,y:202.1}).wait(1).to({graphics:mask_1_graphics_417,x:349.8,y:203.3}).wait(1).to({graphics:mask_1_graphics_418,x:349.8,y:204.5}).wait(1).to({graphics:mask_1_graphics_419,x:349.8,y:205.7}).wait(1).to({graphics:mask_1_graphics_420,x:349.8,y:206.9}).wait(1).to({graphics:mask_1_graphics_421,x:349.8,y:208.2}).wait(1).to({graphics:mask_1_graphics_422,x:349.8,y:209.4}).wait(1).to({graphics:mask_1_graphics_423,x:349.8,y:210.6}).wait(1).to({graphics:mask_1_graphics_424,x:349.8,y:211.8}).wait(1).to({graphics:mask_1_graphics_425,x:349.8,y:213}).wait(1).to({graphics:mask_1_graphics_426,x:349.8,y:214.2}).wait(1).to({graphics:mask_1_graphics_427,x:349.8,y:215.4}).wait(1).to({graphics:mask_1_graphics_428,x:349.8,y:216.7}).wait(1).to({graphics:mask_1_graphics_429,x:349.8,y:217.9}).wait(1).to({graphics:mask_1_graphics_430,x:349.8,y:219.1}).wait(1).to({graphics:mask_1_graphics_431,x:349.8,y:220.3}).wait(1).to({graphics:mask_1_graphics_432,x:349.8,y:221.5}).wait(1).to({graphics:mask_1_graphics_433,x:349.8,y:222.7}).wait(1).to({graphics:mask_1_graphics_434,x:349.8,y:223.9}).wait(1).to({graphics:mask_1_graphics_435,x:349.8,y:225.2}).wait(1).to({graphics:mask_1_graphics_436,x:349.8,y:226.4}).wait(1).to({graphics:mask_1_graphics_437,x:349.8,y:227.6}).wait(1).to({graphics:mask_1_graphics_438,x:349.8,y:228.8}).wait(1).to({graphics:mask_1_graphics_439,x:349.8,y:230}).wait(1).to({graphics:mask_1_graphics_440,x:188.8,y:193.2}).wait(191));

	// Layer 14
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(25,1,1).p("AKS6+MAAAAq0QACAkgCAiQgMD2jBC4QjbDSlEADQlFADjzkD");
	this.shape_2.setTransform(284.9,276.6);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(318).to({_off:false},0).wait(313));

	// Layer 12
	this.instance_4 = new lib.Symbol1("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(281.9,182,1,1,0,0,0,283.7,364.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).wait(622));

	// Base
	this.instance_5 = new lib.Symbol2("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(275,275);
	this.instance_5.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(631));

	// Background
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#F59E9E").ss(3,1,1).p("AMvQ5I5dAAMAAAghxIZdAAg");
	this.shape_3.setTransform(275,275,3.373,2.543);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_4.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(631));

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