// Desarrollar un algoritmo que pida el ingreso del precio base de un producto y
// se debe calcular el IGV
// (19% del precio base), luego mostrar el valor del IGV y el precio final del
// producto (precio base más el IGV).

let precio;
let preciogv;

precio=+prompt("Ingrese precio del producto");

const igv=0.19;

preciogv=precio *0.19;

let preciofinal= preciogv+precio;

alert("PRECIO BASE DEL PRODUCTO: "+precio+" "+" VALOR DE IGV"+preciogv+" "+" PRECIO FINAL DEL PRODUCTO: "+ preciofinal);





