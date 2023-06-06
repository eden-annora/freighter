//using howler.js library for audio

//source needs to be a web url, local files *do not work*. 
//Just grab the relative path and add it to the end of "https://eden-annora.github.io/TheNautilus/"

var backgroundMusic = new Howl({
  src: ['https://eden-annora.github.io/TheNautilus/audio/ambientmusic/magic_forest.mp3'],
  loop: true
});

//will only play after you click something on the page
backgroundMusic.play();