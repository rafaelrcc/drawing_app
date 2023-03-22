function handleDropdownDrawing(layer, startMouseX, startMouseY, drawing, diameter, drawingProperties) {
    drawingProperties.events.drawingLinksEvent();
  
    switch (drawingProperties.drawingId) {
      case "pencilTool":
        if (!drawingProperties.eventsAdded) {
          createSelectedToolHTML();
          drawingProperties.eventsAdded = true;
        }
        drawingProperties.events.fillCheckboxEvent();
        drawingProperties.strokeSlider = document.getElementById("stroke-width");
        drawingProperties.events.strokeSliderEvent();
        var freehandTool = new FreehandTool(layer, startMouseX, startMouseY, drawing, diameter, drawingProperties);
        freehandTool.draw();
        break;
  
      case "craquelTool":
        if (!drawingProperties.eventsAdded) {
          createSelectedToolHTML();
          drawingProperties.eventsAdded = true;
        }
        drawingProperties.strokeSlider = document.getElementById("stroke-width");
        drawingProperties.events.strokeSliderEvent();
  
        craquelPaint(drawingProperties);
        break;
  
      case "pastelTool":
        if (!drawingProperties.eventsAdded) {
          createSelectedToolHTML();
          drawingProperties.eventsAdded = true;
        }
        drawingProperties.strokeSlider = document.getElementById("stroke-width");
        drawingProperties.events.strokeSliderEvent();
  
        pastelTool(drawingProperties);
        break;
  
      default:
        console.log("Invalid drawing");
    }
  }