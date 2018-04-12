let song;

function preload(){
  song = loadSound("sounds/streetcar.wav");
  song2 = loadSound("sounds/oldtimer.wav");
}

function setup() {
  song.loop();
  song2.loop();
}
