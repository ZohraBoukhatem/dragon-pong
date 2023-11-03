
const player1 = new Player1();
const player2 = new Player2();
const ball = new Ball();

let player1CanMove = false

//audio
const audio = new Audio("./audio/Background music.mp3")
audio.volume = 0.4
audio.play()
audio.loop=true
const effect = new Audio("./audio/platform collision.wav")
effect.volume = 0.6


//player1 and player2 input
document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowDown":
      if (player2.positionY > 0 && !player1CanMove) {
      player2.moveDown();
      }
      break;
    case "ArrowUp":
      if (player2.positionY < 400 && !player1CanMove) {
      player2.moveUp();
      }
      break;
  }
});

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "s":
      if (player1.positionY > 0 && player1CanMove) {
      player1.moveDown(); }
      break;
    case "w":
      if (player1.positionY < 400 && player1CanMove) {
      player1.moveUp(); 
    }
      break;
  }
});


//freeze player
function freezePlayer(playerNumber) {
  if(playerNumber == 2) {
    player1CanMove = true 
  } else if (playerNumber == 1) {
    player1CanMove = false
  }
}

let intervalIDRight
let intervalIDLeft
let intervalIDDown
let intervalIDUp

//functions for moving the ball; contain intervals that call eachother
function movingRight() {
  intervalIDRight = setInterval(() => {
    ball.moveRight();
    ball.checkCollisionWithXWall()
   if (ball.checkCollisionWithPlayer(player2)) {
    effect.play()
    clearInterval(intervalIDRight)
    movingLeft() 
    freezePlayer(2)
  }
  }, 5);
}

function movingLeft() {
  intervalIDLeft = setInterval(() => {
  ball.moveLeft();
  ball.checkCollisionWithXWall()
  if (ball.checkCollisionWithPlayer(player1)) {
    effect.play()
    clearInterval(intervalIDLeft)
    movingRight()
    freezePlayer(1)
  }
}, 5);
}

function movingDown() {
  intervalIDDown = setInterval(() => {
    const wall = 0
    ball.moveDown();
   if (ball.checkCollisionWithYWall(wall)) {
     clearInterval(intervalIDDown)
    movingUp() 
  }
  }, 5);
}

function movingUp() {
  intervalIDUp = setInterval(() => {
    const wall = 520
    ball.moveUp();
   if (ball.checkCollisionWithYWall(wall)) {
     clearInterval(intervalIDUp)
    movingDown() 
  }
  }, 5);
}


//interval that increases ball speed
let intervalIDSpeed = setInterval(() => {
  ball.increaseSpeed()
},6000);


//starting the game; calling the ball movement functions 
movingRight()

movingDown()
