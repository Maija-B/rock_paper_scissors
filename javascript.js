// adds newDiv to the DOM
const newDiv = document.createElement("div");
document.body.appendChild(newDiv);

// creates variables to represent each button
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

// creates variables to keep track of the score
let humanScore = 0;
let computerScore = 0;
let roundNumber = 0;
const totalRounds = 5;

const scoreDisplay = document.createElement("h2");
scoreDisplay.textContent = `Human Score ${humanScore} | Computer Score ${computerScore}`;
newDiv.appendChild(scoreDisplay);

// creates a variable to hold the user's choice
let humanChoice = "";

// when a button is clicked playRound is called with the choice as the input
rockBtn.addEventListener("click", () => playRound("rock"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));
paperBtn.addEventListener("click", () => playRound("paper"));

// funcion getting a random choice from the computer
function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);
  let choice = "";
  if (num === 0) {
    choice = "rock";
  } else if (num === 1) {
    choice = "paper";
  } else if (num === 2) {
    choice = "scissors";
  }
  return choice;
}

// function to play the round ... is called when button is pressed
function playRound(humanChoice) {
  if (roundNumber >= totalRounds) return;

  let computerChoice = getComputerChoice();
  const message = document.createElement("p");

  let result = "";

  // checks who the winner is and adds to the score and number of rounds played
  if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "rock")
  ) {
    result = "You win";
    humanScore++;
  } else if (
    (computerChoice == "rock" && humanChoice == "scissors") ||
    (computerChoice == "scissors" && humanChoice == "paper") ||
    (computerChoice == "paper" && humanChoice == "rock")
  ) {
    result = "You lose";
    computerScore++;
  } else {
    result = "Tie";
  }

  roundNumber++;

  // adds the message about the score to the UI
  message.textContent = `You chose ${humanChoice}, the computer chose ${computerChoice}. ${result}.`;
  newDiv.appendChild(message);

  // update score
  scoreDisplay.textContent = `Human Score ${humanScore} | Computer Score ${computerScore}`;

  // if 5 rounds have been played show the final score
  if (roundNumber === 5) {
    const finalMessage = document.createElement("h4");
    finalMessage.textContent = `Final score is human ${humanScore}, computer ${computerScore}`;
    newDiv.appendChild(finalMessage);
    const winner = document.createElement("h2");
    if (humanScore > computerScore) {
      winner.textContent = "You Win!";
      winner.style.color = "green";
    } else if (computerScore > humanScore) {
      winner.textContent = "You Lose!";
      winner.style.color = "red";
    } else {
      winner.textContent = "Tie!";
      winner.style.color = "blue";
    }
    newDiv.appendChild(winner);
  }
}
