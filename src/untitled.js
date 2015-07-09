
var makeStillDancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="still-dancer"></span>');
  this.$node.append('<img class ="still-dancer" src="http://orig01.deviantart.net/fa6a/f/2012/223/a/1/gangnam_gif___foreleg_cross_like_a_boss_by_1n33d4hug-d5arb09.gif">');
  $(".still-dancer").mouseover(function() {
    $(".still-dancer").append('<img class="still-dancer" src = "http://orig00.deviantart.net/9849/f/2012/223/8/7/pony_gangnam_style_by_1n33d4hug-d5arai9.gif"></img>')
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

  makeDancer.apply(this, arguments);
  // this.lineUp();

  // this.step(); //fixed test 3
  // this.setPosition(); //check thisXXX
};

makeWeirdDancer.prototype = Object.create(makeDancer.prototype);
makeWeirdDancer.prototype.constructor = makeWeirdDancer;

makeWeirdDancer.prototype.randomlymove = function() {
  // makeDancer.prototype.step.apply(this);
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
  this.$node.rotate(generateRandDeg());
  
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
//   makeDancer.prototype.step.apply(this);
//   // debugger;
//   this.$node.toggle();
// };

// makeWeirdDancer.prototype.jump = function(){
//   setTimeout(this.jump.bind(this), this.timeBetweenSteps);
// };
