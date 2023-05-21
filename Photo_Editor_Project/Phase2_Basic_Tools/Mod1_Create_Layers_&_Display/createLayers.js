class Layer {
    constructor(name, width, height) {
      this.name = name;
      this.width = width;
      this.height = height;
      this.canvas = document.createElement('canvas');
      this.canvas.width = width;
      this.canvas.height = height;
      this.ctx = this.canvas.getContext('2d');
      this.visible = true;
    }
  }
  
  const layers = [];

  function addLayer(name, width, height) {
    const layer = new Layer(name, width, height);
    layers.push(layer);
    // Add the layer to the UI
    // ...
  }
  

  function drawLayers() {
    for (const layer of layers) {
      ctx.drawImage(layer.canvas, 0, 0);
    }
  }
  
  function toggleLayerVisibility(layer) {
    layer.visible = !layer.visible;
    // Redraw the canvas
    drawLayers();
  }
  
  function moveLayerUp(layer) {
    const index = layers.indexOf(layer);
    if (index > 0) {
      layers.splice(index, 1);
      layers.splice(index - 1, 0, layer);
      // Redraw the canvas
      drawLayers();
    }
  }
  
  function moveLayerDown(layer) {
    const index = layers.indexOf(layer);
    if (index < layers.length - 1) {
      // Swap the layer with the one below it
      layers[index] = layers[index + 1];
      layers[index + 1] = layer;
      // Redraw the layers
      drawLayers();
    }
  }
  
  

  
  