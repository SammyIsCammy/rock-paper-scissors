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
    let playerScore = document.getElementById("player-score");
    let playerScoreVal = 0;
    let computerScore = document.getElementById("computer-score");
    let computerScoreVal = 0;

    rockBtn.addEventListener("click", function() {
        let computer = getComputerChoice();
        let result = playRound(choices[0], computer);
        console.log(result);
        if (result === "You win!") {
            playerScoreVal++;
            playerScore.innerText = playerScoreVal;
            //  console.log(playerScoreVal);
        } else if (result === "Computer wins!") {
            computerScoreVal++;
            computerScore.innerText = computerScoreVal;
        }
    })
    paperBtn.addEventListener("click", function() {
        let computer = getComputerChoice();
        let result = playRound(choices[1], computer);
        console.log(result);
        if (result === "You win!") {
            playerScoreVal++;
            playerScore.innerText = playerScoreVal;
            //  console.log(playerScoreVal);
        } else if (result === "Computer wins!") {
            computerScoreVal++;
            computerScore.innerText = computerScoreVal;
        }
    })
    scissorsBtn.addEventListener("click", function() {
        let computer = getComputerChoice();
        let result = playRound(choices[2], computer);
        console.log(result);
        if (result === "You win!") {
            playerScoreVal++;
            playerScore.innerText = playerScoreVal;
            //  console.log(playerScoreVal);
        } else if (result === "Computer wins!") {
            computerScoreVal++;
            computerScore.innerText = computerScoreVal;
        }
    })

})