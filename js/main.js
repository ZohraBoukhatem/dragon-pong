
const player1 = new Player1();
const player2 = new Player2();
const ball = new Ball();
let player1CanMove = false
const audio = new Audio("audio/Background music.mp3")
audio.volume = 0.5
audio.play()
audio.loop=true
const effect = new Audio("audio/platform collision.wav")
effect.volume = 0.8
document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowDown":
      if (player2.positionY > 0 && !player1CanMove) {
      player2.moveDown();
      }
      break;
    case "ArrowUp":
      if (player2.positionY < 350 && !player1CanMove) {
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
      if (player1.positionY < 350 && player1CanMove) {
      player1.moveUp(); 
    }
      break;
  }
});

function freezePlayer(playerNumber) {
  if(playerNumber == 2) {
    player1CanMove = true 
  } else if (playerNumber == 1) {
    player1CanMove = false
  }
}


const intervalID = setInterval(() => {
  ball.increaseSpeed()
},6000);


function movingRight() {
const intervalID = setInterval(() => {
    ball.moveRight();
   if (ball.checkCollision(player2)) {
    clearInterval(intervalID)
    effect.play()
    movingLeft() 
    freezePlayer(2)
  }
  }, 5);
}
  
function movingLeft() {
const intervalID = setInterval(() => {
  ball.moveLeft();
  if (ball.checkCollision(player1)) {
    clearInterval(intervalID)
    effect.play()
    movingRight()
    freezePlayer(1)
  }
}, 5);
}

function movingDown() {
  const intervalID = setInterval(() => {
    const wall = 0
    ball.moveDown();
   if (ball.checkCollisionWithWall(wall)) {
    clearInterval(intervalID)
    movingUp() 
  }
  }, 5);
}

function movingUp() {
  const intervalID = setInterval(() => {
    const wall = 500
    ball.moveUp();
   if (ball.checkCollisionWithWall(wall)) {
    clearInterval(intervalID)
    movingDown() 
  }
  }, 5);
}


movingRight()

movingDown()

