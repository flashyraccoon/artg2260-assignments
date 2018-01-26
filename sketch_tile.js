function setup() {
	createCanvas(100, 100);

	for (var y = 0; y < 10; y += 1){
		for (var x = 0; x < 10; x += 1){
      ellipseMode(CORNER);
      noStroke();
      fill(255, 246, 0);
			ellipse(10*x, 10*y, 10, 10);
			stroke(0);
			line(10*x+x, 10*y+y, (x+1)*10-x, (y+1)*10-y);
		}
	}

}
