var GrowImage = function(x, y, z, timeBetweenSteps, docHeight, docWidth, imgSource) {
  MoveStar.apply(this, arguments);
  this.$node = $('<img draggable="false" class="growImage" src="' + imgSource + '"></img>');
  
  this.step();

};

GrowImage.prototype = Object.create(MoveStar.prototype);
GrowImage.prototype.constructor = GrowImage;
GrowImage.prototype.step = function(){

  //largest size when closest
  var size = ( (1 - (this.z / 32)) * 100 );
  this.$node.css({height: size, width: size});

  if(this.x > 0){
    this.$node.addClass('growImage-right');
  } else {
    this.$node.removeClass('growImage-right');
  }

  if(this.z <= 0){
    $('body').trigger('attack');
  }

  MoveStar.prototype.step.call(this);
}
