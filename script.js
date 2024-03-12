const canvas = document.querySelector('canvas');

const c = canvas.getContext('2d');

canvas.width = 1024

canvas.height = 576

const gravity = 1.5

let count = 0

let lifeCounts = 9

const coinSound = document.getElementById('coin-sound')

const coinCount = document.getElementById('coin-count')

const lifeCount = document.getElementById('life-count')

function coinCounter() {
    count++
    coinCount.innerText = count
}

function lifeCounter() {
    lifeCounts--
    lifeCount.innerText = lifeCounts
}

console.log(lifeCounts)

if (coinCount >= 1) {
    coinSound.play()
}

const backgroundMusic = document.getElementById('background-music')

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
        this.image = catSitRight
        this.width = 50
        this.height = 50
    }

    draw() {
        //test
        c.drawImage(this.image, this.position.x, this.position.y)
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

class Coin {
    constructor({ x, y, coin }) {
        this.position = {
            x,
            y
        }
        this.image = coin
        this.width = coin.width
        this.height = coin.height
    }

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

class CatNip {
    constructor({ x, y, catNip }) {
        this.position = {
            x,
            y
        }
        this.image = catNip
        this.width = catNip.width
        this.height = catNip.height
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
const catSitRight = new Image()
catSitRight.src = './image/cat-sit-right.png'
const catSitLeft = new Image()
catSitLeft.src = './image/cat-sit-left.png'
const coin = new Image()
coin.src = './image/coin.png'
const catNip = new Image()
catNip.src = './image/cat-nip.png'
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

// cat nip & coin
const player = new Player() 

const playerSpeed = player.velocity.x = 5

const catNips = [new CatNip({
    x: 7440,
    y:170,
    catNip}),
]

const coins = [new Coin({
    x: 800,
    y:470,
    coin}),
    new Coin({
    x: 850,
    y:470,
    coin}),
    new Coin({
    x: 900,
    y:470,
    coin}),
    new Coin({
    x: 950,
    y:470,
    coin}),
    new Coin({
    x: 1160,
    y:400,
    coin}),
    new Coin({
    x: 1210,
    y:400,
    coin}),
    new Coin({
    x: 1330,
    y:330,
    coin}),
    new Coin({
    x: 1900,
    y:400,
    coin}),
    new Coin({
    x: 1950,
    y:400,
    coin}),
    new Coin({
    x: 2000,
    y:400,
    coin}),
    new Coin({
    x: 2050,
    y:400,
    coin}),
    new Coin({
    x: 2870,
    y:470,
    coin}),
    new Coin({
    x: 2920,
    y:470,
    coin}),
    new Coin({
    x: 2970,
    y:470,
    coin}),
    new Coin({
    x: 3210,
    y:470,
    coin}),
    new Coin({
    x: 3260,
    y:470,
    coin}),
    new Coin({
    x: 3310,
    y:470,
    coin}),
    new Coin({
    x: 3920,
    y:330,
    coin}),
    new Coin({
    x: 4100,
    y: 400,
    coin}),
    new Coin({
    x: 4150,
    y: 400,
    coin}),
    new Coin({
    x: 4200,
    y: 400,
    coin}),
    new Coin({
    x: 4740,
    y: 400,
    coin}),
    new Coin({
    x: 4790,
    y: 400,
    coin}),
    new Coin({
    x: 4840,
    y: 400,
    coin}),
    new Coin({
    x: 4890,
    y: 400,
    coin}),
    new Coin({
    x: 4940,
    y: 400,
    coin}),
    new Coin({
    x: 5400,
    y: 400,
    coin}),
    new Coin({
    x: 5450,
    y: 400,
    coin}),
    new Coin({
    x: 5500,
    y: 400,
    coin}),
    new Coin({
    x: 5550,
    y: 400,
    coin}),
    new Coin({
    x: 5600,
    y: 400,
    coin}),
    new Coin({
    x: 6540,
    y: 470,
    coin}),
    new Coin({
    x: 6590,
    y: 470,
    coin}),
    new Coin({
    x: 6850,
    y: 470,
    coin}),
    new Coin({
    x: 6900,
    y: 470,
    coin}),
    new Coin({
    x: 7050,
    y: 400,
    coin}),
    new Coin({
    x: 7100,
    y: 400,
    coin}),
    new Coin({
    x: 7210,
    y: 330,
    coin}),
    new Coin({
    x: 7260,
    y: 330,
    coin}),
    new Coin({
    x: 7300,
    y: 260,
    coin}),
    new Coin({
    x: 7350,
    y: 260,
    coin}),
]

console.log(coins[0])
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
    x: 1500, 
    y: 510, 
    platform }),
    new Platform({ 
    x: 1760, 
    y: 510, 
    platform }),
    new Platform({ 
    x: 2020, 
    y: 510, 
    platform }),
    new Platform({ 
    x: 2280, 
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
    new Platform({ 
    x: 4600, 
    y: 510, 
    platform }),
    new Platform({ 
    x: 4860, 
    y: 510, 
    platform }),
    new Platform({ 
    x: 5120, 
    y: 510, 
    platform }),
    new Platform({ 
    x: 5380, 
    y: 510, 
    platform }),
    new Platform({ 
    x: 5900, 
    y: 510, 
    platform }),
    new Platform({ 
    x: 6800, 
    y: 510, 
    platform }),
    new Platform({ 
    x: 7060, 
    y: 510, 
    platform }),
    new Platform({ 
    x: 7320, 
    y: 510, 
    platform }),
    new Platform({ 
    x: 7580, 
    y: 510, 
    platform }),
    new Platform({ 
    x: 8150,
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
    x: 1800, 
    y: 440, 
    mediumPlatform }),
    new MediumPlatform({ 
    x: 1940, 
    y: 440, 
    mediumPlatform }),
    new MediumPlatform({ 
    x: 2080, 
    y: 440, 
    mediumPlatform }),
    new MediumPlatform({ 
    x: 2220, 
    y: 440, 
    mediumPlatform }),
    new MediumPlatform({ 
    x: 2850, 
    y: 510, 
    mediumPlatform }),
    new MediumPlatform({ 
    x: 3200, 
    y: 510, 
    mediumPlatform }),
    new MediumPlatform({ 
    x: 3860, 
    y: 440, 
    mediumPlatform }),
    new MediumPlatform({ 
    x: 4000, 
    y: 440, 
    mediumPlatform }),
    new MediumPlatform({ 
    x: 4140, 
    y: 440, 
    mediumPlatform }),
    new MediumPlatform({ 
    x: 4700, 
    y: 440, 
    mediumPlatform }),
    new MediumPlatform({ 
    x: 4840, 
    y: 440, 
    mediumPlatform }),
    new MediumPlatform({ 
    x: 5360, 
    y: 440, 
    mediumPlatform }),
    new MediumPlatform({ 
    x: 5500, 
    y: 440, 
    mediumPlatform }),
    new MediumPlatform({ 
    x: 6500, 
    y: 510, 
    mediumPlatform }),
    new MediumPlatform({ 
    x: 7000, 
    y: 440, 
    mediumPlatform }),
    new MediumPlatform({ 
    x: 7140, 
    y: 440, 
    mediumPlatform }),
    new MediumPlatform({ 
    x: 7280, 
    y: 440, 
    mediumPlatform }),
    new MediumPlatform({ 
    x: 7420, 
    y: 440, 
    mediumPlatform }),
    new MediumPlatform({ 
    x: 7560, 
    y: 440, 
    mediumPlatform }),
    new MediumPlatform({ 
    x: 7200, 
    y: 370, 
    mediumPlatform }),
    new MediumPlatform({ 
    x: 7340, 
    y: 370, 
    mediumPlatform }),
    new MediumPlatform({ 
    x: 7480, 
    y: 370, 
    mediumPlatform }),
    new MediumPlatform({ 
    x: 7300, 
    y: 300, 
    mediumPlatform }),
    new MediumPlatform({ 
    x: 7440, 
    y: 300, 
    mediumPlatform }),
    new MediumPlatform({ 
    x: 7380, 
    y: 230, 
    mediumPlatform }),
]

//small platform placements
const smallPlatforms = [new SmallPlatform({ 
    x: 1300, 
    y: 370, 
    smallPlatform }),
    new SmallPlatform({ 
    x: 3500, 
    y: 510, 
    smallPlatform }),
    new SmallPlatform({ 
    x: 3900, 
    y: 370, 
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
    y: 340,
    tree
    }),
    new Tree({
    x: 3190,
    y: 410,
    tree
    }),
    new Tree({
    x: 4100,
    y: 340,
    tree
    }),
    new Tree({
    x: 4760,
    y: 340,
    tree
    }),
    new Tree({
    x: 5420,
    y: 340,
    tree
    }),
    new Tree({
    x: 7000,
    y: 340,
    tree
    }),
    new Tree({
    x: 7800,
    y: 410,
    tree
    }),
]

// wind mill placements
const windMills = [
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
    new WindMill({
    x: 3949,
    y: 70,
    wind
    }),
    new WindMill({
    x: 4972,
    y: 70,
    wind
    }),
]

//background placments
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
    new GenericObject({
    x: 4092,
    y: 0,
    background
    }),
    new GenericObject({
    x: 5115,
    y: 0,
    background
    }),
]


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
    
    coins.forEach((coin) => {
        coin.draw() 
    })

    catNips.forEach((catNip) => {
        catNip.draw() 
    })

    player.update()

    // Player movement & side scroll 
    if (keys.right.pressed && player.position.x < 500) {
        player.velocity.x = playerSpeed
    }
    else if ((keys.left.pressed && player.position.x > 300) || (keys.left.pressed && scrollOffset === -0 && player.position.x > 0)) {
        player.velocity.x = -playerSpeed
    } 
    else {
        player.velocity.x = 0
        if (keys.right.pressed) {
            scrollOffset += 5
            platforms.forEach((platform) => {
                platform.position.x -= playerSpeed
            })
            mediumPlatforms.forEach((mediumPlatform) => {
                mediumPlatform.position.x -= playerSpeed
            })
            smallPlatforms.forEach((smallPlatform) => {
                smallPlatform.position.x -= playerSpeed
            })
            trees.forEach((trees) => {
                trees.position.x -= playerSpeed
            })
            genericObjects.forEach(genericObjects => {
                genericObjects.position.x -= playerSpeed * .66
            })
            windMills.forEach(windMills => {
                windMills.position.x -= playerSpeed * .66
            })
            coins.forEach(coins => {
                coins.position.x -= playerSpeed
            })
            catNips.forEach(catNips => {
                catNips.position.x -= playerSpeed
            })
        }
        else if (keys.left.pressed && scrollOffset > 0) {
            scrollOffset -= 5
            platforms.forEach((platform) => {
                platform.position.x += playerSpeed
            })
            mediumPlatforms.forEach((mediumPlatform) => {
                mediumPlatform.position.x += playerSpeed
            })
            smallPlatforms.forEach((smallPlatform) => {
                smallPlatform.position.x += playerSpeed
            })
            trees.forEach((trees) => {
                trees.position.x += playerSpeed
            })
            genericObjects.forEach(genericObjects => {
                genericObjects.position.x += playerSpeed * .66
            })
            windMills.forEach(windMills => {
                windMills.position.x += playerSpeed * .66
            })
            coins.forEach(coins => {
                coins.position.x += playerSpeed
            })
            catNips.forEach(catNips => {
                catNips.position.x += playerSpeed
            })
        }
    }
    // Coin vanishing
    coins.forEach((coin) => {
        if ( 
            player.position.x + player.height <= coin.position.x && player.position.x + player.height + player.velocity.x >= coin.position.x && player.position.y + player.width >= coin.position.y && player.position.y <= coin.position.y + coin.width
            ) {
            coin.position.y = -50
                if (coin.position.y === -50){
                    console.log("yes")
                    coinCounter()
                }
        }
        else if ( 
            player.position.y + player.height <= coin.position.y && player.position.y + player.height + player.velocity.y >= coin.position.y && player.position.x + player.width >= coin.position.x && player.position.x <= coin.position.x + coin.width
            ) {
            coin.position.y = -50
                if (coin.position.y === -50){
                    console.log("yes")
                    coinCounter()
                }
        }
    })



    //Cat Nip Vanishing and Power Up
    catNips.forEach((catNip) => {
        if ( 
            player.position.x + player.height <= catNip.position.x && player.position.x + player.height + player.velocity.x >= catNip.position.x && player.position.y + player.width >= catNip.position.y && player.position.y <= catNip.position.y + catNip.width
            ) {
                catNip.position.y = -50
            }

        else if ( 
            player.position.y + player.height <= catNip.position.y && player.position.y + player.height + player.velocity.y >= catNip.position.y && player.position.x + player.width >= catNip.position.x && player.position.x <= catNip.position.x + catNip.width
            ) {
            catNip.position.y = -50
        }
    })

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

    // Win condition
    if (scrollOffset > 10000) {
        console.log('You Win')
    }

    // Lose condition
    if (player.position.y > canvas.height) {
        console.log('You Lose')
    }

}

animate()


// keys & movements
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
            player.velocity.y -= 10
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
