var jokeTime = jokeTime || {};

jokeTime.Boot = function (game) {
};

jokeTime.Boot.prototype.preload = function () {
  this.game.stage.backgroundColor = 0x1D262D;
  
  //Load the image to use for showing the loading process
  this.load.image('loading_progress', 'assets/loading_progress.png');

};

jokeTime.Boot.prototype.create = function () {
  this.stage.disableVisibilityChange = true;

  this.game.antialias = true;
  this.stage.smoothed = true;
  this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  this.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
};

jokeTime.Boot.prototype.update = function () {
  this.state.start('Preload');
};