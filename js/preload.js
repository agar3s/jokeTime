var jokeTime = jokeTime || {};

jokeTime.Preload = function() {};

jokeTime.Preload.prototype = {
  preload: function() {
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    jokeTime.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;

    this.load.image('sky', 'assets/sky.png');
    this.load.image('ground', 'assets/platform.png');
    this.load.image('star', 'assets/star.png');
    this.load.spritesheet('dude', 'assets/dude.png', 32, 48);
  },
  create: function() {
    this.state.start('MainMenu');
  }
};