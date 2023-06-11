let testArray = [];

// Auto-populates array with numbers 1 - 50.
for (i = 0; i <= 50; i++){
  testArray.push(i);
}

// Returns the number (position) of each element in an array.
for (x = 0; x < testArray.length; x++){
  console.log(x);
}

// Replaces the 15th element in testArray with the string Banana.
testArray[14] = "Banana";

// Logs the elements in testArray one by one.
for (x = 0; x < testArray.length; x++){
  console.log(testArray[x]);
}

// Replaces every third element in the array with the string strawberry, if it works.
for (y = 1; y < testArray.length; y++){
  if (y % 3 == 0){
    testArray[y] = "Strawberry";
  }
}

// Logs the entire contents of testArray in a single block.
console.log(testArray);