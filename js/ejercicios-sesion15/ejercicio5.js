// Ingrese el nombre de un alumno y las notas de su examen
// parcial, examen final y el promedio de prácticas; muestre el nombre del
// alumno y su promedio final solo si el alumno está aprobado. Tenga en
// cuenta que para el cálculo del promedio la nota del examen final tiene
// peso doble.

let nombre, parcial, final, pract,prom;

nombre=prompt("Ingrese su Nombre: ");
parcial=+prompt("Ingrese nota de examen Parcial: ");
final=+prompt("Ingrese nota de examen Final: ");
pract=+prompt("Ingrese promedio de prácticas: ");

prom=(parcial+final+final+pract)/4

if(prom>=11){
    alert("FELICIDADES " + nombre+" , ESTÁ APROBADO CON : "+prom);
}else{
    alert("USTED ESTÁ DESAPROBADO");
}