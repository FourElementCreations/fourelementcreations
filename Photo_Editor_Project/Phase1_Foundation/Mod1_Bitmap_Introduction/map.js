
    //test canvases 1,2, and 3
    const map1 = document.getElementById('map1');
    const ctx1 = map1.getContext('2d');
    const map2 = document.getElementById('map2');
    const ctx2 = map2.getContext('2d');
    
    const img = new Image();
    
    img.onload = function() {
      const sqWidth = img.width / 24;
      const sqHeight = img.height / 12;
      // Draw the image on map1
      ctx1.drawImage(img, 0, 0);
    
      //draw map2
      const averages = [];
      for (let y = 0; y < 12; y++) {
          for (let x = 0; x < 24; x++) {
            // Get the pixel data for this square
            const imgData = ctx1.getImageData(x * sqWidth, y * sqHeight, sqWidth, sqHeight);
            const data = imgData.data;
            let redSum = 0;
            let greenSum = 0;
            let blueSum = 0;
            for (let i = 0; i < data.length; i += 4) {
              redSum += data[i];
              greenSum += data[i + 1];
              blueSum += data[i + 2];
            }
            let pixelCount = data.length / 4;
            let redAverage = redSum / pixelCount;
            let greenAverage = greenSum / pixelCount;
            let blueAverage = blueSum / pixelCount;
            ctx2.fillStyle = `rgb(${redAverage}, ${greenAverage}, ${blueAverage})`;
            ctx2.fillRect(x * sqWidth, y * sqHeight, sqWidth, sqHeight);
            let valueAverage = (redAverage + greenAverage + blueAverage) / 3
            averages.push(valueAverage);
          }
        }

// Find the minimum and maximum values within the averages array
let minValue = Math.min(...averages);
let maxValue = Math.max(...averages);

console.log("Minimum value:", minValue);
console.log("Maximum value:", maxValue);

      

        ctx2.strokeStyle = '#888';
        let outline = (sX, sY, eX, eY) => {
            ctx2.beginPath();
            ctx2.moveTo(sX, sY);
            ctx2.lineTo(eX, eY);
            ctx2.stroke();
         }
         
         for (i = 1; i < 24; i++) {
            outline(i * sqWidth, 0, i * sqWidth, 300);
         }
         
         for (i = 1; i < 12; i++) {
            outline(0, i * sqHeight, 600, i * sqHeight);
         }
    };
    img.src = 'grid_world_600.png';