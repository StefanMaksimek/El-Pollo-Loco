class DrawableObject {
    height = 100;
    width = 100;

    
    x = 0;
    y = this.canvasHeight - this.height - this.walkLine;

    characterEnergy = 100;
    coinWallet = 0;
    bottleBag = 0;

    img;
    imageCache = [];
    currentImage = 0;
    bgCounter = 4;


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


    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }


    drawFrame(ctx) {
            ctx.beginPath();
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.lineWidth = 3;
            ctx.strokeStyle = 'black';
            ctx.stroke();
        
        if (this instanceof Character || this instanceof Chicken || this instanceof Endboss) {
            ctx.beginPath();
            ctx.rect(this.x + this.setCollisionX, this.y + this.setCollisionY, this.width - this.setCollisionWidth, this.height - this.setCollisionheigt);
            ctx.lineWidth = 2;
            ctx.strokeStyle = 'red';
            ctx.stroke();
        }
    }
}