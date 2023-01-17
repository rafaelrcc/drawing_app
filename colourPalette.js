function ColourPalette() {
    const colorInput = document.getElementById('colourPicker');
    colorInput.addEventListener('input', function(){
        currentColor = color(colorInput.value);
    });
    
    
   
    this.getColor = function() {
        return color(colorInput.value);
    }


    // UPDATE THE COLOUR PALETTE

    this.update = function() {
        //get the current colour
        var currentColor = this.getColor();

        //set the colour of the colour palette
        fill(currentColor);
        stroke(currentColor);
    }
}
