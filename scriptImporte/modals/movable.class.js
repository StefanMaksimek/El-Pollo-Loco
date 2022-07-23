class MovableObjekt {
    height = 100;
    width = 100;

    x = 0;
    y = this.canvasHeight - this.height - this.walkLine;
    walkLine = 150; // for set all Moveble Objects on one x-line
    characterWalkline = 61; //
    animationSpeed = 0.1;

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


    moveRight() {
        setInterval(() => {
            this.x +=  this.animationSpeed
        }, 1000 / 60)
    }


    moveleft() {
        setInterval(() => {
            this.x -=  this.animationSpeed
        }, 1000 / 60)
    }

    
    
}

