$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */
    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    // var crazyDancerMakerFunctionName = $(this).data("crazy-dancer-maker");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // var crazyDancerMakerFunction = window[crazyDancerMakerFunctionName];

    // make a dancer with a random position
    // var hasInvoked = false;
    // if(!hasInvoked) {
    //   var dancer = new dancerMakerFunction(
    //     randomHeight, 
    //     randomWidth,
    //     Math.random() * 1000
    //   );   

    //   hasInvoked = true;
      
    // } else {
      var randomHeight = $("body").height() * Math.random();
      var randomWidth = $("body").width() * Math.random();
      var dancer = new dancerMakerFunction(
        randomHeight, 
        randomWidth,
        Math.random() * 1000
      );         
    // }
 
    // var arrOfDancers = [];

    // var dancer = new dancerMakerFunction(
    //   $("body").height() * Math.random(),
    //   $("body").width() * Math.random(),
    //   Math.random() * 1000
    // );
    // debugger;
    // var crazyDancer = new crazyDancerMakerFunction(
    //   $("body").height() * Math.random(),
    //   $("body").width() * Math.random(),
    //   Math.random() * 1000
    // );

    // var arrOfDancers.push(dancer);
    // for (var i = 0;i < arrOfDancers.length; i++) {
    //   dancer.animate({color:"black"});
    // }

    //   this.$node.animate({height: "100px", border:"10px solid green", left:$("body").width() * Math.random()+"px", 
    // top:$("body").height() * Math.random()+"px"

    //       }, "slow");


    // var dancer = new dancerMakerFunction(1000, 1000, 100);
    $('body').append(dancer.$node);
    // $('body').append(crazyDancer.$node);

  });

  // lineUp(windows.dancers);
});
  var liningUp = function() {
    // var lineUp = function(array) {
      for (var i = 0 ; i < array; i++) {
        window.dancers[i].lineUp();
      }

    // }
    // lineUp(window.dancers);    
  }


      // <a href="#" class="addDancerButton" data-dancer-maker-function-name="makeBlinkyDancer">add a blinky dancer</a>    

      // <a href="#" class="addDancerButton" data-crazy-dancer-maker="makeCrazyDancer">add an up and down dancer</a>  


