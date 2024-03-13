const canvas = document.querySelector('canvas');

const c = canvas.getContext('2d');

canvas.width = 1024

canvas.height = 576



const gravity = 1.5

let count = 0

let lifeCounts = 9

let catNipCounts = 0

const coinSound = document.getElementById('coin-sound')

const coinCount = document.getElementById('coin-count')

const lifeCount = document.getElementById('life-count')

const catNipCount = document.getElementById('cat-nip-count')

function coinCounter() {
    count++
    coinCount.innerText = count
    coinSound.play()
}

coinCount.innerText = count

function lifeCounter() {
    lifeCounts--
}
lifeCount.innerText = lifeCounts

function catNipCounter() {
    catNipCounts++
    catNipCount.innerText = catNipCounts
}

catNipCount.innerText = catNipCounts

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

class Cloud {
    constructor({ x, y, cloud }) {
        this.position = {
            x,
            y
        }
        this.image = cloud
        this.width = cloud.width
        this.height = cloud.height
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
const cloud = new Image()
cloud.src = './image/cloud.png'
const tree = new Image()
tree.src = './image/tree.png'
const wind = new Image()
wind.src = './image/wind.png'
const background = new Image()
background.src ='./image/background.png'


const player = new Player() 

let playerSpeed = player.velocity.x = 20

function powerUp() {
    let newPlayerSpeed = playerSpeed * 2
    playerSpeed = newPlayerSpeed
    window.addEventListener('keydown', ({keyCode}) => {
        switch (keyCode) {
        case 87:
                console.log('up')
                document.getElementById('jump').play()
                player.velocity.y = -25
        }
    })
    setTimeout(powerDown, 5000)
}

function powerDown() {
    let newPowerDown = playerSpeed / 2
    playerSpeed = newPowerDown 
    window.addEventListener('keydown', ({keyCode}) => {
        switch (keyCode) {
        case 87:
                console.log('up')
                document.getElementById('jump').play()
                player.velocity.y = -20
        }
    })
}

//catnip placement
const catNips = [
    new CatNip({
    x: 200,
    y: 400,
    catNip}),
    new CatNip({
    x: 3905,
    y: 320,
    catNip}),
    new CatNip({
    x: 7440,
    y:170,
    catNip}),
]

//coin placements
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
    y:350,
    coin}),
    new Coin({
    x: 2000,
    y:400,
    coin}),
    new Coin({
    x: 2050,
    y:350,
    coin}),
    new Coin({
    x: 2100,
    y:400,
    coin}),
    new Coin({
    x: 2150,
    y:350,
    coin}),
    new Coin({
    x: 2200,
    y:400,
    coin}),
    //
    new Coin({
    x: 2970,
    y:470,
    coin}),
    new Coin({
    x: 2970,
    y:370,
    coin}),
    new Coin({
    x: 3020,
    y:420,
    coin}),
    new Coin({
    x: 3070,
    y:470,
    coin}),
    new Coin({
    x: 3070,
    y:370,
    coin}),
    new Coin({
    x: 3120,
    y:420,
    coin}),
    new Coin({
    x: 3170,
    y:470,
    coin}),
    new Coin({
    x: 3170,
    y:370,
    coin}),
    new Coin({
    x: 3220,
    y:420,
    coin}),
    new Coin({
    x: 3270,
    y:470,
    coin}),
    new Coin({
    x: 3270,
    y:370,
    coin}),
    new Coin({
    x: 3320,
    y:420,
    coin}),
    new Coin({
    x: 3370,
    y:470,
    coin}),
    new Coin({
    x: 3370,
    y:370,
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
    // heart layer 1
    new Coin({
    x: 5170,
    y: 470,
    coin}),
    //heart layer 2
    new Coin({
    x: 5120,
    y: 420,
    coin}),
    new Coin({
    x: 5170,
    y: 420,
    coin}),
    new Coin({
    x: 5220,
    y: 420,
    coin}),
    //heart layer 3
    new Coin({
    x: 5070,
    y: 370,
    coin}),
    new Coin({
    x: 5120,
    y: 370,
    coin}),
    new Coin({
    x: 5170,
    y: 370,
    coin}),
    new Coin({
    x: 5220,
    y: 370,
    coin}),
    new Coin({
    x: 5270,
    y: 370,
    coin}),
    //heart layer 4
    new Coin({
    x: 5020,
    y: 320,
    coin}),
    new Coin({
    x: 5070,
    y: 320,
    coin}),
    new Coin({
    x: 5120,
    y: 320,
    coin}),
    new Coin({
    x: 5170,
    y: 320,
    coin}),
    new Coin({
    x: 5220,
    y: 320,
    coin}),
    new Coin({
    x: 5270,
    y: 320,
    coin}),
    new Coin({
    x: 5320,
    y: 320,
    coin}),
    //heart layer 5
    new Coin({
    x: 5020,
    y: 270,
    coin}),
    new Coin({
    x: 5070,
    y: 270,
    coin}),
    new Coin({
    x: 5120,
    y: 270,
    coin}),
    new Coin({
    x: 5170,
    y: 270,
    coin}),
    new Coin({
    x: 5220,
    y: 270,
    coin}),
    new Coin({
    x: 5270,
    y: 270,
    coin}),
    new Coin({
    x: 5320,
    y: 270,
    coin}),
    //heart layer 6
    new Coin({
    x: 5070,
    y: 220,
    coin}),
    new Coin({
    x: 5120,
    y: 220,
    coin}),
    new Coin({
    x: 5220,
    y: 220,
    coin}),
    new Coin({
    x: 5270,
    y: 220,
    coin}),
    //heart end
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
    new Coin({
    x: 8000,
    y: 100,
    coin}),
    new Coin({
    x: 8050,
    y: 50,
    coin}),
    new Coin({
    x: 8100,
    y: 100,
    coin}),
    new Coin({
    x: 8150,
    y: 50,
    coin}),
    new Coin({
    x: 8200,
    y: 100,
    coin}),
    new Coin({
    x: 8250,
    y: 50,
    coin}),
    new Coin({
    x: 8300,
    y: 100,
    coin}),
    //meow start (M)
    new Coin({
    x: 8900,
    y: 350,
    coin}),
    new Coin({
    x: 8900,
    y: 300,
    coin}),
    new Coin({
    x: 8900,
    y: 250,
    coin}),
    new Coin({
    x: 8900,
    y: 200,
    coin}),
    new Coin({
    x: 8900,
    y: 150,
    coin}),
    new Coin({
    x: 8950,
    y: 200,
    coin}),
    new Coin({
    x: 9000,
    y: 250,
    coin}),
    new Coin({
    x: 9050,
    y: 200,
    coin}),
    new Coin({
    x: 9100,
    y: 350,
    coin}),
    new Coin({
    x: 9100,
    y: 300,
    coin}),
    new Coin({
    x: 9100,
    y: 250,
    coin}),
    new Coin({
    x: 9100,
    y: 200,
    coin}),
    new Coin({
    x: 9100,
    y: 150,
    coin}),
    //(E)
    new Coin({
    x: 9200,
    y: 350,
    coin}),
    new Coin({
    x: 9200,
    y: 300,
    coin}),
    new Coin({
    x: 9200,
    y: 250,
    coin}),
    new Coin({
    x: 9200,
    y: 200,
    coin}),
    new Coin({
    x: 9200,
    y: 150,
    coin}),
    new Coin({
    x: 9250,
    y: 350,
    coin}),
    new Coin({
    x: 9250,
    y: 250,
    coin}),
    new Coin({
    x: 9250,
    y: 150,
    coin}),
    new Coin({
    x: 9300,
    y: 350,
    coin}),
    new Coin({
    x: 9300,
    y: 250,
    coin}),
    new Coin({
    x: 9300,
    y: 150,
    coin}),
    new Coin({
    x: 9350,
    y: 350,
    coin}),
    new Coin({
    x: 9350,
    y: 150,
    coin}),
    new Coin({
    x: 9400,
    y: 350,
    coin}),
    new Coin({
    x: 9400,
    y: 150,
    coin}),
    //(O)
    new Coin({
    x: 9500,
    y: 300,
    coin}),
    new Coin({
    x: 9500,
    y: 250,
    coin}),
    new Coin({
    x: 9500,
    y: 200,
    coin}),
    new Coin({
    x: 9550,
    y: 350,
    coin}),
    new Coin({
    x: 9550,
    y: 150,
    coin}),
    new Coin({
    x: 9600,
    y: 350,
    coin}),
    new Coin({
    x: 9600,
    y: 150,
    coin}),
    new Coin({
    x: 9650,
    y: 350,
    coin}),
    new Coin({
    x: 9650,
    y: 150,
    coin}),
    new Coin({
    x: 9700,
    y: 300,
    coin}),
    new Coin({
    x: 9700,
    y: 250,
    coin}),
    new Coin({
    x: 9700,
    y: 200,
    coin}),
    //(W)
    new Coin({
    x: 9800,
    y: 350,
    coin}),
    new Coin({
    x: 9800,
    y: 300,
    coin}),
    new Coin({
    x: 9800,
    y: 250,
    coin}),
    new Coin({
    x: 9800,
    y: 200,
    coin}),
    new Coin({
    x: 9800,
    y: 150,
    coin}),
    new Coin({
    x: 9850,
    y: 300,
    coin}),
    new Coin({
    x: 9900,
    y: 250,
    coin}),
    new Coin({
    x: 9950,
    y: 300,
    coin}),
    new Coin({
    x: 10000,
    y: 350,
    coin}),
    new Coin({
    x: 10000,
    y: 300,
    coin}),
    new Coin({
    x: 10000,
    y: 250,
    coin}),
    new Coin({
    x: 10000,
    y: 200,
    coin}),
    new Coin({
    x: 10000,
    y: 150,
    coin}),
]

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
    x: 2800, 
    y: 510, 
    platform }),
    new Platform({ 
    x: 3060, 
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
    x: 10500, 
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
    x: 6480, 
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
    x: 3550, 
    y: 510, 
    smallPlatform }),
    new SmallPlatform({ 
    x: 3900, 
    y: 370, 
    smallPlatform }),
    new SmallPlatform({ 
    x: 11000,
    y: 510, 
    smallPlatform }),
    new SmallPlatform({ 
    x: 11200,
    y: 510, 
    smallPlatform }),
]

