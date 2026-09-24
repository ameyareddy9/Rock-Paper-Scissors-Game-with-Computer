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

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()

    if(humanChoice !== computerChoice) {
        const h = humanChoice
        const c = computerChoice

        if(h === "rock") {
            if(c === "scissors") humanScore++
            else computerScore++
        }
        else if(h === "scissors") {
            if(c === "paper") humanScore++
            else computerScore++
        }
        else {
            if(c === "rock") humanScore++
            else computerScore++
        }
    }
}

function playGame () {
    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase()

        if(humanChoice !== computerChoice) {
            const h = humanChoice
            const c = computerChoice

            if(h === "rock") {
                if(c === "scissors") humanScore++
                else computerScore++
            }
            else if(h === "scissors") {
                if(c === "paper") humanScore++
                else computerScore++
            }
            else {
                if(c === "rock") humanScore++
                else computerScore++
            }
        }
    }

    let T = 5
    while(T--) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        alert(`Round ${5-T}'s results\nYou chose ${humanSelection.toLowerCase()} and computer chose ${computerSelection}\nYour score = ${humanScore} and computer score = ${computerScore}`)
    }
    
    alert(`FINAL SCORE AFTER FIVE ROUNDS:\nYour score: ${humanScore} Computer score: ${computerScore}`)
}

playGame()