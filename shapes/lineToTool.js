function LineToTool(grid, layer, startMouseX, startMouseY, drawing, shapeProperties) {
	layer.strokeWeight(shapeProperties.strokeSlider.value);
	if (mouseIsPressed) {
	  if (startMouseX.x == -1) {
		startMouseX.x = mouseX;
		startMouseY.y = mouseY;
		drawing.value = true;
		layer.loadPixels();
	  } else {
		layer.updatePixels();
  
		// Calculate grid coordinates from mouse coordinates
		const startX = Math.floor(startMouseX.x / grid.cellSize);
		const startY = Math.floor(startMouseY.y / grid.cellSize);
		const endX = Math.floor(mouseX / grid.cellSize);
		const endY = Math.floor(mouseY / grid.cellSize);
  
		// Bresenham's line algorithm to get all points between start and end
		const dx = Math.abs(endX - startX);
		const dy = Math.abs(endY - startY);
		const sx = (startX < endX) ? 1 : -1;
		const sy = (startY < endY) ? 1 : -1;
		let err = dx - dy;
		let x = startX;
		let y = startY;
  
		while (true) {
		  // Set the shape at the grid coordinates to a new Point shape
		  grid.setShape(x, y, new Point(x, y));
  
		  if (x === endX && y === endY) break;
		  const e2 = 2 * err;
		  if (e2 > -dy) { err -= dy; x += sx; }
		  if (e2 < dx) { err += dx; y += sy; }
		}
		
		// Draw the line on the layer
		layer.stroke(0);
		layer.line(startX * grid.cellSize + grid.cellSize / 2, startY * grid.cellSize + grid.cellSize / 2, endX * grid.cellSize + grid.cellSize / 2, endY * grid.cellSize + grid.cellSize / 2);
	  }
	} else if (drawing.value) {
	  layer.loadPixels();
	  drawing.value = false;
	  startMouseX.x = -1;
	  startMouseY.y = -1;
	}
  }
  