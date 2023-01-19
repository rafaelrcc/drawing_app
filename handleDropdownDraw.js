function handleDropdownPencil() {


	
    // get all shape links
    const shapeLinks = document.querySelectorAll('.dropdown-pencil a');
    
    // add event listener to each shape link
    shapeLinks.forEach(link => {
        link.addEventListener('click', event => {
        event.preventDefault();
        event.stopPropagation();
        const PencilId = event.target.parentElement.id;
        const selectedToolDiv = document.getElementById("selected-tool");
        var strokeSlider = document.getElementById("stroke-width");

        

        colourP.update();






        switch(PencilId) {

        

            case 'pencilTool':
            selectedToolDiv.innerHTML = "<div class='tool-div'> <i class='material-symbols-outlined' id='circle'>radio_button_unchecked</i></div>" 
            + "<div class='fill-div'>Fill: <input type='checkbox' id='fill-checkbox'></div>"
            + "<div class='stroke-div'>Stroke: <input class='blue-slider' type='range' id='stroke-width' min='1' max='10' value='5'></div>";
            fillCheckbox = document.getElementById("fill-checkbox");
            strokeSlider = document.getElementById("stroke-width");


            FreehandTool(strokeSlider);
            

            break;
            case 'craquelTool':

            selectedToolDiv.innerHTML = "<div class='tool-div'> <i class='material-symbols-outlined' id='brush'>brush</i></div>"
            + "<div class='stroke-div'>Stroke: <input class='blue-slider' type='range' id='stroke-width' min='1' max='10' value='5'></div>"
            strokeSlider = document.getElementById("stroke-width");

            craquelPaint(strokeSlider);
            break;


            case 'craquelTool':

            selectedToolDiv.innerHTML = "<div class='tool-div'> <i class='material-symbols-outlined' id='brush'>brush</i></div>"
            + "<div class='stroke-div'>Stroke: <input class='blue-slider' type='range' id='stroke-width' min='1' max='10' value='5'></div>"
            strokeSlider = document.getElementById("stroke-width");

            craquelPaint(strokeSlider);
            break;

            case 'pastelTool':

            selectedToolDiv.innerHTML = "<div class='tool-div'> <i class='material-symbols-outlined' id='brush'>brush</i></div>"
            + "<div class='stroke-div'>Stroke: <input class='blue-slider' type='range' id='stroke-width' min='1' max='10' value='5'></div>"
            strokeSlider = document.getElementById("stroke-width");

            pastelTool(strokeSlider);
            break;

      


            default:
            console.log('Invalid shape');

        }
        });
    });

}

    // add event listener to each pencil  link
    

        

  
    