function setup() {
	createCanvas(100, 100);

	for (var y = 0; y < 100; y += 10){
		for (var x = 0; x < 100; x += 10){
      ellipseMode(CORNER);
      noStroke();
      fill(255, 246, 0);
			ellipse(x, y, 10, 10);
			stroke(0);
			line(x+(x*1), x+(x*1), x+10, x+10*x);
		}
	}

}
