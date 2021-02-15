

// credit w3schools.com for assistance with dynamic range sliders
// Setting dynamic range sliders
var slider = document.getElementById("number-of-characters");
var output = document.getElementById("demo");
var num = []
// Display the default slider value
output.innerHTML = slider.value; 

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  output.innerHTML = this.value;
  num = this.value;
}


var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var special = ["~","!","@","#","$","%","^","&","*","(",")"];
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var available = letters.concat(numbers).concat(special).concat(upper);




// Assignment Code
var generateBtn = document.querySelector("#generate");

  function setAvail () {
    var lettersSet = document.getElementById("letters").getAttribute("value");
    var numbersSet = document.getElementById("numbers").getAttribute("value");
    var specialSet = document.getElementById("special-characters").getAttribute("value");
    var upperSet = document.getElementById("upper-case").getAttribute("value");

    lettersSet.addEventListener("onchange", function () {
      if (lettersSet !== 0) {
        
      }
    })
  }
  function generatePassword() {
    setAvail();
    var password = [];
    for(var i=0; i < num; i++) {
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
