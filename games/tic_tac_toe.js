function printBoard(BOARD){
  console.clear();
  for (let i = 0; i < 3; i++) {
    console.log(BOARD[i].join(' | '));
  }
  console.log('\n');
}

function diagonalCheck1(BOARD, move) {
  return BOARD[0][0] === move && BOARD[1][1] === move && BOARD[2][2] === move;
}

function diagonalCheck2(BOARD, move) {
  return BOARD[0][2] === move && BOARD[1][1] === move && BOARD[2][0] === move;
}

function horizontalCheck(BOARD, value) {
  return BOARD.some(row => row.every(cell => cell === value));
}

function verticalCheck(BOARD, value) {
  for (let i = 0; i < 3; i++) {
    if (
      BOARD[0][i] === value &&
      BOARD[1][i] === value &&
      BOARD[2][i] === value) {
      return true;
    }
  }
  return false;
}

function isWinner(BOARD, value) {
  return (
    diagonalCheck1(BOARD, value) ||
    diagonalCheck2(BOARD, value) ||
    horizontalCheck(BOARD, value) ||
    verticalCheck(BOARD, value)
  );
}

function placeValue(BOARD, tile, value, playerNumber) {
  const box = [
    [0,0], [0,1], [0,2],
    [1,0], [1,1], [1,2],
    [2,0], [2,1], [2,2]
  ];

  const [i, j] = box[tile - 1];
  if (BOARD[i][j] !== '') {
    console.log("❌ Tile is already filled!");
    return userInput(BOARD, playerNumber, value);
  }

  BOARD[i][j] = value;
}

function userInput(BOARD, playerNumber, value) {
  const response = parseInt(
    prompt(`Player ${playerNumber}:\nEnter the block number (1–9):`)
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

function playAgain() {
  const confirmation = confirm('Do you want to play again?');
  confirmation ? play() : console.log("Thanks for playing 👋");
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
    if (gameOver) return playAgain();

    getPlayerMove(BOARD, 2, 'O');
    gameOver = checkWinner(BOARD, 'O', 2);
    if (gameOver) return playAgain();

    turnCount++;
  }

  console.log("🤝 The match is a draw...");
  playAgain();
}

play();
