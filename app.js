// JavaScript code for drawing on the canvas
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// Set canvas size to cover the entire viewport
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var cx = canvas.width / 2
var cy = canvas.height / 2

var url = '4ec.jpg'
var img = new Image()
img.onload = function(){
    const sx = 20
    const sy = 100
    const sWidth = 400
    const sHeight = 300
    const dx = 0
    const dy = 0
    const dWidth = canvas.width
    const dHeight = canvas.height
    ctx.drawImage(img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)

        
var radius = Math.sqrt(cx * cx + cy * cy); // maximum distance from center to corners
    
// Create radial gradient
var gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
gradient.addColorStop(0, 'rgba(0, 0, 0, 0.4)'); // center is transparent
gradient.addColorStop(1, 'black'); // edges are black

const logo = new Image()
logo.src = 'FEC_Alphabet.svg'
logo.onload = function() {
    ctx.drawImage(logo, cx - logo.width, 100)
}
ctx.textAlign = 'center';
ctx.textBaseline = 'middle'; 
// Fill canvas with the gradient
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, canvas.width, canvas.height);
  // Set font style
ctx.font = '60px Arial';
ctx.fillStyle = 'white';       

  
  // Draw filled text
ctx.fillText('FOUR ELEMENT CREATIONS', cx, cy);

}
img.src = url
// Draw on the canvas (example)
