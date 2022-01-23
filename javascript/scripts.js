let playerChoice = "";
let playerScore = 0;
let computerScore = 0;

let score = document.querySelector(".score");

document.querySelector(".score").textContent =
  "Current Score:" + " " + playerScore + " : " + computerScore;

const paper = document.querySelector(".paper");

paper.addEventListener("click", () => {
  playerChoice = "paper";
  playGame();
});

const rock = document.querySelector(".rock");

rock.addEventListener("click", () => {
  playerChoice = "rock";
  playGame();
});

const scissors = document.querySelector(".scissors");

scissors.addEventListener("click", () => {
  playerChoice = "scissors";
  playGame();
});

function computerPlay() {
  let hands = ["rock", "paper", "scissors"];
  return hands[Math.floor(Math.random() * hands.length)];
}

function playRound() {
  let computerSelection = computerPlay();
  let playerSelection = playerChoice;
  let pScore = 0;
  if (
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    document.querySelector(".results").textContent =
      `You win! ` +
      (playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)) +
      ` beats ` +
      (computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)) +
      `!`;
  } else if (playerSelection === computerSelection) {
    playerScore++;
    computerScore++;
    document.querySelector(".results").textContent = `It\'s a tie`;
  } else {
    computerScore++;
    document.querySelector(".results").textContent =
      `You lose ` +
      (computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)) +
      ` beats ` +
      playerSelection.charAt(0).toUpperCase() +
      playerSelection.slice(1) +
      `!`;
  }
  document.querySelector(".score").textContent =
    "Current Score:" + " " + playerScore + " : " + computerScore;
}

function reset() {
  playerScore = 0;
  computerScore = 0;
  document.querySelector(".score").textContent =
    "Current Score:" + " " + playerScore + " : " + computerScore;
  document.querySelector(".results").textContent = "";
}

function winner() {
  if (playerScore === 5 && computerScore < 5) {
    alert("You Win!");
    reset();
  } else if (playerScore < 5 && computerScore === 5) {
    alert("You Lose!");
    reset();
  } else if (playerScore === 5 && computerScore === 5) {
    alert("It's a tie!");
    reset();
  }
}

function playGame() {
  playRound();
  winner();
}
