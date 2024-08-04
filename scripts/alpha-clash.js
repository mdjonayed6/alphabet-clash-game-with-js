function playStartNow() {
  const homeSection = document.getElementById("home-screen");
  homeSection.classList.add("hidden");
  // console.log(homeSection.classList);

  const playGround = document.getElementById("play-ground");
  playGround.classList.remove("hidden");
}
