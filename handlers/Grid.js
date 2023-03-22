class Grid {
  constructor(rows, cols, cellSize) {
    this.rows = rows;
    this.cols = cols;
    this.cellSize = cellSize;
    this.grid = [];
    this.shapes = [];

    for (let i = 0; i < this.rows; i++) {
      let row = [];
      for (let j = 0; j < this.cols; j++) {
        row.push(null);
      }
      this.grid.push(row);
    }
  }

  getShape(x, y) {
    if (x < 0 || x >= this.rows || y < 0 || y >= this.cols) {
      console.log("out of bounds");
      return null;
    }
    console.log("in bounds");
    return this.grid[x][y];
  }

  setShape(x, y, shape) {
    if (x < 0 || x >= this.rows || y < 0 || y >= this.cols) {
      return;
    }
    this.grid[x][y] = shape;
    this.shapes.push(shape); // add the shape to the shapes array
  }

  getAdjacentShapes(x, y) {
    const shape = this.getShape(x, y);
    if (!shape) {
      return null;
    }

    return shape;
  }

  deleteShape(x, y) {
    if (x < 0 || x >= this.rows || y < 0 || y >= this.cols) {
      // The given x/y values are out of bounds, so don't set the shape
      return;
    }
  }
}
