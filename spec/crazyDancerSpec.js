describe("crazyDancer", function() {
// var crazyDancer = new makecrazyDancer(top, left, timeBetweenSteps);

  var crazyDancer ;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    crazyDancer = new makeCrazyDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(crazyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(crazyDancer.$node, 'toggle');
    crazyDancer.step();
    expect(crazyDancer.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      // debugger;
      sinon.spy(crazyDancer, "step"); //what is spy
      // debugger;
      expect(crazyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);
      // debugger;
      expect(crazyDancer.step.callCount).to.be.equal(1);
      // debugger;
      clock.tick(timeBetweenSteps);
      // debugger;
      expect(crazyDancer.step.callCount).to.be.equal(2);
    });
  });
});
