var Tiefighter = function(x, y, z, timeBetweenSteps, docHeight, docWidth) {
  GrowStar.apply(this, arguments);
  this.$node = $('<img class="tiefighter" src="img/tiefighter.png"></img>');
};

Tiefighter.prototype = Object.create(GrowStar.prototype);
Tiefighter.prototype.constructor = Tiefighter;
