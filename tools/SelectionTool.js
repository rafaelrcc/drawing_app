function SelectionTool(x, y) {
    // Deselect the previous shape
    if (activeSelectionTool && activeSelectionTool.selectedShape) {
      activeSelectionTool.selectedShape.isSelected = false;
    }
  
    this.shapes = [];
    this.selectedShape = null;
    this.selectedShape = grid.getShape(x, y);
  
    // if the shape is not null, add it to the shapes array
    if (this.selectedShape) {
      this.shapes.push(this.selectedShape);
    }
  
    // if the shape is a circle, draw a border around it
    if (this.selectedShape && this.selectedShape.type === 'circle') {
      // draw a border around the circle
      this.selectedShape.isSelected = true;
      console.log(this.selectedShape.isSelected);
  
      // draw a border around the circle
      layer.noFill();
      layer.ellipse(this.selectedShape.x, this.selectedShape.y, this.selectedShape.radius * 2, this.selectedShape.radius * 2);
    }
  
    // Update the active selection tool
    activeSelectionTool = this;
  }
  