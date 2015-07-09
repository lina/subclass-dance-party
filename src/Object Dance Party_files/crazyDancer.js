
// banana 
var makeCrazyDancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="crazydancerspan"></span>');
  this.$node.append('<img class="crazydancer" src="http://www.sherv.net/cm/emo/funny/2/big-dancing-banana-smiley-emoticon.gif"></img>');

  // this.$node.addClass("crazydancerspannew").rotate({
  //       duration: 200,
  //       angle: 0,
  //       animateTo:180});

    // $(this).addClass('crazydancerspan').rotate({
    //     duration: 200,
    //     angle: 0,
    //     animateTo:180});




// if($(this).hasClass('crazydancerspan')) {
//     $(this).removeClass('crazydancerspan').rotate({
//         duration: 200,
//         angle: 180,
//         animateTo:0
//   });
// } else {

// };

  makeDancer.apply(this, arguments);

  // this.step(); //fixed test 3
  // this.setPosition(); //check thisXXX
};

makeCrazyDancer.prototype = Object.create(makeDancer.prototype);
makeCrazyDancer.prototype.constructor = makeCrazyDancer;

makeCrazyDancer.prototype.step = function() {
  makeDancer.prototype.step.apply(this);
  // debugger;
  // this.$node.slideUp();

  // this.$node.slideDown();

// this part animates the banana
	this.$node.animate({height: "100px", border:"10px solid green", 
		left:$("body").width() * Math.random()+"px", 
		top:$("body").height() * Math.random()+"px"

						}, "slow");
	this.$node.animate({height: "200px", border:"10px solid green", 
		left:$("body").width() * Math.random()+"px", 
		top:$("body").height() * Math.random()+"px"
						// color: "green",
						// backgroundColor: "rgb( 20, 20, 20 )"
						// "rgb("+generateRandColorNum()+","+ generateRandColorNum()+","_ generateRandColorNum()+")"
						}, "slow");





	// this.$node.rotate(generateRandDeg);
	// for (var i = 0; i < 360; i++) {
		// this.$node.rotate(i);
	// }
	this.$node.rotate(generateRandDeg()); 

  //XXX
  
  this.$node.fadeIn();
  // this.$node.fadeOut();  
  // this.$node.toggle();
}




var generateRandDeg = function() {
	return Math.random()*360;
}

// this.oldStep(); //ADD LATER

// makeBlinkyDancer.prototype.oldStep = function() {
  // this.step
// }
// var blinkyDancer = new makeBlinkyDancer
// var oldStep = this.step; // come back to this





// var makeCrazyDancer = function(top, left, timeBetweenSteps){
//   makeBlinkyDancer.apply(this, arguments);
//   this.step();
//   this.setPosition();
// };

// makeCrazyDancer.prototype = Object.create(makeBlinkyDancer.prototype);
// makeCrazyDancer.prototype.constructor = makeCrazyDancer;

// makeCrazyDancer.prototype.step = function() {
//   makeDancer.prototype.step.apply(this);
//   // debugger;
//   this.$node.toggle();
// };

// makeCrazyDancer.prototype.jump = function(){
//   setTimeout(this.jump.bind(this), this.timeBetweenSteps);
// };
