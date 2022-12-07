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
<<<<<<< HEAD

    let playerScore = 0;
    let computerScore = 0;

function playRound(playerChoice, computerChoice){

    if (playerChoice === "rock" && computerChoice === "scissors"){
        if(playerScore === 5){
            playerScore = 0;
        }
        playerScore += 1;
        if(playerScore === 5){
            alert(`The Player wins the match! ${playerScore} - ${computerScore}`);
        }
        return `You win! Rock beats scissors.
        Player score: ${playerScore} Computer Score: ${computerScore}`;
    }
    else if(playerChoice === "paper" && computerChoice === "rock"){
        if(playerScore === 5){
            playerScore = 0;
        }
        playerScore += 1;
        if(playerScore === 5){
            alert(`The Player wins the match! ${playerScore} - ${computerScore}`);
        }
        return `You win! Paper beats rock.
        Player score: ${playerScore} Computer Score: ${computerScore}`;
    }
    else if(playerChoice === "scissors" && computerChoice === "paper"){
        if(playerScore === 5){
            playerScore = 0;
        }
        playerScore += 1;
        if(playerScore === 5){
            alert(`The Player wins the match! ${playerScore} - ${computerScore}`);
        }
        return `You win! Scissors beats paper.
        Player score: ${playerScore} Computer Score: ${computerScore}`;
    }
    else if(playerChoice === "rock" && computerChoice === "paper"){
        if(computerScore === 5){
            computerScore = 0;
        }
        computerScore+= 1;
        if(computerScore === 5){
            alert(`The Computer wins the match! ${computerScore} - ${playerScore}`);
        }
        return `You lose! Paper beats rock.
        Player score: ${playerScore} Computer Score: ${computerScore}`;
    }
    else if(playerChoice === "paper" && computerChoice === "scissors"){
        if(computerScore === 5){
            computerScore = 0;
        }
        computerScore+= 1;
        if(computerScore === 5){
            alert(`The Computer wins the match! ${computerScore} - ${playerScore}`);
        }
        return `You lose! Scissors beat paper.
        Player score: ${playerScore} Computer Score: ${computerScore}`;
    }
    else if(playerChoice === "scissors" && computerChoice === "rock"){
        if(computerScore === 5){
            computerScore = 0;
        }
        computerScore+= 1;
        if(computerScore === 5){
            alert(`The Computer wins the match! ${computerScore} - ${playerScore}`);
        }
        return `You lose! Rock beats scissors.
        Player score: ${playerScore} Computer Score: ${computerScore}`;
    }
    else if(playerChoice === "scissors" && computerChoice === "scissors"){
        return `It's a tie! You both chose scissors.
        Player score: ${playerScore} Computer Score: ${computerScore}`;
    }
    else if(playerChoice === "rock" && computerChoice === "rock"){
        return `It's a tie! You both chose rock.
        Player score: ${playerScore} Computer Score: ${computerScore}`;
    }
    else if(playerChoice === "paper" && computerChoice === "paper"){
        return `It's a tie! You both chose paper.
        Player score: ${playerScore} Computer Score: ${computerScore}`;
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
=======
>>>>>>> rps-ui

    let playerScore = 0;
    let computerScore = 0;

function playRound(playerChoice, computerChoice){

    if (playerChoice === "rock" && computerChoice === "scissors"){
        if(playerScore === 5){
            playerScore = 0;
        }
        playerScore += 1;
        if(playerScore === 5){
            alert(`The Player wins the match! ${playerScore} - ${computerScore}`);
        }
        return `You win! Rock beats scissors.
        Player score: ${playerScore} Computer Score: ${computerScore}`;
    }
    else if(playerChoice === "paper" && computerChoice === "rock"){
        if(playerScore === 5){
            playerScore = 0;
        }
        playerScore += 1;
        if(playerScore === 5){
            alert(`The Player wins the match! ${playerScore} - ${computerScore}`);
        }
        return `You win! Paper beats rock.
        Player score: ${playerScore} Computer Score: ${computerScore}`;
    }
    else if(playerChoice === "scissors" && computerChoice === "paper"){
        if(playerScore === 5){
            playerScore = 0;
        }
        playerScore += 1;
        if(playerScore === 5){
            alert(`The Player wins the match! ${playerScore} - ${computerScore}`);
        }
        return `You win! Scissors beats paper.
        Player score: ${playerScore} Computer Score: ${computerScore}`;
    }
    else if(playerChoice === "rock" && computerChoice === "paper"){
        if(computerScore === 5){
            computerScore = 0;
        }
        computerScore+= 1;
        if(computerScore === 5){
            alert(`The Computer wins the match! ${computerScore} - ${playerScore}`);
        }
        return `You lose! Paper beats rock.
        Player score: ${playerScore} Computer Score: ${computerScore}`;
    }
    else if(playerChoice === "paper" && computerChoice === "scissors"){
        if(computerScore === 5){
            computerScore = 0;
        }
        computerScore+= 1;
        if(computerScore === 5){
            alert(`The Computer wins the match! ${computerScore} - ${playerScore}`);
        }
        return `You lose! Scissors beat paper.
        Player score: ${playerScore} Computer Score: ${computerScore}`;
    }
    else if(playerChoice === "scissors" && computerChoice === "rock"){
        if(computerScore === 5){
            computerScore = 0;
        }
        computerScore+= 1;
        if(computerScore === 5){
            alert(`The Computer wins the match! ${computerScore} - ${playerScore}`);
        }
        return `You lose! Rock beats scissors.
        Player score: ${playerScore} Computer Score: ${computerScore}`;
    }
    else if(playerChoice === "scissors" && computerChoice === "scissors"){
        return `It's a tie! You both chose scissors.
        Player score: ${playerScore} Computer Score: ${computerScore}`;
    }
    else if(playerChoice === "rock" && computerChoice === "rock"){
        return `It's a tie! You both chose rock.
        Player score: ${playerScore} Computer Score: ${computerScore}`;
    }
    else if(playerChoice === "paper" && computerChoice === "paper"){
        return `It's a tie! You both chose paper.
        Player score: ${playerScore} Computer Score: ${computerScore}`;
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


const results = document.getElementById("results");

const rock = document.getElementById("rock");

rock.addEventListener("click", function(){
    results.innerText = playRound("rock", getComputerChoice());
});

const paper = document.getElementById("paper");

paper.addEventListener("click", function(){
    results.innerText  = playRound("paper", getComputerChoice());
});

const scissors = document.getElementById("scissors");

scissors.addEventListener("click", function(){
    results.innerText  = playRound("scissors", getComputerChoice());
});
