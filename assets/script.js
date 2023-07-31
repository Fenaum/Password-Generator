var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";


  var length = prompt("Enter password length (8-128 characters):");
  if (length === null) {
    return null; 
  }
  length = parseInt(length);


  if (isNaN(length) || length < 8 || length > 128) {
    alert("Password length must be between 8 and 128 characters.");
    return null;
  }

  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  if (
    !includeLowercase &&
    !includeUppercase &&
    !includeNumeric &&
    !includeSpecial
  ) {
    alert("You must include at least one character type.");
    return null;
  }

  var charSet = "";
  if (includeLowercase) charSet += lowercaseChars;
  if (includeUppercase) charSet += uppercaseChars;
  if (includeNumeric) charSet += numericChars;
  if (includeSpecial) charSet += specialChars;

  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randomIndex];
  }

  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password !== null) {
    passwordText.value = password;
  }
}

generateBtn.addEventListener("click", writePassword);
