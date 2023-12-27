playerScore = 0;
computerScore = 0;
PLAYER_WIN_MESSAGE = "Player wins the round";
COMPUTER_WIN_MESSAGE = "Computer wins the round";
DRAW_MESSAGE = "It's a draw"
CHOICES = {
    0: "rock",
    1: "scissors",
    2: "paper"
}
WIN_THRESHOLD = 2;

function getPlayerChoice() {
  while (true) {
  	let playerChoice = Number(prompt("What is your choice?\n0 for rock\n1 for scissors\n2 for paper"));
  	if (playerChoice === 0 || playerChoice === 1 || playerChoice === 2) {
  		return playerChoice;
  	}
    console.log("Invalid choice. Choose again")
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

function getScoreMessage(playerScore, computerScore) {
  return `Scores: Player: ${playerScore} - Computer: ${computerScore}`;
}




function updateScore(playerChoice, computerChoice) {
  const difference = playerChoice - computerChoice;
  switch (difference) {
    case -1:
    case 2:
        playerScore++;
        console.log(PLAYER_WIN_MESSAGE);
        console.log(getScoreMessage(playerScore, computerScore));
        break;
    case 0:
    	console.log(DRAW_MESSAGE);
      break;
    default:
    	computerScore++;
        console.log(COMPUTER_WIN_MESSAGE);
        console.log(getScoreMessage(playerScore,computerScore));
    	break;
  }
}

function turn() {
	let playerChoice = getPlayerChoice();
	let computerChoice = getRandomIntInclusive(0,2);
	logChoice(playerChoice, computerChoice);
	updateScore(playerChoice, computerChoice);
}

// Update header text

 while (true) {
 	turn();
  if (playerScore === WIN_THRESHOLD) {
  	console.log("Player Victory");
    break;
   }
  if (computerScore === WIN_THRESHOLD) {
  	console.log("Computer Victory");
    break;
  }
  console.log("Let's continue");
}