class Player2 {
    constructor() {
        this.positionX= 1500
        this.positionY= 0
        this.height= 160
        this.width=40
        
        this.player2 = document.getElementById("player2")       

        this.player2.style.height = this.height + "px"
        this.player2.style.width = this.width + "px"
        this.player2.style.bottom = this.positionY + "px"
        this.player2.style.left = this.positionX + "px"
    }

    moveDown() {
        this.positionY -= 30
        this.player2.style.bottom = this.positionY + "px";
    }

    moveUp() {
        this.positionY += 30
        this.player2.style.bottom = this.positionY + "px";
    }
}

const player2 = new Player2()

document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowDown":
            console.log("down")
        player2.moveDown()
        break;
        case "ArrowUp":
            console.log("Up")
        player2.moveUp()
        break;
    }
})
