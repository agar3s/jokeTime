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


  },
  update: function(){
  },
  start: function(){
    jokeTime.gofull();
    this.state.start('Game');
  }
};