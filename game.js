
class Mario {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.canvas = document.getElementById("mycanvas")
        this.ctx = this.canvas.getContext('2d')
        this.drawMario('./img.mario.png')
         setInterval(()=>{ 
            if(this.y<790){
                this.move(this.x,this.y+10,this.tyt)
            }
         },10
         ) 
    }
    drawMario() {
        let img = new Image()
        img.onload = () => {
            this.ctx.drawImage(img, this.x, this.y, this.width, this.height)
        }
        img.src = './img/mario.png'
    }
    move(x, y, tyt) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.x = x
        this.y = y
        this.tyt = tyt
        switch (tyt) {
            case 'trai':
                this.drawMario('./img.trai.png')
                break;
            case 'phai':
                this.drawMario('./img.phai.png')
                break;
            case 'tren':
                this.drawMario('./img.mario.png')
                break;
            default: this.drawMario('./img.mario.png')
                break;
                console.log(tyt);
        }
    }
    
}
let mario = new Mario(10, 10, 70, 70)
window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            mario.move(mario.x - 10, mario.y,'trai')
            break;
        case 'ArrowRight':
            mario.move(mario.x + 10, mario.y,'phai')
            break;
        case 'ArrowUp':
            mario.move(mario.x, mario.y- 150,'tren')
            break;
        default:
            break;
    }
})







