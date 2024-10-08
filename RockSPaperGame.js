console.log("hi");

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();

  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("error");
    return userInput;
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "tie";
  }

  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "computer won";
    } else {
      return "user won";
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "computer won";
    } else {
      return "user won";
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "computer won";
    } else {
      return "user won";
    }
  }
};

const playGame = () => {
  let userChoice = getUserChoice("scissors");
  console.log(`You choice ${userChoice}`);

  let computerChoice = getComputerChoice();
  console.log(`Computer choice ${computerChoice}`);

  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
