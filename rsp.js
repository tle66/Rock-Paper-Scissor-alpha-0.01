let humanScore = 0
let computerScore = 0
function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissor']
    let chosen = Math.floor(Math.random() * choices.length)
    return choices[chosen]
}

function getHumanChoice(){
    let choice = prompt("choose Rock, Paper, or Scissor")
    return choice
}

function playRound(humanChoice, computerChoice) {
  const hc = humanChoice.toLowerCase();
  const cc = computerChoice;

  if (hc === cc) {
    console.log(`It's a tie! You both chose ${hc}`);
  } else if (
    (hc === "rock" && cc === "scissors") ||
    (hc === "paper" && cc === "rock") ||
    (hc === "scissors" && cc === "paper")
  ) {
    console.log(`You win! ${hc} beats ${cc}`);
    humanScore++;
  } else {
    console.log(`You lose! ${cc} beats ${hc}`);
    computerScore++;
  }
}

// Step 6: Play the full game
function playGame() {
  humanScore = 0;
  computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Score after round ${i + 1}: Human ${humanScore} - Computer ${computerScore}`);
  }

  if (humanScore > computerScore) {
    console.log("🎉 You won the game!");
  } else if (computerScore > humanScore) {
    console.log("💻 Computer won the game!");
  } else {
    console.log("🤝 It's a draw!");
  }
}
playGame();