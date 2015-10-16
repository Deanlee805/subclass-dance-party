
$(document).ready(function() {
  window.enemies = [];
  window.score = 0;

  window.body = $('body');
  window.bodyHeight = body.height();
  window.bodyWidth = body.width();


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

  body.on('click', function(event){
    var bottomLeft = [0, 500];
    var bottomRight = [bodyWidth, bodyHeight];
    console.log("click");
    console.log(bottomLeft);

    $('#laser').get(0).play();
    
    //var offset = $(this).offset();
    var x = event.pageX;
    var y = event.pageY;
    // drawLaser(x,y, bottomLeft[0], bottomLeft[1]);
    drawLaser(x,y, 0, 0);
    // console.log(x,y, bottomLeft, bottomRight);

  });

  //listen for click on tie fighter
  body.on('click', '.growImage', function(event){
    window.score++;
    $('#explosion').get(0).play();
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

var drawLaser = function(x1, y1, x2, y2){
  var length = Math.sqrt( (x1 - x2) * (x1 - x2) ) + ( (y1 - y2) * (y1 - y2 ) );
  var angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
  console.log(angle);
  var transform = 'rotate(' + angle + 'deg)';
  var laser = $('<div>')
    .addClass('laser')
    .css({
      'position': 'absolute',
      'transform': transform
    })
    .width(length)
    .offset({left: x1, top: y1}); 
    body.append(laser);
}

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
        50, bodyHeight, bodyWidth,
        "../img/tiefighter.png"
      );
    window.enemies.push(tiefighter);
    body.append(tiefighter.$node);
};

var buildStar = function(){
  var star = new GrowStar(
        randomInRange(25),
        randomInRange(25),
        Math.floor( 32 * Math.random() + 1),
        50, bodyHeight, bodyWidth 
      );
  body.append(star.$node);
};

