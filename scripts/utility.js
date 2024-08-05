function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function setBackgroundColor(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
}

// get a random alphabet function

// function getARandomAlphabet() {
//   const alphabetString = "abcdefghijklmnopqrstuvwxyz";
//   const alphabets = alphabetString.split("");
//   //   console.log(alphabets);

//   //   get a random index between 0-25

//   const randomNumber = Math.random() * 25;
//   const index = Math.round(randomNumber);
//   //   console.log(index);
//   const alphabet = alphabets[index];
// //   console.log(index, alphabet);
//   return alphabet;
// }

function getARandomAlphabet() {
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");

  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);
  const alphabet = alphabets[index];
  //   console.log(index, alphabet);
  return alphabet;
}