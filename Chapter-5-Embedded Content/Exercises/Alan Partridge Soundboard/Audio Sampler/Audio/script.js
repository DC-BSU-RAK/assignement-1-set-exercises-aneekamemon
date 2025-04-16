
// Buttons audio included here

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

// The function that causes the audios to play once you click on the button
// Its declared with 2 parameters any, and audiofile/



function playtheaudio(any, audiofile) {

  // Finds the initial element 
  const buttons = document.querySelector(any);

  // If no match is concluded from the 'audiofile' than this leads to an early return
  if (!buttons) return;
  const sound = new Audio(audiofile);

// To play the audio the user must 'click' the buttons
  buttons.addEventListener("click", () => {
    // This mechanism plays the audio
    sound.play().catch(err => console.log("The audio is not working...:", err));
    // If for any reason the audio is unplayable then this is shown -->"The audio is not working...
  });
}



