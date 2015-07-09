// Creates and returns a new dancer object that can step
var makeRoundDancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;


};

makeRoundDancer.prototype.step = function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    // console.log("this.stepsdfsdfsdf"); //logs this
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
  // debugger;
  // console.log("what") //logs this

  // setTimeout(function() {
  //   debugger;
  //   console.log("something") //does not log this

  // }, 1000);
  // setTimeout(dancer.step, timeBetweenSteps);
};

makeRoundDancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //

  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeRoundDancer.prototype.roll = function() {
  setInterval(function() {
    $(".addRoundDancer").animate({rotate: "+=10deg"}, 0);
  }, 200)
};


// var dancer = new makeDancer(top, left, timeBetweenSteps);
// dancer.step(); // TODO: check if this is needed 
// dancer.setPosition(top, left);



  // use jQuery to create an HTML <span> tag


  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body

// Refactor the Dancer class and its subclass BlinkyDancer from functional inheritance to pseudoclassical.

// Feel free to Refer to the lecture slides on Code Sharing Patterns