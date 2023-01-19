function pastelTool(strokeSlider) {
    var previousMouseX = -1;
    var previousMouseY = -1;
  
    this.draw = function () {
      if (mouseIsPressed) {
        if (previousMouseX == -1) {
          previousMouseX = mouseX;
          previousMouseY = mouseY;
        } else {
          strokeWeight(strokeSlider.value);
          for (var i = 0; i < 10; i++) {
            var offsetX = random(-10, 10);
            var offsetY = random(-10, 10);
            line(previousMouseX + offsetX, previousMouseY + offsetY, mouseX + offsetX, mouseY + offsetY);
          }
          previousMouseX = mouseX;
          previousMouseY = mouseY;
        }
      } else {
        previousMouseX = -1;
        previousMouseY = -1;
      }
    };
  }
  