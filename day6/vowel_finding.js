const meadow = "eat cake";
const meadowLength = meadow.length;

const islandRequirement = "aeiou";
const islandRequirementLength = islandRequirement.length;

let isVowel = 0;
let vowelIsland = 0;

//to find if the meadow contains any vowel island
for( isVowel = 0; isVowel < meadowLength; isVowel++ ){
  if( meadow[isVowel] === "a" || meadow[isVowel] === "e" || meadow[isVowel] === "i" || meadow[isVowel] === "o" || meadow[isVowel] === "u" ){
    vowelIsland = vowelIsland + 1;
    
    //for checking whether it is a island of more than 1 vowel
    for( isIsland = isVowel + 1; isIsland < meadowLength; isIsland++ ){
      if ( meadow[isIsland] !== "a" || meadow[isIsland] !== "e" || meadow[isIsland] !== "i" || meadow[isIsland] !== "o" || meadow[isIsland] !== "u" ){
        isVowel = isIsland; //the outer loop equals to found consonant's index
        break;
      }
    }

  }
}

const infix = "\nVowel Islands :";
console.log(meadow,infix,vowelIsland);
