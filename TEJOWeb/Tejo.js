let jugador1 = 50;
let jugador2 = 50;
let ball = 25;
//pantalla
let widthWindow = 800;
let heightWindow = 300;
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

//velocidad de la pelota
let velocidadInicial = 4
let velocidadPelotaX = velocidadInicial;
let velocidadPelotaY = velocidadInicial;

//cronometro
let tiempo;


function setup() {
  createCanvas(widthWindow, heightWindow);
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
  background(color('#000000'));
  player1();
  player2();
  ball2();
  movePlayers();
  impactBall();
  limitUsers();
  moveBall();

}

function player1() {

  ellipse(player1X, player1Y, jugador1, jugador1);

    fill(0, 0, 255); 
    stroke(3, 252, 252);
  
    strokeWeight(1); 

}

function player2() {

  ellipse(player2X, player2Y, jugador2, jugador2);
  
  fill(255, 255, 255);
  stroke(255, 255, 255);

  strokeWeight(0);

}

function ball2() {
  
  ellipse(ballX, ballY, ball, ball);
  fill(255, 0, 0);
  stroke(237, 245, 22);

  strokeWeight(1);

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
  // Actualizar la posición de la pelota según la velocidad actual
  ballX += velocidadPelotaX;
  ballY += velocidadPelotaY;

  // Controlar los rebotes en los laterales de la pantalla
  if (ballX <= (ball / 2) || ballX >= widthWindow - (ball / 2)) {
    // Calcular el ángulo de incidencia en relación con la vertical
    let anguloIncidencia = atan2(velocidadPelotaY, velocidadPelotaX);

    // Calcular el ángulo de refracción en relación con la vertical
    let anguloReflexion = PI - anguloIncidencia;

    // Calcular las nuevas componentes de velocidad
    velocidadPelotaX = velocidadInicial * cos(anguloReflexion);
    velocidadPelotaY = velocidadInicial * sin(anguloReflexion);

    // Ajustar la posición para evitar que la pelota quede atrapada en los laterales
    if (ballX <= (ball / 2)) {
      ballX = (ball / 2) + 1;
    } else {
      ballX = widthWindow - (ball / 2) - 1;
    }
  }

  // Controlar los rebotes en la parte superior e inferior de la pantalla
  if (ballY <= (ball / 2) || ballY >= heightWindow - (ball / 2)) {
    // Calcular el ángulo de incidencia en relación con la horizontal
    let anguloIncidencia = atan2(velocidadPelotaY, velocidadPelotaX);

    // Calcular el ángulo de refracción en relación con la horizontal
    let anguloReflexion = -anguloIncidencia;

    // Calcular las nuevas componentes de velocidad
    velocidadPelotaX = velocidadInicial * cos(anguloReflexion);
    velocidadPelotaY = velocidadInicial * sin(anguloReflexion);

    // Ajustar la posición para evitar que la pelota quede atrapada en la parte superior o inferior
    if (ballY <= (ball / 2)) {
      ballY = (ball / 2) + 1;
    } else {
      ballY = heightWindow - (ball / 2) - 1;
    }
  }
}




function impactBall() {
  // Impacto pelota con jugador 1
  let dist1 = dist(player1X, player1Y, ballX, ballY);
  if (dist1 < (jugador1 / 2) + (ball / 2)) {
    // Calcular el ángulo de incidencia en relación con el jugador 1
    let anguloIncidencia = atan2(ballY - player1Y, ballX - player1X);

    // Reflejar la dirección de la pelota respecto al jugador 1
    velocidadPelotaX = velocidadInicial * cos(anguloIncidencia);
    velocidadPelotaY = velocidadInicial * sin(anguloIncidencia);

    // Mover la pelota fuera del jugador 1 para evitar que quede atrapada
    let distanciaAPush = ((jugador1 / 2) + (ball / 2)) - dist1;
    ballX += distanciaAPush * cos(anguloIncidencia);
    ballY += distanciaAPush * sin(anguloIncidencia);
  }

  // Impacto pelota con jugador 2
  let dist2 = dist(player2X, player2Y, ballX, ballY);
  if (dist2 < (jugador2 / 2) + (ball / 2)) {
    // Calcular el ángulo de incidencia en relación con el jugador 2
    let anguloIncidencia = atan2(ballY - player2Y, ballX - player2X);

    // Reflejar la dirección de la pelota respecto al jugador 2
    velocidadPelotaX = velocidadInicial * cos(anguloIncidencia);
    velocidadPelotaY = velocidadInicial * sin(anguloIncidencia);

    // Mover la pelota fuera del jugador 2 para evitar que quede atrapada
    let distanciaAPush = ((jugador2 / 2) + (ball / 2)) - dist2;
    ballX += distanciaAPush * cos(anguloIncidencia);
    ballY += distanciaAPush * sin(anguloIncidencia);
  }
}


//limite de jugador 1 y jugador 2
function limitUsers() {
  if (player1X <= jugador1/2) {
    player1X += 5;
  }
  if (player1X >= widthWindow/2-jugador1/2) {
    player1X -= 5;
  }
  if (player1Y <= jugador1/2) {
    player1Y += 5;
  }
  if (player1Y >= heightWindow-jugador1/2) {
    player1Y -= 5;
  }

  if (player2X <= widthWindow/2+jugador2/2) {
    player2X += 5;
  }

  if (player2X >= widthWindow-jugador2/2) {
    player2X -= 5;
  }

  if (player2Y <= jugador2/2) {
    player2Y += 5;
  }

  if (player2Y >= heightWindow-jugador2/2) {
    player2Y -= 5;
  }
}
