function handleDropdown(currentColor) {
	
	// get all shape links
	const shapeLinks = document.querySelectorAll('.dropdown-content a');
	
	// add event listener to each shape link
	shapeLinks.forEach(link => {
	  link.addEventListener('click', event => {
		event.preventDefault();
		event.stopPropagation();
		const shapeId = event.target.parentElement.id;
		const selectedToolDiv = document.getElementById("selected-tool");

		const fillCheckbox = document.getElementById("fill-checkbox");





		switch(shapeId) {
		  case 'circleTool':
			selectedToolDiv.innerHTML = "<div class='tool-div'> <i class='material-symbols-outlined' id='circle'>radio_button_unchecked</i></div>" 
			+ "<div class='fill-div'>Fill: <input type='checkbox' id='fill-checkbox'></div>"
			+ "<div class='stroke-div'>Stroke: <input class='blue-slider' type='range' id='stroke-width' min='1' max='10' value='5'></div>";

			if (fillCheckbox) {
				if (fillCheckbox.checked) {

					loadPixels();
					fill(currentColor);
					noStroke();
				}
				else {
					loadPixels();
					noFill();
					stroke(currentColor);
				}
			}
			CircleTool();
			

			break;
		  case 'lineToTool':
			LineToTool();

			selectedToolDiv.innerHTML = "<div class='tool-div'> <i class='material-symbols-outlined' id='line'>timeline</i></div>"
			+ "<div class='stroke-div'>Stroke: <input class='blue-slider' type='range' id='stroke-width' min='1' max='10' value='5'></div>"
			+ "<div class='stroke-div'>Line Cap: <select id='line-cap'><option value='butt'>Butt</option><option value='round'>Round</option><option value='square'>Square</option></select></div>";
			break;

		  case 'triangleTool':
			TriangleTool();

			selectedToolDiv.innerHTML = "<div class='tool-div'> <i class='material-symbols-outlined' id='triangle'>change_history</i></div>"
			+ "<div class='fill-div'>Fill: <input type='checkbox' id='fill-checkbox'></div>"
			+ "<div class='stroke-div'>Stroke: <input class='blue-slider' type='range' id='stroke-width' min='1' max='10' value='5'></div>";

			break;


		  default:
			console.log('Invalid shape');
		}
	  });
	});

  }
    