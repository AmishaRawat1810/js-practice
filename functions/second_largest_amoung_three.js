function minOfTwo(x, y) {
  return x < y ? x : y;
}

function maxOfTwo(x, y) {
  return x > y ? x : y;
}

function secondLargestAmoungThree(x, y, z) {
  return minOfTwo(maxOfTwo(x,y), maxOfTwo(y,z));
}

console.log(secondLargestAmoungThree(3,4,5));
