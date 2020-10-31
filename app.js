// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  let length = parseInt(prompt('Please choose a password length no shorter than 8 and no longer than 128.'))
  let upper = confirm('Would you like uppercase letters?')
  let lower = confirm('Would you like lowercase letters?')
  let num = confirm('Would you like numbers?')
  let special = confirm('Would you like special characters?')
  let upperChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  let lowerChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
  let specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '9', '(', ')', '-', '=', '+']

  if (length >= 8 && length <= 128) {
    let newPass = ''
    let newPassChar = ''
    if (upper === true) {
      newPassChar += upperChar
      newPass += [Math.floor(Math.random() * upperChar.length)]
    }
    if (lower === true) {
      newPassChar = + lowerChar
      newPass += [Math.floor(Math.random() * lowerChar.length)]
    }
    if (numbers === true) {
      newPassChar = + numbers
      newPass += [Math.floor(Math.random() * numbers.length)]
    }
    if (special === true) {
      newPassChar = + specialChar
      newPass += [Math.floor(Math.random() * specialChar.length)]
    }
    console.log(newPassChar);
    for (let i = 0; i < length; i++) {
      let newChar = newPassChar[Math.floor(Math.random() * newPassChar.length)]
      newPass += newChar
    }
    console.log(newPass);
return newPass
  }
  else (length < 8 || length > 128) {
    alert('Sorry, but your number choice was not within allowed parameters.')
  }
}









// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
