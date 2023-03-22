let shapeIdCounter = 0;
let sharedShapeId = null;
let shouldGenerateNewId = true;
function CircleTool(
  grid,
  layer,
  startMouseX,
  startMouseY,
  drawing,
  diameter,
  shapeProperties
) {
  if (!shapeProperties.isFillEnabled) {
    layer.noFill();
  }
  else {
    layer.fill(shapeProperties.colour);
  }


  let centerX = mouseX;
  let centerY = mouseY;
  const coordX = Math.floor(mouseX / grid.cellSize);
  const coordY = Math.floor(mouseY / grid.cellSize);

  let isSelected = false;
  let isMousePressed = false;
  console.log("isMousePressed", isMousePressed);

  const radius = 50;

  layer.strokeWeight(shapeProperties.strokeSlider.value);
  layer.stroke(shapeProperties.colour); 
  
  if (mouseIsPressed && !drawing.value) {
    drawing.value = true;
    centerX = mouseX;
    centerY = mouseY;

    // Loop through all the cells in the grid
    for (let x = 0; x < grid.cols; x++) {
      for (let y = 0; y < grid.rows; y++) {
        // Calculate the distance between the cell center and the circle center
        const dx = x * grid.cellSize + grid.cellSize / 2 - centerX;
        const dy = y * grid.cellSize + grid.cellSize / 2 - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Check if the cell falls inside the circle
        if (distance <= radius) {
          // Set the shape of the cell to a Circle shape
          if (shouldGenerateNewId) {
            sharedShapeId = shapeIdCounter++;
            shouldGenerateNewId = false;
          }

          const shape = {
            id: sharedShapeId,
            type: "circle",
            x: centerX,
            y: centerY,
            radius: radius,
            isSelected: isSelected,
            isFilled: shapeProperties.isFillEnabled,
            strokeColour: shapeProperties.colour,
            fillColour: shapeProperties.colour,
            strokeWeight: shapeProperties.strokeSlider.value
          };

          console.log("shape", shape);

          grid.setShape(x, y, shape);
          if (
            grid.getShape(coordX, coordY) &&
            grid.getShape(coordX, coordY).type === "circle"
          ) {
            unselect = true;
          }

          // Add the shape to the history array
          addToHistory(
            {
              type: "add",
              shape: shape,
            },
            layer
          );

          console.log("history", history);

          // Update the isSelected property of all the other shapes
          for (let i = 0; i < grid.shapes.length; i++) {
            const s = grid.shapes[i];
            if (s !== shape && s.isSelected) {
              s.isSelected = false;
            }
          }
        }
      }
    }

    layer.ellipse(centerX, centerY, radius * 2, radius * 2);
    setTimeout(() => {
      shouldGenerateNewId = true;
    }, 500);

    
  } else if (!mouseIsPressed && drawing.value) {
    // Select the shape if the mouse is released
    const shape = grid.getShape(coordX, coordY);
    if (shape && shape.type === "circle") {
      // check if shape is a circle
      shape.isSelected = true;
    }

    drawing.value = false;
    handleDropdownShapes.unselect = true; // set unselect to true
  }
}


function mousePressed() {
  isMousePressed = true;
  console.log("isMousePressed", isMousePressed);
}

function mouseReleased() {
  isMousePressed = false;
  console.log("isMousePressed", isMousePressed);
}
