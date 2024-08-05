// function playStartNow() {
//   const homeSection = document.getElementById("home-screen");
//   homeSection.classList.add("hidden");
//   // console.log(homeSection.classList);

//   const playGround = document.getElementById("play-ground");
//   playGround.classList.remove("hidden");
// }

function continueGame() {
  //step 1: generate a random alphabet
  const alphabet = getARandomAlphabet();
  console.log(alphabet);

  // set randomly generated alphabet to the screen (display)
  const currentAlphabet = document.getElementById("current-alphabet");
  currentAlphabet.innerText = alphabet;

  // set background color
  setBackgroundColor(alphabet);
}

function playStartNow() {
  hideElementById("home-screen");
  showElementById("play-ground");
  continueGame();
}
