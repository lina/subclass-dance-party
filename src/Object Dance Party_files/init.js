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
      var randomTime = Math.random() * 1000;
      
      var dancer = new dancerMakerFunction(
        randomHeight, 
        randomWidth,
        randomTime
      );         
      window.dancers.push(dancer);
    // }


    // var dancer = new dancerMakerFunction(1000, 1000, 100);
    $('body').append(dancer.$node);
    // $('body').append(crazyDancer.$node);

  });
  
  console.log("window.dancers array:", window.dancers)

  $(".randomize-position-tag").click(function() {
    var idx; 
    console.log("click registerd");
    console.log("check length", window.dancers.length)
    for (idx = 0 ; idx < window.dancers.length; idx++) {
      console.log("for loop started")
      console.log("elements in window.dancers", window.dancers[idx]);
      window.dancers[idx].randomize = function() {

        console.log("step function started")
        // this.$node.animate({left: "200px", top: "200px"}, "fast");
        console.log("post animate line")
        // while (true) {
          // var coordvalue; 
          // while (true) {
          var horicoordvalue = $("body").width() * Math.random();
          var verticoordvalue = $("body").height() * Math.random();

          // }
          this.$node.animate({
            // left: "300px",
             left: horicoordvalue+"px", 
             // top: "300px"
             top: verticoordvalue+"px"

                     }, "slow");  
          this.$node.animate({
            // left: "300px",
             left: horicoordvalue+"px", 
             // top: "300px"
             top: verticoordvalue+"px"

                     }, "slow");  

        // }
// 

         // this.$node.animate({
         //   left:0, 
         //   top:$("body").height() * Math.random()+"px"

         //           }, "slow"); 
         // this.$node.animate({
         //   left:0, 
         //   top:$("body").height() * Math.random()+"px"

         //           }, "slow");          
      }
    }
  });


  $(".line-up-tag").click(function(){
    var i;
    for (i = 0 ; i < window.dancers.length; i++) {
        console.log("window dancers element:", window.dancers[i]);
        console.log("i value1:", i);
        var leftIdx = $("body").height() * Math.random()+"px";
        console.log("left position of dancers: (outside step)", leftIdx);

      // window.dancers[i].lineUp();
      window.dancers[i].step = function() {
        console.log("i value:", i);
        console.log("left position of dancers: (inside step)", leftIdx);
        this.$node.animate({left: leftIdx + "px", top: "200px"}, "fast");
        // console.log("this:", this);
        //do nothing;
      } //.step function    
      // window.dancers[i].lineUp(200, 200);

      // window.dancers[i].$node.animate({left:"100px", top:"300px"}, "fast")
      // setPosition($("body").height()/2, $("body").width()/2);
    } //loop
  }); //click event








  // lineUp(windows.dancers);
}); //document.ready

