var jokeTime = jokeTime || {};

jokeTime.MainMenu = function() {};

var bmpText;
jokeTime.MainMenu.prototype = {
  create: function() {
    ost = jokeTime.game.add.audio('ost');
    ost.loop= true;
    ost.play();
    
    jokeTime.game.add.sprite(0, 0, 'splash');
    play = jokeTime.game.add.sprite(23, 503, 'play');
    play.animations.add('glow', [0,1]);
    play.animations.play('glow', 4, true);
    jokeTime.game.input.onDown.add(this.start, this);

    graphics = jokeTime.game.add.graphics(0, 620);
    graphics.fillAlpha=0.7;
    graphics.beginFill(0x000);
    graphics.drawRect(0, 0, 380, 60);
    var credits = jokeTime.game.add.bitmapText(50, 620, 'vcr', 'por @prinfrexita y @agar3s', 18);
    credits.angle = 180;
    credits.tint = 0XFFcccc;
  },
  update: function(){
  },
  start: function(){
    jokeTime.gofull();
    this.state.start('Game');
  }
};