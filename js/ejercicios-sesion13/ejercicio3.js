// Se debe permitir ingresar un valor en metros, luego mostrar su valor en
// centímetros y en milímetros.
// Datos:
// • 1 metro es 100 centímetros.
// • 1 centímetro es 10 milímetros.

let valor;

valor=+prompt("Ingrese valor en metros ");

let cent= valor*100;
let mili= cent*10;

alert( "El valor"+ valor +" "+" en centimetros es" +cent+ ""+ "En milímetros es: "+mili)