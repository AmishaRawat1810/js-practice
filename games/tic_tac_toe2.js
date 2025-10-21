const BOARD = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

function printBoard () {
  console.clear();
  for (let i = 0; i < 3; i++) {
    console.log(BOARD[i].join(' | '));
  }
  console.log('\n');
}

function mapCombinationWithBoard (winCombination, char) {
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

function isWinner (char) {
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
    const win = mapCombinationWithBoard(winCombination[index], char);
    if (win) {
      return true;
    }
  }

  return false;
}

function playAgain () {
  const confirmation = confirm('Do you want to play again ?');
  if (confirmation) {
    return play();
  }
  console.log("Thanks for playing... 👋👋");
}

function placeValue (tile, value, playerNumber) {
  const box = [
    [0,0], [0,1], [0,2],
    [1,0], [1,1], [1,2],
    [2,0], [2,1], [2,2]
  ];

  const [i, j] = box[tile - 1];
  if(BOARD[i][j] !== "") {
    console.log("❌ Tile is already filled !");
    return userInput(playerNumber, value);
  }
  BOARD[i][j] = value;
}

function userInput (playerNumber, value) {
  const response = parseInt(
    prompt(`Player ${playerNumber} :\nEnter the block number : (1-9) : `)
  );

  if (isNaN(response) || response < 1 || response > 9) {
    console.log("❌ Invalid input, try again!");
    return userInput(playerNumber, value);
  }

  placeValue (response, value, playerNumber);
  return response;
}

function getPlayerMove (playerNumber, playerSymbol) {
  const playerMove = userInput(playerNumber, playerSymbol);
  printBoard();
  return;
}

function checkWinner (playerChar, playerNumber) {
  if (isWinner(playerChar)) {
    console.log(`🎉 Player ${playerNumber} (${playerChar}) wins!`);
    return true;
  }
  return false;
}

function play () {
  let turnCount = 0;
  let isGameOver = false;

  while(turnCount < 9 && !isGameOver) {
    printBoard();
    getPlayerMove(1, 'X');
    if (checkWinner('X', 1)) {
      isGameOver = true;
      return playAgain();
    }
    
    getPlayerMove(2, 'O');

    if (checkWinner('O', 2)) {
      isGameOver = true;
      return playAgain();
    }

    turnCount++;
  }

  if (!isGameOver) {
    console.log("🤝 The match is a draw...");
  }

  playAgain ();
}

play ();
