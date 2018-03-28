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
  createCanvas(1024,512);
  noFill();
  song.loop();
  fft = new p5.FFT();

  volumeSlider = createSlider(0, 5, 2.5, 0.1);
  volumeSlider.style("width", "100px")
  volumeSlider.position(100, height+20);
  //textSize(28);
  //text("volume", 100, height+60);

  panSlider = createSlider(-512, 512, 0, 1);
  panSlider.style("width", "100px")
  panSlider.position(462, height+20);

  rateSlider = createSlider(0.5, 1.5, 1, 0.1);
  rateSlider.style("width", "100px")
  rateSlider.position(824, height+20);

  colorMode(HSB)

}

function draw() {
   //this.a = Math.atan2(mouseY - this.y, mouseX - this.x);
   background(255);
   let spectrum = fft.analyze();

   beginShape();

   for (let i = 0; i < spectrum.length; i++) {

    stroke(i/(512/255), map(rateSlider.value(), 0.5, 1.5, 0, 255), 255);
    fill(i/(512/255), map(rateSlider.value(), 0.5, 1.5, 0, 255), 255);
    //line(i, map(spectrum[i], 0, 255, height/2, 0), i, height/2);
    //line(i, map(spectrum[i], 0, 255, height/2, height), i, height);
    //line(map(spectrum[i], 0, 255, width*rateSlider.value(), 0+panSlider.value()*512), i+panSlider.value()*100, map(spectrum[i], height, 255, width-panSlider.value()*100, height*rateSlider.value()), height);
    ellipseMode(CENTER);
    ellipse(i, map(spectrum[i], 0, 255, 0, height), 10*volumeSlider.value());
   }
   endShape();

   song.setVolume(volumeSlider.value());
   song.pan(panSlider.value());
   song.rate(rateSlider.value());

}
