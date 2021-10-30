// Assignment code here
//character array:
var charSpec = '!"#$%&*+,-./:;<=>?@^_`|~';
var charNum = '0123456789';
var caseU = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var caseL = 'abcdefghijklmnopqrstuvwxyz';

// criteria prompt
function userPrompt() {

  var pwLength = parseInt(
    window.prompt('Password length must be between 8-128 characters. Please select a number between 8 to 128.')
  );

  // criteria checks
  if (isNaN(pwLength) === true) {
    window.alert('Please enter as a number. The number must be between 8 and 128.');
    userPrompt();
  }

  
  if (pwLength < 8 || pwLength > 128) {
    window.alert('Your password must be between 8-128 characters');
    userPrompt();
  }
}




function generatePassword() {
  userPrompt();
}

// Get references to the #generate element.
let generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
