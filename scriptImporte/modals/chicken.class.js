class Chicken extends MovableObjekt {
    height = 243 * scalefactor;
    width = 248 * scalefactor;

    x = 200 + Math.random() * 500;
    chickenWalkline = this.characterWalkline - 15 + this.characterWalkline;
    gravityY = canvasHeight - this.height - ((this.walkLine + this.chickenWalkline) * scalefactor);
    y = this.gravityY;

    setCollisionX = 0 * scalefactor;
    setCollisionY = 10 * scalefactor;
    setCollisionWidth = 0 * scalefactor;
    setCollisionheigt = 40 * scalefactor;

    minSpeed = 0.5;
    maxSpeed = 2.8;
    animationSpeed = getRandomArbitrary(this.minSpeed, this.maxSpeed)
    movingSpeed = 80 / this.animationSpeed // for setting intervall

    directionIndex = 0; // even for left; odd for right
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
            if (!this.isDead) {
                this.playAnimation(this.IMAGES_WALKING)
            } else {
                this.playAnimation(this.IMAGES_DEATH)
            }
        }, this.movingSpeed)
        setInterval(() => {
            if (!this.isDead) {
                if (this.directionIndex % 2) {
                    this.moveRight()
                    this.otherDirection = true;
                } else {
                    this.moveLeft()
                    this.otherDirection = false;
                }
            } else {
                this.y += 2;
            }
        }, 1000 / 60)
    }
}