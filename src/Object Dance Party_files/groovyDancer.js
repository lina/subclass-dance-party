
// carlton
var makeGroovyDancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="groovydancerspan"></span>');
  this.$node.append('<img class = "groovydancer" src="https://33.media.tumblr.com/2dfc3369827df9b981e111d7fd8fc732/tumblr_mvemcyarmn1rslphyo1_400.gif"></img>');

  makeDancer.apply(this, arguments);

  // this.step(); //fixed test 3
  // this.setPosition(); //check thisXXX
};

makeGroovyDancer.prototype = Object.create(makeDancer.prototype);
makeGroovyDancer.prototype.constructor = makeGroovyDancer;

makeGroovyDancer.prototype.step = function() {
  makeDancer.prototype.step.apply(this);
  // debugger;
  // this.$node.slideUp();

  // this.$node.slideDown();
	this.$node.animate({height: "auto", width: "auto", 
		left:$("body").width() * Math.random()+"px", 
		top:$("body").height() * Math.random()+"px"
    }, "slow");
  this.$node.animate({height: "auto", width: "auto", 
    left:$("body").width() * Math.random()+"px", 
    top:$("body").height() * Math.random()+"px"
    }, "slow");  
	// this.$node.animate({height: "auto", width: "auto", border:"10px solid green", 
	// 	left:$("body").width() * Math.random()+"px", 
	// 	top:$("body").height() * Math.random()+"px"
	// 					// color: "green",
	// 					// backgroundColor: "rgb( 20, 20, 20 )"
	// 					// "rgb("+generateRandColorNum()+","+ generateRandColorNum()+","_ generateRandColorNum()+")"
	//   }, "slow");
	// this.$node.rotate(generateRandDeg);
	// for (var i = 0; i < 360; i++) {
		// this.$node.rotate(i);
	// }


	// this.$node.rotate(generateRandDeg()); //XXX
  

  this.$node.fadeIn();
  // this.$node.fadeIn();
  // this.$node.fadeOut();  
  // this.$node.toggle();
};

makeGroovyDancer.prototype.randomize = function() {
  makeDancer.prototype.randomize.apply(this);
}

var generateRandDeg = function() {
	return Math.random()*350;
};

// this.oldStep(); //ADD LATER

// makeBlinkyDancer.prototype.oldStep = function() {
  // this.step
// }
// var blinkyDancer = new makeBlinkyDancer
// var oldStep = this.step; // come back to this





// var makeGroovyDancer = function(top, left, timeBetweenSteps){
//   makeBlinkyDancer.apply(this, arguments);
//   this.step();
//   this.setPosition();
// };

// makeGroovyDancer.prototype = Object.create(makeBlinkyDancer.prototype);
// makeGroovyDancer.prototype.constructor = makeGroovyDancer;

// makeGroovyDancer.prototype.step = function() {
//   makeDancer.prototype.step.apply(this);
//   // debugger;
//   this.$node.toggle();
// };

// makeGroovyDancer.prototype.jump = function(){
//   setTimeout(this.jump.bind(this), this.timeBetweenSteps);
// };
