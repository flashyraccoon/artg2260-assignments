function setup() {
	createCanvas(1000, 1000);

	for (var y = 0; y < 100; y += 10){
		for (var x = 0; x < 100; x += 10){
      ellipseMode(CORNER);
      noStroke();
      fill(255, 246, 0);
			ellipse(x, y, 10, 10);
		}
	}

  function mouseMoved() {
      g = g + 5;
      if (g > 255) {
        g = 0;
  }
}

}
