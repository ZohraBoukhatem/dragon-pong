class Player1 {
  constructor() {
    this.positionX = 0;
    this.positionY = 0;
    this.height = 160;
    this.width = 55;

    this.player1 = document.getElementById("player1");
    this.player1.style.height = this.height + "px";
    this.player1.style.width = this.width + "px";
    this.player1.style.bottom = this.positionY + "px";
    this.player1.style.left = this.positionX + "px";
  }

  moveDown() {
    this.positionY -= 20;
    this.player1.style.bottom = this.positionY + "px";
  }

  moveUp() {
    this.positionY += 20;
    this.player1.style.bottom = this.positionY + "px";
  }
}
