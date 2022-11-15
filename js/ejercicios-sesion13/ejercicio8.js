// Se debe ingresar un monto de dinero, luego mostrar cuánto le toca a cada
// socio según la siguiente tabla:
// Socio Porcentaje
// A 30%
// B 20%
// C 50%

let monto;
monto=+prompt("Ingrese monto: ")

let socio1= (monto*30)/100;
let socio2=(monto*20)/100;
let socio3=(monto*50)/100;

alert("El monto es: "+ monto +" "+ "PORCENTAJE DE SOCIO 1 (30%): "+socio1+" "+ "  PORCENTAJE DE SOCIO2 (20%)"+ socio2+ "POCENTAJE SOCIO3 (50%) :"+socio3);