function toGreet(greetings,personName) {
  return greetings + personName ;
}

function greeting(greetNumber) {
  switch(greetNumber) {
    case 1 : return "Good Morning,";
    case 2 : return "Good Afternoon, ";
    case 3 : return "Good evening, ";
    case 4 : return "Good night, ";
  }
}

console.log(personToGreet(greeting(3),'Yash'));
