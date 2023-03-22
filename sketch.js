///////////////////global variables that will store the toolbox colour palette///////

var toolbox = null;
var colourP = null;
var helpers = null;
var layerCount = 0;
var currentCanvas;
var gridDrawn = false;

//variables for shapes drawing//////////////////////////////////////////////////////

let startMouseX = { x: -1 };
let startMouseY = { y: -1 };
let drawing = { value: false };
let diameter = { d: 0 };
let grid;
let unselect = false;
let selectShapes;



document.querySelector("#selectButton").addEventListener("click", function () {
  unselect = true;
});



////////////////////////////////////////////////////////////////////////////////////

// variables for the dropdown shapes menu///////////////////////////////////////////
let shapeProperties = {
  shapeLinks: document.querySelectorAll(".dropdown-content a"),
  shapeId: "",
  selectedToolDiv: document.getElementById("selected-tool"),
  fillCheckbox: document.getElementById("fill-checkbox"),
  strokeSlider: document.getElementById("stroke-width"),
  isFillEnabled: false,
  eventsAdded: false,
  // color: currentColor
  events: {
    shapeLinksEvent: function () {
      if (!shapeProperties.eventsAdded) {
        shapeProperties.shapeLinks.forEach((link) => {
          link.addEventListener("click", (event) => {
            unselect = false;
            shapeProperties.eventsAdded = false;
            shapeProperties.shapeId = event.target.parentElement.id;
            shapeProperties.selectedToolDiv.innerHTML = shapeProperties.shapeId;
          });
        });
      }
    },
    fillCheckboxEvent: function () {
      shapeProperties.fillCheckbox.addEventListener("click", function () {
        shapeProperties.isFillEnabled = this.checked;
      });
    },
    strokeSliderEvent: function () {
      shapeProperties.strokeSlider.addEventListener("input", function () {});
    },
  },
};

////////////////////////Variables for the Pencil Menu////////////////////////////////

let drawingProperties = {
  drawingLinks: document.querySelectorAll(".dropdown-pencil a"),
  drawingId: "",
  selectedToolDiv: document.getElementById("selected-tool"),
  fillCheckbox: document.getElementById("fill-checkbox"),
  strokeSlider: document.getElementById("stroke-width"),
  isFillEnabled: false,
  colour: null,
  eventsAdded: false,
  events: {
    drawingLinksEvent: function () {
      if (!drawingProperties.eventsAdded) {
        drawingProperties.drawingLinks.forEach((link) => {
          link.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();
            drawingProperties.drawingId = event.target.parentElement.id;
            drawingProperties.selectedToolDiv.innerHTML =
              drawingProperties.drawingId;
            colourP.update();
          });
        });
      }
    },
    fillCheckboxEvent: function () {
      drawingProperties.fillCheckbox.addEventListener("click", function () {
        drawingProperties.isFillEnabled = this.checked;
      });
    },
    strokeSliderEvent: function () {
      drawingProperties.strokeSlider.addEventListener("input", function () {});
    },
  },
};

///////layering////////////////////////////////////////////////////////////////////

var layerManager = new LayerManager(layerCount);

addEventListener("click", function (event) {
  if (event.target.id == "add-layer-btn") {
    setTimeout(() => {
      layerManager.addNewLayer(" Layer ", layerCount);
      layerCount++;
    }, 100);
  }
});

document
  .getElementById("layer-list")
  .addEventListener("click", function (event) {
    if (event.target.id == "delete-button") {
      var id = event.target.parentNode.getAttribute("data-index");
      // if is the layer 0 don't delete it
      if (id != 0) {
        // add a timeout to allow time for elements to be removed
        setTimeout(() => {
          layerManager.removeLayer(id);
        }, 100);
      }
    } else if (event.target.className == "layer-item") {
      var index = event.target.getAttribute("layerId");
      layerManager.setActiveLayer(index);
    }
  });

////////////////////////////////////////////////////////////////////////////////////
let undoRequested = false;
let redoRequested = false;

function setup() {
    frameRate(30);
  //create a canvas to fill the content div from index.html
  canvasContainer = select("#content");
  createCanvas(800, 500).parent("content");

  // create helper functions and the colour palette
  helpers = new HelperFunctions();

  colourP = new ColourPalette();

  const rows = 400;
  const cols = 640;
  const cellSize = 12.5;

  grid = new Grid(rows, cols, cellSize);

  selectShapes = new ShapeSelector(grid, rows, cols);

  pixelDensity(1);

  // create layer 0 by default
  layerManager.addNewLayer(" Layer ", layerCount);

  layerCount++;


  // add event listeners to the undo and redo buttons
  document.getElementById("undoButton").addEventListener("click", function () {
    undoRequested = true;
    console.log("undo");
  }
  );

  document.getElementById("redoButton").addEventListener("click", function () {
    redoRequested = true;
    console.log("redo");
  }
  );



}

function draw() {
  clear();
  loadPixels();


  for (var i = 0; i < layerManager.layers.length; i++) {
    if (layerManager.layers[i].isActive) {
      shapeProperties.colour = colourP.currentColor; 
      colourP.update(layerManager.layers[i][0]);
      
      handleDropdownShapes(
        unselect,
        grid,
        layerManager.layers[i][0],
        startMouseX,
        startMouseY,
        drawing,
        diameter,
        shapeProperties
      );

      let update = i;

      // check if undo or redo has been requested
      if (undoRequested) {
        console.log("undo");
        undo(layerManager.layers[update][0]);
        undoRequested = false;
      } else if (redoRequested) {
        console.log("redo");
        redo(layerManager.layers[update][0]);
        redoRequested = false;
      }
      for (var j = 0; j < layerManager.layers.length; j++) {
        image(layerManager.layers[j][0], 0, 0);
      }
    }
  }
}



