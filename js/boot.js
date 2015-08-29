var jokeTime = jokeTime || {};

jokeTime.Boot = function (game) {
};

jokeTime.Boot.prototype.preload = function () {
  this.game.stage.backgroundColor = 0x1D262D;
  
  //Load the image to use for showing the loading process
  this.load.image('loading_progress', 'assets/loading_progress.png');

};

jokeTime.Boot.prototype.create = function () {
  this.input.maxPointers = 1;
  this.stage.disableVisibilityChange = true;

  this.game.antialias = true;
  this.stage.smoothed = true;
  this.scale.pageAlignHorizontally = true;
  this.scale.pageAlignVertically = true;
  this.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
  this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  this.scale.setScreenSize();

  if (!this.game.device.desktop) {
    this.scale.setMinMax(320, 480, 800, 600);
    this.scale.refresh();
  }

};

jokeTime.Boot.prototype.update = function () {
  this.state.start('Preload');
};