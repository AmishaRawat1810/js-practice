const jungle = "  L Z";
let lionMove = -1;
const jungleLength = jungle.length;

for(let start = 0; start < jungleLength; start++){
  if(jungle[start] === "L"){
    //it means that the lion is there in jungle. So we need to check if the zebra is there or not

    for(let current = 0; current < jungleLength; current++){
      let previousLionMove = lionMove;
      if(jungle[current] === "Z"){
        //it means that the jungle has zebra as well.
        lionMove = current - start;
        lionMove = lionMove > 0 ? lionMove - 1 : -(lionMove + 1);

        if((previousLionMove < lionMove) && (previousLionMove !== -1)){
          lionMove = previousLionMove;
        }
        
        previousLionMove = lionMove;
      }
      if(lionMove === 0){
          break;
      }
    }
  }
}

const postfix = "\nZebra died in";
const postPostFix = "steps.";
console.log(jungle,postfix,lionMove,postPostFix);
