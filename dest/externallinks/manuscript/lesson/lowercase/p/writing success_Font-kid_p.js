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

	// Layer 10
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(25,0,1).p("Ar7HDQABg/AJg8QAmjyCvi1QDgjpE8AAQE8AADgDpQDZDhAHE7");
	this.shape.setTransform(275.4,319.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(25,1,1).p("AL8AAQAAFJjgDpQjgDok8AAQk8AAjgjoQjfjpAAlJQAAlIDfjpQDgjoE8AAQE8AADgDoQDgDpAAFIg");
	this.shape_1.setTransform(275.4,365.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},98).to({state:[{t:this.shape_1}]},102).wait(5));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_98 = new cjs.Graphics().p("Am8cZQAAoBFqlrQFrlqIAAAQIBAAFqFqQFrFrgBIBg");
	var mask_graphics_99 = new cjs.Graphics().p("Am7bfQAQoAF1lgQF1lfIAAQQIBAQFeF1QFgF2gQIBg");
	var mask_graphics_100 = new cjs.Graphics().p("Am6alQAgn/GAlUQGAlTH/AgQIAAgFTGAQFUGAggIAg");
	var mask_graphics_101 = new cjs.Graphics().p("Am3ZrQAwn+GJlHQGMlHH+AwQH+AvFHGLQFIGLgwH+g");
	var mask_graphics_102 = new cjs.Graphics().p("AmzYyQBAn8GTk8QGWk6H8BAQH9A/E6GUQE7GWg/H8g");
	var mask_graphics_103 = new cjs.Graphics().p("AmuX5QBQn6GdkvQGfktH6BPQH6BPEuGeQEuGfhPH6g");
	var mask_graphics_104 = new cjs.Graphics().p("AmnXAQBfn4GmkhQGokgH3BfQH4BfEhGnQEhGohfH3g");
	var mask_graphics_105 = new cjs.Graphics().p("AmgWHQBvn0GvkUQGxkTH0BuQH1BvETGwQEUGxhvH0g");
	var mask_graphics_106 = new cjs.Graphics().p("AmXVPQB+nwG3kHQG6kGHwB/QHxB+EGG4QEGG5h+Hxg");
	var mask_graphics_107 = new cjs.Graphics().p("AmNUXQCNnsHAj5QHBj3HsCNQHtCOD4HAQD5HBiOHsg");
	var mask_graphics_108 = new cjs.Graphics().p("AmCTgQCdnoHGjrQHJjpHoCdQHoCdDqHHQDrHJidHog");
	var mask_graphics_109 = new cjs.Graphics().p("Al2SqQCsnjHOjdQHQjbHiCsQHjCsDcHOQDcHQisHjg");
	var mask_graphics_110 = new cjs.Graphics().p("AloRzQC7ndHUjOQHWjMHdC6QHeC7DNHVQDOHXi7Hdg");
	var mask_graphics_111 = new cjs.Graphics().p("AlaQ+QDKnXHbjAQHci9HXDJQHXDKC/HbQC/HcjKHYg");
	var mask_graphics_112 = new cjs.Graphics().p("AlKQJQDYnQHhixQHiivHQDYQHRDYCwHhQCwHjjYHQg");
	var mask_graphics_113 = new cjs.Graphics().p("Ak5PVQDnnJHliiQHoigHJDnQHKDmChHmQChHojnHKg");
	var mask_graphics_114 = new cjs.Graphics().p("AknOiQD1nCHqiSQHsiRHCD0QHDD1CRHrQCSHsj1HDg");
	var mask_graphics_115 = new cjs.Graphics().p("AkUNwQEDm7HuiDQHxiBG6ECQG7EDCCHvQCCHxkCG6g");
	var mask_graphics_116 = new cjs.Graphics().p("AkAM+QEPmyH0hzQH0hyGyEQQGzEQByHzQBzH0kQGzg");
	var mask_graphics_117 = new cjs.Graphics().p("AjqMOQEcmqH3hjQH3hjGqEeQGqEdBjH3QBjH3keGqg");
	var mask_graphics_118 = new cjs.Graphics().p("AjULfQEpmhH6hUQH6hTGgErQGhErBUH5QBTH6kqGhg");
	var mask_graphics_119 = new cjs.Graphics().p("Ai9KwQE2mXH8hEQH9hDGXE3QGXE4BEH7QBDH9k3GXg");
	var mask_graphics_120 = new cjs.Graphics().p("AilKDQFDmNH+g1QH+gzGNFEQGOFEAzH9QA0H/lEGNg");
	var mask_graphics_121 = new cjs.Graphics().p("AiMJXQFPmDH/glQIAgjGDFQQGDFQAkH/QAkIAlQGDg");
	var mask_graphics_122 = new cjs.Graphics().p("AhyIsQFbl5IAgUQIBgTF4FbQF4FdAUH/QAUIBlcF4g");
	var mask_graphics_123 = new cjs.Graphics().p("AhXICQFmltIBgFQIBgDFtFnQFtFoAEIAQAEIBlnFtg");
	var mask_graphics_124 = new cjs.Graphics().p("Ag8HZQFylhIAALQIBANFiFyQFiFzgMIAQgMIBlzFig");
	var mask_graphics_125 = new cjs.Graphics().p("AggGyQF9lWIAAbQIAAdFWF9QFWF+gcH/QgbIBl+FWg");
	var mask_graphics_126 = new cjs.Graphics().p("AgDGMQGHlKH/ArQH/AtFKGHQFKGJgrH+QgsH/mIFKg");
	var mask_graphics_127 = new cjs.Graphics().p("AAaFoQGSk+H9A7QH9A8E+GSQE+GSg7H9Qg8H+mSE+g");
	var mask_graphics_128 = new cjs.Graphics().p("AA4FFQGckxH7BKQH7BNExGbQEyGchMH6QhLH8mcExg");
	var mask_graphics_129 = new cjs.Graphics().p("ABXEjQGlkjH5BZQH4BcEkGlQElGlhbH4QhbH5mlEkg");
	var mask_graphics_130 = new cjs.Graphics().p("AB3EDQGukWH1BpQH2BsEXGtQEXGuhrH1QhrH2mtEXg");
	var mask_graphics_131 = new cjs.Graphics().p("ACXDkQG3kIHyB4QHyB8EJG2QEKG2h6HxQh7Hzm2EJg");
	var mask_graphics_132 = new cjs.Graphics().p("AC4DHQG/j7HuCIQHuCLD7G+QD8G/iJHtQiKHum/D8g");
	var mask_graphics_133 = new cjs.Graphics().p("ADaCsQHGjtHqCXQHpCaDtHGQDuHGiYHpQiZHqnGDtg");
	var mask_graphics_134 = new cjs.Graphics().p("AD8CSQHOjfHkCmQHkCqDgHMQDfHOinHkQipHknNDgg");
	var mask_graphics_135 = new cjs.Graphics().p("AEfB5QHUjQHfC2QHfC4DRHTQDRHUi3HfQi3HfnUDRg");
	var mask_graphics_136 = new cjs.Graphics().p("AFDBjQHajCHZDEQHZDHDCHaQDDHbjGHYQjGHZnaDDg");
	var mask_graphics_137 = new cjs.Graphics().p("AFnBNQHgiyHSDTQHTDVCzHgQC0HgjUHSQjVHTngC0g");
	var mask_graphics_138 = new cjs.Graphics().p("AGLA6QHlijHMDhQHMDkCkHlQClHljjHLQjjHNnlCkg");
	var mask_graphics_139 = new cjs.Graphics().p("AGwAoQHqiUHFDvQHEDzCVHpQCWHrjxHEQjxHFnqCVg");
	var mask_graphics_140 = new cjs.Graphics().p("AHVAYQHviFG9D+QG8EACGHuQCGHvj+G8QkAG9nuCGg");
	var mask_graphics_141 = new cjs.Graphics().p("AH6AKQHzh1G1ELQG0ENB3HyQB3HzkNG0QkNG2nyB2g");
	var mask_graphics_142 = new cjs.Graphics().p("AIggBQH2hnGtEYQGrEbBnH2QBoH2kaGsQkbGsn2Bng");
	var mask_graphics_143 = new cjs.Graphics().p("AJGgMQH5hXGkElQGiEpBYH4QBXH6knGiQknGkn5BXg");
	var mask_graphics_144 = new cjs.Graphics().p("AJtgVQH7hIGaEzQGZE1BIH7QBIH8k0GZQk1Gan7BIg");
	var mask_graphics_145 = new cjs.Graphics().p("AKTgcQH+g4GQE/QGPFCA4H9QA4H+lAGPQlBGRn+A3g");
	var mask_graphics_146 = new cjs.Graphics().p("AK6ghQH/goGGFLQGFFOAoH+QAoIAlNGFQlNGGn/Aog");
	var mask_graphics_147 = new cjs.Graphics().p("ALgglQIAgYF8FXQF6FaAZIAQAYIAlZF7QlZF7oAAYg");
	var mask_graphics_148 = new cjs.Graphics().p("AMHgnQIAgIFxFjQFwFmAIIAQAIIAlkFwQllFxoBAIg");
	var mask_graphics_149 = new cjs.Graphics().p("EAMIAmDMAAlgmqQIBAIFlFuQFlFxgIIAQgIIBlvFkQlpFenyAAIgWAAg");
	var mask_graphics_150 = new cjs.Graphics().p("EALhAmCMABzgmoQIAAYFaF5QFYF8gXH/QgYIBl6FZQljFDnXAAQghAAghgBg");
	var mask_graphics_151 = new cjs.Graphics().p("EAK7Al/MAC/gmjQH/AnFOGFQFNGGgoH/QgnH/mFFNQldEqm9AAQg1AAg2gEg");
	var mask_graphics_152 = new cjs.Graphics().p("EAKUAl8MAEMgmcQH+A2FBGPQFBGRg4H9Qg3H+mPFAQlVETmlAAQhJAAhLgIg");
	var mask_graphics_153 = new cjs.Graphics().p("EAJuAl3MAFYgmTQH8BHE1GZQE0GahIH7QhHH8mZE0QlND7mNAAQhcAAhfgNg");
	var mask_graphics_154 = new cjs.Graphics().p("EAJIAlwMAGkgmGQH5BWEoGiQEnGkhXH5QhXH5miEnQlEDll3AAQhuAAhzgUg");
	var mask_graphics_155 = new cjs.Graphics().p("EAIiAlpMAHwgl4QH2BmEbGrQEaGthnH1QhnH3mrEaQk6DPliAAQiBAAiFgbg");
	var mask_graphics_156 = new cjs.Graphics().p("EAH8AlhMAI7gloQHzB1ENG0QENG1h2HzQh3HzmzEMQkwC8lOAAQiSAAiYgkg");
	var mask_graphics_157 = new cjs.Graphics().p("EAHXAlXMAKFglWQHvCGEAG8QD+G9iFHvQiGHvm8D/QkkCok6AAQikAAipgug");
	var mask_graphics_158 = new cjs.Graphics().p("EAGxAlMMALQglAQHqCVDyHEQDxHFiVHqQiVHqnDDxQkZCWkmAAQi2AAi7g5g");
	var mask_graphics_159 = new cjs.Graphics().p("EAGNAlAMAMYgkoQHmCkDkHLQDiHMikHlQikHmnLDjQkLCEkUAAQjHAAjLhFg");
	var mask_graphics_160 = new cjs.Graphics().p("EAFoAkzMANigkPQHgC0DVHSQDUHTizHfQizHhnSDUQj9B0kCAAQjYAAjchSg");
	var mask_graphics_161 = new cjs.Graphics().p("EAFEAklMAOpgjzQHbDCDHHZQDFHZjCHaQjCHbnYDGQjvBkjwAAQjqAAjrhgg");
	var mask_graphics_162 = new cjs.Graphics().p("EAEhAkWMAPwgjUQHUDQC4HfQC3HfjRHUQjRHUneC3QjgBWjeAAQj8AAj5hvg");
	var mask_graphics_163 = new cjs.Graphics().p("EAD+AkGMAQ2gi0QHNDfCpHkQCoHljfHNQjfHNnkCpQjQBIjNAAQkOAAkHh/g");
	var mask_graphics_164 = new cjs.Graphics().p("EADcAj1MAR6giSQHGDuCbHpQCYHpjtHGQjuHHnoCZQjAA8i7AAQkhAAkUiQg");
	var mask_graphics_165 = new cjs.Graphics().p("EAC6AjjMAS+ghtQG/D7CLHuQCJHuj7G+Qj8G/ntCKQivAxiqAAQk0AAkgiig");
	var mask_graphics_166 = new cjs.Graphics().p("EACZAjQMAUBghGQG2EJB8HxQB5HykIG2QkKG3nxB7QieAniXAAQlIAAksi1g");
	var mask_graphics_167 = new cjs.Graphics().p("EAB5Ai8MAVCggeQGuEXBrH1QBrH2kXGtQkXGvn0BrQiMAeiGAAQlcAAk2jJg");
	var mask_graphics_168 = new cjs.Graphics().p("EABZAimIWC/yQGlEkBcH4QBbH5kkGlQkkGln4BcQh4AVh0AAQlxAAlBjeg");
	var mask_graphics_169 = new cjs.Graphics().p("EAA6AiQIXA/FQGcEwBNH7QBKH8kwGbQkxGcn6BMQhmAPhhAAQmHAAlKj0g");
	var mask_graphics_170 = new cjs.Graphics().p("EAAcAh5IX9+XQGSE+A9H9QA7H9k9GSQk+GTn8A7QhRAKhPAAQmeAAlSkLg");
	var mask_graphics_171 = new cjs.Graphics().p("EgABAhhIY49mQGIFJAtH/QArH/lJGIQlKGJn+AsQg9AFg7AAQm2AAlZkjg");
	var mask_graphics_172 = new cjs.Graphics().p("EgAeAhIIZy80QF+FWAdIAQAbIAlVF9QlXF+n/AdQgnACgmAAQnQAAlgk8g");
	var mask_graphics_173 = new cjs.Graphics().p("EgA6AguIar8AQFyFiANIAQAMIBlhFzQliFzoAAMIgiABQnsAAlllWg");
	var mask_graphics_174 = new cjs.Graphics().p("EAMTAmEQoCgElnltIbi7KQFoFtgDIBQgFIBlsFnQlqFln5AAIgKAAg");
	var mask_graphics_175 = new cjs.Graphics().p("EALsAmDQoBgUlbl4IcX6SQFcF4gTIAQgVIBl3FcQllFKndAAIg2gBg");
	var mask_graphics_176 = new cjs.Graphics().p("EALFAmBQoAgklPmDIdK5YQFQGCgiIAQglH/mCFQQleExnDAAQgwAAgxgDg");
	var mask_graphics_177 = new cjs.Graphics().p("EAKfAl9Qn/gzlDmNId84eQFEGNgzH+Qg0H+mNFEQlXEYmqAAQhEAAhFgHg");
	var mask_graphics_178 = new cjs.Graphics().p("EAJ5Al4Qn9hDk3mWIer3iQE4GXhCH8QhFH8mWE4QlPEAmTAAQhXAAhZgMg");
	var mask_graphics_179 = new cjs.Graphics().p("EAJSAlzQn6hTkqmhIfZ2jQErGghSH6QhUH6mgEqQlGDrl9AAQhpAAhugSg");
	var mask_graphics_180 = new cjs.Graphics().p("EAIsAlsQn3hjkdmpMAgFgVlQEeGphiH3QhkH3mpEeQk9DVlnAAQh7AAiBgZg");
	var mask_graphics_181 = new cjs.Graphics().p("EAIGAljQn0hykPmyMAgvgUkQEQGyhxH0Qh0H0mxEQQkzDAlSAAQiOAAiTgig");
	var mask_graphics_182 = new cjs.Graphics().p("EAHhAlaQnwiCkDm6MAhXgTiQEDG6iBHwQiDHwm5EDQknCsk/AAQifAAilgrg");
	var mask_graphics_183 = new cjs.Graphics().p("EAG8AlQQnsiSj1nCMAh9gSfQD1HCiQHsQiSHsnCD0QkbCbkrAAQixAAi2g2g");
	var mask_graphics_184 = new cjs.Graphics().p("EAGXAlEQnnigjnnKMAihgRbQDnHKigHnQihHnnJDmQkPCJkYAAQjCAAjHhCg");
	var mask_graphics_185 = new cjs.Graphics().p("EAFyAk4QnhiwjZnQMAjDgQWQDYHQivHiQiwHinQDYQkBB4kGAAQjUAAjXhOg");
	var mask_graphics_186 = new cjs.Graphics().p("EAFOAkqQnbi/jKnXMAjhgPPQDKHXi9HcQjAHcnWDKQjzBoj0AAQjlAAjnhcg");
	var mask_graphics_187 = new cjs.Graphics().p("EAErAkbQnWjNi7ndMAj/gOJQC7HdjMHWQjOHWndC7QjkBajiAAQj3AAj1hrg");
	var mask_graphics_188 = new cjs.Graphics().p("EAEIAkLQnPjcisniMAkagNAQCsHijbHQQjdHPniCsQjUBMjRAAQkJAAkDh7g");
	var mask_graphics_189 = new cjs.Graphics().p("EADlAj6QnHjqiennMAkzgL4QCdHojpHIQjrHInnCdQjFBAi/AAQkcAAkQiMg");
	var mask_graphics_190 = new cjs.Graphics().p("EADEAjoQnBj4iOnsMAlJgKuQCOHsj3HBQj5HBnsCOQizA0iuAAQkvAAkcieg");
	var mask_graphics_191 = new cjs.Graphics().p("EACiAjWQm4kGh/nxMAlegJkQB+HxkFG5QkHG5nwB+QiiApicAAQlCAAkpivg");
	var mask_graphics_192 = new cjs.Graphics().p("EACCAjCQmwkUhvn0MAlvgIZQBvH0kTGxQkUGwn0BvQiQAgiLAAQlWAAkzjDg");
	var mask_graphics_193 = new cjs.Graphics().p("EABiAitQmnkhhgn4MAl/gHNQBfH3kgGoQkhGon3BfQh+AYh4AAQlsAAk9jYg");
	var mask_graphics_194 = new cjs.Graphics().p("EABDAiXQmekuhQn6MAmMgGCQBPH6ktGfQkuGen6BQQhqARhmAAQmBAAlHjug");
	var mask_graphics_195 = new cjs.Graphics().p("EAAkAiAQmUk7hAn8MAmWgE1QBAH8k6GVQk7GVn8BAQhWALhTAAQmYAAlQkFg");
	var mask_graphics_196 = new cjs.Graphics().p("EAAGAhoQmKlHgwn+MAmfgDpQAwH+lGGLQlIGLn+AwQhCAGg/AAQmwAAlYkcg");
	var mask_graphics_197 = new cjs.Graphics().p("EgAWAhPQmBlTggn/MAmlgCcQAgH/lSGBQlUGAn/AgQgtADgrAAQnJAAlek1g");
	var mask_graphics_198 = new cjs.Graphics().p("EgAyAg2Ql3lfgQoBMAmpgBPQAQIAleF3QlgF1n/AQIguABQnkAAljlOg");
	var mask_graphics_199 = new cjs.Graphics().p("EgBOAgbQlrlrgBoAMAmqgACQABIAlqFrQlrFroAAAIgBAAQoAAAlplpg");
	var mask_graphics_200 = new cjs.Graphics().p("EAL2AmDQoBgPldl1Qlgl1APoBMAmpABLQgPIAl1FgQlnFQnkAAIgrgBg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(98).to({graphics:mask_graphics_98,x:203.1,y:181.7}).wait(1).to({graphics:mask_graphics_99,x:203.1,y:183.6}).wait(1).to({graphics:mask_graphics_100,x:203.1,y:185.5}).wait(1).to({graphics:mask_graphics_101,x:203.1,y:187.4}).wait(1).to({graphics:mask_graphics_102,x:203.1,y:189.3}).wait(1).to({graphics:mask_graphics_103,x:203.1,y:191.2}).wait(1).to({graphics:mask_graphics_104,x:203.2,y:193.1}).wait(1).to({graphics:mask_graphics_105,x:203.2,y:195}).wait(1).to({graphics:mask_graphics_106,x:203.2,y:196.9}).wait(1).to({graphics:mask_graphics_107,x:203.2,y:198.7}).wait(1).to({graphics:mask_graphics_108,x:203.3,y:200.6}).wait(1).to({graphics:mask_graphics_109,x:203.3,y:202.4}).wait(1).to({graphics:mask_graphics_110,x:203.3,y:204.2}).wait(1).to({graphics:mask_graphics_111,x:203.3,y:206}).wait(1).to({graphics:mask_graphics_112,x:203.3,y:207.7}).wait(1).to({graphics:mask_graphics_113,x:203.3,y:209.5}).wait(1).to({graphics:mask_graphics_114,x:203.3,y:211.2}).wait(1).to({graphics:mask_graphics_115,x:203.2,y:212.8}).wait(1).to({graphics:mask_graphics_116,x:203.2,y:214.5}).wait(1).to({graphics:mask_graphics_117,x:203.2,y:216.1}).wait(1).to({graphics:mask_graphics_118,x:203.2,y:217.7}).wait(1).to({graphics:mask_graphics_119,x:203.2,y:219.2}).wait(1).to({graphics:mask_graphics_120,x:203.2,y:220.7}).wait(1).to({graphics:mask_graphics_121,x:203.1,y:222.2}).wait(1).to({graphics:mask_graphics_122,x:203.1,y:223.6}).wait(1).to({graphics:mask_graphics_123,x:203.1,y:225}).wait(1).to({graphics:mask_graphics_124,x:203.1,y:226.4}).wait(1).to({graphics:mask_graphics_125,x:203.2,y:227.7}).wait(1).to({graphics:mask_graphics_126,x:203.2,y:228.9}).wait(1).to({graphics:mask_graphics_127,x:203.2,y:230.2}).wait(1).to({graphics:mask_graphics_128,x:203.2,y:231.3}).wait(1).to({graphics:mask_graphics_129,x:203.2,y:232.4}).wait(1).to({graphics:mask_graphics_130,x:203.3,y:233.5}).wait(1).to({graphics:mask_graphics_131,x:203.3,y:234.5}).wait(1).to({graphics:mask_graphics_132,x:203.3,y:235.5}).wait(1).to({graphics:mask_graphics_133,x:203.3,y:236.4}).wait(1).to({graphics:mask_graphics_134,x:203.4,y:237.3}).wait(1).to({graphics:mask_graphics_135,x:203.4,y:238.1}).wait(1).to({graphics:mask_graphics_136,x:203.4,y:238.9}).wait(1).to({graphics:mask_graphics_137,x:203.4,y:239.6}).wait(1).to({graphics:mask_graphics_138,x:203.4,y:240.2}).wait(1).to({graphics:mask_graphics_139,x:203.4,y:240.8}).wait(1).to({graphics:mask_graphics_140,x:203.3,y:241.3}).wait(1).to({graphics:mask_graphics_141,x:203.3,y:241.8}).wait(1).to({graphics:mask_graphics_142,x:203.3,y:242.2}).wait(1).to({graphics:mask_graphics_143,x:203.3,y:242.6}).wait(1).to({graphics:mask_graphics_144,x:203.3,y:242.9}).wait(1).to({graphics:mask_graphics_145,x:203.2,y:243.1}).wait(1).to({graphics:mask_graphics_146,x:203.2,y:243.3}).wait(1).to({graphics:mask_graphics_147,x:203.2,y:243.4}).wait(1).to({graphics:mask_graphics_148,x:203.2,y:243.5}).wait(1).to({graphics:mask_graphics_149,x:203.2,y:243.5}).wait(1).to({graphics:mask_graphics_150,x:203.2,y:243.5}).wait(1).to({graphics:mask_graphics_151,x:203.2,y:243.5}).wait(1).to({graphics:mask_graphics_152,x:203.3,y:243.6}).wait(1).to({graphics:mask_graphics_153,x:203.3,y:243.6}).wait(1).to({graphics:mask_graphics_154,x:203.3,y:243.6}).wait(1).to({graphics:mask_graphics_155,x:203.3,y:243.6}).wait(1).to({graphics:mask_graphics_156,x:203.4,y:243.7}).wait(1).to({graphics:mask_graphics_157,x:203.4,y:243.7}).wait(1).to({graphics:mask_graphics_158,x:203.4,y:243.7}).wait(1).to({graphics:mask_graphics_159,x:203.4,y:243.7}).wait(1).to({graphics:mask_graphics_160,x:203.4,y:243.7}).wait(1).to({graphics:mask_graphics_161,x:203.4,y:243.7}).wait(1).to({graphics:mask_graphics_162,x:203.4,y:243.7}).wait(1).to({graphics:mask_graphics_163,x:203.4,y:243.7}).wait(1).to({graphics:mask_graphics_164,x:203.4,y:243.7}).wait(1).to({graphics:mask_graphics_165,x:203.4,y:243.7}).wait(1).to({graphics:mask_graphics_166,x:203.4,y:243.7}).wait(1).to({graphics:mask_graphics_167,x:203.4,y:243.7}).wait(1).to({graphics:mask_graphics_168,x:203.4,y:243.6}).wait(1).to({graphics:mask_graphics_169,x:203.3,y:243.6}).wait(1).to({graphics:mask_graphics_170,x:203.3,y:243.6}).wait(1).to({graphics:mask_graphics_171,x:203.3,y:243.6}).wait(1).to({graphics:mask_graphics_172,x:203.3,y:243.6}).wait(1).to({graphics:mask_graphics_173,x:203.3,y:243.6}).wait(1).to({graphics:mask_graphics_174,x:203.3,y:243.6}).wait(1).to({graphics:mask_graphics_175,x:203.3,y:243.6}).wait(1).to({graphics:mask_graphics_176,x:203.3,y:243.6}).wait(1).to({graphics:mask_graphics_177,x:203.3,y:243.6}).wait(1).to({graphics:mask_graphics_178,x:203.3,y:243.6}).wait(1).to({graphics:mask_graphics_179,x:203.4,y:243.7}).wait(1).to({graphics:mask_graphics_180,x:203.4,y:243.7}).wait(1).to({graphics:mask_graphics_181,x:203.4,y:243.7}).wait(1).to({graphics:mask_graphics_182,x:203.4,y:243.7}).wait(1).to({graphics:mask_graphics_183,x:203.4,y:243.8}).wait(1).to({graphics:mask_graphics_184,x:203.4,y:243.8}).wait(1).to({graphics:mask_graphics_185,x:203.4,y:243.8}).wait(1).to({graphics:mask_graphics_186,x:203.5,y:243.8}).wait(1).to({graphics:mask_graphics_187,x:203.4,y:243.8}).wait(1).to({graphics:mask_graphics_188,x:203.4,y:243.8}).wait(1).to({graphics:mask_graphics_189,x:203.4,y:243.8}).wait(1).to({graphics:mask_graphics_190,x:203.4,y:243.8}).wait(1).to({graphics:mask_graphics_191,x:203.4,y:243.7}).wait(1).to({graphics:mask_graphics_192,x:203.4,y:243.7}).wait(1).to({graphics:mask_graphics_193,x:203.3,y:243.7}).wait(1).to({graphics:mask_graphics_194,x:203.3,y:243.7}).wait(1).to({graphics:mask_graphics_195,x:203.3,y:243.7}).wait(1).to({graphics:mask_graphics_196,x:203.3,y:243.6}).wait(1).to({graphics:mask_graphics_197,x:203.3,y:243.6}).wait(1).to({graphics:mask_graphics_198,x:203.2,y:243.6}).wait(1).to({graphics:mask_graphics_199,x:203.2,y:243.6}).wait(1).to({graphics:mask_graphics_200,x:203.2,y:243.6}).wait(5));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(25,1,1).p("AGqngQABACAAADAG2mUQADAjABAlQAAAKAAAKQAAFIjgDpQjfDok8AAQg+AAg6gI");
	this.shape_2.setTransform(307.6,397.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(25,0,1).p("ALwEuIALBIAr4HDQABg/AJg8QAmjyCvi1QDgjpE8AAQE8AADgDpQCkCqAsDe");
	this.shape_3.setTransform(275.1,319.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(25,1,1).p("ALsinQAQBRAABWQAAFJjgDpQjgDok8AAQg9AAg6gIQjwgli1i7QjfjpAAlJQAAlIDfjpQDgjoE8AAQE8AADgDoQClCrArDfg");
	this.shape_4.setTransform(275.4,365.8);

	var maskedShapeInstanceList = [this.shape_2,this.shape_3,this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},98).to({state:[{t:this.shape_4}]},50).wait(57));

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("EgBQAgbQlrlrAAoBMAmrAAAQAAIBlqFrQlsFqoAAAQoBAAlplqg");
	var mask_1_graphics_1 = new cjs.Graphics().p("EALzAmEQoBgQldl2Qlfl2AQoAMAmpABPQgQIAl1FfQlnFPnjAAIgtgBg");
	var mask_1_graphics_2 = new cjs.Graphics().p("EALMAmCQoAghlRmAQlTmCAhn/MAmlACeQggIAmBFTQlgE0nHAAQgtAAgtgDg");
	var mask_1_graphics_3 = new cjs.Graphics().p("EAKmAl/Qn+gylFmLQlGmMAxn+MAmfADuQgxH+mMFGQlYEbmuAAQhBAAhDgGg");
	var mask_1_graphics_4 = new cjs.Graphics().p("EAKBAl6Qn9hCk4mVQk5mWBBn9MAmXAE9QhCH8mVE6QlRECmVAAQhVAAhYgLg");
	var mask_1_graphics_5 = new cjs.Graphics().p("EAJdAl0Qn7hSkqmfQktmgBSn6MAmLAGLQhSH6mfEtQlIDrl+AAQhoAAhsgSg");
	var mask_1_graphics_6 = new cjs.Graphics().p("EAI5AltQn4hikdmpQkfmpBin3MAl9AHZQhiH3mpEfQk9DVloAAQh7AAiAgZg");
	var mask_1_graphics_7 = new cjs.Graphics().p("EAIWAllQn0hzkPmxQkRmzBynzMAlsAImQhyH0myERQkyDAlTAAQiNAAiUghg");
	var mask_1_graphics_8 = new cjs.Graphics().p("EAH0AlbQnwiCkBm6QkDm7CCnwMAlZAJ0QiCHwm6EDQknCrk+AAQigAAimgrg");
	var mask_1_graphics_9 = new cjs.Graphics().p("EAHTAlQQnqiSj0nCQj1nDCSnrMAlEALAQiSHrnCD1QkbCZkqAAQiyAAi4g3g");
	var mask_1_graphics_10 = new cjs.Graphics().p("EAG0AlEQnmiijmnJQjmnLCinmMAksAMMQiiHmnJDmQkOCHkWAAQjFAAjIhDg");
	var mask_1_graphics_11 = new cjs.Graphics().p("EAGVAk3QnhixjXnRQjXnSCxnhMAkSANXQixHhnRDYQj/B1kEAAQjWAAjZhQg");
	var mask_1_graphics_12 = new cjs.Graphics().p("EAF3AkpQnbjBjHnXQjJnZDBnbMAj1AOhQjAHbnYDJQjxBljxAAQjoAAjpheg");
	var mask_1_graphics_13 = new cjs.Graphics().p("EAFaAkZQnUjQi5ndQi5nfDQnVMAjWAPqQjPHVneC5QjhBXjfAAQj7AAj4hug");
	var mask_1_graphics_14 = new cjs.Graphics().p("EAE+AkJQnNjfipnjQiqnlDfnOMAi1AQzQjeHNnkCqQjRBJjNAAQkNAAkHh+g");
	var mask_1_graphics_15 = new cjs.Graphics().p("EAEkAj3QnGjtianpQianqDtnGMAiSAR5QjtHGnpCbQjAA8i6AAQkiAAkTiQg");
	var mask_1_graphics_16 = new cjs.Graphics().p("EAEKAjkQm+j8iKntQiKnuD8m/MAhsAS/Qj8G/ntCKQivAxioAAQk1AAkhijg");
	var mask_1_graphics_17 = new cjs.Graphics().p("EADyAjQQm2kKh6nxQh6nyEKm3MAhEAUEQkKG2nyB7QicAmiWAAQlJAAkti3g");
	var mask_1_graphics_18 = new cjs.Graphics().p("EADbAi7QmtkXhqn1Qhqn3EXmtMAgaAVGQkYGun1BrQiJAciEAAQleAAk4jLg");
	var mask_1_graphics_19 = new cjs.Graphics().p("EADFAilQmkklhan4Qhan5EmmlIftWIQklGln5BaQh2AVhxAAQl0AAlCjhg");
	var mask_1_graphics_20 = new cjs.Graphics().p("EACwAiOQmakyhJn7QhKn8EymbIe/XJQkyGbn7BKQhiAOheAAQmLAAlMj4g");
	var mask_1_graphics_21 = new cjs.Graphics().p("EACdAh2QmQk/g5n9Qg6n+FAmRIeOYHQk/GRn+A6QhMAJhKAAQmkAAlUkQg");
	var mask_1_graphics_22 = new cjs.Graphics().p("EACLAhdQmGlMgpn+QgpoAFNmGIdbZEQlMGGn/AqQg3AFg1AAQm9AAlckpg");
	var mask_1_graphics_23 = new cjs.Graphics().p("EAB6AhDQl6lZgZn/QgZoBFYl7IcoaAQlYF8oAAZQghABggAAQnYAAljlCg");
	var mask_1_graphics_24 = new cjs.Graphics().p("EABrAgoQlwllgIoAQgIoBFjlwIbza6QllFwoAAJIgVAAQn0AAloldg");
	var mask_1_graphics_25 = new cjs.Graphics().p("EAPCAmFQoBgJlklwQlklwAIoAQAIoCFwlkIa6byQlpFdnzAAIgVAAg");
	var mask_1_graphics_26 = new cjs.Graphics().p("EAOpAmEQoBgalYl7QlYl8AZn/QAZoBF6lYIaAcoQljFCnWAAQghAAghgBg");
	var mask_1_graphics_27 = new cjs.Graphics().p("EAOQAmBQn/gqlMmGQlMmGApn/QApn/GGlNIZEddQlcEpm8AAQg2AAg3gFg");
	var mask_1_graphics_28 = new cjs.Graphics().p("EAN4Al9Qn+g6k/mRQk/mRA5n8QA6n/GPk/IYIePQlUEQmjAAQhKAAhNgJg");
	var mask_1_graphics_29 = new cjs.Graphics().p("EANgAl4Qn8hLkymaQkymbBKn7QBKn8GakzIXIfAQlMD4mKAAQheAAhigOg");
	var mask_1_graphics_30 = new cjs.Graphics().p("EANJAlxQn5hbklmkQkkmkBZn4QBan6GkklIWIfuQlCDhl0AAQhxAAh2gVg");
	var mask_1_graphics_31 = new cjs.Graphics().p("EAMyAlqQn1hskYmtQkXmuBqn1QBrn2GskXMAVHAgaQk4DLleAAQiEAAiKgcg");
	var mask_1_graphics_32 = new cjs.Graphics().p("EAMcAlhQnyh8kJm2QkJm2B6nxQB5nzG2kKMAUEAhFQktC3lJAAQiWAAidgmg");
	var mask_1_graphics_33 = new cjs.Graphics().p("EAMHAlWQnuiLj7m+Qj7m/CKntQCJnuG/j8MAS/AhtQkhCjk1AAQioAAivgxg");
	var mask_1_graphics_34 = new cjs.Graphics().p("EALyAlLQnpibjsnGQjtnHCanoQCZnqHGjtMAR5AiTQkUCQkhAAQi7AAjAg8g");
	var mask_1_graphics_35 = new cjs.Graphics().p("EALeAk+QnjiqjfnOQjdnOCpnjQCpnkHNjfMAQyAi2QkGB/kOAAQjNAAjRhJg");
	var mask_1_graphics_36 = new cjs.Graphics().p("EALLAkwQnei5jPnVQjPnVC4ndQC5nfHUjQMAPqAjYQj4Buj7AAQjfAAjhhXg");
	var mask_1_graphics_37 = new cjs.Graphics().p("EAK5AkiQnYjKjAnaQjAncDHnXQDInZHbjAMAOhAj3QjpBejpAAQjxAAjwhlg");
	var mask_1_graphics_38 = new cjs.Graphics().p("EAKnAkSQnRjZixngQiwniDVnQQDYnSHhixMANWAkTQjZBQjWAAQkEAAj/h1g");
	var mask_1_graphics_39 = new cjs.Graphics().p("EAKWAkAQnKjniinlQignnDknKQDmnLHnihMAMMAktQjJBDjFAAQkWAAkNiHg");
	var mask_1_graphics_40 = new cjs.Graphics().p("EAKFAjuQnCj1iSnrQiRnsDznCQD1nDHriSMALBAlFQi4A3iyAAQkqAAkbiZg");
	var mask_1_graphics_41 = new cjs.Graphics().p("EAJ2AjbQm6kEiCnvQiBnwEBm6QEDm8HwiCMAJ0AlbQimArihAAQk9AAknirg");
	var mask_1_graphics_42 = new cjs.Graphics().p("EAJnAjGQmykRhxn0Qhyn0EQmxQERmzH0hxMAImAltQiTAhiOAAQlTAAkyjAg");
	var mask_1_graphics_43 = new cjs.Graphics().p("EAJZAixQmokghin2Qhhn4EdmoQEfmqH3hhMAHZAl9QiAAZh8AAQloAAk9jVg");
	var mask_1_graphics_44 = new cjs.Graphics().p("EAJMAibQmfkuhSn5QhSn6EsmgQEsmgH6hRMAGLAmLQhsAShpAAQl+AAlHjrg");
	var mask_1_graphics_45 = new cjs.Graphics().p("EAJAAiDQmVk6hCn8QhBn9E4mVQE6mXH8hAMAE9AmWQhYALhVAAQmWAAlQkCg");
	var mask_1_graphics_46 = new cjs.Graphics().p("EAI1AhqQmLlHgyn9Qgxn/FGmLQFGmMH+gwMADuAmfQhDAGhBAAQmuAAlYkbg");
	var mask_1_graphics_47 = new cjs.Graphics().p("EAIqAhRQmAlUghn/QghoAFSmAQFTmBIAggMACeAmlQgtADgsAAQnIAAlgk0g");
	var mask_1_graphics_48 = new cjs.Graphics().p("EAIhAg2Ql2lfgQoAQgRoBFfl1QFfl2IAgQMABPAmpIgtABQnkAAlllPg");
	var mask_1_graphics_49 = new cjs.Graphics().p("EAIYAgbQlqlsAAoAQAAoBFqlqQFrlqIBAAMAAAAmrQoBAAlrlqg");
	var mask_1_graphics_50 = new cjs.Graphics().p("AHpf/Qlfl3ARoAQAQoBF2leQF2leIAAQMgBPAmpQoAgQlfl1g");
	var mask_1_graphics_51 = new cjs.Graphics().p("AG6fiQlSmCAhn/QAhoAGAlSQGClSH/AhMgCeAmlQoAgglTmBg");
	var mask_1_graphics_52 = new cjs.Graphics().p("AGMfFQlFmMAxn+QAxn+GMlGQGMlFH+AxMgDuAmfQn+gxlHmMg");
	var mask_1_graphics_53 = new cjs.Graphics().p("AFgepQk5mXBCn8QBCn9GVk5QGWk4H9BBMgE9AmXQn8hCk6mVg");
	var mask_1_graphics_54 = new cjs.Graphics().p("AE1eMQksmhBSn5QBSn7GfkrQGgksH6BSMgGLAmLQn6hSksmfg");
	var mask_1_graphics_55 = new cjs.Graphics().p("AEKduQkdmqBhn2QBin4GpkeQGqkeH3BiMgHaAl9Qn3hikfmpg");
	var mask_1_graphics_56 = new cjs.Graphics().p("ADhdRQkPmzBxnzQByn0GykQQGykQH0BxMgInAltQnzhykSmyg");
	var mask_1_graphics_57 = new cjs.Graphics().p("AC5c0QkBm7CBnwQCCnwG6kCQG8kCHvCBMgJ0AlaQnviCkEm6g");
	var mask_1_graphics_58 = new cjs.Graphics().p("ACTcXQjznECRnrQCSnrHCj0QHDj0HrCRMgLAAlFQnriSj1nCg");
	var mask_1_graphics_59 = new cjs.Graphics().p("ABtb6QjknMChnlQChnnHKjmQHLjlHmChMgMMAktQnmiijnnJg");
	var mask_1_graphics_60 = new cjs.Graphics().p("ABKbcQjWnSCwngQCxniHRjXQHSjWHhCwMgNXAkTQnhixjXnRg");
	var mask_1_graphics_61 = new cjs.Graphics().p("AAna/QjGnZC/naQDAncHYjHQHZjIHbDAMgOhAj2QnbjAjJnYg");
	var mask_1_graphics_62 = new cjs.Graphics().p("AAGaiQi3nfDOnUQDQnVHdi5QHfi4HVDPMgPqAjXQnVjPi5neg");
	var mask_1_graphics_63 = new cjs.Graphics().p("AgZaFQionlDdnNQDenOHkipQHkipHODeMgQyAi2QnOjeipnkg");
	var mask_1_graphics_64 = new cjs.Graphics().p("Ag3ZoQiZnpDsnGQDtnHHoiaQHqiZHHDsMgR5AiTQnHjtiZnpg");
	var mask_1_graphics_65 = new cjs.Graphics().p("AhUZMQiJnvD6m+QD8m/HtiKQHuiJG/D7MgS/AhtQm+j8iKntg");
	var mask_1_graphics_66 = new cjs.Graphics().p("AhvYvQh5nyEIm2QEKm3Hxh6QHzh5G2EJMgUDAhFQm2kKh6nyg");
	var mask_1_graphics_67 = new cjs.Graphics().p("AiJYTQhpn2EWmtQEYmuH1hqQH2hpGuEWMgVHAgbQmskYhrn1g");
	var mask_1_graphics_68 = new cjs.Graphics().p("AihX3QhZn5EkmkQEmmlH4haQH5haGkEmI2IfuQmjklhbn5g");
	var mask_1_graphics_69 = new cjs.Graphics().p("Ai3XcQhJn8ExmbQEzmbH7hJQH8hKGaEyI3IfAQmakyhKn7g");
	var mask_1_graphics_70 = new cjs.Graphics().p("AjMXAQg4n+E+mQQFAmRH8g5QH+g6GRFAI4HePQmQk/g6n+g");
	var mask_1_graphics_71 = new cjs.Graphics().p("AjfWlQgon/FLmGQFMmHH+gpQIAgpGGFNI5EdcQmFlMgqn/g");
	var mask_1_graphics_72 = new cjs.Graphics().p("AjxWLQgXoBFXl7QFZl7H/gZQIBgZF7FZI6AcoQl6lYgaoAg");
	var mask_1_graphics_73 = new cjs.Graphics().p("AkAVxQgIoBFklwQFklxIAgIQICgIFwFkI66bzQlvllgJoAg");
	var mask_1_graphics_74 = new cjs.Graphics().p("AkOVXQAJoBFvlkQFwllIAAIQIBAIFlFxI7ya6QlklwAIoBg");
	var mask_1_graphics_75 = new cjs.Graphics().p("AkbU+QAaoBF6lYQF8lZH/AZQIBAZFYF7I8oaAQlYl7AYoAg");
	var mask_1_graphics_76 = new cjs.Graphics().p("AklUlQAqn/GFlMQGGlNH/ApQH/ApFNGHI9cZEQlNmGApn/g");
	var mask_1_graphics_77 = new cjs.Graphics().p("AkuUNQA6n+GQk/QGRlAH8A5QH/A6E/GQI+OYIQlAmRA5n9g");
	var mask_1_graphics_78 = new cjs.Graphics().p("Ak1T1QBLn8GZkyQGbkzH7BKQH8BKEyGbI+/XIQkymbBJn7g");
	var mask_1_graphics_79 = new cjs.Graphics().p("Ak6TeQBbn5GjklQGkklH4BZQH6BaElGlI/tWIQkmmkBan5g");
	var mask_1_graphics_80 = new cjs.Graphics().p("Ak+THQBrn1GskYQGukYH1BqQH2BrEYGtMggaAVHQkXmuBpn2g");
	var mask_1_graphics_81 = new cjs.Graphics().p("AlASxQB8nyG0kJQG3kKHxB6QHzB6EKG2MghEAUEQkKm3B5nyg");
	var mask_1_graphics_82 = new cjs.Graphics().p("AlAScQCMnuG9j7QG/j8HtCKQHuCKD8G/MghsAS/Qj8m/CJnug");
	var mask_1_graphics_83 = new cjs.Graphics().p("Ak+SHQCbnpHFjsQHHjuHoCaQHqCaDtHGMgiSAR5QjtnGCZnqg");
	var mask_1_graphics_84 = new cjs.Graphics().p("Ak6RzQCqnjHNjfQHOjeHjCpQHlCqDeHNMgi1AQyQjfnNCpnlg");
	var mask_1_graphics_85 = new cjs.Graphics().p("Ak1RgQC6neHTjPQHVjQHeC5QHfC5DPHUMgjWAPqQjQnUC4nfg");
	var mask_1_graphics_86 = new cjs.Graphics().p("AkuROQDKnYHZjAQHcjBHXDIQHZDIDAHbMgj2AOhQjAnbDHnYg");
	var mask_1_graphics_87 = new cjs.Graphics().p("AklQ8QDYnRHgixQHhixHRDWQHSDYCxHhMgkSANWQixngDWnSg");
	var mask_1_graphics_88 = new cjs.Graphics().p("AkaQrQDnnKHliiQHnihHJDlQHLDmCiHnMgktAMMQihnnDlnKg");
	var mask_1_graphics_89 = new cjs.Graphics().p("AkOQaQD2nCHqiSQHsiSHCD0QHDD1CSHrMglEALBQiSnsDznDg");
	var mask_1_graphics_90 = new cjs.Graphics().p("Aj/QLQECm6HwiCQHwiCG6ECQG7EDCCHwMglZAJ0QiCnwECm7g");
	var mask_1_graphics_91 = new cjs.Graphics().p("AjvP8QEQmyH0hxQH0hzGxERQGzERByH0MgltAImQhynzERmzg");
	var mask_1_graphics_92 = new cjs.Graphics().p("AjePuQEfmoH2hiQH4hiGoEeQGqEfBiH3Mgl9AHZQhin3Eemqg");
	var mask_1_graphics_93 = new cjs.Graphics().p("AjLPhQEsmfH6hSQH6hSGfEsQGhEsBRH6MgmKAGLQhSn6Ermgg");
	var mask_1_graphics_94 = new cjs.Graphics().p("Ai2PVQE5mVH8hCQH9hBGVE4QGXE6BBH8MgmWAE9QhBn9E4mWg");
	var mask_1_graphics_95 = new cjs.Graphics().p("AifPKQFGmLH9gyQH/gxGLFGQGMFGAyH+MgmfADuQgyn+FGmMg");
	var mask_1_graphics_96 = new cjs.Graphics().p("AiHO/QFSmAH/ghQIAghGBFSQGBFTAhIAMgmlACeQghn/FSmCg");
	var mask_1_graphics_97 = new cjs.Graphics().p("AhtO2QFel2IAgQQIBgRF1FfQF3FfAQIAMgmpABPQgQoAFel2g");
	var mask_1_graphics_98 = new cjs.Graphics().p("Am8cZQAAoBFqlrQFrlqIAAAQIBAAFqFqQFrFrgBIBg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:203.2,y:243.7}).wait(1).to({graphics:mask_1_graphics_1,x:203.1,y:243.7}).wait(1).to({graphics:mask_1_graphics_2,x:203,y:243.7}).wait(1).to({graphics:mask_1_graphics_3,x:202.9,y:243.7}).wait(1).to({graphics:mask_1_graphics_4,x:202.7,y:243.7}).wait(1).to({graphics:mask_1_graphics_5,x:202.4,y:243.8}).wait(1).to({graphics:mask_1_graphics_6,x:202,y:243.8}).wait(1).to({graphics:mask_1_graphics_7,x:201.6,y:243.8}).wait(1).to({graphics:mask_1_graphics_8,x:201.1,y:243.8}).wait(1).to({graphics:mask_1_graphics_9,x:200.6,y:243.9}).wait(1).to({graphics:mask_1_graphics_10,x:200,y:243.9}).wait(1).to({graphics:mask_1_graphics_11,x:199.3,y:243.9}).wait(1).to({graphics:mask_1_graphics_12,x:198.6,y:243.9}).wait(1).to({graphics:mask_1_graphics_13,x:197.8,y:243.9}).wait(1).to({graphics:mask_1_graphics_14,x:197,y:243.9}).wait(1).to({graphics:mask_1_graphics_15,x:196.1,y:243.9}).wait(1).to({graphics:mask_1_graphics_16,x:195.2,y:243.9}).wait(1).to({graphics:mask_1_graphics_17,x:194.2,y:243.9}).wait(1).to({graphics:mask_1_graphics_18,x:193.1,y:243.8}).wait(1).to({graphics:mask_1_graphics_19,x:192,y:243.8}).wait(1).to({graphics:mask_1_graphics_20,x:190.8,y:243.8}).wait(1).to({graphics:mask_1_graphics_21,x:189.6,y:243.8}).wait(1).to({graphics:mask_1_graphics_22,x:188.3,y:243.8}).wait(1).to({graphics:mask_1_graphics_23,x:187,y:243.7}).wait(1).to({graphics:mask_1_graphics_24,x:185.7,y:243.7}).wait(1).to({graphics:mask_1_graphics_25,x:184.3,y:243.7}).wait(1).to({graphics:mask_1_graphics_26,x:182.8,y:243.7}).wait(1).to({graphics:mask_1_graphics_27,x:181.3,y:243.8}).wait(1).to({graphics:mask_1_graphics_28,x:179.8,y:243.8}).wait(1).to({graphics:mask_1_graphics_29,x:178.2,y:243.8}).wait(1).to({graphics:mask_1_graphics_30,x:176.6,y:243.8}).wait(1).to({graphics:mask_1_graphics_31,x:175,y:243.8}).wait(1).to({graphics:mask_1_graphics_32,x:173.3,y:243.9}).wait(1).to({graphics:mask_1_graphics_33,x:171.6,y:243.9}).wait(1).to({graphics:mask_1_graphics_34,x:169.8,y:243.9}).wait(1).to({graphics:mask_1_graphics_35,x:168,y:243.9}).wait(1).to({graphics:mask_1_graphics_36,x:166.2,y:243.9}).wait(1).to({graphics:mask_1_graphics_37,x:164.4,y:243.9}).wait(1).to({graphics:mask_1_graphics_38,x:162.5,y:243.9}).wait(1).to({graphics:mask_1_graphics_39,x:160.7,y:243.9}).wait(1).to({graphics:mask_1_graphics_40,x:158.8,y:243.9}).wait(1).to({graphics:mask_1_graphics_41,x:156.9,y:243.8}).wait(1).to({graphics:mask_1_graphics_42,x:154.9,y:243.8}).wait(1).to({graphics:mask_1_graphics_43,x:153,y:243.8}).wait(1).to({graphics:mask_1_graphics_44,x:151,y:243.8}).wait(1).to({graphics:mask_1_graphics_45,x:149.1,y:243.7}).wait(1).to({graphics:mask_1_graphics_46,x:147.1,y:243.7}).wait(1).to({graphics:mask_1_graphics_47,x:145.1,y:243.7}).wait(1).to({graphics:mask_1_graphics_48,x:143.1,y:243.7}).wait(1).to({graphics:mask_1_graphics_49,x:141.2,y:243.7}).wait(1).to({graphics:mask_1_graphics_50,x:143.1,y:243.6}).wait(1).to({graphics:mask_1_graphics_51,x:145.1,y:243.5}).wait(1).to({graphics:mask_1_graphics_52,x:147.1,y:243.4}).wait(1).to({graphics:mask_1_graphics_53,x:149.1,y:243.2}).wait(1).to({graphics:mask_1_graphics_54,x:151,y:242.9}).wait(1).to({graphics:mask_1_graphics_55,x:153,y:242.5}).wait(1).to({graphics:mask_1_graphics_56,x:154.9,y:242.1}).wait(1).to({graphics:mask_1_graphics_57,x:156.8,y:241.6}).wait(1).to({graphics:mask_1_graphics_58,x:158.7,y:241.1}).wait(1).to({graphics:mask_1_graphics_59,x:160.6,y:240.5}).wait(1).to({graphics:mask_1_graphics_60,x:162.5,y:239.8}).wait(1).to({graphics:mask_1_graphics_61,x:164.4,y:239.1}).wait(1).to({graphics:mask_1_graphics_62,x:166.2,y:238.3}).wait(1).to({graphics:mask_1_graphics_63,x:168,y:237.5}).wait(1).to({graphics:mask_1_graphics_64,x:169.8,y:236.6}).wait(1).to({graphics:mask_1_graphics_65,x:171.5,y:235.7}).wait(1).to({graphics:mask_1_graphics_66,x:173.2,y:234.7}).wait(1).to({graphics:mask_1_graphics_67,x:174.9,y:233.6}).wait(1).to({graphics:mask_1_graphics_68,x:176.5,y:232.5}).wait(1).to({graphics:mask_1_graphics_69,x:178.1,y:231.3}).wait(1).to({graphics:mask_1_graphics_70,x:179.7,y:230.1}).wait(1).to({graphics:mask_1_graphics_71,x:181.2,y:228.8}).wait(1).to({graphics:mask_1_graphics_72,x:182.7,y:227.5}).wait(1).to({graphics:mask_1_graphics_73,x:184.2,y:226.2}).wait(1).to({graphics:mask_1_graphics_74,x:185.6,y:224.8}).wait(1).to({graphics:mask_1_graphics_75,x:186.9,y:223.3}).wait(1).to({graphics:mask_1_graphics_76,x:188.3,y:221.8}).wait(1).to({graphics:mask_1_graphics_77,x:189.5,y:220.3}).wait(1).to({graphics:mask_1_graphics_78,x:190.7,y:218.7}).wait(1).to({graphics:mask_1_graphics_79,x:191.9,y:217.1}).wait(1).to({graphics:mask_1_graphics_80,x:193,y:215.5}).wait(1).to({graphics:mask_1_graphics_81,x:194.1,y:213.8}).wait(1).to({graphics:mask_1_graphics_82,x:195.1,y:212.1}).wait(1).to({graphics:mask_1_graphics_83,x:196,y:210.3}).wait(1).to({graphics:mask_1_graphics_84,x:196.9,y:208.5}).wait(1).to({graphics:mask_1_graphics_85,x:197.7,y:206.7}).wait(1).to({graphics:mask_1_graphics_86,x:198.5,y:204.9}).wait(1).to({graphics:mask_1_graphics_87,x:199.2,y:203}).wait(1).to({graphics:mask_1_graphics_88,x:199.9,y:201.2}).wait(1).to({graphics:mask_1_graphics_89,x:200.5,y:199.3}).wait(1).to({graphics:mask_1_graphics_90,x:201,y:197.4}).wait(1).to({graphics:mask_1_graphics_91,x:201.5,y:195.4}).wait(1).to({graphics:mask_1_graphics_92,x:201.9,y:193.5}).wait(1).to({graphics:mask_1_graphics_93,x:202.2,y:191.5}).wait(1).to({graphics:mask_1_graphics_94,x:202.5,y:189.6}).wait(1).to({graphics:mask_1_graphics_95,x:202.8,y:187.6}).wait(1).to({graphics:mask_1_graphics_96,x:202.9,y:185.6}).wait(1).to({graphics:mask_1_graphics_97,x:203,y:183.6}).wait(1).to({graphics:mask_1_graphics_98,x:203.1,y:181.7}).wait(107));

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(25,0,1).p("ArrHDQABg/AKg8QAmjyCvi1QDgjpE7AAQE9AADgDpQCKCOA1C0");
	this.shape_5.setTransform(273.7,319.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(25,0,1).p("Ar7HDQABg/AJg8QAmjyCvi1QDgjpE8AAQE8AADgDpQDZDhAHE7");
	this.shape_6.setTransform(275.4,319.2);

	var maskedShapeInstanceList = [this.shape_5,this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_6}]},7).wait(198));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(186.5,363.6,174.6,13.3);


