class CoinBar extends DrawableObject {
    IMAGES_COIN = [
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png'
    ];

    width = 595 * scalefactor;
    height = 158 * scalefactor;
    x = 10;
    y = this.height + 10;


    constructor() {
        super().loadImage(this.IMAGES_COIN[0])
        this.loadImages(this.IMAGES_COIN);
        this.setCoinBar(0);
        
    }

    setCoinBar(coinWallet) {
        this.coinWallet = coinWallet
        let path = this.IMAGES_COIN[this.resolveImageIndex()]
        this.img = this.imageCache[path]
    }

    
    resolveImageIndex() {
        if (this.coinWallet == 100) {
            return 5
        } else if (this.coinWallet > 80) {
            return 4
        } else if (this.coinWallet > 60) {
            return 3
        } else if (this.coinWallet > 40) {
            return 2
        } else if (this.coinWallet > 20) {
            return 1
        } else {
            return 0
        }
    }
}