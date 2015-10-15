var GrowImage = function(x, y, z, timeBetweenSteps, docHeight, docWidth, imgSource) {
  MoveStar.apply(this, arguments);
  this.$node = $('<img class="growImage" src="' + imgSource + '"></img>');
  this.step();
};

GrowImage.prototype = Object.create(MoveStar.prototype);
GrowImage.prototype.constructor = GrowImage;
GrowImage.prototype.step = function(){

  //largest size when closest
  var size = ( (1 - (this.z / 32)) * 100 );
  this.$node.css({height: size, width: size});

  MoveStar.prototype.step.call(this);
}
