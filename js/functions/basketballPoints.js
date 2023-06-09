// Sets the amount of 2-pointers & 3-pointers.
let twoP = 25;
let threeP = 20;

// Turns the amount of baskets made into their points equivalent and gets the sum.
function getScore(twoP, threeP){
  return twoP * 2 + threeP * 3;
};

// Assigns the result of the getScore() function to a variable for improved readability.
let score = getScore(twoP, threeP);

// Logs the output to the console.
console.log (score);