class Ball {
  constructor() {
    this.positionX = 0;
    this.positionY = 50
    this.height = 28;
    this.width = 28;

    this.ball = document.getElementById("ball");
    this.ball.style.height = this.height + "px";
    this.ball.style.width = this.width + "px";
    this.ball.style.bottom = this.positionY + "px";
    this.ball.style.left = this.positionX + "px";
  }

  
  moveRight() {
    this.positionX++ 
    this.ball.style.left = this.positionX + "px";
  if (ball.positionX == 1035) {
   location.href = "./gameover1.html"; }
    }

  moveLeft() {
    this.positionX--
    this.ball.style.left = this.positionX + "px"
    
  if (ball.positionX == 0) {
  location.href = "./gameover2.html"; }
  }

  checkCollision(player) {
    
    if (
      player.positionX < ball.positionX + ball.width &&
      player.positionX + player.width > ball.positionX &&
      player.positionY < ball.positionY + ball.height &&
      player.positionY + player.height > ball.positionY
  ) {
    return true
  }

  }
}
