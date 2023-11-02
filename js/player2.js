class Player2 {
  constructor() {
    this.positionX = 1095;
    this.positionY = 0;
    this.height = 160;
    this.width = 55;

    this.player2 = document.getElementById("player2");
    this.player2.style.height = this.height + "px";
    this.player2.style.width = this.width + "px";
    this.player2.style.bottom = this.positionY + "px";
    this.player2.style.left = this.positionX + "px";
  }

  moveDown() {
    this.positionY -= 20;
    this.player2.style.bottom = this.positionY + "px";
  }

  moveUp() {
    this.positionY += 20;
    this.player2.style.bottom = this.positionY + "px";
  }
}
