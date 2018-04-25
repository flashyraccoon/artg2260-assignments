let song;

function preload(){
  song = loadSound("sounds/swamp.wav");
}

function setup() {
  song.loop();
  song.setVolume(0.3);
  noCanvas();
}
