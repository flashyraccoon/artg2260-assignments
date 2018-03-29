let song, fft;
let degree;
let radians;
let panSlider;
let rateSlider;
let volumeSlider;

function preload() {
  song = loadSound('assets/amen.wav');
}

function setup() {
  createCanvas(1450,1050);
  noFill();
  song.loop();
  fft = new p5.FFT();

  volumeSlider = createSlider(0, 5, 2.5, 0.1);
  volumeSlider.style("width", "100px")
  volumeSlider.position(1150, 50);
  //textSize(28);
  //text("volume", 100, height+60);

  panSlider = createSlider(-5, 5, 0, 1);
  panSlider.style("width", "100px")
  panSlider.position(1150, 150);

  rateSlider = createSlider(0.5, 1.5, 1, 0.1);
  rateSlider.style("width", "100px")
  rateSlider.position(1150, 250);

  let volume = createDiv("volume");
  volume.position(1150, 75);
  volume.style("font-family", "arial");

  let pan = createDiv("pan");
  pan.position(1150, 175);
  pan.style("font-family", "arial");

  let rate = createDiv("rate");
  rate.position(1150, 275);
  rate.style("font-family", "arial");


  colorMode(HSB);
  ellipseMode(CENTER);
}

function draw() {
   //this.a = Math.atan2(mouseY - this.y, mouseX - this.x);
   background(255);
   let spectrum = fft.analyze();

   beginShape();

   for (let i = 0; i < spectrum.length; i++) {

    // rainbow wave and inverted wave:
    //line(i, map(spectrum[i], 0, 255, height/2, 0), i, height/2);
    //line(i, map(spectrum[i], 0, 255, height/2, height), i, height);
    //line(map(spectrum[i], 0, 255, width*rateSlider.value(), 0+panSlider.value()*512), i+panSlider.value()*100, map(spectrum[i], height, 255, width-panSlider.value()*100, height*rateSlider.value()), height);

    //rainbow bubbles
    //stroke(i/(512/255), map(rateSlider.value(), 0.5, 1.5, 0, 255), 255);
    //fill(i/(512/255), map(rateSlider.value(), 0.5, 1.5, 0, 255), 255);
    //ellipse(i, map(spectrum[i], 0, 255, 0, height), 10*volumeSlider.value());

    //stroke(map(spectrum[i], 0, 255, 0, 360), map(volumeSlider.value, 0, 5, 0, 100), 100);
    stroke(map(spectrum[i], 0, 255, 0, 360), map(volumeSlider.value(), 0, 5, 0, 100), map(rateSlider.value(), 0.5, 1.5, 0, 100));
    arc((width-400)/2, height/2, i+10, i+10, map(spectrum[i], 0, 255, 0, 2*PI), map(panSlider.value(), -5, 5, 0, 2*PI)+i);
   }
   endShape();
   

   song.setVolume(volumeSlider.value());
   song.pan(panSlider.value());
   song.rate(rateSlider.value());

}
