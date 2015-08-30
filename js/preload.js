var jokeTime = jokeTime || {};

jokeTime.Preload = function() {};

jokeTime.Preload.prototype = {
  preload: function() {
      var loaderBarHeight = 128;

  //Add the background and progess bar for showing while all assets are loaded
  this.preloadBar = this.game.add.sprite(0, this.game.world.height / 2 - loaderBarHeight / 2, 'loading_progress');
  this.preloadBar.width = this.game.world.width;
  this.preloadBar.height = loaderBarHeight;
  this.load.setPreloadSprite(this.preloadBar);

  //Create the text of Loading...
  this.loadingText = this.game.add.text(0, this.preloadBar.y - 20, 
    "loading", 
    {fill: 'white', font:'18pt Unibody8Pro-Regular'});

  this.loadingText.anchor.set(0.5, 0.5);
  this.loadingText.x = ((this.game.world.width / 2) - (this.loadingText.width / 2)) + 10;
    


    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;

    this.load.image('background', 'assets/Fondo.jpg');
    this.load.spritesheet('marci', 'assets/Marcy_front.png', 50, 114);
    this.load.spritesheet('finn', 'assets/finn-sprite.png', 30, 41);
    this.load.image('tomato', 'assets/boo-button.png');
    this.load.image('cinnamon', 'assets/Applause-button.png');
    this.load.image('banana', 'assets/banana.jpg');
    this.load.image('splash', 'assets/splash.png');
    this.load.image('mic', 'assets/MICROFONO.png');

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