function floorValue(x) {
  return x - (x % 1);
}

const decimalValue = floorValue(12.34);
console.log(decimalValue);
