let canvasWidth = 600;
let canvasHeight = 400; 
let bit = [0, 1];
let bitValue = bit.length;
let byte = 8;
let byteValue = bitValue ** byte;
let byteArray = [];
for (let i = 0; i < byte; i++) {
   byteArray.push(bit);
}
let totalColor = byteValue ** 3;
let randomNumber = Math.random();
let randomByte;
let r = [];
let g = [];
let b = [];
for (i = 0; i < byteValue; i++) {
   r.push(i);
   g.push(i);
   b.push(i);
}
let columnWidth = 10;
let rowHeight = 10;
let hoRatio = canvasWidth / columnWidth;
let verRatio = canvasHeight / rowHeight;
let pixNum = hoRatio * verRatio;
let x = 0;
let myName = 'Layla Michael Osterhus';


function Message(mess) {
   const printDiv = document.getElementById(`chalkboard`);
   const linebreak = document.createElement('br');
   const newMessage = document.createElement("p");
   newMessage.textContent = mess;   
   printDiv.appendChild(newMessage);
   printDiv.appendChild(linebreak);
}

function C(i) {
   const printCanv = document.getElementById(`chalkboard`)
   const createCanvas = document.createElement('canvas')
   createCanvas.id = i
   createCanvas.width = canvasWidth
   createCanvas.height = canvasHeight
   printCanv.appendChild(createCanvas)
   Message('')
   x++
   const cnv = document.getElementById(i);
   ctx = cnv.getContext('2d');
   ctx.fillStyle = "white";
   ctx.strokeStyle = 'white'
   ctx.font = "bold 18px Arial";
   ctx.fillText(i, 4, 18)
}

function picture(path, w) {
   const putImg = document.getElementById(`chalkboard`)
   const newImg = document.createElement('img')
   newImg.src = path
   newImg.width = w
   putImg.appendChild(newImg)
}

function nLink(path) {
   const putLink = document.getElementById(`chalkboard`)
   const linkContainer = document.createElement("div");
   linkContainer.width = 600
   const newLink = document.createElement('a')
   newLink.href = path
   newLink.textContent = path
   linkContainer.appendChild(newLink)
   putLink.appendChild(linkContainer)
}

function pixel(x, y, red, green, blue, opacity) {
   ctx.fillStyle = `rgba(${red}, ${green}, ${blue}, ${opacity})`;
   ctx.fillRect(x, y, 10, 10);
}

function Speckle() {
   let delta = [Math.floor(Math.random() * 10) + 170];
   let epsilon = [Math.floor(Math.random() * 10) + 200];
   let zeta = [Math.floor(Math.random() * 10) + 246];
   ctx.shadowBlur = 12;
   ctx.shadowBlur = 4;
   ctx.shadowBlur = 8;
   ctx.shadowColor = `rgb(${delta}, ${epsilon}, ${zeta})`;
   let xVariety = Math.floor(Math.random() * hoRatio) * columnWidth;
   let yVariety = Math.floor(Math.random() * verRatio) * rowHeight;
   let oVariety = Math.random() * .8;

   pixel(xVariety, yVariety, r[delta], g[epsilon], b[zeta], oVariety);
}


Message(`The bitmap image below is made using JavaScript
and the HTML canvas element. I say "is made" not "was made" because the colors of the 
squares are randomly generated everytime the browser window loads. Refresh
your web browser and you will see a different arrangement.`)
Message(`This product of code was made for illustrating how bitmap images work 
and during the course of the presentation I will explain the code I used to build 
it as a way of explaining bitmap.`)
C(x)
for (let i = 0; i < hoRatio; i++) {
   for (let j = 0; j < verRatio; j++){
      let alpha = [Math.floor(Math.random() * 30) + 40];
      let beta = [Math.floor(Math.random() * 10) + 5];
      let gamma = [Math.floor(Math.random() * 10) + 5];
      pixel(i * columnWidth, j * rowHeight, r[alpha], g[beta], b[gamma], 1);
   }
  
}

for (let i = 0; i < 16; i++) {
   Speckle()
}

Message(`You might think by the name that a bitmap image is an image
produced using a map of bits, but not so fast.  Originally, that is what the word 
meant, and technically it still does though it would more appropriate now to call 
it a map of bytes.`)
Message(`Bitmap images account for most but not all images you see
on the internet.  They are also known as raster images, and come in many file types such as
JPEG, PNG, GIF, and BMP. The other type of digital image you might see are called 'vector' 
images which work in a fundamentally different way, but I am not here to explain 
vector images. In short, I will say that the difference in the output of each type 
is that when you enlarge a bitmap image on a screen, at a certain point the image 
will begin to "pixelate" whereas a vector image does not.`)
Message(`Both bitmap images below are displayed at a width of 300 pixels (px)
   on the screen but both have been resized for the screen
   from their original pixel dimensions: 335px x 335px for the left, 24px x 24px 
   for the right.  `)
picture('self-portrait.jpg', 300)
picture('self-portrait_resize2.jpg', 300)
Message(`Pointing out this pixelation helps to demonstrate how bitmap images work. 
   Pixelation means "when a picture is enlarged to the point 
   that the pixels become visible". This though can be confusing because
   while 'pixel' can mean the smallest element of a digital image, it also refers
   to the smallest unit of a lit screen for displaying images such as on a computer monitor.`)
Message(`To put it another way, though the image on right is being diplayed at 300px wide,
   the file it's drawing from has only 24px width of data to provide, meaning the pixels 
   from the file are being drawn by just over 12 screen pixels each.`)
