var makePopDancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="popDancerSpan"></span>');

  makeDancer.apply(this, arguments);
  // this.step(); //fixed test 3
  // this.setPosition(); //check thisXXX
};

makePopDancer.prototype = Object.create(makeDancer.prototype);
makePopDancer.prototype.constructor = makePopDancer;

makePopDancer.prototype.step = function() {
  makeDancer.prototype.step.apply(this);
  // debugger;
  // this.$node.toggle();

  //this makes the stick move

  // this.$node.animate({height: "100px", border:"10px solid green", left:$("body").width() * Math.random()+"px", 
  // 	top:$("body").height() * Math.random()+"px"

		// 			}, "slow");
  // this.$node.animate({height: "200px", border:"10px solid green", left:$("body").width() * Math.random()+"px", 
  // 	top:$("body").height() * Math.random()+"px"
		// 			// color: "green",
		// 			// backgroundColor: "rgb( 20, 20, 20 )"
		// 			// "rgb("+generateRandColorNum()+","+ generateRandColorNum()+","_ generateRandColorNum()+")"
		// 			});




  // this.$node.rotate(generateRandDeg);
  // for (var i = 0; i < 360; i++) {
  	// this.$node.rotate(i);
  // }
  this.$node.rotate(generateRandDeg());
  // this.$node.rotate(60);
  // this.$node.rotate(30);

}

var generateRandDeg = function() {
	return Math.random()*350;
}

var generateRandColorNum = function() {
	return Math.random() * 255;
}

var rotation = 0;

jQuery.fn.rotate = function(degrees) {
    $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                 '-moz-transform' : 'rotate('+ degrees +'deg)',
                 '-ms-transform' : 'rotate('+ degrees +'deg)',
                 'transform' : 'rotate('+ degrees +'deg)'});
    return $(this);
};

// $('.rotate').click(function() {
//     rotation += 5;
//     $(this).rotate(rotation);
// });

// $( "#toggle" ).click(function() {
//   $( "#elem" ).animate({
//     color: "green",
//     backgroundColor: "rgb( 20, 20, 20 )"
//   });
// });

// this.oldStep(); //ADD LATER

// makePopDancer.prototype.oldStep = function() {
  // this.step
// }
// var blinkyDancer = new makePopDancer
// var oldStep = this.step; // come back to this



// var makePopDancer = function(top, left, timeBetweenSteps){
//   makeDancer.apply(this, arguments);
//   // this.step(); //fixed test 3
//   // this.setPosition(); //check thisXXX
// };

// makePopDancer.prototype = Object.create(makeDancer.prototype);
// makePopDancer.prototype.constructor = makePopDancer;

// makePopDancer.prototype.step = function() {
//   makeDancer.prototype.step.apply(this);
//   // debugger;
//   this.$node.toggle();
// }