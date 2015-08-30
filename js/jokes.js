var jokeTime = jokeTime || {};

var jokes = {
  '0': {joker:'lsp', joke:'¿Qué le dijo una uva verde a\nuna morada?\n- Respira!'},
  '5': {joker:'lsp', joke:'¿Qué le dice una impresora a\notra?\n- Esa impresión es tuya, o es\nimpresión mia?'},
  '6': {joker:'lsp', joke:'¿Qué le dice un ojo a otro?\n- Tan cerca y no nos vemos.'},
  '12': {joker:'lsp', joke:'Estos grumos...\nQue quieres besar y abrazar...\nEstos grumos...\nNo puedes porque eres burro...'},
  '17':{joker:'lsp', joke:'¿Qué le dijo un perro\narrepentido a otro perro?\n- Perroname.'},
  '23': {joker:'lsp', joke:'¿Qué le dice un 4 a un 40?\n- Para ser como yo tienes que\n  ser sin-cero.'},
  
  '1': {joker:'finn', joke:'Había una vez dos perros\nbravos...\ny no se hablaban.'},
  '2': {joker:'finn', joke:'Había una vez... truz.'},
  '25': {joker:'finn', joke:'Había un país tan pobre, \ntan pobre, tan pobre...\nQue el arco iris salía en\nblanco y negro.'},
  '27': {joker:'finn', joke:'Había una vez una ciudad tan\nseca, pero tan seca...\nQue las vacas daban leche\nen polvo.'},
  '28': {joker:'finn', joke:'Había una vez una vaca que\nse comió un vidrio...\ny la leche le salió cortada.'},
  '20': {joker:'finn', joke:'Una señora era tan venenosa,\ntan venenosa, que se mordió la\nlengua...\n¡y se murió!'},
  '30': {joker:'finn', joke:'Había una vez una olla que no\nquería ser olla...\ny fue olla a presión.'},
  
  '7': {joker:'jake', joke:'ya conocen el del duende que\nse corto el pie izquierdo y el\nbrazo izquierdo?\npues ahora estudia derecho!'},
  '11': {joker:'jake', joke:'¿Por qué se suicido el libro\nde matemáticas?\n- Porque tenía muchos problemas.\n- jejeje'},
  '18': {joker:'jake', joke:'¡No jueguen con fuego!...\ny fuego se quedó sin amigos.'},
  '19': {joker:'jake', joke:'¡No pasen por el alto!...\nY el alto nunca llegó.'},
  '21': {joker:'jake', joke:'No es lo mismo un libro de\ntexto...\nque detesto los libros.'},
  '22': {joker:'jake', joke:'Un señor va al doctor y dice:\n- Doctor, estoy lleno de pelos,\n  Dígame qué padezco?\n- Padece un osito.'},
  '31': {joker:'jake', joke:'¿Cómo pasa Superman entre\nla gente?\n- Con Su permiso'},
  
  '4': {joker:'marci', joke:'¿De que raza es el caballo de\nDrácula?\n- Pura sangre.'},
  '10': {joker:'marci', joke:'Cuál es el animal que da más\nvueltas después de morir?\n- El pollo asado.'},
  '8': {joker:'marci', joke:'En una carrera de peces\n¿Cuál es el último en llegar?\n- Pues, el delfín.'},
  '3': {joker:'marci', joke:'¿Qué hace una vaca pensando?\n-Leche concentrada.'},
  '9': {joker:'marci', joke:'Un bananito se puso a jugar\ncartas...\ny lo pelaron.'},
  '24': {joker:'marci', joke:'- ¡Doctor, Doctor, tengo un\n  hueso afuera!\n- Hágalo pasar.'},
  '29': {joker:'marci', joke:'Un huevo se metió a la mafia...\ny lo quebraron.'},
  '26': {joker:'marci', joke:'¿Cuál es el lápiz que mata?\n- Lapistola.'},
  
  '13':{joker:'bp', joke:'¿Cómo se suicidó un atomo?\nSe tiró de un puente de\nhidrógeno!'},
  '14':{joker:'bp', joke:'¿Qué es un oso polar?\nEs un oso rectangular, después\nde un cambio de coordenadas.'},
  '15':{joker:'bp', joke:'Hay 10 clases de personas...\nlas que saben binario,\ny las que no.'},
  '16':{joker:'bp', joke:'¿Cuál es la derivada de la\ntostada?\n- El pan integral.'},
  '38':{joker:'bp', joke:'El venado quería mis caramelos...\npero yo no le di nada.\nSi ustedes me entienden.\n;-) ;-)'},
  '39':{joker:'bp', joke:'¿Qué le dijo un vector a otro?\n- Oye, ¿tienes un momento? '},
  '40':{joker:'bp', joke:'¿Qué le dice la curva a la\ntangente?\n- ¡No me toques!'},
  

  '32': {joker:'iceKing', joke:'¿Cuál es el colmo de una nave?\nQue un astronauta...\nay no así no es...\nEsperen vuelvo a empezar...'},
  '33': {joker:'iceKing', joke:'¿En qué se parece un boxeador a\nun telescopio?\nEn que cuando van a...\n¡GUNTER! ¿Cómo era el chiste?'},
  '34': {joker:'iceKing', joke:'¿Qué le dijo un árbol a otro\nárbol?\n- Respira... No. Eso no era...\n¡GUNTER confundiste los chistes!'},
  '35': {joker:'iceKing', joke:'¿Por qué finn quería ir de\naventura al espacio?\n- ¡porque quería ir al\ninFINNito y más alla!'},
  '36': {joker:'iceKing', joke:'¿Cuál es el animal mas viejo?\nun momentico...\nGunter, \n¿Te volviste reggaetonero?'},

};

var ajokes = Object.keys(jokes);

function getJokesFor(character){
  if(!character) return [];
  var availableJokes = [];
  for (var i = 0; i < ajokes.length; i++) {
    var joke = jokes[ajokes[i]];
    if(joke.joker==character){
      availableJokes.push(ajokes[i]);
    }
  };
  return availableJokes;
}

jokeTime.getJoke = function(character){
  var availableJokes = getJokesFor(character);
  if(availableJokes.length==0){
    availableJokes = ajokes;
  }

  var index = Math.floor(Math.random()*availableJokes.length);
  var value = availableJokes[index];

  ajokes.splice(ajokes.indexOf(value), 1);
  if(ajokes.length==0){
    ajokes = Object.keys(jokes);
  }
  return jokes[value];
}