class World {
    deebugmode = false

    ctx;
    canvas;
    keyboard;

    moveableObject;
    throwableObject;
    character;
    chicken;
    barbedWire;
    endboss;
    level;
    bgCounter;
    cameraX;
    lastThrow;

    constructor(canvas, keyboard) {
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.level = level1
        this.ctx = canvas.getContext('2d');
        this.setObjects();
        this.draw();
        this.setWorld();
        this.createBackgrounds()
        this.run()
    }


    setObjects() {
        this.moveableObject = new MovableObjekt();
        this.throwableObject = [];
        this.drawableObject = new DrawableObject();
        this.character = new Character();
        this.chicken = new Chicken();
        this.endboss = new Endboss();
        this.barbedWire = new BarbedWire()
        this.healthBar = new HealthBar();
        this.endbossHealthBar = new EndbossHealthBar();
        this.coinBar = new CoinBar();
        this.bottleBar = new BottleBar();
        this.coins = [];
        this.bottles = [];
    }


    run() {
        setInterval(() => {
            this.pepeColliding();
            this.enemyCollidingPepe();
            this.checkThrowing()
            this.throwingBottleColliding();
            this.coinColliding();
            this.bottleColliding()
        }, 20);
    }


    checkThrowing() {
        if (this.keyboard.d && !this.prooflastThrow(1001) && this.bottleBar.bottles > 0) {
            let bottle = new ThrowableObject(this.character.x + this.character.width * 0.5, this.character.y + this.character.height * 0.5, this.character.otherDirection, this.keyboard.left, this.keyboard.right)
            this.throwableObject.push(bottle)
            this.lastThrow = new Date().getTime()
            this.character.idleCounter = 0
            this.bottleBar.bottles--
        }
        if (!this.prooflastThrow(1000)) {
            this.throwableObject.splice(0, 1)
        }
    }


    prooflastThrow(ms) {
        let timepassed = new Date().getTime() - this.lastThrow
        return timepassed < ms
    }


    pepeColliding() {
        this.level.enemies.forEach(enemy => {
            if (this.character.isColliding(enemy) && this.character.y < this.character.gravityY && enemy instanceof Chicken && !this.character.proofCollidingTime()) {
                console.log('success')
                enemy.energy = 0
                this.character.speedY = 20
            } else if (this.character.isColliding(enemy) && !this.character.proofCollidingTime() && !enemy.isDead) {
                this.drawableObject.characterEnergy -= enemy.damage
                this.character.energy = this.drawableObject.characterEnergy
                this.healthBar.setHealthBar(this.drawableObject.characterEnergy)
                this.character.colliding = this.character.isColliding(enemy)
            }
        })
    }


    enemyCollidingPepe() {
        this.level.enemies.forEach(enemy => {
            if (enemy.isColliding(this.character) && !this.character.proofCollidingTime() || enemy.x < 2 * - canvasWidth + 500 || enemy.x > this.bgCounter * canvasWidth + 400) {
                enemy.directionIndex++
            }
        })
    }


    throwingBottleColliding() {
        if (this.throwableObject.length > 0) {
            this.level.enemies.forEach(e => {
                if (e.isColliding(this.throwableObject[0])) {
                    e.energy -= 4
                    this.throwableObject[0].hit = true
                    if (e instanceof Endboss) {
                        this.endbossHealthBar.setHealthBar(e.energy)
                    }
                }
            })
        }
    }


    coinColliding() {
        this.coins.forEach( (coin, i) => {
            if (coin.isColliding(this.character)) {
                this.coins.splice(i, 1)
                this.coinBar.coins++
            }
        })
    }


    bottleColliding() {
        this.bottles.forEach( (bottle, i) => {
            if (bottle.isColliding(this.character)) {
                this.bottles.splice(i, 1)
                this.bottleBar.bottles++
            }
        })
    }


    draw() {

        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.ctx.translate(this.cameraX, 0)

        this.addObjectsToMap(this.level.backgrounds);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObject);

        this.addObjectsToMap(this.coins);
        this.addObjectsToMap(this.bottles);

        this.addToMapp(this.character);
        this.ctx.translate(-this.cameraX, 0)

        this.addToMapp(this.healthBar);
        this.addToMapp(this.endbossHealthBar);
        this.addToMapp(this.coinBar);
        
        this.addToMapp(this.bottleBar);

        this.numberOfcollectedItems()

        let self = this;
        requestAnimationFrame(() => {
            self.draw();
        });
    }


    numberOfcollectedItems() {
        this.ctx.font = '25px Boogaloo';
        this.ctx.fillStyle = "white";
        this.ctx.fillText(this.coinBar.coins, this.coinBar.width + this.coinBar.x, this.coinBar.y + 25);
        this.ctx.fillText(this.bottleBar.bottles, this.bottleBar.width + this.bottleBar.x, this.bottleBar.y + 25);
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
            this.moveableObject.bgCounter = i;
        }
        this.createClouds();
        //this.setObstacles();
        this.setEndboss();
        this.setCoins();
        this.setBottles();
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
            new Chicken(),
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


    setCoins() {
        this.coins.push(
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
        )
    }


    setBottles() {
        this.bottles.push(
            new Bottle(),
            new Bottle(),
            new Bottle(),
            new Bottle(),
            new Bottle(),
            new Bottle(),
            new Bottle(),
            new Bottle(),
            new Bottle(),
            new Bottle(),
            new Bottle(),
            new Bottle(),
            new Bottle(),
            new Bottle(),
            new Bottle(),
            new Bottle(),
            new Bottle(),
            new Bottle(),
            new Bottle(),
            new Bottle(),
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
        if (this.deebugmode) {
            mo.drawFrame(this.ctx);
        }
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
        this.throwableObject.world = this;
    }




}