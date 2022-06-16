let computerChoice
let playerChoice

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


// converting choises to lowercase

        playerChoice = playerChoice.toLowerCase()
        computerChoice = computerChoice.toLowerCase()


// comparing player and computer position to find a winner 


function playRound(){
    function lowCase() { 
        
    }

    if (playerChoice === computerChoice) {
               return  "it's a draw"
         } else if ( 
                    (playerChoice == "rock" && computerChoice == "scissors") ||
                    (playerChoice == "scissors" && computerChoice == "paper") ||
                    (playerChoice == "paper" && computerChoice == "rock")) {
                        return "YOU WIN! Hooray"
                    }else {
                        return "YOU LOSE! OH Nooooo"
                    }
                            
                    
         
}


let roundResult = playRound();
alert(roundResult)



 

 
  
  

// playerChoise = prompt("Wybierz coś")

// let computerPlay = function () {
    
//     let randomChoise = Math.floor(Math.random() * 3) + 1;

//     if(randomChoise === 1) {
//         computerChoise = "Rock"
//       }else if (randomChoise === 2) {
//         computerChoise = "Scissors"
//       }else (randomChoise === 3); {
//         computerChoise = "Paper"
//       }
// return computerChoise

//   }

//   let gameRound = function(playerChoise,computerChoise){
//     playerChoise = prompt("Rock Scissors Paper");
//     if (playerChoise === computerChoise) {
//         result = "it's a draw"
//     }else if (playerChoise === "Rock" && computerChoise === "Scissors"){
//         result = "You win!"
//     }else if (playerChoise === "Rock" && computerChoise === "Paper"){
//         result = "You lose!"
//     }else if (playerChoise === "Scissors" && computerChoise === "Paper"){
//         result = "You win!"
//     }else if (playerChoise === "Scissors" && computerChoise === "Rock"){
//         result = "You lose!"
//     }else if (playerChoise === "Paper" && computerChoise === "Rock"){
//         result = "You win!"
//     }else if(playerChoise === "Paper" && computerChoise === "Scissors"){
//         result = "You lose!"
//     }



//   }

// let game = function() {
//     for(i = 0; i < 5; i++){
//         gameRound()
//         console.log(result)
//     }
