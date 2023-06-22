let posX = -1
let posY = -1
basic.forever(function () {
    for (let index = 0; index < 6; index++) {
        led.plot(posX, posY)
        posX += 1
        posY += 1
        basic.pause(100)
    }
    basic.pause(100)
    for (let index = 0; index < 6; index++) {
        led.toggle(posX, posY)        
        posX += -1
        posY += -1
        basic.pause(100)
    }
})
