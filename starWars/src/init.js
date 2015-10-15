$(document).ready(function() {
  window.stars = [];

  var randomInRange = function(n){
      var sign = Math.random() > 0.5 ? 1 : -1;
      var number = sign * Math.floor( Math.random() * n);
      return number;
  };

  // make a star with a random position
    for (var i = 0; i < 100; i++){
      var star = new MoveStar(
        randomInRange(25),
        randomInRange(25),
        Math.floor( 32 * Math.random() + 1),
        50, $('body').height(), $('body').width() 
      );
      $('body').append(star.$node);      
    }

  $(document).on("keypress", function(event) {
      
      if ( event.keyCode === 116 ){
      var tiefighter = new Tiefighter(
        randomInRange(25),
        randomInRange(25),
        Math.floor( 32 * Math.random() + 1),
        50, $('body').height(), $('body').width() 
      );
      $('body').append(tiefighter.$node);
        
      }


  });

   
    var starMakerFunctionName = $(this).data("star-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var starMakerFunction = window[starMakerFunctionName];

});

