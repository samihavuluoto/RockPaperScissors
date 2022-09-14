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
        return "scissors";
    }
}

    let computerChoice

function playRound(playerChoice, computerChoice){

    computerChoice = getComputerChoice();

    if (playerChoice === "rock" && computerChoice === "scissors"){
        return "You win! Rock beats scissors.";
    }
    else if(playerChoice === "paper" && computerChoice === "rock"){
        return "You win! Paper beats rock.";
    }
    else if(playerChoice === "scissors" && computerChoice === "paper"){
        return "You win! Scissors beats paper.";
    }
    else if(playerChoice === "rock" && computerChoice === "paper"){
        return "You lose! Paper beats rock.";
    }
    else if(playerChoice === "paper" && computerChoice === "scissors"){
        return "You lose! Scissors beat paper.";
    }
    else if(playerChoice === "scissors" && computerChoice === "rock"){
        return "You lose! Rock beats scissors.";
    }
    else if(playerChoice === "scissors" && computerChoice === "scissors"){
        return "It's a tie! You both chose scissors.";
    }
    else if(playerChoice === "rock" && computerChoice === "rock"){
        return "It's a tie! You both chose rock.";
    }
    else if(playerChoice === "paper" && computerChoice === "paper"){
        return "It's a tie! You both chose paper.";
    }
    else{
        return "Invalid choice. Please choose rock, paper, or scissors.";
    }
}