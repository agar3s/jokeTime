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
var claped = false;

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

    fila1 = jokeTime.game.add.sprite(0, 330, 'fila1');
    fila2 = jokeTime.game.add.sprite(0, 320, 'fila2');
    fila3 = jokeTime.game.add.sprite(0, 410, 'fila3');
    fila4 = jokeTime.game.add.sprite(0, 445, 'fila4');


    // Aplause!
    tween1 = jokeTime.game.add.tween(fila1).to( { y: 340 }, 100, "Linear", true, 0, -1);
    tween2 = jokeTime.game.add.tween(fila2).to( { y: 330 }, 120, "Linear", true, 10, -1);
    tween3 = jokeTime.game.add.tween(fila3).to( { y: 420 }, 100, "Linear", true, 0, -1);
    tween4 = jokeTime.game.add.tween(fila4).to( { y: 455 }, 120, "Linear", true, 10, -1 );
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

    jakeLol = jokeTime.game.add.audio('jake-voice');
    marcyLol = jokeTime.game.add.audio('marcy-voice');
    
    lspVoice = jokeTime.game.add.audio('lsp-voice');
    lspVoice.loop = true;
    
    boolameVoice = jokeTime.game.add.audio('boolame-voice');
    bravoVoice = jokeTime.game.add.audio('bravo-voice');

    lsp = jokeTime.game.add.sprite(266, 241, 'lsp');
    lsp.animations.add('walk', [0,1,2,1]);
    lsp.animations.add('idle', [3]);
    lsp.visible = false;


    mic = jokeTime.game.add.sprite(200, 255, 'mic');
    tomatos = jokeTime.game.add.group();

    booButton = jokeTime.game.add.button(230, 530, 'boo', boo, this, 0);
    booButton.animations.add('glow', [0,1]);
    clapButton = jokeTime.game.add.button(30, 530, 'cinnamon', clap, this, 0);
    clapButton.animations.add('glow', [0,1]);
    
    close = jokeTime.game.add.button(10, 10, 'close', jokeTime.gofull, this, 0);
    //banana = jokeTime.game.add.button(120, 550, 'banana', jokeTime.callBanana, this, 0);
    //banana.scale.setTo(0.35)
    
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

function launchTomato(){
  setTimeout(function(){
    var tomato = jokeTime.game.add.sprite(20+(Math.random()*340), 348+(Math.random()*200), 'tomato');
    tomato.angle = jokeTime.game.rnd.angle();
    var launcher = jokeTime.game.add.tween(tomato).to({
      x: currentSprite.x+(Math.random()*currentSprite.width),
      y: currentSprite.y+(Math.random()*currentSprite.height),
      angle: tomato.angle-180
    }, 300, Phaser.Easing.Linear.None, true);
    
    launcher.onComplete.add(function(){
      jokeTime.game.world.remove(tomato);
    });
  }, Math.random()*1000);
}

function boo(){
  console.log(state);
  if(state!=STATE.END) return;
  claped = false;
  disableButtons();
  state = STATE.BOOING;
  boolameVoice.play();
  for (var i = 0; i < 20; i++) {
    launchTomato();
  };
  boolameVoice.onStop.add(function(){
    state = STATE.BOOING;
    nextJoke();
  }, jokeTime.game);
};

function clap(){
  if(state!=STATE.END) return;
  claped = true;
  disableButtons();
  bravoVoice.play();
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
    if(joker=='jake'){
      jakeLol.play();
    }else if(joker=='marci'){
      marcyLol.play();
    }else if(joker=='lsp'){
      lspVoice.stop();
    }
    state = STATE.END;
    enableButtons();
  }
  if(jokeText[indexText]=='?'){
    if(joker=='lsp'){
      lspVoice.stop();
    }
    state = STATE.PAUSE;
    count = 80;
  }
  if(jokeText[indexText]=='.'){
    state = STATE.PAUSE;
    count = 10;
  }
  if(jokeText[indexText]=='-'){
    state = STATE.PAUSE;
    count = 10;
  }
}


function suspense(){
  count--;
  if(count==0){
    state = STATE.JOKING;
    if(joker=='lsp'&&!lspVoice.isPlaying){
      lspVoice.play();
    }
  }
};

function nextJoke(){
  var joke = jokeTime.getJoke(claped?joker:'');
  jokeText = joke.joke;
  var character = joke.joker;
  disableButtons();
  indexText = -1;
  ajoke.text = '';
  if(character==joker){
    state = STATE.JOKING;
    //jakeLol.play();
  }else{
    changeCharacters(character, function(){
      //jakeLol.play();
      if(character=='lsp'){
        lspVoice.play();
      }
    });
  }
}

function enableButtons(){
  booButton.tint = 0xffffff;
  booButton.animations.play('glow', 4, true);
  
  clapButton.tint = 0xffffff;
  clapButton.animations.play('glow', 4, true);
}

function disableButtons(){
  booButton.frame=0;
  booButton.animations.stop();
  booButton.tint = 0xaaaaaa;
  
  clapButton.frame=0;
  clapButton.animations.stop();
  clapButton.tint = 0xaaaaaa;
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

function enterCharacter(character, callback){

  joker = character;
  getSprite(character);
  currentSprite.visible = true;
  currentSprite.x=-40;
  currentSprite.animations.play('walk', 4, true);
  move = jokeTime.game.add.tween(currentSprite).to({ x: 160 }, 1600, Phaser.Easing.Linear.None, true);
  move.onComplete.add(function(){
    currentSprite.animations.play('idle', 4, false);
    state = STATE.JOKING;
    callback();
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
    currentSprite.visible = false;
    callback();
  }, jokeTime.game);

}

function changeCharacters(character, callback){
  exitCharacter(joker, function(){
    enterCharacter(character, callback);
  })
}