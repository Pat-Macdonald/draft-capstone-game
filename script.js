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
    constructor({ x, y, platform }) {
        this.position = {
            x,
            y
        }
        this.image = platform
        this.width = platform.width
        this.height = platform.height
    }

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

class MediumPlatform {
    constructor({ x, y, mediumPlatform }) {
        this.position = {
            x,
            y
        }
        this.image = mediumPlatform
        this.width = mediumPlatform.width
        this.height = mediumPlatform.height
    }

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

class SmallPlatform {
    constructor({ x, y, smallPlatform }) {
        this.position = {
            x,
            y
        }
        this.image = smallPlatform
        this.width = smallPlatform.width
        this.height = smallPlatform.height
    }

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
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

class Tree {
    constructor({ x, y, tree }) {
        this.position = {
            x,
            y
        }
        this.image = tree
        this.width = tree.width
        this.height = tree.height

        
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
const platform = new Image()
platform.src = './image/platform.png'
const mediumPlatform = new Image()
mediumPlatform.src = './image/medium-platform.png'
const smallPlatform = new Image()
smallPlatform.src = './image/small-platform.png'
const tree = new Image()
tree.src = './image/tree.png'
const wind = new Image()
wind.src = './image/wind.png'
const background = new Image()
background.src ='./image/background.png'


// Bottom platform across map
const player = new Player()

// Base platform placement
const platforms = [new Platform({ 
    x: -260, 
    y: 510, 
    platform }),
    new Platform({ 
    x: 0, 
    y: 510, 
    platform }),
    new Platform({  
    x: 500, 
    y: 510, 
    platform }), 
    new Platform({ 
    x: 760, 
    y: 510, 
    platform }), 
    new Platform({ 
    x: 1020, 
    y: 510, 
    platform }),
    new Platform({ 
    x: 1700, 
    y: 510, 
    platform }),
    new Platform({ 
    x: 1960, 
    y: 510, 
    platform }),
    new Platform({ 
    x: 2220, 
    y: 510, 
    platform }),
    new Platform({ 
    x: 2480, 
    y: 510, 
    platform }),
    new Platform({ 
    x: 3750, 
    y: 510, 
    platform }),
    new Platform({ 
    x: 4010, 
    y: 510, 
    platform }),
]

//medium platform placements
const mediumPlatforms = [new MediumPlatform({ 
    x: 1100, 
    y: 440, 
    mediumPlatform }),
    new MediumPlatform({ 
    x: 1240, 
    y: 440, 
    mediumPlatform }),
    new MediumPlatform({ 
    x: 3200, 
    y: 510, 
    mediumPlatform }),
]

//small platform placements
const smallPlatforms = [new SmallPlatform({ 
    x: 1300, 
    y: 380, 
    smallPlatform }),
    new SmallPlatform({ 
    x: 3500, 
    y: 510, 
    smallPlatform }),
]

// tree placments
const trees = [
    new Tree({
    x: 550,
    y: 410,
    tree
    }),
    new Tree({
    x: 2150,
    y: 410,
    tree
    }),
    new Tree({
    x: 3190,
    y: 410,
    tree
    }),
]

// wind mill placements
const windMills = [
    new WindMill({
    x: -144,
    y: 70,
    wind
    }),
    new WindMill({
    x: 880,
    y: 70,
    wind
    }),
    new WindMill({
    x: 1903,
    y: 70,
    wind
    }),
    new WindMill({
    x: 2926,
    y: 70,
    wind
    }),
]

//background placments
const genericObjects = [
        new GenericObject({
    x: -1023,
    y: 0,
    background
    }),
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
    new GenericObject({
    x: 2046,
    y: 0,
    background
    }),
    new GenericObject({
    x: 3069,
    y: 0,
    background
    }),
]




// Keys & movement
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

    windMills.forEach(windMills =>{
        windMills.draw()
    })

    trees.forEach(trees =>{
        trees.draw()
    })

    smallPlatforms.forEach(smallPlatforms =>{
        smallPlatforms.draw()
    })

    mediumPlatforms.forEach(mediumPlatforms =>{
        mediumPlatforms.draw()
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
            mediumPlatforms.forEach((mediumPlatform) => {
                mediumPlatform.position.x -= 5
            })
            smallPlatforms.forEach((smallPlatform) => {
                smallPlatform.position.x -= 5
            })
            trees.forEach((trees) => {
                trees.position.x -= 5
            })
            genericObjects.forEach(genericObjects => {
                genericObjects.position.x -= 3
            })
            windMills.forEach(windMills => {
                windMills.position.x -= 3
            })
        }
        else if (keys.left.pressed) {
            scrollOffset -= 5
            platforms.forEach((platform) => {
                platform.position.x += 5
            })
            mediumPlatforms.forEach((mediumPlatform) => {
                mediumPlatform.position.x += 5
            })
            smallPlatforms.forEach((smallPlatform) => {
                smallPlatform.position.x += 5
            })
            trees.forEach((trees) => {
                trees.position.x += 5
            })
            genericObjects.forEach(genericObjects => {
                genericObjects.position.x += 3
            })
            windMills.forEach(windMills => {
                windMills.position.x += 3
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

    mediumPlatforms.forEach((mediumPlatform) => {
        if ( 
            player.position.y + player.height <= mediumPlatform.position.y && player.position.y + player.height + player.velocity.y >= mediumPlatform.position.y && player.position.x + player.width >= mediumPlatform.position.x && player.position.x <= mediumPlatform.position.x + mediumPlatform.width
            ) {
            player.velocity.y = 0
        }
    })

    smallPlatforms.forEach((smallPlatform) => {
        if ( 
            player.position.y + player.height <= smallPlatform.position.y && player.position.y + player.height + player.velocity.y >= smallPlatform.position.y && player.position.x + player.width >= smallPlatform.position.x && player.position.x <= smallPlatform.position.x + smallPlatform.width
            ) {
            player.velocity.y = 0
        }
    })

    if (scrollOffset > 10000) {
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



