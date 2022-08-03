class MovableObjekt extends DrawableObject{
    walkLine = 150; // for set all Moveble Objects on one x-line
    characterWalkline = 61; //
    animationSpeed = 0.1;

    speedY = 0;
    accceleration = 5;

    collidingX = 200;
    speedX = 0;
    acccelerationX = 1;

    colliding = false
    lastHit = new Date().getTime()


    applyCollidingMove() {
        setInterval(() => {
            if (this.setCollidingTime()) {
                this.x -= this.speedX;
                this.playAnimation(this.IMAGES_HURT)
                this.speedX += this.accceleration;
                console.log('collidingX', this.collidingX)
                console.log('this.speedX', this.speedX)
            }
        }, 1000 / 25)
    }


    setCollidingTime() {
        let timepassed = new Date().getTime() - this.lastHit
        return timepassed < 5
    } 


    applyGravity(gravityY) {
        setInterval(() => {
            if (this.isAboveGround(gravityY) || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.accceleration;
            } else {
                this.y = this.gravityY
                this.speedY = 0
            }
        }, 1000 / 25)
    }


    isAboveGround(gravityY) {
        return this.y < gravityY
    }


    playAnimation(image) {
        let i = this.currentImage % image.length;
        let path = image[i];
        this.img = this.imageCache[path];
        this.currentImage++;
        if (this.currentImage > image.length) {
            this.currentImage = 0
        }
    }


    moveRight() {

        this.x += this.animationSpeed
    }


    moveLeft() {
        this.x -= this.animationSpeed
    }


    jump() {
        this.speedY = 40
    }


    isColliding(mo) {
        let enemyYtop = mo.y + mo.setCollisionY;
        let enemyYbottom = mo.y + mo.setCollisionY + mo.height - mo.setCollisionheigt;
        let enemyXleft = mo.x + mo.setCollisionX;
        let enemyXright = mo.x + mo.setCollisionX + mo.width - mo.setCollisionWidth;

        let characterYtop = this.y + this.setCollisionY;
        let characterYbottom = this.y + this.setCollisionY + this.height - this.setCollisionheigt;
        let characterXleft = this.x + this.setCollisionX;
        let characterXright = this.x + this.setCollisionX + this.width - this.setCollisionWidth;

        return characterXright > enemyXleft &&
        characterXright < enemyXright &&
        characterYbottom > enemyYtop &&
        characterYbottom < enemyYbottom
        ||
        characterXright > enemyXleft &&
        characterXright < enemyXright &&
        characterYtop > enemyYtop &&
        characterYtop < enemyYbottom
        ||
        characterXleft > enemyXleft &&
        characterXleft < enemyXright &&
        characterYtop > enemyYtop &&
        characterYtop < enemyYbottom
        ||
        characterXleft > enemyXleft &&
        characterXleft < enemyXright &&
        characterYbottom > enemyYtop &&
        characterYbottom < enemyYbottom
        ||
        enemyYtop > characterYtop &&
        enemyYbottom < characterYbottom &&
        enemyXleft > characterXleft &&
        enemyXleft < characterXright
        ||
        enemyYtop > characterYtop &&
        enemyYbottom < characterYbottom &&
        enemyXright > characterXleft &&
        enemyXright < characterXright
    }


    //isColliding(mo) {
    //    return this.x + this.width > mo.x &&
    //    this.y +this.height > mo.y &&
    //    this.x < mo.x + mo.with &&
    //    this.y > mo.y + mo.height
    //}
}

