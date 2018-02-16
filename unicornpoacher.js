let gameState = 0;
let score = 0;
let poacher;
let width = 500;
let height = 500;
let a;


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

function mouseClicked(){
   if (gameState == 0){
     gameState = 1;
   } else if (gameState == 2){
     gameState = 0;
   } else if (gameState == 1){
     poacher.shoot();
   }
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
}

function gameOver(){
  if (gameState == 0){
    gameState = 1;
  } else if (gameState == 2){
    gameState = 0;
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

    a = Math.atan2(mouseY - this.y, mouseX - this.x);
    translate(this.x, this.y);
    rotate(a);
    beginShape();
    ellipse(0, 0, this.diameter, this.diameter);
    line(0, 0, this.diameter, 0);
    endShape();
  }

  move(){
      if(keyIsDown(87)) {
          poacher.y-=3;
          poacher.regX-=3;
      } if (keyIsDown(83)) {
          poacher.y+=3;
          poacher.regY+=3;
      } if(keyIsDown(65)){
          poacher.x-=3;
          poacher.regX+=3;
      } if(keyIsDown(68)) {
          poacher.x+=3;
          poacher.regX+=3;
      }
    }

    shoot(){
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
