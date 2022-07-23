class Character extends MovableObjekt {
    height = 1200 * scalefactor;
    width = 610 * scalefactor;
    world;

    
    first_positionOfCharacter = 120;
    x = this.first_positionOfCharacter;
    y = canvasHeight - this.height - ((this.walkLine + this.characterWalkline) * scalefactor)

    bgCounter = this.bgCounter
    animationSpeed = 50;
    otherDirection = false;

    

    IMAGES_WALKING = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
    ];


    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING)

        this.animateMoving()
    }


    animateMoving() {
        setInterval(() => {
            let X_positionOfCharacter = this.first_positionOfCharacter
            if (keyboard.right && this.x < this.bgCounter * canvasWidth - this.width) {
                this.otherDirection = false;
                this.animatingWalk()
                this.x += this.animationSpeed
                if (this.x < this.bgCounter * canvasWidth - canvasWidth + this.width) {
                    world.cameraX = X_positionOfCharacter - this.x;
                }
                
            }
            if (keyboard.left && this.x > - 2 * canvasWidth + canvasWidth / 2 - this.width ) {
                this.otherDirection = true;
                this.animatingWalk()
                this.x -= this.animationSpeed
                if (this.x > - 2 * canvasWidth + canvasWidth / 2 - this.width / 2) {
                    X_positionOfCharacter = canvasWidth / 2 - this.width / 2
                this.world.cameraX = X_positionOfCharacter - this.x;
                } 
            }
            
        }, 1000 * this.IMAGES_WALKING.length / 60)
    }

    animatingWalk() {
        
        let i = this.currentImage % this.IMAGES_WALKING.length;
        let path = this.IMAGES_WALKING[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

}