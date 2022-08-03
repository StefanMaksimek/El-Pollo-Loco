class Endboss extends MovableObjekt{
    height = 1217 * scalefactor;
    width = 1045 * scalefactor;

    endbossWalkline = this.characterWalkline - 39 + this.characterWalkline;
    gravityY = canvasHeight - this.height - ((this.walkLine + this.endbossWalkline) * scalefactor);
    y = this.gravityY;

    setCollisionX = 100 * scalefactor;
    setCollisionY = 200 * scalefactor;
    setCollisionWidth = 200 * scalefactor;
    setCollisionheigt = 250 * scalefactor;

    minSpeed = 0.5;
    maxSpeed = 1.8;
    animationSpeed = getRandomArbitrary(this.minSpeed, this.maxSpeed)

    damage = 20;

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
        super().loadImage(this.IMAGES_WALKING[0])
        this.loadImages(this.IMAGES_WALKING)

        this.x = 600 // <-- ersetzen durch = this.bgCounter * canvasWidth
        this.moving()
    }


    moving() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING)
        }, 100)
        //setInterval(() => {
        //    this.moveLeft()
        //},1000 / 60)
    }
}