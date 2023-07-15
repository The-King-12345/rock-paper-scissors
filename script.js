function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'Rock';
    case 1:
      return 'Paper';
    case 2:
      return 'Scissors';
    default:
      console.error('getComputerChoice failed');
  }
}

function fixCase(string) {
  const stringLowerCase = string.toLowerCase();
  return stringLowerCase.charAt(0).toUpperCase() + stringLowerCase.slice(1);
}

function changeScore(value) {
  switch (value) {
    case 'win':
      playerScore++;
      break;
    case 'lose':
      computerScore++;
      break;
    case 'reset':
      playerScore = 0;
      computerScore = 0;
      break;
    default:
      console.error('changeScore has no value')
  }
}

function playRound(playerSelection, computerSelection) {
  const newPlayerSelection = fixCase(playerSelection);
  
  if (newPlayerSelection === computerSelection) {
    return `It's a Tie! You both picked ${newPlayerSelection}\nPlayer: ${playerScore}   Computer: ${computerScore}`;
  } else if ((newPlayerSelection === 'Rock' && computerSelection === 'Scissors') || (newPlayerSelection === 'Paper' && computerSelection === 'Rock') || (newPlayerSelection === 'Scissors' && computerSelection === 'Paper')) {
    changeScore('win');
    return `You Win! ${newPlayerSelection} beats ${computerSelection}\nPlayer: ${playerScore}   Computer: ${computerScore}`;
  } else {
    changeScore('lose');
    return `You Lose! ${computerSelection} beats ${newPlayerSelection}\nPlayer: ${playerScore}   Computer: ${computerScore}`;
  }
}

function getInput() {
  let inputValue;
  do {
    inputValue = prompt('Enter either Rock, Paper, or Scissors!');
  } while (inputValue && fixCase(inputValue) !== 'Rock' && fixCase(inputValue) !== 'Paper' && fixCase(inputValue) !== 'Scissors')
  
  if (inputValue) {
    return fixCase(inputValue);
  } else {
    return 'Exit';
  }
}

function game () {
  changeScore('reset')

  while ((playerScore < 5) && (computerScore < 5)) {
    const playerSelection = getInput();
    if (playerSelection === 'Exit') {
      return
    }
    const computerSelection = getComputerChoice();

    alert(playRound(playerSelection, computerSelection));
  }

  const endMessage = (playerScore >= 5) ? 'You Win!' : 'You Lose!';
  alert(endMessage)
}

let playerScore;
let computerScore;

game();