// Do not rename a use it as input for your program.
// While testing we will change its values.

const a = 31; //370 , 371

// Print true if a is an armstrong number otherwise print false
// A number is called Armstrong number if it is equal to the sum of the cubes of its own digits.
// For example: 153 is an Armstrong number since 153 = 1^3 + 5^3 + 3^3.
// Printing more than one output or printing anything other than armstrong or not armstrong might will be consider as error.

// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let totalDigit = 0;
let aCopy = a;
let sum = 0;

while(aCopy > 0){
  let reminder = aCopy % 10;
  aCopy = (aCopy - reminder) / 10;
  totalDigit = totalDigit + 1;
}

aCopy = a;
let iteration = totalDigit;
while(iteration > 0){
  let reminder = aCopy % 10;
  sum = sum + (reminder**totalDigit);
  aCopy = (aCopy - reminder) / 10;
  iteration = iteration - 1;
}

const isArmstrong = (a === sum);
console.log(isArmstrong);