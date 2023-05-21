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
  const red = (r + m) * 255
  const green = (g + m) * 255 
  const blue = (b + m) * 255
  const cnv = document.getElementById(`color-sample`)
  cnv.width = canvasWidth
  cnv.height = canvasHeight

  ctx = cnv.getContext('2d');
  ctx.fillStyle = `rgb(${red}, ${green}, ${blue})`;
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  // ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
  // ctx.fillRect(0, 0, canvasWidth, canvasHeight);

 
}

console.log(hsvToRgb(300, .5, .9)) 

function rgbToHsv(r, g, b) {
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const d = max - min;
    const v = (r + g + b) / 3;
    let h, s;

    if (d === 0) {
      h = 0;
      s = 0;
    } else {
      s = d;
      if (max === r) {
        h = (g - b) / d + (g < b ? 6 : 0);
      } else if (max === g) {
        h = (b - r) / d + 2;
      } else {
        h = (r - g) / d + 4;
      }
      h *= 60;
    }

    return [h, s, v];
  }



const hueSlider = document.getElementById('hue-slider');
const saturationSlider = document.getElementById('saturation-slider');
const valueSlider = document.getElementById('value-slider');

// Update the color whenever the slider values change
hueSlider.addEventListener('input', updateColor);
saturationSlider.addEventListener('input', updateColor);
valueSlider.addEventListener('input', updateColor);

function updateColor() {
  const hue = hueSlider.value;
  const saturation = saturationSlider.value / 255 ;
  const value = valueSlider.value / 255 ;
  hsvToRgb(hue, saturation, value)
}


// const changeColor = function(red, green, blue){
//   const cnv = document.getElementById(`color-sample`)
//   cnv.width = canvasWidth
//   cnv.height = canvasHeight
//   ctx = cnv.getContext('2d');
//   ctx.fillStyle = `rgb(${red}, ${green}, ${blue})`;
//   ctx.fillRect(0, 0, canvasWidth, canvasHeight);
//   console.log(red, green, blue)
// }

// changeColor(44, 67, 100)