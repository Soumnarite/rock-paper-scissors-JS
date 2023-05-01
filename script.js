const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');
const resultsDisplay = document.getElementById('results');

let playerScore = 0;
let computerScore = 0;

rockBtn.addEventListener('click', function() {
    pressButton('rock');
});

paperBtn.addEventListener('click', function() {
    pressButton('paper');
});

scissorsBtn.addEventListener('click', function() {
    pressButton('scissors');
});

function pressButton(str){

    let playerChoice = str;
    playRound(playerChoice);
}

function playRound(playerChoice){

    const computerChoice = computerPlay();
    const result = checkWinner(playerChoice, computerChoice);
    addScore(result, playerChoice, computerChoice);
}

function computerPlay(){

    let choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function checkWinner(playerChoice, computerChoice){

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

function addScore(result, playerChoice, computerChoice){

    if(result == 'player')
    {
        playerScore++;
    }
    else if(result == 'computer')
    {
        computerScore++;
    }

    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;

    let roundResultMessage = `You chose ${playerChoice}, computer chose ${computerChoice}.
                                 ${result === 'tie' ? 'Tie!' : result === 'player' ? 'You win!' : 'Computer wins!'}`;

    resultsDisplay.textContent = roundResultMessage;

    if(playerScore == 5)
    {
        endGame('player');
    }
    else if(computerScore == 5)
    {
        endGame('computer');
    }
}

function endGame(winner){

    const message = `${winner === 'player' ? 'You win!' : 'Computer wins!'} Game over!`;
  
    resultsDisplay.textContent = message;
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}