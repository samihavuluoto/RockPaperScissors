let playerChoice = prompt("Rock, Paper, Scissors?");
playerChoice = playerChoice.toLowerCase();

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)

    if(randomNumber < 1){
        return "rock";
    }
    else if(randomNumber < 2){
        return "paper";
    }
    else{
        return "scissors;"
    }
}

let computerChoice = getComputerChoice();

