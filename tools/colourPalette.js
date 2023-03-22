function ColourPalette() {
  const colorInput = document.getElementById("colourPicker");
  this.currentColor = color(0, 0, 0); // Initialize currentColor with a default value (black)

  colorInput.addEventListener("input", () => {
    this.currentColor = color(colorInput.value);
  });

  this.getColor = function () {
    return color(colorInput.value);
  };

  // UPDATE THE COLOUR PALETTE
  this.update = function (layer) {
    //get the current colour
    var currentColor = this.getColor();

    //set the colour of the colour palette
    layer.fill(currentColor);
    layer.stroke(currentColor);
  };
}
