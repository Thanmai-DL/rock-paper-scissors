function computerPlay() {
    let compChoice = ['rock','paper','scissors']
    return compChoice[Math.floor(Math.random()*compChoice.length)];
}
// console.log(computerPlay())

function playRound(computerSelection,playerSelection) {
    console.log(`${playerSelection} \t ${computerSelection}`)
    src1 = `./resources/${playerSelection}.gif`
    src2 = `./resources/${computerSelection}.gif`
    gif.innerHTML = `<img src="${src1}"></img><div class="game-text">VS</div><img src="${src2}"></img>`
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

function game(result) {
        if((playerScore < 5 && computerScore <5)) {
            if(result.substr(4,3) == 'Win') {
                playerScore += 1
            }
            else if(result.substr(4,4) == 'Lose') {
                computerScore += 1
            }
            else {
                //pass
            }
            scoreBoard.innerHTML = `<span>Player - ${playerScore} Computer - ${computerScore}</span>`
        }
        else {
            const winner = (playerScore>computerScore) ? 'Player Won':'Computer Won'
            scoreBoard.innerHTML = `<span>${winner}</span>`
        }
    console.log(`Player Score - ${playerScore}\nComputer Score - ${computerScore}`)
}


let playerInput
let playerScore = 0
let computerScore = 0
const btn = document.querySelectorAll('button')
const scoreBoard = document.getElementById('score')
const gif = document.querySelector('#game')

btn.forEach((item)=>item.addEventListener('click',buttonClick))
function buttonClick(e) {
    playerInput = e.target.textContent.toLowerCase()
    result = playRound(computerPlay(),playerInput)
    game(result)
}

// console.log(btn)
// btn.forEach((item) => {
//     item.addEventListener('click', () => {
//         playerInput = (item.textContent.toLowerCase())
//         console.log(playerInput)
//     })
// })

/*1 - take input from button
2 - trigger game func on button click
3 - run game for max of 5 rounds*/