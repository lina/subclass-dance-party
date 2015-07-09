
var makeCrazyDancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="crazydancerspan"></span>');
  this.$node.append('<img class = "crazydancer" src="movingbanana.gif"></img>');

  makeDancer.apply(this, arguments);

  // this.step(); //fixed test 3
  // this.setPosition(); //check thisXXX
};

makeCrazyDancer.prototype = Object.create(makeDancer.prototype);
makeCrazyDancer.prototype.constructor = makeCrazyDancer;

makeCrazyDancer.prototype.step = function() {
  makeDancer.prototype.step.apply(this);
  // debugger;

  this.$node.toggle();
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
