

// credit w3schools.com for assistance with dynamic range sliders
// Setting dynamic range sliders
var slider = document.getElementById("number-of-characters");
var output = document.getElementById("demo");
var num = 8
var letterSet = 1
var numberSet = 1
var specialSet = 1
var upperSet = 1

// Display the default slider value
output.innerHTML = slider.value;

// Update the "number-of-charaters" slider value (each time you drag the slider handle)
slider.oninput = function () {
  output.innerHTML = this.value;
  num = this.value;
}

// setting slider input for character type input
var let = document.getElementById("letters");
let.oninput = function () {
  letterSet = this.value;
}
var numb = document.getElementById("numbers");
numb.oninput = function () {
  numberSet = this.value;
}
var spec = document.getElementById("special-characters");
spec.oninput = function () {
  specialSet = this.value;
}
var upp = document.getElementById("upper-case");
upp.oninput = function () {
  upperSet = this.value;
}

// setting vaiable arrrays for available types
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var special = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var available = [];
var passwordArray = [];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// sets character type availability based on user input
function setAvail() {

  function setLetters() {
    if (letterSet === 1) {
      available.unshift(letters)
    }
  }

  function setNumbers() {
    if (numberSet === 1) {
      available.unshift(numbers)
    }
  }

  function setSpecial() {
    if (specialSet === 1) {
      available.unshift(special)
    }
  }

  function setUpper() {
    if (upperSet === 1) {
      available.unshift(upper)
    }
  }

  setLetters()
  setNumbers()
  setSpecial()
  setUpper()
  
  console.log(available)
  console.log(letterSet)
  console.log(numberSet)
  console.log(specialSet)
  console.log(upperSet)

  return
}

function setArray() {

  for (var i = 0; i < num; i++) {
    passwordArray.push(available[Math.floor(Math.random() * available.length)]);
    console.log(passwordArray);
  } 
}

function generatePassword() {
  setAvail();
  setArray();
  var password = [];
  
  for (var i = 0; i < num; i++) {
    password.push(passwordArray[i][Math.floor(Math.random() * passwordArray[i].length)]);
    // console.log(password);
  }
  
  return password.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  passwordArray = [];
  available = [];

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





