let gameState = 0;
let score = 0;
let poacher;
let unicorns = [];
let dangerunicorns = [];
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
let imgBackground;
let imgPoacher;
//let imgUnicorn;
let font3DTitle;
let font2DTitle;


/*function preload() {

}
*/
function setup(){
  font3DTitle = loadFont("fonts/3Dumb-webfont.ttf");
  font2DTitle = loadFont("fonts/2Dumb.ttf");
  imgBackground = loadImage('images/assets/lawn.jpg');
  imgPoacher = loadImage("images/assets/poacher.png");
  //image(imgBackground, 0, 0);
  //framerate = 30;
  frameRate(60);
  time = frameCount;
  //imgBackground = loadImage("images/assets/lawn.jpg");
  var cnv = createCanvas(500,500);
  //cnv.parent('sketch-holder');
  poacher = new Poacher();
}

function draw(){
  background(51, 153, 51);
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
    //image(imgBackground, 0, 0);
    poacher.display();
    poacher.move();
    for (b of bullets) {
      b.move();
      b.display();
    }
    for (u of unicorns) {
      u.move();
      u.display();
      for (b of bullets) {
        if (u.overlaps(b)){
          if(u.shot == false) {
            u.color = (255);
            u.alpha = (0);
            u.shot = true;
            score ++;
          }
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

      /*let dangerunicorn = new DangerUnicorn(random(xSpawn), random(0, 500), random(1,3), random(0,3));
      dangerunicorns.push (dangerunicorn); */
    }
    noStroke();
    fill(255);
    rect(0, 0, 500, 40);

    stroke(0);
    line(0, 40, width, 40);


    textAlign(LEFT);
    textSize(14);
  //  textFont(font2DTitle);
    fill(0);
    text("Play!", 10, 30);
  //  textFont(font2DTitle);
    fill(0);
    text("Time: " + round(time/60), 400, 30);
  //  textFont(font2DTitle);
    fill(0);
    text("Unicorns: " + score, 300, 30)
  //  textFont(font2DTitle);
    fill(0);
    text("Lives: " + lives, 200, 30);
  } else if (gameState == 2){
    gameOver();
  }


}

function mouseClicked(){
   if (gameState == 0 ){
     gameState = 1;
   } else if (gameState == 2){
     gameState = 0;
   } else if (gameState == 1){
     poacher.shoot();
   }
  }

function startScreen() {
  background(51, 153, 51);
  //image(imgBackground, 0, 0);
  fill(0);


  textAlign(CENTER);
  textSize(34);
  //textFont(font3DTitle);
  text("Unicorn Poacher", 250, 100);

  fill(0);
  //textFont(font2DTitle);
  textSize(24);
  text("Poach the Unicorns!", 250, 150);
  text("But don't let them get you!", 250, 180);
  textSize(20);
  text("Controls:", 250, 220);
  textSize(20);
  text("W: up", 250, 245);
  text("A: left", 250, 270);
  text("S: down", 250, 295);
  text("D: right", 250, 320);
  text("Mouse: aim", 250, 345);
  text("Left MB: shoot", 250, 370);

  textAlign(CENTER);
  textSize(28);
  text("click to begin", 250, 450);
}

function update() {
  time++;
  background(51, 153, 51);
  //image(imgBackground, 0, 0);

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
    this.colorR = 255;
    this.colorG = 0;
    this.colorB = 0;
    this.outline = 0;
    this.radius = this.diameter/2;
    this.alpha = 0;


  }

  display(){
 // put a conditional for a -> only in game state 1
    push();
    this.a = Math.atan2(mouseY - this.y, mouseX - this.x);
    fill(this.colorR, this.colorG, this.colorB, this.alpha);
    stroke(this.outline);
    translate(this.x, this.y);
    rotate(this.a);
    beginShape();
    ellipse(0, 0, this.diameter, this.diameter);
    line(0, 0, this.diameter, 0);
    endShape();
    pop();
    image(imgPoacher, 20, 20, 40, 40);

  }

  move(){
      if(keyIsDown(87)) {
        if(poacher.y > 40+poacher.radius) {
          poacher.y-=3;
        }
      } if (keyIsDown(83)) {
          if(poacher.y < height-poacher.radius) {
            poacher.y+=3;
          }
      } if(keyIsDown(65)){
          if(poacher.x > poacher.radius) {
            poacher.x-=3;
          }
      } if(keyIsDown(68)) {
          if(poacher.x < width-poacher.radius) {
            poacher.x+=3;
          }
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
    this.radius = this.diameter/2;

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
    //this.color = (random(20,240), random(20,240), random(20,240));
    this.alpha = 255;
    this.shot = false;
    this.radius = this.diameter/2;

  }

  display(){
    noStroke();
    fill(random(20,240), random(20,240), random(20,240), this.alpha);
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
		return (d < (this.radius + other.radius));
    if (lives == 0) {
      gameState = 0;
    }
	}
}

/*class DangerUnicorn {

  constructor(_xSpawn, _ySpawn, _xSpeed, _ySpeed){
    this.xSpawn = _xSpawn;
    this.ySpawn = _ySpawn;
    this.x = _xSpawn;
    this.y = _ySpawn;
    this.xSpeed = _xSpeed;
    this.ySpeed = _ySpeed;
    this.diameter = 30;
    this.color = 0;
    this.alpha = 255;
    this.shot = false;
    this.radius = this.diameter/2;

  }

  display(){
    noStroke();
    fill(this.color, this.alpha);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }

  move(){

  }

  overlaps(other){
		let d = dist(other.x, other.y, this.x, this.y);
		return (d < (this.radius + other.radius));
    if (lives == 0) {
      gameState = 0;
    }
	}
} */
