let inp;

function setup() {
  inp = createInput();
  createCanvas(200, 200, 0, 0);
}

function draw(){
  background(255);
  text(inp.value(), 50, 10);
}
