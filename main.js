let mario = new Mario(10, 800, 70, 70)
let boom = new Boom(800, 800, 60, 60)
let bomm = new Boom(700, 800, 60, 60)
let mush = new Mush(800, 70, 70)

window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowLeft':

            mario.move(mario.x - 10, mario.y, 'trai')
            break;
        case 'ArrowRight':
            mario.move(mario.x + 10, mario.y, 'phai')
            break;
        case ' ':
            mario.move(mario.x, mario.y - 200, 'tren')
            break;
            case 'ArrowDown':
                mario.move(mario.x,mario.y=790,'duoi')
        default:
            break;
    }

})

let diem = 0
function update() {

    if (mario.x < mush.x + mush.width && mario.x + mario.width > mush.x && mario.y < mush.y + mush.height && mario.y + mario.height > mush.y) {

        diem++
        mush.x = Math.random() * 800
    }

    if (boom.x < 9) {
        boom.x = 800

    } else {
        boom.x -= 2
    }
    if (mario.x < boom.x + boom.width && mario.x + mario.width > boom.x && mario.y < boom.y + boom.height && mario.y + mario.height > boom.y) {
        diem -= 2
        boom.x = 800
    }
    if (mario.x < mush.x + mush.width && mario.x + mario.width > mush.x && mario.y < mush.y + mush.height && mario.y + mario.height > mush.y) {
        diem-1
       
        bomm.x = Math.random() * 800
    } 
    if (diem <= -1) { 
        mario.ctx.fillText("Bạn đã thua",500,500)
        // clearInterval(set)
        diem = 0

             
     }if(diem === 2){
        mario.ctx.fillText("Bạn đã thắng",500,500)
        clearInterval(set)
     }
     mario.ctx.font="50px Roboto"
     mario.ctx.fillText("Điểm số:"+diem,40,60)
    

     mario.ctx.clearRect(0, 0, mush.canvas.width, mush.canvas.height)
        
    mush.drawMush()
    boom.drawBoom()
    mario.drawMario()
    bomm.drawBoom()
    mario.drawStroke()

}
setInterval(update,10)
function down() {
    if (mario.y < 790) {
        mario.move(mario.x, mario.y + 50, mario.tyt)
    }

}
 var audio = document.querySelector("audio")

 
 let trt = setInterval(down,1000) 
  
