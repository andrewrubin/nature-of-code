class Stage {
  constructor(canvasElement) {
    this.canvas = canvasElement;
    this.ctx = this.canvas.getContext("2d");
    this.animating = true;

    this.onResize = this.onResize.bind(this);
    this.render = this.render.bind(this);
  }

  setStageSize() {
    this.canvas.width = this.canvas.clientWidth;
    this.canvas.height = this.canvas.clientHeight;
  }

  update(delta) {
    if (this.onUpdate) {
      this.onUpdate(delta);
    }
  }

  render(delta) {
    if (!delta) delta = 0;
    this.update(delta);
    if (this.animating) requestAnimationFrame(this.render);
  }

  onResize() {
    this.setStageSize();
    this.update();
  }

  init() {
    this.setStageSize();
    this.render();
    window.addEventListener("resize", this.onResize);
  }

  get ctx() {
    return this._ctx;
  }

  set ctx(value) {
    this._ctx = value;
  }

  get onUpdate() {
    return this._onUpdate || null;
  }

  set onUpdate(value) {
    this._onUpdate = value;
  }
}

export default Stage;
