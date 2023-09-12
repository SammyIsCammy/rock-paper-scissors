// Creating a function that randomly returns Rock, Paper, Scissors. This will act as the computer's choice against the user
function getComputerChoice() {
    let computerChoices = ['Rock', 'Paper', 'Scissors'];
    let computerChoice = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[computerChoice];
}


console.log(getComputerChoice());

