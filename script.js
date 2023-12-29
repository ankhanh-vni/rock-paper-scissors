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

function getPlayerChoice() {
  while (true) {
    const input = prompt("What is your choice?\n0 for rock\n1 for scissors\n2 for paper") ?? "";
    if (input.trim() === "") {
      console.log("No input detected. Choose again");
      continue;
    }
    const playerChoice = Number(input);
    if (playerChoice === 0 || playerChoice === 1 || playerChoice === 2) {
      return playerChoice;
    }
    console.log("Invalid choice. Choose 0, 1, or 2");
  }
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
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
  logScoreMessage(scores.player,scores.computer);
}

function turn() {
  const playerChoice = getPlayerChoice();
  const computerChoice = getRandomIntInclusive(0, 2);
  logChoice(playerChoice, computerChoice);
  updateScore(playerChoice, computerChoice);
  for (let key in scores) {
    if (scores[key] === WIN_THRESHOLD) {
      const name = key[0].toUpperCase() + key.slice(1);
      console.log(`${name} wins the game!`);
      return true;
    }
  }
  console.log("Let's continue");
  return false;
}

// Update header text
function game() {
  while (true) {
    if (turn()) {
      break;
    }
  }
}  

game();
