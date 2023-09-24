let choices = ['rock', 'paper', 'scissors'];

// Creating a function that randomly returns Rock, Paper, Scissors. This will act as the computer's choice against the user
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * choices.length);
    return choices[computerChoice];
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return "It's a tie!";
    } else if (playerSelection === choices[0] && computerSelection === choices[1]) {
        return "Computer wins!";
    } else if (playerSelection === choices[1] && computerSelection === choices[0]) {
        return "You win!";
    } else if (playerSelection === choices[1] && computerSelection === choices[2]) {
        return "Computer wins!";
    } else if (playerSelection === choices[2] && computerSelection === choices[1]) {
        return "You win!";
    } else if (playerSelection === choices[0] && computerSelection === choices[2]) {
        return "You win!";
    } else if (playerSelection === choices[2] && computerSelection === choices[0]) {
        return "Computer wins!";
    }
};


// function game() {
//     let playerChoice = prompt("Rock, Paper, or Scissors?!").toLowerCase();
//     console.log(playRound(playerChoice, getComputerChoice()));
//     console.log(playRound(playerChoice, getComputerChoice()));
//     console.log(playRound(playerChoice, getComputerChoice()));
//     console.log(playRound(playerChoice, getComputerChoice()));
//     console.log(playRound(playerChoice, getComputerChoice()));
// }

// game();

document.addEventListener("DOMContentLoaded", function() {
    let rockBtn = document.getElementById("rock-btn");
    let paperBtn = document.getElementById("paper-btn");
    let scissorsBtn = document.getElementById("scissors-btn");

    rockBtn.addEventListener("click", function() {
        let computer = getComputerChoice();
        let result = playRound(choices[0], computer);
        console.log(result);
    })
})