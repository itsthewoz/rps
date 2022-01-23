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
  playRound();
});

const scissors = document.querySelector(".scissors");

scissors.addEventListener("click", () => {
  playerChoice = "scissors";
  playRound();
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

function winner() {
  if (playerScore === 5 && computerScore < 5) {
    win = 1;
    alert("You Win!");
  } else if (playerScore < 5 && computerScore === 5) {
    win = 1;
    alert("You Lose!");
  } else if (playerScore === 5 && computerScore === 5) {
    win = 1;
    alert("It's a tie!");
  }
}

function playGame() {
  playRound();
  winner();
}

// function reset() {}
// document.querySelector(".score").textContent =
//   `Current Score:` + " " + playerScore + " : " + computerScore;

// function playRound() {
//   let playerHidden = 0; //arbitrary number system that is used to assign game points for playGame()
//   let computerSelection = computerPlay();
//   let playerSelection = window.prompt("Rock Paper Scissors!");
//   if (
//     (playerSelection.toLowerCase() === "paper" &&
//       computerSelection === "rock") ||
//     (playerSelection.toLowerCase() === "rock" &&
//       computerSelection === "scissors") ||
//     (playerSelection.toLowerCase() === "scissors" &&
//       computerSelection === "paper")
//   ) {
//     playerHidden = 1;
//     alert(
//       `You win! ` +
//         (playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)) +
//         ` beats ` +
//         (computerSelection.charAt(0).toUpperCase() +
//           computerSelection.slice(1)) +
//         `!`
//     );
//   } else if (playerSelection === computerSelection) {
//     playerHidden = 2;
//     alert(`It\'s a tie`);
//   } else {
//     playerHidden = 0;
//     alert(
//       `You lose ` +
//         (computerSelection.charAt(0).toUpperCase() +
//           computerSelection.slice(1)) +
//         ` beats ` +
//         playerSelection.charAt(0).toUpperCase() +
//         playerSelection.slice(1) +
//         `!`
//     );
//   }
//   return playerHidden;
// }

// function playGame() {
//   let playerScore = 0;
//   let computerScore = 0;
//   let i;
// for (i = 0; i < 30; i++) {
//   let hiddenPoints = playRound(); //sets a var to access playerHidden value set by playRound()
//   if (hiddenPoints === 1) {
//     playerScore++;
//     if (playerScore === 5) {
//       alert("You Win!");
//       i = 30;
//     }
//   } else if (hiddenPoints === 0) {
//     computerScore++;
//     if (computerScore === 5) {
//       alert("You Lose!");
//       i = 30;
//     }
//   }

//   alert(playerScore + " to " + computerScore);
// }
// }

// console.log(playRound());
