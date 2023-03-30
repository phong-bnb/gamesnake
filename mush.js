class Mush {
    constructor(y, width, height) {
        this.x = Math.random() * 800;
        this.y = y;
        this.width = width;
        this.height = height;
        this.canvas = document.getElementById("mycanvas")
        this.ctx = this.canvas.getContext('2d')
        this.drawMush('./img.namngu.png')
    }
    drawMush() {
        let img = new Image()
        img.onload = () => {
            this.ctx.drawImage(img, this.x, this.y, this.width, this.height)
        }
        img.src = './img/namngu.png'
    }
 }
