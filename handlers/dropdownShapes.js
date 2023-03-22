let activeTool = null;

function handleDropdownShapes(
  unselect,
  grid,
  layer,
  startMouseX,
  startMouseY,
  drawing,
  diameter,
  shapeProperties
) {
  // If there is an active tool, do nothing
  if (activeTool) {
    return;
  }

  shapeProperties.events.shapeLinksEvent();

  if (unselect) {
    document.getElementById("selected-tool").innerHTML = "";
    drawSelection(layer);

    return;
  }

  switch (shapeProperties.shapeId) {
    case "circleTool":
      if (!shapeProperties.eventsAdded) {
        createSelectedToolHTML();
        shapeProperties.eventsAdded = true;
      }
      shapeProperties.events.fillCheckboxEvent();
      shapeProperties.strokeSlider = document.getElementById("stroke-width");
      shapeProperties.events.strokeSliderEvent();
      

      // Set activeTool to the CircleTool instance
      activeTool = new CircleTool(
        grid,
        layer,
        startMouseX,
        startMouseY,
        drawing,
        diameter,
        shapeProperties
      );

      break;

    case "triangleTool":
      if (!shapeProperties.eventsAdded) {
        createSelectedToolHTML();
        shapeProperties.eventsAdded = true;
      }
      shapeProperties.events.fillCheckboxEvent();
      shapeProperties.strokeSlider = document.getElementById("stroke-width");
      shapeProperties.events.strokeSliderEvent();
    
      // Set activeTool to the TriangleTool instance
      activeTool = new TriangleTool(
        grid,
        layer,
        startMouseX,
        startMouseY,
        drawing,
        diameter,
        shapeProperties
      );
      break;
    case "lineToTool":
      if (!shapeProperties.eventsAdded) {
        createSelectedToolHTML();
        shapeProperties.eventsAdded = true;
      }
      shapeProperties.events.fillCheckboxEvent();
      shapeProperties.strokeSlider = document.getElementById("stroke-width");
      shapeProperties.events.strokeSliderEvent();

      // Set activeTool to the LineToTool instance
      activeTool = new LineToTool(
        grid,
        layer,
        startMouseX,
        startMouseY,
        drawing,
        shapeProperties
      );

      break;
  }

  // When the tool is done, set activeTool to null
  activeTool = null;
}
