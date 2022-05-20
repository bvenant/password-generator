// Assignment code here
var length;
var lowercase;
var uppercase;
var number;
var character;
  
// Password Parameters
var tall = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')];
var short = ["abcdefghijklmnopqrstuvwxyz".split('')];
var unit= ["0123456789".split('')];
var symbol = ["!@#$%^&*()_+~\\`|}{[]:;?><,./-=".split('')];

//Generate Password
function generatePassword() {

    length = parseInt(prompt("Password will be between 8 and 128 characters. How many characters would you like?"));
    while (length <= 7 || length >= 129) {
      parseInt(prompt("You need to enter a value between 8 and 128"));
    } if (length => 7 || length <= 129) { 
      alert("Perfect! Click ok to confirm a character")
    } else {
      alert("click ok to next question");
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
