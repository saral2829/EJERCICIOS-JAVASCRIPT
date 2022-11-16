// Ejercicio 3: Crea una aplicación que pida un número y calcule su factorial (El factorial de un
//     número es el producto de todos los enteros entre 1 y el propio número y se representa por el
//     número seguido de un signo de exclamación. Por ejemplo 5! = 1x2x3x4x5=120)

let num;


num=+prompt("Ingrese número: ");
let tot=1;
if(num!=0){
    for(i=1; i<=num; i++){
        tot=tot*i;
    }
    alert( tot);
}else{
    alert("1");
}
