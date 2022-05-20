// Assignment code here
const length;
const lowercase;
const uppercase;
const number;
const character;
  
// Password Parameters
const tall = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')];
const short = ["abcdefghijklmnopqrstuvwxyz".split('')];
const unit= ["0123456789".split('')];
const symbol = ["!@#$%^&*()_+~\\`|}{[]:;?><,./-=".split('')];

//Generate Password
function generatePassword() {
    length = parseInt(prompt("Password needs to be between 8 and 128 characters"));
    if (length) {
      alert("You need to enter a value");
    } else if (length < 8 || length > 128) {
      length = parseInt(prompt("choose between 8 and 128"));
    } else {
      lowercase = confirm("This will add lowercase letters?");
      uppercase = confirm("This will add uppercase letters?");
      number = confirm("This will add numbers?");
      character = confirm("This will add characters?");
    }
}


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
