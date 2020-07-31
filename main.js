const choices = document.querySelectorAll(".choice");
const playerScore = document.getElementById("player");
const computerScore = document.getElementById("computer");
const restart = document.querySelector(".restart");
const scoreboard = {
  player: 0,
  computer: 0,
};
const result = document.getElementById("result");

function play(e) {
  const playerSelection = e.target.id;
  const computerSelection = computerPlay();
  const game = playGame(playerSelection, computerSelection);
  const winner = showWinner(game, computerSelection);
}

//Computer's pick
function computerPlay() {
  const pickOptions = ["rock", "paper", "scissors"];
  return pickOptions[Math.floor(Math.random() * pickOptions.length)];
}

//Gameplay
function playGame(playerSelection, computerSelection) {
  if (computerSelection === "rock") {
    switch (playerSelection) {
      case "paper":
        return "player";
        break;
      case "scissors":
        return "computer";
        break;
      case "rock":
        return "tie";
        break;
    }
  } else if (computerSelection === "paper") {
    switch (playerSelection) {
      case "scissors":
        return "player";
        break;
      case "rock":
        return "computer";
        break;
      case "paper":
        return "tie";
        break;
    }
  } else {
    switch (playerSelection) {
      case "rock":
        return "player";
        break;
      case "paper":
        return "computer";
        break;
      case "scissors":
        return "tie";
        break;
    }
  }
}

//Show winner
function showWinner(game, computerSelection) {
  if (game === "player") {
    scoreboard.player++;
    result.textContent = `Computer picks ${computerSelection}, you won!`;
  } else if (game === "computer") {
    scoreboard.computer++;
    result.textContent = `Computer picks ${computerSelection}, you lose!`;
  } else {
    result.textContent = `It's a tie!`;
  }
  playerScore.textContent = scoreboard.player;
  computerScore.textContent = scoreboard.computer;
}

//Restart the game
function restartGame() {
  scoreboard.player = 0;
  scoreboard.computer = 0;
  playerScore.textContent = scoreboard.player;
  computerScore.textContent = scoreboard.computer;
  result.textContent = "Pick your choice to start the game!";
}

// Event listeners
choices.forEach((choice) => choice.addEventListener("click", play));
restart.addEventListener("click", restartGame);
