// get the button element by id.
let button = document.getElementById("darkToggle");

// add a click event listener to the button.
button.addEventListener("click", function () {
  // toggle the dark-mode class on the body and button elements.
  document.body.classList.toggle("body-dark-mode");
  document.querySelector(".form").classList.toggle("form-dark-mode");
  document.querySelector(".message").classList.toggle("message-dark-mode");

  // check if the body element has the dark-mode class.
  if (document.body.classList.contains("body-dark-mode")) {
    // change the button text to light mode.
    button.textContent = "Light mode";
  } else {
    // change the button text to dark mode.
    button.textContent = "Dark mode";
  }
});

  document.getElementById("allowedCheck").onsubmit = (event) => {
//  document.querySelector(".form").onsubmit = (event) => {
  event.preventDefault();
  document.getElementById("messageTxt").innerHTML = "";
  if(document.querySelector("#drunk").value < 2 && document.querySelector("#age").value >= 18){
    document.getElementById("beer-bottle").src="../assets/green_beer.svg";
    let ageOK = document.getElementById("messageTxt");
    let p = document.createElement("p");
    p.innerText = "Please come in.";
    ageOK.appendChild(p);
  }else if(document.querySelector("#drunk").value >= 2){
    document.getElementById("beer-bottle").src="../assets/red_beer.svg";
    let inebriated = document.getElementById("messageTxt");
    let p = document.createElement("p");
    p.innerText = "Sorry, we have a legal obligation not to serve intoxicated persons.";
    inebriated.appendChild(p);
  }else if(document.querySelector("#age").value < 18) {
    document.getElementById("beer-bottle").src="../assets/red_beer.svg";
    let ageTooYoung = document.getElementById("messageTxt");
    let p = document.createElement("p");
    p.innerText = "Sorry, you are too young to enter.";
    ageTooYoung.appendChild(p);
  }
}