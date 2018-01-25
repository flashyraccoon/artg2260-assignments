function setup() {
createCanvas(500, 500);
background('#222222');

}

function draw() {

  ellipse(150, 350, 180, 180); //Planet

  stroke(550);
  line(285, 220, 240, 260);//torso

  line(240, 260, 190, 280);//left leg

  line(240, 260, 225, 300);//right leg

  line(262, 240, 262, 280);//right arm

  line(262, 240, 220, 220);//left arm

  line(190, 280, 270, 100);//flag pole

  beginShape();
  vertex(270,100);
  vertex(380,115);
  vertex(340,135);
  vertex(370,160);
  vertex(255,140);
  endShape(CLOSE);

  stroke('#222222');
  ellipse(285, 220, 50, 50); // helmet

  noFill();
  ellipse(280, 215, 35, 35); //head

  ellipse(272, 208, 5, 5); //left eye
  ellipse(287, 222, 5, 5); //right eye

  curve(273, 190, 265, 213, 282, 227, 295, 200); //mouth



}
