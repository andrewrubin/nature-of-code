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

    // random direction
    if (rand < 0.25) {
      this.x++;
    } else if (rand < 0.5) {
      this.x--;
    } else if (rand < 0.75) {
      this.y++;
    } else {
      this.y--;
    }

    // grow/shrink width
    this.size = Math.floor(Math.sin(delta * 0.001) * 5 + 6);
  }

  draw() {
    this.ctx.fillStyle = "rgba(255,255,255,0.05)";
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
