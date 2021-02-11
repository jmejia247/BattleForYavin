export default class Projectile {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speed = 35;

        this.width = 18;
        this.height = 8;
    }

    draw(ctx) {
        // debugger
      ctx.fillStyle = "salmon";
      //   ctx.beginPath();
      //   ctx.arc(this.x, this.y, 300, Math.PI * 2, false);
      //   ctx.fill();
      // ctx.fillStyle = '#f00';
      ctx.fillRect(this.x + 100, this.y + 45, this.width, this.height);
    }

    update(ctx) {
        this.draw(ctx);
        this.x += this.speed;
    }
}