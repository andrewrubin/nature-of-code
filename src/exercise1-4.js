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

// Custom distribution of random numbers
// I'm just creating an array of length equal to pixel-width of the canvas,
// then randomly picking which index to increment, based on a condition.

const width = ctx.canvas.width;
const height = ctx.canvas.height;
let values = Array(width).fill(0);

const options = [...document.querySelectorAll("input")];

const pickNumber = (exp) => {
  // first we'll generate two random numbers between 0 and 1,
  // and plug r1 into our distribution equation (y = x^2, for example).
  const r1 = Math.random();
  const r2 = Math.random();
  const y = r1 ** exp;

  // if r2 is less than the result of that first equation,
  // then that means r1 is a contender, and gets to LIVE!
  if (r2 < y) {
    return r1;
  }

  // if not, try again.
  return pickNumber(exp);
};

// basically a "reset" for stage.onUpdate,
// because we need to pass a new exponent whenever it changes.
const makeUpdateFn = (exponent) => {
  return (delta) => {
    const index = Math.round(pickNumber(exponent) * width);
    values[index]++;

    values.forEach((val, i) => {
      const value = val * 40;
      ctx.fillRect(i, height - value, 1, value);
    });
  };
};

options.forEach((opt, i) => {
  // initializer
  if (opt.checked) {
    const exponent = i + 1;
    stage.onUpdate = makeUpdateFn(exponent);
  }

  opt.addEventListener("change", function handleClick(e) {
    if (this.checked) {
      const exponent = i + 1;
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      values = values.map((v) => 0);
      stage.onUpdate = makeUpdateFn(exponent);
    }
  });
});
