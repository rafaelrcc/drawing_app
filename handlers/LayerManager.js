class LayerManager {
  constructor(id) {
    this.layers = [];
    this.activeLayer = null;
    this.layerID = id;

    // document.getElementById('layer-mini-canvas').appendChild(this.miniCanvas);
  }

  // function to find the index of the layer with the specified id
  findLayerIndex(id) {
    for (let i = 0; i < this.layers.length; i++) {
      if (this.layers[i][0].layerID == id) {
        return i;
      }
    }
    // the layer must be the last one
    return this.layers.length - 1;
  }

  // function to display the active layer
  displayActiveLayer() {
    // loop through all layers
    for (let i = 0; i < this.layers.length; i++) {
      // if the layer is active
      if (this.layers[i].isActive) {
        // display the layer
        return this.layers[i][0];
      }
    }
  }

  addNewLayer(name, idTeste) {
    // create new Layer object
    console.log("adding new layer id", idTeste, "name", name);
    let newLayer = createGraphics(1200, 650);

    newLayer.layerID = idTeste;
    console.log("new layer id", newLayer.layerID);

    // create new miniCanvas and add to layer object
    let miniCanvas = createGraphics(30, 30);
    newLayer.miniCanvas = miniCanvas;
    // add new layer to the 2D array
    this.layers.push([newLayer]);

    // set all layers to inactive
    // set the new layer to active

    this.setActiveLayer(newLayer.layerID);

    let newLayerLi = document.createElement("li");
    newLayerLi.className = "layer-item active";
    newLayerLi.setAttribute("data-index", newLayer.layerID);
    // create a new p element
    let layerName = document.createElement("p");
    // set the text content of the p element to name + " " + newLayer.layerID
    layerName.textContent = name + " " + newLayer.layerID;
    // append the p element to the new layer item
    newLayerLi.appendChild(layerName);

    // make the minicanvas a p5 canvas
    let miniCanvasP5 = new p5((p) => {
      p.setup = () => {
        p.createCanvas(40, 30);
        p.background(255);
      };

      p.draw = () => {
        p.background(255);

        // resize the layer to fit the minicanvas
        let layerWidth = newLayer.width;
        let layerHeight = newLayer.height;
        let miniCanvasWidth = 40;
        let miniCanvasHeight = 30;

        let ratio = 1;

        if (layerWidth > layerHeight) {
          ratio = miniCanvasWidth / layerWidth;
        } else {
          ratio = miniCanvasHeight / layerHeight;
        }

        // draw the layer to the minicanvas

        p.image(newLayer, 0, 0, layerWidth * ratio, layerHeight * ratio);
      };
    }, "mini-canvas-" + newLayer.layerID);

    // add the minicanvas to the layer list item
    newLayerLi.appendChild(miniCanvasP5.canvas);

    console.log(miniCanvasP5, "miniCanvasP5");

    // make the mminicanvas go to the right
    miniCanvasP5.canvas.style.marginLeft = "auto";
    miniCanvasP5.canvas.style.marginRight = "auto";

    // add event listener to the layer list item
    newLayerLi.addEventListener("click", () => {
      this.setActiveLayer(newLayerLi.getAttribute("data-index"));
    });

    // create the delete button as an actual element
    let deleteBtn = document.createElement("a");
    deleteBtn.className = "layer-delete-icon";
    deleteBtn.setAttribute("data-index", newLayer.layerID);
    console.log(deleteBtn);
    deleteBtn.innerHTML =
      '<i class="material-symbols-outlined" id = "delete-button">delete </i>';

    // append the delete button to the layer list item
    newLayerLi.appendChild(deleteBtn);
    // append the layer list item to the DOM
    document.getElementById("layer-list").appendChild(newLayerLi);
  }

  removeLayer(id) {
    // find the layer in the array by its id
    let index = this.findLayerIndex(id);
    // check if the layer exists
    if (index === -1) {
      console.log("layer does not exist");
      return;
    }
    let layerLi = document.querySelector(
      '.layer-item[data-index="' + id + '"]'
    );
    if (layerLi) {
      layerLi.parentNode.removeChild(layerLi);
    } else {
      console.log("layer item not found: ", id);
      layerLi = document.querySelector(
        '.layer-item[data-index="' + index + '"]'
      );
      if (layerLi) {
        layerLi.parentNode.removeChild(layerLi);
      } else {
        console.log("layer item not found: ", index);
        return;
      }
    }

    console.log("removing layer " + id);

    // clear the canvas associated with the Graphics object
    this.layers[index][0].clear();

    // set the previous layer as the active layer
    this.setActiveLayer(index - 1);
    this.updateLayerIds();
  }

  setActiveLayer(index) {
    // loop through all layers
    for (let i = 0; i < this.layers.length; i++) {
      // deactivate the ALL layers
      this.layers[i].isActive = false;
    }

    // activate the layer at the given index
    this.layers[index].isActive = true;

    // set the active class on the layer item in the DOM
    let layerItem = document.querySelector(
      `.layer-item[data-index="${index}"]`
    );
    if (layerItem) {
      layerItem.classList.add("active");
    }

    // remove the active class from other layer items in the DOM
    let otherLayerItems = document.querySelectorAll(
      `.layer-item:not([data-index="${index}"])`
    );
    otherLayerItems.forEach((item) => {
      item.classList.remove("active");
    });

    //  this.updateMiniCanvas()

    //  this.updateMiniCanvas()
  }
  // function to handle drag and drop of layers
  updateLayerIds() {
    // loop through the layers array
    for (let i = 0; i < this.layers.length; i++) {
      // grab the whole html of the layer item
      let layerItem = document.querySelector(`.layer-item[data-index="${i}"]`);
      // grab the span element inside the layerItem that contains the layer name
      let layerNameSpan = layerItem.querySelector("p");
      // update the text content of the span element with the new layer name
      layerNameSpan.textContent = "Layer " + this.layers[i][0].layerID;
    }
  }

  // function to update in real time the mini canvas

  updateMiniCanvas() {
    // loop through the layers array
    for (let i = 0; i < this.layers.length; i++) {
      // if the layer is active
      if (this.layers[i][0].isActive) {
        // set the mini canvas to the active layer
        this.miniCanvas = this.layers[i][0];
      }
    }
  }
}
