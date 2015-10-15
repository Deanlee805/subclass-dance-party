var makeMovingBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);
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
      left: this.left + 100
    };
  this.$node.css(styleSettings);

  console.log(styleSettings);
  console.log(this.top);

  // this.top = this.top + 100;
  // this.left = this.left + 100;
  // this.$node.css({top: this.top, left: this.left});
};