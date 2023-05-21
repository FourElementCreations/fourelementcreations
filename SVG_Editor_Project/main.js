// Get references to the buttons and the SVG workspace
const penToolButton = document.getElementById('pen-tool')
const selectToolButton = document.getElementById('select-tool');
const brushToolButton = document.getElementById('brush-tool');
const workspace = document.getElementById('workspace');
let isDrawing = false;
let isDragging = false;
let currentPath
let sequence

let tools = [
    {
        name: 'pen',
        button: penToolButton,
        mouseCall: {
            mousedown: penToolMouseDown,
            mousemove: penToolMouseMove,
            mouseup: penToolMouseUp
        }
     },
     {
        name: 'select',
        button: selectToolButton,
        mouseCall: {
            mousedown: selectToolMouseDown,
            mousemove: selectToolMouseMove,
            mouseup: selectToolMouseUp
        }
     },
     {
        name: 'brush',
        button: brushToolButton,
        mouseCall: {
            mousedown: brushToolMouseDown,
            mousemove: brushToolMouseMove,
            mouseup: brushToolMouseUp
        }
     }  
    ]

tools.forEach((tool) => {
    tool.button.addEventListener('click', () => activateTool(tool.name));
});
      

let activeTool = null;
      
function activateTool(tool) {
  if (activeTool === null) {
    activeTool = tool;
  } else if (activeTool !== null && activeTool !== tool) {
    const activeToolObj = tools.find((t) => t.name === activeTool);
    if (activeToolObj) {
      activeToolObj.button.classList.remove('active')
      const mouseCall = activeToolObj.mouseCall;
      workspace.removeEventListener('mousedown', mouseCall.mousedown);
      workspace.removeEventListener('mousemove', mouseCall.mousemove);
      workspace.removeEventListener('mouseup', mouseCall.mouseup);
    }
    activeTool = tool;
  }

  const currentTool = tools.find((t) => t.name === tool);
  if (currentTool) {
    currentTool.button.classList.add('active')
    const mouseCall = currentTool.mouseCall;
    workspace.addEventListener('mousedown', mouseCall.mousedown);
    workspace.addEventListener('mousemove', mouseCall.mousemove);
    workspace.addEventListener('mouseup', mouseCall.mouseup);
  }
}
      
let anchorPoints = [];

let pathCount = 0


// Pen tool event handlers
function penToolMouseDown(event) {
    const { offsetX, offsetY } = event;
    console.log(isDrawing)
    if (!isDrawing) {
      isDrawing = true;
  
      // Create a new path element
      currentPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      pathCount++
  
      // Set the initial path attributes
      currentPath.setAttribute('fill', 'none');
      currentPath.setAttribute('stroke', 'white');
      currentPath.id = `path-${pathCount}`
      
  
      // Set the starting point of the path
      
      const initialPoint = `M${offsetX} ${offsetY}`;
      currentPath.setAttribute('d', initialPoint);
      console.log(currentPath)
      console.log(isDrawing)
      // Append the path to the SVG workspace
      workspace.appendChild(currentPath);
      anchorPoints.push(initialPoint)
      // Store the initial anchor point
      initialAnchor = [offsetX, offsetY];
      console.log(isDrawing)

    } else if (isDrawing) {
      currentPath = document.getElementById(`path-${pathCount}`)
      const subsequentPoint = `L${offsetX} ${offsetY}`  
      anchorPoints.push(subsequentPoint)
      sequence = anchorPoints.join('')
      currentPath.setAttribute('stroke-width', '2');
      currentPath.setAttribute('d', sequence)
      console.log(sequence)
    } else if (!isDragging) {
      isDragging = true;
  
      // Add a bezier curve segment to the path
    //   const { offsetX, offsetY } = event;
      const lastPoint = currentPath.getAttribute('d');
      const newSegment = ` Q${offsetX},${offsetY}`;
      currentPath.setAttribute('d', lastPoint + newSegment);
    }
  }
  
  function penToolMouseMove(event) {
    if (!isDrawing || !isDragging) return;
  
    // Update the bezier curve segment with the current mouse coordinates
    const { offsetX, offsetY } = event;
    const lastPoint = currentPath.getAttribute('d');
    const currentSegment = `,${offsetX},${offsetY}`;
    currentPath.setAttribute('d', lastPoint + currentSegment);
  }
  
  function penToolMouseUp(event) {
    if (!isDrawing) return;
  
    if (!isDragging) {
      if (initialAnchor) {
        // Close the path by adding a line segment to the initial anchor point
        const [initialX, initialY] = initialAnchor;
        const lastPoint = currentPath.getAttribute('d');
        const closingSegment = ` L${initialX},${initialY} Z`;
        currentPath.setAttribute('d', lastPoint + closingSegment);
      }
    }
  
    // isDrawing = false;
    isDragging = false;
    currentPath = null;
    initialAnchor = null;
  }
function brushToolMouseDown(event) {
  // Handle the pen tool mousedown event
  isDrawing = true;
  console.log(isDrawing)
  // Create a new path element
  currentPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');

  // Set the initial path attributes
  currentPath.setAttribute('fill', 'none');
  currentPath.setAttribute('stroke', 'white');
  currentPath.setAttribute('stroke-width', '2');

  // Set the starting point of the path
  const { offsetX, offsetY } = event;
  const initialPoint = `M${offsetX},${offsetY}`;
  currentPath.setAttribute('d', initialPoint);

  // Append the path to the SVG workspace
  workspace.appendChild(currentPath);
}

function brushToolMouseMove(event) {
  // Handle the pen tool mousemove event
  if (!isDrawing) return;

  // Add new path segment to the existing path
  const { offsetX, offsetY } = event;
  const pathData = currentPath.getAttribute('d');
  const newSegment = ` L${offsetX},${offsetY}`;
  currentPath.setAttribute('d', pathData + newSegment);
}

function brushToolMouseUp(event) {
  // Handle the pen tool mouseup event
  isDrawing = false;
  currentPath = null;
}

// select tool event handlers
function selectToolMouseDown(event) {
  // Handle the select tool mousedown event
  
}

function selectToolMouseMove(event) {
  // Handle the select tool mousemove event
}

function selectToolMouseUp(event) {
  // Handle the select tool mouseup event
}
