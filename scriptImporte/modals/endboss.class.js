class Endboss extends MovableObjekt{
    height = 1217 * scalefactor;
    width = 1045 * scalefactor;

    x = 200 + Math.random() * 500;
    endbossWalkline = this.characterWalkline - 39 + this.characterWalkline;;
    y = canvasHeight - this.height - ((this.walkLine + this.endbossWalkline) * scalefactor)

    minSpeed = 0.5;
    maxSpeed = 1.8;
    animationSpeed = getRandomArbitrary(this.minSpeed, this.maxSpeed)

    IMAGES_WALKING = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png'
    ]
    IMAGES_ALERT = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png',
    ]
    IMAGES_ATTACK = [
        'img/4_enemie_boss_chicken/1_attack/G13.png',
        'img/4_enemie_boss_chicken/1_attack/G14.png',
        'img/4_enemie_boss_chicken/1_attack/G15.png',
        'img/4_enemie_boss_chicken/1_attack/G16.png',
        'img/4_enemie_boss_chicken/1_attack/G17.png',
        'img/4_enemie_boss_chicken/1_attack/G18.png',
        'img/4_enemie_boss_chicken/1_attack/G19.png',
        'img/4_enemie_boss_chicken/1_attack/G20.png',
    ]
    IMAGES_HURT = [
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G22.png',
        'img/4_enemie_boss_chicken/4_hurt/G23.png',
    ]
    IMAGES_DEAD = [
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png',
    ]

    constructor() {
        super().loadImage('img/4_enemie_boss_chicken/1_walk/G1.png')
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