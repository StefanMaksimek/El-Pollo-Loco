class MovableObjekt {
    height = 100;
    width = 100;

    x = 0;
    y = this.canvasHeight - this.height - this.walkLine;
    walkLine = 150; // for set all Moveble Objects on one x-line
    characterWalkline = 61; //
    animationSpeed = 0.1;

    speedY = 0;
    accceleration = 5;

    energy = 100;

    img;
    imageCache = [];
    currentImage = 0;
    bgCounter = 4;

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


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    /**
     * 
     * @param {Array} arr - ['./img/image1', './img/image2', './img/image3', ...]
     */
    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        })

    }


    playAnimation(image) {
        let i = this.currentImage % image.length;
        let path = image[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }


    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken || this instanceof Endboss) {
            ctx.beginPath();
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.lineWidth = 3;
            ctx.strokeStyle = 'black';
            ctx.stroke();
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
        let enemyYtop = mo.y;
        let enemyYbottom = mo.y + mo.height;
        let enemyXleft = mo.x;
        let enemyXright = mo.x + mo.width


        let characterYtop = this.y;
        let characterYbottom = this.y + this.height;
        let characterXleft = this.x;
        let characterXright = this.x + this.width

        return this.x + this.width > enemyXleft &&
        this.x + this.width < enemyXright &&
        this.y + this.height > enemyYtop &&
        this.y + this.height < enemyYbottom
        ||
        this.x + this.width > enemyXleft &&
        this.x + this.width < enemyXright &&
        this.y > enemyYtop &&
        this.y < enemyYbottom
        ||
        this.x > enemyXleft &&
        this.x < enemyXright &&
        this.y > enemyYtop &&
        this.y < enemyYbottom
        ||
        this.x > enemyXleft &&
        this.x < enemyXright &&
        this.y + this.height > enemyYtop &&
        this.y + this.height < enemyYbottom
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

