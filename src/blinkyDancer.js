var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="blinkydancer"></span>');
  this.$node.append('<img class = "blinkydancer-img" src="http://media.giphy.com/media/ucaqqmnJ4imAw/giphy.gif"></img>');

  // $(".dancer").mouseover(function() {
  //   $(".dancer").append('<img src = "http://media.giphy.com/media/ucaqqmnJ4imAw/giphy.gif"></img>')
  // })  
  // makeDancer.apply(this, arguments);
  // this.step(); //fixed test 3
  // this.setPosition(); //check thisXXX
  // this.lineUp();
  makeDancer.apply(this, arguments);
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  makeDancer.prototype.step.apply(this);
  // debugger;
  
  // //makes it move:
  // this.$node.animate({height: "100px", border:"10px solid green", left:"100px", 
  // 	top:$("body").height() * Math.random()+"px"

  // 					}, "slow");
  // this.$node.animate({height: "200px", border:"10px solid green", left:"1000px", 
  // 	top:$("body").height() * Math.random()+"px"
  // 					// color: "green",
  // 					// backgroundColor: "rgb( 20, 20, 20 )"
  // 					// "rgb("+generateRandColorNum()+","+ generateRandColorNum()+","_ generateRandColorNum()+")"
  // 					});
	// this.$node.animate({
	// 	left:0, 
	// 	top:$("body").height() * Math.random()+"px"

	// 					}, "slow");

  this.$node.animate({
    marginLeft:"+=10000px"
    // top: "0px";
  }, 10000);
  



// //starts here
 //  this.$node.animate({
 //    left:"0px" , 
 //    top:$("body").height() * Math.random()+"px"
 //            // color: "green",
 //            // backgroundColor: "rgb( 20, 20, 20 )"
 //            // "rgb("+generateRandColorNum()+","+ generateRandColorNum()+","_ generateRandColorNum()+")"
 //            }, "slow");
	// this.$node.animate({
	// 	left:$("body").width() + "px" , 
	// 	top:$("body").height() * Math.random()+"px"
	// 					// color: "green",
	// 					// backgroundColor: "rgb( 20, 20, 20 )"
	// 					// "rgb("+generateRandColorNum()+","+ generateRandColorNum()+","_ generateRandColorNum()+")"
	// 					}, "slow");
 //  //****** end heres


  // this.$node.rotate(generateRandDeg);
  // for (var i = 0; i < 360; i++) {
  	// this.$node.rotate(i);
  // }
  // this.$node.rotate(generateRandDeg());  
  // this.$node.fadeIn();
  // this.$node.fadeOut();
}
var generateRandDeg = function() {
	return Math.random()*180;
}

// this.oldStep(); //ADD LATER

// makeBlinkyDancer.prototype.oldStep = function() {
  // this.step
// }
// var blinkyDancer = new makeBlinkyDancer
// var oldStep = this.step; // come back to this



// var makeBlinkyDancer = function(top, left, timeBetweenSteps){
//   makeDancer.apply(this, arguments);
//   // this.step(); //fixed test 3
//   // this.setPosition(); //check thisXXX
// };

// makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
// makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

// makeBlinkyDancer.prototype.step = function() {
//   makeDancer.prototype.step.apply(this);
//   // debugger;
//   this.$node.toggle();
// }