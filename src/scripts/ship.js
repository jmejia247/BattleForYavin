import Projectile from './projectiles';

export default class Ship  {
    constructor(gameWidth, gameHeight, x_wing, ctx) {
        this.width = 150;
        this.height = 30;
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.ship = x_wing;
        this.canShoot = true;
        this.projectiles = [];
        this.ctx = ctx;
        this.sound = document.getElementById('projectile-sound')
        this.collision = false

        this.maxSpeed = 35;

        this.position = {
            x: 0,
            y: gameHeight / 2,
        };
    }

    moveLeft() {
        this.position.x -= this.maxSpeed;
    }
    moveRight() {
        this.position.x += this.maxSpeed;
    }
    moveUp() {
        this.position.y -= this.maxSpeed;
    }
    moveDown() {
        this.position.y += this.maxSpeed;
    }

    shootProjectile() {
        if (this.canShoot && this.projectiles.length < 10) {
            let projectile = new Projectile(this.position.x, this.position.y);
            this.projectiles.push(projectile);
            
        };
    }


    draw(ctx) {
        ctx.drawImage(this.ship, this.position.x, this.position.y, 100, 100)
        for (let i = 0; i < this.projectiles.length; i++) {
            const projectile = this.projectiles[i];
            if (projectile.collision === false) {
                projectile.update(this.ctx);
                this.sound.play()
            } else {
                this.projectiles.splice(i, 1);
            }
            if (projectile.x - projectile.width >= this.gameWidth) {
                this.projectiles.splice(i, 1);
            }
        }
    }

    update(dt, ctx, empire) {
        this.draw(ctx);
        if(!dt) return;
        this.position.x;
        this.position.y;

        if(this.position.x < 0) this.position.x = 0;
        if(this.position.x + this.width > this.gameWidth) this.position.x = this.gameWidth - this.width;
        if(this.position.y < 0) this.position.y = 0;
        if(this.position.y + this.height > this.gameHeight) this.position.y = this.gameHeight - this.height;


        empire.forEach(tie => {
            const dist = Math.hypot(
              tie.position.x - this.position.x,
              tie.position.y - this.position.y
            );
            if (dist - tie.height - this.height < 1) {
              this.collision = true;
            }
        })

    }
}