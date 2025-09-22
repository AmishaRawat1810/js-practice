// Do not rename a, use it as input for your program.
// While testing we will change their values.
// a will be always 1 or greater.
const a = 21;

// Print true(boolean) if a is prime otherwise print false(boolean). DO NOT print "true" or "false".
// Printing more than one output or printing anything other than prime or not prime might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let isPrime = true;
if(a === 1){
  isPrime = false;
}
for(let start = 2; start < a; start++){
  if((a % start === 0) && (a !== 2)){
    isPrime = false
    break;
  }
}
console.log(isPrime);