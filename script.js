function computerPlay(){

    let choices = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerChoice, computerChoice){

    playerChoice = playerChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if(playerChoice == computerChoice)
    {
        return "tie";
    }
    else if(playerChoice == "rock" && computerChoice == "scissors" ||
            playerChoice == "paper" && computerChoice == "rock" ||
            playerChoice == "scissors" && computerChoice == "paper")
    {
        return "player";
    }
    else
    {
        return "computer";
    }
}

function game(){

    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < rounds; i++) {

        let playerChoice = prompt("Round " + (i) + "/" + rounds + ": Rock, Paper, Scissors?");
        let computerChoice = computerPlay();
        let result = playRound(playerChoice, computerChoice);

        if(result == "player")
        {
            playerScore++;
            console.log(`You win! ${playerChoice} beats ${computerChoice}.`);
            console.log(`Player score: ${playerScore}, Computer score: ${computerScore}.`)
        }
        else if(result == "computer")
        {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${playerChoice}.`);
            console.log(`Player score: ${playerScore}, Computer score: ${computerScore}.`)
        }
        else
        {
            console.log("It's a tie!");
            console.log(`Player score: ${playerScore}, Computer score: ${computerScore}.`)
        }

        if(i == rounds - 1)
        {
            console.log("------------Game Over!------------ \n")

            if(playerScore > computerScore)
            {
                return `You Win! \nPlayer score: ${playerScore} Computer score: ${computerScore}.`;
            }
            else if(playerScore < computerScore)
            {
                return `You lose! \nPlayer score: ${playerScore} Computer score: ${computerScore}.`;
            }
            else
            {
                return `Tie! \nPlayer score: ${playerScore} Computer score: ${computerScore}.`;
            }
        }
    }
}

let rounds = prompt("How many rounds would you like to play?");

console.log(game());