var jokeTime = jokeTime || {};

var ajokes = [0,1,2,3,4,5,6,7,8,9,10,11,12];

var jokes = {
  '0': {joker:'lsp', joke:'¿Qué le dijo una uva verde a\nuna morada?\n- Respira!'},
  '5': {joker:'lsp', joke:'¿Qué le dice una impresora a\notra?\n- Esa impresión es tuya, o es\nimpresión mia?'},
  '6': {joker:'lsp', joke:'¿Qué le dice un ojo a otro?\n- Tan cerca y no nos vemos.'},
  '1': {joker:'finn', joke:'Había una vez dos perros\nbravos...\ny no se hablaban.'},
  '2': {joker:'finn', joke:'Había una vez... truz.'},
  '7': {joker:'jake', joke:'ya conocen el del duende que\nse corto el pie izquierdo y el\nbrazo izquierdo?\npues ahora estudia derecho!'},
  '4': {joker:'marci', joke:'¿De que raza es el caballo de\nDrácula?\n- Pura sangre.'},
  '10': {joker:'marci', joke:'Cuál es el animal que da más\nvueltas después de morir?\n- El pollo asado.'},
  '8': {joker:'marci', joke:'En una carrera de peces\n¿Cuál es el último en llegar?\n- Pues, el delfín.'},
  '3': {joker:'marci', joke:'¿Qué hace una vaca pensando?\n-Leche concentrada.'},
  '9': {joker:'marci', joke:'Un bananito se puso a jugar\ncartas...\ny lo pelaron.'},
  '11': {joker:'jake', joke:'¿Por qué se suicido el libro\nde matemáticas?\n- Porque tenía muchos problemas.\n- jejeje'},
  '12': {joker:'lsp', joke:'Estos grumos...\nQue quieres besar y abrazar...\nEstos grumos...\nNo puedes porque eres burro...'},
  
}; 

jokeTime.getJoke = function(){
  var index = Math.floor(Math.random()*ajokes.length);
  var val = ajokes.splice(index, 1);
  if(ajokes.length==0){
    ajokes = Object.keys(jokes);
  }
  return jokes[val];
}