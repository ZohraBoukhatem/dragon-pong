class Ball {
    constructor() {
        this.positionX = 0
        this.positionY = 700
        this.height = 30
        this.width = 30

        this.ball = document.getElementById("ball")
        this.ball.style.height = this.height + "px"
        this.ball.style.width = this.width + "px"
        this.ball.style.bottom = this.positionY +"px"
        this.ball.style.left = this.positionX + "px"
    }

    move() {
        if (this.positionY > 0) {
            this.positionY -= 30
    } else if (this.positionY = 0) {
            this.positionY += 30
        }



        this.positionX += 50
    

        this.ball.style.bottom = this.positionY + "px"
        this.ball.style.left = this.positionX + "px"
          }
}

const ball = new Ball()

setInterval(() => {
    ball.move()
}, 500)