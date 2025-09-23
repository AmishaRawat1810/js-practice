function cubeOf(b) {
  return b ** 3;
}

function cubeOfRange(startOfTheRange, endOfTheRange) {
  for(let term = startOfTheRange; term <= endOfTheRange; term++) {
    console.log(cubeOf(term));
  }
}

cubeOfRange(2,4);
