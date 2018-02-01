var weight = 1;
var clrBtnColorR = 0;
var clrBtnColorG = 0;
var clrBtnColorB = 0;
var drawDottedLine = false;
var drawSolidLine = true;
var drawCircles = false;
// var drawRainbow = false; used for the rainbow-function below


function setup() {
	var myCanvas = createCanvas( 1000, 500);
	myCanvas.parent("canvas");
	stroke(0, 0, 0); // we moved the default stroke color to setup()
	strokeWeight(weight);
	background(255, 255, 255);


}

function draw(){

	noFill();
	strokeWeight(1);
	stroke(0);
	rect(0, 0, 25, 75); //panel for solid line button

	stroke(0);
	strokeWeight(10);
	line(12.5, 12.5, 12.5, 60); // line for solid line button

	strokeWeight(1);
	rect(0, 75, 25, 75); //panel for dotted line button
	fill(0);
	ellipseMode(CORNER);
	ellipse(7.5, 85, 10, 10);
	ellipse(7.5, 100, 10, 10);
	ellipse(7.5, 115, 10, 10);
	ellipse(7.5, 130, 10, 10);

	noFill();
	strokeWeight(1);
	stroke(0);
	rect(0, 150, 25, 75); //panel for circle-line button
	ellipse(4, 155, 4, 4);
	ellipse(8, 160, 6, 8);
	ellipse(7, 165, 10, 10);
	ellipse(8, 173, 14, 9);
	ellipse(4, 188, 8, 20);
	ellipse(4, 179, 20, 20);

	noFill();
	strokeWeight(1);
	stroke(0);
	rect(0, 475, 25, 24); //panel for clearing the canvas
	strokeWeight(5);
	strokeCap(ROUND);
	stroke(255, 0, 0);
	line(5, 480, 20, 494);
	line(20, 480, 5, 494); // red X for clearing button

	noFill();
	strokeWeight(1);
	stroke(0);
	rect(0, 450, 25, 25); // panel for saving the painting
	fill(0);
	beginShape();   // here begins the shape for the little save-icon
	vertex(2, 453);
	vertex(17, 453);
	vertex(23, 458);
	vertex(23, 473);
	vertex(2, 473);
	endShape()
	fill(255);
	rect(6, 455, 12, 7, 1);
	rect(4, 463, 16, 9, 1);
	noStroke();
	fill(0);
	rect(14, 456, 3, 5);

	//draws the circle showing the brush size (right-hand panel)
	ellipseMode(CENTER);
	stroke(0);
	strokeWeight(1);
	fill(clrBtnColorR, clrBtnColorG, clrBtnColorB);
	ellipse(987.5, 12.5, weight, weight);

	// draws the rect showing the brush color (right-hand panel)
	fill (clrBtnColorR, clrBtnColorG, clrBtnColorB);
	stroke(0);
	rect(975, 25, 25, 500);
	noStroke();


	if (mouseIsPressed == true) {
		// checking if the mouse isn't hovering over the right- or left-hand panels
		if((mouseX > 50) && (mouseX < 950)) {
			if (drawSolidLine == true) {
				strokeWeight(weight);
			 	stroke(clrBtnColorR, clrBtnColorG, clrBtnColorB);
			 	line(mouseX, mouseY, pmouseX, pmouseY);
			} else if (drawDottedLine == true){
			 	ellipse(mouseX, mouseY, weight, weight);
		 	} else if (drawCircles == true) {
				noFill();
				strokeWeight(weight);
				stroke(clrBtnColorR, clrBtnColorG, clrBtnColorB);
				ellipse(mouseX, mouseY, mouseX-pmouseX, mouseY-pmouseY);
			}  /*else if (drawRainbow == true) {
					strokeWeight(weight);
					stroke(mouseX/4, mouseY/2, (mouseX+mouseY)/3);
					line(mouseX, mouseY, pmouseX, pmouseY);
				} */ //this is extra code for the rainbow-function; maybe I'll put it in later
		}
	}
}

function mouseReleased() {
	// checking if the mouse is hovering over the solid-line-button (left-hand panel)
	if ((mouseX > 0) && (mouseX < 26) && (mouseY > 0) && (mouseY < 76)) {
		if (drawSolidLine == false) {
			drawDottedLine = false;
		 	drawSolidLine = true;
			drawCircles = false; }
	// checking if the mouse is hovering over the dotted-line-button (left-hand panel)
	} else if ((mouseX > 0 ) && (mouseX < 26) && (mouseY > 75) && (mouseY < 151)){
			if(drawDottedLine == false) {
				drawDottedLine = true;
			 	drawSolidLine = false;
				drawCircles = false; }
	// checking if the mouse is hovering over the draw-circles-button (left-hand panel)
	} else if ((mouseX > 0 ) && (mouseX < 26) && (mouseY > 150) && (mouseY < 225)){
			if(drawCircles == false) {
				drawCircles = true;
			 	drawSolidLine = false;
				drawDottedLine = false; }
	// checking if the mouse is hovering over the clear-all button (left-hand panel)
	} else if ((mouseX > 0 ) && (mouseX < 26) && (mouseY > 475) && (mouseY < 500)){
			stroke(255);
			fill(255);
			rect(0, 0, 1000, 500);
	// checking if the mouse is hovering over the save button (left-hand panel)
	} else if ((mouseX > 0) && (mouseX < 26) && (mouseY > 450) && (mouseY < 475)) {
		save("myCanvas.jpg"); }
}

function keyPressed() {
	if (key == "c" || key == "C") { //cyan
	    stroke(0, 255, 255);
	    clrBtnColorR = 0;
	    clrBtnColorG = 250;
	    clrBtnColorB = 250;
		} else if (key == "m" || key == "M") { //magenta
	    stroke(255, 0, 255);
	    clrBtnColorR = 255;
	    clrBtnColorG = 0;
	    clrBtnColorB = 255;
	  } else if (key == "y" || key == "Y") { //yellow
	    stroke(255, 255, 0);
	    clrBtnColorR = 255;
	    clrBtnColorG = 255;
	    clrBtnColorB = 0;
	  } else if (key == "k" || key == "K") { //black
	    stroke(0, 0, 0);
	    clrBtnColorR = 0;
	    clrBtnColorG = 0;
	    clrBtnColorB = 0;
	  } else if (key == "r" || key == "R") { //red
	    stroke(255, 0, 0);
	    clrBtnColorR = 255;
	    clrBtnColorG = 0;
	    clrBtnColorB = 0;
	  } else if (key == "g" || key == "G") { //green
	    stroke(0, 255, 0);
	    clrBtnColorR = 0;
	    clrBtnColorG = 250;
	    clrBtnColorB = 0;
	  } else if (key == "b" || key == "B") { //blue
	    stroke(0, 0, 255);
	    clrBtnColorR = 0;
	    clrBtnColorG = 0;
	    clrBtnColorB = 255;
	  } else if (key == "w" || key == "W") {
	    stroke(255,255,255); // transparent/white-out
	    clrBtnColorR = 255;
	    clrBtnColorG = 255;
	    clrBtnColorB = 255;
		} else if (keyCode == RIGHT_ARROW) {
			weight++;
			strokeWeight(weight);
		} else if (keyCode == LEFT_ARROW) {
			ellipseMode(CENTER);
			fill(255);
			stroke(255);
			strokeWeight(3);
			ellipse(987.5, 12.5, weight+weight); //paints a white circle over the old, bigger brushsize
			weight/=2;
			strokeWeight(weight);
		}
}
