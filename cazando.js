let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

let gatoX=0;
let gatoY=0;
let comidaX=0;
let comidaY=0;
let puntaje=0

const ALTO_GATO=50;
const ANCHO_GATO=50;
const ALTO_COMIDA=30;
const ANCHO_COMIDA=30;

function iniciarJuego(){
    gatoX = (canvas.width/2)-(ANCHO_GATO/2);
    gatoY = (canvas.height/2)-(ALTO_GATO/2);
    comidaX= canvas.width-ANCHO_COMIDA
    comidaY= canvas.height-ALTO_COMIDA
    graficarGato();
    graficarComida();
}

function graficarRectangulo(x,y,ancho,alto,color){
    ctx.fillStyle=color;
    ctx.fillRect(x,y,ancho,alto);
}

function graficarGato(){
    graficarRectangulo(gatoX,gatoY,ANCHO_GATO,ALTO_GATO,"black")    
}

function graficarComida(){
    graficarRectangulo(comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA,"yellow")    
}

function moverIzquierda(){
    gatoX=gatoX-10
    limpiarCanva()
    graficarGato()
    graficarComida()
    detectarColision()
}

function moverDerecha(){
    gatoX=gatoX+10
    limpiarCanva()
    graficarGato()
    graficarComida()
    detectarColision()
}

function moverArriba(){
    gatoY=gatoY-10
    limpiarCanva()
    graficarGato()
    graficarComida()
    detectarColision()
}

function moverAbajo(){
    gatoY=gatoY+10
    limpiarCanva()
    graficarGato()
    graficarComida()
    detectarColision()
}

function limpiarCanva(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}

function detectarColision(){
    if(comidaX+ANCHO_COMIDA>gatoX &&
        comidaX<gatoX+ANCHO_GATO && 
        comidaY+ALTO_COMIDA>gatoY &&
        comidaY<gatoY+ALTO_GATO){
    //alert("ATRAPADO!!");
        puntaje=puntaje+1;
        mostrarEnSpan("puntos",puntaje);
    aparecerComida();
    }
}

function aparecerComida(){
    comidaX=generarAleatorio(0,canvas.width-ANCHO_COMIDA);
    comidaY=generarAleatorio(0,canvas.height-ALTO_COMIDA);
    limpiarCanva()
    graficarGato()
    graficarComida()
}