var jokeTime = jokeTime || {};

jokeTime.Game = function() {};

var jokeText = '';

var indexText = -1;

var fila1;
var fila2;
var fila3;
var fila4;

var STATE = {
  JOKING: 0,
  END: 1,
  PAUSE: 2,
  CELEBRATING: 3,
  BOOING: 4
}

var state = 0;
var count = 0;

jokeTime.Game.prototype = {
  create: function() {
    jokeTime.game.add.sprite(0, 0, 'background');

    var graphics = jokeTime.game.add.graphics(0, 0);
    graphics.beginFill(0xFFFFFF);
    graphics.drawRoundedRect(20, 70, 340, 85, 6);
    //tarima
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

    //player = jokeTime.game.add.sprite(166, 220, 'marci');
    finn = jokeTime.game.add.sprite(166, 220, 'finn');
    mic = jokeTime.game.add.sprite(200, 250, 'mic');
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
    jokeText = jokeTime.getJoke().joke;
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
  alert('boooo');
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
  disableButtons();
  indexText = -1;
  jokeText = jokeTime.getJoke().joke;
  ajoke.text = '';
  state = STATE.JOKING;
  console.log('testing');
}

function enableButtons(){
  tomato.tint = 0xffffff;
  clap.tint = 0xffffff;
}

function disableButtons(){
  tomato.tint = 0xcccccc;
  clap.tint = 0xcccccc;
}