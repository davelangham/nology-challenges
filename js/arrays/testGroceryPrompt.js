const prompt = require("prompt-sync")();

let groceryListOne = ["All-Bran", "Cucumber", "Rice", "Lentils", "Potatoes", "Onions"];

let groceryListTwo = ["Celery", "Worcestershire sauce", "Rice", "Cummin powder", "Cooking salt"];

function whichGroceryList(){
  
  // Don't change the spacing within concatenation backticks. it will change how the prompts are displayed within the bash terminal.
  console.log(`
Please choose a grocery list.
  `);
  
  const whichList = prompt("Your options are groceryListOne or groceryListTwo: ");
  
  if (whichList === "groceryListOne"){
    return groceryListOne;
  }else if (whichList === "groceryListTwo"){
    return groceryListTwo;
  }else {
    
    // \n creates a newline for strings in terminal.
    return "\nThis is an invalid response.\n\nYou must write either groceryListOne or grocery ListTwo. \n\nPlease run the program again.\n";
  }
};

let thisGroceryList = whichGroceryList();

console.log(thisGroceryList);