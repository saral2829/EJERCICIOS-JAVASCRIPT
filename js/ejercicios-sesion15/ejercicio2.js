// Ejercicio 2: Construir un programa que permita ingresar un número, si el número es mayor de
// 500, se debe calcular y mostrar en pantalla el 18% de este.

let num,inc,tot;

num=+prompt("Ingrese un número mayor a 500");


if(num>499 & num<600){

inc=num*0.18;
tot=num+inc;
alert("El 18% de "+num+ " es "+tot);

}else{
    alert("El número ingresado es inválido")
}