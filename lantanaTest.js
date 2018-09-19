let R;
let G, G2;
let B, B2, B3;

function setup() {
	var myCanvas = createCanvas( 1500, 500);

	background(255, 255, 255);
	frameRate(30);
  colorMode(RGB);

  R = 255;
  G = random(60, 255);
  B = G;

  R2 = G;
  G2 = G;
  B2 = 255;

  R3 = G;
  G3 = 255;
  B3 = G;

}

function draw() {
  fill(R, G, B);
  rect(0, 0, 500, 500);

  fill(R2, G2, B2);
  rect(500, 0, 500, 500);

  fill(R3, G3, B3);
  rect(1000, 0, 500, 500);

}
