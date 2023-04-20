// Get the canvas element and its context
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Add an event listener to the file input element
document.getElementById("fileInput").addEventListener("change", function(event) {

  // Load the selected image onto the canvas
  var img = new Image();
  img.onload = function() {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
  }
  img.src = URL.createObjectURL(event.target.files[0]);
});
