function TriangleTool(layer, startMouseX, startMouseY, drawing, diameter) {
  if (shapeProperties.isFillEnabled) {
    layer.fill(0);
  } else {
    layer.noFill();
  }

  layer.strokeWeight(shapeProperties.strokeSlider.value);

  if (mouseIsPressed) {
    if (startMouseX.x == -1) {
      startMouseX.x = mouseX;
      startMouseY.y = mouseY;
      drawing.value = true;
      layer.loadPixels();
    } else {
      layer.updatePixels();
      diameter.d = dist(startMouseX.x, startMouseY.y, mouseX, mouseY) * 2;
      layer.triangle(startMouseX.x, startMouseY.y, startMouseX.x + diameter.d, startMouseY.y, startMouseX.x + (diameter.d / 2), startMouseY.y - diameter.d);
    }
  } else if (drawing.value) {
    layer.loadPixels();
    drawing.value = false;
    startMouseX.x = -1;
    startMouseY.y = -1;
  }
}
