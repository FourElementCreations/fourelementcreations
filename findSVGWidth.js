window.addEventListener("load", (event) => {
 
  var objectElement = document.getElementById("logo_svg");
  var svgDoc = objectElement.contentDocument;
  
  // Get the polygon element
  const polygon = svgDoc.querySelector('polygon');
  const circles = svgDoc.querySelectorAll('circle')

  // Get the points attribute value from the polygon element
  const pointsAttr = polygon.getAttribute('points');
  const cX = []; // Initialize as an empty array
  const cY = []; // Initialize as an empty array
  
  circles.forEach(circle => {
    const cx = circle.getAttribute('cx'); // Get cx attribute of the current circle
    const cy = circle.getAttribute('cy'); // Get cy attribute of the current circle
    
    cX.push(cx); // Push cx value into cX array
    cY.push(cy); // Push cy value into cY array
  })

console.log(cX)
console.log(cY)
  
  // Split the points attribute value into an array of points
  const pointsArray = pointsAttr.split(' ');


  const x = []
  const y = []

  // Loop throug h the points array to find min and max x, y coordinates
  pointsArray.forEach(point => {
    const [a, b] = point.split(',');
    const exA = parseFloat(a)
    const exB = parseFloat(b)
    x.push(exA)
    y.push(exB)
 })
  
const  minX = Math.min(...x)
const  minY = Math.min(...y)
const  maxX = Math.max(...x)
const  maxY = Math.max(...y)
  
var newX = (value) => {
  return value - 640;
};

var newY = (value) => {
  return value - 730;
};

const pentX = x.map(newX)
const pentY = y.map(newY)
const circX = cX.map(newX)
const circY = cY.map(newY)

console.log(pentX, pentY, circX, circY)
});

