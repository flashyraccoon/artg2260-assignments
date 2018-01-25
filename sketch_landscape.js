function setup() {
createCanvas(800, 500);
background('green'); //ground

ellipseMode(CORNER);
}

function draw() {

  noStroke();
  fill("powderblue"); // sky
  rect(0, 0, 800, 300);

  fill("white");
  ellipse(30,50,100,40); //cloud 1
  ellipse(50,30,100,40);
  ellipse(90,50,100,40);

  ellipse(230,150,100,40); // cloud 2
  ellipse(250,130,100,40);
  ellipse(290,150,100,40);

  ellipse(430,50,100,40); // cloud 3
  ellipse(450,30,100,40);
  ellipse(490,50,100,40);

  triangle(100, 300, 150, 250, 200, 200);
}
