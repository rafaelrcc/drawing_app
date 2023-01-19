function SelectionTool(shapes) {
    this.shapes = shapes;
    this.selectedShape = null;
}

SelectionTool.prototype.selectShape = function(x, y) {
    for (var i = 0; i < this.shapes.length; i++) {
        if (this.shapes[i].isInside(x, y)) {
            if (this.selectedShape) {
                this.selectedShape.selected = false;
            }
            this.shapes[i].selected = true;
            this.selectedShape = this.shapes[i];
        }
    }
}

SelectionTool.prototype.deselectShape = function() {
    if (this.selectedShape) {
        this.selectedShape.selected = false;
        this.selectedShape = null;
    }
}