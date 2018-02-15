let b;
let color;

function setup() {
  	b = new Box();

}

function draw() {
  background(0);

  b.display();
  b.move();
  b.teleport();
}

class Box {

	constructor() {
      	this.y= height;
      	this.color = (random(255), random(255), random(255));
    }


	function display () {
      fill(this.color);
      rect((width/2), this.y, 20, 20);
    }

  function move() {
    	this.y -=1;
  	}

  function teleport() {
    	if(this.y == 0) {
      		this.y = height;
      		this.color = (random(255), random(255), random(255));
    		}
  		}
}
