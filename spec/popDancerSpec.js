describe("popDancer", function() {
// var popDancer = new makecrazyDancer(top, left, timeBetweenSteps);

  var popDancer ;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    popDancer = new makePopDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(popDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(popDancer.$node, 'toggle');
    popDancer.step();
    expect(popDancer.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      // debugger;
      sinon.spy(popDancer, "step"); //what is spy
      // debugger;
      expect(popDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);
      // debugger;
      expect(popDancer.step.callCount).to.be.equal(1);
      // debugger;
      clock.tick(timeBetweenSteps);
      // debugger;
      expect(popDancer.step.callCount).to.be.equal(2);
    });
  });
});
