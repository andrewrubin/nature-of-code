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
    this.width = size;
    this.height = size;
    this.ctx = ctx;
  }

  update() {
    const rand = Math.random();
    if (rand < 0.25) {
      this.x++;
    } else if (rand < 0.5) {
      this.x--;
    } else if (rand < 0.75) {
      this.y++;
    } else {
      this.y--;
    }
  }

  draw() {
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
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
  w.update();
  w.draw();
};
