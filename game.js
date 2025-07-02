let targetNumber = Math.floor(Math.random() * 100) + 1;
let lives = 10;

document.getElementById("submit-btn").addEventListener("click", function () {
  const guessInput = document.getElementById("guess-input");
  const guess = parseInt(guessInput.value);
  const livesDisplay = document.getElementById("lives-count");

  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert("Please enter a valid number between 1 and 100.");
    guessInput.value = "";
    return;
  }
  if (guess === targetNumber) {
    window.location.href = "win.html";
  } else {
    lives--;
    livesDisplay.textContent = lives;
    alert(guess > targetNumber ? "Too High!" : "Too Low!");
    guessInput.value = "";
    if (lives === 0) {
      window.location.href = "lose.html";
    }
  }
});
