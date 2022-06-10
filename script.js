// prompt("Rock Scissors Paper")
let randomChoise;
let computerChoise;
let playerSelection;
let computerSelection;
let gameRound;

let computerPlay = function () {
    
    let randomChoise = Math.floor(Math.random() * 3) + 1;

    if(randomChoise === 1) {
        computerChoise = "Rock"
      }else if (randomChoise === 2) {
        computerChoise = "Scissors"
      }else (randomChoise === 3); {
        computerChoise = "Paper"
      }
console.log(computerChoise)

  }



  