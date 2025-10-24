const winCombination = [
    ["00", "01", "02"],
    ["10", "11", "12"],
    ["20", "21", "22"],
    ["00", "10", "20"],
    ["01", "11", "21"],
    ["02", "12", "22"],
    ["00", "11", "22"],
    ["02", "11", "20"],
];

const botMoves = [];
const opponentMoves = [];

function pad(count, string, char) {
  let paddedString = string.padStart(string.length + count, char);
  return paddedString;
}

function convertArrayToString(array) {
  const tempArray = [];

  for (let index = 0; index < array.length; index++) {
    let columnString = array[index].join("|");
    columnString = pad(5, columnString, " ");
    tempArray.push(columnString);
  }

  return tempArray.join("\n     ----|----|----\n");
}

function displayArray(array) {
  const convertedString = convertArrayToString(array);
  const paddedString = pad(2, convertedString, "\n");
  console.log(paddedString);
  console.log("\n \n")
}

function display(array) {
  console.clear();
  displayArray(array);
  console.log("\n------------------------------------------\n")
}

function isWinningCombination(array, winCombination, char) {
  for (let index = 0; index < winCombination.length; index++) {
    const currentElement = winCombination[index];
    const xCoor = currentElement[1];
    const yCoor = currentElement[0];

    if (array[yCoor][xCoor] !== char) {
      return false;
    }
  }

  return true;
}

function isPlayerWinner(array, char) {
  let isWinner = false;

  for (let index = 0; index < winCombination.length; index++) {
    isWinner = isWinningCombination(array, winCombination[index], char);
    if (isWinner) {
      return true;
    }
  }

  return false;
}

function updateArray(coordinates, array, char) {
  const yCoor = parseInt(coordinates[0]);
  const xCoor = parseInt(coordinates[1]);
  array[yCoor][xCoor] = char;
}

function isValidInput(playerInput) {
  return playerInput > 0 && playerInput < 10;
}

function getInput(playerName) {
  console.log("Enter the block number in order to chose the block");

  let playerInput = prompt(`Enter your choice ${playerName} : `);
  playerInput = parseInt(playerInput);

  if (isValidInput(playerInput)) {
    return playerInput;
  }

  console.log("❌ Invalid user Input, Try again \n");
  return getInput(playerName);
}

function getCoordinate(chosenBox) {
  const coordinates = ["00", "01", "02", "10", "11", "12", "20", "21", "22"];
  return coordinates[chosenBox - 1];
}

function isBlockEmpty(array, playerChosenCoordinate) {
  const yCoor = parseInt(playerChosenCoordinate[0]);
  const xCoor = parseInt(playerChosenCoordinate[1]);

  return array[yCoor][xCoor] !== " ❌ " && array[yCoor][xCoor] !== " 🟢 ";
}

function getChosenBlockPosition(playerName, array) {
  const playerChoice = getInput(playerName);
  const playerChosenCoordinate = getCoordinate(playerChoice);

  if (isBlockEmpty(array, playerChosenCoordinate)) {
    return playerChosenCoordinate;
  }

  console.log("Position has already been occupied \n");
  return getChosenBlockPosition(playerName, array);
}

function moveBesideCenter(array, opponentLastMove) {
  let botMove = getCoordinate(10 - opponentLastMove);
  //play opposite block, beside center if less than 4
  if (opponentLastMove < 4 && isBlockEmpty(botMove)) {
      return botMove;
  }
  //play opposite block, beside center if greater than 3
  botMove = getCoordinate((opponentLastMove % 4) + 2);
  if (isBlockEmpty(botMove)) {
    return botMove;
  }

  return -1;
}

function findDiagonalCorner(array) {
  const diagonalCorners = ["00", "22", "00", "02", "20", "20"];
  for (let i = 0; i < diagonalCorners.length; i++) {
    if (isBlockEmpty(array, diagonalCorners[i])) {
      return diagonalCorners[i];
    }
  }
  return -1;
}

