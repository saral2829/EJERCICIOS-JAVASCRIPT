let num;
let a;
let b;
let c;
let pot=0;

let suma= 0;

num=+prompt("Ingrese numero de 3 dígitos");

if(num>99 & num<1000){
    a=num % 10;
   
    num=Math.trunc(num/10);

    b=num %10;

    num=Math.trunc(num/10);

    c= num % 10;

    suma= a+b+c

    pot=Math.pow(suma,2);

    alert(" Pimer digito: "+c+ " SEGUNDO DIGITO: "+b+ " TERCER DÍGITO: "+a+"  La SUMA DE DIGITOS : "+suma + " SUMA ELEVADA AL CUADRADO: "+ pot);

}else{
    alert("NO ES DE 3 DIGITOS");
}