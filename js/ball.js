class Ball {
    constructor() {
        this.positionX = 0
        this.positionY = 0
        this.height = 30
        this.width = 30

        const ball = document.getElementById("ball")
        ball.style.height = this.height + px
        ball.style.width = this.width + px
        ball.style.bottom = this.positionY +px
        ball.style.left = this.positionX + px
    }

   setInterval() {}

}