const BOARD = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

function printBoard() {
  console.clear();
  for (let i = 0; i < 3; i++) {
    console.log(BOARD[i].join(' | '));
  }
  console.log('\n');
}

function diagonalCheck1(value) {
  const move = value;
  const result =
    BOARD[1][1] === move && BOARD[2][2] === move && BOARD[0][0] === move;
  return result;
}

function diagonalCheck2(value) {
  const move = value;
  const result =
    BOARD[1][1] === move && BOARD[2][0] === move && BOARD[0][2] === move;
  return result;
}

function horizontalCheck(value) {
  for (let i = 0; i < 3; i++) {
    const move = value;
    const result =
      BOARD[i][1] === move && BOARD[i][2] === move && BOARD[i][0] === move;
    if(result) {
      return true;
    }
  }
  return false;
}

function verticalCheck(value) {
  for (let i = 0; i < 3; i++) {
    const move = value;
    const result =
      BOARD[1][i] === move && BOARD[2][i] === move && BOARD[0][i] === move;
    if(result) {
      return true;
    }
  }
  return false;
}

function isWinner(move) {
  return (
    diagonalCheck1(move) ||
    diagonalCheck2(move) ||
    horizontalCheck(move) ||
    verticalCheck(move)
  );
}

function playAgain() {
  const confirmation = confirm('Do you want to play again ?');
  if (confirmation) {
    return play();
  }
  console.log("Thanks for playing... 👋👋");
}

function placeValue(tile, value) {
  const box = [
    [0,0], [0,1], [0,2],
    [1,0], [1,1], [1,2],
    [2,0], [2,1], [2,2]
  ];

  const [i, j] = box[tile - 1];
  BOARD[i][j] = value;
}

function userInput(playerNumber, value) {
  const response = parseInt(prompt(
    `Player ${playerNumber} :\nEnter the block number : (1-9) : `
  ));

  if (isNaN(response) || response < 1 || response > 9) {
    console.log("❌ Invalid input, try again!");
    return userInput(playerNumber, value);
  }

  placeValue(response, value);
  return response;
}

function getPlayerMove(playerNumber, playerSymbol) {
  const playerMove = userInput(playerNumber, playerSymbol);
  printBoard();
  return;
}

function checkWinner(playerChar, playerNumber) {
  if (isWinner(playerChar)) {
    console.log(`🎉 Player ${playerNumber} (${playerChar}) wins!`);
    return true;
  }
  return false;
}

function play() {
  let turnCount = 0;
  let isGameOver = false;

  while(turnCount < 9 && !isGameOver) {
    printBoard();
    getPlayerMove(1, 'X');
    getPlayerMove(2, 'O');
    isGameOver = checkWinner('X', 1) || checkWinner('O', 2);
    turnCount++;
  }

  if (!isGameOver) {
    console.log("🤝 The match is a draw...");
  }

  playAgain();
}

play();
