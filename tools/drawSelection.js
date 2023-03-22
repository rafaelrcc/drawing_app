function drawSelection(layer) {
    this.shapes = [];
    this.selectedShape = null;
    this.layer = layer;
    this.wasDrawn = false;
  
    this.coordX = Math.floor(mouseX / grid.cellSize);
    this.coordY = Math.floor(mouseY / grid.cellSize);
    let newSelectedShape = grid.getShape(this.coordX, this.coordY);
    if (mouseIsPressed) {
        // if the new selected shape is not equal to the previously selected shape,
        // reset the isSelected property of the previous shape and erase the square
        if (newSelectedShape !== this.selectedShape) {
          if (this.selectedShape && this.selectedShape.type === 'circle') {
            this.selectedShape.isSelected = false;
            // erase the selection square by redrawing the circle without it
            this.layer.noStroke();
            this.layer.fill(255);
            this.layer.rect(
              this.selectedShape.x - this.selectedShape.radius,
              this.selectedShape.y - this.selectedShape.radius,
              this.selectedShape.radius * 2,
              this.selectedShape.radius * 2
            );
          }
          this.selectedShape = newSelectedShape;
        }
    
        // if the shape is not null, add it to the shapes array
        if (this.selectedShape) {
          this.shapes.push(this.selectedShape);
        }
    
        // if the shape is a circle, draw a border around it
        if (this.selectedShape && this.selectedShape.type === 'circle') {
          // draw a border around the circle
          this.selectedShape.isSelected = true;
          this.layer.strokeWeight(1);
          this.layer.stroke(0);
          this.layer.noFill();
          this.layer.rect(
            this.selectedShape.x - this.selectedShape.radius,
            this.selectedShape.y - this.selectedShape.radius,
            this.selectedShape.radius * 2,
            this.selectedShape.radius * 2
          );

          this.wasDrawn = true;
        }
      } else {
        // if the mouse is released, unselect the shape
        if (this.selectedShape  === null && this.wasDrawn === true) {  

            this.layer.noStroke();
            this.layer.fill(255);
            this.layer.rect(
                this.selectedShape.x - this.selectedShape.radius,
                this.selectedShape.y - this.selectedShape.radius,
                this.selectedShape.radius * 2,
                this.selectedShape.radius * 2
            );

            

        }
        this.selectedShape = null;
      }
    }
