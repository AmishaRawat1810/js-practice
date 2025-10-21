const BOX = [
  ['', '', 'X'],
  ['', 'X', ''],
  ['X', '', '']
];

function diagonalCheck1() {
  const move = BOX[0][0];

  for (let i = 1; i < 3; i++) {
    if (BOX[i][i] !== move) {
      return false;
    }
  }

  return true
}

function diagonalCheck2() {
  const move = BOX[1][3];
  const result = BOX[2][2] === move && BOX[1][3] === move;
  return result;
}

function playAgain() {
  if (value) {
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

function userInput(number) {
  //to-do validation
  const response = prompt(
    `Player ${number} :\nEnter the block number : (1-9) : `
  );
  return response;
}

function play() {
  let turns = 0;

  while(turns < 9) {
    const player1Move = userInput(1);
    pushValue(player1Move,'X');
    const player2Move = userInput(2);
    pushValue(player2Move,'Y');
    const win = diagonalCheck();
    if(win) {
      console.log("congrats ! you won !"); // to-do : which player won
      break;
    }
    turns = turns + 1;
  }

  const confirmation = confirm('Do you want to play again ?');
  playAgain(confirmation);
}

play()
console.log(BOX);
