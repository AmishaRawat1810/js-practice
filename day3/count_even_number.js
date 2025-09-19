let firstNum = 1;
let lastNum = 50;
let countOfEvenNumber = 0;

while(firstNum <= lastNum){
  if(firstNum % 2 === 0){
    console.log(firstNum,"is even.");
    countOfEvenNumber = countOfEvenNumber +1;
  }
  firstNum = firstNum + 1;
}
console.log("Total even numbers count : ",countOfEvenNumber);
