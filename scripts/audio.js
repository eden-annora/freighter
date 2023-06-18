//using howler.js library for audio: https://github.com/goldfire/howler.js#documentation

//source needs to be a web url, local files *do not work*. 
//Just grab the relative path and add it to the end of "https://eden-annora.github.io/TheNautilus/"

//if on a branch other than main, add relative path to the end of "https://raw.githubusercontent.com/eden-annora/TheNautilus/"


//Background music
var background_music = new Howl({
  src: ['https://eden-annora.github.io/TheNautilus/audio/ambient_music/magic_forest.mp3'],
  loop: true,
  volume: .2
});

//will only play after you click something on the page


//main menu computer-y sounds, now unused
var background_music_intro = new Howl({
  src: ['https://eden-annora.github.io/TheNautilus/audio/player/intro_computer_boot.mp3'],
  volume: .2
});



//Main menu computer-y sounds
var computer_boot_start = new Howl({
  src: ['https://eden-annora.github.io/TheNautilus/audio/player/intro_computer_boot/computer_bg_start.mp3'],
  volume: .2,

  //when starting audio file ends, begin the looping audio
  onend: function () {
    computer_boot_loop.play();
  }
});

var computer_boot_loop = new Howl({
  src: ['https://eden-annora.github.io/TheNautilus/audio/player/intro_computer_boot/computer_bg_loop.mp3'],
  volume: .2,
  loop: true
});

var computer_boot_end = new Howl({
  src: ['https://eden-annora.github.io/TheNautilus/audio/player/intro_computer_boot/computer_bg_end.mp3'],
  volume: .2
});



//Thrusters
var thruster_loop = new Howl({
  src: ["https://eden-annora.github.io/TheNautilus/audio/player/thruster/thruster_loopable.mp3"],
  loop: true,
  volume: .7
});

var thruster_end = new Howl({
  src: ["https://eden-annora.github.io/TheNautilus/audio/player/thruster/thruster_end.mp3"],
  volume: .7
});



//Abilities
var ability_boost = new Howl({
  src: ["https://eden-annora.github.io/TheNautilus/audio/player/boost.mp3"],
  volume: .3
});

var ability_charge = new Howl({
  src: ["https://eden-annora.github.io/TheNautilus/audio/player/charge.mp3"],
  volume: .3
});



//Spore collision sounds
const sporeCollisions = ["https://eden-annora.github.io/TheNautilus/audio/collision/spore/1.mp3", "https://eden-annora.github.io/TheNautilus/audio/collision/spore/2.mp3", "https://eden-annora.github.io/TheNautilus/audio/collision/spore/3.mp3"];
var sporeHowls = {};

for (var i = 0; i < sporeCollisions.length; i++) {
  sporeHowls[sporeCollisions[i]] = new Howl({
    src: [sporeCollisions[i]],
    loop: false,
    volume: .1
  });
}

const sporeAlerts = ["https://eden-annora.github.io/TheNautilus/audio/collision/spore/alert.mp3"];
var sporeHowlsAlert = {};

for (var i = 0; i < sporeAlerts.length; i++) {
  sporeHowlsAlert[sporeAlerts[i]] = new Howl({
    src: [sporeAlerts[i]],
    loop: false,
    volume: .1
  });
}