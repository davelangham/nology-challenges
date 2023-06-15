// get the button element by id
let button = document.getElementById("darkToggle");

// add a click event listener to the button
button.addEventListener("click", function () {
  // toggle the dark-mode class on the body and button elements
  document.body.classList.toggle("dark-mode");
  button.classList.toggle("dark-mode");

  // check if the body element has the dark-mode class
  if (document.body.classList.contains("dark-mode")) {
    // change the button text to light mode
    button.textContent = "Light mode";
  } else {
    // change the button text to dark mode
    button.textContent = "Dark mode";
  }
});