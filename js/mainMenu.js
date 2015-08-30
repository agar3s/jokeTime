var jokeTime = jokeTime || {};

jokeTime.MainMenu = function() {};

var bmpText;
jokeTime.MainMenu.prototype = {
  create: function() {
    ost = jokeTime.game.add.audio('ost');
    ost.loop= true;
    ost.play();
    jokeTime.game.add.sprite(0, 0, 'splash');
    jokeTime.game.input.onDown.add(this.start, this);

    bmpText = jokeTime.game.add.bitmapText(0, 100, 'vcr', 'Touch/click to Start', 32);
    bmpText.angle=180;
  },
  update: function(){
    bmpText.tint=bmpText.tint^0XFFFFF;
  },
  start: function(){
    //jokeTime.gofull();
    this.state.start('Game');
  }
};