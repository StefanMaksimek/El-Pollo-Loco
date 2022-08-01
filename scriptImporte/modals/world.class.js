class World {
    ctx;
    canvas;
    keyboard;

    moveableObjekt;
    character;
    chicken;
    barbedWire;
    endboss;
    level;
    bgCounter;
    cameraX;

    constructor(canvas, keyboard) {
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.level = level1
        this.ctx = canvas.getContext('2d');
        this.setObjects();
        this.draw();
        this.setWorld();
        this.createBackgrounds()
        this.checkCollisions()
    }


    setObjects() {
        this.moveableObjekt = new MovableObjekt();
        this.drawableObject = new DrawableObject();
        this.character = new Character();
        this.chicken = new Chicken();
        this.endboss = new Endboss();
        this.barbedWire = new BarbedWire()
        this.healthBar = new HealthBar();
        this.coinBar = new CoinBar();
        this.bottleBar = new BottleBar();
    }


    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach(enemy => {
                if (this.character.isColliding(enemy) /*&& this.character.energy > 0*/) {
                    this.drawableObject.characterEnergy -= enemy.damage
                    console.log('Damage', enemy.damage)
                    this.healthBar.setHealthBar(this.drawableObject.characterEnergy)
                    this.character.colliding = this.character.isColliding(enemy)
                }
            })
        }, 1);
    }


    draw() {

        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.ctx.translate(this.cameraX, 0)

        this.addObjectsToMap(this.level.backgrounds);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);

        this.addToMapp(this.character);
        this.ctx.translate(-this.cameraX, 0)

        this.addToMapp(this.healthBar);
        this.addToMapp(this.coinBar);
        this.addToMapp(this.bottleBar);

        let self = this;
        requestAnimationFrame(() => {
            self.draw();
        });
    }


    createBackgrounds() {
        let imageCounter = 0;
        for (let i = -2; i < 4; i++) {
            imageCounter++;
            if (imageCounter == 3) {
                imageCounter = 1
            }
            this.setBackgroundParts(i, imageCounter);
            this.setEnemies();
            this.bgCounter = i;
            this.moveableObjekt.bgCounter = i;
        }
        this.createClouds()
        this.setObstacles()
        this.setEndboss();
    }


    createClouds() {
        let imageCounter = 0;
        for (let i = -2; i < 16; i++) {
            imageCounter++;
            if (imageCounter == 3) {
                imageCounter = 1
            }
            this.setClouds(i, imageCounter);
        }
    }


    setBackgroundParts(i, imageCounter) {
        this.level.backgrounds.push(
            new BackgroundParts('img/5_background/layers/air.png', canvasWidth * i - 2 * i, 0),
            new BackgroundParts(`img/5_background/layers/3_third_layer/${imageCounter}.png`, canvasWidth * i - 2 * i, 0),
            new BackgroundParts(`img/5_background/layers/2_second_layer/${imageCounter}.png`, canvasWidth * i - 2 * i, 0),
            new BackgroundParts(`img/5_background/layers/1_first_layer/${imageCounter}.png`, canvasWidth * i - 2 * i, 0),
        )
    }


    setClouds(i, imageCounter) {
        this.level.clouds.push(
            new Cloud(`img/5_background/layers/4_clouds/${imageCounter}.png`, canvasWidth * i - i, 0),
            new Cloud(`img/5_background/layers/4_clouds/${imageCounter}.png`, canvasWidth * i - i, 0)
        )
    }


    setEnemies() {
        this.level.enemies.push(
            //new Chicken(),
        )
    }


    setObstacles() {
        this.level.enemies.push(
            new BarbedWire(this.barbedWire.leftEnd, this.barbedWire.bottom),
            new BarbedWire(this.barbedWire.leftEnd + 80, this.barbedWire.bottom),
            new BarbedWire(this.barbedWire.leftEnd + 160, this.barbedWire.bottom),

            new BarbedWire(this.barbedWire.leftEnd + 40, this.barbedWire.bottom - 60),
            new BarbedWire(this.barbedWire.leftEnd + 120, this.barbedWire.bottom - 60),

            new BarbedWire(this.barbedWire.leftEnd + 80, this.barbedWire.bottom - 120),

            new BarbedWire(this.barbedWire.rightEnd, this.barbedWire.bottom),
            new BarbedWire(this.barbedWire.rightEnd + 80, this.barbedWire.bottom),
            new BarbedWire(this.barbedWire.rightEnd + 160, this.barbedWire.bottom),

            new BarbedWire(this.barbedWire.rightEnd + 40, this.barbedWire.bottom - 60),
            new BarbedWire(this.barbedWire.rightEnd + 120, this.barbedWire.bottom - 60),

            new BarbedWire(this.barbedWire.rightEnd + 80, this.barbedWire.bottom - 120),
        )
    }


    setEndboss() {
        this.level.enemies.push(
            new Endboss(),
            new Chicken(),

        )
    }


    addToMapp(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo)
        }
        mo.draw(this.ctx)
        mo.drawFrame(this.ctx);
        if (mo.otherDirection) {
            this.flipImageBack(mo)
        }
    }


    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1
    }


    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }


    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMapp(o);
        })
    }

    setWorld() {
        this.character.world = this;
    }




}