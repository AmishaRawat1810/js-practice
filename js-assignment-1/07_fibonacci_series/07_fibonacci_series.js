// Do not rename n, use it as input for your program.
// While testing we will change their values.
// n will be a natural number including 0.

const n = 0;

// Print the series till nth Fibonacci term
// Example if n = 7, then the output should be
// 0
// 1
// 1
// 2
// 3
// 5
// 8

// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let firstTerm = 0;
let secondTerm = 1;
let totalTerms = n;

if(totalTerms > 0){
  console.log(firstTerm);
}

let fibonacciTerm = 1;
for(let counter = 1; counter < totalTerms; counter++){
  console.log(fibonacciTerm);
  fibonacciTerm = firstTerm + secondTerm;
  firstTerm = secondTerm;
  secondTerm = fibonacciTerm;
}