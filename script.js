let humanChoice = 'rock'
let randomizer = Math.floor(Math.random() * 3)
let computerChoice = 'Rock'.toLowerCase()
let humanScore = 0;
let computerScore = 0;

// Leaving getHumanChoice empty for future use
function getHumanChoice() {

}

function getComputerChoice(theChoice) {
    switch (theChoice) {
        case 0:
            return 'rock'
            break;
        case 1:
            return 'paper'
            break;
        case 2:
            return 'scissors'
    }
}

if (
    (computerChoice === 'rock' && humanChoice === 'scissors') ||
    (computerChoice === 'paper' && humanChoice === 'rock') ||
    (computerChoice === 'scissors' && humanChoice === 'paper')
) {
    console.log("You Lose")
} else if (
    (computerChoice === 'scissors' && humanChoice === 'rock') ||
    (computerChoice === 'rock' && humanChoice === 'paper') ||
    (computerChoice === 'paper' && humanChoice === 'scissors')
) {
    console.log("You Win")
}
else if(
    (computerChoice === 'scissors' && humanChoice === 'scissors') ||
    (computerChoice === 'rock' && humanChoice === 'rock') ||
    (computerChoice === 'paper' && humanChoice === 'paper')
) {
    console.log("It's a tie!")
} else {
    console.log("Enter correct values")
}

console.log(computerChoice)
