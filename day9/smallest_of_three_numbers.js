function minOfTwo(x, y) {
  return x < y ? x : y;
}

function smallestOfThreeNumber(x, y, z){
  return minOfTwo(minOfTwo(x, y), z);
}

console.log(smallestOfThreeNumber(7, 3, 1));