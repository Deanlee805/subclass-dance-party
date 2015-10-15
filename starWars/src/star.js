var Star = function(top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="star"></span>');
 
  this.timeBetweenSteps = timeBetweenSteps;

  this.step();
  
  this.setPosition(top, left);

};

Star.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Star.prototype.setPosition = function(top, left) {

    var styleSettings = {
      top: top,
      left: left
    };

    this.$node.css(styleSettings);
  };
