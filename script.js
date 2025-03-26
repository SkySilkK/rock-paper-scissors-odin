let userChoice = 'r'
let computerChoice = Math.floor(Math.random()*3)

switch (computerChoice) {
    case 0:
        computerChoice='r'
        break;
    case 1:
        computerChoice='p'
        break;
    case 2:
        computerChoice='s'
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
