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
	this.shape.graphics.f("#FFFFFF").s().p("ABYO2QjggHjkhkQjuhpiMifQgtgzAAg7QAAhDA1gyQAzg1BFAAQBDAAAyA5QBfBtC1BOQC0BOCLgBQFQgBAajkIAAgMQAAiXlKhlInwibQkniIAAjyIAJhVQAmjRDriEQDShzEEgCQCyAACuBFQCfBBBEBSQBBBSAABJQAACcigAAQhNAAg1g/QhriLj3gEIgaAAQiSAAhxA5QiBA/gEBLIAAAJQABBJCIA3IJpC3QFpCUAAFBIgCBFQgcEFjUCRQi1B3jzAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.7,-95,157.5,190);


(lib.s = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(158.9,375.3,2.463,2.463);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},250).wait(1));

	// Layer 7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_229 = new cjs.Graphics().p("EAOeAjrIFnptIBHAqIlmJtg");
	var mask_graphics_230 = new cjs.Graphics().p("AjpEXIFmpsIBtA/IlmJsg");
	var mask_graphics_231 = new cjs.Graphics().p("Aj8EMIFlpsICVBVIlmJsg");
	var mask_graphics_232 = new cjs.Graphics().p("AkQEBIFmpsIC7BsIlmJsg");
	var mask_graphics_233 = new cjs.Graphics().p("AkjD1IFmpsIDhCDIlmJsg");
	var mask_graphics_234 = new cjs.Graphics().p("Ak2DrIFmpsIEHCYIlmJsg");
	var mask_graphics_235 = new cjs.Graphics().p("AlJDfIFmpsIEtCvIlmJsg");
	var mask_graphics_236 = new cjs.Graphics().p("AlcDUIFlpsIFUDFIllJsg");
	var mask_graphics_237 = new cjs.Graphics().p("AlvDJIFmpsIF5DbIlmJsg");
	var mask_graphics_238 = new cjs.Graphics().p("AmCC+IFmpsIGfDxIlmJsg");
	var mask_graphics_239 = new cjs.Graphics().p("AmWCzIFnpsIHGEHIlnJsg");
	var mask_graphics_240 = new cjs.Graphics().p("AmpCoIFnpsIHsEdIlnJsg");
	var mask_graphics_241 = new cjs.Graphics().p("Am8CdIFnpsIISEzIlnJsg");
	var mask_graphics_242 = new cjs.Graphics().p("AnPCSIFmpsII5FJIlmJsg");
	var mask_graphics_243 = new cjs.Graphics().p("AniCHIFmpsIJfFfIlmJsg");
	var mask_graphics_244 = new cjs.Graphics().p("An2B8IFnpsIKGF1IlnJsg");
	var mask_graphics_245 = new cjs.Graphics().p("AoIBxIFmpsIKsGLIlnJsg");
	var mask_graphics_246 = new cjs.Graphics().p("AocBmIFnpsILSGhIlnJsg");
	var mask_graphics_247 = new cjs.Graphics().p("AovBbIFmpsIL5G3IlmJsg");
	var mask_graphics_248 = new cjs.Graphics().p("ApCBQIFmpsIMfHNIlmJsg");
	var mask_graphics_249 = new cjs.Graphics().p("ApVBEIFnpsINEHlIlmJsg");
	var mask_graphics_250 = new cjs.Graphics().p("ApoA6IFmpsINsH6IlnJsg");
	var mask_graphics_251 = new cjs.Graphics().p("Ap8AuIFnpsIOSIRIlnJsg");
	var mask_graphics_252 = new cjs.Graphics().p("AqPAkIFnpsIO4ImIlnJsg");
	var mask_graphics_253 = new cjs.Graphics().p("AqiAYIFnpsIPeI9IlnJsg");
	var mask_graphics_254 = new cjs.Graphics().p("Aq1ANIFnpsIQEJTIlnJsg");
	var mask_graphics_255 = new cjs.Graphics().p("ArIACIFmpsIQrJpIlmJsg");
	var mask_graphics_256 = new cjs.Graphics().p("ArbgIIFmptIRRJ+IlmJtg");
	var mask_graphics_257 = new cjs.Graphics().p("ArugTIFmptIR3KUIlmJtg");
	var mask_graphics_258 = new cjs.Graphics().p("AsCgeIFnptISeKqIlnJtg");
	var mask_graphics_259 = new cjs.Graphics().p("AjbZWIFlptITFLBIlmJtg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(229).to({graphics:mask_graphics_229,x:135.6,y:232.5}).wait(1).to({graphics:mask_graphics_230,x:247.9,y:430.7}).wait(1).to({graphics:mask_graphics_231,x:246,y:429.6}).wait(1).to({graphics:mask_graphics_232,x:244.1,y:428.6}).wait(1).to({graphics:mask_graphics_233,x:242.2,y:427.5}).wait(1).to({graphics:mask_graphics_234,x:240.3,y:426.4}).wait(1).to({graphics:mask_graphics_235,x:238.4,y:425.3}).wait(1).to({graphics:mask_graphics_236,x:236.5,y:424.2}).wait(1).to({graphics:mask_graphics_237,x:234.6,y:423.1}).wait(1).to({graphics:mask_graphics_238,x:232.7,y:422}).wait(1).to({graphics:mask_graphics_239,x:230.8,y:420.9}).wait(1).to({graphics:mask_graphics_240,x:228.9,y:419.8}).wait(1).to({graphics:mask_graphics_241,x:227,y:418.7}).wait(1).to({graphics:mask_graphics_242,x:225.2,y:417.6}).wait(1).to({graphics:mask_graphics_243,x:223.2,y:416.5}).wait(1).to({graphics:mask_graphics_244,x:221.4,y:415.4}).wait(1).to({graphics:mask_graphics_245,x:219.5,y:414.3}).wait(1).to({graphics:mask_graphics_246,x:217.5,y:413.2}).wait(1).to({graphics:mask_graphics_247,x:215.7,y:412.1}).wait(1).to({graphics:mask_graphics_248,x:213.8,y:411}).wait(1).to({graphics:mask_graphics_249,x:211.9,y:410}).wait(1).to({graphics:mask_graphics_250,x:210,y:408.9}).wait(1).to({graphics:mask_graphics_251,x:208.1,y:407.8}).wait(1).to({graphics:mask_graphics_252,x:206.2,y:406.7}).wait(1).to({graphics:mask_graphics_253,x:204.3,y:405.6}).wait(1).to({graphics:mask_graphics_254,x:202.4,y:404.5}).wait(1).to({graphics:mask_graphics_255,x:200.5,y:403.4}).wait(1).to({graphics:mask_graphics_256,x:198.6,y:402.3}).wait(1).to({graphics:mask_graphics_257,x:196.7,y:401.2}).wait(1).to({graphics:mask_graphics_258,x:194.8,y:400.1}).wait(1).to({graphics:mask_graphics_259,x:135.9,y:232.7}).wait(1));

	// 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(45,1,1).p("AzWRQQJfHYKPB1QFCA6EfhyQEWhuCqjuQErmikJmkQh+jIkAh8Qhlgwieg3QjChAhrglQj1hUg7gVQimg9hxg7QkiiWh/jnQh5jaA9jjQA9jjDYiPQEGitELghQEFggEsBmQC6BAB+BbQB8BaB7Ce");
	this.shape_1.setTransform(273.9,269.2);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(229).to({_off:false},0).wait(31));

	// Layer 5 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_130 = new cjs.Graphics().p("A4WSUQiOuEIYrhQIXrhODiPQOEiPLiIXMgoZA3oQrhoXiQuEg");
	var mask_1_graphics_131 = new cjs.Graphics().p("A44RoQh0uIIsrQQItrSOGh1QOJh1LRItMgp+A2bQrSosh1uIg");
	var mask_1_graphics_132 = new cjs.Graphics().p("A5YQ9QhauLJBrAQJBrCOJhaQOMhbLBJBMgriA1NQrBpBhbuLg");
	var mask_1_graphics_133 = new cjs.Graphics().p("A52QSQg/uNJVqwQJVqwOLhAQOOhAKxJVMgtEAz6QqwpVhBuNg");
	var mask_1_graphics_134 = new cjs.Graphics().p("A6RPoQgluPJpqeQJpqeOMgmQOQgmKeJoMguiAymQqeppgnuOg");
	var mask_1_graphics_135 = new cjs.Graphics().p("A6qO+QgLuPJ8qMQJ8qMOOgMQOQgMKMJ8Mgv+AxOQqNp8gMuPg");
	var mask_1_graphics_136 = new cjs.Graphics().p("A7AOVQAPuPKPp5QKPp6ONAPQOQAOJ6KPMgxYAv0Qp6qPAOuPg");
	var mask_1_graphics_137 = new cjs.Graphics().p("A7UNsQAquNKhpnQKgpmONApQOPApJnKgMgywAuXQpmqgAouPg");
	var mask_1_graphics_138 = new cjs.Graphics().p("A7lNFQBEuMKypTQKypTOLBDQOOBEJTKyMg0EAs4QpTqzBDuMg");
	var mask_1_graphics_139 = new cjs.Graphics().p("A70MeQBeuKLDo+QLDo/OJBdQOLBeI/LDMg1VArWQo/rDBduKg");
	var mask_1_graphics_140 = new cjs.Graphics().p("A8AL3QB4uGLUoqQLToqOGB4QOIB4IqLTMg2kApyQoqrTB3uIg");
	var mask_1_graphics_141 = new cjs.Graphics().p("A8KLSQCTuCLjoVQLjoVOCCSQOECSIVLjMg3wAoMQoVrjCRuEg");
	var mask_1_graphics_142 = new cjs.Graphics().p("A8RKuQCtt+Lyn/QLyoAN9CsQOACsH/LyMg45AmkQn/ryCrt/g");
	var mask_1_graphics_143 = new cjs.Graphics().p("A8WKKQDHt4MAnqQMBnpN4DGQN6DFHpMBMg5+Ak5QnpsADEt6g");
	var mask_1_graphics_144 = new cjs.Graphics().p("A8YJnQDhtyMOnTQMOnTNyDfQN0DgHTMNMg7BAjOQnTsODet0g");
	var mask_1_graphics_145 = new cjs.Graphics().p("A8XJFQD6trMbm8QMbm8NsD4QNtD5G8MbMg8BAhfQm8sbD4ttg");
	var mask_1_graphics_146 = new cjs.Graphics().p("A8UIkQETtjMomlQMnmlNkESQNmESGlMnMg89AfvQmlsoERtlg");
	var mask_1_graphics_147 = new cjs.Graphics().p("A8OIEQEstbM0mNQMzmNNcEqQNdErGNMzMg92Ad+QmNs0Eqtdg");
	var mask_1_graphics_148 = new cjs.Graphics().p("A8GHlQFFtSM/l1QM+l2NTFEQNUFEF2M+Mg+sAcKQl2s/FDtUg");
	var mask_1_graphics_149 = new cjs.Graphics().p("A77HHQFdtINKldQNIldNJFcQNLFcFdNIMg/eAaWQldtJFbtLg");
	var mask_1_graphics_150 = new cjs.Graphics().p("A7tGrQF1s/NTlEQNSlFM/F0QNAF1FFNSMhANAYgQlFtUF0s/g");
	var mask_1_graphics_151 = new cjs.Graphics().p("A7dGPQGNszNcksQNbksM0GMQM1GNEsNbMhA5AWoQkstcGMs1g");
	var mask_1_graphics_152 = new cjs.Graphics().p("A7LF0QGlsnNkkTQNkkTMoGkQMpGkETNjMhBhAUwQkTtlGjspg");
	var mask_1_graphics_153 = new cjs.Graphics().p("A62FbQG8sbNsj6QNrj5MbG6QMdG8D6NrMhCGAS1Qj5tsG6scg");
	var mask_1_graphics_154 = new cjs.Graphics().p("A6eFCQHSsNNzjgQNyjgMOHRQMQHRDgNzMhCmAQ6QjgtyHRsQg");
	var mask_1_graphics_155 = new cjs.Graphics().p("A6EErQHpsAN5jGQN4jHMAHoQMCHoDGN5MhDDAO+QjHt4HosCg");
	var mask_1_graphics_156 = new cjs.Graphics().p("A5oEVQH/rxN/itQN9itLyH+QLzH+CtN+MhDeANCQitt+H+rzg");
	var mask_1_graphics_157 = new cjs.Graphics().p("A5JEAQIVriODiTQOCiSLiITQLlITCSODMhD0ALFQiSuDITrkg");
	var mask_1_graphics_158 = new cjs.Graphics().p("A4oDtQIqrTOHh4QOGh5LTIoQLUIpB5OHMhEGAJHQh5uHIorUg");
	var mask_1_graphics_159 = new cjs.Graphics().p("A4EDaQI+rCOKheQOJhfLDI9QLEI+BfOJMhEWAHJQheuKI9rEg");
	var mask_1_graphics_160 = new cjs.Graphics().p("A3eDJQJTqxOLhEQOMhFKyJSQKzJRBFONMhEhAFJQhFuMJSqzg");
	var mask_1_graphics_161 = new cjs.Graphics().p("A22C5QJnqfOMgqQOOgqKhJkQKhJmAqOOMhEoADLQgquOJlqig");
	var mask_1_graphics_162 = new cjs.Graphics().p("A2LCrQJ5qOOOgPQOPgQKOJ3QKQJ6APOOMhEsABMQgQuPJ5qPg");
	var mask_1_graphics_163 = new cjs.Graphics().p("A/0aPQAKuOKLp9QKNp7ONALQOPAKJ8KKQJ9KMgLOPg");
	var mask_1_graphics_164 = new cjs.Graphics().p("A/zYwQAluOKepqQKepoONAlQOOAlJpKcQJqKeglOOg");
	var mask_1_graphics_165 = new cjs.Graphics().p("A/xX2QA1uNKopeQKppcOMA1QONA1JdKmQJeKpg0ONg");
	var mask_1_graphics_166 = new cjs.Graphics().p("A/uW9QBEuMKzpRQKzpROLBEQOMBFJRKxQJSKzhEOMg");
	var mask_1_graphics_167 = new cjs.Graphics().p("A/rWEQBUuLK9pFQK9pFOKBVQOLBUJFK7QJGK+hVOKg");
	var mask_1_graphics_168 = new cjs.Graphics().p("A/nVLQBkuJLGo5QLIo5OIBlQOJBkI5LFQI5LHhkOJg");
	var mask_1_graphics_169 = new cjs.Graphics().p("A/jUSQB0uHLQotQLRosOHB0QOHB0IsLPQItLRhzOHg");
	var mask_1_graphics_170 = new cjs.Graphics().p("A/eTZQCEuFLZofQLbogOECEQOFCDIgLZQIhLaiEOFg");
	var mask_1_graphics_171 = new cjs.Graphics().p("A/YShQCTuDLjoTQLkoTOCCUQOCCTITLiQIULkiTOCg");
	var mask_1_graphics_172 = new cjs.Graphics().p("A/SRoQCjuALsoGQLtoFN/CiQOACjIGLrQIHLtijOAg");
	var mask_1_graphics_173 = new cjs.Graphics().p("A/LQwQCzt9L1n5QL2n4N8CyQN8CyH5L0QH6L2iyN9g");
	var mask_1_graphics_174 = new cjs.Graphics().p("A/DP4QDCt6L+nrQL+nsN5DCQN5DCHsL8QHsL/jBN6g");
	var mask_1_graphics_175 = new cjs.Graphics().p("A+7PAQDSt2MGneQMHneN1DRQN2DRHeMFQHfMHjRN2g");
	var mask_1_graphics_176 = new cjs.Graphics().p("A+xOIQDgtyMOnRQMQnQNxDhQNyDgHRMNQHRMQjgNyg");
	var mask_1_graphics_177 = new cjs.Graphics().p("A+oNRQDwttMWnEQMXnDNuDwQNuDwHDMVQHEMXjwNug");
	var mask_1_graphics_178 = new cjs.Graphics().p("A+dMaQD/tpMem2QMem1NpD/QNqD/G1MdQG2Mfj/Nqg");
	var mask_1_graphics_179 = new cjs.Graphics().p("A+SLjQEOtkMlmpQMnmmNkEOQNlEOGnMkQGoMnkONlg");
	var mask_1_graphics_180 = new cjs.Graphics().p("A+HKsQEetfMsmaQMumZNfEeQNgEdGaMrQGZMukdNgg");
	var mask_1_graphics_181 = new cjs.Graphics().p("A96J2QEstaM0mMQMzmLNbEtQNbEsGLMyQGMM1ksNbg");
	var mask_1_graphics_182 = new cjs.Graphics().p("A9tJAQE7tVM6l9QM6l8NWE7QNWE7F9M5QF9M8k7NVg");
	var mask_1_graphics_183 = new cjs.Graphics().p("A9gILQFKtPNBlwQNBltNQFKQNQFKFuM/QFvNClKNQg");
	var mask_1_graphics_184 = new cjs.Graphics().p("A9SHVQFZtJNHlgQNHlgNKFZQNLFZFfNFQFhNJlZNKg");
	var mask_1_graphics_185 = new cjs.Graphics().p("A9DGhQFotDNNlSQNMlRNFFnQNEFoFRNLQFRNOlnNEg");
	var mask_1_graphics_186 = new cjs.Graphics().p("A8zFsQF2s8NSlEQNTlBM+F1QM9F2FDNRQFCNUl1M+g");
	var mask_1_graphics_187 = new cjs.Graphics().p("A8jE4QGEs2NYk0QNYkzM3GEQM3GEE0NXQE0NZmEM3g");
	var mask_1_graphics_188 = new cjs.Graphics().p("A8SEFQGSsvNekmQNdkkMwGTQMwGSElNcQElNemTMxg");
	var mask_1_graphics_189 = new cjs.Graphics().p("A8BDSQGhsoNikXQNikVMpGhQMpGgEWNhQEWNkmhMpg");
	var mask_1_graphics_190 = new cjs.Graphics().p("A7vCfQGvshNnkHQNmkGMiGvQMiGuEGNmQEHNomvMhg");
	var mask_1_graphics_191 = new cjs.Graphics().p("A7cBtQG8sZNsj4QNrj3MaG8QMaG9D3NqQD3Nsm8Mag");
	var mask_1_graphics_192 = new cjs.Graphics().p("A7JA7QHKsRNwjpQNvjnMSHKQMSHKDoNuQDoNxnKMSg");
	var mask_1_graphics_193 = new cjs.Graphics().p("A61AKQHXsJN0jaQNzjXMKHXQMKHYDZNyQDZN0nYMKg");
	var mask_1_graphics_194 = new cjs.Graphics().p("A6hgmQHlsBN3jLQN3jIMCHlQMBHlDKN2QDJN4nlMBg");
	var mask_1_graphics_195 = new cjs.Graphics().p("A6MhWQHzr5N6i7QN6i5L5HzQL5HyC6N5QC6N7nyL6g");
	var mask_1_graphics_196 = new cjs.Graphics().p("A52iFQH/rxN+irQN9ipLwH/QLwIACrN8QCqN+n/Lwg");
	var mask_1_graphics_197 = new cjs.Graphics().p("A5gi1QIMrnOBibQN/iaLoIMQLnINCbN+QCbOCoNLng");
	var mask_1_graphics_198 = new cjs.Graphics().p("A5KjjQIareODiMQOCiKLeIZQLeIZCLOCQCLOEoZLeg");
	var mask_1_graphics_199 = new cjs.Graphics().p("A4ykRQImrUOFh9QOEh6LVImQLUImB8ODQB7OGolLVg");
	var mask_1_graphics_200 = new cjs.Graphics().p("A4bk+QIzrLOHhsQOGhrLLIyQLLIzBsOFQBsOIozLLg");
	var mask_1_graphics_201 = new cjs.Graphics().p("A4ClrQI+rBOJhcQOIhcLBI/QLBI/BcOHQBcOKo+LBg");
	var mask_1_graphics_202 = new cjs.Graphics().p("A3qmXQJLq2OKhOQOKhLK3JLQK3JLBMOIQBMOMpKK3g");
	var mask_1_graphics_203 = new cjs.Graphics().p("A3RnCQJXqsOLg+QOLg7KtJWQKsJXA9OKQA9ONpXKsg");
	var mask_1_graphics_204 = new cjs.Graphics().p("A23ntQJjqiOLgtQONgsKiJiQKiJjAsOLQAtONpiKig");
	var mask_1_graphics_205 = new cjs.Graphics().p("A17pMQJ9qJOMgKQOOgIKJJ9QKKJ8AIONQAJOPp9KJg");
	var mask_1_graphics_206 = new cjs.Graphics().p("A09qoQKWpvOMAaQOOAdJvKWQJwKVgbONQgcOOqWJvg");
	var mask_1_graphics_207 = new cjs.Graphics().p("Az9sAQKupUOLA+QOMBBJUKuQJVKug/OKQg/ONqvJVg");
	var mask_1_graphics_208 = new cjs.Graphics().p("Ay7tUQLGo5OHBjQOJBkI5LGQI5LFhjOHQhkOKrFI5g");
	var mask_1_graphics_209 = new cjs.Graphics().p("Ax2ujQLbodODCGQOECJIdLbQIcLbiHODQiHOFrcIcg");
	var mask_1_graphics_210 = new cjs.Graphics().p("AwwvvQLxn/N9CqQN9CrIALxQH/LwirN9QirN/rwH/g");
	var mask_1_graphics_211 = new cjs.Graphics().p("Avow3QMFnhN1DOQN3DPHhMEQHhMEjON1QjPN4sEHhg");
	var mask_1_graphics_212 = new cjs.Graphics().p("Audx6QMXnCNsDxQNuDyHCMXQHCMWjxNsQjxNvsXHCg");
	var mask_1_graphics_213 = new cjs.Graphics().p("AtRy4QMomjNjETQNjEVGiMoQGjMokUNiQkUNlsoGig");
	var mask_1_graphics_214 = new cjs.Graphics().p("AsDzyQM3mCNYE1QNYE3GCM4QGCM3k2NXQk2NZs5GCg");
	var mask_1_graphics_215 = new cjs.Graphics().p("Aq00oQNGlhNLFXQNLFZFhNHQFhNGlXNKQlYNMtHFhg");
	var mask_1_graphics_216 = new cjs.Graphics().p("Apj1YQNTlAM9F5QM9F5E/NVQFANTl5M8Ql5M+tUE/g");
	var mask_1_graphics_217 = new cjs.Graphics().p("AoR2EQNgkdMtGZQMtGaEeNgQEdNgmZMsQmaMutgEeg");
	var mask_1_graphics_218 = new cjs.Graphics().p("Am92rQNqj7MdG5QMcG6D7NrQD7Nrm5McQm6MdtrD7g");
	var mask_1_graphics_219 = new cjs.Graphics().p("Alp3MQN0jYMLHYQMJHZDZN0QDYN0nZMKQnZMLt0DYg");
	var mask_1_graphics_220 = new cjs.Graphics().p("AkT3pQN7i1L4H3QL2H4C1N7QC1N9n3L2Qn4L4t8C1g");
	var mask_1_graphics_221 = new cjs.Graphics().p("Ai94BQOCiRLjIUQLiIWCROCQCSODoVLiQoVLjuDCRg");
	var mask_1_graphics_222 = new cjs.Graphics().p("Ahm4TQOHhuLNIxQLNIzBtOHQBuOIoyLNQoyLNuIBug");
	var mask_1_graphics_223 = new cjs.Graphics().p("AgP4hQOLhJK2JNQK2JPBKOKQBJOMpNK2QpPK3uLBJg");
	var mask_1_graphics_224 = new cjs.Graphics().p("ABH4pQOOgmKfJpQKeJqAlONQAmOOppKeQppKeuOAmg");
	var mask_1_graphics_225 = new cjs.Graphics().p("ACf4sQOPgBKFKCQKFKEABOOQACOPqDKFQqEKGuOABg");
	var mask_1_graphics_226 = new cjs.Graphics().p("EABOAsAMACohErQOOAjJsKcQJqKdgiONQgjOOqcJrQp5JLtSAAQgwAAgwgCg");
	var mask_1_graphics_227 = new cjs.Graphics().p("EgAIAr7MAFUhEhQONBGJRK0QJPK1hHOMQhGOMq0JQQprISsXAAQhfAAhfgIg");
	var mask_1_graphics_228 = new cjs.Graphics().p("EgBgAryMAIDhEQQOIBqI2LLQIzLMhqOIQhrOJrLI0QpaHbrgAAQiLAAiPgRg");
	var mask_1_graphics_229 = new cjs.Graphics().p("EgC4ArlMAKwhD5QOECPIYLhQIXLhiPOEQiOOErhIXQpHGnqsAAQi2AAi8geg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(130).to({graphics:mask_1_graphics_130,x:190.8,y:260.7}).wait(1).to({graphics:mask_1_graphics_131,x:193.3,y:258.8}).wait(1).to({graphics:mask_1_graphics_132,x:195.8,y:256.9}).wait(1).to({graphics:mask_1_graphics_133,x:198.3,y:254.8}).wait(1).to({graphics:mask_1_graphics_134,x:200.6,y:252.7}).wait(1).to({graphics:mask_1_graphics_135,x:202.9,y:250.5}).wait(1).to({graphics:mask_1_graphics_136,x:205.2,y:248.3}).wait(1).to({graphics:mask_1_graphics_137,x:207.4,y:245.9}).wait(1).to({graphics:mask_1_graphics_138,x:209.5,y:243.6}).wait(1).to({graphics:mask_1_graphics_139,x:211.5,y:241.1}).wait(1).to({graphics:mask_1_graphics_140,x:213.5,y:238.6}).wait(1).to({graphics:mask_1_graphics_141,x:215.4,y:236.1}).wait(1).to({graphics:mask_1_graphics_142,x:217.2,y:233.5}).wait(1).to({graphics:mask_1_graphics_143,x:218.9,y:230.8}).wait(1).to({graphics:mask_1_graphics_144,x:220.6,y:228.1}).wait(1).to({graphics:mask_1_graphics_145,x:222.2,y:225.3}).wait(1).to({graphics:mask_1_graphics_146,x:223.7,y:222.5}).wait(1).to({graphics:mask_1_graphics_147,x:225.1,y:219.7}).wait(1).to({graphics:mask_1_graphics_148,x:226.5,y:216.8}).wait(1).to({graphics:mask_1_graphics_149,x:227.7,y:213.9}).wait(1).to({graphics:mask_1_graphics_150,x:228.9,y:211}).wait(1).to({graphics:mask_1_graphics_151,x:230,y:208}).wait(1).to({graphics:mask_1_graphics_152,x:231,y:205}).wait(1).to({graphics:mask_1_graphics_153,x:231.9,y:201.9}).wait(1).to({graphics:mask_1_graphics_154,x:232.7,y:198.8}).wait(1).to({graphics:mask_1_graphics_155,x:233.4,y:195.7}).wait(1).to({graphics:mask_1_graphics_156,x:234.1,y:192.6}).wait(1).to({graphics:mask_1_graphics_157,x:234.6,y:189.5}).wait(1).to({graphics:mask_1_graphics_158,x:235.1,y:186.4}).wait(1).to({graphics:mask_1_graphics_159,x:235.5,y:183.2}).wait(1).to({graphics:mask_1_graphics_160,x:235.8,y:180}).wait(1).to({graphics:mask_1_graphics_161,x:235.9,y:176.9}).wait(1).to({graphics:mask_1_graphics_162,x:236,y:173.7}).wait(1).to({graphics:mask_1_graphics_163,x:236.1,y:173.1}).wait(1).to({graphics:mask_1_graphics_164,x:236.1,y:176.2}).wait(1).to({graphics:mask_1_graphics_165,x:236.1,y:178.1}).wait(1).to({graphics:mask_1_graphics_166,x:236.1,y:180}).wait(1).to({graphics:mask_1_graphics_167,x:236.1,y:181.9}).wait(1).to({graphics:mask_1_graphics_168,x:236.1,y:183.8}).wait(1).to({graphics:mask_1_graphics_169,x:236.1,y:185.7}).wait(1).to({graphics:mask_1_graphics_170,x:236.2,y:187.6}).wait(1).to({graphics:mask_1_graphics_171,x:236.2,y:189.5}).wait(1).to({graphics:mask_1_graphics_172,x:236.2,y:191.4}).wait(1).to({graphics:mask_1_graphics_173,x:236.2,y:193.3}).wait(1).to({graphics:mask_1_graphics_174,x:236.2,y:195.2}).wait(1).to({graphics:mask_1_graphics_175,x:236.3,y:197}).wait(1).to({graphics:mask_1_graphics_176,x:236.3,y:198.9}).wait(1).to({graphics:mask_1_graphics_177,x:236.3,y:200.7}).wait(1).to({graphics:mask_1_graphics_178,x:236.3,y:202.6}).wait(1).to({graphics:mask_1_graphics_179,x:236.3,y:204.4}).wait(1).to({graphics:mask_1_graphics_180,x:236.3,y:206.2}).wait(1).to({graphics:mask_1_graphics_181,x:236.3,y:208}).wait(1).to({graphics:mask_1_graphics_182,x:236.3,y:209.8}).wait(1).to({graphics:mask_1_graphics_183,x:236.3,y:211.6}).wait(1).to({graphics:mask_1_graphics_184,x:236.3,y:213.4}).wait(1).to({graphics:mask_1_graphics_185,x:236.3,y:215.1}).wait(1).to({graphics:mask_1_graphics_186,x:236.3,y:216.9}).wait(1).to({graphics:mask_1_graphics_187,x:236.3,y:218.6}).wait(1).to({graphics:mask_1_graphics_188,x:236.3,y:220.4}).wait(1).to({graphics:mask_1_graphics_189,x:236.3,y:222.1}).wait(1).to({graphics:mask_1_graphics_190,x:236.3,y:223.7}).wait(1).to({graphics:mask_1_graphics_191,x:236.2,y:225.4}).wait(1).to({graphics:mask_1_graphics_192,x:236.2,y:227.1}).wait(1).to({graphics:mask_1_graphics_193,x:236.2,y:228.7}).wait(1).to({graphics:mask_1_graphics_194,x:236.2,y:230.3}).wait(1).to({graphics:mask_1_graphics_195,x:236.2,y:232}).wait(1).to({graphics:mask_1_graphics_196,x:236.1,y:233.5}).wait(1).to({graphics:mask_1_graphics_197,x:236.1,y:235.1}).wait(1).to({graphics:mask_1_graphics_198,x:236.1,y:236.7}).wait(1).to({graphics:mask_1_graphics_199,x:236.1,y:238.2}).wait(1).to({graphics:mask_1_graphics_200,x:236,y:239.7}).wait(1).to({graphics:mask_1_graphics_201,x:236,y:241.2}).wait(1).to({graphics:mask_1_graphics_202,x:236,y:242.7}).wait(1).to({graphics:mask_1_graphics_203,x:236,y:244.1}).wait(1).to({graphics:mask_1_graphics_204,x:236,y:245.5}).wait(1).to({graphics:mask_1_graphics_205,x:235.9,y:248.7}).wait(1).to({graphics:mask_1_graphics_206,x:236,y:251.7}).wait(1).to({graphics:mask_1_graphics_207,x:236,y:254.7}).wait(1).to({graphics:mask_1_graphics_208,x:236.1,y:257.5}).wait(1).to({graphics:mask_1_graphics_209,x:236.1,y:260.1}).wait(1).to({graphics:mask_1_graphics_210,x:236.2,y:262.7}).wait(1).to({graphics:mask_1_graphics_211,x:236.2,y:265.1}).wait(1).to({graphics:mask_1_graphics_212,x:236.3,y:267.3}).wait(1).to({graphics:mask_1_graphics_213,x:236.3,y:269.4}).wait(1).to({graphics:mask_1_graphics_214,x:236.4,y:271.3}).wait(1).to({graphics:mask_1_graphics_215,x:236.4,y:273.1}).wait(1).to({graphics:mask_1_graphics_216,x:236.4,y:274.7}).wait(1).to({graphics:mask_1_graphics_217,x:236.4,y:276.2}).wait(1).to({graphics:mask_1_graphics_218,x:236.4,y:277.5}).wait(1).to({graphics:mask_1_graphics_219,x:236.3,y:278.6}).wait(1).to({graphics:mask_1_graphics_220,x:236.3,y:279.6}).wait(1).to({graphics:mask_1_graphics_221,x:236.3,y:280.3}).wait(1).to({graphics:mask_1_graphics_222,x:236.2,y:281}).wait(1).to({graphics:mask_1_graphics_223,x:236.2,y:281.4}).wait(1).to({graphics:mask_1_graphics_224,x:236.1,y:281.7}).wait(1).to({graphics:mask_1_graphics_225,x:236.1,y:281.8}).wait(1).to({graphics:mask_1_graphics_226,x:236.2,y:281.8}).wait(1).to({graphics:mask_1_graphics_227,x:236.2,y:281.9}).wait(1).to({graphics:mask_1_graphics_228,x:236.3,y:281.9}).wait(1).to({graphics:mask_1_graphics_229,x:236.2,y:281.9}).wait(31));

	// 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(45,1,1).p("AQmU8QAzkCijkCQhwixjUh1QgdgQgegOQhlgxieg3QjChBhrgkQidg2hRgdQgtgPgUgIQimg9hyg7QkhiViAjmQh4jaA9jkQA9jiDXiPQEHiuEKggQEGggErBlQC6BAB+BbQB8BaB7Cf");
	this.shape_2.setTransform(290.5,232);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(45,1,1).p("AzWRQQJfHYKPB1QFCA6EfhyQEWhuCqjuQErmikJmkQh+jIkAh8Qhlgwieg3QjChAhrglQj1hUg7gVQimg9hxg7QkiiWh/jnQh5jaA9jjQA9jjDYiPQEGitELghQEFggEsBmQC6BAB+BbQB8BaB7Ce");
	this.shape_3.setTransform(273.9,269.2);

	var maskedShapeInstanceList = [this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2}]},130).to({state:[{t:this.shape_3}]},34).wait(96));

	// 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(45,1,1).p("AtjIYQgNgVgMgWQh5jaA9jkQA9jhDYiPQEGiuELggQEFggEsBlQC6BAB+BbQB8BaB7Cf");
	this.shape_4.setTransform(280.4,151.6);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(130).to({_off:false},0).wait(130));

	// Layer 3 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_9 = new cjs.Graphics().p("Am8fkMAfdg9HQMqGhEXNjQEVNkmhMqQmhMqtjEWQlcBvlSAAQn7AAnlj6g");
	var mask_2_graphics_10 = new cjs.Graphics().p("AmJf9MAd3g96QM0GMEtNcQEsNcmMM1QmMM0tbEtQl0CBltAAQnfAAnRjhg");
	var mask_2_graphics_11 = new cjs.Graphics().p("EgFWAgVMAcQg+qQM+F3FENUQFCNTl3M/Ql2M/tUFCQmLCVmGAAQnFAAm9jJg");
	var mask_2_graphics_12 = new cjs.Graphics().p("EgEhAgsMAang/YQNIFhFZNMQFYNLlhNIQlhNItLFYQmhCqmhABQmqAAmnizg");
	var mask_2_graphics_13 = new cjs.Graphics().p("EgDtAhBMAY+hACQNRFLFvNCQFtNClLNRQlLNRtCFuQm2DAm7AAQmQAAmSidg");
	var mask_2_graphics_14 = new cjs.Graphics().p("EgC3AhWMAXThArQNZE1GEM5QGDM5k1NYQk1NZs4GDQnLDYnWAAQl1AAl7iIg");
	var mask_2_graphics_15 = new cjs.Graphics().p("EgCBAhoMAVnhBPQNhEfGZMuQGZMukfNgQkfNhstGYQngDxnwAAQlcAAljh2g");
	var mask_2_graphics_16 = new cjs.Graphics().p("EgBKAh6MAT6hByQNoEIGuMjQGtMkkINnQkINosiGtQnzELoMAAQlCAAlKhkg");
	var mask_2_graphics_17 = new cjs.Graphics().p("EgATAiKMASNhCRQNuDxHDMYQHCMYjyNuQjxNusXHCQoFEmooAAQkoAAkxhUg");
	var mask_2_graphics_18 = new cjs.Graphics().p("EAAjAiYMAQghCtQN0DaHYMMQHWMMjbN0QjbN0sLHXQoVFBpGABQkOAAkYhGg");
	var mask_2_graphics_19 = new cjs.Graphics().p("EABbAilMAOxhDHQN5DEHsL/QHqMAjEN5QjDN5r/HrQomFfpjAAQj0AAj9g4g");
	var mask_2_graphics_20 = new cjs.Graphics().p("EACTAixMANBhDeQN/CtH/LyQH+LzitN9QisN/ryH+Qo1F+qCAAQjZAAjigsg");
	var mask_2_graphics_21 = new cjs.Graphics().p("EADMAi8MALRhDzQOCCWITLkQIRLmiWOCQiVOCrkISQpDGdqiAAQi+AAjFggg");
	var mask_2_graphics_22 = new cjs.Graphics().p("EAEEAjFMAJhhEEQOGB+IlLXQIkLYh+OFQh+OGrWIkQpQG/rDAAQiiAAipgXg");
	var mask_2_graphics_23 = new cjs.Graphics().p("EAE9AjMMAHwhERQOJBmI4LIQI3LJhnOJQhnOJrII3QpcHhrlAAQiGAAiLgQg");
	var mask_2_graphics_24 = new cjs.Graphics().p("EAF2AjSMAF+hEdQOMBPJKK6QJJK6hPOKQhPOMq5JJQpoIEsJAAQhpAAhsgJg");
	var mask_2_graphics_25 = new cjs.Graphics().p("EAGvAjWMAENhElQONA4JcKqQJbKrg4OMQg3ONqqJbQpxIpsvAAQhLAAhNgFg");
	var mask_2_graphics_26 = new cjs.Graphics().p("EAHoAjZMACbhEqQOOAgJuKaQJsKbggONQggOOqaJtQp6JPtWAAQgsAAgtgCg");
	var mask_2_graphics_27 = new cjs.Graphics().p("EAIhAjbMAAphEtQOPAJJ/KJQJ9KLgIONQgJOPqJJ+QqCJ2uAAAIgYAAg");
	var mask_2_graphics_28 = new cjs.Graphics().p("EAISghSQOOgPKPJ5QKOJ6APOOQAPOOp4KOQp6KQuPAPg");
	var mask_2_graphics_29 = new cjs.Graphics().p("EAHZghPQONgmKgJnQKeJpAnOOQAmONpnKeQppKfuOAng");
	var mask_2_graphics_30 = new cjs.Graphics().p("EAGgghKQOMg+KvJWQKuJXA+OMQA+OMpWKuQpXKvuMA+g");
	var mask_2_graphics_31 = new cjs.Graphics().p("EAFnghDQOKhWK+JEQK+JGBVOKQBWOKpEK9QpFK+uLBWg");
	var mask_2_graphics_32 = new cjs.Graphics().p("EAEugg6QOIhtLNIyQLMIzBtOIQBtOHoyLMQoyLNuIBtg");
	var mask_2_graphics_33 = new cjs.Graphics().p("EAD1gguQOFiFLbIfQLaIgCFOFQCEOEoeLaQogLcuFCEg");
	var mask_2_graphics_34 = new cjs.Graphics().p("EAC9gghQOBibLpILQLoINCcOBQCbOBoLLnQoNLquBCbg");
	var mask_2_graphics_35 = new cjs.Graphics().p("EACEggRQN9izL2H4QL2H6CzN9QCzN8n5L1Qn5L2t9Czg");
	var mask_2_graphics_36 = new cjs.Graphics().p("ABN//QN3jKMDHlQMDHlDKN4QDJN3nkMCQnlMDt4DKg");
	var mask_2_graphics_37 = new cjs.Graphics().p("AAV/rQNyjhMQHRQMOHRDhNzQDhNxnRMOQnRMQtyDhg");
	var mask_2_graphics_38 = new cjs.Graphics().p("Agh/UQNrj4MbG8QMaG9D4NsQD3Nrm8MaQm8MctsD3g");
	var mask_2_graphics_39 = new cjs.Graphics().p("AhY+8QNkkOMnGnQMlGoEONmQEPNkmoMlQmoMntlEOg");
	var mask_2_graphics_40 = new cjs.Graphics().p("AiO+iQNdkkMxGSQMwGTElNeQEkNdmSMwQmTMyteEkg");
	var mask_2_graphics_41 = new cjs.Graphics().p("AjE+FQNVk7M7F9QM7F+E7NWQE6NVl9M6Ql9M8tWE7g");
	var mask_2_graphics_42 = new cjs.Graphics().p("Aj59mQNNlRNEFnQNEFpFRNNQFRNNloNEQloNFtNFQg");
	var mask_2_graphics_43 = new cjs.Graphics().p("Akt9GQNDlmNOFRQNNFTFmNFQFnNDlSNNQlSNOtFFng");
	var mask_2_graphics_44 = new cjs.Graphics().p("Alh8jQM6l8NWE7QNVE9F8M7QF8M6k7NVQk9NXs7F8g");
	var mask_2_graphics_45 = new cjs.Graphics().p("AmU7+QMvmRNeElQNeEmGRMxQGRMwklNdQkmNesxGSg");
	var mask_2_graphics_46 = new cjs.Graphics().p("AnH7XQMlmnNlEPQNlEQGmMnQGnMmkPNjQkQNmsmGmg");
	var mask_2_graphics_47 = new cjs.Graphics().p("An56vQMam7NsD4QNrD6G8MbQG7Mbj5NqQj5NssbG7g");
	var mask_2_graphics_48 = new cjs.Graphics().p("Aoq6EQMPnQNxDiQNyDjHQMPQHPMPjiNwQjiNzsPHPg");
	var mask_2_graphics_49 = new cjs.Graphics().p("Apa5YQMCnjN4DKQN3DMHjMDQHkMDjLN2QjLN4sDHjg");
	var mask_2_graphics_50 = new cjs.Graphics().p("AqJ4pQL1n4N8C0QN8C1H4L2QH3L2i0N7Qi0N9r2H3g");
	var mask_2_graphics_51 = new cjs.Graphics().p("Aq435QLooLOBCcQOACeILLpQILLpidN/QidOBrpILg");
	var mask_2_graphics_52 = new cjs.Graphics().p("Arl3HQLboeODCFQOECHIeLbQIeLbiGOCQiFOFrbIeg");
	var mask_2_graphics_53 = new cjs.Graphics().p("AsS2TQLNoxOGBuQOHBvIxLNQIxLNhvOFQhuOIrNIxg");
	var mask_2_graphics_54 = new cjs.Graphics().p("As+1eQK+pDOJBXQOKBXJDK+QJDK+hXOIQhXOLq+JDg");
	var mask_2_graphics_55 = new cjs.Graphics().p("Atp0mQKvpVOKA+QOMBBJVKuQJVKvg/OKQhAONquJVg");
	var mask_2_graphics_56 = new cjs.Graphics().p("AuTzuQKfpmOMAnQONApJnKfQJmKfgoOLQgoOOqfJng");
	var mask_2_graphics_57 = new cjs.Graphics().p("Au8yzQKOp4ONAQQOOARJ4KPQJ3KPgQOMQgQOPqPJ3g");
	var mask_2_graphics_58 = new cjs.Graphics().p("Avlx3QJ/qIOMgIQOOgGKJJ+QKIJ+AHOMQAIOPp/KIg");
	var mask_2_graphics_59 = new cjs.Graphics().p("AwMw6QJtqYOMggQOOgeKYJuQKZJtAfOLQAfOPpuKYg");
	var mask_2_graphics_60 = new cjs.Graphics().p("AwmwQQJhqjOMgvQONguKjJiQKkJiAuOKQAvOOpiKjg");
	var mask_2_graphics_61 = new cjs.Graphics().p("AxAvlQJWquOLg/QOMg9KuJWQKtJWA/OKQA+OMpWKug");
	var mask_2_graphics_62 = new cjs.Graphics().p("AxZu5QJKq4OKhPQOKhNK4JJQK5JKBOOJQBOOMpKK4g");
	var mask_2_graphics_63 = new cjs.Graphics().p("AxxuNQI9rCOIhfQOKhdLCI+QLCI+BeOHQBeOKo+LCg");
	var mask_2_graphics_64 = new cjs.Graphics().p("AyJthQIxrMOGhuQOIhsLMIxQLMIxBtOGQBuOIoxLMg");
	var mask_2_graphics_65 = new cjs.Graphics().p("AyhszQIlrWOEh+QOGh8LVIlQLWIlB9ODQB9OGokLWg");
	var mask_2_graphics_66 = new cjs.Graphics().p("Ay4sGQIYrfOCiNQOEiMLfIYQLfIYCMOCQCNOEoYLfg");
	var mask_2_graphics_67 = new cjs.Graphics().p("AzOrXQILroN/idQOBicLoIMQLpILCcN/QCcOBoLLog");
	var mask_2_graphics_68 = new cjs.Graphics().p("AzkqoQH+rxN9itQN+irLxH/QLxH+CsN8QCsN+n+Lxg");
	var mask_2_graphics_69 = new cjs.Graphics().p("Az5p4QHxr6N5i9QN7i6L6HxQL6HxC7N5QC8N8nyL6g");
	var mask_2_graphics_70 = new cjs.Graphics().p("A0OpIQHksDN2jLQN3jKMDHkQMCHkDLN1QDLN4nkMDg");
	var mask_2_graphics_71 = new cjs.Graphics().p("A0ioYQHWsLNyjaQN0jaMLHXQMLHWDaNyQDaN1nWMKg");
	var mask_2_graphics_72 = new cjs.Graphics().p("A02nnQHJsSNujrQNwjoMTHJQMTHJDpNuQDqNwnJMTg");
	var mask_2_graphics_73 = new cjs.Graphics().p("A1Jm1QG7sbNrj5QNrj4MbG8QMaG7D5NpQD5Ntm7Mag");
	var mask_2_graphics_74 = new cjs.Graphics().p("A1cmDQGusiNmkIQNnkHMiGtQMiGtEINmQEINnmtMjg");
	var mask_2_graphics_75 = new cjs.Graphics().p("A1ulQQGgsqNikXQNikWMpGfQMqGfEWNiQEYNimgMqg");
	var mask_2_graphics_76 = new cjs.Graphics().p("A1/kdQGRsxNekmQNcklMxGRQMxGRElNdQEnNdmSMxg");
	var mask_2_graphics_77 = new cjs.Graphics().p("A2PjpQGDs4NYk2QNXkzM4GDQM3GDE1NXQE1NYmDM4g");
	var mask_2_graphics_78 = new cjs.Graphics().p("A2fi2QF0s+NTlEQNSlDM+F1QM+F1FDNSQFENSl0M+g");
	var mask_2_graphics_79 = new cjs.Graphics().p("A2viBQFmtFNNlTQNMlRNFFmQNFFmFSNNQFSNMlmNFg");
	var mask_2_graphics_80 = new cjs.Graphics().p("A2+hMQFYtLNHliQNGlgNLFYQNKFYFhNGQFhNHlXNKg");
	var mask_2_graphics_81 = new cjs.Graphics().p("A3MgXQFJtRNBlwQNAluNQFJQNRFJFvNAQFwNAlJNQg");
	var mask_2_graphics_82 = new cjs.Graphics().p("A3ZAdQE6tVM6l+QM6l9NWE6QNWE6F9M6QF/M6k7NWg");
	var mask_2_graphics_83 = new cjs.Graphics().p("A3mBTQErtaM0mNQMzmLNbErQNbErGMMzQGNMzksNcg");
	var mask_2_graphics_84 = new cjs.Graphics().p("A3yCJQEctfMtmbQMrmaNhEdQNhEcGZMsQGbMskcNhg");
	var mask_2_graphics_85 = new cjs.Graphics().p("A3+DAQEOtlMlmpQMkmnNmENQNlEOGoMkQGpMlkONlg");
	var mask_2_graphics_86 = new cjs.Graphics().p("A4ID2QD+toMdm3QMem2NpD+QNqD/G2MdQG3Mdj+Nqg");
	var mask_2_graphics_87 = new cjs.Graphics().p("A4TEtQDvttMWnEQMWnENuDvQNuDwHEMVQHEMWjvNug");
	var mask_2_graphics_88 = new cjs.Graphics().p("A4cFlQDgtxMNnTQMOnRNyDgQNyDgHSMNQHSMOjgNyg");
	var mask_2_graphics_89 = new cjs.Graphics().p("A4lGcQDQt1MGngQMFneN2DRQN2DQHfMFQHfMGjQN2g");
	var mask_2_graphics_90 = new cjs.Graphics().p("A4rHFQDFt4L/npQMAnoN4DFQN5DFHoL/QHqMAjGN4g");
	var mask_2_graphics_91 = new cjs.Graphics().p("A4xHtQC6t5L5n0QL5nxN7C6QN7C6HyL5QHzL5i6N7g");
	var mask_2_graphics_92 = new cjs.Graphics().p("A42IWQCvt8Lyn9QLzn7N9CvQN+CvH7LyQH9LzivN9g");
	var mask_2_graphics_93 = new cjs.Graphics().p("A47I/QCjt+LtoGQLsoFN/CjQOACkIFLsQIGLsikOAg");
	var mask_2_graphics_94 = new cjs.Graphics().p("A5AJoQCZuALloQQLmoOOBCYQOCCYIOLmQIPLmiYOBg");
	var mask_2_graphics_95 = new cjs.Graphics().p("A5EKRQCNuCLfoZQLfoXODCNQODCMIYLfQIZLfiNODg");
	var mask_2_graphics_96 = new cjs.Graphics().p("A5IK6QCCuELYoiQLZogOECBQOFCCIhLYQIiLYiCOFg");
	var mask_2_graphics_97 = new cjs.Graphics().p("A5LLjQB2uFLRorQLSoqOGB2QOGB2IqLRQIrLSh2OGg");
	var mask_2_graphics_98 = new cjs.Graphics().p("A5OMNQBquHLKo0QLMozOGBrQOIBqIzLKQI0LLhqOHg");
	var mask_2_graphics_99 = new cjs.Graphics().p("A5RM2QBfuILDo9QLEo8OIBfQOJBgI8LDQI9LDhfOJg");
	var mask_2_graphics_100 = new cjs.Graphics().p("A5UNfQBUuJK8pGQK9pFOJBUQOKBUJFK8QJGK8hUOKg");
	var mask_2_graphics_101 = new cjs.Graphics().p("A5WOJQBJuKK0pPQK1pOOKBJQOLBIJOK1QJPK0hJOLg");
	var mask_2_graphics_102 = new cjs.Graphics().p("A5YOyQA9uMKtpWQKupWOLA9QOMA9JWKsQJYKtg9OMg");
	var mask_2_graphics_103 = new cjs.Graphics().p("A5ZPcQAxuNKlpfQKnpfOLAyQONAyJfKlQJgKlgyOMg");
	var mask_2_graphics_104 = new cjs.Graphics().p("A5bQFQAnuNKdpnQKfpoOMAnQONAmJnKdQJpKegmONg");
	var mask_2_graphics_105 = new cjs.Graphics().p("A5bQvQAauOKWpwQKXpvOMAaQOOAbJwKWQJwKVgaOOg");
	var mask_2_graphics_106 = new cjs.Graphics().p("A5cRYQAPuNKOp5QKPp4ONAQQONAPJ4KOQJ6KNgQOOg");
	var mask_2_graphics_107 = new cjs.Graphics().p("A5cSCQAEuOKFqAQKHqAONADQOOAEKAKGQKCKFgEOOg");
	var mask_2_graphics_108 = new cjs.Graphics().p("Avml9QJ+qJONgHQOOgIKJJ9QKJJ+AIOOMhEpAAlQgIuOJ+qIg");
	var mask_2_graphics_109 = new cjs.Graphics().p("Av5l3QJ2qQONgUQOOgTKQJ1QKRJ2AUONMhEoABdQgTuOJ1qQg");
	var mask_2_graphics_110 = new cjs.Graphics().p("AwMlxQJuqYONgfQONgeKYJsQKaJtAeOOMhEmACUQgfuOJtqYg");
	var mask_2_graphics_111 = new cjs.Graphics().p("AwelqQJmqgOMgqQOMgqKgJkQKiJkAqONMhEkADMQgquNJkqgg");
	var mask_2_graphics_112 = new cjs.Graphics().p("AwwlkQJdqnOMg2QOMg1KnJcQKpJcA2OMMhEhAECQg2uMJcqog");
	var mask_2_graphics_113 = new cjs.Graphics().p("AxBlcQJUqwOLhBQOLhBKwJUQKwJTBBOLMhEdAE6QhBuLJTqvg");
	var mask_2_graphics_114 = new cjs.Graphics().p("AxSlWQJMq2OJhNQOLhMK2JKQK4JMBNOJMhEZAFyQhNuLJLq3g");
	var mask_2_graphics_115 = new cjs.Graphics().p("AyWk0QImrVOEh9QOGh9LVIkQLWImB9OEMhD/AJbQh9uFIkrVg");
	var mask_2_graphics_116 = new cjs.Graphics().p("AzRkPQH+rxN9itQN9iuLxH9QLzH+CuN8MhDZANEQiut9H9ryg");
	var mask_2_graphics_117 = new cjs.Graphics().p("A0EjlQHVsMNyjdQNzjdMMHUQMNHVDdNyMhCnAQqQjctzHTsMg");
	var mask_2_graphics_118 = new cjs.Graphics().p("A0ui3QGqskNmkMQNlkMMkGpQMlGqEMNlMhBnAUOQkMtmGpskg");
	var mask_2_graphics_119 = new cjs.Graphics().p("A1QiFQF/s6NWk6QNVk7M6F+QM7F+E6NVMhAcAXuQk6tWF9s6g");
	var mask_2_graphics_120 = new cjs.Graphics().p("A1phQQFStNNEloQNDlnNNFQQNPFSFoNEMg/GAbIQlotFFRtNg");
	var mask_2_graphics_121 = new cjs.Graphics().p("A16gWQEltfMwmUQMumUNeEjQNgEjGUMwMg9jAeeQmUsvEiteg");
	var mask_2_graphics_122 = new cjs.Graphics().p("A2BAlQD1tsMam/QMYm/NsD0QNuD1G/MZMg71AhvQm/saD0ttg");
	var mask_2_graphics_123 = new cjs.Graphics().p("A2ABlQDGt4MBnpQL/npN4DEQN6DGHpMAMg58Ak5QnpsADEt5g");
	var mask_2_graphics_124 = new cjs.Graphics().p("A11CoQCWuCLloRQLjoSOCCVQODCVISLlMg34An9QoSrlCVuCg");
	var mask_2_graphics_125 = new cjs.Graphics().p("A1iDuQBluJLIo4QLGo5OJBkQOKBlI5LIMg1rAq5Qo4rHBkuJg");
	var mask_2_graphics_126 = new cjs.Graphics().p("A1HE2QA1uMKopfQKnpeONA0QOOA0JfKoMgzTAtvQpeqoAzuOg");
	var mask_2_graphics_127 = new cjs.Graphics().p("A0iGBQAEuOKHqCQKGqCONADQOQAEKCKGMgwxAwbQqBqHACuPg");
	var mask_2_graphics_128 = new cjs.Graphics().p("Az1HOQgtuNJkqkQJjqjOMguQOPgtKkJjMguHAy+QqjpkgvuOg");
	var mask_2_graphics_129 = new cjs.Graphics().p("Ay/IeQheuKI+rDQI+rEOJheQOLhfLEI+MgrUA1YQrDo+hfuKg");
	var mask_2_graphics_130 = new cjs.Graphics().p("AyBJuQiOuDIYriQIXrhODiPQOEiPLiIXMgoZA3oQrhoXiQuEg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_2_graphics_9,x:276.8,y:227}).wait(1).to({graphics:mask_2_graphics_10,x:276.8,y:227}).wait(1).to({graphics:mask_2_graphics_11,x:276.9,y:227}).wait(1).to({graphics:mask_2_graphics_12,x:276.9,y:227.1}).wait(1).to({graphics:mask_2_graphics_13,x:276.8,y:227}).wait(1).to({graphics:mask_2_graphics_14,x:276.8,y:227}).wait(1).to({graphics:mask_2_graphics_15,x:276.8,y:227}).wait(1).to({graphics:mask_2_graphics_16,x:276.8,y:227}).wait(1).to({graphics:mask_2_graphics_17,x:276.8,y:227}).wait(1).to({graphics:mask_2_graphics_18,x:276.7,y:227}).wait(1).to({graphics:mask_2_graphics_19,x:276.7,y:226.9}).wait(1).to({graphics:mask_2_graphics_20,x:276.7,y:226.9}).wait(1).to({graphics:mask_2_graphics_21,x:276.6,y:226.8}).wait(1).to({graphics:mask_2_graphics_22,x:276.6,y:226.8}).wait(1).to({graphics:mask_2_graphics_23,x:276.6,y:226.8}).wait(1).to({graphics:mask_2_graphics_24,x:276.5,y:226.7}).wait(1).to({graphics:mask_2_graphics_25,x:276.5,y:226.7}).wait(1).to({graphics:mask_2_graphics_26,x:276.5,y:226.7}).wait(1).to({graphics:mask_2_graphics_27,x:276.5,y:226.7}).wait(1).to({graphics:mask_2_graphics_28,x:276.5,y:226.7}).wait(1).to({graphics:mask_2_graphics_29,x:276.5,y:226.6}).wait(1).to({graphics:mask_2_graphics_30,x:276.5,y:226.4}).wait(1).to({graphics:mask_2_graphics_31,x:276.5,y:226.2}).wait(1).to({graphics:mask_2_graphics_32,x:276.6,y:225.9}).wait(1).to({graphics:mask_2_graphics_33,x:276.6,y:225.5}).wait(1).to({graphics:mask_2_graphics_34,x:276.6,y:225}).wait(1).to({graphics:mask_2_graphics_35,x:276.7,y:224.5}).wait(1).to({graphics:mask_2_graphics_36,x:276.7,y:223.9}).wait(1).to({graphics:mask_2_graphics_37,x:276.7,y:223.3}).wait(1).to({graphics:mask_2_graphics_38,x:276.7,y:222.5}).wait(1).to({graphics:mask_2_graphics_39,x:276.8,y:221.7}).wait(1).to({graphics:mask_2_graphics_40,x:276.8,y:220.8}).wait(1).to({graphics:mask_2_graphics_41,x:276.8,y:219.9}).wait(1).to({graphics:mask_2_graphics_42,x:276.8,y:218.8}).wait(1).to({graphics:mask_2_graphics_43,x:276.8,y:217.8}).wait(1).to({graphics:mask_2_graphics_44,x:276.8,y:216.6}).wait(1).to({graphics:mask_2_graphics_45,x:276.8,y:215.4}).wait(1).to({graphics:mask_2_graphics_46,x:276.8,y:214.1}).wait(1).to({graphics:mask_2_graphics_47,x:276.7,y:212.7}).wait(1).to({graphics:mask_2_graphics_48,x:276.7,y:211.3}).wait(1).to({graphics:mask_2_graphics_49,x:276.7,y:209.8}).wait(1).to({graphics:mask_2_graphics_50,x:276.7,y:208.3}).wait(1).to({graphics:mask_2_graphics_51,x:276.6,y:206.7}).wait(1).to({graphics:mask_2_graphics_52,x:276.6,y:205}).wait(1).to({graphics:mask_2_graphics_53,x:276.5,y:203.3}).wait(1).to({graphics:mask_2_graphics_54,x:276.5,y:201.5}).wait(1).to({graphics:mask_2_graphics_55,x:276.5,y:199.7}).wait(1).to({graphics:mask_2_graphics_56,x:276.5,y:197.8}).wait(1).to({graphics:mask_2_graphics_57,x:276.5,y:195.8}).wait(1).to({graphics:mask_2_graphics_58,x:276.4,y:193.8}).wait(1).to({graphics:mask_2_graphics_59,x:276.4,y:191.7}).wait(1).to({graphics:mask_2_graphics_60,x:276.4,y:190.3}).wait(1).to({graphics:mask_2_graphics_61,x:276.4,y:188.9}).wait(1).to({graphics:mask_2_graphics_62,x:276.5,y:187.5}).wait(1).to({graphics:mask_2_graphics_63,x:276.5,y:186}).wait(1).to({graphics:mask_2_graphics_64,x:276.5,y:184.5}).wait(1).to({graphics:mask_2_graphics_65,x:276.5,y:183}).wait(1).to({graphics:mask_2_graphics_66,x:276.6,y:181.5}).wait(1).to({graphics:mask_2_graphics_67,x:276.6,y:179.9}).wait(1).to({graphics:mask_2_graphics_68,x:276.6,y:178.3}).wait(1).to({graphics:mask_2_graphics_69,x:276.6,y:176.8}).wait(1).to({graphics:mask_2_graphics_70,x:276.7,y:175.2}).wait(1).to({graphics:mask_2_graphics_71,x:276.7,y:173.5}).wait(1).to({graphics:mask_2_graphics_72,x:276.7,y:171.9}).wait(1).to({graphics:mask_2_graphics_73,x:276.7,y:170.2}).wait(1).to({graphics:mask_2_graphics_74,x:276.8,y:168.6}).wait(1).to({graphics:mask_2_graphics_75,x:276.8,y:166.9}).wait(1).to({graphics:mask_2_graphics_76,x:276.8,y:165.2}).wait(1).to({graphics:mask_2_graphics_77,x:276.8,y:163.5}).wait(1).to({graphics:mask_2_graphics_78,x:276.8,y:161.7}).wait(1).to({graphics:mask_2_graphics_79,x:276.8,y:160}).wait(1).to({graphics:mask_2_graphics_80,x:276.8,y:158.2}).wait(1).to({graphics:mask_2_graphics_81,x:276.8,y:156.4}).wait(1).to({graphics:mask_2_graphics_82,x:276.8,y:154.7}).wait(1).to({graphics:mask_2_graphics_83,x:276.8,y:152.9}).wait(1).to({graphics:mask_2_graphics_84,x:276.8,y:151.1}).wait(1).to({graphics:mask_2_graphics_85,x:276.8,y:149.2}).wait(1).to({graphics:mask_2_graphics_86,x:276.8,y:147.4}).wait(1).to({graphics:mask_2_graphics_87,x:276.8,y:145.6}).wait(1).to({graphics:mask_2_graphics_88,x:276.8,y:143.7}).wait(1).to({graphics:mask_2_graphics_89,x:276.7,y:141.9}).wait(1).to({graphics:mask_2_graphics_90,x:276.7,y:140.5}).wait(1).to({graphics:mask_2_graphics_91,x:276.7,y:139.2}).wait(1).to({graphics:mask_2_graphics_92,x:276.7,y:137.8}).wait(1).to({graphics:mask_2_graphics_93,x:276.7,y:136.5}).wait(1).to({graphics:mask_2_graphics_94,x:276.6,y:135.1}).wait(1).to({graphics:mask_2_graphics_95,x:276.6,y:133.7}).wait(1).to({graphics:mask_2_graphics_96,x:276.6,y:132.4}).wait(1).to({graphics:mask_2_graphics_97,x:276.6,y:131}).wait(1).to({graphics:mask_2_graphics_98,x:276.6,y:129.6}).wait(1).to({graphics:mask_2_graphics_99,x:276.6,y:128.3}).wait(1).to({graphics:mask_2_graphics_100,x:276.5,y:126.9}).wait(1).to({graphics:mask_2_graphics_101,x:276.5,y:125.5}).wait(1).to({graphics:mask_2_graphics_102,x:276.5,y:124.1}).wait(1).to({graphics:mask_2_graphics_103,x:276.5,y:122.7}).wait(1).to({graphics:mask_2_graphics_104,x:276.5,y:121.4}).wait(1).to({graphics:mask_2_graphics_105,x:276.5,y:120}).wait(1).to({graphics:mask_2_graphics_106,x:276.5,y:118.6}).wait(1).to({graphics:mask_2_graphics_107,x:276.5,y:117.2}).wait(1).to({graphics:mask_2_graphics_108,x:276.5,y:117.7}).wait(1).to({graphics:mask_2_graphics_109,x:276.5,y:119.1}).wait(1).to({graphics:mask_2_graphics_110,x:276.4,y:120.5}).wait(1).to({graphics:mask_2_graphics_111,x:276.4,y:121.9}).wait(1).to({graphics:mask_2_graphics_112,x:276.3,y:123.2}).wait(1).to({graphics:mask_2_graphics_113,x:276.2,y:124.6}).wait(1).to({graphics:mask_2_graphics_114,x:276.1,y:126}).wait(1).to({graphics:mask_2_graphics_115,x:275.4,y:131.8}).wait(1).to({graphics:mask_2_graphics_116,x:274.5,y:137.6}).wait(1).to({graphics:mask_2_graphics_117,x:273.2,y:143.4}).wait(1).to({graphics:mask_2_graphics_118,x:271.6,y:149.1}).wait(1).to({graphics:mask_2_graphics_119,x:269.7,y:154.7}).wait(1).to({graphics:mask_2_graphics_120,x:267.6,y:160.2}).wait(1).to({graphics:mask_2_graphics_121,x:265.1,y:165.5}).wait(1).to({graphics:mask_2_graphics_122,x:262.3,y:170.8}).wait(1).to({graphics:mask_2_graphics_123,x:259.3,y:175.8}).wait(1).to({graphics:mask_2_graphics_124,x:256,y:180.7}).wait(1).to({graphics:mask_2_graphics_125,x:252.5,y:185.4}).wait(1).to({graphics:mask_2_graphics_126,x:248.7,y:190}).wait(1).to({graphics:mask_2_graphics_127,x:244.6,y:194.3}).wait(1).to({graphics:mask_2_graphics_128,x:240.4,y:198.4}).wait(1).to({graphics:mask_2_graphics_129,x:235.9,y:202.2}).wait(1).to({graphics:mask_2_graphics_130,x:231.3,y:205.7}).wait(130));

	// 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(45,1,1).p("ACcM6QgagJgWgIQj1hUg7gVQimg9hxg7QkiiWh/jnQh5jZA9jjQA9jjDYiPQEGitELghQEFggEsBmQC6BAB+BbQB8BaB7Ce");
	this.shape_5.setTransform(280.4,180.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(45,1,1).p("ALWOnQgcgQgegOQhlgxieg3QiagzhjgiQgagJgWgHQieg2hQgdQgtgPgVgIQimg9hxg7QkiiWh/jmQh5jZA9jkQA9jiDYiPQEGiuELggQEFggEsBlQC6BAB+BbQB8BaB7Cf");
	this.shape_6.setTransform(280.4,191.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(45,1,1).p("AkIaEQA+AOA9ALQFCA6EfhyQEVhuCrjuQEqmikImkQh/jIkAh8Qhlgwieg3QjChAhrglQj1hUg6gVQimg9hyg7QkhiWiAjnQh4jaA9jjQA9jjDXiPQEHitEKghQEGggErBmQC6BAB+BbQB8BaB7Ce");
	this.shape_7.setTransform(290.5,269.2);

	var maskedShapeInstanceList = [this.shape_5,this.shape_6,this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5}]},9).to({state:[{t:this.shape_6}]},55).to({state:[{t:this.shape_7}]},66).wait(130));

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


