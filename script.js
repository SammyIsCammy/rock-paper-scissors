let choices = ['Rock', 'Paper', 'Scissors'];

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

console.log(playRound(getComputerChoice(), getComputerChoice()));