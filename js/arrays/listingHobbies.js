// Declares array & populates it.
const hobbies = ["Cooking", "Reading", "Cleaning"];

// Logs a description of the array into the console.
console.log(`This array contains 3 objects. In this case, a list of hobbies.`)

// Removes first object from Array and returns it into the variable firstHobby then logs that variable.
const firstHobby = hobbies.shift();
console.log(`My first hobby was ${firstHobby}. 
${firstHobby} has now been removed from the array by the array.shift() method.`);

// Stores length of array in a variable and logs the length.
let arrayLength = hobbies.length;
console.log(`The array now contains ${hobbies.length} objects.`);

// Adds an object to the end of the array and returns the object into the variable latestHobby. It then logs the updated array legnth in the console.
hobbies.push("Procrastination");
let latestHobby = hobbies[hobbies.length - 1];

// logs updated array length and logs the latest hobby in the array.
console.log(`My newest hobby is ${latestHobby}`);

// Logs the addition of an object to the array & logs the updated array length.
console.log(`Procrastination has been added to the list of hobbies by the array.push() method`);
console.log(`The array now contains ${hobbies.length} objects.`);

for (let i = 0; i < hobbies.length - 1; i++){
  let otherHobbies = hobbies[i];
  console.log(`Another hobby of mine is ${otherHobbies}.`);
}