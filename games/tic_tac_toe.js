const BOX = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

function display() {
  console.clear();
  for (let i = 0; i < 3; i++) {
    console.log(BOX[i].join(' | '));
  }
  console.log('\n');
}

function diagonalCheck1(value) {
  const move = value;
  const result = BOX[1][1] === move && BOX[2][2] === move && BOX[0][0] === move;
  return result;
}

function diagonalCheck2(value) {
  const move = value;
  const result = BOX[1][1] === move && BOX[2][0] === move && BOX[0][2] === move;
  return result;
}

function horizontalCheck(value) {
  for (let i = 0; i < 3; i++) {
    const move = value;
    const result = BOX[i][1] === move && BOX[i][2] === move && BOX[i][0] === move;
    if(result) {
      return true;
    }
  }
  return false;
}

function verticalCheck(value) {
  for (let i = 0; i < 3; i++) {
    const move = value;
    const result = BOX[1][i] === move && BOX[2][i] === move && BOX[0][i] === move;
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

function pushValue(tile, value) {
  const box = [
    [0,0], [0,1], [0,2],
    [1,0], [1,1], [1,2],
    [2,0], [2,1], [2,2]
  ];

  const [i, j] = box[tile - 1];
  BOX[i][j] = value;
}

function userInput(number, value) {
  const response = parseInt(prompt(
    `Player ${number} :\nEnter the block number : (1-9) : `
  ));

  if (isNaN(response) || response < 1 || response > 9) {
    console.log("❌ Invalid input, try again!");
    return userInput(number);
  }

  pushValue(response, value);
  return response;
}

function play() {
  let turns = 0;

  while(turns < 9) {
    const player1Move = userInput(1, 'X');
    display();
    const winX = isWinner('X');
    if (winX) {
      console.log("🎉 Player 1 (X) wins!");
      break;
    }

    const player2Move = userInput(2, 'O');
    display();
    const winO = isWinner('O');
    if (winO) {
      console.log("🎉 Player 2 (O) wins!");
      break;
    }

    turns = turns + 1;
  }
  playAgain();
}

play()
console.log(BOX);
