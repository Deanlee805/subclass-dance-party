var Star = function(x, y, z, timeBetweenSteps, docHeight, docWidth) {
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="star"></span>');

  this.x = x;
  this.y = y;
  this.z = z;
  this.timeBetweenSteps = timeBetweenSteps;

  this.docHeight = docHeight;
  this.docWidth = docWidth;

  this.timer;

  //register step
  this.step();
  
  this.setPosition();

};

Star.prototype.step = function() {
  this.timer = setTimeout(this.step.bind(this), this.timeBetweenSteps); 
};

Star.prototype.setPosition = function() {

  //some constant
  var k = 128.0 / this.z;
    //projected x and y
  var px = (this.x * k) + (this.docWidth / 2);
  var py = (this.y * k) + (this.docHeight / 2);

    var styleSettings = {
      top: py,
      left: px
    };

  // debugger;
    this.$node.css(styleSettings);
  };

  Star.prototype.remove = function(){
    this.$node.remove();
    clearTimeout(this.timer);
  };
