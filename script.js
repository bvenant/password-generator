// Assignment code here
var length;
var lowercase;
var uppercase;
var number;
var character;
var options;
  
// Password Parameters
var tall = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
var short = "abcdefghijklmnopqrstuvwxyz".split('');
var unit= "0123456789".split('');
var symbol = "!@#$%^&*()_+~\\`|}{[]:;?><,./-=".split('');
possibleCharacters = [];

// Generate Password
function generatePassword() {

    length = parseInt(prompt("Password will be between 8 and 128 characters. How many characters would you like?"));
    while (!length || length < 8 || length > 128) {
      alert("You need to enter a value between 8 and 128");
      length = parseInt(prompt("Password will be between 8 and 128 characters. How many characters would you like?"));
    }
    
    lowercase = confirm("Would you like any lowercase letters?");
    if (lowercase) {
      possibleCharacters = possibleCharacters.concat(short);
    } else { 
      alert("Option not chosen");
    } 

    uppercase = confirm("Would you like any uppercase letters?");
    if (uppercase) {
      possibleCharacters = possibleCharacters.concat(tall);
    } else { 
      alert("Option not chosen");
    } 

    number = confirm("Would you like numbers?");
    if (number) {
      possibleCharacters = possibleCharacters.concat(unit);
    } else { 
      alert("Option not chosen");
    } 

    character = confirm("Would you like special characters?");
    if (character) {
      possibleCharacters = possibleCharacters.concat(symbol);
    } else { 
      alert("Option not chosen");
    } 

    options = alert("Make sure 1 of the 4 options are picked!");
    if(!lowercase && !uppercase && !number && !character) {
      alert("You must pick 1 of the 4 options. Please start over!");
    } 
    // Random Password
    var generatedPassword ="";

    for (var i = 0; i < length; i++) {
      // var randomPick = possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];
      // generatedPassword.push(randomPick);
      generatedPassword += possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];
    }

    return generatedPassword;
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
