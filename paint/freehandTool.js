function FreehandTool(layer, startMouseX, startMouseY, drawing, diameter, drawingProperties) {
	//set an icon and a name for the object


	//to smoothly draw we'll draw a line from the previous mouse location
	//to the current mouse location. The following values store
	//the locations from the last frame. They are -1 to start with because
	//we haven't started drawing yet.
	startMouseX = -1;
	startMouseY = -1;

	this.draw = function(){

		//if the mouse is pressed
		if(mouseIsPressed){
			//check if they previousX and Y are -1. set them to the current
			//mouse X and Y if they are.
			if (startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
			}
			//if we already have values for previousX and Y we can draw a line from 
			//there to the current mouse location
			else{
				layer.strokeWeight(drawingProperties.strokeSlider.value);
				layer.line(previousMouseX, previousMouseY, mouseX, mouseY);
				startMouseX = mouseX;
				startMouseY = mouseY;
			}
		}
		//if the user has released the mouse we want to set the previousMouse values 
		//back to -1.
		//try and comment out these lines and see what happens!
		else{
			startMouseX = -1;
			startMouseY = -1;
		}
	};
}