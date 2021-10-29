// Assignment code here
//Created password characters here:
var caseU = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var caseL = 'abcdefghijklmnopqrstuvwxyz';
var charNum = '0123456789';
var charSpec = '!"#$%&*+,-./:;<=>?@^_`|~';

//character array
charArray = [caseU, caseL, charNum, charSpec];


function generatePassword() {
  
}


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
