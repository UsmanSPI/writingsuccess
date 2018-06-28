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
	this.shape.graphics.f("#FFFFFF").s().p("AiyMzIp743IgIguQAAh+C5AAQB+AAAmBcIHiS1IHPyuQAlhjCCAAQC2AAAACCIgIAsIqAY1QgaB+iUAAQiVAAgdh+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.2,-94.4,164.4,189);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(45,1,1).p("AADgJIgFAT");
	this.shape.setTransform(273.9,438.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(45,1,1).p("AgHAWIAPgq");
	this.shape_1.setTransform(274.4,437.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(45,1,1).p("AgLAhIAXhB");
	this.shape_2.setTransform(274.8,436.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(45,1,1).p("AgPAsIAfhX");
	this.shape_3.setTransform(275.2,435);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(45,1,1).p("AgTA4IAnhv");
	this.shape_4.setTransform(275.7,433.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(45,1,1).p("AgXBDIAviF");
	this.shape_5.setTransform(276.1,432.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(45,1,1).p("AgbBPIA3id");
	this.shape_6.setTransform(276.5,431.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(45,1,1).p("AgfBaIA/iz");
	this.shape_7.setTransform(276.9,430.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(45,1,1).p("AgjBmIBHjK");
	this.shape_8.setTransform(277.3,429.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(45,1,1).p("AgoBxIBRjh");
	this.shape_9.setTransform(277.8,428.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(45,1,1).p("AgsB8IBZj3");
	this.shape_10.setTransform(278.2,427);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(45,1,1).p("AgwCIIBgkP");
	this.shape_11.setTransform(278.6,425.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(45,1,1).p("Ag0CUIBpkn");
	this.shape_12.setTransform(279,424.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(45,1,1).p("Ag4CfIBxk9");
	this.shape_13.setTransform(279.5,423.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(45,1,1).p("Ag8CrIB5lV");
	this.shape_14.setTransform(279.9,422.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(45,1,1).p("AhAC2ICBlr");
	this.shape_15.setTransform(280.3,421.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(45,1,1).p("AhEDBICJmB");
	this.shape_16.setTransform(280.7,420.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(45,1,1).p("AhIDNICRmZ");
	this.shape_17.setTransform(281.1,419);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(45,1,1).p("AhNDYICbmv");
	this.shape_18.setTransform(281.6,417.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(45,1,1).p("AhQDkIChnH");
	this.shape_19.setTransform(282,416.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(45,1,1).p("AhUDvICqnd");
	this.shape_20.setTransform(282.4,415.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(45,1,1).p("AhZD7ICzn1");
	this.shape_21.setTransform(282.8,414.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(45,1,1).p("AhdEGIC7oL");
	this.shape_22.setTransform(283.3,413.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(45,1,1).p("AhhERIDDoh");
	this.shape_23.setTransform(283.7,412.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(45,1,1).p("AhlEdIDLo5");
	this.shape_24.setTransform(284.1,411);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(45,1,1).p("AhpEoIDTpP");
	this.shape_25.setTransform(284.5,409.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(45,1,1).p("AhtE0IDbpn");
	this.shape_26.setTransform(285,408.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(45,1,1).p("AhxE/IDjp9");
	this.shape_27.setTransform(285.4,407.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(45,1,1).p("Ah1FLIDsqV");
	this.shape_28.setTransform(285.8,406.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(45,1,1).p("Ah6FWID1qr");
	this.shape_29.setTransform(286.2,405.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(45,1,1).p("Ah+FhID9rB");
	this.shape_30.setTransform(286.6,404.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(45,1,1).p("AiCFtIEFrZ");
	this.shape_31.setTransform(287.1,403.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(45,1,1).p("AiGF5IENrw");
	this.shape_32.setTransform(287.5,401.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(45,1,1).p("AiKGEIEVsH");
	this.shape_33.setTransform(287.9,400.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(45,1,1).p("AiOGPIEdse");
	this.shape_34.setTransform(288.4,399.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(45,1,1).p("AiSGbIEls1");
	this.shape_35.setTransform(288.8,398.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(45,1,1).p("AiWGmIEttL");
	this.shape_36.setTransform(289.2,397.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(45,1,1).p("AibGyIE2tj");
	this.shape_37.setTransform(289.6,396.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(45,1,1).p("AifG9IE/t5");
	this.shape_38.setTransform(290,395.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(45,1,1).p("AijHJIFGuQ");
	this.shape_39.setTransform(290.5,393.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(45,1,1).p("AinHUIFPun");
	this.shape_40.setTransform(290.9,392.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(45,1,1).p("AirHfIFXu+");
	this.shape_41.setTransform(291.3,391.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(45,1,1).p("AivHrIFfvV");
	this.shape_42.setTransform(291.7,390.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(45,1,1).p("AizH2IFnvr");
	this.shape_43.setTransform(292.2,389.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(45,1,1).p("Ai3ICIFvwD");
	this.shape_44.setTransform(292.6,388.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(45,1,1).p("Ai7INIF3wZ");
	this.shape_45.setTransform(293,387);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(45,1,1).p("AjAIZIGBww");
	this.shape_46.setTransform(293.4,385.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(45,1,1).p("AjEIkIGIxH");
	this.shape_47.setTransform(293.9,384.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(45,1,1).p("AjIIvIGRxe");
	this.shape_48.setTransform(294.3,383.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(45,1,1).p("AjMI7IGZx1");
	this.shape_49.setTransform(294.7,382.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(45,1,1).p("AjQJHIGhyN");
	this.shape_50.setTransform(295.1,381.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(45,1,1).p("AjUJSIGpyj");
	this.shape_51.setTransform(295.5,380.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(45,1,1).p("AjYJeIGxy7");
	this.shape_52.setTransform(296,379.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(45,1,1).p("AjcJpIG5zR");
	this.shape_53.setTransform(296.4,377.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(45,1,1).p("AjgJ0IHBzn");
	this.shape_54.setTransform(296.8,376.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(45,1,1).p("AjkKAIHJz/");
	this.shape_55.setTransform(297.2,375.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(45,1,1).p("AjoKLIHS0V");
	this.shape_56.setTransform(297.7,374.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(45,1,1).p("AjtKXIHb0t");
	this.shape_57.setTransform(298.1,373.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(45,1,1).p("AjwKiIHh1D");
	this.shape_58.setTransform(298.5,372.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(45,1,1).p("Aj1KuIHr1b");
	this.shape_59.setTransform(298.9,371.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(45,1,1).p("Aj5K5IHz1x");
	this.shape_60.setTransform(299.3,369.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(45,1,1).p("Aj9LFIH72J");
	this.shape_61.setTransform(299.8,368.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(45,1,1).p("AkBLQIID2f");
	this.shape_62.setTransform(300.2,367.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(45,1,1).p("AkFLbIIL21");
	this.shape_63.setTransform(300.6,366.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(45,1,1).p("AkJLnIIT3N");
	this.shape_64.setTransform(301,365.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(45,1,1).p("AkOLyIId3j");
	this.shape_65.setTransform(301.5,364.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(45,1,1).p("AkRL+IIj37");
	this.shape_66.setTransform(301.9,363);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(45,1,1).p("AkVMJIIs4R");
	this.shape_67.setTransform(302.3,361.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(45,1,1).p("AkaMVII14p");
	this.shape_68.setTransform(302.7,360.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(45,1,1).p("AkeMgII94/");
	this.shape_69.setTransform(303.1,359.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(45,1,1).p("AkiMrIJF5V");
	this.shape_70.setTransform(303.6,358.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(45,1,1).p("AkmM3IJN5t");
	this.shape_71.setTransform(304,357.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(45,1,1).p("AkqNCIJV6D");
	this.shape_72.setTransform(304.4,356.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(45,1,1).p("AkuNOIJd6b");
	this.shape_73.setTransform(304.8,355.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(45,1,1).p("AkzNZIJn6x");
	this.shape_74.setTransform(305.3,353.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(45,1,1).p("Ak2NlIJt7J");
	this.shape_75.setTransform(305.7,352.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(45,1,1).p("Ak7NwIJ27f");
	this.shape_76.setTransform(306.1,351.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(45,1,1).p("Ak/N8IJ/73");
	this.shape_77.setTransform(306.5,350.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(45,1,1).p("AlDOHIKG8N");
	this.shape_78.setTransform(307,349.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(45,1,1).p("AlHOSIKP8j");
	this.shape_79.setTransform(307.4,348.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(45,1,1).p("AlLOeIKX87");
	this.shape_80.setTransform(307.8,347.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(45,1,1).p("AlPOqIKf9S");
	this.shape_81.setTransform(308.2,345.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(45,1,1).p("AlTO1IKn9p");
	this.shape_82.setTransform(308.6,344.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(45,1,1).p("AlXPAIKv9/");
	this.shape_83.setTransform(309.1,343.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(45,1,1).p("AlbPMIK3+X");
	this.shape_84.setTransform(309.5,342.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(45,1,1).p("AlgPXILB+t");
	this.shape_85.setTransform(309.9,341.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(45,1,1).p("AlkPjILI/F");
	this.shape_86.setTransform(310.4,340.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(45,1,1).p("AloPuILR/b");
	this.shape_87.setTransform(310.8,339.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(45,1,1).p("AlsP6ILZ/y");
	this.shape_88.setTransform(311.2,337.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(45,1,1).p("AlwQFMALhggJ");
	this.shape_89.setTransform(311.6,336.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(45,1,1).p("Al0QQMALpggf");
	this.shape_90.setTransform(312,335.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(45,1,1).p("Al4QcMALxgg3");
	this.shape_91.setTransform(312.5,334.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(45,1,1).p("Al8QnMAL5ghO");
	this.shape_92.setTransform(312.9,333.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(45,1,1).p("AmAQzMAMBghl");
	this.shape_93.setTransform(313.3,332.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(45,1,1).p("AmEQ+MAMJgh8");
	this.shape_94.setTransform(313.7,331.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(45,1,1).p("AmIRKMAMSgiT");
	this.shape_95.setTransform(314.2,329.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(45,1,1).p("AmNRVMAMbgip");
	this.shape_96.setTransform(314.6,328.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(45,1,1).p("AmRRhMAMjgjB");
	this.shape_97.setTransform(315,327.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(45,1,1).p("AmVRsMAMrgjX");
	this.shape_98.setTransform(315.4,326.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(45,1,1).p("AmZR3MAMzgju");
	this.shape_99.setTransform(315.8,325.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(45,1,1).p("AmdSDMAM7gkF");
	this.shape_100.setTransform(316.3,324.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(45,1,1).p("AmhSOMANDgkc");
	this.shape_101.setTransform(316.7,323.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(45,1,1).p("AmlSaMANLgkz");
	this.shape_102.setTransform(317.1,321.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(45,1,1).p("AmpSlMANTglJ");
	this.shape_103.setTransform(317.5,320.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(45,1,1).p("AmuSxMANdglh");
	this.shape_104.setTransform(318,319.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(45,1,1).p("AmyS8MANlgl3");
	this.shape_105.setTransform(318.4,318.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(45,1,1).p("Am2THMANtgmO");
	this.shape_106.setTransform(318.8,317.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(45,1,1).p("Am6TTMAN1gml");
	this.shape_107.setTransform(319.2,316.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(45,1,1).p("Am+TeMAN9gm8");
	this.shape_108.setTransform(319.7,315.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(45,1,1).p("AnCTqMAOFgnT");
	this.shape_109.setTransform(320.1,313.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(45,1,1).p("AnGT2MAONgnr");
	this.shape_110.setTransform(320.5,312.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(45,1,1).p("AnKUBMAOVgoB");
	this.shape_111.setTransform(320.9,311.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(45,1,1).p("AnOUNMAOdgoZ");
	this.shape_112.setTransform(321.3,310.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(45,1,1).p("AnTUYMAOngov");
	this.shape_113.setTransform(321.8,309.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(45,1,1).p("AnXUjMAOvgpF");
	this.shape_114.setTransform(322.2,308.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(45,1,1).p("AnbUvMAO2gpd");
	this.shape_115.setTransform(322.6,307.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(45,1,1).p("AnfU6MAO/gpz");
	this.shape_116.setTransform(323,305.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(45,1,1).p("AnjVGMAPHgqL");
	this.shape_117.setTransform(323.5,304.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(45,1,1).p("AnnVRMAPPgqh");
	this.shape_118.setTransform(323.9,303.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(45,1,1).p("AnrVdMAPXgq5");
	this.shape_119.setTransform(324.3,302.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(45,1,1).p("AnvVoMAPfgrP");
	this.shape_120.setTransform(324.7,301.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(45,1,1).p("AnzV0MAPngrm");
	this.shape_121.setTransform(325.1,300.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(45,1,1).p("An3V/MAPvgr9");
	this.shape_122.setTransform(325.6,299.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(45,1,1).p("An8WKMAP5gsT");
	this.shape_123.setTransform(326,297.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(45,1,1).p("AoAWWMAQBgsr");
	this.shape_124.setTransform(326.4,296.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(45,1,1).p("AoEWhMAQJgtB");
	this.shape_125.setTransform(326.8,295.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(45,1,1).p("AoIWtMAQRgtZ");
	this.shape_126.setTransform(327.3,294.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(45,1,1).p("AoMW4MAQZgtv");
	this.shape_127.setTransform(327.7,293.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(45,1,1).p("AoQXEMAQhguG");
	this.shape_128.setTransform(328.1,292.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(45,1,1).p("AoUXPMAQpgud");
	this.shape_129.setTransform(328.5,291.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(45,1,1).p("AoYXbMAQxgu1");
	this.shape_130.setTransform(329,289.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").ss(45,1,1).p("AocXmMAQ5gvL");
	this.shape_131.setTransform(329.4,288.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(45,1,1).p("AohXyMARDgvi");
	this.shape_132.setTransform(329.8,287.7);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(45,1,1).p("AokX9MARJgv5");
	this.shape_133.setTransform(330.2,286.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(45,1,1).p("AopYIMARTgwP");
	this.shape_134.setTransform(330.6,285.4);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#000000").ss(45,1,1).p("AotYUMARbgwn");
	this.shape_135.setTransform(331.1,284.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#000000").ss(45,1,1).p("AoxYfMARjgw9");
	this.shape_136.setTransform(331.5,283.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#000000").ss(45,1,1).p("Ao1YrMARrgxV");
	this.shape_137.setTransform(331.9,281.9);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").ss(45,1,1).p("Ao5Y2MARzgxr");
	this.shape_138.setTransform(332.4,280.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#000000").ss(45,1,1).p("Ao9ZCMAR7gyC");
	this.shape_139.setTransform(332.8,279.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").ss(45,1,1).p("AJC5MMgSDAyZ");
	this.shape_140.setTransform(333.2,278.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},150).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).wait(76));

	// 4
	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#000000").ss(45,1,1).p("AgXguIAvBd");
	this.shape_141.setTransform(158.5,119.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#000000").ss(45,1,1).p("Agbg6IA3B0");
	this.shape_142.setTransform(158.9,120.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#000000").ss(45,1,1).p("AgfhFIA/CL");
	this.shape_143.setTransform(159.3,122);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#000000").ss(45,1,1).p("AgjhQIBHCh");
	this.shape_144.setTransform(159.7,123.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#000000").ss(45,1,1).p("AgnhbIBPC3");
	this.shape_145.setTransform(160.1,124.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#000000").ss(45,1,1).p("AgrhmIBXDN");
	this.shape_146.setTransform(160.5,125.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#000000").ss(45,1,1).p("AgvhyIBfDl");
	this.shape_147.setTransform(160.9,126.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#000000").ss(45,1,1).p("Agzh9IBnD7");
	this.shape_148.setTransform(161.3,127.7);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#000000").ss(45,1,1).p("Ag3iIIBvER");
	this.shape_149.setTransform(161.7,128.8);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#000000").ss(45,1,1).p("Ag7iTIB3En");
	this.shape_150.setTransform(162.1,129.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#000000").ss(45,1,1).p("Ag/ieIB/E9");
	this.shape_151.setTransform(162.5,131);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#000000").ss(45,1,1).p("AhDipICHFT");
	this.shape_152.setTransform(162.9,132.2);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#000000").ss(45,1,1).p("AhHi1ICPFq");
	this.shape_153.setTransform(163.3,133.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#000000").ss(45,1,1).p("AhLjAICXGB");
	this.shape_154.setTransform(163.7,134.4);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#000000").ss(45,1,1).p("AhPjLICfGX");
	this.shape_155.setTransform(164.1,135.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#000000").ss(45,1,1).p("AhTjWICnGt");
	this.shape_156.setTransform(164.5,136.7);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#000000").ss(45,1,1).p("AhXjiICvHE");
	this.shape_157.setTransform(164.9,137.8);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#000000").ss(45,1,1).p("AhbjtIC3Hb");
	this.shape_158.setTransform(165.3,138.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#000000").ss(45,1,1).p("Ahfj4IC/Hx");
	this.shape_159.setTransform(165.7,140.1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#000000").ss(45,1,1).p("AhjkDIDHIH");
	this.shape_160.setTransform(166.1,141.2);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#000000").ss(45,1,1).p("AhnkOIDPId");
	this.shape_161.setTransform(166.5,142.3);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#000000").ss(45,1,1).p("AhrkZIDXIz");
	this.shape_162.setTransform(166.9,143.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#000000").ss(45,1,1).p("AhvklIDfJK");
	this.shape_163.setTransform(167.3,144.6);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#000000").ss(45,1,1).p("AhzkwIDnJh");
	this.shape_164.setTransform(167.7,145.7);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#000000").ss(45,1,1).p("Ah3k7IDvJ3");
	this.shape_165.setTransform(168.1,146.8);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#000000").ss(45,1,1).p("Ah7lGID3KN");
	this.shape_166.setTransform(168.5,148);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#000000").ss(45,1,1).p("Ah/lRID/Kj");
	this.shape_167.setTransform(168.9,149.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#000000").ss(45,1,1).p("AiDlcIEHK6");
	this.shape_168.setTransform(169.3,150.2);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#000000").ss(45,1,1).p("AiHloIEPLR");
	this.shape_169.setTransform(169.7,151.3);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#000000").ss(45,1,1).p("AiLlzIEXLn");
	this.shape_170.setTransform(170.1,152.5);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#000000").ss(45,1,1).p("AiPl+IEfL9");
	this.shape_171.setTransform(170.5,153.6);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#000000").ss(45,1,1).p("AiTmJIEnMU");
	this.shape_172.setTransform(170.9,154.7);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#000000").ss(45,1,1).p("AiXmVIEvMr");
	this.shape_173.setTransform(171.3,155.9);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#000000").ss(45,1,1).p("AibmgIE3NB");
	this.shape_174.setTransform(171.7,157);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#000000").ss(45,1,1).p("AifmrIE/NX");
	this.shape_175.setTransform(172.1,158.1);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#000000").ss(45,1,1).p("Aijm2IFHNt");
	this.shape_176.setTransform(172.5,159.2);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#000000").ss(45,1,1).p("AinnBIFPOD");
	this.shape_177.setTransform(172.9,160.3);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#000000").ss(45,1,1).p("AirnMIFXOa");
	this.shape_178.setTransform(173.3,161.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#000000").ss(45,1,1).p("AivnYIFfOx");
	this.shape_179.setTransform(173.7,162.6);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#000000").ss(45,1,1).p("AiznjIFnPH");
	this.shape_180.setTransform(174.1,163.7);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#000000").ss(45,1,1).p("Ai3nuIFvPd");
	this.shape_181.setTransform(174.5,164.9);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#000000").ss(45,1,1).p("Ai7n5IF3Pz");
	this.shape_182.setTransform(174.9,166);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#000000").ss(45,1,1).p("Ai/oFIF/QL");
	this.shape_183.setTransform(175.3,167.1);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#000000").ss(45,1,1).p("AjDoQIGHQh");
	this.shape_184.setTransform(175.7,168.2);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#000000").ss(45,1,1).p("AjHobIGPQ3");
	this.shape_185.setTransform(176.1,169.4);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#000000").ss(45,1,1).p("AjLomIGXRN");
	this.shape_186.setTransform(176.5,170.5);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#000000").ss(45,1,1).p("AjPoxIGfRj");
	this.shape_187.setTransform(176.9,171.6);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#000000").ss(45,1,1).p("AjTo9IGnR7");
	this.shape_188.setTransform(177.3,172.8);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#000000").ss(45,1,1).p("AjXpIIGvSR");
	this.shape_189.setTransform(177.7,173.9);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#000000").ss(45,1,1).p("AjbpTIG3Sn");
	this.shape_190.setTransform(178.1,175);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#000000").ss(45,1,1).p("AjfpeIG/S9");
	this.shape_191.setTransform(178.5,176.1);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#000000").ss(45,1,1).p("AjjppIHHTT");
	this.shape_192.setTransform(178.9,177.2);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#000000").ss(45,1,1).p("Ajnp1IHPTq");
	this.shape_193.setTransform(179.3,178.4);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#000000").ss(45,1,1).p("AjrqAIHXUB");
	this.shape_194.setTransform(179.7,179.5);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#000000").ss(45,1,1).p("AjvqLIHfUX");
	this.shape_195.setTransform(180.1,180.6);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#000000").ss(45,1,1).p("AjzqWIHnUt");
	this.shape_196.setTransform(180.5,181.8);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#000000").ss(45,1,1).p("Aj3qhIHvVD");
	this.shape_197.setTransform(180.9,182.9);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#000000").ss(45,1,1).p("Aj7qtIH3Vb");
	this.shape_198.setTransform(181.3,184);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#000000").ss(45,1,1).p("Aj/q4IH/Vx");
	this.shape_199.setTransform(181.7,185.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#000000").ss(45,1,1).p("AkDrDIIHWH");
	this.shape_200.setTransform(182.1,186.3);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#000000").ss(45,1,1).p("AkHrOIIPWd");
	this.shape_201.setTransform(182.5,187.4);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#000000").ss(45,1,1).p("AkLrZIIXWz");
	this.shape_202.setTransform(182.9,188.5);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#000000").ss(45,1,1).p("AkPrlIIfXL");
	this.shape_203.setTransform(183.3,189.7);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#000000").ss(45,1,1).p("AkTrwIInXh");
	this.shape_204.setTransform(183.7,190.8);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#000000").ss(45,1,1).p("AkXr7IIvX3");
	this.shape_205.setTransform(184.1,191.9);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#000000").ss(45,1,1).p("AkbsGII3YN");
	this.shape_206.setTransform(184.5,193);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#000000").ss(45,1,1).p("AkfsRII/Yj");
	this.shape_207.setTransform(184.9,194.1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#000000").ss(45,1,1).p("AkjscIJHY5");
	this.shape_208.setTransform(185.3,195.3);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#000000").ss(45,1,1).p("AknsoIJPZR");
	this.shape_209.setTransform(185.7,196.4);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#000000").ss(45,1,1).p("AkrszIJXZn");
	this.shape_210.setTransform(186.1,197.5);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#000000").ss(45,1,1).p("Akvs+IJfZ9");
	this.shape_211.setTransform(186.5,198.7);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#000000").ss(45,1,1).p("AkztJIJnaT");
	this.shape_212.setTransform(186.8,199.8);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#000000").ss(45,1,1).p("Ak3tVIJvar");
	this.shape_213.setTransform(187.2,200.9);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#000000").ss(45,1,1).p("Ak7tgIJ3bB");
	this.shape_214.setTransform(187.6,202);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#000000").ss(45,1,1).p("Ak/trIJ/bX");
	this.shape_215.setTransform(188,203.2);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#000000").ss(45,1,1).p("AlDt2IKHbt");
	this.shape_216.setTransform(188.4,204.3);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#000000").ss(45,1,1).p("AlHuBIKPcD");
	this.shape_217.setTransform(188.8,205.4);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#000000").ss(45,1,1).p("AlLuNIKXca");
	this.shape_218.setTransform(189.2,206.6);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#000000").ss(45,1,1).p("AlPuXIKfcw");
	this.shape_219.setTransform(189.6,207.7);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#000000").ss(45,1,1).p("AlTujIKndH");
	this.shape_220.setTransform(190,208.8);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#000000").ss(45,1,1).p("AlXuuIKvdd");
	this.shape_221.setTransform(190.4,209.9);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#000000").ss(45,1,1).p("Albu5IK3dz");
	this.shape_222.setTransform(190.8,211.1);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#000000").ss(45,1,1).p("AlfvEIK/eJ");
	this.shape_223.setTransform(191.2,212.2);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#000000").ss(45,1,1).p("AljvQILHeg");
	this.shape_224.setTransform(191.6,213.3);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#000000").ss(45,1,1).p("AlnvbILPe3");
	this.shape_225.setTransform(192,214.4);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#000000").ss(45,1,1).p("AlrvmILXfN");
	this.shape_226.setTransform(192.4,215.6);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#000000").ss(45,1,1).p("AlvvxILffj");
	this.shape_227.setTransform(192.8,216.7);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#000000").ss(45,1,1).p("Alzv9ILnf6");
	this.shape_228.setTransform(193.2,217.8);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#000000").ss(45,1,1).p("Al3wHMALvAgQ");
	this.shape_229.setTransform(193.6,219);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#000000").ss(45,1,1).p("Al7wTMAL3Agn");
	this.shape_230.setTransform(194,220.1);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#000000").ss(45,1,1).p("Al/weMAL/Ag9");
	this.shape_231.setTransform(194.4,221.2);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#000000").ss(45,1,1).p("AmDwpMAMHAhT");
	this.shape_232.setTransform(194.8,222.3);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#000000").ss(45,1,1).p("AmHw0MAMPAhp");
	this.shape_233.setTransform(195.2,223.4);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#000000").ss(45,1,1).p("AmLw/MAMXAiA");
	this.shape_234.setTransform(195.6,224.6);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#000000").ss(45,1,1).p("AmPxLMAMfAiX");
	this.shape_235.setTransform(196,225.7);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#000000").ss(45,1,1).p("AmTxWMAMnAit");
	this.shape_236.setTransform(196.4,226.8);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#000000").ss(45,1,1).p("AmXxhMAMvAjD");
	this.shape_237.setTransform(196.8,228);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#000000").ss(45,1,1).p("AmbxsMAM3AjZ");
	this.shape_238.setTransform(197.2,229.1);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#000000").ss(45,1,1).p("Amfx4MAM/Ajx");
	this.shape_239.setTransform(197.6,230.2);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#000000").ss(45,1,1).p("AmkyDMANJAkH");
	this.shape_240.setTransform(198,231.3);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#000000").ss(45,1,1).p("AmoyOMANQAkd");
	this.shape_241.setTransform(198.4,232.5);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#000000").ss(45,1,1).p("AmryZMANYAkz");
	this.shape_242.setTransform(198.8,233.6);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#000000").ss(45,1,1).p("AmwykMANhAlJ");
	this.shape_243.setTransform(199.2,234.7);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#000000").ss(45,1,1).p("Am0ywMANpAlg");
	this.shape_244.setTransform(199.6,235.9);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("#000000").ss(45,1,1).p("Am4y7MANxAl3");
	this.shape_245.setTransform(200,237);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#000000").ss(45,1,1).p("Am8zGMAN4AmN");
	this.shape_246.setTransform(200.4,238.1);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("#000000").ss(45,1,1).p("Am/zRMAOAAmj");
	this.shape_247.setTransform(200.8,239.2);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#000000").ss(45,1,1).p("AnEzcMAOJAm5");
	this.shape_248.setTransform(201.2,240.3);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#000000").ss(45,1,1).p("AnIzoMAORAnR");
	this.shape_249.setTransform(201.6,241.5);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#000000").ss(45,1,1).p("AnMzzMAOZAnn");
	this.shape_250.setTransform(202,242.6);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#000000").ss(45,1,1).p("AnQz+MAOgAn9");
	this.shape_251.setTransform(202.4,243.7);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#000000").ss(45,1,1).p("AnT0JMAOoAoT");
	this.shape_252.setTransform(202.8,244.9);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#000000").ss(45,1,1).p("AnY0UMAOxAop");
	this.shape_253.setTransform(203.2,246);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#000000").ss(45,1,1).p("Anc0gMAO5ApB");
	this.shape_254.setTransform(203.6,247.1);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("#000000").ss(45,1,1).p("Ang0rMAPBApX");
	this.shape_255.setTransform(204,248.2);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#000000").ss(45,1,1).p("Ank02MAPIApt");
	this.shape_256.setTransform(204.4,249.4);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("#000000").ss(45,1,1).p("Ann1BMAPQAqD");
	this.shape_257.setTransform(204.8,250.5);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#000000").ss(45,1,1).p("Ans1MMAPZAqZ");
	this.shape_258.setTransform(205.2,251.6);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("#000000").ss(45,1,1).p("Anw1YMAPhAqx");
	this.shape_259.setTransform(205.6,252.8);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#000000").ss(45,1,1).p("An01jMAPpArH");
	this.shape_260.setTransform(206,253.9);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("#000000").ss(45,1,1).p("An41uMAPxArd");
	this.shape_261.setTransform(206.4,255);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#000000").ss(45,1,1).p("An715MAP3Arz");
	this.shape_262.setTransform(206.8,256.1);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#000000").ss(45,1,1).p("AoA2EMAQBAsJ");
	this.shape_263.setTransform(207.2,257.2);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#000000").ss(45,1,1).p("AoE2PMAQJAsf");
	this.shape_264.setTransform(207.6,258.4);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("#000000").ss(45,1,1).p("AoI2bMAQRAs3");
	this.shape_265.setTransform(208,259.5);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#000000").ss(45,1,1).p("AoM2mMAQZAtN");
	this.shape_266.setTransform(208.4,260.6);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("#000000").ss(45,1,1).p("AoQ2xMAQhAtj");
	this.shape_267.setTransform(208.8,261.8);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#000000").ss(45,1,1).p("AoU28MAQpAt5");
	this.shape_268.setTransform(209.2,262.9);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#000000").ss(45,1,1).p("AoY3IMAQxAuR");
	this.shape_269.setTransform(209.6,264);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#000000").ss(45,1,1).p("Aoc3TMAQ5Aun");
	this.shape_270.setTransform(210,265.1);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("#000000").ss(45,1,1).p("Aog3eMARBAu9");
	this.shape_271.setTransform(210.4,266.3);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#000000").ss(45,1,1).p("Aok3pMARJAvT");
	this.shape_272.setTransform(210.8,267.4);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("#000000").ss(45,1,1).p("Aoo30MARRAvp");
	this.shape_273.setTransform(211.2,268.5);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#000000").ss(45,1,1).p("Aos3/MARZAv/");
	this.shape_274.setTransform(211.6,269.6);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("#000000").ss(45,1,1).p("Aow4LMARhAwX");
	this.shape_275.setTransform(212,270.8);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#000000").ss(45,1,1).p("Ao04WMARpAwt");
	this.shape_276.setTransform(212.4,271.9);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f().s("#000000").ss(45,1,1).p("Ao44hMARxAxD");
	this.shape_277.setTransform(212.8,273);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#000000").ss(45,1,1).p("Ao84sMAR5AxZ");
	this.shape_278.setTransform(213.2,274.2);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f().s("#000000").ss(45,1,1).p("ApA43MASBAxv");
	this.shape_279.setTransform(213.6,275.3);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#000000").ss(45,1,1).p("ApE5CMASJAyG");
	this.shape_280.setTransform(214,276.4);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f().s("#000000").ss(45,1,1).p("ApI5OMASRAyd");
	this.shape_281.setTransform(214.4,277.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_141}]}).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).to({state:[{t:this.shape_273}]},1).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).wait(226));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(133.7,92.6,49.8,54.5);


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

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AAZAAIgxAA");
	this.shape.setTransform(6.6,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AghAAIBDAA");
	this.shape_1.setTransform(7.4,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("AgqAAIBVAA");
	this.shape_2.setTransform(8.3,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("AgyAAIBmAA");
	this.shape_3.setTransform(9.1,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("Ag7AAIB3AA");
	this.shape_4.setTransform(9.9,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(5,1,1).p("AhDAAICHAA");
	this.shape_5.setTransform(10.6,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(5,1,1).p("AhMAAICZAA");
	this.shape_6.setTransform(11.4,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(5,1,1).p("AhUAAICpAA");
	this.shape_7.setTransform(12.2,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(5,1,1).p("AhcAAIC5AA");
	this.shape_8.setTransform(13,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(5,1,1).p("AhkAAIDJAA");
	this.shape_9.setTransform(13.7,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(5,1,1).p("AhsAAIDZAA");
	this.shape_10.setTransform(14.5,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5,1,1).p("Ah0AAIDpAA");
	this.shape_11.setTransform(15.2,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(5,1,1).p("Ah8AAID5AA");
	this.shape_12.setTransform(15.9,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(5,1,1).p("AiDAAIEHAA");
	this.shape_13.setTransform(16.6,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(5,1,1).p("AiLAAIEXAA");
	this.shape_14.setTransform(17.3,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(5,1,1).p("AiSAAIElAA");
	this.shape_15.setTransform(18,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(5,1,1).p("AiaAAIE1AA");
	this.shape_16.setTransform(18.7,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(5,1,1).p("AihAAIFDAA");
	this.shape_17.setTransform(19.4,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(5,1,1).p("AioAAIFRAA");
	this.shape_18.setTransform(20.1,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(5,1,1).p("AivAAIFfAA");
	this.shape_19.setTransform(20.7,0);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(5,1,1).p("Ai2AAIFtAA");
	this.shape_20.setTransform(21.4,0);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(5,1,1).p("Ai9AAIF7AA");
	this.shape_21.setTransform(22,0);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(5,1,1).p("AjEAAIGJAA");
	this.shape_22.setTransform(22.6,0);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(5,1,1).p("AjKAAIGVAA");
	this.shape_23.setTransform(23.2,0);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(5,1,1).p("AjRAAIGjAA");
	this.shape_24.setTransform(23.8,0);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(5,1,1).p("AjXAAIGvAA");
	this.shape_25.setTransform(24.4,0);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(5,1,1).p("AjeAAIG9AA");
	this.shape_26.setTransform(25,0);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(5,1,1).p("AjkAAIHJAA");
	this.shape_27.setTransform(25.6,0);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(5,1,1).p("AjqAAIHVAA");
	this.shape_28.setTransform(26.2,0);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(5,1,1).p("AjwAAIHhAA");
	this.shape_29.setTransform(26.8,0);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(5,1,1).p("Aj2AAIHtAA");
	this.shape_30.setTransform(27.3,0);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(5,1,1).p("Aj8AAIH5AA");
	this.shape_31.setTransform(27.8,0);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(5,1,1).p("AkBAAIIDAA");
	this.shape_32.setTransform(28.4,0);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(5,1,1).p("AkHAAIIPAA");
	this.shape_33.setTransform(28.9,0);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(5,1,1).p("AkNAAIIbAA");
	this.shape_34.setTransform(29.4,0);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(5,1,1).p("AkSAAIIlAA");
	this.shape_35.setTransform(29.9,0);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(5,1,1).p("AkXAAIIvAA");
	this.shape_36.setTransform(30.4,0);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(5,1,1).p("AkdAAII7AA");
	this.shape_37.setTransform(30.9,0);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(5,1,1).p("AkiAAIJFAA");
	this.shape_38.setTransform(31.4,0);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(5,1,1).p("AknAAIJPAA");
	this.shape_39.setTransform(31.9,0);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(5,1,1).p("AksAAIJZAA");
	this.shape_40.setTransform(32.3,0);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(5,1,1).p("AkxAAIJjAA");
	this.shape_41.setTransform(32.8,0);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(5,1,1).p("Ak1AAIJrAA");
	this.shape_42.setTransform(33.2,0);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(5,1,1).p("Ak6AAIJ1AA");
	this.shape_43.setTransform(33.7,0);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(5,1,1).p("Ak+AAIJ+AA");
	this.shape_44.setTransform(34.1,0);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(5,1,1).p("AlDAAIKHAA");
	this.shape_45.setTransform(34.5,0);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(5,1,1).p("AlHAAIKPAA");
	this.shape_46.setTransform(34.9,0);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(5,1,1).p("AlLAAIKXAA");
	this.shape_47.setTransform(35.3,0);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(5,1,1).p("AlQAAIKhAA");
	this.shape_48.setTransform(35.7,0);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(5,1,1).p("AlUAAIKpAA");
	this.shape_49.setTransform(36.1,0);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(5,1,1).p("AlXAAIKvAA");
	this.shape_50.setTransform(36.4,0);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(5,1,1).p("AlbAAIK3AA");
	this.shape_51.setTransform(36.8,0);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(5,1,1).p("AlfAAIK/AA");
	this.shape_52.setTransform(37.1,0);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(5,1,1).p("AljAAILHAA");
	this.shape_53.setTransform(37.5,0);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(5,1,1).p("AlmAAILNAA");
	this.shape_54.setTransform(37.8,0);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(5,1,1).p("AlpAAILUAA");
	this.shape_55.setTransform(38.1,0);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(5,1,1).p("AltAAILbAA");
	this.shape_56.setTransform(38.4,0);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(5,1,1).p("AlwAAILhAA");
	this.shape_57.setTransform(38.7,0);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(5,1,1).p("AlzAAILnAA");
	this.shape_58.setTransform(39,0);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(5,1,1).p("Al2AAILtAA");
	this.shape_59.setTransform(39.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).wait(1));

	// Layer 1
	this.instance = new lib.triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(9.1,0,0.81,0.81,-90,0,0,0.4,-6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.3,scaleX:1,scaleY:1,rotation:-90.2,x:76.7,y:0.1},59,cjs.Ease.get(0.5)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.2,-9.8,17.7,19.7);


(lib.honeyflap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.honeybee();
	this.instance.parent = this;
	this.instance.setTransform(38.4,-170.9,0.422,0.422,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-215.3,105.5,81.8);


// stage content:
(lib.writingsuccess_Fontkid_v = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_374 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(374).call(this.frame_374).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(210.3,196.1,0.999,0.999,0,-8.5,171.5,22.4,-144);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({x:274.3,y:351.4},140).wait(10).to({scaleX:1,scaleY:1,rotation:8,skewX:0,skewY:0,x:273,y:350.1},0).to({x:339.4,y:197.5},140).wait(11).to({startPosition:0},0).to({guide:{path:[339.3,197.5,238.8,98.6,180,171.1,121.1,243.8,-103.3,203.1]}},64).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(274.6,350.8,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},140).wait(10).to({_off:false,x:338.4,y:197.4},0).to({_off:true},140).wait(76));

	// ar4
	this.instance_1 = new lib.ar2("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(283.5,255.7,1,1,-70.7,0,0,0.8,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(159).to({_off:false},0).wait(216));

	// ar3
	this.instance_2 = new lib.ar2("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(240.4,175.3,1,1,69.7,0,0,0.8,0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(366));

	// Layer 1
	this.instance_3 = new lib.Symbol1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(123.1,140.7,0.555,0.48);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).wait(366));

	// Base
	this.instance_4 = new lib.Symbol2("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(275,275);
	this.instance_4.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(375));

	// Background
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_1.setTransform(275,275,3.373,2.543);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_2.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(375));

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