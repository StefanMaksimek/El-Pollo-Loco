class Chicken extends MovableObjekt {
    height = 243 * scalefactor;
    width = 248 * scalefactor;

    x = 200 + Math.random() * 500;
    chickenWalkline = this.characterWalkline - 15 + this.characterWalkline;
    gravityY = canvasHeight - this.height - ((this.walkLine + this.chickenWalkline) * scalefactor);
    y = this.gravityY;

    minSpeed = 0.5;
    maxSpeed = 2.8;
    animationSpeed = getRandomArbitrary(this.minSpeed, this.maxSpeed)

    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ]

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png')
        this.loadImages(this.IMAGES_WALKING)
        this.moving()
    }


   moving() {
       //setInterval(() => {
       //    this.playAnimation(this.IMAGES_WALKING)
       //}, 100)
       //setInterval(() => {
       //    this.moveLeft()
       //},1000 / 60)
   }



}