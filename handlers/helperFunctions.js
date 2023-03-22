function HelperFunctions() {
  //Jquery click events. Notice that there is no this. at the
  //start we don't need to do that here because the event will
  //be added to the button and doesn't 'belong' to the object

  //event handler for the clear button event. Clears the screen
  select("#clearButton").mouseClicked(function () {
    //clear the active layer
    for (var i = 0; i < layerManager.layers.length; i++) {
      if (layerManager.layers[i].isActive) {
        layerManager.layers[i][0].clear();
        layerManager.layers[i][0].loadPixels();
      }
    }
    loadPixels();
  });

  //event handler for the save image button. saves the canvsa to the
  //local file system.
  select("#saveImageButton").mouseClicked(function () {
    for (var i = 0; i < layerManager.layers.length; i++) {
      if (layerManager.layers[i].isActive) {
        saveCanvas(layerManager.layers[i][0], "myCanvas", "png");
      }
    }
  });

  
}
