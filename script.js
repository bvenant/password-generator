// Assignment code here
var length;
var lowercase;
var uppercase;
var number;
var character;
var options;
  
// Password Parameters
var tall = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')];
var short = ["abcdefghijklmnopqrstuvwxyz".split('')];
var unit= ["0123456789".split('')];
var symbol = ["!@#$%^&*()_+~\\`|}{[]:;?><,./-=".split('')];

// Generate Password
function generatePassword() {

    length = parseInt(prompt("Password will be between 8 and 128 characters. How many characters would you like?"));
    if (length <= 7 || length >= 129) {
      parseInt(prompt("You need to enter a value between 8 and 128"));
    } else if (length => 7 || length <= 129) { 
      alert("Perfect! Click ok to confirm whether or not to include lowercase, uppercase, numeric, and/or special characters");
    } else {
      alert("click ok to next question");
    }

    // Confirm whether or not to include lowercase, uppercase, numeric, and/or special
    lowercase = confirm("Would you like any lowercase letters?");
    if (lowercase) {
      alert("Lowercase picked");
    } else { 
      alert("Option not chosen");
    } 

    uppercase = confirm("Would you like any uppercase letters?");
    if (uppercase) {
      alert("Uppercase picked");
    } else { 
      alert("Option not chosen");
    } 

    number = confirm("Would you like numbers?");
    if (number) {
      alert("Numbers picked");
    } else { 
      alert("Option not chosen");
    } 

    character = confirm("Would you like special characters?");
    if (character) {
      alert("Special Characters picked");
    } else { 
      alert("Option not chosen");
    } 

    options = alert("Make sure 1 of the 4 options are picked!");
    if(!lowercase && !uppercase && !number && !character) {
      alert("You must pick 1 of the 4 options. Please start over!");
    } 
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword( ) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

   
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
