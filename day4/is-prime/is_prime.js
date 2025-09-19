const input = 9 ;
let isDivisible = false;
let counter = 2

while(isDivisible != true && counter < input){
  if(input % counter === 0){
    isDivisible = true;
  }
  counter = counter + 1;
}

let suffix =  isDivisible ? "is composite" : "is prime";
console.log(input,suffix);
