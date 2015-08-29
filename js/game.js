var jokeTime = jokeTime || {};

jokeTime.Game = function() {};

jokeTime.Game.prototype = {
  create: function() {
    jokeTime.game.add.sprite(0, 0, 'background');

    player = jokeTime.game.add.sprite(166, 220, 'marci');

    tomatos = jokeTime.game.add.group();

    scoreText = jokeTime.game.add.text(16, 16, 'score: 0', { font:'Conv_VCR_OSD_MONO_1.001', fontSize: '32px', fill: '#000' });

    tomato = jokeTime.game.add.button(249, 550, 'tomato', boo, this, 0);
    clap = jokeTime.game.add.button(49, 550, 'aplauso', clap, this, 0);
    close = jokeTime.game.add.button(10, 10, 'close', jokeTime.gofull, this, 0);
    banana = jokeTime.game.add.button(300, 10, 'banana', jokeTime.callBanana, this, 0);

  },

  update: function() {
  }
}

function boo(){
  alert('boooo');
};

function clap(){
  alert('bravo!');
}
