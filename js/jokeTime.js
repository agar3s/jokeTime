/*
 * ADVENTURE TIME!
 * no... 
 * its JOKE TIME!
 */

var jokeTime = jokeTime || {};

var player;
var platforms;
var cursors;

var stars;
var score = 0;
var scoreText;


jokeTime.game = new Phaser.Game(380, 640, Phaser.AUTO, 'game');

jokeTime.game.state.add('Boot', jokeTime.Boot);
jokeTime.game.state.add('Preload', jokeTime.Preload);
jokeTime.game.state.add('Preload', jokeTime.Preload);
jokeTime.game.state.add('MainMenu', jokeTime.MainMenu);
jokeTime.game.state.add('Game', jokeTime.Game);

jokeTime.game.state.start('Boot');


jokeTime.gofull = function() {
  if(jokeTime.game.scale.isFullScreen){
    jokeTime.game.scale.stopFullScreen();
  }else{
    jokeTime.game.scale.startFullScreen(false);
    var divgame = document.getElementById('game');
    //divjokeTime.game.children[0].setAttribute('style','width: 100%; height: 100%; background:none')
  }
}

jokeTime.callBanana = function() {
  alert('wiu wiu wiu wiu');
}
