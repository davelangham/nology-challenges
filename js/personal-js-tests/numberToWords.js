// Allows the number-to-words module to run.
let numberToWords = require('number-to-words');

console.log(numberToWords.toWords(13));

const prompt = require("prompt-sync")();

// Figured it out. Prompt always returns a string.
const whichList = prompt("Please select from one, two or three: ");

// If condition checks if user inputted a number written as a word, i.e. one, or if they inputted a number i.e. 1.
if (isNaN(parseInt(whichList))){
  console.log("User inputted correctly.");
}else {
  console.log("User inputted incorrectly");
}