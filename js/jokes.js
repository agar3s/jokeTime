var jokeTime = jokeTime || {};

var ajokes = [0,1,2,3,4,5,6];

var jokes = {
  '0': {joke:'¿Qué le dijo una uva verde a\nuna morada?\n-Respira!'},
  '1': {joke:'Había una vez dos perros\nbravos...\ny no se hablaban.'},
  '2': {joke:'Había una vez... truz.'},
  '3': {joke:'¿Qué hace una vaca pensando?\n-Leche concentrada.'},
  '4': {joke:'¿De que raza es el caballo de\nDrácula?\n-Pura sangre.'},
  '5': {joke:'¿Qué le dice una impresora a\notra?\n-Esa impresión es tuya, o es\nimpresión mia?'},
  '6': {joke:'¿Qué le dice un ojo a otro?\n-Tan cerca y no nos vemos.'},
  
}; 

jokeTime.getJoke = function(){
  var index = Math.floor(Math.random()*ajokes.length);
  var val = ajokes.splice(index, 1);
  if(ajokes.length==0){
    ajokes = Object.keys(jokes);
  }
  return jokes[val];
}