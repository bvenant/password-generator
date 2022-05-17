// Assignment code here
const length = document.querySelector("length").checked;
const lowercase = document.querySelector("lowercase").checked;
const uppercase = document.querySelector("uppercase").checked;
const number = document.querySelector("number").checked;
const character = document.querySelector("character").checked;
  
//One box needs to be chaecked
var group = length + lowercase + uppercase + number + character;

if (group === 0) { generatedPassword = generatePassword + "Please check at least one!";
    return generatePassword;
  };

  // Password Parameters
    const tall = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    const short = "abcdefghijklmnopqrstuvwxyz".split('');
    const  unit= "0123456789".split('');
    const symbol = "!@#$%^&*()_+~\\`|}{[]:;?><,./-=".split('');




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
