// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

let userChoice = 'r'
let randomizer = Math.floor(Math.random()*3)
let computerChoice = getComputerChoice(randomizer)
let humanScore = 0;
let computerScore = 0;

// Leaving getHumanChoice empty for future use
function getHumanChoice(){
    
}


function getComputerChoice(theChoice){
    switch (theChoice) {
    case 0:
        return 'r'
        break;
    case 1:
        return 'p'
        break;
    case 2:
        return 's'
   }
}

if ( 
     (computerChoice==='r' && userChoice==='s') ||
     (computerChoice==='p' && userChoice==='r') ||
     (computerChoice==='s' && userChoice==='p') 
     ) {
    console.log("You Lose")
  } else if(
     (computerChoice==='s' && userChoice==='r') ||
     (computerChoice==='r' && userChoice==='p') ||
     (computerChoice==='p' && userChoice==='s')
    ) {
    console.log("You Win")
    } else {
      console.log("Enter correct values")
  }
  
console.log(computerChoice)
