var jokeTime = jokeTime || {};

jokeTime.Preload = function() {};

jokeTime.Preload.prototype = {
  preload: function() {
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;

    this.load.image('background', 'assets/Fondo.jpg');
    this.load.spritesheet('marci', 'assets/Marcy_front.png', 50, 114);
    this.load.spritesheet('finn', 'assets/finn-sprite.png', 30, 41);
    this.load.image('tomato', 'assets/boo-button.png');
    this.load.image('cinnamon', 'assets/Applause-button.png');
    this.load.image('banana', 'assets/banana.jpg');
    this.load.image('splash', 'assets/splash.png');

    this.load.image('fila1', 'assets/Fila-1.png');
    this.load.image('fila2', 'assets/Fila-2.png');
    this.load.image('fila3', 'assets/Fila-3.png');
    this.load.image('fila4', 'assets/Fila-4.png');

    this.load.bitmapFont('vcr', 'fonts/vcr_0.png', 'fonts/vcr.xml');
  },
  create: function() {
    //this.state.start('MainMenu');
    this.state.start('Game');
  }
};