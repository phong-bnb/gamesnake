class Boom{
    constructor(x,y,width,height){
        this.x=x
        this.y=y
        this.width=width
        this.height=height
        this.canvas=document.getElementById("mycanvas")
        this.ctx=this.canvas.getContext('2d')
    }
    drawBoom(){
        let img = new Image()
        img.onload = ()=>{
            this.ctx.drawImage(img,this.x,this.y,this.width,this.height)
        }
        img.src = './img/bom.png'
    }
}
