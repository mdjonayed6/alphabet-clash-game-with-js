// function playStartNow() {
//   const homeSection = document.getElementById("home-screen");
//   homeSection.classList.add("hidden");
//   // console.log(homeSection.classList);

//   const playGround = document.getElementById("play-ground");
//   playGround.classList.remove("hidden");
// }

function handleKeyboardButtonPress(event) {
  const playerPressed = event.key;
  console.log("player pressed", playerPressed);

  // get the expected to press
  const currentAlphabet = document.getElementById("current-alphabet");
  const targetedAlphabet = currentAlphabet.innerText;
  const expectedAlphabet = targetedAlphabet.toLowerCase();
  console.log(playerPressed, expectedAlphabet);

  // check matched or not
  if (playerPressed === expectedAlphabet) {
    console.log("Wow, you get a point");
    console.log("you have pressed correctly", expectedAlphabet);
    //update Scores
    // 1. get the current score
    const currentScoreElement = document.getElementById("current-score");
    const currentScoreText = currentScoreElement.innerText;
    const currentScore = parseInt(currentScoreText);
    console.log(currentScore);
    // 2. increase the score by 1
    const newScore = currentScore + 1;

    // 3. Show the update score
    currentScoreElement.innerText = newScore;

    //Start a new round
    removeBackgroundById(expectedAlphabet);
    continueGame();
  } else {
    console.log("Ohh no, missed it. You lose a live");
    // step 1: get the current life Number
    
    // step 2: reduce the life count

    // step 3: display the life count 
  }
}
// keyboard press capture
document.addEventListener("keyup", handleKeyboardButtonPress);

function continueGame() {
  //step 1: generate a random alphabet
  const alphabet = getARandomAlphabet();
  // console.log(alphabet);

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
