class Mush {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.canvas = document.getElementById("mycanvas")
        this.ctx = this.canvas.getContext('2d')
    }
        drawMush() {
            let img1 = new Image()
            img1.onload = () => {
                this.ctx.drawImage(img1, this.x, this.y, this.width, this.height)
            }
            img1.src = './img/namngu.png'
        }
}

let mush = new Mush(20,20,60,60)
mush.drawMush('./img/namngu.png')