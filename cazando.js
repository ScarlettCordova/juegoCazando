let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

let gatoX=0;
let gatoY=0;
let comidaX=0;
let comidaY=0;

const ALTO_GATO=50;
const ANCHO_GATO=50;
const ALTO_COMIDA=30;
const ANCHO_COMIDA=30;

function graficarGato(){
    ctx.fillStyle="black";
    ctx.fillRect(gatoX,gatoY,ANCHO_GATO,ALTO_GATO);//230
}

function graficarComida(){
    ctx.fillStyle="yellow";
    ctx.fillRect(comidaX,comidaY,ANCHO_COMIDA,ALTO_COMIDA);//470
}

function iniciarJuego(){
    gatoX = (canvas.width/2)-(ANCHO_GATO/2);
    gatoY = (canvas.height/2)-(ALTO_GATO/2);
    comidaX= canvas.width-ANCHO_COMIDA
    comidaY= canvas.height-ALTO_COMIDA
    graficarGato();
    graficarComida();
}