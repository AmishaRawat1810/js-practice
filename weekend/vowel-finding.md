accessing | Expected flow
        e-> 1
        ea-> 1
        eat-> 1
        eat -> 1
        eat c-> 1
        eat ca-> 2
        eat cak-> 2
        eat cake-> 3

string => "eat cake"
output => 3
vowelcount => 0
numberOfIsland => 0
length => string.length //8
let i = 0;

loop : i = 0 ; i < length
  if( string[i] === "a" || "e" || "i" || "o" || "u" ){
    island = island + 1; //1
    loop : j = i + 1 ; j < length 
    if ( string[j] !== vowel ){
      i = j;
      break;
    }
  }
