// La municipalidad de Pueblo Libre piensa invertir cierto monto de dinero en la reparación de las
// pistas en las avenidas principales. Desarrollar un pseudocódigo que permita ingresar un monto
// de inversión en soles y lo reparta en la refacción de cinco avenidas de la siguiente manera:
// a. Avenida La Mar - 35% del monto
// b. Avenida Abancay - 25% del monto
// c. Avenida 28 de Julio - 10% del monto
// d. Avenida Aviación - 15% del monto
// e. Avenida Tacna - restante del monto


let presupuesto= +prompt("Ingrese presupuesto");

function presupuestoporarea(presupuesto){
    let lamar= (presupuesto*0.35);

    let abanc=(presupuesto*0.25);
    let julio=(presupuesto*0.10);
    let aviacion=(presupuesto*0.15);
    let tacna=(presupuesto*0.15);

    return (" "+"AVENIDA LA MAR: " +lamar+" "+"AVENIDA ABANCAY"+" "+ abanc+" "+"AVENIDA 28 DE JULIO: "+julio+ " "+"AVENIDA AVIACION"+" "+ aviacion+ " "+"AVENIDA TACNA"+" "+ tacna);
}

alert ("PRESUPUESTO: "+ presupuesto+" "+presupuestoporarea(presupuesto));