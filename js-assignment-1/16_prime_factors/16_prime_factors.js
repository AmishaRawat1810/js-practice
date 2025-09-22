// Do not rename a, use it as input for your program.
// While testing we will change its values.

const a = 97;

// Print the prime factors of a
// For example, if a = 12, then the output should be
// 2
// 2
// 3
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let aCopy = a;
let start = 2;

while ( start <= a ){
  if(aCopy % start === 0){
    console.log(start);
    aCopy = aCopy / start;
  } else {
    start = start + 1;
  }
}