var jokeTime = jokeTime || {};

jokeTime.Preload = function() {};

jokeTime.Preload.prototype = {
  preload: function() {
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    jokeTime.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;

    this.load.image('background', 'assets/vista.jpg');
    this.load.spritesheet('marci', 'assets/marci.png', 50, 121);
    this.load.image('tomato', 'assets/tomato.png');
  },
  create: function() {
    this.state.start('MainMenu');
  }
};