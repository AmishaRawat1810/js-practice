// Do not rename n, use it as input for your program.
// While testing we will change their values.
// N will be always 1 or greater.
const n = 0;

// Print the nth Fibonacci term
// Printing more than one output or printing anything other than the nth Fibonacci term might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let firstTerm = 0;
let secondTerm = 1;
let fibonacciTerm = 0;
if( n === 2){
  fibonacciTerm = 1;
}
for(let counter = 2; counter < n ; counter++){
  fibonacciTerm = firstTerm + secondTerm;
  firstTerm = secondTerm;
  secondTerm = fibonacciTerm;
}
console.log(fibonacciTerm);