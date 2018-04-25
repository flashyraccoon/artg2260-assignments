let song, song2;

function preload(){
  song = loadSound("sounds/streetcar.wav");
  song2 = loadSound("sounds/oldtimer.wav");
}

function setup() {
  song.loop();
  song.setVolume(0.2);

  song2.loop();
  song2.setVolume(0.2);

  noCanvas();
}