//cloud placement
const clouds = [
    new Cloud({
    x: 7700,
    y: 200,
    cloud
    }),
    new Cloud({
    x: 7800,
    y: 200,
    cloud
    }),
    new Cloud({
    x: 7900,
    y: 150,
    cloud
    }),
    new Cloud({
    x: 8000,
    y: 150,
    cloud
    }),
    new Cloud({
    x: 8100,
    y: 150,
    cloud
    }),
    new Cloud({
    x: 8200,
    y: 150,
    cloud
    }),
    new Cloud({
    x: 8300,
    y: 150,
    cloud
    }),
    new Cloud({
    x: 8600,
    y: 300,
    cloud
    }),
    new Cloud({
    x: 8700,
    y: 300,
    cloud
    }),
    new Cloud({
    x: 8800,
    y: 400,
    cloud
    }),
    new Cloud({
    x: 8900,
    y: 400,
    cloud
    }),
    new Cloud({
    x: 9000,
    y: 400,
    cloud
    }),
    new Cloud({
    x: 9100,
    y: 400,
    cloud
    }),
    new Cloud({
    x: 9200,
    y: 400,
    cloud
    }),
    new Cloud({
    x: 9300,
    y: 400,
    cloud
    }),
    new Cloud({
    x: 9400,
    y: 400,
    cloud
    }),
    new Cloud({
    x: 9500,
    y: 400,
    cloud
    }),
    new Cloud({
    x: 9600,
    y: 400,
    cloud
    }),
    new Cloud({
    x: 9700,
    y: 400,
    cloud
    }),
    new Cloud({
    x: 9800,
    y: 400,
    cloud
    }),
    new Cloud({
    x: 9900,
    y: 400,
    cloud
    }),
    new Cloud({
    x: 10000,
    y: 400,
    cloud
    }),
    new Cloud({
    x: 10250,
    y: 450,
    cloud
    }),
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
    new Tree({
    x: 10600,
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
    new WindMill({
    x: 5995,
    y: 70,
    wind
    }),
    new WindMill({
    x: 7018,
    y: 70,
    wind
    }),
    new WindMill({
    x: 8041,
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
    new GenericObject({
    x: 6138,
    y: 0,
    background
    }),
    new GenericObject({
    x: 7161,
    y: 0,
    background
    }),
    new GenericObject({
    x: 8184,
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

    clouds.forEach(cloud =>{
        cloud.draw()
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
            scrollOffset += playerSpeed
            platforms.forEach((platform) => {
                platform.position.x -= playerSpeed
            })
            mediumPlatforms.forEach((mediumPlatform) => {
                mediumPlatform.position.x -= playerSpeed
            })
            smallPlatforms.forEach((smallPlatform) => {
                smallPlatform.position.x -= playerSpeed
            })
            clouds.forEach((cloud) => {
                cloud.position.x -= playerSpeed
            })
            trees.forEach((tree) => {
                tree.position.x -= playerSpeed
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
            clouds.forEach((cloud) => {
                cloud.position.x += playerSpeed
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
            player.position.x - player.height <= coin.position.x && player.position.x + player.height + player.velocity.x >= coin.position.x && player.position.y + player.width >= coin.position.y && player.position.y <= coin.position.y + coin.width
            ) {
            coin.position.x = 'none'
            coinCounter()

        }
    })



    //Cat Nip Vanishing
    catNips.forEach((catNip) => {
        if ( 
            player.position.x - player.height <= catNip.position.x && player.position.x + player.height + player.velocity.x >= catNip.position.x && player.position.y + player.width >= catNip.position.y && player.position.y <= catNip.position.y + catNip.width
            ) {
            catNip.position.x = 'none'
            catNipCounter()
            powerUp()
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

    clouds.forEach((cloud) => {
        if ( 
            player.position.y + player.height <= cloud.position.y && player.position.y + player.height + player.velocity.y >= cloud.position.y && player.position.x + player.width >= cloud.position.x && player.position.x <= cloud.position.x + cloud.width
            ) {
            player.velocity.y = 0
        }
    })

    // Win condition
    if (scrollOffset > 20000) {
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
            player.velocity.y = -20
            // keyDownVelocity 
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
            // let keyUpVelocity = player.velocity.y -= 20
            // keyUpVelocity 
            break
        case 83:
            console.log('down')
            break
    }
})
