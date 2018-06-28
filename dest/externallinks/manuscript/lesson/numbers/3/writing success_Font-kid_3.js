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

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgBFAgrQpbgMmtlbQhKg/AAhPQAAg+AxhBQAxhCA8ABQAzAAA8AuQBbBNEKBXQFMB3EaAAQKuAAA/q2IAFhfQAArfvyAAQi6AAAAi8QAAi4C6AAQHHAAEXjoQEfj0AAmmQAAlMkNi+Qjcibk1AAIgtAAQoMAXl/F4QhBBDg8AAQhBAAgxg/Qgwg8AAhBQAAhIA+g8QHunlKbgHIAOAAQHlAAFAELQFXEdAAHXQAAH+oeIjQE5DqBjCCQCgDVAAFAIgHCSQguIKlnEZQlDD/ntAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120.8,-209.1,241.7,418.2);


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


(lib.SC_ar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.triangle("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-7.3,-155,1,1,-85.8,0,0,0.5,-17.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-17.2,scaleX:1,scaleY:1,rotation:-31.6,guide:{path:[-7.2,-155,60.1,-153.1,84.8,-105.2]}},74).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A3hLwQkBtbGrsWQGrsWNdkAQNckBMWGrMggPA7mQsVmrkAteg");
	var mask_graphics_1 = new cjs.Graphics().p("A3tLjQj7tcGysTQGxsSNfj6QNej6MSGxMggsA7WQsSmyj5tgg");
	var mask_graphics_2 = new cjs.Graphics().p("A35LXQj0teG4sQQG3sPNhjzQNfjzMPG3MghJA7FQsPm3jytig");
	var mask_graphics_3 = new cjs.Graphics().p("A4FLLQjttgG+sMQG9sMNijsQNijtMLG+MghmA60QsLm9jstkg");
	var mask_graphics_4 = new cjs.Graphics().p("A4RK/QjmtiHEsJQHDsINkjlQNkjmMIHDMgiEA6kQsInDjltmg");
	var mask_graphics_5 = new cjs.Graphics().p("A4cKzQjgtkHKsFQHJsENmjfQNljfMFHJMgigA6SQsFnJjetng");
	var mask_graphics_6 = new cjs.Graphics().p("A4oKnQjYtmHPsBQHPsBNnjYQNojYMBHPMgi9A6BQsBnPjYtpg");
	var mask_graphics_7 = new cjs.Graphics().p("A4zKbQjStnHWr+QHVr9NojSQNpjRL+HVMgjaA5wQr9nWjRtqg");
	var mask_graphics_8 = new cjs.Graphics().p("A4+KPQjLtpHbr6QHbr6NqjKQNrjLL6HbMgj2A5eQr6nbjKtsg");
	var mask_graphics_9 = new cjs.Graphics().p("A5JKDQjEtqHhr3QHhr2NrjEQNtjEL2HhMgkSA5MQr2nhjEttg");
	var mask_graphics_10 = new cjs.Graphics().p("A5TJ3Qi+tsHnryQHnrzNti9QNti9LzHnMgkvA46Qrynni8tvg");
	var mask_graphics_11 = new cjs.Graphics().p("A5eJrQi3ttHtrvQHsruNvi3QNvi2LuHsMglKA4oQrunti2twg");
	var mask_graphics_12 = new cjs.Graphics().p("A5oJfQiwtuHyrrQHyrrNwivQNxiwLqHyMglmA4VQrqnyivtyg");
	var mask_graphics_13 = new cjs.Graphics().p("A5yJTQiqtwH4rnQH5rmNxipQNyipLmH4MgmCA4CQrmn4iotzg");
	var mask_graphics_14 = new cjs.Graphics().p("A59JHQiitxH+rjQH+rjNyihQNziiLjH9MgmeA3vQrin9iit1g");
	var mask_graphics_15 = new cjs.Graphics().p("A6GI8QictzIErfQIDrfNzibQN1ibLfIEMgm5A3cQrfoEiat1g");
	var mask_graphics_16 = new cjs.Graphics().p("A6QIwQiVt0IJrbQIJraN1iVQN2iULaIJMgnUA3JQrboKiTt2g");
	var mask_graphics_17 = new cjs.Graphics().p("A6aIkQiOt1IPrXQIPrWN2iOQN2iNLXIPMgnvA20QrXoOiNt4g");
	var mask_graphics_18 = new cjs.Graphics().p("A6jIYQiHt1IUrTQIVrTN2iGQN4iHLSIUMgoKA2hQrSoUiGt5g");
	var mask_graphics_19 = new cjs.Graphics().p("A6sINQiBt3IarPQIarON4iAQN5h/LOIZMgolA2NQrOoah/t5g");
	var mask_graphics_20 = new cjs.Graphics().p("A61IBQh6t4IgrKQIfrKN5h5QN6h5LKIfMgpAA15QrKofh4t7g");
	var mask_graphics_21 = new cjs.Graphics().p("A6+H1Qhzt4IlrGQIlrGN6hyQN6hyLGIlMgpaA1kQrGolhxt8g");
	var mask_graphics_22 = new cjs.Graphics().p("A7HHqQhst6IrrCQIqrBN7hrQN7hrLCIqMgp1A1PQrCoqhqt8g");
	var mask_graphics_23 = new cjs.Graphics().p("A7QHeQhkt6Iwq+QIvq9N8hkQN8hkK9IwMgqPA06Qq9owhkt9g");
	var mask_graphics_24 = new cjs.Graphics().p("A7YHTQhet7I2q5QI1q5N8heQN8hdK5I1MgqpA0mQq4o1hdt+g");
	var mask_graphics_25 = new cjs.Graphics().p("A7gHHQhXt7I7q1QI6q1N9hWQN9hWK1I6MgrDA0QQq1o6hVt/g");
	var mask_graphics_26 = new cjs.Graphics().p("A7oG8QhQt8JAqxQJAqwN9hPQN+hQKwJAMgrdAz7QqwpAhOt/g");
	var mask_graphics_27 = new cjs.Graphics().p("A7wGxQhJt9JFqsQJFqsN+hIQN/hJKrJFMgr2AzlQqrpFhIt/g");
	var mask_graphics_28 = new cjs.Graphics().p("A74GlQhCt9JLqoQJKqnN+hBQN/hCKnJLMgsPAzPQqnpLhBuAg");
	var mask_graphics_29 = new cjs.Graphics().p("A7/GaQg8t+JQqjQJQqiN/g7QN/g6KjJPMgspAy5QqipPg6uBg");
	var mask_graphics_30 = new cjs.Graphics().p("A8HGPQg0t/JVqeQJVqeN/gzQOAg0KeJVMgtCAyiQqepUgzuBg");
	var mask_graphics_31 = new cjs.Graphics().p("A8OGDQgtt+JaqaQJaqZN/gtQOBgsKZJZMgtbAyNQqZpagsuCg");
	var mask_graphics_32 = new cjs.Graphics().p("A8VF4Qgmt/JfqUQJfqVOAgmQOBgmKUJfMgtzAx2QqVpfgluCg");
	var mask_graphics_33 = new cjs.Graphics().p("A8bFtQggt/JkqQQJkqQOAgfQOBgfKQJkMguMAxfQqPpkgeuCg");
	var mask_graphics_34 = new cjs.Graphics().p("A8iFiQgZt/JqqMQJpqKOAgYQOBgYKLJpMgukAxHQqLppgXuCg");
	var mask_graphics_35 = new cjs.Graphics().p("A8pFXQgRt/JuqHQJuqGOBgRQOBgRKGJuMgu8AwxQqGpvgRuCg");
	var mask_graphics_36 = new cjs.Graphics().p("A8vFMQgLt/J0qCQJzqBOAgKQOCgLKBJzMgvUAwaQqBpzgKuDg");
	var mask_graphics_37 = new cjs.Graphics().p("A81FBQgEt/J5p9QJ4p8OAgEQOBgDJ9J4MgvsAwCQp8p4gDuDg");
	var mask_graphics_38 = new cjs.Graphics().p("A87E3QADuAJ+p4QJ8p3OBADQOBAEJ4J9MgwEAvqQp3p9AEuCg");
	var mask_graphics_39 = new cjs.Graphics().p("A9AEsQAJuAKDpzQKBpyOBAKQOBALJzKCMgwbAvSQpzqCAMuCg");
	var mask_graphics_40 = new cjs.Graphics().p("A9GEhQARt/KHpuQKGpuOBASQOBARJtKHMgwyAu6QptqHASuCg");
	var mask_graphics_41 = new cjs.Graphics().p("A9LEWQAYt/KLppQKMpoOAAYQOBAZJoKLMgxJAuiQppqMAauCg");
	var mask_graphics_42 = new cjs.Graphics().p("A9QEMQAet/KRpkQKQpjOAAfQOAAgJkKQMgxgAuIQpkqQAhuBg");
	var mask_graphics_43 = new cjs.Graphics().p("A9VEBQAlt+KWpfQKUpeOAAmQOAAmJfKVMgx3AtwQpeqUAnuCg");
	var mask_graphics_44 = new cjs.Graphics().p("A9aD3QAtt+KZpaQKapZN/AtQOAAtJZKaMgyNAtXQpZqZAuuBg");
	var mask_graphics_45 = new cjs.Graphics().p("A9eDsQAzt+KepUQKepUN/A0QOAA1JUKeMgykAs+QpUqeA2uBg");
	var mask_graphics_46 = new cjs.Graphics().p("A9jDiQA6t9KjpQQKjpON+A7QOAA7JOKiMgy5AsmQpPqjA8uAg");
	var mask_graphics_47 = new cjs.Graphics().p("A9nDYQBBt9KopKQKnpKN+BCQN+BCJKKnMgzPAsMQpKqnBDt/g");
	var mask_graphics_48 = new cjs.Graphics().p("A9rDOQBIt9KspFQKspEN9BJQN+BJJEKsMgzlAryQpEqrBKt/g");
	var mask_graphics_49 = new cjs.Graphics().p("A9vDDQBPt8Kxo/QKwo/N8BQQN+BQI/KwMgz7ArZQo/qwBRt/g");
	var mask_graphics_50 = new cjs.Graphics().p("A9yC5QBVt7K1o6QK1o6N8BXQN9BXI5K0Mg0QAq/Qo5q0BYt+g");
	var mask_graphics_51 = new cjs.Graphics().p("A92CvQBdt6K5o1QK5o0N7BeQN8BdI1K5Mg0lAqlQo1q5Bft9g");
	var mask_graphics_52 = new cjs.Graphics().p("A95ClQBjt6K+ovQK9ovN7BlQN7BlIvK9Mg06AqKQovq9Bmt8g");
	var mask_graphics_53 = new cjs.Graphics().p("A98CbQBqt5LCopQLBoqN6BsQN7BrIpLCMg1OApwQoqrBBtt8g");
	var mask_graphics_54 = new cjs.Graphics().p("A9/CRQBxt4LGokQLGokN5ByQN5BzIkLFMg1jApWQokrFB0t7g");
	var mask_graphics_55 = new cjs.Graphics().p("A+CCHQB4t3LLoeQLJofN4B5QN5B6IeLJMg13Ao8QoerKB6t6g");
	var mask_graphics_56 = new cjs.Graphics().p("A+EB+QB/t2LOoaQLOoZN3CBQN4CAIZLOMg2MAogQoZrOCCt4g");
	var mask_graphics_57 = new cjs.Graphics().p("A+HB0QCGt1LToUQLSoTN2CHQN2CHIULSMg2gAoFQoTrSCIt3g");
	var mask_graphics_58 = new cjs.Graphics().p("A+JBqQCNt0LWoOQLXoNN0CNQN2COIOLWMg2zAnrQoOrWCPt3g");
	var mask_graphics_59 = new cjs.Graphics().p("A+LBhQCUtzLaoJQLaoIN0CVQN0CVIJLaMg3HAnPQoIraCWt1g");
	var mask_graphics_60 = new cjs.Graphics().p("A+NBXQCbtyLeoCQLeoDNzCcQNzCbICLfMg3ZAmzQoCreCct0g");
	var mask_graphics_61 = new cjs.Graphics().p("A+PBOQCitxLin9QLin8NxCiQNzCiH8LiMg3sAmYQn9riCjtyg");
	var mask_graphics_62 = new cjs.Graphics().p("A+QBEQCotvLnn3QLmn3NvCpQNxCpH3LmMg3/Al9Qn3rmCqtyg");
	var mask_graphics_63 = new cjs.Graphics().p("A+RA7QCvtuLqnxQLqnyNuCwQNwCwHxLqMg4SAlhQnxrqCxtwg");
	var mask_graphics_64 = new cjs.Graphics().p("A+SAxQC1tsLunsQLunrNtC3QNuC2HrLuMg4kAlFQnrruC4tvg");
	var mask_graphics_65 = new cjs.Graphics().p("A+TAoQC8trLynmQLxnlNsC9QNsC+HmLxMg42AkpQnmryC/ttg");
	var mask_graphics_66 = new cjs.Graphics().p("A+UAfQDDtpL2ngQL1ngNqDEQNrDEHgL2Mg5JAkMQnfr1DFtsg");
	var mask_graphics_67 = new cjs.Graphics().p("A+VAWQDKtoL6naQL4naNpDLQNpDLHaL5Mg5aAjwQnar5DMtqg");
	var mask_graphics_68 = new cjs.Graphics().p("A+VANQDRtmL9nVQL8nUNnDSQNoDSHUL8Mg5sAjUQnUr9DTtog");
	var mask_graphics_69 = new cjs.Graphics().p("A+VAEQDXtlMBnOQMAnONlDZQNmDYHOMAMg59Ai3QnOsADatng");
	var mask_graphics_70 = new cjs.Graphics().p("A+VgEQDetkMEnIQMDnINkDfQNkDfHIMEMg6OAiZQnIsDDhtkg");
	var mask_graphics_71 = new cjs.Graphics().p("A+VgNQDltiMHnCQMHnCNiDlQNiDmHCMHMg6eAh9QnCsHDntig");
	var mask_graphics_72 = new cjs.Graphics().p("A+VgWQDstgMLm8QMKm8NgDsQNhDtG8MKMg6vAhgQm8sKDtthg");
	var mask_graphics_73 = new cjs.Graphics().p("A+UgfQDyteMOm2QMOm2NeDzQNfDzG2MOMg7AAhDQm2sOD1tfg");
	var mask_graphics_74 = new cjs.Graphics().p("A+UgnQD5tdMSmwQMRmwNcD6QNdD6GwMRMg7QAgmQmwsSD7tcg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-135.9,y:-16.8}).wait(1).to({graphics:mask_graphics_1,x:-135.2,y:-17.2}).wait(1).to({graphics:mask_graphics_2,x:-134.6,y:-17.6}).wait(1).to({graphics:mask_graphics_3,x:-133.9,y:-18}).wait(1).to({graphics:mask_graphics_4,x:-133.3,y:-18.4}).wait(1).to({graphics:mask_graphics_5,x:-132.6,y:-18.8}).wait(1).to({graphics:mask_graphics_6,x:-132,y:-19.2}).wait(1).to({graphics:mask_graphics_7,x:-131.4,y:-19.6}).wait(1).to({graphics:mask_graphics_8,x:-130.7,y:-20.1}).wait(1).to({graphics:mask_graphics_9,x:-130.1,y:-20.5}).wait(1).to({graphics:mask_graphics_10,x:-129.5,y:-20.9}).wait(1).to({graphics:mask_graphics_11,x:-128.8,y:-21.4}).wait(1).to({graphics:mask_graphics_12,x:-128.2,y:-21.8}).wait(1).to({graphics:mask_graphics_13,x:-127.6,y:-22.3}).wait(1).to({graphics:mask_graphics_14,x:-127,y:-22.8}).wait(1).to({graphics:mask_graphics_15,x:-126.4,y:-23.2}).wait(1).to({graphics:mask_graphics_16,x:-125.8,y:-23.7}).wait(1).to({graphics:mask_graphics_17,x:-125.2,y:-24.2}).wait(1).to({graphics:mask_graphics_18,x:-124.6,y:-24.7}).wait(1).to({graphics:mask_graphics_19,x:-124,y:-25.1}).wait(1).to({graphics:mask_graphics_20,x:-123.4,y:-25.6}).wait(1).to({graphics:mask_graphics_21,x:-122.8,y:-26.1}).wait(1).to({graphics:mask_graphics_22,x:-122.2,y:-26.6}).wait(1).to({graphics:mask_graphics_23,x:-121.7,y:-27.2}).wait(1).to({graphics:mask_graphics_24,x:-121.1,y:-27.7}).wait(1).to({graphics:mask_graphics_25,x:-120.5,y:-28.2}).wait(1).to({graphics:mask_graphics_26,x:-119.9,y:-28.7}).wait(1).to({graphics:mask_graphics_27,x:-119.4,y:-29.2}).wait(1).to({graphics:mask_graphics_28,x:-118.8,y:-29.8}).wait(1).to({graphics:mask_graphics_29,x:-118.3,y:-30.3}).wait(1).to({graphics:mask_graphics_30,x:-117.7,y:-30.9}).wait(1).to({graphics:mask_graphics_31,x:-117.2,y:-31.4}).wait(1).to({graphics:mask_graphics_32,x:-116.7,y:-32}).wait(1).to({graphics:mask_graphics_33,x:-116.1,y:-32.5}).wait(1).to({graphics:mask_graphics_34,x:-115.6,y:-33.1}).wait(1).to({graphics:mask_graphics_35,x:-115.1,y:-33.7}).wait(1).to({graphics:mask_graphics_36,x:-114.6,y:-34.3}).wait(1).to({graphics:mask_graphics_37,x:-114.1,y:-34.9}).wait(1).to({graphics:mask_graphics_38,x:-113.6,y:-35.4}).wait(1).to({graphics:mask_graphics_39,x:-113.1,y:-36}).wait(1).to({graphics:mask_graphics_40,x:-112.6,y:-36.6}).wait(1).to({graphics:mask_graphics_41,x:-112.1,y:-37.3}).wait(1).to({graphics:mask_graphics_42,x:-111.6,y:-37.9}).wait(1).to({graphics:mask_graphics_43,x:-111.1,y:-38.5}).wait(1).to({graphics:mask_graphics_44,x:-110.7,y:-39.1}).wait(1).to({graphics:mask_graphics_45,x:-110.2,y:-39.7}).wait(1).to({graphics:mask_graphics_46,x:-109.8,y:-40.4}).wait(1).to({graphics:mask_graphics_47,x:-109.3,y:-41}).wait(1).to({graphics:mask_graphics_48,x:-108.9,y:-41.7}).wait(1).to({graphics:mask_graphics_49,x:-108.4,y:-42.3}).wait(1).to({graphics:mask_graphics_50,x:-108,y:-43}).wait(1).to({graphics:mask_graphics_51,x:-107.6,y:-43.6}).wait(1).to({graphics:mask_graphics_52,x:-107.1,y:-44.3}).wait(1).to({graphics:mask_graphics_53,x:-106.7,y:-44.9}).wait(1).to({graphics:mask_graphics_54,x:-106.3,y:-45.6}).wait(1).to({graphics:mask_graphics_55,x:-105.9,y:-46.3}).wait(1).to({graphics:mask_graphics_56,x:-105.5,y:-47}).wait(1).to({graphics:mask_graphics_57,x:-105.1,y:-47.6}).wait(1).to({graphics:mask_graphics_58,x:-104.7,y:-48.3}).wait(1).to({graphics:mask_graphics_59,x:-104.3,y:-49}).wait(1).to({graphics:mask_graphics_60,x:-103.9,y:-49.7}).wait(1).to({graphics:mask_graphics_61,x:-103.6,y:-50.4}).wait(1).to({graphics:mask_graphics_62,x:-103.2,y:-51.1}).wait(1).to({graphics:mask_graphics_63,x:-102.8,y:-51.8}).wait(1).to({graphics:mask_graphics_64,x:-102.5,y:-52.5}).wait(1).to({graphics:mask_graphics_65,x:-102.1,y:-53.2}).wait(1).to({graphics:mask_graphics_66,x:-101.8,y:-54}).wait(1).to({graphics:mask_graphics_67,x:-101.4,y:-54.7}).wait(1).to({graphics:mask_graphics_68,x:-101.1,y:-55.4}).wait(1).to({graphics:mask_graphics_69,x:-100.7,y:-56.1}).wait(1).to({graphics:mask_graphics_70,x:-100.4,y:-56.8}).wait(1).to({graphics:mask_graphics_71,x:-100.1,y:-57.6}).wait(1).to({graphics:mask_graphics_72,x:-99.8,y:-58.3}).wait(1).to({graphics:mask_graphics_73,x:-99.4,y:-59}).wait(1).to({graphics:mask_graphics_74,x:-99.1,y:-59.8}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AoRqDQO8AbBgO6QAQCagUCY");
	this.shape.setTransform(45.7,-90.7);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.8,-167,34.2,143.2);


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
	this.instance.setTransform(38.4,-170.9,0.422,0.422,0,0,0,-0.1,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNB8QgNgBgMgEIgMgFIgBgBIgCAAIgCgBIgBgBIgBgBIgCAAIgBgBIgBgBIgCgBIgBAAIgBgBIgCgBIAAgBIgCAAIgBgBIgBgBIgBgBIgBgBIgCAAIgBgBIAAgBIgBgBIgBgBIgBAAIgCgBIAAgBIgBgBIgBgBIgBAAIgBgBIAAgBIgBgBIgBgBIgBAAIgBgBIgBgBIgBgBIAAgBIgBgBIgBgBIAAAAIgBgBIgBgBIAAgBIgBgBIgBgBIAAAAIgBgBIgBgBIgBgBIAAgBIgBgBIgBgBIAAAAIgBgBIAAgBIAAgBIgBgBIgBgBIAAgBIgBAAIAAgBIgBgBIgBgBIAAgBIgBgCIgBgBIgBgCIAAgBIgBgBIAAgBIAAgBIgBgBIAAgBIAAAAIgBgBIAAgBIAAgBIgBgBIAAgBIgBgBIAAgBIgBgBIAAgBIAAAAIgBgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAAAIAAgBIgBgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIgBgCIAAgBIAAgCIAAgBIgBgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIgBgBIAAgBIABAAIgBgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIABgBIgBgBIABgBIgBgBIABgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIABgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIABgBIAAgBIABgBIAAgBIAAgBIAAgBIABgBIABgBIAAgBIABgBIAAgBIABgBIAAgBIABgBIABgCIABgBIABgBIAAgBIABgBIAAgBIABgBIAAgBIABgBIABgBIABgBIABgBIABgBIABgBIABgBIAAgBIABgBIABgCIABgBIADgDIANgLIAOgKIAOgHQAIgEAIgCIAOgDQAJgBAJAAIAKAAIAFABIATAEIAMAEIADABIADABIAEACIABABIACAAIABABIABABIABABIACAAIABABIACABIABABIAAAAIACABIABABIABABIABABIABAAIACABIAAABIABABIABABIABAAIABABIACABIAAABIABABIACAAIAAABIABABIABABIAAABIABAAIABABIABABIABABIABABIABABIAAAAIABABIABABIAAABIABABIAAABIABABIABAAIABABIABABIAAABIABABIABABIAAAAIABABIAAABIABABIAAABIABABIAAABIABAAIAAABIABABIAAABIACABIAAABIAAABIABABIAAABIABAAIAAABIABABIAAABIABABIAAABIAAABIAAABIABAAIAAABIAAABIABABIAAABIABABIAAABIAAABIABABIAAABIABAAIAAABIAAABIABABIAAABIABABIAAABIAAABIAAABIAAABIABAAIAAABIAAABIAAABIAAABIAAABIAAABIABABIAAABIAAABIAAABIAAABIABABIAAAAIAAABIAAABIAAABIAAABIAAABIABABIAAABIAAABIAAABIAAABIAAABIAAABIABABIgBAAIABABIAAABIgBABIABABIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIgBABIABAAIgBABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIgBABIAAABIAAABIAAABIAAABIAAABIgBABIAAABIAAABIAAABIgBABIAAABIAAABIAAABIAAABIAAABIgBABIAAABIAAABIgBABIAAABIAAABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIgBABIAAABIAAABIAAABIgBABIAAABIgBABIAAABIgBABIgBABIAAABIgBABIgBABIgBABIAAABIgBABIgBABIAAACIgBABIAAABIgBABIgBABIgBABIgBABIgBABIgBABIAAABIgBABIgBABIgBABIgBABIgBACIgBABIgBABIgBABIgBABIgBABIgCACIgFAEIgEADIgDADIgEACIgBABIgCACIgRAIQgUAJgXABIgGAAIgNgBg");
	this.shape.setTransform(22.5,-143.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-215.3,105.5,83.9);


// stage content:
(lib.writingsuccess_Fontkid_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_458 = function() {
		showSuccess();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(458).call(this.frame_458).wait(1));

	// Honey bee
	this.instance = new lib.honeyflap("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(164,140.1,0.999,0.999,0,-8.5,171.5,22.4,-144);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({guide:{path:[164.2,140.3,204.5,95.5,264.3,91.6,346.2,94.6,365,148.5,374.3,175.1,369.9,198.5,365.6,221.3,347.3,245.5,317.4,285,255.5,288.5]}},195).wait(10).to({startPosition:0},0).to({guide:{path:[255.5,288.4,271.2,287.3,286.9,288.5,316.2,291.1,339.4,309.5,362.9,328.1,369.9,357.3,377,386.9,367.5,415.4,358,443.8,332.8,460,307.4,476.2,277,476.8,248.3,478,221.3,468.2,195.5,458.8,172.1,444.7]}},173).wait(13).to({startPosition:0},0).to({guide:{path:[172.1,444.8,169.1,531.7,228.4,523.3,287.6,514.9,314.6,532.1,341.7,549.4,407.7,559.2,473.4,569,528.4,648.3]}},58).wait(1));

	// dot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ag7A7QgYgYAAgjQAAgiAYgZQAZgYAiAAQAjAAAZAYQAYAZAAAiQAAAjgYAYQgZAZgjAAQgiAAgZgZg");
	this.shape.setTransform(255.5,288.4,1.009,1.009);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).to({_off:true},195).wait(10).to({_off:false,x:173.5,y:445.4},0).to({_off:true},173).wait(72));

	// ar1
	this.instance_1 = new lib.SC_ar("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(301.1,435.4,0.75,0.75,-37.7,0,0,0.1,0.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(214).to({_off:false},0).wait(245));

	// ar1
	this.instance_2 = new lib.SC_ar("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(294.3,66.1,0.75,0.75,-36.9,0,0,51.5,-81.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(450));

	// Layer 8 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_356 = new cjs.Graphics().p("EAQ7AnOIAAveIDwAAIAAPeg");
	var mask_graphics_357 = new cjs.Graphics().p("AiCHvIAAvdIEFAAIAAPdg");
	var mask_graphics_358 = new cjs.Graphics().p("AiOHvIAAvdIEdAAIAAPdg");
	var mask_graphics_359 = new cjs.Graphics().p("AiZHvIAAvdIEzAAIAAPdg");
	var mask_graphics_360 = new cjs.Graphics().p("AilHvIAAvdIFKAAIAAPdg");
	var mask_graphics_361 = new cjs.Graphics().p("AiwHvIAAvdIFhAAIAAPdg");
	var mask_graphics_362 = new cjs.Graphics().p("Ai7HvIAAvdIF3AAIAAPdg");
	var mask_graphics_363 = new cjs.Graphics().p("AjHHvIAAvdIGOAAIAAPdg");
	var mask_graphics_364 = new cjs.Graphics().p("AjRHvIAAvdIGjAAIAAPdg");
	var mask_graphics_365 = new cjs.Graphics().p("AjdHvIAAvdIG7AAIAAPdg");
	var mask_graphics_366 = new cjs.Graphics().p("AjoHvIAAvdIHRAAIAAPdg");
	var mask_graphics_367 = new cjs.Graphics().p("Aj0HvIAAvdIHpAAIAAPdg");
	var mask_graphics_368 = new cjs.Graphics().p("Aj/HvIAAvdIH/AAIAAPdg");
	var mask_graphics_369 = new cjs.Graphics().p("AkKHvIAAvdIIVAAIAAPdg");
	var mask_graphics_370 = new cjs.Graphics().p("AkWHvIAAvdIItAAIAAPdg");
	var mask_graphics_371 = new cjs.Graphics().p("AkhHvIAAvdIJDAAIAAPdg");
	var mask_graphics_372 = new cjs.Graphics().p("AksHvIAAvdIJaAAIAAPdg");
	var mask_graphics_373 = new cjs.Graphics().p("Ak4HvIAAvdIJxAAIAAPdg");
	var mask_graphics_374 = new cjs.Graphics().p("AlDHvIAAvdIKHAAIAAPdg");
	var mask_graphics_375 = new cjs.Graphics().p("AlPHvIAAvdIKfAAIAAPdg");
	var mask_graphics_376 = new cjs.Graphics().p("AlaHvIAAvdIK1AAIAAPdg");
	var mask_graphics_377 = new cjs.Graphics().p("AllHvIAAvdILLAAIAAPdg");
	var mask_graphics_378 = new cjs.Graphics().p("AlwHvIAAvdILhAAIAAPdg");
	var mask_graphics_379 = new cjs.Graphics().p("Al8HvIAAvdIL5AAIAAPdg");
	var mask_graphics_380 = new cjs.Graphics().p("AmHHvIAAvdIMPAAIAAPdg");
	var mask_graphics_381 = new cjs.Graphics().p("AmSHvIAAvdIMlAAIAAPdg");
	var mask_graphics_382 = new cjs.Graphics().p("AmeHvIAAvdIM9AAIAAPdg");
	var mask_graphics_383 = new cjs.Graphics().p("AmpHvIAAvdINTAAIAAPdg");
	var mask_graphics_384 = new cjs.Graphics().p("Am0HvIAAvdINpAAIAAPdg");
	var mask_graphics_385 = new cjs.Graphics().p("EAGeAnOIAAveIOCAAIAAPeg");
	var mask_graphics_386 = new cjs.Graphics().p("AnjHvIAAvdIPHAAIAAPdg");
	var mask_graphics_387 = new cjs.Graphics().p("EAERAnOIAAveIQOAAIAAPeg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(356).to({graphics:mask_graphics_356,x:132.3,y:251}).wait(1).to({graphics:mask_graphics_357,x:251.4,y:452.5}).wait(1).to({graphics:mask_graphics_358,x:250.2,y:452.5}).wait(1).to({graphics:mask_graphics_359,x:249,y:452.5}).wait(1).to({graphics:mask_graphics_360,x:247.8,y:452.5}).wait(1).to({graphics:mask_graphics_361,x:246.6,y:452.5}).wait(1).to({graphics:mask_graphics_362,x:245.4,y:452.5}).wait(1).to({graphics:mask_graphics_363,x:244.2,y:452.5}).wait(1).to({graphics:mask_graphics_364,x:243,y:452.5}).wait(1).to({graphics:mask_graphics_365,x:241.8,y:452.5}).wait(1).to({graphics:mask_graphics_366,x:240.5,y:452.5}).wait(1).to({graphics:mask_graphics_367,x:239.3,y:452.5}).wait(1).to({graphics:mask_graphics_368,x:238.1,y:452.5}).wait(1).to({graphics:mask_graphics_369,x:236.9,y:452.5}).wait(1).to({graphics:mask_graphics_370,x:235.7,y:452.5}).wait(1).to({graphics:mask_graphics_371,x:234.5,y:452.5}).wait(1).to({graphics:mask_graphics_372,x:233.3,y:452.5}).wait(1).to({graphics:mask_graphics_373,x:232,y:452.5}).wait(1).to({graphics:mask_graphics_374,x:230.8,y:452.5}).wait(1).to({graphics:mask_graphics_375,x:229.6,y:452.5}).wait(1).to({graphics:mask_graphics_376,x:228.4,y:452.5}).wait(1).to({graphics:mask_graphics_377,x:227.2,y:452.5}).wait(1).to({graphics:mask_graphics_378,x:226,y:452.5}).wait(1).to({graphics:mask_graphics_379,x:224.8,y:452.5}).wait(1).to({graphics:mask_graphics_380,x:223.6,y:452.5}).wait(1).to({graphics:mask_graphics_381,x:222.3,y:452.5}).wait(1).to({graphics:mask_graphics_382,x:221.1,y:452.5}).wait(1).to({graphics:mask_graphics_383,x:219.9,y:452.5}).wait(1).to({graphics:mask_graphics_384,x:218.7,y:452.5}).wait(1).to({graphics:mask_graphics_385,x:131.2,y:251}).wait(1).to({graphics:mask_graphics_386,x:213.9,y:452.5}).wait(1).to({graphics:mask_graphics_387,x:131.1,y:251}).wait(72));

	// Layer 7
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(25,1,1).p("AvspuQDriNECheQEPhiEdAMQEwAGD+CiQD8CiBfEcQBgEdhHEnQhGEkjrC6QjpC4klAaQicAMidgL");
	this.shape_1.setTransform(272.5,382.4,1,1,0,180,0);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(356).to({_off:false},0).wait(103));

	// Layer 6 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_214 = new cjs.Graphics().p("EgGBAgWQm1pXB0reQB0rdJYmzQJZm1LcB0MgIwA3UQrdh0mzpag");
	var mask_1_graphics_215 = new cjs.Graphics().p("Amtf4QmnphCFrbQCFrZJhmmQJjmnLaCFMgKBA3FQrZiEmnpkg");
	var mask_1_graphics_216 = new cjs.Graphics().p("AnXfaQmZpqCVrYQCVrVJrmZQJsmZLXCWMgLRA21QrWiVmYptg");
	var mask_1_graphics_217 = new cjs.Graphics().p("AoBe8QmLpzCmrUQCmrSJzmLQJ1mKLTCmMgMgA2kQrSimmKp2g");
	var mask_1_graphics_218 = new cjs.Graphics().p("AoqeeQl8p8C2rQQC2rOJ8l8QJ+l8LPC2MgNvA2RQrOi2l8p/g");
	var mask_1_graphics_219 = new cjs.Graphics().p("ApSeAQluqFDHrLQDGrKKFltQKGltLLDGMgO+A18QrKjHltqHg");
	var mask_1_graphics_220 = new cjs.Graphics().p("Ap5diQlfqNDXrGQDWrFKNlfQKOlfLHDXMgQNA1lQrFjWleqQg");
	var mask_1_graphics_221 = new cjs.Graphics().p("AqgdEQlPqVDmrBQDnrAKVlQQKWlPLBDnMgRaA1MQrAjnlQqXg");
	var mask_1_graphics_222 = new cjs.Graphics().p("ArFcmQlAqcD2q8QD3q6KclBQKelAK7D2MgSnA0yQq7j2lAqfg");
	var mask_1_graphics_223 = new cjs.Graphics().p("ArpcIQkxqjEGq2QEHq1KjkxQKlkxK1EGMgT0A0WQq0kGkxqmg");
	var mask_1_graphics_224 = new cjs.Graphics().p("AsMbqQkiqqEWqwQEWquKrkiQKrkhKvEWMgU/Az4QqvkWkhqtg");
	var mask_1_graphics_225 = new cjs.Graphics().p("AsubNQkTqxEmqpQEmqoKxkSQKxkSKpEmMgWLAzYQqokmkRqyg");
	var mask_1_graphics_226 = new cjs.Graphics().p("AtPavQkDq3E1qiQE2qhK2kCQK4kDKiE1MgXVAy3Qqhk1kCq4g");
	var mask_1_graphics_227 = new cjs.Graphics().p("AtvaRQjzq8FFqbQFEqaK8jyQK9jzKbFFMgYfAyUQqZlFjyq+g");
	var mask_1_graphics_228 = new cjs.Graphics().p("AuOZ0QjjrCFUqUQFTqSLCjiQLCjiKTFTMgZmAxwQqTlUjirDg");
	var mask_1_graphics_229 = new cjs.Graphics().p("AusZWQjTrGFjqMQFiqKLHjSQLHjSKLFiMgauAxJQqLlijSrJg");
	var mask_1_graphics_230 = new cjs.Graphics().p("AvJY5QjCrLFxqDQFxqCLLjCQLMjCKDFxMgb1AwhQqDlxjCrNg");
	var mask_1_graphics_231 = new cjs.Graphics().p("AvkYcQiyrPF/p7QGAp6LPixQLQiyJ7GAMgc8Av4Qp6mAixrRg");
	var mask_1_graphics_232 = new cjs.Graphics().p("Av/X/QihrTGOpyQGNpwLTihQLUiiJyGOMgeBAvNQpxmOihrVg");
	var mask_1_graphics_233 = new cjs.Graphics().p("AwYXiQiRrWGcppQGcpnLWiRQLYiQJoGcMgfFAugQpomciQrZg");
	var mask_1_graphics_234 = new cjs.Graphics().p("AwwXGQiBraGqpfQGqpdLZiAQLbiAJfGpMggIAtyQpfmqh/rbg");
	var mask_1_graphics_235 = new cjs.Graphics().p("AxHWqQhwrdG4pVQG3pULchvQLdhvJVG3MghKAtCQpUm3hvreg");
	var mask_1_graphics_236 = new cjs.Graphics().p("AxdWOQhfrfHFpLQHFpKLeheQLghfJKHFMgiKAsRQpLnFhergg");
	var mask_1_graphics_237 = new cjs.Graphics().p("AxyVyQhOrhHSpAQHSo/LhhOQLhhOJAHSMgjKAreQpAnShOrig");
	var mask_1_graphics_238 = new cjs.Graphics().p("AyFVWQg+riHgo2QHfo0Lig9QLjg9I1HfMgkJAqqQo1nfg9rkg");
	var mask_1_graphics_239 = new cjs.Graphics().p("AyXU7QgtrjHsorQHsopLjgsQLkgtIqHsMglGAp1Qoqnsgsrlg");
	var mask_1_graphics_240 = new cjs.Graphics().p("AyoUgQgcrkH5ofQH4oeLkgcQLkgbIfH4MgmCAo+Qofn4gbrmg");
	var mask_1_graphics_241 = new cjs.Graphics().p("Ay4UGQgLrlIFoUQIEoSLlgLQLlgKITIEMgm9AoGQoUoFgKrlg");
	var mask_1_graphics_242 = new cjs.Graphics().p("AzGTrQAGrkIQoHQIRoHLkAGQLlAGIIIPMgn4AnNQoHoQAHrmg");
	var mask_1_graphics_243 = new cjs.Graphics().p("AzTTRQAWrkIdn7QIcn7LkAXQLkAYH8IbMgowAmSQn7ocAYrmg");
	var mask_1_graphics_244 = new cjs.Graphics().p("AzfS4QAnrkIonuQInnvLjAoQLkAoHvInMgpmAlWQnvooAprkg");
	var mask_1_graphics_245 = new cjs.Graphics().p("AzpSiQA2rjIxnjQIxnkLiA3QLjA2HkIwMgqUAkiQnkoxA3rkg");
	var mask_1_graphics_246 = new cjs.Graphics().p("AzxSNQBEriI6nYQI7nZLhBFQLiBEHZI5MgrBAjtQnZo6BFrig");
	var mask_1_graphics_247 = new cjs.Graphics().p("Az4R4QBSrgJDnOQJEnNLfBTQLhBTHOJCMgrtAi3QnOpDBUrhg");
	var mask_1_graphics_248 = new cjs.Graphics().p("Az/RjQBhreJMnCQJMnDLeBiQLfBhHCJLMgsXAiAQnDpMBirfg");
	var mask_1_graphics_249 = new cjs.Graphics().p("A0EROQBurcJVm2QJUm3LdBvQLdBwG3JTMgtCAhJQm3pUBxreg");
	var mask_1_graphics_250 = new cjs.Graphics().p("A0JQ6QB9raJdmqQJcmsLbB+QLaB+GsJcMgtqAgQQmspdB/rbg");
	var mask_1_graphics_251 = new cjs.Graphics().p("A0NQmQCLrXJmmfQJkmfLYCLQLYCMGgJkMguSAfYQmfplCMrZg");
	var mask_1_graphics_252 = new cjs.Graphics().p("A0PQTQCZrVJtmTQJtmTLVCaQLVCaGTJsMgu4AeeQmTpuCbrVg");
	var mask_1_graphics_253 = new cjs.Graphics().p("A0RQAQCnrSJ1mHQJ0mHLSCoQLSCoGIJ0MgveAdjQmHp1CprSg");
	var mask_1_graphics_254 = new cjs.Graphics().p("A0SPtQC1rOJ9l7QJ7l7LPC2QLOC2F8J7MgwCAcoQl7p8C3rPg");
	var mask_1_graphics_255 = new cjs.Graphics().p("A0SPaQDDrKKEluQKDlvLLDEQLLDEFuKCMgwkAbsQlvqEDFrLg");
	var mask_1_graphics_256 = new cjs.Graphics().p("A0RPIQDRrHKLlhQKKliLHDRQLHDSFiKKMgxGAavQljqLDTrHg");
	var mask_1_graphics_257 = new cjs.Graphics().p("A0PO2QDfrCKRlVQKRlWLDDgQLCDeFWKSMgxnAZyQlVqSDgrDg");
	var mask_1_graphics_258 = new cjs.Graphics().p("A0MOkQDsq9KZlIQKWlJK/DtQK+DsFJKYMgyGAY0QlJqYDuq/g");
	var mask_1_graphics_259 = new cjs.Graphics().p("A0IOTQD6q5Kek7QKdk8K6D7QK6D6E7KeMgykAX2Qk8qfD8q6g");
	var mask_1_graphics_260 = new cjs.Graphics().p("A0DODQEHq1KlkuQKjkuK0EIQK1EHEvKkMgzCAW3QkvqkEKq1g");
	var mask_1_graphics_261 = new cjs.Graphics().p("Az+NyQEVqvKqkhQKpkhKwEWQKvEUEiKqMgzeAV3QkhqqEWqwg");
	var mask_1_graphics_262 = new cjs.Graphics().p("Az3NiQEiqpKwkUQKukUKqEjQKqEiEUKvMgz4AU3QkUqwEkqqg");
	var mask_1_graphics_263 = new cjs.Graphics().p("AzvNTQEvqkK1kGQKzkHKlEwQKkEvEGK1Mg0RAT2QkGq1Exqkg");
	var mask_1_graphics_264 = new cjs.Graphics().p("AznNDQE8qdK6j5QK5j5KeE9QKeE8D5K5Mg0pAS1Qj5q5E+qfg");
	var mask_1_graphics_265 = new cjs.Graphics().p("AzdM1QFJqYK+jrQK+jsKYFJQKXFKDsK/Mg1AARzQjrq+FLqYg");
	var mask_1_graphics_266 = new cjs.Graphics().p("AzTMmQFWqRLDjdQLCjeKRFWQKRFWDfLDMg1WAQxQjerCFYqSg");
	var mask_1_graphics_267 = new cjs.Graphics().p("AzIMYQFjqKLHjQQLGjQKLFjQKKFjDRLHMg1qAPvQjQrHFkqLg");
	var mask_1_graphics_268 = new cjs.Graphics().p("Ay8MLQFwqELLjBQLKjDKDFvQKEFwDCLLMg18AOsQjDrLFxqDg");
	var mask_1_graphics_269 = new cjs.Graphics().p("AyuL9QF7p8LPizQLOi1J8F7QJ8F9C1LPMg2OANoQi1rOF+p9g");
	var mask_1_graphics_270 = new cjs.Graphics().p("AygLxQGHp1LTimQLRimJ0GHQJ1GJCnLSMg2fAMlQimrRGKp1g");
	var mask_1_graphics_271 = new cjs.Graphics().p("AySLkQGUpsLWiYQLUiZJtGUQJtGVCZLVMg2uALiQiYrVGVpug");
	var mask_1_graphics_272 = new cjs.Graphics().p("AyCLZQGgplLYiKQLXiLJlGgQJlGhCLLYMg27AKeQiLrYGiplg");
	var mask_1_graphics_273 = new cjs.Graphics().p("AxxLNQGspdLah7QLah8JdGrQJdGtB8LaMg3HAJZQh9raGupdg");
	var mask_1_graphics_274 = new cjs.Graphics().p("AxfLCQG3pULchuQLdhuJUG4QJVG4BuLdMg3TAIUQhurcG6pVg");
	var mask_1_graphics_275 = new cjs.Graphics().p("AxNK4QHDpMLehgQLfhfJLHDQJMHEBgLeMg3cAHQQhgrfHFpLg");
	var mask_1_graphics_276 = new cjs.Graphics().p("Aw6KuQHPpDLfhSQLhhRJDHOQJDHQBRLgMg3kAGLQhSrgHQpDg");
	var mask_1_graphics_277 = new cjs.Graphics().p("AwlKkQHZo6LhhDQLihDI6HaQI6HaBDLiMg3rAFGQhEriHco6g");
	var mask_1_graphics_278 = new cjs.Graphics().p("AwQKbQHkoxLig1QLjg1IxHlQIwHmA1LjMg3xAEAQg1rjHnowg");
	var mask_1_graphics_279 = new cjs.Graphics().p("Av7KSQHwonLjgnQLkgmInHwQInHwAmLkMg31AC7QgnrkHxong");
	var mask_1_graphics_280 = new cjs.Graphics().p("AvkKKQH6odLkgZQLkgYIeH7QIdH6AYLlMg34AB2QgZrlH8odg");
	var mask_1_graphics_281 = new cjs.Graphics().p("AvMKCQIEoTLkgKQLlgKITIFQIUIFAKLlMg36AAwQgKrlIGoTg");
	var mask_1_graphics_282 = new cjs.Graphics().p("A3JdeQAFrkIQoKQIOoJLlAFQLlAEIJIPQIJIQgELkg");
	var mask_1_graphics_283 = new cjs.Graphics().p("A3IcqQATrkIan/QIYn/LkATQLlASH/IaQH/IZgTLlg");
	var mask_1_graphics_284 = new cjs.Graphics().p("A3Hb2QAhrkIkn0QIin1LkAhQLkAhH1IkQH0IjghLkg");
	var mask_1_graphics_285 = new cjs.Graphics().p("A3FbCQAvrjIunqQIsnqLjAwQLjAvHqItQHpItgvLjg");
	var mask_1_graphics_286 = new cjs.Graphics().p("A3DaOQA+riI3nfQI2neLhA9QLjA+HeI2QHfI2g+Ljg");
	var mask_1_graphics_287 = new cjs.Graphics().p("A2/ZaQBMrhJAnUQI+nSLhBLQLhBMHTJAQHUI/hMLhg");
	var mask_1_graphics_288 = new cjs.Graphics().p("A28YmQBbrfJJnIQJInILeBaQLgBaHIJJQHIJIhaLfg");
	var mask_1_graphics_289 = new cjs.Graphics().p("A23XyQBprdJSm9QJQm8LdBoQLdBpG9JRQG9JRhpLeg");
	var mask_1_graphics_290 = new cjs.Graphics().p("A2yW+QB3rbJbmxQJYmwLbB3QLbB2GxJaQGxJah3Lbg");
	var mask_1_graphics_291 = new cjs.Graphics().p("A2sWLQCFrZJjmlQJhmkLYCFQLZCEGlJiQGlJiiFLZg");
	var mask_1_graphics_292 = new cjs.Graphics().p("A2mVYQCUrWJrmZQJpmZLVCUQLWCSGZJqQGaJqiULWg");
	var mask_1_graphics_293 = new cjs.Graphics().p("A2fUlQCirTJzmNQJxmNLSCiQLTCgGNJyQGNJyihLTg");
	var mask_1_graphics_294 = new cjs.Graphics().p("A2XTyQCwrQJ6mBQJ4mALQCwQLPCvGBJ5QGBJ5ivLQg");
	var mask_1_graphics_295 = new cjs.Graphics().p("A2OS/QC9rMKCl0QJ/l0LMC+QLNC8F0KBQF1KBi+LMg");
	var mask_1_graphics_296 = new cjs.Graphics().p("A2FSNQDLrIKJloQKGlnLJDLQLIDLFoKIQFoKHjLLJg");
	var mask_1_graphics_297 = new cjs.Graphics().p("A17RbQDZrEKQlbQKNlbLEDZQLEDZFcKPQFbKOjZLEg");
	var mask_1_graphics_298 = new cjs.Graphics().p("A1xQpQDnrAKXlOQKTlOLADnQLADmFPKWQFOKVjnLAg");
	var mask_1_graphics_299 = new cjs.Graphics().p("A1lP4QD0q8KdlAQKalCK7D1QK7D0FCKcQFBKbj0K7g");
	var mask_1_graphics_300 = new cjs.Graphics().p("A1aPGQEDq2KikzQKgk1K3EDQK2EBE1KiQE0KikCK2g");
	var mask_1_graphics_301 = new cjs.Graphics().p("A1NOWQEQqxKokmQKmkoKxEQQKyEPEnKnQEnKokQKxg");
	var mask_1_graphics_302 = new cjs.Graphics().p("A1ANlQEdqrKukZQKskaKsEdQKrEcEaKtQEaKukdKrg");
	var mask_1_graphics_303 = new cjs.Graphics().p("A0yM1QEqqmK0kLQKxkNKmErQKmEpEMKzQENKykqKmg");
	var mask_1_graphics_304 = new cjs.Graphics().p("A0kMGQE4qgK4j+QK2j/KhE3QKgE3D/K3QD/K4k4Kgg");
	var mask_1_graphics_305 = new cjs.Graphics().p("A0ULXQFEqaK9jwQK7jyKaFFQKaFDDxK9QDyK8lEKag");
	var mask_1_graphics_306 = new cjs.Graphics().p("A0FKoQFSqTLCjjQK/jkKTFSQKUFQDkLBQDjLBlRKTg");
	var mask_1_graphics_307 = new cjs.Graphics().p("Az0J6QFeqMLGjVQLDjXKNFeQKNFdDWLGQDWLFleKNg");
	var mask_1_graphics_308 = new cjs.Graphics().p("AzjJMQFqqFLLjHQLHjJKGFrQKGFqDILJQDILJlrKGg");
	var mask_1_graphics_309 = new cjs.Graphics().p("AzSIfQF3p+LOi5QLMi7J/F3QJ+F2C6LOQC6LNl3J+g");
	var mask_1_graphics_310 = new cjs.Graphics().p("AzAHyQGEp2LRisQLPisJ4GDQJ3GDCsLQQCsLRmDJ3g");
	var mask_1_graphics_311 = new cjs.Graphics().p("AytHGQGQpuLVieQLSifJvGQQJwGPCeLUQCeLUmQJvg");
	var mask_1_graphics_312 = new cjs.Graphics().p("AyZGaQGbpmLYiQQLViQJoGcQJnGbCQLWQCQLXmcJng");
	var mask_1_graphics_313 = new cjs.Graphics().p("AyFFvQGnpeLaiBQLYiDJgGoQJfGnCCLZQCCLamoJfg");
	var mask_1_graphics_314 = new cjs.Graphics().p("AxxFFQGzpWLchzQLbh1JXG0QJXGzB0LbQBzLcmzJXg");
	var mask_1_graphics_315 = new cjs.Graphics().p("AxcEbQG/pNLehlQLdhmJOG/QJPG+BlLeQBlLem+JOg");
	var mask_1_graphics_316 = new cjs.Graphics().p("AxGDyQHKpFLfhWQLfhYJGHLQJGHJBXLgQBXLfnLJGg");
	var mask_1_graphics_317 = new cjs.Graphics().p("AwwDJQHVo7LhhJQLhhJI8HWQI9HUBJLiQBILhnVI8g");
	var mask_1_graphics_318 = new cjs.Graphics().p("AwaChQHhoyLig6QLig7IzHhQI0HfA6LjQA6LingI0g");
	var mask_1_graphics_319 = new cjs.Graphics().p("AwDB6QHsopLjgrQLjgtIqHsQIpHqAsLkQAsLjnrIqg");
	var mask_1_graphics_320 = new cjs.Graphics().p("AvrBTQH2ofLkgdQLjgeIhH2QIgH1AdLkQAeLln2Igg");
	var mask_1_graphics_321 = new cjs.Graphics().p("AvTAtQIBoVLkgPQLkgPIWIAQIWIAAPLlQAQLkoBIWg");
	var mask_1_graphics_322 = new cjs.Graphics().p("Au7AHQILoLLkAAQLkgBINIKQIMILABLlQAALkoLIMg");
	var mask_1_graphics_323 = new cjs.Graphics().p("AuegjQIXoALlARQLkAQIAIWQH/IXgQLkQgQLloXIAg");
	var mask_1_graphics_324 = new cjs.Graphics().p("AuAhOQIjnzLkAiQLjAhH0IiQHzIjghLkQgiLkoiHzg");
	var mask_1_graphics_325 = new cjs.Graphics().p("Athh3QIunnLjA0QLiAxHnIuQHnIugzLjQgyLjouHng");
	var mask_1_graphics_326 = new cjs.Graphics().p("AtCigQI5nZLiBEQLhBDHaI5QHaI5hELiQhELio5HZg");
	var mask_1_graphics_327 = new cjs.Graphics().p("AsijHQJEnMLgBVQLfBUHNJEQHMJEhVLgQhULgpEHMg");
	var mask_1_graphics_328 = new cjs.Graphics().p("AsCjtQJPm/LeBnQLdBlG/JOQG/JOhmLeQhmLepOG/g");
	var mask_1_graphics_329 = new cjs.Graphics().p("ArhkSQJZmxLbB3QLbB2GxJYQGxJZh2LcQh3LbpZGxg");
	var mask_1_graphics_330 = new cjs.Graphics().p("Aq/k2QJimjLZCIQLYCHGjJiQGjJjiHLZQiILYpjGjg");
	var mask_1_graphics_331 = new cjs.Graphics().p("AqdlZQJsmULVCZQLVCXGVJsQGVJsiZLWQiYLVpsGVg");
	var mask_1_graphics_332 = new cjs.Graphics().p("Ap7l6QJ2mHLRCqQLRCpGHJ1QGGJ1ipLSQipLSp2GGg");
	var mask_1_graphics_333 = new cjs.Graphics().p("ApYmaQJ+l4LOC6QLNC5F4J+QF4J/i6LNQi6LOp+F4g");
	var mask_1_graphics_334 = new cjs.Graphics().p("Ao0m5QKGlpLKDLQLIDJFqKHQFpKHjLLJQjKLJqHFpg");
	var mask_1_graphics_335 = new cjs.Graphics().p("AoQnXQKOlaLFDcQLEDaFaKOQFaKPjbLFQjbLEqPFag");
	var mask_1_graphics_336 = new cjs.Graphics().p("Anrn0QKWlKK/DsQK/DqFLKWQFLKYjrK/QjsK/qXFLg");
	var mask_1_graphics_337 = new cjs.Graphics().p("AnGoPQKdk7K6D8QK6D7E7KeQE7Kej7K6Qj7K5qfE8g");
	var mask_1_graphics_338 = new cjs.Graphics().p("AmhopQKlksK0ENQKzEKEsKmQEsKlkMK0QkLK0qmErg");
	var mask_1_graphics_339 = new cjs.Graphics().p("Al7pCQKskcKuEdQKsEaEdKsQEcKtkcKtQkbKtqtEcg");
	var mask_1_graphics_340 = new cjs.Graphics().p("AlUpZQKykMKnEsQKmEqEMKzQEMKzkrKnQkrKmqzEMg");
	var mask_1_graphics_341 = new cjs.Graphics().p("AkupvQK4j8KgE8QKgE6D8K4QD8K5k7KgQk7Kfq5D8g");
	var mask_1_graphics_342 = new cjs.Graphics().p("AkGqEQK9jrKZFLQKYFJDsK+QDrK/lKKYQlKKYq/Dsg");
	var mask_1_graphics_343 = new cjs.Graphics().p("AjfqXQLDjbKRFaQKQFZDbLDQDcLFlaKQQlZKQrEDcg");
	var mask_1_graphics_344 = new cjs.Graphics().p("Ai3qpQLIjLKIFqQKIFoDMLIQDLLJlpKIQlpKJrJDLg");
	var mask_1_graphics_345 = new cjs.Graphics().p("AiPq5QLMi7KAF5QKAF3C7LNQC6LNl3KAQl4KArOC6g");
	var mask_1_graphics_346 = new cjs.Graphics().p("AhnrIQLRiqJ3GHQJ3GFCqLSQCqLRmHJ3QmGJ3rSCqg");
	var mask_1_graphics_347 = new cjs.Graphics().p("Ag+rWQLUiZJuGWQJuGTCZLWQCZLVmUJuQmVJurWCZg");
	var mask_1_graphics_348 = new cjs.Graphics().p("AgVriQLXiJJlGkQJkGjCJLYQCILZmjJkQmjJlrZCIg");
	var mask_1_graphics_349 = new cjs.Graphics().p("AATrtQLch4JaGyQJaGxB4LbQB4LcmyJbQmxJarcB4g");
	var mask_1_graphics_350 = new cjs.Graphics().p("AA8r3QLehmJRHAQJQG9BnLfQBmLem/JRQm/JQrfBng");
	var mask_1_graphics_351 = new cjs.Graphics().p("ABlr/QLhhVJGHNQJGHLBVLhQBWLhnNJGQnNJGrgBVg");
	var mask_1_graphics_352 = new cjs.Graphics().p("ACOsGQLjhEI7HbQI7HYBFLjQBELjnaI7QnaI7rjBFg");
	var mask_1_graphics_353 = new cjs.Graphics().p("AC4sLQLkgzIwHoQIwHlAzLlQA0LknnIwQnoIwrkAzg");
	var mask_1_graphics_354 = new cjs.Graphics().p("ADhsPQLlgiIlH1QIlHyAiLmQAiLln0IlQn0IkrlAjg");
	var mask_1_graphics_355 = new cjs.Graphics().p("AELsRQLmgRIZICQIYH+ASLnQARLloBIZQoBIZrlARg");
	var mask_1_graphics_356 = new cjs.Graphics().p("AEzsRQLmAAINIOQINILAALmQAALmoNINQoNINrmAAg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(214).to({graphics:mask_1_graphics_214,x:134.3,y:278.8}).wait(1).to({graphics:mask_1_graphics_215,x:136.4,y:278.4}).wait(1).to({graphics:mask_1_graphics_216,x:138.4,y:278}).wait(1).to({graphics:mask_1_graphics_217,x:140.3,y:277.6}).wait(1).to({graphics:mask_1_graphics_218,x:142.3,y:277.1}).wait(1).to({graphics:mask_1_graphics_219,x:144.3,y:276.6}).wait(1).to({graphics:mask_1_graphics_220,x:146.3,y:276}).wait(1).to({graphics:mask_1_graphics_221,x:148.2,y:275.4}).wait(1).to({graphics:mask_1_graphics_222,x:150.1,y:274.7}).wait(1).to({graphics:mask_1_graphics_223,x:152,y:274}).wait(1).to({graphics:mask_1_graphics_224,x:153.9,y:273.3}).wait(1).to({graphics:mask_1_graphics_225,x:155.8,y:272.5}).wait(1).to({graphics:mask_1_graphics_226,x:157.7,y:271.6}).wait(1).to({graphics:mask_1_graphics_227,x:159.5,y:270.8}).wait(1).to({graphics:mask_1_graphics_228,x:161.3,y:269.9}).wait(1).to({graphics:mask_1_graphics_229,x:163.1,y:268.9}).wait(1).to({graphics:mask_1_graphics_230,x:164.9,y:267.9}).wait(1).to({graphics:mask_1_graphics_231,x:166.7,y:266.9}).wait(1).to({graphics:mask_1_graphics_232,x:168.4,y:265.8}).wait(1).to({graphics:mask_1_graphics_233,x:170.1,y:264.7}).wait(1).to({graphics:mask_1_graphics_234,x:171.8,y:263.5}).wait(1).to({graphics:mask_1_graphics_235,x:173.4,y:262.3}).wait(1).to({graphics:mask_1_graphics_236,x:175,y:261.1}).wait(1).to({graphics:mask_1_graphics_237,x:176.6,y:259.8}).wait(1).to({graphics:mask_1_graphics_238,x:178.2,y:258.5}).wait(1).to({graphics:mask_1_graphics_239,x:179.7,y:257.2}).wait(1).to({graphics:mask_1_graphics_240,x:181.2,y:255.8}).wait(1).to({graphics:mask_1_graphics_241,x:182.7,y:254.4}).wait(1).to({graphics:mask_1_graphics_242,x:184.2,y:252.9}).wait(1).to({graphics:mask_1_graphics_243,x:185.6,y:251.5}).wait(1).to({graphics:mask_1_graphics_244,x:186.9,y:250}).wait(1).to({graphics:mask_1_graphics_245,x:188,y:248.7}).wait(1).to({graphics:mask_1_graphics_246,x:189.2,y:247.3}).wait(1).to({graphics:mask_1_graphics_247,x:190.3,y:246}).wait(1).to({graphics:mask_1_graphics_248,x:191.3,y:244.6}).wait(1).to({graphics:mask_1_graphics_249,x:192.4,y:243.2}).wait(1).to({graphics:mask_1_graphics_250,x:193.4,y:241.8}).wait(1).to({graphics:mask_1_graphics_251,x:194.4,y:240.4}).wait(1).to({graphics:mask_1_graphics_252,x:195.3,y:239}).wait(1).to({graphics:mask_1_graphics_253,x:196.3,y:237.5}).wait(1).to({graphics:mask_1_graphics_254,x:197.2,y:236}).wait(1).to({graphics:mask_1_graphics_255,x:198,y:234.5}).wait(1).to({graphics:mask_1_graphics_256,x:198.9,y:233}).wait(1).to({graphics:mask_1_graphics_257,x:199.7,y:231.5}).wait(1).to({graphics:mask_1_graphics_258,x:200.5,y:229.9}).wait(1).to({graphics:mask_1_graphics_259,x:201.2,y:228.4}).wait(1).to({graphics:mask_1_graphics_260,x:202,y:226.8}).wait(1).to({graphics:mask_1_graphics_261,x:202.7,y:225.2}).wait(1).to({graphics:mask_1_graphics_262,x:203.3,y:223.6}).wait(1).to({graphics:mask_1_graphics_263,x:203.9,y:222}).wait(1).to({graphics:mask_1_graphics_264,x:204.5,y:220.3}).wait(1).to({graphics:mask_1_graphics_265,x:205.1,y:218.7}).wait(1).to({graphics:mask_1_graphics_266,x:205.7,y:217}).wait(1).to({graphics:mask_1_graphics_267,x:206.2,y:215.4}).wait(1).to({graphics:mask_1_graphics_268,x:206.6,y:213.7}).wait(1).to({graphics:mask_1_graphics_269,x:207.1,y:212}).wait(1).to({graphics:mask_1_graphics_270,x:207.5,y:210.3}).wait(1).to({graphics:mask_1_graphics_271,x:207.9,y:208.7}).wait(1).to({graphics:mask_1_graphics_272,x:208.2,y:207}).wait(1).to({graphics:mask_1_graphics_273,x:208.5,y:205.2}).wait(1).to({graphics:mask_1_graphics_274,x:208.8,y:203.5}).wait(1).to({graphics:mask_1_graphics_275,x:209,y:201.8}).wait(1).to({graphics:mask_1_graphics_276,x:209.2,y:200.1}).wait(1).to({graphics:mask_1_graphics_277,x:209.4,y:198.4}).wait(1).to({graphics:mask_1_graphics_278,x:209.5,y:196.6}).wait(1).to({graphics:mask_1_graphics_279,x:209.6,y:194.9}).wait(1).to({graphics:mask_1_graphics_280,x:209.7,y:193.2}).wait(1).to({graphics:mask_1_graphics_281,x:209.8,y:191.4}).wait(1).to({graphics:mask_1_graphics_282,x:209.8,y:190.7}).wait(1).to({graphics:mask_1_graphics_283,x:209.8,y:192.5}).wait(1).to({graphics:mask_1_graphics_284,x:209.8,y:194.2}).wait(1).to({graphics:mask_1_graphics_285,x:209.8,y:195.9}).wait(1).to({graphics:mask_1_graphics_286,x:209.8,y:197.7}).wait(1).to({graphics:mask_1_graphics_287,x:209.8,y:199.4}).wait(1).to({graphics:mask_1_graphics_288,x:209.9,y:201.1}).wait(1).to({graphics:mask_1_graphics_289,x:209.9,y:202.9}).wait(1).to({graphics:mask_1_graphics_290,x:209.9,y:204.6}).wait(1).to({graphics:mask_1_graphics_291,x:209.9,y:206.3}).wait(1).to({graphics:mask_1_graphics_292,x:209.9,y:208}).wait(1).to({graphics:mask_1_graphics_293,x:210,y:209.7}).wait(1).to({graphics:mask_1_graphics_294,x:210,y:211.4}).wait(1).to({graphics:mask_1_graphics_295,x:210,y:213.1}).wait(1).to({graphics:mask_1_graphics_296,x:210,y:214.8}).wait(1).to({graphics:mask_1_graphics_297,x:210,y:216.4}).wait(1).to({graphics:mask_1_graphics_298,x:210,y:218.1}).wait(1).to({graphics:mask_1_graphics_299,x:210,y:219.7}).wait(1).to({graphics:mask_1_graphics_300,x:210.1,y:221.4}).wait(1).to({graphics:mask_1_graphics_301,x:210.1,y:223}).wait(1).to({graphics:mask_1_graphics_302,x:210.1,y:224.6}).wait(1).to({graphics:mask_1_graphics_303,x:210.1,y:226.2}).wait(1).to({graphics:mask_1_graphics_304,x:210.1,y:227.8}).wait(1).to({graphics:mask_1_graphics_305,x:210,y:229.4}).wait(1).to({graphics:mask_1_graphics_306,x:210,y:230.9}).wait(1).to({graphics:mask_1_graphics_307,x:210,y:232.5}).wait(1).to({graphics:mask_1_graphics_308,x:210,y:234}).wait(1).to({graphics:mask_1_graphics_309,x:210,y:235.5}).wait(1).to({graphics:mask_1_graphics_310,x:210,y:237}).wait(1).to({graphics:mask_1_graphics_311,x:210,y:238.5}).wait(1).to({graphics:mask_1_graphics_312,x:209.9,y:239.9}).wait(1).to({graphics:mask_1_graphics_313,x:209.9,y:241.4}).wait(1).to({graphics:mask_1_graphics_314,x:209.9,y:242.8}).wait(1).to({graphics:mask_1_graphics_315,x:209.9,y:244.2}).wait(1).to({graphics:mask_1_graphics_316,x:209.9,y:245.6}).wait(1).to({graphics:mask_1_graphics_317,x:209.8,y:246.9}).wait(1).to({graphics:mask_1_graphics_318,x:209.8,y:248.3}).wait(1).to({graphics:mask_1_graphics_319,x:209.8,y:249.6}).wait(1).to({graphics:mask_1_graphics_320,x:209.8,y:250.9}).wait(1).to({graphics:mask_1_graphics_321,x:209.8,y:252.1}).wait(1).to({graphics:mask_1_graphics_322,x:209.8,y:253.3}).wait(1).to({graphics:mask_1_graphics_323,x:209.8,y:254.8}).wait(1).to({graphics:mask_1_graphics_324,x:209.8,y:256.2}).wait(1).to({graphics:mask_1_graphics_325,x:209.8,y:257.6}).wait(1).to({graphics:mask_1_graphics_326,x:209.8,y:258.9}).wait(1).to({graphics:mask_1_graphics_327,x:209.9,y:260.2}).wait(1).to({graphics:mask_1_graphics_328,x:209.9,y:261.5}).wait(1).to({graphics:mask_1_graphics_329,x:209.9,y:262.7}).wait(1).to({graphics:mask_1_graphics_330,x:210,y:263.9}).wait(1).to({graphics:mask_1_graphics_331,x:210,y:265.1}).wait(1).to({graphics:mask_1_graphics_332,x:210,y:266.2}).wait(1).to({graphics:mask_1_graphics_333,x:210.1,y:267.3}).wait(1).to({graphics:mask_1_graphics_334,x:210.1,y:268.3}).wait(1).to({graphics:mask_1_graphics_335,x:210.1,y:269.3}).wait(1).to({graphics:mask_1_graphics_336,x:210.1,y:270.3}).wait(1).to({graphics:mask_1_graphics_337,x:210.1,y:271.2}).wait(1).to({graphics:mask_1_graphics_338,x:210.2,y:272}).wait(1).to({graphics:mask_1_graphics_339,x:210.2,y:272.8}).wait(1).to({graphics:mask_1_graphics_340,x:210.2,y:273.6}).wait(1).to({graphics:mask_1_graphics_341,x:210.2,y:274.4}).wait(1).to({graphics:mask_1_graphics_342,x:210.2,y:275}).wait(1).to({graphics:mask_1_graphics_343,x:210.2,y:275.7}).wait(1).to({graphics:mask_1_graphics_344,x:210.2,y:276.3}).wait(1).to({graphics:mask_1_graphics_345,x:210.2,y:276.8}).wait(1).to({graphics:mask_1_graphics_346,x:210.1,y:277.3}).wait(1).to({graphics:mask_1_graphics_347,x:210.1,y:277.8}).wait(1).to({graphics:mask_1_graphics_348,x:210.1,y:278.2}).wait(1).to({graphics:mask_1_graphics_349,x:210.1,y:278.6}).wait(1).to({graphics:mask_1_graphics_350,x:210.1,y:278.9}).wait(1).to({graphics:mask_1_graphics_351,x:210.1,y:279.1}).wait(1).to({graphics:mask_1_graphics_352,x:210,y:279.4}).wait(1).to({graphics:mask_1_graphics_353,x:210,y:279.5}).wait(1).to({graphics:mask_1_graphics_354,x:210,y:279.7}).wait(1).to({graphics:mask_1_graphics_355,x:210,y:279.7}).wait(1).to({graphics:mask_1_graphics_356,x:209.9,y:279.8}).wait(103));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(25,1,1).p("AoxOsQBeAIBggEQEwgGD9iiQD8iiBfkcQBfkdhHknQhGkkjri6Qjoi4kkgaQidgMidAL");
	this.shape_2.setTransform(314.2,382.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(25,1,1).p("AvspuQDriNECheQEPhiEdAMQEwAGD+CiQD8CiBfEcQBgEdhHEnQhGEkjrC6QjpC4klAaQicAMidgL");
	this.shape_3.setTransform(272.5,382.4,1,1,0,180,0);

	var maskedShapeInstanceList = [this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2}]},214).to({state:[{t:this.shape_3}]},108).wait(137));

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_54 = new cjs.Graphics().p("AmjQzQmvpcB5raQB6rdJcmuQJbmxLcB6MgJMA3OQrch6mvpcg");
	var mask_2_graphics_55 = new cjs.Graphics().p("AnGQbQmkpkCHrYQCHraJjmkQJkmlLaCHMgKOA3DQrYiHmlpkg");
	var mask_2_graphics_56 = new cjs.Graphics().p("AnoQDQmZprCUrWQCVrYJqmYQJsmaLXCVMgLOA22QrWiUmZpsg");
	var mask_2_graphics_57 = new cjs.Graphics().p("AoKPrQmOpzCirTQCjrVJxmMQJ0mPLUCiMgMQA2pQrTiimNpzg");
	var mask_2_graphics_58 = new cjs.Graphics().p("AosPTQmBp7CvrPQCwrSJ5mBQJ6mDLRCwMgNQA2ZQrQivmCp6g");
	var mask_2_graphics_59 = new cjs.Graphics().p("ApMO6Ql2qBC8rMQC9rOKAl1QKCl4LNC9MgOQA2JQrMi8l2qCg");
	var mask_2_graphics_60 = new cjs.Graphics().p("ApsOiQlrqIDKrJQDKrKKHlpQKJlsLJDKMgPPA14QrJjKlqqIg");
	var mask_2_graphics_61 = new cjs.Graphics().p("AqMOKQleqPDXrFQDXrGKOleQKOlfLHDXMgQQA1mQrFjXleqPg");
	var mask_2_graphics_62 = new cjs.Graphics().p("AqrNyQlSqVDkrBQDlrDKTlRQKWlTLCDkMgRPA1SQrBjklSqVg");
	var mask_2_graphics_63 = new cjs.Graphics().p("ArJNZQlGqbDxq8QDyq+KZlFQKclHK+DxMgSOA09Qq8jxlGqcg");
	var mask_2_graphics_64 = new cjs.Graphics().p("ArnNBQk5qhD+q4QD+q5Kgk5QKhk6K5D+MgTLA0mQq4j+k6qhg");
	var mask_2_graphics_65 = new cjs.Graphics().p("AsEMpQktqnELqzQEMq1KlkrQKnkuK0ELMgUKA0PQqzkLktqng");
	var mask_2_graphics_66 = new cjs.Graphics().p("AsgMRQkgqsEXquQEYqwKrkfQKtkiKvEYMgVHAz3QqvkYkgqsg");
	var mask_2_graphics_67 = new cjs.Graphics().p("As8L5QkTqxEkqpQElqrKwkSQKxkVKqEkMgWEAzdQqpkkkUqxg");
	var mask_2_graphics_68 = new cjs.Graphics().p("AtWLhQkHq2ExqkQExqlK1kGQK2kHKlExMgXBAzCQqkkxkGq2g");
	var mask_2_graphics_69 = new cjs.Graphics().p("AtxLJQj6q7E+qeQE9qfK6j5QK7j7KfE+MgX9AymQqek9j6q7g");
	var mask_2_graphics_70 = new cjs.Graphics().p("AuKKxQjtq/FJqYQFKqZK+jsQLAjuKZFJMgY3AyKQqZlKjtq/g");
	var mask_2_graphics_71 = new cjs.Graphics().p("AujKZQjgrDFWqSQFWqTLCjfQLEjhKTFWMgZzAxsQqSlWjgrEg");
	var mask_2_graphics_72 = new cjs.Graphics().p("Au7KBQjTrGFiqMQFiqNLGjSQLJjUKMFiMgatAxNQqMlijTrIg");
	var mask_2_graphics_73 = new cjs.Graphics().p("AvSJqQjGrLFuqFQFuqGLKjFQLMjGKFFuMgbmAwsQqGlujFrLg");
	var mask_2_graphics_74 = new cjs.Graphics().p("AvpJSQi4rOF5p+QF6p/LOi4QLPi5J/F6MgcgAwLQp/l6i4rPg");
	var mask_2_graphics_75 = new cjs.Graphics().p("Av/I7QirrRGFp4QGGp4LRiqQLTisJ3GGMgdYAvpQp4mGirrSg");
	var mask_2_graphics_76 = new cjs.Graphics().p("AwUIkQierVGRpwQGSpwLTidQLWifJwGRMgeQAvGQpwmRierVg");
	var mask_2_graphics_77 = new cjs.Graphics().p("AwoINQiRrYGdpoQGdppLWiQQLZiRJpGdMgfIAuhQppmciQrYg");
	var mask_2_graphics_78 = new cjs.Graphics().p("Aw8H2QiDraGophQGophLZiCQLciEJgGoMgf+At8QphmoiDrag");
	var mask_2_graphics_79 = new cjs.Graphics().p("AxPHfQh1rcGzpZQGzpZLch1QLdh2JZGzMgg1AtWQpYmzh2rdg");
	var mask_2_graphics_80 = new cjs.Graphics().p("AxhHIQhoreG+pRQG/pRLdhnQLghoJRG+MghqAsuQpRm+horfg");
	var mask_2_graphics_81 = new cjs.Graphics().p("AxyGyQhargHJpJQHJpJLfhZQLhhbJJHJMgieAsGQpJnJhargg");
	var mask_2_graphics_82 = new cjs.Graphics().p("AyDGbQhMrhHTpAQHUpALhhMQLjhNJAHTMgjSArdQpAnUhNrig");
	var mask_2_graphics_83 = new cjs.Graphics().p("AySGFQg/rjHeo3QHfo3Lig+QLkhAI3HeMgkFAqzQo3neg/rkg");
	var mask_2_graphics_84 = new cjs.Graphics().p("AyhFvQgxrkHoouQHpouLjgxQLlgyIvHpMgk4AqHQounogxrlg");
	var mask_2_graphics_85 = new cjs.Graphics().p("AyvFZQgkrkHzolQHzomLkgjQLmgkIlHzMglpApbQolnygjrmg");
	var mask_2_graphics_86 = new cjs.Graphics().p("Ay8FEQgWrlH9ocQH9ocLkgVQLngXIbH9MgmZAouQocn8gVrmg");
	var mask_2_graphics_87 = new cjs.Graphics().p("AzJEuQgIrlIHoSQIHoTLkgHQLngJITIGMgnJAoBQoToHgIrmg");
	var mask_2_graphics_88 = new cjs.Graphics().p("AzUEZQAFrlIRoJQIQoJLlAGQLnAFIIIRMgn3AnSQoJoRAGrmg");
	var mask_2_graphics_89 = new cjs.Graphics().p("AzfEEQATrlIan/QIan/LlAUQLmATH/IaMgomAmiQn/oaAUrmg");
	var mask_2_graphics_90 = new cjs.Graphics().p("AzpDvQAhrkIjn1QIkn1LkAiQLmAgH1IjMgpTAlyQn1ojAhrmg");
	var mask_2_graphics_91 = new cjs.Graphics().p("AzyDbQAurkItnrQItnqLjAvQLlAuHrIsMgp/AlBQnrosAvrlg");
	var mask_2_graphics_92 = new cjs.Graphics().p("Az7DHQA9rjI1ngQI2nhLiA9QLkA8HhI1MgqrAkPQngo2A8rjg");
	var mask_2_graphics_93 = new cjs.Graphics().p("A0CCzQBKriI+nWQI/nWLgBLQLkBJHVI/MgrUAjbQnWo+BKrig");
	var mask_2_graphics_94 = new cjs.Graphics().p("A0JCfQBYrgJHnLQJHnLLfBYQLiBXHLJGMgr+AipQnLpHBXrhg");
	var mask_2_graphics_95 = new cjs.Graphics().p("A0OCLQBlreJPnAQJPnBLeBmQLgBlHAJPMgsnAh0QnApPBmrgg");
	var mask_2_graphics_96 = new cjs.Graphics().p("A0TB4QByrcJYm1QJWm2LdB0QLeByG1JXMgtOAg/Qm1pYBzrdg");
	var mask_2_graphics_97 = new cjs.Graphics().p("A0XBlQCAraJfmqQJfmqLaCBQLcB/GqJgMgt1AgJQmqpgCBrbg");
	var mask_2_graphics_98 = new cjs.Graphics().p("A0bBTQCOrYJnmfQJnmfLXCPQLaCNGeJnMguaAfSQmepnCNrYg");
	var mask_2_graphics_99 = new cjs.Graphics().p("A0dBAQCbrVJvmTQJumTLVCbQLWCbGUJvMgu/AebQmTpvCbrWg");
	var mask_2_graphics_100 = new cjs.Graphics().p("A0fAuQCprSJ2mHQJ1mILSCpQLUCoGIJ2MgviAdjQmIp2CorTg");
	var mask_2_graphics_101 = new cjs.Graphics().p("A0fAcQC2rOJ9l8QJ8l8LPC2QLQC1F8J9MgwEAcrQl8p9C2rQg");
	var mask_2_graphics_102 = new cjs.Graphics().p("A0fALQDDrLKElwQKDlxLMDEQLNDDFwKDMgwmAbyQlwqEDDrMg");
	var mask_2_graphics_103 = new cjs.Graphics().p("A0egFQDQrJKLlkQKKlkLHDRQLKDPFkKLMgxGAa4QlkqLDQrHg");
	var mask_2_graphics_104 = new cjs.Graphics().p("A0cgWQDdrEKRlZQKRlYLDDeQLGDdFYKRMgxmAZ9QlYqRDerDg");
	var mask_2_graphics_105 = new cjs.Graphics().p("A0agnQDrrAKXlMQKXlMK/DrQLBDqFMKYMgyDAZCQlMqXDqrAg");
	var mask_2_graphics_106 = new cjs.Graphics().p("A0Wg3QD4q7KdlAQKdlAK6D4QK9D3FAKdMgyhAYHQk/qdD3q7g");
	var mask_2_graphics_107 = new cjs.Graphics().p("A0ShHQEFq3KjkzQKjkzK2EFQK4EEEzKjMgy9AXLQkzqjEEq3g");
	var mask_2_graphics_108 = new cjs.Graphics().p("A0MhWQERqyKpknQKoknKxESQKzEREnKoMgzYAWPQkmqpERqxg");
	var mask_2_graphics_109 = new cjs.Graphics().p("A0GhlQEeqtKukaQKtkaKsEeQKuEdEaKuMgzxAVSQkaquEeqsg");
	var mask_2_graphics_110 = new cjs.Graphics().p("Az/h0QEqqnKzkOQKzkNKmErQKpEqENKzMg0JAUUQkOqzErqng");
	var mask_2_graphics_111 = new cjs.Graphics().p("Az3iCQE2qiK4kBQK4kAKhE3QKjE2EAK4Mg0hATXQkAq4E3qhg");
	var mask_2_graphics_112 = new cjs.Graphics().p("AzviQQFDqcK9j0QK8j0KbFEQKdFDD0K7Mg04ASZQjzq8FDqbg");
	var mask_2_graphics_113 = new cjs.Graphics().p("AzlieQFPqWLBjnQLBjmKVFPQKWFQDnLAMg1MARaQjnrBFQqVg");
	var mask_2_graphics_114 = new cjs.Graphics().p("AzbirQFcqQLFjaQLEjZKPFcQKRFbDZLEMg1gAQbQjarFFcqOg");
	var mask_2_graphics_115 = new cjs.Graphics().p("AzQi4QFoqJLJjNQLIjMKIFoQKKFnDNLIMg1zAPcQjNrJFoqIg");
	var mask_2_graphics_116 = new cjs.Graphics().p("AzEjFQF0qCLMi/QLMjAKCF0QKDF0C/LLMg2FAOcQi/rNF0qBg");
	var mask_2_graphics_117 = new cjs.Graphics().p("Ay3jRQF/p7LQiyQLQiyJ6F/QJ8GACyLPMg2VANbQiyrQGAp6g");
	var mask_2_graphics_118 = new cjs.Graphics().p("AyqjdQGLp0LUilQLSikJ0GLQJ1GLCkLSMg2kAMbQilrTGLpzg");
	var mask_2_graphics_119 = new cjs.Graphics().p("AybjoQGWptLWiXQLWiYJsGXQJuGXCXLVMg2zALbQiXrWGXpsg");
	var mask_2_graphics_120 = new cjs.Graphics().p("AyMjzQGiplLZiKQLYiKJkGiQJmGiCKLYMg2/AKaQiKrZGipkg");
	var mask_2_graphics_121 = new cjs.Graphics().p("Ax8j+QGtpdLah8QLch9JcGuQJfGtB8LaMg3LAJZQh9rcGupcg");
	var mask_2_graphics_122 = new cjs.Graphics().p("AxrkIQG4pVLchvQLehvJVG5QJWG4BvLcMg3WAIYQhvreG5pUg");
	var mask_2_graphics_123 = new cjs.Graphics().p("AxakSQHEpNLehhQLghhJMHDQJOHDBhLfMg3fAHVQhhrfHDpMg");
	var mask_2_graphics_124 = new cjs.Graphics().p("AxHkbQHOpFLghTQLhhUJEHOQJFHOBULgMg3nAGUQhUrhHPpDg");
	var mask_2_graphics_125 = new cjs.Graphics().p("Aw0kkQHYo8LihGQLjhGI7HZQI9HZBGLhMg3uAFSQhGriHZo7g");
	var mask_2_graphics_126 = new cjs.Graphics().p("AwgktQHjozLig4QLkg5IzHkQI0HjA4LjMg3zAEQQg5rkHkoyg");
	var mask_2_graphics_127 = new cjs.Graphics().p("AwMk1QHuoqLjgrQLlgqIpHtQIrHtArLkMg34ADPQgqrlHtopg");
	var mask_2_graphics_128 = new cjs.Graphics().p("Av2k8QH3ohLkgdQLmgdIgH3QIiH3AdLlMg37ACMQgdrlH4ofg");
	var mask_2_graphics_129 = new cjs.Graphics().p("AvglEQICoXLkgQQLmgPIWICQIZIBAPLlMg39ABKQgPrlICoXg");
	var mask_2_graphics_130 = new cjs.Graphics().p("AvJlLQILoNLlgCQLmgCINIMQIPIKABLmMg39AAIQgCrmIMoNg");
	var mask_2_graphics_131 = new cjs.Graphics().p("A3TN7QAMrmIVoDQIVoELlAMQLmAMIDIVQIFIUgMLmg");
	var mask_2_graphics_132 = new cjs.Graphics().p("A3SNJQAZrlIfn5QIfn6LkAZQLmAaH5IfQH7IdgaLmg");
	var mask_2_graphics_133 = new cjs.Graphics().p("A3RMXQAnrkIonvQIonwLkAnQLlAoHvInQHxIngnLlg");
	var mask_2_graphics_134 = new cjs.Graphics().p("A3PLoQA0rjIxnmQIwnmLjA1QLkA0HmIxQHnIvg1Lkg");
	var mask_2_graphics_135 = new cjs.Graphics().p("A3NK5QBCrhI5ndQI5ncLiBCQLjBBHbI5QHdI4hBLjg");
	var mask_2_graphics_136 = new cjs.Graphics().p("A3KKLQBPrhJBnSQJBnSLhBOQLiBPHRJBQHTJBhPLhg");
	var mask_2_graphics_137 = new cjs.Graphics().p("A3GJcQBbrfJKnIQJJnILfBcQLgBbHHJJQHJJJhbLgg");
	var mask_2_graphics_138 = new cjs.Graphics().p("A3CItQBordJSm+QJRm9LdBoQLfBpG8JRQG/JRhpLeg");
	var mask_2_graphics_139 = new cjs.Graphics().p("A2+H+QB2rbJZmzQJZmyLbB1QLdB1GyJZQGzJZh1Lcg");
	var mask_2_graphics_140 = new cjs.Graphics().p("A24HQQCCrZJgmoQJhmoLZCCQLaCCGoJhQGpJgiCLZg");
	var mask_2_graphics_141 = new cjs.Graphics().p("A2zGiQCPrXJomdQJomeLXCQQLYCPGcJoQGfJniQLXg");
	var mask_2_graphics_142 = new cjs.Graphics().p("A2sF0QCbrUJwmTQJvmSLTCcQLWCcGRJvQGUJuicLVg");
	var mask_2_graphics_143 = new cjs.Graphics().p("A2mFGQCprRJ2mIQJ2mHLRCpQLSCoGHJ2QGIJ2ioLSg");
	var mask_2_graphics_144 = new cjs.Graphics().p("A2eEYQC1rOJ9l8QJ8l8LPC1QLPC2F7J8QF9J8i1LPg");
	var mask_2_graphics_145 = new cjs.Graphics().p("A2XDqQDCrKKElxQKClxLMDCQLMDCFwKDQFyKDjCLMg");
	var mask_2_graphics_146 = new cjs.Graphics().p("A2OC9QDPrHKJllQKJlmLIDPQLIDOFlKKQFmKJjOLIg");
	var mask_2_graphics_147 = new cjs.Graphics().p("A2FCQQDbrDKQlaQKPlaLEDbQLFDbFZKQQFbKPjbLEg");
	var mask_2_graphics_148 = new cjs.Graphics().p("A18BjQDoq/KWlOQKVlPLADoQLBDoFNKVQFPKWjnLAg");
	var mask_2_graphics_149 = new cjs.Graphics().p("A1yA3QD0q7KclDQKblDK8D0QK8D0FCKcQFDKbj0K8g");
	var mask_2_graphics_150 = new cjs.Graphics().p("A1nAKQEAq2Kik3QKgk3K3EAQK4EBE2KhQE4KgkAK4g");
	var mask_2_graphics_151 = new cjs.Graphics().p("A1cghQENqzKmkqQKmkrKzEMQKzENEqKmQEsKmkNKzg");
	var mask_2_graphics_152 = new cjs.Graphics().p("A1QhMQEYquKskfQKrkfKuEZQKuEYEeKsQEgKrkZKug");
	var mask_2_graphics_153 = new cjs.Graphics().p("A1Eh4QElqpKwkSQKwkTKpEkQKpElESKxQEUKwklKpg");
	var mask_2_graphics_154 = new cjs.Graphics().p("A03ijQEwqjK2kHQK0kGKkEwQKkExEFK1QEIK1kxKjg");
	var mask_2_graphics_155 = new cjs.Graphics().p("A0qjOQE9qeK5j6QK5j6KeE8QKfE9D5K5QD7K6k8Keg");
	var mask_2_graphics_156 = new cjs.Graphics().p("A0cj4QFIqYK+juQK9juKZFIQKZFIDsK+QDvK+lIKYg");
	var mask_2_graphics_157 = new cjs.Graphics().p("A0OkiQFUqSLCjiQLCjhKSFTQKTFUDgLCQDjLClUKSg");
	var mask_2_graphics_158 = new cjs.Graphics().p("Az/lMQFfqMLGjVQLGjVKMFgQKNFfDULFQDVLGlfKNg");
	var mask_2_graphics_159 = new cjs.Graphics().p("Azwl1QFrqGLKjIQLJjJKFFrQKHFrDHLIQDKLLlrKGg");
	var mask_2_graphics_160 = new cjs.Graphics().p("AzgmeQF2p/LNi8QLMi8KAF3QKAF2C7LLQC8LOl2J/g");
	var mask_2_graphics_161 = new cjs.Graphics().p("AzQnGQGCp5LQivQLPivJ5GBQJ5GCCuLPQCwLQmBJ5g");
	var mask_2_graphics_162 = new cjs.Graphics().p("Ay/nuQGNpyLTiiQLSiiJyGMQJyGNCiLRQCjLUmNJyg");
	var mask_2_graphics_163 = new cjs.Graphics().p("AytoVQGXprLWiWQLViVJqGXQJrGYCVLUQCXLXmYJqg");
	var mask_2_graphics_164 = new cjs.Graphics().p("Ayco8QGipkLZiJQLXiIJkGiQJjGiCILXQCKLZmiJjg");
	var mask_2_graphics_165 = new cjs.Graphics().p("AyKpjQGtpcLbh8QLah8JcGtQJcGtB7LZQB9LcmtJcg");
	var mask_2_graphics_166 = new cjs.Graphics().p("Ax3qJQG3pULchvQLdhvJUG3QJVG4BuLbQBwLdm4JVg");
	var mask_2_graphics_167 = new cjs.Graphics().p("AxkqvQHCpMLdhiQLfhiJMHCQJNHCBhLdQBjLfnCJMg");
	var mask_2_graphics_168 = new cjs.Graphics().p("AxQrUQHMpELfhVQLghVJEHMQJFHMBULfQBWLhnMJEg");
	var mask_2_graphics_169 = new cjs.Graphics().p("Aw9r4QHWo9LhhIQLhhII8HXQI9HWBHLgQBJLinWI8g");
	var mask_2_graphics_170 = new cjs.Graphics().p("AwnsgQHhozLig6QLjg5IzHhQIzHhA5LhQA7LkniIzg");
	var mask_2_graphics_171 = new cjs.Graphics().p("AwQtHQHsopLjgsQLjgrIqHsQIqHsAqLiQAtLknsIqg");
	var mask_2_graphics_172 = new cjs.Graphics().p("Av5ttQH3ogLjgdQLlgdIfH2QIhH3AcLjQAeLln3Igg");
	var mask_2_graphics_173 = new cjs.Graphics().p("AvhuSQIBoWLkgPQLkgPIWIBQIXIBAOLjQAQLmoBIVg");
	var mask_2_graphics_174 = new cjs.Graphics().p("AvJu3QILoMLkgBQLlAAIMILQIMILAALjQABLmoLIMg");
	var mask_2_graphics_175 = new cjs.Graphics().p("AuxvbQIWoCLjAOQLlANICIVQICIWgOLjQgOLloVICg");
	var mask_2_graphics_176 = new cjs.Graphics().p("AuYv/QIfn3LkAcQLkAcH3IfQH4IfgdLjQgbLlofH3g");
	var mask_2_graphics_177 = new cjs.Graphics().p("At+whQIontLjAqQLjAqHtIpQHtIpgrLiQgpLkopHtg");
	var mask_2_graphics_178 = new cjs.Graphics().p("AtlxDQIyniLiA4QLjA5HhIyQHjIyg5LhQg4LjoyHig");
	var mask_2_graphics_179 = new cjs.Graphics().p("AtLxkQI8nYLgBHQLhBHHXI7QHYI8hILgQhGLio7HXg");
	var mask_2_graphics_180 = new cjs.Graphics().p("AswyFQJEnMLfBVQLgBVHMJFQHMJEhWLeQhULhpFHMg");
	var mask_2_graphics_181 = new cjs.Graphics().p("AsVykQJNnBLdBjQLeBkHAJMQHBJOhkLcQhiLfpNHAg");
	var mask_2_graphics_182 = new cjs.Graphics().p("Ar6zDQJVm1LbBxQLcBxG2JWQG1JWhyLaQhxLdpVG1g");
	var mask_2_graphics_183 = new cjs.Graphics().p("ArezhQJdmqLZCAQLaB/GpJeQGqJeiALYQh/LbpeGpg");
	var mask_2_graphics_184 = new cjs.Graphics().p("ArCz+QJmmeLWCNQLXCOGdJmQGeJmiOLVQiNLYpmGeg");
	var mask_2_graphics_185 = new cjs.Graphics().p("Aqm0bQJumSLTCcQLUCcGSJtQGSJvicLSQibLVpuGRg");
	var mask_2_graphics_186 = new cjs.Graphics().p("AqJ02QJ1mGLQCqQLRCpGGJ1QGFJ2iqLPQipLSp1GGg");
	var mask_2_graphics_187 = new cjs.Graphics().p("Aph1cQJ+l0LNC9QLMC8F1KAQF1KAi+LKQi8LNqAF1g");
	var mask_2_graphics_188 = new cjs.Graphics().p("Ao51/QKJlkLHDQQLHDQFkKKQFjKJjQLGQjPLIqKFjg");
	var mask_2_graphics_189 = new cjs.Graphics().p("AoP2hQKSlSLBDjQLBDjFSKSQFTKUjjK/QjjLCqSFSg");
	var mask_2_graphics_190 = new cjs.Graphics().p("Anl3BQKalAK8D1QK7D2FAKbQFBKbj2K7Qj1K8qcFAg");
	var mask_2_graphics_191 = new cjs.Graphics().p("Am73fQKjkvK1EIQK0EIEvKlQEvKjkJK0QkIK1qkEug");
	var mask_2_graphics_192 = new cjs.Graphics().p("AmP38QKrkcKtEaQKtEbEdKsQEcKrkbKsQkaKvqsEcg");
	var mask_2_graphics_193 = new cjs.Graphics().p("Alk4XQKzkKKlEtQKmEtEKKzQEKKzktKkQksKnq0EKg");
	var mask_2_graphics_194 = new cjs.Graphics().p("Ak34wQK5j4KdE/QKeE/D3K6QD4K6k/KdQk/Keq6D4g");
	var mask_2_graphics_195 = new cjs.Graphics().p("AkL5HQLAjlKVFQQKVFRDlLBQDlLAlRKUQlRKVrADlg");
	var mask_2_graphics_196 = new cjs.Graphics().p("Ajd5dQLFjSKMFiQKLFiDTLHQDSLGljKLQliKMrGDTg");
	var mask_2_graphics_197 = new cjs.Graphics().p("Aiw5xQLLi/KCF0QKCFzC/LMQDALMl0KBQlzKDrNC/g");
	var mask_2_graphics_198 = new cjs.Graphics().p("AiC6DQLQisJ4GFQJ4GFCsLRQCsLQmFJ3QmEJ5rRCsg");
	var mask_2_graphics_199 = new cjs.Graphics().p("AhT6TQLUiYJuGVQJtGVCZLWQCYLVmVJsQmVJvrWCYg");
	var mask_2_graphics_200 = new cjs.Graphics().p("Agl6hQLZiFJiGmQJjGmCFLZQCFLZmmJiQmmJjrZCFg");
	var mask_2_graphics_201 = new cjs.Graphics().p("AAJ6tQLdhyJXG2QJXG2ByLdQByLcm3JWQm2JYrcByg");
	var mask_2_graphics_202 = new cjs.Graphics().p("AA464QLgheJLHGQJLHGBeLgQBfLfnGJKQnGJMrgBfg");
	var mask_2_graphics_203 = new cjs.Graphics().p("ABn7AQLjhLI+HWQI/HVBLLiQBKLinVI+QnWJAriBKg");
	var mask_2_graphics_204 = new cjs.Graphics().p("ACX7HQLjg2IzHkQIyHlA3LkQA3LjnlIyQnlIzrkA3g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(54).to({graphics:mask_2_graphics_54,x:133.2,y:180.1}).wait(1).to({graphics:mask_2_graphics_55,x:134.9,y:179.8}).wait(1).to({graphics:mask_2_graphics_56,x:136.5,y:179.5}).wait(1).to({graphics:mask_2_graphics_57,x:138.2,y:179.2}).wait(1).to({graphics:mask_2_graphics_58,x:139.8,y:178.8}).wait(1).to({graphics:mask_2_graphics_59,x:141.4,y:178.4}).wait(1).to({graphics:mask_2_graphics_60,x:143,y:178}).wait(1).to({graphics:mask_2_graphics_61,x:144.7,y:177.6}).wait(1).to({graphics:mask_2_graphics_62,x:146.3,y:177.1}).wait(1).to({graphics:mask_2_graphics_63,x:147.9,y:176.6}).wait(1).to({graphics:mask_2_graphics_64,x:149.4,y:176}).wait(1).to({graphics:mask_2_graphics_65,x:151,y:175.5}).wait(1).to({graphics:mask_2_graphics_66,x:152.6,y:174.9}).wait(1).to({graphics:mask_2_graphics_67,x:154.1,y:174.2}).wait(1).to({graphics:mask_2_graphics_68,x:155.7,y:173.6}).wait(1).to({graphics:mask_2_graphics_69,x:157.2,y:172.9}).wait(1).to({graphics:mask_2_graphics_70,x:158.7,y:172.2}).wait(1).to({graphics:mask_2_graphics_71,x:160.2,y:171.5}).wait(1).to({graphics:mask_2_graphics_72,x:161.7,y:170.7}).wait(1).to({graphics:mask_2_graphics_73,x:163.1,y:169.9}).wait(1).to({graphics:mask_2_graphics_74,x:164.6,y:169.1}).wait(1).to({graphics:mask_2_graphics_75,x:166,y:168.3}).wait(1).to({graphics:mask_2_graphics_76,x:167.4,y:167.4}).wait(1).to({graphics:mask_2_graphics_77,x:168.9,y:166.5}).wait(1).to({graphics:mask_2_graphics_78,x:170.2,y:165.6}).wait(1).to({graphics:mask_2_graphics_79,x:171.6,y:164.7}).wait(1).to({graphics:mask_2_graphics_80,x:173,y:163.7}).wait(1).to({graphics:mask_2_graphics_81,x:174.3,y:162.7}).wait(1).to({graphics:mask_2_graphics_82,x:175.6,y:161.7}).wait(1).to({graphics:mask_2_graphics_83,x:176.9,y:160.7}).wait(1).to({graphics:mask_2_graphics_84,x:178.2,y:159.6}).wait(1).to({graphics:mask_2_graphics_85,x:179.4,y:158.5}).wait(1).to({graphics:mask_2_graphics_86,x:180.6,y:157.4}).wait(1).to({graphics:mask_2_graphics_87,x:181.9,y:156.3}).wait(1).to({graphics:mask_2_graphics_88,x:183,y:155.2}).wait(1).to({graphics:mask_2_graphics_89,x:184.2,y:154}).wait(1).to({graphics:mask_2_graphics_90,x:185.4,y:152.8}).wait(1).to({graphics:mask_2_graphics_91,x:186.5,y:151.6}).wait(1).to({graphics:mask_2_graphics_92,x:187.6,y:150.4}).wait(1).to({graphics:mask_2_graphics_93,x:188.6,y:149.1}).wait(1).to({graphics:mask_2_graphics_94,x:189.7,y:147.9}).wait(1).to({graphics:mask_2_graphics_95,x:190.7,y:146.6}).wait(1).to({graphics:mask_2_graphics_96,x:191.7,y:145.3}).wait(1).to({graphics:mask_2_graphics_97,x:192.7,y:144}).wait(1).to({graphics:mask_2_graphics_98,x:193.6,y:142.6}).wait(1).to({graphics:mask_2_graphics_99,x:194.6,y:141.3}).wait(1).to({graphics:mask_2_graphics_100,x:195.5,y:139.9}).wait(1).to({graphics:mask_2_graphics_101,x:196.3,y:138.5}).wait(1).to({graphics:mask_2_graphics_102,x:197.2,y:137.1}).wait(1).to({graphics:mask_2_graphics_103,x:198,y:135.7}).wait(1).to({graphics:mask_2_graphics_104,x:198.8,y:134.2}).wait(1).to({graphics:mask_2_graphics_105,x:199.5,y:132.8}).wait(1).to({graphics:mask_2_graphics_106,x:200.3,y:131.3}).wait(1).to({graphics:mask_2_graphics_107,x:201,y:129.9}).wait(1).to({graphics:mask_2_graphics_108,x:201.7,y:128.4}).wait(1).to({graphics:mask_2_graphics_109,x:202.3,y:126.9}).wait(1).to({graphics:mask_2_graphics_110,x:202.9,y:125.4}).wait(1).to({graphics:mask_2_graphics_111,x:203.5,y:123.9}).wait(1).to({graphics:mask_2_graphics_112,x:204.1,y:122.3}).wait(1).to({graphics:mask_2_graphics_113,x:204.6,y:120.8}).wait(1).to({graphics:mask_2_graphics_114,x:205.1,y:119.2}).wait(1).to({graphics:mask_2_graphics_115,x:205.6,y:117.7}).wait(1).to({graphics:mask_2_graphics_116,x:206,y:116.1}).wait(1).to({graphics:mask_2_graphics_117,x:206.4,y:114.5}).wait(1).to({graphics:mask_2_graphics_118,x:206.8,y:113}).wait(1).to({graphics:mask_2_graphics_119,x:207.2,y:111.4}).wait(1).to({graphics:mask_2_graphics_120,x:207.5,y:109.8}).wait(1).to({graphics:mask_2_graphics_121,x:207.8,y:108.2}).wait(1).to({graphics:mask_2_graphics_122,x:208.1,y:106.6}).wait(1).to({graphics:mask_2_graphics_123,x:208.3,y:104.9}).wait(1).to({graphics:mask_2_graphics_124,x:208.5,y:103.3}).wait(1).to({graphics:mask_2_graphics_125,x:208.7,y:101.7}).wait(1).to({graphics:mask_2_graphics_126,x:208.8,y:100.1}).wait(1).to({graphics:mask_2_graphics_127,x:208.9,y:98.5}).wait(1).to({graphics:mask_2_graphics_128,x:209,y:96.8}).wait(1).to({graphics:mask_2_graphics_129,x:209,y:95.2}).wait(1).to({graphics:mask_2_graphics_130,x:209,y:93.6}).wait(1).to({graphics:mask_2_graphics_131,x:209,y:94.9}).wait(1).to({graphics:mask_2_graphics_132,x:209,y:96.6}).wait(1).to({graphics:mask_2_graphics_133,x:209,y:98.2}).wait(1).to({graphics:mask_2_graphics_134,x:209.1,y:99.8}).wait(1).to({graphics:mask_2_graphics_135,x:209.1,y:101.4}).wait(1).to({graphics:mask_2_graphics_136,x:209.1,y:103}).wait(1).to({graphics:mask_2_graphics_137,x:209.1,y:104.6}).wait(1).to({graphics:mask_2_graphics_138,x:209.1,y:106.2}).wait(1).to({graphics:mask_2_graphics_139,x:209.1,y:107.8}).wait(1).to({graphics:mask_2_graphics_140,x:209.1,y:109.3}).wait(1).to({graphics:mask_2_graphics_141,x:209.1,y:110.9}).wait(1).to({graphics:mask_2_graphics_142,x:209.1,y:112.5}).wait(1).to({graphics:mask_2_graphics_143,x:209.1,y:114.1}).wait(1).to({graphics:mask_2_graphics_144,x:209.1,y:115.6}).wait(1).to({graphics:mask_2_graphics_145,x:209.1,y:117.2}).wait(1).to({graphics:mask_2_graphics_146,x:209.1,y:118.7}).wait(1).to({graphics:mask_2_graphics_147,x:209.1,y:120.2}).wait(1).to({graphics:mask_2_graphics_148,x:209.1,y:121.8}).wait(1).to({graphics:mask_2_graphics_149,x:209.1,y:123.3}).wait(1).to({graphics:mask_2_graphics_150,x:209.1,y:124.8}).wait(1).to({graphics:mask_2_graphics_151,x:209.1,y:126.3}).wait(1).to({graphics:mask_2_graphics_152,x:209.1,y:127.8}).wait(1).to({graphics:mask_2_graphics_153,x:209.1,y:129.3}).wait(1).to({graphics:mask_2_graphics_154,x:209.1,y:130.7}).wait(1).to({graphics:mask_2_graphics_155,x:209,y:132.2}).wait(1).to({graphics:mask_2_graphics_156,x:209,y:133.6}).wait(1).to({graphics:mask_2_graphics_157,x:209,y:135}).wait(1).to({graphics:mask_2_graphics_158,x:208.9,y:136.5}).wait(1).to({graphics:mask_2_graphics_159,x:208.9,y:137.9}).wait(1).to({graphics:mask_2_graphics_160,x:208.9,y:139.2}).wait(1).to({graphics:mask_2_graphics_161,x:208.8,y:140.6}).wait(1).to({graphics:mask_2_graphics_162,x:208.8,y:142}).wait(1).to({graphics:mask_2_graphics_163,x:208.8,y:143.3}).wait(1).to({graphics:mask_2_graphics_164,x:208.7,y:144.6}).wait(1).to({graphics:mask_2_graphics_165,x:208.7,y:146}).wait(1).to({graphics:mask_2_graphics_166,x:208.7,y:147.3}).wait(1).to({graphics:mask_2_graphics_167,x:208.6,y:148.5}).wait(1).to({graphics:mask_2_graphics_168,x:208.6,y:149.8}).wait(1).to({graphics:mask_2_graphics_169,x:208.5,y:151}).wait(1).to({graphics:mask_2_graphics_170,x:208.4,y:152.4}).wait(1).to({graphics:mask_2_graphics_171,x:208.4,y:153.7}).wait(1).to({graphics:mask_2_graphics_172,x:208.4,y:155}).wait(1).to({graphics:mask_2_graphics_173,x:208.3,y:156.2}).wait(1).to({graphics:mask_2_graphics_174,x:208.3,y:157.5}).wait(1).to({graphics:mask_2_graphics_175,x:208.3,y:158.7}).wait(1).to({graphics:mask_2_graphics_176,x:208.3,y:159.9}).wait(1).to({graphics:mask_2_graphics_177,x:208.3,y:161.1}).wait(1).to({graphics:mask_2_graphics_178,x:208.3,y:162.2}).wait(1).to({graphics:mask_2_graphics_179,x:208.3,y:163.4}).wait(1).to({graphics:mask_2_graphics_180,x:208.3,y:164.5}).wait(1).to({graphics:mask_2_graphics_181,x:208.2,y:165.5}).wait(1).to({graphics:mask_2_graphics_182,x:208.2,y:166.6}).wait(1).to({graphics:mask_2_graphics_183,x:208.2,y:167.6}).wait(1).to({graphics:mask_2_graphics_184,x:208.2,y:168.6}).wait(1).to({graphics:mask_2_graphics_185,x:208.2,y:169.5}).wait(1).to({graphics:mask_2_graphics_186,x:208.2,y:170.5}).wait(1).to({graphics:mask_2_graphics_187,x:208.2,y:171.7}).wait(1).to({graphics:mask_2_graphics_188,x:208.2,y:172.9}).wait(1).to({graphics:mask_2_graphics_189,x:208.2,y:174}).wait(1).to({graphics:mask_2_graphics_190,x:208.2,y:175.1}).wait(1).to({graphics:mask_2_graphics_191,x:208.2,y:176.1}).wait(1).to({graphics:mask_2_graphics_192,x:208.1,y:177.1}).wait(1).to({graphics:mask_2_graphics_193,x:208.1,y:178}).wait(1).to({graphics:mask_2_graphics_194,x:208.1,y:178.9}).wait(1).to({graphics:mask_2_graphics_195,x:208,y:179.6}).wait(1).to({graphics:mask_2_graphics_196,x:208,y:180.4}).wait(1).to({graphics:mask_2_graphics_197,x:207.9,y:181}).wait(1).to({graphics:mask_2_graphics_198,x:207.9,y:181.6}).wait(1).to({graphics:mask_2_graphics_199,x:207.8,y:182.1}).wait(1).to({graphics:mask_2_graphics_200,x:207.8,y:182.6}).wait(1).to({graphics:mask_2_graphics_201,x:207.7,y:183}).wait(1).to({graphics:mask_2_graphics_202,x:207.7,y:183.4}).wait(1).to({graphics:mask_2_graphics_203,x:207.6,y:183.6}).wait(1).to({graphics:mask_2_graphics_204,x:207.5,y:183.9}).wait(255));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(25,1,1).p("AwMnwQGUnAJYgnQMyAeC7IbQBeEKgsDpQgrDki4DyQkrGKpqAj");
	this.shape_4.setTransform(267.7,190);
	this.shape_4._off = true;

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(54).to({_off:false},0).wait(405));

	// Layer 5 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_9 = new cjs.Graphics().p("Aj3ifIBYhYIGXGXIhYBYg");
	var mask_3_graphics_10 = new cjs.Graphics().p("AkEiiIBvhiIGaGnIhvBhg");
	var mask_3_graphics_11 = new cjs.Graphics().p("AkQikICGhsIGbG2IiGBrg");
	var mask_3_graphics_12 = new cjs.Graphics().p("AkdinICdh1IGeHEIidB1g");
	var mask_3_graphics_13 = new cjs.Graphics().p("AkqiqIC0h/IGhHUIi0B+g");
	var mask_3_graphics_14 = new cjs.Graphics().p("Ak2isIDLiJIGiHiIjLCJg");
	var mask_3_graphics_15 = new cjs.Graphics().p("AlCivIDhiSIGlHxIjiCSg");
	var mask_3_graphics_16 = new cjs.Graphics().p("AlPiyID5ibIGmIAIj5Cbg");
	var mask_3_graphics_17 = new cjs.Graphics().p("Alci1IEQilIGpIPIkQCmg");
	var mask_3_graphics_18 = new cjs.Graphics().p("Aloi3IEnivIGqIeIknCvg");
	var mask_3_graphics_19 = new cjs.Graphics().p("Al1i6IE+i4IGtItIk+C4g");
	var mask_3_graphics_20 = new cjs.Graphics().p("AmCi9IFVjCIGvI8IlVDDg");
	var mask_3_graphics_21 = new cjs.Graphics().p("AmOi/IFsjMIGxJMIlsDLg");
	var mask_3_graphics_22 = new cjs.Graphics().p("AmbjCIGEjVIGyJaImDDVg");
	var mask_3_graphics_23 = new cjs.Graphics().p("AmnjEIGajgIG1JqImaDeg");
	var mask_3_graphics_24 = new cjs.Graphics().p("AmzjHIGxjpIG3J5ImyDog");
	var mask_3_graphics_25 = new cjs.Graphics().p("AnAjKIHHjyIG6KHInHDyg");
	var mask_3_graphics_26 = new cjs.Graphics().p("AnNjMIHej8IG9KVIneD8g");
	var mask_3_graphics_27 = new cjs.Graphics().p("AnZjPIH1kGIG+KmIn1EFg");
	var mask_3_graphics_28 = new cjs.Graphics().p("AnmjSIIMkPIHBK0IoMEPg");
	var mask_3_graphics_29 = new cjs.Graphics().p("AnzjUIIjkZIHDLCIojEZg");
	var mask_3_graphics_30 = new cjs.Graphics().p("An/jXII6kjIHFLSIo6Ejg");
	var mask_3_graphics_31 = new cjs.Graphics().p("AoLjaIJRksIHGLhIpREsg");
	var mask_3_graphics_32 = new cjs.Graphics().p("AoYjcIJok3IHJLwIpoE2g");
	var mask_3_graphics_33 = new cjs.Graphics().p("AoljfIJ/lAIHML/Ip/FAg");
	var mask_3_graphics_34 = new cjs.Graphics().p("AoxjiIKWlJIHNMOIqWFJg");
	var mask_3_graphics_35 = new cjs.Graphics().p("Ao+jkIKtlUIHQMeIqtFSg");
	var mask_3_graphics_36 = new cjs.Graphics().p("ApKjnILEldIHRMsIrEFdg");
	var mask_3_graphics_37 = new cjs.Graphics().p("ApXjqILblmIHUM7IrbFmg");
	var mask_3_graphics_38 = new cjs.Graphics().p("ApjjsILylwIHVNKIryFvg");
	var mask_3_graphics_39 = new cjs.Graphics().p("ApwjvIMJl6IHYNZIsJF6g");
	var mask_3_graphics_40 = new cjs.Graphics().p("Ap9jyIMgmDIHbNoIshGDg");
	var mask_3_graphics_41 = new cjs.Graphics().p("AqJj0IM3mNIHcN2Is3GNg");
	var mask_3_graphics_42 = new cjs.Graphics().p("AqWj3INOmXIHfOGItOGXg");
	var mask_3_graphics_43 = new cjs.Graphics().p("Aqij5INlmhIHgOVItlGgg");
	var mask_3_graphics_44 = new cjs.Graphics().p("Aqvj8IN8mqIHjOkIt8Gpg");
	var mask_3_graphics_45 = new cjs.Graphics().p("Aq7j/IOTmzIHkOyIuTG0g");
	var mask_3_graphics_46 = new cjs.Graphics().p("ArIkBIOqm+IHnPCIuqG9g");
	var mask_3_graphics_47 = new cjs.Graphics().p("ArUkEIPBnHIHoPQIvBHHg");
	var mask_3_graphics_48 = new cjs.Graphics().p("ArhkHIPYnQIHrPfIvYHRg");
	var mask_3_graphics_49 = new cjs.Graphics().p("ArukKIPvnaIHtPvIvvHag");
	var mask_3_graphics_50 = new cjs.Graphics().p("Ar6kMIQGnkIHvP9IwGHkg");
	var mask_3_graphics_51 = new cjs.Graphics().p("AsHkPIQdnuIHxQNIwdHug");
	var mask_3_graphics_52 = new cjs.Graphics().p("AsTkSIQ0n3IHzQcIw0H3g");
	var mask_3_graphics_53 = new cjs.Graphics().p("AsfkUIRLoBIH0QqIxLIBg");
	var mask_3_graphics_54 = new cjs.Graphics().p("Aj1hdIRioLIH4Q5IxjILg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_3_graphics_9,x:157.8,y:145.9}).wait(1).to({graphics:mask_3_graphics_10,x:158.7,y:145.3}).wait(1).to({graphics:mask_3_graphics_11,x:159.5,y:144.6}).wait(1).to({graphics:mask_3_graphics_12,x:160.3,y:144}).wait(1).to({graphics:mask_3_graphics_13,x:161.1,y:143.4}).wait(1).to({graphics:mask_3_graphics_14,x:162,y:142.7}).wait(1).to({graphics:mask_3_graphics_15,x:162.8,y:142.1}).wait(1).to({graphics:mask_3_graphics_16,x:163.6,y:141.5}).wait(1).to({graphics:mask_3_graphics_17,x:164.4,y:140.8}).wait(1).to({graphics:mask_3_graphics_18,x:165.2,y:140.2}).wait(1).to({graphics:mask_3_graphics_19,x:166,y:139.6}).wait(1).to({graphics:mask_3_graphics_20,x:166.9,y:138.9}).wait(1).to({graphics:mask_3_graphics_21,x:167.7,y:138.3}).wait(1).to({graphics:mask_3_graphics_22,x:168.5,y:137.6}).wait(1).to({graphics:mask_3_graphics_23,x:169.3,y:137}).wait(1).to({graphics:mask_3_graphics_24,x:170.2,y:136.4}).wait(1).to({graphics:mask_3_graphics_25,x:171,y:135.7}).wait(1).to({graphics:mask_3_graphics_26,x:171.8,y:135.1}).wait(1).to({graphics:mask_3_graphics_27,x:172.6,y:134.5}).wait(1).to({graphics:mask_3_graphics_28,x:173.4,y:133.8}).wait(1).to({graphics:mask_3_graphics_29,x:174.3,y:133.2}).wait(1).to({graphics:mask_3_graphics_30,x:175.1,y:132.6}).wait(1).to({graphics:mask_3_graphics_31,x:175.9,y:131.9}).wait(1).to({graphics:mask_3_graphics_32,x:176.7,y:131.3}).wait(1).to({graphics:mask_3_graphics_33,x:177.5,y:130.7}).wait(1).to({graphics:mask_3_graphics_34,x:178.4,y:130}).wait(1).to({graphics:mask_3_graphics_35,x:179.2,y:129.4}).wait(1).to({graphics:mask_3_graphics_36,x:180,y:128.8}).wait(1).to({graphics:mask_3_graphics_37,x:180.8,y:128.1}).wait(1).to({graphics:mask_3_graphics_38,x:181.6,y:127.5}).wait(1).to({graphics:mask_3_graphics_39,x:182.5,y:126.9}).wait(1).to({graphics:mask_3_graphics_40,x:183.3,y:126.2}).wait(1).to({graphics:mask_3_graphics_41,x:184.1,y:125.6}).wait(1).to({graphics:mask_3_graphics_42,x:184.9,y:125}).wait(1).to({graphics:mask_3_graphics_43,x:185.8,y:124.3}).wait(1).to({graphics:mask_3_graphics_44,x:186.6,y:123.7}).wait(1).to({graphics:mask_3_graphics_45,x:187.4,y:123.1}).wait(1).to({graphics:mask_3_graphics_46,x:188.2,y:122.4}).wait(1).to({graphics:mask_3_graphics_47,x:189,y:121.8}).wait(1).to({graphics:mask_3_graphics_48,x:189.9,y:121.2}).wait(1).to({graphics:mask_3_graphics_49,x:190.7,y:120.5}).wait(1).to({graphics:mask_3_graphics_50,x:191.5,y:119.9}).wait(1).to({graphics:mask_3_graphics_51,x:192.3,y:119.3}).wait(1).to({graphics:mask_3_graphics_52,x:193.1,y:118.6}).wait(1).to({graphics:mask_3_graphics_53,x:194,y:118}).wait(1).to({graphics:mask_3_graphics_54,x:138.1,y:98.8}).wait(405));

	// Layer 4
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(25,1,1).p("AwMnwQGUnAJYgnQMyAeC7IbQBeEKgsDpQgrDki4DyQkrGKpqAj");
	this.shape_5.setTransform(267.7,190);
	this.shape_5._off = true;

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(9).to({_off:false},0).wait(450));

	// Base
	this.instance_3 = new lib.Symbol1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(271.1,285.2);
	this.instance_3.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(459));

	// Background
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#F59E9E").ss(3,1,1).p("Asuw4IZdAAMAAAAhxI5dAAg");
	this.shape_6.setTransform(275,275,3.373,2.543);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F6E7E7").s().p("AsuQ5MAAAghxIZdAAMAAAAhxg");
	this.shape_7.setTransform(275,275,3.373,2.543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).wait(459));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(273.5,214.3,553,811.5);
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