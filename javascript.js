function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);
  let choice = "";
  if (num === 0) {
    choice = "rock";
  } else if (num === 1) {
    choice = "paper";
  } else if (num === 2) {
    choice = "paper";
  }
  return choice;
}

function getHumanChoice() {
  let choice = prompt("select rock, paper, or scissors");
  choice = choice.toLowerCase();
  if (choice === "rock" || choice === "scissors" || choice == "paper") {
    return choice;
  } else {
    console.log(choice + " is not a valid input");
  }
}

function playRound() {
  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();

  // rock beats scissors
  if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "rock")
  ) {
    console.log("Your choice: " + humanChoice);
    console.log("Opponent's choice: " + computerChoice);
    console.log("You win!");
    return "human";
  } else if (
    (computerChoice == "rock" && humanChoice == "scissors") ||
    (computerChoice == "scissors" && humanChoice == "paper") ||
    (computerChoice == "paper" && humanChoice == "rock")
  ) {
    console.log("Your choice: " + humanChoice);
    console.log("Opponent's choice: " + computerChoice);
    console.log("You lose!");
    return "computer";
  } else {
    console.log("Your choice: " + humanChoice);
    console.log("Opponent's choice: " + computerChoice);
    console.log("Tie!");
    return "tie";
  }
}

function playGame(rounds) {
  humanScore = 0;
  computerScore = 0;
  roundNumber = 0;
  while (roundNumber < rounds) {
    winner = playRound();
    if (winner == "human") {
      humanScore++;
      roundNumber++;
      console.log("Human score is " + humanScore);
      console.log("ComputerScore is " + computerScore);
    } else if (winner == "computer") {
      computerScore++;
      roundNumber++;
      console.log("Human score is " + humanScore);
      console.log("ComputerScore is " + computerScore);
    } else {
      roundNumber++;
      console.log("Human score is " + humanScore);
      console.log("ComputerScore is " + computerScore);
    }
  }
}

playGame(1);
