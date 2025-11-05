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

function drawEye (cols, rows, centerX, centerY, radius) {
  const gridWithCircle = [];
  for (let row = 0; row < rows/2; row++) {
    let line = "";
    for (let col = 0; col < cols; col++) {
      const distance = distanceBtwPoint([row, col], [centerX, centerY]);
      if (distance <= radius) {
        line += "⬜️";
        const temp = col + 6;
      } else {
        line += "🟥";
      }
    }
    gridWithCircle.push(line);
  }
  return gridWithCircle.join("\n");
}

function main () {
  const height = 20;
  const width = 20;
  const centerX = 3
  const centerY = 3; //second center is 8,8
  const radius = centerX - 1;

  let eyes = drawEye (height, width, centerX, centerY, radius);
  console.log(eyes);
}

main ();
