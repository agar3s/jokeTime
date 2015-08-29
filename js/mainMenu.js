var jokeTime = jokeTime || {};

jokeTime.MainMenu = function() {};

jokeTime.MainMenu.prototype = {
  create: function() {
    this.game.stage.backgroundColor = '#ccc';
    jokeTime.game.input.onDown.add(this.start, this);
  },
  start: function(){
    jokeTime.gofull();
    this.state.start('Game');
  }
};