let multipli= function(x,y){
    return x*y
}

let expon = function(x,y){
    return Math.pow(x,y);
}

let suma = function(x,y){
    return x+y;
}

let num1= +prompt("Ingrese primer número: ");
let num2= +prompt("Ingrese Segundo número");

let resta = function(x,y){
    return x-y;
}


var result = multipli(num1,num2);
alert ("MULTIPLICACION: "+result);
result = suma(num1,num2);
alert("SUMA: "+result);

result= resta(num1,num2);
alert("RESTA: "+result);

