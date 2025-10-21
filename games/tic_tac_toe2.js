function printBoard(BOARD){
  console.clear();
  for (let i = 0; i < 3; i++) {
    console.log(BOARD[i].join(' | '));
  }
  console.log('\n');
}

function mapCombinationWithBoard(BOARD, winCombination, char) {
  for (let index = 0; index < BOARD.length; index++) {
    const element = winCombination[index];
    const row = element[0];
    const col = element[1];
    const isWinCombination = BOARD[row][col] === char;

    if (!isWinCombination) {
      return false;
    }
  }

  return true;
}

function isWinner(BOARD, char) {
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

  for (let index = 0; index < winCombination.length; index++) {
    const win = mapCombinationWithBoard(BOARD, winCombination[index], char);
    if (win) {
      return true;
    }
  }

  return false;
}

function playAgain(BOARD) {
  const confirmation = confirm('Do you want to play again ?');
  if (confirmation) {
    return play();
  }
  console.log("Thanks for playing... 👋👋");
}

function placeValue(BOARD, tile, value, playerNumber) {
  const box = [
    [0,0], [0,1], [0,2],
    [1,0], [1,1], [1,2],
    [2,0], [2,1], [2,2]
  ];

  const [i, j] = box[tile - 1];
  if (BOARD[i][j] !== "") {
    console.log("❌ Tile is already filled!");
    return userInput(BOARD, playerNumber, value);
  }
  BOARD[i][j] = value;
}

function userInput(BOARD, playerNumber, value) {
  const response = parseInt(
    prompt(`Player ${playerNumber} :\nEnter the block number : (1-9) : `)
  );

  if (isNaN(response) || response < 1 || response > 9) {
    console.log("❌ Invalid input, try again!");
    return userInput(BOARD, playerNumber, value);
  }

  placeValue(BOARD, response, value, playerNumber);
  return response;
}

function getPlayerMove(BOARD, playerNumber, playerSymbol) {
  userInput(BOARD, playerNumber, playerSymbol);
  printBoard(BOARD);
}

function checkWinner(BOARD, playerChar, playerNumber) {
  if (isWinner(BOARD, playerChar)) {
    console.log(`🎉 Player ${playerNumber} (${playerChar}) wins!`);
    return true;
  }
  return false;
}

function play() {
  const BOARD = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

  let turnCount = 0;
  let gameOver = false;

  while (turnCount < 9 && !gameOver) {
    printBoard(BOARD);
    getPlayerMove(BOARD, 1, 'X');
    gameOver = checkWinner(BOARD, 'X', 1);
    if (gameOver) return playAgain(BOARD);

    getPlayerMove(BOARD, 2, 'O');
    gameOver = checkWinner(BOARD, 'O', 2);
    if (gameOver) return playAgain(BOARD);

    turnCount++;
  }

  console.log("🤝 The match is a draw...");
  playAgain(BOARD);
}

play();
