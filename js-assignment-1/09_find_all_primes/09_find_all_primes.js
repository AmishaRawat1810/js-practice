// Do not rename startOfRange or endOfRange, use them as input for your program.
// While testing we will change their values.

const startOfRange = 5;
const endOfRange = 11;

// Print all prime numbers between startOfRange and endOfRange(both inclusive).
// For example, if startOfRange = 5 and endOfRange = 13, then the output should be
// 5
// 7
// 11
// 13
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
for(let start = startOfRange; start <= endOfRange; start++){
  let isPrime = true;
  for(let counter = 2; counter < start; counter++){
    if((start % counter === 0)){
      isPrime = false;
    }
  }
  if(isPrime){
    console.log(start);
  }
}