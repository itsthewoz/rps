// Create a set of rock, paper, and scissors 
// set which beats the other
// Input for the player for rock/paper/scissors
// Random generated "computer" response 
// Compare the results of the player and the computer
// Return the winner
// rock beats scissors
// scissors beat paper
// paper beats rock

const computerSelection = computerPlay();

function computerPlay() {
    let hands = ['rock', 'paper', 'scissors'];
    return hands[Math.floor(Math.random() * hands.length)];
}

function playRound(playerSelection) {

    if ((playerSelection === 'paper' && computerSelection === 'rock') ||
       (playerSelection === 'rock' && computerSelection === 'scissors') ||
       (playerSelection === 'scissors' && computerSelection === 'paper')) {
        console.log(`You win! ` + playerSelection + ` beats ` + computerSelection + `!`);

    } else if (playerSelection === computerSelection) {
        console.log(`It\'s a tie`);

    } else {
        console.log(`You lose ` + computerSelection + ` beats ` + playerSelection + `!`);
    }   
    return;
}

function playGame() {
    
}
