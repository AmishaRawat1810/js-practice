// Do not rename startOfTheRange or endOfTheRange, use them as input for your program.
// While testing we will change their values.

const startOfTheRange = 1;
const endOfTheRange = 20;

// Print all the even numbers between startOfTheRange and endOfTheRange (both inclusive)
// For example, if startOfTheRange = 1 and endOfTheRange = 10, then the output should be
// 2
// 4
// 6
// 8
// 10

// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let isEven = (startOfTheRange % 2 === 0) ? startOfTheRange : (startOfTheRange + 1);
for( let start = isEven; start <= endOfTheRange; start = start + 2){
  console.log(start);
}