function add(x, y) {
  return x + y;
}

function sub(x, y) {
  return x - y;
}

function product(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

const calculate = function (operation, operand1, operand2) {
  return operation(operand1, operand2);
};

console.log(calculate(add, 4, 5));
