let userChoice = 'rock'
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
    (computerChoice === 'rock' && userChoice === 'scissors') ||
    (computerChoice === 'paper' && userChoice === 'rock') ||
    (computerChoice === 'scissors' && userChoice === 'paper')
) {
    console.log("You Lose")
} else if (
    (computerChoice === 'scissors' && userChoice === 'rock') ||
    (computerChoice === 'rock' && userChoice === 'paper') ||
    (computerChoice === 'paper' && userChoice === 'scissors')
) {
    console.log("You Win")
}
else if(
    (computerChoice === 'scissors' && userChoice === 'scissors') ||
    (computerChoice === 'rock' && userChoice === 'rock') ||
    (computerChoice === 'paper' && userChoice === 'paper')
) {
    console.log("It's a tie!")
} else {
    console.log("Enter correct values")
}

console.log(computerChoice)
