var jokeTime = jokeTime || {};

jokeTime.Preload = function() {};

jokeTime.Preload.prototype = {
  preload: function() {
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;

    this.load.image('background', 'assets/vista.jpg');
    this.load.spritesheet('marci', 'assets/marci.png', 50, 121);
    this.load.image('tomato', 'assets/tomato.png');
    this.load.image('banana', 'assets/banana.jpg');
    this.load.image('splash', 'assets/splash.png');

    this.load.bitmapFont('vcr', 'fonts/vcr_0.png', 'fonts/vcr.xml');
  },
  create: function() {
    this.state.start('MainMenu');
  }
};