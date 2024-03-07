const canvas = document.querySelector('canvas');

const c = canvas.getContext('2d');

//const jump = document.getElementById('jump');

canvas.width = 1024

canvas.height = 576

//console.log(canvas);

const gravity = 1.5

// Player
class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 100
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = 30
        this.height = 30
    }

    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        
        if (this.position.y + this.height + this.velocity.y <= canvas.height)
            this.velocity.y += gravity
        else this.velocity.y = 0
    }
}

// Platform
class Platform {
    constructor({ x, y, image }) {
        this.position = {
            x,
            y
        }
        this.image = image
        this.width = image.width
        this.height = image.height
    }

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
        // c.fillStyle = 'blue'
        // c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

// Background
class WindMill {
    constructor({ x, y, wind }) {
        this.position = {
            x,
            y
        }
        this.image = wind
        this.width = wind.width
        this.height = wind.height

        
    }

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}
class GenericObject {
    constructor({ x, y, background }) {
        this.position = {
            x,
            y
        }
        this.image = background
        this.width = background.width
        this.height = background.height

        
    }

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

//Image adding
const image = new Image()
image.src = './image/platform.png'
const background = new Image()
background.src ='./image/background.png'
const tree = new Image()
tree.src= './image/tree.png'
const wind = new Image()
wind.src= './image/wind.png'

// Bottom platform across map
const player = new Player()
const platforms = [new Platform({ 
    x: 500, 
    y: 510, 
    image }), 
    new Platform({ 
    x: 0, 
    y: 510, 
    image }),
    new Platform({ 
    x: -260, 
    y: 510, 
    image }),
    new Platform({ 
    x: 760, 
    y: 510, 
    image }), 
    new Platform({ 
    x: 1020, 
    y: 510, 
    image })
]

const windMill = [
    new WindMill({
    x: -10,
    y: 50,
    wind
    }),
]

const genericObjects = [
    new GenericObject({
    x: 0,
    y: 0,
    background
    }),
    new GenericObject({
    x: 1023,
    y: 0,
    background
    }),
]


console.log(wind)


const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    }
}

let scrollOffset = 0

function animate() {
    requestAnimationFrame(animate)
    c.fillStyle = 'white'
    c.fillRect(0, 0, canvas.width, canvas.height)

    genericObjects.forEach(genericObjects =>{
        genericObjects.draw()
    })

    platforms.forEach((platform) => {
        platform.draw() 
    })
    
    player.update()

    // Player movement & side scroll 
    if (keys.right.pressed && player.position.x < 500) {
        player.velocity.x = 5
    }
    else if (keys.left.pressed && player.position.x > 300) {
        player.velocity.x = -5
    } 
    else {
        player.velocity.x = 0
        if (keys.right.pressed) {
            scrollOffset += 5
            platforms.forEach((platform) => {
                platform.position.x -= 5
            })
            genericObjects.forEach(genericObjects => {
                genericObjects.position.x -= 3
            })
        }
        else if (keys.left.pressed) {
            scrollOffset -= 5
            platforms.forEach((platform) => {
                platform.position.x += 5
            })
            genericObjects.forEach(genericObjects => {
                genericObjects.position.x += 3
            })
        }
    }

    // Platform collison detection
    platforms.forEach((platform) => {
        if ( 
            player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width
            ) {
            player.velocity.y = 0
        }
    })

    if (scrollOffset > 3000) {
        console.log('You Win')
    }
}

animate()

window.addEventListener('keydown', ({keyCode}) => {
    switch (keyCode) {
        case 65:
            console.log('left')
            keys.left.pressed = true
            break
        case 68:
            console.log('right')
            keys.right.pressed = true
            break
        case 87:
            console.log('up')
            document.getElementById('jump').play()
            player.velocity.y -= 20
            break
        case 83:
            console.log('down')
            break
    }
})

window.addEventListener('keyup', ({keyCode}) => {
    switch (keyCode) {
        case 65:
            console.log('left')
            keys.left.pressed = false
            break
        case 68:
            console.log('right')
            keys.right.pressed = false
            break
        case 87:
            console.log('up')
            player.velocity.y -= 20
            break
        case 83:
            console.log('down')
            break
    }
})



