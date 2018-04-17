let song, song2;

function preload(){
  song = loadSound("sounds/docks.wav");
  song2 = loadSound("sounds/waves.wav");
}

function setup() {
  song.loop();
  song.setVolume(1.0);

  song2.loop();
  song2.setVolume(0.1);
}
