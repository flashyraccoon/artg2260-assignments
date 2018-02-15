let gameState = 0;
let score = 0;
let poacher;
let width = 500;
let height = 500;
let angle;
let bullet;




function setup(){
  framerate = 30;
  createCanvas(500,500);
  poacher = new Poacher();
}

function draw(){
  background(255);
  if (gameState == 0){
    startScreen();
  } else if (gameState == 1){
    update();
  } else if (gameState == 2){
    gameOver();
  }
  poacher.display();
  poacher.move();

  }



function startScreen() {
  background(255);
  text("click to begin", 10, 30);
}

function update() {
  background(255);
  score++;
  text("playing", 10, 30);
  text("score: " + score, 400, 30);
  angle = Math.atan2(mouseY - poacher.y, mouseX - poacher.x );
  angle = angle * (180/Math.PI);
  //print("the angle is " + angle);
}

function gameOver(){
  if (gameState == 0){
    gameState = 1;
  } else if (gameState == 2){
    gameState = 0;
  }
}

function mouseClicked(){
 if (gameState == 0){
   gameState = 1;
 } else if (gameState == 2){
   gameState = 0;
 } else if (gameState == 1){
   let bullet = new Bullet();
   bullet.display();
   bullet.move();
 }
}

class Bullet {
  constructor(){
    this.x = 10;
    this.y = 10;
    this.diameter = 5;
  }

  display(){
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }

  move(){
    this.x += 3;
  }
}

class Poacher {
  constructor(){
    this.x = width/2;
    this.y = height/2;
    this.diameter = 20;
    this.regX = this.x;
    this.regY = this.y;


  }

  display(){
    poacher.regX = poacher.x;
    poacher.regY = poacher.y;
    rotate(PI / angle);
    beginShape();
    ellipse(this.x, this.y, this.diameter, this.diameter);
    line(this.x+this.diameter/2, this.y, this.x+this.diameter*2, this.y);
    endShape();

  }

  move(){

      if(keyIsDown(87)) {
          poacher.y-=2;
          poacher.regX-=2;
      } if (keyIsDown(83)) {
          poacher.y+=2;
          poacher.regY+=2;
      } if(keyIsDown(65)){
          poacher.x-=2;
          poacher.regX+=2;
      } if(keyIsDown(68)) {
          poacher.x+=2;
          poacher.regX+=2;
      }
      //rotate(PI / angle);
    }

}