function findAdjacentCorner(array, lastMove) {
  const outerCorners = ["00", "02", "20", "22"];
  const adjacentCorners = ["10", "22", "12", "20", "21", "20", "01", "22"];
  const sideBlocks = ["01", "10", "12", "21"];
  const isSideBlock = sideBlocks.includes(lastMove);

  const move = adjacentCorners.indexOf(lastMove);

  if (isSideBlock && move !== -1 && move + 1 < adjacentCorners.length) {
    return adjacentCorners[move + 1];
  }

  for (let i = 0; i < outerCorners.length; i++) {
    if (isBlockEmpty(array, outerCorners[i])) {
      return outerCorners[i];
    }
  }

  return -1;
}

function moveToCorner(array, lastMove) {
  if (lastMove === "11") {
    return findDiagonalCorner(array);
  }

  return findAdjacentCorner(array, lastMove);
}

function findWinningMove (array, playerSymbol) {
  for (let index = 0; index < winCombination.length; index++) {
    let count = 0;
    let emptyPosition = -1;
    const [a, b, c] = winCombination[index];

    for (let term = 0; term < 3; term++) {
      const position = winCombination[index][term];
      const coordinateY = position[0];
      const coordinateX = position[1];

      if (array[coordinateY][coordinateX] === playerSymbol) {
        count++;
      } else if (isBlockEmpty(array, position)) {
        emptyPosition = position;
      }
    }

    if (count === 2 && emptyPosition !== -1) {
      return emptyPosition;
    }
  }

  return -1;
}

function getBotPosition(p1Name, array) {
  const botSymbol = " ❌ ";
  const playerSymbol = " 🟢 ";
  
  //move to win
  const botWinMove = findWinningMove(array, botSymbol);
  if (botWinMove !== -1) return botWinMove;
  
  //block the opponent
  const opponentWinMove = findWinningMove(array, playerSymbol);
  if (opponentWinMove !== -1) return opponentWinMove;

  //take corner : diagonal / adjacent
  const lastMove = opponentMoves[opponentMoves.length - 1];
  const nextMove = moveToCorner(array, lastMove);
  if (nextMove !== -1) return nextMove;

  //take any block beside center
  return moveBesideCenter(array, lastMove);
}

function startGame(array, p1Name, p2Name) {
  let turns = 8;
  let currentTurn = 1;
  display(array);

  const p1ChosenCoordinate = getBotPosition(p1Name, array);
  botMoves.push(p1ChosenCoordinate);
  updateArray(p1ChosenCoordinate, array, " ❌ ");
  display(array);

  while (currentTurn <= turns) {
    const p2ChosenCoordinate = getChosenBlockPosition(p2Name, array);
    opponentMoves.push(p2ChosenCoordinate);
    updateArray(p2ChosenCoordinate, array, " 🟢 ");
    display(array);

    if (isPlayerWinner(array, " 🟢 ")) {
      console.log(`${p2Name} won the game 🎉🎉 \n`);
      return;
    }

    const p1ChosenCoordinate = getBotPosition(p1Name, array);
    botMoves.push(p1ChosenCoordinate);
    updateArray(p1ChosenCoordinate, array, " ❌ ");
    display(array);

    if (isPlayerWinner(array, " ❌ ")) {
      console.log(`${p1Name} won the game 🎉🎉 \n`);
      return
    }

    currentTurn += 2;
    console.log(currentTurn); 
  }

  console.log("It was draw.");
}

function config() {
  const array = [
    [" 1  ", " 2  ", " 3 "],
    [" 4  ", " 5  ", " 6 "],
    [" 7  ", " 8  ", " 9 "],
  ];
  const p1Name = "bot";
  const p2Name = prompt("Enter your name (p2) : ")

  console.log(`${p1Name} marker : " ❌ "`);
  console.log(`${p2Name} marker : " 🟢 "`);

  startGame(array, p1Name, p2Name);

  if (confirm("Do you wanna play again ? ")) {
    config();
  }
}

function main() {
  config();
}

main(); 
