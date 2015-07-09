var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  makeDancer.apply(this, arguments);
  // this.step(); //fixed test 3
  // this.setPosition(); //check thisXXX
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
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