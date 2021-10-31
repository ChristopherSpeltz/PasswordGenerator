// Assignment code here

// defined character strings
const charTypes = {
  charSpec: '!"#$%&*+,-./:;<=>?@^_`|~',
  charNum: '0123456789',
  caseU: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  caseL: 'abcdefghijklmnopqrstuvwxyz',
}

// created array of functions to generate random characters from strings
const randomNumber = [
  function caseU() {
    return charTypes.caseU[Math.floor(Math.random() * charTypes.caseU.length)];
  },
  function caseU() {
    return charTypes.caseL[Math.floor(Math.random() * charTypes.caseL.length)];
  },
  function charNum() {
    return charTypes.charNum[Math.floor(Math.random() * charTypes.charNum.length)];
  },
  function charSpec() {
    return charTypes.charSpec[Math.floor(Math.random() * charTypes.charSpec.length)];
  }
];

function generatePassword() {
  
  let pwLength = parseInt(
    window.prompt('Password length must be between 8-128 characters. Please select a number between 8 to 128.')
  );

  // user prompt for character length check to confirm password is a number
  if (isNaN(pwLength) === true) {
    window.alert('Please enter as a number. The number must be between 8 and 128.');
    generatePassword();
    return;
  }

  // check to confirm password meets character length
  if (pwLength < 8 || pwLength > 128) {
    window.alert('Your password must be between 8-128 characters');
    generatePassword();
    return;
  }

  // password criteria selection
  let yesCharLower = window.confirm("Click Ok for lowercase characters.");
  let yesCharUpper = window.confirm("Click Ok for uppercase characters.");
  let yesCharNum = window.confirm("Click Ok for numeric characters.");
  let yesCharSpec = window.confirm("Click Ok for special characters.");
 // loop if user selects none of the options
    while (yesCharLower === false && yesCharUpper === false && yesCharNum === false && yesCharSpec === false) {
      window.alert("You must select one character type to continue.");
      generatePassword();
        return;


}}



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