Message(`The tiny image below is the same as the one on right above shown at it's original
   dimensions, meaning each pixel in the bitmap grid is being displayed by one pixel of the 
   screen.`)
picture('self-portrait_resize2.jpg', 24)
Message('')
Message('A bitmap image is mapped using a grid like the one below where each square represents 1 pixel.')

C(x)
ctx.strokeStyle = '#ffffff';
// let columns = (c) => {
//    ctx.beginPath();
//    ctx.moveTo(c, 0);
//    ctx.lineTo(c, canvasHeight);
//    ctx.stroke();
// }

// let rows = (y) => {
//    ctx.beginPath();
//    ctx.moveTo(0, y);
//    ctx.lineTo(canvasWidth, y);
//    ctx.stroke();
// }

let lines = (sX, sY, eX, eY) => {
   ctx.beginPath();
   ctx.moveTo(sX, sY);
   ctx.lineTo(eX, eY);
   ctx.stroke();
}

for (i = 1; i < hoRatio; i++) {
   lines(i * columnWidth, 0, i * columnWidth, canvasHeight);
}

for (i = 1; i < verRatio; i++) {
   lines(0, i * rowHeight, canvasWidth, i * rowHeight);
}



Message(`In the past it was not unusual for each pixel to be ascribed only one bit of data.
   Indeed, there may be instances where this is still the case. Nowadays, however, 
   it is common to see pixels given 3 or 4 bytes of data.`)

Message(`So what is a bit?`)
Message(`A bit is the smallest piece of data used in computer processing. A bit links 
to computer hardware which in principle is like a light switch: it is either on or off.
Hence a bit has two possible values usually depicted as 0, and 1. `)
picture(`bit_byte.png`, 400)
Message(`One byte = ${byte} bits. Given that the variable I've called 'bitValue' will equal 2 
(the length of the 'bit' array), then byteValue equals ${byteValue} possible values for a byte.`)
Message(`Now, I can make an array for byte like I have for bit, but I don't want to 
 type a bunch of 0s and 1s.
So, I created an empty byteArray, then used a for loop so that while the iterator 'i' is less
than the value of 'byte' it will push a copy of the 'bit' array into the byteArray, yielding
the result below`)
picture(`byteArray.png`, 400)

C(x)
ctx.fillText("byteArray contains: ", canvasWidth / 2, canvasHeight / 2 - 40);
for (let i = 0; i < byte; i++) {
   ctx.fillText(`[${byteArray[i]}]`, (canvasWidth / 10) * i + 90, canvasHeight / 2);
}

Message(`An array created dynamically can be used in the code but is not written 
to the file using the push() method.`)
console.log(byteArray);
let randomByteArray = [];

for (let i = 0; i < byte; i++) {
   let dice = Math.floor(Math.random() + .5)
   randomByteArray.push(byteArray[i][dice]);
}

C(x)

ctx.fillText(`${randomByteArray.join("")}`, 50, 20);

// comment out previous for loop first



Message(`JavaScript can generate a random number between 0 and 1`)
Message(`Because I'm using JavaScript to append this text to the page,
         this randomly generated number...`)
Message(`${randomNumber}`)
Message(`...will update
everytime you refresh the page.`)



let randomeByteGenerator = () => {
   for (let i = 0; i < byte; i++) {
      let dice = Math.floor(Math.random() + .5)
      randomByteArray.push(byteArray[i][dice]);
      randomByte = randomByteArray.join("");
   }
   randomByteArray = [];
   return randomByte;
}

let byteWidth = 100;
let byteHeight = 20;
let wRatio = canvasWidth / byteWidth;
let hRatio = canvasHeight / byteHeight;

C(x)

for (let iota = 0; iota < wRatio; iota++) {
   for (let yoda = 1; yoda <= hRatio; yoda++)
   ctx.fillText(`${randomeByteGenerator()}`, iota * byteWidth + 20, 
   yoda * byteHeight);
}

Message(`${wRatio * hRatio} randomly generated bytes.`)








Message(`Bitmap is a type of digital image, also called raster. 
   It is the image type typically associated with digital photos.
   There are several bitmap file types including JPEG, PNG, TIF, 
   and others.`)

Message(`The above illustration represents an image that is ${hoRatio} 
pixels wide by ${verRatio} pixels high.  Meaning that the image 
has ${hoRatio * verRatio} pixels. `)

C(x)



// let blueLImit = b.splice(50, 190);
// console.log(b);

Message(`  Originally bitmap images had 
  one bit per pixel for the color, hence the name "BITmap"`)
Message(`Now pixels in bitmap images are given 3 BYTES of data (or in some cases 4)
  one byte per color channel in the RGB color system.  In the current
  system the Red, Green, and Blue channel each have a range of ${byteValue} 
  values which totals a range of ${totalColor.toLocaleString()} colors.`)


for (let i = 0; i < hoRatio; i++) {
   for (let j = 0; j < verRatio; j++){
      let alpha = [Math.floor(Math.random() * 30) + 40];
      let beta = [Math.floor(Math.random() * 10) + 5];
      let gamma = [Math.floor(Math.random() * 10) + 5];
      pixel(i * columnWidth, j * rowHeight, r[alpha], g[beta], b[gamma], 1);
   }
  
}

for (let i = 0; i < 16; i++) {
   Speckle()
}
Message(`This presentation on BITMAP is being given to you by ${myName}!!`)