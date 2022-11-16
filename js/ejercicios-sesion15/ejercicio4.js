// Digite el importe de una compra, en caso de que el importe
// sea 150 o más, se le descontará el 12%. Mostrar el descuento otorgado
// y el importe de compra final

let compra,desc,tot;

compra=+prompt("INGRESE IMPORTE: ");

if(compra>=150){

    desc=compra*0.12;
    tot= compra-desc;

    alert("FELICIDADES A RECIBIDO UN DESCUENTO: S/."+desc+ " "+ "PAGO FINAL: S/."+tot);
}else{
    alert("PAGO FINAL S/."+compra)
}