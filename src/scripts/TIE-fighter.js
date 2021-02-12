import Projectile from "./projectiles";

export default class TIE {
  constructor(gameWidth, gameHeight, tie_fighter) {
    this.width = 150;
    this.height = 30;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.ship = tie_fighter;

    this.maxSpeed = 8;

    this.position = {
        x: this.gameWidth,
        y: Math.random() * this.gameHeight,
    }
  }

  moveLeft() {
    this.position.x -= this.maxSpeed;
  }

  draw(ctx) {
    ctx.drawImage(this.ship, this.position.x, this.position.y, 75, 75);
  }

  update(dt, ctx, projectiles) {
    if (!dt) return;
    this.position.x;
    this.position.y;
    this.draw(ctx);
    this.position.x -= this.maxSpeed;

    projectiles.forEach(projectile => {
      const dist = Math.hypot(projectile.x - this.position.x, projectile.y - this.position.y);
      
    });
  }
}
