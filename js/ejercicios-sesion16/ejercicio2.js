let pasaraFarenheit=(grado)=>{
    return (Farenheit= grado*1.8+32);
}

let pasaraCelcius=(grados)=>{
    return (Celcius= (grados-32)*(5/9));
}

let grad=+prompt("Ingrese grados Farenheit");

var result=pasaraFarenheit(22);
alert(result);
var result=pasaraCelcius(grad);
alert(result);