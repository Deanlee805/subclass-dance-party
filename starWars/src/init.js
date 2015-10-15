$(document).ready(function() {
  window.stars = [];

  var randomInRange = function(n){
      var sign = Math.random() > 0.5 ? 1 : -1;
      var number = sign * Math.floor( Math.random() * n);
      return number;
  };

  // make a star with a random position
    for (var i = 0; i < 100; i++){
      var star = new GrowStar(
        randomInRange(25),
        randomInRange(25),
        Math.floor( 32 * Math.random() + 1),
        50, $('body').height(), $('body').width() 
      );
      $('body').append(star.$node);      
    }

  $(document).on("keypress", function(event) {
      // Create a TieFighter
      if ( event.keyCode === 116 ){
      var tiefighter = new GrowImage(
        randomInRange(25),
        randomInRange(25),
        32,
        50, $('body').height(), $('body').width(),
        "../img/tiefighter.png"
      );
      $('body').append(tiefighter.$node);
      }

      if (event.keyCode === 104) {
        $('.hyperspace').toggle();
        // append class to body
      }
  });

  // $(document).on

   
    var starMakerFunctionName = $(this).data("star-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var starMakerFunction = window[starMakerFunctionName];

});

