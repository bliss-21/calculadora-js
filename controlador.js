
function sumar() {
    controlador();
    estado = ESTADO.SUMAR;
}

function controlador() {    
    
    let valor;
    valor = document.getElementById("screen").value;
    valor = Number.parseFloat(valor)
    
    if(box1 == 0){
        box1 = valor;
    }
    if(box2 == 0) {
        box2 = valor    
    } else {
        //operar()
    }

}

class ESTADO {
    static SUMAR = 1;
    static RESTAR = 2;
    static MULTIPLICAR = 3;
    static DIVIDIR = 4;
}