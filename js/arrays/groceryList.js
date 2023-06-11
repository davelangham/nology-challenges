const prompt = require("prompt-sync")();

let groceryLists = {
  one: ["All-Bran", "Cucumber", "Rice", "Lentils", "Potatoes", "Onions"],
  two: ["Celery", "Worcestershire sauce", "Rice", "Cummin powder", "Cooking salt"],
  three: ["Toilet paper", "Gloves", "Spatula", "Butter", "Ghee"]
}

// Returns a variable with all the elements of the array in a pipe delimited list. 
function pipeDelimitedList(shoppingList) {
  
  // Variable that stores the pipe delimited list.
  let pipeDelimitedList = "";
  
  // Checks if user input is a valid shopping list before passing it to formatting loop.
  if (Array.isArray(shoppingList)){
    // Iterates through the array, consolidating the items into a delimited list with specific formatting.
    for (i = 0; i < shoppingList.length; i++){
      if (i == 0){
        pipeDelimitedList += `${shoppingList[i]} |`
      }else if(i !== shoppingList.length - 1){
        pipeDelimitedList += ` ${shoppingList[i]} |`;
      }else {
        pipeDelimitedList += ` ${shoppingList[i]}`;
      }
    }
  }else {
    // Prevents the "invalid answer" error message from being parsed by the formatting loop.
    return shoppingList;
  }
  
  // Returns the result of the if loop into a variable.
  return pipeDelimitedList;
};

// Prompts the user to select a grocery list to be displayed.
function whichGroceryList(){
  console.log("\nPlease choose a grocery list:\n");
  console.log("Your options are: one, two, or three.\n\nAnything else will be an invalid answer.\n")
  // Passes the user selection into a variable.
  const whichList = prompt("Please select from one, two or three: ")
  // Checks whether the user selection is a valid array within the object groceryLists.
  return groceryLists[whichList] || "This was an invalid answer.\n\nThe program will now exit.\n\nPlease run it again to retry.";
};

// Declares a variable and assigns the selected delimited list to it.
let readableShoppingList = pipeDelimitedList(whichGroceryList());

// Logs the above variable.
console.log(`\n${readableShoppingList}\n`);