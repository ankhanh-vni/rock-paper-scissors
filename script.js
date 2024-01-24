let scores = {
  player: 0,
  computer: 0,
};
const PLAYER_WIN_MESSAGE = "Player wins the round";
const COMPUTER_WIN_MESSAGE = "Computer wins the round";
const DRAW_MESSAGE = "It's a draw";
const CHOICES = {
  0: "rock",
  1: "scissors",
  2: "paper",
};
const WIN_THRESHOLD = 2;

document.querySelector(".rock").addEventListener("click", () => turn(0));
document.querySelector(".scissors").addEventListener("click", () => turn(1));
document.querySelector(".paper").addEventListener("click", () => turn(2));

// function getPlayerChoice() {
//   while (true) {
//     const input = prompt("What is your choice?\n0 for rock\n1 for scissors\n2 for paper") ?? "";
//     if (input.trim() === "") {
//       console.log("No input detected. Choose again");
//       continue;
//     }
//     const playerChoice = Number(input);
//     if (playerChoice === 0 || playerChoice === 1 || playerChoice === 2) {
//       return playerChoice;
//     }
//     console.log("Invalid choice. Choose 0, 1, or 2");
//   }
// }
function getComputerChoice() {
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
    }
  return getRandomIntInclusive(0, 2);
}

function logChoice(playerChoice, computerChoice) {
  console.log(`Player chooses ${CHOICES[playerChoice]}`);
  console.log(`Computer chooses ${CHOICES[computerChoice]}`);
}

function logScoreMessage(playerScore, computerScore) {
  console.log(`Scores: Player: ${playerScore} - Computer: ${computerScore}`);
}

function updateScore(playerChoice, computerChoice) {
  const difference = playerChoice - computerChoice;
  // Follow the rule of rock > scissors > paper > rock. A difference of -1 means player chooses the preceeding choice of computer's choice. A differene of 2 is a wrap around from paper to rock.
  switch (difference) {
    case -1:
    case 2:
      scores.player++;
      console.log(PLAYER_WIN_MESSAGE);
      break;
    case 0:
      console.log(DRAW_MESSAGE);
      break;
    default:
      scores.computer++;
      console.log(COMPUTER_WIN_MESSAGE);
      break;
  }
}

function checkGameOver() {
    for (let key in scores) {
      if (scores[key] === WIN_THRESHOLD) {
        const name = key[0].toUpperCase() + key.slice(1);
        console.log(`${name} wins the game!`);
        console.log("Let's play again");
        console.log("=====================================")
        console.log("New game started")
        scores.player = 0;
        scores.computer = 0;
        logScoreMessage(scores.player, scores.computer);
        return;

      }
    }
    console.log("Let's continue");
}

function turn(choice) {
  const playerChoice = choice;
  const computerChoice = getComputerChoice();
  logChoice(playerChoice, computerChoice);
  updateScore(playerChoice, computerChoice);
  logScoreMessage(scores.player, scores.computer);
  checkGameOver();
}
