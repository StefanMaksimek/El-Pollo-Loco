class Chicken extends MovableObjekt {
    height = 243 * scalefactor;
    width = 248 * scalefactor;

    x = 200 + Math.random() * 500;
    chickenWalkline =  this.characterWalkline - 15 + this.characterWalkline;
    y = canvasHeight - this.height - ((this.walkLine + this.chickenWalkline) * scalefactor)

    minSpeed = 0.5;
    maxSpeed = 1.8;
    animationSpeed = getRandomArbitrary(this.minSpeed, this.maxSpeed)

    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ]

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png')
        this.loadImages(this.IMAGES_WALKING)
        this.animateMoving()
        this.moving()
    }


    moving() {
        this.moveleft()
    }


    animateMoving() {
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_WALKING.length;
            let path = this.IMAGES_WALKING[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 100)
    }
}