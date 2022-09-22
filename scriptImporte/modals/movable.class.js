class MovableObjekt extends DrawableObject {
    walkLine = 150; // for set all Moveble Objects on one x-line
    characterWalkline = 61; //
    animationSpeed = 0.1;

    speedY = 0;
    accceleration = 10;

    collidingX = 200;
    speedX = 0;
    acccelerationX = 1;

    colliding = false
    lastHit = new Date().getTime()

    isDead = false;

    proofAlive() {
        setInterval(() => {
            if (this.energy > 0) {
                this.isDead = false
            } else {
                this.isDead = true
            }
        }, 10);
    }


    applyCollidingMove() {
        setInterval(() => {
            if (this.proofCollidingTime()) {
                this.playAnimation(this.IMAGES_HURT)
            }
        }, 150)
    }


    proofCollidingTime() {
        let timepassed = new Date().getTime() - this.lastHit
        return timepassed < 1500
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
        if (this instanceof ThrowableObject || this.isDead) {
            return true
        } else {
            return this.y < gravityY
        }

    }


    playAnimation(image) {
        let i = this.currentImage % image.length;
        let path = image[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    moveRight() {

        this.x += this.animationSpeed
    }


    moveLeft() {
        this.x -= this.animationSpeed
    }


    jump() {
        this.speedY = 90
    }
}

