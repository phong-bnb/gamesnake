let mario = new Mario(10, 10, 70, 70)
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
        default:
            break;
    }

})
let diem = 0
function update() {

    if (mario.x < mush.x + mush.width && mario.x + mario.width > mush.x && mario.y < mush.y + mush.height && mario.y + mario.height > mush.y) {

        diem++
        mush.ctx.clearRect(0, 0, mush.canvas.width, mush.canvas.height)
        mush.x = Math.random() * 800
    }

    if (boom.x < 9) {
        boom.x = 800

    } else {
        boom.x -= 2
        boom.ctx.clearRect(0, 0, mush.canvas.width, mush.canvas.height)
    }
    if (mario.x < boom.x + boom.width && mario.x + mario.width > boom.x && mario.y < boom.y + boom.height && mario.y + mario.height > boom.y) {
        diem -= 2
        boom.x = 800
    }
    if (mario.x < mush.x + mush.width && mario.x + mario.width > mush.x && mario.y < mush.y + mush.height && mario.y + mario.height > mush.y) {
        console.log(1);
        diem--
        bomm.ctx.clearRect(0, 0, bomm.canvas.width, bomm.canvas.height)
        bomm.x = Math.random() * 800
    } if (diem <= -1) {
        alert("thua")
        diem = 0
    }
    mush.drawMush()
    boom.drawBoom()
    mario.drawMario()
    bomm.drawBoom()
}
function down() {
    if (mario.y < 790) {
        mario.move(mario.x, mario.y + 20, mario.tyt)
    }

}

setInterval(update, 10)

setInterval(down, 100)
