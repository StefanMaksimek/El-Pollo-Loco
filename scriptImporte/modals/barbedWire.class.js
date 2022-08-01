class BarbedWire extends DrawableObject {
    IMAGE = 'img/new_items/barbed_wire.png'

    width = 1920 * scalefactor / 3
    height = 1222 * scalefactor / 3

    x;
    y;

    leftEnd = 2 * - canvasWidth + 200;
    rightEnd = this.bgCounter * canvasWidth - 400;
    bottom = canvasHeight - this.height - 50

    setCollisionX = 0 * scalefactor;
    setCollisionY = 0 * scalefactor;
    setCollisionWidth = 0 * scalefactor;
    setCollisionheigt = 0 * scalefactor;

    damage = 40;

    constructor(x, y) {
        super().loadImage(this.IMAGE);
        this.x = x
        this.y = y
    }
}