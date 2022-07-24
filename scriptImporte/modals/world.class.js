class World {
    ctx;
    canvas;
    keyboard;

    moveableObjekt;
    character;
    chicken;
    endboss;
    level;
    bgCounter;
    cameraX;

    constructor(canvas, keyboard) {
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.moveableObjekt = new MovableObjekt();
        this.character = new Character();
        this.chicken = new Chicken();
        this.endboss = new Endboss();
        this.level = level1
        this.ctx = canvas.getContext('2d');
        this.draw();
        this.setWorld();
        this.createBackgrounds()
        this.checkCollisions()
    }


    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach(enemy => {
                if (this.character.isColliding(enemy)) {
                    this.character.energy -= 0.1
                    console.log(this.character.energy)
                } 
            })
        }, 1000 / 60);
    }


    draw() {

        this.ctx.clearRect(0, 0, canvas.width, canvas.height);

        this.ctx.translate(this.cameraX, 0)

        this.addObjectsToMap(this.level.backgrounds);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addToMapp(this.character);
        this.ctx.translate(-this.cameraX, 0)

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
           new Chicken(),
           new Chicken(),
           new Chicken(),
        )
    }

    setEndboss() {
        this.level.enemies.push(
            new Endboss()
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