
var x;
var y;
var r;
var g;
var b;
var xy;



function setup() {
	var myCanvas = createCanvas( 1000, 500);
	myCanvas.parent("canvas");
	background(255, 255, 255);
}

function draw(){
	if(mouseX>0 && mouseY>0 && mouseX<1000 && mouseY<500){
		r = map(mouseX, 0, 1000, 0, 255);
		g = map(mouseY, 0, 500, 0, 255);
		b = (r+g)/2;


			for (i=0; i<10; i++) {
				background(map(mouseX, 0, width, 0, 255));
				stroke(r, g, b);
				line(random(1000), 0, mouseX, mouseY);
				line(random(1000), 0, mouseX, mouseY);
				line(random(1000), 0, mouseX, mouseY);
				line(random(1000), 0, mouseX, mouseY);

				line(0, random(500), mouseX, mouseY);
				line(0, random(500), mouseX, mouseY);
				line(0, random(500), mouseX, mouseY);
				line(0, random(500), mouseX, mouseY);

				line(random(1000), 500, mouseX, mouseY);
				line(random(1000), 500, mouseX, mouseY);
				line(random(1000), 500, mouseX, mouseY);
				line(random(1000), 500, mouseX, mouseY);

				line(1000, random(500), mouseX, mouseY);
				line(1000, random(500), mouseX, mouseY);
				line(1000, random(500), mouseX, mouseY);
				line(1000, random(500), mouseX, mouseY);
			}

	}
}
