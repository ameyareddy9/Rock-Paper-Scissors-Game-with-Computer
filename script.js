function getComputerChoice() {
    const a = 1/3
    const b = 2/3
    let c = Math.random()
    
    return (c < a) ? "rock" : (c < b) ? "paper" : "scissors"
}

function getHumanChoice() {
    const playerChoice = prompt(`Type either "rock" or "paper" or "scissors"`)
    return playerChoice
}

