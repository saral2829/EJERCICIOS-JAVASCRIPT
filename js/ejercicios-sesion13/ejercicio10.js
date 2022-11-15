let cant1,cant2,cant3 ;

cant1=+prompt("ENTRADAS GENERAL, INGRESE CANTIDAD:  ");
cant2=+prompt("ENTRADAS PARA MAYORES DE 65, INGRESE CANTIDAD:  ");
cant3=+prompt("ENTRADAS PARA MENORES DE EDAD, INGRESE CANTIDAD:  ");

let gen=cant1*150;
let may=cant2*50;
let men=cant3*80;
let suma= gen+may+men;

alert("RECAUDACIÓN DE ENTRADAS GENERALES: "+gen+ " "+"RECAUDACIÓN PARA MAYORES DE 65 : "+may+ " "+"RECAUDACIÓN DE ENTRADAS MENORES DE EDAD: "+ men+ " "+ "TOTAL RECAUDADO: "+suma );
