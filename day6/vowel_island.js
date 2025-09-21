const meadow = "eat cake";
const meadowLength = meadow.length;

let isVowel = 0;
let vowelIsland = 0;
let insideIsland = 0;

//to find if the meadow contains any vowel island
for( isVowel = 0; isVowel < meadowLength; isVowel++ ){
  if( meadow[isVowel] === "a" || meadow[isVowel] === "e" || meadow[isVowel] === "i" || meadow[isVowel] === "o" || meadow[isVowel] === "u" ){
    if(insideIsland === 0){
      vowelIsland = vowelIsland + 1;
      insideIsland = 1;
    }
  } else {
    insideIsland = 0;
  }
}

const prefix = "Meadow :";
const infix = "\nVowel Islands :";
console.log(prefix,meadow,infix,vowelIsland);
