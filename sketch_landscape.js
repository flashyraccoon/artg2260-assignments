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

  stroke( 0, 40, 80); // lake
  fill( 0, 40, 80);
  curve(0, 900, 200, 500, 600, 500, 800, 1100);
  noFill(); // river
  stroke( 0, 40, 80);
  strokeWeight(40);
  bezier( 620, 290, 1000, 500, 200, 200, 250, 450);


  noStroke();
  fill(150, 150, 150); // darker gray color
  triangle(400, 300, 600, 100, 800, 300); // mountain template

  fill(190, 190, 190); // light gray color
  triangle(200, 300, 400, 200, 600, 300); // mountain template: (x1, 300, x2, y2, x3, 300);

  fill(00, 100, 100); // dank green color
  triangle(100, 300, 150, 250, 200, 300); // (x1, y1, x2, y2, x3, y3)
  triangle(90, 320, 150, 270, 210, 320); // (x1-10, y1+20, x2, y2+20, x3+20, y3+20)
  triangle(80, 340, 150, 290, 220, 340);
  fill(50, 50, 30); // dankbrown color
  rect(130, 340, 40, 50); // trunk; bottom tree branch(x1+50, y1, 40, 50)

  fill(00, 100, 100); // dank green color
  triangle(300, 220, 350, 170, 400, 220); // (x1, y1, x2, y2, x3, y3)
  triangle(290, 240, 350, 190, 410, 240); // (x1-10, y1+20, x2, y2+20, x3+20, y3+20)
  triangle(280, 260, 350, 210, 420, 260);
  fill(50, 50, 30); // dankbrown color
  rect(330, 260, 40, 50); // trunk; bottom tree branch(x1+50, y1, 40, 50)


}
