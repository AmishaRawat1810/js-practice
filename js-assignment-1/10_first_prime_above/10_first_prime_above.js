// Do not rename a, use it as input for your program.
// While testing we will change its values.

const a = 1;

// Print the first prime number above a
// Printing more than one output or printing anything other than the first prime number above a might will be consider as error.
// Example: If a = 13, then the output should be 17

// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let nextNumber = a;
let isPrime = false;

while(isPrime === false){
  let hasFactor = 0;
  nextNumber = nextNumber + 1;

  for(let counter = 2; counter < nextNumber; counter++){
    if(nextNumber % counter === 0){
      hasFactor = hasFactor + 1;
    }
  }
  if(hasFactor === 0){
    isPrime = true;
  }
}
console.log(nextNumber);