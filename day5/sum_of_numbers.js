const startOfRange = 1;
const endOfRange = 5;
const prefix = "range : ";
const suffix = "sum : ";

let sum = 0;
let count = startOfRange;

while(count <= endOfRange){
  sum = sum + count;
  count = count + 1;
}

console.log(prefix,startOfRange,endOfRange);
console.log(suffix,sum);
