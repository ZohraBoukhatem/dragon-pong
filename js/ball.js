class Ball {
  constructor() {
    this.positionX = 0;
    this.positionY = 490;
    this.height = 28;
    this.width = 28;
    this.speed = 1;

    this.ball = document.getElementById("ball");
    this.ball.style.height = this.height + "px";
    this.ball.style.width = this.width + "px";
    this.ball.style.bottom = this.positionY + "px";
    this.ball.style.left = this.positionX + "px";
  }

  increaseSpeed() {
    this.speed += 0.5;
  }

  moveRight() {
    this.positionX += this.speed;
    this.ball.style.left = this.positionX + "px";
  }

  moveLeft() {
    this.positionX -= this.speed;
    this.ball.style.left = this.positionX + "px";
  }

  moveUp() {
    this.positionY++;
    this.ball.style.bottom = this.positionY + "px";
  }

  moveDown() {
    this.positionY--;
    this.ball.style.bottom = this.positionY + "px";
  }

  checkCollisionWithPlayer(player) {
    if (
      player.positionX < ball.positionX + ball.width &&
      player.positionX + player.width > ball.positionX &&
      player.positionY < ball.positionY + ball.height &&
      player.positionY + player.height > ball.positionY
    ) {
      return true;
    }
  }

  checkCollisionWithYWall(wall) {
    if (ball.positionY == wall) {
      return true;
    }
  }

  checkCollisionWithXWall() {
    if (this.positionX >= 1130) {
      clearInterval(intervalIDSpeed)
      clearInterval(intervalIDLeft)
      clearInterval(intervalIDRight)
      clearInterval(intervalIDDown)
      clearInterval(intervalIDUp)
       location.href = "./gameover1.html";
    } else if (this.positionX <= 0) {
      clearInterval(intervalIDSpeed)
      clearInterval(intervalIDLeft)
      clearInterval(intervalIDRight)
      clearInterval(intervalIDDown)
      clearInterval(intervalIDUp)
       location.href = "./gameover2.html"
    }
  }
}