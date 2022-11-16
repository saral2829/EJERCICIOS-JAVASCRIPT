// Ejercicio 1: Elaborar un programa que permita ingresar el nombre del trabajador, su sueldo
// básico y el número de hijos, se deberá mostrar su bonificación y el sueldo final. Tenga en
// cuenta que la empresa está dando una bonificación del 7% del sueldo básico sólo en el caso el
// trabajador tuviese hijos.

let nombre, sueldo, hijos,tot,bon;

nombre=prompt("Ingrese Nombre: ");
sueldo=+prompt("Ingrese sueldo: ");
hijos=+prompt("Ingrese número de hijos");



if(hijos>=1){
    bon=sueldo*0.07;
    tot=bon+sueldo;

    alert(nombre+ " RECIBIRÁ UNA BONIFICACIÓN DE S/."+bon+ " "+ "EL SUELDO TOTAL SERÁ DE : S/."+ tot);

}else{
 alert(nombre+"  AL NO TENER HIJOS SU SUELDO ES : S/."+sueldo)
}
