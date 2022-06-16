let computerChoice
let playerChoice
let playerScore = 0;
let computerScore = 0;

function toLow() {
    playerChoice = playerChoice.toLowerCase()
    computerChoice = computerChoice.toLowerCase()
}

function playRound(){

// User choosing rock scissors or paper

 playerChoice = prompt("What's your move"); 

// computer choosing rock scissors or paper

    function choiceGenerator() {
    
        randomChoice = Math.floor(Math.random() * 3) + 1;
     
         if(randomChoice === 1) {
             return  "Rock";
           }else if (randomChoice === 2) {
             return  "Scissors";
           }else (randomChoice === 3); {
             return  "Paper";
           }
           
         }
 
         computerChoice = choiceGenerator()

// converting choices to lowercase

   toLow();

    // comparing player and computer position to find a winner 

    if (playerChoice === computerChoice) {
               return  "it's a draw"
         } else if ( 
                    (playerChoice == "rock" && computerChoice == "scissors") ||
                    (playerChoice == "scissors" && computerChoice == "paper") ||
                    (playerChoice == "paper" && computerChoice == "rock")) {
                        playerScore ++
                        return "YOU WIN! Hooray"
                    }else {
                    computerScore ++
                        return "YOU LOSE! OH Nooooo"
                    }
                            
                   
         
}

// alert for testing



// roundResult = playRound();
//         alert(roundResult)


// play 5 round to find a winner


    

game()





// function game()  {
//     while (playerScore === 5 && computerScore === 5){
//         
//     }
    
// }