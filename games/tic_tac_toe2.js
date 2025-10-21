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
  if (confirmation) return play();
  console.log("Thanks for playing... 👋👋");
}

function isTileFilled(BOARD, tile) {
  const box = [
    [0,0],[0,1],[0,2],
    [1,0],[1,1],[1,2],
    [2,0],[2,1],[2,2]
  ];
  const [i, j] = box[tile - 1];
  return BOARD[i][j] !== "";
}

function placeValue(BOARD, tile, playerChar, playerNumber) {
  const box = [
    [0,0], [0,1], [0,2],
    [1,0], [1,1], [1,2],
    [2,0], [2,1], [2,2]
  ];

  const [i, j] = box[tile - 1];
  BOARD[i][j] = playerChar;
}

function userInput(BOARD, playerNumber, playerChar) {
  const tile = parseInt(
    prompt(`Player ${playerNumber} (${playerChar}) : Enter the block number (1–9):`)
  );

  if (isNaN(tile) || tile < 1 || tile > 9) {
    console.log("❌ Invalid input, try again!");
    return userInput(BOARD, playerNumber, playerChar);
  }

  if (isTileFilled(BOARD, tile)) {
    console.log("❌ Tile already filled! Try again.");
    return userInput(BOARD, playerNumber, playerChar);
  }

  placeValue(BOARD, tile, playerChar);
  printBoard(BOARD);
}

function checkWinner(BOARD, playerChar, playerNumber) {
  if (isWinner(BOARD, playerChar)) {
    console.log(`🎉 Player ${playerNumber} (${playerChar}) wins!`);
    return true;
  }
  return false;
}

function currentPlayer(turn) {
  return turn % 2 === 0 ? [1, 'X'] : [2, 'O'];
}

function makeMove(BOARD, turn) {
  const [num, char] = currentPlayer(turn);
  userInput(BOARD, num, char);
  return [num, char ];
}

function play() {
  const BOARD = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

  let turn = 0;
  let gameOver = false;

  while (turn < 9 && !gameOver) {
    printBoard(BOARD);
    const [ num, char ] = makeMove(BOARD, turn);
    gameOver = checkWinner(BOARD, char, num);
    if (gameOver) return playAgain();
    turn++;
  }

  console.log("🤝 The match is a draw...");
  playAgain();
}

play();
