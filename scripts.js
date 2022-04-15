function computerPlay() {
    let compChoice = ['rock','paper','scissors']
    return compChoice[Math.floor(Math.random()*compChoice.length)];
}
// console.log(computerPlay())

function playRound(computerSelection,playerSelection) {
    console.log(`Player's choice - ${playerSelection} \nComputer's Choice - ${computerSelection}`)
    switch(playerSelection) {
        case 'rock': if(computerSelection === 'scissors') {
            return `You Win! ${playerSelection} beats ${computerSelection}`
        }
        else if(computerSelection === 'paper') {
            return `You Lose! ${computerSelection} beats ${playerSelection}`
        }
        return 'It\'s a Draw'
        case 'paper': if(computerSelection === 'rock') {
            return `You Win! ${playerSelection} beats ${computerSelection}`
        }
        else if(computerSelection === 'scissors') {
            return `You Lose! ${computerSelection} beats ${playerSelection}`
        }
        return 'It\'s a Draw'
        case 'scissors': if(computerSelection === 'paper') {
            return `You Win! ${playerSelection} beats ${computerSelection}`
        }
        else if(computerSelection === 'rock') {
            return `You Lose! ${computerSelection} beats ${playerSelection}`
        }
        return 'It\'s a Draw'
        default: return 'Invalid Input'
    }

}

function game() {
    let playerScore = 0
    let computerScore = 0
    for(let i=0 ; i<5 ; i++) {
        const computerSelection = computerPlay()
        const playerSelection = prompt('Enter your choice','').toLowerCase()
        const result = playRound(computerSelection, playerSelection)
        console.log(result)
        if(result.substr(4,3) == 'Win') {
            playerScore += 1
        }
        else if(result.substr(4,3) == 'Lose') {
            computerScore += 1
        }
        else {
            continue
        }
    }
    console.log(`Player Score - ${playerScore}\nComputer Score - ${computerScore}`)
    return playerScore>computerScore ? 'Player Won':'Computer Won'
    //score 0-0 not coded. Also score not right when outcome is a draw
}
console.log(game())

