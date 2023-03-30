
class Mario {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.canvas = document.getElementById("mycanvas")
        this.ctx = this.canvas.getContext('2d')
    
    }
    drawMario(src) {
        let img = new Image()
        img.onload = () => {
            this.ctx.drawImage(img, this.x, this.y, this.width, this.height)
        }
        img.src = src ? src : './img/mario.png'
    }
    move(x, y, tyt) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.x = x
        this.y = y
        this.tyt = tyt
        // switch (tyt) {
        //     case 'trai':
        //         this.drawMario('./img/trai.png')
        //         break;
        //     case 'phai':
        //         this.drawMario('./img/phai.png')
        //         break;
        //     case 'tren':
        //         this.drawMario('')
        //         break;
        //     default: this.drawMario('./img/mario.png')
        //         break;
              
        // }
    }
    
}








