function computerPlay() {
    let hands = ['rock', 'paper', 'scissors'];
    return hands[Math.floor(Math.random() * hands.length)];
}

function playRound() {

    let playerHidden = 0;

    if (
       (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') ||
       (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') ||
       (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper')
    ) {
        playerHidden = 1;

    } else if (playerSelection === computerSelection) {
        playerHidden = 2;

    } else {
        playerHidden = 0;
    }   
    return playerHidden
}

function playGame() {

let hiddenPoints = playerHidden;

    if (hiddenPoints === 1) {
        playerScore++;
        alert(`You win! ` + (playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)) + ` beats ` + 
        (computerSelection.charAt(0).toUpperCase() +computerSelection.slice(1)) + `!`);
            if (playerScore === 5) {
                alert('You Win!')
            }

    } else if (hiddenPoints === 0) {
        computerScore++; 
        alert(`You lose ` + (computerSelection.charAt(0).toUpperCase() +computerSelection.slice(1)) + ` beats ` + 
        playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + `!`);
            if (computerScore === 5) {
                alert('You Lose!')
            }

    } else {
        alert(`It\'s a tie`);
    } 
}

let playerSelection = window.prompt('Rock Paper Scissors!');
let computerSelection = computerPlay();
let playerScore = 0;
let computerScore = 0;
let playerHidden = playRound();

console.log(playGame());