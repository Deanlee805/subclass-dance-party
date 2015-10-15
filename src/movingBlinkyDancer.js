var makeMovingBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="tiefighter" src="img/tiefighter.png"></img>');
  this.top = top;
  this.left = left;
};

makeMovingBlinkyDancer.prototype = Object.create(makeBlinkyDancer.prototype);
makeMovingBlinkyDancer.prototype.constructor = makeMovingBlinkyDancer;

makeMovingBlinkyDancer.prototype.step = function() {
  makeBlinkyDancer.prototype.step.call(this);

  this.top = this.top + Math.random() * 100;
  this.left = this.left + Math.random() * 100;

  var styleSettings = {
      top: this.top,
      left: this.left,
  };
  this.$node.css(styleSettings);
  //this.$node.css('background-image', 'url(img/tiefighter.png)');
};