
var makeStillDancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="still-dancer-span"></span>');
  // this.$node.append('<div class="still-dancer"><img src="http://orig01.deviantart.net/fa6a/f/2012/223/a/1/gangnam_gif___foreleg_cross_like_a_boss_by_1n33d4hug-d5arb09.gif"></img></div>');


  this.$node.append('<div class="still-dancer"><img src="http://i.imgur.com/szEQ275.gif"></img></div>');


  // $(".still-dancer").click(function() {
  //   $(".still-dancer").remove();
  //   // $(".still-dancer").append('<div class="still-dancer-div"><img class="still-dancer" src="http://orig00.deviantart.net/9849/f/2012/223/8/7/pony_gangnam_style_by_1n33d4hug-d5arai9.gif"></img></div>')
  // })

// $( "#outer" ).mouseover(function() {
//   $( "#log" ).append( "<div>Handler for .mouseover() called.</div>" );
// });

  this.top = top;
  this.left = left;


  makeDancer.apply(this, arguments);
  // this.lineUp();

  // this.step(); //fixed test 3
  // this.setPosition(); //check thisXXX
};

makeStillDancer.prototype = Object.create(makeDancer.prototype);
makeStillDancer.prototype.constructor = makeStillDancer;

makeStillDancer.prototype.step = function() {
  makeDancer.prototype.step.apply(this);
  this.$node.fadeIn();


  this.$node.animate({
    left:0, 
    top:$("body").height() * Math.random()+"px"

            }, "slow");

  this.$node.animate({
    left:0, 
    top:$("body").height() * Math.random()+"px"

            }, "slow");              
  // var sideSway = false;
  // var sideSwayLeave = false;
  $(".still-dancer").mouseover(function() {
    // console.log("clicked");
    // if(!sideSway) {
      $(".still-dancer img").remove();
      $(".still-dancer").append('<div class="still-dancer-div"><img class="still-dancer" src="http://i.imgur.com/36sRcAs.gif"></img></div>')
      // sideSway = true;      
    // }
  });  

  // $(".still-dancer").click(function() {
  //   // console.log("clicked");
  //   // if(!sideSway) {
  //     $(".still-dancer img").remove();
  //     $(this).toggleClass("gangnam-sway-toggle");
  //     // $(".still-dancer").append('<div class="still-dancer-div"><img class="still-dancer" src="http://i.imgur.com/36sRcAs.gif"></img></div>')
  //     // sideSway = true;      
  //   // }
  // });  


  // $(".still-dancer").mouseover(function() {
  //   // console.log("clicked");
  //   // if(!sideSway) {
  //     $(".still-dancer img").remove();
  //     $(".still-dancer").append('<div class="still-dancer-div"><img class="still-dancer" src="http://i.imgur.com/36sRcAs.gif"></img></div>')
  //     // sideSway = true;      
  //   // }
  // });  


  // $(".still-dancer").mouseover(function() {
  //   // console.log("clicked");
  //   if(sideSway) {
  //     $(".still-dancer-div img").remove();
  //     $(".still-dancer").append('<div class="still-dancer"><img class="still-dancer" src="http://i.imgur.com/szEQ275.gif"></img></div>')
  //     sideSway = false;
  //   }
  // });  


  // $(".still-dancer").click(function() {
  //   $(".still-dancer").remove();
  //   // $(".still-dancer").append('<div class="still-dancer-div"><img class="still-dancer" src="http://orig00.deviantart.net/9849/f/2012/223/8/7/pony_gangnam_style_by_1n33d4hug-d5arai9.gif"></img></div>')
  // })

  // // this.$node.fadeOut();  
  // this.$node.toggle();
}; //.step