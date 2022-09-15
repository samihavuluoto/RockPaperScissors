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

    let computerChoice = getComputerChoice();

    let playerScore = 0;
    let computerScore = 0;

function playRound(playerChoice, computerChoice){

    if (playerChoice === "rock" && computerChoice === "scissors"){
        playerScore += 1;
        return "You win! Rock beats scissors.";
    }
    else if(playerChoice === "paper" && computerChoice === "rock"){
        playerScore += 1;
        return "You win! Paper beats rock.";
    }
    else if(playerChoice === "scissors" && computerChoice === "paper"){
        playerScore += 1;
        return "You win! Scissors beats paper.";
    }
    else if(playerChoice === "rock" && computerChoice === "paper"){
        computerScore += 1;
        return "You lose! Paper beats rock.";
    }
    else if(playerChoice === "paper" && computerChoice === "scissors"){
        computerScore += 1;
        return "You lose! Scissors beat paper.";
    }
    else if(playerChoice === "scissors" && computerChoice === "rock"){
        computerScore += 1;
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

function game(){
    for (let i = 0; i < 5; i++){

        let playerChoice = prompt("Rock, Paper, Scissors?");
        playerChoice = playerChoice.toLowerCase();

        let computerChoice = getComputerChoice();

        console.log(playRound(playerChoice, computerChoice));
        console.log(`Player score: ${playerScore} Computer score: ${computerScore}`);

    }
}

game()

