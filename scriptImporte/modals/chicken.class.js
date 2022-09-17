class Chicken extends MovableObjekt {
    height = 243 * scalefactor;
    width = 248 * scalefactor;

    x = 200 + getRandomArbitrary(0, canvasWidth * this.bgCounter);
    chickenWalkline = this.characterWalkline - 15 + this.characterWalkline;
    gravityY = canvasHeight - this.height - ((this.walkLine + this.chickenWalkline) * scalefactor);
    y = this.gravityY;

    setCollisionX = 0 * scalefactor;
    setCollisionY = 10 * scalefactor;
    setCollisionWidth = 0 * scalefactor;
    setCollisionheigt = 40 * scalefactor;

    minSpeed = 1;
    maxSpeed = 5;
    animationSpeed = getRandomArbitrary(this.minSpeed, this.maxSpeed)
    movingSpeed = 160 / this.animationSpeed // for setting intervall

    directionIndex = getRandomInt(3); // even for left; odd for right
    otherDirection = false;

    energy = 10
    damage = 5;
    isDead = false

    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];
    IMAGES_DEATH = [
        'img/3_enemies_chicken/chicken_normal/2_dead/dead.png',
    ]

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png')
        this.loadImages(this.IMAGES_WALKING)
        this.loadImages(this.IMAGES_DEATH)
        this.moving()
        this.proofAlive()
    }


    moving() {
        setInterval(() => {
            if (play) {
                if (!this.isDead) {
                    this.playAnimation(this.IMAGES_WALKING)
                } else {
                    this.playAnimation(this.IMAGES_DEATH)
                }
            }
        }, this.movingSpeed)

        setInterval(() => {
            if (play) {
                if (!this.isDead) {
                    if (this.directionIndex % 2) {
                        this.moveRight()
                        this.otherDirection = true;
                    } else {
                        this.moveLeft()
                        this.otherDirection = false;
                    }
                } else {
                    this.y += 5;
                }
            }
        }, 1000 / 60)
    }
}