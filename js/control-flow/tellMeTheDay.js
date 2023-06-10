// Declares an array populated with the days of the week.
let today = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// Iterates through the today array, selecting a different day each time & returning that value into the variable todayIs.
function todayIs(){
  for (i = 0; i <= 7; i++){
    let todayIs = today[i];
    return todayIs;
  }
}

// Checks the value of todayIs against a series of cases. If the value matches, it console logs the statement linked to the case.
switch (todayIs()){
    case "Monday":
      console.log(`Today is Monday.`);
    case "Tuesday":
      console.log(`Today is Tuesday.`);
    case "Wednesday":
      console.log(`Today is Wednesday.`);
    case "Thursday":
      console.log(`Today is Thursday.`);
    case "Friday":
      console.log(`Today is Friday.`);
    case "Saturday":
      console.log(`Today is Saturday.`);
    case "Sunday":
      console.log(`Today is Sunday.`);
  }