(lib.p = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AugaCMAAAg0FQAAimCmAAQCqAAAACmIAAAjQD6jAFJAAQGGAAETEXQEVEZAAGRQAAGUkVEbQkTEamGAAQlDAAkAjKIAAblQAACliuAAQiiAAAAiogApQwLIAAGNQBFC3CeBzQCdByDDgBQD9AAC1i4QC1i7AAkJQAAkGi1i3Qi1i3j9ABQlagBjpHIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.9,-183.4,185.9,366.8);


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
	this.instance.setTransform(-0.3,-227.7,1,1,0,0,0,0.1,-4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:68.3},149).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AAAAwIAAhg");
	this.shape.setTransform(0,-229.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AAAg6IAAB0");
	this.shape_1.setTransform(0,-228.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AAAhDIAACH");
	this.shape_2.setTransform(0,-228);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("AAAhNIAACb");
	this.shape_3.setTransform(0,-227);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("AAAhXIAACv");
	this.shape_4.setTransform(0,-226);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(5,1,1).p("AAAhhIAADD");
	this.shape_5.setTransform(0,-225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(5,1,1).p("AAAhrIAADX");
	this.shape_6.setTransform(0,-224);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(5,1,1).p("AAAh1IAADr");
	this.shape_7.setTransform(0,-223);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(5,1,1).p("AAAh/IAAD/");
	this.shape_8.setTransform(0,-222);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(5,1,1).p("AAAiJIAAET");
	this.shape_9.setTransform(0,-221);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(5,1,1).p("AAAiSIAAEl");
	this.shape_10.setTransform(0,-220.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5,1,1).p("AAAicIAAE5");
	this.shape_11.setTransform(0,-219.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(5,1,1).p("AAAimIAAFN");
	this.shape_12.setTransform(0,-218.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(5,1,1).p("AAAiwIAAFh");
	this.shape_13.setTransform(0,-217.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(5,1,1).p("AAAi6IAAF1");
	this.shape_14.setTransform(0,-216.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(5,1,1).p("AAAjEIAAGJ");
	this.shape_15.setTransform(0,-215.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(5,1,1).p("AAAjOIAAGd");
	this.shape_16.setTransform(0,-214.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(5,1,1).p("AAAjYIAAGx");
	this.shape_17.setTransform(0,-213.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(5,1,1).p("AAAjhIAAHD");
	this.shape_18.setTransform(0,-212.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(5,1,1).p("AAAjrIAAHX");
	this.shape_19.setTransform(0,-211.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(5,1,1).p("AAAj1IAAHr");
	this.shape_20.setTransform(0,-210.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(5,1,1).p("AAAj/IAAH/");
	this.shape_21.setTransform(0,-209.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(5,1,1).p("AAAkJIAAIT");
	this.shape_22.setTransform(0,-208.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(5,1,1).p("AAAkTIAAIn");
	this.shape_23.setTransform(0,-207.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(5,1,1).p("AAAkdIAAI7");
	this.shape_24.setTransform(0,-206.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(5,1,1).p("AAAknIAAJP");
	this.shape_25.setTransform(0,-205.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(5,1,1).p("AAAkxIAAJj");
	this.shape_26.setTransform(0,-204.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(5,1,1).p("AAAk6IAAJ1");
	this.shape_27.setTransform(0,-203.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(5,1,1).p("AAAlEIAAKJ");
	this.shape_28.setTransform(0,-202.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(5,1,1).p("AAAlOIAAKd");
	this.shape_29.setTransform(0,-201.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(5,1,1).p("AAAlYIAAKx");
	this.shape_30.setTransform(0,-200.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(5,1,1).p("AAAliIAALF");
	this.shape_31.setTransform(0,-199.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(5,1,1).p("AAAlsIAALZ");
	this.shape_32.setTransform(0,-198.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(5,1,1).p("AAAl1IAALs");
	this.shape_33.setTransform(0,-197.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(5,1,1).p("AAAl/IAAMA");
	this.shape_34.setTransform(0,-196.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(5,1,1).p("AAAmJIAAMT");
	this.shape_35.setTransform(0,-195.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(5,1,1).p("AAAmTIAAMn");
	this.shape_36.setTransform(0,-194.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(5,1,1).p("AAAmdIAAM7");
	this.shape_37.setTransform(0,-193.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(5,1,1).p("AAAmnIAANP");
	this.shape_38.setTransform(0,-192.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(5,1,1).p("AAAmxIAANj");
	this.shape_39.setTransform(0,-191.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(5,1,1).p("AAAm7IAAN3");
	this.shape_40.setTransform(0,-190.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(5,1,1).p("AAAnFIAAOK");
	this.shape_41.setTransform(0,-189.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(5,1,1).p("AAAnPIAAOe");
	this.shape_42.setTransform(0,-188.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(5,1,1).p("AAAnZIAAOy");
	this.shape_43.setTransform(0,-187.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(5,1,1).p("AAAniIAAPF");
	this.shape_44.setTransform(0,-186.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(5,1,1).p("AAAnsIAAPZ");
	this.shape_45.setTransform(0,-185.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(5,1,1).p("AAAn2IAAPt");
	this.shape_46.setTransform(0,-184.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(5,1,1).p("AAAoAIAAQB");
	this.shape_47.setTransform(0,-183.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(5,1,1).p("AAAoKIAAQV");
	this.shape_48.setTransform(0,-182.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(5,1,1).p("AAAoUIAAQp");
	this.shape_49.setTransform(0,-181.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(5,1,1).p("AAAoeIAAQ9");
	this.shape_50.setTransform(0,-180.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(5,1,1).p("AAAooIAARR");
	this.shape_51.setTransform(0,-179.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(5,1,1).p("AAAoxIAARj");
	this.shape_52.setTransform(0,-178.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(5,1,1).p("AAAo7IAAR3");
	this.shape_53.setTransform(0,-177.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(5,1,1).p("AAApFIAASL");
	this.shape_54.setTransform(0,-176.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(5,1,1).p("AAApPIAASf");
	this.shape_55.setTransform(0,-175.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(5,1,1).p("AAApZIAASz");
	this.shape_56.setTransform(0,-174.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(5,1,1).p("AAApjIAATH");
	this.shape_57.setTransform(0,-173.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(5,1,1).p("AAAptIAATb");
	this.shape_58.setTransform(0,-172.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(5,1,1).p("AAAp3IAATv");
	this.shape_59.setTransform(0,-171.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(5,1,1).p("AAAqAIAAUB");
	this.shape_60.setTransform(0,-170.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(5,1,1).p("AAAqKIAAUV");
	this.shape_61.setTransform(0,-169.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(5,1,1).p("AAAqUIAAUp");
	this.shape_62.setTransform(0,-168.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(5,1,1).p("AAAqeIAAU9");
	this.shape_63.setTransform(0,-167.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(5,1,1).p("AAAqoIAAVR");
	this.shape_64.setTransform(0,-166.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(5,1,1).p("AAAqyIAAVl");
	this.shape_65.setTransform(0,-165.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(5,1,1).p("AAAq8IAAV5");
	this.shape_66.setTransform(0,-164.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(5,1,1).p("AAArGIAAWN");
	this.shape_67.setTransform(0,-163.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(5,1,1).p("AAArQIAAWh");
	this.shape_68.setTransform(0,-162.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(5,1,1).p("AAArZIAAWz");
	this.shape_69.setTransform(0,-161.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(5,1,1).p("AAArjIAAXH");
	this.shape_70.setTransform(0,-160.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(5,1,1).p("AAArtIAAXb");
	this.shape_71.setTransform(0,-159.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(5,1,1).p("AAAr3IAAXv");
	this.shape_72.setTransform(0,-158.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(5,1,1).p("AAAsBIAAYD");
	this.shape_73.setTransform(0,-157.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(5,1,1).p("AAAsLIAAYX");
	this.shape_74.setTransform(0,-156.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(5,1,1).p("AAAsUIAAYq");
	this.shape_75.setTransform(0,-155.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(5,1,1).p("AAAseIAAY+");
	this.shape_76.setTransform(0,-154.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(5,1,1).p("AAAsoIAAZR");
	this.shape_77.setTransform(0,-153.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(5,1,1).p("AAAsyIAAZl");
	this.shape_78.setTransform(0,-152.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(5,1,1).p("AAAs8IAAZ5");
	this.shape_79.setTransform(0,-151.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(5,1,1).p("AAAtGIAAaN");
	this.shape_80.setTransform(0,-150.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(5,1,1).p("AAAtQIAAah");
	this.shape_81.setTransform(0,-149.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(5,1,1).p("AAAtaIAAa1");
	this.shape_82.setTransform(0,-148.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(5,1,1).p("AAAtkIAAbJ");
	this.shape_83.setTransform(0,-147.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(5,1,1).p("AAAtuIAAbd");
	this.shape_84.setTransform(0,-146.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(5,1,1).p("AAAt3IAAbv");
	this.shape_85.setTransform(0,-146);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(5,1,1).p("AAAuBIAAcD");
	this.shape_86.setTransform(0,-145);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(5,1,1).p("AAAuLIAAcX");
	this.shape_87.setTransform(0,-144);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(5,1,1).p("AAAuVIAAcr");
	this.shape_88.setTransform(0,-143);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(5,1,1).p("AAAufIAAc/");
	this.shape_89.setTransform(0,-142);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(5,1,1).p("AAAupIAAdT");
	this.shape_90.setTransform(0,-141);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(5,1,1).p("AAAuzIAAdn");
	this.shape_91.setTransform(0,-140);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(5,1,1).p("AAAu9IAAd7");
	this.shape_92.setTransform(0,-139);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(5,1,1).p("AAAvHIAAeP");
	this.shape_93.setTransform(0,-138);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(5,1,1).p("AAAvQIAAeh");
	this.shape_94.setTransform(0,-137.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(5,1,1).p("AAAvaIAAe1");
	this.shape_95.setTransform(0,-136.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(5,1,1).p("AAAvkIAAfJ");
	this.shape_96.setTransform(0,-135.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(5,1,1).p("AAAvuIAAfd");
	this.shape_97.setTransform(0,-134.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(5,1,1).p("AAAv4IAAfx");
	this.shape_98.setTransform(0,-133.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(5,1,1).p("AAAwCMAAAAgF");
	this.shape_99.setTransform(0,-132.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(5,1,1).p("AAAwMMAAAAgZ");
	this.shape_100.setTransform(0,-131.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(5,1,1).p("AAAwWMAAAAgt");
	this.shape_101.setTransform(0,-130.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(5,1,1).p("AAAwfMAAAAg/");
	this.shape_102.setTransform(0,-129.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(5,1,1).p("AAAwpMAAAAhT");
	this.shape_103.setTransform(0,-128.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(5,1,1).p("AAAwzMAAAAhn");
	this.shape_104.setTransform(0,-127.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(5,1,1).p("AAAw9MAAAAh7");
	this.shape_105.setTransform(0,-126.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(5,1,1).p("AAAxHMAAAAiP");
	this.shape_106.setTransform(0,-125.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(5,1,1).p("AAAxRMAAAAij");
	this.shape_107.setTransform(0,-124.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(5,1,1).p("AAAxbMAAAAi3");
	this.shape_108.setTransform(0,-123.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(5,1,1).p("AAAxlMAAAAjL");
	this.shape_109.setTransform(0,-122.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(5,1,1).p("AAAxvMAAAAjf");
	this.shape_110.setTransform(0,-121.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(5,1,1).p("AAAx4MAAAAjx");
	this.shape_111.setTransform(0,-120.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(5,1,1).p("AAAyCMAAAAkF");
	this.shape_112.setTransform(0,-119.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(5,1,1).p("AAAyMMAAAAkZ");
	this.shape_113.setTransform(0,-118.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(5,1,1).p("AAAyWMAAAAkt");
	this.shape_114.setTransform(0,-117.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(5,1,1).p("AAAygMAAAAlB");
	this.shape_115.setTransform(0,-116.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(5,1,1).p("AAAyqMAAAAlV");
	this.shape_116.setTransform(0,-115.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(5,1,1).p("AAAy0MAAAAlp");
	this.shape_117.setTransform(0,-114.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(5,1,1).p("AAAy+MAAAAl9");
	this.shape_118.setTransform(0,-113.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(5,1,1).p("AAAzHMAAAAmP");
	this.shape_119.setTransform(0,-112.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(5,1,1).p("AAAzRMAAAAmj");
	this.shape_120.setTransform(0,-111.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(5,1,1).p("AAAzbMAAAAm3");
	this.shape_121.setTransform(0,-110.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(5,1,1).p("AAAzlMAAAAnL");
	this.shape_122.setTransform(0,-109.4);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(5,1,1).p("AAAzvMAAAAnf");
	this.shape_123.setTransform(0,-108.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(5,1,1).p("AAAz5MAAAAnz");
	this.shape_124.setTransform(0,-107.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(5,1,1).p("AAA0DMAAAAoH");
	this.shape_125.setTransform(0,-106.4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(5,1,1).p("AAA0NMAAAAob");
	this.shape_126.setTransform(0,-105.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(5,1,1).p("AAA0XMAAAAov");
	this.shape_127.setTransform(0,-104.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(5,1,1).p("AAA0gMAAAApB");
	this.shape_128.setTransform(0,-103.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(5,1,1).p("AAA0qMAAAApV");
	this.shape_129.setTransform(0,-102.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(5,1,1).p("AAA00MAAAApp");
	this.shape_130.setTransform(0,-101.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").ss(5,1,1).p("AAA0+MAAAAp9");
	this.shape_131.setTransform(0,-100.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(5,1,1).p("AAA1IMAAAAqR");
	this.shape_132.setTransform(0,-99.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(5,1,1).p("AAA1SMAAAAql");
	this.shape_133.setTransform(0,-98.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(5,1,1).p("AAA1cMAAAAq5");
	this.shape_134.setTransform(0,-97.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#000000").ss(5,1,1).p("AAA1mMAAAArN");
	this.shape_135.setTransform(0,-96.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#000000").ss(5,1,1).p("AAA1vMAAAArf");
	this.shape_136.setTransform(0,-95.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#000000").ss(5,1,1).p("AAA15MAAAArz");
	this.shape_137.setTransform(0,-94.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").ss(5,1,1).p("AAA2DMAAAAsH");
	this.shape_138.setTransform(0,-93.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#000000").ss(5,1,1).p("AAA2NMAAAAsb");
	this.shape_139.setTransform(0,-92.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").ss(5,1,1).p("AAA2XMAAAAsv");
	this.shape_140.setTransform(0,-91.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#000000").ss(5,1,1).p("AAA2hMAAAAtD");
	this.shape_141.setTransform(0,-90.6);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#000000").ss(5,1,1).p("AAA2rMAAAAtX");
	this.shape_142.setTransform(0,-89.6);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#000000").ss(5,1,1).p("AAA21MAAAAtr");
	this.shape_143.setTransform(0,-88.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#000000").ss(5,1,1).p("AAA2+MAAAAt9");
	this.shape_144.setTransform(0,-87.7);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#000000").ss(5,1,1).p("AAA3IMAAAAuR");
	this.shape_145.setTransform(0,-86.7);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#000000").ss(5,1,1).p("AAA3SMAAAAul");
	this.shape_146.setTransform(0,-85.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#000000").ss(5,1,1).p("AAA3cMAAAAu5");
	this.shape_147.setTransform(0,-84.7);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#000000").ss(5,1,1).p("AAA3mMAAAAvN");
	this.shape_148.setTransform(0,-83.7);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#000000").ss(5,1,1).p("AAAXxMAAAgvh");
	this.shape_149.setTransform(0,-82.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.1,-241.1,24.3,21.8);


(lib.honeyflap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.honeybee();
	this.instance.parent = this;
	this.instance.setTransform(22.4,-144.2,0.422,0.422,0,0,0,-38,63.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMB8QgPgBgOgFQgJgDgIgFIgCgBIgBgBIgBAAIgCgBIgBgBIgBgBIgBAAIgCgBIgBgBIgBgBIgBgBIgBAAIgBgBIgBgBIgBgBIgBgBIgBAAIgBgBIgBgBIgBgBIgBgBIgBAAIgBgBIgBgBIgBgBIAAgBIgBgBIgBAAIgBgBIgBgBIAAgBIgBgBIgBgBIgBAAIAAgBIgBgBIgBgBIgBgBIAAgBIgBAAIgBgBIAAgBIgBgBIgBgBIAAgBIgBgBIgBAAIAAgBIgBgBIAAgBIgBgBIAAgBIgBgBIgBgBIAAAAIAAgBIgBgBIgBgBIAAgBIgBgBIAAgCIgBgBIgBgCIgBgBIAAgBIAAgBIgBgBIAAgBIgBAAIAAgBIgBgBIAAgBIAAgBIgBgBIAAgBIAAgBIgBgBIAAgBIAAAAIgBgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAAAIAAgBIgBgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIAAgCIgBgBIAAgCIAAgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIABgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIABgBIAAgBIABgBIAAgBIAAgBIABgBIABgBIAAgBIABgBIAAgBIABgBIABgBIAAgBIABgBIAAgBIABgBIABgBIAAgBIABgCIABgBIAAgBIABgBIABgBIABgBIAAgBIABgBIABgBIABgBIABgBIABgBIAAgBIACgBIAAgBIAEgEIAMgLIAOgKIAPgHIAQgFIAOgDIAPgBIAQABIARADQAHABAHADIAQAHIAEADIABAAIABABIABABIABABIACABIABAAIABABIABABIABABIABABIABAAIABABIABABIABABIABABIABAAIABABIABABIABABIABABIAAABIABAAIABABIABABIABABIABABIABABIAAAAIABABIABABIABABIAAABIABABIABAAIAAABIABABIABABIAAABIABABIABABIAAAAIABABIABABIAAABIABABIAAABIABABIAAAAIABABIABABIAAABIABABIAAABIABABIAAABIABAAIAAABIAAABIABABIAAABIABABIAAABIABABIAAABIABAAIAAABIAAABIABABIAAABIAAABIABABIAAABIAAABIABABIAAAAIAAABIABABIAAABIAAABIABABIAAABIABABIAAABIAAABIAAAAIAAABIABABIAAABIAAABIAAABIABABIAAABIAAABIAAABIAAABIABABIAAAAIAAABIAAABIAAABIAAABIAAABIABABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIABABIAAAAIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIgBABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIgBABIAAABIAAABIAAABIAAABIAAABIgBABIAAABIAAABIAAABIgBABIAAABIAAABIAAABIgBABIAAABIAAABIAAABIgBABIAAABIAAABIgBABIAAABIAAABIgBABIAAABIgBABIAAABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIgBABIAAABIgBABIgBABIAAABIgBABIgBABIAAABIgBABIgBABIgBACIgBABIAAABIgBABIgBABIgBABIgBABIgBABIgBABIgBABIgBABIgBABIgNANQgSAOgWAGQgTAGgSAAIgMgBg");
	this.shape.setTransform(22.7,-143.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-215.3,105.5,83.9);


// stage content:
(lib.writingsuccess_Fontkid_p = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_460 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(460).call(this.frame_460).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(199.6,108.3,0.998,0.998,0,-8,172,22.4,-144);
	this.instance._off = true;

	this.instance_1 = new lib.honeybee();
	this.instance_1.parent = this;
	this.instance_1.setTransform(195.8,191.5,0.421,0.421,0,-8,172,-37.9,63.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({y:441.3},170).wait(12).to({x:196.1,y:185},0).to({guide:{path:[196,185,197.3,155.8,219.1,134.9,242.4,112.5,275.3,112.5,308.2,112.5,331.5,134.9,354.7,157.2,356.2,188.3,357.4,213.2,342.9,233.3,313.6,278.6,252.4,267.8,246.5,267.2,228.3,251.7,210.1,236.3,196,191.6]}},196).to({_off:true},13).wait(61));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(400).to({_off:false},0).to({regX:-38,regY:63.4,guide:{path:[196,191.6,265.8,141.1,284.3,107.5,302.9,73.8,270.2,57,237.7,40.2,274.3,12.5,310.8,-15.1,416.5,-53.6]}},60).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(200,440.9,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},170).wait(12).to({_off:false,x:196,y:184.9},0).to({_off:true},196).wait(74));

	// Layer 4
	this.instance_2 = new lib.ar2("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(279.1,172.8,1,1,0,-15,165);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(191).to({_off:false},0).wait(270));

	// Layer 3
	this.instance_3 = new lib.ar1("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(97,180.1,1,1,0,0,0,-9.8,-171.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).wait(452));

	// Layer 2
	this.instance_4 = new lib.Symbol1("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(282.9,186,1,1,0,0,0,283.2,362.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(191).to({_off:false},0).wait(270));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(25,1,1).p("AAAgOIAAAd");
	this.shape_1.setTransform(199,111.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(25,1,1).p("AAAAZIAAgx");
	this.shape_2.setTransform(199,112.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(25,1,1).p("AAAAiIAAhD");
	this.shape_3.setTransform(199,113.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(25,1,1).p("AAAAsIAAhX");
	this.shape_4.setTransform(199,114.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(25,1,1).p("AAAA1IAAhq");
	this.shape_5.setTransform(199,115.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(25,1,1).p("AAAA/IAAh9");
	this.shape_6.setTransform(199,116.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(25,1,1).p("AAABJIAAiR");
	this.shape_7.setTransform(199,117.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(25,1,1).p("AAABSIAAik");
	this.shape_8.setTransform(199,118.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(25,1,1).p("AAABcIAAi3");
	this.shape_9.setTransform(199,119.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(25,1,1).p("AAABmIAAjL");
	this.shape_10.setTransform(199,120.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(25,1,1).p("AAABvIAAjd");
	this.shape_11.setTransform(199,121.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(25,1,1).p("AAAB5IAAjx");
	this.shape_12.setTransform(199,122.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(25,1,1).p("AAACDIAAkE");
	this.shape_13.setTransform(199,123.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(25,1,1).p("AAACMIAAkX");
	this.shape_14.setTransform(199,124.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(25,1,1).p("AAACWIAAkr");
	this.shape_15.setTransform(199,125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(25,1,1).p("AAACfIAAk+");
	this.shape_16.setTransform(199,126);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(25,1,1).p("AAACpIAAlR");
	this.shape_17.setTransform(199,127);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(25,1,1).p("AAACzIAAll");
	this.shape_18.setTransform(199,127.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(25,1,1).p("AAAC8IAAl3");
	this.shape_19.setTransform(199,128.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(25,1,1).p("AAADGIAAmL");
	this.shape_20.setTransform(199,129.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(25,1,1).p("AAADQIAAmf");
	this.shape_21.setTransform(199,130.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(25,1,1).p("AAADZIAAmx");
	this.shape_22.setTransform(199,131.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(25,1,1).p("AAADjIAAnF");
	this.shape_23.setTransform(199,132.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(25,1,1).p("AAADtIAAnY");
	this.shape_24.setTransform(199,133.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(25,1,1).p("AAAD2IAAnr");
	this.shape_25.setTransform(199,134.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(25,1,1).p("AAAEAIAAn/");
	this.shape_26.setTransform(199,135.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(25,1,1).p("AAAEKIAAoT");
	this.shape_27.setTransform(199,136.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(25,1,1).p("AAAETIAAol");
	this.shape_28.setTransform(199,137.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(25,1,1).p("AAAEdIAAo5");
	this.shape_29.setTransform(199,138.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(25,1,1).p("AAAEmIAApL");
	this.shape_30.setTransform(199,139.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(25,1,1).p("AAAEwIAApf");
	this.shape_31.setTransform(199,140.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(25,1,1).p("AAAE5IAApy");
	this.shape_32.setTransform(199,141.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(25,1,1).p("AAAFDIAAqF");
	this.shape_33.setTransform(199,142.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(25,1,1).p("AAAFNIAAqZ");
	this.shape_34.setTransform(199,143.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(25,1,1).p("AAAFXIAAqt");
	this.shape_35.setTransform(199,144.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(25,1,1).p("AAAFgIAAq/");
	this.shape_36.setTransform(199,145.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(25,1,1).p("AAAFqIAArT");
	this.shape_37.setTransform(199,146.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(25,1,1).p("AAAFzIAArl");
	this.shape_38.setTransform(199,147.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(25,1,1).p("AAAF9IAAr5");
	this.shape_39.setTransform(199,148.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(25,1,1).p("AAAGHIAAsN");
	this.shape_40.setTransform(199,149.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(25,1,1).p("AAAGQIAAsf");
	this.shape_41.setTransform(199,150.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(25,1,1).p("AAAGaIAAsz");
	this.shape_42.setTransform(199,151);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(25,1,1).p("AAAGjIAAtG");
	this.shape_43.setTransform(199,152);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(25,1,1).p("AAAGtIAAtZ");
	this.shape_44.setTransform(199,153);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(25,1,1).p("AAAG3IAAtt");
	this.shape_45.setTransform(199,153.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(25,1,1).p("AAAHAIAAuA");
	this.shape_46.setTransform(199,154.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(25,1,1).p("AAAHKIAAuT");
	this.shape_47.setTransform(199,155.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(25,1,1).p("AAAHUIAAun");
	this.shape_48.setTransform(199,156.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(25,1,1).p("AAAHdIAAu5");
	this.shape_49.setTransform(199,157.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(25,1,1).p("AAAHnIAAvN");
	this.shape_50.setTransform(199,158.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(25,1,1).p("AAAHxIAAvg");
	this.shape_51.setTransform(199,159.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(25,1,1).p("AAAH6IAAvz");
	this.shape_52.setTransform(199,160.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(25,1,1).p("AAAIEIAAwH");
	this.shape_53.setTransform(199,161.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(25,1,1).p("AAAIOIAAwb");
	this.shape_54.setTransform(199,162.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(25,1,1).p("AAAIXIAAwt");
	this.shape_55.setTransform(199,163.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(25,1,1).p("AAAIhIAAxB");
	this.shape_56.setTransform(199,164.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(25,1,1).p("AAAIqIAAxT");
	this.shape_57.setTransform(199,165.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(25,1,1).p("AAAI0IAAxn");
	this.shape_58.setTransform(199,166.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(25,1,1).p("AAAI+IAAx7");
	this.shape_59.setTransform(199,167.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(25,1,1).p("AAAJHIAAyN");
	this.shape_60.setTransform(199,168.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(25,1,1).p("AAAJRIAAyh");
	this.shape_61.setTransform(199,169.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(25,1,1).p("AAAJbIAAy1");
	this.shape_62.setTransform(199,170.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(25,1,1).p("AAAJkIAAzH");
	this.shape_63.setTransform(199,171.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(25,1,1).p("AAAJuIAAzb");
	this.shape_64.setTransform(199,172.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(25,1,1).p("AAAJ3IAAzt");
	this.shape_65.setTransform(199,173.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(25,1,1).p("AAAKBIAA0B");
	this.shape_66.setTransform(199,174.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(25,1,1).p("AAAKLIAA0V");
	this.shape_67.setTransform(199,175.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(25,1,1).p("AAAKUIAA0n");
	this.shape_68.setTransform(199,176.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(25,1,1).p("AAAKeIAA07");
	this.shape_69.setTransform(199,177.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(25,1,1).p("AAAKnIAA1O");
	this.shape_70.setTransform(199,178);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(25,1,1).p("AAAKxIAA1h");
	this.shape_71.setTransform(199,179);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(25,1,1).p("AAAK7IAA11");
	this.shape_72.setTransform(199,179.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(25,1,1).p("AAALFIAA2J");
	this.shape_73.setTransform(199,180.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(25,1,1).p("AAALOIAA2b");
	this.shape_74.setTransform(199,181.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(25,1,1).p("AAALYIAA2v");
	this.shape_75.setTransform(199,182.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(25,1,1).p("AAALhIAA3B");
	this.shape_76.setTransform(199,183.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(25,1,1).p("AAALrIAA3V");
	this.shape_77.setTransform(199,184.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(25,1,1).p("AAAL1IAA3p");
	this.shape_78.setTransform(199,185.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(25,1,1).p("AAAL+IAA37");
	this.shape_79.setTransform(199,186.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(25,1,1).p("AAAMIIAA4P");
	this.shape_80.setTransform(199,187.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(25,1,1).p("AAAMRIAA4i");
	this.shape_81.setTransform(199,188.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(25,1,1).p("AAAMbIAA41");
	this.shape_82.setTransform(199,189.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(25,1,1).p("AAAMlIAA5J");
	this.shape_83.setTransform(199,190.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(25,1,1).p("AAAMuIAA5b");
	this.shape_84.setTransform(199,191.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(25,1,1).p("AAAM4IAA5v");
	this.shape_85.setTransform(199,192.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(25,1,1).p("AAANCIAA6D");
	this.shape_86.setTransform(199,193.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(25,1,1).p("AAANLIAA6V");
	this.shape_87.setTransform(199,194.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(25,1,1).p("AAANVIAA6p");
	this.shape_88.setTransform(199,195.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(25,1,1).p("AAANfIAA69");
	this.shape_89.setTransform(199,196.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(25,1,1).p("AAANoIAA7P");
	this.shape_90.setTransform(199,197.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(25,1,1).p("AAANyIAA7j");
	this.shape_91.setTransform(199,198.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(25,1,1).p("AAAN8IAA73");
	this.shape_92.setTransform(199,199.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(25,1,1).p("AAAOFIAA8J");
	this.shape_93.setTransform(199,200.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(25,1,1).p("AAAOPIAA8d");
	this.shape_94.setTransform(199,201.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(25,1,1).p("AAAOYIAA8v");
	this.shape_95.setTransform(199,202.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(25,1,1).p("AAAOiIAA9D");
	this.shape_96.setTransform(199,203.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(25,1,1).p("AAAOrIAA9W");
	this.shape_97.setTransform(199,204);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(25,1,1).p("AAAO1IAA9p");
	this.shape_98.setTransform(199,205);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(25,1,1).p("AAAO/IAA99");
	this.shape_99.setTransform(199,205.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(25,1,1).p("AAAPJIAA+R");
	this.shape_100.setTransform(199,206.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(25,1,1).p("AAAPSIAA+j");
	this.shape_101.setTransform(199,207.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(25,1,1).p("AAAPcIAA+3");
	this.shape_102.setTransform(199,208.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(25,1,1).p("AAAPlIAA/J");
	this.shape_103.setTransform(199,209.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(25,1,1).p("AAAPvIAA/d");
	this.shape_104.setTransform(199,210.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(25,1,1).p("AAAP5IAA/x");
	this.shape_105.setTransform(199,211.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(25,1,1).p("AAAQCMAAAggD");
	this.shape_106.setTransform(199,212.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(25,1,1).p("AAAQMMAAAggX");
	this.shape_107.setTransform(199,213.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(25,1,1).p("AAAQVMAAAggq");
	this.shape_108.setTransform(199,214.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(25,1,1).p("AAAQfMAAAgg9");
	this.shape_109.setTransform(199,215.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(25,1,1).p("AAAQpMAAAghR");
	this.shape_110.setTransform(199,216.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(25,1,1).p("AAAQzMAAAghl");
	this.shape_111.setTransform(199,217.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(25,1,1).p("AAAQ8MAAAgh3");
	this.shape_112.setTransform(199,218.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(25,1,1).p("AAARGMAAAgiL");
	this.shape_113.setTransform(199,219.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(25,1,1).p("AAARPMAAAgid");
	this.shape_114.setTransform(199,220.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(25,1,1).p("AAARZMAAAgix");
	this.shape_115.setTransform(199,221.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(25,1,1).p("AAARjMAAAgjF");
	this.shape_116.setTransform(199,222.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(25,1,1).p("AAARsMAAAgjX");
	this.shape_117.setTransform(199,223.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(25,1,1).p("AAAR2MAAAgjr");
	this.shape_118.setTransform(199,224.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(25,1,1).p("AAASAMAAAgj/");
	this.shape_119.setTransform(199,225.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(25,1,1).p("AAASJMAAAgkR");
	this.shape_120.setTransform(199,226.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(25,1,1).p("AAASTMAAAgkl");
	this.shape_121.setTransform(199,227.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(25,1,1).p("AAAScMAAAgk3");
	this.shape_122.setTransform(199,228.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(25,1,1).p("AAASmMAAAglL");
	this.shape_123.setTransform(199,229.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(25,1,1).p("AAASwMAAAglf");
	this.shape_124.setTransform(199,230);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(25,1,1).p("AAAS5MAAAglx");
	this.shape_125.setTransform(199,231);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(25,1,1).p("AAATDMAAAgmF");
	this.shape_126.setTransform(199,231.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(25,1,1).p("AAATNMAAAgmZ");
	this.shape_127.setTransform(199,232.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(25,1,1).p("AAATWMAAAgmr");
	this.shape_128.setTransform(199,233.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(25,1,1).p("AAATgMAAAgm/");
	this.shape_129.setTransform(199,234.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(25,1,1).p("AAATqMAAAgnT");
	this.shape_130.setTransform(199,235.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").ss(25,1,1).p("AAATzMAAAgnl");
	this.shape_131.setTransform(199,236.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(25,1,1).p("AAAT9MAAAgn5");
	this.shape_132.setTransform(199,237.7);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(25,1,1).p("AAAUGMAAAgoL");
	this.shape_133.setTransform(199,238.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(25,1,1).p("AAAUQMAAAgof");
	this.shape_134.setTransform(199,239.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#000000").ss(25,1,1).p("AAAUZMAAAgoy");
	this.shape_135.setTransform(199,240.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#000000").ss(25,1,1).p("AAAUjMAAAgpF");
	this.shape_136.setTransform(199,241.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#000000").ss(25,1,1).p("AAAUtMAAAgpZ");
	this.shape_137.setTransform(199,242.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").ss(25,1,1).p("AAAU3MAAAgpt");
	this.shape_138.setTransform(199,243.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#000000").ss(25,1,1).p("AAAVAMAAAgp/");
	this.shape_139.setTransform(199,244.5);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").ss(25,1,1).p("AAAVKMAAAgqT");
	this.shape_140.setTransform(199,245.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#000000").ss(25,1,1).p("AAAVTMAAAgql");
	this.shape_141.setTransform(199,246.4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#000000").ss(25,1,1).p("AAAVdMAAAgq5");
	this.shape_142.setTransform(199,247.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#000000").ss(25,1,1).p("AAAVnMAAAgrN");
	this.shape_143.setTransform(199,248.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#000000").ss(25,1,1).p("AAAVwMAAAgrf");
	this.shape_144.setTransform(199,249.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#000000").ss(25,1,1).p("AAAV6MAAAgrz");
	this.shape_145.setTransform(199,250.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#000000").ss(25,1,1).p("AAAWEMAAAgsH");
	this.shape_146.setTransform(199,251.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#000000").ss(25,1,1).p("AAAWNMAAAgsZ");
	this.shape_147.setTransform(199,252.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#000000").ss(25,1,1).p("AAAWXMAAAgst");
	this.shape_148.setTransform(199,253.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#000000").ss(25,1,1).p("AAAWgMAAAgs/");
	this.shape_149.setTransform(199,254.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#000000").ss(25,1,1).p("AAAWqMAAAgtT");
	this.shape_150.setTransform(199,255.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#000000").ss(25,1,1).p("AAAW0MAAAgtn");
	this.shape_151.setTransform(199,256);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#000000").ss(25,1,1).p("AAAW9MAAAgt5");
	this.shape_152.setTransform(199,257);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#000000").ss(25,1,1).p("AAAXHMAAAguN");
	this.shape_153.setTransform(199,258);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#000000").ss(25,1,1).p("AAAXRMAAAgug");
	this.shape_154.setTransform(199,258.9);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#000000").ss(25,1,1).p("AAAXaMAAAguz");
	this.shape_155.setTransform(199,259.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#000000").ss(25,1,1).p("AAAXkMAAAgvH");
	this.shape_156.setTransform(199,260.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#000000").ss(25,1,1).p("AAAXuMAAAgvb");
	this.shape_157.setTransform(199,261.8);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#000000").ss(25,1,1).p("AAAX3MAAAgvt");
	this.shape_158.setTransform(199,262.8);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#000000").ss(25,1,1).p("AAAYBMAAAgwB");
	this.shape_159.setTransform(199,263.7);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#000000").ss(25,1,1).p("AAAYKMAAAgwT");
	this.shape_160.setTransform(199,264.7);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#000000").ss(25,1,1).p("AAAYUMAAAgwn");
	this.shape_161.setTransform(199,265.7);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#000000").ss(25,1,1).p("AAAYeMAAAgw6");
	this.shape_162.setTransform(199,266.6);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#000000").ss(25,1,1).p("AAAYnMAAAgxN");
	this.shape_163.setTransform(199,267.6);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#000000").ss(25,1,1).p("AAAYxMAAAgxh");
	this.shape_164.setTransform(199,268.5);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#000000").ss(25,1,1).p("AAAY7MAAAgx1");
	this.shape_165.setTransform(199,269.5);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#000000").ss(25,1,1).p("AAAZEMAAAgyH");
	this.shape_166.setTransform(199,270.5);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#000000").ss(25,1,1).p("AAAZOMAAAgyb");
	this.shape_167.setTransform(199,271.4);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#000000").ss(25,1,1).p("AAAZXMAAAgyt");
	this.shape_168.setTransform(199,272.4);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#000000").ss(25,1,1).p("AAAZhMAAAgzB");
	this.shape_169.setTransform(199,273.4);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#000000").ss(25,1,1).p("AAAZrMAAAgzV");
	this.shape_170.setTransform(199,274.3);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#000000").ss(25,1,1).p("AAA5zMAAAAzn");
	this.shape_171.setTransform(199,275.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},9).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).wait(282));

	// Base
	this.instance_5 = new lib.p("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(275,275);
	this.instance_5.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(461));

	// Background
	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#F59E9E").ss(3,1,1).p("AMvQ5I5dAAMAAAghxIZdAAg");
	this.shape_172.setTransform(275,275,3.373,2.543);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_173.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_173},{t:this.shape_172}]}).wait(461));

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