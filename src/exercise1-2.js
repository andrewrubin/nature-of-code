import Stage from "./components/stage/stage";

// --------------
// initialization
// --------------
const stage = new Stage(document.querySelector("#canvas"));
const ctx = stage.ctx;
stage.init();

// --------------
// exercise code
// --------------
class Walker {
  constructor(ctx, x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.ctx = ctx;
  }

  update(delta) {
    const rand = Math.random();

    if (rand < 0.3) {
      // 30% chance of going right
      this.x++;
    } else if (rand < 0.6) {
      // 30% chance of going down
      this.y++;
    } else if (rand < 0.8) {
      // 20% chance of going left
      this.x--;
    } else {
      // 20% chance of going up
      this.y--;
    }

    // grow/shrink width
    this.size = Math.floor(Math.sin(delta * 0.001) * 5 + 6);
  }

  draw() {
    this.ctx.fillStyle = "rgba(255,255,255,.01)";
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

    ctx.fillStyle = "black";
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    this.ctx.closePath();
    this.ctx.fill();
  }
}

const w = new Walker(
  ctx,
  ctx.canvas.width * 0.5,
  ctx.canvas.height * 0.5,
  2,
  2
);
stage.onUpdate = (delta) => {
  w.update(delta);
  w.draw();
};
