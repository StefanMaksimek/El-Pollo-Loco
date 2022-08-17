class EndbossHealthBar extends DrawableObject {
    IMAGES_HEALTH = [
        'img/7_statusbars/2_statusbar_endboss/blue10.png',
        'img/7_statusbars/2_statusbar_endboss/blue80.png',
        'img/7_statusbars/2_statusbar_endboss/blue60.png',
        'img/7_statusbars/2_statusbar_endboss/blue40.png',
        'img/7_statusbars/2_statusbar_endboss/blue20.png',
        'img/7_statusbars/2_statusbar_endboss/blue0.png',
    ];

    width = 595 * scalefactor;
    height = 158 * scalefactor;
    x = canvasWidth - this.width - 10;
    y = 10;

    energy = 100



    constructor() {
        super().loadImage(this.IMAGES_HEALTH[5])
        this.loadImages(this.IMAGES_HEALTH);
        this.setHealthBar(100);


    }

    setHealthBar(energy) {
        this.energy = energy
        let path = this.IMAGES_HEALTH[this.resolveImageIndex()]
        this.img = this.imageCache[path]

    }


    resolveImageIndex() {
        if (this.energy == 100) {
            return 0
        } else if (this.energy > 80) {
            return 1
        } else if (this.energy > 60) {
            return 2
        } else if (this.energy > 40) {
            return 3
        } else if (this.energy > 20) {
            return 4
        } else {
            return 5
        }
    }
}