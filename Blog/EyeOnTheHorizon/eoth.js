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