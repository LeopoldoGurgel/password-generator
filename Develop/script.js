// Assignment code here

function generatePassword() {

// STRINGS CONTAINING DIFFERENT TYPES 
// OF CHARACTERS. THEY WILL BE ACCESSED 
// LATER BY THE FUNCTIONS THAT WILL ASSEMBLE 
/// THE PASSWORD.

  var numbers = "0123456789";
  var lcLetters = "abcdefghijklmnopqrstuvwxyz";
  var ucLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specials = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";

  var chosenChars = "";

  var newPassword = "";


  // QUESTIONS FOR THE USER TO CHOOSE THE LENGTH OF THE 
  // PASSWORD AND WHAT CHARACTERS THEY WANT TO ADD TO IT.
  
  // PROMPTS ALWAYS RETURN A STRING. I NEEDED A NUMBER IN ORDER 
  // TO USE IT IN A FOR LOOP LATER IN THE CODE. THAT GAVE
  // ME A BIT OF A HARD TIME. STACKOVERFLOW PRESENTED ME WITH
  // THE FOLLOWING OPTIONS THAT COULD DO THAT: parseInt(), 
  // number(), parseFloat() and unary. SINCE UNARY IS JUST
  // ADDING A "+" BEFORE THE PROMPT, IT SEEMED TOO GOOD TO BE
  // TRUE. SO I DIDN'T TRUST IT AND WENT FOR PARSEINT.

  var passwordLength = parseInt(prompt("How long do you want your password to be? Choose a number between 8 and 128", " "));
  
  var lengthErr;

  if(passwordLength < 8 || passwordLength > 120  || isNaN(passwordLength)) {
    lengthErr = confirm("ERROR! The password length must be a NUMBER between 8 and 120 characters!");
    generatePassword();
    return;
  }

// ADDING THE DESIRED CHARACTERS TO THE 
// VARIABLE chosenChars. THAT WILL BE USED
// TO BUILD THE PASSWORD.

var addLowercase = confirm("Do you want lowercase characters in your password? Click on 'OK' for YES or on 'CANCEL' for NO.");
var addUppercase = confirm("Do you want uppercase characters in your password? Click on 'OK' for YES or on 'CANCEL' for NO.");
var addNumbers = confirm("Do you want to add numbers to your password? Click on 'OK' for YES or on 'CANCEL' for NO.");
var addSpecials = confirm("Do you want to add special characters to your password? Click on 'OK' for YES or on 'CANCEL' for NO.");

var noCharErr;

if(addLowercase) {
  chosenChars = chosenChars + lcLetters;
};

if (addUppercase) {
  chosenChars = chosenChars + ucLetters;
};

if (addNumbers) {
  chosenChars = chosenChars + numbers;
};

if (addSpecials) {
  chosenChars = chosenChars + specials;
};

if (!addLowercase && !addNumbers && !addSpecials && !addUppercase) {
  noCharErr = confirm("ERROR! You didn't select any type of characters. You have to select at least one type!");
  generatePassword();
  return;
}

// i was making these all into a if/else if statement. But somehow
// it was not working as expected and i had to make it into
// different ifs. Gotta work through that with Sal later.


// NOW WE STEP INTO ACTUALLY BUILDING OUR PASSWORD

for( var i = 0; i < passwordLength; i++) {
  var randomChar = Math.floor(Math.random() * chosenChars.length);
  newPassword = newPassword + chosenChars.charAt(randomChar);
};

return newPassword;

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
