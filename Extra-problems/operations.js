function sum(num1, num2) {
  return num1 + num2;
}

const operations = function (num1, num2) {
  const sub = function (num1, num2) {
    return num1 - num2;
  }
  const product = function (num1, num2) {
    return num1 * num2;
  }
  const sum = function (num1, num2) {
    return num1 + num2;
  }

  console.log(`Num1 : ${num1}  |  Num2 : ${num2}`);
  console.log("Sum : ", sum(2, 3));
  console.log("Difference : ", sub(2, 3));
  console.log("Product : ", product(2, 3));

  return "----------------";
}

console.log(operations(2, 3));

if (true) {
  const sum = function (num1, num2) {
    return num1 + num2;
  }
  console.log("Sum Inside If : ", sum(2, 3), "\n-----------");
}

console.log("Global sum : ", sum(5, 3));
