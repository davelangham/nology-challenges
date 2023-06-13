let lowerCaseNames = Array(15).fill("gabriel");

// Replaces every odd element in the array with the string "michael"
for (i = 1; i < lowerCaseNames.length; i+=2) {
  if (lowerCaseNames[i]) {
    lowerCaseNames[i] = "michael";
  }
}

console.log(lowerCaseNames);

let upperCaseNames = Array(15);

for (x = 0; x < upperCaseNames.length; x++){
  let upperCaseArray = lowerCaseNames.map(x => x.charAt(0).toUpperCase() + x.slice(1));
  upperCaseNames[x] = upperCaseArray[x];
}

console.log(upperCaseNames);