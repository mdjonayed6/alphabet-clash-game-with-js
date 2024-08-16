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

  // // to stop the gameOver, please press Escape
  if (playerPressed === "Escape") {
    gameOver();
  }

  if (playerPressed === "Enter") {
    playStartNow();
  }

  // get the expected to press
  const currentAlphabet = document.getElementById("current-alphabet");
  const targetedAlphabet = currentAlphabet.innerText;
  const expectedAlphabet = targetedAlphabet.toLowerCase();
  console.log(playerPressed, expectedAlphabet);

  // check matched or not
  if (playerPressed === expectedAlphabet) {
    console.log("Wow, you get a point");

    const currentScore = getTextElementById("current-score");
    const updatedScore = currentScore + 1;
    setTextElementById("current-score", updatedScore);

    //..............................
    //update Scores
    // 1. get the current score
    // const currentScoreElement = document.getElementById("current-score");
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);
    // console.log(currentScore);
    // // 2. increase the score by 1
    // const newScore = currentScore + 1;

    // // 3. Show the update score
    // currentScoreElement.innerText = newScore;

    //Start a new round
    //................................

    removeBackgroundById(expectedAlphabet);
    continueGame();
  } else {
    console.log("Ohh no, missed it. You lose a live");

    const currentLife = getTextElementById("current-life");
    const updatedLife = currentLife - 1;
    setTextElementById("current-life", updatedLife);

    if (updatedLife === 0) {
      gameOver();
    }

    //.................................................
    // step 1: get the current life Number
    // const currentLifeElement = document.getElementById("current-life");
    // const currentLifeText = currentLifeElement.innerText;
    // const currentLife = parseInt(currentLifeText);
    // console.log(currentLife);
    // // step 2: reduce the life count
    // const newLife = currentLife - 1;
    // // step 3: display the life count
    // currentLifeElement.innerText = newLife;
    //................................................
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
  hideElementById("final-score");
  showElementById("play-ground");

  // reset score and Life
  setTextElementById("current-life", 5);
  setTextElementById("current-score", 0);
  continueGame();
}

function gameOver() {
  hideElementById("play-ground");
  showElementById("final-score");

  //update final score the the score box
  const gameScore = getTextElementById("current-score");
  setTextElementById("game-score", gameScore);

  // clear the last selected alphabet with the highlight

  const currentAlphabet = getElementTextById("current-alphabet");
  removeBackgroundById(currentAlphabet);
}
