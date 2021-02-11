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
        x: this.gameWidth / 2 - 100,
        y: this.gameHeight / 2,
    }
  }

  moveLeft() {
    this.position.x -= this.maxSpeed;
  }

  draw(ctx) {
    ctx.drawImage(this.ship, this.position.x, this.position.y, 100, 100);
  }

  update(dt, ctx) {
    if (!dt) return;
    this.position.x;
    this.position.y;
    this.draw(ctx);
    this.position.x -= this.maxSpeed;
  }
}
