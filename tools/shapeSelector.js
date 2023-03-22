class ShapeSelector {
  constructor(grid, cellWidth, cellHeight) {
    this.grid = grid;
    this.cellWidth = cellWidth;
    this.cellHeight = cellHeight;
  }

  selectShapeAtMousePosition(mouseX, mouseY) {
    const gridX = Math.floor(mouseX / this.cellWidth);
    const gridY = Math.floor(mouseY / this.cellHeight);

    const shape = this.grid.getAdjacentShapes(gridX, gridY);

    console.log(shape, "shape");
    console.log(grid.setShape, "grid.setShape");

    if (shape !== null) {
      this.selectShape(shape);
    }
  }

  selectShape(shape) {
    shape.border = "3px solid black";
  }
}
