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
    
    function getRoundWinner(result) {
        if (result === "You win!") {
            playerScoreVal+=1;
            playerScore.innerText = playerScoreVal;
        } else if (result === "Computer wins!") {
            computerScoreVal+=1;
            computerScore.innerText = computerScoreVal;
        }
    }

    function endGame() {
        if (playerScoreVal === 5 || computerScoreVal === 5) {
            rockBtn.disabled = true;
            paperBtn.disabled = true;
            scissorsBtn.disabled = true;
        }
    }

    rockBtn.addEventListener("click", function() {
        let computer = getComputerChoice();
        let result = playRound(choices[0], computer);

        getRoundWinner(result);
        endGame();
    })

    paperBtn.addEventListener("click", function() {
        let computer = getComputerChoice();
        let result = playRound(choices[1], computer);

        getRoundWinner(result);
        endGame();
    })

    scissorsBtn.addEventListener("click", function() {
        let computer = getComputerChoice();
        let result = playRound(choices[2], computer);

        getRoundWinner(result);
        endGame();
    })

    // WHY THIS IF STATEMENT SHOULD NOT BE HERE:
    // it is within the main DOMContentLoaded event listener, therefore, it will only be called
    // one time, when the event listener is hit. You'll want to put this in the click event listeners
    // instead. That way, it is called everytime the button is clicked and the scores are updated.
    // if (playerScoreVal === 5 || computerScoreVal === 5) {
    //     rockBtn = null;
    //     paperBtn = null;
    //     scissorsBtn = null;
    // }

})