
function CircleTool(fillCheckbox,strokeSlider){

	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;

	//draws the line to the screen 
	this.draw = function(){

		if (fillCheckbox.checked) {
			noStroke();
		}
		else {
			noFill();
		}


		// set the stroke weight

		strokeWeight(strokeSlider.value);

		

		//only draw when mouse is clicked
		if(mouseIsPressed){
			//if it's the start of drawing a new line
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				//save the current pixel Array
				loadPixels();
			}

			else{
				//update the screen with the saved pixels to hide any previous
				//line between mouse pressed and released
				updatePixels();
				//draw the hollow circle 
				var diameter = dist(startMouseX, startMouseY, mouseX, mouseY) * 2;
                ellipse(startMouseX, startMouseY, diameter, diameter);
            			
            }

		}

		else if(drawing){
			//save the pixels with the most recent line and reset the
			//drawing bool and start locations
			loadPixels();
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};


}

