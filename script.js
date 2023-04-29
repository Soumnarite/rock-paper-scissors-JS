function computerPlay(){

    let choices = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex].toLowerCase().trim();
}

function playerPlay(i){

    let playerChoice;
    let validInput = false;

    while (!validInput)
    {
        playerChoice = prompt(`Round ${i+1}/${rounds}: Rock, Paper, Scissors?`).toLowerCase().trim();

        if (playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors")
        {
            validInput = true;
        }
        else
        {
            console.log("Invalid input! Please enter Rock, Paper, or Scissors.");
        }
    }

    return playerChoice;
}

function playRound(playerChoice, computerChoice){

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
    let i;

    for (i = 0; i < rounds; i++) {

        let playerChoice = playerPlay(i);
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

let rounds;

while (rounds === null || isNaN(rounds))
{
    rounds = prompt("Rock Paper Scissors! \nHow many rounds would you like to play?");

    if (rounds === null) {break;}
}

console.log(game());