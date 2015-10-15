var Tiefighter = function(x, y, z, timeBetweenSteps, docHeight, docWidth) {
  MoveStar.apply(this, arguments);
  this.$node = $('<img class="tiefighter" src="img/tiefighter.png"></img>');
};

Tiefighter.prototype = Object.create(MoveStar.prototype);
Tiefighter.prototype.constructor = Tiefighter;
