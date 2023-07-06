let jugador1 = 50;
let jugador2 = 50;
let ball = 25;
//pantalla
let widthWindow = 300;
let heightWindow = 600;

function setup() {
createCanvas(widthWindow,heightWindow);
}


function draw() {
  background(color('#5404FF'));
  player1();
  player2();
  ball2();
}

function player1(){
  //(x e y)y(ancho y alto)
  ellipse((widthWindow/2),(jugador1/2),jugador1,jugador1);
}

function player2(){
  ellipse((widthWindow/2),(heightWindow-(jugador2/2)),jugador2,jugador2);
}

function ball2(){
  ellipse((widthWindow/2),(heightWindow/2),ball,ball);
}
