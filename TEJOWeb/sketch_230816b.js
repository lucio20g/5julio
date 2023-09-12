let jugador1 = 50;
let jugador2 = 50;
let ball = 25;

// Tamaño de la pantalla

let widthWindow = 1325;
let heightWindow = 360;

//x e y jugador 1

let player1X;
let player1Y;

//x e y jugador 2

let player2X;
let player2Y;

//x e y ball 

let ballX;
let ballY;

//estado pelota

let stateBallX;
let stateBallY;


//cronometro

let tiempo;


function setup() {
  
createCanvas(widthWindow,heightWindow);
player1X = jugador1;
player1Y = heightWindow/2;
player2X = widthWindow-jugador2;
player2Y = heightWindow/2;
ballX = widthWindow/2;
ballY = heightWindow/2;
stateBallX = "move_right";
stateBallY = "move_top";

}

function draw() {
  
  background(color('#5404FF'));
  player1();
  player2();
  ball2();
  movePlayers();
  moveBall();
  impactBall();

}

function player1(){
  
//(x e y)y(ancho y alto)

  ellipse(player1X, player1Y, jugador1,jugador1);
  fill(253, 21, 50)

}

function player2() {

  ellipse(player2X,player2Y,jugador2,jugador2);

}

function ball2() {

  ellipse(ballX,ballY,ball,ball);

}

function time() {

tiempo = m();
console.log(tiempo);

}

function movePlayers() {

  //Tecla "A"
  if (keyIsDown(65)) { 
  player1X -= 5;
  
}

//Tecla "D"

if (keyIsDown(68)) {

    player1X += 5;
  
}

//Tecla "W"

if (keyIsDown(87)) {

    player1Y -= 5;
  
}

//Tecla "S"

if (keyIsDown(83)) {

    player1Y += 5;
  
}

//Tecla "flecha izquierda"

if (keyIsDown(LEFT_ARROW)) {

    player2X -= 5;
  
}

//Tecla "flecha derecha"

if (keyIsDown(RIGHT_ARROW)) {

    player2X += 5;
  
}

//Tecla "flecha arriba"

if (keyIsDown(UP_ARROW)) {

  player2Y -= 5;

}

//Tecla "flecha abajo"

if (keyIsDown(DOWN_ARROW)) {

  player2Y += 5;

}

}



function moveBall() {

  switch (stateBallX) {

    case "move_right":

    ballX -= 5; 

    break;

    case "move_left":

    ballX += 5; 

    break;

  }

  switch (stateBallY) {

    case "move_top":

    ballY += 5; 

    break;

    case "move_bottom":

    ballY -= 5; 

    break;

  }

  
  
  //x--------------------------
  
  if (ballX <= 0+(ball/2)) {
  
    stateBallX = "move_left"; 
  
  }
  
  if (ballX >= width-(ball/2)) {
  
    stateBallX = "move_right"; 
  
  }
  
  //y--------------------------
  
  if (ballY <= 0+(ball/2)) {
  
    stateBallY = "move_top"; 
  
  }
  
  if (ballY >= height-(ball/2)) {
  
    stateBallY = "move_bottom"; 
  
  }
}


function impactBall(){

  //impacto pelota con jugador 1

  let impact = dist(player1X,player1Y,ballX,ballY);

  if(impact < (jugador1/2)+(ball/2)){

    switch(stateBallX){


      case "move_left":

      stateBallX = "move_right";

      break;

      case "move_right":

      stateBallX = "move_left";

      break;

    }


    switch(stateBallY){

      case"move_top":

      stateBallY = "move_bottom";

      break;

      case"move_bottom":


      stateBallY = "move_top";

      break;
    }
  }

  //impacto pelota con jugador 2

  let impact2 = dist(player2X,player2Y,ballX,ballY);

  if(impact2 < (jugador2/2)+(ball/2)){

  switch(stateBallX){

    case "move_left":

    stateBallX = "move_right";
    break;

    case "move_right":

    stateBallX = "move_left";

    break;

  }

  switch(stateBallY){

    case"move_top":

    stateBallY = "move_bottom";

    break;

    case"move_bottom":

    stateBallY = "move_top";

    break;

  }

}

}
