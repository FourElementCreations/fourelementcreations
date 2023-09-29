const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 230
canvas.height = 60
//draw line
ctx.beginPath();
ctx.moveTo(34, 29);
ctx.lineTo(210, 29);
ctx.strokeStyle = '#666'
ctx.stroke();
//draw semi-circle
ctx.beginPath();
const centerX = canvas.width / 2;
const centerY = canvas.height / 2.5;
ctx.arc(centerX, centerY, 40, Math.PI, 0);
ctx.fillStyle = "#eec"
ctx.fill();
//write text
ctx.font = "48px Fuggles";
ctx.fillStyle = "#224";
ctx.fillText("Eye on the horizon", 0, 50);

function downloadCanvas() {
    const dataURL = canvas.toDataURL("image/png");
  
    // Create a temporary anchor element to trigger the download
    const a = document.createElement("a");
    a.href = dataURL;
    a.download = "canvas_image.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    console.log('function ran.')
  }
  
  // Add a button or trigger element to initiate the download
  const downloadButton = document.getElementById("downloadButton");
  downloadButton.addEventListener("click", downloadCanvas);