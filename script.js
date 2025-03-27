let humanScore = 0;
let computerScore = 0;
let counter = 0;
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
  while (counter<5) {
    
  if (
    (computerChoice === 'rock' && humanChoice === 'scissors') ||
    (computerChoice === 'paper' && humanChoice === 'rock') ||
    (computerChoice === 'scissors' && humanChoice === 'paper')
) { 
    counter++;
    computerScore++;
    console.log(`Your Score is ${humanScore} and Computer's Score is ${computerScore}`);
    console.log("You Lose");
} else if (
    (computerChoice === 'scissors' && humanChoice === 'rock') ||
    (computerChoice === 'rock' && humanChoice === 'paper') ||
    (computerChoice === 'paper' && humanChoice === 'scissors')
) { 
    counter++;
    humanScore++;
    console.log(`Your Score is ${humanScore} and Computer's Score is ${computerScore}`)
    console.log("You Win");
}
else if(
    (computerChoice === 'scissors' && humanChoice === 'scissors') ||
    (computerChoice === 'rock' && humanChoice === 'rock') ||
    (computerChoice === 'paper' && humanChoice === 'paper')
) { 
    counter++;
    console.log(`Your Score is ${humanScore} and Computer's Score is ${computerScore}`)
    console.log("It's a tie!");
} else {
    console.log("Enter correct values");
   }
 }
 
  if (computerScore>humanScore) {
   console.log("You Lost completely, Better Luck next Time!")
 } else if (humanScore>computerScore) {
   console.log("That's a win!!")
 } else {
   console.log("It's a tie on both ends!")
 }

}



playRound(humanSelection, computerSelection);
console.log(humanSelection);
console.log(computerSelection);
