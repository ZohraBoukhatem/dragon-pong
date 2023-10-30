
const player1 = new Player1();
const player2 = new Player2();
const ball = new Ball();

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowDown":
      if (player2.positionY > 0) {
      player2.moveDown();
      }
      break;
    case "ArrowUp":
      if (player2.positionY < 350) {
      player2.moveUp();
      }
      break;
  }
});


document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "s":
      if (player1.positionY > 0) {
      player1.moveDown(); }
      break;
    case "w":
      if (player1.positionY < 350) {
      player1.moveUp(); 
    }
      break;
  }
});



setInterval(() => {
    ball.moveRight();
   if (ball.checkCollision(player2)) {
    clearInterval()
   }
  }, 5);
  
  
setInterval(() => {
  ball.moveLeft();
  if (ball.checkCollision(player1)) {
    clearInterval()
  }
}, 5);