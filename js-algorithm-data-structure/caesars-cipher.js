// Javacript code for Caesars Cipher project from FreeCodeCamp.
// The Caesar cipher is a simple substitution cipher in which each letter in the plaintext is shifted a certain number of places down or up the alphabet to create the encrypted text.
// In this function, we'll be using the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

function rot13(str) {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // This line creates a string variable  containing all uppercase letters of the English alphabet.
  let answer = "";
  for (let i = 0; i < str.length; i++) {
    if (alphabet.indexOf(str[i]) >= 13) 
    // This part finds the index of the current character str[i] in the alphabet string. It tells us the position of the character in the alphabet. Then the ">= 13" checks if the index is 13 or greater. If it is, it means the letter is in the second half of the alphabet (M-Z).
      { answer += alphabet[alphabet.indexOf(str[i])-13] }
      // If the above condition is true, this part gets the letter that is 13 positions to the left in the alphabet. This is the ROT13 encryption for characters in the second half of the alphabet.
     else if (alphabet.indexOf(str[i]) < 13 && alphabet.indexOf(str[i]) > -1)  // This part handles letters in the first half of the alphabet (A-L) that are not non-alphabetic characters.
     { answer += alphabet[alphabet.indexOf(str[i])+13] // This part gets the letter that is 13 positions to the right in the alphabet for characters in the first half of the alphabet.
   } else {
     answer += str[i]; // If the current character is not found in the alphabet (like spaces or punctuation marks), it's added to the answer string as is.
   }
  }
  return answer;
}

rot13("SERR PBQR PNZC");
