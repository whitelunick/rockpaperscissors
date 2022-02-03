const plays = ["rock", "paper", "scissors"];

//The logic for the computer choosing rock, paper, or scissors
function computerPlay(){
    let rand = getRandomInt(1,4);
    switch(rand){
        case 1:
            return plays[0];
        case 2:
            return plays[1];
        case 3:
            return plays[2]; 
        default:
            return null;
    }
}

//A function to select a random integer within a range, used by the computer to select a play
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

//The logic to play a single round of rps 
function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return 0; 
    }
    else if(playerSelection === "rock" && computerSelection === "scissors" || 
    playerSelection === "scissors" && computerSelection == "paper" || 
    playerSelection === "paper" && computerSelection == "rock"){
        return 1;
    }
    else if(computerSelection === "rock" && playerSelection === "scissors" || 
    computerSelection === "scissors" && playerSelection == "paper" || 
    computerSelection === "paper" && playerSelection == "rock"){
        return 2;
    }
    else{
        return "error";
    }
}

//A game function that allows the user to play a best 3/5 against the computer
function game(){
    let playerScore = 0;
    let compScore = 0;
    for(i = 0; i < 5; i++){
        let computerSelection = computerPlay();
        let playerSelection = window.prompt("Choose rock, paper, or scissors");
        playerSelection = playerSelection.toLowerCase();
        if(playerSelection != "rock" && playerSelection != "scissors" && playerSelection != "paper"){
            console.log("invalid selection, please try again");
        }
        if(playRound(playerSelection, computerSelection) == 0){
            console.log(`This round is a tie! Your ${playerSelection} ties with the computer's ${computerSelection}`);
        }
        else if(playRound(playerSelection, computerSelection) == 1){
            console.log(`You win this round! Your ${playerSelection} beats the computer's ${computerSelection}`);
            playerScore++;
            if(playerScore == 3){
                i = 5;
            }
        }
        else if(playRound(playerSelection, computerSelection) == 2){
            console.log(`The computer wins this round! The computer's ${computerSelection} beats your ${playerSelection}`);
            compScore++;
            if(compScore == 3){
                i = 5;
            }
        }
        else{
            return "error";
        }
    }
    if(playerScore > compScore){
        console.log("You won the match!");
    }
    else if(compScore > playerScore){
        console.log("The computer won the match!");
    }
    else{
        return "error";
    }
}

game();