(lib.ar_triangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjXjAIAJAFIA0AbQAaAPAcAMQAbAMAaAFQAbAGAaAAQAcACAcgHQAZgHAagOIA1gcQAagOAYgPIjaGDg");
	this.shape.setTransform(1.6,-0.8,0.562,0.562,-92.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.9,-12.4,22.5,24.3);


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

	// Layer 2
	this.instance = new lib.ar_triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(143.4,-92,1,1,-117,0,0,-9.8,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-265,guide:{path:[143.4,-91.9,138.9,-104.3,133.4,-111.9,127.8,-119.5,118.8,-125.4,109.8,-131.3,102.5,-132.8,95.3,-134.3,91.3,-130,89.3,-127.9,90.3,-124.4,91.4,-120.9,95.4,-116,103.5,-106.3,111.9,-98.8,120.2,-91.2,130.9,-82.7,141.6,-74.1,148.7,-66.5,155.8,-58.8,157.5,-49.7], orient:'auto'}},134).wait(1));

	// Layer 9 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_51 = new cjs.Graphics().p("AhcAtICfh3IAaAgIihB1g");
	var mask_graphics_52 = new cjs.Graphics().p("AhhAnICgh2IAjAqIihB2g");
	var mask_graphics_53 = new cjs.Graphics().p("AhlAiICfh3IAsA1IihB2g");
	var mask_graphics_54 = new cjs.Graphics().p("AhqAdICgh3IA0BAIihB1g");
	var mask_graphics_55 = new cjs.Graphics().p("AhuAXICgh3IA9BMIihB1g");
	var mask_graphics_56 = new cjs.Graphics().p("AhzASICgh3IBGBWIihB1g");
	var mask_graphics_57 = new cjs.Graphics().p("Ah3AMICgh3IBPBhIihB2g");
	var mask_graphics_58 = new cjs.Graphics().p("Ah7AHICfh3IBYBsIigB1g");
	var mask_graphics_59 = new cjs.Graphics().p("AiAABICgh2IBhB2IihB1g");
	var mask_graphics_60 = new cjs.Graphics().p("AiEgDICfh4IBqCBIihB2g");
	var mask_graphics_61 = new cjs.Graphics().p("AiJgJICgh3IBzCLIihB2g");
	var mask_graphics_62 = new cjs.Graphics().p("AiNgOICgh4IB7CWIihB3g");
	var mask_graphics_63 = new cjs.Graphics().p("AiSgTICgh4ICFChIihB2g");
	var mask_graphics_64 = new cjs.Graphics().p("AiWgZICgh4ICNCtIihB2g");
	var mask_graphics_65 = new cjs.Graphics().p("AibgeICgh4ICXC3IihB2g");
	var mask_graphics_66 = new cjs.Graphics().p("AifgkICgh4ICfDCIihB3g");
	var mask_graphics_67 = new cjs.Graphics().p("AijgpICgh4ICnDNIihB2g");
	var mask_graphics_68 = new cjs.Graphics().p("AiogvIChh3ICwDXIiiB3g");
	var mask_graphics_69 = new cjs.Graphics().p("Aisg0ICgh4IC5DiIiiB3g");
	var mask_graphics_70 = new cjs.Graphics().p("Aixg6IChh3IDCDtIiiB2g");
	var mask_graphics_71 = new cjs.Graphics().p("Ai1g/IChh4IDKD5IiiB2g");
	var mask_graphics_72 = new cjs.Graphics().p("Ai6hEIChh4IDUEDIiiB2g");
	var mask_graphics_73 = new cjs.Graphics().p("Ai+hKIChh4IDcEOIiiB3g");
	var mask_graphics_74 = new cjs.Graphics().p("AjDhPIChh4IDmEZIiiB2g");
	var mask_graphics_75 = new cjs.Graphics().p("AjHhVIChh4IDuEkIiiB3g");
	var mask_graphics_76 = new cjs.Graphics().p("AjLhaICgh4ID3EuIihB3g");
	var mask_graphics_77 = new cjs.Graphics().p("AjQhgIChh3IEAE5IiiB3g");
	var mask_graphics_78 = new cjs.Graphics().p("AjUhlICgh4IEJFEIiiB3g");
	var mask_graphics_79 = new cjs.Graphics().p("AjZhrIChh3IESFPIiiB2g");
	var mask_graphics_80 = new cjs.Graphics().p("AjdhwIChh4IEaFaIiiB3g");
	var mask_graphics_81 = new cjs.Graphics().p("Ajih2IChh3IEkFkIiiB4g");
	var mask_graphics_82 = new cjs.Graphics().p("Ajmh7IChh4IEsFwIiiB3g");
	var mask_graphics_83 = new cjs.Graphics().p("AjriAIChh4IE2F7IiiB2g");
	var mask_graphics_84 = new cjs.Graphics().p("AjviGIChh4IE+GGIiiB3g");
	var mask_graphics_85 = new cjs.Graphics().p("AjziLICgh4IFHGQIihB3g");
	var mask_graphics_86 = new cjs.Graphics().p("Aj4iRIChh3IFQGbIiiB3g");
	var mask_graphics_87 = new cjs.Graphics().p("Aj8iWICgh4IFZGmIihB3g");
	var mask_graphics_88 = new cjs.Graphics().p("AkBicIChh3IFiGxIiiB2g");
	var mask_graphics_89 = new cjs.Graphics().p("AkFihIChh4IFqG8IiiB3g");
	var mask_graphics_90 = new cjs.Graphics().p("AkKinIChh3IF0HGIiiB4g");
	var mask_graphics_91 = new cjs.Graphics().p("AkOisIChh4IF8HSIiiB3g");
	var mask_graphics_92 = new cjs.Graphics().p("AkTixIChh4IGGHcIiiB3g");
	var mask_graphics_93 = new cjs.Graphics().p("AkXi3IChh4IGOHoIiiB3g");
	var mask_graphics_94 = new cjs.Graphics().p("Akbi8ICgh4IGXHyIihB3g");
	var mask_graphics_95 = new cjs.Graphics().p("AkgjCIChh3IGgH8IiiB4g");
	var mask_graphics_96 = new cjs.Graphics().p("AkkjHICgh4IGpIIIihB3g");
	var mask_graphics_97 = new cjs.Graphics().p("AkpjNIChh3IGxITIigB2g");
	var mask_graphics_98 = new cjs.Graphics().p("AktjSIChh4IG6IeIihB3g");
	var mask_graphics_99 = new cjs.Graphics().p("AkyjYIChh3IHDIoIihB3g");
	var mask_graphics_100 = new cjs.Graphics().p("Ak2jdIChh4IHMI0IiiB3g");
	var mask_graphics_101 = new cjs.Graphics().p("Ak7jiIChh4IHVI+IihB3g");
	var mask_graphics_102 = new cjs.Graphics().p("Ak/joIChh4IHeJJIihB4g");
	var mask_graphics_103 = new cjs.Graphics().p("AlDjtICgh4IHnJUIihB3g");
	var mask_graphics_104 = new cjs.Graphics().p("AlIjzIChh3IHwJeIiiB3g");
	var mask_graphics_105 = new cjs.Graphics().p("AlMj4ICgh4IH5JqIihB3g");
	var mask_graphics_106 = new cjs.Graphics().p("AlRj+IChh3IIBJ0IihB4g");
	var mask_graphics_107 = new cjs.Graphics().p("AlVkDIChh4IIKJ/IihB4g");
	var mask_graphics_108 = new cjs.Graphics().p("AlakJIChh3IITKKIihB3g");
	var mask_graphics_109 = new cjs.Graphics().p("AlekOIChh4IIcKWIihB3g");
	var mask_graphics_110 = new cjs.Graphics().p("AlikTICgh4IIlKgIihB3g");
	var mask_graphics_111 = new cjs.Graphics().p("AlnkZIChh4IIuKrIihB4g");
	var mask_graphics_112 = new cjs.Graphics().p("AlrkeICgh4II3K2IihB3g");
	var mask_graphics_113 = new cjs.Graphics().p("AlwkkIChh4IJALBIiiB4g");
	var mask_graphics_114 = new cjs.Graphics().p("Al0kpICgh4IJJLMIihB3g");
	var mask_graphics_115 = new cjs.Graphics().p("Al5kvIChh3IJRLWIihB4g");
	var mask_graphics_116 = new cjs.Graphics().p("Al9k0IChh4IJaLhIihB4g");
	var mask_graphics_117 = new cjs.Graphics().p("AmCk6IChh3IJjLsIihB3g");
	var mask_graphics_118 = new cjs.Graphics().p("AmGk/IChh4IJsL3IihB4g");
	var mask_graphics_119 = new cjs.Graphics().p("AmKlEICgh4IJ1MCIihB3g");
	var mask_graphics_120 = new cjs.Graphics().p("AmPlKIChh4IJ+MNIihB4g");
	var mask_graphics_121 = new cjs.Graphics().p("AmTlPICgh4IKHMXIihB4g");
	var mask_graphics_122 = new cjs.Graphics().p("AmYlVIChh4IKQMjIiiB4g");
	var mask_graphics_123 = new cjs.Graphics().p("AmclaICgh4IKZMuIihB3g");
	var mask_graphics_124 = new cjs.Graphics().p("AmhlgIChh3IKhM4IihB4g");
	var mask_graphics_125 = new cjs.Graphics().p("AmlllIChh4IKqNDIihB4g");
	var mask_graphics_126 = new cjs.Graphics().p("AmqlrIChh3IKzNOIihB3g");
	var mask_graphics_127 = new cjs.Graphics().p("AmulwIChh4IK8NZIihB4g");
	var mask_graphics_128 = new cjs.Graphics().p("Amyl1ICgh4ILFNkIihB3g");
	var mask_graphics_129 = new cjs.Graphics().p("Am3l7IChh4ILONvIihB4g");
	var mask_graphics_130 = new cjs.Graphics().p("Am7mAICgh4ILXN5IihB4g");
	var mask_graphics_131 = new cjs.Graphics().p("AnAmGIChh4ILgOFIihB4g");
	var mask_graphics_132 = new cjs.Graphics().p("AnEmLIChh4ILoOQIihB3g");
	var mask_graphics_133 = new cjs.Graphics().p("AnJmRIChh3ILxOZIihB5g");
	var mask_graphics_134 = new cjs.Graphics().p("Ag7pEICgh4IL7OlIihB4g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(51).to({graphics:mask_graphics_51,x:89.7,y:-132.7}).wait(1).to({graphics:mask_graphics_52,x:90.2,y:-132.2}).wait(1).to({graphics:mask_graphics_53,x:90.6,y:-131.6}).wait(1).to({graphics:mask_graphics_54,x:91.1,y:-131.1}).wait(1).to({graphics:mask_graphics_55,x:91.5,y:-130.6}).wait(1).to({graphics:mask_graphics_56,x:92,y:-130}).wait(1).to({graphics:mask_graphics_57,x:92.4,y:-129.5}).wait(1).to({graphics:mask_graphics_58,x:92.8,y:-128.9}).wait(1).to({graphics:mask_graphics_59,x:93.3,y:-128.4}).wait(1).to({graphics:mask_graphics_60,x:93.7,y:-127.8}).wait(1).to({graphics:mask_graphics_61,x:94.2,y:-127.3}).wait(1).to({graphics:mask_graphics_62,x:94.6,y:-126.7}).wait(1).to({graphics:mask_graphics_63,x:95.1,y:-126.2}).wait(1).to({graphics:mask_graphics_64,x:95.5,y:-125.7}).wait(1).to({graphics:mask_graphics_65,x:96,y:-125.1}).wait(1).to({graphics:mask_graphics_66,x:96.4,y:-124.6}).wait(1).to({graphics:mask_graphics_67,x:96.8,y:-124}).wait(1).to({graphics:mask_graphics_68,x:97.3,y:-123.5}).wait(1).to({graphics:mask_graphics_69,x:97.7,y:-122.9}).wait(1).to({graphics:mask_graphics_70,x:98.2,y:-122.4}).wait(1).to({graphics:mask_graphics_71,x:98.6,y:-121.8}).wait(1).to({graphics:mask_graphics_72,x:99.1,y:-121.3}).wait(1).to({graphics:mask_graphics_73,x:99.5,y:-120.8}).wait(1).to({graphics:mask_graphics_74,x:100,y:-120.2}).wait(1).to({graphics:mask_graphics_75,x:100.4,y:-119.7}).wait(1).to({graphics:mask_graphics_76,x:100.8,y:-119.1}).wait(1).to({graphics:mask_graphics_77,x:101.3,y:-118.6}).wait(1).to({graphics:mask_graphics_78,x:101.7,y:-118}).wait(1).to({graphics:mask_graphics_79,x:102.2,y:-117.5}).wait(1).to({graphics:mask_graphics_80,x:102.6,y:-116.9}).wait(1).to({graphics:mask_graphics_81,x:103.1,y:-116.4}).wait(1).to({graphics:mask_graphics_82,x:103.5,y:-115.9}).wait(1).to({graphics:mask_graphics_83,x:104,y:-115.3}).wait(1).to({graphics:mask_graphics_84,x:104.4,y:-114.8}).wait(1).to({graphics:mask_graphics_85,x:104.8,y:-114.2}).wait(1).to({graphics:mask_graphics_86,x:105.3,y:-113.7}).wait(1).to({graphics:mask_graphics_87,x:105.7,y:-113.1}).wait(1).to({graphics:mask_graphics_88,x:106.2,y:-112.6}).wait(1).to({graphics:mask_graphics_89,x:106.6,y:-112}).wait(1).to({graphics:mask_graphics_90,x:107.1,y:-111.5}).wait(1).to({graphics:mask_graphics_91,x:107.5,y:-111}).wait(1).to({graphics:mask_graphics_92,x:108,y:-110.4}).wait(1).to({graphics:mask_graphics_93,x:108.4,y:-109.9}).wait(1).to({graphics:mask_graphics_94,x:108.8,y:-109.3}).wait(1).to({graphics:mask_graphics_95,x:109.3,y:-108.8}).wait(1).to({graphics:mask_graphics_96,x:109.7,y:-108.2}).wait(1).to({graphics:mask_graphics_97,x:110.2,y:-107.7}).wait(1).to({graphics:mask_graphics_98,x:110.6,y:-107.1}).wait(1).to({graphics:mask_graphics_99,x:111.1,y:-106.6}).wait(1).to({graphics:mask_graphics_100,x:111.5,y:-106.1}).wait(1).to({graphics:mask_graphics_101,x:112,y:-105.5}).wait(1).to({graphics:mask_graphics_102,x:112.4,y:-105}).wait(1).to({graphics:mask_graphics_103,x:112.8,y:-104.4}).wait(1).to({graphics:mask_graphics_104,x:113.3,y:-103.9}).wait(1).to({graphics:mask_graphics_105,x:113.7,y:-103.3}).wait(1).to({graphics:mask_graphics_106,x:114.2,y:-102.8}).wait(1).to({graphics:mask_graphics_107,x:114.6,y:-102.2}).wait(1).to({graphics:mask_graphics_108,x:115.1,y:-101.7}).wait(1).to({graphics:mask_graphics_109,x:115.5,y:-101.2}).wait(1).to({graphics:mask_graphics_110,x:115.9,y:-100.6}).wait(1).to({graphics:mask_graphics_111,x:116.4,y:-100.1}).wait(1).to({graphics:mask_graphics_112,x:116.8,y:-99.5}).wait(1).to({graphics:mask_graphics_113,x:117.3,y:-99}).wait(1).to({graphics:mask_graphics_114,x:117.7,y:-98.4}).wait(1).to({graphics:mask_graphics_115,x:118.2,y:-97.9}).wait(1).to({graphics:mask_graphics_116,x:118.6,y:-97.3}).wait(1).to({graphics:mask_graphics_117,x:119.1,y:-96.8}).wait(1).to({graphics:mask_graphics_118,x:119.5,y:-96.3}).wait(1).to({graphics:mask_graphics_119,x:119.9,y:-95.7}).wait(1).to({graphics:mask_graphics_120,x:120.4,y:-95.2}).wait(1).to({graphics:mask_graphics_121,x:120.8,y:-94.6}).wait(1).to({graphics:mask_graphics_122,x:121.3,y:-94.1}).wait(1).to({graphics:mask_graphics_123,x:121.7,y:-93.5}).wait(1).to({graphics:mask_graphics_124,x:122.2,y:-93}).wait(1).to({graphics:mask_graphics_125,x:122.6,y:-92.4}).wait(1).to({graphics:mask_graphics_126,x:123.1,y:-91.9}).wait(1).to({graphics:mask_graphics_127,x:123.5,y:-91.3}).wait(1).to({graphics:mask_graphics_128,x:123.9,y:-90.8}).wait(1).to({graphics:mask_graphics_129,x:124.4,y:-90.3}).wait(1).to({graphics:mask_graphics_130,x:124.8,y:-89.7}).wait(1).to({graphics:mask_graphics_131,x:125.3,y:-89.2}).wait(1).to({graphics:mask_graphics_132,x:125.7,y:-88.6}).wait(1).to({graphics:mask_graphics_133,x:126.2,y:-88.1}).wait(1).to({graphics:mask_graphics_134,x:86.4,y:-70.1}).wait(1));

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AFLHOQAfiEhmhvQhlhvhihJQhhhIhThNQhThOhRhhQhRhiAogqQAngrBJAPQBIAPBbA7QBZA7A3BMQA4BMAtB9");
	this.shape.setTransform(123.8,-87.1);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(51).to({_off:false},0).wait(84));

	// Layer 3 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_44 = new cjs.Graphics().p("AriuRQG7lnI1A7QI3A8FmG6QFnG7g8I1Qg7I3m7Fmg");
	var mask_1_graphics_45 = new cjs.Graphics().p("ArmuKQG4lpI1A4QI3A5FoG4QFpG5g4I1Qg5I3m4Fog");
	var mask_1_graphics_46 = new cjs.Graphics().p("ArruDQG2lrI2A1QI2A2FrG2QFrG3g2I1Qg1I3m2Frg");
	var mask_1_graphics_47 = new cjs.Graphics().p("Arwt8QG0lsI2AxQI2AzFtG0QFtG1gyI1QgzI3m0Ftg");
	var mask_1_graphics_48 = new cjs.Graphics().p("Ar1t0QGylvI2AvQI2AvFvGzQFvGygvI1QgvI3myFvg");
	var mask_1_graphics_49 = new cjs.Graphics().p("Ar6ttQGwlxI2AsQI2AtFyGwQFxGwgsI1QgtI3mwFxg");
	var mask_1_graphics_50 = new cjs.Graphics().p("Ar+tlQGtl0I2ApQI2AqF0GuQFzGtgpI1QgpI4muFzg");
	var mask_1_graphics_51 = new cjs.Graphics().p("AsDteQGrl1I2AmQI2AmF2GsQF1GsgmI0QgmI3msF2g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_1_graphics_44,x:150.3,y:-61.4}).wait(1).to({graphics:mask_1_graphics_45,x:150.2,y:-61.6}).wait(1).to({graphics:mask_1_graphics_46,x:150.2,y:-61.8}).wait(1).to({graphics:mask_1_graphics_47,x:150.2,y:-62.1}).wait(1).to({graphics:mask_1_graphics_48,x:150.2,y:-62.3}).wait(1).to({graphics:mask_1_graphics_49,x:150.1,y:-62.5}).wait(1).to({graphics:mask_1_graphics_50,x:150.1,y:-62.8}).wait(1).to({graphics:mask_1_graphics_51,x:150,y:-63}).wait(84));

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AAXDIQgkgfgigfQhUhMhRhgQhRhiAogqQAogrBIAPQBJAPBZA7QBaA8A4BLQA3BLAtB9");
	this.shape_1.setTransform(116.7,-112.6);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(44).to({_off:false},0).wait(91));

	// Layer 7 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("AI8mxICohQIAZA1IikBTg");
	var mask_2_graphics_1 = new cjs.Graphics().p("AhoAHICmhRIArBAIikBVg");
	var mask_2_graphics_2 = new cjs.Graphics().p("AhwACICmhUIA7BNIilBYg");
	var mask_2_graphics_3 = new cjs.Graphics().p("Ah4gCIClhYIBMBZIilBcg");
	var mask_2_graphics_4 = new cjs.Graphics().p("AiBgHICmhaIBdBjIinBhg");
	var mask_2_graphics_5 = new cjs.Graphics().p("AiJgMIClhdIBuBvIinBkg");
	var mask_2_graphics_6 = new cjs.Graphics().p("AiRgRIClhgIB+B8IimBng");
	var mask_2_graphics_7 = new cjs.Graphics().p("AiZgWICkhjICPCIIinBrg");
	var mask_2_graphics_8 = new cjs.Graphics().p("AihgbICkhlICgCTIioBug");
	var mask_2_graphics_9 = new cjs.Graphics().p("AiqggIClhoICwCfIiqByg");
	var mask_2_graphics_10 = new cjs.Graphics().p("AiyglICkhrIDBCsIiqB1g");
	var mask_2_graphics_11 = new cjs.Graphics().p("Ai6gqICkhuIDRC4IirB5g");
	var mask_2_graphics_12 = new cjs.Graphics().p("AjCgwICkhwIDiDEIisB9g");
	var mask_2_graphics_13 = new cjs.Graphics().p("AjLg1ICkhyIDzDPIitCAg");
	var mask_2_graphics_14 = new cjs.Graphics().p("AjTg6ICjh1IEEDbIitCEg");
	var mask_2_graphics_15 = new cjs.Graphics().p("Ajbg/ICjh4IEUDnIiuCHg");
	var mask_2_graphics_16 = new cjs.Graphics().p("AjjhEICih6IElDzIiuCKg");
	var mask_2_graphics_17 = new cjs.Graphics().p("AjshJICjh9IE2D/IivCOg");
	var mask_2_graphics_18 = new cjs.Graphics().p("Aj0hOICjiAIFGELIiwCSg");
	var mask_2_graphics_19 = new cjs.Graphics().p("Aj8hTICiiCIFXEXIiwCUg");
	var mask_2_graphics_20 = new cjs.Graphics().p("AkEhYIChiGIFoEkIixCZg");
	var mask_2_graphics_21 = new cjs.Graphics().p("AkNhdICiiIIF5EvIiyCcg");
	var mask_2_graphics_22 = new cjs.Graphics().p("AkVhiIChiLIGKE7IizCgg");
	var mask_2_graphics_23 = new cjs.Graphics().p("AkdhnICgiOIGbFHIizCkg");
	var mask_2_graphics_24 = new cjs.Graphics().p("AkmhsIChiQIGrFSIi0Cng");
	var mask_2_graphics_25 = new cjs.Graphics().p("AkuhxICgiTIG9FfIi1Cqg");
	var mask_2_graphics_26 = new cjs.Graphics().p("Ak2h2ICfiWIHOFrIi2Cug");
	var mask_2_graphics_27 = new cjs.Graphics().p("Ak+h7ICfiZIHeF3Ii2Cyg");
	var mask_2_graphics_28 = new cjs.Graphics().p("AlHiAICgibIHuGCIi2C1g");
	var mask_2_graphics_29 = new cjs.Graphics().p("AlPiFICfieIIAGPIi3C4g");
	var mask_2_graphics_30 = new cjs.Graphics().p("AlXiKICfihIIQGbIi3C8g");
	var mask_2_graphics_31 = new cjs.Graphics().p("AlfiPICeijIIhGmIi4C/g");
	var mask_2_graphics_32 = new cjs.Graphics().p("AloiUICeimIIzGyIi6DDg");
	var mask_2_graphics_33 = new cjs.Graphics().p("AlwiaICeioIJDG+Ii6DHg");
	var mask_2_graphics_34 = new cjs.Graphics().p("Al4ifICdirIJUHLIi6DKg");
	var mask_2_graphics_35 = new cjs.Graphics().p("AmAikICdiuIJkHXIi7DNg");
	var mask_2_graphics_36 = new cjs.Graphics().p("AmJipICdixIJ2HjIi9DRg");
	var mask_2_graphics_37 = new cjs.Graphics().p("AmRiuICdizIKGHvIi9DUg");
	var mask_2_graphics_38 = new cjs.Graphics().p("AmZizICci2IKXH6Ii+DZg");
	var mask_2_graphics_39 = new cjs.Graphics().p("Amhi4ICci4IKnIGIi9Dcg");
	var mask_2_graphics_40 = new cjs.Graphics().p("Ampi9ICbi7IK5ISIi+Dfg");
	var mask_2_graphics_41 = new cjs.Graphics().p("AmyjCICci+ILJIfIi/Dig");
	var mask_2_graphics_42 = new cjs.Graphics().p("Am6jHICbjBILaIqIi/Dng");
	var mask_2_graphics_43 = new cjs.Graphics().p("AnCjMICbjEILqI3IjADpg");
	var mask_2_graphics_44 = new cjs.Graphics().p("AAKobICbjHIL8JEIjADsg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:76.5,y:-51.4}).wait(1).to({graphics:mask_2_graphics_1,x:143.3,y:-96.2}).wait(1).to({graphics:mask_2_graphics_2,x:143.3,y:-96.5}).wait(1).to({graphics:mask_2_graphics_3,x:143.2,y:-96.7}).wait(1).to({graphics:mask_2_graphics_4,x:143.1,y:-97}).wait(1).to({graphics:mask_2_graphics_5,x:143,y:-97.2}).wait(1).to({graphics:mask_2_graphics_6,x:142.9,y:-97.5}).wait(1).to({graphics:mask_2_graphics_7,x:142.8,y:-97.7}).wait(1).to({graphics:mask_2_graphics_8,x:142.8,y:-98}).wait(1).to({graphics:mask_2_graphics_9,x:142.7,y:-98.2}).wait(1).to({graphics:mask_2_graphics_10,x:142.6,y:-98.5}).wait(1).to({graphics:mask_2_graphics_11,x:142.5,y:-98.7}).wait(1).to({graphics:mask_2_graphics_12,x:142.5,y:-98.9}).wait(1).to({graphics:mask_2_graphics_13,x:142.4,y:-99.2}).wait(1).to({graphics:mask_2_graphics_14,x:142.3,y:-99.4}).wait(1).to({graphics:mask_2_graphics_15,x:142.2,y:-99.7}).wait(1).to({graphics:mask_2_graphics_16,x:142.2,y:-99.9}).wait(1).to({graphics:mask_2_graphics_17,x:142,y:-100.2}).wait(1).to({graphics:mask_2_graphics_18,x:142,y:-100.4}).wait(1).to({graphics:mask_2_graphics_19,x:141.9,y:-100.7}).wait(1).to({graphics:mask_2_graphics_20,x:141.8,y:-100.9}).wait(1).to({graphics:mask_2_graphics_21,x:141.7,y:-101.2}).wait(1).to({graphics:mask_2_graphics_22,x:141.7,y:-101.4}).wait(1).to({graphics:mask_2_graphics_23,x:141.6,y:-101.7}).wait(1).to({graphics:mask_2_graphics_24,x:141.5,y:-101.9}).wait(1).to({graphics:mask_2_graphics_25,x:141.4,y:-102.2}).wait(1).to({graphics:mask_2_graphics_26,x:141.4,y:-102.4}).wait(1).to({graphics:mask_2_graphics_27,x:141.3,y:-102.7}).wait(1).to({graphics:mask_2_graphics_28,x:141.2,y:-102.9}).wait(1).to({graphics:mask_2_graphics_29,x:141.1,y:-103.2}).wait(1).to({graphics:mask_2_graphics_30,x:141,y:-103.4}).wait(1).to({graphics:mask_2_graphics_31,x:140.9,y:-103.6}).wait(1).to({graphics:mask_2_graphics_32,x:140.9,y:-103.9}).wait(1).to({graphics:mask_2_graphics_33,x:140.8,y:-104.1}).wait(1).to({graphics:mask_2_graphics_34,x:140.7,y:-104.4}).wait(1).to({graphics:mask_2_graphics_35,x:140.6,y:-104.6}).wait(1).to({graphics:mask_2_graphics_36,x:140.6,y:-104.9}).wait(1).to({graphics:mask_2_graphics_37,x:140.5,y:-105.1}).wait(1).to({graphics:mask_2_graphics_38,x:140.4,y:-105.4}).wait(1).to({graphics:mask_2_graphics_39,x:140.3,y:-105.6}).wait(1).to({graphics:mask_2_graphics_40,x:140.2,y:-105.9}).wait(1).to({graphics:mask_2_graphics_41,x:140.1,y:-106.1}).wait(1).to({graphics:mask_2_graphics_42,x:140.1,y:-106.4}).wait(1).to({graphics:mask_2_graphics_43,x:140,y:-106.6}).wait(1).to({graphics:mask_2_graphics_44,x:92.9,y:-73.9}).wait(91));

	// Layer 8
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AFOGdQgxhSg/hZQhAhZhfhJQhehJhThKQhUhMhRhhQhRhhAogrQAogrBIAPQBJAPBaA8QBZA7A3BMQAoA3AjBQQAEAKAFAK");
	this.shape_2.setTransform(123.4,-92.1);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(135));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(132.5,-111.5,21.2,25);


