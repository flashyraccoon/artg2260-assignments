let gameState = 0;
let score = 0;
let poacher;
let unicorns = [];
let width = 500;
let height = 500;
let a = 0;
let bullets = [];
let timePassed;
let intervals = [90, 210, 300];
let lives = 3;


function setup(){
  framerate = 30;
  createCanvas(500,500);
  let img_heart_full = loadImage("images\assets\heart-full.png");
  let img_heart_empty = loadImage("images\assets\heart-empty.png");

  poacher = new Poacher();
}

function draw(){
  background(255);
  if (gameState == 0){
    startScreen();
  } else if (gameState == 1){
    update();
    for (i = 0; i < lives; i++){
      img(img_heart_full, 40+i, 20, 20, 20);
    }
    poacher.display();
    poacher.move();
    for (b of bullets) {
      b.move();
      b.display();
      print("bullet comes!");
    }
    for (u of unicorns) {
      u.move();
      u.display();
    }
    timePassed = frameCount % random(intervals);
    if (timePassed == 0) {
      print("Time passed is " + timePassed);
      let unicorn = new Unicorn();
      unicorns.push (unicorn);
    }
  } else if (gameState == 2){
    gameOver();
  }

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
  fill(0);
  text("click to begin", 10, 30);
}

function update() {
  background(255);
  score++;
  fill(0);
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
    this.a = 0;
    this.color = 255;
    this.outline = 0;
  }

  display(){
 // put a conditional for a -> only in game state 1
    this.a = Math.atan2(mouseY - this.y, mouseX - this.x);
    fill(this.color);
    stroke(this.outline);
    translate(this.x, this.y);
    rotate(this.a);
    beginShape();
    ellipse(0, 0, this.diameter, this.diameter);
    line(0, 0, this.diameter, 0);
    endShape();
  }

  move(){
      if(keyIsDown(87)) {
          poacher.y-=3;

      } if (keyIsDown(83)) {
          poacher.y+=3;

      } if(keyIsDown(65)){
          poacher.x-=3;

      } if(keyIsDown(68)) {
          poacher.x+=3;

      }
    }

    shoot(){
      let bullet = new Bullet();
      bullets.push (bullet);
    }

  }

class Bullet {
  constructor(){
    this.x = 0;
    this.y = 0;
    this.diameter = 5;
    //this.a = poacher.a;
    this.color = 0;

  }

  display(){
    fill(this.color);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }

  move(){
    this.x += 6;
  }
}

class Unicorn {

  constructor(){
    this.x = 0;
    this.y = 50;
    this.diameter = 20;
    this.color = 155;
    this.alpha = 50;

  }

  display(){
    fill(this.color, this.alpha);
    ellipse(20, 20, this.diameter, this.diameter);
  }

  move(){
    this.x += 4;
    this.y += 4;
  }
}
