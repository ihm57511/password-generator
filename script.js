

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

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  output.innerHTML = this.value;
  num = this.value;
}

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

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var special = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var available = [];




// Assignment Code
var generateBtn = document.querySelector("#generate");

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

  function setArray() {
    return Array.from(available)
  }

  setLetters()
  setNumbers()
  setSpecial()
  setUpper()
  setArray()

  console.log(available)
  console.log(numberSet)
  console.log(letterSet)
  console.log(upperSet)
  console.log(specialSet)



}

function generatePassword() {
  setAvail();
  var password = [];
  for (var i = 0; i < num; i++) {
    password.push(available[Math.floor(Math.random() * available.length)]);
  } return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// nOc.addEventListener("onchange", setNum());
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);












// console.log(available)
// function set_var(available) {
//   document.querySelector("letters").value;
// add event listener onchange 
// if = 0 sclice(letters)
// else .concat(letters)
//   document.querySelector("numbers").value;
//   document.querySelector("special-characters").value;
//   document.querySelector("upper-case").value;


// // // Assignment Code
// var generateBtn = document.querySelector("#generate");


// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   var num = document.getElementById("number of characters").value;
//   // var available = setAvail();
//   var available = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


//   function generatePassword() {
//     var password = []
//     for(var i=0; i < 8; i++) {
//       password.push(available[Math.floor(Math.random() * available.length)]);
//     } return password
//   }

//   passwordText.value = password;
//   // Add event listener to generate button
//   generateBtn.addEventListener("click", writePassword);







// onchange	An HTML element has been changed
// onclick	The user clicks an HTML element
// onmouseover	The user moves the mouse over an HTML element
// onmouseout	The user moves the mouse away from an HTML element
// onkeydown	The user pushes a keyboard key
// onload	The browser has finished loading the page













// Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
