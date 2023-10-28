class Player1 {
    constructor() {
        this.positionX=0
        this.positionY= 0
        this.height= 160
        this.width=40
        
        this.player1 = document.getElementById("player1")       

        this.player1.style.height = this.height + "px"
        this.player1.style.width = this.width + "px"
        this.player1.style.bottom = this.positionY + "px"
        this.player1.style.left = this.positionX + "px"
    }

    moveDown() {
        this.positionY-= 30
        this.player1.style.bottom = this.positionY + "px";
    }

    moveUp() {
        this.positionY += 30
        this.player1.style.bottom = this.positionY + "px"
    }
}

    const player1 = new Player1()

document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "s":
            console.log("down")
        player1.moveDown()
        break;
        case "w":
            console.log("Up")
        player1.moveUp()
        break;
    }
})