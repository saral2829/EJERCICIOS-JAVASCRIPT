let mujeres,hombres,total;
let pormuj;
let porhom;
  

mujeres=+prompt("Ingrese cantidad de mujeres en el aula: ");
hombres=+prompt("Ingrese cantidad de hombres en el aula: ");

total= mujeres+hombres;
pormuj= (mujeres/total)*100;
porhom= (hombres/total)*100;

document.write("<H2>PORCENTAJE DE MUJERES: </H2>");
document.write(pormuj);
document.write("<H2>PORCENTAJE DE HOMBRES: </H2>");
document.write(porhom);