// Object to store histories and undo stacks for each layer
let layerHistories = {};

// Function to add changes to the history array for a specified layer
function addToHistory(change, layer) {
  // If the history array doesn't exist yet for this layer, create it
  if (!layerHistories[layer.layerID]) {
    layerHistories[layer.layerID] = {
      history: [],
      undoStack: [],
    };
  }
  // Add the change to the history array
  layerHistories[layer.layerID].history.push({
    ...change,
    historyID: layer.layerID, // Add the historyID to the change object
  });
}

// Function to undo the most recent change for a specified layer
function undo(layer) {
  console.log("undoing", layer.layerID);
  if (
    layerHistories[layer.layerID] &&
    layerHistories[layer.layerID].history.length > 0
  ) {
    const change = layerHistories[layer.layerID].history.pop();
    layerHistories[layer.layerID].undoStack.push(change);

    // Delete all shapes with the same id as the change shape
    const shapeIdToDelete = change.shape.id;
    layerHistories[layer.layerID].history = layerHistories[
      layer.layerID
    ].history.filter((change) => change.shape.id !== shapeIdToDelete);

    redrawCanvas(layer, layer.layerID);
  }
}
// Function to redo the most recent change that was undone for a specified layer
function redo(layer) {
  console.log("redoing", layer.layerID);
  if (
    layerHistories[layer.layerID] &&
    layerHistories[layer.layerID].undoStack.length > 0
  ) {
    const change = layerHistories[layer.layerID].undoStack.pop();
    const shapeIdToRedo = change.shape.id;

    // Push the initial change back to the history array
    layerHistories[layer.layerID].history.push(change);

    // Filter out all the changes with the same id and push them to the history array
    const changesToRedo = layerHistories[layer.layerID].undoStack.filter(
      (change) => change.shape.id === shapeIdToRedo
    );
    layerHistories[layer.layerID].undoStack = layerHistories[
      layer.layerID
    ].undoStack.filter((change) => change.shape.id !== shapeIdToRedo);

    // Push all changes to redo back to the history array
    changesToRedo.forEach((changeToRedo) => {
      layerHistories[layer.layerID].history.push(changeToRedo);
    });

    redrawCanvas(layer, layer.layerID);
  }
}

// Function to redraw all the shapes on a specified layer based on the current state of the history array
function redrawCanvas(layer, layerID) {
  // Clear the canvas
  layer.clear();
  console.log("redrawing", layer.layerID);

  // Redraw all the shapes on the canvas based on the current state of the history array for the specified layer
  if (layerHistories[layerID]) {
    const history = layerHistories[layerID].history;
    for (let i = 0; i < history.length; i++) {
      const change = history[i];
      // Only redraw shapes for the current layer
      if (change.historyID === layerID) {
        // If the change is an "add" operation, draw the shape
        // If the change is an "add" operation, draw the shape
        if (change.type === "add") {
          drawShape(change.shape, layer);
          // If the change is a "delete" operation, delete the shape
        } else if (change.type === "delete") {
          deleteShape(change.shape, layer);
        }
      }
    }
  }
}

// Function to draw a shape on a specified layer
function drawShape(shape, layer) {
  console.log("drawing", layer.layerID);

  // Set fill status based on the shape's isFilled property
  if (shape.isFilled) {
    layer.fill(shape.fillColour);
  } else {
    layer.noFill();

  }

  // stroke colour based on the shape's strokeColour property
  layer.stroke(shape.strokeColour);
  layer.strokeWeight(shape.strokeWeight);

  console.log(shape.strokeWeight, "strokeWeight");

  // If the shape is a circle, draw it using the "ellipse" method
  if (shape.type === "circle") {
    layer.ellipse(shape.x, shape.y, shape.radius * 2, shape.radius * 2);
    // If the shape is a square, draw it using the "rect" method
  } else if (shape.type === "square") {
    layer.rect(shape.x, shape.y, shape.size, shape.size);
  }
}

function deleteShape(shape, layer) {
  console.log("deleting", layer.layerID);
  if (shape.type === "circle") {
    layer.ellipse(shape.x, shape.y, shape.radius * 2, shape.radius * 2);
  } else if (shape.type === "square") {
    layer.rect(shape.x, shape.y, shape.size, shape.size);
  }
}

function removeShape(shape, layerID) {
  if (layerHistories[layerID]) {
    layerHistories[layerID].history = layerHistories[layerID].history.filter(
      (change) => !(change.shape.id === shape.id && change.type === "add")
    );
    redrawCanvas(layer, layerID);
  }
}
