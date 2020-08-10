var box1 = 0;
var box2 = 0;
var result = 0;
var estado = 0;

function writeScreen(number) {
    let tmp = document.getElementById("screen").value;
    tmp = tmp+number;
    document.getElementById("screen").value=tmp;
}


function clear() {
    document.getElementById("screen").value =0;
}


//-------------------


function controlador() {    
    
    let valor;
    valor = document.getElementById("screen").value;
    valor = Number.parseFloat(valor)
    
    if(box1 == 0){
        box1 = valor;
    }
    else if(box2 == 0) {
        box2 = valor    
    } else {
        //operar()
    }

}

class ESTADO {
    static NONE = 0;
    static SUMAR = 1;
    static RESTAR = 2;
    static MULTIPLICAR = 3;
    static DIVIDIR = 4;
}

function test() {
    console.log( "box1: " + box1)   
    console.log( "box2: " + box2)
    console.log( "resultado: " + result)
    console.log( "estado: " + estado)
}


function sum() {
    controlador();
    estado = ESTADO.SUMAR;
    clear();
}