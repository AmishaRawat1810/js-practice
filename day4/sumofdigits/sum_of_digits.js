const input = 456;

let digitOfInput = 0;
let inputCopy = input;
let sumOfDigits = 0;

console.log("digits of:",input);

while(inputCopy > 0){
  digitOfInput = inputCopy % 10;
  inputCopy = (inputCopy - digitOfInput);
  inputCopy = inputCopy / 10;
  sumOfDigits = sumOfDigits + digitOfInput;
  console.log(digitOfInput);
}
console.log("sum of digits :",sumOfDigits);
