let humanScore = 0;
let computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function getHumanChoice() {
  // Change humanChoice to ask for prompt later
  let humanChoice = 'rOck'.toLowerCase();
  return humanChoice;
}


function getComputerChoice() {
  let randomizer = Math.floor(Math.random() * 3);
  let computerChoice = randomizer;
    switch (computerChoice) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
    }
}


function playRound(humanChoice, computerChoice){
  if (
    (computerChoice === 'rock' && humanChoice === 'scissors') ||
    (computerChoice === 'paper' && humanChoice === 'rock') ||
    (computerChoice === 'scissors' && humanChoice === 'paper')
) { 
    computerScore++;
    console.log(`Your Score is ${humanScore} and Computer's Score is ${computerScore}`);
    console.log("You Lose");
} else if (
    (computerChoice === 'scissors' && humanChoice === 'rock') ||
    (computerChoice === 'rock' && humanChoice === 'paper') ||
    (computerChoice === 'paper' && humanChoice === 'scissors')
) { 
    humanScore++;
    console.log(`Your Score is ${humanScore} and Computer's Score is ${computerScore}`)
    console.log("You Win");
}
else if(
    (computerChoice === 'scissors' && humanChoice === 'scissors') ||
    (computerChoice === 'rock' && humanChoice === 'rock') ||
    (computerChoice === 'paper' && humanChoice === 'paper')
) { 
    console.log("It's a tie!");
} else {
    console.log("Enter correct values");
  }
}

playRound(humanSelection, computerSelection);
console.log(humanSelection);
console.log(computerSelection);

