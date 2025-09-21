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

/*
    //for checking whether it is a island of more than 1 vowel
    for( isIsland = isVowel + 1; isIsland < meadowLength; isIsland++ ){
      if ( meadow[isIsland] !== "a" || meadow[isIsland] !== "e" || meadow[isIsland] !== "i" || meadow[isIsland] !== "o" || meadow[isIsland] !== "u" ){
        isVowel = isIsland; //the outer loop equals to found consonant's index
        break;
      }
    }
  }
}
*/
