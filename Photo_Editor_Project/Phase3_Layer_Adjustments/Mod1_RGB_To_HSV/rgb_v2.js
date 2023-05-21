const cnv = document.getElementById(`color-sample`)
const cnvBars = document.getElementById(`color-bars`)
const ctx = cnv.getContext('2d');
const ctxBars = cnvBars.getContext('2d');

let canvasWidth = 400;
let canvasHeight = 400; 

function hsvToRgb(h, s, v) {
  const c = v * s;
  const hp = h / 60;
  const x = c * (1 - Math.abs((hp % 2) - 1));
  let r, g, b;

  if (hp >= 0 && hp < 1) {
    [r, g, b] = [c, x, 0];
  } else if (hp >= 1 && hp < 2) {
    [r, g, b] = [x, c, 0];
  } else if (hp >= 2 && hp < 3) {
    [r, g, b] = [0, c, x];
  } else if (hp >= 3 && hp < 4) {
    [r, g, b] = [0, x, c];
  } else if (hp >= 4 && hp < 5) {
    [r, g, b] = [x, 0, c];
  } else {
    [r, g, b] = [c, 0, x];
  }

  const m = v - c;
  return [r + m, g + m, b + m];
}

const hueSlider = document.getElementById('hue-slider');
const saturationSlider = document.getElementById('saturation-slider');
const valueSlider = document.getElementById('value-slider');

function updateColor() {
  const hue = hueSlider.value;
  const saturation = saturationSlider.value / 255 ;
  const value = valueSlider.value / 255 ;
 
  const [r, g, b] = hsvToRgb(hue, saturation, value);

  ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  ctxBars.fillStyle = "white";
  ctxBars.fillRect(0, 0, canvasWidth, canvasHeight);

  ctxBars.fillStyle = "red";
  ctxBars.fillRect(10, canvasHeight - r, 20, r);

  ctxBars.fillStyle = "green";
  ctxBars.fillRect(40, canvasHeight - g, 20, g);

  ctxBars.fillStyle = "blue";
  ctxBars.fillRect(70, canvasHeight - b, 20, b);
}

hueSlider.addEventListener('input', updateColor);
saturationSlider.addEventListener('input', updateColor);
valueSlider.addEventListener('input', updateColor);

updateColor();