(lib.honeyflap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.honeybee();
	this.instance.parent = this;
	this.instance.setTransform(38.4,-170.9,0.422,0.422,0,0,0,-0.1,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOB8IgRgDIgCgBIgFgBIgEgBIgFgCIgHgDIgFgDIgDgCIgBgBIgBAAIgCgBIgBgBIgBgBIgBAAIgBgBIgBgBIgCgBIgBgBIgBAAIgBgBIgBgBIgBgBIgBgBIgBAAIgBgBIgBgBIgBgBIgBgBIAAgBIgBAAIgBgBIgBgBIgBgBIgBgBIAAAAIgBgBIgBgBIgBgBIAAgBIgBgBIgBgBIgBAAIAAgBIgBgBIgBgBIAAgBIgBgBIgBAAIAAgBIgBgBIgBgBIAAgBIgBgBIgBgBIAAAAIgBgBIAAgBIgBgBIAAgBIgBgBIgBgBIAAgBIAAAAIgBgBIAAgBIgBgBIAAgBIgBgBIAAgBIgBgBIAAgBIgBAAIAAgBIgBgBIAAgBIAAgBIgBgBIAAgBIAAgBIgBgBIAAAAIAAgBIgBgBIAAgBIAAgBIgBgBIAAgBIgBgBIAAgBIAAgBIAAgBIgBAAIAAgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAAAIAAgBIgBgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIgBgBIABgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIAAAAIABgCIAAAAIAAgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIABgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIABgBIAAgBIABgCIAAgBIABgBIABgBIAAgBIABgBIAAgBIABgBIAAgBIABgBIABgBIABgBIAAgBIABgBIAAgBIABgBIABgBIABgBIAAgBIABgBIABgBIABgBIABgBIAAgCIACgBIAAgBIABgBIABgBIABgBIADgDIANgMIANgIIAPgHIAQgGIAPgDIAPgBIAPABIAQADIAQAFIAQAHIAEACIABABIABABIABABIABABIACAAIABABIABABIABABIABABIABAAIABABIABABIABABIABABIABAAIABABIABABIAAABIABABIABABIABAAIABABIABABIABABIAAABIABABIABAAIABABIABABIAAABIABABIABABIAAAAIABABIABABIAAABIABABIABABIAAABIABAAIABABIAAABIABABIAAABIABABIABABIAAAAIABABIAAABIABABIAAABIABABIAAABIABABIAAAAIABABIAAABIABABIAAABIABABIAAABIABABIAAABIAAAAIABABIAAABIABABIAAABIAAABIABABIAAABIABABIAAAAIAAABIABABIAAABIAAABIAAABIABABIAAABIAAABIABABIAAABIAAAAIAAABIABABIAAABIAAABIAAABIABABIAAABIAAABIAAABIABABIAAABIAAAAIAAABIAAABIAAABIAAABIABABIAAABIAAACIAAACIAAACIABABIAAAAIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIgBABIABABIgBABIAAABIAAABIAAABIAAABIAAABIAAABIgBABIAAABIAAABIAAABIAAACIgBACIAAACIAAABIAAABIgBABIAAABIAAABIAAABIgBABIAAABIAAABIgBABIAAABIAAABIgBABIAAABIAAABIgBABIAAABIgBABIAAABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIgBABIAAABIgBABIgBABIAAABIgBABIgBABIgBABIAAABIgBABIgBACIgBABIgBABIAAABIgBABIgBABIgBABIgBABIgBABIgBABIgBABIgBABIgKAJQgMAKgOAGQgJAFgJACQgRAFgSAAIgOgBg");
	this.shape.setTransform(22.4,-144.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-215.3,105.5,83.7);


// stage content:
(lib.writingsuccess_Fontkid_s = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_341 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(341).call(this.frame_341).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(330.9,215.8,0.998,0.998,8,0,0,22.4,-144);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[330.8,215.8,318.3,201.9,301.1,197.5]}},29).to({regX:22.5,scaleX:1,scaleY:1,guide:{path:[301.1,197.4,299.1,196.9,297,196.5,277.1,192.8,257.3,197.6,248.5,199.7,241.9,204.8]}},30).to({regX:22.4,guide:{path:[241.9,204.8,233.6,211.3,228.7,222.5,227.8,224.6,227.1,226.7]}},20).to({regX:22.5,guide:{path:[227.1,226.6,221.9,243.6,238.7,252.2,241,253.4,243.3,254.5]}},30).to({guide:{path:[243.4,254.5,259.7,262.5,274.8,267.2,282.4,269.1,290,271.5]}},20).to({regX:22.6,regY:-143.9,guide:{path:[290,271.5,302.6,275.4,315.4,280.8,318,281.9,320.3,283.2]}},20).to({regX:22.4,regY:-144,scaleX:1,scaleY:1,guide:{path:[320.3,283.3,336,292.3,337.2,311.1,338.6,332.7,323.3,342.8,308,353,286.4,352.8,264.8,352.7,246.3,343.5,227.8,334.3,209.8,324.8]}},110).wait(9).to({startPosition:0},0).to({scaleX:1,scaleY:1,rotation:8.5,guide:{path:[212,326,138.8,450.5,47.2,345.6,-44.5,240.7,-116.4,406]}},64).wait(1));

	// Layer 1
	this.instance_1 = new lib.ar2("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(311.9,279.2,1,1,-29.7,0,0,116.2,-60.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).wait(333));

	// Layer 5
	this.instance_2 = new lib.s("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(134.2,147.1,0.513,0.468,0,0,0,0.5,0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(333));

	// Base
	this.instance_3 = new lib.Symbol1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(275,275);
	this.instance_3.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(342));

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F59E9E").ss(3,1,1).p("AMvQ5I5dAAMAAAghxIZdAAg");
	this.shape.setTransform(275,275,3.373,2.543);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_1.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(342));

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