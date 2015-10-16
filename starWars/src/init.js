
$(document).ready(function() {
  window.enemies = [];
  window.score = 0;


  // make stars
  for (var i = 0; i < 100; i++){
     buildStar();     
  }

  //generate tie fighters
  setInterval(function(){
    if (enemies.length < 15){
      buildTieFighter();
    }
  }, 2000);

  //listen for click on tie fighter
  $('body').on('click', '.growImage', function(event){
    window.score++;
    $('#score').text(score);
    $(this).attr('src', './img/explosion.gif');
    setTimeout(function(){
      this.remove();
    }.bind(this), 500);
  });

  //listen for key presses
  $(document).on("keypress", function(event) {
      // Create a TieFighter on T
      if ( event.keyCode === 116 ){
        buildTieFighter();
      }
      //hyperspace on H
      if (event.keyCode === 104) {
        $('.hyperspace').toggle();
        while (enemies.length > 0){
          var enemy = enemies.pop();
          enemy.remove();
        }
      }
  });


});

var randomInRange = function(n){
      var sign = Math.random() > 0.5 ? 1 : -1;
      var number = sign * Math.floor( Math.random() * n);
      return number;
};

var buildTieFighter = function(){
    var tiefighter = new GrowImage(
        randomInRange(25),
        randomInRange(25),
        32,
        50, $('body').height(), $('body').width(),
        "../img/tiefighter.png"
      );
    window.enemies.push(tiefighter);
    $('body').append(tiefighter.$node);
};

var buildStar = function(){
  var star = new GrowStar(
        randomInRange(25),
        randomInRange(25),
        Math.floor( 32 * Math.random() + 1),
        50, $('body').height(), $('body').width() 
      );
  $('body').append(star.$node);
}

