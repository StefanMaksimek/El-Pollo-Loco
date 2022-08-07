class Coin extends DrawableObject {

IMAGES_COIN = [
    'img/8_coin/coin_1.png',
    'img/8_coin/coin_2.png'
]
    sizefactor = 1.5
    width = 300 * scalefactor * this.sizefactor;
    height = 300 * scalefactor * this.sizefactor;

    minX = this.leftEnd
    maxX = this.rightEnd
    minY = 100
    maxY = 300

    x = getRandomArbitrary(this.minX, this.maxX)
    y = getRandomArbitrary(this.minY, this.maxY)

    setCollisionX = 107 * scalefactor * this.sizefactor;
    setCollisionY = 107 * scalefactor * this.sizefactor;
    setCollisionheigt = 216 * scalefactor * this.sizefactor;
    setCollisionWidth = 216 * scalefactor * this.sizefactor;


    constructor() {
        super().loadImage(this.IMAGES_COIN[1])
        this.loadImages(this.IMAGES_COIN)
    }
}