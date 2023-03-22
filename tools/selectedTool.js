function createSelectedToolHTML() {
    shapeProperties.selectedToolDiv.innerHTML =
      "<div class='tool-div'> <i class='material-symbols-outlined' id='circle'>radio_button_unchecked</i></div>" +
      "<div class='fill-div'>Fill: <input type='checkbox' id='fill-checkbox'></div>" +
      "<div class='stroke-div'>Stroke: <input class='blue-slider' type='range' id='stroke-width' min='1' max='10' value='5'></div>";
    shapeProperties.fillCheckbox = document.getElementById("fill-checkbox");
    shapeProperties.strokeSlider = document.getElementById("stroke-width");
  }