function TriangleTool(){

  
    var startMouseX = -1;
    var startMouseY = -1;
    var drawing = false;
  
    //draws the line to the screen 
    this.draw = function(){
  
      //only draw when mouse is pressed
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
          //draw the hollow equilateral triangle
          noFill();
          var side = dist(startMouseX, startMouseY, mouseX, mouseY);
          var h = (Math.sqrt(3)/2) * side;
          var x1 = startMouseX - (side / 2);
          var x2 = startMouseX + (side / 2);
          var y2 = startMouseY - h;
          triangle(x1, startMouseY, x2, startMouseY, startMouseX, y2);
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
  