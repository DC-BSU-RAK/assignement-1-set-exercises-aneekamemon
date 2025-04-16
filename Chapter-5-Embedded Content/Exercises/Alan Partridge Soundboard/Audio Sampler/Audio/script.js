


addEventListener("DOMContentLoaded", () => {
  playtheaudio(".button", "ah-ha.mp3");
  playtheaudio(".button2", "back-of-the-net.mp3");
  playtheaudio(".button3", "bangoutoforder.mp3");
  playtheaudio(".button4", "dan.mp3");
  playtheaudio(".button5", "emailoftheevening.mp3");
  playtheaudio(".button6", "hellopartridge.mp3");
  playtheaudio(".button7", "iateascotchegg.mp3");
  playtheaudio(".button8", "imconfused.mp3");

});


function playtheaudio(any, audiofile) {

  const buttons = document.querySelector(any);

  if (!buttons) return;
  const sound = new Audio(audiofile);

  buttons.addEventListener("click", () => {
    let audiocurrentTime = 0;
    sound.play().catch(err => console.log("The audio is not working...:", err));
  });
}



