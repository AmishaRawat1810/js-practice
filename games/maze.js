const maze1 = [
  '####################'.split(''),
  '#🙂   #         #  #'.split(''),
  '# ## # ### #### # ##'.split(''),
  '# #    #     #    ##'.split(''),
  '# #### ### # #######'.split(''),
  '#      #    #      #'.split(''),
  '##################E#'.split('')
]

const maze2 = [
  '##########################'.split(''),
  '#🙂     #       #        #'.split(''),
  '# ### ### ##### # ###### #'.split(''),
  '#   #   #   #   # #    # #'.split(''),
  '### # ##### # ### # ## # #'.split(''),
  '#   #     # #     # ##   #'.split(''),
  '# ####### # ####### ######'.split(''),
  '#       # #       #      E'.split(''),
  '##########################'.split('')
]

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
]

function displayMaze (maze) {
  for (let i = 0; i < maze.length; i++) {
    let line = ''
    for (let j = 0; j < maze[i].length; j++) {
      line += maze[i][j]
    }
    console.log(line)
  }
}

function playerPositionAtStart (maze) {
  const randomIndex = Math.floor(Math.random() * 9)
  if (maze[randomIndex][randomIndex] !== '#') {
    maze[randomIndex, randomIndex] = "_";
    return [randomIndex, randomIndex]
  }
  return playerPositionAtStart(maze)
}

function operateOnCoordinate (playerCoordinate, y, x) {
  return [playerCoordinate[0] + y, playerCoordinate[1] + x]
}

function updatePosition (playerCoordinate, playerMove, maze) {
  const moves = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ] // W, S, A, D
  const movement = ['w', 's', 'a', 'd']
  const [y, x] = moves[movement.indexOf(playerMove)]
  if (maze[y, x] !== '#') {
    const updatedPosition = operateOnCoordinate(playerCoordinate, y, x)
    return updatedPosition
  }

  return "INVALID MOVE";
}

let playerCoordinate = playerPositionAtStart(maze3)

function movePlayer (maze, playerMove) {
  const [row, col] = playerCoordinate
  maze[(row, col)] = ' '

  const [newRow, newCol] = updatePosition(playerCoordinate, playerMove, maze)

  if (maze[(newRow, newCol)] !== '#') {
    playerCoordinate = [newRow, newCol]
  }
  const [r, c] = playerCoordinate;
  maze[r, c] = '_';
}

movePlayer(maze3, 'a')
displayMaze(maze3)
