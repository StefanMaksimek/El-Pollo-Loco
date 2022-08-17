class ThrowableObject extends MovableObjekt {
    world;
    x = 100
    y = canvasHeight - 300

    width = 400 * scalefactor;
    height = 400 * scalefactor;

    setCollisionX = 62 * scalefactor;
    setCollisionY = 62 * scalefactor;
    setCollisionWidth = 100 * scalefactor;
    setCollisionheigt = 100 * scalefactor;

    speedX = 5;
    speedY = 35;
    gravityY = canvasHeight - 250 * scalefactor - this.height;

    hit = false

    IMAGES_BOTTLE_ROTATE = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ];
    IMAGES_BOTTLE_SPLASH = [
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
    ]


    constructor(x, y, direction, walkLeft, walkRight) {
        super().loadImage('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.x = x - this.width * 0.5;
        this.y = y;
        this.throw(direction, walkLeft, walkRight)
        this.loadImages(this.IMAGES_BOTTLE_ROTATE)
        this.loadImages(this.IMAGES_BOTTLE_SPLASH)

    }


    throw(direction, walkLeft, walkRight) {
        this.setMove(direction, walkLeft, walkRight)
        this.setImages()
        this.applyGravity(this.gravityY)
    }


    setImages() {
        setInterval(() => {
            if (this.y < this.gravityY && !this.hit) {
                this.playAnimation(this.IMAGES_BOTTLE_ROTATE)
            } else {
                this.playAnimation(this.IMAGES_BOTTLE_SPLASH)
            }
        }, 50)
    }


    setMove(direction, walkLeft, walkRight) {
        setInterval(() => {
            if (direction) {
                if (walkLeft || walkRight) {
                    this.x -= 25
                } else {
                    this.x -= 10
                }
            } else {
                if (walkLeft || walkRight) {
                    this.x += 25
                } else {
                    this.x += 10
                }
            }
        }, intervall);
    }
}
