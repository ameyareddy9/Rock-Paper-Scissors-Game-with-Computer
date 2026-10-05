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

const buttonContainer = document.createElement("div");

const btn1 = document.createElement("button");
const btn2 = document.createElement("button");
const btn3 = document.createElement("button");

btn1.textContent = "rock";
btn2.textContent = "paper";
btn3.textContent = "scissors";

buttonContainer.appendChild(btn1);
buttonContainer.appendChild(btn2);
buttonContainer.appendChild(btn3);

buttonContainer.style.display = 'flex';
buttonContainer.style.gap = '20px'; 

document.body.appendChild(buttonContainer);

const output = document.createElement("div");
document.body.appendChild(output);
output.style.margin = "20px";
output.style.whiteSpace = 'pre-line';

const finalOutput = document.createElement("p");

const winText = "Congratulations! You won the game!";
const losText = "Hard luck! You lost the game...";
const tieText = "Its a Tie!";

finalOutput.style.fontWeight = 600;
document.body.appendChild(finalOutput)

function playGame () {
    let humanScore = 0;
    let computerScore = 0;

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
    
    let counter = 0;
    buttonContainer.addEventListener('click', (e) => {
        counter++;
        switch(true) {
            case counter > 5:
                finalOutput.textContent = "";
                output.textContent = "Game Over! Kindly refresh the page to restart the Game."
                break;

            case counter === 5:
                const userChoice1 = e.target.textContent;
                const computerChoice1 = getComputerChoice();

                playRound(userChoice1, computerChoice1);

                output.textContent = `Result of game after Five rounds:\n
                You selected ${userChoice1} and Computer selected ${computerChoice1}\n
                Your Score: ${humanScore}, Computer's Score: ${computerScore}`;

                
                if(humanScore > computerScore) finalOutput.textContent = winText;
                else if(humanScore < computerScore)finalOutput.textContent = losText;
                else finalOutput.textContent = tieText;
                break;

            default:
                const userChoice2 = e.target.textContent;
                const computerChoice2 = getComputerChoice();

                playRound(userChoice2, computerChoice2);

                output.textContent = `Round ${counter}\n
                You selected ${userChoice2} and Computer selected ${computerChoice2}\n
                Your Score: ${humanScore}, Computer's Score: ${computerScore}`;
        }
    });
}

playGame();