// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps){
  // this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  this.randomize();

  this.setPosition(top, left); //REMEMBER TO ADD PARAMETERS
  // this.lineUp();
  this.step();
};

    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
makeDancer.prototype.step = function(){
  setTimeout(this.step.bind(this), this.timeBetweenSteps);

};

makeDancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.randomize = function() {
  
  setTimeout(this.randomize.bind(this), this.timeBetweenSteps);
}


//forEach to iterate through nodes



  // use jQuery to create an HTML <span> tag


  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body

// Refactor the Dancer class and its subclass BlinkyDancer from functional inheritance to pseudoclassical.

// Feel free to Refer to the lecture slides on Code Sharing Patterns