/*
---> Circle :
  - grid : h x w
  - circle center : centerX, centerY
  - radius
*/
function square (num) {
  return num * num;
}

function distanceBtwPoint (point1, point2) {
  const point1X = point1[0];
  const point1Y = point1[1];
  const point2X = point2[0];
  const point2Y = point2[1];

  const distance = Math.sqrt(square(point2X - point1X) + square (point2Y - point1Y));
  return distance;
}

function drawCircle (cols, rows, centerX, centerY, radius) {
  const gridWithCircle = [];
  for (let row = 0; row < rows; row++) {
    let line = "";
    for (let col = 0; col < cols; col++) {
      const distance = distanceBtwPoint([row, col], [centerX, centerY]);
      const symbol = distance <= radius ? "⬜️" : "⬛️";
      line += symbol;
    }
    gridWithCircle.push(line);
  }

  return gridWithCircle.join("\n");
}

function main (args) {
  const height = parseInt(args[0]) || 30;
  const width = parseInt(args[1]) || 30;
  const centerX = parseInt(args[2]) || 15;
  const centerY = parseInt(args[3]) || 15;
  const radius = parseInt(args[4]) || 10;

  console.log(drawCircle (height, width, centerX, centerY, radius));
}

main (Deno.args);
