class SmallChicken extends MovableObjekt {
    height = 243 * scalefactor;
    width = 248 * scalefactor;

    x = 1800 + getRandomArbitrary(0, canvasWidth * bgCounter - 3000);
    chickenWalkline = this.characterWalkline - 15 + this.characterWalkline;
    gravityY = canvasHeight - this.height - ((this.walkLine + this.chickenWalkline) * scalefactor);
    y = this.gravityY;

    setCollisionX = 0 * scalefactor;
    setCollisionY = 10 * scalefactor;
    setCollisionWidth = 0 * scalefactor;
    setCollisionheigt = 40 * scalefactor;

    minSpeed = 0.8;
    maxSpeed = 4;
    animationSpeed = getRandomArbitrary(this.minSpeed, this.maxSpeed)
    movingSpeed = 160 / this.animationSpeed // for setting intervall
    jumpImpuls = getRandomArbitrary(30, 80)
    jumpCounter = 0;
    jumpPower = getRandomArbitrary(50, 90)
    accceleration = 10

    directionIndex = getRandomInt(3); // even for left; odd for right
    directionTime = 0;
    otherDirection = false;

    energy = 10
    damage = 5;
    isDead = false

    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ];
    IMAGES_DEATH = [
        'img/3_enemies_chicken/chicken_small/2_dead/dead.png',
    ]

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_small/1_walk/1_w.png')
        this.loadImages(this.IMAGES_WALKING)
        this.loadImages(this.IMAGES_DEATH)
        this.applyGravity(this.gravityY)
        this.moving()
        this.proofAlive()
    }


    moving() {
            setStoppableInterval(this.animate.bind(this), this.movingSpeed)
            setStoppableInterval(this.direction.bind(this), intervall)
    }


    animate() {
        if (play) {
            if (!this.isDead) {
                this.playAnimation(this.IMAGES_WALKING)
            } else {
                this.playAnimation(this.IMAGES_DEATH)
            }
        }
       
    }


    direction() {
        if (play) {
            if (!this.isDead) {
                this.directionTime += 1;
                if (this.directionIndex % 2) {
                    this.moveRight()
                    this.setJumpImpulse()
                    this.otherDirection = true;
                } else {
                    this.moveLeft()
                    this.setJumpImpulse()
                    this.otherDirection = false;
                }
            } else {
                this.y += 5;
            }
        }
    }


    setJumpImpulse() {
        if (this.y == this.gravityY) {
            this.jumpCounter += 0.5
        }
        if (this.jumpCounter > this.jumpImpuls ) {
            this.jump(this.jumpPower)
            this.jumpCounter = 0
            this.jumpImpuls = getRandomArbitrary(50, 120)
            this.jumpPower = getRandomArbitrary(50, 90)
        }
    }
}