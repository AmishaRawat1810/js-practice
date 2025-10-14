const maze3 = [
  '#####################################'.split(''),
  '# #    #       #         #     #    #'.split(''),
  '### # ### ### ### ##### ### # ### # #'.split(''),
  '# # #     # #   #   #   #   #   # # #'.split(''),
  '# # ####### ##### # # ##### ### # # #'.split(''),
  '# #       #     # # #   #   #   #   #'.split(''),
  '# ####### ##### ### ### ### ### #####'.split(''),
  '#       #     #     #     #   #     E'.split(''),
  '#####################################'.split('')
];

function displayMaze(maze) {
  for (let i = 0; i < maze.length; i++) {
    let line = '';
    for (let j = 0; j < maze[i].length; j++) {
      line += maze[i][j];
    }
    console.log(line);
  }
}

function playerPositionAtStart(maze) {
  const randomIndex = Math.floor(Math.random() * 9);
  if (maze[randomIndex][randomIndex] !== '#') {
    maze[randomIndex][randomIndex] = '_';
    return [randomIndex, randomIndex];
  }
  return playerPositionAtStart(maze);
}

function operateOnCoordinate(playerCoordinate, y, x) {
  return [playerCoordinate[0] + y, playerCoordinate[1] + x];
}

function updatePosition(playerCoordinate, playerMove, maze) {
  const moves = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ]; // W, S, A, D
  const movement = ['w', 's', 'a', 'd'];
  const [y, x] = moves[movement.indexOf(playerMove)];
  
  const [newY, newX] = operateOnCoordinate(playerCoordinate, y, x);
  console.log('Trying to move to:', newY, newX, '=>', `["${maze[newY][newX]}"]`);
  if (maze[newY][newX] !== '#') {
    console.log('Moved to :', newY, newX);
    return [newY, newX];
  }
  return playerCoordinate;
}

let playerCoordinate = playerPositionAtStart(maze3);

function movePlayer(maze, playerMove) {
  const [row, col] = playerCoordinate;
  maze[row][col] = ' ';

  const [newRow, newCol] = updatePosition(playerCoordinate, playerMove, maze);

  if (maze[newRow][newCol] !== '#') {
    playerCoordinate = [newRow, newCol];
  }

  const [r, c] = playerCoordinate;
  maze[r][c] = '_';
}

// displayMaze(maze3);
movePlayer(maze3, 'w');
displayMaze(maze3);
