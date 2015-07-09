
var makeWeirdDancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="weird-dancer"></span>');
  $(".weird-dancer").mouseover(function() {
    $(".weird-dancer").append('<img src = "movingbanana.gif" height="50" width="auto"></img>')
  })

// $( "#outer" ).mouseover(function() {
//   $( "#log" ).append( "<div>Handler for .mouseover() called.</div>" );
// });


// $('#test').html('<img src="/static/on.png" height="64px" width="64px">');

  // this.$node.append('<img class = "crazydancer" src="movingbanana.gif"></img>');
  this.top = top;
  this.left = left;
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

  makeCrazyDancer.apply(this, arguments);
  // this.lineUp();

  // this.step(); //fixed test 3
  // this.setPosition(); //check thisXXX
};

makeWeirdDancer.prototype = Object.create(makeCrazyDancer.prototype);
makeWeirdDancer.prototype.constructor = makeWeirdDancer;

makeWeirdDancer.prototype.randomlymove = function() {
  // makeCrazyDancer.prototype.step.apply(this);
  // debugger;
  // this.$node.slideUp();

  // this.$node.slideDown();


  //makes it move
	this.$node.animate({height: "100px", border:"20px solid green", 
		left:$("body").width() * Math.random()+"px", 
		top:$("body").height() * Math.random()+"px"

						}, "slow");
	this.$node.animate({height: "200px", border:"20px solid green", 
		left:$("body").width() * Math.random()+"px", 
		top:$("body").height() * Math.random()+"px"
						// color: "green",
						// backgroundColor: "rgb( 20, 20, 20 )"
						// "rgb("+generateRandColorNum()+","+ generateRandColorNum()+","_ generateRandColorNum()+")"
						});
	// this.$node.rotate(generateRandDeg);
	// for (var i = 0; i < 360; i++) {
		// this.$node.rotate(i);
	// }
	// this.$node.rotate(generateRandDeg()); //XXX
  
  this.$node.fadeIn();
  // this.$node.fadeOut();  
  this.$node.toggle();
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





// var makeWeirdDancer = function(top, left, timeBetweenSteps){
//   makeBlinkyDancer.apply(this, arguments);
//   this.step();
//   this.setPosition();
// };

// makeWeirdDancer.prototype = Object.create(makeBlinkyDancer.prototype);
// makeWeirdDancer.prototype.constructor = makeWeirdDancer;

// makeWeirdDancer.prototype.step = function() {
//   makeCrazyDancer.prototype.step.apply(this);
//   // debugger;
//   this.$node.toggle();
// };

// makeWeirdDancer.prototype.jump = function(){
//   setTimeout(this.jump.bind(this), this.timeBetweenSteps);
// };
