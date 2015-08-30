var jokeTime = jokeTime || {};

jokeTime.Game = function() {};

var jokeText = '';

var indexText = -1;

var fila1;
var fila2;
var fila3;
var fila4;

var STATE = {
  INTRO: 0,
  WALKING: 1,
  JOKING: 2,
  END: 3,
  PAUSE: 4,
  CELEBRATING: 5,
  BOOING: 6
}

var state = 0;
var count = 0;

var joker;
var currentSprite;

jokeTime.Game.prototype = {
  create: function() {
    jokeTime.game.add.sprite(0, 0, 'background');

    graphics = jokeTime.game.add.graphics(0, 0);
    graphics.fillAlpha=0.7;
    graphics.beginFill(0xFFFFFF);
    graphics.drawRoundedRect(20, 70, 340, 85, 6);
    //tarima
    graphics.fillAlpha=1;
    graphics.beginFill(0x2d1f09);
    graphics.drawRect(0, 308, 380, 40);
    graphics.beginFill(0x171717);
    graphics.drawRect(0, 348, 380, 40);
    graphics.beginFill(0x6f5327);
    graphics.drawRect(0, 388, 380, 200);
    graphics.beginFill(0x3a2f1d);
    graphics.drawRect(0, 580, 380, 60);

    fila1 = jokeTime.game.add.sprite(0, 380, 'fila1');
    fila2 = jokeTime.game.add.sprite(0, 380, 'fila2');
    fila3 = jokeTime.game.add.sprite(0, 420, 'fila3');
    fila4 = jokeTime.game.add.sprite(0, 460, 'fila4');


    // Aplause!
    tween1 = jokeTime.game.add.tween(fila1).to( { y: 385 }, 100, "Linear", true, 0, -1);
    tween2 = jokeTime.game.add.tween(fila2).to( { y: 385 }, 120, "Linear", true, 10, -1);
    tween3 = jokeTime.game.add.tween(fila3).to( { y: 425 }, 100, "Linear", true, 0, -1);
    tween4 = jokeTime.game.add.tween(fila4).to( { y: 465 }, 120, "Linear", true, 10, -1 );
    tween1.yoyo(true, 0);
    tween2.yoyo(true, 30, 0);
    tween3.yoyo(true, 0);
    tween4.yoyo(true, 30, 0);
    tween1.pause();
    tween2.pause();
    tween3.pause();
    tween4.pause();


    //
    marci = jokeTime.game.add.sprite(66, 220, 'marci');
    marci.animations.add('walk', [0,1,2,1]);
    marci.animations.add('idle', [3]);
    marci.visible = false;

    finn = jokeTime.game.add.sprite(166, 252, 'finn');
    finn.animations.add('walk', [0,1,2,1]);
    finn.animations.add('idle', [3]);
    finn.visible = false;

    jake = jokeTime.game.add.sprite(266, 269, 'jake');
    jake.animations.add('walk', [0,1,2,1]);
    jake.animations.add('idle', [3]);
    jake.visible = false;

    lsp = jokeTime.game.add.sprite(266, 241, 'lsp');
    lsp.animations.add('walk', [0,1,2,1]);
    lsp.animations.add('idle', [3]);
    lsp.visible = false;



    mic = jokeTime.game.add.sprite(200, 255, 'mic');
    tomatos = jokeTime.game.add.group();

    scoreText = jokeTime.game.add.text(16, 16, 'score: 0', { font:'Conv_VCR_OSD_MONO_1.001', fontSize: '64px', fill: '#fff' });

    tomato = jokeTime.game.add.button(249, 550, 'tomato', boo, this, 0);
    clap = jokeTime.game.add.button(49, 550, 'cinnamon', clap, this, 0);
    close = jokeTime.game.add.button(10, 10, 'close', jokeTime.gofull, this, 0);
    banana = jokeTime.game.add.button(300, 10, 'banana', jokeTime.callBanana, this, 0);
    banana.scale.setTo(0.35)
    
    ajoke = jokeTime.game.add.bitmapText(50, 80, 'vcr', '', 16);
    ajoke.maxWidth = 280;
    ajoke.tint = 0;
    ajoke.angle = 180;
    ajoke.text = '';
    nextJoke();
  },

  update: function() {
    if(state==STATE.JOKING){
      updateJoke();
    }else if(state == STATE.PAUSE){
      suspense();
    }
  }
}

function boo(){
  if(state!=STATE.END) return;
  state = STATE.BOOING;
  nextJoke();
};

function clap(){
  if(state!=STATE.END) return;
  state = STATE.CELEBRATING;
  tween1.resume();
  tween2.resume();
  tween3.resume();
  tween4.resume();
  setTimeout(function() {
    tween1.pause();
    tween2.pause();
    tween3.pause();
    tween4.pause();
    nextJoke();
  }, 800);
};

function updateJoke(){
  indexText++;
  if(indexText<jokeText.length){
    ajoke.text+= jokeText[indexText];
  }else{
    state = STATE.END;
    enableButtons();
  }
  if(jokeText[indexText]=='?'){
    state = STATE.PAUSE;
    count = 100;
  }
  if(jokeText[indexText]=='.'){
    state = STATE.PAUSE;
    count = 20;
  }
  if(jokeText[indexText]=='-'){
    state = STATE.PAUSE;
    count = 30;
  }
}


function suspense(){
  count--;
  if(count==0){
    state = STATE.JOKING;
  }
};

function nextJoke(){
  var joke = jokeTime.getJoke();
  jokeText = joke.joke;
  var character = joke.joker;
  disableButtons();
  indexText = -1;
  ajoke.text = '';
  if(character==joker){
    state = STATE.JOKING;
  }else{
    changeCharacters(character);
  }
}

function enableButtons(){
  tomato.tint = 0xffffff;
  clap.tint = 0xffffff;
}

function disableButtons(){
  tomato.tint = 0xcccccc;
  clap.tint = 0xcccccc;
}

function getSprite(character){
  if(character=='marci'){
    currentSprite = marci;
  }else if(character=='finn'){
    currentSprite = finn;
  }else if(character=='jake'){
    currentSprite = jake;
  }else if(character=='lsp'){
    currentSprite = lsp;
  }
}

function enterCharacter(character){

  joker = character;
  getSprite(character);
  currentSprite.visible = true;
  currentSprite.x=-40;
  currentSprite.animations.play('walk', 4, true);
  move = jokeTime.game.add.tween(currentSprite).to({ x: 160 }, 1600, Phaser.Easing.Linear.None, true);
  move.onComplete.add(function(){
    currentSprite.animations.play('idle', 4, false);
    state = STATE.JOKING;
  }, jokeTime.game);

}

function exitCharacter(character, callback){
  if(!joker){
    return callback();
  }
  state = STATE.WALKING;
  ajoke.text = '';
  getSprite(character);
  currentSprite.animations.play('walk', 4, true);
  move = jokeTime.game.add.tween(currentSprite).to({ x: 400 }, 1600, Phaser.Easing.Linear.None, true);
  move.onComplete.add(function(){
    currentSprite.animations.play('idle', 4, false);
    currentSprite.visible = true;
    callback();
  }, jokeTime.game);

}

function changeCharacters(character){
  exitCharacter(joker, function(){
    enterCharacter(character);
  })
}