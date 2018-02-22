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
let xSpawn = [0, 500];
let ySpawn = [0, 500];
let time;

function setup(){
  //framerate = 30;
  frameRate(60);
  time = frameCount;
  var cnv = createCanvas(500,500);
  //cnv.parent('sketch-holder');
  poacher = new Poacher();
}

function draw(){
  background(255);
  if (gameState == 0 ){
    startScreen();
    lives = 3;
    score = 0;
    time = time*0;

  } else if (gameState == 1){
    update();
    if (lives == 0) {
      gameState = 2;
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
      if (u.overlaps(b)){
        if(u.shot == false) {
          u.color = (255);
          u.alpha = (0);
          u.shot = true;
          score ++;
        }
      }
      if (u.overlaps(poacher)) {
        if(u.alpha == 100) {
          lives --;
          u.color = (255);
          u.alpha = (0);
        }
      }
    }
    timePassed = frameCount % random(intervals);
    if (timePassed == 0) {
      let unicorn = new Unicorn(random(xSpawn), random(0, 500), random(1,3), random(0,3));
      unicorns.push (unicorn);
    }
  } else if (gameState == 2){
    gameOver();
  }


}

function mouseClicked(){
   if (gameState == 0 ){
     gameState = 1;
   } else if (gameState == 2){
     gameState = 3;
   } else if (gameState == 1){
     poacher.shoot();
   }
  }

function startScreen() {
  background(255);
  fill(0);
  text("click to begin", 10, 30);
}

function replayScreen() {
  background(255);
  fill(0);
  text("Game Over", 10, 30);
}

function update() {
  background(255);
  time++;
  fill(0);
  text("playing", 10, 30);
  text("Time: " + round(time/60), 400, 30);
  text("Unicorns: " + score, 300, 30)
  text("Lives: " + lives, 200, 30);
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
    push();
    this.a = Math.atan2(mouseY - this.y, mouseX - this.x);
    fill(this.color);
    stroke(this.outline);
    translate(this.x, this.y);
    rotate(this.a);
    beginShape();
    ellipse(0, 0, this.diameter, this.diameter);
    line(0, 0, this.diameter, 0);
    endShape();
    pop();
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
      let bullet = new Bullet(this.a, this.x, this.y);
      bullets.push (bullet);
    }
  }

class Bullet {
  constructor(_a, _x, _y){
    this.a = _a;
    this.x = _x;
    this.y = _y;
    this.diameter = 10;
    //this.a = poacher.a;
    this.color = 0;

  }

  display(){
    fill(this.color);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }

  move(){
    this.x += 6*cos(this.a);
    this.y += 6*sin(this.a);

  }
}

class Unicorn {

  constructor(_xSpawn, _ySpawn, _xSpeed, _ySpeed){
    this.xSpawn = _xSpawn;
    this.ySpawn = _ySpawn;
    this.x = _xSpawn;
    this.y = _ySpawn;
    this.xSpeed = _xSpeed;
    this.ySpeed = _ySpeed;
    this.diameter = 30;
    this.color = 155;
    this.alpha = 100;
    this.shot = false;

  }

  display(){
    noStroke();
    fill(this.color, this.alpha);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }

  move(){
    if (this.xSpawn == 0) {
      if (this.ySpawn <= 250) {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
      } else if (this.ySpawn >= 250) {
        this.x += this.xSpeed;
        this.y -= this.ySpeed;
      }
    } else if (this.xSpawn == 500) {
      if (this.ySpawn <= 250) {
        this.x -= this.xSpeed;
        this.y += this.ySpeed;
      } else if (this.ySpawn >= 250) {
        this.x -= this.xSpeed;
        this.y -= this.ySpeed;
      }
    }
  }

  overlaps(other){
		let d = dist(other.x, other.y, this.x, this.y);
		return (d < this.diameter/2 + other.diameter/2);
    if (lives == 0) {
      gameState = 0;
    }
	}
}
