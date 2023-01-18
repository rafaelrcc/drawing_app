//global variables that will store the toolbox colour palette
//amnd the helper functions
var toolbox = null;
var colourP = null;
var helpers = null;

//stack to store previous canvas states
var canvasStack = [];
var currentCanvas;
var gridDrawn = false;

function setup() {
    //create a canvas to fill the content div from index.html
    canvasContainer = select('#content');
    var c = createCanvas(canvasContainer.size().width, canvasContainer.size().height);
    c.parent("content");

    //create helper functions and the colour palette
    helpers = new HelperFunctions();
    colourP = new ColourPalette();


    //add the tools to the toolbox.
    background(255);

    currentCanvas = get();
    canvasStack.push(currentCanvas);
}

function draw() {



    if (!gridDrawn) {
        // Draw the gridlines
        var gridSize = 20; //size of the grid squares
        var gridColor = color(220,220,220,60); //color of the grid lines
  
        //set the stroke color and weight
        stroke(gridColor);
        strokeWeight(1);
  
        //draw horizontal lines
        for (var i = gridSize; i < height; i += gridSize) {
            line(0, i, width, i);
        }
  
        //draw vertical lines
        for (var i = gridSize; i < width; i += gridSize) {
            line(i, 0, i, height);
        }
        gridDrawn = true;
    }





    // helper functions

    loadPixels();
    colourP.update();


    

    handleDropdownShapes();
    handleDropdownPencil();






}

function mousePressed() {
    colourP.update();
    currentCanvas = get();
	canvasStack.push(currentCanvas);
}

function keyPressed() {
if (keyCode === 90 && keyIsDown(CONTROL))  { // Check if the "Ctrl+Z" keys are pressed
if (canvasStack.length > 1) { // Make sure there's something to undo
canvasStack.pop(); // Pop the current state off of the stack
currentCanvas = canvasStack[canvasStack.length - 1]; // Get the previous state
set(0, 0, currentCanvas); // Set the canvas to the previous state
gridDrawn = false;
}
}

}

