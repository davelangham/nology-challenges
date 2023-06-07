//Allows the Bash terminal to utilise a prompt window.
const prompt = require("prompt-sync")();

// Function instead of variable allows access from a separate code block.
function inputValue(){
  const getUserInput = prompt("Please enter a number:");
  return parseInt(getUserInput);
};

// Puts result of inputValue(); into a variable for improved code readability.
const userValue = inputValue();

//Checks variable's input type; If number, it squares the value, else, lists the variable type and displays invalid.
if (Number.isNaN(userValue)){
  console.log(`This is an invalid value.`);
} else {
  console.log(Math.pow(userValue, 2));
};