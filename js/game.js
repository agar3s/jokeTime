var jokeTime = jokeTime || {};

jokeTime.Game = function() {};

jokeTime.Game.prototype = {
  create: function() {
    jokeTime.game.add.sprite(0, 0, 'sky');

    player = jokeTime.game.add.sprite(32, jokeTime.game.world.height - 150, 'dude');

    stars = jokeTime.game.add.group();

    for(var i = 0; i < 12; i++){
      var star = stars.create(i * 70, 0, 'star');
    }

    scoreText = jokeTime.game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

  },

  update: function() {
  }
}