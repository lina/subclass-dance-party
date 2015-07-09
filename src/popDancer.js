var makePopDancer = function(top, left, timeBetweenSteps){
  makeDancer.apply(this, arguments);
  // this.step(); //fixed test 3
  // this.setPosition(); //check thisXXX
};

makePopDancer.prototype = Object.create(makeDancer.prototype);
makePopDancer.prototype.constructor = makePopDancer;

makePopDancer.prototype.step = function() {
  makeDancer.prototype.step.apply(this);
  // debugger;
  this.$node.toggle();
}


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