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
    
    this.load.spritesheet('marci', 'assets/Marcy-Sprite.png', 55, 113);
    this.load.spritesheet('finn', 'assets/finn-sprite.png', 58, 81);
    this.load.spritesheet('jake', 'assets/Jake-Sprite.png', 50, 64);
    this.load.spritesheet('lsp', 'assets/LSP-Sprint.png', 66, 92);
    this.load.spritesheet('bp', 'assets/BP-Sprite.png', 50, 122);
    this.load.spritesheet('iceKing', 'assets/IceKing-Sprite.png', 106, 105);
    this.load.spritesheet('boo', 'assets/boo-button.png', 120, 108);
    this.load.spritesheet('cinnamon', 'assets/Applause-button.png', 120, 108);
    this.load.spritesheet('play', 'assets/jugar-boton.png', 334, 114);

    this.load.audio('ost', 'assets/Soundtrack.mp3');

    this.load.audio('jake-voice', 'assets/Jake-voice.mp3');
    this.load.audio('lsp-voice', 'assets/LSP-voice.mp3');
    this.load.audio('marcy-voice', 'assets/Marcy-haha.mp3');
    this.load.audio('boolame-voice', 'assets/boo.mp3');
    this.load.audio('bravo-voice', 'assets/Bravo.mp3');

    this.load.image('tomato', 'assets/tomato.png');
    this.load.image('fullscreen', 'assets/fullscreen.png');
    //this.load.image('banana', 'assets/banana.jpg');
    this.load.image('splash', 'assets/portada.png');
    this.load.image('mic', 'assets/MICROFONO.png');

    this.load.image('fila1', 'assets/Fila-1.png');
    this.load.image('fila2', 'assets/Fila-2.png');
    this.load.image('fila3', 'assets/Fila-3.png');
    this.load.image('fila4', 'assets/Fila-4.png');

    this.load.bitmapFont('vcr', 'fonts/vcr_0.png', 'fonts/vcr.xml');
  },
  create: function() {
    this.state.start('MainMenu');
    //this.state.start('Game');
  }
};