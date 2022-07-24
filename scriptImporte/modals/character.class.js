class Character extends MovableObjekt {
    height = 1200 * scalefactor;
    width = 610 * scalefactor;
    world;

    first_positionOfCharacter = canvasWidth / 4;
    x = this.first_positionOfCharacter;
    gravityY = canvasHeight - this.height - ((this.walkLine + this.characterWalkline) * scalefactor);
    y = this.gravityY

    bgCounter = this.bgCounter
    animationSpeed = 15;
    otherDirection = false;


    IMAGES_WALKING = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
    ];
    IMAGES_JUMP = [
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png',
    ];
    IMAGES_HURT = [
        'img/2_character_pepe/4_hurt/H-41.png',
        'img/2_character_pepe/4_hurt/H-42.png',
        'img/2_character_pepe/4_hurt/H-43.png',
    ];
    IMAGES_DEAD = [
        'img/2_character_pepe/5_dead/D-51.png',
        'img/2_character_pepe/5_dead/D-52.png',
        'img/2_character_pepe/5_dead/D-53.png',
        'img/2_character_pepe/5_dead/D-54.png',
        'img/2_character_pepe/5_dead/D-55.png',
        'img/2_character_pepe/5_dead/D-56.png',
        'img/2_character_pepe/5_dead/D-57.png',
    ];
    IMAGES_IDLE = [
        'img/2_character_pepe/1_idle/idle/I-1.png',
        'img/2_character_pepe/1_idle/idle/I-2.png',
        'img/2_character_pepe/1_idle/idle/I-3.png',
        'img/2_character_pepe/1_idle/idle/I-4.png',
        'img/2_character_pepe/1_idle/idle/I-5.png',
        'img/2_character_pepe/1_idle/idle/I-6.png',
        'img/2_character_pepe/1_idle/idle/I-7.png',
        'img/2_character_pepe/1_idle/idle/I-8.png',
        'img/2_character_pepe/1_idle/idle/I-9.png',
        'img/2_character_pepe/1_idle/idle/I-10.png',
    ];
    IMAGES_LONG_IDLE = [
        'img/2_character_pepe/1_idle/long_idle/I-11.png',
        'img/2_character_pepe/1_idle/long_idle/I-12.png',
        'img/2_character_pepe/1_idle/long_idle/I-13.png',
        'img/2_character_pepe/1_idle/long_idle/I-14.png',
        'img/2_character_pepe/1_idle/long_idle/I-15.png',
        'img/2_character_pepe/1_idle/long_idle/I-16.png',
        'img/2_character_pepe/1_idle/long_idle/I-17.png',
        'img/2_character_pepe/1_idle/long_idle/I-18.png',
        'img/2_character_pepe/1_idle/long_idle/I-19.png',
        'img/2_character_pepe/1_idle/long_idle/I-20.png',
    ];



    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING)
        this.loadImages(this.IMAGES_JUMP)
        this.animate()
        this.applyGravity(this.gravityY)
    }


    animate() {
        setInterval(() => {
            if (keyboard.right && this.proofCanvasEndRight()) {
                this.moveRight()
                this.otherDirection = false;
            }
            if (keyboard.left && this.proofCanvasEndLeft()) {
                this.moveLeft()
                this.otherDirection = true;
            }
            if (keyboard.space && this.y == this.gravityY) {
                this.jump()
            }
            this.cameraView()
        }, 1000 / 60)

        setInterval(() => {
            if (this.isAboveGround(this.gravityY)) {
                this.playAnimation(this.IMAGES_JUMP)
            } else {
                if (keyboard.left || keyboard.right) {
                    this.playAnimation(this.IMAGES_WALKING)
                }
            }
        }, 50)
    }

    proofCanvasEndRight() {
        return this.x < this.bgCounter * canvasWidth - this.width
    }


    proofCanvasEndLeft() {
        return this.x > - 2 * canvasWidth
    }


    cameraView() {
        if (this.x > - 2 * canvasWidth + this.first_positionOfCharacter) {
            this.world.cameraX = this.first_positionOfCharacter - this.x;
        }
        if (this.x < this.bgCounter * canvasWidth - canvasWidth + this.first_positionOfCharacter) {
            this.world.cameraX = this.first_positionOfCharacter - this.x;
        }
    }


    
}