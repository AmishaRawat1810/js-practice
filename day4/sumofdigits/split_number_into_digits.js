const input = 100;
let digitOfInput = 0;
let inputCopy = input;

console.log("digits of:",input);

while(inputCopy > 0){
  digitOfInput = inputCopy % 10;
  inputCopy = (inputCopy - digitOfInput);
  inputCopy = inputCopy / 10;
  console.log(digitOfInput);
}
