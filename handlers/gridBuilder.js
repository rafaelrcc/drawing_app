function createGrid(layer) {
  var gridColor = color(220, 220, 220, 60); //color of the grid lines

  stroke(gridColor);
  let gridButton = document.getElementById("gridbutton");

  gridButton.addEventListener("click", function () {
    event.preventDefault();
    event.stopPropagation();

    for (let x = 0; x <= layer.width; x += 20) {
      for (let y = 0; y <= layer.height; y += 20) {
        layer.stroke(200);
        layer.stroke(gridColor); // this sets the color of the gridlines with an alpha value of 50
        layer.strokeWeight(0.1);
        layer.line(x, 0, x, layer.height, 0);
        layer.line(0, y, layer.width, y, 0);
      }
    }
  });
}
