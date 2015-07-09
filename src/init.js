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
      window.dancers.push(dancer);
    // }


    // var dancer = new dancerMakerFunction(1000, 1000, 100);
    $('body').append(dancer.$node);
    // $('body').append(crazyDancer.$node);

  });
  


  $(".line-up-tag").click(function(){
    for (var i = 0 ; i < window.dancers.length; i++) {
        console.log("i value1:", i);
        var leftIdx = i * 100 ;
        console.log("left position of dancers: (outside step)", leftIdx);

      // window.dancers[i].lineUp();
      window.dancers[i].step = function() {
        console.log("i value:", i);
        console.log("left position of dancers: (inside step)", leftIdx);
        this.$node.animate({left: leftIdx + "px", top: "200px"}, "fast");
        //do nothing;
      }    
      // window.dancers[i].lineUp(200, 200);

      // window.dancers[i].$node.animate({left:"100px", top:"300px"}, "fast")
      // setPosition($("body").height()/2, $("body").width()/2);
    }
  });




  $(".still-dancer-span").click(function() {
    console.log("clicked");
    $(".still-dancer-span").remove();
    // $(".still-dancer").append('<div class="still-dancer-div"><img class="still-dancer" src="http://orig00.deviantart.net/9849/f/2012/223/8/7/pony_gangnam_style_by_1n33d4hug-d5arai9.gif"></img></div>')
  });
  // lineUp(windows.dancers);
});

