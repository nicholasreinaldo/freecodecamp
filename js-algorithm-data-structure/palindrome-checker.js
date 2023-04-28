// Javacript code for Palindrome Checker project from FreeCodeCamp.
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// The main feature of this code is to check a string whether it is a palindrome or not, including non-alphanumberic characters and white spaces.

function palindrome(str) {
  str = str.toLowerCase().replace(/[\W\s_]/g, ""); // this line removes all non-alphanumberic characters (punctuation, spaces, and symbols) and turn everything to the same case (lower case)
  let reversedstr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedstr += str[i]; // this line reverses the string using for loop
  } 
  return reversedstr === str; // this line compares the reversed string `reversed str` to the original string `str`. 
}

palindrome("eye");
