const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection))
console.log(playerSelection)
console.log(computerSelection)

function playRound(playerSelection, computerSelection){
    let result;
    if(computerSelection === playerSelection){
        result = "It's a draw!"
    }
    if(computerSelection === 'rock' && playerSelection === 'paper'){
        result = "You Win!"
    }
    if(computerSelection === 'rock' && playerSelection === 'scissor'){
        result = "You Lost!"
    }
    if(computerSelection === 'paper' && playerSelection === 'scissor'){
        result = "You Win!"
    }
    if(computerSelection === 'paper' && playerSelection === 'rock'){
        result = "You Lost!"
    }
    if(computerSelection === 'scissor' && playerSelection === 'rock'){
        result = "You Win!"
    }
    if(computerSelection === 'scissor' && playerSelection === 'paper'){
        result = "You Lost!"
    }
    return result;
}

function computerPlay(){
    let max = 3;
    let result;
    let randomSelect = Math.floor(Math.random() * max);
    switch(randomSelect){
        case 0: result = "rock";
        break;
        case 1: result = "paper";
        break;
        case 2: result = "scissor";
        break;
    }
    return result;
}

